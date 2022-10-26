/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** APIGWParams描述 */
declare interface APIGWParams {
  /** HTTPS */
  Protocol: string;
  /** POST */
  Method: string;
}

/** 用来描述需要投递到kafka topic的参数 */
declare interface CkafkaDeliveryParams {
  /** ckafka topic name */
  TopicName: string;
  /** ckafka资源qcs六段式 */
  ResourceDescription: string;
}

/** Ckafka 连接器参数 */
declare interface CkafkaParams {
  /** kafka offset */
  Offset: string;
  /** ckafka topic */
  TopicName: string;
}

/** 用来描述ckafka投递目标 */
declare interface CkafkaTargetParams {
  /** 要投递到的ckafka topic */
  TopicName: string;
  /** 重试策略 */
  RetryPolicy: RetryPolicy;
}

/** Connection信息 */
declare interface Connection {
  /** 状态 */
  Status: string;
  /** 更新时间 */
  ModTime: string;
  /** 使能开关 */
  Enable: boolean;
  /** 描述 */
  Description: string;
  /** 创建时间 */
  AddTime: string;
  /** 连接器ID */
  ConnectionId: string;
  /** 事件集ID */
  EventBusId: string;
  /** 连接器描述 */
  ConnectionDescription: ConnectionDescription;
  /** 连接器名称 */
  ConnectionName: string;
  /** 类型 */
  Type: string;
}

/** ConnectionDescription描述 */
declare interface ConnectionDescription {
  /** 资源qcs六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606) */
  ResourceDescription: string;
  /** apigw参数 */
  APIGWParams?: APIGWParams | null;
  /** ckafka参数 */
  CkafkaParams?: CkafkaParams | null;
}

/** rule对应的dlq配置 */
declare interface DeadLetterConfig {
  /** 支持dlq、丢弃、忽略错误继续传递三种模式, 分别对应: DLQ,DROP,IGNORE_ERROR */
  DisposeMethod: string;
  /** 设置了DLQ方式后,此选项必填. 错误消息会被投递到对应的kafka topic中 */
  CkafkaDeliveryParams?: CkafkaDeliveryParams | null;
}

/** 描述Es规则目标 */
declare interface ESTargetParams {
  /** 网络连接类型 */
  NetMode: string;
  /** 索引前缀 */
  IndexPrefix: string;
  /** es日志轮换粒度 */
  RotationInterval: string;
  /** DTS事件配置 */
  OutputMode: string;
  /** DTS索引配置 */
  IndexSuffixMode: string;
  /** es模版类型 */
  IndexTemplateType?: string;
}

/** 描述如何过滤数据 */
declare interface EtlFilter {
  /** 语法Rule规则保持一致 */
  Filter: string;
}

/** eb event信息 */
declare interface Event {
  /** 事件源的信息,新产品上报必须符合EB的规范 */
  Source: string;
  /** 事件数据，内容由创建事件的系统来控制，当前datacontenttype仅支持application/json;charset=utf-8，所以该字段是json字符串 */
  Data: string;
  /** 事件类型，可自定义，选填。云服务默认写 COS:Created:PostObject，用“：”分割类型字段 */
  Type: string;
  /** 事件来源详细描述，可自定义，选填。云服务默认为标准qcs资源表示语法：qcs::dts:ap-guangzhou:appid/uin:xxx */
  Subject: string;
  /** 事件发生的毫秒时间戳，time.Now().UnixNano()/1e6 */
  Time?: number;
}

/** 事件集信息 */
declare interface EventBus {
  /** 更新时间 */
  ModTime: string;
  /** 事件集描述，不限字符类型，200字符描述以内 */
  Description: string;
  /** 创建时间 */
  AddTime: string;
  /** 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符 */
  EventBusName: string;
  /** 事件集ID */
  EventBusId: string;
  /** 事件集类型 */
  Type: string;
}

/** 描述如何提取数据 */
declare interface Extraction {
  /** JsonPath, 不指定则使用默认值$. */
  ExtractionInputPath: string;
  /** 取值: TEXT/JSON */
  Format: string;
  /** 仅在Text需要传递 */
  TextParams?: TextParams | null;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 过滤键的名称。 */
  Name: string;
}

/** Transform输出参数 */
declare interface OutputStructParam {
  /** 对应输出json中的key */
  Key: string;
  /** 可以填json-path也可以支持常量或者内置关键字date类型 */
  Value: string;
  /** value的数据类型, 可选值: STRING, NUMBER,BOOLEAN,NULL,SYS_VARIABLE,JSONPATH */
  ValueType: string;
}

/** 用来描述一个ckafka投递目标的重试策略 */
declare interface RetryPolicy {
  /** 重试间隔 单位:秒 */
  RetryInterval: number;
  /** 最大重试次数 */
  MaxRetryAttempts: number;
}

/** 规则信息 */
declare interface Rule {
  /** 状态 */
  Status: string;
  /** 修改时间 */
  ModTime: string;
  /** 使能开关 */
  Enable: boolean;
  /** 描述 */
  Description: string;
  /** 规则ID */
  RuleId: string;
  /** 创建时间 */
  AddTime: string;
  /** 事件集ID */
  EventBusId: string;
  /** 规则名称 */
  RuleName: string;
  /** Target 简要信息 */
  Targets: TargetBrief[] | null;
  /** rule设置的dlq规则. 可能为null */
  DeadLetterConfig: DeadLetterConfig | null;
}

/** 云函数参数 */
declare interface SCFParams {
  /** 批量投递最长等待时间 */
  BatchTimeout?: number;
  /** 批量投递最大事件条数 */
  BatchEventCount?: number;
  /** 开启批量投递使能 */
  EnableBatchDelivery?: boolean;
}

/** Target信息 */
declare interface Target {
  /** 目标类型 */
  Type: string;
  /** 事件集ID */
  EventBusId: string;
  /** 目标ID */
  TargetId: string;
  /** 目标描述 */
  TargetDescription: TargetDescription;
  /** 事件规则ID */
  RuleId: string;
  /** 开启批量投递使能 */
  EnableBatchDelivery: boolean | null;
  /** 批量投递最长等待时间 */
  BatchTimeout: number | null;
  /** 批量投递最大事件条数 */
  BatchEventCount: number | null;
}

/** 目标简要信息 */
declare interface TargetBrief {
  /** 目标ID */
  TargetId: string;
  /** 目标类型 */
  Type: string;
}

/** TargetDescription描述 */
declare interface TargetDescription {
  /** QCS资源六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606) */
  ResourceDescription: string;
  /** 云函数参数 */
  SCFParams?: SCFParams;
  /** Ckafka参数 */
  CkafkaTargetParams?: CkafkaTargetParams;
  /** ElasticSearch参数 */
  ESTargetParams?: ESTargetParams;
}

/** 描述如何切分数据 */
declare interface TextParams {
  /** 逗号、| 、制表符、空格、换行符、%、#，限制长度为 1。 */
  Separator?: string | null;
  /** 填写正则表达式：长度128 */
  Regex?: string | null;
}

/** 描述如何数据转换 */
declare interface Transform {
  /** 描述如何数据转换 */
  OutputStructs: OutputStructParam[];
}

/** 一个转换器 */
declare interface Transformation {
  /** 描述如何提取数据 */
  Extraction?: Extraction | null;
  /** 描述如何过滤数据 */
  EtlFilter?: EtlFilter | null;
  /** 描述如何数据转换 */
  Transform?: Transform | null;
}

declare interface CheckRuleRequest {
}

declare interface CheckRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckTransformationRequest {
  /** 待处理的json字符串 */
  Input: string;
  /** 一个转换规则列表 */
  Transformations: Transformation[];
}

declare interface CheckTransformationResponse {
  /** 经过Transformations处理之后的数据 */
  Output: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateConnectionRequest {
  /** 连接器描述 */
  ConnectionDescription: ConnectionDescription;
  /** 事件集ID */
  EventBusId: string;
  /** 连接器名称 */
  ConnectionName: string;
  /** 描述 */
  Description?: string;
  /** 使能开关 */
  Enable?: boolean;
  /** 类型 */
  Type?: string;
}

declare interface CreateConnectionResponse {
  /** 连接器ID */
  ConnectionId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEventBusRequest {
  /** 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符 */
  EventBusName: string;
  /** 事件集描述，不限字符类型，200字符描述以内 */
  Description?: string;
}

declare interface CreateEventBusResponse {
  /** 事件集ID */
  EventBusId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRuleRequest {
  /** 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084) */
  EventPattern: string;
  /** 事件集ID。 */
  EventBusId: string;
  /** 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符 */
  RuleName: string;
  /** 使能开关。 */
  Enable?: boolean;
  /** 事件集描述，不限字符类型，200字符描述以内 */
  Description?: string;
}

declare interface CreateRuleResponse {
  /** 事件规则ID */
  RuleId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTargetRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 目标类型 */
  Type: string;
  /** 目标描述 */
  TargetDescription: TargetDescription;
  /** 事件规则ID */
  RuleId: string;
}

declare interface CreateTargetResponse {
  /** 目标ID */
  TargetId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTransformationRequest {
  /** 事件总线 id */
  EventBusId: string;
  /** 规则id */
  RuleId: string;
  /** 一个转换规则列表，当前仅限定一个 */
  Transformations: Transformation[];
}

declare interface CreateTransformationResponse {
  /** 生成的转换器id */
  TransformationId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteConnectionRequest {
  /** 连接器ID */
  ConnectionId: string;
  /** 事件集ID */
  EventBusId: string;
}

declare interface DeleteConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEventBusRequest {
  /** 事件集ID */
  EventBusId: string;
}

declare interface DeleteEventBusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRuleRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 事件规则ID */
  RuleId: string;
}

declare interface DeleteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTargetRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 事件目标ID */
  TargetId: string;
  /** 事件规则ID */
  RuleId: string;
}

declare interface DeleteTargetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTransformationRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 规则ID */
  RuleId: string;
  /** 转换器id */
  TransformationId: string;
}

declare interface DeleteTransformationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetEventBusRequest {
  /** 事件集ID */
  EventBusId: string;
}

declare interface GetEventBusResponse {
  /** 更新时间 */
  ModTime: string;
  /** 事件集描述 */
  Description: string;
  /** 日志主题ID */
  ClsTopicId: string;
  /** 创建时间 */
  AddTime: string;
  /** 日志集ID */
  ClsLogsetId: string;
  /** 事件集名称 */
  EventBusName: string;
  /** 事件集ID */
  EventBusId: string;
  /** （已废弃）事件集类型 */
  Type: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRuleRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 事件规则ID */
  RuleId: string;
}

declare interface GetRuleResponse {
  /** 事件集id */
  EventBusId: string;
  /** 事件规则id */
  RuleId: string;
  /** 事件规则名称 */
  RuleName: string;
  /** 事件规则状态 */
  Status: string;
  /** 使能开关 */
  Enable: boolean;
  /** 事件规则描述 */
  Description: string;
  /** 事件模式 */
  EventPattern: string;
  /** 创建时间 */
  AddTime: string;
  /** 更新时间 */
  ModTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTransformationRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 规则ID */
  RuleId: string;
  /** 转换器id */
  TransformationId: string;
}

declare interface GetTransformationResponse {
  /** 转换规则列表 */
  Transformations: Transformation[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListConnectionsRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 根据哪个字段进行返回结果排序，目前支持如下以下字段：AddTime, ModTime */
  OrderBy?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 以升序还是降序的方式返回结果，可选值 ASC 和 DESC */
  Order?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface ListConnectionsResponse {
  /** 连接器信息 */
  Connections: Connection[];
  /** 连接器总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListEventBusesRequest {
  /** 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间） */
  OrderBy?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序） */
  Order?: string;
  /** 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页偏移量，默认为0。 */
  Offset?: number;
}

declare interface ListEventBusesResponse {
  /** 事件集信息 */
  EventBuses: EventBus[];
  /** 事件集总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListRulesRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间） */
  OrderBy?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 分页偏移量，默认为0。 */
  Offset?: number;
  /** 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序） */
  Order?: string;
}

declare interface ListRulesResponse {
  /** 事件规则信息 */
  Rules: Rule[];
  /** 事件规则总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListTargetsRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间） */
  OrderBy?: string;
  /** 事件规则ID */
  RuleId?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 分页偏移量，默认为0。 */
  Offset?: number;
  /** 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序） */
  Order?: string;
}

declare interface ListTargetsResponse {
  /** 目标总数 */
  TotalCount: number;
  /** 目标信息 */
  Targets: Target[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PublishEventRequest {
  /** 事件列表 */
  EventList: Event[];
  /** 事件集ID */
  EventBusId: string;
}

declare interface PublishEventResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PutEventsRequest {
  /** 事件列表 */
  EventList: Event[];
  /** 事件集ID */
  EventBusId: string;
}

declare interface PutEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateConnectionRequest {
  /** 连接器ID */
  ConnectionId: string;
  /** 事件集ID */
  EventBusId: string;
  /** 使能开关 */
  Enable?: boolean;
  /** 描述 */
  Description?: string;
  /** 连接器名称 */
  ConnectionName?: string;
}

declare interface UpdateConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateEventBusRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 事件集描述，不限字符类型，200字符描述以内 */
  Description?: string;
  /** 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符 */
  EventBusName?: string;
}

declare interface UpdateEventBusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateRuleRequest {
  /** 事件规则ID */
  RuleId: string;
  /** 事件集ID */
  EventBusId: string;
  /** 使能开关。 */
  Enable?: boolean;
  /** 规则描述，不限字符类型，200字符描述以内。 */
  Description?: string;
  /** 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084) */
  EventPattern?: string;
  /** 事件规则名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符 */
  RuleName?: string;
}

declare interface UpdateRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateTargetRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 事件规则ID */
  RuleId: string;
  /** 事件目标ID */
  TargetId: string;
  /** 开启批量投递使能 */
  EnableBatchDelivery?: boolean;
  /** 批量投递最长等待时间 */
  BatchTimeout?: number;
  /** 批量投递最大事件条数 */
  BatchEventCount?: number;
}

declare interface UpdateTargetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateTransformationRequest {
  /** 事件集ID */
  EventBusId: string;
  /** 规则ID */
  RuleId: string;
  /** 转换器id */
  TransformationId: string;
  /** 一个转换规则列表，当前仅限定一个 */
  Transformations: Transformation[];
}

declare interface UpdateTransformationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [事件总线](https://cloud.tencent.com/document/product/1359) */
declare interface Eb {
  (): Versions;
  /** 检验规则 */
  CheckRule(data?: CheckRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRuleResponse>;
  /** 检查转换器 */
  CheckTransformation(data: CheckTransformationRequest, config?: AxiosRequestConfig): AxiosPromise<CheckTransformationResponse>;
  /** 创建事件连接器 */
  CreateConnection(data: CreateConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConnectionResponse>;
  /** 创建事件集 */
  CreateEventBus(data: CreateEventBusRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEventBusResponse>;
  /** 创建事件规则 */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建事件目标 */
  CreateTarget(data: CreateTargetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTargetResponse>;
  /** 创建转换器 */
  CreateTransformation(data: CreateTransformationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTransformationResponse>;
  /** 删除事件连接器 */
  DeleteConnection(data: DeleteConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConnectionResponse>;
  /** 删除事件集 */
  DeleteEventBus(data: DeleteEventBusRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEventBusResponse>;
  /** 删除事件规则 */
  DeleteRule(data: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 删除事件目标 */
  DeleteTarget(data: DeleteTargetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTargetResponse>;
  /** 删除转换器 */
  DeleteTransformation(data: DeleteTransformationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTransformationResponse>;
  /** 获取事件集详情 */
  GetEventBus(data: GetEventBusRequest, config?: AxiosRequestConfig): AxiosPromise<GetEventBusResponse>;
  /** 获取事件规则详情 */
  GetRule(data: GetRuleRequest, config?: AxiosRequestConfig): AxiosPromise<GetRuleResponse>;
  /** 获取转换器详情 */
  GetTransformation(data: GetTransformationRequest, config?: AxiosRequestConfig): AxiosPromise<GetTransformationResponse>;
  /** 获取事件连接器列表 */
  ListConnections(data: ListConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<ListConnectionsResponse>;
  /** 获取事件集列表 */
  ListEventBuses(data?: ListEventBusesRequest, config?: AxiosRequestConfig): AxiosPromise<ListEventBusesResponse>;
  /** 获取事件规则列表 */
  ListRules(data: ListRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ListRulesResponse>;
  /** 获取事件目标列表 */
  ListTargets(data: ListTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<ListTargetsResponse>;
  /** Event事件投递 */
  PublishEvent(data: PublishEventRequest, config?: AxiosRequestConfig): AxiosPromise<PublishEventResponse>;
  /** 事件投递 */
  PutEvents(data: PutEventsRequest, config?: AxiosRequestConfig): AxiosPromise<PutEventsResponse>;
  /** 更新事件连接器 */
  UpdateConnection(data: UpdateConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConnectionResponse>;
  /** 更新事件集 */
  UpdateEventBus(data: UpdateEventBusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEventBusResponse>;
  /** 更新事件规则 */
  UpdateRule(data: UpdateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRuleResponse>;
  /** 更新事件目标 */
  UpdateTarget(data: UpdateTargetRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTargetResponse>;
  /** 更新转换器 */
  UpdateTransformation(data: UpdateTransformationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTransformationResponse>;
}

export declare type Versions = ["2021-04-16"];

export default Eb;
