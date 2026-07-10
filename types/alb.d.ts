/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 访问日志配置。 */
declare interface AccessLogConfig {
  /** 负载均衡日志服务(CLS)的日志集ID */
  LogSetId?: string | null;
  /** 负载均衡日志服务(CLS)的日志主题ID */
  LogTopicId?: string | null;
}

/** 证书信息 */
declare interface CertificateInfo {
  /** 证书绑定时间。 */
  AssociatedTime?: string;
  /** 证书 ID。 */
  CertificateId?: string;
  /** 证书类型。取值：CA或SVR（服务器证书）。 */
  CertificateType?: string;
  /** 是否为监听器默认证书。取值：true：默认证书。false：扩展证书。 */
  IsDefault?: boolean;
  /** 证书与监听器的绑定状态。取值：Associated（已关联）、Associating（关联中）、Disassociating（解除关联中）、Error（异常）。 */
  Status?: string;
}

/** 监听器默认规则动作 */
declare interface DefaultAction {
  /** 转发目标组配置。创建监听器时转发动作中的目标组配置仅支持单个目标组。 */
  TargetGroupConfig: TargetGroupConfig;
  /** 转发动作类型。创建监听器时，默认转发动作类型仅支持转发至目标组。 */
  Type: string;
}

/** 删除保护状态信息。 */
declare interface DeletionProtectionConfig {
  /** 是否开启删除保护。开启后，可防止实例被意外删除。- true：开启删除保护- false：关闭删除保护 */
  DeletionProtectionEnabled?: boolean;
  /** 开启修改保护的原因说明。长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。 */
  Reason?: string;
}

/** 过滤器条件 */
declare interface Filter {
  /** 过滤器的名称 */
  Name: string;
  /** 过滤器的值数组 */
  Values: string[];
}

/** 固定应答信息 */
declare interface FixedResponseInfo {
  /** 返回的HTTP响应码，支持 2xx、4xx、5xx。 */
  HttpCode: number;
  /** 返回的固定内容。只支持 ASCII 字符，最大1KB。 */
  Content?: string;
  /** 返回固定内容的格式。取值：text/plain、text/css、text/html、application/javascript或application/json。 */
  ContentType?: string;
}

/** HTTP Cookie信息 */
declare interface HTTPCookieInfo {
  /** Cookie的键，长度1~64个字符，支持字母、数字、下划线。 */
  Key: string;
  /** Cookie的值，长度1~128个字符，支持可打印字符。 */
  Value: string;
}

/** HTTP Header信息 */
declare interface HTTPHeaderInfo {
  /** HTTP Header的键，长度1 ~ 40个字符，支持的字符集为：a-z A-Z 0-9 - _ 。不支持中文，不支持Host，Cookie。 */
  Key: string;
  /** HTTP Header的值，长度1 ~ 128个字符，支持可打印字符。不支持"，开头和结尾不能是空格，结尾不能是\。 */
  Values: string[];
}

/** HTTP查询字符串信息 */
declare interface HTTPQueryStringInfo {
  /** 查询字符串的键，长度1 ~ 16个字符。支持可打印字符，不支持空格和#[]{}\|<>&。支持 * 多字符通配，? 单字符通配。 */
  Key: string;
  /** 查询字符串的值，长度1 ~ 128字符，支持可打印字符，不支持空格和#[]{}\|<>&。支持 * 多字符通配，? 单字符通配。 */
  Value: string;
}

/** HTTP重定向信息 */
declare interface HTTPRedirectInfo {
  /** 重定向的HTTP码，支持301、302、303、307、 308。 */
  HttpCode: number;
  /** 重定向的主机地址，默认值${host}。长度3 ~ 128个字符，支持的字符集为：a-z 0-9 _ . -。 */
  Host?: string;
  /** 重定向的路径，默认值${path}。长度1 ~ 128个字符，支持的字符集为：a-z A-Z 0-9 ? = _ . - / : 。 */
  Path?: string;
  /** 重定向的端口，默认值 ${port}。取值1 ~ 65535。 */
  Port?: string;
  /** 重定向的协议，取值：HTTP,HTTPS，默认值${protocol}。 */
  Protocol?: string;
  /** 重定向的查询字符串，默认值${query}。长度1 ~ 128字符，支持可打印字符，不支持 #[]{}|<>&amp; 和空格。 */
  Query?: string;
}

/** HTTP重写信息 */
declare interface HTTPRewriteInfo {
  /** 重写的主机地址，默认值${host}。长度3 ~ 128个字符，支持的字符集为：a-z 0-9 _ . -。 */
  Host?: string;
  /** 重写的路径，默认值${path}。长度1 ~ 128个字符，支持的字符集为：a-z A-Z 0-9 ? = _ . - / : 。 */
  Path?: string;
  /** 重写的查询字符串，默认值${query}。长度1 ~ 128字符，支持可打印字符，不支持 #[]{}|<>&amp; 和空格。 */
  Query?: string;
}

/** 健康检查配置 */
declare interface HealthCheckConfig {
  /** 是否开启健康检查。- **true**：开启。- **false**：不开启。 */
  HealthCheckEnabled: boolean;
  /** 健康检查状态码。取值：- 当健康检查协议为**HTTP/HTTPS**时：	- **http_1xx**	- **http_2xx**（默认值）	- **http_3xx**	- **http_4xx**	- **http_5xx**- 当健康检查协议为**gRPC**时：默认值为12，数值范围为0-99，输入值可为数值、多个数值或者范围以及相互组合，如：	- **"20"**	- **"0-99"**> 仅当**HealthCheckProtocol**设置为**HTTP** 、**HTTPS**、**GRPC** 或者**GRPCS**时，该参数生效。 */
  HealthCheckCodes?: string[];
  /** 判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由**不健康**变为**健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckHealthyThreshold?: number;
  /** 健康检查域名。该参数不设置时默认使用后端服务的内网IP作为健康检查地址。域名限制：- 长度限制为 **1-255** 个字符。- 可包含小写字母、数字、短划线（-）和半角句号（.）。- 至少包含一个半角句号（.），半角句号（.）不能出现在开头或结尾。- 最右侧的域标签，只能包含字母，不能包含数字或短划线（-）。- 短划线（-）不能出现在开头或结尾。>仅当 **HealthCheckProtocol** 设置为 **HTTP、HTTPS** 、**GRPC**、**GRPCS** 时，该参数生效。 */
  HealthCheckHost?: string;
  /** 健康检查 HTTP 协议版本，取值：- **HTTP1.1**（默认）- **HTTP1.0** > 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckHttpVersion?: string;
  /** 健康检查的时间间隔。单位：秒。取值范围：**2**-**300**。默认值：**5**。 */
  HealthCheckInterval?: number;
  /** 健康检查方法，取值：- **GET**- **HEAD**（默认值）> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckMethod?: string;
  /** 健康检查的转发规则路径。长度为 1~80 个字符，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL 必须以正斜线（/）开头。> 仅当**HealthCheckProtocol**为**HTTP**、**HTTPS** 、**GRPC**、**GRPCS**时，转发规则路径参数生效。 */
  HealthCheckPath?: string;
  /** 健康检查访问后端服务器的端口。取值范围：**0-65535**。默认值：**0**，表示后端服务器的端口。 */
  HealthCheckPort?: number;
  /** 健康检查协议。取值：- **HTTP**（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。- **HTTPS**：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）- **TCP**：通过发送 SYN 握手报文来检测服务器端口是否存活。- **GRPC**：通过发送 POST 请求来检查服务器应用是否健康。- **GRPCS**：通过发送 POST 请求来检查服务器应用是否健康。 */
  HealthCheckProtocol?: string;
  /** 健康检查的响应超时时间。单位：秒。取值范围：**2**-**60**。默认值：**2**。 */
  HealthCheckTimeout?: number;
  /** 判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由**健康**变为**不健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckUnhealthyThreshold?: number;
}

/** 健康检查模板信息 */
declare interface HealthCheckTemplate {
  /** 创建时间。 */
  CreateTime?: string;
  /** 健康检查状态码。取值：- 当健康检查协议为**HTTP/HTTPS**时：	- **http_1xx**	- **http_2xx**（默认值）	- **http_3xx**	- **http_4xx**	- **http_5xx**- 当健康检查协议为**GRPC/GRPCS**时：默认值为**12**，数值范围为**0-99**，输入值可为数值、多个数值或者范围以及相互组合，如：	- **"20"**	- **"0-99"** */
  HealthCheckCodes?: string[];
  /** 判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由**不健康**变为**健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckHealthyThreshold?: number;
  /** 健康检查域名。长度限制为 **1-255** 个字符。可包含小写字母、数字、短划线（-）和半角句号（.）。> 仅当 **HealthCheckProtocol** 设置为 **HTTP/HTTPS/GRPC/GRPCS** 时，该参数生效。 */
  HealthCheckHost?: string;
  /** 健康检查 HTTP 协议版本，取值：- **HTTP1.1**（默认）- **HTTP1.0** > 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckHttpVersion?: string;
  /** 健康检查的时间间隔。单位：秒。取值范围：**2**-**300**。默认值：**5**。 */
  HealthCheckInterval?: number;
  /** 健康检查方法，取值：- **GET**- **HEAD**（默认值）> 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckMethod?: string;
  /** 健康检查的转发规则路径。 长度为 **1-80** 个字符，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL 必须以正斜线（/）开头。 > 仅当**HealthCheckProtocol**为**HTTP/HTTPS/GRPC/GRPCS**时，转发规则路径参数生效。 */
  HealthCheckPath?: string;
  /** 健康检查访问后端服务器的端口。取值范围：**0-65535**。默认值：**0**，表示后端服务器的端口。 */
  HealthCheckPort?: number;
  /** 健康检查协议。取值：- **HTTP**（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。- **HTTPS**：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）- **TCP**：通过发送 SYN 握手报文来检测服务器端口是否存活。- **GRPC**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。- **GRPCS**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。 */
  HealthCheckProtocol?: string;
  /** 健康检查模板 ID，格式为 hct- 后接字母数字。所有接口（创建、查询、修改、删除）均使用 hct- 前缀。 */
  HealthCheckTemplateId?: string;
  /** 健康检查模板名称。长度为 **1-255** 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。 */
  HealthCheckTemplateName?: string;
  /** 健康检查的响应超时时间。单位：秒。取值范围：**2**-**60**。默认值：**2**。 */
  HealthCheckTimeout?: number;
  /** 判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由**健康**变为**不健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckUnhealthyThreshold?: number;
  /** 修改时间。 */
  ModifyTime?: string;
  /** 标签。 */
  Tags?: TagInfo[];
}

/** 应用型负载均衡可用区子网映射中的 IP 信息数据结构 */
declare interface IPAddressInfo {
  /** IP 地址 */
  Address?: string;
  /** EIP AddressId */
  AddressId?: string;
}

/** 插入HTTP Header信息 */
declare interface InsertHTTPHeaderInfo {
  /** 插入的HTTP Header键，长度1 ~ 40个字符，支持的字符集为：a-z A-Z 0-9 - _ 。不支持中文，不支持Cookie,Host,Content-Length,Connection,Upgrade,transfer-encoding,keep-alive,te,authority,x-forwarded-for,x-forwarded-proto,x-forwarded-host,x-forwarded-port。 */
  Key: string;
  /** HTTP Header值的类型。ValueType为SystemDefined时，取值范围 ClientPort：客户端端口，ClientIp：客户端 IP 地址，Protocol：客户端请求的协议，CLBPort：负载均衡实例监听端口。ValueType为UserDefined时，长度1 ~ 128的可打印字符，不支持"，开头和结尾不能为空格，结尾不能为\。ValueType为ReferenceHeader时，引用请求头中的某一个header，长度1~128的可打印字符，不支持"，开头和结尾不能为空格，结尾不能为\。 */
  Value: string;
  /** HTTP Header值的类型，取值：SystemDefined：系统定义的header。UserDefined：用户自定义的header。ReferenceHeader：引用请求头中的某一个header。 */
  ValueType: string;
}

/** 异步任务信息 */
declare interface Job {
  /** 操作接口名称。 */
  ApiName?: string;
  /** 任务流Id */
  FlowId?: number;
  /** 任务请求Id。 */
  RequestId?: string;
  /** 资源ID列表 */
  ResourceIds?: string[];
  /** 任务状态。取值：Processing、Succeeded、Failed。 */
  Status?: string;
}

/** 监听器简要信息出参 */
declare interface ListenerOutput {
  /** 是否开启双向认证。 */
  CaEnable?: boolean;
  /** 监听器实例的创建时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00） */
  CreateTime?: string;
  /** 是否启用 Gzip 压缩。 */
  GzipEnabled?: boolean;
  /** 是否启用http2。 */
  Http2Enable?: boolean;
  /** 空闲超时时间。 */
  IdleTimeout?: number;
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId?: string;
  /** 监听器名称。 */
  ListenerName?: string;
  /** 监听器端口。 */
  ListenerPort?: number;
  /** 监听器协议。 */
  ListenerProtocol?: string;
  /** 监听器状态。取值:=- **Active**: 运行中。- **Provisioning**：创建中。- **Configuring**：变配中。- **ProvisionFailed**：创建失败 */
  ListenerStatus?: string;
  /** 监听器实例的最后变更时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00） */
  ModifyTime?: string;
  /** 请求超时时间。 */
  RequestTimeout?: number;
  /** 标签。 */
  Tags?: TagInfo[];
  /** 安全策略 ID。 */
  TlsSecurityPolicyId?: string;
  /** XForwardedFor配置。 */
  XForwardedForConfig?: XForwardedForConfig;
}

/** 列表展示的应用型负载均衡实例结构。 */
declare interface LoadBalancer {
  /** 访问日志配置结构。 */
  AccessLogConfig?: AccessLogConfig;
  /** IP 地址版本，取值 IPv4 或 IPv6。 */
  AddressIpVersion?: string | null;
  /** 负载均衡的地址类型。取值：- **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。- **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。 */
  AddressType?: string | null;
  /** 资源创建时间。 */
  CreateTime?: string | null;
  /** 删除保护设置信息。 */
  DeletionProtection?: DeletionProtectionConfig;
  /** DNS域名。 */
  Domain?: string | null;
  /** 负载均衡实例计费配置。 */
  LoadBalancerBillingConfig?: LoadBalancerBillingConfig;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId?: string | null;
  /** 负载均衡实例名称。 */
  LoadBalancerName?: string | null;
  /** 负载均衡操作锁配置。 */
  LoadBalancerOperationLocks?: LoadBalancerOperationLocksItem[] | null;
  /** 应用型负载均衡实例状态。取值：- **Provisioning**：创建中。- **Active**: 运行中。- **Configuring**: 变配中。- **Deleting**：删除中。- **ProvisionFailed**：创建失败。- **ConfigureFailed**：变配失败。- **DeletionFailed**：删除失败。- **Abnormal**：异常状态，具体异常原因参见LoadBalancerOperationLocks字段。 */
  LoadBalancerStatus?: string | null;
  /** 修改保护设置信息。 */
  ModificationProtection?: ModificationProtectionInfo;
  /** 标签列表。 */
  Tags?: TagInfo[] | null;
  /** 私有网络 ID。 */
  VpcId?: string | null;
}

/** 应用型负载均衡可用区子网映射中的 IP 信息数据结构 */
declare interface LoadBalancerAddress {
  /** IPv4 地址列表 */
  IPv4Address?: IPAddressInfo[];
  /** IPv6 地址列表 */
  IPv6Address?: IPAddressInfo[];
}

/** 应用型负载均衡实例计费配置。 */
declare interface LoadBalancerBillingConfig {
  /** 实例的计费类型。取值**POSTPAID_BY_HOUR**：表示按量计费。 */
  ChargeType: string | null;
  /** 共享带宽包 ID。 */
  BandwidthPackageId?: string;
}

/** 负载均衡详细信息 */
declare interface LoadBalancerDetail {
  /** 访问日志配置。 */
  AccessLogConfig?: AccessLogConfig;
  /** IP 地址版本，取值 IPv4 或 IPv6。 */
  AddressIpVersion?: string;
  /** 应用型负载均衡实例的网络地址类型。取值：- **Internet/Public**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。- **Intranet/Internal**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。 */
  AddressType?: string;
  /** 资源创建时间，格式为`yyyy-MM-ddTHH:mm:ss±hh:mm`。 */
  CreateTime?: string;
  /** 删除保护设置信息。 */
  DeletionProtection?: DeletionProtectionConfig;
  /** DNS域名。 */
  Domain?: string;
  /** 负载均衡实例付计费配置信息 */
  LoadBalancerBillingConfig?: LoadBalancerBillingConfig;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId?: string;
  /** 实例名称。长度为1~80个字符，可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。 */
  LoadBalancerName?: string;
  /** 应用型负载均衡操作锁配置。 */
  LoadBalancerOperationLocks?: LoadBalancerOperationLocksItem[];
  /** 应用型负载均衡实例状态。取值：- **Provisioning**：创建中。- **Active**: 运行中。- **Configuring**: 变配中。- **Deleting**：删除中。- **ProvisionFailed**：创建失败。- **ConfigureFailed**：变配失败。- **DeletionFailed**：删除失败。- **Abnormal**：异常状态，具体异常原因参见LoadBalancerOperationLocks字段。 */
  LoadBalancerStatus?: string;
  /** 修改保护设置信息。 */
  ModificationProtection?: ModificationProtectionInfo;
  /** 应用型负载均衡实例绑定的安全组ID集合。 */
  SecurityGroupIds?: string[];
  /** 标签。 */
  Tags?: TagInfo[];
  /** 私有网络 ID。 */
  VpcId?: string;
  /** 可用区及子网映射列表，最多返回10个可用区。若当前地域支持2个及以上可用区，至少返回2个及以上可用区。 */
  ZoneMappings?: ZoneMappingInfo[];
}

/** 应用型负载均衡操作锁配置。 */
declare interface LoadBalancerOperationLocksItem {
  /** 锁定的原因。在**LoadBalancerStatus**为**Abnormal**时有效。 */
  LockReason?: string | null;
  /** 锁定的类型。取值 ：- **SecurityLocked**：安全锁定。- **RelatedResourceLocked**：关联锁定。- **FinancialLocked**：欠费锁定。- **ResidualLocked**：残留锁定。 */
  LockType?: string | null;
}

/** 修改保护状态信息。 */
declare interface ModificationProtectionInfo {
  /** 是否开启修改保护。开启后，可防止实例被意外修改或删除。- true：开启修改保护- false：关闭修改保护 */
  ModificationProtectionEnabled?: boolean;
  /** 1238716123 */
  OperatorUin?: string;
  /** 开启修改保护的原因说明。长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。 */
  Reason?: string;
}

/** 描述了后付费计费项的价格信息 */
declare interface PostPayPriceInfo {
  /** 折扣，如20.0代表2折。 */
  Discount?: number | null;
  /** 单价，单位：元。 */
  UnitPrice?: number | null;
  /** 折扣单价，单位:元。 */
  UnitPriceDiscount?: number | null;
}

/** 表示负载均衡的价格 */
declare interface Price {
  /** 描述了实例价格，单位：元/小时。 */
  InstancePrice?: PostPayPriceInfo;
  /** 描述了lcu价格，单位：元/个。 */
  LcuPrice?: PostPayPriceInfo;
}

/** 单个配额项的查询结果。每个结果对应一个配额类型；当请求中传入 ResourceIds 时，每个结果还会对应一个具体资源。 */
declare interface QuotaInfo {
  /** 当前剩余可用量，计算方式为 Limit - Used。仅当请求参数 DisplayFields 包含 available 时返回有效值；未请求时不返回或为空。 */
  Available?: number | null;
  /** 配额上限值。不同配额类型的单位不同，通常表示资源个数；超时时间类配额表示秒。 */
  Limit?: number;
  /** 配额类型，与请求参数 QuotaTypes 中的取值对应。每种配额类型的含义请参考 QuotaTypes 参数说明。 */
  QuotaType?: string;
  /** 资源 ID。 */
  ResourceId?: string | null;
  /** 当前已使用量。仅当请求参数 DisplayFields 包含 used 时返回有效值；未请求时不返回或为空。 */
  Used?: number | null;
}

/** 关联监听器信息 */
declare interface RelatedListener {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId?: string;
  /** 监听器端口。 */
  ListenerPort?: number;
  /** 监听器协议。 */
  ListenerProtocol?: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId?: string;
}

/** 删除HTTP Header信息 */
declare interface RemoveHTTPHeaderInfo {
  /** 要删除的HTTP Header的键，长度1 ~ 40个字符，支持的字符集为：a-z A-Z 0-9 - _ 。不支持Cookie,Host,Content-Length,Connection,Upgrade,transfer-encoding,keep-alive,te,authority,x-forwarded-for,x-forwarded-proto,x-forwarded-host,x-forwarded-port,server */
  Key: string;
}

/** 转发规则动作 */
declare interface RuleAction {
  /** 转发动作执行顺序，不能重复，按从小到大顺序执行。取值范围：1 ~ 50000。 */
  Order: number;
  /** 转发动作类型。取值：TargetGroup：转发至目标组。Redirect：重定向。FixedResponse：返回固定内容。Rewrite：重写。InsertHeader：写入HTTP Header。RemoveHeader：删除HTTP Header。转发动作必选包含TargetGroup,Redirect,FixedResponse其中一个，并且执行顺序放在最后。 */
  Type: string;
  /** 固定响应内容配置。 */
  FixedResponseConfig?: FixedResponseInfo;
  /** 插入HTTP Header配置。 */
  InsertHeaderConfig?: InsertHTTPHeaderInfo;
  /** 重定向配置。除HttpCode外，其他配置不能都使用默认值。 */
  RedirectConfig?: HTTPRedirectInfo;
  /** 删除HTTP Header配置。 */
  RemoveHeaderConfig?: RemoveHTTPHeaderInfo;
  /** 重写配置。 */
  RewriteConfig?: HTTPRewriteInfo;
  /** 转发目标组配置。 */
  TargetGroupConfig?: TargetGroupConfig;
}

/** 转发规则条件 */
declare interface RuleCondition {
  /** 转发条件类型。取值：Host：主机。Path：路径。Header：HTTP Header字段。QueryString：HTPP查询字符串。Method：请求方法。Cookie：Cookie。SourceIp：源 IP。 */
  Type: string;
  /** Cookie配置。 */
  CookieConfig?: HTTPCookieInfo[];
  /** HTTP Header配置。 */
  HeaderConfig?: HTTPHeaderInfo;
  /** 主机名。主机配置在一个规则中只能出现一次，长度3 ~ 128个字符，支持精确匹配，正则匹配，通配匹配。不能以半角句号（.）、下划线（_）开头或结尾。精确匹配，支持的字符集为：a-z 0-9 . - _ 。正则匹配，波浪线（~）开头为正则匹配，支持的字符集为：a-z 0-9 . - ? = ~ _ - + \ ^ * ! $ & | ( ) [ ] 。通配匹配，星号（*）多字符通配，半角问号（?）单字符通配，支持的字符集为：a-z 0-9 . - _ * ?。 */
  HostConfig?: string[];
  /** 请求方法。取值：HEAD、GET、POST、OPTIONS、PUT、PATCH、DELETE。 */
  MethodConfig?: string[];
  /** 转发路径。长度1 ~ 128个字符，支持精确匹配，正则匹配，通配匹配。精确匹配，支持的字符集为：a-z A-Z 0-9 . - _ / = :。正则匹配，需以 ~ 开头，~ 开头表示区分大小写， ~* 开头表示不区分大小写，支持的字符集为： a-z A-Z 0-9 . - _ / = ? ~ ^ * $ : ( ) [ ] + |。通配匹配，* 表示多字符通配，? 表示单字符通配，支持的字符集为：a-z A-Z 0-9 . - _ / = :。 */
  PathConfig?: string[];
  /** 查询字符串配置。 */
  QueryStringConfig?: HTTPQueryStringInfo[];
  /** 源IP匹配配置。CIDR格式，IP地址x.x.x.x/32，IP网段x.x.x.x/24。 */
  SourceIpConfig?: string[];
}

/** 规则健康检查状态 */
declare interface RuleHealthStatusInfo {
  /** 是否为默认转发规则。 */
  IsDefaultRule?: string;
  /** 转发规则 ID，格式为 rule- 后接 8 位字母数字。 */
  RuleId?: string;
  /** 目标组健康状态。 */
  TargetGroupHealthInfos?: TargetGroupHealthInfo[];
}

/** 转发规则创建信息 */
declare interface RuleInput {
  /** 转发规则动作列表。 */
  Actions: RuleAction[];
  /** 转发规则条件列表。 */
  Conditions: RuleCondition[];
  /** 优先级，值越小优先级越高，不能重复，取值范围：1~10000。 */
  Priority: number;
  /** 转发规则的方向。Request：客户端到负载均衡的请求方向，Response：后端服务器到负载均衡的响应方向。默认Request。 */
  Direction?: string;
  /** 转发规则名称。长度为 1~255 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。 */
  RuleName?: string;
  /** 标签。 */
  Tags?: TagInfo[];
}

/** 转发规则修改信息 */
declare interface RuleModify {
  /** 转发规则动作列表。 */
  Actions?: RuleAction[];
  /** 转发规则条件列表。 */
  Conditions?: RuleCondition[];
  /** 优先级，值越小优先级越高，取值范围：1~10000。 */
  Priority?: number;
  /** 转发规则 ID，格式为 rule- 后接 8 位字母数字。 */
  RuleId?: string;
  /** 转发规则名称。 */
  RuleName?: string;
}

/** 转发规则信息 */
declare interface RuleOutput {
  /** 转发规则动作列表。 */
  Actions?: RuleAction[];
  /** 转发规则条件列表。 */
  Conditions?: RuleCondition[];
  /** 创建时间。 */
  CreateTime?: string;
  /** 转发规则的方向。Request：客户端到负载均衡的请求方向，Response：后端服务器到负载均衡的响应方向。 */
  Direction?: string;
  /** 最后修改时间。 */
  ModifyTime?: string;
  /** 优先级，值越小优先级越高，取值范围：1~10000。 */
  Priority?: number;
  /** 转发规则 ID，格式为 rule- 后接 8 位字母数字。 */
  RuleId?: string;
  /** 转发规则名称。 */
  RuleName?: string;
  /** 转发规则状态，Provisioning：创建中，Active：运行中，Configuring：配置中。 */
  Status?: string;
  /** 标签列表。 */
  Tags?: TagInfo[];
}

/** 不同TLS版本支持的加密套件信息。 */
declare interface SecurityPolicyCapability {
  /** 支持的加密套件列表。 */
  Ciphers?: string[];
  /** 支持的 TLS 协议版本。可选值包括：TLSv1.0、TLSv1.1、TLSv1.2、TLSv1.3。 */
  TLSVersion?: string;
}

/** 安全策略信息。 */
declare interface SecurityPolicyInfo {
  /** 支持的加密套件列表。支持的加密套件，具体依赖 TLSVersions 的取值。Cipher 只要被任何一个传入的 TLSVersions 支持即可。说明：若选择了 TLSv1.3，那么 Cipher 列表必须包含 TLSv1.3 支持的 Cipher。请调用 DescribeSecurityPolicyCapabilities 接口获取支持的加密套件列表。 */
  Ciphers?: string[];
  /** 创建时间。 */
  CreateTime?: string;
  /** 安全策略 ID，格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyId?: string;
  /** 安全策略名称。长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。 */
  SecurityPolicyName?: string;
  /** 安全策略状态。当前接口最常返回 Active，表示安全策略处于可用状态。 */
  Status?: string;
  /** 支持的 TLS 协议版本列表。可选值包括：TLSv1.0、TLSv1.1、TLSv1.2、TLSv1.3。 */
  TLSVersions?: string[];
  /** 标签信息。 */
  Tags?: TagInfo[];
}

/** 安全策略与监听的关联关系列表。 */
declare interface SecurityPolicyRelations {
  /** 安全策略与监听的关联关系列表。 */
  RelatedListeners?: RelatedListener[];
  /** 安全策略 ID，格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyId?: string;
}

/** 会话保持配置。 */
declare interface StickySessionConfig {
  /** 是否开启会话保持。- **true**：开启。- **false**：不开启。 */
  StickySessionEnabled: boolean | null;
  /** 自定义 Cookie 名称。长度为 1~255 个字符，只能包含英文字母和数字字符，且不能为`tgw_l7_tg_route`，该字段为目标组间会话保持Cookie保留字段。>仅当 **StickySessionEnabled** 为 **true** 时该参数生效。 */
  Cookie?: string;
  /** 会话保持时间。取值范围：**1-86400**，单位：**秒**。默认值：**1000**。>仅当 **StickySessionEnabled** 为 **true**时，该参数生效。 */
  CookieTimeout?: number | null;
  /** 会话保持类型（处理Cookie的方式）。- **Insert**（默认值）：植入 Cookie。 客户端第一次访问后端服务时，应用型负载均衡会在返回请求中植入 Cookie。下次客户端请求时携带该 Cookie，负载均衡将请求转发到上次请求的相同后端服务。- **Rewrite**：重写 Cookie。 负载均衡会对用户自定义的 Cookie 进行重写，下次客户端请求时携带该 Cookie，负载均衡将请求转发到上次请求的相同后端服务。>仅当 **StickySessionEnabled** 为 **true** 时该参数生效。 */
  StickySessionType?: string | null;
}

/** 标签信息 */
declare interface TagInfo {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

/** 目标组配置 */
declare interface TargetGroupConfig {
  /** 目标组列表。 */
  TargetGroups: TargetGroupTuple[];
  /** 目标组间会话保持 */
  TargetGroupStickySession?: TargetGroupStickySession;
}

/** 目标组健康检查状态 */
declare interface TargetGroupHealthInfo {
  /** 是否开启健康检查。 */
  HealthCheckEnabled?: boolean;
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId?: string;
  /** 服务健康检查状态列表。 */
  TargetHealthStatusInfos?: TargetHealthStatusInfo[];
  /** 转发动作类型。取值：TargetGroup：转发至目标组。Redirect：重定向。FixedResponse：返回固定内容。Rewrite：重写。InsertHeader：写入HTTP Header。RemoveHeader：删除HTTP Header。转发动作必选包含TargetGroup,Redirect,FixedResponse其中一个，并且执行顺序放在最后。 */
  Type?: string;
}

/** 目标组简要信息出参 */
declare interface TargetGroupOutput {
  /** 创建时间。 */
  CreateTime?: string;
  /** 健康检查配置。 */
  HealthCheckConfig?: HealthCheckConfig;
  /** 是否开启长连接。 */
  KeepaliveEnabled?: boolean;
  /** 后端服务协议类型。取值：- **HTTP**（默认）：支持绑定HTTP、HTTPS的监听器- **HTTPS**：支持绑定HTTPS类型的监听器- **GRPC**：支持绑定HTTPS类型的监听器- **GRPCS**：支持绑定HTTPS类型的监听器 */
  Protocol?: string;
  /** 目标组关联的负载均衡数量。 */
  RelatedLoadBalancersCount?: number;
  /** 调度算法。 */
  SchedulerAlgorithm?: string;
  /** 会话保持配置。 */
  StickySessionConfig?: StickySessionConfig;
  /** 标签。 */
  Tags?: TagInfo[];
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId?: string;
  /** 目标组名称。默认为目标组ID。长度为 **1-255** 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。 */
  TargetGroupName?: string;
  /** 目标组状态。取值：- **Provisioning**：创建中。- **ProvisionFailed**：创建失败。- **Active**: 运行中。- **Configuring**：配置变更中。 */
  TargetGroupStatus?: string;
  /** 目标组类型。取值：- **Instance**：Cvm服务器类型或Eni弹性网卡类型 */
  TargetType?: string;
  /** 私有网络 ID。 */
  VpcId?: string;
}

/** 目标组之间会话保持 */
declare interface TargetGroupStickySession {
  /** 是否开启会话保持，默认关闭。 */
  Enabled: boolean;
  /** 超时时间，单位秒，取值范围：1~86400，默认值：1000。 */
  Timeout?: number;
}

/** 目标组基础配置 */
declare interface TargetGroupTuple {
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId: string;
  /** 权重，取值范围：[0, 100]，默认为 10。 */
  Weight?: number;
}

/** 服务健康状态信息 */
declare interface TargetHealthStatusInfo {
  /** 后端服务健康状态。DescribeListenerHealthStatus 仅返回非健康后端时，该值为 UnHealthy。 */
  Status?: string;
  /** 后端服务实例 ID，CVM 实例格式为 ins- 后接 8 位字母数字。 */
  TargetId?: string;
  /** 后端目标服务IP。 */
  TargetIp?: string;
  /** 后端服务器端口。 */
  TargetPort?: number;
}

/** 后端服务输出参数。 */
declare interface TargetOutput {
  /** 弹性网卡 ID。 */
  EniId?: string;
  /** 后端服务器使用的端口。取值范围：**1 - 65535**。 */
  Port?: number;
  /** 后端服务实例 ID，CVM 实例格式为 ins- 后接 8 位字母数字。 */
  TargetId?: string;
  /** 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。 */
  TargetIp?: string;
  /** 后端服务名称。当前只有CVM后端类型后端服务返回有效名称。 */
  TargetName?: string;
  /** 后端服务的状态。取值：- **Adding**：添加中。- **Active**：正常可用状态。- **Configuring**：配置中。- **Removing**：移除中。 */
  TargetStatus?: string;
  /** 后端服务类型。 */
  TargetType?: string;
  /** 后端服务的权重，取值范围：**0 - 100**。默认值为**100**。如果设置权重为**0**，则不会将请求转发给该后端服务。 */
  Weight?: number;
}

/** 添加至目标组的后端服务 */
declare interface TargetToAdd {
  /** 后端服务器使用的端口。取值范围：**1 - 65535**。>当目标组的 **targetType** 取值为 **Instance** 时，该参数必传。 */
  Port: number;
  /** 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。 */
  TargetIp: string;
  /** 后端服务的权重，取值范围：**0 - 100**。默认值为**10**。如果设置权重为**0**，则不会将请求转发给该后端服务。 */
  Weight?: number;
}

/** 需要修改的后端服务。 */
declare interface TargetToModify {
  /** 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。 */
  TargetIp: string;
  /** 后端服务器使用的端口。取值范围：**1 - 65535**。>当目标组的 **targetType** 取值为 **Instance** 时，该参数必传。 */
  Port?: number;
  /** 后端服务的权重，取值范围：**0 - 100**。如果设置权重为**0**，则不会将请求转发给该后端服务。 */
  Weight?: number;
}

/** 从目标组移除的后端服务。 */
declare interface TargetToRemove {
  /** 后端服务器使用的端口。取值范围：**1 - 65535**。>当目标组的 **targetType** 取值为 **Instance** 时，该参数必传。 */
  Port: number;
  /** 后端服务IP。**TargetIp**和**TargetId**需要至少传一个。- 当服务器组为 **Instance** 类型时，该参数为 **Eni** 的主内网 IP 或辅助内网 IP。 */
  TargetIp: string;
}

/** 转发配置 */
declare interface XForwardedForConfig {
  /** 是否通过 ALB-ID 头字段获取负载均衡实例ID。- **true**：是。- **false**：否。 */
  XForwardedForAlbIdEnabled?: boolean;
  /** 是否通过X-Forwarded-Client-srcport头字段获取访问负载均衡实例客户端的端口。- **true**：是。- **false**：否。 */
  XForwardedForClientSrcPortEnabled?: boolean;
  /** 是否开启通过X-Forwarded-Host头字段获取访问负载均衡实例客户端的域名。- **true**：是。- **false**：否。 */
  XForwardedForHostEnabled?: boolean;
  /** 指定如何处理 X-Forwarded-For（XFF）HTTP 头字段。- **append**: 附加模式（默认），将客户端的真实 IP 地址附加到 X-Forwarded-For 头的末尾，保留原有的 XFF 链路信息- **remove**: 删除模式，移除 X-Forwarded-For 头字段，不将该头传递给后端服务器- **passthrough**: 透传模式，保持 X-Forwarded-For 头不变，直接透传给后端服务器，不做任何修改 */
  XForwardedForMode?: string;
  /** 是否通过X-Forwarded-Port头字段获取负载均衡实例的监听端口。- **true**：是。- **false**：否。 */
  XForwardedForPortEnabled?: boolean;
  /** 是否通过X-Forwarded-Proto头字段获取负载均衡实例的监听协议。- **true**：是。- **false**：否。 */
  XForwardedForProtoEnabled?: boolean;
  /** 是否通过 X-Tencent-Client-IDN 头访问 客户端证书的颁发者 $ssl_client_i_dn。- **true**：是。- **false**：否。 */
  XTencentClientIDNEnabled?: boolean;
  /** 是否通过 X-Tencent-Client-SDN 头访问客户端证书的主题$ssl_client_s_dn。- **true**：是。- **false**：否。 */
  XTencentClientSDNEnabled?: boolean;
  /** 是否通过 X-Tencent-Client-Serial 头访问 客户端证书的序列号 $ssl_client_serial。- **true**：是。- **false**：否。 */
  XTencentClientSerialEnabled?: boolean;
  /** 是通过 X-Tencent-Client-Verify 头访问 客户端证书的验证结果 $ssl_client_verify。- **true**：是。- **false**：否。 */
  XTencentClientVerifyEnabled?: boolean;
}

/** 可用区信息 */
declare interface Zone {
  /** 可用区名称 */
  LocalName?: string;
  /** 可用区 ID */
  ZoneId?: string;
  /** 可用区状态 */
  ZoneStatus?: string;
}

/** 可用区及子网映射结构体 */
declare interface ZoneMappingInfo {
  /** 子网 ID。 */
  SubnetId: string | null;
  /** 可用区ID。最多支持添加10个可用区。若当前地域支持2个及以上的可用区，至少需要添加2个可用区。您可以通过调用DescribeZones接口获取可用区ID对应的可用区的信息。 */
  ZoneId: string | null;
  /** 负载均衡 VIP/EIP 信息 */
  LoadBalancerAddress?: LoadBalancerAddress;
  /** 可用区状态。取值：Active：运行中。Stopped：已停止。Shifted：已移除。Starting：启动中。Stopping：停止中。 */
  Status?: string;
}

/** 用于购买或者修改使用的可用区及子网映射结构体 */
declare interface ZoneMappingsItem {
  /** 子网 ID。 */
  SubnetId: string | null;
  /** 可用区ID。最多支持添加10个可用区。若当前地域支持2个及以上的可用区，至少需要添加2个可用区。您可以通过调用DescribeZones接口获取可用区ID对应的可用区的信息。 */
  ZoneId: string | null;
  /** 公网实例绑定的EIP实例ID。 */
  LoadBalancerAddress?: LoadBalancerAddress | null;
}

declare interface AddTargetsToTargetGroupRequest {
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId: string;
  /** 需要添加至目标组的后端服务列表。单次请求最多支持添加 **50** 个后端服务。 */
  Targets: TargetToAdd[];
  /** 是否预览此次请求。 - **false**（默认）：发送普通请求，直接添加后端服务至目标组。 - **true**：发送预览请求，检查添加后端服务的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
}

declare interface AddTargetsToTargetGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateBandwidthPackageWithLoadBalancerRequest {
  /** 共享带宽包 ID。 */
  BandwidthPackageId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。> 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。 */
  ClientToken?: string;
  /** 是否只预检此次请求。取值：- **true**：发送检查请求，不会将共享带宽包绑定到负载均衡实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。- **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。 */
  DryRun?: boolean;
}

declare interface AssociateBandwidthPackageWithLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateListenerAdditionalCertificatesRequest {
  /** 扩展证书 ID 列表。 */
  CertificateIds: string[];
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 客户端 Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken 只支持 ASCII 字符。若您未指定，则系统自动使用 API 请求的 RequestId 作为 ClientToken 标识。每次 API 请求的 RequestId 不一样。 */
  ClientToken?: string;
  /** 是否只预检此次请求，取值：true：发送检查请求，不会为HTTPS和QUIC监听器添加扩展证书。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。false（默认值）：发送正常请求，通过检查后返回HTTP2xx状态码并直接进行操作。 */
  DryRun?: string;
}

declare interface AssociateListenerAdditionalCertificatesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHealthCheckTemplateRequest {
  /** 是否预览此次请求。- **false**（默认）：发送普通请求，直接修改健康检查模板。- **true**：发送预览请求，检查修改健康检查模板的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
  /** 健康检查状态码。取值：- 当健康检查协议为**HTTP/HTTPS**时：	- **http_1xx**	- **http_2xx**（默认值）	- **http_3xx**	- **http_4xx**	- **http_5xx**- 当健康检查协议为**GRPC/GRPCS**时：默认值为**12**，数值范围为**0-99**，输入值可为数值、多个数值或者范围以及相互组合，如：	- **"20"**	- **"0-99"** */
  HealthCheckCodes?: string[];
  /** 判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由**不健康**变为**健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckHealthyThreshold?: number;
  /** 健康检查域名。长度限制为 **1-255** 个字符。可包含小写字母、数字、短划线（-）和半角句号（.）。> 仅当 **HealthCheckProtocol** 设置为 **HTTP/HTTPS/GRPC/GRPCS** 时，该参数生效。 */
  HealthCheckHost?: string;
  /** 健康检查 HTTP 协议版本，取值：- **HTTP1.1**（默认）- **HTTP1.0** > 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckHttpVersion?: string;
  /** 健康检查的时间间隔。单位：秒。 取值范围：**2**-**300**。 默认值：**5**。 */
  HealthCheckInterval?: number;
  /** 健康检查方法，取值： - **GET** - **HEAD**（默认值） > 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckMethod?: string;
  /** 健康检查的转发规则路径。 长度为 **1-80** 个字符，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL 必须以正斜线（/）开头。 > 仅当**HealthCheckProtocol**为**HTTP/HTTPS/GRPC/GRPCS**时，转发规则路径参数生效。 */
  HealthCheckPath?: string;
  /** 健康检查访问后端服务器的端口。 取值范围：**0-65535**。 默认值：**0**，表示后端服务器的端口。 */
  HealthCheckPort?: number;
  /** 健康检查协议。取值：- **HTTP**（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。- **HTTPS**：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）- **TCP**：通过发送 SYN 握手报文来检测服务器端口是否存活。- **GRPC**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。- **GRPCS**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。 */
  HealthCheckProtocol?: string;
  /** 健康检查模板名称。长度为 **1-255** 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。 */
  HealthCheckTemplateName?: string;
  /** 健康检查的响应超时时间。单位：秒。取值范围：**2**-**60**。默认值：**2**。 */
  HealthCheckTimeout?: number;
  /** 判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由**健康**变为**不健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckUnhealthyThreshold?: number;
  /** 标签。 */
  Tags?: TagInfo[];
}

declare interface CreateHealthCheckTemplateResponse {
  /** 健康检查模板 ID，格式为 hct- 后接字母数字。所有接口（创建、查询、修改、删除）均使用 hct- 前缀。 */
  HealthCheckTemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateListenerRequest {
  /** 默认转发规则动作列表。目前监听器仅支持添加 1 个默认转发规则动作。 */
  DefaultActions: DefaultAction[];
  /** 负载均衡实例前端使用的端口。 取值：1~65535。 */
  ListenerPort: number;
  /** 监听协议。 取值：HTTP、HTTPS 或 QUIC。 */
  ListenerProtocol: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 监听器配置的CA证书ID列表。目前监听器仅支持添加 1 个 CA 证书。当 CaEnabled 参数取值为 true 时，此参数必填。 */
  CaCertificateIds?: string[];
  /** 是否开启双向认证。取值：true：开启。false（默认值）：不开启。 */
  CaEnabled?: boolean;
  /** 服务器证书 ID 列表。 */
  CertificateIds?: string[];
  /** 客户端Token，用于保证请求的幂等性。 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。 */
  ClientToken?: string;
  /** 是否开启Gzip压缩。取值:true(默认值):是。false:否 */
  GzipEnabled?: boolean;
  /** 是否开启HTTP/2特性。HTTP 协议默认 false，HTTPS 协议默认 true。只有 HTTPS 协议支持此参数。 */
  Http2Enabled?: boolean;
  /** 连接空闲超时时间。单位：秒。取值范围：1~600。默认值：15。如果在超时时间内一直没有访问请求，负载均衡会断开当前连接，在下次请求到来时创建新的连接。 */
  IdleTimeout?: number;
  /** 自定义监听名称。 长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。 */
  ListenerName?: string;
  /** 请求超时时间。单位：秒。取值：1~600。默认值：60。如果在超时时间内后端服务器没有返回响应，负载均衡将放弃等待，并给客户端返回HTTP 504错误码。 */
  RequestTimeout?: number;
  /** 安全策略 ID，格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyId?: string;
  /** 标签列表。最大支持20个。 */
  Tags?: TagInfo[];
  /** X-Forwarded-For配置 */
  XForwardedForConfig?: XForwardedForConfig;
}

declare interface CreateListenerResponse {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoadBalancerRequest {
  /** 应用型负载均衡的地址类型。取值：- **Internet**：负载均衡具有公网IP地址，DNS域名被解析到公网IP，因此可以在公网环境访问。- **Intranet**：负载均衡只有私网IP地址，DNS域名被解析到私网IP，因此只能被负载均衡所在VPC的内网环境访问。 */
  AddressType: string;
  /** 应用型负载均衡实例计费配置。 */
  LoadBalancerBillingConfig: LoadBalancerBillingConfig;
  /** 私有网络 ID。 */
  VpcId: string;
  /** 可用区及私有网络子网映射列表，最多支持添加10个可用区。若当前地域支持2个及以上的可用区，至少需要添加2个可用区。 */
  ZoneMappings: ZoneMappingsItem[];
  /** IP 地址版本，取值 IPv4 或 IPv6。 */
  AddressIpVersion?: string;
  /** 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。 */
  ClientToken?: string;
  /** 删除保护配置。 */
  DeleteProtection?: DeletionProtectionConfig;
  /** 是否只预检此次请求，取值：- **true**：发送检查请求，不会创建应用型负载均衡实例。检查项包括是否填写了必需参数、请求格式和业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。- **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。 */
  DryRun?: boolean;
  /** EIP 地址类型，可取值：- **EIP**: 普通弹性公网 IP- **AntiDDoSEIP**: 高防EIP- **AnycastEIP**: 加速 EIP- **HighQualityEIP**: 精品 IP。仅新加坡和中国香港支持精品IP。- **ResidentialEIP**: 原生 IP不传默认是EIP。 */
  InternetAddressType?: string;
  /** 应用型负载均衡实例名称。长度为1~80个字符，可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。 */
  LoadBalancerName?: string;
  /** 标签。 */
  Tags?: TagInfo[];
}

declare interface CreateLoadBalancerResponse {
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRulesRequest {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 转发规则列表。 */
  Rules: RuleInput[];
  /** 客户端Token，用于保证请求的幂等性。 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。 */
  ClientToken?: string;
  /** 是否只预检查此次请求。 */
  DryRun?: boolean;
}

declare interface CreateRulesResponse {
  /** 转发规则 ID 列表，ID 格式为 rule- 后接 8 位字母数字。 */
  RuleIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityPolicyRequest {
  /** 安全策略支持的加密套件列表。加密套件用于协商客户端与服务端之间的加密算法。配置说明：加密套件的可选范围取决于所选的 TLS 协议版本（TLSVersions 参数）。只要加密套件被任意一个已选 TLS 版本支持，即可添加到列表中。若 TLSVersions 包含 TLSv1.3：可不指定 TLSv1.3 专属加密套件（系统将自动补全全部 TLSv1.3 套件）；若指定，则必须包含全部 TLSv1.3 专属加密套件，不支持仅指定部分。获取可用加密套件：请调用 DescribeSecurityPolicyCapabilities 接口查询各 TLS 版本支持的加密套件列表。 */
  Ciphers: string[];
  /** 安全策略支持的 TLS 协议版本列表。TLS（Transport Layer Security）协议用于保障客户端与负载均衡之间的通信安全。可选值：TLSv1.0：兼容性最好，但安全性较低，不推荐在生产环境使用。TLSv1.1：安全性略优于 TLSv1.0，但仍不推荐。TLSv1.2：目前主流的安全协议版本，兼顾安全性与兼容性。TLSv1.3：最新版本，安全性最高，性能更优，推荐优先使用。建议： 生产环境建议至少选择 TLSv1.2，若客户端支持，优先启用 TLSv1.3。 */
  TLSVersions: string[];
  /** 客户端幂等性令牌。用于保证请求的幂等性，防止因网络超时或客户端重试导致的重复创建。建议使用 UUID 作为令牌值。相同的 ClientToken 在有效期内重复请求时，服务端将返回相同的结果。 */
  ClientToken?: string;
  /** 是否仅执行预检请求。取值：true：仅执行预检请求，不实际创建资源。预检请求将验证参数格式、权限及资源配额等，帮助您在正式操作前发现潜在问题。false（默认）：执行正常请求，通过预检后将直接创建安全策略。 */
  DryRun?: boolean;
  /** 安全策略名称。用于标识和区分不同的安全策略。命名规则：长度为 2~128 个字符。必须以英文字母或中文开头。可包含英文字母、中文、数字、半角句号（.）、下划线（_）和短划线（-）。建议： 使用具有业务含义的名称，例如 "prod-high-security" 或 "测试环境策略"。 */
  SecurityPolicyName?: string;
  /** 安全策略的标签列表。标签用于对资源进行分类和管理，便于按业务、环境、部门等维度筛选和组织资源。每个标签由键值对（Key-Value）组成，同一资源下标签键不可重复。 */
  Tags?: TagInfo[];
}

declare interface CreateSecurityPolicyResponse {
  /** 安全策略 ID，格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTargetGroupRequest {
  /** 目标组类型。取值：Instance（默认）：Cvm服务器类型或者Eni网卡类型。 */
  TargetType: string;
  /** 私有网络 ID。 */
  VpcId: string;
  /** 是否预览此次请求。false（默认）：发送普通请求，直接创建目标组。true：发送预览请求，检查创建目标组的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
  /** 健康检查配置。 */
  HealthCheckConfig?: HealthCheckConfig;
  /** 是否开启长连接。 */
  KeepaliveEnabled?: boolean;
  /** 后端服务协议类型。取值：HTTP（默认）：支持绑定HTTP、HTTPS的监听器HTTPS：支持绑定HTTPS类型的监听器GRPC：支持绑定HTTPS类型的监听器GRPCS：支持绑定HTTPS类型的监听器 */
  Protocol?: string;
  /** 调度算法。取值：wrr（默认）：加权轮询，按照权重选择后端服务器，权重越高的服务器被轮询到的概率越高。wlc：加权最小连接数，当不同后端服务器权重值相同时，当前连接数越小的后端服务器被轮询到的概率越高。 */
  SchedulerAlgorithm?: string;
  /** 会话保持配置。 */
  StickySessionConfig?: StickySessionConfig;
  /** 标签。 */
  Tags?: TagInfo[];
  /** 目标组名称。默认为目标组ID。长度为 1-255 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。 */
  TargetGroupName?: string;
}

declare interface CreateTargetGroupResponse {
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHealthCheckTemplatesRequest {
  /** 健康检查模板 ID 列表，ID 格式为 hct- 后接字母数字。 */
  HealthCheckTemplateIds: string[];
  /** 是否预览此次请求。- **false**（默认）：发送普通请求，直接删除模板。- **true**：发送预览请求，检查删除模板的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
}

declare interface DeleteHealthCheckTemplatesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteListenerRequest {
  /** 监听器 ID 列表，ID 格式为 lst- 后接 8 位字母数字。 */
  ListenerIds: string[];
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。 */
  ClientToken?: string;
}

declare interface DeleteListenerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancersRequest {
  /** 负载均衡实例 ID 列表，ID 格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerIds: string[];
  /** 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。 */
  ClientToken?: string;
  /** 是否只预检此次请求，取值：- **true**：发送检查请求，不会删除应用型负载均衡实例。检查项包括是否填写了必需参数、请求格式和业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。- **false**（默认值）：发送正常请求，通过检查后返回`HTTP 2xx`状态码并直接进行操作。 */
  DryRun?: boolean;
}

declare interface DeleteLoadBalancersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRulesRequest {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 转发规则 ID 列表，ID 格式为 rule- 后接 8 位字母数字。 */
  RuleIds: string[];
  /** 是否只预检查此次请求。 */
  DryRun?: boolean;
}

declare interface DeleteRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityPolicyRequest {
  /** 安全策略 ID 列表，ID 格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyIds: string[];
  /** 是否仅执行预检请求。取值：- **true**：仅执行预检请求，不实际删除资源。预检请求将验证参数格式、权限及安全策略是否被引用等，帮助您在正式操作前发现潜在问题。- **false**（默认）：执行正常请求，通过预检后将直接删除安全策略。 */
  DryRun?: boolean;
}

declare interface DeleteSecurityPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTargetGroupsRequest {
  /** 是否预览此次请求。- **false**（默认）：发送普通请求，直接删除目标组。- **true**：发送预览请求，检查删除目标组的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
  /** 目标组 ID 列表，ID 格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupIds?: string[];
}

declare interface DeleteTargetGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAsyncJobsRequest {
  /** 分批次查询时每次显示的条目数。取值范围：1~100，默认值：20。 */
  MaxResults?: number;
  /** 是否拥有下一次查询的令牌（Token）。取值： 第一次查询和没有下一次查询时，均无需填写。 如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。 */
  NextToken?: string;
  /** 异步请求返回的RequestId列表 */
  RequestIds?: string[];
}

declare interface DescribeAsyncJobsResponse {
  /** 任务列表。 */
  Jobs?: Job[];
  /** 分批次查询时每次显示的条目数。 */
  MaxResults?: number;
  /** 是否拥有下一次查询的令牌（Token）。取值： 如果 NextToken 为空表示没有下一次查询。 如果 NextToken 有返回值，该取值表示下一次查询开始的令牌。 */
  NextToken?: string;
  /** 列表条目数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHealthCheckTemplatesRequest {
  /** 过滤器。通过指定的过滤条件来查询健康检查模板，支持：Name的值为HealthCheckTemplateName。通过名称来筛选健康检查模板。Values的值为模板名称列表。Name的值为HealthCheckProtocol。通过健康检查协议来筛选健康检查模板。Values的值为协议列表。通过标签方式筛选。 */
  Filters?: Filter[];
  /** 健康检查模板 ID 列表，ID 格式为 hct- 后接字母数字。 */
  HealthCheckTemplateIds?: string[];
  /** 返回列表的数量，默认为20，最大值为100。 */
  MaxResults?: string;
  /** 下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。 */
  NextToken?: string;
}

declare interface DescribeHealthCheckTemplatesResponse {
  /** 健康检查模板列表。 */
  HealthCheckTemplates?: HealthCheckTemplate[];
  /** 下一次查询的Token值，如果当前是最后一页，返回为空。 */
  NextToken?: string;
  /** 经过筛选后查询到的健康检查模板总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenerCertificatesRequest {
  /** 证书类型。取值：CA或SVR（服务器证书）。 */
  CertificateType: string;
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 本次读取的最大数据记录数量。取值: 1~100。默认值: 20。 */
  MaxResults?: number;
  /** 下一次查询的令牌（Token）。取值：第一次查询和没有下一次查询时，均无需填写。如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。 */
  NextToken?: string;
}

declare interface DescribeListenerCertificatesResponse {
  /** 监听器绑定的证书信息列表。 */
  Certificates?: CertificateInfo[];
  /** 本次读取的最大数据记录数量。 */
  MaxResults?: number;
  /** 下一次查询的令牌。 */
  NextToken?: string | null;
  /** 监听器绑定的证书总量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenerDetailRequest {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
}

declare interface DescribeListenerDetailResponse {
  /** 监听器绑定的CA证书ID列表。 */
  CaCertificateIds?: string[];
  /** 是否开启双向认证。 */
  CaEnabled?: boolean;
  /** 服务器证书 ID 列表。 */
  CertificateIds?: string[];
  /** 监听器实例的创建时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00） */
  CreateTime?: string;
  /** 规则动作列表。 */
  DefaultActions?: DefaultAction[];
  /** 是否启用 Gzip 压缩。 */
  GzipEnabled?: boolean;
  /** 是否开启HTTP/2特性。 */
  Http2Enabled?: boolean;
  /** 指定连接空闲超时时间。单位：秒。 */
  IdleTimeout?: number;
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId?: string;
  /** 自定义监听名称。 */
  ListenerName?: string;
  /** 负载均衡实例前端使用的端口。 */
  ListenerPort?: number;
  /** 监听协议。 */
  ListenerProtocol?: string;
  /** 监听器状态。取值:=- **Active**: 运行中。- **Provisioning**：创建中。- **Configuring**：变配中。- **ProvisionFailed**：创建失败 */
  ListenerStatus?: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId?: string;
  /** 监听器实例的最后变更时间。格式：ISO 8601（例如 2025-01-01T08:30:00+08:00） */
  ModifyTime?: string;
  /** 请求超时时间。单位：秒。 */
  RequestTimeout?: number;
  /** 安全策略 ID，格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyId?: string;
  /** 标签。 */
  Tags?: TagInfo[];
  /** XForwardedFor配置。 */
  XForwardedForConfig?: XForwardedForConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenerHealthStatusRequest {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 是否包含转发规则的健康检查结果。为false时只返回默认转发规则的健康状态，为true时返回全部规则的健康状态(包含默认规则)。取值：true：是。false（默认值）：否。 */
  IncludeRule?: boolean;
  /** 本次读取的最大数据记录数量。取值: 1~100。默认值: 20 */
  MaxResults?: number;
  /** 下一页查询的Token值。第一次查询时，无需填写。 */
  NextToken?: string;
}

declare interface DescribeListenerHealthStatusResponse {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId?: string;
  /** 监听器端口。 */
  ListenerPort?: string;
  /** 监听器协议。 */
  ListenerProtocol?: string;
  /** 下一次查询的令牌（Token）。为空时表示这是最后一页。 */
  NextToken?: string;
  /** 转发规则健康状态。 */
  RuleHealthStatusInfos?: RuleHealthStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenersRequest {
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 过滤条件列表，最大支持20个。支持以下几个字段- **Protocol**: 协议类型- **Tags**: 标签 */
  Filters?: Filter[];
  /** 监听器 ID 列表，ID 格式为 lst- 后接 8 位字母数字。 */
  ListenerIds?: string[];
  /** 本次读取的最大数据记录数量。取值: 1~100。默认值: 20 */
  MaxResults?: number;
  /** 下一次查询的令牌（Token）。为空时查询第一页。 */
  NextToken?: string;
}

declare interface DescribeListenersResponse {
  /** 监听器信息。 */
  Listeners?: ListenerOutput[];
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId?: string;
  /** 本次读取的最大数据记录数量。 */
  MaxResults?: number;
  /** 下一次查询的令牌。 */
  NextToken?: string;
  /** 总条目数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancerDetailRequest {
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
}

declare interface DescribeLoadBalancerDetailResponse {
  /** 负载均衡详细信息 */
  LoadBalancerDetail?: LoadBalancerDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancersRequest {
  /** 查询过滤条件，支持以下几个字段- **LoadBalancerId**: 负载均衡实例 ID- **LoadBalancerName**: 负载均衡名称- **LoadBalancerStatus**: 负载均衡状态- **VpcId**: 私有网络 ID- **tag:tag-key**：按标签键值对筛选，tag-key 请替换为实际的标签键。例如 `tag:env` 表示按标签键 `env` 筛选。- **AddressType**: 网络类型 - **Intranet**: 内网 - **Internet**: 公网 - **AddressIpVersion**: - **IPv4**: IPv4 地址 - **IPv6** IPv6 地址 */
  Filters?: Filter[];
  /** 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值：**20**。 */
  MaxResults?: number;
  /** 是否拥有下一次查询的令牌（Token）。取值：- 第一次查询和没有下一次查询时，均无需填写。- 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。 */
  NextToken?: string;
}

declare interface DescribeLoadBalancersResponse {
  /** 应用型负载均衡实例列表。 */
  LoadBalancers?: LoadBalancer[];
  /** 分批次查询时每次显示的条目数。 */
  MaxResults?: number;
  /** 是否拥有下一次查询的令牌（Token）。取值：- 如果**NextToken**为空表示没有下一次查询。- 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。 */
  NextToken?: string;
  /** 列表条目数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuotaRequest {
  /** 配额类型列表。支持同时传入多个配额类型。查询资源级配额时，可配合 ResourceIds 传入对应资源ID；如需返回已使用量和可用量，可在 DisplayFields 中传入 used、available。枚举说明：- alb_quota_loadbalancers_num：每个地域可创建的 ALB 实例数。- alb_quota_targetgroups_num：每个地域可创建的 ALB 目标组数。- alb_quota_loadbalancer_listeners_num：每个 ALB 实例可创建的监听器数，ResourceIds 填写 ALB 实例 ID。- alb_quota_loadbalancer_rules_num：每个 ALB 实例可添加的转发规则数，不计入默认规则，ResourceIds 填写 ALB 实例 ID。- alb_quota_loadbalancer_certificates_num：每个 ALB 实例可添加的扩展证书数，不计入默认证书，ResourceIds 填写 ALB 实例 ID。- alb_quota_loadbalancer_targetgroup_num：每个 ALB 实例可绑定的目标组数，ResourceIds 填写 ALB 实例 ID。- alb_quota_loadbalancer_servers_num：每个 ALB 实例可添加的后端服务器数，ResourceIds 填写 ALB 实例 ID。- alb_quota_server_added_num：单个后端服务器 IP 可被添加到 ALB 后端目标组的次数。- alb_quota_targetgroup_attached_num：每个目标组可被 ALB 转发规则关联的次数，ResourceIds 填写目标组 ID。- alb_quota_targetgroup_targets_num：每个目标组支持的后端服务器数，适用于 IP 和端口类型后端，ResourceIds 填写目标组 ID。- alb_quota_targetgroup_targets_num_scf：每个目标组支持的 SCF 函数后端数，ResourceIds 填写目标组 ID。- alb_quota_max_request_timeout：创建监听器时可配置的连接请求最大超时时间。- alb_quota_max_idle_timeout：创建监听器时可配置的连接空闲最大超时时间。- alb_quota_listener_certificates_num：单个监听器可添加的证书数量，ResourceIds 填写监听器 ID。- alb_quota_rule_targetgroups_num：单条转发规则可绑定的目标组数量。- alb_quota_rule_conditions_num：单条转发规则可添加的匹配条件条目数。- alb_quota_rule_wildcards_num：单条转发规则可添加的包含通配符的匹配条目数。- alb_quota_rule_actions_num：单条转发规则可添加的动作条目数。- alb_quota_cipher_template_listeners_num：单个加密套件模板可关联的监听器数量。- alb_quota_healthcheck_templates_num：每个地域可创建的健康检查模板数。- alb_quota_securitygroup_templates_num：单个 ALB 实例支持绑定的安全组数量。- alb_quota_securitygroup_rules_per_sg_num：单个 ALB 实例中单个安全组支持的规则条目数。- alb_quota_security_policies_num：每个地域可创建的自定义安全策略数。 */
  QuotaTypes: string[];
  /** 显示字段列表，用于控制是否额外返回用量信息。支持 used、available：used 表示返回当前已使用量，available 表示返回当前剩余可用量。QuotaType 和 Limit 总是返回；ResourceId 会在请求传入 ResourceIds 时返回。 */
  DisplayFields?: string[];
  /** 资源ID列表。用于查询具体资源维度的配额和用量；不传时查询账号或地域维度的默认配额配置。资源ID的类型由 QuotaTypes 决定，例如 ALB 实例级配额填写 ALB 实例 ID，监听器级配额填写监听器 ID，目标组级配额填写目标组 ID。 */
  ResourceIds?: string[];
}

declare interface DescribeQuotaResponse {
  /** 配额列表。每个元素表示一个配额类型的查询结果；当请求传入 ResourceIds 时，每个元素表示一个配额类型和一个资源ID组合的查询结果。 */
  Quotas?: QuotaInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesRequest {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 支持的过滤条件如下： */
  Filters?: Filter[];
  /** 返回列表的数量，默认为20，最大值为100。 */
  MaxResults?: number;
  /** 下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。 */
  NextToken?: string;
  /** 转发规则 ID 列表，ID 格式为 rule- 后接 8 位字母数字。 */
  RuleIds?: string[];
}

declare interface DescribeRulesResponse {
  /** 下一次查询的Token值，如果当前是最后一页，返回为空。 */
  NextToken?: string;
  /** 转发规则列表。 */
  Rules?: RuleOutput[];
  /** 总的转发规则个数（根据监听器ID、规则ID等条件过滤后）。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityPoliciesRequest {
  /** 过滤条件列表，用于筛选符合指定条件的安全策略。多个过滤条件之间为"与"关系。**支持的过滤条件：**- **SecurityPolicyNames**：按安全策略名称筛选，支持模糊匹配。- **tag:tag-key**：按标签键值对筛选，tag-key 请替换为实际的标签键。例如 `tag:env` 表示按标签键 `env` 筛选。**说明：** 每个过滤条件最多支持 10 个取值。 */
  Filters?: Filter[];
  /** 单次请求返回的最大结果数。用于分页查询，与 NextToken 配合使用。**取值范围：** 1~100。**默认值：** 20。 */
  MaxResults?: number;
  /** 分页查询的起始令牌。用于获取下一页结果数据。**使用说明：**- 首次查询时无需设置此参数。- 如果上一次查询返回了 NextToken，表示还有更多数据，请将该值传入此参数以获取下一页。- 若上一次查询未返回 NextToken 或返回为空，表示已是最后一页。 */
  NextToken?: string;
  /** 安全策略 ID 列表，ID 格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyIds?: string[];
}

declare interface DescribeSecurityPoliciesResponse {
  /** 下一页查询的起始令牌。- 若返回值不为空，表示还有更多数据，可将此值作为下一次请求的 NextToken 参数继续查询。- 若返回值为空或未返回此字段，表示已是最后一页。 */
  NextToken?: string;
  /** 安全策略信息列表。包含每个安全策略的详细配置，如策略 ID、名称、TLS 版本、加密套件等。 */
  SecurityPolicies?: SecurityPolicyInfo[];
  /** 符合过滤条件的安全策略总数。**说明：** 此值表示满足查询条件的总记录数，而非本次返回的记录数。可用于计算分页信息。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityPolicyCapabilitiesRequest {
}

declare interface DescribeSecurityPolicyCapabilitiesResponse {
  /** 安全策略配置能力列表。返回当前地域支持的所有 TLS 版本及其对应的加密套件信息。**返回内容包含：**- 支持的 TLS 协议版本（如 TLSv1.0、TLSv1.1、TLSv1.2、TLSv1.3）。- 每个 TLS 版本支持的加密套件列表。**使用场景：**- 在创建安全策略（CreateSecurityPolicy）前，调用此接口获取可选的加密套件。- 在修改安全策略（ModifySecurityPolicyAttributes）前，确认新配置的有效性。 */
  SecurityPolicyCapabilities?: SecurityPolicyCapability[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityPolicyRelationsRequest {
  /** 安全策略 ID 列表，ID 格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyIds: string[];
}

declare interface DescribeSecurityPolicyRelationsResponse {
  /** 安全策略关联的监听器列表。返回每个安全策略所关联的 HTTPS 监听器信息。 */
  SecurityPolicyRelations?: SecurityPolicyRelations[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSystemSecurityPoliciesRequest {
}

declare interface DescribeSystemSecurityPoliciesResponse {
  /** 系统安全策略列表。 */
  SecurityPolicies?: SecurityPolicyInfo[];
  /** 安全策略总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupTargetsRequest {
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId: string;
  /** 过滤器。通过指定的过滤条件来查询后端服务，支持：- Name的值为**TargetId**。通过资源ID来筛选后端服务，当目标组后端类型为**Instance**时生效。**Values**的值为Cvm或Eni的资源ID。- Name的值为**TargetIp**。通过资源IP来筛选后端服务，当目标组后端类型为**Ip**时生效。**Values**的值为后端服务的IP。- 通过标签方式筛选。 */
  Filters?: Filter[];
  /** 返回列表的数量，默认为**20**，最大值为**100**。 */
  MaxResults?: number;
  /** 下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。 */
  NextToken?: string;
}

declare interface DescribeTargetGroupTargetsResponse {
  /** 下一次查询的Token值，如果当前是最后一页，返回为空。 */
  NextToken?: string;
  /** 后端服务信息。 */
  Targets?: TargetOutput[];
  /** 目标组内后端服务总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupsByTargetRequest {
  /** 后端服务实例 ID，CVM 实例格式为 ins- 后接 8 位字母数字。 */
  TargetId?: string[];
}

declare interface DescribeTargetGroupsByTargetResponse {
  /** 总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupsRequest {
  /** 过滤器。通过指定的过滤条件来查询后端服务，支持：- Name的值为**VpcId**。通过VPC实例来筛选目标组。**Values**的值为VPC唯一ID列表。- Name的值为**TargetType**。通过后端服务类型来筛选目标组。**Values**的值可以取为**Instance**。- Name的值为**TargetGroupName**。通过目标组名称来筛选目标组。**Values**的值为目标组名称列表。- Name的值为**Protocol**。通过目标组后端服务协议来筛选目标组。**Values**的值为目标组后端服务协议列表。- 通过标签方式筛选。 */
  Filters?: Filter[];
  /** 返回列表的数量，默认为**20**，最大值为**100**。 */
  MaxResults?: number;
  /** 下一次查询的Token值。第一次查询和没有下一次查询时，无需填写。如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。 */
  NextToken?: string;
  /** 目标组 ID 列表，ID 格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupIds?: string[];
}

declare interface DescribeTargetGroupsResponse {
  /** 下一次查询的Token值，如果当前是最后一页，返回为空。 */
  NextToken?: string | null;
  /** 目标组信息。 */
  TargetGroups?: TargetGroupOutput[];
  /** 目标组总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
}

declare interface DescribeZonesResponse {
  /** 可用区列表 */
  Zones?: Zone[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateBandwidthPackageFromLoadBalancerRequest {
  /** 共享带宽包 ID。 */
  BandwidthPackageId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。> 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。 */
  ClientToken?: string;
  /** 是否只预检此次请求。取值：- **true**：发送检查请求，不会将共享带宽包从负载均衡实例中移除。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。- **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。 */
  DryRun?: boolean;
}

declare interface DisassociateBandwidthPackageFromLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateListenerAdditionalCertificatesRequest {
  /** 待解绑的扩展证书 ID 列表。 */
  CertificateIds: string[];
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 客户端 Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken 只支持 ASCII 字符。若您未指定，则系统自动使用 API 请求的 RequestId 作为 ClientToken 标识。每次 API 请求的 RequestId 不一样。 */
  ClientToken?: string;
  /** 是否只预检此次请求，取值：true：发送检查请求，不会从 HTTPS和QUIC监听器解绑扩展证书。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。false（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。 */
  DryRun?: string;
}

declare interface DisassociateListenerAdditionalCertificatesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateLoadBalancerRequest {
  /** 实例的计费类型。默认POSTPAID_BY_HOUR，仅取值 POSTPAID_BY_HOUR：表示按量计费。 */
  ChargeType?: string;
}

declare interface InquirePriceCreateLoadBalancerResponse {
  /** 询价结果。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHealthCheckTemplateRequest {
  /** 健康检查模板 ID，格式为 hct- 后接字母数字。 */
  HealthCheckTemplateId: string;
  /** 是否预览此次请求。- **false**（默认）：发送普通请求，直接修改健康检查模板。- **true**：发送预览请求，检查修改健康检查模板的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
  /** 健康检查状态码。取值：- 当健康检查协议为**HTTP/HTTPS**时：	- **http_1xx**	- **http_2xx**（默认值）	- **http_3xx**	- **http_4xx**	- **http_5xx**- 当健康检查协议为**GRPC/GRPCS**时：默认值为**12**，数值范围为**0-99**，输入值可为数值、多个数值或者范围以及相互组合，如：	- **"20"**	- **"0-99"** */
  HealthCheckCodes?: string[];
  /** 判定后端服务健康的阈值，当健康检查连续成功多少次后，后端服务的状态由**不健康**变为**健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckHealthyThreshold?: number;
  /** 健康检查域名。长度限制为 **1-255** 个字符。可包含小写字母、数字、短划线（-）和半角句号（.）。> 仅当 **HealthCheckProtocol** 设置为 **HTTP/HTTPS/GRPC/GRPCS** 时，该参数生效。 */
  HealthCheckHost?: string;
  /** 健康检查 HTTP 协议版本，取值：- **HTTP1.1**（默认）- **HTTP1.0** > 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckHttpVersion?: string;
  /** 健康检查的时间间隔。单位：秒。 取值范围：**2**-**300**。 默认值：**5**。 */
  HealthCheckInterval?: number;
  /** 健康检查方法，取值： - **GET** - **HEAD**（默认值） > 仅当**HealthCheckProtocol**设置为**HTTP** 或 **HTTPS** 时，该参数生效。 */
  HealthCheckMethod?: string;
  /** 健康检查的转发规则路径。 长度为 **1-80** 个字符，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL 必须以正斜线（/）开头。 > 仅当**HealthCheckProtocol**为**HTTP/HTTPS/GRPC/GRPCS**时，转发规则路径参数生效。 */
  HealthCheckPath?: string;
  /** 健康检查访问后端服务器的端口。 取值范围：**0-65535**。 默认值：**0**，表示后端服务器的端口。 */
  HealthCheckPort?: number;
  /** 健康检查协议。取值：- **HTTP**（默认）：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。- **HTTPS**：通过发送 HEAD 或 GET 请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比 HTTP 更安全。）- **TCP**：通过发送 SYN 握手报文来检测服务器端口是否存活。- **GRPC**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。- **GRPCS**：通过发送 POST 或 GET 请求来检查服务器应用是否健康。 */
  HealthCheckProtocol?: string;
  /** 健康检查模板名称。长度为 **1-255** 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。 */
  HealthCheckTemplateName?: string;
  /** 健康检查的响应超时时间。单位：秒。取值范围：**2**-**60**。默认值：**2**。 */
  HealthCheckTimeout?: number;
  /** 判定后端服务不健康的阈值，当健康检查连续失败多少次后，后端服务的状态由**健康**变为**不健康**。取值范围：**2**-**10**。默认值：**2**。 */
  HealthCheckUnhealthyThreshold?: number;
  /** 标签。 */
  Tags?: TagInfo[];
}

declare interface ModifyHealthCheckTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyListenerAttributesRequest {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 监听器配置的CA证书ID列表。目前仅支持添加1个CA证书。 */
  CaCertificateIds?: string[];
  /** 是否开启双向认证。取值：true：开启。false（默认值）：不开启。 */
  CaEnabled?: boolean;
  /** 服务器证书 ID 列表。 */
  CertificateIds?: string[];
  /** 客户端Token，用于保证请求的幂等性。 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。 */
  ClientToken?: string;
  /** 默认转发规则动作列表。目前监听器仅支持添加 1 个默认转发规则动作。 */
  DefaultActions?: DefaultAction[];
  /** 是否启用 Gzip 压缩。 */
  GzipEnabled?: boolean;
  /** 是否开启HTTP/2特性。只有 HTTPS 协议支持此参数。 */
  Http2Enabled?: boolean;
  /** 指定连接空闲超时时间。单位：秒。取值范围：1~600。默认值：15。如果在设定时间内一直没有访问请求，负载均衡会暂时断开当前连接，下次请求来临时重新建立新的连接。 */
  IdleTimeout?: number;
  /** 自定义监听名称。 长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。 */
  ListenerName?: string;
  /** 指定请求超时时间。单位：秒。取值：1~600。默认值：60。如果在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，并给客户端返回HTTP 504错误码。 */
  RequestTimeout?: number;
  /** 安全策略 ID，格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyId?: string;
  /** XForwardedFor配置。 */
  XForwardedForConfig?: XForwardedForConfig;
}

declare interface ModifyListenerAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerAddressTypeRequest {
  /** 目标网络类型。取值：- **Internet**（公网型）负载均衡实例分配公网 IP 地址，域名（DNS）解析至公网 IP，可在公网环境中直接访问，适用于对外提供服务的业务场景。- **Intranet**（内网型）负载均衡实例仅分配私网 IP 地址，域名（DNS）解析至私网 IP，仅支持在负载均衡实例所属 VPC 内的内网环境访问，适用于内部业务或对安全性要求较高的场景。 */
  AddressType: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 共享带宽包 ID。 */
  BandwidthPackageId?: string;
  /** 是否只预检此次请求。取值：- **true**：发送检查请求，不会更新实例的网络类型。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。- **false**（默认值）：发送正常请求，通过检查后返回 HTTP 2xx 状态码并直接进行操作。 */
  DryRun?: boolean;
  /** 可用区及子网映射结构体。若当前地域支持 2 个及以上的可用区，至少需要添加 2 个可用区。 */
  ZoneMappings?: ZoneMappingsItem[];
}

declare interface ModifyLoadBalancerAddressTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerAttributesRequest {
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。> 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。 */
  ClientToken?: string;
  /** 删除保护配置 */
  DeletionProtection?: DeletionProtectionConfig;
  /** 是否只预检此次请求，取值：- **true**：发送检查请求，不会修改应用型负载均衡实例的属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。- **false**（默认值）：发送正常请求，通过检查后返回`HTTP_2xx`状态码并直接进行操作。 */
  DryRun?: boolean;
  /** 应用型负载均衡实例名称。长度为1~80个字符，可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。 */
  LoadBalancerName?: string;
}

declare interface ModifyLoadBalancerAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerModificationProtectionRequest {
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 是否开启修改保护。开启后，可防止实例被意外修改或删除。\n- true：开启修改保护\n- false：关闭修改保护 */
  ModificationProtectionEnabled: boolean;
  /** 是否只预检此次请求。取值：- true：仅执行预检，不实际操作资源。检查参数完整性、请求格式及业务限制，通过返回 DryRunOperation，不通过返回对应错误。- false（默认）：执行正常请求，检查通过后直接操作资源。 */
  DryRun?: boolean;
  /** 开启修改保护的原因说明。长度为 1~255 个字符，必须是中文和无害字符串中的字符， 可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。 */
  Reason?: string;
}

declare interface ModifyLoadBalancerModificationProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRulesAttributesRequest {
  /** 监听器 ID，格式为 lst- 后接 8 位字母数字。 */
  ListenerId: string;
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 转发规则列表。 */
  Rules: RuleModify[];
  /** 是否只预检查此次请求。 */
  DryRun?: boolean;
}

declare interface ModifyRulesAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityPolicyAttributesRequest {
  /** 安全策略 ID，格式为 tls- 后接 8 位字母数字。 */
  SecurityPolicyId: string;
  /** 修改后的加密套件列表。加密套件用于协商客户端与服务端之间的加密算法。配置说明：加密套件的可选范围取决于所选的 TLS 协议版本（TLSVersions 参数）。只要加密套件被任意一个已选 TLS 版本支持，即可添加到列表中。若 TLSVersions 包含 TLSv1.3：可不指定 TLSv1.3 专属加密套件（系统将自动补全全部 TLSv1.3 套件）；若指定，则必须包含全部 TLSv1.3 专属加密套件，不支持仅指定部分。获取可用加密套件：请调用 DescribeSecurityPolicyCapabilities 接口查询各 TLS 版本支持的加密套件列表。注意： 若不传此参数，则保持原有配置不变。 */
  Ciphers?: string[];
  /** 是否仅执行预检请求。取值：true：仅执行预检请求，不实际修改资源。预检请求将验证参数格式、权限及配置有效性等，帮助您在正式操作前发现潜在问题。false（默认）：执行正常请求，通过预检后将直接修改安全策略。 */
  DryRun?: boolean;
  /** 修改后的安全策略名称。用于标识和区分不同的安全策略。命名规则：长度为 2~128 个字符。必须以英文字母或中文开头。可包含英文字母、中文、数字、半角句号（.）、下划线（_）和短划线（-）。注意： 若不传此参数，则保持原有名称不变。 */
  SecurityPolicyName?: string;
  /** 修改后的 TLS 协议版本列表。TLS（Transport Layer Security）协议用于保障客户端与负载均衡之间的通信安全。可选值：TLSv1.0：兼容性最好，但安全性较低，不推荐在生产环境使用。TLSv1.1：安全性略优于 TLSv1.0，但仍不推荐。TLSv1.2：目前主流的安全协议版本，兼顾安全性与兼容性。TLSv1.3：最新版本，安全性最高，性能更优，推荐优先使用。注意： 若不传此参数，则保持原有配置不变。修改 TLS 版本时，请同步检查 Ciphers 参数的配置是否兼容。 */
  TLSVersions?: string[];
}

declare interface ModifySecurityPolicyAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetGroupAttributesRequest {
  /** 是否预览此次请求。false（默认）：发送普通请求，直接修改目标组。true：发送预览请求，检查修改目标组的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
  /** 健康检查配置。 */
  HealthCheckConfig?: HealthCheckConfig;
  /** 是否开启长连接。 */
  KeepaliveEnabled?: boolean;
  /** 调度算法。取值：wrr：加权轮询，按照权重选择后端服务器，权重越高的服务器被轮询到的概率越高。wlc：加权最小连接数，当不同后端服务器权重值相同时，当前连接数越小的后端服务器被轮询到的概率越高。 */
  SchedulerAlgorithm?: string;
  /** 会话保持配置。 */
  StickySessionConfig?: StickySessionConfig;
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId?: string;
  /** 目标组名称。长度为 1~255 个字符，可包含数字、大小写字母、中文、半角句号（.）、下划线（_）和短划线（-）。不传目标组名称时默认使用ID作为目标组名称。 */
  TargetGroupName?: string;
}

declare interface ModifyTargetGroupAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetsInTargetGroupRequest {
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId: string;
  /** 需要修改的后端服务列表。 */
  Targets: TargetToModify[];
  /** 是否预览此次请求。 - **false**（默认）：发送普通请求，直接修改后端服务信息。 - **true**：发送预览请求，检查修改后端服务的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
}

declare interface ModifyTargetsInTargetGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface NotifyUnbindTargetRequest {
  /** 后端服务的IP列表。> **VpcId**（**NumericVpcId**）、**Ips**必须同时设置。 */
  Ips: string[];
  /** 后端服务所属VPC的数字ID。> **VpcId**（**NumericVpcId**）、**Ips**必须同时设置。 */
  NumericVpcId: number;
}

declare interface NotifyUnbindTargetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveTargetsFromTargetGroupRequest {
  /** 目标组 ID，格式为 lbtg- 后接 8 位字母数字。 */
  TargetGroupId: string;
  /** 需要从目标组移除的后端服务列表。单次请求最多移除 **50** 个后端服务。 */
  Targets: TargetToRemove[];
  /** 是否预览此次请求。 - **false**（默认）：发送普通请求，直接移除后端服务。 - **true**：发送预览请求，检查移除后端服务的参数、格式、业务限制等是否符合要求。 */
  DryRun?: boolean;
}

declare interface RemoveTargetsFromTargetGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLoadBalancerSecurityGroupsRequest {
  /** 负载均衡实例 ID，格式为 alb- 后接 8 位字母数字。 */
  LoadBalancerId: string;
  /** 安全组 ID 列表。 */
  SecurityGroups: string[];
}

declare interface SetLoadBalancerSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Alb 应用型负载均衡} */
declare interface Alb {
  (): Versions;
  /** 向目标组内添加后端服务 {@link AddTargetsToTargetGroupRequest} {@link AddTargetsToTargetGroupResponse} */
  AddTargetsToTargetGroup(data: AddTargetsToTargetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddTargetsToTargetGroupResponse>;
  /** 实例绑定共享带宽包 {@link AssociateBandwidthPackageWithLoadBalancerRequest} {@link AssociateBandwidthPackageWithLoadBalancerResponse} */
  AssociateBandwidthPackageWithLoadBalancer(data: AssociateBandwidthPackageWithLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateBandwidthPackageWithLoadBalancerResponse>;
  /** 监听器绑定扩展证书 {@link AssociateListenerAdditionalCertificatesRequest} {@link AssociateListenerAdditionalCertificatesResponse} */
  AssociateListenerAdditionalCertificates(data: AssociateListenerAdditionalCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateListenerAdditionalCertificatesResponse>;
  /** 创建健康检查模板 {@link CreateHealthCheckTemplateRequest} {@link CreateHealthCheckTemplateResponse} */
  CreateHealthCheckTemplate(data?: CreateHealthCheckTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHealthCheckTemplateResponse>;
  /** 创建监听器 {@link CreateListenerRequest} {@link CreateListenerResponse} */
  CreateListener(data: CreateListenerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateListenerResponse>;
  /** 创建应用型负载均衡实例 {@link CreateLoadBalancerRequest} {@link CreateLoadBalancerResponse} */
  CreateLoadBalancer(data: CreateLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoadBalancerResponse>;
  /** 创建转发规则 {@link CreateRulesRequest} {@link CreateRulesResponse} */
  CreateRules(data: CreateRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRulesResponse>;
  /** 创建自定义安全策略 {@link CreateSecurityPolicyRequest} {@link CreateSecurityPolicyResponse} */
  CreateSecurityPolicy(data: CreateSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityPolicyResponse>;
  /** 创建目标组 {@link CreateTargetGroupRequest} {@link CreateTargetGroupResponse} */
  CreateTargetGroup(data: CreateTargetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTargetGroupResponse>;
  /** 删除健康检查模板 {@link DeleteHealthCheckTemplatesRequest} {@link DeleteHealthCheckTemplatesResponse} */
  DeleteHealthCheckTemplates(data: DeleteHealthCheckTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHealthCheckTemplatesResponse>;
  /** 删除监听器 {@link DeleteListenerRequest} {@link DeleteListenerResponse} */
  DeleteListener(data: DeleteListenerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenerResponse>;
  /** 删除应用型负载均衡实例 {@link DeleteLoadBalancersRequest} {@link DeleteLoadBalancersResponse} */
  DeleteLoadBalancers(data: DeleteLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancersResponse>;
  /** 删除转发规则 {@link DeleteRulesRequest} {@link DeleteRulesResponse} */
  DeleteRules(data: DeleteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRulesResponse>;
  /** 删除安全策略 {@link DeleteSecurityPolicyRequest} {@link DeleteSecurityPolicyResponse} */
  DeleteSecurityPolicy(data: DeleteSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityPolicyResponse>;
  /** 删除目标组 {@link DeleteTargetGroupsRequest} {@link DeleteTargetGroupsResponse} */
  DeleteTargetGroups(data?: DeleteTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTargetGroupsResponse>;
  /** 查询异步任务信息 {@link DescribeAsyncJobsRequest} {@link DescribeAsyncJobsResponse} */
  DescribeAsyncJobs(data?: DescribeAsyncJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAsyncJobsResponse>;
  /** 查询健康检查模板列表 {@link DescribeHealthCheckTemplatesRequest} {@link DescribeHealthCheckTemplatesResponse} */
  DescribeHealthCheckTemplates(data?: DescribeHealthCheckTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHealthCheckTemplatesResponse>;
  /** 查询监听器绑定证书列表 {@link DescribeListenerCertificatesRequest} {@link DescribeListenerCertificatesResponse} */
  DescribeListenerCertificates(data: DescribeListenerCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerCertificatesResponse>;
  /** 查询监听器详细信息 {@link DescribeListenerDetailRequest} {@link DescribeListenerDetailResponse} */
  DescribeListenerDetail(data: DescribeListenerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerDetailResponse>;
  /** 查询监听器健康状态 {@link DescribeListenerHealthStatusRequest} {@link DescribeListenerHealthStatusResponse} */
  DescribeListenerHealthStatus(data: DescribeListenerHealthStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerHealthStatusResponse>;
  /** 查询监听器列表 {@link DescribeListenersRequest} {@link DescribeListenersResponse} */
  DescribeListeners(data: DescribeListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenersResponse>;
  /** 查询负载均衡实例详细信息 {@link DescribeLoadBalancerDetailRequest} {@link DescribeLoadBalancerDetailResponse} */
  DescribeLoadBalancerDetail(data: DescribeLoadBalancerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancerDetailResponse>;
  /** 查询负载均衡列表 {@link DescribeLoadBalancersRequest} {@link DescribeLoadBalancersResponse} */
  DescribeLoadBalancers(data?: DescribeLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancersResponse>;
  /** 查询配额 {@link DescribeQuotaRequest} {@link DescribeQuotaResponse} */
  DescribeQuota(data: DescribeQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuotaResponse>;
  /** 查询转发规则 {@link DescribeRulesRequest} {@link DescribeRulesResponse} */
  DescribeRules(data: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 查询自定义安全策略 {@link DescribeSecurityPoliciesRequest} {@link DescribeSecurityPoliciesResponse} */
  DescribeSecurityPolicies(data?: DescribeSecurityPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityPoliciesResponse>;
  /** 获取支持的安全策略加密套件设置 {@link DescribeSecurityPolicyCapabilitiesRequest} {@link DescribeSecurityPolicyCapabilitiesResponse} */
  DescribeSecurityPolicyCapabilities(data?: DescribeSecurityPolicyCapabilitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityPolicyCapabilitiesResponse>;
  /** 查询安全策略关联关系 {@link DescribeSecurityPolicyRelationsRequest} {@link DescribeSecurityPolicyRelationsResponse} */
  DescribeSecurityPolicyRelations(data: DescribeSecurityPolicyRelationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityPolicyRelationsResponse>;
  /** 查询系统安全策略 {@link DescribeSystemSecurityPoliciesRequest} {@link DescribeSystemSecurityPoliciesResponse} */
  DescribeSystemSecurityPolicies(data?: DescribeSystemSecurityPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemSecurityPoliciesResponse>;
  /** 查询目标组内后端服务 {@link DescribeTargetGroupTargetsRequest} {@link DescribeTargetGroupTargetsResponse} */
  DescribeTargetGroupTargets(data: DescribeTargetGroupTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupTargetsResponse>;
  /** 查询目标组列表 {@link DescribeTargetGroupsRequest} {@link DescribeTargetGroupsResponse} */
  DescribeTargetGroups(data?: DescribeTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupsResponse>;
  /** 根据后端服务查询绑定的目标组 {@link DescribeTargetGroupsByTargetRequest} {@link DescribeTargetGroupsByTargetResponse} */
  DescribeTargetGroupsByTarget(data?: DescribeTargetGroupsByTargetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupsByTargetResponse>;
  /** 查询可用区信息 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 实例解绑共享带宽包 {@link DisassociateBandwidthPackageFromLoadBalancerRequest} {@link DisassociateBandwidthPackageFromLoadBalancerResponse} */
  DisassociateBandwidthPackageFromLoadBalancer(data: DisassociateBandwidthPackageFromLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateBandwidthPackageFromLoadBalancerResponse>;
  /** 监听器解绑扩展证书 {@link DisassociateListenerAdditionalCertificatesRequest} {@link DisassociateListenerAdditionalCertificatesResponse} */
  DisassociateListenerAdditionalCertificates(data: DisassociateListenerAdditionalCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateListenerAdditionalCertificatesResponse>;
  /** 创建负载均衡实例询价 {@link InquirePriceCreateLoadBalancerRequest} {@link InquirePriceCreateLoadBalancerResponse} */
  InquirePriceCreateLoadBalancer(data?: InquirePriceCreateLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateLoadBalancerResponse>;
  /** 修改健康检查模板 {@link ModifyHealthCheckTemplateRequest} {@link ModifyHealthCheckTemplateResponse} */
  ModifyHealthCheckTemplate(data: ModifyHealthCheckTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHealthCheckTemplateResponse>;
  /** 修改监听器 {@link ModifyListenerAttributesRequest} {@link ModifyListenerAttributesResponse} */
  ModifyListenerAttributes(data: ModifyListenerAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyListenerAttributesResponse>;
  /** 修改负载均衡实例的网络类型 {@link ModifyLoadBalancerAddressTypeRequest} {@link ModifyLoadBalancerAddressTypeResponse} */
  ModifyLoadBalancerAddressType(data: ModifyLoadBalancerAddressTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerAddressTypeResponse>;
  /** 更新负载均衡实例属性 {@link ModifyLoadBalancerAttributesRequest} {@link ModifyLoadBalancerAttributesResponse} */
  ModifyLoadBalancerAttributes(data: ModifyLoadBalancerAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerAttributesResponse>;
  /** 设置负载均衡实例操作保护 {@link ModifyLoadBalancerModificationProtectionRequest} {@link ModifyLoadBalancerModificationProtectionResponse} */
  ModifyLoadBalancerModificationProtection(data: ModifyLoadBalancerModificationProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerModificationProtectionResponse>;
  /** 修改转发规则属性 {@link ModifyRulesAttributesRequest} {@link ModifyRulesAttributesResponse} */
  ModifyRulesAttributes(data: ModifyRulesAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRulesAttributesResponse>;
  /** 修改安全策略 {@link ModifySecurityPolicyAttributesRequest} {@link ModifySecurityPolicyAttributesResponse} */
  ModifySecurityPolicyAttributes(data: ModifySecurityPolicyAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityPolicyAttributesResponse>;
  /** 修改目标组 {@link ModifyTargetGroupAttributesRequest} {@link ModifyTargetGroupAttributesResponse} */
  ModifyTargetGroupAttributes(data?: ModifyTargetGroupAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetGroupAttributesResponse>;
  /** 修改目标组内后端服务信息 {@link ModifyTargetsInTargetGroupRequest} {@link ModifyTargetsInTargetGroupResponse} */
  ModifyTargetsInTargetGroup(data: ModifyTargetsInTargetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetsInTargetGroupResponse>;
  /** 通知负载均衡解绑后端服务 {@link NotifyUnbindTargetRequest} {@link NotifyUnbindTargetResponse} */
  NotifyUnbindTarget(data: NotifyUnbindTargetRequest, config?: AxiosRequestConfig): AxiosPromise<NotifyUnbindTargetResponse>;
  /** 从目标组内移除后端服务 {@link RemoveTargetsFromTargetGroupRequest} {@link RemoveTargetsFromTargetGroupResponse} */
  RemoveTargetsFromTargetGroup(data: RemoveTargetsFromTargetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveTargetsFromTargetGroupResponse>;
  /** 设置负载均衡实例的安全组 {@link SetLoadBalancerSecurityGroupsRequest} {@link SetLoadBalancerSecurityGroupsResponse} */
  SetLoadBalancerSecurityGroups(data: SetLoadBalancerSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<SetLoadBalancerSecurityGroupsResponse>;
}

export declare type Versions = ["2025-10-30"];

export default Alb;
