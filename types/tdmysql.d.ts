/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 分析引擎实例信息 */
declare interface AnalysisInstanceInfo {
  /** 副本数 */
  ReplicasNum?: number;
}

/** 分析引擎关联关系 */
declare interface AnalysisRelationInfo {
  /** 源实例Id */
  PrimaryInstanceId?: string;
  /** 分析引擎实例Id */
  AnalysisInstanceId?: string;
  /** 分析引擎关系状态枚举值：creating： 创建中running： 运行中destroyed： 已销毁 */
  Status?: string;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
}

/** 可恢复时间区间 */
declare interface ArchiveLogInterval {
  /** 结束时间 */
  EndTime?: string | null;
  /** 大版本 */
  MajorVersion?: string | null;
  /** 小版本 */
  MinorVersion?: string | null;
  /** 开始时间 */
  StartTime?: string | null;
}

/** 归档日志对象 */
declare interface ArchiveLogModel {
  /** 归档日志ID */
  ArchiveLogId?: number | null;
  /** 备份耗时 */
  BackupDuration?: number | null;
  /** 备份集状态 */
  BackupStatus?: string | null;
  /** 备份结束时间 */
  EndTime?: string | null;
  /** 错误信息 */
  ErrorMessage?: string | null;
  /** 过期时间 */
  ExpiredTime?: string | null;
  /** 备份文件名 */
  FileName?: string | null;
  /** 备份集文件大小，单位Byte */
  FileSize?: number | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 备份开始时间 */
  StartTime?: string | null;
}

/** serverless实例的ccu范围 */
declare interface AutoScalingConfig {
  /** ccu最小值 */
  RangeMin: number | null;
  /** ccu最大值 */
  RangeMax: number | null;
}

/** 备份方式统计对象-提供给备份空间统计接口 */
declare interface BackupMethodStatisticsModel {
  /** 自动备份大小，单位Byte */
  AutoBackupSize?: number | null;
  /** 总备份每天平均大小，单位Byte */
  AverageSizePerDay?: number | null;
  /** 手动备份大小，单位Byte */
  ManualBackupSize?: number | null;
  /** 总备份大小，单位Byte */
  TotalSize?: number | null;
}

/** 备份方式统计对象，提供给 备份集统计详情 接口 */
declare interface BackupMethodStatisticsOutPut {
  /** 自动备份大小，单位Byte */
  AutoBackupSize?: number[] | null;
  /** 手动备份大小，单位Byte */
  ManualBackupSize?: number[] | null;
}

/** 修改备份策略对象 */
declare interface BackupPolicyModelInput {
  /** 备份结束时间 */
  BackupEndTime?: string;
  /** 备份方式 physical 物理备份 snapshot 快照备份 */
  BackupMethod?: string;
  /** 备份开始时间 */
  BackupStartTime?: string;
  /** 是否开启全量备份 */
  EnableFull?: number;
  /** 是否开启日志备份 */
  EnableLog?: number;
  /** 全备保留时间,目前只能设置7天 */
  FullRetentionPeriod?: number;
  /** 实例ID */
  InstanceId?: string;
  /** 日志保留天数，目前只能设置保留7天 */
  LogRetentionPeriod?: number;
  /** 一周的哪几天进行备份 */
  PeriodTime?: string;
  /** 存储类型:COS,SNAPSHOT枚举值： COS： COS存储 SNAPSHOT： 云盘快照 */
  StorageType?: string;
}

/** 备份策略对象 */
declare interface BackupPolicyModelOutPut {
  /** 备份结束时间 */
  BackupEndTime?: string | null;
  /** 备份方式 */
  BackupMethod?: string | null;
  /** 备份开始时间 */
  BackupStartTime?: string | null;
  /** 引擎类型 */
  DBType?: string | null;
  /** 引擎版本 */
  DBVersion?: string | null;
  /** 是否开启全量备份 */
  EnableFull?: number | null;
  /** 是否开启日志备份 */
  EnableLog?: number | null;
  /** 预计下次备份时间 */
  ExpectedNextBackupPeriod?: string | null;
  /** 全备保留时间 */
  FullRetentionPeriod?: number | null;
  /** 策略ID */
  ID?: number | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 日志保留天数 */
  LogRetentionPeriod?: number | null;
  /** 一周的哪几天进行备份 */
  PeriodTime?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 备份周期类型 0:Weekly */
  PeriodType?: number | null;
}

/** 备份集对象 */
declare interface BackupSetModel {
  /** 备份集耗时，单位 sec */
  BackupDuration?: number | null;
  /** 备份方式 */
  BackupMethod?: string | null;
  /** 备份备注名 */
  BackupName?: string | null;
  /** 备份集进度百分比 */
  BackupProgress?: number | null;
  /** 备份集ID */
  BackupSetId?: number | null;
  /** 备份集状态 */
  BackupStatus?: string | null;
  /** 备份集类型 */
  BackupType?: string | null;
  /** 实例版本号 */
  DBVersion?: string | null;
  /** 备份结束时间 */
  EndTime?: string | null;
  /** 事务commit结束时间 */
  EndTrxTime?: string | null;
  /** 错误信息 */
  ErrorMessage?: string | null;
  /** 备份过期时间 */
  ExpiredTime?: string | null;
  /** 备份文件名 */
  FileName?: string | null;
  /** 备份集文件大小，单位Byte */
  FileSize?: number | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 备份触发，0 - autobackup, 1 - manual */
  ManualBackup?: number | null;
  /** 备份开始时间 */
  StartTime?: string | null;
}

/** 备份集查询的filter */
declare interface BackupSetsReqFilter {
  /** 备份方式,多个值用逗号隔开枚举值：physical： 物理备份snapshot： 快照备份 */
  BackupMethod?: string | null;
  /** 备份状态，多个值用逗号隔开，含义说明：等待调度pending， 运行中 running, 成功success,失败 failed */
  BackupStatus?: string | null;
  /** 备份类型，多个值用逗号隔开，含义说明：全量备份 full枚举值：full： 全量备份 */
  BackupType?: string | null;
  /** 备份触发方式枚举值：0： 自动备份1： 手工备份 */
  ManualBackup?: string | null;
}

/** 备份统计对象 */
declare interface BackupStatisticsModel {
  /** 总备份每天平均大小,单位Byte */
  AverageSizePerDay?: number | null;
  /** 数据备份大小，单位Byte */
  DataBackupSize?: number | null;
  /** 日志备份大小，单位Byte */
  LogBackupSize?: number | null;
  /** 总备份集个数 */
  TotalCount?: number | null;
  /** 总备份大小，单位Byte */
  TotalSize?: number | null;
}

/** 备份方式统计对象，提供给 备份集统计详情 接口 */
declare interface BackupTypeStatisticsModel {
  /** 数据备份大小，单位Byte */
  DataBackupSize?: number[] | null;
  /** 日志备份大小，单位Byte */
  LogBackupSize?: number[] | null;
}

/** 用于展示该节点的 Binlog 信息。 */
declare interface BinlogInfo {
  /** 日志服务的唯一 ID */
  Sid?: string;
  /** 日志服务的类型 */
  Type?: string;
  /** 实例的唯一 ID */
  InstanceId?: string;
}

/** 克隆实例对象 */
declare interface CloneInstanceModel {
  /** 克隆任务结束时间 */
  CloneEndTime?: string | null;
  /** 克隆记录ID */
  CloneId?: number | null;
  /** 克隆实例类型 */
  CloneInsType?: string | null;
  /** 克隆实例ID */
  CloneInstanceId?: string | null;
  /** 克隆实例是否已经删除 */
  CloneInstanceIsDeleted?: boolean | null;
  /** 克隆任务进度 */
  CloneProgress?: number | null;
  /** 克隆任务开始时间 */
  CloneStartTime?: string | null;
  /** 克隆任务状态 */
  CloneStatus?: string | null;
  /** 克隆时间 */
  CloneTime?: string | null;
  /** 克隆类型 */
  CloneType?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 引擎类型 */
  DBType?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 源实例ID */
  SourceInstanceId?: string | null;
}

/** 约束类型值的范围 */
declare interface ConstraintRange {
  /** 约束类型为section时的最小值 */
  Min: string;
  /** 约束类型为section时的最大值 */
  Max: string;
}

/** 云数据库参数信息。 */
declare interface DBParamValue {
  /** 参数名称 */
  Param: string;
  /** 参数值 */
  Value: string;
}

/** 数据备份统计对象 */
declare interface DataBackupStatisticsModel {
  /** 自动备份个数 */
  AutoBackupCount?: number | null;
  /** 自动备份大小，单位Byte */
  AutoBackupSize?: number | null;
  /** 平均每个备份大小,单位Byte */
  AverageSizePerBackup?: number | null;
  /** 平均每天备份大小,单位Byte */
  AverageSizePerDay?: number | null;
  /** 手工备份个数 */
  ManualBackupCount?: number | null;
  /** 手工备份大小，单位Byte */
  ManualBackupSize?: number | null;
  /** 数据备份个数 */
  TotalCount?: number | null;
  /** 数据备份大小，单位Byte */
  TotalSize?: number | null;
}

/** 数据库信息 */
declare interface Database {
  /** 数据库名称 */
  DbName: string;
}

/** 数据库函数信息 */
declare interface DatabaseFunction {
  /** 函数名称 */
  Func: string;
}

/** Database级别权限列表 */
declare interface DatabasePrivileges {
  /** database名 */
  Database: string;
  /** 权限列表 */
  Privileges: string[];
}

/** 数据库存储过程信息 */
declare interface DatabaseProcedure {
  /** 存储过程名称 */
  Proc: string;
}

/** 数据库表信息 */
declare interface DatabaseTable {
  /** 表名 */
  Table: string;
}

/** 数据库视图信息 */
declare interface DatabaseView {
  /** 视图名称 */
  View: string;
}

/** 查询售卖接口，region信息返回类型 */
declare interface DescribeSaleRegionInfo {
  /** Region英文字符串 */
  Region?: string;
  /** 售卖Zone列表 */
  ZoneList?: DescribeSaleZonesInfo[];
  /** Region中文字符串 */
  RegionName?: string;
  /** 是否售卖。1:售卖，0不售卖 */
  Enable?: number;
  /** 多可用可选数量 */
  AvailableZoneNum?: number | null;
  /** 是否允许使用日志副本 */
  IsSupportedLogReplica?: boolean | null;
  /** 可用区组合 */
  ZoneGroup?: DescribeSaleZonesGroup[];
  /** 是否支持serverless */
  IsSupportServerless?: boolean;
}

/** 查询售卖地域，提供推荐的可用区组合 */
declare interface DescribeSaleZonesGroup {
  /** 可用区数 */
  ZoneNum?: number;
  /** 可用区组合 */
  Zones?: string[];
  /** 支持的类型 */
  SupportTypes?: string[];
  /** 支持的磁盘类型枚举值：CLOUD_TCS： 本地盘CLOUD_HSSD： 增强型云盘 */
  AvailableDiskTypes?: string[] | null;
  /** 是否支持serverless */
  IsSupportServerless?: boolean;
}

/** 查询售卖接口，zone信息返回类型 */
declare interface DescribeSaleZonesInfo {
  /** Zone英文字符串 */
  Zone?: string;
  /** Zone中文字符串 */
  ZoneName?: string;
  /** 是否售卖，1：售卖；0：不售卖 */
  Enable?: number;
  /** 是否是默认主可用区,0不是，1是 */
  IsDefaultMaster?: number | null;
  /** 可用区可选磁盘类型 */
  AvailableDiskTypes?: string[] | null;
  /** 是否是独享可用区 */
  SupportTypes?: string[];
  /** 是否支持serverless */
  IsSupportServerless?: boolean;
}

/** 实例列表过滤条件 */
declare interface InstanceFilter {
  /** 过滤key，支持InstanceId、VpcId、SubnetId、Vip、Vport、Status、InstanceName、TagKey */
  Name?: string;
  /** 过滤value */
  Values?: string[];
}

/** 实例信息类型 */
declare interface InstanceInfo {
  /** 计算节点数量 */
  ComputeNodeNum?: number;
  /** 区域 */
  Zone?: string;
  /** 创建实例版本 */
  CreateVersion?: string | null;
  /** 初始化实例参数 */
  InitParams?: InstanceParam[] | null;
  /** 实例状态：creating、created、initializing、running、modifying、isolating、isolated、destroying、destroyed */
  Status?: string;
  /** 实例id */
  InstanceId?: string;
  /** 存储节点数量 */
  StorageNodeNum?: number;
  /** 实例标签信息 */
  ResourceTags?: ResourceTag[] | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 计算节点cpu核数 */
  Cpu?: number;
  /** 字符型vpcid */
  VpcId?: string;
  /** 计算节点mem，单位GB */
  Mem?: number;
  /** 子网IP */
  Vip?: string;
  /** 字符型subnetid */
  SubnetId?: string;
  /** 子网端口 */
  Vport?: number;
  /** 存储节点磁盘容量，单位GB */
  Disk?: number;
  /** 实例创建时间 */
  CreateTime?: string;
  /** 实例所属地域 */
  Region?: string;
  /** 实例状态中文描述 */
  StatusDesc?: string;
  /** 管控节点CPU核数 */
  MCCpu?: number | null;
  /** 管控节点CPU大小 */
  MCMem?: number | null;
  /** 计算节点CPU核数 */
  ComputerNodeCpu?: number | null;
  /** 计算节点内存大小 */
  ComputerNodeMem?: number | null;
  /** 存储节点CPU核数 */
  StorageNodeCpu?: number | null;
  /** 存储节点内存大小 */
  StorageNodeMem?: number | null;
  /** 管控节点数量 */
  MCNum?: number | null;
  /** 续费标志 */
  RenewFlag?: number | null;
  /** 付费模式，0按量付费；1包年包月 */
  PayMode?: string;
  /** 用户标签，inner：内部用户；external：外部用户 */
  AccountTag?: string | null;
  /** 实例架构类型，separate:分离架构；hyper:对等架构 */
  InstanceType?: string | null;
  /** 磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘 */
  StorageType?: string | null;
  /** &quot;0000-00-00 00:00:00&quot; */
  DestroyedAt?: string | null;
  /** &quot;0000-00-00 00:00:00&quot; */
  ExpireAt?: string | null;
  /** &quot;0000-00-00 00:00:00&quot; */
  IsolatedAt?: string | null;
  /** &quot;0000-00-00 00:00:00&quot; */
  IsolatedFrom?: string | null;
  /** 1 */
  Replications?: number | null;
  /** 全能型副本数 */
  FullReplications?: number;
  /** 账号信息 */
  AppId?: number | null;
  /** 账号信息 */
  SubAccountUin?: string | null;
  /** 账号信息 */
  Uin?: string | null;
  /** AZ信息 */
  Zones?: string[] | null;
  /** 实例节点 */
  Nodes?: InstanceNode[] | null;
  /** binlog是否打开 */
  BinlogStatus?: number;
  /** cdc节点核数 */
  CdcNodeCpu?: number;
  /** cdc节点内存大小 */
  CdcNodeMem?: number;
  /** cdc节点数 */
  CdcNodeNum?: number;
  /** az模式，1: 单AZ 2: 多AZ非主AZ模式 3: 多AZ主AZ模式 */
  AZMode?: number | null;
  /** 灾备标志位，1: 无灾备关系；2: 灾备主实例；3: 灾备备实例 */
  StandbyFlag?: number | null;
  /** 连接的备实例数量（仅当 StandbyFlag == 2 时有效） */
  StandbySecondaryNum?: number | null;
  /** 列存节点 cpu 核数 */
  ColumnarNodeCpu?: number;
  /** 列存节点内存大小 */
  ColumnarNodeMem?: number;
  /** 列存节点数 */
  ColumnarNodeNum?: number;
  /** 列存节点磁盘容量，单位GB */
  ColumnarNodeDisk?: number;
  /** 列存节点磁盘类型 */
  ColumnarNodeStorageType?: string;
  /** 独享标志位，1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型） */
  InstanceCategory?: number;
  /** dbdc-xxxxx */
  ExclusiveClusterId?: string;
  /** 兼容模式 */
  SQLMode?: string;
  /** 实例模式 */
  InstanceMode?: string;
  /** 实例发货平台 */
  ClusterId?: string;
  /** 自动扩容配置 */
  AutoScaleConfig?: AutoScalingConfig;
  /** 分析引擎模式枚举值：libra： LibraDB分析引擎模式 */
  AnalysisMode?: string;
  /** 分析引擎关系信息 */
  AnalysisRelationInfos?: AnalysisRelationInfo[];
  /** 分析引擎实例信息 */
  AnalysisInstanceInfo?: AnalysisInstanceInfo;
}

/** 节点信息 */
declare interface InstanceNode {
  /** 主键 */
  ID?: number | null;
  /** 实例id */
  InstanceId?: string | null;
  /** Node Id */
  NodeId?: string | null;
  /** 实例Ip */
  Ip?: string | null;
  /** 实例EniIp */
  EniIp?: string | null;
  /** 实例Port */
  Port?: number | null;
  /** 实例SpecCode */
  SpecCode?: string | null;
  /** 实例NodeName */
  NodeName?: string | null;
  /** 实例Cpu */
  Cpu?: number | null;
  /** 实例Mem */
  Mem?: number | null;
  /** 实例Disk */
  Disk?: number | null;
  /** 实例类型 */
  Type?: string | null;
  /** 实例状态 */
  Status?: string | null;
  /** 实例版本 */
  Version?: string | null;
  /** 实例地域 */
  Zone?: string | null;
  /** 实例LocalDNS */
  LocalDNS?: string | null;
  /** 实例Region */
  Region?: string | null;
  /** 实例日志盘 */
  LogDisk?: number | null;
  /** 实例数据盘 */
  DataDisk?: number | null;
  /** 实例ZoneID */
  ZoneID?: string | null;
  /** 实例SpecName */
  SpecName?: string | null;
  /** 实例Replicas */
  Replicas?: number | null;
  /** 实例Shards */
  Shards?: number | null;
  /** 实例数据副本 */
  DataReplicas?: number | null;
  /** 实例初始化参数 */
  Params?: string | null;
  /** 存储介质, CLOUD_PREMIUM:高性能云盘，CLOUD_SSD: SSD 云盘，CLOUD_HSSD: HSSD 云盘 */
  StorageType?: string | null;
}

/** 初始化实例参数 */
declare interface InstanceParam {
  /** 配置参数key */
  Param: string;
  /** 配置参数value */
  Value: string;
}

/** 日志备份统计对象 */
declare interface LogBackupStatisticsModel {
  /** 平均每个日志备份大小,单位Byte */
  AverageSizePerBackup?: number | null;
  /** 平均每天日志备份大小,单位Byte */
  AverageSizePerDay?: number | null;
  /** 日志备份个数 */
  TotalCount?: number | null;
  /** 日志备份大小，单位Byte */
  TotalSize?: number | null;
}

/** 维护窗口配置 */
declare interface MaintenanceWindowInfo {
  /**  */
  StartTime?: number;
  /**  */
  Duration?: number;
  /**  */
  WeekDays?: string[];
}

/** 节点信息类型 */
declare interface NodeInfo {
  /** 节点IP信息 */
  IP?: string | null;
  /** 节点类型，如sqlengine，tdstore，mc */
  Type?: string | null;
  /** 节点唯一标识 */
  NodeId?: string | null;
  /** 节点端口信息 */
  Port?: number | null;
  /** 节点所属可用区 */
  Zone?: string | null;
  /** 节点所属机器ip */
  Host?: string | null;
  /** 节点日志服务信息 */
  BinlogInfo?: BinlogInfo[];
  /** 节点cpu个数 */
  Cpu?: number;
  /** 节点mem大小 */
  Mem?: number;
  /** 节点磁盘大小 */
  DataDisk?: number;
}

/** 参数约束 */
declare interface ParamConstraint {
  /** 约束类型,如枚举enum，区间section */
  Type: string;
  /** 约束类型为enum时的可选值列表 */
  Enum: string | null;
  /** 约束类型为section时的范围 */
  Range: ConstraintRange | null;
  /** 约束类型为string时的可选值列表 */
  String: string | null;
}

/** DB参数描述 */
declare interface ParamDesc {
  /** 参数名字 */
  Param: string;
  /** 当前参数值 */
  Value: string;
  /** 设置过的值，参数生效后，该值和value一样。 */
  SetValue: string | null;
  /** 系统默认值 */
  Default: string;
  /** 参数限制 */
  Constraint: ParamConstraint | null;
  /** 是否有设置过值，false:没有设置过值，true:有设置过值。 */
  HaveSetValue: boolean;
  /** true:需要重启 */
  NeedRestart: boolean;
  /** 参数描述 */
  Description: string | null;
}

/** tag参数 */
declare interface ResourceTag {
  /** 标签键key */
  TagKey?: string;
  /** 标签值value */
  TagValue?: string;
}

/** 安全组详情 */
declare interface SecurityGroup {
  /** 项目ID */
  ProjectId?: number;
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss */
  CreateTime?: string;
  /** 安全组ID */
  SecurityGroupId?: string;
  /** 安全组名称 */
  SecurityGroupName?: string;
  /** 安全组备注 */
  SecurityGroupRemark?: string;
  /** 入站规则 */
  Inbound?: SecurityGroupBound[];
  /** 出站规则 */
  Outbound?: SecurityGroupBound[];
}

/** 安全出入口规则 */
declare interface SecurityGroupBound {
  /** 来源 IP 或 IP 段，例如192.168.0.0/16 */
  CidrIp?: string;
  /** 策略，ACCEPT 或者 DROP */
  Action?: string;
  /** 端口 */
  PortRange?: string;
  /** 网络协议，支持 UDP、TCP 等 */
  IpProtocol?: string;
}

/** serverless实例的ccu规格 */
declare interface ServerlessCcu {
  /** ccu最小值 */
  MinCcu?: number;
  /** ccu最大值范围 */
  MaxCcu?: number[];
}

/** 存储节点规格 */
declare interface StorageNodeSpec {
  /** 规格码 */
  SpecCode?: string | null;
  /** 存储节点CPU核数 */
  StorageNodeCpu?: number;
  /** 存储节点内存大小 */
  StorageNodeMem?: number;
  /** 存储节点最大数量 */
  StorageNodeMaxNum?: number;
  /** 存储节点磁盘大小上限 */
  StorageNodeMaxDisk?: number;
  /** 存储节点最小数量 */
  StorageNodeMinNum?: number;
  /** 存储节点磁盘大小下限 */
  StorageNodeMinDisk?: number;
  /** 磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘 */
  StorageType?: string | null;
  /** 存储节点默认磁盘大小，用于前端展示 */
  StorageNodeDefaultDisk?: number | null;
  /** 规格支持计费模式列表 */
  InstanceMode?: string[];
  /** 磁盘类型CLOUD_DISK：云盘LOCAL_DISK：本地盘 */
  DiskTypeCategory?: string;
}

/** 表级别权限 */
declare interface TablePrivileges {
  /** DATABASE名 */
  Database: string;
  /** 表名 */
  Table: string;
  /** 权限列表 */
  Privileges: string[];
}

/** 数据库账号信息 */
declare interface User {
  /** 用户名 */
  UserName: string;
  /** 主机 */
  Host: string;
}

/** 用户信息类型 */
declare interface UserInfo {
  /** 用户名 */
  UserName?: string;
  /** 用户描述 */
  Description?: string | null;
  /** 主机IP，IP段以%结尾，表示允许该IP段的所有IP */
  Host?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

declare interface CancelIsolateDBInstancesRequest {
  /** 需要隔离的实例ID列表 */
  InstanceIds: string[];
}

declare interface CancelIsolateDBInstancesResponse {
  /** 解除隔离成功实例Id列表 */
  SuccessInstanceIds: string[];
  /** 解除隔离失败实例Id列表 */
  FailedInstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloneInstanceRequest {
  /** 创建实例区域 */
  Zone: string;
  /** 字符型vpcid */
  VpcId: string;
  /** 字符型subnetid */
  SubnetId: string;
  /** 购买规格 */
  SpecCode: string;
  /** 存储节点磁盘容量，单位GB */
  Disk: number;
  /** 存储节点数量 */
  StorageNodeNum: number;
  /** 源实例id */
  InstanceId: string;
  /** 实例名称，要求长度1-60，允许包含中文、英文大小写、数字、-、_ */
  InstanceName?: string;
  /** 标签键值对数组 */
  ResourceTags?: ResourceTag[];
  /** 备份回档名称 */
  BackupName?: string;
  /** 存储节点CPU核数 */
  StorageNodeCpu?: number;
  /** 存储节点内存大小 */
  StorageNodeMem?: number;
  /** 创建版本 */
  CreateVersion?: string;
  /** 创建端口号 */
  Vport?: number;
  /** 恢复时间点 */
  RecoverTime?: string;
  /** 实例架构类型，separate:分离架构；hybrid:对等架构 */
  InstanceType?: string;
  /** 磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘 */
  StorageType?: string;
  /** 多可用区列表，Zones[0]表示主可用区 */
  Zones?: string[];
  /** 全能型副本数 */
  FullReplications?: number;
  /** 实例模式，normal：标准型；enhanced:加强型 */
  InstanceMode?: string;
  /** 安全组id列表 */
  SecurityGroupIds?: string[];
}

declare interface CreateCloneInstanceResponse {
  /** 克隆实例ID */
  InstanceId?: string | null;
  /** 任务ID */
  FlowId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstancesRequest {
  /** 创建实例区域 */
  Zone: string;
  /** 字符型vpcid */
  VpcId: string;
  /** 字符型subnetid */
  SubnetId: string;
  /** 购买规格 */
  SpecCode: string;
  /** 存储节点磁盘容量，单位GB */
  Disk: number;
  /** 存储节点数量 */
  StorageNodeNum: number;
  /** 存储节点副本数量，最大为5，要求为奇数 */
  Replications: number;
  /** 创建实例个数，上限为10 */
  InstanceCount: number;
  /** 全能型副本数量 */
  FullReplications?: number;
  /** 创建实例版本，默认使用当前最新版本 */
  CreateVersion?: string;
  /** 实例名称，要求长度1-60，允许包含中文、英文大小写、数字、-、_ */
  InstanceName?: string;
  /** 标签键值对数组 */
  ResourceTags?: ResourceTag[];
  /** 初始化实例参数。比如：character_set_server（字符集，默认为utf8），lower_case_table_names（表名大小写敏感，0 - 敏感；1-不敏感，默认为0） */
  InitParams?: InstanceParam[];
  /** 时间单位，m：月 */
  TimeUnit?: string;
  /** 商品的时间大小 */
  TimeSpan?: number;
  /** 存储节点CPU核数 */
  StorageNodeCpu?: number;
  /** 存储节点内存大小 */
  StorageNodeMem?: number;
  /** 付费模式，0表示按需计费/后付费，1表示预付费 */
  PayMode?: string;
  /** 管控节点数量 */
  MCNum?: number;
  /** 自定义端口 */
  Vport?: number;
  /** 多AZ可用区列表 */
  Zones?: string[];
  /** 是否使用优惠卷 */
  AutoVoucher?: boolean;
  /** 优惠卷列表 */
  VoucherIds?: string[];
  /** 实例架构类型，separate:分离架构；hybrid:对等架构 */
  InstanceType?: string;
  /** 磁盘类型,CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘 */
  StorageType?: string;
  /** AZ模式，1:单AZ，2:多AZ非主AZ，3:多AZ主AZ */
  AZMode?: number;
  /** 实例模式 */
  InstanceMode?: string;
  /** 参数模板id */
  TemplateId?: string;
  /** 兼容模式，enum:MySQL,HBase */
  SQLMode?: string;
  /** svls实例的ccu变配配置 */
  AutoScaleConfig?: AutoScalingConfig;
  /** 绑定安全组列表 */
  SecurityGroupIds?: string[];
  /** root用户名,当前版本默认为dbaadmin，传值也会重置为dbaadmin */
  UserName?: string;
  /** dbaadmin密码 */
  Password?: string;
  /** 是否开启透明加密，0：不开启，1：开启 */
  EncryptionEnable?: number;
}

declare interface CreateDBInstancesResponse {
  /** 实例ID */
  InstanceIds?: string[];
  /** 任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBSBackupRequest {
  /** 备份方式：physical、snapshot 这个值和DescribeDBSBackupPolicy接口返回的backupMethod保持一致枚举值：physical： 物理备份snapshot： 快照备份 */
  BackupMethod: string;
  /** 备份类型：暂时只支持full */
  BackupType: string;
  /** 实例ID */
  InstanceId: string;
  /** 备份备注 */
  BackupName?: string;
}

declare interface CreateDBSBackupResponse {
  /** 备份集ID */
  BackupSetId?: number;
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDBSBackupSetsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 备份集列表 ,值来自 DescribeDBSBackupSets 接口返回 */
  BackupSetIdList?: number[];
}

declare interface DeleteDBSBackupSetsResponse {
  /** 本次实际删除的备份数量 */
  Deleted?: number;
  /** 是否全部删除成功 */
  IsSuccess?: boolean;
  /** 需要删除的备份总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceDetailRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDBInstanceDetailResponse {
  /** 实例名称 */
  InstanceName?: string;
  /** 区域 */
  Zone?: string;
  /** 字符型vpcid */
  VpcId?: string;
  /** 字符型subnetid */
  SubnetId?: string;
  /** 创建实例版本 */
  CreateVersion?: string;
  /** 子网IP */
  Vip?: string;
  /** 子网端口 */
  Vport?: number;
  /** 实例状态 */
  Status?: string;
  /** 存储节点磁盘容量，单位GB */
  Disk?: number;
  /** 存储节点数量 */
  StorageNodeNum?: number;
  /** 初始化实例参数 */
  InitParams?: InstanceParam[];
  /** 实例标签信息 */
  ResourceTags?: ResourceTag[];
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 存储节点副本数量 */
  Replications?: number;
  /** 全能型副本数 */
  FullReplications?: number;
  /** 字符集 */
  CharSet?: string;
  /** 节点信息 */
  Node?: NodeInfo[];
  /** 实例所属地域 */
  Region?: string;
  /** 实例规格 */
  SpecCode?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例状态中文描述 */
  StatusDesc?: string;
  /** 存储节点CPU核数 */
  StorageNodeCpu?: number;
  /** 存储节点内存大小 */
  StorageNodeMem?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 付费模式，0后付费，1预付费 */
  PayMode?: string;
  /** 过期时间 */
  ExpireAt?: string | null;
  /** 隔离时间 */
  IsolatedAt?: string | null;
  /** 实例架构类型，separate:分离架构；hybrid:对等架构 */
  InstanceType?: string | null;
  /** 磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘 */
  StorageType?: string | null;
  /** 实例节点可用区列表。Zones[0]表示主可用区 */
  Zones?: string[];
  /** 最大节点磁盘使用量 */
  DiskUsage?: number | null;
  /** binlog是否开启 */
  BinlogStatus?: number;
  /** az模式，1: 单AZ 2: 多AZ非主AZ模式 3: 多AZ主AZ模式 */
  AZMode?: number;
  /** 灾备标志位，1: 无灾备关系；2: 灾备主实例；3: 灾备备实例 */
  StandbyFlag?: number;
  /** cdc节点类型 */
  BinlogType?: string;
  /** 1表示支持，0表示不支持 */
  TimingModifyInstanceFlag?: number;
  /** 列存节点cpu核数 */
  ColumnarNodeCpu?: number;
  /** 列存节点mem内存大小 */
  ColumnarNodeMem?: number;
  /** 列存节点个数 */
  ColumnarNodeNum?: number;
  /** 列存节点磁盘大小 */
  ColumnarNodeDisk?: number;
  /** 列存节点磁盘类型 */
  ColumnarNodeStorageType?: string;
  /** 列存节点规格 */
  ColumnarNodeSpecCode?: string;
  /** 列存 vip */
  ColumnarVip?: string;
  /** 列存 vport */
  ColumnarVport?: number;
  /** 实例是否支持列存 */
  IsSupportColumnar?: boolean;
  /** 实例类型 */
  InstanceCategory?: number;
  /** 兼容模式 */
  SQLMode?: string;
  /** 是否支持修改全能型副本数量 */
  IsSwitchFullReplicationsEnable?: boolean;
  /** 实例类型 */
  InstanceMode?: string;
  /** dumper vip */
  DumperVip?: string;
  /** dumper vport */
  DumperVport?: number;
  /** svls实例的ccu变配范围 */
  AutoScaleConfig?: AutoScalingConfig;
  /** 参数模板id */
  TemplateId?: string;
  /** 参数模板名称 */
  TemplateName?: string;
  /** 实例分析引擎模式枚举值：libra： LibraDB分析引擎实例 */
  AnalysisMode?: string;
  /** 分析引擎实例关系 */
  AnalysisRelationInfos?: AnalysisRelationInfo[];
  /** 分析引擎实例信息Cpu、Memory、Disk复用顶层字段 */
  AnalysisInstanceInfo?: AnalysisInstanceInfo;
  /** 维护窗口配置 */
  MaintenanceWindow?: MaintenanceWindowInfo;
  /** 是否开启透明加密，0：未开启；1：已开启 */
  EncryptionEnable?: number;
  /** 真实使用的kms地域，用于后续调用kms服务 */
  EncryptionKmsRegion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 过滤参数 */
  Filters?: InstanceFilter[];
  /** 最大返回个数，默认为20，上限为100 */
  Limit?: number;
  /** 偏移量，取Limit整数倍 */
  Offset?: number;
  /** 指定查询引擎类型枚举值：libra： 列存引擎 */
  EngineType?: string;
}

declare interface DescribeDBInstancesResponse {
  /** 返回实例列表信息 */
  Instances?: InstanceInfo[];
  /** 满足条件总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBParametersRequest {
  /** 实例 ID，形如：tdsql3-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeDBParametersResponse {
  /** 实例 ID，形如：tdsql3-ow728lmc。 */
  InstanceId: string;
  /** 请求实例的当前参数值 */
  Params: ParamDesc[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSArchiveLogsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 日志记录ID */
  ArchiveLogId?: number;
  /** 结束时间 */
  EndTime?: string;
  /** 备份状态：pending,running,success,failed */
  FilterStatus?: string;
  /** 条数限制 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序字段，枚举：StartTime,EndTime,ExpiredTime,FileSize,BackupDuration */
  OrderBy?: string;
  /** 排序方式：ASC：顺序, DESC：倒序 */
  OrderType?: string;
  /** 开始时间 */
  StartTime?: string;
}

declare interface DescribeDBSArchiveLogsResponse {
  /** 归档日志列表 */
  Items?: ArchiveLogModel[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSAvailableRecoveryTimeRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDBSAvailableRecoveryTimeResponse {
  /** 结束时间 */
  EndTime?: string | null;
  /** 可恢复时间区间 */
  Intervals?: ArchiveLogInterval[] | null;
  /** 开始时间 */
  StartTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSBackupPolicyRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDBSBackupPolicyResponse {
  /** 备份策略列表 */
  Items?: BackupPolicyModelOutPut[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSBackupSetsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例备份集ID */
  BackupSetId?: number;
  /** 结束时间 */
  EndTime?: string;
  /** 过滤条件 */
  FilterBy?: BackupSetsReqFilter;
  /** 单次查询数量[0,200] */
  Limit?: number;
  /** 本次查询偏移[0,INF] */
  Offset?: number;
  /** StartTime,EndTime,ExpiredTime,BackupSetId,BackupDuration */
  OrderBy?: string;
  /** ASC,DESC */
  OrderType?: string;
  /** 开始时间 */
  StartTime?: string;
}

declare interface DescribeDBSBackupSetsResponse {
  /** 备份集列表 */
  Items?: BackupSetModel[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSBackupStatisticsDetailRequest {
  /** 实例ID */
  InstanceId: string;
  /** 结束时间 */
  EndTime?: string;
  /** 开始时间 */
  StartTime?: string;
}

declare interface DescribeDBSBackupStatisticsDetailResponse {
  /** 按备份方式统计 */
  BackupMethodStatistics?: BackupMethodStatisticsOutPut | null;
  /** 备份时间 */
  BackupTime?: string[] | null;
  /** 按备份数据类型统计 */
  BackupTypeStatistics?: BackupTypeStatisticsModel | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSBackupStatisticsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 结束时间 */
  EndTime?: string;
  /** 开始时间 */
  StartTime?: string;
}

declare interface DescribeDBSBackupStatisticsResponse {
  /** 备份方式统计 */
  BackupMethodStatistics?: BackupMethodStatisticsModel | null;
  /** 总备份集统计 */
  BackupStatistics?: BackupStatisticsModel | null;
  /** 数据备份统计 */
  DataBackupStatistics?: DataBackupStatisticsModel | null;
  /** 日志备份统计 */
  LogBackupStatistics?: LogBackupStatisticsModel | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSCloneInstancesRequest {
  /** 源实例ID */
  SourceInstanceId: string;
  /** 引擎类型 */
  DBType?: string;
  /** 结束创建时间 */
  EndCreateTime?: string;
  /** 克隆类型: PITR 时间点 BackupSet 备份集 */
  FilterCloneType?: string;
  /** 查询数量[0,200] */
  Limit?: number;
  /** 查询偏移量[0,INF] */
  Offset?: number;
  /** 排序字段: CloneTime,CreateTime */
  OrderBy?: string;
  /** 排序类型:ASC,DESC */
  OrderType?: string;
  /** 开始创建时间 */
  StartCreateTime?: string;
}

declare interface DescribeDBSCloneInstancesResponse {
  /** 克隆列表 */
  Items?: CloneInstanceModel[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 实例ID。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups?: SecurityGroup[];
  /** 实例VIP */
  VIP?: string | null;
  /** 实例端口 */
  VPort?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseObjectsRequest {
  /** 实例 ID，形如：tdsql3-42f40429. */
  InstanceId: string;
  /** 数据库名称，通过 DescribeDatabases 接口获取。 */
  DbName: string;
  /** 分页索引 */
  Offset?: number;
  /** 每页数量 */
  Limit?: number;
  /** 数据表名称匹配表达式 */
  TableRegexp?: string;
}

declare interface DescribeDatabaseObjectsResponse {
  /** 透传入参。 */
  InstanceId?: string;
  /** 数据库名称。 */
  DbName?: string;
  /** 表列表。 */
  Tables?: DatabaseTable[] | null;
  /** 视图列表。 */
  Views?: DatabaseView[] | null;
  /** 存储过程列表。 */
  Procs?: DatabaseProcedure[] | null;
  /** 函数列表。 */
  Funcs?: DatabaseFunction[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesRequest {
  /** 实例 ID，形如：tdsql3-ow7t8lmc。 */
  InstanceId: string;
  /** 分页索引 */
  Offset?: number;
  /** 每页数量 */
  Limit?: number;
  /** 数据库名称匹配表达式 */
  DatabaseRegexp?: string;
}

declare interface DescribeDatabasesResponse {
  /** 透传实例ID */
  InstanceId?: string;
  /** 该实例上的数据库列表。 */
  Databases?: Database[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowRequest {
}

declare interface DescribeFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSaleInfoRequest {
  /** 灾备主实例地域 */
  SrcRegion?: string;
  /** 实例id传入此参数表示返回这个实例所在的地域可用区的售卖信息 */
  InstanceId?: string;
  /** 指定支持某种类型实例的 sale 信息枚举值：serverless： 返回支持 serverless 型实例的所有 region默认值：无当前仅支持指定 serverless，传入其他信息或者不传则默认返回所有售卖地域信息 */
  InstanceType?: string;
}

declare interface DescribeSaleInfoResponse {
  /** 返回可售卖region信息 */
  RegionList?: DescribeSaleRegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpecsRequest {
  /** 全能型副本数，当前支持范围：1-3，默认为3 */
  FullReplications?: number;
  /** 独享实例 */
  IsExclusiveInstance?: number;
}

declare interface DescribeSpecsResponse {
  /** 对等节点售卖规格列表 */
  HybridNodeSpecs?: StorageNodeSpec[] | null;
  /** svls节点售卖规格列表 */
  ServerlessCcuSpec?: ServerlessCcu[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserPrivilegesRequest {
  /** 实例 ID，形如：tdsql3-5baee8df。 */
  InstanceId: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 登录用户名。 */
  UserName: string;
  /** 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数 */
  DbName: string;
  /** 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空 */
  Object?: string;
  /** 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示查询该数据库权限（即db.\*），此时忽略 Object 参数 */
  ObjectType?: string;
  /** 当 Type=table 时，ColName 为 \* 表示查询表的权限，如果为具体字段名，表示查询对应字段的权限 */
  ColName?: string;
}

declare interface DescribeUserPrivilegesResponse {
  /** 权限列表 */
  Privileges: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsersRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeUsersResponse {
  /** 用户列表 */
  Users?: UserInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyInstancesRequest {
  /** 需要隔离的实例ID列表 */
  InstanceIds: string[];
}

declare interface DestroyInstancesResponse {
  /** 解除隔离成功实例Id列表 */
  SuccessInstanceIds: string[];
  /** 解除隔离失败实例Id列表 */
  FailedInstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExpandInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 存储节点扩容至多少个节点，如果没有变化，传当前节点数 */
  StorageNodeNum: number;
  /** 可用区列表 */
  Zones?: string[];
  /** az模式，1: 单AZ 2: 多AZ非主AZ模式 3: 多AZ主AZ模式 */
  AZMode?: number;
  /** AZMode传3时，表示主AZ */
  PrimaryAZ?: string;
  /** 全能型副本数，取值范围包括1-3 */
  FullReplications?: number;
}

declare interface ExpandInstanceResponse {
  /** 异步任务ID，根据此ID可以调用查询任务接口获取任务状态 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDBInstanceRequest {
  /** 需要隔离的实例ID列表 */
  InstanceIds: string[];
}

declare interface IsolateDBInstanceResponse {
  /** 隔离成功实例Id列表 */
  SuccessInstanceIds?: string[];
  /** 隔离失败实例Id列表 */
  FailedInstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoRenewFlagRequest {
  /** 需要修改的实例列表 */
  InstanceIds: string[];
  /** 1表示开启自动续费，0为关闭自动续费 */
  AutoRenewFlag: number;
}

declare interface ModifyAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIds: string[];
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBParametersRequest {
  /** 实例 ID，形如：tdsql3-ow728lmc。 */
  InstanceId: string;
  /** 参数列表，每一个元素是Param和Value的组合 */
  Params: DBParamValue[];
}

declare interface ModifyDBParametersResponse {
  /** 123 */
  TaskID: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBSBackupPolicyRequest {
  /** 备份策略 */
  BackupPolicy: BackupPolicyModelInput;
  /** 实例ID */
  InstanceId: string;
}

declare interface ModifyDBSBackupPolicyResponse {
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 消息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBSBackupSetCommentRequest {
  /** 实例ID */
  InstanceId: string;
  /** 备份集ID,值来自 DescribeDBSBackupSets 接口返回 */
  BackupSetId: number;
  /** 备份备注 */
  NewBackupName: string;
}

declare interface ModifyDBSBackupSetCommentResponse {
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 修改信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceNameRequest {
  /** 需要修改的实例id */
  InstanceId: string;
  /** 修改的实例名称，要求长度1-60，允许包含中文、英文大小写、数字、-、_ */
  InstanceName: string;
}

declare interface ModifyInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserPrivilegesRequest {
  /** 实例 ID，形如：tdsql3-5baee8df。 */
  InstanceId: string;
  /** 登录用户名和主机信息 */
  Users: User[];
  /** 全局权限 */
  GlobalPrivileges?: string[];
  /** Database级别权限 */
  DatabasePrivileges?: DatabasePrivileges[];
  /** Table级别权限 */
  TablePrivileges?: TablePrivileges[];
}

declare interface ModifyUserPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDBInstancesRequest {
  /** 需要重启的实例ID的数组 */
  InstanceIds: string[];
  /** 重启时间，不传表示立即重启 */
  RestartTime?: string;
}

declare interface RestartDBInstancesResponse {
  /** 异步任务id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例规格码 */
  SpecCode: string;
  /** 存储节点磁盘容量，单位GB */
  Disk: number;
  /** 存储节点CPU核数 */
  StorageNodeCpu?: number;
  /** 存储节点内存大小 */
  StorageNodeMem?: number;
  /** 磁盘类型，需要修改磁盘类型时传 */
  StorageType?: string;
}

declare interface UpgradeInstanceResponse {
  /** 任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdmysql TDSQL} */
declare interface Tdmysql {
  (): Versions;
  /** 批量解除隔离实例 {@link CancelIsolateDBInstancesRequest} {@link CancelIsolateDBInstancesResponse} */
  CancelIsolateDBInstances(data: CancelIsolateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CancelIsolateDBInstancesResponse>;
  /** 创建克隆实例 {@link CreateCloneInstanceRequest} {@link CreateCloneInstanceResponse} */
  CreateCloneInstance(data: CreateCloneInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloneInstanceResponse>;
  /** 批量创建实例 {@link CreateDBInstancesRequest} {@link CreateDBInstancesResponse} */
  CreateDBInstances(data: CreateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstancesResponse>;
  /** 创建实例手工备份 {@link CreateDBSBackupRequest} {@link CreateDBSBackupResponse} */
  CreateDBSBackup(data: CreateDBSBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBSBackupResponse>;
  /** 删除实例手工备份 {@link DeleteDBSBackupSetsRequest} {@link DeleteDBSBackupSetsResponse} */
  DeleteDBSBackupSets(data: DeleteDBSBackupSetsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDBSBackupSetsResponse>;
  /** 查询实例详情 {@link DescribeDBInstanceDetailRequest} {@link DescribeDBInstanceDetailResponse} */
  DescribeDBInstanceDetail(data: DescribeDBInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceDetailResponse>;
  /** 查询实例列表 {@link DescribeDBInstancesRequest} {@link DescribeDBInstancesResponse} */
  DescribeDBInstances(data?: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** 查看实例参数 {@link DescribeDBParametersRequest} {@link DescribeDBParametersResponse} */
  DescribeDBParameters(data: DescribeDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBParametersResponse>;
  /** 查询实例归档日志列表 {@link DescribeDBSArchiveLogsRequest} {@link DescribeDBSArchiveLogsResponse} */
  DescribeDBSArchiveLogs(data: DescribeDBSArchiveLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSArchiveLogsResponse>;
  /** 获取可恢复时间 {@link DescribeDBSAvailableRecoveryTimeRequest} {@link DescribeDBSAvailableRecoveryTimeResponse} */
  DescribeDBSAvailableRecoveryTime(data: DescribeDBSAvailableRecoveryTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSAvailableRecoveryTimeResponse>;
  /** 查询实例备份策略 {@link DescribeDBSBackupPolicyRequest} {@link DescribeDBSBackupPolicyResponse} */
  DescribeDBSBackupPolicy(data: DescribeDBSBackupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSBackupPolicyResponse>;
  /** 查询实例备份集信息 {@link DescribeDBSBackupSetsRequest} {@link DescribeDBSBackupSetsResponse} */
  DescribeDBSBackupSets(data: DescribeDBSBackupSetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSBackupSetsResponse>;
  /** 查询实例备份空间概览 {@link DescribeDBSBackupStatisticsRequest} {@link DescribeDBSBackupStatisticsResponse} */
  DescribeDBSBackupStatistics(data: DescribeDBSBackupStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSBackupStatisticsResponse>;
  /** 查询备份集统计详情 {@link DescribeDBSBackupStatisticsDetailRequest} {@link DescribeDBSBackupStatisticsDetailResponse} */
  DescribeDBSBackupStatisticsDetail(data: DescribeDBSBackupStatisticsDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSBackupStatisticsDetailResponse>;
  /** 查询实例克隆列表 {@link DescribeDBSCloneInstancesRequest} {@link DescribeDBSCloneInstancesResponse} */
  DescribeDBSCloneInstances(data: DescribeDBSCloneInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSCloneInstancesResponse>;
  /** 查询实例安全组信息 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询数据库对象列表 {@link DescribeDatabaseObjectsRequest} {@link DescribeDatabaseObjectsResponse} */
  DescribeDatabaseObjects(data: DescribeDatabaseObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseObjectsResponse>;
  /** 查询数据库列表 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** 查询流程状态 {@link DescribeFlowRequest} {@link DescribeFlowResponse} */
  DescribeFlow(data?: DescribeFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowResponse>;
  /** 查询可用售卖地域 {@link DescribeSaleInfoRequest} {@link DescribeSaleInfoResponse} */
  DescribeSaleInfo(data?: DescribeSaleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSaleInfoResponse>;
  /** 查询售卖组件规格 {@link DescribeSpecsRequest} {@link DescribeSpecsResponse} */
  DescribeSpecs(data?: DescribeSpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecsResponse>;
  /** 查询用户权限 {@link DescribeUserPrivilegesRequest} {@link DescribeUserPrivilegesResponse} */
  DescribeUserPrivileges(data: DescribeUserPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserPrivilegesResponse>;
  /** 查询用户列表 {@link DescribeUsersRequest} {@link DescribeUsersResponse} */
  DescribeUsers(data: DescribeUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersResponse>;
  /** 批量销毁实例 {@link DestroyInstancesRequest} {@link DestroyInstancesResponse} */
  DestroyInstances(data: DestroyInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstancesResponse>;
  /** 横向扩容实例 {@link ExpandInstanceRequest} {@link ExpandInstanceResponse} */
  ExpandInstance(data: ExpandInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ExpandInstanceResponse>;
  /** 批量隔离实例 {@link IsolateDBInstanceRequest} {@link IsolateDBInstanceResponse} */
  IsolateDBInstance(data: IsolateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBInstanceResponse>;
  /** 修改自动续费标志 {@link ModifyAutoRenewFlagRequest} {@link ModifyAutoRenewFlagResponse} */
  ModifyAutoRenewFlag(data: ModifyAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoRenewFlagResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改实例参数 {@link ModifyDBParametersRequest} {@link ModifyDBParametersResponse} */
  ModifyDBParameters(data: ModifyDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBParametersResponse>;
  /** 修改实例备份策略 {@link ModifyDBSBackupPolicyRequest} {@link ModifyDBSBackupPolicyResponse} */
  ModifyDBSBackupPolicy(data: ModifyDBSBackupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBSBackupPolicyResponse>;
  /** 修改实例备份备注 {@link ModifyDBSBackupSetCommentRequest} {@link ModifyDBSBackupSetCommentResponse} */
  ModifyDBSBackupSetComment(data: ModifyDBSBackupSetCommentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBSBackupSetCommentResponse>;
  /** 修改实例名称 {@link ModifyInstanceNameRequest} {@link ModifyInstanceNameResponse} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
  /** 修改用户权限 {@link ModifyUserPrivilegesRequest} {@link ModifyUserPrivilegesResponse} */
  ModifyUserPrivileges(data: ModifyUserPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserPrivilegesResponse>;
  /** 重启实例 {@link RestartDBInstancesRequest} {@link RestartDBInstancesResponse} */
  RestartDBInstances(data: RestartDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDBInstancesResponse>;
  /** 纵向扩容实例 {@link UpgradeInstanceRequest} {@link UpgradeInstanceResponse} */
  UpgradeInstance(data: UpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceResponse>;
}

export declare type Versions = ["2021-11-22"];

export default Tdmysql;
