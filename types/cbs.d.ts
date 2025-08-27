/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 定期快照高级保留策略，四个参数都为必选参数 */
declare interface AdvancedRetentionPolicy {
  /** 保留最新快照Days天内的每天最新的一个快照，取值范围：[0, 100] */
  Days: number;
  /** 保留最新快照Weeks周内的每周最新的一个快照，取值范围：[0, 100] */
  Weeks: number;
  /** 保留最新快照Months月内的每月最新的一个快照， 取值范围：[0, 100] */
  Months: number;
  /** 保留最新快照Years年内的每年最新的一个快照，取值范围：[0, 100] */
  Years: number;
}

/** 本参数用于快照组回滚接口的入参，表示回滚的云盘、快照列表。 */
declare interface ApplyDisk {
  /** 快照组关联的快照ID。 */
  SnapshotId: string;
  /** 快照组关联快照对应的原云硬盘ID。 */
  DiskId: string;
}

/** 描述一个实例已挂载和可挂载数据盘的数量。 */
declare interface AttachDetail {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例已挂载数据盘的数量。 */
  AttachedDiskCount: number;
  /** 实例最大可挂载数据盘的数量。 */
  MaxAttachCount: number;
}

/** 描述了新购云硬盘时自动将云硬盘初始化并挂载至云服务器内部的配置。 */
declare interface AutoMountConfiguration {
  /** 要挂载到的实例ID。 */
  InstanceId: string[];
  /** 子机内的挂载点。 */
  MountPoint?: string[];
  /** 文件系统类型，支持的有 ext4、xfs。 */
  FileSystemType?: string;
}

/** 描述了定期快照策略的详细信息 */
declare interface AutoSnapshotPolicy {
  /** 已绑定当前定期快照策略的云盘ID列表。DescribeDiskAssociatedAutoSnapshotPolicy场景下该字段返回为空。 */
  DiskIdSet?: string[];
  /** 定期快照策略是否激活。 */
  IsActivated?: boolean;
  /** 定期快照策略的状态。取值范围： NORMAL：正常 ISOLATED：已隔离 */
  AutoSnapshotPolicyState?: string;
  /** 是否是跨账号复制快照, 1：是, 0: 不是 */
  IsCopyToRemote?: number;
  /** 使用该定期快照策略创建出来的快照是否永久保留。 */
  IsPermanent?: boolean;
  /** 定期快照下次触发的时间。 */
  NextTriggerTime?: string;
  /** 定期快照策略名称。 */
  AutoSnapshotPolicyName?: string;
  /** 定期快照策略ID。 */
  AutoSnapshotPolicyId?: string;
  /** 定期快照的执行策略。 */
  Policy?: Policy[];
  /** 定期快照策略的创建时间。 */
  CreateTime?: string;
  /** 使用该定期快照策略创建出来的快照保留天数。 */
  RetentionDays?: number;
  /** 复制的目标账户ID */
  CopyToAccountUin?: string | null;
  /** 已绑定当前定期快照策略的实例ID列表。 */
  InstanceIdSet?: string[];
  /** 该定期快照创建的快照可以保留的月数。 */
  RetentionMonths?: number;
  /** 该定期快照创建的快照最大保留数量。 */
  RetentionAmount?: number;
  /** 定期快照高级保留策略。 */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy | null;
  /** 该复制快照策略的源端账户ID */
  CopyFromAccountUin?: string | null;
  /** 标签。 */
  Tags?: Tag[];
}

/** 描述独享集群的详细信息。 */
declare interface Cdc {
  /** 独享集群围笼ID。 */
  CageId?: string | null;
  /** 独享集群状态。取值范围：NORMAL：正常；CLOSED：关闭，此时将不可使用该独享集群创建新的云硬盘；FAULT：独享集群状态异常，此时独享集群将不可操作，腾讯云运维团队将会及时修复该集群；ISOLATED：因未及时续费导致独享集群被隔离，此时将不可使用该独享集群创建新的云硬盘，对应的云硬盘也将不可操作。 */
  CdcState?: string;
  /** 独享集群所属的[可用区](/document/product/213/15753)ID。 */
  Zone?: string;
  /** 独享集群实例名称。 */
  CdcName?: string;
  /** 独享集群的资源容量大小。 */
  CdcResource?: CdcSize;
  /** 独享集群实例id。 */
  CdcId?: string;
  /** 独享集群类型。取值范围：CLOUD_BASIC：表示普通云硬盘集群CLOUD_PREMIUM：表示高性能云硬盘集群CLOUD_SSD：SSD表示SSD云硬盘集群。 */
  DiskType?: string;
  /** 独享集群到期时间。 */
  ExpiredTime?: string;
  /** 存储池创建时间。 */
  CreatedTime?: string;
  /** 当前集群中已创建的云盘数量。 */
  DiskNumber?: number;
}

/** 显示独享集群的大小 */
declare interface CdcSize {
  /** 独享集群的总容量大小，单位GiB */
  DiskTotal?: number;
  /** 独享集群的可用容量大小，单位GiB */
  DiskAvailable?: number;
}

/** 描述购买云盘时的费用明细。 */
declare interface DetailPrice {
  /** 描述计费项目名称。 */
  PriceTitle?: string;
  /** 描述计费项目显示名称，用户控制台展示。 */
  PriceName?: string;
  /** 预付费云盘预支费用的原价，单位：元。 */
  OriginalPrice?: number | null;
  /** 预付费云盘预支费用的折扣价，单位：元。 */
  DiscountPrice?: number | null;
  /** 后付费云盘原单价，单位：元。 */
  UnitPrice?: number | null;
  /** 后付费云盘折扣单价，单位：元。 */
  UnitPriceDiscount?: number | null;
  /** 后付费云盘的计价单元，取值范围：HOUR：表示后付费云盘的计价单元是按小时计算。 */
  ChargeUnit?: string | null;
  /** 高精度预付费云盘预支费用的原价，单位：元。 */
  OriginalPriceHigh?: string | null;
  /** 高精度预付费云盘预支费用的折扣价，单位：元。 */
  DiscountPriceHigh?: string | null;
  /** 高精度后付费云盘原单价，单位：元。 */
  UnitPriceHigh?: string | null;
  /** 高精度后付费云盘折扣单价，单位：元。 */
  UnitPriceDiscountHigh?: string | null;
}

/** 描述了云硬盘的详细信息 */
declare interface Disk {
  /** 云盘是否与挂载的实例一起销毁。true:销毁实例时会同时销毁云盘，只支持按小时后付费云盘。false：销毁实例时不销毁云盘。 */
  DeleteWithInstance?: boolean;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费。 */
  RenewFlag?: string;
  /** 硬盘介质类型。取值范围：CLOUD_BASIC：表示普通云硬盘CLOUD_PREMIUM：表示高性能云硬盘CLOUD_BSSD：表示通用型SSD云硬盘CLOUD_SSD：表示SSD云硬盘CLOUD_HSSD：表示增强型SSD云硬盘CLOUD_TSSD：表示极速型SSD云硬盘。 */
  DiskType?: string;
  /** 云盘状态。取值范围：UNATTACHED：未挂载ATTACHING：挂载中ATTACHED：已挂载DETACHING：解挂中EXPANDING：扩容中ROLLBACKING：回滚中TORECYCLE：待回收DUMPING：拷贝硬盘中。 */
  DiskState?: string;
  /** 云盘拥有的快照总数。 */
  SnapshotCount?: number;
  /** 云盘已挂载到子机，且子机与云盘都是包年包月。true：子机设置了自动续费标识，但云盘未设置false：云盘自动续费标识正常。 */
  AutoRenewFlagError?: boolean;
  /** 云盘是否处于快照回滚状态。取值范围：false:表示不处于快照回滚状态true:表示处于快照回滚状态。 */
  Rollbacking?: boolean;
  /** 对于非共享型云盘，该参数为空数组。对于共享型云盘，则表示该云盘当前被挂载到的CVM实例InstanceId */
  InstanceIdList?: string[];
  /** 云盘是否为加密盘。取值范围：false:表示非加密盘true:表示加密盘。 */
  Encrypt?: boolean;
  /** 云硬盘名称。 */
  DiskName?: string;
  /** 云硬盘因欠费销毁或者到期销毁时， 是否使用快照备份数据的标识。true表示销毁时创建快照进行数据备份。false表示直接销毁，不进行数据备份。 */
  BackupDisk?: boolean;
  /** 与云盘绑定的标签，云盘未绑定标签则取值为空。 */
  Tags?: Tag[];
  /** 云硬盘挂载的云主机ID。 */
  InstanceId?: string;
  /** 云盘的挂载类型。取值范围：PF: PF挂载VF: VF挂载 */
  AttachMode?: string;
  /** 云盘关联的定期快照ID。只有在调用[DescribeDisks](/document/product/362/16315)接口时，入参ReturnBindAutoSnapshotPolicy取值为TRUE才会返回该参数。 */
  AutoSnapshotPolicyIds?: string[] | null;
  /** 云硬盘额外性能值，单位MiB/s。 */
  ThroughputPerformance?: number;
  /** 云盘是否处于类型变更中。取值范围：false:表示云盘不处于类型变更中true:表示云盘已发起类型变更，正处于迁移中。 */
  Migrating?: boolean;
  /** 云硬盘ID。 */
  DiskId?: string;
  /** 云盘拥有的快照总容量，单位为MiB。 */
  SnapshotSize?: number;
  /** 云硬盘所在的位置。 */
  Placement?: Placement;
  /** 判断预付费的云盘是否支持主动退还。true:支持主动退还false:不支持主动退还。 */
  IsReturnable?: boolean | null;
  /** 云硬盘的到期时间。 */
  DeadlineTime?: string;
  /** 云盘是否挂载到云主机上。取值范围：false:表示未挂载true:表示已挂载。 */
  Attached?: boolean;
  /** 云硬盘大小，单位GiB。 */
  DiskSize?: number;
  /** 云盘类型变更的迁移进度，取值0到100。 */
  MigratePercent?: number;
  /** 云硬盘类型。取值范围：SYSTEM_DISK：系统盘DATA_DISK：数据盘。 */
  DiskUsage?: string;
  /** 付费模式。取值范围：PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：后付费，即按量计费。 */
  DiskChargeType?: string;
  /** 是否为弹性云盘，false表示非弹性云盘，true表示弹性云盘。 */
  Portable?: boolean;
  /** 云盘是否具备创建快照的能力。取值范围：false表示不具备true表示具备。 */
  SnapshotAbility?: boolean;
  /** 在云盘已挂载到实例，且实例与云盘都是包年包月的条件下，此字段才有意义。true:云盘到期时间早于实例。false：云盘到期时间晚于实例。 */
  DeadlineError?: boolean;
  /** 云盘快照回滚的进度。 */
  RollbackPercent?: number;
  /** 当前时间距离云硬盘到期的天数（仅对预付费云硬盘有意义） */
  DifferDaysOfDeadline?: number | null;
  /** 预付费云盘在不支持主动退还的情况下，该参数表明不支持主动退还的具体原因。取值范围：1：云硬盘已经退还2：云硬盘已过期3：云盘不支持退还8：超过可退还数量的限制。10：非弹性云硬盘、系统盘、后付费云硬盘等不支持退还 */
  ReturnFailCode?: number;
  /** 云盘是否为共享型云盘。 */
  Shareable?: boolean;
  /** 云硬盘的创建时间。 */
  CreateTime?: string;
  /** 销毁云盘时删除关联的非永久保留快照。0 表示非永久快照不随云盘销毁而销毁，1表示非永久快照随云盘销毁而销毁，默认取0。快照是否永久保留可以通过[DescribeSnapshots](https://cloud.tencent.com/document/product/362/15647)接口返回的快照详情的IsPermanent字段来判断，true表示永久快照，false表示非永久快照。 */
  DeleteSnapshot?: number;
  /** 云硬盘备份点配额。表示最大可以保留的备份点数量。 */
  DiskBackupQuota?: number;
  /** 云硬盘备份点已使用的数量。 */
  DiskBackupCount?: number;
  /** 云硬盘挂载实例的类型。取值范围：CVMEKS */
  InstanceType?: string;
  /** 云硬盘最后一次挂载的实例ID */
  LastAttachInsId?: string | null;
  /** 云硬盘最后一次操作错误提示 */
  ErrorPrompt?: string;
  /** 云盘是否开启性能突发 */
  BurstPerformance?: boolean;
  /** 云硬盘加密类型，值为ENCRYPT_V1和ENCRYPT_V2，分别表示第一代和第二代加密技术，两种加密技术互不兼容 */
  EncryptType?: string;
  /** 加密盘密钥ID */
  KmsKeyId?: string;
}

/** 云硬盘备份点。 */
declare interface DiskBackup {
  /** 云硬盘备份点的ID。 */
  DiskBackupId?: string;
  /** 云硬盘备份点关联的云硬盘ID。 */
  DiskId?: string;
  /** 云硬盘大小，单位GiB。 */
  DiskSize?: number;
  /** 云硬盘类型。取值范围：SYSTEM_DISK：系统盘DATA_DISK：数据盘。 */
  DiskUsage?: string;
  /** 备份点名称。 */
  DiskBackupName?: string;
  /** 云硬盘备份点状态。取值范围： NORMAL：正常 CREATING：创建中 ROLLBACKING：回滚中 */
  DiskBackupState?: string;
  /** 云硬盘备份点创建百分比。 */
  Percent?: number;
  /** 云硬盘备份点的创建时间。 */
  CreateTime?: string;
  /** 云盘是否为加密盘。取值范围：false:表示非加密盘true:表示加密盘。 */
  Encrypt?: boolean;
}

/** 描述了实例的计费模式 */
declare interface DiskChargePrepaid {
  /** 购买云硬盘的时长，默认单位为月，取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费 NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费 DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。 */
  RenewFlag?: string;
  /** 需要将云硬盘的到期时间与挂载的子机对齐时，可传入该参数。该参数表示子机当前的到期时间，此时Period如果传入，则表示子机需要续费的时长，云盘会自动按对齐到子机续费后的到期时间续费. */
  CurInstanceDeadline?: string;
}

/** 云盘配置。 */
declare interface DiskConfig {
  /** 配置是否可用。 */
  Available?: boolean;
  /** 付费模式。取值范围：PREPAID：表示预付费，即包年包月POSTPAID_BY_HOUR：表示后付费，即按量计费。 */
  DiskChargeType?: string;
  /** 云硬盘所属的[可用区](/document/product/213/15753)。 */
  Zone?: string;
  /** 实例机型系列。详见[实例类型](https://cloud.tencent.com/document/product/213/11518) */
  InstanceFamily?: string | null;
  /** 云盘介质类型。取值范围：CLOUD_BASIC：表示普通云硬盘CLOUD_PREMIUM：表示高性能云硬盘CLOUD_BSSD：表示通用型SSD云硬盘CLOUD_SSD：表示SSD云硬盘CLOUD_HSSD：表示增强型SSD云硬盘CLOUD_TSSD：表示极速型SSD云硬盘。 */
  DiskType?: string;
  /** 云盘大小变化的最小步长，单位GiB。 */
  StepSize?: number;
  /** 额外的性能区间。 */
  ExtraPerformanceRange?: number[] | null;
  /** 实例机型。 */
  DeviceClass?: string | null;
  /** 云盘类型。取值范围：SYSTEM_DISK：表示系统盘DATA_DISK：表示数据盘。 */
  DiskUsage?: string;
  /** 最小可配置云盘大小，单位GiB。 */
  MinDiskSize?: number;
  /** 最大可配置云盘大小，单位GiB。 */
  MaxDiskSize?: number;
  /** 描述预付费或后付费云盘的价格。 */
  Price?: Price;
}

/** 过滤条件 */
declare interface Filter {
  /** 过滤键的名称 */
  Name: string;
  /** 一个或者多个过滤值 */
  Values: string[];
}

/** 镜像。 */
declare interface Image {
  /** 镜像名称。 */
  ImageName?: string;
  /** 镜像实例ID。 */
  ImageId?: string;
}

/** 描述了实例的抽象位置，包括其所在的可用区，所属的项目，以及所属的独享集群的ID和名字。 */
declare interface Placement {
  /** 云硬盘所属的[可用区](/document/product/213/15753)。该参数也可以通过调用 [DescribeZones](/document/product/213/15707) 的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 围笼Id，可通过 [DescribeDiskStoragePool](https://cloud.tencent.com/document/api/362/62143) 获取。作为入参时，表示对指定的CageId的资源进行操作，可为空。 作为出参时，表示资源所属围笼ID，可为空。 */
  CageId?: string | null;
  /** 实例所属项目ID，可通过DescribeProject获取。不填默认为0，表示默认项目。 */
  ProjectId?: number;
  /** 实例所属项目名称，可通过[DescribeProject](/document/api/651/78725)获取。 */
  ProjectName?: string | null;
  /** 独享集群名字。作为入参时，忽略。作为出参时，表示云硬盘所属的独享集群名，可为空。 */
  CdcName?: string | null;
  /** 实例所属的独享集群ID。可通过 [DescribeDiskStoragePool](https://cloud.tencent.com/document/api/362/62143) 获取。作为入参时，表示对指定的CdcId独享集群的资源进行操作，可为空。 作为出参时，表示资源所属的独享集群的ID，可为空。 */
  CdcId?: string | null;
  /** 独享集群id。 */
  DedicatedClusterId?: string;
}

/** 描述了定期快照的执行策略。可理解为在DayOfWeek/DayOfMonth指定的几天中，或者是IntervalDays设定的间隔的几天，在Hour指定的时刻点执行该条定期快照策。注：DayOfWeek/DayOfMonth/IntervalDays为互斥规则，必填且仅可设置其中一条策略规则。如果同时传入互斥规则，则只有一条生效，优先级为上文列出顺序：例如将三条规则全部设置，只有 DayOfWeek 生效。 */
declare interface Policy {
  /** 指定定期快照策略的触发时间。单位为小时，取值范围：[0, 23]。00:00 ~ 23:00 共 24 个时间点可选，1表示 01:00，依此类推。 */
  Hour: number[];
  /** 指定每周从周一到周日需要触发定期快照的日期，取值范围：[0, 6]。0表示周日触发，1-6分别表示周一至周六。 */
  DayOfWeek?: number[];
  /** 指定每月从月初到月底需要触发定期快照的日期,取值范围：[1, 31]，1-31分别表示每月的具体日期，比如5表示每月的5号。注：若设置29、30、31等部分月份不存在的日期，则对应不存在日期的月份会跳过不打定期快照。 */
  DayOfMonth?: number[];
  /** 指定创建定期快照的间隔天数，取值范围：[1, 365]，例如设置为5，则间隔5天即触发定期快照创建。注：当选择按天备份时，理论上第一次备份的时间为备份策略创建当天。如果当天备份策略创建的时间已经晚于设置的备份时间，那么将会等到第二个备份周期再进行第一次备份。 */
  IntervalDays?: number;
}

/** 预付费订单的费用。 */
declare interface PrepayPrice {
  /** 预付费云盘或快照预支费用的折扣价，单位：元。 */
  DiscountPrice?: number | null;
  /** 后付费云盘的计价单元，取值范围：HOUR：表示后付费云盘的计价单元是按小时计算。 */
  ChargeUnit?: string | null;
  /** 高精度后付费云盘原单价, 单位：元 */
  UnitPriceHigh?: string | null;
  /** 高精度预付费云盘或快照预支费用的原价，单位：元 */
  OriginalPriceHigh?: string | null;
  /** 预付费云盘或快照预支费用的原价，单位：元。 */
  OriginalPrice?: number | null;
  /** 后付费云盘折扣单价，单位：元。 */
  UnitPriceDiscount?: number | null;
  /** 高精度后付费云盘折扣单价, 单位：元 */
  UnitPriceDiscountHigh?: string | null;
  /** 高精度预付费云盘或快照预支费用的折扣价，单位：元 */
  DiscountPriceHigh?: string | null;
  /** 后付费云盘原单价，单位：元。 */
  UnitPrice?: number | null;
  /** 计费项目明细列表。 */
  DetailPrices?: DetailPrice[];
}

/** 描述预付费或后付费云盘的价格。 */
declare interface Price {
  /** 后付费云盘折扣单价，单位：元。 */
  UnitPriceDiscount?: number | null;
  /** 预付费云盘预支费用的折扣价，单位：元。 */
  DiscountPrice?: number | null;
  /** 后付费云盘原单价，单位：元。 */
  UnitPrice?: number | null;
  /** 高精度后付费云盘原单价, 单位：元 */
  UnitPriceHigh?: string | null;
  /** 高精度预付费云盘预支费用的原价, 单位：元	。 */
  OriginalPriceHigh?: string | null;
  /** 预付费云盘预支费用的原价，单位：元。 */
  OriginalPrice?: number | null;
  /** 高精度预付费云盘预支费用的折扣价, 单位：元 */
  DiscountPriceHigh?: string | null;
  /** 高精度后付费云盘折扣单价, 单位：元 */
  UnitPriceDiscountHigh?: string | null;
  /** 后付费云盘的计价单元，取值范围：HOUR：表示后付费云盘的计价单元是按小时计算。 */
  ChargeUnit?: string | null;
}

/** 快照分享信息集合 */
declare interface SharePermission {
  /** 快照分享的时间 */
  CreatedTime?: string;
  /** 分享的账号Id */
  AccountId?: string;
}

/** 描述了快照的详细信息 */
declare interface Snapshot {
  /** 快照所在的位置。 */
  Placement?: Placement;
  /** 是否为跨地域复制的快照。取值范围： true：表示为跨地域复制的快照。 false：本地域的快照。 */
  CopyFromRemote?: boolean;
  /** 快照的状态。取值范围： NORMAL：正常 CREATING：创建中 ROLLBACKING：回滚中 COPYING_FROM_REMOTE：跨地域复制中 CHECKING_COPIED：复制校验中 TORECYCLE：待回收 */
  SnapshotState?: string;
  /** 是否为永久快照。取值范围： true：永久快照 false：非永久快照 */
  IsPermanent?: boolean;
  /** 快照名称，用户自定义的快照别名。调用[ModifySnapshotAttribute](/document/product/362/15650)可修改此字段。 */
  SnapshotName?: string;
  /** 快照到期时间。如果快照为永久保留，此字段为空。 */
  DeadlineTime?: string;
  /** 快照创建进度百分比，快照创建成功后此字段恒为100。 */
  Percent?: number;
  /** 快照关联的镜像列表。 */
  Images?: Image[];
  /** 快照当前被共享数。 */
  ShareReference?: number;
  /** 快照类型，目前该项取值可以为`PRIVATE_SNAPSHOT`（私有快照）或者`SHARED_SNAPSHOT`（共享快照） */
  SnapshotType?: string;
  /** 创建此快照的云硬盘大小，单位GiB。 */
  DiskSize?: number;
  /** 创建此快照的云硬盘ID。 */
  DiskId?: string;
  /** 快照正在跨地域复制的目的地域，若没有则返回`[]`。 */
  CopyingToRegions?: string[];
  /** 是否为加密盘创建的快照。取值范围： true：该快照为加密盘创建的 false：非加密盘创建的快照 */
  Encrypt?: boolean;
  /** 快照的创建时间。 */
  CreateTime?: string;
  /** 快照关联的镜像个数。 */
  ImageCount?: number;
  /** 创建此快照的云硬盘类型。取值范围： SYSTEM_DISK：系统盘 DATA_DISK：数据盘 */
  DiskUsage?: string;
  /** 快照ID。 */
  SnapshotId?: string;
  /** 快照开始共享的时间。 */
  TimeStartShare?: string;
  /** 快照绑定的标签列表。 */
  Tags?: Tag[];
}

/** 描述快照跨地域复制的结果。 */
declare interface SnapshotCopyResult {
  /** 复制到目标地域的新快照ID。 */
  SnapshotId?: string;
  /** 指示具体错误信息，成功时为空字符串。 */
  Message?: string;
  /** 错误码，成功时取值为“Success”。 */
  Code?: string;
  /** 跨地复制的目标地域。 */
  DestinationRegion?: string;
}

/** 描述快照组详情 */
declare interface SnapshotGroup {
  /** 快照组ID。 */
  SnapshotGroupId?: string;
  /** 快照组类型。NORMAL: 普通快照组，非一致性快照。 */
  SnapshotGroupType?: string;
  /** 快照组是否包含系统盘快照。 */
  ContainRootSnapshot?: boolean;
  /** 快照组包含的快照ID列表。 */
  SnapshotIdSet?: string[];
  /** NORMAL: 正常 CREATING: 创建中 ROLLBACKING: 回滚中 */
  SnapshotGroupState?: string;
  /** 快照组创建进度。 */
  Percent?: number;
  /** 快照组创建时间。 */
  CreateTime?: string;
  /** 快照组最新修改时间 */
  ModifyTime?: string;
  /** 快照组关联的镜像列表。 */
  Images?: Image[];
  /** 快照组名称。 */
  SnapshotGroupName?: string;
  /** 快照组关联的镜像数量。 */
  ImageCount?: number;
  /** 快照组是否永久保留 */
  IsPermanent?: boolean;
  /** 快照组到期时间。 */
  DeadlineTime?: string | null;
  /** 来源自动快照策略ID */
  AutoSnapshotPolicyId?: string | null;
}

/** 标签。 */
declare interface Tag {
  /** 标签健。 */
  Key: string;
  /** 标签值。 */
  Value: string;
}

declare interface ApplyDiskBackupRequest {
  /** 云硬盘备份点ID，可以通过[DescribeDiskBackups](/document/product/362/80278)接口查询。 */
  DiskBackupId: string;
  /** 云硬盘备份点原云硬盘ID，可以通过[DescribeDisks](/document/product/362/16315)接口查。 */
  DiskId: string;
  /** 回滚云硬盘备份点前是否自动关机，默认为FALSE，表示不自动关机 */
  AutoStopInstance?: boolean;
  /** 回滚云硬盘备份点完成后是否自动开机，默认为FALSE，表示不自动开机; AutoStartInstance参数需要在AutoStopInstance为true时才能为true。 */
  AutoStartInstance?: boolean;
}

declare interface ApplyDiskBackupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplySnapshotGroupRequest {
  /** 回滚的快照组ID。 */
  SnapshotGroupId: string;
  /** 回滚的快照组关联的快照ID，及快照对应的原云硬盘ID列表。 */
  ApplyDisks: ApplyDisk[];
  /** 回滚前是否执行自动关机。 */
  AutoStopInstance?: boolean;
  /** 回滚完成后是否自动开机。 */
  AutoStartInstance?: boolean;
}

declare interface ApplySnapshotGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplySnapshotRequest {
  /** 快照ID, 可通过[DescribeSnapshots](/document/product/362/15647)查询。 */
  SnapshotId: string;
  /** 快照原云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskId: string;
  /** 回滚前是否执行自动关机，仅支持回滚快照至已挂载的云硬盘时传入。此参数为true时，AutoStartInstance才能为true。 */
  AutoStopInstance?: boolean;
  /** 回滚完成后是否自动开机，仅支持回滚快照至已挂载的云硬盘时传入。该参数传入时，需要同时传入AutoStopInstance参数。 */
  AutoStartInstance?: boolean;
}

declare interface ApplySnapshotResponse {
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

declare interface BindAutoSnapshotPolicyRequest {
  /** 要绑定的定期快照策略ID，通过[ DescribeAutoSnapshotPolicies](https://cloud.tencent.com/document/api/362/33556)接口查询。 */
  AutoSnapshotPolicyId: string;
  /** 要绑定的云硬盘ID列表，一次请求最多绑定80块云盘。 */
  DiskIds?: string[];
}

declare interface BindAutoSnapshotPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopySnapshotCrossRegionsRequest {
  /** 快照需要复制到的目标地域，各地域的标准取值可通过接口[DescribeRegions](https://cloud.tencent.com/document/product/213/9456)查询，且只能传入支持快照的地域。 */
  DestinationRegions: string[];
  /** 需要跨地域复制的源快照ID，可通过[DescribeSnapshots](/document/product/362/15647)查询。 */
  SnapshotId?: string;
  /** 新复制快照的名称，如果不传，则默认取值为“Copied 源快照ID from 地域名”。 */
  SnapshotName?: string;
}

declare interface CopySnapshotCrossRegionsResponse {
  /** 快照跨地域复制的结果，如果请求下发成功，则返回相应地地域的新快照ID，否则返回Error。 */
  SnapshotCopyResultSet?: SnapshotCopyResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAutoSnapshotPolicyRequest {
  /** 定期快照的执行策略。 */
  Policy: Policy[];
  /** 是否创建定期快照的执行策略。TRUE表示只需获取首次开始备份的时间，不实际创建定期快照策略，FALSE表示创建，默认为FALSE。 */
  DryRun?: boolean;
  /** 是否激活定期快照策略，FALSE表示未激活，TRUE表示激活，默认为TRUE。 */
  IsActivated?: boolean;
  /** 要创建的定期快照策略名。不传则默认为“未命名”。最大长度不能超60个字节。 */
  AutoSnapshotPolicyName?: string;
  /** 通过该定期快照策略创建的快照是否永久保留。FALSE表示非永久保留，TRUE表示永久保留，默认为FALSE。 */
  IsPermanent?: boolean;
  /** 通过该定期快照策略创建的快照保留天数，默认保留7天。如果指定本参数，则IsPermanent入参不可指定为TRUE，否则会产生冲突。 */
  RetentionDays?: number;
}

declare interface CreateAutoSnapshotPolicyResponse {
  /** 新创建的定期快照策略ID。 */
  AutoSnapshotPolicyId?: string;
  /** 首次开始备份的时间。 */
  NextTriggerTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDiskBackupRequest {
  /** 要创建备份点的云硬盘名称。 */
  DiskId: string;
  /** 云硬盘备份点名称。长度不能超过100个字符。 */
  DiskBackupName?: string;
}

declare interface CreateDiskBackupResponse {
  /** 云硬盘备份点的ID。 */
  DiskBackupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDisksRequest {
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目。若不指定项目，将在默认项目下进行创建。 */
  Placement: Placement;
  /** 云硬盘计费类型。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费CDCPAID：独享集群付费各类型价格请参考云硬盘[价格总览](/document/product/362/2413)。 */
  DiskChargeType: string;
  /** 硬盘介质类型。取值范围：CLOUD_PREMIUM：表示高性能云硬盘CLOUD_BSSD：表示通用型SSD云硬盘CLOUD_SSD：表示SSD云硬盘CLOUD_HSSD：表示增强型SSD云硬盘CLOUD_TSSD：表示极速型SSD云硬盘。极速型SSD云硬盘（CLOUD_TSSD）仅支持随部分实例类型一同购买，暂不支持单独创建。 */
  DiskType: string;
  /** 云盘显示名称。不传则默认为“未命名”。最大长度不能超60个字节。 */
  DiskName?: string;
  /** 云盘绑定的标签。 */
  Tags?: Tag[];
  /** 快照ID，如果传入则根据此快照创建云硬盘，快照类型必须为数据盘快照，可通过[DescribeSnapshots](/document/product/362/15647)接口查询快照，见输出参数DiskUsage解释。 */
  SnapshotId?: string;
  /** 创建云硬盘数量，不传则默认为1。单次请求最多可创建的云盘数有限制，具体参见[云硬盘使用限制](https://cloud.tencent.com/doc/product/362/5145)。 */
  DiskCount?: number;
  /** 使用此参数可给云硬盘购买额外的性能，单位MB/s。当前仅支持极速型云盘（CLOUD_TSSD）和增强型SSD云硬盘（CLOUD_HSSD）。 */
  ThroughputPerformance?: number;
  /** 购买加密盘时自定义密钥，当传入该参数时，Encrypt参数不得为空。 */
  KmsKeyId?: string;
  /** 云硬盘大小，单位为GiB。如果传入`SnapshotId`则可不传`DiskSize`，此时新建云盘的大小为快照大小如果传入`SnapshotId`同时传入`DiskSize`，则云盘大小必须大于或等于快照大小云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。 */
  DiskSize?: number;
  /** 传入True时，云盘将创建为共享型云盘，默认为False。因共享型云盘不支持加密，此参数与Encrypt参数不可同时传入。 */
  Shareable?: boolean;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 传入该参数用于创建加密云盘，取值固定为ENCRYPT。因共享型云盘不支持加密，此参数与Shareable参数不可同时传入。 */
  Encrypt?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。 */
  DiskChargePrepaid?: DiskChargePrepaid;
  /** 销毁云盘时删除关联的非永久保留快照。0 表示非永久快照不随云盘销毁而销毁，1表示非永久快照随云盘销毁而销毁，默认取0。快照是否永久保留可以通过[DescribeSnapshots](/document/api/362/15647)接口返回的快照详情的IsPermanent字段来判断，True表示永久快照，False表示非永久快照。 */
  DeleteSnapshot?: number;
  /** 创建云盘时指定自动挂载并初始化该数据盘。因加密盘不支持自动挂载及初始化，此参数与Encrypt参数不可同时传入。 */
  AutoMountConfiguration?: AutoMountConfiguration;
  /** 指定云硬盘备份点配额。 */
  DiskBackupQuota?: number;
  /** 创建云盘时是否开启性能突发。当前仅支持极速型云盘（CLOUD_TSSD）和增强型SSD云硬盘（CLOUD_HSSD）且云盘大小不小于460GiB。 */
  BurstPerformance?: boolean;
  /** 指定云硬盘加密类型，取值为ENCRYPT_V1和ENCRYPT_V2，分别表示第一代和第二代加密技术，两种加密技术互不兼容。推荐优先使用第二代加密技术ENCRYPT_V2，第一代加密技术仅支持在部分老旧机型使用。该参数仅当创建加密云硬盘时有效。 */
  EncryptType?: string;
}

declare interface CreateDisksResponse {
  /** 创建的云硬盘ID列表。 */
  DiskIdSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSnapshotGroupRequest {
  /** 需要创建快照组的云硬盘ID列表，必须选择挂载在同一实例上的盘列表。 */
  DiskIds: string[];
  /** 快照组名称，快照组关联的快照也会继承快照组的名称。例如：快照组名称为testSnapshotGroup，快照组关联两个快照，则两个快照的名称分别为testSnapshotGroup_0，testSnapshotGroup_1。 */
  SnapshotGroupName?: string;
  /** 快照组需要绑定的标签列表。 */
  Tags?: Tag[];
}

declare interface CreateSnapshotGroupResponse {
  /** 创建成功的快照组ID。 */
  SnapshotGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSnapshotRequest {
  /** 需要创建快照的云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskId?: string;
  /** 快照名称，不传则新快照名称默认为“未命名”。 */
  SnapshotName?: string;
  /** 快照的到期时间，到期后该快照将会自动删除,需要传入UTC时间下的ISO-8601标准时间格式,例如:2022-01-08T09:47:55+00:00,。到期时间最小可设置为一天后的当前时间。 */
  Deadline?: string;
  /** 云硬盘备份点ID。传入此参数时，将通过备份点创建快照。备份点 ID 可以通过[DescribeDiskBackups](/document/product/362/80278)接口查询。 */
  DiskBackupId?: string;
  /** 快照绑定的标签。 */
  Tags?: Tag[];
  /** 快照关联云硬盘类型, SYSTEM_DISK: 系统盘, DATA_DISK: 数据盘,非必填参数，不填时快照类型与云盘类型保持一致， 该参数基于某些场景用户需要将系统盘创建出数据盘快照共享使用。 */
  DiskUsage?: string;
}

declare interface CreateSnapshotResponse {
  /** 新创建的快照ID。 */
  SnapshotId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAutoSnapshotPoliciesRequest {
  /** 要删除的定期快照策略ID列表，通过[ DescribeAutoSnapshotPolicies](https://cloud.tencent.com/document/api/362/33556)接口查询。 */
  AutoSnapshotPolicyIds: string[];
}

declare interface DeleteAutoSnapshotPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDiskBackupsRequest {
  /** 待删除的云硬盘备份点ID，可以通过[DescribeDiskBackups](/document/product/362/80278)接口查询。 */
  DiskBackupIds: string[];
}

declare interface DeleteDiskBackupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSnapshotGroupRequest {
  /** 快照组ID。 */
  SnapshotGroupId?: string;
  /** 快照组ID 列表。此参数与快照组 ID 至少传 1 个，同时传会与快照组 ID 合并。 */
  SnapshotGroupIds?: string[];
  /** 是否同时删除快照组关联的镜像；取值为false，表示不删除快照组绑定的镜像，此时，如果快照组有绑定的镜像，删除会失败；取值为true，表示同时删除快照组绑定的镜像；默认值为false。 */
  DeleteBindImages?: boolean;
}

declare interface DeleteSnapshotGroupResponse {
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

declare interface DescribeAutoSnapshotPoliciesRequest {
  /** 要查询的定期快照策略ID列表。参数不支持同时指定`AutoSnapshotPolicyIds`和`Filters`。 */
  AutoSnapshotPolicyIds?: string[];
  /** 过滤条件。参数不支持同时指定`AutoSnapshotPolicyIds`和`Filters`。auto-snapshot-policy-id - Array of String - 是否必填：否 -（过滤条件）按定期快照策略ID进行过滤。定期快照策略ID形如：`asp-3stvwfxx`。auto-snapshot-policy-state - Array of String - 是否必填：否 -（过滤条件）按定期快照策略的状态进行过滤。定期快照策略ID形如：`asp-3stvwfxx`。(NORMAL：正常 | ISOLATED：已隔离。)auto-snapshot-policy-name - Array of String - 是否必填：否 -（过滤条件）按定期快照策略名称进行过滤。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。 */
  Offset?: number;
  /** 输出定期快照列表的排列顺序。取值范围：ASC：升序排列DESC：降序排列。 */
  Order?: string;
  /** 定期快照列表排序的依据字段。取值范围：CREATE_TIME：依据定期快照的创建时间排序，默认按创建时间排序。 */
  OrderField?: string;
}

declare interface DescribeAutoSnapshotPoliciesResponse {
  /** 有效的定期快照策略数量。 */
  TotalCount?: number;
  /** 定期快照策略列表。 */
  AutoSnapshotPolicySet?: AutoSnapshotPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskAssociatedAutoSnapshotPolicyRequest {
  /** 要查询的云硬盘ID，通过[DescribeDisks](https://cloud.tencent.com/document/api/362/16315)接口查询。 */
  DiskId: string;
}

declare interface DescribeDiskAssociatedAutoSnapshotPolicyResponse {
  /** 云盘绑定的定期快照数量。 */
  TotalCount?: number;
  /** 云盘绑定的定期快照列表。 */
  AutoSnapshotPolicySet?: AutoSnapshotPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskBackupsRequest {
  /** 要查询备份点的ID列表。参数不支持同时指定 DiskBackupIds 和 Filters。 */
  DiskBackupIds?: string[];
  /** 过滤条件，参数不支持同时指定 DiskBackupIds 和 Filters。过滤条件：disk-backup-id - Array of String - 是否必填：否 -（过滤条件）按照备份点的ID过滤。备份点ID形如：dbp-11112222。disk-id - Array of String - 是否必填：否 -（过滤条件）按照创建备份点的云硬盘ID过滤。云硬盘ID形如：disk-srftydert。disk-usage - Array of String - 是否必填：否 -（过滤条件）按创建备份点的云硬盘类型过滤。 (SYSTEM_DISK：代表系统盘 | DATA_DISK：代表数据盘。) */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。 */
  Limit?: number;
  /** 输出云硬盘备份点列表的排列顺序，默认排序：ASC。取值范围：ASC：升序排列DESC：降序排列。 */
  Order?: string;
  /** 云硬盘备份点列表排序的依据字段。取值范围：CREATE_TIME：依据云硬盘备份点的创建时间排序默认按创建时间排序。 */
  OrderField?: string;
}

declare interface DescribeDiskBackupsResponse {
  /** 符合条件的云硬盘备份点数量。 */
  TotalCount?: number;
  /** 云硬盘备份点的详细信息列表。 */
  DiskBackupSet?: DiskBackup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskConfigQuotaRequest {
  /** 查询类别，取值范围。 INQUIRY_CBS_CONFIG：查询云盘配置列表 INQUIRY_CVM_CONFIG：查询云盘与实例搭配的配置列表。 */
  InquiryType: string;
  /** 付费模式。取值范围： PREPAID：预付费 POSTPAID_BY_HOUR：后付费。 */
  DiskChargeType?: string;
  /** 按照实例机型系列过滤。实例机型系列形如：S1、I1、M1等。详见[实例类型](https://cloud.tencent.com/document/product/213/11518) */
  InstanceFamilies?: string[];
  /** 硬盘介质类型。取值范围： CLOUD_BASIC：表示普通云硬盘 CLOUD_PREMIUM：表示高性能云硬盘 CLOUD_SSD：表示SSD云硬盘 CLOUD_HSSD：表示增强型SSD云硬盘。 */
  DiskTypes?: string[];
  /** 查询一个或多个[可用区](/document/product/213/15753)下的配置。 */
  Zones?: string[];
  /** 实例内存大小,单位GB。 */
  Memory?: number;
  /** 系统盘或数据盘。取值范围： SYSTEM_DISK：表示系统盘 DATA_DISK：表示数据盘。 */
  DiskUsage?: string;
  /** 实例CPU核数。 */
  CPU?: number;
  /** 专用集群ID。 */
  DedicatedClusterId?: string;
}

declare interface DescribeDiskConfigQuotaResponse {
  /** 云盘配置列表。 */
  DiskConfigSet?: DiskConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskStoragePoolRequest {
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。 */
  Limit?: number;
  /** 指定需要查询的独享集群ID列表，该入参不能与Filters一起使用。 */
  CdcIds?: string[];
  /** 过滤条件。参数不支持同时指定`CdcIds`和`Filters`。cdc-id - Array of String - 是否必填：否 -（过滤条件）按独享集群ID过滤。zone - Array of String - 是否必填：否 -（过滤条件）按独享集群所在[可用区](/document/product/213/15753)过滤。cage-id - Array of String - 是否必填：否 -（过滤条件）按独享集群所在围笼的ID过滤。disk-type - Array of String - 是否必填：否 -（过滤条件）按照云盘介质类型过滤。(CLOUD_BASIC：表示普通云硬盘 | CLOUD_PREMIUM：表示高性能云硬盘。| CLOUD_SSD：SSD表示SSD云硬盘。) */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeDiskStoragePoolResponse {
  /** 符合条件的独享集群的数量 */
  TotalCount?: number;
  /** 独享集群的详细信息列表 */
  CdcSet?: Cdc[];
  /** 独享集群的详细信息列表 */
  DiskStoragePoolSet?: Cdc[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisksRequest {
  /** 过滤条件。参数不支持同时指定`DiskIds`和`Filters`。 disk-usage - Array of String - 是否必填：否 -（过滤条件）按云盘类型过滤。 (SYSTEM_DISK：表示系统盘 | DATA_DISK：表示数据盘) disk-charge-type - Array of String - 是否必填：否 -（过滤条件）按照云硬盘计费模式过滤。 (PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费。) portable - Array of String - 是否必填：否 -（过滤条件）按是否为弹性云盘过滤。 (TRUE：表示弹性云盘 | FALSE：表示非弹性云盘。) project-id - Array of String - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。 disk-id - Array of String - 是否必填：否 -（过滤条件）按照云硬盘ID过滤。云盘ID形如：`disk-11112222`。 disk-name - Array of String - 是否必填：否 -（过滤条件）按照云盘名称过滤。 disk-type - Array of String - 是否必填：否 -（过滤条件）按照云盘介质类型过滤。(CLOUD_BASIC：表示普通云硬盘 | CLOUD_PREMIUM：表示高性能云硬盘。| CLOUD_SSD：表示SSD云硬盘 | CLOUD_HSSD：表示增强型SSD云硬盘。| CLOUD_TSSD：表示极速型云硬盘。) disk-state - Array of String - 是否必填：否 -（过滤条件）按照云盘状态过滤。(UNATTACHED：未挂载 | ATTACHING：挂载中 | ATTACHED：已挂载 | DETACHING：解挂中 | EXPANDING：扩容中 | ROLLBACKING：回滚中 | TORECYCLE：待回收 | DUMPING：拷贝硬盘中。) instance-id - Array of String - 是否必填：否 -（过滤条件）按照云盘挂载的云主机实例ID过滤。可根据此参数查询挂载在指定云主机下的云硬盘。 zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/product/213/15753)过滤。 instance-ip-address - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载云主机的内网或外网IP过滤。 instance-name - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载的实例名称过滤。 tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键进行过滤。 tag-value - Array of String - 是否必填：否 -（过滤条件）照标签值进行过滤。 tag:tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。 dedicated-cluster-id - Array of String - 是否必填：否 -（过滤条件）按照 CDC 独享集群 ID 进行过滤。 cluster-group-id - String - 是否必填：否 -（过滤条件）按照 集群群组 ID 进行过滤。 */
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
  TotalCount?: number;
  /** 云硬盘的详细信息列表。 */
  DiskSet?: Disk[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesDiskNumRequest {
  /** 云服务器实例ID，通过[DescribeInstances](/document/product/213/15728)接口查询。 */
  InstanceIds: string[];
}

declare interface DescribeInstancesDiskNumResponse {
  /** 各个云服务器已挂载和可挂载弹性云盘的数量。 */
  AttachDetail?: AttachDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotGroupsRequest {
  /** 过滤条件。snapshot-group-id - Array of String - 是否必填：否 -（过滤条件）按快照组ID过滤 snapshot-group-state - Array of String - 是否必填：否 -（过滤条件）按快照组状态过滤。(NORMAL: 正常 | CREATING:创建中 | ROLLBACKING:回滚中) snapshot-group-name - Array of String - 是否必填：否 -（过滤条件）按快照组名称过滤 snapshot-id - Array of String - 是否必填：否 -（过滤条件）按快照组内的快照ID过滤 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeSnapshotGroupsResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 快照组列表详情。 */
  SnapshotGroupSet?: SnapshotGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotOverviewRequest {
}

declare interface DescribeSnapshotOverviewResponse {
  /** 当前总有效快照数量 */
  TotalNums?: number;
  /** 已使用快照总容量大小，容量单位为GiB */
  TotalSize?: number;
  /** 快照免费额度大小，额度单位为GiB */
  FreeQuota?: number;
  /** 快照真实产生计费的总容量大小，单位为GiB */
  RealTradeSize?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotSharePermissionRequest {
  /** 要查询快照的ID。可通过[DescribeSnapshots](https://cloud.tencent.com/document/api/362/15647)查询获取。 */
  SnapshotId: string;
}

declare interface DescribeSnapshotSharePermissionResponse {
  /** 快照的分享信息的集合 */
  SharePermissionSet?: SharePermission[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotsRequest {
  /** 要查询快照的ID列表。参数不支持同时指定`SnapshotIds`和`Filters`。 */
  SnapshotIds?: string[];
  /** 过滤条件。参数不支持同时指定SnapshotIds和Filters。snapshot-id按照云硬盘快照ID进行过滤类型：String必选：否snapshot-name按照云硬盘快照名称进行过滤类型：String必选：否snapshot-state按照云硬盘快照状态进行过滤类型：String必选：否取值范围：NORMAL：正常 CREATING：创建中 ROLLBACKING：回滚中 COPYING_FROM_REMOTE：跨地域复制中 CHECKING_COPIED：复制校验中TORECYCLE：待回收disk-usage按照云硬盘使用用途进行过滤类型：String必选：否取值范围：SYSTEM_DISK：代表系统盘DATA_DISK：代表数据盘project-id按云硬盘所属项目ID过滤类型：String必选：否disk-id按照云硬盘ID进行过滤，一次最多只能传入10个值类型：String必选：否encrypt按是否加密进行过滤类型：String必选：否snapshot-type按快照归属类型查询类型：String必选：否取值范围：SHARED_SNAPSHOT：表示共享过来的快照PRIVATE_SNAPSHOT：表示自己的私有快照 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。 */
  Limit?: number;
  /** 快照列表排序的依据字段。取值范围：CREATE_TIME：依据快照的创建时间排序默认按创建时间排序 */
  OrderField?: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。 */
  Offset?: number;
  /** 输出云盘列表的排列顺序。取值范围： ASC：升序排列 DESC：降序排列。 */
  Order?: string;
}

declare interface DescribeSnapshotsResponse {
  /** 快照的数量。 */
  TotalCount?: number;
  /** 快照的详情列表。 */
  SnapshotSet?: Snapshot[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachDisksRequest {
  /** 将要卸载的云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询，单次请求最多可卸载10块弹性云盘。 */
  DiskIds: string[];
  /** 对于非共享型云盘，会根据该参数校验是否与实际挂载的实例一致；对于共享型云盘，该参数表示要从哪个CVM实例上卸载云盘。 */
  InstanceId?: string;
}

declare interface DetachDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSnapOverviewRequest {
}

declare interface GetSnapOverviewResponse {
  /** 用户快照总大小 */
  TotalSize?: number;
  /** 用户快照总大小（用于计费） */
  RealTradeSize?: number;
  /** 快照免费额度 */
  FreeQuota?: number;
  /** 快照总个数 */
  TotalNums?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InitializeDisksRequest {
  /** 待重新初始化的云硬盘ID列表，可以通过[DescribeDisks](/document/product/362/16315)接口查询， 单次初始化限制20块以内 */
  DiskIds: string[];
}

declare interface InitializeDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceModifyDiskBackupQuotaRequest {
  /** 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskId: string;
  /** 修改后的云硬盘备份点配额，即云盘可以拥有的备份点数量，单位为个。 */
  DiskBackupQuota: number;
}

declare interface InquirePriceModifyDiskBackupQuotaResponse {
  /** 描述了修改云硬盘备份点之后的云盘价格。 */
  DiskPrice?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceModifyDiskExtraPerformanceRequest {
  /** 额外购买的云硬盘性能值，单位MiB/s。仅大小超过460GiB的增强型SSD（CLOUD_HSSD）和极速型SSD（CLOUD_TSSD）云硬盘才支持购买额外性能。 */
  ThroughputPerformance: number;
  /** 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskId: string;
}

declare interface InquirePriceModifyDiskExtraPerformanceResponse {
  /** 描述了调整云盘额外性能时对应的价格。 */
  DiskPrice?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateDisksRequest {
  /** 云硬盘计费类型： PREPAID：预付费，即包年包月 POSTPAID_BY_HOUR：按小时后付费 */
  DiskChargeType: string;
  /** 硬盘介质类型。取值范围： CLOUD_PREMIUM：表示高性能云硬盘 CLOUD_SSD：表示SSD云硬盘 CLOUD_HSSD：表示增强型SSD云硬盘 CLOUD_TSSD：表示极速型SSD云硬盘 */
  DiskType: string;
  /** 云硬盘大小，单位为GiB。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。 */
  DiskSize: number;
  /** 云硬盘所属项目ID。该参数可以通过调用[DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。 */
  ProjectId?: number;
  /** 购买云硬盘的数量。不填则默认为1。 */
  DiskCount?: number;
  /** 额外购买的云硬盘性能值，单位MiB/s。仅大小超过460GiB的增强型SSD（CLOUD_HSSD）和极速型SSD（CLOUD_TSSD）云硬盘才支持购买额外性能。 */
  ThroughputPerformance?: number;
  /** 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。 */
  DiskChargePrepaid?: DiskChargePrepaid;
  /** 指定云硬盘备份点配额。 */
  DiskBackupQuota?: number;
}

declare interface InquiryPriceCreateDisksResponse {
  /** 描述了新购云盘的价格。 */
  DiskPrice?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewDisksRequest {
  /** 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月云盘的购买时长。如果在该参数中指定CurInstanceDeadline，则会按对齐到子机到期时间来续费。如果是批量续费询价，该参数与Disks参数一一对应，元素数量需保持一致。 */
  DiskChargePrepaids?: DiskChargePrepaid[];
  /** 指定云硬盘新的到期时间，形式如：2017-12-17 00:00:00。参数`NewDeadline`和`DiskChargePrepaids`是两种指定询价时长的方式，两者必传一个。 */
  NewDeadline?: string;
  /** 云硬盘所属项目ID。该参数可以通过调用[DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。 如传入则仅用于鉴权。 */
  ProjectId?: number;
}

declare interface InquiryPriceRenewDisksResponse {
  /** 描述了续费云盘的价格。 */
  DiskPrice?: PrepayPrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceResizeDiskRequest {
  /** 云硬盘扩容后的大小，单位为GiB，不得小于当前云硬盘大小。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。 */
  DiskSize: number;
  /** 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。与参数DiskIds互斥。 */
  DiskId?: string;
  /** 云硬盘所属项目ID。该参数可以通过调用[DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。 如传入则仅用于鉴权。 */
  ProjectId?: number;
  /** 云硬盘ID列表， 通过[DescribeDisks](/document/product/362/16315)接口查询。与参数DiskId互斥。 */
  DiskIds?: string[];
}

declare interface InquiryPriceResizeDiskResponse {
  /** 描述了扩容云盘的价格。 */
  DiskPrice?: PrepayPrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoSnapshotPolicyAttributeRequest {
  /** 定期快照策略ID。可以通过[查询定期快照策略](https://cloud.tencent.com/document/product/362/33556)API查询。 */
  AutoSnapshotPolicyId: string;
  /** 是否激活定期快照策略，`false`表示未激活，`true`表示激活；默认为`true`。 */
  IsActivated?: boolean;
  /** 通过该定期快照策略创建的快照是否永久保留。`false`表示非永久保留，`true`表示永久保留，默认为`false`。 */
  IsPermanent?: boolean;
  /** 要创建的定期快照策略名。不传则默认为“未命名”。最大长度不能超60个字节。 */
  AutoSnapshotPolicyName?: string;
  /** 定期快照的执行策略。 */
  Policy?: Policy[];
  /** 通过该定期快照策略创建的快照保留天数。如果指定本参数，则IsPermanent入参不可指定为TRUE，否则会产生冲突。 */
  RetentionDays?: number;
}

declare interface ModifyAutoSnapshotPolicyAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDiskAttributesRequest {
  /** 一个或多个待操作的云硬盘ID，可以通过[DescribeDisks](/document/product/362/16315)接口查询。如果传入多个云盘ID，仅支持将所有云盘修改为同一属性。 */
  DiskIds: string[];
  /** 新的云硬盘名称。 */
  DiskName?: string;
  /** 是否为弹性云盘，FALSE表示非弹性云盘，TRUE表示弹性云盘。仅支持非弹性云盘修改为弹性云盘。 */
  Portable?: boolean;
  /** 新的云硬盘项目ID，只支持修改弹性云盘的项目ID。通过[DescribeProject](/document/api/378/4400)接口查询可用项目及其ID。 */
  ProjectId?: number;
  /** 成功挂载到云主机后该云硬盘是否随云主机销毁，TRUE表示随云主机销毁，FALSE表示不随云主机销毁。仅支持按量计费云硬盘数据盘。 */
  DeleteWithInstance?: boolean;
  /** 变更云盘类型时，可传入该参数，表示变更的目标类型，取值范围：CLOUD_PREMIUM：表示高性能云硬盘CLOUD_SSD：表示SSD云硬盘。当前不支持批量变更类型，即传入DiskType时，DiskIds仅支持传入一块云盘；变更云盘类型时不支持同时变更其他属性。具体说明请参考[调整云硬盘类型](https://cloud.tencent.com/document/product/362/32540) */
  DiskType?: string;
  /** 开启/关闭云盘性能突发功能，取值范围： CREATE：开启CANCEL：关闭 */
  BurstPerformanceOperation?: string;
}

declare interface ModifyDiskAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDiskBackupQuotaRequest {
  /** 云硬盘ID。可通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskId: string;
  /** 调整之后的云硬盘备份点配额。取值范围为1 ~ 1024。 */
  DiskBackupQuota: number;
}

declare interface ModifyDiskBackupQuotaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDiskExtraPerformanceRequest {
  /** 额外购买的云硬盘性能值，单位MiB/s。 */
  ThroughputPerformance: number;
  /** 需要购买额外性能值的云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。仅大小超过460GiB的增强型SSD（CLOUD_HSSD）和极速型SSD（CLOUD_TSSD）云硬盘才支持购买额外性能。 */
  DiskId: string;
}

declare interface ModifyDiskExtraPerformanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDisksChargeTypeRequest {
  /** 一个或多个待操作的云硬盘ID,可以通过[DescribeDisks](/document/product/362/16315)接口查询。每次请求批量云硬盘上限为100。 */
  DiskIds: string[];
  /** 设置为预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。 */
  DiskChargePrepaid?: DiskChargePrepaid;
  /** 设置为后付费模式 */
  DiskChargePostpaid?: boolean;
}

declare interface ModifyDisksChargeTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDisksRenewFlagRequest {
  /** 一个或多个待操作的云硬盘ID，该参数可以通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskIds: string[];
  /** 云硬盘的自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费 */
  RenewFlag: string;
  /** 该参数支持设置云硬盘的自动续费周期，单位为月。取值范围：[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36] */
  AutoRenewPeriod?: number;
}

declare interface ModifyDisksRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySnapshotAttributeRequest {
  /** 快照ID, 可通过[DescribeSnapshots](https://cloud.tencent.com/document/api/362/15647)查询。 */
  SnapshotId: string;
  /** 快照的保留方式，FALSE表示非永久保留，TRUE表示永久保留。 */
  IsPermanent?: boolean;
  /** 新的快照名称。最长为60个字符。 */
  SnapshotName?: string;
  /** 快照的到期时间；设置好快照将会被同时设置为非永久保留方式；超过到期时间后快照将会被自动删除。注：该参数仅在参数IsPermanent为False时生效。 */
  Deadline?: string;
}

declare interface ModifySnapshotAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySnapshotsSharePermissionRequest {
  /** 快照ID, 可通过[DescribeSnapshots](https://cloud.tencent.com/document/api/362/15647)查询获取。 */
  SnapshotIds: string[];
  /** 接收分享快照的账号Id列表，array型参数的格式可以参考[API简介](https://cloud.tencent.com/document/api/213/568)。账号ID不同于QQ号，查询用户账号ID请查看[账号信息](https://console.cloud.tencent.com/developer)中的账号ID栏。 */
  AccountIds: string[];
  /** 操作，包括 SHARE，CANCEL。其中SHARE代表分享操作，CANCEL代表取消分享操作。 */
  Permission: string;
}

declare interface ModifySnapshotsSharePermissionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDiskRequest {
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月云硬盘的续费时长。在云硬盘与挂载的实例一起续费的场景下，可以指定参数CurInstanceDeadline，此时云硬盘会按对齐到实例续费后的到期时间来续费。 */
  DiskChargePrepaid: DiskChargePrepaid;
  /** 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskId: string;
}

declare interface RenewDiskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeDiskRequest {
  /** 云硬盘扩容后的大小，单位为GB，必须大于当前云硬盘大小。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。 */
  DiskSize: number;
  /** 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。该字段仅供单块云硬盘扩容时传入。 */
  DiskId?: string;
}

declare interface ResizeDiskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateDisksRequest {
  /** 需退还的云盘ID列表，通过[DescribeDisks](/document/product/362/16315)接口查询。 */
  DiskIds: string[];
  /** 销毁云盘时删除关联的非永久保留快照。0 表示非永久快照不随云盘销毁而销毁，1表示非永久快照随云盘销毁而销毁，默认取0。快照是否永久保留可以通过DescribeSnapshots接口返回的快照详情的IsPermanent字段来判断，true表示永久快照，false表示非永久快照。 */
  DeleteSnapshot?: number;
}

declare interface TerminateDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindAutoSnapshotPolicyRequest {
  /** 要解绑的定期快照策略ID。 */
  AutoSnapshotPolicyId: string;
  /** 要解绑定期快照策略的云盘ID列表。此参数与 InstanceIds 参数至少需要传入一个。 */
  DiskIds?: string[];
  /** 要解绑定期快照策略的实例ID列表。此参数与 DiskIds 参数至少需要传入一个。 */
  InstanceIds?: string[];
}

declare interface UnbindAutoSnapshotPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cbs 云硬盘} */
declare interface Cbs {
  (): Versions;
  /** 回滚备份点 {@link ApplyDiskBackupRequest} {@link ApplyDiskBackupResponse} */
  ApplyDiskBackup(data: ApplyDiskBackupRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyDiskBackupResponse>;
  /** 回滚快照 {@link ApplySnapshotRequest} {@link ApplySnapshotResponse} */
  ApplySnapshot(data: ApplySnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<ApplySnapshotResponse>;
  /** 回滚快照组 {@link ApplySnapshotGroupRequest} {@link ApplySnapshotGroupResponse} */
  ApplySnapshotGroup(data: ApplySnapshotGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ApplySnapshotGroupResponse>;
  /** 挂载云硬盘 {@link AttachDisksRequest} {@link AttachDisksResponse} */
  AttachDisks(data: AttachDisksRequest, config?: AxiosRequestConfig): AxiosPromise<AttachDisksResponse>;
  /** 绑定定期快照策略 {@link BindAutoSnapshotPolicyRequest} {@link BindAutoSnapshotPolicyResponse} */
  BindAutoSnapshotPolicy(data: BindAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<BindAutoSnapshotPolicyResponse>;
  /** 快照跨地域复制 {@link CopySnapshotCrossRegionsRequest} {@link CopySnapshotCrossRegionsResponse} */
  CopySnapshotCrossRegions(data: CopySnapshotCrossRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<CopySnapshotCrossRegionsResponse>;
  /** 创建定期快照策略 {@link CreateAutoSnapshotPolicyRequest} {@link CreateAutoSnapshotPolicyResponse} */
  CreateAutoSnapshotPolicy(data: CreateAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoSnapshotPolicyResponse>;
  /** 创建云硬盘备份点 {@link CreateDiskBackupRequest} {@link CreateDiskBackupResponse} */
  CreateDiskBackup(data: CreateDiskBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDiskBackupResponse>;
  /** 创建云硬盘 {@link CreateDisksRequest} {@link CreateDisksResponse} */
  CreateDisks(data: CreateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisksResponse>;
  /** 创建快照 {@link CreateSnapshotRequest} {@link CreateSnapshotResponse} */
  CreateSnapshot(data?: CreateSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotResponse>;
  /** 创建快照组 {@link CreateSnapshotGroupRequest} {@link CreateSnapshotGroupResponse} */
  CreateSnapshotGroup(data: CreateSnapshotGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotGroupResponse>;
  /** 删除定期快照策略 {@link DeleteAutoSnapshotPoliciesRequest} {@link DeleteAutoSnapshotPoliciesResponse} */
  DeleteAutoSnapshotPolicies(data: DeleteAutoSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAutoSnapshotPoliciesResponse>;
  /** 删除云硬盘备份点 {@link DeleteDiskBackupsRequest} {@link DeleteDiskBackupsResponse} */
  DeleteDiskBackups(data: DeleteDiskBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDiskBackupsResponse>;
  /** 删除快照组 {@link DeleteSnapshotGroupRequest} {@link DeleteSnapshotGroupResponse} */
  DeleteSnapshotGroup(data?: DeleteSnapshotGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotGroupResponse>;
  /** 删除快照 {@link DeleteSnapshotsRequest} {@link DeleteSnapshotsResponse} */
  DeleteSnapshots(data: DeleteSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotsResponse>;
  /** 查询定期快照策略 {@link DescribeAutoSnapshotPoliciesRequest} {@link DescribeAutoSnapshotPoliciesResponse} */
  DescribeAutoSnapshotPolicies(data?: DescribeAutoSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoSnapshotPoliciesResponse>;
  /** 查询云硬盘关联定期快照策略 {@link DescribeDiskAssociatedAutoSnapshotPolicyRequest} {@link DescribeDiskAssociatedAutoSnapshotPolicyResponse} */
  DescribeDiskAssociatedAutoSnapshotPolicy(data: DescribeDiskAssociatedAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskAssociatedAutoSnapshotPolicyResponse>;
  /** 查询备份点列表 {@link DescribeDiskBackupsRequest} {@link DescribeDiskBackupsResponse} */
  DescribeDiskBackups(data?: DescribeDiskBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskBackupsResponse>;
  /** 查询云硬盘配额 {@link DescribeDiskConfigQuotaRequest} {@link DescribeDiskConfigQuotaResponse} */
  DescribeDiskConfigQuota(data: DescribeDiskConfigQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskConfigQuotaResponse>;
  /** 查询云硬盘独享集群列表 {@link DescribeDiskStoragePoolRequest} {@link DescribeDiskStoragePoolResponse} */
  DescribeDiskStoragePool(data?: DescribeDiskStoragePoolRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskStoragePoolResponse>;
  /** 查询云硬盘列表 {@link DescribeDisksRequest} {@link DescribeDisksResponse} */
  DescribeDisks(data?: DescribeDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisksResponse>;
  /** 查询实例关联的云硬盘数量 {@link DescribeInstancesDiskNumRequest} {@link DescribeInstancesDiskNumResponse} */
  DescribeInstancesDiskNum(data: DescribeInstancesDiskNumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesDiskNumResponse>;
  /** 查询快照组列表 {@link DescribeSnapshotGroupsRequest} {@link DescribeSnapshotGroupsResponse} */
  DescribeSnapshotGroups(data?: DescribeSnapshotGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotGroupsResponse>;
  /** 查询快照使用概览 {@link DescribeSnapshotOverviewRequest} {@link DescribeSnapshotOverviewResponse} */
  DescribeSnapshotOverview(data?: DescribeSnapshotOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotOverviewResponse>;
  /** 查看快照分享信息 {@link DescribeSnapshotSharePermissionRequest} {@link DescribeSnapshotSharePermissionResponse} */
  DescribeSnapshotSharePermission(data: DescribeSnapshotSharePermissionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotSharePermissionResponse>;
  /** 查询快照列表 {@link DescribeSnapshotsRequest} {@link DescribeSnapshotsResponse} */
  DescribeSnapshots(data?: DescribeSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotsResponse>;
  /** 卸载云硬盘 {@link DetachDisksRequest} {@link DetachDisksResponse} */
  DetachDisks(data: DetachDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DetachDisksResponse>;
  /** @deprecated 获取快照概览信息 {@link GetSnapOverviewRequest} {@link GetSnapOverviewResponse} */
  GetSnapOverview(data?: GetSnapOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<GetSnapOverviewResponse>;
  /** 重新初始化云硬盘 {@link InitializeDisksRequest} {@link InitializeDisksResponse} */
  InitializeDisks(data: InitializeDisksRequest, config?: AxiosRequestConfig): AxiosPromise<InitializeDisksResponse>;
  /** 修改云硬盘备份点配额询价 {@link InquirePriceModifyDiskBackupQuotaRequest} {@link InquirePriceModifyDiskBackupQuotaResponse} */
  InquirePriceModifyDiskBackupQuota(data: InquirePriceModifyDiskBackupQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceModifyDiskBackupQuotaResponse>;
  /** 调整云硬盘额外性能询价 {@link InquirePriceModifyDiskExtraPerformanceRequest} {@link InquirePriceModifyDiskExtraPerformanceResponse} */
  InquirePriceModifyDiskExtraPerformance(data: InquirePriceModifyDiskExtraPerformanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceModifyDiskExtraPerformanceResponse>;
  /** 创建云硬盘询价 {@link InquiryPriceCreateDisksRequest} {@link InquiryPriceCreateDisksResponse} */
  InquiryPriceCreateDisks(data: InquiryPriceCreateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateDisksResponse>;
  /** 续费云硬盘询价 {@link InquiryPriceRenewDisksRequest} {@link InquiryPriceRenewDisksResponse} */
  InquiryPriceRenewDisks(data: InquiryPriceRenewDisksRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewDisksResponse>;
  /** 扩容云硬盘询价 {@link InquiryPriceResizeDiskRequest} {@link InquiryPriceResizeDiskResponse} */
  InquiryPriceResizeDisk(data: InquiryPriceResizeDiskRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceResizeDiskResponse>;
  /** 修改定期快照策略信息 {@link ModifyAutoSnapshotPolicyAttributeRequest} {@link ModifyAutoSnapshotPolicyAttributeResponse} */
  ModifyAutoSnapshotPolicyAttribute(data: ModifyAutoSnapshotPolicyAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoSnapshotPolicyAttributeResponse>;
  /** 修改云硬盘属性 {@link ModifyDiskAttributesRequest} {@link ModifyDiskAttributesResponse} */
  ModifyDiskAttributes(data: ModifyDiskAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDiskAttributesResponse>;
  /** 调整云硬盘备份点配额 {@link ModifyDiskBackupQuotaRequest} {@link ModifyDiskBackupQuotaResponse} */
  ModifyDiskBackupQuota(data: ModifyDiskBackupQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDiskBackupQuotaResponse>;
  /** 调整云硬盘额外性能 {@link ModifyDiskExtraPerformanceRequest} {@link ModifyDiskExtraPerformanceResponse} */
  ModifyDiskExtraPerformance(data: ModifyDiskExtraPerformanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDiskExtraPerformanceResponse>;
  /** 修改弹性云硬盘计费模式 {@link ModifyDisksChargeTypeRequest} {@link ModifyDisksChargeTypeResponse} */
  ModifyDisksChargeType(data: ModifyDisksChargeTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDisksChargeTypeResponse>;
  /** 修改云硬盘续费标识 {@link ModifyDisksRenewFlagRequest} {@link ModifyDisksRenewFlagResponse} */
  ModifyDisksRenewFlag(data: ModifyDisksRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDisksRenewFlagResponse>;
  /** 修改快照信息 {@link ModifySnapshotAttributeRequest} {@link ModifySnapshotAttributeResponse} */
  ModifySnapshotAttribute(data: ModifySnapshotAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotAttributeResponse>;
  /** 修改快照分享信息 {@link ModifySnapshotsSharePermissionRequest} {@link ModifySnapshotsSharePermissionResponse} */
  ModifySnapshotsSharePermission(data: ModifySnapshotsSharePermissionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotsSharePermissionResponse>;
  /** 续费云硬盘 {@link RenewDiskRequest} {@link RenewDiskResponse} */
  RenewDisk(data: RenewDiskRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDiskResponse>;
  /** 扩容云硬盘 {@link ResizeDiskRequest} {@link ResizeDiskResponse} */
  ResizeDisk(data: ResizeDiskRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeDiskResponse>;
  /** 退还云硬盘 {@link TerminateDisksRequest} {@link TerminateDisksResponse} */
  TerminateDisks(data: TerminateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateDisksResponse>;
  /** 解绑定期快照策略 {@link UnbindAutoSnapshotPolicyRequest} {@link UnbindAutoSnapshotPolicyResponse} */
  UnbindAutoSnapshotPolicy(data: UnbindAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindAutoSnapshotPolicyResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Cbs;
