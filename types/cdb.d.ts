/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据库账号信息 */
declare interface Account {
  /** 新账户的名称 */
  User: string;
  /** 新账户的域名 */
  Host: string;
}

/** 账号详细信息 */
declare interface AccountInfo {
  /** 账号备注信息 */
  Notes: string;
  /** 账号的域名 */
  Host: string;
  /** 账号的名称 */
  User: string;
  /** 账号信息修改时间 */
  ModifyTime: string;
  /** 修改密码的时间 */
  ModifyPasswordTime: string;
  /** 该值已废弃 */
  CreateTime: string;
  /** 用户最大可用实例连接数 */
  MaxUserConnections: number;
}

/** 地址 */
declare interface Address {
  /** 地址 */
  Vip: string | null;
  /** 端口 */
  VPort: number | null;
  /** 私有网络ID */
  UniqVpcId: string | null;
  /** 私有网络子网ID */
  UniqSubnet: string | null;
  /** 描述 */
  Desc: string | null;
}

/** 审计日志聚合条件 */
declare interface AggregationCondition {
  /** 聚合字段。目前仅支持host-源IP、user-用户名、dbName-数据库名、sqlType-sql类型。 */
  AggregationField: string;
  /** 偏移量。 */
  Offset?: number | null;
  /** 该聚合字段下要返回聚合桶的数量，最大100。 */
  Limit?: number | null;
}

/** 审计规则过滤条件 */
declare interface AuditFilter {
  /** 过滤条件参数名称。目前支持：SrcIp – 客户端 IP；User – 数据库账户；DB – 数据库名称； */
  Type: string;
  /** 过滤条件匹配类型。目前支持：INC – 包含；EXC – 不包含；EQ – 等于；NEQ – 不等于； */
  Compare: string;
  /** 过滤条件匹配值。 */
  Value: string;
}

/** 审计日志分析结果 */
declare interface AuditLogAggregationResult {
  /** 聚合维度 */
  AggregationField: string | null;
  /** 聚合桶的结果集 */
  Buckets: Bucket[] | null;
}

/** 审计日志文件 */
declare interface AuditLogFile {
  /** 审计日志文件名称 */
  FileName: string;
  /** 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。 */
  CreateTime: string;
  /** 文件状态值。可能返回的值为："creating" - 生成中;"failed" - 创建失败;"success" - 已生成; */
  Status: string;
  /** 文件大小，单位为 KB。 */
  FileSize: number | null;
  /** 审计日志下载地址。 */
  DownloadUrl: string | null;
  /** 错误信息。 */
  ErrMsg: string | null;
}

/** 审计日志过滤条件。查询审计日志时，用户过滤返回的审计日志。 */
declare interface AuditLogFilter {
  /** 客户端地址。 */
  Host?: string[];
  /** 用户名。 */
  User?: string[];
  /** 数据库名称。 */
  DBName?: string[];
  /** 表名称。 */
  TableName?: string[];
  /** 审计策略名称。 */
  PolicyName?: string[];
  /** SQL 语句。支持模糊匹配。 */
  Sql?: string;
  /** SQL 类型。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。 */
  SqlType?: string;
  /** 执行时间。单位为：ms。表示筛选执行时间大于该值的审计日志。 */
  ExecTime?: number;
  /** 影响行数。表示筛选影响行数大于该值的审计日志。 */
  AffectRows?: number;
  /** SQL 类型。支持多个类型同时查询。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。 */
  SqlTypes?: string[];
  /** SQL 语句。支持传递多个sql语句。 */
  Sqls?: string[];
  /** 影响行数，格式为M-N，例如：10-200 */
  AffectRowsSection?: string;
  /** 返回行数，格式为M-N，例如：10-200 */
  SentRowsSection?: string;
  /** 执行时间，格式为M-N，例如：10-200 */
  ExecTimeSection?: string;
  /** 锁等待时间，格式为M-N，例如：10-200 */
  LockWaitTimeSection?: string;
  /** IO等待时间，格式为M-N，例如：10-200 */
  IoWaitTimeSection?: string;
  /** 事务持续时间，格式为M-N，例如：10-200 */
  TransactionLivingTimeSection?: string;
  /** 线程ID */
  ThreadId?: string[] | null;
  /** 返回行数。表示筛选返回行数大于该值的审计日志。 */
  SentRows?: number | null;
  /** mysql错误码 */
  ErrCode?: number[] | null;
}

/** 审计策略 */
declare interface AuditPolicy {
  /** 审计策略 ID。 */
  PolicyId: string;
  /** 审计策略的状态。可能返回的值为："creating" - 创建中;"running" - 运行中;"paused" - 暂停中;"failed" - 创建失败。 */
  Status: string;
  /** 数据库实例 ID。 */
  InstanceId: string;
  /** 审计策略创建时间。格式为 : "2019-03-20 17:09:13"。 */
  CreateTime: string;
  /** 审计策略最后修改时间。格式为 : "2019-03-20 17:09:13"。 */
  ModifyTime: string;
  /** 审计策略名称。 */
  PolicyName: string;
  /** 审计规则 ID。 */
  RuleId: string;
  /** 审计规则名称。 */
  RuleName: string | null;
  /** 数据库实例名称 */
  InstanceName: string | null;
}

/** 审计规则 */
declare interface AuditRule {
  /** 审计规则 Id。 */
  RuleId: string;
  /** 审计规则创建时间。格式为 : "2019-03-20 17:09:13"。 */
  CreateTime: string;
  /** 审计规则最后修改时间。格式为 : "2019-03-20 17:09:13"。 */
  ModifyTime: string;
  /** 审计规则名称。 */
  RuleName: string | null;
  /** 审计规则描述。 */
  Description: string | null;
  /** 审计规则过滤条件。 */
  RuleFilters: AuditFilter[] | null;
  /** 是否开启全审计。 */
  AuditAll: boolean;
}

/** 审计规则的过滤条件 */
declare interface AuditRuleFilters {
  /** 单条审计规则。 */
  RuleFilters?: RuleFilters[] | null;
}

/** ECDB第二个从库的配置信息，只有ECDB实例才有这个字段 */
declare interface BackupConfig {
  /** 第二个从库复制方式，可能的返回值：async-异步，semisync-半同步 */
  ReplicationMode: string;
  /** 第二个从库可用区的正式名称，如ap-shanghai-1 */
  Zone: string;
  /** 第二个从库内网IP地址 */
  Vip: string;
  /** 第二个从库访问端口 */
  Vport: number;
}

/** 备份详细信息 */
declare interface BackupInfo {
  /** 备份文件名 */
  Name: string;
  /** 备份文件大小，单位：Byte */
  Size: number;
  /** 备份快照时间，时间格式：2016-03-17 02:10:37 */
  Date: string;
  /** 下载地址 */
  IntranetUrl: string;
  /** 下载地址 */
  InternetUrl: string;
  /** 日志具体类型。可能的值有 "logical": 逻辑冷备， "physical": 物理冷备。 */
  Type: string;
  /** 备份子任务的ID，删除备份文件时使用 */
  BackupId: number;
  /** 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。 */
  Status: string;
  /** 备份任务的完成时间 */
  FinishTime: string;
  /** （该值将废弃，不建议使用）备份的创建者，可能的值：SYSTEM - 系统创建，Uin - 发起者Uin值。 */
  Creator: string;
  /** 备份任务的开始时间 */
  StartTime: string;
  /** 备份方法。可能的值有 "full": 全量备份， "partial": 部分备份。 */
  Method: string;
  /** 备份方式。可能的值有 "manual": 手动备份， "automatic": 自动备份。 */
  Way: string;
  /** 手动备份别名 */
  ManualBackupName: string;
  /** 备份保留类型，save_mode_regular - 常规保存备份，save_mode_period - 定期保存备份 */
  SaveMode: string;
  /** 本地备份所在地域 */
  Region: string;
  /** 异地备份详细信息 */
  RemoteInfo: RemoteBackupInfo[];
  /** 存储方式，0-常规存储，1-归档存储，默认为0 */
  CosStorageType: number;
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 备份文件是否加密， on-加密， off-未加密 */
  EncryptionFlag: string | null;
}

/** 创建备份时，指定需要备份的库表信息 */
declare interface BackupItem {
  /** 需要备份的库名 */
  Db: string;
  /** 需要备份的表名。 如果传该参数，表示备份该库中的指定表。如果不传该参数则备份该db库 */
  Table?: string;
}

/** 备份文件限制下载来源VPC设置项 */
declare interface BackupLimitVpcItem {
  /** 限制下载来源的地域。目前仅支持当前地域。 */
  Region: string;
  /** 限制下载的vpc列表。 */
  VpcList: string[];
}

/** 实例备份统计项 */
declare interface BackupSummaryItem {
  /** 实例ID。 */
  InstanceId: string;
  /** 该实例自动数据备份的个数。 */
  AutoBackupCount: number;
  /** 该实例自动数据备份的容量。 */
  AutoBackupVolume: number;
  /** 该实例手动数据备份的个数。 */
  ManualBackupCount: number;
  /** 该实例手动数据备份的容量。 */
  ManualBackupVolume: number;
  /** 该实例总的数据备份（包含自动备份和手动备份）个数。 */
  DataBackupCount: number;
  /** 该实例总的数据备份容量。 */
  DataBackupVolume: number;
  /** 该实例日志备份的个数。 */
  BinlogBackupCount: number;
  /** 该实例日志备份的容量。 */
  BinlogBackupVolume: number;
  /** 该实例的总备份（包含数据备份和日志备份）占用容量。 */
  BackupVolume: number;
}

/** proxy代理组信息 */
declare interface BaseGroupInfo {
  /** 代理组ID */
  ProxyGroupId: string | null;
  /** 代理节点数 */
  NodeCount: number | null;
  /** 状态：发货中（init）运行中（online）下线中（offline）销毁中（destroy） */
  Status: string | null;
  /** 地域 */
  Region: string | null;
  /** 可用区 */
  Zone: string | null;
  /** 是否开启读写分离 */
  OpenRW: boolean | null;
  /** 当前代理版本 */
  CurrentProxyVersion: string | null;
  /** 支持升级版本 */
  SupportUpgradeProxyVersion: string | null;
}

/** 二进制日志信息 */
declare interface BinlogInfo {
  /** binlog 日志备份文件名 */
  Name: string;
  /** 备份文件大小，单位：Byte */
  Size: number;
  /** 文件存储时间，时间格式：2016-03-17 02:10:37 */
  Date: string;
  /** 下载地址 */
  IntranetUrl: string;
  /** 下载地址 */
  InternetUrl: string;
  /** 日志具体类型，可能的值有：binlog - 二进制日志 */
  Type: string;
  /** binlog 文件起始时间 */
  BinlogStartTime: string;
  /** binlog 文件截止时间 */
  BinlogFinishTime: string;
  /** 本地binlog文件所在地域 */
  Region: string;
  /** 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。 */
  Status: string;
  /** binlog异地备份详细信息 */
  RemoteInfo: RemoteBackupInfo[];
  /** 存储方式，0-常规存储，1-归档存储，默认为0 */
  CosStorageType: number;
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

/** 聚合桶的信息 */
declare interface Bucket {
  /** 无 */
  Key: string | null;
  /** key值出现的次数。 */
  Count: number;
}

/** 地域售卖配置 */
declare interface CdbRegionSellConf {
  /** 地域中文名称 */
  RegionName: string;
  /** 所属大区 */
  Area: string;
  /** 是否为默认地域 */
  IsDefaultRegion: number;
  /** 地域名称 */
  Region: string;
  /** 地域的可用区售卖配置 */
  RegionConfig: CdbZoneSellConf[];
}

/** 售卖配置详情 */
declare interface CdbSellConfig {
  /** 内存大小，单位为MB */
  Memory: number;
  /** CPU核心数 */
  Cpu: number;
  /** 磁盘最小规格，单位为GB */
  VolumeMin: number;
  /** 磁盘最大规格，单位为GB */
  VolumeMax: number;
  /** 磁盘步长，单位为GB */
  VolumeStep: number;
  /** 每秒IO数量 */
  Iops: number;
  /** 应用场景描述 */
  Info: string;
  /** 状态值，0 表示该规格对外售卖 */
  Status: number;
  /** 实例类型，可能的取值范围有：UNIVERSAL (通用型), EXCLUSIVE (独享型), BASIC (基础型), BASIC_V2 (基础型v2) */
  DeviceType: string | null;
  /** 引擎类型描述，可能的取值范围有：Innodb，RocksDB */
  EngineType: string;
  /** 售卖规格Id */
  Id: number;
}

/** 售卖实例类型 */
declare interface CdbSellType {
  /** 售卖实例名称。Z3是高可用类型对应规格中的DeviceType包含UNIVERSAL,EXCLUSIVE；CVM是基础版类型对应规格中的DeviceType是BASIC；TKE是基础型v2类型对应规格中的DeviceType是BASIC_V2。 */
  TypeName: string;
  /** 引擎版本号 */
  EngineVersion: string[];
  /** 售卖规格Id */
  ConfigIds: number[];
}

/** 各地域可售卖的规格配置 */
declare interface CdbZoneDataResult {
  /** 售卖规格所有集合 */
  Configs: CdbSellConfig[];
  /** 售卖地域可用区集合 */
  Regions: CdbRegionSellConf[];
}

/** 可用区售卖配置 */
declare interface CdbZoneSellConf {
  /** 可用区状态。可能的返回值为：1-上线；3-停售；4-不展示 */
  Status: number;
  /** 可用区中文名称 */
  ZoneName: string;
  /** 实例类型是否为自定义类型 */
  IsCustom: boolean;
  /** 是否支持灾备 */
  IsSupportDr: boolean;
  /** 是否支持私有网络 */
  IsSupportVpc: boolean;
  /** 小时计费实例最大售卖数量 */
  HourInstanceSaleMaxNum: number;
  /** 是否为默认可用区 */
  IsDefaultZone: boolean;
  /** 是否为黑石区 */
  IsBm: boolean;
  /** 支持的付费类型。可能的返回值为：0-包年包月；1-小时计费；2-后付费 */
  PayType: string[];
  /** 数据复制类型。0-异步复制；1-半同步复制；2-强同步复制 */
  ProtectMode: string[];
  /** 可用区名称 */
  Zone: string;
  /** 多可用区信息 */
  ZoneConf: ZoneConf;
  /** 可支持的灾备可用区信息 */
  DrZone: string[];
  /** 是否支持跨可用区只读 */
  IsSupportRemoteRo: boolean;
  /** 可支持的跨可用区只读区信息 */
  RemoteRoZone: string[];
  /** 独享型可用区状态。可能的返回值为：1-上线；3-停售；4-不展示 */
  ExClusterStatus: number;
  /** 独享型可支持的跨可用区只读区信息 */
  ExClusterRemoteRoZone: string[];
  /** 独享型多可用区信息 */
  ExClusterZoneConf: ZoneConf;
  /** 售卖实例类型数组，其中configIds的值与configs结构体中的id一一对应。 */
  SellType: CdbSellType[];
  /** 可用区id */
  ZoneId: number;
  /** 是否支持ipv6 */
  IsSupportIpv6: boolean;
  /** 可支持的售卖数据库引擎类型 */
  EngineType: string[];
}

/** 克隆任务记录。 */
declare interface CloneItem {
  /** 克隆任务的源实例Id。 */
  SrcInstanceId: string;
  /** 克隆任务的新产生实例Id。 */
  DstInstanceId: string;
  /** 克隆任务对应的任务列表Id。 */
  CloneJobId: number;
  /** 克隆实例使用的策略， 包括以下类型： timepoint:指定时间点回档， backupset: 指定备份文件回档。 */
  RollbackStrategy: string;
  /** 克隆实例回档的时间点。 */
  RollbackTargetTime: string;
  /** 任务开始时间。 */
  StartTime: string;
  /** 任务结束时间。 */
  EndTime: string;
  /** 任务状态，包括以下状态：initial,running,wait_complete,success,failed */
  TaskStatus: string;
  /** 克隆实例所在地域Id */
  NewRegionId: number;
  /** 源实例所在地域Id */
  SrcRegionId: number;
}

/** 列权限信息 */
declare interface ColumnPrivilege {
  /** 数据库名 */
  Database: string;
  /** 数据库表名 */
  Table: string;
  /** 数据库列名 */
  Column: string;
  /** 权限信息 */
  Privileges: string[];
}

/** 通用时间窗 */
declare interface CommonTimeWindow {
  /** 周一的时间窗，格式如： 02:00-06:00 */
  Monday?: string;
  /** 周二的时间窗，格式如： 02:00-06:00 */
  Tuesday?: string;
  /** 周三的时间窗，格式如： 02:00-06:00 */
  Wednesday?: string;
  /** 周四的时间窗，格式如： 02:00-06:00 */
  Thursday?: string;
  /** 周五的时间窗，格式如： 02:00-06:00 */
  Friday?: string;
  /** 周六的时间窗，格式如： 02:00-06:00 */
  Saturday?: string;
  /** 周日的时间窗，格式如： 02:00-06:00 */
  Sunday?: string;
  /** 常规备份保留策略，weekly-按周备份，monthly-按月备份，默认为weekly */
  BackupPeriodStrategy?: string;
  /** 如果设置为按月备份，需填入每月具体备份日期，相邻备份天数不得超过两天。例[1,4,7,9,11,14,17,19,22,25,28,30,31] */
  Days?: number[];
  /** 月度备份时间窗，BackupPeriodStrategy为monthly时必填。格式如： 02:00-06:00 */
  BackupPeriodTime?: string;
}

/** 连接池信息 */
declare interface ConnectionPoolInfo {
  /** 是否开启了连接池 */
  ConnectionPool: boolean | null;
  /** 连接池类型：SessionConnectionPool（会话级别连接池） */
  ConnectionPoolType: string | null;
  /** 连接池保持阈值：单位（秒） */
  PoolConnectionTimeOut: number | null;
}

/** proxy配置 */
declare interface CustomConfig {
  /** 设备 */
  Device: string | null;
  /** 类型 */
  Type: string | null;
  /** 设备类型 */
  DeviceType: string | null;
  /** 内存 */
  Memory: number | null;
  /** 核数 */
  Cpu: number | null;
}

/** 云数据库切换记录 */
declare interface DBSwitchInfo {
  /** 切换时间，格式为：2017-09-03 01:34:31 */
  SwitchTime: string;
  /** 切换类型，可能的返回值为：TRANSFER - 数据迁移；MASTER2SLAVE - 主备切换；RECOVERY - 主从恢复 */
  SwitchType: string;
}

/** 数据库表名 */
declare interface DatabaseName {
  /** 数据库表名 */
  DatabaseName: string;
}

/** 数据库权限 */
declare interface DatabasePrivilege {
  /** 权限信息 */
  Privileges: string[];
  /** 数据库名 */
  Database: string;
}

/** 数据库名以及字符集 */
declare interface DatabasesWithCharacterLists {
  /** 数据库名 */
  DatabaseName: string;
  /** 字符集类型 */
  CharacterSet: string;
}

/** 置放群组信息 */
declare interface DeployGroupInfo {
  /** 置放群组 ID。 */
  DeployGroupId: string;
  /** 置放群组名称。 */
  DeployGroupName: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 置放群组实例配额，表示一个置放群组中可容纳的最大实例数目。 */
  Quota: number;
  /** 置放群组亲和性策略，目前仅支持策略1，即在物理机纬度打散实例的分布。 */
  Affinity: string | null;
  /** 置放群组亲和性策略1中，同台物理机上同个置放群组实例的限制个数。 */
  LimitNum: number | null;
  /** 置放群组详细信息。 */
  Description: string;
  /** 置放群组物理机型属性。 */
  DevClass: string | null;
}

/** CPU负载 */
declare interface DeviceCpuInfo {
  /** 实例CPU平均使用率 */
  Rate: DeviceCpuRateInfo[];
  /** 实例CPU监控数据 */
  Load: number[];
}

/** 实例CPU平均使用率 */
declare interface DeviceCpuRateInfo {
  /** Cpu核编号 */
  CpuCore: number;
  /** Cpu使用率 */
  Rate: number[];
}

/** 实例磁盘监控数据 */
declare interface DeviceDiskInfo {
  /** 平均每秒有百分之几的时间用于IO操作 */
  IoRatioPerSec: number[];
  /** 平均每次设备I/O操作的等待时间*100，单位为毫秒。例如：该值为201，表示平均每次I/O操作等待时间为：201/100=2.1毫秒 */
  IoWaitTime: number[];
  /** 磁盘平均每秒完成的读操作次数总和*100。例如：该值为2002，表示磁盘平均每秒完成读操作为：2002/100=20.2次 */
  Read: number[];
  /** 磁盘平均每秒完成的写操作次数总和*100。例如：该值为30001，表示磁盘平均每秒完成写操作为：30001/100=300.01次 */
  Write: number[];
  /** 磁盘空间容量，每两个一组，第一个为已使用容量，第二个为磁盘总容量 */
  CapacityRatio: number[];
}

/** 实例所在物理机内存监控信息 */
declare interface DeviceMemInfo {
  /** 总内存大小。free命令中Mem:一行total的值,单位：KB */
  Total: number[];
  /** 已使用内存。free命令中Mem:一行used的值,单位：KB */
  Used: number[];
}

/** 实例所在物理机网络监控信息 */
declare interface DeviceNetInfo {
  /** tcp连接数 */
  Conn: number[];
  /** 网卡入包量，单位：个/秒 */
  PackageIn: number[];
  /** 网卡出包量，单位：个/秒 */
  PackageOut: number[];
  /** 入流量，单位：kbps */
  FlowIn: number[];
  /** 出流量，单位：kbps */
  FlowOut: number[];
}

/** 灾备实例信息 */
declare interface DrInfo {
  /** 灾备实例状态 */
  Status: number;
  /** 可用区信息 */
  Zone: string;
  /** 实例ID */
  InstanceId: string;
  /** 地域信息 */
  Region: string;
  /** 实例同步状态。可能的返回值为：0 - 灾备未同步；1 - 灾备同步中；2 - 灾备同步成功；3 - 灾备同步失败；4 - 灾备同步修复中。 */
  SyncStatus: number;
  /** 实例名称 */
  InstanceName: string;
  /** 实例类型 */
  InstanceType: number;
}

/** 结构化的错误日志详情 */
declare interface ErrlogItem {
  /** 错误发生时间。 */
  Timestamp: number | null;
  /** 错误详情 */
  Content: string | null;
}

/** 导入任务记录 */
declare interface ImportRecord {
  /** 状态值 */
  Status: number;
  /** 状态值 */
  Code: number;
  /** 执行时间 */
  CostTime: number;
  /** 实例ID */
  InstanceId: string;
  /** 后端任务ID */
  WorkId: string;
  /** 导入文件名 */
  FileName: string;
  /** 执行进度 */
  Process: number;
  /** 任务创建时间 */
  CreateTime: string;
  /** 文件大小 */
  FileSize: string;
  /** 任务执行信息 */
  Message: string;
  /** 任务ID */
  JobId: number;
  /** 导入库表名 */
  DbName: string;
  /** 异步任务的请求ID */
  AsyncRequestId: string;
}

/** 安全组入站规则 */
declare interface Inbound {
  /** 策略，ACCEPT 或者 DROP */
  Action?: string;
  /** 来源 IP 或 IP 段，例如192.168.0.0/16 */
  CidrIp?: string;
  /** 端口 */
  PortRange?: string;
  /** 网络协议，支持 UDP、TCP 等 */
  IpProtocol?: string;
  /** 规则限定的方向，进站规则为 INPUT */
  Dir?: string;
  /** 规则描述 */
  Desc: string;
}

/** 实例详细信息 */
declare interface InstanceInfo {
  /** 外网状态，可能的返回值为：0-未开通外网；1-已开通外网；2-已关闭外网 */
  WanStatus: number;
  /** 可用区信息 */
  Zone: string;
  /** 初始化标志，可能的返回值为：0-未初始化；1-已初始化 */
  InitFlag: number;
  /** 只读vip信息。单独开通只读实例访问的只读实例才有该字段 */
  RoVipInfo: RoVipInfo | null;
  /** 内存容量，单位为 MB */
  Memory: number;
  /** 实例状态，可能的返回值：0-创建中；1-运行中；4-正在进行隔离操作；5-已隔离 */
  Status: number;
  /** 私有网络 ID，例如：51102 */
  VpcId: number;
  /** 备机信息 */
  SlaveInfo: SlaveInfo | null;
  /** 实例 ID */
  InstanceId: string;
  /** 硬盘容量，单位为 GB */
  Volume: number;
  /** 自动续费标志，可能的返回值：0-未开通自动续费；1-已开通自动续费；2-已关闭自动续费 */
  AutoRenew: number;
  /** 数据复制方式。0 - 异步复制；1 - 半同步复制；2 - 强同步复制 */
  ProtectMode: number;
  /** 只读组详细信息 */
  RoGroups: RoGroup[] | null;
  /** 子网 ID，例如：2333 */
  SubnetId: number;
  /** 实例类型，可能的返回值：1-主实例；2-灾备实例；3-只读实例 */
  InstanceType: number;
  /** 项目 ID */
  ProjectId: number;
  /** 地域信息 */
  Region: string;
  /** 实例到期时间 */
  DeadlineTime: string;
  /** 可用区部署方式。可能的值为：0 - 单可用区；1 - 多可用区 */
  DeployMode: number;
  /** 实例任务状态。0 - 没有任务 ,1 - 升级中,2 - 数据导入中,3 - 开放Slave中,4 - 外网访问开通中,5 - 批量操作执行中,6 - 回档中,7 - 外网访问关闭中,8 - 密码修改中,9 - 实例名修改中,10 - 重启中,12 - 自建迁移中,13 - 删除库表中,14 - 灾备实例创建同步中,15 - 升级待切换,16 - 升级切换中,17 - 升级切换完成 */
  TaskStatus: number;
  /** 主实例详细信息 */
  MasterInfo?: MasterInfo | null;
  /** 实例类型 */
  DeviceType: string;
  /** 内核版本 */
  EngineVersion: string;
  /** 实例名称 */
  InstanceName: string;
  /** 灾备实例详细信息 */
  DrInfo: DrInfo[] | null;
  /** 外网域名 */
  WanDomain: string;
  /** 外网端口号 */
  WanPort: number;
  /** 付费类型，可能的返回值：0-包年包月；1-按量计费 */
  PayType: number;
  /** 实例创建时间 */
  CreateTime: string;
  /** 实例 IP */
  Vip: string;
  /** 端口号 */
  Vport: number;
  /** 磁盘写入是否被锁定（实例数据写入量已经超过磁盘配额）。0 -未被锁定 1 -已被锁定 */
  CdbError: number;
  /** 私有网络描述符，例如：“vpc-5v8wn9mg” */
  UniqVpcId: string;
  /** 子网描述符，例如：“subnet-1typ0s7d” */
  UniqSubnetId: string;
  /** 物理 ID */
  PhysicalId: string;
  /** 核心数 */
  Cpu: number;
  /** 每秒查询数量 */
  Qps: number;
  /** 可用区中文名称 */
  ZoneName: string;
  /** 物理机型 */
  DeviceClass: string | null;
  /** 置放群组 ID */
  DeployGroupId: string | null;
  /** 可用区 ID */
  ZoneId: number | null;
  /** 节点数 */
  InstanceNodes: number;
  /** 标签列表 */
  TagList: TagInfoItem[] | null;
  /** 引擎类型 */
  EngineType: string | null;
  /** 最大延迟阈值 */
  MaxDelayTime: number | null;
  /** 实例磁盘类型，仅云盘版实例才返回该值。可能的值为 CLOUD_SSD：SSD云硬盘， CLOUD_HSSD：增强型SSD云硬盘 */
  DiskType: string;
}

/** 实例预期重启时间 */
declare interface InstanceRebootTime {
  /** 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 预期重启时间 */
  TimeInSeconds: number;
}

/** 实例可回档时间范围 */
declare interface InstanceRollbackRangeTime {
  /** 查询数据库错误码 */
  Code: number;
  /** 查询数据库错误信息 */
  Message: string;
  /** 实例ID列表，单个实例Id的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 可回档时间范围 */
  Times: RollbackTimeRange[];
}

/** 本地binlog保留配置 */
declare interface LocalBinlogConfig {
  /** 本地binlog保留时长，可取值范围：[72,168]。 */
  SaveHours: number;
  /** 本地binlog空间使用率，可取值范围：[30,50]。 */
  MaxUsage: number;
}

/** 本地binlog保留策略默认配置。 */
declare interface LocalBinlogConfigDefault {
  /** 本地binlog保留时长，可取值范围：[72,168]。 */
  SaveHours: number;
  /** 本地binlog空间使用率，可取值范围：[30,50]。 */
  MaxUsage: number;
}

/** 主实例信息 */
declare interface MasterInfo {
  /** 地域信息 */
  Region: string;
  /** 地域ID */
  RegionId: number;
  /** 可用区ID */
  ZoneId: number;
  /** 可用区信息 */
  Zone: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例长ID */
  ResourceId: string;
  /** 实例状态 */
  Status: number;
  /** 实例名称 */
  InstanceName: string;
  /** 实例类型 */
  InstanceType: number;
  /** 任务状态 */
  TaskStatus: number;
  /** 内存容量 */
  Memory: number;
  /** 硬盘容量 */
  Volume: number;
  /** 实例机型 */
  DeviceType: string;
  /** 每秒查询数 */
  Qps: number;
  /** 私有网络ID */
  VpcId: number;
  /** 子网ID */
  SubnetId: number;
  /** 独享集群ID */
  ExClusterId: string;
  /** 独享集群名称 */
  ExClusterName: string;
}

/** 安全组出站规则 */
declare interface Outbound {
  /** 策略，ACCEPT 或者 DROP */
  Action?: string;
  /** 目的 IP 或 IP 段，例如172.16.0.0/12 */
  CidrIp?: string;
  /** 端口或者端口范围 */
  PortRange?: string;
  /** 网络协议，支持 UDP、TCP等 */
  IpProtocol?: string;
  /** 规则限定的方向，进站规则为 OUTPUT */
  Dir?: string;
  /** 规则描述 */
  Desc: string;
}

/** 实例参数信息 */
declare interface ParamInfo {
  /** 参数名 */
  Name: string;
  /** 参数值 */
  Value: string;
}

/** 参数修改记录 */
declare interface ParamRecord {
  /** 实例ID */
  InstanceId: string;
  /** 参数名称 */
  ParamName: string;
  /** 参数修改前的值 */
  OldValue: string;
  /** 参数修改后的值 */
  NewValue: string;
  /** 参数是否修改成功 */
  IsSucess: boolean;
  /** 修改时间 */
  ModifyTime: string;
}

/** 参数模板信息 */
declare interface ParamTemplateInfo {
  /** 参数模板ID */
  TemplateId: number;
  /** 参数模板名称 */
  Name: string;
  /** 参数模板描述 */
  Description: string;
  /** 实例引擎版本 */
  EngineVersion: string;
  /** 参数模板类型 */
  TemplateType: string;
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
  /** 参数类型：integer，enum，float，string，func */
  ParamType: string;
  /** 参数默认值 */
  Default: string;
  /** 参数描述 */
  Description: string;
  /** 参数当前值 */
  CurrentValue: string;
  /** 修改参数后，是否需要重启数据库以使参数生效。可能的值包括：0-不需要重启；1-需要重启 */
  NeedReboot: number;
  /** 参数允许的最大值 */
  Max: number;
  /** 参数允许的最小值 */
  Min: number;
  /** 参数的可选枚举值。如果为非枚举参数，则为空 */
  EnumValue: string[];
  /** 参数是公式类型时，该字段有效，表示公式类型最大值 */
  MaxFunc: string;
  /** 参数是公式类型时，该字段有效，表示公式类型最小值 */
  MinFunc: string;
}

/** 数据库代理连接池规格配置 */
declare interface PoolConf {
  /** 连接池类型：SessionConnectionPool（会话级别连接池 */
  ConnectionPoolType: string | null;
  /** 最大可保持连接阈值：单位（秒） */
  MaxPoolConnectionTimeOut: number | null;
  /** 最小可保持连接阈值：单位（秒） */
  MinPoolConnectionTimeOut: number | null;
}

/** 数据代理组信息 */
declare interface ProxyGroup {
  /** 代理基本信息 */
  BaseGroup: BaseGroupInfo | null;
  /** 代理地址信息 */
  Address: Address[] | null;
  /** 代理连接池信息 */
  ConnectionPoolInfo: ConnectionPoolInfo | null;
  /** 代理节点信息 */
  ProxyNode: ProxyNodeInfo[] | null;
  /** 代理路由信息 */
  RWInstInfo: RWInfo | null;
}

/** 数据代理组信息 */
declare interface ProxyGroups {
  /** 代理基本信息 */
  BaseGroup: BaseGroupInfo | null;
  /** 代理地址信息 */
  Address: Address[] | null;
  /** 代理连接池信息 */
  ConnectionPoolInfo: ConnectionPoolInfo | null;
  /** 代理节点信息 */
  ProxyNode: ProxyNodeInfo[] | null;
  /** 代理路由信息 */
  RWInstInfo: RWInfos | null;
}

/** 代理节点信息 */
declare interface ProxyNodeInfo {
  /** 代理节点ID */
  ProxyNodeId: string | null;
  /** 节点当前连接数 */
  ProxyNodeConnections: number | null;
  /** cup */
  ProxyNodeCpu: number | null;
  /** 内存 */
  ProxyNodeMem: number | null;
  /** 节点状态：init（申请中）online（运行中）offline（离线中）destroy（已销毁）recovering（故障恢复中）error（节点故障） */
  ProxyStatus: string | null;
}

/** proxy读写分离信息 */
declare interface RWInfo {
  /** 代理实例数量 */
  InstCount: number | null;
  /** 权重分配模式；系统自动分配："system"， 自定义："custom" */
  WeightMode: string | null;
  /** 是否开启延迟剔除 */
  IsKickOut: boolean | null;
  /** 最小保留数 */
  MinCount: number | null;
  /** 延迟剔除阈值 */
  MaxDelay: number | null;
  /** 是否开启故障转移 */
  FailOver: boolean | null;
  /** 是否自动添加RO */
  AutoAddRo: boolean | null;
  /** 代理实例信息 */
  RWInstInfo: RWInstanceInfo | null;
}

/** proxy读写分离信息 */
declare interface RWInfos {
  /** 代理实例数量 */
  InstCount: number | null;
  /** 权重分配模式；系统自动分配："system"， 自定义："custom" */
  WeightMode: string | null;
  /** 是否开启延迟剔除 */
  IsKickOut: boolean | null;
  /** 最小保留数 */
  MinCount: number | null;
  /** 延迟剔除阈值 */
  MaxDelay: number | null;
  /** 是否开启故障转移 */
  FailOver: boolean | null;
  /** 是否自动添加RO */
  AutoAddRo: boolean | null;
  /** 代理实例信息 */
  RWInstInfo: RWInstanceInfo[] | null;
}

/** 代理实例信息 */
declare interface RWInstanceInfo {
}

/** 解隔离任务结果 */
declare interface ReleaseResult {
  /** 实例 ID。 */
  InstanceId: string;
  /** 实例解隔离操作的结果值。返回值为0表示成功。 */
  Code: number;
  /** 实例解隔离操作的错误信息。 */
  Message: string;
}

/** 异地备份信息 */
declare interface RemoteBackupInfo {
  /** 异地备份子任务的ID */
  SubBackupId: number[];
  /** 异地备份所在地域 */
  Region: string;
  /** 备份任务状态。可能的值有 "SUCCESS": 备份成功， "FAILED": 备份失败， "RUNNING": 备份进行中。 */
  Status: string;
  /** 异地备份任务的开始时间 */
  StartTime: string;
  /** 异地备份任务的结束时间 */
  FinishTime: string;
  /** 下载地址 */
  Url: string;
}

/** 只读组参数 */
declare interface RoGroup {
  /** 只读组模式，可选值为：alone-系统自动分配只读组；allinone-新建只读组；join-使用现有只读组。 */
  RoGroupMode: string;
  /** 只读组 ID。 */
  RoGroupId?: string;
  /** 只读组名称。 */
  RoGroupName?: string;
  /** 是否启用延迟超限剔除功能，启用该功能后，只读实例与主实例的延迟超过延迟阈值，只读实例将被隔离。可选值：1-启用；0-不启用。 */
  RoOfflineDelay?: number;
  /** 延迟阈值。 */
  RoMaxDelayTime?: number;
  /** 最少实例保留个数，若购买只读实例数量小于设置数量将不做剔除。 */
  MinRoInGroup?: number;
  /** 读写权重分配模式，可选值：system-系统自动分配；custom-自定义。 */
  WeightMode?: string;
  /** 权重值。 */
  Weight?: number;
  /** 只读组中的只读实例详情。 */
  RoInstances?: RoInstanceInfo[];
  /** 只读组的内网 IP。 */
  Vip?: string;
  /** 只读组的内网端口号。 */
  Vport?: number;
  /** 私有网络 ID。 */
  UniqVpcId?: string | null;
  /** 子网 ID。 */
  UniqSubnetId?: string | null;
  /** 只读组所在的地域。 */
  RoGroupRegion?: string | null;
  /** 只读组所在的可用区。 */
  RoGroupZone?: string | null;
  /** 延迟复制时间。 */
  DelayReplicationTime?: number | null;
}

/** RO 组的配置信息 */
declare interface RoGroupAttr {
  /** RO 组名称。 */
  RoGroupName?: string;
  /** RO 实例最大延迟阈值。单位为秒，最小值为 1。注意，RO 组必须设置了开启实例延迟剔除策略，该值才有效。 */
  RoMaxDelayTime?: number;
  /** 是否开启实例延迟剔除。支持的值包括：1 - 开启；0 - 不开启。注意，若设置开启实例延迟剔除，则必须设置延迟阈值（RoMaxDelayTime）参数。 */
  RoOfflineDelay?: number;
  /** 最少保留实例数。可设置为小于或等于该 RO 组下 RO 实例个数的任意值。注意，若设置值大于 RO 实例数量将不做剔除；若设置为 0，所有实例延迟超限都会被剔除。 */
  MinRoInGroup?: number;
  /** 权重模式。支持值包括："system" - 系统自动分配； "custom" - 用户自定义设置。注意，若设置 "custom" 模式，则必须设置 RO 实例权重配置（RoWeightValues）参数。 */
  WeightMode?: string;
  /** 延迟复制时间。 */
  ReplicationDelayTime?: number;
}

/** RO实例的详细信息 */
declare interface RoInstanceInfo {
  /** RO组对应的主实例的ID */
  MasterInstanceId: string;
  /** RO实例在RO组内的状态，可能的值：online-在线，offline-下线 */
  RoStatus: string;
  /** RO实例在RO组内上一次下线的时间 */
  OfflineTime: string;
  /** RO实例在RO组内的权重 */
  Weight: number;
  /** RO实例所在区域名称，如ap-shanghai */
  Region: string;
  /** RO可用区的正式名称，如ap-shanghai-1 */
  Zone: string;
  /** RO实例ID，格式如：cdbro-c1nl9rpv */
  InstanceId: string;
  /** RO实例状态，可能返回值：0-创建中，1-运行中，3-异地RO（仅在使用DescribeDBInstances查询主实例信息时，返回值中异地RO的状态恒等于3，其他场景下无此值），4-删除中 */
  Status: number;
  /** 实例类型，可能返回值：1-主实例，2-灾备实例，3-只读实例 */
  InstanceType: number;
  /** RO实例名称 */
  InstanceName: string;
  /** 按量计费状态，可能的取值：1-正常，2-欠费 */
  HourFeeStatus: number;
  /** RO实例任务状态，可能返回值：0-没有任务1-升级中2-数据导入中3-开放Slave中4-外网访问开通中5-批量操作执行中6-回档中7-外网访问关闭中8-密码修改中9-实例名修改中10-重启中12-自建迁移中13-删除库表中14-灾备实例创建同步中 */
  TaskStatus: number;
  /** RO实例内存大小，单位：MB */
  Memory: number;
  /** RO实例硬盘大小，单位：GB */
  Volume: number;
  /** 每次查询数量 */
  Qps: number;
  /** RO实例的内网IP地址 */
  Vip: string;
  /** RO实例访问端口 */
  Vport: number;
  /** RO实例所在私有网络ID */
  VpcId: number;
  /** RO实例所在私有网络子网ID */
  SubnetId: number;
  /** RO实例规格描述，目前可取值 CUSTOM */
  DeviceType: string;
  /** RO实例数据库引擎版本，可能返回值：5.1、5.5、5.6、5.7、8.0 */
  EngineVersion: string;
  /** RO实例到期时间，时间格式：yyyy-mm-dd hh:mm:ss，如实例为按量计费模式，则此字段值为0000-00-00 00:00:00 */
  DeadlineTime: string;
  /** RO实例计费类型，可能返回值：0-包年包月，1-按量计费，2-后付费月结 */
  PayType: number;
}

/** 只读vip信息 */
declare interface RoVipInfo {
  /** 只读vip状态 */
  RoVipStatus: number;
  /** 只读vip的子网 */
  RoSubnetId: number;
  /** 只读vip的私有网络 */
  RoVpcId: number;
  /** 只读vip的端口号 */
  RoVport: number;
  /** 只读vip */
  RoVip: string;
}

/** RO 实例的权重值 */
declare interface RoWeightValue {
  /** RO 实例 ID。 */
  InstanceId: string;
  /** 权重值。取值范围为 [0, 100]。 */
  Weight: number;
}

/** 用于回档的数据库名 */
declare interface RollbackDBName {
  /** 回档前的原数据库名 */
  DatabaseName: string | null;
  /** 回档后的新数据库名 */
  NewDatabaseName: string | null;
}

/** 用于回档的实例详情 */
declare interface RollbackInstancesInfo {
  /** 云数据库实例ID */
  InstanceId: string | null;
  /** 回档策略。可选值为：table、db、full；默认值为full。table - 极速回档模式，仅导入所选中表级别的备份和binlog，如有跨表操作，且关联表未被同时选中，将会导致回档失败，该模式下参数Databases必须为空；db - 快速模式，仅导入所选中库级别的备份和binlog，如有跨库操作，且关联库未被同时选中，将会导致回档失败；full - 普通回档模式，将导入整个实例的备份和binlog，速度较慢。 */
  Strategy: string;
  /** 数据库回档时间，时间格式为：yyyy-mm-dd hh:mm:ss */
  RollbackTime: string;
  /** 待回档的数据库信息，表示整库回档 */
  Databases?: RollbackDBName[] | null;
  /** 待回档的数据库表信息，表示按表回档 */
  Tables?: RollbackTables[] | null;
}

/** 用于回档的数据库表名 */
declare interface RollbackTableName {
  /** 回档前的原数据库表名 */
  TableName: string | null;
  /** 回档后的新数据库表名 */
  NewTableName: string | null;
}

/** 用于回档的数据库表详情 */
declare interface RollbackTables {
  /** 数据库名 */
  Database: string | null;
  /** 数据库表详情 */
  Table: RollbackTableName[] | null;
}

/** 回档任务详情 */
declare interface RollbackTask {
  /** 任务执行信息描述。 */
  Info: string;
  /** 任务执行结果。可能的取值：INITIAL - 初始化，RUNNING - 运行中，SUCCESS - 执行成功，FAILED - 执行失败，KILLED - 已终止，REMOVED - 已删除，PAUSED - 终止中。 */
  Status: string;
  /** 任务执行进度。取值范围为[0, 100]。 */
  Progress: number;
  /** 任务开始时间。 */
  StartTime: string;
  /** 任务结束时间。 */
  EndTime: string;
  /** 回档任务详情。 */
  Detail: RollbackInstancesInfo[] | null;
}

/** 可回档时间范围 */
declare interface RollbackTimeRange {
  /** 实例可回档开始时间，时间格式：2016-10-29 01:06:04 */
  Begin: string;
  /** 实例可回档结束时间，时间格式：2016-11-02 11:44:47 */
  End: string;
}

/** 权重分配规则 */
declare interface Rule {
  /** 划分上限 */
  LessThan: number | null;
  /** 权重 */
  Weight: number | null;
}

/** 审计规则的规则过滤条件 */
declare interface RuleFilters {
  /** 审计规则过滤条件的参数名称。可选值：host – 客户端 IP；user – 数据库账户；dbName – 数据库名称；sqlType-SQL类型；sql-sql语句；affectRows -影响行数；sentRows-返回行数；checkRows-扫描行数；execTime-执行时间。 */
  Type: string;
  /** 审计规则过滤条件的匹配类型。可选值：INC – 包含；EXC – 不包含；EQS – 等于；NEQ – 不等于；REG-正则；GT-大于；LT-小于。 */
  Compare: string;
  /** 审计规则过滤条件的匹配值。sqlType条件的Value需在一下选择"alter", "changeuser", "create", "delete", "drop", "execute", "insert", "login", "logout", "other", "replace", "select", "set", "update"。 */
  Value: string[];
}

/** 安全组详情 */
declare interface SecurityGroup {
  /** 项目ID */
  ProjectId: number;
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss */
  CreateTime: string;
  /** 入站规则 */
  Inbound: Inbound[];
  /** 出站规则 */
  Outbound: Outbound[];
  /** 安全组ID */
  SecurityGroupId: string;
  /** 安全组名称 */
  SecurityGroupName: string;
  /** 安全组备注 */
  SecurityGroupRemark: string;
}

/** 从库的配置信息 */
declare interface SlaveConfig {
  /** 从库复制方式，可能的返回值：aysnc-异步，semisync-半同步 */
  ReplicationMode: string;
  /** 从库可用区的正式名称，如ap-shanghai-1 */
  Zone: string;
}

/** 备机信息 */
declare interface SlaveInfo {
  /** 第一备机信息 */
  First: SlaveInstanceInfo;
  /** 第二备机信息 */
  Second?: SlaveInstanceInfo | null;
}

/** 备机信息 */
declare interface SlaveInstanceInfo {
  /** 端口号 */
  Vport: number;
  /** 地域信息 */
  Region: string;
  /** 虚拟 IP 信息 */
  Vip: string;
  /** 可用区信息 */
  Zone: string;
}

/** 慢查询日志详情 */
declare interface SlowLogInfo {
  /** 备份文件名 */
  Name: string;
  /** 备份文件大小，单位：Byte */
  Size: number;
  /** 备份快照时间，时间格式：2016-03-17 02:10:37 */
  Date: string;
  /** 内网下载地址 */
  IntranetUrl: string;
  /** 外网下载地址 */
  InternetUrl: string;
  /** 日志具体类型，可能的值：slowlog - 慢日志 */
  Type: string;
}

/** 结构化的慢日志详情 */
declare interface SlowLogItem {
  /** Sql的执行时间。 */
  Timestamp: number | null;
  /** Sql的执行时长（秒）。 */
  QueryTime: number | null;
  /** Sql语句。 */
  SqlText: string | null;
  /** 客户端地址。 */
  UserHost: string | null;
  /** 用户名。 */
  UserName: string | null;
  /** 数据库名。 */
  Database: string | null;
  /** 锁时长（秒）。 */
  LockTime: number | null;
  /** 扫描行数。 */
  RowsExamined: number | null;
  /** 结果集行数。 */
  RowsSent: number | null;
  /** Sql模板。 */
  SqlTemplate: string | null;
  /** Sql语句的md5。 */
  Md5: string | null;
}

/** sql文件信息 */
declare interface SqlFileInfo {
  /** 上传时间 */
  UploadTime: string;
  /** 上传进度 */
  UploadInfo: UploadInfo;
  /** 文件名 */
  FileName: string;
  /** 文件大小，单位为Bytes */
  FileSize: number;
  /** 上传是否完成标志，可选值：0 - 未完成，1 - 已完成 */
  IsUploadFinished: number;
  /** 文件ID */
  FileId: string;
}

/** 表名 */
declare interface TableName {
  /** 表名 */
  TableName: string;
}

/** 数据库表权限 */
declare interface TablePrivilege {
  /** 数据库名 */
  Database: string;
  /** 数据库表名 */
  Table: string;
  /** 权限信息 */
  Privileges: string[];
}

/** 标签结构 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 标签信息 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string[];
}

/** 标签信息 */
declare interface TagInfoItem {
  /** 标签键 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

/** tag信息单元 */
declare interface TagInfoUnit {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 实例的标签信息 */
declare interface TagsInfoOfInstance {
  /** 实例Id */
  InstanceId: string;
  /** 标签信息 */
  Tags: TagInfoUnit[];
}

/** 实例任务详情 */
declare interface TaskDetail {
  /** 错误码。 */
  Code: number;
  /** 错误信息。 */
  Message: string;
  /** 实例任务 ID。 */
  JobId: number;
  /** 实例任务进度。 */
  Progress: number;
  /** 实例任务状态，可能的值包括："UNDEFINED" - 未定义；"INITIAL" - 初始化；"RUNNING" - 运行中；"SUCCEED" - 执行成功；"FAILED" - 执行失败；"KILLED" - 已终止；"REMOVED" - 已删除；"PAUSED" - 已暂停。"WAITING" - 等待中（可撤销） */
  TaskStatus: string;
  /** 实例任务类型，可能的值包括："ROLLBACK" - 数据库回档；"SQL OPERATION" - SQL操作；"IMPORT DATA" - 数据导入；"MODIFY PARAM" - 参数设置；"INITIAL" - 初始化云数据库实例；"REBOOT" - 重启云数据库实例；"OPEN GTID" - 开启云数据库实例GTID；"UPGRADE RO" - 只读实例升级；"BATCH ROLLBACK" - 数据库批量回档；"UPGRADE MASTER" - 主实例升级；"DROP TABLES" - 删除云数据库库表；"SWITCH DR TO MASTER" - 灾备实例提升为主。 */
  TaskType: string;
  /** 实例任务开始时间。 */
  StartTime: string;
  /** 实例任务结束时间。 */
  EndTime: string;
  /** 任务关联的实例 ID。 */
  InstanceIds: string[] | null;
  /** 异步任务的请求 ID。 */
  AsyncRequestId: string;
}

/** 文件上传描述 */
declare interface UploadInfo {
  /** 文件所有分片数 */
  AllSliceNum: number;
  /** 已完成分片数 */
  CompleteNum: number;
}

/** 多可用区信息 */
declare interface ZoneConf {
  /** 可用区部署方式，可能的值为：0-单可用区；1-多可用区 */
  DeployMode: number[];
  /** 主实例所在的可用区 */
  MasterZone: string[];
  /** 实例为多可用区部署时，备库1所在的可用区 */
  SlaveZone: string[];
  /** 实例为多可用区部署时，备库2所在的可用区 */
  BackupZone: string[];
}

declare interface AddTimeWindowRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 星期一的可维护时间段，其中每一个时间段的格式形如：10:00-12:00；起始时间按半个小时对齐；最短半个小时，最长三个小时；可设置多个时间段。 一周中应至少设置一天的时间窗。下同。 */
  Monday?: string[];
  /** 星期二的可维护时间窗口。 一周中应至少设置一天的时间窗。 */
  Tuesday?: string[];
  /** 星期三的可维护时间窗口。 一周中应至少设置一天的时间窗。 */
  Wednesday?: string[];
  /** 星期四的可维护时间窗口。 一周中应至少设置一天的时间窗。 */
  Thursday?: string[];
  /** 星期五的可维护时间窗口。 一周中应至少设置一天的时间窗。 */
  Friday?: string[];
  /** 星期六的可维护时间窗口。 一周中应至少设置一天的时间窗。 */
  Saturday?: string[];
  /** 星期日的可维护时间窗口。 一周中应至少设置一天的时间窗。 */
  Sunday?: string[];
  /** 最大延迟阈值，仅对主实例和灾备实例有效 */
  MaxDelayTime?: number;
}

declare interface AddTimeWindowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AnalyzeAuditLogsRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 要分析的日志开始时间，格式为："2023-02-16 00:00:20"。 */
  StartTime: string;
  /** 要分析的日志结束时间，格式为："2023-02-16 00:10:20"。 */
  EndTime: string;
  /** 聚合维度的排序条件。 */
  AggregationConditions: AggregationCondition[];
  /** 该过滤条件下的审计日志结果集作为分析日志。 */
  AuditLogFilter?: AuditLogFilter;
}

declare interface AnalyzeAuditLogsResponse {
  /** 返回的聚合桶信息集 */
  Items?: AuditLogAggregationResult[] | null;
  /** 扫描的日志条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 安全组 ID。 */
  SecurityGroupId: string;
  /** 实例 ID 列表，一个或者多个实例 ID 组成的数组。 */
  InstanceIds: string[];
  /** 当传入只读实例ID时，默认操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True */
  ForReadonlyInstance?: boolean;
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BalanceRoGroupLoadRequest {
  /** RO 组的 ID，格式如：cdbrg-c1nl9rpv。 */
  RoGroupId: string;
}

declare interface BalanceRoGroupLoadResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseCDBProxyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 代理组ID */
  ProxyGroupId?: string;
  /** 是否只关闭读写分离，取值："true" | "false"，默认为"false" */
  OnlyCloseRW?: boolean;
}

declare interface CloseCDBProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseWanServiceRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
}

declare interface CloseWanServiceResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccountsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 云数据库账号。 */
  Accounts: Account[];
  /** 新账户的密码。 */
  Password: string;
  /** 备注信息。 */
  Description?: string;
  /** 新账户最大可用连接数，默认值为10240，最大可设置值为10240。 */
  MaxUserConnections?: number;
}

declare interface CreateAccountsResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuditLogFileRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 开始时间，格式为："2017-07-12 10:29:20"。 */
  StartTime: string;
  /** 结束时间，格式为："2017-07-12 10:29:20"。 */
  EndTime: string;
  /** 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。 */
  Order?: string;
  /** 排序字段。支持值包括："timestamp" - 时间戳；"affectRows" - 影响行数；"execTime" - 执行时间。 */
  OrderBy?: string;
  /** 过滤条件。可按设置的过滤条件过滤日志。 */
  Filter?: AuditLogFilter;
}

declare interface CreateAuditLogFileResponse {
  /** 审计日志文件名称。 */
  FileName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuditPolicyRequest {
  /** 审计策略名称。 */
  Name: string;
  /** 审计规则 ID。 */
  RuleId: string;
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 审计日志保存时长。支持值包括：7 - 一周30 - 一个月；180 - 六个月；365 - 一年；1095 - 三年；1825 - 五年；实例首次开通审计策略时，可传该值，用于设置存储日志保存天数，默认为 30 天。若实例已存在审计策略，则此参数无效，可使用 更改审计服务配置 接口修改日志存储时长。 */
  LogExpireDay?: number;
}

declare interface CreateAuditPolicyResponse {
  /** 审计策略 ID。 */
  PolicyId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuditRuleRequest {
  /** 审计规则名称。 */
  RuleName: string;
  /** 审计规则描述。 */
  Description?: string;
  /** 审计规则过滤条件。若设置了过滤条件，则不会开启全审计。 */
  RuleFilters?: AuditFilter[];
  /** 是否开启全审计。支持值包括：false – 不开启全审计，true – 开启全审计。用户未设置审计规则过滤条件时，默认开启全审计。 */
  AuditAll?: boolean;
}

declare interface CreateAuditRuleResponse {
  /** 审计规则 ID。 */
  RuleId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 目标备份方法，可选的值：logical - 逻辑冷备，physical - 物理冷备，snapshot - 快照备份。基础版实例仅支持快照备份。 */
  BackupMethod: string;
  /** 需要备份的库表信息，如果不设置该参数，则默认整实例备份。在 BackupMethod=logical 逻辑备份中才可设置该参数。指定的库表必须存在，否则可能导致备份失败。例：如果需要备份 db1 库的 tb1、tb2 表 和 db2 库。则该参数设置为 [{"Db": "db1", "Table": "tb1"}, {"Db": "db1", "Table": "tb2"}, {"Db": "db2"} ]。 */
  BackupDBTableList?: BackupItem[];
  /** 手动备份别名 */
  ManualBackupName?: string;
}

declare interface CreateBackupResponse {
  /** 备份任务 ID。 */
  BackupId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloneInstanceRequest {
  /** 克隆源实例Id。 */
  InstanceId: string;
  /** 如果需要克隆实例回档到指定时间，则指定该值。时间格式为： yyyy-mm-dd hh:mm:ss 。 */
  SpecifiedRollbackTime?: string;
  /** 如果需要克隆实例回档到指定备份的时间点，则指定该值为物理备份的Id。请使用 [查询数据备份文件列表](/document/api/236/15842) 。 */
  SpecifiedBackupId?: number;
  /** 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。 */
  UniqVpcId?: string;
  /** 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 [查询子网列表](/document/api/215/15784)。 */
  UniqSubnetId?: string;
  /** 实例内存大小，单位：MB，需要不低于克隆源实例，默认和源实例相同。 */
  Memory?: number;
  /** 实例硬盘大小，单位：GB，需要不低于克隆源实例，默认和源实例相同。 */
  Volume?: number;
  /** 新产生的克隆实例名称。 */
  InstanceName?: string;
  /** 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。 */
  SecurityGroup?: string[];
  /** 实例标签信息。 */
  ResourceTags?: TagInfo[];
  /** 实例Cpu核数，需要不低于克隆源实例，默认和源实例相同。 */
  Cpu?: number;
  /** 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。 */
  ProtectMode?: number;
  /** 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区。 */
  DeployMode?: number;
  /** 新产生的克隆实例备库 1 的可用区信息，默认同源实例 Zone 的值。 */
  SlaveZone?: string;
  /** 备库 2 的可用区信息，默认为空，克隆强同步主实例时可指定该参数。 */
  BackupZone?: string;
  /** 克隆实例类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例。 不指定则默认为通用型。 */
  DeviceType?: string;
  /** 新克隆实例节点数。如果需要克隆出三节点实例， 请将该值设置为3 或指定 BackupZone 参数。如果需要克隆出两节点实例，请将该值设置为2。默认克隆出两节点实例。 */
  InstanceNodes?: number;
  /** 置放群组 ID。 */
  DeployGroupId?: string;
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制等。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.默认为false：发送正常请求，通过检查后直接创建实例。 */
  DryRun?: boolean;
  /** 金融围拢 ID 。 */
  CageId?: string;
  /** 项目ID，默认项目ID0 */
  ProjectId?: number;
}

declare interface CreateCloneInstanceResponse {
  /** 异步任务的请求ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBImportJobRequest {
  /** 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 云数据库的用户名。 */
  User: string;
  /** 文件名称。该文件是指用户已上传到腾讯云的文件，仅支持.sql文件。 */
  FileName?: string;
  /** 云数据库实例 User 账号的密码。 */
  Password?: string;
  /** 导入的目标数据库名，不传表示不指定数据库。 */
  DbName?: string;
  /** 腾讯云COS文件链接。 用户需要指定 FileName 或者 CosUrl 其中一个。 COS文件需要是 .sql 文件。 */
  CosUrl?: string;
}

declare interface CreateDBImportJobResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceHourRequest {
  /** 实例数量，默认值为 1，最小值 1，最大值为 100。 */
  GoodsNum: number;
  /** 实例内存大小，单位：MB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的内存规格。 */
  Memory: number;
  /** 实例硬盘大小，单位：GB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的硬盘范围。 */
  Volume: number;
  /** MySQL 版本，值包括：5.5、5.6 、5.7 、8.0，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。 */
  EngineVersion?: string;
  /** 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。 */
  UniqVpcId?: string;
  /** 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用[查询子网列表](/document/api/215/15784)。 */
  UniqSubnetId?: string;
  /** 项目 ID，不填为默认项目。 */
  ProjectId?: number;
  /** 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。 */
  Zone?: string;
  /** 实例 ID，购买只读实例或者灾备实例时必填，该字段表示只读实例或者灾备实例的主实例 ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。 */
  MasterInstanceId?: string;
  /** 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。 */
  InstanceRole?: string;
  /** 主实例地域信息，购买灾备、RO实例时，该字段必填。 */
  MasterRegion?: string;
  /** 自定义端口，端口支持范围：[ 1024-65535 ] 。 */
  Port?: number;
  /** 设置 root 帐号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。 */
  Password?: string;
  /** 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。 */
  ParamList?: ParamInfo[];
  /** 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。 */
  ProtectMode?: number;
  /** 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。 */
  DeployMode?: number;
  /** 备库 1 的可用区信息，默认为 Zone 的值，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。 */
  SlaveZone?: string;
  /** 备库 2 的可用区信息，默认为空，购买三节点主实例时可指定该参数。 */
  BackupZone?: string;
  /** 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。 */
  SecurityGroup?: string[];
  /** 只读实例信息。购买只读实例时，该参数必传。 */
  RoGroup?: RoGroup;
  /** 购买按量计费实例该字段无意义。 */
  AutoRenewFlag?: number;
  /** 实例名称。一次购买多个实例命名会用后缀数字区分，例instnaceName=db，goodsNum=3，实例命名分别为db1，db2，db3。 */
  InstanceName?: string;
  /** 实例标签信息。 */
  ResourceTags?: TagInfo[];
  /** 置放群组 ID。 */
  DeployGroupId?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间在48小时内唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。 */
  DeviceType?: string;
  /** 参数模板id。 */
  ParamTemplateId?: number;
  /** 告警策略id数组。云监控DescribeAlarmPolicy接口返回的OriginId。 */
  AlarmPolicyList?: number[];
  /** 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要购买三节点实例， 请将该值设置为3 或指定 BackupZone 参数。当购买主实例，且未指定该参数和 BackupZone 参数时，该值默认是 2， 即购买两节点实例。 */
  InstanceNodes?: number;
  /** 实例cpu核数， 如果不传将根据memory指定的内存值自动填充对应的cpu值。 */
  Cpu?: number;
  /** 是否自动发起灾备同步功能。该参数仅对购买灾备实例生效。 可选值为：0 - 不自动发起灾备同步；1 - 自动发起灾备同步。该值默认为0。 */
  AutoSyncFlag?: number;
  /** 金融围拢 ID 。 */
  CageId?: string;
  /** 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板，默认值是："HIGH_STABILITY"。 */
  ParamTemplateType?: string;
  /** 告警策略名数组，例如:["policy-uyoee9wg"]，AlarmPolicyList不为空时该参数无效。 */
  AlarmPolicyIdList?: string[];
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制等。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.默认为false：发送正常请求，通过检查后直接创建实例。 */
  DryRun?: boolean;
  /** 实例引擎类型，默认为"InnoDB"，支持值包括："InnoDB"，"RocksDB"。 */
  EngineType?: string;
  /** 指定实例的IP列表。仅支持主实例指定，按实例顺序，不足则按未指定处理。 */
  Vips?: string[];
}

declare interface CreateDBInstanceHourResponse {
  /** 短订单 ID。 */
  DealIds?: string[];
  /** 实例 ID 列表。 */
  InstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceRequest {
  /** 实例内存大小，单位：MB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的内存规格。 */
  Memory: number;
  /** 实例硬盘大小，单位：GB，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的硬盘范围。 */
  Volume: number;
  /** 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。 */
  Period: number;
  /** 实例数量，默认值为1, 最小值1，最大值为100。 */
  GoodsNum: number;
  /** 可用区信息，该参数缺省时，系统会自动选择一个可用区，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的可用区。 */
  Zone?: string;
  /** 私有网络 ID，如果不传则默认选择基础网络，请使用 [查询私有网络列表](/document/api/215/15778) 。 */
  UniqVpcId?: string;
  /** 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 [查询子网列表](/document/api/215/15784)。 */
  UniqSubnetId?: string;
  /** 项目 ID，不填为默认项目。购买只读实例和灾备实例时，项目 ID 默认和主实例保持一致。 */
  ProjectId?: number;
  /** 自定义端口，端口支持范围：[ 1024-65535 ]。 */
  Port?: number;
  /** 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。 */
  InstanceRole?: string;
  /** 实例 ID，购买只读实例时必填，该字段表示只读实例的主实例ID，请使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询云数据库实例 ID。 */
  MasterInstanceId?: string;
  /** MySQL 版本，值包括：5.5、5.6 和 5.7，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口获取可创建的实例版本。 */
  EngineVersion?: string;
  /** 设置 root 帐号密码，密码规则：8 - 64 个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()）中的两种，购买主实例时可指定该参数，购买只读实例或者灾备实例时指定该参数无意义。 */
  Password?: string;
  /** 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。 */
  ProtectMode?: number;
  /** 多可用区域，默认为 0，支持值包括：0 - 表示单可用区，1 - 表示多可用区。 */
  DeployMode?: number;
  /** 备库 1 的可用区信息，默认为 Zone 的值。 */
  SlaveZone?: string;
  /** 参数列表，参数格式如 ParamList.0.Name=auto_increment&ParamList.0.Value=1。可通过 [查询默认的可设置参数列表](https://cloud.tencent.com/document/api/236/32662) 查询支持设置的参数。 */
  ParamList?: ParamInfo[];
  /** 备库 2 的可用区信息，默认为空，购买三节点主实例时可指定该参数。 */
  BackupZone?: string;
  /** 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。 */
  AutoRenewFlag?: number;
  /** 主实例地域信息，购买灾备、RO实例时，该字段必填。 */
  MasterRegion?: string;
  /** 安全组参数，可使用 [查询项目安全组信息](https://cloud.tencent.com/document/api/236/15850) 接口查询某个项目的安全组详情。 */
  SecurityGroup?: string[];
  /** 只读实例参数。购买只读实例时，该参数必传。 */
  RoGroup?: RoGroup;
  /** 实例名称。一次购买多个实例命名会用后缀数字区分，例instnaceName=db，goodsNum=3，实例命名分别为db1，db2，db3。 */
  InstanceName?: string;
  /** 实例标签信息。 */
  ResourceTags?: TagInfo[];
  /** 置放群组 ID。 */
  DeployGroupId?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间在48小时内唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。 */
  DeviceType?: string;
  /** 参数模板id。 */
  ParamTemplateId?: number;
  /** 告警策略id数组。云监控DescribeAlarmPolicy接口返回的OriginId。 */
  AlarmPolicyList?: number[];
  /** 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要购买三节点实例， 请将该值设置为3 或指定 BackupZone 参数。当购买主实例，且未指定该参数和 BackupZone 参数时，该值默认是 2， 即购买两节点实例。 */
  InstanceNodes?: number;
  /** 实例cpu核数， 如果不传将根据memory指定的内存值自动填充对应的cpu值。 */
  Cpu?: number;
  /** 是否自动发起灾备同步功能。该参数仅对购买灾备实例生效。 可选值为：0 - 不自动发起灾备同步；1 - 自动发起灾备同步。该值默认为0。 */
  AutoSyncFlag?: number;
  /** 金融围拢 ID。 */
  CageId?: string;
  /** 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。 */
  ParamTemplateType?: string;
  /** 告警策略名数组，例如:["policy-uyoee9wg"]，AlarmPolicyList不为空时该参数无效。 */
  AlarmPolicyIdList?: string[];
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制等。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.默认为false：发送正常请求，通过检查后直接创建实例。 */
  DryRun?: boolean;
  /** 实例引擎类型，默认为"InnoDB"，支持值包括："InnoDB"，"RocksDB"。 */
  EngineType?: string;
  /** 指定实例的IP列表。仅支持主实例指定，按实例顺序，不足则按未指定处理。 */
  Vips?: string[];
}

declare interface CreateDBInstanceResponse {
  /** 短订单 ID。 */
  DealIds: string[];
  /** 实例 ID 列表。 */
  InstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeployGroupRequest {
  /** 置放群组名称，最长不能超过60个字符。 */
  DeployGroupName: string;
  /** 置放群组描述，最长不能超过200个字符。 */
  Description?: string;
  /** 置放群组的亲和性策略，目前仅支持取值为1，策略1表示同台物理机上限制实例的个数。 */
  Affinity?: number[];
  /** 置放群组亲和性策略1中同台物理机上实例的限制个数。 */
  LimitNum?: number;
  /** 置放群组机型属性，可选参数：SH12+SH02、TS85。 */
  DevClass?: string[];
}

declare interface CreateDeployGroupResponse {
  /** 置放群组ID。 */
  DeployGroupId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateParamTemplateRequest {
  /** 参数模板名称。 */
  Name: string;
  /** 参数模板描述。 */
  Description?: string;
  /** MySQL 版本号。 */
  EngineVersion?: string;
  /** 源参数模板 ID。 */
  TemplateId?: number;
  /** 参数列表。 */
  ParamList?: Parameter[];
  /** 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。 */
  TemplateType?: string;
  /** 实例引擎类型，默认为"InnoDB"，支持值包括："InnoDB"，"RocksDB"。 */
  EngineType?: string;
}

declare interface CreateParamTemplateResponse {
  /** 参数模板 ID。 */
  TemplateId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoInstanceIpRequest {
  /** 只读实例ID，格式如：cdbro-3i70uj0k，与云数据库控制台页面中显示的只读实例ID相同。 */
  InstanceId: string;
  /** 子网描述符，例如：subnet-1typ0s7d。 */
  UniqSubnetId?: string;
  /** vpc描述符，例如：vpc-a23yt67j,如果传了该字段则UniqSubnetId必传 */
  UniqVpcId?: string;
}

declare interface CreateRoInstanceIpResponse {
  /** 只读实例的私有网络的ID。 */
  RoVpcId: number;
  /** 只读实例的子网ID。 */
  RoSubnetId: number;
  /** 只读实例的内网IP地址。 */
  RoVip: string;
  /** 只读实例的内网端口号。 */
  RoVport: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccountsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 云数据库账号。 */
  Accounts: Account[];
}

declare interface DeleteAccountsResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuditLogFileRequest {
  /** 审计日志文件名称。 */
  FileName: string;
  /** 实例 ID。 */
  InstanceId: string;
}

declare interface DeleteAuditLogFileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuditPolicyRequest {
  /** 审计策略 ID。 */
  PolicyId: string;
  /** 实例 ID。 */
  InstanceId?: string;
}

declare interface DeleteAuditPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuditRuleRequest {
  /** 审计规则 ID。 */
  RuleId: string;
}

declare interface DeleteAuditRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 备份任务 ID。该任务 ID 为 [创建云数据库备份](https://cloud.tencent.com/document/api/236/15844) 接口返回的任务 ID。 */
  BackupId: number;
}

declare interface DeleteBackupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDeployGroupsRequest {
  /** 要删除的置放群组 ID 列表。 */
  DeployGroupIds: string[];
}

declare interface DeleteDeployGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteParamTemplateRequest {
  /** 参数模板ID。 */
  TemplateId: number;
}

declare interface DeleteParamTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTimeWindowRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DeleteTimeWindowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountPrivilegesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 数据库的账号名称。 */
  User: string;
  /** 数据库的账号域名。 */
  Host: string;
}

declare interface DescribeAccountPrivilegesResponse {
  /** 全局权限数组。 */
  GlobalPrivileges: string[];
  /** 数据库权限数组。 */
  DatabasePrivileges: DatabasePrivilege[];
  /** 数据库中的表权限数组。 */
  TablePrivileges: TablePrivilege[];
  /** 数据库表中的列权限数组。 */
  ColumnPrivileges: ColumnPrivilege[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 记录偏移量，默认值为0。 */
  Offset?: number;
  /** 单次请求返回的数量，默认值为20，最小值为1，最大值为100。 */
  Limit?: number;
  /** 匹配账号名的正则表达式，规则同 MySQL 官网。 */
  AccountRegexp?: string;
}

declare interface DescribeAccountsResponse {
  /** 符合查询条件的账号数量。 */
  TotalCount: number;
  /** 符合查询条件的账号详细信息。 */
  Items: AccountInfo[];
  /** 用户可设置实例最大连接数。 */
  MaxUserConnections: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAsyncRequestInfoRequest {
  /** 异步任务的请求 ID。 */
  AsyncRequestId: string;
}

declare interface DescribeAsyncRequestInfoResponse {
  /** 任务执行结果。可能的取值：INITIAL - 初始化，RUNNING - 运行中，SUCCESS - 执行成功，FAILED - 执行失败，KILLED - 已终止，REMOVED - 已删除，PAUSED - 终止中。 */
  Status: string | null;
  /** 任务执行信息描述。 */
  Info: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DescribeAuditConfigResponse {
  /** 审计日志保存时长。目前支持的值包括：[0，7，30，180，365，1095，1825]。 */
  LogExpireDay: number | null;
  /** 审计日志存储类型。目前支持的值包括："storage" - 存储型。 */
  LogType: string;
  /** 是否正在关闭审计。目前支持的值包括："false"-否，"true"-是 */
  IsClosing: string;
  /** 审计服务开通时间。 */
  CreateTime: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditLogFilesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 分页大小参数。默认值为 20，最小值为 1，最大值为 100。 */
  Limit?: number;
  /** 分页偏移量。 */
  Offset?: number;
  /** 审计日志文件名。 */
  FileName?: string;
}

declare interface DescribeAuditLogFilesResponse {
  /** 符合条件的审计日志文件个数。 */
  TotalCount?: number;
  /** 审计日志文件详情。 */
  Items?: AuditLogFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditPoliciesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId?: string;
  /** 审计策略 ID。 */
  PolicyId?: string;
  /** 审计策略名称。支持按审计策略名称进行模糊匹配查询。 */
  PolicyName?: string;
  /** 分页大小参数。默认值为 20，最小值为 1，最大值为 100。 */
  Limit?: number;
  /** 分页偏移量。 */
  Offset?: number;
  /** 审计规则 ID。可使用该审计规则 ID 查询到其关联的审计策略。注意，参数 RuleId，InstanceId，PolicyId，PolicyName 必须至少传一个。 */
  RuleId?: string;
  /** 实例名称 */
  InstanceName?: string;
}

declare interface DescribeAuditPoliciesResponse {
  /** 符合条件的审计策略个数。 */
  TotalCount: number;
  /** 审计策略详情。 */
  Items: AuditPolicy[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditRulesRequest {
  /** 审计规则 ID。 */
  RuleId?: string;
  /** 审计规则名称。支持按审计规则名称进行模糊匹配查询。 */
  RuleName?: string;
  /** 分页大小参数。默认值为 20，最小值为 1，最大值为 100。 */
  Limit?: number;
  /** 分页偏移量。默认值为0。 */
  Offset?: number;
}

declare interface DescribeAuditRulesResponse {
  /** 符合条件的审计规则个数。 */
  TotalCount: number;
  /** 审计规则详情。 */
  Items: AuditRule[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DescribeBackupConfigResponse {
  /** 自动备份开始的最早时间点，单位为时刻。例如，2 - 凌晨 2:00。（该字段已废弃，建议使用 BackupTimeWindow 字段） */
  StartTimeMin?: number;
  /** 自动备份开始的最晚时间点，单位为时刻。例如，6 - 凌晨 6:00。（该字段已废弃，建议使用 BackupTimeWindow 字段） */
  StartTimeMax?: number;
  /** 备份文件保留时间，单位为天。 */
  BackupExpireDays?: number;
  /** 备份方式，可能的值为：physical - 物理备份，logical - 逻辑备份。 */
  BackupMethod?: string;
  /** Binlog 文件保留时间，单位为天。 */
  BinlogExpireDays?: number;
  /** 实例自动备份的时间窗。 */
  BackupTimeWindow?: CommonTimeWindow;
  /** 定期保留开关，off - 不开启定期保留策略，on - 开启定期保留策略，默认为off */
  EnableBackupPeriodSave?: string;
  /** 定期保留最长天数，最小值：90，最大值：3650，默认值：1080 */
  BackupPeriodSaveDays?: number;
  /** 定期保留策略周期，可取值：weekly - 周，monthly - 月， quarterly - 季度，yearly - 年，默认为monthly */
  BackupPeriodSaveInterval?: string;
  /** 定期保留的备份数量，最小值为1，最大值不超过定期保留策略周期内常规备份个数，默认值为1 */
  BackupPeriodSaveCount?: number;
  /** 定期保留策略周期起始日期，格式：YYYY-MM-dd HH:mm:ss */
  StartBackupPeriodSaveDate?: string;
  /** 是否开启数据备份归档策略，off-关闭，on-打开，默认为off */
  EnableBackupArchive?: string;
  /** 数据备份归档起始天数，数据备份达到归档起始天数时进行归档，最小为180天，不得大于数据备份保留天数 */
  BackupArchiveDays?: number;
  /** 是否开启日志备份归档策略，off-关闭，on-打开，默认为off */
  EnableBinlogArchive?: string;
  /** 日志备份归档起始天数，日志备份达到归档起始天数时进行归档，最小为180天，不得大于日志备份保留天数 */
  BinlogArchiveDays?: number;
  /** 是否开启数据备份标准存储策略，off-关闭，on-打开，默认为off */
  EnableBackupStandby?: string;
  /** 数据备份标准存储起始天数，数据备份达到标准存储起始天数时进行转换，最小为30天，不得大于数据备份保留天数。如果开启备份归档，不得大于等于备份归档天数 */
  BackupStandbyDays?: number;
  /** 是否开启日志备份标准存储策略，off-关闭，on-打开，默认为off */
  EnableBinlogStandby?: string;
  /** 日志备份标准存储起始天数，日志备份达到标准存储起始天数时进行转换，最小为30天，不得大于日志备份保留天数。如果开启备份归档，不得大于等于备份归档天数 */
  BinlogStandbyDays?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDatabasesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 开始时间，格式为：2017-07-12 10:29:20。 */
  StartTime: string;
  /** 要查询的数据库名前缀。 */
  SearchDatabase?: string;
  /** 分页偏移量。 */
  Offset?: number;
  /** 分页大小，最小值为1，最大值为2000。 */
  Limit?: number;
}

declare interface DescribeBackupDatabasesResponse {
  /** 返回的数据个数。 */
  TotalCount: number;
  /** 符合查询条件的数据库数组。 */
  Items: DatabaseName[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadRestrictionRequest {
}

declare interface DescribeBackupDownloadRestrictionResponse {
  /** NoLimit 不限制,内外网都可以下载； LimitOnlyIntranet 仅内网可下载； Customize 用户自定义vpc:ip可下载。 只有该值为 Customize 时， LimitVpc 和 LimitIp 才有意义。 */
  LimitType: string;
  /** 该参数仅支持 In， 表示 LimitVpc 指定的vpc可以下载。 */
  VpcComparisonSymbol: string;
  /** In: 指定的ip可以下载； NotIn: 指定的ip不可以下载。 */
  IpComparisonSymbol: string;
  /** 限制下载的vpc设置。 */
  LimitVpc: BackupLimitVpcItem[];
  /** 限制下载的ip设置。 */
  LimitIp: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupEncryptionStatusRequest {
  /** 实例ID，格式如：cdb-XXXX。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DescribeBackupEncryptionStatusResponse {
  /** 实例是否开启了物理备份加密。可能的值有 on, off 。 */
  EncryptionStatus: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupOverviewRequest {
  /** 需要查询的云数据库产品类型，目前仅支持 "mysql"。 */
  Product: string;
}

declare interface DescribeBackupOverviewResponse {
  /** 用户在当前地域备份的总个数（包含数据备份和日志备份）。 */
  BackupCount: number;
  /** 用户在当前地域备份的总容量 */
  BackupVolume: number;
  /** 用户在当前地域备份的计费容量，即超出赠送容量的部分。 */
  BillingVolume: number;
  /** 用户在当前地域获得的赠送备份容量。 */
  FreeVolume: number;
  /** 用户在当前地域的异地备份总容量。 */
  RemoteBackupVolume: number | null;
  /** 归档备份容量，包含数据备份以及日志备份。 */
  BackupArchiveVolume: number | null;
  /** 标准存储备份容量，包含数据备份以及日志备份。 */
  BackupStandbyVolume: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupSummariesRequest {
  /** 需要查询的云数据库产品类型，目前仅支持 "mysql"。 */
  Product: string;
  /** 分页查询数据的偏移量，默认为0。 */
  Offset?: number;
  /** 分页查询数据的条目限制，默认值为20。最小值为1，最大值为100。 */
  Limit?: number;
  /** 指定按某一项排序，可选值包括： BackupVolume: 备份容量， DataBackupVolume: 数据备份容量， BinlogBackupVolume: 日志备份容量， AutoBackupVolume: 自动备份容量， ManualBackupVolume: 手动备份容量。默认按照BackupVolume排序。 */
  OrderBy?: string;
  /** 指定排序方向，可选值包括： ASC: 正序， DESC: 逆序。默认值为 ASC。 */
  OrderDirection?: string;
}

declare interface DescribeBackupSummariesResponse {
  /** 实例备份统计条目。 */
  Items: BackupSummaryItem[];
  /** 实例备份统计总条目数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupTablesRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 开始时间，格式为：2017-07-12 10:29:20。 */
  StartTime: string;
  /** 指定的数据库名。 */
  DatabaseName: string;
  /** 要查询的数据表名前缀。 */
  SearchTable?: string;
  /** 分页偏移。 */
  Offset?: number;
  /** 分页大小，最小值为1，最大值为2000。 */
  Limit?: number;
}

declare interface DescribeBackupTablesResponse {
  /** 返回的数据个数。 */
  TotalCount: number;
  /** 符合条件的数据表数组。 */
  Items: TableName[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupsRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 偏移量，最小值为0。 */
  Offset?: number;
  /** 分页大小，默认值为20，最小值为1，最大值为100。 */
  Limit?: number;
}

declare interface DescribeBackupsResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount?: number;
  /** 符合查询条件的备份信息详情。 */
  Items?: BackupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBinlogBackupOverviewRequest {
  /** 需要查询的云数据库产品类型，目前仅支持 "mysql"。 */
  Product: string;
}

declare interface DescribeBinlogBackupOverviewResponse {
  /** 总的日志备份容量，包含异地日志备份（单位为字节）。 */
  BinlogBackupVolume: number;
  /** 总的日志备份个数，包含异地日志备份。 */
  BinlogBackupCount: number;
  /** 异地日志备份容量（单位为字节）。 */
  RemoteBinlogVolume: number;
  /** 异地日志备份个数。 */
  RemoteBinlogCount: number;
  /** 归档日志备份容量（单位为字节）。 */
  BinlogArchiveVolume: number;
  /** 归档日志备份个数。 */
  BinlogArchiveCount: number;
  /** 标准存储日志备份容量（单位为字节）。 */
  BinlogStandbyVolume: number;
  /** 标准存储日志备份个数。 */
  BinlogStandbyCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBinlogsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 偏移量，最小值为0。 */
  Offset?: number;
  /** 分页大小，默认值为20，最小值为1，最大值为100。 */
  Limit?: number;
}

declare interface DescribeBinlogsResponse {
  /** 符合查询条件的日志文件总数。 */
  TotalCount?: number;
  /** 符合查询条件的二进制日志文件详情。 */
  Items?: BinlogInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCDBProxyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 代理组ID */
  ProxyGroupId?: string;
}

declare interface DescribeCDBProxyResponse {
  /** 代理组基本信息 */
  BaseGroup: BaseGroupInfo | null;
  /** 代理组地址信息 */
  Address: Address | null;
  /** 代理组节点信息 */
  ProxyNode: ProxyNodeInfo | null;
  /** 读写分析信息 */
  RWInstInfo: RWInfo | null;
  /** 连接池信息 */
  ConnectionPoolInfo: ConnectionPoolInfo | null;
  /** 代理数量 */
  Count: number | null;
  /** 代理信息 */
  ProxyGroup: ProxyGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdbZoneConfigRequest {
}

declare interface DescribeCdbZoneConfigResponse {
  /** 售卖规格和地域信息集合 */
  DataResult: CdbZoneDataResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloneListRequest {
  /** 查询指定源实例的克隆任务列表。 */
  InstanceId: string;
  /** 分页查询时的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页查询时的每页条目数，默认值为20。 */
  Limit?: number;
}

declare interface DescribeCloneListResponse {
  /** 满足条件的条目数。 */
  TotalCount?: number;
  /** 克隆任务列表。 */
  Items?: CloneItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBFeaturesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DescribeDBFeaturesResponse {
  /** 是否支持数据库审计功能。 */
  IsSupportAudit: boolean;
  /** 开启审计是否需要升级内核版本。 */
  AuditNeedUpgrade: boolean;
  /** 是否支持数据库加密功能。 */
  IsSupportEncryption: boolean;
  /** 开启加密是否需要升级内核版本。 */
  EncryptionNeedUpgrade: boolean;
  /** 是否为异地只读实例。 */
  IsRemoteRo: boolean;
  /** 主实例所在地域。 */
  MasterRegion: string;
  /** 是否支持小版本升级。 */
  IsSupportUpdateSubVersion: boolean;
  /** 当前内核版本。 */
  CurrentSubVersion: string;
  /** 可供升级的内核版本。 */
  TargetSubVersion: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBImportRecordsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 开始时间，时间格式如：2016-01-01 00:00:01。 */
  StartTime?: string;
  /** 结束时间，时间格式如：2016-01-01 23:59:59。 */
  EndTime?: string;
  /** 分页参数，偏移量，默认值为0。 */
  Offset?: number;
  /** 分页参数，单次请求返回的数量，默认值为20，最小值为1，最大值为100。 */
  Limit?: number;
}

declare interface DescribeDBImportRecordsResponse {
  /** 符合查询条件的导入任务操作日志总数。 */
  TotalCount: number;
  /** 返回的导入操作记录列表。 */
  Items: ImportRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceCharsetRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
}

declare interface DescribeDBInstanceCharsetResponse {
  /** 实例的默认字符集，如 "latin1"，"utf8" 等。 */
  Charset: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DescribeDBInstanceConfigResponse {
  /** 主实例数据保护方式，可能的返回值：0 - 异步复制方式，1 - 半同步复制方式，2 - 强同步复制方式。 */
  ProtectMode: number;
  /** 主实例部署方式，可能的返回值：0 - 单可用部署，1 - 多可用区部署。 */
  DeployMode: number;
  /** 实例可用区信息，格式如 "ap-shanghai-1"。 */
  Zone: string;
  /** 备库的配置信息。 */
  SlaveConfig: SlaveConfig | null;
  /** 强同步实例第二备库的配置信息。 */
  BackupConfig: BackupConfig | null;
  /** 是否切换备库。 */
  Switched: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceGTIDRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
}

declare interface DescribeDBInstanceGTIDResponse {
  /** GTID 是否开通的标记，可能的取值为：0 - 未开通，1 - 已开通。 */
  IsGTIDOpen: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceInfoRequest {
  /** 实例 ID 。 */
  InstanceId: string;
}

declare interface DescribeDBInstanceInfoResponse {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 是否开通加密，YES 已开通，NO 未开通。 */
  Encryption: string;
  /** 加密使用的密钥 ID 。 */
  KeyId: string | null;
  /** 密钥所在地域。 */
  KeyRegion: string | null;
  /** 当前 CDB 后端服务使用的 KMS 服务的默认地域。 */
  DefaultKmsRegion: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceRebootTimeRequest {
  /** 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceIds: string[];
}

declare interface DescribeDBInstanceRebootTimeResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount: number;
  /** 返回的参数信息。 */
  Items: InstanceRebootTime[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 项目 ID。 */
  ProjectId?: number;
  /** 实例类型，可取值：1 - 主实例，2 - 灾备实例，3 - 只读实例。 */
  InstanceTypes?: number[];
  /** 实例的内网 IP 地址。 */
  Vips?: string[];
  /** 实例状态，可取值：0 - 创建中1 - 运行中4 - 正在进行隔离操作5 - 已隔离（可在回收站恢复开机） */
  Status?: number[];
  /** 偏移量，默认值为 0。 */
  Offset?: number;
  /** 单次请求返回的数量，默认值为 20，最大值为 2000。 */
  Limit?: number;
  /** 安全组 ID。当使用安全组 ID 为过滤条件时，需指定 WithSecurityGroup 参数为 1。 */
  SecurityGroupId?: string;
  /** 付费类型，可取值：0 - 包年包月，1 - 小时计费。 */
  PayTypes?: number[];
  /** 实例名称。 */
  InstanceNames?: string[];
  /** 实例任务状态，可能取值：0 - 没有任务1 - 升级中2 - 数据导入中3 - 开放Slave中4 - 外网访问开通中5 - 批量操作执行中6 - 回档中7 - 外网访问关闭中8 - 密码修改中9 - 实例名修改中10 - 重启中12 - 自建迁移中13 - 删除库表中14 - 灾备实例创建同步中15 - 升级待切换16 - 升级切换中17 - 升级切换完成19 - 参数设置待执行 */
  TaskStatus?: number[];
  /** 实例数据库引擎版本，可能取值：5.1、5.5、5.6 和 5.7。 */
  EngineVersions?: string[];
  /** 私有网络的 ID。 */
  VpcIds?: number[];
  /** 可用区的 ID。 */
  ZoneIds?: number[];
  /** 子网 ID。 */
  SubnetIds?: number[];
  /** 是否锁定标记，可选值：0 - 不锁定，1 - 锁定，默认为0。 */
  CdbErrors?: number[];
  /** 返回结果集排序的字段，目前支持："InstanceId"，"InstanceName"，"CreateTime"，"DeadlineTime"。 */
  OrderBy?: string;
  /** 返回结果集排序方式，目前支持："ASC" 或者 "DESC"。 */
  OrderDirection?: string;
  /** 是否以安全组 ID 为过滤条件。 */
  WithSecurityGroup?: number;
  /** 是否包含独享集群详细信息，可取值：0 - 不包含，1 - 包含。 */
  WithExCluster?: number;
  /** 独享集群 ID。 */
  ExClusterId?: string;
  /** 实例 ID。 */
  InstanceIds?: string[];
  /** 初始化标记，可取值：0 - 未初始化，1 - 初始化。 */
  InitFlag?: number;
  /** 是否包含灾备关系对应的实例，可取值：0 - 不包含，1 - 包含。默认取值为1。如果拉取主实例，则灾备关系的数据在DrInfo字段中， 如果拉取灾备实例， 则灾备关系的数据在MasterInfo字段中。灾备关系中只包含部分基本的数据，详细的数据需要自行调接口拉取。 */
  WithDr?: number;
  /** 是否包含只读实例，可取值：0 - 不包含，1 - 包含。默认取值为1。 */
  WithRo?: number;
  /** 是否包含主实例，可取值：0 - 不包含，1 - 包含。默认取值为1。 */
  WithMaster?: number;
  /** 置放群组ID列表。 */
  DeployGroupIds?: string[];
  /** 是否以标签键为过滤条件。 */
  TagKeysForSearch?: string[];
  /** 金融围拢 ID 。 */
  CageIds?: string[];
  /** 标签值 */
  TagValues?: string[];
  /** 私有网络字符型vpcId */
  UniqueVpcIds?: string[];
  /** 私有网络字符型subnetId */
  UniqSubnetIds?: string[];
  /** 标签键值 */
  Tags?: Tag[];
  /** 数据库代理 IP 。 */
  ProxyVips?: string[];
  /** 数据库代理 ID 。 */
  ProxyIds?: string[];
  /** 数据库引擎类型。 */
  EngineTypes?: string[];
}

declare interface DescribeDBInstancesResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount?: number;
  /** 实例详细信息列表。 */
  Items?: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBPriceRequest {
  /** 实例时长，单位：月，最小值 1，最大值为 36；查询按量计费价格时，该字段无效。 */
  Period: number;
  /** 可用区信息，格式如 "ap-guangzhou-2"。具体能设置的值请通过 DescribeDBZoneConfig 接口查询。InstanceId为空时该参数为必填项。 */
  Zone?: string;
  /** 实例数量，默认值为 1，最小值 1，最大值为 100。InstanceId为空时该参数为必填项。 */
  GoodsNum?: number;
  /** 实例内存大小，单位：MB。InstanceId为空时该参数为必填项。 */
  Memory?: number;
  /** 实例硬盘大小，单位：GB。InstanceId为空时该参数为必填项。 */
  Volume?: number;
  /** 实例类型，默认为 master，支持值包括：master - 表示主实例，ro - 表示只读实例，dr - 表示灾备实例。InstanceId为空时该参数为必填项。 */
  InstanceRole?: string;
  /** 付费类型，支持值包括：PRE_PAID - 包年包月，HOUR_PAID - 按量计费。InstanceId为空时该参数为必填项。 */
  PayType?: string;
  /** 数据复制方式，默认为 0，支持值包括：0 - 表示异步复制，1 - 表示半同步复制，2 - 表示强同步复制。 */
  ProtectMode?: number;
  /** 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。 */
  DeviceType?: string;
  /** 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要询价三节点实例， 请将该值设置为3。其余主实例该值默认为2。 */
  InstanceNodes?: number;
  /** 询价实例的CPU核心数目，单位：核，为保证传入 CPU 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可售卖的核心数目，当未指定该值时，将按照 Memory 大小补全一个默认值。 */
  Cpu?: number;
  /** 询价续费实例ID。如需查询实例续费价格，填写InstanceId和Period即可。 */
  InstanceId?: string;
  /** 按量计费阶梯。仅PayType=HOUR_PAID有效，支持值包括：1，2，3。阶梯时长见https://cloud.tencent.com/document/product/236/18335。 */
  Ladder?: number;
}

declare interface DescribeDBPriceResponse {
  /** 实例价格，单位：分。 */
  Price: number;
  /** 实例原价，单位：分。 */
  OriginalPrice: number;
  /** 货币单位。CNY-人民币，USD-美元。 */
  Currency: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 该值默认为False，表示当传入只读实例ID时，查询操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True。 */
  ForReadonlyInstance?: boolean;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSwitchRecordsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 分页偏移量。 */
  Offset?: number;
  /** 分页大小，默认值为 50，最小值为 1，最大值为 2000。 */
  Limit?: number;
}

declare interface DescribeDBSwitchRecordsResponse {
  /** 实例切换记录的总数。 */
  TotalCount: number;
  /** 实例切换记录详情。 */
  Items: DBSwitchInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataBackupOverviewRequest {
  /** 需要查询的云数据库产品类型，目前仅支持 "mysql"。 */
  Product: string;
}

declare interface DescribeDataBackupOverviewResponse {
  /** 当前地域的数据备份总容量（包含自动备份和手动备份，单位为字节）。 */
  DataBackupVolume: number;
  /** 当前地域的数据备份总个数。 */
  DataBackupCount: number;
  /** 当前地域的自动备份总容量。 */
  AutoBackupVolume: number;
  /** 当前地域的自动备份总个数。 */
  AutoBackupCount: number;
  /** 当前地域的手动备份总容量。 */
  ManualBackupVolume: number;
  /** 当前地域的手动备份总个数。 */
  ManualBackupCount: number;
  /** 异地备份总容量。 */
  RemoteBackupVolume: number;
  /** 异地备份总个数。 */
  RemoteBackupCount: number;
  /** 当前地域归档备份总容量。 */
  DataBackupArchiveVolume: number;
  /** 当前地域归档备份总个数。 */
  DataBackupArchiveCount: number;
  /** 当前地域标准存储备份总容量。 */
  DataBackupStandbyVolume: number;
  /** 当前地域标准存储备份总个数。 */
  DataBackupStandbyCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 偏移量，最小值为0。 */
  Offset?: number;
  /** 单次请求数量，默认值为20，最小值为1，最大值为100。 */
  Limit?: number;
  /** 匹配数据库库名的正则表达式。 */
  DatabaseRegexp?: string;
}

declare interface DescribeDatabasesResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount: number;
  /** 返回的实例信息。 */
  Items: string[];
  /** 数据库名以及字符集 */
  DatabaseList: DatabasesWithCharacterLists[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDefaultParamsRequest {
  /** 引擎版本，目前支持 ["5.1", "5.5", "5.6", "5.7", "8.0"] */
  EngineVersion: string;
  /** 默认参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。 */
  TemplateType?: string;
  /** 参数模板引擎，默认值：InnoDB */
  EngineType?: string;
}

declare interface DescribeDefaultParamsResponse {
  /** 参数个数。 */
  TotalCount?: number;
  /** 参数详情。 */
  Items?: ParameterDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeployGroupListRequest {
  /** 置放群组 ID。 */
  DeployGroupId?: string;
  /** 置放群组名称。 */
  DeployGroupName?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeDeployGroupListResponse {
  /** 符合条件的记录总数。 */
  Total: number;
  /** 返回列表。 */
  Items: DeployGroupInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceMonitorInfoRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 返回当天最近Count个5分钟粒度的监控数据。最小值1，最大值288，不传该参数默认返回当天所有5分钟粒度监控数据。 */
  Count?: number;
}

declare interface DescribeDeviceMonitorInfoResponse {
  /** 实例CPU监控数据 */
  Cpu: DeviceCpuInfo;
  /** 实例内存监控数据 */
  Mem: DeviceMemInfo;
  /** 实例网络监控数据 */
  Net: DeviceNetInfo;
  /** 实例磁盘监控数据 */
  Disk: DeviceDiskInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeErrorLogDataRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 开始时间戳。例如 1585142640 。 */
  StartTime: number;
  /** 结束时间戳。例如 1585142640 。 */
  EndTime: number;
  /** 要匹配的关键字列表，最多支持15个关键字。 */
  KeyWords?: string[];
  /** 分页的返回数量，默认为100，最大为400。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 仅在实例为主实例或者灾备实例时生效，可选值：slave，代表拉取从机的日志。 */
  InstType?: string;
}

declare interface DescribeErrorLogDataResponse {
  /** 符合条件的记录总数。 */
  TotalCount: number;
  /** 返回的记录。 */
  Items: ErrlogItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamRecordsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 分页大小，默认值：20。 */
  Limit?: number;
}

declare interface DescribeInstanceParamRecordsResponse {
  /** 符合条件的记录数。 */
  TotalCount: number;
  /** 参数修改记录。 */
  Items: ParamRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
}

declare interface DescribeInstanceParamsResponse {
  /** 实例的参数总数。 */
  TotalCount: number;
  /** 参数详情。 */
  Items: ParameterDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLocalBinlogConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
}

declare interface DescribeLocalBinlogConfigResponse {
  /** 实例binlog保留策略。 */
  LocalBinlogConfig: LocalBinlogConfig;
  /** 该地域默认binlog保留策略。 */
  LocalBinlogConfigDefault: LocalBinlogConfigDefault;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParamTemplateInfoRequest {
  /** 参数模板 ID。 */
  TemplateId: number;
}

declare interface DescribeParamTemplateInfoResponse {
  /** 参数模板 ID。 */
  TemplateId: number;
  /** 参数模板名称。 */
  Name: string;
  /** 参数模板对应实例版本 */
  EngineVersion: string;
  /** 参数模板中的参数数量 */
  TotalCount: number;
  /** 参数详情 */
  Items: ParameterDetail[];
  /** 参数模板描述 */
  Description: string;
  /** 参数模板类型。支持值包括："HIGH_STABILITY" - 高稳定模板，"HIGH_PERFORMANCE" - 高性能模板。 */
  TemplateType: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParamTemplatesRequest {
  /** 引擎版本，缺省则查询所有 */
  EngineVersions?: string[];
  /** 引擎类型，缺省则查询所有 */
  EngineTypes?: string[];
  /** 模板名称，缺省则查询所有 */
  TemplateNames?: string[];
  /** 模板id，缺省则查询所有 */
  TemplateIds?: number[];
}

declare interface DescribeParamTemplatesResponse {
  /** 该用户的参数模板数量。 */
  TotalCount: number;
  /** 参数模板详情。 */
  Items: ParamTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 项目ID。 */
  ProjectId?: number;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups: SecurityGroup[];
  /** 安全组规则数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyConnectionPoolConfRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分页查询偏移量 */
  Offset?: number;
  /** 分页查询限制 */
  Limit?: number;
}

declare interface DescribeProxyConnectionPoolConfResponse {
  /** 配置规格数量 */
  Count: number | null;
  /** 连接池配置规格 */
  PoolConf: PoolConf | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyCustomConfRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分页 */
  Offset?: number;
  /** 限制 */
  Limit?: number;
}

declare interface DescribeProxyCustomConfResponse {
  /** 代理配置数 */
  Count: number | null;
  /** 代理配置 */
  CustomConf: CustomConfig | null;
  /** 权重限制 */
  WeightRule: Rule | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRemoteBackupConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DescribeRemoteBackupConfigResponse {
  /** 异地备份保留天时间，单位为天 */
  ExpireDays: number;
  /** 异地数据备份开关，off - 关闭异地备份，on-开启异地备份 */
  RemoteBackupSave: string;
  /** 异地日志备份开关，off - 关闭异地备份，on-开启异地备份，只有在参数RemoteBackupSave为on时，RemoteBinlogSave参数才可设置为on */
  RemoteBinlogSave: string;
  /** 用户已设置异地备份地域列表 */
  RemoteRegion: string[];
  /** 用户可设置异地备份地域列表 */
  RegionList: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoGroupsRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv或者cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
}

declare interface DescribeRoGroupsResponse {
  /** RO组信息数组，一个实例可关联多个RO组。 */
  RoGroups: RoGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoMinScaleRequest {
  /** 只读实例ID，格式如：cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，该参数与MasterInstanceId参数不能同时为空。 */
  RoInstanceId?: string;
  /** 主实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，该参数与RoInstanceId参数不能同时为空。注意，当传入参数包含RoInstanceId时，返回值为只读实例升级时的最小规格；当传入参数只包含MasterInstanceId时，返回值为只读实例购买时的最小规格。 */
  MasterInstanceId?: string;
}

declare interface DescribeRoMinScaleResponse {
  /** 内存规格大小, 单位为：MB。 */
  Memory: number;
  /** 磁盘规格大小, 单位为：GB。 */
  Volume: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRollbackRangeTimeRequest {
  /** 实例 ID 列表，单个实例 ID 的格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceIds: string[];
}

declare interface DescribeRollbackRangeTimeResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount?: number;
  /** 返回的参数信息。 */
  Items?: InstanceRollbackRangeTime[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRollbackTaskDetailRequest {
  /** 实例 ID。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872)。 */
  InstanceId: string;
  /** 异步任务 ID。 */
  AsyncRequestId?: string;
  /** 分页参数，每次请求返回的记录数。默认值为 20，最大值为 100。 */
  Limit?: number;
  /** 分页偏移量。默认为 0。 */
  Offset?: number;
}

declare interface DescribeRollbackTaskDetailResponse {
  /** 符合条件的记录总数。 */
  TotalCount: number;
  /** 回档任务详情。 */
  Items: RollbackTask[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogDataRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 开始时间戳。例如 1585142640 。 */
  StartTime: number;
  /** 结束时间戳。例如 1585142640 。 */
  EndTime: number;
  /** 客户端 Host 列表。 */
  UserHosts?: string[];
  /** 客户端 用户名 列表。 */
  UserNames?: string[];
  /** 访问的 数据库 列表。 */
  DataBases?: string[];
  /** 排序字段。当前支持：Timestamp,QueryTime,LockTime,RowsExamined,RowsSent 。 */
  SortBy?: string;
  /** 升序还是降序排列。当前支持：ASC,DESC 。 */
  OrderBy?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 一次性返回的记录数量，默认为100，最大为400。 */
  Limit?: number;
  /** 仅在实例为主实例或者灾备实例时生效，可选值：slave，代表拉取从机的日志。 */
  InstType?: string;
}

declare interface DescribeSlowLogDataResponse {
  /** 符合条件的记录总数。 */
  TotalCount: number;
  /** 查询到的记录。 */
  Items: SlowLogItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 偏移量，默认值为0，最小值为0。 */
  Offset?: number;
  /** 分页大小，默认值为20，最小值为1，最大值为100。 */
  Limit?: number;
}

declare interface DescribeSlowLogsResponse {
  /** 符合查询条件的慢查询日志总数。 */
  TotalCount: number;
  /** 符合查询条件的慢查询日志详情。 */
  Items: SlowLogInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSupportedPrivilegesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DescribeSupportedPrivilegesResponse {
  /** 实例支持的全局权限。 */
  GlobalSupportedPrivileges: string[];
  /** 实例支持的数据库权限。 */
  DatabaseSupportedPrivileges: string[];
  /** 实例支持的数据库表权限。 */
  TableSupportedPrivileges: string[];
  /** 实例支持的数据库列权限。 */
  ColumnSupportedPrivileges: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 数据库的名称。 */
  Database: string;
  /** 记录偏移量，默认值为0。 */
  Offset?: number;
  /** 单次请求返回的数量，默认值为20，最大值为2000。 */
  Limit?: number;
  /** 匹配数据库表名的正则表达式，规则同 MySQL 官网 */
  TableRegexp?: string;
}

declare interface DescribeTablesResponse {
  /** 符合查询条件的数据库表总数。 */
  TotalCount: number;
  /** 返回的数据库表信息。 */
  Items: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagsOfInstanceIdsRequest {
  /** 实例列表。 */
  InstanceIds: string[];
  /** 分页偏移量。 */
  Offset?: number;
  /** 分页大小。 */
  Limit?: number;
}

declare interface DescribeTagsOfInstanceIdsResponse {
  /** 分页偏移量。 */
  Offset: number;
  /** 分页大小。 */
  Limit: number;
  /** 实例标签信息。 */
  Rows: TagsInfoOfInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId?: string;
  /** 异步任务请求 ID，执行云数据库相关操作返回的 AsyncRequestId。 */
  AsyncRequestId?: string;
  /** 任务类型，不传值则查询所有任务类型，支持的值包括：1 - 数据库回档；2 - SQL操作；3 - 数据导入；5 - 参数设置；6 - 初始化云数据库实例；7 - 重启云数据库实例；8 - 开启云数据库实例GTID；9 - 只读实例升级；10 - 数据库批量回档；11 - 主实例升级；12 - 删除云数据库库表；13 - 灾备实例提升为主。 */
  TaskTypes?: number[];
  /** 任务状态，不传值则查询所有任务状态，支持的值包括：-1 - 未定义；0 - 初始化；1 - 运行中；2 - 执行成功；3 - 执行失败；4 - 已终止；5 - 已删除；6 - 已暂停。 */
  TaskStatus?: number[];
  /** 第一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01。 */
  StartTimeBegin?: string;
  /** 最后一个任务的开始时间，用于范围查询，时间格式如：2017-12-31 10:40:01。 */
  StartTimeEnd?: string;
  /** 记录偏移量，默认值为0。 */
  Offset?: number;
  /** 单次请求返回的数量，默认值为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeTasksResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount?: number;
  /** 返回的实例任务信息。 */
  Items?: TaskDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimeWindowRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
}

declare interface DescribeTimeWindowResponse {
  /** 星期一的可维护时间列表。 */
  Monday: string[];
  /** 星期二的可维护时间列表。 */
  Tuesday: string[];
  /** 星期三的可维护时间列表。 */
  Wednesday: string[];
  /** 星期四的可维护时间列表。 */
  Thursday: string[];
  /** 星期五的可维护时间列表。 */
  Friday: string[];
  /** 星期六的可维护时间列表。 */
  Saturday: string[];
  /** 星期日的可维护时间列表。 */
  Sunday: string[];
  /** 最大数据延迟阈值 */
  MaxDelayTime: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUploadedFilesRequest {
  /** 文件路径。该字段应填用户主账号的OwnerUin信息。 */
  Path: string;
  /** 记录偏移量，默认值为0。 */
  Offset?: number;
  /** 单次请求返回的数量，默认值为20。 */
  Limit?: number;
}

declare interface DescribeUploadedFilesResponse {
  /** 符合查询条件的SQL文件总数。 */
  TotalCount: number;
  /** 返回的SQL文件列表。 */
  Items: SqlFileInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 安全组 ID。 */
  SecurityGroupId: string;
  /** 实例 ID 列表，一个或者多个实例 ID 组成的数组。 */
  InstanceIds: string[];
  /** 当传入只读实例ID时，默认操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True */
  ForReadonlyInstance?: boolean;
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InitDBInstancesRequest {
  /** 实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同，可使用[查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceIds: string[];
  /** 实例新的密码，密码规则：8-64个字符，至少包含字母、数字、字符（支持的字符：!@#$%^*()）中的两种。 */
  NewPassword: string;
  /** 实例的参数列表，目前支持设置“character_set_server”、“lower_case_table_names”参数。其中，“character_set_server”参数可选值为["utf8","latin1","gbk","utf8mb4"]；“lower_case_table_names”可选值为[“0”,“1”]。 */
  Parameters: ParamInfo[];
  /** 实例的端口，取值范围为[1024, 65535] */
  Vport?: number;
}

declare interface InitDBInstancesResponse {
  /** 异步任务的请求ID数组，可使用此ID查询异步任务的执行结果 */
  AsyncRequestIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceUpgradeInstancesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
  /** 升级后的内存大小，单位：MB，为保证传入 Memory 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的内存规格。 */
  Memory: number;
  /** 升级后的硬盘大小，单位：GB，为保证传入 Volume 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的硬盘范围。 */
  Volume: number;
  /** 升级后的核心数目，单位：核，为保证传入 CPU 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的核心数目，当未指定该值时，将按照 Memory 大小补全一个默认值。 */
  Cpu?: number;
  /** 数据复制方式，支持值包括：0 - 异步复制，1 - 半同步复制，2 - 强同步复制，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。 */
  ProtectMode?: number;
  /** 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 不指定则默认为通用型实例。 */
  DeviceType?: string;
  /** 实例节点数。对于 RO 和 基础版实例， 该值默认为1。 如果需要询价三节点实例， 请将该值设置为3。其余主实例该值默认为2。 */
  InstanceNodes?: number;
}

declare interface InquiryPriceUpgradeInstancesResponse {
  /** 实例价格，单位：分（人民币）。 */
  Price: number;
  /** 实例原价，单位：分（人民币）。 */
  OriginalPrice: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDBInstanceRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
}

declare interface IsolateDBInstanceResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。(该返回字段目前已废弃，可以通过 DescribeDBInstances 接口查询实例的隔离状态) */
  AsyncRequestId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountDescriptionRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 云数据库账号。 */
  Accounts: Account[];
  /** 数据库账号的备注信息。 */
  Description?: string;
}

declare interface ModifyAccountDescriptionResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountHostRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 账户的名称 */
  User: string;
  /** 账户的旧主机 */
  Host: string;
  /** 账户的新主机 */
  NewHost: string;
}

declare interface ModifyAccountHostResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountMaxUserConnectionsRequest {
  /** 云数据库账号。 */
  Accounts: Account[];
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 设置账户最大可用连接数，最大可设置值为10240。 */
  MaxUserConnections: number;
}

declare interface ModifyAccountMaxUserConnectionsResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountPasswordRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 数据库账号的新密码。密码应至少包含字母、数字和字符（_+-&=!@#$%^*()）中的两种，长度为8-64个字符。 */
  NewPassword: string;
  /** 云数据库账号。 */
  Accounts: Account[];
}

declare interface ModifyAccountPasswordResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountPrivilegesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 数据库的账号，包括用户名和域名。 */
  Accounts: Account[];
  /** 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER","CREATE USER","RELOAD","REPLICATION CLIENT","REPLICATION SLAVE"。注意，ModifyAction为空时，不传该参数表示清除该权限。 */
  GlobalPrivileges?: string[];
  /** 数据库的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。注意，ModifyAction为空时，不传该参数表示清除该权限。 */
  DatabasePrivileges?: DatabasePrivilege[];
  /** 数据库中表的权限。Privileges 权限的可选值为：权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE",	"DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。注意，ModifyAction为空时，不传该参数表示清除该权限。 */
  TablePrivileges?: TablePrivilege[];
  /** 数据库表中列的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。注意，ModifyAction为空时，不传该参数表示清除该权限。 */
  ColumnPrivileges?: ColumnPrivilege[];
  /** 该参数不为空时，为批量修改权限。可选值为：grant - 授予权限，revoke - 回收权限。 */
  ModifyAction?: string;
}

declare interface ModifyAccountPrivilegesResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAuditConfigRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 审计日志保存时长。支持值包括：7 - 一周30 - 一个月；180 - 六个月；365 - 一年；1095 - 三年；1825 - 五年； */
  LogExpireDay?: number;
  /** 是否关闭审计服务。可选值：true - 关闭审计服务；false - 不关闭审计服务。默认值为 false。当关闭审计服务时，会删除用户的审计日志和文件，并删除该实例的所有审计策略。CloseAudit、LogExpireDay必须至少提供一个，如果两个都提供则按照CloseAudit优先的逻辑处理。 */
  CloseAudit?: boolean;
  /** 高频审计日志保存时长。支持值包括：7 - 一周30 - 一个月；180 - 六个月；365 - 一年；1095 - 三年；1825 - 五年； */
  HighLogExpireDay?: number;
}

declare interface ModifyAuditConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAuditRuleRequest {
  /** 审计规则 ID。 */
  RuleId: string;
  /** 审计规则名称。 */
  RuleName?: string;
  /** 审计规则描述。 */
  Description?: string;
  /** 审计规则过滤条件。若设置了过滤条件，则不会开启全审计。 */
  RuleFilters?: AuditFilter[];
  /** 是否开启全审计。支持值包括：false – 不开启全审计，true – 开启全审计。用户未设置审计规则过滤条件时，默认开启全审计。 */
  AuditAll?: boolean;
}

declare interface ModifyAuditRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoRenewFlagRequest {
  /** 实例的 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceIds: string[];
  /** 自动续费标记，可取值的有：0 - 不自动续费，1 - 自动续费。 */
  AutoRenew: number;
}

declare interface ModifyAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 备份文件的保留时间，单位为天。最小值为7天，最大值为1830天。 */
  ExpireDays?: number;
  /** (将废弃，建议使用 BackupTimeWindow 参数) 备份时间范围，格式为：02:00-06:00，起点和终点时间目前限制为整点，目前可以选择的范围为： 00:00-12:00，02:00-06:00，06：00-10：00，10:00-14:00，14:00-18:00，18:00-22:00，22:00-02:00。 */
  StartTime?: string;
  /** 自动备份方式，仅支持：physical - 物理冷备 */
  BackupMethod?: string;
  /** binlog的保留时间，单位为天。最小值为7天，最大值为1830天。该值的设置不能大于备份文件的保留时间。 */
  BinlogExpireDays?: number;
  /** 备份时间窗，比如要设置每周二和周日 10:00-14:00之间备份，该参数如下：{"Monday": "", "Tuesday": "10:00-14:00", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": "", "Sunday": "10:00-14:00"} （注：可以设置一周的某几天备份，但是每天的备份时间需要设置为相同的时间段。 如果设置了该字段，将忽略StartTime字段的设置） */
  BackupTimeWindow?: CommonTimeWindow;
  /** 定期保留开关，off - 不开启定期保留策略，on - 开启定期保留策略，默认为off。首次开启定期保留策略时，BackupPeriodSaveDays，BackupPeriodSaveInterval，BackupPeriodSaveCount，StartBackupPeriodSaveDate参数为必填项，否则定期保留策略不会生效 */
  EnableBackupPeriodSave?: string;
  /** 长期保留开关,该字段功能暂未上线，可忽略。off - 不开启长期保留策略，on - 开启长期保留策略，默认为off，如果开启，则BackupPeriodSaveDays，BackupPeriodSaveInterval，BackupPeriodSaveCount参数无效 */
  EnableBackupPeriodLongTermSave?: string;
  /** 定期保留最长天数，最小值：90，最大值：3650，默认值：1080 */
  BackupPeriodSaveDays?: number;
  /** 定期保留策略周期，可取值：weekly - 周，monthly - 月， quarterly - 季度，yearly - 年，默认为monthly */
  BackupPeriodSaveInterval?: string;
  /** 定期保留的备份数量，最小值为1，最大值不超过定期保留策略周期内常规备份个数，默认值为1 */
  BackupPeriodSaveCount?: number;
  /** 定期保留策略周期起始日期，格式：YYYY-MM-dd HH:mm:ss */
  StartBackupPeriodSaveDate?: string;
  /** 是否开启数据备份归档策略，off-关闭，on-打开，默认为off */
  EnableBackupArchive?: string;
  /** 数据备份归档起始天数，数据备份达到归档起始天数时进行归档，最小为180天，不得大于数据备份保留天数 */
  BackupArchiveDays?: number;
  /** 日志备份归档起始天数，日志备份达到归档起始天数时进行归档，最小为180天，不得大于日志备份保留天数 */
  BinlogArchiveDays?: number;
  /** 是否开启日志备份归档策略，off-关闭，on-打开，默认为off */
  EnableBinlogArchive?: string;
  /** 是否开启数据备份标准存储策略，off-关闭，on-打开，默认为off */
  EnableBackupStandby?: string;
  /** 数据备份标准存储起始天数，数据备份达到标准存储起始天数时进行转换，最小为30天，不得大于数据备份保留天数。如果开启备份归档，不得大于等于备份归档天数 */
  BackupStandbyDays?: number;
  /** 是否开启日志备份标准存储策略，off-关闭，on-打开，默认为off */
  EnableBinlogStandby?: string;
  /** 日志备份标准存储起始天数，日志备份达到标准存储起始天数时进行转换，最小为30天，不得大于日志备份保留天数。如果开启备份归档，不得大于等于备份归档天数 */
  BinlogStandbyDays?: number;
}

declare interface ModifyBackupConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupDownloadRestrictionRequest {
  /** NoLimit 不限制,内外网都可以下载； LimitOnlyIntranet 仅内网可下载； Customize 用户自定义vpc:ip可下载。 只有该值为 Customize 时，才可以设置 LimitVpc 和 LimitIp 。 */
  LimitType: string;
  /** 该参数仅支持 In， 表示 LimitVpc 指定的vpc可以下载。默认为In。 */
  VpcComparisonSymbol?: string;
  /** In: 指定的ip可以下载； NotIn: 指定的ip不可以下载。 默认为In。 */
  IpComparisonSymbol?: string;
  /** 限制下载的vpc设置。 */
  LimitVpc?: BackupLimitVpcItem[];
  /** 限制下载的ip设置 */
  LimitIp?: string[];
}

declare interface ModifyBackupDownloadRestrictionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupEncryptionStatusRequest {
  /** 实例ID，格式如：cdb-XXXX。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 设置实例新增的自动物理备份文件默认加密状态。可选值为 on或者off。 */
  EncryptionStatus: string;
}

declare interface ModifyBackupEncryptionStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCDBProxyConnectionPoolRequest {
  /** 数据库代理ID */
  ProxyGroupId: string;
  /** 是否开启连接池，true：开启连接池； false：关闭连接池。 */
  OpenConnectionPool: boolean;
  /** 连接池类型，通过DescribeProxyConnectionPoolConf获取连接池类型值 */
  ConnectionPoolType?: string;
  /** 连接保留阈值：单位（秒） */
  PoolConnectionTimeOut?: number;
}

declare interface ModifyCDBProxyConnectionPoolResponse {
  /** 异步处理ID */
  AsyncRequestId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCDBProxyDescRequest {
  /** 实例ID */
  InstanceId: string;
  /** 数据库代理ID */
  ProxyGroupId: string;
  /** 数据库代理描述 */
  Desc: string;
}

declare interface ModifyCDBProxyDescResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCDBProxyVipVPortRequest {
  /** 代理组ID */
  ProxyGroupId: string;
  /** 私有网络ID */
  UniqVpcId: string;
  /** 私有网络子网ID */
  UniqSubnetId: string;
  /** 目标IP */
  DstIp?: string;
  /** 目标端口 */
  DstPort?: number;
  /** 旧IP回收时间 单位小时 */
  ReleaseDuration?: number;
}

declare interface ModifyCDBProxyVipVPortResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNameRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
  /** 修改后的实例名称。 */
  InstanceName: string;
}

declare interface ModifyDBInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceProjectRequest {
  /** 实例 ID 数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceIds: string[];
  /** 项目的 ID。 */
  NewProjectId?: number;
}

declare interface ModifyDBInstanceProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIds: string[];
  /** 当传入只读实例ID时，默认操作的是对应只读组的安全组。如果需要操作只读实例ID的安全组， 需要将该入参置为True */
  ForReadonlyInstance?: boolean;
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceVipVportRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c2nl9rpv 或者 cdbrg-c3nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
  /** 目标 IP。该参数和 DstPort 参数，两者必传一个。 */
  DstIp?: string;
  /** 目标端口，支持范围为：[1024-65535]。该参数和 DstIp 参数，两者必传一个。 */
  DstPort?: number;
  /** 私有网络统一 ID。 */
  UniqVpcId?: string;
  /** 子网统一 ID。 */
  UniqSubnetId?: string;
  /** 进行基础网络转 VPC 网络和 VPC 网络下的子网变更时，原网络中旧IP的回收时间，单位为小时，取值范围为0-168，默认值为24小时。 */
  ReleaseDuration?: number;
}

declare interface ModifyDBInstanceVipVportResponse {
  /** 异步任务ID。(该返回字段目前已废弃) */
  AsyncRequestId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceParamRequest {
  /** 实例短 ID 列表。 */
  InstanceIds: string[];
  /** 要修改的参数列表。每一个元素是 Name 和 CurrentValue 的组合。Name 是参数名，CurrentValue 是要修改成的值。 */
  ParamList?: Parameter[];
  /** 模板id，ParamList和TemplateId必须至少传其中之一 */
  TemplateId?: number;
  /** 执行参数调整任务的方式，默认为 0。支持值包括：0 - 立刻执行，1 - 时间窗执行；当该值为 1 时，每次只能传一个实例（InstanceIds数量为1） */
  WaitSwitch?: number;
  /** 参数是否同步到主实例下的只读实例。true 为不同步，false 为同步。默认为 false。 */
  NotSyncRo?: boolean;
  /** 参数是否同步到主实例下的灾备实例。true 为不同步，false 为同步。默认为 false。 */
  NotSyncDr?: boolean;
}

declare interface ModifyInstanceParamResponse {
  /** 异步任务 ID，可用于查询任务进度。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancePasswordComplexityRequest {
  /** 实例短 ID 列表。 */
  InstanceIds: string[];
  /** 要修改的参数列表。每一个元素是Name和CurrentValue的组合。Name是参数名，CurrentValue是要修改成的值。8.0版本Name支持范围：["validate_password.policy","validate_password.length","validate_password.mixed_case_count","validate_password.number_count","validate_password.special_char_count"],5.6和5.7版本支持范围：["validate_password_policy","validate_password_length","validate_password_mixed_case_count","validate_password_number_count","validate_password_special_char_count"] */
  ParamList?: Parameter[];
}

declare interface ModifyInstancePasswordComplexityResponse {
  /** 异步任务 ID，可用于查询任务进度。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceTagRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 要增加或修改的标签。 */
  ReplaceTags?: TagInfo[];
  /** 要删除的标签。 */
  DeleteTags?: TagInfo[];
}

declare interface ModifyInstanceTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLocalBinlogConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 本地binlog保留时长，可取值范围：[72,168]，当实例存在灾备实例时，可取值范围：[120,168]。 */
  SaveHours: number;
  /** 本地binlog空间使用率，可取值范围：[30,50]。 */
  MaxUsage: number;
}

declare interface ModifyLocalBinlogConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNameOrDescByDpIdRequest {
  /** 置放群组 ID。 */
  DeployGroupId: string;
  /** 置放群组名称，最长不能超过60个字符。置放群组名和置放群组描述不能都为空。 */
  DeployGroupName?: string;
  /** 置放群组描述，最长不能超过200个字符。置放群组名和置放群组描述不能都为空。 */
  Description?: string;
}

declare interface ModifyNameOrDescByDpIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyParamTemplateRequest {
  /** 模板 ID。 */
  TemplateId: number;
  /** 模板名称，长度不超过64。 */
  Name?: string;
  /** 模板描述，长度不超过255。 */
  Description?: string;
  /** 参数列表。 */
  ParamList?: Parameter[];
}

declare interface ModifyParamTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRemoteBackupConfigRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 异地数据备份开关，off - 关闭异地备份，on-开启异地备份 */
  RemoteBackupSave: string;
  /** 异地日志备份开关，off - 关闭异地备份，on-开启异地备份，只有在参数RemoteBackupSave为on时，RemoteBinlogSave参数才可设置为on */
  RemoteBinlogSave: string;
  /** 用户设置异地备份地域列表 */
  RemoteRegion: string[];
  /** 异地备份保留时间，单位为天 */
  ExpireDays: number;
}

declare interface ModifyRemoteBackupConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRoGroupInfoRequest {
  /** RO 组的 ID。 */
  RoGroupId: string;
  /** RO 组的详细信息。 */
  RoGroupInfo?: RoGroupAttr;
  /** RO 组内实例的权重。若修改 RO 组的权重模式为用户自定义模式（custom），则必须设置该参数，且需要设置每个 RO 实例的权重值。 */
  RoWeightValues?: RoWeightValue[];
  /** 是否重新均衡 RO 组内的 RO 实例的负载。支持值包括：1 - 重新均衡负载；0 - 不重新均衡负载。默认值为 0。注意，设置为重新均衡负载时，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库。 */
  IsBalanceRoLoad?: number;
  /** 废弃参数，无意义。 */
  ReplicationDelayTime?: number;
}

declare interface ModifyRoGroupInfoResponse {
  /** 异步任务 ID。 */
  AsyncRequestId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTimeWindowRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 修改后的可维护时间段，其中每一个时间段的格式形如：10:00-12:00；起止时间按半个小时对齐；最短半个小时，最长三个小时；最多设置两个时间段；起止时间范围为：[00:00, 24:00]。 */
  TimeRanges: string[];
  /** 指定修改哪一天的客户时间段，可能的取值为：monday，tuesday，wednesday，thursday，friday，saturday，sunday。如果不指定该值或者为空，则默认一周七天都修改。 */
  Weekdays?: string[];
  /** 数据延迟阈值，仅对主实例和灾备实例有效，不传默认修改为10 */
  MaxDelayTime?: number;
}

declare interface ModifyTimeWindowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OfflineIsolatedInstancesRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceIds: string[];
}

declare interface OfflineIsolatedInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenAuditServiceRequest {
  /** CDB实例ID */
  InstanceId: string;
  /** 审计日志保存时长。支持值包括：7 - 一周30 - 一个月；90 - 三个月；180 - 六个月；365 - 一年；1095 - 三年；1825 - 五年； */
  LogExpireDay: number;
  /** 高频审计日志保存时长。支持值包括：7 - 一周30 - 一个月； */
  HighLogExpireDay?: number;
  /** 审计规则。同RuleTemplateIds都不填是全审计。 */
  AuditRuleFilters?: AuditRuleFilters[];
  /** 规则模版ID。同AuditRuleFilters都不填是全审计。 */
  RuleTemplateIds?: string[];
}

declare interface OpenAuditServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenDBInstanceEncryptionRequest {
  /** 云数据库实例 ID。 */
  InstanceId: string;
  /** 用户自定义密钥ID，CMK唯一标识符。该值为空时，将使用腾讯云自动生成的密钥KMS-CDB。 */
  KeyId?: string;
  /** 用户自定义密钥的存储地域。如：ap-guangzhou 。KeyId不为空时，该参数必填。 */
  KeyRegion?: string;
}

declare interface OpenDBInstanceEncryptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenDBInstanceGTIDRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface OpenDBInstanceGTIDResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenWanServiceRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
}

declare interface OpenWanServiceResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCDBProxyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 代理ID */
  ProxyGroupId?: string;
}

declare interface QueryCDBProxyResponse {
  /** 代理数量 */
  Count: number | null;
  /** 代理信息 */
  ProxyGroup: ProxyGroups[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseIsolatedDBInstancesRequest {
  /** 实例 ID 数组，单个实例 ID 格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceIds: string[];
}

declare interface ReleaseIsolatedDBInstancesResponse {
  /** 解隔离操作的结果集。 */
  Items: ReleaseResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReloadBalanceProxyNodeRequest {
  /** 代理组ID */
  ProxyGroupId: string;
  /** 代理组地址ID */
  ProxyAddressId?: string;
}

declare interface ReloadBalanceProxyNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDBInstanceRequest {
  /** 待续费的实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872)。 */
  InstanceId: string;
  /** 续费时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。 */
  TimeSpan: number;
  /** 如果需要将按量计费实例续费为包年包月的实例，该入参的值需要指定为 "PREPAID" 。 */
  ModifyPayType?: string;
}

declare interface RenewDBInstanceResponse {
  /** 订单 ID。 */
  DealId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetRootAccountRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface ResetRootAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDBInstancesRequest {
  /** 实例 ID 数组，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceIds: string[];
}

declare interface RestartDBInstancesResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartBatchRollbackRequest {
  /** 用于回档的实例详情信息。 */
  Instances: RollbackInstancesInfo[];
}

declare interface StartBatchRollbackResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartReplicationRequest {
  /** 实例 ID。仅支持只读实例。 */
  InstanceId: string;
}

declare interface StartReplicationResponse {
  /** 异步任务 ID。 */
  AsyncRequestId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopDBImportJobRequest {
  /** 异步任务的请求 ID。 */
  AsyncRequestId: string;
}

declare interface StopDBImportJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopReplicationRequest {
  /** 实例 ID。仅支持只读实例。 */
  InstanceId: string;
}

declare interface StopReplicationResponse {
  /** 异步任务 ID。 */
  AsyncRequestId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopRollbackRequest {
  /** 撤销回档任务对应的实例Id。 */
  InstanceId: string;
}

declare interface StopRollbackResponse {
  /** 执行请求的异步任务ID */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchCDBProxyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 数据库代理ID */
  ProxyGroupId: string;
}

declare interface SwitchCDBProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchDBInstanceMasterSlaveRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 目标从实例。可选值："first" - 第一备机；"second" - 第二备机。默认值为 "first"，仅多可用区实例支持设置为 "second"。 */
  DstSlave?: string;
  /** 是否强制切换。默认为 False。注意，若设置强制切换为 True，实例存在丢失数据的风险，请谨慎使用。 */
  ForceSwitch?: boolean;
  /** 是否时间窗内切换。默认为 False，即不在时间窗内切换。注意，如果设置了 ForceSwitch 参数为 True，则该参数不生效。 */
  WaitSwitch?: boolean;
}

declare interface SwitchDBInstanceMasterSlaveResponse {
  /** 异步任务 ID。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchDrInstanceToMasterRequest {
  /** 灾备实例ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
}

declare interface SwitchDrInstanceToMasterResponse {
  /** 异步任务的请求ID，可使用此ID查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchForUpgradeRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface SwitchForUpgradeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeCDBProxyVersionRequest {
  /** 实例ID */
  InstanceId: string;
  /** 数据库代理ID */
  ProxyGroupId: string;
  /** 数据库代理当前版本 */
  SrcProxyVersion: string;
  /** 数据库代理升级版本 */
  DstProxyVersion: string;
  /** 升级时间 ：nowTime（升级完成时）timeWindow（实例维护时间） */
  UpgradeTime: string;
}

declare interface UpgradeCDBProxyVersionResponse {
  /** 异步处理ID */
  AsyncRequestId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDBInstanceEngineVersionRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
  /** 主实例数据库引擎版本，支持值包括：5.6 和 5.7。 */
  EngineVersion: string;
  /** 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。 */
  WaitSwitch?: number;
  /** 是否是内核子版本升级，支持的值：1 - 升级内核子版本；0 - 升级数据库引擎版本。 */
  UpgradeSubversion?: number;
  /** 延迟阈值。取值范围1~10 */
  MaxDelayTime?: number;
}

declare interface UpgradeDBInstanceEngineVersionResponse {
  /** 异步任务 ID，可使用 [查询异步任务的执行结果](https://cloud.tencent.com/document/api/236/20410) 获取其执行情况。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDBInstanceRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv 或者 cdbro-c1nl9rpv。与云数据库控制台页面中显示的实例 ID 相同，可使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceId: string;
  /** 升级后的内存大小，单位：MB，为保证传入 Memory 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的内存规格。 */
  Memory: number;
  /** 升级后的硬盘大小，单位：GB，为保证传入 Volume 值有效，请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口获取可升级的硬盘范围。 */
  Volume: number;
  /** 数据复制方式，支持值包括：0 - 异步复制，1 - 半同步复制，2 - 强同步复制，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。 */
  ProtectMode?: number;
  /** 部署模式，默认为 0，支持值包括：0 - 单可用区部署，1 - 多可用区部署，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。 */
  DeployMode?: number;
  /** 备库1的可用区信息，默认和实例的 Zone 参数一致，升级主实例为多可用区部署时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。可通过 [获取云数据库可售卖规格](https://cloud.tencent.com/document/product/236/17229) 接口查询支持的可用区。 */
  SlaveZone?: string;
  /** 主实例数据库引擎版本，支持值包括：5.5、5.6 和 5.7。 */
  EngineVersion?: string;
  /** 切换访问新实例的方式，默认为 0。支持值包括：0 - 立刻切换，1 - 时间窗切换；当该值为 1 时，升级中过程中，切换访问新实例的流程将会在时间窗内进行，或者用户主动调用接口 [切换访问新实例](https://cloud.tencent.com/document/product/236/15864) 触发该流程。 */
  WaitSwitch?: number;
  /** 备库 2 的可用区信息，默认为空，升级主实例时可指定该参数，升级只读实例或者灾备实例时指定该参数无意义。 */
  BackupZone?: string;
  /** 实例类型，默认为 master，支持值包括：master - 表示主实例，dr - 表示灾备实例，ro - 表示只读实例。 */
  InstanceRole?: string;
  /** 实例隔离类型。支持值包括： "UNIVERSAL" - 通用型实例， "EXCLUSIVE" - 独享型实例， "BASIC" - 基础版实例。 */
  DeviceType?: string;
  /** 升级后的实例cpu核数，如果不传将根据 Memory 指定的内存值自动填充对应的cpu值。 */
  Cpu?: number;
  /** 是否极速变配。0-普通升级，1-极速变配，2 极速优先。选择极速变配会根据资源状况校验是否可以进行极速变配，满足条件则进行极速变配，不满足条件会返回报错信息。 */
  FastUpgrade?: number;
  /** 延迟阈值。取值范围1~10，默认值为10。 */
  MaxDelayTime?: number;
  /** 是否跨区迁移。0-普通迁移，1-跨区迁移，默认值为0。该值为1时支持变更实例主节点可用区。 */
  CrossCluster?: number;
  /** 主节点可用区，该值仅在跨区迁移时生效。仅支持同地域下的可用区进行迁移。 */
  ZoneId?: string;
  /** 针对跨集群搬迁场景，选择同可用区RO的处理逻辑。together-同可用区RO跟随主实例迁移至目标可用区（默认选项），severally-同可用区RO保持原部署模式、不迁移至目标可用区。 */
  RoTransType?: string;
}

declare interface UpgradeDBInstanceResponse {
  /** 订单 ID。 */
  DealIds?: string[];
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyRootAccountRequest {
  /** 实例 ID，格式如：cdb-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 实例 ROOT 账号的密码。 */
  Password: string;
}

declare interface VerifyRootAccountResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdb 云数据库 MySQL} */
declare interface Cdb {
  (): Versions;
  /** 添加维护时间窗口 {@link AddTimeWindowRequest} {@link AddTimeWindowResponse} */
  AddTimeWindow(data: AddTimeWindowRequest, config?: AxiosRequestConfig): AxiosPromise<AddTimeWindowResponse>;
  /** 分析审计日志 {@link AnalyzeAuditLogsRequest} {@link AnalyzeAuditLogsResponse} */
  AnalyzeAuditLogs(data: AnalyzeAuditLogsRequest, config?: AxiosRequestConfig): AxiosPromise<AnalyzeAuditLogsResponse>;
  /** 安全组批量绑定云资源 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 均衡RO组内实例的负载 {@link BalanceRoGroupLoadRequest} {@link BalanceRoGroupLoadResponse} */
  BalanceRoGroupLoad(data: BalanceRoGroupLoadRequest, config?: AxiosRequestConfig): AxiosPromise<BalanceRoGroupLoadResponse>;
  /** 关闭数据库代理 {@link CloseCDBProxyRequest} {@link CloseCDBProxyResponse} */
  CloseCDBProxy(data: CloseCDBProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CloseCDBProxyResponse>;
  /** 关闭实例外网访问 {@link CloseWanServiceRequest} {@link CloseWanServiceResponse} */
  CloseWanService(data: CloseWanServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CloseWanServiceResponse>;
  /** 创建云数据库的账户 {@link CreateAccountsRequest} {@link CreateAccountsResponse} */
  CreateAccounts(data: CreateAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountsResponse>;
  /** 创建审计日志文件 {@link CreateAuditLogFileRequest} {@link CreateAuditLogFileResponse} */
  CreateAuditLogFile(data: CreateAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditLogFileResponse>;
  /** 创建审计策略 {@link CreateAuditPolicyRequest} {@link CreateAuditPolicyResponse} */
  CreateAuditPolicy(data: CreateAuditPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditPolicyResponse>;
  /** 创建审计规则 {@link CreateAuditRuleRequest} {@link CreateAuditRuleResponse} */
  CreateAuditRule(data: CreateAuditRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditRuleResponse>;
  /** 创建云数据库备份 {@link CreateBackupRequest} {@link CreateBackupResponse} */
  CreateBackup(data: CreateBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupResponse>;
  /** 创建克隆实例 {@link CreateCloneInstanceRequest} {@link CreateCloneInstanceResponse} */
  CreateCloneInstance(data: CreateCloneInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloneInstanceResponse>;
  /** 创建数据导入任务 {@link CreateDBImportJobRequest} {@link CreateDBImportJobResponse} */
  CreateDBImportJob(data: CreateDBImportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBImportJobResponse>;
  /** 创建云数据库实例（包年包月） {@link CreateDBInstanceRequest} {@link CreateDBInstanceResponse} */
  CreateDBInstance(data: CreateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstanceResponse>;
  /** 创建云数据库实例（按量计费） {@link CreateDBInstanceHourRequest} {@link CreateDBInstanceHourResponse} */
  CreateDBInstanceHour(data: CreateDBInstanceHourRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstanceHourResponse>;
  /** 创建置放群组 {@link CreateDeployGroupRequest} {@link CreateDeployGroupResponse} */
  CreateDeployGroup(data: CreateDeployGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeployGroupResponse>;
  /** 创建参数模板 {@link CreateParamTemplateRequest} {@link CreateParamTemplateResponse} */
  CreateParamTemplate(data: CreateParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateParamTemplateResponse>;
  /** 创建云数据库只读实例的独立VIP {@link CreateRoInstanceIpRequest} {@link CreateRoInstanceIpResponse} */
  CreateRoInstanceIp(data: CreateRoInstanceIpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoInstanceIpResponse>;
  /** 删除云数据库的账号 {@link DeleteAccountsRequest} {@link DeleteAccountsResponse} */
  DeleteAccounts(data: DeleteAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountsResponse>;
  /** 删除审计日志文件 {@link DeleteAuditLogFileRequest} {@link DeleteAuditLogFileResponse} */
  DeleteAuditLogFile(data: DeleteAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditLogFileResponse>;
  /** 删除审计策略 {@link DeleteAuditPolicyRequest} {@link DeleteAuditPolicyResponse} */
  DeleteAuditPolicy(data: DeleteAuditPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditPolicyResponse>;
  /** 删除审计规则 {@link DeleteAuditRuleRequest} {@link DeleteAuditRuleResponse} */
  DeleteAuditRule(data: DeleteAuditRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditRuleResponse>;
  /** 删除云数据库备份 {@link DeleteBackupRequest} {@link DeleteBackupResponse} */
  DeleteBackup(data: DeleteBackupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupResponse>;
  /** 删除置放群组 {@link DeleteDeployGroupsRequest} {@link DeleteDeployGroupsResponse} */
  DeleteDeployGroups(data: DeleteDeployGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeployGroupsResponse>;
  /** 删除参数模板 {@link DeleteParamTemplateRequest} {@link DeleteParamTemplateResponse} */
  DeleteParamTemplate(data: DeleteParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteParamTemplateResponse>;
  /** 删除维护时间窗口 {@link DeleteTimeWindowRequest} {@link DeleteTimeWindowResponse} */
  DeleteTimeWindow(data: DeleteTimeWindowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTimeWindowResponse>;
  /** 查询云数据库账户的权限信息 {@link DescribeAccountPrivilegesRequest} {@link DescribeAccountPrivilegesResponse} */
  DescribeAccountPrivileges(data: DescribeAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountPrivilegesResponse>;
  /** 查询云数据库的所有账号信息 {@link DescribeAccountsRequest} {@link DescribeAccountsResponse} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** 查询异步任务的执行结果 {@link DescribeAsyncRequestInfoRequest} {@link DescribeAsyncRequestInfoResponse} */
  DescribeAsyncRequestInfo(data: DescribeAsyncRequestInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAsyncRequestInfoResponse>;
  /** 查询审计服务配置 {@link DescribeAuditConfigRequest} {@link DescribeAuditConfigResponse} */
  DescribeAuditConfig(data: DescribeAuditConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditConfigResponse>;
  /** 查询审计日志文件 {@link DescribeAuditLogFilesRequest} {@link DescribeAuditLogFilesResponse} */
  DescribeAuditLogFiles(data: DescribeAuditLogFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogFilesResponse>;
  /** 查询审计策略 {@link DescribeAuditPoliciesRequest} {@link DescribeAuditPoliciesResponse} */
  DescribeAuditPolicies(data?: DescribeAuditPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditPoliciesResponse>;
  /** 查询审计规则 {@link DescribeAuditRulesRequest} {@link DescribeAuditRulesResponse} */
  DescribeAuditRules(data?: DescribeAuditRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditRulesResponse>;
  /** 查询云数据库备份配置信息 {@link DescribeBackupConfigRequest} {@link DescribeBackupConfigResponse} */
  DescribeBackupConfig(data: DescribeBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupConfigResponse>;
  /** 查询备份数据库列表 {@link DescribeBackupDatabasesRequest} {@link DescribeBackupDatabasesResponse} */
  DescribeBackupDatabases(data: DescribeBackupDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDatabasesResponse>;
  /** 查询备份文件下载源限制 {@link DescribeBackupDownloadRestrictionRequest} {@link DescribeBackupDownloadRestrictionResponse} */
  DescribeBackupDownloadRestriction(data?: DescribeBackupDownloadRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadRestrictionResponse>;
  /** 查询实例默认备份加密状态 {@link DescribeBackupEncryptionStatusRequest} {@link DescribeBackupEncryptionStatusResponse} */
  DescribeBackupEncryptionStatus(data: DescribeBackupEncryptionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupEncryptionStatusResponse>;
  /** 查询备份概览 {@link DescribeBackupOverviewRequest} {@link DescribeBackupOverviewResponse} */
  DescribeBackupOverview(data: DescribeBackupOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupOverviewResponse>;
  /** 查询备份实时统计 {@link DescribeBackupSummariesRequest} {@link DescribeBackupSummariesResponse} */
  DescribeBackupSummaries(data: DescribeBackupSummariesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupSummariesResponse>;
  /** 查询指定数据库的备份数据表 {@link DescribeBackupTablesRequest} {@link DescribeBackupTablesResponse} */
  DescribeBackupTables(data: DescribeBackupTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupTablesResponse>;
  /** 查询数据备份文件列表 {@link DescribeBackupsRequest} {@link DescribeBackupsResponse} */
  DescribeBackups(data: DescribeBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupsResponse>;
  /** 查询日志备份概览 {@link DescribeBinlogBackupOverviewRequest} {@link DescribeBinlogBackupOverviewResponse} */
  DescribeBinlogBackupOverview(data: DescribeBinlogBackupOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogBackupOverviewResponse>;
  /** 查询二进制日志备份文件列表 {@link DescribeBinlogsRequest} {@link DescribeBinlogsResponse} */
  DescribeBinlogs(data: DescribeBinlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogsResponse>;
  /** @deprecated 查询数据库代理 {@link DescribeCDBProxyRequest} {@link DescribeCDBProxyResponse} */
  DescribeCDBProxy(data: DescribeCDBProxyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCDBProxyResponse>;
  /** 查询数据库可用区及售卖规格 {@link DescribeCdbZoneConfigRequest} {@link DescribeCdbZoneConfigResponse} */
  DescribeCdbZoneConfig(data?: DescribeCdbZoneConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdbZoneConfigResponse>;
  /** 查询克隆任务列表 {@link DescribeCloneListRequest} {@link DescribeCloneListResponse} */
  DescribeCloneList(data: DescribeCloneListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloneListResponse>;
  /** 查询实例版本属性 {@link DescribeDBFeaturesRequest} {@link DescribeDBFeaturesResponse} */
  DescribeDBFeatures(data: DescribeDBFeaturesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBFeaturesResponse>;
  /** 查询数据库导入任务记录 {@link DescribeDBImportRecordsRequest} {@link DescribeDBImportRecordsResponse} */
  DescribeDBImportRecords(data: DescribeDBImportRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBImportRecordsResponse>;
  /** 查询云数据库实例的字符集 {@link DescribeDBInstanceCharsetRequest} {@link DescribeDBInstanceCharsetResponse} */
  DescribeDBInstanceCharset(data: DescribeDBInstanceCharsetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceCharsetResponse>;
  /** 查询云数据库实例的配置信息 {@link DescribeDBInstanceConfigRequest} {@link DescribeDBInstanceConfigResponse} */
  DescribeDBInstanceConfig(data: DescribeDBInstanceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceConfigResponse>;
  /** 查询云数据实例的GTID是否开通 {@link DescribeDBInstanceGTIDRequest} {@link DescribeDBInstanceGTIDResponse} */
  DescribeDBInstanceGTID(data: DescribeDBInstanceGTIDRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceGTIDResponse>;
  /** 查询实例基本信息 {@link DescribeDBInstanceInfoRequest} {@link DescribeDBInstanceInfoResponse} */
  DescribeDBInstanceInfo(data: DescribeDBInstanceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceInfoResponse>;
  /** 查询云数据库实例的预期重启时间 {@link DescribeDBInstanceRebootTimeRequest} {@link DescribeDBInstanceRebootTimeResponse} */
  DescribeDBInstanceRebootTime(data: DescribeDBInstanceRebootTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceRebootTimeResponse>;
  /** 查询实例列表 {@link DescribeDBInstancesRequest} {@link DescribeDBInstancesResponse} */
  DescribeDBInstances(data?: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** 查询数据库价格 {@link DescribeDBPriceRequest} {@link DescribeDBPriceResponse} */
  DescribeDBPrice(data: DescribeDBPriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBPriceResponse>;
  /** 查询实例安全组信息 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询云数据库切换记录 {@link DescribeDBSwitchRecordsRequest} {@link DescribeDBSwitchRecordsResponse} */
  DescribeDBSwitchRecords(data: DescribeDBSwitchRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSwitchRecordsResponse>;
  /** 查询数据备份概览 {@link DescribeDataBackupOverviewRequest} {@link DescribeDataBackupOverviewResponse} */
  DescribeDataBackupOverview(data: DescribeDataBackupOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataBackupOverviewResponse>;
  /** 查询数据库 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** 查询默认的可设置参数列表 {@link DescribeDefaultParamsRequest} {@link DescribeDefaultParamsResponse} */
  DescribeDefaultParams(data: DescribeDefaultParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultParamsResponse>;
  /** 查询置放群组列表 {@link DescribeDeployGroupListRequest} {@link DescribeDeployGroupListResponse} */
  DescribeDeployGroupList(data?: DescribeDeployGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeployGroupListResponse>;
  /** 物理机监控信息 {@link DescribeDeviceMonitorInfoRequest} {@link DescribeDeviceMonitorInfoResponse} */
  DescribeDeviceMonitorInfo(data: DescribeDeviceMonitorInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceMonitorInfoResponse>;
  /** 查询实例错误日志详情 {@link DescribeErrorLogDataRequest} {@link DescribeErrorLogDataResponse} */
  DescribeErrorLogData(data: DescribeErrorLogDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeErrorLogDataResponse>;
  /** 查询实例参数修改历史 {@link DescribeInstanceParamRecordsRequest} {@link DescribeInstanceParamRecordsResponse} */
  DescribeInstanceParamRecords(data: DescribeInstanceParamRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamRecordsResponse>;
  /** 查询实例的可设置参数列表 {@link DescribeInstanceParamsRequest} {@link DescribeInstanceParamsResponse} */
  DescribeInstanceParams(data: DescribeInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamsResponse>;
  /** 查询本地binlog保留策略 {@link DescribeLocalBinlogConfigRequest} {@link DescribeLocalBinlogConfigResponse} */
  DescribeLocalBinlogConfig(data: DescribeLocalBinlogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLocalBinlogConfigResponse>;
  /** 查询参数模板详情 {@link DescribeParamTemplateInfoRequest} {@link DescribeParamTemplateInfoResponse} */
  DescribeParamTemplateInfo(data: DescribeParamTemplateInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamTemplateInfoResponse>;
  /** 查询参数模板列表 {@link DescribeParamTemplatesRequest} {@link DescribeParamTemplatesResponse} */
  DescribeParamTemplates(data?: DescribeParamTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamTemplatesResponse>;
  /** 查询项目安全组信息 {@link DescribeProjectSecurityGroupsRequest} {@link DescribeProjectSecurityGroupsResponse} */
  DescribeProjectSecurityGroups(data?: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** @deprecated 查询代理连接池规格配置 {@link DescribeProxyConnectionPoolConfRequest} {@link DescribeProxyConnectionPoolConfResponse} */
  DescribeProxyConnectionPoolConf(data: DescribeProxyConnectionPoolConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyConnectionPoolConfResponse>;
  /** 查询代理规格配置 {@link DescribeProxyCustomConfRequest} {@link DescribeProxyCustomConfResponse} */
  DescribeProxyCustomConf(data: DescribeProxyCustomConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyCustomConfResponse>;
  /** 查询云数据库异地备份配置信息 {@link DescribeRemoteBackupConfigRequest} {@link DescribeRemoteBackupConfigResponse} */
  DescribeRemoteBackupConfig(data: DescribeRemoteBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRemoteBackupConfigResponse>;
  /** 查询云数据库实例的所有RO组的信息 {@link DescribeRoGroupsRequest} {@link DescribeRoGroupsResponse} */
  DescribeRoGroups(data: DescribeRoGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoGroupsResponse>;
  /** 获取只读实例购买或升级的最小规格 {@link DescribeRoMinScaleRequest} {@link DescribeRoMinScaleResponse} */
  DescribeRoMinScale(data?: DescribeRoMinScaleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoMinScaleResponse>;
  /** 查询可回档时间 {@link DescribeRollbackRangeTimeRequest} {@link DescribeRollbackRangeTimeResponse} */
  DescribeRollbackRangeTime(data: DescribeRollbackRangeTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRollbackRangeTimeResponse>;
  /** 查询回档任务详情 {@link DescribeRollbackTaskDetailRequest} {@link DescribeRollbackTaskDetailResponse} */
  DescribeRollbackTaskDetail(data: DescribeRollbackTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRollbackTaskDetailResponse>;
  /** 查询实例慢日志 {@link DescribeSlowLogDataRequest} {@link DescribeSlowLogDataResponse} */
  DescribeSlowLogData(data: DescribeSlowLogDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogDataResponse>;
  /** 查询慢查询日志 {@link DescribeSlowLogsRequest} {@link DescribeSlowLogsResponse} */
  DescribeSlowLogs(data: DescribeSlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogsResponse>;
  /** 查询云数据库实例支持的权限信息 {@link DescribeSupportedPrivilegesRequest} {@link DescribeSupportedPrivilegesResponse} */
  DescribeSupportedPrivileges(data: DescribeSupportedPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSupportedPrivilegesResponse>;
  /** 查询数据库表 {@link DescribeTablesRequest} {@link DescribeTablesResponse} */
  DescribeTables(data: DescribeTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesResponse>;
  /** 获取实例绑定的标签 {@link DescribeTagsOfInstanceIdsRequest} {@link DescribeTagsOfInstanceIdsResponse} */
  DescribeTagsOfInstanceIds(data: DescribeTagsOfInstanceIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagsOfInstanceIdsResponse>;
  /** 查询云数据库实例任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data?: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 查询维护时间窗口 {@link DescribeTimeWindowRequest} {@link DescribeTimeWindowResponse} */
  DescribeTimeWindow(data: DescribeTimeWindowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimeWindowResponse>;
  /** 查询导入SQL文件列表 （已废弃） {@link DescribeUploadedFilesRequest} {@link DescribeUploadedFilesResponse} */
  DescribeUploadedFiles(data: DescribeUploadedFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUploadedFilesResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** @deprecated 初始化新实例（该接口已经不再维护，不建议使用） {@link InitDBInstancesRequest} {@link InitDBInstancesResponse} */
  InitDBInstances(data: InitDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InitDBInstancesResponse>;
  /** 查询数据库升级价格 {@link InquiryPriceUpgradeInstancesRequest} {@link InquiryPriceUpgradeInstancesResponse} */
  InquiryPriceUpgradeInstances(data: InquiryPriceUpgradeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceUpgradeInstancesResponse>;
  /** 隔离云数据库实例 {@link IsolateDBInstanceRequest} {@link IsolateDBInstanceResponse} */
  IsolateDBInstance(data: IsolateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBInstanceResponse>;
  /** 修改云数据库实例账号的备注信息 {@link ModifyAccountDescriptionRequest} {@link ModifyAccountDescriptionResponse} */
  ModifyAccountDescription(data: ModifyAccountDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountDescriptionResponse>;
  /** 修改云数据库实例账号的主机 {@link ModifyAccountHostRequest} {@link ModifyAccountHostResponse} */
  ModifyAccountHost(data: ModifyAccountHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountHostResponse>;
  /** 修改账户最大可用连接数 {@link ModifyAccountMaxUserConnectionsRequest} {@link ModifyAccountMaxUserConnectionsResponse} */
  ModifyAccountMaxUserConnections(data: ModifyAccountMaxUserConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountMaxUserConnectionsResponse>;
  /** 修改云数据库实例账号的密码 {@link ModifyAccountPasswordRequest} {@link ModifyAccountPasswordResponse} */
  ModifyAccountPassword(data: ModifyAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountPasswordResponse>;
  /** 修改云数据库实例账号的权限 {@link ModifyAccountPrivilegesRequest} {@link ModifyAccountPrivilegesResponse} */
  ModifyAccountPrivileges(data: ModifyAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountPrivilegesResponse>;
  /** 更改审计服务配置 {@link ModifyAuditConfigRequest} {@link ModifyAuditConfigResponse} */
  ModifyAuditConfig(data: ModifyAuditConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuditConfigResponse>;
  /** 修改审计规则 {@link ModifyAuditRuleRequest} {@link ModifyAuditRuleResponse} */
  ModifyAuditRule(data: ModifyAuditRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuditRuleResponse>;
  /** 修改云数据库实例的自动续费标记 {@link ModifyAutoRenewFlagRequest} {@link ModifyAutoRenewFlagResponse} */
  ModifyAutoRenewFlag(data: ModifyAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoRenewFlagResponse>;
  /** 修改数据库备份配置 {@link ModifyBackupConfigRequest} {@link ModifyBackupConfigResponse} */
  ModifyBackupConfig(data: ModifyBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupConfigResponse>;
  /** 修改备份文件的限制下载来源 {@link ModifyBackupDownloadRestrictionRequest} {@link ModifyBackupDownloadRestrictionResponse} */
  ModifyBackupDownloadRestriction(data: ModifyBackupDownloadRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupDownloadRestrictionResponse>;
  /** 设置实例备份文件是否加密 {@link ModifyBackupEncryptionStatusRequest} {@link ModifyBackupEncryptionStatusResponse} */
  ModifyBackupEncryptionStatus(data: ModifyBackupEncryptionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupEncryptionStatusResponse>;
  /** @deprecated 配置数据库代理连接池 {@link ModifyCDBProxyConnectionPoolRequest} {@link ModifyCDBProxyConnectionPoolResponse} */
  ModifyCDBProxyConnectionPool(data: ModifyCDBProxyConnectionPoolRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCDBProxyConnectionPoolResponse>;
  /** @deprecated 修改数据库代理描述 {@link ModifyCDBProxyDescRequest} {@link ModifyCDBProxyDescResponse} */
  ModifyCDBProxyDesc(data: ModifyCDBProxyDescRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCDBProxyDescResponse>;
  /** @deprecated 修改数据库代理VIP或端口 {@link ModifyCDBProxyVipVPortRequest} {@link ModifyCDBProxyVipVPortResponse} */
  ModifyCDBProxyVipVPort(data: ModifyCDBProxyVipVPortRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCDBProxyVipVPortResponse>;
  /** 修改云数据库实例名 {@link ModifyDBInstanceNameRequest} {@link ModifyDBInstanceNameResponse} */
  ModifyDBInstanceName(data: ModifyDBInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNameResponse>;
  /** 修改云数据库实例的所属项目 {@link ModifyDBInstanceProjectRequest} {@link ModifyDBInstanceProjectResponse} */
  ModifyDBInstanceProject(data: ModifyDBInstanceProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceProjectResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改云数据库实例的IP和端口号 {@link ModifyDBInstanceVipVportRequest} {@link ModifyDBInstanceVipVportResponse} */
  ModifyDBInstanceVipVport(data: ModifyDBInstanceVipVportRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceVipVportResponse>;
  /** 修改实例参数 {@link ModifyInstanceParamRequest} {@link ModifyInstanceParamResponse} */
  ModifyInstanceParam(data: ModifyInstanceParamRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceParamResponse>;
  /** 修改实例密码复杂度 {@link ModifyInstancePasswordComplexityRequest} {@link ModifyInstancePasswordComplexityResponse} */
  ModifyInstancePasswordComplexity(data: ModifyInstancePasswordComplexityRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancePasswordComplexityResponse>;
  /** 修改实例标签 {@link ModifyInstanceTagRequest} {@link ModifyInstanceTagResponse} */
  ModifyInstanceTag(data: ModifyInstanceTagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceTagResponse>;
  /** 修改本地binlog保留策略 {@link ModifyLocalBinlogConfigRequest} {@link ModifyLocalBinlogConfigResponse} */
  ModifyLocalBinlogConfig(data: ModifyLocalBinlogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLocalBinlogConfigResponse>;
  /** 修改置放群组的名称或者描述 {@link ModifyNameOrDescByDpIdRequest} {@link ModifyNameOrDescByDpIdResponse} */
  ModifyNameOrDescByDpId(data: ModifyNameOrDescByDpIdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNameOrDescByDpIdResponse>;
  /** 修改参数模板 {@link ModifyParamTemplateRequest} {@link ModifyParamTemplateResponse} */
  ModifyParamTemplate(data: ModifyParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyParamTemplateResponse>;
  /** 修改云数据库异地备份配置信息 {@link ModifyRemoteBackupConfigRequest} {@link ModifyRemoteBackupConfigResponse} */
  ModifyRemoteBackupConfig(data: ModifyRemoteBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRemoteBackupConfigResponse>;
  /** 更新实例Ro组的信息 {@link ModifyRoGroupInfoRequest} {@link ModifyRoGroupInfoResponse} */
  ModifyRoGroupInfo(data: ModifyRoGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoGroupInfoResponse>;
  /** 更新维护时间窗口 {@link ModifyTimeWindowRequest} {@link ModifyTimeWindowResponse} */
  ModifyTimeWindow(data: ModifyTimeWindowRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTimeWindowResponse>;
  /** 下线隔离状态的云数据库实例 {@link OfflineIsolatedInstancesRequest} {@link OfflineIsolatedInstancesResponse} */
  OfflineIsolatedInstances(data: OfflineIsolatedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineIsolatedInstancesResponse>;
  /** 开通审计服务 {@link OpenAuditServiceRequest} {@link OpenAuditServiceResponse} */
  OpenAuditService(data: OpenAuditServiceRequest, config?: AxiosRequestConfig): AxiosPromise<OpenAuditServiceResponse>;
  /** 启用数据存储加密 {@link OpenDBInstanceEncryptionRequest} {@link OpenDBInstanceEncryptionResponse} */
  OpenDBInstanceEncryption(data: OpenDBInstanceEncryptionRequest, config?: AxiosRequestConfig): AxiosPromise<OpenDBInstanceEncryptionResponse>;
  /** 开启实例的GTID {@link OpenDBInstanceGTIDRequest} {@link OpenDBInstanceGTIDResponse} */
  OpenDBInstanceGTID(data: OpenDBInstanceGTIDRequest, config?: AxiosRequestConfig): AxiosPromise<OpenDBInstanceGTIDResponse>;
  /** 开通实例外网访问 {@link OpenWanServiceRequest} {@link OpenWanServiceResponse} */
  OpenWanService(data: OpenWanServiceRequest, config?: AxiosRequestConfig): AxiosPromise<OpenWanServiceResponse>;
  /** @deprecated 查询代理详情 {@link QueryCDBProxyRequest} {@link QueryCDBProxyResponse} */
  QueryCDBProxy(data: QueryCDBProxyRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCDBProxyResponse>;
  /** 解隔离云数据库实例 {@link ReleaseIsolatedDBInstancesRequest} {@link ReleaseIsolatedDBInstancesResponse} */
  ReleaseIsolatedDBInstances(data: ReleaseIsolatedDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseIsolatedDBInstancesResponse>;
  /** 负载均衡数据库代理 {@link ReloadBalanceProxyNodeRequest} {@link ReloadBalanceProxyNodeResponse} */
  ReloadBalanceProxyNode(data: ReloadBalanceProxyNodeRequest, config?: AxiosRequestConfig): AxiosPromise<ReloadBalanceProxyNodeResponse>;
  /** 续费云数据库实例 {@link RenewDBInstanceRequest} {@link RenewDBInstanceResponse} */
  RenewDBInstance(data: RenewDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDBInstanceResponse>;
  /** 重置ROOT账号 {@link ResetRootAccountRequest} {@link ResetRootAccountResponse} */
  ResetRootAccount(data: ResetRootAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ResetRootAccountResponse>;
  /** 重启实例 {@link RestartDBInstancesRequest} {@link RestartDBInstancesResponse} */
  RestartDBInstances(data: RestartDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDBInstancesResponse>;
  /** 回档数据库表 {@link StartBatchRollbackRequest} {@link StartBatchRollbackResponse} */
  StartBatchRollback(data: StartBatchRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<StartBatchRollbackResponse>;
  /** 开启复制 {@link StartReplicationRequest} {@link StartReplicationResponse} */
  StartReplication(data: StartReplicationRequest, config?: AxiosRequestConfig): AxiosPromise<StartReplicationResponse>;
  /** 终止数据导入任务 {@link StopDBImportJobRequest} {@link StopDBImportJobResponse} */
  StopDBImportJob(data: StopDBImportJobRequest, config?: AxiosRequestConfig): AxiosPromise<StopDBImportJobResponse>;
  /** 停止复制 {@link StopReplicationRequest} {@link StopReplicationResponse} */
  StopReplication(data: StopReplicationRequest, config?: AxiosRequestConfig): AxiosPromise<StopReplicationResponse>;
  /** 撤销回档任务 {@link StopRollbackRequest} {@link StopRollbackResponse} */
  StopRollback(data: StopRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<StopRollbackResponse>;
  /** 切换数据库代理 {@link SwitchCDBProxyRequest} {@link SwitchCDBProxyResponse} */
  SwitchCDBProxy(data: SwitchCDBProxyRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchCDBProxyResponse>;
  /** 切换实例主从角色 {@link SwitchDBInstanceMasterSlaveRequest} {@link SwitchDBInstanceMasterSlaveResponse} */
  SwitchDBInstanceMasterSlave(data: SwitchDBInstanceMasterSlaveRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDBInstanceMasterSlaveResponse>;
  /** 云数据库灾备实例切换为主实例 {@link SwitchDrInstanceToMasterRequest} {@link SwitchDrInstanceToMasterResponse} */
  SwitchDrInstanceToMaster(data: SwitchDrInstanceToMasterRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDrInstanceToMasterResponse>;
  /** 切换访问新实例 {@link SwitchForUpgradeRequest} {@link SwitchForUpgradeResponse} */
  SwitchForUpgrade(data: SwitchForUpgradeRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchForUpgradeResponse>;
  /** 升级数据库代理版本 {@link UpgradeCDBProxyVersionRequest} {@link UpgradeCDBProxyVersionResponse} */
  UpgradeCDBProxyVersion(data: UpgradeCDBProxyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeCDBProxyVersionResponse>;
  /** 调整云数据库实例的配置 {@link UpgradeDBInstanceRequest} {@link UpgradeDBInstanceResponse} */
  UpgradeDBInstance(data: UpgradeDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDBInstanceResponse>;
  /** 升级实例版本 {@link UpgradeDBInstanceEngineVersionRequest} {@link UpgradeDBInstanceEngineVersionResponse} */
  UpgradeDBInstanceEngineVersion(data: UpgradeDBInstanceEngineVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDBInstanceEngineVersionResponse>;
  /** 验证root账号权限 {@link VerifyRootAccountRequest} {@link VerifyRootAccountResponse} */
  VerifyRootAccount(data: VerifyRootAccountRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyRootAccountResponse>;
}

export declare type Versions = ["2017-03-20"];

export default Cdb;
