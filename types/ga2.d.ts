/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 加速地域信息 */
declare interface AcceleratorAreas {
  /** 加速地域。 */
  AccelerateRegion: string;
  /** 带宽。 */
  Bandwidth: number;
  /** 支持'BGP', '三网', '精品'，默认BGP。 */
  IspType?: string;
  /** 仅支持IPv4，默认是IPv4。 */
  IpVersion?: string;
  /** 加速地域ID。 */
  AcceleratorAreaId?: string;
  /** IP。 */
  IpAddress?: string[];
  /** IP信息。 */
  IpAddressInfoSet?: IpAddressInfoSet[] | null;
}

/** 可加速地域信息 */
declare interface AcceleratorRegionSet {
  /** 地域中文名称。 */
  Name?: string;
  /** 是否可用；0：不可用，1:可用。 */
  IsAvailable?: number;
  /** 地域信息。 */
  Region?: string;
  /** 地区名称。 */
  AreaName?: string;
  /** 是否中国地域。 */
  IsChinaMainland?: number;
  /** 支持IspType类型。 */
  SupportIspType?: string[];
  /** 是否腾讯地域。 */
  IsTencentRegion?: number;
}

/** 终端节点配置 */
declare interface EndpointConfigurations {
  /** 域名类型。可选值'Domain', 'PublicIp'。 */
  EndpointType: string;
  /** 域名。 */
  EndpointService: string;
  /** 权重。 */
  Weight: number;
  /** 健康检查状态；HEALTH：健康；UNHEALTH：不健康。 */
  HealthCheckStatus?: string;
}

/** 终端节点组配置 */
declare interface EndpointGroupConfiguration {
  /** 名称，最大长度不能超过60个字节。 */
  Name: string;
  /** 地域。 */
  EndpointGroupRegion: string;
  /** 终端节点配置。 */
  EndpointConfigurations: EndpointConfigurations[];
  /** 检查协议。支持&#39;TCP&#39;, &#39;HTTP&#39;, &#39;HTTPS&#39;, &#39;PING&#39;, &#39;CUSTOM&#39;。 */
  CheckType?: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
  /** 检查端口。 */
  CheckPort?: string;
  /** 检查内容。 */
  ContextType?: string;
  /** 检查请求。 */
  CheckSendContext?: string;
  /** 检查返回结果。 */
  CheckRecvContext?: string;
  /** 是否开启健康检查。 */
  EnableHealthCheck?: boolean;
  /** 响应超时时间。 */
  ConnectTimeout?: number;
  /** 健康检查间隔。 */
  HealthCheckInterval?: number;
  /** 不健康阀值。 */
  UnhealthyThreshold?: number;
  /** 健康阈值。 */
  HealthyThreshold?: number;
  /** 回源协议。 */
  ForwardProtocol?: string;
  /** 检查域名。 */
  CheckDomain?: string;
  /** 检查URL。 */
  CheckPath?: string;
  /** 请求方式。 */
  CheckMethod?: string;
  /** 状态检测码。 */
  StatusMask?: string[];
  /** 端口映射。 */
  PortOverrides?: PortOverride[];
  /** 运用商类型。 */
  IspType?: string;
  /** HPPTS加密算法套件 */
  CipherPolicyId?: string;
}

/** 终端节点组信息 */
declare interface EndpointGroupConfigurationSet {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId?: string;
  /** 监听器实例ID。 */
  ListenerId?: string;
  /** 终端节点组ID。 */
  EndpointGroupId?: string;
  /** 名称。 */
  Name?: string;
  /** 地域。 */
  EndpointGroupRegion?: string;
  /** 描述。 */
  Description?: string;
  /** 终端节点信息。 */
  EndpointConfigurations?: EndpointConfigurations[];
  /** 是否开启健康检查。 */
  EnableHealthCheck?: boolean;
  /** 响应超时时间。 */
  ConnectTimeout?: number;
  /** 健康检查间隔。 */
  HealthCheckInterval?: number;
  /** 不健康阈值。 */
  UnhealthyThreshold?: number;
  /** 健康阈值。 */
  HealthyThreshold?: number;
  /** 检查协议。 */
  CheckType?: string;
  /** 检查端口。 */
  CheckPort?: number;
  /** 检查内容。 */
  ContextType?: string;
  /** 检查请求。 */
  CheckSendContext?: string;
  /** 检查返回结果。 */
  CheckRecvContext?: string;
  /** 检查域名。 */
  CheckDomain?: string;
  /** 检查URL。 */
  CheckPath?: string;
  /** 请求方式。 */
  CheckMethod?: string;
  /** 状态检测码。 */
  StatusMask?: string[];
  /** 终端节点组类型。 */
  EndpointGroupType?: string;
  /** 回源协议。 */
  ForwardProtocol?: string;
  /** 端口映射信息。 */
  PortOverrides?: PortOverride[];
  /** 自定义终端节点组是否绑定七层转发规则。 */
  VirtualExistForwardingRuleFlag?: boolean;
  /** 出终端节点组公网IP。 */
  OriginPublicIps?: string[];
  /** 运营商类型；中国移动(CMCC)，中国联通(CUCC)，中国电信(CTCC)。 */
  IspType?: string;
  /** HPPTS加密算法套件 */
  CipherPolicyId?: string;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。当值类型为布尔类型时，可直接取值为字符串"TRUE"或 "FALSE"。 */
  Values: string[];
}

/** 七层转发规则信息 */
declare interface ForwardingRuleSet {
  /** 七层转发规则条件信息。 */
  RuleCondition?: RuleCondition[];
  /** 七层转发规则行为信息。 */
  RuleAction?: RuleAction[];
  /** 是否开启回源Sni。 */
  EnableOriginSni?: boolean;
  /** 回源Sni。 */
  OriginSni?: string;
  /** 回源Herder信息。 */
  OriginHeaders?: OriginHeader[];
  /** 回源Host。 */
  OriginHost?: string;
  /** 全球加速实例ID。 */
  GlobalAcceleratorId?: string;
  /** 监听器ID。 */
  ListenerId?: string;
  /** 七层转发策略ID。 */
  ForwardingPolicyId?: string;
  /** 七层转发规则ID。 */
  ForwardingRuleId?: string;
}

/** 全球加速实例信息 */
declare interface GlobalAcceleratorSet {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId?: string;
  /** 全球加速实例名称。 */
  Name?: string;
  /** 全球加速实例描述。 */
  Description?: string;
  /** 全球加速实例创建时间。 */
  CreateTime?: string;
  /** 全球加速实例状态。 */
  State?: string;
  /** 全球加速实例付费类型。 */
  InstanceChargeType?: string;
  /** 全球加速实例DdosId。 */
  DdosId?: string;
  /** 所属加速实例监听器个数。 */
  ListenerCounts?: number;
  /** 所属加速实例加速地域个数。 */
  AcceleratorAreaCounts?: number;
  /** 全球加速实例状态。 */
  Status?: string;
  /** 域名。 */
  Cname?: string;
  /** 跨境类型；HighQuality（精品跨境）、Unicom（联通跨境）、NotAvailable（未开通）。 */
  CrossBorderType?: string | null;
  /** 标签信息。 */
  TagSet?: Tag[];
}

/** 加速地域公网IP信息 */
declare interface IpAddressInfoSet {
  /** IP地址。 */
  IpAddress?: string;
  /** IP类型。 */
  IspType?: string;
}

/** 监听器信息 */
declare interface ListenerSet {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId?: string;
  /** 监听器ID。 */
  ListenerId?: string;
  /** 监听器名称。 */
  Name?: string;
  /** 监听器描述。 */
  Description?: string;
  /** 协议。 */
  Protocol?: string;
  /** 端口范围。 */
  PortRanges?: PortRanges;
  /** 是否打开七层获取源IP方式。 */
  XForwardedForRealIp?: boolean;
  /** 开启会话保持。 */
  ClientAffinity?: string;
  /** 会话保持时间。 */
  ClientAffinityTime?: number;
  /** SSL解析方式。 */
  CertificationType?: string;
  /** 服务器证书。 */
  ServerCertificates?: string[];
  /** 客户端证书。 */
  ClientCaCertificates?: string[];
  /** TLS密码套件包。 */
  CipherPolicyId?: string;
  /** HTTP版本。 */
  HttpVersion?: string;
  /** 请求超时时间。 */
  RequestTimeout?: number;
  /** 创建时间。 */
  CreateTime?: string;
  /** 监听路由类型。 */
  ListenerType?: string;
  /** 监听器状态。 */
  Status?: string;
  /** 所属监听器终端节点组个数。 */
  EndpointGroupCounts?: number;
  /** 四层获取源IP方式。 */
  GetRealIpType?: string;
  /** 连接超时时间。 */
  IdleTimeout?: number;
}

/** 回源Header信息 */
declare interface OriginHeader {
  /** 键。 */
  Key: string | null;
  /** 值。 */
  Value: string | null;
}

/** 端口映射 */
declare interface PortOverride {
  /** 监听端口。 */
  ListenerPort: number | null;
  /** 映射端口。 */
  EndpointPort: number | null;
}

/** 端口范围 */
declare interface PortRanges {
  /** 起始端口。 */
  FromPort: number | null;
  /** 终点端口。 */
  ToPort: number | null;
}

/** 七层转发规则行为信息 */
declare interface RuleAction {
  /** 七层转发规则行为类型 */
  RuleActionType: string | null;
  /** 七层转发规则行为值 */
  RuleActionValue?: string | null;
}

/** 七层转发规则条件信息 */
declare interface RuleCondition {
  /** 七层转发规则条件类型 */
  RuleConditionType: string | null;
  /** 七层转发规则条件值 */
  RuleConditionValue: string[] | null;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

declare interface CreateAccelerateAreasRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 加速地域信息。 */
  AcceleratorAreas: AcceleratorAreas[];
}

declare interface CreateAccelerateAreasResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEndpointGroupRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 终端节点组类型。支持VIRTUAL，DEFAULT。 */
  EndpointGroupType: string;
  /** 终端节点组配置。 */
  EndpointGroupConfiguration: EndpointGroupConfiguration;
}

declare interface CreateEndpointGroupResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 终端节点组实例ID。 */
  EndpointGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateForwardingRuleRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 策略ID。 */
  ForwardingPolicyId: string;
  /** 七层转发规则条件信息。 */
  RuleConditions: RuleCondition[];
  /** 七层转发规则行为信息。 */
  RuleActions: RuleAction[];
  /** 回源Header信息。 */
  OriginHeaders?: OriginHeader[];
  /** 是否开启回源sni。 */
  EnableOriginSni?: boolean;
  /** 回源sni。 */
  OriginSni?: string;
  /** 回源host。 */
  OriginHost?: string;
}

declare interface CreateForwardingRuleResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 七层转发规则ID。 */
  ForwardingRuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGlobalAcceleratorRequest {
  /** 名称，最大长度不能超过60个字节。 */
  Name: string;
  /** 计费模式，PREPAID：表示预付费，即包年包月，POSTPAID：表示后付费，即按量计费。默认：POSTPAID。当前仅支持后付费。 */
  InstanceChargeType?: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
  /** 跨境类型；HighQuality：精品BGP-IP跨境；Unicom：联通专线跨境。 */
  CrossBorderType?: string;
  /** 此Flag代表签署跨境服务承诺书。当使用跨境服务时候，此字段必传。True：代表签署。 */
  CrossBorderPromiseFlag?: boolean;
  /** 标签信息 */
  Tags?: Tag[];
}

declare interface CreateGlobalAcceleratorResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 全球加速实例ID。 */
  GlobalAcceleratorId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateListenerRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 名称，最大长度不能超过60个字节。 */
  Name: string;
  /** 端口范围。 */
  PortRanges: PortRanges;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
  /** 监听类型，默认为智能路由。 */
  ListenerType?: string;
  /** 协议，默认为TCP。 */
  Protocol?: string;
  /** 连接空闲等待时间。 */
  IdleTimeout?: number;
  /** 四层获取源IP方式，支持&#39;TOA&#39;, &#39;ProxyProtocol&#39;。 */
  GetRealIpType?: string;
  /** 是否开启会话保持。 */
  ClientAffinity?: string;
  /** 请求超时时间。 */
  RequestTimeout?: number;
  /** 是否打开七层获取源IP方式。 */
  XForwardedForRealIp?: boolean;
  /** 解析方式。UNIDIRECTIONAL：双向。MUTUAL：单向。 */
  CertificationType?: string;
  /** 加密算法套件。 */
  CipherPolicyId?: string;
  /** 服务器证书。 */
  ServerCertificates?: string[];
  /** 客户端证书。 */
  ClientCaCertificates?: string[];
}

declare interface CreateListenerResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 监听器ID。 */
  ListenerId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccelerateAreasRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 加速地域ID。 */
  AcceleratorAreaIds: string[];
}

declare interface DeleteAccelerateAreasResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEndpointGroupsRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 终端节点组ID。 */
  EndpointGroupIds: string[];
}

declare interface DeleteEndpointGroupsResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteForwardingRuleRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 策略ID。 */
  ForwardingPolicyId: string;
  /** 七层转发规则ID。 */
  ForwardingRuleId: string;
}

declare interface DeleteForwardingRuleResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGlobalAcceleratorRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
}

declare interface DeleteGlobalAcceleratorResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteListenerRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
}

declare interface DeleteListenerResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccelerateAreasRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 偏移量。 */
  Offset?: number;
  /** 符合条件实例数量。 */
  Limit?: number;
}

declare interface DescribeAccelerateAreasResponse {
  /** 加速地域信息。 */
  AccelerateAreaSet?: AcceleratorAreas[];
  /** 实例个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccelerateRegionsRequest {
}

declare interface DescribeAccelerateRegionsResponse {
  /** 加速地域信息。 */
  AcceleratorRegionSet?: AcceleratorRegionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderSettlementRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 加速地域。 */
  AccelerateRegion: string;
  /** 终端节点组地域。 */
  EndpointGroupRegion: string;
  /** 账单年月时间。 */
  SettlementMonth: number;
}

declare interface DescribeCrossBorderSettlementResponse {
  /** 流量用量，单位是GB；精度为保留小数点6位。 */
  Traffic?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEndpointGroupsRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 过滤条件。 endpoint-group-id- String -（过滤条件）终端节点组实例ID。endpoint-group-type- String -（过滤条件）终端节点组实例类型。 */
  Filters?: Filter[];
}

declare interface DescribeEndpointGroupsResponse {
  /** 符合条件的终端节点组。 */
  EndpointGroupConfigurationSet?: EndpointGroupConfigurationSet[];
  /** 符合条件的实例个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeForwardingRuleRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 七层转发规则ID。 */
  ForwardingPolicyId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeForwardingRuleResponse {
  /** 符合条件的规则信息。 */
  ForwardingRuleSet?: ForwardingRuleSet[];
  /** 符合条件的实例个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGlobalAcceleratorsRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 过滤条件。global-accelerator-id - String -（过滤条件）全球加速实例ID。 global-accelerator-state - String -（过滤条件）全球加速实例状态。 */
  Filters?: Filter[];
}

declare interface DescribeGlobalAcceleratorsResponse {
  /** 符合条件的全球加速实例。 */
  GlobalAcceleratorSet?: GlobalAcceleratorSet[];
  /** 符合条件的实例个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenersRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 过滤条件。 listener-id- String -（过滤条件）监听器实例ID。 */
  Filters?: Filter[];
}

declare interface DescribeListenersResponse {
  /** 符合条件的监听器实例。 */
  ListenerSet?: ListenerSet[];
  /** 符合条件的实例个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccelerateAreasRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 加速地域信息。 */
  AcceleratorAreas: AcceleratorAreas[];
}

declare interface ModifyAccelerateAreasResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEndpointGroupRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 终端节点组ID。 */
  EndpointGroupId: string;
  /** 终端节点配置。 */
  EndpointConfigurations?: EndpointConfigurations[];
  /** 名称，最大长度不能超过60个字节。 */
  Name?: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
  /** 是否开启健康检查。 */
  EnableHealthCheck?: boolean;
  /** 响应超时时间。 */
  ConnectTimeout?: number;
  /** 健康检查间隔。 */
  HealthCheckInterval?: number;
  /** 不健康阀值。 */
  UnhealthyThreshold?: number;
  /** 健康阀值。 */
  HealthyThreshold?: number;
  /** 检查协议。 */
  CheckType?: string;
  /** 检查端口。 */
  CheckPort?: number;
  /** 检查内容。 */
  ContextType?: string;
  /** 检查请求。 */
  CheckSendContext?: string;
  /** 检查返回结果。 */
  CheckRecvContext?: string;
  /** 检查域名。 */
  CheckDomain?: string;
  /** 检查URL。 */
  CheckPath?: string;
  /** 请求方式。 */
  CheckMethod?: string;
  /** 状态检测码。 */
  StatusMask?: string[];
  /** 回源协议。 */
  ForwardProtocol?: string;
  /** 端口映射。 */
  PortOverrides?: PortOverride[];
  /** HPPTS加密算法套件 */
  CipherPolicyId?: string;
}

declare interface ModifyEndpointGroupResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyForwardingRuleRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 策略ID。 */
  ForwardingPolicyId: string;
  /** 七层转发规则ID。 */
  ForwardingRuleId: string;
  /** 七层转发规则条件信息。 */
  RuleConditions?: RuleCondition[];
  /** 七层转发规则行为信息。 */
  RuleActions?: RuleAction[];
  /** 回源Header信息。 */
  OriginHeaders?: OriginHeader[];
  /** 是否开启回源sni。 */
  EnableOriginSni?: boolean;
  /** 回源sni。 */
  OriginSni?: string;
  /** 回源host。 */
  OriginHost?: string;
}

declare interface ModifyForwardingRuleResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGlobalAcceleratorRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 名称，最大长度不能超过60个字节。 */
  Name?: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
  /** 跨境类型。 */
  CrossBorderType?: string;
  /** 代表是否跨境服务承诺。 */
  CrossBorderPromiseFlag?: boolean;
}

declare interface ModifyGlobalAcceleratorResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyListenerRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 名称，最大长度不能超过60个字节。 */
  Name?: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
  /** 连接空闲等待时间。 */
  IdleTimeout?: number;
  /** 是否开启会话保持。 */
  ClientAffinity?: string;
  /** 会话保持时间。 */
  ClientAffinityTime?: number;
  /** 请求超时时间。 */
  RequestTimeout?: number;
  /** 是否打开七层获取源IP方式。 */
  XForwardedForRealIp?: boolean;
  /** 解析方式。UNIDIRECTIONAL：双向。MUTUAL：单向。 */
  CertificationType?: string;
  /** 加密算法套件。 */
  CipherPolicyId?: string;
  /** 服务器证书。 */
  ServerCertificates?: string[];
  /** 客户端证书。 */
  ClientCaCertificates?: string[];
  /** 四层获取源IP方式。 */
  GetRealIpType?: string;
}

declare interface ModifyListenerResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ga2 全球加速} */
declare interface Ga2 {
  (): Versions;
  /** 创建加速地域 {@link CreateAccelerateAreasRequest} {@link CreateAccelerateAreasResponse} */
  CreateAccelerateAreas(data: CreateAccelerateAreasRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccelerateAreasResponse>;
  /** 创建终端节点组 {@link CreateEndpointGroupRequest} {@link CreateEndpointGroupResponse} */
  CreateEndpointGroup(data: CreateEndpointGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEndpointGroupResponse>;
  /** 创建七层转发规则 {@link CreateForwardingRuleRequest} {@link CreateForwardingRuleResponse} */
  CreateForwardingRule(data: CreateForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateForwardingRuleResponse>;
  /** 创建全球加速实例 {@link CreateGlobalAcceleratorRequest} {@link CreateGlobalAcceleratorResponse} */
  CreateGlobalAccelerator(data: CreateGlobalAcceleratorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGlobalAcceleratorResponse>;
  /** 创建监听器 {@link CreateListenerRequest} {@link CreateListenerResponse} */
  CreateListener(data: CreateListenerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateListenerResponse>;
  /** 删除加速地域 {@link DeleteAccelerateAreasRequest} {@link DeleteAccelerateAreasResponse} */
  DeleteAccelerateAreas(data: DeleteAccelerateAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccelerateAreasResponse>;
  /** 删除终端节点组 {@link DeleteEndpointGroupsRequest} {@link DeleteEndpointGroupsResponse} */
  DeleteEndpointGroups(data: DeleteEndpointGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEndpointGroupsResponse>;
  /** 删除七层转发规则 {@link DeleteForwardingRuleRequest} {@link DeleteForwardingRuleResponse} */
  DeleteForwardingRule(data: DeleteForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteForwardingRuleResponse>;
  /** 删除全球加速实例 {@link DeleteGlobalAcceleratorRequest} {@link DeleteGlobalAcceleratorResponse} */
  DeleteGlobalAccelerator(data: DeleteGlobalAcceleratorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGlobalAcceleratorResponse>;
  /** 删除监听器 {@link DeleteListenerRequest} {@link DeleteListenerResponse} */
  DeleteListener(data: DeleteListenerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenerResponse>;
  /** 查询加速地域 {@link DescribeAccelerateAreasRequest} {@link DescribeAccelerateAreasResponse} */
  DescribeAccelerateAreas(data: DescribeAccelerateAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccelerateAreasResponse>;
  /** 查询可选加速区域 {@link DescribeAccelerateRegionsRequest} {@link DescribeAccelerateRegionsResponse} */
  DescribeAccelerateRegions(data?: DescribeAccelerateRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccelerateRegionsResponse>;
  /** 查询跨境账单 {@link DescribeCrossBorderSettlementRequest} {@link DescribeCrossBorderSettlementResponse} */
  DescribeCrossBorderSettlement(data: DescribeCrossBorderSettlementRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderSettlementResponse>;
  /** 查询终端节点组 {@link DescribeEndpointGroupsRequest} {@link DescribeEndpointGroupsResponse} */
  DescribeEndpointGroups(data: DescribeEndpointGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEndpointGroupsResponse>;
  /** 查看七层转发规则 {@link DescribeForwardingRuleRequest} {@link DescribeForwardingRuleResponse} */
  DescribeForwardingRule(data: DescribeForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeForwardingRuleResponse>;
  /** 查询全球加速实例 {@link DescribeGlobalAcceleratorsRequest} {@link DescribeGlobalAcceleratorsResponse} */
  DescribeGlobalAccelerators(data?: DescribeGlobalAcceleratorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGlobalAcceleratorsResponse>;
  /** 查询监听器 {@link DescribeListenersRequest} {@link DescribeListenersResponse} */
  DescribeListeners(data: DescribeListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenersResponse>;
  /** 修改加速地域 {@link ModifyAccelerateAreasRequest} {@link ModifyAccelerateAreasResponse} */
  ModifyAccelerateAreas(data: ModifyAccelerateAreasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccelerateAreasResponse>;
  /** 修改终端节点组 {@link ModifyEndpointGroupRequest} {@link ModifyEndpointGroupResponse} */
  ModifyEndpointGroup(data: ModifyEndpointGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEndpointGroupResponse>;
  /** 修改七层转发规则 {@link ModifyForwardingRuleRequest} {@link ModifyForwardingRuleResponse} */
  ModifyForwardingRule(data: ModifyForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyForwardingRuleResponse>;
  /** 修改全球加速实例 {@link ModifyGlobalAcceleratorRequest} {@link ModifyGlobalAcceleratorResponse} */
  ModifyGlobalAccelerator(data: ModifyGlobalAcceleratorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGlobalAcceleratorResponse>;
  /** 修改监听器 {@link ModifyListenerRequest} {@link ModifyListenerResponse} */
  ModifyListener(data: ModifyListenerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyListenerResponse>;
}

export declare type Versions = ["2025-01-15"];

export default Ga2;
