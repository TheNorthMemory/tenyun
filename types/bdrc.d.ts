/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 备份高级保留策略 */
declare interface AdvancedRetentionPolicy {
  /** 保留设定天数中的每天最新的一个备份 */
  Days: number;
  /** 保留设置周中的每周最新的一个备份 */
  Weeks: number;
  /** 保留设置月内的每月最新的一个备份 */
  Months: number;
  /** 保留设置年内的每年最新的一个备份 */
  Years: number;
}

/** 备份组备份和云盘绑定信息 */
declare interface ApplyDisk {
  /** 备份ID */
  BackupId?: string;
  /** 云盘ID */
  DiskId?: string;
}

/** 备份的执行策略信息 */
declare interface AspInfo {
  /** 备份策略ID */
  AspId?: string;
  /** 备份策略名称 */
  AspName?: string;
  /** 备份策略状态 */
  AspState?: string;
  /** 备份策略执行详情 */
  Policy?: Policy[];
  /** 备份策略是否使能 */
  IsActivated?: boolean;
  /** 是否永久保留 */
  IsPermanent?: boolean;
  /** 保留时间 */
  RetentionDays?: number | null;
  /** 创建时间 */
  CreateTime?: string;
}

/** 定期备份策略的详细信息 */
declare interface AutoBackupPolicy {
  /** 定期备份策略是否激活。 */
  IsActivated?: boolean;
  /** 使用该定期备份策略创建出来的备份是否永久保留。 */
  IsPermanent?: boolean | null;
  /** 使用该定期备份策略创建出来的备份是否永久保留。 */
  NextTriggerTime?: string;
  /** NORMAL */
  AutoBackupPolicyState?: string;
  /** 备份策略的名称。 */
  AutoBackupPolicyName?: string;
  /** 定期备份的执行策略。 */
  Policy?: Policy[];
  /** 备份策略ID。 */
  AutoBackupPolicyId?: string;
  /** 备份策略的创建时间。 */
  CreateTime?: string;
  /** 使用该定期备份策略创建出来的备份保留天数。 */
  RetentionDays?: number;
  /** 用户AppId。 */
  AppId?: number;
  /** 定期备份策略绑定的实例ID列表。 */
  InstanceIdSet?: string[];
  /** 该定期快照创建的快照最大保留月数 */
  RetentionMonths?: number;
  /** 该定期快照创建的快照最大保留数量 */
  RetentionAmount?: number;
  /** 创建人。 */
  AccountName?: string | null;
  /** 主账号uin。 */
  AccountUin?: string | null;
  /** 子账号uin。 */
  SubAccountUin?: string | null;
  /** 策略存储类型 */
  StorageType?: string;
  /** 备份库ID */
  VaultId?: string | null;
  /** 高级保留策略 */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy;
}

/** 描述了 “tat-agent” 相关的信息 */
declare interface AutomationServiceEnabled {
  /** 是否开启该服务。取值范围：TRUE（开启）/FALSE（不开启）。默认取值：TRUE。 */
  Enabled?: boolean;
}

/** 单个备份的操作掩码。 */
declare interface BackupDeniedAction {
  /** 备份ID。 */
  BackupId?: string;
  /** 具体的备份操作掩码列表。 */
  DeniedActions?: DeniedAction[];
}

/** 备份详情 */
declare interface BackupDetail {
  /** 备份组ID */
  BackupId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 备份策略ID */
  AutoBackupPolicyId?: string | null;
  /** 备份和云盘绑定关系 */
  BackupBindDisk?: ApplyDisk[] | null;
}

/** 备份组详情 */
declare interface BackupGroup {
  /** 备份组ID。 */
  BackupGroupId?: string;
  /** 备份组创建进度。 */
  Percent?: number | null;
  /** 备份和云盘绑定关系 */
  BackupBindDisk?: ApplyDisk[] | null;
  /** 备份组名称。 */
  BackupGroupName?: string;
  /** 备份组状态。NORMAL: 正常；CREATING: 创建中；ROLLBACKING: 回滚中 */
  BackupGroupState?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 用户AppId。 */
  AppId?: number;
  /** 是否为永久备份组。 */
  IsPermanent?: boolean;
  /** 备份组的到期时间。如果为永久备份组，则取值为null。 */
  DeadlineTime?: string | null;
  /** 创建备份组的实例ID。 */
  InstanceId?: string | null;
  /** 创建备份组时刻实例的详情。 */
  InstanceDetails?: string | null;
  /** 创建人名称。 */
  AccountName?: string | null;
  /** 主账号uin。 */
  AccountUin?: string | null;
  /** 创建备份的子账号uin。 */
  SubAccountUin?: string | null;
  /** 创建当前备份的定期备份策略ID，为null则为手动创建的备份。 */
  AutoBackupPolicyId?: string | null;
}

/** 备份组的操作掩码 */
declare interface BackupGroupDeniedAction {
  /** 备份组ID */
  BackupGroupId?: string;
  /** 拒绝的操作 */
  DeniedActions?: DeniedAction[];
}

/** 备份组回滚任务 */
declare interface BackupGroupRollbackTask {
  /** 备份组回滚任务 */
  TaskId?: string;
  /** 源实例ID */
  SourceInstanceId?: string;
  /** 目标实例ID */
  TargetInstanceId?: string;
  /** 备份组ID */
  BackupGroupId?: string;
  /** 恢复类型：ORIGINAL-原实例恢复，NEW-新实例恢复 */
  RollbackType?: string;
  /** 任务状态。取值包括"init"、"migrating"、"done"、"failed"。 */
  Status?: string;
  /** 进度 */
  Percent?: number | null;
  /** 开始时间 */
  StartTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** APP ID */
  AppId?: number;
  /** 备份点名称 */
  BackupGroupName?: string;
  /** 恢复失败原因 */
  FailReason?: string;
}

/** 备份点信息 */
declare interface BackupInfo {
  /** 备份点ID */
  BackupId?: string;
  /** 备份名称 */
  BackupName?: string;
  /** 所属计划ID */
  PlanId?: string | null;
  /** 策略ID */
  AspInstanceId?: string;
  /** 资源ID */
  ResourceId?: string;
  /** 备份状态，取值如下：0 备份完成1 创建中（备份进行中）2 部分成功（指定的备份路径中部分目录不存在）3 恢复中（该备份点正在被恢复任务使用）92 已取消98 创建失败99 已删除100 删除中 */
  Status?: number;
  /** 备份路径 */
  BackupPaths?: string[];
  /** 包含文件类型 */
  IncludeFileTypes?: string[] | null;
  /** 排除路径 */
  ExcludePatterns?: string[] | null;
  /** 是否排除系统目录 */
  ExcludeSystemDirectories?: boolean;
  /** 备份库ID */
  VaultId?: string;
  /** 扫描文件数 */
  ScannedFileCount?: number;
  /** 扫描大小(字节) */
  ScannedSize?: number;
  /** 扫描大小(格式化) */
  ScannedSizeFormatted?: string;
  /** 已备份文件数量 */
  BackupFileCount?: number;
  /** 已备份大小(字节) */
  BackupSize?: number;
  /** 已备份大小(格式化) */
  BackupSizeFormatted?: string;
  /** 备份进度(0-100) */
  Progress?: number;
  /** 任务ID */
  JobId?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 是否为永久保留 */
  IsPermanent?: boolean;
  /** 到期时间 */
  Deadline?: string;
  /** 不存在的路径信息 */
  NonExistSourcePaths?: string[] | null;
  /** 备份失败原因 */
  FailReason?: string;
  /** 备份所属AppId */
  AppId?: number;
  /** 备份类型 */
  ResourceType?: string;
}

/** 描述实例的备份信息 */
declare interface BackupInstance {
  /** 实例绑定的定期备份策略列表。 */
  AutoBackupPolicyIdSet?: string[];
  /** 实例ID。 */
  InstanceId?: string;
  /** 用户AppId。 */
  AppId?: number;
  /** 实例最新备份时间。 */
  LatestBackupTime?: string | null;
  /** 实例的备份组ID列表。 */
  BackupGroupIdSet?: string[];
  /** 修改时间。 */
  ModifyTime?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 实例名称 */
  InstanceName?: string;
}

/** 整机备份计划 */
declare interface BackupPlan {
  /** 实例ID */
  InstanceId?: string;
  /** 备份策略ID */
  AutoBackupPolicyId?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** APP ID */
  AppId?: number;
  /** 备份数量 */
  BackupCount?: number;
  /** 上次执行时间 */
  LastTriggerTime?: string | null;
  /** 上次执行错误信息，如果为空表示上次执行成功。 */
  LastTriggerError?: string | null;
}

/** 备份策略概览 */
declare interface BackupPolicyOverview {
  /** 自动备份策略总数 */
  TotalCount?: number;
  /** 已绑定资源的策略数 */
  BoundCount?: number;
  /** 未绑定任何资源的策略数 */
  UnboundCount?: number;
}

/** 备份库信息 */
declare interface BackupVault {
  /** 备份库ID */
  VaultId?: string;
  /** 备份库名称 */
  VaultName?: string;
  /** 备份库描述 */
  Description?: string | null;
  /** 备份库状态：READ_WRITE / READ_ONLY / UNAVAILABLE / DELETING */
  Status?: string;
  /** 加密方式：NONE / SSE-COS / SSE-KMS */
  EncryptType?: string | null;
  /** KMS密钥ID */
  KmsKeyId?: string | null;
  /** 备份库类型：COMMON */
  VaultType?: string;
  /** 关联的备份策略按类型统计 */
  BackupPolicySet?: TypeCount[];
  /** 备份点按类型统计（不含已删除） */
  BackupSet?: TypeCount[];
  /** 地域信息 */
  Region?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 源端数据量 */
  SourceDataSize?: number;
  /** 存储库数据量 */
  VaultDataSize?: number;
}

/** 备份库概览 */
declare interface BackupVaultOverview {
  /** 备份库总数 */
  TotalCount?: number;
  /** 备份库总存储量（已用容量），单位 MB */
  TotalSizeMb?: number;
}

/** 描述了 “基础” 服务相关的信息 */
declare interface BasicServicesSettings {
  /** 是否开启基础服务。取值范围：TRUE（开启）/FALSE（不开启）。默认取值：TRUE。 */
  Enabled?: boolean;
}

/** 共同备份点信息 */
declare interface CommonBackupPoint {
  /** 共同时间点（精确到小时） */
  BackupCommonTime?: string;
  /** 共同备份点信息 */
  BackupDetailSet?: BackupDetail[];
}

/** 复制对信息 */
declare interface CopyPair {
  /** 用户ID */
  AppId?: number;
  /** 复制对ID（CVM 类型为 cvmcopypair-xxxxxxxx，DISK/CFS 类型为 copypair-xxxxxxxx） */
  CopyPairId?: string;
  /** 复制对名称 */
  CopyPairName?: string;
  /** 所属容灾站点对ID */
  SitePairId?: string;
  /** 所属容灾站点对名称 */
  SitePairName?: string;
  /** 保护组ID */
  ProtectGroupId?: string;
  /** 保护组名称 */
  ProtectGroupName?: string;
  /** 复制对状态。可选值：INIT、RUNNING、FULL_COPYING、INC_COPYING、NORMAL、DOWN、DEGRADE 等 */
  CopyPairState?: string;
  /** 复制对类型。可选值：DISK、INSTANCE、CFS */
  CopyPairType?: string;
  /** 生产地域 */
  SourceRegion?: string;
  /** 生产可用区 */
  SourceZone?: string;
  /** 生产端VPC */
  SourceVpc?: string;
  /** 容灾地域 */
  TargetRegion?: string;
  /** 容灾可用区 */
  TargetZone?: string;
  /** 容灾端VPC */
  TargetVpc?: string;
  /** 生产资源ID。CVM 类型为源 InstanceId（ins-xxx）；DISK 类型为源 DiskId（disk-xxx）；CFS 类型为源 FilesystemId（cfs-xxx） */
  SourceResourceId?: string;
  /** 容灾资源ID。语义同 SourceResourceId（CVM/DISK/CFS）。延迟创建模式且 CVM 未真实创建时为占位符 drp-xxx，CVM 创建后为真实 ins-xxx */
  TargetResourceId?: string | null;
  /** 生产站点盘挂载的实例ID（DISK 类型时为挂载的 CVM ins-xxx；INSTANCE 类型时与 SourceResourceId 一致） */
  InstanceId?: string | null;
  /** 所属CVM复制对ID（仅 DISK 类型且其 CVM 复制对存在时返回） */
  InstanceCopyPairId?: string | null;
  /** 复制进度。CVM 类型为所有挂载磁盘进度的平均值；DISK/CFS 类型为本盘进度 */
  Percent?: number | null;
  /** 最新保护时间点。当 CopyPairState=FULL_COPYING 时为 null（首次全量未完成） */
  LatestProtectionTime?: string | null;
  /** RPO（秒） */
  RecoveryPointObjective?: number | null;
  /** 数据方向。可选值：POSITIVE（正向）、REVERSE（反向，failover 后）。后端在 REVERSE 时已自动轮转 src/target 字段 */
  DataDirection?: string;
  /** 创建来源。可选值：LOCAL（本地侧创建）、PEER（对端创建） */
  CreateFrom?: string;
  /** 容灾类型。可选值：CROSS_ZONE（跨可用区）、CROSS_REGION（跨地域）、CROSS_CLOUD（跨云） */
  DisasterRecoveryType?: string;
  /** 对端云名称（仅跨云场景） */
  PeerCloudName?: string | null;
  /** 是否在回滚中（0/1） */
  Rollbacking?: number | null;
  /** 回滚进度 */
  RollbackPercent?: number | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 创建账户 Uin */
  AccountUin?: string | null;
  /** 创建协作者 Uin */
  SubAccountUin?: string | null;
  /** 演练组ID（用于演练组内过滤存量复制对，无演练时为 null） */
  DrillGroupId?: string | null;
  /** 保护时间点列表（仅当 QueryProtectionTime=true 时返回） */
  ProtectionTimeSet?: string[] | null;
  /** CVM下挂载磁盘的复制对列表（仅 CopyPairType=INSTANCE 时返回） */
  DiskCopyPairSet?: DiskCopyPairForCvm[] | null;
  /** 是否为延迟创建模式（创建后固定不变）。仅 CVM 复制对返回 */
  DeferredCreate?: boolean;
  /** 目标 CVM 是否已真实创建（首次 failover 完成后置 true）。仅 CVM 复制对返回 */
  TargetCvmCreated?: boolean;
  /** CVM 创建参数（JSON 字符串）。仅当请求传 QueryCvmCreateParams=true 且复制对处于 deferred_create=1 AND target_cvm_created=0 时返回 */
  CvmCreateParams?: string | null;
}

/** 复制对操作掩码 */
declare interface CopyPairDeniedAction {
  /** 复制对ID */
  CopyPairId?: string;
  /** 被禁止的操作列表（Action名称数组） */
  DeniedActions?: DeniedAction[];
}

/** 复制对价格信息 */
declare interface CopyPairPrice {
  /** 后付费每小时原价，单位：元 */
  UnitPrice?: number | null;
  /** 高精度后付费每小时原价，单位：元（字符串形式，避免精度丢失） */
  UnitPriceHigh?: string | null;
  /** 后付费每小时折扣价，单位：元 */
  UnitPriceDiscount?: number | null;
  /** 高精度后付费每小时折扣价，单位：元（字符串形式，避免精度丢失） */
  UnitPriceDiscountHigh?: string | null;
  /** 折扣，100 表示无折扣，80 表示 8 折 */
  Discount?: number | null;
  /** 计价单元，固定为 HOUR（按小时计费） */
  ChargeUnit?: string | null;
  /** 计费项目明细列表 */
  DetailPrices?: CopyPairPriceDetail[] | null;
}

/** 复制对价格明细项 */
declare interface CopyPairPriceDetail {
  /** 计费项目标识名称。取值：InstanceCount（容灾CVM实例数）、InstanceDataCapacity（容灾CVM实例数据量） */
  PriceName?: string | null;
  /** 计费项目展示名称（跟随语言环境翻译） */
  PriceTitle?: string | null;
  /** 该计费项每小时原价，单位：元 */
  UnitPrice?: number | null;
  /** 该计费项每小时折扣价，单位：元 */
  UnitPriceDiscount?: number | null;
  /** 该计费项的折扣，100 表示无折扣 */
  Discount?: number | null;
  /** 计价单元，固定为 HOUR */
  ChargeUnit?: string;
}

/** 创建cvm参数 */
declare interface CreateInstanceModel {
  /** 源CVM ID */
  SourceInstanceId: string;
  /** 实例计费模式 */
  InstanceChargeType: string;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement: Placement;
  /** 镜像ID */
  ImageId: string;
  /** 指定系统盘规格 */
  SystemDisk: DiskModel;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 实例类型 */
  InstanceType?: string;
  /** 指定数据盘规格列表 */
  DataDisks?: DiskModel[];
  /** 私有网络相关信息配置 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 公网带宽相关信息设置 */
  InternetAccessible?: InternetAccessible;
  /** 实例显示名称。不传则新实例名为"未命名"。最大长度不能超60个字节。 */
  InstanceName?: string;
  /** 实例登录设置 */
  LoginSettings?: LoginSettings;
  /** 增强服务配置 */
  EnhancedService?: EnhancedService;
  /** 竞价实例最高出价 */
  SpotPrice?: string;
  /** 实例主机名 */
  HostName?: string;
  /** 提供给实例使用的用户数据 */
  UserData?: string;
  /** 放置群组ID */
  DisasterRecoverGroupIds?: string[];
  /** 关机计费模式，默认关机收费（KEEP_CHARGING / STOP_CHARGING），仅 CreateInstanceCopyPair 场景生效 */
  StoppedMode?: string;
  /** 容灾演练使用的复制对ID，仅 CreateInstanceDrillPairs 场景生效 */
  CopyPairId?: string;
  /** 容灾演练的恢复时间点，仅 CreateInstanceDrillPairs 场景生效 */
  RecoveryTime?: string;
}

/** 跨云信息 */
declare interface CrossCloudDetails {
  /** 源端云名称（跨云对端云名称） */
  SourceCloudName?: string | null;
  /** 目标端云名称（跨云本端云名称） */
  TargetCloudName?: string | null;
  /** 源端云AppId */
  SourceAppId?: number | null;
  /** 源端云主账号 Uin */
  SourceUin?: string | null;
  /** 源端云子账号 Uin */
  SourceSubAccountUin?: string | null;
  /** 源端云用户名 */
  SourceUserName?: string | null;
  /** 目标端云AppId */
  TargetAppId?: number | null;
  /** 目标端云主账号 Uin */
  TargetUin?: string | null;
  /** 目标端云子账号 Uin */
  TargetSubAccountUin?: string | null;
  /** 对端云的地域显示名 */
  PeerRegionName?: string | null;
  /** 对端云的可用区显示名 */
  PeerZoneName?: string | null;
  /** 对端云的VPC显示名 */
  PeerVpcName?: string | null;
}

/** 删除演练对结果 */
declare interface DeleteDrillPairResult {
  /** 演练对ID。 */
  DrillPairId?: string;
  /** 删除结果码。成功为 Success，失败为对应错误码（如 InternalError.ComponentError）。 */
  Code?: string;
  /** 删除结果描述信息，成功时为空串。 */
  Message?: string;
}

/** 备份不能执行的接口。 */
declare interface DeniedAction {
  /** 不能操作的接口名。 */
  Action?: string;
  /** 接口不能操作的原因。 */
  Message?: string;
  /** 接口不能操作对应提示的错误码。 */
  Code?: string;
}

/** 容灾演练组 */
declare interface DisasterRecoveryDrillGroup {
  /** 资源ID */
  Id?: number | null;
  /** 用户ID */
  AppId?: number;
  /** 账户uin */
  AccountUin?: string | null;
  /** 子账户uin */
  SubAccountUin?: string | null;
  /** 容灾站点对ID */
  SitePairId?: string;
  /** 保护组ID */
  ProtectGroupId?: string;
  /** 演练组ID */
  DrillGroupId?: string;
  /** 演练组名称 */
  DrillGroupName?: string;
  /** 演练组类型。枚举值：DISK / INSTANCE / CFS。 */
  DrillGroupType?: string;
  /** 恢复时间点 */
  RecoveryTime?: string | null;
  /** 演练VPC */
  DrillVpc?: string;
  /** 演练安全组 */
  DrillSecurityGroup?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 生命周期状态。枚举值：NORMAL / DELETED。 */
  LifeState?: string;
  /** 容灾类型。枚举值：CROSS_ZONE / CROSS_REGION 等。 */
  DisasterRecoveryType?: string;
  /** 复制技术。枚举值：SYN（同步）/ ASYN（异步）。 */
  CopyType?: string;
  /** 对端云名称 */
  PeerCloudName?: string | null;
  /** 本地云名称 */
  LocalCloudName?: string | null;
  /** 生产地域 */
  SourceRegion?: string;
  /** 生产可用区 */
  SourceZone?: string;
  /** 生产端VPC */
  SourceVpc?: string;
  /** 演练地域 */
  DrillRegion?: string;
  /** 演练可用区 */
  DrillZone?: string;
  /** 数据方向。枚举值：POSITIVE（正向）/ REVERSE（反向）。 */
  DataDirection?: string;
  /** 绑定的演练资源数量。 */
  BindDrilledResourceCount?: number;
  /** 演练资源状态分布（key 为状态名如 FAILED / SUCCESS，value 为该状态数量）。 */
  DrilledResourceStatusSet?: DrilledResourceStatus[];
}

/** 容灾总览数据 */
declare interface DisasterRecoveryOverview {
  /** 地域 ID */
  Region?: string;
  /** 站点对总数 */
  SitePairCount?: number;
  /** 跨地域站点对数 */
  SitePairCrossRegionCount?: number;
  /** 跨可用区站点对数 */
  SitePairCrossZoneCount?: number;
  /** 跨云站点对数 */
  SitePairCrossCloudCount?: number;
  /** 保护组总数 */
  ProtectGroupCount?: number;
  /** 跨地域保护组数 */
  ProtectGroupCrossRegionCount?: number;
  /** 跨可用区保护组数 */
  ProtectGroupCrossZoneCount?: number;
  /** 跨云保护组数 */
  ProtectGroupCrossCloudCount?: number;
  /** 复制对总数 */
  CopyPairCount?: number;
  /** RPO 正常的复制对数 */
  CopyPairSuccessRPOCount?: number;
  /** RPO 异常的复制对数 */
  CopyPairErrorRPOCount?: number;
  /** 演练对总数 */
  DrillPairCount?: number;
  /** 演练中 */
  DrillPairDrillingCount?: number;
  /** 演练失败 */
  DrillPairFailedCount?: number;
  /** 演练成功 */
  DrillPairSuccessCount?: number;
  /** 受保护资源总数 */
  ProtectedResourceCount?: number;
  /** 受保护资源-复制中 */
  ProtectedResourceCopyingCount?: number;
  /** 受保护资源-已停止/初始化 */
  ProtectedResourceStoppedCount?: number;
  /** 切换失败 */
  FailoverFailedCount?: number;
}

/** cvm的盘复制对信息 */
declare interface DiskCopyPairForCvm {
  /** 云硬盘复制对ID */
  CopyPairId?: string;
  /** 云硬盘复制对名称 */
  CopyPairName?: string;
  /** 生产端云硬盘ID */
  SourceResourceId?: string | null;
  /** 容灾端云硬盘ID（延迟创建模式且 CVM 未真实创建时被脱敏为空字符串） */
  TargetResourceId?: string | null;
  /** 创建时间 */
  CreateTime?: string;
}

/** 描述容灾云硬盘的详情，如云硬盘的镜像格式。 */
declare interface DiskInfo {
  /** 云硬盘ID */
  DiskId?: string;
  /** 云盘的镜像格式。QCOW2: qcow2格式，这种格式的云盘不能用于容灾；RAW：raw格式，可以用于容灾。 */
  ImageFormat?: string;
}

/** 云盘信息 */
declare interface DiskModel {
  /** 云盘类型 */
  DiskType?: string;
  /** 云盘大小（单位GB，范围 (0, 32000]） */
  DiskSize?: number;
  /** 是否随实例删除（仅 DataDisks 元素能传） */
  DeleteWithInstance?: boolean;
}

/** 演练对 */
declare interface DrillPair {
  /** 用户ID */
  AppId?: number;
  /** 演练对ID */
  DrillPairId?: string;
  /** 演练对名称 */
  DrillPairName?: string;
  /** 演练对状态。枚举值：RUNNING / SUCCESS / FAILED 等。 */
  DrillPairState?: string;
  /** 容灾站点对ID */
  SitePairId?: string;
  /** 云硬盘复制对ID */
  CopyPairId?: string;
  /** 生产地域 */
  SourceRegion?: string;
  /** 生产可用区 */
  SourceZone?: string;
  /** 容灾地域 */
  TargetRegion?: string;
  /** 容灾可用区 */
  TargetZone?: string;
  /** 生产站点盘ID */
  SourceResourceId?: string;
  /** 演练资源ID */
  TargetResourceId?: string | null;
  /** 演练对的类型。枚举值：DISK / INSTANCE / CFS。 */
  DrillPairType?: string;
  /** 演练资源容量（GB）。 */
  Size?: number;
  /** 演练的容灾点 */
  RecoveryTime?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 演练结束时间 */
  EndTime?: string | null;
  /** 是否正在回滚。0 - 未回滚，1 - 回滚中。 */
  Rollbacking?: number | null;
  /** 回滚进度百分比（0-100）。 */
  RollbackPercent?: number | null;
  /** 创建定期备份策略的账户uin ID信息 */
  AccountUin?: string | null;
  /** 创建定期备份策略的子账户uin ID信息 */
  SubAccountUin?: string | null;
  /** 保护组ID */
  ProtectGroupId?: string;
  /** 演练组ID */
  DrillGroupId?: string;
  /** 复制对名称。 */
  CopyPairName?: string;
  /** 演练组名称。 */
  DrillGroupName?: string;
}

/** 演练对操作掩码 */
declare interface DrillPairDeniedAction {
  /** 演练对ID */
  DrillPairId?: string;
  /** 被禁止的操作列表（Action名称数组） */
  DeniedActions?: DeniedAction[];
}

/** 演练组关联的演练资源的状态数量统计 */
declare interface DrilledResourceStatus {
  /** 演练组关联的演练资源的状态 */
  ResourceStatus?: string;
  /** 演练组关联演练资源处于某个状态的数量 */
  ResourceCount?: number;
}

/** 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent */
declare interface EnhancedService {
  /** 开启云安全服务。若不指定该参数，则默认开启云安全服务。 */
  SecurityService?: RunSecurityServiceEnabled;
  /** 开启云监控服务。若不指定该参数，则默认开启云监控服务。 */
  MonitorService?: RunSecurityServiceEnabled;
  /** 安装 tat-agent。若不指定该参数，则默认逻辑与 CVM 控制台一致：境外地域不安装、境内非 GPU 机型默认安装、境内 GPU 机型默认不安装。 */
  AutomationService?: AutomationServiceEnabled;
  /** 开启基础服务。 */
  BasicService?: BasicServicesSettings;
}

/** 文件备份概览数据 */
declare interface FileBackupOverview {
  /** 整机备份点总数 */
  BackupCount?: number;
  /** 创建中数量 */
  CreatingBackupCount?: number;
  /** 失败数量 */
  FailedBackupCount?: number;
  /** 已完成数量 */
  SuccessBackupCount?: number;
  /** 恢复中的总数量 */
  RestoringBackupCount?: number;
  /** 整机备份总容量 */
  BackupSizeMb?: number;
  /** 受保护 CVM 资源数 */
  BackupResourceCount?: number;
}

/** 过滤条件 */
declare interface FilterModel {
  /** 过滤器名 */
  Name?: string;
  /** 过滤器值 */
  Values?: string[];
}

/** 流控规则 */
declare interface FlowControlRule {
  /** 流控开始时间 */
  StartTime?: string;
  /** 流控结束时间 */
  EndTime?: string;
  /** 流控规则最大带宽，单位MB/s */
  MaxBandwidthMBps?: number;
}

/** 整机备份（CVM 备份组）概览数据 */
declare interface InstanceBackupOverview {
  /** 整机备份点总数 */
  BackupCount?: number;
  /** 创建中数量 */
  CreatingBackupCount?: number;
  /** 失败数量 */
  FailedBackupCount?: number;
  /** 已完成数量 */
  SuccessBackupCount?: number;
  /** 恢复中的总数量 */
  RestoringBackupCount?: number;
  /** 整机备份总容量 */
  BackupSizeMb?: number;
  /** 受保护 CVM 资源数 */
  BackupResourceCount?: number;
}

/** 描述了实例的计费模式 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW（通知过期且自动续费）、NOTIFY_AND_MANUAL_RENEW（通知过期不自动续费）、DISABLE_NOTIFY_AND_MANUAL_RENEW（不通知过期不自动续费）。 */
  RenewFlag?: string;
}

/** 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等 */
declare interface InternetAccessible {
  /** 网络计费类型。取值范围：BANDWIDTH_PREPAID（预付费按带宽结算）、TRAFFIC_POSTPAID_BY_HOUR（流量按小时后付费）、BANDWIDTH_POSTPAID_BY_HOUR（带宽按小时后付费）、BANDWIDTH_PACKAGE（带宽包用户）。默认取值：非带宽包用户默认与子机付费类型保持一致。 */
  InternetChargeType?: string;
  /** 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。 */
  InternetMaxBandwidthOut?: number;
  /** 是否分配公网IP。取值范围：true（表示分配公网IP）/false（表示不分配公网IP）。当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在 RunInstances 接口中作为入参使用。 */
  PublicIpAssigned?: boolean;
  /** 网络模式：移动:"CMCC"、电信:"CTCC"、联通:"CUCC"。 */
  InternetServiceProvider?: string;
}

/** 描述了实例登录相关配置与信息。 */
declare interface LoginSettings {
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能以"/"开头，至少包含以下字符中的三种不同字符，字符种类：小写字母 a-z、大写字母 A-Z、数字 0-9、特殊字符 ()`~!@#$%^&*-+=_|{}[]:;'<>,.?/。Windows 实例密码必须 12-30 位，不能以"/"开头且不包括用户名，至少包含以下字符中的三种不同字符，字符种类：小写字母 a-z、大写字母 A-Z、数字 0-9、特殊字符 ()`~!@#$%^&*-+=_|{}[]:;' <>,.?/。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
  Password?: string;
  /** 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) 获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。 */
  KeyIds?: string[];
  /** 保持镜像的原始设置。该参数与 Password 或 KeyIds.N 不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为 TRUE。取值范围：TRUE（表示保持镜像的登录设置）/FALSE（表示不保持镜像的登录设置）。默认取值：FALSE。 */
  KeepImageLogin?: string;
}

/** 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机等（仅CDH产品可用） */
declare interface Placement {
  /** 实例所属的可用区 ID。该参数也可以通过调用 [DescribeZones]的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 实例所属项目ID。 */
  ProjectId?: number;
  /** 实例所属的专用宿主机ID列表。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。仅用于出参，当前暂不支持。 */
  HostId?: string;
  /** 实例所属的专用宿主机ID列表，仅用于入参。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。 */
  HostIds?: string[];
  /** 实例所属项目名。 */
  ProjectName?: string;
}

/** 备份计划详情 */
declare interface PlanInfo {
  /** 备份计划ID */
  PlanId?: string;
  /** 计划关联的实例ID */
  ResourceIds?: string[];
  /** 计划名称 */
  PlanName?: string;
  /** 备份路径列表，1~20 个 */
  BackupPaths?: string[] | null;
  /** 包含文件类型，0~20 个 */
  IncludeFileTypes?: string[] | null;
  /** 排除文件路径列表，0~20 个 */
  ExcludePatterns?: string[] | null;
  /** 是否排除系统目录 */
  ExcludeSystemDirectories?: boolean;
  /** 备份库ID */
  VaultId?: string;
  /** 备份计划状态 */
  Status?: string;
  /** 策略ID */
  AspId?: string;
  /** 策略名称 */
  AspName?: string;
  /** 策略详情 */
  AspPolicy?: AspInfo;
  /** 最近一次执行时间 */
  LastExecuteTime?: string;
  /** 下次触发时间 */
  NextTriggerTime?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 最近一次执行错误信息 */
  LastTriggerError?: string;
  /** 备份数量 */
  BackupCount?: number;
  /** 流控信息 */
  FlowControlSettings?: FlowControlRule[];
}

/** 备份的执行策略详情 */
declare interface Policy {
  /** 选定周一到周日中需要创建备份的日期，取值范围：[0, 6]。0表示周日触发，1表示周一触发，依次类推。 */
  DayOfWeek?: number[];
  /** 指定定期备份策略的触发时间。单位为小时，取值范围：[0, 23]。00:00 ~ 23:00 共 24 个时间点可选，1表示 01:00，依此类推。 */
  Hour?: number[];
  /** 指定每月从月初到月底需要触发定期备份的日期,取值范围：[1, 31]，1-31分别表示每月的具体日期，比如5表示每月的5号。注：若设置29、30、31等部分月份不存在的日期，则对应不存在日期的月份会跳过不打定期备份。 */
  DayOfMonth?: number[];
  /** 指定创建定期备份的间隔天数，取值范围：[1, 365]，例如设置为5，则间隔5天即触发定期备份创建。注：当选择按天备份时，理论上第一次备份的时间为备份策略创建当天。如果当天备份策略创建的时间已经晚于设置的备份时间，那么将会等到第二个备份周期再进行第一次备份。 */
  IntervalDays?: number;
}

/** 容灾保护组信息 */
declare interface ProtectGroup {
  /** 用户AppId */
  AppId?: number;
  /** 保护组ID */
  ProtectGroupId?: string;
  /** 保护组名称 */
  ProtectGroupName?: string;
  /** 保护组类型（产品类型，如 DISK/CFS/INSTANCE） */
  ProtectGroupType?: string;
  /** 所属容灾策略ID */
  SitePairId?: string;
  /** 所属容灾策略名称 */
  SitePairName?: string;
  /** RPO时间（单位秒） */
  RecoveryPointObjective?: number;
  /** 生产地域（当 DataDirection=REVERSE 时会与 TargetRegion 自动轮转，保持用户视角一致） */
  SourceRegion?: string;
  /** 生产可用区（REVERSE 时与 TargetZone 自动轮转） */
  SourceZone?: string;
  /** 生产端VPC（REVERSE 时与 TargetVpc 自动轮转） */
  SourceVpc?: string;
  /** 容灾地域（REVERSE 时与 SourceRegion 自动轮转） */
  TargetRegion?: string;
  /** 容灾可用区 */
  TargetZone?: string;
  /** 容灾端VPC */
  TargetVpc?: string;
  /** 复制技术（SYN 同步 / ASY 异步） */
  CopyType?: string;
  /** 容灾类型（CROSS_ZONE 跨可用区 / CROSS_REGION 跨地域 / CROSS_CLOUD 跨云） */
  DisasterRecoveryType?: string;
  /** 数据复制方向（POSITIVE 正向 / REVERSE 反向） */
  DataDirection?: string;
  /** 跨云场景对端云名称（仅 DisasterRecoveryType=CROSS_CLOUD 时返回） */
  PeerCloudName?: string | null;
  /** 创建来源（LOCAL 本端创建 / PEER 对端创建） */
  CreateFrom?: string;
  /** 生命周期状态 */
  LifeState?: string;
  /** 创建保护组的账户主账号 Uin */
  AccountUin?: string | null;
  /** 创建保护组的子账号 Uin */
  SubAccountUin?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 绑定的已保护资源数量 */
  BindProtectedResourceCount?: number | null;
  /** RPO 异常（超过 15 分钟未同步）的复制对数量 */
  ErrorRecoveryPointObjectiveCount?: number | null;
  /** 已保护资源状态统计，key 为复制对状态，value 为该状态下的资源数量 */
  ProtectedResourceStatusSet?: ProtectedResourceStatus[] | null;
}

/** 保护组操作掩码 */
declare interface ProtectGroupDeniedAction {
  /** 保护组ID */
  ProtectGroupId?: string;
  /** 被禁止的操作列表（Action名称数组） */
  DeniedActions?: DeniedAction[];
}

/** 受保护实例信息 */
declare interface ProtectInstance {
  /** 实例ID */
  InstanceId?: string;
  /** 客户端ID */
  AgentId?: string;
  /** 客户端版本 */
  AgentVersion?: string;
  /** 客户端状态 */
  AgentStatus?: string;
  /** 最后心跳时间 */
  LastHeartbeatTime?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 最新备份点中记录的 CVM 基础信息 */
  ExtraInfo?: string;
  /** 该实例可用备份点数量 */
  BackupCount?: number;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 最近一次备份时间 */
  LatestBackupTime?: string;
  /** 离线原因 */
  OfflineReason?: string;
}

/** 受保护资源信息 */
declare interface ProtectedResource {
  /** 资源类型（与请求 SitePairType 一致，如 DISK/CFS/INSTANCE） */
  ResourceType?: string;
  /** 该类型下被保护的源端资源ID列表（DISK:disk-xxx / CFS:cfs-xxx / INSTANCE:ins-xxx） */
  ResourceIdSet?: string[];
}

/** 受保护资源概览 */
declare interface ProtectedResourceOverview {
  /** 受保护资源总数 */
  TotalProtectedCount?: number;
  /** 总资源数 */
  TotalResourceCount?: number;
  /** CVM 受保护统计 */
  Cvm?: ResourceProtectStat;
  /** CFS 受保护统计 */
  CFS?: ResourceProtectStat;
}

/** 保护资源类型个数统计 */
declare interface ProtectedResourceStatus {
  /** 状态 */
  Status?: string;
  /** 数量 */
  Count?: number;
}

/** 实例Id与备份计划映射信息 */
declare interface ResourcePlan {
  /** 云服务器实例 ID */
  ResourceId: string;
  /** 备份路径，[0,20] */
  BackupPaths?: string[];
  /** 包含文件类型，[0,20] */
  IncludeFileTypes?: string[];
  /** 排除路径，[0,20] */
  ExcludePatterns?: string[];
  /** 是否排除系统目录 */
  ExcludeSystemDirectories?: boolean;
  /** 是否立即触发全量备份 */
  ExecuteImmediately?: boolean;
}

/** 产品受保护统计信息 */
declare interface ResourceProtectStat {
  /** 受保护资源数 */
  ProtectedCount?: number;
  /** 资源总数 */
  TotalCount?: number;
}

/** 恢复任务信息 */
declare interface RestoreTask {
  /** 恢复任务 ID */
  TaskId?: string;
  /** 关联备份点 ID */
  BackupId?: string;
  /** 源实例 ID */
  ResourceId?: string;
  /** 目标实例 ID */
  TargetResourceId?: string;
  /** 恢复路径列表 */
  RestorePaths?: string[];
  /** 目标恢复位置 */
  TargetLocation?: string;
  /** 任务状态 */
  Status?: string;
  /** 需恢复文件总数 */
  TotalFileCount?: number;
  /** 需恢复数据总量（字节） */
  TotalSize?: number;
  /** 需恢复数据总量（格式化，如 "1.5 GB"） */
  TotalSizeFormatted?: string;
  /** 已恢复文件数 */
  RestoreFileCount?: number;
  /** 已恢复数据量（字节） */
  RestoreSize?: number;
  /** 已恢复数据量（格式化） */
  RestoreSizeFormatted?: string;
  /** 恢复进度（0-100） */
  Progress?: number;
  /** 关联 Job ID */
  JobId?: string;
  /** 任务开始时间（ISO 格式） */
  StartTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 任务创建时间 */
  CreatedTime?: string;
  /** 恢复任务失败原因 */
  FailReason?: string;
  /** 冲突处理策略：skip-跳过/overwrite-覆盖/newer-保留最新版本/if_changed-内容变化时覆盖 */
  ConflictStrategy?: string;
}

/** 描述了 “云安全” 服务相关的信息 */
declare interface RunSecurityServiceEnabled {
  /** 是否开启该服务。取值范围：TRUE（开启）/FALSE（不开启）。默认取值：TRUE。 */
  Enabled?: boolean;
}

/** 安全组映射详情 */
declare interface SecurityGroupMapping {
  /** 安全组映射ID */
  SecurityGroupMappingId?: string;
  /** 安全组映射所属的站点对ID */
  SitePairId?: string;
  /** 生产端安全组ID */
  SourceSecurityGroupId?: string;
  /** 容灾端安全组ID */
  TargetSecurityGroupId?: string;
  /** 安全组映射的生命状态；NORMAL:正常。 */
  LifeState?: string;
}

/** 站点对信息 */
declare interface SitePair {
  /** 用户AppId */
  AppId?: number;
  /** 容灾策略ID */
  SitePairId?: string;
  /** 容灾策略名称 */
  SitePairName?: string;
  /** 容灾策略类型（产品类型，如 DISK/CFS/INSTANCE 等） */
  SitePairType?: string;
  /** 容灾策略状态 */
  SitePairState?: string;
  /** 生产地域 */
  SourceRegion?: string;
  /** 生产可用区 */
  SourceZone?: string;
  /** 容灾地域 */
  TargetRegion?: string;
  /** 容灾可用区 */
  TargetZone?: string;
  /** 生产端VPC */
  SourceVpc?: string;
  /** 容灾端VPC */
  TargetVpc?: string;
  /** 复制技术（SYN 同步 / ASY 异步） */
  CopyType?: string;
  /** 容灾类型（CROSS_ZONE 跨可用区 / CROSS_REGION 跨地域 / CROSS_CLOUD 跨云） */
  DisasterRecoveryType?: string;
  /** 创建来源（LOCAL 本端创建 / PEER 对端创建） */
  CreateFrom?: string;
  /** 创建容灾策略的账户主账号 Uin */
  AccountUin?: string | null;
  /** 创建容灾策略的子账户 Uin */
  SubAccountUin?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 已绑定的保护组数量 */
  BindProtectGroupCount?: number;
  /** RPO 异常的复制对ID列表（最近一次保护点距今超过15分钟的复制对） */
  ErrorRecoveryPointObjectiveCopyPairSet?: string[] | null;
  /** 已保护的资源列表（按资源类型分组） */
  ProtectedResourceSet?: ProtectedResource[] | null;
  /** 已保护资源的状态统计，key 为复制对状态，value 为该状态下的资源数量 */
  ProtectedResourceStatusSet?: ProtectedResourceStatus[] | null;
  /** 跨云场景下的额外信息（仅 IsCrossCloud=true 时返回，非跨云为 null） */
  CrossCloudDetails?: CrossCloudDetails | null;
}

/** 单个容灾策略的禁止操作集合 */
declare interface SitePairDeniedAction {
  /** 容灾策略ID */
  SitePairId?: string;
  /** 该容灾策略当前被禁止执行的操作列表 */
  DeniedActions?: DeniedAction[];
}

/** 支持的生产地域配置详情，包含支持类型与可用区粒度规则。 */
declare interface SupportRegionInfo {
  /** 生产地域。 */
  SourceRegion?: string;
  /** 支持类型：REGION（地域级，整个生产地域均支持容灾）；ZONE（可用区级，按 SupportZoneRules 控制粒度）。 */
  SupportType?: string;
  /** 配置状态：valid（生效）/ invalid（停用）。 */
  Status?: string;
  /** 可用区级容灾规则列表。仅当 SupportType=ZONE 时有效；REGION 类型时该字段返回空数组。 */
  SupportZoneRules?: SupportZoneRule[] | null;
}

/** 可用区级容灾规则，描述某个生产可用区可容灾到的目标可用区集合。 */
declare interface SupportZoneRule {
  /** 生产可用区。 */
  SourceZone?: string;
  /** 是否支持容灾到生产地域内的全部可用区。true 时 TargetZones 可忽略。 */
  IsAllZoneSupport?: boolean;
  /** 目标可用区列表。当 IsAllZoneSupport=false 时枚举具体可容灾到的可用区。 */
  TargetZones?: string[] | null;
}

/** 备份库类型统计 */
declare interface TypeCount {
  /** 备份库类型 */
  Type?: string;
  /** 备份库数量 */
  Count?: number;
}

/** 备份库操作掩码 */
declare interface VaultDeniedAction {
  /** 备份库实例ID */
  VaultId?: string;
  /** 被禁止的操作列表 */
  DeniedActions?: DeniedAction[];
}

/** 描述了VPC相关信息，包括子网，IP信息等 */
declare interface VirtualPrivateCloud {
  /** 私有网络ID，形如 vpc-xxxxxxxx。私有网络ID可通过登录控制台查询，也可通过调用接口 [DescribeVpcEx]的返回值中的unVpcId字段获取。 */
  VpcId: string;
  /** 私有网络子网ID，形如 subnet-xxxxxxxx。私有网络子网ID可通过登录控制台查询，也可通过调用接口 [DescribeSubnets](https://cloud.tencent.com/document/api/215/15784) 的返回值中的 unSubnetId 字段获取。 */
  SubnetId: string;
  /** 私有网络子网名称。 */
  SubnetName?: string;
  /** 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：true（用作公网网关）/false（不作为公网网关），默认取值：false。 */
  AsVpcGateway?: boolean;
  /** 私有网络子网 IP 数组，在创建实例、修改实例 vpc 属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。 */
  PrivateIpAddresses?: string[];
  /** 私有网络名称，仅做展示用。 */
  VpcName?: string;
  /** 为弹性网卡指定随机生成的 IPv6 地址数量。 */
  Ipv6AddressCount?: number;
}

/** 站点对vpc映射信息 */
declare interface VpcMapping {
  /** 映射规则主键ID */
  Id?: number | null;
  /** 所属容灾策略ID */
  SitePairId?: string | null;
  /** 源端VPC ID */
  SourceVpc?: string | null;
  /** 源端子网ID */
  SourceSubnet?: string | null;
  /** 目标端VPC ID */
  TargetVpc?: string | null;
  /** 目标端子网ID */
  TargetSubnet?: string | null;
  /** 映射状态 */
  Status?: string | null;
  /** 生命周期状态 */
  LifeState?: string | null;
}

declare interface ApplyBackupGroupRequest {
  /** 回滚的备份组ID。 */
  BackupGroupId: string;
  /** 回滚的备份ID、云硬盘ID列表。 */
  ApplyDisks: ApplyDisk[];
  /** 回滚备份前是否执行自动关机，如果回滚的盘挂载在实例上且实例处于运行状态，可传入该参数。 */
  AutoStopInstance?: boolean;
  /** 回滚备份完成后是否执行自动开机。 */
  AutoStartInstance?: boolean;
}

declare interface ApplyBackupGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindAutoBackupPolicyRequest {
}

declare interface BindAutoBackupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAutoBackupPolicyRequest {
  /** 定期备份的执行策略。 */
  Policy: Policy[];
  /** 通过该定期备份策略创建的备份是否永久保留。false表示非永久保留，true表示永久保留，默认为false。 */
  IsPermanent?: boolean;
  /** 定期备份策略的名称。 */
  AutoBackupPolicyName?: string;
  /** 是否激活定期备份策略。 */
  IsActivated?: boolean;
  /** 通过定期备份策略创建出的备份保留时间。 */
  RetentionDays?: number;
  /** 该定期备份策略创建的备份可以保留的月数，该参数不可与IsPermanent/RetentionDays参数冲突。 */
  RetentionMonths?: number;
  /** 通过该定期备份策略最多保留的备份个数，超过该个数限制后自动删除最先创建的备份，该参数不可与IsPermanent参数冲突。 */
  RetentionAmount?: number;
  /** 备份存储类型。COMMON表示走普通模式（不需要备份库），VAULT表示走备份库（必须关联一个备份库）。默认为COMMON */
  StorageType?: string;
  /** 备份库ID，创建agent备份策略时必须指定。当StorageType为VAULT时必传。 */
  VaultId?: string;
  /** 定期备份高级保留策略，该参数不可与IsPermanent参数冲突。 */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy;
}

declare interface CreateAutoBackupPolicyResponse {
  /** 定期备份策略ID。 */
  AutoBackupPolicyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupGroupRequest {
  /** 需要创建备份组的云硬盘ID列表。 */
  DiskIds: string[];
  /** 备份组的名称 */
  BackupGroupName?: string;
  /** 指定备份组到期时间，如果未传入该参数，默认为永久保留。 */
  Deadline?: string;
}

declare interface CreateBackupGroupResponse {
  /** 备份组ID。 */
  BackupGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupVaultRequest {
  /** 备份库名称 */
  VaultName?: string;
  /** 备份库描述 */
  Description?: string;
  /** 加密方式: NONE/SSE-COS/SSE-KMS */
  EncryptType?: string;
  /** KMS密钥ID（SSE-KMS时使用） */
  KmsKeyId?: string;
}

declare interface CreateBackupVaultResponse {
  /** 备份库唯一ID */
  VaultId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDisasterRecoveryProtectGroupRequest {
  /** 所属容灾站点对id */
  SitePairId: string;
  /** 容灾保护组的产品类型 */
  ProtectGroupType: string;
  /** 容灾保护组预期rpo, 单位分钟（当前仅支持15分钟） */
  RecoveryPointObjective: number;
  /** 容灾保护组的名称，最大长度不能超60个字符。 */
  ProtectGroupName?: string;
  /** 数据复制方向， ['POSITIVE', 'REVERSE'] */
  DataDirection?: string;
}

declare interface CreateDisasterRecoveryProtectGroupResponse {
  /** 创建的容灾保护组ID */
  ProtectGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDisasterRecoverySitePairRequest {
  /** 容灾策略的容灾类型，跨地域：CROSS_REGION，或跨可用区：CROSS_ZONE */
  DisasterRecoveryType: string;
  /** 生产站点地域 */
  SourceRegion: string;
  /** 容灾策略生产站点可用区 */
  SourceZone: string;
  /** 容灾站点地域 */
  TargetRegion: string;
  /** 容灾策略容灾站点可用区 */
  TargetZone: string;
  /** 容灾策略生产vpc */
  SourceVpc: string;
  /** 容灾策略容灾vpc */
  TargetVpc: string;
  /** 容灾策略所属产品类型，包括DISK、CFS、INSTANCE */
  SitePairProductType: string;
  /** 容灾策略的名称，最大长度为60个字符。 */
  SitePairName?: string;
  /** 容灾策略复制技术SYN/ASY */
  CopyType?: string;
}

declare interface CreateDisasterRecoverySitePairResponse {
  /** 容灾站点对ID */
  SitePairId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDisasterRecoveryVpcMappingRequest {
  /** 源端VPC ID */
  SourceVpcId: string;
  /** 源端子网ID */
  SourceSubnetId: string;
  /** 目标端VPC ID */
  TargetVpcId: string;
  /** 目标端子网ID */
  TargetSubnetId: string;
  /** 站点对ID */
  SitePairId: string;
}

declare interface CreateDisasterRecoveryVpcMappingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileBackupPlanRequest {
  /** 备份策略ID */
  PolicyId: string;
  /** 备份库ID */
  BackupStorageId?: string;
  /** 计划名称 */
  PlanName?: string;
  /** 实例配置列表，[1,20] */
  Resources?: ResourcePlan[];
  /** 资源类型枚举值：CVM_AGENT： CVM文件备份CFS_AGENT： 文件系统备份COS_AGENT： COS备份默认值：CVM_AGENT */
  ResourceType?: string;
}

declare interface CreateFileBackupPlanResponse {
  /** 备份计划 ID 列表 */
  PlanIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileBackupRequest {
  /** 资源ID列表 */
  ResourceId: string;
  /** 计划ID */
  PlanId?: string;
  /** 备份路径列表，1~20 个 */
  BackupPaths?: string[];
  /** 包含文件类型，0~20 个 */
  IncludeFileTypes?: string[];
  /** 排除文件路径列表，0~20 个 */
  ExcludePatterns?: string[];
  /** 是否排除系统目录 */
  ExcludeSystemDirectories?: boolean;
  /** 备份库ID */
  BackupStorageId?: string;
  /** 备份到期时间 */
  Deadline?: string;
  /** 备份名称 */
  BackupName?: string;
}

declare interface CreateFileBackupResponse {
  /** 备份Id */
  BackupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileRestoreTaskRequest {
  /** 冲突处理策略：skip-跳过/" "overwrite-覆盖/newer-保留较新的版本/" "if_changed-内容变化时覆盖，默认overwrite */
  ConflictStrategy?: string;
}

declare interface CreateFileRestoreTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceCopyPairRequest {
  /** 所属保护组 */
  ProtectGroupId: string;
  /** 目标端CVM创建参数列表（1~10 个） */
  CreateTargetInstanceParameters: CreateInstanceModel[];
  /** 复制对名称，不传则新名称为"未命名" */
  InstanceCopyPairName?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性 */
  ClientToken?: string;
  /** 用户期望的RPO，单位分钟，目前仅支持15分钟 */
  RecoveryPointObjective?: number;
}

declare interface CreateInstanceCopyPairResponse {
  /** 创建的CVM复制对ID列表 */
  CopyPairIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceDrillPairsRequest {
  /** 所属容灾保护组 */
  ProtectGroupId: string;
  /** 演练组vpc */
  DrillPairGroupVpc: string;
  /** 文件系统复制对名称,不传则新名称为“未命名” */
  DrillPairGroupName?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性 */
  CreationToken?: string;
  /** 指定创建入哪个演练组 */
  DrillPairGroupId?: string;
  /** 创建目标演练实例的参数列表 */
  CreateTargetInstanceParameters?: CreateInstanceModel[];
}

declare interface CreateInstanceDrillPairsResponse {
  /** 演练对ID列表 */
  DrillPairIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupMappingRequest {
  /** 生产端实例绑定的安全组ID */
  SrcSecurityGroupId: string;
  /** 容灾端实例绑定的安全组ID */
  TargetSecurityGroupId: string;
  /** 安全组映射所属的站点对ID。 */
  SitePairId: string;
}

declare interface CreateSecurityGroupMappingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAutoBackupPoliciesRequest {
  /** 备份策略 ID 列表 */
  AutoBackupPolicyIds: string[];
}

declare interface DeleteAutoBackupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupGroupsRequest {
  /** 备份组ID列表。 */
  BackupGroupIds: string[];
}

declare interface DeleteBackupGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupVaultsRequest {
  /** 备份库 ID 列表 */
  VaultIds: string[];
}

declare interface DeleteBackupVaultsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCopyPairsRequest {
  /** 要删除的复制对ID列表（长度 1~10） */
  CopyPairIds: string[];
  /** 要删除复制对的类型，可选值：DISK、INSTANCE、CFS */
  CopyPairType: string;
  /** 是否一并删除容灾站点云盘，默认 true（容灾盘数据可能处于中间状态，保留也无法正常使用） */
  DeleteTargetResource?: boolean;
}

declare interface DeleteCopyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDisasterRecoveryProtectGroupsRequest {
  /** 删除容灾保护组ID列表，最多10个 */
  ProtectGroups: string[];
}

declare interface DeleteDisasterRecoveryProtectGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDisasterRecoverySitePairsRequest {
  /** 删除容灾策略ID列表 */
  SitePairIds: string[];
}

declare interface DeleteDisasterRecoverySitePairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDisasterRecoveryVpcMappingRequest {
  /** 删除容灾vpc映射主键id列表 */
  VpcMappingIds: number[];
}

declare interface DeleteDisasterRecoveryVpcMappingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDrillPairsRequest {
  /** 要删除演练对的类型，其类型枚举跟复制对保持一致。枚举值：DISK / INSTANCE / CFS。 */
  DrillPairType: string;
  /** 要删除的演练对列表。长度范围 [1, 10]。 */
  DrillPairIds?: string[];
  /** 要删除的演练组id列表。 */
  DrillGroupIds?: string[];
  /** 是否一并删除演练CFS/CVM/DISK演练资源。 */
  DeleteDrillResource?: boolean;
}

declare interface DeleteDrillPairsResponse {
  /** 删除演练对的逐条结果列表。 */
  DeleteDrillPairResultSet?: DeleteDrillPairResult[];
  /** 成功标记为删除的演练组ID列表。 */
  DeleteDrillPairGroupSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileBackupPlansRequest {
  /** 备份点 ID 列表 */
  PlanIds: string[];
}

declare interface DeleteFileBackupPlansResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileBackupsRequest {
}

declare interface DeleteFileBackupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupMappingRequest {
  /** 要删除安全组映射所属的站点对ID */
  SitePairId: string;
  /** 要删除的安全组映射ID列表 */
  SecurityGroupMappingIds: string[];
}

declare interface DeleteSecurityGroupMappingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoBackupPoliciesRequest {
  /** 过滤条件。支持以下过滤条件：\n" "auto-backup-policy-id - 定期快照策略ID，如asp-xxx。\n" "auto-backup-policy-state - 定期快照策略状态。\n" "auto-backup-policy-name - 定期快照策略名称，支持模糊匹配。\n" "tag - 按标签键值对过滤，需包含Key和/或Value。\n" "tag-key - 按标签键过滤。\n" "tag-value - 按标签值过滤。\n" "tag:tag-key - 按指定标签键的标签值过滤。\n" "vault-id - 备份库ID过滤。\n" "storage-type - 存储类型过滤" "（COMMON：普通模式，VAULT：备份库模式）。 */
  Filters?: FilterModel[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大1000 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeAutoBackupPoliciesResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 备份策略列表详情。 */
  AutoBackupPolicySet?: AutoBackupPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupGroupRollbackTasksRequest {
  /** 过滤条件，支持恢复任务ID（task-id）、备份组ID（backup-group-id）、源实例ID（source-instance-id）、目标实例ID（target-instance-id）、恢复状态（status）和回滚类型（rollback-type）过滤 */
  Filters?: FilterModel[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大1000 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeBackupGroupRollbackTasksResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 备份组恢复详情。 */
  RollbackTaskSet?: BackupGroupRollbackTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupGroupsDeniedActionsRequest {
  /** 备份组列表 */
  BackupGroupIds: string[];
}

declare interface DescribeBackupGroupsDeniedActionsResponse {
  /** 备份组不允许操作信息 */
  BackupGroupDeniedActionSet?: BackupGroupDeniedAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupGroupsRequest {
  /** 过滤条件。backup-group-id - Array of String - 是否必填：否 -（过滤条件）按备份组ID过滤 ;backup-group-state - Array of String - 是否必填：否 -（过滤条件）按备份组状态过滤。(NORMAL: 正常 | CREATING:创建中 | ROLLBACKING:回滚中) ;backup-group-name - Array of String - 是否必填：否 -（过滤条件）按备份组名称过滤 ;backup-id - Array of String - 是否必填：否 -（过滤条件）按备份组内的备份ID过滤 */
  Filters?: FilterModel[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大500 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段。目前支持CREATE_TIME。 */
  OrderField?: string;
}

declare interface DescribeBackupGroupsResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 备份列表详情。 */
  BackupGroupSet?: BackupGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupInstancesRequest {
  /** 过滤条件。;instance-id - Array of String - 是否必填：否 -（过滤条件）按实例ID过滤。;auto-backup-policy-id - Array of String - 是否必填：否 -（过滤条件）按照实例绑定的定期备份策略过滤。;auto-backup-policy-name - Array of String - 是否必填：否 -（过滤条件）按照云硬盘绑定的定期备份策略名称过滤。 */
  Filters?: FilterModel[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大500 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeBackupInstancesResponse {
  /** 符合条件的受保护实例总数量 */
  TotalCount?: number;
  /** 符合条件的受保护实例详情 */
  BackupInstanceSet?: BackupInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupOverviewGeneralRequest {
  /** 是否查询全部地域。false-仅当前地域（默认），true-全部地域汇总 */
  AllRegions?: boolean;
}

declare interface DescribeBackupOverviewGeneralResponse {
  /** 整机备份（CVM 备份组）概览数据 */
  InstanceBackupOverview?: InstanceBackupOverview;
  /** 文件备份概览数据 */
  FileBackupOverview?: FileBackupOverview;
  /** 备份策略概览 */
  BackupPolicyOverview?: BackupPolicyOverview;
  /** 备份库概览 */
  BackupVaultOverview?: BackupVaultOverview;
  /** 受保护资源概览 */
  ProtectedResourceOverview?: ProtectedResourceOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupPlansRequest {
  /** 过滤条件，支持instance-id和auto-backup-policy-id */
  Filters?: FilterModel[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大100 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeBackupPlansResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 备份列表详情。 */
  BackupPlanSet?: BackupPlan[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupVaultsDeniedActionsRequest {
  /** 备份库ID列表 */
  VaultIds: string[];
}

declare interface DescribeBackupVaultsDeniedActionsResponse {
  /** 备份库不允许操作信息 */
  BackupVaultDeniedActionSet?: VaultDeniedAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupVaultsRequest {
  /** 备份库ID列表 */
  VaultIds?: string[];
  /** 过滤条件，支持instance-id和auto-backup-policy-id */
  Filters?: FilterModel[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大1000 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeBackupVaultsResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 备份库列表详情。 */
  BackupVaultSet?: BackupVault[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCommonBackupPointsRequest {
  /** 实例列表 */
  InstanceIds: string[];
}

declare interface DescribeCommonBackupPointsResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 共同备份点详情。 */
  CommonBackupPointSet?: CommonBackupPoint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCopyPairsDeniedActionsRequest {
  /** 复制对ID列表 */
  CopyPairIds: string[];
  /** 要查询复制对的类型，枚举值：DISK（云硬盘）、INSTANCE（云服务器）、CFS（文件存储） */
  CopyPairType: string;
}

declare interface DescribeCopyPairsDeniedActionsResponse {
  /** 复制对操作掩码列表，返回每个复制对被禁止执行的操作 */
  CopyPairDeniedActionSet?: CopyPairDeniedAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCopyPairsRequest {
  /** 要查询复制对的类型，可选值：DISK、INSTANCE、CFS */
  CopyPairType: string;
  /** 要查询复制对ID列表 */
  CopyPairIds?: string[];
  /** 过滤条件，详见过滤条件表。支持的Name：disaster-recovery-site-pair-id、target-resource-id、source-resource-id、copy-pair-id、copy-pair-name */
  Filters?: FilterModel[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 输出结果按升序还是降序，可选值：ASC、DESC */
  Order?: string;
  /** 输出结果的排序字段，可选值：CREATE_TIME */
  OrderField?: string;
  /** 是否要查询保护时间点列表，默认 false。当设置为 true 时，必须同时传入 CopyPairIds 参数。 */
  QueryProtectionTime?: boolean;
  /** 是否查询跨云+非跨云全部复制对，默认 false */
  GetAllCopyPair?: boolean;
  /** 是否要查询 CVM 创建参数（仅对延迟创建模式且目标 CVM 未创建的复制对生效），默认为true。为 true 时，每条 deferred_create=1 AND target_cvm_created=0 的 CVM 复制对出参会附带 CvmCreateParams 字段 */
  QueryCvmCreateParams?: boolean;
  /** 复制对创建来源过滤。不传则查询所有；传 LOCAL 仅查本端创建的复制对，传 PEER 仅查对端创建的复制对。枚举值：LOCAL： 仅查本端创建的复制对PEER： 仅查对端创建的复制对 */
  CreateFrom?: string;
}

declare interface DescribeCopyPairsResponse {
  /** 符合条件的复制对总数 */
  TotalCount?: number;
  /** 复制对列表。 */
  CopyPairSet?: CopyPair[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoveryDrillGroupsRequest {
  /** 要查询的容灾演练组产品类型。枚举值：DISK / INSTANCE / CFS。 */
  DrillGroupType: string;
  /** 要查询的容灾演练组ID列表。 */
  DrillGroupIds?: string[];
  /** 过滤条件，详见定期快照过滤条件表。 */
  Filters?: FilterModel[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
  /** 输出结果按升序还是降序。枚举值：ASC / DESC。 */
  Order?: string;
  /** 输出结果的排序字段。枚举值：CREATE_TIME。 */
  OrderField?: string;
}

declare interface DescribeDisasterRecoveryDrillGroupsResponse {
  /** 有效的容灾演练组数量。 */
  TotalCount?: number;
  /** 容灾演练组列表。 */
  DrillGroupSet?: DisasterRecoveryDrillGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoveryOverviewRequest {
  /** 要查询的产品/复制对的类型，枚举值：• DISK：云硬盘类型复制对• INSTANCE：CVM 实例复制对• CFS：文件存储复制对• ALL：聚合当前支持的类型；默认为CFS */
  CopyPairType?: string;
}

declare interface DescribeDisasterRecoveryOverviewResponse {
  /** 跨所有地域聚合后的容灾总览数据 */
  DisasterRecoveryOverview?: DisasterRecoveryOverview;
  /** 按地域拆分的容灾总览列表 */
  OverviewInRegionSet?: DisasterRecoveryOverview[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoveryProtectGroupsRequest {
  /** 要查询的容灾保护组产品类型，枚举值：DISK / INSTANCE / CFS。 */
  ProtectGroupType: string;
  /** 要查询的容灾保护组ID列表。 */
  ProtectGroupIds?: string[];
  /** 过滤条件（过滤项由 core handler 定义，如 disaster-recovery-protect-group-id 等）。 */
  Filters?: FilterModel[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
  /** 输出结果按升序还是降序 */
  Order?: string;
  /** 输出结果的排序字段 */
  OrderField?: string;
}

declare interface DescribeDisasterRecoveryProtectGroupsResponse {
  /** 符合条件的容灾保护组总数 */
  TotalCount?: number;
  /** 容灾保护组列表 */
  ProtectGroupSet?: ProtectGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoverySitePairsDeniedActionsRequest {
  /** 要查询的容灾策略ID列表，单个ID格式为 sitepair-xxxxxxxx */
  SitePairIds: string[];
}

declare interface DescribeDisasterRecoverySitePairsDeniedActionsResponse {
  /** 每个容灾策略对应的禁止操作集合，返回顺序与入参 SitePairIds 一致 */
  SitePairDeniedActionSet?: SitePairDeniedAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoverySitePairsRequest {
  /** 要查询的容灾策略产品类型。取值范围：DISK / INSTANCE / CFS。 */
  SitePairType: string;
  /** 要查询的容灾策略ID列表。 */
  SitePairIds?: string[];
  /** 过滤条件，详见定期快照过滤条件表。 */
  Filters?: FilterModel[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
  /** 输出结果按升序还是降序，DESC表示降序，ASC表示升序 */
  Order?: string;
  /** 输出结果的排序字段 */
  OrderField?: string;
}

declare interface DescribeDisasterRecoverySitePairsResponse {
  /** 有效的容灾策略数量。 */
  TotalCount?: number;
  /** 容灾策略列表。 */
  SitePairSet?: SitePair[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoverySupportRegionRequest {
  /** 状态过滤：valid（生效）/ invalid（停用）；为空则同时返回生效与停用的全部记录。 */
  Status?: string;
}

declare interface DescribeDisasterRecoverySupportRegionResponse {
  /** 符合条件的支持的生产地域配置总数。 */
  TotalCount?: number;
  /** 支持的生产地域配置详情列表。 */
  SupportRegionSet?: SupportRegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisksRequest {
  /** 要查询信息的云盘ID列表 */
  DiskIds: string[];
  /** 云盘所在地域 */
  DiskRegion: string;
}

declare interface DescribeDisksResponse {
  /** 符合条件的云盘总数 */
  TotalCount?: number;
  /** 云盘详情列表 */
  DiskInfoSet?: DiskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDrillPairsDeniedActionsRequest {
  /** 要查询演练对的类型，枚举值：DISK（云硬盘）、INSTANCE（云服务器）、CFS（文件存储） */
  DrillPairType: string;
  /** 演练对ID列表 */
  DrillPairIds: string[];
}

declare interface DescribeDrillPairsDeniedActionsResponse {
  /** 演练对操作掩码列表，返回每个演练对被禁止执行的操作 */
  DrillPairDeniedActionSet?: DrillPairDeniedAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDrillPairsRequest {
  /** 要查询演练对的类型。枚举值：DISK / INSTANCE / CFS。 */
  DrillPairType: string;
  /** 要查询演练对ID列表。 */
  DrillPairIds?: string[];
  /** 过滤条件，详见定期快照过滤条件表。 */
  Filters?: FilterModel[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
  /** 输出结果按升序还是降序。枚举值：ASC / DESC。 */
  Order?: string;
  /** 输出结果的排序字段。枚举值：CREATE_TIME / END_TIME。 */
  OrderField?: string;
}

declare interface DescribeDrillPairsResponse {
  /** 有效的容灾演练对数量。 */
  TotalCount?: number;
  /** 容灾演练对列表。 */
  DrillPairSet?: DrillPair[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileBackupObjectsRequest {
}

declare interface DescribeFileBackupObjectsResponse {
  /** 当前路径下包含的目录及文件总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileBackupPlansRequest {
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大500 */
  Limit?: number;
  /** 排序字段 */
  OrderField?: string;
  /** 排序方式 */
  Order?: string;
  /** 过滤条件。支持: instance-id, plan-id, plan-name, status, auto-backup-policy-id */
  Filters?: FilterModel[];
}

declare interface DescribeFileBackupPlansResponse {
  /** 符合条件的计划总数量 */
  TotalCount?: number;
  /** 符合条件的计划详情 */
  PlanSet?: PlanInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileBackupsDeniedActionsRequest {
  /** 要查询的文件备份ID列表 */
  BackupIds: string[];
}

declare interface DescribeFileBackupsDeniedActionsResponse {
  /** 备份的操作掩码。 */
  BackupDeniedActionSet?: BackupDeniedAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileBackupsRequest {
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大500 */
  Limit?: number;
  /** 排序字段 */
  OrderField?: string;
  /** 排序方式 */
  Order?: string;
  /** 过滤条件。支持: backup-id, plan-id, instance-id, status, backup-type, auto-backup-policy-id */
  Filters?: FilterModel[];
}

declare interface DescribeFileBackupsResponse {
  /** 符合条件的备份点总数量 */
  TotalCount?: number;
  /** 符合条件的备份点详情 */
  BackupSet?: BackupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileRestoreTasksRequest {
  /** 过滤条件。支持: backup-id, task-id, instance-id, " "target-instance-id, status */
  Filters?: FilterModel[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大500 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeFileRestoreTasksResponse {
  /** 符合条件的总数量。 */
  TotalCount?: number;
  /** 恢复任务列表详情。 */
  RestoreTaskSet?: RestoreTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobsRequest {
}

declare interface DescribeJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePriceCreateCopyPairsRequest {
  /** 每个复制对的容量列表，长度 1~10。数组长度即为询价的复制对个数，每个元素对应一个复制对的容量 */
  DataCapacities: number[];
}

declare interface DescribePriceCreateCopyPairsResponse {
  /** 复制对价格列表，与入参一一对应 */
  CopyPairPrices?: CopyPairPrice[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProtectGroupsDeniedActionsRequest {
  /** 保护组ID列表 */
  ProtectGroupIds: string[];
}

declare interface DescribeProtectGroupsDeniedActionsResponse {
  /** 保护组操作掩码列表，返回每个保护组被禁止执行的操作 */
  ProtectGroupDeniedActionSet?: ProtectGroupDeniedAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProtectedInstancesRequest {
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大500 */
  Limit?: number;
  /** 排序字段 */
  OrderField?: string;
  /** 排序方式 */
  Order?: string;
  /** 过滤条件。支持: instance-id, agent-status */
  Filters?: FilterModel[];
}

declare interface DescribeProtectedInstancesResponse {
  /** 符合条件的受保护实例总数量 */
  TotalCount?: number;
  /** 符合条件的受保护实例详情 */
  InstanceSet?: ProtectInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupMappingsRequest {
  /** 安全组映射所属的站点对ID。 */
  SitePairId: string;
  /** 过滤条件，详见过滤条件表。支持的Name：src-security-group-id、target-security-group-id */
  Filters?: FilterModel[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为500。关于Limit的更进一步介绍请参考 API 简介中的相关小节 */
  Limit?: number;
  /** 输出结果按升序还是降序，可选值：ASC、DESC */
  Order?: string;
  /** 输出结果的排序字段，可选值：CREATE_TIME */
  OrderField?: string;
}

declare interface DescribeSecurityGroupMappingsResponse {
  /** 符合条件的记录总数。 */
  TotalCount?: number;
  /** 安全组映射详情。 */
  SecurityGroupMappingSet?: SecurityGroupMapping[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcMappingsRequest {
  /** 要查询的站点对id */
  SitePairId: string;
  /** 过滤条件。支持: source-vpc-id, target-vpc-id, source-subnet-id, target-subnet-id */
  Filters?: FilterModel[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
}

declare interface DescribeVpcMappingsResponse {
  /** 符合条件的VPC映射规则总数 */
  TotalCount?: number;
  /** VPC映射规则列表 */
  VpcMappingSet?: VpcMapping[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FinishFailoverCopyPairsRequest {
  /** 复制对ID列表。长度范围 [1, 50]。当 CopyPairType=INSTANCE 时传 CVM 复制对ID，否则传云盘/CFS 复制对ID。 */
  CopyPairIds: string[];
  /** 要完成切换的复制对类型。枚举值：DISK / INSTANCE / CFS。 */
  CopyPairType: string;
}

declare interface FinishFailoverCopyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoBackupPolicyAttributeRequest {
  /** 备份策略id */
  AutoBackupPolicyId: string;
  /** 定期备份的执行策略。 */
  Policy?: Policy[];
  /** 通过该定期备份策略创建的备份是否永久保留。false表示非永久保留，true表示永久保留，默认为false。 */
  IsPermanent?: boolean;
  /** 定期备份策略的名称。 */
  AutoBackupPolicyName?: string;
  /** 是否激活定期备份策略。 */
  IsActivated?: boolean;
  /** 通过定期备份策略创建出的备份保留时间。 */
  RetentionDays?: number;
  /** 该定期备份策略创建的备份可以保留的月数，该参数不可与IsPermanent/RetentionDays参数冲突。 */
  RetentionMonths?: number;
  /** 通过该定期备份策略最多保留的备份个数，超过该个数限制后自动删除最先创建的备份，该参数不可与IsPermanent参数冲突。 */
  RetentionAmount?: number;
  /** 备份存储类型。SNAPSHOT表示走快照（不需要备份库），VAULT表示走备份库（必须关联一个备份库）。默认为SNAPSHOT */
  StorageType?: string;
  /** 备份库ID，创建agent备份策略时必须指定。当StorageType为VAULT时必传。 */
  VaultId?: string;
  /** 定期备份高级保留策略，该参数不可与IsPermanent参数冲突。 */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy;
}

declare interface ModifyAutoBackupPolicyAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupAttributeRequest {
  /** 备份ID。该字段的取值取决于ResourceType：当ResourceType=CVM（默认）时，需传入备份组ID（BackupGroupId），可通过DescribeBackupGroups（查询备份组列表）查询 */
  BackupId: string;
  /** 备份的名称。 */
  BackupName?: string;
  /** 是否为永久保留的备份。 */
  IsPermanent?: boolean;
  /** 备份到期时间。 */
  Deadline?: string;
}

declare interface ModifyBackupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupVaultAttributeRequest {
  /** 备份库ID */
  VaultId: string;
  /** 备份库名称 */
  VaultName?: string;
  /** 备份库描述 */
  Description?: string;
}

declare interface ModifyBackupVaultAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCopyPairAttributeRequest {
  /** 要修改属性的复制对id */
  CopyPairId: string;
  /** 要修改的复制对类型，可选值：DISK、INSTANCE、CFS，默认 INSTANCE */
  CopyPairType?: string;
  /** 修改复制对名称（长度最大支持 64 个字符） */
  CopyPairName?: string;
  /** 容灾端实例类型（仅容灾端CVM未创建时可修改） */
  InstanceType?: string;
}

declare interface ModifyCopyPairAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDrillGroupAttributeRequest {
  /** 要修改属性的容灾演练组id。 */
  DrillGroupId: string;
  /** 修改容灾演练组名称（长度最大支持 64 个字符） */
  DrillGroupName?: string;
}

declare interface ModifyDrillGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDrillPairAttributeRequest {
  /** 要修改属性的容灾演练对id */
  DrillPairId: string;
  /** 修改容灾演练对名称（长度最大支持 64 个字符） */
  DrillPairName?: string;
}

declare interface ModifyDrillPairAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFileBackupAttributeRequest {
  /** 备份ID */
  BackupId: string;
  /** 备份的名称。 */
  BackupName?: string;
  /** 是否为永久保留的备份。 */
  IsPermanent?: boolean;
  /** 备份到期时间。 */
  Deadline?: string;
}

declare interface ModifyFileBackupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFileBackupPlanRequest {
  /** 备份计划ID */
  PlanId?: string;
  /** 备份策略ID */
  PolicyId?: string;
  /** 计划名称 */
  PlanName?: string;
  /** 备份路径列表，1~20 个 */
  BackupPaths?: string[];
  /** 包含文件类型，0~20 个 */
  IncludeFileTypes?: string[];
  /** 排除文件路径列表，0~20 个 */
  ExcludePatterns?: string[];
  /** 是否排除系统目录 */
  ExcludeSystemDirectories?: boolean;
  /** 备份库ID */
  BackupStorageId?: string;
  /** 计划状态，可选值：normal（正常）、paused（暂停） */
  Status?: string;
}

declare interface ModifyFileBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProtectGroupAttributeRequest {
  /** 要修改属性的保护组id */
  ProtectGroupId: string;
  /** 保护组名称 */
  ProtectGroupName?: string;
}

declare interface ModifyProtectGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySitePairAttributeRequest {
  /** 要修改属性的容灾站点id */
  SitePairId: string;
  /** 容灾站点名称 */
  SitePairName?: string;
}

declare interface ModifySitePairAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportAgentMetricsRequest {
}

declare interface ReportAgentMetricsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportGatewayHeartbeatRequest {
}

declare interface ReportGatewayHeartbeatResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportJobProgressRequest {
}

declare interface ReportJobProgressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunCopyPairTasksRequest {
  /** 复制对ID列表 */
  CopyPairIds: string[];
  /** 要启动复制对的类型（DISK/INSTANCE/CFS） */
  CopyPairType: string;
}

declare interface RunCopyPairTasksResponse {
  /** 已启动复制任务的复制对ID列表 */
  CopyPairIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunFailoverCopyPairsRequest {
  /** 复制对ID列表 */
  CopyPairIds: string[];
  /** 复制对类型，枚举值：DISK / INSTANCE / CFS。 */
  CopyPairType: string;
  /** 切换类型，支持WAIT和NOW */
  FailoverType: string;
}

declare interface RunFailoverCopyPairsResponse {
  /** 故障切换任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunInstancesWithBackupGroupRequest {
  /** 备份组ID */
  BackupGroupId: string;
}

declare interface RunInstancesWithBackupGroupResponse {
  /** 创建的实例ID */
  InstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCopyPairTasksRequest {
  /** 复制对ID列表 */
  CopyPairIds: string[];
  /** 复制对类型（DISK/INSTANCE/CFS） */
  CopyPairType: string;
}

declare interface StopCopyPairTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindAutoBackupPolicyRequest {
}

declare interface UnbindAutoBackupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bdrc 灾备中心} */
declare interface Bdrc {
  (): Versions;
  /** 备份组回滚 {@link ApplyBackupGroupRequest} {@link ApplyBackupGroupResponse} */
  ApplyBackupGroup(data: ApplyBackupGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyBackupGroupResponse>;
  /** 绑定定期备份策略 {@link BindAutoBackupPolicyRequest} {@link BindAutoBackupPolicyResponse} */
  BindAutoBackupPolicy(data?: BindAutoBackupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<BindAutoBackupPolicyResponse>;
  /** 创建定期备份策略 {@link CreateAutoBackupPolicyRequest} {@link CreateAutoBackupPolicyResponse} */
  CreateAutoBackupPolicy(data: CreateAutoBackupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoBackupPolicyResponse>;
  /** 创建备份组 {@link CreateBackupGroupRequest} {@link CreateBackupGroupResponse} */
  CreateBackupGroup(data: CreateBackupGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupGroupResponse>;
  /** 创建备份库 {@link CreateBackupVaultRequest} {@link CreateBackupVaultResponse} */
  CreateBackupVault(data?: CreateBackupVaultRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupVaultResponse>;
  /** 创建容灾保护组 {@link CreateDisasterRecoveryProtectGroupRequest} {@link CreateDisasterRecoveryProtectGroupResponse} */
  CreateDisasterRecoveryProtectGroup(data: CreateDisasterRecoveryProtectGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisasterRecoveryProtectGroupResponse>;
  /** 创建容灾站点对 {@link CreateDisasterRecoverySitePairRequest} {@link CreateDisasterRecoverySitePairResponse} */
  CreateDisasterRecoverySitePair(data: CreateDisasterRecoverySitePairRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisasterRecoverySitePairResponse>;
  /** 创建VPC映射 {@link CreateDisasterRecoveryVpcMappingRequest} {@link CreateDisasterRecoveryVpcMappingResponse} */
  CreateDisasterRecoveryVpcMapping(data: CreateDisasterRecoveryVpcMappingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisasterRecoveryVpcMappingResponse>;
  /** 创建文件备份 {@link CreateFileBackupRequest} {@link CreateFileBackupResponse} */
  CreateFileBackup(data: CreateFileBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileBackupResponse>;
  /** 创建备份计划 {@link CreateFileBackupPlanRequest} {@link CreateFileBackupPlanResponse} */
  CreateFileBackupPlan(data: CreateFileBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileBackupPlanResponse>;
  /** 创建文件备份恢复任务 {@link CreateFileRestoreTaskRequest} {@link CreateFileRestoreTaskResponse} */
  CreateFileRestoreTask(data?: CreateFileRestoreTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileRestoreTaskResponse>;
  /** 创建CVM复制对 {@link CreateInstanceCopyPairRequest} {@link CreateInstanceCopyPairResponse} */
  CreateInstanceCopyPair(data: CreateInstanceCopyPairRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceCopyPairResponse>;
  /** 创建CVM演练 {@link CreateInstanceDrillPairsRequest} {@link CreateInstanceDrillPairsResponse} */
  CreateInstanceDrillPairs(data: CreateInstanceDrillPairsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceDrillPairsResponse>;
  /** 创建安全组映射 {@link CreateSecurityGroupMappingRequest} {@link CreateSecurityGroupMappingResponse} */
  CreateSecurityGroupMapping(data: CreateSecurityGroupMappingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupMappingResponse>;
  /** 删除备份策略 {@link DeleteAutoBackupPoliciesRequest} {@link DeleteAutoBackupPoliciesResponse} */
  DeleteAutoBackupPolicies(data: DeleteAutoBackupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAutoBackupPoliciesResponse>;
  /** 删除备份组 {@link DeleteBackupGroupsRequest} {@link DeleteBackupGroupsResponse} */
  DeleteBackupGroups(data: DeleteBackupGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupGroupsResponse>;
  /** 删除备份库 {@link DeleteBackupVaultsRequest} {@link DeleteBackupVaultsResponse} */
  DeleteBackupVaults(data: DeleteBackupVaultsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupVaultsResponse>;
  /** 删除容灾复制对 {@link DeleteCopyPairsRequest} {@link DeleteCopyPairsResponse} */
  DeleteCopyPairs(data: DeleteCopyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCopyPairsResponse>;
  /** 删除容灾保护组 {@link DeleteDisasterRecoveryProtectGroupsRequest} {@link DeleteDisasterRecoveryProtectGroupsResponse} */
  DeleteDisasterRecoveryProtectGroups(data: DeleteDisasterRecoveryProtectGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDisasterRecoveryProtectGroupsResponse>;
  /** 删除容灾站点对 {@link DeleteDisasterRecoverySitePairsRequest} {@link DeleteDisasterRecoverySitePairsResponse} */
  DeleteDisasterRecoverySitePairs(data: DeleteDisasterRecoverySitePairsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDisasterRecoverySitePairsResponse>;
  /** 删除容灾站点对网络映射信息 {@link DeleteDisasterRecoveryVpcMappingRequest} {@link DeleteDisasterRecoveryVpcMappingResponse} */
  DeleteDisasterRecoveryVpcMapping(data: DeleteDisasterRecoveryVpcMappingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDisasterRecoveryVpcMappingResponse>;
  /** 删除演练 {@link DeleteDrillPairsRequest} {@link DeleteDrillPairsResponse} */
  DeleteDrillPairs(data: DeleteDrillPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDrillPairsResponse>;
  /** 删除备份计划 {@link DeleteFileBackupPlansRequest} {@link DeleteFileBackupPlansResponse} */
  DeleteFileBackupPlans(data: DeleteFileBackupPlansRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileBackupPlansResponse>;
  /** 删除文件备份点 {@link DeleteFileBackupsRequest} {@link DeleteFileBackupsResponse} */
  DeleteFileBackups(data?: DeleteFileBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileBackupsResponse>;
  /** 删除安全组映射 {@link DeleteSecurityGroupMappingRequest} {@link DeleteSecurityGroupMappingResponse} */
  DeleteSecurityGroupMapping(data: DeleteSecurityGroupMappingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupMappingResponse>;
  /** 查询定期备份策略列表 {@link DescribeAutoBackupPoliciesRequest} {@link DescribeAutoBackupPoliciesResponse} */
  DescribeAutoBackupPolicies(data?: DescribeAutoBackupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoBackupPoliciesResponse>;
  /** 查询备份组恢复任务 {@link DescribeBackupGroupRollbackTasksRequest} {@link DescribeBackupGroupRollbackTasksResponse} */
  DescribeBackupGroupRollbackTasks(data?: DescribeBackupGroupRollbackTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupGroupRollbackTasksResponse>;
  /** 查询备份组列表 {@link DescribeBackupGroupsRequest} {@link DescribeBackupGroupsResponse} */
  DescribeBackupGroups(data?: DescribeBackupGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupGroupsResponse>;
  /** 查询备份组的操作掩码 {@link DescribeBackupGroupsDeniedActionsRequest} {@link DescribeBackupGroupsDeniedActionsResponse} */
  DescribeBackupGroupsDeniedActions(data: DescribeBackupGroupsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupGroupsDeniedActionsResponse>;
  /** 查询受备份保护的实例列表 {@link DescribeBackupInstancesRequest} {@link DescribeBackupInstancesResponse} */
  DescribeBackupInstances(data?: DescribeBackupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupInstancesResponse>;
  /** 查询概览信息 {@link DescribeBackupOverviewGeneralRequest} {@link DescribeBackupOverviewGeneralResponse} */
  DescribeBackupOverviewGeneral(data?: DescribeBackupOverviewGeneralRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupOverviewGeneralResponse>;
  /** 查询整机备份计划 {@link DescribeBackupPlansRequest} {@link DescribeBackupPlansResponse} */
  DescribeBackupPlans(data?: DescribeBackupPlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupPlansResponse>;
  /** 查询备份库信息 {@link DescribeBackupVaultsRequest} {@link DescribeBackupVaultsResponse} */
  DescribeBackupVaults(data?: DescribeBackupVaultsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupVaultsResponse>;
  /** 查询备份库的操作掩码 {@link DescribeBackupVaultsDeniedActionsRequest} {@link DescribeBackupVaultsDeniedActionsResponse} */
  DescribeBackupVaultsDeniedActions(data: DescribeBackupVaultsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupVaultsDeniedActionsResponse>;
  /** 查询共同备份点 {@link DescribeCommonBackupPointsRequest} {@link DescribeCommonBackupPointsResponse} */
  DescribeCommonBackupPoints(data: DescribeCommonBackupPointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCommonBackupPointsResponse>;
  /** 查询容灾复制对 {@link DescribeCopyPairsRequest} {@link DescribeCopyPairsResponse} */
  DescribeCopyPairs(data: DescribeCopyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCopyPairsResponse>;
  /** 查询复制对操作掩码 {@link DescribeCopyPairsDeniedActionsRequest} {@link DescribeCopyPairsDeniedActionsResponse} */
  DescribeCopyPairsDeniedActions(data: DescribeCopyPairsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCopyPairsDeniedActionsResponse>;
  /** 查询演练组 {@link DescribeDisasterRecoveryDrillGroupsRequest} {@link DescribeDisasterRecoveryDrillGroupsResponse} */
  DescribeDisasterRecoveryDrillGroups(data: DescribeDisasterRecoveryDrillGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoveryDrillGroupsResponse>;
  /** 查询容灾资源概览 {@link DescribeDisasterRecoveryOverviewRequest} {@link DescribeDisasterRecoveryOverviewResponse} */
  DescribeDisasterRecoveryOverview(data?: DescribeDisasterRecoveryOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoveryOverviewResponse>;
  /** 查询容灾保护组 {@link DescribeDisasterRecoveryProtectGroupsRequest} {@link DescribeDisasterRecoveryProtectGroupsResponse} */
  DescribeDisasterRecoveryProtectGroups(data: DescribeDisasterRecoveryProtectGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoveryProtectGroupsResponse>;
  /** 查询容灾站点对列表 {@link DescribeDisasterRecoverySitePairsRequest} {@link DescribeDisasterRecoverySitePairsResponse} */
  DescribeDisasterRecoverySitePairs(data: DescribeDisasterRecoverySitePairsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoverySitePairsResponse>;
  /** 查询容灾站点对操作掩码 {@link DescribeDisasterRecoverySitePairsDeniedActionsRequest} {@link DescribeDisasterRecoverySitePairsDeniedActionsResponse} */
  DescribeDisasterRecoverySitePairsDeniedActions(data: DescribeDisasterRecoverySitePairsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoverySitePairsDeniedActionsResponse>;
  /** 查询当前地域支持容灾的生产地域 {@link DescribeDisasterRecoverySupportRegionRequest} {@link DescribeDisasterRecoverySupportRegionResponse} */
  DescribeDisasterRecoverySupportRegion(data?: DescribeDisasterRecoverySupportRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoverySupportRegionResponse>;
  /** 查询容灾云盘信息 {@link DescribeDisksRequest} {@link DescribeDisksResponse} */
  DescribeDisks(data: DescribeDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisksResponse>;
  /** 查询演练对 {@link DescribeDrillPairsRequest} {@link DescribeDrillPairsResponse} */
  DescribeDrillPairs(data: DescribeDrillPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDrillPairsResponse>;
  /** 查询演练操作掩码 {@link DescribeDrillPairsDeniedActionsRequest} {@link DescribeDrillPairsDeniedActionsResponse} */
  DescribeDrillPairsDeniedActions(data: DescribeDrillPairsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDrillPairsDeniedActionsResponse>;
  /** 浏览文件备份内容 {@link DescribeFileBackupObjectsRequest} {@link DescribeFileBackupObjectsResponse} */
  DescribeFileBackupObjects(data?: DescribeFileBackupObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileBackupObjectsResponse>;
  /** 查询备份计划 {@link DescribeFileBackupPlansRequest} {@link DescribeFileBackupPlansResponse} */
  DescribeFileBackupPlans(data?: DescribeFileBackupPlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileBackupPlansResponse>;
  /** 查询文件备份点 {@link DescribeFileBackupsRequest} {@link DescribeFileBackupsResponse} */
  DescribeFileBackups(data?: DescribeFileBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileBackupsResponse>;
  /** 查询文件备份点操作限制列表接口 {@link DescribeFileBackupsDeniedActionsRequest} {@link DescribeFileBackupsDeniedActionsResponse} */
  DescribeFileBackupsDeniedActions(data: DescribeFileBackupsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileBackupsDeniedActionsResponse>;
  /** 查询文件备份恢复任务列表 {@link DescribeFileRestoreTasksRequest} {@link DescribeFileRestoreTasksResponse} */
  DescribeFileRestoreTasks(data?: DescribeFileRestoreTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileRestoreTasksResponse>;
  /** 查询agent任务作业 {@link DescribeJobsRequest} {@link DescribeJobsResponse} */
  DescribeJobs(data?: DescribeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobsResponse>;
  /** 创建容灾复制对询价 {@link DescribePriceCreateCopyPairsRequest} {@link DescribePriceCreateCopyPairsResponse} */
  DescribePriceCreateCopyPairs(data: DescribePriceCreateCopyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePriceCreateCopyPairsResponse>;
  /** 查询保护组操作掩码 {@link DescribeProtectGroupsDeniedActionsRequest} {@link DescribeProtectGroupsDeniedActionsResponse} */
  DescribeProtectGroupsDeniedActions(data: DescribeProtectGroupsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectGroupsDeniedActionsResponse>;
  /** 查询受保护实例列表 {@link DescribeProtectedInstancesRequest} {@link DescribeProtectedInstancesResponse} */
  DescribeProtectedInstances(data?: DescribeProtectedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectedInstancesResponse>;
  /** 查询安全组映射列表 {@link DescribeSecurityGroupMappingsRequest} {@link DescribeSecurityGroupMappingsResponse} */
  DescribeSecurityGroupMappings(data: DescribeSecurityGroupMappingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupMappingsResponse>;
  /** 查询容灾站点vpc映射信息 {@link DescribeVpcMappingsRequest} {@link DescribeVpcMappingsResponse} */
  DescribeVpcMappings(data: DescribeVpcMappingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcMappingsResponse>;
  /** 完成切换 {@link FinishFailoverCopyPairsRequest} {@link FinishFailoverCopyPairsResponse} */
  FinishFailoverCopyPairs(data: FinishFailoverCopyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<FinishFailoverCopyPairsResponse>;
  /** 修改定期备份策略 {@link ModifyAutoBackupPolicyAttributeRequest} {@link ModifyAutoBackupPolicyAttributeResponse} */
  ModifyAutoBackupPolicyAttribute(data: ModifyAutoBackupPolicyAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoBackupPolicyAttributeResponse>;
  /** 修改备份信息 {@link ModifyBackupAttributeRequest} {@link ModifyBackupAttributeResponse} */
  ModifyBackupAttribute(data: ModifyBackupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupAttributeResponse>;
  /** 修改备份库信息 {@link ModifyBackupVaultAttributeRequest} {@link ModifyBackupVaultAttributeResponse} */
  ModifyBackupVaultAttribute(data: ModifyBackupVaultAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupVaultAttributeResponse>;
  /** 修改容灾复制对 {@link ModifyCopyPairAttributeRequest} {@link ModifyCopyPairAttributeResponse} */
  ModifyCopyPairAttribute(data: ModifyCopyPairAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCopyPairAttributeResponse>;
  /** 修改演练组 {@link ModifyDrillGroupAttributeRequest} {@link ModifyDrillGroupAttributeResponse} */
  ModifyDrillGroupAttribute(data: ModifyDrillGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDrillGroupAttributeResponse>;
  /** 修改演练对 {@link ModifyDrillPairAttributeRequest} {@link ModifyDrillPairAttributeResponse} */
  ModifyDrillPairAttribute(data: ModifyDrillPairAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDrillPairAttributeResponse>;
  /** 修改文件备份信息 {@link ModifyFileBackupAttributeRequest} {@link ModifyFileBackupAttributeResponse} */
  ModifyFileBackupAttribute(data: ModifyFileBackupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFileBackupAttributeResponse>;
  /** 修改备份计划 {@link ModifyFileBackupPlanRequest} {@link ModifyFileBackupPlanResponse} */
  ModifyFileBackupPlan(data?: ModifyFileBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFileBackupPlanResponse>;
  /** 修改容灾保护组 {@link ModifyProtectGroupAttributeRequest} {@link ModifyProtectGroupAttributeResponse} */
  ModifyProtectGroupAttribute(data: ModifyProtectGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProtectGroupAttributeResponse>;
  /** 修改容灾站点对 {@link ModifySitePairAttributeRequest} {@link ModifySitePairAttributeResponse} */
  ModifySitePairAttribute(data: ModifySitePairAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySitePairAttributeResponse>;
  /** 上报agent指标信息 {@link ReportAgentMetricsRequest} {@link ReportAgentMetricsResponse} */
  ReportAgentMetrics(data?: ReportAgentMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<ReportAgentMetricsResponse>;
  /** 上报Agent心跳 {@link ReportGatewayHeartbeatRequest} {@link ReportGatewayHeartbeatResponse} */
  ReportGatewayHeartbeat(data?: ReportGatewayHeartbeatRequest, config?: AxiosRequestConfig): AxiosPromise<ReportGatewayHeartbeatResponse>;
  /** 上报agent作业进度 {@link ReportJobProgressRequest} {@link ReportJobProgressResponse} */
  ReportJobProgress(data?: ReportJobProgressRequest, config?: AxiosRequestConfig): AxiosPromise<ReportJobProgressResponse>;
  /** 启动复制对 {@link RunCopyPairTasksRequest} {@link RunCopyPairTasksResponse} */
  RunCopyPairTasks(data: RunCopyPairTasksRequest, config?: AxiosRequestConfig): AxiosPromise<RunCopyPairTasksResponse>;
  /** 故障切换 {@link RunFailoverCopyPairsRequest} {@link RunFailoverCopyPairsResponse} */
  RunFailoverCopyPairs(data: RunFailoverCopyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<RunFailoverCopyPairsResponse>;
  /** 备份组新建云服务器 {@link RunInstancesWithBackupGroupRequest} {@link RunInstancesWithBackupGroupResponse} */
  RunInstancesWithBackupGroup(data: RunInstancesWithBackupGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RunInstancesWithBackupGroupResponse>;
  /** 停止复制对 {@link StopCopyPairTasksRequest} {@link StopCopyPairTasksResponse} */
  StopCopyPairTasks(data: StopCopyPairTasksRequest, config?: AxiosRequestConfig): AxiosPromise<StopCopyPairTasksResponse>;
  /** 解绑定期备份策略 {@link UnbindAutoBackupPolicyRequest} {@link UnbindAutoBackupPolicyResponse} */
  UnbindAutoBackupPolicy(data?: UnbindAutoBackupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindAutoBackupPolicyResponse>;
}

export declare type Versions = ["2026-03-30"];

export default Bdrc;
