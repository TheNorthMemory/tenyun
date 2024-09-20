/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 查询过滤器 */
declare interface Filter {
  /** 过滤条件名 */
  Name: string;
  /** 过滤条件的值 */
  Values: string[];
}

/** MQTT 实例信息 */
declare interface MQTTInstanceItem {
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
  /** 单客户端最大订阅数量 */
  MaxSubscriptionPerClient?: number | null;
  /** 客户端连接数上线 */
  ClientNumLimit?: number | null;
  /** 是否自动续费 */
  RenewFlag?: number | null;
  /** 计费模式， POSTPAID，按量计费 PREPAID，包年包月 */
  PayMode?: string | null;
  /** 到期时间，秒为单位 */
  ExpiryTime?: number | null;
  /** 预销毁时间 */
  DestroyTime?: number | null;
  /** 授权规则条数限制 */
  AuthorizationPolicyLimit?: number | null;
  /** 最大ca配额 */
  MaxCaNum?: number | null;
  /** 最大订阅数 */
  MaxSubscription?: number | null;
}

/** 标签过滤器 */
declare interface TagFilter {
  /** 标签键名称 */
  TagKey?: string;
  /** 标签键名称 */
  TagValues?: string[];
}

declare interface DescribeInstanceListRequest {
  /** 查询条件列表 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
  /** 标签过滤器 */
  TagFilters?: TagFilter[];
}

declare interface DescribeInstanceListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 实例列表 */
  Data?: MQTTInstanceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 实例ID */
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
  /** 单客户端最大订阅数 */
  MaxSubscriptionPerClient?: number;
  /** 授权规则条数 */
  AuthorizationPolicyLimit?: number;
  /** 客户端数量上限 */
  ClientNumLimit?: number;
  /** 客户端证书注册方式：JITP，API */
  DeviceCertificateProvisionType?: string;
  /** 自动注册设备证书时是否自动激活 */
  AutomaticActivation?: boolean;
  /** 是否自动续费 */
  RenewFlag?: number;
  /** 计费模式， POSTPAID，按量计费 PREPAID，包年包月 */
  PayMode?: string;
  /** 到期时间，秒为单位 */
  ExpiryTime?: number;
  /** 预销毁时间 */
  DestroyTime?: number;
  /** TLS,单向认证 mTLS,双向认证 BYOC;一机一证 */
  X509Mode?: string;
  /** 最大Ca配额 */
  MaxCaNum?: number;
  /** 证书注册码 */
  RegistrationCode?: string;
  /** 集群最大订阅数 */
  MaxSubscription?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mqtt 消息队列 MQTT 版} */
declare interface Mqtt {
  (): Versions;
  /** 查询MQTT实例详情信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取MQTT实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data?: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
}

export declare type Versions = ["2024-05-16"];

export default Mqtt;
