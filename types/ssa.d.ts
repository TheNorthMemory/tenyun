/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 聚合类型 */
declare interface AggregationObj {
  /** 类型 */
  Type: string;
  /** 数组 */
  Bucket: Bucket[];
}

/** 用户威胁告警信息 */
declare interface AlarmInfoRsp {
  /** 近7天威胁告警 */
  AttackEvent?: AttackEvent[] | null;
}

/** 告警详情 */
declare interface AlertDetail {
  /** 告警基础信息 */
  BaseInfo: AlertType | null;
  /** 告警详情，json序列化 */
  Detail: string | null;
}

/** 空Aggregations结构体 */
declare interface AlertListAggregations {
  /** 名字 */
  Name?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 告警列表响应数据 */
declare interface AlertListData {
  /** 总数 */
  Total: number | null;
  /** 返回列表 */
  AlertList: AlertType[] | null;
  /** 聚合参数 */
  Aggregations?: AlertListAggregations | null;
}

/** 告警字段 */
declare interface AlertType {
  /** 标准时间格式 */
  AlertTime: string | null;
  /** 唯一id */
  AlertId: string | null;
  /** 资产id */
  AssetId: string | null;
  /** 内网ip */
  AssetPrivateIp: string[] | null;
  /** 名字 */
  AlertName: string | null;
  /** 告警级别 0:未知 1:低危 2:中危 3:高危 4:严重 */
  Level: number | null;
  /** 类型 */
  Type: string | null;
  /** 来源 */
  Source: string | null;
  /** 攻击字段1 */
  AttackChain: string | null;
  /** 攻击字段2 */
  AttackId: string | null;
  /** 关注点 */
  Concerns: ConcernInfo[] | null;
  /** 1：已防御，0,2：仅检测(0:告警类 1:拦截类 2:放行类 ) */
  Action: number | null;
  /** 0/空：未知，1：未成功，2：成功 */
  AttackResult: number | null;
  /** //调查状态 0/空：未启用，1：调查中，2：完成调查 */
  EventStatus: number | null;
  /** //关联事件ID */
  EventId: string | null;
  /** //处置状态 0：未关闭，1：已关闭 */
  Status: number | null;
  /** 资产名 */
  AssetName: string | null;
  /** 恶意实体 */
  ConcernMaliciousCount: number | null;
  /** 受害者实体 */
  ConcernVictimCount: number | null;
  /** 资产类型 */
  VictimAssetType: string | null;
  /** 告警子类 */
  SubType: string | null;
  /** 攻击技术名字 */
  AttackName: string | null;
  /** 外网ip */
  AssetPublicIp: string[] | null;
  /** 攻击战术名称 */
  AttackTactic: string | null;
  /** 资产子网 */
  VictimAssetSub: string | null;
  /** 资产vpc */
  VictimAssetVpc?: string | null;
  /** 时间戳 */
  Timestamp?: string | null;
  /** 资产组名 */
  AssetGroupName?: string[] | null;
  /** 资产项目名 */
  AssetProjectName?: string | null;
  /** 失陷资产内容 */
  VictimAssetContent?: string[] | null;
  /** 错误报告状态 */
  WrongReportStatus?: number | null;
  /** 错误报告Id */
  WrongReportConditionId?: number | null;
}

/** 资产类型 */
declare interface Asset {
  /** 资产类型 */
  AssetType: string;
  /** 名字 */
  Name: string;
  /** 区域 */
  AssetRegionName: string;
  /** 所属网络 */
  AssetVpcid: string;
  /** 主机类型 */
  InstanceType: string;
  /** 主机状态 */
  InstanceState: string;
  /** 引擎版本 */
  EngineVersion: string;
  /** 数据库标识 */
  Id: string;
  /** 标签 */
  Tag: Tag[];
  /** 配置风险统计数 */
  AssetCspmRiskNum: number;
  /** 主机IP */
  PublicIpAddresses: string[];
  /** 资产唯一标识 */
  AssetUniqid: string;
  /** 付费类型 */
  ChargeType: string;
  /** 安全事件统计数 */
  AssetEventNum: number;
  /** 漏洞统计数 */
  AssetVulNum: number;
  /** 主机IP内网 */
  PrivateIpAddresses: string[];
  /** 所属分组 */
  GroupName: string;
  /** 发现时间 */
  SsaAssetDiscoverTime: string | null;
  /** 下线时间 */
  SsaAssetDeleteTime: string | null;
  /** 是否是新增资产 */
  IsNew: boolean | null;
  /** 所属子网 */
  AssetSubnetId: string | null;
  /** 子网名称 */
  AssetSubnetName: string | null;
  /** vpc名称 */
  AssetVpcName: string | null;
  /** 集群类型 */
  ClusterType: number | null;
  /** 命名空间 */
  NameSpace: string | null;
  /** 负载均衡实例的网络类型 */
  LoadBalancerType: string | null;
  /** 负载均衡实例的vip列表 */
  LoadBalancerVips: string[] | null;
  /** ipv6信息 */
  AssetIpv6: string[] | null;
  /** ssh端口暴露风险 */
  SSHRisk: string | null;
  /** rdp端口暴露风险 */
  RDPRisk: string | null;
  /** 资产失陷事件风险 */
  EventRisk: string | null;
}

/** 资产详情信息 */
declare interface AssetDetail {
  /** 资产类型 */
  AssetType: string;
  /** 名字 */
  Name: string;
  /** 区域 */
  Region: string;
  /** 所属网络 */
  VpcId: string;
  /** 主机类型 */
  InstanceType: string;
  /** 主机状态 */
  InstanceState: string;
  /** 主机IP-公网 */
  PublicIpAddresses: string[];
  /** 引擎版本 */
  EngineVersion: string;
  /** 标识 */
  Id: string;
  /** 标签 */
  Tag: Tag[];
  /** 内网IP地址 */
  Vip: string | null;
  /** 状态 */
  Status: number | null;
  /** 负载均衡示例的vip列表 */
  LoadBalancerVips: string[] | null;
  /** 账号ID */
  Uin: number | null;
  /** 创建时间 */
  CreationDate: string | null;
  /** 访问域名 */
  Domain: string | null;
  /** 资产唯一id */
  AssetUniqid: string;
  /** 关联实例 */
  InstanceId: string | null;
  /** 配置硬盘类型 */
  DiskType: string | null;
  /** 配置硬盘大小 */
  DiskSize: number | null;
  /** 云硬盘/证书状态 */
  AssetStatus: string | null;
  /** 证书类型 */
  CertType: string | null;
  /** 所属项目 */
  ProjectName: string | null;
  /** 到期时间 */
  CertEndTime: string | null;
  /** nosql引擎/版本 */
  ProductType: number | null;
  /** 主机IP-内网 */
  PrivateIpAddresses: string[];
  /** 证书有效期 */
  ValidityPeriod: string | null;
  /** 分组名称 */
  GroupName: string | null;
  /** 端口服务数组 */
  Port: string[] | null;
  /** 配置风险数组 */
  RiskConfig: string[] | null;
  /** 相关待处理事件 */
  Event: string | null;
  /** 相关待处理漏洞 */
  Vul: string | null;
  /** 资产发现时间 */
  SsaAssetDiscoverTime: string | null;
  /** 所属子网 */
  AssetSubnetId: string | null;
  /** 子网名称 */
  AssetSubnetName: string | null;
  /** vpc名称 */
  AssetVpcName: string | null;
  /** 集群类型 */
  ClusterType: number | null;
  /** 命名空间 */
  NameSpace: string | null;
  /** 创建时间 */
  AssetCreateTime: string | null;
  /** 负载均衡网络类型 */
  LoadBalancerType: string | null;
  /** ipv6信息 */
  AssetIpv6: string[] | null;
  /** ssh风险 */
  SSHRisk: string | null;
  /** rdp风险 */
  RDPRisk: string | null;
  /** 安全事件风险 */
  EventRisk: string | null;
  /** 漏洞数量 */
  AssetVulNum: number | null;
  /** 资产事件 */
  AssetEventNum?: number | null;
  /** cspm风险 */
  AssetCspmRiskNum?: number | null;
  /** 资产删除时间 */
  SsaAssetDeleteTime?: string | null;
  /** 费用类型 */
  ChargeType?: string | null;
  /** 地域 */
  AssetRegionName?: string | null;
  /** vpc信息 */
  AssetVpcid?: string | null;
}

/** 资产列表 */
declare interface AssetList {
  /** 总数 */
  Total: number;
  /** 资产数组 */
  List: Asset[];
}

/** 资产查询过滤参数 */
declare interface AssetQueryFilter {
  /** 查询参数 */
  Filter?: QueryFilter[];
  /** 查询连接符，1 and ，2 or */
  Logic?: number;
}

/** 资产测绘结果统计 */
declare interface AssetTypeStatistic {
  /** 资产类型 */
  AssetType: string | null;
  /** 统计计数 */
  AssetCount: number | null;
}

/** 攻击事件 */
declare interface AttackEvent {
  /** 来源ip */
  SsaSrcIp?: string | null;
  /** 目标ip */
  SsaDstIp?: string | null;
  /** 目标省份 */
  SsaDstProvince?: string | null;
  /** 目标城市 */
  SsaDstCity?: string | null;
  /** 目标国家 */
  SsaDstCountry?: string | null;
  /** 来源省份 */
  SsaSrcProvince?: string | null;
  /** 来源国家 */
  SsaSrcCountry?: string | null;
  /** 来源城市 */
  SsaSrcCity?: string | null;
}

/** es聚合数据类型 */
declare interface Bucket {
  /** key */
  Key: string;
  /** 数量 */
  Count: number;
}

/** 检查项资产组每一项 */
declare interface CheckAssetItem {
  /** 检查项下资产组ID */
  Id: number;
  /** 资产组实例id */
  Instid: string;
  /** 处置跳转URL */
  Url: string;
  /** 检查任务id */
  Taskid: string;
  /** 检查结果 */
  Result: number;
  /** 更新时间 */
  Updatetime: string;
  /** 标签 */
  Tag: string | null;
  /** 是否忽略 */
  IsIgnore: number;
  /** 检查状态 */
  IsChecked: number;
  /** 资产组信息 */
  AssetInfo: string;
  /** 资产组ES的_id */
  AssetId: string;
  /** 详情 */
  Detail?: string;
  /** 备注内容 */
  Remarks?: string;
}

/** 云安全配置检查项详情 */
declare interface CheckConfigDetail {
  /** 检查项Id */
  Id: string;
  /** 检查项名称 */
  CheckName: string;
  /** 检查项内容 */
  Content: string;
  /** 检查项处置方案 */
  Method: string;
  /** 检查项帮助文档 */
  Doc: string;
  /** 未通过总数 */
  ErrorCount: number;
  /** 是否通过检查 */
  IsPass: number;
  /** 通过检查项 */
  SafeCount: number;
  /** 忽略检查项 */
  IgnoreCount: number;
  /** 风险检查项 */
  RiskCount: number;
  /** 检查项英文 */
  NameEn: string;
  /** 检查项类型 */
  AssetType: string;
  /** res_count */
  ResCount: number;
  /** 是否忽略 */
  IsIgnore: number;
}

/** 等保资产组记录 */
declare interface ComplianceCheckDetail {
  /** 检查项ID */
  Id: string;
  /** 检查项类别 */
  Category: string;
  /** 检查项类型 */
  Type: string;
  /** 不通过总数 */
  ErrorCount: number;
  /** 检查项英文名 */
  NameEn: string;
  /** 检查项名称 */
  CheckName: string;
  /** 检查项处置方式 */
  Method: string;
  /** 帮助文档 */
  Doc: string;
  /** 通过总数 */
  SafeCount: number;
  /** 检查项检查内容 */
  Content: string;
  /** 是否通过检测 */
  IsPass: number;
  /** 忽略总数 */
  IgnoreCount: number;
  /** 风险总数 */
  RiskCount: number;
  /** 最近一次检测时间 */
  LastCheckTime: string | null;
  /** 资产组类型 */
  AssetType: string;
  /** res_count */
  ResCount: number;
  /** 检查项UUID */
  UUID: string;
  /** 标准项 */
  StandardItem: string | null;
  /** 章节 */
  Chapter: string | null;
  /** 资产类型描述 */
  AssetTypeDesc: string | null;
  /** 是否忽略 */
  IsIgnore?: number | null;
  /** 风险项 */
  RiskItem?: string | null;
  /** 合规检查项完整名称 */
  Title?: string | null;
}

/** 关注点类型 */
declare interface ConcernInfo {
  /** 关注点类型 */
  ConcernType?: number | null;
  /** 实体类型 1: 非云上IP，2: 云上IP，3: 域名，4: IP，5: 文件，6: 进程 */
  EntityType?: number | null;
  /** 关注点 */
  Concern?: string | null;
  /** 最近数量 */
  StatisticsCount?: number | null;
  /** IP国家 */
  IpCountry?: string | null;
  /** IP省份 */
  IpProvince?: string | null;
  /** 结果 */
  Result?: string | null;
  /** 置信度 */
  Confidence?: number | null;
  /** 服务商 */
  IpIsp?: string | null;
  /** 是否基础设施 */
  IpInfrastructure?: string | null;
  /** 威胁类型 */
  ThreatType?: string[] | null;
  /** 威胁团伙 */
  Groups?: string[] | null;
  /** 状态威胁情报接口 */
  Status?: string | null;
  /** 恶意标签 */
  Tags?: string[] | null;
  /** 资产类型 */
  VictimAssetType?: string | null;
  /** 资产名 */
  VictimAssetName?: string | null;
  /** 注册者 */
  DomainRegistrant?: string | null;
  /** 注册机构 */
  DomainRegisteredInstitution?: string | null;
  /** 注册时间 */
  DomainRegistrationTime?: string | null;
  /** 文件名 */
  FileName?: string | null;
  /** MD5 */
  FileMd5?: string | null;
  /** 病毒名 */
  VirusName?: string | null;
  /** 文件路径 */
  FilePath?: string | null;
  /** 文件大小 */
  FileSize?: string | null;
  /** 进程名 */
  ProcName?: string | null;
  /** 进程ID */
  Pid?: string | null;
  /** 进程路径 */
  ProcPath?: string | null;
  /** 用户名 */
  ProcUser?: string | null;
  /** 已防御 */
  DefendedCount?: number | null;
  /** 仅检测 */
  DetectedCount?: number | null;
  /** 可疑关注点字段 */
  SearchData?: string | null;
  /** 可疑关注点字段 */
  IpCountryIso?: string | null;
  /** 可疑关注点字段 */
  IpProvinceIso?: string | null;
  /** 可疑关注点字段 */
  IpCity?: string | null;
  /** 可疑关注点字段 */
  EventSubType?: string | null;
}

/** 资产测绘对象 */
declare interface DataAssetMapping {
  /** 资产主IP地址(公网IP) */
  AssetIp: string | null;
  /** 资产名称 */
  AssetName: string | null;
  /** 资产ID(各模块间通用) */
  Instid: string | null;
  /** 资产类型 */
  AssetType: string | null;
  /** 资产可用区(英文) */
  AssetRegionEn: string | null;
  /** 资产可用区(中文) */
  AssetRegionCn: string | null;
  /** 资产所属网络 */
  AssetNetwork: string | null;
  /** 资产运行状态(英文) */
  AssetStatusEn: string | null;
  /** 资产运行状态(中文) */
  AssetStatusCn: string | null;
  /** 是否白名单：“True”为白名单不测绘，默认“False”正常测绘 */
  IsWhite: string | null;
  /** 资产测绘状态(“unstart”未开始/“running”测绘中/“finish”已完成/“abandoned”任务中止) */
  Status: string | null;
  /** 最近更新时间 */
  Time: string | null;
  /** 资产标签 */
  Tag: Tag[] | null;
  /** 资产组 */
  Group: string[] | null;
  /** 端口和服务信息 */
  Port: string | null;
  /** 组件信息 */
  Component: string | null;
  /** 资产实例类型 */
  AssetInstanceType: string | null;
  /** 资产是否是内网类型 */
  IsIntranet: number | null;
}

/** 检查项详情对象 */
declare interface DataCheck {
  /** 检查项唯一标识符uuid */
  Id: string;
  /** 检查项名称 */
  Name: string;
  /** 检查项类型 */
  Type: string;
  /** 最近一次检查时间 */
  LastCheckTime: string | null;
  /** 初始未检测状态0, 已通过为1，未通过为2 */
  Status: number | null;
  /** 0-未忽略,1-已忽略 */
  IsIgnored: number | null;
  /** 有风险的资源总数，未通过数量 */
  RiskCount: number | null;
  /** 0-检测中,1-结束检测 */
  IsChecked: number | null;
  /** 总资产数 */
  AssetTotal: number | null;
  /** 备注内容 */
  Remarks: string | null;
}

/** 合规检查项详情对象 */
declare interface DataCompliance {
  /** 等保唯一标识符 */
  Id: string;
  /** 检查项唯一标识符 */
  CheckItemId: string;
  /** 检查项名称 */
  Name: string;
  /** 检查项资产类型 */
  AssetType: string;
  /** 检查项类型 */
  Type: string;
  /** 检查项类别 */
  Category: string;
  /** 检查项标准项 */
  StandardItem: string;
  /** 检查项章节号 */
  Chapter: string;
  /** 最近一次检查时间 */
  LastCheckTime: string | null;
  /** 初始未检测状态0, 已通过为1，未通过为2 */
  Status: number | null;
  /** 有风险的资源总数，未通过数量 */
  RiskCount: number | null;
  /** 0-检测中,1-结束检测 */
  IsChecked: number | null;
  /** 检查项风险项 */
  RiskItem: string | null;
  /** 0-未忽略,1-已忽略 */
  IsIgnored: number | null;
  /** 等保检查项完整名称 */
  Title: string | null;
  /** 资产总数 */
  AssetTotal: number | null;
  /** 忽略内容 */
  Remarks: string | null;
}

/** 事件列表对象 */
declare interface DataEvent {
  /** Md5值 */
  OldIdMd5: string | null;
  /** 事件名称 */
  EventName: string | null;
  /** 事件类型一级分类 */
  EventType1: number | null;
  /** 事件类型二级分类 */
  EventType2: number | null;
  /** 事件等级 */
  Level: number | null;
  /** 处理状态 */
  Status: number | null;
  /** 源ip */
  SrcIp: string | null;
  /** 目的ip */
  DstIp: string | null;
  /** 事件发生时间 */
  Time: string | null;
  /** 目的端口 */
  Dstport: number | null;
  /** 资产ip */
  AssetIp: string | null;
  /** 资产名称 */
  AssetName: string | null;
  /** 安全事件唯一标识符 */
  SsaEventUniqid: string | null;
  /** 资产id */
  AssetId: string | null;
  /** 事件来源 */
  Source: string | null;
  /** 索引 */
  Index: string | null;
  /** 索引中的唯一标识符 */
  Id: string | null;
  /** 受影响资产是否已下线 */
  IsAssetDeleted: string | null;
  /** 源ip所属地 */
  SsaSrcCountry: string | null;
  /** 目的ip所属地 */
  SsaDstCountry: string | null;
  /** 木马类型的描述信息 */
  SsaDescription: string | null;
  /** 供给链类型 */
  SsaAttackChain: string | null;
  /** 受影响组件 */
  RuleComponents: string;
  /** 资产ip */
  AssetIpAll: string[] | null;
  /** 资产类型 */
  AssetType: string | null;
  /** cvm类型资产的公网ip */
  PublicIpAddresses: string[] | null;
  /** cvm类型资产的内网ip */
  PrivateIpAddresses: string[];
  /** 事件响应状态 */
  SoarResponseStatus: number | null;
  /** 事件最近响应时间 */
  SoarResponseTime: number | null;
  /** 事件建议处理状态 */
  SoarSuggestStatus: number | null;
  /** 事件剧本类型 */
  SoarPlaybookType: string | null;
  /** 剧本任务Id */
  SoarRunId: string | null;
  /** 事件Id */
  SsaEventId: string | null;
  /** 是否新接入的云防事件 */
  IsNewCfwEvent: boolean | null;
  /** 出入站方向 */
  Direction: string | null;
}

/** 云安全配置检查项列表 */
declare interface DescribeSocCheckItemListRspRsp {
  /** 检查项详情列表 */
  List: SocCheckItemV1[] | null;
  /** 检查项总数 */
  Total: number | null;
}

/** 检查项结果详情列表 */
declare interface DescribeSocCheckResultListRspRsp {
  /** 具体检查项详情 */
  List: SocCheckResult[];
  /** 检查结果总数 */
  Total: number;
  /** 低危个数 */
  LowTotal: number;
  /** 中危个数 */
  MiddleTotal: number;
  /** 高危个数 */
  HighTotal: number;
  /** 正常个数 */
  NormalTotal: number;
}

/** 域名列表 */
declare interface DomainInfo {
  /** 域名 */
  Domain: string | null;
  /** 解析地址 */
  ResolveAddr: string[] | null;
  /** 地域 */
  Region: string[] | null;
  /** 资产类型 */
  AssetType: string[] | null;
  /** 漏洞风险 */
  RiskVulCount: number | null;
  /** 敏感内容 */
  SensitiveCount: number | null;
  /** 挂马暗链 */
  HorseLinkCount: number | null;
  /** 网页篡改 */
  WebModifyCount: number;
  /** 上次扫描时间 */
  ScanTime: string;
  /** 最近发现时间 */
  DiscoverTime: string;
  /** 扫描次数 */
  ScanTaskCount: number;
  /** 端口 */
  PortRisk: number;
  /** 弱口令 */
  WeekPwdCount: number;
  /** 资产归属 */
  AssetLocation: string | null;
  /** 网络风险 */
  NetworkRisk: number | null;
  /** 网络攻击 */
  NetworkAttack: number | null;
  /** bot访问 */
  BotVisit: number | null;
  /** 网络访问 */
  NetworkAccess: number | null;
  /** 资产创建时间 */
  CreateTime: string | null;
  /** waf状态 */
  WafStatus: number | null;
  /** 最近扫描时间 */
  LastScanTime: string | null;
  /** 资产id */
  AssetId: string[] | null;
  /** 资产名 */
  AssetName: string[] | null;
  /** 类别 */
  SourceType: string | null;
  /** 是否核心资产 */
  IsNotCore: number | null;
  /** 是否云外资产 */
  IsCloud: number | null;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 过滤键的名称。 */
  Name?: string;
  /** 一个或者多个过滤值。 */
  Values?: string[];
  /** 是否需要精确匹配 */
  ExactMatch?: boolean;
}

/** DataSaEventPub */
declare interface ListDataSaEventPub {
  /** 时间 */
  Time: string;
  /** 安全事件1级分类 */
  EventType1: number;
  /** 安全事件2级分类 */
  EventType2: number;
  /** 安全事件名称 */
  EventName: string;
  /** 风险等级 */
  Level: number;
  /** 安全事件状态 */
  Status: number;
  /** 攻击源ip */
  SrcIp: string;
  /** 攻击目标ip */
  DstIp: string;
  /** 攻击目标端口 */
  DstPort: number;
  /** 受影响资产 */
  Asset: string;
  /** 私有字段和公有字段映射的原始采集数据唯一标识的MD5值 */
  OldIdMd5: string;
}

/** 测绘记录 */
declare interface MappingResult {
  /** 资产名称 */
  AssetName: string | null;
  /** 公网ip */
  AssetIp: string | null;
  /** 内网ip */
  PrivateIp: string | null;
  /** 资产id */
  AssetId: string | null;
  /** 协议 */
  Protocol: string | null;
  /** 端口 */
  Port: string | null;
  /** 服务 */
  Service: string | null;
  /** 组件 */
  Component: string | null;
  /** 进程 */
  Process: string | null;
  /** 操作系统 */
  OS: string | null;
  /** 测绘时间 */
  LastMappingTime: string | null;
  /** 处置建议 */
  DisposalRecommendations: string | null;
  /** 处置建议详情 */
  DisposalRecommendationDetails: string | null;
  /** 资产类型 */
  AssetType: string | null;
  /** 域名 */
  Domain: string | null;
  /** 测绘状态 */
  MappingStatus: number | null;
  /** 区域 */
  Region: string | null;
  /** 安全防护状态 */
  SecurityStatus: SecurityStatus[] | null;
  /** 处置建议 */
  DisposalRecommendation?: number | null;
  /** 测绘类型 */
  MappingType?: string | null;
}

/** DataSaEventPub */
declare interface ObjDataSaEventPub {
  /** Count */
  Count: number;
  /** List */
  List: ListDataSaEventPub[];
}

/** 过滤条件 */
declare interface QueryFilter {
  /** 过滤key */
  FilterKey?: string;
  /** 操作符(只支持32位) */
  FilterOperatorType?: number;
  /** 过滤value */
  FilterValue?: string;
}

/** 过滤 */
declare interface QueryFilterV3 {
  /** 过滤条件 */
  Filter?: QueryFilter;
  /** 有无子条件 */
  HasSub?: boolean;
  /** 查询条件 */
  SubFilters?: QueryFilter[];
  /** 逻辑操作(只支持32位) */
  Logic?: number;
}

/** 排序的字段 */
declare interface QuerySort {
  /** 排序字段 */
  SortKey: string;
  /** 顺序，1升序2降序 */
  SortType: number;
}

/** 测绘结果 */
declare interface Results {
  /** 测绘类型统计 */
  Statistics: AssetTypeStatistic[] | null;
  /** 测绘结果列表 */
  Result: MappingResult[] | null;
  /** 测绘任务数 */
  TaskCount: number | null;
  /** 最大测绘任务数 */
  TaskMaxCount: number | null;
}

/** 查询_通用字段 */
declare interface SaDivulgeDataQueryPub {
  /** Id信息 */
  Id: string;
  /** 用户Uin */
  Uin: string;
  /** 用户AppId */
  AppId: string;
  /** 事件名称 */
  EventName: string;
  /** 监控源 0:全部 1:GitHub 2:暗网 默认值1 */
  DivulgeSoure: string;
  /** 受影响资产 */
  Asset: string;
  /** 命中主题集下的规则topic名称 */
  RuleName: string;
  /** 命中主题集下的规则topic唯一id */
  RuleId: string;
  /** 命中主题集下的自定义规则策略 */
  RuleWord: string;
  /** 扫描监测url */
  ScanUrl: string;
  /** 扫描监测命中次数 */
  ScanCount: string;
  /** 风险等级 -1:未知 1:低危 2:中危 3:高危 4:严重 */
  Level: string;
  /** 安全事件处理状态 -1:未知 1:待处理 2:已处理 3:误报 4:已忽略 5:已知晓 6:已信任 */
  Status: string;
  /** 安全事件发生时间 */
  EventTime: string;
  /** 事件插入时间 */
  InsertTime: string;
  /** 事件更新时间 */
  UpdateTime: string;
}

/** 自定义泄露事件列表 */
declare interface SaDivulgeDataQueryPubList {
  /** 数据条数 */
  Count: number;
  /** 自定义泄露事件列表 */
  List: SaDivulgeDataQueryPub[];
}

/** 设置_泄露监测产品监测扫描规则策略 */
declare interface SaDivulgeScanRuleSetList {
  /** Value */
  Value: string;
  /** Code */
  Code: number;
  /** Message */
  Message: string;
}

/** 安全放回状态 */
declare interface SecurityStatus {
}

/** SocCheckItem类型 */
declare interface SocCheckItem {
  /** 名字 */
  Name: string | null;
  /** 唯一id */
  LevelId: string | null;
  /** 成功数 */
  SuccessCount: number | null;
  /** 失败数 */
  FailCount: number | null;
}

/** 检查项相关信息 */
declare interface SocCheckItemV1 {
  /** 检查项id */
  CheckId: string | null;
  /** 配置要求 */
  Name: string | null;
  /** 检查项类型 */
  Type: string | null;
  /** 检查对象 */
  AssetType: string | null;
  /** 默认风险等级 2:低危 3:中危 4:高危 */
  Level: number | null;
  /** 相关规范 */
  Standard: string | null;
  /** 检查项是否付费 1:免费 2:付费 */
  IsFree?: number | null;
}

/** 云安全配置检测结果 */
declare interface SocCheckResult {
  /** 检查项的uuid */
  CheckId: string;
  /** 配置要求 */
  Name: string;
  /** 检查项的类型 */
  Type: string;
  /** 检查对象 */
  AssetType: string;
  /** 策略名 */
  PloyName: string;
  /** 策略id */
  PloyId: number;
  /** 正常,低危,中危,高危 */
  Result: string;
  /** 不符合数 */
  FailAssetNum: number;
  /** 总数 */
  TotalAssetNum: number;
  /** 处置建议url链接 */
  DealUrl: string;
}

/** 返回结构 */
declare interface SocComplianceInfoResp {
  /** 合格项 */
  Items: SocComplianceItem[] | null;
}

/** soc合规信息 */
declare interface SocComplianceItem {
  /** 唯一id */
  Item: string | null;
  /** 描述 */
  Description: string | null;
  /** 分类 */
  StandardItem: string | null;
  /** 结果 */
  Result: number | null;
  /** 建议 */
  Suggestion: string | null;
  /** 产品字符 */
  ProStr: string | null;
  /** 产品数组 */
  Production: SocProductionItem[] | null;
  /** 配置项数组 */
  CheckItems: SocCheckItem[] | null;
}

/** soc产品购买信息 */
declare interface SocProductionItem {
  /** 名字 */
  Name: string | null;
  /** 标识 */
  Index: number | null;
  /** 状态 */
  Status: number | null;
}

/** 标签 */
declare interface Tag {
  /** 数据库标识 */
  Fid?: number;
  /** 标签名称字段 */
  Fname?: string;
}

/** 漏洞管理漏洞数据 */
declare interface VulItem {
  /** 标识 */
  Id: string;
  /** 漏洞名称 */
  VulName: string;
  /** 漏洞类型 */
  Type: number;
  /** 风险等级 */
  Level: number;
  /** 处理状态 */
  Status: number;
  /** 发现时间 */
  Time: string;
  /** 影响资产数 */
  ImpactAssetNum: number;
  /** 影响资产id */
  ImpactAsset: string;
  /** 影响资产名称 */
  ImpactAssetName: string;
  /** 漏洞描述 */
  VulDetail: string;
  /** 参考链接 */
  VulRefLink: string;
  /** Md5值 */
  OldIdMd5: string;
  /** 漏洞唯一标识 */
  UniqId: string;
  /** 忽略时间 */
  OperateTime: string;
  /** 受影响资产是否下线 */
  IsAssetDeleted: string | null;
  /** 漏洞首次发现时间 */
  DiscoverTime: string;
  /** 主机源信息标识符 */
  OriginId: number;
  /** 资产区域 */
  Region: string | null;
  /** 资产所属网络 */
  Vpcid: string | null;
  /** 资产类型 */
  AssetType: string | null;
  /** 资产子类型 */
  AssetSubType: string | null;
  /** 资产IP */
  AssetIpAll: string[] | null;
  /** cvm类型的公网ip */
  PublicIpAddresses: string[] | null;
  /** cvm类型的内网ip */
  PrivateIpAddresses: string[] | null;
  /** 漏洞来源 */
  VulSource: string | null;
  /** 影响URL */
  AffectedUrl: string | null;
  /** 资产归属 */
  SsaAssetCategory: number | null;
  /** 影响url */
  VulUrl: string | null;
  /** 是否扫描 */
  IsOpen: boolean | null;
  /** 御知主机id */
  YzHostId: number | null;
  /** 漏洞描述 */
  VulRepairPlan: string | null;
  /** 漏洞文件路径 */
  VulPath: string | null;
}

/** 漏洞管理漏洞列表 */
declare interface VulList {
  /** 列表 */
  List: VulItem[];
  /** 总数 */
  Total: number;
}

declare interface DescribeAlarmStatRequest {
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface DescribeAlarmStatResponse {
  /** 威胁告警信息 */
  Data?: AlarmInfoRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetDetailListRequest {
  /** 查询条件，可支持的查询字段：AssetUniqid,AssetName,AssetIpAll,AssetVpcid,Tag */
  Filter?: AssetQueryFilter[];
  /** 排序条件，可支持的排序字段：AssetCspmRiskNum,AssetVulNum,AssetEventNum,SsaAssetDiscoverTime */
  Sorter?: QuerySort[];
  /** 风险标签 */
  RiskTags?: string[];
  /** 标签 */
  Tags?: string[];
  /** 页 */
  PageIndex?: number;
  /** 页大小 */
  PageSize?: number;
}

declare interface DescribeAssetDetailListResponse {
  /** 业务数据 */
  Data: AssetDetail[] | null;
  /** 总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetDetailRequest {
  /** 查询过滤参数 */
  Params: string;
}

declare interface DescribeAssetDetailResponse {
  /** 资产详情 */
  Data: AssetDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetListRequest {
  /** 查询过滤参数 */
  Params: string;
}

declare interface DescribeAssetListResponse {
  /** 资产列表 */
  AssetList: AssetList;
  /** 聚合数据 */
  AggregationData: AggregationObj[];
  /** 命名空间数据 */
  NamespaceData: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetsMappingListRequest {
  /** 请求参数 */
  Params: string;
}

declare interface DescribeAssetsMappingListResponse {
  /** 资产测绘列表 */
  Data?: DataAssetMapping[];
  /** 资产测绘总数 */
  TotalCount?: number;
  /** 类型分类统计数量 */
  CountByType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCheckConfigAssetListRequest {
  /** 检查项UUID */
  Id: string;
  /** 页码 */
  Offset: number;
  /** 每页列表数 */
  Limit: number;
  /** db搜索条件 */
  Search?: Filter[];
  /** ES过滤条件 */
  Filter?: Filter[];
}

declare interface DescribeCheckConfigAssetListResponse {
  /** 资产列表总数 */
  Total?: number;
  /** 资产列表项 */
  CheckAssetsList?: CheckAssetItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCheckConfigDetailRequest {
  /** 检查项ID */
  Id: string;
}

declare interface DescribeCheckConfigDetailResponse {
  /** 检查项详情 */
  CheckConfigDetail?: CheckConfigDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComplianceAssetListRequest {
  /** 页码 */
  Offset: number;
  /** 每页数量 */
  Limit: number;
  /** 检查项uuid */
  Id: string;
  /** 过滤条件 */
  Filter?: Filter[];
  /** 查询条件 */
  Search?: Filter[];
}

declare interface DescribeComplianceAssetListResponse {
  /** 资产组列表 */
  CheckAssetsList?: CheckAssetItem[];
  /** 资产组列表总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComplianceDetailRequest {
  /** 检查项uuid */
  Id: string;
}

declare interface DescribeComplianceDetailResponse {
  /** 合规管理检查项详情 */
  CheckConfigDetail?: ComplianceCheckDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComplianceListRequest {
  /** 搜索过滤条件 */
  Filter?: string;
}

declare interface DescribeComplianceListResponse {
  /** 检查项列表 */
  Data?: DataCompliance[];
  /** 总检查资产数 */
  AssetTotalNum?: number | null;
  /** 总检查项 */
  ConfigTotalNum?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigListRequest {
  /** 搜索过滤条件 */
  Filter?: string;
}

declare interface DescribeConfigListResponse {
  /** 检查项列表 */
  Data?: DataCheck[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainListRequest {
  /** 起始，从0开始(只支持32位) */
  Offset?: number;
  /** limit,最大值200(只支持32位) */
  Limit?: number;
  /** 资产大类，根据此字段时返回不同的子结构,AssetBasicType(只支持32位) */
  AssetBasicType?: number;
  /** 过滤条件 */
  Filter?: QueryFilterV3[];
  /** 排序 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 导出字段 */
  Field?: string[];
  /** 时间范围(只支持32位) */
  TimeRange?: number;
  /** 逻辑字段(只支持32位) */
  Logic?: number;
  /** 聚合字段 */
  GroupByField?: string;
  /** - */
  Task?: string;
  /** 0:cfw 1:vss 2.soc 3.waf 4.cwp */
  RequestFrom?: number;
}

declare interface DescribeDomainListResponse {
  /** 无 */
  Total?: number;
  /** 无 */
  DomainInfoCollection?: DomainInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventDetailRequest {
  /** 事件索引名 */
  Index?: string;
  /** 事件id */
  Id?: string;
  /** 事件来源 */
  Source?: string;
  /** 事件子类型 */
  SubEventType?: number;
  /** 事件名称 */
  Name?: string;
}

declare interface DescribeEventDetailResponse {
  /** 事件详情 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLeakDetectionListRequest {
  /** 筛选条件 */
  Filters: Filter[];
  /** 每页数量 */
  Limit: number;
  /** 页码 */
  Page: number;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DescribeLeakDetectionListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 数据列表 */
  List?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMappingResultsRequest {
  /** 过滤条件，FilterKey 取值范围：AssetId，AssetIp，PrivateIp，Protocol，Service，OS，Process，Component，AssetType，Domain，Port，LastMappingTime，MappingType，Disposal，Vpc */
  Filter?: AssetQueryFilter[];
  /** 排序条件，SortKey取值范围：CreateTime，LastMappingTime */
  Sorter?: QuerySort[];
  /** 页码 */
  PageIndex?: number;
  /** 页大小，默认大小20 */
  PageSize?: number;
}

declare interface DescribeMappingResultsResponse {
  /** 总记录数 */
  Total: number | null;
  /** 列表 */
  Data: Results | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSafetyEventListRequest {
  /** 搜索过滤查询参数 */
  Filter: string;
  /** 限制数目 */
  Limit: number;
  /** 页偏移 */
  Offset: number;
  /** 排序列名 */
  Order?: string;
  /** 排序升降：desc-降序 asc-升序 */
  By?: string;
  /** 开始查询时间 */
  StartTime?: string;
  /** 结束查询时间 */
  EndTime?: string;
  /** 是否过滤响应时间 */
  IsFilterResponseTime?: boolean;
}

declare interface DescribeSafetyEventListResponse {
  /** 事件列表 */
  List?: DataEvent[];
  /** 事件总条数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSocAlertDetailsRequest {
  /** 告警id */
  AlertId: string;
  /** 告警时间，取Timestamp字段 */
  AlertTimestamp?: string;
}

declare interface DescribeSocAlertDetailsResponse {
  /** 返回详情数据 */
  Data: AlertDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSocAlertListRequest {
  /** 页大小 */
  PageSize: number;
  /** 页码 */
  PageIndex: number;
  /** 1:急需关注 2.重保监控 3.全量告警 */
  Scenes: number;
  /** 查询参数 */
  Filter?: QueryFilter[];
  /** 排序参数 */
  Sorter?: QuerySort[];
  /** 是否导出；默认为否，如量级超过1000，则使用单独的导出接口 */
  ExportFlag?: boolean;
}

declare interface DescribeSocAlertListResponse {
  /** 业务数据 */
  Data?: AlertListData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSocCheckItemListRequest {
  /** 查询参数,可支持的排序字段:Name,Type,AssetType,Level,Standard,IsFree */
  Filter?: QueryFilter[];
  /** 排序参数:无 */
  Sorter?: QuerySort[];
  /** 当前页码数据，默认值为10 */
  PageSize?: number;
  /** 当前页面索引，默认值为0 */
  PageIndex?: number;
}

declare interface DescribeSocCheckItemListResponse {
  /** 检查项列表 */
  Data: DescribeSocCheckItemListRspRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSocCheckResultListRequest {
  /** 查询参数,可支持的查询参数：Name,Type,AssetType,Result,PloyName,PloyId */
  Filter?: QueryFilter[];
  /** 排序参数,可支持的排序参数：CheckStatus,RiskCount */
  Sorter?: QuerySort[];
  /** 当前页码数据，默认值为10 */
  PageSize?: number;
  /** 当前页面索引，默认值为0 */
  PageIndex?: number;
  /** 资产id */
  AssetId?: string;
}

declare interface DescribeSocCheckResultListResponse {
  /** 无 */
  Data: DescribeSocCheckResultListRspRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSocCspmComplianceRequest {
}

declare interface DescribeSocCspmComplianceResponse {
  /** 数据 */
  Data: SocComplianceInfoResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDetailRequest {
  /** 漏洞唯一标识符 */
  UniqId: string;
  /** 查看详情来源 */
  Source?: string;
}

declare interface DescribeVulDetailResponse {
  /** 漏洞类型 */
  VulType: number | null;
  /** 漏洞子类型 */
  SubVulType: string | null;
  /** cvss分数 */
  CvssScore: string | null;
  /** cvss值 */
  Cvss: string | null;
  /** cve编号 */
  Cve: string | null;
  /** cnvd编号 */
  Cnvd: string | null;
  /** cnnvd编号 */
  Cnnvd: string | null;
  /** 描述 */
  Desc: string | null;
  /** 参考 */
  Reference: string | null;
  /** 修复意见 */
  Repair: string | null;
  /** 披露时间 */
  ReleaseTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 漏洞名称 */
  Name: string | null;
  /** 等级 */
  Level: number | null;
  /** 状态 */
  Status: number | null;
  /** 受影响资产唯一标识 */
  ImpactAsset: string | null;
  /** 受影响资产名称 */
  ImpactAssetName: string | null;
  /** 受影响资产是否已删除 */
  IsAssetDeleted: boolean | null;
  /** 漏洞来源 */
  Source: string | null;
  /** 漏洞URL */
  VulUrl: string | null;
  /** 资产归属 */
  SsaAssetCategory: number | null;
  /** 资产文件路径 */
  VulPath: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulListRequest {
  /** 查询过滤参数:(json序列化的结果） */
  Params: string;
}

declare interface DescribeVulListResponse {
  /** 漏洞列表 */
  Data?: VulList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SaDivulgeDataQueryPubRequest {
  /** 模糊查询字段(针对appid或者uin) */
  QueryKey: string;
  /** 安全事件名称 */
  EventName: string;
  /** 监控源 0:全部 1:GitHub 2:暗网 默认值1 */
  DivulgeSoure: string;
  /** 受影响资产 */
  Asset: string;
  /** 命中主题集下的规则topic名称 */
  RuleName: string;
  /** 命中主题集下的规则topic唯一id */
  RuleId: string;
  /** 风险等级 -1:未知 1:低危 2:中危 3:高危 4:严重 */
  Level: string;
  /** 安全事件处理状态 -1:未知 1:待处理 2:已处理 3:误报 4:已忽略 5:已知晓 6:已信任 */
  Status: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 查询起始地址 */
  Offset: string;
  /** 查询个数 */
  Limit: string;
}

declare interface SaDivulgeDataQueryPubResponse {
  /** 自定义泄露事件列表 */
  Data: SaDivulgeDataQueryPubList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SaDivulgeScanRuleMutateRequest {
  /** Id */
  Id: string;
  /** DivulgeSoure */
  DivulgeSoure: string;
  /** DivulgeSoureUrl */
  DivulgeSoureUrl: string;
  /** RuleName */
  RuleName: string;
  /** RuleWord */
  RuleWord: string;
  /** ScanStatus */
  ScanStatus: string;
  /** DivulgeType */
  DivulgeType?: string;
  /** RepairAdvice */
  RepairAdvice?: string;
}

declare interface SaDivulgeScanRuleMutateResponse {
  /** Data */
  Data?: SaDivulgeScanRuleSetList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SaEventPubRequest {
  /** 受影响资产 */
  Asset: string;
  /** 安全事件名称 */
  EventName: string;
  /** 安全事件1级分类，-1:未知 0:全部 1:攻击事件 2:侦查事件 3:僵木蠕毒 4:违规策略 */
  EventType1: number;
  /** 安全事件2级分类，-1:未知 0:全部 1:DDOS事件 2:Web攻击 3:木马 4:异地登录 5:密码破解 */
  EventType2: number;
  /** 风险等级，-1:未知 0:全部 1:低危 2:中危 3:高危 4:严重，可多选，如：1,2 */
  Level: string;
  /** 安全事件状态，-1:未知 0:全部 1:待处理 2:已处理 3:误报 4:已忽略 5:已知晓 6:已信任 */
  Status: number;
  /** 开始时间 */
  StartTime: string;
  /** 查询起始地址 */
  Offset: number;
  /** 查询个数 */
  Limit: number;
  /** 结束时间 */
  EndTime: string;
  /** 私有字段和公有字段映射的原始采集数据唯一标识的MD5值 */
  OldIdMd5: string;
}

declare interface SaEventPubResponse {
  /** DataSaEventPub */
  DataSaEventPub?: ObjDataSaEventPub;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ssa 安全运营中心} */
declare interface Ssa {
  (): Versions;
  /** 用户威胁告警信息 {@link DescribeAlarmStatRequest} {@link DescribeAlarmStatResponse} */
  DescribeAlarmStat(data?: DescribeAlarmStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmStatResponse>;
  /** 资产安全页资产详情 {@link DescribeAssetDetailRequest} {@link DescribeAssetDetailResponse} */
  DescribeAssetDetail(data: DescribeAssetDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDetailResponse>;
  /** 获取资产列表 {@link DescribeAssetDetailListRequest} {@link DescribeAssetDetailListResponse} */
  DescribeAssetDetailList(data?: DescribeAssetDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDetailListResponse>;
  /** 资产安全资产列表 {@link DescribeAssetListRequest} {@link DescribeAssetListResponse} */
  DescribeAssetList(data: DescribeAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetListResponse>;
  /** 资产测绘-测绘列表 {@link DescribeAssetsMappingListRequest} {@link DescribeAssetsMappingListResponse} */
  DescribeAssetsMappingList(data: DescribeAssetsMappingListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetsMappingListResponse>;
  /** 云安全配置管理资产组列表 {@link DescribeCheckConfigAssetListRequest} {@link DescribeCheckConfigAssetListResponse} */
  DescribeCheckConfigAssetList(data: DescribeCheckConfigAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckConfigAssetListResponse>;
  /** 云安全配置检查项详情 {@link DescribeCheckConfigDetailRequest} {@link DescribeCheckConfigDetailResponse} */
  DescribeCheckConfigDetail(data: DescribeCheckConfigDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckConfigDetailResponse>;
  /** 合规管理-资产列表 {@link DescribeComplianceAssetListRequest} {@link DescribeComplianceAssetListResponse} */
  DescribeComplianceAssetList(data: DescribeComplianceAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetListResponse>;
  /** 合规管理检查项详情 {@link DescribeComplianceDetailRequest} {@link DescribeComplianceDetailResponse} */
  DescribeComplianceDetail(data: DescribeComplianceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceDetailResponse>;
  /** 合规管理总览页检查项列表 {@link DescribeComplianceListRequest} {@link DescribeComplianceListResponse} */
  DescribeComplianceList(data?: DescribeComplianceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceListResponse>;
  /** 云配置检查项总览页检查项列表 {@link DescribeConfigListRequest} {@link DescribeConfigListResponse} */
  DescribeConfigList(data?: DescribeConfigListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigListResponse>;
  /** 域名列表 {@link DescribeDomainListRequest} {@link DescribeDomainListResponse} */
  DescribeDomainList(data?: DescribeDomainListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainListResponse>;
  /** 获取安全事件详情 {@link DescribeEventDetailRequest} {@link DescribeEventDetailResponse} */
  DescribeEventDetail(data?: DescribeEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventDetailResponse>;
  /** 获取泄露列表 {@link DescribeLeakDetectionListRequest} {@link DescribeLeakDetectionListResponse} */
  DescribeLeakDetectionList(data: DescribeLeakDetectionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLeakDetectionListResponse>;
  /** 获取测绘列表 {@link DescribeMappingResultsRequest} {@link DescribeMappingResultsResponse} */
  DescribeMappingResults(data?: DescribeMappingResultsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMappingResultsResponse>;
  /** 获取安全事件列表 {@link DescribeSafetyEventListRequest} {@link DescribeSafetyEventListResponse} */
  DescribeSafetyEventList(data: DescribeSafetyEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSafetyEventListResponse>;
  /** 告警详情 {@link DescribeSocAlertDetailsRequest} {@link DescribeSocAlertDetailsResponse} */
  DescribeSocAlertDetails(data: DescribeSocAlertDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSocAlertDetailsResponse>;
  /** 告警列表 {@link DescribeSocAlertListRequest} {@link DescribeSocAlertListResponse} */
  DescribeSocAlertList(data: DescribeSocAlertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSocAlertListResponse>;
  /** 云安全配置检查项列表 {@link DescribeSocCheckItemListRequest} {@link DescribeSocCheckItemListResponse} */
  DescribeSocCheckItemList(data?: DescribeSocCheckItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSocCheckItemListResponse>;
  /** 云安全配置检查项结果列表 {@link DescribeSocCheckResultListRequest} {@link DescribeSocCheckResultListResponse} */
  DescribeSocCheckResultList(data?: DescribeSocCheckResultListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSocCheckResultListResponse>;
  /** 合规详情 {@link DescribeSocCspmComplianceRequest} {@link DescribeSocCspmComplianceResponse} */
  DescribeSocCspmCompliance(data?: DescribeSocCspmComplianceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSocCspmComplianceResponse>;
  /** 漏洞列表-漏洞详情 {@link DescribeVulDetailRequest} {@link DescribeVulDetailResponse} */
  DescribeVulDetail(data: DescribeVulDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDetailResponse>;
  /** 漏洞管理-漏洞列表 {@link DescribeVulListRequest} {@link DescribeVulListResponse} */
  DescribeVulList(data: DescribeVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulListResponse>;
  /** 查询【通用字段】【泄露监测数据列表】 {@link SaDivulgeDataQueryPubRequest} {@link SaDivulgeDataQueryPubResponse} */
  SaDivulgeDataQueryPub(data: SaDivulgeDataQueryPubRequest, config?: AxiosRequestConfig): AxiosPromise<SaDivulgeDataQueryPubResponse>;
  /** 设置【泄露监测产品监测扫描规则策略】 {@link SaDivulgeScanRuleMutateRequest} {@link SaDivulgeScanRuleMutateResponse} */
  SaDivulgeScanRuleMutate(data: SaDivulgeScanRuleMutateRequest, config?: AxiosRequestConfig): AxiosPromise<SaDivulgeScanRuleMutateResponse>;
  /** 【安全事件】【通用字段信息】 {@link SaEventPubRequest} {@link SaEventPubResponse} */
  SaEventPub(data: SaEventPubRequest, config?: AxiosRequestConfig): AxiosPromise<SaEventPubResponse>;
}

export declare type Versions = ["2018-06-08"];

export default Ssa;
