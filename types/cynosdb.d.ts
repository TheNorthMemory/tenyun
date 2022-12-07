/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据库账号信息 */
declare interface Account {
  /** 数据库账号名 */
  AccountName: string;
  /** 数据库账号描述 */
  Description: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 主机 */
  Host: string;
  /** 用户最大连接数 */
  MaxUserConnections: number;
}

/** 账号参数 */
declare interface AccountParam {
  /** 参数名称，当前仅支持参数：max_user_connections */
  ParamName: string;
  /** 参数值 */
  ParamValue: string;
}

/** 数据库地址 */
declare interface Addr {
  /** IP */
  IP: string;
  /** 端口 */
  Port: number;
}

/** 审计日志详细信息 */
declare interface AuditLog {
  /** 影响行数。 */
  AffectRows: number;
  /** 错误码。 */
  ErrCode: number;
  /** SQL类型。 */
  SqlType: string;
  /** 表名称。 */
  TableName: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 审计策略名称。 */
  PolicyName: string;
  /** 数据库名称。 */
  DBName: string;
  /** SQL语句。 */
  Sql: string;
  /** 客户端地址。 */
  Host: string;
  /** 用户名。 */
  User: string;
  /** 执行时间。 */
  ExecTime: number;
  /** 时间戳。 */
  Timestamp: string;
  /** 发送行数。 */
  SentRows: number;
  /** 执行线程ID。 */
  ThreadId: number;
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
  /** 返回行数。 */
  SentRows?: number;
  /** 线程ID。 */
  ThreadId?: string[];
}

/** 备份文件信息 */
declare interface BackupFileInfo {
  /** 快照文件ID，已废弃，请使用BackupId */
  SnapshotId: number;
  /** 备份文件名 */
  FileName: string;
  /** 备份文件大小 */
  FileSize: number;
  /** 备份开始时间 */
  StartTime: string;
  /** 备份完成时间 */
  FinishTime: string;
  /** 备份类型：snapshot，快照备份；logic，逻辑备份 */
  BackupType: string;
  /** 备份方式：auto，自动备份；manual，手动备份 */
  BackupMethod: string;
  /** 备份文件状态：success：备份成功；fail：备份失败；creating：备份文件创建中；deleting：备份文件删除中 */
  BackupStatus: string;
  /** 备份文件时间 */
  SnapshotTime: string;
  /** 备份ID */
  BackupId: number | null;
  /** 快照类型，可选值：full，全量；increment，增量 */
  SnapShotType: string | null;
  /** 备份文件备注 */
  BackupName: string | null;
}

/** 计费资源信息 */
declare interface BillingResourceInfo {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表 */
  InstanceIds: string[];
  /** 订单ID */
  DealName: string;
}

/** Binlog描述 */
declare interface BinlogItem {
  /** Binlog文件名称 */
  FileName: string;
  /** 文件大小，单位：字节 */
  FileSize: number;
  /** 事务最早时间 */
  StartTime: string;
  /** 事务最晚时间 */
  FinishTime: string;
  /** Binlog文件ID */
  BinlogId: number;
}

/** 集群实例信息 */
declare interface ClusterInstanceDetail {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 引擎类型 */
  InstanceType: string;
  /** 实例状态 */
  InstanceStatus: string;
  /** 实例状态描述 */
  InstanceStatusDesc: string;
  /** cpu核数 */
  InstanceCpu: number;
  /** 内存 */
  InstanceMemory: number;
  /** 硬盘 */
  InstanceStorage: number;
}

/** 参数修改记录 */
declare interface ClusterParamModifyLog {
  /** 参数名称 */
  ParamName: string;
  /** 当前值 */
  CurrentValue: string;
  /** 修改后的值 */
  UpdateValue: string;
  /** 修改状态 */
  Status: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 集群ID */
  ClusterId: string;
  /** 实例ID */
  InstanceId: string;
}

/** 集群信息 */
declare interface CynosdbCluster {
  /** 集群状态， 可选值如下:creating: 创建中running:运行中isolating:隔离中isolated:已隔离activating:解隔离中offlining:下线中offlined:已下线deleting:删除中deleted:已删除 */
  Status: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 可用区 */
  Zone: string;
  /** 集群名称 */
  ClusterName: string;
  /** 地域 */
  Region: string;
  /** 数据库版本 */
  DbVersion: string;
  /** 集群ID */
  ClusterId: string;
  /** 实例数 */
  InstanceNum: number;
  /** 用户uin */
  Uin: string;
  /** 引擎类型 */
  DbType: string;
  /** 用户appid */
  AppId: number;
  /** 集群状态描述 */
  StatusDesc: string;
  /** 集群创建时间 */
  CreateTime: string;
  /** 付费模式。0-按量计费，1-包年包月 */
  PayMode: number;
  /** 截止时间 */
  PeriodEndTime: string;
  /** 集群读写vip */
  Vip: string;
  /** 集群读写vport */
  Vport: number;
  /** 项目id */
  ProjectID: number;
  /** 私有网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** cynos内核版本 */
  CynosVersion?: string;
  /** 存储容量 */
  StorageLimit?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 正在处理的任务 */
  ProcessingTask?: string;
  /** 集群的任务数组 */
  Tasks?: ObjectTask[];
  /** 集群绑定的tag数组 */
  ResourceTags?: Tag[];
  /** Db类型(NORMAL, SERVERLESS) */
  DbMode?: string;
  /** 当Db类型为SERVERLESS时，serverless集群状态，可选值:resumepause */
  ServerlessStatus?: string;
  /** 集群预付费存储值大小 */
  Storage?: number;
  /** 集群存储为预付费时的存储ID，用于预付费存储变配 */
  StorageId?: string;
  /** 集群存储付费模式。0-按量计费，1-包年包月 */
  StoragePayMode?: number;
  /** 集群计算规格对应的最小存储值 */
  MinStorageSize?: number;
  /** 集群计算规格对应的最大存储值 */
  MaxStorageSize?: number;
  /** 集群网络信息 */
  NetAddrs?: NetAddr[];
}

/** 集群详情详细信息 */
declare interface CynosdbClusterDetail {
  /** 集群ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 地域 */
  Region: string;
  /** 状态 */
  Status: string;
  /** 状态描述 */
  StatusDesc: string;
  /** VPC名称 */
  VpcName: string;
  /** vpc唯一id */
  VpcId: string;
  /** 子网名称 */
  SubnetName: string;
  /** 子网ID */
  SubnetId: string;
  /** 字符集 */
  Charset: string;
  /** 创建时间 */
  CreateTime: string;
  /** 数据库类型 */
  DbType: string;
  /** 数据库版本 */
  DbVersion: string;
  /** 使用容量 */
  UsedStorage: number;
  /** 读写分离Vport */
  RoAddr: Addr[];
  /** 实例信息 */
  InstanceSet: ClusterInstanceDetail[];
  /** 付费模式 */
  PayMode: number;
  /** 到期时间 */
  PeriodEndTime: string;
  /** vip地址 */
  Vip: string;
  /** vport端口 */
  Vport: number;
  /** 项目id */
  ProjectID: number;
  /** 可用区 */
  Zone: string;
  /** 实例绑定的tag数组信息 */
  ResourceTags: Tag[];
  /** 当Db类型为SERVERLESS时，serverless集群状态，可选值:resumeresumingpausepausing */
  ServerlessStatus: string;
}

/** 实例信息 */
declare interface CynosdbInstance {
  /** 用户Uin */
  Uin: string;
  /** 用户AppId */
  AppId: number;
  /** 集群ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 项目ID */
  ProjectId: number;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** 实例状态 */
  Status: string;
  /** 实例状态中文描述 */
  StatusDesc: string;
  /** 数据库类型 */
  DbType: string;
  /** 数据库版本 */
  DbVersion: string;
  /** Cpu，单位：核 */
  Cpu: number;
  /** 内存，单位：GB */
  Memory: number;
  /** 存储量，单位：GB */
  Storage: number;
  /** 实例类型 */
  InstanceType: string;
  /** 实例当前角色 */
  InstanceRole: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** VPC网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 实例内网IP */
  Vip: string;
  /** 实例内网端口 */
  Vport: number;
  /** 付费模式 */
  PayMode: number;
  /** 实例过期时间 */
  PeriodEndTime: string;
  /** 销毁期限 */
  DestroyDeadlineText: string;
  /** 隔离时间 */
  IsolateTime: string;
  /** 网络类型 */
  NetType: number;
  /** 外网域名 */
  WanDomain: string;
  /** 外网IP */
  WanIP: string;
  /** 外网端口 */
  WanPort: number;
  /** 外网状态 */
  WanStatus: string;
  /** 实例销毁时间 */
  DestroyTime: string;
  /** Cynos内核版本 */
  CynosVersion: string;
  /** 正在处理的任务 */
  ProcessingTask: string;
  /** 续费标志 */
  RenewFlag: number;
  /** serverless实例cpu下限 */
  MinCpu: number;
  /** serverless实例cpu上限 */
  MaxCpu: number;
  /** serverless实例状态, 可选值：resumepause */
  ServerlessStatus: string;
  /** 预付费存储Id */
  StorageId: string | null;
  /** 存储付费类型 */
  StoragePayMode: number;
  /** 物理区 */
  PhysicalZone: string;
  /** 商业类型 */
  BusinessType: string | null;
  /** 任务 */
  Tasks: ObjectTask[] | null;
  /** 是否冻结 */
  IsFreeze: string | null;
  /** 资源标签 */
  ResourceTags: Tag[] | null;
}

/** 实例详情 */
declare interface CynosdbInstanceDetail {
  /** 用户Uin */
  Uin: string;
  /** 用户AppId */
  AppId: number;
  /** 集群ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 项目ID */
  ProjectId: number;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** 实例状态 */
  Status: string;
  /** 实例状态中文描述 */
  StatusDesc: string;
  /** 数据库类型 */
  DbType: string;
  /** 数据库版本 */
  DbVersion: string;
  /** Cpu，单位：核 */
  Cpu: number;
  /** 内存，单位：GB */
  Memory: number;
  /** 存储量，单位：GB */
  Storage: number;
  /** 实例类型 */
  InstanceType: string;
  /** 实例当前角色 */
  InstanceRole: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 付费模式 */
  PayMode: number;
  /** 实例过期时间 */
  PeriodEndTime: string;
  /** 网络类型 */
  NetType: number;
  /** VPC网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 实例内网IP */
  Vip: string;
  /** 实例内网端口 */
  Vport: number;
  /** 实例外网域名 */
  WanDomain: string;
  /** 字符集 */
  Charset: string;
  /** Cynos内核版本 */
  CynosVersion: string;
  /** 续费标志 */
  RenewFlag: number;
  /** serverless实例cpu下限 */
  MinCpu: number;
  /** serverless实例cpu上限 */
  MaxCpu: number;
  /** serverless实例状态, 可能值：resumepause */
  ServerlessStatus: string;
}

/** 实例组信息 */
declare interface CynosdbInstanceGrp {
  /** appId */
  AppId: number;
  /** 集群ID */
  ClusterId: string;
  /** 创建时间 */
  CreatedTime: string;
  /** 删除时间 */
  DeletedTime: string;
  /** 实例组ID */
  InstanceGrpId: string;
  /** 状态 */
  Status: string;
  /** 实例组类型。ha-ha组；ro-只读组 */
  Type: string;
  /** 更新时间 */
  UpdatedTime: string;
  /** 内网IP */
  Vip: string;
  /** 内网端口 */
  Vport: number;
  /** 外网域名 */
  WanDomain: string;
  /** 外网ip */
  WanIP: string;
  /** 外网端口 */
  WanPort: number;
  /** 外网状态 */
  WanStatus: string;
  /** 实例组包含实例信息 */
  InstanceSet: CynosdbInstance[];
}

/** 数据库权限列表 */
declare interface DatabasePrivileges {
  /** 数据库 */
  Db: string;
  /** 权限列表 */
  Privileges: string[];
}

/** 数据库表信息 */
declare interface DatabaseTables {
  /** 数据库名 */
  Database?: string | null;
  /** 表名称列表 */
  Tables?: string[] | null;
}

/** 数据库表 */
declare interface DbTable {
  /** 数据库名称 */
  Db: string;
  /** 数据库表名称 */
  TableName?: string;
}

/** 账号，包含accountName和host */
declare interface InputAccount {
  /** 账号 */
  AccountName: string;
  /** 主机，默认‘%’ */
  Host?: string;
}

/** 实例可售卖规格详细信息，创建实例时Cpu/Memory确定实例规格，存储可选大小为[MinStorageSize,MaxStorageSize] */
declare interface InstanceSpec {
  /** 实例CPU，单位：核 */
  Cpu: number;
  /** 实例内存，单位：GB */
  Memory: number;
  /** 实例最大可用存储，单位：GB */
  MaxStorageSize: number;
  /** 实例最小可用存储，单位：GB */
  MinStorageSize: number;
  /** 是否有库存 */
  HasStock: boolean;
  /** 机器类型 */
  MachineType: string;
  /** 最大IOPS */
  MaxIops: number;
  /** 最大IO带宽 */
  MaxIoBandWidth: number;
  /** 地域库存信息 */
  ZoneStockInfos: ZoneStockInfo[] | null;
}

/** 参数是否可修改的详细信息 */
declare interface ModifiableInfo {
}

/** 网络信息 */
declare interface NetAddr {
  /** 内网ip */
  Vip: string | null;
  /** 内网端口号 */
  Vport: number | null;
  /** 外网域名 */
  WanDomain: string | null;
  /** 外网端口号 */
  WanPort: number | null;
  /** 网络类型（ro-只读,rw/ha-读写） */
  NetType: string | null;
  /** 子网ID */
  UniqSubnetId: string | null;
  /** 私有网络ID */
  UniqVpcId: string | null;
  /** 描述信息 */
  Description: string | null;
}

/** 新创建的账号 */
declare interface NewAccount {
  /** 账户名 */
  AccountName: string;
  /** 密码 */
  AccountPassword: string;
  /** 主机 */
  Host: string;
  /** 描述 */
  Description?: string;
}

/** 任务信息 */
declare interface ObjectTask {
  /** 任务自增ID */
  TaskId?: number | null;
  /** 任务类型 */
  TaskType?: string | null;
  /** 任务状态 */
  TaskStatus?: string | null;
  /** 任务ID（集群ID|实例组ID|实例ID） */
  ObjectId?: string | null;
  /** 任务类型 */
  ObjectType?: string | null;
}

/** 参数信息 */
declare interface ParamInfo {
  /** 当前值 */
  CurrentValue: string;
  /** 默认值 */
  Default: string;
  /** 参数为enum/string/bool时，可选值列表 */
  EnumValue: string[] | null;
  /** 参数类型为float/integer时的最大值 */
  Max: string;
  /** 参数类型为float/integer时的最小值 */
  Min: string;
  /** 参数名称 */
  ParamName: string;
  /** 是否需要重启生效 */
  NeedReboot: number;
  /** 参数类型：integer/float/string/enum/bool */
  ParamType: string;
  /** 匹配类型，multiVal, regex在参数类型是string时使用 */
  MatchType: string;
  /** 匹配目标值，当multiVal时，各个key用;分割 */
  MatchValue: string;
  /** 参数描述 */
  Description: string;
  /** 是否为全局参数 */
  IsGlobal: number | null;
  /** 参数是否可修改 */
  ModifiableInfo: ModifiableInfo | null;
  /** 是否为函数 */
  IsFunc: boolean | null;
  /** 函数 */
  Func: string | null;
}

/** 修改参数时，传入参数描述 */
declare interface ParamItem {
  /** 参数名称 */
  ParamName: string;
  /** 当前值 */
  CurrentValue: string;
  /** 原有值 */
  OldValue: string;
}

/** 参数模板信息 */
declare interface ParamTemplateListInfo {
  /** 参数模板ID */
  Id: number;
  /** 参数模板名称 */
  TemplateName: string;
  /** 参数模板描述 */
  TemplateDescription: string;
  /** 引擎版本 */
  EngineVersion: string;
  /** 数据库类型，可选值：NORMAL，SERVERLESS */
  DbMode: string;
  /** 参数模板详情 */
  ParamInfoSet: TemplateParamInfo[] | null;
}

/** 安全组规则 */
declare interface PolicyRule {
  /** 策略，ACCEPT或者DROP */
  Action: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16 */
  CidrIp: string;
  /** 端口 */
  PortRange: string;
  /** 网络协议，支持udp、tcp等 */
  IpProtocol: string;
  /** 协议端口ID或者协议端口组ID。 */
  ServiceModule: string;
  /** IP地址ID或者ID地址组ID。 */
  AddressModule: string;
  /** id */
  Id: string;
  /** 描述 */
  Desc: string;
}

/** 查询过滤器 */
declare interface QueryFilter {
  /** 搜索字段，目前支持："InstanceId", "ProjectId", "InstanceName", "Vip" */
  Names: string[];
  /** 搜索字符串 */
  Values: string[];
  /** 是否精确匹配 */
  ExactMatch?: boolean;
  /** 搜索字段 */
  Name?: string;
  /** 操作符 */
  Operator?: string;
}

/** 回滚数据库信息 */
declare interface RollbackDatabase {
  /** 旧数据库名称 */
  OldDatabase: string;
  /** 新数据库名称 */
  NewDatabase: string;
}

/** 回档数据库及表 */
declare interface RollbackTable {
  /** 数据库名称 */
  Database: string;
  /** 数据库表 */
  Tables: RollbackTableInfo[];
}

/** 回档表信息 */
declare interface RollbackTableInfo {
  /** 旧表名称 */
  OldTable: string;
  /** 新表名称 */
  NewTable: string;
}

/** 可回档的时间范围 */
declare interface RollbackTimeRange {
  /** 开始时间 */
  TimeRangeStart: string;
  /** 结束时间 */
  TimeRangeEnd: string;
}

/** 安全组详情 */
declare interface SecurityGroup {
  /** 项目ID */
  ProjectId: number;
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss */
  CreateTime: string;
  /** 入站规则 */
  Inbound: PolicyRule[];
  /** 出站规则 */
  Outbound: PolicyRule[];
  /** 安全组ID */
  SecurityGroupId: string;
  /** 安全组名称 */
  SecurityGroupName: string;
  /** 安全组备注 */
  SecurityGroupRemark: string;
}

/** 实例慢查询信息 */
declare interface SlowQueriesItem {
  /** 执行时间戳 */
  Timestamp: number;
  /** 执行时长，单位秒 */
  QueryTime: number;
  /** sql语句 */
  SqlText: string;
  /** 客户端host */
  UserHost: string;
  /** 用户名 */
  UserName: string;
  /** 数据库名 */
  Database: string;
  /** 锁时长，单位秒 */
  LockTime: number;
  /** 扫描行数 */
  RowsExamined: number;
  /** 返回行数 */
  RowsSent: number;
  /** sql模版 */
  SqlTemplate: string;
  /** sql语句md5 */
  SqlMd5: string;
}

/** mysql表权限 */
declare interface TablePrivileges {
  /** 数据库名 */
  Db: string;
  /** 表名 */
  TableName: string;
  /** 权限列表 */
  Privileges: string[];
}

/** 集群绑定的标签信息，包含标签键TagKey和标签值TagValue */
declare interface Tag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 参数模板详情 */
declare interface TemplateParamInfo {
  /** 当前值 */
  CurrentValue: string;
  /** 默认值 */
  Default: string;
  /** 参数类型为enum时可选的值类型集合 */
  EnumValue: string[] | null;
  /** 参数类型为float/integer时的最大值 */
  Max: string | null;
  /** 参数类型为float/integer时的最小值 */
  Min: string | null;
  /** 参数名称 */
  ParamName: string;
  /** 是否需要重启 */
  NeedReboot: number;
  /** 参数描述 */
  Description: string;
  /** 参数类型，integer/float/string/enum */
  ParamType: string;
}

/** 计费询价结果 */
declare interface TradePrice {
  /** 预付费模式下资源总价，不包含优惠，单位:分 */
  TotalPrice: number | null;
  /** 总的折扣，100表示100%不打折 */
  Discount: number;
  /** 预付费模式下的优惠后总价, 单位: 分,例如用户享有折扣 =TotalPrice × Discount */
  TotalPriceDiscount: number | null;
  /** 后付费模式下的单位资源价格，不包含优惠，单位:分 */
  UnitPrice: number | null;
  /** 优惠后后付费模式下的单位资源价格, 单位: 分,例如用户享有折扣=UnitPricet × Discount */
  UnitPriceDiscount: number | null;
  /** 计费价格单位 */
  ChargeUnit: string;
}

/** 可用区库存信息 */
declare interface ZoneStockInfo {
  /** 可用区 */
  Zone: string;
  /** 是否有库存 */
  HasStock: boolean;
}

declare interface ActivateInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例 ID 列表，单个实例 ID 格式如：cynosdbmysql-ins-n7ocdslw，与TDSQL-C MySQL数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceIdList: string[];
}

declare interface ActivateInstanceResponse {
  /** 任务流id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddClusterSlaveZoneRequest {
  /** 集群ID */
  ClusterId: string;
  /** 从可用区 */
  SlaveZone: string;
}

declare interface AddClusterSlaveZoneResponse {
  /** 异步FlowId */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** Cpu核数 */
  Cpu: number;
  /** 内存，单位为GB */
  Memory: number;
  /** 新增只读实例数，取值范围为[0,4] */
  ReadOnlyCount: number;
  /** 实例组ID，在已有RO组中新增实例时使用，不传则新增RO组。当前版本不建议传输该值。 */
  InstanceGrpId?: string;
  /** 所属VPC网络ID，该参数已废弃 */
  VpcId?: string;
  /** 所属子网ID，如果设置了VpcId，则SubnetId必填。该参数已废弃。 */
  SubnetId?: string;
  /** 新增RO组时使用的Port，取值范围为[0,65535) */
  Port?: number;
  /** 实例名称，字符串长度范围为[0,64)，取值范围为大小写字母，0-9数字，'_','-','.' */
  InstanceName?: string;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 数据库类型，取值范围: MYSQL */
  DbType?: string;
  /** 订单来源，字符串长度范围为[0,64) */
  OrderSource?: string;
  /** 交易模式 0-下单并支付 1-下单 */
  DealMode?: number;
}

declare interface AddInstancesResponse {
  /** 冻结流水，一次开通一个冻结流水。 */
  TranId: string | null;
  /** 后付费订单号。 */
  DealNames: string[] | null;
  /** 发货资源id列表。 */
  ResourceIds: string[] | null;
  /** 大订单号 */
  BigDealIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 实例组ID数组 */
  InstanceIds: string[];
  /** 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。 */
  SecurityGroupIds: string[];
  /** 可用区 */
  Zone: string;
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAccountsRequest {
  /** 集群id */
  ClusterId: string;
  /** 新账户列表 */
  Accounts: NewAccount[];
}

declare interface CreateAccountsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAuditLogFileRequest {
  /** 实例ID */
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
  FileName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBackupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份类型, 可选值：logic，逻辑备份；snapshot，物理备份 */
  BackupType?: string;
  /** 备份的库, 只在 BackupType 为 logic 时有效 */
  BackupDatabases?: string[];
  /** 备份的表, 只在 BackupType 为 logic 时有效 */
  BackupTables?: DatabaseTables[];
  /** 备注名 */
  BackupName?: string;
}

declare interface CreateBackupResponse {
  /** 异步任务流ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateClustersRequest {
  /** 可用区 */
  Zone: string;
  /** 所属VPC网络ID */
  VpcId: string;
  /** 所属子网ID */
  SubnetId: string;
  /** 数据库类型，取值范围: MYSQL */
  DbType: string;
  /** 数据库版本，取值范围: MYSQL可选值：5.7，8.0 */
  DbVersion: string;
  /** 所属项目ID */
  ProjectId?: number;
  /** 当DbMode为NORMAL或不填时必选普通实例Cpu核数 */
  Cpu?: number;
  /** 当DbMode为NORMAL或不填时必选普通实例内存,单位G */
  Memory?: number;
  /** 该参数无实际意义，已废弃。存储大小，单位G。 */
  Storage?: number;
  /** 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'） */
  ClusterName?: string;
  /** 账号密码(8-64个字符，包含大小写英文字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种) */
  AdminPassword?: string;
  /** 端口，默认3306，取值范围[0, 65535) */
  Port?: number;
  /** 计费模式，按量计费：0，包年包月：1。默认按量计费。 */
  PayMode?: number;
  /** 购买集群数，可选值范围[1,50]，默认为1 */
  Count?: number;
  /** 回档类型：noneRollback：不回档；snapRollback，快照回档；timeRollback，时间点回档 */
  RollbackStrategy?: string;
  /** 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效 */
  RollbackId?: number;
  /** 回档时，传入源集群ID，用于查找源poolId */
  OriginalClusterId?: string;
  /** 时间点回档，指定时间；快照回档，快照时间 */
  ExpectTime?: string;
  /** 该参数无实际意义，已废弃。时间点回档，指定时间允许范围 */
  ExpectTimeThresh?: number;
  /** 普通实例存储上限，单位GB当DbType为MYSQL，且存储计费模式为预付费时，该参数需不大于cpu与memory对应存储规格上限 */
  StorageLimit?: number;
  /** 实例数量，数量范围为(0,16] */
  InstanceCount?: number;
  /** 包年包月购买时长 */
  TimeSpan?: number;
  /** 包年包月购买时长单位，['s','d','m','y'] */
  TimeUnit?: string;
  /** 包年包月购买是否自动续费，默认为0 */
  AutoRenewFlag?: number;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 实例数量（该参数已不再使用，只做存量兼容处理） */
  HaCount?: number;
  /** 订单来源 */
  OrderSource?: string;
  /** 集群创建需要绑定的tag数组信息 */
  ResourceTags?: Tag[];
  /** Db类型当DbType为MYSQL时可选(默认NORMAL)：NORMALSERVERLESS */
  DbMode?: string;
  /** 当DbMode为SEVERLESS时必填cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MinCpu?: number;
  /** 当DbMode为SEVERLESS时必填：cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MaxCpu?: number;
  /** 当DbMode为SEVERLESS时，指定集群是否自动暂停，可选范围yesno默认值:yes */
  AutoPause?: string;
  /** 当DbMode为SEVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]默认值:600 */
  AutoPauseDelay?: number;
  /** 集群存储计费模式，按量计费：0，包年包月：1。默认按量计费当DbType为MYSQL时，在集群计算计费模式为后付费（包括DbMode为SERVERLESS）时，存储计费模式仅可为按量计费回档与克隆均不支持包年包月存储 */
  StoragePayMode?: number;
  /** 安全组id数组 */
  SecurityGroupIds?: string[];
  /** 告警策略Id数组 */
  AlarmPolicyIds?: string[];
  /** 参数数组 */
  ClusterParams?: ParamItem[];
  /** 交易模式，0-下单且支付，1-下单 */
  DealMode?: number;
  /** 参数模版ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID */
  ParamTemplateId?: number;
  /** 多可用区地址 */
  SlaveZone?: string;
}

declare interface CreateClustersResponse {
  /** 冻结流水ID */
  TranId: string | null;
  /** 订单号 */
  DealNames: string[] | null;
  /** 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID） */
  ResourceIds: string[] | null;
  /** 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID） */
  ClusterIds: string[] | null;
  /** 大订单号 */
  BigDealIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAuditLogFileRequest {
  /** 实例ID */
  InstanceId: string;
  /** 审计日志文件名称。 */
  FileName: string;
}

declare interface DeleteAuditLogFileResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteBackupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份文件ID */
  SnapshotIdList: number[];
}

declare interface DeleteBackupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountAllGrantPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
}

declare interface DescribeAccountAllGrantPrivilegesResponse {
  /** 权限语句 */
  PrivilegeStatements: string[] | null;
  /** 全局权限 */
  GlobalPrivileges: string[] | null;
  /** 数据库权限 */
  DatabasePrivileges: DatabasePrivileges[] | null;
  /** 数据库表权限 */
  TablePrivileges: TablePrivileges[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 需要过滤的账户列表 */
  AccountNames?: string[];
  /** 数据库类型，取值范围: MYSQL */
  DbType?: string;
}

declare interface DescribeAccountsResponse {
  /** 数据库账号列表 */
  AccountSet: Account[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAuditLogFilesRequest {
  /** 实例ID */
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
  TotalCount: number;
  /** 审计日志文件详情。 */
  Items: AuditLogFile[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAuditLogsRequest {
  /** 实例ID */
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
  /** 分页参数，单次返回的数据条数。默认值为100，最大值为100。 */
  Limit?: number;
  /** 分页偏移量。 */
  Offset?: number;
}

declare interface DescribeAuditLogsResponse {
  /** 符合条件的审计日志条数。 */
  TotalCount: number;
  /** 审计日志详情。 */
  Items: AuditLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBackupConfigRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeBackupConfigResponse {
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeBeg: number;
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeEnd: number;
  /** 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800 */
  ReserveDuration: number;
  /** 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份 */
  BackupFreq: string[] | null;
  /** 备份方式，logic-逻辑备份，snapshot-快照备份 */
  BackupType: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadUrlRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份ID */
  BackupId: number;
}

declare interface DescribeBackupDownloadUrlResponse {
  /** 备份下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBackupListRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份文件列表大小，取值范围(0,100] */
  Limit?: number;
  /** 备份文件列表偏移，取值范围[0,INF) */
  Offset?: number;
  /** 数据库类型，取值范围: MYSQL */
  DbType?: string;
  /** 备份ID */
  BackupIds?: number[];
  /** 备份类型，可选值：snapshot，快照备份； logic，逻辑备份 */
  BackupType?: string;
  /** 备份方式，可选值：auto，自动备份；manual，手动备 */
  BackupMethod?: string;
  /** 快照类型，可选值：full，全量；increment，增量 */
  SnapShotType?: string;
  /** 备份开始时间 */
  StartTime?: string;
  /** 备份结束时间 */
  EndTime?: string;
  /** 备份文件名，模糊查询 */
  FileNames?: string[];
  /** 备份备注名，模糊查询 */
  BackupNames?: string[];
}

declare interface DescribeBackupListResponse {
  /** 总共备份文件个数 */
  TotalCount: number;
  /** 备份文件列表 */
  BackupList: BackupFileInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBinlogDownloadUrlRequest {
  /** 集群ID */
  ClusterId: string;
  /** Binlog文件ID */
  BinlogId: number;
}

declare interface DescribeBinlogDownloadUrlResponse {
  /** 下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBinlogSaveDaysRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeBinlogSaveDaysResponse {
  /** Binlog保留天数 */
  BinlogSaveDays: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBinlogsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 偏移量 */
  Offset?: number;
  /** 限制条数 */
  Limit?: number;
}

declare interface DescribeBinlogsResponse {
  /** 记录总条数 */
  TotalCount: number;
  /** Binlog列表 */
  Binlogs: BinlogItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailRequest {
  /** 集群Id */
  ClusterId: string;
}

declare interface DescribeClusterDetailResponse {
  /** 集群详细信息 */
  Detail: CynosdbClusterDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterInstanceGrpsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterInstanceGrpsResponse {
  /** 实例组个数 */
  TotalCount: number;
  /** 实例组列表 */
  InstanceGrpInfoList: CynosdbInstanceGrp[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterParamLogsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 返回数量，默认为 20，取值范围为(0,100] */
  Limit?: number;
  /** 记录偏移量，默认值为0，取值范围为[0,INF) */
  Offset?: number;
}

declare interface DescribeClusterParamLogsResponse {
  /** 记录总数 */
  TotalCount: number;
  /** 参数修改记录 */
  ClusterParamLogs: ClusterParamModifyLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterParamsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterParamsResponse {
  /** 参数个数 */
  TotalCount: number;
  /** 实例参数列表 */
  Items: ParamInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 引擎类型：目前支持“MYSQL”， “POSTGRESQL” */
  DbType?: string;
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 记录偏移量，默认值为0 */
  Offset?: number;
  /** 排序字段，取值范围： CREATETIME：创建时间 PERIODENDTIME：过期时间 */
  OrderBy?: string;
  /** 排序类型，取值范围： ASC：升序排序 DESC：降序排序 */
  OrderByType?: string;
  /** 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Filters?: QueryFilter[];
}

declare interface DescribeClustersResponse {
  /** 集群数 */
  TotalCount: number;
  /** 集群列表 */
  ClusterSet: CynosdbCluster[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 实例组ID */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组信息 */
  Groups: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceDetailRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceDetailResponse {
  /** 实例详情 */
  Detail: CynosdbInstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceSlowQueriesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 事务开始最早时间 */
  StartTime?: string;
  /** 事务开始最晚时间 */
  EndTime?: string;
  /** 限制条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 用户名 */
  Username?: string;
  /** 客户端host */
  Host?: string;
  /** 数据库名 */
  Database?: string;
  /** 排序字段，可选值：QueryTime,LockTime,RowsExamined,RowsSent */
  OrderBy?: string;
  /** 排序类型，可选值：asc,desc */
  OrderByType?: string;
}

declare interface DescribeInstanceSlowQueriesResponse {
  /** 总条数 */
  TotalCount: number;
  /** 慢查询记录 */
  SlowQueries: SlowQueriesItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceSpecsRequest {
  /** 数据库类型，取值范围: MYSQL */
  DbType: string;
  /** 是否需要返回可用区信息 */
  IncludeZoneStocks?: boolean;
}

declare interface DescribeInstanceSpecsResponse {
  /** 规格信息 */
  InstanceSpecSet: InstanceSpec[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 记录偏移量，默认值为0 */
  Offset?: number;
  /** 排序字段，取值范围： CREATETIME：创建时间 PERIODENDTIME：过期时间 */
  OrderBy?: string;
  /** 排序类型，取值范围： ASC：升序排序 DESC：降序排序 */
  OrderByType?: string;
  /** 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Filters?: QueryFilter[];
  /** 引擎类型：目前支持“MYSQL”， “POSTGRESQL” */
  DbType?: string;
  /** 实例状态, 可选值:creating 创建中running 运行中isolating 隔离中isolated 已隔离activating 恢复中offlining 下线中offlined 已下线 */
  Status?: string;
  /** 实例id列表 */
  InstanceIds?: string[];
}

declare interface DescribeInstancesResponse {
  /** 实例个数 */
  TotalCount: number;
  /** 实例列表 */
  InstanceSet: CynosdbInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMaintainPeriodRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeMaintainPeriodResponse {
  /** 维护week days */
  MaintainWeekDays: string[];
  /** 维护开始时间，单位秒 */
  MaintainStartTime: number;
  /** 维护时长，单位秒 */
  MaintainDuration: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeParamTemplatesRequest {
  /** 数据库引擎版本号 */
  EngineVersions?: string[];
  /** 模版名称 */
  TemplateNames?: string[];
  /** 模版ID */
  TemplateIds?: number[];
  /** 数据库类型，可选值：NORMAL，SERVERLESS */
  DbModes?: string[];
  /** 查询偏移量 */
  Offset?: number;
  /** 查询限制条数 */
  Limit?: number;
  /** 查询的模板对应的产品类型 */
  Products?: string[];
  /** 模版类型 */
  TemplateTypes?: string[];
  /** 版本类型 */
  EngineTypes?: string[];
  /** 返回结果的排序字段 */
  OrderBy?: string;
  /** 排序方式（asc、desc） */
  OrderDirection?: string;
}

declare interface DescribeParamTemplatesResponse {
  /** 参数模板数量 */
  TotalCount: number;
  /** 参数模板信息 */
  Items: ParamTemplateListInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 项目ID */
  ProjectId: number;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组详情 */
  Groups: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourcesByDealNameRequest {
  /** 计费订单ID（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功） */
  DealName?: string;
  /** 计费订单ID列表，可以一次查询若干条订单ID对应资源信息（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功） */
  DealNames?: string[];
}

declare interface DescribeResourcesByDealNameResponse {
  /** 计费资源id信息数组 */
  BillingResourceInfos: BillingResourceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRollbackTimeRangeRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeRollbackTimeRangeResponse {
  /** 有效回归时间范围开始时间点（已废弃） */
  TimeRangeStart: string;
  /** 有效回归时间范围结束时间点（已废弃） */
  TimeRangeEnd: string;
  /** 可回档时间范围 */
  RollbackTimeRanges: RollbackTimeRange[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRollbackTimeValidityRequest {
  /** 集群ID */
  ClusterId: string;
  /** 期望回滚的时间点 */
  ExpectTime: string;
  /** 回滚时间点的允许误差范围 */
  ExpectTimeThresh: number;
}

declare interface DescribeRollbackTimeValidityResponse {
  /** 存储poolID */
  PoolId?: number;
  /** 回滚任务ID，后续按该时间点回滚时，需要传入 */
  QueryId?: number;
  /** 时间点是否有效：pass，检测通过；fail，检测失败 */
  Status?: string;
  /** 建议时间点，在Status为fail时，该值才有效 */
  SuggestTime?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 实例组ID数组 */
  InstanceIds: string[];
  /** 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。 */
  SecurityGroupIds: string[];
  /** 可用区 */
  Zone: string;
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportInstanceSlowQueriesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 事务开始最早时间 */
  StartTime?: string;
  /** 事务开始最晚时间 */
  EndTime?: string;
  /** 限制条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 用户名 */
  Username?: string;
  /** 客户端host */
  Host?: string;
  /** 数据库名 */
  Database?: string;
  /** 文件类型，可选值：csv, original */
  FileType?: string;
}

declare interface ExportInstanceSlowQueriesResponse {
  /** 慢查询导出内容 */
  FileContent: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GrantAccountPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 数据库表权限码数组 */
  DbTablePrivileges: string[];
  /** 数据库表信息 */
  DbTables: DbTable[];
}

declare interface GrantAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquirePriceCreateRequest {
  /** 可用区,每个地域提供最佳实践 */
  Zone: string;
  /** 购买计算节点个数 */
  GoodsNum: number;
  /** 实例购买类型，可选值为：PREPAID, POSTPAID, SERVERLESS */
  InstancePayMode: string;
  /** 存储购买类型，可选值为：PREPAID, POSTPAID */
  StoragePayMode: string;
  /** CPU核数，PREPAID与POSTPAID实例类型必传 */
  Cpu?: number;
  /** 内存大小，单位G，PREPAID与POSTPAID实例类型必传 */
  Memory?: number;
  /** Ccu大小，serverless类型必传 */
  Ccu?: number;
  /** 存储大小，PREPAID存储类型必传 */
  StorageLimit?: number;
  /** 购买时长，PREPAID购买类型必传 */
  TimeSpan?: number;
  /** 时长单位，可选值为：m,d。PREPAID购买类型必传 */
  TimeUnit?: string;
}

declare interface InquirePriceCreateResponse {
  /** 实例价格 */
  InstancePrice: TradePrice;
  /** 存储价格 */
  StoragePrice: TradePrice;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquirePriceRenewRequest {
  /** 集群ID */
  ClusterId: string;
  /** 购买时长,与TimeUnit组合才能生效 */
  TimeSpan: number;
  /** 购买时长单位, 与TimeSpan组合生效，可选:日:d,月:m */
  TimeUnit: string;
}

declare interface InquirePriceRenewResponse {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表 */
  InstanceIds: string[];
  /** 对应的询价结果数组 */
  Prices: TradePrice[];
  /** 续费计算节点的总价格 */
  InstanceRealTotalPrice: number;
  /** 续费存储节点的总价格 */
  StorageRealTotalPrice: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IsolateClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 该参数已废用 */
  DbType?: string;
}

declare interface IsolateClusterResponse {
  /** 任务流ID */
  FlowId: number | null;
  /** 退款订单号 */
  DealNames: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IsolateInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID数组 */
  InstanceIdList: string[];
  /** 该参数已废弃 */
  DbType?: string;
}

declare interface IsolateInstanceResponse {
  /** 任务流id */
  FlowId: number;
  /** 隔离实例的订单id（预付费实例） */
  DealNames: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAccountParamsRequest {
  /** 集群id，不超过32个字符 */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 数据库表权限数组,当前仅支持参数：max_user_connections，max_user_connections不能大于10240 */
  AccountParams: AccountParam[];
}

declare interface ModifyAccountParamsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBackupConfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeBeg: number;
  /** 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeEnd: number;
  /** 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800，最大为158112000 */
  ReserveDuration: number;
  /** 该参数目前不支持修改，无需填写。备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份 */
  BackupFreq?: string[];
  /** 该参数目前不支持修改，无需填写。备份方式，logic-逻辑备份，snapshot-快照备份 */
  BackupType?: string;
}

declare interface ModifyBackupConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBackupNameRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份文件ID */
  BackupId: number;
  /** 备注名，长度不能超过60个字符 */
  BackupName: string;
}

declare interface ModifyBackupNameResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyClusterNameRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群名 */
  ClusterName: string;
}

declare interface ModifyClusterNameResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyClusterParamRequest {
  /** 集群ID */
  ClusterId: string;
  /** 要修改的参数列表。每一个元素是ParamName、CurrentValue和OldValue的组合。ParamName是参数名称，CurrentValue是当前值，OldValue是之前值且不做校验 */
  ParamList: ParamItem[];
  /** 维护期间执行-yes,立即执行-no */
  IsInMaintainPeriod?: string;
}

declare interface ModifyClusterParamResponse {
  /** 异步请求Id，用于查询结果 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyClusterSlaveZoneRequest {
  /** 集群Id */
  ClusterId: string;
  /** 旧从可用区 */
  OldSlaveZone: string;
  /** 新从可用区 */
  NewSlaveZone: string;
}

declare interface ModifyClusterSlaveZoneResponse {
  /** 异步FlowId */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyClusterStorageRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群新存储大小（单位G） */
  NewStorageLimit: number;
  /** 集群原存储大小（单位G） */
  OldStorageLimit: number;
  /** 交易模式 0-下单并支付 1-下单 */
  DealMode?: number;
}

declare interface ModifyClusterStorageResponse {
  /** 冻结流水ID */
  TranId: string | null;
  /** 大订单号 */
  BigDealIds: string[] | null;
  /** 订单号 */
  DealNames: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 实例组ID */
  InstanceId: string;
  /** 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。 */
  SecurityGroupIds: string[];
  /** 可用区 */
  Zone: string;
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceNameRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
}

declare interface ModifyInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMaintainPeriodConfigRequest {
  /** 实例ID */
  InstanceId: string;
  /** 维护开始时间，单位为秒，如3:00为10800 */
  MaintainStartTime: number;
  /** 维护持续时间，单位为秒，如1小时为3600 */
  MaintainDuration: number;
  /** 每周维护日期，日期取值范围[Mon, Tue, Wed, Thu, Fri, Sat, Sun] */
  MaintainWeekDays: string[];
}

declare interface ModifyMaintainPeriodConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OfflineClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface OfflineClusterResponse {
  /** 任务流ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OfflineInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID数组 */
  InstanceIdList: string[];
}

declare interface OfflineInstanceResponse {
  /** 任务流ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PauseServerlessRequest {
  /** 集群ID */
  ClusterId: string;
  /** 是否强制暂停，忽略当前的用户链接 0:不强制 1:强制， 默认为1 */
  ForcePause?: number;
}

declare interface PauseServerlessResponse {
  /** 异步流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveClusterSlaveZoneRequest {
  /** 集群ID */
  ClusterId: string;
  /** 从可用区 */
  SlaveZone: string;
}

declare interface RemoveClusterSlaveZoneResponse {
  /** 异步FlowId */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 数据库账号名 */
  AccountName: string;
  /** 数据库账号新密码 */
  AccountPassword: string;
  /** 集群ID */
  ClusterId: string;
  /** 主机，不填默认为"%" */
  Host?: string;
}

declare interface ResetAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResumeServerlessRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface ResumeServerlessResponse {
  /** 异步流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RevokeAccountPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 数据库表权限数组 */
  DbTablePrivileges: string[];
  /** 数据库表信息 */
  DbTables: DbTable[];
}

declare interface RevokeAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RollBackClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 回档策略 timeRollback-按时间点回档 snapRollback-按备份文件回档 */
  RollbackStrategy: string;
  /** 回档ID */
  RollbackId: number;
  /** 期望回档时间 */
  ExpectTime?: string;
  /** 期望阈值（已废弃） */
  ExpectTimeThresh?: number;
  /** 回档数据库列表 */
  RollbackDatabases?: RollbackDatabase[];
  /** 回档数据库表列表 */
  RollbackTables?: RollbackTable[];
}

declare interface RollBackClusterResponse {
  /** 任务流ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchClusterDatabasesRequest {
  /** 集群id */
  ClusterId: string;
  /** 数据库名 */
  Database?: string;
  /** 是否精确搜索。0: 模糊搜索 1:精确搜索 默认为0 */
  MatchType?: number;
}

declare interface SearchClusterDatabasesResponse {
  /** 数据库列表 */
  Databases: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchClusterTablesRequest {
  /** 集群id */
  ClusterId: string;
  /** 数据库名 */
  Database?: string;
  /** 数据表名 */
  Table?: string;
  /** 数据表类型：view：只返回 view，base_table： 只返回基本表，all：返回 view 和表 */
  TableType?: string;
}

declare interface SearchClusterTablesResponse {
  /** 数据表列表 */
  Tables: DatabaseTables[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetRenewFlagRequest {
  /** 需操作的实例ID */
  ResourceIds: string[];
  /** 自动续费标志位，续费标记 0:正常续费 1:自动续费 2:到期不续 */
  AutoRenewFlag: number;
}

declare interface SetRenewFlagResponse {
  /** 操作成功实例数 */
  Count: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwitchClusterZoneRequest {
  /** 集群Id */
  ClusterId: string;
  /** 当前可用区 */
  OldZone: string;
  /** 要切换到的可用区 */
  NewZone: string;
  /** 维护期间执行-yes,立即执行-no */
  IsInMaintainPeriod?: string;
}

declare interface SwitchClusterZoneResponse {
  /** 异步FlowId */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwitchProxyVpcRequest {
  /** 集群ID */
  ClusterId: string;
  /** 字符串vpc id */
  UniqVpcId: string;
  /** 字符串子网id */
  UniqSubnetId: string;
  /** 旧地址回收时间 */
  OldIpReserveHours: number;
  /** 数据库代理组Id（该参数为必填项，可以通过DescribeProxies接口获得） */
  ProxyGroupId?: string;
}

declare interface SwitchProxyVpcResponse {
  /** 异步任务id。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 数据库CPU */
  Cpu: number;
  /** 数据库内存，单位GB */
  Memory: number;
  /** 升级类型：upgradeImmediate，upgradeInMaintain */
  UpgradeType: string;
  /** 该参数已废弃 */
  StorageLimit?: number;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 该参数已废弃 */
  DbType?: string;
  /** 交易模式 0-下单并支付 1-下单 */
  DealMode?: number;
  /** NormalUpgrade：普通变配，FastUpgrade：极速变配，若变配过程判断会造成闪断，变配流程会终止。 */
  UpgradeMode?: string;
}

declare interface UpgradeInstanceResponse {
  /** 冻结流水ID */
  TranId: string | null;
  /** 大订单号 */
  BigDealIds: string[] | null;
  /** 订单号 */
  DealNames: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Cynosdb TDSQL-C MySQL 版} */
declare interface Cynosdb {
  (): Versions;
  /** {@link ActivateInstance 恢复实例访问}({@link ActivateInstanceRequest 请求参数}): {@link ActivateInstanceResponse 返回参数} */
  ActivateInstance(data: ActivateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateInstanceResponse>;
  /** {@link AddClusterSlaveZone 增加从可用区}({@link AddClusterSlaveZoneRequest 请求参数}): {@link AddClusterSlaveZoneResponse 返回参数} */
  AddClusterSlaveZone(data: AddClusterSlaveZoneRequest, config?: AxiosRequestConfig): AxiosPromise<AddClusterSlaveZoneResponse>;
  /** {@link AddInstances 集群添加实例}({@link AddInstancesRequest 请求参数}): {@link AddInstancesResponse 返回参数} */
  AddInstances(data: AddInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AddInstancesResponse>;
  /** {@link AssociateSecurityGroups 安全组批量绑定云资源}({@link AssociateSecurityGroupsRequest 请求参数}): {@link AssociateSecurityGroupsResponse 返回参数} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** {@link CreateAccounts 创建账号}({@link CreateAccountsRequest 请求参数}): {@link CreateAccountsResponse 返回参数} */
  CreateAccounts(data: CreateAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountsResponse>;
  /** {@link CreateAuditLogFile 创建审计日志文件}({@link CreateAuditLogFileRequest 请求参数}): {@link CreateAuditLogFileResponse 返回参数} */
  CreateAuditLogFile(data: CreateAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditLogFileResponse>;
  /** {@link CreateBackup 创建手动备份}({@link CreateBackupRequest 请求参数}): {@link CreateBackupResponse 返回参数} */
  CreateBackup(data: CreateBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupResponse>;
  /** {@link CreateClusters 创建集群}({@link CreateClustersRequest 请求参数}): {@link CreateClustersResponse 返回参数} */
  CreateClusters(data: CreateClustersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClustersResponse>;
  /** {@link DeleteAuditLogFile 删除审计日志文件}({@link DeleteAuditLogFileRequest 请求参数}): {@link DeleteAuditLogFileResponse 返回参数} */
  DeleteAuditLogFile(data: DeleteAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditLogFileResponse>;
  /** {@link DeleteBackup 删除手动备份}({@link DeleteBackupRequest 请求参数}): {@link DeleteBackupResponse 返回参数} */
  DeleteBackup(data: DeleteBackupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupResponse>;
  /** {@link DescribeAccountAllGrantPrivileges 账号所有权限}({@link DescribeAccountAllGrantPrivilegesRequest 请求参数}): {@link DescribeAccountAllGrantPrivilegesResponse 返回参数} */
  DescribeAccountAllGrantPrivileges(data: DescribeAccountAllGrantPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountAllGrantPrivilegesResponse>;
  /** {@link DescribeAccounts 查询数据库管理账号}({@link DescribeAccountsRequest 请求参数}): {@link DescribeAccountsResponse 返回参数} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** {@link DescribeAuditLogFiles 查询审计日志文件}({@link DescribeAuditLogFilesRequest 请求参数}): {@link DescribeAuditLogFilesResponse 返回参数} */
  DescribeAuditLogFiles(data: DescribeAuditLogFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogFilesResponse>;
  /** {@link DescribeAuditLogs 查询数据库审计日志}({@link DescribeAuditLogsRequest 请求参数}): {@link DescribeAuditLogsResponse 返回参数} */
  DescribeAuditLogs(data: DescribeAuditLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogsResponse>;
  /** {@link DescribeBackupConfig 查询备份配置信息}({@link DescribeBackupConfigRequest 请求参数}): {@link DescribeBackupConfigResponse 返回参数} */
  DescribeBackupConfig(data: DescribeBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupConfigResponse>;
  /** {@link DescribeBackupDownloadUrl 查询备份下载地址}({@link DescribeBackupDownloadUrlRequest 请求参数}): {@link DescribeBackupDownloadUrlResponse 返回参数} */
  DescribeBackupDownloadUrl(data: DescribeBackupDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadUrlResponse>;
  /** {@link DescribeBackupList 查询备份文件列表}({@link DescribeBackupListRequest 请求参数}): {@link DescribeBackupListResponse 返回参数} */
  DescribeBackupList(data: DescribeBackupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupListResponse>;
  /** {@link DescribeBinlogDownloadUrl 查询Binlog下载地址}({@link DescribeBinlogDownloadUrlRequest 请求参数}): {@link DescribeBinlogDownloadUrlResponse 返回参数} */
  DescribeBinlogDownloadUrl(data: DescribeBinlogDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogDownloadUrlResponse>;
  /** {@link DescribeBinlogSaveDays 查询Binlog保留天数}({@link DescribeBinlogSaveDaysRequest 请求参数}): {@link DescribeBinlogSaveDaysResponse 返回参数} */
  DescribeBinlogSaveDays(data: DescribeBinlogSaveDaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogSaveDaysResponse>;
  /** {@link DescribeBinlogs 查询Binlog列表}({@link DescribeBinlogsRequest 请求参数}): {@link DescribeBinlogsResponse 返回参数} */
  DescribeBinlogs(data: DescribeBinlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogsResponse>;
  /** {@link DescribeClusterDetail 集群详情}({@link DescribeClusterDetailRequest 请求参数}): {@link DescribeClusterDetailResponse 返回参数} */
  DescribeClusterDetail(data: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** {@link DescribeClusterInstanceGrps 查询实例组}({@link DescribeClusterInstanceGrpsRequest 请求参数}): {@link DescribeClusterInstanceGrpsResponse 返回参数} */
  DescribeClusterInstanceGrps(data: DescribeClusterInstanceGrpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstanceGrpsResponse>;
  /** {@link DescribeClusterParamLogs 查询参数修改日志}({@link DescribeClusterParamLogsRequest 请求参数}): {@link DescribeClusterParamLogsResponse 返回参数} */
  DescribeClusterParamLogs(data: DescribeClusterParamLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterParamLogsResponse>;
  /** {@link DescribeClusterParams 查询集群参数}({@link DescribeClusterParamsRequest 请求参数}): {@link DescribeClusterParamsResponse 返回参数} */
  DescribeClusterParams(data: DescribeClusterParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterParamsResponse>;
  /** {@link DescribeClusters 查询集群列表}({@link DescribeClustersRequest 请求参数}): {@link DescribeClustersResponse 返回参数} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** {@link DescribeDBSecurityGroups 查询实例安全组信息}({@link DescribeDBSecurityGroupsRequest 请求参数}): {@link DescribeDBSecurityGroupsResponse 返回参数} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** {@link DescribeInstanceDetail 查询实例详情}({@link DescribeInstanceDetailRequest 请求参数}): {@link DescribeInstanceDetailResponse 返回参数} */
  DescribeInstanceDetail(data: DescribeInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDetailResponse>;
  /** {@link DescribeInstanceSlowQueries 查询实例慢查询日志}({@link DescribeInstanceSlowQueriesRequest 请求参数}): {@link DescribeInstanceSlowQueriesResponse 返回参数} */
  DescribeInstanceSlowQueries(data: DescribeInstanceSlowQueriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceSlowQueriesResponse>;
  /** {@link DescribeInstanceSpecs 查询实例规格}({@link DescribeInstanceSpecsRequest 请求参数}): {@link DescribeInstanceSpecsResponse 返回参数} */
  DescribeInstanceSpecs(data: DescribeInstanceSpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceSpecsResponse>;
  /** {@link DescribeInstances 查询实例列表}({@link DescribeInstancesRequest 请求参数}): {@link DescribeInstancesResponse 返回参数} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** {@link DescribeMaintainPeriod 查询实例维护时间窗}({@link DescribeMaintainPeriodRequest 请求参数}): {@link DescribeMaintainPeriodResponse 返回参数} */
  DescribeMaintainPeriod(data: DescribeMaintainPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaintainPeriodResponse>;
  /** {@link DescribeParamTemplates 查询参数模板信息}({@link DescribeParamTemplatesRequest 请求参数}): {@link DescribeParamTemplatesResponse 返回参数} */
  DescribeParamTemplates(data?: DescribeParamTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamTemplatesResponse>;
  /** {@link DescribeProjectSecurityGroups 查询项目安全组信息}({@link DescribeProjectSecurityGroupsRequest 请求参数}): {@link DescribeProjectSecurityGroupsResponse 返回参数} */
  DescribeProjectSecurityGroups(data: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** {@link DescribeResourcesByDealName 根据订单id查询资源信息}({@link DescribeResourcesByDealNameRequest 请求参数}): {@link DescribeResourcesByDealNameResponse 返回参数} */
  DescribeResourcesByDealName(data?: DescribeResourcesByDealNameRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesByDealNameResponse>;
  /** {@link DescribeRollbackTimeRange 查询有效回滚时间范围}({@link DescribeRollbackTimeRangeRequest 请求参数}): {@link DescribeRollbackTimeRangeResponse 返回参数} */
  DescribeRollbackTimeRange(data: DescribeRollbackTimeRangeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRollbackTimeRangeResponse>;
  /** {@link DescribeRollbackTimeValidity 查询指定时间是否可回滚}({@link DescribeRollbackTimeValidityRequest 请求参数}): {@link DescribeRollbackTimeValidityResponse 返回参数} */
  DescribeRollbackTimeValidity(data: DescribeRollbackTimeValidityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRollbackTimeValidityResponse>;
  /** {@link DisassociateSecurityGroups 安全组批量解绑云资源}({@link DisassociateSecurityGroupsRequest 请求参数}): {@link DisassociateSecurityGroupsResponse 返回参数} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** {@link ExportInstanceSlowQueries 导出实例慢日志}({@link ExportInstanceSlowQueriesRequest 请求参数}): {@link ExportInstanceSlowQueriesResponse 返回参数} */
  ExportInstanceSlowQueries(data: ExportInstanceSlowQueriesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportInstanceSlowQueriesResponse>;
  /** {@link GrantAccountPrivileges 批量授权账号权限}({@link GrantAccountPrivilegesRequest 请求参数}): {@link GrantAccountPrivilegesResponse 返回参数} */
  GrantAccountPrivileges(data: GrantAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<GrantAccountPrivilegesResponse>;
  /** {@link InquirePriceCreate 新购集群询价}({@link InquirePriceCreateRequest 请求参数}): {@link InquirePriceCreateResponse 返回参数} */
  InquirePriceCreate(data: InquirePriceCreateRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateResponse>;
  /** {@link InquirePriceRenew 续费集群询价}({@link InquirePriceRenewRequest 请求参数}): {@link InquirePriceRenewResponse 返回参数} */
  InquirePriceRenew(data: InquirePriceRenewRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRenewResponse>;
  /** {@link IsolateCluster 隔离集群}({@link IsolateClusterRequest 请求参数}): {@link IsolateClusterResponse 返回参数} */
  IsolateCluster(data: IsolateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateClusterResponse>;
  /** {@link IsolateInstance 隔离实例}({@link IsolateInstanceRequest 请求参数}): {@link IsolateInstanceResponse 返回参数} */
  IsolateInstance(data: IsolateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateInstanceResponse>;
  /** {@link ModifyAccountParams 修改账号参数}({@link ModifyAccountParamsRequest 请求参数}): {@link ModifyAccountParamsResponse 返回参数} */
  ModifyAccountParams(data: ModifyAccountParamsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountParamsResponse>;
  /** {@link ModifyBackupConfig 修改备份配置}({@link ModifyBackupConfigRequest 请求参数}): {@link ModifyBackupConfigResponse 返回参数} */
  ModifyBackupConfig(data: ModifyBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupConfigResponse>;
  /** {@link ModifyBackupName 修改备份文件备注名}({@link ModifyBackupNameRequest 请求参数}): {@link ModifyBackupNameResponse 返回参数} */
  ModifyBackupName(data: ModifyBackupNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupNameResponse>;
  /** {@link ModifyClusterName 修改集群名称}({@link ModifyClusterNameRequest 请求参数}): {@link ModifyClusterNameResponse 返回参数} */
  ModifyClusterName(data: ModifyClusterNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterNameResponse>;
  /** {@link ModifyClusterParam 修改集群参数}({@link ModifyClusterParamRequest 请求参数}): {@link ModifyClusterParamResponse 返回参数} */
  ModifyClusterParam(data: ModifyClusterParamRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterParamResponse>;
  /** {@link ModifyClusterSlaveZone 修改从可用区}({@link ModifyClusterSlaveZoneRequest 请求参数}): {@link ModifyClusterSlaveZoneResponse 返回参数} */
  ModifyClusterSlaveZone(data: ModifyClusterSlaveZoneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterSlaveZoneResponse>;
  /** {@link ModifyClusterStorage 升级预付费存储}({@link ModifyClusterStorageRequest 请求参数}): {@link ModifyClusterStorageResponse 返回参数} */
  ModifyClusterStorage(data: ModifyClusterStorageRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterStorageResponse>;
  /** {@link ModifyDBInstanceSecurityGroups 修改云数据库安全组}({@link ModifyDBInstanceSecurityGroupsRequest 请求参数}): {@link ModifyDBInstanceSecurityGroupsResponse 返回参数} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** {@link ModifyInstanceName 修改实例名称}({@link ModifyInstanceNameRequest 请求参数}): {@link ModifyInstanceNameResponse 返回参数} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
  /** {@link ModifyMaintainPeriodConfig 修改维护时间配置}({@link ModifyMaintainPeriodConfigRequest 请求参数}): {@link ModifyMaintainPeriodConfigResponse 返回参数} */
  ModifyMaintainPeriodConfig(data: ModifyMaintainPeriodConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMaintainPeriodConfigResponse>;
  /** {@link OfflineCluster 下线集群}({@link OfflineClusterRequest 请求参数}): {@link OfflineClusterResponse 返回参数} */
  OfflineCluster(data: OfflineClusterRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineClusterResponse>;
  /** {@link OfflineInstance 下线实例}({@link OfflineInstanceRequest 请求参数}): {@link OfflineInstanceResponse 返回参数} */
  OfflineInstance(data: OfflineInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineInstanceResponse>;
  /** {@link PauseServerless 暂停serverless集群}({@link PauseServerlessRequest 请求参数}): {@link PauseServerlessResponse 返回参数} */
  PauseServerless(data: PauseServerlessRequest, config?: AxiosRequestConfig): AxiosPromise<PauseServerlessResponse>;
  /** {@link RemoveClusterSlaveZone 删除从可用区}({@link RemoveClusterSlaveZoneRequest 请求参数}): {@link RemoveClusterSlaveZoneResponse 返回参数} */
  RemoveClusterSlaveZone(data: RemoveClusterSlaveZoneRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveClusterSlaveZoneResponse>;
  /** {@link ResetAccountPassword 重置数据库账号密码}({@link ResetAccountPasswordRequest 请求参数}): {@link ResetAccountPasswordResponse 返回参数} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** {@link ResumeServerless 恢复serverless集群}({@link ResumeServerlessRequest 请求参数}): {@link ResumeServerlessResponse 返回参数} */
  ResumeServerless(data: ResumeServerlessRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeServerlessResponse>;
  /** {@link RevokeAccountPrivileges 批量回收账号权限}({@link RevokeAccountPrivilegesRequest 请求参数}): {@link RevokeAccountPrivilegesResponse 返回参数} */
  RevokeAccountPrivileges(data: RevokeAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeAccountPrivilegesResponse>;
  /** {@link RollBackCluster 回档集群}({@link RollBackClusterRequest 请求参数}): {@link RollBackClusterResponse 返回参数} */
  RollBackCluster(data: RollBackClusterRequest, config?: AxiosRequestConfig): AxiosPromise<RollBackClusterResponse>;
  /** {@link SearchClusterDatabases 搜索集群database列表}({@link SearchClusterDatabasesRequest 请求参数}): {@link SearchClusterDatabasesResponse 返回参数} */
  SearchClusterDatabases(data: SearchClusterDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClusterDatabasesResponse>;
  /** {@link SearchClusterTables 搜索集群数据表列表}({@link SearchClusterTablesRequest 请求参数}): {@link SearchClusterTablesResponse 返回参数} */
  SearchClusterTables(data: SearchClusterTablesRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClusterTablesResponse>;
  /** {@link SetRenewFlag 设置自动续费}({@link SetRenewFlagRequest 请求参数}): {@link SetRenewFlagResponse 返回参数} */
  SetRenewFlag(data: SetRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<SetRenewFlagResponse>;
  /** {@link SwitchClusterZone 切换到从可用区}({@link SwitchClusterZoneRequest 请求参数}): {@link SwitchClusterZoneResponse 返回参数} */
  SwitchClusterZone(data: SwitchClusterZoneRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchClusterZoneResponse>;
  /** {@link SwitchProxyVpc 更换数据库代理vpc}({@link SwitchProxyVpcRequest 请求参数}): {@link SwitchProxyVpcResponse 返回参数} */
  SwitchProxyVpc(data: SwitchProxyVpcRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchProxyVpcResponse>;
  /** {@link UpgradeInstance 升级实例}({@link UpgradeInstanceRequest 请求参数}): {@link UpgradeInstanceResponse 返回参数} */
  UpgradeInstance(data: UpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceResponse>;
}

export declare type Versions = ["2019-01-07"];

export default Cynosdb;
