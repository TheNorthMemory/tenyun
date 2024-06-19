/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 告警下拉字段 */
declare interface AlertExtraInfo {
  /** 相关攻击事件 */
  RelateEvent?: RelatedEvent | null;
  /** 泄漏内容 */
  LeakContent?: string | null;
  /** 泄漏API */
  LeakAPI?: string | null;
  /** secretID */
  SecretID?: string | null;
  /** 命中规则 */
  Rule?: string | null;
  /** 规则描述 */
  RuleDesc?: string | null;
  /** 协议端口 */
  ProtocolPort?: string | null;
  /** 攻击内容 */
  AttackContent?: string | null;
  /** 攻击IP画像 */
  AttackIPProfile?: string | null;
  /** 攻击IP标签 */
  AttackIPTags?: string | null;
  /** 请求方式 */
  RequestMethod?: string | null;
  /** HTTP日志 */
  HttpLog?: string | null;
  /** 被攻击域名 */
  AttackDomain?: string | null;
  /** 文件路径 */
  FilePath?: string | null;
  /** user_agent */
  UserAgent?: string | null;
  /** 请求头 */
  RequestHeaders?: string | null;
  /** 登录用户名 */
  LoginUserName?: string | null;
  /** 漏洞名称 */
  VulnerabilityName?: string | null;
  /** 公共漏洞和暴露 */
  CVE?: string | null;
  /** 服务进程 */
  ServiceProcess?: string | null;
  /** 文件名 */
  FileName?: string | null;
  /** 文件大小 */
  FileSize?: string | null;
  /** 文件MD5 */
  FileMD5?: string | null;
  /** 文件最近访问时间 */
  FileLastAccessTime?: string | null;
  /** 文件修改时间 */
  FileModifyTime?: string | null;
  /** 最近访问时间 */
  RecentAccessTime?: string | null;
  /** 最近修改时间 */
  RecentModifyTime?: string | null;
  /** 病毒名 */
  VirusName?: string | null;
  /** 病毒文件标签 */
  VirusFileTags?: string | null;
  /** 行为特征 */
  BehavioralCharacteristics?: string | null;
  /** 进程名（PID） */
  ProcessNamePID?: string | null;
  /** 进程路径 */
  ProcessPath?: string | null;
  /** 进程命令行 */
  ProcessCommandLine?: string | null;
  /** 进程权限 */
  ProcessPermissions?: string | null;
  /** 执行命令 */
  ExecutedCommand?: string | null;
  /** 受影响文件名 */
  AffectedFileName?: string | null;
  /** 诱饵路径 */
  DecoyPath?: string | null;
  /** 恶意进程文件大小 */
  MaliciousProcessFileSize?: string | null;
  /** 恶意进程文件MD5 */
  MaliciousProcessFileMD5?: string | null;
  /** 恶意进程名（PID） */
  MaliciousProcessNamePID?: string | null;
  /** 恶意进程路径 */
  MaliciousProcessPath?: string | null;
  /** 恶意进程启动时间 */
  MaliciousProcessStartTime?: string | null;
  /** 命令内容 */
  CommandContent?: string | null;
  /** 启动用户 */
  StartupUser?: string | null;
  /** 用户所属组 */
  UserGroup?: string | null;
  /** 新增权限 */
  NewPermissions?: string | null;
  /** 父进程 */
  ParentProcess?: string | null;
  /** 类名 */
  ClassName?: string | null;
  /** 所属类加载器 */
  ClassLoader?: string | null;
  /** 类文件大小 */
  ClassFileSize?: string | null;
  /** 类文件MD5 */
  ClassFileMD5?: string | null;
  /** 父类名 */
  ParentClassName?: string | null;
  /** 继承接口 */
  InheritedInterface?: string | null;
  /** 注释 */
  Comment?: string | null;
  /** 载荷内容 */
  PayloadContent?: string | null;
  /** 回连地址画像 */
  CallbackAddressPortrait?: string | null;
  /** 回连地址标签 */
  CallbackAddressTag?: string | null;
  /** 进程MD5 */
  ProcessMD5?: string | null;
  /** 文件权限 */
  FilePermission?: string | null;
  /** 来源于日志分析的信息字段 */
  FromLogAnalysisData?: KeyValue[] | null;
  /** 命中探针 */
  HitProbe?: string | null;
  /** 命中蜜罐 */
  HitHoneyPot?: string | null;
  /** 命令列表 */
  CommandList?: string | null;
  /** 攻击事件描述 */
  AttackEventDesc?: string | null;
  /** 进程信息 */
  ProcessInfo?: string | null;
  /** 使用用户名&密码 */
  UserNameAndPwd?: string | null;
  /** 主机防护策略ID */
  StrategyID?: string | null;
  /** 主机防护策略名称 */
  StrategyName?: string | null;
  /** 主机防护命中策略，是策略ID和策略名称的组合 */
  HitStrategy?: string | null;
}

/** 告警中心全量告警列表数据 */
declare interface AlertInfo {
  /** 告警ID */
  ID?: string | null;
  /** 告警名称 */
  Name?: string | null;
  /** 告警来源CFW:云防火墙WAF:Web应用防火墙CWP:主机安全CSIP:云安全中心 */
  Source?: string | null;
  /** 告警等级1:提示2:低危3:中危4:高危5:严重 */
  Level?: number | null;
  /** 攻击者 */
  Attacker?: RoleInfo | null;
  /** 受害者 */
  Victim?: RoleInfo | null;
  /** 证据数据(例如攻击内容等) */
  EvidenceData?: string | null;
  /** 证据位置(例如协议端口) */
  EvidenceLocation?: string | null;
  /** 证据路径 */
  EvidencePath?: string | null;
  /** 首次告警时间 */
  CreateTime?: string | null;
  /** 最近告警时间 */
  UpdateTime?: string | null;
  /** 告警次数 */
  Count?: number | null;
  /** 紧急缓解建议 */
  UrgentSuggestion?: string | null;
  /** 根治建议 */
  RemediationSuggestion?: string | null;
  /** 处理状态0：未处置，1：已忽略，2：已处置 */
  Status?: number | null;
  /** 告警处理类型 */
  ProcessType?: string | null;
  /** 告警大类 */
  Type?: string | null;
  /** 告警小类 */
  SubType?: string | null;
  /** 下拉字段 */
  ExtraInfo?: AlertExtraInfo | null;
  /** 聚合字段 */
  Key?: string | null;
  /** 告警日期 */
  Date?: string | null;
  /** appid */
  AppID?: string | null;
  /** 账户名称 */
  NickName?: string | null;
  /** 账户ID */
  Uin?: string | null;
  /** 行为 */
  Action?: number | null;
  /** 风险排查 */
  RiskInvestigation?: string | null;
  /** 风险处置 */
  RiskTreatment?: string | null;
}

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
  /** 是否新资产 1新 */
  IsNewAsset?: number | null;
}

/** 资产扫描结构细节 */
declare interface AssetInfoDetail {
  /** 用户appid */
  AppID?: string | null;
  /** CVE编号 */
  CVEId?: string | null;
  /** 是扫描，0默认未扫描，1正在扫描，2扫描完成，3扫描出错 */
  IsScan?: number | null;
  /** 影响资产数目 */
  InfluenceAsset?: number | null;
  /** 未修复资产数目 */
  NotRepairAsset?: number | null;
  /** 未防护资产数目 */
  NotProtectAsset?: number | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务百分比 */
  TaskPercent?: number | null;
  /** 任务时间 */
  TaskTime?: number | null;
  /** 扫描时间 */
  ScanTime?: string | null;
}

/** 资产类型和实例类型的映射 */
declare interface AssetInstanceTypeMap {
  /** 资产类型 */
  Text?: string | null;
  /** 资产类型 */
  Value?: string | null;
  /** 资产类型和实例类型映射关系 */
  InstanceTypeList?: FilterDataObject[] | null;
}

/** 安全中心资产标签 */
declare interface AssetTag {
  /** 标签的key值,可以是字母、数字、下划线 */
  TagKey?: string | null;
  /** 标签的vale值,可以是字母、数字、下划线 */
  TagValue?: string | null;
}

/** 资产视角配置风险 */
declare interface AssetViewCFGRisk {
  /** 唯一id */
  Id?: string;
  /** 配置名 */
  CFGName?: string;
  /** 检查类型 */
  CheckType?: string;
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  Level?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 来源 */
  From?: string;
  /** 状态 */
  Status?: number;
  /** - */
  CFGSTD?: string;
  /** 配置详情 */
  CFGDescribe?: string;
  /** 修复建议 */
  CFGFix?: string;
  /** 帮助文档链接 */
  CFGHelpURL?: string;
  /** 前端使用索引 */
  Index?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户昵称 */
  Nick?: string | null;
  /** 用户uin */
  Uin?: string | null;
}

/** 资产视角的端口风险对象 */
declare interface AssetViewPortRisk {
  /** 端口 */
  Port?: number;
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
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
  /** 风险ID */
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
  /** 识别来源，详细看枚举返回。 */
  From?: string;
}

/** 资产视角的漏洞风险对象 */
declare interface AssetViewVULRisk {
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
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
  /** 风险ID */
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
  /** 漏洞描述 */
  Describe?: string;
  /** 漏洞影响组件 */
  AppName?: string;
  /** 技术参考 */
  References?: string;
  /** 漏洞影响版本 */
  AppVersion?: string;
  /** 风险点 */
  VULURL?: string;
  /** 漏洞名称 */
  VULName?: string;
  /** cve */
  CVE?: string;
  /** 修复方案 */
  Fix?: string;
  /** pocid */
  POCId?: string;
  /** 扫描来源 */
  From?: string;
  /** 主机版本 */
  CWPVersion?: number;
  /** 是否支持修复 */
  IsSupportRepair?: boolean;
  /** 是否支持扫描 */
  IsSupportDetect?: boolean;
  /** 实例uuid */
  InstanceUUID?: string;
  /** 攻击载荷 */
  Payload?: string;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number | null;
}

/** 资产视角的漏洞风险对象 */
declare interface AssetViewVULRiskData {
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  Level?: string;
  /** 资产类型 */
  InstanceType?: string;
  /** 组件 */
  Component?: string;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 状态，0未处理、1标记已处置、2已忽略，3已处置 ，4 处置中 ，5 检测中 ，6部分已处置 */
  Status?: number;
  /** 风险ID */
  RiskId?: string;
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
  /** 漏洞影响组件 */
  AppName?: string;
  /** 漏洞影响版本 */
  AppVersion?: string;
  /** 风险点 */
  VULURL?: string;
  /** 漏洞名称 */
  VULName?: string;
  /** cve */
  CVE?: string;
  /** pocid */
  POCId?: string;
  /** 扫描来源 */
  From?: string;
  /** 主机版本 */
  CWPVersion?: number;
  /** 实例uuid */
  InstanceUUID?: string;
  /** 攻击载荷 */
  Payload?: string;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number | null;
  /** CVSS评分 */
  CVSS?: number | null;
  /** 前端索引id */
  Index?: string | null;
  /** pcmgrId */
  PCMGRId?: string | null;
  /** 报告id */
  LogId?: string | null;
  /** 任务id */
  TaskId?: string | null;
  /** 漏洞标签 */
  VulTag?: string[] | null;
  /** 漏洞披露时间 */
  DisclosureTime?: string | null;
  /** 攻击热度 */
  AttackHeat?: number | null;
  /** 是否必修漏洞1是，0不是 */
  IsSuggest?: number | null;
  /** 处置任务ID */
  HandleTaskId?: string | null;
  /** 引擎来源 */
  EngineSource?: string | null;
  /** 新的漏洞风险id(同全网漏洞表的riskid) */
  VulRiskId?: string | null;
}

/** 资产视角的弱口令风险 */
declare interface AssetViewWeakPassRisk {
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
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
  /** 弱口令类型 */
  PasswordType?: string;
  /** 来源 */
  From?: string;
  /** 漏洞类型 */
  VULType?: string;
  /** 漏洞url */
  VULURL?: string;
  /** 修复建议 */
  Fix?: string;
  /** 负载 */
  Payload?: string;
}

/** 漏洞详细信息 */
declare interface BugInfoDetail {
  /** 漏洞编号 */
  Id?: number | null;
  /** 漏洞对应pocId */
  PatchId?: string | null;
  /** 漏洞名称 */
  VULName?: string | null;
  /** 漏洞严重性：high,middle，low，info */
  Level?: string | null;
  /** cvss评分 */
  CVSSScore?: string | null;
  /** cve编号 */
  CVEId?: string | null;
  /** 漏洞标签 */
  Tag?: string | null;
  /** 漏洞种类，1:web应用，2:系统组件漏洞，3:配置风险 */
  VULCategory?: number | null;
  /** 漏洞影响系统 */
  ImpactOs?: string | null;
  /** 漏洞影响组件 */
  ImpactCOMPENT?: string | null;
  /** 漏洞影响版本 */
  ImpactVersion?: string | null;
  /** 链接 */
  Reference?: string | null;
  /** 漏洞描述 */
  VULDescribe?: string | null;
  /** 修复建议 */
  Fix?: string | null;
  /** 产品支持状态，实时返回 */
  ProSupport?: number | null;
  /** 是否公开，0为未发布，1为发布 */
  IsPublish?: number | null;
  /** 释放时间 */
  ReleaseTime?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 漏洞子类别 */
  SubCategory?: string | null;
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
  /** 1新资产；0 非新资产 */
  IsNewAsset?: number | null;
  /** 0 未安装 1安装 2:安装中 */
  CVMAgentStatus?: number | null;
  /** 1:开启 0:未开启 */
  CVMStatus?: number | null;
  /** 1:客户端已安装 0：未安装 2: Agentless */
  DefenseModel?: number | null;
  /** 1:已安装 0:未安装 */
  TatStatus?: number | null;
  /** cpu趋势图 */
  CpuTrend?: Element[] | null;
  /** 内存趋势图 */
  MemoryTrend?: Element[] | null;
  /** 1:agent在线 0:agent离线 2:主机离线 */
  AgentStatus?: number | null;
  /** 本月防护关闭次数 */
  CloseDefenseCount?: number | null;
  /** 运行状态 */
  InstanceState?: string | null;
  /** 安全组数据 */
  SecurityGroupIds?: string[] | null;
  /** 物理内存占用KB */
  AgentMemRss?: number | null;
  /** CPU使用率百分比 */
  AgentCpuPer?: number | null;
}

/** clb实例和监听器信息 */
declare interface ClbListenerListInfo {
  /** 监听器id */
  ListenerId?: string | null;
  /** 监听器名称 */
  ListenerName?: string | null;
  /** 负载均衡Id */
  LoadBalancerId?: string | null;
  /** 负载均衡名称 */
  LoadBalancerName?: string | null;
  /** 协议 */
  Protocol?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 负载均衡ip */
  Vip?: string | null;
  /** 端口 */
  VPort?: number | null;
  /** 区域 */
  Zone?: string | null;
  /** 私有网络id */
  NumericalVpcId?: number | null;
  /** 负载均衡类型 */
  LoadBalancerType?: string | null;
  /** 监听器域名 */
  Domain?: string | null;
  /** 负载均衡域名 */
  LoadBalancerDomain?: string | null;
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
  /** 是否新资产: 1新 */
  IsNewAsset?: number | null;
}

/** 漏洞和资产信息 */
declare interface DataSearchBug {
  /** 返回查询状态 */
  StateCode?: string;
  /** 无 */
  DataBug?: BugInfoDetail[] | null;
  /** 无 */
  DataAsset?: AssetInfoDetail[] | null;
  /** true支持扫描。false不支持扫描 */
  VSSScan?: boolean | null;
  /** 0不支持，1支持 */
  CWPScan?: string | null;
  /** 1支持虚拟补丁，0或空不支持 */
  CFWPatch?: string | null;
  /** 0不支持，1支持 */
  WafPatch?: number | null;
  /** 0不支持，1支持 */
  CWPFix?: number | null;
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
  /** bot攻击数量 */
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
  /** 风险服务暴露数量 */
  ServiceRisk?: number | null;
  /** 是否新资产 1新 */
  IsNewAsset?: number | null;
  /** 待确认资产的随机三级域名 */
  VerifyDomain?: string | null;
  /** 待确认资产的TXT记录内容 */
  VerifyTXTRecord?: string | null;
  /** 待确认资产的认证状态，0-待认证，1-认证成功，2-认证中，3-txt认证失败，4-人工认证失败 */
  VerifyStatus?: number | null;
  /** bot访问数量 */
  BotAccessCount?: number | null;
}

/** 统计条目 */
declare interface Element {
  /** 统计类型 */
  Key?: string | null;
  /** 统计对象 */
  Value?: string | null;
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

/** 网关资产 */
declare interface GateWayAsset {
  /** appid */
  AppId?: string;
  /** uin */
  Uin?: string;
  /** 资产ID */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 私有ip */
  PrivateIp?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 区域 */
  Region?: string;
  /** 私有网络id */
  VpcId?: string;
  /** 私有网络名 */
  VpcName?: string;
  /** 标签 */
  Tag?: Tag[] | null;
  /** 出向峰值带宽 */
  OutboundPeakBandwidth?: string;
  /** 入向峰值带宽 */
  InboundPeakBandwidth?: string;
  /** 出站累计流量 */
  OutboundCumulativeFlow?: string;
  /** 入站累计流量 */
  InboundCumulativeFlow?: string;
  /** 网络攻击 */
  NetworkAttack?: number;
  /** 暴露端口 */
  ExposedPort?: number;
  /** 暴露漏洞 */
  ExposedVUL?: number;
  /** 配置风险 */
  ConfigureRisk?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 任务数 */
  ScanTask?: number;
  /** 最后扫描时间 */
  LastScanTime?: string;
  /** 昵称 */
  Nick?: string;
  /** ipv6地址 */
  AddressIPV6?: string | null;
  /** 是否核心 */
  IsCore?: number | null;
  /** 风险服务暴露 */
  RiskExposure?: number | null;
  /** 是否新资产 1新 */
  IsNewAsset?: number | null;
  /** 网关状态 */
  Status?: string | null;
  /** TSE的网关真实地域 */
  EngineRegion?: string | null;
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
  /** 是否新资产 1新 */
  IsNewAsset?: number | null;
  /** 资产认证状态，0-待认证，1-认证成功，2-认证中，3+-认证失败 */
  VerifyStatus?: number | null;
}

/** KeyValue对 */
declare interface KeyValue {
  /** 字段 */
  Key?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 网卡资产 */
declare interface NICAsset {
  /** appid */
  AppId?: string;
  /** uin */
  Uin?: string;
  /** 资产ID */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 私有ip */
  PrivateIp?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 区域 */
  Region?: string;
  /** 私有网络id */
  VpcId?: string;
  /** 私有网络名 */
  VpcName?: string;
  /** 标签 */
  Tag?: Tag[] | null;
  /** 出向峰值带宽 */
  OutboundPeakBandwidth?: string;
  /** 入向峰值带宽 */
  InboundPeakBandwidth?: string;
  /** 出站累计流量 */
  OutboundCumulativeFlow?: string;
  /** 入站累计流量 */
  InboundCumulativeFlow?: string;
  /** 网络攻击 */
  NetworkAttack?: number;
  /** 暴露端口 */
  ExposedPort?: number;
  /** 暴露漏洞 */
  ExposedVUL?: number;
  /** 配置风险 */
  ConfigureRisk?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 任务数 */
  ScanTask?: number;
  /** 最后扫描时间 */
  LastScanTime?: string;
  /** 昵称 */
  Nick?: string;
  /** 是否核心 */
  IsCore?: number | null;
  /** 是否新资产 1新 */
  IsNewAsset?: number | null;
}

/** 该结构体用来传入告警的key，以更新告警的status */
declare interface NewAlertKey {
  /** 需要更改的用户appid */
  AppId: string;
  /** 告警类别 */
  Type: string;
  /** 告警子类别 */
  SubType: string;
  /** 告警来源 */
  Source: string;
  /** 告警名称 */
  Name: string;
  /** 告警key */
  Key: string;
  /** 时间 */
  Date: string;
  /** 状态 */
  Status?: number;
}

/** 集团账号成员详情 */
declare interface OrganizationUserInfo {
  /** 成员账号Uin */
  Uin?: string | null;
  /** 成员账号名称 */
  NickName?: string | null;
  /** 部门节点名称，账号所属部门 */
  NodeName?: string | null;
  /** 资产数量 */
  AssetCount?: number | null;
  /** 风险数量 */
  RiskCount?: number | null;
  /** 攻击数量 */
  AttackCount?: number | null;
  /** Member/Admin/;成员或者管理员 */
  Role?: string | null;
  /** 成员账号id */
  MemberId?: string | null;
  /** 成员账号Appid */
  AppId?: string | null;
  /** 账号加入方式,create/invite */
  JoinType?: string | null;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  CFWProtect?: string | null;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  WAFProtect?: string | null;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  CWPProtect?: string | null;
  /** 1启用，0未启用 */
  Enable?: number | null;
  /** "Free" //免费版 "Advanced" //高级版 "Enterprise" //企业版 "Ultimate" //旗舰版 */
  CSIPProtect?: string | null;
  /** 1为配额消耗者 */
  QuotaConsumer?: number | null;
  /** 账户类型，0为腾讯云账户，1为AWS账户 */
  CloudType?: number | null;
  /** 0为缺省值，1为10分钟，2为1小时，3为24小时 */
  SyncFrequency?: number | null;
  /** 多云账户是否过期 */
  IsExpired?: boolean | null;
  /** 多云账户 权限列表 */
  PermissionList?: string[] | null;
  /** 1 */
  AuthType?: number | null;
  /** 0 腾讯云集团账户1 腾讯云接入账户2 非腾讯云 */
  TcMemberType?: number | null;
  /** 子账号数量 */
  SubUserCount?: number | null;
  /** 加入方式详细信息 */
  JoinTypeInfo?: string | null;
}

/** 端口风险高级配置项 */
declare interface PortRiskAdvanceCFGParamItem {
  /** 端口集合,以逗号分隔 */
  PortSets: string | null;
  /** 检测项类型，0-系统定义，1-用户自定义 */
  CheckType: number | null;
  /** 检测项描述 */
  Detail?: string | null;
  /** 是否启用，1-启用，0-禁用 */
  Enable?: number | null;
}

/** 端口视角的端口风险对象 */
declare interface PortViewPortRisk {
  /** 影响资产 */
  NoHandleCount?: number;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  Level?: string;
  /** 协议 */
  Protocol?: string;
  /** 组件 */
  Component?: string;
  /** 端口 */
  Port?: number;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 处置建议,0保持现状、1限制访问、2封禁端口 */
  Suggestion?: number;
  /** 状态，0未处理、1已处置、2已忽略 */
  AffectAssetCount?: string;
  /** 资产唯一id */
  Id?: string;
  /** 资产子类型 */
  From?: string;
  /** 前端索引 */
  Index?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户昵称 */
  Nick?: string | null;
  /** 用户uin */
  Uin?: string | null;
  /** 服务 */
  Service?: string;
}

/** 公网IP和域名资产列表key */
declare interface PublicIpDomainListKey {
  /** 资产值 */
  Asset: string;
}

/** 相关攻击事件结构 */
declare interface RelatedEvent {
  /** 事件ID */
  EventID?: string | null;
  /** 事件描述 */
  Description?: string | null;
  /** 与事件关联的告警数量 */
  RelatedCount?: number | null;
}

/** 报告项key */
declare interface ReportItemKey {
  /** 日志Id列表 */
  TaskLogList: string[] | null;
}

/** 报告中的task_id list */
declare interface ReportTaskIdList {
  /** 任务id列表 */
  TaskIdList: string[];
  /** 租户ID */
  AppId?: string;
}

/** 风险中心状态处理Key */
declare interface RiskCenterStatusKey {
  /** 风险ID */
  Id: string;
  /** 公网IP/域名 */
  PublicIPDomain?: string;
  /** 实例ID */
  InstanceId?: string;
  /** APP ID */
  AppId?: string;
}

/** 告警数据攻击者或受害者信息 */
declare interface RoleInfo {
  /** IP */
  IP?: string | null;
  /** HostIP */
  HostIP?: string | null;
  /** 原始IP */
  OriginIP?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 资产ID */
  InstanceID?: string | null;
  /** 城市 */
  City?: string | null;
  /** 省份 */
  Province?: string | null;
  /** 国家 */
  Country?: string | null;
  /** 地址 */
  Address?: string | null;
  /** 纬度 */
  Latitude?: string | null;
  /** 经度 */
  Longitude?: string | null;
  /** 信息 */
  Info?: string | null;
  /** 域名 */
  Domain?: string | null;
  /** 企业名称 */
  Name?: string | null;
  /** 账号 */
  Account?: string | null;
  /** 家族团伙 */
  Family?: string | null;
  /** 病毒名 */
  VirusName?: string | null;
  /** MD5值 */
  MD5?: string | null;
  /** 恶意进程文件名 */
  FileName?: string | null;
  /** 1:主机资产 2:域名资产 3:网络资产 */
  AssetType?: number | null;
  /** 来源日志分析的信息字段 */
  FromLogAnalysisData?: KeyValue[] | null;
}

/** 扫描任务详情 */
declare interface ScanTaskInfo {
  /** 任务Id */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务状态码：1等待开始 2正在扫描 3扫描出错 4扫描完成 */
  Status?: number | null;
  /** 任务进度 */
  Progress?: number | null;
  /** 任务完成时间 */
  TaskTime?: string | null;
  /** 报告ID */
  ReportId?: string | null;
  /** 报告名称 */
  ReportName?: string | null;
  /** 扫描计划，0-周期任务,1-立即扫描,2-定时扫描,3-自定义 */
  ScanPlan?: number | null;
  /** 关联的资产数 */
  AssetCount?: number | null;
  /** APP ID */
  AppId?: string | null;
  /** 用户主账户ID */
  UIN?: string | null;
  /** 用户名称 */
  UserName?: string | null;
}

/** 扫描任务列表展示信息 */
declare interface ScanTaskInfoList {
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务开始时间 */
  StartTime?: string | null;
  /** 任务结束时间 */
  EndTime?: string | null;
  /** cron格式 */
  ScanPlanContent?: string | null;
  /** 0-周期任务,1-立即扫描,2-定时扫描,3-自定义 */
  TaskType?: number | null;
  /** 创建时间 */
  InsertTime?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 自定义指定扫描资产信息 */
  SelfDefiningAssets?: string[] | null;
  /** 预估时间 */
  PredictTime?: number | null;
  /** 预估完成时间 */
  PredictEndTime?: string | null;
  /** 报告数量 */
  ReportNumber?: number | null;
  /** 资产数量 */
  AssetNumber?: number | null;
  /** 扫描状态, 0-初始值，1-正在扫描，2-扫描完成，3-扫描出错，4-停止扫描 */
  ScanStatus?: number | null;
  /** 任务进度 */
  Percent?: number | null;
  /** port/poc/weakpass/webcontent/configrisk */
  ScanItem?: string | null;
  /** 0-全扫，1-指定资产扫，2-排除资产扫，3-自定义指定资产扫描 */
  ScanAssetType?: number | null;
  /** vss子任务id */
  VSSTaskId?: string | null;
  /** cspm子任务id */
  CSPMTaskId?: string | null;
  /** 主机漏扫子任务id */
  CWPPOCId?: string | null;
  /** 主机基线子任务id */
  CWPBlId?: string | null;
  /** vss子任务进度 */
  VSSTaskProcess?: number | null;
  /** cspm子任务进度 */
  CSPMTaskProcess?: number | null;
  /** 主机漏扫子任务进度 */
  CWPPOCProcess?: number | null;
  /** 主机基线子任务进度 */
  CWPBlProcess?: number | null;
  /** 异常状态码 */
  ErrorCode?: number | null;
  /** 异常信息 */
  ErrorInfo?: string | null;
  /** 周期任务开始的天数 */
  StartDay?: number | null;
  /** 扫描频率,单位天,1-每天,7-每周,30-月,0-扫描一次 */
  Frequency?: number | null;
  /** 完成次数 */
  CompleteNumber?: number | null;
  /** 已完成资产个数 */
  CompleteAssetNumber?: number | null;
  /** 风险数 */
  RiskCount?: number | null;
  /** 资产 */
  Assets?: TaskAssetObject[] | null;
  /** 用户Appid */
  AppId?: string | null;
  /** 用户主账户ID */
  UIN?: string | null;
  /** 用户名称 */
  UserName?: string | null;
  /** 体检模式，0-标准模式，1-快速模式，2-高级模式 */
  TaskMode?: number | null;
  /** 扫描来源 */
  ScanFrom?: string | null;
  /** 是否限免体检0不是，1是 */
  IsFree?: number | null;
  /** 是否可以删除，1-可以，0-不可以，对应多账户管理使用 */
  IsDelete?: number | null;
  /** 任务源类型，0-默认，1-小助手，2-体检项 */
  SourceType?: number | null;
}

/** 服务风险 */
declare interface ServerRisk {
  /** 测绘标签 */
  ServiceTag?: string;
  /** 端口 */
  Port?: number | null;
  /** 影响资产 */
  AffectAsset?: string;
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 资产类型 */
  InstanceType?: string;
  /** 风险等级 low:低危 high:高危 middle:中危 info:提示 extreme:严重 */
  Level?: string;
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
  /** 风险详情 */
  RiskDetails?: string | null;
  /** 处置建议 */
  Suggestion?: string;
  /** 状态，0未处理、1已处置、2已忽略 */
  Status?: number;
  /** 资产唯一id */
  Id?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户昵称 */
  Nick?: string | null;
  /** 用户uin */
  Uin?: string | null;
  /** 服务快照 */
  ServiceSnapshot?: string | null;
  /** 服务访问的url */
  Url?: string | null;
  /** 列表索引值 */
  Index?: string | null;
  /** 风险列表 */
  RiskList?: ServerRiskSuggestion[] | null;
  /** 建议列表 */
  SuggestionList?: ServerRiskSuggestion[] | null;
  /** HTTP响应状态码 */
  StatusCode?: string | null;
}

/** 风险详情 */
declare interface ServerRiskSuggestion {
  /** 标题 */
  Title?: string | null;
  /** 详情 */
  Body?: string | null;
}

/** 产品支持情况 */
declare interface ServiceSupport {
  /** 产品名称:"cfw_waf_virtual", "cwp_detect", "cwp_defense", "cwp_fix" */
  ServiceName?: string | null;
  /** 已处理的资产总数 */
  SupportHandledCount?: number | null;
  /** 支持的资产总数 */
  SupportTotalCount?: number | null;
  /** 是否支持该产品1支持；0不支持 */
  IsSupport?: boolean | null;
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
  /** 是否新资产 1新 */
  IsNewAsset?: number | null;
}

/** 标签 */
declare interface Tag {
  /** 标签名称 */
  Name: string;
  /** 标签内容 */
  Value: string;
}

/** 产品日志条数 */
declare interface TagCount {
  /** 产品名 */
  Name?: string | null;
  /** 日志条数 */
  Count?: number | null;
}

/** 主机标签信息 */
declare interface Tags {
  /** 无 */
  TagKey?: string | null;
  /** 无 */
  TagValue?: string | null;
}

/** 任务高级配置 */
declare interface TaskAdvanceCFG {
  /** 端口风险高级配置 */
  PortRisk?: PortRiskAdvanceCFGParamItem[];
  /** 漏洞风险高级配置 */
  VulRisk?: TaskCenterVulRiskInputParam[];
  /** 弱口令风险高级配置 */
  WeakPwdRisk?: TaskCenterWeakPwdRiskInputParam[];
  /** 配置风险高级配置 */
  CFGRisk?: TaskCenterCFGRiskInputParam[];
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
  /** 多云资产唯一id */
  Arn?: string | null;
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

/** 任务ID列表Key */
declare interface TaskIdListKey {
  /** 任务ID */
  TaskId: string;
}

/** 任务报告信息 */
declare interface TaskLogInfo {
  /** 报告名称 */
  TaskLogName?: string | null;
  /** 报告ID */
  TaskLogId?: string;
  /** 关联资产个数 */
  AssetsNumber?: number | null;
  /** 安全风险数量 */
  RiskNumber?: number | null;
  /** 报告生成时间 */
  Time?: string | null;
  /** 任务状态码：0 初始值 1正在扫描 2扫描完成 3扫描出错，4停止，5暂停，6该任务已被重启过 */
  Status?: number | null;
  /** 关联任务名称 */
  TaskName?: string | null;
  /** 扫描开始时间 */
  StartTime?: string | null;
  /** 任务中心扫描任务ID */
  TaskCenterTaskId?: string | null;
  /** 租户ID */
  AppId?: string | null;
  /** 主账户ID */
  UIN?: string | null;
  /** 用户名称 */
  UserName?: string | null;
  /** 报告类型： 1安全体检 2日报 3周报 4月报 */
  ReportType?: number | null;
  /** 报告模板id */
  TemplateId?: number | null;
}

/** 报告pdf下载的临时链接 */
declare interface TaskLogURL {
  /** 报告下载临时链接 */
  URL?: string | null;
  /** 任务报告id */
  LogId?: string | null;
  /** 任务报告名称 */
  TaskLogName?: string | null;
  /** APP ID */
  AppId?: string | null;
}

/** 漏洞风险高级配置列表 */
declare interface VULRiskAdvanceCFGList {
  /** 风险ID */
  RiskId?: string;
  /** 漏洞名称 */
  VULName?: string;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  RiskLevel?: string;
  /** 识别来源 */
  CheckFrom?: string;
  /** 是否启用，1-启用，0-禁用 */
  Enable?: number | null;
  /** 风险类型 */
  VULType?: string;
  /** 影响版本 */
  ImpactVersion?: string;
  /** CVE */
  CVE?: string | null;
  /** 漏洞标签 */
  VULTag?: string[];
  /** 修复方式 */
  FixMethod?: string[] | null;
  /** 披露时间 */
  ReleaseTime?: string | null;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number | null;
  /** 漏洞描述 */
  VULDescribe?: string | null;
  /** 影响组件 */
  ImpactComponent?: string | null;
  /** 漏洞Payload */
  Payload?: string | null;
  /** 技术参考 */
  References?: string | null;
  /** cvss评分 */
  CVSS?: string | null;
  /** 攻击热度 */
  AttackHeat?: string | null;
  /** 安全产品支持情况 */
  ServiceSupport?: ServiceSupport[] | null;
  /** 最新检测时间 */
  RecentScanTime?: string | null;
}

/** 漏洞风险信息 */
declare interface VULRiskInfo {
  /** 修复建议 */
  Fix?: string | null;
  /** 技术参考/参考链接 */
  References?: string | null;
  /** 漏洞描述 */
  Describe?: string | null;
  /** 受影响组件 */
  ImpactComponent?: VulImpactComponentInfo[] | null;
}

/** 漏洞视角的漏洞风险对象 */
declare interface VULViewVULRisk {
  /** 端口 */
  Port?: string;
  /** 影响资产 */
  NoHandleCount?: number;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  Level?: string;
  /** 组件 */
  Component?: string;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 影响资产数量 */
  AffectAssetCount?: number;
  /** 风险ID */
  Id?: string;
  /** 扫描来源，具体看接口返回枚举类型 */
  From?: string;
  /** 前端索引 */
  Index?: string;
  /** 漏洞类型 */
  VULType?: string;
  /** 漏洞名 */
  VULName?: string;
  /** cve */
  CVE?: string;
  /** 描述 */
  Describe?: string;
  /** 漏洞payload */
  Payload?: string;
  /** 漏洞影响组件 */
  AppName?: string;
  /** 技术参考 */
  References?: string;
  /** 漏洞影响版本 */
  AppVersion?: string;
  /** 风险点 */
  VULURL?: string;
  /** 用户昵称 */
  Nick?: string | null;
  /** 用户appid */
  AppId?: string;
  /** 用户uin */
  Uin?: string | null;
  /** 修复建议 */
  Fix?: string | null;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number | null;
}

/** 漏洞视角的漏洞风险对象 */
declare interface VULViewVULRiskData {
  /** 端口 */
  Port?: string;
  /** 影响资产 */
  NoHandleCount?: number;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  Level?: string;
  /** 组件 */
  Component?: string;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 影响资产数量 */
  AffectAssetCount?: number;
  /** 风险ID */
  RiskId?: string;
  /** 扫描来源，具体看接口返回枚举类型 */
  From?: string;
  /** 前端索引 */
  Index?: string;
  /** 漏洞类型 */
  VULType?: string;
  /** 漏洞名 */
  VULName?: string;
  /** cve */
  CVE?: string;
  /** 漏洞payload */
  Payload?: string;
  /** 漏洞影响组件 */
  AppName?: string;
  /** 漏洞影响版本 */
  AppVersion?: string;
  /** 风险点 */
  VULURL?: string;
  /** 用户昵称 */
  Nick?: string | null;
  /** 用户appid */
  AppId?: string;
  /** 用户uin */
  Uin?: string | null;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number | null;
  /** CVSS评分 */
  CVSS?: number | null;
  /** PCMGRId */
  PCMGRId?: string | null;
  /** 漏洞标签。搜索时应急 必修传参VulTag=SuggestRepair/EMGCVul */
  VulTag?: string[] | null;
  /** 漏洞披露时间 */
  DisclosureTime?: string | null;
  /** 攻击热度 */
  AttackHeat?: number | null;
  /** 是否必修漏洞1是，0不是 */
  IsSuggest?: number | null;
  /** 处置任务id */
  HandleTaskId?: string | null;
  /** 引擎来源 */
  EngineSource?: string | null;
  /** 新的漏洞风险id */
  VulRiskId?: string | null;
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
  /** 是否新资产 1新 */
  IsNewAsset?: number | null;
  /** 是否核心资产1是 2不是 */
  IsCore?: number | null;
}

/** 漏洞影响组件信息 */
declare interface VulImpactComponentInfo {
  /** 组件名称 */
  Component?: string | null;
  /** 版本名称 */
  Version?: string | null;
}

/** 漏洞趋势-攻击趋势、影响用户、影响资产 */
declare interface VulTrend {
  /** 影响的资产数 */
  AffectAssetCount?: number | null;
  /** 影响的用户数 */
  AffectUserCount?: number | null;
  /** 攻击数 */
  AttackCount?: number | null;
  /** 时间 */
  Date?: string | null;
}

/** 网站风险对象 */
declare interface WebsiteRisk {
  /** 影响资产 */
  AffectAsset?: string;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  Level?: string;
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
  /** 风险链接 */
  URL?: string;
  /** 风险文件地址 */
  URLPath?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 类型 */
  DetectEngine?: string;
  /** 结果描述 */
  ResultDescribe?: string;
  /** 源地址url */
  SourceURL?: string;
  /** 源文件地址 */
  SourceURLPath?: string;
}

/** 过滤条件 */
declare interface WhereFilter {
  /** 过滤的项 */
  Name: string | null;
  /** 过滤的值 */
  Values: string[] | null;
  /** 中台定义：1等于 2大于 3小于 4大于等于 5小于等于 6不等于 9模糊匹配 13非模糊匹配 14按位与精确匹配填 7 模糊匹配填9 */
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
  /** 公网IP/域名 */
  Content: string[];
  /** 资产标签 */
  Tags?: AssetTag[];
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
  /** 扫描项目；port/poc/weakpass/webcontent/configrisk/exposedserver */
  ScanItem: string[];
  /** 0-周期任务,1-立即扫描,2-定时扫描,3-自定义；0,2,3则ScanPlanContent必填 */
  ScanPlanType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 扫描资产信息列表 */
  Assets?: TaskAssetObject[];
  /** 扫描计划详情 */
  ScanPlanContent?: string;
  /** ip/域名/url数组 */
  SelfDefiningAssets?: string[];
  /** 请求发起源，默认为vss表示漏洞扫描服务，云安全中心的用户请填充csip */
  ScanFrom?: string;
  /** 高级配置 */
  TaskAdvanceCFG?: TaskAdvanceCFG;
  /** 体检模式，0-标准模式，1-快速模式，2-高级模式，默认标准模式 */
  TaskMode?: number;
  /** 资产标签 */
  Tags?: AssetTag;
}

declare interface CreateRiskCenterScanTaskResponse {
  /** 任务id */
  TaskId?: string;
  /** 0,任务创建成功；小于0失败；-1为存在资产未认证 */
  Status?: number;
  /** 未认证资产列表 */
  UnAuthAsset?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainAndIpRequest {
  /** - */
  Content?: PublicIpDomainListKey[];
  /** 是否保留路径配置，1：保留，其他：不保留，默认不传为不保留 */
  RetainPath?: number;
  /** 以后是否忽略该资产，，1：忽略，其他：不忽略，默认不传为忽略 */
  IgnoreAsset?: number;
  /** 资产标签 */
  Tags?: AssetTag[];
  /** 删除类型，取值： ALL， 删除全部，将直接忽略Content的内容； 其他值 ,非全部，则Centent必填， 默认为其他值。 */
  Type?: string;
}

declare interface DeleteDomainAndIpResponse {
  /** 删除的资产数量 */
  Data?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRiskScanTaskRequest {
  /** 任务id 列表 */
  TaskIdList: TaskIdListKey[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteRiskScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlertListRequest {
  /** 标签搜索筛选 */
  Filter: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 被调用的集团账号的成员id */
  OperatedMemberId?: string[];
  /** 0:默认全部 1:资产ID 2:域名 */
  AssetType?: number;
}

declare interface DescribeAlertListResponse {
  /** 全量告警列表 */
  AlertList?: AlertInfo[];
  /** 告警大类数量 */
  AlertTypeCount?: TagCount[];
  /** 告警总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetViewVulRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeAssetViewVulRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 资产视角的漏洞风险列表 */
  Data?: AssetViewVULRiskData[] | null;
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
  /** tag枚举 */
  Tags?: FilterDataObject[] | null;
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
  /** 集团账号的成员id */
  MemberId?: string[];
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
  /** 资产类型和实例类型的对应关系 */
  AssetMapInstanceTypeList?: AssetInstanceTypeMap[] | null;
  /** 公网内网枚举 */
  PublicPrivateAttr?: FilterDataObject[] | null;
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
  /** 集团账号的成员id */
  MemberId?: string[];
  /** - */
  Filter?: Filter;
  /** 资产类型:MYSQL/MARIADB/REDIS/MONGODB/POSTGRES/CTS/ES/KAFKA/COS/CBS/CFS */
  AssetTypes?: string[];
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
  /** 公网内网枚举 */
  PublicPrivateAttr?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** - */
  Filter?: Filter;
  /** 安全中心自定义标签 */
  Tags?: AssetTag[];
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

declare interface DescribeGatewayAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤参数 */
  Filter?: Filter;
}

declare interface DescribeGatewayAssetsResponse {
  /** 列表 */
  Data?: GateWayAsset[];
  /** 总数 */
  TotalCount?: number;
  /** 地域列表 */
  RegionList?: FilterDataObject[];
  /** 资产类型列表 */
  AssetTypeList?: FilterDataObject[];
  /** vpc列表 */
  VpcList?: FilterDataObject[];
  /** appid列表 */
  AppIdList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenerListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** - */
  Filter?: Filter;
}

declare interface DescribeListenerListResponse {
  /** 总数 */
  Total?: number | null;
  /** 监听器列表 */
  Data?: ClbListenerListInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNICAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤参数 */
  Filter?: Filter;
}

declare interface DescribeNICAssetsResponse {
  /** 列表 */
  Data?: NICAsset[];
  /** 总数 */
  TotalCount?: number;
  /** 地域列表 */
  RegionList?: FilterDataObject[];
  /** 资产类型列表 */
  AssetTypeList?: FilterDataObject[];
  /** vpc列表 */
  VpcList?: FilterDataObject[];
  /** appid列表 */
  AppIdList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationUserInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 不支持多云 */
  NotSupportCloud?: boolean;
}

declare interface DescribeOrganizationUserInfoResponse {
  /** 总条数 */
  TotalCount?: number | null;
  /** 集团用户列表 */
  Data?: OrganizationUserInfo[] | null;
  /** 加入方式枚举 */
  JoinTypeLst?: FilterDataObject[] | null;
  /** 云厂商枚举 */
  CloudTypeLst?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicIpAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** filte过滤条件 */
  Filter?: Filter;
  /** 安全中心自定义标签 */
  Tags?: AssetTag[];
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

declare interface DescribeRiskCenterAssetViewCFGRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeRiskCenterAssetViewCFGRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 资产视角的配置风险列表 */
  Data?: AssetViewCFGRisk[];
  /** 状态列表 */
  StatusLists?: FilterDataObject[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 配置名列表 */
  CFGNameLists?: FilterDataObject[];
  /** 检查类型列表 */
  CheckTypeLists?: FilterDataObject[];
  /** 资产类型列表 */
  InstanceTypeLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCenterAssetViewPortRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
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
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
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

declare interface DescribeRiskCenterAssetViewWeakPasswordRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeRiskCenterAssetViewWeakPasswordRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 风险列表 */
  Data?: AssetViewWeakPassRisk[];
  /** 状态列表 */
  StatusLists?: FilterDataObject[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 资产类型列表 */
  InstanceTypeLists?: FilterDataObject[];
  /** 弱口令类型列表 */
  PasswordTypeLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCenterPortViewPortRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeRiskCenterPortViewPortRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 端口视角的端口风险列表 */
  Data?: PortViewPortRisk[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 处置建议列表 */
  SuggestionLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCenterServerRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeRiskCenterServerRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 风险服务列表 */
  Data?: ServerRisk[];
  /** 资产类型枚举 */
  InstanceTypeLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCenterVULViewVULRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeRiskCenterVULViewVULRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 漏洞产视角的漏洞风险列表 */
  Data?: VULViewVULRisk[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 漏洞类型列表 */
  VULTypeLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCenterWebsiteRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeRiskCenterWebsiteRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 内容风险列表 */
  Data?: WebsiteRisk[];
  /** 状态列表 */
  StatusLists?: FilterDataObject[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 资产类型列表 */
  InstanceTypeLists?: FilterDataObject[];
  /** 风险类型列表 */
  DetectEngineLists?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanReportListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
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

declare interface DescribeScanTaskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 标签 */
  Tags?: Tags[];
}

declare interface DescribeScanTaskListResponse {
  /** 总条数 */
  TotalCount?: number | null;
  /** 任务日志列表 */
  Data?: ScanTaskInfoList[] | null;
  /** 主账户ID列表 */
  UINList?: string[] | null;
  /** 体检模式过滤列表 */
  TaskModeList?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSearchBugInfoRequest {
  /** 无 */
  Id: string;
  /** id=3时传入该参数 */
  CVEId?: string;
}

declare interface DescribeSearchBugInfoResponse {
  /** 漏洞信息和资产信息 */
  Data?: DataSearchBug | null;
  /** 状态值，0：查询成功，非0：查询失败 */
  ReturnCode?: number;
  /** 状态信息，success：查询成功，fail：查询失败 */
  ReturnMsg?: string;
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

declare interface DescribeTaskLogListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
}

declare interface DescribeTaskLogListResponse {
  /** 总条数 */
  TotalCount?: number | null;
  /** 报告列表 */
  Data?: TaskLogInfo[] | null;
  /** 待查看数量 */
  NotViewNumber?: number | null;
  /** 报告模板数 */
  ReportTemplateNumber?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskLogURLRequest {
  /** 0: 预览， 1: 下载 */
  Type: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 任务报告Id 列表 */
  ReportItemKeyList?: ReportItemKey[];
  /** 报告中任务id列表 */
  ReportTaskIdList?: ReportTaskIdList[];
}

declare interface DescribeTaskLogURLResponse {
  /** 返回报告临时下载url */
  Data?: TaskLogURL[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopAttackInfoRequest {
  /** 被调用的集团账号的成员id */
  OperatedMemberId?: string[];
}

declare interface DescribeTopAttackInfoResponse {
  /** Top攻击类型/攻击者次数 */
  TopAttackInfo?: TagCount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVULRiskAdvanceCFGListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 任务ID */
  TaskId?: string;
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeVULRiskAdvanceCFGListResponse {
  /** 配置项列表 */
  Data?: VULRiskAdvanceCFGList[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 风险等级过滤列表 */
  RiskLevelLists?: FilterDataObject[] | null;
  /** 漏洞类型过滤列表 */
  VULTypeLists?: FilterDataObject[] | null;
  /** 识别来源过滤列表 */
  CheckFromLists?: FilterDataObject[] | null;
  /** 漏洞标签列表 */
  VulTagList?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVULRiskDetailRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 风险id */
  RiskId?: string;
  /** pcMgrId */
  PCMGRId?: string;
}

declare interface DescribeVULRiskDetailResponse {
  /** 安全产品支持情况 */
  ServiceSupport?: ServiceSupport[];
  /** 漏洞趋势 */
  VulTrend?: VulTrend[];
  /** 漏洞补充信息 */
  VulData?: VULRiskInfo;
  /** 小助手问答id */
  QuestionId?: string;
  /** 会话id */
  SessionId?: string;
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

declare interface DescribeVulViewVulRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 资产标签 */
  Tags?: AssetTag[];
}

declare interface DescribeVulViewVulRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 漏洞产视角的漏洞风险列表 */
  Data?: VULViewVULRiskData[] | null;
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 漏洞类型列表 */
  VULTypeLists?: FilterDataObject[];
  /** tag枚举 */
  Tags?: FilterDataObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOrganizationAccountStatusRequest {
  /** 修改集团账号状态，1 开启， 2关闭 */
  Status: number;
}

declare interface ModifyOrganizationAccountStatusResponse {
  /** 返回值为0，则修改成功 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRiskCenterRiskStatusRequest {
  /** 风险资产相关数据 */
  RiskStatusKeys: RiskCenterStatusKey[];
  /** 处置状态，1为已处置、2为已忽略，3为取消已处置，4为取消已忽略 */
  Status: number;
  /** 风险类型，0-端口风险， 1-漏洞风险，2-弱口令风险， 3-网站内容风险，4-配置风险，5-风险服务暴露 */
  Type: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyRiskCenterRiskStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRiskCenterScanTaskRequest {
  /** 任务名称 */
  TaskName: string;
  /** 0-全扫，1-指定资产扫，2-排除资产扫，3-手动填写扫；1和2则Assets字段必填，3则SelfDefiningAssets必填 */
  ScanAssetType: number;
  /** 扫描项目；port/poc/weakpass/webcontent/configrisk */
  ScanItem: string[];
  /** 0-周期任务,1-立即扫描,2-定时扫描,3-自定义；0,2,3则ScanPlanContent必填 */
  ScanPlanType: number;
  /** 要修改的任务id */
  TaskId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
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

declare interface ModifyRiskCenterScanTaskResponse {
  /** 任务id */
  TaskId?: string;
  /** 0，修改成功，其他失败；-1为存在资产未认证 */
  Status?: number;
  /** 未认证资产列表 */
  UnAuthAsset?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopRiskCenterTaskRequest {
  /** 任务id 列表 */
  TaskIdList: TaskIdListKey[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface StopRiskCenterTaskResponse {
  /** Status为0， 停止成功 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAlertStatusListRequest {
  /** 告警ID列表 */
  ID: NewAlertKey[];
  /** 操作类型 1:撤销处置 2:标记为已处置 3:标记忽略 4:取消标记处置5:取消标记忽略 */
  OperateType: number;
  /** 被调用的集团账号的成员id */
  OperatedMemberId?: string[];
}

declare interface UpdateAlertStatusListResponse {
  /** 结果信息 */
  Msg?: string | null;
  /** 结果代码 */
  Code?: string;
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
  /** 删除域名和ip请求 {@link DeleteDomainAndIpRequest} {@link DeleteDomainAndIpResponse} */
  DeleteDomainAndIp(data?: DeleteDomainAndIpRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainAndIpResponse>;
  /** 删除风险中心扫描任务 {@link DeleteRiskScanTaskRequest} {@link DeleteRiskScanTaskResponse} */
  DeleteRiskScanTask(data: DeleteRiskScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskScanTaskResponse>;
  /** 查询全量告警列表 {@link DescribeAlertListRequest} {@link DescribeAlertListResponse} */
  DescribeAlertList(data: DescribeAlertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlertListResponse>;
  /** 漏洞管理-资产视角的漏洞风险列表 {@link DescribeAssetViewVulRiskListRequest} {@link DescribeAssetViewVulRiskListResponse} */
  DescribeAssetViewVulRiskList(data?: DescribeAssetViewVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetViewVulRiskListResponse>;
  /** cvm详情 {@link DescribeCVMAssetInfoRequest} {@link DescribeCVMAssetInfoResponse} */
  DescribeCVMAssetInfo(data: DescribeCVMAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetInfoResponse>;
  /** cvm列表 {@link DescribeCVMAssetsRequest} {@link DescribeCVMAssetsResponse} */
  DescribeCVMAssets(data?: DescribeCVMAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetsResponse>;
  /** 集群pod列表 {@link DescribeClusterPodAssetsRequest} {@link DescribeClusterPodAssetsResponse} */
  DescribeClusterPodAssets(data?: DescribeClusterPodAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPodAssetsResponse>;
  /** db资产详情 {@link DescribeDbAssetInfoRequest} {@link DescribeDbAssetInfoResponse} */
  DescribeDbAssetInfo(data: DescribeDbAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetInfoResponse>;
  /** 数据库资产列表 {@link DescribeDbAssetsRequest} {@link DescribeDbAssetsResponse} */
  DescribeDbAssets(data?: DescribeDbAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetsResponse>;
  /** 域名列表 {@link DescribeDomainAssetsRequest} {@link DescribeDomainAssetsResponse} */
  DescribeDomainAssets(data?: DescribeDomainAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAssetsResponse>;
  /** 网关列表 {@link DescribeGatewayAssetsRequest} {@link DescribeGatewayAssetsResponse} */
  DescribeGatewayAssets(data?: DescribeGatewayAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayAssetsResponse>;
  /** 查询clb监听器列表 {@link DescribeListenerListRequest} {@link DescribeListenerListResponse} */
  DescribeListenerList(data?: DescribeListenerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerListResponse>;
  /** 网卡列表 {@link DescribeNICAssetsRequest} {@link DescribeNICAssetsResponse} */
  DescribeNICAssets(data?: DescribeNICAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNICAssetsResponse>;
  /** 查询集团账号用户列表 {@link DescribeOrganizationUserInfoRequest} {@link DescribeOrganizationUserInfoResponse} */
  DescribeOrganizationUserInfo(data?: DescribeOrganizationUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationUserInfoResponse>;
  /** 公网列表 {@link DescribePublicIpAssetsRequest} {@link DescribePublicIpAssetsResponse} */
  DescribePublicIpAssets(data?: DescribePublicIpAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicIpAssetsResponse>;
  /** 获取资产视角的配置风险列表 {@link DescribeRiskCenterAssetViewCFGRiskListRequest} {@link DescribeRiskCenterAssetViewCFGRiskListResponse} */
  DescribeRiskCenterAssetViewCFGRiskList(data?: DescribeRiskCenterAssetViewCFGRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewCFGRiskListResponse>;
  /** 获取资产视角的端口风险列表 {@link DescribeRiskCenterAssetViewPortRiskListRequest} {@link DescribeRiskCenterAssetViewPortRiskListResponse} */
  DescribeRiskCenterAssetViewPortRiskList(data?: DescribeRiskCenterAssetViewPortRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewPortRiskListResponse>;
  /** 获取资产视角的漏洞风险列表 {@link DescribeRiskCenterAssetViewVULRiskListRequest} {@link DescribeRiskCenterAssetViewVULRiskListResponse} */
  DescribeRiskCenterAssetViewVULRiskList(data?: DescribeRiskCenterAssetViewVULRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewVULRiskListResponse>;
  /** 获取资产视角的弱口令风险列表 {@link DescribeRiskCenterAssetViewWeakPasswordRiskListRequest} {@link DescribeRiskCenterAssetViewWeakPasswordRiskListResponse} */
  DescribeRiskCenterAssetViewWeakPasswordRiskList(data?: DescribeRiskCenterAssetViewWeakPasswordRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewWeakPasswordRiskListResponse>;
  /** 获取端口视角的端口风险列表 {@link DescribeRiskCenterPortViewPortRiskListRequest} {@link DescribeRiskCenterPortViewPortRiskListResponse} */
  DescribeRiskCenterPortViewPortRiskList(data?: DescribeRiskCenterPortViewPortRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterPortViewPortRiskListResponse>;
  /** 获取风险服务列表 {@link DescribeRiskCenterServerRiskListRequest} {@link DescribeRiskCenterServerRiskListResponse} */
  DescribeRiskCenterServerRiskList(data?: DescribeRiskCenterServerRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterServerRiskListResponse>;
  /** 获取漏洞视角的漏洞风险列表 {@link DescribeRiskCenterVULViewVULRiskListRequest} {@link DescribeRiskCenterVULViewVULRiskListResponse} */
  DescribeRiskCenterVULViewVULRiskList(data?: DescribeRiskCenterVULViewVULRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterVULViewVULRiskListResponse>;
  /** 获取内容风险列表 {@link DescribeRiskCenterWebsiteRiskListRequest} {@link DescribeRiskCenterWebsiteRiskListResponse} */
  DescribeRiskCenterWebsiteRiskList(data?: DescribeRiskCenterWebsiteRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterWebsiteRiskListResponse>;
  /** 获取扫描报告列表 {@link DescribeScanReportListRequest} {@link DescribeScanReportListResponse} */
  DescribeScanReportList(data?: DescribeScanReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanReportListResponse>;
  /** 获取扫描任务列表 {@link DescribeScanTaskListRequest} {@link DescribeScanTaskListResponse} */
  DescribeScanTaskList(data?: DescribeScanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskListResponse>;
  /** 查询漏洞信息 {@link DescribeSearchBugInfoRequest} {@link DescribeSearchBugInfoResponse} */
  DescribeSearchBugInfo(data: DescribeSearchBugInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchBugInfoResponse>;
  /** 子网列表 {@link DescribeSubnetAssetsRequest} {@link DescribeSubnetAssetsResponse} */
  DescribeSubnetAssets(data?: DescribeSubnetAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetAssetsResponse>;
  /** 获取任务扫描报告列表 {@link DescribeTaskLogListRequest} {@link DescribeTaskLogListResponse} */
  DescribeTaskLogList(data?: DescribeTaskLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogListResponse>;
  /** 获取报告下载的临时链接 {@link DescribeTaskLogURLRequest} {@link DescribeTaskLogURLResponse} */
  DescribeTaskLogURL(data: DescribeTaskLogURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogURLResponse>;
  /** 查询TOP攻击信息 {@link DescribeTopAttackInfoRequest} {@link DescribeTopAttackInfoResponse} */
  DescribeTopAttackInfo(data?: DescribeTopAttackInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopAttackInfoResponse>;
  /** 查询漏洞风险高级配置 {@link DescribeVULRiskAdvanceCFGListRequest} {@link DescribeVULRiskAdvanceCFGListResponse} */
  DescribeVULRiskAdvanceCFGList(data?: DescribeVULRiskAdvanceCFGListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULRiskAdvanceCFGListResponse>;
  /** 漏洞管理-漏洞详情 {@link DescribeVULRiskDetailRequest} {@link DescribeVULRiskDetailResponse} */
  DescribeVULRiskDetail(data?: DescribeVULRiskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULRiskDetailResponse>;
  /** vpc列表 {@link DescribeVpcAssetsRequest} {@link DescribeVpcAssetsResponse} */
  DescribeVpcAssets(data?: DescribeVpcAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcAssetsResponse>;
  /** 漏洞管理-漏洞视角的漏洞风险列表 {@link DescribeVulViewVulRiskListRequest} {@link DescribeVulViewVulRiskListResponse} */
  DescribeVulViewVulRiskList(data?: DescribeVulViewVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulViewVulRiskListResponse>;
  /** 修改集团账号状态 {@link ModifyOrganizationAccountStatusRequest} {@link ModifyOrganizationAccountStatusResponse} */
  ModifyOrganizationAccountStatus(data: ModifyOrganizationAccountStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOrganizationAccountStatusResponse>;
  /** 修改风险中心风险状态 {@link ModifyRiskCenterRiskStatusRequest} {@link ModifyRiskCenterRiskStatusResponse} */
  ModifyRiskCenterRiskStatus(data: ModifyRiskCenterRiskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterRiskStatusResponse>;
  /** 修改风险中心扫描任务 {@link ModifyRiskCenterScanTaskRequest} {@link ModifyRiskCenterScanTaskResponse} */
  ModifyRiskCenterScanTask(data: ModifyRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterScanTaskResponse>;
  /** 停止扫风险中心扫描任务 {@link StopRiskCenterTaskRequest} {@link StopRiskCenterTaskResponse} */
  StopRiskCenterTask(data: StopRiskCenterTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopRiskCenterTaskResponse>;
  /** 批量告警状态处理 {@link UpdateAlertStatusListRequest} {@link UpdateAlertStatusListResponse} */
  UpdateAlertStatusList(data: UpdateAlertStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAlertStatusListResponse>;
}

export declare type Versions = ["2022-11-21"];

export default Csip;
