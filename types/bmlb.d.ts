/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 待与四层监听器绑定的物理机主机、虚拟机或半托管主机信息。目前一个四层监听器下面最多允许绑定255个主机端口。 */
declare interface BindL4Backend {
  /** 待绑定的主机端口，可选值1~65535。 */
  Port: number;
  /** 待绑定的黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId: string;
  /** 待绑定的主机权重，可选值0~100。 */
  Weight: number;
  /** 自定义探测的主机端口，可选值1~65535。（需要监听器开启自定义健康检查） */
  ProbePort?: number;
}

/** 待与七层监听器转发规则绑定的物理机主机、虚拟机或半托管主机信息。目前一个七层转发路径下面最多允许绑定255个主机端口。 */
declare interface BindL7Backend {
  /** 待绑定的主机端口，可选值1~65535。 */
  Port?: number;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId?: string;
  /** 待绑定的主机权重，可选值0~100。 */
  Weight?: number;
}

/** 待与流量镜像绑定的接收机信息。 */
declare interface BindTrafficMirrorReceiver {
  /** 待绑定的主机端口，可选值1~65535。 */
  Port: number;
  /** 待绑定的主机实例ID。 */
  InstanceId: string;
  /** 待绑定的主机权重，可选值0~100。 */
  Weight: number;
}

/** 获取证书信息时返回的所用在的负载均衡信息。 */
declare interface CertDetailLoadBalancer {
  /** 黑石负载均衡实例ID。 */
  LoadBalancerId?: string;
  /** 黑石负载均衡实例名称。 */
  LoadBalancerName?: string;
  /** 该黑石负载均衡所在的VpcId。 */
  VpcId?: string;
  /** 该黑石负载均衡所在的regionId。 */
  RegionId?: number;
}

/** 用于创建四层监听器的监听器信息。目前一个负载均衡下面最多允许创建50个监听器。 */
declare interface CreateL4Listener {
  /** 监听器监听端口，可选值1~65535。 */
  LoadBalancerPort: number;
  /** 监听器协议类型，可选值tcp，udp。 */
  Protocol: string;
  /** 监听器名称。 */
  ListenerName: string;
  /** 监听器的会话保持时间，单位：秒。可选值：900~3600,不传表示不开启会话保持。 */
  SessionExpire?: number;
  /** 是否开启健康检查：1（开启）、0（关闭）。默认值0，表示关闭。 */
  HealthSwitch?: number;
  /** 健康检查的响应超时时间，可选值：2-60，默认值：2，单位:秒。响应超时时间要小于检查间隔时间。 */
  TimeOut?: number;
  /** 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。 */
  IntervalTime?: number;
  /** 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。 */
  HealthNum?: number;
  /** 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。 */
  UnhealthNum?: number;
  /** 监听器最大带宽值，用于计费模式为固定带宽计费，可选值：0-1000，单位：Mbps。 */
  Bandwidth?: number;
  /** 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效） */
  CustomHealthSwitch?: number;
  /** 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。 */
  InputType?: string;
  /** 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。 */
  LineSeparatorType?: number;
  /** 自定义探测请求内容。 */
  HealthRequest?: string;
  /** 自定义探测返回内容。 */
  HealthResponse?: string;
  /** 是否开启toa。可选值：0（关闭）、1（开启），默认关闭。（该字段在负载均衡为fullnat类型下才生效） */
  ToaFlag?: number;
}

/** 用于创建四层监听器的监听器信息。目前一个负载均衡下面最多允许创建50个七层监听器。 */
declare interface CreateL7Listener {
  /** 七层监听器端口，可选值1~65535。 */
  LoadBalancerPort: number;
  /** 七层监听器协议类型，可选值：http,https。 */
  Protocol: string;
  /** 七层监听器名称。 */
  ListenerName: string;
  /** 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。当创建的是https类型的监听器时，此值必选。 */
  SslMode?: number;
  /** 服务端证书ID。当创建的是https类型的监听器时，此值必选。 */
  CertId?: string;
  /** 服务端证书名称。 */
  CertName?: string;
  /** 服务端证书内容。 */
  CertContent?: string;
  /** 服务端证书密钥。 */
  CertKey?: string;
  /** 客户端证书ID。 */
  CertCaId?: string;
  /** 客户端证书名称。 */
  CertCaName?: string;
  /** 客户端证书内容。 */
  CertCaContent?: string;
  /** 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。 */
  Bandwidth?: number;
  /** 转发协议。当Protocol为https时并且SslMode为1或2时，有意义。可选的值为0：https，1：spdy，2：http2，3：spdy+http2。 */
  ForwardProtocol?: number;
}

/** 用于创建七层监听器的转发规则的信息。目前一个七层监听器下面最多允许创建50个七层转发域名，而每一个转发域名下最多可以创建100个转发规则。 */
declare interface CreateL7Rule {
  /** 七层转发规则的转发域名。 */
  Domain: string;
  /** 七层转发规则的转发路径。 */
  Url: string;
  /** 会话保持时间，单位：秒。可选值：30~3600。默认值0，表示不开启会话保持。 */
  SessionExpire?: number;
  /** 健康检查开关：1（开启）、0（关闭）。默认值0，表示关闭。 */
  HealthSwitch?: number;
  /** 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。 */
  IntervalTime?: number;
  /** 健康检查健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。 */
  HealthNum?: number;
  /** 健康检查不健康阈值，默认值：5，表示当连续探测五次不健康则表示该转发不正常，可选值：2-10，单位：次。 */
  UnhealthNum?: number;
  /** 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。 */
  HttpCodes?: number[];
  /** 健康检查检查路径。 */
  HttpCheckPath?: string;
  /** 健康检查检查域名。如果创建规则的域名使用通配符或正则表达式，则健康检查检查域名可自定义，否则必须跟健康检查检查域名一样。 */
  HttpCheckDomain?: string;
  /** 均衡方式：ip_hash、wrr。默认值wrr。 */
  BalanceMode?: string;
}

/** 用于创建负载均衡的个性化配置。 */
declare interface CreateLoadBalancerBzConf {
  /** 按月/按小时计费。 */
  BzPayMode?: string;
  /** 四层可选按带宽，连接数衡量。 */
  BzL4Metrics?: string;
  /** 七层可选按qps衡量。 */
  BzL7Metrics?: string;
}

/** 待查询四层监听器绑定的主机信息。 */
declare interface DescribeL4Backend {
  /** 待绑定的主机端口，可选值1~65535。 */
  Port?: number;
  /** 黑石物理机的主机ID。 */
  InstanceId?: string;
}

/** 流量镜像进行健康检查的接收机信息。 */
declare interface DescribeTrafficMirrorReceiver {
  /** 物理机实例ID。 */
  InstanceId: string;
  /** 物理机绑定的端口。 */
  Port: number;
}

/** 获取设备绑定信息时返回的所绑定的主机信息。 */
declare interface DevicesBindInfoBackend {
  /** 黑石物理机的主机ID、托管主机ID或虚拟机IP。 */
  InstanceId?: string;
  /** 主机端口。 */
  Port?: number;
}

/** 获取设备绑定信息时返回的四层监听器信息。 */
declare interface DevicesBindInfoL4Listener {
  /** 七层监听器实例ID。 */
  ListenerId?: string;
  /** 七层监听器协议类型，可选值：http,https。 */
  Protocol?: string;
  /** 七层监听器的监听端口。 */
  LoadBalancerPort?: number;
  /** 该转发路径所绑定的主机列表。 */
  BackendSet?: DevicesBindInfoBackend[];
}

/** 获取设备绑定信息时返回的七层监听器信息。 */
declare interface DevicesBindInfoL7Listener {
  /** 七层监听器实例ID。 */
  ListenerId?: string;
  /** 七层监听器协议类型，可选值：http,https。 */
  Protocol?: string;
  /** 七层监听器的监听端口。 */
  LoadBalancerPort?: number;
  /** 返回的转发规则列表。 */
  RuleSet?: DevicesBindInfoRule[];
}

/** 获取设备绑定信息时返回的设备被绑定所在的负载均衡信息。 */
declare interface DevicesBindInfoLoadBalancer {
  /** 负载均衡实例ID。 */
  LoadBalancerId?: string;
  /** 开发商AppId。 */
  AppId?: number;
  /** 负载均衡所属的项目ID。 */
  ProjectId?: number;
  /** 黑石私有网络唯一ID。 */
  VpcId?: string;
  /** 负载均衡的IP地址。 */
  Vip?: string;
  /** 负载均衡对应的TGW集群类别，取值为tunnel或fullnat。tunnel表示隧道集群，fullnat表示FULLNAT集群。 */
  TgwSetType?: string;
  /** 是否独占TGW集群。 */
  Exclusive?: number;
  /** 具有该绑定关系的四层监听器列表。 */
  L4ListenerSet?: DevicesBindInfoL4Listener[];
  /** 具有该绑定关系的七层监听器列表。 */
  L7ListenerSet?: DevicesBindInfoL7Listener[];
}

/** 获取设备绑定信息时返回的设备所绑定的转发路径信息。 */
declare interface DevicesBindInfoLocation {
  /** 转发路径。 */
  Url?: string;
  /** 转发路径实例ID。 */
  LocationId?: string;
  /** 该转发路径所绑定的主机列表。 */
  BackendSet?: DevicesBindInfoBackend[];
}

/** 获取设备绑定信息时返回的设备所绑定的转发规则信息。 */
declare interface DevicesBindInfoRule {
  /** 转发域名。 */
  Domain?: string;
  /** 转发域名ID。 */
  DomainId?: string;
  /** 转发路径列表。 */
  LocationSet?: DevicesBindInfoLocation[];
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** 查询四层监听器返回的与监听器绑定关系的主机信息。 */
declare interface L4Backend {
  /** 绑定类别（0代表黑石物理机，1代表虚拟机IP）。 */
  BindType?: number;
  /** 主机端口。 */
  Port?: number;
  /** 权重。 */
  Weight?: number;
  /** 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。 */
  Status?: string;
  /** 黑石物理机的主机ID。 */
  InstanceId?: string;
  /** 黑石物理机的别名。 */
  Alias?: string;
  /** 主机IP。 */
  LanIp?: string;
  /** 黑石物理机当前可以执行的操作。 */
  Operates?: string[];
  /** 主机探测端口。 */
  ProbePort?: number;
}

/** 查询四层监听器时返回的四层监听器信息。 */
declare interface L4Listener {
  /** 监听器ID。 */
  ListenerId?: string;
  /** 用户自定义的监听器名称。 */
  ListenerName?: string;
  /** 负载均衡实例监听器协议类型，可选值tcp，udp。 */
  Protocol?: string;
  /** 负载均衡监听器的监听接口，可选值1~65535。 */
  LoadBalancerPort?: number;
  /** 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。 */
  Bandwidth?: number;
  /** 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。 */
  ListenerType?: string;
  /** 会话保持时间。单位：秒 */
  SessionExpire?: number;
  /** 是否开启了检查：1（开启）、0（关闭）。 */
  HealthSwitch?: number;
  /** 响应超时时间，单位：秒。 */
  TimeOut?: number;
  /** 检查间隔，单位：秒。 */
  IntervalTime?: number;
  /** 负载均衡监听器健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。 */
  HealthNum?: number;
  /** 负载均衡监听器不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。 */
  UnhealthNum?: number;
  /** 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效） */
  CustomHealthSwitch?: number;
  /** 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。 */
  InputType?: string;
  /** 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。 */
  LineSeparatorType?: number;
  /** 自定义探测请求内容。 */
  HealthRequest?: string;
  /** 自定义探测返回内容。 */
  HealthResponse?: string;
  /** 是否开启toa：1（开启）、0（关闭）。 */
  ToaFlag?: number;
  /** 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
  /** 转发后端服务器调度类型。 */
  BalanceMode?: string;
}

/** 查询绑定了某主机的四层监听器时返回的四层监听器信息。 */
declare interface L4ListenerInfo {
  /** 监听器ID。 */
  ListenerId?: string;
  /** 用户自定义的监听器名称。 */
  ListenerName?: string;
  /** 负载均衡实例监听器协议类型，可选值tcp，udp。 */
  Protocol?: string;
  /** 负载均衡监听器的监听接口，可选值1~65535。 */
  LoadBalancerPort?: number;
  /** 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。 */
  Bandwidth?: number;
  /** 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。 */
  ListenerType?: string;
  /** 会话保持时间。单位：秒 */
  SessionExpire?: number;
  /** 是否开启了检查：1（开启）、0（关闭）。 */
  HealthSwitch?: number;
  /** 响应超时时间，单位：秒。 */
  TimeOut?: number;
  /** 检查间隔，单位：秒。 */
  IntervalTime?: number;
  /** 负载均衡监听器健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。 */
  HealthNum?: number;
  /** 负载均衡监听器不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。 */
  UnhealthNum?: number;
  /** 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
  /** 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效） */
  CustomHealthSwitch?: number;
  /** 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。 */
  InputType?: string;
  /** 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。 */
  LineSeparatorType?: number;
  /** 自定义探测请求内容。 */
  HealthRequest?: string;
  /** 自定义探测返回内容。 */
  HealthResponse?: string;
  /** 是否开启toa：1（开启）、0（关闭）。 */
  ToaFlag?: number;
  /** 转发后端服务器调度类型。 */
  BalanceMode?: string;
}

/** 获取七层转发路径绑定的主机列表时返回的主机信息。 */
declare interface L7Backend {
  /** 绑定类别（0代表黑石物理机，1代表虚拟机IP）。 */
  BindType?: number;
  /** 主机端口。 */
  Port?: number;
  /** 权重。 */
  Weight?: number;
  /** 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。 */
  Status?: string;
  /** 黑石物理机的主机ID。 */
  InstanceId?: string;
  /** 黑石物理机的别名。 */
  Alias?: string;
  /** 主机IP。 */
  LanIp?: string;
  /** 黑石物理机的管理IP。 */
  MgtIp?: string;
  /** 黑石物理机当前可以执行的操作。 */
  Operates?: string[];
}

/** 监听器信息。 */
declare interface L7ExListener {
  /** 绑定的监听器唯一ID。 */
  ListenerId?: string;
  /** 监听器名称。 */
  ListenerName?: string;
  /** 七层监听器协议类型，可选值：http,https。 */
  Protocol: string;
  /** 监听器的监听端口。 */
  LoadBalancerPort: number;
  /** 当前带宽。 */
  Bandwidth: number;
  /** 带宽上限。 */
  MaxBandwidth: number;
  /** 监听器类型。 */
  ListenerType: string;
  /** 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。 */
  SslMode: number;
  /** 服务端证书ID。 */
  CertId: string;
  /** 客户端证书ID。 */
  CertCaId: string;
  /** 添加时间。 */
  AddTimestamp: string;
  /** 负载均衡名ID。 */
  LoadBalancerId: string;
  /** 私有网络名称。 */
  VpcName: string;
  /** 私有网络Cidr。 */
  VpcCidrBlock: string;
  /** 负载均衡的VIP。 */
  LoadBalancerVips: string[];
  /** 负载均衡名称。 */
  LoadBalancerName: string;
  /** 负载均衡IPV6的VIP。 */
  LoadBalancerVipv6s: string[];
  /** 支持的IP协议类型。ipv4或者是ipv6。 */
  IpProtocolType: string;
  /** 是否绑定在入参指定的流量镜像中。 */
  BindTrafficMirror: boolean;
}

/** 获取黑石负载均衡七层监听器时返回的七层监听器信息。 */
declare interface L7Listener {
  /** 七层监听器实例ID。 */
  ListenerId?: string;
  /** 七层监听器名称。 */
  ListenerName?: string;
  /** 七层监听器协议类型，可选值：http,https。 */
  Protocol?: string;
  /** 七层监听器的监听端口。 */
  LoadBalancerPort?: number;
  /** 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。 */
  Bandwidth?: number;
  /** 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。 */
  ListenerType?: string;
  /** 七层监听器的认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。 */
  SslMode?: number;
  /** 七层监听器关联的服务端证书ID。 */
  CertId?: string;
  /** 七层监听器关联的客户端证书ID。 */
  CertCaId?: string;
  /** 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
  /** https转发类型。0：https。1：spdy。2：http2。3：spdy+http2。 */
  ForwardProtocol?: number;
}

/** 查询绑定了某主机的七层监听器时返回的七层监听器信息。 */
declare interface L7ListenerInfo {
  /** 七层监听器实例ID。 */
  ListenerId?: string;
  /** 七层监听器名称。 */
  ListenerName?: string;
  /** 七层监听器协议类型，可选值：http,https。 */
  Protocol?: string;
  /** 七层监听器的监听端口。 */
  LoadBalancerPort?: number;
  /** 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。 */
  Bandwidth?: number;
  /** 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。 */
  ListenerType?: string;
  /** 七层监听器的认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。 */
  SslMode?: number;
  /** 七层监听器关联的服务端证书ID。 */
  CertId?: string;
  /** 七层监听器关联的客户端证书ID。 */
  CertCaId?: string;
  /** 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
  /** 返回的转发规则列表。 */
  RuleSet?: L7ListenerInfoRule[];
  /** https转发类型。0：https。1：spdy。2：http2。3：spdy+http2。 */
  ForwardProtocol?: number;
}

/** 查询绑定了某主机七层监听器时返回的与转发路径所绑定的主机信息。 */
declare interface L7ListenerInfoBackend {
  /** 绑定类别（0代表黑石物理机，1代表虚拟机IP）。 */
  BindType?: number;
  /** 主机端口。 */
  Port?: number;
  /** 权重。 */
  Weight?: number;
  /** 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。 */
  Status?: string;
  /** 黑石物理机的主机ID。 */
  InstanceId?: string;
  /** 黑石物理机的别名。 */
  Alias?: string;
  /** 主机IP。 */
  LanIp?: string;
}

/** 查询绑定了某主机的七层监听器时返回的转发路径。 */
declare interface L7ListenerInfoLocation {
  /** 转发路径。 */
  Url?: string;
  /** 转发路径实例ID。 */
  LocationId?: string;
  /** 会话保持时间。 */
  SessionExpire?: number;
  /** 是否开启健康检查。 */
  HealthSwitch?: number;
  /** 健康检查检查路径。 */
  HttpCheckPath?: string;
  /** 健康检查检查域名。 */
  HttpCheckDomain?: string;
  /** 健康检查检查间隔时间。 */
  IntervalTime?: number;
  /** 健康检查健康阈值。 */
  HealthNum?: number;
  /** 健康检查不健康阈值。 */
  UnhealthNum?: number;
  /** 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。 */
  HttpCodes?: number[];
  /** 均衡方式。 */
  BalanceMode?: string;
  /** 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
  /** 该转发路径所绑定的主机列表。 */
  BackendSet?: L7ListenerInfoBackend[];
}

/** 查询绑定了某主机的七层监听器时返回的转发规则。 */
declare interface L7ListenerInfoRule {
  /** 转发域名。 */
  Domain?: string;
  /** 转发域名实例ID。 */
  DomainId?: string;
  /** 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
  /** 该转发域名下面的转发路径列表。 */
  LocationSet?: L7ListenerInfoLocation[];
}

/** 获取七层监听器转发规则时返回的转发规则。 */
declare interface L7Rule {
  /** 转发域名。 */
  Domain?: string;
  /** 转发域名实例ID。 */
  DomainId?: string;
  /** 转发路径当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
  /** 该转发域名下面的转发路径列表。 */
  LocationSet?: L7RulesLocation[];
}

/** 获取七层转发规则时返回的转发域名下面的转发路径。 */
declare interface L7RulesLocation {
  /** 转发路径。 */
  Url?: string;
  /** 转发路径实例ID。 */
  LocationId?: string;
  /** 会话保持时间。 */
  SessionExpire?: number;
  /** 是否开启健康检查。 */
  HealthSwitch?: number;
  /** 健康检查检查路径。 */
  HttpCheckPath?: string;
  /** 健康检查检查域名。 */
  HttpCheckDomain?: string;
  /** 健康检查检查间隔时间。 */
  IntervalTime?: number;
  /** 健康检查健康阈值。 */
  HealthNum?: number;
  /** 健康检查不健康阈值。 */
  UnhealthNum?: number;
  /** 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。 */
  HttpCodes?: number[];
  /** 均衡方式。 */
  BalanceMode?: string;
  /** 转发路径当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。 */
  Status?: number;
  /** 创建时间戳。 */
  AddTimestamp?: string;
}

/** 获取负载均衡实例列表时返回的负载均衡信息。 */
declare interface LoadBalancer {
  /** 负载均衡器ID */
  LoadBalancerId?: string;
  /** 项目ID，通过v2/DescribeProject 接口获得 */
  ProjectId?: number;
  /** 负载均衡器名称 */
  LoadBalancerName?: string;
  /** 负载均衡的类型 : open表示公网负载均衡类型，internal表示内网负载均衡类型 */
  LoadBalancerType?: string;
  /** 是否筛选独占集群，0表示非独占集群，1表示四层独占集群，2表示七层独占集群，3表示四层和七层独占集群，4表示共享容灾 */
  Exclusive?: number;
  /** 该负载均衡对应的tgw集群（fullnat,tunnel,dnat） */
  TgwSetType?: string;
  /** 负载均衡域名。规则：1-60个小写英文字母、数字、点号“.”或连接线“-”。内网类型的负载均衡不能配置该字段 */
  Domain?: string;
  /** 该负载均衡对应的所在的VpcId */
  VpcId?: string;
  /** 该负载均衡对应的所在的SubnetId */
  SubnetId?: string;
  /** 无 */
  Status?: number;
  /** 无 */
  PayMode?: string;
  /** 无 */
  LatestPayMode?: string;
  /** 无 */
  CreateTime?: string;
  /** 无 */
  StatusTime?: string;
  /** 私有网络名称。 */
  VpcName?: string;
  /** 私有网络Cidr。 */
  VpcCidrBlock?: string;
  /** 负载均衡的IPV4的VIP。 */
  LoadBalancerVips?: string[];
  /** 无 */
  SupportListenerTypes?: string[];
  /** 无 */
  Bandwidth?: number;
  /** 负载均衡个性化配置ID */
  ConfId?: string;
  /** 无 */
  ConfName?: string;
  /** 负载均衡的IPV6的VIP。 */
  LoadBalancerVipv6s?: string[];
  /** 负载均衡IP协议类型。ipv4或者ipv6。 */
  IpProtocolType?: string;
  /** 保障型网关计费形式 */
  BzPayMode?: string;
  /** 保障型网关四层计费指标 */
  BzL4Metrics?: string;
  /** 保障型网关七层计费指标 */
  BzL7Metrics?: string;
  /** 该负载均衡对应的所在的整形类型的VpcId */
  IntVpcId?: number;
  /** 负载均衡的IPV6或者IPV4的VIP。 */
  CurVips?: string[] | null;
}

/** 获取黑石负载均衡端口相关信息时返回的监听器信息（四层和七层）。 */
declare interface LoadBalancerPortInfoListener {
  /** 负载均衡监听器ID。 */
  ListenerId?: string;
  /** 监听器名称。 */
  ListenerName?: string;
  /** 监听器协议类型，可选值：http，https，tcp，udp。 */
  Protocol?: string;
  /** 监听器的监听端口。 */
  LoadBalancerPort?: number;
  /** 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。 */
  Bandwidth?: number;
  /** 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。 */
  Status?: number;
  /** 与监听器绑定的主机端口。 */
  Port: number;
}

/** 修改黑石负载均衡七层转发路径时待修改的七层转发规则信息。 */
declare interface ModifyL7LocationRule {
  /** 转发域名实例ID，可通过接口DescribeL7Rules查询。 */
  DomainId: string;
  /** 转发路径实例ID，可通过接口DescribeL7Rules查询。 */
  LocationId: string;
  /** 转发路径。 */
  Url?: string;
  /** 会话保持时间，单位：秒。可选值：30~3600。默认值0，表示不开启会话保持。 */
  SessionExpire?: number;
  /** 健康检查开关：1（开启）、0（关闭）。默认值0，表示关闭。 */
  HealthSwitch?: number;
  /** 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。 */
  IntervalTime?: number;
  /** 健康检查健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。 */
  HealthNum?: number;
  /** 健康检查不健康阈值，默认值：5，表示当连续探测五次不健康则表示该转发不正常，可选值：2-10，单位：次。 */
  UnhealthNum?: number;
  /** 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。 */
  HttpCodes?: number[];
  /** 健康检查检查路径。 */
  HttpCheckPath?: string;
  /** 健康检查检查域名。如果规则的域名使用通配符或正则表达式，则健康检查检查域名可自定义，否则必须跟健康检查检查域名一样。不填表示不修改。 */
  HttpCheckDomain?: string;
  /** 均衡方式：ip_hash、wrr。默认值wrr。 */
  BalanceMode?: string;
  /** 转发域名。 */
  Domain?: string;
}

/** 修改负载均衡计费方式的监听器信息。 */
declare interface ModifyLoadBalancerChargeModeListener {
  /** 监听器ID。 */
  ListenerId: string;
  /** 协议类型。 */
  Protocol: string;
  /** 带宽。 */
  Bandwidth: number;
}

/** 获取流量镜像实例的列表信息时返回的流量镜像信息。 */
declare interface TrafficMirror {
  /** 流量镜像ID。 */
  TrafficMirrorId?: string;
  /** 流量镜像名称。 */
  Alias?: string;
  /** 流量镜像所在的私有网络ID。 */
  VpcId?: string;
  /** 接收机负载均衡方式。wrr，ip_hash，wlc。 */
  LoadBalancerType?: string;
  /** 是否开始对接收机的健康检查。0：关闭，非0：开启。 */
  HealthSwitch?: number;
  /** 健康阈值。 */
  HealthNum?: number;
  /** 不健康阈值。 */
  UnhealthNum?: number;
  /** 检查间隔。 */
  IntervalTime?: number;
  /** 检查域名。 */
  HttpCheckDomain?: string;
  /** 检查目录。 */
  HttpCheckPath?: string;
  /** 健康检查返回码。 1：1xx，2：2xx，3：3xx，4：4xx，5：5xx。 */
  HttpCodes?: number[];
  /** 创建时间。 */
  CreateTime?: string;
  /** 流量镜像所在私有网络的Cidr。 */
  VpcCidrBlock?: string;
  /** 流量镜像所在私有网络的名称。 */
  VpcName?: string;
}

/** 获取流量镜像的监听器列表信息时返回的与流量镜像绑定的监听器信息。 */
declare interface TrafficMirrorListener {
  /** 监听器ID。 */
  ListenerId: string;
  /** 监听器名称。 */
  ListenerName: string;
  /** 七层监听器协议类型，可选值：http,https。 */
  Protocol: string;
  /** 监听器的监听端口。 */
  LoadBalancerPort: number;
  /** 当前带宽。 */
  Bandwidth: number;
  /** 带宽上限。 */
  MaxBandwidth: number;
  /** 监听器类型。 */
  ListenerType: string;
  /** 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。 */
  SslMode: number;
  /** 服务端证书ID。 */
  CertId: string;
  /** 客户端证书ID。 */
  CertCaId: string;
  /** 添加时间。 */
  AddTimestamp: string;
  /** 负载均衡ID。 */
  LoadBalancerId: string;
  /** 私有网络名称。 */
  VpcName: string;
  /** 私有网络Cidr。 */
  VpcCidrBlock: string;
  /** 负载均衡的VIP。 */
  LoadBalancerVips: string[];
  /** 负载均衡名称。 */
  LoadBalancerName: string;
  /** 负载均衡的IPV6的VIP。 */
  LoadBalancerVipv6s: string[];
  /** 支持的IP协议类型。ipv4或者是ipv6。 */
  IpProtocolType: string;
}

/** 流量镜像健康检查返回的接收机的端口及状态信息。 */
declare interface TrafficMirrorPortStatus {
  /** 接收机端口。 */
  Port: number;
  /** 状态。 */
  Status: string;
}

/** 获取与流量镜像绑定的接收机信息时返回的接收机信息。 */
declare interface TrafficMirrorReceiver {
  /** 接收机实例ID。 */
  InstanceId?: string;
  /** 接收机接收端口。 */
  Port?: number;
  /** 接收机权重。 */
  Weight?: number;
  /** 流量镜像ID。 */
  TrafficMirrorId: string;
  /** 接收机别名。 */
  Alias: string;
  /** 接收机内网IP地址。 */
  LanIp: string;
  /** 接收机所在的子网的ID。 */
  SubnetId: string;
  /** 接收机所在的子网的名称。 */
  SubnetName: string;
  /** 接收机所在的子网的Cidr。 */
  SubnetCidrBlock: string;
  /** 接收机所在的私有网络的ID。 */
  VpcId: string;
  /** 接收机所在的私有网络的名称。 */
  VpcName: string;
  /** 接收机所在的私有网络的Cidr。 */
  VpcCidrBlock: string;
  /** 接收机的健康状态。 */
  HealthStatus: string;
  /** 接收机的可以执行的操作集合。 */
  Operates: string[];
}

/** 流量镜像健康检查返回的接收机状态信息。 */
declare interface TrafficMirrorReciversStatus {
  /** 内网IP。 */
  LanIp: string;
  /** 端口及对应的状态。 */
  ReceiversPortStatusSet: TrafficMirrorPortStatus[];
}

/** 待与四层监听器解绑的物理机主机、虚拟机或半托管主机信息。 */
declare interface UnbindL4Backend {
  /** 待解绑的主机端口，可选值1~65535。 */
  Port?: number;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId?: string;
}

/** 待与七层监听器转发规则解绑的物理机主机、虚拟机或半托管主机信息。 */
declare interface UnbindL7Backend {
  /** 待解绑的主机端口，可选值1~65535。 */
  Port?: number;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId?: string;
}

/** 待与流量镜像解绑的接收机信息。 */
declare interface UnbindTrafficMirrorReceiver {
  /** 待解绑的主机端口，可选值1~65535。 */
  Port: number;
  /** 待解绑的主机实例ID。 */
  InstanceId: string;
}

declare interface BindL4BackendsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 四层监听器实例ID，可通过接口DescribeL4Listeners查询。 */
  ListenerId: string;
  /** 待绑定的主机信息。可以绑定多个主机端口。目前一个四层监听器下面最多允许绑定255个主机端口。 */
  BackendSet: BindL4Backend[];
  /** 绑定类型。0：物理机 1：虚拟机 2：半托管机器 */
  BindType: number;
}

declare interface BindL4BackendsResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindL7BackendsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名实例ID，可通过接口DescribeL7Rules查询。 */
  DomainId: string;
  /** 转发路径实例ID，可通过接口DescribeL7Rules查询。 */
  LocationId: string;
  /** 待绑定的主机信息。可以绑定多个主机端口。目前一个七层转发路径下面最多允许绑定255个主机端口。 */
  BackendSet: BindL7Backend[];
  /** 绑定类型。0：物理机，1：虚拟机 2：半托管机器。 */
  BindType: number;
}

declare interface BindL7BackendsResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindTrafficMirrorListenersRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 七层监听器实例ID数组，可通过接口DescribeL7Listeners查询。 */
  ListenerIds: string[];
}

declare interface BindTrafficMirrorListenersResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindTrafficMirrorReceiversRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 待绑定的黑石物理机信息数组。 */
  ReceiverSet: BindTrafficMirrorReceiver[];
}

declare interface BindTrafficMirrorReceiversResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL4ListenersRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 监听器信息数组，可以创建多个监听器。目前一个负载均衡下面最多允许创建50个监听器 */
  ListenerSet: CreateL4Listener[];
}

declare interface CreateL4ListenersResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7ListenersRequest {
  /** 负载均衡实例ID */
  LoadBalancerId: string;
  /** 七层监听器信息数组，可以创建多个七层监听器。目前一个负载均衡下面最多允许创建50个七层监听器。 */
  ListenerSet: CreateL7Listener[];
}

declare interface CreateL7ListenersResponse {
  /** 新建的负载均衡七层监听器的唯一ID列表。 */
  ListenerIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7RulesRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 七层转发规则信息数组，可以创建多个七层转发规则。目前一个七层监听器下面最多允许创建50个七层转发域名，而每一个转发域名下最多可以创建100个转发规则。目前只能单条创建，不能批量创建。 */
  RuleSet: CreateL7Rule[];
}

declare interface CreateL7RulesResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoadBalancersRequest {
  /** 黑石负载均衡实例所属的私有网络ID。 */
  VpcId: string;
  /** 负载均衡的类型，取值为open或internal。open表示公网(有日租)，internal表示内网。 */
  LoadBalancerType: string;
  /** 在私有网络内购买内网负载均衡实例的时候需要指定子网ID，内网负载均衡实例的VIP将从这个子网中产生。其他情况不用填写该字段。 */
  SubnetId?: string;
  /** 负载均衡所属项目ID。不填则属于默认项目。 */
  ProjectId?: number;
  /** 购买黑石负载均衡实例的数量。默认值为1, 最大值为20。 */
  GoodsNum?: number;
  /** 黑石负载均衡的计费模式，取值为flow和bandwidth，其中flow模式表示流量模式，bandwidth表示带宽模式。默认值为flow。 */
  PayMode?: string;
  /** 负载均衡对应的TGW集群类别，取值为tunnel、fullnat或dnat。tunnel表示隧道集群，fullnat表示FULLNAT集群（普通外网负载均衡），dnat表示DNAT集群（增强型外网负载均衡）。默认值为fullnat。如需获取client IP，可以选择 tunnel 模式，fullnat 模式（tcp 通过toa 获取），dnat 模式。 */
  TgwSetType?: string;
  /** 负载均衡的独占类别，取值为0表示非独占，1表示四层独占，2表示七层独占，3表示四层和七层独占，4表示共享容灾。 */
  Exclusive?: number;
  /** 指定的VIP，如果指定，则数量必须与goodsNum一致。如果不指定，则由后台分配随机VIP。 */
  SpecifiedVips?: string[];
  /** （未全地域开放）保障型负载均衡设定参数，如果类别选择保障型则需传入此参数。 */
  BzConf?: CreateLoadBalancerBzConf;
  /** IP协议类型。可取的值为“ipv4”或“ipv6”。 */
  IpProtocolType?: string;
}

declare interface CreateLoadBalancersResponse {
  /** 创建的黑石负载均衡实例ID。 */
  LoadBalancerIds?: string[];
  /** 创建负载均衡的异步任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTrafficMirrorRequest {
  /** 流量镜像实例别名。 */
  Alias: string;
  /** 流量镜像实例所属的私有网络ID，形如：vpc-xxx。 */
  VpcId: string;
}

declare interface CreateTrafficMirrorResponse {
  /** 流量镜像实例ID */
  TrafficMirrorId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL7DomainsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名实例ID列表，可通过接口DescribeL7Rules查询。 */
  DomainIds: string[];
}

declare interface DeleteL7DomainsResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL7RulesRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名实例ID，可通过接口DescribeL7Rules查询。 */
  DomainId: string;
  /** 转发路径实例ID列表，可通过接口DescribeL7Rules查询。 */
  LocationIds: string[];
}

declare interface DeleteL7RulesResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteListenersRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 待删除的负载均衡四层和七层监听器ID列表，可通过接口DescribeL4Listeners和DescribeL7Listeners查询。目前同时只能删除一种类型的监听器，并且删除七层监听器的数量上限为一个。 */
  ListenerIds: string[];
}

declare interface DeleteListenersResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancerRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
}

declare interface DeleteLoadBalancerResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTrafficMirrorRequest {
  /** 流量镜像实例ID数组，可以批量删除，每次删除上限为20 */
  TrafficMirrorIds: string[];
}

declare interface DeleteTrafficMirrorResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertDetailRequest {
  /** 证书ID。 */
  CertId: string;
}

declare interface DescribeCertDetailResponse {
  /** 证书ID。 */
  CertId?: string;
  /** 证书名称。 */
  CertName?: string;
  /** 证书类型（SVR=服务器证书，CA=客户端证书）。 */
  CertType?: string;
  /** 证书内容。 */
  CertContent?: string;
  /** 证书主域名。 */
  CertDomain?: string;
  /** 证书子域名列表。 */
  CertSubjectDomain?: string[];
  /** 证书上传时间。 */
  CertUploadTime?: string;
  /** 证书生效时间。 */
  CertBeginTime?: string;
  /** 证书失效时间。 */
  CertEndTime?: string;
  /** 该证书关联的黑石负载均衡对象列表。 */
  CertLoadBalancerSet?: CertDetailLoadBalancer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicesBindInfoRequest {
  /** 黑石私有网络唯一ID。 */
  VpcId: string;
  /** 主机ID或虚机IP列表，可用于获取绑定了该主机的负载均衡列表。 */
  InstanceIds: string[];
}

declare interface DescribeDevicesBindInfoResponse {
  /** 返回的负载均衡绑定信息。 */
  LoadBalancerSet?: DevicesBindInfoLoadBalancer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL4BackendsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。 */
  ListenerId: string;
  /** 待查询的主机信息。 */
  BackendSet?: DescribeL4Backend[];
}

declare interface DescribeL4BackendsResponse {
  /** 返回的绑定关系列表。 */
  BackendSet?: L4Backend[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL4ListenerInfoRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 查找的键值，可用于模糊查找该名称的监听器。 */
  SearchKey?: string;
  /** 主机ID或虚机IP列表，可用于获取绑定了该主机的监听器。 */
  InstanceIds?: string[];
}

declare interface DescribeL4ListenerInfoResponse {
  /** 返回的四层监听器列表。 */
  ListenerSet?: L4ListenerInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL4ListenersRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 四层监听器实例ID数组，可通过接口DescribeL4Listeners查询。 */
  ListenerIds?: string[];
}

declare interface DescribeL4ListenersResponse {
  /** 监听器信息数组。 */
  ListenerSet?: L4Listener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7BackendsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名实例ID，可通过接口DescribeL7Rules查询。 */
  DomainId?: string;
  /** 转发路径实例ID，可通过接口DescribeL7Rules查询。 */
  LocationId?: string;
  /** 查询条件，传'all'则查询所有与规则绑定的主机信息。如果为all时，DomainId和LocationId参数没有意义不必传入，否则DomainId和LocationId参数必须传入。 */
  QueryType?: string;
}

declare interface DescribeL7BackendsResponse {
  /** 返回的绑定关系列表。 */
  BackendSet?: L7Backend[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7ListenerInfoRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 查找的键值，可用于模糊查找有该转发域名的监听器。 */
  SearchKey?: string;
  /** 主机ID或虚机IP列表，可用于获取绑定了该主机的监听器。 */
  InstanceIds?: string[];
  /** 是否获取转发规则下的主机信息。默认为0，不获取。 */
  IfGetBackendInfo?: number;
}

declare interface DescribeL7ListenerInfoResponse {
  /** 返回的七层监听器列表。 */
  ListenerSet?: L7ListenerInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7ListenersExRequest {
  /** 返回的监听器中标识是否绑定在此流量镜像中。 */
  TrafficMirrorId: string;
  /** 待获取监听器所在的VPC的ID。 */
  VpcId: string;
  /** 此VPC中获取负载均衡的偏移。 */
  Offset?: number;
  /** 此VPC中获取负载均衡的数量。 */
  Limit?: number;
  /** 过滤条件。LoadBalancerId - String - （过滤条件）负载均衡ID。LoadBalancerName - String - （过滤条件）负载均衡名称。Vip - String - （过滤条件）VIP。ListenerId - String - （过滤条件）监听器ID。ListenerName - String - （过滤条件）监听器名称。Protocol - String - （过滤条件）七层协议。LoadBalancerPort - String - （过滤条件）监听器端口。 */
  Filters?: Filter[];
}

declare interface DescribeL7ListenersExResponse {
  /** 此指定VPC中负载均衡的总数。 */
  TotalCount?: number;
  /** 符合条件的监听器。 */
  ListenerSet?: L7ExListener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7ListenersRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID列表，可通过接口DescribeL7Listeners查询。 */
  ListenerIds?: string[];
}

declare interface DescribeL7ListenersResponse {
  /** 返回的七层监听器列表。 */
  ListenerSet?: L7Listener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7RulesRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名ID列表，可通过接口DescribeL7Rules查询。 */
  DomainIds?: string[];
}

declare interface DescribeL7RulesResponse {
  /** 返回的转发规则列表。 */
  RuleSet?: L7Rule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancerPortInfoRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
}

declare interface DescribeLoadBalancerPortInfoResponse {
  /** 返回的监听器列表（四层和七层）。 */
  ListenerSet?: LoadBalancerPortInfoListener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancerTaskResultRequest {
  /** 任务ID。由具体的异步操作接口提供。 */
  TaskId: string;
}

declare interface DescribeLoadBalancerTaskResultResponse {
  /** 任务当前状态。0：成功，1：失败，2：进行中。 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancersRequest {
  /** 负载均衡器ID数组 */
  LoadBalancerIds?: string[];
  /** 负载均衡的类型 : open表示公网LB类型，internal表示内网LB类型 */
  LoadBalancerType?: string;
  /** 负载均衡器名称 */
  LoadBalancerName?: string;
  /** 负载均衡域名。规则：1-60个小写英文字母、数字、点号“.”或连接线“-”。内网类型的负载均衡不能配置该字段 */
  Domain?: string;
  /** 负载均衡获得的公网IP地址,支持多个 */
  LoadBalancerVips?: string[];
  /** 数据偏移量，默认为0 */
  Offset?: number;
  /** 返回数据长度，默认为20 */
  Limit?: number;
  /** 模糊查找名称、域名、VIP */
  SearchKey?: string;
  /** 排序字段，支持：loadBalancerName,createTime,domain,loadBalancerType */
  OrderBy?: string;
  /** 1倒序，0顺序，默认顺序 */
  OrderType?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 是否筛选独占集群，0表示非独占集群，1表示四层独占集群，2表示七层独占集群，3表示四层和七层独占集群，4表示共享容灾 */
  Exclusive?: number;
  /** 该负载均衡对应的tgw集群（fullnat,tunnel,dnat） */
  TgwSetType?: string;
  /** 该负载均衡对应的所在的私有网络ID */
  VpcId?: string;
  /** 'CONFLIST' 查询带confId的LB列表，'CONFID' 查询某个confId绑定的LB列表 */
  QueryType?: string;
  /** 个性化配置ID */
  ConfId?: string;
}

declare interface DescribeLoadBalancersResponse {
  /** 返回负载均衡信息列表。 */
  LoadBalancerSet?: LoadBalancer[];
  /** 符合条件的负载均衡总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrafficMirrorListenersRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 分页的偏移量，也即从第几条记录开始查询 */
  Offset?: number;
  /** 单次查询返回的条目数，默认值：500。 */
  Limit?: number;
  /** 待搜索的负载均衡Id。 */
  SearchLoadBalancerIds?: string[];
  /** 待搜索的负载均衡名称。 */
  SearchLoadBalancerNames?: string[];
  /** 待搜索的Vip。 */
  SearchVips?: string[];
  /** 待搜索的监听器ID。 */
  SearchListenerIds?: string[];
  /** 待搜索的监听器名称。 */
  SearchListenerNames?: string[];
  /** 待搜索的协议名称。 */
  SearchProtocols?: string[];
  /** 待搜索的端口。 */
  SearchLoadBalancerPorts?: number[];
}

declare interface DescribeTrafficMirrorListenersResponse {
  /** 监听器列表。 */
  ListenerSet?: TrafficMirrorListener[];
  /** 监听器总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrafficMirrorReceiverHealthStatusRequest {
  /** 查询所在的流量镜像ID。 */
  TrafficMirrorId: string;
  /** 流量镜像接收机实例ID和端口数组。 */
  ReceiverSet: DescribeTrafficMirrorReceiver[];
}

declare interface DescribeTrafficMirrorReceiverHealthStatusResponse {
  /** 内网IP和端口对应的状态。 */
  ReceiversStatusSet?: TrafficMirrorReciversStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrafficMirrorReceiversRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 接收机黑石物理机实例ID数组。 */
  InstanceIds?: string[];
  /** 接收机接收端口数组。 */
  Ports?: number[];
  /** 接收机实例权重数组。 */
  Weights?: number[];
  /** 分页的偏移量，也即从第几条记录开始查询 */
  Offset?: number;
  /** 单次查询返回的条目数，默认值：500。 */
  Limit?: number;
  /** 搜索instance或者alias */
  VagueStr?: string;
  /** 搜索IP */
  VagueIp?: string;
}

declare interface DescribeTrafficMirrorReceiversResponse {
  /** 接收机列表，具体结构描述如data结构所示。 */
  ReceiverSet?: TrafficMirrorReceiver[];
  /** 接收机总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrafficMirrorsRequest {
  /** 流量镜像实例ID的数组，支持批量查询 */
  TrafficMirrorIds?: string[];
  /** 流量镜像实例别名数组。 */
  Aliases?: string[];
  /** 流量镜像实例所属的私有网络ID数组，形如：vpc-xxx。 */
  VpcIds?: string[];
  /** 分页的偏移量，也即从第几条记录开始查询 */
  Offset?: number;
  /** 单次查询返回的条目数，默认值：500。 */
  Limit?: number;
  /** 排序字段。trafficMirrorId或者createTime。 */
  OrderField?: string;
  /** 排序方式，取值：0:增序(默认)，1:降序 */
  Order?: number;
  /** 模糊匹配trafficMirrorId或者alias字段。 */
  SearchKey?: string;
}

declare interface DescribeTrafficMirrorsResponse {
  /** 流量镜像总数。 */
  TotalCount?: number;
  /** 对象数组。数组元素为流量镜像信息，具体结构描述如list结构所示。 */
  TrafficMirrorSet?: TrafficMirror[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4BackendPortRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。 */
  ListenerId: string;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId: string;
  /** 已绑定的主机端口。 */
  Port: number;
  /** 新的主机端口，可选值1~65535。 */
  NewPort: number;
  /** 绑定类型。0：物理机 1：虚拟机 2：半托管机器 */
  BindType: number;
}

declare interface ModifyL4BackendPortResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4BackendProbePortRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 负载均衡四层监听器ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId: string;
  /** 已绑定的主机端口。 */
  Port: number;
  /** 新的探测端口，可选值1~65535。 */
  ProbePort: number;
  /** 绑定类型。0：物理机 1：虚拟机IP 2：半托管机器 */
  BindType: number;
}

declare interface ModifyL4BackendProbePortResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4BackendWeightRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。 */
  ListenerId: string;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId: string;
  /** 权重信息，可选值0~100。 */
  Weight: number;
  /** 已绑定的主机端口。 */
  Port: number;
  /** 绑定类型。0：物理机 1：虚拟机 2：半托管机器 */
  BindType: number;
}

declare interface ModifyL4BackendWeightResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4ListenerRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 四层监听器ID。可通过接口DescribeL4Listeners查询。 */
  ListenerId: string;
  /** 四层监听器名称。 */
  ListenerName?: string;
  /** 会话保持时间，单位：秒。可选值：900~3600。 */
  SessionExpire?: number;
  /** 是否开启健康检查：1（开启）、0（关闭）。默认值0，表示关闭。 */
  HealthSwitch?: number;
  /** 健康检查的响应超时时间，可选值：2-60，默认值：2，单位:秒。响应超时时间要小于检查间隔时间。 */
  TimeOut?: number;
  /** 健康检查间隔，默认值：5，可选值：5-300，单位：秒。 */
  IntervalTime?: number;
  /** 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。 */
  HealthNum?: number;
  /** 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。 */
  UnhealthNum?: number;
  /** 监听器最大带宽值，用于计费模式为固定带宽计费。可选值：0-1000，单位：Mbps。 */
  Bandwidth?: number;
  /** 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效） */
  CustomHealthSwitch?: number;
  /** 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。 */
  InputType?: string;
  /** 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。 */
  LineSeparatorType?: number;
  /** 自定义探测请求内容。 */
  HealthRequest?: string;
  /** 自定义探测返回内容。 */
  HealthResponse?: string;
  /** 是否开启toa。可选值：0（关闭）、1（开启），默认关闭。（该字段在负载均衡为fullnat类型下才生效） */
  ToaFlag?: number;
  /** 四层调度方式。wrr，wlc。 */
  BalanceMode?: string;
}

declare interface ModifyL4ListenerResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7BackendPortRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名实例ID，可通过接口DescribeL7Rules查询。 */
  DomainId: string;
  /** 转发路径实例ID，可通过接口DescribeL7Rules查询。 */
  LocationId: string;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId: string;
  /** 已绑定的主机端口。 */
  Port: number;
  /** 新的主机端口，可选值1~65535。 */
  NewPort: number;
  /** 绑定类型。0：物理机 1：虚拟机 2：半托管机器 */
  BindType: number;
}

declare interface ModifyL7BackendPortResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7BackendWeightRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名实例ID，可通过接口DescribeL7Rules查询。 */
  DomainId: string;
  /** 转发路径实例ID，可通过接口DescribeL7Rules查询。 */
  LocationId: string;
  /** 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。 */
  InstanceId: string;
  /** 权重信息，可选值0~100。 */
  Weight: number;
  /** 已绑定的主机端口。 */
  Port: number;
  /** 绑定类型。0：物理机 1：虚拟机 2：半托管机器 */
  BindType: number;
}

declare interface ModifyL7BackendWeightResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7ListenerRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 七层监听器名称。 */
  ListenerName?: string;
  /** 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。 */
  SslMode?: number;
  /** 服务端证书ID。 */
  CertId?: string;
  /** 服务端证书名称。 */
  CertName?: string;
  /** 服务端证书内容。 */
  CertContent?: string;
  /** 服务端证书密钥。 */
  CertKey?: string;
  /** 客户端证书ID。 */
  CertCaId?: string;
  /** 客户端证书名称。 */
  CertCaName?: string;
  /** 客户端证书内容。 */
  CertCaContent?: string;
  /** 计费模式为按固定带宽方式时监听器的限速值，可选值：0-1000，单位：Mbps。 */
  Bandwidth?: number;
  /** 转发协议。当监听器Protocol为https时并且SslMode为1或2时，有意义。可选的值为0：https，1：spdy，2：http2，3：spdy+http2。 */
  ForwardProtocol?: number;
}

declare interface ModifyL7ListenerResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用[DescribeLoadBalancerTaskResult](/document/product/386/9308)接口来查询任务操作结果 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7LocationsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 待更新的七层转发规则信息数组。 */
  RuleSet: ModifyL7LocationRule[];
}

declare interface ModifyL7LocationsResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerChargeModeRequest {
  /** 负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 计费方式。flow或bandwidth。 */
  PayMode: string;
  /** 监听器信息，当计费方式选为 bandwidth 且此负载均衡实例下存在监听器时需填入此字段，可以自定义每个监听器带宽上限。 */
  ListenerSet?: ModifyLoadBalancerChargeModeListener[];
}

declare interface ModifyLoadBalancerChargeModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 负载均衡器名称，规则：1-20个英文、汉字、数字、连接线“-”或下划线“_”。 */
  LoadBalancerName?: string;
  /** 域名前缀，负载均衡的域名由用户输入的域名前缀与配置文件中的域名后缀一起组合而成，保证是唯一的域名。规则：1-20个小写英文字母、数字或连接线“-”。内网类型的负载均衡不能配置该字段。 */
  DomainPrefix?: string;
}

declare interface ModifyLoadBalancerResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceCertRequest {
  /** 要被替换的证书ID */
  OldCertId: string;
  /** 证书内容 */
  NewCert: string;
  /** 证书名称 */
  NewAlias?: string;
  /** 私钥内容，证书类型为SVR时不需要传递 */
  NewKey?: string;
  /** 是否删除旧证书，0 表示不删除，1 表示删除 */
  DeleteOld?: number;
}

declare interface ReplaceCertResponse {
  /** 新证书ID。 */
  NewCertId?: string;
  /** 旧证书ID。 */
  OldCertId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetTrafficMirrorAliasRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 流量镜像实例别名。 */
  Alias: string;
}

declare interface SetTrafficMirrorAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetTrafficMirrorHealthSwitchRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 健康检查开关，0：关闭，1：打开 */
  HealthSwitch: number;
  /** 健康检查判断健康的次数，最小值2，最大值10。 */
  HealthNum?: number;
  /** 健康检查判断不健康的次数，最小值2，最大值10。 */
  UnhealthNum?: number;
  /** 健康检查间隔，单位：秒，最小值5，最大值300。 */
  IntervalTime?: number;
  /** 检查的域名配置。 */
  HttpCheckDomain?: string;
  /** 检查的路径配置。 */
  HttpCheckPath?: string;
  /** 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。 */
  HttpCodes?: number[];
}

declare interface SetTrafficMirrorHealthSwitchResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindL4BackendsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。 */
  ListenerId: string;
  /** 待解绑的主机信息。可以绑定多个主机端口。目前一个四层监听器下面最多允许绑定255个主机端口。 */
  BackendSet: UnbindL4Backend[];
  /** 绑定类型。0：物理机 1：虚拟机 2：半托管机器 */
  BindType: number;
}

declare interface UnbindL4BackendsResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindL7BackendsRequest {
  /** 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。 */
  LoadBalancerId: string;
  /** 七层监听器实例ID，可通过接口DescribeL7Listeners查询。 */
  ListenerId: string;
  /** 转发域名实例ID，可通过接口DescribeL7Rules查询。 */
  DomainId: string;
  /** 转发路径实例ID，可通过接口DescribeL7Rules查询。 */
  LocationId: string;
  /** 待绑定的主机信息。 */
  BackendSet: UnbindL7Backend[];
  /** 绑定类型。0：物理机 1：虚拟机 2：半托管机器 */
  BindType: number;
}

declare interface UnbindL7BackendsResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindTrafficMirrorListenersRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 七层监听器实例ID数组，可通过接口DescribeL7Listeners查询。 */
  ListenerIds: string[];
}

declare interface UnbindTrafficMirrorListenersResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindTrafficMirrorReceiversRequest {
  /** 流量镜像实例ID。 */
  TrafficMirrorId: string;
  /** 待绑定的主机实例ID和端口数组。 */
  ReceiverSet: UnbindTrafficMirrorReceiver[];
}

declare interface UnbindTrafficMirrorReceiversResponse {
  /** 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadCertRequest {
  /** 证书类型，可选值：CA，SVR。 */
  CertType: string;
  /** 证书内容。 */
  Cert: string;
  /** 证书别名。 */
  Alias?: string;
  /** 私钥内容，证书类型为SVR时不需要传递。 */
  Key?: string;
}

declare interface UploadCertResponse {
  /** 新建的证书ID。 */
  CertId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bmlb 黑石负载均衡} */
declare interface Bmlb {
  (): Versions;
  /** 绑定黑石服务器到四层监听器 {@link BindL4BackendsRequest} {@link BindL4BackendsResponse} */
  BindL4Backends(data: BindL4BackendsRequest, config?: AxiosRequestConfig): AxiosPromise<BindL4BackendsResponse>;
  /** 绑定黑石物理服务器或半托管服务器到七层转发路径 {@link BindL7BackendsRequest} {@link BindL7BackendsResponse} */
  BindL7Backends(data: BindL7BackendsRequest, config?: AxiosRequestConfig): AxiosPromise<BindL7BackendsResponse>;
  /** 绑定黑石服务器七层监听器到流量镜像实例 {@link BindTrafficMirrorListenersRequest} {@link BindTrafficMirrorListenersResponse} */
  BindTrafficMirrorListeners(data: BindTrafficMirrorListenersRequest, config?: AxiosRequestConfig): AxiosPromise<BindTrafficMirrorListenersResponse>;
  /** 绑定黑石物理服务器成为流量镜像接收机 {@link BindTrafficMirrorReceiversRequest} {@link BindTrafficMirrorReceiversResponse} */
  BindTrafficMirrorReceivers(data: BindTrafficMirrorReceiversRequest, config?: AxiosRequestConfig): AxiosPromise<BindTrafficMirrorReceiversResponse>;
  /** 创建黑石四层负载均衡监听器 {@link CreateL4ListenersRequest} {@link CreateL4ListenersResponse} */
  CreateL4Listeners(data: CreateL4ListenersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL4ListenersResponse>;
  /** 创建黑石负载均衡七层监听器 {@link CreateL7ListenersRequest} {@link CreateL7ListenersResponse} */
  CreateL7Listeners(data: CreateL7ListenersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7ListenersResponse>;
  /** 创建黑石负载均衡七层转发规则 {@link CreateL7RulesRequest} {@link CreateL7RulesResponse} */
  CreateL7Rules(data: CreateL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7RulesResponse>;
  /** 创建黑石负载均衡实例 {@link CreateLoadBalancersRequest} {@link CreateLoadBalancersResponse} */
  CreateLoadBalancers(data: CreateLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoadBalancersResponse>;
  /** 创建流量镜像实例 {@link CreateTrafficMirrorRequest} {@link CreateTrafficMirrorResponse} */
  CreateTrafficMirror(data: CreateTrafficMirrorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTrafficMirrorResponse>;
  /** 删除黑石负载均衡七层转发域名 {@link DeleteL7DomainsRequest} {@link DeleteL7DomainsResponse} */
  DeleteL7Domains(data: DeleteL7DomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL7DomainsResponse>;
  /** 删除黑石负载均衡七层转发规则 {@link DeleteL7RulesRequest} {@link DeleteL7RulesResponse} */
  DeleteL7Rules(data: DeleteL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL7RulesResponse>;
  /** 删除黑石负载均衡监听器 {@link DeleteListenersRequest} {@link DeleteListenersResponse} */
  DeleteListeners(data: DeleteListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenersResponse>;
  /** 删除用户指定的黑石负载均衡实例 {@link DeleteLoadBalancerRequest} {@link DeleteLoadBalancerResponse} */
  DeleteLoadBalancer(data: DeleteLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancerResponse>;
  /** 删除流量镜像实例 {@link DeleteTrafficMirrorRequest} {@link DeleteTrafficMirrorResponse} */
  DeleteTrafficMirror(data: DeleteTrafficMirrorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTrafficMirrorResponse>;
  /** 获取黑石负载均衡证书详情 {@link DescribeCertDetailRequest} {@link DescribeCertDetailResponse} */
  DescribeCertDetail(data: DescribeCertDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertDetailResponse>;
  /** 查询黑石物理机和虚机以及托管服务器绑定的黑石负载均衡详情 {@link DescribeDevicesBindInfoRequest} {@link DescribeDevicesBindInfoResponse} */
  DescribeDevicesBindInfo(data: DescribeDevicesBindInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicesBindInfoResponse>;
  /** 获取黑石负载均衡四层监听器绑定的主机列表 {@link DescribeL4BackendsRequest} {@link DescribeL4BackendsResponse} */
  DescribeL4Backends(data: DescribeL4BackendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL4BackendsResponse>;
  /** 查找绑定了某主机或者指定监听器名称的黑石负载均衡四层监听器 {@link DescribeL4ListenerInfoRequest} {@link DescribeL4ListenerInfoResponse} */
  DescribeL4ListenerInfo(data: DescribeL4ListenerInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL4ListenerInfoResponse>;
  /** 获取黑石负载均衡四层监听器 {@link DescribeL4ListenersRequest} {@link DescribeL4ListenersResponse} */
  DescribeL4Listeners(data: DescribeL4ListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL4ListenersResponse>;
  /** 获取黑石负载均衡七层转发路径绑定的主机列表 {@link DescribeL7BackendsRequest} {@link DescribeL7BackendsResponse} */
  DescribeL7Backends(data: DescribeL7BackendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7BackendsResponse>;
  /** 查找绑定了某主机或者有某转发域名黑石负载均衡七层监听器 {@link DescribeL7ListenerInfoRequest} {@link DescribeL7ListenerInfoResponse} */
  DescribeL7ListenerInfo(data: DescribeL7ListenerInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7ListenerInfoResponse>;
  /** 获取黑石负载均衡七层监听器列表信息 {@link DescribeL7ListenersRequest} {@link DescribeL7ListenersResponse} */
  DescribeL7Listeners(data: DescribeL7ListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7ListenersResponse>;
  /** 获取指定VPC下的7层监听器 {@link DescribeL7ListenersExRequest} {@link DescribeL7ListenersExResponse} */
  DescribeL7ListenersEx(data: DescribeL7ListenersExRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7ListenersExResponse>;
  /** 获取黑石负载均衡七层转发规则 {@link DescribeL7RulesRequest} {@link DescribeL7RulesResponse} */
  DescribeL7Rules(data: DescribeL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7RulesResponse>;
  /** 获取黑石负载均衡端口相关信息 {@link DescribeLoadBalancerPortInfoRequest} {@link DescribeLoadBalancerPortInfoResponse} */
  DescribeLoadBalancerPortInfo(data: DescribeLoadBalancerPortInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancerPortInfoResponse>;
  /** 查询负载均衡实例异步任务的执行情况 {@link DescribeLoadBalancerTaskResultRequest} {@link DescribeLoadBalancerTaskResultResponse} */
  DescribeLoadBalancerTaskResult(data: DescribeLoadBalancerTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancerTaskResultResponse>;
  /** 获取黑石负载均衡实例列表 {@link DescribeLoadBalancersRequest} {@link DescribeLoadBalancersResponse} */
  DescribeLoadBalancers(data?: DescribeLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancersResponse>;
  /** 获取流量镜像的监听器列表信息 {@link DescribeTrafficMirrorListenersRequest} {@link DescribeTrafficMirrorListenersResponse} */
  DescribeTrafficMirrorListeners(data: DescribeTrafficMirrorListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficMirrorListenersResponse>;
  /** 获取流量镜像接收机健康状态 {@link DescribeTrafficMirrorReceiverHealthStatusRequest} {@link DescribeTrafficMirrorReceiverHealthStatusResponse} */
  DescribeTrafficMirrorReceiverHealthStatus(data: DescribeTrafficMirrorReceiverHealthStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficMirrorReceiverHealthStatusResponse>;
  /** 获取指定流量镜像实例的接收机信息 {@link DescribeTrafficMirrorReceiversRequest} {@link DescribeTrafficMirrorReceiversResponse} */
  DescribeTrafficMirrorReceivers(data: DescribeTrafficMirrorReceiversRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficMirrorReceiversResponse>;
  /** 获取流量镜像实例的列表信息 {@link DescribeTrafficMirrorsRequest} {@link DescribeTrafficMirrorsResponse} */
  DescribeTrafficMirrors(data?: DescribeTrafficMirrorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficMirrorsResponse>;
  /** 修改黑石负载均衡四层监听器后端实例端口 {@link ModifyL4BackendPortRequest} {@link ModifyL4BackendPortResponse} */
  ModifyL4BackendPort(data: ModifyL4BackendPortRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4BackendPortResponse>;
  /** 修改黑石负载均衡四层监听器后端探测端口 {@link ModifyL4BackendProbePortRequest} {@link ModifyL4BackendProbePortResponse} */
  ModifyL4BackendProbePort(data: ModifyL4BackendProbePortRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4BackendProbePortResponse>;
  /** 修改黑石负载均衡四层监听器后端实例权重 {@link ModifyL4BackendWeightRequest} {@link ModifyL4BackendWeightResponse} */
  ModifyL4BackendWeight(data: ModifyL4BackendWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4BackendWeightResponse>;
  /** 修改黑石负载均衡四层监听器 {@link ModifyL4ListenerRequest} {@link ModifyL4ListenerResponse} */
  ModifyL4Listener(data: ModifyL4ListenerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4ListenerResponse>;
  /** 修改黑石负载均衡七层转发路径后端实例端口 {@link ModifyL7BackendPortRequest} {@link ModifyL7BackendPortResponse} */
  ModifyL7BackendPort(data: ModifyL7BackendPortRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7BackendPortResponse>;
  /** 修改黑石负载均衡七层转发路径后端实例权重 {@link ModifyL7BackendWeightRequest} {@link ModifyL7BackendWeightResponse} */
  ModifyL7BackendWeight(data: ModifyL7BackendWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7BackendWeightResponse>;
  /** 修改黑石负载均衡七层监听器 {@link ModifyL7ListenerRequest} {@link ModifyL7ListenerResponse} */
  ModifyL7Listener(data: ModifyL7ListenerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7ListenerResponse>;
  /** 修改黑石负载均衡七层转发路径 {@link ModifyL7LocationsRequest} {@link ModifyL7LocationsResponse} */
  ModifyL7Locations(data: ModifyL7LocationsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7LocationsResponse>;
  /** 修改黑石负载均衡实例的基本配置信息 {@link ModifyLoadBalancerRequest} {@link ModifyLoadBalancerResponse} */
  ModifyLoadBalancer(data: ModifyLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerResponse>;
  /** 更改黑石负载均衡的计费方式 {@link ModifyLoadBalancerChargeModeRequest} {@link ModifyLoadBalancerChargeModeResponse} */
  ModifyLoadBalancerChargeMode(data: ModifyLoadBalancerChargeModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerChargeModeResponse>;
  /** 更新黑石负载均衡证书 {@link ReplaceCertRequest} {@link ReplaceCertResponse} */
  ReplaceCert(data: ReplaceCertRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceCertResponse>;
  /** 设置流量镜像的别名 {@link SetTrafficMirrorAliasRequest} {@link SetTrafficMirrorAliasResponse} */
  SetTrafficMirrorAlias(data: SetTrafficMirrorAliasRequest, config?: AxiosRequestConfig): AxiosPromise<SetTrafficMirrorAliasResponse>;
  /** 设置流量镜像的健康检查参数 {@link SetTrafficMirrorHealthSwitchRequest} {@link SetTrafficMirrorHealthSwitchResponse} */
  SetTrafficMirrorHealthSwitch(data: SetTrafficMirrorHealthSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<SetTrafficMirrorHealthSwitchResponse>;
  /** 解绑黑石负载均衡四层监听器物理服务器 {@link UnbindL4BackendsRequest} {@link UnbindL4BackendsResponse} */
  UnbindL4Backends(data: UnbindL4BackendsRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindL4BackendsResponse>;
  /** 解绑黑石物理服务器或者托管服务器到七层转发路径 {@link UnbindL7BackendsRequest} {@link UnbindL7BackendsResponse} */
  UnbindL7Backends(data: UnbindL7BackendsRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindL7BackendsResponse>;
  /** 解绑流量镜像监听器 {@link UnbindTrafficMirrorListenersRequest} {@link UnbindTrafficMirrorListenersResponse} */
  UnbindTrafficMirrorListeners(data: UnbindTrafficMirrorListenersRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindTrafficMirrorListenersResponse>;
  /** 解绑流量镜像接收机 {@link UnbindTrafficMirrorReceiversRequest} {@link UnbindTrafficMirrorReceiversResponse} */
  UnbindTrafficMirrorReceivers(data: UnbindTrafficMirrorReceiversRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindTrafficMirrorReceiversResponse>;
  /** 创建黑石负载均衡证书 {@link UploadCertRequest} {@link UploadCertResponse} */
  UploadCert(data: UploadCertRequest, config?: AxiosRequestConfig): AxiosPromise<UploadCertResponse>;
}

export declare type Versions = ["2018-06-25"];

export default Bmlb;
