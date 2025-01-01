/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号创建信息 */
declare interface AccountCreateInfo {
  /** 实例用户名 */
  UserName: string;
  /** 实例密码 */
  Password?: string;
  /** DB权限列表 */
  DBPrivileges?: DBPrivilege[];
  /** 账号备注信息 */
  Remark?: string;
  /** 是否为管理员账户，当值为true 等价于单节点AccountType=L0，双节点AccountType=L1，当值为false，等价于AccountType=L3 */
  IsAdmin?: boolean;
  /** win-windows鉴权,sql-sqlserver鉴权，不填默认值为sql-sqlserver鉴权 */
  Authentication?: string;
  /** 账号类型，IsAdmin的扩展字段。 L0-超级权限(基础版独有),L1-高级权限,L2-特殊权限,L3-普通权限，默认L3 */
  AccountType?: string;
  /** 是否开启CAM验证 */
  IsCam?: boolean;
  /** 加密密钥版本号，0表示不使用加密 */
  EncryptedVersion?: number;
}

/** 账号信息详情 */
declare interface AccountDetail {
  /** 账户名 */
  Name?: string;
  /** 账户备注 */
  Remark?: string;
  /** 账户创建时间 */
  CreateTime?: string;
  /** 账户状态，1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中 */
  Status?: number;
  /** 账户更新时间 */
  UpdateTime?: string;
  /** 密码更新时间 */
  PassTime?: string;
  /** 账户内部状态，正常为enable */
  InternalStatus?: string;
  /** 该账户对相关db的读写权限信息 */
  Dbs?: DBPrivilege[];
  /** 是否为管理员账户 */
  IsAdmin?: boolean;
  /** 是否为cam托管账户 */
  IsCam?: boolean;
  /** win-windows鉴权,sql-sqlserver鉴权 */
  Authentication?: string;
  /** win-windows鉴权账户需要host */
  Host?: string;
  /** 账号类型。L0-超级权限(基础版独有),L1-高级权限,L2-特殊权限,L3-普通权限 */
  AccountType?: string;
}

/** 实例账号密码信息 */
declare interface AccountPassword {
  /** 用户名 */
  UserName: string;
  /** 密码 */
  Password: string;
  /** 加密密钥版本号，0表示不使用加密 */
  EncryptedVersion?: number;
}

/** 数据库账号权限信息。创建数据库时设置 */
declare interface AccountPrivilege {
  /** 数据库用户名 */
  UserName: string;
  /** 数据库权限。ReadWrite表示可读写，ReadOnly表示只读,Delete表示删除DB对该账户的权限，DBOwner所有者 */
  Privilege: string;
  /** 账户名称，L0-超级权限(基础版独有),L1-高级权限,L2-特殊权限,L3-普通权限 */
  AccountType?: string;
}

/** 数据库账号权限变更信息 */
declare interface AccountPrivilegeModifyInfo {
  /** 数据库用户名 */
  UserName: string;
  /** 账号权限变更信息。参数DBPrivileges和AccAllDB只能二选一 */
  DBPrivileges: DBPrivilegeModifyInfo[];
  /** 表示是否为管理员账户，当值为true，表示是 管理员。若实例 是 单节点，则管理员所在的 账号类型为超级权限账号 ，即AccountType=L0；若实例 是 双节点，则管理员所在的 账号类型为高级权限账号，即AccountType=L1；当值为false，表示 不是管理员，则账号类型为普通账号，即AccountType=L3 */
  IsAdmin?: boolean;
  /** 账号类型，IsAdmin字段的扩展字段。 L0-超级权限(基础版独有),L1-高级权限,L2-特殊权限,L3-普通权限，默认L3 */
  AccountType?: string;
  /** 全量修改指定账号下的所有DB权限，只支持特殊权限账号和普通权限账号。参数DBPrivileges和AccAllDB只能二选一 */
  AccAllDB?: SelectAllDB;
}

/** 账户备注信息 */
declare interface AccountRemark {
  /** 账户名 */
  UserName?: string;
  /** 对应账户新的备注信息 */
  Remark?: string;
}

/** 备份文件详细信息 */
declare interface Backup {
  /** 文件名，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取文件名 */
  FileName?: string;
  /** 文件大小，单位 KB，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取文件大小 */
  Size?: number;
  /** 备份开始时间 */
  StartTime?: string;
  /** 备份结束时间 */
  EndTime?: string;
  /** 内网下载地址，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取下载地址 */
  InternalAddr?: string;
  /** 外网下载地址，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取下载地址 */
  ExternalAddr?: string;
  /** 备份文件唯一标识，RestoreInstance接口会用到该字段，对于单库备份文件不返回此值；单库备份文件通过DescribeBackupFiles接口获取可回档的ID */
  Id?: number;
  /** 备份文件状态（0-创建中；1-成功；2-失败） */
  Status?: number;
  /** 多库备份时的DB列表 */
  DBs?: string[];
  /** 备份策略（0-实例备份；1-多库备份） */
  Strategy?: number;
  /** 备份存储策略 0-跟随自定义备份保留策略 1-跟随实例生命周期直到实例下线 */
  StorageStrategy?: number;
  /** 备份方式，0-定时备份；1-手动临时备份；2-定期备份 */
  BackupWay?: number;
  /** 备份任务名称，可自定义 */
  BackupName?: string;
  /** 聚合Id，对于打包备份文件不返回此值。通过此值调用DescribeBackupFiles接口，获取单库备份文件的详细信息 */
  GroupId?: string;
  /** 备份文件形式（pkg-打包备份文件，single-单库备份文件） */
  BackupFormat?: string;
  /** 实例当前地域Code */
  Region?: string;
  /** 跨地域备份的目的地域下载链接 */
  CrossBackupAddr?: CrossBackupAddr[];
  /** 跨地域备份的目标地域和备份状态 */
  CrossBackupStatus?: CrossRegionStatus[];
}

/** 在非打包上传备份模式下，每个库对应一个备份文件 */
declare interface BackupFile {
  /** 备份文件唯一标识 */
  Id: number;
  /** 备份文件名称 */
  FileName: string;
  /** 文件大小(K) */
  Size: number;
  /** 备份文件的库的名称 */
  DBs: string[];
  /** 下载地址 */
  DownloadLink: string;
  /** 当前实例地域码 */
  Region: string;
  /** 备份的跨地域region和所对应的下载地址 */
  CrossBackupAddr: CrossBackupAddr[];
}

/** 商业智能服务文件类型 */
declare interface BusinessIntelligenceFile {
  /** 文件名称 */
  FileName: string;
  /** 文件类型 */
  FileType: string;
  /** 文件的COS_URL */
  FileURL: string;
  /** 文件在服务器上的路径 */
  FilePath: string;
  /** 文件大小，单位时Byte */
  FileSize: number;
  /** 文件md5值 */
  FileMd5: string;
  /** 部署文件状态 1-初始化待部署 2-部署中 3-部署成功 4-部署失败 */
  Status: number;
  /** 备注信息 */
  Remark: string;
  /** 文件创建时间 */
  CreateTime: string;
  /** 文件部署开始时间 */
  StartTime: string;
  /** 文件部署结束时间 */
  EndTime: string;
  /** 报错信息返回 */
  Message: string;
  /** 商业智能实例ID */
  InstanceId: string;
  /** 动作相关信息 */
  Action: FileAction;
}

/** 实例变配检查条目 */
declare interface CheckItem {
  /** 检查项目名称，CK_CPU-变配后CPU风险检查；CK_MASTER_STORAGE-只读副本变配下，只读副本磁盘空间不小于主实例空间检查；CK_MEMORY-变配后内存风险检查；CK_STORAGE-变配后磁盘空间风险检查；CK_UPGRATE-变配是否需要迁移检查； */
  CheckName?: string;
  /** 检查项目返回值，CK_CPU-当前CPU近7天最大的使用率(%) ；CK_MASTER_STORAGE-主实例的磁盘空间(GB)；CK_MEMORY-当前内存近7天最大的使用值（GB)；CK_STORAGE-当前磁盘近7天最大的使用值（GB)；CK_UPGRATE- 当前变配检查是否需要迁移，MIGRATE需要迁移变配，LOCAL本地变配； */
  CurrentValue?: string;
  /** 检查条目是否通过 0-不通过，不能变配； 1-通过，可以变配 */
  Passed?: number;
  /** 本条目变配是否对实例有影响 0-没有影响 1-有影响 */
  IsAffect?: number;
  /** 有影响或者不通过的情况下的必要描述 */
  Msg?: string;
  /** 描述对应的代码 */
  MsgCode?: number;
}

/** 查询已经上传的备份文件大小。 */
declare interface CosUploadBackupFile {
  /** 备份名称 */
  FileName?: string;
  /** 备份大小 */
  Size?: number;
}

/** 跨地域备份下载地址集合 */
declare interface CrossBackupAddr {
  /** 跨地域备份目标地域 */
  CrossRegion: string;
  /** 跨地域备份内网下载地址 */
  CrossInternalAddr: string;
  /** 跨地域备份外网下载地址 */
  CrossExternalAddr: string;
}

/** 跨地域备份的目标地域和备份状态 */
declare interface CrossRegionStatus {
  /** 跨地域备份目标地域 */
  CrossRegion: string;
  /** 备份跨地域的同步状态 0-创建中；1-成功；2-失败；4-同步中 */
  CrossStatus: number;
}

/** 跨地域备份实时统计列表项 */
declare interface CrossSummaryDetailRes {
  /** 实例状态 */
  Status?: number;
  /** 实例所属地域 */
  Region?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  Name?: string;
  /** 跨地域备份状态 enable-开启，disable-关闭 */
  CrossBackupEnabled?: string;
  /** 跨地域备份目标地域 */
  CrossRegions?: string[];
  /** 最新备份开始时间 */
  LastBackupStartTime?: string;
  /** 跨地域备份保留天数 */
  CrossBackupSaveDays?: number;
  /** 跨地域数据备份总空间 */
  DataBackupSpace?: number;
  /** 跨地域数据备份文件总个数 */
  DataBackupCount?: number;
  /** 跨地域日志备份总空间 */
  LogBackupSpace?: number;
  /** 跨地域日志备份文件总个数 */
  LogBackupCount?: number;
  /** 跨地域备份总空间 */
  ActualUsedSpace?: number;
  /** 跨地域备份总个数 */
  ActualUsedCount?: number;
}

/** 数据库创建信息 */
declare interface DBCreateInfo {
  /** 数据库名 */
  DBName: string;
  /** 字符集。可通过接口DescribeDBCharsets查到支持的字符集，不填默认为Chinese_PRC_CI_AS。 */
  Charset?: string;
  /** 数据库账号权限信息 */
  Accounts?: AccountPrivilege[];
  /** 备注 */
  Remark?: string;
}

/** 数据库信息 */
declare interface DBDetail {
  /** 数据库名称 */
  Name?: string;
  /** 字符集 */
  Charset?: string;
  /** 备注 */
  Remark?: string;
  /** 数据库创建时间 */
  CreateTime?: string;
  /** 数据库状态。1--创建中， 2--运行中， 3--修改中，-1--删除中 */
  Status?: number;
  /** 数据库账号权限信息 */
  Accounts?: AccountPrivilege[];
  /** 内部状态。ONLINE表示运行中 */
  InternalStatus?: string;
  /** 是否已开启TDE加密，enable-已加密，disable-未加密 */
  Encryption?: string;
}

/** 实例详细信息 */
declare interface DBInstance {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  Name?: string;
  /** 实例所在项目ID */
  ProjectId?: number;
  /** 实例所在地域ID */
  RegionId?: number;
  /** 实例所在可用区ID */
  ZoneId?: number;
  /** 实例所在私有网络ID，基础网络时为 0 */
  VpcId?: number;
  /** 实例所在私有网络子网ID，基础网络时为 0 */
  SubnetId?: number;
  /** 实例状态。取值范围： 1：申请中 2：运行中 3：受限运行中 (主备切换中) 4：已隔离 5：回收中 6：已回收 7：任务执行中 (实例做备份、回档等操作) 8：已下线 9：实例扩容中 10：实例迁移中 11：只读 12：重启中 13：实例修改中且待切换 14：订阅发布创建中 15：订阅发布修改中 16：实例修改中且切换中 17：创建RO副本中 */
  Status?: number;
  /** 实例访问IP */
  Vip?: string;
  /** 实例访问端口 */
  Vport?: number;
  /** 实例创建时间 */
  CreateTime?: string;
  /** 实例更新时间 */
  UpdateTime?: string;
  /** 实例计费开始时间 */
  StartTime?: string;
  /** 实例计费结束时间 */
  EndTime?: string;
  /** 实例隔离时间 */
  IsolateTime?: string;
  /** 实例内存大小，单位G */
  Memory?: number;
  /** 实例已经使用存储空间大小，单位G */
  UsedStorage?: number;
  /** 实例存储空间大小，单位G */
  Storage?: number;
  /** 实例版本 */
  VersionName?: string;
  /** 实例续费标记，0-正常续费，1-自动续费，2-到期不续费 */
  RenewFlag?: number;
  /** 实例高可用， 1-双机高可用，2-单机，3-跨可用区，4-集群跨可用区，5-集群，6-多节点集群，7-多节点集群跨可用区，9-自研机房 */
  Model?: number;
  /** 实例所在地域名称，如 ap-guangzhou */
  Region?: string;
  /** 实例所在可用区名称，如 ap-guangzhou-1 */
  Zone?: string;
  /** 备份时间点 */
  BackupTime?: string;
  /** 实例付费模式， 0-按量计费，1-包年包月 */
  PayMode?: number;
  /** 实例唯一UID */
  Uid?: string;
  /** 实例cpu核心数 */
  Cpu?: number;
  /** 实例版本代号 */
  Version?: string;
  /** 实例类型代号："TS85"-物理机，本地SSD硬盘；"Z3"-物理机早期版本，本地SSD硬盘；"CLOUD_BASIC"-虚拟机，普通云硬盘；"CLOUD_PREMIUM"-虚拟机，高性能云硬盘；"CLOUD_SSD"-虚拟机，云SSD硬盘；"CLOUD_HSSD"-虚拟机，增强型SSD云硬盘；"CLOUD_TSSD"-虚拟机，极速型SSD云硬盘；"CLOUD_BSSD"-虚拟机，通用型SSD云硬盘 */
  Type?: string;
  /** 计费ID */
  Pid?: number;
  /** 实例所属VPC的唯一字符串ID，格式如：vpc-xxx，基础网络时为空字符串 */
  UniqVpcId?: string;
  /** 实例所属子网的唯一字符串ID，格式如： subnet-xxx，基础网络时为空字符串 */
  UniqSubnetId?: string;
  /** 实例隔离操作 */
  IsolateOperator?: string;
  /** 发布订阅标识，SUB-订阅实例，PUB-发布实例，空值-没有发布订阅的普通实例 */
  SubFlag?: string;
  /** 只读标识，RO-只读实例，MASTER-有RO实例的主实例，空值-没有只读组的非RO实例 */
  ROFlag?: string;
  /** 容灾类型，MIRROR-镜像，ALWAYSON-AlwaysOn, SINGLE-单例 */
  HAFlag?: string;
  /** 实例绑定的标签列表 */
  ResourceTags?: ResourceTag[] | null;
  /** 备份模式，master_pkg-主节点打包备份(默认) ；master_no_pkg-主节点不打包备份；slave_pkg-从节点打包备份(always on集群有效)；slave_no_pkg-从节点不打包备份(always on集群有效)；只读副本对该值无效。 */
  BackupModel?: string;
  /** 实例备份信息 */
  InstanceNote?: string;
  /** 备份周期 */
  BackupCycle?: number[];
  /** 备份周期类型，[daily、weekly、monthly] */
  BackupCycleType?: string;
  /** 数据(日志)备份保留时间 */
  BackupSaveDays?: number;
  /** 实例类型 HA-高可用，RO-只读实例，SI-基础版，BI-商业智能服务，cvmHA-云盘高可用，cvmRO-云盘只读实例，MultiHA-多节点，cvmMultiHA-云盘多节点 */
  InstanceType?: string;
  /** 跨地域备份目的地域，如果为空，则表示未开启跨地域备份 */
  CrossRegions?: string[];
  /** 跨地域备份状态 enable-开启，disable-关闭 */
  CrossBackupEnabled?: string;
  /** 跨地域备份保留天数，则默认7天 */
  CrossBackupSaveDays?: number;
  /** 外网地址域名 */
  DnsPodDomain?: string;
  /** 外网端口号 */
  TgwWanVPort?: number;
  /** 系统字符集排序规则，默认：Chinese_PRC_CI_AS */
  Collation?: string;
  /** 系统时区，默认：China Standard Time */
  TimeZone?: string;
  /** 是否跨AZ */
  IsDrZone?: boolean;
  /** 双节点实例备可用区信息 */
  SlaveZones?: SlaveZones;
  /** 架构标识，SINGLE-单节点 DOUBLE-双节点 */
  Architecture?: string;
  /** 类型标识，EXCLUSIVE-独享型，SHARED-共享型 */
  Style?: string;
  /** 多节点实例备可用区信息 */
  MultiSlaveZones?: SlaveZones[];
}

/** 账号的数据库权限信息 */
declare interface DBPrivilege {
  /** 数据库名 */
  DBName: string;
  /** 数据库权限，ReadWrite表示可读写，ReadOnly表示只读，DBOwner所有者 */
  Privilege: string;
}

/** 数据库权限变更信息 */
declare interface DBPrivilegeModifyInfo {
  /** 数据库名 */
  DBName: string;
  /** 权限变更信息。ReadWrite表示可读写，ReadOnly表示只读，Delete表示删除账号对该DB的权限，DBOwner所有者 */
  Privilege: string;
}

/** 数据库备注信息 */
declare interface DBRemark {
  /** 数据库名称 */
  Name: string;
  /** 备注信息 */
  Remark: string;
}

/** 数据库重命名返回参数 */
declare interface DBRenameRes {
  /** 新数据库名称 */
  NewName: string;
  /** 老数据库名称 */
  OldName: string;
}

/** 开启、关闭TDE数据库加密 */
declare interface DBTDEEncrypt {
  /** 数据库名称 */
  DBName?: string;
  /** enable-开启数据库TDE加密，disable-关闭数据库TDE加密 */
  Encryption?: string;
}

/** 数据库账号权限变更信息 */
declare interface DataBasePrivilegeModifyInfo {
  /** 数据库名称 */
  DataBaseName: string;
  /** 数据库权限变更信息 */
  AccountPrivileges: AccountPrivilege[];
}

/** 该数据结构表示具有发布订阅关系的两个数据库。 */
declare interface DatabaseTuple {
  /** 发布数据库名称 */
  PublishDatabase: string;
  /** 订阅数据库名称 */
  SubscribeDatabase: string;
}

/** 该数据结构表示具有发布订阅关系的两个数据库，以及其之间发布订阅的状态信息。 */
declare interface DatabaseTupleStatus {
  /** 发布数据库名称 */
  PublishDatabase?: string;
  /** 订阅数据库名称 */
  SubscribeDatabase?: string;
  /** 最近一次同步时间 */
  LastSyncTime?: string;
  /** 数据库之间的发布订阅状态 running，success，fail，unknow */
  Status?: string;
}

/** 数据库配置信息 */
declare interface DbNormalDetail {
  /** 是否已订阅 0：否 1：是 */
  IsSubscribed?: string;
  /** 数据库排序规则 */
  CollationName?: string;
  /** 开启CT之后是否自动清理 0：否 1：是 */
  IsAutoCleanupOn?: string;
  /** 是否已启用代理 0：否 1：是 */
  IsBrokerEnabled?: string;
  /** 是否已开启/关闭CDC 0：关闭 1：开启 */
  IsCdcEnabled?: string;
  /** 是否已启用/ 禁用CT 0：禁用 1：启用 */
  IsDbChainingOn?: string;
  /** 是否加密 0：否 1：是 */
  IsEncrypted?: string;
  /** 是否全文启用 0：否 1：是 */
  IsFulltextEnabled?: string;
  /** 是否是镜像 0：否 1：是 */
  IsMirroring?: string;
  /** 是否已发布 0：否 1：是 */
  IsPublished?: string;
  /** 是否开启快照 0：否 1：是 */
  IsReadCommittedSnapshotOn?: string;
  /** 是否可信任 0：否 1：是 */
  IsTrustworthyOn?: string;
  /** 镜像状态 */
  MirroringState?: string;
  /** 数据库名称 */
  Name?: string;
  /** 恢复模式 */
  RecoveryModelDesc?: string;
  /** 保留天数 */
  RetentionPeriod?: string;
  /** 数据库状态 */
  StateDesc?: string;
  /** 用户类型 */
  UserAccessDesc?: string;
  /** 数据库创建时间 */
  CreateTime?: string;
  /** 是否全文启用 0：否 1：是 */
  IsFullTextEnabled?: string;
}

/** 数据库可回档时间范围信息 */
declare interface DbRollbackTimeInfo {
  /** 数据库名称 */
  DBName?: string;
  /** 可回档开始时间 */
  StartTime?: string;
  /** 可回档结束时间 */
  EndTime?: string;
}

/** 订单信息 */
declare interface DealInfo {
  /** 订单名 */
  DealName?: string;
  /** 商品数量 */
  Count?: number;
  /** 关联的流程 ID，可用于查询流程执行状态 */
  FlowId?: number;
  /** 只有创建实例的订单会填充该字段，表示该订单创建的实例的 ID。 */
  InstanceIdSet?: string[];
  /** 所属账号 */
  OwnerUin?: string;
  /** 实例付费类型 */
  InstanceChargeType?: string;
}

/** 订单号对应的资源ID列表 */
declare interface DealInstance {
  /** 实例ID */
  InstanceId?: string[];
  /** 订单号 */
  DealName?: string;
}

/** 备机只读信息 */
declare interface DrReadableInfo {
  /** 备机资源ID */
  DrInstanceId?: string;
  /** 备机可用区 */
  Zone?: string;
  /** 备机状态DR_CREATING-备机创建中DR_RUNNING-备机运行中DR_UNAVAILABLE-备机不可用DR_ISOLATED-备机已隔离DR_RECYCLING-备机回收中DR_RECYCLED-备机已回收DR_JOB_RUNNING-备机执行任务中DR_OFFLINE-备机已下线DR_FAIL_OVER-备机只读故障转移中 */
  SlaveStatus?: string;
  /** 备机可读状态，enable-已开启，disable-已关闭 */
  ReadableStatus?: string;
  /** 备机只读vip */
  Vip?: string;
  /** 备机只读端口 */
  VPort?: number;
  /** 备机所在私有网络ID */
  UniqVpcId?: string;
  /** 备机所在私有网络子网ID */
  UniqSubnetId?: string;
  /** 备机只读权重 */
  RoWeight?: number;
  /** 备机只读模式，BalancedReadOnly-多备一读模式，SingleReadOnly-一备一读模式 */
  ReadMode?: string;
}

/** 备机可用区信息 */
declare interface DrZoneInfo {
  /** 备机资源ID */
  DrInstanceId?: string;
  /** 备机可用区 */
  Zone?: string;
}

/** 设置实例扩展事件阈值 */
declare interface EventConfig {
  /** 事件类型，slow-设置慢SQL阈值，blocked-设置阻塞、死锁阈值 */
  EventType: string | null;
  /** 阈值，单位毫秒。0表示关闭，大于0表示开启 */
  Threshold: number | null;
}

/** 实例扩展事件详情 */
declare interface Events {
  /** ID */
  Id?: number;
  /** 扩展事件文件名称 */
  FileName?: string;
  /** 扩展事件文件大小 */
  Size?: number;
  /** 事件类型，slow-慢SQL事件，blocked-阻塞事件，deadlock-死锁事件 */
  EventType?: string;
  /** 事件记录状态，1-成功，2-失败 */
  Status?: number;
  /** 扩展文件生成开始时间 */
  StartTime?: string;
  /** 扩展文件生成开始时间 */
  EndTime?: string;
  /** 内网下载地址 */
  InternalAddr?: string;
  /** 外网下载地址 */
  ExternalAddr?: string;
}

/** 允许动作信息 */
declare interface FileAction {
  /** 支持的所有操作，值包括：view(查看列表) remark(修改备注)，deploy(部署)，delete(删除文件) */
  AllAction?: string[];
  /** 当前状态允许的操作，AllAction的子集,为空表示禁止所有操作 */
  AllowedAction?: string[];
}

/** 实例的数据库信息 */
declare interface InstanceDBDetail {
  /** 实例ID */
  InstanceId: string;
  /** 数据库信息列表 */
  DBDetails: DBDetail[];
}

/** 实例续费状态信息 */
declare interface InstanceRenewInfo {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 实例续费标记。0：正常续费，1：自动续费，2：到期不续 */
  RenewFlag: number;
}

/** 实例异步任务 */
declare interface InstanceTask {
  /** 唯一id */
  Id?: number;
  /** Job类型 */
  Type?: number;
  /** Job状态 */
  Status?: number;
  /** 进度百分比0~100 */
  Progress?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 错误代码 */
  ErrorCode?: number;
  /** 错误信息描述 */
  Message?: string;
}

/** 互通组内实例信息详情 */
declare interface InterInstance {
  /** 实例ID */
  InstanceId: string;
  /** 实例互通IP，用于加入互通组后访问 */
  InterVip: string;
  /** 实例互通端口，用于加入互通组后访问 */
  InterPort: number;
  /** 实例互通状态，1 -互通ipprot打开中 2 -互通ipprot已经打开 3 -已经打开互通ip的实例加入到互通组中 4 -已经打开互通ip的实例已加入到互通组 5 -互通ipprot回收中 6 -互通ipprot已回收 7 -已回收的实例从互通组中移除中 8 -已回收的实例从互通组中已经移除 */
  Status: number;
  /** 实例所在地域名称，如 ap-guangzhou */
  Region: string;
  /** 实例所在可用区名称，如 ap-guangzhou-1 */
  Zone: string;
  /** 实例版本代号 */
  Version: string;
  /** 实例版本 */
  VersionName: string;
  /** 实例名称 */
  Name: string;
  /** 实例访问IP */
  Vip: string;
  /** 实例访问端口 */
  Vport: number;
}

/** 实例开通或者关闭互通组后的状态 */
declare interface InterInstanceFlow {
  /** 实例ID，例如：mssql-sdf32n1d */
  InstanceId: string;
  /** 实例开通或者关闭互通组的流程ID，FlowId小于0-开通或者关闭失败，反之则成功。 */
  FlowId: number;
}

/** 需要迁移的DB列表 */
declare interface MigrateDB {
  /** 迁移数据库的名称 */
  DBName?: string;
}

/** 迁移的进度详情类型 */
declare interface MigrateDetail {
  /** 当前环节的名称 */
  StepName?: string;
  /** 当前环节的进度（单位是%） */
  Progress?: number;
}

/** 迁移任务的源类型 */
declare interface MigrateSource {
  /** 迁移源实例的ID，MigrateType=1(TencentDB for SQLServers)时使用，格式如：mssql-si2823jyl */
  InstanceId?: string;
  /** 迁移源Cvm的ID，MigrateType=2(云服务器自建SQLServer数据库)时使用 */
  CvmId?: string;
  /** 迁移源Cvm的Vpc网络标识，MigrateType=2(云服务器自建SQLServer数据库)时使用，格式如：vpc-6ys9ont9 */
  VpcId?: string;
  /** 迁移源Cvm的Vpc下的子网标识，MigrateType=2(云服务器自建SQLServer数据库)时使用，格式如：subnet-h9extioi */
  SubnetId?: string;
  /** 用户名，MigrateType=1或MigrateType=2使用 */
  UserName?: string;
  /** 密码，MigrateType=1或MigrateType=2使用 */
  Password?: string;
  /** 迁移源Cvm自建库的内网IP，MigrateType=2(云服务器自建SQLServer数据库)时使用 */
  Ip?: string;
  /** 迁移源Cvm自建库的端口号，MigrateType=2(云服务器自建SQLServer数据库)时使用 */
  Port?: number;
  /** 离线迁移的源备份地址，MigrateType=4或MigrateType=5使用 */
  Url?: string[];
  /** 离线迁移的源备份密码，MigrateType=4或MigrateType=5使用 */
  UrlPassword?: string;
}

/** 迁移任务的目标类型 */
declare interface MigrateTarget {
  /** 迁移目标实例的ID，格式如：mssql-si2823jyl */
  InstanceId?: string;
  /** 迁移目标实例的用户名 */
  UserName?: string;
  /** 迁移目标实例的密码 */
  Password?: string;
}

/** 查询迁移任务列表类型 */
declare interface MigrateTask {
  /** 迁移任务ID */
  MigrateId?: number;
  /** 迁移任务名称 */
  MigrateName?: string;
  /** 迁移任务所属的用户ID */
  AppId?: number;
  /** 迁移任务所属的地域 */
  Region?: string;
  /** 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式） */
  SourceType?: number;
  /** 迁移任务的创建时间 */
  CreateTime?: string;
  /** 迁移任务的开始时间 */
  StartTime?: string;
  /** 迁移任务的结束时间 */
  EndTime?: string;
  /** 迁移任务的状态（1:初始化,4:迁移中,5.迁移失败,6.迁移成功,7已中止,8已删除,9中止中,10完成中,11中止失败,12完成失败） */
  Status?: number;
  /** 信息 */
  Message?: string;
  /** 是否迁移任务经过检查（0:未校验,1:校验成功,2:校验失败,3:校验中） */
  CheckFlag?: number;
  /** 迁移任务当前进度（单位%） */
  Progress?: number;
  /** 迁移任务进度细节 */
  MigrateDetail?: MigrateDetail;
}

/** 冷备迁移导入 */
declare interface Migration {
  /** 备份导入任务ID 或 增量导入任务ID */
  MigrationId?: string;
  /** 备份导入名称，增量导入任务该字段为空 */
  MigrationName?: string;
  /** 应用ID */
  AppId?: number;
  /** 地域 */
  Region?: string;
  /** 迁移目标实例ID */
  InstanceId?: string;
  /** 迁移任务恢复类型 */
  RecoveryType?: string;
  /** 备份用户上传类型，COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，用户上传 */
  UploadType?: string;
  /** 备份文件列表，UploadType确定，COS_URL则保存URL，COS_UPLOAD则保存备份名称 */
  BackupFiles?: string[];
  /** 迁移任务状态，2-创建完成，7-全量导入中，8-等待增量，9-导入成功，10-导入失败，12-增量导入中 */
  Status?: number;
  /** 迁移任务创建时间 */
  CreateTime?: string;
  /** 迁移任务开始时间 */
  StartTime?: string;
  /** 迁移任务结束时间 */
  EndTime?: string;
  /** 说明信息 */
  Message?: string;
  /** 迁移细节 */
  Detail?: MigrationDetail;
  /** 当前状态允许的操作 */
  Action?: MigrationAction;
  /** 是否是最终恢复，全量导入任务该字段为空 */
  IsRecovery?: string;
  /** 重命名的数据库名称集合 */
  DBRename?: DBRenameRes[] | null;
}

/** 冷备导入任务允许的操作 */
declare interface MigrationAction {
  /** 支持的所有操作，值包括：view(查看任务) ，modify(修改任务)， start(启动任务)，incremental(创建增量任务)，delete(删除任务)，upload(获取上传权限)。 */
  AllAction?: string[];
  /** 当前状态允许的操作，AllAction的子集,为空表示禁止所有操作 */
  AllowedAction?: string[];
}

/** 冷备导入任务迁移细节 */
declare interface MigrationDetail {
  /** 总步骤数 */
  StepAll?: number;
  /** 当前步骤 */
  StepNow?: number;
  /** 总进度,如："30"表示30% */
  Progress?: number;
  /** 步骤信息，null表示还未开始迁移 */
  StepInfo?: MigrationStep[];
}

/** 冷备导入任务迁移步骤细节 */
declare interface MigrationStep {
  /** 步骤序列 */
  StepNo?: number;
  /** 步骤展现名称 */
  StepName?: string;
  /** 英文ID标识 */
  StepId?: string;
  /** 步骤状态:0-默认值,1-成功,2-失败,3-执行中,4-未执行 */
  Status?: number;
}

/** 要修改的数据库订阅发布关系集合 */
declare interface ModifyDataBaseTuple {
  /** 要修改的订阅关系 */
  DatabaseTuple: DatabaseTuple;
  /** 修改后的订阅关系。DeleteDataBasesTuple为false时有效 */
  NewDatabaseTuple?: DatabaseTuple;
  /** 是否删除订阅关系。此选项为true时，NewDatabaseTuple无效 */
  DeleteDataBasesTuple?: boolean;
}

/** 用于返回实例存在的未回收的ip数量 */
declare interface OldVip {
  /** 未回收的旧ip */
  Vip?: string;
  /** ip回收时间 */
  RecycleTime?: string;
  /** 旧IP保留时间小时数 */
  OldIpRetainTime?: number;
}

/** 实例参数修改记录 */
declare interface ParamRecord {
  /** 实例ID */
  InstanceId: string;
  /** 参数名称 */
  ParamName: string;
  /** 参数修改前的值 */
  OldValue: string;
  /** 参数修改后的值 */
  NewValue: string;
  /** 参数修改状态，1-初始化等待被执行，2-执行成功，3-执行失败，4-参数修改中 */
  Status: number;
  /** 修改时间 */
  ModifyTime: string;
}

/** 数据库实例参数 */
declare interface Parameter {
  /** 参数名称 */
  Name?: string;
  /** 参数值 */
  CurrentValue?: string;
}

/** 实例参数的详细描述 */
declare interface ParameterDetail {
  /** 参数名称 */
  Name: string;
  /** 参数类型，integer-整型，enum-枚举型 */
  ParamType: string;
  /** 参数默认值 */
  Default: string;
  /** 参数描述 */
  Description: string;
  /** 参数当前值 */
  CurrentValue: string;
  /** 修改参数后，是否需要重启数据库以使参数生效，0-不需要重启，1-需要重启 */
  NeedReboot: number;
  /** 参数允许的最大值 */
  Max: number;
  /** 参数允许的最小值 */
  Min: number;
  /** 参数允许的枚举类型 */
  EnumValue: string[];
  /** 参数状态 0-状态正常 1-在修改中 */
  Status: number;
}

/** 参考价格，该价格为CPU、内存规格价格，不包括磁盘用量，实际价格以询价接口为准。 */
declare interface Price {
  /** 包年包月参考价格，单位-分 */
  PrepaidPrice?: number;
  /** 包年包月价格单位，M-月 */
  PrepaidPriceUnit?: string;
  /** 按量付费价格，单位-分 */
  PostpaidPrice?: number;
  /** 按量付费价格单位，H-小时 */
  PostpaidPriceUnit?: string;
}

/** 包括地域的产品规格配置 */
declare interface ProductSpec {
  /** 地域ID */
  RegionId?: number;
  /** 可用区ID */
  ZoneId?: number;
  /** 配置信息 */
  Info?: SpecInfo[];
}

/** 发布订阅对象 */
declare interface PublishSubscribe {
  /** 发布订阅ID */
  Id?: number;
  /** 发布订阅名称 */
  Name?: string;
  /** 发布实例ID */
  PublishInstanceId?: string;
  /** 发布实例名称 */
  PublishInstanceName?: string;
  /** 发布实例IP */
  PublishInstanceIp?: string;
  /** 订阅实例ID */
  SubscribeInstanceId?: string;
  /** 订阅实例名称 */
  SubscribeInstanceName?: string;
  /** 订阅实例IP */
  SubscribeInstanceIp?: string;
  /** 数据库的订阅发布关系集合 */
  DatabaseTupleSet?: DatabaseTupleStatus[];
}

/** 只读组对象 */
declare interface ReadOnlyGroup {
  /** 只读组ID */
  ReadOnlyGroupId?: string;
  /** 只读组名称 */
  ReadOnlyGroupName?: string;
  /** 只读组的地域ID，与主实例相同 */
  RegionId?: string;
  /** 只读组的可用区ID，与主实例相同 */
  ZoneId?: string;
  /** 是否启动超时剔除功能，0-不开启剔除功能，1-开启剔除功能 */
  IsOfflineDelay?: number;
  /** 启动超时剔除功能后，使用的超时阈值 */
  ReadOnlyMaxDelayTime?: number;
  /** 启动超时剔除功能后，只读组至少保留的只读副本数 */
  MinReadOnlyInGroup?: number;
  /** 只读组vip */
  Vip?: string;
  /** 只读组vport */
  Vport?: number;
  /** 只读组私有网络ID */
  VpcId?: string;
  /** 只读组私有网络子网ID */
  SubnetId?: string;
  /** 只读组状态: 1-申请成功运行中，5-申请中 */
  Status?: number;
  /** 主实例ID，形如mssql-sgeshe3th */
  MasterInstanceId?: string;
  /** 只读实例副本集合 */
  ReadOnlyInstanceSet?: ReadOnlyInstance[];
  /** RO组外网地址域名 */
  DnsPodDomain?: string;
  /** RO组外网地址端口 */
  TgwWanVPort?: number;
  /** RO只读组类型，1-按照一个实例一个只读组的方式发货，2-新建只读组后发货的所有实例都在这个只读组下面， 3-发货的所有实例都在已有的只读组下面 */
  ReadOnlyGroupType?: number;
  /** 部署RO副本模式，0-默认不升级主实例，1-强制升级主实例完成RO部署 */
  ReadOnlyGroupForcedUpgrade?: number;
}

/** 只读副本实例 */
declare interface ReadOnlyInstance {
  /** 只读副本ID，格式如：mssqlro-3l3fgqn7 */
  InstanceId?: string;
  /** 只读副本名称 */
  Name?: string;
  /** 只读副本唯一UID */
  Uid?: string;
  /** 只读副本所在项目ID */
  ProjectId?: number;
  /** 只读副本状态。1：申请中 2：运行中 3：被延迟剔除 4：已隔离 5：回收中 6：已回收 7：任务执行中 8：已下线 9：实例扩容中 10：实例迁移中 12：重启中 */
  Status?: number;
  /** 只读副本创建时间 */
  CreateTime?: string;
  /** 只读副本更新时间 */
  UpdateTime?: string;
  /** 只读副本内存大小，单位G */
  Memory?: number;
  /** 只读副本存储空间大小，单位G */
  Storage?: number;
  /** 只读副本cpu核心数 */
  Cpu?: number;
  /** 只读副本版本代号 */
  Version?: string;
  /** 宿主机代号 */
  Type?: string;
  /** 只读副本模式，2-单机 */
  Model?: number;
  /** 只读副本计费模式，1-包年包月，0-按量计费 */
  PayMode?: number;
  /** 只读副本权重 */
  Weight?: number;
  /** 只读副本延迟时间，单位秒 */
  DelayTime?: string;
  /** 只读副本与主实例的同步状态。Init:初始化DeployReadOnlyInPorgress:部署副本进行中DeployReadOnlySuccess:部署副本成功DeployReadOnlyFail:部署副本失败DeployMasterDBInPorgress:主节点上加入副本数据库进行中DeployMasterDBSuccess:主节点上加入副本数据库成功DeployMasterDBFail:主节点上加入副本数据库进失败DeployReadOnlyDBInPorgress:副本还原加入数据库开始DeployReadOnlyDBSuccess:副本还原加入数据库成功DeployReadOnlyDBFail:副本还原加入数据库失败SyncDelay:同步延迟SyncFail:同步故障SyncExcluded:已剔除只读组SyncNormal:正常 */
  SynStatus?: string;
  /** 只读副本与主实例没有同步的库 */
  DatabaseDifference?: string;
  /** 只读副本与主实例没有同步的账户 */
  AccountDifference?: string;
  /** 只读副本计费开始时间 */
  StartTime?: string;
  /** 只读副本计费结束时间 */
  EndTime?: string;
  /** 只读副本隔离时间 */
  IsolateTime?: string;
  /** 只读副本所在地域 */
  RegionId?: string;
  /** 只读副本所在可用区 */
  ZoneId?: string;
}

/** 只读实例与权重对应关系 */
declare interface ReadOnlyInstanceWeightPair {
  /** 只读实例ID，格式如：mssqlro-3l3fgqn7 */
  ReadOnlyInstanceId: string;
  /** 只读实例权重 ，范围是0-100 */
  ReadOnlyWeight: number;
}

/** 地域信息 */
declare interface RegionInfo {
  /** 地域英文ID，类似ap-guanghou */
  Region?: string;
  /** 地域中文名称 */
  RegionName?: string;
  /** 地域数字ID */
  RegionId?: number;
  /** 该地域目前是否可以售卖，UNAVAILABLE-不可售卖；AVAILABLE-可售卖 */
  RegionState?: string;
}

/** 用于RestoreInstance，RollbackInstance，CreateMigration、CloneDB、ModifyBackupMigration 等接口；对恢复的库进行重命名，且支持选择要恢复的库。 */
declare interface RenameRestoreDatabase {
  /** 库的名字，如果oldName不存在则返回失败。在用于离线迁移任务时可不填。 */
  OldName?: string;
  /** 库的新名字，在用于离线迁移时，不填则按照OldName命名，OldName和NewName不能同时不填。在用于克隆数据库时，OldName和NewName都必须填写，且不能重复 */
  NewName?: string;
}

/** 实例绑定的标签信息 */
declare interface ResourceTag {
  /** 标签key */
  TagKey?: string;
  /** 标签value */
  TagValue?: string;
}

/** 回档任务记录 */
declare interface RestoreTask {
  /** 目标实例ID */
  TargetInstanceId?: string;
  /** 目标实例名称 */
  TargetInstanceName?: string;
  /** 目标实例状态。取值范围：1：申请中2：运行中3：受限运行中 (主备切换中)4：已隔离5：回收中6：已回收7：任务执行中 (实例做备份、回档等操作)8：已下线9：实例扩容中10：实例迁移中11：只读12：重启中 */
  TargetInstanceStatus?: number;
  /** 目标实例所在地域 */
  TargetRegion?: string;
  /** 回档记录ID */
  RestoreId?: number;
  /** 回档到目标实例的类型，0-当前实例，1-已有实例，2-全新实例 */
  TargetType?: number;
  /** 回档方式，0-按照时间点回档，1-按照备份集回档 */
  RestoreType?: number;
  /** 回档目标时间 */
  RestoreTime?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 回档状态，0-初始化，1-运行中，2-成功，3-失败 */
  Status?: number;
  /** 回档异步任务ID */
  FlowId?: number;
}

/** SSL加密配置 */
declare interface SSLConfig {
  /** SSL加密状态，enable-已开启disable-未开启enable_doing-开启中disable_doing-关闭中renew_doing-更新中wait_doing-等待维护时间内执行 */
  Encryption?: string;
  /** SSL证书有效期，时间格式 YYYY-MM-DD HH:MM:SS */
  SSLValidityPeriod?: string;
  /** SSL证书有效性，0-无效，1-有效 */
  SSLValidity?: number;
  /** 是否是KMS的CMK证书 */
  IsKMS?: number;
  /** KMS中购买的用户主密钥ID（CMK） */
  CMKId?: string;
  /** CMK所属的地域，不同地域的CMK数据不互通 */
  CMKRegion?: string;
}

/** 安全组 */
declare interface SecurityGroup {
  /** 项目ID */
  ProjectId?: number;
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss */
  CreateTime?: string;
  /** 入站规则 */
  InboundSet?: SecurityGroupPolicy[];
  /** 出站规则 */
  OutboundSet?: SecurityGroupPolicy[];
  /** 安全组ID */
  SecurityGroupId?: string;
  /** 安全组名称 */
  SecurityGroupName?: string;
  /** 安全组备注 */
  SecurityGroupRemark?: string;
}

/** 安全组策略 */
declare interface SecurityGroupPolicy {
  /** 策略，ACCEPT 或者 DROP */
  Action?: string;
  /** 目的 IP 或 IP 段，例如172.16.0.0/12 */
  CidrIp?: string;
  /** 端口或者端口范围 */
  PortRange?: string;
  /** 网络协议，支持 UDP、TCP等 */
  IpProtocol?: string;
  /** 规则限定的方向，OUTPUT-出战规则 INPUT-进站规则 */
  Dir?: string;
}

/** DB权限修改类型 */
declare interface SelectAllDB {
  /** 权限变更信息。ReadWrite表示可读写，ReadOnly表示只读，Delete表示删除账号对该DB的权限，DBOwner所有者 */
  Privilege: string;
}

/** 备可用区信息 */
declare interface SlaveZones {
  /** 备可用区地域码 */
  SlaveZone?: string;
  /** 备可用区 */
  SlaveZoneName?: string;
  /** 备机资源ID */
  DrInstanceId?: string;
}

/** 慢查询日志文件信息 */
declare interface SlowLog {
  /** 慢查询日志文件唯一标识 */
  Id?: number;
  /** 文件生成的开始时间 */
  StartTime?: string;
  /** 文件生成的结束时间 */
  EndTime?: string;
  /** 文件大小（KB） */
  Size?: number;
  /** 文件中log条数 */
  Count?: number;
  /** 内网下载地址 */
  InternalAddr?: string;
  /** 外网下载地址 */
  ExternalAddr?: string;
  /** 状态（1成功 2失败） */
  Status?: number;
}

/** 慢查询日志文件信息 */
declare interface SlowlogInfo {
  /** 慢查询日志文件唯一标识 */
  Id: number;
  /** 文件生成的开始时间 */
  StartTime: string;
  /** 文件生成的结束时间 */
  EndTime: string;
  /** 文件大小（KB） */
  Size: number;
  /** 文件中log条数 */
  Count: number;
  /** 内网下载地址 */
  InternalAddr: string;
  /** 外网下载地址 */
  ExternalAddr: string;
  /** 状态（1成功 2失败） */
  Status: number | null;
}

/** 实例可售卖的规格信息 */
declare interface SpecInfo {
  /** 实例规格ID，利用DescribeZones返回的SpecId，结合DescribeProductConfig返回的可售卖规格信息，可获悉某个可用区下可购买什么规格的实例 */
  SpecId?: number;
  /** 机型ID */
  MachineType?: string;
  /** 机型中文名称 */
  MachineTypeName?: string;
  /** 数据库版本信息。取值为2008R2（表示SQL Server 2008 R2），2012SP3（表示SQL Server 2012），2016SP1（表示SQL Server 2016 SP1） */
  Version?: string;
  /** Version字段对应的版本名称 */
  VersionName?: string;
  /** 内存大小，单位GB */
  Memory?: number;
  /** CPU核数 */
  CPU?: number;
  /** 此规格下最小的磁盘大小，单位GB */
  MinStorage?: number;
  /** 此规格下最大的磁盘大小，单位GB */
  MaxStorage?: number;
  /** 此规格对应的QPS大小 */
  QPS?: number;
  /** 此规格的中文描述信息 */
  SuitInfo?: string;
  /** 此规格对应的包年包月Pid */
  Pid?: number;
  /** 此规格对应的按量计费Pid列表 */
  PostPid?: number[];
  /** 此规格下支持的付费模式，POST-仅支持按量计费 PRE-仅支持包年包月 ALL-支持所有 */
  PayModeStatus?: string;
  /** 购买实例的类型 HA-本地盘高可用(包括双机高可用，alwaysOn集群)，RO-本地盘只读副本，SI-云盘版单节点,BI-商业智能服务，cvmHA-云盘版高可用，cvmRO-云盘版只读副本，MultiHA-多节点，cvmMultiHA-云盘多节点示例值：HA */
  InstanceType?: string;
  /** 跨可用区类型，MultiZones-只支持跨可用区，SameZones-只支持同可用区，ALL-支持所有 */
  MultiZonesStatus?: string;
}

/** 售卖配置状态 */
declare interface SpecSellStatus {
  /** 可售卖的规格唯一ID */
  Id?: string;
  /** 实例规格ID */
  SpecId?: number;
  /** 此规格下支持的付费模式，POST-仅支持按量计费 PRE-仅支持包年包月 ALL-支持所有 */
  PayModeStatus?: string;
  /** 产品类型，购买实例的类型 HA-本地盘高可用(包括双机高可用，alwaysOn集群)，RO-本地盘只读副本，SI-云盘版单节点,BI-商业智能服务，cvmHA-云盘版高可用，cvmRO-云盘版只读副本，MultiHA-多节点，cvmMultiHA-云盘多节点 */
  InstanceType?: string;
  /** 该规格支持的是否跨可用去，MultiZones-只支持跨可用区，SameZones-只支持同可用区，ALL-支持所有 */
  MultiZonesStatus?: string;
  /** 架构标识，SINGLE-单节点 DOUBLE-双节点 TRIPLE-三节点 MULTI-多节点示例值：SINGLE */
  Architecture?: string;
  /** 类型标识，EXCLUSIVE-独享型，SHARED-共享型 */
  Style?: string;
  /** 数据库版本信息 */
  Version?: string;
  /** 每个可用区的售卖状态集合 */
  ZoneStatusSet?: ZoneStatus[];
  /** 规格的参考价格，实际价格以询价接口为准 */
  Price?: Price;
  /** 规格售卖状态 1-正常 2-关闭售卖但是可以升级 3-完全关闭售卖 */
  Status?: number;
}

/** 进度步骤详情 */
declare interface StepDetail {
  /** 具体步骤返回信息 */
  Msg?: string;
  /** 当前步骤状态，0成功，-2未开始 */
  Status?: number;
  /** 步骤名称 */
  Name?: string;
}

/** 备份概览实时统计项 */
declare interface SummaryDetailRes {
  /** 地域标识 */
  RegionId?: number;
  /** 实例状态。1：申请中2：运行中3：受限运行中 (主备切换中)4：已隔离5：回收中6：已回收7：任务执行中 (实例做备份、回档等操作)8：已下线9：实例扩容中10：实例迁移中 */
  Status?: number;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  Name?: string;
  /** 备份空间 */
  ActualUsedSpace?: number;
  /** 数据备份空间 */
  DataBackupSpace?: number;
  /** 数据备份文件总个数 */
  DataBackupCount?: number;
  /** 日志备份空间 */
  LogBackupSpace?: number;
  /** 日志备份文件总个数 */
  LogBackupCount?: number;
  /** 自动备份空间 */
  AutoBackupSpace?: number;
  /** 自动备份文件总个数 */
  AutoBackupCount?: number;
  /** 手动备份空间 */
  ManualBackupSpace?: number;
  /** 手动备份文件总个数 */
  ManualBackupCount?: number;
  /** 实例所属地域码 */
  Region?: string;
}

/** 主备切换日志 */
declare interface SwitchLog {
  /** 切换事件ID */
  EventId?: string;
  /** 切换模式 0-系统自动切换，1-手动切换 */
  SwitchType?: number;
  /** 切换开始时间 */
  StartTime?: string;
  /** 切换结束时间 */
  EndTime?: string;
  /** 机器故障导致自动切换 */
  Reason?: string;
}

/** TDE透明数据加密配置 */
declare interface TDEConfigAttribute {
  /** 是否已开通TDE加密，enable-已开通，disable-未开通 */
  Encryption?: string;
  /** 证书归属。self-表示使用该账号自身的证书，others-表示引用其他账号的证书，none-表示没有证书 */
  CertificateAttribution?: string;
  /** 开通TDE加密时引用的其他主账号ID */
  QuoteUin?: string;
  /** KMS中购买的用户主密钥ID（CMK） */
  CMKId?: string;
  /** CMK所属的地域，不同地域的CMK不互通 */
  CMKRegion?: string;
}

/** 可用区信息 */
declare interface ZoneInfo {
  /** 可用区英文ID，形如ap-guangzhou-1，表示广州一区 */
  Zone?: string;
  /** 可用区中文名称 */
  ZoneName?: string;
  /** 可用区数字ID */
  ZoneId?: number;
  /** 该可用区目前可售卖的规格ID，利用SpecId，结合接口DescribeProductConfig返回的数据，可获悉该可用区目前可售卖的规格大小 */
  SpecId?: number;
  /** 当前可用区与规格下，可售卖的数据库版本，形如2008R2（表示SQL Server 2008 R2）。其可选值有2008R2（表示SQL Server 2008 R2），2012SP3（表示SQL Server 2012），2016SP1（表示SQL Server 2016 SP1） */
  Version?: string;
}

/** 某个地域可用区下的规格售卖状态。 */
declare interface ZoneStatus {
  /** 规格地域 */
  Zone: string;
  /** 规格可用区 */
  Region: string;
  /** 规格在该可用区的售卖状态 1-正常 2-关闭售卖但是可以升级 3-完全关闭售卖 */
  Status: number;
}

declare interface AssociateSecurityGroupsRequest {
  /** 安全组ID。 */
  SecurityGroupId: string;
  /** 实例ID 列表，一个或者多个实例ID组成的数组。多个实例必须是同一个地域，同一个可用区，同一个项目下的。 */
  InstanceIdSet: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BalanceReadOnlyGroupRequest {
  /** 主实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 只读组ID，格式如：mssqlrg-dj5i29c5n */
  ReadOnlyGroupId: string;
}

declare interface BalanceReadOnlyGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloneDBRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 按照ReNameRestoreDatabase中的库进行克隆，并重命名，新库名称必须指定 */
  RenameRestore: RenameRestoreDatabase[];
}

declare interface CloneDBResponse {
  /** 异步流程任务ID，使用FlowId调用DescribeFlowStatus接口获取任务执行状态 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseInterCommunicationRequest {
  /** 关闭互通的实例ID集合 */
  InstanceIdSet: string[];
}

declare interface CloseInterCommunicationResponse {
  /** 实例和异步流程ID */
  InterInstanceFlowSet?: InterInstanceFlow[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CompleteExpansionRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
}

declare interface CompleteExpansionResponse {
  /** 流程ID，可通过接口DescribeFlowStatus查询立即切换升级任务的状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CompleteMigrationRequest {
  /** 迁移任务ID */
  MigrateId: number;
}

declare interface CompleteMigrationResponse {
  /** 完成迁移流程发起后，返回的流程id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccountRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 数据库实例账户信息 */
  Accounts: AccountCreateInfo[];
}

declare interface CreateAccountResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupMigrationRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 迁移任务恢复类型，FULL-全量备份恢复，FULL_LOG-全量备份+事务日志恢复，FULL_DIFF-全量备份+差异备份恢复 */
  RecoveryType: string;
  /** 备份上传类型，COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，需要用户上传。 */
  UploadType: string;
  /** 任务名称 */
  MigrationName: string;
  /** UploadType是COS_URL时这里填URL，COS_UPLOAD这里填备份文件的名字。只支持1个备份文件，但1个备份文件内可包含多个库 */
  BackupFiles?: string[];
}

declare interface CreateBackupMigrationResponse {
  /** 备份导入任务ID */
  BackupMigrationId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupRequest {
  /** 备份策略(0-实例备份 1-多库备份) */
  Strategy?: number;
  /** 需要备份库名的列表(多库备份才填写) */
  DBNames?: string[];
  /** 实例ID（必填），形如mssql-i1z41iwd */
  InstanceId?: string;
  /** 备份名称，若不填则自动生成“实例ID_备份开始时间戳” */
  BackupName?: string;
  /** 备份存储策略 0-跟随自定义备份保留策略 1-跟随实例生命周期直到实例下线，默认取值0 */
  StorageStrategy?: number;
}

declare interface CreateBackupResponse {
  /** 异步任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBasicDBInstancesRequest {
  /** 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取 */
  Zone: string;
  /** 实例的CPU核心数 */
  Cpu: number;
  /** 实例内存大小，单位GB */
  Memory: number;
  /** 实例磁盘大小，单位GB */
  Storage: number;
  /** VPC子网ID，形如subnet-bdoe83fa */
  SubnetId: string;
  /** VPC网络ID，形如vpc-dsp338hz */
  VpcId: string;
  /** 购买实例的宿主机类型，CLOUD_PREMIUM-虚拟机高性能云硬盘，CLOUD_SSD-虚拟机SSD云硬盘,CLOUD_HSSD-虚拟机增强型SSD云硬盘，CLOUD_BSSD-虚拟机通用型SSD云盘 */
  MachineType: string;
  /** 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。 */
  InstanceChargeType?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 本次购买几个实例，默认值为1。取值不超过10 */
  GoodsNum?: number;
  /** sqlserver版本，目前所有支持的版本有：2008R2 (SQL Server 2008 R2 Enterprise)，2012SP3 (SQL Server 2012 Enterprise)，201202 (SQL Server 2012 Standard)，2014SP2 (SQL Server 2014 Enterprise)，201402 (SQL Server 2014 Standard)，2016SP1 (SQL Server 2016 Enterprise)，201602 (SQL Server 2016 Standard)，2017 (SQL Server 2017 Enterprise)，201702 (SQL Server 2017 Standard)，2019 (SQL Server 2019 Enterprise)，201902 (SQL Server 2019 Standard)。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。 */
  DBVersion?: string;
  /** 购买实例周期，默认取值为1，表示一个月。取值不超过48 */
  Period?: number;
  /** 安全组列表，填写形如sg-xxx的安全组ID */
  SecurityGroupList?: string[];
  /** 自动续费标志：0-正常续费 1-自动续费，默认为1自动续费。只在购买预付费实例时有效。 */
  AutoRenewFlag?: number;
  /** 是否自动使用代金券；1 - 是，0 - 否，默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID数组，目前单个订单只能使用一张 */
  VoucherIds?: string[];
  /** 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末 */
  Weekly?: number[];
  /** 可维护时间窗配置，每天可维护的开始时间 */
  StartTime?: string;
  /** 可维护时间窗配置，持续时间，单位：小时 */
  Span?: number;
  /** 新建实例绑定的标签集合 */
  ResourceTags?: ResourceTag[];
  /** 系统字符集排序规则，默认：Chinese_PRC_CI_AS */
  Collation?: string;
  /** 系统时区，默认：China Standard Time */
  TimeZone?: string;
}

declare interface CreateBasicDBInstancesResponse {
  /** 订单名称 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBusinessDBInstancesRequest {
  /** 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取 */
  Zone: string;
  /** 实例内存大小，单位GB */
  Memory: number;
  /** 实例磁盘大小，单位GB */
  Storage: number;
  /** 预购买实例的CPU核心数 */
  Cpu: number;
  /** 购买实例的宿主机类型，CLOUD_PREMIUM-虚拟机高性能云盘，CLOUD_SSD-虚拟机SSD云盘 */
  MachineType: string;
  /** 项目ID */
  ProjectId?: number;
  /** 本次购买几个实例，默认值为1 */
  GoodsNum?: number;
  /** VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置 */
  SubnetId?: string;
  /** VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置 */
  VpcId?: string;
  /** 商业智能服务器版本，目前只支持：201603（SQL Server 2016 Integration Services），201703（SQL Server 2017 Integration Services），201903（SQL Server 2019 Integration Services）版本。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本201903。 */
  DBVersion?: string;
  /** 安全组列表，填写形如sg-xxx的安全组ID */
  SecurityGroupList?: string[];
  /** 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末 */
  Weekly?: number[];
  /** 可维护时间窗配置，每天可维护的开始时间 */
  StartTime?: string;
  /** 可维护时间窗配置，持续时间，单位：小时 */
  Span?: number;
  /** 新建实例绑定的标签集合 */
  ResourceTags?: ResourceTag[];
}

declare interface CreateBusinessDBInstancesResponse {
  /** 订单名称 */
  DealName?: string;
  /** 流程ID */
  FlowId?: number;
  /** 实例ID集合 */
  InstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBusinessIntelligenceFileRequest {
  /** 实例ID */
  InstanceId: string;
  /** COS_URL */
  FileURL: string;
  /** 文件类型 FLAT-作为数据源的平面文件， SSIS-ssis项目包 */
  FileType: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateBusinessIntelligenceFileResponse {
  /** 文件名称 */
  FileTaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudDBInstancesRequest {
  /** 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取 */
  Zone: string;
  /** 实例内存大小，单位GB */
  Memory: number;
  /** 实例磁盘大小，单位GB */
  Storage: number;
  /** 实例核心数 */
  Cpu: number;
  /** 购买实例的宿主机磁盘类型,CLOUD_HSSD-虚拟机加强型SSD云盘，CLOUD_TSSD-虚拟机极速型SSD云盘，CLOUD_BSSD-虚拟机通用型SSD云盘 */
  MachineType: string;
  /** 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。 */
  InstanceChargeType?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 本次购买几个实例，默认值为1。取值不超过10 */
  GoodsNum?: number;
  /** VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置 */
  SubnetId?: string;
  /** VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置 */
  VpcId?: string;
  /** 购买实例周期，默认取值为1，表示一个月。取值不超过48 */
  Period?: number;
  /** 是否自动使用代金券；1 - 是，0 - 否，默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID数组，目前单个订单只能使用一张 */
  VoucherIds?: string[];
  /** sqlserver版本，目前所有支持的版本有：2008R2 (SQL Server 2008 R2 Enterprise)，2012SP3 (SQL Server 2012 Enterprise)，201202 (SQL Server 2012 Standard)，2014SP2 (SQL Server 2014 Enterprise)，201402 (SQL Server 2014 Standard)，2016SP1 (SQL Server 2016 Enterprise)，201602 (SQL Server 2016 Standard)，2017 (SQL Server 2017 Enterprise)，201702 (SQL Server 2017 Standard)，2019 (SQL Server 2019 Enterprise)，201902 (SQL Server 2019 Standard)。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。 */
  DBVersion?: string;
  /** 自动续费标志：0-正常续费 1-自动续费，默认为1自动续费。只在购买预付费实例时有效。 */
  AutoRenewFlag?: number;
  /** 安全组列表，填写形如sg-xxx的安全组ID */
  SecurityGroupList?: string[];
  /** 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末 */
  Weekly?: number[];
  /** 可维护时间窗配置，每天可维护的开始时间 */
  StartTime?: string;
  /** 可维护时间窗配置，持续时间，单位：小时 */
  Span?: number;
  /** 是否跨可用区部署，默认值为false */
  MultiZones?: boolean;
  /** 新建实例绑定的标签集合 */
  ResourceTags?: ResourceTag[];
  /** 系统字符集排序规则，默认：Chinese_PRC_CI_AS */
  Collation?: string;
  /** 系统时区，默认：China Standard Time */
  TimeZone?: string;
  /** 是否多节点架构实例，默认值为false。当MultiNodes = true时，参数MultiZones必须取值为true。 */
  MultiNodes?: boolean;
  /** 备节点可用区，默认为空。当MultiNodes = true时，主节点和备节点可用区不能全部相同。备机可用区集合最小为2个，最大不超过5个。 */
  DrZones?: string[];
}

declare interface CreateCloudDBInstancesResponse {
  /** 订单名称 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudReadOnlyDBInstancesRequest {
  /** 主实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取 */
  Zone: string;
  /** 只读组类型选项，1-按照一个实例一个只读组的方式发货，2-新建只读组后发货，所有实例都在这个只读组下面， 3-发货的所有实例都在已有的只读组下面 */
  ReadOnlyGroupType: number;
  /** 实例内存大小，单位GB */
  Memory: number;
  /** 实例磁盘大小，单位GB */
  Storage: number;
  /** 实例核心数 */
  Cpu: number;
  /** 购买实例的宿主机磁盘类型,CLOUD_HSSD-虚拟机加强型SSD云盘，CLOUD_TSSD-虚拟机极速型SSD云盘，CLOUD_BSSD-虚拟机通用型SSD云盘 */
  MachineType: string;
  /** 0-默认不升级主实例，1-强制升级主实例完成ro部署；主实例为非集群版时需要填1，强制升级为集群版。填1 说明您已同意将主实例升级到集群版实例。 */
  ReadOnlyGroupForcedUpgrade?: number;
  /** ReadOnlyGroupType=3时必填,已存在的只读组ID */
  ReadOnlyGroupId?: string;
  /** ReadOnlyGroupType=2时必填，新建的只读组名称 */
  ReadOnlyGroupName?: string;
  /** ReadOnlyGroupType=2时必填，新建的只读组是否开启延迟剔除功能，1-开启，0-关闭。当只读副本与主实例延迟大于阈值后，自动剔除。 */
  ReadOnlyGroupIsOfflineDelay?: number;
  /** ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除的阈值。 */
  ReadOnlyGroupMaxDelayTime?: number;
  /** ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除后至少保留只读副本的个数。 */
  ReadOnlyGroupMinInGroup?: number;
  /** 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。 */
  InstanceChargeType?: string;
  /** 本次即将购买的实例数量，默认取值2。 */
  GoodsNum?: number;
  /** VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置 */
  SubnetId?: string;
  /** VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置 */
  VpcId?: string;
  /** 购买实例周期，默认取值为1，表示一个月。取值不超过48 */
  Period?: number;
  /** 安全组列表，填写形如sg-xxx的安全组ID */
  SecurityGroupList?: string[];
  /** 是否自动使用代金券；1 - 是，0 - 否，默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID数组，目前单个订单只能使用一张 */
  VoucherIds?: string[];
  /** 新建实例绑定的标签集合 */
  ResourceTags?: ResourceTag[];
  /** 系统字符集排序规则，默认：Chinese_PRC_CI_AS */
  Collation?: string;
  /** 系统时区，默认：China Standard Time */
  TimeZone?: string;
}

declare interface CreateCloudReadOnlyDBInstancesResponse {
  /** 订单名称数组 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstancesRequest {
  /** 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取 */
  Zone: string;
  /** 实例内存大小，单位GB */
  Memory: number;
  /** 实例磁盘大小，单位GB */
  Storage: number;
  /** 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。 */
  InstanceChargeType?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 本次购买几个实例，默认值为1。取值不超过10 */
  GoodsNum?: number;
  /** VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置 */
  SubnetId?: string;
  /** VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置 */
  VpcId?: string;
  /** 购买实例周期，默认取值为1，表示一个月。取值不超过48 */
  Period?: number;
  /** 是否自动使用代金券；1 - 是，0 - 否，默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID数组，目前单个订单只能使用一张 */
  VoucherIds?: string[];
  /** sqlserver版本，目前所有支持的版本有：2008R2 (SQL Server 2008 R2 Enterprise)，2012SP3 (SQL Server 2012 Enterprise)，201202 (SQL Server 2012 Standard)，2014SP2 (SQL Server 2014 Enterprise)，201402 (SQL Server 2014 Standard)，2016SP1 (SQL Server 2016 Enterprise)，201602 (SQL Server 2016 Standard)，2017 (SQL Server 2017 Enterprise)，201702 (SQL Server 2017 Standard)，2019 (SQL Server 2019 Enterprise)，201902 (SQL Server 2019 Standard)。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。 */
  DBVersion?: string;
  /** 自动续费标志：0-正常续费 1-自动续费，默认为1自动续费。只在购买预付费实例时有效。 */
  AutoRenewFlag?: number;
  /** 安全组列表，填写形如sg-xxx的安全组ID */
  SecurityGroupList?: string[];
  /** 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末 */
  Weekly?: number[];
  /** 可维护时间窗配置，每天可维护的开始时间 */
  StartTime?: string;
  /** 可维护时间窗配置，持续时间，单位：小时 */
  Span?: number;
  /** 购买高可用实例的类型：DUAL-双机高可用 CLUSTER-集群，默认值为DUAL */
  HAType?: string;
  /** 是否跨可用区部署，默认值为false */
  MultiZones?: boolean;
  /** 新建实例绑定的标签集合 */
  ResourceTags?: ResourceTag[];
  /** 系统字符集排序规则，默认：Chinese_PRC_CI_AS */
  Collation?: string;
  /** 系统时区，默认：China Standard Time */
  TimeZone?: string;
  /** 是否多节点架构实例，默认值为false。当MultiNodes = true时，参数MultiZones必须取值为true。 */
  MultiNodes?: boolean;
  /** 备节点可用区，默认为空。当MultiNodes = true时，主节点和备节点可用区不能全部相同。备机可用区集合最小为2个，最大不超过5个。 */
  DrZones?: string[];
}

declare interface CreateDBInstancesResponse {
  /** 订单名称 */
  DealName?: string;
  /** 订单名称数组 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBRequest {
  /** 实例ID */
  InstanceId: string;
  /** 数据库创建信息 */
  DBs: DBCreateInfo[];
}

declare interface CreateDBResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIncrementalMigrationRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 增量备份文件，全量备份任务UploadType是COS_URL时这里填URL，是COS_UPLOAD这里填备份文件的名字；只支持1个备份文件，但1个备份文件内可包含多个库 */
  BackupFiles?: string[];
  /** 是否需要恢复，NO-不需要，YES-需要，默认不需要 */
  IsRecovery?: string;
}

declare interface CreateIncrementalMigrationResponse {
  /** 增量备份导入任务ID */
  IncrementalMigrationId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMigrationRequest {
  /** 迁移任务的名称 */
  MigrateName: string;
  /** 迁移类型（1:结构迁移 2:数据迁移 3:增量同步） */
  MigrateType: number;
  /** 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式） */
  SourceType: number;
  /** 迁移源 */
  Source: MigrateSource;
  /** 迁移目标 */
  Target: MigrateTarget;
  /** 迁移DB对象 ，离线迁移不使用（SourceType=4或SourceType=5）。 */
  MigrateDBSet?: MigrateDB[];
  /** 按照ReNameRestoreDatabase中的库进行恢复，并重命名，不填则按照默认方式命名恢复的库，且恢复所有的库。SourceType=5的情况下有效。 */
  RenameRestore?: RenameRestoreDatabase[];
}

declare interface CreateMigrationResponse {
  /** 迁移任务ID */
  MigrateId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePublishSubscribeRequest {
  /** 发布实例ID，形如mssql-j8kv137v */
  PublishInstanceId: string;
  /** 订阅实例ID，形如mssql-j8kv137v */
  SubscribeInstanceId: string;
  /** 数据库的订阅发布关系集合 */
  DatabaseTupleSet: DatabaseTuple[];
  /** 发布订阅的名称，默认值为：default_name */
  PublishSubscribeName?: string;
}

declare interface CreatePublishSubscribeResponse {
  /** 流程ID，可通过接口DescribeFlowStatus查询立即切换升级任务的状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReadOnlyDBInstancesRequest {
  /** 主实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取 */
  Zone: string;
  /** 只读组类型选项，1-按照一个实例一个只读组的方式发货，2-新建只读组后发货，所有实例都在这个只读组下面， 3-发货的所有实例都在已有的只读组下面 */
  ReadOnlyGroupType: number;
  /** 实例内存大小，单位GB */
  Memory: number;
  /** 实例磁盘大小，单位GB */
  Storage: number;
  /** 0-默认不升级主实例，1-强制升级主实例完成ro部署；主实例为非集群版时需要填1，强制升级为集群版。填1 说明您已同意将主实例升级到集群版实例。 */
  ReadOnlyGroupForcedUpgrade?: number;
  /** ReadOnlyGroupType=3时必填,已存在的只读组ID */
  ReadOnlyGroupId?: string;
  /** ReadOnlyGroupType=2时必填，新建的只读组名称 */
  ReadOnlyGroupName?: string;
  /** ReadOnlyGroupType=2时必填，新建的只读组是否开启延迟剔除功能，1-开启，0-关闭。当只读副本与主实例延迟大于阈值后，自动剔除。 */
  ReadOnlyGroupIsOfflineDelay?: number;
  /** ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除的阈值。 */
  ReadOnlyGroupMaxDelayTime?: number;
  /** ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除后至少保留只读副本的个数。 */
  ReadOnlyGroupMinInGroup?: number;
  /** 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。 */
  InstanceChargeType?: string;
  /** 本次购买几个只读实例，默认值为2。 */
  GoodsNum?: number;
  /** VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置 */
  SubnetId?: string;
  /** VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置 */
  VpcId?: string;
  /** 购买实例周期，默认取值为1，表示一个月。取值不超过48 */
  Period?: number;
  /** 安全组列表，填写形如sg-xxx的安全组ID */
  SecurityGroupList?: string[];
  /** 是否自动使用代金券；1 - 是，0 - 否，默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID数组，目前单个订单只能使用一张 */
  VoucherIds?: string[];
  /** 新建实例绑定的标签集合 */
  ResourceTags?: ResourceTag[];
  /** 系统字符集排序规则，默认：Chinese_PRC_CI_AS */
  Collation?: string;
  /** 系统时区，默认：China Standard Time */
  TimeZone?: string;
}

declare interface CreateReadOnlyDBInstancesResponse {
  /** 订单名称数组 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CutXEventsRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface CutXEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccountRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 实例用户名数组 */
  UserNames: string[];
}

declare interface DeleteAccountResponse {
  /** 任务流ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupMigrationRequest {
  /** 目标实例ID，由DescribeBackupMigration接口返回 */
  InstanceId: string;
  /** 备份导入任务ID，由DescribeBackupMigration接口返回 */
  BackupMigrationId: string;
}

declare interface DeleteBackupMigrationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBusinessIntelligenceFileRequest {
  /** 实例ID */
  InstanceId: string;
  /** 文件名称集合 */
  FileNameSet: string[];
}

declare interface DeleteBusinessIntelligenceFileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDBInstanceRequest {
  /** 实例ID，格式如：mssql-3l3fgqn7 或 mssqlro-3l3fgqn7 */
  InstanceId: string;
}

declare interface DeleteDBInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDBRequest {
  /** 实例ID，形如mssql-rljoi3bf */
  InstanceId: string;
  /** 数据库名数组 */
  Names: string[];
}

declare interface DeleteDBResponse {
  /** 任务流ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIncrementalMigrationRequest {
  /** 目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 增量备份导入任务ID，由CreateIncrementalMigration接口返回 */
  IncrementalMigrationId: string;
}

declare interface DeleteIncrementalMigrationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMigrationRequest {
  /** 迁移任务ID */
  MigrateId: number;
}

declare interface DeleteMigrationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePublishSubscribeRequest {
  /** 发布订阅ID，可通过DescribePublishSubscribe接口获得 */
  PublishSubscribeId: number;
  /** 待删除的数据库的订阅发布关系集合 */
  DatabaseTupleSet: DatabaseTuple[];
}

declare interface DeletePublishSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRestoreTaskRequest {
  /** 实例ID */
  InstanceId: string;
  /** 回档任务记录ID集合，一次最多删除10条 */
  RestoreIds: number[];
}

declare interface DeleteRestoreTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountPrivilegeByDBRequest {
  /** 实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 数据库名称 */
  DBName: string;
  /** 数据库属于账号名称 */
  AccountName?: string;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
}

declare interface DescribeAccountPrivilegeByDBResponse {
  /** 账号总数量 */
  TotalCount?: number;
  /** 账号权限列表 */
  Accounts?: AccountPrivilege[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 账号名称 */
  Name?: string;
  /** createTime,updateTime,passTime" note:"排序字段，默认按照账号创建时间倒序 */
  OrderBy?: string;
  /** 排序规则（desc-降序，asc-升序），默认desc */
  OrderByType?: string;
}

declare interface DescribeAccountsResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 账户信息列表 */
  Accounts?: AccountDetail[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupByFlowIdRequest {
  /** 实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 创建备份流程ID，可通过 [CreateBackup](https://cloud.tencent.com/document/product/238/19946) 接口获取 */
  FlowId: string;
}

declare interface DescribeBackupByFlowIdResponse {
  /** 备份文件唯一标识，RestoreInstance接口会用到该字段，对于单库备份文件只返回第一条记录的备份文件唯一标识；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的可回档的ID */
  Id?: number;
  /** 文件名，对于单库备份文件只返回第一条记录的文件名；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的文件名 */
  FileName?: string;
  /** 备份任务名称，可自定义 */
  BackupName?: string;
  /** 备份开始时间 */
  StartTime?: string;
  /** 备份结束时间 */
  EndTime?: string;
  /** 文件大小，单位 KB，对于单库备份文件只返回第一条记录的文件大小；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的文件大小 */
  Size?: number;
  /** 备份策略，0-实例备份；1-多库备份；实例状态是0-创建中时，该字段为默认值0，无实际意义 */
  Strategy?: number;
  /** 备份文件状态，0-创建中；1-成功；2-失败 */
  Status?: number;
  /** 备份方式，0-定时备份；1-手动临时备份；实例状态是0-创建中时，该字段为默认值0，无实际意义 */
  BackupWay?: number;
  /** DB列表，对于单库备份文件只返回第一条记录包含的库名；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的库名。 */
  DBs?: string[];
  /** 内网下载地址，对于单库备份文件只返回第一条记录的内网下载地址；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的下载地址 */
  InternalAddr?: string;
  /** 外网下载地址，对于单库备份文件只返回第一条记录的外网下载地址；单库备份文件需要通过DescribeBackupFiles接口获取全部记录的下载地址 */
  ExternalAddr?: string;
  /** 聚合Id，对于打包备份文件不返回此值。通过此值调用DescribeBackupFiles接口，获取单库备份文件的详细信息 */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupCommandRequest {
  /** 备份文件类型，FULL-全量备份，FULL_LOG-全量备份需要日志增量，FULL_DIFF-全量备份需要差异增量，LOG-日志备份，DIFF-差异备份 */
  BackupFileType: string;
  /** 数据库名称 */
  DataBaseName: string;
  /** 是否需要恢复，NO-不需要，YES-需要 */
  IsRecovery: string;
  /** 备份文件保存的路径；如果不填则默认在D:\\ */
  LocalPath?: string;
}

declare interface DescribeBackupCommandResponse {
  /** 创建备份命令 */
  Command: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupFilesRequest {
  /** 实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 单库备份的聚合ID, 可通过接口DescribeBackups获取（不支持查询打包备份记录） */
  GroupId: string;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 按照备份的库名称筛选，不填则不筛选此项 */
  DatabaseName?: string;
  /** 列表项排序，目前只按照备份大小排序（desc-降序，asc-升序），默认desc */
  OrderBy?: string;
}

declare interface DescribeBackupFilesResponse {
  /** 备份总数量 */
  TotalCount?: number;
  /** 备份文件列表详情 */
  BackupFiles?: BackupFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupMigrationRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId?: string;
  /** 导入任务名称 */
  MigrationName?: string;
  /** 备份文件名称 */
  BackupFileName?: string;
  /** 导入任务状态集合 */
  StatusSet?: number[];
  /** 导入任务恢复类型，FULL,FULL_LOG,FULL_DIFF */
  RecoveryType?: string;
  /** COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，用户上传 */
  UploadType?: string;
  /** 分页，页大小，默认值：100 */
  Limit?: number;
  /** 分页，页数，默认值：0 */
  Offset?: number;
  /** 排序字段，name；createTime；startTime；endTime，默认按照createTime递增排序。 */
  OrderBy?: string;
  /** 排序方式，desc-递减排序，asc-递增排序。默认按照asc排序，且在OrderBy为有效值时，本参数有效 */
  OrderByType?: string;
}

declare interface DescribeBackupMigrationResponse {
  /** 迁移任务总数 */
  TotalCount: number;
  /** 迁移任务集合 */
  BackupMigrationSet: Migration[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupMonitorRequest {
  /** 备份空间使用详情开始时间 */
  StartTime: string;
  /** 备份空间使用详情结束时间 */
  EndTime: string;
  /** 备份趋势查询类型，local-本地备份，cross-跨地域备份 */
  Type?: string;
}

declare interface DescribeBackupMonitorResponse {
  /** 备份趋势图时间轴 */
  TimeStamp: string[];
  /** 免费备份空间 */
  FreeSpace: number[];
  /** 实际总备份空间 */
  ActualUsedSpace: number[];
  /** 日志备份空间 */
  LogBackupSpace: number[];
  /** 数据备份空间 */
  DataBackupSpace: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupStatisticalRequest {
  /** 分页返回，每页返回的数目，取值为1-100，默认值为100 */
  Limit: number;
  /** 分页返回，页编号，默认值为第0页。 */
  Offset: number;
  /** 一个或者多个实例ID。实例ID，格式如：mssql-si2823jyl。 */
  InstanceIdSet?: string[];
  /** 实例名称列表，模糊查询。 */
  InstanceNameSet?: string[];
  /** 排序字段，默认default，则按照备份空间降序。default 按照备份空间排序data 数据备份排序log 日志备份排序auto 自动备份排序manual 手动备份排序 */
  OrderBy?: string;
  /** 默认降序，[desc-降序，asc-升序]。 */
  OrderByType?: string;
}

declare interface DescribeBackupStatisticalResponse {
  /** 符合条件的实例总数。分页返回的话，这个值指的是所有符合条件的实例的个数，而非当前根据Limit和Offset值返回的实例个数。 */
  TotalCount: number;
  /** 实例列表。 */
  Items: SummaryDetailRes[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupSummaryRequest {
}

declare interface DescribeBackupSummaryResponse {
  /** 实际免费总空间，单位(KB)。 */
  FreeSpace: number;
  /** 备份实际使用空间，单位(KB)。 */
  ActualUsedSpace: number;
  /** 备份文件总个数。 */
  BackupFilesTotal: number;
  /** 备份占用收费空间，单位(KB)。 */
  BillingSpace: number;
  /** 数据备份使用空间，单位(KB)。 */
  DataBackupSpace: number;
  /** 数据备份文件总个数。 */
  DataBackupCount: number;
  /** 数据备份中手动备份使用空间，单位(KB)。 */
  ManualBackupSpace: number;
  /** 数据备份中手动备份文件总个数。 */
  ManualBackupCount: number;
  /** 数据备份中自动备份使用空间，单位(KB)。 */
  AutoBackupSpace: number;
  /** 数据备份中自动备份文件总个数。 */
  AutoBackupCount: number;
  /** 日志备份使用空间，单位(KB)。 */
  LogBackupSpace: number;
  /** 日志备份文件总个数。 */
  LogBackupCount: number;
  /** 预估收费金额，单位（元/小时）。 */
  EstimatedAmount: number;
  /** 本地备份文件总个数 */
  LocalBackupFilesTotal: number;
  /** 跨地域备份文件总个数 */
  CrossBackupFilesTotal: number;
  /** 跨地域备份占用收费空间，单位（KB） */
  CrossBillingSpace: number;
  /** 跨地域自动数据备份使用空间，单位（KB） */
  CrossAutoBackupSpace: number;
  /** 跨地域自动数据备份文件总个数 */
  CrossAutoBackupCount: number;
  /** 本地日志备份使用空间，单位（KB） */
  LocalLogBackupSpace: number;
  /** 本地日志备份文件总个数 */
  LocalLogBackupCount: number;
  /** 跨地域日志备份使用空间，单位（KB） */
  CrossLogBackupSpace: number;
  /** 跨地域日志备份文件总个数 */
  CrossLogBackupCount: number;
  /** 跨地域备份预估收费金额，单位（元/小时） */
  CrossEstimatedAmount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupUploadSizeRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 增量导入任务ID */
  IncrementalMigrationId?: string;
}

declare interface DescribeBackupUploadSizeResponse {
  /** 已上传的备份的信息 */
  CosUploadBackupFileSet?: CosUploadBackupFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupsRequest {
  /** 开始时间(yyyy-MM-dd HH:mm:ss) */
  StartTime: string;
  /** 结束时间(yyyy-MM-dd HH:mm:ss) */
  EndTime: string;
  /** 实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 按照备份名称筛选，不填则不筛选此项 */
  BackupName?: string;
  /** 按照备份策略筛选，0-实例备份，1-多库备份，不填则不筛选此项 */
  Strategy?: number;
  /** 按照备份方式筛选，0-后台自动定时备份，1-用户手动临时备份，2-定期备份，不填则不筛选此项 */
  BackupWay?: number;
  /** 按照备份ID筛选，不填则不筛选此项 */
  BackupId?: number;
  /** 按照备份的库名称筛选，不填则不筛选此项 */
  DatabaseName?: string;
  /** 是否分组查询，默认是0，单库备份情况下 0-兼容老方式不分组，1-单库备份分组后展示 */
  Group?: number;
  /** 备份类型，1-数据备份，2-日志备份，默认值为1 */
  Type?: number;
  /** 按照备份文件形式筛选，pkg-打包备份文件，single-单库备份文件 */
  BackupFormat?: string;
  /** 备份存储策略 0-跟随自定义备份保留策略 1-跟随实例生命周期直到实例下线，默认取值0 */
  StorageStrategy?: number;
}

declare interface DescribeBackupsResponse {
  /** 备份总数量 */
  TotalCount?: number;
  /** 备份列表详情 */
  Backups?: Backup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBusinessIntelligenceFileRequest {
  /** 实例ID */
  InstanceId: string;
  /** 文件名称 */
  FileName?: string;
  /** 迁移任务状态集合,1-初始化待部署 2-部署中 3-部署成功 4-部署失败 */
  StatusSet?: number[];
  /** 文件类型 FLAT-平面文件，SSIS商业智能服务项目文件 */
  FileType?: string;
  /** 分页，页大小，范围1-100 */
  Limit?: number;
  /** 分页,页数，默认0 */
  Offset?: number;
  /** 排序字段，可选值file_name,create_time,start_time */
  OrderBy?: string;
  /** 排序方式，desc,asc */
  OrderByType?: string;
}

declare interface DescribeBusinessIntelligenceFileResponse {
  /** 文件部署任务总数 */
  TotalCount?: number;
  /** 文件部署任务集合 */
  BackupMigrationSet?: BusinessIntelligenceFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCollationTimeZoneRequest {
  /** 购买实例的宿主机类型，PM-物理机, CLOUD_PREMIUM-云服务器高性能云盘，CLOUD_SSD-云服务器SSD云盘,CLOUD_HSSD-云服务器加强型SSD云盘，CLOUD_TSSD-云服务器极速型SSD云盘，CLOUD_BSSD-云服务器通用型SSD云盘,CLOUD_BASIC-云服务器云硬盘，默认取值PM */
  MachineType?: string;
  /** 购买实例版本号 */
  DBVersion?: string;
}

declare interface DescribeCollationTimeZoneResponse {
  /** 系统字符集排序规则列表 */
  Collation?: string[];
  /** 系统时区列表 */
  TimeZone?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossBackupStatisticalRequest {
  /** 分页,页数 */
  Offset: number;
  /** 分页，页大小 */
  Limit: number;
  /** 实例ID列表 */
  InstanceIdSet?: string[];
  /** 实例名称列表 */
  InstanceNameSet?: string[];
  /** 跨地域备份状态，enable-开启，disable-关闭 */
  CrossBackupStatus?: string;
  /** 跨地域备份目标地域 */
  CrossRegion?: string;
  /** 排序字段，默认default-按照备份空间降序排序，data-按照数据备份排序，log-按照日志备份培训 */
  OrderBy?: string;
  /** 排序规则（desc-降序，asc-升序），默认desc */
  OrderByType?: string;
}

declare interface DescribeCrossBackupStatisticalResponse {
  /** 跨地域备份概览实时统计总条数 */
  TotalCount: number;
  /** 跨地域备份概览实时统计列表 */
  Items: CrossSummaryDetailRes[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossRegionZoneRequest {
  /** 实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
}

declare interface DescribeCrossRegionZoneResponse {
  /** 备机所在地域的字符串ID，形如：ap-guangzhou */
  Region: string;
  /** 备机所在可用区的字符串ID，形如：ap-guangzhou-1 */
  Zone: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossRegionsRequest {
}

declare interface DescribeCrossRegionsResponse {
  /** 支持跨地域备份的目标地域集合 */
  Regions: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCharsetsRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
}

declare interface DescribeDBCharsetsResponse {
  /** 数据库字符集列表 */
  DatabaseCharsets: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceInterRequest {
  /** 分页，页大小，范围是1-100 */
  Limit: number;
  /** 按照实例ID筛选 */
  InstanceId?: string;
  /** 按照状态筛选 1-互通IP打开中；2-互通IP已经打开；3-加入到互通组中；4-已加入到互通组；5-互通IP回收中；6-互通IP已回收；7-从互通组移除中；8-已从互通组中移除 */
  Status?: number;
  /** 实例版本代号列表 */
  VersionSet?: string[];
  /** 实例所在可用区，格式如：ap-guangzhou-2 */
  Zone?: string;
  /** 分页，页数，默认是0 */
  Offset?: number;
}

declare interface DescribeDBInstanceInterResponse {
  /** 互通组内总条数 */
  TotalCount?: number;
  /** 互通组内实例信息详情 */
  InterInstanceSet?: InterInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesAttributeRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDBInstancesAttributeResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 定期备份状态 enable-开启，disable-关闭 */
  RegularBackupEnable?: string;
  /** 定期备份保留天数 [90 - 3650]天 */
  RegularBackupSaveDays?: number;
  /** 定期备份策略 years-每年，quarters-每季度，months-每月 */
  RegularBackupStrategy?: string;
  /** 定期备份保留个数 */
  RegularBackupCounts?: number;
  /** 定期备份开始日期，格式-YYYY-MM-DD 默认当前日期 */
  RegularBackupStartTime?: string;
  /** 阻塞进程阈值，单位毫秒 */
  BlockedThreshold?: number;
  /** 慢SQL、阻塞、死锁扩展事件文件保留时长 */
  EventSaveDays?: number;
  /** TDE透明数据加密配置 */
  TDEConfig?: TDEConfigAttribute;
  /** SSL加密 */
  SSLConfig?: SSLConfig;
  /** 备机只读信息 */
  DrReadableInfo?: DrReadableInfo;
  /** 等待回收的IP列表 */
  OldVipList?: OldVip[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 项目ID */
  ProjectId?: number;
  /** 实例状态。取值范围：1：申请中2：运行中3：受限运行中 (主备切换中)4：已隔离5：回收中6：已回收7：任务执行中 (实例做备份、回档等操作)8：已下线9：实例扩容中10：实例迁移中11：只读12：重启中 */
  Status?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为100 */
  Limit?: number;
  /** 一个或者多个实例ID。实例ID，格式如：mssql-si2823jyl */
  InstanceIdSet?: string[];
  /** 付费类型检索 1-包年包月，0-按量计费 */
  PayMode?: number;
  /** 实例所属VPC的唯一字符串ID，格式如：vpc-xxx，传空字符串(“”)则按照基础网络筛选。 */
  VpcId?: string;
  /** 实例所属子网的唯一字符串ID，格式如： subnet-xxx，传空字符串(“”)则按照基础网络筛选。 */
  SubnetId?: string;
  /** 实例内网地址列表，格式如：172.1.0.12 */
  VipSet?: string[];
  /** 实例名称列表，模糊查询 */
  InstanceNameSet?: string[];
  /** 实例版本代号列表，格式如：2008R2，2012SP3等 */
  VersionSet?: string[];
  /** 实例可用区，格式如：ap-guangzhou-2 */
  Zone?: string;
  /** 实例标签列表 */
  TagKeys?: string[];
  /** 模糊查询关键字，支持实例id、实例名、内网ip */
  SearchKey?: string;
  /** 实例唯一Uid列表 */
  UidSet?: string[];
  /** 实例类型 HA-高可用 RO-只读实例 SI-基础版 BI-商业智能服务 */
  InstanceType?: string;
  /** 分页查询方式 offset-按照偏移量分页查询，pageNumber-按照页数分页查询，默认取值pageNumber */
  PaginationType?: string;
}

declare interface DescribeDBInstancesResponse {
  /** 符合条件的实例总数。分页返回的话，这个值指的是所有符合条件的实例的个数，而非当前根据Limit和Offset值返回的实例个数 */
  TotalCount?: number;
  /** 实例列表 */
  DBInstances?: DBInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBPrivilegeByAccountRequest {
  /** 实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 账号名称 */
  AccountName: string;
  /** 账号关联的数据库名称 */
  DBName?: string;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
}

declare interface DescribeDBPrivilegeByAccountResponse {
  /** 数据总库数量 */
  TotalCount?: number;
  /** 数据库权限列表 */
  DBList?: DBPrivilege[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBRestoreTimeRequest {
  /** 原实例ID */
  InstanceId: string;
  /** 回档的目标实例ID，不填则回档到原实例ID */
  TargetInstanceId?: string;
  /** 按时间点查询可回档数据库，时间格式 YYYY-MM-DD HH:MM:SS。BackupId，Time二选一，不能同时为空 */
  Time?: string;
  /** 按备份集ID查询可回档数据库，可通过DescribeBackups接口获取。BackupId，Time二选一不能同时为空 */
  BackupId?: number;
  /** 数据库名称 */
  DBName?: string;
}

declare interface DescribeDBRestoreTimeResponse {
  /** 可回档数据库总数量 */
  TotalCount?: number;
  /** 可回档数据库列表 */
  Details?: DBRenameRes[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 实例ID，格式如：mssql-c1nl9rpv或者mssqlro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组详情。 */
  SecurityGroupSet: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBsNormalRequest {
  /** 实例ID，形如mssql-7vfv3rk3 */
  InstanceId: string;
}

declare interface DescribeDBsNormalResponse {
  /** 表示当前实例下的数据库总个数 */
  TotalCount?: number;
  /** 返回数据库的详细配置信息，例如：数据库是否开启CDC、CT等 */
  DBList?: DbNormalDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBsRequest {
  /** 实例ID */
  InstanceIdSet: string[];
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 数据库名称 */
  Name?: string;
  /** 排序规则（desc-降序，asc-升序），默认desc */
  OrderByType?: string;
  /** 是否已开启TDE加密，enable-已加密，disable-未加密 */
  Encryption?: string;
}

declare interface DescribeDBsResponse {
  /** 数据库数量 */
  TotalCount?: number;
  /** 实例数据库列表 */
  DBInstances?: InstanceDBDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseNamesRequest {
  /** 实例ID，形如mssql-rljoi3bf */
  InstanceId: string;
  /** 账户名称 */
  AccountName: string;
}

declare interface DescribeDatabaseNamesResponse {
  /** 账户关联的数据库总数 */
  TotalCount: number;
  /** 数据库名称集合 */
  DatabaseNameSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesNormalRequest {
  /** 实例ID，形如mssql-7vfv3rk3 */
  InstanceId: string;
}

declare interface DescribeDatabasesNormalResponse {
  /** 表示当前实例下的数据库总个数 */
  TotalCount?: number;
  /** 返回数据库的详细配置信息，例如：数据库是否开启CDC、CT等 */
  DBList?: DbNormalDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesRequest {
  /** 实例ID */
  InstanceIdSet: string[];
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 数据库名称 */
  Name?: string;
  /** 排序规则（desc-降序，asc-升序），默认desc */
  OrderByType?: string;
  /** 是否已开启TDE加密，enable-已加密，disable-未加密 */
  Encryption?: string;
}

declare interface DescribeDatabasesResponse {
  /** 数据库数量 */
  TotalCount?: number;
  /** 实例数据库列表 */
  DBInstances?: InstanceDBDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowStatusRequest {
  /** 流程ID */
  FlowId: number;
}

declare interface DescribeFlowStatusResponse {
  /** 流程状态，0：成功，1：失败，2：运行中 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHASwitchLogRequest {
  /** 实例ID */
  InstanceId: string;
  /** 开始时间(yyyy-MM-dd HH:mm:ss) */
  StartTime: string;
  /** 结束时间(yyyy-MM-dd HH:mm:ss) */
  EndTime: string;
  /** 切换模式 0-系统自动切换，1-手动切换，不填默认查全部。 */
  SwitchType?: number;
  /** 分页，页大小 */
  Limit?: number;
  /** 分页,页数 */
  Offset?: number;
}

declare interface DescribeHASwitchLogResponse {
  /** 日志总数量 */
  TotalCount?: number;
  /** 主备切换日志 */
  SwitchLog?: SwitchLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIncrementalMigrationRequest {
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份文件名称 */
  BackupFileName?: string;
  /** 导入任务状态集合 */
  StatusSet?: number[];
  /** 分页，页大小，默认值：100 */
  Limit?: number;
  /** 分页，页数，默认值：0 */
  Offset?: number;
  /** 排序字段，name；createTime；startTime；endTime，默认按照createTime递增排序。 */
  OrderBy?: string;
  /** 排序方式，desc-递减排序，asc-递增排序。默认按照asc排序，且在OrderBy为有效值时，本参数有效 */
  OrderByType?: string;
  /** 增量备份导入任务ID，由CreateIncrementalMigration接口返回 */
  IncrementalMigrationId?: string;
}

declare interface DescribeIncrementalMigrationResponse {
  /** 增量导入任务总数 */
  TotalCount: number;
  /** 增量导入任务集合 */
  IncrementalMigrationSet: Migration[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInquiryPriceParameterRequest {
  /** 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 内存大小，单位：GB */
  Memory: number;
  /** 实例容量大小，单位：GB。 */
  Storage: number;
  /** 购买实例的类型 HA-高可用型(包括双机高可用，alwaysOn集群)，RO-只读副本型，SI-单节点型,cvmHA-新版高可用,cvmRO-新版只读，MultiHA-多节点，cvmMultiHA-云盘多节点 */
  InstanceType: string;
  /** 计费类型，取值支持 PREPAID，POSTPAID。 */
  InstanceChargeType?: string;
  /** 预购买实例的CPU核心数 */
  Cpu?: number;
  /** 购买时长，单位：月。取值为1到48，默认为1 */
  Period?: number;
  /** 一次性购买的实例数量。取值1-100，默认取值为1 */
  GoodsNum?: number;
  /** sqlserver版本，目前所有支持的版本有：2008R2 (SQL Server 2008 R2 Enterprise)，2012SP3 (SQL Server 2012 Enterprise)，201202 (SQL Server 2012 Standard)，2014SP2 (SQL Server 2014 Enterprise)，201402 (SQL Server 2014 Standard)，2016SP1 (SQL Server 2016 Enterprise)，201602 (SQL Server 2016 Standard)，2017 (SQL Server 2017 Enterprise)，201702 (SQL Server 2017 Standard)，2019 (SQL Server 2019 Enterprise)，201902 (SQL Server 2019 Standard)。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。 */
  DBVersion?: string;
  /** 购买实例的宿主机类型，PM-物理机, CLOUD_PREMIUM-云服务器高性能云盘，CLOUD_SSD-云服务器SSD云盘,CLOUD_HSSD-云服务器加强型SSD云盘，CLOUD_TSSD-云服务器极速型SSD云盘，CLOUD_BSSD-云服务器通用型SSD云盘 */
  MachineType?: string;
  /** 备节点可用区，默认为空。如果是多节点架构时必传，并且备机可用区集合最小为2个，最大不超过5个。 */
  DrZones?: string[];
}

declare interface DescribeInquiryPriceParameterResponse {
  /** 计费参数 */
  Parameter?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceByOrdersRequest {
  /** 订单号集合 */
  DealNames: string[];
}

declare interface DescribeInstanceByOrdersResponse {
  /** 资源ID集合 */
  DealInstance?: DealInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamRecordsRequest {
  /** 实例 ID，格式如：mssql-dj5i29c5n，与云数据库控制台页面中显示的实例 ID 相同，可使用 DescribeDBInstances 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
  /** 分页，页数，默认0 */
  Offset?: number;
  /** 分页，页大小，默认20，最大不超过100 */
  Limit?: number;
}

declare interface DescribeInstanceParamRecordsResponse {
  /** 符合条件的记录数 */
  TotalCount: number;
  /** 参数修改记录 */
  Items: ParamRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamsRequest {
  /** 实例 ID，格式如：mssql-dj5i29c5n，与云数据库控制台页面中显示的实例 ID 相同，可使用 DescribeDBInstances 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
}

declare interface DescribeInstanceParamsResponse {
  /** 实例的参数总数 */
  TotalCount: number;
  /** 参数详情 */
  Items: ParameterDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceTasksRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 分页大小 */
  Limit: number;
  /** 异步任务状态 1-运行中，2-运行成功，3-运行失败 */
  Status?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeInstanceTasksResponse {
  /** 异步任务总条数 */
  TotalCount: number;
  /** 异步任务信息数组 */
  InstanceTaskSet: InstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceTradeParameterRequest {
  /** 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取 */
  Zone: string;
  /** 实例核心数 */
  Cpu: number;
  /** 实例内存大小，单位GB */
  Memory: number;
  /** 实例磁盘大小，单位GB */
  Storage: number;
  /** 购买实例的类型 HA-高可用型(包括双机高可用，alwaysOn集群)，RO-只读副本型，SI-单节点型,BI-商业智能服务,cvmHA-新版高可用,cvmRO-新版只读，MultiHA-多节点，cvmMultiHA-云盘多节点 */
  InstanceType: string;
  /** 购买实例的宿主机磁盘类型,CLOUD_HSSD-云服务器加强型SSD云盘，CLOUD_TSSD-云服务器极速型SSD云盘，CLOUD_BSSD-云服务器通用型SSD云盘 */
  MachineType: string;
  /** 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。 */
  InstanceChargeType?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 本次购买几个实例，默认值为1。取值不超过10 */
  GoodsNum?: number;
  /** sqlserver版本，目前所有支持的版本有：2008R2 (SQL Server 2008 R2 Enterprise)，2012SP3 (SQL Server 2012 Enterprise)，201202 (SQL Server 2012 Standard)，2014SP2 (SQL Server 2014 Enterprise)，201402 (SQL Server 2014 Standard)，2016SP1 (SQL Server 2016 Enterprise)，201602 (SQL Server 2016 Standard)，2017 (SQL Server 2017 Enterprise)，201702 (SQL Server 2017 Standard)，2019 (SQL Server 2019 Enterprise)，201902 (SQL Server 2019 Standard)。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。 */
  DBVersion?: string;
  /** VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置 */
  SubnetId?: string;
  /** VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置 */
  VpcId?: string;
  /** 购买实例周期，默认取值为1，表示一个月。取值不超过48 */
  Period?: number;
  /** 安全组列表，填写形如sg-xxx的安全组ID */
  SecurityGroupList?: string[];
  /** 自动续费标志：0-正常续费 1-自动续费，默认为1自动续费。只在购买预付费实例时有效。 */
  AutoRenewFlag?: number;
  /** 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末 */
  Weekly?: number[];
  /** 可维护时间窗配置，每天可维护的开始时间 */
  StartTime?: string;
  /** 可维护时间窗配置，持续时间，单位：小时 */
  Span?: number;
  /** 是否跨可用区部署，默认值为false */
  MultiZones?: boolean;
  /** 新建实例绑定的标签集合 */
  ResourceTags?: ResourceTag[];
  /** 系统时区，默认：China Standard Time */
  TimeZone?: string;
  /** 系统字符集排序规则，默认：Chinese_PRC_CI_AS */
  Collation?: string;
  /** 是否多节点架构，默认值为false */
  MultiNodes?: boolean;
  /** 备节点可用区，默认为空。如果是多节点架构时必传，并且当MultiZones=true时备节点可用区不能全部相同。备机可用区集合最小为2个，最大不超过5个。 */
  DrZones?: string[];
}

declare interface DescribeInstanceTradeParameterResponse {
  /** 计费参数 */
  Parameter?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMaintenanceSpanRequest {
  /** 实例ID，形如mssql-k8voqdlz */
  InstanceId: string;
}

declare interface DescribeMaintenanceSpanResponse {
  /** 以周为单位，表示周几允许维护，例如：[1,2,3,4,5,6,7]表示周一到周日均为可维护日。 */
  Weekly: number[];
  /** 每天可维护的开始时间，例如：10:24标识可维护时间窗10点24分开始。 */
  StartTime: string;
  /** 每天可维护的持续时间，单位是h，例如：1 表示从可维护的开始时间起持续1小时。 */
  Span: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationDatabasesRequest {
  /** 迁移源实例的ID，格式如：mssql-si2823jyl */
  InstanceId: string;
  /** 迁移源实例用户名 */
  UserName: string;
  /** 迁移源实例密码 */
  Password: string;
}

declare interface DescribeMigrationDatabasesResponse {
  /** 数据库数量 */
  Amount?: number;
  /** 数据库名称数组 */
  MigrateDBSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationDetailRequest {
  /** 迁移任务ID */
  MigrateId: number;
}

declare interface DescribeMigrationDetailResponse {
  /** 迁移任务ID */
  MigrateId: number;
  /** 迁移任务名称 */
  MigrateName: string;
  /** 迁移任务所属的用户ID */
  AppId: number;
  /** 迁移任务所属的地域 */
  Region: string;
  /** 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式） */
  SourceType: number;
  /** 迁移任务的创建时间 */
  CreateTime: string;
  /** 迁移任务的开始时间 */
  StartTime: string;
  /** 迁移任务的结束时间 */
  EndTime: string;
  /** 迁移任务的状态（1:初始化,4:迁移中,5.迁移失败,6.迁移成功） */
  Status: number;
  /** 迁移任务当前进度 */
  Progress: number;
  /** 迁移类型（1:结构迁移 2:数据迁移 3:增量同步） */
  MigrateType: number;
  /** 迁移源 */
  Source: MigrateSource;
  /** 迁移目标 */
  Target: MigrateTarget;
  /** 迁移DB对象 ，离线迁移（SourceType=4或SourceType=5）不使用。 */
  MigrateDBSet: MigrateDB[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationsRequest {
  /** 状态集合。只要符合集合中某一状态的迁移任务，就会查出来 */
  StatusSet?: number[];
  /** 迁移任务的名称，模糊匹配 */
  MigrateName?: string;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为100 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 查询结果按照关键字排序，可选值为name、createTime、startTime，endTime，status */
  OrderBy?: string;
  /** 排序方式，可选值为desc、asc */
  OrderByType?: string;
}

declare interface DescribeMigrationsResponse {
  /** 查询结果的总数 */
  TotalCount?: number;
  /** 查询结果的列表 */
  MigrateTaskSet?: MigrateTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrdersRequest {
  /** 订单数组。发货时会返回订单名字，利用该订单名字调用DescribeOrders接口查询发货情况 */
  DealNames: string[];
}

declare interface DescribeOrdersResponse {
  /** 订单信息数组 */
  Deals: DealInfo[];
  /** 返回多少个订单的信息 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductConfigRequest {
  /** 可用区英文ID，形如ap-guangzhou-1 */
  Zone: string;
  /** 购买实例的类型 HA-本地盘高可用(包括双机高可用，alwaysOn集群)，RO-本地盘只读副本，SI-云盘版单节点,BI-商业智能服务，cvmHA-云盘版高可用，cvmRO-云盘版只读副本，MultiHA-多节点，cvmMultiHA-云盘多节点 */
  InstanceType?: string;
}

declare interface DescribeProductConfigResponse {
  /** 规格信息数组 */
  SpecInfoList?: SpecInfo[];
  /** 返回总共多少条数据 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductSpecRequest {
}

declare interface DescribeProductSpecResponse {
  /** 配置地域分的个数 */
  TotalCount?: number;
  /** 规格信息数组 */
  SpecInfoList?: ProductSpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 项目ID，可通过控制台项目管理中查看 */
  ProjectId: number;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组详情。 */
  SecurityGroupSet: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublishSubscribeRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 订阅/发布实例ID，与InstanceId是发布实例还是订阅实例有关；当InstanceId为发布实例时，本字段按照订阅实例ID做筛选；当InstanceId为订阅实例时，本字段按照发布实例ID做筛选； */
  PubOrSubInstanceId?: string;
  /** 订阅/发布实例内网IP，与InstanceId是发布实例还是订阅实例有关；当InstanceId为发布实例时，本字段按照订阅实例内网IP做筛选；当InstanceId为订阅实例时，本字段按照发布实例内网IP做筛选； */
  PubOrSubInstanceIp?: string;
  /** 订阅发布ID，用于筛选 */
  PublishSubscribeId?: number;
  /** 订阅发布名字，用于筛选 */
  PublishSubscribeName?: string;
  /** 发布库名字，用于筛选 */
  PublishDBName?: string;
  /** 订阅库名字，用于筛选 */
  SubscribeDBName?: string;
  /** 分页，页数 */
  Offset?: number;
  /** 分页，页大小 */
  Limit?: number;
}

declare interface DescribePublishSubscribeResponse {
  /** 总数 */
  TotalCount: number;
  /** 发布订阅列表 */
  PublishSubscribeSet: PublishSubscribe[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReadOnlyGroupAutoWeightRequest {
  /** 主实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 只读组ID，格式如：mssqlro-3l3fgqn7 */
  ReadOnlyGroupId: string;
}

declare interface DescribeReadOnlyGroupAutoWeightResponse {
  /** 只读组ID，格式如：mssqlro-3l3fgqn7 */
  ReadOnlyGroupId: string;
  /** 只读组名称 */
  ReadOnlyGroupName: string;
  /** 只读组的地域ID，与主实例相同 */
  RegionId: string;
  /** 只读组的可用区，与主实例相同 */
  ZoneId: string;
  /** 是否启动超时剔除功能，1-开启，0-不开启 */
  IsOfflineDelay: number;
  /** 启动超时剔除功能后，使用的超时阈值(秒) */
  ReadOnlyMaxDelayTime: number;
  /** 启动超时剔除功能后，至少只读组保留的只读副本数 */
  MinReadOnlyInGroup: number;
  /** 只读组vip */
  Vip: string;
  /** 只读组vport */
  Vport: number;
  /** 只读组在私有网络ID */
  VpcId: string;
  /** 只读组在私有网络子网ID */
  SubnetId: string;
  /** 只读实例副本集合 */
  ReadOnlyInstanceSet: ReadOnlyInstance[];
  /** 只读组状态: 1-申请成功运行中，5-申请中 */
  Status: number;
  /** 主实例ID，形如mssql-sgeshe3th */
  MasterInstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReadOnlyGroupByReadOnlyInstanceRequest {
  /** 实例ID，格式如：mssqlro-3l3fgqn7 */
  InstanceId: string;
}

declare interface DescribeReadOnlyGroupByReadOnlyInstanceResponse {
  /** 只读组ID */
  ReadOnlyGroupId: string;
  /** 只读组名称 */
  ReadOnlyGroupName: string;
  /** 只读组的地域ID */
  RegionId: string;
  /** 只读组的可用区ID */
  ZoneId: string;
  /** 是否启动超时剔除功能 ,0-不开启剔除功能，1-开启剔除功能 */
  IsOfflineDelay: number;
  /** 启动超时剔除功能后，使用的超时阈值，单位是秒 */
  ReadOnlyMaxDelayTime: number;
  /** 启动超时剔除功能后，只读组至少保留的只读副本数 */
  MinReadOnlyInGroup: number;
  /** 只读组vip */
  Vip: string;
  /** 只读组vport */
  Vport: number;
  /** 只读组在私有网络ID */
  VpcId: string;
  /** 只读组在私有网络子网ID */
  SubnetId: string;
  /** 主实例ID，形如mssql-sgeshe3th */
  MasterInstanceId: string;
  /** 主实例的地域ID */
  MasterRegionId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReadOnlyGroupDetailsRequest {
  /** 主实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 只读组ID，格式如：mssqlrg-3l3fgqn7 */
  ReadOnlyGroupId: string;
}

declare interface DescribeReadOnlyGroupDetailsResponse {
  /** 只读组ID */
  ReadOnlyGroupId: string;
  /** 只读组名称 */
  ReadOnlyGroupName: string;
  /** 只读组的地域ID，与主实例相同 */
  RegionId: string;
  /** 只读组的可用区ID，与主实例相同 */
  ZoneId: string;
  /** 是否启动超时剔除功能，0-不开启剔除功能，1-开启剔除功能 */
  IsOfflineDelay: number;
  /** 启动超时剔除功能后，使用的超时阈值 */
  ReadOnlyMaxDelayTime: number;
  /** 启动超时剔除功能后，至少只读组保留的只读副本数 */
  MinReadOnlyInGroup: number;
  /** 只读组vip */
  Vip: string;
  /** 只读组vport */
  Vport: number;
  /** 只读组私有网络ID */
  VpcId: string;
  /** 只读组私有网络子网ID */
  SubnetId: string;
  /** 只读实例副本集合 */
  ReadOnlyInstanceSet: ReadOnlyInstance[];
  /** 只读组状态: 1-申请成功运行中，5-申请中 */
  Status: number;
  /** 主实例ID，形如mssql-sgeshe3th */
  MasterInstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReadOnlyGroupListRequest {
  /** 主实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
}

declare interface DescribeReadOnlyGroupListResponse {
  /** 只读组列表 */
  ReadOnlyGroupSet: ReadOnlyGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 返回地域信息总的条目 */
  TotalCount?: number;
  /** 地域信息数组 */
  RegionSet?: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegularBackupPlanRequest {
  /** 实例ID */
  InstanceId: string;
  /** 定期备份保留天数 [90 - 3650]天，默认365天 */
  RegularBackupSaveDays: number;
  /** 定期备份策略 years-每年，quarters-每季度，months-每月，默认months */
  RegularBackupStrategy: string;
  /** 定期备份保留个数，默认1个 */
  RegularBackupCounts: number;
  /** 定期备份开始日期，格式-YYYY-MM-DD 默认当前日期 */
  RegularBackupStartTime: string;
  /** 常规备份周期 */
  BackupCycle: number[];
}

declare interface DescribeRegularBackupPlanResponse {
  /** 常规备份计划 */
  SaveModePeriod: string[];
  /** 定期备份计划 */
  SaveModeRegular: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRestoreTaskRequest {
  /** 源实例ID */
  InstanceId: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 回档方式，0-按照时间点回档，1-按照备份集回档 */
  RestoreType?: number;
  /** 回档的目标实例所在地域 */
  TargetRegion?: string;
  /** 回档到目标实例的类型，0-当前实例，1-已有实例，2-全新实例 */
  TargetType?: number;
  /** 回档状态，0-初始化，1-运行中，2-成功，3-失败 */
  Status?: number;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Offset?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Limit?: number;
  /** 排序字段，restoreTime-回档时间，startTime-任务开始时间，endTime-任务结束时间，默认按照任务开始时间降序 */
  OrderBy?: string;
  /** 排序规则（desc-降序，asc-升序），默认desc */
  OrderByType?: string;
  /** 回档异步任务ID */
  FlowId?: number;
}

declare interface DescribeRestoreTaskResponse {
  /** 回档任务总数量 */
  TotalCount?: number;
  /** 回档任务记录列表 */
  Tasks?: RestoreTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRestoreTimeRangeRequest {
  /** 实例ID */
  InstanceId: string;
  /** 回档的目标实例ID，不填默认回档到原实例 */
  TargetInstanceId?: string;
}

declare interface DescribeRestoreTimeRangeResponse {
  /** 按照时间点可回档的最小时间 */
  MinTime?: string;
  /** 按照时间点可回档的最大时间 */
  MaxTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRollbackTimeRequest {
  /** 实例ID */
  InstanceId: string;
  /** 需要查询的数据库列表 */
  DBs: string[];
}

declare interface DescribeRollbackTimeResponse {
  /** 数据库可回档实例信息 */
  Details: DbRollbackTimeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowlogsRequest {
  /** 实例ID，形如mssql-k8voqdlz */
  InstanceId: string;
  /** 开始时间(yyyy-MM-dd HH:mm:ss) */
  StartTime: string;
  /** 结束时间(yyyy-MM-dd HH:mm:ss) */
  EndTime: string;
  /** 分页返回，每页返回的数目，取值为1-100，默认值为20 */
  Limit?: number;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
}

declare interface DescribeSlowlogsResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 慢查询日志信息列表 */
  Slowlogs?: SlowlogInfo[];
  /** 慢查询日志信息列表 */
  SlowLogs?: SlowLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpecSellStatusRequest {
  /** 可用区英文ID，形如ap-guangzhou-3 */
  Zone: string;
  /** 实例规格ID，可通过DescribeProductConfig接口获取。 */
  SpecIdSet: number[];
  /** 数据库版本信息，可通过DescribeProductConfig接口获取。 */
  DBVersion: string;
  /** 产品ID，可通过DescribeProductConfig接口获取。 */
  Pid: number;
  /** 付费模式，POST-按量计费 PRE-包年包月 */
  PayMode: string;
  /** 付费模式，CNY-人民币 USD-美元 */
  Currency: string;
}

declare interface DescribeSpecSellStatusResponse {
  /** 规格在不同地域状态集合 */
  DescribeSpecSellStatusSet?: SpecSellStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUpgradeInstanceCheckRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 实例变配后的CPU核心数，不填则不修改 */
  Cpu?: number;
  /** 实例变配后内存大小，单位GB，不填则不修改 */
  Memory?: number;
  /** 实例变配后磁盘大小，单位GB，不填则不修改 */
  Storage?: number;
  /** 实例版本，不填则不修改 */
  DBVersion?: string;
  /** 实例变配后的类型，可选值：CLUSTER-集群，不填则不修改 */
  HAType?: string;
  /** 实例变配后的跨可用区类型，可选值： SameZones-修改为同可用区 MultiZones-修改为跨可用区，不填则不修改 */
  MultiZones?: string;
  /** 多节点架构实例的备节点可用区，默认为空。如果需要在变配的同时修改指定备节点的可用区时必传，当MultiZones = MultiZones时主节点和备节点可用区不能全部相同。备机可用区集合最小为2个，最大不超过5个。 */
  DrZones?: DrZoneInfo[];
}

declare interface DescribeUpgradeInstanceCheckResponse {
  /** 本变配是否对实例有影响，0-没有影响 1-有影响 */
  IsAffect?: number;
  /** 本变配是否可以执行 0-不通过，不能变配 1-通过，可以变配 */
  Passed?: number;
  /** 本变配是升配还是降配，down-降配 up-升配 */
  ModifyMode?: string;
  /** 检查项列表 */
  CheckItems?: CheckItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUploadBackupInfoRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
}

declare interface DescribeUploadBackupInfoResponse {
  /** 存储桶名称 */
  BucketName?: string;
  /** 存储桶地域信息 */
  Region?: string;
  /** 存储路径 */
  Path?: string;
  /** 临时密钥ID */
  TmpSecretId?: string;
  /** 临时密钥Key */
  TmpSecretKey?: string;
  /** 临时密钥Token */
  XCosSecurityToken?: string;
  /** 临时密钥开始时间 */
  StartTime?: string;
  /** 临时密钥到期时间 */
  ExpiredTime?: string;
  /** 临时密钥Token */
  CosSecurityToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUploadIncrementalInfoRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 增量导入任务ID */
  IncrementalMigrationId: string;
}

declare interface DescribeUploadIncrementalInfoResponse {
  /** 存储桶名称 */
  BucketName?: string;
  /** 存储桶地域信息 */
  Region?: string;
  /** 存储路径 */
  Path?: string;
  /** 临时密钥ID */
  TmpSecretId?: string;
  /** 临时密钥Key */
  TmpSecretKey?: string;
  /** 临时密钥Token */
  XCosSecurityToken?: string;
  /** 临时密钥开始时间 */
  StartTime?: string;
  /** 临时密钥到期时间 */
  ExpiredTime?: string;
  /** 临时密钥Token */
  CosSecurityToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeXEventsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 事件类型，slow-慢SQL事件，blocked-阻塞事件，deadlock-死锁事件 */
  EventType: string;
  /** 扩展文件生成开始时间(yyyy-MM-dd HH:mm:ss) */
  StartTime: string;
  /** 扩展文件生成结束时间(yyyy-MM-dd HH:mm:ss) */
  EndTime: string;
  /** 分页返回，页编号，默认值为第0页 */
  Offset?: number;
  /** 分页返回，每页返回的数目，取值为1~100，默认值为20 */
  Limit?: number;
}

declare interface DescribeXEventsResponse {
  /** 扩展事件列表 */
  Events?: Events[];
  /** 扩展事件总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
}

declare interface DescribeZonesResponse {
  /** 返回多少个可用区信息 */
  TotalCount: number;
  /** 可用区数组 */
  ZoneSet: ZoneInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 安全组ID。 */
  SecurityGroupId: string;
  /** 实例ID 列表，一个或者多个实例ID组成的数组。多个实例必须是同一个地域，同一个可用区，同一个项目下的。 */
  InstanceIdSet: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateDBInstancesRequest {
  /** 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 内存大小，单位：GB */
  Memory: number;
  /** 实例容量大小，单位：GB。 */
  Storage: number;
  /** 计费类型，取值支持 PREPAID，POSTPAID。 */
  InstanceChargeType?: string;
  /** 购买时长，单位：月。取值为1到48，默认为1 */
  Period?: number;
  /** 一次性购买的实例数量。取值1-100，默认取值为1 */
  GoodsNum?: number;
  /** sqlserver版本，目前所有支持的版本有：2008R2 (SQL Server 2008 R2 Enterprise)，2012SP3 (SQL Server 2012 Enterprise)，201202 (SQL Server 2012 Standard)，2014SP2 (SQL Server 2014 Enterprise)，201402 (SQL Server 2014 Standard)，2016SP1 (SQL Server 2016 Enterprise)，201602 (SQL Server 2016 Standard)，2017 (SQL Server 2017 Enterprise)，201702 (SQL Server 2017 Standard)，2019 (SQL Server 2019 Enterprise)，201902 (SQL Server 2019 Standard)。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。 */
  DBVersion?: string;
  /** 预购买实例的CPU核心数 */
  Cpu?: number;
  /** 购买实例的类型 HA-高可用型(包括双机高可用，alwaysOn集群)，RO-只读副本型，SI-单节点型,cvmHA-虚拟机双机高可用,cvmRO-虚拟机只读，MultiHA-多节点，cvmMultiHA-云盘 */
  InstanceType?: string;
  /** 购买实例的宿主机类型，PM-物理机, CLOUD_PREMIUM-虚拟机高性能云盘，CLOUD_SSD-虚拟机SSD云盘,CLOUD_HSSD-虚拟机加强型SSD云盘，CLOUD_TSSD-虚拟机极速型SSD云盘，CLOUD_BSSD-虚拟机通用型SSD云盘 */
  MachineType?: string;
  /** 备节点可用区，默认为空。如果是多节点架构时必传，并且备机可用区集合最小为2个，最大不超过5个。 */
  DrZones?: string[];
}

declare interface InquiryPriceCreateDBInstancesResponse {
  /** 未打折前价格，其值除以100表示最终的价格。InstanceChargeType=PREPAID时，单位是"每月"。InstanceChargeType=POSTPAID时，单位是"每小时"。例如10010，在InstanceChargeType=PREPAID情况下，表示每月100.10元。 */
  OriginalPrice?: number;
  /** 实际需要支付的价格，其值除以100表示最终的价格。InstanceChargeType=PREPAID时，单位是"每月"。InstanceChargeType=POSTPAID时，单位是"每小时"。例如10010，在InstanceChargeType=PREPAID情况下，表示每月100.10元。 */
  Price?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewDBInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 续费周期。按月续费最多48个月。默认查询续费一个月的价格 */
  Period?: number;
  /** 续费周期单位。month表示按月续费，当前只支持按月付费查询价格 */
  TimeUnit?: string;
}

declare interface InquiryPriceRenewDBInstanceResponse {
  /** 未打折的原价，其值除以100表示最终的价格。例如10094表示100.94元 */
  OriginalPrice?: number;
  /** 实际需要支付价格，其值除以100表示最终的价格。例如10094表示100.94元 */
  Price?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceUpgradeDBInstanceRequest {
  /** 实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 实例升级后的内存大小，单位GB，其值不能比当前实例内存小 */
  Memory: number;
  /** 实例升级后的磁盘大小，单位GB，其值不能比当前实例磁盘小 */
  Storage: number;
  /** 实例升级后的CPU核心数，其值不能比当前实例CPU小 */
  Cpu?: number;
}

declare interface InquiryPriceUpgradeDBInstanceResponse {
  /** 未打折的原价，其值除以100表示最终的价格。例如10094表示100.94元 */
  OriginalPrice?: number;
  /** 实际需要支付价格，其值除以100表示最终的价格。例如10094表示100.94元 */
  Price?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountPrivilegeRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 账号权限变更信息 */
  Accounts: AccountPrivilegeModifyInfo[];
}

declare interface ModifyAccountPrivilegeResponse {
  /** 异步任务流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountRemarkRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 修改备注的账户信息 */
  Accounts: AccountRemark[];
}

declare interface ModifyAccountRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupMigrationRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 任务名称 */
  MigrationName?: string;
  /** 迁移任务恢复类型，FULL,FULL_LOG,FULL_DIFF */
  RecoveryType?: string;
  /** COS_URL-备份放在用户的对象存储上，提供URL。COS_UPLOAD-备份放在业务的对象存储上，用户上传 */
  UploadType?: string;
  /** UploadType是COS_URL时这里时URL，COS_UPLOAD这里填备份文件的名字；只支持1个备份文件，但1个备份文件内可包含多个库 */
  BackupFiles?: string[];
  /** 需要重命名的数据库名称集合 */
  DBRename?: RenameRestoreDatabase[];
}

declare interface ModifyBackupMigrationResponse {
  /** 备份导入任务ID */
  BackupMigrationId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupNameRequest {
  /** 实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 修改的备份名称 */
  BackupName: string;
  /** 备份ID 可通过 [DescribeBackups](https://cloud.tencent.com/document/product/238/19943) 接口获取。当GroupId为空时，BackupId必填。 */
  BackupId?: number;
  /** 备份任务组ID，在单库备份文件模式下，可通过[DescribeBackups](https://cloud.tencent.com/document/product/238/19943) 接口获得。 BackupId 和 GroupId 同时存在，按照BackupId进行修改。 */
  GroupId?: string;
}

declare interface ModifyBackupNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupStrategyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 备份类型，当length(BackupDay) <=7 && length(BackupDay) >=2时，取值为weekly，当length(BackupDay)=1时，取值daily，默认daily */
  BackupType?: string;
  /** 备份时间点，取值为0-23的整数 */
  BackupTime?: number;
  /** BackupType取值为daily时，表示备份间隔天数。当前取值只能为1 */
  BackupDay?: number;
  /** 备份模式（必填），master_pkg-主节点上打包备份文件；master_no_pkg-主节点单库备份文件；slave_pkg-从节点上打包备份文件；slave_no_pkg-从节点上单库备份文件，从节点上备份只有在always on容灾模式下支持。 */
  BackupModel?: string;
  /** BackupType取值为weekly时，表示每周的星期N做备份。（如果数据备份保留时间=7天，则备份周期取值至少是一周的任意2天） */
  BackupCycle?: number[];
  /** 数据(日志)备份保留天数（必填），取值[3-1830]天，默认7天 */
  BackupSaveDays?: number;
  /** 定期备份状态 enable-开启，disable-关闭，默认关闭 */
  RegularBackupEnable?: string;
  /** 定期备份保留天数 [90 - 3650]天，默认365天 */
  RegularBackupSaveDays?: number;
  /** 定期备份策略 years-每年，quarters-每季度，months-每月，默认months */
  RegularBackupStrategy?: string;
  /** 定期备份保留个数，默认1个 */
  RegularBackupCounts?: number;
  /** 定期备份开始日期，格式-YYYY-MM-DD 默认当前日期 */
  RegularBackupStartTime?: string;
}

declare interface ModifyBackupStrategyResponse {
  /** 返回错误码 */
  Errno?: number;
  /** 返回错误信息 */
  Msg?: string;
  /** 返回错误码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloseWanIpRequest {
  /** 实例资源ID */
  InstanceId: string;
  /** RO只读组Id */
  RoGroupId?: string;
}

declare interface ModifyCloseWanIpResponse {
  /** 关闭外网流程Id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCrossBackupStrategyRequest {
  /** 跨地域备份开关(数据备份&日志备份) enable-开启，disable-关闭 */
  CrossBackupEnabled: string;
  /** 实例Id */
  InstanceId?: string;
  /** 实例ID列表 */
  InstanceIdSet?: string[];
  /** 跨地域备份保留天数，取值：7~1830，默认7天 */
  CrossBackupSaveDays?: number;
  /** 跨地域备份的目标地域ID，最多两个，最少一个 */
  CrossBackupRegion?: string[];
  /** 是否立即清理跨地域备份(数据备份&日志备份) ，只有在BackupEnabled = disable时有效。1-是，0-否，默认：0 */
  CleanUpCrossBackup?: number;
}

declare interface ModifyCrossBackupStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBEncryptAttributesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 开启、关闭数据库TDE加密 */
  DBTDEEncrypt: DBTDEEncrypt[];
}

declare interface ModifyDBEncryptAttributesResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNameRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 新的数据库实例名字 */
  InstanceName: string;
}

declare interface ModifyDBInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNetworkRequest {
  /** 实例id */
  InstanceId: string;
  /** 新VPC网络Id */
  NewVpcId: string;
  /** 新子网Id */
  NewSubnetId: string;
  /** 原vip保留时长，单位小时，默认为0，代表立即回收，最大为168小时 */
  OldIpRetainTime?: number;
  /** 指定VIP地址 */
  Vip?: string;
  /** 目标节点，0-修改主节点网络，1-修改备节点网络，默认取值0 */
  DRNetwork?: number;
}

declare interface ModifyDBInstanceNetworkResponse {
  /** 实例转网流程id，可通过[DescribeFlowStatus](https://cloud.tencent.com/document/product/238/19967)接口查询流程状态 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNoteRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 实例备注信息 */
  InstanceNote: string;
}

declare interface ModifyDBInstanceNoteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceProjectRequest {
  /** 实例ID数组，形如mssql-j8kv137v */
  InstanceIdSet: string[];
  /** 项目ID，为0的话表示默认项目 */
  ProjectId: number;
}

declare interface ModifyDBInstanceProjectResponse {
  /** 修改成功的实例个数 */
  Count: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceRenewFlagRequest {
  /** 实例续费状态标记信息 */
  RenewFlags: InstanceRenewInfo[];
}

declare interface ModifyDBInstanceRenewFlagResponse {
  /** 修改成功的个数 */
  Count: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSSLRequest {
  /** 实例ID */
  InstanceId: string;
  /** 操作类型。enable-开启SSL，disable-关闭SSL，renew-更新证书有效期 */
  Type: string;
  /** 操作设置。0-立即执行，1- 维护时间内执行，默认取值0。 */
  WaitSwitch: number;
  /** 是否被KMS加密保护，0-表示否，1表示被KMS保护，默认取值0 */
  IsKMS?: number;
  /** IsKMS为1时必填 */
  KeyId?: string;
  /** IsKMS为1时必填 */
  KeyRegion?: string;
}

declare interface ModifyDBInstanceSSLResponse {
  /** 异步任务流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 实例 ID，格式如：mssql-c1nl9rpv 或者 mssqlro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIdSet: string[];
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBNameRequest {
  /** 实例ID */
  InstanceId: string;
  /** 旧数据库名 */
  OldDBName: string;
  /** 新数据库名 */
  NewDBName: string;
}

declare interface ModifyDBNameResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBRemarkRequest {
  /** 实例ID，形如mssql-rljoi3bf */
  InstanceId: string;
  /** 数据库名称及备注数组，每个元素包含数据库名和对应的备注 */
  DBRemarks: DBRemark[];
}

declare interface ModifyDBRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDReadableRequest {
  /** 实例ID */
  InstanceId: string;
  /** 操作类型。enable-开启备机只读，disable-关闭备机只读 */
  Type: string;
  /** 备机网络ID，不填默认和主实例保持一致 */
  VpcId?: string;
  /** 备机网络子网ID，不填默认和主实例保持一致 */
  SubnetId?: string;
  /** 指定的备机只读vip，不填自动分配。多节点SingleReadOnly模式不支持指定vip。 */
  Vip?: string;
  /** 备机只读模式，多节点架构默认取值BalancedReadOnly。SingleReadOnly-每个备机各对应一个只读地址（多节点架构），BalancedReadOnly-所有备机共用一个只读地址。当实例是双节点架构时，固定取值SingleReadOnly。 */
  ReadMode?: string;
}

declare interface ModifyDReadableResponse {
  /** 任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatabaseCDCRequest {
  /** 数据库名数组 */
  DBNames: string[];
  /** 开启、关闭数据库CDC功能 enable；开启，disable：关闭 */
  ModifyType: string;
  /** 实例ID */
  InstanceId: string;
}

declare interface ModifyDatabaseCDCResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatabaseCTRequest {
  /** 数据库名数组 */
  DBNames: string[];
  /** 启用、禁用数据库CT功能 enable；启用，disable：禁用 */
  ModifyType: string;
  /** 实例ID */
  InstanceId: string;
  /** 启用CT时额外保留天数，默认保留3天，最小3天，最大30天 */
  ChangeRetentionDay?: number;
}

declare interface ModifyDatabaseCTResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatabaseMdfRequest {
  /** 数据库名数组 */
  DBNames: string[];
  /** 实例ID */
  InstanceId: string;
}

declare interface ModifyDatabaseMdfResponse {
  /** 流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatabasePrivilegeRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 数据库权限变更信息 */
  DataBaseSet: DataBasePrivilegeModifyInfo[];
}

declare interface ModifyDatabasePrivilegeResponse {
  /** 异步任务流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatabaseShrinkMDFRequest {
  /** 数据库名数组 */
  DBNames: string[];
  /** 实例ID */
  InstanceId: string;
}

declare interface ModifyDatabaseShrinkMDFResponse {
  /** 流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIncrementalMigrationRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 增量导入任务ID，由CreateIncrementalMigration接口返回 */
  IncrementalMigrationId: string;
  /** 是否需要恢复，NO-不需要，YES-需要，默认不修改增量备份导入任务是否需要恢复的属性。 */
  IsRecovery?: string;
  /** UploadType是COS_URL时这里时URL，COS_UPLOAD这里填备份文件的名字；只支持1个备份文件，但1个备份文件内可包含多个库 */
  BackupFiles?: string[];
}

declare interface ModifyIncrementalMigrationResponse {
  /** 增量备份导入任务ID */
  IncrementalMigrationId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceEncryptAttributesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 证书归属。self-表示使用该账号自身的证书，others-表示引用其他账号的证书，kms-表示使用kms的CMK证书，默认取值self。 */
  CertificateAttribution: string;
  /** 引用的其他主账号ID，当CertificateAttribution 为others时必填。 */
  QuoteUin?: string;
  /** CertificateAttribution为kms时必填 */
  KeyId?: string;
  /** CertificateAttribution为kms时必填 */
  KeyRegion?: string;
}

declare interface ModifyInstanceEncryptAttributesResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceParamRequest {
  /** 实例短 ID 列表 */
  InstanceIds: string[];
  /** 要修改的参数列表。每一个元素是 Name 和 CurrentValue 的组合。Name 是参数名，CurrentValue 是要修改的值。注意：如果修改的参数需要重启实例，那么您的实例将会在执行修改时重启。您可以通过DescribeInstanceParams接口查询修改参数时是否会重启实例，以免导致您的实例不符合预期重启。 */
  ParamList: Parameter[];
  /** 执行参数调整任务的方式，默认为 0。支持值包括：0 - 立刻执行，1 - 时间窗执行。 */
  WaitSwitch?: number;
}

declare interface ModifyInstanceParamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMaintenanceSpanRequest {
  /** 实例ID，形如mssql-k8voqdlz */
  InstanceId: string;
  /** 以周为单位，表示允许周几维护，例如：[1,2,3,4,5,6,7]表示周一到周日均为可维护日，本参数不填，则不修改此值。 */
  Weekly?: number[];
  /** 每天可维护的开始时间，例如：10:24标识可维护时间窗10点24分开始，本参数不填，则不修改此值。 */
  StartTime?: string;
  /** 每天可维护的持续时间，单位是h，例如：1 表示从可维护的开始时间起持续1小时，本参数不填，则不修改此值。 */
  Span?: number;
}

declare interface ModifyMaintenanceSpanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrationRequest {
  /** 迁移任务ID */
  MigrateId: number;
  /** 新的迁移任务的名称，若不填则不修改 */
  MigrateName?: string;
  /** 新的迁移类型（1:结构迁移 2:数据迁移 3:增量同步），若不填则不修改 */
  MigrateType?: number;
  /** 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式），若不填则不修改 */
  SourceType?: number;
  /** 迁移源，若不填则不修改 */
  Source?: MigrateSource;
  /** 迁移目标，若不填则不修改 */
  Target?: MigrateTarget;
  /** 迁移DB对象 ，离线迁移（SourceType=4或SourceType=5）不使用，若不填则不修改 */
  MigrateDBSet?: MigrateDB[];
}

declare interface ModifyMigrationResponse {
  /** 迁移任务ID */
  MigrateId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOpenWanIpRequest {
  /** 实例资源ID */
  InstanceId: string;
  /** RO只读组Id */
  RoGroupId?: string;
}

declare interface ModifyOpenWanIpResponse {
  /** 开通外网流程Id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPublishSubscribeNameRequest {
  /** 发布订阅ID */
  PublishSubscribeId: number;
  /** 待修改的发布订阅名称 */
  PublishSubscribeName: string;
}

declare interface ModifyPublishSubscribeNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPublishSubscribeRequest {
  /** 实例ID，例如：mssql-dg32dcv */
  InstanceId: string;
  /** 发布订阅ID */
  PublishSubscribeId: number;
  /** 修改的数据库订阅发布关系集合 */
  DatabaseTupleSet: ModifyDataBaseTuple[];
}

declare interface ModifyPublishSubscribeResponse {
  /** 任务流id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyReadOnlyGroupDetailsRequest {
  /** 主实例ID，格式如：mssql-3l3fgqn7 */
  InstanceId: string;
  /** 只读组ID */
  ReadOnlyGroupId: string;
  /** 只读组名称，不填此参数，则不修改 */
  ReadOnlyGroupName?: string;
  /** 是否启动超时剔除功能,0-不开启剔除功能，1-开启剔除功能，不填此参数，则不修改 */
  IsOfflineDelay?: number;
  /** 启动超时剔除功能后，使用的超时阈值，不填此参数，则不修改 */
  ReadOnlyMaxDelayTime?: number;
  /** 启动超时剔除功能后，只读组至少保留的只读副本数，不填此参数，则不修改 */
  MinReadOnlyInGroup?: number;
  /** 只读组实例权重修改集合，不填此参数，则不修改 */
  WeightPairs?: ReadOnlyInstanceWeightPair[];
  /** 0-用户自定义权重（根据WeightPairs调整）,1-系统自动分配权重(WeightPairs无效)， 默认为0 */
  AutoWeight?: number;
  /** 0-不重新均衡负载，1-重新均衡负载，默认为0 */
  BalanceWeight?: number;
}

declare interface ModifyReadOnlyGroupDetailsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenInterCommunicationRequest {
  /** 打开互通组的实例ID集合 */
  InstanceIdSet: string[];
}

declare interface OpenInterCommunicationResponse {
  /** 实例和异步流程ID */
  InterInstanceFlowSet: InterInstanceFlow[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMigrationCheckProcessRequest {
  /** 迁移任务ID */
  MigrateId: number;
}

declare interface QueryMigrationCheckProcessResponse {
  /** 总步骤数量 */
  TotalStep: number;
  /** 当前步骤编号，从1开始 */
  CurrentStep: number;
  /** 所有步骤详情 */
  StepDetails: StepDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecycleDBInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface RecycleDBInstanceResponse {
  /** 流程id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecycleReadOnlyGroupRequest {
  /** 主实例的ID */
  InstanceId: string;
  /** 只读组的ID */
  ReadOnlyGroupId: string;
}

declare interface RecycleReadOnlyGroupResponse {
  /** 任务流ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveBackupsRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 待删除的备份名称，备份名称可通过DescribeBackups接口的FileName字段获得，单次请求批量删除备份数不能超过10个。当StartTime、EndTime为空时，此字段必填。 */
  BackupNames?: string[];
  /** 批量删除手动备份起始时间。当BackupNames为空时，此字段必填。 */
  StartTime?: string;
  /** 批量删除手动备份截止时间。当BackupNames为空时，此字段必填。 */
  EndTime?: string;
}

declare interface RemoveBackupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDBInstanceRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 续费多少个月，取值范围为1-48，默认为1 */
  Period?: number;
  /** 是否自动使用代金券，0-不使用；1-使用；默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID数组，目前只支持使用1张代金券 */
  VoucherIds?: string[];
  /** 续费标记 0:正常续费 1:自动续费：只用于按量计费转包年包月时有效。 */
  AutoRenewFlag?: number;
}

declare interface RenewDBInstanceResponse {
  /** 订单名称 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewPostpaidDBInstanceRequest {
  /** 实例ID，格式如：mssql-3l3fgqn7 或 mssqlro-3l3fgqn7 */
  InstanceId: string;
}

declare interface RenewPostpaidDBInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
  /** 更新后的账户密码信息数组 */
  Accounts: AccountPassword[];
}

declare interface ResetAccountPasswordResponse {
  /** 修改账号密码的异步任务流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDBInstanceRequest {
  /** 数据库实例ID，形如mssql-njj2mtpl */
  InstanceId: string;
}

declare interface RestartDBInstanceResponse {
  /** 异步任务流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestoreInstanceRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 备份文件ID，该ID可以通过DescribeBackups接口返回数据中的Id字段获得 */
  BackupId: number;
  /** 备份恢复到的同一个APPID下的实例ID，不填则恢复到原实例ID */
  TargetInstanceId?: string;
  /** 按照ReNameRestoreDatabase中的库进行恢复，并重命名，不填则按照默认方式命名恢复的库，且恢复所有的库。 */
  RenameRestore?: RenameRestoreDatabase[];
  /** 回档类型，0-覆盖方式；1-重命名方式，默认1 */
  Type?: number;
  /** 需要覆盖回档的数据库，只有覆盖回档时必填 */
  DBList?: string[];
  /** 备份任务组ID，在单库备份文件模式下 */
  GroupId?: string;
}

declare interface RestoreInstanceResponse {
  /** 异步流程任务ID，使用FlowId调用DescribeFlowStatus接口获取任务执行状态 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 回档类型，0-回档的数据库覆盖原库；1-回档的数据库以重命名的形式生成，不覆盖原库 */
  Type: number;
  /** 回档目标时间点 */
  Time: string;
  /** 需要回档的数据库 */
  DBs?: string[];
  /** 备份恢复到的同一个APPID下的实例ID，不填则恢复到原实例ID */
  TargetInstanceId?: string;
  /** 按照ReNameRestoreDatabase中的库进行重命名，仅在Type = 1重命名回档方式有效；不填则按照默认方式命名库，DBs参数确定要恢复的库 */
  RenameRestore?: RenameRestoreDatabase[];
}

declare interface RollbackInstanceResponse {
  /** 异步任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunMigrationRequest {
  /** 迁移任务ID */
  MigrateId: number;
}

declare interface RunMigrationResponse {
  /** 迁移流程启动后，返回流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartBackupMigrationRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
}

declare interface StartBackupMigrationResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartIncrementalMigrationRequest {
  /** 导入目标实例ID */
  InstanceId: string;
  /** 备份导入任务ID，由CreateBackupMigration接口返回 */
  BackupMigrationId: string;
  /** 增量备份导入任务ID */
  IncrementalMigrationId: string;
}

declare interface StartIncrementalMigrationResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartInstanceXEventRequest {
  /** 实例ID */
  InstanceId: string;
  /** 开启、关闭扩展事件 */
  EventConfig: EventConfig[];
}

declare interface StartInstanceXEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartMigrationCheckRequest {
  /** 迁移任务id */
  MigrateId: number;
}

declare interface StartMigrationCheckResponse {
  /** 迁移检查流程发起后，返回的流程id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopMigrationRequest {
  /** 迁移任务ID */
  MigrateId: number;
}

declare interface StopMigrationResponse {
  /** 中止迁移流程发起后，返回的流程id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchCloudInstanceHARequest {
  /** 实例ID */
  InstanceId: string;
  /** 切换执行方式，0-立刻执行，1-时间窗内执行，默认取值为0。 */
  WaitSwitch?: number;
}

declare interface SwitchCloudInstanceHAResponse {
  /** 异步任务流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateDBInstanceRequest {
  /** 主动销毁的实例ID列表，格式如：[mssql-3l3fgqn7]。与云数据库控制台页面中显示的实例ID相同 */
  InstanceIdSet: string[];
}

declare interface TerminateDBInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDBInstanceRequest {
  /** 实例ID，形如mssql-j8kv137v */
  InstanceId: string;
  /** 实例升级后内存大小，单位GB，其值不能小于当前实例内存大小 */
  Memory?: number;
  /** 实例升级后磁盘大小，单位GB，其值不能小于当前实例磁盘大小 */
  Storage?: number;
  /** 是否自动使用代金券，0 - 不使用；1 - 默认使用。取值默认为0 */
  AutoVoucher?: number;
  /** 代金券ID，目前单个订单只能使用一张代金券 */
  VoucherIds?: string[];
  /** 实例升级后的CPU核心数 */
  Cpu?: number;
  /** 升级sqlserver的版本，目前支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise）版本等。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息，版本不支持降级，不填则不修改版本 */
  DBVersion?: string;
  /** 升级sqlserver的高可用架构,从镜像容灾升级到always on集群容灾，仅支持2017及以上版本且支持always on高可用的实例，不支持降级到镜像方式容灾，CLUSTER-升级为always on容灾，不填则不修改高可用架构 */
  HAType?: string;
  /** 修改实例是否为跨可用区容灾，SameZones-修改为同可用区 MultiZones-修改为跨可用区 */
  MultiZones?: string;
  /** 执行变配的方式，默认为 1。支持值包括：0 - 立刻执行，1 - 维护时间窗执行 */
  WaitSwitch?: number;
}

declare interface UpgradeDBInstanceResponse {
  /** 订单名称 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Sqlserver 云数据库 SQL Server} */
declare interface Sqlserver {
  (): Versions;
  /** 安全组批量绑定云资源 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 平衡只读实例的路由权重 {@link BalanceReadOnlyGroupRequest} {@link BalanceReadOnlyGroupResponse} */
  BalanceReadOnlyGroup(data: BalanceReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<BalanceReadOnlyGroupResponse>;
  /** 克隆数据库 {@link CloneDBRequest} {@link CloneDBResponse} */
  CloneDB(data: CloneDBRequest, config?: AxiosRequestConfig): AxiosPromise<CloneDBResponse>;
  /** 关闭实例互通 {@link CloseInterCommunicationRequest} {@link CloseInterCommunicationResponse} */
  CloseInterCommunication(data: CloseInterCommunicationRequest, config?: AxiosRequestConfig): AxiosPromise<CloseInterCommunicationResponse>;
  /** 立刻完成扩容任务 {@link CompleteExpansionRequest} {@link CompleteExpansionResponse} */
  CompleteExpansion(data: CompleteExpansionRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteExpansionResponse>;
  /** 完成迁移任务 {@link CompleteMigrationRequest} {@link CompleteMigrationResponse} */
  CompleteMigration(data: CompleteMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteMigrationResponse>;
  /** 创建实例账号 {@link CreateAccountRequest} {@link CreateAccountResponse} */
  CreateAccount(data: CreateAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountResponse>;
  /** 创建备份 {@link CreateBackupRequest} {@link CreateBackupResponse} */
  CreateBackup(data?: CreateBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupResponse>;
  /** 创建备份导入任务 {@link CreateBackupMigrationRequest} {@link CreateBackupMigrationResponse} */
  CreateBackupMigration(data: CreateBackupMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupMigrationResponse>;
  /** 创建基础版实例 (云盘) {@link CreateBasicDBInstancesRequest} {@link CreateBasicDBInstancesResponse} */
  CreateBasicDBInstances(data: CreateBasicDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBasicDBInstancesResponse>;
  /** 创建商业智能服务实例 (云盘) {@link CreateBusinessDBInstancesRequest} {@link CreateBusinessDBInstancesResponse} */
  CreateBusinessDBInstances(data: CreateBusinessDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBusinessDBInstancesResponse>;
  /** 创建商业智能服务文件 {@link CreateBusinessIntelligenceFileRequest} {@link CreateBusinessIntelligenceFileResponse} */
  CreateBusinessIntelligenceFile(data: CreateBusinessIntelligenceFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBusinessIntelligenceFileResponse>;
  /** 创建高可用实例 (云盘) {@link CreateCloudDBInstancesRequest} {@link CreateCloudDBInstancesResponse} */
  CreateCloudDBInstances(data: CreateCloudDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudDBInstancesResponse>;
  /** 创建只读实例 (云盘) {@link CreateCloudReadOnlyDBInstancesRequest} {@link CreateCloudReadOnlyDBInstancesResponse} */
  CreateCloudReadOnlyDBInstances(data: CreateCloudReadOnlyDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudReadOnlyDBInstancesResponse>;
  /** 创建数据库 {@link CreateDBRequest} {@link CreateDBResponse} */
  CreateDB(data: CreateDBRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBResponse>;
  /** 创建高可用实例 (本地盘) {@link CreateDBInstancesRequest} {@link CreateDBInstancesResponse} */
  CreateDBInstances(data: CreateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstancesResponse>;
  /** 创建增量备份导入任务 {@link CreateIncrementalMigrationRequest} {@link CreateIncrementalMigrationResponse} */
  CreateIncrementalMigration(data: CreateIncrementalMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIncrementalMigrationResponse>;
  /** 创建迁移任务 {@link CreateMigrationRequest} {@link CreateMigrationResponse} */
  CreateMigration(data: CreateMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMigrationResponse>;
  /** 创建发布订阅 {@link CreatePublishSubscribeRequest} {@link CreatePublishSubscribeResponse} */
  CreatePublishSubscribe(data: CreatePublishSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePublishSubscribeResponse>;
  /** 创建只读实例 (本地盘) {@link CreateReadOnlyDBInstancesRequest} {@link CreateReadOnlyDBInstancesResponse} */
  CreateReadOnlyDBInstances(data: CreateReadOnlyDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReadOnlyDBInstancesResponse>;
  /** 手动切割阻塞日志和死锁日志 {@link CutXEventsRequest} {@link CutXEventsResponse} */
  CutXEvents(data: CutXEventsRequest, config?: AxiosRequestConfig): AxiosPromise<CutXEventsResponse>;
  /** 删除实例账号 {@link DeleteAccountRequest} {@link DeleteAccountResponse} */
  DeleteAccount(data: DeleteAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountResponse>;
  /** 删除备份导入任务 {@link DeleteBackupMigrationRequest} {@link DeleteBackupMigrationResponse} */
  DeleteBackupMigration(data: DeleteBackupMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupMigrationResponse>;
  /** 删除商业智能文件 {@link DeleteBusinessIntelligenceFileRequest} {@link DeleteBusinessIntelligenceFileResponse} */
  DeleteBusinessIntelligenceFile(data: DeleteBusinessIntelligenceFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBusinessIntelligenceFileResponse>;
  /** 删除数据库 {@link DeleteDBRequest} {@link DeleteDBResponse} */
  DeleteDB(data: DeleteDBRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDBResponse>;
  /** 立即下线实例 {@link DeleteDBInstanceRequest} {@link DeleteDBInstanceResponse} */
  DeleteDBInstance(data: DeleteDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDBInstanceResponse>;
  /** 删除增量备份导入任务 {@link DeleteIncrementalMigrationRequest} {@link DeleteIncrementalMigrationResponse} */
  DeleteIncrementalMigration(data: DeleteIncrementalMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIncrementalMigrationResponse>;
  /** 删除迁移任务 {@link DeleteMigrationRequest} {@link DeleteMigrationResponse} */
  DeleteMigration(data: DeleteMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMigrationResponse>;
  /** 删除发布订阅 {@link DeletePublishSubscribeRequest} {@link DeletePublishSubscribeResponse} */
  DeletePublishSubscribe(data: DeletePublishSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePublishSubscribeResponse>;
  /** 删除回档任务记录 {@link DeleteRestoreTaskRequest} {@link DeleteRestoreTaskResponse} */
  DeleteRestoreTask(data: DeleteRestoreTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRestoreTaskResponse>;
  /** 查询数据库关联的账号和权限信息 {@link DescribeAccountPrivilegeByDBRequest} {@link DescribeAccountPrivilegeByDBResponse} */
  DescribeAccountPrivilegeByDB(data: DescribeAccountPrivilegeByDBRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountPrivilegeByDBResponse>;
  /** 拉取实例账户列表 {@link DescribeAccountsRequest} {@link DescribeAccountsResponse} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** 根据流程ID查询备份信息 {@link DescribeBackupByFlowIdRequest} {@link DescribeBackupByFlowIdResponse} */
  DescribeBackupByFlowId(data: DescribeBackupByFlowIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupByFlowIdResponse>;
  /** 查询创建备份命令 {@link DescribeBackupCommandRequest} {@link DescribeBackupCommandResponse} */
  DescribeBackupCommand(data: DescribeBackupCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupCommandResponse>;
  /** 查询单库备份文件明细 {@link DescribeBackupFilesRequest} {@link DescribeBackupFilesResponse} */
  DescribeBackupFiles(data: DescribeBackupFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupFilesResponse>;
  /** 查询备份导入任务 {@link DescribeBackupMigrationRequest} {@link DescribeBackupMigrationResponse} */
  DescribeBackupMigration(data: DescribeBackupMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupMigrationResponse>;
  /** 查询备份空间使用详情 {@link DescribeBackupMonitorRequest} {@link DescribeBackupMonitorResponse} */
  DescribeBackupMonitor(data: DescribeBackupMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupMonitorResponse>;
  /** 查询备份实时统计列表 {@link DescribeBackupStatisticalRequest} {@link DescribeBackupStatisticalResponse} */
  DescribeBackupStatistical(data: DescribeBackupStatisticalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupStatisticalResponse>;
  /** 查询数据库备份概览信息 {@link DescribeBackupSummaryRequest} {@link DescribeBackupSummaryResponse} */
  DescribeBackupSummary(data?: DescribeBackupSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupSummaryResponse>;
  /** 查询上传的备份文件大小 {@link DescribeBackupUploadSizeRequest} {@link DescribeBackupUploadSizeResponse} */
  DescribeBackupUploadSize(data: DescribeBackupUploadSizeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupUploadSizeResponse>;
  /** 查询备份列表 {@link DescribeBackupsRequest} {@link DescribeBackupsResponse} */
  DescribeBackups(data: DescribeBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupsResponse>;
  /** 查询商业智能服务需要的文件 {@link DescribeBusinessIntelligenceFileRequest} {@link DescribeBusinessIntelligenceFileResponse} */
  DescribeBusinessIntelligenceFile(data: DescribeBusinessIntelligenceFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBusinessIntelligenceFileResponse>;
  /** 查询实例支持的字符集和时区 {@link DescribeCollationTimeZoneRequest} {@link DescribeCollationTimeZoneResponse} */
  DescribeCollationTimeZone(data?: DescribeCollationTimeZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCollationTimeZoneResponse>;
  /** 查询跨地域备份实时统计列表 {@link DescribeCrossBackupStatisticalRequest} {@link DescribeCrossBackupStatisticalResponse} */
  DescribeCrossBackupStatistical(data: DescribeCrossBackupStatisticalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBackupStatisticalResponse>;
  /** 查询备机的容灾地域和可用区 {@link DescribeCrossRegionZoneRequest} {@link DescribeCrossRegionZoneResponse} */
  DescribeCrossRegionZone(data: DescribeCrossRegionZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossRegionZoneResponse>;
  /** 查询跨地域备份的目标地域 {@link DescribeCrossRegionsRequest} {@link DescribeCrossRegionsResponse} */
  DescribeCrossRegions(data?: DescribeCrossRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossRegionsResponse>;
  /** 查询数据库字符集 {@link DescribeDBCharsetsRequest} {@link DescribeDBCharsetsResponse} */
  DescribeDBCharsets(data: DescribeDBCharsetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCharsetsResponse>;
  /** 查询互通实例的信息 {@link DescribeDBInstanceInterRequest} {@link DescribeDBInstanceInterResponse} */
  DescribeDBInstanceInter(data: DescribeDBInstanceInterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceInterResponse>;
  /** 查询实例列表 {@link DescribeDBInstancesRequest} {@link DescribeDBInstancesResponse} */
  DescribeDBInstances(data?: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** 查询实例附属属性 {@link DescribeDBInstancesAttributeRequest} {@link DescribeDBInstancesAttributeResponse} */
  DescribeDBInstancesAttribute(data: DescribeDBInstancesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesAttributeResponse>;
  /** 查询账号关联的数据库和权限信息 {@link DescribeDBPrivilegeByAccountRequest} {@link DescribeDBPrivilegeByAccountResponse} */
  DescribeDBPrivilegeByAccount(data: DescribeDBPrivilegeByAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBPrivilegeByAccountResponse>;
  /** 查询可回档的数据库 {@link DescribeDBRestoreTimeRequest} {@link DescribeDBRestoreTimeResponse} */
  DescribeDBRestoreTime(data: DescribeDBRestoreTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBRestoreTimeResponse>;
  /** 查询实例安全组信息 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询数据库列表（已废弃） {@link DescribeDBsRequest} {@link DescribeDBsResponse} */
  DescribeDBs(data: DescribeDBsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBsResponse>;
  /** 查询数据库配置信息（已废弃） {@link DescribeDBsNormalRequest} {@link DescribeDBsNormalResponse} */
  DescribeDBsNormal(data: DescribeDBsNormalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBsNormalResponse>;
  /** 查询账户关联的数据库名称 {@link DescribeDatabaseNamesRequest} {@link DescribeDatabaseNamesResponse} */
  DescribeDatabaseNames(data: DescribeDatabaseNamesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseNamesResponse>;
  /** 查询数据库列表 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** 查询数据库配置信息 {@link DescribeDatabasesNormalRequest} {@link DescribeDatabasesNormalResponse} */
  DescribeDatabasesNormal(data: DescribeDatabasesNormalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesNormalResponse>;
  /** 查询流程状态 {@link DescribeFlowStatusRequest} {@link DescribeFlowStatusResponse} */
  DescribeFlowStatus(data: DescribeFlowStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowStatusResponse>;
  /** 查询主备切换日志 {@link DescribeHASwitchLogRequest} {@link DescribeHASwitchLogResponse} */
  DescribeHASwitchLog(data: DescribeHASwitchLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHASwitchLogResponse>;
  /** 查询增量备份导入任务 {@link DescribeIncrementalMigrationRequest} {@link DescribeIncrementalMigrationResponse} */
  DescribeIncrementalMigration(data: DescribeIncrementalMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIncrementalMigrationResponse>;
  /** 查询实例询价计费参数 {@link DescribeInquiryPriceParameterRequest} {@link DescribeInquiryPriceParameterResponse} */
  DescribeInquiryPriceParameter(data: DescribeInquiryPriceParameterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInquiryPriceParameterResponse>;
  /** 根据订单号查询对应的实例ID {@link DescribeInstanceByOrdersRequest} {@link DescribeInstanceByOrdersResponse} */
  DescribeInstanceByOrders(data: DescribeInstanceByOrdersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceByOrdersResponse>;
  /** 查询实例参数修改历史 {@link DescribeInstanceParamRecordsRequest} {@link DescribeInstanceParamRecordsResponse} */
  DescribeInstanceParamRecords(data: DescribeInstanceParamRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamRecordsResponse>;
  /** 查询实例的可设置参数列表 {@link DescribeInstanceParamsRequest} {@link DescribeInstanceParamsResponse} */
  DescribeInstanceParams(data: DescribeInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamsResponse>;
  /** 查询异步任务列表 {@link DescribeInstanceTasksRequest} {@link DescribeInstanceTasksResponse} */
  DescribeInstanceTasks(data: DescribeInstanceTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTasksResponse>;
  /** 查询实例的计费参数 {@link DescribeInstanceTradeParameterRequest} {@link DescribeInstanceTradeParameterResponse} */
  DescribeInstanceTradeParameter(data: DescribeInstanceTradeParameterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTradeParameterResponse>;
  /** 查询该实例的可维护时间窗 {@link DescribeMaintenanceSpanRequest} {@link DescribeMaintenanceSpanResponse} */
  DescribeMaintenanceSpan(data: DescribeMaintenanceSpanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaintenanceSpanResponse>;
  /** 查询迁移数据库列表 {@link DescribeMigrationDatabasesRequest} {@link DescribeMigrationDatabasesResponse} */
  DescribeMigrationDatabases(data: DescribeMigrationDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationDatabasesResponse>;
  /** 查询迁移任务详情 {@link DescribeMigrationDetailRequest} {@link DescribeMigrationDetailResponse} */
  DescribeMigrationDetail(data: DescribeMigrationDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationDetailResponse>;
  /** 查询迁移任务列表 {@link DescribeMigrationsRequest} {@link DescribeMigrationsResponse} */
  DescribeMigrations(data?: DescribeMigrationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationsResponse>;
  /** 查询订单信息 {@link DescribeOrdersRequest} {@link DescribeOrdersResponse} */
  DescribeOrders(data: DescribeOrdersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrdersResponse>;
  /** 查询售卖规格配置 {@link DescribeProductConfigRequest} {@link DescribeProductConfigResponse} */
  DescribeProductConfig(data: DescribeProductConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductConfigResponse>;
  /** 查询全地域售卖规格配置 {@link DescribeProductSpecRequest} {@link DescribeProductSpecResponse} */
  DescribeProductSpec(data?: DescribeProductSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductSpecResponse>;
  /** 查询项目安全组信息 {@link DescribeProjectSecurityGroupsRequest} {@link DescribeProjectSecurityGroupsResponse} */
  DescribeProjectSecurityGroups(data: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** 查询订阅发布 {@link DescribePublishSubscribeRequest} {@link DescribePublishSubscribeResponse} */
  DescribePublishSubscribe(data: DescribePublishSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublishSubscribeResponse>;
  /** 查询只读组的自动权重 {@link DescribeReadOnlyGroupAutoWeightRequest} {@link DescribeReadOnlyGroupAutoWeightResponse} */
  DescribeReadOnlyGroupAutoWeight(data: DescribeReadOnlyGroupAutoWeightRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReadOnlyGroupAutoWeightResponse>;
  /** 通过只读实例查询只读组 {@link DescribeReadOnlyGroupByReadOnlyInstanceRequest} {@link DescribeReadOnlyGroupByReadOnlyInstanceResponse} */
  DescribeReadOnlyGroupByReadOnlyInstance(data: DescribeReadOnlyGroupByReadOnlyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReadOnlyGroupByReadOnlyInstanceResponse>;
  /** 查询只读组详情 {@link DescribeReadOnlyGroupDetailsRequest} {@link DescribeReadOnlyGroupDetailsResponse} */
  DescribeReadOnlyGroupDetails(data: DescribeReadOnlyGroupDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReadOnlyGroupDetailsResponse>;
  /** 查询只读组列表 {@link DescribeReadOnlyGroupListRequest} {@link DescribeReadOnlyGroupListResponse} */
  DescribeReadOnlyGroupList(data: DescribeReadOnlyGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReadOnlyGroupListResponse>;
  /** 查询售卖地域 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询实例定期备份保留计划 {@link DescribeRegularBackupPlanRequest} {@link DescribeRegularBackupPlanResponse} */
  DescribeRegularBackupPlan(data: DescribeRegularBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegularBackupPlanResponse>;
  /** 查询回档任务列表 {@link DescribeRestoreTaskRequest} {@link DescribeRestoreTaskResponse} */
  DescribeRestoreTask(data: DescribeRestoreTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRestoreTaskResponse>;
  /** 查询按照时间点可回档的时间范围 {@link DescribeRestoreTimeRangeRequest} {@link DescribeRestoreTimeRangeResponse} */
  DescribeRestoreTimeRange(data: DescribeRestoreTimeRangeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRestoreTimeRangeResponse>;
  /** 查询实例可回档时间范围 {@link DescribeRollbackTimeRequest} {@link DescribeRollbackTimeResponse} */
  DescribeRollbackTime(data: DescribeRollbackTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRollbackTimeResponse>;
  /** 获取慢查询日志文件信息 {@link DescribeSlowlogsRequest} {@link DescribeSlowlogsResponse} */
  DescribeSlowlogs(data: DescribeSlowlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowlogsResponse>;
  /** 查询售卖规格状态信息 {@link DescribeSpecSellStatusRequest} {@link DescribeSpecSellStatusResponse} */
  DescribeSpecSellStatus(data: DescribeSpecSellStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecSellStatusResponse>;
  /** 实例变配检查 {@link DescribeUpgradeInstanceCheckRequest} {@link DescribeUpgradeInstanceCheckResponse} */
  DescribeUpgradeInstanceCheck(data: DescribeUpgradeInstanceCheckRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUpgradeInstanceCheckResponse>;
  /** 查询备份上传权限 {@link DescribeUploadBackupInfoRequest} {@link DescribeUploadBackupInfoResponse} */
  DescribeUploadBackupInfo(data: DescribeUploadBackupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUploadBackupInfoResponse>;
  /** 查询增量备份上传权限 {@link DescribeUploadIncrementalInfoRequest} {@link DescribeUploadIncrementalInfoResponse} */
  DescribeUploadIncrementalInfo(data: DescribeUploadIncrementalInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUploadIncrementalInfoResponse>;
  /** 查询扩展事件列表 {@link DescribeXEventsRequest} {@link DescribeXEventsResponse} */
  DescribeXEvents(data: DescribeXEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeXEventsResponse>;
  /** 查询售卖可用区 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 查询申请实例价格 {@link InquiryPriceCreateDBInstancesRequest} {@link InquiryPriceCreateDBInstancesResponse} */
  InquiryPriceCreateDBInstances(data: InquiryPriceCreateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateDBInstancesResponse>;
  /** 查询实例续费价格 {@link InquiryPriceRenewDBInstanceRequest} {@link InquiryPriceRenewDBInstanceResponse} */
  InquiryPriceRenewDBInstance(data: InquiryPriceRenewDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewDBInstanceResponse>;
  /** 查询升级实例价格 {@link InquiryPriceUpgradeDBInstanceRequest} {@link InquiryPriceUpgradeDBInstanceResponse} */
  InquiryPriceUpgradeDBInstance(data: InquiryPriceUpgradeDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceUpgradeDBInstanceResponse>;
  /** 修改实例账户权限 {@link ModifyAccountPrivilegeRequest} {@link ModifyAccountPrivilegeResponse} */
  ModifyAccountPrivilege(data: ModifyAccountPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountPrivilegeResponse>;
  /** 修改账户备注 {@link ModifyAccountRemarkRequest} {@link ModifyAccountRemarkResponse} */
  ModifyAccountRemark(data: ModifyAccountRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountRemarkResponse>;
  /** 修改备份导入任务 {@link ModifyBackupMigrationRequest} {@link ModifyBackupMigrationResponse} */
  ModifyBackupMigration(data: ModifyBackupMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupMigrationResponse>;
  /** 修改备份名称 {@link ModifyBackupNameRequest} {@link ModifyBackupNameResponse} */
  ModifyBackupName(data: ModifyBackupNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupNameResponse>;
  /** 设置备份策略 {@link ModifyBackupStrategyRequest} {@link ModifyBackupStrategyResponse} */
  ModifyBackupStrategy(data: ModifyBackupStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupStrategyResponse>;
  /** 关闭实例外网 {@link ModifyCloseWanIpRequest} {@link ModifyCloseWanIpResponse} */
  ModifyCloseWanIp(data: ModifyCloseWanIpRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloseWanIpResponse>;
  /** 开启、关闭跨地域备份策略 {@link ModifyCrossBackupStrategyRequest} {@link ModifyCrossBackupStrategyResponse} */
  ModifyCrossBackupStrategy(data: ModifyCrossBackupStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCrossBackupStrategyResponse>;
  /** 开启、关闭数据库的TDE加密功能 {@link ModifyDBEncryptAttributesRequest} {@link ModifyDBEncryptAttributesResponse} */
  ModifyDBEncryptAttributes(data: ModifyDBEncryptAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBEncryptAttributesResponse>;
  /** 修改实例名字 {@link ModifyDBInstanceNameRequest} {@link ModifyDBInstanceNameResponse} */
  ModifyDBInstanceName(data: ModifyDBInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNameResponse>;
  /** 修改实例网络 {@link ModifyDBInstanceNetworkRequest} {@link ModifyDBInstanceNetworkResponse} */
  ModifyDBInstanceNetwork(data: ModifyDBInstanceNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNetworkResponse>;
  /** 修改实例备注信息 {@link ModifyDBInstanceNoteRequest} {@link ModifyDBInstanceNoteResponse} */
  ModifyDBInstanceNote(data: ModifyDBInstanceNoteRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNoteResponse>;
  /** 修改数据库实例所属项目 {@link ModifyDBInstanceProjectRequest} {@link ModifyDBInstanceProjectResponse} */
  ModifyDBInstanceProject(data: ModifyDBInstanceProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceProjectResponse>;
  /** 修改实例续费标记 {@link ModifyDBInstanceRenewFlagRequest} {@link ModifyDBInstanceRenewFlagResponse} */
  ModifyDBInstanceRenewFlag(data: ModifyDBInstanceRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceRenewFlagResponse>;
  /** 开启\关闭\更新SSL加密 {@link ModifyDBInstanceSSLRequest} {@link ModifyDBInstanceSSLResponse} */
  ModifyDBInstanceSSL(data: ModifyDBInstanceSSLRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSSLResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 更新数据库名 {@link ModifyDBNameRequest} {@link ModifyDBNameResponse} */
  ModifyDBName(data: ModifyDBNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBNameResponse>;
  /** 修改数据库备注 {@link ModifyDBRemarkRequest} {@link ModifyDBRemarkResponse} */
  ModifyDBRemark(data: ModifyDBRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBRemarkResponse>;
  /** 开通\关闭备机只读 {@link ModifyDReadableRequest} {@link ModifyDReadableResponse} */
  ModifyDReadable(data: ModifyDReadableRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDReadableResponse>;
  /** 开启&关闭数据库CDC {@link ModifyDatabaseCDCRequest} {@link ModifyDatabaseCDCResponse} */
  ModifyDatabaseCDC(data: ModifyDatabaseCDCRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatabaseCDCResponse>;
  /** 启用&禁用数据库CT {@link ModifyDatabaseCTRequest} {@link ModifyDatabaseCTResponse} */
  ModifyDatabaseCT(data: ModifyDatabaseCTRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatabaseCTResponse>;
  /** 收缩数据库mdf (已废弃） {@link ModifyDatabaseMdfRequest} {@link ModifyDatabaseMdfResponse} */
  ModifyDatabaseMdf(data: ModifyDatabaseMdfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatabaseMdfResponse>;
  /** 修改实例数据库权限 {@link ModifyDatabasePrivilegeRequest} {@link ModifyDatabasePrivilegeResponse} */
  ModifyDatabasePrivilege(data: ModifyDatabasePrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatabasePrivilegeResponse>;
  /** 收缩数据库mdf {@link ModifyDatabaseShrinkMDFRequest} {@link ModifyDatabaseShrinkMDFResponse} */
  ModifyDatabaseShrinkMDF(data: ModifyDatabaseShrinkMDFRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatabaseShrinkMDFResponse>;
  /** 修改增量备份导入任务 {@link ModifyIncrementalMigrationRequest} {@link ModifyIncrementalMigrationResponse} */
  ModifyIncrementalMigration(data: ModifyIncrementalMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIncrementalMigrationResponse>;
  /** 开通实例的TDE加密功能 {@link ModifyInstanceEncryptAttributesRequest} {@link ModifyInstanceEncryptAttributesResponse} */
  ModifyInstanceEncryptAttributes(data: ModifyInstanceEncryptAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceEncryptAttributesResponse>;
  /** 修改实例参数 {@link ModifyInstanceParamRequest} {@link ModifyInstanceParamResponse} */
  ModifyInstanceParam(data: ModifyInstanceParamRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceParamResponse>;
  /** 修改可维护时间窗 {@link ModifyMaintenanceSpanRequest} {@link ModifyMaintenanceSpanResponse} */
  ModifyMaintenanceSpan(data: ModifyMaintenanceSpanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMaintenanceSpanResponse>;
  /** 修改迁移任务 {@link ModifyMigrationRequest} {@link ModifyMigrationResponse} */
  ModifyMigration(data: ModifyMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrationResponse>;
  /** 开通实例外网 {@link ModifyOpenWanIpRequest} {@link ModifyOpenWanIpResponse} */
  ModifyOpenWanIp(data: ModifyOpenWanIpRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOpenWanIpResponse>;
  /** 修改发布订阅关系 {@link ModifyPublishSubscribeRequest} {@link ModifyPublishSubscribeResponse} */
  ModifyPublishSubscribe(data: ModifyPublishSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPublishSubscribeResponse>;
  /** 修改发布订阅的名称 {@link ModifyPublishSubscribeNameRequest} {@link ModifyPublishSubscribeNameResponse} */
  ModifyPublishSubscribeName(data: ModifyPublishSubscribeNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPublishSubscribeNameResponse>;
  /** 修改只读组详情 {@link ModifyReadOnlyGroupDetailsRequest} {@link ModifyReadOnlyGroupDetailsResponse} */
  ModifyReadOnlyGroupDetails(data: ModifyReadOnlyGroupDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReadOnlyGroupDetailsResponse>;
  /** 打开实例的互通 {@link OpenInterCommunicationRequest} {@link OpenInterCommunicationResponse} */
  OpenInterCommunication(data: OpenInterCommunicationRequest, config?: AxiosRequestConfig): AxiosPromise<OpenInterCommunicationResponse>;
  /** 查询迁移校验任务进度 {@link QueryMigrationCheckProcessRequest} {@link QueryMigrationCheckProcessResponse} */
  QueryMigrationCheckProcess(data: QueryMigrationCheckProcessRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMigrationCheckProcessResponse>;
  /** 主动回收实例 {@link RecycleDBInstanceRequest} {@link RecycleDBInstanceResponse} */
  RecycleDBInstance(data: RecycleDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RecycleDBInstanceResponse>;
  /** 立即回收只读组的资源 {@link RecycleReadOnlyGroupRequest} {@link RecycleReadOnlyGroupResponse} */
  RecycleReadOnlyGroup(data: RecycleReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RecycleReadOnlyGroupResponse>;
  /** 删除手动备份 {@link RemoveBackupsRequest} {@link RemoveBackupsResponse} */
  RemoveBackups(data: RemoveBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveBackupsResponse>;
  /** 续费实例 {@link RenewDBInstanceRequest} {@link RenewDBInstanceResponse} */
  RenewDBInstance(data: RenewDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDBInstanceResponse>;
  /** 恢复后付费实例 {@link RenewPostpaidDBInstanceRequest} {@link RenewPostpaidDBInstanceResponse} */
  RenewPostpaidDBInstance(data: RenewPostpaidDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewPostpaidDBInstanceResponse>;
  /** 重置账户密码 {@link ResetAccountPasswordRequest} {@link ResetAccountPasswordResponse} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** 重启实例 {@link RestartDBInstanceRequest} {@link RestartDBInstanceResponse} */
  RestartDBInstance(data: RestartDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDBInstanceResponse>;
  /** 按照备份集回档数据库 {@link RestoreInstanceRequest} {@link RestoreInstanceResponse} */
  RestoreInstance(data: RestoreInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestoreInstanceResponse>;
  /** 按照时间点回档数据库 {@link RollbackInstanceRequest} {@link RollbackInstanceResponse} */
  RollbackInstance(data: RollbackInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackInstanceResponse>;
  /** 执行迁移任务 {@link RunMigrationRequest} {@link RunMigrationResponse} */
  RunMigration(data: RunMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<RunMigrationResponse>;
  /** 启动备份导入任务 {@link StartBackupMigrationRequest} {@link StartBackupMigrationResponse} */
  StartBackupMigration(data: StartBackupMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<StartBackupMigrationResponse>;
  /** 启动增量备份导入任务 {@link StartIncrementalMigrationRequest} {@link StartIncrementalMigrationResponse} */
  StartIncrementalMigration(data: StartIncrementalMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<StartIncrementalMigrationResponse>;
  /** 开启、关闭扩展事件 {@link StartInstanceXEventRequest} {@link StartInstanceXEventResponse} */
  StartInstanceXEvent(data: StartInstanceXEventRequest, config?: AxiosRequestConfig): AxiosPromise<StartInstanceXEventResponse>;
  /** 启动迁移校验 {@link StartMigrationCheckRequest} {@link StartMigrationCheckResponse} */
  StartMigrationCheck(data: StartMigrationCheckRequest, config?: AxiosRequestConfig): AxiosPromise<StartMigrationCheckResponse>;
  /** 中止迁移任务 {@link StopMigrationRequest} {@link StopMigrationResponse} */
  StopMigration(data: StopMigrationRequest, config?: AxiosRequestConfig): AxiosPromise<StopMigrationResponse>;
  /** 实例手动主备切换 {@link SwitchCloudInstanceHARequest} {@link SwitchCloudInstanceHAResponse} */
  SwitchCloudInstanceHA(data: SwitchCloudInstanceHARequest, config?: AxiosRequestConfig): AxiosPromise<SwitchCloudInstanceHAResponse>;
  /** 主动隔离实例 {@link TerminateDBInstanceRequest} {@link TerminateDBInstanceResponse} */
  TerminateDBInstance(data: TerminateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateDBInstanceResponse>;
  /** 升级实例 {@link UpgradeDBInstanceRequest} {@link UpgradeDBInstanceResponse} */
  UpgradeDBInstance(data: UpgradeDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDBInstanceResponse>;
}

export declare type Versions = ["2018-03-28"];

export default Sqlserver;
