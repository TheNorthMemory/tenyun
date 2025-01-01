/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** ACL对象实体 */
declare interface Acl {
  /** Acl资源类型，（0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID）当前只有TOPIC， */
  ResourceType?: number;
  /** 资源名称，和resourceType相关如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称 */
  ResourceName?: string;
  /** 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户 */
  Principal?: string | null;
  /** 默认\*,表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持 */
  Host?: string | null;
  /** Acl操作方式(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTEN_WRITE) */
  Operation?: number;
  /** 权限类型(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW) */
  PermissionType?: number;
}

/** AclRule列表接口出参 */
declare interface AclRule {
  /** ACL规则名 */
  RuleName?: string | null;
  /** ckafka集群实例Id */
  InstanceId?: string | null;
  /** ACL规则匹配类型，目前只支持前缀匹配，枚举值列表：PREFIXED */
  PatternType?: string | null;
  /** 表示前缀匹配的前缀的值 */
  Pattern?: string | null;
  /** Acl资源类型,目前只支持Topic,枚举值列表：Topic */
  ResourceType?: string | null;
  /** 该规则所包含的ACL信息 */
  AclList?: string | null;
  /** 规则所创建的时间 */
  CreateTimeStamp?: string | null;
  /** 预设ACL规则是否应用到新增的topic中 */
  IsApplied?: number | null;
  /** 规则更新时间 */
  UpdateTimeStamp?: string | null;
  /** 规则的备注 */
  Comment?: string | null;
  /** 其中一个显示的对应的TopicName */
  TopicName?: string | null;
  /** 应用该ACL规则的Topic数 */
  TopicCount?: number | null;
  /** patternType的中文显示 */
  PatternTypeTitle?: string | null;
}

/** 表示ACL 规则的四元组信息 */
declare interface AclRuleInfo {
  /** Acl操作方式，枚举值(所有操作: All, 读：Read，写：Write) */
  Operation: string;
  /** 权限类型，(Deny，Allow) */
  PermissionType: string;
  /** 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\* 和 ip网段 */
  Host: string;
  /** 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入格式需要带【User:】前缀。例如用户A，传入为User:A。 */
  Principal: string;
}

/** AclRule列表接口返回结果 */
declare interface AclRuleResp {
  /** 总数据条数 */
  TotalCount?: number;
  /** AclRule列表 */
  AclRuleList?: AclRule[] | null;
}

/** 数据处理-解析参数 */
declare interface AnalyseParam {
  /** 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取，SOURCE处理上层所有结果 */
  Format: string;
  /** 分隔符、正则表达式 */
  Regex?: string | null;
  /** 需再次处理的KEY——模式 */
  InputValueType?: string | null;
  /** 需再次处理的KEY——KEY表达式 */
  InputValue?: string | null;
}

/** 存储着分配给该消费者的 partition 信息 */
declare interface Assignment {
  /** assingment版本信息 */
  Version?: number;
  /** topic信息列表 */
  Topics?: GroupInfoTopics[] | null;
}

/** 批量解析 */
declare interface BatchAnalyseParam {
  /** ONE_BY_ONE单条输出，MERGE合并输出 */
  Format: string | null;
}

/** 批量发送消息内容 */
declare interface BatchContent {
  /** 发送的消息体 */
  Body: string;
  /** 发送消息的键名 */
  Key?: string;
}

/** 批量修改topic参数 */
declare interface BatchModifyTopicInfo {
  /** 主题名 */
  TopicName: string;
  /** 分区数 */
  PartitionNum?: number;
  /** 备注 */
  Note?: string;
  /** 副本数 */
  ReplicaNum?: number;
  /** 消息删除策略，可以选择delete 或者compact */
  CleanUpPolicy?: string;
  /** 当producer设置request.required.acks为-1时，min.insync.replicas指定replicas的最小数目 */
  MinInsyncReplicas?: number;
  /** 是否允许非ISR的副本成为Leader */
  UncleanLeaderElectionEnable?: boolean;
  /** topic维度的消息保留时间（毫秒）范围1 分钟到90 天 */
  RetentionMs?: number;
  /** topic维度的消息保留大小，范围1 MB到1024 GB */
  RetentionBytes?: number;
  /** Segment分片滚动的时长（毫秒），范围1 到90 天 */
  SegmentMs?: number;
  /** 批次的消息大小，范围1 KB到12 MB */
  MaxMessageBytes?: number;
  /** 消息保存的时间类型：CreateTime/LogAppendTime */
  LogMsgTimestampType?: string;
}

/** 批量修改topic属性结果 */
declare interface BatchModifyTopicResultDTO {
  /** ckafka集群实例Id */
  InstanceId?: string | null;
  /** 主题名 */
  TopicName?: string | null;
  /** 操作返回码 */
  ReturnCode?: string | null;
  /** 操作返回信息 */
  Message?: string;
}

/** 主题占用Broker磁盘大小 */
declare interface BrokerTopicData {
  /** 主题名称 */
  TopicName?: string | null;
  /** 主题Id */
  TopicId?: string | null;
  /** 主题占用Broker 容量大小 */
  DataSize?: number | null;
}

/** broker维度topic 流量排行指标 */
declare interface BrokerTopicFlowData {
  /** 主题名 */
  TopicName?: string | null;
  /** 主题Id */
  TopicId?: string | null;
  /** Topic 流量(MB) */
  TopicTraffic?: string | null;
}

/** ClickHouse连接源参数 */
declare interface ClickHouseConnectParam {
  /** ClickHouse的连接port */
  Port: number | null;
  /** ClickHouse连接源的用户名 */
  UserName: string | null;
  /** ClickHouse连接源的密码 */
  Password: string | null;
  /** ClickHouse连接源的实例资源 */
  Resource: string | null;
  /** ClickHouse连接源是否为自建集群 */
  SelfBuilt: boolean | null;
  /** ClickHouse连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** ClickHouse连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** ClickHouse修改连接源参数 */
declare interface ClickHouseModifyConnectParam {
  /** ClickHouse连接源的实例资源【不支持修改】 */
  Resource: string | null;
  /** ClickHouse的连接port【不支持修改】 */
  Port?: number | null;
  /** ClickHouse连接源的实例vip【不支持修改】 */
  ServiceVip?: string | null;
  /** ClickHouse连接源的vpcId【不支持修改】 */
  UniqVpcId?: string | null;
  /** ClickHouse连接源的用户名 */
  UserName?: string | null;
  /** ClickHouse连接源的密码 */
  Password?: string | null;
  /** ClickHouse连接源是否为自建集群【不支持修改】 */
  SelfBuilt?: boolean | null;
  /** 是否更新到关联的Datahub任务，默认为true */
  IsUpdate?: boolean | null;
}

/** ClickHouse类型入参 */
declare interface ClickHouseParam {
  /** ClickHouse的集群 */
  Cluster: string | null;
  /** ClickHouse的数据库名 */
  Database: string | null;
  /** ClickHouse的数据表名 */
  Table: string | null;
  /** ClickHouse的schema */
  Schema: ClickHouseSchema[] | null;
  /** 实例资源 */
  Resource: string | null;
  /** ClickHouse的连接ip */
  Ip?: string | null;
  /** ClickHouse的连接port */
  Port?: number | null;
  /** ClickHouse的用户名 */
  UserName?: string | null;
  /** ClickHouse的密码 */
  Password?: string | null;
  /** 实例vip */
  ServiceVip?: string | null;
  /** 实例的vpcId */
  UniqVpcId?: string | null;
  /** 是否为自建集群 */
  SelfBuilt?: boolean | null;
  /** ClickHouse是否抛弃解析失败的消息，默认为true */
  DropInvalidMessage?: boolean | null;
  /** ClickHouse 类型，emr-clickhouse : "emr";cdw-clickhouse : "cdwch";自建 : "" */
  Type?: string | null;
  /** 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效 */
  DropCls?: DropCls | null;
  /** 每批次投递到 ClickHouse 表消息数量，默认为 1000 条。提高该参数值，有利于减少往 ClickHouse 投递的次数，但在错误消息过多及网络不稳定等极端情况下时，可能导致频繁重试影响效率。 */
  BatchSize?: number | null;
  /** 每次从 topic 中拉取消息大小，默认为 1MB，即至少要从 topic 中批量拉取 1MB 消息，才进行数据投递到 ClickHouse 操作。提高该参数值，有利于减少往 ClickHouse 投递的次数，但在错误消息过多及网络不稳定等极端情况下时，可能导致频繁重试影响效率。 */
  ConsumerFetchMinBytes?: number | null;
  /** 每次从 topic 拉取消息最大等待时间，当超过当前最大等待时间时，即使没有拉取到 ConsumerFetchMinBytes 大小，也将进行 ClickHouse 投递操作。提高该参数值，有利于减少往 ClickHouse 投递的次数，但在错误消息过多及网络不稳定等极端情况下时，可能导致频繁重试影响效率。 */
  ConsumerFetchMaxWaitMs?: number | null;
}

/** ClickHouse的Schema */
declare interface ClickHouseSchema {
  /** 表的列名 */
  ColumnName: string | null;
  /** 该列对应的jsonKey名 */
  JsonKey: string | null;
  /** 表列项的类型 */
  Type: string | null;
  /** 列项是否允许为空 */
  AllowNull: boolean | null;
}

/** Cls类型入参 */
declare interface ClsParam {
  /** 生产的信息是否为json格式 */
  DecodeJson: boolean | null;
  /** cls日志主题id */
  Resource: string | null;
  /** cls日志集id */
  LogSet?: string | null;
  /** 当DecodeJson为false时必填 */
  ContentKey?: string | null;
  /** 指定消息中的某字段内容作为cls日志的时间。字段内容格式需要是秒级时间戳 */
  TimeField?: string | null;
}

/** 集群信息实体 */
declare interface ClusterInfo {
  /** 集群Id */
  ClusterId?: number;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群最大磁盘 单位GB */
  MaxDiskSize?: number | null;
  /** 集群最大带宽 单位MB/s */
  MaxBandWidth?: number | null;
  /** 集群当前可用磁盘 单位GB */
  AvailableDiskSize?: number | null;
  /** 集群当前可用带宽 单位MB/s */
  AvailableBandWidth?: number | null;
  /** 集群所属可用区，表明集群归属的可用区 */
  ZoneId?: number | null;
  /** 集群节点所在的可用区，若该集群为跨可用区集群，则包含该集群节点所在的多个可用区。 */
  ZoneIds?: number[] | null;
}

/** 高级配置对象 */
declare interface Config {
  /** 消息保留时间 */
  Retention?: number | null;
  /** 最小同步复制数 */
  MinInsyncReplicas?: number | null;
  /** 日志清理模式，默认 delete。delete：日志按保存时间删除；compact：日志按 key 压缩；compact, delete：日志按 key 压缩且会保存时间删除。 */
  CleanUpPolicy?: string | null;
  /** Segment 分片滚动的时长 */
  SegmentMs?: number | null;
  /** 0表示 false。 1表示 true。 */
  UncleanLeaderElectionEnable?: number | null;
  /** Segment 分片滚动的字节数 */
  SegmentBytes?: number | null;
  /** 最大消息字节数 */
  MaxMessageBytes?: number | null;
  /** 消息保留文件大小 */
  RetentionBytes?: number | null;
  /** 消息保存的时间类型 */
  LogMsgTimestampType?: string | null;
}

/** 返回连接源的Id */
declare interface ConnectResourceResourceIdResp {
  /** 连接源的Id */
  ResourceId?: string | null;
}

/** Connection信息 */
declare interface Connection {
  /** 主题名 */
  TopicName?: string;
  /** 消费组ID */
  GroupId?: string;
  /** 主题Id */
  TopicId?: string;
}

/** 用户组实体 */
declare interface ConsumerGroup {
  /** 用户组名称 */
  ConsumerGroupName?: string;
  /** 订阅信息实体 */
  SubscribedInfo?: SubscribedInfo[];
}

/** 消费者组消费速度排行 */
declare interface ConsumerGroupSpeed {
  /** 消费者组名称 */
  ConsumerGroupName?: string;
  /** 消费速度 Count/Minute */
  Speed?: number;
}

/** 消费组主题对象 */
declare interface ConsumerGroupTopic {
  /** 主题ID */
  TopicId?: string;
  /** 主题名称 */
  TopicName?: string;
}

/** 消息记录 */
declare interface ConsumerRecord {
  /** 主题名 */
  Topic?: string;
  /** 分区id */
  Partition?: number;
  /** 位点 */
  Offset?: number;
  /** 消息key */
  Key?: string | null;
  /** 消息value */
  Value?: string | null;
  /** 消息时间戳 */
  Timestamp?: number | null;
  /** 消息headers */
  Headers?: string | null;
}

/** Cos Datahub 任务接入参数 */
declare interface CosParam {
  /** cos 存储桶名称 */
  BucketName: string | null;
  /** 地域代码 */
  Region: string | null;
  /** 对象名称 */
  ObjectKey?: string | null;
  /** 汇聚消息量的大小（单位：MB) */
  AggregateBatchSize?: number | null;
  /** 汇聚的时间间隔（单位：小时） */
  AggregateInterval?: number | null;
  /** 消息汇聚后的文件格式（支持csv, json） */
  FormatOutputType?: string | null;
  /** 转储的对象目录前缀 */
  ObjectKeyPrefix?: string | null;
  /** 根据strptime 时间格式化的分区格式 */
  DirectoryTimeFormat?: string | null;
}

/** 创建数据转储返回值 */
declare interface CreateDatahubTaskRes {
  /** 转储任务id */
  TaskId?: string;
  /** 数据转储Id */
  DatahubId?: string | null;
}

/** 创建后付费接口返回的 Data 数据结构 */
declare interface CreateInstancePostData {
  /** CreateInstancePre返回固定为0，不能作为CheckTaskStatus的查询条件。只是为了保证和后台数据结构对齐。 */
  FlowId?: number | null;
  /** 订单号列表 */
  DealNames?: string[] | null;
  /** ckafka集群实例Id，当购买多个实例时，默认返回购买的第一个实例 id */
  InstanceId?: string | null;
  /** 订单和购买实例对应映射列表 */
  DealNameInstanceIdMapping?: DealInstanceDTO[] | null;
}

/** 后付费实例相关接口返回结构 */
declare interface CreateInstancePostResp {
  /** 返回的code，0为正常，非0为错误 */
  ReturnCode?: string;
  /** 接口返回消息，当接口报错时提示错误信息 */
  ReturnMessage?: string;
  /** 返回的Data数据 */
  Data?: CreateInstancePostData | null;
}

/** 创建预付费接口返回的Data */
declare interface CreateInstancePreData {
  /** CreateInstancePre返回固定为0，不能作为CheckTaskStatus的查询条件。只是为了保证和后台数据结构对齐。 */
  FlowId?: number | null;
  /** 订单号列表 */
  DealNames?: string[] | null;
  /** ckafka集群实例Id，当购买多个实例时，默认返回购买的第一个实例 id */
  InstanceId?: string | null;
  /** 订单和购买实例对应映射列表 */
  DealNameInstanceIdMapping?: DealInstanceDTO[] | null;
}

/** 预付费实例相关接口返回结构 */
declare interface CreateInstancePreResp {
  /** 返回的code，0为正常，非0为错误 */
  ReturnCode?: string;
  /** 成功消息 */
  ReturnMessage?: string;
  /** 操作型返回的Data数据 */
  Data?: CreateInstancePreData | null;
  /** 删除时间。目前该参数字段已废弃，将会在未来被删除 */
  DeleteRouteTimestamp?: string | null;
}

/** 创建主题返回 */
declare interface CreateTopicResp {
  /** 主题Id */
  TopicId?: string;
}

/** Ctsdb连接源参数 */
declare interface CtsdbConnectParam {
  /** Ctsdb的连接port */
  Port?: number | null;
  /** Ctsdb连接源的实例vip */
  ServiceVip?: string | null;
  /** Ctsdb连接源的vpcId */
  UniqVpcId?: string | null;
  /** Ctsdb连接源的用户名 */
  UserName?: string | null;
  /** Ctsdb连接源的密码 */
  Password?: string | null;
  /** Ctsdb连接源的实例资源 */
  Resource?: string | null;
}

/** Ctsdb连接源参数(更新) */
declare interface CtsdbModifyConnectParam {
  /** Ctsdb的连接port */
  Port?: number | null;
  /** Ctsdb连接源的实例vip */
  ServiceVip?: string | null;
  /** Ctsdb连接源的vpcId */
  UniqVpcId?: string | null;
  /** Ctsdb连接源的用户名 */
  UserName?: string | null;
  /** Ctsdb连接源的密码 */
  Password?: string | null;
  /** Ctsdb连接源的实例资源 */
  Resource?: string | null;
}

/** Ctsdb类型入参 */
declare interface CtsdbParam {
  /** 连接管理实例资源 */
  Resource?: string | null;
  /** Ctsdb的metric */
  CtsdbMetric?: string | null;
}

/** Datahub资源配置 */
declare interface DatahubResource {
  /** 资源类型 */
  Type: string;
  /** ckafka配置，Type为KAFKA时必填 */
  KafkaParam?: KafkaParam | null;
  /** EB配置，Type为EB时必填 */
  EventBusParam?: EventBusParam | null;
  /** MongoDB配置，Type为MONGODB时必填 */
  MongoDBParam?: MongoDBParam | null;
  /** Es配置，Type为ES时必填 */
  EsParam?: EsParam | null;
  /** Tdw配置，Type为TDW时必填 */
  TdwParam?: TdwParam | null;
  /** Dts配置，Type为DTS时必填 */
  DtsParam?: DtsParam | null;
  /** ClickHouse配置，Type为CLICKHOUSE时必填 */
  ClickHouseParam?: ClickHouseParam | null;
  /** Cls配置，Type为CLS时必填 */
  ClsParam?: ClsParam | null;
  /** Cos配置，Type为COS时必填 */
  CosParam?: CosParam | null;
  /** MySQL配置，Type为MYSQL时必填 */
  MySQLParam?: MySQLParam | null;
  /** PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填 */
  PostgreSQLParam?: PostgreSQLParam | null;
  /** Topic配置，Type为Topic时必填 */
  TopicParam?: TopicParam | null;
  /** MariaDB配置，Type为MARIADB时必填 */
  MariaDBParam?: MariaDBParam | null;
  /** SQLServer配置，Type为SQLSERVER时必填 */
  SQLServerParam?: SQLServerParam | null;
  /** Ctsdb配置，Type为CTSDB时必填 */
  CtsdbParam?: CtsdbParam | null;
  /** Scf配置，Type为SCF时必填 */
  ScfParam?: ScfParam | null;
  /** MQTT配置，Type为 MQTT 时必填 */
  MqttParam?: MqttParam | null;
}

/** Datahub请求的taskid */
declare interface DatahubTaskIdRes {
  /** 任务id */
  TaskId?: string | null;
}

/** Datahub任务信息 */
declare interface DatahubTaskInfo {
  /** 任务Id */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务类型，SOURCE数据接入，SINK数据流出 */
  TaskType?: string;
  /** 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败 */
  Status?: number;
  /** 数据源 */
  SourceResource?: DatahubResource | null;
  /** 数据目标 */
  TargetResource?: DatahubResource | null;
  /** 任务创建时间 */
  CreateTime?: string | null;
  /** 异常信息 */
  ErrorMessage?: string | null;
  /** 创建进度百分比 */
  TaskProgress?: number | null;
  /** 任务当前处于的步骤 */
  TaskCurrentStep?: string | null;
  /** Datahub转储Id */
  DatahubId?: string | null;
  /** 步骤列表 */
  StepList?: string[] | null;
}

/** Datahub主题 */
declare interface DatahubTopicDTO {
  /** 名称 */
  Name?: string;
  /** Topic名称 */
  TopicName?: string;
  /** Topic Id */
  TopicId?: string;
  /** 分区数 */
  PartitionNum?: number;
  /** 过期时间 */
  RetentionMs?: number;
  /** 备注 */
  Note?: string;
  /** 状态，1使用中，2删除中 */
  Status?: number;
}

/** Datahub Topic 响应 */
declare interface DatahubTopicResp {
  /** 主题名称 */
  TopicName?: string;
  /** 主题Id */
  TopicId?: string | null;
}

/** 数据处理——Value处理参数——转换时间格式参数 */
declare interface DateParam {
  /** 时间格式 */
  Format?: string;
  /** 输入类型，string，unix时间戳，默认string */
  TargetType?: string | null;
  /** 时区，默认GMT+8 */
  TimeZone?: string | null;
}

/** 预付费/后付费接口中，订单和 CKafka 实例映射数据结构 */
declare interface DealInstanceDTO {
  /** 订单流水 */
  DealName?: string | null;
  /** 订单流水对应购买的 CKafka 实例 id 列表 */
  InstanceIdList?: string[] | null;
}

/** topic链接信息 */
declare interface DescribeConnectInfoResultDTO {
  /** ip地址 */
  IpAddr: string | null;
  /** 连结时间 */
  Time: string | null;
  /** 是否支持的版本 */
  IsUnSupportVersion: boolean | null;
}

/** 查询连接源具体数据的返参 */
declare interface DescribeConnectResource {
  /** 连接源的Id */
  ResourceId?: string | null;
  /** 连接源名称 */
  ResourceName?: string | null;
  /** 连接源描述 */
  Description?: string | null;
  /** 连接源类型 */
  Type?: string | null;
  /** 连接源的状态 */
  Status?: number | null;
  /** 连接源的创建时间 */
  CreateTime?: string | null;
  /** 连接源的异常信息 */
  ErrorMessage?: string | null;
  /** 该连接源关联的Datahub任务数 */
  DatahubTaskCount?: number | null;
  /** 连接源的当前所处步骤 */
  CurrentStep?: string | null;
  /** 创建进度百分比 */
  TaskProgress?: number | null;
  /** 步骤列表 */
  StepList?: string[] | null;
  /** Dts配置，Type为DTS时返回 */
  DtsConnectParam?: DtsConnectParam | null;
  /** MongoDB配置，Type为MONGODB时返回 */
  MongoDBConnectParam?: MongoDBConnectParam | null;
  /** Es配置，Type为ES时返回 */
  EsConnectParam?: EsConnectParam | null;
  /** ClickHouse配置，Type为CLICKHOUSE时返回 */
  ClickHouseConnectParam?: ClickHouseConnectParam | null;
  /** MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回 */
  MySQLConnectParam?: MySQLConnectParam | null;
  /** PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回 */
  PostgreSQLConnectParam?: PostgreSQLConnectParam | null;
  /** MariaDB配置，Type为MARIADB时返回 */
  MariaDBConnectParam?: MariaDBConnectParam | null;
  /** SQLServer配置，Type为SQLSERVER时返回 */
  SQLServerConnectParam?: SQLServerConnectParam | null;
  /** Ctsdb配置，Type为CTSDB时返回 */
  CtsdbConnectParam?: CtsdbConnectParam | null;
  /** Doris 配置，Type 为 DORIS 时返回 */
  DorisConnectParam?: DorisConnectParam | null;
  /** Kafka配置，Type 为 KAFKA 时返回 */
  KafkaConnectParam?: KafkaConnectParam | null;
  /** MQTT配置，Type 为 MQTT 时返回 */
  MqttConnectParam?: MqttConnectParam | null;
}

/** 查询连接源具体数据的返参 */
declare interface DescribeConnectResourceResp {
  /** 连接源的Id */
  ResourceId?: string | null;
  /** 连接源名称 */
  ResourceName?: string | null;
  /** 连接源描述 */
  Description?: string | null;
  /** 连接源类型 */
  Type?: string | null;
  /** 连接源的状态 */
  Status?: number | null;
  /** 连接源的创建时间 */
  CreateTime?: string | null;
  /** 连接源的异常信息 */
  ErrorMessage?: string | null;
  /** 连接源的当前所处步骤 */
  CurrentStep?: string | null;
  /** 步骤列表 */
  StepList?: string[] | null;
  /** MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回 */
  MySQLConnectParam?: MySQLConnectParam | null;
  /** PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回 */
  PostgreSQLConnectParam?: PostgreSQLConnectParam | null;
  /** Dts配置，Type为DTS时返回 */
  DtsConnectParam?: DtsConnectParam | null;
  /** MongoDB配置，Type为MONGODB时返回 */
  MongoDBConnectParam?: MongoDBConnectParam | null;
  /** Es配置，Type为ES时返回 */
  EsConnectParam?: EsConnectParam | null;
  /** ClickHouse配置，Type为CLICKHOUSE时返回 */
  ClickHouseConnectParam?: ClickHouseConnectParam | null;
  /** MariaDB配置，Type为MARIADB时返回 */
  MariaDBConnectParam?: MariaDBConnectParam | null;
  /** SQLServer配置，Type为SQLSERVER时返回 */
  SQLServerConnectParam?: SQLServerConnectParam | null;
  /** Ctsdb配置，Type为CTSDB时返回 */
  CtsdbConnectParam?: CtsdbConnectParam | null;
  /** Doris 配置，Type 为 DORIS 时返回 */
  DorisConnectParam?: DorisConnectParam | null;
  /** Kafka配置，Type 为 KAFKA 时返回 */
  KafkaConnectParam?: KafkaConnectParam | null;
  /** MQTT配置，Type 为 MQTT 时返回 */
  MqttConnectParam?: MqttConnectParam | null;
}

/** 查询连接源列表的返参 */
declare interface DescribeConnectResourcesResp {
  /** 连接源个数 */
  TotalCount?: number;
  /** 连接源数据 */
  ConnectResourceList?: DescribeConnectResource[] | null;
}

/** 查询Datahub任务信息 */
declare interface DescribeDatahubTaskRes {
  /** 任务ID */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务类型，SOURCE数据接入，SINK数据流出 */
  TaskType?: string;
  /** 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败 */
  Status?: number;
  /** 数据源 */
  SourceResource?: DatahubResource | null;
  /** 数据目标 */
  TargetResource?: DatahubResource | null;
  /** Connection列表 */
  Connections?: Connection[] | null;
  /** 任务创建时间 */
  CreateTime?: string | null;
  /** 消息处理规则 */
  TransformParam?: TransformParam | null;
  /** 数据接入ID */
  DatahubId?: string | null;
  /** 绑定的SchemaId */
  SchemaId?: string | null;
  /** 绑定的Schema名称 */
  SchemaName?: string | null;
  /** 数据处理规则 */
  TransformsParam?: TransformsParam | null;
  /** 异常信息 */
  ErrorMessage?: string | null;
  /** 任务标签列表 */
  Tags?: Tag[] | null;
}

/** 查询Datahub任务列表 */
declare interface DescribeDatahubTasksRes {
  /** 任务总数 */
  TotalCount?: number;
  /** Datahub任务信息列表 */
  TaskList?: DatahubTaskInfo[] | null;
}

/** Datahub Topic详情 */
declare interface DescribeDatahubTopicResp {
  /** 名称 */
  Name?: string;
  /** Topic名称 */
  TopicName?: string;
  /** Topic Id */
  TopicId?: string;
  /** 分区数 */
  PartitionNum?: number;
  /** 过期时间 */
  RetentionMs?: number;
  /** 备注 */
  Note?: string | null;
  /** 用户名 */
  UserName?: string;
  /** 密码 */
  Password?: string;
  /** 状态，1使用中，2删除中 */
  Status?: number;
  /** 服务路由地址 */
  Address?: string | null;
}

/** Datahub主题列表 */
declare interface DescribeDatahubTopicsResp {
  /** 总数 */
  TotalCount?: number;
  /** Topic列表 */
  TopicList?: DatahubTopicDTO[] | null;
}

/** DescribeGroup返回实体 */
declare interface DescribeGroup {
  /** 消费分组名称 */
  Group?: string;
  /** 该 group 使用的协议。 */
  Protocol?: string;
}

/** Doris 连接源参数 */
declare interface DorisConnectParam {
  /** Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口 */
  Port: number | null;
  /** Doris 连接源的用户名 */
  UserName: string | null;
  /** Doris 连接源的密码 */
  Password: string | null;
  /** Doris 连接源的实例资源 */
  Resource: string | null;
  /** Doris 连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** Doris 连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
  /** Doris 连接源是否为自建集群 */
  SelfBuilt?: boolean | null;
  /** Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口 */
  BePort?: number | null;
}

/** Doris 连接源修改参数 */
declare interface DorisModifyConnectParam {
  /** Doris 连接源的实例资源 */
  Resource: string | null;
  /** Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口 */
  Port?: number | null;
  /** Doris 连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** Doris 连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** Doris 连接源的用户名 */
  UserName?: string | null;
  /** Doris 连接源的密码 */
  Password?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
  /** Doris 连接源是否为自建集群 */
  SelfBuilt?: boolean | null;
  /** Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口 */
  BePort?: number | null;
}

/** dip失败消息写入cls的配置 */
declare interface DropCls {
  /** 是否投递到cls */
  DropInvalidMessageToCls?: boolean | null;
  /** 投递cls的地域 */
  DropClsRegion?: string | null;
  /** 投递cls的账号 */
  DropClsOwneruin?: string | null;
  /** 投递cls的主题 */
  DropClsTopicId?: string | null;
  /** 投递cls的日志集id */
  DropClsLogSet?: string | null;
}

/** Dts连接源参数 */
declare interface DtsConnectParam {
  /** Dts的连接port */
  Port: number | null;
  /** Dts消费分组的Id */
  GroupId: string | null;
  /** Dts消费分组的账号 */
  UserName: string | null;
  /** Dts消费分组的密码 */
  Password: string | null;
  /** Dts实例Id */
  Resource: string | null;
  /** Dts订阅的topic */
  Topic: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** Dts修改连接源参数 */
declare interface DtsModifyConnectParam {
  /** Dts实例Id【不支持修改】 */
  Resource: string;
  /** Dts的连接port【不支持修改】 */
  Port?: number;
  /** Dts消费分组的Id */
  GroupId?: string;
  /** Dts消费分组的账号 */
  UserName?: string;
  /** Dts消费分组的密码 */
  Password?: string;
  /** 是否更新到关联的Datahub任务，默认为true */
  IsUpdate?: boolean;
  /** Dts订阅的topic【不支持修改】 */
  Topic?: string;
}

/** Dts类型入参 */
declare interface DtsParam {
  /** Dts实例Id */
  Resource: string | null;
  /** Dts的连接ip */
  Ip?: string | null;
  /** Dts的连接port */
  Port?: number | null;
  /** Dts订阅的topic */
  Topic?: string | null;
  /** Dts消费分组的Id */
  GroupId?: string | null;
  /** Dts消费分组的账号 */
  GroupUser?: string | null;
  /** Dts消费分组的密码 */
  GroupPassword?: string | null;
  /** false同步原始数据，true同步解析后的json格式数据,默认true */
  TranSql?: boolean | null;
}

/** 动态硬盘扩容配置 */
declare interface DynamicDiskConfig {
  /** 动态硬盘扩容配置开关（0: 关闭，1: 开启） */
  Enable?: number | null;
  /** 每次磁盘动态扩容大小百分比 */
  StepForwardPercentage?: number | null;
  /** 磁盘配额百分比触发条件，即消息达到此值触发硬盘自动扩容事件 */
  DiskQuotaPercentage?: number | null;
  /** 最大扩容硬盘大小，以 GB 为单位 */
  MaxDiskSpace?: number | null;
}

/** 动态消息保留时间配置 */
declare interface DynamicRetentionTime {
  /** 动态消息保留时间配置开关（0: 关闭，1: 开启） */
  Enable?: number | null;
  /** 磁盘配额百分比触发条件，即消息达到此值触发消息保留时间变更事件 */
  DiskQuotaPercentage?: number | null;
  /** 每次向前调整消息保留时间百分比 */
  StepForwardPercentage?: number | null;
  /** 保底时长，单位分钟 */
  BottomRetention?: number | null;
}

/** Es连接源参数 */
declare interface EsConnectParam {
  /** Es的连接port */
  Port: number | null;
  /** Es连接源的用户名 */
  UserName: string | null;
  /** Es连接源的密码 */
  Password: string | null;
  /** Es连接源的实例资源 */
  Resource: string | null;
  /** Es连接源是否为自建集群 */
  SelfBuilt: boolean | null;
  /** Es连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** Es连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** Es修改连接源参数 */
declare interface EsModifyConnectParam {
  /** Es连接源的实例资源【不支持修改】 */
  Resource: string | null;
  /** Es的连接port【不支持修改】 */
  Port?: number | null;
  /** Es连接源的实例vip【不支持修改】 */
  ServiceVip?: string | null;
  /** Es连接源的vpcId【不支持修改】 */
  UniqVpcId?: string | null;
  /** Es连接源的用户名 */
  UserName?: string | null;
  /** Es连接源的密码 */
  Password?: string | null;
  /** Es连接源是否为自建集群【不支持修改】 */
  SelfBuilt?: boolean | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** Es类型入参 */
declare interface EsParam {
  /** Es实例资源Id */
  Resource: string | null;
  /** Es的连接port */
  Port?: number | null;
  /** Es用户名 */
  UserName?: string | null;
  /** Es密码 */
  Password?: string | null;
  /** 是否为自建集群 */
  SelfBuilt?: boolean | null;
  /** 实例vip */
  ServiceVip?: string | null;
  /** 实例的vpcId */
  UniqVpcId?: string | null;
  /** Es是否抛弃解析失败的消息 */
  DropInvalidMessage?: boolean | null;
  /** Es自定义index名称 */
  Index?: string | null;
  /** Es自定义日期后缀 */
  DateFormat?: string | null;
  /** 非json格式数据的自定义key */
  ContentKey?: string | null;
  /** Es是否抛弃非json格式的消息 */
  DropInvalidJsonMessage?: boolean | null;
  /** 转储到Es中的文档ID取值字段名 */
  DocumentIdField?: string | null;
  /** Es自定义index名称的类型，STRING，JSONPATH，默认为STRING */
  IndexType?: string | null;
  /** 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效 */
  DropCls?: DropCls | null;
  /** 转储到ES的消息为Database的binlog时，如果需要同步数据库操作，即增删改的操作到ES时填写数据库表主键 */
  DatabasePrimaryKey?: string | null;
  /** 死信队列 */
  DropDlq?: FailureParam | null;
  /** 使用数据订阅格式导入 es 时，消息与 es 索引字段映射关系。不填默认为默认字段匹配 */
  RecordMappingList?: EsRecordMapping[] | null;
  /** 消息要映射为 es 索引中 @timestamp 的字段，如果当前配置为空，则使用消息的时间戳进行映射 */
  DateField?: string | null;
  /** 用来区分当前索引映射，属于新建索引还是存量索引。"EXIST_MAPPING"：从存量索引中选择；"NEW_MAPPING"：新建索引 */
  RecordMappingMode?: string | null;
}

/** 消息字段与 es 索引的映射关系 */
declare interface EsRecordMapping {
  /** es 索引成员名称 */
  ColumnName?: string | null;
  /** 消息字段名称 */
  JsonKey?: string | null;
}

/** EventBus配置 */
declare interface EventBusParam {
  /** 资源类型。COS/ES/CLS */
  Type: string;
  /** 是否为自建集群 */
  SelfBuilt: boolean;
  /** 实例资源 */
  Resource: string;
  /** SCF云函数命名空间 */
  Namespace?: string;
  /** SCF云函数函数名 */
  FunctionName?: string;
  /** SCF云函数版本及别名 */
  Qualifier?: string;
}

/** 数据处理规则失败处理 */
declare interface FailureParam {
  /** 类型，DLQ死信队列，IGNORE_ERROR保留，DROP废弃 */
  Type: string;
  /** Ckafka类型死信队列 */
  KafkaParam?: KafkaParam;
  /** 重试间隔 */
  RetryInterval?: number;
  /** 重试次数 */
  MaxRetryAttempts?: number;
  /** DIP Topic类型死信队列 */
  TopicParam?: TopicParam | null;
  /** 死信队列类型，CKAFKA，TOPIC */
  DlqType?: string | null;
}

/** 数据处理——处理链 */
declare interface FieldParam {
  /** 解析 */
  Analyse: AnalyseParam;
  /** 二次解析 */
  SecondaryAnalyse?: SecondaryAnalyseParam | null;
  /** 数据处理 */
  SMT?: SMTParam[] | null;
  /** 测试结果 */
  Result?: string | null;
  /** 解析结果 */
  AnalyseResult?: SMTParam[] | null;
  /** 二次解析结果 */
  SecondaryAnalyseResult?: SMTParam[] | null;
  /** JSON格式解析结果 */
  AnalyseJsonResult?: string | null;
  /** JSON格式二次解析结果 */
  SecondaryAnalyseJsonResult?: string | null;
}

/** 查询过滤器>描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。> */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 过滤器参数 */
declare interface FilterMapParam {
  /** Key值 */
  Key: string;
  /** 匹配模式，前缀匹配PREFIX，后缀匹配SUFFIX，包含匹配CONTAINS，EXCEPT除外匹配，数值匹配NUMBER，IP匹配IP */
  MatchMode: string;
  /** Value值 */
  Value: string;
  /** 固定REGULAR */
  Type?: string;
}

/** 组实体 */
declare interface Group {
  /** 消费分组名称 */
  GroupName?: string;
}

/** consumer信息 */
declare interface GroupInfoMember {
  /** coordinator 为消费分组中的消费者生成的唯一 ID */
  MemberId?: string;
  /** 客户消费者 SDK 自己设置的 client.id 信息 */
  ClientId?: string;
  /** 一般存储客户的 IP 地址 */
  ClientHost?: string;
  /** 存储着分配给该消费者的 partition 信息 */
  Assignment?: Assignment;
}

/** GroupInfo内部topic对象 */
declare interface GroupInfoTopics {
  /** 分配的 topic 名称 */
  Topic?: string;
  /** 分配的 partition 信息 */
  Partitions?: number[] | null;
}

/** 组偏移量分区对象 */
declare interface GroupOffsetPartition {
  /** topic 的 partitionId */
  Partition?: number;
  /** consumer 提交的 offset 位置 */
  Offset?: number;
  /** 支持消费者提交消息时，传入 metadata 作为它用，当前一般为空字符串 */
  Metadata?: string | null;
  /** 错误码 */
  ErrorCode?: number;
  /** 当前 partition 最新的 offset */
  LogEndOffset?: number;
  /** 未消费的消息个数 */
  Lag?: number;
}

/** 消费分组主题对象 */
declare interface GroupOffsetTopic {
  /** 主题名称 */
  Topic?: string;
  /** 该主题分区数组，其中每个元素为一个 json object */
  Partitions?: GroupOffsetPartition[] | null;
}

/** InquireCkafkaPrice接口询价返回值 */
declare interface InquireCkafkaPriceResp {
  /** 实例价格 */
  InstancePrice?: InquiryPrice | null;
  /** 公网带宽价格 */
  PublicNetworkBandwidthPrice?: InquiryPrice | null;
}

/** 询价返回参数 */
declare interface InquiryBasePrice {
  /** 单位原价 */
  UnitPrice?: number | null;
  /** 折扣单位价格 */
  UnitPriceDiscount?: number | null;
  /** 合计原价 */
  OriginalPrice?: number | null;
  /** 折扣合计价格 */
  DiscountPrice?: number | null;
  /** 折扣(单位是%) */
  Discount?: number | null;
  /** 商品数量 */
  GoodsNum?: number | null;
  /** 付费货币 */
  Currency?: string | null;
  /** 硬盘专用返回参数 */
  DiskType?: string | null;
  /** 购买时长 */
  TimeSpan?: number | null;
  /** 购买时长单位("m"按月, "h"按小时) */
  TimeUnit?: string | null;
  /** 购买数量 */
  Value?: number | null;
}

/** 详细类别的价格 */
declare interface InquiryDetailPrice {
  /** 额外内网带宽价格 */
  BandwidthPrice?: InquiryBasePrice | null;
  /** 硬盘价格 */
  DiskPrice?: InquiryBasePrice | null;
  /** 额外分区价格 */
  PartitionPrice?: InquiryBasePrice | null;
  /** 额外Topic价格 */
  TopicPrice?: InquiryBasePrice | null;
  /** 实例套餐价格 */
  InstanceTypePrice?: InquiryBasePrice | null;
}

/** 购买硬盘参数 */
declare interface InquiryDiskParam {
  /** 购买硬盘类型: SSD(SSD), CLOUD_SSD(SSD云硬盘), CLOUD_PREMIUM(高性能云硬盘), CLOUD_BASIC(云盘) */
  DiskType?: string;
  /** 购买硬盘大小: 单位GB */
  DiskSize?: number;
}

/** 询价返回参数 */
declare interface InquiryPrice {
  /** 单位原价 */
  UnitPrice?: number | null;
  /** 折扣单位价格 */
  UnitPriceDiscount?: number | null;
  /** 合计原价 */
  OriginalPrice?: number | null;
  /** 折扣合计价格 */
  DiscountPrice?: number | null;
  /** 折扣(单位是%) */
  Discount?: number | null;
  /** 商品数量 */
  GoodsNum?: number | null;
  /** 付费货币 */
  Currency?: string | null;
  /** 硬盘专用返回参数 */
  DiskType?: string | null;
  /** 购买时长 */
  TimeSpan?: number | null;
  /** 购买时长单位("m"按月, "h"按小时) */
  TimeUnit?: string | null;
  /** 购买数量 */
  Value?: number | null;
  /** 详细类别的价格 */
  DetailPrices?: InquiryDetailPrice | null;
}

/** 公网带宽参数 */
declare interface InquiryPublicNetworkParam {
  /** 公网计费模式: BANDWIDTH_PREPAID(包年包月), BANDWIDTH_POSTPAID_BY_HOUR(带宽按小时计费) */
  PublicNetworkChargeType?: string;
  /** 公网带宽, 单位MB */
  PublicNetworkMonthly?: number;
}

/** 实例对象 */
declare interface Instance {
  /** ckafka集群实例Id */
  InstanceId?: string;
  /** ckafka集群实例Name */
  InstanceName?: string;
  /** 实例的状态。0: 创建中，1: 运行中，2: 删除中, 3: 已删除, 5: 隔离中, 7: 升级中, -1: 创建失败 */
  Status?: number;
  /** 是否开源实例。开源：true，不开源：false */
  IfCommunity?: boolean | null;
}

/** 实例购买付费参数 */
declare interface InstanceChargeParam {
  /** 实例付费类型: PREPAID(包年包月), POSTPAID_BY_HOUR(按量付费) */
  InstanceChargeType?: string;
  /** 购买时长: 包年包月时需要填写, 按量计费无需填写 */
  InstanceChargePeriod?: number;
}

/** 实例配置实体 */
declare interface InstanceConfigDO {
  /** 是否自动创建主题 */
  AutoCreateTopicsEnable?: boolean;
  /** 分区数 */
  DefaultNumPartitions?: number;
  /** 默认的复制Factor */
  DefaultReplicationFactor?: number;
}

/** 实例详情 */
declare interface InstanceDetail {
  /** ckafka集群实例Id */
  InstanceId?: string;
  /** ckafka集群实例名称 */
  InstanceName?: string;
  /** 访问实例的vip 信息 */
  Vip?: string;
  /** 访问实例的端口信息 */
  Vport?: string;
  /** 虚拟IP列表 */
  VipList?: VipEntity[];
  /** 实例的状态。0: 创建中，1: 运行中，2: 删除中, 3: 已删除, 5: 隔离中, 7: 升级中, -1: 创建失败 */
  Status?: number;
  /** 实例带宽，单位Mbps */
  Bandwidth?: number;
  /** ckafka集群实例磁盘大小，单位G */
  DiskSize?: number;
  /** 可用区域ID */
  ZoneId?: number;
  /** vpcId，如果为空，说明是基础网络 */
  VpcId?: string;
  /** 子网id */
  SubnetId?: string;
  /** 实例是否续费，int 枚举值：1表示自动续费，2表示明确不自动续费 */
  RenewFlag?: number;
  /** 实例状态 int：1表示健康，2表示告警，3 表示实例状态异常 */
  Healthy?: number;
  /** 实例状态信息 */
  HealthyMessage?: string;
  /** 实例创建时间 */
  CreateTime?: number;
  /** 实例过期时间 */
  ExpireTime?: number;
  /** 是否为内部客户。值为1 表示内部客户 */
  IsInternal?: number;
  /** Topic个数 */
  TopicNum?: number;
  /** 标识tag */
  Tags?: Tag[];
  /** kafka版本信息 */
  Version?: string | null;
  /** 跨可用区 */
  ZoneIds?: number[] | null;
  /** ckafka售卖类型 */
  Cvm?: number | null;
  /** ckafka集群实例类型 */
  InstanceType?: string | null;
  /** ckafka集群实例磁盘类型 */
  DiskType?: string | null;
  /** 当前规格最大Topic数 */
  MaxTopicNumber?: number | null;
  /** 当前规格最大Partition数 */
  MaxPartitionNumber?: number | null;
  /** 计划升级配置时间 */
  RebalanceTime?: string | null;
  /** 实例当前partition数量 */
  PartitionNumber?: number | null;
  /** ckafka集群实例公网带宽类型 */
  PublicNetworkChargeType?: string | null;
  /** 公网带宽 最小3Mbps 最大999Mbps 仅专业版支持填写 */
  PublicNetwork?: number | null;
  /** ckafka集群实例底层集群类型 */
  ClusterType?: string | null;
  /** 实例功能列表 */
  Features?: string[] | null;
}

/** 实例 / topic 维度限流策略 */
declare interface InstanceQuotaConfigResp {
  /** 生产限流大小，单位 MB/s */
  QuotaProducerByteRate: number | null;
  /** 消费限流大小，单位 MB/s */
  QuotaConsumerByteRate: number | null;
}

/** 数据处理——Value处理参数——Jsonpath替换参数 */
declare interface JsonPathReplaceParam {
  /** 被替换值，Jsonpath表达式 */
  OldValue: string;
  /** 替换值，Jsonpath表达式或字符串 */
  NewValue: string;
}

/** key-value二次解析 */
declare interface KVParam {
  /** 分隔符 */
  Delimiter: string;
  /** key-value二次解析分隔符 */
  Regex: string;
  /** 保留源Key，默认为false不保留 */
  KeepOriginalKey?: string | null;
}

/** Kafka连接源参数 */
declare interface KafkaConnectParam {
  /** Kafka连接源的实例资源, 非自建时必填，NetworkType=VPC时传clb实例id */
  Resource?: string | null;
  /** 是否为自建集群 */
  SelfBuilt?: boolean | null;
  /** 是否更新到关联的Dip任务 */
  IsUpdate?: boolean | null;
  /** Kafka连接的broker地址, NetworkType=PUBLIC公网时必填 */
  BrokerAddress?: string | null;
  /** CKafka连接源的实例资源地域, 跨地域时必填 */
  Region?: string | null;
}

/** Ckafka配置 */
declare interface KafkaParam {
  /** 是否为自建集群 */
  SelfBuilt: boolean;
  /** ckafka集群实例Id */
  Resource: string;
  /** 主题名，多个以“,”分隔 */
  Topic?: string;
  /** Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp */
  OffsetType?: string | null;
  /** Offset类型为timestamp时必传，传时间戳，精确到秒 */
  StartTime?: number | null;
  /** 实例资源名称 */
  ResourceName?: string | null;
  /** 可用区 */
  ZoneId?: number | null;
  /** 主题Id */
  TopicId?: string | null;
  /** Topic的分区数 */
  PartitionNum?: number | null;
  /** 启用容错实例/开启死信队列 */
  EnableToleration?: boolean | null;
  /** Qps 限制 */
  QpsLimit?: number | null;
  /** Table到Topic的路由，「分发到多个topic」开关打开时必传 */
  TableMappings?: TableMapping[] | null;
  /** 「分发到多个topic」开关，默认为false */
  UseTableMapping?: boolean | null;
  /** 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务，如果不使用分发到多个topic，需要在Topic字段填写需要自动创建的topic名） */
  UseAutoCreateTopic?: boolean | null;
  /** 写入Topic时是否进行压缩，不开启填"none"，开启的话，填写"open"。 */
  CompressionType?: string | null;
  /** 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用) */
  MsgMultiple?: number | null;
  /** 数据同步专用参数, 正常数据处理可为空, 实例级别同步: 仅同步元数据填写"META_SYNC_INSTANCE_TYPE", 同步元数据及全部topic内消息的填写"META_AND_DATA_SYNC_INSTANCE_TYPE"; topic级别同步: 选中的源和目标topic中的消息(需要目标实例也包含该topic)填写"DATA_SYNC_TYPE" */
  ConnectorSyncType?: string | null;
  /** 数据同步专用参数, 当通过时,希望下游的消息写入分区与上游的一致,则填true,但下游分区小于上游时,会报错; 不需要一致则为false, 默认为false */
  KeepPartition?: boolean | null;
  /** 正则匹配Topic列表 */
  TopicRegularExpression?: string | null;
}

/** 小写字符解析 */
declare interface LowercaseParam {
}

/** Map参数 */
declare interface MapParam {
  /** key值 */
  Key: string;
  /** 类型，DEFAULT默认，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射 */
  Type?: string;
  /** 值 */
  Value?: string;
}

/** MariaDB连接源参数 */
declare interface MariaDBConnectParam {
  /** MariaDB的连接port */
  Port: number | null;
  /** MariaDB连接源的用户名 */
  UserName: string | null;
  /** MariaDB连接源的密码 */
  Password: string | null;
  /** MariaDB连接源的实例资源 */
  Resource: string | null;
  /** MariaDB连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** MariaDB连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** MariaDB连接源参数 */
declare interface MariaDBModifyConnectParam {
  /** MariaDB连接源的实例资源【不支持修改】 */
  Resource: string | null;
  /** MariaDB的连接port【不支持修改】 */
  Port?: number | null;
  /** MariaDB连接源的实例vip【不支持修改】 */
  ServiceVip?: string | null;
  /** MariaDB连接源的vpcId【不支持修改】 */
  UniqVpcId?: string | null;
  /** MariaDB连接源的用户名 */
  UserName?: string | null;
  /** MariaDB连接源的密码 */
  Password?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** MariaDB类型入参 */
declare interface MariaDBParam {
  /** MariaDB的数据库名称，"*"为全数据库 */
  Database: string | null;
  /** MariaDB的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写 */
  Table: string | null;
  /** 该MariaDB在连接管理内的Id */
  Resource: string | null;
  /** 复制存量信息(schema_only不复制, initial全量)，默认值initial */
  SnapshotMode?: string | null;
  /** 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键 */
  KeyColumns?: string | null;
  /** 当Table输入的是前缀时，该项值为true，否则为false */
  IsTablePrefix?: boolean | null;
  /** 输出格式，DEFAULT、CANAL_1、CANAL_2 */
  OutputFormat?: string | null;
  /** 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic */
  IncludeContentChanges?: string | null;
  /** 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句 */
  IncludeQuery?: boolean | null;
  /** 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带 */
  RecordWithSchema?: boolean | null;
}

/** 修改实例属性的配置对象 */
declare interface ModifyInstanceAttributesConfig {
  /** 自动创建 true 表示开启，false 表示不开启 */
  AutoCreateTopicEnable?: boolean;
  /** 可选，如果auto.create.topic.enable设置为true没有设置该值时，默认设置为3 */
  DefaultNumPartitions?: number;
  /** 如果auto.create.topic.enable设置为true没有指定该值时默认设置为2 */
  DefaultReplicationFactor?: number;
}

/** MongoDB连接源参数 */
declare interface MongoDBConnectParam {
  /** MongoDB的连接port */
  Port: number | null;
  /** MongoDB连接源的用户名 */
  UserName: string | null;
  /** MongoDB连接源的密码 */
  Password: string | null;
  /** MongoDB连接源的实例资源 */
  Resource: string | null;
  /** MongoDB连接源是否为自建集群 */
  SelfBuilt: boolean | null;
  /** MongoDB连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** MongoDB连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** MongoDB修改连接源参数 */
declare interface MongoDBModifyConnectParam {
  /** MongoDB连接源的实例资源【不支持修改】 */
  Resource: string | null;
  /** MongoDB的连接port【不支持修改】 */
  Port?: number | null;
  /** MongoDB连接源的实例vip【不支持修改】 */
  ServiceVip?: string | null;
  /** MongoDB连接源的vpcId【不支持修改】 */
  UniqVpcId?: string | null;
  /** MongoDB连接源的用户名 */
  UserName?: string | null;
  /** MongoDB连接源的密码 */
  Password?: string | null;
  /** MongoDB连接源是否为自建集群【不支持修改】 */
  SelfBuilt?: boolean | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
}

/** MongoDB类型入参 */
declare interface MongoDBParam {
  /** MongoDB的数据库名称 */
  Database: string | null;
  /** MongoDB的集群 */
  Collection: string | null;
  /** 是否复制存量数据，默认传参true */
  CopyExisting: boolean | null;
  /** 实例资源 */
  Resource: string | null;
  /** MongoDB的连接ip */
  Ip?: string | null;
  /** MongoDB的连接port */
  Port?: number | null;
  /** MongoDB数据库用户名 */
  UserName?: string | null;
  /** MongoDB数据库密码 */
  Password?: string | null;
  /** 监听事件类型，为空时表示全选。取值包括insert,update,replace,delete,invalidate,drop,dropdatabase,rename，多个类型间使用,逗号分隔 */
  ListeningEvent?: string | null;
  /** 主从优先级，默认主节点 */
  ReadPreference?: string | null;
  /** 聚合管道 */
  Pipeline?: string | null;
  /** 是否为自建集群 */
  SelfBuilt?: boolean | null;
}

/** MQTT连接源参数 */
declare interface MqttConnectParam {
  /** MQTT连接源的用户名 */
  UserName: string | null;
  /** MQTT连接源的密码 */
  Password: string | null;
  /** MQTT连接源的实例资源 */
  Resource: string | null;
  /** MQTT Instance vpc-id */
  UniqVpcId: string | null;
  /** 是否为自建集群 */
  SelfBuilt?: boolean | null;
  /** 是否更新到关联的Dip任务 */
  IsUpdate?: boolean | null;
  /** MQTT连接源的实例资源地域, 跨地域时必填 */
  Region?: string | null;
}

/** 创建MQTT 为Source的Data Hub Task参数 */
declare interface MqttParam {
  /** 需要同步的MQTT Topic列表, CSV格式 */
  Topics: string | null;
  /** MQTT clean-session */
  CleanSession: boolean | null;
  /** MQTT instance-id */
  Resource?: string | null;
  /** MQTT实例VIP */
  Ip?: string | null;
  /** MQTT VIP 端口 */
  Port?: number | null;
  /** MQTT实例用户名 */
  UserName?: string | null;
  /** MQTT实例内账户密码 */
  Password?: string | null;
  /** QoS */
  Qos?: number | null;
  /** tasks.max 订阅Topic的并发Task个数, 默认为1; 当设置大于1时, 使用Shared Subscription */
  MaxTasks?: number | null;
  /** MQTT 实例的Service VIP */
  ServiceVip?: string | null;
  /** MQTT实例的VPC ID */
  UniqVpcId?: string | null;
  /** 是否为自建集群, MQTT只支持非自建集群 */
  SelfBuilt?: boolean | null;
}

/** MySQL连接源参数 */
declare interface MySQLConnectParam {
  /** MySQL的连接port */
  Port: number | null;
  /** MySQL连接源的用户名 */
  UserName: string | null;
  /** MySQL连接源的密码 */
  Password: string | null;
  /** MySQL连接源的实例资源 */
  Resource: string | null;
  /** MySQL连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** MySQL连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
  /** 当type为TDSQL_C_MYSQL时，必填 */
  ClusterId?: string | null;
  /** Mysql 连接源是否为自建集群 */
  SelfBuilt?: boolean | null;
}

/** MySQL修改连接源参数 */
declare interface MySQLModifyConnectParam {
  /** MySQL连接源的实例资源【不支持修改】 */
  Resource: string | null;
  /** MySQL的连接port【不支持修改】 */
  Port?: number | null;
  /** MySQL连接源的实例vip【不支持修改】 */
  ServiceVip?: string | null;
  /** MySQL连接源的vpcId【不支持修改】 */
  UniqVpcId?: string | null;
  /** MySQL连接源的用户名 */
  UserName?: string | null;
  /** MySQL连接源的密码 */
  Password?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
  /** 当type为TDSQL_C_MYSQL时 */
  ClusterId?: string | null;
  /** 是否是自建的集群 */
  SelfBuilt?: boolean | null;
}

/** MySQL类型入参 */
declare interface MySQLParam {
  /** MySQL的数据库名称，"*"为全数据库 */
  Database: string | null;
  /** MySQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"数据库名\\.数据表名" */
  Table: string | null;
  /** 该MySQL在连接管理内的Id */
  Resource: string | null;
  /** 复制存量信息(schema_only不复制, initial全量)，默认值initial */
  SnapshotMode?: string | null;
  /** 存放MySQL的Ddl信息的Topic，为空则默认不存放 */
  DdlTopic?: string | null;
  /** "TABLE" 表示读取项为 table，"QUERY" 表示读取项为 query */
  DataSourceMonitorMode?: string | null;
  /** 当 "DataMonitorMode"="TABLE" 时，传入需要读取的 Table；当 "DataMonitorMode"="QUERY" 时，传入需要读取的查询 sql 语句 */
  DataSourceMonitorResource?: string | null;
  /** "TIMESTAMP" 表示增量列为时间戳类型，"INCREMENT" 表示增量列为自增 id 类型 */
  DataSourceIncrementMode?: string | null;
  /** 传入需要监听的列名称 */
  DataSourceIncrementColumn?: string | null;
  /** "HEAD" 表示复制存量 + 增量数据，"TAIL" 表示只复制增量数据 */
  DataSourceStartFrom?: string | null;
  /** "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入 */
  DataTargetInsertMode?: string | null;
  /** 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键 */
  DataTargetPrimaryKeyField?: string | null;
  /** 表与消息间的映射关系 */
  DataTargetRecordMapping?: RecordMapping[] | null;
  /** 事件路由到特定主题的正则表达式，默认为(.*) */
  TopicRegex?: string | null;
  /** TopicRegex的引用组，指定$1、$2等 */
  TopicReplacement?: string | null;
  /** 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键 */
  KeyColumns?: string | null;
  /** Mysql 是否抛弃解析失败的消息，默认为true */
  DropInvalidMessage?: boolean | null;
  /** 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效 */
  DropCls?: DropCls | null;
  /** 输出格式，DEFAULT、CANAL_1、CANAL_2 */
  OutputFormat?: string | null;
  /** 当Table输入的是前缀时，该项值为true，否则为false */
  IsTablePrefix?: boolean | null;
  /** 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic */
  IncludeContentChanges?: string | null;
  /** 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句 */
  IncludeQuery?: boolean | null;
  /** 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带 */
  RecordWithSchema?: boolean | null;
  /** 存放信令表的数据库名称 */
  SignalDatabase?: string | null;
  /** 输入的table是否为正则表达式，如果该选项以及IsTablePrefix同时为true，该选项的判断优先级高于IsTablePrefix */
  IsTableRegular?: boolean | null;
  /** 信号表 */
  SignalTable?: string | null;
  /** datetime 类型字段转换为时间戳的时区 */
  DateTimeZone?: string | null;
  /** 自建 */
  SelfBuilt?: boolean | null;
}

/** 操作类型返回的Data结构 */
declare interface OperateResponseData {
  /** 流程Id */
  FlowId?: number | null;
  /** RouteIdDto */
  RouteDTO?: RouteDTO | null;
}

/** 分区实体 */
declare interface Partition {
  /** 分区ID */
  PartitionId?: number;
}

/** 分区和位移 */
declare interface PartitionOffset {
  /** 分区 */
  Partition?: string | null;
  /** 位点偏移量 */
  Offset?: number | null;
}

/** partition信息 */
declare interface Partitions {
  /** 分区 */
  Partition: number;
  /** partition 消费位移 */
  Offset: number;
}

/** PostgreSQL连接源参数 */
declare interface PostgreSQLConnectParam {
  /** PostgreSQL的连接port */
  Port: number | null;
  /** PostgreSQL连接源的用户名 */
  UserName: string | null;
  /** PostgreSQL连接源的密码 */
  Password: string | null;
  /** PostgreSQL连接源的实例资源 */
  Resource: string | null;
  /** PostgreSQL连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** PostgreSQL连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 当type为TDSQL_C_POSTGRESQL时，必填 */
  ClusterId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
  /** PostgreSQL连接源是否为自建集群 */
  SelfBuilt?: boolean | null;
}

/** PostgreSQL修改连接源参数 */
declare interface PostgreSQLModifyConnectParam {
  /** PostgreSQL连接源的实例资源【不支持修改】 */
  Resource: string | null;
  /** PostgreSQL的连接port【不支持修改】 */
  Port?: number | null;
  /** PostgreSQL连接源的实例vip【不支持修改】 */
  ServiceVip?: string | null;
  /** PostgreSQL连接源的vpcId【不支持修改】 */
  UniqVpcId?: string | null;
  /** PostgreSQL连接源的用户名 */
  UserName?: string | null;
  /** PostgreSQL连接源的密码 */
  Password?: string | null;
  /** 当type为TDSQL_C_POSTGRESQL时，该参数才有值【不支持修改】 */
  ClusterId?: string | null;
  /** 是否更新到关联的Datahub任务 */
  IsUpdate?: boolean | null;
  /** 是否为自建集群 */
  SelfBuilt?: boolean | null;
}

/** PostgreSQL类型入参 */
declare interface PostgreSQLParam {
  /** PostgreSQL的数据库名称 */
  Database: string | null;
  /** PostgreSQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"Schema名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"Schema名\\.数据表名" */
  Table: string | null;
  /** 该PostgreSQL在连接管理内的Id */
  Resource: string | null;
  /** 插件名(decoderbufs/pgoutput)，默认为decoderbufs */
  PluginName: string | null;
  /** 复制存量信息(never增量, initial全量)，默认为initial */
  SnapshotMode?: string | null;
  /** 上游数据格式(JSON/Debezium), 当数据库同步模式为默认字段匹配时,必填 */
  DataFormat?: string | null;
  /** "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入 */
  DataTargetInsertMode?: string | null;
  /** 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键 */
  DataTargetPrimaryKeyField?: string | null;
  /** 表与消息间的映射关系 */
  DataTargetRecordMapping?: RecordMapping[] | null;
  /** 是否抛弃解析失败的消息，默认为true */
  DropInvalidMessage?: boolean | null;
  /** 输入的table是否为正则表达式 */
  IsTableRegular?: boolean | null;
  /** 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键 */
  KeyColumns?: string | null;
  /** 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带 */
  RecordWithSchema?: boolean | null;
}

/** 消息价格实体 */
declare interface Price {
  /** 折扣价 */
  RealTotalCost?: number;
  /** 原价 */
  TotalCost?: number;
}

/** 建立私有连接的参数 */
declare interface PrivateLinkParam {
  /** 客户实例的vip */
  ServiceVip: string;
  /** 客户实例的vpcId */
  UniqVpcId: string;
}

/** 普罗米修斯打通的vipVport */
declare interface PrometheusDTO {
  /** export类型（jmx_export\node_export） */
  Type?: string;
  /** vip */
  SourceIp?: string;
  /** vport */
  SourcePort?: number;
  /** broker地址 */
  BrokerIp?: string | null;
  /** VPC ID信息 */
  VpcId?: string | null;
  /** 子网ID信息 */
  SubnetId?: string | null;
}

/** Prometheus 监控返回 */
declare interface PrometheusResult {
  /** 返回的code，0为正常，非0为错误 */
  ReturnCode?: string;
  /** 成功消息 */
  ReturnMessage?: string;
  /** 操作型返回的Data数据,可能有flowId等 */
  Data?: OperateResponseData;
}

/** record 与数据库表的映射关系 */
declare interface RecordMapping {
  /** 消息的 key 名称 */
  JsonKey?: string | null;
  /** 消息类型 */
  Type?: string | null;
  /** 消息是否允许为空 */
  AllowNull?: boolean | null;
  /** 对应映射列名称 */
  ColumnName?: string | null;
  /** 数据库表额外字段 */
  ExtraInfo?: string | null;
  /** 当前列大小 */
  ColumnSize?: string | null;
  /** 当前列精度 */
  DecimalDigits?: string | null;
  /** 是否为自增列 */
  AutoIncrement?: boolean | null;
  /** 数据库表默认参数 */
  DefaultValue?: string | null;
}

/** 数据处理——Value处理参数——正则替换参数 */
declare interface RegexReplaceParam {
  /** 正则表达式 */
  Regex: string;
  /** 替换新值 */
  NewValue: string;
}

/** 地域实体对象 */
declare interface Region {
  /** 地域ID */
  RegionId?: number;
  /** 地域名称 */
  RegionName?: string;
  /** 区域名称 */
  AreaName?: string;
  /** 地域代码 */
  RegionCode?: string | null;
  /** 地域代码（V3版本） */
  RegionCodeV3?: string | null;
  /** NONE:默认值不支持任何特殊类型 实例类型 */
  Support?: string | null;
  /** 是否支持ipv6, 0：表示不支持，1：表示支持 */
  Ipv6?: number | null;
  /** 是否支持跨可用区, 0：表示不支持，1：表示支持 */
  MultiZone?: number | null;
}

/** RenewCkafkaInstance接口出参bigDealIds */
declare interface RenewCkafkaInstanceResp {
  /** 订单号 */
  BigDealId?: string | null;
  /** 子订单号 */
  DealName?: string | null;
}

/** 数据处理——Value处理参数——替换参数 */
declare interface ReplaceParam {
  /** 被替换值 */
  OldValue: string;
  /** 替换值 */
  NewValue: string;
}

/** 路由实体对象 */
declare interface Route {
  /** 实例接入方式0：PLAINTEXT (明文方式，没有带用户信息老版本及社区版本都支持)1：SASL_PLAINTEXT（明文方式，不过在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）2：SSL（SSL加密通信，没有带用户信息，老版本及社区版本都支持）3：SASL_SSL（SSL加密通信，在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持） */
  AccessType?: number;
  /** 路由Id */
  RouteId?: number;
  /** vip网络类型（1:外网TGW 2:基础网络 3:VPC网络 4:支撑网络(idc 环境) 5:SSL外网访问方式访问 6:黑石环境vpc 7:支撑网络(cvm 环境） */
  VipType?: number;
  /** 虚拟IP列表 */
  VipList?: VipEntity[];
  /** 域名 */
  Domain?: string | null;
  /** 域名port */
  DomainPort?: number | null;
  /** 时间戳 */
  DeleteTimestamp?: string | null;
  /** 子网Id */
  Subnet?: string | null;
  /** 虚拟IP列表(1对1 broker节点) */
  BrokerVipList?: VipEntity[] | null;
  /** 私有网络Id */
  VpcId?: string | null;
}

/** RouteDTO */
declare interface RouteDTO {
  /** 路由Id */
  RouteId?: number | null;
}

/** 数据处理ROW输出格式配置 */
declare interface RowParam {
  /** 行内容，KEY_VALUE，VALUE */
  RowContent: string;
  /** key和value间的分隔符 */
  KeyValueDelimiter?: string | null;
  /** 元素建的分隔符 */
  EntryDelimiter?: string | null;
}

/** 数据处理——数据处理参数 */
declare interface SMTParam {
  /** 数据处理KEY */
  Key: string;
  /** 操作，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射，JSONPATH */
  Operate: string;
  /** 数据类型，ORIGINAL原始，STRING，INT64，FLOAT64，BOOLEAN，MAP，ARRAY */
  SchemeType: string;
  /** 数据处理VALUE */
  Value?: string | null;
  /** VALUE处理 */
  ValueOperate?: ValueParam | null;
  /** 原始VALUE */
  OriginalValue?: string | null;
  /** VALUE处理链 */
  ValueOperates?: ValueParam[] | null;
}

/** SQLServer连接源参数 */
declare interface SQLServerConnectParam {
  /** SQLServer的连接port */
  Port: number | null;
  /** SQLServer连接源的用户名 */
  UserName: string | null;
  /** SQLServer连接源的密码 */
  Password: string | null;
  /** SQLServer连接源的实例资源 */
  Resource: string | null;
  /** SQLServer连接源的实例vip，当为腾讯云实例时，必填 */
  ServiceVip?: string | null;
  /** SQLServer连接源的vpcId，当为腾讯云实例时，必填 */
  UniqVpcId?: string | null;
  /** 是否更新到关联的Dip任务 */
  IsUpdate?: boolean | null;
}

/** SQLServer修改连接源参数 */
declare interface SQLServerModifyConnectParam {
  /** SQLServer连接源的实例资源【不支持修改】 */
  Resource: string | null;
  /** SQLServer的连接port【不支持修改】 */
  Port?: number | null;
  /** SQLServer连接源的实例vip【不支持修改】 */
  ServiceVip?: string | null;
  /** SQLServer连接源的vpcId【不支持修改】 */
  UniqVpcId?: string | null;
  /** SQLServer连接源的用户名 */
  UserName?: string | null;
  /** SQLServer连接源的密码 */
  Password?: string | null;
  /** 是否更新到关联的Dip任务 */
  IsUpdate?: boolean | null;
}

/** SQLServer类型入参 */
declare interface SQLServerParam {
  /** SQLServer的数据库名称 */
  Database: string | null;
  /** SQLServer的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写 */
  Table: string | null;
  /** 该SQLServer在连接管理内的Id */
  Resource: string | null;
  /** 复制存量信息(schema_only增量, initial全量)，默认为initial */
  SnapshotMode?: string | null;
}

/** 标准版销售信息 */
declare interface SaleInfo {
  /** 手动设置的flag标志 */
  Flag: boolean | null;
  /** ckakfa版本号(1.1.1/2.4.2/0.10.2) */
  Version: string | null;
  /** 专业版、标准版标志 */
  Platform: string | null;
  /** 售罄标志：true售罄 */
  SoldOut: boolean | null;
}

/** 实例缩容应答 */
declare interface ScalingDownResp {
  /** 订单号列表 */
  DealNames?: string[] | null;
}

/** Scf类型入参 */
declare interface ScfParam {
  /** SCF云函数函数名 */
  FunctionName: string | null;
  /** SCF云函数命名空间, 默认为default */
  Namespace?: string | null;
  /** SCF云函数版本及别名, 默认为$DEFAULT */
  Qualifier?: string | null;
  /** 每批最大发送消息数, 默认为1000 */
  BatchSize?: number | null;
  /** SCF调用失败后重试次数, 默认为5 */
  MaxRetries?: number | null;
}

/** 数据处理——二次解析参数 */
declare interface SecondaryAnalyseParam {
  /** 分隔符 */
  Regex: string;
}

/** 值支持一拆多，即将一个值拆为一个数组 */
declare interface SplitParam {
  /** 分隔符 */
  Regex: string;
}

/** 订阅信息实体 */
declare interface SubscribedInfo {
  /** 订阅的主题名 */
  TopicName?: string;
  /** 订阅的分区 */
  Partition?: number[] | null;
  /** 分区offset信息 */
  PartitionOffset?: PartitionOffset[] | null;
  /** 订阅的主题ID */
  TopicId?: string | null;
}

/** 数据处理——Value处理参数——截取参数 */
declare interface SubstrParam {
  /** 截取起始位置 */
  Start: number;
  /** 截取截止位置 */
  End: number;
}

/** Table、Topic路由 */
declare interface TableMapping {
  /** 库名 */
  Database: string;
  /** 表名，多个表,（逗号）隔开 */
  Table: string;
  /** Topic名称 */
  Topic: string;
  /** Topic ID */
  TopicId: string;
}

/** 实例详情中的标签对象 */
declare interface Tag {
  /** 标签的key */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

/** Tdw类型入参 */
declare interface TdwParam {
  /** Tdw的bid */
  Bid: string | null;
  /** Tdw的tid */
  Tid: string | null;
  /** 默认true */
  IsDomestic?: boolean | null;
  /** TDW地址，默认tl-tdbank-tdmanager.tencent-distribute.com */
  TdwHost?: string | null;
  /** TDW端口，默认8099 */
  TdwPort?: number | null;
}

/** 返回的topic对象 */
declare interface Topic {
  /** 主题的ID */
  TopicId?: string;
  /** 主题的名称 */
  TopicName?: string;
  /** 备注 */
  Note?: string | null;
}

/** 主题详情 */
declare interface TopicDetail {
  /** 主题名 */
  TopicName?: string;
  /** 主题Id */
  TopicId?: string;
  /** 分区数 */
  PartitionNum?: number;
  /** topic副本数 最小值 1,最大值 3 */
  ReplicaNum?: number;
  /** 备注 */
  Note?: string | null;
  /** 创建时间 */
  CreateTime?: number;
  /** 是否开启ip鉴权白名单，true表示开启，false表示不开启 */
  EnableWhiteList?: boolean;
  /** ip白名单中ip个数 */
  IpWhiteListCount?: number;
  /** 数据备份cos bucket: 转存到cos 的bucket地址 */
  ForwardCosBucket?: string | null;
  /** 数据备份cos 状态： 1 不开启数据备份，0 开启数据备份 */
  ForwardStatus?: number;
  /** 数据备份到cos的周期频率 */
  ForwardInterval?: number;
  /** 高级配置 */
  Config?: Config | null;
  /** 消息保留时间配置(用于动态配置变更记录) */
  RetentionTimeConfig?: TopicRetentionTimeConfigRsp | null;
  /** 0:正常，1：已删除，2：删除中 */
  Status?: number | null;
  /** 标签列表 */
  Tags?: Tag[] | null;
}

/** topic 流量排行 */
declare interface TopicFlowRanking {
  /** 主题Id */
  TopicId?: string;
  /** 主题名称 */
  TopicName?: string;
  /** 分区数 */
  PartitionNum?: number;
  /** 副本数 */
  ReplicaNum?: number;
  /** Topic 流量,单位MB(设置date时以sum方式聚合) */
  TopicTraffic?: string;
  /** Topic 消息堆积 */
  MessageHeap?: number;
}

/** topic 生产消息数据，消费者数据 */
declare interface TopicFlowRankingResult {
  /** Topic 流量数组 */
  TopicFlow?: TopicFlowRanking[];
  /** 消费者组消费速度排行速度 */
  ConsumeSpeed?: ConsumerGroupSpeed[];
  /** Topic 消息堆积/占用磁盘排行 */
  TopicMessageHeap?: TopicMessageHeapRanking[] | null;
  /** Broker Ip 列表 */
  BrokerIp?: string[] | null;
  /** 单个broker 节点 Topic占用的数据大小 */
  BrokerTopicData?: BrokerTopicData[] | null;
  /** 单个Broker 节点Topic 流量的大小(单位MB) */
  BrokerTopicFlowData?: BrokerTopicFlowData[];
}

/** topic副本及详细信息 */
declare interface TopicInSyncReplicaInfo {
  /** 分区名称 */
  Partition: string;
  /** Leader Id */
  Leader: number;
  /** 副本集 */
  Replica: string;
  /** ISR */
  InSyncReplica: string;
  /** 起始Offset */
  BeginOffset: number | null;
  /** 末端Offset */
  EndOffset: number | null;
  /** 消息数 */
  MessageCount: number | null;
  /** 未同步副本集 */
  OutOfSyncReplica: string | null;
}

/** Topic 副本及详情数据集合 */
declare interface TopicInSyncReplicaResult {
  /** Topic详情及副本合集 */
  TopicInSyncReplicaList?: TopicInSyncReplicaInfo[];
  /** 总计个数 */
  TotalCount?: number;
}

/** topic消息堆积、占用磁盘排行 */
declare interface TopicMessageHeapRanking {
  /** 主题ID */
  TopicId?: string | null;
  /** 主题名称 */
  TopicName?: string | null;
  /** 分区数 */
  PartitionNum?: number | null;
  /** 副本数 */
  ReplicaNum?: number | null;
  /** Topic 流量 */
  TopicTraffic?: string | null;
  /** topic消息堆积/占用磁盘 */
  MessageHeap?: number | null;
}

/** Topic配置 */
declare interface TopicParam {
  /** 单独售卖Topic的Topic名称 */
  Resource: string;
  /** Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp */
  OffsetType?: string | null;
  /** Offset类型为timestamp时必传，传时间戳，精确到秒 */
  StartTime?: number | null;
  /** Topic的TopicId【出参】 */
  TopicId?: string | null;
  /** 写入Topic时是否进行压缩，不开启填"none"，开启的话，可选择"gzip", "snappy", "lz4"中的一个进行填写。 */
  CompressionType?: string | null;
  /** 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务） */
  UseAutoCreateTopic?: boolean | null;
  /** 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用) */
  MsgMultiple?: number | null;
}

/** 分区详情 */
declare interface TopicPartitionDO {
  /** Partition 分区ID */
  Partition?: number;
  /** Leader 运行状态 */
  LeaderStatus?: number;
  /** ISR 个数 */
  IsrNum?: number;
  /** 副本个数 */
  ReplicaNum?: number;
}

/** 统一返回的TopicResponse */
declare interface TopicResult {
  /** 返回的主题信息列表 */
  TopicList?: Topic[] | null;
  /** 符合条件的 topic 数量 */
  TotalCount?: number | null;
}

/** Topic消息保留时间配置返回信息 */
declare interface TopicRetentionTimeConfigRsp {
  /** 期望值，即用户配置的Topic消息保留时间(单位分钟) */
  Expect?: number | null;
  /** 当前值，即当前生效值(可能存在动态调整，单位分钟) */
  Current?: number | null;
  /** 最近变更时间 */
  ModTimeStamp?: number | null;
}

/** DescribeTopicSubscribeGroup接口出参 */
declare interface TopicSubscribeGroup {
  /** 总数 */
  TotalCount?: number;
  /** 消费分组状态数量信息 */
  StatusCountInfo?: string;
  /** 消费分组信息 */
  GroupsInfo?: GroupInfoResponse[] | null;
  /** 此次请求是否异步的状态。实例里分组较少的会直接返回结果,Status为1。当分组较多时,会异步更新缓存，Status为0时不会返回分组信息，直至Status为1更新完毕返回结果。 */
  Status?: number | null;
}

/** 数据处理参数 */
declare interface TransformParam {
  /** 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取 */
  AnalysisFormat: string;
  /** 输出格式 */
  OutputFormat: string;
  /** 是否保留解析失败数据 */
  FailureParam: FailureParam;
  /** 原始数据 */
  Content: string;
  /** 数据来源，TOPIC从源topic拉取，CUSTOMIZE自定义 */
  SourceType: string;
  /** 分隔符、正则表达式 */
  Regex?: string;
  /** Map */
  MapParam?: MapParam[];
  /** 过滤器 */
  FilterParam?: FilterMapParam[];
  /** 测试结果 */
  Result?: string | null;
  /** 解析结果 */
  AnalyseResult?: MapParam[] | null;
  /** 底层引擎是否使用eb */
  UseEventBus?: boolean | null;
}

/** 数据处理参数 */
declare interface TransformsParam {
  /** 原始数据 */
  Content: string;
  /** 处理链 */
  FieldChain: FieldParam[];
  /** 过滤器 */
  FilterParam?: FilterMapParam[] | null;
  /** 失败处理 */
  FailureParam?: FailureParam | null;
  /** 测试结果 */
  Result?: string | null;
  /** 数据来源 */
  SourceType?: string | null;
  /** 输出格式，JSON，ROW，默认为JSON */
  OutputFormat?: string | null;
  /** 输出格式为ROW必填 */
  RowParam?: RowParam | null;
  /** 是否保留数据源Topic元数据信息（源Topic、Partition、Offset），默认为false */
  KeepMetadata?: boolean | null;
  /** 数组解析 */
  BatchAnalyse?: BatchAnalyseParam | null;
}

/** Url解析 */
declare interface UrlDecodeParam {
  /** 编码 */
  CharsetName?: string | null;
}

/** 用户实体 */
declare interface User {
  /** 用户id */
  UserId?: number;
  /** 用户名称 */
  Name?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后更新时间 */
  UpdateTime?: string;
}

/** 数据处理——Value处理参数 */
declare interface ValueParam {
  /** 处理模式，REPLACE替换，SUBSTR截取，DATE日期转换，TRIM去除前后空格，REGEX_REPLACE正则替换，URL_DECODE，LOWERCASE转换为小写 */
  Type: string;
  /** 替换，TYPE=REPLACE时必传 */
  Replace?: ReplaceParam | null;
  /** 截取，TYPE=SUBSTR时必传 */
  Substr?: SubstrParam | null;
  /** 时间转换，TYPE=DATE时必传 */
  Date?: DateParam | null;
  /** 正则替换，TYPE=REGEX_REPLACE时必传 */
  RegexReplace?: RegexReplaceParam | null;
  /** 值支持一拆多，TYPE=SPLIT时必传 */
  Split?: SplitParam | null;
  /** key-value二次解析，TYPE=KV时必传 */
  KV?: KVParam | null;
  /** 处理结果 */
  Result?: string | null;
  /** JsonPath替换，TYPE=JSON_PATH_REPLACE时必传 */
  JsonPathReplace?: JsonPathReplaceParam | null;
  /** Url解析 */
  UrlDecode?: UrlDecodeParam | null;
  /** 小写字符解析 */
  Lowercase?: LowercaseParam | null;
}

/** 虚拟IP实体 */
declare interface VipEntity {
  /** 虚拟IP */
  Vip?: string;
  /** 虚拟端口 */
  Vport?: string;
}

/** zone信息实体 */
declare interface ZoneInfo {
  /** 可用区 */
  ZoneId?: string;
  /** 是否内部APP */
  IsInternalApp?: number;
  /** 应用标识 */
  AppId?: number;
  /** 标识 */
  Flag?: boolean;
  /** 可用区名称 */
  ZoneName?: string;
  /** 可用区状态 */
  ZoneStatus?: number;
  /** 额外标识 */
  Exflag?: string;
  /** true为售罄，false为未售罄 */
  SoldOut?: string;
  /** 标准版售罄信息 */
  SalesInfo?: SaleInfo[] | null;
  /** 额外标识 */
  ExtraFlag?: string;
}

declare interface AclResponse {
  /** 符合条件的总数据条数 */
  TotalCount?: number;
  /** ACL列表 */
  AclList?: Acl[] | null;
}

declare interface AppIdResponse {
  /** 符合要求的所有AppId数量 */
  TotalCount?: number;
  /** 符合要求的App Id列表 */
  AppIdList?: number[] | null;
}

declare interface AuthorizeTokenRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 用户 */
  User: string;
  /** token串 */
  Tokens: string;
}

declare interface AuthorizeTokenResponse {
  /** 0 成功 */
  Result?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchCreateAclRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** Acl资源类型，(2:TOPIC） */
  ResourceType: number;
  /** 资源列表数组 */
  ResourceNames: string[];
  /** 设置的ACL规则列表 */
  RuleList: AclRuleInfo[];
}

declare interface BatchCreateAclResponse {
  /** 状态码：0-修改成功，否则修改失败 */
  Result?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchModifyGroupOffsetsRequest {
  /** 消费分组名称 */
  GroupName: string;
  /** ckafka集群实例Id */
  InstanceId: string;
  /** partition信息 */
  Partitions: Partitions[];
  /** 指定topic，默认所有topic */
  TopicName?: string[];
}

declare interface BatchModifyGroupOffsetsResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchModifyTopicAttributesRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题属性列表 (同一个批次最多支持10个) */
  Topic: BatchModifyTopicInfo[];
}

declare interface BatchModifyTopicAttributesResponse {
  /** 返回结果 */
  Result?: BatchModifyTopicResultDTO[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelAuthorizationTokenRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 用户 */
  User: string;
  /** token串 */
  Tokens: string;
}

declare interface CancelAuthorizationTokenResponse {
  /** 0 成功 非0 失败 */
  Result?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CdcClusterResponse {
  /** 任务ID */
  TaskId?: number | null;
}

declare interface CheckCdcClusterRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface CheckCdcClusterResponse {
  /** 返回结果状态Success */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConsumerGroupResponse {
  /** 符合条件的消费组数量 */
  TotalCount?: number;
  /** 主题列表 */
  TopicList?: ConsumerGroupTopic[] | null;
  /** 消费分组List */
  GroupList?: ConsumerGroup[] | null;
  /** 所有分区数量 */
  TotalPartition?: number | null;
  /** 监控的分区列表 */
  PartitionListForMonitor?: Partition[] | null;
  /** 主题总数 */
  TotalTopic?: number | null;
  /** 监控的主题列表 */
  TopicListForMonitor?: ConsumerGroupTopic[] | null;
  /** 监控的组列表 */
  GroupListForMonitor?: Group[] | null;
}

declare interface CreateAclRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER) */
  ResourceType: number;
  /** Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE) */
  Operation: number;
  /** 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用 */
  PermissionType: number;
  /** 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。 */
  ResourceName?: string;
  /** 默认为*，表示任何host都可以访问。支持填写IP或网段，支持“;”分隔。 */
  Host?: string;
  /** 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入时需要加 User: 前缀,如用户A则传入User:A。 */
  Principal?: string;
  /** 资源名称列表,Json字符串格式。ResourceName和resourceNameList只能指定其中一个。 */
  ResourceNameList?: string;
}

declare interface CreateAclResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAclRuleRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** Acl资源类型,目前只支持Topic,枚举值列表：Topic */
  ResourceType: string;
  /** ACL规则匹配类型，目前支持前缀匹配与预设策略，枚举值列表：PREFIXED/PRESET */
  PatternType: string;
  /** 规则名称 */
  RuleName: string;
  /** 设置的ACL规则列表 */
  RuleList: AclRuleInfo[];
  /** 表示前缀匹配的前缀的值 */
  Pattern?: string;
  /** 预设ACL规则是否应用到新增的topic中 */
  IsApplied?: number;
  /** ACL规则的备注 */
  Comment?: string;
}

declare interface CreateAclRuleResponse {
  /** 规则的唯一表示Key */
  Result?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCdcClusterRequest {
  /** cdc的id */
  CdcId: string;
  /** vpcId,一个地域只有唯一一个vpcid用于CDC */
  CdcVpcId: string;
  /** 每个CDC集群有唯一一个子网ID */
  CdcSubnetId: string;
  /** 所在可用区ID */
  ZoneId: number;
  /** 实例带宽,单位MB/s; 最小值:20MB/s, 高级版最大值:360MB/s,专业版最大值:100000MB/s 标准版固定带宽规格: 40MB/s, 100MB/s, 150MB/s */
  Bandwidth: number;
  /** cdc集群的总磁盘 */
  DiskSize: number;
  /** ckafka集群实例磁盘类型 */
  DiskType: string;
  /** 系统盘类型 */
  SystemDiskType: string;
}

declare interface CreateCdcClusterResponse {
  /** 无 */
  Result?: CdcClusterResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConnectResourceRequest {
  /** 连接源名称 */
  ResourceName: string;
  /** 连接源类型 */
  Type: string;
  /** 连接源描述 */
  Description?: string;
  /** Dts配置，Type为DTS时必填 */
  DtsConnectParam?: DtsConnectParam;
  /** MongoDB配置，Type为MONGODB时必填 */
  MongoDBConnectParam?: MongoDBConnectParam;
  /** Es配置，Type为ES时必填 */
  EsConnectParam?: EsConnectParam;
  /** ClickHouse配置，Type为CLICKHOUSE时必填 */
  ClickHouseConnectParam?: ClickHouseConnectParam;
  /** MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填 */
  MySQLConnectParam?: MySQLConnectParam;
  /** PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填 */
  PostgreSQLConnectParam?: PostgreSQLConnectParam;
  /** MariaDB配置，Type为MARIADB时必填 */
  MariaDBConnectParam?: MariaDBConnectParam;
  /** SQLServer配置，Type为SQLSERVER时必填 */
  SQLServerConnectParam?: SQLServerConnectParam;
  /** Doris 配置，Type为 DORIS 时必填 */
  DorisConnectParam?: DorisConnectParam;
  /** Kafka配置，Type为 KAFKA 时必填 */
  KafkaConnectParam?: KafkaConnectParam;
  /** MQTT配置，Type为 MQTT 时必填 */
  MqttConnectParam?: MqttConnectParam;
}

declare interface CreateConnectResourceResponse {
  /** 连接源的Id */
  Result?: ConnectResourceResourceIdResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsumerRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 消费分组名称 */
  GroupName: string;
  /** 主题名，TopicName、TopicNameList 需要显示指定一个存在的主题名 */
  TopicName?: string;
  /** 主题名列表 */
  TopicNameList?: string[];
}

declare interface CreateConsumerResponse {
  /** 创建消费者组返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDatahubTaskRequest {
  /** 任务名称 */
  TaskName: string;
  /** 任务类型，SOURCE数据接入，SINK数据流出 */
  TaskType: string;
  /** 数据源 */
  SourceResource?: DatahubResource;
  /** 数据目标 */
  TargetResource?: DatahubResource;
  /** 数据处理规则 */
  TransformParam?: TransformParam;
  /** 实例连接参数【已废弃】 */
  PrivateLinkParam?: PrivateLinkParam;
  /** 选择所要绑定的SchemaId */
  SchemaId?: string;
  /** 数据处理规则 */
  TransformsParam?: TransformsParam;
  /** 任务Id */
  TaskId?: string;
  /** 标签列表 */
  Tags?: Tag[];
}

declare interface CreateDatahubTaskResponse {
  /** 返回结果 */
  Result?: CreateDatahubTaskRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDatahubTopicRequest {
  /** 名称，是一个不超过 128 个字符的字符串，必须以“AppId-”为首字符，剩余部分可以包含字母、数字和横划线(-) */
  Name: string;
  /** Partition个数，大于0 */
  PartitionNum: number;
  /** 消息保留时间，单位ms，当前最小值为60000ms */
  RetentionMs: number;
  /** 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-) */
  Note?: string;
  /** 标签列表 */
  Tags?: Tag[];
}

declare interface CreateDatahubTopicResponse {
  /** 返回创建结果 */
  Result?: DatahubTopicResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstancePostRequest {
  /** ckafka集群实例Name，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-) */
  InstanceName: string;
  /** 私有网络Id 创建的实例默认接入点所在的 vpc 对应 vpcId。目前不支持创建基础网络实例，因此该参数必填 */
  VpcId: string;
  /** 子网id。创建实例默认接入点所在的子网对应的子网 id */
  SubnetId: string;
  /** 实例内网峰值带宽。单位 MB/s。标准版需传入当前实例规格所对应的峰值带宽。注意如果创建的实例为专业版实例，峰值带宽，分区数等参数配置需要满足专业版的计费规格。 */
  BandWidth: number;
  /** 国际站标准版实例规格。目前只有国际站标准版使用当前字段区分规格，国内站标准版使用峰值带宽区分规格。除了国际站标准版外的所有实例填写 1 即可。国际站标准版实例：入门型(general)]填写1；[标准型(standard)]填写2；[进阶型(advanced)]填写3；[容量型(capacity)]填写4；[高阶型1(specialized-1)]填写5；[高阶型2(specialized-2)]填写6；[高阶型3(specialized-3)]填写7；[高阶型4(specialized-4)]填写8。 */
  InstanceType?: number;
  /** 实例日志的默认最长保留时间，单位分钟。不传入该参数时默认为 1440 分钟（1天），最大30天。当 topic 显式设置消息保留时间时，以 topic 保留时间为准 */
  MsgRetentionTime?: number;
  /** 创建实例时可以选择集群Id, 该入参表示集群Id。不指定实例所在集群则不传入该参数 */
  ClusterId?: number;
  /** 实例版本。目前支持 "0.10.2","1.1.1","2.4.1","2.4.2","2.8.1"。"2.4.1" 与 "2.4.2" 属于同一个版本，传任意一个均可。 */
  KafkaVersion?: string;
  /** 实例类型。"standard"：标准版，"profession"：专业版 */
  SpecificationsType?: string;
  /** 专业版实例磁盘类型，标准版实例不需要填写。"CLOUD_SSD"：SSD云硬盘；"CLOUD_BASIC"：高性能云硬盘。不传默认值为 "CLOUD_BASIC" */
  DiskType?: string;
  /** 实例硬盘大小，需要满足当前实例的计费规格 */
  DiskSize?: number;
  /** 实例最大分区数量，需要满足当前实例的计费规格 */
  Partition?: number;
  /** 实例最大 topic 数量，需要满足当前实例的计费规格 */
  TopicNum?: number;
  /** 实例所在的可用区。当创建多可用区实例时，该参数为创建的默认接入点所在子网的可用区 id */
  ZoneId?: number;
  /** 当前实例是否为多可用区实例。 */
  MultiZoneFlag?: boolean;
  /** 当实例为多可用区实例时，多可用区 id 列表。注意参数 ZoneId 对应的多可用区需要包含在该参数数组中 */
  ZoneIds?: number[];
  /** 购买实例数量。非必填，默认值为 1。当传入该参数时，会创建多个 instanceName 加后缀区分的实例 */
  InstanceNum?: number;
  /** 公网带宽大小，单位 Mbps。默认是没有加上免费 3Mbps 带宽。例如总共需要 3Mbps 公网带宽，此处传 0；总共需要 6Mbps 公网带宽，此处传 3。需要保证传入参数为 3 的整数倍 */
  PublicNetworkMonthly?: number;
  /** 标签 */
  Tags?: Tag[];
  /** 弹性带宽开关 0不开启 1开启（0默认） */
  ElasticBandwidthSwitch?: number;
}

declare interface CreateInstancePostResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstancePreRequest {
  /** ckafka集群实例Name，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-) */
  InstanceName: string;
  /** 可用区。当购买多可用区实例时，当前参数为主可用区。需要保证传入的参数和 SubnetId 所在子网属于同一个可用区 */
  ZoneId: number;
  /** 预付费购买时长，例如 "1m",就是一个月 */
  Period: string;
  /** 国际站标准版实例规格。目前只有国际站标准版使用当前字段区分规格，国内站标准版使用峰值带宽区分规格。除了国际站标准版外的所有实例填写 1 即可。国际站标准版实例：入门型(general)]填写1；[标准型(standard)]填写2；[进阶型(advanced)]填写3；[容量型(capacity)]填写4；[高阶型1(specialized-1)]填写5；[高阶型2(specialized-2)]填写6；[高阶型3(specialized-3)]填写7；[高阶型4(specialized-4)]填写8。 */
  InstanceType: number;
  /** 私有网络Id，必填 */
  VpcId?: string;
  /** 子网id，必填 */
  SubnetId?: string;
  /** 可选。实例日志的最长保留时间，单位分钟，默认为10080（7天），最大30天，不填默认0，代表不开启日志保留时间回收策略 */
  MsgRetentionTime?: number;
  /** 创建实例时可以选择集群Id, 该入参表示集群Id */
  ClusterId?: number;
  /** 预付费自动续费标记，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  RenewFlag?: number;
  /** CKafka版本号[0.10.2、1.1.1、2.4.1、2.4.2、2.8.1、3.2.3], 默认是1.1.1。2.4.1 与 2.4.2 属于同一个版本，传任意一个均可。 */
  KafkaVersion?: string;
  /** 实例类型: [标准版实例]填写 "standard" (默认), [专业版实例]填写 "profession",[高级版实例]填写"premium" */
  SpecificationsType?: string;
  /** 磁盘大小，如果跟控制台规格配比不相符，则无法创建成功 */
  DiskSize?: number;
  /** 实例带宽,单位MB/s; 最小值:20MB/s, 高级版最大值:360MB/s,专业版最大值:100000MB/s 标准版固定带宽规格: 40MB/s, 100MB/s, 150MB/s */
  BandWidth?: number;
  /** 分区大小，如果跟控制台规格配比不相符，则无法创建成功 */
  Partition?: number;
  /** 标签 */
  Tags?: Tag[];
  /** 专业版/高级版实例磁盘类型，标准版实例不需要填写。"CLOUD_SSD"：SSD云硬盘；"CLOUD_BASIC"：高性能云硬盘。不传默认为 "CLOUD_BASIC" */
  DiskType?: string;
  /** 是否创建跨可用区实例，当前参数为 true 时，zoneIds必填 */
  MultiZoneFlag?: boolean;
  /** 可用区列表，购买多可用区实例时为必填项 */
  ZoneIds?: number[];
  /** 公网带宽大小，单位 Mbps。默认是没有加上免费 3Mbps 带宽。例如总共需要 3Mbps 公网带宽，此处传 0；总共需要 6Mbps 公网带宽，此处传 3。默认值为 0。需要保证传入参数为 3 的整数倍 */
  PublicNetworkMonthly?: number;
  /** 购买实例数量。非必填，默认值为 1。当传入该参数时，会创建多个 instanceName 加后缀区分的实例 */
  InstanceNum?: number;
  /** 是否自动选择代金券:1-是;0否。默认为0 */
  AutoVoucher?: number;
  /** 弹性带宽开关 0不开启 1开启（0默认） */
  ElasticBandwidthSwitch?: number;
}

declare interface CreateInstancePreResponse {
  /** 返回结果 */
  Result?: CreateInstancePreResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePartitionRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名称 */
  TopicName: string;
  /** 主题分区个数 */
  PartitionNum: number;
}

declare interface CreatePartitionResponse {
  /** 返回的结果集 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePostPaidInstanceRequest {
  /** ckafka集群实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-) */
  InstanceName?: string;
  /** 私有网络Id 创建的实例默认接入点所在的 vpc 对应 vpcId。目前不支持创建基础网络实例，因此该参数必填 */
  VpcId?: string;
  /** 子网id。创建实例默认接入点所在的子网对应的子网 id */
  SubnetId?: string;
  /** 国际站标准版实例规格。目前只有国际站标准版使用当前字段区分规格，国内站标准版使用峰值带宽区分规格。除了国际站标准版外的所有实例填写 1 即可。国际站标准版实例：入门型(general)]填写1；[标准型(standard)]填写2；[进阶型(advanced)]填写3；[容量型(capacity)]填写4；[高阶型1(specialized-1)]填写5；[高阶型2(specialized-2)]填写6；[高阶型3(specialized-3)]填写7；[高阶型4(specialized-4)]填写8。 */
  InstanceType?: number;
  /** 实例日志的默认最长保留时间，单位分钟。不传入该参数时默认为 1440 分钟（1天），最大30天。当 topic 显式设置消息保留时间时，以 topic 保留时间为准 */
  MsgRetentionTime?: number;
  /** 创建实例时可以选择集群Id, 该入参表示集群Id。不指定实例所在集群则不传入该参数 */
  ClusterId?: number;
  /** 实例版本。目前支持 "0.10.2","1.1.1","2.4.1","2.4.2","2.8.1"。"2.4.1" 与 "2.4.2" 属于同一个版本，传任意一个均可。 */
  KafkaVersion?: string;
  /** 实例类型。"standard"：标准版，"profession"：专业版。 (标准版仅国际站支持，国内站目前支持专业版) */
  SpecificationsType?: string;
  /** 专业版实例磁盘类型，标准版实例不需要填写。"CLOUD_SSD"：SSD云硬盘；"CLOUD_BASIC"：高性能云硬盘。不传默认值为 "CLOUD_BASIC" */
  DiskType?: string;
  /** 实例内网峰值带宽。单位 MB/s。标准版需传入当前实例规格所对应的峰值带宽。注意如果创建的实例为专业版实例，峰值带宽，分区数等参数配置需要满足专业版的计费规格。 */
  BandWidth?: number;
  /** 实例硬盘大小，需要满足当前实例的计费规格 */
  DiskSize?: number;
  /** 实例最大分区数量，需要满足当前实例的计费规格 */
  Partition?: number;
  /** 实例最大 topic 数量，需要满足当前实例的计费规格 */
  TopicNum?: number;
  /** 实例所在的可用区。当创建多可用区实例时，该参数为创建的默认接入点所在子网的可用区 id */
  ZoneId?: number;
  /** 当前实例是否为多可用区实例。 */
  MultiZoneFlag?: boolean;
  /** 当实例为多可用区实例时，多可用区 id 列表。注意参数 ZoneId 对应的多可用区需要包含在该参数数组中 */
  ZoneIds?: number[];
  /** 购买实例数量。非必填，默认值为 1。当传入该参数时，会创建多个 instanceName 加后缀区分的实例 */
  InstanceNum?: number;
  /** 公网带宽大小，单位 Mbps。默认是没有加上免费 3Mbps 带宽。例如总共需要 3Mbps 公网带宽，此处传 0；总共需要 6Mbps 公网带宽，此处传 3。需要保证传入参数为 3 的整数倍 */
  PublicNetworkMonthly?: number;
  /** 标签 */
  Tags?: Tag[];
  /** 弹性带宽开关 0不开启 1开启（0默认) */
  ElasticBandwidthSwitch?: number;
}

declare interface CreatePostPaidInstanceResponse {
  /** 返回结果 */
  Result?: CreateInstancePostResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 私有网络Id */
  VpcId: string;
  /** 子网Id */
  SubnetId: string;
}

declare interface CreatePrometheusResponse {
  /** 打通普罗米修斯 */
  Result?: PrometheusResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRouteRequest {
  /** 实例唯一id */
  InstanceId: string;
  /** 路由网络类型(3:vpc路由;7:内部支撑路由) */
  VipType: number;
  /** vpc网络Id */
  VpcId?: string;
  /** vpc子网id */
  SubnetId?: string;
  /** 访问类型：0-plaintext；1-sasl_plaintext；2-ssl；3-sasl_ssl */
  AccessType?: number;
  /** 是否需要权限管理 */
  AuthFlag?: number;
  /** 调用方appId */
  CallerAppid?: number;
  /** 公网带宽 */
  PublicNetwork?: number;
  /** vip地址 */
  Ip?: string;
}

declare interface CreateRouteResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTokenRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 用户名 */
  User: string;
}

declare interface CreateTokenResponse {
  /** token串 */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicIpWhiteListRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名称 */
  TopicName: string;
  /** ip白名单列表 */
  IpWhiteList: string[];
}

declare interface CreateTopicIpWhiteListResponse {
  /** 删除主题IP白名单结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 实例Id */
  InstanceId: string;
  /** 主题名称，是一个不超过 128 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-) */
  TopicName: string;
  /** Partition个数，大于0 */
  PartitionNum: number;
  /** 副本个数，不能多于 broker 数，最大为3 */
  ReplicaNum: number;
  /** ip白名单开关, 1:打开 0:关闭，默认不打开 */
  EnableWhiteList?: number;
  /** Ip白名单列表，配额限制，enableWhileList=1时必选 */
  IpWhiteList?: string[];
  /** 清理日志策略，日志清理模式，默认为"delete"。"delete"：日志按保存时间删除，"compact"：日志按 key 压缩，"compact, delete"：日志按 key 压缩且会按保存时间删除。 */
  CleanUpPolicy?: string;
  /** 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-) */
  Note?: string;
  /** 默认为1 */
  MinInsyncReplicas?: number;
  /** 是否允许未同步的副本选为leader，false:不允许，true:允许，默认不允许 */
  UncleanLeaderElectionEnable?: number;
  /** 可选参数。消息保留时间，单位ms，当前最小值为60000ms */
  RetentionMs?: number;
  /** Segment分片滚动的时长，单位ms，当前最小为3600000ms */
  SegmentMs?: number;
  /** 主题消息最大值，单位为 Byte，最小值1024Byte(即1KB)，最大值为12582912Byte（即12MB） */
  MaxMessageBytes?: number;
  /** 预设ACL规则, 1:打开 0:关闭，默认不打开 */
  EnableAclRule?: number;
  /** 预设ACL规则的名称 */
  AclRuleName?: string;
  /** 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B */
  RetentionBytes?: number;
  /** 标签列表 */
  Tags?: Tag[];
}

declare interface CreateTopicResponse {
  /** 返回创建结果 */
  Result?: CreateTopicResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 用户名称 */
  Name: string;
  /** 用户密码 */
  Password: string;
}

declare interface CreateUserResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAclRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER) */
  ResourceType: number;
  /** 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。 */
  ResourceName: string;
  /** Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE) */
  Operation: number;
  /** 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用 */
  PermissionType: number;
  /** 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持 */
  Host?: string;
  /** 用户列表，默认为*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户 */
  Principal?: string;
}

declare interface DeleteAclResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAclRuleRequest {
  /** 实例id信息 */
  InstanceId: string;
  /** acl规则名称 */
  RuleName: string;
}

declare interface DeleteAclRuleResponse {
  /** 返回被删除的规则的ID */
  Result?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConnectResourceRequest {
  /** 连接源的Id */
  ResourceId: string;
}

declare interface DeleteConnectResourceResponse {
  /** 连接源的Id */
  Result?: ConnectResourceResourceIdResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDatahubTaskRequest {
  /** 任务id */
  TaskId: string;
}

declare interface DeleteDatahubTaskResponse {
  /** 操作结果 */
  Result?: DatahubTaskIdRes | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDatahubTopicRequest {
  /** Topic名称 */
  Name: string;
}

declare interface DeleteDatahubTopicResponse {
  /** 返回的结果集 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGroupRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 消费分组 */
  Group: string;
}

declare interface DeleteGroupResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstancePostRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
}

declare interface DeleteInstancePostResponse {
  /** 返回结果 */
  Result?: InstanceDeleteResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstancePreRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
}

declare interface DeleteInstancePreResponse {
  /** 返回结果 */
  Result?: CreateInstancePreResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRouteRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 路由id */
  RouteId: number;
  /** 调用方appId */
  CallerAppid?: number;
  /** 设置定时删除路由时间,若DeleteRouteTime < now ,设置时间小于当前接口提交时间则立即执行;DeleteRouteTime > now,设置时间大于当前接口提交时间,则按照设置的时间,定时执行删除; 该参数设置提交后,无法撤销!!! */
  DeleteRouteTime?: string;
}

declare interface DeleteRouteResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRouteTriggerTimeRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 修改删除路由的定时时间 */
  DelayTime: string;
}

declare interface DeleteRouteTriggerTimeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicIpWhiteListRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名 */
  TopicName: string;
  /** ip白名单列表 */
  IpWhiteList: string[];
}

declare interface DeleteTopicIpWhiteListResponse {
  /** 删除主题IP白名单结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicRequest {
  /** ckafka 实例Id */
  InstanceId: string;
  /** ckafka 主题名称 */
  TopicName: string;
}

declare interface DeleteTopicResponse {
  /** 返回的结果集 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 用户名称 */
  Name: string;
}

declare interface DeleteUserResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeACLRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER) */
  ResourceType: number;
  /** 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。 */
  ResourceName: string;
  /** 偏移位置 */
  Offset?: number;
  /** 个数限制 */
  Limit?: number;
  /** 关键字匹配 */
  SearchWord?: string;
}

declare interface DescribeACLResponse {
  /** 返回的ACL结果集对象 */
  Result?: AclResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAclRuleRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** ACL规则名 */
  RuleName?: string;
  /** ACL规则匹配类型 */
  PatternType?: string;
  /** 是否读取简略的ACL规则 */
  IsSimplified?: boolean;
}

declare interface DescribeAclRuleResponse {
  /** 返回的AclRule结果集对象 */
  Result?: AclRuleResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppInfoRequest {
  /** 偏移位置 */
  Offset?: number;
  /** 本次查询用户数目最大数量限制，最大值为50，默认50 */
  Limit?: number;
}

declare interface DescribeAppInfoResponse {
  /** 返回的符合要求的App Id列表 */
  Result?: AppIdResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCkafkaZoneRequest {
  /** cdc集群Id */
  CdcId?: string;
}

declare interface DescribeCkafkaZoneResponse {
  /** 查询结果复杂对象实体 */
  Result?: ZoneResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConnectResourceRequest {
  /** 连接源的Id */
  ResourceId: string;
}

declare interface DescribeConnectResourceResponse {
  /** 连接源的Id */
  Result?: DescribeConnectResourceResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConnectResourcesRequest {
  /** 连接源类型 */
  Type?: string;
  /** 连接源名称的关键字查询 */
  SearchWord?: string;
  /** 分页偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 连接源的关键字查询, 根据地域查询本地域内连接管理列表中的连接(仅支持包含region输入的连接源) */
  ResourceRegion?: string;
}

declare interface DescribeConnectResourcesResponse {
  /** 连接源列表 */
  Result?: DescribeConnectResourcesResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumerGroupRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 可选，用户需要查询的group名称。 */
  GroupName?: string;
  /** 可选，用户需要查询的group中的对应的topic名称，如果指定了该参数，而group又未指定则忽略该参数。 */
  TopicName?: string;
  /** 本次返回个数限制，最大支持50 */
  Limit?: number;
  /** 偏移位置 */
  Offset?: number;
}

declare interface DescribeConsumerGroupResponse {
  /** 返回的消费分组信息 */
  Result?: ConsumerGroupResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatahubGroupOffsetsRequest {
  /** （过滤条件）按照实例 ID 过滤 */
  Name: string;
  /** Kafka 消费分组 */
  Group: string;
  /** 模糊匹配 topicName */
  SearchWord?: string;
  /** 本次查询的偏移位置，默认为0 */
  Offset?: number;
  /** 本次返回结果的最大个数，默认为50，最大值为50 */
  Limit?: number;
}

declare interface DescribeDatahubGroupOffsetsResponse {
  /** 返回的结果对象 */
  Result?: GroupOffsetResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatahubTaskRequest {
  /** 任务id */
  TaskId: string;
}

declare interface DescribeDatahubTaskResponse {
  /** 返回结果 */
  Result?: DescribeDatahubTaskRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatahubTasksRequest {
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 分页偏移量，默认为0 */
  Offset?: number;
  /** 过滤条件，按照 TaskName 过滤，支持模糊查询 */
  SearchWord?: string;
  /** 转储的目标类型 */
  TargetType?: string;
  /** 任务类型，SOURCE数据接入，SINK数据流出 */
  TaskType?: string;
  /** 转储的源类型 */
  SourceType?: string;
  /** 转储的资源 */
  Resource?: string;
}

declare interface DescribeDatahubTasksResponse {
  /** 返回任务查询结果 */
  Result?: DescribeDatahubTasksRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatahubTopicRequest {
  /** 弹性topic名称 */
  Name: string;
}

declare interface DescribeDatahubTopicResponse {
  /** 返回的结果对象 */
  Result?: DescribeDatahubTopicResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatahubTopicsRequest {
  /** 搜索词 */
  SearchWord?: string;
  /** 本次查询的偏移位置，默认为0 */
  Offset?: number;
  /** 本次返回结果的最大个数，默认为50，最大值为50 */
  Limit?: number;
  /** 是否从连接查询topic列表 */
  QueryFromConnectResource?: boolean;
  /** 连接的ID */
  ConnectResourceId?: string;
  /** topic资源表达式 */
  TopicRegularExpression?: string;
}

declare interface DescribeDatahubTopicsResponse {
  /** 主题列表 */
  Result?: DescribeDatahubTopicsResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupInfoRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** Kafka 消费分组列表 */
  GroupList: string[];
}

declare interface DescribeGroupInfoResponse {
  /** 返回的结果 */
  Result?: GroupInfoResponse[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupOffsetsRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** Kafka 消费分组 */
  Group: string;
  /** group 订阅的主题名称数组，如果没有该数组，则表示指定的 group 下所有 topic 信息 */
  Topics?: string[];
  /** 模糊匹配 topicName */
  SearchWord?: string;
  /** 本次查询的偏移位置，默认为0 */
  Offset?: number;
  /** 本次返回结果的最大个数，默认为50，最大值为50 */
  Limit?: number;
}

declare interface DescribeGroupOffsetsResponse {
  /** 返回结果 */
  Result?: GroupOffsetResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 搜索关键字 */
  SearchWord?: string;
  /** 偏移量 */
  Offset?: number;
  /** 最大返回数量 */
  Limit?: number;
  /** 仅支持 GroupState 筛选, 支持的筛选状态有 Empty/Stable 注意：该参数只能在2.8/3.2 版本生效 */
  Filters?: Filter[];
}

declare interface DescribeGroupResponse {
  /** 返回结果 */
  Result?: GroupResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceAttributesRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
}

declare interface DescribeInstanceAttributesResponse {
  /** 实例属性返回结果对象。 */
  Result?: InstanceAttributesResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesDetailRequest {
  /** （过滤条件）按照实例ID过滤 */
  InstanceId?: string;
  /** （过滤条件）按照实例名,实例Id,可用区,私有网络id,子网id 过滤，支持模糊查询 */
  SearchWord?: string;
  /** （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部 */
  Status?: number[];
  /** 偏移量，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认10，最大值20。 */
  Limit?: number;
  /** 匹配标签key值。 */
  TagKey?: string;
  /** 过滤器。filter.Name 支持('Ip', 'VpcId', 'SubNetId', 'InstanceType','InstanceId') ,filter.Values最多传递10个值. */
  Filters?: Filter[];
  /** 已经废弃， 使用InstanceIdList */
  InstanceIds?: string;
  /** 按照实例ID过滤 */
  InstanceIdList?: string[];
  /** 根据标签列表过滤实例（取交集） */
  TagList?: Tag[];
}

declare interface DescribeInstancesDetailResponse {
  /** 返回的实例详情结果对象 */
  Result?: InstanceDetailResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** （查询条件）按照ckafka集群实例Id过滤 */
  InstanceId?: string;
  /** 搜索词 ex:（查询条件）按照实例名称过滤，支持模糊查询 */
  SearchWord?: string;
  /** （查询条件）实例的状态 0：创建中，1：运行中，2：删除中，5: 隔离中, 7:升级中 不填默认返回全部 */
  Status?: number[];
  /** 偏移量，不填默认为0 */
  Offset?: number;
  /** 返回数量，不填则默认10，最大值100 */
  Limit?: number;
  /** 已废弃。匹配标签key值。 */
  TagKey?: string;
  /** （查询条件）私有网络Id */
  VpcId?: string;
}

declare interface DescribeInstancesResponse {
  /** 返回的结果 */
  Result?: InstanceResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
}

declare interface DescribePrometheusResponse {
  /** Prometheus监控映射列表 */
  Result?: PrometheusDTO[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionRequest {
  /** 偏移量 */
  Offset?: number;
  /** 返回最大结果数 */
  Limit?: number;
  /** 业务字段，可忽略 */
  Business?: string;
  /** cdc专有集群业务字段，可忽略 */
  CdcId?: string;
}

declare interface DescribeRegionResponse {
  /** 返回地域枚举结果列表 */
  Result?: Region[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRouteRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 路由Id */
  RouteId?: number;
}

declare interface DescribeRouteResponse {
  /** 返回的路由信息结果集 */
  Result?: RouteResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 流程Id */
  FlowId: number;
}

declare interface DescribeTaskStatusResponse {
  /** 返回结果 */
  Result?: TaskStatusResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicAttributesRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名称 */
  TopicName: string;
}

declare interface DescribeTopicAttributesResponse {
  /** 返回的结果对象 */
  Result?: TopicAttributesResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicDetailRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** （过滤条件）按照topicName过滤，支持模糊查询 */
  SearchWord?: string;
  /** 偏移量，不填默认为0 */
  Offset?: number;
  /** 返回数量，不填则默认 10，最大值20，取值要大于0 */
  Limit?: number;
  /** Acl预设策略名称 */
  AclRuleName?: string;
  /** 根据特定的属性排序(目前支持PartitionNum/CreateTime) */
  OrderBy?: string;
  /** 0-顺序、1-倒序 */
  OrderType?: number;
  /** 目前支持 ReplicaNum （副本数）筛选 */
  Filters?: Filter[];
}

declare interface DescribeTopicDetailResponse {
  /** 返回的主题详情实体 */
  Result?: TopicDetailResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicFlowRankingRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 排行类别，PRO：Topic生产流量；CON：Topic消费流量 */
  RankingType: string;
  /** 排行起始日期 */
  BeginDate?: string;
  /** 排行结束日期 */
  EndDate?: string;
  /** Broker IP 地址 */
  BrokerIp?: string;
}

declare interface DescribeTopicFlowRankingResponse {
  /** 流量排行返回结果 */
  Result?: TopicFlowRankingResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicProduceConnectionRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名 */
  TopicName: string;
}

declare interface DescribeTopicProduceConnectionResponse {
  /** 链接信息返回结果集 */
  Result?: DescribeConnectInfoResultDTO[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 过滤条件，按照 topicName 过滤，支持模糊查询 */
  SearchWord?: string;
  /** 偏移量，不填默认为0 */
  Offset?: number;
  /** 返回数量，不填则默认为20，最大值为50 */
  Limit?: number;
  /** Acl预设策略名称 */
  AclRuleName?: string;
}

declare interface DescribeTopicResponse {
  /** 返回的结果 */
  Result?: TopicResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicSubscribeGroupRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名 */
  TopicName: string;
  /** 分页时的起始位置 */
  Offset?: number;
  /** 分页时的个数 */
  Limit?: number;
}

declare interface DescribeTopicSubscribeGroupResponse {
  /** 返回结果 */
  Result?: TopicSubscribeGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicSyncReplicaRequest {
  /** 实例ID */
  InstanceId: string;
  /** 主题名称 */
  TopicName: string;
  /** 偏移量，不填默认为0 */
  Offset?: number;
  /** 返回数量，不填则默认10，最大值20。 */
  Limit?: number;
  /** 仅筛选未同步副本 */
  OutOfSyncReplicaOnly?: boolean;
}

declare interface DescribeTopicSyncReplicaResponse {
  /** 返回topic 副本详情 */
  Result?: TopicInSyncReplicaResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 按照名称过滤 */
  SearchWord?: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
}

declare interface DescribeUserResponse {
  /** 返回结果 */
  Result?: UserResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FetchDatahubMessageByOffsetRequest {
  /** 弹性topic名称 */
  Name: string;
  /** 分区id */
  Partition: number;
  /** 位点信息，必填 */
  Offset?: number;
}

declare interface FetchDatahubMessageByOffsetResponse {
  /** 返回结果 */
  Result?: ConsumerRecord;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FetchLatestDatahubMessageListRequest {
  /** 弹性topic名称 */
  Name: string;
  /** 分区id */
  Partition: number;
  /** 位点信息 */
  Offset?: number;
  /** 最大查询条数，最小1，最大100 */
  MessageCount?: number;
}

declare interface FetchLatestDatahubMessageListResponse {
  /** 返回结果。 */
  Result?: ConsumerRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FetchMessageByOffsetRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名 */
  Topic: string;
  /** 分区id */
  Partition: number;
  /** 位点信息，必填 */
  Offset?: number;
}

declare interface FetchMessageByOffsetResponse {
  /** 返回结果 */
  Result?: ConsumerRecord;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FetchMessageListByOffsetRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名 */
  Topic: string;
  /** 分区id */
  Partition: number;
  /** 位点信息 */
  Offset: number;
  /** 最大查询条数，默认20，最大20 */
  SinglePartitionRecordNumber?: number;
}

declare interface FetchMessageListByOffsetResponse {
  /** 返回结果。注意，列表中不返回具体的消息内容（key、value），如果需要查询具体消息内容，请使用FetchMessageByOffset接口 */
  Result?: ConsumerRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FetchMessageListByTimestampRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名 */
  Topic: string;
  /** 分区id */
  Partition?: number;
  /** 查询开始时间，13位时间戳 */
  StartTime?: number;
  /** 最大查询条数，默认20，最大20, 最小1 */
  SinglePartitionRecordNumber?: number;
}

declare interface FetchMessageListByTimestampResponse {
  /** 返回结果。注意，列表中不返回具体的消息内容（key、value），如果需要查询具体消息内容，请使用FetchMessageByOffset接口 */
  Result?: ConsumerRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GroupInfoResponse {
  /** 错误码，正常为0 */
  ErrorCode?: string;
  /** group 状态描述（常见的为 Empty、Stable、Dead 三种状态）：Dead：消费分组不存在Empty：消费分组，当前没有任何消费者订阅PreparingRebalance：消费分组处于 rebalance 状态CompletingRebalance：消费分组处于 rebalance 状态Stable：消费分组中各个消费者已经加入，处于稳定状态 */
  State?: string;
  /** 消费分组选择的协议类型正常的消费者一般为 consumer 但有些系统采用了自己的协议如 kafka-connect 用的就是 connect。只有标准的 consumer 协议，本接口才知道具体的分配方式的格式，才能解析到具体的 partition 的分配情况 */
  ProtocolType?: string;
  /** 消费者 partition 分配算法常见的有如下几种(Kafka 消费者 SDK 默认的选择项为 range)：range、 roundrobin、 sticky */
  Protocol?: string;
  /** 仅当 state 为 Stable 且 protocol_type 为 consumer 时， 该数组才包含信息 */
  Members?: GroupInfoMember[];
  /** 消费分组名称 */
  Group?: string;
}

declare interface GroupOffsetResponse {
  /** 符合调节的总结果数 */
  TotalCount?: number;
  /** 该主题分区数组，其中每个元素为一个 json object */
  TopicList?: GroupOffsetTopic[] | null;
}

declare interface GroupResponse {
  /** 计数 */
  TotalCount?: number | null;
  /** GroupList */
  GroupList?: DescribeGroup[] | null;
  /** 消费分组配额 */
  GroupCountQuota?: number | null;
}

declare interface InquireCkafkaPriceRequest {
  /** 国内站标准版填写standards2, 国际站标准版填写standard,专业版填写profession,高级版填写premium */
  InstanceType: string;
  /** 购买/续费付费类型(购买时不填的话, 默认获取购买包年包月一个月的费用) */
  InstanceChargeParam?: InstanceChargeParam;
  /** 购买/续费时购买的实例数量(不填时, 默认为1个) */
  InstanceNum?: number;
  /** 实例内网带宽大小, 单位MB/s (购买时必填，专业版/高级版询价时带宽信息必填) */
  Bandwidth?: number;
  /** 实例的硬盘购买类型以及大小 (购买时必填，专业版/高级版询价时磁盘信息必填) */
  InquiryDiskParam?: InquiryDiskParam;
  /** 实例消息保留时间大小, 单位小时 (购买时必填) */
  MessageRetention?: number;
  /** 购买实例topic数, 单位个 (购买时必填) */
  Topic?: number;
  /** 购买实例分区数, 单位个 (购买时必填，专业版/高级版询价时带宽信息必填) */
  Partition?: number;
  /** 购买地域, 可通过查看DescribeCkafkaZone这个接口获取ZoneId */
  ZoneIds?: number[];
  /** 标记操作, 新购填写purchase, 续费填写renew, (不填时, 默认为purchase) */
  CategoryAction?: string;
  /** 国内站购买的版本, sv_ckafka_instance_s2_1(入门型), sv_ckafka_instance_s2_2(标准版), sv_ckafka_instance_s2_3(进阶型), 如果instanceType为standards2, 但该参数为空, 则默认值为sv_ckafka_instance_s2_1 */
  BillType?: string;
  /** 公网带宽计费模式, 目前只有专业版支持公网带宽 (购买公网带宽时必填) */
  PublicNetworkParam?: InquiryPublicNetworkParam;
  /** 续费时的实例id, 续费时填写 */
  InstanceId?: string;
}

declare interface InquireCkafkaPriceResponse {
  /** 返回结果 */
  Result?: InquireCkafkaPriceResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstanceAttributesResponse {
  /** ckafka集群实例Id */
  InstanceId?: string;
  /** ckafka集群实例Name */
  InstanceName?: string;
  /** 接入点 VIP 列表信息 */
  VipList?: VipEntity[];
  /** 虚拟IP */
  Vip?: string;
  /** 虚拟端口 */
  Vport?: string;
  /** 实例的状态。0: 创建中，1: 运行中，2: 删除中, 3: 已删除, 5: 隔离中, 7: 升级中, -1: 创建失败 */
  Status?: number;
  /** 实例带宽，单位：Mbps */
  Bandwidth?: number;
  /** 实例的存储大小，单位：GB */
  DiskSize?: number;
  /** 可用区 */
  ZoneId?: number;
  /** VPC 的 ID，为空表示是基础网络 */
  VpcId?: string;
  /** 子网 ID， 为空表示基础网络 */
  SubnetId?: string;
  /** 实例健康状态， 1：健康，2：告警，3：异常 */
  Healthy?: number;
  /** 实例健康信息，当前会展示磁盘利用率，最大长度为256 */
  HealthyMessage?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 消息保存时间,单位为分钟 */
  MsgRetentionTime?: number;
  /** 自动创建 Topic 配置， 若该字段为空，则表示未开启自动创建 */
  Config?: InstanceConfigDO;
  /** 剩余创建分区数 */
  RemainderPartitions?: number;
  /** 剩余创建主题数 */
  RemainderTopics?: number;
  /** 当前创建分区数 */
  CreatedPartitions?: number;
  /** 当前创建主题数 */
  CreatedTopics?: number;
  /** 标签数组 */
  Tags?: Tag[] | null;
  /** 过期时间 */
  ExpireTime?: number | null;
  /** 可用区列表 */
  ZoneIds?: number[] | null;
  /** ckafka集群实例版本 */
  Version?: string | null;
  /** 最大分组数 */
  MaxGroupNum?: number | null;
  /** 售卖类型,0:标准版,1:专业版 */
  Cvm?: number | null;
  /** 类型 */
  InstanceType?: string | null;
  /** 表示该实例支持的特性。FEATURE_SUBNET_ACL:表示acl策略支持设置子网。 */
  Features?: string[] | null;
  /** 动态消息保留策略 */
  RetentionTimeConfig?: DynamicRetentionTime | null;
  /** 最大连接数 */
  MaxConnection?: number | null;
  /** 公网带宽 */
  PublicNetwork?: number | null;
  /** 时间 */
  DeleteRouteTimestamp?: string | null;
  /** 剩余创建分区数 */
  RemainingPartitions?: number | null;
  /** 剩余创建主题数 */
  RemainingTopics?: number | null;
  /** 动态硬盘扩容策略 */
  DynamicDiskConfig?: DynamicDiskConfig | null;
  /** 实例计费类型 */
  InstanceChargeType?: string | null;
  /** 集群类型 */
  ClusterType?: string | null;
  /** 免费分区数量 */
  FreePartitionNumber?: number;
  /** 弹性带宽上浮值 */
  ElasticFloatBandwidth?: number | null;
  /** ssl自定义证书id */
  CustomCertId?: string;
}

declare interface InstanceDeleteResponse {
  /** 删除实例返回的任务Id */
  FlowId?: number | null;
}

declare interface InstanceDetailResponse {
  /** 符合条件的实例总数 */
  TotalCount?: number;
  /** 符合条件的实例详情列表 */
  InstanceList?: InstanceDetail[];
}

declare interface InstanceResponse {
  /** 符合条件的实例列表 */
  InstanceList?: Instance[] | null;
  /** 符合条件的结果总数 */
  TotalCount?: number | null;
}

declare interface InstanceScalingDownRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 缩容模式 1:稳定变配 2.高速变配 */
  UpgradeStrategy: number;
  /** 磁盘大小 单位 GB */
  DiskSize?: number;
  /** 峰值带宽 单位 MB/s */
  BandWidth?: number;
  /** 分区上限 */
  Partition?: number;
}

declare interface InstanceScalingDownResponse {
  /** 返回结果 */
  Result?: ScalingDownResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface JgwOperateResponse {
  /** 返回的code，0为正常，非0为错误 */
  ReturnCode?: string;
  /** 成功消息 */
  ReturnMessage?: string;
  /** 操作型返回的Data数据,可能有flowId等 */
  Data?: OperateResponseData | null;
}

declare interface ModifyAclRuleRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** ACL规则名 */
  RuleName: string;
  /** 修改预设规则时传入,是否应用到新增的Topic */
  IsApplied?: number;
}

declare interface ModifyAclRuleResponse {
  /** 规则的唯一表示Key */
  Result?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConnectResourceRequest {
  /** 连接源的Id */
  ResourceId: string;
  /** 连接源名称，为空时不修改 */
  ResourceName?: string;
  /** 连接源描述，为空时不修改 */
  Description?: string;
  /** 连接源类型，修改数据源参数时，需要与原Type相同，否则编辑数据源无效 */
  Type?: string;
  /** Dts配置，Type为DTS时必填 */
  DtsConnectParam?: DtsModifyConnectParam;
  /** MongoDB配置，Type为MONGODB时必填 */
  MongoDBConnectParam?: MongoDBModifyConnectParam;
  /** Es配置，Type为ES时必填 */
  EsConnectParam?: EsModifyConnectParam;
  /** ClickHouse配置，Type为CLICKHOUSE时必填 */
  ClickHouseConnectParam?: ClickHouseModifyConnectParam;
  /** MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填 */
  MySQLConnectParam?: MySQLModifyConnectParam;
  /** PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填 */
  PostgreSQLConnectParam?: PostgreSQLModifyConnectParam;
  /** MariaDB配置，Type为MARIADB时必填 */
  MariaDBConnectParam?: MariaDBModifyConnectParam;
  /** SQLServer配置，Type为SQLSERVER时必填 */
  SQLServerConnectParam?: SQLServerModifyConnectParam;
  /** Ctsdb配置，Type为CTSDB */
  CtsdbConnectParam?: CtsdbModifyConnectParam;
  /** Doris配置，Type为DORIS */
  DorisConnectParam?: DorisModifyConnectParam;
  /** Kafka配置，Type为 KAFKA 时必填 */
  KafkaConnectParam?: KafkaConnectParam;
  /** MQTT配置，Type为 MQTT 时必填 */
  MqttConnectParam?: MqttConnectParam;
}

declare interface ModifyConnectResourceResponse {
  /** 连接源的Id */
  Result?: ConnectResourceResourceIdResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatahubTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 任务名称 */
  TaskName?: string;
}

declare interface ModifyDatahubTaskResponse {
  /** 任务id */
  Result?: DatahubTaskIdRes | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatahubTopicRequest {
  /** 弹性topic名称 */
  Name: string;
  /** 消息保留时间，单位：ms，当前最小值为60000ms。 */
  RetentionMs: number;
  /** 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。 */
  Note?: string;
  /** 标签列表 */
  Tags?: Tag[];
}

declare interface ModifyDatahubTopicResponse {
  /** 返回结果集 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGroupOffsetsRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 消费分组名称 */
  Group: string;
  /** 重置offset的策略，入参含义 0. 对齐shift-by参数，代表把offset向前或向后移动shift条 1. 对齐参考(by-duration,to-datetime,to-earliest,to-latest),代表把offset移动到指定timestamp的位置 2. 对齐参考(to-offset)，代表把offset移动到指定的offset位置 */
  Strategy: number;
  /** 需要重置的主题名列表， 不填表示全部 */
  Topics?: string[];
  /** 当strategy为0时，必须包含该字段，可以大于零代表会把offset向后移动shift条，小于零则将offset向前回溯shift条数。正确重置后新的offset应该是(old_offset + shift)，需要注意的是如果新的offset小于partition的earliest则会设置为earliest，如果大于partition 的latest则会设置为latest */
  Shift?: number;
  /** 单位ms。当strategy为1时，必须包含该字段，其中-2表示重置offset到最开始的位置，-1表示重置到最新的位置(相当于清空)，其它值则代表指定的时间，会获取topic中指定时间的offset然后进行重置，需要注意的时，如果指定的时间不存在消息，则获取最末尾的offset。 */
  ShiftTimestamp?: number;
  /** 需要重新设置的offset位置。当strategy为2，必须包含该字段。 */
  Offset?: number;
  /** 需要重新设置的partition的列表，如果没有指定Topics参数。则重置全部topics的对应的Partition列表里的partition。指定Topics时则重置指定的topic列表的对应的Partitions列表的partition。 */
  Partitions?: number[];
}

declare interface ModifyGroupOffsetsResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceAttributesRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 实例日志的最长保留时间，单位分钟，最大90天，0代表不开启日志保留时间回收策略 */
  MsgRetentionTime?: number;
  /** ckafka集群实例Name */
  InstanceName?: string;
  /** 实例配置 */
  Config?: ModifyInstanceAttributesConfig;
  /** 动态消息保留策略配置 */
  DynamicRetentionConfig?: DynamicRetentionTime;
  /** 升配Rebalance时间 参数已废弃,忽略不填!!! */
  RebalanceTime?: number;
  /** 公网带宽 最小3Mbps 最大999Mbps 仅专业版支持填写 */
  PublicNetwork?: number;
  /** 动态硬盘扩容策略配置 */
  DynamicDiskConfig?: DynamicDiskConfig;
  /** 实例级别单条消息大小（单位byte) 最大 12582912(不包含) 最小1024(不包含) */
  MaxMessageByte?: number;
}

declare interface ModifyInstanceAttributesResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancePreRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 预计磁盘，根据磁盘步长，规格向上调整。 */
  DiskSize?: number;
  /** 预计带宽，根据带宽步长，规格向上调整。 */
  BandWidth?: number;
  /** 预计分区，根据带宽步长，规格向上调整。 */
  Partition?: number;
}

declare interface ModifyInstancePreResponse {
  /** 变更预付费实例配置返回结构 */
  Result?: CreateInstancePreResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPasswordRequest {
  /** 实例Id */
  InstanceId: string;
  /** 用户名称 */
  Name: string;
  /** 用户当前密码 */
  Password: string;
  /** 用户新密码 */
  PasswordNew: string;
}

declare interface ModifyPasswordResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRoutineMaintenanceTaskRequest {
  /** 实例id */
  InstanceId: string;
  /** 自动化运维类别 */
  MaintenanceType: string;
  /** INSTANCE_STORAGE_CAPACITY(磁盘自动扩容)/MESSAGE_RETENTION_PERIOD(磁盘动态消息保留策略) */
  MaintenanceSubtype: string;
  /** 主题名 */
  TopicName?: string;
  /** 任务触发阈值 */
  ConfigureThreshold?: number;
  /** 任务调整步长 */
  ConfigureStepSize?: number;
  /** 任务调整上限 */
  ConfigureLimit?: number;
  /** 任务预期触发时间，存储从当日 0AM 开始偏移的秒数 */
  PlannedTime?: number;
  /** 任务额外信息 */
  ExtraConfig?: string;
  /** 任务状态 */
  Status?: number;
  /** 执行week day */
  Week?: string;
}

declare interface ModifyRoutineMaintenanceTaskResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicAttributesRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 主题名 */
  TopicName: string;
  /** 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。 */
  Note?: string;
  /** IP 白名单开关，1：打开；0：关闭。 */
  EnableWhiteList?: number;
  /** 默认为1。 */
  MinInsyncReplicas?: number;
  /** 默认为 0，0：false；1：true。 */
  UncleanLeaderElectionEnable?: number;
  /** 消息保留时间，单位：ms，当前最小值为60000ms。 */
  RetentionMs?: number;
  /** 主题消息最大值，单位为 Byte，最大值为12582912Byte（即12MB）。 */
  MaxMessageBytes?: number;
  /** Segment 分片滚动的时长，单位：ms，当前最小为300000ms。 */
  SegmentMs?: number;
  /** 消息删除策略，可以选择delete 或者compact */
  CleanUpPolicy?: string;
  /** Ip白名单列表，配额限制，enableWhileList=1时必选 */
  IpWhiteList?: string[];
  /** 预设ACL规则, 1:打开 0:关闭，默认不打开 */
  EnableAclRule?: number;
  /** ACL规则名 */
  AclRuleName?: string;
  /** 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B */
  RetentionBytes?: number;
  /** 标签列表 */
  Tags?: Tag[];
  /** 生产限流，单位 MB/s */
  QuotaProducerByteRate?: number;
  /** 消费限流，单位 MB/s */
  QuotaConsumerByteRate?: number;
  /** topic副本数 最小值 1,最大值 3 */
  ReplicaNum?: number;
}

declare interface ModifyTopicAttributesResponse {
  /** 返回结果 */
  Result?: JgwOperateResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewCkafkaInstanceRequest {
  /** ckafka集群实例Id */
  InstanceId: string;
  /** 续费时长, 默认为1, 单位是月 */
  TimeSpan?: number;
}

declare interface RenewCkafkaInstanceResponse {
  /** 返回值 */
  Result?: RenewCkafkaInstanceResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RouteResponse {
  /** 路由信息列表 */
  Routers?: Route[] | null;
}

declare interface SendMessageRequest {
  /** DataHub接入ID */
  DataHubId: string;
  /** 发送消息内容(单次请求最多500条) */
  Message: BatchContent[];
}

declare interface SendMessageResponse {
  /** 消息ID列表 */
  MessageId?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TaskStatusResponse {
  /** 任务状态:0 成功1 失败2 进行中 */
  Status?: number;
  /** 输出信息 */
  Output?: string | null;
}

declare interface TopicAttributesResponse {
  /** 主题 ID */
  TopicId?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 主题备注 */
  Note?: string | null;
  /** 分区个数 */
  PartitionNum?: number;
  /** IP 白名单开关，1：打开； 0：关闭 */
  EnableWhiteList?: number;
  /** IP 白名单列表 */
  IpWhiteList?: string[];
  /** topic 配置数组 */
  Config?: Config;
  /** 分区详情 */
  Partitions?: TopicPartitionDO[];
  /** ACL预设策略开关，1：打开； 0：关闭 */
  EnableAclRule?: number | null;
  /** 预设策略列表 */
  AclRuleList?: AclRule[] | null;
  /** topic 限流策略 */
  QuotaConfig?: InstanceQuotaConfigResp | null;
  /** 副本数 */
  ReplicaNum?: number | null;
}

declare interface TopicDetailResponse {
  /** 返回的主题详情列表 */
  TopicList?: TopicDetail[] | null;
  /** 符合条件的所有主题详情数量 */
  TotalCount?: number;
}

declare interface UserResponse {
  /** 符合条件的用户列表 */
  Users?: User[] | null;
  /** 符合条件的总用户数 */
  TotalCount?: number;
}

declare interface ZoneResponse {
  /** zone列表 */
  ZoneList?: ZoneInfo[];
  /** 最大购买实例个数 */
  MaxBuyInstanceNum?: number;
  /** 最大购买带宽 单位Mb/s */
  MaxBandwidth?: number;
  /** 后付费单位价格 */
  UnitPrice?: Price;
  /** 后付费消息单价 */
  MessagePrice?: Price;
  /** 用户独占集群信息 */
  ClusterInfo?: ClusterInfo[] | null;
  /** 购买标准版配置 */
  Standard?: string | null;
  /** 购买标准版S2配置 */
  StandardS2?: string | null;
  /** 购买专业版配置 */
  Profession?: string | null;
  /** 购买物理独占版配置 */
  Physical?: string | null;
  /** 公网带宽 最小3Mbps 最大999Mbps 仅专业版支持填写 */
  PublicNetwork?: string | null;
  /** 公网带宽配置 */
  PublicNetworkLimit?: string | null;
  /** 请求Id */
  RequestId?: string | null;
  /** 版本 */
  Version?: string | null;
  /** 分页offset */
  Offset?: number | null;
  /** 分页limit */
  Limit?: number | null;
  /** 是否必须录入tag */
  ForceCheckTag?: boolean | null;
}

/** {@link Ckafka 消息队列 CKafka 版} */
declare interface Ckafka {
  (): Versions;
  /** 实例授权token {@link AuthorizeTokenRequest} {@link AuthorizeTokenResponse} */
  AuthorizeToken(data: AuthorizeTokenRequest, config?: AxiosRequestConfig): AxiosPromise<AuthorizeTokenResponse>;
  /** 批量添加 ACL 策略 {@link BatchCreateAclRequest} {@link BatchCreateAclResponse} */
  BatchCreateAcl(data: BatchCreateAclRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateAclResponse>;
  /** 批量修改消费组offset {@link BatchModifyGroupOffsetsRequest} {@link BatchModifyGroupOffsetsResponse} */
  BatchModifyGroupOffsets(data: BatchModifyGroupOffsetsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyGroupOffsetsResponse>;
  /** 批量设置主题属性 {@link BatchModifyTopicAttributesRequest} {@link BatchModifyTopicAttributesResponse} */
  BatchModifyTopicAttributes(data: BatchModifyTopicAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyTopicAttributesResponse>;
  /** 取消授权token {@link CancelAuthorizationTokenRequest} {@link CancelAuthorizationTokenResponse} */
  CancelAuthorizationToken(data: CancelAuthorizationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CancelAuthorizationTokenResponse>;
  /** 查询cdc任务接口 {@link CheckCdcClusterRequest} {@link CheckCdcClusterResponse} */
  CheckCdcCluster(data: CheckCdcClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCdcClusterResponse>;
  /** 添加 ACL 策略 {@link CreateAclRequest} {@link CreateAclResponse} */
  CreateAcl(data: CreateAclRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAclResponse>;
  /** 添加 ACL 规则 {@link CreateAclRuleRequest} {@link CreateAclRuleResponse} */
  CreateAclRule(data: CreateAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAclRuleResponse>;
  /** 创建cdc-ckafka集群 {@link CreateCdcClusterRequest} {@link CreateCdcClusterResponse} */
  CreateCdcCluster(data: CreateCdcClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCdcClusterResponse>;
  /** 创建Datahub连接源 {@link CreateConnectResourceRequest} {@link CreateConnectResourceResponse} */
  CreateConnectResource(data: CreateConnectResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConnectResourceResponse>;
  /** 创建消费者组 {@link CreateConsumerRequest} {@link CreateConsumerResponse} */
  CreateConsumer(data: CreateConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsumerResponse>;
  /** 创建DIP转储任务 {@link CreateDatahubTaskRequest} {@link CreateDatahubTaskResponse} */
  CreateDatahubTask(data: CreateDatahubTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatahubTaskResponse>;
  /** 创建DIP主题 {@link CreateDatahubTopicRequest} {@link CreateDatahubTopicResponse} */
  CreateDatahubTopic(data: CreateDatahubTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatahubTopicResponse>;
  /** 创建按量计费实例 {@link CreateInstancePostRequest} {@link CreateInstancePostResponse} */
  CreateInstancePost(data: CreateInstancePostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancePostResponse>;
  /** 创建实例(预付费包年包月) {@link CreateInstancePreRequest} {@link CreateInstancePreResponse} */
  CreateInstancePre(data: CreateInstancePreRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancePreResponse>;
  /** 增加主题分区 {@link CreatePartitionRequest} {@link CreatePartitionResponse} */
  CreatePartition(data: CreatePartitionRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePartitionResponse>;
  /** 创建按量计费实例（新） {@link CreatePostPaidInstanceRequest} {@link CreatePostPaidInstanceResponse} */
  CreatePostPaidInstance(data?: CreatePostPaidInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePostPaidInstanceResponse>;
  /** 添加普罗米修斯监控 {@link CreatePrometheusRequest} {@link CreatePrometheusResponse} */
  CreatePrometheus(data: CreatePrometheusRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusResponse>;
  /** 添加实例路由 {@link CreateRouteRequest} {@link CreateRouteResponse} */
  CreateRoute(data: CreateRouteRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRouteResponse>;
  /** 创建token {@link CreateTokenRequest} {@link CreateTokenResponse} */
  CreateToken(data: CreateTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTokenResponse>;
  /** 创建主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 创建主题IP白名单 {@link CreateTopicIpWhiteListRequest} {@link CreateTopicIpWhiteListResponse} */
  CreateTopicIpWhiteList(data: CreateTopicIpWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicIpWhiteListResponse>;
  /** 添加用户 {@link CreateUserRequest} {@link CreateUserResponse} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** 删除ACL {@link DeleteAclRequest} {@link DeleteAclResponse} */
  DeleteAcl(data: DeleteAclRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAclResponse>;
  /** 删除ACL规则 {@link DeleteAclRuleRequest} {@link DeleteAclRuleResponse} */
  DeleteAclRule(data: DeleteAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAclRuleResponse>;
  /** 删除Datahub连接源 {@link DeleteConnectResourceRequest} {@link DeleteConnectResourceResponse} */
  DeleteConnectResource(data: DeleteConnectResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConnectResourceResponse>;
  /** 删除Dip任务 {@link DeleteDatahubTaskRequest} {@link DeleteDatahubTaskResponse} */
  DeleteDatahubTask(data: DeleteDatahubTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDatahubTaskResponse>;
  /** 删除DIP主题 {@link DeleteDatahubTopicRequest} {@link DeleteDatahubTopicResponse} */
  DeleteDatahubTopic(data: DeleteDatahubTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDatahubTopicResponse>;
  /** 删除消费组 {@link DeleteGroupRequest} {@link DeleteGroupResponse} */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 删除后付费实例 {@link DeleteInstancePostRequest} {@link DeleteInstancePostResponse} */
  DeleteInstancePost(data: DeleteInstancePostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstancePostResponse>;
  /** 删除预付费实例 {@link DeleteInstancePreRequest} {@link DeleteInstancePreResponse} */
  DeleteInstancePre(data: DeleteInstancePreRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstancePreResponse>;
  /** 删除路由 {@link DeleteRouteRequest} {@link DeleteRouteResponse} */
  DeleteRoute(data: DeleteRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRouteResponse>;
  /** 修改路由触发时间 {@link DeleteRouteTriggerTimeRequest} {@link DeleteRouteTriggerTimeResponse} */
  DeleteRouteTriggerTime(data: DeleteRouteTriggerTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRouteTriggerTimeResponse>;
  /** 删除主题 {@link DeleteTopicRequest} {@link DeleteTopicResponse} */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** 删除主题IP白名单 {@link DeleteTopicIpWhiteListRequest} {@link DeleteTopicIpWhiteListResponse} */
  DeleteTopicIpWhiteList(data: DeleteTopicIpWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicIpWhiteListResponse>;
  /** 删除用户 {@link DeleteUserRequest} {@link DeleteUserResponse} */
  DeleteUser(data: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** 枚举ACL {@link DescribeACLRequest} {@link DescribeACLResponse} */
  DescribeACL(data: DescribeACLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeACLResponse>;
  /** 查询ACL规则列表 {@link DescribeAclRuleRequest} {@link DescribeAclRuleResponse} */
  DescribeAclRule(data: DescribeAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAclRuleResponse>;
  /** 查询用户列表 {@link DescribeAppInfoRequest} {@link DescribeAppInfoResponse} */
  DescribeAppInfo(data?: DescribeAppInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppInfoResponse>;
  /** 查看可用区列表 {@link DescribeCkafkaZoneRequest} {@link DescribeCkafkaZoneResponse} */
  DescribeCkafkaZone(data?: DescribeCkafkaZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCkafkaZoneResponse>;
  /** 查询Datahub连接源 {@link DescribeConnectResourceRequest} {@link DescribeConnectResourceResponse} */
  DescribeConnectResource(data: DescribeConnectResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConnectResourceResponse>;
  /** 查询Datahub连接源列表 {@link DescribeConnectResourcesRequest} {@link DescribeConnectResourcesResponse} */
  DescribeConnectResources(data?: DescribeConnectResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConnectResourcesResponse>;
  /** 查询消费分组信息 {@link DescribeConsumerGroupRequest} {@link DescribeConsumerGroupResponse} */
  DescribeConsumerGroup(data: DescribeConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerGroupResponse>;
  /** 获取Datahub消费分组offset {@link DescribeDatahubGroupOffsetsRequest} {@link DescribeDatahubGroupOffsetsResponse} */
  DescribeDatahubGroupOffsets(data: DescribeDatahubGroupOffsetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatahubGroupOffsetsResponse>;
  /** 查询Datahub任务信息 {@link DescribeDatahubTaskRequest} {@link DescribeDatahubTaskResponse} */
  DescribeDatahubTask(data: DescribeDatahubTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatahubTaskResponse>;
  /** 查询Datahub任务列表 {@link DescribeDatahubTasksRequest} {@link DescribeDatahubTasksResponse} */
  DescribeDatahubTasks(data?: DescribeDatahubTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatahubTasksResponse>;
  /** 获取DIP主题属性 {@link DescribeDatahubTopicRequest} {@link DescribeDatahubTopicResponse} */
  DescribeDatahubTopic(data: DescribeDatahubTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatahubTopicResponse>;
  /** 查询DIP主题列表 {@link DescribeDatahubTopicsRequest} {@link DescribeDatahubTopicsResponse} */
  DescribeDatahubTopics(data?: DescribeDatahubTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatahubTopicsResponse>;
  /** 枚举消费分组(精简版) {@link DescribeGroupRequest} {@link DescribeGroupResponse} */
  DescribeGroup(data: DescribeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupResponse>;
  /** 获取消费分组信息 {@link DescribeGroupInfoRequest} {@link DescribeGroupInfoResponse} */
  DescribeGroupInfo(data: DescribeGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupInfoResponse>;
  /** 获取消费分组offset {@link DescribeGroupOffsetsRequest} {@link DescribeGroupOffsetsResponse} */
  DescribeGroupOffsets(data: DescribeGroupOffsetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupOffsetsResponse>;
  /** 获取实例属性 {@link DescribeInstanceAttributesRequest} {@link DescribeInstanceAttributesResponse} */
  DescribeInstanceAttributes(data: DescribeInstanceAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceAttributesResponse>;
  /** 获取实例列表信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取实例集群列表详情 {@link DescribeInstancesDetailRequest} {@link DescribeInstancesDetailResponse} */
  DescribeInstancesDetail(data?: DescribeInstancesDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesDetailResponse>;
  /** 获取实例Prometheus信息 {@link DescribePrometheusRequest} {@link DescribePrometheusResponse} */
  DescribePrometheus(data: DescribePrometheusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusResponse>;
  /** 枚举地域 {@link DescribeRegionRequest} {@link DescribeRegionResponse} */
  DescribeRegion(data?: DescribeRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionResponse>;
  /** 查看路由信息 {@link DescribeRouteRequest} {@link DescribeRouteResponse} */
  DescribeRoute(data: DescribeRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteResponse>;
  /** 查询任务状态 {@link DescribeTaskStatusRequest} {@link DescribeTaskStatusResponse} */
  DescribeTaskStatus(data: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 获取主题列表 {@link DescribeTopicRequest} {@link DescribeTopicResponse} */
  DescribeTopic(data: DescribeTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicResponse>;
  /** 获取主题属性 {@link DescribeTopicAttributesRequest} {@link DescribeTopicAttributesResponse} */
  DescribeTopicAttributes(data: DescribeTopicAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicAttributesResponse>;
  /** 获取主题列表详情 {@link DescribeTopicDetailRequest} {@link DescribeTopicDetailResponse} */
  DescribeTopicDetail(data: DescribeTopicDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicDetailResponse>;
  /** Topic 流量排行 {@link DescribeTopicFlowRankingRequest} {@link DescribeTopicFlowRankingResponse} */
  DescribeTopicFlowRanking(data: DescribeTopicFlowRankingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicFlowRankingResponse>;
  /** 查询topic生产端连接信息 {@link DescribeTopicProduceConnectionRequest} {@link DescribeTopicProduceConnectionResponse} */
  DescribeTopicProduceConnection(data: DescribeTopicProduceConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicProduceConnectionResponse>;
  /** 查询订阅某主题消息分组信息 {@link DescribeTopicSubscribeGroupRequest} {@link DescribeTopicSubscribeGroupResponse} */
  DescribeTopicSubscribeGroup(data: DescribeTopicSubscribeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicSubscribeGroupResponse>;
  /** 获取Topic 同步副本信息 {@link DescribeTopicSyncReplicaRequest} {@link DescribeTopicSyncReplicaResponse} */
  DescribeTopicSyncReplica(data: DescribeTopicSyncReplicaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicSyncReplicaResponse>;
  /** 查询用户信息 {@link DescribeUserRequest} {@link DescribeUserResponse} */
  DescribeUser(data: DescribeUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserResponse>;
  /** 查询Datahub Topic消息 {@link FetchDatahubMessageByOffsetRequest} {@link FetchDatahubMessageByOffsetResponse} */
  FetchDatahubMessageByOffset(data: FetchDatahubMessageByOffsetRequest, config?: AxiosRequestConfig): AxiosPromise<FetchDatahubMessageByOffsetResponse>;
  /** 查询Datahub Topic最新消息列表 {@link FetchLatestDatahubMessageListRequest} {@link FetchLatestDatahubMessageListResponse} */
  FetchLatestDatahubMessageList(data: FetchLatestDatahubMessageListRequest, config?: AxiosRequestConfig): AxiosPromise<FetchLatestDatahubMessageListResponse>;
  /** 查询消息 {@link FetchMessageByOffsetRequest} {@link FetchMessageByOffsetResponse} */
  FetchMessageByOffset(data: FetchMessageByOffsetRequest, config?: AxiosRequestConfig): AxiosPromise<FetchMessageByOffsetResponse>;
  /** 根据位点查询消息列表 {@link FetchMessageListByOffsetRequest} {@link FetchMessageListByOffsetResponse} */
  FetchMessageListByOffset(data: FetchMessageListByOffsetRequest, config?: AxiosRequestConfig): AxiosPromise<FetchMessageListByOffsetResponse>;
  /** 根据时间戳查询消息列表 {@link FetchMessageListByTimestampRequest} {@link FetchMessageListByTimestampResponse} */
  FetchMessageListByTimestamp(data: FetchMessageListByTimestampRequest, config?: AxiosRequestConfig): AxiosPromise<FetchMessageListByTimestampResponse>;
  /** Ckafka询价 {@link InquireCkafkaPriceRequest} {@link InquireCkafkaPriceResponse} */
  InquireCkafkaPrice(data: InquireCkafkaPriceRequest, config?: AxiosRequestConfig): AxiosPromise<InquireCkafkaPriceResponse>;
  /** 按量实例缩容 {@link InstanceScalingDownRequest} {@link InstanceScalingDownResponse} */
  InstanceScalingDown(data: InstanceScalingDownRequest, config?: AxiosRequestConfig): AxiosPromise<InstanceScalingDownResponse>;
  /** 修改Acl预设规则 {@link ModifyAclRuleRequest} {@link ModifyAclRuleResponse} */
  ModifyAclRule(data: ModifyAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAclRuleResponse>;
  /** 编辑Datahub连接源 {@link ModifyConnectResourceRequest} {@link ModifyConnectResourceResponse} */
  ModifyConnectResource(data: ModifyConnectResourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConnectResourceResponse>;
  /** 修改Datahub任务 {@link ModifyDatahubTaskRequest} {@link ModifyDatahubTaskResponse} */
  ModifyDatahubTask(data: ModifyDatahubTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatahubTaskResponse>;
  /** 修改DIP主题属性 {@link ModifyDatahubTopicRequest} {@link ModifyDatahubTopicResponse} */
  ModifyDatahubTopic(data: ModifyDatahubTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatahubTopicResponse>;
  /** 设置Groups 消费分组offset {@link ModifyGroupOffsetsRequest} {@link ModifyGroupOffsetsResponse} */
  ModifyGroupOffsets(data: ModifyGroupOffsetsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGroupOffsetsResponse>;
  /** 设置实例属性 {@link ModifyInstanceAttributesRequest} {@link ModifyInstanceAttributesResponse} */
  ModifyInstanceAttributes(data: ModifyInstanceAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceAttributesResponse>;
  /** 预付费实例变配接口 {@link ModifyInstancePreRequest} {@link ModifyInstancePreResponse} */
  ModifyInstancePre(data: ModifyInstancePreRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancePreResponse>;
  /** 修改密码 {@link ModifyPasswordRequest} {@link ModifyPasswordResponse} */
  ModifyPassword(data: ModifyPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPasswordResponse>;
  /** 设置自动化运维属性 {@link ModifyRoutineMaintenanceTaskRequest} {@link ModifyRoutineMaintenanceTaskResponse} */
  ModifyRoutineMaintenanceTask(data: ModifyRoutineMaintenanceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoutineMaintenanceTaskResponse>;
  /** 设置主题属性 {@link ModifyTopicAttributesRequest} {@link ModifyTopicAttributesResponse} */
  ModifyTopicAttributes(data: ModifyTopicAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicAttributesResponse>;
  /** 续费Ckafka实例 {@link RenewCkafkaInstanceRequest} {@link RenewCkafkaInstanceResponse} */
  RenewCkafkaInstance(data: RenewCkafkaInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewCkafkaInstanceResponse>;
  /** HTTP发送消息 {@link SendMessageRequest} {@link SendMessageResponse} */
  SendMessage(data: SendMessageRequest, config?: AxiosRequestConfig): AxiosPromise<SendMessageResponse>;
}

export declare type Versions = ["2019-08-19"];

export default Ckafka;
