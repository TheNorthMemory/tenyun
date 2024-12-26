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

/** 用户专享集群信息 */
declare interface BindCluster {
  /** 物理集群的名称 */
  ClusterName?: string;
}

/** 客户端订阅详情，可用于辅助判断哪些客户端订阅关系不一致 */
declare interface ClientSubscriptionInfo {
  /** 客户端ID */
  ClientId?: string;
  /** 客户端IP */
  ClientAddr?: string | null;
  /** 订阅主题 */
  Topic?: string | null;
  /** 订阅表达式 */
  SubString?: string | null;
  /** 订阅方式 */
  ExpressionType?: string | null;
}

/** 集群信息集合 */
declare interface Cluster {
  /** 集群Id。 */
  ClusterId?: string;
  /** 集群名称。 */
  ClusterName?: string;
  /** 说明信息。 */
  Remark?: string;
  /** 接入点数量 */
  EndPointNum?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 集群是否健康，1表示健康，0表示异常 */
  Healthy?: number;
  /** 集群健康信息 */
  HealthyInfo?: string | null;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status?: number;
  /** 最大命名空间数量 */
  MaxNamespaceNum?: number;
  /** 最大Topic数量 */
  MaxTopicNum?: number;
  /** 最大QPS */
  MaxQps?: number;
  /** 最大消息保留时间，秒为单位 */
  MessageRetentionTime?: number;
  /** 最大存储容量 */
  MaxStorageCapacity?: number;
  /** 集群版本 */
  Version?: string | null;
  /** 公网访问接入点 */
  PublicEndPoint?: string | null;
  /** VPC访问接入点 */
  VpcEndPoint?: string | null;
  /** 命名空间数量 */
  NamespaceNum?: number | null;
  /** 已使用存储限制，MB为单位 */
  UsedStorageBudget?: number | null;
  /** 最大生产消息速率，以条数为单位 */
  MaxPublishRateInMessages?: number | null;
  /** 最大推送消息速率，以条数为单位 */
  MaxDispatchRateInMessages?: number | null;
  /** 最大生产消息速率，以字节为单位 */
  MaxPublishRateInBytes?: number | null;
  /** 最大推送消息速率，以字节为单位 */
  MaxDispatchRateInBytes?: number | null;
  /** 已创建主题数 */
  TopicNum?: number | null;
  /** 最长消息延时，以秒为单位 */
  MaxMessageDelayInSeconds?: number | null;
  /** 是否开启公网访问，不填时默认开启 */
  PublicAccessEnabled?: boolean | null;
  /** 标签 */
  Tags?: Tag[] | null;
  /** 计费模式：0: 按量计费1: 包年包月 */
  PayMode?: number | null;
  /** 项目ID */
  ProjectId?: number | null;
  /** 项目名字 */
  ProjectName?: string | null;
}

/** cmq DeadLetterPolicy */
declare interface CmqDeadLetterPolicy {
  /** 死信队列。 */
  DeadLetterQueue?: string | null;
  /** 死信队列策略。0:最大接收次数;1:最大未消费时间 */
  Policy?: number | null;
  /** 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。 */
  MaxTimeToLive?: number | null;
  /** 最大接收次数。Policy为0时必选，范围在1到1000。 */
  MaxReceiveCount?: number | null;
}

/** Cmq DeadLetterSource */
declare interface CmqDeadLetterSource {
  /** 消息队列ID。 */
  QueueId?: string | null;
  /** 消息队列名字。 */
  QueueName?: string | null;
}

/** cmq 批量queue属性信息 */
declare interface CmqQueue {
  /** 消息队列ID。 */
  QueueId?: string;
  /** 消息队列名字。 */
  QueueName?: string;
  /** 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。 */
  Qps?: number | null;
  /** 带宽限制。 */
  Bps?: number | null;
  /** 飞行消息最大保留时间，需要小于消息保留周期。 */
  MaxDelaySeconds?: number | null;
  /** 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。 */
  MaxMsgHeapNum?: number;
  /** 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。 */
  PollingWaitSeconds?: number | null;
  /** 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。 */
  MsgRetentionSeconds?: number | null;
  /** 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。 */
  VisibilityTimeout?: number | null;
  /** 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。 */
  MaxMsgSize?: number | null;
  /** 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。 */
  RewindSeconds?: number | null;
  /** 队列的创建时间。返回 Unix 时间戳，精确到毫秒。 */
  CreateTime?: number | null;
  /** 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到毫秒。 */
  LastModifyTime?: number | null;
  /** 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。 */
  ActiveMsgNum?: number | null;
  /** 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。 */
  InactiveMsgNum?: number | null;
  /** 延迟消息数。 */
  DelayMsgNum?: number | null;
  /** 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。 */
  RewindMsgNum?: number | null;
  /** 消息最小未消费时间，单位为秒。 */
  MinMsgTime?: number | null;
  /** 事务消息队列。true表示是事务消息，false表示不是事务消息。 */
  Transaction?: boolean | null;
  /** 死信队列。 */
  DeadLetterSource?: CmqDeadLetterSource[] | null;
  /** 死信队列策略。 */
  DeadLetterPolicy?: CmqDeadLetterPolicy | null;
  /** 事务消息策略。 */
  TransactionPolicy?: CmqTransactionPolicy | null;
  /** 创建者Uin。 */
  CreateUin?: number | null;
  /** 关联的标签。 */
  Tags?: Tag[] | null;
  /** 消息轨迹。true表示开启，false表示不开启。 */
  Trace?: boolean | null;
  /** 租户id */
  TenantId?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status?: number | null;
  /** 最大未确认消息数量 */
  MaxUnackedMsgNum?: number | null;
  /** 最大消息堆积大小（字节） */
  MaxMsgBacklogSize?: number | null;
  /** 队列可回溯存储空间，取值范围1024MB - 10240MB，0表示不开启 */
  RetentionSizeInMB?: number | null;
}

/** cmq订阅返回参数 */
declare interface CmqSubscription {
  /** 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName?: string | null;
  /** 订阅 ID。订阅 ID 在拉取监控数据时会用到。 */
  SubscriptionId?: string | null;
  /** 订阅拥有者的 APPID。 */
  TopicOwner?: number | null;
  /** 该订阅待投递的消息数。 */
  MsgCount?: number | null;
  /** 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到毫秒。 */
  LastModifyTime?: number | null;
  /** 订阅的创建时间。返回 Unix 时间戳，精确到毫秒。 */
  CreateTime?: number | null;
  /** 表示订阅接收消息的过滤策略。 */
  BindingKey?: string[] | null;
  /** 接收通知的 endpoint，根据协议 protocol 区分：对于 HTTP，endpoint 必须以http://开头，host 可以是域名或 IP；对于 queue，则填 queueName。 */
  Endpoint?: string | null;
  /** 描述用户创建订阅时选择的过滤策略：filterType = 1表示用户使用 filterTag 标签过滤filterType = 2表示用户使用 bindingKey 过滤。 */
  FilterTags?: string[] | null;
  /** 订阅的协议，目前支持两种协议：HTTP、queue。使用 HTTP 协议，用户需自己搭建接受消息的 Web Server。使用 queue，消息会自动推送到 CMQ queue，用户可以并发地拉取消息。 */
  Protocol?: string | null;
  /** 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值有：（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始 1s，后面是 2s，4s，8s...由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。 */
  NotifyStrategy?: string | null;
  /** 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 protocol 是 queue，则取值必须为 SIMPLIFIED。如果 protocol 是 HTTP，两个值均可以，默认值是 JSON。 */
  NotifyContentFormat?: string | null;
  /** 订阅所属的主题名称 */
  TopicName?: string | null;
}

/** cmq topic返回信息展示字段 */
declare interface CmqTopic {
  /** 主题的 ID。 */
  TopicId?: string | null;
  /** 主题名称。 */
  TopicName?: string | null;
  /** 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。 */
  MsgRetentionSeconds?: number | null;
  /** 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为1048576。 */
  MaxMsgSize?: number | null;
  /** 每秒钟发布消息的条数。 */
  Qps?: number | null;
  /** 描述用户创建订阅时选择的过滤策略：FilterType = 1表示用户使用 FilterTag 标签过滤;FilterType = 2表示用户使用 BindingKey 过滤。 */
  FilterType?: number | null;
  /** 主题的创建时间。返回 Unix 时间戳，精确到毫秒。 */
  CreateTime?: number | null;
  /** 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到毫秒。 */
  LastModifyTime?: number | null;
  /** 当前该主题中消息数目（消息堆积数）。 */
  MsgCount?: number | null;
  /** 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。 */
  CreateUin?: number | null;
  /** 关联的标签。 */
  Tags?: Tag[] | null;
  /** 消息轨迹。true表示开启，false表示不开启。 */
  Trace?: boolean | null;
  /** 租户id */
  TenantId?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败 */
  Status?: number | null;
  /** 0表示pulsar，1表示rocketmq */
  BrokerType?: number | null;
  /** 订阅数量 */
  SubscriptionCount?: number | null;
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
  ConnectedSince?: string | null;
  /** 消费者地址。 */
  ConsumerAddr?: string | null;
  /** 消费者名称。 */
  ConsumerName?: string | null;
  /** 消费者版本。 */
  ClientVersion?: string | null;
  /** 消费者连接的主题分区号 */
  Partition?: number | null;
}

/** 消费日志 */
declare interface ConsumerLog {
  /** 消息ID。 */
  MsgId: string;
  /** 消费组。 */
  ConsumerGroup: string;
  /** 消费者名称。 */
  ConsumerName: string;
  /** 消费时间。 */
  ConsumeTime: string;
  /** 消费者客户端地址。 */
  ConsumerAddr: string;
  /** 消费耗时（毫秒）。 */
  ConsumeUseTime: number;
  /** 消费状态。 */
  Status: string;
}

/** 消费信息 */
declare interface ConsumerLogs {
  /** 记录数。 */
  TotalCount?: number | null;
  /** 消费日志。 */
  ConsumerLogSets?: ConsumerLog[] | null;
}

/** 消费详情 */
declare interface ConsumerStats {
  /** 主题名 */
  TopicName?: string | null;
  /** 所属Broker */
  BrokerName?: string | null;
  /** 队列编号 */
  QueueId?: number | null;
  /** 消费者ID */
  ConsumerClientId?: string | null;
  /** 消费位点 */
  ConsumerOffset?: number | null;
  /** 服务端位点 */
  BrokerOffset?: number | null;
  /** 消息堆积条数 */
  DiffTotal?: number | null;
  /** 最近消费时间 */
  LastTimestamp?: number | null;
}

/** 消费进度详情 */
declare interface ConsumersSchedule {
  /** 当前分区id。 */
  Partitions?: number | null;
  /** 消息数量。 */
  NumberOfEntries?: number | null;
  /** 消息积压数量。 */
  MsgBacklog?: number | null;
  /** 消费者每秒分发消息的数量之和。 */
  MsgRateOut?: string;
  /** 消费者每秒消息的byte。 */
  MsgThroughputOut?: string;
  /** 超时丢弃比例。 */
  MsgRateExpired?: string | null;
}

/** 命名空间信息 */
declare interface Environment {
  /** 命名空间名称 */
  EnvironmentId?: string;
  /** 说明 */
  Remark?: string;
  /** 未消费消息过期时间，单位：秒，最大1296000（15天） */
  MsgTTL?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 最近修改时间 */
  UpdateTime?: string;
  /** 命名空间ID */
  NamespaceId?: string;
  /** 命名空间名称 */
  NamespaceName?: string;
  /** Topic数量 */
  TopicNum?: number | null;
  /** 消息保留策略 */
  RetentionPolicy?: RetentionPolicy | null;
  /** 是否自动创建订阅 */
  AutoSubscriptionCreation?: boolean | null;
}

/** 环境角色集合 */
declare interface EnvironmentRole {
  /** 环境（命名空间）。 */
  EnvironmentId?: string;
  /** 角色名称。 */
  RoleName?: string;
  /** 授权项，最多只能包含produce、consume两项的非空字符串数组。 */
  Permissions?: string[];
  /** 角色描述。 */
  RoleDescribe?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 批量绑定名字空间和角色权限关系 */
declare interface EnvironmentRoleSet {
  /** 需要绑定的命名空间Id，不重复且存在资源 */
  EnvironmentId: string | null;
  /** 名字空间需要绑定的权限，枚举为 "consume" "produce" 组合，但是不为空 */
  Permissions: string[] | null;
}

/** exchange使用配额信息 */
declare interface ExchangeQuota {
  /** 可创建最大exchange数 */
  MaxExchange?: number;
  /** 已创建exchange数 */
  UsedExchange?: number | null;
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

/** 实例节点分布信息 */
declare interface InstanceNodeDistribution {
  /** 可用区 */
  ZoneName?: string;
  /** 可用区id */
  ZoneId?: string;
  /** 节点数 */
  NodeCount?: number;
  /** 有调度任务且没有切回的可用区，此标识为true */
  NodePermWipeFlag?: boolean;
  /** 可用区状态 */
  ZoneStatus?: string | null;
}

/** 面向运营端的虚拟集群信息 */
declare interface InternalTenant {
  /** 虚拟集群ID */
  TenantId?: string;
  /** 虚拟集群名称 */
  TenantName?: string;
  /** 客户UIN */
  CustomerUin?: string;
  /** 客户的APPID */
  CustomerAppId?: string;
  /** 物理集群名称 */
  ClusterName?: string;
  /** 集群协议类型，支持的值为TDMQ，ROCKETMQ，AMQP，CMQ */
  Type?: string;
  /** 命名空间配额 */
  MaxNamespaces?: number;
  /** 已使用命名空间配额 */
  UsedNamespaces?: number;
  /** Topic配额 */
  MaxTopics?: number;
  /** 已使用Topic配额 */
  UsedTopics?: number;
  /** Topic分区数配额 */
  MaxPartitions?: number;
  /** 已使用Topic分区数配额 */
  UsedPartitions?: number;
  /** 存储配额, byte为单位 */
  MaxMsgBacklogSize?: number;
  /** 命名空间最大生产TPS */
  MaxPublishTps?: number;
  /** 消息最大保留时间，秒为单位 */
  MaxRetention?: number;
  /** 创建时间，毫秒为单位 */
  CreateTime?: number;
  /** 修改时间，毫秒为单位 */
  UpdateTime?: number;
  /** 命名空间最大消费TPS */
  MaxDispatchTps?: number;
  /** 命名空间最大消费带宽，byte为单位 */
  MaxDispatchRateInBytes?: number | null;
  /** 命名空间最大生产带宽，byte为单位 */
  MaxPublishRateInBytes?: number | null;
  /** 消息最大保留空间，MB为单位 */
  MaxRetentionSizeInMB?: number | null;
  /** public Access Enabled */
  PublicAccessEnabled?: boolean | null;
}

/** 迁移topic列表数据 */
declare interface MigrateTopic {
  /** 命名空间 */
  Namespace?: string | null;
  /** topic名称 */
  TopicName?: string | null;
  /** 迁移状态S_RW_D_NA 源集群读写S_RW_D_R 源集群读写目标集群读S_RW_D_RW 源集群读写目标集群读写S_R_D_RW 源集群读目标集群读写S_NA_D_RW 目标集群读写 */
  MigrationStatus?: string | null;
  /** 是否完成健康检查 */
  HealthCheckPassed?: boolean | null;
  /** 上次健康检查返回的错误信息，仅在HealthCheckPassed为false时有效。NotChecked 未执行检查，Unknown 未知错误,TopicNotImported 主题未导入, TopicNotExistsInSourceCluster 主题在源集群中不存在, TopicNotExistsInTargetCluster 主题在目标集群中不存在, ConsumerConnectedOnTarget 目标集群上存在消费者连接, SourceTopicHasNewMessagesIn5Minutes 源集群主题前5分钟内有新消息写入,TargetTopicHasNewMessagesIn5Minutes 目标集群主题前5分钟内有新消息写入, SourceTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入,TargetTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, ConsumerGroupCountNotMatch 订阅组数量不一致, SourceTopicHasUnconsumedMessages 源集群主题存在未消费消息, */
  HealthCheckError?: string | null;
}

/** 消息日志 */
declare interface MsgLog {
  /** 消息ID。 */
  MsgId?: string;
  /** 生产者名称。 */
  ProducerName?: string;
  /** 生产时间。 */
  ProduceTime?: string;
  /** 生产客户端地址。 */
  ProducerAddr?: string;
}

/** 分区topic */
declare interface PartitionsTopic {
  /** 最后一次间隔内发布消息的平均byte大小。 */
  AverageMsgSize?: string | null;
  /** 消费者数量。 */
  ConsumerCount?: string | null;
  /** 被记录下来的消息总数。 */
  LastConfirmedEntry?: string | null;
  /** 最后一个ledger创建的时间。 */
  LastLedgerCreatedTimestamp?: string | null;
  /** 本地和复制的发布者每秒发布消息的速率。 */
  MsgRateIn?: string | null;
  /** 本地和复制的消费者每秒分发消息的数量之和。 */
  MsgRateOut?: string | null;
  /** 本地和复制的发布者每秒发布消息的byte。 */
  MsgThroughputIn?: string | null;
  /** 本地和复制的消费者每秒分发消息的byte。 */
  MsgThroughputOut?: string | null;
  /** 被记录下来的消息总数。 */
  NumberOfEntries?: string | null;
  /** 子分区id。 */
  Partitions?: number | null;
  /** 生产者数量。 */
  ProducerCount?: string | null;
  /** 以byte计算的所有消息存储总量。 */
  TotalSize?: string | null;
  /** topic类型描述。 */
  TopicType?: number | null;
}

/** 消息生产信息 */
declare interface ProducerLog {
  /** 消息ID。 */
  MsgId?: string;
  /** 生产者名称。 */
  ProducerName?: string;
  /** 消息生产时间。 */
  ProduceTime?: string;
  /** 生产者客户端。 */
  ProducerAddr?: string;
  /** 生产耗时（秒）。 */
  ProduceUseTime?: number;
  /** 状态。 */
  Status?: string;
}

/** rabbitmq Prometheus信息 */
declare interface PrometheusEndpointInfo {
  /** Prometheus开关的状态。 */
  PrometheusEndpointStatus?: string | null;
  /** prometheus信息 */
  VpcPrometheusEndpoint?: string[] | null;
  /** 节点信息 */
  NodePrometheusAddress?: string[] | null;
  /** vpc信息 */
  VpcEndpointInfo?: VpcEndpointInfo | null;
}

/** 公网访问安全规则 */
declare interface PublicAccessRule {
  /** ip网段信息 */
  IpRule: string;
  /** 允许或者拒绝 */
  Allow: boolean;
  /** 备注信息 */
  Remark?: string | null;
}

/** 生产者信息 */
declare interface Publisher {
  /** 生产者id */
  ProducerId?: number | null;
  /** 生产者名称 */
  ProducerName?: string | null;
  /** 生产者地址 */
  Address?: string | null;
  /** 客户端版本 */
  ClientVersion?: string | null;
  /** 消息生产速率（条/秒） */
  MsgRateIn?: number | null;
  /** 消息生产吞吐速率（字节/秒） */
  MsgThroughputIn?: number | null;
  /** 平均消息大小（字节） */
  AverageMsgSize?: number | null;
  /** 连接时间 */
  ConnectedSince?: string | null;
  /** 生产者连接的主题分区号 */
  Partition?: number | null;
}

/** Pulsar 网络接入点信息 */
declare interface PulsarNetworkAccessPointInfo {
  /** vpc的id，支撑网和公网接入点，该字段为空 */
  VpcId?: string | null;
  /** 子网id，支撑网和公网接入点，该字段为空 */
  SubnetId?: string | null;
  /** 接入地址 */
  Endpoint?: string;
  /** 实例id */
  InstanceId?: string;
  /** 接入点类型：0：支撑网接入点 1：VPC接入点 2：公网接入点 */
  RouteType?: number;
  /** 0：本地域访问，由于并没有配置跨地域容灾，所该类型的接入点，无法进行异地切换、异地访问切回；1：本地域访问，由于配置了跨地域容灾，随时可以进行异地切换，该状态用于主集群的接入点2：跨地域访问，已经完成了异地切换，该状态用于源集群的接入点，该状态下的接入点不可删除3：跨地域访问，随时可以进行异地访问切回，该状态用于目标集群的接入点，该状态下的接入点不可删除4:跨地域访问，目标集群已经完成异地切回，等待删除状态 */
  OperationType?: number | null;
  /** 接入点类型 */
  AccessPointsType?: string | null;
  /** 带宽，目前只有公网会有这个值 */
  Bandwidth?: number | null;
  /** 类 */
  SecurityPolicy?: SecurityPolicy[] | null;
  /** 是否是标准的接入点 true是标准的 false不是标准的 */
  StandardAccessPoint?: boolean | null;
  /** 可用区信息 */
  ZoneName?: string;
}

/** Pulsar专业版集群信息 */
declare interface PulsarProClusterInfo {
  /** 集群Id。 */
  ClusterId?: string;
  /** 集群名称。 */
  ClusterName?: string;
  /** 说明信息。 */
  Remark?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 集群状态，0:创建中，1:正常，2:隔离 */
  Status?: number;
  /** 集群版本 */
  Version?: string;
  /** 节点分布情况 */
  NodeDistribution?: InstanceNodeDistribution[] | null;
  /** 最大储存容量，单位：MB */
  MaxStorage?: number;
  /** 是否可以修改路由 */
  CanEditRoute?: boolean | null;
  /** 代表是专业版和小规格专业版的不同计费规格PULSAR.P1固定存储PULSAR.P2弹性存储 */
  BillingLabelVersion?: string | null;
  /** 实例到期时间戳，毫秒级精度。 */
  ExpireTime?: number | null;
  /** 是否开启自动创建主题true就是开启了，false是关闭 */
  AutoCreateTopicStatus?: boolean | null;
  /** 自动创建主题的默认分区数，如果没开启就是0 */
  DefaultPartitionNumber?: number | null;
}

/** Pulsar专业版集群规格信息 */
declare interface PulsarProClusterSpecInfo {
  /** 集群规格名称 */
  SpecName?: string;
  /** 峰值tps */
  MaxTps?: number;
  /** 峰值带宽。单位：mbps */
  MaxBandWidth?: number;
  /** 最大命名空间个数 */
  MaxNamespaces?: number;
  /** 最大主题分区数 */
  MaxTopics?: number;
  /** 规格外弹性TPS */
  ScalableTps?: number | null;
  /** 32或者128当前集群topic的最大分区数 */
  MaxPartitions?: number | null;
}

/** Pulsar专业版实例信息 */
declare interface PulsarProInstance {
  /** 实例id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本 */
  InstanceVersion?: string;
  /** 实例状态，0-创建中，1-正常，2-隔离中，3-已销毁，4 - 异常, 5 - 发货失败，6-变配中，7-变配失败 */
  Status?: number;
  /** 实例配置规格名称 */
  ConfigDisplay?: string;
  /** 峰值TPS */
  MaxTps?: number;
  /** 存储容量，GB为单位 */
  MaxStorage?: number;
  /** 实例到期时间，毫秒为单位 */
  ExpireTime?: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag?: number;
  /** 0-后付费，1-预付费 */
  PayMode?: number;
  /** 备注信息 */
  Remark?: string | null;
  /** 实例配置ID */
  SpecName?: string;
  /** 规格外弹性TPS */
  ScalableTps?: number | null;
  /** VPC的id */
  VpcId?: string | null;
  /** 子网id */
  SubnetId?: string | null;
  /** 峰值带宽。单位：mbps */
  MaxBandWidth?: number;
  /** 集群的标签列表 */
  Tags?: Tag[] | null;
  /** 集群创建时间 */
  CreateTime?: string | null;
  /** 代表是专业版和小规格专业版的不同计费规格PULSAR.P1固定存储PULSAR.P2弹性存储 */
  BillingLabelVersion?: string | null;
}

/** queue使用配额信息 */
declare interface QueueQuota {
  /** 可创建最大Queue数 */
  MaxQueue?: number;
  /** 已创建Queue数 */
  UsedQueue?: number | null;
}

/** Rabbitmq路由关系列表成员 */
declare interface RabbitMQBindingListInfo {
  /** 路由关系id */
  BindingId?: number | null;
  /** Vhost参数 */
  VirtualHost?: string | null;
  /** 源exchange名称 */
  Source?: string | null;
  /** 目标类型,queue或exchange */
  DestinationType?: string | null;
  /** 目标资源名称 */
  Destination?: string | null;
  /** 绑定key */
  RoutingKey?: string | null;
  /** 源exchange类型 */
  SourceExchangeType?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
}

/** RabbitMQ集群访问信息 */
declare interface RabbitMQClusterAccessInfo {
  /** 集群公网接入地址 */
  PublicAccessEndpoint?: string | null;
  /** 集群控制台访问地址 */
  WebConsoleEndpoint?: string;
  /** 集群控制台登录用户名 */
  WebConsoleUsername?: string;
  /** 集群控制台登录密码 */
  WebConsolePassword?: string;
  /** 已废弃 */
  PublicAccessEndpointStatus?: boolean;
  /** 已废弃 */
  PublicControlConsoleSwitchStatus?: boolean;
  /** 已废弃 */
  VpcControlConsoleSwitchStatus?: boolean;
  /** Vpc管控台访问地址，示例值，http://1.1.1.1:15672 */
  VpcWebConsoleEndpoint?: string;
  /** 公网管控台开关状态，示例值，OFF/ON/CREATING/DELETING */
  PublicWebConsoleSwitchStatus?: string | null;
  /** Vpc管控台开关状态，示例值，OFF/ON/CREATING/DELETING */
  VpcWebConsoleSwitchStatus?: string | null;
  /** 公网管控台开关状态，示例值，OFF/ON/CREATING/DELETING */
  PublicDataStreamStatus?: string | null;
  /** Prometheus信息 */
  PrometheusEndpointInfo?: PrometheusEndpointInfo | null;
  /** 公网域名接入点 */
  WebConsoleDomainEndpoint?: string | null;
}

/** RabbiteMQ集群基本信息 */
declare interface RabbitMQClusterInfo {
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
  /** VPC及网络信息 */
  Vpcs?: VpcEndpointInfo[];
  /** 可用区信息 */
  ZoneIds?: number[] | null;
  /** 虚拟主机数量 */
  VirtualHostNumber?: number;
  /** 队列数量 */
  QueueNumber?: number;
  /** 每秒生产消息数 单位：条/秒 */
  MessagePublishRate?: number;
  /** 堆积消息数 单位：条 */
  MessageStackNumber?: number;
  /** 过期时间 */
  ExpireTime?: number;
  /** Channel数量 */
  ChannelNumber?: number;
  /** Connection数量 */
  ConnectionNumber?: number;
  /** Consumer数量 */
  ConsumerNumber?: number;
  /** Exchang数量 */
  ExchangeNumber?: number;
  /** 集群异常信息 */
  ExceptionInformation?: string | null;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败 */
  ClusterStatus?: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag?: number | null;
  /** 是否开启镜像队列策略。1表示开启，0表示没开启。 */
  MirrorQueuePolicyFlag?: number | null;
  /** 每秒消费消息数 单位：条/秒 */
  MessageConsumeRate?: number | null;
  /** 集群版本信息 */
  ClusterVersion?: string | null;
  /** 计费模式，0-后付费，1-预付费 */
  PayMode?: number | null;
  /** 实例类型，0 专享版、1 Serverless 版 */
  InstanceType?: number;
}

/** RabbitMQ集群规格信息 */
declare interface RabbitMQClusterSpecInfo {
  /** 集群规格名称 */
  SpecName: string;
  /** 节点数量 */
  NodeCount: number;
  /** 峰值tps */
  MaxTps: number;
  /** 峰值带宽。单位：mbps */
  MaxBandWidth: number;
  /** 存储容量。单位：GB */
  MaxStorage: number;
  /** 公网带宽tps。单位：Mbps */
  PublicNetworkTps: number;
}

/** RabbiteMQ集群白名单信息 */
declare interface RabbitMQClusterWhiteListInfo {
  /** 废弃 */
  WhiteList: string | null;
  /** 公网管控台白名单 */
  PublicControlConsoleWhiteList: string | null;
  /** 公网数据流白名单 */
  PublicDataStreamWhiteList: string | null;
  /** 公网管控台白名单状态 */
  PublicControlConsoleWhiteListStatus?: string | null;
  /** 公网数据流白名单状态 */
  PublicDataStreamWhiteListStatus?: string | null;
}

/** RabbitMQ exchange列表成员信息 */
declare interface RabbitMQExchangeListInfo {
  /** exchange 名 */
  ExchangeName?: string;
  /** 备注说明 */
  Remark?: string | null;
  /** exchange 类型, 支持 "fanout","direct","topic","headers" */
  ExchangeType?: string;
  /** VHost参数 */
  VirtualHost?: string | null;
  /** exchange 创建者, "system":"系统创建", "user":"用户创建" */
  ExchangeCreator?: string | null;
  /** exchange 创建时间 */
  CreateTimeStamp?: string | null;
  /** exchange 修改时间 */
  ModTimeStamp?: string | null;
  /** 输入消息速率 */
  MessageRateIn?: number | null;
  /** 输出消息速率 */
  MessageRateOut?: number | null;
  /** 是否为持久化交换机，true 为持久化，false 为非持久化 */
  Durable?: boolean | null;
  /** 是否为自动删除交换机，true 为自动删除，false 为非自动删除 */
  AutoDelete?: boolean | null;
  /** 是否为内部交换机，true 为内部交换机 */
  Internal?: boolean | null;
  /** 交换机所属实例 ID */
  InstanceId?: string | null;
  /** 生效的策略名称 */
  Policy?: string | null;
  /** 扩展参数 key-value 对象 */
  Arguments?: string | null;
  /** 未调度的延时消息数量 */
  MessagesDelayed?: number | null;
}

/** RabbitMQ节点信息 */
declare interface RabbitMQPrivateNode {
  /** 节点名字 */
  NodeName: string | null;
  /** 节点状态 */
  NodeStatus?: string | null;
  /** CPU使用率 */
  CPUUsage?: string | null;
  /** 内存使用情况，单位MB */
  Memory?: number | null;
  /** 磁盘使用率 */
  DiskUsage?: string | null;
  /** Rabbitmq的Erlang进程数 */
  ProcessNumber?: number | null;
}

/** RabbitMQ专享版云服务器 */
declare interface RabbitMQPrivateVirtualHost {
  /** 虚拟主机的名字 */
  VirtualHostName?: string | null;
  /** 虚拟主机的描述 */
  Description?: string | null;
}

/** RabbitMQ队列列表消费者信息 */
declare interface RabbitMQQueueListConsumerDetailInfo {
  /** 消费者数量 */
  ConsumersNumber: number | null;
}

/** RabbitMQ队列列表成员信息 */
declare interface RabbitMQQueueListInfo {
  /** 队列名 */
  QueueName?: string;
  /** 备注说明 */
  Remark?: string | null;
  /** 消费者信息 */
  ConsumerDetail?: RabbitMQQueueListConsumerDetailInfo | null;
  /** 队列类型，取值 "classic"，"quorum" */
  QueueType?: string | null;
  /** 消息堆积数 */
  MessageHeapCount?: number | null;
  /** 消息生产速率，每秒 */
  MessageRateIn?: number | null;
  /** 消息消费速率，每秒 */
  MessageRateOut?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 队列是否持久化，true 为持久化，false 为非持久化 */
  Durable?: boolean | null;
  /** 队列是否为自动删除队列，true 为自动删除，false 为非自动删除 */
  AutoDelete?: boolean | null;
  /** 队列所属实例 ID */
  InstanceId?: string | null;
  /** 队列所属虚拟主机名称 */
  VirtualHost?: string | null;
  /** 队列所在主节点名称 */
  Node?: string | null;
  /** 生效的策略名称 */
  Policy?: string | null;
  /** 扩展参数 key-value 对象 */
  Arguments?: string | null;
  /** 是否独占队列 */
  Exclusive?: boolean | null;
}

/** RabbitMQ用户实体详情 */
declare interface RabbitMQUser {
  /** 集群实例Id */
  InstanceId?: string;
  /** 用户名，登录时使用 */
  User?: string;
  /** 密码，登录时使用 */
  Password?: string;
  /** 用户描述 */
  Description?: string | null;
  /** 用户标签，用于决定改用户访问RabbitMQ Management的权限范围 */
  Tags?: string[] | null;
  /** 用户创建时间 */
  CreateTime?: string;
  /** 用户最后修改时间 */
  ModifyTime?: string;
  /** 用户类型，System：系统创建，User：用户创建 */
  Type?: string;
  /** 单个用户最大可用连接数 */
  MaxConnections?: number | null;
  /** 单个用户最大可用通道数 */
  MaxChannels?: number | null;
}

/** RabbitMQ专享实例信息 */
declare interface RabbitMQVipInstance {
  /** 实例id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本 */
  InstanceVersion?: string | null;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败 */
  Status?: number;
  /** 节点数量 */
  NodeCount?: number;
  /** 实例配置规格名称 */
  ConfigDisplay?: string;
  /** 峰值TPS */
  MaxTps?: number;
  /** 峰值带宽，Mbps为单位 */
  MaxBandWidth?: number;
  /** 存储容量，GB为单位 */
  MaxStorage?: number;
  /** 实例到期时间，毫秒为单位 */
  ExpireTime?: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag?: number;
  /** 0-后付费，1-预付费 */
  PayMode?: number;
  /** 备注信息 */
  Remark?: string | null;
  /** 实例配置ID */
  SpecName?: string;
  /** 集群异常。 */
  ExceptionInformation?: string | null;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败为了和计费区分开，额外开启一个状态位，用于显示。 */
  ClusterStatus?: number;
  /** 公网接入点 */
  PublicAccessEndpoint?: string | null;
  /** VPC 接入点列表 */
  Vpcs?: VpcEndpointInfo[] | null;
  /** 创建时间，毫秒为单位 */
  CreateTime?: number | null;
  /** 实例类型，0 专享版、1 Serverless 版 */
  InstanceType?: number;
}

/** RabbitMQ的vhost详情 */
declare interface RabbitMQVirtualHostInfo {
  /** 集群实例Id */
  InstanceId?: string;
  /** vhost名 */
  VirtualHost?: string;
  /** vhost描述信息 */
  Description?: string | null;
  /** vhost标签 */
  Tags?: string[] | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** vhost概览统计信息 */
  VirtualHostStatistics?: RabbitMQVirtualHostStatistics | null;
  /** 消息轨迹开关,true打开,false关闭 */
  TraceFlag?: boolean | null;
  /** vhost状态，与原生控制台对应，有running、partial、stopped、unknown */
  Status?: string | null;
  /** 消息堆积数 */
  MessageHeapCount?: number | null;
  /** 输入消息速率 */
  MessageRateIn?: number | null;
  /** 输出消息速率 */
  MessageRateOut?: number | null;
  /** 是否存在镜像队列策略，true 为存在，false 为不存 */
  MirrorQueuePolicyFlag?: boolean | null;
}

/** vhost概览统计信息 */
declare interface RabbitMQVirtualHostStatistics {
  /** 当前vhost的queue数量 */
  CurrentQueues?: number;
  /** 当前vhost的exchange数量 */
  CurrentExchanges?: number;
  /** 当前vhost的连接数量 */
  CurrentConnections?: number;
  /** 当前vhost的channel数量 */
  CurrentChannels?: number;
  /** 当前vhost的用户数量 */
  CurrentUsers?: number;
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
  /** 单命名空间TPS上限 */
  MaxTpsPerNamespace?: number;
  /** 最大命名空间数量 */
  MaxNamespaceNum?: number;
  /** 已使用命名空间数量 */
  UsedNamespaceNum?: number;
  /** 最大Topic数量 */
  MaxTopicNum?: number;
  /** 已使用Topic数量 */
  UsedTopicNum?: number;
  /** 最大Group数量 */
  MaxGroupNum?: number;
  /** 已使用Group数量 */
  UsedGroupNum?: number;
  /** 消息最大保留时间，以毫秒为单位 */
  MaxRetentionTime?: number;
  /** 消息最长延时，以毫秒为单位 */
  MaxLatencyTime?: number;
  /** 单个主题最大队列数 */
  MaxQueuesPerTopic?: number | null;
  /** topic分布 */
  TopicDistribution?: RocketMQTopicDistribution[] | null;
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
  /** TCP内部接入地址 */
  InternalEndpoint?: string | null;
  /** HTTP协议内部接入地址 */
  HttpInternalEndpoint?: string | null;
  /** 是否开启ACL鉴权，专享实例支持关闭 */
  AclEnabled?: boolean | null;
  /** 公网CLB实例ID */
  PublicClbId?: string | null;
  /** vip */
  Vip?: string | null;
  /** 所属VPC */
  VpcId?: string | null;
  /** 是否支持迁移 */
  SupportMigration?: boolean | null;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败，6 - 变配中，7 - 变配失败 */
  InstanceStatus?: number | null;
  /** 集群所属可用区，表明集群归属的可用区 */
  ZoneId?: number | null;
  /** 集群节点所在的可用区，若该集群为跨可用区集群，则包含该集群节点所在的多个可用区。 */
  ZoneIds?: number[] | null;
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

/** 在线消费者情况 */
declare interface RocketMQConsumerConnection {
  /** 消费者实例ID */
  ClientId?: string;
  /** 消费者实例的地址和端口 */
  ClientAddr?: string;
  /** 消费者应用的语言版本 */
  Language?: string;
  /** 消息堆积量 */
  Accumulative?: number;
  /** 消费端版本 */
  Version?: string;
}

/** 消费者详情中的主题信息 */
declare interface RocketMQConsumerTopic {
  /** 主题名称 */
  Topic?: string;
  /** 主题类型，Normal表示普通，GlobalOrder表示全局顺序，PartitionedOrder表示局部顺序，Transaction表示事务，Retry表示重试，DeadLetter表示死信 */
  Type?: string;
  /** 分区数 */
  PartitionNum?: number;
  /** 消息堆积数 */
  Accumulative?: number;
  /** 最后消费时间，以毫秒为单位 */
  LastConsumptionTime?: number;
  /** 订阅规则 */
  SubRule?: string | null;
}

/** 监控数据点 */
declare interface RocketMQDataPoint {
  /** 监控值数组，该数组和Timestamps一一对应 */
  Timestamps?: number[] | null;
  /** 监控数据点位置，比如一天按分钟划分有1440个点，每个点的序号是0 - 1439之间的一个数，当某个序号不在该数组中，说明掉点了 */
  Values?: number[] | null;
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

/** RocketMQ消费组配置信息 */
declare interface RocketMQGroupConfig {
  /** 命名空间 */
  Namespace: string;
  /** 消费组名称 */
  GroupName: string;
  /** 是否开启广播消费 */
  ConsumeBroadcastEnable: boolean;
  /** 是否开启消费 */
  ConsumeEnable: boolean;
  /** 备注信息 */
  Remark?: string;
  /** 协议类型，支持以下枚举值TCP;HTTP; */
  ConsumerGroupType?: string;
}

/** RocketMQ消费组配置信息 */
declare interface RocketMQGroupConfigOutput {
  /** 命名空间 */
  Namespace?: string | null;
  /** 消费组名称 */
  GroupName?: string | null;
  /** 是否已导入 */
  Imported?: boolean | null;
  /** remark */
  Remark?: string | null;
}

/** RocketMQ专享集群实例配置 */
declare interface RocketMQInstanceConfig {
  /** 单命名空间TPS上线 */
  MaxTpsPerNamespace?: number;
  /** 最大命名空间数量 */
  MaxNamespaceNum?: number;
  /** 已使用命名空间数量 */
  UsedNamespaceNum?: number;
  /** 最大Topic数量 */
  MaxTopicNum?: number;
  /** 已使用Topic数量 */
  UsedTopicNum?: number;
  /** 最大Group数量 */
  MaxGroupNum?: number;
  /** 已使用Group数量 */
  UsedGroupNum?: number;
  /** 集群类型 */
  ConfigDisplay?: string;
  /** 集群节点数 */
  NodeCount?: number;
  /** 节点分布情况 */
  NodeDistribution?: InstanceNodeDistribution[];
  /** topic分布情况 */
  TopicDistribution?: RocketMQTopicDistribution[];
  /** 每个主题最大队列数 */
  MaxQueuesPerTopic?: number | null;
  /** 最大可设置消息保留时间，小时为单位 */
  MaxRetention?: number | null;
  /** 最小可设置消息保留时间，小时为单位 */
  MinRetention?: number | null;
  /** 实例消息保留时间，小时为单位 */
  Retention?: number | null;
  /** Topic个数最小配额，即免费额度，默认为集群规格单节点最小配额*节点个数 */
  TopicNumLowerLimit?: number | null;
  /** Topic个数最大配额，默认为集群规格单节点最大配额*节点个数 */
  TopicNumUpperLimit?: number | null;
}

/** Rocketmq消息消费track信息 */
declare interface RocketMQMessageTrack {
  /** 消费者组 */
  Group?: string;
  /** 消费状态,CONSUMED: 已消费CONSUMED_BUT_FILTERED: 已过滤NOT_CONSUME: 未消费ENTER_RETRY: 进入重试队列ENTER_DLQ: 进入死信队列UNKNOWN: 查询不到消费状态 */
  ConsumeStatus?: string;
  /** 消息track类型 */
  TrackType?: string;
  /** 异常信息 */
  ExceptionDesc?: string | null;
}

/** 迁移主题的阶段分布 */
declare interface RocketMQMigrationTopicDistribution {
  /** 迁移主题阶段 */
  Stage?: string | null;
  /** 数量 */
  Count?: number | null;
}

/** rocketmq消息日志 */
declare interface RocketMQMsgLog {
  /** 消息id */
  MsgId?: string;
  /** 消息tag */
  MsgTag?: string | null;
  /** 消息key */
  MsgKey?: string | null;
  /** 客户端地址 */
  ProducerAddr?: string;
  /** 消息发送时间 */
  ProduceTime?: string;
  /** pulsar消息id */
  PulsarMsgId?: string;
  /** 死信重发次数 */
  DeadLetterResendTimes?: number | null;
  /** 死信重发成功次数 */
  ResendSuccessCount?: number | null;
}

/** RocketMQ命名空间信息 */
declare interface RocketMQNamespace {
  /** 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  NamespaceId?: string;
  /** 已废弃，未消费消息的保留时间，以毫秒单位，范围60秒到15天 */
  Ttl?: number;
  /** 消息持久化后保留的时间，以毫秒单位 */
  RetentionTime?: number;
  /** 说明 */
  Remark?: string | null;
  /** 公网接入点地址 */
  PublicEndpoint?: string | null;
  /** VPC接入点地址 */
  VpcEndpoint?: string | null;
  /** 内部接入点地址 */
  InternalEndpoint?: string | null;
}

/** RocketMQ平滑迁移任务 */
declare interface RocketMQSmoothMigrationTaskItem {
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 源集群名称 */
  SourceClusterName?: string | null;
  /** 目标集群ID */
  ClusterId?: string | null;
  /** 网络连接类型，PUBLIC 公网VPC 私有网络OTHER 其他 */
  ConnectionType?: string | null;
  /** 源集群NameServer地址 */
  SourceNameServer?: string | null;
  /** 任务状态Configuration 迁移配置SourceConnecting 连接源集群中MetaDataImport 元数据导入EndpointSetup 切换接入点ServiceMigration 切流中Completed 已完成Cancelled 已取消 */
  TaskStatus?: string | null;
}

/** RocketMQ消费组订阅信息 */
declare interface RocketMQSubscription {
  /** 主题名称 */
  Topic?: string;
  /** 主题类型：Normal 普通,GlobalOrder 全局顺序,PartitionedOrder 局部顺序,Transaction 事务消息,DelayScheduled 延时消息,Retry 重试,DeadLetter 死信 */
  Type?: string | null;
  /** 分区数 */
  PartitionNum?: number | null;
  /** 过滤模式，TAG，SQL */
  ExpressionType?: string | null;
  /** 过滤表达式 */
  SubString?: string | null;
  /** 订阅状态：0，订阅关系一致1，订阅关系不一致2，未知 */
  Status?: number | null;
  /** 消费堆积数量 */
  ConsumerLag?: number | null;
  /** 实例ID */
  ClusterId?: string | null;
  /** 消费组名称 */
  ConsumerGroup?: string | null;
  /** 是否在线 */
  IsOnline?: boolean | null;
  /** 消费类型0: 广播消费1: 集群消费 */
  ConsumeType?: number | null;
  /** 订阅一致性 */
  Consistency?: number | null;
  /** 最后消费进度更新时间，秒为单位 */
  LastUpdateTime?: number | null;
  /** 最大重试次数 */
  MaxRetryTimes?: number | null;
  /** 协议类型 */
  ClientProtocol?: string | null;
  /** 客户端订阅详情 */
  ClientSubscriptionInfos?: ClientSubscriptionInfo[] | null;
}

/** RocketMQ主题信息 */
declare interface RocketMQTopic {
  /** 主题名称 */
  Name?: string;
  /** 主题的类别，为枚举类型，Normal，GlobalOrder，PartitionedOrder，Transaction，Retry及DeadLetter */
  Type?: string;
  /** 订阅组数量 */
  GroupNum?: number;
  /** 说明 */
  Remark?: string | null;
  /** 读写分区数 */
  PartitionNum?: number;
  /** 创建时间，以毫秒为单位 */
  CreateTime?: number;
  /** 创建时间，以毫秒为单位 */
  UpdateTime?: number;
  /** 最后写入时间，单位为秒 */
  LastUpdateTime?: number | null;
  /** 订阅数量 */
  SubscriptionCount?: number | null;
  /** 订阅关系列表 */
  SubscriptionData?: RocketMQSubscription[] | null;
}

/** RocketMQ主题配置信息 */
declare interface RocketMQTopicConfig {
  /** 命名空间 */
  Namespace: string;
  /** 主题名称 */
  TopicName: string;
  /** 主题类型：Normal，普通PartitionedOrder, 分区顺序Transaction，事务消息DelayScheduled，延迟/定时消息 */
  Type: string;
  /** 分区个数 */
  Partitions: number;
  /** 备注信息 */
  Remark?: string;
}

/** RocketMQ主题配置信息 */
declare interface RocketMQTopicConfigOutput {
  /** 命名空间 */
  Namespace?: string | null;
  /** 主题名称 */
  TopicName?: string | null;
  /** 主题类型：Normal，普通GlobalOrder， 全局顺序PartitionedOrder, 分区顺序Transaction，事务消息DelayScheduled，延迟/定时消息 */
  Type?: string | null;
  /** 分区个数 */
  Partitions?: number | null;
  /** 备注信息 */
  Remark?: string | null;
  /** 是否导入 */
  Imported?: boolean | null;
}

/** RocketMQtopic分布情况 */
declare interface RocketMQTopicDistribution {
  /** topic类型 */
  TopicType: string;
  /** topic数量 */
  Count: number;
}

/** RocketMQ专享实例信息 */
declare interface RocketMQVipInstance {
  /** 实例id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本 */
  InstanceVersion?: string | null;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败，6 - 变配中，7 - 变配失败 */
  Status?: number;
  /** 节点数量 */
  NodeCount?: number;
  /** 实例配置规格名称 */
  ConfigDisplay?: string;
  /** 峰值TPS */
  MaxTps?: number;
  /** 峰值带宽，Mbps为单位 */
  MaxBandWidth?: number;
  /** 存储容量，GB为单位 */
  MaxStorage?: number;
  /** 实例到期时间，毫秒为单位 */
  ExpireTime?: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag?: number;
  /** 0-后付费，1-预付费 */
  PayMode?: number;
  /** 备注信息 */
  Remark?: string | null;
  /** 实例配置ID */
  SpecName?: string;
  /** 最大可设置消息保留时间，小时为单位 */
  MaxRetention?: number | null;
  /** 最小可设置消息保留时间，小时为单位 */
  MinRetention?: number | null;
  /** 实例消息保留时间，小时为单位 */
  Retention?: number | null;
  /** 是否开启ACL鉴权 */
  AclEnabled?: boolean | null;
  /** 销毁时间 */
  DestroyTime?: number | null;
}

/** 角色实例 */
declare interface Role {
  /** 角色名称。 */
  RoleName?: string;
  /** 角色token值。 */
  Token?: string;
  /** 备注说明。 */
  Remark?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 安全策略 */
declare interface SecurityPolicy {
  /** ip或者网段 */
  Route?: string | null;
  /** 策略 true就是允许，白名单或者 false 拒绝 黑名单 */
  Policy?: boolean | null;
  /** 备注 */
  Remark?: string | null;
}

/** 服务方信息 */
declare interface ServerLog {
  /** 存储时间。 */
  SaveTime?: string;
  /** 状态。 */
  Status?: string;
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
  TopicName?: string;
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 消费者开始连接的时间。 */
  ConnectedSince?: string | null;
  /** 消费者地址。 */
  ConsumerAddr?: string | null;
  /** 消费者数量。 */
  ConsumerCount?: string | null;
  /** 消费者名称。 */
  ConsumerName?: string | null;
  /** 堆积的消息数量。 */
  MsgBacklog?: string | null;
  /** 于TTL，此订阅下没有被发送而是被丢弃的比例。 */
  MsgRateExpired?: string | null;
  /** 消费者每秒分发消息的数量之和。 */
  MsgRateOut?: string | null;
  /** 消费者每秒消息的byte。 */
  MsgThroughputOut?: string | null;
  /** 订阅名称。 */
  SubscriptionName?: string | null;
  /** 消费者集合。 */
  ConsumerSets?: Consumer[] | null;
  /** 是否在线。 */
  IsOnline?: boolean | null;
  /** 消费进度集合。 */
  ConsumersScheduleSets?: ConsumersSchedule[] | null;
  /** 备注。 */
  Remark?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 最近修改时间。 */
  UpdateTime?: string | null;
  /** 订阅类型，Exclusive，Shared，Failover， Key_Shared，空或NULL表示未知， */
  SubType?: string | null;
  /** 是否由于未 ack 数到达上限而被 block */
  BlockedSubscriptionOnUnackedMsgs?: boolean | null;
  /** 未 ack 消息数上限 */
  MaxUnackedMsgNum?: number | null;
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
  TagKey: string | null;
  /** 标签的Value的值 */
  TagValue: string | null;
}

/** 主题实例 */
declare interface Topic {
  /** 最后一次间隔内发布消息的平均byte大小。 */
  AverageMsgSize?: string | null;
  /** 消费者数量。 */
  ConsumerCount?: string | null;
  /** 被记录下来的消息总数。 */
  LastConfirmedEntry?: string | null;
  /** 最后一个ledger创建的时间。 */
  LastLedgerCreatedTimestamp?: string | null;
  /** 本地和复制的发布者每秒发布消息的速率。 */
  MsgRateIn?: string | null;
  /** 本地和复制的消费者每秒分发消息的数量之和。 */
  MsgRateOut?: string | null;
  /** 本地和复制的发布者每秒发布消息的byte。 */
  MsgThroughputIn?: string | null;
  /** 本地和复制的消费者每秒分发消息的byte。 */
  MsgThroughputOut?: string | null;
  /** 被记录下来的消息总数。 */
  NumberOfEntries?: string | null;
  /** 分区数<=0：topic下无子分区。 */
  Partitions?: number | null;
  /** 生产者数量。 */
  ProducerCount?: string | null;
  /** 以byte计算的所有消息存储总量。 */
  TotalSize?: string | null;
  /** 分区topic里面的子分区。 */
  SubTopicSets?: PartitionsTopic[] | null;
  /** topic类型描述：0：普通消息；1：全局顺序消息；2：局部顺序消息；3：重试队列；4：死信队列；5：事务消息。 */
  TopicType?: number | null;
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string | null;
  /** 主题名称。 */
  TopicName?: string | null;
  /** 说明，128个字符以内。 */
  Remark?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 最近修改时间。 */
  UpdateTime?: string | null;
  /** 生产者上限。 */
  ProducerLimit?: string | null;
  /** 消费者上限。 */
  ConsumerLimit?: string | null;
  /** 0: 非持久非分区1: 非持久分区2: 持久非分区3: 持久分区 */
  PulsarTopicType?: number | null;
  /** 未消费消息过期时间，单位：秒 */
  MsgTTL?: number | null;
}

/** 主题关键信息 */
declare interface TopicRecord {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名称。 */
  TopicName: string;
}

/** Topic状态 */
declare interface TopicStats {
  /** 所属Broker节点 */
  BrokerName?: string | null;
  /** 队列编号 */
  QueueId?: number | null;
  /** 最小位点 */
  MinOffset?: number | null;
  /** 最大位点 */
  MaxOffset?: number | null;
  /** 消息条数 */
  MessageCount?: number | null;
  /** 消息最后写入时间 */
  LastUpdateTimestamp?: number | null;
}

/** 消息轨迹结果 */
declare interface TraceResult {
  /** 阶段 */
  Stage: string;
  /** 内容详情 */
  Data: string;
}

/** vhost使用配额信息 */
declare interface VirtualHostQuota {
  /** 允许创建最大vhost数 */
  MaxVirtualHost?: number;
  /** 已创建vhost数 */
  UsedVirtualHost?: number | null;
}

/** vcp绑定记录 */
declare interface VpcBindRecord {
  /** 租户Vpc Id */
  UniqueVpcId?: string;
  /** 租户Vpc子网Id */
  UniqueSubnetId?: string;
  /** 路由Id */
  RouterId?: string;
  /** Vpc的Id */
  Ip?: string;
  /** Vpc的Port */
  Port?: number;
  /** 说明，128个字符以内 */
  Remark?: string | null;
}

/** VPC配置信息 */
declare interface VpcConfig {
  /** vpc的id */
  VpcId: string;
  /** 子网id */
  SubnetId: string;
}

/** VPC接入点信息 */
declare interface VpcEndpointInfo {
  /** vpc的id */
  VpcId: string;
  /** 子网id */
  SubnetId: string;
  /** vpc接入点信息 */
  VpcEndpoint: string;
  /** vpc接入点状态OFF/ON/CREATING/DELETING */
  VpcDataStreamEndpointStatus?: string | null;
}

/** vpc信息（由UniqVpcId和UniqSubnetId组成） */
declare interface VpcInfo {
  /** vpc信息 */
  VpcId: string;
  /** 子网信息 */
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
  /** 如果为""，则说明没有错误返回，否则返回具体的错误信息。 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClearCmqQueueRequest {
  /** 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
}

declare interface ClearCmqQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClearCmqSubscriptionFilterTagsRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
}

declare interface ClearCmqSubscriptionFilterTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** 集群名称，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。 */
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
  ClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCmqQueueRequest {
  /** 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
  /** 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。 */
  MaxMsgHeapNum?: number;
  /** 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。 */
  PollingWaitSeconds?: number;
  /** 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。 */
  VisibilityTimeout?: number;
  /** 消息最大长度。取值范围 1024-1048576 Byte（即1-1024K），默认值 1048576。 */
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
  QueueId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCmqSubscribeRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
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
  SubscriptionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCmqTopicRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
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
  TopicId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEnvironmentRequest {
  /** 环境（命名空间）名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。 */
  EnvironmentId: string;
  /** 未消费消息过期时间，单位：秒，取值范围：60秒~15天。 */
  MsgTTL: number;
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 说明，128个字符以内。 */
  Remark?: string;
  /** 消息保留策略 */
  RetentionPolicy?: RetentionPolicy;
  /** 是否开启自动创建订阅 */
  AutoSubscriptionCreation?: boolean;
}

declare interface CreateEnvironmentResponse {
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 未消费消息过期时间，单位：秒。 */
  MsgTTL?: number;
  /** 说明，128个字符以内。 */
  Remark?: string | null;
  /** 命名空间ID */
  NamespaceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ClusterId: string;
}

declare interface CreateEnvironmentRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProClusterRequest {
  /** 多可用区部署选择三个可用区，示例[200002,200003,200004]单可用区部署选择一个可用区，示例[200002] */
  ZoneIds: number[];
  /** 集群规格代号参考 [专业集群规格](https://cloud.tencent.com/document/product/1179/83705) */
  ProductName: string;
  /** 存储规格参考 [专业集群规格](https://cloud.tencent.com/document/product/1179/83705) */
  StorageSize: number;
  /** 1: true，开启自动按月续费0: false，关闭自动按月续费 */
  AutoRenewFlag: number;
  /** 购买时长，取值范围：1～50 */
  TimeSpan: number;
  /** 集群名称，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。 */
  ClusterName: string;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher: number;
  /** vpc网络标签 */
  Vpc?: VpcInfo;
  /** 集群的标签列表(已废弃) */
  Tags?: Tag[];
}

declare interface CreateProClusterResponse {
  /** 子订单号 */
  DealName?: string;
  /** 订单号 */
  BigDealId?: string;
  /** 集群Id */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQBindingRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost名称 */
  VirtualHost: string;
  /** 源exchange */
  Source: string;
  /** 目标类型,取值queue或exchange */
  DestinationType: string;
  /** 目标 */
  Destination: string;
  /** 路由键 */
  RoutingKey?: string;
}

declare interface CreateRabbitMQBindingResponse {
  /** 实例名称 */
  InstanceId?: string | null;
  /** vhost名称 */
  VirtualHost?: string | null;
  /** 路由关系Id */
  BindingId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQUserRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名，登录时使用 */
  User: string;
  /** 密码，登录时使用 */
  Password: string;
  /** 描述 */
  Description?: string;
  /** 用户标签，用于决定改用户访问RabbitMQ Management的权限范围management：普通控制台用户，monitoring：管理型控制台用户，其他值：非控制台用户 */
  Tags?: string[];
  /** 该用户的最大连接数，不填写则不限制 */
  MaxConnections?: number;
  /** 该用户的最大channel数，不填写则不限制 */
  MaxChannels?: number;
}

declare interface CreateRabbitMQUserResponse {
  /** 用户名，登录时使用 */
  User?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQVipInstanceRequest {
  /** 可用区 */
  ZoneIds: number[];
  /** 私有网络VpcId */
  VpcId: string;
  /** 私有网络SubnetId */
  SubnetId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 节点规格,基础型rabbit-vip-basic-1,标准型rabbit-vip-basic-2,高阶1型rabbit-vip-basic-3,高阶2型rabbit-vip-basic-4。不传默认为基础型 */
  NodeSpec?: string;
  /** 节点数量,多可用区最少为3节点。不传默认单可用区为1,多可用区为3 */
  NodeNum?: number;
  /** 单节点存储规格,不传默认为200G */
  StorageSize?: number;
  /** 镜像队列,不传默认为false */
  EnableCreateDefaultHaMirrorQueue?: boolean;
  /** 预付费使用。自动续费,不传默认为true */
  AutoRenewFlag?: boolean;
  /** 购买时长,不传默认为1(月) */
  TimeSpan?: number;
  /** 付费方式，0 为后付费，即按量计费；1 为预付费，即包年包月。默认包年包月 */
  PayMode?: number;
  /** 集群版本，不传默认为 3.8.30，可选值为 3.8.30 和 3.11.8 */
  ClusterVersion?: string;
  /** 是否国际站请求，默认 false */
  IsIntl?: boolean;
  /** 资源标签列表 */
  ResourceTags?: Tag[];
  /** 公网带宽大小，单位 M */
  Bandwidth?: number;
  /** 是否打开公网接入，不传默认为false */
  EnablePublicAccess?: boolean;
}

declare interface CreateRabbitMQVipInstanceResponse {
  /** 订单号Id */
  TranId?: string | null;
  /** 实例Id */
  InstanceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQVirtualHostRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名 */
  VirtualHost: string;
  /** 描述 */
  Description?: string;
  /** 消息轨迹开关,true打开,false关闭,默认关闭 */
  TraceFlag?: boolean;
  /** 是否创建镜像队列策略，默认值 true */
  MirrorQueuePolicyFlag?: boolean;
}

declare interface CreateRabbitMQVirtualHostResponse {
  /** vhost名 */
  VirtualHost?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRocketMQEnvironmentRoleRequest {
  /** 命名空间 */
  EnvironmentId: string;
  /** 角色名称。 */
  RoleName: string;
  /** 授权项，最多只能包含produce、consume两项的非空字符串数组。 */
  Permissions: string[];
  /** 必填字段，集群的ID */
  ClusterId: string;
}

declare interface CreateRocketMQEnvironmentRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRocketMQNamespaceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  NamespaceId: string;
  /** 已废弃 */
  Ttl?: number;
  /** 已废弃 */
  RetentionTime?: number;
  /** 说明，最大128个字符 */
  Remark?: string;
}

declare interface CreateRocketMQNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRocketMQRoleRequest {
  /** 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。 */
  RoleName: string;
  /** 必填字段，集群Id */
  ClusterId: string;
  /** 备注说明，长度必须大等于0且小等于128。 */
  Remark?: string;
}

declare interface CreateRocketMQRoleResponse {
  /** 角色名称 */
  RoleName?: string;
  /** 角色token */
  Token?: string;
  /** 备注说明 */
  Remark?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRocketMQTopicRequest {
  /** 主题名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  Topic: string;
  /** 主题所在的命名空间，目前支持在单个命名空间下创建主题 */
  Namespaces: string[];
  /** 主题类型，可选值为Normal, GlobalOrder, PartitionedOrder, Transaction, DelayScheduled。Transaction仅在专享版支持。 */
  Type: string;
  /** 集群ID */
  ClusterId: string;
  /** 主题说明，最大128个字符 */
  Remark?: string;
  /** 分区数，全局顺序无效 */
  PartitionNum?: number;
}

declare interface CreateRocketMQTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRocketMQVipInstanceRequest {
  /** 实例名称 */
  Name: string;
  /** 集群规格，支持规格有 1.通用型:rocket-vip-basic-0; 2.基础型:rocket-vip-basic-1; 3.标准型:rocket-vip-basic-2; 4.高阶Ⅰ型:rocket-vip-basic-3; 5.高阶Ⅱ型:rocket-vip-basic-4 */
  Spec: string;
  /** 节点数量，最小2，最大20 */
  NodeCount: number;
  /** 单节点存储空间，GB为单位，最低200GB */
  StorageSize: number;
  /** 节点部署的区域ID列表，如广州一区，则是100001，具体可查询腾讯云官网 */
  ZoneIds: string[];
  /** VPC信息 */
  VpcInfo: VpcInfo;
  /** 购买时长，月为单位 */
  TimeSpan: number;
  /** 是否用于迁移上云，默认为false */
  SupportsMigrateToCloud?: boolean;
  /** 是否开启公网 */
  EnablePublic?: boolean;
  /** 公网带宽，在开启公网情况下为必传字段 */
  Bandwidth?: number;
  /** 公网白名单 */
  IpRules?: PublicAccessRule[];
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreateRocketMQVipInstanceResponse {
  /** 集群ID */
  ClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoleRequest {
  /** 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。 */
  RoleName: string;
  /** 备注说明，长度必须大等于0且小等于128。 */
  Remark: string;
  /** 必填字段，集群Id */
  ClusterId: string;
}

declare interface CreateRoleResponse {
  /** 角色名称 */
  RoleName?: string;
  /** 角色token */
  Token?: string;
  /** 备注说明 */
  Remark?: string | null;
  /** 批量绑定名字空间 */
  EnvironmentRoleSets?: EnvironmentRoleSet[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 备注，128个字符以内。 */
  Remark?: string;
  /** 是否自动创建死信和重试主题，True 表示创建，False表示不创建，默认自动创建死信和重试主题。 */
  AutoCreatePolicyTopic?: boolean;
  /** 指定死信和重试主题名称规范，LEGACY表示历史命名规则，COMMUNITY表示Pulsar社区命名规范 */
  PostFixPattern?: string;
}

declare interface CreateSubscriptionResponse {
  /** 创建结果。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。 */
  TopicName: string;
  /** 入参为1，即是创建非分区topic，无分区；入参大于1，表示分区topic的分区数，最大不允许超过32。 */
  Partitions: number;
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 备注，128字符以内。 */
  Remark?: string;
  /** 该入参将逐步弃用，可切换至PulsarTopicType参数0： 普通消息；1 ：全局顺序消息；2 ：局部顺序消息；3 ：重试队列；4 ：死信队列。 */
  TopicType?: number;
  /** Pulsar 主题类型0: 非持久非分区1: 非持久分区2: 持久非分区3: 持久分区 */
  PulsarTopicType?: number;
  /** 未消费消息过期时间，单位：秒，取值范围：60秒~15天。 */
  MsgTTL?: number;
}

declare interface CreateTopicResponse {
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 主题名。 */
  TopicName?: string;
  /** 0或1：非分区topic，无分区；大于1：具体分区topic的分区数。（存量非分区主题返回0，增量非分区主题返回1） */
  Partitions?: number;
  /** 备注，128字符以内。 */
  Remark?: string | null;
  /** 0： 普通消息；1 ：全局顺序消息；2 ：局部顺序消息；3 ：重试队列；4 ：死信队列； */
  TopicType?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 集群Id，传入需要删除的集群Id。 */
  ClusterId: string;
}

declare interface DeleteClusterResponse {
  /** 集群的ID */
  ClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCmqQueueRequest {
  /** 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
}

declare interface DeleteCmqQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCmqSubscribeRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
}

declare interface DeleteCmqSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCmqTopicRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
}

declare interface DeleteCmqTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEnvironmentRolesRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 角色名称数组。 */
  RoleNames: string[];
  /** 必填字段，集群的ID */
  ClusterId: string;
}

declare interface DeleteEnvironmentRolesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEnvironmentsRequest {
  /** 环境（命名空间）数组，每次最多删除20个。 */
  EnvironmentIds: string[];
  /** Pulsar 集群的ID */
  ClusterId: string;
}

declare interface DeleteEnvironmentsResponse {
  /** 成功删除的环境（命名空间）数组。 */
  EnvironmentIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProClusterRequest {
  /** 集群Id */
  ClusterId: string;
}

declare interface DeleteProClusterResponse {
  /** 退还实例订单号 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQBindingRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost: string;
  /** 路由关系Id */
  BindingId: number;
}

declare interface DeleteRabbitMQBindingResponse {
  /** 实例名称 */
  InstanceId?: string | null;
  /** vhost参数 */
  VirtualHost?: string | null;
  /** 路由关系Id */
  BindingId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQUserRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名，登录时使用 */
  User: string;
}

declare interface DeleteRabbitMQUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQVipInstanceRequest {
  /** 实例Id */
  InstanceId: string;
  /** 是否国际站请求，默认 false */
  IsIntl?: boolean;
}

declare interface DeleteRabbitMQVipInstanceResponse {
  /** 订单号Id */
  TranId?: string | null;
  /** 实例Id */
  InstanceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQVirtualHostRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名 */
  VirtualHost: string;
}

declare interface DeleteRabbitMQVirtualHostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRocketMQClusterRequest {
  /** 待删除的集群Id。 */
  ClusterId: string;
}

declare interface DeleteRocketMQClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRocketMQEnvironmentRolesRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 角色名称数组。 */
  RoleNames: string[];
  /** 集群的ID */
  ClusterId: string;
}

declare interface DeleteRocketMQEnvironmentRolesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRocketMQNamespaceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
}

declare interface DeleteRocketMQNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRocketMQRolesRequest {
  /** 角色名称数组。 */
  RoleNames: string[];
  /** 必填字段，集群Id */
  ClusterId: string;
}

declare interface DeleteRocketMQRolesResponse {
  /** 成功删除的角色名称数组。 */
  RoleNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRocketMQVipInstanceRequest {
  /** 实例的集群ID */
  ClusterId: string;
}

declare interface DeleteRocketMQVipInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRolesRequest {
  /** 角色名称数组。 */
  RoleNames: string[];
  /** 必填字段，集群Id */
  ClusterId: string;
}

declare interface DeleteRolesResponse {
  /** 成功删除的角色名称数组。 */
  RoleNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  SubscriptionTopicSets?: SubscriptionTopic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicsRequest {
  /** 主题集合，每次最多删除20个。 */
  TopicSets: TopicRecord[];
  /** pulsar集群Id。 */
  ClusterId: string;
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 是否强制删除，默认为false */
  Force?: boolean;
}

declare interface DeleteTopicsResponse {
  /** 被删除的主题数组。 */
  TopicSets?: TopicRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 虚拟集群列表 */
  Tenants?: InternalTenant[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBindClustersRequest {
}

declare interface DescribeBindClustersResponse {
  /** 专享集群的数量 */
  TotalCount?: number;
  /** 专享集群的列表 */
  ClusterSet?: BindCluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailRequest {
  /** 集群的ID */
  ClusterId: string;
}

declare interface DescribeClusterDetailResponse {
  /** 集群的详细信息 */
  ClusterSet?: Cluster;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 集群信息列表 */
  ClusterSet?: Cluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCmqQueueDetailRequest {
  /** 精确匹配QueueName */
  QueueName: string;
}

declare interface DescribeCmqQueueDetailResponse {
  /** 队列详情列表。 */
  QueueDescribe?: CmqQueue;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 队列列表 */
  QueueList?: CmqQueue[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCmqSubscriptionDetailRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName?: string;
  /** 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0 */
  Offset?: number;
  /** 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Limit?: number;
  /** 根据SubscriptionName进行模糊搜索 */
  SubscriptionName?: string;
  /** 队列名称，订阅绑定的endpoint */
  QueueName?: string;
  /** 查询类型。取值：（1）topic；（2）queue。默认值是topic。如果 queryType 是 topic，则查询主题下的订阅列表；如果 queryType 是 queue，则查询队列绑定的订阅列表。 */
  QueryType?: string;
}

declare interface DescribeCmqSubscriptionDetailResponse {
  /** 总数 */
  TotalCount?: number;
  /** Subscription属性集合 */
  SubscriptionSet?: CmqSubscription[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCmqTopicDetailRequest {
  /** 精确匹配TopicName。 */
  TopicName?: string;
}

declare interface DescribeCmqTopicDetailResponse {
  /** 主题详情 */
  TopicDescribe?: CmqTopic;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TopicList?: CmqTopic[] | null;
  /** 全量主题数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentAttributesRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** Pulsar 集群的ID */
  ClusterId: string;
}

declare interface DescribeEnvironmentAttributesResponse {
  /** 未消费消息过期时间，单位：秒，最大1296000（15天）。 */
  MsgTTL?: number;
  /** 消费速率限制，单位：byte/秒，0：不限速。 */
  RateInByte?: number;
  /** 消费速率限制，单位：个数/秒，0：不限速。 */
  RateInSize?: number;
  /** 已消费消息保存策略，单位：小时，0：消费完马上删除。 */
  RetentionHours?: number;
  /** 已消费消息保存策略，单位：G，0：消费完马上删除。 */
  RetentionSize?: number;
  /** 环境（命名空间）名称。 */
  EnvironmentId?: string;
  /** 副本数。 */
  Replicas?: number;
  /** 备注。 */
  Remark?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 命名空间角色集合。 */
  EnvironmentRoleSets?: EnvironmentRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentsRequest {
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 命名空间名称，模糊搜索。 */
  EnvironmentId?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** * EnvironmentId按照名称空间进行过滤，精确查询。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeEnvironmentsResponse {
  /** 命名空间记录数。 */
  TotalCount?: number;
  /** 命名空间集合数组。 */
  EnvironmentSet?: Environment[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMqMsgTraceRequest {
  /** pulsar、rocketmq、rabbitmq、cmq */
  Protocol: string;
  /** 消息id */
  MsgId: string;
  /** 集群id，cmq为空 */
  ClusterId?: string;
  /** 命名空间，cmq为空 */
  EnvironmentId?: string;
  /** 主题，cmq为空，rocketmq查询死信时值为groupId */
  TopicName?: string;
  /** cmq必填，其他协议填空 */
  QueueName?: string;
  /** 消费组、订阅 */
  GroupName?: string;
  /** 查询死信时该值为true，只对Rocketmq有效 */
  QueryDlqMsg?: boolean;
}

declare interface DescribeMqMsgTraceResponse {
  /** 消息内容 */
  Result?: TraceResult[];
  /** 消息轨迹页展示的topic名称 */
  ShowTopicName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMsgRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 消息ID。 */
  MsgId: string;
  /** 主题名。 */
  TopicName: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface DescribeMsgResponse {
  /** 消息属性。 */
  Properties?: string;
  /** 消息体。 */
  Body?: string;
  /** 批次ID。 */
  BatchId?: string;
  /** 生产时间。 */
  ProduceTime?: string;
  /** 消息ID。 */
  MsgId?: string;
  /** 生产者名称。 */
  ProducerName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMsgTraceRequest {
  /** 环境（命名空间）。 */
  EnvironmentId: string;
  /** 消息ID。 */
  MsgId: string;
  /** 消息生产时间。 */
  ProduceTime: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 消费组名称模糊匹配。 */
  SubscriptionName?: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface DescribeMsgTraceResponse {
  /** 生产信息。 */
  ProducerLog?: ProducerLog | null;
  /** 服务方信息。 */
  ServerLog?: ServerLog | null;
  /** 消费信息。 */
  ConsumerLogs?: ConsumerLogs | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 过滤的 bundle */
  Bundle?: string;
  /** bundle 所属的 broker IP 地址，支持模糊查询 */
  OwnerBroker?: string;
}

declare interface DescribeNamespaceBundlesOptResponse {
  /** 记录条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodeHealthOptRequest {
  /** 节点实例ID */
  InstanceId: string;
}

declare interface DescribeNodeHealthOptResponse {
  /** 0-异常；1-正常 */
  NodeState?: number;
  /** 最近一次健康检查的时间 */
  LatestHealthCheckTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  MsgRateIn?: number | null;
  /** 生产速率（字节/秒） */
  MsgThroughputIn?: number | null;
  /** 生产者数量 */
  PublisherCount?: number | null;
  /** 消息存储大小，以字节为单位 */
  StorageSize?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 生产者信息列表 */
  Publishers?: Publisher[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePulsarProInstanceDetailRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribePulsarProInstanceDetailResponse {
  /** 集群信息 */
  ClusterInfo?: PulsarProClusterInfo;
  /** 集群网络接入点信息 */
  NetworkAccessPointInfos?: PulsarNetworkAccessPointInfo[] | null;
  /** 集群规格信息 */
  ClusterSpecInfo?: PulsarProClusterSpecInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePulsarProInstancesRequest {
  /** 查询条件过滤器 */
  Filters?: Filter[];
  /** 查询数目上限，默认20 */
  Limit?: number;
  /** 查询起始位置 */
  Offset?: number;
}

declare interface DescribePulsarProInstancesResponse {
  /** 未分页的总数目 */
  TotalCount?: number;
  /** 实例信息列表 */
  Instances?: PulsarProInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQBindingsRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost名称 */
  VirtualHost: string;
  /** 分页offset */
  Offset?: number;
  /** 分页limit */
  Limit?: number;
  /** 搜索关键词，根据源exchange名称/目标资源名称/绑定key进行模糊搜索 */
  SearchWord?: string;
  /** 根据源Exchange精准搜索过滤 */
  SourceExchange?: string;
  /** 根据目标QueueName精准搜索过滤，和DestinationExchange过滤不可同时设置 */
  QueueName?: string;
  /** 根据目标Exchange精准搜索过滤，和QueueName过滤不可同时设置 */
  DestinationExchange?: string;
}

declare interface DescribeRabbitMQBindingsResponse {
  /** 路由关系列表 */
  BindingInfoList?: RabbitMQBindingListInfo[] | null;
  /** 数量 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQExchangesRequest {
  /** 实例 id */
  InstanceId: string;
  /** vhost 参数 */
  VirtualHost: string;
  /** 分页 offset */
  Offset?: number;
  /** 分页 limit */
  Limit?: number;
  /** 搜索关键词, 支持模糊匹配 */
  SearchWord?: string;
  /** 筛选 exchange 类型, 数组中每个元素为选中的过滤类型 */
  ExchangeTypeFilters?: string[];
  /** 筛选 exchange 创建来源, "system":"系统创建", "user":"用户创建" */
  ExchangeCreatorFilters?: string[];
  /** exchange 名称，用于精确匹配 */
  ExchangeName?: string;
  /** 排序依据的字段：MessageRateInOut - 生产消费速率之和；MessageRateIn - 生产速率；MessageRateOut - 消费速率； */
  SortElement?: string;
  /** 排序顺序，ascend 或 descend */
  SortOrder?: string;
}

declare interface DescribeRabbitMQExchangesResponse {
  /** 策略列表信息 */
  ExchangeInfoList?: RabbitMQExchangeListInfo[] | null;
  /** 策略结果总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQNodeListRequest {
  /** rabbitmq集群ID */
  InstanceId: string;
  /** 偏移量 */
  Offset?: number;
  /** 一页限制 */
  Limit?: number;
  /** 模糊搜索节点名字 */
  NodeName?: string;
  /** 过滤参数的名字和数值现在只有一个nodeStatusrunning/down数组类型，兼容后续添加过滤参数 */
  Filters?: Filter[];
  /** 按指定元素排序，现在只有2个cpuUsage/diskUsage */
  SortElement?: string;
  /** 升序/降序ascend/descend */
  SortOrder?: string;
}

declare interface DescribeRabbitMQNodeListResponse {
  /** 集群列表数量 */
  TotalCount?: number;
  /** 集群列表 */
  NodeList?: RabbitMQPrivateNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQQueueDetailRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost: string;
  /** 队列名称 */
  QueueName: string;
}

declare interface DescribeRabbitMQQueueDetailResponse {
  /** 实例名称 */
  InstanceId?: string | null;
  /** Vhost参数 */
  VirtualHost?: string | null;
  /** 队列名称 */
  QueueName?: string | null;
  /** 队列类型,取值classic或quorum */
  QueueType?: string | null;
  /** 在线消费者数量 */
  Consumers?: number | null;
  /** 持久标记 */
  Durable?: boolean | null;
  /** 自动清除 */
  AutoDelete?: boolean | null;
  /** 备注 */
  Remark?: string | null;
  /** MessageTTL参数,classic类型专用 */
  MessageTTL?: number | null;
  /** AutoExpire参数 */
  AutoExpire?: number | null;
  /** MaxLength参数 */
  MaxLength?: number | null;
  /** MaxLengthBytes参数 */
  MaxLengthBytes?: number | null;
  /** DeliveryLimit参数,quorum类型专用 */
  DeliveryLimit?: number | null;
  /** OverflowBehaviour参数,取值为drop-head, reject-publish或reject-publish-dlx */
  OverflowBehaviour?: string | null;
  /** DeadLetterExchange参数 */
  DeadLetterExchange?: string | null;
  /** DeadLetterRoutingKey参数 */
  DeadLetterRoutingKey?: string | null;
  /** SingleActiveConsumer参数 */
  SingleActiveConsumer?: boolean | null;
  /** MaximumPriority参数,classic类型专用 */
  MaximumPriority?: number | null;
  /** LazyMode参数,classic类型专用 */
  LazyMode?: boolean | null;
  /** MasterLocator参数,classic类型专用 */
  MasterLocator?: string | null;
  /** MaxInMemoryLength参数,quorum类型专用 */
  MaxInMemoryLength?: number | null;
  /** MaxInMemoryBytes参数,quorum类型专用 */
  MaxInMemoryBytes?: number | null;
  /** 创建时间戳,单位秒 */
  CreateTime?: number | null;
  /** 节点 */
  Node?: string | null;
  /** 仲裁队列死信一致性策略 */
  DeadLetterStrategy?: string | null;
  /** 仲裁队列的领导者选举策略 */
  QueueLeaderLocator?: string | null;
  /** 仲裁队列的初始副本组大小 */
  QuorumInitialGroupSize?: number | null;
  /** 是否为独占队列 */
  Exclusive?: boolean | null;
  /** 生效的策略名 */
  Policy?: string | null;
  /** 扩展参数 key-value */
  Arguments?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQQueuesRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost?: string;
  /** 分页Offset */
  Offset?: number;
  /** 分页Limit */
  Limit?: number;
  /** 搜索关键词 */
  SearchWord?: string;
  /** 队列类型筛选，不填或 "all"：classic 和 quorum 队列；"classic"：筛选 classic 队列；"quorum"：筛选 quorum 队列 */
  QueueType?: string;
  /** 排序依据的字段：ConsumerNumber - 在线消费者数量；MessageHeapCount - 消息堆积数；MessageRateInOut - 生产消费速率之和；MessageRateIn - 生产速率；MessageRateOut - 消费速率； */
  SortElement?: string;
  /** 排序顺序，ascend 或 descend */
  SortOrder?: string;
}

declare interface DescribeRabbitMQQueuesResponse {
  /** 列表信息 */
  QueueInfoList?: RabbitMQQueueListInfo[] | null;
  /** 数量 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQUserRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名检索，支持前缀匹配，后缀匹配 */
  SearchUser?: string;
  /** 分页Offset */
  Offset?: number;
  /** 分页Limit */
  Limit?: number;
  /** 用户名，精确查询 */
  User?: string;
  /** 用户标签，根据标签过滤列表 */
  Tags?: string[];
}

declare interface DescribeRabbitMQUserResponse {
  /** 返回的User数量 */
  TotalCount?: number;
  /** 当前已创建的RabbitMQ用户列表 */
  RabbitMQUserList?: RabbitMQUser[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQVipInstanceRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeRabbitMQVipInstanceResponse {
  /** 集群信息 */
  ClusterInfo?: RabbitMQClusterInfo;
  /** 集群规格信息 */
  ClusterSpecInfo?: RabbitMQClusterSpecInfo;
  /** 集群访问 */
  ClusterNetInfo?: RabbitMQClusterAccessInfo | null;
  /** 集群白名单 */
  ClusterWhiteListInfo?: RabbitMQClusterWhiteListInfo | null;
  /** vhost配额信息 */
  VirtualHostQuota?: VirtualHostQuota;
  /** exchange配额信息 */
  ExchangeQuota?: ExchangeQuota;
  /** queue配额信息 */
  QueueQuota?: QueueQuota;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 实例信息列表 */
  Instances?: RabbitMQVipInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQVirtualHostListRequest {
  /** 不适用，默认参数 */
  InstanceId: string;
  /** 偏移量 */
  Offset?: number;
  /** 一页限制 */
  Limit?: number;
}

declare interface DescribeRabbitMQVirtualHostListResponse {
  /** 集群列表数量 */
  TotalCount?: number;
  /** 集群列表 */
  VirtualHostList?: RabbitMQPrivateVirtualHost[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQVirtualHostRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名,不传则查询全部 */
  VirtualHost?: string;
  /** 分页Offset */
  Offset?: number;
  /** 分页Limit */
  Limit?: number;
  /** search-virtual-host：vhost名称模糊查询，之前前缀和后缀匹配 */
  Filters?: Filter;
  /** 排序依据的字段：MessageHeapCount - 消息堆积数；MessageRateInOut - 生产消费速率之和；MessageRateIn - 生产速率；MessageRateOut - 消费速率； */
  SortElement?: string;
  /** 排序顺序，ascend 或 descend */
  SortOrder?: string;
}

declare interface DescribeRabbitMQVirtualHostResponse {
  /** 返回vhost数量 */
  TotalCount?: number;
  /** vhost详情列表 */
  VirtualHostList?: RabbitMQVirtualHostInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeRocketMQClusterResponse {
  /** 集群信息 */
  ClusterInfo?: RocketMQClusterInfo;
  /** 集群配置 */
  ClusterConfig?: RocketMQClusterConfig;
  /** 集群最近使用量，即将废弃，请使用腾讯云可观测平台获取相关数据。 */
  ClusterStats?: RocketMQClusterRecentStats | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ClusterList?: RocketMQClusterDetail[] | null;
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQConsumeStatsRequest {
  /** 实例ID */
  ClusterId: string;
  /** 命名空间 */
  NamespaceId: string;
  /** 消费组 */
  ConsumerGroup: string;
}

declare interface DescribeRocketMQConsumeStatsResponse {
  /** 消费详情列表 */
  ConsumerStatsList?: ConsumerStats[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQConsumerConnectionDetailRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** 消费组名称 */
  GroupId: string;
  /** 消费端实例ID */
  ClientId: string;
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
  /** 按主题类型过滤查询结果，可选择Normal, GlobalOrder, PartitionedOrder, Retry, Transaction, DeadLetter */
  FilterType?: string[];
}

declare interface DescribeRocketMQConsumerConnectionDetailResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 消费端主题信息列表 */
  Details?: RocketMQConsumerTopic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQConsumerConnectionsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** 消费组ID */
  GroupId: string;
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
  /** 对查询结果排序，此为排序字段，目前支持Accumulative（消息堆积量） */
  SortedBy?: string;
  /** 查询结果排序规则，ASC为升序，DESC为降序 */
  SortOrder?: string;
}

declare interface DescribeRocketMQConsumerConnectionsResponse {
  /** 总数目 */
  TotalCount?: number;
  /** 在线消费者信息 */
  Connections?: RocketMQConsumerConnection[];
  /** 订阅组信息 */
  GroupDetail?: RocketMQGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQEnvironmentRolesRequest {
  /** 必填字段，RocketMQ集群的ID */
  ClusterId: string;
  /** 命名空间 */
  EnvironmentId?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 角色名称 */
  RoleName?: string;
  /** RoleName按照角色名进行过滤，精确查询。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeRocketMQEnvironmentRolesResponse {
  /** 记录数。 */
  TotalCount?: number;
  /** 命名空间角色集合。 */
  EnvironmentRoleSets?: EnvironmentRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQMigratingTopicListRequest {
  /** 迁移任务名称 */
  TaskId: string;
  /** 分页大小 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 查询过滤器，支持topicname、MigrationStatus查询 */
  Filters?: Filter[];
}

declare interface DescribeRocketMQMigratingTopicListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 迁移topic列表 */
  MigrateTopics?: MigrateTopic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQMsgRequest {
  /** 集群id */
  ClusterId: string;
  /** 命名空间 */
  EnvironmentId: string;
  /** 主题，查询死信时传groupId */
  TopicName: string;
  /** 消息id */
  MsgId: string;
  /** pulsar消息id */
  PulsarMsgId: string;
  /** 查询死信时该值为true，只对Rocketmq有效 */
  QueryDlqMsg?: boolean;
  /** 查询死信时该值为true，只对Rocketmq有效 */
  QueryDeadLetterMessage?: boolean;
  /** 分页Offset */
  Offset?: number;
  /** 分页Limit */
  Limit?: number;
  /** 根据消费组名称过滤消费详情 */
  FilterTrackGroup?: string;
}

declare interface DescribeRocketMQMsgResponse {
  /** 消息体 */
  Body?: string;
  /** 详情参数 */
  Properties?: string;
  /** 生产时间 */
  ProduceTime?: string;
  /** 消息id */
  MsgId?: string;
  /** 生产者地址 */
  ProducerAddr?: string;
  /** 消费组消费情况列表 */
  MessageTracks?: RocketMQMessageTrack[] | null;
  /** 详情页展示的topic名称 */
  ShowTopicName?: string | null;
  /** 消费组消费情况列表总数 */
  MessageTracksCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQMsgTraceRequest {
  /** 集群id */
  ClusterId: string;
  /** 命名空间 */
  EnvironmentId: string;
  /** 主题，rocketmq查询死信时值为groupId */
  TopicName: string;
  /** 消息id */
  MsgId: string;
  /** 消费组、订阅 */
  GroupName?: string;
  /** 查询死信时该值为true */
  QueryDLQMsg?: boolean;
  /** 查询死信时该值为true */
  QueryDeadLetterMessage?: string;
}

declare interface DescribeRocketMQMsgTraceResponse {
  /** 轨迹详情列表 */
  Result?: TraceResult[];
  /** 消息轨迹页展示的topic名称 */
  ShowTopicName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Namespaces?: RocketMQNamespace[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQPublicAccessMonitorDataRequest {
  /** 专享集群ID */
  InstanceId: string;
  /** 指标名称，仅支持单指标拉取。目前仅支持：ClientIntraffic; ClientOuttraffic */
  MetricName: string;
  /** 起始时间 */
  StartTime?: string;
  /** 结束时间，默认为当前时间 */
  EndTime?: string;
  /** 监控统计周期，如60。默认为取值为300，单位为s。 */
  Period?: number;
}

declare interface DescribeRocketMQPublicAccessMonitorDataResponse {
  /** 指标名 */
  MetricName?: string | null;
  /** 监控统计周期，如60。默认为取值为300，单位为s。 */
  Period?: number | null;
  /** 起始时间，如2018-09-22T19:51:23+08:00 */
  StartTime?: string | null;
  /** 结束时间，如2018-09-22T20:51:23+08:00，默认为当前时间 */
  EndTime?: string | null;
  /** 数据点数组 */
  DataPoints?: RocketMQDataPoint[] | null;
  /** 返回信息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQPublicAccessPointRequest {
  /** 集群ID，当前只支持专享集群 */
  InstanceId: string;
}

declare interface DescribeRocketMQPublicAccessPointResponse {
  /** 公网接入点状态：0， 已开启1， 已关闭2，开启中3，关闭中4，修改中 */
  Status?: number;
  /** 支付状态：0, 未知1，正常2，欠费 */
  PayStatus?: number;
  /** 接入点地址 */
  AccessUrl?: string | null;
  /** 安全访问规则列表 */
  Rules?: PublicAccessRule[] | null;
  /** 带宽 */
  Bandwidth?: number | null;
  /** 付费模式 */
  PayMode?: number | null;
  /** 公网是否按流量计费 */
  BillingFlow?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQRolesRequest {
  /** 起始下标，不填默认为0。 */
  Offset: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit: number;
  /** 必填字段，集群Id */
  ClusterId: string;
  /** 角色名称，模糊查询 */
  RoleName?: string;
  /** RoleName按照角色名进行过滤，精确查询。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeRocketMQRolesResponse {
  /** 记录数。 */
  TotalCount?: number;
  /** 角色数组。 */
  RoleSets?: Role[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQSmoothMigrationTaskListRequest {
  /** 查询起始偏移量 */
  Offset: number;
  /** 查询最大数量 */
  Limit: number;
  /** 查询过滤器，支持的字段如下TaskStatus, 支持多选ConnectionType，支持多选ClusterId，精确搜索TaskName，支持模糊搜索 */
  Filters?: Filter[];
}

declare interface DescribeRocketMQSmoothMigrationTaskListResponse {
  /** 任务总数 */
  TotalCount?: number;
  /** 任务列表 */
  Data?: RocketMQSmoothMigrationTaskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQSmoothMigrationTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DescribeRocketMQSmoothMigrationTaskResponse {
  /** 任务名称 */
  TaskName?: string;
  /** 目标集群ID */
  ClusterId?: string;
  /** 源集群名称 */
  SourceClusterName?: string;
  /** 网络连接类型，PUBLIC 公网VPC 私有网络OTHER 其它 */
  ConnectionType?: string;
  /** 源集群NameServer地址 */
  SourceClusterNameServer?: string | null;
  /** 源集群所在私有网络ID */
  VpcId?: string | null;
  /** 源集群所在子网ID */
  SubnetId?: string | null;
  /** 是否开启ACL */
  EnableACL?: boolean;
  /** 源集群AccessKey */
  AccessKey?: string | null;
  /** 元集群SecretKey */
  SecretKey?: string | null;
  /** 配置源集群时发生的错误TIMEOUT 连接超时，SERVER_ERROR 服务错误，INTERNAL_ERROR 内部错误，CONNECT_NAMESERVER_ERROR 连接nameserver错误CONNECT_BROKER_ERROR 连接broker错误ACL_WRONG ACL信息不正确 */
  TaskError?: string | null;
  /** 任务状态Configuration 迁移配置SourceConnecting 连接源集群中SourceConnectionFailure 连接源集群失败MetaDataImport 元数据导入EndpointSetup 切换接入点ServiceMigration 切流中Completed 已完成Cancelled 已取消 */
  TaskStatus?: string;
  /** 任务ID */
  TaskId?: string;
  /** 主题类型分布情况 */
  TopicTypeDistribution?: RocketMQTopicDistribution[] | null;
  /** 主题迁移进度分布情况 */
  TopicStageDistribution?: RocketMQMigrationTopicDistribution[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQSourceClusterGroupListRequest {
  /** 页大小 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 迁移任务名称 */
  TaskId: string;
  /** 查询过滤器，支持字段groupName，imported */
  Filters?: Filter[];
}

declare interface DescribeRocketMQSourceClusterGroupListResponse {
  /** group列表 */
  Groups?: RocketMQGroupConfigOutput[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQSourceClusterTopicListRequest {
  /** 分页大小 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 迁移任务名 */
  TaskId: string;
  /** 查询过滤器，支持字段如下TopicName,Type，Imported */
  Filters?: Filter[];
}

declare interface DescribeRocketMQSourceClusterTopicListResponse {
  /** topic层列表 */
  Topics?: RocketMQTopicConfigOutput[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQSubscriptionsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  Namespace: string;
  /** 消费组名称 */
  Group: string;
  /** 查询起始位置 */
  Offset: number;
  /** 查询限制条数 */
  Limit: number;
}

declare interface DescribeRocketMQSubscriptionsResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 订阅关系列表 */
  Subscriptions?: RocketMQSubscription[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQTopicMsgsRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 命名空间 */
  EnvironmentId: string;
  /** 主题名称，查询死信时为groupId */
  TopicName: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 消息 ID */
  MsgId?: string;
  /** 消息 key */
  MsgKey?: string;
  /** 查询偏移 */
  Offset?: number;
  /** 查询限额 */
  Limit?: number;
  /** 标志一次分页事务 */
  TaskRequestId?: string;
  /** 死信查询时该值为true，只对Rocketmq有效 */
  QueryDlqMsg?: boolean;
  /** 查询最近N条消息 最大不超过1024，默认-1为其他查询条件 */
  NumOfLatestMsg?: number;
  /** TAG表达式 */
  Tag?: string;
  /** 死信查询时该值为true，只对Rocketmq有效 */
  QueryDeadLetterMessage?: boolean;
}

declare interface DescribeRocketMQTopicMsgsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 消息列表 */
  TopicMsgLogSets?: RocketMQMsgLog[];
  /** 标志一次分页事务 */
  TaskRequestId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQTopicStatsRequest {
  /** 实例ID */
  ClusterId: string;
  /** 命名空间 */
  NamespaceId: string;
  /** 主题名 */
  TopicName: string;
}

declare interface DescribeRocketMQTopicStatsResponse {
  /** 生产详情列表 */
  TopicStatsList?: TopicStats[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQTopicsByGroupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** 消费组名称 */
  GroupId: string;
  /** 偏移量 */
  Offset?: number;
  /** 限制条数 */
  Limit?: number;
}

declare interface DescribeRocketMQTopicsByGroupResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 主题列表 */
  Topics?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 按订阅消费组名称过滤 */
  FilterGroup?: string;
}

declare interface DescribeRocketMQTopicsResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 主题信息列表 */
  Topics?: RocketMQTopic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQVipInstanceDetailRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeRocketMQVipInstanceDetailResponse {
  /** 集群信息 */
  ClusterInfo?: RocketMQClusterInfo;
  /** 集群配置 */
  InstanceConfig?: RocketMQInstanceConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRocketMQVipInstancesRequest {
  /** 查询条件过滤器，支持的查询条件如下：instanceIds - 实例IDinstanceName - 实例名称status - 实例状态 */
  Filters?: Filter[];
  /** 查询数目上限，默认20 */
  Limit?: number;
  /** 查询起始位置 */
  Offset?: number;
}

declare interface DescribeRocketMQVipInstancesResponse {
  /** 未分页的总数目 */
  TotalCount?: number;
  /** 实例信息列表 */
  Instances?: RocketMQVipInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRolesRequest {
  /** 必填字段，集群Id */
  ClusterId: string;
  /** 角色名称，模糊查询 */
  RoleName?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** * RoleName按照角色名进行过滤，精确查询。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeRolesResponse {
  /** 记录数。 */
  TotalCount?: number;
  /** 角色数组。 */
  RoleSets?: Role[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubscriptionsRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名称。 */
  TopicName: string;
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 订阅者名称，模糊匹配。 */
  SubscriptionName?: string;
  /** 数据过滤条件。 */
  Filters?: FilterSubscription[];
}

declare interface DescribeSubscriptionsResponse {
  /** 订阅者集合数组。 */
  SubscriptionSets?: Subscription[];
  /** 数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicMsgsRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名。 */
  TopicName: string;
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** 消息ID。 */
  MsgId?: string;
  /** Pulsar 集群的ID */
  ClusterId?: string;
}

declare interface DescribeTopicMsgsResponse {
  /** 总记录数。 */
  TotalCount?: number;
  /** 消息日志列表。 */
  TopicMsgLogSets?: MsgLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicsRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 主题名模糊匹配。 */
  TopicName?: string;
  /** 起始下标，不填默认为0。 */
  Offset?: number;
  /** 返回数量，不填则默认为10，最大值为20。 */
  Limit?: number;
  /** topic类型描述：0：非持久非分区主题类型；1：非持久分区主题类型；2：持久非分区主题类型；3：持久分区主题类型； */
  TopicType?: number;
  /** * TopicName按照主题名字查询，精确查询。类型：String必选：否 */
  Filters?: Filter[];
  /** 创建来源：1：用户创建2：系统创建 */
  TopicCreator?: number;
}

declare interface DescribeTopicsResponse {
  /** 主题集合数组。 */
  TopicSets?: Topic[];
  /** 主题数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRocketMQMessageDetailRequest {
  /** 集群id */
  ClusterId: string;
  /** 应用命名空间 */
  EnvironmentId: string;
  /** Topic名称如果是死信消息 isDlqMsg=true */
  TopicName: string;
  /** 消息id */
  MsgId: string;
  /** 是否包含消息体 */
  IncludeMsgBody: boolean;
  /** 是否死信消息 */
  DeadLetterMsg?: boolean;
}

declare interface ExportRocketMQMessageDetailResponse {
  /** 消息id */
  MsgId?: string;
  /** 消息生成时间戳 */
  BornTimestamp?: number | null;
  /** 消息存储时间戳 */
  StoreTimestamp?: number | null;
  /** 消息生产客户端地址 */
  BornHost?: string | null;
  /** 消息Tag */
  MsgTag?: string | null;
  /** 消息Key */
  MsgKey?: string | null;
  /** 消息属性 */
  Properties?: string | null;
  /** 消息重试次数 */
  ReConsumeTimes?: number | null;
  /** Base64编码格式字符串 */
  MsgBody?: string | null;
  /** 消息内容的CRC32 Code */
  MsgBodyCRC?: number | null;
  /** 消息体大小（单位K）当大于2048时不返回消息 */
  MsgBodySize?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportRocketMQConsumerGroupsRequest {
  /** 导入topic */
  Groups: RocketMQGroupConfig[];
  /** 任务id */
  TaskId: string;
}

declare interface ImportRocketMQConsumerGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportRocketMQTopicsRequest {
  /** 导入topic */
  Topics: RocketMQTopicConfig[];
  /** 任务ID */
  TaskId: string;
}

declare interface ImportRocketMQTopicsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterRequest {
  /** Pulsar 集群的ID，需要更新的集群Id。 */
  ClusterId: string;
  /** 更新后的集群名称。 */
  ClusterName?: string;
  /** 说明信息。长度限制为 128 字节 */
  Remark?: string;
  /** 开启公网访问，只能为true */
  PublicAccessEnabled?: boolean;
}

declare interface ModifyClusterResponse {
  /** Pulsar 集群的ID */
  ClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCmqQueueAttributeRequest {
  /** 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
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
  /** policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCmqSubscriptionAttributeRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCmqTopicAttributeRequest {
  /** 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
  /** 消息最大长度。取值范围1024 - 65536 Byte（即1 - 64K），默认值65536。 */
  MaxMsgSize?: number;
  /** 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。 */
  MsgRetentionSeconds?: number;
  /** 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。 */
  Trace?: boolean;
}

declare interface ModifyCmqTopicAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEnvironmentAttributesRequest {
  /** 命名空间名称。 */
  EnvironmentId: string;
  /** 未消费消息过期时间，单位：秒，范围60秒~15天。 */
  MsgTTL: number;
  /** 集群ID */
  ClusterId: string;
  /** 备注，字符串最长不超过128。 */
  Remark?: string;
  /** 消息保留策略 */
  RetentionPolicy?: RetentionPolicy;
  /** 是否开启自动创建订阅 */
  AutoSubscriptionCreation?: boolean;
}

declare interface ModifyEnvironmentAttributesResponse {
  /** 命名空间名称。 */
  EnvironmentId?: string;
  /** 未消费消息过期时间，单位：秒。 */
  MsgTTL?: number;
  /** 备注，字符串最长不超过128。 */
  Remark?: string | null;
  /** 命名空间ID */
  NamespaceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ClusterId: string;
}

declare interface ModifyEnvironmentRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPublicNetworkAccessPointRequest {
  /** 集群名字 */
  ClusterId: string;
  /** 是否开启 */
  PublicNetworkAccessPointStatus: boolean;
  /** 必填，公网控制台的开关/Vpc控制台的开关，示例值，Public/Vpc */
  SwitchOwner?: string;
  /** Vpc */
  VpcId?: string;
  /** 子网 */
  SubnetId?: string;
  /** 子网下面指定ip作为vpc接入点 */
  SelectIp?: string;
}

declare interface ModifyPublicNetworkAccessPointResponse {
  /** 修改结果 */
  ModifyResult?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPublicNetworkSecurityPolicyRequest {
  /** 集群id */
  InstanceId: string;
  /** 策略列表 */
  PolicyList: SecurityPolicy[];
}

declare interface ModifyPublicNetworkSecurityPolicyResponse {
  /** SUCCESS或者FAILURE */
  ModifyResult?: string;
  /** 集群id */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQUserRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名，登录时使用 */
  User: string;
  /** 密码，登录时使用 */
  Password: string;
  /** 描述，不传则不修改 */
  Description?: string;
  /** 用户标签，用于决定改用户访问RabbitMQ Management的权限范围，不传则不修改 */
  Tags?: string[];
  /** 该用户的最大连接数，不传则不修改 */
  MaxConnections?: number;
  /** 该用户的最大channel数，不传则不修改 */
  MaxChannels?: number;
}

declare interface ModifyRabbitMQUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQVipInstanceRequest {
  /** 实例Id */
  InstanceId: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyRabbitMQVipInstanceResponse {
  /** 实例id */
  InstanceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQVirtualHostRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名 */
  VirtualHost: string;
  /** 描述 */
  Description?: string;
  /** 消息轨迹开关,true打开,false关闭 */
  TraceFlag?: boolean;
}

declare interface ModifyRabbitMQVirtualHostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRocketMQClusterRequest {
  /** RocketMQ集群ID */
  ClusterId: string;
  /** 3-64个字符，只能包含字母、数字、“-”及“_” */
  ClusterName?: string;
  /** 说明信息，不超过128个字符 */
  Remark?: string;
  /** 是否开启HTTP公网访问 */
  PublicAccessEnabled?: boolean;
}

declare interface ModifyRocketMQClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRocketMQEnvironmentRoleRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 角色名称。 */
  RoleName: string;
  /** 授权项，最多只能包含produce、consume两项的非空字符串数组。 */
  Permissions: string[];
  /** 必填字段，集群的ID */
  ClusterId: string;
}

declare interface ModifyRocketMQEnvironmentRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRocketMQInstanceRequest {
  /** 专享实例ID */
  InstanceId: string;
  /** 实例名称 */
  Name?: string;
  /** 实例备注信息 */
  Remark?: string;
  /** 实例消息保留时间，小时为单位 */
  MessageRetention?: number;
}

declare interface ModifyRocketMQInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRocketMQInstanceSpecRequest {
  /** 专享实例ID */
  InstanceId: string;
  /** 实例规格，rocket-vip-basic-1 基础型rocket-vip-basic-2 标准型rocket-vip-basic-3 高阶Ⅰ型rocket-vip-basic-4 高阶Ⅱ型 */
  Specification?: string;
  /** 节点数量 */
  NodeCount?: number;
  /** 存储空间，GB为单位 */
  StorageSize?: number;
}

declare interface ModifyRocketMQInstanceSpecResponse {
  /** 订单号 */
  OrderId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRocketMQNamespaceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_” */
  NamespaceId: string;
  /** 已废弃 */
  Ttl?: number;
  /** 已废弃 */
  RetentionTime?: number;
  /** 说明，最大128个字符 */
  Remark?: string;
  /** 是否开启公网访问 */
  PublicAccessEnabled?: boolean;
}

declare interface ModifyRocketMQNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRocketMQRoleRequest {
  /** 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。 */
  RoleName: string;
  /** 必填字段，集群Id */
  ClusterId: string;
  /** 备注说明，长度必须大等于0且小等于128。 */
  Remark?: string;
}

declare interface ModifyRocketMQRoleResponse {
  /** 角色名称 */
  RoleName?: string;
  /** 备注说明 */
  Remark?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRoleRequest {
  /** 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。 */
  RoleName: string;
  /** 必填字段，集群Id */
  ClusterId: string;
  /** 备注说明，长度必须大等于0且小等于128。 */
  Remark?: string;
  /** 批量绑定名字空间信息 */
  EnvironmentRoleSets?: EnvironmentRoleSet[];
  /** 全部解绑名字空间，设置为 true */
  UnbindAllEnvironment?: boolean;
}

declare interface ModifyRoleResponse {
  /** 角色名称 */
  RoleName?: string;
  /** 备注说明 */
  Remark?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicRequest {
  /** 环境（命名空间）名称。 */
  EnvironmentId: string;
  /** 主题名。 */
  TopicName: string;
  /** 分区数，必须大于或者等于原分区数，若想维持原分区数请输入原数目，修改分区数仅对非全局顺序消息起效果，不允许超过32个分区。 */
  Partitions: number;
  /** Pulsar 集群的ID */
  ClusterId: string;
  /** 备注，128字符以内。 */
  Remark?: string;
  /** 未消费消息过期时间，单位：秒，取值范围：60秒~15天。 */
  MsgTTL?: number;
}

declare interface ModifyTopicResponse {
  /** 分区数 */
  Partitions?: number;
  /** 备注，128字符以内。 */
  Remark?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Result?: boolean;
  /** 消息id */
  MsgId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  MessageID?: string;
  /** 接收消息的内容 */
  MessagePayload?: string;
  /** 提供给 Ack 接口，用来Ack哪一个topic中的消息 */
  AckTopic?: string;
  /** 返回的错误信息，如果为空，说明没有错误 */
  ErrorMsg?: string | null;
  /** 返回订阅者的名字，用来创建 ack consumer时使用 */
  SubName?: string | null;
  /** BatchReceivePolicy 一次性返回的多条消息的 MessageID，用 ‘###’ 来区分不同的 MessageID */
  MessageIDList?: string | null;
  /** BatchReceivePolicy 一次性返回的多条消息的消息内容，用 ‘###’ 来区分不同的消息内容 */
  MessagesPayload?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ClusterId: string;
}

declare interface ResetMsgSubOffsetByTimestampResponse {
  /** 结果。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryRocketMQDlqMessageRequest {
  /** 集群id */
  ClusterId: string;
  /** 命名空间名称 */
  NamespaceId: string;
  /** group名称 */
  GroupName: string;
  /** 死信消息ID */
  MessageIds: string[];
}

declare interface RetryRocketMQDlqMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RewindCmqQueueRequest {
  /** 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
  /** 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。 */
  StartConsumeTime: number;
}

declare interface RewindCmqQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  MessageId?: string | null;
  /** 错误消息，返回为 ""，代表没有错误 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendCmqMsgRequest {
  /** 队列名 */
  QueueName: string;
  /** 消息内容 */
  MsgContent: string;
  /** 延迟时间。单位为秒，默认值为0秒，最大不能超过队列配置的消息最长未确认时间。 */
  DelaySeconds: number;
}

declare interface SendCmqMsgResponse {
  /** true表示发送成功 */
  Result?: boolean;
  /** 消息id */
  MsgId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  MessageId?: string | null;
  /** 返回的错误消息，如果返回为 “”，说明没有错误 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendRocketMQMessageRequest {
  /** 集群id */
  ClusterId: string;
  /** 命名空间 */
  NamespaceId: string;
  /** topic名称 */
  TopicName: string;
  /** 信息内容 */
  MsgBody: string;
  /** 消息key信息 */
  MsgKey?: string;
  /** 消息tag信息 */
  MsgTag?: string;
}

declare interface SendRocketMQMessageResponse {
  /** 发送结果 */
  Result?: boolean;
  /** 消息ID */
  MsgId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetRocketMQPublicAccessPointRequest {
  /** 集群ID，当前只支持专享集群 */
  InstanceId: string;
  /** 开启或关闭访问 */
  Enabled: boolean;
  /** 带宽大小，开启或者调整公网时必须指定，Mbps为单位 */
  Bandwidth?: number;
  /** 付费模式，开启公网时必须指定，0为按小时计费，1为包年包月，当前只支持按小时计费 */
  PayMode?: number;
  /** 公网访问安全规则列表，Enabled为true时必须传入 */
  Rules?: PublicAccessRule[];
  /** 公网是否按流量计费 */
  BillingFlow?: boolean;
}

declare interface SetRocketMQPublicAccessPointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindCmqDeadLetterRequest {
  /** 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。 */
  SourceQueueName: string;
}

declare interface UnbindCmqDeadLetterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyRocketMQConsumeRequest {
  /** 集群id */
  ClusterId: string;
  /** 命名空间 */
  NamespaceId: string;
  /** 消费组ID */
  GroupId: string;
  /** 消息id */
  MsgId: string;
  /** 客户端ID */
  ClientId: string;
  /** 主题名称 */
  TopicName: string;
}

declare interface VerifyRocketMQConsumeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdmq 消息队列 TDMQ} */
declare interface Tdmq {
  (): Versions;
  /** 确认pulsar消息 {@link AcknowledgeMessageRequest} {@link AcknowledgeMessageResponse} */
  AcknowledgeMessage(data: AcknowledgeMessageRequest, config?: AxiosRequestConfig): AxiosPromise<AcknowledgeMessageResponse>;
  /** 清空cmq消息队列中的消息 {@link ClearCmqQueueRequest} {@link ClearCmqQueueResponse} */
  ClearCmqQueue(data: ClearCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<ClearCmqQueueResponse>;
  /** 清空cmq订阅者消息标签 {@link ClearCmqSubscriptionFilterTagsRequest} {@link ClearCmqSubscriptionFilterTagsResponse} */
  ClearCmqSubscriptionFilterTags(data: ClearCmqSubscriptionFilterTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ClearCmqSubscriptionFilterTagsResponse>;
  /** 创建集群 {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 创建cmq队列接口 {@link CreateCmqQueueRequest} {@link CreateCmqQueueResponse} */
  CreateCmqQueue(data: CreateCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCmqQueueResponse>;
  /** 创建cmq订阅接口 {@link CreateCmqSubscribeRequest} {@link CreateCmqSubscribeResponse} */
  CreateCmqSubscribe(data: CreateCmqSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCmqSubscribeResponse>;
  /** 创建cmq主题 {@link CreateCmqTopicRequest} {@link CreateCmqTopicResponse} */
  CreateCmqTopic(data: CreateCmqTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCmqTopicResponse>;
  /** 创建命名空间 {@link CreateEnvironmentRequest} {@link CreateEnvironmentResponse} */
  CreateEnvironment(data: CreateEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvironmentResponse>;
  /** 创建环境角色授权 {@link CreateEnvironmentRoleRequest} {@link CreateEnvironmentRoleResponse} */
  CreateEnvironmentRole(data: CreateEnvironmentRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvironmentRoleResponse>;
  /** 创建专业集群 {@link CreateProClusterRequest} {@link CreateProClusterResponse} */
  CreateProCluster(data: CreateProClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProClusterResponse>;
  /** 创建RabbitMQ路由关系 {@link CreateRabbitMQBindingRequest} {@link CreateRabbitMQBindingResponse} */
  CreateRabbitMQBinding(data: CreateRabbitMQBindingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQBindingResponse>;
  /** 创建RabbitMQ的用户 {@link CreateRabbitMQUserRequest} {@link CreateRabbitMQUserResponse} */
  CreateRabbitMQUser(data: CreateRabbitMQUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQUserResponse>;
  /** 创建RabbitMQ专享版实例 {@link CreateRabbitMQVipInstanceRequest} {@link CreateRabbitMQVipInstanceResponse} */
  CreateRabbitMQVipInstance(data: CreateRabbitMQVipInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQVipInstanceResponse>;
  /** 创建RabbitMQ的vhost {@link CreateRabbitMQVirtualHostRequest} {@link CreateRabbitMQVirtualHostResponse} */
  CreateRabbitMQVirtualHost(data: CreateRabbitMQVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQVirtualHostResponse>;
  /** 创建RocketMQ集群 {@link CreateRocketMQClusterRequest} {@link CreateRocketMQClusterResponse} */
  CreateRocketMQCluster(data: CreateRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQClusterResponse>;
  /** 创建RocketMQ环境角色授权 {@link CreateRocketMQEnvironmentRoleRequest} {@link CreateRocketMQEnvironmentRoleResponse} */
  CreateRocketMQEnvironmentRole(data: CreateRocketMQEnvironmentRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQEnvironmentRoleResponse>;
  /** 创建RocketMQ消费组 {@link CreateRocketMQGroupRequest} {@link CreateRocketMQGroupResponse} */
  CreateRocketMQGroup(data: CreateRocketMQGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQGroupResponse>;
  /** 创建RocketMQ命名空间 {@link CreateRocketMQNamespaceRequest} {@link CreateRocketMQNamespaceResponse} */
  CreateRocketMQNamespace(data: CreateRocketMQNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQNamespaceResponse>;
  /** 创建RocketMQ角色 {@link CreateRocketMQRoleRequest} {@link CreateRocketMQRoleResponse} */
  CreateRocketMQRole(data: CreateRocketMQRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQRoleResponse>;
  /** 创建RocketMQ主题 {@link CreateRocketMQTopicRequest} {@link CreateRocketMQTopicResponse} */
  CreateRocketMQTopic(data: CreateRocketMQTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQTopicResponse>;
  /** 创建RocketMQ专享实例 {@link CreateRocketMQVipInstanceRequest} {@link CreateRocketMQVipInstanceResponse} */
  CreateRocketMQVipInstance(data: CreateRocketMQVipInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRocketMQVipInstanceResponse>;
  /** 创建角色 {@link CreateRoleRequest} {@link CreateRoleResponse} */
  CreateRole(data: CreateRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleResponse>;
  /** 创建订阅关系 {@link CreateSubscriptionRequest} {@link CreateSubscriptionResponse} */
  CreateSubscription(data: CreateSubscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubscriptionResponse>;
  /** 新增主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 删除集群 {@link DeleteClusterRequest} {@link DeleteClusterResponse} */
  DeleteCluster(data: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
  /** 删除cmq队列 {@link DeleteCmqQueueRequest} {@link DeleteCmqQueueResponse} */
  DeleteCmqQueue(data: DeleteCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCmqQueueResponse>;
  /** 删除cmq订阅 {@link DeleteCmqSubscribeRequest} {@link DeleteCmqSubscribeResponse} */
  DeleteCmqSubscribe(data: DeleteCmqSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCmqSubscribeResponse>;
  /** 删除cmq主题 {@link DeleteCmqTopicRequest} {@link DeleteCmqTopicResponse} */
  DeleteCmqTopic(data: DeleteCmqTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCmqTopicResponse>;
  /** 删除环境角色授权 {@link DeleteEnvironmentRolesRequest} {@link DeleteEnvironmentRolesResponse} */
  DeleteEnvironmentRoles(data: DeleteEnvironmentRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEnvironmentRolesResponse>;
  /** 删除命名空间 {@link DeleteEnvironmentsRequest} {@link DeleteEnvironmentsResponse} */
  DeleteEnvironments(data: DeleteEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEnvironmentsResponse>;
  /** 删除专业集群实例 {@link DeleteProClusterRequest} {@link DeleteProClusterResponse} */
  DeleteProCluster(data: DeleteProClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProClusterResponse>;
  /** 解绑RabbitMQ路由关系 {@link DeleteRabbitMQBindingRequest} {@link DeleteRabbitMQBindingResponse} */
  DeleteRabbitMQBinding(data: DeleteRabbitMQBindingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQBindingResponse>;
  /** 删除RabbitMQ的用户 {@link DeleteRabbitMQUserRequest} {@link DeleteRabbitMQUserResponse} */
  DeleteRabbitMQUser(data: DeleteRabbitMQUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQUserResponse>;
  /** 删除RabbitMQ专享版实例 {@link DeleteRabbitMQVipInstanceRequest} {@link DeleteRabbitMQVipInstanceResponse} */
  DeleteRabbitMQVipInstance(data: DeleteRabbitMQVipInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQVipInstanceResponse>;
  /** 删除RabbitMQ的vhost {@link DeleteRabbitMQVirtualHostRequest} {@link DeleteRabbitMQVirtualHostResponse} */
  DeleteRabbitMQVirtualHost(data: DeleteRabbitMQVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQVirtualHostResponse>;
  /** 删除RocketMQ集群 {@link DeleteRocketMQClusterRequest} {@link DeleteRocketMQClusterResponse} */
  DeleteRocketMQCluster(data: DeleteRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQClusterResponse>;
  /** 批量删除RocketMQ环境角色授权 {@link DeleteRocketMQEnvironmentRolesRequest} {@link DeleteRocketMQEnvironmentRolesResponse} */
  DeleteRocketMQEnvironmentRoles(data: DeleteRocketMQEnvironmentRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQEnvironmentRolesResponse>;
  /** 删除RocketMQ消费组 {@link DeleteRocketMQGroupRequest} {@link DeleteRocketMQGroupResponse} */
  DeleteRocketMQGroup(data: DeleteRocketMQGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQGroupResponse>;
  /** 删除RocketMQ命名空间 {@link DeleteRocketMQNamespaceRequest} {@link DeleteRocketMQNamespaceResponse} */
  DeleteRocketMQNamespace(data: DeleteRocketMQNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQNamespaceResponse>;
  /** 批量删除RocketMQ角色 {@link DeleteRocketMQRolesRequest} {@link DeleteRocketMQRolesResponse} */
  DeleteRocketMQRoles(data: DeleteRocketMQRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQRolesResponse>;
  /** 删除RocketMQ主题 {@link DeleteRocketMQTopicRequest} {@link DeleteRocketMQTopicResponse} */
  DeleteRocketMQTopic(data: DeleteRocketMQTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQTopicResponse>;
  /** 删除RocketMQ专享实例 {@link DeleteRocketMQVipInstanceRequest} {@link DeleteRocketMQVipInstanceResponse} */
  DeleteRocketMQVipInstance(data: DeleteRocketMQVipInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRocketMQVipInstanceResponse>;
  /** 删除角色 {@link DeleteRolesRequest} {@link DeleteRolesResponse} */
  DeleteRoles(data: DeleteRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRolesResponse>;
  /** 删除订阅关系 {@link DeleteSubscriptionsRequest} {@link DeleteSubscriptionsResponse} */
  DeleteSubscriptions(data: DeleteSubscriptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSubscriptionsResponse>;
  /** 删除主题 {@link DeleteTopicsRequest} {@link DeleteTopicsResponse} */
  DeleteTopics(data: DeleteTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicsResponse>;
  /** @deprecated 获取amqp集群列表 {@link DescribeAMQPClustersRequest} {@link DescribeAMQPClustersResponse} */
  DescribeAMQPClusters(data: DescribeAMQPClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAMQPClustersResponse>;
  /** 获取某租户的虚拟集群列表 {@link DescribeAllTenantsRequest} {@link DescribeAllTenantsResponse} */
  DescribeAllTenants(data: DescribeAllTenantsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllTenantsResponse>;
  /** 获取专享集群列表 {@link DescribeBindClustersRequest} {@link DescribeBindClustersResponse} */
  DescribeBindClusters(data?: DescribeBindClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindClustersResponse>;
  /** 获取租户VPC绑定关系 {@link DescribeBindVpcsRequest} {@link DescribeBindVpcsResponse} */
  DescribeBindVpcs(data?: DescribeBindVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindVpcsResponse>;
  /** 获取集群详情 {@link DescribeClusterDetailRequest} {@link DescribeClusterDetailResponse} */
  DescribeClusterDetail(data: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** 获取集群列表 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查询cmq队列详情 {@link DescribeCmqQueueDetailRequest} {@link DescribeCmqQueueDetailResponse} */
  DescribeCmqQueueDetail(data: DescribeCmqQueueDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqQueueDetailResponse>;
  /** 查询cmq全量队列 {@link DescribeCmqQueuesRequest} {@link DescribeCmqQueuesResponse} */
  DescribeCmqQueues(data?: DescribeCmqQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqQueuesResponse>;
  /** 查询cmq订阅详情 {@link DescribeCmqSubscriptionDetailRequest} {@link DescribeCmqSubscriptionDetailResponse} */
  DescribeCmqSubscriptionDetail(data?: DescribeCmqSubscriptionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqSubscriptionDetailResponse>;
  /** 查询cmq主题详情 {@link DescribeCmqTopicDetailRequest} {@link DescribeCmqTopicDetailResponse} */
  DescribeCmqTopicDetail(data?: DescribeCmqTopicDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqTopicDetailResponse>;
  /** 枚举cmq全量主题 {@link DescribeCmqTopicsRequest} {@link DescribeCmqTopicsResponse} */
  DescribeCmqTopics(data?: DescribeCmqTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCmqTopicsResponse>;
  /** 获取命名空间属性 {@link DescribeEnvironmentAttributesRequest} {@link DescribeEnvironmentAttributesResponse} */
  DescribeEnvironmentAttributes(data: DescribeEnvironmentAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentAttributesResponse>;
  /** 获取命名空间角色列表 {@link DescribeEnvironmentRolesRequest} {@link DescribeEnvironmentRolesResponse} */
  DescribeEnvironmentRoles(data?: DescribeEnvironmentRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentRolesResponse>;
  /** 获取命名空间列表 {@link DescribeEnvironmentsRequest} {@link DescribeEnvironmentsResponse} */
  DescribeEnvironments(data: DescribeEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentsResponse>;
  /** 查询消息轨迹 {@link DescribeMqMsgTraceRequest} {@link DescribeMqMsgTraceResponse} */
  DescribeMqMsgTrace(data: DescribeMqMsgTraceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMqMsgTraceResponse>;
  /** 查询Pulsar消息详情 {@link DescribeMsgRequest} {@link DescribeMsgResponse} */
  DescribeMsg(data: DescribeMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMsgResponse>;
  /** 消息轨迹 {@link DescribeMsgTraceRequest} {@link DescribeMsgTraceResponse} */
  DescribeMsgTrace(data: DescribeMsgTraceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMsgTraceResponse>;
  /** 运营端获取命名空间bundle列表 {@link DescribeNamespaceBundlesOptRequest} {@link DescribeNamespaceBundlesOptResponse} */
  DescribeNamespaceBundlesOpt(data: DescribeNamespaceBundlesOptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNamespaceBundlesOptResponse>;
  /** 运营端获节点健康状态 {@link DescribeNodeHealthOptRequest} {@link DescribeNodeHealthOptResponse} */
  DescribeNodeHealthOpt(data: DescribeNodeHealthOptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeHealthOptResponse>;
  /** 获取消息生产概览 {@link DescribePublisherSummaryRequest} {@link DescribePublisherSummaryResponse} */
  DescribePublisherSummary(data: DescribePublisherSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublisherSummaryResponse>;
  /** 获取生产者信息 {@link DescribePublishersRequest} {@link DescribePublishersResponse} */
  DescribePublishers(data: DescribePublishersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublishersResponse>;
  /** 获取Pulsar专业版集群实例信息 {@link DescribePulsarProInstanceDetailRequest} {@link DescribePulsarProInstanceDetailResponse} */
  DescribePulsarProInstanceDetail(data: DescribePulsarProInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePulsarProInstanceDetailResponse>;
  /** 查询Pulsar专业版实例列表 {@link DescribePulsarProInstancesRequest} {@link DescribePulsarProInstancesResponse} */
  DescribePulsarProInstances(data?: DescribePulsarProInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePulsarProInstancesResponse>;
  /** 查询RabbitMQ路由关系列表 {@link DescribeRabbitMQBindingsRequest} {@link DescribeRabbitMQBindingsResponse} */
  DescribeRabbitMQBindings(data: DescribeRabbitMQBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQBindingsResponse>;
  /** 查询RabbitMQ exchange 列表 {@link DescribeRabbitMQExchangesRequest} {@link DescribeRabbitMQExchangesResponse} */
  DescribeRabbitMQExchanges(data: DescribeRabbitMQExchangesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQExchangesResponse>;
  /** RabbitMQ专享版查询节点列表 {@link DescribeRabbitMQNodeListRequest} {@link DescribeRabbitMQNodeListResponse} */
  DescribeRabbitMQNodeList(data: DescribeRabbitMQNodeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQNodeListResponse>;
  /** 查询RabbitMQ队列详情 {@link DescribeRabbitMQQueueDetailRequest} {@link DescribeRabbitMQQueueDetailResponse} */
  DescribeRabbitMQQueueDetail(data: DescribeRabbitMQQueueDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQQueueDetailResponse>;
  /** 查询RabbitMQ队列列表 {@link DescribeRabbitMQQueuesRequest} {@link DescribeRabbitMQQueuesResponse} */
  DescribeRabbitMQQueues(data: DescribeRabbitMQQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQQueuesResponse>;
  /** 查询RabbitMQ用户列表 {@link DescribeRabbitMQUserRequest} {@link DescribeRabbitMQUserResponse} */
  DescribeRabbitMQUser(data: DescribeRabbitMQUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQUserResponse>;
  /** 获取单个RabbitMQ专享实例信息 {@link DescribeRabbitMQVipInstanceRequest} {@link DescribeRabbitMQVipInstanceResponse} */
  DescribeRabbitMQVipInstance(data: DescribeRabbitMQVipInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQVipInstanceResponse>;
  /** 查询RabbitMQ专享实例列表 {@link DescribeRabbitMQVipInstancesRequest} {@link DescribeRabbitMQVipInstancesResponse} */
  DescribeRabbitMQVipInstances(data?: DescribeRabbitMQVipInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQVipInstancesResponse>;
  /** 查询RabbitMQ vhost列表 {@link DescribeRabbitMQVirtualHostRequest} {@link DescribeRabbitMQVirtualHostResponse} */
  DescribeRabbitMQVirtualHost(data: DescribeRabbitMQVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQVirtualHostResponse>;
  /** @deprecated RabbitMQ专享版查询虚拟主机列表 {@link DescribeRabbitMQVirtualHostListRequest} {@link DescribeRabbitMQVirtualHostListResponse} */
  DescribeRabbitMQVirtualHostList(data: DescribeRabbitMQVirtualHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQVirtualHostListResponse>;
  /** 获取单个RocketMQ集群信息 {@link DescribeRocketMQClusterRequest} {@link DescribeRocketMQClusterResponse} */
  DescribeRocketMQCluster(data: DescribeRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQClusterResponse>;
  /** 获取RocketMQ的集群列表 {@link DescribeRocketMQClustersRequest} {@link DescribeRocketMQClustersResponse} */
  DescribeRocketMQClusters(data: DescribeRocketMQClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQClustersResponse>;
  /** 获取消费详情列表 {@link DescribeRocketMQConsumeStatsRequest} {@link DescribeRocketMQConsumeStatsResponse} */
  DescribeRocketMQConsumeStats(data: DescribeRocketMQConsumeStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQConsumeStatsResponse>;
  /** 获取在线消费端详情 {@link DescribeRocketMQConsumerConnectionDetailRequest} {@link DescribeRocketMQConsumerConnectionDetailResponse} */
  DescribeRocketMQConsumerConnectionDetail(data: DescribeRocketMQConsumerConnectionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQConsumerConnectionDetailResponse>;
  /** 获取指定消费组下当前客户端的连接情况 {@link DescribeRocketMQConsumerConnectionsRequest} {@link DescribeRocketMQConsumerConnectionsResponse} */
  DescribeRocketMQConsumerConnections(data: DescribeRocketMQConsumerConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQConsumerConnectionsResponse>;
  /** 获取RocketMQ命名空间角色列表 {@link DescribeRocketMQEnvironmentRolesRequest} {@link DescribeRocketMQEnvironmentRolesResponse} */
  DescribeRocketMQEnvironmentRoles(data: DescribeRocketMQEnvironmentRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQEnvironmentRolesResponse>;
  /** 获取RocketMQ消费组列表 {@link DescribeRocketMQGroupsRequest} {@link DescribeRocketMQGroupsResponse} */
  DescribeRocketMQGroups(data: DescribeRocketMQGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQGroupsResponse>;
  /** 平滑迁移：查询Topic迁移状态列表 {@link DescribeRocketMQMigratingTopicListRequest} {@link DescribeRocketMQMigratingTopicListResponse} */
  DescribeRocketMQMigratingTopicList(data: DescribeRocketMQMigratingTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQMigratingTopicListResponse>;
  /** rocketmq消息详情 {@link DescribeRocketMQMsgRequest} {@link DescribeRocketMQMsgResponse} */
  DescribeRocketMQMsg(data: DescribeRocketMQMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQMsgResponse>;
  /** 查询RocketMQ消息轨迹 {@link DescribeRocketMQMsgTraceRequest} {@link DescribeRocketMQMsgTraceResponse} */
  DescribeRocketMQMsgTrace(data: DescribeRocketMQMsgTraceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQMsgTraceResponse>;
  /** 获取RocketMQ命名空间列表 {@link DescribeRocketMQNamespacesRequest} {@link DescribeRocketMQNamespacesResponse} */
  DescribeRocketMQNamespaces(data: DescribeRocketMQNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQNamespacesResponse>;
  /** 拉取公网指标监控数据 {@link DescribeRocketMQPublicAccessMonitorDataRequest} {@link DescribeRocketMQPublicAccessMonitorDataResponse} */
  DescribeRocketMQPublicAccessMonitorData(data: DescribeRocketMQPublicAccessMonitorDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQPublicAccessMonitorDataResponse>;
  /** 查询RocketMQ实例公网接入点信息 {@link DescribeRocketMQPublicAccessPointRequest} {@link DescribeRocketMQPublicAccessPointResponse} */
  DescribeRocketMQPublicAccessPoint(data: DescribeRocketMQPublicAccessPointRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQPublicAccessPointResponse>;
  /** 获取RocketMQ角色列表 {@link DescribeRocketMQRolesRequest} {@link DescribeRocketMQRolesResponse} */
  DescribeRocketMQRoles(data: DescribeRocketMQRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQRolesResponse>;
  /** 获取RocketMQ平滑迁移任务详情 {@link DescribeRocketMQSmoothMigrationTaskRequest} {@link DescribeRocketMQSmoothMigrationTaskResponse} */
  DescribeRocketMQSmoothMigrationTask(data: DescribeRocketMQSmoothMigrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQSmoothMigrationTaskResponse>;
  /** 获取RocketMQ平滑迁移任务列表 {@link DescribeRocketMQSmoothMigrationTaskListRequest} {@link DescribeRocketMQSmoothMigrationTaskListResponse} */
  DescribeRocketMQSmoothMigrationTaskList(data: DescribeRocketMQSmoothMigrationTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQSmoothMigrationTaskListResponse>;
  /** 平滑迁移：获取源集群的group列表 {@link DescribeRocketMQSourceClusterGroupListRequest} {@link DescribeRocketMQSourceClusterGroupListResponse} */
  DescribeRocketMQSourceClusterGroupList(data: DescribeRocketMQSourceClusterGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQSourceClusterGroupListResponse>;
  /** 平滑迁移：获取源集群的topic列表 {@link DescribeRocketMQSourceClusterTopicListRequest} {@link DescribeRocketMQSourceClusterTopicListResponse} */
  DescribeRocketMQSourceClusterTopicList(data: DescribeRocketMQSourceClusterTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQSourceClusterTopicListResponse>;
  /** 获取RocketMQ消费组订阅关系 {@link DescribeRocketMQSubscriptionsRequest} {@link DescribeRocketMQSubscriptionsResponse} */
  DescribeRocketMQSubscriptions(data: DescribeRocketMQSubscriptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQSubscriptionsResponse>;
  /** rocketmq 消息查询 {@link DescribeRocketMQTopicMsgsRequest} {@link DescribeRocketMQTopicMsgsResponse} */
  DescribeRocketMQTopicMsgs(data: DescribeRocketMQTopicMsgsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQTopicMsgsResponse>;
  /** 获取Topic生产详情列表 {@link DescribeRocketMQTopicStatsRequest} {@link DescribeRocketMQTopicStatsResponse} */
  DescribeRocketMQTopicStats(data: DescribeRocketMQTopicStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQTopicStatsResponse>;
  /** 获取RocketMQ主题列表 {@link DescribeRocketMQTopicsRequest} {@link DescribeRocketMQTopicsResponse} */
  DescribeRocketMQTopics(data: DescribeRocketMQTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQTopicsResponse>;
  /** 获取指定消费组下订阅的主题列表 {@link DescribeRocketMQTopicsByGroupRequest} {@link DescribeRocketMQTopicsByGroupResponse} */
  DescribeRocketMQTopicsByGroup(data: DescribeRocketMQTopicsByGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQTopicsByGroupResponse>;
  /** 获取单个RocketMQ专享集群信息 {@link DescribeRocketMQVipInstanceDetailRequest} {@link DescribeRocketMQVipInstanceDetailResponse} */
  DescribeRocketMQVipInstanceDetail(data: DescribeRocketMQVipInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQVipInstanceDetailResponse>;
  /** 查询RocketMQ专享实例列表 {@link DescribeRocketMQVipInstancesRequest} {@link DescribeRocketMQVipInstancesResponse} */
  DescribeRocketMQVipInstances(data?: DescribeRocketMQVipInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRocketMQVipInstancesResponse>;
  /** 获取角色列表 {@link DescribeRolesRequest} {@link DescribeRolesResponse} */
  DescribeRoles(data: DescribeRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRolesResponse>;
  /** 获取消费订阅列表 {@link DescribeSubscriptionsRequest} {@link DescribeSubscriptionsResponse} */
  DescribeSubscriptions(data: DescribeSubscriptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscriptionsResponse>;
  /** topic消息查询 {@link DescribeTopicMsgsRequest} {@link DescribeTopicMsgsResponse} */
  DescribeTopicMsgs(data: DescribeTopicMsgsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicMsgsResponse>;
  /** 查询主题列表 {@link DescribeTopicsRequest} {@link DescribeTopicsResponse} */
  DescribeTopics(data: DescribeTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicsResponse>;
  /** 导出RocketMQ消息详情 {@link ExportRocketMQMessageDetailRequest} {@link ExportRocketMQMessageDetailResponse} */
  ExportRocketMQMessageDetail(data: ExportRocketMQMessageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRocketMQMessageDetailResponse>;
  /** 平滑迁移：导入消费者组列表 {@link ImportRocketMQConsumerGroupsRequest} {@link ImportRocketMQConsumerGroupsResponse} */
  ImportRocketMQConsumerGroups(data: ImportRocketMQConsumerGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ImportRocketMQConsumerGroupsResponse>;
  /** 平滑迁移：导入topic列表 {@link ImportRocketMQTopicsRequest} {@link ImportRocketMQTopicsResponse} */
  ImportRocketMQTopics(data: ImportRocketMQTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<ImportRocketMQTopicsResponse>;
  /** @deprecated 更新Amqp集群信息 {@link ModifyAMQPClusterRequest} {@link ModifyAMQPClusterResponse} */
  ModifyAMQPCluster(data: ModifyAMQPClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAMQPClusterResponse>;
  /** 更新集群信息 {@link ModifyClusterRequest} {@link ModifyClusterResponse} */
  ModifyCluster(data: ModifyClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterResponse>;
  /** 修改cmq队列属性 {@link ModifyCmqQueueAttributeRequest} {@link ModifyCmqQueueAttributeResponse} */
  ModifyCmqQueueAttribute(data: ModifyCmqQueueAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCmqQueueAttributeResponse>;
  /** 修改cmq订阅属性 {@link ModifyCmqSubscriptionAttributeRequest} {@link ModifyCmqSubscriptionAttributeResponse} */
  ModifyCmqSubscriptionAttribute(data: ModifyCmqSubscriptionAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCmqSubscriptionAttributeResponse>;
  /** 修改cmq主题属性 {@link ModifyCmqTopicAttributeRequest} {@link ModifyCmqTopicAttributeResponse} */
  ModifyCmqTopicAttribute(data: ModifyCmqTopicAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCmqTopicAttributeResponse>;
  /** 修改命名空间属性 {@link ModifyEnvironmentAttributesRequest} {@link ModifyEnvironmentAttributesResponse} */
  ModifyEnvironmentAttributes(data: ModifyEnvironmentAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvironmentAttributesResponse>;
  /** 修改环境角色授权 {@link ModifyEnvironmentRoleRequest} {@link ModifyEnvironmentRoleResponse} */
  ModifyEnvironmentRole(data: ModifyEnvironmentRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvironmentRoleResponse>;
  /** RabbitMQ专享版修改公网管控台，vpc15672开关 {@link ModifyPublicNetworkAccessPointRequest} {@link ModifyPublicNetworkAccessPointResponse} */
  ModifyPublicNetworkAccessPoint(data: ModifyPublicNetworkAccessPointRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPublicNetworkAccessPointResponse>;
  /** 修改公网安全策略 {@link ModifyPublicNetworkSecurityPolicyRequest} {@link ModifyPublicNetworkSecurityPolicyResponse} */
  ModifyPublicNetworkSecurityPolicy(data: ModifyPublicNetworkSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPublicNetworkSecurityPolicyResponse>;
  /** 修改RabbitMQ的用户 {@link ModifyRabbitMQUserRequest} {@link ModifyRabbitMQUserResponse} */
  ModifyRabbitMQUser(data: ModifyRabbitMQUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQUserResponse>;
  /** 修改RabbitMQ专享版实例 {@link ModifyRabbitMQVipInstanceRequest} {@link ModifyRabbitMQVipInstanceResponse} */
  ModifyRabbitMQVipInstance(data: ModifyRabbitMQVipInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQVipInstanceResponse>;
  /** 修改RabbitMQ的vhost {@link ModifyRabbitMQVirtualHostRequest} {@link ModifyRabbitMQVirtualHostResponse} */
  ModifyRabbitMQVirtualHost(data: ModifyRabbitMQVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQVirtualHostResponse>;
  /** 更新RocketMQ集群信息 {@link ModifyRocketMQClusterRequest} {@link ModifyRocketMQClusterResponse} */
  ModifyRocketMQCluster(data: ModifyRocketMQClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQClusterResponse>;
  /** 修改RocketMQ环境角色授权 {@link ModifyRocketMQEnvironmentRoleRequest} {@link ModifyRocketMQEnvironmentRoleResponse} */
  ModifyRocketMQEnvironmentRole(data: ModifyRocketMQEnvironmentRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQEnvironmentRoleResponse>;
  /** 更新RocketMQ消费组信息 {@link ModifyRocketMQGroupRequest} {@link ModifyRocketMQGroupResponse} */
  ModifyRocketMQGroup(data: ModifyRocketMQGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQGroupResponse>;
  /** 修改RocketMQ专享实例 {@link ModifyRocketMQInstanceRequest} {@link ModifyRocketMQInstanceResponse} */
  ModifyRocketMQInstance(data: ModifyRocketMQInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQInstanceResponse>;
  /** 修改RocketMQ专享实例配置 {@link ModifyRocketMQInstanceSpecRequest} {@link ModifyRocketMQInstanceSpecResponse} */
  ModifyRocketMQInstanceSpec(data: ModifyRocketMQInstanceSpecRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQInstanceSpecResponse>;
  /** 更新RocketMQ命名空间 {@link ModifyRocketMQNamespaceRequest} {@link ModifyRocketMQNamespaceResponse} */
  ModifyRocketMQNamespace(data: ModifyRocketMQNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQNamespaceResponse>;
  /** RocketMQ角色修改 {@link ModifyRocketMQRoleRequest} {@link ModifyRocketMQRoleResponse} */
  ModifyRocketMQRole(data: ModifyRocketMQRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQRoleResponse>;
  /** 更新RocketMQ主题信息 {@link ModifyRocketMQTopicRequest} {@link ModifyRocketMQTopicResponse} */
  ModifyRocketMQTopic(data: ModifyRocketMQTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRocketMQTopicResponse>;
  /** 角色修改 {@link ModifyRoleRequest} {@link ModifyRoleResponse} */
  ModifyRole(data: ModifyRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoleResponse>;
  /** 修改主题 {@link ModifyTopicRequest} {@link ModifyTopicResponse} */
  ModifyTopic(data: ModifyTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicResponse>;
  /** 发送cmq主题消息 {@link PublishCmqMsgRequest} {@link PublishCmqMsgResponse} */
  PublishCmqMsg(data: PublishCmqMsgRequest, config?: AxiosRequestConfig): AxiosPromise<PublishCmqMsgResponse>;
  /** 接收消息 {@link ReceiveMessageRequest} {@link ReceiveMessageResponse} */
  ReceiveMessage(data: ReceiveMessageRequest, config?: AxiosRequestConfig): AxiosPromise<ReceiveMessageResponse>;
  /** 消息回溯 {@link ResetMsgSubOffsetByTimestampRequest} {@link ResetMsgSubOffsetByTimestampResponse} */
  ResetMsgSubOffsetByTimestamp(data: ResetMsgSubOffsetByTimestampRequest, config?: AxiosRequestConfig): AxiosPromise<ResetMsgSubOffsetByTimestampResponse>;
  /** 重置RocketMQ消费位点 {@link ResetRocketMQConsumerOffSetRequest} {@link ResetRocketMQConsumerOffSetResponse} */
  ResetRocketMQConsumerOffSet(data: ResetRocketMQConsumerOffSetRequest, config?: AxiosRequestConfig): AxiosPromise<ResetRocketMQConsumerOffSetResponse>;
  /** 重发RocketMQ死信消息 {@link RetryRocketMQDlqMessageRequest} {@link RetryRocketMQDlqMessageResponse} */
  RetryRocketMQDlqMessage(data: RetryRocketMQDlqMessageRequest, config?: AxiosRequestConfig): AxiosPromise<RetryRocketMQDlqMessageResponse>;
  /** 回溯cmq队列 {@link RewindCmqQueueRequest} {@link RewindCmqQueueResponse} */
  RewindCmqQueue(data: RewindCmqQueueRequest, config?: AxiosRequestConfig): AxiosPromise<RewindCmqQueueResponse>;
  /** 批量发送消息 {@link SendBatchMessagesRequest} {@link SendBatchMessagesResponse} */
  SendBatchMessages(data: SendBatchMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<SendBatchMessagesResponse>;
  /** 发送cmq消息 {@link SendCmqMsgRequest} {@link SendCmqMsgResponse} */
  SendCmqMsg(data: SendCmqMsgRequest, config?: AxiosRequestConfig): AxiosPromise<SendCmqMsgResponse>;
  /** 发送单条消息 {@link SendMessagesRequest} {@link SendMessagesResponse} */
  SendMessages(data: SendMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<SendMessagesResponse>;
  /** 发送消息 {@link SendMsgRequest} {@link SendMsgResponse} */
  SendMsg(data: SendMsgRequest, config?: AxiosRequestConfig): AxiosPromise<SendMsgResponse>;
  /** 发送RocketMQ消息 {@link SendRocketMQMessageRequest} {@link SendRocketMQMessageResponse} */
  SendRocketMQMessage(data: SendRocketMQMessageRequest, config?: AxiosRequestConfig): AxiosPromise<SendRocketMQMessageResponse>;
  /** 设置RocketMQ实例公网访问接入点 {@link SetRocketMQPublicAccessPointRequest} {@link SetRocketMQPublicAccessPointResponse} */
  SetRocketMQPublicAccessPoint(data: SetRocketMQPublicAccessPointRequest, config?: AxiosRequestConfig): AxiosPromise<SetRocketMQPublicAccessPointResponse>;
  /** 解绑cmq死信队列 {@link UnbindCmqDeadLetterRequest} {@link UnbindCmqDeadLetterResponse} */
  UnbindCmqDeadLetter(data: UnbindCmqDeadLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindCmqDeadLetterResponse>;
  /** Rocketmq消费验证 {@link VerifyRocketMQConsumeRequest} {@link VerifyRocketMQConsumeResponse} */
  VerifyRocketMQConsume(data: VerifyRocketMQConsumeRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyRocketMQConsumeResponse>;
}

export declare type Versions = ["2020-02-17"];

export default Tdmq;
