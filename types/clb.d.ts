/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 目标组关联到的规则 */
declare interface AssociationItem {
  /** 关联到的负载均衡ID */
  LoadBalancerId?: string;
  /** 关联到的监听器ID */
  ListenerId?: string;
  /** 关联到的转发规则ID */
  LocationId?: string | null;
  /** 关联到的监听器协议类型，如HTTP,TCP, */
  Protocol?: string;
  /** 关联到的监听器端口 */
  Port?: number;
  /** 关联到的转发规则域名 */
  Domain?: string | null;
  /** 关联到的转发规则URL */
  Url?: string | null;
  /** 负载均衡名称 */
  LoadBalancerName?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 关联目标组的权重， 该参数只有v2新版目标组生效。 */
  Weight?: number;
}

/** 监听器绑定的后端服务的详细信息 */
declare interface Backend {
  /** 后端服务的类型，可取：CVM、ENI、CCN、EVM、GLOBALROUTE、NAT、SRV等 */
  Type?: string;
  /** 后端服务的唯一 ID，如 ins-abcd1234 */
  InstanceId?: string;
  /** 后端服务的监听端口，如果是全端口段监听器绑定的全监听目标组场景，此端口返回0，表示无效端口，绑定的后端服务的端口随监听器端口。 */
  Port?: number;
  /** 后端服务的转发权重，取值范围：[0, 100]，默认为 10。 */
  Weight?: number;
  /** 后端服务的外网 IP */
  PublicIpAddresses?: string[] | null;
  /** 后端服务的内网 IP */
  PrivateIpAddresses?: string[];
  /** 后端服务的实例名称 */
  InstanceName?: string | null;
  /** 后端服务被绑定的时间 */
  RegisteredTime?: string;
  /** 弹性网卡唯一ID，如 eni-1234abcd */
  EniId?: string | null;
  /** 标签。 */
  Tag?: string;
}

/** 监听器或者转发规则绑定的目标组基本信息 */
declare interface BasicTargetGroupInfo {
  /** 目标组ID */
  TargetGroupId?: string;
  /** 目标组名称 */
  TargetGroupName?: string;
  /** 目标组权重 */
  Weight?: number;
}

/** 批量绑定类型 */
declare interface BatchTarget {
  /** 监听器 ID。 */
  ListenerId: string;
  /** 绑定端口。 */
  Port: number;
  /** 子机 ID。表示绑定主网卡主 IP。 */
  InstanceId?: string;
  /** 绑定 IP 时需要传入此参数，支持弹性网卡的 IP 和其他内网 IP，如果是弹性网卡则必须先绑定至CVM，然后才能绑定到负载均衡实例。注意：参数 InstanceId、EniIp 只能传入一个且必须传入一个。如果绑定双栈IPV6子机，必须传该参数。 */
  EniIp?: string;
  /** 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10。 */
  Weight?: number;
  /** 七层规则 ID。7层负载均衡该参数必填 */
  LocationId?: string;
  /** 标签。 */
  Tag?: string;
}

/** 绑定关系，包含监听器名字、协议、url、vport。 */
declare interface BindDetailItem {
  /** 配置绑定的CLB ID */
  LoadBalancerId?: string;
  /** 配置绑定的监听器ID */
  ListenerId?: string;
  /** 配置绑定的域名 */
  Domain?: string;
  /** 配置绑定的规则 */
  LocationId?: string;
  /** 监听器名字 */
  ListenerName?: string;
  /** 监听器协议 */
  Protocol?: string;
  /** 监听器端口 */
  Vport?: number;
  /** location的url */
  Url?: string | null;
  /** 配置ID */
  UconfigId?: string;
}

/** 配置绑定关系 */
declare interface BindItem {
  /** 配置绑定的CLB ID */
  LoadBalancerId: string;
  /** 配置绑定的监听器ID */
  ListenerId: string;
  /** 配置绑定的域名 */
  Domain: string;
  /** 配置绑定的规则 */
  LocationId?: string;
}

/** 加入了12306黑名单的IP */
declare interface BlockedIP {
  /** 黑名单IP */
  IP?: string;
  /** 加入黑名单的时间 */
  CreateTime?: string;
  /** 过期时间 */
  ExpireTime?: string;
}

/** 证书ID，以及与该证书ID关联的负载均衡实例列表 */
declare interface CertIdRelatedWithLoadBalancers {
  /** 证书ID */
  CertId?: string;
  /** 与证书关联的负载均衡实例列表 */
  LoadBalancers?: LoadBalancer[];
}

/** 证书信息 */
declare interface CertInfo {
  /** 证书 ID，如果不填写此项则必须上传证书内容，包括CertName, CertContent，若为服务端证书必须包含CertKey。 */
  CertId?: string;
  /** 上传证书的名称，如果没有 CertId，则此项必传。 */
  CertName?: string;
  /** 上传证书的公钥；如果没有 CertId，则此项必传。 */
  CertContent?: string;
  /** 上传服务端证书的私钥；如果没有 CertId，则此项必传。 */
  CertKey?: string;
}

/** 证书信息 */
declare interface CertificateInput {
  /** 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证。默认为 UNIDIRECTIONAL。 */
  SSLMode?: string;
  /** 双向认证时，是否开启客户端认证，ON:开启，OPTIONAL:自适应，默认ON。 */
  SSLVerifyClient?: string;
  /** 服务端证书的 ID，如果不填写此项则必须上传证书，包括 CertContent（服务端证书内容），CertKey（服务端证书密钥），CertName（服务端证书名称）。 */
  CertId?: string;
  /** 客户端证书的 ID，当监听器采用双向认证，即 SSLMode=MUTUAL 时，如果不填写此项则必须上传客户端证书，包括 CertCaContent，CertCaName。 */
  CertCaId?: string;
  /** 上传服务端证书的名称，如果没有 CertId，则此项必传。 */
  CertName?: string;
  /** 上传服务端证书的 key，如果没有 CertId，则此项必传。 */
  CertKey?: string;
  /** 上传服务端证书的内容，如果没有 CertId，则此项必传。 */
  CertContent?: string;
  /** 上传客户端 CA 证书的名称，如果 SSLMode=MUTUAL，如果没有 CertCaId，则此项必传。 */
  CertCaName?: string;
  /** 上传客户端证书的内容，如果 SSLMode=MUTUAL，如果没有 CertCaId，则此项必传。 */
  CertCaContent?: string;
}

/** 证书相关信息 */
declare interface CertificateOutput {
  /** 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证 */
  SSLMode?: string;
  /** 是否开启客户端证书验证，只在双向认证时生效。 */
  SSLVerifyClient?: string;
  /** 服务端证书的ID。 */
  CertId?: string;
  /** 客户端证书的 ID。 */
  CertCaId?: string;
  /** 多本服务器证书场景扩展的服务器证书ID。 */
  ExtCertIds?: string[];
}

/** 传统型负载均衡后端服务的健康状态 */
declare interface ClassicalHealth {
  /** 后端服务的内网 IP */
  IP?: string;
  /** 后端服务的端口 */
  Port?: number;
  /** 负载均衡的监听端口 */
  ListenerPort?: number;
  /** 转发协议 */
  Protocol?: string;
  /** 健康检查结果，1 表示健康，0 表示不健康 */
  HealthStatus?: number;
}

/** 传统型负载均衡监听器信息 */
declare interface ClassicalListener {
  /** 负载均衡监听器ID */
  ListenerId?: string;
  /** 负载均衡监听器端口 */
  ListenerPort?: number;
  /** 监听器后端转发端口 */
  InstancePort?: number;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器协议类型 */
  Protocol?: string;
  /** 会话保持时间 */
  SessionExpire?: number;
  /** 是否开启了健康检查：1（开启）、0（关闭） */
  HealthSwitch?: number;
  /** 响应超时时间 */
  TimeOut?: number;
  /** 检查间隔 */
  IntervalTime?: number;
  /** 健康阈值 */
  HealthNum?: number;
  /** 不健康阈值 */
  UnhealthNum?: number;
  /** 传统型公网负载均衡 监听器的请求均衡方法。空字符串或wrr 表示按权重轮询，ip_hash 表示根据访问的源 IP 进行一致性哈希方式来分发，least_conn表示按最小连接数。 */
  HttpHash?: string;
  /** 传统型公网负载均衡的 HTTP、HTTPS 监听器的健康检查返回码。具体可参考创建监听器中对该字段的解释 */
  HttpCode?: number;
  /** 传统型公网负载均衡的 HTTP、HTTPS 监听器的健康检查路径 */
  HttpCheckPath?: string;
  /** 传统型公网负载均衡的 HTTPS 监听器的认证方式 */
  SSLMode?: string;
  /** 传统型公网负载均衡的 HTTPS 监听器的服务端证书 ID */
  CertId?: string;
  /** 传统型公网负载均衡的 HTTPS 监听器的客户端证书 ID */
  CertCaId?: string;
  /** 监听器的状态，0 表示创建中，1 表示运行中 */
  Status?: number;
}

/** 负载均衡信息 */
declare interface ClassicalLoadBalancerInfo {
  /** 后端实例ID */
  InstanceId?: string;
  /** 负载均衡实例ID列表 */
  LoadBalancerIds?: string[];
}

/** 传统型负载均衡的后端服务相关信息 */
declare interface ClassicalTarget {
  /** 后端服务的类型，可取值：CVM、ENI（即将支持） */
  Type?: string;
  /** 后端服务的唯一 ID，可通过 DescribeInstances 接口返回字段中的 unInstanceId 字段获取 */
  InstanceId?: string;
  /** 后端服务的转发权重，取值范围：[0, 100]，默认为 10。 */
  Weight?: number;
  /** 后端服务的外网 IP */
  PublicIpAddresses?: string[];
  /** 后端服务的内网 IP */
  PrivateIpAddresses?: string[];
  /** 后端服务的实例名称 */
  InstanceName?: string;
  /** 后端服务的状态1：故障，2：运行中，3：创建中，4：已关机，5：已退还，6：退还中， 7：重启中，8：开机中，9：关机中，10：密码重置中，11：格式化中，12：镜像制作中，13：带宽设置中，14：重装系统中，19：升级中，21：热迁移中 */
  RunFlag?: number;
}

/** 传统型负载均衡的后端信息 */
declare interface ClassicalTargetInfo {
  /** 后端实例ID */
  InstanceId: string;
  /** 权重，取值范围 [0, 100] */
  Weight?: number;
}

/** 集群的详细信息，如集群ID，名称，类型，可用区，标签等 */
declare interface Cluster {
  /** 集群唯一ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群类型，如TGW，STGW，VPCGW */
  ClusterType?: string;
  /** 集群标签，只有TGW/STGW集群有标签 */
  ClusterTag?: string | null;
  /** 集群所在可用区，如ap-guangzhou-1 */
  Zone?: string;
  /** 集群网络类型，如Public，Private */
  Network?: string;
  /** 最大连接数（个/秒） */
  MaxConn?: number | null;
  /** 最大入带宽Mbps */
  MaxInFlow?: number | null;
  /** 最大入包量（个/秒） */
  MaxInPkg?: number | null;
  /** 最大出带宽Mbps */
  MaxOutFlow?: number | null;
  /** 最大出包量（个/秒） */
  MaxOutPkg?: number | null;
  /** 最大新建连接数（个/秒） */
  MaxNewConn?: number | null;
  /** http最大新建连接数（个/秒） */
  HTTPMaxNewConn?: number | null;
  /** https最大新建连接数（个/秒） */
  HTTPSMaxNewConn?: number | null;
  /** http QPS */
  HTTPQps?: number | null;
  /** https QPS */
  HTTPSQps?: number | null;
  /** 集群内资源总数目 */
  ResourceCount?: number;
  /** 集群内空闲资源数目 */
  IdleResourceCount?: number | null;
  /** 集群内转发机的数目 */
  LoadBalanceDirectorCount?: number | null;
  /** 集群的Isp属性，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。 */
  Isp?: string | null;
  /** 集群所在的可用区 */
  ClustersZone?: ClustersZone | null;
  /** 集群版本 */
  ClustersVersion?: string | null;
  /** 集群容灾类型，如SINGLE-ZONE，DISASTER-RECOVERY，MUTUAL-DISASTER-RECOVERY */
  DisasterRecoveryType?: string;
  /** 网络出口 */
  Egress?: string;
  /** IP版本 */
  IPVersion?: string;
  /** 标签信息 */
  Tag?: TagInfo[];
}

/** 独占集群信息 */
declare interface ClusterItem {
  /** 集群唯一ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群所在可用区，如ap-guangzhou-1 */
  Zone?: string | null;
}

/** 集群内资源类型 */
declare interface ClusterResource {
  /** 集群唯一ID，如tgw-12345678。 */
  ClusterId?: string;
  /** ip地址。 */
  Vip?: string;
  /** 负载均衡唯一ID，如lb-12345678。 */
  LoadBalancerId?: string | null;
  /** 资源是否闲置。 */
  Idle?: string;
  /** 集群名称。 */
  ClusterName?: string;
  /** 集群的Isp属性，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。 */
  Isp?: string;
  /** 集群所在的可用区 */
  ClustersZone?: ClustersZone | null;
}

/** 集群所在的可用区。 */
declare interface ClustersZone {
  /** 集群所在的主可用区。 */
  MasterZone?: string[];
  /** 集群所在的备可用区。 */
  SlaveZone?: string[];
}

/** 配置内容 */
declare interface ConfigListItem {
  /** 配置ID */
  UconfigId?: string;
  /** 配置类型， 可选值：CLB（实例维度配置）， SERVER（服务维度配置），LOCATION（规则维度配置） */
  ConfigType?: string;
  /** 配置名字 */
  ConfigName?: string;
  /** 配置内容 */
  ConfigContent?: string;
  /** 配置的创建时间。格式：YYYY-MM-DD HH:mm:ss */
  CreateTimestamp?: string;
  /** 配置的修改时间。格式：YYYY-MM-DD HH:mm:ss */
  UpdateTimestamp?: string;
}

/** 跨域2.0云联网下子机和网卡信息 */
declare interface CrossTargets {
  /** 本地私有网络ID，即负载均衡的VpcId。 */
  LocalVpcId?: string;
  /** 子机或网卡所属的私有网络ID。 */
  VpcId?: string;
  /** 子机或网卡的IP地址 */
  IP?: string;
  /** 子机或网卡所属的私有网络名称。 */
  VpcName?: string;
  /** 子机的网卡ID。 */
  EniId?: string;
  /** 子机实例ID。 */
  InstanceId?: string;
  /** 子机实例名称。 */
  InstanceName?: string;
  /** 子机或者网卡所属的地域。 */
  Region?: string;
}

/** 独占集群 */
declare interface ExclusiveCluster {
  /** 4层独占集群列表 */
  L4Clusters?: ClusterItem[] | null;
  /** 7层独占集群列表 */
  L7Clusters?: ClusterItem[] | null;
  /** vpcgw集群 */
  ClassicalCluster?: ClusterItem | null;
}

/** 暂做保留，一般用户无需关注。 */
declare interface ExtraInfo {
  /** 是否开通VIP直通 */
  ZhiTong?: boolean;
  /** TgwGroup名称 */
  TgwGroupName?: string;
}

/** 过滤器条件 */
declare interface Filter {
  /** 过滤器的名称 */
  Name: string;
  /** 过滤器的值数组 */
  Values: string[];
}

/** SCF云函数（Serverless Cloud Function）相关信息。 */
declare interface FunctionInfo {
  /** 函数命名空间 */
  FunctionNamespace: string;
  /** 函数名称 */
  FunctionName: string;
  /** 函数的版本名称或别名 */
  FunctionQualifier: string;
  /** 标识 FunctionQualifier 参数的类型，可取值： VERSION（版本）、ALIAS（别名） */
  FunctionQualifierType?: string | null;
}

/** SCF云函数（Serverless Cloud Function）作为后端服务 */
declare interface FunctionTarget {
  /** 云函数相关信息 */
  Function: FunctionInfo;
  /** 权重 */
  Weight?: number;
}

/** 健康检查信息。注意，自定义探测相关参数 目前只有少量区域灰度支持。 */
declare interface HealthCheck {
  /** 是否开启健康检查：1（开启）、0（关闭）。默认为开启。 */
  HealthSwitch?: number;
  /** 健康检查的响应超时时间，可选值：2~60，默认值：2，单位：秒。响应超时时间要小于检查间隔时间。 */
  TimeOut?: number;
  /** 健康检查探测间隔时间，默认值：5，IPv4 CLB实例的取值范围为：2-300，IPv6 CLB 实例的取值范围为：5-300。单位：秒。说明：部分老旧 IPv4 CLB实例的取值范围为：5-300。 */
  IntervalTime?: number;
  /** 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2~10，单位：次。 */
  HealthNum?: number;
  /** 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发异常，可选值：2~10，单位：次。 */
  UnHealthNum?: number;
  /** 健康检查状态码（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。可选值：1~31，默认 31。1 表示探测后返回值 1xx 代表健康，2 表示返回 2xx 代表健康，4 表示返回 3xx 代表健康，8 表示返回 4xx 代表健康，16 表示返回 5xx 代表健康。若希望多种返回码都可代表健康，则将相应的值相加。 */
  HttpCode?: number | null;
  /** 健康检查路径（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。 */
  HttpCheckPath?: string | null;
  /** 健康检查域名，将在HTTP协议 Host 头字段中携带。（仅适用于HTTP/HTTPS监听器和TCP监听器的HTTP健康检查方式。针对TCP监听器，当使用HTTP健康检查方式时，该参数为必填项）。 */
  HttpCheckDomain?: string | null;
  /** 健康检查方法（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式），默认值：HEAD，可选值HEAD或GET。 */
  HttpCheckMethod?: string | null;
  /** 自定义探测相关参数。健康检查端口，默认为后端服务的端口，除非您希望指定特定端口，否则建议留空。传参数值-1可恢复默认设置。（仅适用于TCP/UDP监听器）。 */
  CheckPort?: number | null;
  /** 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查的输入格式，可取值：HEX或TEXT；取值为HEX时，SendContext和RecvContext的字符只能在0123456789ABCDEF中选取且长度必须是偶数位。（仅适用于TCP/UDP监听器） */
  ContextType?: string | null;
  /** 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查发送的请求内容，只允许ASCII可见字符，最大长度限制500。（仅适用于TCP/UDP监听器）。 */
  SendContext?: string | null;
  /** 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查返回的结果，只允许ASCII可见字符，最大长度限制500。（仅适用于TCP/UDP监听器）。 */
  RecvContext?: string | null;
  /** 健康检查使用的协议。取值 TCP | HTTP | HTTPS | GRPC | PING | CUSTOM，UDP监听器支持PING/CUSTOM，TCP监听器支持TCP/HTTP/CUSTOM，TCP_SSL/QUIC监听器支持TCP/HTTP，HTTP规则支持HTTP/GRPC，HTTPS规则支持HTTP/HTTPS/GRPC。HTTP监听器默认值为HTTP;TCP、TCP_SSL、QUIC监听器默认值为TCP;UDP监听器默认为PING;HTTPS监听器的CheckType默认值与后端转发协议一致。 */
  CheckType?: string;
  /** HTTP版本。健康检查协议CheckType的值取HTTP时，必传此字段，代表后端服务的HTTP版本：HTTP/1.0、HTTP/1.1；（仅适用于TCP监听器） */
  HttpVersion?: string | null;
  /** 健康检查源IP类型：0（使用LB的VIP作为源IP），1（使用100.64网段IP作为源IP）。 */
  SourceIpType?: number;
  /** GRPC健康检查状态码（仅适用于后端转发协议为GRPC的规则）。默认值为 12，可输入值为数值、多个数值、或者范围，例如 20 或 20,25 或 0-99 */
  ExtendedCode?: string | null;
}

/** 闲置实例。 */
declare interface IdleLoadBalancer {
  /** 负载均衡ID */
  LoadBalancerId?: string;
  /** 负载均衡名字 */
  LoadBalancerName?: string;
  /** 负载均衡所在地域 */
  Region?: string;
  /** 负载均衡的vip */
  Vip?: string;
  /** 闲置原因。NO_RULES：没有规则，NO_RS：有规则没有绑定子机。 */
  IdleReason?: string;
  /** 负载均衡实例的状态，包括0：创建中，1：正常运行。 */
  Status?: number;
  /** 负载均衡类型标识，1：负载均衡，0：传统型负载均衡。 */
  Forward?: number;
  /** 负载均衡域名 */
  Domain?: string;
}

/** 网络计费模式，最大出带宽 */
declare interface InternetAccessible {
  /** TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费，国际站用户不支持该计费模式; BANDWIDTH_PACKAGE 按带宽包计费;BANDWIDTH_PREPAID按带宽预付费。 */
  InternetChargeType?: string;
  /** 最大出带宽，单位Mbps，仅对公网属性的共享型、性能容量型和独占型 CLB 实例、以及内网属性的性能容量型 CLB 实例生效。- 对于公网属性的共享型和独占型 CLB 实例，最大出带宽的范围为1Mbps-2048Mbps。- 对于公网属性和内网属性的性能容量型 CLB实例，最大出带宽的范围为1Mbps-61440Mbps。（调用CreateLoadBalancer创建LB时不指定此参数则设置为默认值10Mbps。此上限可调整） */
  InternetMaxBandwidthOut?: number;
  /** 带宽包的类型，如 BGP（多线）。类型如下：SINGLEISP: 单线BGP: 多线HIGH_QUALITY_BGP: 精品BGP共享带宽包SINGLEISP_CMCC: 中国移动共享带宽包SINGLEISP_CTCC: 中国电信共享带宽包SINGLEISP_CUCC: 中国联通共享带宽包 */
  BandwidthpkgSubType?: string | null;
}

/** 描述了单项的价格信息 */
declare interface ItemPrice {
  /** 后付费单价，单位：元。 */
  UnitPrice: number | null;
  /** 后续计价单元，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）；GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。 */
  ChargeUnit: string | null;
  /** 预支费用的原价，单位：元。 */
  OriginalPrice: number | null;
  /** 预支费用的折扣价，单位：元。 */
  DiscountPrice: number | null;
  /** 后付费的折扣单价，单位:元 */
  UnitPriceDiscount: number | null;
  /** 折扣，如20.0代表2折。 */
  Discount: number | null;
}

/** lb实例包年包月相关配置属性 */
declare interface LBChargePrepaid {
  /** 续费类型：AUTO_RENEW 自动续费， MANUAL_RENEW 手动续费 */
  RenewFlag?: string;
  /** 购买时长，单位：月 */
  Period?: number;
}

/** 反查Lb绑定关系。 */
declare interface LBItem {
  /** lb的字符串id */
  LoadBalancerId?: string;
  /** lb的vip */
  Vip?: string;
  /** 监听器规则 */
  Listeners?: ListenerItem[];
  /** LB所在地域 */
  Region?: string;
}

/** 负载均衡的操作保护信息 */
declare interface LBOperateProtectInfo {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 保护状态，true：表示开启了操作保护，false：表示未开启操作保护。 */
  ProtectState: boolean;
  /** 操作保护的设置uin。 */
  OperatorUin: string | null;
  /** 设置操作保护时的描述信息。 */
  Description: string | null;
  /** 最后修改时间。 */
  ModifyTime: string | null;
}

/** 查询类型 */
declare interface LbRsItem {
  /** vpc的字符串id，只支持字符串id。可以通过 [DescribeVpcs](https://cloud.tencent.com/document/api/215/15778) 接口查询。 */
  VpcId: string;
  /** 需要查询后端的内网 IP，可以是 CVM 和弹性网卡。可以通过 [DescribeAddresses](https://cloud.tencent.com/document/product/215/16702) 接口查询。 */
  PrivateIp: string;
}

/** 反查结果数据类型。 */
declare interface LbRsTargets {
  /** 内网ip类型。“cvm”或“eni” */
  Type?: string;
  /** 后端实例的内网ip。 */
  PrivateIp?: string;
  /** 绑定后端实例的端口。 */
  Port?: number;
  /** rs的vpcId */
  VpcId?: number;
  /** rs的权重 */
  Weight?: number;
}

/** 监听器的信息 */
declare interface Listener {
  /** 负载均衡监听器 ID */
  ListenerId?: string;
  /** 监听器协议，可选值：TCP、UDP、HTTP、HTTPS、TCP_SSL、QUIC */
  Protocol?: string;
  /** 监听器端口，端口范围：1-65535 */
  Port?: number;
  /** 监听器绑定的证书信息 */
  Certificate?: CertificateOutput | null;
  /** 监听器的健康检查信息 */
  HealthCheck?: HealthCheck | null;
  /** 请求的调度方式。 WRR、LEAST_CONN、IP_HASH分别表示按权重轮询、最小连接数、IP Hash。 */
  Scheduler?: string | null;
  /** 会话保持时间，单位：秒。可选值：30~3600，默认 0，默认不开启。此参数仅适用于TCP/UDP监听器。 */
  SessionExpireTime?: number | null;
  /** 是否开启SNI特性，1：表示开启，0：表示不开启（本参数仅对于HTTPS监听器有意义） */
  SniSwitch?: number;
  /** 监听器下的全部转发规则（本参数仅对于HTTP/HTTPS监听器有意义） */
  Rules?: RuleOutput[] | null;
  /** 监听器的名称 */
  ListenerName?: string;
  /** 监听器的创建时间。 */
  CreateTime?: string;
  /** 端口段结束端口，端口范围：2-65535 */
  EndPort?: number;
  /** 后端服务器类型，可选值：NODE、POLARIS、TARGETGROUP、TARGETGROUP-V2 */
  TargetType?: string | null;
  /** 绑定的目标组基本信息；当监听器绑定目标组时，会返回该字段 */
  TargetGroup?: BasicTargetGroupInfo | null;
  /** 会话保持类型。NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。 */
  SessionType?: string;
  /** 是否开启长连接，1开启，0关闭，（本参数仅对于HTTP/HTTPS监听器有意义） */
  KeepaliveEnable?: number | null;
  /** 仅支持Nat64 CLB TCP监听器 */
  Toa?: boolean;
  /** 解绑后端目标时，是否发RST给客户端，（此参数仅对于TCP监听器有意义）。 */
  DeregisterTargetRst?: boolean;
  /** 监听器的属性 */
  AttrFlags?: string[];
  /** 绑定的目标组列表 */
  TargetGroupList?: BasicTargetGroupInfo[] | null;
  /** 监听器最大连接数，-1表示监听器维度不限速。 */
  MaxConn?: number;
  /** 监听器最大新增连接数，-1表示监听器维度不限速。 */
  MaxCps?: number;
  /** 空闲连接超时时间，仅支持TCP监听器。默认值:900；共享型实例和独占型实例取值范围：300～900，性能容量型实例取值范围:300～1980。 */
  IdleConnectTimeout?: number | null;
  /** 调度时间。触发强制重新调度后，长连接将会在设置的调度时间内断开并完成重新分配 */
  RescheduleInterval?: number;
  /** 数据压缩模式 */
  DataCompressMode?: string;
}

/** 监听器上绑定的后端服务的信息 */
declare interface ListenerBackend {
  /** 监听器 ID */
  ListenerId?: string;
  /** 监听器的协议 */
  Protocol?: string;
  /** 监听器的端口 */
  Port?: number;
  /** 监听器下的规则信息（仅适用于HTTP/HTTPS监听器） */
  Rules?: RuleTargets[];
  /** 监听器上绑定的后端服务列表（仅适用于TCP/UDP/TCP_SSL监听器） */
  Targets?: Backend[];
  /** 若支持端口段，则为端口段结束端口；若不支持端口段，则为0 */
  EndPort?: number;
}

/** 监听器的健康检查信息 */
declare interface ListenerHealth {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器的协议 */
  Protocol?: string;
  /** 监听器的端口 */
  Port?: number;
  /** 监听器的转发规则列表 */
  Rules?: RuleHealth[];
}

/** 反查监听器类型 */
declare interface ListenerItem {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器协议 */
  Protocol?: string;
  /** 监听器端口 */
  Port?: number;
  /** 绑定规则 */
  Rules?: RulesItems[] | null;
  /** 四层绑定对象 */
  Targets?: LbRsTargets[] | null;
  /** 端口段监听器的结束端口 */
  EndPort?: number;
}

/** 负载均衡实例的信息 */
declare interface LoadBalancer {
  /** 负载均衡实例 ID。 */
  LoadBalancerId?: string;
  /** 负载均衡实例的名称。 */
  LoadBalancerName?: string;
  /** 负载均衡实例的网络类型：OPEN：公网属性， INTERNAL：内网属性；对于内网属性的负载均衡，可通过绑定EIP出公网，具体可参考EIP文档[绑定弹性公网IP](https://cloud.tencent.com/document/product/215/16700)。 */
  LoadBalancerType?: string;
  /** 负载均衡类型标识，1：负载均衡，0：传统型负载均衡。 */
  Forward?: number;
  /** 负载均衡实例的域名，仅公网传统型和域名型负载均衡实例才提供该字段。逐步下线中，建议用LoadBalancerDomain替代。 */
  Domain?: string;
  /** 负载均衡实例的 VIP 列表。 */
  LoadBalancerVips?: string[];
  /** 负载均衡实例的状态，包括0：创建中，1：正常运行。 */
  Status?: number;
  /** 负载均衡实例的创建时间。格式：YYYY-MM-DD HH:mm:ss */
  CreateTime?: string;
  /** 负载均衡实例的上次状态转换时间。格式：YYYY-MM-DD HH:mm:ss */
  StatusTime?: string;
  /** 负载均衡实例所属的项目 ID， 0 表示默认项目。 */
  ProjectId?: number;
  /** 私有网络的 ID */
  VpcId?: string;
  /** 高防 LB 的标识，1：高防负载均衡 0：非高防负载均衡。 */
  OpenBgp?: number;
  /** 是否开启 SNAT，在 2016 年 12 月份之前的传统型内网负载均衡都是开启了 SNAT 的。 */
  Snat?: boolean;
  /** 是否被隔离，0：表示未被隔离，1：表示被隔离。 */
  Isolation?: number;
  /** 用户开启日志的信息，日志只有公网属性创建了 HTTP 、HTTPS 监听器的负载均衡才会有日志。 */
  Log?: string | null;
  /** 负载均衡实例所在的子网（仅对内网VPC型LB有意义） */
  SubnetId?: string;
  /** 负载均衡实例的标签信息 */
  Tags?: TagInfo[];
  /** 负载均衡实例的安全组 */
  SecureGroups?: string[];
  /** 负载均衡实例绑定的后端设备的基本信息 */
  TargetRegionInfo?: TargetRegionInfo;
  /** anycast负载均衡的发布域，对于非anycast的负载均衡，此字段返回为空字符串 */
  AnycastZone?: string;
  /** IP版本，ipv4 | ipv6 */
  AddressIPVersion?: string;
  /** 数值形式的私有网络 ID，可以通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口获取。 */
  NumericalVpcId?: number;
  /** 负载均衡IP地址所属的运营商。- BGP : BGP（多线）- CMCC：中国移动单线- CTCC：中国电信单线- CUCC：中国联通单线 */
  VipIsp?: string | null;
  /** 主可用区 */
  MasterZone?: ZoneInfo | null;
  /** 备可用区 */
  BackupZoneSet?: ZoneInfo[] | null;
  /** 负载均衡实例被隔离的时间。格式：YYYY-MM-DD HH:mm:ss */
  IsolatedTime?: string | null;
  /** 负载均衡实例的过期时间，仅对预付费负载均衡生效。格式：YYYY-MM-DD HH:mm:ss */
  ExpireTime?: string | null;
  /** 负载均衡实例的计费类型，PREPAID：包年包月，POSTPAID_BY_HOUR：按量计费 */
  ChargeType?: string | null;
  /** 负载均衡实例的网络属性 */
  NetworkAttributes?: InternetAccessible | null;
  /** 负载均衡实例的预付费相关属性，仅在 ChargeType=PREPAID 时显示。 */
  PrepaidAttributes?: LBChargePrepaid | null;
  /** 负载均衡日志服务(CLS)的日志集ID */
  LogSetId?: string;
  /** 负载均衡日志服务(CLS)的日志主题ID */
  LogTopicId?: string;
  /** 负载均衡实例的IPv6地址 */
  AddressIPv6?: string | null;
  /** 暂做保留，一般用户无需关注。 */
  ExtraInfo?: ExtraInfo | null;
  /** 是否可绑定高防包 */
  IsDDos?: boolean;
  /** 负载均衡维度的个性化配置ID */
  ConfigId?: string;
  /** 后端服务是否放通来自LB的流量 */
  LoadBalancerPassToTarget?: boolean;
  /** 内网独占集群 */
  ExclusiveCluster?: ExclusiveCluster;
  /** IP地址版本为ipv6时此字段有意义，IPv6Nat64 | IPv6FullChain。IPv6Nat64: 基于 NAT64 IPv6 过渡技术实现的负载均衡器。IPv6FullChain：基于 IPv6 单栈技术实现的负载均衡。 */
  IPv6Mode?: string | null;
  /** 是否开启SnatPro。 */
  SnatPro?: boolean;
  /** 开启SnatPro负载均衡后，SnatIp列表。 */
  SnatIps?: SnatIp[];
  /** 性能容量型规格。 clb.c1.small：简约型规格 clb.c2.medium：标准型规格 clb.c3.small：高阶型1规格 clb.c3.medium：高阶型2规格 clb.c4.small：超强型1规格 clb.c4.medium：超强型2规格 clb.c4.large：超强型3规格 clb.c4.xlarge：超强型4规格 ""：非性能容量型实例 */
  SlaType?: string;
  /** vip是否被封堵 */
  IsBlock?: boolean;
  /** 封堵或解封时间。格式：YYYY-MM-DD HH:mm:ss。 */
  IsBlockTime?: string;
  /** IP类型是否是本地BGP */
  LocalBgp?: boolean;
  /** 7层独占标签。 */
  ClusterTag?: string | null;
  /** 开启IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标功能。 */
  MixIpTarget?: boolean;
  /** 私有网络内网负载均衡，就近接入模式下规则所落在的可用区 */
  Zones?: string[] | null;
  /** CLB是否为NFV，空：不是，l7nfv：七层是NFV。 */
  NfvInfo?: string | null;
  /** 负载均衡日志服务(CLS)的健康检查日志集ID */
  HealthLogSetId?: string;
  /** 负载均衡日志服务(CLS)的健康检查日志主题ID */
  HealthLogTopicId?: string;
  /** 集群ID */
  ClusterIds?: string[] | null;
  /** 负载均衡的属性，传入字符串数组来决定是否开启DeleteProtect: 删除保护，开启后防止负载均衡被误删除。 UserInVisible: 用户不可见，控制负载均衡对用户的可见性。 BlockStatus: 阻塞状态，用于限制负载均衡的某些操作或流量。 NoLBNat: 禁用负载均衡的NAT功能，用于特定场景下的流量直接转发。 BanStatus: 封禁状态，用于暂停负载均衡服务或限制访问。 ShiftupFlag: 升配标志，用于标识负载均衡需要升级配置或性能。 Stop: 停止状态，开启后负载均衡暂停服务。 NoVpcGw: 不使用VPC网关，用于绕过VPC网关直接处理流量。 SgInTgw: 安全组在TGW（Transit Gateway）中，涉及网络安全策略配置。 SharedLimitFlag: 共享限制标志，用于控制负载均衡的共享资源限制。 WafFlag: Web应用防火墙（WAF）标志，开启后启用WAF保护。 IsDomainCLB: 域名型负载均衡，标识负载均衡是否基于域名进行流量分发。 IPv6Snat: IPv6源地址转换（SNAT），用于IPv6网络的源地址处理。 HideDomain: 隐藏域名，用于隐私保护或特定场景下不暴露域名。 JumboFrame: 巨型帧支持，开启后支持更大的数据帧以提高网络效率。 NoLBNatL4IPdc: 四层IP直连无NAT，用于四层负载均衡直接转发IP流量。 VpcGwL3Service: VPC网关三层服务，涉及三层网络服务的网关功能。 Ipv62Flag: IPv6扩展标志，用于特定的IPv6功能支持。 Ipv62ExclusiveFlag: IPv6独占标志，用于专属IPv6流量处理。 BgpPro: BGP Pro 支持。 ToaClean: TOA（TCP Option Address）清理，清除TCP选项中的地址信息。 */
  AttributeFlags?: string[];
  /** 负载均衡实例的域名。 */
  LoadBalancerDomain?: string;
  /** 网络出口 */
  Egress?: string;
  /** 实例类型是否为独占型。1：独占型实例。0：非独占型实例。 */
  Exclusive?: number | null;
  /** 已绑定的后端服务数量。 */
  TargetCount?: number;
}

/** 负载均衡详细信息 */
declare interface LoadBalancerDetail {
  /** 负载均衡实例 ID。 */
  LoadBalancerId?: string;
  /** 负载均衡实例的名称。 */
  LoadBalancerName?: string;
  /** 负载均衡实例的网络类型：Public：公网属性，Private：内网属性；对于内网属性的负载均衡，可通过绑定EIP出公网，具体可参考EIP文档。 */
  LoadBalancerType?: string | null;
  /** 负载均衡实例的状态，包括0：创建中，1：正常运行。 */
  Status?: number | null;
  /** 负载均衡实例的 VIP 。 */
  Address?: string | null;
  /** 负载均衡实例 VIP 的IPv6地址。 */
  AddressIPv6?: string | null;
  /** 负载均衡实例IP版本，IPv4 | IPv6。 */
  AddressIPVersion?: string | null;
  /** 负载均衡实例IPv6地址类型，IPv6Nat64 | IPv6FullChain。 */
  IPv6Mode?: string | null;
  /** 负载均衡实例所在可用区。 */
  Zone?: string | null;
  /** 负载均衡实例IP地址所属的ISP。取值范围：BGP（多线）、CMCC（中国移动）、CUCC（中国联通）、CTCC（中国电信）、INTERNAL（内网）。 */
  AddressIsp?: string | null;
  /** 负载均衡实例所属私有网络的 ID。 */
  VpcId?: string | null;
  /** 负载均衡实例所属的项目 ID， 0 表示默认项目。 */
  ProjectId?: number | null;
  /** 负载均衡实例的创建时间。 */
  CreateTime?: string | null;
  /** 负载均衡实例的计费类型。取值范围：PREPAID预付费、POSTPAID_BY_HOUR按量付费。 */
  ChargeType?: string | null;
  /** 负载均衡实例的网络属性。 */
  NetworkAttributes?: InternetAccessible | null;
  /** 负载均衡实例的预付费相关属性。 */
  PrepaidAttributes?: LBChargePrepaid | null;
  /** 暂做保留，一般用户无需关注。 */
  ExtraInfo?: ExtraInfo | null;
  /** 负载均衡维度的个性化配置ID，多个配置用逗号隔开。 */
  ConfigId?: string | null;
  /** 负载均衡实例的标签信息。 */
  Tags?: TagInfo[] | null;
  /** 负载均衡监听器 ID。 */
  ListenerId?: string | null;
  /** 监听器协议。 */
  Protocol?: string | null;
  /** 监听器端口。 */
  Port?: number | null;
  /** 转发规则的 ID。 */
  LocationId?: string | null;
  /** 转发规则的域名。 */
  Domain?: string | null;
  /** 转发规则的路径。 */
  Url?: string | null;
  /** 后端目标ID。 */
  TargetId?: string | null;
  /** 后端目标的IP地址。 */
  TargetAddress?: string | null;
  /** 后端目标监听端口。 */
  TargetPort?: number | null;
  /** 后端目标转发权重。 */
  TargetWeight?: number | null;
  /** 0：表示未被隔离，1：表示被隔离。 */
  Isolation?: number | null;
  /** 负载均衡绑定的安全组列表。 */
  SecurityGroup?: string[] | null;
  /** 负载均衡安全组上移特性是否开启标识。取值范围：1表示开启、0表示未开启。 */
  LoadBalancerPassToTarget?: number | null;
  /** 后端目标健康状态。 */
  TargetHealth?: string | null;
  /** 转发规则的域名列表。 */
  Domains?: string | null;
  /** 多可用区负载均衡实例所选备区 */
  SlaveZone?: string[] | null;
  /** 内网负载均衡实例所在可用区，由白名单CLB_Internal_Zone控制 */
  Zones?: string[] | null;
  /** 是否开启SNI特性，1：表示开启，0：表示不开启（本参数仅对于HTTPS监听器有意义）。 */
  SniSwitch?: number | null;
  /** 负载均衡实例的域名。 */
  LoadBalancerDomain?: string;
  /** 网络出口 */
  Egress?: string;
  /** 负载均衡的属性 */
  AttributeFlags?: string[] | null;
  /** 负载均衡实例的规格类型信息 clb.c1.small：简约型规格 clb.c2.medium：标准型规格 clb.c3.small：高阶型1规格 clb.c3.medium：高阶型2规格 clb.c4.small：超强型1规格 clb.c4.medium：超强型2规格 clb.c4.large：超强型3规格 clb.c4.xlarge：超强型4规格 ""：非性能容量型实例 */
  SlaType?: string | null;
  /** 0：表示非独占型实例，1：表示独占型态实例。 */
  Exclusive?: number | null;
}

/** 负载均衡实例的健康检查状态 */
declare interface LoadBalancerHealth {
  /** 负载均衡实例ID */
  LoadBalancerId?: string;
  /** 负载均衡实例名称 */
  LoadBalancerName?: string;
  /** 监听器列表 */
  Listeners?: ListenerHealth[];
}

/** 负载均衡流量数据。 */
declare interface LoadBalancerTraffic {
  /** 负载均衡ID */
  LoadBalancerId?: string;
  /** 负载均衡名字 */
  LoadBalancerName?: string;
  /** 负载均衡所在地域 */
  Region?: string;
  /** 负载均衡的vip */
  Vip?: string;
  /** 最大出带宽，单位：Mbps */
  OutBandwidth?: number;
  /** CLB域名 */
  Domain?: string;
}

/** CLB监听器或规则绑定的多证书信息 */
declare interface MultiCertInfo {
  /** 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证 */
  SSLMode: string;
  /** 监听器或规则证书列表，单双向认证，多本服务端证书算法类型不能重复;若SSLMode为双向认证，证书列表必须包含一本ca证书。 */
  CertList: CertInfo[];
  /** 双向认证时，是否开启客户端认证，ON:开启，OPTIONAL:自适应，默认ON */
  SSLVerifyClient?: string;
}

/** OAuth配置信息。 */
declare interface OAuth {
  /** 开启或关闭鉴权。True: 开启;False: 关闭默认为关闭。 */
  OAuthEnable?: boolean;
  /** IAP全部故障后，拒绝请求还是放行。BYPASS: 通过REJECT: 拒绝默认为 BYPASS */
  OAuthFailureStatus?: string;
}

/** 表示负载均衡的价格 */
declare interface Price {
  /** 描述了实例价格。 */
  InstancePrice?: ItemPrice;
  /** 描述了网络价格。 */
  BandwidthPrice?: ItemPrice | null;
  /** 描述了lcu价格。 */
  LcuPrice?: ItemPrice | null;
}

/** 描述配额信息，所有配额均指当前地域下的配额。 */
declare interface Quota {
  /** 配额名称，取值范围： TOTAL_OPEN_CLB_QUOTA：用户当前地域下的公网CLB配额 TOTAL_INTERNAL_CLB_QUOTA：用户当前地域下的内网CLB配额 TOTAL_LISTENER_QUOTA：一个CLB下的监听器配额 TOTAL_LISTENER_RULE_QUOTA：一个监听器下的转发规则配额 TOTAL_TARGET_BIND_QUOTA：一条转发规则下可绑定设备的配额 TOTAL_SNAT_IP_QUOTA： 一个CLB实例下跨地域2.0的SNAT IP配额 TOTAL_ISP_CLB_QUOTA：用户当前地域下的三网CLB配额 TOTAL_FULL_PORT_RANGE_LISTENER_QUOTA：一个CLB实例下的单个协议全端口段监听器配额 */
  QuotaId?: string;
  /** 当前使用数量，为 null 时表示无意义。 */
  QuotaCurrent?: number | null;
  /** 配额数量。 */
  QuotaLimit?: number;
}

/** 资源详细信息 */
declare interface Resource {
  /** 运营商内具体资源信息，如"CMCC", "CUCC", "CTCC", "BGP", "INTERNAL"。 */
  Type?: string[];
  /** 运营商信息，如"CMCC", "CUCC", "CTCC", "BGP", "INTERNAL"。 */
  Isp?: string;
  /** 可用资源。 */
  AvailabilitySet?: ResourceAvailability[];
  /** 运营商类型信息 */
  TypeSet?: TypeInfo[];
}

/** 资源可用性 */
declare interface ResourceAvailability {
  /** 运营商内具体资源信息，如"CMCC", "CUCC", "CTCC", "BGP"。 */
  Type: string;
  /** 资源可用性，"Available"：可用，"Unavailable"：不可用 */
  Availability: string;
}

/** 转发规则之间的重定向关系 */
declare interface RewriteLocationMap {
  /** 源转发规则ID */
  SourceLocationId: string;
  /** 重定向目标转发规则的ID */
  TargetLocationId: string;
  /** 重定向状态码，可取值301,302,307 */
  RewriteCode?: number;
  /** 重定向是否携带匹配的url，配置RewriteCode时必填 */
  TakeUrl?: boolean;
  /** 源转发的域名，必须是SourceLocationId对应的域名，配置RewriteCode时必填 */
  SourceDomain?: string;
}

/** 重定向目标的信息 */
declare interface RewriteTarget {
  /** 重定向目标的监听器ID，该字段仅配置了重定向时有效。 */
  TargetListenerId?: string | null;
  /** 重定向目标的转发规则ID，该字段仅配置了重定向时有效。 */
  TargetLocationId?: string | null;
  /** 重定向状态码 */
  RewriteCode?: number;
  /** 重定向是否携带匹配的url */
  TakeUrl?: boolean;
  /** 重定向类型，Manual: 手动重定向，Auto: 自动重定向 */
  RewriteType?: string;
}

/** 修改节点标签的数据类型 */
declare interface RsTagRule {
  /** 负载均衡监听器 ID。 */
  ListenerId: string;
  /** 要修改标签的后端机器列表。 */
  Targets: Target[];
  /** 转发规则的ID，七层规则时需要此参数，4层规则不需要。 */
  LocationId?: string;
  /** 后端服务修改后的标签。此参数的优先级低于前述[Target](https://cloud.tencent.com/document/api/214/30694)中的Tag参数，即最终的标签以Target中的Tag参数值为准，仅当Target中的Weight参数为空时，才以RsTagRule中的Tag参数为准。 */
  Tag?: string;
}

/** 修改节点权重的数据类型 */
declare interface RsWeightRule {
  /** 负载均衡监听器 ID。 */
  ListenerId: string;
  /** 要修改权重的后端机器列表。 */
  Targets: Target[];
  /** 转发规则的ID，七层规则时需要此参数，4层规则不需要。 */
  LocationId?: string;
  /** 目标规则的域名，提供LocationId参数时本参数不生效。 */
  Domain?: string;
  /** 目标规则的URL，提供LocationId参数时本参数不生效。 */
  Url?: string;
  /** 后端服务修改后的转发权重，取值范围：[0，100]。此参数的优先级低于前述[Target](https://cloud.tencent.com/document/api/214/30694)中的Weight参数，即最终的权重值以Target中的Weight参数值为准，仅当Target中的Weight参数为空时，才以RsWeightRule中的Weight参数为准。 */
  Weight?: number;
}

/** 一条转发规则的健康检查状态 */
declare interface RuleHealth {
  /** 转发规则ID */
  LocationId?: string;
  /** 转发规则的域名 */
  Domain?: string | null;
  /** 转发规则的Url */
  Url?: string | null;
  /** 本规则上绑定的后端服务的健康检查状态 */
  Targets?: TargetHealth[];
}

/** HTTP/HTTPS转发规则（输入） */
declare interface RuleInput {
  /** 转发规则的路径。长度限制为：1~200。 */
  Url: string;
  /** 转发规则的域名。长度限制为：1~80。Domain和Domains只需要传一个，单域名规则传Domain，多域名规则传Domains。 */
  Domain?: string;
  /** 会话保持时间。设置为0表示关闭会话保持，开启会话保持可取值30~86400，单位：秒。 */
  SessionExpireTime?: number;
  /** 健康检查信息。详情请参见：[健康检查](https://cloud.tencent.com/document/product/214/6097) */
  HealthCheck?: HealthCheck;
  /** 证书信息；此参数和MultiCertInfo不能同时传入。 */
  Certificate?: CertificateInput;
  /** 规则的请求转发方式，可选值：WRR、LEAST_CONN、IP_HASH分别表示按权重轮询、最小连接数、按IP哈希， 默认为 WRR。 */
  Scheduler?: string;
  /** 负载均衡与后端服务之间的转发协议，目前支持 HTTP/HTTPS/GRPC/GRPCS/TRPC，TRPC暂未对外开放，默认HTTP。 */
  ForwardType?: string;
  /** 是否将该域名设为默认域名，注意，一个监听器下只能设置一个默认域名。 */
  DefaultServer?: boolean;
  /** 是否开启Http2，注意，只有HTTPS域名才能开启Http2。 */
  Http2?: boolean;
  /** 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组 */
  TargetType?: string;
  /** TRPC被调服务器路由，ForwardType为TRPC时必填。目前暂未对外开放。 */
  TrpcCallee?: string;
  /** TRPC调用服务接口，ForwardType为TRPC时必填。目前暂未对外开放 */
  TrpcFunc?: string;
  /** 是否开启QUIC，注意，只有HTTPS域名才能开启QUIC */
  Quic?: boolean;
  /** 转发规则的域名列表。每个域名的长度限制为：1~80。Domain和Domains只需要传一个，单域名规则传Domain，多域名规则传Domains。 */
  Domains?: string[];
  /** 证书信息，支持同时传入不同算法类型的多本服务端证书；此参数和Certificate不能同时传入。 */
  MultiCertInfo?: MultiCertInfo;
}

/** HTTP/HTTPS监听器的转发规则（输出） */
declare interface RuleOutput {
  /** 转发规则的 ID */
  LocationId?: string;
  /** 转发规则的域名。 */
  Domain?: string;
  /** 转发规则的路径。 */
  Url?: string;
  /** 会话保持时间 */
  SessionExpireTime?: number;
  /** 健康检查信息 */
  HealthCheck?: HealthCheck;
  /** 证书信息 */
  Certificate?: CertificateOutput | null;
  /** 规则的请求转发方式。WRR、LEAST_CONN、IP_HASH分别表示按权重轮询、最小连接数、IP Hash。 */
  Scheduler?: string;
  /** 转发规则所属的监听器 ID */
  ListenerId?: string;
  /** 转发规则的重定向目标信息 */
  RewriteTarget?: RewriteTarget;
  /** 是否开启gzip */
  HttpGzip?: boolean;
  /** 转发规则是否为自动创建 */
  BeAutoCreated?: boolean;
  /** 是否作为默认域名 */
  DefaultServer?: boolean;
  /** 是否开启Http2 */
  Http2?: boolean;
  /** 负载均衡与后端服务之间的转发协议 */
  ForwardType?: string;
  /** 转发规则的创建时间 */
  CreateTime?: string;
  /** 后端服务器类型。NODE表示绑定普通节点，TARGETGROUP表示绑定目标组。 */
  TargetType?: string;
  /** 绑定的目标组基本信息；当规则绑定目标组时，会返回该字段 */
  TargetGroup?: BasicTargetGroupInfo | null;
  /** WAF实例ID */
  WafDomainId?: string;
  /** TRPC被调服务器路由，ForwardType为TRPC时有效。目前暂未对外开放。 */
  TrpcCallee?: string;
  /** TRPC调用服务接口，ForwardType为TRPC时有效。目前暂未对外开放。 */
  TrpcFunc?: string;
  /** QUIC状态。QUIC_ACTIVE表示开启，QUIC_INACTIVE表示未开启。注意，只有HTTPS域名才能开启QUIC。 */
  QuicStatus?: string;
  /** 转发规则的域名列表。 */
  Domains?: string[];
  /** 绑定的目标组列表 */
  TargetGroupList?: BasicTargetGroupInfo[] | null;
  /** OAuth配置状态信息。 */
  OAuth?: OAuth;
}

/** HTTP/HTTPS监听器下的转发规则绑定的后端服务信息 */
declare interface RuleTargets {
  /** 转发规则的 ID */
  LocationId?: string;
  /** 转发规则的域名 */
  Domain?: string;
  /** 转发规则的路径。 */
  Url?: string;
  /** 后端服务的信息 */
  Targets?: Backend[];
  /** 后端云函数的信息 */
  FunctionTargets?: FunctionTarget[];
}

/** 七层规则对象 */
declare interface RulesItems {
  /** 规则id */
  LocationId?: string;
  /** 域名 */
  Domain?: string;
  /** uri */
  Url?: string;
  /** 绑定的后端对象 */
  Targets?: LbRsTargets[];
}

/** 升级为性能容量型参数 */
declare interface SlaUpdateParam {
  /** 负载均衡实例 ID。可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerId: string;
  /** 性能容量型规格，取值范围： clb.c2.medium：标准型规格 clb.c3.small：高阶型1规格 clb.c3.medium：高阶型2规格 clb.c4.small：超强型1规格 clb.c4.medium：超强型2规格 clb.c4.large：超强型3规格 clb.c4.xlarge：超强型4规格 如需了解规格详情，请参见[实例规格对比](https://cloud.tencent.com/document/product/214/84689) */
  SlaType: string;
}

/** SnatIp的信息结构 */
declare interface SnatIp {
  /** 私有网络子网的唯一性id，如subnet-12345678 */
  SubnetId: string;
  /** IP地址，如192.168.0.1 */
  Ip?: string;
}

/** 规格可用性 */
declare interface SpecAvailability {
  /** 规格类型。clb.c2.medium（标准型）clb.c3.small（高阶型1）clb.c3.medium（高阶型2）clb.c4.small（超强型1）clb.c4.medium（超强型2）clb.c4.large（超强型3）clb.c4.xlarge（超强型4）shared（共享型） */
  SpecType?: string;
  /** 规格可用性。资源可用性，"Available"：可用，"Unavailable"：不可用 */
  Availability?: string;
}

/** 负载均衡的标签信息 */
declare interface TagInfo {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

/** 转发目标，即绑定在负载均衡上的后端服务 */
declare interface Target {
  /** 后端服务的监听端口。注意：绑定CVM（云服务器）或ENI（弹性网卡）时必传此参数 */
  Port: number;
  /** 后端服务的类型，可取：CVM（云服务器）、ENI（弹性网卡）；作为入参时，目前本参数暂不生效。 */
  Type?: string;
  /** 绑定CVM时需要传入此参数，代表CVM的唯一 ID，可通过 DescribeInstances 接口返回字段中的 InstanceId 字段获取。表示绑定主网卡主IPv4地址；以下场景都不支持指定InstanceId：绑定非CVM，绑定CVM上的辅助网卡IP，通过跨域2.0绑定CVM，以及绑定CVM的IPv6地址等。注意：参数 InstanceId、EniIp 有且只能传入其中一个参数。 */
  InstanceId?: string;
  /** 后端服务修改后的转发权重，取值范围：[0, 100]，默认为 10。此参数的优先级高于[RsWeightRule](https://cloud.tencent.com/document/api/214/30694)中的Weight参数，即最终的权重值以此Weight参数值为准，仅当此Weight参数为空时，才以RsWeightRule中的Weight参数为准。 */
  Weight?: number;
  /** 绑定IP时需要传入此参数，支持弹性网卡的IP和其他内网IP，如果是弹性网卡则必须先绑定至CVM，然后才能绑定到负载均衡实例。注意：参数 InstanceId、EniIp 有且只能传入其中一个参数。如果绑定双栈IPV6子机，则必须传该参数。如果是跨地域绑定，则必须传该参数，不支持传InstanceId参数。 */
  EniIp?: string;
  /** 标签。 */
  Tag?: string;
}

/** 规则与目标组的关联关系 */
declare interface TargetGroupAssociation {
  /** 负载均衡ID */
  LoadBalancerId: string;
  /** 目标组ID */
  TargetGroupId: string;
  /** 监听器ID。访问AssociateTargetGroups和DisassociateTargetGroups接口时必传此参数。 */
  ListenerId?: string;
  /** 转发规则ID */
  LocationId?: string;
  /** 目标组权重，范围[0, 100]。仅绑定v2目标组时生效，如果不存在，则默认为10。 */
  Weight?: number;
}

/** 目标组绑定的后端服务器 */
declare interface TargetGroupBackend {
  /** 目标组ID */
  TargetGroupId?: string;
  /** 后端服务的类型，可取：CVM、ENI（即将支持） */
  Type?: string;
  /** 后端服务的唯一 ID */
  InstanceId?: string;
  /** 后端服务的监听端口，全端口段监听器此字段返回0，代表无效端口，即不支持设置。 */
  Port?: number;
  /** 后端服务的转发权重，取值范围：[0, 100]，默认为 10。 */
  Weight?: number;
  /** 后端服务的外网 IP */
  PublicIpAddresses?: string[];
  /** 后端服务的内网 IP */
  PrivateIpAddresses?: string[];
  /** 后端服务的实例名称 */
  InstanceName?: string;
  /** 后端服务被绑定的时间 */
  RegisteredTime?: string | null;
  /** 弹性网卡唯一ID */
  EniId?: string;
  /** 后端服务的可用区ID */
  ZoneId?: number;
}

/** 目标组信息 */
declare interface TargetGroupInfo {
  /** 目标组ID */
  TargetGroupId?: string;
  /** 目标组的vpcid */
  VpcId?: string;
  /** 目标组的名字 */
  TargetGroupName?: string;
  /** 目标组的默认端口，全监听目标组此字段返回0，表示无效端口。 */
  Port?: number | null;
  /** 目标组的创建时间 */
  CreatedTime?: string;
  /** 目标组的修改时间 */
  UpdatedTime?: string;
  /** 关联到的规则数组。在DescribeTargetGroupList接口调用时无法获取到该参数。 */
  AssociatedRule?: AssociationItem[] | null;
  /** 后端转发协议类型，支持类型TCP， UDP。仅V2新版目标组支持返回该参数。 */
  Protocol?: string | null;
  /** 目标组类型，当前支持v1(旧版目标组), v2(新版目标组), gwlb(全局负载均衡目标组)。 */
  TargetGroupType?: string;
  /** 目标组已关联的规则数。 */
  AssociatedRuleCount?: number;
  /** 目标组内的实例数量。 */
  RegisteredInstancesCount?: number;
  /** 标签。 */
  Tag?: TagInfo[];
  /** 默认权重。只有v2类型目标组返回该字段。当返回为NULL时， 表示未设置默认权重。 */
  Weight?: number;
  /** 是否全监听目标组 */
  FullListenSwitch?: boolean;
}

/** 目标组实例 */
declare interface TargetGroupInstance {
  /** 目标组实例的内网IP */
  BindIP: string;
  /** 目标组实例的端口，全监听目标组不支持传此字段。 */
  Port?: number;
  /** 目标组实例的权重v2目标组需要配置权重，调用CreateTargetGroup接口创建目标组时该参数与创建接口中的Weight参数必填其一。取值范围：0-100 */
  Weight?: number;
  /** 目标组实例的新端口，全监听目标组不支持传此字段。 */
  NewPort?: number;
}

/** 描述一个Target的健康信息 */
declare interface TargetHealth {
  /** Target的内网IP */
  IP?: string;
  /** Target绑定的端口 */
  Port?: number;
  /** 当前健康状态，true：健康，false：不健康（包括尚未开始探测、探测中、状态异常等几种状态）。只有处于健康状态（且权重大于0），负载均衡才会向其转发流量。 */
  HealthStatus?: boolean;
  /** Target的实例ID，如 ins-12345678 */
  TargetId?: string;
  /** 当前健康状态的详细信息。如：Alive、Dead、Unknown、Close。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知，Close表示健康检查关闭或监听器状态停止。 */
  HealthStatusDetail?: string;
  /** (**该参数对象即将下线，不推荐使用，请使用HealthStatusDetail获取健康详情**) 当前健康状态的详细信息。如：Alive、Dead、Unknown。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知。 */
  HealthStatusDetial?: string;
  /** 目标组唯一ID。 */
  TargetGroupId?: string;
  /** Target的权重。 */
  Weight?: number;
}

/** 负载均衡实例所绑定的后端服务的信息，包括所属地域、所属网络。 */
declare interface TargetRegionInfo {
  /** Target所属地域，如 ap-guangzhou */
  Region: string;
  /** Target所属网络，私有网络格式如 vpc-abcd1234，如果是基础网络，则为"0" */
  VpcId: string;
  /** Target所属网络，私有网络格式如86323，如果是基础网络，则为0 */
  NumericalVpcId?: number;
}

/** 运营商类型信息 */
declare interface TypeInfo {
  /** 运营商类型 */
  Type?: string;
  /** 规格可用性 */
  SpecAvailabilitySet?: SpecAvailability[];
}

/** 可用区相关信息 */
declare interface ZoneInfo {
  /** 可用区数值形式的唯一ID，如：100001 */
  ZoneId?: number;
  /** 可用区字符串形式的唯一ID，如：ap-guangzhou-1 */
  Zone?: string;
  /** 可用区名称，如：广州一区 */
  ZoneName?: string;
  /** 可用区所属地域，如：ap-guangzhou */
  ZoneRegion?: string;
  /** 可用区是否是LocalZone可用区，如：false */
  LocalZone?: boolean;
  /** 可用区是否是EdgeZone可用区，如：false */
  EdgeZone?: boolean;
}

/** 可用区资源列表 */
declare interface ZoneResource {
  /** 主可用区，如"ap-guangzhou-1"。 */
  MasterZone?: string;
  /** 资源列表。 */
  ResourceSet?: Resource[];
  /** 备可用区，如"ap-guangzhou-2"，单可用区时，备可用区为null。 */
  SlaveZone?: string | null;
  /** IP版本，如IPv4，IPv6，IPv6_Nat。 */
  IPVersion?: string;
  /** 可用区所属地域，如：ap-guangzhou */
  ZoneRegion?: string;
  /** 可用区是否是LocalZone可用区，如：false */
  LocalZone?: boolean;
  /** 可用区资源的类型，SHARED表示共享资源，EXCLUSIVE表示独占资源。 */
  ZoneResourceType?: string;
  /** 可用区是否是EdgeZone可用区，如：false */
  EdgeZone?: boolean;
  /** 网络出口 */
  Egress?: string;
}

declare interface AddCustomizedConfigRequest {
  /** 配置名字 */
  ConfigName: string;
  /** 配置类型，取值范围["CLB", "SERVER", "LOCATION"]，分别表示CLB配置，server配置，location配置。 */
  ConfigType: string;
  /** 配置内容 */
  ConfigContent: string;
}

declare interface AddCustomizedConfigResponse {
  /** 配置ID */
  ConfigId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateCustomizedConfigRequest {
  /** 配置ID */
  UconfigId: string;
  /** 关联的server或location */
  BindList: BindItem[];
}

declare interface AssociateCustomizedConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateTargetGroupsRequest {
  /** 绑定的关系数组，目标组类型需要一致。一次请求最多支持20个。 */
  Associations: TargetGroupAssociation[];
}

declare interface AssociateTargetGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AutoRewriteRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** HTTPS:443监听器的ID。 */
  ListenerId: string;
  /** HTTPS:443监听器下需要重定向的域名，若不填，则对HTTPS:443监听器下的所有域名都设置重定向。 */
  Domains?: string[];
  /** 重定向状态码，可取值301,302,307。 */
  RewriteCodes?: number[];
  /** 重定向是否携带匹配的URL。 */
  TakeUrls?: boolean[];
}

declare interface AutoRewriteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeregisterTargetsRequest {
  /** 负载均衡ID。 */
  LoadBalancerId: string;
  /** 解绑目标。 */
  Targets: BatchTarget[];
}

declare interface BatchDeregisterTargetsResponse {
  /** 解绑失败的监听器ID。 */
  FailListenerIdSet?: string[];
  /** 解绑失败错误原因信息。 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchModifyTargetTagRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 要批量修改标签的列表。 */
  ModifyList: RsTagRule[];
}

declare interface BatchModifyTargetTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchModifyTargetWeightRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 要批量修改权重的列表。 */
  ModifyList: RsWeightRule[];
}

declare interface BatchModifyTargetWeightResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchRegisterTargetsRequest {
  /** 负载均衡ID。 */
  LoadBalancerId: string;
  /** 绑定目标。 */
  Targets: BatchTarget[];
}

declare interface BatchRegisterTargetsResponse {
  /** 绑定失败的监听器ID，如为空表示全部绑定成功。 */
  FailListenerIdSet?: string[];
  /** 绑定失败错误原因信息。 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloneLoadBalancerRequest {
  /** 负载均衡ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口获取。 */
  LoadBalancerId: string;
  /** 克隆出负载均衡实例的名称，规则：1-60 个英文、汉字、数字、连接线“-”或下划线“_”。注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。 */
  LoadBalancerName?: string;
  /** 负载均衡实例所属的项目 ID，默认项目 ID 为0，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口获取。不传此参数则视为默认项目。 */
  ProjectId?: number;
  /** 仅适用于公网负载均衡。设置跨可用区容灾时的主可用区ID，可用区 ID 和名称均支持，例如 100001 或 ap-guangzhou-1。注：主可用区是需要承载流量的可用区，备可用区默认不承载流量，主可用区不可用时才使用备可用区，平台将为您自动选择最佳备可用区。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域的主可用区的列表。 */
  MasterZoneId?: string;
  /** 仅适用于公网负载均衡。设置跨可用区容灾时的备可用区ID，可用区 ID 和名称均支持，例如 100001 或 ap-guangzhou-1。注：备可用区是主可用区故障后，需要承载流量的可用区。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域的主/备可用区的列表。 */
  SlaveZoneId?: string;
  /** 仅适用于公网负载均衡。可用区ID，可用区 ID 和名称均支持，指定可用区以创建负载均衡实例。如：100001 或 ap-guangzhou-1。不传则查询所有可用区的 CVM 实例。如需指定可用区，可调用查询可用区列表 [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 接口查询。 */
  ZoneId?: string;
  /** 仅适用于公网负载均衡。负载均衡的网络计费模式。 */
  InternetAccessible?: InternetAccessible;
  /** 仅适用于公网负载均衡。目前仅广州、上海、南京、济南、杭州、福州、北京、石家庄、武汉、长沙、成都、重庆地域支持静态单线 IP 线路类型，如需体验，请联系商务经理申请。申请通过后，即可选择中国移动（CMCC）、中国联通（CUCC）或中国电信（CTCC）的运营商类型，网络计费模式只能使用按带宽包计费(BANDWIDTH_PACKAGE)。 如果不指定本参数，则默认使用BGP。可通过 DescribeResources 接口查询一个地域所支持的Isp。 */
  VipIsp?: string;
  /** 指定Vip申请负载均衡。 */
  Vip?: string;
  /** 购买负载均衡同时，给负载均衡打上标签。 */
  Tags?: TagInfo[];
  /** 独占集群信息。 */
  ExclusiveCluster?: ExclusiveCluster;
  /** 带宽包ID，可以通过 [DescribeBandwidthPackages](https://cloud.tencent.com/document/api/215/19209) 接口获取。指定此参数时，网络计费方式（InternetAccessible.InternetChargeType）只支持按带宽包计费（BANDWIDTH_PACKAGE）。 */
  BandwidthPackageId?: string;
  /** 是否支持绑定跨地域/跨Vpc绑定IP的功能。 */
  SnatPro?: boolean;
  /** 开启绑定跨地域/跨Vpc绑定IP的功能后，创建SnatIp。 */
  SnatIps?: SnatIp[];
  /** 公网独占集群ID或者CDCId，可以通过 [DescribeExclusiveClusters](https://cloud.tencent.com/document/product/214/49278) 接口获取。 */
  ClusterIds?: string[];
  /** 性能容量型规格。clb.c2.medium（标准型）clb.c3.small（高阶型1）clb.c3.medium（高阶型2）clb.c4.small（超强型1）clb.c4.medium（超强型2）clb.c4.large（超强型3）clb.c4.xlarge（超强型4） */
  SlaType?: string;
  /** Stgw独占集群的标签。 */
  ClusterTag?: string;
  /** 仅适用于私有网络内网负载均衡。内网就近接入时，选择可用区下发。可调用[DescribeZones](https://cloud.tencent.com/document/product/213/15707)接口查询可用区列表。 */
  Zones?: string[];
  /** EIP 的唯一 ID，形如：eip-qhx8udkc，仅适用于内网负载均衡绑定EIP，可以通过 [DescribeAddresses](https://cloud.tencent.com/document/product/215/16702) 接口查询。 */
  EipAddressId?: string;
}

declare interface CloneLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClsLogSetRequest {
  /** 日志集的名字，不能和cls其他日志集重名。不填默认为clb_logset。 */
  LogsetName?: string;
  /** 日志集的保存周期，单位：天。 */
  Period?: number;
  /** 日志集类型，ACCESS：访问日志，HEALTH：健康检查日志，默认ACCESS。 */
  LogsetType?: string;
}

declare interface CreateClsLogSetResponse {
  /** 日志集的 ID。 */
  LogsetId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateListenerRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口获取。 */
  LoadBalancerId: string;
  /** 要将监听器创建到哪些端口，每个端口对应一个新的监听器。端口范围：1~65535 */
  Ports: number[];
  /** 监听器协议： TCP | UDP | HTTP | HTTPS | TCP_SSL | QUIC。 */
  Protocol: string;
  /** 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数。 */
  ListenerNames?: string[];
  /** 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL/QUIC监听器。 */
  HealthCheck?: HealthCheck;
  /** 证书相关信息。参数限制如下：此参数仅适用于TCP_SSL监听器和未开启SNI特性的HTTPS监听器。创建TCP_SSL监听器和未开启SNI特性的HTTPS监听器时，此参数和参数MultiCertInfo至少需要传一个， 但不能同时传入。 */
  Certificate?: CertificateInput;
  /** 会话保持时间，单位：秒。可选值：30~3600，默认为0，默认不开启。此参数仅适用于TCP/UDP监听器。 */
  SessionExpireTime?: number;
  /** 监听器转发的方式。可选值：WRR（按权重轮询）、LEAST_CONN（按最小连接数）、IP_HASH（按 IP 地址哈希）默认为 WRR。此参数仅适用于TCP/UDP/TCP_SSL/QUIC监听器。 */
  Scheduler?: string;
  /** 是否开启SNI特性，此参数仅适用于HTTPS监听器。0表示未开启，1表示开启。 */
  SniSwitch?: number;
  /** 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组。此参数仅适用于TCP/UDP监听器。七层监听器应在转发规则中设置。 */
  TargetType?: string;
  /** 会话保持类型。不传或传NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。此参数仅适用于TCP/UDP监听器。七层监听器应在转发规则中设置。（若选择QUIC_CID，则Protocol必须为UDP，Scheduler必须为WRR，同时只支持ipv4） */
  SessionType?: string;
  /** 是否开启长连接，此参数仅适用于HTTP/HTTPS监听器，0:关闭；1:开启， 默认关闭。若后端服务对连接数上限有限制，则建议谨慎开启。此功能目前处于内测中，如需使用，请提交 [内测申请](https://cloud.tencent.com/apply/p/tsodp6qm21)。 */
  KeepaliveEnable?: number;
  /** 创建端口段监听器时必须传入此参数，用以标识结束端口。同时，入参Ports只允许传入一个成员，用以标识开始端口。【如果您需要体验端口段功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category)】。 */
  EndPort?: number;
  /** 解绑后端目标时，是否发RST给两端（客户端和服务器），此参数仅适用于TCP监听器。 */
  DeregisterTargetRst?: boolean;
  /** 证书信息，支持同时传入不同算法类型的多本服务端证书，参数限制如下：此参数仅适用于TCP_SSL监听器和未开启SNI特性的HTTPS监听器。创建TCP_SSL监听器和未开启SNI特性的HTTPS监听器时，此参数和参数Certificate至少需要传一个， 但不能同时传入。 */
  MultiCertInfo?: MultiCertInfo;
  /** 监听器最大连接数，当前仅性能容量型实例且仅TCP/UDP/TCP_SSL/QUIC监听器支持，不传或者传-1表示监听器维度不限速。基础网络实例不支持该参数。 */
  MaxConn?: number;
  /** 监听器最大新增连接数，当前仅性能容量型实例且仅TCP/UDP/TCP_SSL/QUIC监听器支持，不传或者传-1表示监听器维度不限速。基础网络实例不支持该参数。 */
  MaxCps?: number;
  /** 空闲连接超时时间，此参数仅适用于TCP监听器，单位：秒。取值范围：共享型实例和独占型实例支持：300-900，性能容量型实例支持：300-1980。如需设置请通过 [工单申请](https://console.cloud.tencent.com/workorder/category)。 */
  IdleConnectTimeout?: number;
  /** TCP_SSL和QUIC是否支持PP */
  ProxyProtocol?: boolean;
  /** 是否开启SNAT，True（开启）、False（关闭）。默认为关闭。 */
  SnatEnable?: boolean;
  /** 全端口段监听器的结束端口，端口范围：2 - 65535 */
  FullEndPorts?: number[];
  /** 内网http监听器开启h2c开关，True（开启）、False（关闭）。默认为关闭。 */
  H2cSwitch?: boolean;
  /** TCP_SSL监听器支持关闭SSL后仍然支持混绑，此参数为关闭开关。True（关闭）、False（开启）.默认为关闭。 */
  SslCloseSwitch?: boolean;
  /** 数据压缩模式。可选值：transparent（透传模式）、compatibility（兼容模式） */
  DataCompressMode?: string;
}

declare interface CreateListenerResponse {
  /** 创建的监听器的唯一标识数组。 */
  ListenerIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoadBalancerRequest {
  /** 负载均衡实例的网络类型：OPEN：公网属性， INTERNAL：内网属性。 */
  LoadBalancerType: string;
  /** 负载均衡实例的类型。1：通用的负载均衡实例，目前只支持传入1。 */
  Forward?: number;
  /** 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-60 个英文、汉字、数字、连接线“-”或下划线“_”。注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。 */
  LoadBalancerName?: string;
  /** 负载均衡后端目标设备所属的网络 ID，如vpc-12345678，可以通过 [DescribeVpcs](https://cloud.tencent.com/document/product/215/15778) 接口获取。 不填此参数则默认为DefaultVPC。创建内网负载均衡实例时，此参数必填。 */
  VpcId?: string;
  /** 在私有网络内购买内网负载均衡实例的情况下，必须指定子网 ID，内网负载均衡实例的 VIP 将从这个子网中产生。创建内网负载均衡实例时，此参数必填，创建公网IPv4负载均衡实例时，不支持指定该参数。 */
  SubnetId?: string;
  /** 负载均衡实例所属的项目 ID，默认项目 ID 为0。可以通过 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 接口获取。不填此参数则视为默认项目。 */
  ProjectId?: number;
  /** 仅适用于公网负载均衡。IP版本，可取值：IPV4、IPV6、IPv6FullChain，不区分大小写，默认值 IPV4。说明：取值为IPV6表示为IPV6 NAT64版本；取值为IPv6FullChain，表示为IPv6版本。 */
  AddressIPVersion?: string;
  /** 创建负载均衡的个数，默认值 1。创建个数不能超过帐号所能创建的最大值，默认创建最大值为20。 */
  Number?: number;
  /** 仅适用于公网且IP版本为IPv4的负载均衡。设置跨可用区容灾时的主可用区ID， 可用区 ID 和名称均支持，例如 100001 或 ap-guangzhou-1注：主可用区是需要承载流量的可用区，备可用区默认不承载流量，主可用区不可用时才使用备可用区。 */
  MasterZoneId?: string;
  /** 仅适用于公网且IP版本为IPv4的负载均衡。可用区ID，可用区 ID 和名称均支持，指定可用区以创建负载均衡实例。如：100001 或 ap-guangzhou-1。 */
  ZoneId?: string;
  /** 网络计费模式，最大出带宽。仅对内网属性的性能容量型实例和公网属性的所有实例生效。API接口购买包年包月实例还在灰度中，如您需要体验该功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category) */
  InternetAccessible?: InternetAccessible;
  /** 仅适用于公网负载均衡。目前仅广州、上海、南京、济南、杭州、福州、北京、石家庄、武汉、长沙、成都、重庆地域支持静态单线 IP 线路类型，如需体验，请联系商务经理申请。申请通过后，即可选择中国移动（CMCC）、中国联通（CUCC）或中国电信（CTCC）的运营商类型，网络计费模式只能使用按带宽包计费(BANDWIDTH_PACKAGE)。 如果不指定本参数，则默认使用BGP。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域所支持的Isp。 */
  VipIsp?: string;
  /** 购买负载均衡的同时，给负载均衡打上标签，最大支持20个标签键值对。 */
  Tags?: TagInfo[];
  /** 指定VIP申请负载均衡。此参数选填，不填写此参数时自动分配VIP。IPv4和IPv6类型支持此参数，IPv6 NAT64类型不支持。注意：当指定VIP创建内网实例、或公网IPv6 BGP实例时，若VIP不属于指定VPC子网的网段内时，会创建失败；若VIP已被占用，也会创建失败。 */
  Vip?: string;
  /** 带宽包ID，可以通过 [DescribeBandwidthPackages](https://cloud.tencent.com/document/api/215/19209) 接口获取。指定此参数时，网络计费方式（InternetAccessible.InternetChargeType）只支持按带宽包计费（BANDWIDTH_PACKAGE），带宽包的属性即为其结算方式。非上移用户购买的 IPv6 负载均衡实例，且运营商类型非 BGP 时 ，不支持指定具体带宽包id。 */
  BandwidthPackageId?: string;
  /** 独占型实例信息。若创建独占型的内网负载均衡实例，则此参数必填。 */
  ExclusiveCluster?: ExclusiveCluster;
  /** 性能容量型规格。若需要创建性能容量型实例，则此参数必填，取值范围： clb.c2.medium：标准型规格 clb.c3.small：高阶型1规格 clb.c3.medium：高阶型2规格 clb.c4.small：超强型1规格 clb.c4.medium：超强型2规格 clb.c4.large：超强型3规格 clb.c4.xlarge：超强型4规格 若需要创建共享型实例，则无需填写此参数。如需了解规格详情，请参见[实例规格对比](https://cloud.tencent.com/document/product/214/84689)。 */
  SlaType?: string;
  /** 集群ID，集群标识，在需要配置公有云独占集群或本地专有集群时使用。公有云独占集群申请请[提交工单](https://console.cloud.tencent.com/workorder/category)，本地专有集群请参考[本地专有集群](https://cloud.tencent.com/document/product/1346)描述。 */
  ClusterIds?: string[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 是否支持绑定跨地域/跨Vpc绑定IP的功能。 */
  SnatPro?: boolean;
  /** 开启绑定跨地域/跨Vpc绑定IP的功能后，创建SnatIp。 */
  SnatIps?: SnatIp[];
  /** Stgw独占集群的标签。 */
  ClusterTag?: string;
  /** 仅适用于公网且IP版本为IPv4的负载均衡。设置跨可用区容灾时的备可用区ID，可用区 ID 和名称均支持，例如 100001 或 ap-guangzhou-1注：备可用区是主可用区故障后，需要承载流量的可用区。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域的主/备可用区的列表。【如果您需要体验该功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category)】 */
  SlaveZoneId?: string;
  /** EIP 的唯一 ID，可以通过 [DescribeAddresses](https://cloud.tencent.com/document/product/215/16702) 接口查询。形如：eip-qhx8udkc，仅适用于内网负载均衡绑定EIP。 */
  EipAddressId?: string;
  /** Target是否放通来自CLB的流量。开启放通（true）：只验证CLB上的安全组；不开启放通（false）：需同时验证CLB和后端实例上的安全组。IPv6 CLB安全组默认放通，不需要传此参数。 */
  LoadBalancerPassToTarget?: boolean;
  /** 创建域名化负载均衡。 */
  DynamicVip?: boolean;
  /** 网络出口 */
  Egress?: string;
  /** 负载均衡实例的预付费相关属性，API接口购买包年包月实例还在灰度中，如您需要体验该功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category) */
  LBChargePrepaid?: LBChargePrepaid;
  /** 负载均衡实例计费类型，取值：POSTPAID_BY_HOUR，PREPAID，默认是POSTPAID_BY_HOUR。API接口购买包年包月实例还在灰度中，如您需要体验该功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category) */
  LBChargeType?: string;
  /** 七层访问日志主题ID */
  AccessLogTopicId?: string;
}

declare interface CreateLoadBalancerResponse {
  /** 由负载均衡实例唯一 ID 组成的数组。存在某些场景，如创建出现延迟时，此字段可能返回为空；此时可以根据接口返回的RequestId或DealName参数，通过DescribeTaskStatus接口查询创建的资源ID。 */
  LoadBalancerIds?: string[] | null;
  /** 订单号。 */
  DealName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoadBalancerSnatIpsRequest {
  /** 负载均衡唯一性ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口查询。例如：lb-12345678。 */
  LoadBalancerId: string;
  /** 添加的SnatIp信息，可指定IP申请，或者指定子网自动申请。可以通过 [DescribeSubnets](https://cloud.tencent.com/document/api/215/15784) 查询获取，单个CLB实例可申请的默认上限为10个。 */
  SnatIps: SnatIp[];
  /** 添加的SnatIp的个数，可与SnatIps一起使用，但若指定IP时，则不能指定创建的SnatIp个数。默认值为1，数量上限与用户配置有关，默认上限为10。 */
  Number?: number;
}

declare interface CreateLoadBalancerSnatIpsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRuleRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口获取 */
  LoadBalancerId: string;
  /** 监听器 ID，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口获取 */
  ListenerId: string;
  /** 新建转发规则的信息。 */
  Rules: RuleInput[];
}

declare interface CreateRuleResponse {
  /** 创建的转发规则的唯一标识数组。 */
  LocationIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTargetGroupRequest {
  /** 目标组名称，限定50个字符 */
  TargetGroupName?: string;
  /** 目标组的vpcid属性，不填则使用默认vpc */
  VpcId?: string;
  /** 目标组的默认端口， 后续添加服务器时可使用该默认端口。全监听目标组不支持此参数，非全监听目标组Port和TargetGroupInstances.N中的port二者必填其一。 */
  Port?: number;
  /** 目标组绑定的后端服务器，单次最多支持50个。 */
  TargetGroupInstances?: TargetGroupInstance[];
  /** 目标组类型，当前支持v1(旧版目标组), v2(新版目标组), 默认为v1(旧版目标组)。 */
  Type?: string;
  /** 目标组后端转发协议。v2新版目标组该项必填。目前支持tcp、udp。 */
  Protocol?: string;
  /** 标签。 */
  Tags?: TagInfo[];
  /** 后端服务默认权重。 取值范围[0, 100] 设置该值后，添加后端服务到目标组时， 若后端服务不单独设置权重， 则使用这里的默认权重。 v1 目标组类型不支持设置 Weight 参数。 */
  Weight?: number;
  /** 全监听目标组标识，为true表示是全监听目标组，false表示不是全监听目标组。 */
  FullListenSwitch?: boolean;
  /** 是否开启长连接，此参数仅适用于HTTP/HTTPS目标组，0:关闭；1:开启， 默认关闭。 */
  KeepaliveEnable?: boolean;
  /** 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。TCP/UDP目标组不支持该参数。 */
  SessionExpireTime?: number;
}

declare interface CreateTargetGroupResponse {
  /** 创建目标组后生成的id */
  TargetGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 日志主题的名称。 */
  TopicName: string;
  /** 主题分区Partition的数量，不传参默认创建1个，最大创建允许10个，分裂/合并操作会改变分区数量，整体上限50个。 */
  PartitionCount?: number;
  /** 日志类型，ACCESS：访问日志，HEALTH：健康检查日志，默认ACCESS。 */
  TopicType?: string;
  /** 存储时间，单位天，默认为 30。- 日志接入标准存储时，支持1至3600天，值为3640时代表永久保存。- 日志接入低频存储时，支持7至3600天，值为3640时代表永久保存。 */
  Period?: number;
  /** 日志主题的存储类型，可选值 HOT（标准存储），COLD（低频存储）；默认为HOT。 */
  StorageType?: string;
}

declare interface CreateTopicResponse {
  /** 日志主题的 ID。 */
  TopicId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomizedConfigRequest {
  /** 删除的配置ID列表 */
  UconfigIdList: string[];
}

declare interface DeleteCustomizedConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteListenerRequest {
  /** 负载均衡实例ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口查询。 */
  LoadBalancerId: string;
  /** 要删除的监听器ID，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  ListenerId: string;
}

declare interface DeleteListenerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancerListenersRequest {
  /** 负载均衡实例ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口查询。 */
  LoadBalancerId: string;
  /** 指定删除的监听器ID数组，最大为20个。若不填则删除负载均衡的所有监听器，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  ListenerIds?: string[];
}

declare interface DeleteLoadBalancerListenersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancerRequest {
  /** 要删除的负载均衡实例 ID 数组，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口获取，数组大小最大支持20。 */
  LoadBalancerIds: string[];
  /** 是否强制删除clb。True表示强制删除，False表示不是强制删除，需要做拦截校验。默认为 False。以下几种情况会默认拦截删除操作，如果确认强制删除则需要传强制校验参数ForceDelete为True。1、删除后端绑定大于等于 20 个 RS 的实例时。2、删除后端有 RS 且 5 分钟 内“出/入带宽”峰值取大 > 10Mbps 的实例时。3、单地域内 5 分钟 内删除大于等于 30 个实例时。 */
  ForceDelete?: boolean;
}

declare interface DeleteLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancerSnatIpsRequest {
  /** 负载均衡唯一ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。例如：lb-12345678。 */
  LoadBalancerId: string;
  /** 删除SnatIp地址数组，最大支持删除数量为20个。 */
  Ips: string[];
}

declare interface DeleteLoadBalancerSnatIpsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRewriteRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 源监听器ID。 */
  SourceListenerId: string;
  /** 目标监听器ID。 */
  TargetListenerId: string;
  /** 转发规则之间的重定向关系。 */
  RewriteInfos: RewriteLocationMap[];
}

declare interface DeleteRewriteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRuleRequest {
  /** 负载均衡实例ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口查询。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  ListenerId: string;
  /** 要删除的转发规则的ID组成的数组，可以通过 [DescribeLoadBalancersDetail](https://cloud.tencent.com/document/api/214/46916) 接口查询。 */
  LocationIds?: string[];
  /** 要删除的转发规则的域名，如果是多域名，可以指定多域名列表中的任意一个，可以通过 [DescribeLoadBalancersDetail](https://cloud.tencent.com/document/api/214/46916) 接口查询。 */
  Domain?: string;
  /** 要删除的转发规则的转发路径，可以通过 [DescribeLoadBalancersDetail](https://cloud.tencent.com/document/api/214/46916) 接口查询。 */
  Url?: string;
  /** 监听器下必须配置一个默认域名，当需要删除默认域名时，可以指定另一个域名作为新的默认域名，如果新的默认域名是多域名，可以指定多域名列表中的任意一个，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  NewDefaultServerDomain?: string;
}

declare interface DeleteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTargetGroupsRequest {
  /** 目标组的ID数组，单次最多支持删除20个。 */
  TargetGroupIds: string[];
}

declare interface DeleteTargetGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeregisterFunctionTargetsRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器 ID。 */
  ListenerId: string;
  /** 待解绑的云函数列表。 */
  FunctionTargets: FunctionTarget[];
  /** 目标转发规则的 ID，当将云函数从七层转发规则上解绑时，必须输入此参数或 Domain+Url 参数。 */
  LocationId?: string;
  /** 目标转发规则的域名，若已经输入 LocationId 参数，则本参数不生效。 */
  Domain?: string;
  /** 目标转发规则的 URL，若已经输入 LocationId 参数，则本参数不生效。 */
  Url?: string;
}

declare interface DeregisterFunctionTargetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeregisterTargetGroupInstancesRequest {
  /** 目标组ID。 */
  TargetGroupId: string;
  /** 待解绑的服务器信息，支持批量解除绑定，单次批量解除数量最多为20个。在这个接口 Port 参数为必填项。 */
  TargetGroupInstances: TargetGroupInstance[];
}

declare interface DeregisterTargetGroupInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeregisterTargetsFromClassicalLBRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 后端服务的实例ID列表。 */
  InstanceIds: string[];
}

declare interface DeregisterTargetsFromClassicalLBResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeregisterTargetsRequest {
  /** 负载均衡实例 ID，格式如 lb-12345678。 */
  LoadBalancerId: string;
  /** 监听器 ID，格式如 lbl-12345678。 */
  ListenerId: string;
  /** 要解绑的后端服务列表，数组长度最大支持20。 */
  Targets: Target[];
  /** 转发规则的ID，格式如 loc-12345678，当从七层转发规则解绑机器时，必须提供此参数或Domain+URL两者之一。 */
  LocationId?: string;
  /** 目标规则的域名，提供LocationId参数时本参数不生效。 */
  Domain?: string;
  /** 目标规则的URL，提供LocationId参数时本参数不生效。 */
  Url?: string;
}

declare interface DeregisterTargetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBlockIPListRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 数据偏移量，默认为 0。 */
  Offset?: number;
  /** 返回IP的最大个数，默认为 100000。 */
  Limit?: number;
}

declare interface DescribeBlockIPListResponse {
  /** 返回的IP的数量 */
  BlockedIPCount?: number;
  /** 获取用户真实IP的字段 */
  ClientIPField?: string;
  /** 加入了12360黑名单的IP列表 */
  BlockedIPList?: BlockedIP[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBlockIPTaskRequest {
  /** ModifyBlockIPList 接口返回的异步任务的ID。 */
  TaskId: string;
}

declare interface DescribeBlockIPTaskResponse {
  /** 1 running，2 fail，6 succ */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassicalLBByInstanceIdRequest {
  /** 后端实例ID列表。 */
  InstanceIds: string[];
}

declare interface DescribeClassicalLBByInstanceIdResponse {
  /** 负载均衡相关信息列表。 */
  LoadBalancerInfoList: ClassicalLoadBalancerInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassicalLBHealthStatusRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID。 */
  ListenerId?: string;
}

declare interface DescribeClassicalLBHealthStatusResponse {
  /** 后端健康状态列表。 */
  HealthList?: ClassicalHealth[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassicalLBListenersRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID列表。 */
  ListenerIds?: string[];
  /** 负载均衡监听的协议：'TCP', 'UDP', 'HTTP', 'HTTPS'。 */
  Protocol?: string;
  /** 负载均衡监听端口，范围为[1-65535]。 */
  ListenerPort?: number;
  /** 监听器的状态，0：创建中，1：运行中。 */
  Status?: number;
}

declare interface DescribeClassicalLBListenersResponse {
  /** 监听器列表。 */
  Listeners?: ClassicalListener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassicalLBTargetsRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
}

declare interface DescribeClassicalLBTargetsResponse {
  /** 后端服务列表。 */
  Targets?: ClassicalTarget[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClsLogSetRequest {
}

declare interface DescribeClsLogSetResponse {
  /** 日志集的 ID。 */
  LogsetId: string;
  /** 健康检查日志集的 ID。 */
  HealthLogsetId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterResourcesRequest {
  /** 返回集群中资源列表数目，默认为20，最大值为100。 */
  Limit?: number;
  /** 返回集群中资源列表起始偏移量，默认为0。 */
  Offset?: number;
  /** 查询集群中资源列表条件，详细的过滤条件如下： cluster-id - String - 是否必填：否 - （过滤条件）按照 集群 的唯一ID过滤，如 ："tgw-12345678","stgw-12345678","vpcgw-12345678"。 vip - String - 是否必填：否 - （过滤条件）按照vip过滤。 loadbalancer-id - String - 是否必填：否 - （过滤条件）按照负载均衡唯一ID过滤。 idle - String 是否必填：否 - （过滤条件）按照是否闲置过滤，如"True","False"。 */
  Filters?: Filter[];
}

declare interface DescribeClusterResourcesResponse {
  /** 集群中资源列表。 */
  ClusterResourceSet?: ClusterResource[];
  /** 集群中资源总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossTargetsRequest {
  /** 返回后端服务列表数目，默认20，最大值100。 */
  Limit?: number;
  /** 返回后端服务列表起始偏移量，默认0。 */
  Offset?: number;
  /** 查询跨域2.0版本云联网后端子机和网卡服务列表条件，详细的过滤条件如下： vpc-id - String - 是否必填：否 - （过滤条件）按照 本地私有网络ID，即负载均衡的VpcId 过滤，如："vpc-12345678"。 ip - String - 是否必填：否 - （过滤条件）按照 后端服务ip 过滤，如："192.168.0.1"。 listener-id - String - 是否必填：否 - （过滤条件）按照 监听器ID 过滤，如："lbl-12345678"。 location-id - String - 是否必填：否 - （过滤条件）按照 七层监听器规则ID 过滤，如："loc-12345678"。 */
  Filters?: Filter[];
}

declare interface DescribeCrossTargetsResponse {
  /** 后端服务列表总数。 */
  TotalCount?: number;
  /** 后端服务列表。 */
  CrossTargetSet?: CrossTargets[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomizedConfigAssociateListRequest {
  /** 配置ID，可以通过 [DescribeCustomizedConfigList](https://cloud.tencent.com/document/product/214/60009) 接口获取。 */
  UconfigId?: string;
  /** 拉取绑定关系列表开始位置，默认值 0 */
  Offset?: number;
  /** 拉取绑定关系列表数目，默认值 20 */
  Limit?: number;
  /** 搜索域名，可以通过 [DescribeLoadBalancersDetail](https://cloud.tencent.com/document/product/214/46916) 接口返回值的 `Domain` 字段查询。 */
  Domain?: string;
}

declare interface DescribeCustomizedConfigAssociateListResponse {
  /** 绑定关系列表 */
  BindList?: BindDetailItem[];
  /** 绑定关系总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomizedConfigListRequest {
  /** 配置类型:CLB 负载均衡维度。 SERVER 域名维度。 LOCATION 规则维度。 */
  ConfigType: string;
  /** 拉取页偏移，默认值0。 */
  Offset?: number;
  /** 拉取数目，默认值20。 */
  Limit?: number;
  /** 拉取指定配置名字，模糊匹配。 */
  ConfigName?: string;
  /** 配置ID，可以通过 [DescribeCustomizedConfigList](https://cloud.tencent.com/document/api/214/60009) 接口查询。 */
  UconfigIds?: string[];
  /** 过滤条件如下：- loadbalancer-id按照【负载均衡 ID】进行过滤。实例计费模式例如：lb-9vxezxza。类型：String必选：否获取方式：[DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459)- vip按照【负载均衡VIP】进行过滤。网络计费模式例如："1.1.1.1","2204::22:3"。类型：String必选：否获取方式：[DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) */
  Filters?: Filter[];
}

declare interface DescribeCustomizedConfigListResponse {
  /** 配置列表 */
  ConfigList?: ConfigListItem[];
  /** 配置数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExclusiveClustersRequest {
  /** 返回集群列表数目，默认值为20，最大值为100。 */
  Limit?: number;
  /** 返回集群列表起始偏移量，默认为0。 */
  Offset?: number;
  /** 查询集群列表条件，详细的过滤条件如下： cluster-type - String - 是否必填：否 - （过滤条件）按照 集群 的类型过滤，包括"TGW","STGW","VPCGW"。 cluster-id - String - 是否必填：否 - （过滤条件）按照 集群 的唯一ID过滤，如 ："tgw-12345678","stgw-12345678","vpcgw-12345678"。 cluster-name - String - 是否必填：否 - （过滤条件）按照 集群 的名称过滤。 cluster-tag - String - 是否必填：否 - （过滤条件）按照 集群 的标签过滤。（只有TGW/STGW集群有集群标签） vip - String - 是否必填：否 - （过滤条件）按照 集群 内的vip过滤。 loadbalancer-id - String - 是否必填：否 - （过滤条件）按照 集群 内的负载均衡唯一ID过滤。 network - String - 是否必填：否 - （过滤条件）按照 集群 的网络类型过滤，如："Public","Private"。 zone - String - 是否必填：否 - （过滤条件）按照 集群 所在可用区过滤，如："ap-guangzhou-1"（广州一区）。 isp -- String - 是否必填：否 - （过滤条件）按照TGW集群的 Isp 类型过滤，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。 */
  Filters?: Filter[];
}

declare interface DescribeExclusiveClustersResponse {
  /** 集群列表。 */
  ClusterSet?: Cluster[];
  /** 集群总数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIdleLoadBalancersRequest {
  /** 数据偏移量，默认为0。 */
  Offset?: number;
  /** 返回负载均衡实例的数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 负载均衡所在地域，可以通过 [DescribeRegions](https://cloud.tencent.com/document/product/1596/77930) 接口返回值 `RegionSet.Region` 字段获取。 */
  LoadBalancerRegion?: string;
}

declare interface DescribeIdleLoadBalancersResponse {
  /** 闲置实例列表 */
  IdleLoadBalancers?: IdleLoadBalancer[];
  /** 所有闲置实例数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLBListenersRequest {
  /** 需要查询的内网ip列表 */
  Backends: LbRsItem[];
}

declare interface DescribeLBListenersResponse {
  /** 绑定的后端规则 */
  LoadBalancers: LBItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLBOperateProtectRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerIds: string[];
}

declare interface DescribeLBOperateProtectResponse {
  /** 返回的负载均衡操作保护信息数组。 */
  LoadBalancerSet: LBOperateProtectInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenersRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/api/214/30685) 接口获取。 */
  LoadBalancerId: string;
  /** 要查询的负载均衡监听器 ID 数组，最大为100个，可以通过 [DescribeListeners](https://cloud.tencent.com/document/api/214/30686) 接口获取。 */
  ListenerIds?: string[];
  /** 要查询的监听器协议类型，取值 TCP | UDP | HTTP | HTTPS | TCP_SSL | QUIC。 */
  Protocol?: string;
  /** 要查询的监听器的端口，端口范围：1-65535 */
  Port?: number;
}

declare interface DescribeListenersResponse {
  /** 监听器列表。 */
  Listeners?: Listener[];
  /** 总的监听器个数（根据端口、协议、监听器ID过滤后）。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancerListByCertIdRequest {
  /** 服务端证书的ID，或客户端证书的ID。可以通过 [DescribeCertificate](https://cloud.tencent.com/document/api/400/41674) 接口查询。数组最大长度为20。 */
  CertIds: string[];
}

declare interface DescribeLoadBalancerListByCertIdResponse {
  /** 证书ID，以及与该证书ID关联的负载均衡实例列表 */
  CertSet?: CertIdRelatedWithLoadBalancers[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancerOverviewRequest {
}

declare interface DescribeLoadBalancerOverviewResponse {
  /** 负载均衡总数 */
  TotalCount?: number;
  /** 运行中的负载均衡数目 */
  RunningCount?: number;
  /** 隔离中的负载均衡数目 */
  IsolationCount?: number;
  /** 即将到期的负载均衡数目 */
  WillExpireCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancerTrafficRequest {
  /** 负载均衡所在地域，不传默认返回所有地域负载均衡。 */
  LoadBalancerRegion?: string;
}

declare interface DescribeLoadBalancerTrafficResponse {
  /** 按出带宽从高到低排序后的负载均衡信息。 */
  LoadBalancerTraffic?: LoadBalancerTraffic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancersDetailRequest {
  /** 返回负载均衡列表数目，默认20，最大值100。 */
  Limit?: number;
  /** 返回负载均衡列表起始偏移量，默认0。 */
  Offset?: number;
  /** 选择返回的Fields列表，系统仅会返回Fileds中填写的字段，可填写的字段详情请参见LoadBalancerDetail。若未在Fileds填写相关字段，则此字段返回null。Fileds中默认添加LoadBalancerId和LoadBalancerName字段。 */
  Fields?: string[];
  /** 当Fields包含TargetId、TargetAddress、TargetPort、TargetWeight、ListenerId、Protocol、Port、LocationId、Domain、Url等Fields时，必选选择导出目标组的Target或者非目标组Target，取值范围NODE、GROUP。 */
  TargetType?: string;
  /** 查询负载均衡详细信息列表条件，详细的过滤条件如下：- loadbalancer-id按照【负载均衡ID】进行过滤。例如：lb-rbw5skde。类型：String必选：否获取方式：[DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459)- project-id按照【项目ID】进行过滤。例如： "0"、"123"。类型：String必选：否获取方式：[DescribeProject](https://cloud.tencent.com/document/api/651/78725)- network按照【负载均衡网络类型】进行过滤。例如：Public。类型：String必选：否可选值：Private（内网）、Public（公网）- vip按照【负载均衡 VIP】进行过滤。例如："1.1.1.1","2204::22:3"。类型：String必选：否- vpcid按照【负载均衡所属 VPCID】进行过滤。例如："vpc-12345678"。类型：String必选：否获取方式：[DescribeZones](https://cloud.tencent.com/document/product/213/15707)- target-ip按照【后端目标内网 IP】进行过滤。例如："1.1.1.1","2203::214:4"。类型：String必选：否- zone按照【负载均衡所属的可用区】进行过滤。例如："ap-guangzhou-1"。类型：String必选：否获取方式：[DescribeZones](https://cloud.tencent.com/document/product/213/15707)- tag-key按照【负载均衡标签的标签键】进行过滤，例如："name"。类型：String必选：否获取方式：[DescribeTags](https://cloud.tencent.com/document/api/651/35316)- tag:*按照【负载均衡的标签】进行过滤，':' 后面跟的是标签键。如过滤标签键name，标签值zhangsan,lisi，{"Name": "tag:name","Values": ["zhangsan", "lisi"]}。类型：String必选：否获取方式：[DescribeTagKeys](https://cloud.tencent.com/document/api/651/35318)- fuzzy-search按照【负载均衡VIP，负载均衡名称】模糊搜索，例如："1.1"。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeLoadBalancersDetailResponse {
  /** 负载均衡详情列表总数。 */
  TotalCount?: number;
  /** 负载均衡详情列表。 */
  LoadBalancerDetailSet?: LoadBalancerDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancersRequest {
  /** 负载均衡实例ID。实例ID数量上限为20个。 */
  LoadBalancerIds?: string[];
  /** 负载均衡实例的网络类型：OPEN：公网属性， INTERNAL：内网属性。 */
  LoadBalancerType?: string;
  /** 负载均衡实例的类型。1：通用的负载均衡实例，0：传统型负载均衡实例。如果不传此参数，则查询所有类型的负载均衡实例。 */
  Forward?: number;
  /** 负载均衡实例的名称，支持模糊查询。 */
  LoadBalancerName?: string;
  /** 腾讯云为负载均衡实例分配的域名，支持模糊查询。 */
  Domain?: string;
  /** 负载均衡实例的 VIP 地址，支持多个。 */
  LoadBalancerVips?: string[];
  /** 负载均衡绑定的后端服务的外网 IP，只支持查询云服务器的公网 IP。 */
  BackendPublicIps?: string[];
  /** 负载均衡绑定的后端服务的内网 IP，只支持查询云服务器的内网 IP。 */
  BackendPrivateIps?: string[];
  /** 数据偏移量，默认为0。 */
  Offset?: number;
  /** 返回负载均衡实例的数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 排序参数，支持以下字段：- LoadBalancerName- CreateTime- Domain- LoadBalancerType默认为 CreateTime。 */
  OrderBy?: string;
  /** 1：倒序，0：顺序，默认为1，按照创建时间倒序。 */
  OrderType?: number;
  /** 模糊搜索字段，模糊匹配负载均衡实例的名称、域名、负载均衡实例的 VIP 地址，负载均衡实例ID。 */
  SearchKey?: string;
  /** 负载均衡实例所属的项目 ID，可以通过[DescribeProject](https://cloud.tencent.com/document/api/651/78725)接口获取，不传默认所有项目。 */
  ProjectId?: number;
  /** 负载均衡是否绑定后端服务，0：没有绑定后端服务，1：绑定后端服务，-1：查询全部。 */
  WithRs?: number;
  /** 负载均衡实例所属私有网络唯一ID，如 vpc-bhqkbhdx，可以通过[DescribeVpcs](https://cloud.tencent.com/document/api/215/15778)接口获取。查找基础网络类型的负载均衡可传入'0'。 */
  VpcId?: string;
  /** 安全组ID，如 sg-m1cc****，可以通过接口[DescribeSecurityGroups](https://cloud.tencent.com/document/product/215/15808)获取。 */
  SecurityGroup?: string;
  /** 主可用区ID，如 ："100001" （对应的是广州一区）。可通过[DescribeZones](https://cloud.tencent.com/document/product/213/15707)获取可用区列表。 */
  MasterZone?: string;
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。`Filter.Name`和`Filter.Values`皆为必填项。详细的过滤条件如下：- charge-type按照【实例计费模式】进行过滤。实例计费模式例如：PREPAID。类型：String必选：否可选项：PREPAID(预付费)、POSTPAID_BY_HOUR(后付费)- internet-charge-type按照【网络计费模式】进行过滤。网络计费模式例如：BANDWIDTH_PREPAID。类型：String必选：否可选项：BANDWIDTH_PREPAID(预付费按带宽结算)、 TRAFFIC_POSTPAID_BY_HOUR(流量按小时后付费)、BANDWIDTH_POSTPAID_BY_HOUR(带宽按小时后付费)、BANDWIDTH_PACKAGE(带宽包用户)- master-zone-id按照【CLB主可用区ID】进行过滤。例如：100001（对应的是广州一区）。类型：String必选：否获取方式：[DescribeZones](https://cloud.tencent.com/document/product/213/15707)- tag-key按照【CLB 标签的键】进行过滤，例如：tag-key。类型：String必选：否获取方式：[DescribeTags](https://cloud.tencent.com/document/api/651/35316)- tag:tag-key按照【CLB标签键值】进行过滤，例如：tag-test。类型：String必选：否获取方式：[DescribeTagKeys](https://cloud.tencent.com/document/api/651/35318)- function-name按照【后端绑定SCF云函数的函数名称】进行过滤，例如：helloworld-1744958255。类型：String必选：否获取方式：[ListFunctions](https://cloud.tencent.com/document/api/583/18582)- vip-isp按照【CLB VIP的运营商类型】进行过滤，例如：BGP。类型：String必选：否公网类型可选项：BGP(多线)、CMCC(中国移动)、CTCC(中国电信)、CUCC(中国联通)内网类型可选项：INTERNAL(内网)- sla-type按照【CLB 的性能容量型规格】进行过滤，例如：clb.c4.xlarge。类型：String必选：否可选项：clb.c2.medium(标准型)、clb.c3.small(高阶型1)、clb.c3.medium(高阶型2)、clb.c4.small(超强型1)、clb.c4.medium(超强型2)、clb.c4.large(超强型3)、clb.c4.xlarge(超强型4)具体规格参数参考：- exclusive按照【独占实例】进行过滤。例如：1，代表筛选独占型实例。类型：String必选：否可选项：0、1 */
  Filters?: Filter[];
  /** 选择返回的扩充字段，不指定时，扩充字段默认不返回。详细支持的扩充字段如下： TargetCount：绑定的后端服务数量 */
  AdditionalFields?: string[];
}

declare interface DescribeLoadBalancersResponse {
  /** 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。 */
  TotalCount?: number;
  /** 返回的负载均衡实例数组。 */
  LoadBalancerSet?: LoadBalancer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuotaRequest {
}

declare interface DescribeQuotaResponse {
  /** 配额列表 */
  QuotaSet?: Quota[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcesRequest {
  /** 返回可用区资源列表数目，默认20，最大值100。 */
  Limit?: number;
  /** 返回可用区资源列表起始偏移量，默认0。 */
  Offset?: number;
  /** 查询可用区资源列表条件，详细的过滤条件如下：- master-zone按照【地域可用区】进行过滤，例如：ap-guangzhou-2。类型：String必选：否- ip-version按照【IP 类型】进行过滤，例如：IPv4。类型：String必选：否可选项：IPv4、IPv6、IPv6_Nat- isp按照【ISP 类型】进行过滤，例如：BGP。类型：String必选：否可选项：BGP、CMCC（中国移动）、CUCC（中国联通）、CTCC（中国电信）、BGP_PRO、INTERNAL（内网） */
  Filters?: Filter[];
}

declare interface DescribeResourcesResponse {
  /** 可用区支持的资源列表。 */
  ZoneResourceSet?: ZoneResource[];
  /** 可用区资源列表数目。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRewriteRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID数组。 */
  SourceListenerIds?: string[];
  /** 负载均衡转发规则的ID数组。 */
  SourceLocationIds?: string[];
}

declare interface DescribeRewriteResponse {
  /** 重定向转发规则构成的数组，若无重定向规则，则返回空数组。 */
  RewriteSet?: RuleOutput[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupInstancesRequest {
  /** 过滤条件，当前支持按照 TargetGroupId，BindIP，InstanceId 多个条件组合过滤。 */
  Filters: Filter[];
  /** 显示数量限制，默认20。 */
  Limit?: number;
  /** 显示的偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeTargetGroupInstancesResponse {
  /** 本次查询的结果数量。 */
  TotalCount?: number;
  /** 绑定的服务器信息。 */
  TargetGroupInstanceSet?: TargetGroupBackend[];
  /** 实际统计数量，不受Limit、Offset、CAM的影响。 */
  RealCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupListRequest {
  /** 目标组ID数组。 */
  TargetGroupIds?: string[];
  /** 过滤条件数组，支持TargetGroupVpcId和TargetGroupName。与TargetGroupIds互斥，优先使用目标组ID。 */
  Filters?: Filter[];
  /** 显示的偏移起始量。 */
  Offset?: number;
  /** 显示条数限制，默认为20。 */
  Limit?: number;
}

declare interface DescribeTargetGroupListResponse {
  /** 显示的结果数量。 */
  TotalCount?: number;
  /** 显示的目标组信息集合。 */
  TargetGroupSet?: TargetGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupsRequest {
  /** 目标组ID，与Filters互斥。 */
  TargetGroupIds?: string[];
  /** 显示条数限制，默认为20。 */
  Limit?: number;
  /** 显示的偏移起始量。 */
  Offset?: number;
  /** 过滤条件数组，与TargetGroupIds互斥，支持 TargetGroupVpcId（私有网络 ID）和 TargetGroupName（目标组名称）以及 Tag（标签）。 */
  Filters?: Filter[];
}

declare interface DescribeTargetGroupsResponse {
  /** 显示的结果数量。 */
  TotalCount?: number;
  /** 显示的目标组信息集合。 */
  TargetGroupSet?: TargetGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetHealthRequest {
  /** 要查询的负载均衡实例ID列表。 */
  LoadBalancerIds: string[];
  /** 要查询的监听器ID列表。 */
  ListenerIds?: string[];
  /** 要查询的转发规则ID列表。 */
  LocationIds?: string[];
}

declare interface DescribeTargetHealthResponse {
  /** 负载均衡实例列表。 */
  LoadBalancers?: LoadBalancerHealth[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetsRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 监听器 ID 列表。ID 数量上限为20个。 */
  ListenerIds?: string[];
  /** 监听器协议类型。 */
  Protocol?: string;
  /** 监听器端口。 */
  Port?: number;
  /** 查询负载均衡绑定的后端服务列表，过滤条件如下： location-id - String - 是否必填：否 - （过滤条件）按照 规则ID 过滤，如："loc-12345678"。 private-ip-address - String - 是否必填：否 - （过滤条件）按照 后端服务内网IP 过滤，如："172.16.1.1"。 tag - String - 是否必填：否 - （过滤条件）按照 标签 过滤，如："tag-test"。 */
  Filters?: Filter[];
}

declare interface DescribeTargetsResponse {
  /** 监听器后端绑定的机器信息。 */
  Listeners?: ListenerBackend[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 请求ID，即接口返回的 RequestId 参数。 */
  TaskId?: string;
  /** 订单ID。注意：参数TaskId和DealName必须传一个。 */
  DealName?: string;
}

declare interface DescribeTaskStatusResponse {
  /** 任务的当前状态。 0：成功，1：失败，2：进行中。 */
  Status?: number;
  /** 由负载均衡实例唯一 ID 组成的数组。 */
  LoadBalancerIds?: string[] | null;
  /** 辅助描述信息，如失败原因等。 */
  Message?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateCustomizedConfigRequest {
  /** 配置ID */
  UconfigId: string;
  /** 解绑的列表 */
  BindList: BindItem[];
}

declare interface DisassociateCustomizedConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateTargetGroupsRequest {
  /** 待解绑的规则关系数组，支持批量解绑多个监听器，单次批量解除最多20个。 */
  Associations: TargetGroupAssociation[];
}

declare interface DisassociateTargetGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateLoadBalancerRequest {
  /** 询价的负载均衡类型，OPEN为公网类型，INTERNAL为内网类型 */
  LoadBalancerType: string;
  /** 询价的收费类型，POSTPAID为按量计费，"PREPAID"为预付费包年包月 */
  LoadBalancerChargeType: string;
  /** 询价的收费周期。（仅包年包月支持该参数） */
  LoadBalancerChargePrepaid?: LBChargePrepaid;
  /** 询价的网络计费方式 */
  InternetAccessible?: InternetAccessible;
  /** 询价的负载均衡实例个数，默认为1 */
  GoodsNum?: number;
  /** 指定可用区询价。如：ap-guangzhou-1 */
  ZoneId?: string;
  /** 包年包月询价时传性能容量型规格，如：clb.c2.medium（标准型）clb.c3.small（高阶型1）clb.c3.medium（高阶型2）clb.c4.small（超强型1）clb.c4.medium（超强型2）clb.c4.large（超强型3）clb.c4.xlarge（超强型4）按量付费询价时传SLA */
  SlaType?: string;
  /** IP版本，可取值：IPV4、IPV6、IPv6FullChain，不区分大小写，默认值 IPV4。说明：取值为IPV6表示为IPV6 NAT64版本；取值为IPv6FullChain，表示为IPv6版本。 */
  AddressIPVersion?: string;
  /** 仅适用于公网负载均衡。目前仅广州、上海、南京、济南、杭州、福州、北京、石家庄、武汉、长沙、成都、重庆地域支持静态单线 IP 线路类型，如需体验，请联系商务经理申请。申请通过后，即可选择中国移动（CMCC）、中国联通（CUCC）或中国电信（CTCC）的运营商类型，网络计费模式只能使用按带宽包计费(BANDWIDTH_PACKAGE)。 如果不指定本参数，则默认使用BGP。可通过 DescribeResources 接口查询一个地域所支持的Isp。 */
  VipIsp?: string;
}

declare interface InquiryPriceCreateLoadBalancerResponse {
  /** 该参数表示对应的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceModifyLoadBalancerRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerId: string;
  /** 修改后的网络带宽信息 */
  InternetAccessible: InternetAccessible;
}

declare interface InquiryPriceModifyLoadBalancerResponse {
  /** 描述价格信息 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRefundLoadBalancerRequest {
  /** 负载均衡实例ID。可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerId: string;
}

declare interface InquiryPriceRefundLoadBalancerResponse {
  /** 该参数表示对应的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewLoadBalancerRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerId: string;
  /** 续费周期 */
  LoadBalancerChargePrepaid: LBChargePrepaid;
}

declare interface InquiryPriceRenewLoadBalancerResponse {
  /** 表示续费价格 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManualRewriteRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 源监听器 ID。 */
  SourceListenerId: string;
  /** 目标监听器 ID。 */
  TargetListenerId: string;
  /** 转发规则之间的重定向关系。 */
  RewriteInfos: RewriteLocationMap[];
}

declare interface ManualRewriteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MigrateClassicalLoadBalancersRequest {
  /** 传统型负载均衡ID数组 */
  LoadBalancerIds: string[];
  /** 独占集群信息 */
  ExclusiveCluster?: ExclusiveCluster;
}

declare interface MigrateClassicalLoadBalancersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBlockIPListRequest {
  /** 负载均衡实例ID */
  LoadBalancerIds: string[];
  /** 操作类型，可取： add_customized_field（首次设置header，开启黑名单功能） set_customized_field（修改header） del_customized_field（删除header） add_blocked（添加黑名单） del_blocked（删除黑名单） flush_blocked（清空黑名单） */
  Type: string;
  /** 客户端真实IP存放的header字段名 */
  ClientIPField: string;
  /** 封禁IP列表，单次操作数组最大长度支持200000 */
  BlockIPList?: string[];
  /** 过期时间，单位秒，默认值3600 */
  ExpireTime?: number;
  /** 添加IP的策略，可取：fifo（如果黑名单容量已满，新加入黑名单的IP采用先进先出策略） */
  AddStrategy?: string;
}

declare interface ModifyBlockIPListResponse {
  /** 异步任务的ID */
  JodId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomizedConfigRequest {
  /** 配置名字 */
  ConfigName: string;
  /** 配置ID */
  UconfigId: string;
  /** 配置内容 */
  ConfigContent: string;
}

declare interface ModifyCustomizedConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainAttributesRequest {
  /** 负载均衡实例ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口查询。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  ListenerId: string;
  /** 域名（必须是已经创建的转发规则下的域名），如果是多域名，可以指定多域名列表中的任意一个，可以通过[DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  Domain: string;
  /** 要修改的新域名。NewDomain和NewDomains只能传一个。 */
  NewDomain?: string;
  /** 域名相关的证书信息，注意，仅对启用SNI的监听器适用，不可和MultiCertInfo 同时传入。 */
  Certificate?: CertificateInput;
  /** 是否开启HTTP2，注意，只有HTTPS域名才能开启HTTP2。True: 开启HTTP2，Fasle: 不开启HTTP2。 */
  Http2?: boolean;
  /** 是否设为默认域名，注意，一个监听器下只能设置一个默认域名。True: 设为默认域名，Fasle: 不设置为默认域名。 */
  DefaultServer?: boolean;
  /** 是否开启 QUIC，注意，只有 HTTPS 域名才能开启 QUIC。True: 开启 QUIC，False: 不开启QUIC。 */
  Quic?: boolean;
  /** 监听器下必须配置一个默认域名，若要关闭原默认域名，必须同时指定另一个域名作为新的默认域名，如果新的默认域名是多域名，可以指定多域名列表中的任意一个。 */
  NewDefaultServerDomain?: string;
  /** 要修改的新域名列表。NewDomain和NewDomains只能传一个。 */
  NewDomains?: string[];
  /** 域名相关的证书信息，注意，仅对启用SNI的监听器适用；支持同时传入多本算法类型不同的服务器证书，不可和Certificate 同时传入。 */
  MultiCertInfo?: MultiCertInfo;
}

declare interface ModifyDomainAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口查询。 */
  LoadBalancerId: string;
  /** 负载均衡监听器 ID， 可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  ListenerId: string;
  /** 监听器下的某个旧域名， 可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 查询。 */
  Domain: string;
  /** 新域名，	长度限制为：1-120。有三种使用格式：非正则表达式格式，通配符格式，正则表达式格式。非正则表达式格式只能使用字母、数字、‘-’、‘.’。通配符格式的使用 ‘*’ 只能在开头或者结尾。正则表达式以'~'开头。 */
  NewDomain: string;
}

declare interface ModifyDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFunctionTargetsRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID。 */
  ListenerId: string;
  /** 要修改的后端云函数服务列表，仅支持 Event 函数类型。 */
  FunctionTargets: FunctionTarget[];
  /** 转发规则的ID，当绑定机器到七层转发规则时，必须提供此参数或Domain+Url两者之一。 */
  LocationId?: string;
  /** 目标规则的域名，提供LocationId参数时本参数不生效。 */
  Domain?: string;
  /** 目标规则的URL，提供LocationId参数时本参数不生效。 */
  Url?: string;
}

declare interface ModifyFunctionTargetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyListenerRequest {
  /** 负载均衡实例ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口查询。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口查询。 */
  ListenerId: string;
  /** 新的监听器名称，最大长度255。 */
  ListenerName?: string;
  /** 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。 */
  SessionExpireTime?: number;
  /** 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL/QUIC监听器。 */
  HealthCheck?: HealthCheck;
  /** 证书相关信息，此参数仅适用于HTTPS/TCP_SSL/QUIC监听器；此参数和MultiCertInfo不能同时传入。 */
  Certificate?: CertificateInput;
  /** 监听器转发的方式。可选值：WRR（按权重轮询）、LEAST_CONN（按最小连接数）、IP_HASH（按 IP 地址哈希）分别表示按权重轮询、最小连接数， 默认为 WRR。使用场景：适用于TCP/UDP/TCP_SSL/QUIC监听器。七层监听器的均衡方式应在转发规则中修改。 */
  Scheduler?: string;
  /** 是否开启SNI特性，此参数仅适用于HTTPS监听器。默认0，表示不开启，1表示开启。注意：未开启SNI的监听器可以开启SNI；已开启SNI的监听器不能关闭SNI。 */
  SniSwitch?: number;
  /** 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组。 */
  TargetType?: string;
  /** 是否开启长连接，此参数仅适用于HTTP/HTTPS监听器。默认值0表示不开启，1表示开启。若后端服务对连接数上限有限制，则建议谨慎开启。此功能目前处于内测中，如需使用，请提交 [内测申请](https://cloud.tencent.com/apply/p/tsodp6qm21)。 */
  KeepaliveEnable?: number;
  /** 解绑后端目标时，是否发RST给客户端，此参数仅适用于TCP监听器。True表示发送 RST 给客户端，False表示不发送 RST 给客户端。不传则表示不修改。 */
  DeregisterTargetRst?: boolean;
  /** 会话保持类型。NORMAL表示默认会话保持类型。QUIC_CID表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。使用场景：适用于TCP/UDP/TCP_SSL/QUIC监听器。默认为 NORMAL。 */
  SessionType?: string;
  /** 证书信息，支持同时传入不同算法类型的多本服务端证书；此参数仅适用于未开启SNI特性的HTTPS监听器。此参数和Certificate不能同时传入。 */
  MultiCertInfo?: MultiCertInfo;
  /** 监听器粒度并发连接数上限，当前仅性能容量型实例且仅TCP/UDP/TCP_SSL/QUIC监听器支持。取值范围：1-实例规格并发连接上限，其中-1表示关闭监听器粒度并发连接数限速。基础网络实例不支持该参数。默认为 -1，表示不限速。 */
  MaxConn?: number;
  /** 监听器粒度新建连接数上限，当前仅性能容量型实例且仅TCP/UDP/TCP_SSL/QUIC监听器支持。取值范围：1-实例规格新建连接上限，其中-1表示关闭监听器粒度新建连接数限速。基础网络实例不支持该参数。默认为 -1 表示不限速。 */
  MaxCps?: number;
  /** 空闲连接超时时间，此参数仅适用于TCP监听器，单位：秒。默认值：900，取值范围：共享型实例和独占型实例支持：300～900，性能容量型实例支持：300~1980。如需设置超过2000s，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category),最大可设置到3600s。 */
  IdleConnectTimeout?: number;
  /** TCP_SSL和QUIC是否支持PP */
  ProxyProtocol?: boolean;
  /** 是否开启SNAT， True 表示开启 SNAT，False 表示不开启 SNAT。不传则表示不修改。 */
  SnatEnable?: boolean;
  /** 数据压缩模式 */
  DataCompressMode?: string;
}

declare interface ModifyListenerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerAttributesRequest {
  /** 负载均衡的唯一ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口获取。 */
  LoadBalancerId: string;
  /** 负载均衡实例名称，规则：1-60 个英文、汉字、数字、连接线“-”或下划线“_”。 */
  LoadBalancerName?: string;
  /** 设置负载均衡跨地域绑定1.0的后端服务信息 */
  TargetRegionInfo?: TargetRegionInfo;
  /** 网络计费相关参数 */
  InternetChargeInfo?: InternetAccessible;
  /** Target是否放通来自CLB的流量。开启放通（true）：只验证CLB上的安全组；不开启放通（false）：需同时验证CLB和后端实例上的安全组。不填则不修改。 */
  LoadBalancerPassToTarget?: boolean;
  /** 是否开启跨地域绑定2.0功能。不填则不修改。 */
  SnatPro?: boolean;
  /** 是否开启删除保护，不填则不修改。 */
  DeleteProtect?: boolean;
  /** 将负载均衡二级域名由mycloud.com改为tencentclb.com，子域名也会变换，修改后mycloud.com域名将失效。不填则不修改。 */
  ModifyClassicDomain?: boolean;
}

declare interface ModifyLoadBalancerAttributesResponse {
  /** 切换负载均衡计费方式时，可用此参数查询切换任务是否成功。 */
  DealName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerMixIpTargetRequest {
  /** 负载均衡实例ID数组，默认支持20个负载均衡实例ID。可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerIds: string[];
  /** 开启/关闭IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标特性。 */
  MixIpTarget: boolean;
}

declare interface ModifyLoadBalancerMixIpTargetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerSlaRequest {
  /** 负载均衡实例信息。 */
  LoadBalancerSla: SlaUpdateParam[];
  /** 是否强制升级，默认否。 */
  Force?: boolean;
}

declare interface ModifyLoadBalancerSlaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancersProjectRequest {
  /** 一个或多个待操作的负载均衡实例ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。列表支持最大长度为20。 */
  LoadBalancerIds: string[];
  /** 项目ID。可以通过 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 接口获取。 */
  ProjectId: number;
}

declare interface ModifyLoadBalancersProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/214/30685) 接口获取。 */
  LoadBalancerId: string;
  /** 负载均衡监听器 ID，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口获取。 */
  ListenerId: string;
  /** 要修改的转发规则的 ID， 可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口获取。 */
  LocationId: string;
  /** 转发规则的新的转发路径，如不需修改Url，则不需提供此参数。 */
  Url?: string;
  /** 健康检查信息。 */
  HealthCheck?: HealthCheck;
  /** 规则的请求转发方式，可选值：WRR、LEAST_CONN、IP_HASH分别表示按权重轮询、最小连接数、按IP哈希， 默认为 WRR。 */
  Scheduler?: string;
  /** 会话保持时间。取值范围0或30-86400（单位：秒）。默认为0。 */
  SessionExpireTime?: number;
  /** 负载均衡实例与后端服务之间的转发协议，默认HTTP，可取值：HTTP、HTTPS、GRPC。仅HTTPS监听器该参数有效。 */
  ForwardType?: string;
  /** TRPC被调服务器路由，ForwardType为TRPC时必填。目前暂未对外开放。 */
  TrpcCallee?: string;
  /** TRPC调用服务接口，ForwardType为TRPC时必填。目前暂未对外开放。 */
  TrpcFunc?: string;
  /** OAuth配置信息。 */
  OAuth?: OAuth;
}

declare interface ModifyRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetGroupAttributeRequest {
  /** 目标组的ID。 */
  TargetGroupId: string;
  /** 目标组的新名称。 */
  TargetGroupName?: string;
  /** 目标组的新默认端口。全监听目标组不支持此参数。 */
  Port?: number;
  /** 后端服务默认权重。 取值范围[0, 100] 设置该值后，添加后端服务到目标组时， 若后端服务不单独设置权重， 则使用这里的默认权重。 v1目标组类型不支持设置Weight参数。 */
  Weight?: number;
  /** 是否开启长连接，此参数仅适用于HTTP/HTTPS目标组，true:关闭；false:开启， 默认关闭。 */
  KeepaliveEnable?: boolean;
  /** 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。TCP/UDP目标组不支持该参数。 */
  SessionExpireTime?: number;
}

declare interface ModifyTargetGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetGroupInstancesPortRequest {
  /** 目标组ID。 */
  TargetGroupId: string;
  /** 待修改端口的服务器数组，在这个接口 NewPort 和 Port 为必填项。 */
  TargetGroupInstances: TargetGroupInstance[];
}

declare interface ModifyTargetGroupInstancesPortResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetGroupInstancesWeightRequest {
  /** 目标组ID。 */
  TargetGroupId: string;
  /** 待修改权重的服务器数组，在这个接口 Port 为必填项。 */
  TargetGroupInstances: TargetGroupInstance[];
}

declare interface ModifyTargetGroupInstancesWeightResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetPortRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID。 */
  ListenerId: string;
  /** 要修改端口的后端服务列表。 */
  Targets: Target[];
  /** 后端服务绑定到监听器或转发规则的新端口。 */
  NewPort: number;
  /** 转发规则的ID，当后端服务绑定到七层转发规则时，必须提供此参数或Domain+Url两者之一。 */
  LocationId?: string;
  /** 目标规则的域名，提供LocationId参数时本参数不生效。 */
  Domain?: string;
  /** 目标规则的URL，提供LocationId参数时本参数不生效。 */
  Url?: string;
}

declare interface ModifyTargetPortResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetWeightRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID。 */
  ListenerId: string;
  /** 要修改权重的后端服务列表。 */
  Targets: Target[];
  /** 转发规则的ID，当绑定机器到七层转发规则时，必须提供此参数或Domain+Url两者之一。 */
  LocationId?: string;
  /** 目标规则的域名，提供LocationId参数时本参数不生效。 */
  Domain?: string;
  /** 目标规则的URL，提供LocationId参数时本参数不生效。 */
  Url?: string;
  /** 后端服务新的转发权重，取值范围：0~100，默认值10。如果设置了 Targets.Weight 参数，则此参数不生效。 */
  Weight?: number;
}

declare interface ModifyTargetWeightResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterFunctionTargetsRequest {
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器 ID。 */
  ListenerId: string;
  /** 待绑定的云函数列表。 */
  FunctionTargets: FunctionTarget[];
  /** 目标转发规则的 ID，当将云函数绑定到七层转发规则时，必须输入此参数或 Domain+Url 参数。 */
  LocationId?: string;
  /** 目标转发规则的域名，若已经输入 LocationId 参数，则本参数不生效。 */
  Domain?: string;
  /** 目标转发规则的 URL，若已经输入 LocationId 参数，则本参数不生效。 */
  Url?: string;
}

declare interface RegisterFunctionTargetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterTargetGroupInstancesRequest {
  /** 目标组ID */
  TargetGroupId: string;
  /** 服务器实例数组，服务器和目标组的 VPC 需相同。 */
  TargetGroupInstances: TargetGroupInstance[];
}

declare interface RegisterTargetGroupInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterTargetsRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 负载均衡监听器ID。 */
  ListenerId: string;
  /** 待绑定的后端服务列表，数组长度最大支持20。 */
  Targets: Target[];
  /** 转发规则的ID，可以通过 [DescribeListeners](https://cloud.tencent.com/document/product/214/30686) 接口获取，当绑定后端服务到七层转发规则时，必须提供此参数或Domain+Url两者之一。 */
  LocationId?: string;
  /** 目标转发规则的域名，提供LocationId参数时本参数不生效。 */
  Domain?: string;
  /** 目标转发规则的URL，提供LocationId参数时本参数不生效。 */
  Url?: string;
}

declare interface RegisterTargetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterTargetsWithClassicalLBRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 后端服务信息。 */
  Targets: ClassicalTargetInfo[];
}

declare interface RegisterTargetsWithClassicalLBResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceCertForLoadBalancersRequest {
  /** 需要被替换的证书的ID，可以是服务端证书或客户端证书 */
  OldCertificateId: string;
  /** 新证书的内容等相关信息 */
  Certificate: CertificateInput;
}

declare interface ReplaceCertForLoadBalancersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetCustomizedConfigForLoadBalancerRequest {
  /** 操作类型。- ADD：创建- DELETE：删除- UPDATE：修改- BIND：绑定- UNBIND：解绑 */
  OperationType: string;
  /** 个性化配置ID。除了创建个性化配置外，必传此字段，如：pz-1234abcd */
  UconfigId?: string;
  /** 个性化配置内容。创建个性化配置或修改个性化配置的内容时，必传此字段。具体限制查看 [七层个性化配置](https://cloud.tencent.com/document/product/214/15171) */
  ConfigContent?: string;
  /** 个性化配置名称。创建个性化配置或修改个性化配置的名字时，必传此字段。 */
  ConfigName?: string;
  /** 负载均衡实例ID。绑定解绑时，必传此字段。可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerIds?: string[];
}

declare interface SetCustomizedConfigForLoadBalancerResponse {
  /** 个性化配置ID，如：pz-1234abcd */
  ConfigId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLoadBalancerClsLogRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerId: string;
  /** 日志服务(CLS)的日志集 ID。增加和更新日志主题时可调用 [DescribeLogsets](https://cloud.tencent.com/document/product/614/58624) 接口获取日志集 ID。删除日志主题时，此参数填写为**空字符串**即可。 */
  LogSetId: string;
  /** 日志服务(CLS)的日志主题 ID。增加和更新日志主题时可调用 [DescribeTopics](https://cloud.tencent.com/document/product/614/56454) 接口获取日志主题 ID。删除日志主题时，此参数填写为**空字符串**即可。 */
  LogTopicId: string;
  /** 日志类型：ACCESS：访问日志HEALTH：健康检查日志默认为ACCESS。 */
  LogType?: string;
}

declare interface SetLoadBalancerClsLogResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLoadBalancerSecurityGroupsRequest {
  /** 负载均衡实例 ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerId: string;
  /** 安全组ID构成的数组，一个负载均衡实例最多可绑定50个安全组，如果要解绑所有安全组，可不传此参数。可以通过 [DescribeSecurityGroups](https://cloud.tencent.com/document/product/215/15808) 接口查询。 */
  SecurityGroups?: string[];
}

declare interface SetLoadBalancerSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLoadBalancerStartStatusRequest {
  /** 操作类型。Start：启动实例，Stop：停止实例。 */
  OperationType: string;
  /** 负载均衡实例ID，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。 */
  LoadBalancerId: string;
  /** 监听器ID。如果该字段为空，则表示操作负载均衡实例，如果不为空，则表示操作监听器。 */
  ListenerIds?: string[];
}

declare interface SetLoadBalancerStartStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetSecurityGroupForLoadbalancersRequest {
  /** 安全组ID，如 sg-12345678。可以通过 [DescribeSecurityGroups](https://cloud.tencent.com/document/product/215/15808) 接口获取。 */
  SecurityGroup: string;
  /** ADD 绑定安全组；DEL 解绑安全组 */
  OperationType: string;
  /** 负载均衡实例ID数组，可以通过 [DescribeLoadBalancers](https://cloud.tencent.com/document/product/1108/48459) 接口查询。列表支持的最大长度为20。 */
  LoadBalancerIds: string[];
}

declare interface SetSecurityGroupForLoadbalancersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Clb 负载均衡} */
declare interface Clb {
  (): Versions;
  /** 新增个性化配置 {@link AddCustomizedConfigRequest} {@link AddCustomizedConfigResponse} */
  AddCustomizedConfig(data: AddCustomizedConfigRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomizedConfigResponse>;
  /** 关联个性化配置 {@link AssociateCustomizedConfigRequest} {@link AssociateCustomizedConfigResponse} */
  AssociateCustomizedConfig(data: AssociateCustomizedConfigRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateCustomizedConfigResponse>;
  /** 规则关联目标组 {@link AssociateTargetGroupsRequest} {@link AssociateTargetGroupsResponse} */
  AssociateTargetGroups(data: AssociateTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateTargetGroupsResponse>;
  /** 自动生成负载均衡转发规则的重定向关系 {@link AutoRewriteRequest} {@link AutoRewriteResponse} */
  AutoRewrite(data: AutoRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<AutoRewriteResponse>;
  /** 批量解绑四七层后端服务 {@link BatchDeregisterTargetsRequest} {@link BatchDeregisterTargetsResponse} */
  BatchDeregisterTargets(data: BatchDeregisterTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeregisterTargetsResponse>;
  /** 批量修改监听器绑定的后端机器的标签 {@link BatchModifyTargetTagRequest} {@link BatchModifyTargetTagResponse} */
  BatchModifyTargetTag(data: BatchModifyTargetTagRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyTargetTagResponse>;
  /** 批量修改监听器绑定的后端机器的转发权重 {@link BatchModifyTargetWeightRequest} {@link BatchModifyTargetWeightResponse} */
  BatchModifyTargetWeight(data: BatchModifyTargetWeightRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyTargetWeightResponse>;
  /** 批量绑定虚拟主机或弹性网卡 {@link BatchRegisterTargetsRequest} {@link BatchRegisterTargetsResponse} */
  BatchRegisterTargets(data: BatchRegisterTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRegisterTargetsResponse>;
  /** 克隆负载均衡实例 {@link CloneLoadBalancerRequest} {@link CloneLoadBalancerResponse} */
  CloneLoadBalancer(data: CloneLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<CloneLoadBalancerResponse>;
  /** 创建CLB专有日志集 {@link CreateClsLogSetRequest} {@link CreateClsLogSetResponse} */
  CreateClsLogSet(data?: CreateClsLogSetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClsLogSetResponse>;
  /** 创建负载均衡监听器 {@link CreateListenerRequest} {@link CreateListenerResponse} */
  CreateListener(data: CreateListenerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateListenerResponse>;
  /** 购买负载均衡实例 {@link CreateLoadBalancerRequest} {@link CreateLoadBalancerResponse} */
  CreateLoadBalancer(data: CreateLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoadBalancerResponse>;
  /** 添加SnatIp {@link CreateLoadBalancerSnatIpsRequest} {@link CreateLoadBalancerSnatIpsResponse} */
  CreateLoadBalancerSnatIps(data: CreateLoadBalancerSnatIpsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoadBalancerSnatIpsResponse>;
  /** 创建负载均衡七层监听器转发规则 {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建目标组 {@link CreateTargetGroupRequest} {@link CreateTargetGroupResponse} */
  CreateTargetGroup(data?: CreateTargetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTargetGroupResponse>;
  /** 创建主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 删除个性化配置 {@link DeleteCustomizedConfigRequest} {@link DeleteCustomizedConfigResponse} */
  DeleteCustomizedConfig(data: DeleteCustomizedConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomizedConfigResponse>;
  /** 删除负载均衡监听器 {@link DeleteListenerRequest} {@link DeleteListenerResponse} */
  DeleteListener(data: DeleteListenerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenerResponse>;
  /** 删除负载均衡实例 {@link DeleteLoadBalancerRequest} {@link DeleteLoadBalancerResponse} */
  DeleteLoadBalancer(data: DeleteLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancerResponse>;
  /** 删除负载均衡多个监听器 {@link DeleteLoadBalancerListenersRequest} {@link DeleteLoadBalancerListenersResponse} */
  DeleteLoadBalancerListeners(data: DeleteLoadBalancerListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancerListenersResponse>;
  /** 删除SnatIp {@link DeleteLoadBalancerSnatIpsRequest} {@link DeleteLoadBalancerSnatIpsResponse} */
  DeleteLoadBalancerSnatIps(data: DeleteLoadBalancerSnatIpsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancerSnatIpsResponse>;
  /** 删除负载均衡转发规则之间的重定向关系 {@link DeleteRewriteRequest} {@link DeleteRewriteResponse} */
  DeleteRewrite(data: DeleteRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRewriteResponse>;
  /** 删除负载均衡七层监听器的转发规则 {@link DeleteRuleRequest} {@link DeleteRuleResponse} */
  DeleteRule(data: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 删除目标组 {@link DeleteTargetGroupsRequest} {@link DeleteTargetGroupsResponse} */
  DeleteTargetGroups(data: DeleteTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTargetGroupsResponse>;
  /** 将云函数从转发规则上解绑 {@link DeregisterFunctionTargetsRequest} {@link DeregisterFunctionTargetsResponse} */
  DeregisterFunctionTargets(data: DeregisterFunctionTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DeregisterFunctionTargetsResponse>;
  /** 解绑目标组服务器 {@link DeregisterTargetGroupInstancesRequest} {@link DeregisterTargetGroupInstancesResponse} */
  DeregisterTargetGroupInstances(data: DeregisterTargetGroupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeregisterTargetGroupInstancesResponse>;
  /** 从负载均衡监听器上解绑后端服务 {@link DeregisterTargetsRequest} {@link DeregisterTargetsResponse} */
  DeregisterTargets(data: DeregisterTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DeregisterTargetsResponse>;
  /** 解绑传统型负载均衡的后端服务器 {@link DeregisterTargetsFromClassicalLBRequest} {@link DeregisterTargetsFromClassicalLBResponse} */
  DeregisterTargetsFromClassicalLB(data: DeregisterTargetsFromClassicalLBRequest, config?: AxiosRequestConfig): AxiosPromise<DeregisterTargetsFromClassicalLBResponse>;
  /** 查询一个负载均衡所封禁的IP列表（黑名单） {@link DescribeBlockIPListRequest} {@link DescribeBlockIPListResponse} */
  DescribeBlockIPList(data: DescribeBlockIPListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlockIPListResponse>;
  /** 查询封禁IP（黑名单）异步任务的执行状态 {@link DescribeBlockIPTaskRequest} {@link DescribeBlockIPTaskResponse} */
  DescribeBlockIPTask(data: DescribeBlockIPTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlockIPTaskResponse>;
  /** 通过后端主机反向查找其绑定的传统型负载均衡 {@link DescribeClassicalLBByInstanceIdRequest} {@link DescribeClassicalLBByInstanceIdResponse} */
  DescribeClassicalLBByInstanceId(data: DescribeClassicalLBByInstanceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassicalLBByInstanceIdResponse>;
  /** 获取传统型负载均衡后端的健康状态 {@link DescribeClassicalLBHealthStatusRequest} {@link DescribeClassicalLBHealthStatusResponse} */
  DescribeClassicalLBHealthStatus(data: DescribeClassicalLBHealthStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassicalLBHealthStatusResponse>;
  /** 获取传统型负载均衡监听器列表 {@link DescribeClassicalLBListenersRequest} {@link DescribeClassicalLBListenersResponse} */
  DescribeClassicalLBListeners(data: DescribeClassicalLBListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassicalLBListenersResponse>;
  /** 获取传统型负载均衡绑定的后端服务器列表 {@link DescribeClassicalLBTargetsRequest} {@link DescribeClassicalLBTargetsResponse} */
  DescribeClassicalLBTargets(data: DescribeClassicalLBTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassicalLBTargetsResponse>;
  /** 获取用户的CLB专有日志集 {@link DescribeClsLogSetRequest} {@link DescribeClsLogSetResponse} */
  DescribeClsLogSet(data?: DescribeClsLogSetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClsLogSetResponse>;
  /** 查询集群中资源列表 {@link DescribeClusterResourcesRequest} {@link DescribeClusterResourcesResponse} */
  DescribeClusterResources(data?: DescribeClusterResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterResourcesResponse>;
  /** 查询跨域2.0版本云联网后端子机和网卡信息 {@link DescribeCrossTargetsRequest} {@link DescribeCrossTargetsResponse} */
  DescribeCrossTargets(data?: DescribeCrossTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossTargetsResponse>;
  /** 拉取配置绑定的server或location {@link DescribeCustomizedConfigAssociateListRequest} {@link DescribeCustomizedConfigAssociateListResponse} */
  DescribeCustomizedConfigAssociateList(data?: DescribeCustomizedConfigAssociateListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomizedConfigAssociateListResponse>;
  /** 拉取配置列表 {@link DescribeCustomizedConfigListRequest} {@link DescribeCustomizedConfigListResponse} */
  DescribeCustomizedConfigList(data: DescribeCustomizedConfigListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomizedConfigListResponse>;
  /** 查询集群列表 {@link DescribeExclusiveClustersRequest} {@link DescribeExclusiveClustersResponse} */
  DescribeExclusiveClusters(data?: DescribeExclusiveClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExclusiveClustersResponse>;
  /** 查询负载均衡闲置实例 {@link DescribeIdleLoadBalancersRequest} {@link DescribeIdleLoadBalancersResponse} */
  DescribeIdleLoadBalancers(data?: DescribeIdleLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIdleLoadBalancersResponse>;
  /** 查询后端云主机或弹性网卡绑定的负载均衡 {@link DescribeLBListenersRequest} {@link DescribeLBListenersResponse} */
  DescribeLBListeners(data: DescribeLBListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLBListenersResponse>;
  /** 查询负载均衡操作保护 {@link DescribeLBOperateProtectRequest} {@link DescribeLBOperateProtectResponse} */
  DescribeLBOperateProtect(data: DescribeLBOperateProtectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLBOperateProtectResponse>;
  /** 查询负载均衡的监听器列表 {@link DescribeListenersRequest} {@link DescribeListenersResponse} */
  DescribeListeners(data: DescribeListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenersResponse>;
  /** 根据证书ID查询负载均衡 {@link DescribeLoadBalancerListByCertIdRequest} {@link DescribeLoadBalancerListByCertIdResponse} */
  DescribeLoadBalancerListByCertId(data: DescribeLoadBalancerListByCertIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancerListByCertIdResponse>;
  /** 查询负载均衡状态统计数据 {@link DescribeLoadBalancerOverviewRequest} {@link DescribeLoadBalancerOverviewResponse} */
  DescribeLoadBalancerOverview(data?: DescribeLoadBalancerOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancerOverviewResponse>;
  /** 查询账号下高流量负载均衡 {@link DescribeLoadBalancerTrafficRequest} {@link DescribeLoadBalancerTrafficResponse} */
  DescribeLoadBalancerTraffic(data?: DescribeLoadBalancerTrafficRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancerTrafficResponse>;
  /** 查询负载均衡实例列表 {@link DescribeLoadBalancersRequest} {@link DescribeLoadBalancersResponse} */
  DescribeLoadBalancers(data?: DescribeLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancersResponse>;
  /** 查询负载均衡详细信息 {@link DescribeLoadBalancersDetailRequest} {@link DescribeLoadBalancersDetailResponse} */
  DescribeLoadBalancersDetail(data?: DescribeLoadBalancersDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancersDetailResponse>;
  /** 查询配额 {@link DescribeQuotaRequest} {@link DescribeQuotaResponse} */
  DescribeQuota(data?: DescribeQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuotaResponse>;
  /** 查询用户在当前地域支持可用区列表和资源列表 {@link DescribeResourcesRequest} {@link DescribeResourcesResponse} */
  DescribeResources(data?: DescribeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesResponse>;
  /** 查询负载均衡转发规则的重定向关系 {@link DescribeRewriteRequest} {@link DescribeRewriteResponse} */
  DescribeRewrite(data: DescribeRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRewriteResponse>;
  /** 获取目标组绑定的服务器 {@link DescribeTargetGroupInstancesRequest} {@link DescribeTargetGroupInstancesResponse} */
  DescribeTargetGroupInstances(data: DescribeTargetGroupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupInstancesResponse>;
  /** 获取目标组列表 {@link DescribeTargetGroupListRequest} {@link DescribeTargetGroupListResponse} */
  DescribeTargetGroupList(data?: DescribeTargetGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupListResponse>;
  /** 查询目标组信息 {@link DescribeTargetGroupsRequest} {@link DescribeTargetGroupsResponse} */
  DescribeTargetGroups(data?: DescribeTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupsResponse>;
  /** 获取负载均衡后端服务的健康检查状态 {@link DescribeTargetHealthRequest} {@link DescribeTargetHealthResponse} */
  DescribeTargetHealth(data: DescribeTargetHealthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetHealthResponse>;
  /** 查询负载均衡绑定的后端服务列表 {@link DescribeTargetsRequest} {@link DescribeTargetsResponse} */
  DescribeTargets(data: DescribeTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetsResponse>;
  /** 查询异步任务状态 {@link DescribeTaskStatusRequest} {@link DescribeTaskStatusResponse} */
  DescribeTaskStatus(data?: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 去关联个性化配置 {@link DisassociateCustomizedConfigRequest} {@link DisassociateCustomizedConfigResponse} */
  DisassociateCustomizedConfig(data: DisassociateCustomizedConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateCustomizedConfigResponse>;
  /** 解除规则的目标组关联关系 {@link DisassociateTargetGroupsRequest} {@link DisassociateTargetGroupsResponse} */
  DisassociateTargetGroups(data: DisassociateTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateTargetGroupsResponse>;
  /** 创建负载均衡实例询价 {@link InquiryPriceCreateLoadBalancerRequest} {@link InquiryPriceCreateLoadBalancerResponse} */
  InquiryPriceCreateLoadBalancer(data: InquiryPriceCreateLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateLoadBalancerResponse>;
  /** 修改负载均衡配置询价 {@link InquiryPriceModifyLoadBalancerRequest} {@link InquiryPriceModifyLoadBalancerResponse} */
  InquiryPriceModifyLoadBalancer(data: InquiryPriceModifyLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceModifyLoadBalancerResponse>;
  /** 退还负载均衡实例询价 {@link InquiryPriceRefundLoadBalancerRequest} {@link InquiryPriceRefundLoadBalancerResponse} */
  InquiryPriceRefundLoadBalancer(data: InquiryPriceRefundLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRefundLoadBalancerResponse>;
  /** 续费预付费负载均衡实例询价 {@link InquiryPriceRenewLoadBalancerRequest} {@link InquiryPriceRenewLoadBalancerResponse} */
  InquiryPriceRenewLoadBalancer(data: InquiryPriceRenewLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewLoadBalancerResponse>;
  /** 手动添加负载均衡转发规则的重定向关系 {@link ManualRewriteRequest} {@link ManualRewriteResponse} */
  ManualRewrite(data: ManualRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<ManualRewriteResponse>;
  /** 传统型负载均衡迁移成(原应用型)负载均衡 {@link MigrateClassicalLoadBalancersRequest} {@link MigrateClassicalLoadBalancersResponse} */
  MigrateClassicalLoadBalancers(data: MigrateClassicalLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<MigrateClassicalLoadBalancersResponse>;
  /** 修改负载均衡的IP封禁黑名单列表 {@link ModifyBlockIPListRequest} {@link ModifyBlockIPListResponse} */
  ModifyBlockIPList(data: ModifyBlockIPListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBlockIPListResponse>;
  /** 修改个性化配置 {@link ModifyCustomizedConfigRequest} {@link ModifyCustomizedConfigResponse} */
  ModifyCustomizedConfig(data: ModifyCustomizedConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizedConfigResponse>;
  /** 修改七层转发规则的域名 {@link ModifyDomainRequest} {@link ModifyDomainResponse} */
  ModifyDomain(data: ModifyDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainResponse>;
  /** 修改负载均衡七层监听器转发规则的域名级别属性 {@link ModifyDomainAttributesRequest} {@link ModifyDomainAttributesResponse} */
  ModifyDomainAttributes(data: ModifyDomainAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainAttributesResponse>;
  /** 修改转发规则绑定的云函数 {@link ModifyFunctionTargetsRequest} {@link ModifyFunctionTargetsResponse} */
  ModifyFunctionTargets(data: ModifyFunctionTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFunctionTargetsResponse>;
  /** 修改负载均衡监听器属性 {@link ModifyListenerRequest} {@link ModifyListenerResponse} */
  ModifyListener(data: ModifyListenerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyListenerResponse>;
  /** 修改负载均衡实例的属性 {@link ModifyLoadBalancerAttributesRequest} {@link ModifyLoadBalancerAttributesResponse} */
  ModifyLoadBalancerAttributes(data: ModifyLoadBalancerAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerAttributesResponse>;
  /** 修改IPv6负载均衡7层监听器支持混绑目标特性 {@link ModifyLoadBalancerMixIpTargetRequest} {@link ModifyLoadBalancerMixIpTargetResponse} */
  ModifyLoadBalancerMixIpTarget(data: ModifyLoadBalancerMixIpTargetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerMixIpTargetResponse>;
  /** 调整实例的性能容量型规格 {@link ModifyLoadBalancerSlaRequest} {@link ModifyLoadBalancerSlaResponse} */
  ModifyLoadBalancerSla(data: ModifyLoadBalancerSlaRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerSlaResponse>;
  /** 修改负载均衡所属项目 {@link ModifyLoadBalancersProjectRequest} {@link ModifyLoadBalancersProjectResponse} */
  ModifyLoadBalancersProject(data: ModifyLoadBalancersProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancersProjectResponse>;
  /** 修改负载均衡七层监听器的转发规则 {@link ModifyRuleRequest} {@link ModifyRuleResponse} */
  ModifyRule(data: ModifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleResponse>;
  /** 修改目标组属性 {@link ModifyTargetGroupAttributeRequest} {@link ModifyTargetGroupAttributeResponse} */
  ModifyTargetGroupAttribute(data: ModifyTargetGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetGroupAttributeResponse>;
  /** 批量修改目标组服务器端口 {@link ModifyTargetGroupInstancesPortRequest} {@link ModifyTargetGroupInstancesPortResponse} */
  ModifyTargetGroupInstancesPort(data: ModifyTargetGroupInstancesPortRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetGroupInstancesPortResponse>;
  /** 批量修改目标组的服务器权重 {@link ModifyTargetGroupInstancesWeightRequest} {@link ModifyTargetGroupInstancesWeightResponse} */
  ModifyTargetGroupInstancesWeight(data: ModifyTargetGroupInstancesWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetGroupInstancesWeightResponse>;
  /** 修改监听器绑定的后端机器的端口 {@link ModifyTargetPortRequest} {@link ModifyTargetPortResponse} */
  ModifyTargetPort(data: ModifyTargetPortRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetPortResponse>;
  /** 修改监听器绑定的后端机器的转发权重 {@link ModifyTargetWeightRequest} {@link ModifyTargetWeightResponse} */
  ModifyTargetWeight(data: ModifyTargetWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetWeightResponse>;
  /** 绑定云函数到转发规则上 {@link RegisterFunctionTargetsRequest} {@link RegisterFunctionTargetsResponse} */
  RegisterFunctionTargets(data: RegisterFunctionTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterFunctionTargetsResponse>;
  /** 注册服务器到目标组 {@link RegisterTargetGroupInstancesRequest} {@link RegisterTargetGroupInstancesResponse} */
  RegisterTargetGroupInstances(data: RegisterTargetGroupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterTargetGroupInstancesResponse>;
  /** 绑定后端机器到监听器上 {@link RegisterTargetsRequest} {@link RegisterTargetsResponse} */
  RegisterTargets(data: RegisterTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterTargetsResponse>;
  /** 绑定后端服务到传统型负载均衡 {@link RegisterTargetsWithClassicalLBRequest} {@link RegisterTargetsWithClassicalLBResponse} */
  RegisterTargetsWithClassicalLB(data: RegisterTargetsWithClassicalLBRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterTargetsWithClassicalLBResponse>;
  /** 替换负载均衡实例所关联的证书 {@link ReplaceCertForLoadBalancersRequest} {@link ReplaceCertForLoadBalancersResponse} */
  ReplaceCertForLoadBalancers(data: ReplaceCertForLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceCertForLoadBalancersResponse>;
  /** 负载均衡维度的个性化配置相关操作 {@link SetCustomizedConfigForLoadBalancerRequest} {@link SetCustomizedConfigForLoadBalancerResponse} */
  SetCustomizedConfigForLoadBalancer(data: SetCustomizedConfigForLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<SetCustomizedConfigForLoadBalancerResponse>;
  /** 设置负载均衡的日志服务主题 {@link SetLoadBalancerClsLogRequest} {@link SetLoadBalancerClsLogResponse} */
  SetLoadBalancerClsLog(data: SetLoadBalancerClsLogRequest, config?: AxiosRequestConfig): AxiosPromise<SetLoadBalancerClsLogResponse>;
  /** 设置负载均衡实例的安全组 {@link SetLoadBalancerSecurityGroupsRequest} {@link SetLoadBalancerSecurityGroupsResponse} */
  SetLoadBalancerSecurityGroups(data: SetLoadBalancerSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<SetLoadBalancerSecurityGroupsResponse>;
  /** 启停负载均衡实例或者监听器 {@link SetLoadBalancerStartStatusRequest} {@link SetLoadBalancerStartStatusResponse} */
  SetLoadBalancerStartStatus(data: SetLoadBalancerStartStatusRequest, config?: AxiosRequestConfig): AxiosPromise<SetLoadBalancerStartStatusResponse>;
  /** 绑定或解绑一个安全组到多个负载均衡实例 {@link SetSecurityGroupForLoadbalancersRequest} {@link SetSecurityGroupForLoadbalancersResponse} */
  SetSecurityGroupForLoadbalancers(data: SetSecurityGroupForLoadbalancersRequest, config?: AxiosRequestConfig): AxiosPromise<SetSecurityGroupForLoadbalancersResponse>;
}

export declare type Versions = ["2018-03-17"];

export default Clb;
