/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AuthorizationPolicyItem */
declare interface AuthorizationPolicyItem {
  /** 规则ID */
  Id?: number;
  /** 集群ID */
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

/** CA证书信息 */
declare interface CaCertificateItem {
  /** common name */
  CaCn?: string;
  /** 证书内容 */
  CaCertificate?: string;
  /** 证书序列号 */
  CaSn?: string;
  /** 证书格式 */
  Format?: string;
  /** 验证证书内容 */
  VerificationCertificate?: string;
  /** ca状态 */
  Status?: string | null;
  /** 上次激活时间 */
  LastActivationTime?: number | null;
  /** 创建时间 */
  CreatedTime?: number | null;
  /** 预销毁时间 */
  UpdateTime?: number | null;
  /** 上次去激活时间 */
  LastInactivationTime?: number | null;
  /** Ca证书颁发者CN */
  CaIssuerCn?: string | null;
  /** 生效时间 */
  NotBeforeTime?: number | null;
  /** 失效时间 */
  NotAfterTime?: number | null;
}

/** 设备证书信息 */
declare interface DeviceCertificateItem {
  /** 客户端id */
  ClientId?: string | null;
  /** 设备证书 */
  DeviceCertificate?: string;
  /** 设备证书Sn */
  DeviceCertificateSn?: string;
  /** 设备证书Cn */
  DeviceCertificateCn?: string;
  /** 签发ca的序列号 */
  CaSn?: string;
  /** 证书格式 */
  Format?: string;
  /** 证书状态 ACTIVE,//激活 INACTIVE,//未激活 REVOKED,//吊销 PENDING_ACTIVATION,//注册待激活 */
  Status?: string;
  /** 上次激活时间 */
  LastActivationTime?: number | null;
  /** 上次取消激活时间 */
  LastInactivationTime?: number | null;
  /** 创建时间 */
  CreatedTime?: number;
  /** 预销毁时间 */
  UpdateTime?: number | null;
  /** 证书来源：API, 手动注册 JITP 自动注册 */
  CertificateSource?: string | null;
  /** 证书失效日期 */
  NotAfterTime?: number | null;
  /** 证书生效开始日期 */
  NotBeforeTime?: number | null;
}

/** 查询过滤器 */
declare interface Filter {
  /** 过滤条件名 */
  Name: string;
  /** 过滤条件的值 */
  Values: string[];
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

/** MQTT客户端信息 */
declare interface MQTTClientInfo {
  /** 客户端唯一标识 */
  ClientId?: string | null;
  /** 客户端网络地址 */
  ClientAddress?: string | null;
  /** MQTT 协议版本，4 表示 MQTT 3.1.1 */
  ProtocolVersion?: number | null;
  /** 保持连接时间，单位：秒 */
  Keepalive?: number | null;
  /** 连接状态，CONNECTED 已连接，DISCONNECTED 未连接 */
  ConnectionStatus?: string | null;
  /** 客户端创建时间 */
  CreateTime?: number | null;
  /** 上次建立连接时间 */
  ConnectTime?: number | null;
  /** 上次断开连接时间，仅对持久会话（cleanSession=false）并且客户端当前未连接时有意义 */
  DisconnectTime?: number | null;
  /** 客户端的订阅列表 */
  MQTTClientSubscriptions?: MQTTClientSubscription[] | null;
}

/** MQTT 订阅关系 */
declare interface MQTTClientSubscription {
  /** topic 订阅 */
  TopicFilter?: string;
  /** 服务质量等级 */
  Qos?: number;
  /** 堆积数量 */
  Lag?: number;
  /** 投递未确认数量 */
  Inflight?: number;
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
  /** 备注信息 */
  Remark?: string;
  /** 创建时间，秒为单位 */
  CreatedTime?: number;
  /** 修改时间，秒为单位 */
  ModifiedTime?: number;
}

/** 价格标签信息 */
declare interface PriceTag {
  /** 计价名称 */
  Name?: string;
  /** 计价类别 */
  Category?: string;
  /** 计费项标签 */
  Code?: string;
  /** 步长 */
  Step?: number | null;
}

/** MQTT ProductSkuItem */
declare interface ProductSkuItem {
  /** 规格类型BASIC：基础版PRO ：专业版 */
  InstanceType?: string | null;
  /** 规格代码 */
  SkuCode?: string | null;
  /** 是否售卖 */
  OnSale?: boolean | null;
  /** topic num限制 */
  TopicNumLimit?: number | null;
  /** tps */
  TpsLimit?: number | null;
  /** 客户端连接数 */
  ClientNumLimit?: number | null;
  /** 单客户端最大订阅数 */
  MaxSubscriptionPerClient?: number | null;
  /** 授权规则条数 */
  AuthorizationPolicyLimit?: number | null;
  /** 计费项信息 */
  PriceTags?: PriceTag[] | null;
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
  TagKey?: string;
  /** 标签键名称 */
  TagValues?: string[];
}

/** VPC信息 */
declare interface VpcInfo {
  /** VPC ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
}

declare interface ActivateCaCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 证书序列号 */
  CaSn: string;
}

declare interface ActivateCaCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ActivateDeviceCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 设备证书序列号 */
  DeviceCertificateSn: string;
}

declare interface ActivateDeviceCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyRegistrationCodeRequest {
  /** 集群id */
  InstanceId: string;
}

declare interface ApplyRegistrationCodeResponse {
  /** 集群ID */
  InstanceId?: string;
  /** 注册码 */
  RegistrationCode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  /** IP地址 */
  Ip?: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface CreateAuthorizationPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInsPublicEndpointRequest {
  /** 实例ID */
  InstanceId: string;
  /** 带宽,单位Mbps */
  Bandwidth: number;
  /** 公网访问规则 */
  Rules?: PublicAccessRule[];
}

declare interface CreateInsPublicEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceRequest {
  /** 实例类型，BASIC 基础版PRO 专业版 */
  InstanceType: string;
  /** 实例名称 */
  Name: string;
  /** 商品规格，可用规格可通过接口DescribeProductSKUList查询 */
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
  /** 付费模式（0: 后付费；1: 预付费） */
  PayMode?: number;
}

declare interface CreateInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
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

declare interface CreateUserRequest {
  /** 实例ID */
  InstanceId: string;
  /** 用户名 */
  Username: string;
  /** 密码，该字段为空时候则后端会默认生成 */
  Password?: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeactivateCaCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 证书序列号 */
  CaSn: string;
}

declare interface DeactivateCaCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeactivateDeviceCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 设备证书序列号 */
  DeviceCertificateSn: string;
}

declare interface DeactivateDeviceCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** 认证器类型:JWT：JWT认证器JWKS：JWKS认证器BYOC：一端一证认证器 */
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

declare interface DeleteCaCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 证书序列号 */
  CaSn: string;
}

declare interface DeleteCaCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDeviceCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 设备证书序列号 */
  DeviceCertificateSn: string;
}

declare interface DeleteDeviceCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInsPublicEndpointRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DeleteInsPublicEndpointResponse {
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

declare interface DeleteUserRequest {
  /** 实例ID */
  InstanceId: string;
  /** 用户名 */
  Username: string;
}

declare interface DeleteUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthenticatorRequest {
  /** 实例ID */
  InstanceId: string;
  /** 认证器类型: JWT：JWT认证器 JWKS：JWKS认证器 HTTP:HTTP认证器 */
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

declare interface DescribeCaCertificateRequest {
  /** ca证书sn */
  CaSn: string;
  /** 集群id */
  InstanceId: string;
}

declare interface DescribeCaCertificateResponse {
  /** 创建时间 */
  CreatedTime?: number;
  /** 上次更新时间 */
  UpdateTime?: number;
  /** 失效日期 */
  NotAfterTime?: number;
  /** 上次激活时间 */
  LastActivationTime?: number;
  /** 上次吊销时间 */
  LastInactivationTime?: number;
  /** 证书状态 */
  Status?: string;
  /** 证书序列号 */
  CaSn?: string;
  /** common name */
  CaCn?: string;
  /** 证书内容 */
  CaCertificate?: string;
  /** 证书格式 */
  Format?: string;
  /** Ca证书颁发者CN */
  CaIssuerCn?: string | null;
  /** 生效开始时间 */
  NotBeforeTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCaCertificatesRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DescribeCaCertificatesResponse {
  /** ca证书列表 */
  Data?: CaCertificateItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClientListRequest {
  /** 实例ID */
  InstanceId: string;
  /** 客户端名 */
  ClientId?: string;
  /** 客户端数量限制,最大1024，默认1024 */
  Number?: string;
}

declare interface DescribeClientListResponse {
  /** 客户端列表 */
  Clients?: MQTTClientInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceCertificateRequest {
  /** 设备证书sn */
  DeviceCertificateSn: string;
  /** 集群id */
  InstanceId: string;
}

declare interface DescribeDeviceCertificateResponse {
  /** 创建时间 */
  CreatedTime?: number;
  /** 上次更新时间 */
  UpdateTime?: number;
  /** 证书失效日期 */
  NotAfterTime?: number;
  /** 上次激活时间 */
  LastActivationTime?: number;
  /** 上次取消激活时间 */
  LastInactivationTime?: number;
  /** 证书状态 */
  Status?: string;
  /** Ca证书序列号 */
  CaSn?: string;
  /** 设备证书序列号 */
  DeviceCertificateSn?: string;
  /** 设备证书内容 */
  DeviceCertificate?: string;
  /** 设备证书common name */
  DeviceCertificateCn?: string;
  /** 证书格式 */
  Format?: string;
  /** 客户端id */
  ClientId?: string | null;
  /** API, 手动注册 JITP 自动注册 */
  CertificateSource?: string;
  /** 证书生效开始时间 */
  NotBeforeTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceCertificatesRequest {
  /** 集群ID */
  InstanceId: string;
  /** 过滤器支持ClientId、CaSn、DeviceCertificateSn、Status搜索 */
  Filters?: Filter[];
  /** 分页limit */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** CREATE_TIME_DESC, 创建时间降序 CREATE_TIME_ASC,创建时间升序 UPDATE_TIME_DESC,更新时间降序 UPDATE_TIME_ASC,更新时间升序 */
  OrderBy?: string;
}

declare interface DescribeDeviceCertificatesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 设备证书 */
  Data?: DeviceCertificateItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInsPublicEndpointsRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInsPublicEndpointsResponse {
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

declare interface DescribeInsVPCEndpointsRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInsVPCEndpointsResponse {
  /** 接入点 */
  Endpoints?: MQTTEndpointItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 查询条件列表,支持以下子弹InstanceName：集群名模糊搜索InstanceId：集群id精确搜索InstanceStatus：集群状态搜索 */
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
  /** 实例类型BASIC 基础版PRO 专业版 */
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
  /** 客户端证书注册方式：JITP：自动注册API：通过API手动注册 */
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

declare interface DescribeMessageListRequest {
  /** 实例ID */
  InstanceId: string;
  /** 主题 */
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

declare interface DescribeMessageListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 消息记录列表 */
  Data?: MQTTMessageItem[] | null;
  /** 请求任务id */
  TaskRequestId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductSKUListRequest {
}

declare interface DescribeProductSKUListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** mqtt商品配置信息 */
  MQTTProductSkuList?: ProductSkuItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSharedSubscriptionLagRequest {
  /** 集群id */
  InstanceId: string;
  /** 共享订阅表达式 */
  SharedSubscription: string;
}

declare interface DescribeSharedSubscriptionLagResponse {
  /** 堆积值 */
  Lag?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicListRequest {
  /** 实例ID */
  InstanceId: string;
  /** 查询条件列表:支持TopicName模糊查询 */
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

declare interface DescribeUserListRequest {
  /** 实例ID */
  InstanceId: string;
  /** 查询条件列表支持字段Username：Username模糊查询 */
  Filters?: Filter[];
  /** 查询起始位置 */
  Offset?: number;
  /** 查询结果限制数量 */
  Limit?: number;
}

declare interface DescribeUserListResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** 角色信息列表 */
  Data?: MQTTUserItem[];
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
  /** IP */
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

declare interface ModifyInsPublicEndpointRequest {
  /** 实例ID */
  InstanceId: string;
  /** 带宽，单位：Mbps */
  Bandwidth: number;
  /** 公网访问规则 */
  Rules: PublicAccessRule[];
}

declare interface ModifyInsPublicEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceCertBindingRequest {
  /** 实例ID */
  InstanceId: string;
  /** 服务端证书id */
  SSLServerCertId: string;
  /** CA证书id */
  SSLCaCertId: string;
  /** 加密通信方式TLS：单向证书认证mTLS：双向证书认证BYOC：一设备一证书认证 */
  X509Mode: string;
  /** 设备证书注册类型：JITP，自动注册；MANUAL 手动注册 */
  DeviceCertificateProvisionType?: string;
  /** 是否自动激活，默认为false */
  AutomaticActivation?: boolean;
}

declare interface ModifyInstanceCertBindingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 要修改实例名称 */
  Name?: string;
  /** 要修改的备注信息 */
  Remark?: string;
  /** 要变更的配置规格 */
  SkuCode?: string;
  /** 客户端证书注册方式：JITP：自动注册API：手动通过API注册 */
  DeviceCertificateProvisionType?: string;
  /** 自动注册证书是否自动激活 */
  AutomaticActivation?: boolean;
}

declare interface ModifyInstanceResponse {
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

declare interface ModifyUserRequest {
  /** 实例ID */
  InstanceId: string;
  /** 用户名 */
  Username: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishMessageRequest {
  /** 实例ID */
  InstanceId: string;
  /** 消息 payload，需要按 encoding 指定的编码方式进行编码 */
  Payload: string;
  /** 消息目的主题，该参数与 TargetClientId 二选一 */
  TargetTopic?: string;
  /** 消息目的客户端 ID，该参数与 TargetTopic 二选一 */
  TargetClientId?: string;
  /** 消息 payload 编码，可选 plain 或 base64，默认为 plain（即不编码） */
  Encoding?: string;
  /** 消息的服务质量等级，默认为 1 */
  Qos?: number;
  /** 是否为保留消息，默认为 false，且仅支持发布到主题的消息设置为 true */
  Retain?: boolean;
}

declare interface PublishMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterCaCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** CA证书 */
  CaCertificate: string;
  /** 验证证书 */
  VerificationCertificate: string;
  /** 证书格式，不传默认PEM格式 */
  Format?: string;
  /** 证书状态，不传默认ACTIVE状态 ACTIVE,//激活 INACTIVE,//未激活 REVOKED,//吊销 PENDING_ACTIVATION,//注册待激活 */
  Status?: string;
}

declare interface RegisterCaCertificateResponse {
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

declare interface RevokedDeviceCertificateRequest {
  /** 集群id */
  InstanceId: string;
  /** 设备证书序列号 */
  DeviceCertificateSn: string;
}

declare interface RevokedDeviceCertificateResponse {
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
  /** 激活Ca证书 {@link ActivateCaCertificateRequest} {@link ActivateCaCertificateResponse} */
  ActivateCaCertificate(data: ActivateCaCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateCaCertificateResponse>;
  /** 生效设备证书 {@link ActivateDeviceCertificateRequest} {@link ActivateDeviceCertificateResponse} */
  ActivateDeviceCertificate(data: ActivateDeviceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateDeviceCertificateResponse>;
  /** 申请注册ca用的注册码 {@link ApplyRegistrationCodeRequest} {@link ApplyRegistrationCodeResponse} */
  ApplyRegistrationCode(data: ApplyRegistrationCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyRegistrationCodeResponse>;
  /** 创建授权策略 {@link CreateAuthorizationPolicyRequest} {@link CreateAuthorizationPolicyResponse} */
  CreateAuthorizationPolicy(data: CreateAuthorizationPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuthorizationPolicyResponse>;
  /** 为MQTT实例创建公网接入点 {@link CreateInsPublicEndpointRequest} {@link CreateInsPublicEndpointResponse} */
  CreateInsPublicEndpoint(data: CreateInsPublicEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInsPublicEndpointResponse>;
  /** 购买MQTT实例 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 创建一个MQTTJWKS认证器 {@link CreateJWKSAuthenticatorRequest} {@link CreateJWKSAuthenticatorResponse} */
  CreateJWKSAuthenticator(data: CreateJWKSAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJWKSAuthenticatorResponse>;
  /** 创建一个MQTTJWT认证器 {@link CreateJWTAuthenticatorRequest} {@link CreateJWTAuthenticatorResponse} */
  CreateJWTAuthenticator(data: CreateJWTAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJWTAuthenticatorResponse>;
  /** 创建MQTT主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 添加MQTT角色 {@link CreateUserRequest} {@link CreateUserResponse} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** 失效Ca证书 {@link DeactivateCaCertificateRequest} {@link DeactivateCaCertificateResponse} */
  DeactivateCaCertificate(data: DeactivateCaCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeactivateCaCertificateResponse>;
  /** 失效设备证书 {@link DeactivateDeviceCertificateRequest} {@link DeactivateDeviceCertificateResponse} */
  DeactivateDeviceCertificate(data: DeactivateDeviceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeactivateDeviceCertificateResponse>;
  /** 删除一个MQTT认证器 {@link DeleteAuthenticatorRequest} {@link DeleteAuthenticatorResponse} */
  DeleteAuthenticator(data: DeleteAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuthenticatorResponse>;
  /** 删除授权策略 {@link DeleteAuthorizationPolicyRequest} {@link DeleteAuthorizationPolicyResponse} */
  DeleteAuthorizationPolicy(data: DeleteAuthorizationPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuthorizationPolicyResponse>;
  /** 删除Ca证书 {@link DeleteCaCertificateRequest} {@link DeleteCaCertificateResponse} */
  DeleteCaCertificate(data: DeleteCaCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCaCertificateResponse>;
  /** 删除设备证书 {@link DeleteDeviceCertificateRequest} {@link DeleteDeviceCertificateResponse} */
  DeleteDeviceCertificate(data: DeleteDeviceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceCertificateResponse>;
  /** 删除MQTT实例的公网接入点 {@link DeleteInsPublicEndpointRequest} {@link DeleteInsPublicEndpointResponse} */
  DeleteInsPublicEndpoint(data: DeleteInsPublicEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInsPublicEndpointResponse>;
  /** 删除MQTT实例 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 删除MQTT主题 {@link DeleteTopicRequest} {@link DeleteTopicResponse} */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** 删除MQTT角色 {@link DeleteUserRequest} {@link DeleteUserResponse} */
  DeleteUser(data: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** 查询MQTT认证器 {@link DescribeAuthenticatorRequest} {@link DescribeAuthenticatorResponse} */
  DescribeAuthenticator(data: DescribeAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthenticatorResponse>;
  /** 查询授权策略 {@link DescribeAuthorizationPoliciesRequest} {@link DescribeAuthorizationPoliciesResponse} */
  DescribeAuthorizationPolicies(data?: DescribeAuthorizationPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthorizationPoliciesResponse>;
  /** 查询Ca证书详情 {@link DescribeCaCertificateRequest} {@link DescribeCaCertificateResponse} */
  DescribeCaCertificate(data: DescribeCaCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaCertificateResponse>;
  /** 查询集群CA证书列表 {@link DescribeCaCertificatesRequest} {@link DescribeCaCertificatesResponse} */
  DescribeCaCertificates(data: DescribeCaCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaCertificatesResponse>;
  /** 查询 MQTT 客户端列表 {@link DescribeClientListRequest} {@link DescribeClientListResponse} */
  DescribeClientList(data: DescribeClientListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClientListResponse>;
  /** 查询设备证书详情 {@link DescribeDeviceCertificateRequest} {@link DescribeDeviceCertificateResponse} */
  DescribeDeviceCertificate(data: DescribeDeviceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceCertificateResponse>;
  /** 查询设备证书 {@link DescribeDeviceCertificatesRequest} {@link DescribeDeviceCertificatesResponse} */
  DescribeDeviceCertificates(data: DescribeDeviceCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceCertificatesResponse>;
  /** 查询MQTT实例公网接入点 {@link DescribeInsPublicEndpointsRequest} {@link DescribeInsPublicEndpointsResponse} */
  DescribeInsPublicEndpoints(data: DescribeInsPublicEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInsPublicEndpointsResponse>;
  /** 查询MQTT实例VPC接入点 {@link DescribeInsVPCEndpointsRequest} {@link DescribeInsVPCEndpointsResponse} */
  DescribeInsVPCEndpoints(data: DescribeInsVPCEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInsVPCEndpointsResponse>;
  /** 查询MQTT实例详情信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取MQTT实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data?: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 查询MQTT消息列表 {@link DescribeMessageListRequest} {@link DescribeMessageListResponse} */
  DescribeMessageList(data: DescribeMessageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageListResponse>;
  /** 获取MQTT产品售卖规格 {@link DescribeProductSKUListRequest} {@link DescribeProductSKUListResponse} */
  DescribeProductSKUList(data?: DescribeProductSKUListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductSKUListResponse>;
  /** 查询共享订阅堆积 {@link DescribeSharedSubscriptionLagRequest} {@link DescribeSharedSubscriptionLagResponse} */
  DescribeSharedSubscriptionLag(data: DescribeSharedSubscriptionLagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSharedSubscriptionLagResponse>;
  /** 查询MQTT主题详情 {@link DescribeTopicRequest} {@link DescribeTopicResponse} */
  DescribeTopic(data: DescribeTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicResponse>;
  /** 查询MQTT主题列表 {@link DescribeTopicListRequest} {@link DescribeTopicListResponse} */
  DescribeTopicList(data: DescribeTopicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicListResponse>;
  /** 查询MQTT用户列表 {@link DescribeUserListRequest} {@link DescribeUserListResponse} */
  DescribeUserList(data: DescribeUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserListResponse>;
  /** 修改授权策略 {@link ModifyAuthorizationPolicyRequest} {@link ModifyAuthorizationPolicyResponse} */
  ModifyAuthorizationPolicy(data: ModifyAuthorizationPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuthorizationPolicyResponse>;
  /** 更新MQTT实例公网接入点 {@link ModifyInsPublicEndpointRequest} {@link ModifyInsPublicEndpointResponse} */
  ModifyInsPublicEndpoint(data: ModifyInsPublicEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInsPublicEndpointResponse>;
  /** 修改MQTT实例属性 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** 更新MQTT集群证书证书 {@link ModifyInstanceCertBindingRequest} {@link ModifyInstanceCertBindingResponse} */
  ModifyInstanceCertBinding(data: ModifyInstanceCertBindingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceCertBindingResponse>;
  /** 修改MQTTJWKS认证器 {@link ModifyJWKSAuthenticatorRequest} {@link ModifyJWKSAuthenticatorResponse} */
  ModifyJWKSAuthenticator(data: ModifyJWKSAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJWKSAuthenticatorResponse>;
  /** 修改MQTTJWT认证器 {@link ModifyJWTAuthenticatorRequest} {@link ModifyJWTAuthenticatorResponse} */
  ModifyJWTAuthenticator(data: ModifyJWTAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJWTAuthenticatorResponse>;
  /** 修改MQTT主题属性 {@link ModifyTopicRequest} {@link ModifyTopicResponse} */
  ModifyTopic(data: ModifyTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicResponse>;
  /** 修改MQTT角色 {@link ModifyUserRequest} {@link ModifyUserResponse} */
  ModifyUser(data: ModifyUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserResponse>;
  /** 发布 MQTT 消息 {@link PublishMessageRequest} {@link PublishMessageResponse} */
  PublishMessage(data: PublishMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishMessageResponse>;
  /** 注册CA证书 {@link RegisterCaCertificateRequest} {@link RegisterCaCertificateResponse} */
  RegisterCaCertificate(data: RegisterCaCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterCaCertificateResponse>;
  /** 注册设备证书 {@link RegisterDeviceCertificateRequest} {@link RegisterDeviceCertificateResponse} */
  RegisterDeviceCertificate(data: RegisterDeviceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterDeviceCertificateResponse>;
  /** 吊销设备证书 {@link RevokedDeviceCertificateRequest} {@link RevokedDeviceCertificateResponse} */
  RevokedDeviceCertificate(data: RevokedDeviceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<RevokedDeviceCertificateResponse>;
  /** 更新授权策略优先级 {@link UpdateAuthorizationPolicyPriorityRequest} {@link UpdateAuthorizationPolicyPriorityResponse} */
  UpdateAuthorizationPolicyPriority(data: UpdateAuthorizationPolicyPriorityRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAuthorizationPolicyPriorityResponse>;
}

export declare type Versions = ["2024-05-16"];

export default Mqtt;
