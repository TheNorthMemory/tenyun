/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据库账号信息 */
declare interface Account {
  /** 账户的名称 */
  User: string;
  /** 账户的域名 */
  Host: string;
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

/** 约束类型值的范围 */
declare interface ConstraintRange {
  /** 约束类型为section时的最小值 */
  Min: string;
  /** 约束类型为section时的最大值 */
  Max: string;
}

/** 云数据库账号信息 */
declare interface DBAccount {
  /** 用户名 */
  UserName?: string;
  /** 用户可以从哪台主机登录（对应 MySQL 用户的 host 字段，UserName + Host 唯一标识一个用户，IP形式，IP段以%结尾；支持填入%；为空默认等于%） */
  Host?: string;
  /** 用户备注信息 */
  Description?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后更新时间 */
  UpdateTime?: string;
  /** 只读标记，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。 */
  ReadOnly?: number;
  /** 该字段对只读账号有意义，表示选择主备延迟小于该值的备机 */
  DelayThresh?: number | null;
  /** 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。 */
  SlaveConst?: number;
  /** 用户最大连接数，0代表无限制 */
  MaxUserConnections?: number;
}

/** 云数据库实例备份时间配置信息 */
declare interface DBBackupTimeConfig {
  /** 实例 ID */
  InstanceId: string;
  /** 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00 */
  StartBackupTime: string;
  /** 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:00 */
  EndBackupTime: string;
}

/** 描述云数据库实例的详细信息。 */
declare interface DBInstance {
  /** 实例 ID，唯一标识一个 TDSQL 实例 */
  InstanceId: string;
  /** 实例名称，用户可修改 */
  InstanceName: string;
  /** 实例所属应用 ID */
  AppId: number;
  /** 实例所属项目 ID */
  ProjectId: number;
  /** 实例所在地域名称，如 ap-shanghai */
  Region: string;
  /** 实例所在可用区名称，如 ap-shanghai-1 */
  Zone: string;
  /** 私有网络 ID，基础网络时为 0 */
  VpcId: number;
  /** 子网 ID，基础网络时为 0 */
  SubnetId: number;
  /** 实例状态：0 创建中，1 流程处理中， 2 运行中，3 实例未初始化，-1 实例已隔离，4 实例初始化中，5 实例删除中，6 实例重启中，7 数据迁移中 */
  Status: number;
  /** 内网 IP 地址 */
  Vip: string;
  /** 内网端口 */
  Vport: number;
  /** 外网访问的域名，公网可解析 */
  WanDomain: string;
  /** 外网 IP 地址，公网可访问 */
  WanVip: string;
  /** 外网端口 */
  WanPort: number;
  /** 实例创建时间，格式为 2006-01-02 15:04:05 */
  CreateTime: string;
  /** 实例最后更新时间，格式为 2006-01-02 15:04:05 */
  UpdateTime: string;
  /** 自动续费标志：0 否，1 是 */
  AutoRenewFlag: number;
  /** 实例到期时间，格式为 2006-01-02 15:04:05 */
  PeriodEndTime: string;
  /** 实例所属账号 */
  Uin: string;
  /** TDSQL 版本信息 */
  TdsqlVersion: string;
  /** 实例内存大小，单位 GB */
  Memory: number;
  /** 实例存储大小，单位 GB */
  Storage: number;
  /** 字符串型的私有网络ID */
  UniqueVpcId: string;
  /** 字符串型的私有网络子网ID */
  UniqueSubnetId: string;
  /** 原始实例ID（过时字段，请勿依赖该值） */
  OriginSerialId: string;
  /** 节点数，2为一主一从，3为一主二从 */
  NodeCount: number;
  /** 是否临时实例，0为否，非0为是 */
  IsTmp: number;
  /** 独享集群ID，为空表示为普通实例 */
  ExclusterId: string;
  /** 数字实例ID（过时字段，请勿依赖该值） */
  Id: number;
  /** 产品类型 ID */
  Pid: number;
  /** 最大 Qps 值 */
  Qps: number;
  /** 付费模式 */
  Paymode: string | null;
  /** 实例处于异步任务时的异步任务流程ID */
  Locker: number | null;
  /** 实例目前运行状态描述 */
  StatusDesc: string | null;
  /** 外网状态，0-未开通；1-已开通；2-关闭；3-开通中 */
  WanStatus: number;
  /** 该实例是否支持审计。1-支持；0-不支持 */
  IsAuditSupported: number;
  /** 机器型号 */
  Machine: string;
  /** 是否支持数据加密。1-支持；0-不支持 */
  IsEncryptSupported: number;
  /** 实例CPU核数 */
  Cpu: number;
  /** 实例IPv6标志 */
  Ipv6Flag: number | null;
  /** 内网IPv6 */
  Vipv6: string | null;
  /** 外网IPv6 */
  WanVipv6: string | null;
  /** 外网IPv6端口 */
  WanPortIpv6: number | null;
  /** 外网IPv6状态 */
  WanStatusIpv6: number | null;
  /** 数据库引擎 */
  DbEngine: string | null;
  /** 数据库版本 */
  DbVersion: string | null;
  /** DCN标志，0-无，1-主实例，2-灾备实例 */
  DcnFlag: number | null;
  /** DCN状态，0-无，1-创建中，2-同步中，3-已断开 */
  DcnStatus: number | null;
  /** DCN灾备实例数 */
  DcnDstNum: number | null;
  /** 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型） */
  InstanceType: number | null;
  /** 实例标签信息 */
  ResourceTags: ResourceTag[] | null;
  /** 数据库版本 */
  DbVersionId: string | null;
}

/** 云数据库参数信息。 */
declare interface DBParamValue {
  /** 参数名称 */
  Param: string;
  /** 参数值 */
  Value: string;
}

/** dcn 配置情况 */
declare interface DCNReplicaConfig {
  /** DCN 运行状态，START为正常运行，STOP为暂停 */
  RoReplicationMode: string | null;
  /** 延迟复制的类型，DEFAULT为正常，DUE_TIME为指定时间 */
  DelayReplicationType: string | null;
  /** 延迟复制的指定时间 */
  DueTime: string | null;
  /** 延迟复制时的延迟秒数 */
  ReplicationDelay: number | null;
}

/** DCN的状态信息 */
declare interface DCNReplicaStatus {
  /** DCN 的运行状态，START为正常运行，STOP为暂停， */
  Status: string | null;
  /** 当前延迟情况，取备实例的 master 节点的 delay 值 */
  Delay: number;
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

/** 数据库权限 */
declare interface DatabasePrivilege {
  /** 权限信息 */
  Privileges: string[];
  /** 数据库名 */
  Database: string;
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

/** DCN详情条目 */
declare interface DcnDetailItem {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例地域 */
  Region?: string;
  /** 实例可用区 */
  Zone?: string;
  /** 实例IP地址 */
  Vip?: string;
  /** 实例IPv6地址 */
  Vipv6?: string;
  /** 实例端口 */
  Vport?: number;
  /** 实例状态 */
  Status?: number;
  /** 实例状态描述 */
  StatusDesc?: string;
  /** 实例DCN标志，1-主，2-备 */
  DcnFlag?: number;
  /** 实例DCN状态，0-无，1-创建中，2-同步中，3-已断开 */
  DcnStatus?: number;
  /** 实例CPU核数 */
  Cpu?: number;
  /** 实例内存大小，单位 GB */
  Memory?: number;
  /** 实例存储大小，单位 GB */
  Storage?: number;
  /** 付费模式 */
  PayMode?: number;
  /** 实例创建时间，格式为 2006-01-02 15:04:05 */
  CreateTime?: string;
  /** 实例到期时间，格式为 2006-01-02 15:04:05 */
  PeriodEndTime?: string;
  /** 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型） */
  InstanceType?: number;
  /** DCN复制的配置信息；对于主实例，此字段为null */
  ReplicaConfig?: DCNReplicaConfig | null;
  /** DCN复制的状态；对于主实例，此字段为null */
  ReplicaStatus?: DCNReplicaStatus | null;
  /** 是否开启了 kms */
  EncryptStatus?: number;
  /** 实例DCN状态描述信息 */
  DcnStatusDesc?: string;
  /** DCN实例绑定的北极星服务所属的北极星实例Id，若未绑定则为空 */
  PolarisInstanceId?: string;
  /** DCN实例绑定的北极星服务所属的北极星实例名，若未绑定则为空 */
  PolarisInstanceName?: string;
  /** DCN实例绑定的北极星服务所属的北极星命名空间，若未绑定则为空 */
  PolarisNamespace?: string;
  /** DCN实例绑定的北极星服务，若未绑定则为空 */
  PolarisService?: string;
  /** DCN实例在北极星服务中的状态 0:未开启; 1:已开启; 2:已隔离; 3:切换中 */
  PolarisServiceStatus?: number;
  /** DCN实例在北极星服务中的状态的描述信息 */
  PolarisServiceStatusDesc?: string;
  /** 北极星管控地址 */
  PolarisRegion?: string;
  /** 是否支持DCN切换 */
  IsDcnSwitchSupported?: number;
}

/** 订单信息 */
declare interface Deal {
  /** 订单号 */
  DealName: string;
  /** 所属账号 */
  OwnerUin: string;
  /** 商品数量 */
  Count: number;
  /** 关联的流程 Id，可用于查询流程执行状态 */
  FlowId: number;
  /** 只有创建实例且已完成发货的订单会填充该字段，表示该订单创建的实例的 ID */
  InstanceIds: string[] | null;
  /** 付费模式，0后付费/1预付费 */
  PayMode: number;
}

/** 函数权限信息 */
declare interface FunctionPrivilege {
  /** 数据库名 */
  Database: string;
  /** 数据库函数名 */
  FunctionName: string;
  /** 权限信息 */
  Privileges: string[];
}

/** 实例备份文件信息 */
declare interface InstanceBackupFileItem {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 实例状态 */
  InstanceStatus: number;
  /** 分片ID */
  ShardId: string | null;
  /** 文件路径 */
  FilePath: string;
  /** 文件名 */
  FileName: string;
  /** 文件大小 */
  FileSize: number;
  /** 备份类型，Data:数据备份，Binlog:Binlog备份，Errlog:错误日志，Slowlog:慢日志 */
  BackupType: string;
  /** 手动备份，0:否，1:是 */
  ManualBackup: number;
  /** 备份开始时间 */
  StartTime: string;
  /** 备份结束时间 */
  EndTime: string;
}

/** 按机型归类的实例可售卖规格信息 */
declare interface InstanceSpec {
  /** 设备型号 */
  Machine: string;
  /** 该机型对应的可售卖规格列表 */
  SpecInfos: SpecConfigInfo[];
}

/** 拉取的日志信息 */
declare interface LogFileInfo {
  /** Log最后修改时间 */
  Mtime: number;
  /** 文件长度 */
  Length: number;
  /** 下载Log时用到的统一资源标识符 */
  Uri: string;
  /** 文件名 */
  FileName: string;
}

/** 描述实例的各个DB节点信息 */
declare interface NodeInfo {
  /** DB节点ID */
  NodeId: string;
  /** DB节点角色，取值为master或者slave */
  Role: string;
}

/** 参数约束 */
declare interface ParamConstraint {
  /** 约束类型,如枚举enum，区间section */
  Type: string;
  /** 约束类型为enum时的可选值列表 */
  Enum?: string;
  /** 约束类型为section时的范围 */
  Range?: ConstraintRange | null;
  /** 约束类型为string时的可选值列表 */
  String: string;
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
  Constraint: ParamConstraint;
  /** 是否有设置过值，false:没有设置过值，true:有设置过值。 */
  HaveSetValue: boolean;
  /** 是否需要重启生效，false:不需要重启，true:需要重启 */
  NeedRestart: boolean;
}

/** 修改参数结果 */
declare interface ParamModifyResult {
  /** 修改参数名字 */
  Param: string;
  /** 参数修改结果。0表示修改成功；-1表示修改失败；-2表示该参数值非法 */
  Code: number;
}

/** 存储过程权限信息 */
declare interface ProcedurePrivilege {
  /** 数据库名 */
  Database: string;
  /** 数据库存储过程名 */
  Procedure: string;
  /** 权限信息 */
  Privileges: string[];
}

/** 售卖可用区信息 */
declare interface RegionInfo {
  /** 地域英文ID */
  Region: string;
  /** 地域数字ID */
  RegionId: number;
  /** 地域中文名 */
  RegionName: string;
  /** 可用区列表 */
  ZoneList: ZonesInfo[];
  /** 可选择的主可用区和从可用区 */
  AvailableChoice: ZoneChooseInfo[];
}

/** 保留的网络资源信息 */
declare interface ReservedNetResource {
  /** 私有网络 */
  VpcId?: string;
  /** 子网 */
  SubnetId?: string;
  /** VpcId,SubnetId下保留的内网ip */
  Vip?: string;
  /** Vip下的端口 */
  Vports?: number[];
  /** vip的回收时间 */
  RecycleTime?: string;
}

/** 标签对象，包含tagKey & tagValue */
declare interface ResourceTag {
  /** 标签键key */
  TagKey: string;
  /** 标签值value */
  TagValue: string;
}

/** 安全组详情 */
declare interface SecurityGroup {
  /** 项目ID */
  ProjectId: number;
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss */
  CreateTime: string;
  /** 安全组ID */
  SecurityGroupId: string;
  /** 安全组名称 */
  SecurityGroupName: string;
  /** 安全组备注 */
  SecurityGroupRemark: string;
  /** 入站规则 */
  Inbound: SecurityGroupBound[];
  /** 出站规则 */
  Outbound: SecurityGroupBound[];
}

/** 安全出入口规则 */
declare interface SecurityGroupBound {
  /** 策略，ACCEPT 或者 DROP */
  Action: string;
  /** 来源 IP 或 IP 段，例如192.168.0.0/16 */
  CidrIp: string;
  /** 端口 */
  PortRange: string;
  /** 网络协议，支持 UDP、TCP 等 */
  IpProtocol: string;
}

/** 慢查询条目信息 */
declare interface SlowLogData {
  /** 语句校验和，用于查询详情 */
  CheckSum?: string;
  /** 数据库名称 */
  Db?: string;
  /** 抽象的SQL语句 */
  FingerPrint?: string;
  /** 平均的锁时间 */
  LockTimeAvg?: string;
  /** 最大锁时间 */
  LockTimeMax?: string;
  /** 最小锁时间 */
  LockTimeMin?: string;
  /** 锁时间总和 */
  LockTimeSum?: string;
  /** 查询次数 */
  QueryCount?: string;
  /** 平均查询时间 */
  QueryTimeAvg?: string;
  /** 最大查询时间 */
  QueryTimeMax?: string;
  /** 最小查询时间 */
  QueryTimeMin?: string;
  /** 查询时间总和 */
  QueryTimeSum?: string;
  /** 扫描行数 */
  RowsExaminedSum?: string;
  /** 发送行数 */
  RowsSentSum?: string;
  /** 最后执行时间 */
  TsMax?: string;
  /** 首次执行时间 */
  TsMin?: string;
  /** 账号 */
  User?: string;
  /** 样例Sql */
  ExampleSql?: string | null;
  /** 账户的域名 */
  Host?: string;
}

/** 实例可售卖规格详细信息，创建实例和扩容实例时 Pid+MemSize 唯一确定一种售卖规格，磁盘大小可用区间为[MinDataDisk,MaxDataDisk] */
declare interface SpecConfigInfo {
  /** 设备型号 */
  Machine: string;
  /** 内存大小，单位 GB */
  Memory: number;
  /** 数据盘规格最小值，单位 GB */
  MinStorage: number;
  /** 数据盘规格最大值，单位 GB */
  MaxStorage: number;
  /** 推荐的使用场景 */
  SuitInfo: string;
  /** 最大 Qps 值 */
  Qps: number;
  /** 产品类型 Id */
  Pid: number;
  /** 节点个数，2 表示一主一从，3 表示一主二从 */
  NodeCount: number;
  /** Cpu核数 */
  Cpu: number;
}

/** 数据库列信息 */
declare interface TableColumn {
  /** 列名称 */
  Col: string;
  /** 列类型 */
  Type: string;
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

/** 标签 */
declare interface Tag {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 临时实例 */
declare interface TmpInstance {
  /** 应用ID */
  AppId: number | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 实例备注 */
  InstanceRemark: string | null;
  /** 0:非临时实例 ,1:无效临时实例, 2:回档成功的有效临时实例 */
  TempType: number | null;
  /** 实例状态,0:待初始化,1:流程处理中,2:有效状态,-1:已隔离，-2：已下线 */
  Status: number | null;
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string | null;
  /** 实例虚IP */
  Vip: string | null;
  /** 实例虚端口 */
  Vport: number | null;
  /** 有效期结束时间 */
  PeriodEndTime: string | null;
  /** 源实例 ID，形如：tdsql-ow728lmc。 */
  SrcInstanceId: string | null;
  /** 实例状态描述 */
  StatusDesc: string | null;
  /** 实例所在地域 */
  Region: string | null;
  /** 实例所在可用区 */
  Zone: string | null;
  /** 实例虚IPv6 */
  Vipv6: string | null;
  /** 实例IPv6标志 */
  Ipv6Flag: number | null;
}

/** 视图权限信息 */
declare interface ViewPrivileges {
  /** 数据库名 */
  Database: string;
  /** 数据库视图名 */
  View: string;
  /** 权限信息 */
  Privileges: string[];
}

/** 分片节点可用区选择 */
declare interface ZoneChooseInfo {
  /** 主可用区 */
  MasterZone: ZonesInfo;
  /** 可选的从可用区 */
  SlaveZones: ZonesInfo[];
}

/** 可用区信息 */
declare interface ZonesInfo {
  /** 可用区英文ID */
  Zone: string;
  /** 可用区数字ID */
  ZoneId: number;
  /** 可用区中文名 */
  ZoneName: string;
  /** 是否在售 */
  OnSale: boolean;
}

declare interface ActivateHourDBInstanceRequest {
  /** 实例ID列表 */
  InstanceIds: string[];
}

declare interface ActivateHourDBInstanceResponse {
  /** 隔离成功的实例id列表 */
  SuccessInstanceIds?: string[];
  /** 隔离失败的实例id列表 */
  FailedInstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：mariadb。 */
  Product: string;
  /** 要绑定的安全组ID，类似sg-efil73jd。 */
  SecurityGroupId: string;
  /** 被绑定的实例ID，类似tdsql-lesecurk，支持指定多个实例。 */
  InstanceIds: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelDcnJobRequest {
  /** 灾备实例ID */
  InstanceId: string;
}

declare interface CancelDcnJobResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloneAccountRequest {
  /** 实例ID */
  InstanceId: string;
  /** 源用户账户名 */
  SrcUser: string;
  /** 源用户HOST */
  SrcHost: string;
  /** 目的用户账户名 */
  DstUser: string;
  /** 目的用户HOST */
  DstHost: string;
  /** 目的用户账户描述 */
  DstDesc?: string;
}

declare interface CloneAccountResponse {
  /** 异步任务流程ID。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseDBExtranetAccessRequest {
  /** 待关闭外网访问的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 是否IPv6，默认0 */
  Ipv6Flag?: number;
}

declare interface CloseDBExtranetAccessResponse {
  /** 异步任务ID，可通过 DescribeFlow 查询任务状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyAccountPrivilegesRequest {
  /** 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 源用户名 */
  SrcUserName: string;
  /** 源用户允许的访问 host */
  SrcHost: string;
  /** 目的用户名 */
  DstUserName: string;
  /** 目的用户允许的访问 host */
  DstHost: string;
  /** 源账号的 ReadOnly 属性 */
  SrcReadOnly?: string;
  /** 目的账号的 ReadOnly 属性 */
  DstReadOnly?: string;
}

declare interface CopyAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccountRequest {
  /** 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 登录用户名，由字母、数字、下划线和连字符组成，长度为1~32位。 */
  UserName: string;
  /** 可以登录的主机，与mysql 账号的 host 格式一致，可以支持通配符，例如 %，10.%，10.20.%。 */
  Host: string;
  /** 账号密码，密码需要 8-32 个字符，不能以 '/' 开头，并且必须包含小写字母、大写字母、数字和符号()~!@#$%^&*-+=_|{}[]:<>,.?/。 */
  Password: string;
  /** 是否创建为只读账号，0：否:； 1：只读账号，该账号的sql请求优先选择备机执行，备机延迟时选择主机执行；2：只读账号，优先选择备机执行，备机延迟时操作报错；3：只读账号，优先选择备机执行，忽略备机延迟只读备机； */
  ReadOnly?: number;
  /** 账号备注，可以包含中文、英文字符、常见符号和数字，长度为0~256字符 */
  Description?: string;
  /** 根据传入时间判断备机不可用 */
  DelayThresh?: number;
  /** 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。 */
  SlaveConst?: number;
  /** 用户最大连接数限制参数。不传或者传0表示为不限制，对应max_user_connections参数，目前10.1内核版本不支持设置。 */
  MaxUserConnections?: number;
}

declare interface CreateAccountResponse {
  /** 实例ID，透传入参。 */
  InstanceId?: string;
  /** 用户名，透传入参。 */
  UserName?: string;
  /** 允许访问的 host，透传入参。 */
  Host?: string;
  /** 透传入参。 */
  ReadOnly?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceRequest {
  /** 实例节点可用区分布，可填写多个可用区。 */
  Zones: string[];
  /** 节点个数大小，可以通过 DescribeDBInstanceSpecs 查询实例规格获得。 */
  NodeCount: number;
  /** 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得。 */
  Memory: number;
  /** 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。 */
  Storage: number;
  /** 欲购买的时长，单位：月。 */
  Period?: number;
  /** 欲购买的数量，默认查询购买1个实例的价格。 */
  Count?: number;
  /** 是否自动使用代金券进行支付，默认不使用。 */
  AutoVoucher?: boolean;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 虚拟私有网络 ID，不传表示创建为基础网络 */
  VpcId?: string;
  /** 虚拟私有网络子网 ID，VpcId 不为空时必填 */
  SubnetId?: string;
  /** 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目 */
  ProjectId?: number;
  /** 数据库引擎版本，当前可选：8.0，5.7，10.1，10.0。 */
  DbVersionId?: string;
  /** 实例名称， 可以通过该字段自主的设置实例的名字 */
  InstanceName?: string;
  /** 安全组ID列表 */
  SecurityGroupIds?: string[];
  /** 自动续费标志，1:自动续费，2:不自动续费 */
  AutoRenewFlag?: number;
  /** 是否支持IPv6，0:不支持，1:支持 */
  Ipv6Flag?: number;
  /** 标签键值对数组 */
  ResourceTags?: ResourceTag[];
  /** 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。 */
  InitParams?: DBParamValue[];
  /** DCN源地域 */
  DcnRegion?: string;
  /** DCN源实例ID */
  DcnInstanceId?: string;
  /** DCN同步模式，0：异步， 1：强同步 */
  DcnSyncMode?: number;
}

declare interface CreateDBInstanceResponse {
  /** 长订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName?: string;
  /** 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。 */
  InstanceIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDedicatedClusterDBInstanceRequest {
  /** 分配实例个数 */
  GoodsNum: number;
  /** 內存大小，单位GB */
  Memory: number;
  /** 磁盘大小，单位GB */
  Storage: number;
  /** 独享集群集群uuid */
  ClusterId: string;
  /** （废弃）可用区 */
  Zone?: string;
  /** 项目ID */
  ProjectId?: number;
  /** （废弃）Pid，可通过获取独享集群售卖配置接口得到 */
  Pid?: number;
  /** （废弃）机型 */
  Machine?: string;
  /** 网络Id */
  VpcId?: string;
  /** 子网Id */
  SubnetId?: string;
  /** db类型，不传默认0 */
  DbVersionId?: string;
  /** （废弃）是否手动指定一组服务器分配, 运维使用 */
  Manual?: number;
  /** （废弃）DeviceNo参数 */
  DeviceNo?: string;
  /** 安全组ID */
  SecurityGroupIds?: string[];
  /** DCN源实例ID */
  DcnInstanceId?: string;
  /** DCN源实例地域名 */
  DcnRegion?: string;
  /** 自定义实例名称 */
  InstanceName?: string;
  /** 标签 */
  ResourceTags?: ResourceTag[];
  /** 支持IPv6标志：1 支持， 0 不支持 */
  Ipv6Flag?: number;
  /** 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。 */
  InitParams?: DBParamValue[];
  /** 实例节点数 */
  NodeNum?: number;
  /** 指定主节点uuid，不填随机分配 */
  MasterHostId?: string;
  /** 指定从节点uuid，不填随机分配 */
  SlaveHostIds?: string[];
  /** 需要回档的源实例ID */
  RollbackInstanceId?: string;
  /** 回档时间 */
  RollbackTime?: string;
  /** DCN同步模式，0：异步， 1：强同步 */
  DcnSyncMode?: number;
}

declare interface CreateDedicatedClusterDBInstanceResponse {
  /** 分配资源ID数组 */
  InstanceIds?: string[];
  /** 流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHourDBInstanceRequest {
  /** 节点可用区分布，可填写多个可用区。 */
  Zones: string[];
  /** 节点个数 */
  NodeCount: number;
  /** 内存大小，单位：GB */
  Memory: number;
  /** 储存大小，单位：GB */
  Storage: number;
  /** 购买实例数量 */
  Count?: number;
  /** 项目ID，不传表示默认项目 */
  ProjectId?: number;
  /** 统一网络ID，不传表示基础网络 */
  VpcId?: string;
  /** 统一子网ID，VpcId有值时需填写 */
  SubnetId?: string;
  /** 数据库引擎版本，当前可选：8.0，5.7，10.1，10.0。 */
  DbVersionId?: string;
  /** 自定义实例名称 */
  InstanceName?: string;
  /** 安全组ID，不传表示不绑定安全组 */
  SecurityGroupIds?: string[];
  /** 是否支持IPv6，0:不支持，1:支持 */
  Ipv6Flag?: number;
  /** 标签键值对数组 */
  ResourceTags?: ResourceTag[];
  /** DCN源地域 */
  DcnRegion?: string;
  /** DCN源实例ID */
  DcnInstanceId?: string;
  /** 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化，默认为强同步可退化）。 */
  InitParams?: DBParamValue[];
  /** 回档源实例ID，例如“2021-11-22 00:00:00” */
  RollbackInstanceId?: string;
  /** 回档时间 */
  RollbackTime?: string;
  /** DCN同步模式，0：异步， 1：强同步 */
  DcnSyncMode?: number;
}

declare interface CreateHourDBInstanceResponse {
  /** 订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName?: string;
  /** 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。 */
  InstanceIds?: string[] | null;
  /** 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。 */
  FlowId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTmpInstancesRequest {
  /** 回档实例的ID列表，形如：tdsql-ow728lmc。 */
  InstanceIds: string[];
  /** 回档时间点 */
  RollbackTime: string;
}

declare interface CreateTmpInstancesResponse {
  /** 异步任务流程ID。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccountRequest {
  /** 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 用户名 */
  UserName: string;
  /** 用户允许的访问 host */
  Host: string;
}

declare interface DeleteAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountPrivilegesRequest {
  /** 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 登录用户名。 */
  UserName: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数 */
  DbName: string;
  /** 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示查询该数据库权限（即db.\*），此时忽略 Object 参数 */
  Type?: string;
  /** 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空 */
  Object?: string;
  /** 当 Type=table 时，ColName 为 \* 表示查询表的权限，如果为具体字段名，表示查询对应字段的权限 */
  ColName?: string;
}

declare interface DescribeAccountPrivilegesResponse {
  /** 实例ID */
  InstanceId: string;
  /** 权限列表。 */
  Privileges: string[];
  /** 数据库账号用户名 */
  UserName: string;
  /** 数据库账号Host */
  Host: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
}

declare interface DescribeAccountsResponse {
  /** 实例ID，透传入参。 */
  InstanceId: string;
  /** 实例用户列表。 */
  Users: DBAccount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupFilesRequest {
  /** 按实例ID查询 */
  InstanceId?: string;
  /** 备份类型，Data:数据备份，Binlog:Binlog备份，Errlog:错误日志，Slowlog:慢日志 */
  BackupType?: string;
  /** 按开始时间查询 */
  StartTime?: string;
  /** 按结束时间查询 */
  EndTime?: string;
  /** 分页参数 */
  Limit?: number;
  /** 分页参数 */
  Offset?: number;
  /** 排序参数，可选值：Time,Size */
  OrderBy?: string;
  /** 排序参数, 可选值：DESC,ASC */
  OrderType?: string;
}

declare interface DescribeBackupFilesResponse {
  /** 备份文件列表 */
  Files: InstanceBackupFileItem[];
  /** 总条目数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupTimeRequest {
  /** 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceIds: string[];
}

declare interface DescribeBackupTimeResponse {
  /** 返回的配置数量 */
  TotalCount: number;
  /** 实例备份时间配置信息 */
  Items: DBBackupTimeConfig[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBEncryptAttributesRequest {
  /** 实例Id，形如：tdsql-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeDBEncryptAttributesResponse {
  /** 是否启用加密，1-已开启；0-未开启。 */
  EncryptStatus: number;
  /** DEK密钥 */
  CipherText: string;
  /** DEK密钥过期日期。 */
  ExpireDate: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceDetailRequest {
  /** 实例Id形如：tdsql-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeDBInstanceDetailResponse {
  /** 实例Id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例状态 */
  Status?: number;
  /** 实例目前运行状态描述 */
  StatusDesc?: string;
  /** 内网 IP 地址 */
  Vip?: string;
  /** 内网端口 */
  Vport?: number;
  /** 是否临时实例，0为否，非0为是 */
  IsTmp?: number;
  /** 节点数，2为一主一从，3为一主二从 */
  NodeCount?: number;
  /** 实例所在地域名称，如 ap-shanghai */
  Region?: string;
  /** 实例所在可用区名称，如 ap-shanghai-1 */
  Zone?: string;
  /** 字符串型的私有网络Id */
  VpcId?: string;
  /** 字符串型的私有网络子网Id */
  SubnetId?: string;
  /** 外网状态，0-未开通；1-已开通；2-关闭；3-开通中；4-关闭中 */
  WanStatus?: number;
  /** 外网访问的域名，公网可解析 */
  WanDomain?: string;
  /** 外网 IP 地址，公网可访问 */
  WanVip?: string;
  /** 外网端口 */
  WanPort?: number;
  /** 实例所属项目 Id */
  ProjectId?: number;
  /** TDSQL 版本信息 */
  TdsqlVersion?: string;
  /** 实例内存大小，单位 GB */
  Memory?: number;
  /** 实例存储大小，单位 GB */
  Storage?: number;
  /** 主可用区，如 ap-shanghai-1 */
  MasterZone?: string;
  /** 从可用区列表，如 [ap-shanghai-2] */
  SlaveZones?: string[];
  /** 自动续费标志：0 否，1 是 */
  AutoRenewFlag?: number;
  /** 独享集群Id，普通实例为空 */
  ExclusterId?: string;
  /** 付费模式：prepaid 表示预付费 */
  PayMode?: string;
  /** 实例创建时间，格式为 2006-01-02 15:04:05 */
  CreateTime?: string;
  /** 实例是否支持审计 */
  IsAuditSupported?: boolean;
  /** 实例到期时间，格式为 2006-01-02 15:04:05 */
  PeriodEndTime?: string;
  /** 机型信息 */
  Machine?: string;
  /** 存储空间使用率 */
  StorageUsage?: string;
  /** 日志存储空间大小，单位 GB */
  LogStorage?: number;
  /** 是否支持数据加密。1-支持；0-不支持 */
  IsEncryptSupported?: number;
  /** 内网IPv6 */
  Vip6?: string | null;
  /** 实例Cpu核数 */
  Cpu?: number;
  /** 产品类型ID */
  Pid?: number;
  /** 最大QPS */
  Qps?: number;
  /** 是否支持IPv6 */
  Ipv6Flag?: number | null;
  /** 外网IPv6地址，公网可访问 */
  WanVipv6?: string | null;
  /** 外网状态，0-未开通；1-已开通；2-关闭；3-开通中；4-关闭中 */
  WanStatusIpv6?: number | null;
  /** 外网IPv6端口 */
  WanPortIpv6?: number | null;
  /** 数据库引擎 */
  DbEngine?: string | null;
  /** 数据库版本 */
  DbVersion?: string | null;
  /** 标签信息 */
  ResourceTags?: ResourceTag[];
  /** DCN标志，0-无，1-主实例，2-灾备实例 */
  DcnFlag?: number | null;
  /** DCN状态，0-无，1-创建中，2-同步中，3-已断开 */
  DcnStatus?: number | null;
  /** DCN灾备实例数 */
  DcnDstNum?: number | null;
  /** 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型） */
  InstanceType?: number | null;
  /** 实例的各个DB节点信息 */
  NodesInfo?: NodeInfo[] | null;
  /** 实例是否支持设置用户连接数限制，内核为10.1暂不支持。 */
  IsMaxUserConnectionsSupported?: boolean | null;
  /** 对外显示的数据库版本 */
  DbVersionId?: string | null;
  /** 加密状态, 0-未开启，1-已开启 */
  EncryptStatus?: number | null;
  /** DCN的配置信息 */
  ReplicaConfig?: DCNReplicaConfig | null;
  /** DCN的运行状态 */
  ReplicaStatus?: DCNReplicaStatus | null;
  /** 独享集群类型，0:公有云, 1:金融围笼, 2:CDC集群 */
  ExclusterType?: number | null;
  /** VPC就近访问 */
  RsAccessStrategy?: number | null;
  /** 尚未回收的网络资源 */
  ReservedNetResources?: ReservedNetResource[];
  /** 是否支持物理复制 */
  IsPhysicalReplicationSupported?: boolean;
  /** 是否支持强同步DCN */
  IsDcnStrongSyncSupported?: number;
  /** 是否支持DCN切换 */
  IsDcnSwitchSupported?: number;
  /** proxy版本号 */
  ProxyVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceSpecsRequest {
}

declare interface DescribeDBInstanceSpecsResponse {
  /** 按机型分类的可售卖规格列表 */
  Specs: InstanceSpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 按照一个或者多个实例 ID 查询。实例 ID 形如：tdsql-ow728lmc。每次请求的实例的上限为100。 */
  InstanceIds?: string[];
  /** 搜索的字段名，当前支持的值有：instancename、vip、all。传 instancename 表示按实例名进行搜索；传 vip 表示按内网IP进行搜索；传 all 将会按实例ID、实例名和内网IP进行搜索。 */
  SearchName?: string;
  /** 搜索的关键字，支持模糊搜索。多个关键字使用换行符（'\n'）分割。 */
  SearchKey?: string;
  /** 按项目 ID 查询 */
  ProjectIds?: number[];
  /** 是否根据 VPC 网络来搜索 */
  IsFilterVpc?: boolean;
  /** 私有网络 ID， IsFilterVpc 为 1 时有效 */
  VpcId?: string;
  /** 私有网络的子网 ID， IsFilterVpc 为 1 时有效 */
  SubnetId?: string;
  /** 排序字段， projectId， createtime， instancename 三者之一 */
  OrderBy?: string;
  /** 排序类型， desc 或者 asc */
  OrderByType?: string;
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 按 OriginSerialId 查询 */
  OriginSerialIds?: string[];
  /** 标识是否使用ExclusterType字段, false不使用，true使用 */
  IsFilterExcluster?: boolean;
  /** 实例所属独享集群类型。取值范围：1-非独享集群，2-独享集群， 0-全部 */
  ExclusterType?: number;
  /** 按独享集群ID过滤实例，独享集群ID形如dbdc-4ih6uct9 */
  ExclusterIds?: string[];
  /** 按标签key查询 */
  TagKeys?: string[];
  /** 标签 */
  Tags?: Tag[];
  /** 实例类型过滤，1-独享实例，2-主实例，3-灾备实例，多个按逗号分隔 */
  FilterInstanceType?: string;
  /** 按照实例状态进行筛选 */
  Status?: number[];
  /** 排除实例状态 */
  ExcludeStatus?: number[];
}

declare interface DescribeDBInstancesResponse {
  /** 符合条件的实例数量 */
  TotalCount?: number;
  /** 实例详细信息列表 */
  Instances?: DBInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBLogFilesRequest {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。 */
  Type: number;
}

declare interface DescribeDBLogFilesResponse {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。 */
  Type: number;
  /** 请求日志总数 */
  Total: number;
  /** 包含uri、length、mtime（修改时间）等信息 */
  Files: LogFileInfo[];
  /** 如果是VPC网络的实例，做用本前缀加上URI为下载地址 */
  VpcPrefix: string;
  /** 如果是普通网络的实例，做用本前缀加上URI为下载地址 */
  NormalPrefix: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBParametersRequest {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeDBParametersResponse {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 请求DB的当前参数值 */
  Params: ParamDesc[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：mariadb。 */
  Product: string;
  /** 实例ID。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups: SecurityGroup[];
  /** 实例VIP。 */
  VIP: string | null;
  /** 实例端口。 */
  VPort: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSlowLogsRequest {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 从结果的第几条数据开始返回 */
  Offset: number;
  /** 返回的结果条数 */
  Limit: number;
  /** 查询的起始时间，形如2016-07-23 14:55:20 */
  StartTime: string;
  /** 查询的结束时间，形如2016-08-22 14:55:20 */
  EndTime?: string;
  /** 要查询的具体数据库名称 */
  Db?: string;
  /** 排序指标，取值为query_time_sum或者query_count */
  OrderBy?: string;
  /** 排序类型，desc或者asc */
  OrderByType?: string;
  /** 是否查询从机的慢查询，0-主机; 1-从机 */
  Slave?: number;
}

declare interface DescribeDBSlowLogsResponse {
  /** 慢查询日志数据 */
  Data: SlowLogData[];
  /** 所有语句锁时间总和 */
  LockTimeSum: number;
  /** 所有语句查询总次数 */
  QueryCount: number;
  /** 总记录数 */
  Total: number;
  /** 所有语句查询时间总和 */
  QueryTimeSum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBTmpInstancesRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDBTmpInstancesResponse {
  /** 临时实例 */
  TmpInstances: TmpInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseObjectsRequest {
  /** 实例 ID，形如：dcdbt-ow7t8lmc。 */
  InstanceId: string;
  /** 数据库名称，通过 DescribeDatabases 接口获取。 */
  DbName: string;
}

declare interface DescribeDatabaseObjectsResponse {
  /** 透传入参。 */
  InstanceId: string;
  /** 数据库名称。 */
  DbName: string;
  /** 表列表。 */
  Tables: DatabaseTable[];
  /** 视图列表。 */
  Views: DatabaseView[];
  /** 存储过程列表。 */
  Procs: DatabaseProcedure[];
  /** 函数列表。 */
  Funcs: DatabaseFunction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseTableRequest {
  /** 实例 ID，形如：dcdbt-ow7t8lmc。 */
  InstanceId: string;
  /** 数据库名称，通过 DescribeDatabases 接口获取。 */
  DbName: string;
  /** 表名称，通过 DescribeDatabaseObjects 接口获取。 */
  Table: string;
}

declare interface DescribeDatabaseTableResponse {
  /** 实例名称。 */
  InstanceId: string;
  /** 数据库名称。 */
  DbName: string;
  /** 表名称。 */
  Table: string;
  /** 列信息。 */
  Cols: TableColumn[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesRequest {
  /** 实例 ID，形如：dcdbt-ow7t8lmc。 */
  InstanceId: string;
}

declare interface DescribeDatabasesResponse {
  /** 该实例上的数据库列表。 */
  Databases: Database[];
  /** 透传入参。 */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDcnDetailRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDcnDetailResponse {
  /** DCN同步详情 */
  DcnDetails?: DcnDetailItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileDownloadUrlRequest {
  /** 实例ID */
  InstanceId: string;
  /** 不带签名的文件路径 */
  FilePath: string;
}

declare interface DescribeFileDownloadUrlResponse {
  /** 带签名的下载连接 */
  PreSignedUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowRequest {
  /** 异步请求接口返回的任务流程号。 */
  FlowId: number;
}

declare interface DescribeFlowResponse {
  /** 流程状态，0：成功，1：失败，2：运行中 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodeInfoRequest {
  /** 实例ID，形如tdsql-6ltok4u9 */
  InstanceId: string;
  /** 一次最多返回多少条数据。默认为无穷大，返回符合要求的所有数据 */
  Limit?: number;
  /** 返回数据的偏移量，默认为0 */
  Offset?: number;
}

declare interface DescribeInstanceNodeInfoResponse {
  /** 节点总个数 */
  TotalCount: number;
  /** 节点信息 */
  NodesInfo: NodeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogFileRetentionPeriodRequest {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeLogFileRetentionPeriodResponse {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 日志备份天数 */
  Days: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrdersRequest {
  /** 待查询的长订单号列表，创建实例、续费实例、扩容实例接口返回。 */
  DealNames: string[];
}

declare interface DescribeOrdersResponse {
  /** 返回的订单数量。 */
  TotalCount: number;
  /** 订单信息列表。 */
  Deals: Deal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePriceRequest {
  /** 欲新购实例的可用区ID。 */
  Zone: string;
  /** 实例节点个数，可以通过 DescribeDBInstanceSpecs 查询实例规格获得。 */
  NodeCount: number;
  /** 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得。 */
  Memory: number;
  /** 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。 */
  Storage: number;
  /** 欲购买的时长，单位：月。 */
  Period?: number;
  /** 欲购买的数量，默认查询购买1个实例的价格。 */
  Count?: number;
  /** 付费类型。postpaid：按量付费 prepaid：预付费 */
  Paymode?: string;
  /** 价格金额单位，不传默认单位为分，取值： * pent：分* microPent：微分 */
  AmountUnit?: string;
}

declare interface DescribePriceResponse {
  /** 原价 * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站为人民币，国际站为美元 */
  OriginalPrice: number;
  /** 实际价格，受折扣等影响，可能和原价不同* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站人民币，国际站美元 */
  Price: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：mariadb。 */
  Product: string;
  /** 项目ID。 */
  ProjectId?: number;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups: SecurityGroup[];
  /** 安全组总数。 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRenewalPriceRequest {
  /** 待续费的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 续费时长，单位：月。不传则默认为1个月。 */
  Period?: number;
  /** 价格金额单位，不传默认单位为分，取值： * pent：分* microPent：微分 */
  AmountUnit?: string;
}

declare interface DescribeRenewalPriceResponse {
  /** 原价 * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站为人民币，国际站为美元 */
  OriginalPrice: number;
  /** 实际价格，受折扣等影响，可能和原价不同* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站人民币，国际站美元 */
  Price: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSaleInfoRequest {
}

declare interface DescribeSaleInfoResponse {
  /** 可售卖地域信息列表 */
  RegionList: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUpgradePriceRequest {
  /** 待升级的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得。 */
  Memory: number;
  /** 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。 */
  Storage: number;
  /** 新节点数，传0表示节点数不变 */
  NodeCount?: number;
  /** 价格金额单位，不传默认单位为分，取值： * pent：分* microPent：微分 */
  AmountUnit?: string;
}

declare interface DescribeUpgradePriceResponse {
  /** 原价 * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站为人民币，国际站为美元 */
  OriginalPrice: number;
  /** 实际价格，受折扣等影响，可能和原价不同* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站人民币，国际站美元 */
  Price: number;
  /** 变配明细计算公式 */
  Formula: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyDBInstanceRequest {
  /** 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DestroyDBInstanceResponse {
  /** 实例 ID，与入参InstanceId一致。 */
  InstanceId: string;
  /** 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyHourDBInstanceRequest {
  /** 实例 ID，格式如：tdsql-avw0207d，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DestroyHourDBInstanceResponse {
  /** 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。 */
  FlowId?: number;
  /** 实例 ID，与入参InstanceId一致。 */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：mariadb。 */
  Product: string;
  /** 安全组Id。 */
  SecurityGroupId: string;
  /** 实例ID列表，一个或者多个实例Id组成的数组。 */
  InstanceIds: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FlushBinlogRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface FlushBinlogResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GrantAccountPrivilegesRequest {
  /** 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 登录用户名。 */
  UserName: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 数据库名。如果为 \*，表示设置全局权限（即 \*.\*），此时忽略 Type 和 Object 参数。当DbName不为\*时，需要传入参 Type。 */
  DbName: string;
  /** 全局权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER，SHOW DATABASES，REPLICATION CLIENT，REPLICATION SLAVE 库权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER 表/视图权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE VIEW，SHOW VIEW，TRIGGER 存储过程/函数权限： ALTER ROUTINE，EXECUTE 字段权限： INSERT，REFERENCES，SELECT，UPDATE */
  Privileges: string[];
  /** 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示设置该数据库权限（即db.\*），此时忽略 Object 参数 */
  Type?: string;
  /** 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空 */
  Object?: string;
  /** 当 Type=table 时，ColName 为 \* 表示对表授权，如果为具体字段名，表示对字段授权 */
  ColName?: string;
}

declare interface GrantAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InitDBInstancesRequest {
  /** 待初始化的实例ID列表，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceIds: string[];
  /** 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步）。 */
  Params: DBParamValue[];
}

declare interface InitDBInstancesResponse {
  /** 异步任务ID，可通过 DescribeFlow 查询任务状态。 */
  FlowId: number;
  /** 透传入参。 */
  InstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDBInstanceRequest {
  /** 实例 ID，格式如：tdsql-dasjkhd，与云数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceIds: string[];
}

declare interface IsolateDBInstanceResponse {
  /** 隔离成功实例ID列表。 */
  SuccessInstanceIds?: string[];
  /** 隔离失败实例ID列表。 */
  FailedInstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDedicatedDBInstanceRequest {
  /** 实例 Id，形如：tdsql-ow728lmc。 */
  InstanceId: string;
}

declare interface IsolateDedicatedDBInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateHourDBInstanceRequest {
  /** 实例ID列表 */
  InstanceIds: string[];
}

declare interface IsolateHourDBInstanceResponse {
  /** 解隔离成功的实例id列表 */
  SuccessInstanceIds?: string[];
  /** 解隔离失败的实例id列表 */
  FailedInstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillSessionRequest {
  /** 实例ID */
  InstanceId: string;
  /** 会话ID列表 */
  SessionId: number[];
}

declare interface KillSessionResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountDescriptionRequest {
  /** 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 登录用户名。 */
  UserName: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 新的账号备注，长度 0~256。 */
  Description: string;
}

declare interface ModifyAccountDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountPrivilegesRequest {
  /** 实例 ID，格式如：tdsql-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** 数据库的账号，包括用户名和域名。 */
  Accounts: Account[];
  /** 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。注意，不传该参数表示保留现有权限，如需清除，该字段传空数组。 */
  GlobalPrivileges?: string[];
  /** 数据库的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。 */
  DatabasePrivileges?: DatabasePrivilege[];
  /** 数据库中表的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。 */
  TablePrivileges?: TablePrivilege[];
  /** 数据库表中列的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。 */
  ColumnPrivileges?: ColumnPrivilege[];
  /** 数据库视图的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。 */
  ViewPrivileges?: ViewPrivileges[];
  /** 数据库函数的权限。Privileges 权限的可选值为："ALTER ROUTINE"，"EXECUTE"。注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。 */
  FunctionPrivileges?: FunctionPrivilege[];
  /** 数据库存储过程的权限。Privileges 权限的可选值为："ALTER ROUTINE"，"EXECUTE"。注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。 */
  ProcedurePrivileges?: ProcedurePrivilege[];
}

declare interface ModifyAccountPrivilegesResponse {
  /** 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupTimeRequest {
  /** 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00 */
  StartBackupTime: string;
  /** 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:59 */
  EndBackupTime: string;
}

declare interface ModifyBackupTimeResponse {
  /** 设置的状态，0 表示成功 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBEncryptAttributesRequest {
  /** 实例Id，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 是否启用数据加密，开启后暂不支持关闭。本接口的可选值为：1-开启数据加密。 */
  EncryptEnabled: number;
}

declare interface ModifyDBEncryptAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNameRequest {
  /** 待修改的实例 ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 新的实例名称。允许的字符为字母、数字、下划线、连字符和中文。 */
  InstanceName: string;
}

declare interface ModifyDBInstanceNameResponse {
  /** 实例ID */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：mariadb。 */
  Product: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组 */
  SecurityGroupIds: string[];
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstancesProjectRequest {
  /** 待修改的实例ID列表。实例 ID 形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceIds: string[];
  /** 要分配的项目 ID，可以通过 DescribeProjects 查询项目列表接口获取。 */
  ProjectId: number;
}

declare interface ModifyDBInstancesProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBParametersRequest {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 参数列表，每一个元素是Param和Value的组合 */
  Params: DBParamValue[];
}

declare interface ModifyDBParametersResponse {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 参数修改结果 */
  Result: ParamModifyResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBSyncModeRequest {
  /** 待修改同步模式的实例ID。形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 同步模式：0 异步，1 强同步， 2 强同步可退化 */
  SyncMode: number;
}

declare interface ModifyDBSyncModeResponse {
  /** 异步任务Id，可通过 DescribeFlow 查询任务状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceNetworkRequest {
  /** 实例ID */
  InstanceId: string;
  /** 希望转到的VPC网络的VpcId */
  VpcId: string;
  /** 希望转到的VPC网络的子网ID */
  SubnetId: string;
  /** 如果需要指定VIP，填上该字段 */
  Vip?: string;
  /** 如果需要指定VIPv6，填上该字段 */
  Vipv6?: string;
  /** VIP保留时长，单位小时，取值范围（0~168），0表示立即释放，有一分钟释放延迟。不传此参数，默认24小时释放VIP。 */
  VipReleaseDelay?: number;
}

declare interface ModifyInstanceNetworkResponse {
  /** 异步任务ID，根据此FlowId通过DescribeFlow接口查询任务进行状态 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceVipRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例VIP */
  Vip: string;
  /** IPv6标志 */
  Ipv6Flag?: number;
  /** VIP保留时长，单位小时，取值范围（0~168），0表示立即释放，有一分钟释放延迟。不传此参数，默认24小时释放VIP。 */
  VipReleaseDelay?: number;
}

declare interface ModifyInstanceVipResponse {
  /** 异步任务流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceVportRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例VPORT */
  Vport: number;
}

declare interface ModifyInstanceVportResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLogFileRetentionPeriodRequest {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 保存的天数,不能超过30 */
  Days: number;
}

declare interface ModifyLogFileRetentionPeriodResponse {
  /** 实例 ID，形如：tdsql-ow728lmc。 */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRealServerAccessStrategyRequest {
  /** 实例 ID，格式如：tdsql-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** RS就近模式, 0-无策略, 1-可用区就近访问。 */
  RsAccessStrategy: number;
}

declare interface ModifyRealServerAccessStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySyncTaskAttributeRequest {
  /** 一个或多个待操作的任务ID。可通过DescribeSyncTasks API返回值中的TaskId获取。每次请求允许操作的任务数量上限是100。 */
  TaskIds: string[];
  /** 任务名称。可任意命名，但不得超过100个字符。 */
  TaskName?: string;
}

declare interface ModifySyncTaskAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenDBExtranetAccessRequest {
  /** 待开放外网访问的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 是否IPv6，默认0 */
  Ipv6Flag?: number;
}

declare interface OpenDBExtranetAccessResponse {
  /** 异步任务ID，可通过 DescribeFlow 查询任务状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDBInstanceRequest {
  /** 待续费的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 续费时长，单位：月。 */
  Period: number;
  /** 是否自动使用代金券进行支付，默认不使用。 */
  AutoVoucher?: boolean;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
}

declare interface RenewDBInstanceResponse {
  /** 长订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 登录用户名。 */
  UserName: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 新密码，由字母、数字或常见符号组成，不能包含分号、单引号和双引号，长度为6~32位。 */
  Password: string;
}

declare interface ResetAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDBInstancesRequest {
  /** 实例ID的数组 */
  InstanceIds: string[];
  /** 重启时间 */
  RestartTime?: string;
}

declare interface RestartDBInstancesResponse {
  /** 异步任务ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchDBInstanceHARequest {
  /** 实例Id，形如 tdsql-ow728lmc */
  InstanceId: string;
  /** 切换的目标区域，会自动选择该可用区中延迟最低的节点 */
  Zone: string;
}

declare interface SwitchDBInstanceHAResponse {
  /** 异步流程Id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateDedicatedDBInstanceRequest {
  /** 实例 Id，形如：tdsql-ow728lmc。 */
  InstanceId: string;
}

declare interface TerminateDedicatedDBInstanceResponse {
  /** 异步流程Id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDBInstanceRequest {
  /** 待升级的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得。 */
  Memory: number;
  /** 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。 */
  Storage: number;
  /** 是否自动使用代金券进行支付，默认不使用。 */
  AutoVoucher?: boolean;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 变更部署时指定的新可用区列表，第1个为主可用区，其余为从可用区 */
  Zones?: string[];
}

declare interface UpgradeDBInstanceResponse {
  /** 长订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDedicatedDBInstanceRequest {
  /** 待升级的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例获得。 */
  InstanceId: string;
  /** 内存大小，单位：GB，可以通过 DescribeFenceDBInstanceSpecs 查询实例规格获得。 */
  Memory: number;
  /** 存储空间大小，单位：GB，可以通过 DescribeFenceDBInstanceSpecs 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。 */
  Storage: number;
  /** 错过切换时间窗口时，是否自动重试一次，0-否，1-是 */
  SwitchAutoRetry?: number;
  /** 切换时间窗口开始时间 */
  SwitchStartTime?: string;
  /** 切换时间窗口结束时间 */
  SwitchEndTime?: string;
}

declare interface UpgradeDedicatedDBInstanceResponse {
  /** 异步流程Id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mariadb 云数据库 MariaDB} */
declare interface Mariadb {
  (): Versions;
  /** 解隔离MariaDB按量计费实例 {@link ActivateHourDBInstanceRequest} {@link ActivateHourDBInstanceResponse} */
  ActivateHourDBInstance(data: ActivateHourDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateHourDBInstanceResponse>;
  /** 安全组批量绑定云资源 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 取消DCN同步 {@link CancelDcnJobRequest} {@link CancelDcnJobResponse} */
  CancelDcnJob(data: CancelDcnJobRequest, config?: AxiosRequestConfig): AxiosPromise<CancelDcnJobResponse>;
  /** 克隆实例账户 {@link CloneAccountRequest} {@link CloneAccountResponse} */
  CloneAccount(data: CloneAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CloneAccountResponse>;
  /** 关闭外网访问 {@link CloseDBExtranetAccessRequest} {@link CloseDBExtranetAccessResponse} */
  CloseDBExtranetAccess(data: CloseDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<CloseDBExtranetAccessResponse>;
  /** 复制账号权限 {@link CopyAccountPrivilegesRequest} {@link CopyAccountPrivilegesResponse} */
  CopyAccountPrivileges(data: CopyAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<CopyAccountPrivilegesResponse>;
  /** 创建账号 {@link CreateAccountRequest} {@link CreateAccountResponse} */
  CreateAccount(data: CreateAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountResponse>;
  /** 创建MariaDB包年包月实例 {@link CreateDBInstanceRequest} {@link CreateDBInstanceResponse} */
  CreateDBInstance(data: CreateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstanceResponse>;
  /** 创建Mariadb独享集群实例 {@link CreateDedicatedClusterDBInstanceRequest} {@link CreateDedicatedClusterDBInstanceResponse} */
  CreateDedicatedClusterDBInstance(data: CreateDedicatedClusterDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDedicatedClusterDBInstanceResponse>;
  /** 创建MariaDB按量计费实例 {@link CreateHourDBInstanceRequest} {@link CreateHourDBInstanceResponse} */
  CreateHourDBInstance(data: CreateHourDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHourDBInstanceResponse>;
  /** 创建临时实例 {@link CreateTmpInstancesRequest} {@link CreateTmpInstancesResponse} */
  CreateTmpInstances(data: CreateTmpInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTmpInstancesResponse>;
  /** 删除账号 {@link DeleteAccountRequest} {@link DeleteAccountResponse} */
  DeleteAccount(data: DeleteAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountResponse>;
  /** 查询账号权限 {@link DescribeAccountPrivilegesRequest} {@link DescribeAccountPrivilegesResponse} */
  DescribeAccountPrivileges(data: DescribeAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountPrivilegesResponse>;
  /** 查询账号列表 {@link DescribeAccountsRequest} {@link DescribeAccountsResponse} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** 查看备份文件列表 {@link DescribeBackupFilesRequest} {@link DescribeBackupFilesResponse} */
  DescribeBackupFiles(data?: DescribeBackupFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupFilesResponse>;
  /** 查询备份时间 {@link DescribeBackupTimeRequest} {@link DescribeBackupTimeResponse} */
  DescribeBackupTime(data: DescribeBackupTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupTimeResponse>;
  /** 查询实例数据加密状态 {@link DescribeDBEncryptAttributesRequest} {@link DescribeDBEncryptAttributesResponse} */
  DescribeDBEncryptAttributes(data: DescribeDBEncryptAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBEncryptAttributesResponse>;
  /** 查询实例详细信息 {@link DescribeDBInstanceDetailRequest} {@link DescribeDBInstanceDetailResponse} */
  DescribeDBInstanceDetail(data: DescribeDBInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceDetailResponse>;
  /** 查询云数据库可售卖规格 {@link DescribeDBInstanceSpecsRequest} {@link DescribeDBInstanceSpecsResponse} */
  DescribeDBInstanceSpecs(data?: DescribeDBInstanceSpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceSpecsResponse>;
  /** 查询实例列表 {@link DescribeDBInstancesRequest} {@link DescribeDBInstancesResponse} */
  DescribeDBInstances(data?: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** 获取日志列表 {@link DescribeDBLogFilesRequest} {@link DescribeDBLogFilesResponse} */
  DescribeDBLogFiles(data: DescribeDBLogFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBLogFilesResponse>;
  /** 查看数据库参数 {@link DescribeDBParametersRequest} {@link DescribeDBParametersResponse} */
  DescribeDBParameters(data: DescribeDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBParametersResponse>;
  /** 查询实例安全组信息 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询慢查询日志列表 {@link DescribeDBSlowLogsRequest} {@link DescribeDBSlowLogsResponse} */
  DescribeDBSlowLogs(data: DescribeDBSlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSlowLogsResponse>;
  /** 获取实例回档生成的临时实例 {@link DescribeDBTmpInstancesRequest} {@link DescribeDBTmpInstancesResponse} */
  DescribeDBTmpInstances(data: DescribeDBTmpInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBTmpInstancesResponse>;
  /** 查询数据库对象列表 {@link DescribeDatabaseObjectsRequest} {@link DescribeDatabaseObjectsResponse} */
  DescribeDatabaseObjects(data: DescribeDatabaseObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseObjectsResponse>;
  /** 查询数据库表信息 {@link DescribeDatabaseTableRequest} {@link DescribeDatabaseTableResponse} */
  DescribeDatabaseTable(data: DescribeDatabaseTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseTableResponse>;
  /** 查询数据库列表 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** 获取实例灾备详情 {@link DescribeDcnDetailRequest} {@link DescribeDcnDetailResponse} */
  DescribeDcnDetail(data: DescribeDcnDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDcnDetailResponse>;
  /** 获取备份或日志的下载连接 {@link DescribeFileDownloadUrlRequest} {@link DescribeFileDownloadUrlResponse} */
  DescribeFileDownloadUrl(data: DescribeFileDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileDownloadUrlResponse>;
  /** 查询流程状态 {@link DescribeFlowRequest} {@link DescribeFlowResponse} */
  DescribeFlow(data: DescribeFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowResponse>;
  /** 获取实例节点信息 {@link DescribeInstanceNodeInfoRequest} {@link DescribeInstanceNodeInfoResponse} */
  DescribeInstanceNodeInfo(data: DescribeInstanceNodeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodeInfoResponse>;
  /** 查看备份日志备份天数 {@link DescribeLogFileRetentionPeriodRequest} {@link DescribeLogFileRetentionPeriodResponse} */
  DescribeLogFileRetentionPeriod(data: DescribeLogFileRetentionPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogFileRetentionPeriodResponse>;
  /** 查询订单信息 {@link DescribeOrdersRequest} {@link DescribeOrdersResponse} */
  DescribeOrders(data: DescribeOrdersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrdersResponse>;
  /** 新购实例询价 {@link DescribePriceRequest} {@link DescribePriceResponse} */
  DescribePrice(data: DescribePriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePriceResponse>;
  /** 查询项目安全组信息 {@link DescribeProjectSecurityGroupsRequest} {@link DescribeProjectSecurityGroupsResponse} */
  DescribeProjectSecurityGroups(data: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** 续费实例询价 {@link DescribeRenewalPriceRequest} {@link DescribeRenewalPriceResponse} */
  DescribeRenewalPrice(data: DescribeRenewalPriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRenewalPriceResponse>;
  /** 查询云数据库可售卖地域和可用区信息 {@link DescribeSaleInfoRequest} {@link DescribeSaleInfoResponse} */
  DescribeSaleInfo(data?: DescribeSaleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSaleInfoResponse>;
  /** 变配实例询价 {@link DescribeUpgradePriceRequest} {@link DescribeUpgradePriceResponse} */
  DescribeUpgradePrice(data: DescribeUpgradePriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUpgradePriceResponse>;
  /** 销毁已隔离的包年包月实例 {@link DestroyDBInstanceRequest} {@link DestroyDBInstanceResponse} */
  DestroyDBInstance(data: DestroyDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyDBInstanceResponse>;
  /** 销毁MariaDB按量计费实例 {@link DestroyHourDBInstanceRequest} {@link DestroyHourDBInstanceResponse} */
  DestroyHourDBInstance(data: DestroyHourDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyHourDBInstanceResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 切分Binlog {@link FlushBinlogRequest} {@link FlushBinlogResponse} */
  FlushBinlog(data: FlushBinlogRequest, config?: AxiosRequestConfig): AxiosPromise<FlushBinlogResponse>;
  /** 设置账号权限 {@link GrantAccountPrivilegesRequest} {@link GrantAccountPrivilegesResponse} */
  GrantAccountPrivileges(data: GrantAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<GrantAccountPrivilegesResponse>;
  /** 初始化实例 {@link InitDBInstancesRequest} {@link InitDBInstancesResponse} */
  InitDBInstances(data: InitDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InitDBInstancesResponse>;
  /** 隔离MariaDB包年包月实例 {@link IsolateDBInstanceRequest} {@link IsolateDBInstanceResponse} */
  IsolateDBInstance(data: IsolateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBInstanceResponse>;
  /** 隔离独享云数据库实例 {@link IsolateDedicatedDBInstanceRequest} {@link IsolateDedicatedDBInstanceResponse} */
  IsolateDedicatedDBInstance(data: IsolateDedicatedDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDedicatedDBInstanceResponse>;
  /** 隔离MariaDB按量计费实例 {@link IsolateHourDBInstanceRequest} {@link IsolateHourDBInstanceResponse} */
  IsolateHourDBInstance(data: IsolateHourDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateHourDBInstanceResponse>;
  /** 杀死指定会话 {@link KillSessionRequest} {@link KillSessionResponse} */
  KillSession(data: KillSessionRequest, config?: AxiosRequestConfig): AxiosPromise<KillSessionResponse>;
  /** 修改数据库账号备注 {@link ModifyAccountDescriptionRequest} {@link ModifyAccountDescriptionResponse} */
  ModifyAccountDescription(data: ModifyAccountDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountDescriptionResponse>;
  /** 修改云数据库实例账号的权限信息 {@link ModifyAccountPrivilegesRequest} {@link ModifyAccountPrivilegesResponse} */
  ModifyAccountPrivileges(data: ModifyAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountPrivilegesResponse>;
  /** 修改备份时间 {@link ModifyBackupTimeRequest} {@link ModifyBackupTimeResponse} */
  ModifyBackupTime(data: ModifyBackupTimeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupTimeResponse>;
  /** 修改实例数据加密属性 {@link ModifyDBEncryptAttributesRequest} {@link ModifyDBEncryptAttributesResponse} */
  ModifyDBEncryptAttributes(data: ModifyDBEncryptAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBEncryptAttributesResponse>;
  /** 修改实例名称 {@link ModifyDBInstanceNameRequest} {@link ModifyDBInstanceNameResponse} */
  ModifyDBInstanceName(data: ModifyDBInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNameResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改实例所属项目 {@link ModifyDBInstancesProjectRequest} {@link ModifyDBInstancesProjectResponse} */
  ModifyDBInstancesProject(data: ModifyDBInstancesProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstancesProjectResponse>;
  /** 修改数据库参数 {@link ModifyDBParametersRequest} {@link ModifyDBParametersResponse} */
  ModifyDBParameters(data: ModifyDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBParametersResponse>;
  /** 修改同步模式 {@link ModifyDBSyncModeRequest} {@link ModifyDBSyncModeResponse} */
  ModifyDBSyncMode(data: ModifyDBSyncModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBSyncModeResponse>;
  /** 修改实例所属网络 {@link ModifyInstanceNetworkRequest} {@link ModifyInstanceNetworkResponse} */
  ModifyInstanceNetwork(data: ModifyInstanceNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNetworkResponse>;
  /** 修改实例VIP {@link ModifyInstanceVipRequest} {@link ModifyInstanceVipResponse} */
  ModifyInstanceVip(data: ModifyInstanceVipRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceVipResponse>;
  /** 修改实例VPORT {@link ModifyInstanceVportRequest} {@link ModifyInstanceVportResponse} */
  ModifyInstanceVport(data: ModifyInstanceVportRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceVportResponse>;
  /** 修改备份日志保存天数 {@link ModifyLogFileRetentionPeriodRequest} {@link ModifyLogFileRetentionPeriodResponse} */
  ModifyLogFileRetentionPeriod(data: ModifyLogFileRetentionPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogFileRetentionPeriodResponse>;
  /** 修改RS的访问策略 {@link ModifyRealServerAccessStrategyRequest} {@link ModifyRealServerAccessStrategyResponse} */
  ModifyRealServerAccessStrategy(data: ModifyRealServerAccessStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRealServerAccessStrategyResponse>;
  /** 修改同步任务的属性 {@link ModifySyncTaskAttributeRequest} {@link ModifySyncTaskAttributeResponse} */
  ModifySyncTaskAttribute(data: ModifySyncTaskAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySyncTaskAttributeResponse>;
  /** 开通外网访问 {@link OpenDBExtranetAccessRequest} {@link OpenDBExtranetAccessResponse} */
  OpenDBExtranetAccess(data: OpenDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<OpenDBExtranetAccessResponse>;
  /** 续费实例 {@link RenewDBInstanceRequest} {@link RenewDBInstanceResponse} */
  RenewDBInstance(data: RenewDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDBInstanceResponse>;
  /** 重置账号密码 {@link ResetAccountPasswordRequest} {@link ResetAccountPasswordResponse} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** 重启实例 {@link RestartDBInstancesRequest} {@link RestartDBInstancesResponse} */
  RestartDBInstances(data: RestartDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDBInstancesResponse>;
  /** 实例主备切换 {@link SwitchDBInstanceHARequest} {@link SwitchDBInstanceHAResponse} */
  SwitchDBInstanceHA(data: SwitchDBInstanceHARequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDBInstanceHAResponse>;
  /** 销毁独享云数据库实例 {@link TerminateDedicatedDBInstanceRequest} {@link TerminateDedicatedDBInstanceResponse} */
  TerminateDedicatedDBInstance(data: TerminateDedicatedDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateDedicatedDBInstanceResponse>;
  /** 扩容实例 {@link UpgradeDBInstanceRequest} {@link UpgradeDBInstanceResponse} */
  UpgradeDBInstance(data: UpgradeDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDBInstanceResponse>;
  /** 升级独享云数据库实例 {@link UpgradeDedicatedDBInstanceRequest} {@link UpgradeDedicatedDBInstanceResponse} */
  UpgradeDedicatedDBInstance(data: UpgradeDedicatedDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDedicatedDBInstanceResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Mariadb;
