/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 实例的备份信息 */
declare interface BackupInfo {
  /** 备份开始时间。 */
  StartTime: string;
  /** 备份 ID。 */
  BackupId: string;
  /** 备份类型。1：手动备份，指根据业务运维排障需求，立即执行备份任务的操作。 0：自动备份，指根据自动备份策略定时自动发起的备份任务。 */
  BackupType: string;
  /** 备份的备注信息. */
  Remark: string;
  /** 备份状态。 1：备份任务被其它流程锁定。2：备份正常，没有被任何流程锁定。 -1：备份已过期。3：备份正在被导出。 4：备份导出成功。 */
  Status: number;
  /** 备份是否被锁定。0：未被锁定。1：已被锁定。 */
  Locked: number;
}

/** 实例增量备份信息 */
declare interface BinlogInfo {
  /** 备份开始时间。 */
  StartTime: string;
  /** 备份结束时间。 */
  EndTime: string;
  /** 备份 ID。 */
  BackupId: string;
  /** 备份文件名。 */
  Filename: string;
  /** 备份文件大小，单位：Byte。 */
  FileSize: number | null;
}

/** 安全组入站规则 */
declare interface Inbound {
  /** 策略，ACCEPT或者DROP。 */
  Action: string;
  /** 地址组id代表的地址集合。 */
  AddressModule: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16。 */
  CidrIp: string;
  /** 描述。 */
  Desc: string;
  /** 网络协议，支持udp、tcp等。 */
  IpProtocol: string;
  /** 端口。 */
  PortRange: string;
  /** 服务组id代表的协议和端口集合。 */
  ServiceModule: string;
  /** 安全组id代表的地址集合。 */
  Id: string;
}

/** 实例枚举类型参数描述 */
declare interface InstanceEnumParam {
  /** 参数名 */
  ParamName: string;
  /** 参数类型：enum */
  ValueType: string;
  /** 修改后是否需要重启：true，false */
  NeedRestart: string;
  /** 参数默认值 */
  DefaultValue: string;
  /** 当前运行参数值 */
  CurrentValue: string;
  /** 参数说明 */
  Tips: string;
  /** 参数可取值 */
  EnumValue: string[];
  /** 参数状态, 1: 修改中， 2：修改完成 */
  Status: number;
}

/** 实例详细信息 */
declare interface InstanceInfo {
  /** 实例名称。 */
  InstanceName: string;
  /** 实例 ID。 */
  InstanceId: string;
  /** 用户的Appid。 */
  Appid: number;
  /** 项目 ID。 */
  ProjectId: number;
  /** 地域ID。1：广州。4：上海。8：北京。 */
  RegionId: number;
  /** 可用区 ID。 */
  ZoneId: number;
  /** VPC 网络 ID， 如：75101。该参数当前暂保留，可忽略。 */
  VpcId: number;
  /** 实例当前状态。0：待初始化。1：实例在流程中。2：实例运行中。-2：实例已隔离。-3：实例待删除。 */
  Status: number;
  /** VPC 网络下子网 ID， 如：46315。该参数当前暂保留，可忽略。 */
  SubnetId: number;
  /** 实例 VIP。 */
  WanIp: string;
  /** 实例端口号。 */
  Port: number;
  /** 实例创建时间。 */
  Createtime: string;
  /** 实例持久内存总容量大小，单位：MB。 */
  Size: number;
  /** 实例类型。13：标准版。14：集群版。 */
  Type: number;
  /** 实例是否设置自动续费标识。1：设置自动续费。0：未设置自动续费。 */
  AutoRenewFlag: number;
  /** 实例到期时间。 */
  DeadlineTime: string;
  /** 存储引擎。 */
  Engine: string;
  /** 产品类型。standalone ：标准版。cluster ：集群版。 */
  ProductType: string;
  /** VPC 网络 ID， 如：vpc-fk33jsf4****。 */
  UniqVpcId: string;
  /** VPC 网络下子网 ID，如：subnet-fd3j6l3****。 */
  UniqSubnetId: string;
  /** 计费模式。0：按量计费。1：包年包月。 */
  BillingMode: number;
  /** 实例运行状态描述：如”实例运行中“。 */
  InstanceTitle: string;
  /** 计划下线时间。 */
  OfflineTime: string;
  /** 流程中的实例，返回子状态。 */
  SubStatus: number;
  /** 反亲和性标签 */
  Tags: string[];
  /** 分片大小。 */
  RedisShardSize: number;
  /** 分片数量。 */
  RedisShardNum: number;
  /** 副本数量。 */
  RedisReplicasNum: number;
  /** 计费 ID。 */
  PriceId: number;
  /** 隔离时间。 */
  CloseTime: string;
  /** 从节点读取权重。 */
  SlaveReadWeight: number;
  /** 实例关联的标签信息。 */
  InstanceTags: InstanceTagInfo[] | null;
  /** 项目名称。 */
  ProjectName: string | null;
  /** 是否为免密实例；true：免密实例。false：非免密实例。 */
  NoAuth: boolean | null;
  /** 客户端连接数。 */
  ClientLimit: number | null;
  /** DTS状态（内部参数，用户可忽略）。 */
  DtsStatus: number | null;
  /** 分片带宽上限，单位 MB。 */
  NetLimit: number | null;
  /** 免密实例标识（内部参数，用户可忽略）。 */
  PasswordFree: number | null;
  /** 实例只读标识（内部参数，用户可忽略）。 */
  ReadOnly: number | null;
  /** 内部参数，用户可忽略。 */
  Vip6: string | null;
  /** 内部参数，用户可忽略。 */
  RemainBandwidthDuration: string | null;
  /** 实例的磁盘容量大小。 */
  DiskSize: number | null;
  /** 监控版本。1m：分钟粒度监控。5s：5秒粒度监控。 */
  MonitorVersion: string | null;
  /** 客户端最大连接数可设置的最小值。 */
  ClientLimitMin: number | null;
  /** 客户端最大连接数可设置的最大值。 */
  ClientLimitMax: number | null;
  /** 实例的节点详细信息。 */
  NodeSet: NodeInfo[] | null;
  /** 实例所在的地域信息，比如ap-guangzhou。 */
  Region: string | null;
  /** 实例内存容量，单位：GB。KeeWiDB 内存容量 */
  MachineMemory?: number | null;
  /** 单分片磁盘大小，单位：MB */
  DiskShardSize?: number;
  /** 3 */
  DiskShardNum?: number;
  /** 1 */
  DiskReplicasNum?: number;
}

/** 实例整型参数描述 */
declare interface InstanceIntegerParam {
  /** 参数名 */
  ParamName: string;
  /** 参数类型：integer */
  ValueType: string;
  /** 修改后是否需要重启：true，false */
  NeedRestart: string;
  /** 参数默认值 */
  DefaultValue: string;
  /** 当前运行参数值 */
  CurrentValue: string;
  /** 参数说明 */
  Tips: string;
  /** 参数最小值 */
  Min: string;
  /** 参数最大值 */
  Max: string;
  /** 参数状态, 1: 修改中， 2：修改完成 */
  Status: number;
  /** 参数单位 */
  Unit: string | null;
}

/** 实例多选项类型参数描述 */
declare interface InstanceMultiParam {
  /** 参数名 */
  ParamName: string;
  /** 参数类型：multi */
  ValueType: string;
  /** 修改后是否需要重启：true，false */
  NeedRestart: string;
  /** 参数默认值 */
  DefaultValue: string;
  /** 当前运行参数值 */
  CurrentValue: string;
  /** 参数说明 */
  Tips: string;
  /** 参数说明 */
  EnumValue: string[];
  /** 参数状态, 1: 修改中， 2：修改完成 */
  Status: number;
}

/** 实例节点信息 */
declare interface InstanceNodeInfo {
  /** 节点ID */
  NodeId: string;
  /** 节点角色 */
  NodeRole: string;
}

/** 实例参数 */
declare interface InstanceParam {
  /** 设置参数的名字 */
  Key: string;
  /** 设置参数的值 */
  Value: string;
}

/** 实例参数修改历史 */
declare interface InstanceParamHistory {
  /** 参数名称 */
  ParamName: string;
  /** 修改前值 */
  PreValue: string;
  /** 修改后值 */
  NewValue: string;
  /** 状态：1-参数配置修改中；2-参数配置修改成功；3-参数配置修改失败 */
  Status: number;
  /** 修改时间 */
  ModifyTime: string;
}

/** 代理慢查询详情 */
declare interface InstanceProxySlowlogDetail {
  /** 慢查询耗时 */
  Duration: number;
  /** 客户端地址 */
  Client: string;
  /** 命令 */
  Command: string;
  /** 详细命令行信息 */
  CommandLine: string;
  /** 执行时间 */
  ExecuteTime: string;
}

/** 实例标签信息 */
declare interface InstanceTagInfo {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 实例字符型参数描述 */
declare interface InstanceTextParam {
  /** 参数名 */
  ParamName: string;
  /** 参数类型：text */
  ValueType: string;
  /** 修改后是否需要重启：true，false */
  NeedRestart: string;
  /** 参数默认值 */
  DefaultValue: string;
  /** 当前运行参数值 */
  CurrentValue: string;
  /** 参数说明 */
  Tips: string;
  /** 参数可取值 */
  TextValue: string[];
  /** 参数状态, 1: 修改中， 2：修改完成 */
  Status: number;
}

/** KeeWiDB节点的运行信息 */
declare interface KeeWiDBNode {
  /** 节点的序列ID。 */
  NodeId: string;
  /** 节点的状态。 */
  Status: string;
  /** 节点角色。 */
  Role: string;
}

/** 描述实例的主节点或者副本节点信息 */
declare interface NodeInfo {
  /** 节点类型，0 为主节点，1 为副本节点 */
  NodeType: number;
  /** 主节点或者副本节点的ID，创建时不需要传递此参数。 */
  NodeId?: number;
  /** 主节点或者副本节点的可用区ID */
  ZoneId?: number;
  /** 主节点或者副本节点的可用区名称 */
  ZoneName?: string;
}

/** 安全组出站规则 */
declare interface Outbound {
  /** 策略，ACCEPT或者DROP。 */
  Action: string;
  /** 地址组id代表的地址集合。 */
  AddressModule: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16。 */
  CidrIp: string;
  /** 描述。 */
  Desc: string;
  /** 网络协议，支持udp、tcp等。 */
  IpProtocol: string;
  /** 端口。 */
  PortRange: string;
  /** 服务组id代表的协议和端口集合。 */
  ServiceModule: string;
  /** 安全组id代表的地址集合。 */
  Id: string;
}

/** 产品规格信息 */
declare interface ProductConf {
  /** 产品类型，13-KeewiDB标准架构，14-KeewiDB集群架构 */
  Type: number;
  /** KeewiDB标准架构，KeewiDB集群架构 */
  TypeName: string;
  /** 购买时的最小数量 */
  MinBuyNum: number;
  /** 购买时的最大数量 */
  MaxBuyNum: number;
  /** 产品是否售罄 */
  Saleout: boolean;
  /** 产品引擎，keewidb */
  Engine: string;
  /** 兼容版本，Redis-2.8，Redis-3.2，Redis-4.0 */
  Version: string;
  /** 副本数量 */
  ReplicaNum: string[];
  /** 支持的计费模式，1-包年包月，0-按量计费 */
  PayMode: string;
}

/** Proxy节点信息 */
declare interface ProxyNodeInfo {
  /** 节点ID */
  NodeId: string | null;
}

/** Redis节点信息 */
declare interface RedisNodeInfo {
  /** 节点ID */
  NodeId: string;
  /** 节点角色 */
  NodeRole: string;
  /** 分片ID */
  ClusterId: number;
  /** 可用区ID */
  ZoneId: number;
}

/** 地域售卖信息 */
declare interface RegionConf {
  /** 地域ID */
  RegionId: string;
  /** 地域名称 */
  RegionName: string;
  /** 地域简称 */
  RegionShortName: string;
  /** 地域所在大区名称 */
  Area: string;
  /** 可用区信息 */
  ZoneSet: ZoneCapacityConf[];
}

/** 实例副本组信息 */
declare interface ReplicaGroup {
  /** 节点 ID。 */
  GroupId: number;
  /** 节点组的名称，主节点为空。 */
  GroupName: string;
  /** 节点的可用区ID，比如ap-guangzhou-1。 */
  ZoneId: string;
  /** 节点组角色。master：为主节点。replica：为副本节点。 */
  Role: string;
  /** 节点组节点列表。 */
  KeeWiDBNodes: KeeWiDBNode[];
}

/** 实例绑定标签 */
declare interface ResourceTag {
  /** 标签 Key。 */
  TagKey: string;
  /** 标签 Value。 */
  TagValue: string;
}

/** 安全组规则 */
declare interface SecurityGroup {
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss。 */
  CreateTime: string;
  /** 项目ID。 */
  ProjectId: number;
  /** 安全组ID。 */
  SecurityGroupId: string;
  /** 安全组名称。 */
  SecurityGroupName: string;
  /** 安全组备注。 */
  SecurityGroupRemark: string;
  /** 出站规则。 */
  Outbound: Outbound[];
  /** 入站规则。 */
  Inbound: Inbound[];
}

/** 任务信息详情 */
declare interface TaskInfoDetail {
  /** 任务Id */
  TaskId: number | null;
  /** 开始时间 */
  StartTime: string | null;
  /** 任务类型 */
  TaskType: string | null;
  /** 实例名称 */
  InstanceName: string | null;
  /** 实例Id */
  InstanceId: string | null;
  /** 项目Id */
  ProjectId: number | null;
  /** 任务进度 */
  Progress: number | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 任务状态 */
  Result: number | null;
  /** 操作者用户uin */
  OperatorUin?: string | null;
}

/** 实例慢查询详情 */
declare interface TendisSlowLogDetail {
  /** 执行时间 */
  ExecuteTime: string;
  /** 慢查询耗时（毫秒） */
  Duration: number;
  /** 命令 */
  Command: string;
  /** 详细命令行信息 */
  CommandLine: string;
  /** 节点ID */
  Node: string;
}

/** 可用区内产品售卖信息 */
declare interface ZoneCapacityConf {
  /** 可用区ID */
  ZoneId: string;
  /** 可用区名称 */
  ZoneName: string;
  /** 可用区是否售罄 */
  IsSaleout: boolean;
  /** 是否为默认可用区 */
  IsDefault: boolean;
  /** 网络类型：basenet -- 基础网络；vpcnet -- VPC网络 */
  NetWorkType: string[];
  /** 产品规格等信息 */
  ProductSet: ProductConf[];
  /** Int类型可用区ID */
  OldZoneId: number;
}

declare interface AssociateSecurityGroupsRequest {
  /** 数据库引擎名称：keewidb。 */
  Product: string;
  /** 要绑定的安全组 ID，类似sg-efil7***。 */
  SecurityGroupId: string;
  /** 实例 ID，格式如：kee-c1nl9***，支持指定多个实例。 */
  InstanceIds: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeInstanceMasterRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 副本节点 ID。 */
  NodeId: string;
}

declare interface ChangeInstanceMasterResponse {
  /** 异步任务 ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CleanUpInstanceRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
}

declare interface CleanUpInstanceResponse {
  /** 任务 ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClearInstanceRequest {
  /** 实例 ID，如：kee-6ubhg****。 */
  InstanceId: string;
  /** 实例访问密码。实例为免密访问，则无需设置该参数。 */
  Password?: string;
}

declare interface ClearInstanceResponse {
  /** 任务 ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupManuallyRequest {
  /** 待操作的实例 ID，可通过 DescribeInstance接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 本次备份的备注信息。 */
  Remark?: string;
  /** 备份文件保存天数。0代表指定默认保留时间 */
  StorageDays?: number;
}

declare interface CreateBackupManuallyResponse {
  /** 任务 ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstancesRequest {
  /** 产品版本。14：当前仅支持混合存储版。 */
  TypeId: number;
  /** 私有网络唯一ID。请登录控制台在私有网络列表查询，如：vpc-azlk3***。 */
  UniqVpcId: string;
  /** 私有网络所属子网唯一ID。请登录控制台在私有网络列表查询，如：subnet-8abje***。 */
  UniqSubnetId: string;
  /** 计费模式。0：按量计费。1：包年包月。 */
  BillingMode: number;
  /** 实例数量，单次最大购买数量以查询产品售卖规格返回的数量为准。 */
  GoodsNum: number;
  /** 选择包年包月计费模式（BillingMode 设置为1）时，您需要选择购买实例的时长。单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。按量计费（BillingMode 设置为0）实例该参数设置为1即可。 */
  Period: number;
  /** 分片数量，支持选择3、5、6、8、9、10、12、15、16、18、20、21、24、25、27、30、32、33、35、36、39、40、42、45、48、50、51、54、55、56、57、60、63、64分片。 */
  ShardNum: number;
  /** 副本数。当前仅支持设置1个副本节点，即每一个分片仅包含1个主节点与1个副本节点，数据主从实时热备。 */
  ReplicasNum: number;
  /** 计算cpu核心数。 */
  MachineCpu: number;
  /** 实例内存容量，单位：GB。KeeWiDB 内存容量MachineMemory与持久内存容量MemSize为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。 */
  MachineMemory: number;
  /** 实例所属的可用区ID。具体取值，请参见[地域和可用区](https://cloud.tencent.com/document/product/239/4106)获取。参数ZoneId和ZoneName至少配置其中一个。 */
  ZoneId?: number;
  /** 实例所属的可用区名称。具体取值，请参见[地域和可用区](https://cloud.tencent.com/document/product/239/4106)获取。参数ZoneId和ZoneName至少配置其中一个。 */
  ZoneName?: string;
  /** 创建实例的名称。仅支持长度小于60的中文、英文或者数字，短划线"-"、下划线"_"。 */
  InstanceName?: string;
  /** 指明创建的实例是否需要支持免密访问。true：免密实例。false：非免密实例，默认为非免密实例。此时，需要设置访问密码。 */
  NoAuth?: boolean;
  /** 实例访问密码。当参数NoAuth为true时，Password为无需设置，否则Password为必填参数。密码复杂度要求：8-30个字符。至少包含小写字母、大写字母、数字和字符 ()`~!@#$%^&*-+=_|{}[]:;<>,.?/ 中的2种。不能以"/"开头。 */
  Password?: string;
  /** 自定义端口。默认为6379，范围[1024,65535]。 */
  VPort?: number;
  /** 包年包月计费的续费模式。0：默认状态，指手动续费。1：自动续费。2：到期不再续费。 */
  AutoRenew?: number;
  /** 给实例设置安全组 ID 数组。 */
  SecurityGroupIdList?: string[];
  /** 给实例绑定标签。 */
  ResourceTags?: ResourceTag[];
  /** 混合存储版，单分片持久化内存容量，单位：GB。KeeWiDB 内存容量MachineMemory与持久内存容量MemSize为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。 */
  MemSize?: number;
  /** 每个分片硬盘的容量。单位：GB。每一缓存分片容量，对应的磁盘容量范围不同。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。 */
  DiskSize?: number;
  /** 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准。 */
  ProjectId?: number;
}

declare interface CreateInstancesResponse {
  /** 交易 ID。 */
  DealId?: string;
  /** 实例 ID 。 */
  InstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoBackupConfigRequest {
  /** 实例 ID。 */
  InstanceId: string;
}

declare interface DescribeAutoBackupConfigResponse {
  /** 自动备份的周期。包括：Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。 */
  WeekDays: string[];
  /** 自动备份时间段。 */
  TimePeriod: string;
  /** 全量备份文件保存天数。 */
  BackupStorageDays: number;
  /** 增量备份文件保存天数。 */
  BinlogStorageDays: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 数据库引擎名称：keewidb。 */
  Product: string;
  /** 实例ID，格式如：kee-c1nl9***。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组规则。 */
  Groups: SecurityGroup[];
  /** 安全组生效内网地址。 */
  VIP: string;
  /** 安全组生效内网端口。 */
  VPort: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceBackupsRequest {
  /** 待操作的实例ID，可通过 DescribeInstance 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 每页输出的备份列表大小，即每页输出的备份文件的数量，默认值20，取值范围为[1,100]。 */
  Limit?: number;
  /** 备份列表分页偏移量，取Limit整数倍。计算公式为offset=limit*(页码-1)。例如 limit=10，第1页offset就为0，第2页offset就为10，依次类推。 */
  Offset?: number;
  /** 查询备份文件的开始时间，格式如：2017-02-08 16:46:34。查询实例在 [BeginTime, EndTime] 时间段内的备份列表。 */
  BeginTime?: string;
  /** 查询备份文件的结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内的备份列表。 */
  EndTime?: string;
  /** 备份任务状态。1：备份在流程中。2：备份正常。3：备份转RDB文件处理中。4：已完成RDB转换。-1：备份已过期。-2：备份已删除。 */
  Status?: number[];
}

declare interface DescribeInstanceBackupsResponse {
  /** 备份文件总数。 */
  TotalCount: number;
  /** 废弃字段。 */
  BackupSet: BinlogInfo[] | null;
  /** 实例备份信息列表。 */
  BackupRecord: BackupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceBinlogsRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 每页输出备份列表大小，默认大小20。 */
  Limit?: number;
  /** 分页偏移量，取Limit整数倍。 */
  Offset?: number;
  /** 开始时间，格式如：2017-02-08 16:46:34。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。 */
  BeginTime?: string;
  /** 结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。 */
  EndTime?: string;
}

declare interface DescribeInstanceBinlogsResponse {
  /** 备份总数 */
  TotalCount: number;
  /** 实例的备份信息数组 */
  BackupSet: BinlogInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodeInfoRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 每页输出的节点信息大小。默认为 20。 */
  Limit?: number;
  /** 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。 */
  Offset?: number;
}

declare interface DescribeInstanceNodeInfoResponse {
  /** Proxy 节点数量。 */
  ProxyCount: number;
  /** Proxy 节点信息。 */
  Proxy: ProxyNodeInfo[] | null;
  /** Redis 节点数量。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。 */
  RedisCount: number;
  /** Redis 节点信息。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。 */
  Redis: RedisNodeInfo[] | null;
  /** Tendis 节点数量。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。 */
  TendisCount: number;
  /** Tendis 节点信息。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。 */
  Tendis: InstanceNodeInfo[] | null;
  /** KeewiDB 节点数量。 */
  KeeWiDBCount: number | null;
  /** KeewiDB 节点信息。 */
  KeeWiDB: InstanceNodeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamRecordsRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 每页输出的参数列表大小。默认为 20，最多输出100条。 */
  Limit?: number;
  /** 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。 */
  Offset?: number;
}

declare interface DescribeInstanceParamRecordsResponse {
  /** 修改历史记录总数。 */
  TotalCount: number;
  /** 修改历史记录信息。 */
  InstanceParamHistory: InstanceParamHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamsRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
}

declare interface DescribeInstanceParamsResponse {
  /** 实例参数总数量。 */
  TotalCount: number;
  /** 实例枚举类型参数数组。 */
  InstanceEnumParam: InstanceEnumParam[];
  /** 实例整型参数数组。 */
  InstanceIntegerParam: InstanceIntegerParam[];
  /** 实例字符型参数数组。 */
  InstanceTextParam: InstanceTextParam[];
  /** 实例多选项型参数数组。 */
  InstanceMultiParam: InstanceMultiParam[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceReplicasRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
}

declare interface DescribeInstanceReplicasResponse {
  /** 实例所有节点数量，包括主节点、副本节点。 */
  TotalCount: number;
  /** 实例节点信息。 */
  ReplicaGroups: ReplicaGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 每页输出的实例列表的大小，即每页输出的实例数量，默认值20，取值范围为[1,1000]。 */
  Limit?: number;
  /** 分页偏移量，取Limit整数倍。计算公式为offset=limit*(页码-1)。例如 limit=10，第1页offset就为0，第2页offset就为10，依次类推。 */
  Offset?: number;
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId?: string;
  /** 排序依据。枚举范围如下所示。 projectId：实例按照项目ID排序。createtime：实例按照创建时间排序。instancename：实例按照实例名称排序。type：实例按照类型排序。curDeadline：实例按照到期时间排序。 */
  OrderBy?: string;
  /** 排序方式。1：倒序。默认为倒序。0：顺序。 */
  OrderType?: number;
  /** 私有网络ID数组。数组下标从0开始，如果不传则默认选择基础网络，如：47525 */
  VpcIds?: string[];
  /** 子网ID数组，数组下标从0开始，如：56854 */
  SubnetIds?: string[];
  /** 项目ID 组成的数组，数组下标从0开始 */
  ProjectIds?: number[];
  /** 查找关键字，可输入实例的ID或者实例名称。 */
  SearchKey?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：vpc-sad23jfdfk */
  UniqVpcIds?: string[];
  /** 子网ID数组，数组下标从0开始，如：subnet-fdj24n34j2 */
  UniqSubnetIds?: string[];
  /** 实例状态。0：待初始化。1：流程中。2：运行中。-2：已隔离。-3：待删除。 */
  Status?: number[];
  /** 包年包月计费的续费模式。0：默认状态，指手动续费。1：自动续费。2：到期不再续费。 */
  AutoRenew?: number[];
  /** 计费模式。postpaid：按量计费。prepaid：包年包月。 */
  BillingMode?: string;
  /** 实例类型。13：标准版。14：集群版。 */
  Type?: number;
  /** 搜索关键词：支持实例 ID、实例名称、私有网络IP地址。 */
  SearchKeys?: string[];
  /** 内部参数，用户可忽略。 */
  TypeList?: number[];
  /** 内部参数，用户可忽略。 */
  MonitorVersion?: string;
  /** 根据标签的 Key 和 Value 筛选资源。该参数不配置或者数组设置为空值，则不根据标签进行过滤。 */
  InstanceTags?: InstanceTagInfo;
  /** 根据标签的 Key 筛选资源，该参数不配置或者数组设置为空值，则不根据标签Key进行过滤。 */
  TagKeys?: string[];
}

declare interface DescribeInstancesResponse {
  /** 实例数 */
  TotalCount: number;
  /** 实例详细信息列表 */
  InstanceSet: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMaintenanceWindowRequest {
  /** 实例 ID，如：kee-6ubhg***。 */
  InstanceId: string;
}

declare interface DescribeMaintenanceWindowResponse {
  /** 维护时间窗起始时间，如：03:00。 */
  StartTime: string;
  /** 维护时间窗结束时间，如：06:00。 */
  EndTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductInfoRequest {
}

declare interface DescribeProductInfoResponse {
  /** 地域售卖信息 */
  RegionSet: RegionConf[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 数据库引擎名称。该产品固定为 keewidb。 */
  Product: string;
  /** 项目 ID。登录 [账号中心](https://console.cloud.tencent.com/developer)，在项目管理中可获取项目 ID。 */
  ProjectId?: number;
  /** 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。 */
  Offset?: number;
  /** 每页安全组的数量限制。默认为 20，最多输出100条。 */
  Limit?: number;
  /** 搜索关键词，支持根据安全组 ID 或者安全组名称搜索。 */
  SearchKey?: string;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组规则。 */
  Groups: SecurityGroup[];
  /** 符合条件的安全组总数量。 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxySlowLogRequest {
  /** 实例 ID，如：kee-6ubhgouj */
  InstanceId: string;
  /** 开始时间。 */
  BeginTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 慢查询平均执行时间阈值。单位：毫秒。取值范围：10、20、30、40、50。 */
  MinQueryTime?: number;
  /** 每个页面大小，即每个页面输出慢日志的数量。取值范围为：10、20、30、40、50，默认为 20。 */
  Limit?: number;
  /** 页面偏移量，取Limit整数倍，计算公式：offset=limit*(页码-1)。 */
  Offset?: number;
}

declare interface DescribeProxySlowLogResponse {
  /** 慢查询总数。 */
  TotalCount: number;
  /** 慢查询详情。 */
  InstanceProxySlowLogDetail: InstanceProxySlowlogDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskInfoRequest {
  /** 任务 ID。 */
  TaskId: number;
}

declare interface DescribeTaskInfoResponse {
  /** 任务状态。preparing：待执行。running：执行中。succeed：成功。failed：失败。error：执行出错。 */
  Status: string;
  /** 任务开始时间。 */
  StartTime: string;
  /** 任务类型。 */
  TaskType: string;
  /** 实例的ID。 */
  InstanceId: string;
  /** 任务信息，错误时显示错误信息。执行中与成功则为空值。 */
  TaskMessage: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskListRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 每页输出的任务列表大小。默认为 20，最多输出100条。 */
  Limit?: number;
  /** Offset：分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。 */
  Offset?: number;
  /** 项目ID。 */
  ProjectIds?: number[];
  /** 任务类型。可设置为：FLOW_CREATE、FLOW_SETPWD、FLOW_CLOSE等。 */
  TaskTypes?: string[];
  /** 起始时间。 */
  BeginTime?: string;
  /** 终止时间。 */
  EndTime?: string;
  /** 任务状态。 */
  TaskStatus?: number[];
}

declare interface DescribeTaskListResponse {
  /** 任务总数。 */
  TotalCount: number;
  /** 任务详细信息列表。 */
  Tasks: TaskInfoDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTendisSlowLogRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 开始时间。 */
  BeginTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 慢查询平均执行时间阈值。单位：毫秒。取值范围：10、20、30、40、50。 */
  MinQueryTime?: number;
  /** 每个页面大小，即每个页面输出慢日志的数量。取值范围为：10、20、30、40、50。默认为 20。 */
  Limit?: number;
  /** 页面偏移量，取Limit整数倍，计算公式：offset=limit*(页码-1)。 */
  Offset?: number;
}

declare interface DescribeTendisSlowLogResponse {
  /** 慢查询详情。 */
  TendisSlowLogDetail: TendisSlowLogDetail[];
  /** 慢查询总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyPostpaidInstanceRequest {
  /** 实例 ID。 */
  InstanceId: string;
}

declare interface DestroyPostpaidInstanceResponse {
  /** 任务 ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyPrepaidInstanceRequest {
  /** 实例 ID。 */
  InstanceId: string;
}

declare interface DestroyPrepaidInstanceResponse {
  /** 交易ID。 */
  DealId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 数据库引擎名称：keewidb。 */
  Product: string;
  /** 要绑定的安全组 ID，类似sg-efil****。 */
  SecurityGroupId: string;
  /** 实例 ID，格式如：kee-c1nl****，支持指定多个实例。 */
  InstanceIds: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoBackupConfigRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 备份周期。可设置为 Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday，该参数暂不支持修改、 */
  WeekDays: string[];
  /** 备份任务执行时间段。可设置的格式为一个整点到下一个整点。例如：00:00-01:00、01:00-02:00、21:00-22:00、23:00-00:00等。 */
  TimePeriod: string;
}

declare interface ModifyAutoBackupConfigResponse {
  /** 增量备份文件保存天数。 */
  BackupStorageDays: number;
  /** 全量备份文件保存天数。 */
  BinlogStorageDays: number;
  /** 备份时间段。 */
  TimePeriod: string;
  /** 备份周期。Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。 */
  WeekDays: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConnectionConfigRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 单分片附加带宽，取值范围[0,512]，单位：MB。开启副本只读时，实例总带宽 = 单分片附加带宽 * 分片数 + 标准带宽 * 分片数 * Max ([只读副本数量, 1])，标准架构的分片数 = 1。没有开启副本只读时，实例总带宽 = 单分片附加带宽 * 分片数 + 标准带宽 * 分片数，标准架构的分片数 = 1。 */
  Bandwidth?: number;
  /** 单分片的总连接数。默认为10000，整个实例的最大连接数为单个分片的最大连接数 x 分片数量。标准架构分片数量为1。关闭副本只读：每个分片的最大连接数的取值范围为[10000,40000]。开启副本只读：每个分片的最大连接数的取值范围为 [10000,10000 x (副本数 + 3)]。 */
  ClientLimit?: number;
}

declare interface ModifyConnectionConfigResponse {
  /** 任务 ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 数据库引擎名称：keewidb。 */
  Product: string;
  /** 要修改的安全组ID列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIds: string[];
  /** 实例ID，格式如：kee-c1nl****。 */
  InstanceId: string;
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceParamsRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 实例修改的参数列表。 */
  InstanceParams: InstanceParam[];
}

declare interface ModifyInstanceParamsResponse {
  /** 修改是否成功。true：修改成功。false：修改失败。 */
  Changed: boolean;
  /** 任务 ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 修改实例操作。rename：表示实例重命名。modifyProject：修改实例所属项目。modifyAutoRenew：修改实例续费模式。 */
  Operation: string;
  /** 实例 ID 数组。 */
  InstanceIds?: string[];
  /** 实例的新名称。 */
  InstanceNames?: string[];
  /** 实例新的项目 ID。 */
  ProjectId?: number;
  /** 包年包月计费的续费模式。InstanceIds数组和AutoRenews数组中的修改值对应。0：默认状态，指手动续费。1：自动续费。2：到期不再续费。 */
  AutoRenews?: number[];
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMaintenanceWindowRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 维护时间窗起始时间，如：03:00。 */
  StartTime: string;
  /** 维护时间窗结束时间，如：06:00。 */
  EndTime: string;
}

declare interface ModifyMaintenanceWindowResponse {
  /** 执行结果。success：修改成功。 failed：修改失败。 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetworkConfigRequest {
  /** 实例 ID，如：kee-6ubh****。 */
  InstanceId: string;
  /** 操作类型。changeVip：修改实例私有网络。changeVpc：修改实例私有网络所属子网。changeBaseToVpc：基础网络转为私有网络。 */
  Operation: string;
  /** 修改后的 VIP 地址。当参数Operation为changeVip时，需设置实例修改后的 VIP 地址。该参数不配置，则自动分配。 */
  Vip?: string;
  /** 修改后的私有网络 ID。当参数Operation为changeVip或者为changeBaseToVpc时，务必设置实例修改后的私有网络 ID。 */
  VpcId?: string;
  /** 修改后的所属子网 ID。当参数Operation为changeVpc或者为changeBaseToVpc时，务必设置实例修改后的子网 ID。 */
  SubnetId?: string;
  /** 原 VIP 保留时长。单位：天。取值范围：0、1、2、3、7、15。 */
  Recycle?: number;
}

declare interface ModifyNetworkConfigResponse {
  /** 执行状态。true：执行成功。false：执行失败。 */
  Status: boolean;
  /** 修改后的子网 ID。 */
  SubnetId: string;
  /** 修改后的私有网络 ID。 */
  VpcId: string;
  /** 修改后的 VIP 地址。 */
  Vip: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewInstanceRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 购买时长。单位：月。取值为 [1,2,3,4,5,6,7,8,9,10,11,12,24,36,48,60]。 */
  Period: number;
}

declare interface RenewInstanceResponse {
  /** 交易 ID。 */
  DealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetPasswordRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 设置新密码。当参数NoAuth设置为true，切换为免密实例时，可不设置该参数。密码复杂度要求：长度8 - 30位, 推荐使用12位以上的密码。不能以"/"开头。至少包含以下两项：小写字母a - z大写字母A - Z数字0 - 9()~!@#$%^&*-+=_|{}[]:;<>,.?/ */
  Password?: string;
  /** 标识实例是否切换免密认证。false：由免密码认证方式切换为密码认证实例。默认为false。true：由密码认证方式切换为免密码认证的方式。 */
  NoAuth?: boolean;
}

declare interface ResetPasswordResponse {
  /** 任务 ID。说明：修改密码时的任务ID，如果切换免密访问或者非免密码实例，则无需关注此返回值。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartUpInstanceRequest {
  /** 实例 ID。 */
  InstanceId: string;
}

declare interface StartUpInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeInstanceRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 配置变更后，每个分片持久化内存容量，单位：GB。KeeWiDB 内存容量MachineMemory与持久内存容量MemSize为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。 */
  MemSize?: number;
  /** CPU 核数。 */
  MachineCpu?: number;
  /** 实例内存容量，单位：GB。KeeWiDB 内存容量MachineMemory与持久内存容量MemSize为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。 */
  MachineMemory?: number;
  /** 配置变更后，分片数量。增加后分片的数量务必为增加之前数量的整数倍。分片数量支持选择3、5、6、8、9、10、12、15、16、18、20、21、24、25、27、30、32、33、35、36、39、40、42、45、48、50、51、54、55、56、57、60、63、64分片。变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。 */
  ShardNum?: number;
  /** 配置变更后，每个分片硬盘的容量。单位：GB。每一缓存分片容量，对应的磁盘容量范围不同。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。 */
  DiskSize?: number;
}

declare interface UpgradeInstanceResponse {
  /** 交易ID。 */
  DealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Keewidb 云数据库 KeeWiDB} */
declare interface Keewidb {
  (): Versions;
  /** 绑定安全组 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 副本节点或副本组提主 {@link ChangeInstanceMasterRequest} {@link ChangeInstanceMasterResponse} */
  ChangeInstanceMaster(data: ChangeInstanceMasterRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeInstanceMasterResponse>;
  /** 回收站实例立即下线 {@link CleanUpInstanceRequest} {@link CleanUpInstanceResponse} */
  CleanUpInstance(data: CleanUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CleanUpInstanceResponse>;
  /** 清空实例数据 {@link ClearInstanceRequest} {@link ClearInstanceResponse} */
  ClearInstance(data: ClearInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ClearInstanceResponse>;
  /** 手动发起备份 {@link CreateBackupManuallyRequest} {@link CreateBackupManuallyResponse} */
  CreateBackupManually(data: CreateBackupManuallyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupManuallyResponse>;
  /** 创建数据库实例 {@link CreateInstancesRequest} {@link CreateInstancesResponse} */
  CreateInstances(data: CreateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancesResponse>;
  /** 获取自动备份配置 {@link DescribeAutoBackupConfigRequest} {@link DescribeAutoBackupConfigResponse} */
  DescribeAutoBackupConfig(data: DescribeAutoBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoBackupConfigResponse>;
  /** 查询实例安全组详情 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询实例全量备份列表 {@link DescribeInstanceBackupsRequest} {@link DescribeInstanceBackupsResponse} */
  DescribeInstanceBackups(data: DescribeInstanceBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceBackupsResponse>;
  /** 查询增量备份列表 {@link DescribeInstanceBinlogsRequest} {@link DescribeInstanceBinlogsResponse} */
  DescribeInstanceBinlogs(data: DescribeInstanceBinlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceBinlogsResponse>;
  /** 查询实例节点信息 {@link DescribeInstanceNodeInfoRequest} {@link DescribeInstanceNodeInfoResponse} */
  DescribeInstanceNodeInfo(data: DescribeInstanceNodeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodeInfoResponse>;
  /** 查询参数修改历史列表 {@link DescribeInstanceParamRecordsRequest} {@link DescribeInstanceParamRecordsResponse} */
  DescribeInstanceParamRecords(data: DescribeInstanceParamRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamRecordsResponse>;
  /** 查询实例的参数列表 {@link DescribeInstanceParamsRequest} {@link DescribeInstanceParamsResponse} */
  DescribeInstanceParams(data: DescribeInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamsResponse>;
  /** 获取实例副本节点信息 {@link DescribeInstanceReplicasRequest} {@link DescribeInstanceReplicasResponse} */
  DescribeInstanceReplicas(data: DescribeInstanceReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceReplicasResponse>;
  /** 查询实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询实例维护时间窗 {@link DescribeMaintenanceWindowRequest} {@link DescribeMaintenanceWindowResponse} */
  DescribeMaintenanceWindow(data: DescribeMaintenanceWindowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaintenanceWindowResponse>;
  /** 查询产品售卖信息 {@link DescribeProductInfoRequest} {@link DescribeProductInfoResponse} */
  DescribeProductInfo(data?: DescribeProductInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductInfoResponse>;
  /** 查询项目安全组详情 {@link DescribeProjectSecurityGroupsRequest} {@link DescribeProjectSecurityGroupsResponse} */
  DescribeProjectSecurityGroups(data: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** 查询代理慢查询 {@link DescribeProxySlowLogRequest} {@link DescribeProxySlowLogResponse} */
  DescribeProxySlowLog(data: DescribeProxySlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxySlowLogResponse>;
  /** 查询异步任务结果 {@link DescribeTaskInfoRequest} {@link DescribeTaskInfoResponse} */
  DescribeTaskInfo(data: DescribeTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInfoResponse>;
  /** 查询任务列表信息 {@link DescribeTaskListRequest} {@link DescribeTaskListResponse} */
  DescribeTaskList(data?: DescribeTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskListResponse>;
  /** 查询实例慢查询 {@link DescribeTendisSlowLogRequest} {@link DescribeTendisSlowLogResponse} */
  DescribeTendisSlowLog(data: DescribeTendisSlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTendisSlowLogResponse>;
  /** 按量计费实例退还 {@link DestroyPostpaidInstanceRequest} {@link DestroyPostpaidInstanceResponse} */
  DestroyPostpaidInstance(data: DestroyPostpaidInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPostpaidInstanceResponse>;
  /** 包年包月实例退还 {@link DestroyPrepaidInstanceRequest} {@link DestroyPrepaidInstanceResponse} */
  DestroyPrepaidInstance(data: DestroyPrepaidInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPrepaidInstanceResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 修改自动备份配置 {@link ModifyAutoBackupConfigRequest} {@link ModifyAutoBackupConfigResponse} */
  ModifyAutoBackupConfig(data: ModifyAutoBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoBackupConfigResponse>;
  /** 修改实例连接配置 {@link ModifyConnectionConfigRequest} {@link ModifyConnectionConfigResponse} */
  ModifyConnectionConfig(data: ModifyConnectionConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConnectionConfigResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改实例相关信息 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** 修改实例参数配置 {@link ModifyInstanceParamsRequest} {@link ModifyInstanceParamsResponse} */
  ModifyInstanceParams(data: ModifyInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceParamsResponse>;
  /** 修改实例维护时间窗时间 {@link ModifyMaintenanceWindowRequest} {@link ModifyMaintenanceWindowResponse} */
  ModifyMaintenanceWindow(data: ModifyMaintenanceWindowRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMaintenanceWindowResponse>;
  /** 修改实例网络配置 {@link ModifyNetworkConfigRequest} {@link ModifyNetworkConfigResponse} */
  ModifyNetworkConfig(data: ModifyNetworkConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkConfigResponse>;
  /** 续费实例 {@link RenewInstanceRequest} {@link RenewInstanceResponse} */
  RenewInstance(data: RenewInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewInstanceResponse>;
  /** 重置密码 {@link ResetPasswordRequest} {@link ResetPasswordResponse} */
  ResetPassword(data: ResetPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetPasswordResponse>;
  /** 按量计费实例解隔离 {@link StartUpInstanceRequest} {@link StartUpInstanceResponse} */
  StartUpInstance(data: StartUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StartUpInstanceResponse>;
  /** 升级扩容实例 {@link UpgradeInstanceRequest} {@link UpgradeInstanceResponse} */
  UpgradeInstance(data: UpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceResponse>;
}

export declare type Versions = ["2022-03-08"];

export default Keewidb;
