/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 修改实例节点详情 */
declare interface AddNodeList {
  /** 需要新增的节点角色。- SECONDARY：Mongod 节点。- READONLY：只读节点。- MONGOS：Mongos 节点。 */
  Role: string;
  /** 节点所对应的可用区。- 单可用区，所有节点在同一可用区。- 多可用区：当前标准规格是三可用区分布，主从节点不在同一可用区，需注意配置新增节点对应的可用区，且新增后必须满足任意2个可用区节点数大于第3个可用区原则。 */
  Zone: string;
}

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
  InstanceId?: string;
  /** 备份方式，0-自动备份，1-手动备份 */
  BackupType?: number;
  /** 备份名称 */
  BackupName?: string;
  /** 备份备注 */
  BackupDesc?: string | null;
  /** 备份文件大小，单位KB */
  BackupSize?: number | null;
  /** 备份开始时间 */
  StartTime?: string | null;
  /** 备份结束时间 */
  EndTime?: string | null;
  /** 备份状态，1-备份中，2-备份成功 */
  Status?: number;
  /** 备份方法，0-逻辑备份，1-物理备份 */
  BackupMethod?: number;
  /** 备份记录id */
  BackId?: number;
  /** 备份删除时间 */
  DeleteTime?: string;
  /** 异地备份地域 */
  BackupRegion?: string | null;
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
  /** 折扣价 */
  DiscountPrice: number;
}

/** 按key回档，用于筛选数据的键值对 */
declare interface FBKeyValue {
  /** 用于按key回档过滤的key */
  Key?: string;
  /** 用于按key回档过滤的value */
  Value?: string;
}

/** 按key回档，源数据所在的表 */
declare interface FlashbackCollection {
  /** 按key回档指定的集合名 */
  CollectionName: string;
  /** 按key回档到的目标集合名 */
  TargetResultCollectionName: string;
  /** 上传到cos的文件的value所对应的key值 */
  FilterKey: string;
  /** 用于按key回档过滤的键值对 */
  KeyValues?: FBKeyValue[];
}

/** 按key回档，源数据所在的库表 */
declare interface FlashbackDatabase {
  /** 按key回档源数据所在库 */
  DBName: string;
  /** 按key回档的集群数组 */
  Collections: FlashbackCollection[];
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
  InstanceId?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 付费类型，可能的返回值：1-包年包月；0-按量计费 */
  PayMode?: number;
  /** 项目ID。 */
  ProjectId?: number;
  /** 集群类型，可能的返回值：0-副本集实例，1-分片实例。 */
  ClusterType?: number;
  /** 地域信息。 */
  Region?: string;
  /** 可用区信息。 */
  Zone?: string;
  /** 网络类型，可能的返回值：0-基础网络，1-私有网络 */
  NetType?: number;
  /** 私有网络的ID。 */
  VpcId?: string;
  /** 私有网络的子网ID。 */
  SubnetId?: string;
  /** 实例状态，可能的返回值：0-创建中，1-流程处理中，2-运行中，-2-实例已过期。 */
  Status?: number;
  /** 实例IP。 */
  Vip?: string;
  /** 端口号。 */
  Vport?: number;
  /** 实例创建时间。 */
  CreateTime?: string;
  /** 实例到期时间。 */
  DeadLine?: string;
  /** 实例版本信息。 */
  MongoVersion?: string;
  /** 实例内存规格，单位为MB。 */
  Memory?: number;
  /** 实例磁盘规格，单位为MB。 */
  Volume?: number;
  /** 实例CPU核心数。 */
  CpuNum?: number;
  /** 实例机器类型。 */
  MachineType?: string;
  /** 实例从节点数。 */
  SecondaryNum?: number;
  /** 实例分片数。 */
  ReplicationSetNum?: number;
  /** 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费。 */
  AutoRenewFlag?: number;
  /** 已用容量，单位MB。 */
  UsedVolume?: number;
  /** 维护窗口起始时间。 */
  MaintenanceStart?: string;
  /** 维护窗口结束时间。 */
  MaintenanceEnd?: string;
  /** 分片信息。 */
  ReplicaSets?: ShardInfo[];
  /** 只读实例信息。 */
  ReadonlyInstances?: DBInstanceInfo[];
  /** 灾备实例信息。 */
  StandbyInstances?: DBInstanceInfo[];
  /** 临时实例信息。 */
  CloneInstances?: DBInstanceInfo[];
  /** 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息。 */
  RelatedInstance?: DBInstanceInfo;
  /** 实例标签信息集合。 */
  Tags?: TagInfo[];
  /** 实例版本标记。 */
  InstanceVer?: number;
  /** 实例版本标记。 */
  ClusterVer?: number;
  /** 协议信息，可能的返回值：1-mongodb，2-dynamodb。 */
  Protocol?: number;
  /** 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例 */
  InstanceType?: number;
  /** 实例状态描述 */
  InstanceStatusDesc?: string;
  /** 实例对应的物理实例id，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取 */
  RealInstanceId?: string;
  /** 实例当前可用区信息。 */
  ZoneList?: string[] | null;
  /** mongos节点个数。 */
  MongosNodeNum?: number | null;
  /** mongos节点内存。 */
  MongosMemory?: number | null;
  /** mongos节点CPU核数。 */
  MongosCpuNum?: number | null;
  /** Config Server节点个数。 */
  ConfigServerNodeNum?: number | null;
  /** Config Server节点内存。 */
  ConfigServerMemory?: number | null;
  /** Config Server节点磁盘大小。 */
  ConfigServerVolume?: number | null;
  /** Config Server节点CPU核数。 */
  ConfigServerCpuNum?: number | null;
  /** readonly节点个数。 */
  ReadonlyNodeNum?: number | null;
}

/** 实例可修改参数枚举类型集合。 */
declare interface InstanceEnumParam {
  /** 参数当前值。 */
  CurrentValue?: string;
  /** 参数默认值。 */
  DefaultValue?: string;
  /** 枚举值，所有支持的值。 */
  EnumValue?: string[];
  /** 参数修改之后是否需要重启生效。- 1：需要重启后生效。- 0：无需重启，设置成功即可生效。 */
  NeedRestart?: string;
  /** 参数名称。 */
  ParamName?: string;
  /** 参数说明。 */
  Tips?: string[];
  /** 参数值类型说明。 */
  ValueType?: string;
  /** 是否为运行中参数值。- 1：运行中参数值。- 0：非运行中参数值。 */
  Status?: number;
}

/** 实例可修改参数 Integer 类型集合。 */
declare interface InstanceIntegerParam {
  /** 参数当前值。 */
  CurrentValue: string;
  /** 参数默认值。 */
  DefaultValue: string;
  /** 参数最大值。 */
  Max: string;
  /** 最小值。 */
  Min: string;
  /** 参数修改之后是否需要重启生效。- 1:需要重启后生效。- 0：无需重启，设置成功即可生效。 */
  NeedRestart: string;
  /** 参数名称。 */
  ParamName: string;
  /** 参数说明。 */
  Tips: string[];
  /** 参数类型。 */
  ValueType: string;
  /** 是否为运行中参数值。- 1：运行中参数值。- 0：非运行中参数值。 */
  Status: number;
  /** 冗余字段，可忽略。 */
  Unit: string;
}

/** 实例可修改参数Multi类型集合。 */
declare interface InstanceMultiParam {
  /** 参数当前值。 */
  CurrentValue: string;
  /** 参数默认值。 */
  DefaultValue: string;
  /** 参考值范围。 */
  EnumValue: string[];
  /** 参数修改后是否需要重启才会生效。- 1：需要重启后生效。- 0：无需重启，设置成功即可生效。 */
  NeedRestart: string;
  /** 参数名称。 */
  ParamName: string;
  /** 是否为运行中参数值。- 1：运行中参数值。- 0：非运行中参数值。 */
  Status: number;
  /** 参数说明。 */
  Tips: string[];
  /** 当前值的类型描述，默认为multi。 */
  ValueType: string;
}

/** 实例可修改参数为 Text 类型的参数集合。 */
declare interface InstanceTextParam {
  /** 参数当前值。 */
  CurrentValue: string;
  /** 参数默认值。 */
  DefaultValue: string;
  /** 修改参数值之后是否需要重启。 */
  NeedRestart: string;
  /** 参数名称。 */
  ParamName: string;
  /** Text 类型参数对应的值。 */
  TextValue: string;
  /** 参数说明。 */
  Tips: string[];
  /** 参数值类型说明。 */
  ValueType: string;
  /** 是否为运行中的参数值。- 1：运行中参数值。- 0：非运行中参数值。 */
  Status: string;
}

/** KMS密钥信息 */
declare interface KMSInfoDetail {
  /** 主密钥 ID。 */
  KeyId?: string | null;
  /** 主密钥名称。 */
  KeyName?: string | null;
  /** 实例与密钥绑定时间。 */
  CreateTime?: string | null;
  /** 密钥状态。 */
  Status?: string | null;
  /** 密钥用途。 */
  KeyUsage?: string | null;
  /** 密钥来源。 */
  KeyOrigin?: string | null;
}

/** 修改mongoDB实例，请求参数 */
declare interface ModifyMongoDBParamType {
  /** 需要修改的参数名称，请严格参考通过 DescribeInstanceParams 获取的当前实例支持的参数名。 */
  Key: string;
  /** 需要修改的参数名称对应的值，请严格参考通过 DescribeInstanceParams 获取的参数对应的值的范围。 */
  Value: string;
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

/** 数据库参数模板 */
declare interface ParamTpl {
  /** 参数模板名称 */
  TplName: string;
  /** 参数模板ID */
  TplId: string;
  /** 适用数据库版本 */
  MongoVersion: string;
  /** 适用数据库类型 */
  ClusterType: string;
  /** 参数模板描述 */
  TplDesc: string;
  /** 模板类型，包括DEFAULT（默认模板）及CUSTOMIZE（定制模板）两种类型 */
  TplType: string;
}

/** 数据库参数 */
declare interface ParamType {
  /** 参数 */
  Key: string;
  /** 参数值 */
  Value: string;
}

/** 修改实例节点详情 */
declare interface RemoveNodeList {
  /** 需要删除的节点角色。- SECONDARY：Mongod 从节点。- READONLY：只读节点。- MONGOS：Mongos 节点。 */
  Role: string;
  /** 要删除的节点 ID。分片集群须指定一组分片要删除的节点名称即可，其余分片对改组对齐。- 获取方式：登录 [MongoDB控制台](https://console.cloud.tencent.com/)，在**节点管理**页签，可获取**节点 ID**。- 特别说明：分片集群同一节点上的分片，仅需指定0分片节点 ID 即可。例如：cmgo-6hfk****_0-node-primary。 */
  NodeName: string;
  /** 节点所对应的可用区。- 单可用区，所有节点在同一可用区。- 多可用区：当前标准规格是三可用区分布，主从节点不在同一可用区，需注意配置所删除节点对应的可用区，且删除后必须满足任意2个可用区节点数大于第3个可用区原则。 */
  Zone: string;
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
  /** 规格信息标识。格式如：mongo.HIO10G.128g。由节点类型、规格类型、内存规格三部分组成。- 节点类型，如下所示。 - mongo：Mongod 节点。 - mongos：Mongos 节点。 - cfgstr：Configserver 节点。- 规格类型，如下所示。 - HIO10G：通用高HIO万兆型。 - HCD：云盘版类型。- 内存规格，如下所示： - 支持4、8、16、32、64、128、240、512。 - 单位g：表示GB。128g则表示128GB。 */
  SpecCode?: string;
  /** 售卖规格有效标志，取值范围如下：- 0：停止售卖，- 1：开放售卖。 */
  Status?: number;
  /** 计算资源规格，CPU核数。 */
  Cpu?: number;
  /** 内存规格，单位为：MB。 */
  Memory?: number;
  /** 默认磁盘规格，单位为：MB。 */
  DefaultStorage?: number;
  /** 最大磁盘规格，单位为：MB。 */
  MaxStorage?: number;
  /** 最小磁盘规格，单位为：MB。 */
  MinStorage?: number;
  /** 指每秒最大请求次数，单位为：次/秒。 */
  Qps?: number;
  /** 规格所支持的最大连接数限制。 */
  Conns?: number;
  /** 实例存储引擎版本信息。- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。 */
  MongoVersionCode?: string;
  /** 实例版本对应的数字版本。 */
  MongoVersionValue?: number;
  /** 实例版本信息。支持：3.6、4.2、4.4、5.0、6.0。 */
  Version?: string;
  /** 存储引擎。 */
  EngineName?: string;
  /** 集群类型，取值如下：- 1：分片集群。- 0：副本集集群。 */
  ClusterType?: number;
  /** 每个副本集最小节点数。 */
  MinNodeNum?: number;
  /** 每个副本集最大节点数。 */
  MaxNodeNum?: number;
  /** 最小分片数。 */
  MinReplicateSetNum?: number;
  /** 最大分片数。 */
  MaxReplicateSetNum?: number;
  /** 每个分片最小节点数。 */
  MinReplicateSetNodeNum?: number;
  /** 每个分片最大节点数。 */
  MaxReplicateSetNodeNum?: number;
  /** 集群的规格类型，取值范围如下：- HIO10G：通用高HIO万兆型。- HCD：云盘版类型。 */
  MachineType?: string;
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
  /** 实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 设置备份方式。- 0：逻辑备份。- 1：物理备份。 */
  BackupMethod: number;
  /** 备份备注信息。 */
  BackupRemark?: string;
}

declare interface CreateBackupDBInstanceResponse {
  /** 查询备份流程的状态。 */
  AsyncRequestId?: string;
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
  /** 实例内存大小，单位：GB。具体售卖的内存规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  Memory: number;
  /** 实例硬盘大小，单位：GB。每一个 CPU 规格对应的最大磁盘与最小磁盘范围，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  Volume: number;
  /** - 创建副本集实例，指副本集数量，该参数只能为1。- 创建分片集群实例，指分片的数量。请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询分片数量的取值范围，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。 */
  ReplicateSetNum: number;
  /** - 创建副本集实例，指每个副本集内主从节点数量。每个副本集所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- 创建分片集群实例，指每个分片的主从节点数量。每个分片所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  NodeNum: number;
  /** 指版本信息。具体支持的版本信息 ，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。 */
  MongoVersion: string;
  /** 产品规格类型。- HIO10G：通用高HIO万兆型。- HCD：云盘版类型。 */
  MachineCode: string;
  /** 实例数量，最小值1，最大值为10。 */
  GoodsNum: number;
  /** 可用区信息，输入格式如：ap-guangzhou-2。- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。 */
  Zone: string;
  /** 实例架构类型。- REPLSET：副本集。- SHARD：分片集群。 */
  ClusterType: string;
  /** 私有网络ID。如果不设置该参数，则默认选择基础网络。 */
  VpcId?: string;
  /** 私有网络下的子网 ID，如果配置参数 VpcId，则 SubnetId必须配置。 */
  SubnetId?: string;
  /** 实例密码。自定义密码长度为8-32个字符，至少包含字母、数字和字符（!@#%^*()_）中的两种。 */
  Password?: string;
  /** 项目ID。- 若不设置该参数，则为默认项目。- 在 [MongoDB 控制台项目管理](https://console.cloud.tencent.com/project)页面，可获取项目ID。 */
  ProjectId?: number;
  /** 实例标签信息。 */
  Tags?: TagInfo[];
  /** 实例类型。- 1：正式实例。- 3：只读实例。- 4：灾备实例。-5：克隆实例，注意：克隆实例RestoreTime为必填项。 */
  Clone?: number;
  /** 父实例 ID。当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。 */
  Father?: string;
  /** 安全组 ID。 */
  SecurityGroup?: string[];
  /** 克隆实例回档时间。- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。- 回档时间范围：仅能回档7天内时间点的数据。 */
  RestoreTime?: string;
  /** 实例名称。仅支持长度为60个字符的中文、英文、数字、下划线_、分隔符- 。 */
  InstanceName?: string;
  /** 若多可用区部署云数据库实例，指定多可用区列表。- 多可用区部署实例，参数 **Zone** 指定实例主可用区信息；**AvailabilityZoneList** 指定所有可用区信息，包含主可用区。输入格式如：[ap-guangzhou-2,ap-guangzhou-3,ap-guangzhou-4]。- 通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 可获取云数据库不同地域规划的可用区信息，以便指定有效的可用区。- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。 */
  AvailabilityZoneList?: string[];
  /** Mongos CPU 核数，支持1、2、4、8、16。购买分片集群时，必须填写。 */
  MongosCpu?: number;
  /** Mongos 内存大小。- 购买分片集群时，必须填写。- 单位：GB，支持1核2GB、2核4GB、4核8GB、8核16GB、16核32GB。 */
  MongosMemory?: number;
  /** Mongos 数量。购买分片集群时，必须填写。- 单可用区部署实例，其数量范围为[3,32]。- 多可用区部署实例，其数量范围为[6,32]。 */
  MongosNodeNum?: number;
  /** 只读节点数量，取值范围[0,5]。 */
  ReadonlyNodeNum?: number;
  /** 指只读节点所属可用区数组。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。 */
  ReadonlyNodeAvailabilityZoneList?: string[];
  /** Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。 */
  HiddenZone?: string;
  /** 参数模板 ID。参数模板是一组 MongoDB 的参数并为预设置了参数值的集合，将一组有相同诉求的参数及值 存为模板，在创建实例时，可直接引用参数值到新实例。合理使用参数模板，可以提高MongoDB数据库的效率。模板列表从 DescribeDBInstanceParamTpl 接口获取，注意模板支持的版本。 */
  ParamTemplateId?: string;
}

declare interface CreateDBInstanceHourResponse {
  /** 订单ID。 */
  DealId?: string;
  /** 创建的实例ID列表。 */
  InstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceParamTplRequest {
  /** 参数模板名称。 */
  TplName: string;
  /** 版本号，该参数模板支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是：MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。当MirrorTplId为空时，该字段必填。 */
  MongoVersion?: string;
  /** 实例类型，REPLSET-副本集，SHARD-分片集群，STANDALONE-单节点当MirrorTplId为空时，该字段必填。 */
  ClusterType?: string;
  /** 模板描述信息。 */
  TplDesc?: string;
  /** 模板参数，若为空，则以系统默认模板作为新版本参数。 */
  Params?: ParamType[];
  /** 镜像模板ID，若该字段不为空，则以该模板为镜像，克隆出一个新的模板。注意：MirrorTplId不为空时，MongoVersion及ClusterType将以MirrorTpl模板的版本及实例类型为准。 */
  MirrorTplId?: string;
}

declare interface CreateDBInstanceParamTplResponse {
  /** 模板ID */
  TplId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceRequest {
  /** - 创建副本集实例，指每个副本集内主从节点数量。每个副本集所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- 创建分片集群实例，指每个分片的主从节点数量。每个分片所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  NodeNum: number;
  /** 实例内存大小，单位：GB。具体售卖的内存规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  Memory: number;
  /** 实例硬盘大小，单位：GB。每一个 CPU 规格对应的最大磁盘与最小磁盘范围，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  Volume: number;
  /** 指版本信息。具体支持的版本信息 ，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。 */
  MongoVersion: string;
  /** 实例数量, 最小值1，最大值为10。 */
  GoodsNum: number;
  /** 可用区信息，输入格式如：ap-guangzhou-2。- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。 */
  Zone: string;
  /** 指定购买实例的购买时长。取值可选：[1,2,3,4,5,6,7,8,9,10,11,12,24,36]；单位：月。 */
  Period: number;
  /** 产品规格类型。- HIO10G：通用高HIO万兆型。- HCD：云盘版类型。 */
  MachineCode: string;
  /** 实例架构类型。- REPLSET：副本集。- SHARD：分片集群。 */
  ClusterType: string;
  /** - 创建副本集实例，指副本集数量，该参数只能为1。- 创建分片集群实例，指分片的数量。请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询分片数量的取值范围，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。 */
  ReplicateSetNum: number;
  /** 项目ID。- 若不设置该参数，则为默认项目。- 在 [MongoDB 控制台项目管理](https://console.cloud.tencent.com/project)页面，可获取项目ID。 */
  ProjectId?: number;
  /** 私有网络ID。如果不设置该参数，则默认选择基础网络。 */
  VpcId?: string;
  /** 私有网络下的子网 ID，如果配置参数 VpcId，则 SubnetId必须配置。 */
  SubnetId?: string;
  /** 实例密码。自定义密码长度为8-32个字符，至少包含字母、数字和字符（!@#%^*()_）中的两种。 */
  Password?: string;
  /** 实例标签信息。 */
  Tags?: TagInfo[];
  /** 自动续费标记。- 0：不自动续费。- 1：自动续费。 */
  AutoRenewFlag?: number;
  /** 是否自动选择代金券。- 1：是。- 0：否。默认为0。 */
  AutoVoucher?: number;
  /** 实例类型。- 1：正式实例。- 3：只读实例。- 4：灾备实例。-5：整实例克隆，注意：克隆实例时，RestoreTime为必填项。 */
  Clone?: number;
  /** 父实例 ID。当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。 */
  Father?: string;
  /** 安全组 ID。 */
  SecurityGroup?: string[];
  /** 克隆实例回档时间，当Clone取值为5或6时为必填。- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。- 回档时间范围：仅能回档7天内时间点的数据。 */
  RestoreTime?: string;
  /** 实例名称。仅支持长度为60个字符的中文、英文、数字、下划线_、分隔符- 。 */
  InstanceName?: string;
  /** 多可用区部署的节点列表。具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)获取。- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。- 不支持4.2及以上版本。- 不支持只读灾备实例。- 不能选择基础网络。 */
  AvailabilityZoneList?: string[];
  /** Mongos CPU 核数，支持1、2、4、8、16。购买分片集群时，必须填写。 */
  MongosCpu?: number;
  /** Mongos 内存大小。- 购买分片集群时，必须填写。- 单位：GB，支持1核2GB、2核4GB、4核8GB、8核16GB、16核32GB。 */
  MongosMemory?: number;
  /** Mongos 数量。购买分片集群时，必须填写。- 单可用区部署实例，其数量范围为[3,32]。- 多可用区部署实例，其数量范围为[6,32]。 */
  MongosNodeNum?: number;
  /** 只读节点数量，取值范围[0,5]。 */
  ReadonlyNodeNum?: number;
  /** 指只读节点所属可用区数组。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。 */
  ReadonlyNodeAvailabilityZoneList?: string[];
  /** Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。 */
  HiddenZone?: string;
  /** 参数模板 ID。参数模板是一组 MongoDB 的参数并为预设置了参数值的集合，将一组有相同诉求的参数及值 存为模板，在创建实例时，可直接引用参数值到新实例。合理使用参数模板，可以提高MongoDB数据库的效率。模板列表从 DescribeDBInstanceParamTpl 接口获取，注意模板支持的版本及实例类型。 */
  ParamTemplateId?: string;
}

declare interface CreateDBInstanceResponse {
  /** 订单ID */
  DealId?: string;
  /** 创建的实例ID列表 */
  InstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccountUserRequest {
  /** 指定待删除账号的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 配置待删除的账号名。 */
  UserName: string;
  /** 配置 mongouser 对应的密码。mongouser为系统默认账号，输入其对应的密码。 */
  MongoUserPassword: string;
}

declare interface DeleteAccountUserResponse {
  /** 账户删除任务ID。 */
  FlowId?: number;
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

declare interface DescribeBackupRulesRequest {
  /** 指定实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
}

declare interface DescribeBackupRulesResponse {
  /** 备份数据保留期限。单位为：天。 */
  BackupSaveTime?: number;
  /** 自动备份开始时间。 */
  BackupTime?: number;
  /** 备份方式。- 0：逻辑备份。- 1：物理备份。 */
  BackupMethod?: number;
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
  BackupList?: BackupInfo[];
  /** 备份总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceDealRequest {
  /** 订单ID，通过CreateDBInstance等接口返回 */
  DealId: string;
}

declare interface DescribeDBInstanceDealResponse {
  /** 订单状态，1：未支付，2：已支付，3：发货中，4：发货成功，5：发货失败，6：退款，7：订单关闭，8：超时未支付关闭。 */
  Status?: number;
  /** 订单原价。 */
  OriginalPrice?: number;
  /** 订单折扣价格。 */
  DiscountPrice?: number;
  /** 订单行为，purchase：新购，renew：续费，upgrade：升配，downgrade：降配，refund：退货退款。 */
  Action?: string;
  /** 当前订单的资源Id。 */
  InstanceId?: string;
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

declare interface DescribeDBInstanceParamTplDetailRequest {
  /** 参数模板 ID。 */
  TplId: string;
  /** 参数名称，传入该值，则只会获取该字段的参数详情。为空时，返回全部参数。 */
  ParamName?: string;
}

declare interface DescribeDBInstanceParamTplDetailResponse {
  /** 枚举类参数详情列表。 */
  InstanceEnumParams?: InstanceEnumParam[] | null;
  /** 整形参数详情列表。 */
  InstanceIntegerParams?: InstanceIntegerParam[] | null;
  /** 文本参数详情列表。 */
  InstanceTextParams?: InstanceTextParam[] | null;
  /** 多值参数详情列表。 */
  InstanceMultiParams?: InstanceMultiParam[] | null;
  /** 参数总个数。 */
  TotalCount?: number | null;
  /** 模板适配实例版本。 */
  MongoVersion?: string | null;
  /** 模板适配集群类型，副本集或分片。。 */
  ClusterType?: string | null;
  /** 参数模板名称。 */
  TplName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceParamTplRequest {
  /** 参数模板 ID 查询条件。 */
  TplIds?: string[];
  /** 模板名称，查询条件。 */
  TplNames?: string[];
  /** 根据版本号插叙参数模板，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是：MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。 */
  MongoVersion?: string[];
  /** 根据模板类型查询参数模板，支持DEFAULT（默认模板）和CUSTOMIZE（自定义模板）两种。 */
  TplType?: string;
}

declare interface DescribeDBInstanceParamTplResponse {
  /** 参数模板列表信息。 */
  ParamTpls?: ParamTpl[] | null;
  /** 参数模板总数。 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 实例 ID 列表。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceIds?: string[];
  /** 指定查询的实例类型。取值范围如下：0：所有实例。1：正式实例。3：只读实例。4：灾备实例。 */
  InstanceType?: number;
  /** 指定所查询实例的集群类型，取值范围如下：0：副本集实例。1：分片实例。-1：副本集与分片实例。 */
  ClusterType?: number;
  /** 指定所查询实例的当前状态，取值范围如下所示：0：待初始化。1：流程处理中，例如：变更规格、参数修改等。2：实例正常运行中。-2：实例已过期。 */
  Status?: number[];
  /** 私有网络的 ID。- 基础网络则无需配置该参数。- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其 ID。 */
  VpcId?: string;
  /** 私有网络的子网ID。- 基础网络则无需配置该参数。- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其子网 ID。 */
  SubnetId?: string;
  /** 指定所查询实例的付费类型，取值范围如下：0：查询按量计费实例。1：查询包年包月实例。-1：查询按量计费与包年包月实例。 */
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
  /** 指定查询搜索的关键词。支持设置为具体的实例ID、实例名称或者内网 IP 地址。 */
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
  /** 指定待查询参数列表的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
}

declare interface DescribeInstanceParamsResponse {
  /** 参数值为枚举类型的参数集合。 */
  InstanceEnumParam?: InstanceEnumParam[];
  /** 参数值为 Integer 类型的参数集合。 */
  InstanceIntegerParam?: InstanceIntegerParam[];
  /** 参数值为 Text 类型的参数集合。 */
  InstanceTextParam?: InstanceTextParam[];
  /** 参数值为混合类型的参数集合。 */
  InstanceMultiParam?: InstanceMultiParam[];
  /** 当前实例支持修改的参数数量。 */
  TotalCount?: number;
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
  SpecInfoList?: SpecificationInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTransparentDataEncryptionStatusRequest {
  /** 指定实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
}

declare interface DescribeTransparentDataEncryptionStatusResponse {
  /** 表示是否开启了透明加密。 - close：未开启。- open：已开启。 */
  TransparentDataEncryptionStatus?: string;
  /** 已绑定的密钥列表，如未绑定，返回null。 */
  KeyInfoList?: KMSInfoDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DropDBInstanceParamTplRequest {
  /** 参数模板 ID。 */
  TplId: string;
}

declare interface DropDBInstanceParamTplResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableTransparentDataEncryptionRequest {
  /** 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。目前支持通用版本包含：4.4、5.0，云盘版暂不支持。 */
  InstanceId: string;
  /** [密钥管理系统（Key Management Service，KMS）](https://cloud.tencent.com/document/product/573/18809)服务所在地域，例如 ap-shanghai。 */
  KmsRegion: string;
  /** 密钥 ID。若不设置该参数，不指定具体的密钥 ID，由腾讯云自动生成密钥。 */
  KeyId?: string;
}

declare interface EnableTransparentDataEncryptionResponse {
  /** 开启透明加密的异步流程id，用于查询流程状态。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FlashBackDBInstanceRequest {
  /** 开启按 Key 回档的实例 ID。 */
  InstanceId: string;
  /** 源数据想恢复到的时间。 */
  TargetFlashbackTime: string;
  /** 源数据所在的库表信息。 */
  TargetDatabases: FlashbackDatabase[];
  /** 数据最终写入的实例 ID。 */
  TargetInstanceId?: string;
}

declare interface FlashBackDBInstanceResponse {
  /** 回档数据异步任务 ID。 */
  FlowId?: number | null;
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
  /** - 创建副本集实例，指每个副本集内主从节点数量。每个副本集所支持的的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。- 创建分片集群实例，指每个分片的主从节点数量。每个分片所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。 */
  NodeNum: number;
  /** 实例内存大小。- 单位：GB。- 取值范围：请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数CPU与Memory分别对应CPU核数与内存规格。 */
  Memory: number;
  /** 实例硬盘大小。- 单位：GB。- 取值范围：请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MinStorage与MaxStorage分别对应其最小磁盘规格与最大磁盘规格。 */
  Volume: number;
  /** 实例版本信息。具体支持的版本，请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MongoVersionCode为实例所支持的版本信息。版本信息与版本号对应关系如下：- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。 */
  MongoVersion: string;
  /** 产品规格类型。- HIO10G：通用高HIO万兆型。- HCD：云盘版。 */
  MachineCode: string;
  /** 实例数量，取值范围为[1,10]。 */
  GoodsNum: number;
  /** 实例类型。- REPLSET：副本集。- SHARD：分片集群。 */
  ClusterType: string;
  /** - 创建副本集实例，指副本集数量，该参数只能为1。- 创建分片集群实例，指分片的数量。请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询分片数量的取值范围，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。 */
  ReplicateSetNum: number;
  /** - 选择包年包月计费模式，即 InstanceChargeType 设定为PREPAID时，必须设置该参数，指定购买实例的购买时长。取值可选：[1,2,3,4,5,6,7,8,9,10,11,12,24,36]；单位：月。-选择按量计费，即 InstanceChargeType 设定为 **POSTPAID_BY_HOUR** 时，该参数仅可配置为 1。 */
  Period?: number;
  /** 实例付费方式。- PREPAID：包年包月计费。- POSTPAID_BY_HOUR：按量计费。 */
  InstanceChargeType?: string;
  /** Mongos CPU 核数，支持1、2、4、8、16。购买分片集群时，必须填写。注意为空时取默认取值为2C。 */
  MongosCpu?: number;
  /** Mongos 内存大小。- 购买分片集群时，必须填写。- 单位：GB，支持1核2GB、2核4GB、4核8GB、8核16GB、16核32GB。注意为空时取默认取值为4G。 */
  MongosMemory?: number;
  /** 指 Mongos 个数，取值范围为[3,32]。若为分片集群实例询价，则该参数必须设置。注意为空时取默认取值为3个节点。 */
  MongosNum?: number;
  /** 指 ConfigServer CPU核数，取值为1，单位：GB。若为分片集群实例询价，该参数必须设置。 */
  ConfigServerCpu?: number;
  /** 指 ConfigServer 内存大小，取值为2，单位：GB。若为分片集群实例询价，则该参数必须设置。 */
  ConfigServerMemory?: number;
  /** 指 ConfigServer 磁盘大小，取值为 20，单位：GB。若为分片集群实例询价，则该参数必须设置。 */
  ConfigServerVolume?: number;
}

declare interface InquirePriceCreateDBInstancesResponse {
  /** 价格 */
  Price?: DBInstancePrice;
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
  /** 指定需修改网络的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 原 IP 地址保留时长。- 单位为分钟，0表示立即回收原 IP 地址。- 原 IP 将在约定时间后释放，在释放前原 IP和新 IP均可访问。 */
  OldIpExpiredTime: number;
  /** 切换后的私有网络 ID，若实例当前为基础网络，该字段无需配置。 */
  NewUniqVpcId: string;
  /** 切换私有网络的子网 ID。若实例当前为基础网络，该字段无需配置。 */
  NewUniqSubnetId: string;
  /** IP 地址信息，包含新 IP 地址与 原 IP 地址。 */
  NetworkAddresses?: ModifyNetworkAddress[];
}

declare interface ModifyDBInstanceNetworkAddressResponse {
  /** 修改网络异步流程任务ID。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceParamTplRequest {
  /** 待修改的参数模板 ID，示例：tpl-jglr91vew。 */
  TplId: string;
  /** 待修改参数模板名称，为空时，保持原有名称。 */
  TplName?: string;
  /** 待修改参数模板描述，为空时，保持原有描述。 */
  TplDesc?: string;
  /** 待修改参数名及参数值，为空时，各参数保持原有值，支持单条或批量修改。 */
  Params?: ParamType[];
}

declare interface ModifyDBInstanceParamTplResponse {
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
  /** 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 实例配置变更后的内存大小。- 单位：GB。为空时，默认取实例当前的内存大小。 注意：内存和磁盘必须同时升配或同时降配，即 Memory 与 Volume 需同时配置变更。 */
  Memory?: number;
  /** 实例配置变更后的硬盘大小，单位：GB。为空时，默认取当前实例的磁盘大小。- 内存和磁盘必须同时升配或同时降配，即 Memory 与 Volume 需同时配置变更。- 降配时，变更后的磁盘容量必须大于已用磁盘容量的1.2倍。 */
  Volume?: number;
  /** (已废弃) 请使用ResizeOplog独立接口完成。实例配置变更后 Oplog 的大小。- 单位：GB。- 默认 Oplog 占用容量为磁盘空间的10%。系统允许设置的 Oplog 容量范围为磁盘空间的[10%,90%]。 */
  OplogSize?: number;
  /** 实例变更后mongod的节点数（不包含readonly节点数）。- 变更mongod CPU与内存规格时，该参数可以不配置或者输入当前 mongod(不包含readonly) 节点数量。- 变更 mongos CPU与内存规格时，该参数可以不配置或者输入当前 mongod(不包含readonly) 节点数量。- 节点变更时(全部类型)，该参数可不配置或输入变更后的 mongod(不包含readonl) 节点数量。- 副本集节点数：请确认节点数量取值范围，通过云数据库的售卖规格 [DescribeSpecInfo ](https://cloud.tencent.com/document/product/240/38565)接口返回的参数 MinNodeNum 与 MaxNodeNum 获取。- 分片集群每个分片节点数：请确认节点数量取值范围，通过云数据库的售卖规格 [DescribeSpecInfo ](https://cloud.tencent.com/document/product/240/38565)接口返回的参数 MinReplicateSetNodeNum 与 MaxReplicateSetNodeNum 获取。 */
  NodeNum?: number;
  /** 实例变更后的分片数。- 取值范围请通过云数据库的售卖规格[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 接口返回的参数**MinReplicateSetNum**与**MaxReplicateSetNum**获取。- 该参数只能增加不能减少。 */
  ReplicateSetNum?: number;
  /** 实例配置变更的切换时间。- 0：调整完成时，立即执行变配任务。默认为0。- 1：在维护时间窗内，执行变配任务。**说明**：调整节点数和分片数不支持在维护时间窗内变更。 */
  InMaintenance?: number;
  /** 分片实例配置变更后的mongos内存大小。单位：GB。 */
  MongosMemory?: string;
  /** 新增节点列表，节点类型及可用区信息。 */
  AddNodeList?: AddNodeList[];
  /** 删除节点列表，注意：基于分片实例各片节点的一致性原则，删除分片实例节点时，只需指定0分片对应的节点即可，如：cmgo-9nl1czif_0-node-readonly0 将删除每个分片的第1个只读节点。 */
  RemoveNodeList?: RemoveNodeList[];
}

declare interface ModifyDBInstanceSpecResponse {
  /** 订单 ID。 */
  DealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceParamsRequest {
  /** 指定实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 指定需修改的参数名及值。当前所支持的参数名及对应取值范围，请通过 [DescribeInstanceParams ](https://cloud.tencent.com/document/product/240/65903)获取。 */
  InstanceParams: ModifyMongoDBParamType[];
  /** 操作类型，包括：- IMMEDIATELY：立即调整。- DELAY：延迟调整。可选字段，不配置该参数则默认为立即调整。 */
  ModifyType?: string;
}

declare interface ModifyInstanceParamsResponse {
  /** 修改参数配置是否生效。- true：参数修改后的值已生效。- false：执行失败。 */
  Changed?: boolean;
  /** 该参数暂时无意义(兼容前端保留)。 */
  TaskId?: number;
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

declare interface RestartNodesRequest {
  /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
  /** 节点Id。 */
  NodeIds: string[];
}

declare interface RestartNodesResponse {
  /** 流程Id。 */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetAccountUserPrivilegeRequest {
  /** 指定待设置账号的实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 设置账号名称。 */
  UserName: string;
  /** 设置权限信息。 */
  AuthRole: Auth[];
}

declare interface SetAccountUserPrivilegeResponse {
  /** 任务ID。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetBackupRulesRequest {
  /** 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 设置自动备份方式。- 0：逻辑备份。- 1：物理备份。-3：快照备份(仅云盘版支持)。 */
  BackupMethod: number;
  /** 设置自动备份开始时间。取值范围为：[0,23]，例如：该参数设置为2，表示02:00开始备份。 */
  BackupTime: number;
  /** 设置自动备份发生错误时，是否发送失败告警。- true：发送。- false：不发送。 */
  Notify?: boolean;
  /** 指定备份数据保存天数。默认为 7 天，支持设置为7、30、90、180、365。 */
  BackupRetentionPeriod?: number;
}

declare interface SetBackupRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetInstanceMaintenanceRequest {
  /** 指定实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。 */
  InstanceId: string;
  /** 维护时间窗开始时间。取值范围为"00:00-23:00"的任意整点或半点，如00:00或00:30。 */
  MaintenanceStart: string;
  /** 维护时间窗结束时间。- 取值范围为"00:00-23:00"的任意整点或半点，维护时间持续时长最小为30分钟，最大为3小时。- 结束时间务必是基于开始时间向后的时间。 */
  MaintenanceEnd: string;
}

declare interface SetInstanceMaintenanceResponse {
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
    /** 实例 ID 列表。格式如：cmgo-p8vn****，与云数据库控制台页面中显示的实例 ID 相同。 */
    InstanceIds: string[];
    /** 项目ID。项目 ID 具有唯一性，请[登录 MongoDB 控制台](https://console.cloud.tencent.com/mongodb)，在右上角的账户信息的下拉菜单中，选择**项目管理**，即可获取项目ID。 */
    ProjectId: number;
  }

  interface AssignProjectResponse {
    /** 返回的异步任务ID列表。 */
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
    Clients: ClientConnection[] | null;
    /** 连接数总结 */
    TotalCount: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDBInstancesRequest {
    /** 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。 */
    InstanceIds?: string[];
    /** 实例类型，取值范围：0： 所有实例1： 正式实例2： 临时实例3： 只读实例-1： 正式实例+只读+灾备实例 */
    InstanceType?: number;
    /** 集群类型，取值范围： 0： 副本集实例1： 正式实例 -1： 所有实例 */
    ClusterType?: number;
    /** 实例状态，取值范围： 0： 待初始化1： 流程执行中 2： 有效实例-2： 已过期实例 */
    Status?: number[];
    /** 私有网络的ID，基础网络则不传该参数。 */
    VpcId?: string;
    /** 私有网络的子网ID，基础网络则不传该参数。入参设置该参数的同时，必须设置相应的VpcId。 */
    SubnetId?: string;
    /** 付费类型，取值范围：0： 按量计费1：包年包月-1： 按量计费+包年包月 */
    PayMode?: number;
    /** 单次请求返回的数量，最小值为1，最大值为100，默认值为20。 */
    Limit?: number;
    /** 偏移量，默认值为0。 */
    Offset?: number;
    /** 返回结果集排序的字段，目前支持： ProjectId： 按照项目ID排序InstanceName：按照实例名称排序CreateTime： 根据创建时间排序 */
    OrderBy?: string;
    /** 返回结果集排序方式，目前支持："ASC"或者"DESC"。ASC： 顺序取值DESC：倒序取值 */
    OrderByType?: string;
  }

  interface DescribeDBInstancesResponse {
    /** 符合查询条件的实例总数 */
    TotalCount: number;
    /** 实例详细信息 */
    InstanceDetails: MongoDBInstanceDetail[];
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
    /** 实例自定义名称 */
    NewName: string;
  }

  interface RenameInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetAutoRenewRequest {
    /** 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceIds: string[];
    /** 配置自动续费标识。- 0：手动续费。- 1：自动续费。- 2：确认不续费。 */
    AutoRenewFlag: number;
  }

  interface SetAutoRenewResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetPasswordRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同 */
    InstanceId: string;
    /** 实例账户名。初始化实例密码，本参数传mongouser。 */
    UserName: string;
    /** 实例新密码，至少包含字母、数字和字符（!@#%^*()）中的两种，长度为8-16个字符 */
    Password: string;
  }

  interface SetPasswordResponse {
    /** 返回的异步任务ID */
    FlowId: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TerminateDBInstanceRequest {
    /** 实例ID，格式如：cmgo-p8vnipr5。 */
    InstanceId: string;
  }

  interface TerminateDBInstanceResponse {
    /** 订单ID，表示注销实例成功。 */
    AsyncRequestId: string;
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
  /** 创建数据库参数模板 {@link CreateDBInstanceParamTplRequest} {@link CreateDBInstanceParamTplResponse} */
  CreateDBInstanceParamTpl(data: CreateDBInstanceParamTplRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstanceParamTplResponse>;
  /** 删除账号 {@link DeleteAccountUserRequest} {@link DeleteAccountUserResponse} */
  DeleteAccountUser(data: DeleteAccountUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountUserResponse>;
  /** 全部账号列表 {@link DescribeAccountUsersRequest} {@link DescribeAccountUsersResponse} */
  DescribeAccountUsers(data: DescribeAccountUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountUsersResponse>;
  /** 查询异步任务状态接口 {@link DescribeAsyncRequestInfoRequest} {@link DescribeAsyncRequestInfoResponse} */
  DescribeAsyncRequestInfo(data: DescribeAsyncRequestInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAsyncRequestInfoResponse>;
  /** 查询备份下载任务信息 {@link DescribeBackupDownloadTaskRequest} {@link DescribeBackupDownloadTaskResponse} */
  DescribeBackupDownloadTask(data: DescribeBackupDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadTaskResponse>;
  /** 获取云数据库实例自动备份配置 {@link DescribeBackupRulesRequest} {@link DescribeBackupRulesResponse} */
  DescribeBackupRules(data: DescribeBackupRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupRulesResponse>;
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
  /** 查询实例参数模板列表 {@link DescribeDBInstanceParamTplRequest} {@link DescribeDBInstanceParamTplResponse} */
  DescribeDBInstanceParamTpl(data?: DescribeDBInstanceParamTplRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceParamTplResponse>;
  /** 参数模板详情 {@link DescribeDBInstanceParamTplDetailRequest} {@link DescribeDBInstanceParamTplDetailResponse} */
  DescribeDBInstanceParamTplDetail(data: DescribeDBInstanceParamTplDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceParamTplDetailResponse>;
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
  /** 获取实例透明加密的开启状态 {@link DescribeTransparentDataEncryptionStatusRequest} {@link DescribeTransparentDataEncryptionStatusResponse} */
  DescribeTransparentDataEncryptionStatus(data: DescribeTransparentDataEncryptionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTransparentDataEncryptionStatusResponse>;
  /** 删除参数模板 {@link DropDBInstanceParamTplRequest} {@link DropDBInstanceParamTplResponse} */
  DropDBInstanceParamTpl(data: DropDBInstanceParamTplRequest, config?: AxiosRequestConfig): AxiosPromise<DropDBInstanceParamTplResponse>;
  /** 开启实例数据透明加密 {@link EnableTransparentDataEncryptionRequest} {@link EnableTransparentDataEncryptionResponse} */
  EnableTransparentDataEncryption(data: EnableTransparentDataEncryptionRequest, config?: AxiosRequestConfig): AxiosPromise<EnableTransparentDataEncryptionResponse>;
  /** 按 Key 回档 {@link FlashBackDBInstanceRequest} {@link FlashBackDBInstanceResponse} */
  FlashBackDBInstance(data: FlashBackDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<FlashBackDBInstanceResponse>;
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
  /** 修改数据库参数模板 {@link ModifyDBInstanceParamTplRequest} {@link ModifyDBInstanceParamTplResponse} */
  ModifyDBInstanceParamTpl(data: ModifyDBInstanceParamTplRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceParamTplResponse>;
  /** 修改实例安全组 {@link ModifyDBInstanceSecurityGroupRequest} {@link ModifyDBInstanceSecurityGroupResponse} */
  ModifyDBInstanceSecurityGroup(data: ModifyDBInstanceSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupResponse>;
  /** 调整云数据库实例配置 {@link ModifyDBInstanceSpecRequest} {@link ModifyDBInstanceSpecResponse} */
  ModifyDBInstanceSpec(data: ModifyDBInstanceSpecRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSpecResponse>;
  /** 修改mongoDB实例参数 {@link ModifyInstanceParamsRequest} {@link ModifyInstanceParamsResponse} */
  ModifyInstanceParams(data: ModifyInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceParamsResponse>;
  /** 下线隔离状态的云数据库实例 {@link OfflineIsolatedDBInstanceRequest} {@link OfflineIsolatedDBInstanceResponse} */
  OfflineIsolatedDBInstance(data: OfflineIsolatedDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineIsolatedDBInstanceResponse>;
  /** 修改实例名称 {@link RenameInstanceRequest} {@link RenameInstanceResponse} */
  RenameInstance(data: RenameInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenameInstanceResponse>;
  /** 续费云数据库实例 {@link RenewDBInstancesRequest} {@link RenewDBInstancesResponse} */
  RenewDBInstances(data: RenewDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDBInstancesResponse>;
  /** 修改实例用户的密码 {@link ResetDBInstancePasswordRequest} {@link ResetDBInstancePasswordResponse} */
  ResetDBInstancePassword(data: ResetDBInstancePasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetDBInstancePasswordResponse>;
  /** 重启数据库节点 {@link RestartNodesRequest} {@link RestartNodesResponse} */
  RestartNodes(data: RestartNodesRequest, config?: AxiosRequestConfig): AxiosPromise<RestartNodesResponse>;
  /** 设置账户权限 {@link SetAccountUserPrivilegeRequest} {@link SetAccountUserPrivilegeResponse} */
  SetAccountUserPrivilege(data: SetAccountUserPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<SetAccountUserPrivilegeResponse>;
  /** 设置云数据库实例的自动备份规则 {@link SetBackupRulesRequest} {@link SetBackupRulesResponse} */
  SetBackupRules(data: SetBackupRulesRequest, config?: AxiosRequestConfig): AxiosPromise<SetBackupRulesResponse>;
  /** 实例维护时间设置 {@link SetInstanceMaintenanceRequest} {@link SetInstanceMaintenanceResponse} */
  SetInstanceMaintenance(data: SetInstanceMaintenanceRequest, config?: AxiosRequestConfig): AxiosPromise<SetInstanceMaintenanceResponse>;
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
  /** 销毁云数据库实例（按量计费--废弃） {@link V20180408.TerminateDBInstanceRequest} {@link V20180408.TerminateDBInstanceResponse} */
  TerminateDBInstance(data: V20180408.TerminateDBInstanceRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.TerminateDBInstanceResponse>;
  /** 升级云数据库实例（包年包月） {@link V20180408.UpgradeDBInstanceRequest} {@link V20180408.UpgradeDBInstanceResponse} */
  UpgradeDBInstance(data: V20180408.UpgradeDBInstanceRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.UpgradeDBInstanceResponse>;
  /** 升级云数据库实例（按量计费） {@link V20180408.UpgradeDBInstanceHourRequest} {@link V20180408.UpgradeDBInstanceHourResponse} */
  UpgradeDBInstanceHour(data: V20180408.UpgradeDBInstanceHourRequest, config: AxiosRequestConfig & V20180408.VersionHeader): AxiosPromise<V20180408.UpgradeDBInstanceHourResponse>;
}

export declare type Versions = ["2019-07-25", "2018-04-08"];

export default Mongodb;
