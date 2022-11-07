/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 子账号信息 */
declare interface Account {
  /** 实例ID */
  InstanceId: string | null;
  /** 账号名称（如果是主账号，名称为root） */
  AccountName: string | null;
  /** 账号描述信息 */
  Remark: string | null;
  /** 读写策略：r-只读，w-只写，rw-读写 */
  Privilege: string | null;
  /** 路由策略：master-主节点，replication-从节点 */
  ReadonlyPolicy: string[] | null;
  /** 子账号状态：1-账号变更中，2-账号有效，-4-账号已删除 */
  Status: number | null;
}

/** 备份文件下载信息 */
declare interface BackupDownloadInfo {
  /** 备份文件名称 */
  FileName: string;
  /** 备份文件大小，单位B，如果为0，表示无效 */
  FileSize: number;
  /** 备份文件外网下载地址（6小时） */
  DownloadUrl: string;
  /** 备份文件内网下载地址（6小时） */
  InnerDownloadUrl: string;
}

/** 大Key详情 */
declare interface BigKeyInfo {
  /** 所属的database */
  DB: number;
  /** 大Key */
  Key: string;
  /** 类型 */
  Type: string;
  /** 大小 */
  Size: number;
  /** 数据时间戳 */
  Updatetime: number;
}

/** 大Key类型分布详情 */
declare interface BigKeyTypeInfo {
  /** 类型 */
  Type: string;
  /** 数量 */
  Count: number;
  /** 大小 */
  Size: number;
  /** 时间戳 */
  Updatetime: number;
}

/** 命令耗时 */
declare interface CommandTake {
  /** 命令 */
  Cmd: string;
  /** 耗时 */
  Took: number;
}

/** 延时分布详情 */
declare interface DelayDistribution {
  /** 分布阶梯，延时和Ladder值的对应关系：[0ms,1ms]: 1；[1ms,5ms]: 5；[5ms,10ms]: 10；[10ms,50ms]: 50；[50ms,200ms]: 200；[200ms,∞]: -1。 */
  Ladder: number;
  /** 延时处于当前分布阶梯的命令数量，个。 */
  Size: number;
  /** 修改时间。 */
  Updatetime: number;
}

/** 详细DTS实例信息 */
declare interface DescribeInstanceDTSInstanceInfo {
  /** 地域ID */
  RegionId: number | null;
  /** 实例ID */
  InstanceId: string | null;
  /** 仓库ID */
  SetId: number | null;
  /** 可用区ID */
  ZoneId: number | null;
  /** 实例类型 */
  Type: number | null;
  /** 实例名称 */
  InstanceName: string | null;
  /** 实例访问地址 */
  Vip: string | null;
  /** 状态 */
  Status: number | null;
}

/** 复制组信息 */
declare interface Groups {
  /** 用户AppID */
  AppId: number;
  /** 地域ID 1--广州 4--上海 5-- 中国香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本 */
  RegionId: number;
  /** 复制组信息 */
  GroupId: string;
  /** 复制组名称 */
  GroupName: string | null;
  /** 复制组状态，37："绑定复制组中"，38："复制组重连中"，51："解绑复制组中"，52："复制组实例切主中"，53："角色变更中" */
  Status: number;
  /** 复制组数量 */
  InstanceCount: number;
  /** 复制组实例 */
  Instances: Instances[] | null;
  /** 备注信息 */
  Remark: string | null;
}

/** 热Key详细信息 */
declare interface HotKeyInfo {
  /** 热Key */
  Key: string;
  /** 类型 */
  Type: string;
  /** 数量 */
  Count: number;
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

/** 实例节点类型 */
declare interface InstanceClusterNode {
  /** 节点名称 */
  Name: string;
  /** 实例运行时节点Id */
  RunId: string;
  /** 集群角色：0-master；1-slave */
  Role: number;
  /** 节点状态：0-readwrite, 1-read, 2-backup */
  Status: number;
  /** 服务状态：0-down；1-on */
  Connected: number;
  /** 节点创建时间 */
  CreateTime: string;
  /** 节点下线时间 */
  DownTime: string;
  /** 节点slot分布 */
  Slots: string;
  /** 节点key分布 */
  Keys: number;
  /** 节点qps */
  Qps: number;
  /** 节点qps倾斜度 */
  QpsSlope: number;
  /** 节点存储 */
  Storage: number;
  /** 节点存储倾斜度 */
  StorageSlope: number;
}

/** 实例分片列表信息 */
declare interface InstanceClusterShard {
  /** 分片节点名称 */
  ShardName: string;
  /** 分片节点Id */
  ShardId: string;
  /** 角色 */
  Role: number;
  /** Key数量 */
  Keys: number;
  /** slot信息 */
  Slots: string;
  /** 使用容量 */
  Storage: number;
  /** 容量倾斜率 */
  StorageSlope: number;
  /** 实例运行时节点Id */
  Runid: string;
  /** 服务状态：0-down；1-on */
  Connected: number;
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

/** 实例节点 */
declare interface InstanceNode {
  /** Id */
  Id: number;
  /** 节点详细信息 */
  InstanceClusterNode: InstanceClusterNode[];
}

/** 实例参数 */
declare interface InstanceParam {
  /** 设置参数的名称。例如timeout。当前支持自定义的参数，请参见参数配置。 */
  Key: string;
  /** 设置参数名称对应的运行值。例如timeout对应运行值可设置为120， 单位为秒（s）。指当客户端连接闲置时间达到120 s时，将关闭连接。更多参数取值信息，请参见参数配置。 */
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

/** 实例安全组信息 */
declare interface InstanceSecurityGroupDetail {
  /** 实例Id */
  InstanceId: string;
  /** 安全组信息 */
  SecurityGroupDetails: SecurityGroupDetail[];
}

/** 实例详细信息列表 */
declare interface InstanceSet {
  /** 实例名称。 */
  InstanceName: string;
  /** 实例Id。 */
  InstanceId: string;
  /** 用户的Appid。 */
  Appid: number;
  /** 项目Id。 */
  ProjectId: number;
  /** 地域id 。1--广州 4--上海 5-- 中国香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本 */
  RegionId: number;
  /** 区域id。 */
  ZoneId: number;
  /** vpc网络id，例如75101。 */
  VpcId: number;
  /** vpc网络下子网id 如：46315。 */
  SubnetId: number;
  /** 实例当前状态。0：待初始化。1：实例在流程中。2：实例运行中。-2：实例已隔离。-3：实例待删除。 */
  Status: number;
  /** 实例vip。 */
  WanIp: string;
  /** 实例端口号。 */
  Port: number;
  /** 实例创建时间。 */
  Createtime: string;
  /** 实例容量大小，单位：MB。 */
  Size: number;
  /** 该字段已废弃。 */
  SizeUsed: number;
  /** 实例类型：1：Redis2.8内存版（集群架构）。2：Redis2.8内存版（标准架构）。3：CKV 3.2内存版(标准架构)。4：CKV 3.2内存版(集群架构)。5：Redis2.8内存版（单机）。6：Redis4.0内存版（标准架构）。7：Redis4.0内存版（集群架构）。8：Redis5.0内存版（标准架构）。9：Redis5.0内存版（集群架构）。 */
  Type: number;
  /** 实例是否设置自动续费标识。1：设置自动续费。0：未设置自动续费。 */
  AutoRenewFlag: number;
  /** 实例到期时间。 */
  DeadlineTime: string;
  /** 引擎：社区版Redis、腾讯云CKV。 */
  Engine: string;
  /** 产品类型。standalone：标准版。cluster ：集群版。 */
  ProductType: string;
  /** vpc网络id，例如vpc-fk33jsf43kgv。 */
  UniqVpcId: string;
  /** vpc网络下子网id，例如：subnet-fd3j6l35mm0。 */
  UniqSubnetId: string;
  /** 计费模式。0：按量计费。1：包年包月。 */
  BillingMode: number;
  /** 实例运行状态描述：如”实例运行中“。 */
  InstanceTitle: string;
  /** 计划下线时间。 */
  OfflineTime: string;
  /** 流程中的实例，返回子状态。 */
  SubStatus: number;
  /** 反亲和性标签。 */
  Tags: string[];
  /** 实例节点信息。 */
  InstanceNode: InstanceNode[];
  /** 分片大小。 */
  RedisShardSize: number;
  /** 分片数量。 */
  RedisShardNum: number;
  /** 副本数量。 */
  RedisReplicasNum: number;
  /** 计费Id。 */
  PriceId: number;
  /** 隔离时间。 */
  CloseTime: string;
  /** 从节点读取权重。 */
  SlaveReadWeight: number;
  /** 实例关联的标签信息。 */
  InstanceTags: InstanceTagInfo[] | null;
  /** 项目名称。 */
  ProjectName: string | null;
  /** 是否为免密实例。true：免密实例。false：非免密实例。 */
  NoAuth: boolean | null;
  /** 客户端连接数。 */
  ClientLimit: number | null;
  /** DTS状态（内部参数，用户可忽略）。 */
  DtsStatus: number | null;
  /** 分片带宽上限，单位MB。 */
  NetLimit: number | null;
  /** 免密实例标识（内部参数，用户可忽略）。 */
  PasswordFree: number | null;
  /** 内部参数，用户可忽略。 */
  Vip6: string | null;
  /** 实例只读标识（内部参数，用户可忽略）。 */
  ReadOnly: number | null;
  /** 内部参数，用户可忽略。 */
  RemainBandwidthDuration: string | null;
  /** Redis实例请忽略该参数。 */
  DiskSize: number | null;
  /** 监控版本。1m：分钟粒度监控。5s：5秒粒度监控。 */
  MonitorVersion: string | null;
  /** 客户端最大连接数可设置的最小值。 */
  ClientLimitMin: number | null;
  /** 客户端最大连接数可设置的最大值。 */
  ClientLimitMax: number | null;
  /** 实例的节点详细信息。 */
  NodeSet: RedisNodeInfo[] | null;
  /** 实例所在的地域信息，比如ap-guangzhou。 */
  Region: string | null;
  /** 外网地址。 */
  WanAddress: string | null;
  /** 北极星服务地址。 */
  PolarisServer: string | null;
  /** 实例当前Proxy版本。 */
  CurrentProxyVersion: string | null;
  /** 实例当前Cache小版本。 */
  CurrentRedisVersion: string | null;
  /** 实例可升级Proxy版本。 */
  UpgradeProxyVersion: string | null;
  /** 实例可升级Cache小版本。 */
  UpgradeRedisVersion: string | null;
}

/** 慢查询详情 */
declare interface InstanceSlowlogDetail {
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
  /** 节点ID */
  Node: string;
}

/** 实例标签信息 */
declare interface InstanceTagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
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

/** 复制组实例 */
declare interface Instances {
  /** 用户AppID */
  AppId: number;
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 地域ID 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷） */
  RegionId: number;
  /** 区域ID */
  ZoneId: number;
  /** 副本数量 */
  RedisReplicasNum: number;
  /** 分片数量 */
  RedisShardNum: number;
  /** 分片大小 */
  RedisShardSize: number;
  /** 实例的磁盘大小 */
  DiskSize: number | null;
  /** 引擎：社区版Redis、腾讯云CKV */
  Engine: string;
  /** 实例角色，rw可读写，r只读 */
  Role: string;
  /** 实例VIP */
  Vip: string;
  /** 内部参数，用户可忽略 */
  Vip6: string | null;
  /** vpc网络ID 如：75101 */
  VpcID: number;
  /** 实例端口 */
  VPort: number;
  /** 实例状态：0-待初始化，1-流程中，2-运行中，-2-已隔离，-3-待删除 */
  Status: number;
  /** 仓库ID */
  GrocerySysId: number;
  /** 实例类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构） */
  ProductType: number;
  /** 创建时间 */
  CreateTime: string;
  /** 更新实例 */
  UpdateTime: string;
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

/** 参数模板信息 */
declare interface ParamTemplateInfo {
  /** 参数模板ID */
  TemplateId: string;
  /** 参数模板名称 */
  Name: string;
  /** 参数模板描述 */
  Description: string;
  /** 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构） */
  ProductType: number;
}

/** Redis参数模板参数详情 */
declare interface ParameterDetail {
  /** 参数名称 */
  Name: string;
  /** 参数类型 */
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
  Max: string | null;
  /** 参数允许的最小值 */
  Min: string | null;
  /** 参数的可选枚举值。如果为非枚举参数，则为空 */
  EnumValue: string[] | null;
}

/** 产品信息 */
declare interface ProductConf {
  /** 产品类型，2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版(单机版)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)，10 – Redis4.0混合存储版Tendis */
  Type: number;
  /** 产品名称，Redis主从版，CKV主从版，CKV集群版，Redis单机版，Redis集群版，混合存储版Tendis */
  TypeName: string;
  /** 购买时的最小数量 */
  MinBuyNum: number;
  /** 购买时的最大数量 */
  MaxBuyNum: number;
  /** 产品是否售罄 */
  Saleout: boolean;
  /** 产品引擎，腾讯云CKV或者社区版Redis */
  Engine: string;
  /** 兼容版本，Redis-2.8，Redis-3.2，Redis-4.0 */
  Version: string;
  /** 规格总大小，单位G */
  TotalSize: string[];
  /** 每个分片大小，单位G */
  ShardSize: string[];
  /** 副本数量 */
  ReplicaNum: string[];
  /** 分片数量 */
  ShardNum: string[];
  /** 支持的计费模式，1-包年包月，0-按量计费 */
  PayMode: string;
  /** 是否支持副本只读 */
  EnableRepicaReadOnly: boolean;
}

/** Proxy节点信息。 */
declare interface ProxyNodes {
  /** 节点 ID。 */
  NodeId: string | null;
  /** 可用区 ID。 */
  ZoneId: number | null;
}

/** 实例的备份数组 */
declare interface RedisBackupSet {
  /** 开始备份的时间 */
  StartTime: string;
  /** 备份ID */
  BackupId: string;
  /** 备份类型。1：用户发起的手动备份； 0：凌晨系统发起的备份 */
  BackupType: string;
  /** 备份状态。 1:"备份被其它流程锁定"; 2:"备份正常，没有被任何流程锁定"; -1:"备份已过期"； 3:"备份正在被导出"; 4:"备份导出成功" */
  Status: number;
  /** 备份的备注信息 */
  Remark: string;
  /** 备份是否被锁定，0：未被锁定；1：已被锁定 */
  Locked: number;
  /** 内部字段，用户可忽略 */
  BackupSize: number | null;
  /** 内部字段，用户可忽略 */
  FullBackup: number | null;
  /** 内部字段，用户可忽略 */
  InstanceType: number | null;
}

/** 单个实例信息 */
declare interface RedisCommonInstanceList {
  /** 实例名称 */
  InstanceName: string;
  /** 实例id */
  InstanceId: string;
  /** 用户id */
  AppId: number;
  /** 实例所属项目id */
  ProjectId: number;
  /** 实例接入区域 */
  Region: string;
  /** 实例接入zone */
  Zone: string;
  /** 实例网络id */
  VpcId: string;
  /** 子网id */
  SubnetId: string;
  /** 实例状态信息，1-流程中 ,2-运行中, -2-实例已隔离 ,-3-实例待回收, -4-实例已删除 */
  Status: string;
  /** 实例网络ip */
  Vips: string[];
  /** 实例网络端口 */
  Vport: number;
  /** 实例创建时间 */
  Createtime: string;
  /** 计费类型，0-按量计费，1-包年包月 */
  PayMode: number;
  /** 网络类型，0-基础网络，1-VPC网络 */
  NetType: number;
}

/** Redis节点的运行信息 */
declare interface RedisNode {
  /** 节点key的个数 */
  Keys: number;
  /** 节点slot分布 */
  Slot: string;
  /** 节点的序列ID */
  NodeId: string;
  /** 节点的状态 */
  Status: string;
  /** 节点角色 */
  Role: string;
}

/** 描述Redis实例的主节点或者副本节点信息 */
declare interface RedisNodeInfo {
  /** 节点类型，0 为主节点，1 为副本节点 */
  NodeType: number;
  /** 主节点或者副本节点的ID，创建时不需要传递此参数。 */
  NodeId?: number;
  /** 主节点或者副本节点的可用区ID */
  ZoneId?: number;
  /** 主节点或者副本节点的可用区名称 */
  ZoneName?: string;
}

/** Redis节点信息 */
declare interface RedisNodes {
  /** 节点ID */
  NodeId: string;
  /** 节点角色 */
  NodeRole: string;
  /** 分片ID */
  ClusterId: number;
  /** 可用区ID */
  ZoneId: number;
}

/** 地域信息 */
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

/** 实例节点信息 */
declare interface ReplicaGroup {
  /** 节点组ID */
  GroupId: number;
  /** 节点组的名称，主节点为空 */
  GroupName: string;
  /** 节点的可用区ID，比如ap-guangzhou-1 */
  ZoneId: string;
  /** 节点组类型，master为主节点，replica为副本节点 */
  Role: string;
  /** 节点组节点列表 */
  RedisNodes: RedisNode[];
}

/** API购买实例绑定标签 */
declare interface ResourceTag {
  /** 标签key */
  TagKey: string;
  /** 标签value */
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

/** 安全组详情 */
declare interface SecurityGroupDetail {
  /** 项目Id */
  ProjectId: number;
  /** 创建时间 */
  CreateTime: string;
  /** 安全组Id */
  SecurityGroupId: string;
  /** 安全组名称 */
  SecurityGroupName: string;
  /** 安全组标记 */
  SecurityGroupRemark: string;
  /** 安全组入站规则 */
  InboundRule: SecurityGroupsInboundAndOutbound[];
  /** 安全组出站规则 */
  OutboundRule: SecurityGroupsInboundAndOutbound[];
}

/** 安全组出入规则 */
declare interface SecurityGroupsInboundAndOutbound {
  /** 执行动作 */
  Action: string;
  /** IP地址 */
  Ip: string;
  /** 端口号 */
  Port: string;
  /** 协议类型 */
  Proto: string;
}

/** 访问命令 */
declare interface SourceCommand {
  /** 命令 */
  Cmd: string;
  /** 执行次数 */
  Count: number;
}

/** 访问来源信息 */
declare interface SourceInfo {
  /** 来源IP */
  Ip: string;
  /** 连接数 */
  Conn: number;
  /** 命令 */
  Cmd: number;
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
}

/** tendis节点信息 */
declare interface TendisNodes {
  /** 节点ID */
  NodeId: string;
  /** 节点角色 */
  NodeRole: string;
}

/** Tendis慢查询详情 */
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

/** 订单交易信息 */
declare interface TradeDealDetail {
  /** 订单号ID，调用云API时使用此ID */
  DealId: string;
  /** 长订单ID，反馈订单问题给官方客服使用此ID */
  DealName: string;
  /** 可用区id */
  ZoneId: number;
  /** 订单关联的实例数 */
  GoodsNum: number;
  /** 创建用户uin */
  Creater: string;
  /** 订单创建时间 */
  CreatTime: string;
  /** 订单超时时间 */
  OverdueTime: string;
  /** 订单完成时间 */
  EndTime: string;
  /** 订单状态 1：未支付 2:已支付，未发货 3:发货中 4:发货成功 5:发货失败 6:已退款 7:已关闭订单 8:订单过期 9:订单已失效 10:产品已失效 11:代付拒绝 12:支付中 */
  Status: number;
  /** 订单状态描述 */
  Description: string;
  /** 订单实际总价，单位：分 */
  Price: number;
  /** 实例ID */
  InstanceIds: string[];
}

/** 可用区内产品信息 */
declare interface ZoneCapacityConf {
  /** 可用区ID：如ap-guangzhou-3 */
  ZoneId: string;
  /** 可用区名称 */
  ZoneName: string;
  /** 可用区是否售罄 */
  IsSaleout: boolean;
  /** 是否为默认可用区 */
  IsDefault: boolean;
  /** 网络类型：basenet -- 基础网络；vpcnet -- VPC网络 */
  NetWorkType: string[];
  /** 可用区内产品规格等信息 */
  ProductSet: ProductConf[];
  /** 可用区ID：如100003 */
  OldZoneId: number;
}

declare interface AddReplicationInstanceRequest {
  /** 复制组ID。 */
  GroupId: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 给复制组添加的实例分配角色。rw：可读写。r：只读。 */
  InstanceRole: string;
}

declare interface AddReplicationInstanceResponse {
  /** 异步流程ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AllocateWanAddressRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface AllocateWanAddressResponse {
  /** 异步流程ID */
  FlowId: number;
  /** 开通外网的状态 */
  WanStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ApplyParamsTemplateRequest {
  /** 实例ID列表 */
  InstanceIds: string[];
  /** 应用的参数模板ID */
  TemplateId: string;
}

declare interface ApplyParamsTemplateResponse {
  /** 任务ID */
  TaskIds: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：redis。 */
  Product: string;
  /** 要绑定的安全组ID，类似sg-efil73jd。 */
  SecurityGroupId: string;
  /** 被绑定的实例ID，类似ins-lesecurk，支持指定多个实例。 */
  InstanceIds: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChangeInstanceRoleRequest {
  /** 复制组ID */
  GroupId: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例角色，rw可读写，r只读 */
  InstanceRole: string;
}

declare interface ChangeInstanceRoleResponse {
  /** 异步流程ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChangeMasterInstanceRequest {
  /** 复制组ID */
  GroupId: string;
  /** 实例ID */
  InstanceId: string;
}

declare interface ChangeMasterInstanceResponse {
  /** 异步流程ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChangeReplicaToMasterRequest {
  /** 实例Id */
  InstanceId: string;
  /** 副本组Id，多AZ实例必填 */
  GroupId?: number;
}

declare interface ChangeReplicaToMasterResponse {
  /** 异步任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CleanUpInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface CleanUpInstanceResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ClearInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** redis的实例密码（免密实例不需要传密码，非免密实例必传） */
  Password?: string;
}

declare interface ClearInstanceResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CloseSSLRequest {
  /** 实例ID。 */
  InstanceId: string;
}

declare interface CloseSSLResponse {
  /** 任务ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateInstanceAccountRequest {
  /** 实例ID */
  InstanceId: string;
  /** 子账号名称 */
  AccountName: string;
  /** 1.长度8-30位,推荐使用12位以上的密码2.不能以"/"开头3.至少包含两项 a.小写字母a-z b.大写字母A-Z c.数字0-9 d.()`~!@#$%^&*-+=_|{}[]:;<>,.?/ */
  AccountPassword: string;
  /** 路由策略：填写master或者replication，表示主节点或者从节点 */
  ReadonlyPolicy: string[];
  /** 读写策略：填写r、rw，表示只读、读写 */
  Privilege: string;
  /** 子账号描述信息 */
  Remark?: string;
}

declare interface CreateInstanceAccountResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateInstancesRequest {
  /** 实例类型：2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)，15 – Redis6.0内存版(标准架构)，16 – Redis6.0内存版(集群架构)。 */
  TypeId: number;
  /** 内存容量，单位为MB， 数值需为1024的整数倍，具体规格以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。TypeId为标准架构时，MemSize是实例总内存容量；TypeId为集群架构时，MemSize是单分片内存容量。 */
  MemSize: number;
  /** 实例数量，单次购买实例数量以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。 */
  GoodsNum: number;
  /** 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。 */
  Period: number;
  /** 付费方式:0-按量计费，1-包年包月。 */
  BillingMode: number;
  /** 实例所属的可用区ID，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106) 。 */
  ZoneId?: number;
  /** 实例密码，当输入参数NoAuth为true且使用私有网络VPC时，Password为非必填，否则Password为必填参数。当实例类型TypeId为Redis2.8、4.0和5.0时，其密码格式为：8-30个字符，至少包含小写字母、大写字母、数字和字符 ()`~!@#$%^&*-+=_|{}[]:;<>,.?/ 中的2种，不能以"/"开头；当实例类型TypeId为CKV 3.2时，其密码格式为：8-30个字符，必须包含字母和数字 且 不包含其他字符。 */
  Password?: string;
  /** 私有网络ID，如果不传则默认选择基础网络，请使用私有网络列表查询，如：vpc-sad23jfdfk。 */
  VpcId?: string;
  /** 基础网络下， subnetId无效； vpc子网下，取值以查询子网列表，如：subnet-fdj24n34j2。 */
  SubnetId?: string;
  /** 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准。 */
  ProjectId?: number;
  /** 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费。 */
  AutoRenew?: number;
  /** 安全组id数组。 */
  SecurityGroupIdList?: string[];
  /** 用户自定义的端口 不填则默认为6379，范围[1024,65535]。 */
  VPort?: number;
  /** 实例分片数量，购买标准版实例不需要填写，集群版分片数量范围[3,5,8,12,16,24,32,64,96,128]。 */
  RedisShardNum?: number;
  /** 实例副本数量，Redis 2.8标准版、CKV标准版只支持1副本，4.0、5.0标准版和集群版支持1-5个副本。 */
  RedisReplicasNum?: number;
  /** 是否支持副本只读，Redis 2.8标准版、CKV标准版不支持副本只读，开启副本只读，实例将自动读写分离，写请求路由到主节点，读请求路由到副本节点，如需开启副本只读建议副本数>=2。 */
  ReplicasReadonly?: boolean;
  /** 实例名称，长度小于60的中文/英文/数字/"-"/"_"。 */
  InstanceName?: string;
  /** 是否支持免密，true-免密实例，false-非免密实例，默认为非免密实例，仅VPC网络的实例支持免密码访问。 */
  NoAuth?: boolean;
  /** 实例的节点信息，目前支持传入节点的类型（主节点或者副本节点），节点的可用区。单可用区部署不需要传递此参数。 */
  NodeSet?: RedisNodeInfo[];
  /** 购买实例绑定标签 */
  ResourceTags?: ResourceTag[];
  /** 实例所属的可用区名称，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106) 。 */
  ZoneName?: string;
  /** 创建实例需要应用的参数模板ID，不传则应用默认的参数模板 */
  TemplateId?: string;
  /** false ：默认值,发送正常请求，通过检查后直接创建实例 true：发送检查请求，不会创建实例。 */
  DryRun?: boolean;
  /** "local"本地盘版，"cloud"云盘版，"cdc"独享集群版，如果不传默认发货为本地盘版本 */
  ProductVersion?: string;
  /** 独享集群id，ProductVersion="cdc"时必传 */
  RedisClusterId?: string;
}

declare interface CreateInstancesResponse {
  /** 交易的ID */
  DealId: string;
  /** 实例ID */
  InstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateParamTemplateRequest {
  /** 参数模板名称。 */
  Name: string;
  /** 参数模板描述。 */
  Description?: string;
  /** 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）。创建模板时必填，从源模板复制则不需要传入该参数。 */
  ProductType?: number;
  /** 源参数模板 ID。 */
  TemplateId?: string;
  /** 参数列表。 */
  ParamList?: InstanceParam[];
}

declare interface CreateParamTemplateResponse {
  /** 参数模板 ID。 */
  TemplateId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateReplicationGroupRequest {
  /** 指定复制组中的主实例ID。 */
  InstanceId: string;
  /** 复制组名称。 */
  GroupName?: string;
  /** 备注信息。 */
  Remark?: string;
}

declare interface CreateReplicationGroupResponse {
  /** 异步流程ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteInstanceAccountRequest {
  /** 实例ID */
  InstanceId: string;
  /** 子账号名称 */
  AccountName: string;
}

declare interface DeleteInstanceAccountResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteParamTemplateRequest {
  /** 参数模板 ID。 */
  TemplateId: string;
}

declare interface DeleteParamTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReplicationInstanceRequest {
  /** 复制组ID */
  GroupId: string;
  /** 实例ID */
  InstanceId: string;
  /** 数据同步类型，true:需要数据强同步,false:不需要强同步，仅限删除主实例 */
  SyncType: boolean;
}

declare interface DeleteReplicationInstanceResponse {
  /** 异步任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAutoBackupConfigRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeAutoBackupConfigResponse {
  /** 备份类型。自动备份类型： 1 “定时回档” */
  AutoBackupType: number;
  /** Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。 */
  WeekDays: string[];
  /** 时间段。 */
  TimePeriod: string;
  /** 全量备份文件保存天数 */
  BackupStorageDays: number;
  /** tendis binlog备份文件保存天数 */
  BinlogStorageDays: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBackupUrlRequest {
  /** 实例ID */
  InstanceId: string;
  /** 备份ID，通过DescribeInstanceBackups接口可查 */
  BackupId: string;
}

declare interface DescribeBackupUrlResponse {
  /** 外网下载地址（6小时内链接有效），该字段正在逐步废弃中。 */
  DownloadUrl: string[];
  /** 内网下载地址（6小时内链接有效），该字段正在逐步废弃中。 */
  InnerDownloadUrl: string[];
  /** 文件名称，该字段正在逐步废弃中。 */
  Filenames: string[] | null;
  /** 备份文件信息列表 */
  BackupInfos: BackupDownloadInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCommonDBInstancesRequest {
  /** vpc网络ID信息列表 */
  VpcIds?: number[];
  /** 子网ID信息列表 */
  SubnetIds?: number[];
  /** 计费类型过滤列表；0表示包年包月，1表示按量计费 */
  PayMode?: number;
  /** 实例ID过滤信息列表 */
  InstanceIds?: string[];
  /** 实例名称过滤信息列表 */
  InstanceNames?: string[];
  /** 实例状态信息过滤列表 */
  Status?: string[];
  /** 排序字段 */
  OrderBy?: string;
  /** 排序方式 */
  OrderByType?: string;
  /** 实例vip信息列表 */
  Vips?: string[];
  /** vpc网络ID信息列表 */
  UniqVpcIds?: string[];
  /** 子网统一ID列表 */
  UniqSubnetIds?: string[];
  /** 数量限制，默认推荐100 */
  Limit?: number;
  /** 偏移量，默认0 */
  Offset?: number;
}

declare interface DescribeCommonDBInstancesResponse {
  /** 实例数 */
  TotalCount: number;
  /** 实例信息 */
  InstanceDetails: RedisCommonInstanceList[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：redis。 */
  Product: string;
  /** 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组规则。 */
  Groups: SecurityGroup[];
  /** 安全组生效内网地址。 */
  VIP: string;
  /** 安全组生效内网端口。 */
  VPort: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceAccountRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分页大小 */
  Limit: number;
  /** 分页偏移量 */
  Offset: number;
}

declare interface DescribeInstanceAccountResponse {
  /** 账号详细信息 */
  Accounts: Account[] | null;
  /** 账号个数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceBackupsRequest {
  /** 待操作的实例ID，可通过 DescribeInstance 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 实例列表大小，默认大小20 */
  Limit?: number;
  /** 偏移量，取Limit整数倍 */
  Offset?: number;
  /** 开始时间，格式如：2017-02-08 16:46:34。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。 */
  BeginTime?: string;
  /** 结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。 */
  EndTime?: string;
  /** 1：备份在流程中，2：备份正常，3：备份转RDB文件处理中，4：已完成RDB转换，-1：备份已过期，-2：备份已删除。 */
  Status?: number[];
}

declare interface DescribeInstanceBackupsResponse {
  /** 备份总数 */
  TotalCount: number;
  /** 实例的备份数组 */
  BackupSet: RedisBackupSet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceDTSInfoRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceDTSInfoResponse {
  /** DTS任务ID */
  JobId: string | null;
  /** DTS任务名称 */
  JobName: string | null;
  /** 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing） */
  Status: number | null;
  /** 状态描述 */
  StatusDesc: string | null;
  /** 同步时延，单位：字节 */
  Offset: number | null;
  /** 断开时间 */
  CutDownTime: string | null;
  /** 源实例信息 */
  SrcInfo: DescribeInstanceDTSInstanceInfo | null;
  /** 目标实例信息 */
  DstInfo: DescribeInstanceDTSInstanceInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceDealDetailRequest {
  /** 订单交易ID数组，即 [CreateInstances](https://cloud.tencent.com/document/api/239/20026) 的输出参数DealId。 */
  DealIds: string[];
}

declare interface DescribeInstanceDealDetailResponse {
  /** 订单详细信息 */
  DealDetails: TradeDealDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorBigKeyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 请求类型：1——string类型，2——所有类型 */
  ReqType: number;
  /** 时间；例如："20190219" */
  Date: string;
}

declare interface DescribeInstanceMonitorBigKeyResponse {
  /** 大Key详细信息 */
  Data?: BigKeyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorBigKeySizeDistRequest {
  /** 实例Id */
  InstanceId: string;
  /** 时间；例如："20190219" */
  Date: string;
}

declare interface DescribeInstanceMonitorBigKeySizeDistResponse {
  /** 大Key大小分布详情 */
  Data?: DelayDistribution[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorBigKeyTypeDistRequest {
  /** 实例Id */
  InstanceId: string;
  /** 时间；例如："20190219" */
  Date: string;
}

declare interface DescribeInstanceMonitorBigKeyTypeDistResponse {
  /** 大Key类型分布详细信息 */
  Data?: BigKeyTypeInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorHotKeyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时 */
  SpanType: number;
}

declare interface DescribeInstanceMonitorHotKeyResponse {
  /** 热Key详细信息 */
  Data?: HotKeyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorSIPRequest {
  /** 实例Id */
  InstanceId: string;
}

declare interface DescribeInstanceMonitorSIPResponse {
  /** 访问来源信息 */
  Data?: SourceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorTookDistRequest {
  /** 实例Id */
  InstanceId: string;
  /** 时间；例如："20190219" */
  Date: string;
  /** 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时 */
  SpanType: number;
}

declare interface DescribeInstanceMonitorTookDistResponse {
  /** 时延分布信息 */
  Data?: DelayDistribution[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorTopNCmdRequest {
  /** 实例Id */
  InstanceId: string;
  /** 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时 */
  SpanType: number;
}

declare interface DescribeInstanceMonitorTopNCmdResponse {
  /** 访问命令信息 */
  Data?: SourceCommand[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorTopNCmdTookRequest {
  /** 实例ID */
  InstanceId: string;
  /** 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时 */
  SpanType: number;
}

declare interface DescribeInstanceMonitorTopNCmdTookResponse {
  /** 耗时详细信息 */
  Data: CommandTake[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodeInfoRequest {
  /** 实例ID */
  InstanceId: string;
  /** 列表大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeInstanceNodeInfoResponse {
  /** proxy节点数量 */
  ProxyCount: number;
  /** proxy节点信息 */
  Proxy: ProxyNodes[] | null;
  /** redis节点数量 */
  RedisCount: number;
  /** redis节点信息 */
  Redis: RedisNodes[] | null;
  /** tendis节点数量 */
  TendisCount: number;
  /** tendis节点信息 */
  Tendis: TendisNodes[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamRecordsRequest {
  /** 实例Id */
  InstanceId: string;
  /** 分页大小 */
  Limit?: number;
  /** 偏移量，取Limit整数倍 */
  Offset?: number;
}

declare interface DescribeInstanceParamRecordsResponse {
  /** 总的修改历史记录数。 */
  TotalCount: number;
  /** 修改历史记录信息。 */
  InstanceParamHistory: InstanceParamHistory[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamsRequest {
  /** 实例Id */
  InstanceId: string;
}

declare interface DescribeInstanceParamsResponse {
  /** 实例参数个数 */
  TotalCount: number;
  /** 实例枚举类型参数 */
  InstanceEnumParam: InstanceEnumParam[];
  /** 实例整型参数 */
  InstanceIntegerParam: InstanceIntegerParam[];
  /** 实例字符型参数 */
  InstanceTextParam: InstanceTextParam[];
  /** 实例多选项型参数 */
  InstanceMultiParam: InstanceMultiParam[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceSecurityGroupRequest {
  /** 实例列表 */
  InstanceIds: string[];
}

declare interface DescribeInstanceSecurityGroupResponse {
  /** 实例安全组信息 */
  InstanceSecurityGroupsDetail: InstanceSecurityGroupDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceShardsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 是否过滤掉从节信息 */
  FilterSlave?: boolean;
}

declare interface DescribeInstanceShardsResponse {
  /** 实例分片列表信息 */
  InstanceShards: InstanceClusterShard[];
  /** 实例分片节点总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceZoneInfoRequest {
  /** 实例Id，如：crs-6ubhgouj */
  InstanceId?: string;
}

declare interface DescribeInstanceZoneInfoResponse {
  /** 实例节点组的个数 */
  TotalCount: number;
  /** 实例节点组列表 */
  ReplicaGroups: ReplicaGroup[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 实例数量，参数默认值20，最大值为1000。 */
  Limit?: number;
  /** 偏移量，取Limit整数倍。 */
  Offset?: number;
  /** 实例 ID，如：crs-6ubhgouj。 */
  InstanceId?: string;
  /** 实例排序依据，枚举值如下所示：projectId：项目ID。createtime：实例创建时间。instancename：实例名称。type：实例类型。curDeadline：实例到期时间。 */
  OrderBy?: string;
  /** 实例排序方式，默认为倒序排序。1：倒序。0：顺序。 */
  OrderType?: number;
  /** 私有网络 ID 数组。如果不配置该参数或设置数组为空则默认选择基础网络。例如47525。该参数暂时保留，可忽略。请根据 UniqVpcIds 参数格式设置私有网络ID数组。 */
  VpcIds?: string[];
  /** 私有网络所属子网 ID 数组，例如：56854。该参数暂时保留，可忽略。请根据 UniqSubnetIds 参数格式设置私有网络子网 ID 数组。 */
  SubnetIds?: string[];
  /** 设置模糊查询关键字，支持根据实例名称或实例ID模糊查询实例。 */
  SearchKey?: string;
  /** 项目 ID 组成的数组。 */
  ProjectIds?: number[];
  /** 实例名称。 */
  InstanceName?: string;
  /** 私有网络 ID 数组。如果不配置该参数或者设置数组为空则默认选择基础网络，如：vpc-sad23jfdfk。 */
  UniqVpcIds?: string[];
  /** 私有网络所属子网 ID 数组，如：subnet-fdj24n34j2。 */
  UniqSubnetIds?: string[];
  /** 地域 ID 数组，该参数已经弃用，可通过公共参数Region查询对应地域。 */
  RegionIds?: number[];
  /** 实例状态。0：待初始化。1：流程中。2：运行中。-2：已隔离。-3：待删除。 */
  Status?: number[];
  /** 实例架构版本。1：单机版。2：主从版。3：集群版。 */
  TypeVersion?: number;
  /** 存储引擎信息。可设置为Redis-2.8、Redis-4.0、Redis-5.0、Redis-6.0 或者 CKV。 */
  EngineName?: string;
  /** 续费模式。0：默认状态（手动续费）。1：自动续费。2：明确不自动续费。 */
  AutoRenew?: number[];
  /** 计费模式。postpaid：按量计费。prepaid：包年包月。 */
  BillingMode?: string;
  /** 实例类型。1：Redis 老集群版。2：Redis 2.8 主从版。3：CKV 主从版。4：CKV 集群版。5：Redis 2.8 单机版。6：Redis 4.0主从版。7：Redis 4.0 集群版。8：Redis 5.0 主从版。9：Redis 5.0 集群版。 */
  Type?: number;
  /** 设置搜索关键字数组，可根据实例ID、实例名称、完整IP地址查询实例。 */
  SearchKeys?: string[];
  /** 内部参数，用户可忽略。 */
  TypeList?: number[];
  /** 内部参数，用户可忽略。 */
  MonitorVersion?: string;
  /** 根据标签的 Key 和 Value 筛选资源。该参数不配置或者数组设置为空值，则不根据标签进行过滤。 */
  InstanceTags?: InstanceTagInfo[];
  /** 根据标签的 Key 筛选资源，该参数不配置或者数组设置为空值，则不根据标签Key进行过滤。 */
  TagKeys?: string[];
  /** 实例的产品版本。如果该参数不配置或者数组设置为空值，则默认不依据此参数过滤实例。local：本地盘版。cloud：云盘版。cdc：独享集群版。 */
  ProductVersions?: string[];
  /** 批量查询指定的实例 ID，返回结果已 Limit 限制为主。 */
  InstanceIds?: string[];
  /** 可用区模式。singleaz：单可用区。multiaz：多可用区。 */
  AzMode?: string;
}

declare interface DescribeInstancesResponse {
  /** 实例总数量。 */
  TotalCount: number;
  /** 实例详细信息列表。 */
  InstanceSet: InstanceSet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMaintenanceWindowRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeMaintenanceWindowResponse {
  /** 维护时间窗起始时间，如：17:00 */
  StartTime?: string;
  /** 维护时间窗结束时间，如：19:00 */
  EndTime?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeParamTemplateInfoRequest {
  /** 参数模板 ID。 */
  TemplateId: string;
}

declare interface DescribeParamTemplateInfoResponse {
  /** 实例参数个数 */
  TotalCount: number;
  /** 参数模板 ID。 */
  TemplateId: string;
  /** 参数模板名称。 */
  Name: string;
  /** 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构） */
  ProductType: number;
  /** 参数模板描述 */
  Description: string;
  /** 参数详情 */
  Items: ParameterDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeParamTemplatesRequest {
  /** 产品类型数组。产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构） */
  ProductTypes?: number[];
  /** 模板名称数组。 */
  TemplateNames?: string[];
  /** 模板ID数组。 */
  TemplateIds?: string[];
}

declare interface DescribeParamTemplatesResponse {
  /** 该用户的参数模板数量。 */
  TotalCount: number;
  /** 参数模板详情。 */
  Items: ParamTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProductInfoRequest {
}

declare interface DescribeProductInfoResponse {
  /** 地域售卖信息 */
  RegionSet?: RegionConf[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupRequest {
  /** 0:默认项目；-1 所有项目; >0: 特定项目 */
  ProjectId?: number;
  /** 安全组Id */
  SecurityGroupId?: string;
}

declare interface DescribeProjectSecurityGroupResponse {
  /** 项目安全组 */
  SecurityGroupDetails: SecurityGroupDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：redis。 */
  Product: string;
  /** 项目 ID。 */
  ProjectId: number;
  /** 偏移量，取值为Limit的整数倍。 */
  Offset?: number;
  /** 拉取数量限制，默认 20。 */
  Limit?: number;
  /** 搜索条件，支持安全组 ID 或者安全组名称。 */
  SearchKey?: string;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组规则。 */
  Groups: SecurityGroup[];
  /** 符合条件的安全组总数量。 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProxySlowLogRequest {
  /** 实例Id */
  InstanceId: string;
  /** 开始时间 */
  BeginTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 慢查询阈值（单位：毫秒） */
  MinQueryTime?: number;
  /** 页面大小 */
  Limit?: number;
  /** 偏移量，取Limit整数倍 */
  Offset?: number;
}

declare interface DescribeProxySlowLogResponse {
  /** 慢查询总数 */
  TotalCount: number;
  /** 慢查询详情 */
  InstanceProxySlowLogDetail: InstanceProxySlowlogDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReplicationGroupRequest {
  /** 实例列表的大小，参数默认值20 */
  Limit: number;
  /** 偏移量，取Limit整数倍 */
  Offset: number;
  /** 复制组ID */
  GroupId?: string;
  /** 实例ID和实例名称，支持模糊查询 */
  SearchKey?: string;
}

declare interface DescribeReplicationGroupResponse {
  /** 复制组数 */
  TotalCount: number;
  /** 复制组信息 */
  Groups: Groups[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSlowLogRequest {
  /** 实例Id。 */
  InstanceId: string;
  /** 开始时间。 */
  BeginTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 慢查询平均执行时间阈值（单位：微秒）。 */
  MinQueryTime?: number;
  /** 每个页面展示的慢查询条数，默认值为20。 */
  Limit?: number;
  /** 慢查询条数的偏移量，取Limit整数倍。 */
  Offset?: number;
  /** 节点所属角色。master：主节点。slave：从节点。 */
  Role?: string;
}

declare interface DescribeSlowLogResponse {
  /** 慢查询总数。 */
  TotalCount: number;
  /** 慢查询详情。 */
  InstanceSlowlogDetail: InstanceSlowlogDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskInfoRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeTaskInfoResponse {
  /** 任务状态preparing:待执行，running：执行中，succeed：成功，failed：失败，error 执行出错 */
  Status: string;
  /** 任务开始时间 */
  StartTime: string;
  /** 任务类型 */
  TaskType: string;
  /** 实例的ID */
  InstanceId: string;
  /** 任务信息，错误时显示错误信息。执行中与成功则为空 */
  TaskMessage: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskListRequest {
  /** 实例Id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 分页大小,默认20，上限不大于100 */
  Limit?: number;
  /** 偏移量，取Limit整数倍（自动向下取整） */
  Offset?: number;
  /** 项目Id */
  ProjectIds?: number[];
  /** 任务类型 */
  TaskTypes?: string[];
  /** 起始时间 */
  BeginTime?: string;
  /** 终止时间 */
  EndTime?: string;
  /** 任务状态 */
  TaskStatus?: number[];
  /** 任务状态 */
  Result?: number[];
  /** 操作者Uin，该字段已废弃，使用OperateUin代替 */
  OperatorUin?: number[];
  /** 操作者Uin */
  OperateUin?: string[];
}

declare interface DescribeTaskListResponse {
  /** 任务总数 */
  TotalCount: number;
  /** 任务详细信息 */
  Tasks: TaskInfoDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTendisSlowLogRequest {
  /** 实例Id：crs-ngvou0i1 */
  InstanceId: string;
  /** 开始时间：2019-09-08 12:12:41 */
  BeginTime: string;
  /** 结束时间：2019-09-09 12:12:41 */
  EndTime: string;
  /** 慢查询阈值（毫秒） */
  MinQueryTime?: number;
  /** 页面大小：默认20 */
  Limit?: number;
  /** 偏移量，取Limit整数倍 */
  Offset?: number;
}

declare interface DescribeTendisSlowLogResponse {
  /** 慢查询总数 */
  TotalCount: number;
  /** 慢查询详情 */
  TendisSlowLogDetail: TendisSlowLogDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroyPostpaidInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DestroyPostpaidInstanceResponse {
  /** 任务Id */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroyPrepaidInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DestroyPrepaidInstanceResponse {
  /** 订单Id */
  DealId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableReplicaReadonlyRequest {
  /** 实例序号ID */
  InstanceId: string;
}

declare interface DisableReplicaReadonlyResponse {
  /** 任务ID */
  TaskId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：redis。 */
  Product: string;
  /** 安全组 ID。 */
  SecurityGroupId: string;
  /** 实例ID列表，一个或者多个实例 ID 组成的数组。 */
  InstanceIds: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableReplicaReadonlyRequest {
  /** 实例序号ID */
  InstanceId: string;
  /** 账号路由策略：填写master或者replication，表示路由主节点，从节点；不填路由策略默认为写主节点，读从节点 */
  ReadonlyPolicy?: string[];
}

declare interface EnableReplicaReadonlyResponse {
  /** 错误：ERROR，正确OK（已废弃） */
  Status: string | null;
  /** 任务ID */
  TaskId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateInstanceRequest {
  /** 实例类型：2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)。 */
  TypeId: number;
  /** 内存容量，单位为MB， 数值需为1024的整数倍，具体规格以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。TypeId为标准架构时，MemSize是实例总内存容量；TypeId为集群架构时，MemSize是单分片内存容量。 */
  MemSize: number;
  /** 实例数量，单次购买实例数量以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。 */
  GoodsNum: number;
  /** 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。 */
  Period: number;
  /** 付费方式:0-按量计费，1-包年包月。 */
  BillingMode: number;
  /** 实例所属的可用区ID，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106) 。 */
  ZoneId?: number;
  /** 实例分片数量，Redis2.8标准架构、CKV标准架构和Redis2.8单机版、Redis4.0标准架构不需要填写。 */
  RedisShardNum?: number;
  /** 实例副本数量，Redis2.8标准架构、CKV标准架构和Redis2.8单机版不需要填写。 */
  RedisReplicasNum?: number;
  /** 是否支持副本只读，Redis2.8标准架构、CKV标准架构和Redis2.8单机版不需要填写。 */
  ReplicasReadonly?: boolean;
  /** 实例所属的可用区名称，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106) 。 */
  ZoneName?: string;
  /** "local"本地盘版，"cloud"云盘版，"cdc"独享集群版，如果不传默认询价为本地盘版本 */
  ProductVersion?: string;
}

declare interface InquiryPriceCreateInstanceResponse {
  /** 价格，单位：分 */
  Price: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewInstanceRequest {
  /** 购买时长，单位：月 */
  Period: number;
  /** 实例ID */
  InstanceId: string;
}

declare interface InquiryPriceRenewInstanceResponse {
  /** 价格，单位：分 */
  Price?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceUpgradeInstanceRequest {
  /** 实例Id */
  InstanceId: string;
  /** 分片大小 单位 MB */
  MemSize: number;
  /** 分片数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写 */
  RedisShardNum?: number;
  /** 副本数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写 */
  RedisReplicasNum?: number;
}

declare interface InquiryPriceUpgradeInstanceResponse {
  /** 价格，单位：分 */
  Price?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface KillMasterGroupRequest {
  /** 实例ID */
  InstanceId: string;
  /** 1.长度8-30位,推荐使用12位以上的密码2.不能以"/"开头3.至少包含两项 a.小写字母a-z b.大写字母A-Z c.数字0-9 d.()`~!@#$%^&*-+=_|{}[]:;<>,.?/ */
  Password: string;
  /** 单AZ实例节点信息 */
  ShardIds?: number[];
}

declare interface KillMasterGroupResponse {
  /** 异步任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ManualBackupInstanceRequest {
  /** 待操作的实例ID，可通过 DescribeInstance接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 备份的备注信息 */
  Remark?: string;
  /** 保存天数。0代表指定默认保留时间 */
  StorageDays?: number;
}

declare interface ManualBackupInstanceResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModfiyInstancePasswordRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例旧密码 */
  OldPassword: string;
  /** 实例新密码 */
  Password: string;
}

declare interface ModfiyInstancePasswordResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAutoBackupConfigRequest {
  /** 实例ID */
  InstanceId: string;
  /** 日期 Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday，该参数暂不支持修改。 */
  WeekDays: string[];
  /** 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00 */
  TimePeriod: string;
  /** 自动备份类型： 1 “定时回档” */
  AutoBackupType?: number;
}

declare interface ModifyAutoBackupConfigResponse {
  /** 自动备份类型： 1 “定时回档” */
  AutoBackupType: number;
  /** 日期Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。 */
  WeekDays: string[];
  /** 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00 */
  TimePeriod: string;
  /** 全量备份文件保存天数,单位：天 */
  BackupStorageDays: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyConnectionConfigRequest {
  /** 实例的ID，长度在12-36之间。 */
  InstanceId: string;
  /** 附加带宽，大于0，单位MB。 */
  Bandwidth?: number;
  /** 单分片的总连接数。未开启副本只读时，下限为10000，上限为40000；开启副本只读时，下限为10000，上限为10000×(只读副本数+3)。 */
  ClientLimit?: number;
}

declare interface ModifyConnectionConfigResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 数据库引擎名称，本接口取值：redis。 */
  Product: string;
  /** 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIds: string[];
  /** 实例 ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。 */
  InstanceId: string;
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceAccountRequest {
  /** 实例ID */
  InstanceId: string;
  /** 子账号名称，如果要修改主账号，填root */
  AccountName: string;
  /** 子账号密码 */
  AccountPassword?: string;
  /** 子账号描述信息 */
  Remark?: string;
  /** 路由策略：填写master或者replication，表示主节点或者从节点 */
  ReadonlyPolicy?: string[];
  /** 子账号读写策略：填写r、w、rw，表示只读，只写，读写策略 */
  Privilege?: string;
  /** true表示将主账号切换为免密账号，这里只适用于主账号，子账号不可免密 */
  NoAuth?: boolean;
}

declare interface ModifyInstanceAccountResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceParamsRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例修改的参数列表。 */
  InstanceParams: InstanceParam[];
}

declare interface ModifyInstanceParamsResponse {
  /** 说明修改参数配置是否成功。true：指修改成功；false：指修改失败。 */
  Changed: boolean;
  /** 任务ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceReadOnlyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例输入模式，0：读写 1：只读 */
  InputMode: string;
}

declare interface ModifyInstanceReadOnlyResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 修改实例操作，如填写：rename-表示实例重命名；modifyProject-修改实例所属项目；modifyAutoRenew-修改实例续费标记 */
  Operation: string;
  /** 实例Id */
  InstanceIds?: string[];
  /** 实例的新名称 */
  InstanceNames?: string[];
  /** 项目Id */
  ProjectId?: number;
  /** 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费 */
  AutoRenews?: number[];
  /** 已经废弃 */
  InstanceId?: string;
  /** 已经废弃 */
  InstanceName?: string;
  /** 已经废弃 */
  AutoRenew?: number;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMaintenanceWindowRequest {
  /** 实例ID */
  InstanceId: string;
  /** 维护时间窗起始时间，如：17:00 */
  StartTime: string;
  /** 维护时间窗结束时间，如：19:00 */
  EndTime: string;
}

declare interface ModifyMaintenanceWindowResponse {
  /** 修改状态：success 或者 failed */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNetworkConfigRequest {
  /** 实例ID */
  InstanceId: string;
  /** 操作类型：changeVip——修改实例VIP；changeVpc——修改实例子网；changeBaseToVpc——基础网络转VPC网络 */
  Operation: string;
  /** VIP地址，changeVip的时候填写，不填则默认分配 */
  Vip?: string;
  /** 私有网络ID，changeVpc、changeBaseToVpc的时候需要提供 */
  VpcId?: string;
  /** 子网ID，changeVpc、changeBaseToVpc的时候需要提供 */
  SubnetId?: string;
  /** 原VIP保留时间，单位：天，注：需要最新版SDK，否则原VIP立即释放，查看SDK版本，详见 [SDK中心](https://cloud.tencent.com/document/sdk) */
  Recycle?: number;
}

declare interface ModifyNetworkConfigResponse {
  /** 执行状态：true|false */
  Status: boolean;
  /** 子网ID */
  SubnetId: string;
  /** 私有网络ID */
  VpcId: string;
  /** VIP地址 */
  Vip: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyParamTemplateRequest {
  /** 源参数模板 ID。 */
  TemplateId: string;
  /** 参数模板修改后的新名称。 */
  Name?: string;
  /** 参数模板修改后的新描述。 */
  Description?: string;
  /** 修改后的新参数列表。 */
  ParamList?: InstanceParam[];
}

declare interface ModifyParamTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OpenSSLRequest {
  /** 实例ID。 */
  InstanceId: string;
}

declare interface OpenSSLResponse {
  /** 任务ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReleaseWanAddressRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface ReleaseWanAddressResponse {
  /** 异步流程ID */
  FlowId: number;
  /** 关闭外网的状态 */
  WanStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RenewInstanceRequest {
  /** 购买时长，单位：月 */
  Period: number;
  /** 实例ID */
  InstanceId: string;
}

declare interface RenewInstanceResponse {
  /** 交易ID */
  DealId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetPasswordRequest {
  /** Redis实例ID */
  InstanceId: string;
  /** 重置的密码（切换为免密实例时，可不传；其他情况必传） */
  Password?: string;
  /** 是否切换免密实例，false-切换为非免密码实例，true-切换为免密码实例；默认false */
  NoAuth?: boolean;
}

declare interface ResetPasswordResponse {
  /** 任务ID（修改密码时的任务ID，如果时切换免密码或者非免密码实例，则无需关注此返回值） */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RestoreInstanceRequest {
  /** 待操作的实例ID，可通过 DescribeInstances 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 备份ID，可通过 GetRedisBackupList 接口返回值中的 backupId 获取 */
  BackupId: string;
  /** 实例密码，恢复实例时，需要校验实例密码（免密实例不需要传密码） */
  Password?: string;
}

declare interface RestoreInstanceResponse {
  /** 任务ID，可通过 DescribeTaskInfo 接口查询任务执行状态 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartupInstanceRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface StartupInstanceResponse {
  /** 任务id */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwitchInstanceVipRequest {
  /** 源实例ID */
  SrcInstanceId: string;
  /** 目标实例ID */
  DstInstanceId: string;
  /** 单位为秒。源实例与目标实例间DTS已断开时间，如果DTS断开时间大于TimeDelay，则不切换VIP，建议尽量根据业务设置一个可接受的值。 */
  TimeDelay?: number;
  /** 在DTS断开的情况下是否强制切换。1：强制切换，0：不强制切换 */
  ForceSwitch?: number;
  /** now: 立即切换，syncComplete：等待同步完成后切换 */
  SwitchTime?: string;
}

declare interface SwitchInstanceVipResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwitchProxyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例ProxyID */
  ProxyID?: string;
}

declare interface SwitchProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分片大小 单位 MB。该参数不支持与RedisShardNum或RedisReplicasNum同时输入。 */
  MemSize: number;
  /** 分片数量，标准架构不需要填写。该参数不支持与RedisReplicasNum或MemSize同时输入。 */
  RedisShardNum?: number;
  /** 副本数量，多AZ实例修改副本时必须要传入NodeSet。该参数不支持与RedisShardNum或MemSize同时输入。 */
  RedisReplicasNum?: number;
  /** 多AZ实例增加副本时的附带信息，非多AZ实例不需要传此参数。多AZ增加副本时此参数为必传参数，传入要增加的副本的信息，包括副本的可用区和副本的类型（NodeType为1） */
  NodeSet?: RedisNodeInfo[];
}

declare interface UpgradeInstanceResponse {
  /** 订单ID */
  DealId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeInstanceVersionRequest {
  /** 目标实例类型，同 [CreateInstances](https://cloud.tencent.com/document/api/239/20026) 的Type，即实例要变更的目标类型 */
  TargetInstanceType: string;
  /** 切换模式：1-维护时间窗切换，2-立即切换 */
  SwitchOption: number;
  /** 实例ID */
  InstanceId: string;
}

declare interface UpgradeInstanceVersionResponse {
  /** 订单ID */
  DealId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeProxyVersionRequest {
  /** 实例ID */
  InstanceId: string;
  /** 当前proxy版本 */
  CurrentProxyVersion: string;
  /** 可升级的redis版本 */
  UpgradeProxyVersion: string;
  /** 1-立即升级 0-维护时间窗口升级 */
  InstanceTypeUpgradeNow: number;
}

declare interface UpgradeProxyVersionResponse {
  /** 异步流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeSmallVersionRequest {
  /** 实例ID */
  InstanceId: string;
  /** 当前redis版本 */
  CurrentRedisVersion: string;
  /** 可升级的redis版本 */
  UpgradeRedisVersion: string;
  /** 1-立即升级 0-维护时间窗口升级 */
  InstanceTypeUpgradeNow: number;
}

declare interface UpgradeSmallVersionResponse {
  /** 异步流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeVersionToMultiAvailabilityZonesRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 升级多可用区之后是否支持就近访问功能。true：支持就近访问功能。升级过程，需同时升级 Proxy 版本和 Redis 内核小版本，涉及数据搬迁，可能会长达数小时。false：无需支持就近访问功能。升级多可用区仅涉及管理元数据迁移，对服务没有影响，升级过程通常在3分钟内完成。 */
  UpgradeProxyAndRedisServer?: boolean;
}

declare interface UpgradeVersionToMultiAvailabilityZonesResponse {
  /** 任务ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Redis 云数据库Redis} */
declare interface Redis {
  (): Versions;
  /** {@link AddReplicationInstance 添加复制组成员}({@link AddReplicationInstanceRequest 请求参数}): {@link AddReplicationInstanceResponse 返回参数} */
  AddReplicationInstance(data: AddReplicationInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<AddReplicationInstanceResponse>;
  /** {@link AllocateWanAddress 开通外网接口}({@link AllocateWanAddressRequest 请求参数}): {@link AllocateWanAddressResponse 返回参数} */
  AllocateWanAddress(data: AllocateWanAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateWanAddressResponse>;
  /** {@link ApplyParamsTemplate 应用参数模板}({@link ApplyParamsTemplateRequest 请求参数}): {@link ApplyParamsTemplateResponse 返回参数} */
  ApplyParamsTemplate(data: ApplyParamsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyParamsTemplateResponse>;
  /** {@link AssociateSecurityGroups 绑定安全组}({@link AssociateSecurityGroupsRequest 请求参数}): {@link AssociateSecurityGroupsResponse 返回参数} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** {@link ChangeInstanceRole 复制组实例更换角色}({@link ChangeInstanceRoleRequest 请求参数}): {@link ChangeInstanceRoleResponse 返回参数} */
  ChangeInstanceRole(data: ChangeInstanceRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeInstanceRoleResponse>;
  /** {@link ChangeMasterInstance 复制组实例切主}({@link ChangeMasterInstanceRequest 请求参数}): {@link ChangeMasterInstanceResponse 返回参数} */
  ChangeMasterInstance(data: ChangeMasterInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeMasterInstanceResponse>;
  /** {@link ChangeReplicaToMaster 副本组提主}({@link ChangeReplicaToMasterRequest 请求参数}): {@link ChangeReplicaToMasterResponse 返回参数} */
  ChangeReplicaToMaster(data: ChangeReplicaToMasterRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeReplicaToMasterResponse>;
  /** {@link CleanUpInstance 回收站实例立即下线}({@link CleanUpInstanceRequest 请求参数}): {@link CleanUpInstanceResponse 返回参数} */
  CleanUpInstance(data: CleanUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CleanUpInstanceResponse>;
  /** {@link ClearInstance 清空Redis实例}({@link ClearInstanceRequest 请求参数}): {@link ClearInstanceResponse 返回参数} */
  ClearInstance(data: ClearInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ClearInstanceResponse>;
  /** {@link CloseSSL 关闭SSL}({@link CloseSSLRequest 请求参数}): {@link CloseSSLResponse 返回参数} */
  CloseSSL(data: CloseSSLRequest, config?: AxiosRequestConfig): AxiosPromise<CloseSSLResponse>;
  /** {@link CreateInstanceAccount 创建实例子账号}({@link CreateInstanceAccountRequest 请求参数}): {@link CreateInstanceAccountResponse 返回参数} */
  CreateInstanceAccount(data: CreateInstanceAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceAccountResponse>;
  /** {@link CreateInstances 创建Redis实例}({@link CreateInstancesRequest 请求参数}): {@link CreateInstancesResponse 返回参数} */
  CreateInstances(data: CreateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancesResponse>;
  /** {@link CreateParamTemplate 创建参数模板}({@link CreateParamTemplateRequest 请求参数}): {@link CreateParamTemplateResponse 返回参数} */
  CreateParamTemplate(data: CreateParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateParamTemplateResponse>;
  /** {@link CreateReplicationGroup 创建复制组接口}({@link CreateReplicationGroupRequest 请求参数}): {@link CreateReplicationGroupResponse 返回参数} */
  CreateReplicationGroup(data: CreateReplicationGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReplicationGroupResponse>;
  /** {@link DeleteInstanceAccount 删除实例子账号}({@link DeleteInstanceAccountRequest 请求参数}): {@link DeleteInstanceAccountResponse 返回参数} */
  DeleteInstanceAccount(data: DeleteInstanceAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceAccountResponse>;
  /** {@link DeleteParamTemplate 删除参数模板}({@link DeleteParamTemplateRequest 请求参数}): {@link DeleteParamTemplateResponse 返回参数} */
  DeleteParamTemplate(data: DeleteParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteParamTemplateResponse>;
  /** {@link DeleteReplicationInstance 删除复制组成员}({@link DeleteReplicationInstanceRequest 请求参数}): {@link DeleteReplicationInstanceResponse 返回参数} */
  DeleteReplicationInstance(data: DeleteReplicationInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReplicationInstanceResponse>;
  /** {@link DescribeAutoBackupConfig 获取自动备份配置}({@link DescribeAutoBackupConfigRequest 请求参数}): {@link DescribeAutoBackupConfigResponse 返回参数} */
  DescribeAutoBackupConfig(data: DescribeAutoBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoBackupConfigResponse>;
  /** {@link DescribeBackupUrl 查询备份Rdb下载地址}({@link DescribeBackupUrlRequest 请求参数}): {@link DescribeBackupUrlResponse 返回参数} */
  DescribeBackupUrl(data: DescribeBackupUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupUrlResponse>;
  /** {@link DescribeCommonDBInstances 查询Redis实例列表信息}({@link DescribeCommonDBInstancesRequest 请求参数}): {@link DescribeCommonDBInstancesResponse 返回参数} */
  DescribeCommonDBInstances(data?: DescribeCommonDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCommonDBInstancesResponse>;
  /** {@link DescribeDBSecurityGroups 查询实例安全组详情}({@link DescribeDBSecurityGroupsRequest 请求参数}): {@link DescribeDBSecurityGroupsResponse 返回参数} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** {@link DescribeInstanceAccount 查看实例子账号信息}({@link DescribeInstanceAccountRequest 请求参数}): {@link DescribeInstanceAccountResponse 返回参数} */
  DescribeInstanceAccount(data: DescribeInstanceAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceAccountResponse>;
  /** {@link DescribeInstanceBackups 查询Redis实例备份列表}({@link DescribeInstanceBackupsRequest 请求参数}): {@link DescribeInstanceBackupsResponse 返回参数} */
  DescribeInstanceBackups(data: DescribeInstanceBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceBackupsResponse>;
  /** {@link DescribeInstanceDTSInfo 查询实例DTS信息}({@link DescribeInstanceDTSInfoRequest 请求参数}): {@link DescribeInstanceDTSInfoResponse 返回参数} */
  DescribeInstanceDTSInfo(data: DescribeInstanceDTSInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDTSInfoResponse>;
  /** {@link DescribeInstanceDealDetail 查询订单信息}({@link DescribeInstanceDealDetailRequest 请求参数}): {@link DescribeInstanceDealDetailResponse 返回参数} */
  DescribeInstanceDealDetail(data: DescribeInstanceDealDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDealDetailResponse>;
  /** {@link DescribeInstanceMonitorBigKey 查询实例大Key}({@link DescribeInstanceMonitorBigKeyRequest 请求参数}): {@link DescribeInstanceMonitorBigKeyResponse 返回参数} */
  DescribeInstanceMonitorBigKey(data: DescribeInstanceMonitorBigKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorBigKeyResponse>;
  /** {@link DescribeInstanceMonitorBigKeySizeDist 查询实例大Key大小分布}({@link DescribeInstanceMonitorBigKeySizeDistRequest 请求参数}): {@link DescribeInstanceMonitorBigKeySizeDistResponse 返回参数} */
  DescribeInstanceMonitorBigKeySizeDist(data: DescribeInstanceMonitorBigKeySizeDistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorBigKeySizeDistResponse>;
  /** {@link DescribeInstanceMonitorBigKeyTypeDist 查询实例大Key类型分布}({@link DescribeInstanceMonitorBigKeyTypeDistRequest 请求参数}): {@link DescribeInstanceMonitorBigKeyTypeDistResponse 返回参数} */
  DescribeInstanceMonitorBigKeyTypeDist(data: DescribeInstanceMonitorBigKeyTypeDistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorBigKeyTypeDistResponse>;
  /** {@link DescribeInstanceMonitorHotKey 查询实例热Key}({@link DescribeInstanceMonitorHotKeyRequest 请求参数}): {@link DescribeInstanceMonitorHotKeyResponse 返回参数} */
  DescribeInstanceMonitorHotKey(data: DescribeInstanceMonitorHotKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorHotKeyResponse>;
  /** {@link DescribeInstanceMonitorSIP 查询实例访问来源信息}({@link DescribeInstanceMonitorSIPRequest 请求参数}): {@link DescribeInstanceMonitorSIPResponse 返回参数} */
  DescribeInstanceMonitorSIP(data: DescribeInstanceMonitorSIPRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorSIPResponse>;
  /** {@link DescribeInstanceMonitorTookDist 查询实例访问的耗时分布}({@link DescribeInstanceMonitorTookDistRequest 请求参数}): {@link DescribeInstanceMonitorTookDistResponse 返回参数} */
  DescribeInstanceMonitorTookDist(data: DescribeInstanceMonitorTookDistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorTookDistResponse>;
  /** {@link DescribeInstanceMonitorTopNCmd 查询实例访问命令}({@link DescribeInstanceMonitorTopNCmdRequest 请求参数}): {@link DescribeInstanceMonitorTopNCmdResponse 返回参数} */
  DescribeInstanceMonitorTopNCmd(data: DescribeInstanceMonitorTopNCmdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorTopNCmdResponse>;
  /** {@link DescribeInstanceMonitorTopNCmdTook 查询实例CPU耗时}({@link DescribeInstanceMonitorTopNCmdTookRequest 请求参数}): {@link DescribeInstanceMonitorTopNCmdTookResponse 返回参数} */
  DescribeInstanceMonitorTopNCmdTook(data: DescribeInstanceMonitorTopNCmdTookRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorTopNCmdTookResponse>;
  /** {@link DescribeInstanceNodeInfo 查询实例节点信息}({@link DescribeInstanceNodeInfoRequest 请求参数}): {@link DescribeInstanceNodeInfoResponse 返回参数} */
  DescribeInstanceNodeInfo(data: DescribeInstanceNodeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodeInfoResponse>;
  /** {@link DescribeInstanceParamRecords 查询参数修改历史列表}({@link DescribeInstanceParamRecordsRequest 请求参数}): {@link DescribeInstanceParamRecordsResponse 返回参数} */
  DescribeInstanceParamRecords(data: DescribeInstanceParamRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamRecordsResponse>;
  /** {@link DescribeInstanceParams 查询实例的参数列表}({@link DescribeInstanceParamsRequest 请求参数}): {@link DescribeInstanceParamsResponse 返回参数} */
  DescribeInstanceParams(data: DescribeInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamsResponse>;
  /** {@link DescribeInstanceSecurityGroup 查询实例安全组信息}({@link DescribeInstanceSecurityGroupRequest 请求参数}): {@link DescribeInstanceSecurityGroupResponse 返回参数} */
  DescribeInstanceSecurityGroup(data: DescribeInstanceSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceSecurityGroupResponse>;
  /** {@link DescribeInstanceShards 获取集群版实例分片信息}({@link DescribeInstanceShardsRequest 请求参数}): {@link DescribeInstanceShardsResponse 返回参数} */
  DescribeInstanceShards(data: DescribeInstanceShardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceShardsResponse>;
  /** {@link DescribeInstanceZoneInfo 查询Redis节点详细信息}({@link DescribeInstanceZoneInfoRequest 请求参数}): {@link DescribeInstanceZoneInfoResponse 返回参数} */
  DescribeInstanceZoneInfo(data?: DescribeInstanceZoneInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceZoneInfoResponse>;
  /** {@link DescribeInstances 查询Redis实例列表}({@link DescribeInstancesRequest 请求参数}): {@link DescribeInstancesResponse 返回参数} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** {@link DescribeMaintenanceWindow 查询实例维护时间窗}({@link DescribeMaintenanceWindowRequest 请求参数}): {@link DescribeMaintenanceWindowResponse 返回参数} */
  DescribeMaintenanceWindow(data: DescribeMaintenanceWindowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaintenanceWindowResponse>;
  /** {@link DescribeParamTemplateInfo 查询参数模板详情}({@link DescribeParamTemplateInfoRequest 请求参数}): {@link DescribeParamTemplateInfoResponse 返回参数} */
  DescribeParamTemplateInfo(data: DescribeParamTemplateInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamTemplateInfoResponse>;
  /** {@link DescribeParamTemplates 查询参数模板列表}({@link DescribeParamTemplatesRequest 请求参数}): {@link DescribeParamTemplatesResponse 返回参数} */
  DescribeParamTemplates(data?: DescribeParamTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamTemplatesResponse>;
  /** {@link DescribeProductInfo 查询产品售卖规格}({@link DescribeProductInfoRequest 请求参数}): {@link DescribeProductInfoResponse 返回参数} */
  DescribeProductInfo(data?: DescribeProductInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductInfoResponse>;
  /** {@link DescribeProjectSecurityGroup 查询项目安全组信息}({@link DescribeProjectSecurityGroupRequest 请求参数}): {@link DescribeProjectSecurityGroupResponse 返回参数} */
  DescribeProjectSecurityGroup(data?: DescribeProjectSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupResponse>;
  /** {@link DescribeProjectSecurityGroups 查询项目安全组详情}({@link DescribeProjectSecurityGroupsRequest 请求参数}): {@link DescribeProjectSecurityGroupsResponse 返回参数} */
  DescribeProjectSecurityGroups(data: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** {@link DescribeProxySlowLog 查询代理慢查询}({@link DescribeProxySlowLogRequest 请求参数}): {@link DescribeProxySlowLogResponse 返回参数} */
  DescribeProxySlowLog(data: DescribeProxySlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxySlowLogResponse>;
  /** {@link DescribeReplicationGroup 查询复制组}({@link DescribeReplicationGroupRequest 请求参数}): {@link DescribeReplicationGroupResponse 返回参数} */
  DescribeReplicationGroup(data: DescribeReplicationGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplicationGroupResponse>;
  /** {@link DescribeSlowLog 查询实例慢查询记录}({@link DescribeSlowLogRequest 请求参数}): {@link DescribeSlowLogResponse 返回参数} */
  DescribeSlowLog(data: DescribeSlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogResponse>;
  /** {@link DescribeTaskInfo Redis查询任务结果}({@link DescribeTaskInfoRequest 请求参数}): {@link DescribeTaskInfoResponse 返回参数} */
  DescribeTaskInfo(data: DescribeTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInfoResponse>;
  /** {@link DescribeTaskList 查询任务列表信息}({@link DescribeTaskListRequest 请求参数}): {@link DescribeTaskListResponse 返回参数} */
  DescribeTaskList(data?: DescribeTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskListResponse>;
  /** {@link DescribeTendisSlowLog 查询Tendis慢查询}({@link DescribeTendisSlowLogRequest 请求参数}): {@link DescribeTendisSlowLogResponse 返回参数} */
  DescribeTendisSlowLog(data: DescribeTendisSlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTendisSlowLogResponse>;
  /** {@link DestroyPostpaidInstance 按量计费实例销毁}({@link DestroyPostpaidInstanceRequest 请求参数}): {@link DestroyPostpaidInstanceResponse 返回参数} */
  DestroyPostpaidInstance(data: DestroyPostpaidInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPostpaidInstanceResponse>;
  /** {@link DestroyPrepaidInstance 包年包月实例退还}({@link DestroyPrepaidInstanceRequest 请求参数}): {@link DestroyPrepaidInstanceResponse 返回参数} */
  DestroyPrepaidInstance(data: DestroyPrepaidInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPrepaidInstanceResponse>;
  /** {@link DisableReplicaReadonly 禁用读写分离}({@link DisableReplicaReadonlyRequest 请求参数}): {@link DisableReplicaReadonlyResponse 返回参数} */
  DisableReplicaReadonly(data: DisableReplicaReadonlyRequest, config?: AxiosRequestConfig): AxiosPromise<DisableReplicaReadonlyResponse>;
  /** {@link DisassociateSecurityGroups 安全组批量解绑云资源}({@link DisassociateSecurityGroupsRequest 请求参数}): {@link DisassociateSecurityGroupsResponse 返回参数} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** {@link EnableReplicaReadonly 启用读写分离}({@link EnableReplicaReadonlyRequest 请求参数}): {@link EnableReplicaReadonlyResponse 返回参数} */
  EnableReplicaReadonly(data: EnableReplicaReadonlyRequest, config?: AxiosRequestConfig): AxiosPromise<EnableReplicaReadonlyResponse>;
  /** {@link InquiryPriceCreateInstance 查询新购实例价格}({@link InquiryPriceCreateInstanceRequest 请求参数}): {@link InquiryPriceCreateInstanceResponse 返回参数} */
  InquiryPriceCreateInstance(data: InquiryPriceCreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateInstanceResponse>;
  /** {@link InquiryPriceRenewInstance 查询实例续费价格（包年包月）}({@link InquiryPriceRenewInstanceRequest 请求参数}): {@link InquiryPriceRenewInstanceResponse 返回参数} */
  InquiryPriceRenewInstance(data: InquiryPriceRenewInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewInstanceResponse>;
  /** {@link InquiryPriceUpgradeInstance 查询实例扩容价格}({@link InquiryPriceUpgradeInstanceRequest 请求参数}): {@link InquiryPriceUpgradeInstanceResponse 返回参数} */
  InquiryPriceUpgradeInstance(data: InquiryPriceUpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceUpgradeInstanceResponse>;
  /** {@link KillMasterGroup 模拟故障接口}({@link KillMasterGroupRequest 请求参数}): {@link KillMasterGroupResponse 返回参数} */
  KillMasterGroup(data: KillMasterGroupRequest, config?: AxiosRequestConfig): AxiosPromise<KillMasterGroupResponse>;
  /** {@link ManualBackupInstance 手动备份Redis实例}({@link ManualBackupInstanceRequest 请求参数}): {@link ManualBackupInstanceResponse 返回参数} */
  ManualBackupInstance(data: ManualBackupInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ManualBackupInstanceResponse>;
  /** {@link ModfiyInstancePassword 修改Redis密码}({@link ModfiyInstancePasswordRequest 请求参数}): {@link ModfiyInstancePasswordResponse 返回参数} */
  ModfiyInstancePassword(data: ModfiyInstancePasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModfiyInstancePasswordResponse>;
  /** {@link ModifyAutoBackupConfig 设置自动备份配置}({@link ModifyAutoBackupConfigRequest 请求参数}): {@link ModifyAutoBackupConfigResponse 返回参数} */
  ModifyAutoBackupConfig(data: ModifyAutoBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoBackupConfigResponse>;
  /** {@link ModifyConnectionConfig 修改实例连接配置}({@link ModifyConnectionConfigRequest 请求参数}): {@link ModifyConnectionConfigResponse 返回参数} */
  ModifyConnectionConfig(data: ModifyConnectionConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConnectionConfigResponse>;
  /** {@link ModifyDBInstanceSecurityGroups 修改云数据库安全组}({@link ModifyDBInstanceSecurityGroupsRequest 请求参数}): {@link ModifyDBInstanceSecurityGroupsResponse 返回参数} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** {@link ModifyInstance 修改实例相关信息}({@link ModifyInstanceRequest 请求参数}): {@link ModifyInstanceResponse 返回参数} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** {@link ModifyInstanceAccount 修改实例子账号}({@link ModifyInstanceAccountRequest 请求参数}): {@link ModifyInstanceAccountResponse 返回参数} */
  ModifyInstanceAccount(data: ModifyInstanceAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceAccountResponse>;
  /** {@link ModifyInstanceParams 修改实例参数}({@link ModifyInstanceParamsRequest 请求参数}): {@link ModifyInstanceParamsResponse 返回参数} */
  ModifyInstanceParams(data: ModifyInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceParamsResponse>;
  /** {@link ModifyInstanceReadOnly 设置实例输入模式}({@link ModifyInstanceReadOnlyRequest 请求参数}): {@link ModifyInstanceReadOnlyResponse 返回参数} */
  ModifyInstanceReadOnly(data: ModifyInstanceReadOnlyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceReadOnlyResponse>;
  /** {@link ModifyMaintenanceWindow 修改实例维护时间窗时间}({@link ModifyMaintenanceWindowRequest 请求参数}): {@link ModifyMaintenanceWindowResponse 返回参数} */
  ModifyMaintenanceWindow(data: ModifyMaintenanceWindowRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMaintenanceWindowResponse>;
  /** {@link ModifyNetworkConfig 修改实例网络配置}({@link ModifyNetworkConfigRequest 请求参数}): {@link ModifyNetworkConfigResponse 返回参数} */
  ModifyNetworkConfig(data: ModifyNetworkConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkConfigResponse>;
  /** {@link ModifyParamTemplate 修改参数模板}({@link ModifyParamTemplateRequest 请求参数}): {@link ModifyParamTemplateResponse 返回参数} */
  ModifyParamTemplate(data: ModifyParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyParamTemplateResponse>;
  /** {@link OpenSSL 开启SSL}({@link OpenSSLRequest 请求参数}): {@link OpenSSLResponse 返回参数} */
  OpenSSL(data: OpenSSLRequest, config?: AxiosRequestConfig): AxiosPromise<OpenSSLResponse>;
  /** {@link ReleaseWanAddress 关闭外网接口}({@link ReleaseWanAddressRequest 请求参数}): {@link ReleaseWanAddressResponse 返回参数} */
  ReleaseWanAddress(data: ReleaseWanAddressRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseWanAddressResponse>;
  /** {@link RenewInstance 续费实例}({@link RenewInstanceRequest 请求参数}): {@link RenewInstanceResponse 返回参数} */
  RenewInstance(data: RenewInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewInstanceResponse>;
  /** {@link ResetPassword 重置密码}({@link ResetPasswordRequest 请求参数}): {@link ResetPasswordResponse 返回参数} */
  ResetPassword(data: ResetPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetPasswordResponse>;
  /** {@link RestoreInstance 恢复 CRS 实例}({@link RestoreInstanceRequest 请求参数}): {@link RestoreInstanceResponse 返回参数} */
  RestoreInstance(data: RestoreInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestoreInstanceResponse>;
  /** {@link StartupInstance 实例解隔离}({@link StartupInstanceRequest 请求参数}): {@link StartupInstanceResponse 返回参数} */
  StartupInstance(data: StartupInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StartupInstanceResponse>;
  /** {@link SwitchInstanceVip 交换实例VIP}({@link SwitchInstanceVipRequest 请求参数}): {@link SwitchInstanceVipResponse 返回参数} */
  SwitchInstanceVip(data: SwitchInstanceVipRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchInstanceVipResponse>;
  /** {@link SwitchProxy Proxy模拟故障接口}({@link SwitchProxyRequest 请求参数}): {@link SwitchProxyResponse 返回参数} */
  SwitchProxy(data: SwitchProxyRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchProxyResponse>;
  /** {@link UpgradeInstance 升级实例}({@link UpgradeInstanceRequest 请求参数}): {@link UpgradeInstanceResponse 返回参数} */
  UpgradeInstance(data: UpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceResponse>;
  /** {@link UpgradeInstanceVersion 升级实例版本或者结构}({@link UpgradeInstanceVersionRequest 请求参数}): {@link UpgradeInstanceVersionResponse 返回参数} */
  UpgradeInstanceVersion(data: UpgradeInstanceVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceVersionResponse>;
  /** {@link UpgradeProxyVersion 实例proxy版本升级接口}({@link UpgradeProxyVersionRequest 请求参数}): {@link UpgradeProxyVersionResponse 返回参数} */
  UpgradeProxyVersion(data: UpgradeProxyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeProxyVersionResponse>;
  /** {@link UpgradeSmallVersion 实例小版本升级接口}({@link UpgradeSmallVersionRequest 请求参数}): {@link UpgradeSmallVersionResponse 返回参数} */
  UpgradeSmallVersion(data: UpgradeSmallVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeSmallVersionResponse>;
  /** {@link UpgradeVersionToMultiAvailabilityZones 升级实例支持多AZ}({@link UpgradeVersionToMultiAvailabilityZonesRequest 请求参数}): {@link UpgradeVersionToMultiAvailabilityZonesResponse 返回参数} */
  UpgradeVersionToMultiAvailabilityZones(data: UpgradeVersionToMultiAvailabilityZonesRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeVersionToMultiAvailabilityZonesResponse>;
}

export declare type Versions = ["2018-04-12"];

export default Redis;
