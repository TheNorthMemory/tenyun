/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AuthorizationPolicyItem */
declare interface AuthorizationPolicyItem {
  /** 规则id */
  Id?: number;
  /** 集群id */
  InstanceId?: string;
  /** 规则名 */
  PolicyName?: string | null;
  /** 规则语法版本 */
  Version?: number | null;
  /** 越小越优先 */
  Priority?: number | null;
  /** allow/deny */
  Effect?: string | null;
  /** connect、pub、sub */
  Actions?: string | null;
  /** 资源 */
  Resources?: string | null;
  /** client */
  ClientId?: string | null;
  /** 用户 */
  Username?: string | null;
  /** IP地址 */
  Ip?: string | null;
  /** 0，1，2 */
  Qos?: string | null;
  /** 1：表示匹配retain消息2：表示匹配非retain消息3：表示匹配retain和非retain消息 */
  Retain?: number | null;
  /** 描述 */
  Remark?: string | null;
  /** 1713164969433 */
  CreatedTime?: number;
  /** 1713164969433 */
  UpdateTime?: number;
}

/** 策略规则优先级 */
declare interface AuthorizationPolicyPriority {
  /** 策略id */
  Id: number | null;
  /** 优先级 */
  Priority: number | null;
}

/** 查询过滤器 */
declare interface Filter {
  /** 过滤条件名 */
  Name: string;
  /** 过滤条件的值 */
  Values: string[];
}

/** MQTT认证器信息 */
declare interface MQTTAuthenticatorItem {
  /** 认证器类型: JWT：JWT认证器 JWKS：JWKS认证器 BYOC：一端一证认证器 */
  Type?: string | null;
  /** 认证器配置 */
  Config?: string | null;
  /** 认证器状态 */
  Status?: string | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 说明 */
  Remark?: string | null;
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

/** MQTT 主题详情 */
declare interface MQTTTopicItem {
  /** 实例 ID */
  InstanceId?: string;
  /** 主题名称 */
  Topic?: string;
  /** 主题描述 */
  Remark?: string | null;
}

/** 标签过滤器 */
declare interface TagFilter {
  /** 标签键名称 */
  TagKey?: string;
  /** 标签键名称 */
  TagValues?: string[];
}

declare interface CreateAuthorizationPolicyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 策略名称 */
  PolicyName: string;
  /** 策略版本 */
  PolicyVersion: number;
  /** 策略优先级，越小越优先 */
  Priority: number;
  /** allow、deny */
  Effect: string;
  /** connect、pub、sub */
  Actions: string;
  /** 1,匹配保留消息；2,匹配非保留消息，3.匹配所有消息 */
  Retain: number;
  /** 0、1、2 */
  Qos: string;
  /** 资源 */
  Resources?: string;
  /** 用户名 */
  Username?: string;
  /** 客户端 */
  ClientId?: string;
  /** ip */
  Ip?: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface CreateAuthorizationPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateJWKSAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** jwks端点 */
  Endpoint?: string;
  /** jwks刷新间隔,单位：秒 */
  RefreshInterval?: number;
  /** jwks文本 */
  Text?: string;
  /** 认证器是否开启：open-启用；close-关闭 */
  Status?: string;
  /** 说明 */
  Remark?: string;
  /** 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递 */
  From?: string;
}

declare interface CreateJWKSAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateJWTAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** 算法：hmac-based，public-key */
  Algorithm: string;
  /** 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递 */
  From: string;
  /** 密码 */
  Secret?: string;
  /** 公钥 */
  PublicKey?: string;
  /** 认证器是否开启：open-启用；close-关闭 */
  Status?: string;
  /** 说明 */
  Remark?: string;
}

declare interface CreateJWTAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 实例ID */
  InstanceId: string;
  /** 主题 */
  Topic: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateTopicResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 主题 */
  Topic?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** 认证器类型 */
  Type: string;
}

declare interface DeleteAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuthorizationPolicyRequest {
  /** 实例ID */
  InstanceId: string;
  /** 策略规则id */
  Id: number;
}

declare interface DeleteAuthorizationPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicRequest {
  /** 实例ID */
  InstanceId: string;
  /** 主题 */
  Topic: string;
}

declare interface DeleteTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** 认证器类型 */
  Type?: string;
}

declare interface DescribeAuthenticatorResponse {
  /** 集群认证器列表 */
  Authenticators?: MQTTAuthenticatorItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthorizationPoliciesRequest {
  /** 集群ID */
  InstanceId?: string;
}

declare interface DescribeAuthorizationPoliciesResponse {
  /** 规则 */
  Data?: AuthorizationPolicyItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface DescribeTopicListRequest {
  /** 实例ID */
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
  TotalCount?: number | null;
  /** 主题列表 */
  Data?: MQTTTopicItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicRequest {
  /** 实例ID */
  InstanceId: string;
  /** 主题 */
  Topic: string;
}

declare interface DescribeTopicResponse {
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

declare interface ModifyAuthorizationPolicyRequest {
  /** 策略 */
  Id: number;
  /** 实例ID */
  InstanceId: string;
  /** 策略名称 */
  PolicyName?: string;
  /** 策略版本 */
  PolicyVersion?: number;
  /** 策略优先级，越小越优先 */
  Priority?: number;
  /** allow、deny */
  Effect?: string;
  /** connect、pub、sub */
  Actions?: string;
  /** 资源 */
  Resources?: string;
  /** 用户名 */
  Username?: string;
  /** 1.匹配保留消息；2.匹配非保留消息；3.匹配所有消息 */
  Retain?: number;
  /** 客户端 */
  ClientId?: string;
  /** ip */
  Ip?: string;
  /** 0、1、2 */
  Qos?: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface ModifyAuthorizationPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyJWKSAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** 端点 */
  Endpoint?: string;
  /** 认证器状态：open-启用；close-关闭 */
  Status?: string;
  /** 刷新时间 */
  RefreshInterval?: number;
  /** JSKS文本 */
  Text?: string;
  /** 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递 */
  From?: string;
  /** 说明 */
  Remark?: string;
}

declare interface ModifyJWKSAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyJWTAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** 算法：hmac-based，public-key */
  Algorithm?: string;
  /** 设备连接时传递jwt的key；username-使用用户名字段传递；password-使用密码字段传递 */
  From?: string;
  /** 密码 */
  Secret?: string;
  /** 公钥 */
  PublicKey?: string;
  /** JSKS文本 */
  Text?: string;
  /** 说明 */
  Remark?: string;
}

declare interface ModifyJWTAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicRequest {
  /** 实例ID */
  InstanceId: string;
  /** 主题 */
  Topic: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface ModifyTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterDeviceCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 设备证书 */
  DeviceCertificate: string;
  /** 关联的CA证书SN */
  CaSn: string;
  /** 客户端ID */
  ClientId?: string;
  /** 证书格式 */
  Format?: string;
  /** ACTIVE,//激活 INACTIVE,//未激活 REVOKED,//吊销 PENDING_ACTIVATION,//注册待激活 */
  Status?: string;
}

declare interface RegisterDeviceCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAuthorizationPolicyPriorityRequest {
  /** 实例ID */
  InstanceId: string;
  /** 策略ID和优先级 */
  Priorities?: AuthorizationPolicyPriority[];
}

declare interface UpdateAuthorizationPolicyPriorityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mqtt 消息队列 MQTT 版} */
declare interface Mqtt {
  (): Versions;
  /** 创建授权策略 {@link CreateAuthorizationPolicyRequest} {@link CreateAuthorizationPolicyResponse} */
  CreateAuthorizationPolicy(data: CreateAuthorizationPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuthorizationPolicyResponse>;
  /** 创建一个MQTTJWKS认证器 {@link CreateJWKSAuthenticatorRequest} {@link CreateJWKSAuthenticatorResponse} */
  CreateJWKSAuthenticator(data: CreateJWKSAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJWKSAuthenticatorResponse>;
  /** 创建一个MQTTJWT认证器 {@link CreateJWTAuthenticatorRequest} {@link CreateJWTAuthenticatorResponse} */
  CreateJWTAuthenticator(data: CreateJWTAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJWTAuthenticatorResponse>;
  /** 创建MQTT主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 删除一个MQTT认证器 {@link DeleteAuthenticatorRequest} {@link DeleteAuthenticatorResponse} */
  DeleteAuthenticator(data: DeleteAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuthenticatorResponse>;
  /** 删除授权策略 {@link DeleteAuthorizationPolicyRequest} {@link DeleteAuthorizationPolicyResponse} */
  DeleteAuthorizationPolicy(data: DeleteAuthorizationPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuthorizationPolicyResponse>;
  /** 删除MQTT主题 {@link DeleteTopicRequest} {@link DeleteTopicResponse} */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** 查询MQTT认证器 {@link DescribeAuthenticatorRequest} {@link DescribeAuthenticatorResponse} */
  DescribeAuthenticator(data: DescribeAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthenticatorResponse>;
  /** 查询授权策略 {@link DescribeAuthorizationPoliciesRequest} {@link DescribeAuthorizationPoliciesResponse} */
  DescribeAuthorizationPolicies(data?: DescribeAuthorizationPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthorizationPoliciesResponse>;
  /** 查询MQTT实例详情信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取MQTT实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data?: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 查询MQTT主题详情 {@link DescribeTopicRequest} {@link DescribeTopicResponse} */
  DescribeTopic(data: DescribeTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicResponse>;
  /** 查询MQTT主题列表 {@link DescribeTopicListRequest} {@link DescribeTopicListResponse} */
  DescribeTopicList(data: DescribeTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicListResponse>;
  /** 修改授权策略 {@link ModifyAuthorizationPolicyRequest} {@link ModifyAuthorizationPolicyResponse} */
  ModifyAuthorizationPolicy(data: ModifyAuthorizationPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuthorizationPolicyResponse>;
  /** 修改MQTTJWKS认证器 {@link ModifyJWKSAuthenticatorRequest} {@link ModifyJWKSAuthenticatorResponse} */
  ModifyJWKSAuthenticator(data: ModifyJWKSAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJWKSAuthenticatorResponse>;
  /** 修改MQTTJWT认证器 {@link ModifyJWTAuthenticatorRequest} {@link ModifyJWTAuthenticatorResponse} */
  ModifyJWTAuthenticator(data: ModifyJWTAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJWTAuthenticatorResponse>;
  /** 修改MQTT主题属性 {@link ModifyTopicRequest} {@link ModifyTopicResponse} */
  ModifyTopic(data: ModifyTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicResponse>;
  /** 注册设备证书 {@link RegisterDeviceCertificateRequest} {@link RegisterDeviceCertificateResponse} */
  RegisterDeviceCertificate(data: RegisterDeviceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterDeviceCertificateResponse>;
  /** 更新授权策略优先级 {@link UpdateAuthorizationPolicyPriorityRequest} {@link UpdateAuthorizationPolicyPriorityResponse} */
  UpdateAuthorizationPolicyPriority(data: UpdateAuthorizationPolicyPriorityRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAuthorizationPolicyPriorityResponse>;
}

export declare type Versions = ["2024-05-16"];

export default Mqtt;
