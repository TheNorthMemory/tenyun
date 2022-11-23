/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 升级实例 -- 新增分片类型 */
declare interface AddShardConfig {
  /** 新增分片的数量 */
  ShardCount: number;
  /** 分片内存大小，单位 GB */
  ShardMemory: number;
  /** 分片存储大小，单位 GB */
  ShardStorage: number;
}

/** 描述分片DB节点信息 */
declare interface BriefNodeInfo {
  /** DB节点ID */
  NodeId: string;
  /** DB节点角色，取值为master或者slave */
  Role: string;
  /** 节点所属分片的分片ID */
  ShardId: string;
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
  UserName: string;
  /** 用户可以从哪台主机登录（对应 MySQL 用户的 host 字段，UserName + Host 唯一标识一个用户，IP形式，IP段以%结尾；支持填入%；为空默认等于%） */
  Host: string;
  /** 用户备注信息 */
  Description: string;
  /** 创建时间 */
  CreateTime: string;
  /** 最后更新时间 */
  UpdateTime: string;
  /** 只读标记，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。 */
  ReadOnly: number;
  /** 如果备机延迟超过本参数设置值，系统将认为备机发生故障建议该参数值大于10。当ReadOnly选择1、2时该参数生效。 */
  DelayThresh: number;
  /** 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。 */
  SlaveConst: number;
}

/** 云数据库参数信息。 */
declare interface DBParamValue {
  /** 参数名称 */
  Param: string;
  /** 参数值 */
  Value: string;
}

/** 分布式数据库实例信息 */
declare interface DCDBInstanceInfo {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 应用ID */
  AppId: number;
  /** 项目ID */
  ProjectId: number;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** VPC数字ID */
  VpcId: number;
  /** Subnet数字ID */
  SubnetId: number;
  /** 状态中文描述 */
  StatusDesc: string;
  /** 实例状态：0 创建中，1 流程处理中， 2 运行中，3 实例未初始化，-1 实例已隔离，4 实例初始化中，5 实例删除中，6 实例重启中，7 数据迁移中 */
  Status: number;
  /** 内网IP */
  Vip: string;
  /** 内网端口 */
  Vport: number;
  /** 创建时间 */
  CreateTime: string;
  /** 自动续费标志 */
  AutoRenewFlag: number;
  /** 内存大小，单位 GB */
  Memory: number;
  /** 存储大小，单位 GB */
  Storage: number;
  /** 分片个数 */
  ShardCount: number;
  /** 到期时间 */
  PeriodEndTime: string;
  /** 隔离时间 */
  IsolatedTimestamp: string;
  /** 账号ID */
  Uin: string;
  /** 分片详情 */
  ShardDetail: ShardInfo[];
  /** 节点数，2 为一主一从， 3 为一主二从 */
  NodeCount: number;
  /** 临时实例标记，0 为非临时实例 */
  IsTmp: number;
  /** 独享集群ID，为空表示非独享集群实例 */
  ExclusterId: string;
  /** 字符串型的私有网络ID */
  UniqueVpcId: string;
  /** 字符串型的私有网络子网ID */
  UniqueSubnetId: string;
  /** 数字实例ID（过时字段，请勿依赖该值） */
  Id: number;
  /** 外网访问的域名，公网可解析 */
  WanDomain: string;
  /** 外网 IP 地址，公网可访问 */
  WanVip: string;
  /** 外网端口 */
  WanPort: number;
  /** 产品类型 ID（过时字段，请勿依赖该值） */
  Pid: number;
  /** 实例最后更新时间，格式为 2006-01-02 15:04:05 */
  UpdateTime: string;
  /** 数据库引擎 */
  DbEngine: string;
  /** 数据库引擎版本 */
  DbVersion: string;
  /** 付费模式 */
  Paymode: string;
  /** 实例处于异步任务状态时，表示异步任务流程ID */
  Locker: number | null;
  /** 外网状态，0-未开通；1-已开通；2-关闭；3-开通中 */
  WanStatus: number;
  /** 该实例是否支持审计。1-支持；0-不支持 */
  IsAuditSupported: number;
  /** Cpu核数 */
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
  /** 数据库引擎版本 */
  DbVersionId: string | null;
}

/** 描述分布式数据库分片信息。 */
declare interface DCDBShardInfo {
  /** 所属实例Id */
  InstanceId: string;
  /** 分片SQL透传Id，用于将sql透传到指定分片执行 */
  ShardSerialId: string;
  /** 全局唯一的分片Id */
  ShardInstanceId: string;
  /** 状态：0 创建中，1 流程处理中， 2 运行中，3 分片未初始化 */
  Status: number;
  /** 状态中文描述 */
  StatusDesc: string;
  /** 创建时间 */
  CreateTime: string;
  /** 字符串格式的私有网络Id */
  VpcId: string;
  /** 字符串格式的私有网络子网Id */
  SubnetId: string;
  /** 项目ID */
  ProjectId: number;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** 内存大小，单位 GB */
  Memory: number;
  /** 存储大小，单位 GB */
  Storage: number;
  /** 到期时间 */
  PeriodEndTime: string;
  /** 节点数，2 为一主一从， 3 为一主二从 */
  NodeCount: number;
  /** 存储使用率，单位为 % */
  StorageUsage: number;
  /** 内存使用率，单位为 % */
  MemoryUsage: number;
  /** 数字分片Id（过时字段，请勿依赖该值） */
  ShardId: number;
  /** 产品ProductID */
  Pid: number;
  /** Proxy版本 */
  ProxyVersion: string;
  /** 付费模型 */
  Paymode: string | null;
  /** 分片的主可用区 */
  ShardMasterZone: string | null;
  /** 分片的从可用区列表 */
  ShardSlaveZones: string[] | null;
  /** CPU核数 */
  Cpu: number;
  /** 分片ShardKey的范围（总共64个哈希值），例如： 0-31，32-63 */
  Range: string;
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
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 实例地域 */
  Region: string;
  /** 实例可用区 */
  Zone: string;
  /** 实例IP地址 */
  Vip: string;
  /** 实例IPv6地址 */
  Vipv6: string;
  /** 实例端口 */
  Vport: number;
  /** 实例状态 */
  Status: number;
  /** 实例状态描述 */
  StatusDesc: string;
  /** 实例DCN标志，1-主，2-备 */
  DcnFlag: number;
  /** 实例DCN状态，0-无，1-创建中，2-同步中，3-已断开 */
  DcnStatus: number;
  /** 实例CPU核数 */
  Cpu: number;
  /** 实例内存大小，单位 GB */
  Memory: number;
  /** 实例存储大小，单位 GB */
  Storage: number;
  /** 付费模式 */
  PayMode: number;
  /** 实例创建时间，格式为 2006-01-02 15:04:05 */
  CreateTime: string;
  /** 实例到期时间，格式为 2006-01-02 15:04:05 */
  PeriodEndTime: string;
  /** 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型） */
  InstanceType: number;
  /** 是否开启了 kms */
  EncryptStatus: number;
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

/** 升级实例 -- 扩容分片类型 */
declare interface ExpandShardConfig {
  /** 分片ID数组 */
  ShardInstanceIds: string[];
  /** 分片内存大小，单位 GB */
  ShardMemory: number;
  /** 分片存储大小，单位 GB */
  ShardStorage: number;
  /** 分片节点数 */
  ShardNodeCount?: number;
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

/** 参数约束 */
declare interface ParamConstraint {
  /** 约束类型,如枚举enum，区间section */
  Type: string;
  /** 约束类型为enum时的可选值列表 */
  Enum: string;
  /** 约束类型为section时的范围 */
  Range: ConstraintRange | null;
  /** 约束类型为string时的可选值列表 */
  String: string;
}

/** DB参数描述 */
declare interface ParamDesc {
  /** 参数名字 */
  Param: string;
  /** 当前参数值 */
  Value: string;
  /** 设置过的值，参数生效后，该值和value一样。未设置过就不返回该字段。 */
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

/** 项目信息描述 */
declare interface Project {
  /** 项目ID */
  ProjectId: number;
  /** 资源拥有者（主账号）uin */
  OwnerUin: number;
  /** 应用Id */
  AppId: number;
  /** 项目名称 */
  Name: string;
  /** 创建者uin */
  CreatorUin: number;
  /** 来源平台 */
  SrcPlat: string;
  /** 来源AppId */
  SrcAppId: number;
  /** 项目状态,0正常，-1关闭。默认项目为3 */
  Status: number;
  /** 创建时间 */
  CreateTime: string;
  /** 是否默认项目，1 是，0 不是 */
  IsDefault: number;
  /** 描述信息 */
  Info: string;
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
  AvailableChoice: ShardZoneChooseInfo[];
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
  /** 来源 IP 或 IP 段，例如192.168.0.0/16 */
  CidrIp: string;
  /** 策略，ACCEPT 或者 DROP */
  Action: string;
  /** 端口 */
  PortRange: string;
  /** 网络协议，支持 UDP、TCP 等 */
  IpProtocol: string;
}

/** 分片信息 */
declare interface ShardInfo {
  /** 分片ID */
  ShardInstanceId: string;
  /** 分片Set ID */
  ShardSerialId: string;
  /** 状态：0 创建中，1 流程处理中， 2 运行中，3 分片未初始化，-2 分片已删除 */
  Status: number;
  /** 创建时间 */
  Createtime: string;
  /** 内存大小，单位 GB */
  Memory: number;
  /** 存储大小，单位 GB */
  Storage: number;
  /** 分片数字ID */
  ShardId: number;
  /** 节点数，2 为一主一从， 3 为一主二从 */
  NodeCount: number;
  /** 产品类型 Id（过时字段，请勿依赖该值） */
  Pid: number;
  /** Cpu核数 */
  Cpu: number;
}

/** 分片节点可用区选择 */
declare interface ShardZoneChooseInfo {
  /** 主可用区 */
  MasterZone: ZonesInfo;
  /** 可选的从可用区 */
  SlaveZones: ZonesInfo[];
}

/** 慢查询条目信息 */
declare interface SlowLogData {
  /** 语句校验和，用于查询详情 */
  CheckSum: string;
  /** 数据库名称 */
  Db: string;
  /** 抽象的SQL语句 */
  FingerPrint: string;
  /** 平均的锁时间 */
  LockTimeAvg: string;
  /** 最大锁时间 */
  LockTimeMax: string;
  /** 最小锁时间 */
  LockTimeMin: string;
  /** 锁时间总和 */
  LockTimeSum: string;
  /** 查询次数 */
  QueryCount: string;
  /** 平均查询时间 */
  QueryTimeAvg: string;
  /** 最大查询时间 */
  QueryTimeMax: string;
  /** 最小查询时间 */
  QueryTimeMin: string;
  /** 查询时间总和 */
  QueryTimeSum: string;
  /** 扫描行数 */
  RowsExaminedSum: string;
  /** 发送行数 */
  RowsSentSum: string;
  /** 最后执行时间 */
  TsMax: string;
  /** 首次执行时间 */
  TsMin: string;
  /** 帐号 */
  User: string;
  /** 样例Sql */
  ExampleSql: string | null;
  /** 账户的域名 */
  Host: string | null;
}

/** 按机型分类的规格配置 */
declare interface SpecConfig {
  /** 规格机型 */
  Machine: string;
  /** 规格列表 */
  SpecConfigInfos: SpecConfigInfo[];
}

/** 实例可售卖规格详细信息，创建实例和扩容实例时 NodeCount、Memory 确定售卖规格，硬盘大小可用区间为[MinStorage,MaxStorage] */
declare interface SpecConfigInfo {
  /** 节点个数，2 表示一主一从，3 表示一主二从 */
  NodeCount: number;
  /** 内存大小，单位 GB */
  Memory: number;
  /** 数据盘规格最小值，单位 GB */
  MinStorage: number;
  /** 数据盘规格最大值，单位 GB */
  MaxStorage: number;
  /** 推荐的使用场景 */
  SuitInfo: string;
  /** 产品类型 Id */
  Pid: number;
  /** 最大 Qps 值 */
  Qps: number;
  /** CPU核数 */
  Cpu: number;
}

/** 升级实例 -- 切分分片类型 */
declare interface SplitShardConfig {
  /** 分片ID数组 */
  ShardInstanceIds: string[];
  /** 数据切分比例，固定50% */
  SplitRate: number;
  /** 分片内存大小，单位 GB */
  ShardMemory: number;
  /** 分片存储大小，单位 GB */
  ShardStorage: number;
}

/** 描述一条sql日志的详细信息。 */
declare interface SqlLogItem {
  /** 本条日志在消息队列中的偏移量。 */
  Offset: number;
  /** 执行本条sql的用户。 */
  User: string;
  /** 执行本条sql的客户端IP+端口。 */
  Client: string;
  /** 数据库名称。 */
  DbName: string;
  /** 执行的sql语句。 */
  Sql: string;
  /** 返回的数据行数。 */
  SelectRowNum: number;
  /** 影响行数。 */
  AffectRowNum: number;
  /** Sql执行时间戳。 */
  Timestamp: number;
  /** Sql耗时，单位为毫秒。 */
  TimeCostMs: number;
  /** Sql返回码，0为成功。 */
  ResultCode: number;
}

/** 数据库列信息 */
declare interface TableColumn {
  /** 列名称 */
  Col: string;
  /** 列类型 */
  Type: string;
}

/** 用户任务信息 */
declare interface UserTaskInfo {
  /** 任务ID */
  Id: number;
  /** 用户账户ID */
  AppId: number;
  /** 任务状态，0-任务初始化中；1-任务运行中；2-任务成功；3-任务失败 */
  Status: number;
  /** 任务类型，0-实例回档；1-实例创建；2-实例扩容；3-实例迁移；4-实例删除；5-实例重启 */
  UserTaskType: number;
  /** 任务创建时间 */
  CreateTime: string;
  /** 任务结束时间 */
  EndTime: string;
  /** 任务错误信息 */
  ErrMsg: string;
  /** 客户端参数 */
  InputData: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 地域ID */
  RegionId: number;
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

declare interface ActiveHourDCDBInstanceRequest {
  /** 待升级的实例ID列表。形如：["dcdbt-ow728lmc"]，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceIds: string[];
}

declare interface ActiveHourDCDBInstanceResponse {
  /** 解隔离成功的实例id列表 */
  SuccessInstanceIds: string[];
  /** 解隔离失败的实例id列表 */
  FailedInstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：dcdb。 */
  Product: string;
  /** 要绑定的安全组ID，类似sg-efil73jd。 */
  SecurityGroupId: string;
  /** 被绑定的实例ID，类似tdsqlshard-lesecurk，支持指定多个实例。 */
  InstanceIds: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CancelDcnJobRequest {
  /** 灾备实例ID */
  InstanceId: string;
}

declare interface CancelDcnJobResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 异步任务流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CloseDBExtranetAccessRequest {
  /** 待关闭外网访问的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 是否IPv6，默认0 */
  Ipv6Flag?: number;
}

declare interface CloseDBExtranetAccessResponse {
  /** 异步任务ID，可通过 DescribeFlow 查询任务状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CopyAccountPrivilegesRequest {
  /** 实例 ID，形如：dcdbt-ow728lmc。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAccountRequest {
  /** 实例 ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** AccountName */
  UserName: string;
  /** 可以登录的主机，与mysql 账号的 host 格式一致，可以支持通配符，例如 %，10.%，10.20.%。 */
  Host: string;
  /** 账号密码，密码需要 8-32 个字符，不能以 '/' 开头，并且必须包含小写字母、大写字母、数字和符号()~!@#$%^&*-+=_|{}[]:<>,.?/。 */
  Password: string;
  /** 是否创建为只读账号，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败，3：只从备机读取。 */
  ReadOnly?: number;
  /** 账号备注，可以包含中文、英文字符、常见符号和数字，长度为0~256字符 */
  Description?: string;
  /** 如果备机延迟超过本参数设置值，系统将认为备机发生故障建议该参数值大于10。当ReadOnly选择1、2时该参数生效。 */
  DelayThresh?: number;
  /** 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。 */
  SlaveConst?: number;
  /** 用户最大连接数限制参数。不传或者传0表示为不限制，对应max_user_connections参数，目前10.1内核版本不支持设置。 */
  MaxUserConnections?: number;
}

declare interface CreateAccountResponse {
  /** 实例ID，透传入参。 */
  InstanceId: string;
  /** 用户名，透传入参。 */
  UserName: string;
  /** 允许访问的 host，透传入参。 */
  Host: string;
  /** 透传入参。 */
  ReadOnly: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDCDBInstanceRequest {
  /** 分片节点可用区分布，最多可填两个可用区。当分片规格为一主两从时，其中两个节点在第一个可用区。注意当前可售卖的可用区需要通过DescribeDCDBSaleInfo接口拉取。 */
  Zones: string[];
  /** 欲购买的时长，单位：月。 */
  Period: number;
  /** 分片内存大小，单位：GB，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardMemory: number;
  /** 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardStorage: number;
  /** 单个分片节点个数，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardNodeCount: number;
  /** 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。 */
  ShardCount: number;
  /** 欲购买实例的数量 */
  Count?: number;
  /** 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目 */
  ProjectId?: number;
  /** 虚拟私有网络 ID，不传或传空表示创建为基础网络 */
  VpcId?: string;
  /** 虚拟私有网络子网 ID，VpcId不为空时必填 */
  SubnetId?: string;
  /** 数据库引擎版本，当前可选：8.0.18，10.1.9，5.7.17。8.0.18 - MySQL 8.0.18；10.1.9 - Mariadb 10.1.9；5.7.17 - Percona 5.7.17。如果不填的话，默认为5.7.17，表示Percona 5.7.17。 */
  DbVersionId?: string;
  /** 是否自动使用代金券进行支付，默认不使用。 */
  AutoVoucher?: boolean;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 安全组id */
  SecurityGroupId?: string;
  /** 实例名称， 可以通过该字段自主的设置实例的名字 */
  InstanceName?: string;
  /** 是否支持IPv6 */
  Ipv6Flag?: number;
  /** 标签键值对数组 */
  ResourceTags?: ResourceTag[];
  /** 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。 */
  InitParams?: DBParamValue[];
  /** DCN源地域 */
  DcnRegion?: string;
  /** DCN源实例ID */
  DcnInstanceId?: string;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费，用户开通了预付费不停服特权也会进行自动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续费，需要设置为0 */
  AutoRenewFlag?: number;
  /** 安全组ids，安全组可以传数组形式，兼容之前SecurityGroupId参数 */
  SecurityGroupIds?: string[];
}

declare interface CreateDCDBInstanceResponse {
  /** 长订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName: string;
  /** 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。 */
  InstanceIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHourDCDBInstanceRequest {
  /** 分片内存大小，单位：GB，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardMemory: number;
  /** 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardStorage: number;
  /** 单个分片节点个数，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardNodeCount: number;
  /** 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。 */
  ShardCount: number;
  /** 欲购买实例的数量 */
  Count?: number;
  /** 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目 */
  ProjectId?: number;
  /** 虚拟私有网络 ID，不传或传空表示创建为基础网络 */
  VpcId?: string;
  /** 虚拟私有网络子网 ID，VpcId不为空时必填 */
  SubnetId?: string;
  /** 分片cpu大小，单位：核，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardCpu?: number;
  /** 数据库引擎版本，当前可选：10.0.10，10.1.9，5.7.17。10.0.10 - Mariadb 10.0.10；10.1.9 - Mariadb 10.1.9；5.7.17 - Percona 5.7.17。如果不填的话，默认为10.1.9，表示Mariadb 10.1.9。 */
  DbVersionId?: string;
  /** 分片节点可用区分布，最多可填两个可用区。当分片规格为一主两从时，其中两个节点在第一个可用区。 */
  Zones?: string[];
  /** 安全组id */
  SecurityGroupId?: string;
  /** 实例名称， 可以通过该字段自主的设置实例的名字 */
  InstanceName?: string;
  /** 是否支持IPv6 */
  Ipv6Flag?: number;
  /** 标签键值对数组 */
  ResourceTags?: ResourceTag[];
  /** DCN源地域 */
  DcnRegion?: string;
  /** DCN源实例ID */
  DcnInstanceId?: string;
  /** 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。 */
  InitParams?: DBParamValue[];
  /** 需要回档的源实例ID */
  RollbackInstanceId?: string;
  /** 回档时间 */
  RollbackTime?: string;
  /** 安全组ids，安全组可以传数组形式，兼容之前SecurityGroupId参数 */
  SecurityGroupIds?: string[];
}

declare interface CreateHourDCDBInstanceResponse {
  /** 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。 */
  InstanceIds: string[];
  /** 流程id，可以根据流程id查询创建进度 */
  FlowId: number;
  /** 订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAccountRequest {
  /** 实例ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 用户名 */
  UserName: string;
  /** 用户允许的访问 host */
  Host: string;
}

declare interface DeleteAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountPrivilegesRequest {
  /** 实例 ID，形如：dcdbt-ow7t8lmc。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 实例ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeAccountsResponse {
  /** 实例ID，透传入参。 */
  InstanceId: string;
  /** 实例用户列表。 */
  Users: DBAccount[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDBLogFilesRequest {
  /** 实例 ID，形如：dcdbt-ow7t8lmc。 */
  InstanceId: string;
  /** 分片 ID，形如：shard-7noic7tv */
  ShardId: string;
  /** 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。 */
  Type: number;
}

declare interface DescribeDBLogFilesResponse {
  /** 实例 ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 请求日志类型。1-binlog，2-冷备，3-errlog，4-slowlog。 */
  Type: number;
  /** 请求日志总数 */
  Total: number;
  /** 日志文件列表 */
  Files: LogFileInfo[];
  /** 如果是VPC网络的实例，做用本前缀加上URI为下载地址 */
  VpcPrefix: string;
  /** 如果是普通网络的实例，做用本前缀加上URI为下载地址 */
  NormalPrefix: string;
  /** 分片 ID，形如：shard-7noic7tv */
  ShardId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDBParametersRequest {
  /** 实例 ID，形如：dcdbt-ow7t8lmc。 */
  InstanceId: string;
}

declare interface DescribeDBParametersResponse {
  /** 实例 ID，形如：dcdbt-ow7t8lmc。 */
  InstanceId: string;
  /** 请求DB的当前参数值 */
  Params: ParamDesc[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：dcdb。 */
  Product: string;
  /** 实例ID。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups: SecurityGroup[];
  /** 实例VIP */
  VIP: string | null;
  /** 实例端口 */
  VPort: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDBSlowLogsRequest {
  /** 实例 ID，形如：dcdbt-hw0qj6m1 */
  InstanceId: string;
  /** 从结果的第几条数据开始返回 */
  Offset: number;
  /** 返回的结果条数 */
  Limit: number;
  /** 查询的起始时间，形如2016-07-23 14:55:20 */
  StartTime: string;
  /** 实例的分片ID，形如shard-53ima8ln */
  ShardId: string;
  /** 查询的结束时间，形如2016-08-22 14:55:20。如果不填，那么查询结束时间就是当前时间 */
  EndTime?: string;
  /** 要查询的具体数据库名称 */
  Db?: string;
  /** 排序指标，取值为query_time_sum或者query_count。不填默认按照query_time_sum排序 */
  OrderBy?: string;
  /** 排序类型，desc（降序）或者asc（升序）。不填默认desc排序 */
  OrderByType?: string;
  /** 是否查询从机的慢查询，0-主机; 1-从机。不填默认查询主机慢查询 */
  Slave?: number;
}

declare interface DescribeDBSlowLogsResponse {
  /** 所有语句锁时间总和 */
  LockTimeSum: number;
  /** 所有语句查询总次数 */
  QueryCount: number;
  /** 总记录数 */
  Total: number;
  /** 所有语句查询时间总和 */
  QueryTimeSum: number;
  /** 慢查询日志数据 */
  Data: SlowLogData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDBSyncModeRequest {
  /** 待修改同步模式的实例ID。形如：dcdbt-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeDBSyncModeResponse {
  /** 同步模式：0 异步，1 强同步， 2 强同步可退化 */
  SyncMode: number;
  /** 是否有修改流程在执行中：1 是， 0 否。 */
  IsModifying: number;
  /** 当前复制方式，0 异步，1 同步 */
  CurrentSyncMode: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDCDBInstanceNodeInfoRequest {
  /** 实例ID */
  InstanceId: string;
  /** 单次最多返回多少条，取值范围为(0-100]，默认为100 */
  Limit?: number;
  /** 返回数据的偏移值，默认为0 */
  Offset?: number;
}

declare interface DescribeDCDBInstanceNodeInfoResponse {
  /** 节点总个数 */
  TotalCount: number;
  /** 节点信息 */
  NodesInfo: BriefNodeInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDCDBInstancesRequest {
  /** 按照一个或者多个实例 ID 查询。实例 ID 形如：dcdbt-2t4cf98d */
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
  /** 返回数量，默认为 10，最大值为 100。 */
  Limit?: number;
  /** 1非独享集群，2独享集群， 0全部 */
  ExclusterType?: number;
  /** 标识是否使用ExclusterType字段, false不使用，true使用 */
  IsFilterExcluster?: boolean;
  /** 独享集群ID */
  ExclusterIds?: string[];
  /** 按标签key查询 */
  TagKeys?: string[];
  /** 实例类型过滤，1-独享实例，2-主实例，3-灾备实例，多个按逗号分隔 */
  FilterInstanceType?: string;
  /** 按实例状态筛选 */
  Status?: number[];
  /** 排除实例状态 */
  ExcludeStatus?: number[];
}

declare interface DescribeDCDBInstancesResponse {
  /** 符合条件的实例数量 */
  TotalCount: number;
  /** 实例详细信息列表 */
  Instances: DCDBInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDCDBPriceRequest {
  /** 欲新购实例的可用区ID。 */
  Zone: string;
  /** 欲购买实例的数量，目前支持购买1-10个实例 */
  Count: number;
  /** 欲购买的时长，单位：月。 */
  Period: number;
  /** 单个分片节点个数大小，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardNodeCount: number;
  /** 分片内存大小，单位：GB，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardMemory: number;
  /** 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec 查询实例规格获得。 */
  ShardStorage: number;
  /** 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。 */
  ShardCount: number;
  /** 付费类型。postpaid：按量付费 prepaid：预付费 */
  Paymode?: string;
  /** 价格金额单位，不传默认单位为分，取值： * pent：分* microPent：微分 */
  AmountUnit?: string;
}

declare interface DescribeDCDBPriceResponse {
  /** 原价 * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站为人民币，国际站为美元 */
  OriginalPrice: number;
  /** 实际价格，受折扣等影响，可能和原价不同* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站人民币，国际站美元 */
  Price: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDCDBRenewalPriceRequest {
  /** 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 续费时长，单位：月。不传则默认为1个月。 */
  Period?: number;
  /** 价格金额单位，不传默认单位为分，取值： * pent：分* microPent：微分 */
  AmountUnit?: string;
}

declare interface DescribeDCDBRenewalPriceResponse {
  /** 原价 * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站为人民币，国际站为美元 */
  OriginalPrice: number;
  /** 实际价格，受折扣等影响，可能和原价不同* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站人民币，国际站美元 */
  Price: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDCDBSaleInfoRequest {
}

declare interface DescribeDCDBSaleInfoResponse {
  /** 可售卖地域信息列表 */
  RegionList: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDCDBShardsRequest {
  /** 实例ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 分片ID列表。 */
  ShardInstanceIds?: string[];
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 排序字段， 目前仅支持 createtime */
  OrderBy?: string;
  /** 排序类型， desc 或者 asc */
  OrderByType?: string;
}

declare interface DescribeDCDBShardsResponse {
  /** 符合条件的分片数量 */
  TotalCount: number;
  /** 分片信息列表 */
  Shards: DCDBShardInfo[];
  /** 灾备标志，0-无，1-主实例，2-灾备实例 */
  DcnFlag: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDCDBUpgradePriceRequest {
  /** 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 升级类型，取值范围: ADD: 新增分片 EXPAND: 升级实例中的已有分片 SPLIT: 将已有分片中的数据切分到新增分片上 */
  UpgradeType: string;
  /** 新增分片配置，当UpgradeType为ADD时生效。 */
  AddShardConfig?: AddShardConfig;
  /** 扩容分片配置，当UpgradeType为EXPAND时生效。 */
  ExpandShardConfig?: ExpandShardConfig;
  /** 切分分片配置，当UpgradeType为SPLIT时生效。 */
  SplitShardConfig?: SplitShardConfig;
  /** 价格金额单位，不传默认单位为分，取值： * pent：分* microPent：微分 */
  AmountUnit?: string;
}

declare interface DescribeDCDBUpgradePriceResponse {
  /** 原价 * 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站为人民币，国际站为美元 */
  OriginalPrice: number;
  /** 实际价格，受折扣等影响，可能和原价不同* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述* 币种：国内站人民币，国际站美元 */
  Price: number;
  /** 变配明细计算公式 */
  Formula: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDcnDetailRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDcnDetailResponse {
  /** DCN同步详情 */
  DcnDetails: DcnDetailItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFileDownloadUrlRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例分片ID */
  ShardId: string;
  /** 不带签名的文件路径 */
  FilePath: string;
}

declare interface DescribeFileDownloadUrlResponse {
  /** 带签名的下载连接 */
  PreSignedUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFlowRequest {
  /** 异步请求接口返回的任务流程号。 */
  FlowId: number;
}

declare interface DescribeFlowResponse {
  /** 流程状态，0：成功，1：失败，2：运行中 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：dcdb。 */
  Product: string;
  /** 项目ID。 */
  ProjectId?: number;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups: SecurityGroup[];
  /** 安全组个数。 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectsRequest {
}

declare interface DescribeProjectsResponse {
  /** 项目列表 */
  Projects: Project[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeShardSpecRequest {
}

declare interface DescribeShardSpecResponse {
  /** 按机型分类的可售卖规格列表 */
  SpecConfig: SpecConfig[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSqlLogsRequest {
  /** 实例 ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** SQL日志偏移。 */
  Offset?: number;
  /** 拉取数量（0-10000，为0时拉取总数信息）。 */
  Limit?: number;
}

declare interface DescribeSqlLogsResponse {
  /** 当前消息队列中的sql日志条目数。 */
  TotalCount: number;
  /** 消息队列中的sql日志起始偏移。 */
  StartOffset: number;
  /** 消息队列中的sql日志结束偏移。 */
  EndOffset: number;
  /** 返回的第一条sql日志的偏移。 */
  Offset: number;
  /** 返回的sql日志数量。 */
  Count: number;
  /** Sql日志列表。 */
  SqlItems: SqlLogItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserTasksRequest {
  /** 任务的状态列表。0-任务启动中；1-任务运行中；2-任务成功；3-任务失败 */
  Statuses?: number[];
  /** 实例ID列表 */
  InstanceIds?: string[];
  /** 任务类型列表，当前支持的任务类型有：0-回档任务；1-创建实例任务；2-扩容任务；3-迁移任务；4-删除实例任务；5-重启任务 */
  FlowTypes?: number[];
  /** 任务的创建时间 */
  StartTime?: string;
  /** 任务的结束时间 */
  EndTime?: string;
  /** 任务ID的数组 */
  UTaskIds?: number[];
  /** 每次最多返回多少条任务，取值范围为(0,100]，不传的话默认值为20 */
  Limit?: number;
  /** 返回任务默认是按照创建时间降序排列，从偏移值Offset处开始返回 */
  Offset?: number;
}

declare interface DescribeUserTasksResponse {
  /** 任务总数 */
  TotalCount: number;
  /** 任务列表 */
  FlowSet: UserTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroyDCDBInstanceRequest {
  /** 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DestroyDCDBInstanceResponse {
  /** 实例 ID，与入参InstanceId一致。 */
  InstanceId: string;
  /** 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/557/56485)。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroyHourDCDBInstanceRequest {
  /** 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface DestroyHourDCDBInstanceResponse {
  /** 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/557/56485)。 */
  FlowId: number;
  /** 实例 ID，与入参InstanceId一致。 */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：dcdb。 */
  Product: string;
  /** 安全组Id。 */
  SecurityGroupId: string;
  /** 实例ID列表，一个或者多个实例Id组成的数组。 */
  InstanceIds: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface FlushBinlogRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface FlushBinlogResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GrantAccountPrivilegesRequest {
  /** 实例 ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 登录用户名。 */
  UserName: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数 */
  DbName: string;
  /** 全局权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER，SHOW DATABASES，REPLICATION CLIENT，REPLICATION SLAVE库权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER 表权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE VIEW，SHOW VIEW，TRIGGER 字段权限： INSERT，REFERENCES，SELECT，UPDATE */
  Privileges: string[];
  /** 类型,可以填入 table 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示设置该数据库权限（即db.\*），此时忽略 Object 参数 */
  Type?: string;
  /** 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空 */
  Object?: string;
  /** 当 Type=table 时，ColName 为 \* 表示对表授权，如果为具体字段名，表示对字段授权 */
  ColName?: string;
}

declare interface GrantAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InitDCDBInstancesRequest {
  /** 待初始化的实例ID列表，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceIds: string[];
  /** 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步）。 */
  Params: DBParamValue[];
}

declare interface InitDCDBInstancesResponse {
  /** 异步任务ID，可通过 DescribeFlow 查询任务状态。 */
  FlowIds: number[];
  /** 透传入参。 */
  InstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IsolateDedicatedDBInstanceRequest {
  /** 实例 Id，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
}

declare interface IsolateDedicatedDBInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IsolateHourDCDBInstanceRequest {
  /** 实例uuid列表 */
  InstanceIds: string[];
}

declare interface IsolateHourDCDBInstanceResponse {
  /** 隔离成功的实例id列表 */
  SuccessInstanceIds: string[];
  /** 隔离失败的实例id列表 */
  FailedInstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface KillSessionRequest {
  /** 实例ID */
  InstanceId: string;
  /** 会话ID列表 */
  SessionId: number[];
  /** 分片ID，与ShardSerialId设置一个 */
  ShardId?: string;
  /** 分片序列ID，与ShardId设置一个 */
  ShardSerialId?: string;
}

declare interface KillSessionResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAccountDescriptionRequest {
  /** 实例 ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 登录用户名。 */
  UserName: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 新的账号备注，长度 0~256。 */
  Description: string;
}

declare interface ModifyAccountDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNameRequest {
  /** 实例ID，形如tdsql-hdaprz0v */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
}

declare interface ModifyDBInstanceNameResponse {
  /** 实例ID */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：dcdb。 */
  Product: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIds: string[];
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDBInstancesProjectRequest {
  /** 待修改的实例ID列表。实例 ID 形如：dcdbt-ow728lmc。 */
  InstanceIds: string[];
  /** 要分配的项目 ID，可以通过 DescribeProjects 查询项目列表接口获取。 */
  ProjectId: number;
}

declare interface ModifyDBInstancesProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDBParametersRequest {
  /** 实例 ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 参数列表，每一个元素是Param和Value的组合 */
  Params: DBParamValue[];
}

declare interface ModifyDBParametersResponse {
  /** 实例 ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 各参数修改结果 */
  Result: ParamModifyResult[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDBSyncModeRequest {
  /** 待修改同步模式的实例ID。形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 同步模式：0 异步，1 强同步， 2 强同步可退化 */
  SyncMode: number;
}

declare interface ModifyDBSyncModeResponse {
  /** 异步任务Id，可通过 DescribeFlow 查询任务状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceVportRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例VPORT */
  Vport: number;
}

declare interface ModifyInstanceVportResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRealServerAccessStrategyRequest {
  /** 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
  /** RS就近模式, 0-无策略, 1-可用区就近访问。 */
  RsAccessStrategy: number;
}

declare interface ModifyRealServerAccessStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OpenDBExtranetAccessRequest {
  /** 待开放外网访问的实例ID。形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 是否IPv6，默认0 */
  Ipv6Flag?: number;
}

declare interface OpenDBExtranetAccessResponse {
  /** 异步任务ID，可通过 DescribeFlow 查询任务状态。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RenewDCDBInstanceRequest {
  /** 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 续费时长，单位：月。 */
  Period: number;
  /** 是否自动使用代金券进行支付，默认不使用。 */
  AutoVoucher?: boolean;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
}

declare interface RenewDCDBInstanceResponse {
  /** 长订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 实例 ID，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
  /** 登录用户名。 */
  UserName: string;
  /** 用户允许的访问 host，用户名+host唯一确定一个账号。 */
  Host: string;
  /** 新密码，由字母、数字或常见符号组成，不能包含分号、单引号和双引号，长度为6~32位。 */
  Password: string;
}

declare interface ResetAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwitchDBInstanceHARequest {
  /** 实例Id，形如 tdsql-ow728lmc。 */
  InstanceId: string;
  /** 切换的目标区域，会自动选择该可用区中延迟最低的节点。 */
  Zone: string;
}

declare interface SwitchDBInstanceHAResponse {
  /** 异步流程Id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TerminateDedicatedDBInstanceRequest {
  /** 实例 Id，形如：dcdbt-ow728lmc。 */
  InstanceId: string;
}

declare interface TerminateDedicatedDBInstanceResponse {
  /** 异步流程Id */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeDCDBInstanceRequest {
  /** 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。 */
  InstanceId: string;
  /** 升级类型，取值范围: ADD: 新增分片 EXPAND: 升级实例中的已有分片 SPLIT: 将已有分片中的数据切分到新增分片上 */
  UpgradeType: string;
  /** 新增分片配置，当UpgradeType为ADD时生效。 */
  AddShardConfig?: AddShardConfig;
  /** 扩容分片配置，当UpgradeType为EXPAND时生效。 */
  ExpandShardConfig?: ExpandShardConfig;
  /** 切分分片配置，当UpgradeType为SPLIT时生效。 */
  SplitShardConfig?: SplitShardConfig;
  /** 是否自动使用代金券进行支付，默认不使用。 */
  AutoVoucher?: boolean;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 变更部署时指定的新可用区列表，第1个为主可用区，其余为从可用区 */
  Zones?: string[];
}

declare interface UpgradeDCDBInstanceResponse {
  /** 长订单号。可以据此调用 DescribeOrders 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。 */
  DealName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Dcdb TDSQL MySQL 版} */
declare interface Dcdb {
  (): Versions;
  /** {@link ActiveHourDCDBInstance 解隔离DCDB后付费实例}({@link ActiveHourDCDBInstanceRequest 请求参数}): {@link ActiveHourDCDBInstanceResponse 返回参数} */
  ActiveHourDCDBInstance(data: ActiveHourDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ActiveHourDCDBInstanceResponse>;
  /** {@link AssociateSecurityGroups 安全组批量绑定云资源}({@link AssociateSecurityGroupsRequest 请求参数}): {@link AssociateSecurityGroupsResponse 返回参数} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** {@link CancelDcnJob 取消DCN同步}({@link CancelDcnJobRequest 请求参数}): {@link CancelDcnJobResponse 返回参数} */
  CancelDcnJob(data: CancelDcnJobRequest, config?: AxiosRequestConfig): AxiosPromise<CancelDcnJobResponse>;
  /** {@link CloneAccount 克隆实例账户}({@link CloneAccountRequest 请求参数}): {@link CloneAccountResponse 返回参数} */
  CloneAccount(data: CloneAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CloneAccountResponse>;
  /** {@link CloseDBExtranetAccess 关闭外网访问}({@link CloseDBExtranetAccessRequest 请求参数}): {@link CloseDBExtranetAccessResponse 返回参数} */
  CloseDBExtranetAccess(data: CloseDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<CloseDBExtranetAccessResponse>;
  /** {@link CopyAccountPrivileges 复制账号权限}({@link CopyAccountPrivilegesRequest 请求参数}): {@link CopyAccountPrivilegesResponse 返回参数} */
  CopyAccountPrivileges(data: CopyAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<CopyAccountPrivilegesResponse>;
  /** {@link CreateAccount 创建账号}({@link CreateAccountRequest 请求参数}): {@link CreateAccountResponse 返回参数} */
  CreateAccount(data: CreateAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountResponse>;
  /** {@link CreateDCDBInstance 创建DCDB分布式实例}({@link CreateDCDBInstanceRequest 请求参数}): {@link CreateDCDBInstanceResponse 返回参数} */
  CreateDCDBInstance(data: CreateDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDCDBInstanceResponse>;
  /** {@link CreateHourDCDBInstance 创建DCDB后付费实例}({@link CreateHourDCDBInstanceRequest 请求参数}): {@link CreateHourDCDBInstanceResponse 返回参数} */
  CreateHourDCDBInstance(data: CreateHourDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHourDCDBInstanceResponse>;
  /** {@link DeleteAccount 删除账号}({@link DeleteAccountRequest 请求参数}): {@link DeleteAccountResponse 返回参数} */
  DeleteAccount(data: DeleteAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountResponse>;
  /** {@link DescribeAccountPrivileges 查询账号权限}({@link DescribeAccountPrivilegesRequest 请求参数}): {@link DescribeAccountPrivilegesResponse 返回参数} */
  DescribeAccountPrivileges(data: DescribeAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountPrivilegesResponse>;
  /** {@link DescribeAccounts 查询账号列表}({@link DescribeAccountsRequest 请求参数}): {@link DescribeAccountsResponse 返回参数} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** {@link DescribeDBLogFiles 获取日志列表}({@link DescribeDBLogFilesRequest 请求参数}): {@link DescribeDBLogFilesResponse 返回参数} */
  DescribeDBLogFiles(data: DescribeDBLogFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBLogFilesResponse>;
  /** {@link DescribeDBParameters 查看数据库参数}({@link DescribeDBParametersRequest 请求参数}): {@link DescribeDBParametersResponse 返回参数} */
  DescribeDBParameters(data: DescribeDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBParametersResponse>;
  /** {@link DescribeDBSecurityGroups 查询实例安全组信息}({@link DescribeDBSecurityGroupsRequest 请求参数}): {@link DescribeDBSecurityGroupsResponse 返回参数} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** {@link DescribeDBSlowLogs 查询慢查询日志列表}({@link DescribeDBSlowLogsRequest 请求参数}): {@link DescribeDBSlowLogsResponse 返回参数} */
  DescribeDBSlowLogs(data: DescribeDBSlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSlowLogsResponse>;
  /** {@link DescribeDBSyncMode 查询同步模式}({@link DescribeDBSyncModeRequest 请求参数}): {@link DescribeDBSyncModeResponse 返回参数} */
  DescribeDBSyncMode(data: DescribeDBSyncModeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSyncModeResponse>;
  /** {@link DescribeDCDBInstanceNodeInfo 获取实例节点信息}({@link DescribeDCDBInstanceNodeInfoRequest 请求参数}): {@link DescribeDCDBInstanceNodeInfoResponse 返回参数} */
  DescribeDCDBInstanceNodeInfo(data: DescribeDCDBInstanceNodeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDCDBInstanceNodeInfoResponse>;
  /** {@link DescribeDCDBInstances 查询实例列表}({@link DescribeDCDBInstancesRequest 请求参数}): {@link DescribeDCDBInstancesResponse 返回参数} */
  DescribeDCDBInstances(data?: DescribeDCDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDCDBInstancesResponse>;
  /** {@link DescribeDCDBPrice 新购分布式数据库实例询价}({@link DescribeDCDBPriceRequest 请求参数}): {@link DescribeDCDBPriceResponse 返回参数} */
  DescribeDCDBPrice(data: DescribeDCDBPriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDCDBPriceResponse>;
  /** {@link DescribeDCDBRenewalPrice 续费实例询价}({@link DescribeDCDBRenewalPriceRequest 请求参数}): {@link DescribeDCDBRenewalPriceResponse 返回参数} */
  DescribeDCDBRenewalPrice(data: DescribeDCDBRenewalPriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDCDBRenewalPriceResponse>;
  /** {@link DescribeDCDBSaleInfo 查询分布式数据库可售卖地域和可用区信息}({@link DescribeDCDBSaleInfoRequest 请求参数}): {@link DescribeDCDBSaleInfoResponse 返回参数} */
  DescribeDCDBSaleInfo(data?: DescribeDCDBSaleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDCDBSaleInfoResponse>;
  /** {@link DescribeDCDBShards 查询分片信息}({@link DescribeDCDBShardsRequest 请求参数}): {@link DescribeDCDBShardsResponse 返回参数} */
  DescribeDCDBShards(data: DescribeDCDBShardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDCDBShardsResponse>;
  /** {@link DescribeDCDBUpgradePrice 查询变配分布式数据库实例价格}({@link DescribeDCDBUpgradePriceRequest 请求参数}): {@link DescribeDCDBUpgradePriceResponse 返回参数} */
  DescribeDCDBUpgradePrice(data: DescribeDCDBUpgradePriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDCDBUpgradePriceResponse>;
  /** {@link DescribeDatabaseObjects 查询数据库对象列表}({@link DescribeDatabaseObjectsRequest 请求参数}): {@link DescribeDatabaseObjectsResponse 返回参数} */
  DescribeDatabaseObjects(data: DescribeDatabaseObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseObjectsResponse>;
  /** {@link DescribeDatabaseTable 查询数据库表信息}({@link DescribeDatabaseTableRequest 请求参数}): {@link DescribeDatabaseTableResponse 返回参数} */
  DescribeDatabaseTable(data: DescribeDatabaseTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseTableResponse>;
  /** {@link DescribeDatabases 查询数据库列表}({@link DescribeDatabasesRequest 请求参数}): {@link DescribeDatabasesResponse 返回参数} */
  DescribeDatabases(data: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** {@link DescribeDcnDetail 获取实例灾备详情}({@link DescribeDcnDetailRequest 请求参数}): {@link DescribeDcnDetailResponse 返回参数} */
  DescribeDcnDetail(data: DescribeDcnDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDcnDetailResponse>;
  /** {@link DescribeFileDownloadUrl 获取备份或日志的下载连接}({@link DescribeFileDownloadUrlRequest 请求参数}): {@link DescribeFileDownloadUrlResponse 返回参数} */
  DescribeFileDownloadUrl(data: DescribeFileDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileDownloadUrlResponse>;
  /** {@link DescribeFlow 查询流程状态}({@link DescribeFlowRequest 请求参数}): {@link DescribeFlowResponse 返回参数} */
  DescribeFlow(data: DescribeFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowResponse>;
  /** {@link DescribeOrders 查询订单信息}({@link DescribeOrdersRequest 请求参数}): {@link DescribeOrdersResponse 返回参数} */
  DescribeOrders(data: DescribeOrdersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrdersResponse>;
  /** {@link DescribeProjectSecurityGroups 查询项目安全组信息}({@link DescribeProjectSecurityGroupsRequest 请求参数}): {@link DescribeProjectSecurityGroupsResponse 返回参数} */
  DescribeProjectSecurityGroups(data: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** {@link DescribeProjects 查询项目列表}({@link DescribeProjectsRequest 请求参数}): {@link DescribeProjectsResponse 返回参数} */
  DescribeProjects(data?: DescribeProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectsResponse>;
  /** {@link DescribeShardSpec 查询分布式数据库可售卖分片规格}({@link DescribeShardSpecRequest 请求参数}): {@link DescribeShardSpecResponse 返回参数} */
  DescribeShardSpec(data?: DescribeShardSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShardSpecResponse>;
  /** {@link DescribeSqlLogs 获取SQL日志}({@link DescribeSqlLogsRequest 请求参数}): {@link DescribeSqlLogsResponse 返回参数} */
  DescribeSqlLogs(data: DescribeSqlLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSqlLogsResponse>;
  /** {@link DescribeUserTasks 拉取用户任务列表}({@link DescribeUserTasksRequest 请求参数}): {@link DescribeUserTasksResponse 返回参数} */
  DescribeUserTasks(data?: DescribeUserTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserTasksResponse>;
  /** {@link DestroyDCDBInstance 销毁已隔离的包年包月实例}({@link DestroyDCDBInstanceRequest 请求参数}): {@link DestroyDCDBInstanceResponse 返回参数} */
  DestroyDCDBInstance(data: DestroyDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyDCDBInstanceResponse>;
  /** {@link DestroyHourDCDBInstance 销毁按量计费实例}({@link DestroyHourDCDBInstanceRequest 请求参数}): {@link DestroyHourDCDBInstanceResponse 返回参数} */
  DestroyHourDCDBInstance(data: DestroyHourDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyHourDCDBInstanceResponse>;
  /** {@link DisassociateSecurityGroups 安全组批量解绑云资源}({@link DisassociateSecurityGroupsRequest 请求参数}): {@link DisassociateSecurityGroupsResponse 返回参数} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** {@link FlushBinlog 切分Binlog}({@link FlushBinlogRequest 请求参数}): {@link FlushBinlogResponse 返回参数} */
  FlushBinlog(data: FlushBinlogRequest, config?: AxiosRequestConfig): AxiosPromise<FlushBinlogResponse>;
  /** {@link GrantAccountPrivileges 设置账号权限}({@link GrantAccountPrivilegesRequest 请求参数}): {@link GrantAccountPrivilegesResponse 返回参数} */
  GrantAccountPrivileges(data: GrantAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<GrantAccountPrivilegesResponse>;
  /** {@link InitDCDBInstances 初始化实例}({@link InitDCDBInstancesRequest 请求参数}): {@link InitDCDBInstancesResponse 返回参数} */
  InitDCDBInstances(data: InitDCDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InitDCDBInstancesResponse>;
  /** {@link IsolateDedicatedDBInstance 隔离独享云数据库实例}({@link IsolateDedicatedDBInstanceRequest 请求参数}): {@link IsolateDedicatedDBInstanceResponse 返回参数} */
  IsolateDedicatedDBInstance(data: IsolateDedicatedDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDedicatedDBInstanceResponse>;
  /** {@link IsolateHourDCDBInstance 隔离DCDB后付费实例}({@link IsolateHourDCDBInstanceRequest 请求参数}): {@link IsolateHourDCDBInstanceResponse 返回参数} */
  IsolateHourDCDBInstance(data: IsolateHourDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateHourDCDBInstanceResponse>;
  /** {@link KillSession 杀死指定会话}({@link KillSessionRequest 请求参数}): {@link KillSessionResponse 返回参数} */
  KillSession(data: KillSessionRequest, config?: AxiosRequestConfig): AxiosPromise<KillSessionResponse>;
  /** {@link ModifyAccountDescription 修改数据库账号备注}({@link ModifyAccountDescriptionRequest 请求参数}): {@link ModifyAccountDescriptionResponse 返回参数} */
  ModifyAccountDescription(data: ModifyAccountDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountDescriptionResponse>;
  /** {@link ModifyDBInstanceName 修改实例名字}({@link ModifyDBInstanceNameRequest 请求参数}): {@link ModifyDBInstanceNameResponse 返回参数} */
  ModifyDBInstanceName(data: ModifyDBInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNameResponse>;
  /** {@link ModifyDBInstanceSecurityGroups 修改云数据库安全组}({@link ModifyDBInstanceSecurityGroupsRequest 请求参数}): {@link ModifyDBInstanceSecurityGroupsResponse 返回参数} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** {@link ModifyDBInstancesProject 修改实例所属项目}({@link ModifyDBInstancesProjectRequest 请求参数}): {@link ModifyDBInstancesProjectResponse 返回参数} */
  ModifyDBInstancesProject(data: ModifyDBInstancesProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstancesProjectResponse>;
  /** {@link ModifyDBParameters 修改数据库参数}({@link ModifyDBParametersRequest 请求参数}): {@link ModifyDBParametersResponse 返回参数} */
  ModifyDBParameters(data: ModifyDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBParametersResponse>;
  /** {@link ModifyDBSyncMode 修改同步模式}({@link ModifyDBSyncModeRequest 请求参数}): {@link ModifyDBSyncModeResponse 返回参数} */
  ModifyDBSyncMode(data: ModifyDBSyncModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBSyncModeResponse>;
  /** {@link ModifyInstanceNetwork 修改实例所属网络}({@link ModifyInstanceNetworkRequest 请求参数}): {@link ModifyInstanceNetworkResponse 返回参数} */
  ModifyInstanceNetwork(data: ModifyInstanceNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNetworkResponse>;
  /** {@link ModifyInstanceVip 修改实例Vip}({@link ModifyInstanceVipRequest 请求参数}): {@link ModifyInstanceVipResponse 返回参数} */
  ModifyInstanceVip(data: ModifyInstanceVipRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceVipResponse>;
  /** {@link ModifyInstanceVport 修改实例VPORT}({@link ModifyInstanceVportRequest 请求参数}): {@link ModifyInstanceVportResponse 返回参数} */
  ModifyInstanceVport(data: ModifyInstanceVportRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceVportResponse>;
  /** {@link ModifyRealServerAccessStrategy 修改RS的访问策略}({@link ModifyRealServerAccessStrategyRequest 请求参数}): {@link ModifyRealServerAccessStrategyResponse 返回参数} */
  ModifyRealServerAccessStrategy(data: ModifyRealServerAccessStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRealServerAccessStrategyResponse>;
  /** {@link OpenDBExtranetAccess 开通外网访问}({@link OpenDBExtranetAccessRequest 请求参数}): {@link OpenDBExtranetAccessResponse 返回参数} */
  OpenDBExtranetAccess(data: OpenDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<OpenDBExtranetAccessResponse>;
  /** {@link RenewDCDBInstance 续费分布式数据库实例}({@link RenewDCDBInstanceRequest 请求参数}): {@link RenewDCDBInstanceResponse 返回参数} */
  RenewDCDBInstance(data: RenewDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDCDBInstanceResponse>;
  /** {@link ResetAccountPassword 重置账号密码}({@link ResetAccountPasswordRequest 请求参数}): {@link ResetAccountPasswordResponse 返回参数} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** {@link SwitchDBInstanceHA 实例主备切换}({@link SwitchDBInstanceHARequest 请求参数}): {@link SwitchDBInstanceHAResponse 返回参数} */
  SwitchDBInstanceHA(data: SwitchDBInstanceHARequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDBInstanceHAResponse>;
  /** {@link TerminateDedicatedDBInstance 销毁独享分布式数据库实例}({@link TerminateDedicatedDBInstanceRequest 请求参数}): {@link TerminateDedicatedDBInstanceResponse 返回参数} */
  TerminateDedicatedDBInstance(data: TerminateDedicatedDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateDedicatedDBInstanceResponse>;
  /** {@link UpgradeDCDBInstance 升级分布式数据库}({@link UpgradeDCDBInstanceRequest 请求参数}): {@link UpgradeDCDBInstanceResponse 返回参数} */
  UpgradeDCDBInstance(data: UpgradeDCDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDCDBInstanceResponse>;
}

export declare type Versions = ["2018-04-11"];

export default Dcdb;
