/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AuthorizationPolicyItem */
declare interface AuthorizationPolicyItem {
  /** 策略规则ID */
  Id?: number;
  /** MQTT集群ID */
  InstanceId?: string;
  /** 策略规则名 */
  PolicyName?: string;
  /** 规则语法版本，当前仅支持1，默认为1 */
  Version?: number;
  /** 策略优先级，优先级ID越小表示策略越优先检查生效。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Priority?: number;
  /** 决策allow：允许符合该策略的设备的访问请求。deny：拒绝覆盖该策略的设备的访问请求。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Effect?: string;
  /** 操作connect：连接pub：发布mqtt消息sub：订阅mqtt消息可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Actions?: string;
  /** 资源，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Resources?: string;
  /** 条件-连接设备ID，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  ClientId?: string;
  /** 条件-用户名，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Username?: string;
  /** 条件-客户端IP地址，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Ip?: string;
  /** 条件-服务质量，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Qos?: string;
  /** 条件-保留消息，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。1：表示匹配retain消息2：表示匹配非retain消息3：表示匹配retain和非retain消息 */
  Retain?: number;
  /** 备注，长度不超过128个字符。 */
  Remark?: string;
  /** 创建时间。毫秒级时间戳 。 */
  CreatedTime?: number;
  /** 更新时间。毫秒级时间戳 。 */
  UpdateTime?: number;
}

/** 策略规则优先级 */
declare interface AuthorizationPolicyPriority {
  /** 授权策略规则id，可以从 [DescribeAuthorizationPolicies](https://cloud.tencent.com/document/api/1778/111074)接口获得。 */
  Id: number;
  /** 优先级 */
  Priority: number;
}

/** HTTP 认证器body */
declare interface BodyItem {
  /** body key */
  Key: string;
  /** body key */
  Value: string;
}

/** CA证书信息 */
declare interface CaCertificateItem {
  /** 证书的公用名(Common Name) */
  CaCn?: string;
  /** 证书内容 */
  CaCertificate?: string;
  /** 证书序列号 */
  CaSn?: string;
  /** 证书格式，当前仅支持 PEM 格式 */
  Format?: string;
  /** 验证证书内容 */
  VerificationCertificate?: string;
  /** CA证书的状态 ACTIVE：激活 INACTIVE：未激活 REVOKED：吊销 PENDING_ACTIVATION：注册待激活 */
  Status?: string;
  /** 上次激活时间，毫秒级时间戳 。 */
  LastActivationTime?: number;
  /** 创建时间，毫秒级时间戳 。 */
  CreatedTime?: number;
  /** 更新时间，毫秒级时间戳 。 */
  UpdateTime?: number;
  /** 上次去激活时间，毫秒级时间戳 。 */
  LastInactivationTime?: number;
  /** Ca证书颁发者CN */
  CaIssuerCn?: string;
  /** 生效时间，毫秒级时间戳 。 */
  NotBeforeTime?: number;
  /** 失效时间，毫秒级时间戳 。 */
  NotAfterTime?: number;
}

/** 设备证书信息 */
declare interface DeviceCertificateItem {
  /** 客户端id */
  ClientId?: string;
  /** 设备证书 */
  DeviceCertificate?: string;
  /** 设备证书SN序列号，用于唯一标识一个设备证书 */
  DeviceCertificateSn?: string;
  /** 设备证书Cn */
  DeviceCertificateCn?: string;
  /** 签发该证书的CA证书的序列号 */
  CaSn?: string;
  /** 证书格式，当前仅支持PEM */
  Format?: string;
  /** 设备证书状态 ACTIVE：激活 INACTIVE：未激活 REVOKED：吊销 PENDING_ACTIVATION：注册待激活 */
  Status?: string;
  /** 组织单位 */
  OrganizationalUnit?: string;
  /** 上次激活时间，毫秒级时间戳 。 */
  LastActivationTime?: number;
  /** 上次取消激活时间，毫秒级时间戳 。 */
  LastInactivationTime?: number;
  /** 创建时间，毫秒级时间戳 。 */
  CreatedTime?: number;
  /** 更新时间，毫秒级时间戳 。 */
  UpdateTime?: number;
  /** 证书来源：API, 手动注册 JITP 自动注册 */
  CertificateSource?: string;
  /** 证书失效日期，毫秒级时间戳 。 */
  NotAfterTime?: number;
  /** 证书生效开始日期，毫秒级时间戳 。 */
  NotBeforeTime?: number;
}

/** 查询过滤器 */
declare interface Filter {
  /** 过滤条件名 */
  Name: string;
  /** 过滤条件的值 */
  Values: string[];
}

/** HTTP 认证器header */
declare interface HeaderItem {
  /** header key */
  Key: string;
  /** header value */
  Value: string;
}

/** IP规则 */
declare interface IpRule {
  /** IP地址 */
  Ip: string;
  /** 当前仅支持允许，默认允许。 */
  Allow: boolean;
  /** 备注信息 */
  Remark: string;
}

/** MQTT认证器信息 */
declare interface MQTTAuthenticatorItem {
  /** 认证器类型JWT：JWT认证器JWKS：JWKS认证器HTTP：HTTP认证器 */
  Type?: string;
  /** JWT认证器字段说明from（认证字段） password：从password字段获取认证字段 username：从username字段获取认证字段secret（签名方式） hmac-based：hmac-based签名方式 public-key：public-key签名方式secret（密钥），hmac-based需要配置密钥public-key（公钥），public-key签名方式需要配置样例：{"from":"password","secret":"secret282698","algorithm":"hmac-based"}JWKS认证器字段说明endpoint（接入点）：公钥获取服务器接入地址refreshInterval（认证内容）：公钥集合刷新周期from（认证字段） password：从password字段获取认证字段 username：从username字段获取认证字段text：公钥集合样例：{"endpoint":"127.0.0.1","refreshInterval":60,"from":"password"}HTTP认证器headers（请求头）：标准请求头和自定义请求头endpoint（接入点）：认证服务器接入点method（http请求方法）：POST/GETreadTimeout（读超时时间）：读取认证服务器数据超时时间，单位秒connectTimeout（连接超时时间）：连接认证服务器超时时间，单位秒body（请求体）：http请求体concurrency（并发数）：最大并发请求数量样例：{"headers":[{"key":"Content-type","value":"application/json"},{"key":"username","value":"${Username}"}],"endpoint":"https://127.0.0.1:443","method":"POST","readTimeout":10,"connectTimeout":10,"body":[{"key":"client-id","value":"${ClientId}"}],"concurrency":8}参考 [认证管理概述](https://cloud.tencent.com/document/product/1778/114813) */
  Config?: string;
  /** 认证器状态open：认证器打开close：认证器关闭 */
  Status?: string;
  /** 创建时间，毫秒级时间戳 。 */
  CreateTime?: number;
  /** 说明，最长 128 字符。 */
  Remark?: string;
}

/** MQTT客户端信息 */
declare interface MQTTClientInfo {
  /** 客户端ID */
  ClientId?: string;
  /** 客户端网络地址 */
  ClientAddress?: string;
  /** MQTT 协议版本3：表示MQTT 3.1版本4：表示 MQTT 3.1.15：表示MQTT 5.0协议 */
  ProtocolVersion?: number;
  /** 保持连接时间，单位：秒 */
  Keepalive?: number;
  /** 连接状态，CONNECTED 已连接，DISCONNECTED 未连接 */
  ConnectionStatus?: string;
  /** 客户端创建时间，毫秒级时间戳 。 */
  CreateTime?: number;
  /** 上次建立连接时间，毫秒级时间戳 。 */
  ConnectTime?: number;
  /** 上次断开连接时间，仅对持久会话（cleanSession=false）并且客户端当前未连接时有意义，毫秒级时间戳 。 */
  DisconnectTime?: number;
  /** 客户端的订阅列表 */
  MQTTClientSubscriptions?: MQTTClientSubscription[];
}

/** MQTT 订阅关系 */
declare interface MQTTClientSubscription {
  /** topic 订阅 */
  TopicFilter?: string;
  /** 服务质量等级0: 至多一次1: 至少一次2: 恰好一次 */
  Qos?: number;
  /** 堆积数量 */
  Lag?: number;
  /** 投递未确认数量 */
  Inflight?: number;
}

/** MQTTEndpoint */
declare interface MQTTEndpointItem {
  /** 类型 */
  Type?: string;
  /** 接入点 */
  Url?: string;
  /** vpc信息 */
  VpcId?: string;
  /** 子网信息 */
  SubnetId?: string;
  /** 主机 */
  Host?: string;
  /** 端口 */
  Port?: number;
  /** 接入点ip */
  Ip?: string;
}

/** MQTT 实例信息 */
declare interface MQTTInstanceItem {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例版本 */
  Version?: string;
  /** 实例类型BASIC，基础版PRO，专业版PLATINUM，铂金版 */
  InstanceType?: string;
  /** 实例状态，RUNNING, 运行中MAINTAINING，维护中ABNORMAL，异常OVERDUE，欠费CREATING，创建中MODIFYING，变配中CREATE_FAILURE，创建失败MODIFY_FAILURE，变配失败DELETING，删除中 */
  InstanceStatus?: string;
  /** 实例主题数上限 */
  TopicNumLimit?: number;
  /** 备注信息 */
  Remark?: string;
  /** 主题数量 */
  TopicNum?: number;
  /** 商品规格 */
  SkuCode?: string;
  /** 弹性TPS限流值 */
  TpsLimit?: number;
  /** 创建时间，毫秒级时间戳 */
  CreateTime?: number;
  /** 单客户端最大订阅数量 */
  MaxSubscriptionPerClient?: number;
  /** 客户端连接数上线 */
  ClientNumLimit?: number;
  /** 是否自动续费。仅包年包月集群生效。1:自动续费0:非自动续费 */
  RenewFlag?: number;
  /** 计费模式， POSTPAID，按量计费 PREPAID，包年包月 */
  PayMode?: string;
  /** 到期时间，毫秒级时间戳 */
  ExpiryTime?: number;
  /** 预销毁时间，毫秒级时间戳 */
  DestroyTime?: number;
  /** 授权规则条数限制 */
  AuthorizationPolicyLimit?: number;
  /** 最大ca配额 */
  MaxCaNum?: number;
  /** 最大订阅数 */
  MaxSubscription?: number;
  /** 共享订阅组数最大限制 */
  SharedSubscriptionGroupLimit?: number;
  /** 单个共享订阅组TopicFilter数限制 */
  MaxTopicFilterPerSharedSubscriptionGroup?: number;
  /** 自动订阅规则条数限制 */
  AutoSubscriptionPolicyLimit?: number;
  /** 单条自动订阅规则TopicFilter数限制 */
  MaxTopicFilterPerAutoSubscriptionPolicy?: number;
}

/** MQTT消息 */
declare interface MQTTMessage {
  /** 消息id */
  MessageId?: string;
  /** 消息发送的客户端Id */
  ClientId?: string;
  /** 消息服务质量等级 */
  Qos?: string;
  /** 消息在服务端的存储时间，毫秒级时间戳 */
  StoreTimestamp?: number;
  /** 源topic */
  OriginTopic?: string;
}

/** 消息记录 */
declare interface MQTTMessageItem {
  /** 消息ID */
  MsgId?: string;
  /** 消息tag */
  Tags?: string;
  /** 消息key */
  Keys?: string;
  /** 客户端地址 */
  ProducerAddr?: string;
  /** 消息发送时间，格式 日期时间：YYYY-MM-DD hh:mm:ss */
  ProduceTime?: string;
  /** 死信重发次数 */
  DeadLetterResendTimes?: number;
  /** 死信重发成功次数 */
  DeadLetterResendSuccessTimes?: number;
  /** 子topic */
  SubTopic?: string;
  /** 消息质量等级0：至多一次1：至少一次2：精确一次 */
  Qos?: string;
}

/** MQTT 主题详情 */
declare interface MQTTTopicItem {
  /** 实例 ID */
  InstanceId?: string;
  /** 主题名称 */
  Topic?: string;
  /** 主题描述 */
  Remark?: string;
}

/** MQTT集群用户信息 */
declare interface MQTTUserItem {
  /** 用户名 */
  Username?: string;
  /** 密码 */
  Password?: string;
  /** 备注信息 */
  Remark?: string;
  /** 创建时间，毫秒级时间戳 。 */
  CreatedTime?: number;
  /** 修改时间，毫秒级时间戳 。 */
  ModifiedTime?: number;
}

/** 价格标签信息 */
declare interface PriceTag {
  /** 计价名称，表示规格的计费项项目分类，具体规格的计价名称可参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232) 接口的返回结果。 */
  Name?: string;
  /** 计价类别，计价名称子类，具体规格的计价类别可参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232) 的返回结果。 */
  Category?: string;
  /** 计费项标签，为计价名称（Name）下计价类别（Category）的子项目，表示一个具体的收费项。规格的计费项标签可参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232) 接口的返回结果。 */
  Code?: string;
  /** 计费步长，表示该规格在 计价名称（Name）下的计价类别（Category）的计费项标签（Code）计费数量。具体规格该字段取值参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/product/1778/116232) */
  Step?: number;
}

/** MQTT ProductSkuItem */
declare interface ProductSkuItem {
  /** 规格类型BASIC：基础版PRO ：专业版PLATINUM： 铂金版 */
  InstanceType?: string;
  /** 规格代码 */
  SkuCode?: string;
  /** 是否售卖1: 可售卖0: 不可售卖 */
  OnSale?: boolean;
  /** topic num限制 */
  TopicNumLimit?: number;
  /** MQTT 集群下每秒钟生产消息量和消费消息量之和。详细计算方式参考 [计费概述](https://cloud.tencent.com/document/product/1778/109698) */
  TpsLimit?: number;
  /** 客户端连接数 */
  ClientNumLimit?: number;
  /** 单客户端最大订阅数 */
  MaxSubscriptionPerClient?: number;
  /** 授权规则条数 */
  AuthorizationPolicyLimit?: number;
  /** 计费项信息 */
  PriceTags?: PriceTag[];
}

/** 公网访问安全规则 */
declare interface PublicAccessRule {
  /** ip网段信息 */
  IpRule?: string;
  /** 当前仅支持允许，默认允许（allow） */
  Allow?: boolean;
  /** 备注信息，最多64个字符。 */
  Remark?: string;
}

/** 标签数据 */
declare interface Tag {
  /** 标签名称 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
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
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
}

declare interface ActivateCaCertificateRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** CA证书的SN序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。 */
  CaSn: string;
}

declare interface ActivateCaCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ActivateDeviceCertificateRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 设备证书的SN序列号，可以从 [DescribeDeviceCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。 */
  DeviceCertificateSn: string;
}

declare interface ActivateDeviceCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyRegistrationCodeRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
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
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 策略名称，不能为空，3-64个字符，支持中文、字母、数字、“-”及“_”。 */
  PolicyName: string;
  /** 策略版本,默认为1，当前仅支持1 */
  PolicyVersion: number;
  /** 策略优先级，越小越优先，不能重复，优先级ID越小表示策略越优先检查生效。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Priority: number;
  /** 决策：allow：允许符合该策略的设备的访问请求。deny：拒绝覆盖该策略的设备的访问请求。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Effect: string;
  /** 操作,支持多选，多个操作用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。connect：连接pub：发布sub：订阅 */
  Actions: string;
  /** 条件-保留消息，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。1,匹配保留消息；2,匹配非保留消息，3.匹配保留和非保留消息 */
  Retain: number;
  /** 条件：服务质量0：最多一次1：最少一次2：精确一次可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Qos: string;
  /** 资源，需要匹配的订阅，支持配置多条匹配规则，多个用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Resources?: string;
  /** 条件-用户名 */
  Username?: string;
  /** 条件：客户端ID，支持正则 */
  ClientId?: string;
  /** 条件：客户端IP地址，支持IP或者CIDR，可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Ip?: string;
  /** 备注信息，最长 128 字符 */
  Remark?: string;
}

declare interface CreateAuthorizationPolicyResponse {
  /** 集群Id */
  InstanceId?: string;
  /** 策略id */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHttpAuthenticatorRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** jwks服务地址 */
  Endpoint: string;
  /** 最大并发连接数，默认8，范围：1-10 */
  Concurrency?: number;
  /** 网络请求方法 GET 或 POST，默认POST */
  Method?: string;
  /** 认证器是否开启：open-启用；close-关闭，默认open-启用 */
  Status?: string;
  /** 说明，最多支持128个字符。 */
  Remark?: string;
  /** 连接超时时间，单位：秒，范围：1-30 */
  ConnectTimeout?: number;
  /** 请求超时时间，单位：秒，范围：1-30 */
  ReadTimeout?: number;
  /** 转发请求header */
  Header?: HeaderItem[];
  /** 转发请求body */
  Body?: BodyItem[];
}

declare interface CreateHttpAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInsPublicEndpointRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
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
  /** 实例类型，需要和SkuCode保持对应关系，可参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/api/1778/116232) 接口获取。BASIC 基础版PRO 专业版PLATINUM 铂金版 */
  InstanceType: string;
  /** 集群名称不能为空, 3-64个字符，只能包含数字、字母、“-”和“_”。 */
  Name: string;
  /** 商品规格，需要和InstanceType保持对应关系，可参考 [获取MQTT产品售卖规格](https://cloud.tencent.com/document/api/1778/116232) 接口获取。 */
  SkuCode: string;
  /** 备注信息，最长 128 字符 */
  Remark?: string;
  /** 标签列表 */
  TagList?: Tag[];
  /** 实例绑定的VPC信息，需要传当前用户下可用的VPC和SUBNET */
  VpcList?: VpcInfo[];
  /** 是否开启公网，默认false（关闭） */
  EnablePublic?: boolean;
  /** 公网带宽（单位：Mbps），EnablePublic 为True时，该字段必须填写且大于0. */
  Bandwidth?: number;
  /** 公网访问白名单，不传表示拒绝所有IP网络访问。 */
  IpRules?: IpRule[];
  /** 是否自动续费（0: 不自动续费；1: 自动续费），仅购买预付费集群时生效。默认1:自动续费 */
  RenewFlag?: number;
  /** 购买时长（单位：月），购买预付费集群时生效，默认1m（月）。可选范围：1~12、24、36、48、60； */
  TimeSpan?: number;
  /** 付费模式（0: 后付费；1: 预付费），默认0（后付费）。 */
  PayMode?: number;
}

declare interface CreateInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateJWKSAuthenticatorRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** JWKS服务地址，（Text字段和Endpoint字段必须选择一个填写） */
  Endpoint?: string;
  /** 认证文本刷新间隔时间，单位：秒，最小值60，默认值60，最大值1000。填写认证服务器地址（Endpoint）时生效。 */
  RefreshInterval?: number;
  /** jwks文本，（Text字段和Endpoint字段必须选择一个填写） */
  Text?: string;
  /** 认证器是否开启：open-启用；close-关闭，默认open-启用 */
  Status?: string;
  /** 说明，不能超过 128 个字符 */
  Remark?: string;
  /** 认证字段；username-对应 MQTT CONNECT Packet 中 username 字段，password-对应 MQTT CONNECT Packet 中 password 字段。默认username */
  From?: string;
}

declare interface CreateJWKSAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateJWTAuthenticatorRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 签名方式：hmac-based，public-key */
  Algorithm: string;
  /** 认证字段password：对应 MQTT CONNECT Packet 中 password 字段，username：对应 MQTT CONNECT Packet 中 username 字段默认username */
  From: string;
  /** 密钥，Algorithm为hmac-based需要传递该字段。 */
  Secret?: string;
  /** 公钥，Algorithm为public-key时需要传递该字段。 */
  PublicKey?: string;
  /** 认证器是否开启：open-启用；close-关闭，默认：open-启用 */
  Status?: string;
  /** 说明，不能超过 128 个字符。 */
  Remark?: string;
}

declare interface CreateJWTAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 主题，不能为空，只能包含字母、数字、“-”及“_”，3-100 字符。 */
  Topic: string;
  /** 备注，最长 128 字符 */
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
  /** 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 用户名，不能为空，只支持数字 大小写字母 分隔符("_","-")，不能超过 32 个字符 */
  Username: string;
  /** 密码，该字段为空时候则后端会默认生成。用户自定义密码时，不能为空，只支持数字 大小写字母 分隔符("_","-")，不能超过 64 个字符。 */
  Password?: string;
  /** 备注，长度不超过128个字符。 */
  Remark?: string;
}

declare interface CreateUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeactivateCaCertificateRequest {
  /** 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 证书序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。 */
  CaSn: string;
}

declare interface DeactivateCaCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeactivateDeviceCertificateRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 设备证书的SN序列号，可以从 [DescribeDeviceCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、设备证书文件中获得。 */
  DeviceCertificateSn: string;
}

declare interface DeactivateDeviceCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuthenticatorRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 认证器类型:JWT：JWT认证器JWKS：JWKS认证器HTTP：HTTP认证器 */
  Type: string;
}

declare interface DeleteAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuthorizationPolicyRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 授权策略规则id，可以从 [DescribeAuthorizationPolicies](https://cloud.tencent.com/document/api/1778/111074)接口获得。 */
  Id: number;
}

declare interface DeleteAuthorizationPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCaCertificateRequest {
  /** 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** CA证书序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。 */
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
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
}

declare interface DeleteInsPublicEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
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
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 认证器类型:JWT：JWT认证器JWKS：JWKS认证器HTTP：HTTP认证器 */
  Type?: string;
}

declare interface DescribeAuthenticatorResponse {
  /** 集群认证器列表 */
  Authenticators?: MQTTAuthenticatorItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthorizationPoliciesRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId?: string;
}

declare interface DescribeAuthorizationPoliciesResponse {
  /** 规则 */
  Data?: AuthorizationPolicyItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCaCertificateRequest {
  /** CA证书的SN序列号，可以从 [DescribeCaCertificates](https://cloud.tencent.com/document/api/1778/116206)接口、控制台、证书文件中获得。 */
  CaSn: string;
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
}

declare interface DescribeCaCertificateResponse {
  /** 创建时间，毫秒级时间戳 。 */
  CreatedTime?: number;
  /** 上次更新时间，毫秒级时间戳 。 */
  UpdateTime?: number;
  /** 失效日期，毫秒级时间戳 。 */
  NotAfterTime?: number;
  /** 上次激活时间，毫秒级时间戳 。 */
  LastActivationTime?: number;
  /** 上次吊销时间，毫秒级时间戳 。 */
  LastInactivationTime?: number;
  /** CA证书状态 ACTIVE：激活INACTIVE：未激活 */
  Status?: string;
  /** 证书序列号 */
  CaSn?: string;
  /** 证书的CN（Common Name），证书中用于标识主体的名称，通常是域名或组织名称 */
  CaCn?: string;
  /** 证书内容 */
  CaCertificate?: string;
  /** 证书格式，当仅支持PEM格式 */
  Format?: string;
  /** Ca证书颁发者CN */
  CaIssuerCn?: string;
  /** 生效开始时间，毫秒级时间戳 。 */
  NotBeforeTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCaCertificatesRequest {
  /** 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
}

declare interface DescribeCaCertificatesResponse {
  /** ca证书列表 */
  Data?: CaCertificateItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClientListRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 客户端ID */
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
  /** 设备证书的SN序列号，用于唯一标识一个设备证书。 */
  DeviceCertificateSn: string;
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
}

declare interface DescribeDeviceCertificateResponse {
  /** 创建时间，毫秒级时间戳 。 */
  CreatedTime?: number;
  /** 上次更新时间，毫秒级时间戳 。 */
  UpdateTime?: number;
  /** 证书失效日期，毫秒级时间戳 。 */
  NotAfterTime?: number;
  /** 上次激活时间，毫秒级时间戳 。 */
  LastActivationTime?: number;
  /** 上次取消激活时间，毫秒级时间戳 。 */
  LastInactivationTime?: number;
  /** 设备证书的状态 ACTIVE：激活 INACTIVE：未激活 REVOKED：吊销 PENDING_ACTIVATION：注册待激活 */
  Status?: string;
  /** Ca证书序列号 */
  CaSn?: string;
  /** 设备证书序列号 */
  DeviceCertificateSn?: string;
  /** 设备证书内容 */
  DeviceCertificate?: string;
  /** 设备证书common name */
  DeviceCertificateCn?: string;
  /** 证书格式，当前仅支持PEM格式 */
  Format?: string;
  /** 客户端id */
  ClientId?: string;
  /** 证书来源 API：手动注册 JITP：自动注册 */
  CertificateSource?: string;
  /** 证书生效开始时间，毫秒级时间戳 。 */
  NotBeforeTime?: number;
  /** 组织单位 */
  OrganizationalUnit?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceCertificatesRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 支持搜索参数ClientId：客户端id，根据实际业务使用获取CaSn：所属的CA证书SN序列号 可以从 [查询集群CA证书列表](https://cloud.tencent.com/document/api/1778/116206) 或者实际业务使用获取DeviceCertificateSn：设备证书SN序列号 可从[查询设备证书详情](https://cloud.tencent.com/document/api/1778/113748) 获取DeviceCertificateCn：设备证书CN 可从[查询设备证书详情](https://cloud.tencent.com/document/api/1778/113748) 获取OrganizationalUnit：证书OUNotAfterEnd：过期时间小于等于指定时间的证书NotAfterStart：过期时间大于等于指定时间的证书Status：设备证书状态 ACTIVE（激活）； INACTIVE（未激活）REVOKED（吊销）；PENDING_ACTIVATION（注册待激活） */
  Filters?: Filter[];
  /** 分页limit，默认20，最大100 */
  Limit?: number;
  /** 分页偏移量，默认0 */
  Offset?: number;
  /** 排序规则 CREATE_TIME_DESC, 创建时间降序 CREATE_TIME_ASC,创建时间升序 UPDATE_TIME_DESC,更新时间降序 UPDATE_TIME_ASC,更新时间升序 */
  OrderBy?: string;
}

declare interface DescribeDeviceCertificatesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 设备证书列表 */
  Data?: DeviceCertificateItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInsPublicEndpointsRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
}

declare interface DescribeInsPublicEndpointsResponse {
  /** 接入点 */
  Endpoints?: MQTTEndpointItem[];
  /** 实例id */
  InstanceId?: string;
  /** 带宽，单位Mbps */
  Bandwidth?: number;
  /** 公网访问规则 */
  Rules?: PublicAccessRule[];
  /** 公网状态： NORMAL-正常 CLOSING-关闭中 MODIFYING-修改中 CREATING-开启中 CLOSE-关闭 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInsVPCEndpointsRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
}

declare interface DescribeInsVPCEndpointsResponse {
  /** 接入点 */
  Endpoints?: MQTTEndpointItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 查询条件列表,支持以下字段InstanceName：集群名模糊搜索InstanceId：集群id精确搜索InstanceStatus：集群状态搜索（RUNNING-运行中，CREATING-创建中，MODIFYING-变配中，DELETING-删除中）注意：配置TagFilters时该查询条件不生效。 */
  Filters?: Filter[];
  /** 查询起始位置，默认0 */
  Offset?: number;
  /** 查询结果限制数量，默认20，最大100 */
  Limit?: number;
  /** 标签过滤器 */
  TagFilters?: TagFilter[];
}

declare interface DescribeInstanceListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 实例列表 */
  Data?: MQTTInstanceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
}

declare interface DescribeInstanceResponse {
  /** 实例类型BASIC 基础版PRO 专业版PLATINUM 铂金版 */
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
  /** 实例状态， RUNNING, 运行中 MAINTAINING，维护中 ABNORMAL，异常 OVERDUE，欠费 DESTROYED，已删除 CREATING，创建中 MODIFYING，变配中 CREATE_FAILURE，创建失败 MODIFY_FAILURE，变配失败 DELETING，删除中 */
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
  /** 是否自动续费。仅包年包月集群生效。 1:自动续费 0:非自动续费 */
  RenewFlag?: number;
  /** 计费模式， POSTPAID，按量计费 PREPAID，包年包月 */
  PayMode?: string;
  /** 到期时间，毫秒级时间戳 */
  ExpiryTime?: number;
  /** 预销毁时间，毫秒级时间戳 */
  DestroyTime?: number;
  /** TLS,单向认证 mTLS,双向认证 BYOC;一机一证 */
  X509Mode?: string;
  /** 最大Ca配额 */
  MaxCaNum?: number;
  /** 证书注册码 */
  RegistrationCode?: string;
  /** 集群最大订阅数 */
  MaxSubscription?: number;
  /** 授权策略开关 */
  AuthorizationPolicy?: boolean;
  /** 共享订阅组数最大限制 */
  SharedSubscriptionGroupLimit?: number;
  /** 单个共享订阅组TopicFilter数限制 */
  MaxTopicFilterPerSharedSubscriptionGroup?: number;
  /** 自动订阅规则条数限制 */
  AutoSubscriptionPolicyLimit?: number;
  /** 单条自动订阅规则TopicFilter数限制 */
  MaxTopicFilterPerAutoSubscriptionPolicy?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageByTopicRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** home/room */
  Topic: string;
  /** 开始时间，毫秒级时间戳 。 */
  StartTime: number;
  /** 查询消息条数，最大1024，默认100. */
  MaxNumber?: number;
}

declare interface DescribeMessageByTopicResponse {
  /** 消息列表 */
  Data?: MQTTMessage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageListRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 要查询的一级Topic，可从 [查询MQTT主题列表](https://cloud.tencent.com/document/product/1778/111082) 获取。 */
  Topic: string;
  /** 开始时间，毫秒级时间戳 。 */
  StartTime: number;
  /** 结束时间，毫秒级时间戳 。 */
  EndTime: number;
  /** 请求任务id，用于相同查询参数下查询加速，第一次查询时无需传递，第一次查询会根据本次查询参数生成查询任务ID，保留查询条件，查询下一页消息时可传递第一次查询返回的任务ID。 */
  TaskRequestId: string;
  /** 查询起始位置，默认0 */
  Offset?: number;
  /** 查询结果限制数量，默认20，最大50 */
  Limit?: number;
}

declare interface DescribeMessageListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 消息记录列表 */
  Data?: MQTTMessageItem[];
  /** 请求任务id */
  TaskRequestId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductSKUListRequest {
}

declare interface DescribeProductSKUListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** mqtt商品配置信息 */
  MQTTProductSkuList?: ProductSkuItem[];
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
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 查询条件列表:支持TopicName模糊查询 */
  Filters?: Filter[];
  /** 查询起始位置，默认0。 */
  Offset?: number;
  /** 查询结果限制数量，默认20，最大20 */
  Limit?: number;
}

declare interface DescribeTopicListResponse {
  /** 查询总数 */
  TotalCount?: number;
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
  /** 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 查询条件列表支持字段Username：按照【用户名】进行过滤，支持模糊过滤，类型：String */
  Filters?: Filter[];
  /** 查询起始位置，默认值0 */
  Offset?: number;
  /** 查询结果限制数量，默认值20，最大值100 */
  Limit?: number;
}

declare interface DescribeUserListResponse {
  /** 查询总数 */
  TotalCount?: number;
  /** 角色信息列表 */
  Data?: MQTTUserItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAuthorizationPolicyRequest {
  /** 授权策略ID，从 [查询授权策略](https://cloud.tencent.com/document/product/1778/111074) 接口获取 */
  Id: number;
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 策略名称，不能为空，3-64个字符，支持中文、字母、数字、“-”及“_”。 */
  PolicyName?: string;
  /** 策略版本,默认为1，当前仅支持1 */
  PolicyVersion?: number;
  /** 策略优先级，越小越优先，不能重复 */
  Priority?: number;
  /** 决策：allow 允许deny 拒绝 */
  Effect?: string;
  /** 操作,支持多选，多个操作用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。connect：连接pub：发布sub：订阅 */
  Actions?: string;
  /** 资源，需要匹配的订阅，支持配置多条匹配规则，多个用英文逗号隔开。可参考 [数据面授权策略说明](https://cloud.tencent.com/document/product/1778/109715)。 */
  Resources?: string;
  /** 条件-用户名 */
  Username?: string;
  /** 条件-保留消息1,匹配保留消息；2,匹配非保留消息，3.匹配保留和非保留消息 */
  Retain?: number;
  /** 条件：客户端ID，支持正则 */
  ClientId?: string;
  /** 条件：客户端IP地址，支持IP或者CIDR */
  Ip?: string;
  /** 条件：服务质量0：最多一次1：最少一次2：精确一次 */
  Qos?: string;
  /** 备注信息，最长 128 字符 */
  Remark?: string;
}

declare interface ModifyAuthorizationPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHttpAuthenticatorRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 服务地址 */
  Endpoint?: string;
  /** 认证器状态：open-启用；close-关闭 */
  Status?: string;
  /** 最大并发连接数，默认8，范围：1-10 */
  Concurrency?: number;
  /** 连接超时时间，单位：秒，范围：1-30 */
  ConnectTimeout?: number;
  /** 请求超时时间，单位：秒，范围：1-30 */
  ReadTimeout?: number;
  /** 说明，最多支持128个字符。 */
  Remark?: string;
  /** 请求方法，GET 或者 POST */
  Method?: string;
  /** 请求header */
  Header?: HeaderItem[];
  /** 请求body */
  Body?: BodyItem[];
}

declare interface ModifyHttpAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInsPublicEndpointRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
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
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 加密通信方式TLS：单向证书认证mTLS：双向证书认证BYOC：一设备一证书认证 */
  X509Mode: string;
  /** 服务端证书id，从 [获取证书列表](https://cloud.tencent.com/document/api/400/41671) 或者腾讯云证书服务控制台获取。X509Mode为mTLS或BYOC时为必填。 */
  SSLServerCertId?: string;
  /** CA证书id，从 [获取证书列表](https://cloud.tencent.com/document/api/400/41671) 或者腾讯云证书服务控制台获取。X509Mode为mTLS时为必填 */
  SSLCaCertId?: string;
  /** 设备证书注册类型：JITP：自动注册；API：手动注册默认值：API */
  DeviceCertificateProvisionType?: string;
  /** 是否自动激活，默认为false */
  AutomaticActivation?: boolean;
}

declare interface ModifyInstanceCertBindingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 要修改实例名称，不能为空, 3-64个字符，只能包含数字、字母、“-”和“_”。 */
  Name?: string;
  /** 要修改的备注信息，最多128个字符。 */
  Remark?: string;
  /** 需要变更的配置规格基础版和专业版集群不能升配到铂金版规格，铂金版集群不能降配至基础版和增强版规格。 */
  SkuCode?: string;
  /** 客户端证书注册方式：JITP：自动注册API：手动通过API注册 */
  DeviceCertificateProvisionType?: string;
  /** 自动注册证书是否自动激活 */
  AutomaticActivation?: boolean;
  /** 授权策略开关 */
  AuthorizationPolicy?: boolean;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyJWKSAuthenticatorRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** JWKS服务器地址，（Text字段和Endpoint字段必须选择一个填写） */
  Endpoint?: string;
  /** 认证器状态：open-启用（默认）；close-关闭 */
  Status?: string;
  /** 认证文本刷新间隔时间，单位：秒，最小值60，默认值60，最大值1000。填写认证服务器地址时生效。 */
  RefreshInterval?: number;
  /** JWKS文本，认证服务器地址为空时生效。（Text字段和Endpoint字段必须选择一个填写） */
  Text?: string;
  /** 认证字段；username-对应 MQTT CONNECT Packet 中 username 字段， password-对应 MQTT CONNECT Packet 中 password 字段。默认username */
  From?: string;
  /** 说明，不能超过 128 个字符 */
  Remark?: string;
}

declare interface ModifyJWKSAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyJWTAuthenticatorRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 签名方式：hmac-based，public-key */
  Algorithm?: string;
  /** 认证字段password：对应 MQTT CONNECT Packet 中 password 字段，username：对应 MQTT CONNECT Packet 中 username 字段 */
  From?: string;
  /** 密钥，Algorithm为hmac-based需要传递该字段。 */
  Secret?: string;
  /** 公钥，Algorithm为public-key时需要传递该字段。 */
  PublicKey?: string;
  /** 认证器是否开启：open-启用；close-关闭 */
  Status?: string;
  /** 说明，不能超过 128 个字符 */
  Remark?: string;
  /** JSKS文本 */
  Text?: string;
}

declare interface ModifyJWTAuthenticatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 主题，不能为空，只能包含字母、数字、“-”及“_”，3-100 字符。 */
  Topic: string;
  /** 备注信息，最长 128 字符 */
  Remark?: string;
}

declare interface ModifyTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserRequest {
  /** 实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 用户名 */
  Username: string;
  /** 备注，长度不超过128个字符。 */
  Remark?: string;
}

declare interface ModifyUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishMessageRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 消息负载 Payload，是消息的实际内容，需要按 encoding 指定的编码方式进行编码 */
  Payload: string;
  /** 消息目的主题，该参数与 TargetClientId 二选一 */
  TargetTopic?: string;
  /** 消息目的客户端 ID，该参数与 TargetTopic 二选一 */
  TargetClientId?: string;
  /** 消息 payload 编码，可选 plain 或 base64，默认为 plain（即不编码） */
  Encoding?: string;
  /** 消息的服务质量等级，默认为 1QoS 0（至多一次）消息发送后，不保证接收方一定收到，也不要求接收方确认。QoS 1（至少一次）消息至少被接收方成功接收一次，但可能重复。QoS 2（恰好一次）消息确保被接收方接收且仅接收一次，无重复。 */
  Qos?: number;
  /** 是否为保留消息，默认为 false，且仅支持发布到主题的消息设置为 true */
  Retain?: boolean;
}

declare interface PublishMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterCaCertificateRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** CA证书内容，自签CA可参考 [自定义 X.509 证书实现 “一机一证”](https://cloud.tencent.com/document/product/1778/114817) 签发自签CA */
  CaCertificate: string;
  /** 验证证书内容，可参考 [自定义 X.509 证书实现 “一机一证”](https://cloud.tencent.com/document/product/1778/114817) 手动注册CA证书章节 */
  VerificationCertificate: string;
  /** 证书格式，不传默认PEM格式，当前仅支持PEM格式 */
  Format?: string;
  /** 证书状态，不传默认ACTIVE状态 ACTIVE：激活 INACTIVE：未激活 */
  Status?: string;
}

declare interface RegisterCaCertificateResponse {
  /** mqtt实例ID */
  InstanceId?: string;
  /** ca 证书的序列号 */
  CaSn?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterDeviceCertificateRequest {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId: string;
  /** 设备证书内容，可参考 [使用 CA 证书生成服务端/客户端证书](https://cloud.tencent.com/document/product/1778/114817) 生成 */
  DeviceCertificate: string;
  /** 关联的CA证书SN */
  CaSn: string;
  /** 客户端ID，需要关联该证书的客户端ID。根据实际业务使用填写 */
  ClientId?: string;
  /** 证书格式，默认为PEM，当前仅支持PEM格式 */
  Format?: string;
  /** 客户端证书状态，默认激活状态（ACTIVE）ACTIVE：激活 INACTIVE：未激活 */
  Status?: string;
}

declare interface RegisterDeviceCertificateResponse {
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
  InstanceId?: string;
  /** 关联的CA证书SN */
  CaSn?: string;
  /** 设备证书的SN */
  DeviceCertificateSn?: string;
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
  /** 腾讯云MQTT实例ID，从 [DescribeInstanceList](https://cloud.tencent.com/document/api/1778/111029)接口或控制台获得。 */
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
  /** 创建一个MQTTHTTP认证器 {@link CreateHttpAuthenticatorRequest} {@link CreateHttpAuthenticatorResponse} */
  CreateHttpAuthenticator(data: CreateHttpAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHttpAuthenticatorResponse>;
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
  /** 根据订阅查询消息 {@link DescribeMessageByTopicRequest} {@link DescribeMessageByTopicResponse} */
  DescribeMessageByTopic(data: DescribeMessageByTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageByTopicResponse>;
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
  /** 修改MQTTHTTP认证器 {@link ModifyHttpAuthenticatorRequest} {@link ModifyHttpAuthenticatorResponse} */
  ModifyHttpAuthenticator(data: ModifyHttpAuthenticatorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHttpAuthenticatorResponse>;
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
