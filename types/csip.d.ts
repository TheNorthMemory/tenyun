/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 集群pod列表 */
declare interface AssetClusterPod {
  /** 租户id */
  AppId?: number;
  /** 租户uin */
  Uin?: string;
  /** 租户昵称 */
  Nick?: string;
  /** 地域 */
  Region?: string | null;
  /** pod id */
  AssetId?: string;
  /** pod名称 */
  AssetName?: string;
  /** pod创建时间 */
  InstanceCreateTime?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
  /** 状态 */
  Status?: string | null;
  /** 集群id */
  ClusterId?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
  /** 主机id */
  MachineId?: string | null;
  /** 主机名 */
  MachineName?: string | null;
  /** pod ip */
  PodIp?: string | null;
  /** 关联service数 */
  ServiceCount?: number | null;
  /** 关联容器数 */
  ContainerCount?: number | null;
  /** 公网ip */
  PublicIp?: string | null;
  /** 内网ip */
  PrivateIp?: string | null;
  /** 是否核心：1:核心，2:非核心 */
  IsCore?: number | null;
}

/** 资产视角的端口风险对象 */
declare interface AssetViewPortRisk {
  /** 端口 */
  Port?: number;
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级 */
  Level?: string;
  /** 资产类型 */
  InstanceType?: string;
  /** 协议 */
  Protocol?: string;
  /** 组件 */
  Component?: string;
  /** 服务 */
  Service?: string;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 处置建议,0保持现状、1限制访问、2封禁端口 */
  Suggestion?: number;
  /** 状态，0未处理、1已处置、2已忽略 */
  Status?: number;
  /** 资产唯一id */
  Id?: string;
  /** 前端索引 */
  Index?: string;
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户昵称 */
  Nick?: string | null;
  /** 用户uin */
  Uin?: string | null;
  /** 来源 */
  From?: string;
}

/** 资产视角的漏洞风险对象 */
declare interface AssetViewVULRisk {
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级 */
  Level?: string;
  /** 资产类型 */
  InstanceType?: string;
  /** 组件 */
  Component?: string;
  /** 服务 */
  Service?: string;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 状态，0未处理、1已处置、2已忽略 */
  Status?: number;
  /** 资产唯一id */
  Id?: string;
  /** 前端索引 */
  Index?: string;
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户昵称 */
  Nick?: string | null;
  /** 用户uin */
  Uin?: string | null;
  /** 漏洞类型 */
  VULType?: string;
  /** 端口 */
  Port?: string;
  /** 描述 */
  Describe?: string;
  /** 版本名 */
  AppName?: string;
  /** 相关信息 */
  References?: string;
  /** 版本 */
  AppVersion?: string;
  /** 漏洞url */
  VULURL?: string;
  /** 漏洞名称 */
  VULName?: string;
  /** cve */
  CVE?: string;
  /** 修复建议 */
  Fix?: string;
  /** pocid */
  POCId?: string;
  /** 来源 */
  From?: string;
  /** 主机版本 */
  CWPVersion?: number;
  /** 是否支持修复 */
  IsSupportRepair?: boolean;
  /** 是否支持扫描 */
  IsSupportDetect?: boolean;
  /** 实例uuid */
  InstanceUUID?: string;
  /** 负载 */
  Payload?: string;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number | null;
}

/** 主机资产信息 */
declare interface CVMAssetVO {
  /** 资产id */
  AssetId?: string | null;
  /** 资产名 */
  AssetName?: string | null;
  /** 资产类型 */
  AssetType?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 防护状态 */
  CWPStatus?: number | null;
  /** 资产创建时间 */
  AssetCreateTime?: string | null;
  /** 公网ip */
  PublicIp?: string | null;
  /** 私网ip */
  PrivateIp?: string | null;
  /** vpc id */
  VpcId?: string | null;
  /** vpc 名 */
  VpcName?: string | null;
  /** appid信息 */
  AppId?: number | null;
  /** 用户uin */
  Uin?: string | null;
  /** 昵称 */
  NickName?: string | null;
  /** 可用区 */
  AvailableArea?: string | null;
  /** 是否核心 */
  IsCore?: number | null;
  /** 子网id */
  SubnetId?: string | null;
  /** 子网名 */
  SubnetName?: string | null;
  /** uuid */
  InstanceUuid?: string | null;
  /** qquid */
  InstanceQUuid?: string | null;
  /** os名 */
  OsName?: string | null;
  /** 分区 */
  PartitionCount?: number | null;
  /** cpu信息 */
  CPUInfo?: string | null;
  /** cpu大小 */
  CPUSize?: number | null;
  /** cpu负载 */
  CPULoad?: string | null;
  /** 内存大小 */
  MemorySize?: string | null;
  /** 内存负载 */
  MemoryLoad?: string | null;
  /** 硬盘大小 */
  DiskSize?: string | null;
  /** 硬盘负载 */
  DiskLoad?: string | null;
  /** 账号数 */
  AccountCount?: string | null;
  /** 进程数 */
  ProcessCount?: string | null;
  /** 软件应用 */
  AppCount?: string | null;
  /** 监听端口 */
  PortCount?: number | null;
  /** 网络攻击 */
  Attack?: number | null;
  /** 网络访问 */
  Access?: number | null;
  /** 网络拦截 */
  Intercept?: number | null;
  /** 入向峰值带宽 */
  InBandwidth?: string | null;
  /** 出向峰值带宽 */
  OutBandwidth?: string | null;
  /** 入向累计流量 */
  InFlow?: string | null;
  /** 出向累计流量 */
  OutFlow?: string | null;
  /** 最近扫描时间 */
  LastScanTime?: string | null;
  /** 恶意主动外联 */
  NetWorkOut?: number | null;
  /** 端口风险 */
  PortRisk?: number | null;
  /** 漏洞风险 */
  VulnerabilityRisk?: number | null;
  /** 配置风险 */
  ConfigurationRisk?: number | null;
  /** 扫描任务数 */
  ScanTask?: number | null;
  /** 标签 */
  Tag?: Tag[] | null;
  /** memberId */
  MemberId?: string | null;
  /** os全称 */
  Os?: string | null;
  /** 风险服务暴露 */
  RiskExposure?: number | null;
  /** 模拟攻击工具状态。0代表未安装，1代表已安装，2代表已离线 */
  BASAgentStatus?: number | null;
}

/** db资产输出字段 */
declare interface DBAssetVO {
  /** 资产id */
  AssetId?: string | null;
  /** 资产名 */
  AssetName?: string | null;
  /** 资产类型 */
  AssetType?: string | null;
  /** vpcid */
  VpcId?: string | null;
  /** vpc标签 */
  VpcName?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 域名 */
  Domain?: string | null;
  /** 资产创建时间 */
  AssetCreateTime?: string | null;
  /** 最近扫描时间 */
  LastScanTime?: string | null;
  /** 配置风险 */
  ConfigurationRisk?: number | null;
  /** 网络攻击 */
  Attack?: number | null;
  /** 网络访问 */
  Access?: number | null;
  /** 扫描任务 */
  ScanTask?: number | null;
  /** 用户appid */
  AppId?: number | null;
  /** 用户uin */
  Uin?: string | null;
  /** 昵称别名 */
  NickName?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 标签 */
  Tag?: Tag[] | null;
  /** 内网ip */
  PrivateIp?: string | null;
  /** 公网ip */
  PublicIp?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 是否核心 */
  IsCore?: number | null;
}

/** db资产详情 */
declare interface DbAssetInfo {
  /** 云防状态 */
  CFWStatus?: number | null;
  /** 资产id */
  AssetId?: string | null;
  /** vpc信息 */
  VpcName?: string | null;
  /** 资产类型 */
  AssetType?: string | null;
  /** 公网ip */
  PublicIp?: string | null;
  /** 私网ip */
  PrivateIp?: string | null;
  /** 地域 */
  Region?: string | null;
  /** vpc信息 */
  VpcId?: string | null;
  /** 资产名 */
  AssetName?: string | null;
  /** 云防保护版本 */
  CFWProtectLevel?: number | null;
  /** tag信息 */
  Tag?: Tag[] | null;
}

/** 域名资产 */
declare interface DomainAssetVO {
  /** 资产id */
  AssetId?: string[] | null;
  /** 资产名 */
  AssetName?: string[] | null;
  /** 资产类型 */
  AssetType?: string[] | null;
  /** 地域 */
  Region?: string[] | null;
  /** Waf状态 */
  WAFStatus?: number | null;
  /** 资产创建时间 */
  AssetCreateTime?: string | null;
  /** Appid */
  AppId?: number | null;
  /** 账号id */
  Uin?: string | null;
  /** 账号名称 */
  NickName?: string | null;
  /** 是否核心 */
  IsCore?: number | null;
  /** 是否云上资产 */
  IsCloud?: number | null;
  /** 网络攻击 */
  Attack?: number | null;
  /** 网络访问 */
  Access?: number | null;
  /** 网络拦截 */
  Intercept?: number | null;
  /** 入站峰值带宽 */
  InBandwidth?: string | null;
  /** 出站峰值带宽 */
  OutBandwidth?: string | null;
  /** 入站累计流量 */
  InFlow?: string | null;
  /** 出站累计流量 */
  OutFlow?: string | null;
  /** 最近扫描时间 */
  LastScanTime?: string | null;
  /** 端口风险 */
  PortRisk?: number | null;
  /** 漏洞风险 */
  VulnerabilityRisk?: number | null;
  /** 配置风险 */
  ConfigurationRisk?: number | null;
  /** 扫描任务 */
  ScanTask?: number | null;
  /** 域名 */
  SubDomain?: string | null;
  /** 解析ip */
  SeverIp?: string[] | null;
  /** boi访问数量 */
  BotCount?: number | null;
  /** 弱口令风险 */
  WeakPassword?: number | null;
  /** 内容风险 */
  WebContentRisk?: number | null;
  /** tag标签 */
  Tag?: Tag[] | null;
  /** 关联实例类型 */
  SourceType?: string | null;
  /** memberiD */
  MemberId?: string | null;
  /** cc攻击 */
  CCAttack?: number | null;
  /** web攻击 */
  WebAttack?: number | null;
}

/** 列表查询接口采用新filter 接口，直接传给后台供后台查询过滤 */
declare interface Filter {
  /** 查询数量限制 */
  Limit?: number | null;
  /** 查询偏移位置 */
  Offset?: number | null;
  /** 排序采用升序还是降序 升:asc 降 desc */
  Order?: string | null;
  /** 需排序的字段 */
  By?: string | null;
  /** 过滤的列及内容 */
  Filters?: WhereFilter[] | null;
  /** 可填无， 日志使用查询时间 */
  StartTime?: string | null;
  /** 可填无， 日志使用查询时间 */
  EndTime?: string | null;
}

/** 过滤数据对象 */
declare interface FilterDataObject {
  /** 英文翻译 */
  Value?: string;
  /** 中文翻译 */
  Text?: string;
}

/** ip列表 */
declare interface IpAssetListVO {
  /** 资产id */
  AssetId?: string | null;
  /** 资产name */
  AssetName?: string | null;
  /** 资产类型 */
  AssetType?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 云防状态 */
  CFWStatus?: number | null;
  /** 资产创建时间 */
  AssetCreateTime?: string | null;
  /** 公网ip */
  PublicIp?: string | null;
  /** 公网ip类型 */
  PublicIpType?: number | null;
  /** vpc */
  VpcId?: string | null;
  /** vpc名 */
  VpcName?: string | null;
  /** appid */
  AppId?: number | null;
  /** 用户uin */
  Uin?: string | null;
  /** 名称 */
  NickName?: string | null;
  /** 核心 */
  IsCore?: number | null;
  /** 云上 */
  IsCloud?: number | null;
  /** 网络攻击 */
  Attack?: number | null;
  /** 网络访问 */
  Access?: number | null;
  /** 网络拦截 */
  Intercept?: number | null;
  /** 入向带宽 */
  InBandwidth?: string | null;
  /** 出向带宽 */
  OutBandwidth?: string | null;
  /** 入向流量 */
  InFlow?: string | null;
  /** 出向流量 */
  OutFlow?: string | null;
  /** 最近扫描时间 */
  LastScanTime?: string | null;
  /** 端口风险 */
  PortRisk?: number | null;
  /** 漏洞风险 */
  VulnerabilityRisk?: number | null;
  /** 配置风险 */
  ConfigurationRisk?: number | null;
  /** 扫描任务 */
  ScanTask?: number | null;
  /** 弱口令 */
  WeakPassword?: number | null;
  /** 内容风险 */
  WebContentRisk?: number | null;
  /** 标签 */
  Tag?: Tag[] | null;
  /** eip主键 */
  AddressId?: string | null;
  /** memberid信息 */
  MemberId?: string | null;
  /** 风险服务暴露 */
  RiskExposure?: number | null;
}

/** 扫描任务详情 */
declare interface ScanTaskInfo {
  /** 任务日志Id */
  TaskId: string | null;
  /** 任务日志名称 */
  TaskName: string | null;
  /** 任务状态码：1等待开始 2正在扫描 3扫描出错 4扫描完成 */
  Status: number | null;
  /** 任务进度 */
  Progress: number | null;
  /** 对应的展示时间 */
  TaskTime: string | null;
  /** 报表id */
  ReportId: string | null;
  /** 报表名称 */
  ReportName: string | null;
  /** 扫描计划，0-周期任务,1-立即扫描,2-定时扫描,3-自定义 */
  ScanPlan: number | null;
  /** 关联的资产数 */
  AssetCount: number | null;
  /** APP ID */
  AppId?: string | null;
  /** 用户主账户ID */
  UIN?: string | null;
  /** 用户名称 */
  UserName?: string | null;
}

/** 子网资产 */
declare interface SubnetAsset {
  /** appid */
  AppId?: string;
  /** uin */
  Uin?: string;
  /** 资产ID */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 区域 */
  Region?: string;
  /** 私有网络id */
  VpcId?: string;
  /** 私有网络名 */
  VpcName?: string;
  /** 标签 */
  Tag?: Tag[] | null;
  /** 昵称 */
  Nick?: string;
  /** cidr */
  CIDR?: string;
  /** 可用区 */
  Zone?: string;
  /** cvm数 */
  CVM?: number;
  /** 可用ip数 */
  AvailableIp?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 配置风险 */
  ConfigureRisk?: number;
  /** 任务数 */
  ScanTask?: number;
  /** 最后扫描时间 */
  LastScanTime?: string;
  /** 是否核心 */
  IsCore?: number | null;
}

/** 标签 */
declare interface Tag {
  /** 标签名称 */
  Name: string;
  /** 标签内容 */
  Value: string;
}

/** 任务高级配置 */
declare interface TaskAdvanceCFG {
  /** 漏洞风险高级配置 */
  VulRisk?: TaskCenterVulRiskInputParam[] | null;
  /** 弱口令风险高级配置 */
  WeakPwdRisk?: TaskCenterWeakPwdRiskInputParam[] | null;
  /** 配置风险高级配置 */
  CFGRisk?: TaskCenterCFGRiskInputParam[] | null;
}

/** 任务资产项 */
declare interface TaskAssetObject {
  /** 资产名 */
  AssetName?: string | null;
  /** 资产类型 */
  InstanceType?: string | null;
  /** 资产分类 */
  AssetType?: string | null;
  /** ip/域名/资产id，数据库id等 */
  Asset?: string;
  /** 地域 */
  Region?: string | null;
}

/** 配置风险高级配置 */
declare interface TaskCenterCFGRiskInputParam {
  /** 检测项ID */
  ItemId: string | null;
  /** 是否开启，0-不开启，1-开启 */
  Enable: number | null;
  /** 资源类型 */
  ResourceType: string | null;
}

/** 漏洞风险高级配置 */
declare interface TaskCenterVulRiskInputParam {
  /** 风险ID */
  RiskId: string | null;
  /** 是否开启，0-不开启，1-开启 */
  Enable: number | null;
}

/** 弱口令风险高级配置 */
declare interface TaskCenterWeakPwdRiskInputParam {
  /** 检测项ID */
  CheckItemId: number | null;
  /** 是否开启，0-不开启，1-开启 */
  Enable: number | null;
}

/** vpc列表数据 */
declare interface Vpc {
  /** 子网(只支持32位) */
  Subnet?: number;
  /** 互通vpc(只支持32位) */
  ConnectedVpc?: number;
  /** 资产id */
  AssetId?: string;
  /** region区域 */
  Region?: string;
  /** 云服务器(只支持32位) */
  CVM?: number;
  /** 标签 */
  Tag?: Tag[] | null;
  /** dns域名 */
  DNS?: string[] | null;
  /** 资产名称 */
  AssetName?: string;
  /** cidr网段 */
  CIDR?: string;
  /** 资产创建时间 */
  CreateTime?: string;
  /** appid */
  AppId?: string;
  /** uin */
  Uin?: string;
  /** 昵称 */
  Nick?: string;
}

/** 过滤条件 */
declare interface WhereFilter {
  /** 过滤的项 */
  Name: string | null;
  /** 过滤的值 */
  Values: string[] | null;
  /** 精确匹配填 7 模糊匹配填9 ， 兼容 中台定的结构 */
  OperatorType?: number | null;
}

declare interface AddNewBindRoleUserRequest {
}

declare interface AddNewBindRoleUserResponse {
  /** 0成功，其他失败 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssetBaseInfoResponse {
  /** vpc-id */
  VpcId?: string | null;
  /** vpc-name */
  VpcName?: string | null;
  /** 资产名 */
  AssetName?: string | null;
  /** 操作系统 */
  Os?: string | null;
  /** 公网ip */
  PublicIp?: string | null;
  /** 内网ip */
  PrivateIp?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 资产类型 */
  AssetType?: string | null;
  /** 资产id */
  AssetId?: string | null;
  /** 账号数量 */
  AccountNum?: number | null;
  /** 端口数量 */
  PortNum?: number | null;
  /** 进程数量 */
  ProcessNum?: number | null;
  /** 软件应用数量 */
  SoftApplicationNum?: number | null;
  /** 数据库数量 */
  DatabaseNum?: number | null;
  /** Web应用数量 */
  WebApplicationNum?: number | null;
  /** 服务数量 */
  ServiceNum?: number | null;
  /** web框架数量 */
  WebFrameworkNum?: number | null;
  /** Web站点数量 */
  WebSiteNum?: number | null;
  /** Jar包数量 */
  JarPackageNum?: number | null;
  /** 启动服务数量 */
  StartServiceNum?: number | null;
  /** 计划任务数量 */
  ScheduledTaskNum?: number | null;
  /** 环境变量数量 */
  EnvironmentVariableNum?: number | null;
  /** 内核模块数量 */
  KernelModuleNum?: number | null;
  /** 系统安装包数量 */
  SystemInstallationPackageNum?: number | null;
  /** 剩余防护时长 */
  SurplusProtectDay?: number | null;
  /** 客户端是否安装 1 已安装 0 未安装 */
  CWPStatus?: number | null;
  /** 标签 */
  Tag?: Tag[] | null;
  /** 防护等级 */
  ProtectLevel?: string | null;
  /** 防护时长 */
  ProtectedDay?: number | null;
}

declare interface CreateDomainAndIpRequest {
  /** - */
  Content: string[];
}

declare interface CreateDomainAndIpResponse {
  /** 返回创建成功的数量 */
  Data?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRiskCenterScanTaskRequest {
  /** 任务名称 */
  TaskName: string;
  /** 0-全扫，1-指定资产扫，2-排除资产扫，3-手动填写扫；1和2则Assets字段必填，3则SelfDefiningAssets必填 */
  ScanAssetType: number;
  /** 扫描项目；port/poc/weakpass/webcontent/configrisk */
  ScanItem: string[];
  /** 0-周期任务,1-立即扫描,2-定时扫描,3-自定义；0,2,3则ScanPlanContent必填 */
  ScanPlanType: number;
  /** 扫描资产信息列表 */
  Assets?: TaskAssetObject[];
  /** 扫描计划详情 */
  ScanPlanContent?: string;
  /** ip/域名/url数组 */
  SelfDefiningAssets?: string[];
  /** 高级配置 */
  TaskAdvanceCFG?: TaskAdvanceCFG;
  /** 体检模式，0-标准模式，1-快速模式，2-高级模式，默认标准模式 */
  TaskMode?: number;
}

declare interface CreateRiskCenterScanTaskResponse {
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCVMAssetInfoRequest {
  /** - */
  AssetId: string;
}

declare interface DescribeCVMAssetInfoResponse {
  /** - */
  Data?: AssetBaseInfoResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCVMAssetsRequest {
  /** - */
  Filter?: Filter;
}

declare interface DescribeCVMAssetsResponse {
  /** - */
  Total?: number | null;
  /** - */
  Data?: CVMAssetVO[] | null;
  /** 地域列表 */
  RegionList?: FilterDataObject[] | null;
  /** 防护状态 */
  DefenseStatusList?: FilterDataObject[] | null;
  /** vpc枚举 */
  VpcList?: FilterDataObject[] | null;
  /** 资产类型枚举 */
  AssetTypeList?: FilterDataObject[] | null;
  /** 操作系统枚举 */
  SystemTypeList?: FilterDataObject[] | null;
  /** ip列表 */
  IpTypeList?: FilterDataObject[] | null;
  /** appid列表 */
  AppIdList?: FilterDataObject[] | null;
  /** 可用区列表 */
  ZoneList?: FilterDataObject[] | null;
  /** os列表 */
  OsList?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterPodAssetsRequest {
  /** 过滤 */
  Filter?: Filter;
}

declare interface DescribeClusterPodAssetsResponse {
  /** 列表 */
  Data?: AssetClusterPod[];
  /** 总数 */
  TotalCount?: number;
  /** 集群pod状态枚举 */
  PodStatusList?: FilterDataObject[];
  /** 命名空间枚举 */
  NamespaceList?: FilterDataObject[];
  /** 地域枚举 */
  RegionList?: FilterDataObject[];
  /** 租户枚举 */
  AppIdList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDbAssetInfoRequest {
  /** 资产id */
  AssetId: string;
}

declare interface DescribeDbAssetInfoResponse {
  /** db资产详情 */
  Data?: DbAssetInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDbAssetsRequest {
  /** - */
  Filter?: Filter;
}

declare interface DescribeDbAssetsResponse {
  /** 总数 */
  Total?: number | null;
  /** 资产总数 */
  Data?: DBAssetVO[] | null;
  /** 地域枚举 */
  RegionList?: FilterDataObject[] | null;
  /** 资产类型枚举 */
  AssetTypeList?: FilterDataObject[] | null;
  /** Vpc枚举 */
  VpcList?: FilterDataObject[] | null;
  /** Appid枚举 */
  AppIdList?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainAssetsRequest {
  /** - */
  Filter?: Filter;
}

declare interface DescribeDomainAssetsResponse {
  /** - */
  Total?: number | null;
  /** - */
  Data?: DomainAssetVO[] | null;
  /** 防护状态列表 */
  DefenseStatusList?: FilterDataObject[] | null;
  /** 资产归属地列表 */
  AssetLocationList?: FilterDataObject[] | null;
  /** 资产类型列表 */
  SourceTypeList?: FilterDataObject[] | null;
  /** 地域列表 */
  RegionList?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicIpAssetsRequest {
  /** filte过滤条件 */
  Filter?: Filter;
}

declare interface DescribePublicIpAssetsResponse {
  /** 列表 */
  Data?: IpAssetListVO[] | null;
  /** 总数 */
  Total?: number;
  /** 资产归属地 */
  AssetLocationList?: FilterDataObject[] | null;
  /** ip列表枚举 */
  IpTypeList?: FilterDataObject[] | null;
  /** 地域列表枚举 */
  RegionList?: FilterDataObject[] | null;
  /** 防护枚举 */
  DefenseStatusList?: FilterDataObject[] | null;
  /** 资产类型枚举 */
  AssetTypeList?: FilterDataObject[] | null;
  /** AppId枚举 */
  AppIdList?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCenterAssetViewPortRiskListRequest {
  /** 过滤内容 */
  Filter?: Filter;
}

declare interface DescribeRiskCenterAssetViewPortRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 资产视角的配置风险列表 */
  Data?: AssetViewPortRisk[];
  /** 状态列表 */
  StatusLists?: FilterDataObject[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 建议列表 */
  SuggestionLists?: FilterDataObject[];
  /** 资产类型列表 */
  InstanceTypeLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCenterAssetViewVULRiskListRequest {
  /** 过滤内容 */
  Filter?: Filter;
}

declare interface DescribeRiskCenterAssetViewVULRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 资产视角的漏洞风险列表 */
  Data?: AssetViewVULRisk[];
  /** 状态列表 */
  StatusLists?: FilterDataObject[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 漏洞类型列表 */
  VULTypeLists?: FilterDataObject[];
  /** 资产类型列表 */
  InstanceTypeLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanReportListRequest {
  /** 列表过滤条件 */
  Filter?: Filter;
}

declare interface DescribeScanReportListResponse {
  /** 总条数 */
  TotalCount?: number | null;
  /** 任务日志列表 */
  Data?: ScanTaskInfo[] | null;
  /** 主账户ID列表 */
  UINList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubnetAssetsRequest {
  /** 过滤参数 */
  Filter?: Filter;
}

declare interface DescribeSubnetAssetsResponse {
  /** 列表 */
  Data?: SubnetAsset[];
  /** 总数 */
  TotalCount?: number;
  /** 地域列表 */
  RegionList?: FilterDataObject[];
  /** vpc列表 */
  VpcList?: FilterDataObject[];
  /** appid列表 */
  AppIdList?: FilterDataObject[];
  /** 可用区列表 */
  ZoneList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcAssetsRequest {
  /** 过滤参数 */
  Filter?: Filter;
}

declare interface DescribeVpcAssetsResponse {
  /** 列表 */
  Data?: Vpc[];
  /** 总数 */
  TotalCount?: number;
  /** vpc列表 */
  VpcList?: FilterDataObject[];
  /** 地域列表 */
  RegionList?: FilterDataObject[];
  /** appid列表 */
  AppIdList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Csip 云安全一体化平台} */
declare interface Csip {
  (): Versions;
  /** csip角色授权绑定接口 {@link AddNewBindRoleUserRequest} {@link AddNewBindRoleUserResponse} */
  AddNewBindRoleUser(data?: AddNewBindRoleUserRequest, config?: AxiosRequestConfig): AxiosPromise<AddNewBindRoleUserResponse>;
  /** 创建域名、ip相关信息 {@link CreateDomainAndIpRequest} {@link CreateDomainAndIpResponse} */
  CreateDomainAndIp(data: CreateDomainAndIpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainAndIpResponse>;
  /** 创建风险中心扫描任务 {@link CreateRiskCenterScanTaskRequest} {@link CreateRiskCenterScanTaskResponse} */
  CreateRiskCenterScanTask(data: CreateRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRiskCenterScanTaskResponse>;
  /** cvm详情 {@link DescribeCVMAssetInfoRequest} {@link DescribeCVMAssetInfoResponse} */
  DescribeCVMAssetInfo(data: DescribeCVMAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetInfoResponse>;
  /** cvm列表 {@link DescribeCVMAssetsRequest} {@link DescribeCVMAssetsResponse} */
  DescribeCVMAssets(data?: DescribeCVMAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetsResponse>;
  /** 集群pod列表 {@link DescribeClusterPodAssetsRequest} {@link DescribeClusterPodAssetsResponse} */
  DescribeClusterPodAssets(data?: DescribeClusterPodAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPodAssetsResponse>;
  /** db资产详情 {@link DescribeDbAssetInfoRequest} {@link DescribeDbAssetInfoResponse} */
  DescribeDbAssetInfo(data: DescribeDbAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetInfoResponse>;
  /** 资产列表 {@link DescribeDbAssetsRequest} {@link DescribeDbAssetsResponse} */
  DescribeDbAssets(data?: DescribeDbAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetsResponse>;
  /** 域名列表 {@link DescribeDomainAssetsRequest} {@link DescribeDomainAssetsResponse} */
  DescribeDomainAssets(data?: DescribeDomainAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAssetsResponse>;
  /** 公网列表 {@link DescribePublicIpAssetsRequest} {@link DescribePublicIpAssetsResponse} */
  DescribePublicIpAssets(data?: DescribePublicIpAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicIpAssetsResponse>;
  /** 获取资产视角的端口风险列表 {@link DescribeRiskCenterAssetViewPortRiskListRequest} {@link DescribeRiskCenterAssetViewPortRiskListResponse} */
  DescribeRiskCenterAssetViewPortRiskList(data?: DescribeRiskCenterAssetViewPortRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewPortRiskListResponse>;
  /** 获取资产视角的漏洞风险列表 {@link DescribeRiskCenterAssetViewVULRiskListRequest} {@link DescribeRiskCenterAssetViewVULRiskListResponse} */
  DescribeRiskCenterAssetViewVULRiskList(data?: DescribeRiskCenterAssetViewVULRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewVULRiskListResponse>;
  /** 获取扫描报告列表 {@link DescribeScanReportListRequest} {@link DescribeScanReportListResponse} */
  DescribeScanReportList(data?: DescribeScanReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanReportListResponse>;
  /** 子网列表 {@link DescribeSubnetAssetsRequest} {@link DescribeSubnetAssetsResponse} */
  DescribeSubnetAssets(data?: DescribeSubnetAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetAssetsResponse>;
  /** vpc列表 {@link DescribeVpcAssetsRequest} {@link DescribeVpcAssetsResponse} */
  DescribeVpcAssets(data?: DescribeVpcAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcAssetsResponse>;
}

export declare type Versions = ["2022-11-21"];

export default Csip;
