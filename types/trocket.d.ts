/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 接入点信息 */
declare interface Endpoint {
  /** 接入点类型，VPC，PUBLIC 公网 */
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
}

/** 查询过滤器 */
declare interface Filter {
  /** 过滤条件名 */
  Name: string;
  /** 过滤条件的值 */
  Values: string[];
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

/** 列表上的主题信息 */
declare interface TopicItem {
  /** 实例ID */
  InstanceId?: string;
  /** 主题名称 */
  Topic?: string;
  /** 主题类型 */
  TopicType?: string;
  /** 队列数量 */
  QueueNum?: number;
  /** 描述 */
  Remark?: string | null;
}

/** VPC信息 */
declare interface VpcInfo {
  /** VPC ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
}

declare interface CreateInstanceRequest {
  /** 实例类型，EXPERIMENT 体验版BASIC 基础版PRO 专业版PLATINUM 铂金版 */
  InstanceType: string;
  /** 实例名称 */
  Name: string;
  /** 商品规格，可用规格如下：experiment_500,basic_1k,basic_2k,basic_4k,basic_6k */
  SkuCode: string;
  /** 备注信息 */
  Remark?: string;
  /** 标签列表 */
  TagList?: Tag[];
  /** 实例绑定的VPC信息 */
  VpcList?: VpcInfo[];
  /** 是否开启公网 */
  EnablePublic?: boolean;
  /** 公网带宽 */
  Bandwidth?: number;
  /** 公网访问白名单 */
  IpRules?: IpRule[];
  /** 消息保留时长，小时为单位 */
  MessageRetention?: number;
}

declare interface CreateInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DeleteInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 查询起始位置 */
  Offset: number;
  /** 查询结果限制数量 */
  Limit: number;
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 标签过滤器 */
  TagFilters?: TagFilter[];
}

declare interface DescribeInstanceListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 实例列表 */
  Data?: InstanceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceResponse {
  /** 实例类型，EXPERIMENT 体验版BASIC 基础版PRO 专业版PLATINUM 铂金版 */
  InstanceType?: string | null;
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicListRequest {
  /** 实例ID */
  InstanceId: string;
  /** 查询起始位置 */
  Offset: number;
  /** 查询结果限制数量 */
  Limit: number;
  /** 查询条件列表 */
  Filters?: Filter[];
}

declare interface DescribeTopicListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 主题列表 */
  Data?: TopicItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 实例ID */
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
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Trocket 消息队列 RocketMQ 版} */
declare interface Trocket {
  (): Versions;
  /** 购买实例 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 删除实例 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 查询实例信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 查询主题列表 {@link DescribeTopicListRequest} {@link DescribeTopicListResponse} */
  DescribeTopicList(data: DescribeTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicListResponse>;
  /** 修改实例属性 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
}

export declare type Versions = ["2023-03-08"];

export default Trocket;
