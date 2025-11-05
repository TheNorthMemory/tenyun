/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** exchange使用配额信息 */
declare interface ExchangeQuota {
  /** 可创建最大exchange数 */
  MaxExchange?: number;
  /** 已创建exchange数 */
  UsedExchange?: number;
}

/** 过滤参数 */
declare interface Filter {
  /** 过滤参数的名字 */
  Name?: string;
  /** 数值 */
  Values?: string[];
}

/** queue使用配额信息 */
declare interface QueueQuota {
  /** 可创建最大Queue数 */
  MaxQueue?: number;
  /** 已创建Queue数 */
  UsedQueue?: number;
}

/** Rabbitmq路由关系列表成员 */
declare interface RabbitMQBindingListInfo {
  /** 路由关系id */
  BindingId?: number;
  /** Vhost参数 */
  VirtualHost?: string;
  /** 源exchange名称 */
  Source?: string;
  /** 目标类型,queue或exchange */
  DestinationType?: string;
  /** 目标资源名称 */
  Destination?: string;
  /** 绑定key */
  RoutingKey?: string;
  /** 源exchange类型 */
  SourceExchangeType?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
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
  Remark?: string;
  /** VPC及网络信息 */
  Vpcs?: VpcEndpointInfo[];
  /** 可用区信息 */
  ZoneIds?: number[];
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
  ExceptionInformation?: string;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败 */
  ClusterStatus?: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag?: number;
  /** 是否开启镜像队列策略。1表示开启，0表示没开启。 */
  MirrorQueuePolicyFlag?: number;
  /** 每秒消费消息数 单位：条/秒 */
  MessageConsumeRate?: number;
  /** 集群版本信息 */
  ClusterVersion?: string;
  /** 计费模式，0-后付费，1-预付费 */
  PayMode?: number;
  /** 集群类型 */
  InstanceType?: number;
  /** 消息保留时间，单位小时 */
  MessageRetainTime?: number;
  /** 发送消息流量比例 */
  SendReceiveRatio?: number;
  /** 消息轨迹保留时间，单位小时 */
  TraceTime?: number;
  /** 实例标签列表 */
  Tags?: RabbitMQServerlessTag[];
}

/** RabbitMQ集群规格信息 */
declare interface RabbitMQClusterSpecInfo {
  /** 集群规格名称 */
  SpecName?: string;
  /** 峰值tps */
  MaxTps?: number;
  /** 最大队列数 */
  MaxQueueNum?: number;
  /** 最大交换机数 */
  MaxExchangeNum?: number;
  /** 最大vhost数 */
  MaxVhostNum?: number;
  /** 最大连接数 */
  MaxConnNum?: number;
  /** 最大用户数 */
  MaxUserNum?: number;
  /** 峰值带宽，已废弃 */
  MaxBandWidth?: number;
  /** 公网带宽，已废弃 */
  PublicNetworkTps?: number;
  /** 实例对应的功能列表，true表示支持，false 表示不支持 */
  Features?: string;
}

/** RabbitMQ连接详情 */
declare interface RabbitMQConnection {
  /** 连接名称 */
  ConnectionName?: string;
  /** 客户端ip */
  PeerHost?: string;
  /** 连接状态，包括 starting、tuning、opening、running、flow、blocking、blocked、closing 和 closed */
  State?: string;
  /** 连接使用用户 */
  User?: string;
  /** 是否开启ssl */
  SSL?: boolean;
  /** 连接协议 */
  Protocol?: string;
  /** 连接下的channel数 */
  Channels?: number;
  /** 入流量大小，单位 bytes */
  IncomingBytes?: number;
  /** 出流量大小，单位bytes */
  OutgoingBytes?: number;
  /** 心跳间隔时间，默认60s */
  Heartbeat?: number;
  /** 一个链接最大的channel数，默认1024 */
  MaxChannel?: number;
  /** 空闲时间点 */
  IdleSince?: string;
}

/** 队列消费者列表信息 */
declare interface RabbitMQConsumersListInfo {
  /** 客户端Ip */
  ClientIp?: string;
  /** 消费者Tag */
  ConsumerTag?: string;
  /** 消费目标队列 */
  QueueName?: string;
  /** 是否需要消费者手动 ack */
  AckRequired?: boolean;
  /** 消费者 qos 值 */
  PrefetchCount?: number;
  /** 消费者状态 */
  Active?: string;
  /** 最后一次投递消息时间 */
  LastDeliveredTime?: string;
  /** 消费者未确认消息数 */
  UnAckMsgCount?: number;
  /** consumer 所属的 channel */
  ChannelName?: string;
}

/** RabbitMQ exchange列表成员信息 */
declare interface RabbitMQExchangeListInfo {
  /** exchange 名 */
  ExchangeName?: string;
  /** 备注说明 */
  Remark?: string;
  /** exchange 类型, 支持 "fanout","direct","topic","headers" */
  ExchangeType?: string;
  /** VHost参数 */
  VirtualHost?: string;
  /** exchange 创建者, "system":"系统创建", "user":"用户创建" */
  ExchangeCreator?: string;
  /** exchange 创建时间 */
  CreateTimeStamp?: string;
  /** exchange 修改时间 */
  ModTimeStamp?: string;
  /** 输入消息速率 */
  MessageRateIn?: number;
  /** 输出消息速率 */
  MessageRateOut?: number;
  /** 是否为持久化交换机，true 为持久化，false 为非持久化 */
  Durable?: boolean;
  /** 是否为自动删除交换机，true 为自动删除，false 为非自动删除 */
  AutoDelete?: boolean;
  /** 是否为内部交换机，true 为内部交换机 */
  Internal?: boolean;
  /** 交换机所属实例 ID */
  InstanceId?: string;
  /** 生效的策略名称 */
  Policy?: string;
  /** 扩展参数 key-value 对象 */
  Arguments?: string;
  /** 未调度的延时消息数量 */
  MessagesDelayed?: number;
}

/** RabbitMQ权限详情 */
declare interface RabbitMQPermission {
  /** 集群实例Id */
  InstanceId?: string;
  /** 用户名，权限关联的用户 */
  User?: string;
  /** vhost名 */
  VirtualHost?: string;
  /** 权限类型，declare相关操作，该用户可操作该vhost下的资源名称正则表达式 */
  ConfigRegexp?: string;
  /** 权限类型，消息写入相关操作，该用户可操作该vhost下的资源名称正则表达式 */
  WriteRegexp?: string;
  /** 权限类型，消息读取相关操作，该用户可操作该vhost下的资源名称正则表达式 */
  ReadRegexp?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
}

/** RabbitMQ队列列表消费者信息 */
declare interface RabbitMQQueueListConsumerDetailInfo {
  /** 消费者数量 */
  ConsumersNumber?: number;
}

/** RabbitMQ队列列表成员信息 */
declare interface RabbitMQQueueListInfo {
  /** 队列名 */
  QueueName?: string;
  /** 备注说明 */
  Remark?: string;
  /** 消费者信息 */
  ConsumerDetail?: RabbitMQQueueListConsumerDetailInfo;
  /** 队列类型，取值 "classic"，"quorum" */
  QueueType?: string;
  /** 消息堆积数 */
  MessageHeapCount?: number;
  /** 消息生产速率，每秒 */
  MessageRateIn?: number;
  /** 消息消费速率，每秒 */
  MessageRateOut?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 队列是否持久化，true 为持久化，false 为非持久化 */
  Durable?: boolean;
  /** 队列是否为自动删除队列，true 为自动删除，false 为非自动删除 */
  AutoDelete?: boolean;
  /** 队列所属实例 ID */
  InstanceId?: string;
  /** 队列所属虚拟主机名称 */
  VirtualHost?: string;
  /** 队列所在主节点名称 */
  Node?: string;
  /** 生效的策略名称 */
  Policy?: string;
  /** 扩展参数 key-value 对象 */
  Arguments?: string;
  /** 是否独占队列 */
  Exclusive?: boolean;
}

/** 公网访问信息 */
declare interface RabbitMQServerlessAccessInfo {
  /** 公网域名 */
  PublicAccessEndpoint?: string;
  /** 公网状态 */
  PublicDataStreamStatus?: string;
  /** 公网CLB实例ID */
  PublicClbId?: string;
}

/** 接入点 */
declare interface RabbitMQServerlessEndpoint {
  /** vpc id */
  VpcId?: string;
  /** subnet id */
  SubnetId?: string;
  /** 接入地址 */
  VpcEndpoint?: string;
  /** 接入地址状态 */
  VpcDataStreamEndpointStatus?: string;
  /** 是否是公网 */
  PublicNetwork?: boolean;
  /** 访问策略 */
  AccessStrategy?: string;
  /** 带宽 */
  Bandwidth?: number;
}

/** rabbitmq serverless 实例 */
declare interface RabbitMQServerlessInstance {
  /** 实例Id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本号 */
  InstanceVersion?: string;
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败 */
  Status?: number;
  /** TPS */
  MaxTps?: number;
  /** 带宽 */
  MaxBandWidth?: number;
  /** 集群过期时间 */
  ExpireTime?: number;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag?: number;
  /** 0-后付费，1-预付费 */
  PayMode?: number;
  /** 备注 */
  Remark?: string;
  /** 集群规格 */
  SpecName?: string;
  /** 异常信息 */
  ExceptionInformation?: string;
  /** 公网接入点 */
  PublicAccessEndpoint?: string;
  /** 私有网络接入点 */
  Vpcs?: RabbitMQServerlessEndpoint[];
  /** 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败 */
  ClusterStatus?: number;
  /** 集群类型：1 */
  InstanceType?: number;
  /** 过期时间 */
  CreateTime?: number;
  /** 为了兼容托管版，固定值 0 */
  NodeCount?: number;
  /** 为了兼容托管版，固定值 0 */
  MaxStorage?: number;
  /** 隔离时间 */
  IsolatedTime?: number;
  /** Serverless 扩展字段 */
  ServerlessExt?: string;
  /** 实例标签列表 */
  Tags?: RabbitMQServerlessTag[];
}

/** 标签 */
declare interface RabbitMQServerlessTag {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 公网白名单信息 */
declare interface RabbitMQServerlessWhiteListInfo {
  /** 公网数据流白名单 */
  PublicDataStreamWhiteList?: string;
  /** 公网数据流白名单状态 */
  PublicDataStreamWhiteListStatus?: string;
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
  Description?: string;
  /** 用户标签，用于决定改用户访问RabbitMQ Management的权限范围 */
  Tags?: string[];
  /** 用户创建时间 */
  CreateTime?: string;
  /** 用户最后修改时间 */
  ModifyTime?: string;
  /** 用户类型，System：系统创建，User：用户创建 */
  Type?: string;
  /** 该用户所能允许的最大连接数 */
  MaxConnections?: number;
  /** 该用户所能允许的最大通道数 */
  MaxChannels?: number;
}

/** RabbitMQ的vhost详情 */
declare interface RabbitMQVirtualHostInfo {
  /** 集群实例Id */
  InstanceId?: string;
  /** vhost名 */
  VirtualHost?: string;
  /** vhost描述信息 */
  Description?: string;
  /** vhost标签 */
  Tags?: string[];
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** vhost概览统计信息 */
  VirtualHostStatistics?: RabbitMQVirtualHostStatistics;
  /** vhost状态，与原生控制台对应，有running、partial、stopped、unknown */
  Status?: string;
  /** 消息堆积数 */
  MessageHeapCount?: number;
  /** 输入消息速率 */
  MessageRateIn?: number;
  /** 输出消息速率 */
  MessageRateOut?: number;
  /** 是否存在镜像队列策略，true 为存在，false 为不存 */
  MirrorQueuePolicyFlag?: boolean;
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

/** 用户数配额 */
declare interface UserQuota {
  /** 最大用户数 */
  MaxUser?: number;
  /** 已用用户数 */
  UsedUser?: number;
}

/** 虚拟主机配额 */
declare interface VirtualHostQuota {
  /** 最大虚拟主机数 */
  MaxVirtualHost?: number;
  /** 已经使用的虚拟主机数 */
  UsedVirtualHost?: number;
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
  VpcDataStreamEndpointStatus?: string;
}

declare interface CreateRabbitMQServerlessBindingRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost: string;
  /** 源exchange */
  Source: string;
  /** 目标类型,取值queue或exchange */
  DestinationType: string;
  /** 目标队列或者交换机 */
  Destination: string;
  /** 绑定key */
  RoutingKey?: string;
}

declare interface CreateRabbitMQServerlessBindingResponse {
  /** 队列名称 */
  InstanceId?: string;
  /** vhost参数 */
  VirtualHost?: string;
  /** 路由关系Id */
  BindingId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQServerlessExchangeRequest {
  /** 实例Id */
  InstanceId: string;
  /** VHost参数 */
  VirtualHost: string;
  /** exchange 名称 */
  ExchangeName: string;
  /** exchange 类型, 支持 "fanout","direct","topic","headers" */
  ExchangeType: string;
  /** exchange 备注 */
  Remark?: string;
  /** 是否为持久化 exchange, 当集群重启时,将会清除所有该字段为"false"的 exchange */
  Durable?: boolean;
  /** 是否自动删除该 exchange, 如果为 "true", 当解绑所有当前 exchange 上的路由关系时, 该 exchange 将会被自动删除 */
  AutoDelete?: boolean;
  /** 是否为内部 exchange, 如果为 "true", 则无法直接投递消息到该 exchange, 需要在路由设置中通过其他 exchange 进行转发 */
  Internal?: boolean;
  /** 替代 exchange, 如果消息无法发送到当前 exchange, 就会发送到该替代 exchange */
  AlternateExchange?: string;
  /** 延迟类型的exchange背后对应的exchange类型, 支持 "fanout","direct","topic","headers" */
  DelayedExchangeType?: string;
}

declare interface CreateRabbitMQServerlessExchangeResponse {
  /** exchange 名称 */
  ExchangeName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQServerlessQueueRequest {
  /** 实例Id */
  InstanceId: string;
  /** VHost参数 */
  VirtualHost: string;
  /** 队列名称 */
  QueueName: string;
  /** 只支持 classic */
  QueueType?: string;
  /** 持久标记,classic类型必传,quorum类型无需传入固定为true */
  Durable?: boolean;
  /** 自动清除,classic类型必传,quorum类型无需传入固定为false */
  AutoDelete?: boolean;
  /** 备注 */
  Remark?: string;
  /** MessageTTL参数,classic类型专用 */
  MessageTTL?: number;
  /** AutoExpire参数，单位为 ms，队列在指定时间内没有被使用，将会被删除 */
  AutoExpire?: number;
  /** MaxLength参数。队列可以容纳的最大条数。若超出上限，将根据 overview behavior 处理 */
  MaxLength?: number;
  /** MaxLengthBytes参数。若超出上限，将根据 overview behavior 处理。 */
  MaxLengthBytes?: number;
  /** DeliveryLimit参数,quorum类型专用 */
  DeliveryLimit?: number;
  /** OverflowBehaviour参数,取值为drop-head, reject-publish或reject-publish-dlx */
  OverflowBehaviour?: string;
  /** DeadLetterExchange参数。可将过期或被拒绝的消息投往指定的死信 exchange。 */
  DeadLetterExchange?: string;
  /** DeadLetterRoutingKey参数。只能包含字母、数字、"."、"-"，"@"，"_" */
  DeadLetterRoutingKey?: string;
  /** SingleActiveConsumer参数。若开启，需确保每次有且只有一个消费者从队列中消费 */
  SingleActiveConsumer?: boolean;
  /** MaximumPriority参数,classic类型专用 */
  MaximumPriority?: number;
  /** LazyMode参数,classic类型专用 */
  LazyMode?: boolean;
  /** MasterLocator参数,classic类型专用,取值为min-masters,client-local或random */
  MasterLocator?: string;
  /** MaxInMemoryLength参数，quorum类型专用。quorum 队列的内存中最大消息数量 */
  MaxInMemoryLength?: number;
  /** MaxInMemoryBytes参数，quorum类型专用。quorum 队列的内存中最大数总消息大小 */
  MaxInMemoryBytes?: number;
  /** Node参数，非必填，指定创建 queue 所在节点 */
  Node?: string;
  /** 仲裁队列死信一致性策略，at-most-once、at-least-once，默认是at-most-once */
  DeadLetterStrategy?: string;
  /** 仲裁队列的领导者选举策略，client-local、balanced，默认是client-local */
  QueueLeaderLocator?: string;
  /** 仲裁队列的初始副本组大小，默认3 */
  QuorumInitialGroupSize?: number;
}

declare interface CreateRabbitMQServerlessQueueResponse {
  /** 队列名称 */
  QueueName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQServerlessUserRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名，登录时使用 */
  User: string;
  /** 密码，登录时使用 */
  Password: string;
  /** 描述 */
  Description?: string;
  /** serverless 实例该字段无效 */
  Tags?: string[];
  /** 该用户的最大连接数，不填写则不限制 */
  MaxConnections?: number;
  /** 该用户的最大channel数，不填写则不限制 */
  MaxChannels?: number;
}

declare interface CreateRabbitMQServerlessUserResponse {
  /** 用户名，登录时使用 */
  User?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRabbitMQServerlessVirtualHostRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名称 */
  VirtualHost: string;
  /** 描述信息 */
  Description?: string;
  /** 消息轨迹开关,true打开,false关闭,默认关闭 */
  TraceFlag?: boolean;
  /** 是否创建镜像队列策略，默认值 true */
  MirrorQueuePolicyFlag?: boolean;
}

declare interface CreateRabbitMQServerlessVirtualHostResponse {
  /** vhost名称 */
  VirtualHost?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQServerlessBindingRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost: string;
  /** 路由关系Id */
  BindingId: number;
}

declare interface DeleteRabbitMQServerlessBindingResponse {
  /** 队列名称 */
  InstanceId?: string;
  /** vhost参数 */
  VirtualHost?: string;
  /** 路由关系Id */
  BindingId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQServerlessExchangeRequest {
  /** 实例 id */
  InstanceId: string;
  /** vhost 参数 */
  VirtualHost: string;
  /** exchange 名称 */
  ExchangeName: string;
}

declare interface DeleteRabbitMQServerlessExchangeResponse {
  /** exchange 名称 */
  ExchangeName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQServerlessPermissionRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名，登录时使用 */
  User: string;
  /** vhost名 */
  VirtualHost: string;
}

declare interface DeleteRabbitMQServerlessPermissionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQServerlessQueueRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost: string;
  /** 队列名称 */
  QueueName: string;
}

declare interface DeleteRabbitMQServerlessQueueResponse {
  /** 队列名称 */
  QueueName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQServerlessUserRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名，登录时使用 */
  User: string;
}

declare interface DeleteRabbitMQServerlessUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRabbitMQServerlessVirtualHostRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名 */
  VirtualHost: string;
}

declare interface DeleteRabbitMQServerlessVirtualHostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessBindingsRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
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

declare interface DescribeRabbitMQServerlessBindingsResponse {
  /** 路由关系列表 */
  BindingInfoList?: RabbitMQBindingListInfo[];
  /** 数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessConnectionRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名 */
  VirtualHost: string;
  /** 按哪个字段排序，支持：channel(channel数),incoming_bytes(入流量大小),outgoing_bytes(出流量大小) */
  SortElement?: string;
  /** 排序方式：ASC,DESC */
  SortType?: string;
  /** 分页参数，从第几条数据开始 */
  Offset?: number;
  /** 一页大小 */
  Limit?: number;
  /** 连接名模糊搜索 */
  Name?: string;
}

declare interface DescribeRabbitMQServerlessConnectionResponse {
  /** 返回连接数量 */
  TotalCount?: number;
  /** 连接详情列表 */
  Connections?: RabbitMQConnection[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessConsumersRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost?: string;
  /** 队列名 */
  QueueName?: string;
  /** 分页Limit */
  Limit?: number;
  /** 分页Offset */
  Offset?: number;
  /** 搜索关键词 */
  SearchWord?: string;
  /** channelId */
  Channel?: string;
}

declare interface DescribeRabbitMQServerlessConsumersResponse {
  /** 消费者列表信息 */
  ConsumerInfoList?: RabbitMQConsumersListInfo[];
  /** 数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessExchangeDetailRequest {
  /** 实例 id */
  InstanceId: string;
  /** vhost 参数 */
  VirtualHost: string;
  /** exchange 名称 */
  ExchangeName: string;
}

declare interface DescribeRabbitMQServerlessExchangeDetailResponse {
  /** exchange 名 */
  ExchangeName?: string;
  /** 备注说明 */
  Remark?: string;
  /** 是否为持久化 exchange, 当集群重启时, 将会清除所有该字段为 "false" 的 exchange */
  Durable?: boolean;
  /** 是否自动删除该 exchange, 如果为 "true", 当解绑所有当前 exchange 上的路由关系时, 该 exchange 将会被自动删除 */
  AutoDelete?: boolean;
  /** 是否为内部 exchange, 如果为 "true", 则无法直接投递消息到该 exchange, 需要在路由设置中通过其他 exchange 进行转发 */
  Internal?: boolean;
  /** 替代 exchange, 如果消息没有匹配当前 exchange 绑定的所有 queue 或 exchange, 就会发送到该替代 exchange */
  AlternateExchange?: string;
  /** exchange 类型, 支持 "fanout","direct","topic","headers" */
  ExchangeType?: string;
  /** VHost参数 */
  VirtualHost?: string;
  /** exchange 创建者, "system":"系统创建", "user":"用户创建" */
  ExchangeCreator?: string;
  /** 扩展参数 key-value 字符串 */
  Arguments?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessExchangesRequest {
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

declare interface DescribeRabbitMQServerlessExchangesResponse {
  /** 交换机列表 */
  ExchangeInfoList?: RabbitMQExchangeListInfo[];
  /** 交换机总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessInstanceRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DescribeRabbitMQServerlessInstanceResponse {
  /** 集群信息 */
  ClusterInfo?: RabbitMQClusterInfo;
  /** 集群规格信息 */
  ClusterSpecInfo?: RabbitMQClusterSpecInfo;
  /** vhost配额信息 */
  VirtualHostQuota?: VirtualHostQuota;
  /** exchange配额信息 */
  ExchangeQuota?: ExchangeQuota;
  /** queue配额信息 */
  QueueQuota?: QueueQuota;
  /** 网络信息 */
  ClusterNetInfo?: RabbitMQServerlessAccessInfo;
  /** 公网白名单信息 */
  ClusterWhiteListInfo?: RabbitMQServerlessWhiteListInfo;
  /** user配额信息 */
  UserQuota?: UserQuota;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessPermissionRequest {
  /** 集群实例id */
  InstanceId: string;
  /** 用户名，用于查询过滤，不传则查询全部 */
  User?: string;
  /** vhost名，用于查询过滤，不传则查询全部 */
  VirtualHost?: string;
  /** 分页Offset */
  Offset?: number;
  /** 分页Limit */
  Limit?: number;
}

declare interface DescribeRabbitMQServerlessPermissionResponse {
  /** 返回权限数量 */
  TotalCount?: number;
  /** 权限详情列表 */
  RabbitMQPermissionList?: RabbitMQPermission[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessQueueDetailRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost: string;
  /** 队列名称 */
  QueueName: string;
}

declare interface DescribeRabbitMQServerlessQueueDetailResponse {
  /** 实例id */
  InstanceId?: string;
  /** Vhost参数 */
  VirtualHost?: string;
  /** 队列名称 */
  QueueName?: string;
  /** 队列类型,取值classic或quorum */
  QueueType?: string;
  /** 在线消费者数量 */
  Consumers?: number;
  /** 持久标记 */
  Durable?: boolean;
  /** 自动清除 */
  AutoDelete?: boolean;
  /** 备注 */
  Remark?: string;
  /** MessageTTL参数,classic类型专用 */
  MessageTTL?: number;
  /** AutoExpire参数 */
  AutoExpire?: number;
  /** MaxLength参数 */
  MaxLength?: number;
  /** MaxLengthBytes参数 */
  MaxLengthBytes?: number;
  /** DeliveryLimit参数,quorum类型专用 */
  DeliveryLimit?: number;
  /** OverflowBehaviour参数,取值为drop-head, reject-publish或reject-publish-dlx */
  OverflowBehaviour?: string;
  /** DeadLetterExchange参数 */
  DeadLetterExchange?: string;
  /** DeadLetterRoutingKey参数 */
  DeadLetterRoutingKey?: string;
  /** SingleActiveConsumer参数 */
  SingleActiveConsumer?: boolean;
  /** MaximumPriority参数,classic类型专用 */
  MaximumPriority?: number;
  /** LazyMode参数,classic类型专用 */
  LazyMode?: boolean;
  /** MasterLocator参数,classic类型专用 */
  MasterLocator?: string;
  /** MaxInMemoryLength参数,quorum类型专用 */
  MaxInMemoryLength?: number;
  /** MaxInMemoryBytes参数,quorum类型专用 */
  MaxInMemoryBytes?: number;
  /** 创建时间戳,单位秒 */
  CreateTime?: number;
  /** 节点 */
  Node?: string;
  /** 仲裁队列死信一致性策略 */
  DeadLetterStrategy?: string;
  /** 仲裁队列的领导者选举策略 */
  QueueLeaderLocator?: string;
  /** 仲裁队列的初始副本组大小 */
  QuorumInitialGroupSize?: number;
  /** 是否为独占队列 */
  Exclusive?: boolean;
  /** 生效的策略名 */
  Policy?: string;
  /** 扩展参数 key-value */
  Arguments?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessQueuesRequest {
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

declare interface DescribeRabbitMQServerlessQueuesResponse {
  /** 队列列表信息 */
  QueueInfoList?: RabbitMQQueueListInfo[];
  /** 数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessUserRequest {
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

declare interface DescribeRabbitMQServerlessUserResponse {
  /** 返回的User数量 */
  TotalCount?: number;
  /** 当前已创建的RabbitMQ用户列表 */
  RabbitMQUserList?: RabbitMQUser[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRabbitMQServerlessVirtualHostRequest {
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

declare interface DescribeRabbitMQServerlessVirtualHostResponse {
  /** 返回vhost数量 */
  TotalCount?: number;
  /** vhost详情列表 */
  VirtualHostList?: RabbitMQVirtualHostInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRabbitMQServerlessInstancesRequest {
  /** 过滤条件 */
  Filters?: Filter[];
  /** 翻页大小 */
  Limit?: number;
  /** 翻页的起始索引值 */
  Offset?: number;
}

declare interface ListRabbitMQServerlessInstancesResponse {
  /** 实例列表 */
  Instances?: RabbitMQServerlessInstance[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQServerlessExchangeRequest {
  /** 实例 id */
  InstanceId: string;
  /** vhost 参数 */
  VirtualHost: string;
  /** exchange 名称 */
  ExchangeName: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface ModifyRabbitMQServerlessExchangeResponse {
  /** exchange 名称 */
  ExchangeName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQServerlessInstanceRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群名 */
  ClusterName?: string;
  /** 备注信息 */
  Remark?: string;
  /** 是否开启trace */
  TraceFlag?: boolean;
  /** 限流生产消费比例 */
  SendReceiveRatio?: number;
  /** 是否删除所有标签，默认为false */
  DeleteAllTags?: boolean;
  /** 修改的实例标签列表 */
  InstanceTags?: RabbitMQServerlessTag[];
}

declare interface ModifyRabbitMQServerlessInstanceResponse {
  /** 实例id */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQServerlessPermissionRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名，权限关联的用户 */
  User: string;
  /** vhost名 */
  VirtualHost: string;
  /** 权限类型，declare相关操作，该用户可操作该vhost下的资源名称正则表达式 */
  ConfigRegexp: string;
  /** 权限类型，消息写入相关操作，该用户可操作该vhost下的资源名称正则表达式 */
  WriteRegexp: string;
  /** 权限类型，消息读取相关操作，该用户可操作该vhost下的资源名称正则表达式 */
  ReadRegexp: string;
}

declare interface ModifyRabbitMQServerlessPermissionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQServerlessQueueRequest {
  /** 实例Id */
  InstanceId: string;
  /** Vhost参数 */
  VirtualHost: string;
  /** 队列名称 */
  QueueName: string;
  /** 新修改的备注 */
  Remark?: string;
  /** MessageTTL参数单位ms,classic类型专用 */
  MessageTTL?: number;
  /** DeadLetterExchange参数。可将过期或被拒绝的消息投往指定的死信 exchange。 */
  DeadLetterExchange?: string;
  /** DeadLetterRoutingKey参数。只能包含字母、数字、"."、"-"，"@"，"_" */
  DeadLetterRoutingKey?: string;
}

declare interface ModifyRabbitMQServerlessQueueResponse {
  /** 队列名称 */
  QueueName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQServerlessUserRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 用户名 */
  User: string;
  /** 密码 */
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

declare interface ModifyRabbitMQServerlessUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRabbitMQServerlessVirtualHostRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** vhost名 */
  VirtualHost: string;
  /** vhost描述信息 */
  Description?: string;
  /** 消息轨迹开关,true打开,false关闭 */
  TraceFlag?: boolean;
}

declare interface ModifyRabbitMQServerlessVirtualHostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Trabbit 消息队列 RabbitMQ Serverless 版} */
declare interface Trabbit {
  (): Versions;
  /** 创建RabbitMQ路由关系 {@link CreateRabbitMQServerlessBindingRequest} {@link CreateRabbitMQServerlessBindingResponse} */
  CreateRabbitMQServerlessBinding(data: CreateRabbitMQServerlessBindingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQServerlessBindingResponse>;
  /** 创建RabbitMQ exchange {@link CreateRabbitMQServerlessExchangeRequest} {@link CreateRabbitMQServerlessExchangeResponse} */
  CreateRabbitMQServerlessExchange(data: CreateRabbitMQServerlessExchangeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQServerlessExchangeResponse>;
  /** 创建RabbitMQ队列 {@link CreateRabbitMQServerlessQueueRequest} {@link CreateRabbitMQServerlessQueueResponse} */
  CreateRabbitMQServerlessQueue(data: CreateRabbitMQServerlessQueueRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQServerlessQueueResponse>;
  /** 创建RabbitMQ的用户 {@link CreateRabbitMQServerlessUserRequest} {@link CreateRabbitMQServerlessUserResponse} */
  CreateRabbitMQServerlessUser(data: CreateRabbitMQServerlessUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQServerlessUserResponse>;
  /** 创建RabbitMQ的vhost {@link CreateRabbitMQServerlessVirtualHostRequest} {@link CreateRabbitMQServerlessVirtualHostResponse} */
  CreateRabbitMQServerlessVirtualHost(data: CreateRabbitMQServerlessVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRabbitMQServerlessVirtualHostResponse>;
  /** 解绑RabbitMQ路由关系 {@link DeleteRabbitMQServerlessBindingRequest} {@link DeleteRabbitMQServerlessBindingResponse} */
  DeleteRabbitMQServerlessBinding(data: DeleteRabbitMQServerlessBindingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQServerlessBindingResponse>;
  /** 删除RabbitMQ exchange {@link DeleteRabbitMQServerlessExchangeRequest} {@link DeleteRabbitMQServerlessExchangeResponse} */
  DeleteRabbitMQServerlessExchange(data: DeleteRabbitMQServerlessExchangeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQServerlessExchangeResponse>;
  /** 删除RabbitMQ的权限 {@link DeleteRabbitMQServerlessPermissionRequest} {@link DeleteRabbitMQServerlessPermissionResponse} */
  DeleteRabbitMQServerlessPermission(data: DeleteRabbitMQServerlessPermissionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQServerlessPermissionResponse>;
  /** 删除RabbitMQ队列 {@link DeleteRabbitMQServerlessQueueRequest} {@link DeleteRabbitMQServerlessQueueResponse} */
  DeleteRabbitMQServerlessQueue(data: DeleteRabbitMQServerlessQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQServerlessQueueResponse>;
  /** 删除RabbitMQ的用户 {@link DeleteRabbitMQServerlessUserRequest} {@link DeleteRabbitMQServerlessUserResponse} */
  DeleteRabbitMQServerlessUser(data: DeleteRabbitMQServerlessUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQServerlessUserResponse>;
  /** 删除RabbitMQ的vhost {@link DeleteRabbitMQServerlessVirtualHostRequest} {@link DeleteRabbitMQServerlessVirtualHostResponse} */
  DeleteRabbitMQServerlessVirtualHost(data: DeleteRabbitMQServerlessVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRabbitMQServerlessVirtualHostResponse>;
  /** 查询RabbitMQ路由关系列表 {@link DescribeRabbitMQServerlessBindingsRequest} {@link DescribeRabbitMQServerlessBindingsResponse} */
  DescribeRabbitMQServerlessBindings(data: DescribeRabbitMQServerlessBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessBindingsResponse>;
  /** 查询RabbitMQ连接列表 {@link DescribeRabbitMQServerlessConnectionRequest} {@link DescribeRabbitMQServerlessConnectionResponse} */
  DescribeRabbitMQServerlessConnection(data: DescribeRabbitMQServerlessConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessConnectionResponse>;
  /** 查询RabbitMQ队列消费者列表 {@link DescribeRabbitMQServerlessConsumersRequest} {@link DescribeRabbitMQServerlessConsumersResponse} */
  DescribeRabbitMQServerlessConsumers(data: DescribeRabbitMQServerlessConsumersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessConsumersResponse>;
  /** 查询RabbitMQ exchange 详情 {@link DescribeRabbitMQServerlessExchangeDetailRequest} {@link DescribeRabbitMQServerlessExchangeDetailResponse} */
  DescribeRabbitMQServerlessExchangeDetail(data: DescribeRabbitMQServerlessExchangeDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessExchangeDetailResponse>;
  /** 查询RabbitMQ exchange 列表 {@link DescribeRabbitMQServerlessExchangesRequest} {@link DescribeRabbitMQServerlessExchangesResponse} */
  DescribeRabbitMQServerlessExchanges(data: DescribeRabbitMQServerlessExchangesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessExchangesResponse>;
  /** 获取 rabbitmq serverless 实例总体信息 {@link DescribeRabbitMQServerlessInstanceRequest} {@link DescribeRabbitMQServerlessInstanceResponse} */
  DescribeRabbitMQServerlessInstance(data: DescribeRabbitMQServerlessInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessInstanceResponse>;
  /** 查询RabbitMQ权限列表 {@link DescribeRabbitMQServerlessPermissionRequest} {@link DescribeRabbitMQServerlessPermissionResponse} */
  DescribeRabbitMQServerlessPermission(data: DescribeRabbitMQServerlessPermissionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessPermissionResponse>;
  /** 查询RabbitMQ队列详情 {@link DescribeRabbitMQServerlessQueueDetailRequest} {@link DescribeRabbitMQServerlessQueueDetailResponse} */
  DescribeRabbitMQServerlessQueueDetail(data: DescribeRabbitMQServerlessQueueDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessQueueDetailResponse>;
  /** 查询RabbitMQ队列列表 {@link DescribeRabbitMQServerlessQueuesRequest} {@link DescribeRabbitMQServerlessQueuesResponse} */
  DescribeRabbitMQServerlessQueues(data: DescribeRabbitMQServerlessQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessQueuesResponse>;
  /** 查询RabbitMQ用户列表 {@link DescribeRabbitMQServerlessUserRequest} {@link DescribeRabbitMQServerlessUserResponse} */
  DescribeRabbitMQServerlessUser(data: DescribeRabbitMQServerlessUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessUserResponse>;
  /** 查询RabbitMQ vhost列表 {@link DescribeRabbitMQServerlessVirtualHostRequest} {@link DescribeRabbitMQServerlessVirtualHostResponse} */
  DescribeRabbitMQServerlessVirtualHost(data: DescribeRabbitMQServerlessVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRabbitMQServerlessVirtualHostResponse>;
  /** 获取 RabbitMQ Serverless 集群列表 {@link ListRabbitMQServerlessInstancesRequest} {@link ListRabbitMQServerlessInstancesResponse} */
  ListRabbitMQServerlessInstances(data?: ListRabbitMQServerlessInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ListRabbitMQServerlessInstancesResponse>;
  /** 修改RabbitMQ exchange {@link ModifyRabbitMQServerlessExchangeRequest} {@link ModifyRabbitMQServerlessExchangeResponse} */
  ModifyRabbitMQServerlessExchange(data: ModifyRabbitMQServerlessExchangeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQServerlessExchangeResponse>;
  /** 修改 rabbitmq serverless 实例信息 {@link ModifyRabbitMQServerlessInstanceRequest} {@link ModifyRabbitMQServerlessInstanceResponse} */
  ModifyRabbitMQServerlessInstance(data: ModifyRabbitMQServerlessInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQServerlessInstanceResponse>;
  /** 修改RabbitMQ的权限 {@link ModifyRabbitMQServerlessPermissionRequest} {@link ModifyRabbitMQServerlessPermissionResponse} */
  ModifyRabbitMQServerlessPermission(data: ModifyRabbitMQServerlessPermissionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQServerlessPermissionResponse>;
  /** 修改RabbitMQ队列 {@link ModifyRabbitMQServerlessQueueRequest} {@link ModifyRabbitMQServerlessQueueResponse} */
  ModifyRabbitMQServerlessQueue(data: ModifyRabbitMQServerlessQueueRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQServerlessQueueResponse>;
  /** 修改RabbitMQ的用户 {@link ModifyRabbitMQServerlessUserRequest} {@link ModifyRabbitMQServerlessUserResponse} */
  ModifyRabbitMQServerlessUser(data: ModifyRabbitMQServerlessUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQServerlessUserResponse>;
  /** 修改RabbitMQ vhost信息 {@link ModifyRabbitMQServerlessVirtualHostRequest} {@link ModifyRabbitMQServerlessVirtualHostResponse} */
  ModifyRabbitMQServerlessVirtualHost(data: ModifyRabbitMQServerlessVirtualHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRabbitMQServerlessVirtualHostResponse>;
}

export declare type Versions = ["2023-04-18"];

export default Trabbit;
