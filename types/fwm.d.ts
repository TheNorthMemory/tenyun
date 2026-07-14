/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号基本信息，主要有 Uin 和 AppId */
declare interface Account {
  /** 租户appid */
  AppId?: string;
  /** 租户uin */
  Uin?: string;
  /** 剩余可用额度 */
  RemainQuota?: number;
  /** 租户名称 */
  Nickname?: string;
  /** 下发规则数 */
  DispatchRuleNum?: number;
  /** 产品已有规则数 */
  OriginRuleNum?: number;
  /** 总额度 */
  TotalQuota?: number;
  /** 成员Id */
  MemberId?: string;
}

/** 账户组信息 */
declare interface AccountGroupInfo {
  /** 账户组ID */
  GroupId?: string;
  /** 账户组名称 */
  GroupName?: string;
}

/** 账号组配额详情 */
declare interface AccountGroupQuotaDetail {
  /** 账号组Id */
  GroupId?: string;
  /** 账号组名称 */
  GroupName?: string;
  /** 账号组成员数 */
  MemberCount?: number;
  /** 取组内 RemainQuota 最小成员的值 */
  RemainQuota?: number;
  /** 同上成员的 TotalQuota */
  TotalQuota?: number;
  /** 同上成员的 DispatchRuleNum */
  DispatchRuleNum?: number;
  /** 同上成员的 OriginRuleNum */
  OriginRuleNum?: number;
  /** 配额最少的成员 Uin */
  BottleneckUin?: string;
  /** 成员列表 */
  Members?: Account[];
}

/** 单个产品的风险统计详情 */
declare interface AccountProductDetailStats {
  /** 产品类型 */
  Product?: string | null;
  /** 产品名称 */
  ProductName?: string | null;
  /** 体检策略数 */
  PolicyCount?: number | null;
  /** 待整改风险数 */
  UntreatedRiskCount?: number | null;
  /** 总风险数 */
  TotalRiskCount?: number | null;
  /** 已处置数 */
  TreatedRiskCount?: number | null;
  /** 已忽略数 */
  IgnoredRiskCount?: number | null;
  /** 整改率，如 50%，无需整改时为 无需整改 */
  RectifyRate?: string | null;
  /** 最近一次体检时间 */
  LastCheckTime?: string | null;
  /** 子类 ID 列表 */
  SubcategoryIds?: string[];
  /** 是否超时未体检 */
  IsOverdue?: boolean;
}

/** 按账号分组的风险统计数据 */
declare interface AccountStatsGroup {
  /** 成员账号信息 */
  Member?: MemberInfo | null;
  /** 该账号下所有产品待整改风险数汇总 */
  UntreatedRiskCount?: number | null;
  /** 该账号下各产品维度的风险统计列表 */
  ProductStats?: AccountProductDetailStats[] | null;
  /** 整改率 */
  RectifyRate?: string;
}

/** 安全组地址模板 */
declare interface AddressTemplateSpecification {
  /** IP地址ID，例如：ipm-2uw6ujo6。 */
  AddressId?: string;
  /** IP地址组ID，例如：ipmg-2uw6ujo6。 */
  AddressGroupId?: string;
}

/** 企业安全组规则列表信息 */
declare interface AnalysisSgRuleInfoResp {
  /** 规则id 等同RuleUuid */
  Id?: number;
  /** 规则Id */
  RuleId?: string;
  /** 排序 */
  OrderIndex?: number;
  /** 云防排序 */
  CfwOrderIndex?: number;
  /** 源规则内容 */
  SourceId?: string;
  /** 源规则类型取值范围 0/1/2/3/4/5/6/7/8/90表示ip(net),1表示VPC实例(instance)2表示子网实例(instance)3表示CVM实例(instance)4表示CLB实例(instance)5表示ENI实例(instance)6表示数据库实例(instance)7表示模板(template)8表示标签(tag)9表示地域(region)枚举值：0： IP / CIDR1： VPC 实例2： 子网 3： CVM 实例4： CLB 实例5： ENI（弹性网卡）实例6： CDB（云数据库）实例7： 参数模板8： 标签9： 地域 */
  SourceType?: number;
  /** 目的规则内容 */
  TargetId?: string;
  /** 目的规则类型取值范围 0/1/2/3/4/5/6/7/8/9/1000表示ip(net),1表示VPC实例(instance)2表示子网实例(instance)3表示CVM实例(instance)4表示CLB实例(instance)5表示ENI实例(instance)6表示数据库实例(instance)7表示模板(template)8表示标签(tag)9表示地域(region)100表示资产分组(resourcegroup)枚举值：0： IP / CIDR1： VPC 实例2： 子网 3： CVM 实例4： CLB 实例5： ENI（弹性网卡）实例6： CDB（云数据库）实例7： 参数模板8： 标签9： 地域 */
  TargetType?: number;
  /** 协议名称取值范围:TCP/ANY/ICMP/UDPANY:表示所有 */
  Protocol?: string;
  /** 端口 */
  Port?: string;
  /** 规则策略取值范围:1/21:阻断2:放行 */
  Strategy?: number;
  /** 描述 */
  Detail?: string;
  /** 地域 */
  Region?: string;
  /** 服务模板id */
  ServiceTemplateId?: string;
  /** 源资产名称 */
  SouInstanceName?: string;
  /** 源资产公网ip */
  SouPublicIp?: string;
  /** 源资产内网ip */
  SouPrivateIp?: string;
  /** 源资产网段信息 */
  SouCidr?: string;
  /** 源模板名称 */
  SouParameterName?: string;
  /** 目的资产名称 */
  InstanceName?: string;
  /** 目的资产公网ip */
  PublicIp?: string;
  /** 目的资产内网ip */
  PrivateIp?: string;
  /** 目的资产网段信息 */
  Cidr?: string;
  /** 目的模板名称 */
  ParameterName?: string;
  /** 端口模板名称 */
  ProtocolPortName?: string;
  /** 域名解析的IP统计 */
  DnsParseCount?: SgDnsParseCount;
  /** 规则生效范围 */
  Scope?: string;
  /** 分区：1防火墙管理最前分区2是云防规则3防火墙管理最后分区 */
  RulePartition?: number;
  /** 规则组Id */
  GroupId?: string;
  /** 规则组名称 */
  GroupName?: string;
  /** 规则组内规则id */
  GroupRuleId?: string;
  /** 策略Id */
  StrategyId?: string;
  /** ip类型 */
  IpVersion?: string;
  /** 成员信息 */
  BelongMember?: MemberInfo | null;
}

/** 通用筛选条件 */
declare interface CommonFilter {
  /** 筛选字段名。支持：SecurityGroupId、FwGroupId、IP（IP地址模糊搜索）、InstanceName（实例名称模糊搜索）、VpcId（VPC ID精确搜索） */
  Name?: string | null;
  /** 筛选值列表 */
  Values?: string[] | null;
  /** 操作类型。1=等于，7=in，9=模糊匹配 */
  OperatorType?: number | null;
}

/** 互联网边界规则 */
declare interface EdgeAclRuleInfo {
  /** 规则ID，修改规则时必填 */
  RuleId?: string;
  /** 规则执行顺序，数字越小优先级越高，创建规则组时必须从1开始严格递增 */
  OrderIndex?: number;
  /** 规则方向：0-出站，1-入站 */
  Direction?: number;
  /** 源地址内容，根据 SourceType 不同有不同的格式：ip 时为 IP/CIDR，domain 时为域名，template 时为模板ID，instance 时为实例ID列表（逗号分隔），tag 时为标签键值对（格式：key:value） */
  SourceContent?: string;
  /** 源地址类型：ip-IP地址，domain-域名，template-参数模板，instance-实例，tag-标签 */
  SourceType?: string;
  /** 目标地址内容，格式同 SourceContent */
  TargetContent?: string;
  /** 目标地址类型：ip-IP地址，domain-域名，template-参数模板，instance-实例，tag-标签 */
  TargetType?: string;
  /** 端口，支持单端口、端口范围和逗号分隔的多端口，如：80、1-65535、80,443,8080 */
  Port?: string;
  /** 协议类型：TCP、UDP、ICMP、ANY */
  Protocol?: string;
  /** 规则动作：accept-放行，drop-阻断，log-观察 */
  RuleAction?: string;
  /** 规则描述，长度0-256字符 */
  Description?: string;
  /** 生效范围：serial，串行；side，旁路；all，全局 */
  Scope?: string;
  /** 规则归属的成员账号ID（多账号场景下使用）。当 SourceType 或 TargetType 为 instance 或 tag 时，此参数必填，用于指定实例/标签所属的成员账号 */
  BelongMemberId?: string;
  /** 参数模板 */
  ParamTemplateId?: string;
}

/** 互联网边界规则响应结构 */
declare interface EdgeAclRuleResp {
  /** 规则ID */
  RuleId?: string;
  /** 规则执行顺序 */
  Sequence?: number;
  /** 规则方向：0-出站，1-入站 */
  Direction?: number;
  /** 源地址内容 */
  SourceContent?: string;
  /** 源地址类型 */
  SourceType?: string;
  /** 源地址名称（当类型为模板/实例/标签时返回对应名称） */
  SourceName?: string | null;
  /** 目标地址内容 */
  TargetContent?: string;
  /** 目标地址类型 */
  TargetType?: string;
  /** 目标地址名称（当类型为模板/实例/标签时返回对应名称） */
  TargetName?: string | null;
  /** 目标端口 */
  Port?: string;
  /** 协议类型 */
  Protocol?: string;
  /** 规则动作：accept-放行，drop-阻断，log-观察 */
  RuleAction?: string;
  /** 规则描述 */
  Description?: string;
  /** 规则生效范围 */
  Scope?: string;
  /** 地域名称1（正则匹配时使用） */
  CountryName?: string | null;
  /** 地域名称2（正则匹配时使用） */
  CityName?: string | null;
  /** 参数模板ID（当类型为模板时返回） */
  ParamTemplateId?: string | null;
  /** 参数模板名称（当类型为模板时返回） */
  ParamTemplateName?: string | null;
  /** 规则是否失效：0-有效，1-失效 */
  Invalid?: number | null;
  /** 规则归属的成员账号 */
  BelongMember?: MemberInfo | null;
  /** 国家Id */
  CountryCode?: number;
  /** 城市Id */
  CityCode?: number;
  /** 0为正常规则,1为地域规则 */
  IsRegion?: number;
  /** 云厂商code */
  CloudCode?: string;
  /** 0为正常规则,1为云厂商规则 */
  IsCloud?: number;
  /** 实例名称 */
  InstanceName?: string;
  /** 地区简称 */
  CountryKey?: string;
  /** 省份、城市简称 */
  CityKey?: string;
  /** 规则创建时间 */
  CreateTime?: string;
  /** 规则最近更新时间 */
  UpdateTime?: string;
  /** 域名数 */
  DnsParseCnt?: number;
}

/** 成员信息 */
declare interface MemberInfo {
  /** 成员AppId */
  AppId?: string;
  /** 成员Uin */
  Uin?: string;
  /** 成员昵称 */
  Nickname?: string;
  /** 成员Id */
  MemberId?: string;
}

/** NAT边界规则 */
declare interface NatAclRule {
  /** 源地址内容 */
  SourceContent: string;
  /** 源类型：ip/url/template/instance/tag */
  SourceType: string;
  /** 目的地址内容 */
  TargetContent: string;
  /** 目的类型：ip/url/template/instance/tag */
  TargetType: string;
  /** 协议：TCP/UDP/ICMP/ANY/HTTP/HTTPS/DNS/FTP等 */
  Protocol: string;
  /** 动作：accept/drop/log */
  RuleAction: string;
  /** 优先级（从1开始） */
  OrderIndex: number;
  /** 规则生效范围：ALL-全局生效，ap-xxx-地域生效，cfwnat-xxx-NAT防火墙实例生效 */
  Scope: string;
  /** 规则方向：1-入站规则，0-出站规则 */
  Direction?: number;
  /** 规则ID（修改时必填） */
  RuleId?: string | null;
  /** 端口（ICMP协议时为空） */
  Port?: string | null;
  /** 规则描述 */
  Description?: string | null;
  /** 端口模板ID */
  ParamTemplateId?: string | null;
  /** 规则归属的成员账号ID(当Scope为cfwnat-xxx或SourceType/DestType为instance/tag时必填) */
  BelongMemberId?: string | null;
}

/** NAT边界规则响应结构 */
declare interface NatAclRuleResp {
  /** 规则ID */
  RuleId?: string;
  /** 优先级 */
  Sequence?: number;
  /** 规则方向：0-出向，1-入向 */
  Direction?: number;
  /** 源地址内容 */
  SourceContent?: string;
  /** 源类型 */
  SourceType?: string;
  /** 源资产名称 */
  SourceName?: string | null;
  /** 目的地址内容 */
  TargetContent?: string;
  /** 目的类型 */
  TargetType?: string;
  /** 目的资产名称 */
  TargetName?: string | null;
  /** 端口 */
  Port?: string | null;
  /** 协议 */
  Protocol?: string;
  /** 动作：accept/drop/log */
  RuleAction?: string;
  /** 规则描述 */
  Description?: string | null;
  /** 规则生效范围 */
  Scope?: string;
  /** 规则生效范围描述 */
  ScopeDesc?: string | null;
  /** 防火墙实例ID */
  FwInsId?: string | null;
  /** 国家名称 */
  CountryName?: string | null;
  /** 城市名称 */
  CityName?: string | null;
  /** 国家代码 */
  CountryCode?: number | null;
  /** 城市代码 */
  CityCode?: number | null;
  /** 国家键值 */
  CountryKey?: string | null;
  /** 城市键值 */
  CityKey?: string | null;
  /** 是否地域规则：0-否，1-是 */
  IsRegion?: number | null;
  /** 云厂商代码 */
  CloudCode?: string | null;
  /** 是否云厂商规则：0-否，1-是 */
  IsCloud?: number | null;
  /** 端口模板ID */
  ParamTemplateId?: string | null;
  /** 端口模板名称 */
  ParamTemplateName?: string | null;
  /** 规则是否失效：0-有效，1-失效 */
  Invalid?: number | null;
  /** 规则归属的成员账号 */
  BelongMember?: MemberInfo | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 域名数 */
  DnsParseCnt?: number;
}

/** 集团成员信息 */
declare interface OrganMemberItem {
  /** 成员 ID */
  MemberId?: string | null;
  /** 成员账号 AppId */
  AppId?: string | null;
  /** 账号Uin */
  Uin?: string;
  /** 账号名称 */
  Nickname?: string | null;
  /** 子账号数量 */
  SubAccountCount?: number | null;
  /** 所属组织架构节点名称 */
  NodeName?: string | null;
  /** 成员身份：admin-管理员，delegatedAdmin-委派管理员，member-普通成员 */
  Role?: string | null;
  /** 成员身份显示名称（前端展示用） */
  RoleDisplay?: string | null;
  /** 所属账户组 */
  AccountGroup?: AccountGroupInfo | null;
  /** 云防火墙纳管状态：0-未纳管，1-已纳管 */
  CfwManaged?: number | null;
  /** 云防火墙共享角色：sharer-共享者，user-使用者，none-未设置 */
  CfwShareRole?: string | null;
  /** 云防火墙共享角色显示名称（前端展示用） */
  CfwShareRoleDisplay?: string | null;
  /** 云防火墙共享者 AppId，成员角色为使用者时有值 */
  CfwSharerAppId?: string | null;
  /** 云防火墙计费实例 ID，非空表示已购买云防火墙 */
  CfwInstanceId?: string | null;
  /** 策略分析权限：0-关闭，1-开启 */
  PolicyAnalysisEnabled?: number | null;
  /** 成员加入集团时间 */
  MemberCreateTime?: string | null;
  /** 账号加入方式 */
  JoinType?: string;
}

/** 集团概览 */
declare interface OrganSummary {
  /** 集团名称 */
  GroupName?: string;
  /** 管理员账号信息 */
  AdminInfo?: MemberInfo;
  /** 管理员/委派管理员数量 */
  AdminCount?: number;
  /** 已接入成员数 */
  JoinedMemberCount?: number;
  /** 接入成员上限（-1表示无上限） */
  MemberLimit?: number;
  /** 接入成员上限显示 */
  MemberLimitDisplay?: string;
  /** 规格共享者数量 */
  CfwSharerCount?: number;
  /** 规格使用者数量 */
  CfwUserCount?: number;
  /** 部门名称列表 */
  Departments?: string[];
  /** 纳管账号数 */
  ManagedMemberCount?: number;
  /** 纳管产品数 */
  ManagedProductCount?: number;
  /** 纳管账号数 */
  CfwManageCount?: number;
}

/** 策略风险 */
declare interface PolicyRisk {
  /** 问题对应的唯一uuid */
  Id: string;
  /** 风险大类 */
  RiskCategory?: string;
  /** 风险子类 */
  RiskSubCategory?: string;
  /** 规则分类 */
  RuleType?: string;
  /** 风险等级，0：低风险1：中风险2：高风险 */
  RiskLevel?: number;
  /** 安全组 */
  Product?: string;
  /** 风险包含的企业安全组规则ID */
  SgRuleId?: string[];
  /** 风险包含安全组ID内的问题规则数 */
  RuleCount?: number;
  /** 风险包含的安全组ID */
  SgId?: string[];
  /** 风险特征 */
  RiskFeature?: string;
  /** 处置建议 */
  Suggestion?: string;
  /** 处置状态，0：未处理，1：已处理，2：忽略 */
  Status?: number;
  /** 发现时间 */
  FoundTime?: string;
  /** 处置时间 */
  DisposalTime?: string;
  /** 安全组地域 */
  Region?: string;
  /** Ingress入站，Egress出站 */
  Direction?: string;
  /** 风险原因 */
  RiskReason?: string;
}

/** 账号信息 */
declare interface ReceiveAccount {
  /** 租户 uin */
  Uin?: string;
  /** 租户名称 */
  Nickname?: string;
  /** 0=账号uin，1=账号组 */
  ReceiverType?: number;
  /** 只有ReceiverType 是 1 时 才返回账号列表 */
  Members?: MemberInfo[];
}

/** 风险分类统计项 */
declare interface RiskCategoryItem {
  /** 风险大类ID */
  CategoryId?: string;
  /** 风险大类名称 */
  CategoryName?: string;
  /** 风险子类ID */
  SubcategoryId?: string;
  /** 风险子类名称 */
  SubcategoryName?: string;
  /** 风险等级(0-低危,1-中危,2-高危) */
  RiskLevel?: number;
  /** 风险等级名称(低/中/高) */
  RiskLevelName?: string;
  /** 风险描述 */
  Description?: string;
  /** 处置建议 */
  Suggestion?: string;
  /** 该类风险的规则数量 */
  RuleCount?: number;
  /** 已处置数量 */
  TreatedCount?: number;
  /** 已忽略数量 */
  IgnoredCount?: number;
  /** 待整改数量 */
  UntreatedCount?: number;
  /** 整改率(百分比字符串) */
  DisposalRate?: number;
  /** 是否有未处理风险-1: 未体检0: 无风险1: 有风险 */
  HasRisk?: number;
  /** 整改状态：Completed： 已整改完成（整改率 100%）Incomplete： 未整改完成（整改率 < 100%）-：未体检/无数据 */
  RemediationStatus?: string;
}

/** 企业安全组规则列表信息 */
declare interface SecGroupRuleResp {
  /** 排序 */
  OrderIndex?: number;
  /** 主键id */
  RuleId?: string;
  /** ip类型 */
  IpVersion?: string;
  /** 源规则内容 */
  SourceId?: string;
  /** 源规则类型取值范围 0/1/2/3/4/5/6/7/8/9/1000表示ip(net),1表示VPC实例(instance)2表示子网实例(instance)3表示CVM实例(instance)4表示CLB实例(instance)5表示ENI实例(instance)6表示数据库实例(instance)7表示模板(template)8表示标签(tag)9表示地域(region)100表示资产分组(resourcegroup) */
  SourceType?: number;
  /** 目的规则内容 */
  TargetId?: string;
  /** 目的规则类型取值范围 0/1/2/3/4/5/6/7/8/9/1000表示ip(net),1表示VPC实例(instance)2表示子网实例(instance)3表示CVM实例(instance)4表示CLB实例(instance)5表示ENI实例(instance)6表示数据库实例(instance)7表示模板(template)8表示标签(tag)9表示地域(region)100表示资产分组(resourcegroup) */
  TargetType?: number;
  /** 协议名称取值范围:TCP/ANY/ICMP/UDPANY:表示所有 */
  Protocol?: string;
  /** 端口 */
  Port?: string;
  /** 策略 */
  Strategy?: number;
  /** 描述 */
  Detail?: string;
  /** 地域 */
  Region?: string;
  /** 服务模板id */
  ServiceTemplateId?: string;
  /** 源资产名称 */
  SouInstanceName?: string;
  /** 源资产公网ip */
  SouPublicIp?: string;
  /** 源资产内网ip */
  SouPrivateIp?: string;
  /** 源资产网段信息 */
  SouCidr?: string;
  /** 源模板名称 */
  SouParameterName?: string;
  /** 目的资产名称 */
  InstanceName?: string;
  /** 目的资产公网ip */
  PublicIp?: string;
  /** 目的资产内网ip */
  PrivateIp?: string;
  /** 目的资产网段信息 */
  Cidr?: string;
  /** 目的模板名称 */
  ParameterName?: string;
  /** 端口模板名称 */
  ProtocolPortName?: string;
  /** 规则id 等同RuleUuid */
  Id?: number;
  /** 域名解析的IP统计 */
  DnsParseCount?: SgDnsParseCount;
  /** 规则生效范围 */
  Scope?: string;
  /** 规则最近一次是否有改动 取值范围：0/1 0:否 1:是 */
  IsNew?: number;
  /** 规则归属的成员账号（当FwGroupId为cfwg-xxx或SourceType/DestType为instance/tag时必填) */
  BelongMember?: MemberInfo | null;
}

/** 安全组风险规则详情 */
declare interface SecurityGroupRiskPolicy {
  /** 安全组规则索引号 */
  PolicyIndex?: number;
  /** 协议, 取值: TCP,UDP,ICMP,ICMPv6,ALL。 */
  Protocol?: string;
  /** 端口(all, 离散port, range)。 */
  Port?: string;
  /** 端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。 */
  ServiceTemplate?: ServiceTemplateSpecification;
  /** 网段或IP(互斥)。 */
  CidrBlock?: string;
  /** 网段或IPv6(互斥)。 */
  Ipv6CidrBlock?: string;
  /** 安全组实例ID，例如：sg-ohuuioma。 */
  SecurityGroupId?: string;
  /** IP地址ID或者ID地址组ID。 */
  AddressTemplate?: AddressTemplateSpecification;
  /** 动作：ACCEPT 或 DROP。 */
  Action?: string;
  /** 安全组规则描述。 */
  PolicyDescription?: string;
  /** 安全组规则当前版本 */
  Version?: string;
  /** 规则方向，Egress出站规则，Ingress入站规则 */
  Direction?: string;
  /** 安全组最近修改时间。 */
  ModifyTime?: string;
  /** 安全组所在地域 */
  Region?: string;
}

/** 规则数据结构描述 */
declare interface SecurityGroupRule {
  /** ip类型 */
  IpVersion?: string;
  /** 源地址 */
  SourceContent?: string | null;
  /** 源类型 */
  SourceType?: string | null;
  /** 目的地址 */
  DestContent?: string | null;
  /** 目的类型 */
  DestType?: string | null;
  /** 协议 */
  Protocol?: string | null;
  /** 端口 */
  Port?: string | null;
  /** 模板 */
  ServiceTemplateId?: string | null;
  /** 动作 */
  RuleAction?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 优先级 */
  OrderIndex?: number | null;
  /** rule id */
  RuleId?: string | null;
  /** 生效范围 */
  Scope?: string | null;
  /** 端口类型 */
  ProtocolPortType?: number;
  /** 规则归属的成员账号ID（当FwGroupId为cfwg-xxx或SourceType/DestType为instance/tag时必填） */
  BelongMemberId?: string;
}

/** 规则序号调整结构 */
declare interface SequenceIndex {
  /** 原规则序号 */
  OrderIndex?: number | null;
  /** 新规则序号 */
  NewOrderIndex?: number | null;
}

/** 安全组服务模板 */
declare interface ServiceTemplateSpecification {
  /** 协议端口ID，例如：ppm-f5n1f8da。 */
  ServiceId?: string;
  /** 协议端口组ID，例如：ppmg-f5n1f8da */
  ServiceGroupId?: string;
}

/** 企业安全组域名解析的IP统计 */
declare interface SgDnsParseCount {
  /** 有效下发的IP个数，离散数据 */
  ValidCount?: number;
  /** 未下发的IP个数，离散数据 */
  InvalidCount?: number;
}

/** 规则列表响应数据结构 */
declare interface SgRuleResp {
  /** 规则Id */
  RuleId?: string;
  /** 优先级 */
  Sequence?: number;
  /** 区域 */
  Region?: string;
  /** ip类型 */
  IpVersion?: string;
  /** 源内容 */
  SrcContent?: string;
  /** 源类型 */
  SrcType?: string;
  /** 目的内容 */
  DstContent?: string;
  /** 目的类型 */
  DstType?: string;
  /** 协议 */
  Protocol?: string;
  /** 协议端口参数模板 */
  ProtocolPortType?: number;
  /** 协议端口参数模板id */
  ServiceTemplateId?: string;
  /** 端口段,支持单端口,多端口和端口段 */
  DstPort?: string;
  /** 策略，1阻断，2放行 */
  RuleAction?: string;
  /** 描述 */
  Detail?: string;
  /** 规则来源，0为用户控制台添加 */
  RuleSource?: string;
  /** 生效范围,字节位,1:SG 企业安全组,2:LH 轻量服务器 */
  Scope?: string;
}

/** 创建策略的策略数据结构 */
declare interface StrategyReq {
  /** 规则组Id */
  GroupId?: string;
  /** 优先级 */
  Sequence?: number;
}

/** 查询策略时策略列表参数 */
declare interface StrategyResp {
  /** 策略Id */
  StrategyId?: string;
  /** 规则组Id */
  GroupId?: string;
  /** 规则组名称 */
  GroupName?: string;
  /** 规则数 */
  RuleCount?: number;
  /** 策略状态 */
  RuleStatus?: number;
  /** 下发账号 */
  ReceiveAccount?: ReceiveAccount[];
  /** 优先级 */
  Sequence?: number;
  /** 下发失败原因 */
  ErrMsg?: string;
  /** 下发失败原因类型 */
  ErrorType?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 创建人 */
  CreateBy?: string;
  /** 更新人 */
  UpdateBy?: string;
  /** 执行区域 */
  ExecArea?: string;
  /** 创建人名称 */
  CreateName?: string;
  /** 更新人名称 */
  UpdateName?: string;
  /** 创建时间 */
  CreateTime?: string;
}

/** VPC边界规则 */
declare interface VpcAclRule {
  /** 源地址内容 */
  SourceContent: string;
  /** 源类型：ip/url/template/instance/tag */
  SourceType: string;
  /** 目的地址内容 */
  DestContent: string;
  /** 目的类型：ip/url/template/instance/tag */
  DestType: string;
  /** 协议：TCP/UDP/ICMP/ANY/HTTP/HTTPS/DNS/FTP等 */
  Protocol: string;
  /** 动作：accept/drop/log */
  RuleAction: string;
  /** 优先级（从1开始） */
  OrderIndex: number;
  /** 边界防火墙ID：ALL表示全局，CFWS-xxx表示指定边界 */
  EdgeId: string;
  /** 防火墙实例ID（规则生效范围）：ALL-全局生效，ccn-xxx-云联网实例，cfwg-xxx-防火墙组实例 */
  FwGroupId: string;
  /** 规则ID（修改时必填） */
  RuleId?: string;
  /** 端口（ICMP协议时为空） */
  Port?: string;
  /** 规则描述 */
  Description?: string;
  /** 端口模板ID */
  ParamTemplateId?: string;
  /** 规则归属的成员账号ID（当FwGroupId为cfwg-xxx或SourceType/DestType为instance/tag时必填） */
  BelongMemberId?: string;
}

/** VPC边界规则响应结构 */
declare interface VpcAclRuleResp {
  /** 规则ID */
  RuleId?: string;
  /** 优先级 */
  Sequence?: number;
  /** IP版本：ipv4或ipv6 */
  IpVersion?: string;
  /** 源地址内容 */
  SourceContent?: string;
  /** 源类型 */
  SourceType?: string;
  /** 源资产名称 */
  SourceName?: string | null;
  /** 目的地址内容 */
  DestContent?: string;
  /** 目的类型 */
  DestType?: string;
  /** 目的资产名称 */
  DestName?: string | null;
  /** 协议 */
  Protocol?: string;
  /** 端口 */
  Port?: string | null;
  /** 端口模板ID */
  ParamTemplateId?: string | null;
  /** 端口模板名称 */
  ParamTemplateName?: string | null;
  /** 动作：accept/drop/log */
  RuleAction?: string;
  /** 规则描述 */
  Description?: string | null;
  /** 边界防火墙ID */
  EdgeId?: string;
  /** 防火墙实例ID */
  FwGroupId?: string;
  /** 规则是否失效：0-有效，1-失效 */
  Invalid?: number;
  /** 规则归属的成员账号 */
  BelongMember?: MemberInfo | null;
  /** 规则创建时间 */
  CreateTime?: string;
  /** 规则修改时间 */
  UpdateTime?: string;
  /** 域名数 */
  DnsParseCnt?: number;
  /** 防火墙组名称 */
  FwGroupName?: string;
}

declare interface CancelIgnorePolicyRiskRequest {
  /** 风险ID */
  RiskId: string;
  /** 成员Id */
  MemberId?: string;
}

declare interface CancelIgnorePolicyRiskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAnalyzePolicyTaskRequest {
  /** 产品类型 */
  Products: string[];
  /** 成员Id 列表 */
  MemberIdSet?: string[];
}

declare interface CreateAnalyzePolicyTaskResponse {
  /** 任务状态 ，1 表示执行中 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdgeAclRuleGroupRequest {
  /** 规则组名称，长度1-50字符 */
  GroupName?: string;
  /** 产品类型，固定为 cfw_edge_acl */
  Product?: string;
  /** 规则列表 */
  Rules?: EdgeAclRuleInfo[];
}

declare interface CreateEdgeAclRuleGroupResponse {
  /** 创建的规则组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdgeAclRuleRequest {
  /** 规则组ID */
  GroupId?: string;
  /** 规则列表 */
  Rules?: EdgeAclRuleInfo[];
}

declare interface CreateEdgeAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNatAclRuleGroupRequest {
  /** 规则组名称 */
  GroupName: string;
  /** 产品类型，固定为 cfw_nat_acl */
  Product: string;
  /** 规则列表 */
  Rules: NatAclRule[];
}

declare interface CreateNatAclRuleGroupResponse {
  /** 创建的规则组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNatAclRuleRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则列表 */
  Rules: NatAclRule[];
}

declare interface CreateNatAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupRuleGroupRequest {
  /** 规则组ID */
  GroupName?: string;
  /** 产品类型 */
  Product?: string;
  /** 规则列表 */
  Rules?: SecurityGroupRule[];
}

declare interface CreateSecurityGroupRuleGroupResponse {
  /** 创建的规则组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupRuleRequest {
  /** 规则组Id */
  GroupId?: string;
  /** 规则列表 */
  Rules?: SecurityGroupRule[];
}

declare interface CreateSecurityGroupRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStrategyRequest {
  /** 产品类型 */
  Product: string;
  /** 下发账号 */
  ReceiveAccount?: string[];
  /** 前区规则组 */
  PreStrategy?: StrategyReq[];
  /** 后区规则组 */
  PostStrategy?: StrategyReq[];
  /** 下发账号组 */
  ReceiveGroup?: string[];
}

declare interface CreateStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpcAclRuleGroupRequest {
  /** 规则组名称 */
  GroupName: string;
  /** 产品类型，固定为 cfw_vpc_acl */
  Product: string;
  /** 规则列表 */
  Rules: VpcAclRule[];
}

declare interface CreateVpcAclRuleGroupResponse {
  /** 创建的规则组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpcAclRuleRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则列表 */
  Rules: VpcAclRule[];
}

declare interface CreateVpcAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEdgeAclRuleRequest {
  /** 规则组ID */
  GroupId?: string;
  /** 要删除的规则ID列表 */
  RuleIds?: string[];
}

declare interface DeleteEdgeAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNatAclRuleRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则ID列表 */
  RuleIds: string[];
}

declare interface DeleteNatAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRuleGroupRequest {
  /** 规则组Id列表 */
  GroupIds?: string[];
}

declare interface DeleteRuleGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupRuleRequest {
  /** 规则组Id */
  GroupId?: string;
  /** 规则列表 */
  RuleIds?: string[];
}

declare interface DeleteSecurityGroupRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteStrategyRequest {
  /** 策略Id列表 */
  StrategyIds?: string[];
}

declare interface DeleteStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcAclRuleRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则ID列表 */
  RuleIds: string[];
}

declare interface DeleteVpcAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeAclRulesRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则方向：0-出向，1-入向 */
  Direction?: number;
  /** 过滤条件列表，支持按 RuleId、Direction、Protocol、RuleAction 等字段过滤 */
  Filters?: CommonFilter[];
  /** 分页大小，默认100，最大1000 */
  Limit?: number;
  /** 分页偏移，默认0 */
  Offset?: number;
  /** 排序顺序，asc:升序 desc:降序 */
  Order?: string;
  /** 排序字段，支持 Sequence、RuleId 等 */
  By?: string;
}

declare interface DescribeEdgeAclRulesResponse {
  /** 规则总数 */
  TotalCount?: number;
  /** 规则列表 */
  Rules?: EdgeAclRuleResp[];
  /** 不过滤的总数 */
  AllTotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNatAclRulesRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则方向：0-出向，1-入向 */
  Direction?: number;
  /** 过滤条件 */
  Filters?: CommonFilter[];
  /** 偏移量 */
  Offset?: number;
  /** 数量 */
  Limit?: number;
  /** 排序顺序，asc:升序 desc:降序 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeNatAclRulesResponse {
  /** 规则列表 */
  Rules?: NatAclRuleResp[];
  /** 总数 */
  TotalCount?: number;
  /** 不过滤的总数 */
  AllTotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganMembersRequest {
  /** 搜索过滤条件列表，支持按成员 ID、账号名称、身份、纳管状态等字段筛选 */
  Filters?: CommonFilter[];
  /** 分页大小，默认 20 */
  Limit?: number;
  /** 分页偏移量，默认 0 */
  Offset?: number;
  /** 排序字段，如 MemberCreateTime */
  By?: string;
  /** 排序方式：asc 升序，desc 降序 */
  Order?: string;
}

declare interface DescribeOrganMembersResponse {
  /** 集团成员总数 */
  TotalCount?: number;
  /** 集团成员列表 */
  Members?: OrganMemberItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganSummaryRequest {
}

declare interface DescribeOrganSummaryResponse {
  /** 集团概览 */
  Summary?: OrganSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyRiskAccountProductStatsRequest {
  /** 分页大小，按账号分页，默认20，最大100 */
  Limit?: number;
  /** 分页偏移，默认0 */
  Offset?: number;
  /** 筛选条件列表。支持的筛选字段：AccountName（账号名称模糊搜索）、AccountId（账号Uin精确搜索）、OnlyUntreated（仅看待整改，值为1时生效）、OnlyOverdue（仅超时未体检，值为1时生效） */
  Filters?: CommonFilter[];
}

declare interface DescribePolicyRiskAccountProductStatsResponse {
  /** 按账号分组的风险统计列表 */
  AccountStats?: AccountStatsGroup[] | null;
  /** 满足条件的账号总数 */
  TotalCount?: number;
  /** 超时未体检的账号数 */
  OverdueAccountCount?: number;
  /** 超时未体检的产品数 */
  OverdueProductCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskAnalysisDetailsRequest {
  /** 风险ID */
  Id?: string;
  /** 查询类型，analyze实时数据分析，task定时分析结果 */
  SearchType?: string;
  /** 成员Id */
  MemberId?: string;
}

declare interface DescribeRiskAnalysisDetailsResponse {
  /** 风险企业安全组规则列表 */
  EnterpriseSecurityGroupRule?: AnalysisSgRuleInfoResp[];
  /** 风险安全组规则列表 */
  SecurityGroupPolicy?: SecurityGroupRiskPolicy[];
  /** 实时分析状态，1分析执行中请轮询，0分析已结束 */
  Status?: number;
  /** 风险企业安全组IPV6规则列表 */
  EnterpriseSecurityGroupRuleIPV6?: AnalysisSgRuleInfoResp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCategoryStatsRequest {
  /** 分页大小,默认20 */
  Limit?: number;
  /** 分页偏移量,默认0 */
  Offset?: number;
  /** 产品类型 */
  Product?: string;
  /** 筛选器 */
  Filters?: CommonFilter[];
  /** 排序字段："RuleCount", "TreatedCount", "IgnoredCount", "UntreatedCount", "DisposalRate" */
  By?: string;
  /** 顺序 */
  Order?: string;
  /** 成员Id */
  MemberId?: string;
}

declare interface DescribeRiskCategoryStatsResponse {
  /** 风险分类总数 */
  Total?: number;
  /** 风险分类统计列表 */
  Data?: RiskCategoryItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskListRequest {
  /** 条数限制 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 产品类型 */
  Product?: string;
  /** 筛选条件 */
  Filters?: CommonFilter[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 成员Id */
  MemberId?: string;
}

declare interface DescribeRiskListResponse {
  /** 策略问题列表 */
  PolicyRiskLst?: PolicyRisk[];
  /** 策略问题数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupRuleRequest {
  /** 规则组Id */
  GroupId?: string;
  /** 规则Id */
  RuleId?: string;
}

declare interface DescribeSecurityGroupRuleResponse {
  /** 规则详情 */
  Rule?: SgRuleResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupRulesRequest {
  /** 规则组Id */
  GroupId?: string;
  /** 模糊搜索关键词 */
  Filters?: CommonFilter[];
  /** 偏移量 */
  Offset?: number;
  /** 数量 */
  Limit?: number;
}

declare interface DescribeSecurityGroupRulesResponse {
  /** 规则列表 */
  Rules?: SecGroupRuleResp[];
  /** 总数 */
  TotalCount?: number;
  /** 不过滤的规则总数 */
  AllTotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStrategiesRequest {
  /** 产品类型 */
  Product?: string;
  /** 执行区域：pre是前区，post 是后区 */
  ExecArea?: string;
  /** 筛选条件 */
  Filters?: CommonFilter[];
  /** 条数限制 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeStrategiesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 策略列表 */
  Strategies?: StrategyResp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStrategyAccountsRequest {
  /** 下发产品 secgroup // 企业安全组 */
  Product: string;
  /** 筛选器 */
  Filters?: CommonFilter[];
}

declare interface DescribeStrategyAccountsResponse {
  /** 账号列表 */
  Accounts?: Account[];
  /** 账号组列表 */
  AccountGroups?: AccountGroupQuotaDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStrategyDispatchStatusRequest {
  /** 产品 */
  Product?: string;
}

declare interface DescribeStrategyDispatchStatusResponse {
  /** 进度 */
  Progress?: number;
  /** 下发开始时间 */
  StartTime?: string;
  /** 下发结束时间 */
  EndTime?: string;
  /** 下发状态，0无变动，1下发中，2下发成功，3下发失败，4更新待下发 */
  Status?: number;
  /** 下发规则组数量 */
  RuleGroupNum?: number;
  /** 下发失败错误信息 */
  ErrorMsg?: string;
  /** 下发关联策略id列表 */
  DispatchStrategyList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStrategyRequest {
  /** 策略Id */
  StrategyId?: string;
}

declare interface DescribeStrategyResponse {
  /** 策略详情 */
  Strategy?: StrategyResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcAclRulesRequest {
  /** 规则组ID */
  GroupId: string;
  /** 过滤条件 */
  Filters?: CommonFilter[];
  /** 偏移量 */
  Offset?: number;
  /** 数量 */
  Limit?: number;
}

declare interface DescribeVpcAclRulesResponse {
  /** 规则列表 */
  Rules?: VpcAclRuleResp[];
  /** 总数 */
  TotalCount?: number;
  /** 不过滤的总数 */
  AllTotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DispatchStrategyRequest {
  /** 1:下发，2:中止 */
  Status?: number;
  /** 产品 */
  Product?: string;
}

declare interface DispatchStrategyResponse {
  /** 返回状态 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IgnorePolicyRiskRequest {
  /** 策略问题ID */
  RiskId: string;
  /** 成员Id */
  MemberId?: string;
}

declare interface IgnorePolicyRiskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEdgeAclRuleRequest {
  /** 规则组ID */
  GroupId?: string;
  /** 要修改的规则，必须包含RuleId */
  Rule?: EdgeAclRuleInfo;
}

declare interface ModifyEdgeAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEdgeAclRuleSequenceRequest {
  /** 出入站方向 0=出向，1=入向 */
  Direction: number;
  /** 规则组ID */
  GroupId?: string;
  /** 规则序号调整列表，必须包含所有受影响的规则 */
  Sequences?: SequenceIndex[];
}

declare interface ModifyEdgeAclRuleSequenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNatAclRuleRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则 */
  Rule: NatAclRule;
}

declare interface ModifyNatAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNatAclRuleSequenceRequest {
  /** 规则组ID */
  GroupId: string;
  /** 序号调整列表 */
  Sequences: SequenceIndex[];
  /** 规则方向：1-入站规则，0-出站规则 */
  Direction: number;
}

declare interface ModifyNatAclRuleSequenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleGroupRequest {
  /** 规则组名称 */
  GroupId?: string;
  /** 规则组名称 */
  GroupName?: string;
}

declare interface ModifyRuleGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupRuleRequest {
  /** 规则组ID */
  GroupId?: string;
  /** 规则 */
  Rule?: SecurityGroupRule;
}

declare interface ModifySecurityGroupRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStrategyRequest {
  /** 策略Id */
  StrategyId?: string;
  /** 下发规则接收账号 */
  ReceiveAccount?: string[];
  /** 优先级 */
  Sequence?: number;
  /** 规则组Id */
  GroupId?: string;
  /** 下发规则接收账号组 */
  ReceiveGroup?: string[];
}

declare interface ModifyStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStrategySequenceRequest {
  /** 优先级列表 */
  Sequences?: SequenceIndex[];
  /** 执行区域 */
  ExecArea?: string;
  /** 产品类型 */
  Product?: string;
}

declare interface ModifyStrategySequenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpcAclRuleRequest {
  /** 规则组ID */
  GroupId: string;
  /** 规则 */
  Rule: VpcAclRule;
}

declare interface ModifyVpcAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpcAclRuleSequenceRequest {
  /** 规则组ID */
  GroupId: string;
  /** 序号调整列表 */
  Sequences: SequenceIndex[];
}

declare interface ModifyVpcAclRuleSequenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Fwm 防火墙管理} */
declare interface Fwm {
  (): Versions;
  /** 取消忽略策略风险 {@link CancelIgnorePolicyRiskRequest} {@link CancelIgnorePolicyRiskResponse} */
  CancelIgnorePolicyRisk(data: CancelIgnorePolicyRiskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelIgnorePolicyRiskResponse>;
  /** 创建风险分析任务 {@link CreateAnalyzePolicyTaskRequest} {@link CreateAnalyzePolicyTaskResponse} */
  CreateAnalyzePolicyTask(data: CreateAnalyzePolicyTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAnalyzePolicyTaskResponse>;
  /** 创建互联网边界规则 {@link CreateEdgeAclRuleRequest} {@link CreateEdgeAclRuleResponse} */
  CreateEdgeAclRule(data?: CreateEdgeAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeAclRuleResponse>;
  /** 创建互联网边界规则组 {@link CreateEdgeAclRuleGroupRequest} {@link CreateEdgeAclRuleGroupResponse} */
  CreateEdgeAclRuleGroup(data?: CreateEdgeAclRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeAclRuleGroupResponse>;
  /** 创建NAT边界规则 {@link CreateNatAclRuleRequest} {@link CreateNatAclRuleResponse} */
  CreateNatAclRule(data: CreateNatAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatAclRuleResponse>;
  /** 创建NAT边界规则组 {@link CreateNatAclRuleGroupRequest} {@link CreateNatAclRuleGroupResponse} */
  CreateNatAclRuleGroup(data: CreateNatAclRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatAclRuleGroupResponse>;
  /** 创建企业安全组规则 {@link CreateSecurityGroupRuleRequest} {@link CreateSecurityGroupRuleResponse} */
  CreateSecurityGroupRule(data?: CreateSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupRuleResponse>;
  /** 创建企业安全组规则组 {@link CreateSecurityGroupRuleGroupRequest} {@link CreateSecurityGroupRuleGroupResponse} */
  CreateSecurityGroupRuleGroup(data?: CreateSecurityGroupRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupRuleGroupResponse>;
  /** 创建下发规则 {@link CreateStrategyRequest} {@link CreateStrategyResponse} */
  CreateStrategy(data: CreateStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStrategyResponse>;
  /** 创建VPC边界规则 {@link CreateVpcAclRuleRequest} {@link CreateVpcAclRuleResponse} */
  CreateVpcAclRule(data: CreateVpcAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcAclRuleResponse>;
  /** 创建VPC边界规则组 {@link CreateVpcAclRuleGroupRequest} {@link CreateVpcAclRuleGroupResponse} */
  CreateVpcAclRuleGroup(data: CreateVpcAclRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcAclRuleGroupResponse>;
  /** 删除互联网边界规则 {@link DeleteEdgeAclRuleRequest} {@link DeleteEdgeAclRuleResponse} */
  DeleteEdgeAclRule(data?: DeleteEdgeAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeAclRuleResponse>;
  /** 删除NAT边界规则 {@link DeleteNatAclRuleRequest} {@link DeleteNatAclRuleResponse} */
  DeleteNatAclRule(data: DeleteNatAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatAclRuleResponse>;
  /** 删除规则组 {@link DeleteRuleGroupRequest} {@link DeleteRuleGroupResponse} */
  DeleteRuleGroup(data?: DeleteRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleGroupResponse>;
  /** 删除企业安全组规则 {@link DeleteSecurityGroupRuleRequest} {@link DeleteSecurityGroupRuleResponse} */
  DeleteSecurityGroupRule(data?: DeleteSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupRuleResponse>;
  /** 删除下发规则 {@link DeleteStrategyRequest} {@link DeleteStrategyResponse} */
  DeleteStrategy(data?: DeleteStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStrategyResponse>;
  /** 删除VPC边界规则 {@link DeleteVpcAclRuleRequest} {@link DeleteVpcAclRuleResponse} */
  DeleteVpcAclRule(data: DeleteVpcAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcAclRuleResponse>;
  /** 查询互联网边界规则列表 {@link DescribeEdgeAclRulesRequest} {@link DescribeEdgeAclRulesResponse} */
  DescribeEdgeAclRules(data: DescribeEdgeAclRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeAclRulesResponse>;
  /** 查询NAT边界规则列表 {@link DescribeNatAclRulesRequest} {@link DescribeNatAclRulesResponse} */
  DescribeNatAclRules(data: DescribeNatAclRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatAclRulesResponse>;
  /** 查询集团成员列表 {@link DescribeOrganMembersRequest} {@link DescribeOrganMembersResponse} */
  DescribeOrganMembers(data?: DescribeOrganMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganMembersResponse>;
  /** 获取集团概览 {@link DescribeOrganSummaryRequest} {@link DescribeOrganSummaryResponse} */
  DescribeOrganSummary(data?: DescribeOrganSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganSummaryResponse>;
  /** 查询账号+产品维度风险统计 {@link DescribePolicyRiskAccountProductStatsRequest} {@link DescribePolicyRiskAccountProductStatsResponse} */
  DescribePolicyRiskAccountProductStats(data?: DescribePolicyRiskAccountProductStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyRiskAccountProductStatsResponse>;
  /** 实时分析风险详情 {@link DescribeRiskAnalysisDetailsRequest} {@link DescribeRiskAnalysisDetailsResponse} */
  DescribeRiskAnalysisDetails(data?: DescribeRiskAnalysisDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskAnalysisDetailsResponse>;
  /** 查询风险分类统计数据 {@link DescribeRiskCategoryStatsRequest} {@link DescribeRiskCategoryStatsResponse} */
  DescribeRiskCategoryStats(data?: DescribeRiskCategoryStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCategoryStatsResponse>;
  /** 查询策略风险列表 {@link DescribeRiskListRequest} {@link DescribeRiskListResponse} */
  DescribeRiskList(data: DescribeRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskListResponse>;
  /** 查询企业安全组规则详情 {@link DescribeSecurityGroupRuleRequest} {@link DescribeSecurityGroupRuleResponse} */
  DescribeSecurityGroupRule(data?: DescribeSecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupRuleResponse>;
  /** 查询企业安全组规则列表 {@link DescribeSecurityGroupRulesRequest} {@link DescribeSecurityGroupRulesResponse} */
  DescribeSecurityGroupRules(data?: DescribeSecurityGroupRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupRulesResponse>;
  /** 查询规则列表 {@link DescribeStrategiesRequest} {@link DescribeStrategiesResponse} */
  DescribeStrategies(data?: DescribeStrategiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategiesResponse>;
  /** 查询下发规则信息 {@link DescribeStrategyRequest} {@link DescribeStrategyResponse} */
  DescribeStrategy(data?: DescribeStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategyResponse>;
  /** 查询防火墙管理规则下发账号 {@link DescribeStrategyAccountsRequest} {@link DescribeStrategyAccountsResponse} */
  DescribeStrategyAccounts(data: DescribeStrategyAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategyAccountsResponse>;
  /** 查询规则下发状态 {@link DescribeStrategyDispatchStatusRequest} {@link DescribeStrategyDispatchStatusResponse} */
  DescribeStrategyDispatchStatus(data?: DescribeStrategyDispatchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategyDispatchStatusResponse>;
  /** 查询VPC边界规则列表 {@link DescribeVpcAclRulesRequest} {@link DescribeVpcAclRulesResponse} */
  DescribeVpcAclRules(data: DescribeVpcAclRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcAclRulesResponse>;
  /** 下发规则 {@link DispatchStrategyRequest} {@link DispatchStrategyResponse} */
  DispatchStrategy(data?: DispatchStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DispatchStrategyResponse>;
  /** 忽略策略问题 {@link IgnorePolicyRiskRequest} {@link IgnorePolicyRiskResponse} */
  IgnorePolicyRisk(data: IgnorePolicyRiskRequest, config?: AxiosRequestConfig): AxiosPromise<IgnorePolicyRiskResponse>;
  /** 修改互联网边界规则 {@link ModifyEdgeAclRuleRequest} {@link ModifyEdgeAclRuleResponse} */
  ModifyEdgeAclRule(data?: ModifyEdgeAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeAclRuleResponse>;
  /** 修改互联网边界规则序号 {@link ModifyEdgeAclRuleSequenceRequest} {@link ModifyEdgeAclRuleSequenceResponse} */
  ModifyEdgeAclRuleSequence(data: ModifyEdgeAclRuleSequenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeAclRuleSequenceResponse>;
  /** 修改NAT边界规则 {@link ModifyNatAclRuleRequest} {@link ModifyNatAclRuleResponse} */
  ModifyNatAclRule(data: ModifyNatAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatAclRuleResponse>;
  /** NAT边界规则排序 {@link ModifyNatAclRuleSequenceRequest} {@link ModifyNatAclRuleSequenceResponse} */
  ModifyNatAclRuleSequence(data: ModifyNatAclRuleSequenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatAclRuleSequenceResponse>;
  /** 修改规则组信息 {@link ModifyRuleGroupRequest} {@link ModifyRuleGroupResponse} */
  ModifyRuleGroup(data?: ModifyRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleGroupResponse>;
  /** 修改企业安全组规则 {@link ModifySecurityGroupRuleRequest} {@link ModifySecurityGroupRuleResponse} */
  ModifySecurityGroupRule(data?: ModifySecurityGroupRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupRuleResponse>;
  /** 编辑下发规则 {@link ModifyStrategyRequest} {@link ModifyStrategyResponse} */
  ModifyStrategy(data?: ModifyStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStrategyResponse>;
  /** 下发规则快速排序 {@link ModifyStrategySequenceRequest} {@link ModifyStrategySequenceResponse} */
  ModifyStrategySequence(data?: ModifyStrategySequenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStrategySequenceResponse>;
  /** 修改VPC边界规则 {@link ModifyVpcAclRuleRequest} {@link ModifyVpcAclRuleResponse} */
  ModifyVpcAclRule(data: ModifyVpcAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcAclRuleResponse>;
  /** VPC边界规则排序 {@link ModifyVpcAclRuleSequenceRequest} {@link ModifyVpcAclRuleSequenceResponse} */
  ModifyVpcAclRuleSequence(data: ModifyVpcAclRuleSequenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcAclRuleSequenceResponse>;
}

export declare type Versions = ["2025-06-11"];

export default Fwm;
