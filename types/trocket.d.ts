/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 客户端订阅详情，可用于辅助判断哪些客户端订阅关系不一致 */
declare interface ClientSubscriptionInfo {
  /** 客户端ID */
  ClientId?: string;
  /** 客户端地址 */
  ClientAddr?: string;
  /** 订阅主题 */
  Topic?: string;
  /** 订阅表达式 */
  SubString?: string;
  /** 订阅方式 */
  ExpressionType?: string;
}

/** 消费组信息 */
declare interface ConsumeGroupItem {
  /** 实例ID */
  InstanceId?: string;
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 是否开启消费 */
  ConsumeEnable?: boolean;
  /** 顺序投递：true并发投递：false */
  ConsumeMessageOrderly?: boolean;
  /** 最大重试次数 */
  MaxRetryTimes?: number;
  /** 备注 */
  Remark?: string;
  /** 4.x的集群ID */
  ClusterIdV4?: string | null;
  /** 4.x的命名空间 */
  NamespaceV4?: string | null;
  /** 4.x的消费组名称 */
  ConsumerGroupV4?: string | null;
  /** 4.x的完整命名空间 */
  FullNamespaceV4?: string | null;
}

/** 消费者客户端 */
declare interface ConsumerClient {
  /** 客户端ID */
  ClientId?: string;
  /** 客户端地址 */
  ClientAddr?: string;
  /** 客户端SDK语言 */
  Language?: string;
  /** 客户端SDK版本 */
  Version?: string;
  /** 客户端消费堆积 */
  ConsumerLag?: number | null;
  /** 消费者客户端类型（grpc；remoting；http） */
  ChannelProtocol?: string;
}

/** map结构返回 */
declare interface CustomMapEntry {
  /** key */
  Key?: string | null;
  /** value */
  Value?: string | null;
}

/** Topic&Group维度的权限配置 */
declare interface DetailedRolePerm {
  /** 权限对应的资源 */
  Resource: string;
  /** 是否开启生产权限 */
  PermWrite: boolean;
  /** 是否开启消费权限 */
  PermRead: boolean;
  /** 授权资源类型（Topic:主题; Group:消费组） */
  ResourceType: string;
  /** 资源备注 */
  Remark?: string;
}

/** 接入点信息 */
declare interface Endpoint {
  /** 接入点类型，枚举值如下VPC: VPC;PUBLIC: 公网;INTERNAL: 支撑网; */
  Type?: string;
  /** 状态，OPEN 开启，CLOSE 关闭，PROCESSING 操作中， */
  Status?: string;
  /** 付费类型，仅公网PREPAID 包年包月POSTPAID 按量付费 */
  PayMode?: string | null;
  /** 接入点地址 */
  EndpointUrl?: string | null;
  /** VPC ID */
  VpcId?: string | null;
  /** 子网ID */
  SubnetId?: string | null;
  /** 公网带宽，Mbps为单位 */
  Bandwidth?: number | null;
  /** 公网放通规则 */
  IpRules?: IpRule[] | null;
  /** 公网是否按流量计费 */
  BillingFlow?: boolean | null;
}

/** 查询过滤器 */
declare interface Filter {
  /** 过滤条件参数名 */
  Name: string;
  /** 过滤条件的值 */
  Values: string[];
}

/** 实例列表页中的实例信息 */
declare interface FusionInstanceItem {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本 */
  Version?: string;
  /** 实例类型，EXPERIMENT，体验版BASIC，基础版PRO，专业版PLATINUM，铂金版 */
  InstanceType?: string;
  /** 实例状态，RUNNING, 运行中MAINTAINING，维护中ABNORMAL，异常OVERDUE，欠费DESTROYED，已删除CREATING，创建中MODIFYING，变配中CREATE_FAILURE，创建失败MODIFY_FAILURE，变配失败DELETING，删除中 */
  InstanceStatus?: string;
  /** 实例主题数上限 */
  TopicNumLimit?: number;
  /** 实例消费组数量上限 */
  GroupNumLimit?: number;
  /** 计费模式，POSTPAID，按量计费PREPAID，包年包月 */
  PayMode?: string;
  /** 到期时间，秒为单位 */
  ExpiryTime?: number | null;
  /** 备注信息 */
  Remark?: string | null;
  /** 主题数量 */
  TopicNum?: number;
  /** 消费组数量 */
  GroupNum?: number;
  /** 标签列表 */
  TagList?: Tag[] | null;
  /** 商品规格 */
  SkuCode?: string;
  /** TPS限流值 */
  TpsLimit?: number | null;
  /** 弹性TPS限流值 */
  ScaledTpsLimit?: number | null;
  /** 消息保留时间，小时为单位 */
  MessageRetention?: number | null;
  /** 延迟消息最大时长，小时为单位 */
  MaxMessageDelay?: number | null;
  /** 是否自动续费 */
  RenewFlag?: number | null;
  /** 4.x独有数据 */
  InstanceItemExtraInfo?: InstanceItemExtraInfo | null;
  /** 预销毁时间 */
  DestroyTime?: number | null;
  /** 所属可用区列表 */
  ZoneIds?: number[] | null;
  /** 是否开启删除保护 */
  EnableDeletionProtection?: boolean;
}

/** 实例列表页中的实例信息 */
declare interface InstanceItem {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本 */
  Version?: string;
  /** 实例类型，EXPERIMENT，体验版BASIC，基础版PRO，专业版PLATINUM，铂金版 */
  InstanceType?: string;
  /** 实例状态，RUNNING, 运行中MAINTAINING，维护中ABNORMAL，异常OVERDUE，欠费DESTROYED，已删除CREATING，创建中MODIFYING，变配中CREATE_FAILURE，创建失败MODIFY_FAILURE，变配失败DELETING，删除中 */
  InstanceStatus?: string;
  /** 实例主题数上限 */
  TopicNumLimit?: number;
  /** 实例消费组数量上限 */
  GroupNumLimit?: number;
  /** 计费模式，POSTPAID，按量计费PREPAID，包年包月 */
  PayMode?: string;
  /** 到期时间，秒为单位 */
  ExpiryTime?: number | null;
  /** 备注信息 */
  Remark?: string | null;
  /** 主题数量 */
  TopicNum?: number;
  /** 消费组数量 */
  GroupNum?: number;
  /** 标签列表 */
  TagList?: Tag[] | null;
  /** 商品规格 */
  SkuCode?: string;
  /** TPS限流值 */
  TpsLimit?: number | null;
  /** 弹性TPS限流值 */
  ScaledTpsLimit?: number | null;
  /** 消息保留时间，小时为单位 */
  MessageRetention?: number | null;
  /** 延迟消息最大时长，小时为单位 */
  MaxMessageDelay?: number | null;
  /** 是否自动续费 */
  RenewFlag?: number | null;
}

/** 4.x集群和5.0集群列表统一显示 4.x特殊数据承载接口 */
declare interface InstanceItemExtraInfo {
  /** 是否vip */
  IsVip?: boolean | null;
  /** 4.x专享集群状态 */
  VipInstanceStatus?: number | null;
  /** 专享集群峰值带宽 */
  MaxBandWidth?: number | null;
  /** 专享集群规格 */
  SpecName?: string | null;
  /** 专享集群节点数量 */
  NodeCount?: number | null;
  /** 专享集群最大存储 */
  MaxStorage?: number | null;
  /** 专享集群最大保留时间，单位：小时 */
  MaxRetention?: number | null;
  /** 专项集群最大保留时间，单位：小时 */
  MinRetention?: number | null;
  /** 4.0共享集群状态 */
  InstanceStatus?: number | null;
  /** 是否已冻结 */
  IsFrozen?: boolean;
}

/** IP规则 */
declare interface IpRule {
  /** IP地址 */
  Ip: string;
  /** 是否允许放行 */
  Allow: boolean;
  /** 备注信息 */
  Remark: string | null;
}

/** MQTT 订阅关系 */
declare interface MQTTClientSubscription {
  /** topic 订阅 */
  TopicFilter?: string;
  /** 服务质量等级 */
  Qos?: number;
}

/** MQTTEndpoint */
declare interface MQTTEndpointItem {
  /** 类型 */
  Type?: string | null;
  /** 接入点 */
  Url?: string | null;
  /** vpc信息 */
  VpcId?: string | null;
  /** 子网信息 */
  SubnetId?: string | null;
  /** 主机 */
  Host?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 接入点ip */
  Ip?: string | null;
}

/** MQTT 实例信息 */
declare interface MQTTInstanceItem {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本 */
  Version?: string;
  /** 实例类型，BASIC，基础版PRO，专业版 */
  InstanceType?: string;
  /** 实例状态，RUNNING, 运行中MAINTAINING，维护中ABNORMAL，异常OVERDUE，欠费DESTROYED，已删除CREATING，创建中MODIFYING，变配中CREATE_FAILURE，创建失败MODIFY_FAILURE，变配失败DELETING，删除中 */
  InstanceStatus?: string;
  /** 实例主题数上限 */
  TopicNumLimit?: number;
  /** 备注信息 */
  Remark?: string | null;
  /** 主题数量 */
  TopicNum?: number;
  /** 商品规格 */
  SkuCode?: string;
  /** 弹性TPS限流值 */
  TpsLimit?: number | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 订阅关系上限 */
  SubscriptionNumLimit?: number | null;
  /** 客户端连接数上线 */
  ClientNumLimit?: number | null;
}

/** 消息记录 */
declare interface MQTTMessageItem {
  /** 消息ID */
  MsgId?: string | null;
  /** 消息tag */
  Tags?: string | null;
  /** 消息key */
  Keys?: string | null;
  /** 客户端地址 */
  ProducerAddr?: string | null;
  /** 消息发送时间 */
  ProduceTime?: string | null;
  /** 死信重发次数 */
  DeadLetterResendTimes?: number | null;
  /** 死信重发成功次数 */
  DeadLetterResendSuccessTimes?: number | null;
  /** 子topic */
  SubTopic?: string | null;
  /** 消息质量等级 */
  Qos?: string | null;
}

/** MQTT ProductSkuItem */
declare interface MQTTProductSkuItem {
  /** 类型 */
  InstanceType?: string | null;
  /** cide */
  SkuCode?: string | null;
  /** sale */
  OnSale?: boolean | null;
  /** topic num限制 */
  TopicNumLimit?: number | null;
  /** tps */
  TpsLimit?: number | null;
  /** 客户端连接数 */
  ClientNumLimit?: number | null;
  /** 订阅数限制 */
  SubscriptionNumLimit?: number | null;
  /** 代理核 */
  ProxySpecCore?: number | null;
  /** 代理内存 */
  ProxySpecMemory?: number | null;
  /** 代理总数 */
  ProxySpecCount?: number | null;
}

/** MQTT 主题详情 */
declare interface MQTTTopicItem {
  /** 实例 ID */
  InstanceId?: string;
  /** 主题名称 */
  Topic?: string;
  /** 主题描述 */
  Remark?: string | null;
}

/** MQTT集群用户信息 */
declare interface MQTTUserItem {
  /** 用户名 */
  Username?: string;
  /** 密码 */
  Password?: string;
  /** 是否开启消费 */
  PermRead?: boolean;
  /** 是否开启生产 */
  PermWrite?: boolean;
  /** 备注信息 */
  Remark?: string;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 修改时间，秒为单位 */
  ModifiedTime?: number;
}

/** 消息记录 */
declare interface MessageItem {
  /** 消息ID */
  MsgId?: string | null;
  /** 消息tag */
  Tags?: string | null;
  /** 消息key */
  Keys?: string | null;
  /** 客户端地址 */
  ProducerAddr?: string | null;
  /** 消息发送时间 */
  ProduceTime?: string | null;
  /** 死信重发次数 */
  DeadLetterResendTimes?: number | null;
  /** 死信重发成功次数 */
  DeadLetterResendSuccessTimes?: number | null;
}

/** 消息轨迹 */
declare interface MessageTraceItem {
  /** 步骤 */
  Stage?: string | null;
  /** 轨迹详情 */
  Data?: string | null;
}

/** MessageTrack */
declare interface MessageTrackItem {
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 消费状态, CONSUMED: 已消费 CONSUMED_BUT_FILTERED: 已过滤 NOT_CONSUME: 未消费 ENTER_RETRY: 进入重试队列 ENTER_DLQ: 进入死信队列 UNKNOWN: 查询不到消费状态 */
  ConsumeStatus?: string;
  /** track类型 */
  TrackType?: string;
  /** 异常信息 */
  ExceptionDesc?: string | null;
}

/** 迁移中的主题 */
declare interface MigratingTopic {
  /** 主题名称 */
  TopicName?: string;
  /** 迁移状态 S_RW_D_NA 源集群读写，S_RW_D_R 源集群读写目标集群读，S_RW_D_RW 源集群读写目标集群读写，S_R_D_RW 源集群读目标集群读写，S_NA_D_RW 目标集群读写 */
  MigrationStatus?: string;
  /** 是否完成健康检查 */
  HealthCheckPassed?: boolean;
  /** 上次健康检查返回的错误信息，仅在HealthCheckPassed为false时有效。 NotChecked 未执行检查， Unknown 未知错误, TopicNotImported 主题未导入, TopicNotExistsInSourceCluster 主题在源集群中不存在, TopicNotExistsInTargetCluster 主题在目标集群中不存在, ConsumerConnectedOnTarget 目标集群上存在消费者连接, SourceTopicHasNewMessagesIn5Minutes 源集群主题前5分钟内有新消息写入, TargetTopicHasNewMessagesIn5Minutes 目标集群主题前5分钟内有新消息写入, SourceTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, TargetTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, ConsumerGroupCountNotMatch 订阅组数量不一致, SourceTopicHasUnconsumedMessages 源集群主题存在未消费消息, */
  HealthCheckError?: string;
  /** 命名空间，仅4.x集群有效 */
  Namespace?: string;
  /** 4.x的命名空间 */
  NamespaceV4?: string | null;
  /** 4.x的主题名称 */
  TopicNameV4?: string | null;
  /** 4.x的完整命名空间 */
  FullNamespaceV4?: string | null;
  /** 上次健康检查返回的错误列表 */
  HealthCheckErrorList?: string[];
}

/** 迁移任务信息 */
declare interface MigrationTaskItem {
  /** 任务ID */
  TaskId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 0 - 未指定（存量）1 - 元数据导入 */
  Type?: number;
  /** 主题总数 */
  TopicNum?: number;
  /** 消费组总数 */
  GroupNum?: number;
  /** 任务状态： 0，迁移中 1，迁移成功 2，迁移完成，只有部分数据完成迁移 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: number;
}

/** MQTT客户端监控 */
declare interface PacketStatistics {
  /** 类型 */
  MessageType?: string | null;
  /** 服务质量 */
  Qos?: number | null;
  /** 指标值 */
  Count?: number | null;
}

/** 价格标签信息，一个完整的价格标签包含计价类别和计费项标签。 */
declare interface PriceTag {
  /** 计价名称（枚举值：tps：TPS基础价；stepTps：TPS步长） */
  Name?: string;
  /** 计费项对应的步长数 */
  Step?: number | null;
}

/** 商品售卖信息 */
declare interface ProductSKU {
  /** 产品类型，EXPERIMENT，体验版BASIC，基础版PRO，专业版PLATINUM，铂金版 */
  InstanceType?: string;
  /** 规格代码 */
  SkuCode?: string;
  /** TPS上限 */
  TpsLimit?: number | null;
  /** 弹性TPS上限 */
  ScaledTpsLimit?: number | null;
  /** 主题数量上限默认值 */
  TopicNumLimit?: number | null;
  /** 消费组数量上限 */
  GroupNumLimit?: number | null;
  /** 默认消息保留时间，小时为单位 */
  DefaultRetention?: number | null;
  /** 可调整消息保留时间上限，小时为单位 */
  RetentionUpperLimit?: number | null;
  /** 可调整消息保留时间下限，小时为单位 */
  RetentionLowerLimit?: number | null;
  /** 延时消息最大时长，小时为单位 */
  MaxMessageDelay?: number | null;
  /** 是否可购买 */
  OnSale?: boolean;
  /** 计费项信息 */
  PriceTags?: PriceTag[];
  /** 主题数量上限默认最大值 */
  TopicNumUpperLimit?: number | null;
}

/** 公网访问安全规则 */
declare interface PublicAccessRule {
  /** ip网段信息 */
  IpRule: string | null;
  /** 允许或者拒绝 */
  Allow: boolean | null;
  /** 备注信息 */
  Remark?: string | null;
}

/** 角色信息 */
declare interface RoleItem {
  /** 角色名称 */
  RoleName: string;
  /** 是否开启消费 */
  PermRead: boolean;
  /** 是否开启生产 */
  PermWrite: boolean;
  /** Access Key */
  AccessKey?: string;
  /** Secret Key */
  SecretKey?: string;
  /** 备注信息 */
  Remark?: string;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 修改时间，秒为单位 */
  ModifiedTime?: number;
  /** 权限类型，默认按集群授权（Cluster：集群级别；TopicAndGroup：主题&消费组级别） */
  PermType?: string;
  /** Topic和Group维度权限配置 */
  DetailedRolePerms?: DetailedRolePerm[] | null;
}

/** 平滑迁移任务 */
declare interface SmoothMigrationTaskItem {
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 源集群名称 */
  SourceClusterName?: string | null;
  /** 目标集群实例ID */
  InstanceId?: string | null;
  /** 网络连接类型， PUBLIC 公网 VPC 私有网络 OTHER 其他 */
  ConnectionType?: string | null;
  /** 源集群NameServer地址 */
  SourceNameServer?: string | null;
  /** 任务状态:Configuration 迁移配置,SourceConnecting 连接源集群中, MetaDataImport 元数据导入,EndpointSetup 切换接入点,ServiceMigration 切流中,Completed 已完成,Cancelled 已取消 */
  TaskStatus?: string | null;
  /** 目标集群实例版本，4 表示4.x版本5 表示5.x版本 */
  InstanceVersion?: string | null;
}

/** 消费组配置信息 */
declare interface SourceClusterGroupConfig {
  /** 消费组名称，可在[DescribeSourceClusterGroupList](https://cloud.tencent.com/document/api/1493/118006)接口返回的[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031)数据中获取。 */
  GroupName: string | null;
  /** 备注信息 */
  Remark?: string | null;
  /** 是否已导入，作为入参时无效 */
  Imported?: boolean | null;
  /** 命名空间，仅4.x集群有效 */
  Namespace?: string | null;
  /** 导入状态Unknown 未知Success 成功Failure 失败AlreadyExists 已存在仅作为出参时使用 */
  ImportStatus?: string | null;
  /** 4.x的命名空间，出参使用 */
  NamespaceV4?: string | null;
  /** 4.x的消费组名，出参使用 */
  GroupNameV4?: string | null;
  /** 4.x的完整命名空间，出参使用 */
  FullNamespaceV4?: string | null;
  /** 是否为顺序投递，5.0有效 */
  ConsumeMessageOrderly?: boolean | null;
}

/** 源集群主题配置 */
declare interface SourceClusterTopicConfig {
  /** 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  TopicName: string;
  /** 主题类型，5.x版本UNSPECIFIED 未指定NORMAL 普通消息FIFO 顺序消息DELAY 延迟消息TRANSACTION 事务消息4.x版本Normal 普通消息PartitionedOrder 分区顺序消息Transaction 事务消息DelayScheduled 延时消息 */
  TopicType: string;
  /** 队列数 */
  QueueNum: number;
  /** 备注信息 */
  Remark?: string;
  /** 是否已导入，作为入参时无效 */
  Imported?: boolean;
  /** 命名空间，仅4.x集群有效 */
  Namespace?: string;
  /** 导入状态，Unknown 未知，AlreadyExists 已存在，Success 成功，Failure 失败仅作为出参可用 */
  ImportStatus?: string;
  /** 4.x的命名空间，出参使用 */
  NamespaceV4?: string;
  /** 4.x的主题名，出参使用 */
  TopicNameV4?: string;
  /** 4.x的完整命名空间，出参使用 */
  FullNamespaceV4?: string;
}

/** MQTT客户端数据流量统计 */
declare interface StatisticsReport {
  /** 字节数 */
  Bytes?: number | null;
  /** 监控指标 */
  Items?: PacketStatistics[] | null;
}

/** 主题与消费组的订阅关系数据 */
declare interface SubscriptionData {
  /** 实例ID */
  InstanceId?: string | null;
  /** 主题名称 */
  Topic?: string | null;
  /** 主题类型 */
  TopicType?: string | null;
  /** 单个节点上主题队列数 */
  TopicQueueNum?: number | null;
  /** 消费组名称 */
  ConsumerGroup?: string | null;
  /** 是否在线 */
  IsOnline?: boolean | null;
  /** 消费类型 */
  ConsumeType?: string | null;
  /** 订阅规则 */
  SubString?: string | null;
  /** 过滤类型 */
  ExpressionType?: string | null;
  /** 订阅一致性 */
  Consistency?: number | null;
  /** 消费堆积 */
  ConsumerLag?: number | null;
  /** 最后消费进度更新时间，秒为单位 */
  LastUpdateTime?: number | null;
  /** 最大重试次数 */
  MaxRetryTimes?: number | null;
  /** 是否顺序消费 */
  ConsumeMessageOrderly?: boolean | null;
  /** 消费模式: BROADCASTING 广播模式;CLUSTERING 集群模式; */
  MessageModel?: string | null;
  /** 订阅不一致的客户端列表 */
  ClientSubscriptionInfos?: ClientSubscriptionInfo[] | null;
}

/** 标签数据 */
declare interface Tag {
  /** 标签名称 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

/** 标签过滤器 */
declare interface TagFilter {
  /** 标签键名称 */
  TagKey: string;
  /** 标签值列表 */
  TagValues: string[];
}

/** 主题消费进度 */
declare interface TopicConsumeStats {
  /** 主题名称 */
  Topic?: string;
  /** 主题类型 */
  TopicType?: string;
  /** 单节点主题队列数量 */
  QueueNum?: number;
  /** 消费堆积 */
  ConsumerLag?: number;
  /** 订阅规则 */
  SubString?: string;
  /** 最后消费进度更新时间 */
  LastUpdateTime?: number;
}

/** 列表上的主题信息 */
declare interface TopicItem {
  /** 实例ID */
  InstanceId?: string;
  /** 主题名称 */
  Topic?: string;
  /** 主题类型NORMAL:普通消息,FIFO:顺序消息,DELAY:延时消息,TRANSACTION:事务消息 */
  TopicType?: string;
  /** 队列数量 */
  QueueNum?: number;
  /** 描述 */
  Remark?: string;
  /** 4.x的集群id */
  ClusterIdV4?: string | null;
  /** 4.x的命名空间 */
  NamespaceV4?: string | null;
  /** 4.x的主题名称 */
  TopicV4?: string | null;
  /** 4.x的完整命名空间 */
  FullNamespaceV4?: string | null;
  /** 消息保留时长 */
  MsgTTL?: number | null;
}

/** 迁移主题修改状态后的结果 */
declare interface TopicStageChangeResult {
  /** 主题名称 */
  TopicName?: string;
  /** 是否成功 */
  Success?: boolean;
  /** 命名空间，仅4.x有效 */
  Namespace?: string;
}

/** VPC信息 */
declare interface VpcInfo {
  /** VPC ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
}

declare interface ChangeMigratingTopicToNextStageRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 主题名称列表，主题名称可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  TopicNameList: string[];
  /** 命名空间列表，仅4.x集群有效，与TopicNameList一一对应，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  NamespaceList?: string[];
}

declare interface ChangeMigratingTopicToNextStageResponse {
  /** 迁移主题状态修改的结果列表 */
  Results?: TopicStageChangeResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsumerGroupRequest {
  /** 集群ID */
  InstanceId: string;
  /** 最大重试次数 */
  MaxRetryTimes: number;
  /** 是否开启消费 */
  ConsumeEnable: boolean;
  /** 顺序投递：true并发投递：false */
  ConsumeMessageOrderly: boolean;
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 备注 */
  Remark?: string;
  /** 标签列表 */
  TagList?: Tag[];
}

declare interface CreateConsumerGroupResponse {
  /** 集群ID */
  InstanceId?: string;
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceRequest {
  /** 实例类型，EXPERIMENT 体验版BASIC 基础版PRO 专业版PLATINUM 铂金版 */
  InstanceType: string;
  /** 集群名称 */
  Name: string;
  /** 商品规格，可用规格如下：experiment_500, basic_1k, basic_2k, basic_3k, basic_4k, basic_5k, basic_6k, basic_7k, basic_8k, basic_9k, basic_10k, pro_4k, pro_6k, pro_8k, pro_1w, pro_15k, pro_2w, pro_25k, pro_3w, pro_35k, pro_4w, pro_45k, pro_5w, pro_55k, pro_60k, pro_65k, pro_70k, pro_75k, pro_80k, pro_85k, pro_90k, pro_95k, pro_100k, platinum_1w, platinum_2w, platinum_3w, platinum_4w, platinum_5w, platinum_6w, platinum_7w, platinum_8w, platinum_9w, platinum_10w, platinum_12w, platinum_14w, platinum_16w, platinum_18w, platinum_20w, platinum_25w, platinum_30w, platinum_35w, platinum_40w, platinum_45w, platinum_50w, platinum_60w, platinum_70w, platinum_80w, platinum_90w, platinum_100w */
  SkuCode: string;
  /** 备注信息 */
  Remark?: string;
  /** 标签列表 */
  TagList?: Tag[];
  /** 集群绑定的VPC信息，必填 */
  VpcList?: VpcInfo[];
  /** 是否开启公网，默认值为false表示不开启 */
  EnablePublic?: boolean;
  /** 公网是否按流量计费，默认值为false表示不按流量计费 */
  BillingFlow?: boolean;
  /** 公网带宽（单位：兆），默认值为0。如果开启公网，该字段必须为大于0的正整数 */
  Bandwidth?: number;
  /** 公网访问白名单 */
  IpRules?: IpRule[];
  /** 消息保留时长（单位：小时） */
  MessageRetention?: number;
  /** 付费模式（0: 后付费；1: 预付费），默认值为0 */
  PayMode?: number;
  /** 是否自动续费（0: 不自动续费；1: 自动续费），默认值为0 */
  RenewFlag?: number;
  /** 购买时长（单位：月），默认值为1 */
  TimeSpan?: number;
  /** 最大可创建主题数 */
  MaxTopicNum?: number;
  /** 部署可用区列表 */
  ZoneIds?: number[];
}

declare interface CreateInstanceResponse {
  /** 集群ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMQTTInsPublicEndpointRequest {
  /** 实例ID */
  InstanceId: string;
  /** 带宽 */
  Bandwidth: number;
  /** 公网访问规则 */
  Rules?: PublicAccessRule[];
}

declare interface CreateMQTTInsPublicEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMQTTInstanceRequest {
  /** 实例类型，EXPERIMENT 体验版BASIC 基础版PRO 专业版PLATINUM 铂金版 */
  InstanceType: string;
  /** 实例名称 */
  Name: string;
  /** 商品规格，可用规格如下：basic_1k, */
  SkuCode: string;
  /** 备注信息 */
  Remark?: string;
  /** 标签列表 */
  TagList?: Tag[];
  /** 实例绑定的VPC信息 */
  VpcList?: VpcInfo[];
  /** 是否开启公网 */
  EnablePublic?: boolean;
  /** 公网带宽（单位：兆） */
  Bandwidth?: number;
  /** 公网访问白名单 */
  IpRules?: IpRule[];
  /** 是否自动续费（0: 不自动续费；1: 自动续费） */
  RenewFlag?: number;
  /** 购买时长（单位：月） */
  TimeSpan?: number;
}

declare interface CreateMQTTInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMQTTTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateMQTTTopicResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 主题 */
  Topic?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMQTTUserRequest {
  /** 集群ID */
  InstanceId: string;
  /** 备注 */
  Remark: string;
  /** 是否开启生产权限 */
  PermWrite: boolean;
  /** 是否开启消费权限 */
  PermRead: boolean;
  /** 用户名 */
  Username: string;
  /** 密码，该字段为空时候则后端会默认生成 */
  Password?: string;
}

declare interface CreateMQTTUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoleRequest {
  /** 集群ID */
  InstanceId: string;
  /** 角色名称 */
  Role: string;
  /** 是否开启生产权限 */
  PermWrite: boolean;
  /** 是否开启消费权限 */
  PermRead: boolean;
  /** 备注 */
  Remark: string;
  /** 权限类型，默认按集群授权（Cluster：集群级别；TopicAndGroup：主题&消费组级别） */
  PermType?: string;
  /** Topic&Group维度权限配置 */
  DetailedPerms?: DetailedRolePerm[];
}

declare interface CreateRoleResponse {
  /** 角色名 */
  Role?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 主题类型UNSPECIFIED:未指定,NORMAL:普通消息,FIFO:顺序消息,DELAY:延时消息,TRANSACTION:事务消息 */
  TopicType: string;
  /** 队列数量 */
  QueueNum: number;
  /** 备注 */
  Remark?: string;
  /** 消息保留时长 */
  MsgTTL?: number;
  /** 标签列表 */
  TagList?: Tag[];
}

declare interface CreateTopicResponse {
  /** 集群ID */
  InstanceId?: string;
  /** 主题名 */
  Topic?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConsumerGroupRequest {
  /** 集群ID */
  InstanceId: string;
  /** 消费组名称 */
  ConsumerGroup?: string;
}

declare interface DeleteConsumerGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DeleteInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMQTTInsPublicEndpointRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DeleteMQTTInsPublicEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMQTTInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DeleteMQTTInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMQTTTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
}

declare interface DeleteMQTTTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMQTTUserRequest {
  /** 集群ID */
  InstanceId: string;
  /** 用户名 */
  Username: string;
}

declare interface DeleteMQTTUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRoleRequest {
  /** 集群ID */
  InstanceId: string;
  /** 角色名称 */
  Role: string;
}

declare interface DeleteRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSmoothMigrationTaskRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
}

declare interface DeleteSmoothMigrationTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
}

declare interface DeleteTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumerClientRequest {
  /** 集群ID */
  InstanceId: string;
  /** 客户端ID */
  ClientId: string;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 消费组名称 */
  ConsumerGroup?: string;
}

declare interface DescribeConsumerClientResponse {
  /** 客户端详情 */
  Client?: ConsumerClient | null;
  /** 主题消费信息 */
  TopicList?: TopicConsumeStats[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumerGroupListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 查询指定主题下的消费组 */
  FromTopic?: string;
}

declare interface DescribeConsumerGroupListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 消费组列表 */
  Data?: ConsumeGroupItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumerGroupRequest {
  /** 集群ID */
  InstanceId: string;
  /** 消费组名称 */
  ConsumerGroup?: string;
}

declare interface DescribeConsumerGroupResponse {
  /** 在线消费者数量 */
  ConsumerNum?: number;
  /** TPS */
  Tps?: number;
  /** 消息堆积数量 */
  ConsumerLag?: number;
  /** 消费者类型 */
  ConsumeType?: string;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 顺序投递：true并发投递：false */
  ConsumeMessageOrderly?: boolean;
  /** 是否开启消费 */
  ConsumeEnable?: boolean;
  /** 最大重试次数 */
  MaxRetryTimes?: number;
  /** 备注 */
  Remark?: string;
  /** 消费模式：BROADCASTING 广播模式CLUSTERING 集群模式 */
  MessageModel?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumerLagRequest {
  /** 集群ID */
  InstanceId: string;
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 命名空间，4.x集群必填 */
  Namespace?: string;
  /** 订阅主题，不为空则查询订阅了该主题的消费组的堆积 */
  SubscribeTopic?: string;
}

declare interface DescribeConsumerLagResponse {
  /** 堆积数 */
  ConsumerLag?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFusionInstanceListRequest {
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 标签过滤器 */
  TagFilters?: TagFilter[];
}

declare interface DescribeFusionInstanceListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 实例列表 */
  Data?: FusionInstanceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 标签过滤器 */
  TagFilters?: TagFilter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeInstanceListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 实例列表 */
  Data?: InstanceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DescribeInstanceResponse {
  /** 实例类型，EXPERIMENT 体验版BASIC 基础版PRO 专业版PLATINUM 铂金版 */
  InstanceType?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 主题数量 */
  TopicNum?: number;
  /** 实例最大主题数量 */
  TopicNumLimit?: number;
  /** 消费组数量 */
  GroupNum?: number;
  /** 实例最大消费组数量 */
  GroupNumLimit?: number;
  /** 消息保留时间，小时为单位 */
  MessageRetention?: number;
  /** 最大可调整消息保留时间，小时为单位 */
  RetentionUpperLimit?: number;
  /** 最小可调整消息保留时间，小时为单位 */
  RetentionLowerLimit?: number;
  /** TPS限流值 */
  TpsLimit?: number;
  /** 弹性TPS限流值 */
  ScaledTpsLimit?: number;
  /** 延迟消息最长时间，小时为单位 */
  MaxMessageDelay?: number;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 消息发送接收比例 */
  SendReceiveRatio?: number;
  /** 标签 */
  TagList?: Tag[] | null;
  /** 接入点列表 */
  EndpointList?: Endpoint[] | null;
  /** 主题队列数上限 */
  TopicQueueNumUpperLimit?: number;
  /** 主题队列数下限 */
  TopicQueueNumLowerLimit?: number;
  /** 备注信息 */
  Remark?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 实例规格 */
  SkuCode?: string;
  /** 计费模式 */
  PayMode?: string;
  /** 是否开启弹性TPS */
  ScaledTpsEnabled?: boolean;
  /** 是否自动续费 */
  RenewFlag?: number;
  /** 到期时间 */
  ExpiryTime?: number;
  /** 角色数量限制 */
  RoleNumLimit?: number;
  /** 是否开启 ACL */
  AclEnabled?: boolean | null;
  /** topic个数免费额度 */
  TopicNumLowerLimit?: number | null;
  /** 最大可设置的topic个数 */
  TopicNumUpperLimit?: number | null;
  /** 可用区列表 */
  ZoneIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTClientRequest {
  /** 实例ID */
  InstanceId: string;
  /** 客户端详情 */
  ClientId: string;
}

declare interface DescribeMQTTClientResponse {
  /** 客户端唯一标识 */
  ClientId?: string;
  /** 客户端网络地址 */
  ClientAddress?: string;
  /** MQTT 协议版本，4 表示 MQTT 3.1.1 */
  ProtocolVersion?: number;
  /** 保持连接时间，单位：秒 */
  Keepalive?: number;
  /** 连接状态，CONNECTED 已连接，DISCONNECTED 未连接 */
  ConnectionStatus?: string;
  /** 客户端创建时间 */
  CreateTime?: number;
  /** 上次建立连接时间 */
  ConnectTime?: number;
  /** 上次断开连接时间，仅对持久会话（cleanSession=false）并且客户端当前未连接时有意义 */
  DisconnectTime?: number;
  /** 客户端的订阅列表 */
  MQTTClientSubscriptions?: MQTTClientSubscription[];
  /** 服务端到客户端的流量统计 */
  Inbound?: StatisticsReport;
  /** 客户端到服务端的流量统计 */
  OutBound?: StatisticsReport;
  /** cleansession标志 */
  CleanSession?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTInsPublicEndpointsRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DescribeMQTTInsPublicEndpointsResponse {
  /** 接入点 */
  Endpoints?: MQTTEndpointItem[];
  /** 实例id */
  InstanceId?: string;
  /** 带宽 */
  Bandwidth?: number;
  /** 公网访问规则 */
  Rules?: PublicAccessRule[];
  /** 公网状态： NORMAL-正常 CLOSING-关闭中 MODIFYING-修改中 CREATING-开启中 CLOSE-关闭 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTInsVPCEndpointsRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeMQTTInsVPCEndpointsResponse {
  /** 接入点 */
  Endpoints?: MQTTEndpointItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTInstanceCertRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DescribeMQTTInstanceCertResponse {
  /** 集群id */
  InstanceId?: string | null;
  /** 服务端证书id */
  SSLServerCertId?: string | null;
  /** CA证书id */
  SSLCaCertId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTInstanceListRequest {
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 是否包含新控制台集群：默认为包含 */
  IncludeNew?: boolean;
}

declare interface DescribeMQTTInstanceListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 实例列表 */
  Data?: MQTTInstanceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTInstanceRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DescribeMQTTInstanceResponse {
  /** 实例类型，EXPERIMENT 体验版BASIC 基础版PRO 专业版PLATINUM 铂金版 */
  InstanceType?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 主题数量 */
  TopicNum?: number;
  /** 实例最大主题数量 */
  TopicNumLimit?: number;
  /** TPS限流值 */
  TpsLimit?: number;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 备注信息 */
  Remark?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 实例规格 */
  SkuCode?: string;
  /** 订阅数上限 */
  SubscriptionNumLimit?: number;
  /** 客户端数量上限 */
  ClientNumLimit?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTMessageListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 请求任务id */
  TaskRequestId: string;
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeMQTTMessageListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 消息记录列表 */
  Data?: MQTTMessageItem[] | null;
  /** 请求任务id */
  TaskRequestId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTMessageRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 消息ID */
  MsgId: string;
}

declare interface DescribeMQTTMessageResponse {
  /** 消息体 */
  Body?: string;
  /** 详情参数 */
  Properties?: CustomMapEntry[];
  /** 生产时间 */
  ProduceTime?: string;
  /** 消息ID */
  MessageId?: string | null;
  /** 生产者地址 */
  ProducerAddr?: string;
  /** Topic */
  ShowTopicName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTProductSKUListRequest {
}

declare interface DescribeMQTTProductSKUListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** mqtt商品配置信息 */
  MQTTProductSkuList?: MQTTProductSkuItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTTopicListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeMQTTTopicListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 主题列表 */
  Data?: MQTTTopicItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
}

declare interface DescribeMQTTTopicResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 主题名称 */
  Topic?: string;
  /** 备注 */
  Remark?: string;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMQTTUserListRequest {
  /** 实例ID */
  InstanceId: string;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeMQTTUserListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 角色信息列表 */
  Data?: MQTTUserItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 一次查询标识 */
  TaskRequestId: string;
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 消息 ID */
  MsgId?: string;
  /** 消息 Key */
  MsgKey?: string;
  /** 查询最近N条消息 最大不超过1024，默认-1为其他查询条件 */
  RecentMessageNum?: number;
  /** 是否查询死信消息 */
  QueryDeadLetterMessage?: boolean;
  /** 消息 Tag */
  Tag?: string;
}

declare interface DescribeMessageListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 消息记录列表 */
  Data?: MessageItem[] | null;
  /** 一次查询ID */
  TaskRequestId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 消息ID */
  MsgId: string;
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 是否是死信消息 */
  QueryDeadLetterMessage?: boolean;
  /** 是否是延时消息 */
  QueryDelayMessage?: boolean;
}

declare interface DescribeMessageResponse {
  /** 消息体 */
  Body?: string;
  /** 详情参数 */
  Properties?: string;
  /** 生产时间 */
  ProduceTime?: string;
  /** 消息ID */
  MessageId?: string | null;
  /** 生产者地址 */
  ProducerAddr?: string;
  /** 消息消费情况列表 */
  MessageTracks?: MessageTrackItem[] | null;
  /** Topic */
  ShowTopicName?: string;
  /** 消息消费情况列表总条数 */
  MessageTracksCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageTraceRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 消息ID */
  MsgId: string;
  /** 是否是死信消息 */
  QueryDeadLetterMessage?: boolean;
  /** 是否是延时消息 */
  QueryDelayMessage?: boolean;
}

declare interface DescribeMessageTraceResponse {
  /** 展示Topic名 */
  ShowTopicName?: string;
  /** 轨迹详情 */
  Data?: MessageTraceItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigratingGroupStatsRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 消费组名称，可在[DescribeSourceClusterGroupList](https://cloud.tencent.com/document/api/1493/118006)接口返回的[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031)或控制台中获取。 */
  GroupName: string;
  /** 命名空间，仅迁移至4.x集群有效，可在[DescribeSourceClusterGroupList](https://cloud.tencent.com/document/api/1493/118006)接口返回的[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031)或控制台中获取。 */
  Namespace?: string;
}

declare interface DescribeMigratingGroupStatsResponse {
  /** 源集群消费组堆积 */
  SourceConsumeLag?: number;
  /** 目标集群消费组堆积 */
  TargetConsumeLag?: number;
  /** 源集群连接客户端列表 */
  SourceConsumerClients?: ConsumerClient[];
  /** 目标集群连接客户端列表 */
  TargetConsumerClients?: ConsumerClient[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigratingTopicListRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 查询结果限制数量，默认20。 */
  Limit?: number;
  /** 查询起始位置，默认为0。 */
  Offset?: number;
  /** 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。 */
  Filters?: Filter[];
}

declare interface DescribeMigratingTopicListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 主题列表 */
  MigrateTopics?: MigratingTopic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigratingTopicStatsRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  TopicName: string;
  /** 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  Namespace?: string;
}

declare interface DescribeMigratingTopicStatsResponse {
  /** 源集群的消费者数量 */
  SourceClusterConsumerCount?: number;
  /** 目标集群的消费者数量 */
  TargetClusterConsumerCount?: number;
  /** 源集群消费组列表 */
  SourceClusterConsumerGroups?: string[];
  /** 目标集群消费组列表 */
  TargetClusterConsumerGroups?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationTaskListRequest {
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeMigrationTaskListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 迁移任务列表 */
  Tasks?: MigrationTaskItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductSKUsRequest {
}

declare interface DescribeProductSKUsResponse {
  /** 商品配置信息 */
  Data?: ProductSKU[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoleListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 查询条件列表 */
  Filters?: Filter[];
}

declare interface DescribeRoleListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 角色信息列表 */
  Data?: RoleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmoothMigrationTaskListRequest {
  /** 查询结果限制数量，默认20。 */
  Limit?: number;
  /** 查询起始位置，默认为0。 */
  Offset?: number;
  /** 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。 */
  Filters?: Filter[];
}

declare interface DescribeSmoothMigrationTaskListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 任务列表 */
  Data?: SmoothMigrationTaskItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSourceClusterGroupListRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 查询结果限制数量，默认20。 */
  Limit?: number;
  /** 查询起始位置，默认为0。 */
  Offset?: number;
  /** 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。 */
  Filters?: Filter[];
}

declare interface DescribeSourceClusterGroupListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 消费组配置列表 */
  Groups?: SourceClusterGroupConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicListByGroupRequest {
  /** 集群ID */
  InstanceId: string;
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 查询条件列表 */
  Filters?: Filter[];
}

declare interface DescribeTopicListByGroupResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 主题列表 */
  Data?: SubscriptionData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeTopicListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 主题列表 */
  Data?: TopicItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeTopicResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 主题名称 */
  Topic?: string;
  /** 主题类型UNSPECIFIED:未指定,NORMAL:普通消息,FIFO:顺序消息,DELAY:延时消息,TRANSACTION:事务消息 */
  TopicType?: string;
  /** 备注 */
  Remark?: string;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 最后写入时间，秒为单位 */
  LastUpdateTime?: number;
  /** 订阅数量 */
  SubscriptionCount?: number;
  /** 订阅关系列表 */
  SubscriptionData?: SubscriptionData[];
  /** 消息保留时长 */
  MsgTTL?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DoHealthCheckOnMigratingTopicRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  TopicName: string;
  /** 必填，是否忽略当前检查 */
  IgnoreCheck?: boolean;
  /** 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  Namespace?: string;
}

declare interface DoHealthCheckOnMigratingTopicResponse {
  /** 是否通过 */
  Passed?: boolean;
  /** 健康检查返回的错误信息NotChecked 未执行检查， Unknown 未知错误, TopicNotImported 主题未导入,TopicNotExistsInSourceCluster 主题在源集群中不存在, TopicNotExistsInTargetCluster 主题在目标集群中不存在, ConsumerConnectedOnTarget 目标集群上存在消费者连接, SourceTopicHasNewMessagesIn5Minutes 源集群主题前5分钟内有新消息写入, TargetTopicHasNewMessagesIn5Minutes 目标集群主题前5分钟内有新消息写入, SourceTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, TargetTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, ConsumerGroupCountNotMatch 订阅组数量不一致, SourceTopicHasUnconsumedMessages 源集群主题存在未消费消息。 */
  Reason?: string | null;
  /** 健康检查返回的错误信息列表 */
  ReasonList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportSourceClusterConsumerGroupsRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 待导入的消费组列表 */
  GroupList: SourceClusterGroupConfig[];
}

declare interface ImportSourceClusterConsumerGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportSourceClusterTopicsRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 待导入的主题列表 */
  TopicList: SourceClusterTopicConfig[];
}

declare interface ImportSourceClusterTopicsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConsumerGroupRequest {
  /** 集群ID */
  InstanceId: string;
  /** 消费组名称 */
  ConsumerGroup?: string;
  /** 是否开启消费 */
  ConsumeEnable?: boolean;
  /** 顺序投递：true并发投递：false */
  ConsumeMessageOrderly?: boolean;
  /** 最大重试次数 */
  MaxRetryTimes?: number;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyConsumerGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceEndpointRequest {
  /** 集群ID */
  InstanceId: string;
  /** 接入点类型，PUBLIC 公网 */
  Type: string;
  /** 公网带宽，Mbps为单位 */
  Bandwidth?: number;
  /** 公网安全组信息 */
  IpRules?: IpRule[];
  /** 公网是否按流量计费 */
  BillingFlow?: boolean;
}

declare interface ModifyInstanceEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 集群ID */
  InstanceId: string;
  /** 实例名称 */
  Name?: string;
  /** 备注信息 */
  Remark?: string;
  /** 消息发送和接收的比例 */
  SendReceiveRatio?: number;
  /** 调整实例规格的商品代号 */
  SkuCode?: string;
  /** 消息保留时长，小时为单位 */
  MessageRetention?: number;
  /** 是否开启弹性TPS */
  ScaledTpsEnabled?: boolean;
  /** 是否开启ACL */
  AclEnabled?: boolean;
  /** 最大可创建主题数 */
  MaxTopicNum?: number;
  /** 免费额度之外的主题个数 */
  ExtraTopicNum?: string;
  /** 是否开启删除保护 */
  EnableDeletionProtection?: boolean;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMQTTInsPublicEndpointRequest {
  /** 集群ID */
  InstanceId: string;
  /** 带宽 */
  Bandwidth: number;
  /** 公网访问规则 */
  Rules: PublicAccessRule[];
}

declare interface ModifyMQTTInsPublicEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMQTTInstanceCertBindingRequest {
  /** 集群ID */
  InstanceId: string;
  /** 服务端证书id */
  SSLServerCertId: string;
  /** CA证书id */
  SSLCaCertId: string;
}

declare interface ModifyMQTTInstanceCertBindingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMQTTInstanceRequest {
  /** 集群ID */
  InstanceId: string;
  /** 实例名称 */
  Name?: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface ModifyMQTTInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMQTTTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface ModifyMQTTTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMQTTUserRequest {
  /** 集群ID */
  InstanceId: string;
  /** 用户名 */
  Username: string;
  /** 是否开启消费 */
  PermRead: boolean;
  /** 是否开启生产 */
  PermWrite: boolean;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyMQTTUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRoleRequest {
  /** 集群ID */
  InstanceId: string;
  /** 角色名称 */
  Role: string;
  /** 是否开启消费 */
  PermRead: boolean;
  /** 是否开启生产 */
  PermWrite: boolean;
  /** 权限类型，默认按集群授权（Cluster：集群维度；TopicAndGroup：主题和消费组维度） */
  PermType?: string;
  /** 备注 */
  Remark?: string;
  /** Topic&Group维度权限配置 */
  DetailedPerms?: DetailedRolePerm[];
}

declare interface ModifyRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 队列数量 */
  QueueNum?: number;
  /** 备注信息 */
  Remark?: string;
  /** 消息保留时长 */
  MsgTTL?: number;
}

declare interface ModifyTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveMigratingTopicRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 消费组名称，可在[DescribeSourceClusterGroupList](https://cloud.tencent.com/document/api/1493/118006)接口返回的[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031)或控制台中获取。 */
  TopicName: string;
  /** 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  Namespace?: string;
}

declare interface RemoveMigratingTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResendDeadLetterMessageRequest {
  /** 集群ID */
  InstanceId: string;
  /** 死信消息ID列表 */
  MessageIds: string[];
  /** 消费组名称 */
  ConsumerGroup?: string;
}

declare interface ResendDeadLetterMessageResponse {
  /** 重发消息结果 */
  ResendResult?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetConsumerGroupOffsetRequest {
  /** 集群ID */
  InstanceId: string;
  /** 主题名称 */
  Topic: string;
  /** 重置位点时间（单位：毫秒）-1表示重置到最新位点 */
  ResetTimestamp: number;
  /** 消费组名称 */
  ConsumerGroup?: string;
}

declare interface ResetConsumerGroupOffsetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackMigratingTopicStageRequest {
  /** 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031)或控制台中获得。 */
  TaskId: string;
  /** 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  TopicName: string;
  /** 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031)数据结构中获得。 */
  Namespace?: string;
}

declare interface RollbackMigratingTopicStageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Trocket 消息队列 RocketMQ 版} */
declare interface Trocket {
  (): Versions;
  /** 平滑迁移：修改迁移中的Topic状态进入下一步 {@link ChangeMigratingTopicToNextStageRequest} {@link ChangeMigratingTopicToNextStageResponse} */
  ChangeMigratingTopicToNextStage(data: ChangeMigratingTopicToNextStageRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeMigratingTopicToNextStageResponse>;
  /** 创建消费组 {@link CreateConsumerGroupRequest} {@link CreateConsumerGroupResponse} */
  CreateConsumerGroup(data: CreateConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsumerGroupResponse>;
  /** 创建集群 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 为MQTT实例创建公网接入点 {@link CreateMQTTInsPublicEndpointRequest} {@link CreateMQTTInsPublicEndpointResponse} */
  CreateMQTTInsPublicEndpoint(data: CreateMQTTInsPublicEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMQTTInsPublicEndpointResponse>;
  /** 购买MQTT实例 {@link CreateMQTTInstanceRequest} {@link CreateMQTTInstanceResponse} */
  CreateMQTTInstance(data: CreateMQTTInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMQTTInstanceResponse>;
  /** 创建MQTT主题 {@link CreateMQTTTopicRequest} {@link CreateMQTTTopicResponse} */
  CreateMQTTTopic(data: CreateMQTTTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMQTTTopicResponse>;
  /** 添加MQTT角色 {@link CreateMQTTUserRequest} {@link CreateMQTTUserResponse} */
  CreateMQTTUser(data: CreateMQTTUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMQTTUserResponse>;
  /** 创建角色 {@link CreateRoleRequest} {@link CreateRoleResponse} */
  CreateRole(data: CreateRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleResponse>;
  /** 创建主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 删除消费组 {@link DeleteConsumerGroupRequest} {@link DeleteConsumerGroupResponse} */
  DeleteConsumerGroup(data: DeleteConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConsumerGroupResponse>;
  /** 删除集群 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 删除MQTT实例的公网接入点 {@link DeleteMQTTInsPublicEndpointRequest} {@link DeleteMQTTInsPublicEndpointResponse} */
  DeleteMQTTInsPublicEndpoint(data: DeleteMQTTInsPublicEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMQTTInsPublicEndpointResponse>;
  /** 删除MQTT实例 {@link DeleteMQTTInstanceRequest} {@link DeleteMQTTInstanceResponse} */
  DeleteMQTTInstance(data: DeleteMQTTInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMQTTInstanceResponse>;
  /** 删除MQTT主题 {@link DeleteMQTTTopicRequest} {@link DeleteMQTTTopicResponse} */
  DeleteMQTTTopic(data: DeleteMQTTTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMQTTTopicResponse>;
  /** 删除MQTT角色 {@link DeleteMQTTUserRequest} {@link DeleteMQTTUserResponse} */
  DeleteMQTTUser(data: DeleteMQTTUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMQTTUserResponse>;
  /** 删除角色 {@link DeleteRoleRequest} {@link DeleteRoleResponse} */
  DeleteRole(data: DeleteRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoleResponse>;
  /** 删除平滑迁移任务 {@link DeleteSmoothMigrationTaskRequest} {@link DeleteSmoothMigrationTaskResponse} */
  DeleteSmoothMigrationTask(data: DeleteSmoothMigrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSmoothMigrationTaskResponse>;
  /** 删除主题 {@link DeleteTopicRequest} {@link DeleteTopicResponse} */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** 查询消费者客户端详情 {@link DescribeConsumerClientRequest} {@link DescribeConsumerClientResponse} */
  DescribeConsumerClient(data: DescribeConsumerClientRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerClientResponse>;
  /** 查询消费组详情 {@link DescribeConsumerGroupRequest} {@link DescribeConsumerGroupResponse} */
  DescribeConsumerGroup(data: DescribeConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerGroupResponse>;
  /** 查询消费组列表 {@link DescribeConsumerGroupListRequest} {@link DescribeConsumerGroupListResponse} */
  DescribeConsumerGroupList(data: DescribeConsumerGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerGroupListResponse>;
  /** 查询指定消费组堆积数 {@link DescribeConsumerLagRequest} {@link DescribeConsumerLagResponse} */
  DescribeConsumerLag(data: DescribeConsumerLagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerLagResponse>;
  /** 查询集群列表 {@link DescribeFusionInstanceListRequest} {@link DescribeFusionInstanceListResponse} */
  DescribeFusionInstanceList(data?: DescribeFusionInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFusionInstanceListResponse>;
  /** 查询集群信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 查询 5.X 集群列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data?: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 查询 MQTT 客户端详情 {@link DescribeMQTTClientRequest} {@link DescribeMQTTClientResponse} */
  DescribeMQTTClient(data: DescribeMQTTClientRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTClientResponse>;
  /** 查询MQTT实例公网接入点 {@link DescribeMQTTInsPublicEndpointsRequest} {@link DescribeMQTTInsPublicEndpointsResponse} */
  DescribeMQTTInsPublicEndpoints(data: DescribeMQTTInsPublicEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTInsPublicEndpointsResponse>;
  /** 查询MQTT实例VPC接入点 {@link DescribeMQTTInsVPCEndpointsRequest} {@link DescribeMQTTInsVPCEndpointsResponse} */
  DescribeMQTTInsVPCEndpoints(data: DescribeMQTTInsVPCEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTInsVPCEndpointsResponse>;
  /** 查询MQTT实例详情信息 {@link DescribeMQTTInstanceRequest} {@link DescribeMQTTInstanceResponse} */
  DescribeMQTTInstance(data: DescribeMQTTInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTInstanceResponse>;
  /** 查询MQTT集群证书列表 {@link DescribeMQTTInstanceCertRequest} {@link DescribeMQTTInstanceCertResponse} */
  DescribeMQTTInstanceCert(data: DescribeMQTTInstanceCertRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTInstanceCertResponse>;
  /** 获取MQTT实例列表 {@link DescribeMQTTInstanceListRequest} {@link DescribeMQTTInstanceListResponse} */
  DescribeMQTTInstanceList(data?: DescribeMQTTInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTInstanceListResponse>;
  /** 查询MQTT消息 {@link DescribeMQTTMessageRequest} {@link DescribeMQTTMessageResponse} */
  DescribeMQTTMessage(data: DescribeMQTTMessageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTMessageResponse>;
  /** 查询MQTT消息列表 {@link DescribeMQTTMessageListRequest} {@link DescribeMQTTMessageListResponse} */
  DescribeMQTTMessageList(data: DescribeMQTTMessageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTMessageListResponse>;
  /** 获取MQTT产品售卖规格 {@link DescribeMQTTProductSKUListRequest} {@link DescribeMQTTProductSKUListResponse} */
  DescribeMQTTProductSKUList(data?: DescribeMQTTProductSKUListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTProductSKUListResponse>;
  /** 查询MQTT主题详情 {@link DescribeMQTTTopicRequest} {@link DescribeMQTTTopicResponse} */
  DescribeMQTTTopic(data: DescribeMQTTTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTTopicResponse>;
  /** 查询MQTT主题列表 {@link DescribeMQTTTopicListRequest} {@link DescribeMQTTTopicListResponse} */
  DescribeMQTTTopicList(data: DescribeMQTTTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTTopicListResponse>;
  /** 查询MQTT用户列表 {@link DescribeMQTTUserListRequest} {@link DescribeMQTTUserListResponse} */
  DescribeMQTTUserList(data: DescribeMQTTUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMQTTUserListResponse>;
  /** 查询消息详情 {@link DescribeMessageRequest} {@link DescribeMessageResponse} */
  DescribeMessage(data: DescribeMessageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageResponse>;
  /** 查询消息列表 {@link DescribeMessageListRequest} {@link DescribeMessageListResponse} */
  DescribeMessageList(data: DescribeMessageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageListResponse>;
  /** 查询消息轨迹 {@link DescribeMessageTraceRequest} {@link DescribeMessageTraceResponse} */
  DescribeMessageTrace(data: DescribeMessageTraceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageTraceResponse>;
  /** 查看迁移消费组的实时数据 {@link DescribeMigratingGroupStatsRequest} {@link DescribeMigratingGroupStatsResponse} */
  DescribeMigratingGroupStats(data: DescribeMigratingGroupStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigratingGroupStatsResponse>;
  /** 平滑迁移：查询Topic迁移状态列表 {@link DescribeMigratingTopicListRequest} {@link DescribeMigratingTopicListResponse} */
  DescribeMigratingTopicList(data: DescribeMigratingTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigratingTopicListResponse>;
  /** 查询迁移主题的实时数据 {@link DescribeMigratingTopicStatsRequest} {@link DescribeMigratingTopicStatsResponse} */
  DescribeMigratingTopicStats(data: DescribeMigratingTopicStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigratingTopicStatsResponse>;
  /** 获取数据迁移任务列表 {@link DescribeMigrationTaskListRequest} {@link DescribeMigrationTaskListResponse} */
  DescribeMigrationTaskList(data?: DescribeMigrationTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationTaskListResponse>;
  /** 查询产品售卖规格 {@link DescribeProductSKUsRequest} {@link DescribeProductSKUsResponse} */
  DescribeProductSKUs(data?: DescribeProductSKUsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductSKUsResponse>;
  /** 查询角色列表 {@link DescribeRoleListRequest} {@link DescribeRoleListResponse} */
  DescribeRoleList(data: DescribeRoleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoleListResponse>;
  /** 查询平滑迁移任务列表 {@link DescribeSmoothMigrationTaskListRequest} {@link DescribeSmoothMigrationTaskListResponse} */
  DescribeSmoothMigrationTaskList(data?: DescribeSmoothMigrationTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmoothMigrationTaskListResponse>;
  /** 平滑迁移：获取源集群的group列表 {@link DescribeSourceClusterGroupListRequest} {@link DescribeSourceClusterGroupListResponse} */
  DescribeSourceClusterGroupList(data: DescribeSourceClusterGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSourceClusterGroupListResponse>;
  /** 查询主题详情 {@link DescribeTopicRequest} {@link DescribeTopicResponse} */
  DescribeTopic(data: DescribeTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicResponse>;
  /** 查询主题列表 {@link DescribeTopicListRequest} {@link DescribeTopicListResponse} */
  DescribeTopicList(data: DescribeTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicListResponse>;
  /** 查询消费组订阅的主题列表 {@link DescribeTopicListByGroupRequest} {@link DescribeTopicListByGroupResponse} */
  DescribeTopicListByGroup(data: DescribeTopicListByGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicListByGroupResponse>;
  /** 迁移主题健康检查 {@link DoHealthCheckOnMigratingTopicRequest} {@link DoHealthCheckOnMigratingTopicResponse} */
  DoHealthCheckOnMigratingTopic(data: DoHealthCheckOnMigratingTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DoHealthCheckOnMigratingTopicResponse>;
  /** 平滑迁移任务导入 Group 元数据 {@link ImportSourceClusterConsumerGroupsRequest} {@link ImportSourceClusterConsumerGroupsResponse} */
  ImportSourceClusterConsumerGroups(data: ImportSourceClusterConsumerGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ImportSourceClusterConsumerGroupsResponse>;
  /** 平滑迁移任务导入 Topic 元数据 {@link ImportSourceClusterTopicsRequest} {@link ImportSourceClusterTopicsResponse} */
  ImportSourceClusterTopics(data: ImportSourceClusterTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<ImportSourceClusterTopicsResponse>;
  /** 修改消费组属性 {@link ModifyConsumerGroupRequest} {@link ModifyConsumerGroupResponse} */
  ModifyConsumerGroup(data: ModifyConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConsumerGroupResponse>;
  /** 修改集群属性 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** 修改集群接入点 {@link ModifyInstanceEndpointRequest} {@link ModifyInstanceEndpointResponse} */
  ModifyInstanceEndpoint(data: ModifyInstanceEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceEndpointResponse>;
  /** 更新MQTT实例公网接入点 {@link ModifyMQTTInsPublicEndpointRequest} {@link ModifyMQTTInsPublicEndpointResponse} */
  ModifyMQTTInsPublicEndpoint(data: ModifyMQTTInsPublicEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMQTTInsPublicEndpointResponse>;
  /** 修改MQTT实例属性 {@link ModifyMQTTInstanceRequest} {@link ModifyMQTTInstanceResponse} */
  ModifyMQTTInstance(data: ModifyMQTTInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMQTTInstanceResponse>;
  /** 更新MQTT集群证书证书 {@link ModifyMQTTInstanceCertBindingRequest} {@link ModifyMQTTInstanceCertBindingResponse} */
  ModifyMQTTInstanceCertBinding(data: ModifyMQTTInstanceCertBindingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMQTTInstanceCertBindingResponse>;
  /** 修改MQTT主题属性 {@link ModifyMQTTTopicRequest} {@link ModifyMQTTTopicResponse} */
  ModifyMQTTTopic(data: ModifyMQTTTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMQTTTopicResponse>;
  /** 修改MQTT角色 {@link ModifyMQTTUserRequest} {@link ModifyMQTTUserResponse} */
  ModifyMQTTUser(data: ModifyMQTTUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMQTTUserResponse>;
  /** 修改角色 {@link ModifyRoleRequest} {@link ModifyRoleResponse} */
  ModifyRole(data: ModifyRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoleResponse>;
  /** 修改主题属性 {@link ModifyTopicRequest} {@link ModifyTopicResponse} */
  ModifyTopic(data: ModifyTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicResponse>;
  /** 移除正在平滑迁移的主题 {@link RemoveMigratingTopicRequest} {@link RemoveMigratingTopicResponse} */
  RemoveMigratingTopic(data: RemoveMigratingTopicRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveMigratingTopicResponse>;
  /** 重新发送死信消息 {@link ResendDeadLetterMessageRequest} {@link ResendDeadLetterMessageResponse} */
  ResendDeadLetterMessage(data: ResendDeadLetterMessageRequest, config?: AxiosRequestConfig): AxiosPromise<ResendDeadLetterMessageResponse>;
  /** 重置消费位点 {@link ResetConsumerGroupOffsetRequest} {@link ResetConsumerGroupOffsetResponse} */
  ResetConsumerGroupOffset(data: ResetConsumerGroupOffsetRequest, config?: AxiosRequestConfig): AxiosPromise<ResetConsumerGroupOffsetResponse>;
  /** 回滚主题迁移进度至上一阶段 {@link RollbackMigratingTopicStageRequest} {@link RollbackMigratingTopicStageResponse} */
  RollbackMigratingTopicStage(data: RollbackMigratingTopicStageRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackMigratingTopicStageResponse>;
}

export declare type Versions = ["2023-03-08"];

export default Trocket;
