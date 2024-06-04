/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 基于端口的acl策略 */
declare interface AclConfig {
  /** 协议类型, 可取值tcp, udp, all */
  ForwardProtocol: string;
  /** 目的端口起始，可取值范围0~65535 */
  DPortStart: number;
  /** 目的端口结束，可取值范围0~65535 */
  DPortEnd: number;
  /** 来源端口起始，可取值范围0~65535 */
  SPortStart: number;
  /** 来源端口结束，可取值范围0~65535 */
  SPortEnd: number;
  /** 动作，可取值：drop， transmit， forward */
  Action: string;
  /** 策略优先级，数字越小，级别越高，该规则越靠前匹配，取值1-1000 */
  Priority?: number | null;
}

/** 端口acl策略配置与高防资源关联 */
declare interface AclConfigRelation {
  /** acl策略 */
  AclConfig: AclConfig;
  /** 实例列表 */
  InstanceDetailList: InstanceRelation[];
}

/** Anycast转外套餐详情 */
declare interface AnycastOutPackRelation {
  /** 业务带宽(单位M) */
  NormalBandwidth: number | null;
  /** 转发规则数 */
  ForwardRulesLimit: number | null;
  /** 自动续费标记 */
  AutoRenewFlag: number | null;
  /** 到期时间 */
  CurDeadline: string | null;
}

/** 高防IP资产实例信息 */
declare interface BGPIPInstance {
  /** 资产实例的详细信息 */
  InstanceDetail?: InstanceRelation;
  /** 资产实例的规格信息 */
  SpecificationLimit?: BGPIPInstanceSpecification;
  /** 资产实例的使用统计信息 */
  Usage?: BGPIPInstanceUsages;
  /** 资产实例所在的地域 */
  Region?: RegionInfo;
  /** 资产实例的防护状态，状态码如下："idle"：正常状态(无攻击)"attacking"：攻击中"blocking"：封堵中"creating"：创建中"deblocking"：解封中"isolate"：回收隔离中 */
  Status?: string;
  /** 到期时间 */
  ExpiredTime?: string;
  /** 购买时间 */
  CreatedTime?: string;
  /** 资产实例的名称 */
  Name?: string;
  /** 资产实例所属的套餐包信息，注意：当资产实例不是套餐包的实例时，此字段为null */
  PackInfo?: PackInfo | null;
  /** 资产实例所属的三网套餐包详情，注意：当资产实例不是三网套餐包的实例时，此字段为null */
  StaticPackRelation?: StaticPackRelation | null;
  /** 区分高防IP境外线路 */
  ZoneId?: number | null;
  /** 区分集群 */
  Tgw?: number | null;
  /** 高防弹性公网IP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)。只对高防弹性公网IP实例有效。 */
  EipAddressStatus?: string | null;
  /** 是否高防弹性公网IP实例，是为1，否为0。 */
  EipFlag?: number | null;
  /** 资产实例所属的高防弹性公网IP套餐包详情，注意：当资产实例不是高防弹性公网IP套餐包的实例时，此字段为null */
  EipAddressPackRelation?: EipAddressPackRelation | null;
  /** 高防弹性公网IP关联的实例信息。注意：当资产实例不是高防弹性公网IP实例时，此字段为null */
  EipAddressInfo?: EipAddressRelation | null;
  /** 建议客户接入的域名，客户可使用域名接入。 */
  Domain?: string | null;
  /** 是否开启安全加速，是为1，否为0。 */
  DamDDoSStatus?: number;
  /** 是否Ipv6版本的IP, 是为1，否为0 */
  V6Flag?: number | null;
  /** 是否渠道版高防IP，是为1，否为0 */
  BGPIPChannelFlag?: number | null;
  /** 资源关联标签 */
  TagInfoList?: TagInfo[] | null;
  /** 资产实例所属的全力防护套餐包详情，注意：当资产实例不是全力防护套餐包的实例时，此字段为null */
  AnycastOutPackRelation?: AnycastOutPackRelation | null;
  /** 资源实例版本 */
  InstanceVersion?: number | null;
  /** 重保实例 */
  ConvoyId?: string | null;
  /** 带宽后付费 */
  ElasticBandwidth?: number | null;
  /** 是否为EO代播的ip: 1是，0不是 */
  EOFlag?: number | null;
}

/** 高防IP资产实例的规格信息 */
declare interface BGPIPInstanceSpecification {
  /** 保底防护峰值，单位Mbps */
  ProtectBandwidth: number;
  /** CC防护峰值，单位qps */
  ProtectCCQPS: number;
  /** 正常业务带宽，单位Mbps */
  NormalBandwidth: number;
  /** 转发规则数，单位条 */
  ForwardRulesLimit: number;
  /** 自动续费状态，取值[0：没有开启自动续费1：开启了自动续费] */
  AutoRenewFlag: number;
  /** 高防IP线路，取值为[1：BGP线路2：电信3：联通4：移动99：第三方合作线路] */
  Line: number;
  /** 弹性防护峰值，单位Mbps */
  ElasticBandwidth: number;
}

/** 高防IP资产实例的使用信息统计 */
declare interface BGPIPInstanceUsages {
  /** 已使用的端口规则数，单位条 */
  PortRulesUsage: number;
  /** 已使用的域名规则数，单位条 */
  DomainRulesUsage: number;
  /** 最近7天的攻击次数，单位次 */
  Last7DayAttackCount: number;
}

/** L7规则 */
declare interface BGPIPL7RuleEntry {
  /** 转发协议，取值[http, https] */
  Protocol: string;
  /** 转发域名 */
  Domain: string;
  /** 负载均衡方式，取值[1(加权轮询)] */
  LbType: number;
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)] */
  KeepEnable: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
  /** 回源方式，取值[1(域名回源)，2(IP回源)] */
  SourceType: number;
  /** 回源列表 */
  SourceList: L4RuleSource[];
  /** 区域码 */
  Region?: number;
  /** 资源Id */
  Id?: string;
  /** 资源Ip */
  Ip?: string;
  /** 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段； */
  RuleId?: string;
  /** 规则描述 */
  RuleName?: string;
  /** 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0 */
  CertType?: number;
  /** 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID */
  SSLId?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  Cert?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  PrivateKey?: string;
  /** 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  Status?: number;
  /** cc防护状态，取值[0(关闭), 1(开启)] */
  CCStatus?: number;
  /** HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)] */
  CCEnable?: number;
  /** HTTPS协议的CC防护阈值（已废弃） */
  CCThreshold?: number;
  /** HTTPS协议的CC防护等级 */
  CCLevel?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭 */
  HttpsToHttpEnable?: number;
  /** 接入端口值 */
  VirtualPort?: number | null;
  /** http强制跳转https，1表示打开，0表示关闭 */
  RewriteHttps?: number;
  /** 规则配置失败时的详细错误原因(仅当Status=2时有效)，1001证书不存在，1002证书获取失败，1003证书上传失败，1004证书已过期 */
  ErrCode?: number;
  /** 版本 */
  Version?: number | null;
}

/** 高防包资产实例信息 */
declare interface BGPInstance {
  /** 资产实例的详细信息 */
  InstanceDetail?: InstanceRelation;
  /** 资产实例的规格信息 */
  SpecificationLimit?: BGPInstanceSpecification;
  /** 资产实例的使用统计信息 */
  Usage?: BGPInstanceUsages;
  /** 资产实例所在的地域 */
  Region?: RegionInfo;
  /** 资产实例的防护状态，状态码如下："idle"：正常状态(无攻击)"attacking"：攻击中"blocking"：封堵中"creating"：创建中"deblocking"：解封中"isolate"：回收隔离中 */
  Status?: string;
  /** 购买时间 */
  CreatedTime?: string;
  /** 到期时间 */
  ExpiredTime?: string;
  /** 资产实例的名称 */
  Name?: string;
  /** 资产实例所属的套餐包信息，注意：当资产实例不是套餐包的实例时，此字段为null */
  PackInfo?: PackInfo | null;
  /** 高防包绑定的EIP属于的云产品信息 */
  EipProductInfos?: EipProductInfo[];
  /** 高防包绑定状态，取值["idle"：绑定已完成 "bounding"：正在绑定中"failed"：绑定失败] */
  BoundStatus?: string;
  /** 四层防护严格级别 */
  DDoSLevel?: string;
  /** CC防护开关 */
  CCEnable?: number;
  /** 资源关联标签 */
  TagInfoList?: TagInfo[];
  /** 新版本1ip高防包 */
  IpCountNewFlag?: number;
  /** 攻击封堵套餐标记 */
  VitalityVersion?: number;
  /** 网络线路 */
  Line?: number | null;
  /** 不计费的业务带宽 */
  FreeServiceBandwidth?: number | null;
  /** 弹性业务带宽开关 */
  ElasticServiceBandwidth?: number;
  /** 赠送的业务带宽 */
  GiftServiceBandWidth?: number;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 是否是基础防护加强版 0: 不是 1: 是 */
  BasicPlusFlag?: number | null;
  /** 是否是商业模式优化-普惠版 */
  PlanCntFlag?: number | null;
  /** 是否跨区域产品 0: 不包含跨区域产品 1: 中国大陆跨区域产品 2: 非中国大陆跨区域产品 */
  TransRegionFlag?: number | null;
  /** 是否为超级高防包 */
  SuperPackFlag?: number | null;
  /** 所属ZoneId */
  ZoneId?: number | null;
}

/** 高防包资产实例的规格信息 */
declare interface BGPInstanceSpecification {
  /** 保底防护峰值，单位Gbps */
  ProtectBandwidth: number;
  /** 防护次数，单位次 */
  ProtectCountLimit: number;
  /** 防护IP数，单位个 */
  ProtectIPNumberLimit: number;
  /** 自动续费状态，取值[0：没有开启自动续费1：开启了自动续费] */
  AutoRenewFlag: number;
  /** 联合产品标记，0代表普通高防包，1代表联合高防包 */
  UnionPackFlag: number | null;
  /** 业务带宽 */
  ServiceBandWidth: number | null;
  /** 战斗服版本标记，0表示普通高防包，1表示战斗服高防包 */
  BattleEditionFlag: number | null;
  /** 渠道版标记，0表示普通高防包，1表示渠道版高防包 */
  ChannelEditionFlag: number | null;
  /** 高防包企业版标记，0表示普通高防包；1表示企业版高防包 */
  EnterpriseFlag: number | null;
  /** 高防包企业版弹性阈值，0表示未开启；大于0为弹性防护阈值 */
  ElasticLimit: number | null;
  /** 降配后的防护能力，单位Gbps */
  DownGradeProtect?: number | null;
}

/** 高防包资产实例的使用信息统计 */
declare interface BGPInstanceUsages {
  /** 已使用的防护次数，单位次 */
  ProtectCountUsage: number;
  /** 已防护的IP数，单位个 */
  ProtectIPNumberUsage: number;
  /** 最近7天的攻击次数，单位次 */
  Last7DayAttackCount: number;
}

/** 黑白名单IP */
declare interface BlackWhiteIpRelation {
  /** IP地址 */
  Ip: string;
  /** IP类型，取值[black(黑IP)，white(白IP)] */
  Type: string;
  /** 黑白IP所属的实例 */
  InstanceDetailList: InstanceRelation[];
  /** ip掩码，0表示32位完整ip */
  Mask: number;
  /** 修改时间 */
  ModifyTime: string;
}

/** 高防包绑定IP对象 */
declare interface BoundIpInfo {
  /** IP地址 */
  Ip: string;
  /** 绑定的产品分类，绑定操作为必填项，解绑操作可不填。取值[public（CVM、CLB产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)] */
  BizType?: string;
  /** IP所属的资源实例ID，绑定操作为必填项，解绑操作可不填。例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); 如果绑定的是托管IP没有对应的资源实例ID，请填写"none"; */
  InstanceId?: string;
  /** 产品分类下的子类型，绑定操作为必填项，解绑操作可不填。取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（弹性公网常规IP）] */
  DeviceType?: string;
  /** 运营商，绑定操作为必填项，解绑操作可不填。0：电信；1：联通；2：移动；5：BGP */
  IspCode?: number;
  /** 域名化资产对应的域名 */
  Domain?: string | null;
}

/** CC分级策略 */
declare interface CCLevelPolicy {
  /** 实例Id */
  InstanceId: string;
  /** Ip */
  Ip: string;
  /** 协议 */
  Protocol: string;
  /** 域名 */
  Domain: string;
  /** 防护等级，可取值default表示默认策略，loose表示宽松，strict表示严格 */
  Level: string;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** CC精准防护配置项 */
declare interface CCPrecisionPlyRecord {
  /** 配置项类型，当前仅支持value */
  FieldType: string;
  /** 配置字段，可取值cgi， ua， cookie， referer， accept, srcip */
  FieldName: string;
  /** 配置取值 */
  Value: string;
  /** 配置项值比对方式，可取值equal ，not_equal， include */
  ValueOperator: string;
}

/** CC精准防护策略信息 */
declare interface CCPrecisionPolicy {
  /** 策略Id */
  PolicyId: string;
  /** 实例Id */
  InstanceId: string;
  /** Ip地址 */
  Ip: string;
  /** 协议 */
  Protocol: string;
  /** 域名 */
  Domain: string;
  /** 策略方式（丢弃或验证码） */
  PolicyAction: string;
  /** 策略列表 */
  PolicyList: CCPrecisionPlyRecord[];
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** CC频率限制策略 */
declare interface CCReqLimitPolicy {
  /** 策略Id */
  PolicyId: string;
  /** 实例Id */
  InstanceId: string;
  /** Ip地址 */
  Ip: string;
  /** 协议，可取值HTTP，HTTPS */
  Protocol: string;
  /** 域名 */
  Domain: string;
  /** 策略项 */
  PolicyRecord: CCReqLimitPolicyRecord;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** CC频率限制策略项字段 */
declare interface CCReqLimitPolicyRecord {
  /** 统计周期，可取值1，10，30，60，单位秒 */
  Period: number;
  /** 请求数，取值1~20000 */
  RequestNum: number;
  /** 频率限制策略方式，可取值alg表示验证码，drop表示丢弃 */
  Action: string;
  /** 频率限制策略时长，可取值1~86400，单位秒 */
  ExecuteDuration: number;
  /** 策略项比对方式，可取值include表示包含，equal表示等于 */
  Mode: string;
  /** Uri，三个策略项仅可填其中之一 */
  Uri?: string;
  /** User-Agent，三个策略项仅可填其中之一 */
  UserAgent?: string;
  /** Cookie，三个策略项仅可填其中之一 */
  Cookie?: string;
}

/** CC清洗阈值策略 */
declare interface CCThresholdPolicy {
  /** 实例Id */
  InstanceId: string;
  /** Ip地址 */
  Ip: string;
  /** 协议 */
  Protocol: string;
  /** 域名 */
  Domain: string;
  /** 清洗阈值 */
  Threshold: number;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** CC四层黑白名单列表 */
declare interface CcBlackWhiteIpPolicy {
  /** 策略Id */
  PolicyId: string;
  /** 实例Id */
  InstanceId: string;
  /** IP地址 */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议 */
  Protocol: string;
  /** IP类型，取值[black(黑名单IP), white(白名单IP)] */
  Type: string;
  /** 黑白名单IP地址 */
  BlackWhiteIp: string;
  /** 掩码 */
  Mask: number;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** DDoS防护的区域封禁配置 */
declare interface CcGeoIPBlockConfig {
  /** 区域类型，取值[oversea(境外)china(国内)customized(自定义地区)] */
  RegionType: string;
  /** 封禁动作，取值[drop(拦截)alg(人机校验)] */
  Action: string;
  /** 配置ID，配置添加成功后生成；添加新配置时不用填写此字段，修改或删除配置时需要填写配置ID */
  Id?: string;
  /** 当RegionType为customized时，必须填写AreaList；当RegionType为china或oversea时，AreaList为空 */
  AreaList?: number[];
}

/** CC地域封禁列表详情 */
declare interface CcGeoIpPolicyNew {
  /** 策略Id */
  PolicyId: string;
  /** 实例Id */
  InstanceId: string;
  /** IP地址 */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议，可取值HTTP，HTTPS */
  Protocol: string;
  /** 用户动作，drop或alg */
  Action: string;
  /** 地域类型，分为china, oversea与customized */
  RegionType: string;
  /** 用户选择封禁的地域ID列表 */
  AreaList: number[];
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** 使用证书的规则集合 */
declare interface CertIdInsL7Rules {
  /** 使用证书的规则列表 */
  L7Rules: InsL7Rules[];
  /** 证书ID */
  CertId: string;
}

/** 连接抑制相关配置 */
declare interface ConnectLimitConfig {
  /** 基于源IP+目的IP的每秒新建数限制 */
  SdNewLimit: number;
  /** 基于目的IP的每秒新建数限制 */
  DstNewLimit: number;
  /** 基于源IP+目的IP的并发连接控制 */
  SdConnLimit: number;
  /** 基于目的IP+目的端口的并发连接控制 */
  DstConnLimit: number;
  /** 基于连接抑制触发阈值，取值范围[0,4294967295] */
  BadConnThreshold: number;
  /** 异常连接检测条件，空连接防护开关，，取值范围[0,1] */
  NullConnEnable: number;
  /** 异常连接检测条件，连接超时，，取值范围[0,65535] */
  ConnTimeout: number;
  /** 异常连接检测条件，syn占比ack百分比，，取值范围[0,100] */
  SynRate: number;
  /** 异常连接检测条件，syn阈值，取值范围[0,100] */
  SynLimit: number;
}

/** 连接抑制列表 */
declare interface ConnectLimitRelation {
  /** 连接抑制配置 */
  ConnectLimitConfig: ConnectLimitConfig;
  /** 连接抑制关联的实例信息 */
  InstanceDetailList: InstanceRelation[];
}

/** DDoS防护的AI防护开关 */
declare interface DDoSAIRelation {
  /** AI防护开关，取值[on(开启)off(关闭)] */
  DDoSAI: string;
  /** AI防护开关所属的资源实例 */
  InstanceDetailList: InstanceRelation[];
}

/** DDoS防护的区域封禁配置 */
declare interface DDoSGeoIPBlockConfig {
  /** 区域类型，取值[oversea(境外)china(国内)customized(自定义地区)] */
  RegionType: string;
  /** 封禁动作，取值[drop(拦截)trans(放行)] */
  Action: string;
  /** 配置ID，配置添加成功后生成；添加新配置时不用填写此字段，修改或删除配置时需要填写配置ID */
  Id?: string;
  /** 当RegionType为customized时，必须填写AreaList，且最多填写128个； */
  AreaList?: number[];
}

/** DDoS区域封禁配置相关信息 */
declare interface DDoSGeoIPBlockConfigRelation {
  /** DDoS区域封禁配置 */
  GeoIPBlockConfig: DDoSGeoIPBlockConfig;
  /** 配置所属的资源实例 */
  InstanceDetailList: InstanceRelation[];
}

/** DDoS访问限速配置 */
declare interface DDoSSpeedLimitConfig {
  /** 限速模式，取值[1(基于源IP限速)2(基于目的端口限速)] */
  Mode: number;
  /** 限速值，每种类型的限速值最多支持1个；该字段数组至少有一种限速值 */
  SpeedValues: SpeedValue[];
  /** 此字段已弃用，请填写新字段DstPortList。 */
  DstPortScopes?: PortSegment[];
  /** 配置ID，配置添加成功后生成；添加新限制配置时不用填写此字段，修改或删除限速配置时需要填写配置ID */
  Id?: string;
  /** IP protocol numbers, 取值[ALL(所有协议)TCP(tcp协议)UDP(udp协议)SMP(smp协议)1;2-100(自定义协议号范围,最多8个)]注意：当自定义协议号范围时，只能填写协议号，多个范围;分隔；当填写ALL时不能再填写其他协议或协议号。 */
  ProtocolList?: string;
  /** 端口范围列表，最多8个，多个;分隔，范围表示用-；此端口范围必须填写；填写样式1:0-65535，样式2:80;443;1000-2000 */
  DstPortList?: string;
}

/** DDoS访问限速配置相关信息 */
declare interface DDoSSpeedLimitConfigRelation {
  /** DDoS访问限速配置 */
  SpeedLimitConfig: DDoSSpeedLimitConfig;
  /** 配置所属的资源实例 */
  InstanceDetailList: InstanceRelation[];
}

/** 单IP默认告警阈值配置 */
declare interface DefaultAlarmThreshold {
  /** 告警阈值类型，取值[1(入流量告警阈值)2(攻击清洗流量告警阈值)] */
  AlarmType?: number;
  /** 告警阈值，单位Mbps，取值>=0；当作为输入参数时，设置0会删除告警阈值配置； */
  AlarmThreshold?: number;
}

/** Anycast高防套餐详情 */
declare interface EipAddressPackRelation {
  /** 套餐IP数量 */
  IpCount: number;
  /** 自动续费标记 */
  AutoRenewFlag: number;
  /** 当前到期时间 */
  CurDeadline: string;
}

/** 高防弹性公网IP关联信息 */
declare interface EipAddressRelation {
  /** 高防弹性公网IP绑定的实例地区，例如hk代表中国香港 */
  EipAddressRegion?: string | null;
  /** 绑定的资源实例ID。可能是一个CVM。 */
  EipBoundRscIns?: string | null;
  /** 绑定的弹性网卡ID */
  EipBoundRscEni?: string | null;
  /** 绑定的资源内网ip */
  EipBoundRscVip?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
}

/** EIP所属的云产品信息 */
declare interface EipProductInfo {
  /** IP地址 */
  Ip: string;
  /** 云产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)] */
  BizType: string;
  /** 云产品子类型，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）] */
  DeviceType: string;
  /** IP所属的云产品实例ID，例如是弹性网卡的IP，InstanceId为弹性网卡的ID(eni-*); 如果是托管IP没有对应的资源实例ID,InstanceId为"" */
  InstanceId: string;
  /** 域名化资产对应的域名 */
  Domain?: string | null;
}

/** 转发监听器 */
declare interface ForwardListener {
  /** 转发监听端口下限，取值1~65535 */
  FrontendPort: number;
  /** 转发协议，取值[TCPUDP] */
  ForwardProtocol: string;
  /** 转发监听端口上限，取值1~65535 */
  FrontendPortEnd?: number;
}

/** 业务流量的http状态码聚合数据 */
declare interface HttpStatusMap {
  /** http2xx回源状态码 */
  SourceHttp2xx: number[];
  /** http5xx状态码 */
  Http5xx: number[];
  /** http5xx回源状态码 */
  SourceHttp5xx: number[];
  /** http404回源状态码 */
  SourceHttp404: number[];
  /** http4xx状态码 */
  Http4xx: number[];
  /** http4xx回源状态码 */
  SourceHttp4xx: number[];
  /** http2xx状态码 */
  Http2xx: number[];
  /** http404状态码 */
  Http404: number[];
  /** http3xx回源状态码 */
  SourceHttp3xx: number[];
  /** http3xx状态码 */
  Http3xx: number[];
}

/** 单IP告警阈值配置 */
declare interface IPAlarmThresholdRelation {
  /** 告警阈值类型，取值[1(入流量告警阈值)2(攻击清洗流量告警阈值)] */
  AlarmType: number;
  /** 告警阈值，单位Mbps，取值>=0；当作为输入参数时，设置0会删除告警阈值配置； */
  AlarmThreshold: number;
  /** 告警阈值所属的资源实例 */
  InstanceDetailList: InstanceRelation[];
}

/** IP线路信息 */
declare interface IPLineInfo {
  /** IP线路类型，取值["bgp"：BGP线路IP"ctcc"：电信线路IP"cucc"：联通线路IP"cmcc"：移动线路IP"abroad"：境外线路IP] */
  Type: string;
  /** 线路IP */
  Eip: string;
  /** 实例对应的cname */
  Cname?: string;
  /** 资源flag，0：高防包资源，1：高防IP资源，2：非高防资源IP */
  ResourceFlag?: number;
  /** 域名化资产对应的域名 */
  Domain?: string | null;
}

/** 实例7层规则 */
declare interface InsL7Rules {
  /** 规则在中间状态不可修改，只可在（0， 2， 8）状态可编辑。规则状态，0: 正常运行中, 1: 配置规则中(配置生效中), 2: 配置规则失败（配置生效失败）, 3: 删除规则中(删除生效中), 5: 删除规则失败(删除失败), 6: 等待添加规则, 7: 等待删除规则, 8: 等待上传证书, 9: 规则对应的资源不存在，被隔离, 10:等待修改规则, 11:配置修改中 */
  Status: number;
  /** 域名 */
  Domain: string;
  /** 协议 */
  Protocol: string;
  /** 实例ID */
  InsId: string;
  /** 用户AppID */
  AppId: string;
  /** 高防端口 */
  VirtualPort: string;
  /** 证书ID */
  SSLId: string;
}

/** 资源实例IP信息 */
declare interface InstanceRelation {
  /** 资源实例的IP */
  EipList: string[];
  /** 资源实例的ID */
  InstanceId: string;
}

/** IP封堵记录 */
declare interface IpBlockData {
  /** 状态（Blocked：被封堵；UnBlocking：解封中；UnBlockFailed：解封失败） */
  Status: string;
  /** 资源IP */
  Ip: string;
  /** 封堵时间 */
  BlockTime: string;
  /** 解封时间（预计解封时间） */
  UnBlockTime: string;
  /** 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封） */
  ActionType: string;
  /** 高防标记，0：非高防，1：高防 */
  ProtectFlag: number;
}

/** ip段数据结构 */
declare interface IpSegment {
  /** ip地址 */
  Ip: string;
  /** ip掩码，如果为32位ip，填0 */
  Mask: number;
}

/** 字段值，K-V形式 */
declare interface KeyValue {
  /** 字段名称 */
  Key: string;
  /** 字段取值 */
  Value: string;
}

/** L4规则回源列表 */
declare interface L4RuleSource {
  /** 回源IP或域名 */
  Source: string;
  /** 权重值，取值[0,100]，暂不支持 */
  Weight: number;
  /** 8000 */
  Port?: number | null;
  /** 备份源站，1: 备份源站，0: 普通源站 */
  Backup?: number | null;
}

/** L7规则 */
declare interface L7RuleEntry {
  /** 会话保持时间，单位秒 */
  KeepTime: number;
  /** 转发域名 */
  Domain: string;
  /** 转发协议，取值[http, https] */
  Protocol: string;
  /** 回源方式，取值[1(域名回源)，2(IP回源)] */
  SourceType: number;
  /** 负载均衡方式，取值[1(加权轮询)] */
  LbType: number;
  /** 回源列表 */
  SourceList: L4RuleSource[];
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)] */
  KeepEnable: number;
  /** 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  Status?: number;
  /** 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段； */
  RuleId?: string;
  /** HTTPS协议的CC防护阈值 */
  CCThreshold?: number;
  /** 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  PrivateKey?: string;
  /** HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)] */
  CCEnable?: number;
  /** 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭 */
  HttpsToHttpEnable?: number | null;
  /** 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0 */
  CertType?: number;
  /** 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  Cert?: string;
  /** HTTPS协议的CC防护等级 */
  CCLevel?: string;
  /** 规则描述 */
  RuleName?: string;
  /** cc防护状态，取值[0(关闭), 1(开启)] */
  CCStatus?: number;
  /** 接入端口值 */
  VirtualPort?: number | null;
  /** 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID */
  SSLId?: string;
  /** 同ruleId */
  Id?: string;
  /** 智能cc开关，取值[0(关闭), 1(开启)] */
  CCAIEnable?: number;
}

/** L7规则健康检查参数 */
declare interface L7RuleHealth {
  /** 配置状态，0： 正常，1：配置中，2：配置失败 */
  Status: number;
  /** =1表示开启；=0表示关闭 */
  Enable: number;
  /** 规则ID */
  RuleId: string;
  /** 检查目录的URL，默认为/ */
  Url: string;
  /** 检测间隔时间，单位秒 */
  Interval: number;
  /** 健康阈值，单位次 */
  AliveNum: number;
  /** 不健康阈值，单位次 */
  KickNum: number;
  /** HTTP请求方式，取值[HEAD,GET] */
  Method: string;
  /** 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和 */
  StatusCode: number;
  /** 是否同时下发http和https规则健康检查配置 */
  ProtocolFlag?: number;
  /** 被动探测开关，=1表示开启；=0表示关闭 */
  PassiveEnable?: number;
  /** 被动探测不健康屏蔽时间 */
  BlockInter?: number;
  /** 被动探测不健康统计间隔 */
  FailedCountInter?: number;
  /** 被动探测不健康阈值 */
  FailedThreshold?: number;
  /** 被动探测判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和 */
  PassiveStatusCode?: number;
  /** 被动探测配置状态，0： 正常，1：配置中，2：配置失败 */
  PassiveStatus?: number;
}

/** 4层转发规则 */
declare interface Layer4Rule {
  /** 源站端口，取值1~65535 */
  BackendPort: number;
  /** 转发端口，取值1~65535 */
  FrontendPort: number;
  /** 转发协议，取值[TCP(TCP协议)UDP(UDP协议)] */
  Protocol: string;
  /** 源站列表 */
  RealServers: SourceServer[];
  /** 资源实例 */
  InstanceDetails: InstanceRelation[];
  /** 规则所属的资源实例 */
  InstanceDetailRule?: RuleInstanceRelation[];
}

/** 7层转发规则 */
declare interface Layer7Rule {
  /** 域名 */
  Domain: string;
  /** 转发类型列表 */
  ProxyTypeList: ProxyTypeInfo[];
  /** 源站列表 */
  RealServers: SourceServer[];
  /** 资源实例 */
  InstanceDetails: InstanceRelation[];
  /** 规则所属的资源实例 */
  InstanceDetailRule?: RuleInstanceRelation[];
  /** 协议 */
  Protocol?: string;
  /** 端口号 */
  Vport?: number;
}

/** 域名与协议纬度的CC防护阈值 */
declare interface ListenerCcThreholdConfig {
  /** 域名 */
  Domain: string;
  /** 协议（可取值https） */
  Protocol: string;
  /** 开关状态（0：关闭，1：开启） */
  CCEnable: number;
  /** cc防护阈值 */
  CCThreshold: number;
}

/** L7规则 */
declare interface NewL7RuleEntry {
  /** 转发协议，取值[http, https] */
  Protocol: string;
  /** 转发域名 */
  Domain: string;
  /** 负载均衡方式，取值[1(加权轮询)] */
  LbType: number;
  /** 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)] */
  KeepEnable: number;
  /** 会话保持时间，单位秒 */
  KeepTime: number;
  /** 回源方式，取值[1(域名回源)，2(IP回源)] */
  SourceType: number;
  /** 回源列表 */
  SourceList: L4RuleSource[];
  /** 区域码 */
  Region?: number;
  /** 资源Id */
  Id?: string;
  /** 资源Ip */
  Ip?: string;
  /** 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段； */
  RuleId?: string;
  /** 规则描述 */
  RuleName?: string;
  /** 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0 */
  CertType?: number;
  /** 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID */
  SSLId?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  Cert?: string;
  /** 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段) */
  PrivateKey?: string;
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
  /** 修改时间 */
  ModifyTime?: string;
  /** 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭 */
  HttpsToHttpEnable?: number;
  /** 接入端口值 */
  VirtualPort?: number | null;
  /** http强制跳转https，1表示打开，0表示关闭 */
  RewriteHttps?: number;
  /** 规则配置失败时的详细错误原因(仅当Status=2时有效)，1001证书不存在，1002证书获取失败，1003证书上传失败，1004证书已过期 */
  ErrCode?: number;
  /** 版本 */
  Version?: number | null;
}

/** 防护概览DDoS攻击事件 */
declare interface OverviewDDoSEvent {
  /** 事件Id */
  Id: string;
  /** ip */
  Vip: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 攻击类型 */
  AttackType: string;
  /** 攻击状态，0：攻击中；1：攻击结束 */
  AttackStatus: number;
  /** 攻击流量，单位Mbps */
  Mbps: number;
  /** 攻击包量，单位pps */
  Pps: number;
  /** 业务类型，bgp-multip：高防包；bgpip：高防ip；basic：基础防护 */
  Business: string;
  /** 高防实例Id */
  InstanceId: string;
  /** 高防实例名称 */
  InstanceName: string;
}

/** 套餐包信息 */
declare interface PackInfo {
  /** 套餐包的类型，取值[staticpack：高防IP三网套餐包insurance：保险套餐包] */
  PackType: string;
  /** 套餐包的ID */
  PackId: string;
}

/** 特征过滤配置 */
declare interface PacketFilterConfig {
  /** 协议，取值[tcp udp icmp all] */
  Protocol: string;
  /** 起始源端口，取值0~65535 */
  SportStart: number;
  /** 结束源端口，取值1~65535，必须大于等于起始源端口 */
  SportEnd: number;
  /** 起始目的端口，取值0~65535 */
  DportStart: number;
  /** 结束目的端口，取值1~65535，必须大于等于起始目的端口 */
  DportEnd: number;
  /** 最小报文长度，取值1-1500 */
  PktlenMin: number;
  /** 最大报文长度，取值1-1500，必须大于等于最小报文长度 */
  PktlenMax: number;
  /** 动作，取值[drop(丢弃)transmit(放行)drop_black(丢弃并拉黑)drop_rst(拦截)drop_black_rst(拦截并拉黑)forward(继续防护)] */
  Action: string;
  /** 检测位置，取值[begin_l3(IP头)begin_l4(TCP/UDP头)begin_l5(T载荷)no_match(不匹配)] */
  MatchBegin?: string;
  /** 检测类型，取值[sunday(关键字)pcre(正则表达式)] */
  MatchType?: string;
  /** 检测值，关键字符串或正则表达式,取值[当检测类型为sunday时，请填写字符串或者16进制字节码，例如\x313233对应的是字符串"123"的16进制字节码;当检测类型为pcre时, 请填写正则表达式字符串;] */
  Str?: string;
  /** 从检测位置开始的检测深度，取值[0,1500] */
  Depth?: number;
  /** 从检测位置开始的偏移量，取值范围[0,Depth] */
  Offset?: number;
  /** 是否包含检测值，取值[0(包含)1(不包含)] */
  IsNot?: number;
  /** 当有第二个检测条件时，与第一检测条件的且或关系，取值[and(且的关系)none(当没有第二个检测条件时填写此值)] */
  MatchLogic?: string;
  /** 第二个检测位置，取值[begin_l5(载荷)no_match(不匹配)] */
  MatchBegin2?: string;
  /** 第二个检测类型，取值[sunday(关键字)pcre(正则表达式)] */
  MatchType2?: string;
  /** 第二个检测值，关键字符串或正则表达式,取值[当检测类型为sunday时，请填写字符串或者16进制字节码，例如\x313233对应的是字符串"123"的16进制字节码;当检测类型为pcre时, 请填写正则表达式字符串;] */
  Str2?: string;
  /** 从第二个检测位置开始的第二个检测深度，取值[0,1500] */
  Depth2?: number;
  /** 从第二个检测位置开始的偏移量，取值范围[0,Depth2] */
  Offset2?: number;
  /** 第二个检测是否包含检测值，取值[0(包含)1(不包含)] */
  IsNot2?: number;
  /** 特征过滤配置添加成功后自动生成的规则ID，当添加新特征过滤配置时，此字段不用填写； */
  Id?: string;
  /** 大于报文长度，取值1+ */
  PktLenGT?: number;
}

/** 特征过滤相关信息 */
declare interface PacketFilterRelation {
  /** 特征过滤配置 */
  PacketFilterConfig: PacketFilterConfig;
  /** 特征过滤配置所属的实例 */
  InstanceDetailList: InstanceRelation[];
  /** 修改时间 */
  ModifyTime: string;
}

/** 端口段信息 */
declare interface PortSegment {
  /** 起始端口，取值1~65535 */
  BeginPort: number;
  /** 结束端口，取值1~65535，必须不小于起始端口 */
  EndPort: number;
}

/** 防护阈值配置相关信息 */
declare interface ProtectThresholdRelation {
  /** DDoS防护等级，取值[low(宽松)middle(适中)high(严格)] */
  DDoSLevel: string;
  /** DDoS清洗阈值，单位Mbps */
  DDoSThreshold: number;
  /** DDoS的AI防护开关，取值[on(开启)off(关闭)] */
  DDoSAI: string;
  /** CC清洗开关，取值[0(关闭)1(开启)] */
  CCEnable: number;
  /** CC清洗阈值，单位QPS */
  CCThreshold: number;
  /** 所属的资源实例 */
  InstanceDetailList: InstanceRelation[];
  /** 域名与协议纬度的防护阈值 */
  ListenerCcThresholdList: ListenerCcThreholdConfig[];
  /** SYN FLOOD流量阈值 */
  SynFloodThreshold: number | null;
  /** SYN FLOOD包量阈值 */
  SynFloodPktThreshold: number | null;
  /** UDP FLOOD流量阈值 */
  UdpFloodThreshold: number | null;
  /** UDP FLOOD包量阈值 */
  UdpFloodPktThreshold: number | null;
  /** ACK FLOOD流量阈值 */
  AckFloodThreshold: number | null;
  /** ACK FLOOD包量阈值 */
  AckFloodPktThreshold: number | null;
  /** SYNACK FLOOD流量阈值 */
  SynAckFloodThreshold: number | null;
  /** SYNACK FLOOD包量阈值 */
  SynAckFloodPktThreshold: number | null;
  /** RST FLOOD流量阈值 */
  RstFloodThreshold: number | null;
  /** RST FLOOD包量阈值 */
  RstFloodPktThreshold: number | null;
}

/** 协议封禁配置 */
declare interface ProtocolBlockConfig {
  /** TCP封禁，取值[0(封禁关)，1(封禁开)] */
  DropTcp: number;
  /** UDP封禁，取值[0(封禁关)，1(封禁开)] */
  DropUdp: number;
  /** ICMP封禁，取值[0(封禁关)，1(封禁开)] */
  DropIcmp: number;
  /** 其他协议封禁，取值[0(封禁关)，1(封禁开)] */
  DropOther: number;
  /** 异常空连接防护，取值[0(防护关)，1(防护开)] */
  CheckExceptNullConnect: number;
  /** ping of death防护，取值[0(防护关)，1(防护开)] */
  PingOfDeath?: number;
  /** tear drop防护，取值[0(防护关)，1(防护开)] */
  TearDrop?: number;
}

/** 协议封禁相关信息 */
declare interface ProtocolBlockRelation {
  /** 协议封禁配置 */
  ProtocolBlockConfig: ProtocolBlockConfig;
  /** 协议封禁配置所属的实例 */
  InstanceDetailList: InstanceRelation[];
}

/** Protocol、Port参数 */
declare interface ProtocolPort {
  /** 协议（tcp；udp） */
  Protocol: string;
  /** 端口 */
  Port: number;
}

/** 转发类型 */
declare interface ProxyTypeInfo {
  /** 转发监听端口列表，端口取值1~65535 */
  ProxyPorts: number[];
  /** 转发协议，取值[http(HTTP协议)https(HTTPS协议)] */
  ProxyType: string;
}

/** 地域信息 */
declare interface RegionInfo {
  /** 地域名称，例如，ap-guangzhou */
  Region: string;
}

/** 四七层规则对应实例与IP的关系 */
declare interface RuleInstanceRelation {
  /** 资源实例的IP */
  EipList?: string[];
  /** 资源实例的ID */
  InstanceId?: string;
  /** 资源实例的Cname */
  Cname?: string;
}

/** 调度域名信息 */
declare interface SchedulingDomainInfo {
  /** 调度域名 */
  Domain: string;
  /** 线路IP列表 */
  LineIPList: IPLineInfo[];
  /** 调度方式，当前仅支持优先级的方式，取值[priority] */
  Method: string;
  /** 调度域名解析记录的TTL值 */
  TTL: number;
  /** 运行状态，取值[0：未运行1：运行中2：运行异常] */
  Status: number;
  /** 创建时间 */
  CreatedTime: string;
  /** 最后修改时间 */
  ModifyTime: string;
  /** 域名名称 */
  UsrDomainName: string | null;
}

/** 源站信息 */
declare interface SourceServer {
  /** 源站的地址（IP或者域名） */
  RealServer: string;
  /** 源站的地址类型，取值[1(域名地址)2(IP地址)] */
  RsType: number;
  /** 源站的回源权重，取值1~100 */
  Weight: number;
  /** 端口号：0~65535 */
  Port?: number;
}

/** 限速值类型，例如：包速率pps、带宽bps */
declare interface SpeedValue {
  /** 限速值类型，取值[1(包速率pps)2(带宽bps)] */
  Type: number;
  /** 值大小 */
  Value: number;
}

/** 三网高防套餐详情 */
declare interface StaticPackRelation {
  /** 保底带宽 */
  ProtectBandwidth: number | null;
  /** 业务带宽 */
  NormalBandwidth: number | null;
  /** 转发规则 */
  ForwardRulesLimit: number | null;
  /** 自动续费标记 */
  AutoRenewFlag: number | null;
  /** 到期时间 */
  CurDeadline: string | null;
}

/** 操作返回码，只用于返回成功的情况 */
declare interface SuccessCode {
  /** 描述 */
  Message: string;
  /** 成功/错误码 */
  Code: string;
}

/** 标签类型 */
declare interface TagFilter {
  /** 标签键 */
  TagKey: string;
  /** 标签键值列表 */
  TagValue: string[];
}

/** 标签信息，用于资源列表返回关联的标签 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 水印防护配置 */
declare interface WaterPrintConfig {
  /** 水印偏移量，取值范围[0, 100) */
  Offset: number;
  /** 是否开启，取值[0（手动开启）1（立即运行）] */
  OpenStatus: number;
  /** 水印所属的转发监听器列表 */
  Listeners: ForwardListener[];
  /** 水印添加成功后生成的水印密钥列表，一条水印最少1个密钥，最多2个密钥 */
  Keys?: WaterPrintKey[];
  /** 水印检查模式, 取值[checkall（普通模式）shortfpcheckall（精简模式）] */
  Verify?: string;
  /** 是否开启代理，1开启则忽略IP+端口校验；0关闭则需要IP+端口校验 */
  CloudSdkProxy?: number | null;
}

/** 生成的水印密钥 */
declare interface WaterPrintKey {
  /** 密钥版本号 */
  KeyVersion: string;
  /** 密钥内容 */
  KeyContent: string;
  /** 密钥ID */
  KeyId: string;
  /** 密钥启用状态，只有一个取值1(启用) */
  KeyOpenStatus: number;
  /** 密钥生成时间 */
  CreateTime: string;
}

/** 水印配置相关信息 */
declare interface WaterPrintRelation {
  /** 水印配置 */
  WaterPrintConfig: WaterPrintConfig;
  /** 水印配置所属的资源实例 */
  InstanceDetailList: InstanceRelation[];
}

declare interface AssociateDDoSEipAddressRequest {
  /** 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。 */
  InstanceId: string;
  /** 资源实例ID对应的高防弹性公网IP。 */
  Eip: string;
  /** 要绑定的实例 ID。实例 ID 形如：ins-11112222。可通过登录控制台查询，也可通过 DescribeInstances 接口返回值中的InstanceId获取。 */
  CvmInstanceID: string;
  /** cvm实例所在地域，例如：ap-hongkong。 */
  CvmRegion: string;
}

declare interface AssociateDDoSEipAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateDDoSEipLoadBalancerRequest {
  /** 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。 */
  InstanceId: string;
  /** 资源实例ID对应的高防弹性公网IP。 */
  Eip: string;
  /** 要绑定的负载均衡ID。负载均衡 ID 形如：lb-0000002i。可通过登录控制台查询，也可通过 DescribeLoadBalancers 接口返回值中的LoadBalancerId获取。 */
  LoadBalancerID: string;
  /** CLB所在地域，例如：ap-hongkong。 */
  LoadBalancerRegion: string;
  /** CLB内网IP */
  Vip?: string;
}

declare interface AssociateDDoSEipLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** IP列表 */
  IpList: string[];
  /** IP类型，取值[black(黑名单IP), white(白名单IP)] */
  Type: string;
}

declare interface CreateBlackWhiteIpListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBoundIPRequest {
  /** DDoS防护子产品代号（bgp表示独享包；bgp-multip表示共享包） */
  Business: string;
  /** 资源实例ID */
  Id: string;
  /** 绑定到资源实例的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要绑定的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空； */
  BoundDevList?: BoundIpInfo[];
  /** 与资源实例解绑的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要解绑的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空； */
  UnBoundDevList?: BoundIpInfo[];
  /** 已弃用，不填 */
  CopyPolicy?: string;
  /** 如果该资源实例为域名化资产则，该参数必填 */
  FilterRegion?: string;
}

declare interface CreateBoundIPResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCCPrecisionPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** IP值 */
  Ip: string;
  /** 协议， 可取值HTTP，HTTPS */
  Protocol: string;
  /** 域名 */
  Domain: string;
  /** 策略方式，可取值alg表示验证码，drop表示丢弃 */
  PolicyAction: string;
  /** 策略记录 */
  PolicyList: CCPrecisionPlyRecord[];
}

declare interface CreateCCPrecisionPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCCReqLimitPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** IP值 */
  Ip: string;
  /** 协议，可取值HTTP，HTTPS */
  Protocol: string;
  /** 域名 */
  Domain: string;
  /** 策略项 */
  Policy: CCReqLimitPolicyRecord;
  /** 是否为兜底频控 */
  IsGlobal?: number;
}

declare interface CreateCCReqLimitPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCcBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** IP列表 */
  IpList: IpSegment[];
  /** IP类型，取值[black(黑名单IP), white(白名单IP)] */
  Type: string;
  /** Ip地址 */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议 */
  Protocol: string;
}

declare interface CreateCcBlackWhiteIpListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCcGeoIPBlockConfigRequest {
  /** 实例id */
  InstanceId: string;
  /** ip地址 */
  IP: string;
  /** 域名 */
  Domain: string;
  /** 协议类型 */
  Protocol: string;
  /** CC区域封禁配置 */
  CcGeoIPBlockConfig: CcGeoIPBlockConfig;
}

declare interface CreateCcGeoIPBlockConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDDoSAIRequest {
  /** 资源实例ID列表 */
  InstanceIdList: string[];
  /** AI防护开关，取值[on(开启)off(关闭)] */
  DDoSAI: string;
}

declare interface CreateDDoSAIResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDDoSBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** IP列表 */
  IpList: IpSegment[];
  /** IP类型，取值[black(黑名单IP), white(白名单IP)] */
  Type: string;
}

declare interface CreateDDoSBlackWhiteIpListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDDoSConnectLimitRequest {
  /** 资源实例Id */
  InstanceId: string;
  /** 连接抑制配置 */
  ConnectLimitConfig: ConnectLimitConfig;
}

declare interface CreateDDoSConnectLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDDoSGeoIPBlockConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** DDoS区域封禁配置，填写参数时配置ID请为空 */
  DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig;
}

declare interface CreateDDoSGeoIPBlockConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDDoSSpeedLimitConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 访问限速配置，填写参数时配置ID请为空 */
  DDoSSpeedLimitConfig: DDoSSpeedLimitConfig;
}

declare interface CreateDDoSSpeedLimitConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDefaultAlarmThresholdRequest {
  /** 默认告警阈值配置 */
  DefaultAlarmConfig: DefaultAlarmThreshold;
  /** 产品类型，取值[bgp(表示高防包产品)bgpip(表示高防IP产品)] */
  InstanceType: string;
}

declare interface CreateDefaultAlarmThresholdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIPAlarmThresholdConfigRequest {
  /** IP告警阈值配置列表 */
  IpAlarmThresholdConfigList: IPAlarmThresholdRelation[];
}

declare interface CreateIPAlarmThresholdConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7RuleCertsRequest {
  /** SSL证书ID */
  CertId: string;
  /** L7域名转发规则列表 */
  L7Rules: InsL7Rules[];
}

declare interface CreateL7RuleCertsResponse {
  /** 成功码 */
  Success: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNewL7RulesRequest {
  /** 规则列表 */
  Rules: L7RuleEntry[];
  /** DDoS防护子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 资源ID列表 */
  IdList: string[];
  /** 资源IP列表 */
  VipList: string[];
}

declare interface CreateNewL7RulesResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePacketFilterConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 特征过滤规则 */
  PacketFilterConfig: PacketFilterConfig;
}

declare interface CreatePacketFilterConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePortAclConfigListRequest {
  /** 资源实例ID列表 */
  InstanceIdList: string[];
  /** 端口acl策略 */
  AclConfig: AclConfig;
}

declare interface CreatePortAclConfigListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePortAclConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 端口acl策略 */
  AclConfig: AclConfig;
}

declare interface CreatePortAclConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProtocolBlockConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 协议封禁配置 */
  ProtocolBlockConfig: ProtocolBlockConfig;
}

declare interface CreateProtocolBlockConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSchedulingDomainRequest {
  /** 代表是否混合云本地化的产品。hybrid: 宙斯盾本地化不填写：其他 */
  Product?: string;
}

declare interface CreateSchedulingDomainResponse {
  /** 新创建的域名 */
  Domain: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWaterPrintConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 水印防护配置 */
  WaterPrintConfig: WaterPrintConfig;
}

declare interface CreateWaterPrintConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWaterPrintKeyRequest {
  /** 资源实例ID */
  InstanceId: string;
}

declare interface CreateWaterPrintKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCCLevelPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 配置策略的IP */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议，可取值http */
  Protocol: string;
}

declare interface DeleteCCLevelPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCCPrecisionPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 策略Id */
  PolicyId: string;
}

declare interface DeleteCCPrecisionPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCCRequestLimitPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 策略Id */
  PolicyId: string;
}

declare interface DeleteCCRequestLimitPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCCThresholdPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 配置策略的IP */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议，可取值http */
  Protocol: string;
}

declare interface DeleteCCThresholdPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCcBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 策略Id */
  PolicyId: string;
}

declare interface DeleteCcBlackWhiteIpListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCcGeoIPBlockConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** CC区域封禁配置，填写参数时配置ID不能为空 */
  CcGeoIPBlockConfig: CcGeoIPBlockConfig;
}

declare interface DeleteCcGeoIPBlockConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDDoSBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** IP列表 */
  IpList: IpSegment[];
  /** IP类型，取值[black(黑名单IP), white(白名单IP)] */
  Type: string;
}

declare interface DeleteDDoSBlackWhiteIpListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDDoSGeoIPBlockConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** DDoS区域封禁配置，填写参数时配置ID不能为空 */
  DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig;
}

declare interface DeleteDDoSGeoIPBlockConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDDoSSpeedLimitConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 访问限速配置，填写参数时配置ID不能为空 */
  DDoSSpeedLimitConfig: DDoSSpeedLimitConfig;
}

declare interface DeleteDDoSSpeedLimitConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePacketFilterConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 特征过滤配置 */
  PacketFilterConfig: PacketFilterConfig;
}

declare interface DeletePacketFilterConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePortAclConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 端口acl策略 */
  AclConfig: AclConfig;
}

declare interface DeletePortAclConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWaterPrintConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
}

declare interface DeleteWaterPrintConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWaterPrintKeyRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 水印密钥ID */
  KeyId: string;
}

declare interface DeleteWaterPrintKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBGPIPL7RulesRequest {
  /** DDoS防护子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  StatusList?: number[];
  /** 域名搜索，选填，当需要搜索域名请填写 */
  Domain?: string;
  /** IP搜索，选填，当需要搜索IP请填写 */
  Ip?: string;
  /** 一页条数，默认值100，最大值100，超过100最大返回100条 */
  Limit?: number;
  /** 规则偏移量，取值为(页码-1)*一页条数 */
  Offset?: number;
  /** 转发协议搜索，选填，取值[http, https, http/https] */
  ProtocolList?: string[];
  /** 高防IP实例的Cname */
  Cname?: string;
  /** 默认为false，当为true时，将不对各个规则做策略检查，直接导出所有规则 */
  Export?: boolean;
}

declare interface DescribeBGPIPL7RulesResponse {
  /** 转发规则列表 */
  Rules?: BGPIPL7RuleEntry[];
  /** 健康检查配置列表 */
  Healths?: L7RuleHealth[];
  /** 总规则数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBasicDeviceStatusRequest {
  /** IP 资源列表 */
  IpList?: string[];
  /** 域名化资源传id */
  IdList?: string[];
  /** 地域名称 */
  FilterRegion?: number;
  /** cnameWaf资源 */
  CnameWafIdList?: string[];
}

declare interface DescribeBasicDeviceStatusResponse {
  /** 返回资源及状态，状态码：1 - 封堵状态2 - 正常状态3 - 攻击状态 */
  Data?: KeyValue[];
  /** 域名化资产的名称 */
  CLBData?: KeyValue[] | null;
  /** cnamewaf资源状态 */
  CnameWafData?: KeyValue[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBgpBizTrendRequest {
  /** DDoS防护子产品代号（bgp-multip表示高防包） */
  Business: string;
  /** 统计开始时间。 例：“2020-09-22 00:00:00”，注意该时间必须为5分钟的倍数 */
  StartTime: string;
  /** 统计结束时间。 例：“2020-09-22 00:00:00”，注意该时间必须为5分钟的倍数 */
  EndTime: string;
  /** 统计纬度，可取值intraffic, outtraffic, inpkg, outpkg */
  MetricName: string;
  /** 资源实例ID */
  InstanceId: string;
  /** 0表示固定时间，1表示自定义时间 */
  Flag: number;
}

declare interface DescribeBgpBizTrendResponse {
  /** 曲线图各个时间点的值 */
  DataList?: number[];
  /** 曲线图取值个数 */
  Total?: number;
  /** 统计纬度 */
  MetricName?: string;
  /** 返回数组最大值 */
  MaxData?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBizHttpStatusRequest {
  /** 统计方式，仅支持sum */
  Statistics: string;
  /** DDoS防护子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 统计周期，可取值60，300，1800，3600， 21600，86400，单位秒 */
  Period: number;
  /** 统计开始时间。 如2020-02-01 12:04:12 */
  StartTime: string;
  /** 统计结束时间。如2020-02-03 18:03:23 */
  EndTime: string;
  /** 资源Id */
  Id: string;
  /** 特定域名查询 */
  Domain?: string;
  /** 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效 */
  ProtoInfo?: ProtocolPort[];
}

declare interface DescribeBizHttpStatusResponse {
  /** 业务流量http状态码统计数据 */
  HttpStatusMap?: HttpStatusMap;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBizMonitorTrendRequest {
  /** DDoS防护子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 统计开始时间。 例：“2020-09-22 00:00:00” */
  StartTime: string;
  /** 统计结束时间。 例：“2020-09-22 00:00:00” */
  EndTime: string;
  /** 资源实例ID */
  Id: string;
  /** 统计纬度，可取值intraffic outtraffic inpkg outpkg */
  MetricName: string;
  /** 时间粒度 60 300 3600 21600 86400 */
  Period: number;
}

declare interface DescribeBizMonitorTrendResponse {
  /** 曲线图各个时间点的值 */
  DataList?: number[];
  /** 统计纬度 */
  MetricName?: string;
  /** 返回DataList中的最大值 */
  MaxData?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBizTrendRequest {
  /** 统计方式，可取值max, min, avg, sum, 如统计纬度是流量速率或包量速率，仅可取值max */
  Statistics: string;
  /** DDoS防护子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 统计周期，可取值60，300，1800，3600，21600，86400，单位秒 */
  Period: number;
  /** 统计开始时间。 例：“2020-09-22 00:00:00” */
  StartTime: string;
  /** 统计结束时间。 例：“2020-09-22 00:00:00” */
  EndTime: string;
  /** 资源实例ID */
  Id: string;
  /** 统计纬度，可取值connum, new_conn, inactive_conn, intraffic, outtraffic, inpkg, outpkg, qps */
  MetricName: string;
  /** 统计纬度为qps时，可选特定域名查询 */
  Domain?: string;
  /** 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效 */
  ProtoInfo?: ProtocolPort[];
  /** 业务类型可取值domain, portport：端口业务domain：域名业务 */
  BusinessType?: string;
}

declare interface DescribeBizTrendResponse {
  /** 曲线图各个时间点的值 */
  DataList?: number[];
  /** 统计纬度 */
  MetricName?: string;
  /** 返回DataList中的最大值 */
  MaxData?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
}

declare interface DescribeBlackWhiteIpListResponse {
  /** 黑名单IP列表 */
  BlackIpList: string[];
  /** 白名单IP列表 */
  WhiteIpList: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCLevelListRequest {
  /** DDoS防护子产品代号（bgp-multip表示高防包） */
  Business: string;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数 */
  Limit: number;
  /** 指定实例Id */
  InstanceId?: string;
}

declare interface DescribeCCLevelListResponse {
  /** 分级策略列表总数 */
  Total?: number;
  /** 分级策略列表总数 */
  LevelList?: CCLevelPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCLevelPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** IP值 */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议，可取值HTTP，HTTPS */
  Protocol: string;
}

declare interface DescribeCCLevelPolicyResponse {
  /** CC防护等级，可取值loose表示宽松，strict表示严格，normal表示适中， emergency表示攻击紧急， sup_loose表示超级宽松，default表示默认策略（无频控配置下发），customized表示自定义策略 */
  Level: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCPrecisionPlyListRequest {
  /** DDoS防护子产品代号（bgpip-multip：表示高防包；bgpip：表示高防IP） */
  Business: string;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数 */
  Limit: number;
  /** 指定特定实例Id */
  InstanceId?: string;
  /** IP地址，普通高防IP要传该字段 */
  Ip?: string;
  /** 域名，普通高防IP要传该字段 */
  Domain?: string;
  /** 协议，普通高防IP要传该字段 */
  Protocol?: string;
}

declare interface DescribeCCPrecisionPlyListResponse {
  /** 策略列表总数 */
  Total?: number;
  /** 策略列表详情 */
  PrecisionPolicyList?: CCPrecisionPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCReqLimitPolicyListRequest {
  /** DDoS防护子产品代号（bgp-multip表示高防包，bgpip表示高防IP） */
  Business: string;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数 */
  Limit: number;
  /** 指定实例Id */
  InstanceId?: string;
  /** IP地址，普通高防IP要传该字段 */
  Ip?: string;
  /** 域名，普通高防IP要传该字段 */
  Domain?: string;
  /** 协议，普通高防IP要传该字段 */
  Protocol?: string;
}

declare interface DescribeCCReqLimitPolicyListResponse {
  /** 频率限制列表总数 */
  Total?: number;
  /** 频率限制列表详情 */
  RequestLimitPolicyList?: CCReqLimitPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCThresholdListRequest {
  /** DDoS防护子产品代号（bgp-multip表示高防包） */
  Business: string;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数 */
  Limit: number;
  /** 指定实例Id */
  InstanceId?: string;
}

declare interface DescribeCCThresholdListResponse {
  /** 清洗阈值策略列表总数 */
  Total?: number;
  /** 清洗阈值策略列表详情 */
  ThresholdList?: CCThresholdPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCTrendRequest {
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 资源的IP */
  Ip: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)] */
  MetricName: string;
  /** 域名，可选 */
  Domain?: string;
  /** 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例） */
  Id?: string;
}

declare interface DescribeCCTrendResponse {
  /** 值个数 */
  Count?: number;
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源的IP */
  Ip?: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period?: number;
  /** 统计开始时间 */
  StartTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 值数组 */
  Data?: number[];
  /** 资源ID */
  Id?: string | null;
  /** 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)] */
  MetricName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcBlackWhiteIpListRequest {
  /** DDoS防护子产品代号（bgp-multip：表示高防包；bgpip：表示高防IP） */
  Business: string;
  /** 指定特定实例Id */
  InstanceId: string;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数 */
  Limit: number;
  /** IP地址，普通高防IP要传该字段 */
  Ip?: string;
  /** 域名，普通高防IP要传该字段 */
  Domain?: string;
  /** 协议，普通高防IP要传该字段 */
  Protocol?: string;
  /** 筛选IP，需要筛选黑白名单IP时传该字段 */
  FilterIp?: string;
  /** 黑白名单筛选字段，需要筛选黑白名单列表时传该字段 */
  FilterType?: string;
}

declare interface DescribeCcBlackWhiteIpListResponse {
  /** CC四层黑白名单策略列表总数 */
  Total?: number;
  /** CC四层黑白名单策略列表详情 */
  CcBlackWhiteIpList?: CcBlackWhiteIpPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcGeoIPBlockConfigListRequest {
  /** DDoS防护子产品代号（bgpip-multip：表示高防包；bgpip：表示高防IP） */
  Business: string;
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数 */
  Limit: number;
  /** 指定特定实例ID */
  InstanceId?: string;
  /** IP地址，普通高防IP要传该字段 */
  Ip?: string;
  /** 域名，普通高防IP要传该字段 */
  Domain?: string;
  /** 协议，普通高防IP要传该字段 */
  Protocol?: string;
}

declare interface DescribeCcGeoIPBlockConfigListResponse {
  /** CC地域封禁策略列表总数 */
  Total?: number;
  /** CC地域封禁策略列表详情 */
  CcGeoIpPolicyList?: CcGeoIpPolicyNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
}

declare interface DescribeDDoSBlackWhiteIpListResponse {
  /** 黑名单IP列表 */
  BlackIpList: IpSegment[];
  /** 白名单IP列表 */
  WhiteIpList: IpSegment[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSConnectLimitListRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数 */
  Limit: number;
  /** 可选参数，按照IP进行过滤 */
  FilterIp?: string;
  /** 可选参数，按照实例id进行过滤 */
  FilterInstanceId?: string;
}

declare interface DescribeDDoSConnectLimitListResponse {
  /** 连接抑制配置总数 */
  Total: number;
  /** 连接抑制配置详情信息 */
  ConfigList: ConnectLimitRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSTrendRequest {
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business: string;
  /** 资源实例的IP */
  Ip: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 指标，取值[bps(攻击流量带宽，pps(攻击包速率))] */
  MetricName: string;
  /** 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例） */
  Id?: string;
}

declare interface DescribeDDoSTrendResponse {
  /** 值个数 */
  Count?: number;
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源的IP */
  Ip?: string;
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period?: number;
  /** 统计开始时间 */
  StartTime?: string;
  /** 统计结束时间 */
  EndTime?: string;
  /** 值数组，攻击流量带宽单位为Mbps，包速率单位为pps */
  Data?: number[];
  /** 资源ID */
  Id?: string | null;
  /** 指标，取值[bps(攻击流量带宽，pps(攻击包速率))] */
  MetricName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDefaultAlarmThresholdRequest {
  /** 产品类型，取值[bgp(表示高防包产品)bgpip(表示高防IP产品)] */
  InstanceType: string;
  /** 告警阈值类型搜索，取值[1(入流量告警阈值)2(攻击清洗流量告警阈值)] */
  FilterAlarmType: number;
}

declare interface DescribeDefaultAlarmThresholdResponse {
  /** 默认告警阈值配置 */
  DefaultAlarmConfigList: DefaultAlarmThreshold[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpBlockListRequest {
}

declare interface DescribeIpBlockListResponse {
  /** IP封堵列表 */
  List: IpBlockData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7RulesBySSLCertIdRequest {
  /** 域名状态，可取bindable, binded, opened, closed, all，all表示全部状态 */
  Status: string;
  /** 证书ID列表 */
  CertIds: string[];
}

declare interface DescribeL7RulesBySSLCertIdResponse {
  /** 证书规则集合 */
  CertSet: CertIdInsL7Rules[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListBGPIPInstancesRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为20;最大取值为100 */
  Limit: number;
  /** IP搜索 */
  FilterIp?: string;
  /** 资产实例ID搜索，例如，bgpip-00000001 */
  FilterInstanceId?: string;
  /** 高防IP线路搜索，取值为[1：BGP线路2：电信3：联通4：移动99：第三方合作线路] */
  FilterLine?: number;
  /** 地域搜索，例如，ap-guangzhou */
  FilterRegion?: string;
  /** 名称搜索 */
  FilterName?: string;
  /** 是否只获取高防弹性公网IP实例。填写时，只能填写1或者0。当填写1时，表示返回高防弹性公网IP实例。当填写0时，表示返回非高防弹性公网IP实例。 */
  FilterEipType?: number;
  /** 高防弹性公网IP实例的绑定状态搜索条件，取值范围 [BINDING、 BIND、UNBINDING、UNBIND]。该搜索条件只在FilterEipType=1时才有效。 */
  FilterEipEipAddressStatus?: string[];
  /** 是否只获取安全加速实例。填写时，只能填写1或者0。当填写1时，表示返回安全加速实例。当填写0时，表示返回非安全加速实例。 */
  FilterDamDDoSStatus?: number;
  /** 获取特定状态的资源，运行中填idle，攻击中填attacking，封堵中填blocking，试用资源填trial */
  FilterStatus?: string;
  /** 获取特定的实例Cname */
  FilterCname?: string;
  /** 批量查询实例ID对应的高防IP实例资源 */
  FilterInstanceIdList?: string[];
  /** 标签搜索 */
  FilterTag?: TagFilter;
  /** 按照套餐类型进行过滤 */
  FilterPackType?: string[];
  /** 重保护航搜索 */
  FilterConvoy?: number;
}

declare interface DescribeListBGPIPInstancesResponse {
  /** 总数 */
  Total: number;
  /** 高防IP资产实例列表 */
  InstanceList: BGPIPInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListBGPInstancesRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为20;最大取值为100 */
  Limit: number;
  /** IP搜索 */
  FilterIp?: string;
  /** 资产实例ID搜索，例如，bgp-00000001 */
  FilterInstanceId?: string;
  /** 地域搜索，例如，ap-guangzhou */
  FilterRegion?: string;
  /** 名称搜索 */
  FilterName?: string;
  /** 按照线路搜索, 1: BGP; 2: 三网 */
  FilterLine?: number;
  /** 状态搜索，idle：运行中；attacking：攻击中；blocking：封堵中 */
  FilterStatus?: string;
  /** 高防包绑定状态搜索，bounding：绑定中； failed：绑定失败 */
  FilterBoundStatus?: string;
  /** 实例id数组 */
  FilterInstanceIdList?: string[];
  /** 企业版搜索, 1：包含重保护航套餐下的企业版列表, 2: 不包含重保护航套餐的企业版列表 */
  FilterEnterpriseFlag?: number;
  /** 轻量版搜索 */
  FilterLightFlag?: number;
  /** 定制版搜索 */
  FilterChannelFlag?: number;
  /** 标签搜索 */
  FilterTag?: TagFilter;
  /** 试用资源搜索，1: 应急防护资源；2：PLG试用资源 */
  FilterTrialFlag?: number;
  /** 重保护航搜索 */
  FilterConvoy?: number;
  /** 默认false；接口传true，返回数据中不包含高级信息，高级信息包含：InstanceList[0].Usage。 */
  ExcludeAdvancedInfo?: boolean;
  /** 资产IP数组 */
  FilterAssetIpList?: string[];
  /** 是否包含基础防护增强版 0: 不包含 1: 包含 */
  FilterBasicPlusFlag?: number;
  /** 是否商业模式优化-普惠版 0: 包含商业模式优化-普惠版 1: 只查询商业模式优化-普惠版 */
  FilterPlanCntFlag?: number;
  /** 是否跨区域产品 0: 不包含跨区域产品 1: 中国大陆跨区域产品 2: 非中国大陆跨区域产品 3: 包含全部 */
  FilterTransRegionFlag?: number;
  /** zoenid列表 */
  FilterZoneIdList?: number[];
}

declare interface DescribeListBGPInstancesResponse {
  /** 总数 */
  Total?: number;
  /** 高防包资产实例列表 */
  InstanceList?: BGPInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListBlackWhiteIpListRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
}

declare interface DescribeListBlackWhiteIpListResponse {
  /** 总数 */
  Total: number;
  /** 黑白IP列表 */
  IpList: BlackWhiteIpRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListDDoSAIRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
}

declare interface DescribeListDDoSAIResponse {
  /** 总数 */
  Total: number;
  /** AI防护开关列表 */
  ConfigList: DDoSAIRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListDDoSGeoIPBlockConfigRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
}

declare interface DescribeListDDoSGeoIPBlockConfigResponse {
  /** 总数 */
  Total: number;
  /** DDoS区域封禁配置列表 */
  ConfigList: DDoSGeoIPBlockConfigRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListDDoSSpeedLimitConfigRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
}

declare interface DescribeListDDoSSpeedLimitConfigResponse {
  /** 总数 */
  Total: number;
  /** 访问限速配置列表 */
  ConfigList: DDoSSpeedLimitConfigRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListIPAlarmConfigRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** 告警阈值类型搜索，取值[1(入流量告警阈值)2(攻击清洗流量告警阈值)] */
  FilterAlarmType: number;
  /** IP搜索 */
  FilterIp?: string;
  /** 高防IP实例资源的cname */
  FilterCname?: string;
}

declare interface DescribeListIPAlarmConfigResponse {
  /** 总数 */
  Total: number;
  /** IP告警阈值配置列表 */
  ConfigList: IPAlarmThresholdRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListListenerRequest {
}

declare interface DescribeListListenerResponse {
  /** 4层转发监听器列表 */
  Layer4Listeners: Layer4Rule[];
  /** 7层转发监听器列表 */
  Layer7Listeners: Layer7Rule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListPacketFilterConfigRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
}

declare interface DescribeListPacketFilterConfigResponse {
  /** 总数 */
  Total: number;
  /** 特征过滤配置 */
  ConfigList: PacketFilterRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListPortAclListRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** ip搜索 */
  FilterIp?: string;
}

declare interface DescribeListPortAclListResponse {
  /** 总数 */
  Total: number;
  /** 端口acl策略 */
  AclList: AclConfigRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListProtectThresholdConfigRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
  /** 域名搜索(查询域名与协议的CC防护阈值时使用） */
  FilterDomain?: string;
  /** 协议搜索(查询域名与协议的CC防护阈值时使用） */
  FilterProtocol?: string;
}

declare interface DescribeListProtectThresholdConfigResponse {
  /** 总记录数 */
  Total: number;
  /** 防护阈值配置列表 */
  ConfigList: ProtectThresholdRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListProtocolBlockConfigRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
}

declare interface DescribeListProtocolBlockConfigResponse {
  /** 总数 */
  Total: number;
  /** 协议封禁配置 */
  ConfigList: ProtocolBlockRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListSchedulingDomainRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为20;最大取值为100 */
  Limit: number;
  /** 调度域名搜索 */
  FilterDomain?: string;
  /** 运行状态 0 代表未运行 1 正在运行 2 运行异常 */
  Status?: string;
}

declare interface DescribeListSchedulingDomainResponse {
  /** 总数 */
  Total?: number;
  /** 调度域名信息列表 */
  DomainList?: SchedulingDomainInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListWaterPrintConfigRequest {
  /** 页起始偏移，取值为(页码-1)*一页条数 */
  Offset: number;
  /** 一页条数，当Limit=0时，默认一页条数为100;最大取值为100 */
  Limit: number;
  /** 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例 */
  FilterInstanceId: string;
  /** IP搜索 */
  FilterIp?: string;
}

declare interface DescribeListWaterPrintConfigResponse {
  /** 总数 */
  Total: number;
  /** 水印配置列表 */
  ConfigList: WaterPrintRelation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNewL7RulesErrHealthRequest {
  /** DDoS防护子产品代号(bgpip表示高防IP) */
  Business: string;
  /** 规则Id列表 */
  RuleIdList?: string[];
}

declare interface DescribeNewL7RulesErrHealthResponse {
  /** 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP及错误信息，多个IP用","分割 */
  ErrHealths?: KeyValue[];
  /** 异常规则的总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNewL7RulesRequest {
  /** DDoS防护子产品代号（bgpip表示高防IP） */
  Business: string;
  /** 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)] */
  StatusList?: number[];
  /** 域名搜索，选填，当需要搜索域名请填写 */
  Domain?: string;
  /** IP搜索，选填，当需要搜索IP请填写 */
  Ip?: string;
  /** 一页条数，默认值100，最大值100，超过100最大返回100条 */
  Limit?: number;
  /** 规则偏移量，取值为(页码-1)*一页条数 */
  Offset?: number;
  /** 转发协议搜索，选填，取值[http, https, http/https] */
  ProtocolList?: string[];
  /** 高防IP实例的Cname */
  Cname?: string;
  /** 默认为false，当为true时，将不对各个规则做策略检查，直接导出所有规则 */
  Export?: boolean;
}

declare interface DescribeNewL7RulesResponse {
  /** 转发规则列表 */
  Rules?: NewL7RuleEntry[];
  /** 健康检查配置列表 */
  Healths?: L7RuleHealth[];
  /** 总规则数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewAttackTrendRequest {
  /** 攻击类型，取值ddos， cc */
  Type: string;
  /** 纬度，当前仅支持attackcount */
  Dimension: string;
  /** 周期，当前仅支持86400 */
  Period: number;
  /** 防护概览攻击趋势开始时间 */
  StartTime: string;
  /** 防护概览攻击趋势结束时间 */
  EndTime: string;
}

declare interface DescribeOverviewAttackTrendResponse {
  /** 攻击类型 */
  Type: string;
  /** 防护概览攻击趋势起始时间 */
  StartTime: string;
  /** 防护概览攻击趋势结束时间 */
  EndTime: string;
  /** 周期 */
  Period: number;
  /** 每个周期点的攻击次数 */
  Data: number[];
  /** 包含的周期点数 */
  Count: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewCCTrendRequest {
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)] */
  MetricName: string;
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp-multip表示共享包；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源的IP */
  IpList?: string[];
  /** 资源实例ID */
  Id?: string;
}

declare interface DescribeOverviewCCTrendResponse {
  /** 值个数 */
  Count?: number;
  /** 值数组 */
  Data?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewDDoSEventListRequest {
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 可选按攻击状态过滤，start：攻击中；end：攻击结束 */
  AttackStatus?: string;
  /** 偏移量 */
  Offset?: number;
  /** 记录条数 */
  Limit?: number;
}

declare interface DescribeOverviewDDoSEventListResponse {
  /** 记录总数 */
  Total: number;
  /** 事件列表 */
  EventList: OverviewDDoSEvent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewDDoSTrendRequest {
  /** 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)] */
  Period: number;
  /** 统计开始时间 */
  StartTime: string;
  /** 统计结束时间 */
  EndTime: string;
  /** 指标，取值[bps(攻击流量带宽，pps(攻击包速率))] */
  MetricName: string;
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp-multip表示高防包；basic表示DDoS基础防护） */
  Business?: string;
  /** 资源实例的IP列表 */
  IpList?: string[];
  /** 资源实例ID */
  Id?: string;
}

declare interface DescribeOverviewDDoSTrendResponse {
  /** 值个数 */
  Count?: number;
  /** 值数组，攻击流量带宽单位为Mbps，包速率单位为pps */
  Data?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewIndexRequest {
  /** 拉取指标起始时间 */
  StartTime: string;
  /** 拉取指标结束时间 */
  EndTime: string;
}

declare interface DescribeOverviewIndexResponse {
  /** IP总数 */
  AllIpCount: number;
  /** 高防IP总数（包含高防包+高防IP） */
  AntiddosIpCount: number;
  /** 攻击IP总数 */
  AttackIpCount: number;
  /** 封堵IP总数 */
  BlockIpCount: number;
  /** 高防域名总数 */
  AntiddosDomainCount: number;
  /** 攻击域名总数 */
  AttackDomainCount: number;
  /** 攻击流量峰值 */
  MaxAttackFlow: number;
  /** 当前最近一条攻击中的起始时间 */
  NewAttackTime: string;
  /** 当前最近一条攻击中的IP */
  NewAttackIp: string;
  /** 当前最近一条攻击中的攻击类型 */
  NewAttackType: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePendingRiskInfoRequest {
}

declare interface DescribePendingRiskInfoResponse {
  /** 是否为付费用户，true：付费用户， false：普通用户 */
  IsPaidUsr: boolean;
  /** 攻击中的资源数量 */
  AttackingCount: number;
  /** 封堵中的资源数量 */
  BlockingCount: number;
  /** 已过期的资源数量 */
  ExpiredCount: number;
  /** 所有待处理风险事件总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateDDoSEipAddressRequest {
  /** 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。 */
  InstanceId: string;
  /** 资源实例ID对应的高防弹性公网IP。 */
  Eip: string;
}

declare interface DisassociateDDoSEipAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCLevelPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** IP地址 */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议，可取值HTTP，HTTPS */
  Protocol: string;
  /** CC防护等级，可取值loose表示宽松，strict表示严格，normal表示适中， emergency表示攻击紧急， sup_loose表示超级宽松，default表示默认策略（无频控配置下发），customized表示自定义策略 */
  Level: string;
}

declare interface ModifyCCLevelPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCPrecisionPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 策略Id */
  PolicyId: string;
  /** 策略方式。可取值：alg、drop。alg指返回验证码方式验证，drop表示该访问丢弃。 */
  PolicyAction: string;
  /** 策略记录 */
  PolicyList: CCPrecisionPlyRecord[];
}

declare interface ModifyCCPrecisionPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCReqLimitPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** 策略Id */
  PolicyId: string;
  /** 策略项 */
  Policy: CCReqLimitPolicyRecord;
}

declare interface ModifyCCReqLimitPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCCThresholdPolicyRequest {
  /** 实例Id */
  InstanceId: string;
  /** IP地址 */
  Ip: string;
  /** 域名 */
  Domain: string;
  /** 协议，可取值HTTP，HTTPS */
  Protocol: string;
  /** 清洗阈值，-1表示开启“默认”模式 */
  Threshold: number;
}

declare interface ModifyCCThresholdPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCcBlackWhiteIpListRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** IP列表 */
  IpList: IpSegment[];
  /** IP类型，取值[black(黑名单IP), white(白名单IP)] */
  Type: string;
  /** 策略Id */
  PolicyId: string;
}

declare interface ModifyCcBlackWhiteIpListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSBlackWhiteIpListRequest {
  /** 资源Id */
  InstanceId: string;
  /** 当前配置的黑白名单类型，取值black时表示黑名单；取值white时表示白名单 */
  OldIpType: string;
  /** 当前配置的Ip段，包含ip与掩码 */
  OldIp: IpSegment;
  /** 修改后黑白名单类型，取值black时黑名单，取值white时白名单 */
  NewIpType: string;
  /** 当前配置的Ip段，包含ip与掩码 */
  NewIp: IpSegment;
}

declare interface ModifyDDoSBlackWhiteIpListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSGeoIPBlockConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** DDoS区域封禁配置，填写参数时配置ID不能为空 */
  DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig;
}

declare interface ModifyDDoSGeoIPBlockConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSLevelRequest {
  /** 资源ID */
  Id: string;
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** =get表示读取防护等级；=set表示修改防护等级 */
  Method: string;
  /** 防护等级，取值[low,middle,high]；当Method=set时必填 */
  DDoSLevel?: string;
}

declare interface ModifyDDoSLevelResponse {
  /** 防护等级，取值[low,middle,high] */
  DDoSLevel?: string;
  /** 资源ID */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSSpeedLimitConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 访问限速配置，填写参数时配置ID不能为空 */
  DDoSSpeedLimitConfig: DDoSSpeedLimitConfig;
}

declare interface ModifyDDoSSpeedLimitConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDDoSThresholdRequest {
  /** DDoS清洗阈值，取值[0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000];当设置值为0时，表示采用默认值； */
  Threshold: number;
  /** 资源ID */
  Id: string;
  /** DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版） */
  Business: string;
  /** 配置其他阈值标志位，1表示配置其他阈值 */
  OtherThresholdFlag?: number;
  /** SYN FLOOD流量阈值 */
  SynFloodThreshold?: number;
  /** SYN FLOOD包量阈值 */
  SynFloodPktThreshold?: number;
  /** UDP FLOOD流量阈值 */
  UdpFloodThreshold?: number;
  /** UDP FLOOD包量阈值 */
  UdpFloodPktThreshold?: number;
  /** ACK FLOOD流量阈值 */
  AckFloodThreshold?: number;
  /** ACK FLOOD包量阈值 */
  AckFloodPktThreshold?: number;
  /** SYNACK FLOOD流量阈值 */
  SynAckFloodThreshold?: number;
  /** SYNACK FLOOD包量阈值 */
  SynAckFloodPktThreshold?: number;
  /** RST FLOOD流量阈值 */
  RstFloodThreshold?: number;
  /** RST FLOOD包量阈值 */
  RstFloodPktThreshold?: number;
}

declare interface ModifyDDoSThresholdResponse {
  /** 成功码 */
  Success?: SuccessCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainUsrNameRequest {
  /** 用户CNAME */
  DomainName: string;
  /** 域名名称 */
  DomainUserName: string;
}

declare interface ModifyDomainUsrNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNewDomainRulesRequest {
  /** DDoS防护子产品代号（bgpip表示高防IP） */
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

declare interface ModifyPacketFilterConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 特征过滤配置 */
  PacketFilterConfig: PacketFilterConfig;
}

declare interface ModifyPacketFilterConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPortAclConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 旧端口acl策略 */
  OldAclConfig: AclConfig;
  /** 新端口acl策略 */
  NewAclConfig: AclConfig;
}

declare interface ModifyPortAclConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchWaterPrintConfigRequest {
  /** 资源实例ID */
  InstanceId: string;
  /** 水印开启/关闭状态，1表示开启；0表示关闭 */
  OpenStatus: number;
  /** 是否开启代理，1开启则忽略IP+端口校验；0关闭则需要IP+端口校验 */
  CloudSdkProxy?: number;
}

declare interface SwitchWaterPrintConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Antiddos T-Sec-DDoS防护(Anti-DDoS)} */
declare interface Antiddos {
  (): Versions;
  /** 绑定高防弹性公网IP {@link AssociateDDoSEipAddressRequest} {@link AssociateDDoSEipAddressResponse} */
  AssociateDDoSEipAddress(data: AssociateDDoSEipAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateDDoSEipAddressResponse>;
  /** 绑定高防弹性公网IP到Clb {@link AssociateDDoSEipLoadBalancerRequest} {@link AssociateDDoSEipLoadBalancerResponse} */
  AssociateDDoSEipLoadBalancer(data: AssociateDDoSEipLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateDDoSEipLoadBalancerResponse>;
  /** 添加DDoS防护的IP黑白名单 {@link CreateBlackWhiteIpListRequest} {@link CreateBlackWhiteIpListResponse} */
  CreateBlackWhiteIpList(data: CreateBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBlackWhiteIpListResponse>;
  /** 绑定IP到高防包实例 {@link CreateBoundIPRequest} {@link CreateBoundIPResponse} */
  CreateBoundIP(data: CreateBoundIPRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBoundIPResponse>;
  /** 新增CC精准防护策略 {@link CreateCCPrecisionPolicyRequest} {@link CreateCCPrecisionPolicyResponse} */
  CreateCCPrecisionPolicy(data: CreateCCPrecisionPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCCPrecisionPolicyResponse>;
  /** 新增CC频率限制策略 {@link CreateCCReqLimitPolicyRequest} {@link CreateCCReqLimitPolicyResponse} */
  CreateCCReqLimitPolicy(data: CreateCCReqLimitPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCCReqLimitPolicyResponse>;
  /** 新建CC四层黑白名单 {@link CreateCcBlackWhiteIpListRequest} {@link CreateCcBlackWhiteIpListResponse} */
  CreateCcBlackWhiteIpList(data: CreateCcBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCcBlackWhiteIpListResponse>;
  /** 新建CC防护的地域封禁配置 {@link CreateCcGeoIPBlockConfigRequest} {@link CreateCcGeoIPBlockConfigResponse} */
  CreateCcGeoIPBlockConfig(data: CreateCcGeoIPBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCcGeoIPBlockConfigResponse>;
  /** 设置DDoS防护的AI防护开关 {@link CreateDDoSAIRequest} {@link CreateDDoSAIResponse} */
  CreateDDoSAI(data: CreateDDoSAIRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDDoSAIResponse>;
  /** 添加DDoS防护的IP网段黑白名单 {@link CreateDDoSBlackWhiteIpListRequest} {@link CreateDDoSBlackWhiteIpListResponse} */
  CreateDDoSBlackWhiteIpList(data: CreateDDoSBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDDoSBlackWhiteIpListResponse>;
  /** 配置DDoS连接抑制选项 {@link CreateDDoSConnectLimitRequest} {@link CreateDDoSConnectLimitResponse} */
  CreateDDoSConnectLimit(data: CreateDDoSConnectLimitRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDDoSConnectLimitResponse>;
  /** 添加DDoS防护的区域封禁配置 {@link CreateDDoSGeoIPBlockConfigRequest} {@link CreateDDoSGeoIPBlockConfigResponse} */
  CreateDDoSGeoIPBlockConfig(data: CreateDDoSGeoIPBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDDoSGeoIPBlockConfigResponse>;
  /** 添加DDoS防护的访问限速配置 {@link CreateDDoSSpeedLimitConfigRequest} {@link CreateDDoSSpeedLimitConfigResponse} */
  CreateDDoSSpeedLimitConfig(data: CreateDDoSSpeedLimitConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDDoSSpeedLimitConfigResponse>;
  /** 设置单IP默认告警阈值配置 {@link CreateDefaultAlarmThresholdRequest} {@link CreateDefaultAlarmThresholdResponse} */
  CreateDefaultAlarmThreshold(data: CreateDefaultAlarmThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefaultAlarmThresholdResponse>;
  /** 设置单IP告警阈值配置 {@link CreateIPAlarmThresholdConfigRequest} {@link CreateIPAlarmThresholdConfigResponse} */
  CreateIPAlarmThresholdConfig(data: CreateIPAlarmThresholdConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIPAlarmThresholdConfigResponse>;
  /** 批量配置L7转发规则的证书 {@link CreateL7RuleCertsRequest} {@link CreateL7RuleCertsResponse} */
  CreateL7RuleCerts(data: CreateL7RuleCertsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7RuleCertsResponse>;
  /** 添加7层转发规则 {@link CreateNewL7RulesRequest} {@link CreateNewL7RulesResponse} */
  CreateNewL7Rules(data: CreateNewL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNewL7RulesResponse>;
  /** 添加DDoS防护的特征过滤规则 {@link CreatePacketFilterConfigRequest} {@link CreatePacketFilterConfigResponse} */
  CreatePacketFilterConfig(data: CreatePacketFilterConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePacketFilterConfigResponse>;
  /** 添加DDoS防护的端口acl策略 {@link CreatePortAclConfigRequest} {@link CreatePortAclConfigResponse} */
  CreatePortAclConfig(data: CreatePortAclConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePortAclConfigResponse>;
  /** 批量添加DDoS防护的端口acl策略 {@link CreatePortAclConfigListRequest} {@link CreatePortAclConfigListResponse} */
  CreatePortAclConfigList(data: CreatePortAclConfigListRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePortAclConfigListResponse>;
  /** 设置DDoS防护的协议封禁配置 {@link CreateProtocolBlockConfigRequest} {@link CreateProtocolBlockConfigResponse} */
  CreateProtocolBlockConfig(data: CreateProtocolBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProtocolBlockConfigResponse>;
  /** 创建调度的域名 {@link CreateSchedulingDomainRequest} {@link CreateSchedulingDomainResponse} */
  CreateSchedulingDomain(data?: CreateSchedulingDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSchedulingDomainResponse>;
  /** 添加DDoS防护的水印防护配置 {@link CreateWaterPrintConfigRequest} {@link CreateWaterPrintConfigResponse} */
  CreateWaterPrintConfig(data: CreateWaterPrintConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWaterPrintConfigResponse>;
  /** 添加DDoS防护的水印防护密钥 {@link CreateWaterPrintKeyRequest} {@link CreateWaterPrintKeyResponse} */
  CreateWaterPrintKey(data: CreateWaterPrintKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWaterPrintKeyResponse>;
  /** 删除CC分级策略 {@link DeleteCCLevelPolicyRequest} {@link DeleteCCLevelPolicyResponse} */
  DeleteCCLevelPolicy(data: DeleteCCLevelPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCLevelPolicyResponse>;
  /** 删除CC精准防护策略 {@link DeleteCCPrecisionPolicyRequest} {@link DeleteCCPrecisionPolicyResponse} */
  DeleteCCPrecisionPolicy(data: DeleteCCPrecisionPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCPrecisionPolicyResponse>;
  /** 删除CC频率限制策略 {@link DeleteCCRequestLimitPolicyRequest} {@link DeleteCCRequestLimitPolicyResponse} */
  DeleteCCRequestLimitPolicy(data: DeleteCCRequestLimitPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCRequestLimitPolicyResponse>;
  /** 删除CC清洗阈值策略 {@link DeleteCCThresholdPolicyRequest} {@link DeleteCCThresholdPolicyResponse} */
  DeleteCCThresholdPolicy(data: DeleteCCThresholdPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCThresholdPolicyResponse>;
  /** 删除CC四层黑白名单 {@link DeleteCcBlackWhiteIpListRequest} {@link DeleteCcBlackWhiteIpListResponse} */
  DeleteCcBlackWhiteIpList(data: DeleteCcBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCcBlackWhiteIpListResponse>;
  /** 删除CC防护的区域封禁配置 {@link DeleteCcGeoIPBlockConfigRequest} {@link DeleteCcGeoIPBlockConfigResponse} */
  DeleteCcGeoIPBlockConfig(data: DeleteCcGeoIPBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCcGeoIPBlockConfigResponse>;
  /** 删除DDoS防护的IP网段黑白名单 {@link DeleteDDoSBlackWhiteIpListRequest} {@link DeleteDDoSBlackWhiteIpListResponse} */
  DeleteDDoSBlackWhiteIpList(data: DeleteDDoSBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDDoSBlackWhiteIpListResponse>;
  /** 删除DDoS防护的区域封禁配置 {@link DeleteDDoSGeoIPBlockConfigRequest} {@link DeleteDDoSGeoIPBlockConfigResponse} */
  DeleteDDoSGeoIPBlockConfig(data: DeleteDDoSGeoIPBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDDoSGeoIPBlockConfigResponse>;
  /** 删除DDoS防护的访问限速配置 {@link DeleteDDoSSpeedLimitConfigRequest} {@link DeleteDDoSSpeedLimitConfigResponse} */
  DeleteDDoSSpeedLimitConfig(data: DeleteDDoSSpeedLimitConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDDoSSpeedLimitConfigResponse>;
  /** 删除DDoS防护的特征过滤规则 {@link DeletePacketFilterConfigRequest} {@link DeletePacketFilterConfigResponse} */
  DeletePacketFilterConfig(data: DeletePacketFilterConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePacketFilterConfigResponse>;
  /** 删除DDoS防护的端口acl策略 {@link DeletePortAclConfigRequest} {@link DeletePortAclConfigResponse} */
  DeletePortAclConfig(data: DeletePortAclConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePortAclConfigResponse>;
  /** 删除DDoS防护的水印防护配置 {@link DeleteWaterPrintConfigRequest} {@link DeleteWaterPrintConfigResponse} */
  DeleteWaterPrintConfig(data: DeleteWaterPrintConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWaterPrintConfigResponse>;
  /** 删除DDoS防护的水印防护密钥 {@link DeleteWaterPrintKeyRequest} {@link DeleteWaterPrintKeyResponse} */
  DeleteWaterPrintKey(data: DeleteWaterPrintKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWaterPrintKeyResponse>;
  /** 高防IP获取7层转发规则 {@link DescribeBGPIPL7RulesRequest} {@link DescribeBGPIPL7RulesResponse} */
  DescribeBGPIPL7Rules(data: DescribeBGPIPL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBGPIPL7RulesResponse>;
  /** 获取基础防护攻击状态 {@link DescribeBasicDeviceStatusRequest} {@link DescribeBasicDeviceStatusResponse} */
  DescribeBasicDeviceStatus(data?: DescribeBasicDeviceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBasicDeviceStatusResponse>;
  /** 获取高防包流量折线图 {@link DescribeBgpBizTrendRequest} {@link DescribeBgpBizTrendResponse} */
  DescribeBgpBizTrend(data: DescribeBgpBizTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBgpBizTrendResponse>;
  /** 获取业务流量状态码统计列表 {@link DescribeBizHttpStatusRequest} {@link DescribeBizHttpStatusResponse} */
  DescribeBizHttpStatus(data: DescribeBizHttpStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBizHttpStatusResponse>;
  /** 获取高防IP业务监控流量曲线 {@link DescribeBizMonitorTrendRequest} {@link DescribeBizMonitorTrendResponse} */
  DescribeBizMonitorTrend(data: DescribeBizMonitorTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBizMonitorTrendResponse>;
  /** 获取高防IP业务流量曲线 {@link DescribeBizTrendRequest} {@link DescribeBizTrendResponse} */
  DescribeBizTrend(data: DescribeBizTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBizTrendResponse>;
  /** @deprecated 获取DDoS防护的IP黑白名单 {@link DescribeBlackWhiteIpListRequest} {@link DescribeBlackWhiteIpListResponse} */
  DescribeBlackWhiteIpList(data: DescribeBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlackWhiteIpListResponse>;
  /** 获取CC防护等级列表 {@link DescribeCCLevelListRequest} {@link DescribeCCLevelListResponse} */
  DescribeCCLevelList(data: DescribeCCLevelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCLevelListResponse>;
  /** 获取CC分级策略 {@link DescribeCCLevelPolicyRequest} {@link DescribeCCLevelPolicyResponse} */
  DescribeCCLevelPolicy(data: DescribeCCLevelPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCLevelPolicyResponse>;
  /** 获取CC精准防护列表 {@link DescribeCCPrecisionPlyListRequest} {@link DescribeCCPrecisionPlyListResponse} */
  DescribeCCPrecisionPlyList(data: DescribeCCPrecisionPlyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCPrecisionPlyListResponse>;
  /** 获取CC频率限制策略列表 {@link DescribeCCReqLimitPolicyListRequest} {@link DescribeCCReqLimitPolicyListResponse} */
  DescribeCCReqLimitPolicyList(data: DescribeCCReqLimitPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCReqLimitPolicyListResponse>;
  /** 获取CC清洗阈值列表 {@link DescribeCCThresholdListRequest} {@link DescribeCCThresholdListResponse} */
  DescribeCCThresholdList(data: DescribeCCThresholdListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCThresholdListResponse>;
  /** 获取CC攻击指标曲线 {@link DescribeCCTrendRequest} {@link DescribeCCTrendResponse} */
  DescribeCCTrend(data: DescribeCCTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCTrendResponse>;
  /** 获取CC四层黑白名单列表 {@link DescribeCcBlackWhiteIpListRequest} {@link DescribeCcBlackWhiteIpListResponse} */
  DescribeCcBlackWhiteIpList(data: DescribeCcBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcBlackWhiteIpListResponse>;
  /** 获取CC防护的区域封禁配置列表 {@link DescribeCcGeoIPBlockConfigListRequest} {@link DescribeCcGeoIPBlockConfigListResponse} */
  DescribeCcGeoIPBlockConfigList(data: DescribeCcGeoIPBlockConfigListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcGeoIPBlockConfigListResponse>;
  /** 获取DDoS防护的IP网段黑白名单 {@link DescribeDDoSBlackWhiteIpListRequest} {@link DescribeDDoSBlackWhiteIpListResponse} */
  DescribeDDoSBlackWhiteIpList(data: DescribeDDoSBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSBlackWhiteIpListResponse>;
  /** 获取DDoS连接抑制配置列表 {@link DescribeDDoSConnectLimitListRequest} {@link DescribeDDoSConnectLimitListResponse} */
  DescribeDDoSConnectLimitList(data: DescribeDDoSConnectLimitListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSConnectLimitListResponse>;
  /** 获取DDoS攻击指标曲线 {@link DescribeDDoSTrendRequest} {@link DescribeDDoSTrendResponse} */
  DescribeDDoSTrend(data: DescribeDDoSTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSTrendResponse>;
  /** 获取单IP默认告警阈值配置 {@link DescribeDefaultAlarmThresholdRequest} {@link DescribeDefaultAlarmThresholdResponse} */
  DescribeDefaultAlarmThreshold(data: DescribeDefaultAlarmThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultAlarmThresholdResponse>;
  /** 获取IP封堵列表 {@link DescribeIpBlockListRequest} {@link DescribeIpBlockListResponse} */
  DescribeIpBlockList(data?: DescribeIpBlockListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpBlockListResponse>;
  /** 查询与证书ID匹配的七层规则 {@link DescribeL7RulesBySSLCertIdRequest} {@link DescribeL7RulesBySSLCertIdResponse} */
  DescribeL7RulesBySSLCertId(data: DescribeL7RulesBySSLCertIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7RulesBySSLCertIdResponse>;
  /** 获取高防IP资产实例列表 {@link DescribeListBGPIPInstancesRequest} {@link DescribeListBGPIPInstancesResponse} */
  DescribeListBGPIPInstances(data: DescribeListBGPIPInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListBGPIPInstancesResponse>;
  /** 获取高防包资产实例列表 {@link DescribeListBGPInstancesRequest} {@link DescribeListBGPInstancesResponse} */
  DescribeListBGPInstances(data: DescribeListBGPInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListBGPInstancesResponse>;
  /** 获取DDoS防护的IP黑白名单列表 {@link DescribeListBlackWhiteIpListRequest} {@link DescribeListBlackWhiteIpListResponse} */
  DescribeListBlackWhiteIpList(data: DescribeListBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListBlackWhiteIpListResponse>;
  /** 获取DDoS防护的AI防护开关列表 {@link DescribeListDDoSAIRequest} {@link DescribeListDDoSAIResponse} */
  DescribeListDDoSAI(data: DescribeListDDoSAIRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListDDoSAIResponse>;
  /** 获取DDoS防护的区域封禁配置列表 {@link DescribeListDDoSGeoIPBlockConfigRequest} {@link DescribeListDDoSGeoIPBlockConfigResponse} */
  DescribeListDDoSGeoIPBlockConfig(data: DescribeListDDoSGeoIPBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListDDoSGeoIPBlockConfigResponse>;
  /** 获取DDoS防护的访问限速配置列表 {@link DescribeListDDoSSpeedLimitConfigRequest} {@link DescribeListDDoSSpeedLimitConfigResponse} */
  DescribeListDDoSSpeedLimitConfig(data: DescribeListDDoSSpeedLimitConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListDDoSSpeedLimitConfigResponse>;
  /** 获取单IP告警阈值配置列表 {@link DescribeListIPAlarmConfigRequest} {@link DescribeListIPAlarmConfigResponse} */
  DescribeListIPAlarmConfig(data: DescribeListIPAlarmConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListIPAlarmConfigResponse>;
  /** 获取转发监听器列表 {@link DescribeListListenerRequest} {@link DescribeListListenerResponse} */
  DescribeListListener(data?: DescribeListListenerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListListenerResponse>;
  /** 获取DDoS防护的特征过滤规则列表 {@link DescribeListPacketFilterConfigRequest} {@link DescribeListPacketFilterConfigResponse} */
  DescribeListPacketFilterConfig(data: DescribeListPacketFilterConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListPacketFilterConfigResponse>;
  /** 获取DDoS防护的端口acl策略列表 {@link DescribeListPortAclListRequest} {@link DescribeListPortAclListResponse} */
  DescribeListPortAclList(data: DescribeListPortAclListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListPortAclListResponse>;
  /** @deprecated 获取防护阈值配置列表 {@link DescribeListProtectThresholdConfigRequest} {@link DescribeListProtectThresholdConfigResponse} */
  DescribeListProtectThresholdConfig(data: DescribeListProtectThresholdConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListProtectThresholdConfigResponse>;
  /** 获取DDoS防护的协议封禁配置列表 {@link DescribeListProtocolBlockConfigRequest} {@link DescribeListProtocolBlockConfigResponse} */
  DescribeListProtocolBlockConfig(data: DescribeListProtocolBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListProtocolBlockConfigResponse>;
  /** 获取智能调度域名列表 {@link DescribeListSchedulingDomainRequest} {@link DescribeListSchedulingDomainResponse} */
  DescribeListSchedulingDomain(data: DescribeListSchedulingDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListSchedulingDomainResponse>;
  /** 获取DDoS防护的水印防护配置列表 {@link DescribeListWaterPrintConfigRequest} {@link DescribeListWaterPrintConfigResponse} */
  DescribeListWaterPrintConfig(data: DescribeListWaterPrintConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListWaterPrintConfigResponse>;
  /** 高防IP获取7层规则 {@link DescribeNewL7RulesRequest} {@link DescribeNewL7RulesResponse} */
  DescribeNewL7Rules(data: DescribeNewL7RulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewL7RulesResponse>;
  /** 获取L7转发规则健康检查异常结果列表 {@link DescribeNewL7RulesErrHealthRequest} {@link DescribeNewL7RulesErrHealthResponse} */
  DescribeNewL7RulesErrHealth(data: DescribeNewL7RulesErrHealthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewL7RulesErrHealthResponse>;
  /** 拉取防护概览攻击趋势 {@link DescribeOverviewAttackTrendRequest} {@link DescribeOverviewAttackTrendResponse} */
  DescribeOverviewAttackTrend(data: DescribeOverviewAttackTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewAttackTrendResponse>;
  /** 获取防护概览趋势图 {@link DescribeOverviewCCTrendRequest} {@link DescribeOverviewCCTrendResponse} */
  DescribeOverviewCCTrend(data: DescribeOverviewCCTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewCCTrendResponse>;
  /** 获取防护概览的ddos攻击事件 {@link DescribeOverviewDDoSEventListRequest} {@link DescribeOverviewDDoSEventListResponse} */
  DescribeOverviewDDoSEventList(data: DescribeOverviewDDoSEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewDDoSEventListResponse>;
  /** 获取防护概览DDoS攻击流量带宽和攻击包速率数据 {@link DescribeOverviewDDoSTrendRequest} {@link DescribeOverviewDDoSTrendResponse} */
  DescribeOverviewDDoSTrend(data: DescribeOverviewDDoSTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewDDoSTrendResponse>;
  /** 拉取防护概览指标 {@link DescribeOverviewIndexRequest} {@link DescribeOverviewIndexResponse} */
  DescribeOverviewIndex(data: DescribeOverviewIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewIndexResponse>;
  /** 查询账号维度待处理风险信息 {@link DescribePendingRiskInfoRequest} {@link DescribePendingRiskInfoResponse} */
  DescribePendingRiskInfo(data?: DescribePendingRiskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePendingRiskInfoResponse>;
  /** 解绑高防弹性公网IP {@link DisassociateDDoSEipAddressRequest} {@link DisassociateDDoSEipAddressResponse} */
  DisassociateDDoSEipAddress(data: DisassociateDDoSEipAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateDDoSEipAddressResponse>;
  /** 修改CC的防护等级 {@link ModifyCCLevelPolicyRequest} {@link ModifyCCLevelPolicyResponse} */
  ModifyCCLevelPolicy(data: ModifyCCLevelPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCLevelPolicyResponse>;
  /** 修改CC精准防护策略 {@link ModifyCCPrecisionPolicyRequest} {@link ModifyCCPrecisionPolicyResponse} */
  ModifyCCPrecisionPolicy(data: ModifyCCPrecisionPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCPrecisionPolicyResponse>;
  /** 修改CC频率限制策略 {@link ModifyCCReqLimitPolicyRequest} {@link ModifyCCReqLimitPolicyResponse} */
  ModifyCCReqLimitPolicy(data: ModifyCCReqLimitPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCReqLimitPolicyResponse>;
  /** 修改CC清洗阈值 {@link ModifyCCThresholdPolicyRequest} {@link ModifyCCThresholdPolicyResponse} */
  ModifyCCThresholdPolicy(data: ModifyCCThresholdPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCCThresholdPolicyResponse>;
  /** 修改CC四层黑白名单 {@link ModifyCcBlackWhiteIpListRequest} {@link ModifyCcBlackWhiteIpListResponse} */
  ModifyCcBlackWhiteIpList(data: ModifyCcBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcBlackWhiteIpListResponse>;
  /** 修改DDoS黑白名单列表 {@link ModifyDDoSBlackWhiteIpListRequest} {@link ModifyDDoSBlackWhiteIpListResponse} */
  ModifyDDoSBlackWhiteIpList(data: ModifyDDoSBlackWhiteIpListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSBlackWhiteIpListResponse>;
  /** 修改DDoS防护的区域封禁配置 {@link ModifyDDoSGeoIPBlockConfigRequest} {@link ModifyDDoSGeoIPBlockConfigResponse} */
  ModifyDDoSGeoIPBlockConfig(data: ModifyDDoSGeoIPBlockConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSGeoIPBlockConfigResponse>;
  /** 修改DDoSIP防护等级 {@link ModifyDDoSLevelRequest} {@link ModifyDDoSLevelResponse} */
  ModifyDDoSLevel(data: ModifyDDoSLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSLevelResponse>;
  /** 修改DDoS防护的访问限速配置 {@link ModifyDDoSSpeedLimitConfigRequest} {@link ModifyDDoSSpeedLimitConfigResponse} */
  ModifyDDoSSpeedLimitConfig(data: ModifyDDoSSpeedLimitConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSSpeedLimitConfigResponse>;
  /** 修改DDoS清洗阈值 {@link ModifyDDoSThresholdRequest} {@link ModifyDDoSThresholdResponse} */
  ModifyDDoSThreshold(data: ModifyDDoSThresholdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDDoSThresholdResponse>;
  /** 修改智能解析域名名称 {@link ModifyDomainUsrNameRequest} {@link ModifyDomainUsrNameResponse} */
  ModifyDomainUsrName(data: ModifyDomainUsrNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainUsrNameResponse>;
  /** 修改7层转发规则 {@link ModifyNewDomainRulesRequest} {@link ModifyNewDomainRulesResponse} */
  ModifyNewDomainRules(data: ModifyNewDomainRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNewDomainRulesResponse>;
  /** 修改DDoS防护的特征过滤规则 {@link ModifyPacketFilterConfigRequest} {@link ModifyPacketFilterConfigResponse} */
  ModifyPacketFilterConfig(data: ModifyPacketFilterConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPacketFilterConfigResponse>;
  /** 修改DDoS防护的端口acl策略 {@link ModifyPortAclConfigRequest} {@link ModifyPortAclConfigResponse} */
  ModifyPortAclConfig(data: ModifyPortAclConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPortAclConfigResponse>;
  /** 开启或关闭DDoS防护的水印防护配置 {@link SwitchWaterPrintConfigRequest} {@link SwitchWaterPrintConfigResponse} */
  SwitchWaterPrintConfig(data: SwitchWaterPrintConfigRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchWaterPrintConfigResponse>;
}

export declare type Versions = ["2020-03-09"];

export default Antiddos;
