/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 加速地域信息 */
declare interface AcceleratorAreas {
  /** 加速地域。 */
  AccelerateRegion: string;
  /** 带宽。 */
  Bandwidth: number;
  /** 支持'BGP', 'QUALITY_BGP', 'STATIC_IP'，默认BGP。枚举值：BGP： BGPSTATIC_IP： 三网QUALITY_BGP： 精品BGP */
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

/** Acl信息 */
declare interface AclEntries {
  /** 协议。入参限制：支持配置'TCP', 'UDP', 'ALL'； */
  Protocol: string;
  /** 端口。 */
  Port: string;
  /** 网段。 */
  SourceCidrBlock: string;
  /** 执行动作。入参限制：支持配置'ACCEPT', 'DROP'； */
  Policy: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
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
  /** 终端节点组名称。最大长度不能超过128个字节。必须以字母（a-z, A-Z）或中文字符开头。 */
  Name: string;
  /** 终端节点组所在地域。 */
  EndpointGroupRegion: string;
  /** 终端节点配置。 */
  EndpointConfigurations: EndpointConfigurations[];
  /** 检查协议。支持配置'TCP', 'HTTP', 'PING', 'CUSTOM'。枚举值：TCP： 当终端节点组所在监听器协议是TCP时，可以选择检查协议为TCP。HTTP： 当终端节点组所在监听器协议是HTTP或HTTPS时，可以选择检查协议为HTTP。PING： 当终端节点组所在监听器协议是UDP时，可以选择检查协议为PING。CUSTOM： 当终端节点组所在监听器协议是UDP或TCP时，可以选择检查协议为CUSTOM。当开启健康检查时此字段必传。 */
  CheckType?: string;
  /** 描述信息。默认值：默认值为空，代表不配置描述信息。最大长度不能超过100个字节。 */
  Description?: string;
  /** 检查端口。入参限制：范围是1-65535。当CheckType为CUSTOM时候，此字段必传。 */
  CheckPort?: string;
  /** 检查内容。支持配置'TEXT'。枚举值：TEXT： 文本内容。当CheckType为CUSTOM时候，此字段必传。 */
  ContextType?: string;
  /** 检查请求。入参限制：字节长度要在1-500范围内。当CheckType为CUSTOM时候，此字段必传。 */
  CheckSendContext?: string;
  /** 检查返回结果。入参限制：字节长度要在1-500范围内。当CheckType为CUSTOM时候，此字段必传。 */
  CheckRecvContext?: string;
  /** 是否开启健康检查。默认值：False */
  EnableHealthCheck?: boolean;
  /** 响应超时时间。取值范围：[1, 100]默认值：2开启健康检查时，此字段必传。 */
  ConnectTimeout?: number;
  /** 健康检查间隔。取值范围：[5, 300]默认值：30开启健康检查，此字段必传。 */
  HealthCheckInterval?: number;
  /** 不健康阀值。取值范围：[1, 10]默认值：3开启健康检查，此字段必传。 */
  UnhealthyThreshold?: number;
  /** 健康阈值。取值范围：[1, 10]默认值：3开启健康检查，此字段必传。 */
  HealthyThreshold?: number;
  /** 回源协议。支持配置'HTTP', 'HTTPS'。枚举值：HTTP： HTTP回源；当终端节点组所在监听器协议是HTTP或HTTPS时可以配置HTTP。HTTPS： HTTPS回源；当终端节点组所在监听器协议是HTTPS时可以配置HTTPS。当终端节点组所在监听器协议为HTTP或HTTPS时候，此字段必传。 */
  ForwardProtocol?: string;
  /** 检查域名。入参限制：字节长度范围是3-80。当CheckType是HTTP时，此字段必传。 */
  CheckDomain?: string;
  /** 检查URL。参数格式：必须满足正则：^[a-zA-Z0-9_.\-\/]{1,80}$当CheckType是HTTP时，此字段必传。 */
  CheckPath?: string;
  /** 请求方式。支持配置'GET', 'HEAD'。枚举值：GET： 请求方式为GET。HEAD： 请求方式为HEAD。当CheckType是HTTP时，此字段必传。 */
  CheckMethod?: string;
  /** 状态检测码。支持配置'http_2xx', 'http_3xx', 'http_4xx', 'http_5xx'。枚举值：http_2xx： 2开头的http code。http_3xx： 3开头的http code。http_4xx： 4开头的http code。http_5xx： 5开头的http code。当CheckType是HTTP时，此字段必传。 */
  StatusMask?: string[];
  /** 端口映射。入参限制：七层支持1个端口映射，四层支持最多30个端口映射。 */
  PortOverrides?: PortOverride[];
  /** 运营商类型。支持配置'CMCC', 'CTCC', 'CUCC'。枚举值：CMCC： 中国移动CUCC： 中国联通CTCC： 中国电信当终端节点组地域为三网地域时，此字段必传。 */
  IspType?: string;
  /** HPPTS加密算法套件；支持配置'tls_policy_1.0-2', 'tls_policy_1.1-2', 'tls_policy_1.2', 'tls_policy_1.2_strict', 'tls_policy_1.2_strict-1.3'；枚举值：tls_policy_1.0-2： 加密算法套件。tls_policy_1.1-2： 加密算法套件。tls_policy_1.2： 加密算法套件。tls_policy_1.2_strict： 加密算法套件。tls_policy_1.2_strict-1.3： 加密算法套件。当回源协议为HTTPS，此字段必传。 */
  CipherPolicyId?: string;
  /** 回源协议。支持配置'HTTP/1.1', 'HTTP/2'。枚举值：HTTP/1.1： 版本HTTP/1.1HTTP/2： 版本HTTP/2当回源协议为HTTPS时，此字段必传。 */
  HttpVersion?: string;
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
  /** 仅HTTPS回源协议支持选择['HTTP/1.1', 'HTTP/2']枚举值：HTTP/1.1： 版本HTTP/1.1HTTP/2： 版本HTTP/2 */
  HttpVersion?: string;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。当值类型为布尔类型时，可直接取值为字符串"TRUE"或 "FALSE"。 */
  Values: string[];
}

/** 七层转发策略信息 */
declare interface ForwardingPolicySet {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId?: string;
  /** 监听器ID。 */
  ListenerId?: string;
  /** 策略ID。 */
  ForwardingPolicyId?: string;
  /** 域名。 */
  Host?: string;
  /** 是否为默认域名。 */
  DefaultHostFlag?: boolean;
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

/** 隐藏Header */
declare interface HideResponseHeaders {
  /** key入参限制：长度不能超过128如果字符串包含$，那仅能配置'$remote_addr', '$remote_port'，否则不支持。 */
  Key: string;
  /** value当前传''值即可。 */
  Value: string;
}

/** 加速地域公网IP信息 */
declare interface IpAddressInfoSet {
  /** IP地址。 */
  IpAddress?: string;
  /** IP类型。 */
  IspType?: string;
  /** Ddos类型 */
  DdosProtectionType?: string;
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
  /** 键。参数格式：1、字符串只包含可打印的ASCII字符 2、不能包含这些字符()<>@,;:\"/[ ]?={ }入参限制：长度在1-40。 */
  Key: string | null;
  /** 值。入参限制：长度不能超过128如果字符串包含$，那仅能配置'$remote_addr', '$remote_port'，否则不支持。 */
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

/** 响应Header */
declare interface ResponseHeaders {
  /** key参数格式：1、字符串只包含可打印的ASCII字符 2、不能包含这些字符()<>@,;:\"/[ ]?={ }入参限制：长度在1-40。 */
  Key: string;
  /** value入参限制：长度不能超过128如果字符串包含$，那仅能配置'$remote_addr', '$remote_port'，否则不支持。 */
  Value: string;
}

/** 七层转发规则行为信息 */
declare interface RuleAction {
  /** 七层转发规则行为类型枚举值：ForwardGroup： 转发策略为转发至终端节点组。Drop： 转发策略为丢弃。 */
  RuleActionType: string | null;
  /** 七层转发规则行为值当RuleActionType是Drop时，此字段不用传；当RuleActionType是ForwardGroup时，此字段必传，需要填写的是自定义终端节点组ID， 不支持配置默认终端节点组。 */
  RuleActionValue?: string | null;
}

/** 七层转发规则条件信息 */
declare interface RuleCondition {
  /** 七层转发规则条件类型枚举值：Path： Path */
  RuleConditionType: string | null;
  /** 七层转发规则条件值参数格式：格式必须满足正则表达：^[a-zA-Z0-9_.-/]{1,80}$数组长度不能超过1。 */
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
  /** 加速地域信息。一次最多创建10组加速地域。 */
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
  /** 终端节点组类型。枚举值：VIRTUAL： 自定义终端节点组DEFAULT： 默认终端节点组 */
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

declare interface CreateForwardingPolicyRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 域名。参数格式：格式，必须满足正则表达式：^(a-z0-9?.)+[a-z]{2,}$入参限制：长度范围是1-80。 */
  Host: string;
}

declare interface CreateForwardingPolicyResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 七层转发策略ID。 */
  ForwardingPolicyId?: string;
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
  /** 七层转发规则条件信息。数组长度最大不能超过1。 */
  RuleConditions: RuleCondition[];
  /** 七层转发规则行为信息。数组长度最大不能超过1。 */
  RuleActions: RuleAction[];
  /** 回源Header信息。数组长度最大不能超过5。当RuleActions.RuleActionType是ForwardGroup时，此字段必传。 */
  OriginHeaders?: OriginHeader[];
  /** 是否开启回源sni。默认值：False当RuleActions.RuleActionType是ForwardGroup时，此字段必传。 */
  EnableOriginSni?: boolean;
  /** 回源sni。入参限制：长度不能超过80。当EnableOriginSni为True时，此字段必传。当RuleActions.RuleActionType是ForwardGroup时，此字段必传。 */
  OriginSni?: string;
  /** 回源host。入参限制：长度不超过80。当RuleActions.RuleActionType是ForwardGroup时，此字段必传。 */
  OriginHost?: string;
  /** 源站响应头数组长度不超过5。可以传空数组，代表清空配置。 */
  ResponseHeaders?: ResponseHeaders[];
  /** 删除源站响应头数组长度不超过5。可以传空数组，代表清空配置。 */
  HideResponseHeaders?: HideResponseHeaders[];
}

declare interface CreateForwardingRuleResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 七层转发规则ID。 */
  ForwardingRuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGlobalAcceleratorAclPolicyRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 默认行为。枚举值：ACCEPT： 默认准许所有流量访问通道DROP： 默认拒绝所有流量访问通道 */
  DefaultAction: string;
}

declare interface CreateGlobalAcceleratorAclPolicyResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 访问控制策略ID。 */
  GlobalAcceleratorAclPolicyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGlobalAcceleratorAclRuleRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 安全策略ID */
  GlobalAcceleratorAclPolicyId: string;
  /** Acl信息。 */
  AclEntries: AclEntries[];
}

declare interface CreateGlobalAcceleratorAclRuleResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** ACL规则ID。 */
  GlobalAcceleratorAclRuleIds?: string[];
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

declare interface CreateListenerAdditionalCertRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 证书ID。当前只能添加服务器证书。 */
  AdditionalCertificates: string[];
}

declare interface CreateListenerAdditionalCertResponse {
  /** 任务ID。 */
  TaskId?: string;
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
  /** 监听类型，默认为智能路由。枚举值：Standard： 智能路由。 */
  ListenerType?: string;
  /** 协议，默认为TCP。支持配置'TCP', 'UDP', 'HTTP', 'HTTPS'。 */
  Protocol?: string;
  /** 连接空闲等待时间。1、HTTP/HTTPS监听器，默认值为15，支持范围为1-60；2、TCP监听器，默认值为900，支持范围为10-900；3、UDP监听器，默认值为20，支持范围为10-20； */
  IdleTimeout?: number;
  /** 四层获取源IP方式，支持'TOA', 'ProxyProtocol', 'ProxyProtocolV2'。需要开启四层获取源IP方式，才填写此参数。 */
  GetRealIpType?: string;
  /** 是否开启会话保持。支持配置'Open', 'Close'。枚举值：Open： 开启。Close： 关闭。 */
  ClientAffinity?: string;
  /** 请求超时时间。取值范围：[1, 180]默认值：60当HTTPS监听器时才可配置此参数。 */
  RequestTimeout?: number;
  /** 是否打开七层获取源IP方式。 */
  XForwardedForRealIp?: boolean;
  /** 解析方式。枚举值：UNIDIRECTIONAL： 双向。U： 单向。HTTPS监听器，此字段必传。 */
  CertificationType?: string;
  /** 加密算法套件。支持配置'tls_policy_1.0-2', 'tls_policy_1.1-2', 'tls_policy_1.2', 'tls_policy_1.2_strict', 'tls_policy_1.2_strict-1.3'。 */
  CipherPolicyId?: string;
  /** 服务器证书。当是HTTPS监听器时，此字段必传。 */
  ServerCertificates?: string[];
  /** 客户端证书。当时HTTPS监听器且开启双向认证时，此字段必传。 */
  ClientCaCertificates?: string[];
  /** HTTPS监听器支持选择版本枚举值：HTTP/1.1： HTTP/1.1HTTP/2： HTTP/2 */
  HttpVersion?: string;
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

declare interface DeleteForwardingPolicyRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 策略ID。 */
  ForwardingPolicyId: string;
}

declare interface DeleteForwardingPolicyResponse {
  /** 异步任务ID。 */
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

declare interface DeleteGlobalAcceleratorAclPolicyRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 访问控制策略ID。 */
  GlobalAcceleratorAclPolicyId: string;
}

declare interface DeleteGlobalAcceleratorAclPolicyResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGlobalAcceleratorAclRuleRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 安全策略ID */
  GlobalAcceleratorAclPolicyId: string;
  /** Acl规则ID。 */
  GlobalAcceleratorAclRuleIds: string[];
}

declare interface DeleteGlobalAcceleratorAclRuleResponse {
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

declare interface DeleteListenerAdditionalCertRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 证书ID。 */
  AdditionalCertificates: string[];
}

declare interface DeleteListenerAdditionalCertResponse {
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
  /** 偏移量。默认为0。 */
  Offset?: number;
  /** 符合条件实例数量。默认为20，最大200。 */
  Limit?: number;
  /** 过滤条件。 accelerate-region- String -（过滤条件）终端节点组地域。 */
  Filters?: Filter[];
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
  /** 返回数量，默认为10，最大值为10。 */
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

declare interface DescribeForwardingPolicyRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeForwardingPolicyResponse {
  /** 符合条件的策略信息。 */
  ForwardingPolicySet?: ForwardingPolicySet[];
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
  /** 返回数量。取值范围：[1, 200]默认值：20 */
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

declare interface DescribeTaskResultRequest {
  /** 异步任务ID。 */
  TaskId: string;
}

declare interface DescribeTaskResultResponse {
  /** 任务状态。 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccelerateAreasRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 加速地域信息。入参限制：数组长度不能超过10。 */
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
  /** 名称。入参限制：最大长度不能超过128个字节。以大小写字母或中文开头。 */
  Name?: string;
  /** 描述信息。入参限制：最大长度不能超过100个字节。 */
  Description?: string;
  /** 是否开启健康检查。 */
  EnableHealthCheck?: boolean;
  /** 响应超时时间。取值范围：[1, 100]当开启健康检查时候，此参数必传。 */
  ConnectTimeout?: number;
  /** 健康检查间隔。取值范围：[5, 300]当开启健康检查时，此参数必传。 */
  HealthCheckInterval?: number;
  /** 不健康阀值。取值范围：[1, 10]当开启健康检查时，此字段必传。 */
  UnhealthyThreshold?: number;
  /** 健康阀值。取值范围：[1, 10]当开启健康检查时，此字段必传。 */
  HealthyThreshold?: number;
  /** 检查协议。入参限制：支持填写：'TCP', 'HTTP', 'PING', 'CUSTOM'。1、当监听器是TCP时，可以选CUSTOM+TCP。2、当监听器是UDP时，可以选PING+CUSTOM。3、当监听器是HTTP或HTTPS时，可以选HTTP。 */
  CheckType?: string;
  /** 检查端口。取值范围：[1, 65535]当CheckType是CUSTOM时，此字段必传。 */
  CheckPort?: number;
  /** 检查内容。入参限制：仅支持TEXT。当CheckType是CUSTOM时，此字段必传。 */
  ContextType?: string;
  /** 检查请求。入参限制：长度范围在1-500。当CheckType是CUSTOM时，此字段必传。 */
  CheckSendContext?: string;
  /** 检查返回结果。入参限制：长度范围在1-500。当CheckType是CUSTOM时，此字段必传。 */
  CheckRecvContext?: string;
  /** 检查域名。入参限制：长度范围在3-80。当CheckType是HTTP时，此字段必传。 */
  CheckDomain?: string;
  /** 检查URL。入参限制：长度范围在3-80。当CheckType是HTTP时，此字段必传。 */
  CheckPath?: string;
  /** 请求方式。入参限制：支持填写 'GET', 'HEAD'。当CheckType是HTTP时，此字段必传。 */
  CheckMethod?: string;
  /** 状态检测码。入参限制：支持选择'http_2xx', 'http_3xx', 'http_4xx', 'http_5xx'。当CheckType是HTTP时，此字段必传。 */
  StatusMask?: string[];
  /** 回源协议。入参限制：支持选择：'HTTP', 'HTTPS'。当监听器协议是HTTP时只能配置HTTP，是HTTPS时能配HTTP或HTTPS。 */
  ForwardProtocol?: string;
  /** 端口映射。当监听器协议是HTTP或HTTPS支持配置一对。当监听器协议是UDP或TCP支持配置最多30对。 */
  PortOverrides?: PortOverride[];
  /** HPPTS加密算法套件入参限制：支持选择'tls_policy_1.0-2', 'tls_policy_1.1-2', 'tls_policy_1.2', 'tls_policy_1.2_strict', 'tls_policy_1.2_strict-1.3'。当监听器协议是HTTPS时，才支持修改此参数。 */
  CipherPolicyId?: string;
  /** 仅HTTPS回源协议支持选择['HTTP/1.1', 'HTTP/2']枚举值：HTTP/1.1： 版本HTTP/1.1HTTP/2： 版本HTTP/2 */
  HttpVersion?: string;
}

declare interface ModifyEndpointGroupResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyForwardingPolicyRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 策略ID。 */
  ForwardingPolicyId: string;
  /** 域名。入参限制：长度范围在1-80。格式必须满足正则表达式：^(a-z0-9?.)+[a-z]{2,}$ */
  Host: string;
}

declare interface ModifyForwardingPolicyResponse {
  /** 异步任务ID。 */
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
  /** 七层转发规则条件信息。入参限制：数组长度不能超过1。 */
  RuleConditions?: RuleCondition[];
  /** 七层转发规则行为信息。入参限制：数组长度不能超过1。 */
  RuleActions?: RuleAction[];
  /** 回源Header信息。入参限制：数组长度在1-5。 */
  OriginHeaders?: OriginHeader[];
  /** 是否开启回源sni。 */
  EnableOriginSni?: boolean;
  /** 回源sni。入参限制：长度不能超过80。当开启回源sni时，此字段必传。 */
  OriginSni?: string;
  /** 回源host。入参限制：长度不能超过80。当开启回源sni时，此字段必传。 */
  OriginHost?: string;
  /** 源站响应头入参限制：数组长度不能超过5。 */
  ResponseHeaders?: ResponseHeaders[];
  /** 删除源站响应头入参限制：数组长度不能超过5。 */
  HideResponseHeaders?: HideResponseHeaders[];
}

declare interface ModifyForwardingRuleResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGlobalAcceleratorAclPolicyRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 访问控制策略ID。 */
  GlobalAcceleratorAclPolicyId: string;
  /** 访问控制策略状态。枚举值：OPEN： 打开。CLOSE： 关闭。 */
  Status: string;
}

declare interface ModifyGlobalAcceleratorAclPolicyResponse {
  /** 异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGlobalAcceleratorAclRuleRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 安全策略ID */
  GlobalAcceleratorAclPolicyId: string;
  /** Acl规则ID。 */
  GlobalAcceleratorAclRuleId: string;
  /** 协议。入参限制：支持选择'TCP', 'UDP', 'ALL'。 */
  Protocol?: string;
  /** 端口。 */
  Port?: string;
  /** 网段。 */
  SourceCidrBlock?: string;
  /** 动作。入参限制：支持选择'ACCEPT', 'DROP'。枚举值：ACCEPT： 允许。DROP： 拒绝。 */
  Policy?: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
}

declare interface ModifyGlobalAcceleratorAclRuleResponse {
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
  /** 跨境类型。枚举值：HighQuality： 精品跨境。Unicom： 联通跨境。 */
  CrossBorderType?: string;
  /** 代表是否填写跨境服务承诺书。当CrossBorderType传入时，此字段必须填ture，代表填写跨境承诺书。 */
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
  /** 连接空闲等待时间。1、HTTP/HTTPS监听器，支持范围为1-60；2、TCP监听器，支持范围为10-900；3、UDP监听器，支持范围为10-20； */
  IdleTimeout?: number;
  /** 是否开启会话保持。枚举值：Open： 打开。Close： 关闭。TCP/UDP监听器支持修改此参数。 */
  ClientAffinity?: string;
  /** 会话保持时间。取值范围：[60, 3600] */
  ClientAffinityTime?: number;
  /** 请求超时时间。取值范围：[1, 180]HTTPS监听器才支持此参数修改。 */
  RequestTimeout?: number;
  /** 是否打开七层获取源IP方式。HTTPS/HTTP监听器才支持此参数修改。 */
  XForwardedForRealIp?: boolean;
  /** 解析方式。枚举值：UNIDIRECTIONAL： 双向。MUTUAL： 单向。HTTPS/HTTP监听器才支持修改此参数。 */
  CertificationType?: string;
  /** 加密算法套件。入参限制：支持选择tls_policy_1.0-2', 'tls_policy_1.1-2', 'tls_policy_1.2', 'tls_policy_1.2_strict', 'tls_policy_1.2_strict-1.3'。HTTPS监听器才支持此参数修改。 */
  CipherPolicyId?: string;
  /** 服务器证书。HTTPS监听器才支持此参数修改。 */
  ServerCertificates?: string[];
  /** 客户端证书。HTTPS监听器才支持此参数修改，并且开启双向认证。 */
  ClientCaCertificates?: string[];
  /** 获取源IP方式。入参限制：支持选择'ProxyProtocol', 'Close', 'ProxyProtocolV2', 'TOA'。TCP监听器才支持此参数修改。 */
  GetRealIpType?: string;
}

declare interface ModifyListenerResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceListenerAdditionalCertRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 监听器ID。 */
  ListenerId: string;
  /** 证书ID。 */
  AdditionalCertificate: string;
  /** 旧的证书ID。 */
  OldCertificate: string;
}

declare interface ReplaceListenerAdditionalCertResponse {
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
  /** 创建七层转发策略 {@link CreateForwardingPolicyRequest} {@link CreateForwardingPolicyResponse} */
  CreateForwardingPolicy(data: CreateForwardingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateForwardingPolicyResponse>;
  /** 创建七层转发规则 {@link CreateForwardingRuleRequest} {@link CreateForwardingRuleResponse} */
  CreateForwardingRule(data: CreateForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateForwardingRuleResponse>;
  /** 创建全球加速实例 {@link CreateGlobalAcceleratorRequest} {@link CreateGlobalAcceleratorResponse} */
  CreateGlobalAccelerator(data: CreateGlobalAcceleratorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGlobalAcceleratorResponse>;
  /** 创建访问控制策略 {@link CreateGlobalAcceleratorAclPolicyRequest} {@link CreateGlobalAcceleratorAclPolicyResponse} */
  CreateGlobalAcceleratorAclPolicy(data: CreateGlobalAcceleratorAclPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGlobalAcceleratorAclPolicyResponse>;
  /** 创建ACL规则 {@link CreateGlobalAcceleratorAclRuleRequest} {@link CreateGlobalAcceleratorAclRuleResponse} */
  CreateGlobalAcceleratorAclRule(data: CreateGlobalAcceleratorAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGlobalAcceleratorAclRuleResponse>;
  /** 创建监听器 {@link CreateListenerRequest} {@link CreateListenerResponse} */
  CreateListener(data: CreateListenerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateListenerResponse>;
  /** 添加扩展证书 {@link CreateListenerAdditionalCertRequest} {@link CreateListenerAdditionalCertResponse} */
  CreateListenerAdditionalCert(data: CreateListenerAdditionalCertRequest, config?: AxiosRequestConfig): AxiosPromise<CreateListenerAdditionalCertResponse>;
  /** 删除加速地域 {@link DeleteAccelerateAreasRequest} {@link DeleteAccelerateAreasResponse} */
  DeleteAccelerateAreas(data: DeleteAccelerateAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccelerateAreasResponse>;
  /** 删除终端节点组 {@link DeleteEndpointGroupsRequest} {@link DeleteEndpointGroupsResponse} */
  DeleteEndpointGroups(data: DeleteEndpointGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEndpointGroupsResponse>;
  /** 删除七层转发策略 {@link DeleteForwardingPolicyRequest} {@link DeleteForwardingPolicyResponse} */
  DeleteForwardingPolicy(data: DeleteForwardingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteForwardingPolicyResponse>;
  /** 删除七层转发规则 {@link DeleteForwardingRuleRequest} {@link DeleteForwardingRuleResponse} */
  DeleteForwardingRule(data: DeleteForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteForwardingRuleResponse>;
  /** 删除全球加速实例 {@link DeleteGlobalAcceleratorRequest} {@link DeleteGlobalAcceleratorResponse} */
  DeleteGlobalAccelerator(data: DeleteGlobalAcceleratorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGlobalAcceleratorResponse>;
  /** 删除访控制策略 {@link DeleteGlobalAcceleratorAclPolicyRequest} {@link DeleteGlobalAcceleratorAclPolicyResponse} */
  DeleteGlobalAcceleratorAclPolicy(data: DeleteGlobalAcceleratorAclPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGlobalAcceleratorAclPolicyResponse>;
  /** 删除ACL规则 {@link DeleteGlobalAcceleratorAclRuleRequest} {@link DeleteGlobalAcceleratorAclRuleResponse} */
  DeleteGlobalAcceleratorAclRule(data: DeleteGlobalAcceleratorAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGlobalAcceleratorAclRuleResponse>;
  /** 删除监听器 {@link DeleteListenerRequest} {@link DeleteListenerResponse} */
  DeleteListener(data: DeleteListenerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenerResponse>;
  /** 删除扩展证书 {@link DeleteListenerAdditionalCertRequest} {@link DeleteListenerAdditionalCertResponse} */
  DeleteListenerAdditionalCert(data: DeleteListenerAdditionalCertRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenerAdditionalCertResponse>;
  /** 查询加速地域 {@link DescribeAccelerateAreasRequest} {@link DescribeAccelerateAreasResponse} */
  DescribeAccelerateAreas(data: DescribeAccelerateAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccelerateAreasResponse>;
  /** 查询可选加速区域 {@link DescribeAccelerateRegionsRequest} {@link DescribeAccelerateRegionsResponse} */
  DescribeAccelerateRegions(data?: DescribeAccelerateRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccelerateRegionsResponse>;
  /** 查询跨境账单 {@link DescribeCrossBorderSettlementRequest} {@link DescribeCrossBorderSettlementResponse} */
  DescribeCrossBorderSettlement(data: DescribeCrossBorderSettlementRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderSettlementResponse>;
  /** 查询终端节点组 {@link DescribeEndpointGroupsRequest} {@link DescribeEndpointGroupsResponse} */
  DescribeEndpointGroups(data: DescribeEndpointGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEndpointGroupsResponse>;
  /** 查看七层转发策略 {@link DescribeForwardingPolicyRequest} {@link DescribeForwardingPolicyResponse} */
  DescribeForwardingPolicy(data: DescribeForwardingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeForwardingPolicyResponse>;
  /** 查看七层转发规则 {@link DescribeForwardingRuleRequest} {@link DescribeForwardingRuleResponse} */
  DescribeForwardingRule(data: DescribeForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeForwardingRuleResponse>;
  /** 查询全球加速实例 {@link DescribeGlobalAcceleratorsRequest} {@link DescribeGlobalAcceleratorsResponse} */
  DescribeGlobalAccelerators(data?: DescribeGlobalAcceleratorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGlobalAcceleratorsResponse>;
  /** 查询监听器 {@link DescribeListenersRequest} {@link DescribeListenersResponse} */
  DescribeListeners(data: DescribeListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenersResponse>;
  /** 查询异步任务结果 {@link DescribeTaskResultRequest} {@link DescribeTaskResultResponse} */
  DescribeTaskResult(data: DescribeTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultResponse>;
  /** 修改加速地域 {@link ModifyAccelerateAreasRequest} {@link ModifyAccelerateAreasResponse} */
  ModifyAccelerateAreas(data: ModifyAccelerateAreasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccelerateAreasResponse>;
  /** 修改终端节点组 {@link ModifyEndpointGroupRequest} {@link ModifyEndpointGroupResponse} */
  ModifyEndpointGroup(data: ModifyEndpointGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEndpointGroupResponse>;
  /** 修改七层转发策略 {@link ModifyForwardingPolicyRequest} {@link ModifyForwardingPolicyResponse} */
  ModifyForwardingPolicy(data: ModifyForwardingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyForwardingPolicyResponse>;
  /** 修改七层转发规则 {@link ModifyForwardingRuleRequest} {@link ModifyForwardingRuleResponse} */
  ModifyForwardingRule(data: ModifyForwardingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyForwardingRuleResponse>;
  /** 修改全球加速实例 {@link ModifyGlobalAcceleratorRequest} {@link ModifyGlobalAcceleratorResponse} */
  ModifyGlobalAccelerator(data: ModifyGlobalAcceleratorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGlobalAcceleratorResponse>;
  /** 修改访问控制策略 {@link ModifyGlobalAcceleratorAclPolicyRequest} {@link ModifyGlobalAcceleratorAclPolicyResponse} */
  ModifyGlobalAcceleratorAclPolicy(data: ModifyGlobalAcceleratorAclPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGlobalAcceleratorAclPolicyResponse>;
  /** 修改ACL规则 {@link ModifyGlobalAcceleratorAclRuleRequest} {@link ModifyGlobalAcceleratorAclRuleResponse} */
  ModifyGlobalAcceleratorAclRule(data: ModifyGlobalAcceleratorAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGlobalAcceleratorAclRuleResponse>;
  /** 修改监听器 {@link ModifyListenerRequest} {@link ModifyListenerResponse} */
  ModifyListener(data: ModifyListenerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyListenerResponse>;
  /** 替换扩展证书 {@link ReplaceListenerAdditionalCertRequest} {@link ReplaceListenerAdditionalCertResponse} */
  ReplaceListenerAdditionalCert(data: ReplaceListenerAdditionalCertRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceListenerAdditionalCertResponse>;
}

export declare type Versions = ["2025-01-15"];

export default Ga2;
