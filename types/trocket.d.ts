/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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

/** {@link Trocket 消息队列 RocketMQ 版} */
declare interface Trocket {
  (): Versions;
  /** 获取实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 查询主题列表 {@link DescribeTopicListRequest} {@link DescribeTopicListResponse} */
  DescribeTopicList(data: DescribeTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicListResponse>;
}

export declare type Versions = ["2023-03-08"];

export default Trocket;
