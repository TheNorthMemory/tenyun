/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AMQP集群配置 */
declare interface AMQPClusterConfig {
  /** 单Vhost TPS上限 */
  MaxTpsPerVHost: number;
  /** 单Vhost客户端连接数上限 */
  MaxConnNumPerVHost: number;
  /** 最大Vhost数量 */
  MaxVHostNum: number;
  /** 最大exchange数量 */
  MaxExchangeNum: number;
  /** 最大Queue数量 */
  MaxQueueNum: number;
  /** 消息最大保留时间，以毫秒为单位 */
  MaxRetentionTime: number;
  /** 已使用Vhost数量 */
  UsedVHostNum: number;
  /** 已使用exchange数量 */
  UsedExchangeNum: number;
  /** 已使用queue数量 */
  UsedQueueNum: number;
}

/** 租户AMQP集群详细信息 */
declare interface AMQPClusterDetail {
  /** 集群基本信息 */
  Info: AMQPClusterInfo;
  /** 集群配置信息 */
  Config: AMQPClusterConfig;
  /** 标签 */
  Tags: Tag[] | null;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status: number | null;
}

/** AMQP集群基本信息 */
declare interface AMQPClusterInfo {
  /** 集群ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 地域信息 */
  Region: string;
  /** 创建时间，毫秒为单位 */
  CreateTime: number;
  /** 集群说明信息 */
  Remark: string | null;
  /** 公网接入地址 */
  PublicEndPoint: string | null;
  /** VPC接入地址 */
  VpcEndPoint: string | null;
}

/** AMQP集群近期使用量 */
declare interface AMQPClusterRecentStats {
  /** Queue数量 */
  QueueNum: number;
  /** 消息生产数 */
  ProducedMsgNum: number;
  /** 消息堆积数 */
  AccumulativeMsgNum: number;
  /** Exchange数量 */
  ExchangeNum: number;
}

/** AMQP Exchange信息 */
declare interface AMQPExchange {
  /** Exchange名称 */
  Name: string;
  /** Exchange的类别，为枚举类型:Direct, Fanout, Topic */
  Type: string;
  /** 主绑定数 */
  SourceBindedNum: number;
  /** 说明 */
  Remark: string | null;
  /** 被绑定数 */
  DestBindedNum: number;
  /** 创建时间，以毫秒为单位 */
  CreateTime: number;
  /** 创建时间，以毫秒为单位 */
  UpdateTime: number;
  /** 是否为内部Exchange(以amq.前缀开头的) */
  Internal: boolean;
  /** 备用Exchange名称 */
  AlternateExchange: string | null;
  /** 备用Exchange是否删除标识: true(已删除) */
  AlternateExchangeDeleteMark: boolean | null;
  /** 延迟Exchange的类别，为枚举类型:Direct, Fanout, Topic */
  DelayType: string | null;
}

/** AMQP 队列信息 */
declare interface AMQPQueueDetail {
  /** Queue名称 */
  Name: string;
  /** 说明 */
  Remark: string | null;
  /** 被绑定数 */
  DestBindedNum: number | null;
  /** 创建时间，以毫秒为单位 */
  CreateTime: number | null;
  /** 创建时间，以毫秒为单位 */
  UpdateTime: number | null;
  /** 在线消费者数 */
  OnlineConsumerNum: number | null;
  /** 每秒钟的事务数 */
  Tps: number | null;
  /** 消息堆积数 */
  AccumulativeMsgNum: number | null;
  /** 是否自动删除 */
  AutoDelete: boolean | null;
  /** 死信交换机 */
  DeadLetterExchange: string | null;
  /** 死信交换机路由键 */
  DeadLetterRoutingKey: string | null;
  /** Queue对应的Topic名称 */
  TopicName: string | null;
}

/** AMQP路由关系 */
declare interface AMQPRouteRelation {
  /** 路由关系ID */
  RouteRelationId: string;
  /** 源Exchange */
  SourceExchange: string;
  /** 目标类型:Queue|Exchange */
  DestType: string;
  /** 目标值 */
  DestValue: string;
  /** 绑定key */
  RoutingKey: string;
  /** 源路由类型:Direct|Topic|Fanout */
  SourceExchangeType: string;
  /** 创建时间，以毫秒为单位 */
  CreateTime: number;
  /** 修改时间，以毫秒为单位 */
  UpdateTime: number;
  /** 说明信息 */
  Remark: string | null;
}

/** vhostd信息 */
declare interface AMQPVHost {
  /** 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  VHostId: string;
  /** 未消费消息的保留时间，以毫秒单位，范围60秒到15天 */
  MsgTtl: number;
  /** 备注 */
  Remark: string | null;
  /** 创建时间，以毫秒为单位 */
  CreateTime: number;
  /** 更新时间，以毫秒为单位 */
  UpdateTime: number;
  /** 用户名 */
  Username: string;
  /** 密码 */
  Password: string;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status: number | null;
}

/** 用户专享集群信息 */
declare interface BindCluster {
  /** 物理集群的名称 */
  ClusterName: string;
}

/** 运营端命名空间bundle实体 */
declare interface BundleSetOpt {
}

/** 集群信息集合 */
declare interface Cluster {
  /** 集群Id。 */
  ClusterId: string;
  /** 集群名称。 */
  ClusterName: string;
  /** 说明信息。 */
  Remark: string;
  /** 接入点数量 */
  EndPointNum: number;
  /** 创建时间 */
  CreateTime: string;
  /** 集群是否健康，1表示健康，0表示异常 */
  Healthy: number;
  /** 集群健康信息 */
  HealthyInfo: string | null;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status: number;
  /** 最大命名空间数量 */
  MaxNamespaceNum: number;
  /** 最大Topic数量 */
  MaxTopicNum: number;
  /** 最大QPS */
  MaxQps: number;
  /** 最大消息保留时间，秒为单位 */
  MessageRetentionTime: number;
  /** 最大存储容量 */
  MaxStorageCapacity: number;
  /** 集群版本 */
  Version: string | null;
  /** 公网访问接入点 */
  PublicEndPoint: string | null;
  /** VPC访问接入点 */
  VpcEndPoint: string | null;
  /** 命名空间数量 */
  NamespaceNum: number | null;
  /** 已使用存储限制，MB为单位 */
  UsedStorageBudget: number | null;
  /** 最大生产消息速率，以条数为单位 */
  MaxPublishRateInMessages: number | null;
  /** 最大推送消息速率，以条数为单位 */
  MaxDispatchRateInMessages: number | null;
  /** 最大生产消息速率，以字节为单位 */
  MaxPublishRateInBytes: number | null;
  /** 最大推送消息速率，以字节为单位 */
  MaxDispatchRateInBytes: number | null;
  /** 已创建主题数 */
  TopicNum: number | null;
  /** 最长消息延时，以秒为单位 */
  MaxMessageDelayInSeconds: number | null;
  /** 是否开启公网访问，不填时默认开启 */
  PublicAccessEnabled: boolean | null;
  /** 标签 */
  Tags: Tag[] | null;
  /** 计费模式：0: 按量计费1: 包年包月 */
  PayMode: number | null;
}

/** cmq DeadLetterPolicy */
declare interface CmqDeadLetterPolicy {
  /** 死信队列。 */
  DeadLetterQueue: string | null;
  /** 死信队列策略。 */
  Policy: number | null;
  /** 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。 */
  MaxTimeToLive: number | null;
  /** 最大接收次数。 */
  MaxReceiveCount: number | null;
}

/** Cmq DeadLetterSource */
declare interface CmqDeadLetterSource {
  /** 消息队列ID。 */
  QueueId: string | null;
  /** 消息队列名字。 */
  QueueName: string | null;
}

/** cmq 批量queue属性信息 */
declare interface CmqQueue {
  /** 消息队列ID。 */
  QueueId: string;
  /** 消息队列名字。 */
  QueueName: string;
  /** 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。 */
  Qps: number | null;
  /** 带宽限制。 */
  Bps: number | null;
  /** 飞行消息最大保留时间。 */
  MaxDelaySeconds: number | null;
  /** 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。 */
  MaxMsgHeapNum: number;
  /** 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。 */
  PollingWaitSeconds: number | null;
  /** 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。 */
  MsgRetentionSeconds: number | null;
  /** 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。 */
  VisibilityTimeout: number | null;
  /** 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。 */
  MaxMsgSize: number | null;
  /** 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。 */
  RewindSeconds: number | null;
  /** 队列的创建时间。返回 Unix 时间戳，精确到毫秒。 */
  CreateTime: number | null;
  /** 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到毫秒。 */
  LastModifyTime: number | null;
  /** 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。 */
  ActiveMsgNum: number | null;
  /** 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。 */
  InactiveMsgNum: number | null;
  /** 延迟消息数。 */
  DelayMsgNum: number | null;
  /** 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。 */
  RewindMsgNum: number | null;
  /** 消息最小未消费时间，单位为秒。 */
  MinMsgTime: number | null;
  /** 事务消息队列。true表示是事务消息，false表示不是事务消息。 */
  Transaction: boolean | null;
  /** 死信队列。 */
  DeadLetterSource: CmqDeadLetterSource[] | null;
  /** 死信队列策略。 */
  DeadLetterPolicy: CmqDeadLetterPolicy | null;
  /** 事务消息策略。 */
  TransactionPolicy: CmqTransactionPolicy | null;
  /** 创建者Uin。 */
  CreateUin: number | null;
  /** 关联的标签。 */
  Tags: Tag[] | null;
  /** 消息轨迹。true表示开启，false表示不开启。 */
  Trace: boolean | null;
  /** 租户id */
  TenantId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status: number | null;
  /** 最大未确认消息数量 */
  MaxUnackedMsgNum: number | null;
  /** 最大消息堆积大小（字节） */
  MaxMsgBacklogSize: number | null;
  /** 队列可回溯存储空间，取值范围1024MB - 10240MB，0表示不开启 */
  RetentionSizeInMB: number | null;
}

/** cmq订阅返回参数 */
declare interface CmqSubscription {
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string | null;
  /** 订阅 ID。订阅 ID 在拉取监控数据时会用到。 */
  SubscriptionId: string | null;
  /** 订阅拥有者的 APPID。 */
  TopicOwner: number | null;
  /** 该订阅待投递的消息数。 */
  MsgCount: number | null;
  /** 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到毫秒。 */
  LastModifyTime: number | null;
  /** 订阅的创建时间。返回 Unix 时间戳，精确到毫秒。 */
  CreateTime: number | null;
  /** 表示订阅接收消息的过滤策略。 */
  BindingKey: string[] | null;
  /** 接收通知的 endpoint，根据协议 protocol 区分：对于 HTTP，endpoint 必须以http://开头，host 可以是域名或 IP；对于 queue，则填 queueName。 */
  Endpoint: string | null;
  /** 描述用户创建订阅时选择的过滤策略：filterType = 1表示用户使用 filterTag 标签过滤filterType = 2表示用户使用 bindingKey 过滤。 */
  FilterTags: string[] | null;
  /** 订阅的协议，目前支持两种协议：HTTP、queue。使用 HTTP 协议，用户需自己搭建接受消息的 Web Server。使用 queue，消息会自动推送到 CMQ queue，用户可以并发地拉取消息。 */
  Protocol: string | null;
  /** 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值有：（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始 1s，后面是 2s，4s，8s...由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。 */
  NotifyStrategy: string | null;
  /** 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 protocol 是 queue，则取值必须为 SIMPLIFIED。如果 protocol 是 HTTP，两个值均可以，默认值是 JSON。 */
  NotifyContentFormat: string | null;
}

/** cmq topic返回信息展示字段 */
declare interface CmqTopic {
  /** 主题的 ID。 */
  TopicId: string | null;
  /** 主题名称。 */
  TopicName: string | null;
  /** 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。 */
  MsgRetentionSeconds: number | null;
  /** 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为65536。 */
  MaxMsgSize: number | null;
  /** 每秒钟发布消息的条数。 */
  Qps: number | null;
  /** 描述用户创建订阅时选择的过滤策略：FilterType = 1表示用户使用 FilterTag 标签过滤;FilterType = 2表示用户使用 BindingKey 过滤。 */
  FilterType: number | null;
  /** 主题的创建时间。返回 Unix 时间戳，精确到毫秒。 */
  CreateTime: number | null;
  /** 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到毫秒。 */
  LastModifyTime: number | null;
  /** 当前该主题中消息数目（消息堆积数）。 */
  MsgCount: number | null;
  /** 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。 */
  CreateUin: number | null;
  /** 关联的标签。 */
  Tags: Tag[] | null;
  /** 消息轨迹。true表示开启，false表示不开启。 */
  Trace: boolean | null;
  /** 租户id */
  TenantId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status: number | null;
  /** 0表示pulsar，1表示rocketmq */
  BrokerType: number | null;
}

/** cmq TransactionPolicy */
declare interface CmqTransactionPolicy {
  /** 第一次回查时间。 */
  FirstQueryInterval: number | null;
  /** 最大查询次数。 */
  MaxQueryCount: number | null;
}

/** 消费者 */
declare interface Consumer {
  /** 消费者开始连接的时间。 */
  ConnectedSince: string | null;
  /** 消费者地址。 */
  ConsumerAddr: string | null;
  /** 消费者名称。 */
  ConsumerName: string | null;
  /** 消费者版本。 */
  ClientVersion: string | null;
  /** 消费者连接的主题分区号 */
  Partition: number | null;
}

/** 消费进度详情 */
declare interface ConsumersSchedule {
  /** 当前分区id。 */
  Partitions: number | null;
  /** 消息数量。 */
  NumberOfEntries: number | null;
  /** 消息积压数量。 */
  MsgBacklog: number | null;
  /** 消费者每秒分发消息的数量之和。 */
  MsgRateOut: string;
  /** 消费者每秒消息的byte。 */
  MsgThroughputOut: string;
  /** 超时丢弃比例。 */
  MsgRateExpired: string | null;
}

/** 命名空间信息 */
declare interface Environment {
  /** 命名空间名称 */
  EnvironmentId: string;
  /** 说明 */
  Remark: string;
  /** 未消费消息过期时间，单位：秒，最大1296000（15天） */
  MsgTTL: number;
  /** 创建时间 */
  CreateTime: string;
  /** 最近修改时间 */
  UpdateTime: string;
  /** 命名空间ID */
  NamespaceId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** Topic数量 */
  TopicNum: number | null;
  /** 消息保留策略 */
  RetentionPolicy: RetentionPolicy | null;
}

/** 环境角色集合 */
declare interface EnvironmentRole {
  /** 环境（命名空间）。 */
  EnvironmentId: string;
  /** 角色名称。 */
  RoleName: string;
  /** 授权项，最多只能包含produce、consume两项的非空字符串数组。 */
  Permissions: string[];
  /** 角色描述。 */
  RoleDescribe: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 更新时间。 */
  UpdateTime: string;
}

/** 过滤参数 */
declare interface Filter {
  /** 过滤参数的名字 */
  Name?: string;
  /** 数值 */
  Values?: string[];
}

/** 过滤订阅列表 */
declare interface FilterSubscription {
  /** 是否仅展示包含真实消费者的订阅。 */
  ConsumerHasCount?: boolean;
  /** 是否仅展示消息堆积的订阅。 */
  ConsumerHasBacklog?: boolean;
  /** 是否仅展示存在消息超期丢弃的订阅。 */
  ConsumerHasExpired?: boolean;
  /** 按照订阅名过滤，精确查询。 */
  SubscriptionNames?: string[];
}

/** 面向运营端的虚拟集群信息 */
declare interface InternalTenant {
  /** 虚拟集群ID */
  TenantId: string;
  /** 虚拟集群名称 */
  TenantName: string;
  /** 客户UIN */
  CustomerUin: string;
  /** 客户的APPID */
  CustomerAppId: string;
  /** 物理集群名称 */
  ClusterName: string;
  /** 集群协议类型，支持的值为TDMQ，ROCKETMQ，AMQP，CMQ */
  Type: string;
  /** 命名空间配额 */
  MaxNamespaces: number;
  /** 已使用命名空间配额 */
  UsedNamespaces: number;
  /** Topic配额 */
  MaxTopics: number;
  /** 已使用Topic配额 */
  UsedTopics: number;
  /** Topic分区数配额 */
  MaxPartitions: number;
  /** 已使用Topic分区数配额 */
  UsedPartitions: number;
  /** 存储配额, byte为单位 */
  MaxMsgBacklogSize: number;
  /** 命名空间最大生产TPS */
  MaxPublishTps: number;
  /** 消息最大保留时间，秒为单位 */
  MaxRetention: number;
  /** 创建时间，毫秒为单位 */
  CreateTime: number;
  /** 修改时间，毫秒为单位 */
  UpdateTime: number;
  /** 命名空间最大消费TPS */
  MaxDispatchTps: number;
  /** 命名空间最大消费带宽，byte为单位 */
  MaxDispatchRateInBytes: number | null;
  /** 命名空间最大生产带宽，byte为单位 */
  MaxPublishRateInBytes: number | null;
  /** 消息最大保留空间，MB为单位 */
  MaxRetentionSizeInMB: number | null;
}

/** 分区topic */
declare interface PartitionsTopic {
  /** 最后一次间隔内发布消息的平均byte大小。 */
  AverageMsgSize: string | null;
  /** 消费者数量。 */
  ConsumerCount: string | null;
  /** 被记录下来的消息总数。 */
  LastConfirmedEntry: string | null;
  /** 最后一个ledger创建的时间。 */
  LastLedgerCreatedTimestamp: string | null;
  /** 本地和复制的发布者每秒发布消息的速率。 */
  MsgRateIn: string | null;
  /** 本地和复制的消费者每秒分发消息的数量之和。 */
  MsgRateOut: string | null;
  /** 本地和复制的发布者每秒发布消息的byte。 */
  MsgThroughputIn: string | null;
  /** 本地和复制的消费者每秒分发消息的byte。 */
  MsgThroughputOut: string | null;
  /** 被记录下来的消息总数。 */
  NumberOfEntries: string | null;
  /** 子分区id。 */
  Partitions: number | null;
  /** 生产者数量。 */
  ProducerCount: string | null;
  /** 以byte计算的所有消息存储总量。 */
  TotalSize: string | null;
  /** topic类型描述。 */
  TopicType: number | null;
}

/** 生产者信息 */
declare interface Publisher {
  /** 生产者id */
  ProducerId: number | null;
  /** 生产者名称 */
  ProducerName: string | null;
  /** 生产者地址 */
  Address: string | null;
  /** 客户端版本 */
  ClientVersion: string | null;
  /** 消息生产速率（条/秒） */
  MsgRateIn: number | null;
  /** 消息生产吞吐速率（字节/秒） */
  MsgThroughputIn: number | null;
  /** 平均消息大小（字节） */
  AverageMsgSize: number | null;
  /** 连接时间 */
  ConnectedSince: string | null;
  /** 生产者连接的主题分区号 */
  Partition: number | null;
}

/** RabbitMQ节点信息 */
declare interface RabbitMQPrivateNode {
  /** 节点名字 */
  NodeName: string | null;
}

/** RabbitMQ专享实例信息 */
declare interface RabbitMQVipInstance {
  /** 实例id */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 实例版本 */
  InstanceVersion: string | null;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败 */
  Status: number;
  /** 节点数量 */
  NodeCount: number;
  /** 实例配置规格名称 */
  ConfigDisplay: string;
  /** 峰值TPS */
  MaxTps: number;
  /** 峰值带宽，Mbps为单位 */
  MaxBandWidth: number;
  /** 存储容量，GB为单位 */
  MaxStorage: number;
  /** 实例到期时间，毫秒为单位 */
  ExpireTime: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag: number;
  /** 0-后付费，1-预付费 */
  PayMode: number;
  /** 备注信息 */
  Remark: string | null;
  /** 实例配置ID */
  SpecName: string;
}

/** 消息保留策略 */
declare interface RetentionPolicy {
  /** 消息保留时长 */
  TimeInMinutes: number;
  /** 消息保留大小 */
  SizeInMB: number;
}

/** RocketMQ集群配置 */
declare interface RocketMQClusterConfig {
  /** 单命名空间TPS上线 */
  MaxTpsPerNamespace: number;
  /** 最大命名空间数量 */
  MaxNamespaceNum: number;
  /** 已使用命名空间数量 */
  UsedNamespaceNum: number;
  /** 最大Topic数量 */
  MaxTopicNum: number;
  /** 已使用Topic数量 */
  UsedTopicNum: number;
  /** 最大Group数量 */
  MaxGroupNum: number;
  /** 已使用Group数量 */
  UsedGroupNum: number;
  /** 消息最大保留时间，以毫秒为单位 */
  MaxRetentionTime: number;
  /** 消息最长延时，以毫秒为单位 */
  MaxLatencyTime: number;
}

/** 租户RocketMQ集群详细信息 */
declare interface RocketMQClusterDetail {
  /** 集群基本信息 */
  Info: RocketMQClusterInfo;
  /** 集群配置信息 */
  Config: RocketMQClusterConfig;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status: number | null;
}

/** RocketMQ集群基本信息 */
declare interface RocketMQClusterInfo {
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 地域信息 */
  Region?: string;
  /** 创建时间，毫秒为单位 */
  CreateTime?: number;
  /** 集群说明信息 */
  Remark?: string | null;
  /** 公网接入地址 */
  PublicEndPoint?: string;
  /** VPC接入地址 */
  VpcEndPoint?: string;
  /** 是否支持命名空间接入点 */
  SupportNamespaceEndpoint?: boolean | null;
  /** VPC信息 */
  Vpcs?: VpcConfig[] | null;
  /** 是否为专享实例 */
  IsVip?: boolean | null;
  /** Rocketmq集群标识 */
  RocketMQFlag?: boolean | null;
  /** 计费状态，1表示正常，2表示已停服，3表示已销毁 */
  Status?: number | null;
  /** 欠费停服时间，毫秒为单位 */
  IsolateTime?: number | null;
  /** HTTP协议公网接入地址 */
  HttpPublicEndpoint?: string | null;
  /** HTTP协议VPC接入地址 */
  HttpVpcEndpoint?: string | null;
}

/** RocketMQ近期使用量 */
declare interface RocketMQClusterRecentStats {
  /** Topic数量 */
  TopicNum: number;
  /** 消息生产数 */
  ProducedMsgNum: number;
  /** 消息消费数 */
  ConsumedMsgNum: number;
  /** 消息堆积数 */
  AccumulativeMsgNum: number;
}

/** RocketMQ消费组信息 */
declare interface RocketMQGroup {
  /** 消费组名称 */
  Name?: string;
  /** 在线消费者数量 */
  ConsumerNum?: number;
  /** 消费TPS */
  TPS?: number;
  /** 总堆积数量 */
  TotalAccumulative?: number;
  /** 0表示集群消费模式，1表示广播消费模式，-1表示未知 */
  ConsumptionMode?: number;
  /** 是否允许消费 */
  ReadEnabled?: boolean;
  /** 重试队列分区数 */
  RetryPartitionNum?: number | null;
  /** 创建时间，以毫秒为单位 */
  CreateTime?: number;
  /** 修改时间，以毫秒为单位 */
  UpdateTime?: number;
  /** 客户端协议 */
  ClientProtocol?: string;
  /** 说明信息 */
  Remark?: string | null;
  /** 消费者类型，枚举值ACTIVELY, PASSIVELY */
  ConsumerType?: string | null;
  /** 是否开启广播消费 */
  BroadcastEnabled?: boolean;
  /** Group类型 */
  GroupType?: string | null;
  /** 重试次数 */
  RetryMaxTimes?: number | null;
}

/** RocketMQ命名空间信息 */
declare interface RocketMQNamespace {
  /** 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  NamespaceId: string;
  /** 未消费消息的保留时间，以毫秒单位，范围60秒到15天 */
  Ttl: number;
  /** 消息持久化后保留的时间，以毫秒单位 */
  RetentionTime: number;
  /** 说明 */
  Remark: string | null;
  /** 公网接入点地址 */
  PublicEndpoint: string | null;
  /** VPC接入点地址 */
  VpcEndpoint: string | null;
}

/** RocketMQ主题信息 */
declare interface RocketMQTopic {
  /** 主题名称 */
  Name: string;
  /** 说明 */
  Remark: string | null;
  /** 读写分区数 */
  PartitionNum: number;
  /** 创建时间，以毫秒为单位 */
  CreateTime: number;
  /** 创建时间，以毫秒为单位 */
  UpdateTime: number;
}

/** RocketMQ专享实例信息 */
declare interface RocketMQVipInstance {
  /** 实例id */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 实例版本 */
  InstanceVersion: string | null;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常 */
  Status: number;
  /** 节点数量 */
  NodeCount: number;
  /** 实例配置规格名称 */
  ConfigDisplay: string;
  /** 峰值TPS */
  MaxTps: number;
  /** 峰值带宽，Mbps为单位 */
  MaxBandWidth: number;
  /** 存储容量，GB为单位 */
  MaxStorage: number;
  /** 实例到期时间，毫秒为单位 */
  ExpireTime: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag: number;
  /** 0-后付费，1-预付费 */
  PayMode: number;
  /** 备注信息 */
  Remark: string | null;
  /** 实例配置ID */
  SpecName: string;
}

/** 角色实例 */
declare interface Role {
  /** 角色名称。 */
  RoleName: string;
  /** 角色token值。 */
  Token: string;
  /** 备注说明。 */
  Remark: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 更新时间。 */
  UpdateTime: string;
}

/** 排序器 */
declare interface Sort {
  /** 排序字段 */
  Name: string;
  /** 升序ASC，降序DESC */
  Order: string;
}

/** 订阅者 */
declare interface Subscription {
  /** 主题名称。 */
  TopicName: string;
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 消费者开始连接的时间。 */
  ConnectedSince: string | null;
  /** 消费者地址。 */
  ConsumerAddr: string | null;
  /** 消费者数量。 */
  ConsumerCount: string | null;
  /** 消费者名称。 */
  ConsumerName: string | null;
  /** 堆积的消息数量。 */
  MsgBacklog: string | null;
  /** 于TTL，此订阅下没有被发送而是被丢弃的比例。 */
  MsgRateExpired: string | null;
  /** 消费者每秒分发消息的数量之和。 */
  MsgRateOut: string | null;
  /** 消费者每秒消息的byte。 */
  MsgThroughputOut: string | null;
  /** 订阅名称。 */
  SubscriptionName: string | null;
  /** 消费者集合。 */
  ConsumerSets: Consumer[] | null;
  /** 是否在线。 */
  IsOnline: boolean | null;
  /** 消费进度集合。 */
  ConsumersScheduleSets: ConsumersSchedule[] | null;
  /** 备注。 */
  Remark: string | null;
  /** 创建时间。 */
  CreateTime: string | null;
  /** 最近修改时间。 */
  UpdateTime: string | null;
  /** 订阅类型，Exclusive，Shared，Failover， Key_Shared，空或NULL表示未知， */
  SubType: string | null;
  /** 是否由于未 ack 数到达上限而被 block */
  BlockedSubscriptionOnUnackedMsgs: boolean | null;
  /** 未 ack 消息数上限 */
  MaxUnackedMsgNum: number | null;
}

/** 订阅关系 */
declare interface SubscriptionTopic {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名称。 */
  TopicName: string;
  /** 订阅名称。 */
  SubscriptionName: string;
}

/** 标签的key/value的类型 */
declare interface Tag {
  /** 标签的key的值 */
  TagKey: string;
  /** 标签的Value的值 */
  TagValue: string;
}

/** 主题实例 */
declare interface Topic {
  /** 最后一次间隔内发布消息的平均byte大小。 */
  AverageMsgSize: string | null;
  /** 消费者数量。 */
  ConsumerCount: string | null;
  /** 被记录下来的消息总数。 */
  LastConfirmedEntry: string | null;
  /** 最后一个ledger创建的时间。 */
  LastLedgerCreatedTimestamp: string | null;
  /** 本地和复制的发布者每秒发布消息的速率。 */
  MsgRateIn: string | null;
  /** 本地和复制的消费者每秒分发消息的数量之和。 */
  MsgRateOut: string | null;
  /** 本地和复制的发布者每秒发布消息的byte。 */
  MsgThroughputIn: string | null;
  /** 本地和复制的消费者每秒分发消息的byte。 */
  MsgThroughputOut: string | null;
  /** 被记录下来的消息总数。 */
  NumberOfEntries: string | null;
  /** 分区数<=0：topic下无子分区。 */
  Partitions: number | null;
  /** 生产者数量。 */
  ProducerCount: string | null;
  /** 以byte计算的所有消息存储总量。 */
  TotalSize: string | null;
  /** 分区topic里面的子分区。 */
  SubTopicSets: PartitionsTopic[] | null;
  /** topic类型描述：0：普通消息；1：全局顺序消息；2：局部顺序消息；3：重试队列；4：死信队列；5：事务消息。 */
  TopicType: number | null;
  /** 环境（命名空间）名称。 */
  EnvironmentId: string | null;
  /** 主题名称。 */
  TopicName: string | null;
  /** 说明，128个字符以内。 */
  Remark: string | null;
  /** 创建时间。 */
  CreateTime: string | null;
  /** 最近修改时间。 */
  UpdateTime: string | null;
  /** 生产者上限。 */
  ProducerLimit: string | null;
  /** 消费者上限。 */
  ConsumerLimit: string | null;
  /** 0: 非持久非分区1: 非持久分区2: 持久非分区3: 持久分区 */
  PulsarTopicType: number | null;
}

/** 主题关键信息 */
declare interface TopicRecord {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名称。 */
  TopicName: string;
}

/** vcp绑定记录 */
declare interface VpcBindRecord {
  /** 租户Vpc Id */
  UniqueVpcId: string;
  /** 租户Vpc子网Id */
  UniqueSubnetId: string;
  /** 路由Id */
  RouterId: string;
  /** Vpc的Id */
  Ip: string;
  /** Vpc的Port */
  Port: number;
  /** 说明，128个字符以内 */
  Remark: string | null;
}

/** VPC配置信息 */
declare interface VpcConfig {
  /** vpc的id */
  VpcId: string;
  /** 子网id */
  SubnetId: string;
}

declare interface AcknowledgeMessageRequest {
  /** 用作标识消息的唯一的ID（可从 receiveMessage 的返回值中获得） */
  MessageId: string;
  /** Topic 名字（可从 receiveMessage 的返回值中获得）这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default */
  AckTopic: string;
  /** 订阅者的名字，可以从receiveMessage的返回值中获取到。这里尽量与receiveMessage中的订阅者保持一致，否则没办法正确ack 接收回来的消息。 */
  SubName: string;
}

declare interface AcknowledgeMessageResponse {
  /** 如果为“”，则说明没有错误返回 */
  ErrorMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ClearCmqQueueRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
}

declare interface ClearCmqQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ClearCmqSubscriptionFilterTagsRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
}

declare interface ClearCmqSubscriptionFilterTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAMQPClusterRequest {
  /** 3-64个字符，只能包含字母、数字、“-”及“_” */
  Name: string;
  /** 集群描述，128个字符以内 */
  Remark?: string;
}

declare interface CreateAMQPClusterResponse {
  /** 集群ID */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAMQPExchangeRequest {
  /** 交换机名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  Exchange: string;
  /** 交换机所在的vhost，目前支持在单个vhost下创建主题 */
  VHosts: string[];
  /** 交换机类型，可选值为Direct, Fanout, Topic, x-delayed-message */
  Type: string;
  /** 集群ID */
  ClusterId: string;
  /** 交换机说明，最大128个字符 */
  Remark?: string;
  /** 备用交换机名称 */
  AlternateExchange?: string;
  /** 延迟交换机类型，可选值为Direct, Fanout, Topic, 不允许为x-delayed-message */
  DelayedType?: string;
}

declare interface CreateAMQPExchangeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAMQPQueueRequest {
  /** 队列名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  Queue: string;
  /** 队列所在的vhost名称 */
  VHostId: string;
  /** 是否自动清除 */
  AutoDelete: boolean;
  /** 集群ID */
  ClusterId: string;
  /** 队列说明，最大128个字符 */
  Remark?: string;
  /** 死信exchange */
  DeadLetterExchange?: string;
  /** 路由键 */
  DeadLetterRoutingKey?: string;
}

declare interface CreateAMQPQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAMQPRouteRelationRequest {
  /** 集群ID */
  ClusterId: string;
  /** 交换机所在的vhost */
  VHostId: string;
  /** 源Exchange名称 */
  SourceExchange: string;
  /** 目标类型:Queue|Exchange */
  DestType: string;
  /** 目标值 */
  DestValue: string;
  /** 交换机说明，最大128个字符 */
  Remark?: string;
  /** 绑定key,缺省值为default */
  RoutingKey?: string;
}

declare interface CreateAMQPRouteRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAMQPVHostRequest {
  /** 集群ID */
  ClusterId: string;
  /** vhost名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  VHostId: string;
  /** 未消费消息的保留时间，以毫秒为单位，60秒-15天 */
  MsgTtl: number;
  /** 说明，最大128个字符 */
  Remark?: string;
}

declare interface CreateAMQPVHostResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** 集群名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。 */
  ClusterName: string;
  /** 用户专享物理集群ID，如果不传，则默认在公共集群上创建用户集群资源。 */
  BindClusterId?: number;
  /** 说明，128个字符以内。 */
  Remark?: string;
  /** 集群的标签列表(已废弃) */
  Tags?: Tag[];
  /** 是否开启公网访问，不填时默认开启 */
  PublicAccessEnabled?: boolean;
}

declare interface CreateClusterResponse {
  /** 集群ID */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCmqQueueRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
  /** 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。 */
  MaxMsgHeapNum?: number;
  /** 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。 */
  PollingWaitSeconds?: number;
  /** 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。 */
  VisibilityTimeout?: number;
  /** 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。 */
  MaxMsgSize?: number;
  /** 消息最长未确认时间。取值范围 30-43200 秒（30秒~12小时），默认值 3600 (1 小时)。 */
  MsgRetentionSeconds?: number;
  /** 队列是否开启回溯消息能力，该参数取值范围0-1296000，0表示不开启。 */
  RewindSeconds?: number;
  /** 1 表示事务队列，0 表示普通队列 */
  Transaction?: number;
  /** 第一次回查间隔 */
  FirstQueryInterval?: number;
  /** 最大回查次数 */
  MaxQueryCount?: number;
  /** 死信队列名称 */
  DeadLetterQueueName?: string;
  /** 死信策略。0为消息被多次消费未删除，1为Time-To-Live过期 */
  Policy?: number;
  /** 最大接收次数 1-1000 */
  MaxReceiveCount?: number;
  /** policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间msgRetentionSeconds */
  MaxTimeToLive?: number;
  /** 是否开启消息轨迹追踪，当不设置字段时，默认为不开启，该字段为true表示开启，为false表示不开启 */
  Trace?: boolean;
  /** 标签数组 */
  Tags?: Tag[];
  /** 队列可回溯存储空间：若开启消息回溯，取值范围：10240MB - 512000MB，若不开启消息回溯，取值：0 */
  RetentionSizeInMB?: number;
}

declare interface CreateCmqQueueResponse {
  /** 创建成功的queueId */
  QueueId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCmqSubscribeRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
  /** 订阅的协议，目前支持两种协议：http、queue。使用http协议，用户需自己搭建接受消息的web server。使用queue，消息会自动推送到CMQ queue，用户可以并发地拉取消息。 */
  Protocol: string;
  /** 接收通知的Endpoint，根据协议Protocol区分：对于http，Endpoint必须以“`http://`”开头，host可以是域名或IP；对于Queue，则填QueueName。 请注意，目前推送服务不能推送到私有网络中，因此Endpoint填写为私有网络域名或地址将接收不到推送的消息，目前支持推送到公网和基础网络。 */
  Endpoint: string;
  /** 向Endpoint推送消息出现错误时，CMQ推送服务器的重试策略。取值有：1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s...由于Topic消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是EXPONENTIAL_DECAY_RETRY。 */
  NotifyStrategy?: string;
  /** 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。 */
  FilterTag?: string[];
  /** BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。 */
  BindingKey?: string[];
  /** 推送内容的格式。取值：1）JSON；2）SIMPLIFIED，即raw格式。如果Protocol是queue，则取值必须为SIMPLIFIED。如果Protocol是http，两个值均可以，默认值是JSON。 */
  NotifyContentFormat?: string;
}

declare interface CreateCmqSubscribeResponse {
  /** 订阅id */
  SubscriptionId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCmqTopicRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。 */
  MaxMsgSize?: number;
  /** 用于指定主题的消息匹配策略。1：表示标签匹配策略；2：表示路由匹配策略，默认值为标签匹配策略。 */
  FilterType?: number;
  /** 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。 */
  MsgRetentionSeconds?: number;
  /** 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。 */
  Trace?: boolean;
  /** 标签数组 */
  Tags?: Tag[];
}

declare interface CreateCmqTopicResponse {
  /** 主题id */
  TopicId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEnvironmentRequest {
  /** 环境（命名空间）名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。 */
  EnvironmentId: string;
  /** 未消费消息过期时间，单位：秒，取值范围：60秒~15天。 */
  MsgTTL: number;
  /** 说明，128个字符以内。 */
  Remark?: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
  /** 消息保留策略 */
  RetentionPolicy?: RetentionPolicy;
}

declare interface CreateEnvironmentResponse {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 未消费消息过期时间，单位：秒。 */
  MsgTTL: number;
  /** 说明，128个字符以内。 */
  Remark: string | null;
  /** 命名空间ID */
  NamespaceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEnvironmentRoleRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 角色名称。 */
  RoleName: string;
  /** 授权项，最多只能包含produce、consume两项的非空字符串数组。 */
  Permissions: string[];
  /** 必填字段，集群的ID */
  ClusterId?: string;
}

declare interface CreateEnvironmentRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRocketMQClusterRequest {
  /** 集群名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  Name: string;
  /** 集群描述，128个字符以内 */
  Remark?: string;
}

declare interface CreateRocketMQClusterResponse {
  /** 集群ID */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRocketMQGroupRequest {
  /** Group名称，8~64个字符 */
  GroupId: string;
  /** 命名空间，目前只支持单个命名空间 */
  Namespaces: string[];
  /** 是否开启消费 */
  ReadEnable: boolean;
  /** 是否开启广播消费 */
  BroadcastEnable: boolean;
  /** 集群ID */
  ClusterId: string;
  /** 说明信息，最长128个字符 */
  Remark?: string;
  /** Group类型（TCP/HTTP） */
  GroupType?: string;
  /** Group最大重试次数 */
  RetryMaxTimes?: number;
}

declare interface CreateRocketMQGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRocketMQNamespaceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  NamespaceId: string;
  /** 未消费消息的保留时间，以毫秒为单位，60秒-15天 */
  Ttl: number;
  /** 消息持久化后保留的时间，以毫秒为单位 */
  RetentionTime: number;
  /** 说明，最大128个字符 */
  Remark?: string;
}

declare interface CreateRocketMQNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRocketMQTopicRequest {
  /** 主题名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  Topic: string;
  /** 主题所在的命名空间，目前支持在单个命名空间下创建主题 */
  Namespaces: string[];
  /** 主题类型，可选值为Normal, GlobalOrder, PartitionedOrder */
  Type: string;
  /** 集群ID */
  ClusterId: string;
  /** 主题说明，最大128个字符 */
  Remark?: string;
  /** 分区数，全局顺序无效 */
  PartitionNum?: number;
}

declare interface CreateRocketMQTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRoleRequest {
  /** 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。 */
  RoleName: string;
  /** 备注说明，长度必须大等于0且小等于128。 */
  Remark?: string;
  /** 必填字段，集群Id */
  ClusterId?: string;
}

declare interface CreateRoleResponse {
  /** 角色名称 */
  RoleName: string;
  /** 角色token */
  Token: string;
  /** 备注说明 */
  Remark: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSubscriptionRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名称。 */
  TopicName: string;
  /** 订阅者名称，不超过128个字符。 */
  SubscriptionName: string;
  /** 是否幂等创建，若否不允许创建同名的订阅关系。 */
  IsIdempotent: boolean;
  /** 备注，128个字符以内。 */
  Remark?: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
  /** 是否自动创建死信和重试主题，True 表示创建，False表示不创建，默认自动创建死信和重试主题。 */
  AutoCreatePolicyTopic?: boolean;
  /** 指定死信和重试主题名称规范，LEGACY表示历史命名规则，COMMUNITY表示Pulsar社区命名规范 */
  PostFixPattern?: string;
}

declare interface CreateSubscriptionResponse {
  /** 创建结果。 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。 */
  TopicName: string;
  /** 入参为1，即是创建非分区topic，无分区；入参大于1，表示分区topic的分区数，最大不允许超过128。 */
  Partitions: number;
  /** 备注，128字符以内。 */
  Remark?: string;
  /** 该入参将逐步弃用，可切换至PulsarTopicType参数0： 普通消息；1 ：全局顺序消息；2 ：局部顺序消息；3 ：重试队列；4 ：死信队列。 */
  TopicType?: number;
  /** Pulsar 集群的ID */
  ClusterId?: string;
  /** Pulsar 主题类型0: 非持久非分区1: 非持久分区2: 持久非分区3: 持久分区 */
  PulsarTopicType?: number;
}

declare interface CreateTopicResponse {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名。 */
  TopicName: string;
  /** 0或1：非分区topic，无分区；大于1：具体分区topic的分区数。（存量非分区主题返回0，增量非分区主题返回1） */
  Partitions: number;
  /** 备注，128字符以内。 */
  Remark: string | null;
  /** 0： 普通消息；1 ：全局顺序消息；2 ：局部顺序消息；3 ：重试队列；4 ：死信队列； */
  TopicType: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAMQPClusterRequest {
  /** 待删除的集群Id。 */
  ClusterId: string;
}

declare interface DeleteAMQPClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAMQPExchangeRequest {
  /** 集群ID */
  ClusterId: string;
  /** Vhost名称 */
  VHostId: string;
  /** 交换机名称 */
  Exchange: string;
}

declare interface DeleteAMQPExchangeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAMQPQueueRequest {
  /** 集群ID */
  ClusterId: string;
  /** Vhost名称 */
  VHostId: string;
  /** 队列名称 */
  Queue: string;
}

declare interface DeleteAMQPQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAMQPRouteRelationRequest {
  /** 集群ID */
  ClusterId: string;
  /** Vhost名称 */
  VHostId: string;
  /** 路由关系ID */
  RouteRelationId: string;
}

declare interface DeleteAMQPRouteRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAMQPVHostRequest {
  /** 集群ID */
  ClusterId: string;
  /** vhost名称 */
  VHostId: string;
}

declare interface DeleteAMQPVHostResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 集群Id，传入需要删除的集群Id。 */
  ClusterId: string;
}

declare interface DeleteClusterResponse {
  /** 集群的ID */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCmqQueueRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
}

declare interface DeleteCmqQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCmqSubscribeRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
}

declare interface DeleteCmqSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCmqTopicRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
}

declare interface DeleteCmqTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEnvironmentRolesRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 角色名称数组。 */
  RoleNames: string[];
  /** 必填字段，集群的ID */
  ClusterId?: string;
}

declare interface DeleteEnvironmentRolesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEnvironmentsRequest {
  /** 环境（命名空间）数组，每次最多删除20个。 */
  EnvironmentIds: string[];
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface DeleteEnvironmentsResponse {
  /** 成功删除的环境（命名空间）数组。 */
  EnvironmentIds: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRocketMQClusterRequest {
  /** 待删除的集群Id。 */
  ClusterId: string;
}

declare interface DeleteRocketMQClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRocketMQGroupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** 消费组名称 */
  GroupId: string;
}

declare interface DeleteRocketMQGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRocketMQNamespaceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
}

declare interface DeleteRocketMQNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRocketMQTopicRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** 主题名称 */
  Topic: string;
}

declare interface DeleteRocketMQTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRolesRequest {
  /** 角色名称数组。 */
  RoleNames: string[];
  /** 必填字段，集群Id */
  ClusterId?: string;
}

declare interface DeleteRolesResponse {
  /** 成功删除的角色名称数组。 */
  RoleNames: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSubscriptionsRequest {
  /** 订阅关系集合，每次最多删除20个。 */
  SubscriptionTopicSets: SubscriptionTopic[];
  /** pulsar集群Id。 */
  ClusterId?: string;
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 是否强制删除，默认为false */
  Force?: boolean;
}

declare interface DeleteSubscriptionsResponse {
  /** 成功删除的订阅关系数组。 */
  SubscriptionTopicSets: SubscriptionTopic[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTopicsRequest {
  /** 主题集合，每次最多删除20个。 */
  TopicSets: TopicRecord[];
  /** pulsar集群Id。 */
  ClusterId?: string;
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 是否强制删除，默认为false */
  Force?: boolean;
}

declare interface DeleteTopicsResponse {
  /** 被删除的主题数组。 */
  TopicSets: TopicRecord[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAMQPClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeAMQPClusterResponse {
  /** 集群信息 */
  ClusterInfo: AMQPClusterInfo;
  /** 集群配置 */
  ClusterConfig: AMQPClusterConfig;
  /** 集群最近使用量 */
  ClusterStats: AMQPClusterRecentStats | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAMQPClustersRequest {
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
  /** 按照集群ID关键字搜索 */
  IdKeyword?: string;
  /** 按照集群名称关键字搜索 */
  NameKeyword?: string;
  /** 集群ID列表过滤 */
  ClusterIdList?: string[];
  /** 标签过滤查找时，需要设置为true */
  IsTagFilter?: boolean;
  /** 过滤器。目前支持按标签过滤。 */
  Filters?: Filter[];
}

declare interface DescribeAMQPClustersResponse {
  /** 集群信息 */
  ClusterList: AMQPClusterDetail[] | null;
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAMQPCreateQuotaRequest {
}

declare interface DescribeAMQPCreateQuotaResponse {
  /** 租户总共可使用集群数量 */
  MaxClusterNum: number;
  /** 租户已创建集群数量 */
  UsedClusterNum: number;
  /** Exchange容量 */
  ExchangeCapacity: number;
  /** Queue容量 */
  QueueCapacity: number;
  /** 单Vhost TPS */
  MaxTpsPerVHost: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAMQPExchangesRequest {
  /** 查询偏移量 */
  Offset: number;
  /** 查询限制数 */
  Limit: number;
  /** 集群ID */
  ClusterId: string;
  /** Vhost ID */
  VHostId: string;
  /** 按路由类型过滤查询结果，可选择Direct, Fanout, Topic */
  FilterType?: string[];
  /** 按exchange名称搜索，支持模糊查询 */
  FilterName?: string;
  /** 过滤查询内部或者外部exchange */
  FilterInternal?: boolean;
}

declare interface DescribeAMQPExchangesResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 主题信息列表 */
  Exchanges: AMQPExchange[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAMQPQueuesRequest {
  /** 查询偏移量 */
  Offset: number;
  /** 查询限制数 */
  Limit: number;
  /** 集群ID */
  ClusterId: string;
  /** Vhost名称 */
  VHostId: string;
  /** 按队列名称搜索，支持模糊查询 */
  NameKeyword?: string;
  /** 查询结果排序规则，ASC为升序，DESC为降序 */
  SortOrder?: string;
  /** 对查询结果排序，此为排序字段，目前支持Accumulative（消息堆积量）、Tps */
  SortedBy?: string;
  /** 队列名称，指定此参数后将只返回该队列信息 */
  FilterOneQueue?: string;
}

declare interface DescribeAMQPQueuesResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 队列信息列表 */
  Queues: AMQPQueueDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAMQPRouteRelationsRequest {
  /** 查询偏移量 */
  Offset: number;
  /** 查询限制数 */
  Limit: number;
  /** 集群ID */
  ClusterId: string;
  /** Vhost名称 */
  VHostId: string;
  /** 按源exchange名称过滤查询结果，支持模糊查询 */
  FilterSourceExchange?: string;
  /** 按绑定的目标类型过滤查询结果，可选值:Exchange、Queue */
  FilterDestType?: string;
  /** 按目标名称过滤查询结果，支持模糊查询 */
  FilterDestValue?: string;
}

declare interface DescribeAMQPRouteRelationsResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 路由关系列表 */
  RouteRelations: AMQPRouteRelation[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAMQPVHostsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
  /** 按名称搜索 */
  NameKeyword?: string;
  /** VHostId 列表过滤 */
  VHostIdList?: string[];
}

declare interface DescribeAMQPVHostsResponse {
  /** Vhost 列表 */
  VHosts: AMQPVHost[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAllTenantsRequest {
  /** 查询偏移量 */
  Offset: number;
  /** 查询限制条数 */
  Limit: number;
  /** 物理集群名称 */
  ClusterName?: string;
  /** 虚拟集群ID */
  TenantId?: string;
  /** 虚拟集群名称 */
  TenantName?: string;
  /** 协议类型数组 */
  Types?: string[];
  /** 排序字段名，支持createTime，updateTime */
  SortBy?: string;
  /** 升序排列ASC，降序排列DESC */
  SortOrder?: string;
}

declare interface DescribeAllTenantsResponse {
  /** 总条数 */
  TotalCount: number;
  /** 虚拟集群列表 */
  Tenants: InternalTenant[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBindClustersRequest {
}

declare interface DescribeBindClustersResponse {
  /** 专享集群的数量 */
  TotalCount: number;
  /** 专享集群的列表 */
  ClusterSet: BindCluster[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBindVpcsRequest {
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface DescribeBindVpcsResponse {
  /** 记录数。 */
  TotalCount?: number;
  /** Vpc集合。 */
  VpcSets?: VpcBindRecord[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailRequest {
  /** 集群的ID */
  ClusterId: string;
}

declare interface DescribeClusterDetailResponse {
  /** 集群的详细信息 */
  ClusterSet: Cluster;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 集群ID列表过滤 */
  ClusterIdList?: string[];
  /** 是否标签过滤 */
  IsTagFilter?: boolean;
  /** 过滤器。目前支持按标签过滤。 */
  Filters?: Filter[];
}

declare interface DescribeClustersResponse {
  /** 集群列表数量 */
  TotalCount: number;
  /** 集群信息列表 */
  ClusterSet: Cluster[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCmqDeadLetterSourceQueuesRequest {
  /** 死信队列名称 */
  DeadLetterQueueName: string;
  /** 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。 */
  Limit?: number;
  /** 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Offset?: number;
  /** 根据SourceQueueName过滤 */
  SourceQueueName?: string;
}

declare interface DescribeCmqDeadLetterSourceQueuesResponse {
  /** 满足本次条件的队列个数 */
  TotalCount: number;
  /** 死信队列源队列 */
  QueueSet: CmqDeadLetterSource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCmqQueueDetailRequest {
  /** 精确匹配QueueName */
  QueueName: string;
}

declare interface DescribeCmqQueueDetailResponse {
  /** 队列详情列表。 */
  QueueDescribe: CmqQueue;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCmqQueuesRequest {
  /** 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0 */
  Offset?: number;
  /** 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Limit?: number;
  /** 根据QueueName进行过滤 */
  QueueName?: string;
  /** CMQ 队列名称列表过滤 */
  QueueNameList?: string[];
  /** 标签过滤查找时，需要设置为 true */
  IsTagFilter?: boolean;
  /** 过滤器。目前支持按标签过滤，标签的Name需要加前缀“tag:”，例如：tag:负责人、tag:环境、tag:业务 */
  Filters?: Filter[];
}

declare interface DescribeCmqQueuesResponse {
  /** 数量 */
  TotalCount: number;
  /** 队列列表 */
  QueueList: CmqQueue[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCmqSubscriptionDetailRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0 */
  Offset?: number;
  /** 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Limit?: number;
  /** 根据SubscriptionName进行模糊搜索 */
  SubscriptionName?: string;
}

declare interface DescribeCmqSubscriptionDetailResponse {
  /** 总数 */
  TotalCount: number;
  /** Subscription属性集合 */
  SubscriptionSet: CmqSubscription[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCmqTopicDetailRequest {
  /** 精确匹配TopicName。 */
  TopicName?: string;
}

declare interface DescribeCmqTopicDetailResponse {
  /** 主题详情 */
  TopicDescribe: CmqTopic;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCmqTopicsRequest {
  /** 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0 */
  Offset?: number;
  /** 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Limit?: number;
  /** 根据TopicName进行模糊搜索 */
  TopicName?: string;
  /** CMQ 主题名称列表过滤 */
  TopicNameList?: string[];
  /** 标签过滤查找时，需要设置为 true */
  IsTagFilter?: boolean;
  /** 过滤器。目前支持按标签过滤，标签的Name需要加前缀“tag:”，例如：tag:负责人、tag:环境、tag:业务 */
  Filters?: Filter[];
}

declare interface DescribeCmqTopicsResponse {
  /** 主题列表 */
  TopicList: CmqTopic[] | null;
  /** 全量主题数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentAttributesRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface DescribeEnvironmentAttributesResponse {
  /** 未消费消息过期时间，单位：秒，最大1296000（15天）。 */
  MsgTTL: number;
  /** 消费速率限制，单位：byte/秒，0：不限速。 */
  RateInByte: number;
  /** 消费速率限制，单位：个数/秒，0：不限速。 */
  RateInSize: number;
  /** 已消费消息保存策略，单位：小时，0：消费完马上删除。 */
  RetentionHours: number;
  /** 已消费消息保存策略，单位：G，0：消费完马上删除。 */
  RetentionSize: number;
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 副本数。 */
  Replicas: number;
  /** 备注。 */
  Remark: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentRolesRequest {
  /** 必填字段，环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 必填字段，Pulsar 集群的ID */
  ClusterId?: string;
  /** 角色名称 */
  RoleName?: string;
  /** * RoleName按照角色名进行过滤，精确查询。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeEnvironmentRolesResponse {
  /** 记录数。 */
  TotalCount: number;
  /** 命名空间角色集合。 */
  EnvironmentRoleSets: EnvironmentRole[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentsRequest {
  /** 命名空间名称，模糊搜索。 */
  EnvironmentId?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** Pulsar 集群的ID */
  ClusterId?: string;
  /** * EnvironmentId按照名称空间进行过滤，精确查询。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeEnvironmentsResponse {
  /** 命名空间记录数。 */
  TotalCount: number;
  /** 命名空间集合数组。 */
  EnvironmentSet: Environment[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNamespaceBundlesOptRequest {
  /** 物理集群名 */
  ClusterName: string;
  /** 虚拟集群（租户）ID */
  TenantId: string;
  /** 命名空间名 */
  NamespaceName: string;
  /** 是否需要监控指标，若传false，则不需要传Limit和Offset分页参数 */
  NeedMetrics: boolean;
  /** 查询限制条数 */
  Limit?: number;
  /** 查询偏移量 */
  Offset?: number;
}

declare interface DescribeNamespaceBundlesOptResponse {
  /** 记录条数 */
  TotalCount: number;
  /** bundle列表 */
  BundleSet: BundleSetOpt[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNodeHealthOptRequest {
  /** 节点实例ID */
  InstanceId: string;
}

declare interface DescribeNodeHealthOptResponse {
  /** 0-异常；1-正常 */
  NodeState: number;
  /** 最近一次健康检查的时间 */
  LatestHealthCheckTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePublisherSummaryRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  Namespace: string;
  /** 主题名称 */
  Topic: string;
}

declare interface DescribePublisherSummaryResponse {
  /** 生产速率（条/秒） */
  MsgRateIn: number | null;
  /** 生产速率（字节/秒） */
  MsgThroughputIn: number | null;
  /** 生产者数量 */
  PublisherCount: number | null;
  /** 消息存储大小，以字节为单位 */
  StorageSize: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePublishersRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  Namespace: string;
  /** 主题名称 */
  Topic: string;
  /** 参数过滤器，支持ProducerName，Address字段 */
  Filters?: Filter[];
  /** 查询偏移量，默认为0 */
  Offset?: number;
  /** 查询条数，默认为20 */
  Limit?: number;
  /** 排序器 */
  Sort?: Sort;
}

declare interface DescribePublishersResponse {
  /** 总条数 */
  TotalCount: number;
  /** 生产者信息列表 */
  Publishers: Publisher[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQNodeListRequest {
  /** rabbitmq集群ID */
  InstanceId: string;
  /** 偏移量 */
  Offset?: number;
  /** 一页限制 */
  Limit?: number;
}

declare interface DescribeRabbitMQNodeListResponse {
  /** 集群列表数量 */
  TotalCount: number;
  /** 集群列表 */
  NodeList: RabbitMQPrivateNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQVipInstancesRequest {
  /** 查询条件过滤器 */
  Filters?: Filter[];
  /** 查询数目上限，默认20 */
  Limit?: number;
  /** 查询起始位置 */
  Offset?: number;
}

declare interface DescribeRabbitMQVipInstancesResponse {
  /** 未分页的总数目 */
  TotalCount: number;
  /** 实例信息列表 */
  Instances: RabbitMQVipInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRocketMQClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeRocketMQClusterResponse {
  /** 集群信息 */
  ClusterInfo: RocketMQClusterInfo;
  /** 集群配置 */
  ClusterConfig: RocketMQClusterConfig;
  /** 集群最近使用量 */
  ClusterStats: RocketMQClusterRecentStats | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRocketMQClustersRequest {
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
  /** 按照集群ID关键字搜索 */
  IdKeyword?: string;
  /** 按照集群名称关键字搜索 */
  NameKeyword?: string;
  /** 集群ID列表过滤 */
  ClusterIdList?: string[];
  /** 标签过滤查找时，需要设置为true */
  IsTagFilter?: boolean;
  /** 过滤器。目前支持标签过滤。 */
  Filters?: Filter[];
}

declare interface DescribeRocketMQClustersResponse {
  /** 集群信息 */
  ClusterList: RocketMQClusterDetail[] | null;
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRocketMQGroupsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间 */
  NamespaceId: string;
  /** 偏移量 */
  Offset: number;
  /** 限制条数 */
  Limit: number;
  /** 主题名称，输入此参数可查询该主题下所有的订阅组 */
  FilterTopic?: string;
  /** 按消费组名称查询消费组，支持模糊查询 */
  FilterGroup?: string;
  /** 按照指定字段排序，可选值为tps，accumulative */
  SortedBy?: string;
  /** 按升序或降序排列，可选值为asc，desc */
  SortOrder?: string;
  /** 订阅组名称，指定此参数后将只返回该订阅组信息 */
  FilterOneGroup?: string;
  /** group类型 */
  Types?: string[];
}

declare interface DescribeRocketMQGroupsResponse {
  /** 总数量 */
  TotalCount?: number;
  /** 订阅组列表 */
  Groups?: RocketMQGroup[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRocketMQNamespacesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
  /** 按名称搜索 */
  NameKeyword?: string;
}

declare interface DescribeRocketMQNamespacesResponse {
  /** 命名空间列表 */
  Namespaces: RocketMQNamespace[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRocketMQTopicsRequest {
  /** 查询偏移量 */
  Offset: number;
  /** 查询限制数 */
  Limit: number;
  /** 集群ID */
  ClusterId: string;
  /** 命名空间 */
  NamespaceId: string;
  /** 按主题类型过滤查询结果，可选择Normal, GlobalOrder, PartitionedOrder, Transaction */
  FilterType?: string[];
  /** 按主题名称搜索，支持模糊查询 */
  FilterName?: string;
}

declare interface DescribeRocketMQTopicsResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 主题信息列表 */
  Topics: RocketMQTopic[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRocketMQVipInstancesRequest {
  /** 查询条件过滤器 */
  Filters?: Filter[];
  /** 查询数目上限，默认20 */
  Limit?: number;
  /** 查询起始位置 */
  Offset?: number;
}

declare interface DescribeRocketMQVipInstancesResponse {
  /** 未分页的总数目 */
  TotalCount: number;
  /** 实例信息列表 */
  Instances: RocketMQVipInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRolesRequest {
  /** 角色名称，模糊查询 */
  RoleName?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 必填字段，集群Id */
  ClusterId?: string;
  /** * RoleName按照角色名进行过滤，精确查询。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeRolesResponse {
  /** 记录数。 */
  TotalCount: number;
  /** 角色数组。 */
  RoleSets: Role[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubscriptionsRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名称。 */
  TopicName: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 订阅者名称，模糊匹配。 */
  SubscriptionName?: string;
  /** 数据过滤条件。 */
  Filters?: FilterSubscription[];
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface DescribeSubscriptionsResponse {
  /** 订阅者集合数组。 */
  SubscriptionSets: Subscription[];
  /** 数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTopicsRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名模糊匹配。 */
  TopicName?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** topic类型描述：0：非持久非分区主题类型；1：非持久分区主题类型；2：持久非分区主题类型；3：持久分区主题类型； */
  TopicType?: number;
  /** Pulsar 集群的ID */
  ClusterId?: string;
  /** * TopicName按照主题名字查询，精确查询。类型：String必选：否 */
  Filters?: Filter[];
  /** 创建来源：1：用户创建2：系统创建 */
  TopicCreator?: number;
}

declare interface DescribeTopicsResponse {
  /** 主题集合数组。 */
  TopicSets: Topic[];
  /** 主题数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAMQPClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 3-64个字符，只能包含字母、数字、“-”及“_” */
  ClusterName: string;
  /** 说明信息，不超过128个字符 */
  Remark?: string;
}

declare interface ModifyAMQPClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAMQPExchangeRequest {
  /** 集群ID */
  ClusterId: string;
  /** Vhost间名称 */
  VHostId: string;
  /** 交换机名称 */
  Exchange: string;
  /** 说明信息，最大128个字符 */
  Remark?: string;
}

declare interface ModifyAMQPExchangeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAMQPQueueRequest {
  /** 集群ID */
  ClusterId: string;
  /** Vhost名称 */
  VHostId: string;
  /** 队列名称 */
  Queue: string;
  /** 是否自动清除 */
  AutoDelete: boolean;
  /** 说明信息，最大128个字符 */
  Remark?: string;
  /** 死信exchange */
  DeadLetterExchange?: string;
  /** 路由键 */
  DeadLetterRoutingKey?: string;
}

declare interface ModifyAMQPQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAMQPVHostRequest {
  /** 集群ID */
  ClusterId: string;
  /** vhost名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  VHostId: string;
  /** 未消费消息的保留时间，以毫秒为单位，60秒-15天 */
  MsgTtl: number;
  /** 说明，最大128个字符 */
  Remark?: string;
}

declare interface ModifyAMQPVHostResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyClusterRequest {
  /** Pulsar 集群的ID，需要更新的集群Id。 */
  ClusterId: string;
  /** 更新后的集群名称。 */
  ClusterName?: string;
  /** 说明信息。 */
  Remark?: string;
  /** 开启公网访问，只能为true */
  PublicAccessEnabled?: boolean;
}

declare interface ModifyClusterResponse {
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCmqQueueAttributeRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
  /** 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。 */
  MaxMsgHeapNum?: number;
  /** 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。 */
  PollingWaitSeconds?: number;
  /** 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。 */
  VisibilityTimeout?: number;
  /** 消息最大长度，新版CMQ新建的队列默认1024KB，不支持修改 */
  MaxMsgSize?: number;
  /** 消息最长未确认时间。取值范围 30-43200 秒（30秒~12小时），默认值 3600 (1 小时)。 */
  MsgRetentionSeconds?: number;
  /** 队列是否开启回溯消息能力，该参数取值范围0-1296000，0表示不开启。 */
  RewindSeconds?: number;
  /** 第一次查询时间 */
  FirstQueryInterval?: number;
  /** 最大查询次数 */
  MaxQueryCount?: number;
  /** 死信队列名称 */
  DeadLetterQueueName?: string;
  /** MaxTimeToLivepolicy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds */
  MaxTimeToLive?: number;
  /** 最大接收次数 */
  MaxReceiveCount?: number;
  /** 死信队列策略 */
  Policy?: number;
  /** 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。 */
  Trace?: boolean;
  /** 是否开启事务，1开启，0不开启 */
  Transaction?: number;
  /** 队列可回溯存储空间：若开启消息回溯，取值范围：10240MB - 512000MB，若不开启消息回溯，取值：0 */
  RetentionSizeInMB?: number;
}

declare interface ModifyCmqQueueAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCmqSubscriptionAttributeRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
  /** 向 Endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值如下：（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息。（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s···由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。 */
  NotifyStrategy?: string;
  /** 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 Protocol 是 queue，则取值必须为 SIMPLIFIED。如果 Protocol 是 HTTP，两个值均可以，默认值是 JSON。 */
  NotifyContentFormat?: string;
  /** 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。 */
  FilterTags?: string[];
  /** BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。 */
  BindingKey?: string[];
}

declare interface ModifyCmqSubscriptionAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCmqTopicAttributeRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
  /** 消息最大长度。取值范围1024 - 65536 Byte（即1 - 64K），默认值65536。 */
  MaxMsgSize?: number;
  /** 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。 */
  MsgRetentionSeconds?: number;
  /** 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。 */
  Trace?: boolean;
}

declare interface ModifyCmqTopicAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEnvironmentAttributesRequest {
  /** 命名空间名称。 */
  EnvironmentId: string;
  /** 未消费消息过期时间，单位：秒，范围60秒~15天。 */
  MsgTTL: number;
  /** 备注，字符串最长不超过128。 */
  Remark?: string;
  /** 集群ID */
  ClusterId?: string;
  /** 消息保留策略 */
  RetentionPolicy?: RetentionPolicy;
}

declare interface ModifyEnvironmentAttributesResponse {
  /** 命名空间名称。 */
  EnvironmentId: string;
  /** 未消费消息过期时间，单位：秒。 */
  MsgTTL: number;
  /** 备注，字符串最长不超过128。 */
  Remark: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEnvironmentRoleRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 角色名称。 */
  RoleName: string;
  /** 授权项，最多只能包含produce、consume两项的非空字符串数组。 */
  Permissions: string[];
  /** 必填字段，集群的ID */
  ClusterId?: string;
}

declare interface ModifyEnvironmentRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRocketMQClusterRequest {
  /** RocketMQ集群ID */
  ClusterId: string;
  /** 3-64个字符，只能包含字母、数字、“-”及“_” */
  ClusterName?: string;
  /** 说明信息，不超过128个字符 */
  Remark?: string;
}

declare interface ModifyRocketMQClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRocketMQGroupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间 */
  NamespaceId: string;
  /** 消费组名称 */
  GroupId: string;
  /** 说明信息，最长128个字符 */
  Remark?: string;
  /** 是否开启消费 */
  ReadEnable?: boolean;
  /** 是否开启广播消费 */
  BroadcastEnable?: boolean;
  /** 最大重试次数 */
  RetryMaxTimes?: number;
}

declare interface ModifyRocketMQGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRocketMQNamespaceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  NamespaceId: string;
  /** 未消费消息的保留时间，以毫秒为单位，60秒-15天 */
  Ttl: number;
  /** 消息持久化后保留的时间，以毫秒为单位 */
  RetentionTime: number;
  /** 说明，最大128个字符 */
  Remark?: string;
}

declare interface ModifyRocketMQNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRocketMQTopicRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** 主题名称 */
  Topic: string;
  /** 说明信息，最大128个字符 */
  Remark: string;
  /** 分区数，全局类型无效，不可小于当前分区数 */
  PartitionNum?: number;
}

declare interface ModifyRocketMQTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRoleRequest {
  /** 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。 */
  RoleName: string;
  /** 备注说明，长度必须大等于0且小等于128。 */
  Remark?: string;
  /** 必填字段，集群Id */
  ClusterId?: string;
}

declare interface ModifyRoleResponse {
  /** 角色名称 */
  RoleName: string;
  /** 备注说明 */
  Remark: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTopicRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名。 */
  TopicName: string;
  /** 分区数，必须大于或者等于原分区数，若想维持原分区数请输入原数目，修改分区数仅对非全局顺序消息起效果，不允许超过128个分区。 */
  Partitions: number;
  /** 备注，128字符以内。 */
  Remark?: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface ModifyTopicResponse {
  /** 分区数 */
  Partitions: number;
  /** 备注，128字符以内。 */
  Remark: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PublishCmqMsgRequest {
  /** 主题名 */
  TopicName: string;
  /** 消息内容，消息总大小需不大于1024K */
  MsgContent: string;
  /** 消息标签，支持传递多标签或单路由，单个标签、路由长度不能超过64个字符。 */
  MsgTag?: string[];
}

declare interface PublishCmqMsgResponse {
  /** true表示发送成功 */
  Result: boolean;
  /** 消息id */
  MsgId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReceiveMessageRequest {
  /** 接收消息的topic的名字, 这里尽量需要使用topic的全路径，如果不指定，即：tenant/namespace/topic。默认使用的是：public/default */
  Topic: string;
  /** 订阅者的名字 */
  SubscriptionName: string;
  /** 默认值为1000，consumer接收的消息会首先存储到receiverQueueSize这个队列中，用作调优接收消息的速率 */
  ReceiverQueueSize?: number;
  /** 默认值为：Earliest。用作判定consumer初始接收消息的位置，可选参数为：Earliest, Latest */
  SubInitialPosition?: string;
  /** 用于设置BatchReceivePolicy，指在一次batch中最多接收多少条消息，默认是 0。即不开启BatchReceivePolicy */
  MaxNumMessages?: number;
  /** 用于设置BatchReceivePolicy，指在一次batch中最多接收的消息体有多大，单位是 bytes。默认是 0，即不开启BatchReceivePolicy */
  MaxNumBytes?: number;
  /** 用于设置BatchReceivePolicy，指在一次batch消息的接收z中最多等待的超时时间，单位是毫秒。默认是 0，即不开启BatchReceivePolicy */
  Timeout?: number;
}

declare interface ReceiveMessageResponse {
  /** 用作标识消息的唯一主键 */
  MessageID: string;
  /** 接收消息的内容 */
  MessagePayload: string;
  /** 提供给 Ack 接口，用来Ack哪一个topic中的消息 */
  AckTopic: string;
  /** 返回的错误信息，如果为空，说明没有错误 */
  ErrorMsg: string | null;
  /** 返回订阅者的名字，用来创建 ack consumer时使用 */
  SubName: string | null;
  /** BatchReceivePolicy 一次性返回的多条消息的 MessageID，用 ‘###’ 来区分不同的 MessageID */
  MessageIDList: string | null;
  /** BatchReceivePolicy 一次性返回的多条消息的消息内容，用 ‘###’ 来区分不同的消息内容 */
  MessagesPayload: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetMsgSubOffsetByTimestampRequest {
  /** 命名空间名称。 */
  EnvironmentId: string;
  /** 主题名称。 */
  TopicName: string;
  /** 订阅者名称。 */
  Subscription: string;
  /** 时间戳，精确到毫秒。 */
  ToTimestamp: number;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface ResetMsgSubOffsetByTimestampResponse {
  /** 结果。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetRocketMQConsumerOffSetRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** 消费组名称 */
  GroupId: string;
  /** 主题名称 */
  Topic: string;
  /** 重置方式，0表示从最新位点开始，1表示从指定时间点开始 */
  Type: number;
  /** 重置指定的时间戳，仅在 Type 为1是生效，以毫秒为单位 */
  ResetTimestamp?: number;
}

declare interface ResetRocketMQConsumerOffSetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RewindCmqQueueRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
  /** 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。 */
  StartConsumeTime: number;
}

declare interface RewindCmqQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendBatchMessagesRequest {
  /** 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default */
  Topic: string;
  /** 需要发送消息的内容 */
  Payload: string;
  /** String 类型的 token，可以不填，系统会自动获取 */
  StringToken?: string;
  /** producer 的名字，要求全局是唯一的，如果不设置，系统会自动生成 */
  ProducerName?: string;
  /** 单位：s。消息发送的超时时间。默认值为：30s */
  SendTimeout?: number;
  /** 内存中允许缓存的生产消息的最大数量，默认值：1000条 */
  MaxPendingMessages?: number;
  /** 每一个batch中消息的最大数量，默认值：1000条/batch */
  BatchingMaxMessages?: number;
  /** 每一个batch最大等待的时间，超过这个时间，不管是否达到指定的batch中消息的数量和大小，都会将该batch发送出去，默认：10ms */
  BatchingMaxPublishDelay?: number;
  /** 每一个batch中最大允许的消息的大小，默认：128KB */
  BatchingMaxBytes?: number;
}

declare interface SendBatchMessagesResponse {
  /** 消息的唯一标识 */
  MessageId: string | null;
  /** 错误消息，返回为 ""，代表没有错误 */
  ErrorMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendCmqMsgRequest {
  /** 队列名 */
  QueueName: string;
  /** 消息内容 */
  MsgContent: string;
  /** 延迟时间 */
  DelaySeconds: number;
}

declare interface SendCmqMsgResponse {
  /** true表示发送成功 */
  Result: boolean;
  /** 消息id */
  MsgId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendMessagesRequest {
  /** 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default */
  Topic: string;
  /** 要发送的消息的内容 */
  Payload: string;
  /** Token 是用来做鉴权使用的，可以不填，系统会自动获取 */
  StringToken?: string;
  /** 设置 producer 的名字，要求全局唯一。该参数建议用户无需手动配置，此时系统会随机生成，如果手动设置有可能会造成创建 Producer 失败进而导致消息发送失败。该参数主要用于某些特定场景下，只允许特定的 Producer 生产消息时设置，用户的大部分场景使用不到该特性。 */
  ProducerName?: string;
  /** 设置消息发送的超时时间，默认为30s */
  SendTimeout?: number;
  /** 内存中缓存的最大的生产消息的数量，默认为1000条 */
  MaxPendingMessages?: number;
}

declare interface SendMessagesResponse {
  /** 消息的messageID, 是全局唯一的，用来标识消息的元数据信息 */
  MessageId: string | null;
  /** 返回的错误消息，如果返回为 “”，说明没有错误 */
  ErrorMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendMsgRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名称，如果是分区topic需要指定具体分区，如果没有指定则默认发到0分区，例如：my_topic-partition-0。 */
  TopicName: string;
  /** 消息内容，不能为空且大小不得大于5242880个byte。 */
  MsgContent: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface SendMsgResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnbindCmqDeadLetterRequest {
  /** 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。 */
  SourceQueueName: string;
}

declare interface UnbindCmqDeadLetterResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Tdmq 消息队列 TDMQ} */
declare interface Tdmq {
  (): Versions;
  /** {@link AcknowledgeMessage 确认消息}({@link AcknowledgeMessageRequest 请求参数}): {@link AcknowledgeMessageResponse 返回参数} */
  AcknowledgeMessage(data: AcknowledgeMessageRequest, config?: AxiosRequestConfig): AxiosPromise<AcknowledgeMessageResponse>;
  /** {@link ClearCmqQueue 清空cmq消息队列中的消息}({@link ClearCmqQueueRequest 请求参数}): {@link ClearCmqQueueResponse 返回参数} */
  ClearCmqQueue(data: ClearCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<ClearCmqQueueResponse>;
  /** {@link ClearCmqSubscriptionFilterTags 清空cmq订阅者消息标签}({@link ClearCmqSubscriptionFilterTagsRequest 请求参数}): {@link ClearCmqSubscriptionFilterTagsResponse 返回参数} */
  ClearCmqSubscriptionFilterTags(data: ClearCmqSubscriptionFilterTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ClearCmqSubscriptionFilterTagsResponse>;
  /** {@link CreateAMQPCluster 创建AMQP集群}({@link CreateAMQPClusterRequest 请求参数}): {@link CreateAMQPClusterResponse 返回参数} */
  CreateAMQPCluster(data: CreateAMQPClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAMQPClusterResponse>;
  /** {@link CreateAMQPExchange 创建AMQP Exchange}({@link CreateAMQPExchangeRequest 请求参数}): {@link CreateAMQPExchangeResponse 返回参数} */
  CreateAMQPExchange(data: CreateAMQPExchangeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAMQPExchangeResponse>;
  /** {@link CreateAMQPQueue 创建AMQP队列}({@link CreateAMQPQueueRequest 请求参数}): {@link CreateAMQPQueueResponse 返回参数} */
  CreateAMQPQueue(data: CreateAMQPQueueRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAMQPQueueResponse>;
  /** {@link CreateAMQPRouteRelation 创建AMQP路由关系}({@link CreateAMQPRouteRelationRequest 请求参数}): {@link CreateAMQPRouteRelationResponse 返回参数} */
  CreateAMQPRouteRelation(data: CreateAMQPRouteRelationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAMQPRouteRelationResponse>;
  /** {@link CreateAMQPVHost 创建Amqp Vhost}({@link CreateAMQPVHostRequest 请求参数}): {@link CreateAMQPVHostResponse 返回参数} */
  CreateAMQPVHost(data: CreateAMQPVHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAMQPVHostResponse>;
  /** {@link CreateCluster 创建集群}({@link CreateClusterRequest 请求参数}): {@link CreateClusterResponse 返回参数} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** {@link CreateCmqQueue 创建cmq队列接口}({@link CreateCmqQueueRequest 请求参数}): {@link CreateCmqQueueResponse 返回参数} */
  CreateCmqQueue(data: CreateCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCmqQueueResponse>;
  /** {@link CreateCmqSubscribe 创建cmq订阅接口}({@link CreateCmqSubscribeRequest 请求参数}): {@link CreateCmqSubscribeResponse 返回参数} */
  CreateCmqSubscribe(data: CreateCmqSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCmqSubscribeResponse>;
  /** {@link CreateCmqTopic 创建cmq主题}({@link CreateCmqTopicRequest 请求参数}): {@link CreateCmqTopicResponse 返回参数} */
  CreateCmqTopic(data: CreateCmqTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCmqTopicResponse>;
  /** {@link CreateEnvironment 创建命名空间}({@link CreateEnvironmentRequest 请求参数}): {@link CreateEnvironmentResponse 返回参数} */
  CreateEnvironment(data: CreateEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvironmentResponse>;
  /** {@link CreateEnvironmentRole 创建环境角色授权}({@link CreateEnvironmentRoleRequest 请求参数}): {@link CreateEnvironmentRoleResponse 返回参数} */
  CreateEnvironmentRole(data: CreateEnvironmentRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvironmentRoleResponse>;
  /** {@link CreateRocketMQCluster 创建RocketMQ集群}({@link CreateRocketMQClusterRequest 请求参数}): {@link CreateRocketMQClusterResponse 返回参数} */
  CreateRocketMQCluster(data: CreateRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQClusterResponse>;
  /** {@link CreateRocketMQGroup 创建RocketMQ消费组}({@link CreateRocketMQGroupRequest 请求参数}): {@link CreateRocketMQGroupResponse 返回参数} */
  CreateRocketMQGroup(data: CreateRocketMQGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQGroupResponse>;
  /** {@link CreateRocketMQNamespace 创建RocketMQ命名空间}({@link CreateRocketMQNamespaceRequest 请求参数}): {@link CreateRocketMQNamespaceResponse 返回参数} */
  CreateRocketMQNamespace(data: CreateRocketMQNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQNamespaceResponse>;
  /** {@link CreateRocketMQTopic 创建RocketMQ主题}({@link CreateRocketMQTopicRequest 请求参数}): {@link CreateRocketMQTopicResponse 返回参数} */
  CreateRocketMQTopic(data: CreateRocketMQTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQTopicResponse>;
  /** {@link CreateRole 创建角色}({@link CreateRoleRequest 请求参数}): {@link CreateRoleResponse 返回参数} */
  CreateRole(data: CreateRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleResponse>;
  /** {@link CreateSubscription 创建订阅关系}({@link CreateSubscriptionRequest 请求参数}): {@link CreateSubscriptionResponse 返回参数} */
  CreateSubscription(data: CreateSubscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubscriptionResponse>;
  /** {@link CreateTopic 新增主题}({@link CreateTopicRequest 请求参数}): {@link CreateTopicResponse 返回参数} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** {@link DeleteAMQPCluster 删除AMQP集群}({@link DeleteAMQPClusterRequest 请求参数}): {@link DeleteAMQPClusterResponse 返回参数} */
  DeleteAMQPCluster(data: DeleteAMQPClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAMQPClusterResponse>;
  /** {@link DeleteAMQPExchange 删除Amqp交换机}({@link DeleteAMQPExchangeRequest 请求参数}): {@link DeleteAMQPExchangeResponse 返回参数} */
  DeleteAMQPExchange(data: DeleteAMQPExchangeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAMQPExchangeResponse>;
  /** {@link DeleteAMQPQueue 删除Amqp队列}({@link DeleteAMQPQueueRequest 请求参数}): {@link DeleteAMQPQueueResponse 返回参数} */
  DeleteAMQPQueue(data: DeleteAMQPQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAMQPQueueResponse>;
  /** {@link DeleteAMQPRouteRelation 删除Amqp路由关系}({@link DeleteAMQPRouteRelationRequest 请求参数}): {@link DeleteAMQPRouteRelationResponse 返回参数} */
  DeleteAMQPRouteRelation(data: DeleteAMQPRouteRelationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAMQPRouteRelationResponse>;
  /** {@link DeleteAMQPVHost 删除Vhost}({@link DeleteAMQPVHostRequest 请求参数}): {@link DeleteAMQPVHostResponse 返回参数} */
  DeleteAMQPVHost(data: DeleteAMQPVHostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAMQPVHostResponse>;
  /** {@link DeleteCluster 删除集群}({@link DeleteClusterRequest 请求参数}): {@link DeleteClusterResponse 返回参数} */
  DeleteCluster(data: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
  /** {@link DeleteCmqQueue 删除cmq队列}({@link DeleteCmqQueueRequest 请求参数}): {@link DeleteCmqQueueResponse 返回参数} */
  DeleteCmqQueue(data: DeleteCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCmqQueueResponse>;
  /** {@link DeleteCmqSubscribe 删除cmq订阅}({@link DeleteCmqSubscribeRequest 请求参数}): {@link DeleteCmqSubscribeResponse 返回参数} */
  DeleteCmqSubscribe(data: DeleteCmqSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCmqSubscribeResponse>;
  /** {@link DeleteCmqTopic 删除cmq主题}({@link DeleteCmqTopicRequest 请求参数}): {@link DeleteCmqTopicResponse 返回参数} */
  DeleteCmqTopic(data: DeleteCmqTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCmqTopicResponse>;
  /** {@link DeleteEnvironmentRoles 删除环境角色授权}({@link DeleteEnvironmentRolesRequest 请求参数}): {@link DeleteEnvironmentRolesResponse 返回参数} */
  DeleteEnvironmentRoles(data: DeleteEnvironmentRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEnvironmentRolesResponse>;
  /** {@link DeleteEnvironments 删除命名空间}({@link DeleteEnvironmentsRequest 请求参数}): {@link DeleteEnvironmentsResponse 返回参数} */
  DeleteEnvironments(data: DeleteEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEnvironmentsResponse>;
  /** {@link DeleteRocketMQCluster 删除RocketMQ集群}({@link DeleteRocketMQClusterRequest 请求参数}): {@link DeleteRocketMQClusterResponse 返回参数} */
  DeleteRocketMQCluster(data: DeleteRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQClusterResponse>;
  /** {@link DeleteRocketMQGroup 删除RocketMQ消费组}({@link DeleteRocketMQGroupRequest 请求参数}): {@link DeleteRocketMQGroupResponse 返回参数} */
  DeleteRocketMQGroup(data: DeleteRocketMQGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQGroupResponse>;
  /** {@link DeleteRocketMQNamespace 删除RocketMQ命名空间}({@link DeleteRocketMQNamespaceRequest 请求参数}): {@link DeleteRocketMQNamespaceResponse 返回参数} */
  DeleteRocketMQNamespace(data: DeleteRocketMQNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQNamespaceResponse>;
  /** {@link DeleteRocketMQTopic 删除RocketMQ主题}({@link DeleteRocketMQTopicRequest 请求参数}): {@link DeleteRocketMQTopicResponse 返回参数} */
  DeleteRocketMQTopic(data: DeleteRocketMQTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQTopicResponse>;
  /** {@link DeleteRoles 删除角色}({@link DeleteRolesRequest 请求参数}): {@link DeleteRolesResponse 返回参数} */
  DeleteRoles(data: DeleteRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRolesResponse>;
  /** {@link DeleteSubscriptions 删除订阅关系}({@link DeleteSubscriptionsRequest 请求参数}): {@link DeleteSubscriptionsResponse 返回参数} */
  DeleteSubscriptions(data: DeleteSubscriptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSubscriptionsResponse>;
  /** {@link DeleteTopics 删除主题}({@link DeleteTopicsRequest 请求参数}): {@link DeleteTopicsResponse 返回参数} */
  DeleteTopics(data: DeleteTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicsResponse>;
  /** {@link DescribeAMQPCluster 获取单个Amqp集群信息}({@link DescribeAMQPClusterRequest 请求参数}): {@link DescribeAMQPClusterResponse 返回参数} */
  DescribeAMQPCluster(data: DescribeAMQPClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPClusterResponse>;
  /** {@link DescribeAMQPClusters 获取amqp集群列表}({@link DescribeAMQPClustersRequest 请求参数}): {@link DescribeAMQPClustersResponse 返回参数} */
  DescribeAMQPClusters(data: DescribeAMQPClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPClustersResponse>;
  /** {@link DescribeAMQPCreateQuota 获取用户配额}({@link DescribeAMQPCreateQuotaRequest 请求参数}): {@link DescribeAMQPCreateQuotaResponse 返回参数} */
  DescribeAMQPCreateQuota(data?: DescribeAMQPCreateQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPCreateQuotaResponse>;
  /** {@link DescribeAMQPExchanges 获取AMQP Exchange列表}({@link DescribeAMQPExchangesRequest 请求参数}): {@link DescribeAMQPExchangesResponse 返回参数} */
  DescribeAMQPExchanges(data: DescribeAMQPExchangesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPExchangesResponse>;
  /** {@link DescribeAMQPQueues 获取Amqp队列列表}({@link DescribeAMQPQueuesRequest 请求参数}): {@link DescribeAMQPQueuesResponse 返回参数} */
  DescribeAMQPQueues(data: DescribeAMQPQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPQueuesResponse>;
  /** {@link DescribeAMQPRouteRelations 获取Amqp路由关系列表}({@link DescribeAMQPRouteRelationsRequest 请求参数}): {@link DescribeAMQPRouteRelationsResponse 返回参数} */
  DescribeAMQPRouteRelations(data: DescribeAMQPRouteRelationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPRouteRelationsResponse>;
  /** {@link DescribeAMQPVHosts 获取Amqp Vhost列表}({@link DescribeAMQPVHostsRequest 请求参数}): {@link DescribeAMQPVHostsResponse 返回参数} */
  DescribeAMQPVHosts(data: DescribeAMQPVHostsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPVHostsResponse>;
  /** {@link DescribeAllTenants 获取某个租户的虚拟集群列表}({@link DescribeAllTenantsRequest 请求参数}): {@link DescribeAllTenantsResponse 返回参数} */
  DescribeAllTenants(data: DescribeAllTenantsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllTenantsResponse>;
  /** {@link DescribeBindClusters 获取专享集群列表}({@link DescribeBindClustersRequest 请求参数}): {@link DescribeBindClustersResponse 返回参数} */
  DescribeBindClusters(data?: DescribeBindClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindClustersResponse>;
  /** {@link DescribeBindVpcs 获取租户VPC绑定关系}({@link DescribeBindVpcsRequest 请求参数}): {@link DescribeBindVpcsResponse 返回参数} */
  DescribeBindVpcs(data?: DescribeBindVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindVpcsResponse>;
  /** {@link DescribeClusterDetail 获取集群详情}({@link DescribeClusterDetailRequest 请求参数}): {@link DescribeClusterDetailResponse 返回参数} */
  DescribeClusterDetail(data: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** {@link DescribeClusters 获取集群列表}({@link DescribeClustersRequest 请求参数}): {@link DescribeClustersResponse 返回参数} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** {@link DescribeCmqDeadLetterSourceQueues 枚举cmq死信队列源队列}({@link DescribeCmqDeadLetterSourceQueuesRequest 请求参数}): {@link DescribeCmqDeadLetterSourceQueuesResponse 返回参数} */
  DescribeCmqDeadLetterSourceQueues(data: DescribeCmqDeadLetterSourceQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqDeadLetterSourceQueuesResponse>;
  /** {@link DescribeCmqQueueDetail 查询cmq队列详情}({@link DescribeCmqQueueDetailRequest 请求参数}): {@link DescribeCmqQueueDetailResponse 返回参数} */
  DescribeCmqQueueDetail(data: DescribeCmqQueueDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqQueueDetailResponse>;
  /** {@link DescribeCmqQueues 查询cmq全量队列}({@link DescribeCmqQueuesRequest 请求参数}): {@link DescribeCmqQueuesResponse 返回参数} */
  DescribeCmqQueues(data?: DescribeCmqQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqQueuesResponse>;
  /** {@link DescribeCmqSubscriptionDetail 查询cmq订阅详情}({@link DescribeCmqSubscriptionDetailRequest 请求参数}): {@link DescribeCmqSubscriptionDetailResponse 返回参数} */
  DescribeCmqSubscriptionDetail(data: DescribeCmqSubscriptionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqSubscriptionDetailResponse>;
  /** {@link DescribeCmqTopicDetail 查询cmq主题详情}({@link DescribeCmqTopicDetailRequest 请求参数}): {@link DescribeCmqTopicDetailResponse 返回参数} */
  DescribeCmqTopicDetail(data?: DescribeCmqTopicDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqTopicDetailResponse>;
  /** {@link DescribeCmqTopics 枚举cmq全量主题}({@link DescribeCmqTopicsRequest 请求参数}): {@link DescribeCmqTopicsResponse 返回参数} */
  DescribeCmqTopics(data?: DescribeCmqTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqTopicsResponse>;
  /** {@link DescribeEnvironmentAttributes 获取命名空间属性}({@link DescribeEnvironmentAttributesRequest 请求参数}): {@link DescribeEnvironmentAttributesResponse 返回参数} */
  DescribeEnvironmentAttributes(data: DescribeEnvironmentAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentAttributesResponse>;
  /** {@link DescribeEnvironmentRoles 获取命名空间角色列表}({@link DescribeEnvironmentRolesRequest 请求参数}): {@link DescribeEnvironmentRolesResponse 返回参数} */
  DescribeEnvironmentRoles(data?: DescribeEnvironmentRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentRolesResponse>;
  /** {@link DescribeEnvironments 获取命名空间列表}({@link DescribeEnvironmentsRequest 请求参数}): {@link DescribeEnvironmentsResponse 返回参数} */
  DescribeEnvironments(data?: DescribeEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentsResponse>;
  /** {@link DescribeNamespaceBundlesOpt 运营端获取命名空间bundle列表}({@link DescribeNamespaceBundlesOptRequest 请求参数}): {@link DescribeNamespaceBundlesOptResponse 返回参数} */
  DescribeNamespaceBundlesOpt(data: DescribeNamespaceBundlesOptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNamespaceBundlesOptResponse>;
  /** {@link DescribeNodeHealthOpt 运营端获节点健康状态}({@link DescribeNodeHealthOptRequest 请求参数}): {@link DescribeNodeHealthOptResponse 返回参数} */
  DescribeNodeHealthOpt(data: DescribeNodeHealthOptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeHealthOptResponse>;
  /** {@link DescribePublisherSummary 获取消息生产概览}({@link DescribePublisherSummaryRequest 请求参数}): {@link DescribePublisherSummaryResponse 返回参数} */
  DescribePublisherSummary(data: DescribePublisherSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublisherSummaryResponse>;
  /** {@link DescribePublishers 获取生产者信息}({@link DescribePublishersRequest 请求参数}): {@link DescribePublishersResponse 返回参数} */
  DescribePublishers(data: DescribePublishersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublishersResponse>;
  /** {@link DescribeRabbitMQNodeList RabbitMQ专享版查询节点列表}({@link DescribeRabbitMQNodeListRequest 请求参数}): {@link DescribeRabbitMQNodeListResponse 返回参数} */
  DescribeRabbitMQNodeList(data: DescribeRabbitMQNodeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQNodeListResponse>;
  /** {@link DescribeRabbitMQVipInstances 查询RabbitMQ专享实例列表}({@link DescribeRabbitMQVipInstancesRequest 请求参数}): {@link DescribeRabbitMQVipInstancesResponse 返回参数} */
  DescribeRabbitMQVipInstances(data?: DescribeRabbitMQVipInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQVipInstancesResponse>;
  /** {@link DescribeRocketMQCluster 获取单个RocketMQ集群信息}({@link DescribeRocketMQClusterRequest 请求参数}): {@link DescribeRocketMQClusterResponse 返回参数} */
  DescribeRocketMQCluster(data: DescribeRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQClusterResponse>;
  /** {@link DescribeRocketMQClusters 获取RocketMQ集群列表}({@link DescribeRocketMQClustersRequest 请求参数}): {@link DescribeRocketMQClustersResponse 返回参数} */
  DescribeRocketMQClusters(data: DescribeRocketMQClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQClustersResponse>;
  /** {@link DescribeRocketMQGroups 获取RocketMQ消费组列表}({@link DescribeRocketMQGroupsRequest 请求参数}): {@link DescribeRocketMQGroupsResponse 返回参数} */
  DescribeRocketMQGroups(data: DescribeRocketMQGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQGroupsResponse>;
  /** {@link DescribeRocketMQNamespaces 获取RocketMQ命名空间列表}({@link DescribeRocketMQNamespacesRequest 请求参数}): {@link DescribeRocketMQNamespacesResponse 返回参数} */
  DescribeRocketMQNamespaces(data: DescribeRocketMQNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQNamespacesResponse>;
  /** {@link DescribeRocketMQTopics 获取RocketMQ主题列表}({@link DescribeRocketMQTopicsRequest 请求参数}): {@link DescribeRocketMQTopicsResponse 返回参数} */
  DescribeRocketMQTopics(data: DescribeRocketMQTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQTopicsResponse>;
  /** {@link DescribeRocketMQVipInstances 查询RocketMQ专享实例列表}({@link DescribeRocketMQVipInstancesRequest 请求参数}): {@link DescribeRocketMQVipInstancesResponse 返回参数} */
  DescribeRocketMQVipInstances(data?: DescribeRocketMQVipInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQVipInstancesResponse>;
  /** {@link DescribeRoles 获取角色列表}({@link DescribeRolesRequest 请求参数}): {@link DescribeRolesResponse 返回参数} */
  DescribeRoles(data?: DescribeRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRolesResponse>;
  /** {@link DescribeSubscriptions 获取消费订阅列表}({@link DescribeSubscriptionsRequest 请求参数}): {@link DescribeSubscriptionsResponse 返回参数} */
  DescribeSubscriptions(data: DescribeSubscriptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscriptionsResponse>;
  /** {@link DescribeTopics 查询主题列表}({@link DescribeTopicsRequest 请求参数}): {@link DescribeTopicsResponse 返回参数} */
  DescribeTopics(data: DescribeTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicsResponse>;
  /** {@link ModifyAMQPCluster 更新Amqp集群信息}({@link ModifyAMQPClusterRequest 请求参数}): {@link ModifyAMQPClusterResponse 返回参数} */
  ModifyAMQPCluster(data: ModifyAMQPClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAMQPClusterResponse>;
  /** {@link ModifyAMQPExchange 更新Amqp交换机}({@link ModifyAMQPExchangeRequest 请求参数}): {@link ModifyAMQPExchangeResponse 返回参数} */
  ModifyAMQPExchange(data: ModifyAMQPExchangeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAMQPExchangeResponse>;
  /** {@link ModifyAMQPQueue 更新Amqp队列}({@link ModifyAMQPQueueRequest 请求参数}): {@link ModifyAMQPQueueResponse 返回参数} */
  ModifyAMQPQueue(data: ModifyAMQPQueueRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAMQPQueueResponse>;
  /** {@link ModifyAMQPVHost 更新Vhost}({@link ModifyAMQPVHostRequest 请求参数}): {@link ModifyAMQPVHostResponse 返回参数} */
  ModifyAMQPVHost(data: ModifyAMQPVHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAMQPVHostResponse>;
  /** {@link ModifyCluster 更新集群信息}({@link ModifyClusterRequest 请求参数}): {@link ModifyClusterResponse 返回参数} */
  ModifyCluster(data: ModifyClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterResponse>;
  /** {@link ModifyCmqQueueAttribute 修改cmq队列属性}({@link ModifyCmqQueueAttributeRequest 请求参数}): {@link ModifyCmqQueueAttributeResponse 返回参数} */
  ModifyCmqQueueAttribute(data: ModifyCmqQueueAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCmqQueueAttributeResponse>;
  /** {@link ModifyCmqSubscriptionAttribute 修改cmq订阅属性}({@link ModifyCmqSubscriptionAttributeRequest 请求参数}): {@link ModifyCmqSubscriptionAttributeResponse 返回参数} */
  ModifyCmqSubscriptionAttribute(data: ModifyCmqSubscriptionAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCmqSubscriptionAttributeResponse>;
  /** {@link ModifyCmqTopicAttribute 修改cmq主题属性}({@link ModifyCmqTopicAttributeRequest 请求参数}): {@link ModifyCmqTopicAttributeResponse 返回参数} */
  ModifyCmqTopicAttribute(data: ModifyCmqTopicAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCmqTopicAttributeResponse>;
  /** {@link ModifyEnvironmentAttributes 修改命名空间属性}({@link ModifyEnvironmentAttributesRequest 请求参数}): {@link ModifyEnvironmentAttributesResponse 返回参数} */
  ModifyEnvironmentAttributes(data: ModifyEnvironmentAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvironmentAttributesResponse>;
  /** {@link ModifyEnvironmentRole 修改环境角色授权}({@link ModifyEnvironmentRoleRequest 请求参数}): {@link ModifyEnvironmentRoleResponse 返回参数} */
  ModifyEnvironmentRole(data: ModifyEnvironmentRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvironmentRoleResponse>;
  /** {@link ModifyRocketMQCluster 更新RocketMQ集群信息}({@link ModifyRocketMQClusterRequest 请求参数}): {@link ModifyRocketMQClusterResponse 返回参数} */
  ModifyRocketMQCluster(data: ModifyRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQClusterResponse>;
  /** {@link ModifyRocketMQGroup 更新RocketMQ消费组信息}({@link ModifyRocketMQGroupRequest 请求参数}): {@link ModifyRocketMQGroupResponse 返回参数} */
  ModifyRocketMQGroup(data: ModifyRocketMQGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQGroupResponse>;
  /** {@link ModifyRocketMQNamespace 更新RocketMQ命名空间}({@link ModifyRocketMQNamespaceRequest 请求参数}): {@link ModifyRocketMQNamespaceResponse 返回参数} */
  ModifyRocketMQNamespace(data: ModifyRocketMQNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQNamespaceResponse>;
  /** {@link ModifyRocketMQTopic 更新RocketMQ主题信息}({@link ModifyRocketMQTopicRequest 请求参数}): {@link ModifyRocketMQTopicResponse 返回参数} */
  ModifyRocketMQTopic(data: ModifyRocketMQTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQTopicResponse>;
  /** {@link ModifyRole 角色修改}({@link ModifyRoleRequest 请求参数}): {@link ModifyRoleResponse 返回参数} */
  ModifyRole(data: ModifyRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoleResponse>;
  /** {@link ModifyTopic 修改主题}({@link ModifyTopicRequest 请求参数}): {@link ModifyTopicResponse 返回参数} */
  ModifyTopic(data: ModifyTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicResponse>;
  /** {@link PublishCmqMsg 发送cmq主题消息}({@link PublishCmqMsgRequest 请求参数}): {@link PublishCmqMsgResponse 返回参数} */
  PublishCmqMsg(data: PublishCmqMsgRequest, config?: AxiosRequestConfig): AxiosPromise<PublishCmqMsgResponse>;
  /** {@link ReceiveMessage 接收消息}({@link ReceiveMessageRequest 请求参数}): {@link ReceiveMessageResponse 返回参数} */
  ReceiveMessage(data: ReceiveMessageRequest, config?: AxiosRequestConfig): AxiosPromise<ReceiveMessageResponse>;
  /** {@link ResetMsgSubOffsetByTimestamp 消息回溯}({@link ResetMsgSubOffsetByTimestampRequest 请求参数}): {@link ResetMsgSubOffsetByTimestampResponse 返回参数} */
  ResetMsgSubOffsetByTimestamp(data: ResetMsgSubOffsetByTimestampRequest, config?: AxiosRequestConfig): AxiosPromise<ResetMsgSubOffsetByTimestampResponse>;
  /** {@link ResetRocketMQConsumerOffSet 重置RocketMQ消费位点}({@link ResetRocketMQConsumerOffSetRequest 请求参数}): {@link ResetRocketMQConsumerOffSetResponse 返回参数} */
  ResetRocketMQConsumerOffSet(data: ResetRocketMQConsumerOffSetRequest, config?: AxiosRequestConfig): AxiosPromise<ResetRocketMQConsumerOffSetResponse>;
  /** {@link RewindCmqQueue 回溯cmq队列}({@link RewindCmqQueueRequest 请求参数}): {@link RewindCmqQueueResponse 返回参数} */
  RewindCmqQueue(data: RewindCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<RewindCmqQueueResponse>;
  /** {@link SendBatchMessages 批量发送消息}({@link SendBatchMessagesRequest 请求参数}): {@link SendBatchMessagesResponse 返回参数} */
  SendBatchMessages(data: SendBatchMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<SendBatchMessagesResponse>;
  /** {@link SendCmqMsg 发送cmq消息}({@link SendCmqMsgRequest 请求参数}): {@link SendCmqMsgResponse 返回参数} */
  SendCmqMsg(data: SendCmqMsgRequest, config?: AxiosRequestConfig): AxiosPromise<SendCmqMsgResponse>;
  /** {@link SendMessages 发送单条消息}({@link SendMessagesRequest 请求参数}): {@link SendMessagesResponse 返回参数} */
  SendMessages(data: SendMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<SendMessagesResponse>;
  /** {@link SendMsg 发送消息}({@link SendMsgRequest 请求参数}): {@link SendMsgResponse 返回参数} */
  SendMsg(data: SendMsgRequest, config?: AxiosRequestConfig): AxiosPromise<SendMsgResponse>;
  /** {@link UnbindCmqDeadLetter 解绑cmq死信队列}({@link UnbindCmqDeadLetterRequest 请求参数}): {@link UnbindCmqDeadLetterResponse 返回参数} */
  UnbindCmqDeadLetter(data: UnbindCmqDeadLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindCmqDeadLetterResponse>;
}

export declare type Versions = ["2020-02-17"];

export default Tdmq;
