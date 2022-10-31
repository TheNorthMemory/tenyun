/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 死信队列策略 */
declare interface DeadLetterPolicy {
  /** 死信队列。 */
  DeadLetterQueue: string | null;
  /** 死信队列名字。 */
  DeadLetterQueueName: string | null;
  /** 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。 */
  MaxTimeToLive: number | null;
  /** 死信队列策略。 */
  Policy: number | null;
  /** 最大接收次数。 */
  MaxReceiveCount: number | null;
}

/** 死信源队列信息 */
declare interface DeadLetterSource {
  /** 消息队列ID。 */
  QueueId: string | null;
  /** 消息队列名字。 */
  QueueName: string | null;
}

/** 过滤参数 */
declare interface Filter {
  /** 过滤参数的名字 */
  Name?: string;
  /** 数值 */
  Values?: string[];
}

/** 批量queue属性信息 */
declare interface QueueSet {
  /** 消息队列ID。 */
  QueueId: string;
  /** 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。 */
  RewindSeconds: number | null;
  /** 创建者Uin。 */
  CreateUin: number | null;
  /** 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到秒。 */
  LastModifyTime: number | null;
  /** 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。 */
  VisibilityTimeout: number | null;
  /** 消息队列名字。 */
  QueueName: string;
  /** 消息轨迹。true表示开启，false表示不开启。 */
  Trace: boolean | null;
  /** 关联的标签。 */
  Tags: Tag[] | null;
  /** 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。 */
  RewindMsgNum: number | null;
  /** 飞行消息最大保留时间。 */
  MaxDelaySeconds: number | null;
  /** 事务消息策略。 */
  TransactionPolicy: TransactionPolicy | null;
  /** 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。 */
  MsgRetentionSeconds: number | null;
  /** 延迟消息数。 */
  DelayMsgNum: number | null;
  /** 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。 */
  MaxMsgHeapNum: number | null;
  /** 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。 */
  PollingWaitSeconds: number | null;
  /** 带宽限制。 */
  Bps: number | null;
  /** 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。 */
  InactiveMsgNum: number | null;
  /** 死信队列策略。 */
  DeadLetterPolicy: DeadLetterPolicy | null;
  /** 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。 */
  ActiveMsgNum: number | null;
  /** 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。 */
  MaxMsgSize: number | null;
  /** 消息最小未消费时间，单位为秒。 */
  MinMsgTime: number | null;
  /** 死信队列。 */
  DeadLetterSource: DeadLetterSource[] | null;
  /** 事务消息队列。true表示是事务消息，false表示不是事务消息。 */
  Transaction: boolean | null;
  /** 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。 */
  Qps: number | null;
  /** 队列的创建时间。返回 Unix 时间戳，精确到秒。 */
  CreateTime: number | null;
  /** 是否迁移到新版本。0 表示仅同步元数据，1 表示迁移中，2 表示已经迁移完毕，3 表示回切状态，曾经迁移过，4 未迁移。 */
  Migrate: number | null;
}

/** 订阅返回参数 */
declare interface Subscription {
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string | null;
  /** 订阅 ID。订阅 ID 在拉取监控数据时会用到。 */
  SubscriptionId: string | null;
  /** 订阅拥有者的 APPID。 */
  TopicOwner: number | null;
  /** 该订阅待投递的消息数。 */
  MsgCount: number | null;
  /** 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到秒。 */
  LastModifyTime: number | null;
  /** 订阅的创建时间。返回 Unix 时间戳，精确到秒。 */
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

/** 标签 */
declare interface Tag {
  /** 标签Key */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

/** topic返回信息展示字段 */
declare interface TopicSet {
  /** 当前该主题中消息数目（消息堆积数）。 */
  MsgCount: number | null;
  /** 主题的 ID。 */
  TopicId: string | null;
  /** 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为65536。 */
  MaxMsgSize: number | null;
  /** 消息轨迹。true表示开启，false表示不开启。 */
  Trace: boolean | null;
  /** 关联的标签。 */
  Tags: Tag[] | null;
  /** 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。 */
  CreateUin: number | null;
  /** 描述用户创建订阅时选择的过滤策略：FilterType = 1表示用户使用 FilterTag 标签过滤;FilterType = 2表示用户使用 BindingKey 过滤。 */
  FilterType: number | null;
  /** 主题名称。 */
  TopicName: string | null;
  /** 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到秒。 */
  LastModifyTime: number | null;
  /** 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。 */
  MsgRetentionSeconds: number | null;
  /** 每秒钟发布消息的条数。 */
  Qps: number | null;
  /** 主题的创建时间。返回 Unix 时间戳，精确到秒。 */
  CreateTime: number | null;
  /** 是否迁移到新版本。0 表示未迁移，1 表示迁移中，2 表示已经迁移完毕，3 表示回切状态，曾经迁移过，4 未知状态。 */
  Migrate: number | null;
}

/** 事务消息策略 */
declare interface TransactionPolicy {
  /** 最大查询次数。 */
  MaxQueryCount: number | null;
  /** 第一次回查时间。 */
  FirstQueryInterval: number | null;
}

declare interface ClearQueueRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
}

declare interface ClearQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ClearSubscriptionFilterTagsRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
}

declare interface ClearSubscriptionFilterTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateQueueRequest {
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
  /** 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。 */
  MsgRetentionSeconds?: number;
  /** 队列是否开启回溯消息能力，该参数取值范围0-msgRetentionSeconds,即最大的回溯时间为消息在队列中的保留周期，0表示不开启。 */
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
}

declare interface CreateQueueResponse {
  /** 创建成功的queueId */
  QueueId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSubscribeRequest {
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

declare interface CreateSubscribeResponse {
  /** SubscriptionId */
  SubscriptionId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
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
}

declare interface CreateTopicResponse {
  /** TopicName */
  TopicId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteQueueRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
}

declare interface DeleteQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSubscribeRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
  /** 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  SubscriptionName: string;
}

declare interface DeleteSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTopicRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
}

declare interface DeleteTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeadLetterSourceQueuesRequest {
  /** 死信队列名称 */
  DeadLetterQueueName: string;
  /** 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。 */
  Limit?: number;
  /** 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Offset?: number;
  /** 过滤死信队列源队列名称，目前仅支持SourceQueueName过滤 */
  Filters?: Filter[];
}

declare interface DescribeDeadLetterSourceQueuesResponse {
  /** 满足本次条件的队列个数 */
  TotalCount?: number;
  /** 死信队列源队列 */
  QueueSet?: DeadLetterSource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeQueueDetailRequest {
  /** 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0 */
  Offset?: number;
  /** 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Limit?: number;
  /** 筛选参数，目前支持QueueName筛选，且仅支持一个关键字 */
  Filters?: Filter[];
  /** 标签搜索 */
  TagKey?: string;
  /** 精确匹配QueueName */
  QueueName?: string;
}

declare interface DescribeQueueDetailResponse {
  /** 总队列数。 */
  TotalCount?: number;
  /** 队列详情列表。 */
  QueueSet?: QueueSet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubscriptionDetailRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。 */
  TopicName: string;
  /** 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0 */
  Offset?: number;
  /** 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Limit?: number;
  /** 筛选参数，目前只支持SubscriptionName，且仅支持一个关键字。 */
  Filters?: Filter[];
}

declare interface DescribeSubscriptionDetailResponse {
  /** 总数 */
  TotalCount?: number;
  /** Subscription属性集合 */
  SubscriptionSet?: Subscription[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTopicDetailRequest {
  /** 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。 */
  Offset?: number;
  /** 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。 */
  Limit?: number;
  /** 目前只支持过滤TopicName ， 且只能填一个过滤值。 */
  Filters?: Filter[];
  /** 标签匹配。 */
  TagKey?: string;
  /** 精确匹配TopicName。 */
  TopicName?: string;
}

declare interface DescribeTopicDetailResponse {
  /** 主题列表总数。 */
  TotalCount?: number;
  /** 主题详情列表。 */
  TopicSet?: TopicSet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyQueueAttributeRequest {
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
  /** 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。 */
  MsgRetentionSeconds?: number;
  /** 消息最长回溯时间，取值范围0-msgRetentionSeconds，消息的最大回溯之间为消息在队列中的保存周期，0表示不开启消息回溯。 */
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
}

declare interface ModifyQueueAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubscriptionAttributeRequest {
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

declare interface ModifySubscriptionAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTopicAttributeRequest {
  /** 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  TopicName: string;
  /** 消息最大长度。取值范围1024 - 65536 Byte（即1 - 64K），默认值65536。 */
  MaxMsgSize?: number;
  /** 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。 */
  MsgRetentionSeconds?: number;
  /** 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。 */
  Trace?: boolean;
}

declare interface ModifyTopicAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RewindQueueRequest {
  /** 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。 */
  QueueName: string;
  /** 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。 */
  StartConsumeTime: number;
}

declare interface RewindQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnbindDeadLetterRequest {
  /** 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。 */
  QueueName: string;
}

declare interface UnbindDeadLetterResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Cmq 消息队列 CMQ} */
declare interface Cmq {
  (): Versions;
  /** {@link ClearQueue 清空消息队列中的消息}({@link ClearQueueRequest 请求参数}): {@link ClearQueueResponse 返回参数} */
  ClearQueue(data: ClearQueueRequest, config?: AxiosRequestConfig): AxiosPromise<ClearQueueResponse>;
  /** {@link ClearSubscriptionFilterTags 清空订阅者消息标签}({@link ClearSubscriptionFilterTagsRequest 请求参数}): {@link ClearSubscriptionFilterTagsResponse 返回参数} */
  ClearSubscriptionFilterTags(data: ClearSubscriptionFilterTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ClearSubscriptionFilterTagsResponse>;
  /** {@link CreateQueue 创建队列接口}({@link CreateQueueRequest 请求参数}): {@link CreateQueueResponse 返回参数} */
  CreateQueue(data: CreateQueueRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQueueResponse>;
  /** {@link CreateSubscribe 创建订阅接口}({@link CreateSubscribeRequest 请求参数}): {@link CreateSubscribeResponse 返回参数} */
  CreateSubscribe(data: CreateSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubscribeResponse>;
  /** {@link CreateTopic 创建主题}({@link CreateTopicRequest 请求参数}): {@link CreateTopicResponse 返回参数} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** {@link DeleteQueue 删除队列}({@link DeleteQueueRequest 请求参数}): {@link DeleteQueueResponse 返回参数} */
  DeleteQueue(data: DeleteQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQueueResponse>;
  /** {@link DeleteSubscribe 删除订阅}({@link DeleteSubscribeRequest 请求参数}): {@link DeleteSubscribeResponse 返回参数} */
  DeleteSubscribe(data: DeleteSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSubscribeResponse>;
  /** {@link DeleteTopic 删除主题}({@link DeleteTopicRequest 请求参数}): {@link DeleteTopicResponse 返回参数} */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** {@link DescribeDeadLetterSourceQueues 枚举死信队列源队列}({@link DescribeDeadLetterSourceQueuesRequest 请求参数}): {@link DescribeDeadLetterSourceQueuesResponse 返回参数} */
  DescribeDeadLetterSourceQueues(data: DescribeDeadLetterSourceQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeadLetterSourceQueuesResponse>;
  /** {@link DescribeQueueDetail 枚举队列}({@link DescribeQueueDetailRequest 请求参数}): {@link DescribeQueueDetailResponse 返回参数} */
  DescribeQueueDetail(data?: DescribeQueueDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQueueDetailResponse>;
  /** {@link DescribeSubscriptionDetail 查询订阅详情}({@link DescribeSubscriptionDetailRequest 请求参数}): {@link DescribeSubscriptionDetailResponse 返回参数} */
  DescribeSubscriptionDetail(data: DescribeSubscriptionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscriptionDetailResponse>;
  /** {@link DescribeTopicDetail 查询主题详情}({@link DescribeTopicDetailRequest 请求参数}): {@link DescribeTopicDetailResponse 返回参数} */
  DescribeTopicDetail(data?: DescribeTopicDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicDetailResponse>;
  /** {@link ModifyQueueAttribute 修改队列属性}({@link ModifyQueueAttributeRequest 请求参数}): {@link ModifyQueueAttributeResponse 返回参数} */
  ModifyQueueAttribute(data: ModifyQueueAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQueueAttributeResponse>;
  /** {@link ModifySubscriptionAttribute 修改订阅属性}({@link ModifySubscriptionAttributeRequest 请求参数}): {@link ModifySubscriptionAttributeResponse 返回参数} */
  ModifySubscriptionAttribute(data: ModifySubscriptionAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscriptionAttributeResponse>;
  /** {@link ModifyTopicAttribute 修改主题属性}({@link ModifyTopicAttributeRequest 请求参数}): {@link ModifyTopicAttributeResponse 返回参数} */
  ModifyTopicAttribute(data: ModifyTopicAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicAttributeResponse>;
  /** {@link RewindQueue 回溯队列}({@link RewindQueueRequest 请求参数}): {@link RewindQueueResponse 返回参数} */
  RewindQueue(data: RewindQueueRequest, config?: AxiosRequestConfig): AxiosPromise<RewindQueueResponse>;
  /** {@link UnbindDeadLetter 解绑死信队列}({@link UnbindDeadLetterRequest 请求参数}): {@link UnbindDeadLetterResponse 返回参数} */
  UnbindDeadLetter(data: UnbindDeadLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindDeadLetterResponse>;
}

export declare type Versions = ["2019-03-04"];

export default Cmq;
