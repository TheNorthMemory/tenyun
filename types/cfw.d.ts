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

/** 规则关联的beta任务 */
declare interface BetaInfoByACL {
  /** 任务id */
  TaskId?: number | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 上次执行时间 */
  LastTime?: string | null;
}

/** 入侵防御放通封禁规则 */
declare interface BlockIgnoreRule {
  /** 域名 */
  Domain: string | null;
  /** 规则ip */
  Ioc: string | null;
  /** 危险等级 */
  Level: string | null;
  /** 来源事件名称 */
  EventName: string | null;
  /** 方向：1入站，0出站 */
  Direction: number | null;
  /** 协议 */
  Protocol: string | null;
  /** 地理位置 */
  Address: string | null;
  /** 规则类型：1封禁，2放通 */
  Action: number | null;
  /** 规则生效开始时间 */
  StartTime: string | null;
  /** 规则生效结束时间 */
  EndTime: string | null;
  /** 忽略原因 */
  IgnoreReason: string | null;
  /** 安全事件来源 */
  Source: string | null;
  /** 规则id */
  UniqueId: string | null;
  /** 规则命中次数 */
  MatchTimes: number | null;
  /** 国家 */
  Country: string | null;
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

/** 通用的列表检索过滤选项 */
declare interface CommonFilter {
  /** 检索的键值 */
  Name: string;
  /** 检索的值 */
  Values: string[];
  /** 枚举类型，代表name与values之间的匹配关系enum FilterOperatorType { //INVALID FILTER_OPERATOR_TYPE_INVALID = 0; //等于 FILTER_OPERATOR_TYPE_EQUAL = 1; //大于 FILTER_OPERATOR_TYPE_GREATER = 2; //小于 FILTER_OPERATOR_TYPE_LESS = 3; //大于等于 FILTER_OPERATOR_TYPE_GREATER_EQ = 4; //小于等于 FILTER_OPERATOR_TYPE_LESS_EQ = 5; //不等于 FILTER_OPERATOR_TYPE_NO_EQ = 6; //in，数组中包含 FILTER_OPERATOR_TYPE_IN = 7; //not in FILTER_OPERATOR_TYPE_NOT_IN = 8; //模糊匹配 FILTER_OPERATOR_TYPE_FUZZINESS = 9; //存在 FILTER_OPERATOR_TYPE_EXIST = 10; //不存在 FILTER_OPERATOR_TYPE_NOT_EXIST = 11; //正则 FILTER_OPERATOR_TYPE_REGULAR = 12;} */
  OperatorType: number;
}

/** 创建NAT ACL规则参数结构 */
declare interface CreateNatRuleItem {
  /** 访问源示例： net：IP/CIDR(192.168.0.2) */
  SourceContent: string | null;
  /** 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag */
  SourceType: string | null;
  /** 访问目的示例： net：IP/CIDR(192.168.0.2) domain：域名规则，例如*.qq.com */
  TargetContent: string | null;
  /** 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为 ip,net,domain,template,location */
  TargetType: string | null;
  /** 协议，可选的值： TCP UDP ICMP ANY HTTP HTTPS HTTP/HTTPS SMTP SMTPS SMTP/SMTPS FTP DNS */
  Protocol: string | null;
  /** 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察 */
  RuleAction: string | null;
  /** 访问控制策略的端口。取值： -1/-1：全部端口 80：80端口 */
  Port: string | null;
  /** 规则方向：1，入站；0，出站 */
  Direction: number | null;
  /** 规则序号 */
  OrderIndex: number | null;
  /** 规则状态，true表示启用，false表示禁用 */
  Enable: string | null;
  /** 规则对应的唯一id，创建规则时无需填写 */
  Uuid?: number | null;
  /** 描述 */
  Description?: string | null;
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

/** 访问控制列表对象 */
declare interface DescAcItem {
  /** 访问源 */
  SourceContent: string | null;
  /** 访问目的 */
  TargetContent: string | null;
  /** 协议 */
  Protocol: string | null;
  /** 端口 */
  Port: string | null;
  /** 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察 */
  RuleAction: string | null;
  /** 描述 */
  Description: string | null;
  /** 命中次数 */
  Count: number;
  /** 执行顺序 */
  OrderIndex: number;
  /** 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag */
  SourceType: string | null;
  /** 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为 ip,net,domain,template,location */
  TargetType: string | null;
  /** 规则对应的唯一id */
  Uuid: number | null;
  /** 规则有效性 */
  Invalid: number | null;
  /** 0为正常规则,1为地域规则 */
  IsRegion: number | null;
  /** 国家id */
  CountryCode: number | null;
  /** 城市id */
  CityCode: number | null;
  /** 国家名称 */
  CountryName: string | null;
  /** 省名称 */
  CityName: string | null;
  /** 云厂商code */
  CloudCode: string | null;
  /** 0为正常规则,1为云厂商规则 */
  IsCloud: number | null;
  /** 规则状态，true表示启用，false表示禁用 */
  Enable: string | null;
  /** 规则方向：1，入向；0，出向 */
  Direction?: number | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 内部使用的uuid，一般情况下不会使用到该字段 */
  InternalUuid?: number | null;
  /** 规则状态，查询规则命中详情时该字段有效，0：新增，1: 已删除, 2: 编辑删除 */
  Status?: number | null;
  /** 关联任务详情 */
  BetaList?: BetaInfoByACL[] | null;
}

/** 设置nat防火墙的vpc dns 接入开关 */
declare interface DnsVpcSwitch {
  /** vpc id */
  VpcId: string;
  /** 0：设置为关闭 1:设置为打开 */
  Status: number;
}

/** 防火墙网段信息 */
declare interface FwCidrInfo {
  /** 防火墙使用的网段类型，值VpcSelf/Assis/Custom分别代表自有网段优先/扩展网段优先/自定义 */
  FwCidrType: string;
  /** 为每个vpc指定防火墙的网段 */
  FwCidrLst?: FwVpcCidr[];
  /** 其他防火墙占用网段，一般是防火墙需要独占vpc时指定的网段 */
  ComFwCidr?: string;
}

/** vpc的防火墙网段 */
declare interface FwVpcCidr {
  /** vpc的id */
  VpcId: string;
  /** 防火墙网段，最少/24的网段 */
  FwCidr: string;
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
  /** 已使用规则数 */
  RuleUsed?: number | null;
  /** 实例的规则限制最大规格数 */
  RuleMax?: number | null;
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

/** 规则顺序变更项，由原始id值变为新的id值。 */
declare interface RuleChangeItem {
  /** 原始sequence 值 */
  OrderIndex: number;
  /** 新的sequence 值 */
  NewOrderIndex: number;
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddNatAcRuleRequest {
  /** 需要添加的nat访问控制规则列表 */
  Rules: CreateNatRuleItem[];
  /** 添加规则的来源，一般不需要使用，值insert_rule 表示插入指定位置的规则；值batch_import 表示批量导入规则；为空时表示添加规则 */
  From?: string;
}

declare interface AddNatAcRuleResponse {
  /** 创建成功后返回新策略ID列表 */
  RuleUuid?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChooseVpcsRequest {
  /** vpc列表 */
  VpcList: string[];
  /** zone列表 */
  AllZoneList: VpcZoneData[];
}

declare interface CreateChooseVpcsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDatabaseWhiteListRulesRequest {
  /** 创建白名单数据 */
  DatabaseWhiteListRuleData: DatabaseWhiteListRuleData[];
}

declare interface CreateDatabaseWhiteListRulesResponse {
  /** 状态值，0:添加成功，非0：添加失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 指定防火墙使用网段信息 */
  FwCidrInfo?: FwCidrInfo;
}

declare interface CreateNatFwInstanceResponse {
  /** 防火墙实例id */
  CfwInsId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 指定防火墙使用网段信息 */
  FwCidrInfo?: FwCidrInfo;
}

declare interface CreateNatFwInstanceWithDomainResponse {
  /** nat实例信息 */
  CfwInsId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 状态值 0: 修改成功, 非0: 修改失败 */
  Status: number;
  /** 删除了几条访问控制规则 */
  Info: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNatFwInstanceRequest {
  /** 防火墙实例id */
  CfwInstance: string;
}

declare interface DeleteNatFwInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourceGroupRequest {
  /** 组id */
  GroupId: string;
}

declare interface DeleteResourceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcInstanceRequest {
}

declare interface DeleteVpcInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBlockIgnoreListRequest {
  /** 单页数量 */
  Limit: number;
  /** 页偏移量 */
  Offset: number;
  /** 方向：1互联网入站，0互联网出站，3内网，空 全部方向 */
  Direction: string;
  /** 规则类型：1封禁，2放通 */
  RuleType: number;
  /** 排序列：EndTime结束时间，StartTime开始时间，MatchTimes命中次数 */
  Order: string;
  /** 排序类型：desc降序，asc正序 */
  By: string;
  /** 搜索参数，json格式字符串，空则传"{}"，域名：domain，危险等级：level，放通原因：ignore_reason，安全事件来源：rule_source，地理位置：address，模糊搜索：common */
  SearchValue?: string;
}

declare interface DescribeBlockIgnoreListResponse {
  /** 列表数据 */
  Data: BlockIgnoreRule[];
  /** 查询结果总数，用于分页 */
  Total: number;
  /** 状态值，0：查询成功，非0：查询失败 */
  ReturnCode: number;
  /** 状态信息，success：查询成功，fail：查询失败 */
  ReturnMsg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGuideScanInfoRequest {
}

declare interface DescribeGuideScanInfoResponse {
  /** 扫描信息 */
  Data: ScanInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNatAcRuleRequest {
  /** 每页条数 */
  Limit: number;
  /** 偏移值 */
  Offset: number;
  /** 需要查询的索引，特定场景使用，可不填 */
  Index?: string;
  /** 过滤条件组合 */
  Filters?: CommonFilter[];
  /** 检索的起始时间，可不传 */
  StartTime?: string;
  /** 检索的截止时间，可不传 */
  EndTime?: string;
  /** desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值 */
  Order?: string;
  /** 排序所用到的字段 */
  By?: string;
}

declare interface DescribeNatAcRuleResponse {
  /** 总条数 */
  Total?: number;
  /** nat访问控制列表数据 */
  Data?: DescAcItem[] | null;
  /** 未过滤的总条数 */
  AllTotal?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNatFwInstanceRequest {
}

declare interface DescribeNatFwInstanceResponse {
  /** 实例数组 */
  NatinsLst: NatFwInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNatFwInstanceWithRegionRequest {
}

declare interface DescribeNatFwInstanceWithRegionResponse {
  /** 实例数组 */
  NatinsLst: NatFwInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** "NetworkNum":网络扫描探测 "HandleNum": 待处理事件"BanNum": "VulNum": 漏洞利用 "OutNum": 失陷主机"BruteForceNum": 0 */
  Data: TLogInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAllVPCSwitchStatusRequest {
  /** 状态，0：关闭，1：开启 */
  Status: number;
  /** 选中的防火墙开关Id */
  FireWallVpcIds?: string[];
}

declare interface ModifyAllVPCSwitchStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBlockIgnoreListRequest {
  /** 1封禁列表 2 放通列表 */
  RuleType: number;
  /** IP、Domain二选一，不能同时为空 */
  IOC: IocListData[];
  /** 可选值：delete（删除）、edit（编辑）、add（添加） 其他值无效 */
  IocAction: string;
  /** 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填 */
  StartTime?: string;
  /** 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填，必须大于当前时间且大于StartTime */
  EndTime?: string;
}

declare interface ModifyBlockIgnoreListResponse {
  /** 接口返回信息 */
  ReturnMsg: string;
  /** 接口返回错误码，0请求成功 非0失败 */
  ReturnCode: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBlockTopRequest {
  /** 记录id */
  UniqueId: string;
  /** 操作类型 1 置顶 0取消 */
  OpeType: string;
}

declare interface ModifyBlockTopResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEnterpriseSecurityDispatchStatusRequest {
  /** 状态，0：立即下发，1：停止下发 */
  Status: number;
}

declare interface ModifyEnterpriseSecurityDispatchStatusResponse {
  /** 0: 修改成功, 其他: 修改失败 */
  Status: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEnterpriseSecurityGroupRuleRequest {
  /** 规则的uuid，可通过查询规则列表获取 */
  RuleUuid: number;
  /** 修改类型，0：修改规则内容；1：修改单条规则开关状态；2：修改所有规则开关状态 */
  ModifyType: number;
  /** 编辑后的企业安全组规则数据；修改规则状态不用填该字段 */
  Data?: SecurityGroupRule;
  /** 0是关闭,1是开启 */
  Enable?: number;
}

declare interface ModifyEnterpriseSecurityGroupRuleResponse {
  /** 状态值，0：编辑成功，非0：编辑失败 */
  Status: number;
  /** 编辑后新生成规则的Id */
  NewRuleUuid: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNatAcRuleRequest {
  /** 需要编辑的规则数组 */
  Rules: CreateNatRuleItem[];
}

declare interface ModifyNatAcRuleResponse {
  /** 编辑成功后返回新策略ID列表 */
  RuleUuid?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 指定防火墙使用网段信息 */
  FwCidrInfo?: FwCidrInfo;
}

declare interface ModifyNatFwReSelectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNatSequenceRulesRequest {
  /** 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号 */
  RuleChangeItems: RuleChangeItem[];
  /** 规则方向：1，入站；0，出站 */
  Direction: number;
}

declare interface ModifyNatSequenceRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRunSyncAssetRequest {
  /** 0: 互联网防火墙开关，1：vpc 防火墙开关 */
  Type?: number;
}

declare interface ModifyRunSyncAssetResponse {
  /** 0：同步成功，1：资产更新中，2：后台同步调用失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStorageSettingRequest {
}

declare interface ModifyStorageSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveNatAcRuleRequest {
  /** 规则的uuid列表，可通过查询规则列表获取，注意：如果传入的是[-1]将删除所有规则 */
  RuleUuid: number[];
  /** 规则方向：1，入站；0，出站 */
  Direction?: number;
}

declare interface RemoveNatAcRuleResponse {
  /** 删除成功后返回被删除策略的uuid列表 */
  RuleUuid?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopSecurityGroupRuleDispatchRequest {
  /** 值为1，中止全部 */
  StopType?: number;
}

declare interface StopSecurityGroupRuleDispatchResponse {
  /** true代表成功，false代表错误 */
  Status: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cfw 云防火墙} */
declare interface Cfw {
  (): Versions;
  /** 添加互联网边界规则 {@link AddAcRuleRequest} {@link AddAcRuleResponse} */
  AddAcRule(data: AddAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddAcRuleResponse>;
  /** 创建新企业安全组规则 {@link AddEnterpriseSecurityGroupRulesRequest} {@link AddEnterpriseSecurityGroupRulesResponse} */
  AddEnterpriseSecurityGroupRules(data: AddEnterpriseSecurityGroupRulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddEnterpriseSecurityGroupRulesResponse>;
  /** 添加nat访问控制规则 {@link AddNatAcRuleRequest} {@link AddNatAcRuleResponse} */
  AddNatAcRule(data: AddNatAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddNatAcRuleResponse>;
  /** 创建访问控制规则 {@link CreateAcRulesRequest} {@link CreateAcRulesResponse} */
  CreateAcRules(data: CreateAcRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAcRulesResponse>;
  /** 创建、选择vpc {@link CreateChooseVpcsRequest} {@link CreateChooseVpcsResponse} */
  CreateChooseVpcs(data: CreateChooseVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChooseVpcsResponse>;
  /** 创建暴露数据库白名单规则 {@link CreateDatabaseWhiteListRulesRequest} {@link CreateDatabaseWhiteListRulesResponse} */
  CreateDatabaseWhiteListRules(data: CreateDatabaseWhiteListRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatabaseWhiteListRulesResponse>;
  /** 创建NAT防火墙实例（Region参数必填） {@link CreateNatFwInstanceRequest} {@link CreateNatFwInstanceResponse} */
  CreateNatFwInstance(data: CreateNatFwInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatFwInstanceResponse>;
  /** 创建防火墙实例和接入域名（Region参数必填） {@link CreateNatFwInstanceWithDomainRequest} {@link CreateNatFwInstanceWithDomainResponse} */
  CreateNatFwInstanceWithDomain(data: CreateNatFwInstanceWithDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatFwInstanceWithDomainResponse>;
  /** 创建企业安全组规则 {@link CreateSecurityGroupRulesRequest} {@link CreateSecurityGroupRulesResponse} */
  CreateSecurityGroupRules(data: CreateSecurityGroupRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupRulesResponse>;
  /** 删除规则 {@link DeleteAcRuleRequest} {@link DeleteAcRuleResponse} */
  DeleteAcRule(data: DeleteAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAcRuleResponse>;
  /** 全部删除规则 {@link DeleteAllAccessControlRuleRequest} {@link DeleteAllAccessControlRuleResponse} */
  DeleteAllAccessControlRule(data?: DeleteAllAccessControlRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAllAccessControlRuleResponse>;
  /** 销毁防火墙实例 {@link DeleteNatFwInstanceRequest} {@link DeleteNatFwInstanceResponse} */
  DeleteNatFwInstance(data: DeleteNatFwInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatFwInstanceResponse>;
  /** 资产中心资产组删除 {@link DeleteResourceGroupRequest} {@link DeleteResourceGroupResponse} */
  DeleteResourceGroup(data: DeleteResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceGroupResponse>;
  /** 删除安全组规则 {@link DeleteSecurityGroupRuleRequest} {@link DeleteSecurityGroupRuleResponse} */
  DeleteSecurityGroupRule(data: DeleteSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupRuleResponse>;
  /** 删除防火墙实例 {@link DeleteVpcInstanceRequest} {@link DeleteVpcInstanceResponse} */
  DeleteVpcInstance(data?: DeleteVpcInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcInstanceResponse>;
  /** 访问控制列表 {@link DescribeAcListsRequest} {@link DescribeAcListsResponse} */
  DescribeAcLists(data?: DescribeAcListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAcListsResponse>;
  /** 获取安全组关联实例列表 {@link DescribeAssociatedInstanceListRequest} {@link DescribeAssociatedInstanceListResponse} */
  DescribeAssociatedInstanceList(data: DescribeAssociatedInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssociatedInstanceListResponse>;
  /** 告警中心阻断IP折线图 {@link DescribeBlockByIpTimesListRequest} {@link DescribeBlockByIpTimesListResponse} */
  DescribeBlockByIpTimesList(data: DescribeBlockByIpTimesListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlockByIpTimesListResponse>;
  /** 查询入侵防御放通封禁列表 {@link DescribeBlockIgnoreListRequest} {@link DescribeBlockIgnoreListResponse} */
  DescribeBlockIgnoreList(data: DescribeBlockIgnoreListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlockIgnoreListResponse>;
  /** 告警中心柱形图 {@link DescribeBlockStaticListRequest} {@link DescribeBlockStaticListResponse} */
  DescribeBlockStaticList(data: DescribeBlockStaticListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlockStaticListResponse>;
  /** 查询防火墙弹性公网IP {@link DescribeCfwEipsRequest} {@link DescribeCfwEipsResponse} */
  DescribeCfwEips(data: DescribeCfwEipsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfwEipsResponse>;
  /** 获取入侵防御按钮列表 {@link DescribeDefenseSwitchRequest} {@link DescribeDefenseSwitchResponse} */
  DescribeDefenseSwitch(data?: DescribeDefenseSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefenseSwitchResponse>;
  /** 查询新企业安全组规则 {@link DescribeEnterpriseSecurityGroupRuleRequest} {@link DescribeEnterpriseSecurityGroupRuleResponse} */
  DescribeEnterpriseSecurityGroupRule(data: DescribeEnterpriseSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnterpriseSecurityGroupRuleResponse>;
  /** 新手引导扫描接口信息 {@link DescribeGuideScanInfoRequest} {@link DescribeGuideScanInfoResponse} */
  DescribeGuideScanInfo(data?: DescribeGuideScanInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGuideScanInfoResponse>;
  /** ip防护状态查询 {@link DescribeIPStatusListRequest} {@link DescribeIPStatusListResponse} */
  DescribeIPStatusList(data: DescribeIPStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPStatusListResponse>;
  /** 查询NAT访问控制列表 {@link DescribeNatAcRuleRequest} {@link DescribeNatAcRuleResponse} */
  DescribeNatAcRule(data: DescribeNatAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatAcRuleResponse>;
  /** 获取当前用户接入nat防火墙的所有子网数及natfw实例个数 {@link DescribeNatFwInfoCountRequest} {@link DescribeNatFwInfoCountResponse} */
  DescribeNatFwInfoCount(data?: DescribeNatFwInfoCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInfoCountResponse>;
  /** 获取租户所有NAT实例 {@link DescribeNatFwInstanceRequest} {@link DescribeNatFwInstanceResponse} */
  DescribeNatFwInstance(data?: DescribeNatFwInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInstanceResponse>;
  /** 获取租户可运维NAT实例 {@link DescribeNatFwInstanceWithRegionRequest} {@link DescribeNatFwInstanceWithRegionResponse} */
  DescribeNatFwInstanceWithRegion(data?: DescribeNatFwInstanceWithRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInstanceWithRegionResponse>;
  /** 获取租户所有NAT实例卡片信息 {@link DescribeNatFwInstancesInfoRequest} {@link DescribeNatFwInstancesInfoResponse} */
  DescribeNatFwInstancesInfo(data?: DescribeNatFwInstancesInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwInstancesInfoResponse>;
  /** 展示当前natfw 实例对应的vpc dns开关 {@link DescribeNatFwVpcDnsLstRequest} {@link DescribeNatFwVpcDnsLstResponse} */
  DescribeNatFwVpcDnsLst(data: DescribeNatFwVpcDnsLstRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatFwVpcDnsLstResponse>;
  /** 资产中心资产树信息查询 {@link DescribeResourceGroupRequest} {@link DescribeResourceGroupResponse} */
  DescribeResourceGroup(data: DescribeResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceGroupResponse>;
  /** 资产中心资产树信息查询new {@link DescribeResourceGroupNewRequest} {@link DescribeResourceGroupNewResponse} */
  DescribeResourceGroupNew(data: DescribeResourceGroupNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceGroupNewResponse>;
  /** 查询规则列表概况 {@link DescribeRuleOverviewRequest} {@link DescribeRuleOverviewResponse} */
  DescribeRuleOverview(data?: DescribeRuleOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleOverviewResponse>;
  /** 查询安全组规则列表 {@link DescribeSecurityGroupListRequest} {@link DescribeSecurityGroupListResponse} */
  DescribeSecurityGroupList(data: DescribeSecurityGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupListResponse>;
  /** 查询资产组全部资产信息 {@link DescribeSourceAssetRequest} {@link DescribeSourceAssetResponse} */
  DescribeSourceAsset(data?: DescribeSourceAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSourceAssetResponse>;
  /** 防火墙开关列表 {@link DescribeSwitchListsRequest} {@link DescribeSwitchListsResponse} */
  DescribeSwitchLists(data?: DescribeSwitchListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSwitchListsResponse>;
  /** 告警中心概况 {@link DescribeTLogInfoRequest} {@link DescribeTLogInfoResponse} */
  DescribeTLogInfo(data: DescribeTLogInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTLogInfoResponse>;
  /** 告警中心IP柱形图 {@link DescribeTLogIpListRequest} {@link DescribeTLogIpListResponse} */
  DescribeTLogIpList(data: DescribeTLogIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTLogIpListResponse>;
  /** 查询规则表状态 {@link DescribeTableStatusRequest} {@link DescribeTableStatusResponse} */
  DescribeTableStatus(data?: DescribeTableStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableStatusResponse>;
  /** 告警中心伪攻击链事件未处置接口 {@link DescribeUnHandleEventTabListRequest} {@link DescribeUnHandleEventTabListResponse} */
  DescribeUnHandleEventTabList(data: DescribeUnHandleEventTabListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnHandleEventTabListResponse>;
  /** 防火墙垂直扩容 {@link ExpandCfwVerticalRequest} {@link ExpandCfwVerticalResponse} */
  ExpandCfwVertical(data: ExpandCfwVerticalRequest, config?: AxiosRequestConfig): AxiosPromise<ExpandCfwVerticalResponse>;
  /** 修改规则 {@link ModifyAcRuleRequest} {@link ModifyAcRuleResponse} */
  ModifyAcRule(data: ModifyAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAcRuleResponse>;
  /** 互联网边界防火墙一键开关 {@link ModifyAllPublicIPSwitchStatusRequest} {@link ModifyAllPublicIPSwitchStatusResponse} */
  ModifyAllPublicIPSwitchStatus(data: ModifyAllPublicIPSwitchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllPublicIPSwitchStatusResponse>;
  /** 启用停用全部规则 {@link ModifyAllRuleStatusRequest} {@link ModifyAllRuleStatusResponse} */
  ModifyAllRuleStatus(data: ModifyAllRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllRuleStatusResponse>;
  /** VPC防火墙一键开关 {@link ModifyAllVPCSwitchStatusRequest} {@link ModifyAllVPCSwitchStatusResponse} */
  ModifyAllVPCSwitchStatus(data: ModifyAllVPCSwitchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllVPCSwitchStatusResponse>;
  /** 资产扫描 {@link ModifyAssetScanRequest} {@link ModifyAssetScanResponse} */
  ModifyAssetScan(data: ModifyAssetScanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetScanResponse>;
  /** 封禁列表和放通列表批量操作接口 {@link ModifyBlockIgnoreListRequest} {@link ModifyBlockIgnoreListResponse} */
  ModifyBlockIgnoreList(data: ModifyBlockIgnoreListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBlockIgnoreListResponse>;
  /** 取消阻断记录置顶接口 {@link ModifyBlockTopRequest} {@link ModifyBlockTopResponse} */
  ModifyBlockTop(data: ModifyBlockTopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBlockTopResponse>;
  /** 修改企业安全组下发状态 {@link ModifyEnterpriseSecurityDispatchStatusRequest} {@link ModifyEnterpriseSecurityDispatchStatusResponse} */
  ModifyEnterpriseSecurityDispatchStatus(data: ModifyEnterpriseSecurityDispatchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnterpriseSecurityDispatchStatusResponse>;
  /** 编辑新企业安全组规则 {@link ModifyEnterpriseSecurityGroupRuleRequest} {@link ModifyEnterpriseSecurityGroupRuleResponse} */
  ModifyEnterpriseSecurityGroupRule(data: ModifyEnterpriseSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnterpriseSecurityGroupRuleResponse>;
  /** 修改NAT访问控制规则 {@link ModifyNatAcRuleRequest} {@link ModifyNatAcRuleResponse} */
  ModifyNatAcRule(data: ModifyNatAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatAcRuleResponse>;
  /** 防火墙实例重新选择vpc或nat {@link ModifyNatFwReSelectRequest} {@link ModifyNatFwReSelectResponse} */
  ModifyNatFwReSelect(data: ModifyNatFwReSelectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatFwReSelectResponse>;
  /** 修改NAT防火墙开关 {@link ModifyNatFwSwitchRequest} {@link ModifyNatFwSwitchResponse} */
  ModifyNatFwSwitch(data: ModifyNatFwSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatFwSwitchResponse>;
  /** nat 防火墙VPC DNS 开关切换 {@link ModifyNatFwVpcDnsSwitchRequest} {@link ModifyNatFwVpcDnsSwitchResponse} */
  ModifyNatFwVpcDnsSwitch(data: ModifyNatFwVpcDnsSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatFwVpcDnsSwitchResponse>;
  /** NAT防火墙规则快速排序 {@link ModifyNatSequenceRulesRequest} {@link ModifyNatSequenceRulesResponse} */
  ModifyNatSequenceRules(data: ModifyNatSequenceRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatSequenceRulesResponse>;
  /** 单个修改互联网边界防火墙开关 {@link ModifyPublicIPSwitchStatusRequest} {@link ModifyPublicIPSwitchStatusResponse} */
  ModifyPublicIPSwitchStatus(data: ModifyPublicIPSwitchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPublicIPSwitchStatusResponse>;
  /** 资产中心资产组信息修改 {@link ModifyResourceGroupRequest} {@link ModifyResourceGroupResponse} */
  ModifyResourceGroup(data: ModifyResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceGroupResponse>;
  /** 同步资产-互联网&VPC（新） {@link ModifyRunSyncAssetRequest} {@link ModifyRunSyncAssetResponse} */
  ModifyRunSyncAsset(data?: ModifyRunSyncAssetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRunSyncAssetResponse>;
  /** 启用停用单条企业安全组规则 {@link ModifySecurityGroupItemRuleStatusRequest} {@link ModifySecurityGroupItemRuleStatusResponse} */
  ModifySecurityGroupItemRuleStatus(data: ModifySecurityGroupItemRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupItemRuleStatusResponse>;
  /** 编辑单条安全组规则 {@link ModifySecurityGroupRuleRequest} {@link ModifySecurityGroupRuleResponse} */
  ModifySecurityGroupRule(data: ModifySecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupRuleResponse>;
  /** 企业安全组规则快速排序 {@link ModifySecurityGroupSequenceRulesRequest} {@link ModifySecurityGroupSequenceRulesResponse} */
  ModifySecurityGroupSequenceRules(data: ModifySecurityGroupSequenceRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupSequenceRulesResponse>;
  /** 修改规则执行顺序 {@link ModifySequenceRulesRequest} {@link ModifySequenceRulesResponse} */
  ModifySequenceRules(data?: ModifySequenceRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySequenceRulesResponse>;
  /** 日志存储设置 {@link ModifyStorageSettingRequest} {@link ModifyStorageSettingResponse} */
  ModifyStorageSetting(data?: ModifyStorageSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStorageSettingResponse>;
  /** 修改规则表状态 {@link ModifyTableStatusRequest} {@link ModifyTableStatusResponse} */
  ModifyTableStatus(data?: ModifyTableStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTableStatusResponse>;
  /** 删除互联网边界规则 {@link RemoveAcRuleRequest} {@link RemoveAcRuleResponse} */
  RemoveAcRule(data: RemoveAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveAcRuleResponse>;
  /** 删除新企业安全组规则 {@link RemoveEnterpriseSecurityGroupRuleRequest} {@link RemoveEnterpriseSecurityGroupRuleResponse} */
  RemoveEnterpriseSecurityGroupRule(data: RemoveEnterpriseSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveEnterpriseSecurityGroupRuleResponse>;
  /** 删除NAT访问控制规则 {@link RemoveNatAcRuleRequest} {@link RemoveNatAcRuleResponse} */
  RemoveNatAcRule(data: RemoveNatAcRuleRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveNatAcRuleResponse>;
  /** 配置防火墙Dnat规则 {@link SetNatFwDnatRuleRequest} {@link SetNatFwDnatRuleResponse} */
  SetNatFwDnatRule(data: SetNatFwDnatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<SetNatFwDnatRuleResponse>;
  /** 设置防火墙实例弹性公网ip {@link SetNatFwEipRequest} {@link SetNatFwEipResponse} */
  SetNatFwEip(data: SetNatFwEipRequest, config?: AxiosRequestConfig): AxiosPromise<SetNatFwEipResponse>;
  /** 中止安全组规则下发 {@link StopSecurityGroupRuleDispatchRequest} {@link StopSecurityGroupRuleDispatchResponse} */
  StopSecurityGroupRuleDispatch(data?: StopSecurityGroupRuleDispatchRequest, config?: AxiosRequestConfig): AxiosPromise<StopSecurityGroupRuleDispatchResponse>;
}

export declare type Versions = ["2019-09-04"];

export default Cfw;
