/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 巴拉多返回的数据 */
declare interface BaradData {
  /** 指标名（connum表示TCP活跃连接数；new_conn表示新建TCP连接数；inactive_conn表示非活跃连接数;intraffic表示入流量；outtraffic表示出流量；alltraffic表示出流量和入流量之和；inpkg表示入包速率；outpkg表示出包速率；） */
  MetricName: string;
  /** 值数组 */
  Data: number[];
  /** 值数组的大小 */
  Count: number;
}

/** 高防包绑定IP对象 */
declare interface BoundIpInfo {
  /** IP地址 */
  Ip: string;
  /** 绑定的产品分类，取值[public（CVM、CLB产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)] */
  BizType?: string;
  /** 产品分类下的子类型，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）] */
  DeviceType?: string;
  /** IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); 如果绑定的是托管IP没有对应的资源实例ID，请填写"none"; */
  InstanceId?: string;
  /** 运营商，0：电信；1：联通；2：移动；5：BGP */
  IspCode?: number;
}

/** CC告警阈值 */
declare interface CCAlarmThreshold {
  /** CC告警阈值 */
  AlarmThreshold: number;
}

/** CC攻击事件记录 */
declare interface CCEventRecord {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 资源的IP */
  Vip: string;
  /** 攻击开始时间 */
  StartTime: string;
  /** 攻击结束时间 */
  EndTime: string;
  /** 总请求QPS峰值 */
  ReqQps: number;
  /** 攻击QPS峰值 */
  DropQps: number;
  /** 攻击状态，取值[0（攻击中）, 1（攻击结束）] */
  AttackStatus: number;
  /** 资源名称 */
  ResourceName: string | null;
  /** 域名列表 */
  DomainList: string | null;
  /** uri列表 */
  UriList: string | null;
  /** 攻击源列表 */
  AttackipList: string | null;
}

/** CC的访问频率控制规则 */
declare interface CCFrequencyRule {
  /** CC的访问频率控制规则ID */
  CCFrequencyRuleId: string;
  /** URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配； */
  Uri: string;
  /** User-Agent字符串，长度不超过80 */
  UserAgent: string;
  /** Cookie字符串，长度不超过40 */
  Cookie: string;
  /** 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)] */
  Mode: string;
  /** 统计周期，单位秒，取值[10, 30, 60] */
  Period: number;
  /** 访问次数，取值[1-10000] */
  ReqNumber: number;
  /** 执行动作，取值["alg"（人机识别）, "drop"（拦截）] */
  Act: string;
  /** 执行时间，单位秒，取值[1-900] */
  ExeDuration: number;
}

/** cc自定义规则 */
declare interface CCPolicy {
  /** 策略名称 */
  Name: string;
  /** 匹配模式，取值[matching(匹配模式), speedlimit(限速模式)] */
  Smode: string;
  /** 策略id */
  SetId?: string;
  /** 每分钟限制的次数 */
  Frequency?: number;
  /** 执行策略模式，拦截或者验证码，取值[alg（验证码）, drop（拦截）] */
  ExeMode?: string;
  /** 生效开关 */
  Switch?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 规则列表 */
  RuleList?: CCRule[];
  /** IP列表，如果不填时，请传空数组但不能为null； */
  IpList?: string[];
  /** cc防护类型，取值[http，https] */
  Protocol?: string;
  /** 可选字段，表示HTTPS的CC防护域名对应的转发规则ID; */
  RuleId?: string;
  /** HTTPS的CC防护域名 */
  Domain?: string;
}

/** cc自定义策略配置的规则 */
declare interface CCRule {
  /** 规则的key, 可以为host、cgi、ua、referer */
  Skey: string;
  /** 规则的条件，可以为include、not_include、equal */
  Operator: string;
  /** 规则的值，长度小于31字节 */
  Value: string;
}

/** 7层CC自定义规则 */
declare interface CCRuleConfig {
  /** 统计周期，单位秒，取值[10, 30, 60] */
  Period: number;
  /** 访问次数，取值[1-10000] */
  ReqNumber: number;
  /** 执行动作，取值["alg"（人机识别）, "drop"（拦截）] */
  Action: string;
  /** 执行时间，单位秒，取值[1-900] */
  ExeDuration: number;
}

/** DDoS告警阈值 */
declare interface DDoSAlarmThreshold {
  /** 告警阈值类型，1-入流量，2-清洗流量 */
  AlarmType: number;
  /** 告警阈值，大于0（目前排定的值） */
  AlarmThreshold: number;
}

/** 攻击源信息 */
declare interface DDoSAttackSourceRecord {
  /** 攻击源ip */
  SrcIp: string;
  /** 省份（国内有效，不包含港澳台） */
  Province: string;
  /** 国家 */
  Nation: string;
  /** 累计攻击包量 */
  PacketSum: number;
  /** 累计攻击流量 */
  PacketLen: number;
}

/** DDoS攻击事件记录 */
declare interface DDoSEventRecord {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 资源的IP */
  Vip: string;
  /** 攻击开始时间 */
  StartTime: string;
  /** 攻击结束时间 */
  EndTime: string;
  /** 攻击最大带宽 */
  Mbps: number;
  /** 攻击最大包速率 */
  Pps: number;
  /** 攻击类型 */
  AttackType: string;
  /** 是否被封堵，取值[1（是），0（否），2（无效值）] */
  BlockFlag: number;
  /** 是否超过弹性防护峰值，取值取值[yes(是)，no(否)，空字符串（未知值）] */
  OverLoad: string;
  /** 攻击状态，取值[0（攻击中）, 1（攻击结束）] */
  AttackStatus: number;
  /** 资源名称 */
  ResourceName: string | null;
  /** 攻击事件Id */
  EventId: string | null;
}

/** DDoS高级策略的禁用协议选项 */
declare interface DDoSPolicyDropOption {
  /** 禁用TCP协议，取值范围[0,1] */
  DropTcp: number;
  /** 禁用UDP协议，取值范围[0,1] */
  DropUdp: number;
  /** 禁用ICMP协议，取值范围[0,1] */
  DropIcmp: number;
  /** 禁用其他协议，取值范围[0,1] */
  DropOther: number;
  /** 拒绝海外流量，取值范围[0,1] */
  DropAbroad: number;
  /** 空连接防护，取值范围[0,1] */
  CheckSyncConn: number;
  /** 基于来源IP及目的IP的新建连接抑制，取值范围[0,4294967295] */
  SdNewLimit?: number;
  /** 基于目的IP的新建连接抑制，取值范围[0,4294967295] */
  DstNewLimit?: number;
  /** 基于来源IP及目的IP的并发连接抑制，取值范围[0,4294967295] */
  SdConnLimit?: number;
  /** 基于目的IP的并发连接抑制，取值范围[0,4294967295] */
  DstConnLimit?: number;
  /** 基于连接抑制触发阈值，取值范围[0,4294967295] */
  BadConnThreshold?: number;
  /** 异常连接检测条件，空连接防护开关，，取值范围[0,1] */
  NullConnEnable?: number;
  /** 异常连接检测条件，连接超时，，取值范围[0,65535] */
  ConnTimeout?: number;
  /** 异常连接检测条件，syn占比ack百分比，，取值范围[0,100] */
  SynRate?: number;
  /** 异常连接检测条件，syn阈值，取值范围[0,100] */
  SynLimit?: number;
  /** tcp限速，取值范围[0,4294967295] */
  DTcpMbpsLimit?: number;
  /** udp限速，取值范围[0,4294967295] */
  DUdpMbpsLimit?: number;
  /** icmp限速，取值范围[0,4294967295] */
  DIcmpMbpsLimit?: number;
  /** other协议限速，取值范围[0,4294967295] */
  DOtherMbpsLimit?: number;
}

/** DDoS高级策略的报文过滤项 */
declare interface DDoSPolicyPacketFilter {
  /** 协议，取值范围[tcp,udp,icmp,all] */
  Protocol: string;
  /** 开始源端口，取值范围[0,65535] */
  SportStart: number;
  /** 结束源端口，取值范围[0,65535] */
  SportEnd: number;
  /** 开始目的端口，取值范围[0,65535] */
  DportStart: number;
  /** 结束目的端口，取值范围[0,65535] */
  DportEnd: number;
  /** 最小包长，取值范围[0,1500] */
  PktlenMin: number;
  /** 最大包长，取值范围[0,1500] */
  PktlenMax: number;
  /** 是否检测载荷，取值范围[begin_l3(IP头)begin_l4(TCP头)begin_l5(载荷)no_match(不检测)] */
  MatchBegin: string;
  /** 是否是正则表达式，取值范围[sunday(表示关键字),pcre(表示正则表达式)] */
  MatchType: string;
  /** 关键字或正则表达式 */
  Str: string;
  /** 检测深度，取值范围[0,1500] */
  Depth: number;
  /** 检测偏移量，取值范围[0,1500] */
  Offset: number;
  /** 是否包括，取值范围[0(表示不包含),1(表示包含)] */
  IsNot: number;
  /** 策略动作，取值范围[drop，drop_black，drop_rst，drop_black_rst，transmit] */
  Action: string;
}

/** DDoS高级策略的禁用端口 */
declare interface DDoSPolicyPortLimit {
  /** 协议，取值范围[tcp,udp,all] */
  Protocol: string;
  /** 开始目的端口，取值范围[0,65535] */
  DPortStart: number;
  /** 结束目的端口，取值范围[0,65535]，要求大于等于开始目的端口 */
  DPortEnd: number;
  /** 开始源端口，取值范围[0,65535] */
  SPortStart?: number | null;
  /** 结束源端口，取值范围[0,65535]，要求大于等于开始源端口 */
  SPortEnd?: number | null;
  /** 执行动作，取值[drop(丢弃) ，transmit(转发)] */
  Action?: string | null;
  /** 禁用端口类型，取值[0（目的端口范围禁用）， 1（源端口范围禁用）， 2（目的和源端口范围同时禁用）] */
  Kind?: number | null;
}

/** DDoS高级策略 */
declare interface DDosPolicy {
  /** 策略绑定的资源 */
  Resources: ResourceIp[];
  /** 禁用协议 */
  DropOptions: DDoSPolicyDropOption;
  /** 禁用端口 */
  PortLimits: DDoSPolicyPortLimit[];
  /** 报文过滤 */
  PacketFilters: DDoSPolicyPacketFilter[];
  /** 黑白IP名单 */
  IpBlackWhiteLists: IpBlackWhite[];
  /** 策略ID */
  PolicyId: string;
  /** 策略名称 */
  PolicyName: string;
  /** 策略创建时间 */
  CreateTime: string;
  /** 水印策略参数，最多只有一个，当没有水印策略时数组为空 */
  WaterPrint: WaterPrintPolicy[];
  /** 水印密钥，最多只有2个，当没有水印策略时数组为空 */
  WaterKey: WaterPrintKey[];
  /** 策略绑定的资源实例 */
  BoundResources: string[] | null;
  /** 策略所属的策略场景 */
  SceneId: string | null;
}

/** 业务流量的http状态码聚合数据 */
declare interface HttpStatusMap {
  /** http2xx状态码 */
  Http2xx: number[];
  /** http3xx状态码 */
  Http3xx: number[];
  /** http404状态码 */
  Http404: number[];
  /** http4xx状态码 */
  Http4xx: number[];
  /** http5xx状态码 */
  Http5xx: number[];
  /** http2xx回源状态码 */
  SourceHttp2xx: number[];
  /** http3xx回源状态码 */
  SourceHttp3xx: number[];
  /** http404回源状态码 */
  SourceHttp404: number[];
  /** http4xx回源状态码 */
  SourceHttp4xx: number[];
  /** http5xx回源状态码 */
  SourceHttp5xx: number[];
}

/** 黑白IP */
declare interface IpBlackWhite {
  /** IP地址 */
  Ip: string;
  /** 黑白类型，取值范围[black，white] */
  Type: string;
}

/** IP封堵记录 */
declare interface IpBlockData {
  /** IP */
  Ip: string;
  /** 状态（Blocked：被封堵；UnBlocking：解封中；UnBlockFailed：解封失败） */
  Status: string;
  /** 封堵时间 */
  BlockTime: string;
  /** 解封时间（预计解封时间） */
  UnBlockTime: string;
  /** 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封） */
  ActionType: string;
}

/** IP解封记录 */
declare interface IpUnBlockData {
  /** IP */
  Ip: string;
  /** 封堵时间 */
  BlockTime: string;
  /** 解封时间（实际解封时间） */
  UnBlockTime: string;
  /** 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封） */
  ActionType: string;
}

/** 字段值，K-V形式 */
declare interface KeyValue {
  /** 字段名称 */
  Key: string;
  /** 字段取值 */
  Value: string;
}

/** KeyValue记录 */
declare interface KeyValueRecord {
  /** 一条记录的Key-Value数组 */
  Record: KeyValue[];
}

/** 删除l4规则接口 */
declare interface L4DelRule {
  /** 资源Id */
  Id: string;
  /** 资源IP */
  Ip: string;
  /** 规则Id */
  RuleIdList: string[];
}

/** 四层健康检查配置 */
declare interface L4HealthConfig {
  /** 转发协议，取值[TCP, UDP] */
  Protocol: string;
  /** 转发端口 */
  VirtualPort: number;
  /** =1表示开启；=0表示关闭 */
  Enable: number;
  /** 响应超时时间，单位秒 */
  TimeOut: number;
  /** 检测间隔时间，单位秒 */
  Interval: number;
  /** 不健康阈值，单位次 */
  KickNum: number;
  /** 健康阈值，单位次 */
  AliveNum: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
}

/** L4规则 */
declare interface L4RuleEntry {
  /** 转发协议，取值[TCP, UDP] */
  Protocol: string;
  /** 转发端口 */
  VirtualPort: number;
  /** 源站端口 */
  SourcePort: number;
  /** 回源方式，取值[1(域名回源)，2(IP回源)] */
  SourceType: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
  /** 回源列表 */
  SourceList: L4RuleSource[];
  /** 负载均衡方式，取值[1(加权轮询)，2(源IP hash)] */
  LbType: number;
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]； */
  KeepEnable: number;
  /** 规则ID */
  RuleId?: string;
  /** 规则描述 */
  RuleName?: string;
  /** 移除水印状态，取值[0(关闭)，1(开启)] */
  RemoveSwitch?: number;
}

/** 规则健康检查参数 */
declare interface L4RuleHealth {
  /** 规则ID */
  RuleId: string;
  /** =1表示开启；=0表示关闭 */
  Enable: number;
  /** 响应超时时间，单位秒 */
  TimeOut: number;
  /** 检测间隔时间，单位秒，必须要大于响应超时时间 */
  Interval: number;
  /** 不健康阈值，单位次 */
  KickNum: number;
  /** 健康阈值，单位次 */
  AliveNum: number;
}

/** L4规则回源列表 */
declare interface L4RuleSource {
  /** 回源IP或域名 */
  Source: string;
  /** 权重值，取值[0,100] */
  Weight: number;
}

/** 七层健康检查配置 */
declare interface L7HealthConfig {
  /** 转发协议，取值[http, https, http/https] */
  Protocol: string;
  /** 转发域名 */
  Domain: string;
  /** =1表示开启；=0表示关闭 */
  Enable: number;
  /** 检测间隔时间，单位秒 */
  Interval: number;
  /** 异常判定次数，单位次 */
  KickNum: number;
  /** 健康判定次数，单位次 */
  AliveNum: number;
  /** 健康检查探测方法，可选HEAD或GET，默认为HEAD */
  Method: string;
  /** 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和 */
  StatusCode: number;
  /** 检查目录的URL，默认为/ */
  Url: string;
}

/** L7规则 */
declare interface L7RuleEntry {
  /** 转发协议，取值[http, https] */
  Protocol: string;
  /** 转发域名 */
  Domain: string;
  /** 回源方式，取值[1(域名回源)，2(IP回源)] */
  SourceType: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
  /** 回源列表 */
  SourceList: L4RuleSource[];
  /** 负载均衡方式，取值[1(加权轮询)] */
  LbType: number;
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)] */
  KeepEnable: number;
  /** 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段； */
  RuleId?: string;
  /** 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0 */
  CertType?: number;
  /** 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID */
  SSLId?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  Cert?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  PrivateKey?: string;
  /** 规则描述 */
  RuleName?: string;
  /** 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  Status?: number;
  /** cc防护状态，取值[0(关闭), 1(开启)] */
  CCStatus?: number;
  /** HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)] */
  CCEnable?: number;
  /** HTTPS协议的CC防护阈值 */
  CCThreshold?: number;
  /** HTTPS协议的CC防护等级 */
  CCLevel?: string;
  /** 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭 */
  HttpsToHttpEnable?: number | null;
  /** 接入端口值 */
  VirtualPort?: number | null;
}

/** L7规则健康检查参数 */
declare interface L7RuleHealth {
  /** 规则ID */
  RuleId: string;
  /** =1表示开启；=0表示关闭 */
  Enable: number;
  /** 检测间隔时间，单位秒 */
  Interval: number;
  /** 不健康阈值，单位次 */
  KickNum: number;
  /** 健康阈值，单位次 */
  AliveNum: number;
  /** HTTP请求方式，取值[HEAD,GET] */
  Method: string;
  /** 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和 */
  StatusCode: number;
  /** 检查目录的URL，默认为/ */
  Url: string;
  /** 配置状态，0： 正常，1：配置中，2：配置失败 */
  Status: number;
}

/** 四层规则结构体 */
declare interface NewL4RuleEntry {
  /** 转发协议，取值[TCP, UDP] */
  Protocol: string;
  /** 转发端口 */
  VirtualPort: number;
  /** 源站端口 */
  SourcePort: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
  /** 回源列表 */
  SourceList: L4RuleSource[];
  /** 负载均衡方式，取值[1(加权轮询)，2(源IP hash)] */
  LbType: number;
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]； */
  KeepEnable: number;
  /** 回源方式，取值[1(域名回源)，2(IP回源)] */
  SourceType: number;
  /** 规则ID */
  RuleId?: string;
  /** 规则描述 */
  RuleName?: string;
  /** 移除水印状态，取值[0(关闭)，1(开启)] */
  RemoveSwitch?: number;
  /** 规则修改时间 */
  ModifyTime?: string;
  /** 对应地区信息 */
  Region?: number;
  /** 绑定资源IP信息 */
  Ip?: string;
  /** 绑定资源Id信息 */
  Id?: string;
}

/** L7规则 */
declare interface NewL7RuleEntry {
  /** 转发协议，取值[http, https] */
  Protocol: string;
  /** 转发域名 */
  Domain: string;
  /** 回源方式，取值[1(域名回源)，2(IP回源)] */
  SourceType: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
  /** 回源列表 */
  SourceList: L4RuleSource[];
  /** 负载均衡方式，取值[1(加权轮询)] */
  LbType: number;
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)] */
  KeepEnable: number;
  /** 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段； */
  RuleId?: string;
  /** 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0 */
  CertType?: number;
  /** 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID */
  SSLId?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  Cert?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  PrivateKey?: string;
  /** 规则描述 */
  RuleName?: string;
  /** 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  Status?: number;
  /** cc防护状态，取值[0(关闭), 1(开启)] */
  CCStatus?: number;
  /** HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)] */
  CCEnable?: number;
  /** HTTPS协议的CC防护阈值 */
  CCThreshold?: number;
  /** HTTPS协议的CC防护等级 */
  CCLevel?: string;
  /** 区域码 */
  Region?: number;
  /** 资源Id */
  Id?: string;
  /** 资源Ip */
  Ip?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭 */
  HttpsToHttpEnable?: number;
  /** 接入端口值 */
  VirtualPort?: number | null;
}

/** 排序字段 */
declare interface OrderBy {
  /** 排序字段名称，取值[bandwidth（带宽），overloadCount（超峰值次数）] */
  Field: string;
  /** 升降序，取值为[asc（升序），（升序），desc（降序）， DESC（降序）] */
  Order: string;
}

/** 分页索引 */
declare interface Paging {
  /** 起始位置 */
  Offset: number;
  /** 数量 */
  Limit: number;
}

/** Protocol、Port参数 */
declare interface ProtocolPort {
  /** 协议（tcp；udp） */
  Protocol: string;
  /** 端口 */
  Port: number;
}

/** 地域资源实例数 */
declare interface RegionInstanceCount {
  /** 地域码 */
  Region: string;
  /** 地域码（新规范） */
  RegionV3: string;
  /** 资源实例数 */
  Count: number;
}

/** 资源的IP数组 */
declare interface ResourceIp {
  /** 资源ID */
  Id: string;
  /** 资源的IP数组 */
  IpList?: string[];
}

/** 调度域名信息 */
declare interface SchedulingDomain {
  /** 调度域名 */
  Domain: string;
  /** BGP线路IP列表 */
  BGPIpList: string[];
  /** 电信线路IP列表 */
  CTCCIpList: string[];
  /** 联通线路IP列表 */
  CUCCIpList: string[];
  /** 移动线路IP列表 */
  CMCCIpList: string[];
  /** 海外线路IP列表 */
  OverseaIpList: string[];
  /** 调度方式，当前仅支持优先级, 取值为priority */
  Method: string;
  /** 创建时间 */
  CreateTime: string;
  /** ttl */
  TTL: number;
  /** 状态 */
  Status: number | null;
  /** 修改时间 */
  ModifyTime: string | null;
}

/** 操作返回码，只用于返回成功的情况 */
declare interface SuccessCode {
  /** 成功/错误码 */
  Code: string;
  /** 描述 */
  Message: string;
}

/** 水印Key */
declare interface WaterPrintKey {
  /** 水印KeyID */
  KeyId: string;
  /** 水印Key值 */
  KeyContent: string;
  /** 水印Key的版本号 */
  KeyVersion: string;
  /** 是否开启，取值[0（没有开启），1（已开启）] */
  OpenStatus: number;
  /** 密钥生成时间 */
  CreateTime: string;
}

/** 水印策略参数 */
declare interface WaterPrintPolicy {
  /** TCP端口段，例如["2000-3000","3500-4000"] */
  TcpPortList: string[];
  /** UDP端口段，例如["2000-3000","3500-4000"] */
  UdpPortList: string[];
  /** 水印偏移量，取值范围[0, 100) */
  Offset: number;
  /** 是否自动剥离，取值[0（不自动剥离），1（自动剥离）] */
  RemoveSwitch: number;
  /** 是否开启，取值[0（没有开启），1（已开启）] */
  OpenStatus: number;
}

declare interface CreateBasicDDoSAlarmThresholdRequest {
  /** 大禹子产品代号（basic表示DDoS基础防护） */
  Business: string;
  /** =get表示读取告警阈值；=set表示设置告警阈值； */
  Method: string;
  /** 可选，告警阈值类型，1-入流量，2-清洗流量；当Method为set时必须填写； */
  AlarmType?: number;
  /** 可选，告警阈值，当Method为set时必须填写；当设置阈值为0时表示清除告警阈值配置； */
  AlarmThreshold?: number;
}

declare interface CreateBasicDDoSAlarmThresholdResponse {
  /** 当存在告警阈值配置时，返回告警阈值大于0，当不存在告警配置时，返回告警阈值为0； */
  AlarmThreshold?: number;
  /** 告警阈值类型，1-入流量，2-清洗流量；当AlarmThreshold大于0时有效； */
  AlarmType?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBoundIPRequest {
  /** 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包） */
  Business: string;
  /** 资源实例ID */
  Id: string;
  /** 绑定到资源实例的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要绑定的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空； */
  BoundDevList?: BoundIpInfo[];
  /** 与资源实例解绑的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要解绑的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空； */
  UnBoundDevList?: BoundIpInfo[];
  /** 已弃用，不填 */
  CopyPolicy?: string;
}

declare interface CreateBoundIPResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCCFrequencyRulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID） */
  RuleId: string;
  /** 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)] */
  Mode: string;
  /** 统计周期，单位秒，取值[10, 30, 60] */
  Period: number;
  /** 访问次数，取值[1-10000] */
  ReqNumber: number;
  /** 执行动作，取值["alg"（人机识别）, "drop"（拦截）] */
  Act: string;
  /** 执行时间，单位秒，取值[1-900] */
  ExeDuration: number;
  /** URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配； */
  Uri?: string;
  /** User-Agent字符串，长度不超过80 */
  UserAgent?: string;
  /** Cookie字符串，长度不超过40 */
  Cookie?: string;
}

declare interface CreateCCFrequencyRulesResponse {
  /** CC防护的访问频率控制规则ID */
  CCFrequencyRuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCCSelfDefinePolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** CC策略描述 */
  Policy: CCPolicy;
}

declare interface CreateCCSelfDefinePolicyResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDDoSPolicyCaseRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略场景名，字符串长度小于64 */
  CaseName: string;
  /** 开发平台，取值[PC（PC客户端）， MOBILE（移动端）， TV（电视端）， SERVER（主机）] */
  PlatformTypes?: string[];
  /** 细分品类，取值[WEB（网站）， GAME（游戏）， APP（应用）， OTHER（其他）] */
  AppType?: string;
  /** 应用协议，取值[tcp（TCP协议），udp（UDP协议），icmp（ICMP协议），all（其他协议）] */
  AppProtocols?: string[];
  /** TCP业务起始端口，取值(0, 65535] */
  TcpSportStart?: string;
  /** TCP业务结束端口，取值(0, 65535]，必须大于等于TCP业务起始端口 */
  TcpSportEnd?: string;
  /** UDP业务起始端口，取值范围(0, 65535] */
  UdpSportStart?: string;
  /** UDP业务结束端口，取值范围(0, 65535)，必须大于等于UDP业务起始端口 */
  UdpSportEnd?: string;
  /** 是否有海外客户，取值[no（没有）, yes（有）] */
  HasAbroad?: string;
  /** 是否会主动对外发起TCP请求，取值[no（不会）, yes（会）] */
  HasInitiateTcp?: string;
  /** 是否会主动对外发起UDP业务请求，取值[no（不会）, yes（会）] */
  HasInitiateUdp?: string;
  /** 主动发起TCP请求的端口，取值范围(0, 65535] */
  PeerTcpPort?: string;
  /** 主动发起UDP请求的端口，取值范围(0, 65535] */
  PeerUdpPort?: string;
  /** TCP载荷的固定特征码，字符串长度小于512 */
  TcpFootprint?: string;
  /** UDP载荷的固定特征码，字符串长度小于512 */
  UdpFootprint?: string;
  /** Web业务的API的URL */
  WebApiUrl?: string[];
  /** TCP业务报文长度最小值，取值范围(0, 1500) */
  MinTcpPackageLen?: string;
  /** TCP业务报文长度最大值，取值范围(0, 1500)，必须大于等于TCP业务报文长度最小值 */
  MaxTcpPackageLen?: string;
  /** UDP业务报文长度最小值，取值范围(0, 1500) */
  MinUdpPackageLen?: string;
  /** UDP业务报文长度最大值，取值范围(0, 1500)，必须大于等于UDP业务报文长度最小值 */
  MaxUdpPackageLen?: string;
  /** 是否有VPN业务，取值[no（没有）, yes（有）] */
  HasVPN?: string;
  /** TCP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000 */
  TcpPortList?: string;
  /** UDP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000 */
  UdpPortList?: string;
}

declare interface CreateDDoSPolicyCaseResponse {
  /** 策略场景ID */
  SceneId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDDoSPolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 协议禁用，必须填写且数组长度必须为1 */
  DropOptions: DDoSPolicyDropOption[];
  /** 策略名称 */
  Name?: string;
  /** 端口禁用，当没有禁用端口时填空数组 */
  PortLimits?: DDoSPolicyPortLimit[];
  /** 请求源IP黑白名单，当没有IP黑白名单时填空数组 */
  IpAllowDenys?: IpBlackWhite[];
  /** 报文过滤，当没有报文过滤时填空数组 */
  PacketFilters?: DDoSPolicyPacketFilter[];
  /** 水印策略参数，当没有启用水印功能时填空数组，最多只能传一条水印策略（即数组大小不超过1） */
  WaterPrint?: WaterPrintPolicy[];
}

declare interface CreateDDoSPolicyResponse {
  /** 策略ID */
  PolicyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceNameRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 资源实例名称，长度不超过32个字符 */
  Name: string;
}

declare interface CreateInstanceNameResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL4HealthConfigRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 四层健康检查配置数组 */
  HealthConfig: L4HealthConfig[];
}

declare interface CreateL4HealthConfigResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL4RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则列表 */
  Rules: L4RuleEntry[];
}

declare interface CreateL4RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7CCRuleRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 操作码，取值[query(表示查询)，add(表示添加)，del(表示删除)] */
  Method: string;
  /** 7层转发规则ID，例如：rule-0000001 */
  RuleId: string;
  /** 7层CC自定义规则参数，当操作码为query时，可以不用填写；当操作码为add或del时，必须填写，且数组长度只能为1； */
  RuleConfig?: CCRuleConfig[];
}

declare interface CreateL7CCRuleResponse {
  /** 7层CC自定义规则参数，当没有开启CC自定义规则时，返回空数组 */
  RuleConfig?: CCRuleConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7HealthConfigRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 七层健康检查配置数组 */
  HealthConfig: L7HealthConfig[];
}

declare interface CreateL7HealthConfigResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7RuleCertRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源实例ID，例如高防IP实例的ID，高防IP专业版实例的ID */
  Id: string;
  /** 规则ID */
  RuleId: string;
  /** 证书类型，当为协议为HTTPS协议时必须填，取值[2(腾讯云托管证书)] */
  CertType: number;
  /** 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID */
  SSLId?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  Cert?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  PrivateKey?: string;
}

declare interface CreateL7RuleCertResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则列表 */
  Rules: L7RuleEntry[];
}

declare interface CreateL7RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7RulesUploadRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则列表 */
  Rules: L7RuleEntry[];
}

declare interface CreateL7RulesUploadResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNetReturnRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源实例ID */
  Id: string;
}

declare interface CreateNetReturnResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNewL4RulesRequest {
  /** 高防产品代号：bgpip */
  Business: string;
  /** 添加规则资源列表 */
  IdList: string[];
  /** 添加规则IP列表 */
  VipList: string[];
  /** 规则列表 */
  Rules: L4RuleEntry[];
}

declare interface CreateNewL4RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNewL7RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源ID列表 */
  IdList: string[];
  /** 资源IP列表 */
  VipList: string[];
  /** 规则列表 */
  Rules: L7RuleEntry[];
}

declare interface CreateNewL7RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNewL7RulesUploadRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源ID列表 */
  IdList: string[];
  /** 资源IP列表 */
  VipList: string[];
  /** 规则列表 */
  Rules: L7RuleEntry[];
}

declare interface CreateNewL7RulesUploadResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUnblockIpRequest {
  /** IP */
  Ip: string;
  /** 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封） */
  ActionType: string;
}

declare interface CreateUnblockIpResponse {
  /** IP */
  Ip?: string;
  /** 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封） */
  ActionType?: string;
  /** 解封时间（预计解封时间） */
  UnblockTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCCFrequencyRulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** CC防护的访问频率控制规则ID */
  CCFrequencyRuleId: string;
}

declare interface DeleteCCFrequencyRulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCCSelfDefinePolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 策略ID */
  SetId: string;
}

declare interface DeleteCCSelfDefinePolicyResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDDoSPolicyCaseRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略场景ID */
  SceneId: string;
}

declare interface DeleteDDoSPolicyCaseResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDDoSPolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略ID */
  PolicyId: string;
}

declare interface DeleteDDoSPolicyResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL4RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID列表 */
  RuleIdList: string[];
}

declare interface DeleteL4RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL7RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID列表 */
  RuleIdList: string[];
}

declare interface DeleteL7RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNewL4RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 删除接口结构体 */
  Rule: L4DelRule[];
}

declare interface DeleteNewL4RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNewL7RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP) */
  Business: string;
  /** 删除规则列表 */
  Rule: L4DelRule[];
}

declare interface DeleteNewL7RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActionLogRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business?: string;
  /** 搜索值，只支持资源ID或用户UIN */
  Filter?: string;
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
}

declare interface DescribeActionLogResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 记录数组 */
  Data?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBGPIPL7RuleMaxCntRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源实例ID */
  Id: string;
}

declare interface DescribeBGPIPL7RuleMaxCntResponse {
  /** 高防IP最多可添加的7层规则数量 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaradDataRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源实例ID */
  Id: string;
  /** 指标名，取值：connum表示TCP活跃连接数；new_conn表示新建TCP连接数；inactive_conn表示非活跃连接数;intraffic表示入流量；outtraffic表示出流量；alltraffic表示出流量和入流量之和；inpkg表示入包速率；outpkg表示出包速率； */
  MetricName: string;
  /** 统计时间粒度，单位秒（300表示5分钟；3600表示小时；86400表示天） */
  Period: number;
  /** 统计开始时间，秒部分保持为0，分钟部分为5的倍数 */
  StartTime: string;
  /** 统计结束时间，秒部分保持为0，分钟部分为5的倍数 */
  EndTime: string;
  /** 统计方式，取值：max表示最大值；min表示最小值；avg表示均值； */
  Statistics: string;
  /** 协议端口数组 */
  ProtocolPort?: ProtocolPort[];
  /** 资源实例下的IP，只有当Business=net(高防IP专业版)时才必须填写资源的一个IP（因为高防IP专业版资源实例有多个IP，才需要指定）； */
  Ip?: string;
}

declare interface DescribeBaradDataResponse {
  /** 返回指标的值 */
  DataList?: BaradData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBasicCCThresholdRequest {
  /** 查询的IP地址，取值如：1.1.1.1 */
  BasicIp: string;
  /** 查询IP所属地域，取值如：gz、bj、sh、hk等地域缩写 */
  BasicRegion: string;
  /** 专区类型，取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。 */
  BasicBizType: string;
  /** 设备类型，取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel. */
  BasicDeviceType: string;
  /** 可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取） */
  BasicIpInstance?: string;
  /** 可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5） */
  BasicIspCode?: number;
}

declare interface DescribeBasicCCThresholdResponse {
  /** CC启动开关（0:关闭；1:开启） */
  CCEnable?: number;
  /** CC防护阈值 */
  CCThreshold?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBasicDeviceThresholdRequest {
  /** 查询的IP地址，取值如：1.1.1.1 */
  BasicIp: string;
  /** 查询IP所属地域，取值如：gz、bj、sh、hk等地域缩写 */
  BasicRegion: string;
  /** 专区类型，取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。 */
  BasicBizType: string;
  /** 设备类型，取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel. */
  BasicDeviceType: string;
  /** 有效性检查，取值为1 */
  BasicCheckFlag: number;
  /** 可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取） */
  BasicIpInstance?: string;
  /** 可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5） */
  BasicIspCode?: number;
}

declare interface DescribeBasicDeviceThresholdResponse {
  /** 返回黑洞封堵值 */
  Threshold?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBizHttpStatusRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源Id */
  Id: string;
  /** 统计周期，可取值300，1800，3600， 21600，86400，单位秒 */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 统计方式，仅支持sum */
  Statistics: string;
  /** 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效 */
  ProtoInfo?: ProtocolPort[];
  /** 特定域名查询 */
  Domain?: string;
}

declare interface DescribeBizHttpStatusResponse {
  /** 业务流量http状态码统计数据 */
  HttpStatusMap: HttpStatusMap;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBizTrendRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源实例ID */
  Id: string;
  /** 统计周期，可取值300，1800，3600，21600，86400，单位秒 */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 统计方式，可取值max, min, avg, sum, 如统计纬度是流量速率或包量速率，仅可取值max */
  Statistics: string;
  /** 统计纬度，可取值connum, new_conn, inactive_conn, intraffic, outtraffic, inpkg, outpkg, qps */
  MetricName: string;
  /** 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效 */
  ProtoInfo?: ProtocolPort[];
  /** 统计纬度为qps时，可选特定域名查询 */
  Domain?: string;
}

declare interface DescribeBizTrendResponse {
  /** 曲线图各个时间点的值 */
  DataList?: number[];
  /** 统计纬度 */
  MetricName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCAlarmThresholdRequest {
  /** 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID,字符串类型 */
  RsId: string;
}

declare interface DescribeCCAlarmThresholdResponse {
  /** CC告警阈值 */
  CCAlarmThreshold?: CCAlarmThreshold;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCEvListRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 资源实例ID */
  Id?: string;
  /** 资源实例的IP，当business不为basic时，如果IpList不为空则Id也必须不能为空； */
  IpList?: string[];
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
}

declare interface DescribeCCEvListResponse {
  /** 大禹子产品代号（shield表示棋牌盾；bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源实例ID */
  Id?: string;
  /** 资源实例的IP列表 */
  IpList?: string[] | null;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** CC攻击事件列表 */
  Data?: CCEventRecord[];
  /** 总记录数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCFrequencyRulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；当填写时表示获取转发规则的访问频率控制规则； */
  RuleId: string;
}

declare interface DescribeCCFrequencyRulesResponse {
  /** 访问频率控制规则列表 */
  CCFrequencyRuleList?: CCFrequencyRule[];
  /** 访问频率控制规则开关状态，取值[on(开启)，off(关闭)] */
  CCFrequencyRuleStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCIpAllowDenyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 黑或白名单，取值[white(白名单)，black(黑名单)]注意：此数组只能有一个值，不能同时获取黑名单和白名单 */
  Type: string[];
  /** 分页参数 */
  Limit?: number;
  /** 分页参数 */
  Offset?: number;
  /** 可选，代表HTTP协议或HTTPS协议的CC防护，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]； */
  Protocol?: string;
}

declare interface DescribeCCIpAllowDenyResponse {
  /** 该字段被RecordList字段替代了，请不要使用 */
  Data?: KeyValue[];
  /** 记录数 */
  Total?: number;
  /** 返回黑/白名单的记录，"Key":"ip"时，"Value":值表示ip;"Key":"domain"时， "Value":值表示域名;"Key":"type"时，"Value":值表示黑白名单类型(white为白名单，block为黑名单);"Key":"protocol"时，"Value":值表示CC防护的协议(http或https); */
  RecordList?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCSelfDefinePolicyRequest {
  /** 大禹子产品代号（bgp高防包；bgp-multip共享包） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 拉取的条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeCCSelfDefinePolicyResponse {
  /** 自定义规则总数 */
  Total?: number;
  /** 策略列表 */
  Policys?: CCPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCTrendRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 资源的IP */
  Ip: string;
  /** 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))] */
  MetricName: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例） */
  Id?: string;
  /** 域名，可选 */
  Domain?: string;
}

declare interface DescribeCCTrendResponse {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源ID */
  Id?: string | null;
  /** 资源的IP */
  Ip?: string;
  /** 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))] */
  MetricName?: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period?: number;
  /** 统计开始时间 */
  StartTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 值数组 */
  Data?: number[];
  /** 值个数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCUrlAllowRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 黑或白名单，取值[white(白名单)]，目前只支持白名单注意：此数组只能有一个值，且只能为white */
  Type: string[];
  /** 分页参数 */
  Limit?: number;
  /** 分页参数 */
  Offset?: number;
  /** 可选，代表HTTP协议或HTTPS协议的CC防护，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]； */
  Protocol?: string;
}

declare interface DescribeCCUrlAllowResponse {
  /** 该字段被RecordList字段替代了，请不要使用 */
  Data?: KeyValue[];
  /** 记录总数 */
  Total?: number;
  /** 返回黑/白名单的记录，"Key":"url"时，"Value":值表示URL;"Key":"domain"时， "Value":值表示域名;"Key":"type"时，"Value":值表示黑白名单类型(white为白名单，block为黑名单);"Key":"protocol"时，"Value":值表示CC的防护类型(HTTP防护或HTTPS域名防护); */
  RecordList?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSAlarmThresholdRequest {
  /** 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID,字符串类型 */
  RsId: string;
}

declare interface DescribeDDoSAlarmThresholdResponse {
  /** DDoS告警阈值 */
  DDoSAlarmThreshold?: DDoSAlarmThreshold;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSAttackIPRegionMapRequest {
  /** 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间，最大可统计的时间范围是半年； */
  EndTime: string;
  /** 指定资源的特定IP的攻击源，可选 */
  IpList?: string[];
}

declare interface DescribeDDoSAttackIPRegionMapResponse {
  /** 全球地域分布数据 */
  NationCount?: KeyValueRecord[];
  /** 国内省份地域分布数据 */
  ProvinceCount?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSAttackSourceRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 一页条数，填0表示不分页 */
  Limit: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 获取指定资源的特定ip的攻击源，可选 */
  IpList?: string[];
}

declare interface DescribeDDoSAttackSourceResponse {
  /** 总攻击源条数 */
  Total?: number;
  /** 攻击源列表 */
  AttackSourceList?: DDoSAttackSourceRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSCountRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 资源的IP */
  Ip: string;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）] */
  MetricName: string;
}

declare interface DescribeDDoSCountResponse {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 资源的IP */
  Ip?: string;
  /** 统计开始时间 */
  StartTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）] */
  MetricName?: string;
  /** Key-Value值数组，Key说明如下，当MetricName为traffic时：key为"TcpKBSum"，表示TCP报文流量，单位KBkey为"UdpKBSum"，表示UDP报文流量，单位KBkey为"IcmpKBSum"，表示ICMP报文流量，单位KBkey为"OtherKBSum"，表示其他报文流量，单位KB当MetricName为pkg时：key为"TcpPacketSum"，表示TCP报文个数，单位个key为"UdpPacketSum"，表示UDP报文个数，单位个key为"IcmpPacketSum"，表示ICMP报文个数，单位个key为"OtherPacketSum"，表示其他报文个数，单位个当MetricName为classnum时：key的值表示攻击事件类型，其中Key为"UNKNOWNFLOOD"，表示未知的攻击事件 */
  Data?: KeyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSDefendStatusRequest {
  /** 大禹子产品代号（basic表示基础防护；bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源实例ID，只有当Business不是基础防护时才需要填写此字段； */
  Id?: string;
  /** 基础防护的IP，只有当Business为基础防护时才需要填写此字段； */
  Ip?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)] */
  BizType?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）] */
  DeviceType?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); */
  InstanceId?: string;
  /** 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值："bj": 华北地区(北京)"cd": 西南地区(成都)"cq": 西南地区(重庆)"gz": 华南地区(广州)"gzopen": 华南地区(广州Open)"hk": 中国香港"kr": 东南亚地区(首尔)"sh": 华东地区(上海)"shjr": 华东地区(上海金融)"szjr": 华南地区(深圳金融)"sg": 东南亚地区(新加坡)"th": 东南亚地区(泰国)"de": 欧洲地区(德国)"usw": 美国西部（硅谷）"ca": 北美地区(多伦多)"jp": 日本"hzec": 杭州"in": 印度"use": 美东地区（弗吉尼亚）"ru": 俄罗斯"tpe": 中国台湾"nj": 南京 */
  IPRegion?: string;
}

declare interface DescribeDDoSDefendStatusResponse {
  /** 防护状态，为0表示防护处于关闭状态，为1表示防护处于开启状态 */
  DefendStatus?: number | null;
  /** 防护临时关闭的过期时间，当防护状态为开启时此字段为空； */
  UndefendExpire?: string | null;
  /** 控制台功能展示字段，为1表示控制台功能展示，为0表示控制台功能隐藏 */
  ShowFlag?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSEvInfoRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 资源的IP */
  Ip: string;
  /** 攻击开始时间 */
  StartTime: string;
  /** 攻击结束时间 */
  EndTime: string;
}

declare interface DescribeDDoSEvInfoResponse {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 资源的IP */
  Ip?: string;
  /** 攻击开始时间 */
  StartTime?: string;
  /** 攻击结束时间 */
  EndTime?: string;
  /** TCP报文攻击包数 */
  TcpPacketSum?: number;
  /** TCP报文攻击流量，单位KB */
  TcpKBSum?: number;
  /** UDP报文攻击包数 */
  UdpPacketSum?: number;
  /** UDP报文攻击流量，单位KB */
  UdpKBSum?: number;
  /** ICMP报文攻击包数 */
  IcmpPacketSum?: number;
  /** ICMP报文攻击流量，单位KB */
  IcmpKBSum?: number;
  /** 其他报文攻击包数 */
  OtherPacketSum?: number;
  /** 其他报文攻击流量，单位KB */
  OtherKBSum?: number;
  /** 累计攻击流量，单位KB */
  TotalTraffic?: number;
  /** 攻击流量带宽峰值 */
  Mbps?: number;
  /** 攻击包速率峰值 */
  Pps?: number;
  /** PCAP文件下载链接 */
  PcapUrl?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSEvListRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例） */
  Id?: string;
  /** 资源的IP */
  IpList?: string[];
  /** 是否超过弹性防护峰值，取值[yes(是)，no(否)]，填写空字符串时表示不进行过滤 */
  OverLoad?: string;
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
}

declare interface DescribeDDoSEvListResponse {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 资源的IP */
  IpList?: string[] | null;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** DDoS攻击事件列表 */
  Data?: DDoSEventRecord[];
  /** 总记录数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSIpLogRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 资源的IP */
  Ip: string;
  /** 攻击开始时间 */
  StartTime: string;
  /** 攻击结束时间 */
  EndTime: string;
}

declare interface DescribeDDoSIpLogResponse {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 资源的IP */
  Ip?: string;
  /** 攻击开始时间 */
  StartTime?: string;
  /** 攻击结束时间 */
  EndTime?: string;
  /** IP攻击日志，KeyValue数组，Key-Value取值说明：Key为"LogTime"时，Value值为IP日志时间Key为"LogMessage"时，Value值为Ip日志内容 */
  Data?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSNetCountRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）] */
  MetricName: string;
}

declare interface DescribeDDoSNetCountResponse {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 统计开始时间 */
  StartTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）] */
  MetricName?: string;
  /** Key-Value值数组，Key说明如下，当MetricName为traffic时：key为"TcpKBSum"，表示TCP报文流量，单位KBkey为"UdpKBSum"，表示UDP报文流量，单位KBkey为"IcmpKBSum"，表示ICMP报文流量，单位KBkey为"OtherKBSum"，表示其他报文流量，单位KB当MetricName为pkg时：key为"TcpPacketSum"，表示TCP报文个数，单位个key为"UdpPacketSum"，表示UDP报文个数，单位个key为"IcmpPacketSum"，表示ICMP报文个数，单位个key为"OtherPacketSum"，表示其他报文个数，单位个当MetricName为classnum时：key的值表示攻击事件类型，其中Key为"UNKNOWNFLOOD"，表示未知的攻击事件 */
  Data?: KeyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSNetEvInfoRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 攻击开始时间 */
  StartTime: string;
  /** 攻击结束时间 */
  EndTime: string;
}

declare interface DescribeDDoSNetEvInfoResponse {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 攻击开始时间 */
  StartTime?: string;
  /** 攻击结束时间 */
  EndTime?: string;
  /** TCP报文攻击包数 */
  TcpPacketSum?: number;
  /** TCP报文攻击流量，单位KB */
  TcpKBSum?: number;
  /** UDP报文攻击包数 */
  UdpPacketSum?: number;
  /** UDP报文攻击流量，单位KB */
  UdpKBSum?: number;
  /** ICMP报文攻击包数 */
  IcmpPacketSum?: number;
  /** ICMP报文攻击流量，单位KB */
  IcmpKBSum?: number;
  /** 其他报文攻击包数 */
  OtherPacketSum?: number;
  /** 其他报文攻击流量，单位KB */
  OtherKBSum?: number;
  /** 累计攻击流量，单位KB */
  TotalTraffic?: number;
  /** 攻击流量带宽峰值 */
  Mbps?: number;
  /** 攻击包速率峰值 */
  Pps?: number;
  /** PCAP文件下载链接 */
  PcapUrl?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSNetEvListRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
}

declare interface DescribeDDoSNetEvListResponse {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** DDoS攻击事件列表 */
  Data?: DDoSEventRecord[];
  /** 总记录数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSNetIpLogRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 攻击开始时间 */
  StartTime: string;
  /** 攻击结束时间 */
  EndTime: string;
}

declare interface DescribeDDoSNetIpLogResponse {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 攻击开始时间 */
  StartTime?: string;
  /** 攻击结束时间 */
  EndTime?: string;
  /** IP攻击日志，KeyValue数组，Key-Value取值说明：Key为"LogTime"时，Value值为IP日志时间Key为"LogMessage"时，Value值为Ip日志内容 */
  Data?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSNetTrendRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 指标，取值[bps(攻击流量带宽，pps(攻击包速率))] */
  MetricName: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
}

declare interface DescribeDDoSNetTrendResponse {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business?: string;
  /** 资源ID */
  Id?: string;
  /** 指标，取值[bps(攻击流量带宽，pps(攻击包速率))] */
  MetricName?: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period?: number;
  /** 统计开始时间 */
  StartTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 值数组 */
  Data?: number[];
  /** 值个数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSPolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 可选字段，资源ID，如果填写则表示该资源绑定的DDoS高级策略 */
  Id?: string;
}

declare interface DescribeDDoSPolicyResponse {
  /** DDoS高级策略列表 */
  DDosPolicyList?: DDosPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSTrendRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 资源实例的IP */
  Ip: string;
  /** 指标，取值[bps(攻击流量带宽，pps(攻击包速率))] */
  MetricName: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例） */
  Id?: string;
}

declare interface DescribeDDoSTrendResponse {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源ID */
  Id?: string | null;
  /** 资源的IP */
  Ip?: string;
  /** 指标，取值[bps(攻击流量带宽，pps(攻击包速率))] */
  MetricName?: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period?: number;
  /** 统计开始时间 */
  StartTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 值数组，攻击流量带宽单位为Mbps，包速率单位为pps */
  Data?: number[];
  /** 值个数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSUsedStatisRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
}

declare interface DescribeDDoSUsedStatisResponse {
  /** 字段值，如下：Days：高防资源使用天数Attacks：DDoS防护次数 */
  Data?: KeyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIPProductInfoRequest {
  /** 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包） */
  Business: string;
  /** IP列表 */
  IpList: string[];
}

declare interface DescribeIPProductInfoResponse {
  /** 云产品信息列表，如果没有查询到则返回空数组，值说明如下：Key为ProductName时，value表示云产品实例的名称；Key为ProductInstanceId时，value表示云产品实例的ID；Key为ProductType时，value表示的是云产品的类型（cvm表示云主机、clb表示负载均衡）;Key为IP时，value表示云产品实例的IP； */
  Data?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInsurePacksRequest {
  /** 可选字段，保险包套餐ID，当要获取指定ID（例如insure-000000xe）的保险包套餐时请填写此字段； */
  IdList?: string[];
}

declare interface DescribeInsurePacksResponse {
  /** 保险包套餐列表 */
  InsurePacks?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpBlockListRequest {
}

declare interface DescribeIpBlockListResponse {
  /** IP封堵列表 */
  List?: IpBlockData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpUnBlockListRequest {
  /** 开始时间 */
  BeginTime: string;
  /** 结束时间 */
  EndTime: string;
  /** IP（不为空时，进行IP过滤） */
  Ip?: string;
  /** 分页参数（不为空时，进行分页查询），此字段后面会弃用，请用Limit和Offset字段代替； */
  Paging?: Paging;
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
}

declare interface DescribeIpUnBlockListResponse {
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** IP解封记录 */
  List?: IpUnBlockData[];
  /** 总记录数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL4HealthConfigRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID数组，当导出所有规则的健康检查配置则不填或填空数组； */
  RuleIdList?: string[];
}

declare interface DescribeL4HealthConfigResponse {
  /** 四层健康检查配置数组 */
  HealthConfig?: L4HealthConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL4RulesErrHealthRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
}

declare interface DescribeL4RulesErrHealthResponse {
  /** 异常规则的总数 */
  Total?: number;
  /** 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP，多个IP用","分割 */
  ErrHealths?: KeyValue[];
  /** 异常规则列表(提供更多的错误相关信息)，返回值说明:Key值为RuleId时，Value值为规则ID；Key值为Protocol时，Value值为规则的转发协议；Key值为VirtualPort时，Value值为规则的转发端口；Key值为ErrMessage时，Value值为健康检查异常信息；健康检查异常信息的格式为"SourceIp:1.1.1.1|SourcePort:1234|AbnormalStatTime:1570689065|AbnormalReason:connection time out|Interval:20|CheckNum:6|FailNum:6" 多个源IP的错误信息用，分割,SourceIp表示源站IP，SourcePort表示源站端口，AbnormalStatTime表示异常时间，AbnormalReason表示异常原因，Interval表示检查周期，CheckNum表示检查次数，FailNum表示失败次数； */
  ExtErrHealths?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7HealthConfigRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID数组，当导出所有规则的健康检查配置则不填或填空数组； */
  RuleIdList?: string[];
}

declare interface DescribeL7HealthConfigResponse {
  /** 七层健康检查配置数组 */
  HealthConfig?: L7HealthConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNewL4RulesErrHealthRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 规则ID列表 */
  RuleIdList?: string[];
}

declare interface DescribeNewL4RulesErrHealthResponse {
  /** 异常规则的总数 */
  Total?: number;
  /** 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP，多个IP用","分割 */
  ErrHealths?: KeyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNewL4RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 指定IP查询 */
  Ip?: string;
  /** 指定高防IP端口查询 */
  VirtualPort?: number;
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
}

declare interface DescribeNewL4RulesResponse {
  /** 转发规则列表 */
  Rules?: NewL4RuleEntry[];
  /** 总规则数 */
  Total?: number;
  /** 四层健康检查配置列表 */
  Healths?: L4RuleHealth[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNewL7RulesErrHealthRequest {
  /** 大禹子产品代号（bgpip表示高防IP) */
  Business: string;
  /** 规则Id列表 */
  RuleIdList?: string[];
}

declare interface DescribeNewL7RulesErrHealthResponse {
  /** 异常规则的总数 */
  Total?: number;
  /** 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP及错误信息，多个IP用","分割 */
  ErrHealths?: KeyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackIndexRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示高防包；net表示高防IP专业版） */
  Business: string;
}

declare interface DescribePackIndexResponse {
  /** 字段值，如下：TotalPackCount：资源数AttackPackCount：清洗中的资源数BlockPackCount：封堵中的资源数ExpiredPackCount：过期的资源数ExpireingPackCount：即将过期的资源数IsolatePackCount：隔离中的资源数 */
  Data?: KeyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePcapRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源实例ID */
  Id: string;
  /** 攻击事件的开始时间，格式为"2018-08-28 07:00:00" */
  StartTime: string;
  /** 攻击事件的结束时间，格式为"2018-08-28 07:02:00" */
  EndTime: string;
  /** 资源的IP，只有当Business为net时才需要填写资源实例下的IP； */
  Ip?: string;
}

declare interface DescribePcapResponse {
  /** pcap包的下载链接列表，无pcap包时为空数组； */
  PcapUrlList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyCaseRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略场景ID */
  SceneId?: string;
}

declare interface DescribePolicyCaseResponse {
  /** 策略场景列表 */
  CaseList?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResIpListRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID, 如果不填，则获取用户所有资源的IP */
  IdList?: string[];
}

declare interface DescribeResIpListResponse {
  /** 资源的IP列表 */
  Resource?: ResourceIp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceListRequest {
  /** 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 地域码搜索，可选，当不指定地域时空数组，当指定地域时，填地域码。例如：["gz", "sh"] */
  RegionList?: string[];
  /** 线路搜索，可选，只有当获取高防IP资源列表是可以选填，取值为[1（BGP线路），2（南京电信），3（南京联通），99（第三方合作线路）]，当获取其他产品时请填空数组； */
  Line?: number[];
  /** 资源ID搜索，可选，当不为空数组时表示获取指定资源的资源列表； */
  IdList?: string[];
  /** 资源名称搜索，可选，当不为空字符串时表示按名称搜索资源； */
  Name?: string;
  /** IP搜索列表，可选，当不为空时表示按照IP搜索资源； */
  IpList?: string[];
  /** 资源状态搜索列表，可选，取值为[0（运行中）, 1（清洗中）, 2（封堵中）]，当填空数组时不进行状态搜索； */
  Status?: number[];
  /** 即将到期搜索；可选，取值为[0（不搜索），1（搜索即将到期的资源）] */
  Expire?: number;
  /** 排序字段，可选 */
  OderBy?: OrderBy[];
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
  /** 高防IP专业版资源的CNAME，可选，只对高防IP专业版资源列表有效； */
  CName?: string;
  /** 高防IP专业版资源的域名，可选，只对高防IP专业版资源列表有效； */
  Domain?: string;
}

declare interface DescribeResourceListResponse {
  /** 总记录数 */
  Total: number;
  /** 资源记录列表，返回Key值说明："Key": "CreateTime" 表示资源实例购买时间"Key": "Region" 表示资源实例的地域"Key": "BoundIP" 表示独享包实例绑定的IP"Key": "Id" 表示资源实例的ID"Key": "CCEnabled" 表示资源实例的CC防护开关状态"Key": "DDoSThreshold" 表示资源实例的DDoS的清洗阈值	"Key": "BoundStatus" 表示独享包或共享包实例的绑定IP操作状态(绑定中或绑定完成)"Key": "Type" 此字段弃用"Key": "ElasticLimit" 表示资源实例的弹性防护值"Key": "DDoSAI" 表示资源实例的DDoS AI防护开关"Key": "OverloadCount" 表示资源实例受到超过弹性防护值的次数"Key": "Status" 表示资源实例的状态(idle:运行中, attacking:攻击中, blocking:封堵中, isolate:隔离中)"Key": "Lbid" 此字段弃用"Key": "ShowFlag" 此字段弃用"Key": "Expire" 表示资源实例的过期时间"Key": "CCThreshold" 表示资源实例的CC防护触发阈值"Key": "AutoRenewFlag" 表示资源实例的自动续费是否开启"Key": "IspCode" 表示独享包或共享包的线路(0-电信, 1-联通, 2-移动, 5-BGP)"Key": "PackType" 表示套餐包类型"Key": "PackId" 表示套餐包ID"Key": "Name" 表示资源实例的名称"Key": "Locked" 此字段弃用"Key": "IpDDoSLevel" 表示资源实例的防护等级(low-宽松, middle-正常, high-严格)"Key": "DefendStatus" 表示资源实例的DDoS防护状态(防护开启或临时关闭)"Key": "UndefendExpire" 表示资源实例的DDoS防护临时关闭结束时间"Key": "Tgw" 表示资源实例是否是新资源"Key": "Bandwidth" 表示资源实例的保底防护值，只针对高防包和高防IP"Key": "DdosMax" 表示资源实例的保底防护值，只针对高防IP专业版"Key": "GFBandwidth" 表示资源实例的保底业务带宽，只针对高防IP"Key": "ServiceBandwidth" 表示资源实例的保底业务带宽，只针对高防IP专业版 */
  ServicePacks: KeyValueRecord[];
  /** 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleSetsRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID列表 */
  IdList: string[];
}

declare interface DescribeRuleSetsResponse {
  /** 规则记录数数组，取值说明:Key值为"Id"时，Value表示资源IDKey值为"RuleIdList"时，Value值表示资源的规则ID，多个规则ID用","分割Key值为"RuleNameList"时，Value值表示资源的规则名，多个规则名用","分割Key值为"RuleNum"时，Value值表示资源的规则数 */
  L4RuleSets?: KeyValueRecord[];
  /** 规则记录数数组，取值说明:Key值为"Id"时，Value表示资源IDKey值为"RuleIdList"时，Value值表示资源的规则ID，多个规则ID用","分割Key值为"RuleNameList"时，Value值表示资源的规则名，多个规则名用","分割Key值为"RuleNum"时，Value值表示资源的规则数 */
  L7RuleSets?: KeyValueRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSchedulingDomainListRequest {
  /** 一页条数，填0表示不分页 */
  Limit: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 可选，筛选特定的域名 */
  Domain?: string;
}

declare interface DescribeSchedulingDomainListResponse {
  /** 调度域名总数 */
  Total?: number;
  /** 调度域名列表信息 */
  DomainList?: SchedulingDomain[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecIndexRequest {
}

declare interface DescribeSecIndexResponse {
  /** 字段值，如下：AttackIpCount：受攻击的IP数AttackCount：攻击次数BlockCount：封堵次数MaxMbps：攻击峰值MbpsIpNum：统计的IP数据 */
  Data?: KeyValue[];
  /** 本月开始时间 */
  BeginDate?: string;
  /** 本月结束时间 */
  EndDate?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSourceIpSegmentRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
}

declare interface DescribeSourceIpSegmentResponse {
  /** 回源IP段，多个用"；"分隔 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTransmitStatisRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版；bgp表示独享包；bgp-multip表示共享包） */
  Business: string;
  /** 资源实例ID */
  Id: string;
  /** 指标名，取值：traffic表示流量带宽；pkg表示包速率； */
  MetricName: string;
  /** 统计时间粒度（300表示5分钟；3600表示小时；86400表示天） */
  Period: number;
  /** 统计开始时间，秒部分保持为0，分钟部分为5的倍数 */
  StartTime: string;
  /** 统计结束时间，秒部分保持为0，分钟部分为5的倍数 */
  EndTime: string;
  /** 资源的IP（当Business为bgp-multip时必填，且仅支持一个IP）；当不填写时，默认统计资源实例的所有IP；资源实例有多个IP（比如高防IP专业版）时，统计方式是求和； */
  IpList?: string[];
}

declare interface DescribeTransmitStatisResponse {
  /** 当MetricName=traffic时，表示入流量带宽，单位bps；当MetricName=pkg时，表示入包速率，单位pps； */
  InDataList?: number[];
  /** 当MetricName=traffic时，表示出流量带宽，单位bps；当MetricName=pkg时，表示出包速率，单位pps； */
  OutDataList?: number[];
  /** 指标名：traffic表示流量带宽；pkg表示包速率； */
  MetricName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnBlockStatisRequest {
}

declare interface DescribeUnBlockStatisResponse {
  /** 解封总配额数 */
  Total?: number;
  /** 已使用次数 */
  Used?: number;
  /** 统计起始时间 */
  BeginTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribleL4RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID，可选参数，填写后获取指定的规则 */
  RuleIdList?: string[];
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
}

declare interface DescribleL4RulesResponse {
  /** 转发规则列表 */
  Rules?: L4RuleEntry[];
  /** 总规则数 */
  Total?: number;
  /** 健康检查配置列表 */
  Healths?: L4RuleHealth[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribleL7RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID，可选参数，填写后获取指定的规则 */
  RuleIdList?: string[];
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
  /** 域名搜索，选填，当需要搜索域名请填写 */
  Domain?: string;
  /** 转发协议搜索，选填，取值[http, https, http/https] */
  ProtocolList?: string[];
  /** 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  StatusList?: number[];
}

declare interface DescribleL7RulesResponse {
  /** 转发规则列表 */
  Rules?: L7RuleEntry[];
  /** 总规则数 */
  Total?: number;
  /** 健康检查配置列表 */
  Healths?: L7RuleHealth[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribleNewL7RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 一页条数，填0表示不分页 */
  Limit?: number;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset?: number;
  /** 域名搜索，选填，当需要搜索域名请填写 */
  Domain?: string;
  /** 转发协议搜索，选填，取值[http, https, http/https] */
  ProtocolList?: string[];
  /** 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  StatusList?: number[];
  /** IP搜索，选填，当需要搜索IP请填写 */
  Ip?: string;
}

declare interface DescribleNewL7RulesResponse {
  /** 转发规则列表 */
  Rules?: NewL7RuleEntry[];
  /** 总规则数 */
  Total?: number;
  /** 健康检查配置列表 */
  Healths?: L7RuleHealth[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribleRegionCountRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；） */
  Business: string;
  /** 根据线路统计，取值为[1（BGP线路），2（南京电信），3（南京联通），99（第三方合作线路）]；只对高防IP产品有效，其他产品此字段忽略 */
  LineList?: number[];
}

declare interface DescribleRegionCountResponse {
  /** 地域资源实例数 */
  RegionList?: RegionInstanceCount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCAlarmThresholdRequest {
  /** 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID,字符串类型 */
  RsId: string;
  /** 告警阈值，大于0（目前排定的值），后台设置默认值为1000 */
  AlarmThreshold: number;
  /** 资源关联的IP列表，高防包未绑定时，传空数组，高防IP专业版传多个IP的数据 */
  IpList: string[];
}

declare interface ModifyCCAlarmThresholdResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCFrequencyRulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** CC的访问频率控制规则ID */
  CCFrequencyRuleId: string;
  /** 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)] */
  Mode: string;
  /** 统计周期，单位秒，取值[10, 30, 60] */
  Period: number;
  /** 访问次数，取值[1-10000] */
  ReqNumber: number;
  /** 执行动作，取值["alg"（人机识别）, "drop"（拦截）] */
  Act: string;
  /** 执行时间，单位秒，取值[1-900] */
  ExeDuration: number;
  /** URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配； */
  Uri?: string;
  /** User-Agent字符串，长度不超过80 */
  UserAgent?: string;
  /** Cookie字符串，长度不超过40 */
  Cookie?: string;
}

declare interface ModifyCCFrequencyRulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCFrequencyRulesStatusRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID） */
  RuleId: string;
  /** 开启或关闭，取值["on"(开启)，"off"(关闭)] */
  Method: string;
}

declare interface ModifyCCFrequencyRulesStatusResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCHostProtectionRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID */
  RuleId: string;
  /** 开启/关闭CC域名防护，取值[open(表示开启)，close(表示关闭)] */
  Method: string;
}

declare interface ModifyCCHostProtectionResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCIpAllowDenyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** add表示添加，delete表示删除 */
  Method: string;
  /** 黑/白名单类型；取值[white(白名单)，black(黑名单)] */
  Type: string;
  /** 黑/白名单的IP数组 */
  IpList: string[];
  /** 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写Domain和RuleId字段； */
  Protocol?: string;
  /** 可选字段，表示HTTPS协议的7层转发规则域名（通过获取7层转发规则接口可以获取域名），只有当Protocol字段为https时才必须填写此字段； */
  Domain?: string;
  /** 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID），当Method为delete时，不用填写此字段； */
  RuleId?: string;
}

declare interface ModifyCCIpAllowDenyResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCLevelRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** CC防护等级，取值[default(正常), loose(宽松), strict(严格)]; */
  Level: string;
  /** 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写RuleId字段； */
  Protocol: string;
  /** 表示7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）； */
  RuleId: string;
}

declare interface ModifyCCLevelResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCPolicySwitchRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 策略ID */
  SetId: string;
  /** 开关状态 */
  Switch: number;
}

declare interface ModifyCCPolicySwitchResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCSelfDefinePolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 策略ID */
  SetId: string;
  /** CC策略描述 */
  Policy: CCPolicy;
}

declare interface ModifyCCSelfDefinePolicyResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCThresholdRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示基础防护） */
  Business: string;
  /** CC防护阈值，取值(0 100 150 240 350 480 550 700 850 1000 1500 2000 3000 5000 10000 20000);当Business为高防IP、高防IP专业版时，其CC防护最大阈值跟资源的保底防护带宽有关，对应关系如下： 保底带宽: 最大C防护阈值 10: 20000, 20: 40000, 30: 70000, 40: 100000, 50: 150000, 60: 200000, 80: 250000, 100: 300000, */
  Threshold: number;
  /** 资源ID */
  Id?: string;
  /** 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写RuleId字段； */
  Protocol?: string;
  /** 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；当Protocol=https时必须填写； */
  RuleId?: string;
  /** 查询的IP地址（仅基础防护提供），取值如：1.1.1.1 */
  BasicIp?: string;
  /** 查询IP所属地域（仅基础防护提供），取值如：gz、bj、sh、hk等地域缩写 */
  BasicRegion?: string;
  /** 专区类型（仅基础防护提供），取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。 */
  BasicBizType?: string;
  /** 设备类型（仅基础防护提供），取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel. */
  BasicDeviceType?: string;
  /** 仅基础防护提供。可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取） */
  BasicIpInstance?: string;
  /** 仅基础防护提供。可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5） */
  BasicIspCode?: number;
  /** 可选字段，当协议取值HTTPS时，必填 */
  Domain?: string;
}

declare interface ModifyCCThresholdResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCUrlAllowRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** =add表示添加，=delete表示删除 */
  Method: string;
  /** 黑/白名单类型；取值[white(白名单)] */
  Type: string;
  /** URL数组，URL格式如下：http://域名/cgihttps://域名/cgi */
  UrlList: string[];
  /** 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写Domain和RuleId字段； */
  Protocol?: string;
  /** 可选字段，表示HTTPS协议的7层转发规则域名（通过获取7层转发规则接口可以获取域名），只有当Protocol字段为https时才必须填写此字段； */
  Domain?: string;
  /** 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID），当添加并且Protocol=https时必须填写；当Method为delete时，可以不用填写此字段； */
  RuleId?: string;
}

declare interface ModifyCCUrlAllowResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSAIStatusRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** =get表示读取AI防护状态；=set表示修改AI防护状态； */
  Method: string;
  /** AI防护状态，取值[on，off]；当Method=set时必填； */
  DDoSAI?: string;
}

declare interface ModifyDDoSAIStatusResponse {
  /** AI防护状态，取值[on，off] */
  DDoSAI?: string;
  /** 资源ID */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSAlarmThresholdRequest {
  /** 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID,字符串类型 */
  RsId: string;
  /** 告警阈值类型，0-未设置，1-入流量，2-清洗流量 */
  AlarmType: number;
  /** 告警阈值，大于0（目前暂定的值） */
  AlarmThreshold: number;
  /** 资源关联的IP列表，高防包未绑定时，传空数组，高防IP专业版传多个IP的数据 */
  IpList: string[];
}

declare interface ModifyDDoSAlarmThresholdResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSDefendStatusRequest {
  /** 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版；basic表示基础防护） */
  Business: string;
  /** 防护状态值，取值[0（关闭），1（开启）] */
  Status: number;
  /** 关闭时长，单位小时，取值[0，1，2，3，4，5，6]；当Status=0表示关闭时，Hour必须大于0； */
  Hour: number;
  /** 资源ID；当Business不是基础防护时必须填写此字段； */
  Id?: string;
  /** 基础防护的IP，只有当Business为基础防护时才需要填写此字段； */
  Ip?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)] */
  BizType?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）] */
  DeviceType?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); */
  InstanceId?: string;
  /** 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值："bj": 华北地区(北京)"cd": 西南地区(成都)"cq": 西南地区(重庆)"gz": 华南地区(广州)"gzopen": 华南地区(广州Open)"hk": 中国香港"kr": 东南亚地区(首尔)"sh": 华东地区(上海)"shjr": 华东地区(上海金融)"szjr": 华南地区(深圳金融)"sg": 东南亚地区(新加坡)"th": 东南亚地区(泰国)"de": 欧洲地区(德国)"usw": 美国西部（硅谷）"ca": 北美地区(多伦多)"jp": 日本"hzec": 杭州"in": 印度"use": 美东地区（弗吉尼亚）"ru": 俄罗斯"tpe": 中国台湾"nj": 南京 */
  IPRegion?: string;
}

declare interface ModifyDDoSDefendStatusResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSLevelRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** =get表示读取防护等级；=set表示修改防护等级 */
  Method: string;
  /** 防护等级，取值[low,middle,high]；当Method=set时必填 */
  DDoSLevel?: string;
}

declare interface ModifyDDoSLevelResponse {
  /** 资源ID */
  Id?: string;
  /** 防护等级，取值[low,middle,high] */
  DDoSLevel?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSPolicyCaseRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略场景ID */
  SceneId: string;
  /** 开发平台，取值[PC（PC客户端）， MOBILE（移动端）， TV（电视端）， SERVER（主机）] */
  PlatformTypes?: string[];
  /** 细分品类，取值[WEB（网站）， GAME（游戏）， APP（应用）， OTHER（其他）] */
  AppType?: string;
  /** 应用协议，取值[tcp（TCP协议），udp（UDP协议），icmp（ICMP协议），all（其他协议）] */
  AppProtocols?: string[];
  /** TCP业务起始端口，取值(0, 65535] */
  TcpSportStart?: string;
  /** TCP业务结束端口，取值(0, 65535]，必须大于等于TCP业务起始端口 */
  TcpSportEnd?: string;
  /** UDP业务起始端口，取值范围(0, 65535] */
  UdpSportStart?: string;
  /** UDP业务结束端口，取值范围(0, 65535)，必须大于等于UDP业务起始端口 */
  UdpSportEnd?: string;
  /** 是否有海外客户，取值[no（没有）, yes（有）] */
  HasAbroad?: string;
  /** 是否会主动对外发起TCP请求，取值[no（不会）, yes（会）] */
  HasInitiateTcp?: string;
  /** 是否会主动对外发起UDP业务请求，取值[no（不会）, yes（会）] */
  HasInitiateUdp?: string;
  /** 主动发起TCP请求的端口，取值范围(0, 65535] */
  PeerTcpPort?: string;
  /** 主动发起UDP请求的端口，取值范围(0, 65535] */
  PeerUdpPort?: string;
  /** TCP载荷的固定特征码，字符串长度小于512 */
  TcpFootprint?: string;
  /** UDP载荷的固定特征码，字符串长度小于512 */
  UdpFootprint?: string;
  /** Web业务的API的URL */
  WebApiUrl?: string[];
  /** TCP业务报文长度最小值，取值范围(0, 1500) */
  MinTcpPackageLen?: string;
  /** TCP业务报文长度最大值，取值范围(0, 1500)，必须大于等于TCP业务报文长度最小值 */
  MaxTcpPackageLen?: string;
  /** UDP业务报文长度最小值，取值范围(0, 1500) */
  MinUdpPackageLen?: string;
  /** UDP业务报文长度最大值，取值范围(0, 1500)，必须大于等于UDP业务报文长度最小值 */
  MaxUdpPackageLen?: string;
  /** 是否有VPN业务，取值[no（没有）, yes（有）] */
  HasVPN?: string;
  /** TCP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000 */
  TcpPortList?: string;
  /** UDP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000 */
  UdpPortList?: string;
}

declare interface ModifyDDoSPolicyCaseResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSPolicyNameRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略ID */
  PolicyId: string;
  /** 策略名称 */
  Name: string;
}

declare interface ModifyDDoSPolicyNameResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSPolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略ID */
  PolicyId: string;
  /** 协议禁用，必须填写且数组长度必须为1 */
  DropOptions: DDoSPolicyDropOption[];
  /** 端口禁用，当没有禁用端口时填空数组 */
  PortLimits?: DDoSPolicyPortLimit[];
  /** IP黑白名单，当没有IP黑白名单时填空数组 */
  IpAllowDenys?: IpBlackWhite[];
  /** 报文过滤，当没有报文过滤时填空数组 */
  PacketFilters?: DDoSPolicyPacketFilter[];
  /** 水印策略参数，当没有启用水印功能时填空数组，最多只能传一条水印策略（即数组大小不超过1） */
  WaterPrint?: WaterPrintPolicy[];
}

declare interface ModifyDDoSPolicyResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSSwitchRequest {
  /** 大禹子产品代号（basic表示基础防护） */
  Business: string;
  /** =get表示读取DDoS防护状态；=set表示修改DDoS防护状态； */
  Method: string;
  /** 基础防护的IP，只有当Business为基础防护时才需要填写此字段； */
  Ip?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)] */
  BizType?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）] */
  DeviceType?: string;
  /** 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); */
  InstanceId?: string;
  /** 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值："bj": 华北地区(北京)"cd": 西南地区(成都)"cq": 西南地区(重庆)"gz": 华南地区(广州)"gzopen": 华南地区(广州Open)"hk": 中国香港"kr": 东南亚地区(首尔)"sh": 华东地区(上海)"shjr": 华东地区(上海金融)"szjr": 华南地区(深圳金融)"sg": 东南亚地区(新加坡)"th": 东南亚地区(泰国)"de": 欧洲地区(德国)"usw": 美国西部（硅谷）"ca": 北美地区(多伦多)"jp": 日本"hzec": 杭州"in": 印度"use": 美东地区（弗吉尼亚）"ru": 俄罗斯"tpe": 中国台湾"nj": 南京 */
  IPRegion?: string;
  /** 可选字段，防护状态值，取值[0（关闭），1（开启）]；当Method为get时可以不填写此字段； */
  Status?: number;
}

declare interface ModifyDDoSSwitchResponse {
  /** 当前防护状态值，取值[0（关闭），1（开启）] */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSThresholdRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** DDoS清洗阈值，取值[0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000];当设置值为0时，表示采用默认值； */
  Threshold: number;
}

declare interface ModifyDDoSThresholdResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSWaterKeyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 策略ID */
  PolicyId: string;
  /** 密钥操作，取值：[add（添加），delete（删除），open（开启），close（关闭），get（获取密钥）] */
  Method: string;
  /** 密钥ID，当添加密钥操作时可以不填或填0，其他操作时必须填写； */
  KeyId?: number;
}

declare interface ModifyDDoSWaterKeyResponse {
  /** 水印密钥列表 */
  KeyList?: WaterPrintKey[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyElasticLimitRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 弹性防护阈值，取值[0 10000 20000 30000 40000 50000 60000 70000 80000 90000 100000 120000 150000 200000 250000 300000 400000 600000 800000 220000 310000 110000 270000 610000] */
  Limit: number;
}

declare interface ModifyElasticLimitResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4HealthRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 健康检查参数数组 */
  Healths: L4RuleHealth[];
}

declare interface ModifyL4HealthResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4KeepTimeRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则ID */
  RuleId: string;
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)] */
  KeepEnable: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
}

declare interface ModifyL4KeepTimeResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则 */
  Rule: L4RuleEntry;
}

declare interface ModifyL4RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7RulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 规则 */
  Rule: L7RuleEntry;
}

declare interface ModifyL7RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetReturnSwitchRequest {
  /** 大禹子产品代号（net表示高防IP专业版） */
  Business: string;
  /** 资源实例ID */
  Id: string;
  /** Status 表示回切开关，0: 关闭， 1:打开 */
  Status: number;
  /** 回切时长，单位：小时，取值[0,1,2,3,4,5,6;]当status=1时必选填写Hour>0 */
  Hour: number;
}

declare interface ModifyNetReturnSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNewDomainRulesRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 域名转发规则 */
  Rule: NewL7RuleEntry;
}

declare interface ModifyNewDomainRulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNewL4RuleRequest {
  /** 大禹子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 转发规则 */
  Rule: L4RuleEntry;
}

declare interface ModifyNewL4RuleResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResBindDDoSPolicyRequest {
  /** 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 资源ID */
  Id: string;
  /** 策略ID */
  PolicyId: string;
  /** 绑定或解绑，bind表示绑定策略，unbind表示解绑策略 */
  Method: string;
}

declare interface ModifyResBindDDoSPolicyResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourceRenewFlagRequest {
  /** 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版；shield表示棋牌盾；bgp表示独享包；bgp-multip表示共享包；insurance表示保险包；staticpack表示三网套餐包） */
  Business: string;
  /** 资源Id */
  Id: string;
  /** 自动续费标记（0手动续费；1自动续费；2到期不续费） */
  RenewFlag: number;
}

declare interface ModifyResourceRenewFlagResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dayu DDoS 高防包} */
declare interface Dayu {
  (): Versions;
  /** 设置基础防护的DDoS告警阈值 {@link CreateBasicDDoSAlarmThresholdRequest} {@link CreateBasicDDoSAlarmThresholdResponse} */
  CreateBasicDDoSAlarmThreshold(data: CreateBasicDDoSAlarmThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBasicDDoSAlarmThresholdResponse>;
  /** 绑定IP到高防包实例 {@link CreateBoundIPRequest} {@link CreateBoundIPResponse} */
  CreateBoundIP(data: CreateBoundIPRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBoundIPResponse>;
  /** 添加CC防护的访问频率控制规则 {@link CreateCCFrequencyRulesRequest} {@link CreateCCFrequencyRulesResponse} */
  CreateCCFrequencyRules(data: CreateCCFrequencyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCCFrequencyRulesResponse>;
  /** 创建CC自定义策略 {@link CreateCCSelfDefinePolicyRequest} {@link CreateCCSelfDefinePolicyResponse} */
  CreateCCSelfDefinePolicy(data: CreateCCSelfDefinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCCSelfDefinePolicyResponse>;
  /** 添加DDoS高级策略 {@link CreateDDoSPolicyRequest} {@link CreateDDoSPolicyResponse} */
  CreateDDoSPolicy(data: CreateDDoSPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDDoSPolicyResponse>;
  /** 添加策略场景 {@link CreateDDoSPolicyCaseRequest} {@link CreateDDoSPolicyCaseResponse} */
  CreateDDoSPolicyCase(data: CreateDDoSPolicyCaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDDoSPolicyCaseResponse>;
  /** 资源实例重命名 {@link CreateInstanceNameRequest} {@link CreateInstanceNameResponse} */
  CreateInstanceName(data: CreateInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceNameResponse>;
  /** 上传四层健康检查配置 {@link CreateL4HealthConfigRequest} {@link CreateL4HealthConfigResponse} */
  CreateL4HealthConfig(data: CreateL4HealthConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL4HealthConfigResponse>;
  /** 添加L4转发规则 {@link CreateL4RulesRequest} {@link CreateL4RulesResponse} */
  CreateL4Rules(data: CreateL4RulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL4RulesResponse>;
  /** 创建7层CC自定义规则 {@link CreateL7CCRuleRequest} {@link CreateL7CCRuleResponse} */
  CreateL7CCRule(data: CreateL7CCRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7CCRuleResponse>;
  /** 上传七层健康检查配置 {@link CreateL7HealthConfigRequest} {@link CreateL7HealthConfigResponse} */
  CreateL7HealthConfig(data: CreateL7HealthConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7HealthConfigResponse>;
  /** 配置L7转发规则的证书 {@link CreateL7RuleCertRequest} {@link CreateL7RuleCertResponse} */
  CreateL7RuleCert(data: CreateL7RuleCertRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7RuleCertResponse>;
  /** 添加L7转发规则 {@link CreateL7RulesRequest} {@link CreateL7RulesResponse} */
  CreateL7Rules(data: CreateL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7RulesResponse>;
  /** 批量上传L7转发规则 {@link CreateL7RulesUploadRequest} {@link CreateL7RulesUploadResponse} */
  CreateL7RulesUpload(data: CreateL7RulesUploadRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7RulesUploadResponse>;
  /** 一键切回 {@link CreateNetReturnRequest} {@link CreateNetReturnResponse} */
  CreateNetReturn(data: CreateNetReturnRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetReturnResponse>;
  /** 添加四层转发规则 {@link CreateNewL4RulesRequest} {@link CreateNewL4RulesResponse} */
  CreateNewL4Rules(data: CreateNewL4RulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNewL4RulesResponse>;
  /** 添加7层转发规则 {@link CreateNewL7RulesRequest} {@link CreateNewL7RulesResponse} */
  CreateNewL7Rules(data: CreateNewL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNewL7RulesResponse>;
  /** 批量上传7层转发规则 {@link CreateNewL7RulesUploadRequest} {@link CreateNewL7RulesUploadResponse} */
  CreateNewL7RulesUpload(data: CreateNewL7RulesUploadRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNewL7RulesUploadResponse>;
  /** IP解封操作 {@link CreateUnblockIpRequest} {@link CreateUnblockIpResponse} */
  CreateUnblockIp(data: CreateUnblockIpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUnblockIpResponse>;
  /** 删除CC防护的访问频率控制规则 {@link DeleteCCFrequencyRulesRequest} {@link DeleteCCFrequencyRulesResponse} */
  DeleteCCFrequencyRules(data: DeleteCCFrequencyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCFrequencyRulesResponse>;
  /** 删除CC自定义策略 {@link DeleteCCSelfDefinePolicyRequest} {@link DeleteCCSelfDefinePolicyResponse} */
  DeleteCCSelfDefinePolicy(data: DeleteCCSelfDefinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCSelfDefinePolicyResponse>;
  /** 删除DDoS高级策略 {@link DeleteDDoSPolicyRequest} {@link DeleteDDoSPolicyResponse} */
  DeleteDDoSPolicy(data: DeleteDDoSPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDDoSPolicyResponse>;
  /** 删除策略场景 {@link DeleteDDoSPolicyCaseRequest} {@link DeleteDDoSPolicyCaseResponse} */
  DeleteDDoSPolicyCase(data: DeleteDDoSPolicyCaseRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDDoSPolicyCaseResponse>;
  /** 删除L4转发规则 {@link DeleteL4RulesRequest} {@link DeleteL4RulesResponse} */
  DeleteL4Rules(data: DeleteL4RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL4RulesResponse>;
  /** 删除L7转发规则 {@link DeleteL7RulesRequest} {@link DeleteL7RulesResponse} */
  DeleteL7Rules(data: DeleteL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL7RulesResponse>;
  /** 删除四层转发规则 {@link DeleteNewL4RulesRequest} {@link DeleteNewL4RulesResponse} */
  DeleteNewL4Rules(data: DeleteNewL4RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNewL4RulesResponse>;
  /** 删除七层转发规则 {@link DeleteNewL7RulesRequest} {@link DeleteNewL7RulesResponse} */
  DeleteNewL7Rules(data: DeleteNewL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNewL7RulesResponse>;
  /** 获取操作日志 {@link DescribeActionLogRequest} {@link DescribeActionLogResponse} */
  DescribeActionLog(data: DescribeActionLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActionLogResponse>;
  /** 获取高防IP可添加的最多7层规则数量 {@link DescribeBGPIPL7RuleMaxCntRequest} {@link DescribeBGPIPL7RuleMaxCntResponse} */
  DescribeBGPIPL7RuleMaxCnt(data: DescribeBGPIPL7RuleMaxCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBGPIPL7RuleMaxCntResponse>;
  /** 获取转发报表数据 {@link DescribeBaradDataRequest} {@link DescribeBaradDataResponse} */
  DescribeBaradData(data: DescribeBaradDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaradDataResponse>;
  /** 获取基础防护CC防护阈值 {@link DescribeBasicCCThresholdRequest} {@link DescribeBasicCCThresholdResponse} */
  DescribeBasicCCThreshold(data: DescribeBasicCCThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBasicCCThresholdResponse>;
  /** 获取基础防护黑洞阈值 {@link DescribeBasicDeviceThresholdRequest} {@link DescribeBasicDeviceThresholdResponse} */
  DescribeBasicDeviceThreshold(data: DescribeBasicDeviceThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBasicDeviceThresholdResponse>;
  /** 获取业务流量状态码统计 {@link DescribeBizHttpStatusRequest} {@link DescribeBizHttpStatusResponse} */
  DescribeBizHttpStatus(data: DescribeBizHttpStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBizHttpStatusResponse>;
  /** 获取业务流量曲线 {@link DescribeBizTrendRequest} {@link DescribeBizTrendResponse} */
  DescribeBizTrend(data: DescribeBizTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBizTrendResponse>;
  /** 获取CC告警通知阈值 {@link DescribeCCAlarmThresholdRequest} {@link DescribeCCAlarmThresholdResponse} */
  DescribeCCAlarmThreshold(data: DescribeCCAlarmThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCAlarmThresholdResponse>;
  /** 获取CC攻击事件列表 {@link DescribeCCEvListRequest} {@link DescribeCCEvListResponse} */
  DescribeCCEvList(data: DescribeCCEvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCEvListResponse>;
  /** 获取CC防护的访问频率控制规则 {@link DescribeCCFrequencyRulesRequest} {@link DescribeCCFrequencyRulesResponse} */
  DescribeCCFrequencyRules(data: DescribeCCFrequencyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCFrequencyRulesResponse>;
  /** 获取CC的IP黑白名单 {@link DescribeCCIpAllowDenyRequest} {@link DescribeCCIpAllowDenyResponse} */
  DescribeCCIpAllowDeny(data: DescribeCCIpAllowDenyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCIpAllowDenyResponse>;
  /** 获取CC自定义策略 {@link DescribeCCSelfDefinePolicyRequest} {@link DescribeCCSelfDefinePolicyResponse} */
  DescribeCCSelfDefinePolicy(data: DescribeCCSelfDefinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCSelfDefinePolicyResponse>;
  /** 获取CC攻击指标数据 {@link DescribeCCTrendRequest} {@link DescribeCCTrendResponse} */
  DescribeCCTrend(data: DescribeCCTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCTrendResponse>;
  /** 获取CC的Url白名单 {@link DescribeCCUrlAllowRequest} {@link DescribeCCUrlAllowResponse} */
  DescribeCCUrlAllow(data: DescribeCCUrlAllowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCUrlAllowResponse>;
  /** 获取DDoS告警通知阈值 {@link DescribeDDoSAlarmThresholdRequest} {@link DescribeDDoSAlarmThresholdResponse} */
  DescribeDDoSAlarmThreshold(data: DescribeDDoSAlarmThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAlarmThresholdResponse>;
  /** DDoS攻击源IP地域分布图 {@link DescribeDDoSAttackIPRegionMapRequest} {@link DescribeDDoSAttackIPRegionMapResponse} */
  DescribeDDoSAttackIPRegionMap(data: DescribeDDoSAttackIPRegionMapRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackIPRegionMapResponse>;
  /** 获取DDoS攻击源列表 {@link DescribeDDoSAttackSourceRequest} {@link DescribeDDoSAttackSourceResponse} */
  DescribeDDoSAttackSource(data: DescribeDDoSAttackSourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackSourceResponse>;
  /** 获取DDoS攻击占比分析 {@link DescribeDDoSCountRequest} {@link DescribeDDoSCountResponse} */
  DescribeDDoSCount(data: DescribeDDoSCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSCountResponse>;
  /** 获取DDoS防护状态 {@link DescribeDDoSDefendStatusRequest} {@link DescribeDDoSDefendStatusResponse} */
  DescribeDDoSDefendStatus(data: DescribeDDoSDefendStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSDefendStatusResponse>;
  /** 获取DDoS攻击事件详情 {@link DescribeDDoSEvInfoRequest} {@link DescribeDDoSEvInfoResponse} */
  DescribeDDoSEvInfo(data: DescribeDDoSEvInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSEvInfoResponse>;
  /** 获取DDoS攻击事件列表 {@link DescribeDDoSEvListRequest} {@link DescribeDDoSEvListResponse} */
  DescribeDDoSEvList(data: DescribeDDoSEvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSEvListResponse>;
  /** 获取DDoSIP攻击日志 {@link DescribeDDoSIpLogRequest} {@link DescribeDDoSIpLogResponse} */
  DescribeDDoSIpLog(data: DescribeDDoSIpLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSIpLogResponse>;
  /** 获取高防IP专业版资源的DDoS攻击占比分析 {@link DescribeDDoSNetCountRequest} {@link DescribeDDoSNetCountResponse} */
  DescribeDDoSNetCount(data: DescribeDDoSNetCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSNetCountResponse>;
  /** 获取高防IP专业版资源的DDoS攻击事件详情 {@link DescribeDDoSNetEvInfoRequest} {@link DescribeDDoSNetEvInfoResponse} */
  DescribeDDoSNetEvInfo(data: DescribeDDoSNetEvInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSNetEvInfoResponse>;
  /** 获取高防IP专业版资源的DDoS攻击事件列表 {@link DescribeDDoSNetEvListRequest} {@link DescribeDDoSNetEvListResponse} */
  DescribeDDoSNetEvList(data: DescribeDDoSNetEvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSNetEvListResponse>;
  /** 获取高防IP专业版资源的DDoSIP攻击日志 {@link DescribeDDoSNetIpLogRequest} {@link DescribeDDoSNetIpLogResponse} */
  DescribeDDoSNetIpLog(data: DescribeDDoSNetIpLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSNetIpLogResponse>;
  /** 获取高防IP专业版资源的DDoS攻击指标数据 {@link DescribeDDoSNetTrendRequest} {@link DescribeDDoSNetTrendResponse} */
  DescribeDDoSNetTrend(data: DescribeDDoSNetTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSNetTrendResponse>;
  /** 获取DDoS高级策略 {@link DescribeDDoSPolicyRequest} {@link DescribeDDoSPolicyResponse} */
  DescribeDDoSPolicy(data: DescribeDDoSPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSPolicyResponse>;
  /** 获取DDoS攻击指标数据 {@link DescribeDDoSTrendRequest} {@link DescribeDDoSTrendResponse} */
  DescribeDDoSTrend(data: DescribeDDoSTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSTrendResponse>;
  /** 获取DDoS防护使用统计 {@link DescribeDDoSUsedStatisRequest} {@link DescribeDDoSUsedStatisResponse} */
  DescribeDDoSUsedStatis(data: DescribeDDoSUsedStatisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSUsedStatisResponse>;
  /** 获取独享包或共享包IP对应的云资产信息 {@link DescribeIPProductInfoRequest} {@link DescribeIPProductInfoResponse} */
  DescribeIPProductInfo(data: DescribeIPProductInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPProductInfoResponse>;
  /** 获取保险包套餐列表 {@link DescribeInsurePacksRequest} {@link DescribeInsurePacksResponse} */
  DescribeInsurePacks(data?: DescribeInsurePacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInsurePacksResponse>;
  /** 获取IP封堵列表 {@link DescribeIpBlockListRequest} {@link DescribeIpBlockListResponse} */
  DescribeIpBlockList(data?: DescribeIpBlockListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpBlockListResponse>;
  /** 获取IP解封记录 {@link DescribeIpUnBlockListRequest} {@link DescribeIpUnBlockListResponse} */
  DescribeIpUnBlockList(data: DescribeIpUnBlockListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpUnBlockListResponse>;
  /** 导出四层健康检查配置 {@link DescribeL4HealthConfigRequest} {@link DescribeL4HealthConfigResponse} */
  DescribeL4HealthConfig(data: DescribeL4HealthConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL4HealthConfigResponse>;
  /** 获取L4转发规则健康检查异常结果 {@link DescribeL4RulesErrHealthRequest} {@link DescribeL4RulesErrHealthResponse} */
  DescribeL4RulesErrHealth(data: DescribeL4RulesErrHealthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL4RulesErrHealthResponse>;
  /** 导出七层健康检查配置 {@link DescribeL7HealthConfigRequest} {@link DescribeL7HealthConfigResponse} */
  DescribeL7HealthConfig(data: DescribeL7HealthConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7HealthConfigResponse>;
  /** 获取四层转发规则 {@link DescribeNewL4RulesRequest} {@link DescribeNewL4RulesResponse} */
  DescribeNewL4Rules(data: DescribeNewL4RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewL4RulesResponse>;
  /** 获取四层转发规则健康检查异常结果 {@link DescribeNewL4RulesErrHealthRequest} {@link DescribeNewL4RulesErrHealthResponse} */
  DescribeNewL4RulesErrHealth(data: DescribeNewL4RulesErrHealthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewL4RulesErrHealthResponse>;
  /** 获取L7转发规则健康检查异常结果 {@link DescribeNewL7RulesErrHealthRequest} {@link DescribeNewL7RulesErrHealthResponse} */
  DescribeNewL7RulesErrHealth(data: DescribeNewL7RulesErrHealthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewL7RulesErrHealthResponse>;
  /** 获取产品总览 {@link DescribePackIndexRequest} {@link DescribePackIndexResponse} */
  DescribePackIndex(data: DescribePackIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackIndexResponse>;
  /** 下载攻击事件的pcap包 {@link DescribePcapRequest} {@link DescribePcapResponse} */
  DescribePcap(data: DescribePcapRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePcapResponse>;
  /** 获取策略场景 {@link DescribePolicyCaseRequest} {@link DescribePolicyCaseResponse} */
  DescribePolicyCase(data: DescribePolicyCaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyCaseResponse>;
  /** 获取资源的IP列表 {@link DescribeResIpListRequest} {@link DescribeResIpListResponse} */
  DescribeResIpList(data: DescribeResIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResIpListResponse>;
  /** 获取资源列表 {@link DescribeResourceListRequest} {@link DescribeResourceListResponse} */
  DescribeResourceList(data: DescribeResourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceListResponse>;
  /** 获取资源的规则数 {@link DescribeRuleSetsRequest} {@link DescribeRuleSetsResponse} */
  DescribeRuleSets(data: DescribeRuleSetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleSetsResponse>;
  /** 获取调度域名列表 {@link DescribeSchedulingDomainListRequest} {@link DescribeSchedulingDomainListResponse} */
  DescribeSchedulingDomainList(data: DescribeSchedulingDomainListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSchedulingDomainListResponse>;
  /** 获取安全统计 {@link DescribeSecIndexRequest} {@link DescribeSecIndexResponse} */
  DescribeSecIndex(data?: DescribeSecIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecIndexResponse>;
  /** 获取回源IP段 {@link DescribeSourceIpSegmentRequest} {@link DescribeSourceIpSegmentResponse} */
  DescribeSourceIpSegment(data: DescribeSourceIpSegmentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSourceIpSegmentResponse>;
  /** 获取业务转发统计数据 {@link DescribeTransmitStatisRequest} {@link DescribeTransmitStatisResponse} */
  DescribeTransmitStatis(data: DescribeTransmitStatisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTransmitStatisResponse>;
  /** 获取黑洞解封次数 {@link DescribeUnBlockStatisRequest} {@link DescribeUnBlockStatisResponse} */
  DescribeUnBlockStatis(data?: DescribeUnBlockStatisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnBlockStatisResponse>;
  /** 获取L4转发规则 {@link DescribleL4RulesRequest} {@link DescribleL4RulesResponse} */
  DescribleL4Rules(data: DescribleL4RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribleL4RulesResponse>;
  /** 获取L7转发规则 {@link DescribleL7RulesRequest} {@link DescribleL7RulesResponse} */
  DescribleL7Rules(data: DescribleL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribleL7RulesResponse>;
  /** 获取7层规则 {@link DescribleNewL7RulesRequest} {@link DescribleNewL7RulesResponse} */
  DescribleNewL7Rules(data: DescribleNewL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribleNewL7RulesResponse>;
  /** 获取地域的资源实例数 {@link DescribleRegionCountRequest} {@link DescribleRegionCountResponse} */
  DescribleRegionCount(data: DescribleRegionCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribleRegionCountResponse>;
  /** 设置CC告警通知阈值 {@link ModifyCCAlarmThresholdRequest} {@link ModifyCCAlarmThresholdResponse} */
  ModifyCCAlarmThreshold(data: ModifyCCAlarmThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCAlarmThresholdResponse>;
  /** 修改CC防护的访问频率控制规则 {@link ModifyCCFrequencyRulesRequest} {@link ModifyCCFrequencyRulesResponse} */
  ModifyCCFrequencyRules(data: ModifyCCFrequencyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCFrequencyRulesResponse>;
  /** 开启或关闭CC防护的访问频率控制规则 {@link ModifyCCFrequencyRulesStatusRequest} {@link ModifyCCFrequencyRulesStatusResponse} */
  ModifyCCFrequencyRulesStatus(data: ModifyCCFrequencyRulesStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCFrequencyRulesStatusResponse>;
  /** 开启或关闭CC域名防护 {@link ModifyCCHostProtectionRequest} {@link ModifyCCHostProtectionResponse} */
  ModifyCCHostProtection(data: ModifyCCHostProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCHostProtectionResponse>;
  /** 添加或删除CC的IP黑白名单 {@link ModifyCCIpAllowDenyRequest} {@link ModifyCCIpAllowDenyResponse} */
  ModifyCCIpAllowDeny(data: ModifyCCIpAllowDenyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCIpAllowDenyResponse>;
  /** 修改CC防护等级 {@link ModifyCCLevelRequest} {@link ModifyCCLevelResponse} */
  ModifyCCLevel(data: ModifyCCLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCLevelResponse>;
  /** 修改CC自定义策略开关 {@link ModifyCCPolicySwitchRequest} {@link ModifyCCPolicySwitchResponse} */
  ModifyCCPolicySwitch(data: ModifyCCPolicySwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCPolicySwitchResponse>;
  /** 修改CC自定义策略 {@link ModifyCCSelfDefinePolicyRequest} {@link ModifyCCSelfDefinePolicyResponse} */
  ModifyCCSelfDefinePolicy(data: ModifyCCSelfDefinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCSelfDefinePolicyResponse>;
  /** 修改CC的防护阈值 {@link ModifyCCThresholdRequest} {@link ModifyCCThresholdResponse} */
  ModifyCCThreshold(data: ModifyCCThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCThresholdResponse>;
  /** 添加或删除CC的URL白名单 {@link ModifyCCUrlAllowRequest} {@link ModifyCCUrlAllowResponse} */
  ModifyCCUrlAllow(data: ModifyCCUrlAllowRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCUrlAllowResponse>;
  /** 修改DDoS的AI防护状态 {@link ModifyDDoSAIStatusRequest} {@link ModifyDDoSAIStatusResponse} */
  ModifyDDoSAIStatus(data: ModifyDDoSAIStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSAIStatusResponse>;
  /** 设置DDoS告警通知阈值 {@link ModifyDDoSAlarmThresholdRequest} {@link ModifyDDoSAlarmThresholdResponse} */
  ModifyDDoSAlarmThreshold(data: ModifyDDoSAlarmThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSAlarmThresholdResponse>;
  /** 修改DDoS防护状态 {@link ModifyDDoSDefendStatusRequest} {@link ModifyDDoSDefendStatusResponse} */
  ModifyDDoSDefendStatus(data: ModifyDDoSDefendStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSDefendStatusResponse>;
  /** 修改DDoSIP防护等级 {@link ModifyDDoSLevelRequest} {@link ModifyDDoSLevelResponse} */
  ModifyDDoSLevel(data: ModifyDDoSLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSLevelResponse>;
  /** 修改DDoS高级策略 {@link ModifyDDoSPolicyRequest} {@link ModifyDDoSPolicyResponse} */
  ModifyDDoSPolicy(data: ModifyDDoSPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSPolicyResponse>;
  /** 修改策略场景 {@link ModifyDDoSPolicyCaseRequest} {@link ModifyDDoSPolicyCaseResponse} */
  ModifyDDoSPolicyCase(data: ModifyDDoSPolicyCaseRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSPolicyCaseResponse>;
  /** 修改DDoS高级策略名称 {@link ModifyDDoSPolicyNameRequest} {@link ModifyDDoSPolicyNameResponse} */
  ModifyDDoSPolicyName(data: ModifyDDoSPolicyNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSPolicyNameResponse>;
  /** 开启或关闭DDoS防护 {@link ModifyDDoSSwitchRequest} {@link ModifyDDoSSwitchResponse} */
  ModifyDDoSSwitch(data: ModifyDDoSSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSSwitchResponse>;
  /** 修改DDoS清洗阈值 {@link ModifyDDoSThresholdRequest} {@link ModifyDDoSThresholdResponse} */
  ModifyDDoSThreshold(data: ModifyDDoSThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSThresholdResponse>;
  /** 修改水印密钥 {@link ModifyDDoSWaterKeyRequest} {@link ModifyDDoSWaterKeyResponse} */
  ModifyDDoSWaterKey(data: ModifyDDoSWaterKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSWaterKeyResponse>;
  /** 修改弹性防护阈值 {@link ModifyElasticLimitRequest} {@link ModifyElasticLimitResponse} */
  ModifyElasticLimit(data: ModifyElasticLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyElasticLimitResponse>;
  /** 修改L4转发规则健康检查参数 {@link ModifyL4HealthRequest} {@link ModifyL4HealthResponse} */
  ModifyL4Health(data: ModifyL4HealthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4HealthResponse>;
  /** 修改L4转发规则的会话保持 {@link ModifyL4KeepTimeRequest} {@link ModifyL4KeepTimeResponse} */
  ModifyL4KeepTime(data: ModifyL4KeepTimeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4KeepTimeResponse>;
  /** 修改L4转发规则 {@link ModifyL4RulesRequest} {@link ModifyL4RulesResponse} */
  ModifyL4Rules(data: ModifyL4RulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4RulesResponse>;
  /** 修改L7转发规则 {@link ModifyL7RulesRequest} {@link ModifyL7RulesResponse} */
  ModifyL7Rules(data: ModifyL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7RulesResponse>;
  /** 设置自动切回 {@link ModifyNetReturnSwitchRequest} {@link ModifyNetReturnSwitchResponse} */
  ModifyNetReturnSwitch(data: ModifyNetReturnSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetReturnSwitchResponse>;
  /** 修改7层转发规则 {@link ModifyNewDomainRulesRequest} {@link ModifyNewDomainRulesResponse} */
  ModifyNewDomainRules(data: ModifyNewDomainRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNewDomainRulesResponse>;
  /** 修改4层转发规则 {@link ModifyNewL4RuleRequest} {@link ModifyNewL4RuleResponse} */
  ModifyNewL4Rule(data: ModifyNewL4RuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNewL4RuleResponse>;
  /** 资源绑定DDoS高级策略 {@link ModifyResBindDDoSPolicyRequest} {@link ModifyResBindDDoSPolicyResponse} */
  ModifyResBindDDoSPolicy(data: ModifyResBindDDoSPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResBindDDoSPolicyResponse>;
  /** 修改资源自动续费标记 {@link ModifyResourceRenewFlagRequest} {@link ModifyResourceRenewFlagResponse} */
  ModifyResourceRenewFlag(data: ModifyResourceRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceRenewFlagResponse>;
}

export declare type Versions = ["2018-07-09"];

export default Dayu;
