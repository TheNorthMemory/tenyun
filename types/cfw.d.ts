/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 访问控制列表对象 */
declare interface AcListsData {
  /** 规则id */
  Id: number;
  /** 访问源 */
  SourceIp: string | null;
  /** 访问目的 */
  TargetIp: string | null;
  /** 协议 */
  Protocol: string | null;
  /** 端口 */
  Port: string | null;
  /** 策略 */
  Strategy: number | null;
  /** 描述 */
  Detail: string | null;
  /** 命中次数 */
  Count: number;
  /** 执行顺序 */
  OrderIndex: number;
  /** 告警规则id */
  LogId: string | null;
}

/** AssetZone */
declare interface AssetZone {
  /** 地域 */
  Zone: string;
  /** 地域英文 */
  ZoneEng: string;
}

/** 企业安全组关联实例信息 */
declare interface AssociatedInstanceInfo {
  /** 实例ID */
  InstanceId: string | null;
  /** 实例名称 */
  InstanceName: string | null;
  /** 实例类型，3是cvm实例,4是clb实例,5是eni实例,6是云数据库 */
  Type: number | null;
  /** 私有网络ID */
  VpcId: string | null;
  /** 私有网络名称 */
  VpcName: string | null;
  /** 公网IP */
  PublicIp: string | null;
  /** 内网IP */
  Ip: string | null;
  /** 关联安全组数量 */
  SecurityGroupCount: number | null;
}

/** NAT防火墙Dnat规则 */
declare interface CfwNatDnatRule {
  /** 网络协议，可选值：TCP、UDP。 */
  IpProtocol: string;
  /** 弹性IP。 */
  PublicIpAddress: string;
  /** 公网端口。 */
  PublicPort: number;
  /** 内网地址。 */
  PrivateIpAddress: string;
  /** 内网端口。 */
  PrivatePort: number;
  /** NAT防火墙转发规则描述。 */
  Description: string;
}

/** 数据库白名单规则数据 */
declare interface DatabaseWhiteListRuleData {
  /** 访问源 */
  SourceIp: string;
  /** 访问源类型，1 ip；6 实例；100 资源分组 */
  SourceType: number;
  /** 访问目的 */
  TargetIp: string;
  /** 访问目的类型，1 ip；6 实例；100 资源分组 */
  TargetType: number;
  /** 规则描述 */
  Detail: string;
  /** 是否地域规则，0不是 1是 */
  IsRegionRule: number;
  /** 是否云厂商规则，0不是 1 时 */
  IsCloudRule: number;
  /** 是否启用，0 不启用，1启用 */
  Enable: number;
  /** 地域码1 */
  FirstLevelRegionCode?: number;
  /** 地域码2 */
  SecondLevelRegionCode?: number;
  /** 地域名称1 */
  FirstLevelRegionName?: string;
  /** 地域名称2 */
  SecondLevelRegionName?: string;
  /** 云厂商码 */
  CloudCode?: string;
}

/** 设置nat防火墙的vpc dns 接入开关 */
declare interface DnsVpcSwitch {
  /** vpc id */
  VpcId: string;
  /** 0：设置为关闭 1:设置为打开 */
  Status: number;
}

/** ip防护状态 */
declare interface IPDefendStatus {
  /** ip地址 */
  IP: string;
  /** 防护状态 1:防护打开; -1:地址错误; 其他:未防护 */
  Status: number;
}

/** // InstanceInfo 实例详情结果type InstanceInfo struct {	AppID string `json:"AppId" gorm:"column:appid"`	Region string `json:"Region" gorm:"column:region"`	VPCID string `json:"VpcId" gorm:"column:vpc_id"`	SubNetID string `json:"SubnetId" gorm:"column:subnet_id"`	InstanceID string `json:"InstanceId" gorm:"column:instance_id"`	InstanceName string `json:"InstanceName" gorm:"column:instance_name"`	//InsType common.CVM 3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA	InsType int `json:"InsType" gorm:"column:instance_type"`	PublicIP string `json:"PublicIp" gorm:"column:public_ip"`	PrivateIP string `json:"PrivateIp" gorm:"column:ip"`	//规则下发无需管，前端展示用	PortNum string `json:"PortNum" gorm:"column:port_num"`	LeakNum string `json:"LeakNum" gorm:"column:leak_num"`	ResourceGroupNum int `json:"ResourceGroupNum"`	VPCName string `json:"VPCName" gorm:"column:VPCName"`} */
declare interface InstanceInfo {
  /** appid信息 */
  AppId: string;
  /** 地域 */
  Region: string;
  /** vpcid信息 */
  VpcId: string;
  /** vpc名称 */
  VPCName: string;
  /** 子网id */
  SubnetId: string;
  /** 资产id */
  InstanceId: string;
  /** 资产名 */
  InstanceName: string;
  /** 资产类型 3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA 13 NATFW */
  InsType: number;
  /** 公网ip */
  PublicIp: string;
  /** 内网ip */
  PrivateIp: string;
  /** 端口数 */
  PortNum: string;
  /** 漏洞数 */
  LeakNum: string;
  /** 1，公网 2内网 */
  InsSource: string;
  /** [a,b] */
  ResourcePath: string[] | null;
}

/** 黑白名单IOC列表 */
declare interface IocListData {
  /** 待处置IP地址，IP/Domain字段二选一 */
  IP: string;
  /** 只能为0或者1 0代表出站 1代表入站 */
  Direction: number;
  /** 待处置域名，IP/Domain字段二选一 */
  Domain?: string;
}

/** 统计折线图通用结构体 */
declare interface IpStatic {
  /** 值 */
  Num: number;
  /** 折线图横坐标时间 */
  StatTime: string;
}

/** Nat防火墙弹性公网ip列表 */
declare interface NatFwEipsInfo {
  /** 弹性公网ip */
  Eip: string;
  /** 所属的Nat网关Id */
  NatGatewayId: string | null;
  /** Nat网关名称 */
  NatGatewayName: string | null;
}

/** nat fw 实例展示的过滤列表 */
declare interface NatFwFilter {
  /** 过滤的类型，例如实例id */
  FilterType: string;
  /** 过滤的内容，以',' 分隔 */
  FilterContent: string;
}

/** Nat实例类型 */
declare interface NatFwInstance {
  /** nat实例id */
  NatinsId: string;
  /** nat实例名称 */
  NatinsName: string;
  /** 实例所在地域 */
  Region: string | null;
  /** 0:新增模式，1:接入模式 */
  FwMode: number | null;
  /** 0:正常状态， 1: 正在创建 */
  Status: number | null;
  /** nat公网ip */
  NatIp: string | null;
}

/** Nat实例卡片详细信息 */
declare interface NatInstanceInfo {
  /** nat实例id */
  NatinsId: string;
  /** nat实例名称 */
  NatinsName: string;
  /** 实例所在地域 */
  Region: string;
  /** 0: 新增模式，1:接入模式 */
  FwMode: number;
  /** 实例带宽大小 Mbps */
  BandWidth: number;
  /** 入向带宽峰值 bps */
  InFlowMax: number;
  /** 出向带宽峰值 bps */
  OutFlowMax: number;
  /** 地域中文信息 */
  RegionZh: string;
  /** 公网ip数组 */
  EipAddress: string[] | null;
  /** 内外使用ip数组 */
  VpcIp: string[] | null;
  /** 实例关联子网数组 */
  Subnets: string[] | null;
  /** 0 :正常 1：正在初始化 */
  Status: number | null;
  /** 地域区域信息 */
  RegionDetail: string | null;
  /** 实例所在可用区 */
  ZoneZh: string | null;
  /** 实例所在可用区 */
  ZoneZhBak: string | null;
}

/** 新增模式传递参数 */
declare interface NewModeItems {
  /** 新增模式下接入的vpc列表 */
  VpcList: string[];
  /** 新增模式下绑定的出口弹性公网ip列表，其中Eips和AddCount至少传递一个。 */
  Eips?: string[];
  /** 新增模式下新增绑定的出口弹性公网ip个数，其中Eips和AddCount至少传递一个。 */
  AddCount?: number;
}

/** 规则输入对象 */
declare interface RuleInfoData {
  /** 执行顺序 */
  OrderIndex: number;
  /** 访问源 */
  SourceIp: string;
  /** 访问目的 */
  TargetIp: string;
  /** 协议 */
  Protocol: string;
  /** 策略, 0：观察，1：阻断，2：放行 */
  Strategy: string;
  /** 访问源类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版 */
  SourceType: number;
  /** 方向，0：出站，1：入站 */
  Direction: number;
  /** 描述 */
  Detail: string;
  /** 访问目的类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版 */
  TargetType: number;
  /** 端口 */
  Port?: string;
  /** id值 */
  Id?: number;
  /** 日志id，从告警处创建必传，其它为空 */
  LogId?: string;
  /** 城市Code */
  City?: number;
  /** 国家Code */
  Country?: number;
  /** 云厂商，支持多个，以逗号分隔， 1:腾讯云（仅中国香港及海外）,2:阿里云,3:亚马逊云,4:华为云,5:微软云 */
  CloudCode?: string;
  /** 是否为地域 */
  IsRegion?: number;
  /** 城市名 */
  CityName?: string;
  /** 国家名 */
  CountryName?: string;
}

/** 新手引导扫描信息 */
declare interface ScanInfo {
  /** 扫描结果信息 */
  ScanResultInfo: ScanResultInfo;
  /** 扫描状态 0扫描中 1完成 2未勾选自动扫描 */
  ScanStatus: number;
  /** 进度 */
  ScanPercent: number;
  /** 预计完成时间 */
  ScanTime: string;
}

/** 新手引导扫描结果信息PortNum int	LeakNum int	IPNum int	IPStatus bool	IdpStatus bool	BanStatus bool */
declare interface ScanResultInfo {
  /** 暴露漏洞数量 */
  LeakNum: number;
  /** 防护ip数量 */
  IPNum: number;
  /** 暴露端口数量 */
  PortNum: number;
  /** 是否开启防护 */
  IPStatus: boolean;
  /** 是否拦截攻击 */
  IdpStatus: boolean;
  /** 是否禁封端口 */
  BanStatus: boolean;
}

/** 双向下发的企业安全组规则 */
declare interface SecurityGroupBothWayInfo {
  /** 执行顺序 */
  OrderIndex: number | null;
  /** 访问源 */
  SourceId: string | null;
  /** 访问源类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组 */
  SourceType: number | null;
  /** 访问目的 */
  TargetId: string | null;
  /** 访问目的类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组 */
  TargetType: number | null;
  /** 协议 */
  Protocol: string | null;
  /** 目的端口 */
  Port: string | null;
  /** 策略, 1：阻断，2：放行 */
  Strategy: number | null;
  /** 方向，0：出站，1：入站，默认1 */
  Direction: number | null;
  /** 地域 */
  Region: string;
  /** 描述 */
  Detail?: string | null;
  /** 是否开关开启，0：未开启，1：开启 */
  Status?: number | null;
  /** 是否是正常规则，0：正常，1：异常 */
  IsNew?: number | null;
  /** 单/双向下发，0:单向下发，1：双向下发 */
  BothWay?: number | null;
  /** 私有网络ID */
  VpcId?: string | null;
  /** 子网ID */
  SubnetId?: string | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 公网IP，多个以英文逗号分隔 */
  PublicIp?: string | null;
  /** 内网IP，多个以英文逗号分隔 */
  PrivateIp?: string | null;
  /** 掩码地址，多个以英文逗号分隔 */
  Cidr?: string | null;
  /** 端口协议类型参数模板id */
  ServiceTemplateId?: string | null;
  /** 是否使用端口协议模板，0：否，1：是 */
  ProtocolPortType?: number;
}

/** 安全组列表数据 */
declare interface SecurityGroupListData {
  /** 执行顺序 */
  OrderIndex: number;
  /** 访问源 */
  SourceId: string;
  /** 访问源类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资源组 */
  SourceType: number;
  /** 访问目的 */
  TargetId: string;
  /** 访问目的类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100:资源组 */
  TargetType: number;
  /** 协议 */
  Protocol: string;
  /** 目的端口 */
  Port: string;
  /** 策略, 1：阻断，2：放行 */
  Strategy: number;
  /** 描述 */
  Detail: string;
  /** 单/双向下发，0:单向下发，1：双向下发 */
  BothWay: number;
  /** 规则ID */
  Id?: number;
  /** 是否开关开启，0：未开启，1：开启 */
  Status?: number;
  /** 是否是正常规则，0：正常，1：异常 */
  IsNew?: number;
  /** 私有网络ID */
  VpcId?: string | null;
  /** 子网ID */
  SubnetId?: string | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 公网IP，多个以英文逗号分隔 */
  PublicIp?: string | null;
  /** 内网IP，多个以英文逗号分隔 */
  PrivateIp?: string | null;
  /** 掩码地址，多个以英文逗号分隔 */
  Cidr?: string | null;
  /** 端口协议类型参数模板id */
  ServiceTemplateId?: string | null;
  /** 生成双向下发规则 */
  BothWayInfo?: SecurityGroupBothWayInfo[] | null;
  /** 方向，0：出站，1：入站，默认1 */
  Direction?: number;
  /** 是否使用端口协议模板，0：否，1：是 */
  ProtocolPortType?: number;
}

/** 企业安全组规则执行顺序修改对象 */
declare interface SecurityGroupOrderIndexData {
  /** 企业安全组规则当前执行顺序 */
  OrderIndex: number;
  /** 企业安全组规则更新目标执行顺序 */
  NewOrderIndex: number;
}

/** 安全组规则 */
declare interface SecurityGroupRule {
  /** 访问源示例：net：IP/CIDR(192.168.0.2)template：参数模板(ipm-dyodhpby)instance：资产实例(ins-123456)resourcegroup：资产分组(/全部分组/分组1/子分组1)tag：资源标签({"Key":"标签key值","Value":"标签Value值"})region：地域(ap-gaungzhou) */
  SourceContent: string;
  /** 访问源类型，类型可以为以下6种：net|template|instance|resourcegroup|tag|region */
  SourceType: string;
  /** 访问目的示例：net：IP/CIDR(192.168.0.2)template：参数模板(ipm-dyodhpby)instance：资产实例(ins-123456)resourcegroup：资产分组(/全部分组/分组1/子分组1)tag：资源标签({"Key":"标签key值","Value":"标签Value值"})region：地域(ap-gaungzhou) */
  DestContent: string;
  /** 访问目的类型，类型可以为以下6种：net|template|instance|resourcegroup|tag|region */
  DestType: string;
  /** 访问控制策略中设置的流量通过云防火墙的方式。取值：accept：放行drop：拒绝 */
  RuleAction: string;
  /** 描述 */
  Description: string;
  /** 规则顺序，-1表示最低，1表示最高 */
  OrderIndex: string;
  /** 协议；TCP/UDP/ICMP/ANY */
  Protocol?: string | null;
  /** 访问控制策略的端口。取值：-1/-1：全部端口80：80端口 */
  Port?: string | null;
  /** 端口协议类型参数模板id；协议端口模板id；与Protocol,Port互斥 */
  ServiceTemplateId?: string | null;
  /** 规则对应的唯一id */
  Id?: string;
  /** 规则状态，true表示启用，false表示禁用 */
  Enable?: string;
}

/** 执行顺序对象 */
declare interface SequenceData {
  /** 规则Id值 */
  Id: number;
  /** 修改前执行顺序 */
  OrderIndex: number;
  /** 修改后执行顺序 */
  NewOrderIndex: number;
}

/** StaticInfo 告警柱形图统计信息 */
declare interface StaticInfo {
  /** 数 */
  Num: number;
  /** 端口 */
  Port: string;
  /** ip信息 */
  Ip: string;
  /** 地址 */
  Address: string;
  /** 资产id */
  InsID: string;
  /** 资产名称 */
  InsName: string;
}

/** 防火墙开关列表对象 */
declare interface SwitchListsData {
  /** 公网IP */
  PublicIp: string | null;
  /** 内网IP */
  IntranetIp: string | null;
  /** 实例名 */
  InstanceName: string | null;
  /** 实例ID */
  InstanceId: string | null;
  /** 资产类型 */
  AssetType: string;
  /** 地域 */
  Area: string | null;
  /** 防火墙开关 */
  Switch: number;
  /** id值 */
  Id: number;
  /** 公网 IP 类型 */
  PublicIpType: number | null;
  /** 风险端口数 */
  PortTimes: number | null;
  /** 最近扫描时间 */
  LastTime: string | null;
  /** 扫描深度 */
  ScanMode: string | null;
  /** 扫描状态 */
  ScanStatus: number | null;
}

/** 告警中心概览数据 */
declare interface TLogInfo {
  /** 失陷主机 */
  OutNum: number;
  /** 待处置告警 */
  HandleNum: number;
  /** 漏洞攻击 */
  VulNum: number;
  /** 网络探测 */
  NetworkNum: number;
  /** 封禁列表 */
  BanNum: number;
  /** 暴力破解 */
  BruteForceNum: number;
}

/** 未处置事件详情 */
declare interface UnHandleEvent {
  /** 伪攻击链类型 */
  EventTableListStruct: UnHandleEventDetail[];
  /** 1 是 0否 */
  BaseLineUser: number;
  /** 1 打开 0 关闭 */
  BaseLineInSwitch: number;
  /** 1 打开 0 关闭 */
  BaseLineOutSwitch: number;
  /** vpc间防火墙实例数量 */
  VpcFwCount: number | null;
}

/** 未处置事件信息汇总 */
declare interface UnHandleEventDetail {
  /** 安全事件名称 */
  EventName: string;
  /** 未处置事件数量 */
  Total: number;
}

/** nat防火墙 vpc dns 开关信息 */
declare interface VpcDnsInfo {
  /** vpc id */
  VpcId: string;
  /** vpc 名称 */
  VpcName: string;
  /** nat 防火墙模式 0：新增模式， 1: 接入模式 */
  FwMode: number;
  /** vpc ipv4网段范围 CIDR（Classless Inter-Domain Routing，无类域间路由选择） */
  VpcIpv4Cidr: string;
  /** 外网弹性ip，防火墙 dns解析地址 */
  DNSEip: string;
  /** nat网关id */
  NatInsId: string | null;
  /** nat网关名称 */
  NatInsName: string | null;
  /** 0：开关关闭 ， 1: 开关打开 */
  SwitchStatus: number;
}

/** vpc区域数据详情 */
declare interface VpcZoneData {
  /** 可用区 */
  Zone: string;
  /** vpc节点地域 */
  Region: string;
}

declare interface AddAcRuleRequest {
  /** -1表示优先级最低，1表示优先级最高 */
  OrderIndex: string;
  /** 访问控制策略中设置的流量通过云防火墙的方式。取值：accept：放行drop：拒绝log：观察 */
  RuleAction: string;
  /** 访问控制策略的流量方向。取值：in：外对内流量访问控制out：内对外流量访问控制 */
  Direction: string;
  /** 访问控制策略的描述信息 */
  Description: string;
  /** 访问控制策略中的源地址类型。取值：net：源IP或网段（IP或者CIDR）location：源区域template：云防火墙地址模板instance：实例idvendor：云厂商 */
  SourceType: string;
  /** 访问控制策略中的源地址。取值：当SourceType为net时，SourceContent为源IP地址或者CIDR地址。例如：1.1.1.0/24当SourceType为template时，SourceContent为源地址模板id。当SourceType为location时，SourceContent为源区域。例如["BJ11", "ZB"]当SourceType为instance时，SourceContent为该实例id对应的公网ip。例如ins-xxxxx当SourceType为vendor时，SourceContent为所选择厂商的公网ip列表。例如：aws,huawei,tencent,aliyun,azure,all代表以上五个 */
  SourceContent: string;
  /** 访问控制策略中的目的地址类型。取值：net：目的IP或者网段（IP或者CIDR）location：源区域template：云防火墙地址模板instance：实例idvendor：云厂商domain: 域名或者ip */
  DestType: string;
  /** 访问控制策略中的目的地址。取值：当DestType为net时，DestContent为源IP地址或者CIDR地址。例如：1.1.1.0/24当DestType为template时，DestContent为源地址模板id。当DestType为location时，DestContent为源区域。例如["BJ11", "ZB"]当DestType为instance时，DestContent为该实例id对应的公网ip。例如ins-xxxxx当DestType为domain时，DestContent为该实例id对应的域名规则。例如*.qq.com当DestType为vendor时，DestContent为所选择厂商的公网ip列表。例如：aws,huawei,tencent,aliyun,azure,all代表以上五个 */
  DestContent: string;
  /** 访问控制策略的端口。取值：-1/-1：全部端口80,443：80或者443 */
  Port: string;
  /** 访问控制策略中流量访问的协议类型。取值：TCP，目前互联网边界规则只能支持TCP，不传参数默认就是TCP */
  Protocol?: string;
  /** 七层协议，取值：HTTP/HTTPSTLS/SSL */
  ApplicationName?: string;
  /** 是否启用规则，默认为启用，取值：true为启用，false为不启用 */
  Enable?: string;
}

declare interface AddAcRuleResponse {
  /** 创建成功后返回新策略的uuid */
  RuleUuid: number;
  /** 0代表成功，-1代表失败 */
  ReturnCode: number;
  /** success代表成功，failed代表失败 */
  ReturnMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddEnterpriseSecurityGroupRulesRequest {
  /** 创建规则数据 */
  Data: SecurityGroupRule[];
  /** 添加类型，0：添加到最后，1：添加到最前；2：中间插入；默认0添加到最后 */
  Type?: number;
  /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。 */
  ClientToken?: string;
  /** 是否延迟下发，1则延迟下发，否则立即下发 */
  IsDelay?: number;
}

declare interface AddEnterpriseSecurityGroupRulesResponse {
  /** 状态值，0：添加成功，非0：添加失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAcRulesRequest {
  /** 创建规则数据 */
  Data: RuleInfoData[];
  /** 0：添加（默认），1：插入 */
  Type?: number;
  /** 边id */
  EdgeId?: string;
  /** 访问控制规则状态 */
  Enable?: number;
  /** 0：添加，1：覆盖 */
  Overwrite?: number;
  /** NAT实例ID, 参数Area存在的时候这个必传 */
  InstanceId?: string;
  /** portScan: 来自于端口扫描, patchImport: 来自于批量导入 */
  From?: string;
  /** NAT地域 */
  Area?: string;
}

declare interface CreateAcRulesResponse {
  /** 状态值，0:操作成功 */
  Status: number;
  /** 返回多余的信息 */
  Info: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateChooseVpcsRequest {
  /** vpc列表 */
  VpcList: string[];
  /** zone列表 */
  AllZoneList: VpcZoneData[];
}

declare interface CreateChooseVpcsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDatabaseWhiteListRulesRequest {
  /** 创建白名单数据 */
  DatabaseWhiteListRuleData: DatabaseWhiteListRuleData[];
}

declare interface CreateDatabaseWhiteListRulesResponse {
  /** 状态值，0:添加成功，非0：添加失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNatFwInstanceRequest {
  /** 防火墙实例名称 */
  Name: string;
  /** 带宽 */
  Width: number;
  /** 模式 1：接入模式；0：新增模式 */
  Mode: number;
  /** 新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。 */
  NewModeItems?: NewModeItems;
  /** 接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。 */
  NatGwList?: string[];
  /** 主可用区，为空则选择默认可用区 */
  Zone?: string;
  /** 备可用区，为空则选择默认可用区 */
  ZoneBak?: string;
  /** 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备 */
  CrossAZone?: number;
}

declare interface CreateNatFwInstanceResponse {
  /** 防火墙实例id */
  CfwInsId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNatFwInstanceWithDomainRequest {
  /** 防火墙实例名称 */
  Name: string;
  /** 带宽 */
  Width: number;
  /** 模式 1：接入模式；0：新增模式 */
  Mode: number;
  /** 新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。 */
  NewModeItems?: NewModeItems;
  /** 接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。 */
  NatGwList?: string[];
  /** 主可用区，为空则选择默认可用区 */
  Zone?: string;
  /** 备可用区，为空则选择默认可用区 */
  ZoneBak?: string;
  /** 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备 */
  CrossAZone?: number;
  /** 0不创建域名,1创建域名 */
  IsCreateDomain?: number;
  /** 如果要创建域名则必填 */
  Domain?: string;
}

declare interface CreateNatFwInstanceWithDomainResponse {
  /** nat实例信息 */
  CfwInsId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupRulesRequest {
  /** 添加的企业安全组规则数据 */
  Data: SecurityGroupListData[];
  /** 方向，0：出站，1：入站，默认1 */
  Direction: number;
  /** 0：后插，1：前插，2：中插，默认0 */
  Type?: number;
  /** 添加后是否启用规则，0：不启用，1：启用，默认1 */
  Enable?: number;
}

declare interface CreateSecurityGroupRulesResponse {
  /** 状态值，0：添加成功，非0：添加失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAcRuleRequest {
  /** 删除规则对应的id值, 对应获取规则列表接口的Id 值 */
  Id: number;
  /** 方向，0：出站，1：入站 */
  Direction: number;
  /** EdgeId值两个vpc间的边id */
  EdgeId?: string;
  /** NAT地域， 如ap-shanghai/ap-guangzhou/ap-chongqing等 */
  Area?: string;
}

declare interface DeleteAcRuleResponse {
  /** 状态值 0: 删除成功, !0: 删除失败 */
  Status: number;
  /** 返回多余的信息 */
  Info: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAllAccessControlRuleRequest {
  /** 方向，0：出站，1：入站 默认值是 0 */
  Direction?: number;
  /** VPC间防火墙开关ID 全部删除 EdgeId和Area只填写一个，不填写则不删除vpc间防火墙开关 ，默认值为‘’ */
  EdgeId?: string;
  /** nat地域 全部删除 EdgeId和Area只填写一个，不填写则不删除nat防火墙开关 默认值为‘’ */
  Area?: string;
}

declare interface DeleteAllAccessControlRuleResponse {
  /** 状态值 0: 修改成功, !0: 修改失败 */
  Status: number;
  /** 删除了几条访问控制规则 */
  Info: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNatFwInstanceRequest {
  /** 防火墙实例id */
  CfwInstance: string;
}

declare interface DeleteNatFwInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteResourceGroupRequest {
  /** 组id */
  GroupId: string;
}

declare interface DeleteResourceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupRuleRequest {
  /** 所需要删除规则的ID */
  Id: number;
  /** 腾讯云地域的英文简写 */
  Area: string;
  /** 方向，0：出站，1：入站 */
  Direction: number;
  /** 是否删除反向规则，0：否，1：是 */
  IsDelReverse?: number;
}

declare interface DeleteSecurityGroupRuleResponse {
  /** 状态值，0：成功，非0：失败 */
  Status: number;
  /** 返回多余的信息 */
  Info: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpcInstanceRequest {
}

declare interface DeleteVpcInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAcListsRequest {
  /** 协议 */
  Protocol?: string;
  /** 策略 */
  Strategy?: string;
  /** 搜索值 */
  SearchValue?: string;
  /** 每页条数 */
  Limit?: number;
  /** 偏移值 */
  Offset?: number;
  /** 出站还是入站，1：入站，0：出站 */
  Direction?: number;
  /** EdgeId值 */
  EdgeId?: string;
  /** 规则是否开启，'0': 未开启，'1': 开启, 默认为'0' */
  Status?: string;
  /** 地域 */
  Area?: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface DescribeAcListsResponse {
  /** 总条数 */
  Total: number;
  /** 访问控制列表数据 */
  Data: AcListsData[];
  /** 不算筛选条数的总条数 */
  AllTotal: number;
  /** 访问控制规则全部启用/全部停用 */
  Enable: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssociatedInstanceListRequest {
  /** 列表偏移量 */
  Offset: number;
  /** 每页记录条数 */
  Limit: number;
  /** 地域代码（例：ap-guangzhou）,支持腾讯云全地域 */
  Area: string;
  /** 额外检索条件（JSON字符串） */
  SearchValue?: string;
  /** 排序字段 */
  By?: string;
  /** 排序方式（asc:升序,desc:降序） */
  Order?: string;
  /** 安全组ID */
  SecurityGroupId?: string;
  /** 实例类型,'3'是cvm实例,'4'是clb实例,'5'是eni实例,'6'是云数据库 */
  Type?: string;
}

declare interface DescribeAssociatedInstanceListResponse {
  /** 实例数量 */
  Total: number | null;
  /** 实例列表 */
  Data: AssociatedInstanceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBlockByIpTimesListRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** ip查询条件 */
  Ip: string;
  /** 地域 */
  Zone?: string;
  /** 方向 */
  Direction?: string;
  /** 来源 */
  Source?: string;
  /** vpc间防火墙开关边id */
  EdgeId?: string;
  /** 日志来源 move：vpc间防火墙 */
  LogSource?: string;
}

declare interface DescribeBlockByIpTimesListResponse {
  /** 返回数据 */
  Data: IpStatic[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBlockStaticListRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 列表类型，只能是下面三种之一：port、address、ip */
  QueryType: string;
  /** top数 */
  Top: number;
  /** 查询条件 */
  SearchValue?: string;
}

declare interface DescribeBlockStaticListResponse {
  /** 无 */
  Data: StaticInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfwEipsRequest {
  /** 1：cfw接入模式，目前仅支持接入模式实例 */
  Mode: number;
  /** ALL：查询所有弹性公网ip; nat-xxxxx：接入模式场景指定网关的弹性公网ip */
  NatGatewayId: string;
  /** 防火墙实例id，当前仅支持接入模式的实例 */
  CfwInstance?: string;
}

declare interface DescribeCfwEipsResponse {
  /** 返回值信息 */
  NatFwEipList: NatFwEipsInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDefenseSwitchRequest {
}

declare interface DescribeDefenseSwitchResponse {
  /** 基础防御开关 */
  BasicRuleSwitch: number;
  /** 安全基线开关 */
  BaselineAllSwitch: number;
  /** 威胁情报开关 */
  TiSwitch: number;
  /** 虚拟补丁开关 */
  VirtualPatchSwitch: number;
  /** 是否历史开启 */
  HistoryOpen: number;
  /** 状态值，0：查询成功，非0：查询失败 */
  ReturnCode: number;
  /** 状态信息，success：查询成功，fail：查询失败 */
  ReturnMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEnterpriseSecurityGroupRuleRequest {
  /** 分页查询时，显示的当前页的页码。默认值为1。 */
  PageNo: string;
  /** 分页查询时，显示的每页数据的最大条数。可设置值最大为50。 */
  PageSize: string;
  /** 访问源示例：net：IP/CIDR(192.168.0.2)template：参数模板(ipm-dyodhpby)instance：资产实例(ins-123456)resourcegroup：资产分组(/全部分组/分组1/子分组1)tag：资源标签({"Key":"标签key值","Value":"标签Value值"})region：地域(ap-gaungzhou)支持通配 */
  SourceContent?: string;
  /** 访问目的示例：net：IP/CIDR(192.168.0.2)template：参数模板(ipm-dyodhpby)instance：资产实例(ins-123456)resourcegroup：资产分组(/全部分组/分组1/子分组1)tag：资源标签({"Key":"标签key值","Value":"标签Value值"})region：地域(ap-gaungzhou)支持通配 */
  DestContent?: string;
  /** 规则描述，支持通配 */
  Description?: string;
  /** 访问控制策略中设置的流量通过云防火墙的方式。取值：accept：放行drop：拒绝 */
  RuleAction?: string;
  /** 是否启用规则，默认为启用，取值：true为启用，false为不启用 */
  Enable?: string;
  /** 访问控制策略的端口。取值：-1/-1：全部端口80：80端口 */
  Port?: string;
  /** 协议；TCP/UDP/ICMP/ANY */
  Protocol?: string;
  /** 端口协议类型参数模板id；协议端口模板id；与Protocol,Port互斥 */
  ServiceTemplateId?: string;
}

declare interface DescribeEnterpriseSecurityGroupRuleResponse {
  /** 分页查询时，显示的当前页的页码。 */
  PageNo: string;
  /** 分页查询时，显示的每页数据的最大条数。 */
  PageSize: string;
  /** 访问控制策略列表 */
  Rules: SecurityGroupRule[];
  /** 访问控制策略的总数量。 */
  TotalCount: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGuideScanInfoRequest {
}

declare interface DescribeGuideScanInfoResponse {
  /** 扫描信息 */
  Data: ScanInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIPStatusListRequest {
  /** 资产Id */
  IPList: string[];
}

declare interface DescribeIPStatusListResponse {
  /** ip状态信息 */
  StatusList: IPDefendStatus[];
  /** 状态码 */
  ReturnCode: number;
  /** 状态信息 */
  ReturnMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatFwInfoCountRequest {
}

declare interface DescribeNatFwInfoCountResponse {
  /** 返回参数 */
  ReturnMsg: string | null;
  /** 当前租户的nat实例个数 */
  NatFwInsCount: number | null;
  /** 当前租户接入子网个数 */
  SubnetCount: number | null;
  /** 打开开关个数 */
  OpenSwitchCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatFwInstanceRequest {
}

declare interface DescribeNatFwInstanceResponse {
  /** 实例数组 */
  NatinsLst: NatFwInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatFwInstanceWithRegionRequest {
}

declare interface DescribeNatFwInstanceWithRegionResponse {
  /** 实例数组 */
  NatinsLst: NatFwInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatFwInstancesInfoRequest {
  /** 获取实例列表过滤字段 */
  Filter?: NatFwFilter[];
  /** 第几页 */
  Offset?: number;
  /** 每页长度 */
  Limit?: number;
}

declare interface DescribeNatFwInstancesInfoResponse {
  /** 实例卡片信息数组 */
  NatinsLst: NatInstanceInfo[] | null;
  /** nat 防火墙个数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatFwVpcDnsLstRequest {
  /** natfw 防火墙实例id */
  NatFwInsId: string;
  /** natfw 过滤，以','分隔 */
  NatInsIdFilter?: string;
  /** 分页页数 */
  Offset?: number;
  /** 每页最多个数 */
  Limit?: number;
}

declare interface DescribeNatFwVpcDnsLstResponse {
  /** nat防火墙vpc dns 信息数组 */
  VpcDnsSwitchLst: VpcDnsInfo[] | null;
  /** 返回参数 */
  ReturnMsg: string | null;
  /** 开关总条数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceGroupNewRequest {
  /** 查询类型 网络结构-vpc，业务识别-resource ，资源标签-tag */
  QueryType: string;
  /** 资产组id 全部传0 */
  GroupId?: string;
  /** all 包含子组 own自己 */
  ShowType?: string;
}

declare interface DescribeResourceGroupNewResponse {
  /** 返回树形结构 */
  Data: string;
  /** 未分类实例数量 */
  UnResourceNum: number;
  /** 接口返回消息 */
  ReturnMsg: string;
  /** 返回码；0为请求成功 */
  ReturnCode: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceGroupRequest {
  /** 查询类型 网络结构 vpc，业务识别- resource ，资源标签-tag */
  QueryType: string;
  /** 资产组id 全部传0 */
  GroupId?: string;
}

declare interface DescribeResourceGroupResponse {
  /** 返回树形结构 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRuleOverviewRequest {
  /** 方向，0：出站，1：入站 */
  Direction?: number;
}

declare interface DescribeRuleOverviewResponse {
  /** 规则总数 */
  AllTotal: number | null;
  /** 阻断策略规则数量 */
  StrategyNum: number | null;
  /** 启用规则数量 */
  StartRuleNum: number | null;
  /** 停用规则数量 */
  StopRuleNum: number | null;
  /** 剩余配额 */
  RemainingNum: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupListRequest {
  /** 0: 出站规则，1：入站规则 */
  Direction: number;
  /** 地域代码（例: ap-guangzhou),支持腾讯云全部地域 */
  Area: string;
  /** 搜索值 */
  SearchValue?: string;
  /** 每页条数，默认为10 */
  Limit?: number;
  /** 偏移值，默认为0 */
  Offset?: number;
  /** 状态，'': 全部，'0'：筛选停用规则，'1'：筛选启用规则 */
  Status?: string;
  /** 0: 不过滤，1：过滤掉正常规则，保留下发异常规则 */
  Filter?: number;
}

declare interface DescribeSecurityGroupListResponse {
  /** 列表当前规则总条数 */
  Total: number;
  /** 安全组规则列表数据 */
  Data: SecurityGroupListData[];
  /** 不算筛选条数的总条数 */
  AllTotal: number;
  /** 访问控制规则全部启用/全部停用 */
  Enable: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSourceAssetRequest {
  /** 模糊查询 */
  FuzzySearch?: string;
  /** 资产类型 1公网 2内网 */
  InsType?: string;
  /** ChooseType为1，查询已经分组的资产；ChooseType不为1查询没有分组的资产 */
  ChooseType?: string;
  /** 地域 */
  Zone?: string;
  /** 查询单页的最大值；eg：10；则最多返回10条结果 */
  Limit?: number;
  /** 查询结果的偏移量 */
  Offset?: number;
}

declare interface DescribeSourceAssetResponse {
  /** 地域集合 */
  ZoneList: AssetZone[];
  /** 数据 */
  Data: InstanceInfo[];
  /** 返回数据总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSwitchListsRequest {
  /** 防火墙状态 0: 关闭，1：开启 */
  Status?: number;
  /** 资产类型 CVM/NAT/VPN/CLB/其它 */
  Type?: string;
  /** 地域 上海/重庆/广州，等等 */
  Area?: string;
  /** 搜索值 例子："{"common":"106.54.189.45"}" */
  SearchValue?: string;
  /** 条数 默认值:10 */
  Limit?: number;
  /** 偏移值 默认值: 0 */
  Offset?: number;
  /** 排序，desc：降序，asc：升序 */
  Order?: string;
  /** 排序字段 PortTimes(风险端口数) */
  By?: string;
}

declare interface DescribeSwitchListsResponse {
  /** 总条数 */
  Total: number;
  /** 列表数据 */
  Data: SwitchListsData[];
  /** 区域列表 */
  AreaLists: string[];
  /** 打开个数 */
  OnNum: number | null;
  /** 关闭个数 */
  OffNum: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTLogInfoRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 类型 1 告警 2阻断 */
  QueryType: string;
  /** 查询条件 */
  SearchValue?: string;
}

declare interface DescribeTLogInfoResponse {
  /** 无 */
  Data: TLogInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTLogIpListRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 类型 1 告警 2阻断 */
  QueryType: string;
  /** top数 */
  Top: number;
  /** 查询条件 */
  SearchValue?: string;
}

declare interface DescribeTLogIpListResponse {
  /** 数据集合 */
  Data: StaticInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTableStatusRequest {
  /** EdgeId值两个vpc间的边id vpc填Edgeid，不要填Area； */
  EdgeId?: string;
  /** 状态值，0：检查表的状态 确实只有一个默认值 */
  Status?: number;
  /** Nat所在地域 NAT填Area，不要填Edgeid； */
  Area?: string;
  /** 方向，0：出站，1：入站 默认值为 0 */
  Direction?: number;
}

declare interface DescribeTableStatusResponse {
  /** 0：正常，其它：不正常 */
  Status: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUnHandleEventTabListRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 查询示例ID */
  AssetID?: string;
}

declare interface DescribeUnHandleEventTabListResponse {
  /** 租户伪攻击链未处置事件 */
  Data: UnHandleEvent | null;
  /** 错误码，0成功 非0错误 */
  ReturnCode: number;
  /** 返回信息 success成功 */
  ReturnMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExpandCfwVerticalRequest {
  /** nat：nat防火墙，ew：东西向防火墙 */
  FwType: string;
  /** 带宽值 */
  Width: number;
  /** 防火墙实例id */
  CfwInstance?: string;
}

declare interface ExpandCfwVerticalResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAcRuleRequest {
  /** 规则数组 */
  Data: RuleInfoData[];
  /** EdgeId值 */
  EdgeId?: string;
  /** 访问规则状态 */
  Enable?: number;
  /** NAT地域 */
  Area?: string;
}

declare interface ModifyAcRuleResponse {
  /** 状态值，0:操作成功，非0：操作失败 */
  Status: number;
  /** 返回多余的信息 */
  Info: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAllPublicIPSwitchStatusRequest {
  /** 状态，0：关闭，1：开启 */
  Status: number;
  /** 选中的防火墙开关Id */
  FireWallPublicIPs?: string[];
}

declare interface ModifyAllPublicIPSwitchStatusResponse {
  /** 接口返回信息 */
  ReturnMsg: string | null;
  /** 接口返回错误码，0请求成功 非0失败 */
  ReturnCode: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAllRuleStatusRequest {
  /** 状态，0：全部停用，1：全部启用 */
  Status: number;
  /** 方向，0：出站，1：入站 */
  Direction?: number;
  /** Edge ID值 */
  EdgeId?: string;
  /** NAT地域 */
  Area?: string;
}

declare interface ModifyAllRuleStatusResponse {
  /** 0: 修改成功, 其他: 修改失败 */
  Status: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAllVPCSwitchStatusRequest {
  /** 状态，0：关闭，1：开启 */
  Status: number;
  /** 选中的防火墙开关Id */
  FireWallVpcIds?: string[];
}

declare interface ModifyAllVPCSwitchStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAssetScanRequest {
  /** 扫描范围：1端口, 2端口+漏扫 */
  ScanRange: number;
  /** 扫描深度：'heavy', 'medium', 'light' */
  ScanDeep: string;
  /** 扫描类型：1立即扫描 2 周期任务 */
  RangeType: number;
  /** RangeType为2 是必须添加，定时任务时间 */
  ScanPeriod?: string;
  /** 立即扫描这个字段传过滤的扫描集合 */
  ScanFilterIp?: string[];
  /** 1全量2单个 */
  ScanType?: number;
}

declare interface ModifyAssetScanResponse {
  /** 接口返回信息 */
  ReturnMsg: string | null;
  /** 接口返回错误码，0请求成功 非0失败 */
  ReturnCode: number | null;
  /** 状态值 0：成功，1 执行扫描中,其他：失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBlockIgnoreListRequest {
  /** 1拦截列表 2 忽略列表 */
  RuleType: number;
  /** IP、Domain二选一，不能同时为空 */
  IOC: IocListData[];
  /** 可选值：delete（删除）、edit（编辑）、add（添加） 其他值无效 */
  IocAction: string;
  /** 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填 */
  StartTime?: string;
  /** 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填 */
  EndTime?: string;
}

declare interface ModifyBlockIgnoreListResponse {
  /** 接口返回信息 */
  ReturnMsg: string;
  /** 接口返回错误码，0请求成功 非0失败 */
  ReturnCode: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBlockTopRequest {
  /** 记录id */
  UniqueId: string;
  /** 操作类型 1 置顶 0取消 */
  OpeType: string;
}

declare interface ModifyBlockTopResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNatFwReSelectRequest {
  /** 模式 1：接入模式；0：新增模式 */
  Mode: number;
  /** 防火墙实例id */
  CfwInstance: string;
  /** 接入模式重新接入的nat网关列表，其中NatGwList和VpcList只能传递一个。 */
  NatGwList?: string[];
  /** 新增模式重新接入的vpc列表，其中NatGwList和NatgwList只能传递一个。 */
  VpcList?: string[];
}

declare interface ModifyNatFwReSelectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNatFwSwitchRequest {
  /** 开关，0：关闭，1：开启 */
  Enable: number;
  /** 防火墙实例id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。 */
  CfwInsIdList?: string[];
  /** 子网id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。 */
  SubnetIdList?: string[];
  /** 路由表id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。 */
  RouteTableIdList?: string[];
}

declare interface ModifyNatFwSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNatFwVpcDnsSwitchRequest {
  /** nat 防火墙 id */
  NatFwInsId: string;
  /** DNS 开关切换列表 */
  DnsVpcSwitchLst: DnsVpcSwitch[];
}

declare interface ModifyNatFwVpcDnsSwitchResponse {
  /** 修改成功 */
  ReturnMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPublicIPSwitchStatusRequest {
  /** 公网IP */
  FireWallPublicIP: string;
  /** 状态值，0: 关闭 ,1:开启 */
  Status: number;
}

declare interface ModifyPublicIPSwitchStatusResponse {
  /** 接口返回信息 */
  ReturnMsg: string | null;
  /** 接口返回错误码，0请求成功 非0失败 */
  ReturnCode: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyResourceGroupRequest {
  /** 组id */
  GroupId: string;
  /** 组名称 */
  GroupName: string;
  /** 上级组id */
  ParentId: string;
}

declare interface ModifyResourceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRunSyncAssetRequest {
  /** 0: 互联网防火墙开关，1：vpc 防火墙开关 */
  Type?: number;
}

declare interface ModifyRunSyncAssetResponse {
  /** 0：同步成功，1：资产更新中，2：后台同步调用失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupItemRuleStatusRequest {
  /** 方向，0：出站，1：入站，默认1 */
  Direction: number;
  /** 是否开关开启，0：未开启，1：开启 */
  Status: number;
  /** 更改的企业安全组规则的执行顺序 */
  RuleSequence: number;
}

declare interface ModifySecurityGroupItemRuleStatusResponse {
  /** 状态值，0：修改成功，非0：修改失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupRuleRequest {
  /** 方向，0：出站，1：入站，默认1 */
  Direction: number;
  /** 编辑后是否启用规则，0：不启用，1：启用，默认1 */
  Enable: number;
  /** 编辑的企业安全组规则数据 */
  Data: SecurityGroupListData[];
  /** 编辑的企业安全组规则的原始执行顺序 */
  SgRuleOriginSequence: number;
}

declare interface ModifySecurityGroupRuleResponse {
  /** 状态值，0：编辑成功，非0：编辑失败 */
  Status: number;
  /** 编辑后新生成规则的Id */
  NewRuleId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupSequenceRulesRequest {
  /** 方向，0：出站，1：入站，默认1 */
  Direction: number;
  /** 企业安全组规则快速排序数据 */
  Data: SecurityGroupOrderIndexData[];
}

declare interface ModifySecurityGroupSequenceRulesResponse {
  /** 状态值，0：修改成功，非0：修改失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySequenceRulesRequest {
  /** 边Id值 */
  EdgeId?: string;
  /** 修改数据 */
  Data?: SequenceData[];
  /** NAT地域 */
  Area?: string;
  /** 方向，0：出向，1：入向 */
  Direction?: number;
}

declare interface ModifySequenceRulesResponse {
  /** 0: 修改成功, 非0: 修改失败 */
  Status: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTableStatusRequest {
  /** EdgeId值两个vpc间的边id */
  EdgeId?: string;
  /** 状态值，1：锁表，2：解锁表 */
  Status?: number;
  /** Nat所在地域 */
  Area?: string;
  /** 0： 出向，1：入向 */
  Direction?: number;
}

declare interface ModifyTableStatusResponse {
  /** 0：正常，-1：不正常 */
  Status: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveAcRuleRequest {
  /** 规则的uuid，可通过查询规则列表获取 */
  RuleUuid: number;
}

declare interface RemoveAcRuleResponse {
  /** 删除成功后返回被删除策略的uuid */
  RuleUuid: number;
  /** 0代表成功，-1代表失败 */
  ReturnCode: number | null;
  /** success代表成功，failed代表失败 */
  ReturnMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveEnterpriseSecurityGroupRuleRequest {
  /** 规则的uuid，可通过查询规则列表获取 */
  RuleUuid: number;
  /** 删除类型，0是单条删除，RuleUuid填写删除规则id，1为全部删除，RuleUuid填0即可 */
  RemoveType: number;
}

declare interface RemoveEnterpriseSecurityGroupRuleResponse {
  /** 删除成功后返回被删除策略的uuid */
  RuleUuid: number;
  /** 0代表成功，-1代表失败 */
  Status: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetNatFwDnatRuleRequest {
  /** 0：cfw新增模式，1：cfw接入模式。 */
  Mode: number;
  /** 操作类型，可选值：add，del，modify。 */
  OperationType: string;
  /** 防火墙实例id，该字段必须传递。 */
  CfwInstance?: string;
  /** 添加或删除操作的Dnat规则列表。 */
  AddOrDelDnatRules?: CfwNatDnatRule[];
  /** 修改操作的原始Dnat规则 */
  OriginDnat?: CfwNatDnatRule;
  /** 修改操作的新的Dnat规则 */
  NewDnat?: CfwNatDnatRule;
}

declare interface SetNatFwDnatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetNatFwEipRequest {
  /** bind：绑定eip；unbind：解绑eip；newAdd：新增防火墙弹性公网ip */
  OperationType: string;
  /** 防火墙实例id */
  CfwInstance: string;
  /** 当OperationType 为bind或unbind操作时，使用该字段。 */
  EipList?: string[];
}

declare interface SetNatFwEipResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopSecurityGroupRuleDispatchRequest {
  /** 值为1，中止全部 */
  StopType?: number;
}

declare interface StopSecurityGroupRuleDispatchResponse {
  /** true代表成功，false代表错误 */
  Status: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [云防火墙](https://cloud.tencent.com/document/product/1132) */
declare interface Cfw {
  (): Versions;
  /** 添加互联网边界规则 */
  AddAcRule(data: AddAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddAcRuleResponse>;
  /** 创建新企业安全组规则 */
  AddEnterpriseSecurityGroupRules(data: AddEnterpriseSecurityGroupRulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddEnterpriseSecurityGroupRulesResponse>;
  /** 创建访问控制规则 */
  CreateAcRules(data: CreateAcRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAcRulesResponse>;
  /** 创建、选择vpc */
  CreateChooseVpcs(data: CreateChooseVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChooseVpcsResponse>;
  /** 创建暴露数据库白名单规则 */
  CreateDatabaseWhiteListRules(data: CreateDatabaseWhiteListRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatabaseWhiteListRulesResponse>;
  /** 创建NAT防火墙实例（Region参数必填） */
  CreateNatFwInstance(data: CreateNatFwInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatFwInstanceResponse>;
  /** 创建防火墙实例和接入域名（Region参数必填） */
  CreateNatFwInstanceWithDomain(data: CreateNatFwInstanceWithDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatFwInstanceWithDomainResponse>;
  /** 创建企业安全组规则 */
  CreateSecurityGroupRules(data: CreateSecurityGroupRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupRulesResponse>;
  /** 删除规则 */
  DeleteAcRule(data: DeleteAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAcRuleResponse>;
  /** 全部删除规则 */
  DeleteAllAccessControlRule(data?: DeleteAllAccessControlRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAllAccessControlRuleResponse>;
  /** 销毁防火墙实例 */
  DeleteNatFwInstance(data: DeleteNatFwInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatFwInstanceResponse>;
  /** 资产中心资产组删除 */
  DeleteResourceGroup(data: DeleteResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceGroupResponse>;
  /** 删除安全组规则 */
  DeleteSecurityGroupRule(data: DeleteSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupRuleResponse>;
  /** 删除防火墙实例 */
  DeleteVpcInstance(data?: DeleteVpcInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcInstanceResponse>;
  /** 访问控制列表 */
  DescribeAcLists(data?: DescribeAcListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAcListsResponse>;
  /** 获取安全组关联实例列表 */
  DescribeAssociatedInstanceList(data: DescribeAssociatedInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssociatedInstanceListResponse>;
  /** 告警中心阻断IP折线图 */
  DescribeBlockByIpTimesList(data: DescribeBlockByIpTimesListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlockByIpTimesListResponse>;
  /** 告警中心柱形图 */
  DescribeBlockStaticList(data: DescribeBlockStaticListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlockStaticListResponse>;
  /** 查询防火墙弹性公网IP */
  DescribeCfwEips(data: DescribeCfwEipsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfwEipsResponse>;
  /** 获取入侵防御按钮列表 */
  DescribeDefenseSwitch(data?: DescribeDefenseSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefenseSwitchResponse>;
  /** 查询新企业安全组规则 */
  DescribeEnterpriseSecurityGroupRule(data: DescribeEnterpriseSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnterpriseSecurityGroupRuleResponse>;
  /** 新手引导扫描接口信息 */
  DescribeGuideScanInfo(data?: DescribeGuideScanInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGuideScanInfoResponse>;
  /** ip防护状态查询 */
  DescribeIPStatusList(data: DescribeIPStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPStatusListResponse>;
  /** 获取当前用户接入nat防火墙的所有子网数及natfw实例个数 */
  DescribeNatFwInfoCount(data?: DescribeNatFwInfoCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInfoCountResponse>;
  /** 获取租户所有NAT实例 */
  DescribeNatFwInstance(data?: DescribeNatFwInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInstanceResponse>;
  /** 获取租户可运维NAT实例 */
  DescribeNatFwInstanceWithRegion(data?: DescribeNatFwInstanceWithRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInstanceWithRegionResponse>;
  /** 获取租户所有NAT实例卡片信息 */
  DescribeNatFwInstancesInfo(data?: DescribeNatFwInstancesInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInstancesInfoResponse>;
  /** 展示当前natfw 实例对应的vpc dns开关 */
  DescribeNatFwVpcDnsLst(data: DescribeNatFwVpcDnsLstRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwVpcDnsLstResponse>;
  /** 资产中心资产树信息查询 */
  DescribeResourceGroup(data: DescribeResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceGroupResponse>;
  /** 资产中心资产树信息查询new */
  DescribeResourceGroupNew(data: DescribeResourceGroupNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceGroupNewResponse>;
  /** 查询规则列表概况 */
  DescribeRuleOverview(data?: DescribeRuleOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleOverviewResponse>;
  /** 查询安全组规则列表 */
  DescribeSecurityGroupList(data: DescribeSecurityGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupListResponse>;
  /** 查询资产组全部资产信息 */
  DescribeSourceAsset(data?: DescribeSourceAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSourceAssetResponse>;
  /** 防火墙开关列表 */
  DescribeSwitchLists(data?: DescribeSwitchListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSwitchListsResponse>;
  /** 告警中心概况 */
  DescribeTLogInfo(data: DescribeTLogInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTLogInfoResponse>;
  /** 告警中心IP柱形图 */
  DescribeTLogIpList(data: DescribeTLogIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTLogIpListResponse>;
  /** 查询规则表状态 */
  DescribeTableStatus(data?: DescribeTableStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableStatusResponse>;
  /** 告警中心伪攻击链事件未处置接口 */
  DescribeUnHandleEventTabList(data: DescribeUnHandleEventTabListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnHandleEventTabListResponse>;
  /** 防火墙垂直扩容 */
  ExpandCfwVertical(data: ExpandCfwVerticalRequest, config?: AxiosRequestConfig): AxiosPromise<ExpandCfwVerticalResponse>;
  /** 修改规则 */
  ModifyAcRule(data: ModifyAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAcRuleResponse>;
  /** 互联网边界防火墙一键开关 */
  ModifyAllPublicIPSwitchStatus(data: ModifyAllPublicIPSwitchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllPublicIPSwitchStatusResponse>;
  /** 启用停用全部规则 */
  ModifyAllRuleStatus(data: ModifyAllRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllRuleStatusResponse>;
  /** VPC防火墙一键开关 */
  ModifyAllVPCSwitchStatus(data: ModifyAllVPCSwitchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllVPCSwitchStatusResponse>;
  /** 资产扫描 */
  ModifyAssetScan(data: ModifyAssetScanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetScanResponse>;
  /** 拦截列表和忽略列表批量操作接口 */
  ModifyBlockIgnoreList(data: ModifyBlockIgnoreListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBlockIgnoreListResponse>;
  /** 取消阻断记录置顶接口 */
  ModifyBlockTop(data: ModifyBlockTopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBlockTopResponse>;
  /** 防火墙实例重新选择vpc或nat */
  ModifyNatFwReSelect(data: ModifyNatFwReSelectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatFwReSelectResponse>;
  /** 修改NAT防火墙开关 */
  ModifyNatFwSwitch(data: ModifyNatFwSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatFwSwitchResponse>;
  /** nat 防火墙VPC DNS 开关切换 */
  ModifyNatFwVpcDnsSwitch(data: ModifyNatFwVpcDnsSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatFwVpcDnsSwitchResponse>;
  /** 单个修改互联网边界防火墙开关 */
  ModifyPublicIPSwitchStatus(data: ModifyPublicIPSwitchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPublicIPSwitchStatusResponse>;
  /** 资产中心资产组信息修改 */
  ModifyResourceGroup(data: ModifyResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceGroupResponse>;
  /** 同步资产-互联网&VPC（新） */
  ModifyRunSyncAsset(data?: ModifyRunSyncAssetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRunSyncAssetResponse>;
  /** 启用停用单条企业安全组规则 */
  ModifySecurityGroupItemRuleStatus(data: ModifySecurityGroupItemRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupItemRuleStatusResponse>;
  /** 编辑单条安全组规则 */
  ModifySecurityGroupRule(data: ModifySecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupRuleResponse>;
  /** 企业安全组规则快速排序 */
  ModifySecurityGroupSequenceRules(data: ModifySecurityGroupSequenceRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupSequenceRulesResponse>;
  /** 修改规则执行顺序 */
  ModifySequenceRules(data?: ModifySequenceRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySequenceRulesResponse>;
  /** 修改规则表状态 */
  ModifyTableStatus(data?: ModifyTableStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTableStatusResponse>;
  /** 删除互联网边界规则 */
  RemoveAcRule(data: RemoveAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveAcRuleResponse>;
  /** 删除新企业安全组规则 */
  RemoveEnterpriseSecurityGroupRule(data: RemoveEnterpriseSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveEnterpriseSecurityGroupRuleResponse>;
  /** 配置防火墙Dnat规则 */
  SetNatFwDnatRule(data: SetNatFwDnatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<SetNatFwDnatRuleResponse>;
  /** 设置防火墙实例弹性公网ip */
  SetNatFwEip(data: SetNatFwEipRequest, config?: AxiosRequestConfig): AxiosPromise<SetNatFwEipResponse>;
  /** 中止安全组规则下发 */
  StopSecurityGroupRuleDispatch(data?: StopSecurityGroupRuleDispatchRequest, config?: AxiosRequestConfig): AxiosPromise<StopSecurityGroupRuleDispatchResponse>;
}

export declare type Versions = ["2019-09-04"];

export default Cfw;
