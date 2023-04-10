/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 用户权限 */
declare interface Auth {
  /** 当前账号具有的权限信息。0：无权限。1：只读。2：只写。3：读写。 */
  Mask: number;
  /** 指具有当前账号权限的数据库名。* ：表示所有数据库。db.name：表示特定name的数据库。 */
  NameSpace: string;
}

/** 备份下载任务 */
declare interface BackupDownloadTask {
  /** 任务创建时间 */
  CreateTime: string;
  /** 备份文件名 */
  BackupName: string;
  /** 分片名称 */
  ReplicaSetId: string;
  /** 备份数据大小，单位为字节 */
  BackupSize: number;
  /** 任务状态。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试 */
  Status: number;
  /** 任务进度百分比 */
  Percent: number;
  /** 耗时，单位为秒 */
  TimeSpend: number;
  /** 备份数据下载链接 */
  Url: string;
  /** 备份文件备份类型，0-逻辑备份，1-物理备份 */
  BackupMethod: number;
  /** 发起备份时指定的备注信息 */
  BackupDesc: string | null;
}

/** 创建备份下载任务结果 */
declare interface BackupDownloadTaskStatus {
  /** 分片名 */
  ReplicaSetId: string;
  /** 任务当前状态。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试 */
  Status: number;
}

/** 备份信息 */
declare interface BackupInfo {
  /** 实例ID */
  InstanceId: string;
  /** 备份方式，0-自动备份，1-手动备份 */
  BackupType: number;
  /** 备份名称 */
  BackupName: string;
  /** 备份备注 */
  BackupDesc: string | null;
  /** 备份文件大小，单位KB */
  BackupSize: number | null;
  /** 备份开始时间 */
  StartTime: string | null;
  /** 备份结束时间 */
  EndTime: string | null;
  /** 备份状态，1-备份中，2-备份成功 */
  Status: number;
  /** 备份方法，0-逻辑备份，1-物理备份 */
  BackupMethod: number;
}

/** 客户端连接信息，包括客户端IP和连接数 */
declare interface ClientConnection {
  /** 连接的客户端IP */
  IP: string;
  /** 对应客户端IP的连接数 */
  Count: number;
  /** 是否为内部ip */
  InternalService: boolean;
}

/** 云数据库实例当前操作 */
declare interface CurrentOp {
  /** 操作序号 */
  OpId: number | null;
  /** 操作所在的命名空间，形式如db.collection */
  Ns: string | null;
  /** 操作执行语句 */
  Query: string | null;
  /** 操作类型，可能的取值：aggregate、count、delete、distinct、find、findAndModify、getMore、insert、mapReduce、update和command */
  Op: string | null;
  /** 操作所在的分片名称 */
  ReplicaSetName: string;
  /** 筛选条件，节点状态，可能的取值为：Primary、Secondary */
  State: string | null;
  /** 操作详细信息 */
  Operation: string | null;
  /** 操作所在的节点名称 */
  NodeName: string;
  /** 操作已执行时间（ms） */
  MicrosecsRunning: number | null;
}

/** 实例信息 */
declare interface DBInstanceInfo {
  /** 实例ID */
  InstanceId: string;
  /** 地域信息 */
  Region: string;
}

/** 数据库实例价格 */
declare interface DBInstancePrice {
  /** 单价 */
  UnitPrice: number | null;
  /** 原价 */
  OriginalPrice: number;
  /** 折扣加 */
  DiscountPrice: number;
}

/** 描述了实例的计费模式 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。（InquirePriceRenewDBInstances，RenewDBInstances调用时必填） */
  Period?: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。（InquirePriceRenewDBInstances，RenewDBInstances调用时必填） */
  RenewFlag?: string;
}

/** 实例详情 */
declare interface InstanceDetail {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 付费类型，可能的返回值：1-包年包月；0-按量计费 */
  PayMode: number;
  /** 项目ID。 */
  ProjectId: number;
  /** 集群类型，可能的返回值：0-副本集实例，1-分片实例。 */
  ClusterType: number;
  /** 地域信息。 */
  Region: string;
  /** 可用区信息。 */
  Zone: string;
  /** 网络类型，可能的返回值：0-基础网络，1-私有网络 */
  NetType: number;
  /** 私有网络的ID。 */
  VpcId: string;
  /** 私有网络的子网ID。 */
  SubnetId: string;
  /** 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期。 */
  Status: number;
  /** 实例IP。 */
  Vip: string;
  /** 端口号。 */
  Vport: number;
  /** 实例创建时间。 */
  CreateTime: string;
  /** 实例到期时间。 */
  DeadLine: string;
  /** 实例版本信息。 */
  MongoVersion: string;
  /** 实例内存规格，单位为MB。 */
  Memory: number;
  /** 实例磁盘规格，单位为MB。 */
  Volume: number;
  /** 实例CPU核心数。 */
  CpuNum: number;
  /** 实例机器类型。 */
  MachineType: string;
  /** 实例从节点数。 */
  SecondaryNum: number;
  /** 实例分片数。 */
  ReplicationSetNum: number;
  /** 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费。 */
  AutoRenewFlag: number;
  /** 已用容量，单位MB。 */
  UsedVolume: number;
  /** 维护窗口起始时间。 */
  MaintenanceStart: string;
  /** 维护窗口结束时间。 */
  MaintenanceEnd: string;
  /** 分片信息。 */
  ReplicaSets: ShardInfo[];
  /** 只读实例信息。 */
  ReadonlyInstances: DBInstanceInfo[];
  /** 灾备实例信息。 */
  StandbyInstances: DBInstanceInfo[];
  /** 临时实例信息。 */
  CloneInstances: DBInstanceInfo[];
  /** 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息。 */
  RelatedInstance: DBInstanceInfo;
  /** 实例标签信息集合。 */
  Tags: TagInfo[];
  /** 实例版本标记。 */
  InstanceVer: number;
  /** 实例版本标记。 */
  ClusterVer: number;
  /** 协议信息，可能的返回值：1-mongodb，2-dynamodb。 */
  Protocol: number;
  /** 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例 */
  InstanceType: number;
  /** 实例状态描述 */
  InstanceStatusDesc: string;
  /** 实例对应的物理实例id，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取 */
  RealInstanceId: string;
  /** mongos节点个数。 */
  MongosNodeNum: number | null;
  /** mongos节点内存。 */
  MongosMemory: number | null;
  /** mongos节点CPU核数。 */
  MongosCpuNum: number | null;
  /** Config Server节点个数。 */
  ConfigServerNodeNum: number | null;
  /** Config Server节点内存。 */
  ConfigServerMemory: number | null;
  /** Config Server节点磁盘大小。 */
  ConfigServerVolume: number | null;
  /** Config Server节点CPU核数。 */
  ConfigServerCpuNum: number | null;
  /** readonly节点个数。 */
  ReadonlyNodeNum: number | null;
}

/** 实例可修改参数枚举类型集合。 */
declare interface InstanceEnumParam {
  /** 参数当前值 */
  CurrentValue: string;
  /** 默认值 */
  DefaultValue: string;
  /** 枚举值，所有支持的值 */
  EnumValue: string[];
  /** 是否需要重启生效 1:需要重启后生效；0：无需重启，设置成功即可生效； */
  NeedRestart: string;
  /** 参数名称 */
  ParamName: string;
  /** 中英文说明 */
  Tips: string[];
  /** 参数值类型说明 */
  ValueType: string;
  /** 是否为运行中参数值 1:运行中参数值；0：非运行中参数值； */
  Status: number;
}

/** 实例可修改参数integer类型集合。 */
declare interface InstanceIntegerParam {
  /** 当前值 */
  CurrentValue: string;
  /** 默认值 */
  DefaultValue: string;
  /** 最大值 */
  Max: string;
  /** 最小值 */
  Min: string;
  /** 是否需要重启生效 1:需要重启后生效；0：无需重启，设置成功即可生效； */
  NeedRestart: string;
  /** 参数名称 */
  ParamName: string;
  /** 参数说明 */
  Tips: string[];
  /** 参数类型 */
  ValueType: string;
  /** 是否为运行中参数值 1:运行中参数值；0：非运行中参数值； */
  Status: number;
  /** 冗余字段，可忽略 */
  Unit: string;
}

/** 实例可修改参数Multi类型集合。 */
declare interface InstanceMultiParam {
  /** 当前值 */
  CurrentValue: string;
  /** 默认值 */
  DefaultValue: string;
  /** 指导值范围 */
  EnumValue: string[];
  /** 是否需要重启生效 1:需要重启后生效；0：无需重启，设置成功即可生效； */
  NeedRestart: string;
  /** 参数名称 */
  ParamName: string;
  /** 是否为运行中参数值 1:运行中参数值；0：非运行中参数值； */
  Status: number;
  /** 参数说明 */
  Tips: string[];
  /** 当前值的类型描述，默认为multi */
  ValueType: string;
}

/** 实例可修改参数text类型集合。 */
declare interface InstanceTextParam {
  /** 当前值 */
  CurrentValue: string;
  /** 默认值 */
  DefaultValue: string;
  /** 是否需要重启 */
  NeedRestart: string;
  /** 参数名称 */
  ParamName: string;
  /** text类型值 */
  TextValue: string;
  /** 参数说明 */
  Tips: string[];
  /** 值类型说明 */
  ValueType: string;
  /** 是否为运行中参数值 1:运行中参数值；0：非运行中参数值； */
  Status: string;
}

/** 修改数据库地址 */
declare interface ModifyNetworkAddress {
  /** 新IP地址。 */
  NewIPAddress: string;
  /** 原IP地址。 */
  OldIpAddress: string;
}

/** 节点属性 */
declare interface NodeProperty {
  /** 节点所在的可用区。 */
  Zone: string | null;
  /** 节点名称。 */
  NodeName: string | null;
  /** 节点访问地址。 */
  Address: string | null;
  /** 角色。 */
  Role: string | null;
  /** 是否为Hidden节点 */
  Hidden: boolean | null;
  /** 节点状态，包括：ORMAL/STARTUP/RECOVERING/STARTUP2/UNKNOWN/DOWN/ROLLBACK/REMOVED等。 */
  Status: string | null;
  /** 主从延迟，单位秒。 */
  SlaveDelay: number | null;
  /** 节点优先级。 */
  Priority: number | null;
  /** 节点投票权。 */
  Votes: number | null;
  /** 节点标签。 */
  Tags: NodeTag[] | null;
  /** 副本集Id。 */
  ReplicateSetId: string | null;
}

/** 节点Tag */
declare interface NodeTag {
  /** 节点Tag key */
  TagKey?: string | null;
  /** 节点Tag Value */
  TagValue?: string | null;
}

/** 需要终止的操作 */
declare interface Operation {
  /** 操作所在的分片名 */
  ReplicaSetName: string;
  /** 操作所在的节点名 */
  NodeName: string;
  /** 操作序号 */
  OpId: number;
}

/** 分片信息 */
declare interface ReplicaSetInfo {
  /** 副本集ID */
  ReplicaSetId: string;
}

/** 副本集信息 */
declare interface ReplicateSetInfo {
  /** 节点属性 */
  Nodes: NodeProperty[] | null;
}

/** 安全组信息 */
declare interface SecurityGroup {
  /** 所属项目id */
  ProjectId: number;
  /** 创建时间 */
  CreateTime: string;
  /** 入站规则 */
  Inbound: SecurityGroupBound[];
  /** 出站规则 */
  Outbound: SecurityGroupBound[];
  /** 安全组id */
  SecurityGroupId: string;
  /** 安全组名称 */
  SecurityGroupName: string;
  /** 安全组备注 */
  SecurityGroupRemark: string;
}

/** 安全组规则 */
declare interface SecurityGroupBound {
  /** 执行规则。ACCEPT或DROP */
  Action: string;
  /** ip段。 */
  CidrIp: string;
  /** 端口范围 */
  PortRange: string;
  /** 传输层协议。tcp，udp或ALL */
  IpProtocol: string;
  /** 安全组id代表的地址集合 */
  Id: string;
  /** 地址组id代表的地址集合 */
  AddressModule: string;
  /** 服务组id代表的协议和端口集合 */
  ServiceModule: string;
  /** 描述 */
  Desc: string;
}

/** 实例分片详情 */
declare interface ShardInfo {
  /** 分片已使用容量 */
  UsedVolume: number;
  /** 分片ID */
  ReplicaSetId: string;
  /** 分片名 */
  ReplicaSetName: string;
  /** 分片内存规格，单位为MB */
  Memory: number;
  /** 分片磁盘规格，单位为MB */
  Volume: number;
  /** 分片Oplog大小，单位为MB */
  OplogSize: number;
  /** 分片从节点数 */
  SecondaryNum: number;
  /** 分片物理id */
  RealReplicaSetId: string;
}

/** 用于描述MongoDB数据库慢日志统计信息 */
declare interface SlowLogPattern {
  /** 慢日志模式 */
  Pattern: string;
  /** 最大执行时间 */
  MaxTime: number;
  /** 平均执行时间 */
  AverageTime: number;
  /** 该模式慢日志条数 */
  Total: number;
}

/** mongodb售卖规格 */
declare interface SpecItem {
  /** 规格信息标识 */
  SpecCode: string;
  /** 规格有效标志，取值：0-停止售卖，1-开放售卖 */
  Status: number;
  /** 计算资源规格，单位为CPU核心数 */
  Cpu: number;
  /** 内存规格，单位为MB */
  Memory: number;
  /** 默认磁盘规格，单位MB */
  DefaultStorage: number;
  /** 最大磁盘规格，单位MB */
  MaxStorage: number;
  /** 最小磁盘规格，单位MB */
  MinStorage: number;
  /** 可承载qps信息 */
  Qps: number;
  /** 连接数限制 */
  Conns: number;
  /** 实例mongodb版本信息 */
  MongoVersionCode: string;
  /** 实例mongodb版本号 */
  MongoVersionValue: number;
  /** 实例mongodb版本号（短） */
  Version: string;
  /** 存储引擎 */
  EngineName: string;
  /** 集群类型，取值：1-分片集群，0-副本集集群 */
  ClusterType: number;
  /** 最小副本集从节点数 */
  MinNodeNum: number;
  /** 最大副本集从节点数 */
  MaxNodeNum: number;
  /** 最小分片数 */
  MinReplicateSetNum: number;
  /** 最大分片数 */
  MaxReplicateSetNum: number;
  /** 最小分片从节点数 */
  MinReplicateSetNodeNum: number;
  /** 最大分片从节点数 */
  MaxReplicateSetNodeNum: number;
  /** 机器类型，取值：0-HIO，4-HIO10G */
  MachineType: string;
}

/** 实例规格信息 */
declare interface SpecificationInfo {
  /** 地域信息 */
  Region: string;
  /** 可用区信息 */
  Zone: string;
  /** 售卖规格信息 */
  SpecItems: SpecItem[];
  /** 是否支持跨可用区部署 1-支持，0-不支持 */
  SupportMultiAZ: number;
}

/** 实例标签信息 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 账户基本信息 */
declare interface UserInfo {
  /** 账号名。 */
  UserName: string;
  /** 账号权限详情。 */
  AuthRole: Auth[];
  /** 账号创建时间。 */
  CreateTime: string;
  /** 账号更新时间。 */
  UpdateTime: string;
  /** 备注信息。 */
  UserDesc: string;
}

declare interface AssignProjectRequest {
  /** 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceIds: string[];
  /** 项目ID，用户已创建项目的唯一ID,非自定义 */
  ProjectId: number;
}

declare interface AssignProjectResponse {
  /** 返回的异步任务ID列表 */
  FlowIds: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccountUserRequest {
  /** 实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 新账号名称。其格式要求如下：字符范围[1,32]。可输入[A,Z]、[a,z]、[1,9]范围的字符以及下划线“_”与短划线“-”。 */
  UserName: string;
  /** 新账号密码。密码复杂度要求如下：字符长度范围[8,32]。至少包含字母、数字和特殊字符（叹号“!”、at"@"、井号“#”、百分号“%”、插入符“^”、星号“*”、小括号“()”、下划线“_”）中的两种。 */
  Password: string;
  /** mongouser 账号对应的密码。mongouser 为系统默认账号，即为创建实例时，设置的密码。 */
  MongoUserPassword: string;
  /** 账号备注信息。 */
  UserDesc?: string;
  /** 账号的读写权限信息。 */
  AuthRole?: Auth[];
}

declare interface CreateAccountUserResponse {
  /** 创建任务ID。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupDBInstanceRequest {
  /** 实例id */
  InstanceId: string;
  /** 0-逻辑备份，1-物理备份 */
  BackupMethod: number;
  /** 备份备注 */
  BackupRemark?: string;
}

declare interface CreateBackupDBInstanceResponse {
  /** 查询备份流程的状态 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupDownloadTaskRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 要下载的备份文件名，可通过DescribeDBBackups接口获取。 */
  BackupName: string;
  /** 指定要下载的副本集的节点名称 或 分片集群的分片名称列表。如副本集cmgo-p8vnipr5，示例(固定取值)：BackupSets.0=cmgo-p8vnipr5_0，可下载全量数据。如分片集群cmgo-p8vnipr5，示例：BackupSets.0=cmgo-p8vnipr5_0&BackupSets.1=cmgo-p8vnipr5_1，即下载分片0和分片1的数据，分片集群如需全量下载，请按示例方式传入全部分片名称。 */
  BackupSets: ReplicaSetInfo[];
}

declare interface CreateBackupDownloadTaskResponse {
  /** 下载任务状态 */
  Tasks: BackupDownloadTaskStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceHourRequest {
  /** 实例内存大小，单位：GB。 */
  Memory: number;
  /** 实例硬盘大小，单位：GB。 */
  Volume: number;
  /** 指副本集数量。- 创建副本集实例，该参数只能为1。- 创建分片实例，指分片的数量。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  ReplicateSetNum: number;
  /** 指每个副本集内节点个数。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  NodeNum: number;
  /** 指版本信息。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。 */
  MongoVersion: string;
  /** 机器类型。- HIO：高IO型。- HIO10G：高IO万兆。 */
  MachineCode: string;
  /** 实例数量，最小值1，最大值为10。 */
  GoodsNum: number;
  /** 可用区信息，输入格式如：ap-guangzhou-2。- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。 */
  Zone: string;
  /** 实例架构类型。- REPLSET：副本集。- SHARD：分片集群。 */
  ClusterType: string;
  /** 私有网络ID，如果不设置该参数，则默认选择基础网络。 */
  VpcId?: string;
  /** 私有网络下的子网 ID，如果配置参数 VpcId，则 SubnetId必须配置。 */
  SubnetId?: string;
  /** 实例密码。- 不设置该参数，则默认密码格式为：实例ID+@+主账户uin。例如：实例 ID 为cmgo-higv73ed，UIN 为100000001，则默认密码为：cmgo-higv73ed@100000001。 - 自定义密码长度为8-32个字符，至少包含字母、数字和字符（!@#%^*()_）中的两种。 */
  Password?: string;
  /** 项目ID。若不设置该参数，则为默认项目。 */
  ProjectId?: number;
  /** 实例标签信息。 */
  Tags?: TagInfo[];
  /** 实例类型。- 1：正式实例。- 3：只读实例。- 4：灾备实例。 */
  Clone?: number;
  /** 父实例 ID。当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。 */
  Father?: string;
  /** 安全组。 */
  SecurityGroup?: string[];
  /** 克隆实例回档时间。- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。- 回档时间范围：仅能回档7天内时间点的数据。 */
  RestoreTime?: string;
  /** 实例名称。仅支持长度为60个字符的中文、英文、数字、下划线_、分隔符- 。 */
  InstanceName?: string;
  /** 多可用区部署的节点列表。具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)获取。- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。- 不支持4.2及以上版本。- 不支持只读灾备实例。- 不能选择基础网络。 */
  AvailabilityZoneList?: string[];
  /** Mongos CPU 核数。- 购买MongoDB 3.6 WiredTiger存储引擎版本以上的分片集群时，可选择性配置该参数。- 若不配置该参数，则根据Mongod节点规格默认适配 Mongos 规格，默认规格免费。 */
  MongosCpu?: number;
  /** Mongos 内存大小。- 购买MongoDB 3.6 WiredTiger存储引擎版本以上的分片集群时，可选择性配置该参数。- 若不配置该参数，则根据Mongod节点规格默认适配 Mongos 规格，默认规格免费。 */
  MongosMemory?: number;
  /** Mongos 数量。- 购买MongoDB 3.6 WiredTiger存储引擎版本以上的分片集群时，可选择性配置该参数。- 若不配置该参数，则根据Mongod节点规格默认适配 Mongos 规格，默认规格免费。 */
  MongosNodeNum?: number;
  /** 只读节点数量，最大不超过7个。 */
  ReadonlyNodeNum?: number;
  /** 指只读节点所属可用区。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。 */
  ReadonlyNodeAvailabilityZoneList?: string[];
  /** Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。 */
  HiddenZone?: string;
}

declare interface CreateDBInstanceHourResponse {
  /** 订单ID。 */
  DealId?: string;
  /** 创建的实例ID列表。 */
  InstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceRequest {
  /** 每个副本集内节点个数，具体参照查询云数据库的售卖规格返回参数 */
  NodeNum: number;
  /** 实例内存大小，单位：GB */
  Memory: number;
  /** 实例硬盘大小，单位：GB */
  Volume: number;
  /** 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本 */
  MongoVersion: string;
  /** 实例数量, 最小值1，最大值为10 */
  GoodsNum: number;
  /** 实例所属区域名称，格式如：ap-guangzhou-2。注：此参数填写的是主可用区，如果选择多可用区部署，Zone必须是AvailabilityZoneList中的一个 */
  Zone: string;
  /** 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36] */
  Period: number;
  /** 机器类型，HIO：高IO型；HIO10G：高IO万兆型；STDS5：标准型 */
  MachineCode: string;
  /** 实例类型，REPLSET-副本集，SHARD-分片集群，STANDALONE-单节点 */
  ClusterType: string;
  /** 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数；若为单节点实例，该参数设置为0 */
  ReplicateSetNum: number;
  /** 项目ID，不设置为默认项目 */
  ProjectId?: number;
  /** 私有网络 ID，如果不传则默认选择基础网络，请使用 查询私有网络列表 */
  VpcId?: string;
  /** 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 查询子网列表 */
  SubnetId?: string;
  /** 实例密码，不设置该参数则默认密码规则为 实例ID+"@"+主账户uin。举例实例id为cmgo-higv73ed，uin为100000001，则默认密码为"cmgo-higv73ed@100000001"。 自定义密码格式为8-32个字符长度，至少包含字母、数字和字符（!@#%^*()_）中的两种 */
  Password?: string;
  /** 实例标签信息 */
  Tags?: TagInfo[];
  /** 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。默认为不自动续费 */
  AutoRenewFlag?: number;
  /** 是否自动选择代金券，可选值为：1 - 是；0 - 否； 默认为0 */
  AutoVoucher?: number;
  /** 1:正式实例,2:临时实例,3:只读实例,4:灾备实例,5:克隆实例 */
  Clone?: number;
  /** 若是只读，灾备实例或克隆实例，Father必须填写，即主实例ID */
  Father?: string;
  /** 安全组 */
  SecurityGroup?: string[];
  /** 克隆实例回档时间。若是克隆实例，则必须填写，格式：2021-08-13 16:30:00。注：只能回档7天内的时间点 */
  RestoreTime?: string;
  /** 实例名称。注：名称只支持长度为60个字符的中文、英文、数字、下划线_、分隔符- */
  InstanceName?: string;
  /** 多可用区部署的节点列表，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。注：1、多可用区部署节点只能部署在3个不同可用区；2、为了保障跨可用区切换，不支持将集群的大多数节点部署在同一个可用区（如3节点集群不支持2个节点部署在同一个区）；3、不支持4.2及以上版本；4、不支持只读灾备实例；5、不能选择基础网络 */
  AvailabilityZoneList?: string[];
  /** mongos cpu数量，购买MongoDB 4.2 WiredTiger存储引擎版本的分片集群时必须填写，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果 */
  MongosCpu?: number;
  /** mongos 内存大小，购买MongoDB 4.2 WiredTiger存储引擎版本的分片集群时必须填写，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果 */
  MongosMemory?: number;
  /** mongos 数量，购买MongoDB 4.2 WiredTiger存储引擎版本的分片集群时必须填写，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。注：为了保障高可用，最低需要购买3个mongos，上限为32个 */
  MongosNodeNum?: number;
  /** 只读节点数量，最大不超过7个 */
  ReadonlyNodeNum?: number;
  /** 只读节点部署可用区 */
  ReadonlyNodeAvailabilityZoneList?: string[];
  /** Hidden节点所在的可用区，跨可用区实例必传 */
  HiddenZone?: string;
}

declare interface CreateDBInstanceResponse {
  /** 订单ID */
  DealId: string;
  /** 创建的实例ID列表 */
  InstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountUsersRequest {
  /** 指定待获取账号的实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
}

declare interface DescribeAccountUsersResponse {
  /** 实例账号列表。 */
  Users?: UserInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAsyncRequestInfoRequest {
  /** 异步请求Id，涉及到异步流程的接口返回，如CreateBackupDBInstance */
  AsyncRequestId: string;
}

declare interface DescribeAsyncRequestInfoResponse {
  /** 状态。返回参数有：initial-初始化、running-运行中、paused-任务执行失败，已暂停、undoed-任务执行失败，已回滚、failed-任务执行失败, 已终止、success-成功 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadTaskRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 备份文件名，用来过滤指定文件的下载任务 */
  BackupName?: string;
  /** 指定查询时间范围内的任务，StartTime指定开始时间，不填默认不限制开始时间 */
  StartTime?: string;
  /** 指定查询时间范围内的任务，EndTime指定截止时间，不填默认不限制截止时间 */
  EndTime?: string;
  /** 此次查询返回的条数，取值范围为1-100，默认为20 */
  Limit?: number;
  /** 指定此次查询返回的页数，默认为0 */
  Offset?: number;
  /** 排序字段，取值为createTime，finishTime两种，默认为createTime */
  OrderBy?: string;
  /** 排序方式，取值为asc，desc两种，默认desc */
  OrderByType?: string;
  /** 根据任务状态过滤。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试。不填默认返回所有类型 */
  Status?: number[];
}

declare interface DescribeBackupDownloadTaskResponse {
  /** 满足查询条件的所有条数 */
  TotalCount: number;
  /** 下载任务列表 */
  Tasks: BackupDownloadTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClientConnectionsRequest {
  /** 指定待查询的实例ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 单次请求返回的数量。最小值为1，最大值为1000，默认值为1000。 */
  Limit?: number;
  /** 偏移量，默认值为0。Offset=Limit*(页码-1)。 */
  Offset?: number;
}

declare interface DescribeClientConnectionsResponse {
  /** 客户端连接信息，包括客户端 IP 和对应 IP 的连接数量。 */
  Clients?: ClientConnection[];
  /** 满足条件的记录总条数，可用于分页查询。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCurrentOpRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 筛选条件，操作所属的命名空间namespace，格式为db.collection */
  Ns?: string;
  /** 筛选条件，操作已经执行的时间（单位：毫秒），结果将返回超过设置时间的操作，默认值为0，取值范围为[0, 3600000] */
  MillisecondRunning?: number;
  /** 筛选条件，操作类型，可能的取值：none，update，insert，query，command，getmore，remove和killcursors */
  Op?: string;
  /** 筛选条件，分片名称 */
  ReplicaSetName?: string;
  /** 筛选条件，节点状态，可能的取值为：primarysecondary */
  State?: string;
  /** 单次请求返回的数量，默认值为100，取值范围为[0,100] */
  Limit?: number;
  /** 偏移量，默认值为0，取值范围为[0,10000] */
  Offset?: number;
  /** 返回结果集排序的字段，目前支持："MicrosecsRunning"/"microsecsrunning"，默认为升序排序 */
  OrderBy?: string;
  /** 返回结果集排序方式，可能的取值："ASC"/"asc"或"DESC"/"desc" */
  OrderByType?: string;
}

declare interface DescribeCurrentOpResponse {
  /** 符合查询条件的操作总数 */
  TotalCount: number;
  /** 当前操作列表 */
  CurrentOps: CurrentOp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBBackupsRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 备份方式，当前支持：0-逻辑备份，1-物理备份，2-所有备份。默认为逻辑备份。 */
  BackupMethod?: number;
  /** 分页大小，最大值为100，不设置默认查询所有。 */
  Limit?: number;
  /** 分页偏移量，最小值为0，默认值为0。 */
  Offset?: number;
}

declare interface DescribeDBBackupsResponse {
  /** 备份列表 */
  BackupList: BackupInfo[];
  /** 备份总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceDealRequest {
  /** 订单ID，通过CreateDBInstance等接口返回 */
  DealId: string;
}

declare interface DescribeDBInstanceDealResponse {
  /** 订单状态，1：未支付，2：已支付，3：发货中，4：发货成功，5：发货失败，6：退款，7：订单关闭，8：超时未支付关闭。 */
  Status: number;
  /** 订单原价。 */
  OriginalPrice: number;
  /** 订单折扣价格。 */
  DiscountPrice: number;
  /** 订单行为，purchase：新购，renew：续费，upgrade：升配，downgrade：降配，refund：退货退款。 */
  Action: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceNodePropertyRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 节点ID。 */
  NodeIds?: string[];
  /** 节点角色。可选值包括：PRIMARY：主节点。SECONDARY：从节点。READONLY：只读节点。ARBITER：仲裁节点。 */
  Roles?: string[];
  /** 该参数指定节点是否为Hidden节点，默认为false。 */
  OnlyHidden?: boolean;
  /** 该参数指定选举新主节点的优先级。其取值范围为[0,100]，数值越高，优先级越高。 */
  Priority?: number;
  /** 该参数指定节点投票权。1：具有投票权。0：无投票权。 */
  Votes?: number;
  /** 节点标签。 */
  Tags?: NodeTag[];
}

declare interface DescribeDBInstanceNodePropertyResponse {
  /** Mongos节点属性。 */
  Mongos: NodeProperty[] | null;
  /** 副本集节点信息。 */
  ReplicateSets: ReplicateSetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 实例 ID 列表。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceIds?: string[];
  /** 实例类型。取值范围如下：0：所有实例。1：正式实例。2：临时实例。3：只读实例。-1：正式实例、只读、灾备实例。 */
  InstanceType?: number;
  /** 集群类型，取值范围如下：0：副本集实例。1：分片实例。-1：所有实例。 */
  ClusterType?: number;
  /** 实例状态，取值范围如下所示：0：待初始化。1：流程执行中。2：实例有效。-2：已隔离（包年包月实例）。-3：已隔离（按量计费实例）。 */
  Status?: number[];
  /** 私有网络的 ID。- 基础网络则无需配置该参数。- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其 ID。 */
  VpcId?: string;
  /** 私有网络的子网ID。- 基础网络则无需配置该参数。- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其子网 ID。 */
  SubnetId?: string;
  /** 付费类型，取值范围如下：0：查询按量计费实例。1：查询包年包月实例。-1：查询按量计费与包年包月实例。 */
  PayMode?: number;
  /** 单次请求返回的数量。默认值为20，取值范围为[1,100]。 */
  Limit?: number;
  /** 偏移量，默认值为0。 */
  Offset?: number;
  /** 配置返回结果排序依据的字段。目前支持依据"ProjectId"、"InstanceName"、"CreateTime"排序。 */
  OrderBy?: string;
  /** 配置返回结果的排序方式。- ASC：升序。- DESC：降序。 */
  OrderByType?: string;
  /** 项目 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)，在右上角的账户信息下拉菜单中，选择项目管理查询项目。 */
  ProjectIds?: number[];
  /** 配置查询搜索的关键词。支持配置为实例ID、实例名称或者内网 IP 地址。 */
  SearchKey?: string;
  /** 标签信息，包含标签键与标签值。 */
  Tags?: TagInfo[];
}

declare interface DescribeDBInstancesResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount?: number;
  /** 实例详细信息列表。 */
  InstanceDetails?: InstanceDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamsRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceParamsResponse {
  /** 值为枚举类型参数集合 */
  InstanceEnumParam: InstanceEnumParam[];
  /** 值为integer类型参数集合 */
  InstanceIntegerParam: InstanceIntegerParam[];
  /** 值为text类型的参数集合 */
  InstanceTextParam: InstanceTextParam[];
  /** 值为混合类型的参数集合 */
  InstanceMultiParam: InstanceMultiParam[];
  /** 当前实例支持修改的参数个数统计 如0 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupRequest {
  /** 实例 ID。例如：cmgo-p8vn****。 */
  InstanceId: string;
}

declare interface DescribeSecurityGroupResponse {
  /** 实例绑定的安全组信息。 */
  Groups?: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogPatternsRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。 */
  StartTime: string;
  /** 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。 */
  EndTime: string;
  /** 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。 */
  SlowMS: number;
  /** 偏移量，最小值为0，最大值为10000，默认值为0。 */
  Offset?: number;
  /** 分页大小，最小值为1，最大值为100，默认值为20。 */
  Limit?: number;
  /** 慢日志返回格式，可设置为json，不传默认返回原生慢日志格式。 */
  Format?: string;
}

declare interface DescribeSlowLogPatternsResponse {
  /** 慢日志统计信息总数 */
  Count: number;
  /** 慢日志统计信息 */
  SlowLogPatterns: SlowLogPattern[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogsRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。 */
  StartTime: string;
  /** 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。 */
  EndTime: string;
  /** 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。 */
  SlowMS: number;
  /** 偏移量，最小值为0，最大值为10000，默认值为0。 */
  Offset?: number;
  /** 分页大小，最小值为1，最大值为100，默认值为20。 */
  Limit?: number;
  /** 慢日志返回格式。默认返回原生慢日志格式，4.4及以上版本可设置为json。 */
  Format?: string;
}

declare interface DescribeSlowLogsResponse {
  /** 慢日志总数 */
  Count?: number;
  /** 慢日志详情 */
  SlowLogs?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpecInfoRequest {
  /** 待查询可用区 */
  Zone?: string;
}

declare interface DescribeSpecInfoResponse {
  /** 实例售卖规格信息列表 */
  SpecInfoList: SpecificationInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FlushInstanceRouterConfigRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface FlushInstanceRouterConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateDBInstancesRequest {
  /** 实例所属区域及可用区信息。格式：ap-guangzhou-2。 */
  Zone: string;
  /** 每个分片的主从节点数量。取值范围：请通过接口DescribeSpecInfo查询，其返回的数据结构SpecItems中的参数MinNodeNum与MaxNodeNum分别对应其最小值与最大值。 */
  NodeNum: number;
  /** 实例内存大小。单位：GB。取值范围：请通过接口DescribeSpecInfo查询，其返回的数据结构SpecItems中的参数CPU与Memory分别对应CPU核数与内存规格。 */
  Memory: number;
  /** 实例硬盘大小。单位：GB。取值范围：请通过接口DescribeSpecInfo查询，其返回的数据结构SpecItems中的参数MinStorage与MaxStorage分别对应其最小磁盘规格与最大磁盘规格。 */
  Volume: number;
  /** 实例版本信息。具体支持的版本，请通过接口DescribeSpecInfo查询，其返回的数据结构SpecItems中的参数MongoVersionCode为实例所支持的版本信息。版本信息与版本号对应关系如下：MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本。MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本。MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。 */
  MongoVersion: string;
  /** 机器类型。HIO：高IO型。HIO10G：高IO万兆型。 */
  MachineCode: string;
  /** 实例数量，取值范围为[1,10]。 */
  GoodsNum: number;
  /** 实例类型。REPLSET：副本集。SHARD：分片集群。STANDALONE：单节点。 */
  ClusterType: string;
  /** 副本集个数。创建副本集实例时，该参数固定设置为1。创建分片集群时，指分片数量，请通过接口DescribeSpecInfo查询，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。若为单节点实例，该参数固定设置为0。 */
  ReplicateSetNum: number;
  /** 选择包年包月计费模式时，您需要设定购买实例的时长。即InstanceChargeType设定为PREPAID时，该参数必须配置。单位：月。可选值包括[1,2,3,4,5,6,7,8,9,10,11,12,24,36]。 */
  Period?: number;
  /** 实例付费方式。PREPAID：包年包月计费。POSTPAID_BY_HOUR：按量计费。 */
  InstanceChargeType?: string;
  /** 分片实例询价必填参数，指 Mongos CPU核数，取值范围为[1,16]。 */
  MongosCpu?: number;
  /** 分片实例询价必填参数，指 Mongos 内存，取值范围为[2,32]，单位：GB。 */
  MongosMemory?: number;
  /** 分片实例询价必填参数，指 Mongos 个数，取值范围为[3,32]。 */
  MongosNum?: number;
  /** 分片实例询价必填参数，指 ConfigServer CPU核数，取值为1，单位：GB。 */
  ConfigServerCpu?: number;
  /** 分片实例询价必填参数，指 ConfigServer 内存大小，取值为2，单位：GB。 */
  ConfigServerMemory?: number;
  /** 分片实例询价必填参数，指 ConfigServer 磁盘大小，取值为 20，单位：GB。 */
  ConfigServerVolume?: number;
}

declare interface InquirePriceCreateDBInstancesResponse {
  /** 价格 */
  Price: DBInstancePrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceModifyDBInstanceSpecRequest {
  /** 实例 ID，格式如：cmgo-p8vn****。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 变更配置后实例内存大小，单位：GB。 */
  Memory: number;
  /** 变更配置后实例磁盘大小，单位：GB。 */
  Volume: number;
  /** 实例节点数。默认为不变更节点数，暂不支持变更。 */
  NodeNum?: number;
  /** 实例分片数。默认为不变更分片数，暂不支持变更。 */
  ReplicateSetNum?: number;
}

declare interface InquirePriceModifyDBInstanceSpecResponse {
  /** 价格。 */
  Price?: DBInstancePrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRenewDBInstancesRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同，接口单次最多只支持5个实例进行操作。 */
  InstanceIds: string[];
  /** 预付费模式（即包年包月）相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
}

declare interface InquirePriceRenewDBInstancesResponse {
  /** 价格 */
  Price: DBInstancePrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDBInstanceRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
}

declare interface IsolateDBInstanceResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillOpsRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 待终止的操作 */
  Operations: Operation[];
}

declare interface KillOpsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNetworkAddressRequest {
  /** 实例ID */
  InstanceId: string;
  /** 原IP保留时长，单位为分钟；原IP会在约定时间后释放，在释放前原IP和新IP均可访问；0表示立即回收原IP */
  OldIpExpiredTime: number;
  /** 切换后IP地址的归属私有网络统一ID，若为基础网络，该字段为空 */
  NewUniqVpcId: string;
  /** 切换后IP地址的归属子网统一ID，若为基础网络，该字段为空 */
  NewUniqSubnetId: string;
  /** 待修改IP信息 */
  NetworkAddresses?: ModifyNetworkAddress[];
}

declare interface ModifyDBInstanceNetworkAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupRequest {
  /** 实例 ID。例如：cmgo-7pje****。 */
  InstanceId: string;
  /** 目标安全组 ID。请通过接口[DescribeSecurityGroup](https://cloud.tencent.com/document/product/240/55675)查看具体的安全组 ID。 */
  SecurityGroupIds: string[];
}

declare interface ModifyDBInstanceSecurityGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSpecRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 实例配置变更后的内存大小，单位：GB。内存和磁盘必须同时升配或同时降配 */
  Memory: number;
  /** 实例配置变更后的硬盘大小，单位：GB。内存和磁盘必须同时升配或同时降配。降配时，新的磁盘参数必须大于已用磁盘容量的1.2倍 */
  Volume: number;
  /** 实例配置变更后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90% */
  OplogSize?: number;
  /** 实例变更后的节点数，取值范围具体参照查询云数据库的售卖规格返回参数。默认为不变更节点数 */
  NodeNum?: number;
  /** 实例变更后的分片数，取值范围具体参照查询云数据库的售卖规格返回参数。只能增加不能减少，默认为不变更分片数 */
  ReplicateSetNum?: number;
  /** 实例配置变更的切换时间，参数为：0(默认)、1。0-调整完成时，1-维护时间内。注：调整节点数和分片数不支持在【维护时间内】变更。 */
  InMaintenance?: number;
}

declare interface ModifyDBInstanceSpecResponse {
  /** 订单ID */
  DealId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OfflineIsolatedDBInstanceRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
}

declare interface OfflineIsolatedDBInstanceResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenameInstanceRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
  InstanceId: string;
  /** 自定义实例名称，名称只支持长度为60个字符的中文、英文、数字、下划线_、分隔符 - */
  NewName: string;
}

declare interface RenameInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDBInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过DescribeInstances接口返回值中的InstanceId获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
}

declare interface RenewDBInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetDBInstancePasswordRequest {
  /** 实例Id */
  InstanceId: string;
  /** 实例账号名 */
  UserName: string;
  /** 新密码，新密码长度不能少于8位 */
  Password: string;
}

declare interface ResetDBInstancePasswordResponse {
  /** 异步请求Id，用户查询该流程的运行状态 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetAccountUserPrivilegeRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 账号名称。 */
  UserName: string;
  /** 权限信息。 */
  AuthRole: Auth[];
}

declare interface SetAccountUserPrivilegeResponse {
  /** 设置任务ID,用于查询是否设置完成 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateDBInstancesRequest {
  /** 指定预隔离实例ID。格式如：cmgo-p8vnipr5。 */
  InstanceId: string;
}

declare interface TerminateDBInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20180408 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-04-08' } }

  /** 客户端连接信息，包括客户端IP和连接数 */
  interface ClientConnection {
    /** 连接的客户端IP */
    IP: string;
    /** 对应客户端IP的连接数 */
    Count: number;
  }

  /** 实例信息 */
  interface MongoDBInstance {
    /** 实例ID */
    InstanceId: string;
    /** 地域信息 */
    Region: string;
  }

  /** 实例详情 */
  interface MongoDBInstanceDetail {
    /** 实例ID */
    InstanceId: string;
    /** 实例名称 */
    InstanceName: string;
    /** 付费类型，可能的返回值：1-包年包月；0-按量计费 */
    PayMode: number;
    /** 项目ID */
    ProjectId: number;
    /** 集群类型，可能的返回值：0-副本集实例，1-分片实例， */
    ClusterType: number;
    /** 地域信息 */
    Region: string;
    /** 可用区信息 */
    Zone: string;
    /** 网络类型，可能的返回值：0-基础网络，1-私有网络 */
    NetType: number;
    /** 私有网络的ID */
    VpcId: string;
    /** 私有网络的子网ID */
    SubnetId: string;
    /** 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期 */
    Status: number;
    /** 实例IP */
    Vip: string;
    /** 端口号 */
    Vport: number;
    /** 实例创建时间 */
    CreateTime: string;
    /** 实例到期时间 */
    DeadLine: string;
    /** 实例版本信息 */
    MongoVersion: string;
    /** 实例内存规格，单位为MB */
    Memory: number;
    /** 实例磁盘规格，单位为MB */
    Volume: number;
    /** 实例CPU核心数 */
    CpuNum: number;
    /** 实例机器类型 */
    MachineType: string;
    /** 实例从节点数 */
    SecondaryNum: number;
    /** 实例分片数 */
    ReplicationSetNum: number;
    /** 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费 */
    AutoRenewFlag: number;
    /** 已用容量，单位MB */
    UsedVolume: number;
    /** 维护窗口起始时间 */
    MaintenanceStart: string;
    /** 维护窗口结束时间 */
    MaintenanceEnd: string;
    /** 分片信息 */
    ReplicaSets: MongodbShardInfo[];
    /** 只读实例信息 */
    ReadonlyInstances: MongoDBInstance[] | null;
    /** 灾备实例信息 */
    StandbyInstances: MongoDBInstance[] | null;
    /** 临时实例信息 */
    CloneInstances: MongoDBInstance[] | null;
    /** 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息 */
    RelatedInstance: MongoDBInstance | null;
    /** 实例标签信息集合 */
    Tags: TagInfo[] | null;
    /** 实例标记 */
    InstanceVer: number;
    /** 实例标记 */
    ClusterVer: number;
    /** 协议信息，可能的返回值：1-mongodb，2-dynamodb */
    Protocol: number;
    /** 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例 */
    InstanceType: number;
    /** 实例状态描述 */
    InstanceStatusDesc: string;
    /** 实例对应的物理实例ID，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取 */
    RealInstanceId: string;
  }

  /** 实例分片详情 */
  interface MongodbShardInfo {
    /** 分片已使用容量 */
    UsedVolume: number;
    /** 分片ID */
    ReplicaSetId: string;
    /** 分片名 */
    ReplicaSetName: string;
    /** 分片内存规格，单位为MB */
    Memory: number;
    /** 分片磁盘规格，单位为MB */
    Volume: number;
    /** 分片Oplog大小，单位为MB */
    OplogSize: number;
    /** 分片从节点数 */
    SecondaryNum: number;
    /** 分片物理ID */
    RealReplicaSetId: string;
  }

  /** mongodb售卖规格 */
  interface SpecItem {
    /** 规格信息标识 */
    SpecCode: string;
    /** 规格有效标志，取值：0-停止售卖，1-开放售卖 */
    Status: number;
    /** 机器类型，取值：0-HIO，4-HIO10G */
    MachineType: string;
    /** cpu核心数 */
    Cpu: number;
    /** 内存规格，单位为MB */
    Memory: number;
    /** 默认磁盘规格，单位MB */
    DefaultStorage: number;
    /** 最大磁盘规格，单位MB */
    MaxStorage: number;
    /** 最小磁盘规格，单位MB */
    MinStorage: number;
    /** 可承载qps信息 */
    Qps: number;
    /** 连接数限制 */
    Conns: number;
    /** 实例mongodb版本信息 */
    MongoVersionCode: string;
    /** 实例mongodb版本号 */
    MongoVersionValue: number;
    /** 实例mongodb版本号（短） */
    Version: string;
    /** 存储引擎 */
    EngineName: string;
    /** 集群类型，取值：1-分片集群，0-副本集集群 */
    ClusterType: number;
    /** 最小副本集从节点数 */
    MinNodeNum: number;
    /** 最大副本集从节点数 */
    MaxNodeNum: number;
    /** 最小分片数 */
    MinReplicateSetNum: number;
    /** 最大分片数 */
    MaxReplicateSetNum: number;
    /** 最小分片从节点数 */
    MinReplicateSetNodeNum: number;
    /** 最大分片从节点数 */
    MaxReplicateSetNodeNum: number;
  }

  /** 实例规格信息 */
  interface SpecificationInfo {
    /** 地域信息 */
    Region: string;
    /** 可用区信息 */
    Zone: string;
    /** 售卖规格信息 */
    SpecItems: SpecItem[];
  }

  /** 实例标签信息 */
  interface TagInfo {
    /** 标签Key值 */
    TagKey: string;
    /** 标签值 */
    TagValue: string;
  }

  interface AssignProjectRequest {
    /** 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceIds: string[];
    /** 项目ID */
    ProjectId: number;
  }

  interface AssignProjectResponse {
    /** 返回的异步任务ID列表 */
    FlowIds?: number[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDBInstanceHourRequest {
    /** 实例内存大小，单位：GB */
    Memory: number;
    /** 实例硬盘大小，单位：GB */
    Volume: number;
    /** 副本集个数，1为单副本集实例，大于1为分片集群实例，最大不超过10 */
    ReplicateSetNum: number;
    /** 每个副本集内从节点个数，目前只支持从节点数为2 */
    SecondaryNum: number;
    /** MongoDB引擎版本，值包括MONGO_3_WT 、MONGO_3_ROCKS和MONGO_36_WT */
    EngineVersion: string;
    /** 实例类型，GIO：高IO版；TGIO：高IO万兆 */
    Machine: string;
    /** 实例数量，默认值为1, 最小值1，最大值为10 */
    GoodsNum: number;
    /** 可用区信息，格式如：ap-guangzhou-2 */
    Zone: string;
    /** 实例角色，支持值包括：MASTER-表示主实例，DR-表示灾备实例，RO-表示只读实例 */
    InstanceRole: string;
    /** 实例类型，REPLSET-副本集，SHARD-分片集群 */
    InstanceType: string;
    /** 数据是否加密，当且仅当引擎版本为MONGO_3_ROCKS，可以选择加密 */
    Encrypt?: number;
    /** 私有网络ID，如果不传则默认选择基础网络 */
    VpcId?: string;
    /** 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填 */
    SubnetId?: string;
    /** 项目ID，不填为默认项目 */
    ProjectId?: number;
    /** 安全组参数 */
    SecurityGroup?: string[];
  }

  interface CreateDBInstanceHourResponse {
    /** 订单ID */
    DealId?: string;
    /** 创建的实例ID列表 */
    InstanceIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDBInstanceRequest {
    /** 每个副本集内从节点个数 */
    SecondaryNum: number;
    /** 实例内存大小，单位：GB */
    Memory: number;
    /** 实例硬盘大小，单位：GB */
    Volume: number;
    /** 版本号，当前支持 MONGO_3_WT、MONGO_3_ROCKS、MONGO_36_WT */
    MongoVersion: string;
    /** 机器类型，GIO：高IO版；TGIO：高IO万兆 */
    MachineCode: string;
    /** 实例数量，默认值为1, 最小值1，最大值为10 */
    GoodsNum: number;
    /** 实例所属区域名称，格式如：ap-guangzhou-2 */
    Zone: string;
    /** 时长，购买月数 */
    TimeSpan: number;
    /** 实例密码 */
    Password: string;
    /** 项目ID，不填为默认项目 */
    ProjectId?: number;
    /** 安全组参数 */
    SecurityGroup?: string[];
    /** 私有网络ID，如果不传则默认选择基础网络 */
    UniqVpcId?: string;
    /** 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填 */
    UniqSubnetId?: string;
  }

  interface CreateDBInstanceResponse {
    /** 订单ID */
    DealId?: string;
    /** 创建的实例ID列表 */
    InstanceIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClientConnectionsRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceId: string;
  }

  interface DescribeClientConnectionsResponse {
    /** 客户端连接信息，包括客户端IP和对应IP的连接数量 */
    Clients?: ClientConnection[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDBInstancesRequest {
    /** 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceIds?: string[];
    /** 实例类型，取值范围：0-所有实例,1-正式实例，2-临时实例, 3-只读实例，-1-正式实例+只读+灾备实例 */
    InstanceType?: number;
    /** 集群类型，取值范围：0-副本集实例，1-分片实例，-1-所有实例 */
    ClusterType?: number;
    /** 实例状态，取值范围：0-待初始化，1-流程执行中，2-实例有效，-2-实例已过期 */
    Status?: number[];
    /** 私有网络的ID，基础网络则不传该参数 */
    VpcId?: string;
    /** 私有网络的子网ID，基础网络则不传该参数。入参设置该参数的同时，必须设置相应的VpcId */
    SubnetId?: string;
    /** 付费类型，取值范围：0-按量计费，1-包年包月，-1-按量计费+包年包月 */
    PayMode?: number;
    /** 单次请求返回的数量，最小值为1，最大值为100，默认值为20 */
    Limit?: number;
    /** 偏移量，默认值为0 */
    Offset?: number;
    /** 返回结果集排序的字段，目前支持："ProjectId", "InstanceName", "CreateTime"，默认为升序排序 */
    OrderBy?: string;
    /** 返回结果集排序方式，目前支持："ASC"或者"DESC" */
    OrderByType?: string;
  }

  interface DescribeDBInstancesResponse {
    /** 符合查询条件的实例总数 */
    TotalCount?: number;
    /** 实例详细信息 */
    InstanceDetails?: MongoDBInstanceDetail[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSlowLogRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceId: string;
    /** 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。 */
    StartTime: string;
    /** 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。 */
    EndTime: string;
    /** 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。 */
    SlowMS: number;
    /** 偏移量，最小值为0，最大值为10000，默认值为0。 */
    Offset?: number;
    /** 分页大小，最小值为1，最大值为100，默认值为20。 */
    Limit?: number;
  }

  interface DescribeSlowLogResponse {
    /** 符合查询条件的慢查询日志总数。 */
    TotalCount?: number;
    /** 符合查询条件的慢查询日志详情。 */
    SlowLogList?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSpecInfoRequest {
    /** 可用区 */
    Zone?: string;
  }

  interface DescribeSpecInfoResponse {
    /** 实例售卖规格信息列表 */
    SpecInfoList?: SpecificationInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RenameInstanceRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceId: string;
    /** 实例名称 */
    NewName: string;
  }

  interface RenameInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetAutoRenewRequest {
    /** 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceIds: string[];
    /** 续费选项，取值范围：0-手动续费，1-自动续费，2-确认不续费 */
    AutoRenewFlag: number;
  }

  interface SetAutoRenewResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetPasswordRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceId: string;
    /** 实例账户名称 */
    UserName: string;
    /** 实例新密码，至少包含字母、数字和字符（!@#%^*()）中的两种，长度为8-16个字符 */
    Password: string;
  }

  interface SetPasswordResponse {
    /** 返回的异步任务ID */
    FlowId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TerminateDBInstanceRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。 */
    InstanceId: string;
  }

  interface TerminateDBInstanceResponse {
    /** 订单ID，表示注销实例成功 */
    AsyncRequestId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeDBInstanceHourRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5 */
    InstanceId: string;
    /** 升级后的内存大小，单位：GB */
    Memory: number;
    /** 升级后的硬盘大小，单位：GB */
    Volume: number;
    /** 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90% */
    OplogSize?: number;
  }

  interface UpgradeDBInstanceHourResponse {
    /** 订单ID */
    DealId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeDBInstanceRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceId: string;
    /** 升级后的内存大小，单位：GB */
    Memory: number;
    /** 升级后的硬盘大小，单位：GB */
    Volume: number;
    /** 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90% */
    OplogSize?: number;
  }

  interface UpgradeDBInstanceResponse {
    /** 订单ID */
    DealId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Mongodb 云数据库 MongoDB} */
declare interface Mongodb {
  (): Versions;
  /** 指定云数据库实例的所属项目 {@link AssignProjectRequest} {@link AssignProjectResponse} */
  AssignProject(data: AssignProjectRequest, config?: AxiosRequestConfig): AxiosPromise<AssignProjectResponse>;
  /** 创建账号 {@link CreateAccountUserRequest} {@link CreateAccountUserResponse} */
  CreateAccountUser(data: CreateAccountUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountUserResponse>;
  /** 备份实例接口 {@link CreateBackupDBInstanceRequest} {@link CreateBackupDBInstanceResponse} */
  CreateBackupDBInstance(data: CreateBackupDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupDBInstanceResponse>;
  /** 创建备份下载任务 {@link CreateBackupDownloadTaskRequest} {@link CreateBackupDownloadTaskResponse} */
  CreateBackupDownloadTask(data: CreateBackupDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupDownloadTaskResponse>;
  /** 创建云数据库实例（包年包月） {@link CreateDBInstanceRequest} {@link CreateDBInstanceResponse} */
  CreateDBInstance(data: CreateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstanceResponse>;
  /** 创建云数据库实例（按量计费） {@link CreateDBInstanceHourRequest} {@link CreateDBInstanceHourResponse} */
  CreateDBInstanceHour(data: CreateDBInstanceHourRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstanceHourResponse>;
  /** 全部账号列表 {@link DescribeAccountUsersRequest} {@link DescribeAccountUsersResponse} */
  DescribeAccountUsers(data: DescribeAccountUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountUsersResponse>;
  /** 查询异步任务状态接口 {@link DescribeAsyncRequestInfoRequest} {@link DescribeAsyncRequestInfoResponse} */
  DescribeAsyncRequestInfo(data: DescribeAsyncRequestInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAsyncRequestInfoResponse>;
  /** 查询备份下载任务信息 {@link DescribeBackupDownloadTaskRequest} {@link DescribeBackupDownloadTaskResponse} */
  DescribeBackupDownloadTask(data: DescribeBackupDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadTaskResponse>;
  /** 查询实例客户端连接信息 {@link DescribeClientConnectionsRequest} {@link DescribeClientConnectionsResponse} */
  DescribeClientConnections(data: DescribeClientConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClientConnectionsResponse>;
  /** 查询数据库实例当前正在执行的操作 {@link DescribeCurrentOpRequest} {@link DescribeCurrentOpResponse} */
  DescribeCurrentOp(data: DescribeCurrentOpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCurrentOpResponse>;
  /** 查询实例备份列表 {@link DescribeDBBackupsRequest} {@link DescribeDBBackupsResponse} */
  DescribeDBBackups(data: DescribeDBBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBBackupsResponse>;
  /** 获取数据库实例订单详情 {@link DescribeDBInstanceDealRequest} {@link DescribeDBInstanceDealResponse} */
  DescribeDBInstanceDeal(data: DescribeDBInstanceDealRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceDealResponse>;
  /** 查询节点属性 {@link DescribeDBInstanceNodePropertyRequest} {@link DescribeDBInstanceNodePropertyResponse} */
  DescribeDBInstanceNodeProperty(data: DescribeDBInstanceNodePropertyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceNodePropertyResponse>;
  /** 查询云数据库实例列表 {@link DescribeDBInstancesRequest} {@link DescribeDBInstancesResponse} */
  DescribeDBInstances(data?: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** 获取当前实例可修改的参数列表 {@link DescribeInstanceParamsRequest} {@link DescribeInstanceParamsResponse} */
  DescribeInstanceParams(data: DescribeInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamsResponse>;
  /** 查询实例绑定的安全组 {@link DescribeSecurityGroupRequest} {@link DescribeSecurityGroupResponse} */
  DescribeSecurityGroup(data: DescribeSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupResponse>;
  /** 获取慢日志统计信息 {@link DescribeSlowLogPatternsRequest} {@link DescribeSlowLogPatternsResponse} */
  DescribeSlowLogPatterns(data: DescribeSlowLogPatternsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogPatternsResponse>;
  /** 获取慢日志信息 {@link DescribeSlowLogsRequest} {@link DescribeSlowLogsResponse} */
  DescribeSlowLogs(data: DescribeSlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogsResponse>;
  /** 查询云数据库的售卖规格 {@link DescribeSpecInfoRequest} {@link DescribeSpecInfoResponse} */
  DescribeSpecInfo(data?: DescribeSpecInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecInfoResponse>;
  /** 刷新路由配置 {@link FlushInstanceRouterConfigRequest} {@link FlushInstanceRouterConfigResponse} */
  FlushInstanceRouterConfig(data: FlushInstanceRouterConfigRequest, config?: AxiosRequestConfig): AxiosPromise<FlushInstanceRouterConfigResponse>;
  /** 创建实例询价 {@link InquirePriceCreateDBInstancesRequest} {@link InquirePriceCreateDBInstancesResponse} */
  InquirePriceCreateDBInstances(data: InquirePriceCreateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateDBInstancesResponse>;
  /** 变更配置询价 {@link InquirePriceModifyDBInstanceSpecRequest} {@link InquirePriceModifyDBInstanceSpecResponse} */
  InquirePriceModifyDBInstanceSpec(data: InquirePriceModifyDBInstanceSpecRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceModifyDBInstanceSpecResponse>;
  /** 续费实例询价 {@link InquirePriceRenewDBInstancesRequest} {@link InquirePriceRenewDBInstancesResponse} */
  InquirePriceRenewDBInstances(data: InquirePriceRenewDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRenewDBInstancesResponse>;
  /** 隔离云数据库实例 {@link IsolateDBInstanceRequest} {@link IsolateDBInstanceResponse} */
  IsolateDBInstance(data: IsolateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBInstanceResponse>;
  /** 终止数据库实例特定操作 {@link KillOpsRequest} {@link KillOpsResponse} */
  KillOps(data: KillOpsRequest, config?: AxiosRequestConfig): AxiosPromise<KillOpsResponse>;
  /** 修改云数据库实例网络信息 {@link ModifyDBInstanceNetworkAddressRequest} {@link ModifyDBInstanceNetworkAddressResponse} */
  ModifyDBInstanceNetworkAddress(data: ModifyDBInstanceNetworkAddressRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNetworkAddressResponse>;
  /** 修改实例安全组 {@link ModifyDBInstanceSecurityGroupRequest} {@link ModifyDBInstanceSecurityGroupResponse} */
  ModifyDBInstanceSecurityGroup(data: ModifyDBInstanceSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupResponse>;
  /** 调整云数据库实例配置 {@link ModifyDBInstanceSpecRequest} {@link ModifyDBInstanceSpecResponse} */
  ModifyDBInstanceSpec(data: ModifyDBInstanceSpecRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSpecResponse>;
  /** 下线隔离状态的云数据库实例 {@link OfflineIsolatedDBInstanceRequest} {@link OfflineIsolatedDBInstanceResponse} */
  OfflineIsolatedDBInstance(data: OfflineIsolatedDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineIsolatedDBInstanceResponse>;
  /** 修改实例名称 {@link RenameInstanceRequest} {@link RenameInstanceResponse} */
  RenameInstance(data: RenameInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenameInstanceResponse>;
  /** 续费云数据库实例 {@link RenewDBInstancesRequest} {@link RenewDBInstancesResponse} */
  RenewDBInstances(data: RenewDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDBInstancesResponse>;
  /** 修改实例用户的密码 {@link ResetDBInstancePasswordRequest} {@link ResetDBInstancePasswordResponse} */
  ResetDBInstancePassword(data: ResetDBInstancePasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetDBInstancePasswordResponse>;
  /** 设置账户权限 {@link SetAccountUserPrivilegeRequest} {@link SetAccountUserPrivilegeResponse} */
  SetAccountUserPrivilege(data: SetAccountUserPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<SetAccountUserPrivilegeResponse>;
  /** 包年包月隔离接口 {@link TerminateDBInstancesRequest} {@link TerminateDBInstancesResponse} */
  TerminateDBInstances(data: TerminateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateDBInstancesResponse>;
  /** 指定云数据库实例的所属项目 {@link V20180408.AssignProjectRequest} {@link V20180408.AssignProjectResponse} */
  AssignProject(data: V20180408.AssignProjectRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.AssignProjectResponse>;
  /** 创建云数据库实例（包年包月） {@link V20180408.CreateDBInstanceRequest} {@link V20180408.CreateDBInstanceResponse} */
  CreateDBInstance(data: V20180408.CreateDBInstanceRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.CreateDBInstanceResponse>;
  /** 创建云数据库实例（按量计费） {@link V20180408.CreateDBInstanceHourRequest} {@link V20180408.CreateDBInstanceHourResponse} */
  CreateDBInstanceHour(data: V20180408.CreateDBInstanceHourRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.CreateDBInstanceHourResponse>;
  /** 查询实例客户端连接信息 {@link V20180408.DescribeClientConnectionsRequest} {@link V20180408.DescribeClientConnectionsResponse} */
  DescribeClientConnections(data: V20180408.DescribeClientConnectionsRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.DescribeClientConnectionsResponse>;
  /** 查询实例列表 {@link V20180408.DescribeDBInstancesRequest} {@link V20180408.DescribeDBInstancesResponse} */
  DescribeDBInstances(data: V20180408.DescribeDBInstancesRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.DescribeDBInstancesResponse>;
  /** 查询实例慢日志 {@link V20180408.DescribeSlowLogRequest} {@link V20180408.DescribeSlowLogResponse} */
  DescribeSlowLog(data: V20180408.DescribeSlowLogRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.DescribeSlowLogResponse>;
  /** 查询云数据库的售卖规格 {@link V20180408.DescribeSpecInfoRequest} {@link V20180408.DescribeSpecInfoResponse} */
  DescribeSpecInfo(data: V20180408.DescribeSpecInfoRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.DescribeSpecInfoResponse>;
  /** 修改实例名称 {@link V20180408.RenameInstanceRequest} {@link V20180408.RenameInstanceResponse} */
  RenameInstance(data: V20180408.RenameInstanceRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.RenameInstanceResponse>;
  /** 设置云数据库实例的续费选项 {@link V20180408.SetAutoRenewRequest} {@link V20180408.SetAutoRenewResponse} */
  SetAutoRenew(data: V20180408.SetAutoRenewRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.SetAutoRenewResponse>;
  /** 修改云数据库实例的账户密码 {@link V20180408.SetPasswordRequest} {@link V20180408.SetPasswordResponse} */
  SetPassword(data: V20180408.SetPasswordRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.SetPasswordResponse>;
  /** 销毁云数据库实例（按量计费） {@link V20180408.TerminateDBInstanceRequest} {@link V20180408.TerminateDBInstanceResponse} */
  TerminateDBInstance(data: V20180408.TerminateDBInstanceRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.TerminateDBInstanceResponse>;
  /** 升级云数据库实例（包年包月） {@link V20180408.UpgradeDBInstanceRequest} {@link V20180408.UpgradeDBInstanceResponse} */
  UpgradeDBInstance(data: V20180408.UpgradeDBInstanceRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.UpgradeDBInstanceResponse>;
  /** 升级云数据库实例（按量计费） {@link V20180408.UpgradeDBInstanceHourRequest} {@link V20180408.UpgradeDBInstanceHourResponse} */
  UpgradeDBInstanceHour(data: V20180408.UpgradeDBInstanceHourRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.UpgradeDBInstanceHourResponse>;
}

export declare type Versions = ["2019-07-25", "2018-04-08"];

export default Mongodb;
