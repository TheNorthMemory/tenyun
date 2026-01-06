/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AK简要信息 */
declare interface AKInfo {
  /** ak对应id */
  ID?: number;
  /** ak具体值 临时密钥时返回临时密钥 */
  Name?: string;
  /** 所属账号 */
  User?: string;
  /** 备注 */
  Remark?: string;
}

/** 访问密钥告警记录 */
declare interface AccessKeyAlarm {
  /** 告警名称 */
  Name?: string;
  /** 告警等级0-无效 1-提示 2-低危 3-中危 4-高危 5-严重 */
  Level?: number;
  /** 告警记录ID */
  ID?: number;
  /** 告警规则ID */
  AlarmRuleID?: number;
  /** 告警类型0 异常调用1 泄漏监测 */
  AlarmType?: number;
  /** 访问密钥 */
  AccessKey?: string;
  /** 访问密钥ID */
  AccessKeyID?: number;
  /** 访问密钥备注 */
  AccessKeyRemark?: string;
  /** 最后告警时间 */
  LastAlarmTime?: string;
  /** 告警状态0-未处理 1-已处理 2-已忽略 */
  Status?: number;
  /** 聚合日期 */
  Date?: string;
  /** 告警标签 */
  Tag?: string[];
  /** 所属主账号Uin */
  Uin?: string;
  /** 所属主账号昵称 */
  Nickname?: string;
  /** 所属子账号Uin */
  SubUin?: string;
  /** 所属子账号昵称 */
  SubNickname?: string;
  /** 账号类型0 主账号AK 1 子账号AK 2 临时密钥 */
  Type?: number;
  /** 所属appid */
  AppID?: number;
  /** 泄漏证据 */
  LeakEvidence?: string[];
  /** 是否支持编辑信任账号 */
  IsSupportEditWhiteAccount?: boolean;
  /** 告警证据 */
  Evidence?: string;
  /** 告警规则标识 */
  RuleKey?: string;
  /** 云厂商类型 0:腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云 */
  CloudType?: number;
  /** 告警AI分析状态-1 分析失败0 未分析1 分析中2 分析成功，真实告警3 分析成功，可疑告警 */
  AIStatus?: number;
  /** 首次告警时间戳（秒级） */
  FirstAlarmTimestamp?: number;
  /** 最后告警时间戳（秒级） */
  LastAlarmTimestamp?: number;
}

/** 访问密钥告警数量 */
declare interface AccessKeyAlarmCount {
  /** 访问密钥的ID */
  ID?: number;
  /** 访问密钥 */
  AccessKey?: string;
  /** 告警数量 */
  AlarmCount?: number;
  /** 访问密钥状态 0 禁用 1 已启用 2 已删除 */
  AccessKeyStatus?: number;
  /** AK创建时间 */
  AccessKeyCreateTime?: string;
  /** AK最后使用时间，从未使用过则返回“-” */
  LastAccessTime?: string;
}

/** 访问密钥资产告警信息 */
declare interface AccessKeyAlarmInfo {
  /** 告警类型/风险类型告警类型：0异常调用1泄漏检测2自定义风险类型：0：配置风险1: 自定义风险 */
  Type?: number;
  /** 告警数量/风险数量 */
  Count?: number;
}

/** 访问密钥资产信息 */
declare interface AccessKeyAsset {
  /** AK 的id */
  ID?: number;
  /** AK名称 */
  Name?: string;
  /** 备注 */
  Remark?: string;
  /** 账号所属APPID */
  AppID?: number;
  /** 所属主账号Uin */
  Uin?: string;
  /** 主账号昵称 */
  Nickname?: string;
  /** 所属子账号Uin */
  SubUin?: string;
  /** 所属子账号昵称 */
  SubNickname?: string;
  /** 0 主账号AK1 子账号AK2 临时密钥 */
  Type?: number;
  /** 安全建议 枚举0 正常1 立即处理2 建议加固 */
  Advice?: number;
  /** 告警信息列表 */
  AccessKeyAlarmList?: AccessKeyAlarmInfo[];
  /** 风险信息列表 */
  AccessKeyRiskList?: AccessKeyAlarmInfo[];
  /** 源IP数量 */
  IPCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 最近访问时间 */
  LastAccessTime?: string;
  /** AK状态 0:禁用1:已启用2:已删除(已在cam侧删除，安全中心仍然存留之前的记录) */
  Status?: number;
  /** 0 表示已检测1 表示检测中 */
  CheckStatus?: number;
  /** 云厂商类型 0:腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云 */
  CloudType?: number;
}

/** 访问密钥风险记录 */
declare interface AccessKeyRisk {
  /** 风险名称 */
  Name?: string;
  /** 风险等级0-无效 1-提示 2-低危 3-中危 4-高危 5-严重 */
  Level?: number;
  /** 风险记录ID */
  ID?: number;
  /** 风险规则ID */
  RiskRuleID?: number;
  /** 风险类型0-配置风险 */
  RiskType?: number;
  /** 访问密钥 */
  AccessKey?: string;
  /** 访问密钥ID */
  AccessKeyID?: number;
  /** 访问密钥备注 */
  AccessKeyRemark?: string;
  /** 风险检出时间 */
  RiskTime?: string;
  /** 风险状态0-未处理 2-已忽略 3-已收敛 */
  Status?: number;
  /** 风险标签 */
  Tag?: string[];
  /** 风险证据 */
  Evidence?: string;
  /** 风险描述 */
  Description?: string;
  /** 所属主账号Uin */
  Uin?: string;
  /** 所属主账号昵称 */
  Nickname?: string;
  /** 所属子账号Uin */
  SubUin?: string;
  /** 所属子账号昵称 */
  SubNickname?: string;
  /** 账号类型0 主账号AK 1子账号AK2 临时密钥 */
  Type?: number;
  /** 检测状态0表示 已检测1表示 检测中 */
  CheckStatus?: number;
  /** 所属appid */
  AppID?: number;
  /** 对应风险的查询参数 */
  QueryParam?: string;
  /** 云类型 0-腾讯云 4-阿里云 */
  CloudType?: number;
  /** 相关的AK列表，包含AK名和AK备注 */
  RelatedAK?: AKInfo[];
}

/** 访问密钥账号信息 */
declare interface AccessKeyUser {
  /** 账号ID */
  ID?: number;
  /** 账号名称 */
  Name?: string;
  /** 0 主账号 1子账号 */
  Type?: number;
  /** 访问方式0 API1 控制台与API */
  AccessType?: number;
  /** 安全建议 枚举 0 正常 1 立即处理 2 建议加固 */
  Advice?: number;
  /** 告警信息列表 */
  AccessKeyAlarmList?: AccessKeyAlarmInfo[];
  /** 风险信息列表 */
  AccessKeyRiskList?: AccessKeyAlarmInfo[];
  /** 账号所属APPID */
  AppID?: number;
  /** 主账号昵称 */
  Nickname?: string;
  /** 子账号昵称 */
  SubNickname?: string;
  /** 账号所属主账号Uin */
  Uin?: string;
  /** 账号自身uin，主账号时与主账号uin一致 */
  SubUin?: string;
  /** 登录IP */
  LoginIP?: string;
  /** 登录地址 */
  LoginLocation?: string;
  /** 登录时间 */
  LoginTime?: string;
  /** 运营商名称 */
  ISP?: string;
  /** 操作保护是否开启0 未开启1 已开启 */
  ActionFlag?: number;
  /** 登录保护是否开启0 未开启1 已开启 */
  LoginFlag?: number;
  /** 0 表示已检测 1 表示检测中 */
  CheckStatus?: number;
  /** 云厂商类型 0:腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云 */
  CloudType?: number;
}

/** 告警下拉字段 */
declare interface AlertExtraInfo {
  /** 相关攻击事件 */
  RelateEvent?: RelatedEvent;
  /** 泄漏内容 */
  LeakContent?: string;
  /** 泄漏API */
  LeakAPI?: string;
  /** secretID */
  SecretID?: string;
  /** 命中规则 */
  Rule?: string;
  /** 规则描述 */
  RuleDesc?: string;
  /** 协议端口 */
  ProtocolPort?: string;
  /** 攻击内容 */
  AttackContent?: string;
  /** 攻击IP画像 */
  AttackIPProfile?: string;
  /** 攻击IP标签 */
  AttackIPTags?: string;
  /** 请求方式 */
  RequestMethod?: string;
  /** HTTP日志 */
  HttpLog?: string;
  /** 被攻击域名 */
  AttackDomain?: string;
  /** 文件路径 */
  FilePath?: string;
  /** user_agent */
  UserAgent?: string;
  /** 请求头 */
  RequestHeaders?: string;
  /** 登录用户名 */
  LoginUserName?: string;
  /** 漏洞名称 */
  VulnerabilityName?: string;
  /** 公共漏洞和暴露 */
  CVE?: string;
  /** 服务进程 */
  ServiceProcess?: string;
  /** 文件名 */
  FileName?: string;
  /** 文件大小 */
  FileSize?: string;
  /** 文件MD5 */
  FileMD5?: string;
  /** 文件最近访问时间 */
  FileLastAccessTime?: string;
  /** 文件修改时间 */
  FileModifyTime?: string;
  /** 最近访问时间 */
  RecentAccessTime?: string;
  /** 最近修改时间 */
  RecentModifyTime?: string;
  /** 病毒名 */
  VirusName?: string;
  /** 病毒文件标签 */
  VirusFileTags?: string;
  /** 行为特征 */
  BehavioralCharacteristics?: string;
  /** 进程名（PID） */
  ProcessNamePID?: string;
  /** 进程路径 */
  ProcessPath?: string;
  /** 进程命令行 */
  ProcessCommandLine?: string;
  /** 进程权限 */
  ProcessPermissions?: string;
  /** 执行命令 */
  ExecutedCommand?: string;
  /** 受影响文件名 */
  AffectedFileName?: string;
  /** 诱饵路径 */
  DecoyPath?: string;
  /** 恶意进程文件大小 */
  MaliciousProcessFileSize?: string;
  /** 恶意进程文件MD5 */
  MaliciousProcessFileMD5?: string;
  /** 恶意进程名（PID） */
  MaliciousProcessNamePID?: string;
  /** 恶意进程路径 */
  MaliciousProcessPath?: string;
  /** 恶意进程启动时间 */
  MaliciousProcessStartTime?: string;
  /** 命令内容 */
  CommandContent?: string;
  /** 启动用户 */
  StartupUser?: string;
  /** 用户所属组 */
  UserGroup?: string;
  /** 新增权限 */
  NewPermissions?: string;
  /** 父进程 */
  ParentProcess?: string;
  /** 类名 */
  ClassName?: string;
  /** 所属类加载器 */
  ClassLoader?: string;
  /** 类文件大小 */
  ClassFileSize?: string;
  /** 类文件MD5 */
  ClassFileMD5?: string;
  /** 父类名 */
  ParentClassName?: string;
  /** 继承接口 */
  InheritedInterface?: string;
  /** 注释 */
  Comment?: string;
  /** 载荷内容 */
  PayloadContent?: string;
  /** 回连地址画像 */
  CallbackAddressPortrait?: string;
  /** 回连地址标签 */
  CallbackAddressTag?: string;
  /** 进程MD5 */
  ProcessMD5?: string;
  /** 文件权限 */
  FilePermission?: string;
  /** 来源于日志分析的信息字段 */
  FromLogAnalysisData?: KeyValue[];
  /** 命中探针 */
  HitProbe?: string;
  /** 命中蜜罐 */
  HitHoneyPot?: string;
  /** 命令列表 */
  CommandList?: string;
  /** 攻击事件描述 */
  AttackEventDesc?: string;
  /** 进程信息 */
  ProcessInfo?: string;
  /** 使用用户名&密码 */
  UserNameAndPwd?: string;
  /** 主机防护策略ID */
  StrategyID?: string;
  /** 主机防护策略名称 */
  StrategyName?: string;
  /** 主机防护命中策略，是策略ID和策略名称的组合 */
  HitStrategy?: string;
  /** 进程名 */
  ProcessName?: string;
  /** PID */
  PID?: string;
  /** 容器Pod名 */
  PodName?: string;
  /** 容器PodID */
  PodID?: string;
  /** Http响应 */
  Response?: string;
  /** 系统调用 */
  SystemCall?: string;
  /** 操作类型verb */
  Verb?: string;
  /** 日志ID */
  LogID?: string;
  /** 变更内容 */
  Different?: string;
  /** 事件类型 */
  EventType?: string;
  /** 事件描述 */
  Description?: string;
  /** 目标地址(容器反弹shell) */
  TargetAddress?: string;
  /** 恶意请求域名(容器恶意外联) */
  MaliciousRequestDomain?: string;
  /** 规则类型(容器K8sAPI异常请求) */
  RuleType?: string;
  /** 请求资源(容器K8sAPI异常请求) */
  RequestURI?: string;
  /** 发起请求用户(容器K8sAPI异常请求) */
  RequestUser?: string;
  /** 请求对象(容器K8sAPI异常请求) */
  RequestObject?: string;
  /** 响应对象(容器K8sAPI异常请求) */
  ResponseObject?: string;
  /** 文件类型(容器文件篡改) */
  FileType?: string;
  /** 标签特征(容器恶意外联) */
  TIType?: string;
  /** 来源IP(容器K8sAPI异常请求) */
  SourceIP?: string;
}

/** 告警中心全量告警列表数据 */
declare interface AlertInfo {
  /** 告警ID */
  ID?: string;
  /** 告警名称 */
  Name?: string;
  /** 告警来源CFW:云防火墙WAF:Web应用防火墙CWP:主机安全CSIP:云安全中心 */
  Source?: string;
  /** 告警等级1:提示2:低危3:中危4:高危5:严重 */
  Level?: number;
  /** 攻击者 */
  Attacker?: RoleInfo;
  /** 受害者 */
  Victim?: RoleInfo;
  /** 证据数据(例如攻击内容等，base64编码) */
  EvidenceData?: string;
  /** 证据位置(例如协议端口) */
  EvidenceLocation?: string;
  /** 证据路径 */
  EvidencePath?: string;
  /** 首次告警时间 */
  CreateTime?: string;
  /** 最近告警时间 */
  UpdateTime?: string;
  /** 告警次数 */
  Count?: number;
  /** 紧急缓解建议 */
  UrgentSuggestion?: string;
  /** 根治建议 */
  RemediationSuggestion?: string;
  /** 处理状态0：未处置，1：已忽略，2：已处置 */
  Status?: number;
  /** 告警处理类型 */
  ProcessType?: string;
  /** 告警大类 */
  Type?: string;
  /** 告警小类 */
  SubType?: string;
  /** 下拉字段 */
  ExtraInfo?: AlertExtraInfo;
  /** 聚合字段 */
  Key?: string;
  /** 告警日期 */
  Date?: string;
  /** appid */
  AppID?: string;
  /** 账户名称 */
  NickName?: string;
  /** 账户ID */
  Uin?: string;
  /** 行为 */
  Action?: number;
  /** 风险排查 */
  RiskInvestigation?: string;
  /** 风险处置 */
  RiskTreatment?: string;
  /** 日志类型 */
  LogType?: string;
  /** 语句检索 */
  LogSearch?: string;
}

/** 集群列表集群防护状态，左边枚举,右边为显示集群防护状态 0:未接入1:未防护 2:部分防护 3:防护中 4:接入异常 5:接入中 6:卸载中 7:卸载异常 */
declare interface AssetCluster {
  /** 租户id */
  AppId?: number;
  /** 租户uin */
  Uin?: string;
  /** 租户昵称 */
  Nick?: string;
  /** 地域 */
  Region?: string;
  /** 集群id */
  AssetId?: string;
  /** 集群名称 */
  AssetName?: string;
  /** 集群类型 */
  AssetType?: string;
  /** 集群创建时间 */
  InstanceCreateTime?: string;
  /** 状态 */
  Status?: string;
  /** 集群防护状态，左边枚举,右边为显示集群防护状态 0:未接入1:未防护 2:部分防护 3:防护中 4:接入异常 5:接入中 6:卸载中 7:卸载异常 */
  ProtectStatus?: number;
  /** 接入信息，不为空表示有接入异常信息 */
  ProtectInfo?: string;
  /** 私有网络id */
  VpcId?: string;
  /** 私有网络名称 */
  VpcName?: string;
  /** kubernetes版本 */
  KubernetesVersion?: string;
  /** 运行时组件 */
  Component?: string;
  /** 运行时组件版本 */
  ComponentVersion?: string;
  /** 组件状态 */
  ComponentStatus?: string;
  /** 体检时间 */
  CheckTime?: string;
  /** 关联主机数 */
  MachineCount?: number;
  /** 关联pod数 */
  PodCount?: number;
  /** 关联service数 */
  ServiceCount?: number;
  /** 漏洞风险 */
  VulRisk?: number;
  /** 配置风险 */
  CFGRisk?: number;
  /** 体检数 */
  CheckCount?: number;
  /** 是否核心：1:核心，2:非核心 */
  IsCore?: number;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
  /** 云资产类型：0：腾讯云，1：aws，2：azure */
  CloudType?: number;
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
  Region?: string;
  /** pod id */
  AssetId?: string;
  /** pod名称 */
  AssetName?: string;
  /** pod创建时间 */
  InstanceCreateTime?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 状态 */
  Status?: string;
  /** 集群id */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 主机id */
  MachineId?: string;
  /** 主机名 */
  MachineName?: string;
  /** pod ip */
  PodIp?: string;
  /** 关联service数 */
  ServiceCount?: number;
  /** 关联容器数 */
  ContainerCount?: number;
  /** 公网ip */
  PublicIp?: string;
  /** 内网ip */
  PrivateIp?: string;
  /** 是否核心：1:核心，2:非核心 */
  IsCore?: number;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
}

/** 资产扫描结构细节 */
declare interface AssetInfoDetail {
  /** 用户appid */
  AppID?: string;
  /** CVE编号 */
  CVEId?: string;
  /** 是扫描，0默认未扫描，1正在扫描，2扫描完成，3扫描出错 */
  IsScan?: number;
  /** 影响资产数目 */
  InfluenceAsset?: number;
  /** 未修复资产数目 */
  NotRepairAsset?: number;
  /** 未防护资产数目 */
  NotProtectAsset?: number;
  /** 任务ID */
  TaskId?: string;
  /** 任务百分比 */
  TaskPercent?: number;
  /** 任务时间 */
  TaskTime?: number;
  /** 扫描时间 */
  ScanTime?: string;
}

/** 资产类型和实例类型的映射 */
declare interface AssetInstanceTypeMap {
  /** 资产类型 */
  Text?: string;
  /** 资产类型 */
  Value?: string;
  /** 资产类型和实例类型映射关系 */
  InstanceTypeList?: FilterDataObject[];
}

/** 主机进程内容 */
declare interface AssetProcessItem {
  /** 云账号ID */
  CloudAccountID?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 租户ID */
  AppID?: number;
  /** 云账号名称 */
  CloudAccountName?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 公网IP */
  PublicIp?: string;
  /** 内网IP */
  PrivateIp?: string;
  /** 进程ID */
  ProcessID?: string;
  /** 进程名称 */
  ProcessName?: string;
  /** 命令行 */
  CmdLine?: string;
  /** 监听端口列表 */
  Port?: string;
}

/** 资产视角风险项 */
declare interface AssetRiskItem {
  /** 租户ID */
  AppId?: number;
  /** 云厂商 */
  Provider?: string;
  /** 云厂商名称 */
  ProviderName?: string;
  /** 云账号名称 */
  CloudAccountName?: string;
  /** 云账号ID */
  CloudAccountId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 首次发现时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 风险状态 */
  RiskStatus?: number;
  /** 风险名称 */
  RiskTitle?: string;
  /** 检查类型 */
  CheckType?: string;
  /** 风险等级 */
  Severity?: string;
  /** 风险规则ID */
  RiskRuleId?: string;
  /** 处置分类 */
  Classify?: string;
  /** 等保合规 */
  StandardTerms?: StandardTerm[];
}

/** 安全中心资产标签 */
declare interface AssetTag {
  /** 标签的key值,可以是字母、数字、下划线 */
  TagKey?: string;
  /** 标签的vale值,可以是字母、数字、下划线 */
  TagValue?: string;
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
  /** 相关规范 */
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
  Nick?: string;
  /** 用户uin */
  Uin?: string;
  /** 当资产类型为LBL的时候，展示该字段，方便定位具体的LB */
  ClbId?: string;
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
  /** 状态，0未处理、1已处置、2已忽略、3云防已防护 */
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
  Nick?: string;
  /** 用户uin */
  Uin?: string;
  /** 识别来源，详细看枚举返回。 */
  From?: string;
  /** 服务判定,high_risk_service 高危服务 web_service web服务 other_service 其他服务 */
  ServiceJudge?: string;
  /** 状态，0未处理、1已处置、2已忽略、3云防已防护、4无需处理 */
  XspmStatus?: number;
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
  Nick?: string;
  /** 用户uin */
  Uin?: string;
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
  EMGCVulType?: number;
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
  Nick?: string;
  /** 用户uin */
  Uin?: string;
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
  EMGCVulType?: number;
  /** CVSS评分 */
  CVSS?: number;
  /** 前端索引id */
  Index?: string;
  /** pcmgrId */
  PCMGRId?: string;
  /** 报告id */
  LogId?: string;
  /** 任务id */
  TaskId?: string;
  /** 漏洞标签 */
  VulTag?: string[];
  /** 漏洞披露时间 */
  DisclosureTime?: string;
  /** 攻击热度 */
  AttackHeat?: number;
  /** 是否必修漏洞1是，0不是 */
  IsSuggest?: number;
  /** 处置任务ID */
  HandleTaskId?: string;
  /** 引擎来源 */
  EngineSource?: string;
  /** 新的漏洞风险id(同全网漏洞表的RiskId) */
  VulRiskId?: string;
  /** 新版漏洞id */
  TvdID?: string;
  /** 是否可以一键体检，1-可以，0-不可以 */
  IsOneClick?: number;
  /** 是否POC扫描，0-非POC，1-POC */
  IsPOC?: number;
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
  /** ID，处理风险使用 */
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
  Nick?: string;
  /** 用户uin */
  Uin?: string;
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
  /** 证明 */
  Payload?: string;
  /** 端口 */
  Port?: number;
}

/** 通用的下拉框列表 */
declare interface AttributeOptionSet {
  /** cvm实例类型 */
  Text?: string;
  /** cvm实例名称 */
  Value?: string;
}

/** 漏洞详细信息 */
declare interface BugInfoDetail {
  /** 漏洞编号 */
  Id?: number;
  /** 漏洞对应pocId */
  PatchId?: string;
  /** 漏洞名称 */
  VULName?: string;
  /** 漏洞严重性：high,middle，low，info */
  Level?: string;
  /** cvss评分 */
  CVSSScore?: string;
  /** cve编号 */
  CVEId?: string;
  /** 漏洞标签 */
  Tag?: string;
  /** 漏洞种类，1:web应用，2:系统组件漏洞，3:配置风险 */
  VULCategory?: number;
  /** 漏洞影响系统 */
  ImpactOs?: string;
  /** 漏洞影响组件 */
  ImpactCOMPENT?: string;
  /** 漏洞影响版本 */
  ImpactVersion?: string;
  /** 链接 */
  Reference?: string;
  /** 漏洞描述 */
  VULDescribe?: string;
  /** 修复建议 */
  Fix?: string;
  /** 产品支持状态，实时返回 */
  ProSupport?: number;
  /** 是否公开，0为未发布，1为发布 */
  IsPublish?: number;
  /** 释放时间 */
  ReleaseTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 漏洞子类别 */
  SubCategory?: string;
}

/** 配置视角的配置风险对象 */
declare interface CFGViewCFGRisk {
  /** 影响资产 */
  NoHandleCount?: number;
  /** 风险等级，low-低危，high-高危，middle-中危，info-提示，extreme-严重。 */
  Level?: string;
  /** 最近识别时间 */
  RecentTime?: string;
  /** 首次识别时间 */
  FirstTime?: string;
  /** 状态，0未处理、1已处置、2已忽略 */
  AffectAssetCount?: number;
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
  /** 配置名 */
  CFGName?: string | null;
  /** 检查类型 */
  CheckType?: string | null;
  /** - */
  CFGSTD?: string | null;
  /** 描述 */
  CFGDescribe?: string | null;
  /** 修复建议 */
  CFGFix?: string | null;
  /** 帮助文档 */
  CFGHelpURL?: string | null;
}

/** 主机资产信息主机防护状态枚举，左边是常量，右边是显示0：未安装1：基础版防护中2：普惠版防护中3：专业版防护中4：旗舰版防护中5：已离线6：已关机 */
declare interface CVMAssetVO {
  /** 资产id */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 地域 */
  Region?: string;
  /** 防护状态 */
  CWPStatus?: number;
  /** 资产创建时间 */
  AssetCreateTime?: string;
  /** 公网IP */
  PublicIp?: string;
  /** 私网IP */
  PrivateIp?: string;
  /** vpc id */
  VpcId?: string;
  /** vpc 名 */
  VpcName?: string;
  /** appid信息 */
  AppId?: number;
  /** 用户uin */
  Uin?: string;
  /** 昵称 */
  NickName?: string;
  /** 可用区 */
  AvailableArea?: string;
  /** 是否核心 */
  IsCore?: number;
  /** 子网id */
  SubnetId?: string;
  /** 子网名 */
  SubnetName?: string;
  /** 主机安全Agent UUID */
  InstanceUuid?: string;
  /** 云主机 CVM UUID */
  InstanceQUuid?: string;
  /** os名 */
  OsName?: string;
  /** 分区 */
  PartitionCount?: number;
  /** cpu信息 */
  CPUInfo?: string;
  /** cpu大小 */
  CPUSize?: number;
  /** cpu负载 */
  CPULoad?: string;
  /** 内存大小 */
  MemorySize?: string;
  /** 内存负载 */
  MemoryLoad?: string;
  /** 硬盘大小 */
  DiskSize?: string;
  /** 硬盘负载 */
  DiskLoad?: string;
  /** 账号数 */
  AccountCount?: string;
  /** 进程数 */
  ProcessCount?: string;
  /** 软件应用 */
  AppCount?: string;
  /** 监听端口 */
  PortCount?: number;
  /** 网络攻击 */
  Attack?: number;
  /** 网络访问 */
  Access?: number;
  /** 网络拦截 */
  Intercept?: number;
  /** 入向峰值带宽 */
  InBandwidth?: string;
  /** 出向峰值带宽 */
  OutBandwidth?: string;
  /** 入向累计流量 */
  InFlow?: string;
  /** 出向累计流量 */
  OutFlow?: string;
  /** 最近扫描时间 */
  LastScanTime?: string;
  /** 恶意主动外联 */
  NetWorkOut?: number;
  /** 端口风险 */
  PortRisk?: number;
  /** 漏洞风险 */
  VulnerabilityRisk?: number;
  /** 配置风险 */
  ConfigurationRisk?: number;
  /** 扫描任务数 */
  ScanTask?: number;
  /** 标签 */
  Tag?: Tag[];
  /** memberId */
  MemberId?: string;
  /** os全称 */
  Os?: string;
  /** 风险服务暴露 */
  RiskExposure?: number;
  /** 模拟攻击工具状态。0代表未安装，1代表已安装，2代表已离线 */
  BASAgentStatus?: number;
  /** 1新资产；0 非新资产 */
  IsNewAsset?: number;
  /** 0 未安装 1安装 2:安装中 */
  CVMAgentStatus?: number;
  /** 1:开启 0:未开启 */
  CVMStatus?: number;
  /** 1:客户端已安装 0：未安装 2: Agentless */
  DefenseModel?: number;
  /** 1:已安装 0:未安装 */
  TatStatus?: number;
  /** cpu趋势图 */
  CpuTrend?: Element[];
  /** 内存趋势图 */
  MemoryTrend?: Element[];
  /** 1:agent在线 0:agent离线 2:主机离线 */
  AgentStatus?: number;
  /** 本月防护关闭次数 */
  CloseDefenseCount?: number;
  /** 运行状态 */
  InstanceState?: string;
  /** 安全组数据 */
  SecurityGroupIds?: string[];
  /** 物理内存占用KB */
  AgentMemRss?: number;
  /** CPU使用率百分比 */
  AgentCpuPer?: number;
  /** cvm真正所属的appid */
  RealAppid?: number;
  /** 云资产类型：0：腾讯云，1：aws，2：azure */
  CloudType?: number;
  /** 主机防护状态枚举0：未安装1：基础版防护中2：普惠版防护中3：专业版防护中4：旗舰版防护中5：已离线6：已关机 */
  ProtectStatus?: number;
  /** 最后离线时间 */
  OfflineTime?: string;
}

/** 调用记录详情 */
declare interface CallRecord {
  /** 调用记录ID */
  CallID?: string;
  /** 访问密钥 */
  AccessKey?: string;
  /** 访问密钥备注 */
  AccessKeyRemark?: string;
  /** 访问密钥ID */
  AccessKeyID?: number;
  /** 调用源IP */
  SourceIP?: string;
  /** 调用源IP备注 */
  SourceIPRemark?: string;
  /** 调用源IP地域 */
  Region?: string;
  /** IP类型 0:账号内（未备注） 1:账号外（未备注） 2:账号内 (已备注) 3:账号外 (已备注) */
  IPType?: number;
  /** 调用接口名称 */
  EventName?: string;
  /** 调用产品名称 */
  ProductName?: string;
  /** 调用类型0:控制台调用1:API */
  EventType?: number;
  /** 用户类型CAMUser/root/AssumedRole */
  UserType?: string;
  /** 用户/角色名称 */
  UserName?: string;
  /** 策略列表 */
  PolicySet?: string[];
  /** 调用次数 */
  CallCount?: number;
  /** 调用错误码0表示成功 */
  Code?: number;
  /** 首次调用时间 */
  FirstCallTime?: string;
  /** 最后调用时间 */
  LastCallTime?: string;
  /** IP关联资产ID，如果为空字符串，表示没有关联 */
  InstanceID?: string;
  /** IP关联资产名称 */
  InstanceName?: string;
  /** 聚合日期 */
  Date?: string;
  /** appid */
  AppID?: number;
  /** 展示状态 */
  ShowStatus?: boolean;
  /** 运营商 */
  ISP?: string;
  /** 账号外vpc信息列表 */
  VpcInfo?: SourceIPVpcInfo[];
  /** 调用请求客户端列表 */
  ReqClient?: string[];
}

/** 检查项视角风险 */
declare interface CheckViewRiskItem {
  /** 检查项规则ID */
  RiskRuleId?: string;
  /** 风险名称 */
  RiskTitle?: string;
  /** 检查类型 */
  CheckType?: string;
  /** 风险等级 */
  Severity?: string;
  /** 存在1个风险项 */
  RiskDesc?: string;
  /** 首次发现时间 */
  CreateTime?: string;
  /** 风险更新时间 */
  UpdateTime?: string;
  /** 云厂商 */
  Provider?: string;
  /** 风险状态 */
  RiskStatus?: number;
  /** 受影响资产数量 */
  AssetCount?: number;
  /** 风险数量 */
  RiskCount?: number;
  /** 资产类型 */
  AssetType?: string;
  /** 事件类型 */
  EventType?: string;
  /** 处置分类 */
  Classify?: string;
  /** cspm规范条款 */
  StandardTerms?: StandardTerm[];
}

/** clb实例和监听器信息 */
declare interface ClbListenerListInfo {
  /** 监听器id */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 负载均衡Id */
  LoadBalancerId?: string;
  /** 负载均衡名称 */
  LoadBalancerName?: string;
  /** 协议 */
  Protocol?: string;
  /** 地域 */
  Region?: string;
  /** 负载均衡ip */
  Vip?: string;
  /** 端口 */
  VPort?: number;
  /** 区域 */
  Zone?: string;
  /** 私有网络id */
  NumericalVpcId?: number;
  /** 负载均衡类型 */
  LoadBalancerType?: string;
  /** 监听器域名 */
  Domain?: string;
  /** 负载均衡域名 */
  LoadBalancerDomain?: string;
}

/** 多云账户统计信息 */
declare interface CloudCountDesc {
  /** 0表示腾讯云1表示AWS */
  CloudType?: number;
  /** 账户数量 */
  CloudCount?: number;
  /** 该云账号类型描述 */
  CloudDesc?: string;
}

/** 风险中心风险概览统计数据 */
declare interface CsipRiskCenterStatistics {
  /** 端口风险总数 */
  PortTotal?: number;
  /** 端口风险高危数量 */
  PortHighLevel?: number;
  /** 弱口令风险总数 */
  WeakPasswordTotal?: number;
  /** 弱口令风险高危数量 */
  WeakPasswordHighLevel?: number;
  /** 网站风险数量 */
  WebsiteTotal?: number;
  /** 网站高危风险数量 */
  WebsiteHighLevel?: number;
  /** 最新的扫描时间 */
  LastScanTime?: string;
  /** 漏洞风险数 */
  VULTotal?: number;
  /** 高危漏洞风险数 */
  VULHighLevel?: number;
  /** 配置项风险数量 */
  CFGTotal?: number;
  /** 高危配置项风险数量 */
  CFGHighLevel?: number;
  /** 测绘服务风险数量 */
  ServerTotal?: number | null;
  /** 测绘服务高危数量 */
  ServerHighLevel?: number | null;
  /** 主机基线风险数量 */
  HostBaseLineRiskTotal?: number;
  /** 主机基线高危风险数量 */
  HostBaseLineRiskHighLevel?: number;
  /** 容器基线风险数量 */
  PodBaseLineRiskTotal?: number;
  /** 容器基线高危风险数量 */
  PodBaseLineRiskHighLevel?: number;
}

/** db资产输出字段 */
declare interface DBAssetVO {
  /** 资产id */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** vpcid */
  VpcId?: string;
  /** vpc标签 */
  VpcName?: string;
  /** 地域 */
  Region?: string;
  /** 域名 */
  Domain?: string;
  /** 资产创建时间 */
  AssetCreateTime?: string;
  /** 最近扫描时间 */
  LastScanTime?: string;
  /** 配置风险 */
  ConfigurationRisk?: number;
  /** 网络攻击 */
  Attack?: number;
  /** 网络访问 */
  Access?: number;
  /** 扫描任务 */
  ScanTask?: number;
  /** 用户appid */
  AppId?: number;
  /** 用户uin */
  Uin?: string;
  /** 昵称别名 */
  NickName?: string;
  /** 端口 */
  Port?: number;
  /** 标签 */
  Tag?: Tag[];
  /** 内网ip */
  PrivateIp?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 状态 */
  Status?: number;
  /** 是否核心 */
  IsCore?: number;
  /** 是否新资产: 1新 */
  IsNewAsset?: number;
}

/** 漏洞和资产信息 */
declare interface DataSearchBug {
  /** 返回查询状态 */
  StateCode?: string;
  /** 漏洞详情 */
  DataBug?: BugInfoDetail[];
  /** 漏洞影响资产详情 */
  DataAsset?: AssetInfoDetail[];
  /** true支持扫描。false不支持扫描 */
  VSSScan?: boolean;
  /** 0不支持，1支持 */
  CWPScan?: string;
  /** 1支持虚拟补丁，0或空不支持 */
  CFWPatch?: string;
  /** 0不支持，1支持 */
  WafPatch?: number;
  /** 0不支持，1支持 */
  CWPFix?: number;
  /** 产品支持状态 */
  DataSupport?: ProductSupport[];
  /** cveId */
  CveId?: string;
}

/** db资产详情 */
declare interface DbAssetInfo {
  /** 云防状态 */
  CFWStatus?: number;
  /** 资产id */
  AssetId?: string;
  /** vpc信息 */
  VpcName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 私网ip */
  PrivateIp?: string;
  /** 地域 */
  Region?: string;
  /** vpc信息 */
  VpcId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 云防保护版本 */
  CFWProtectLevel?: number;
  /** tag信息 */
  Tag?: Tag[];
}

/** 域名资产 */
declare interface DomainAssetVO {
  /** 资产id */
  AssetId?: string[];
  /** 资产名 */
  AssetName?: string[];
  /** 资产类型 */
  AssetType?: string[];
  /** 地域 */
  Region?: string[];
  /** Waf状态 */
  WAFStatus?: number;
  /** 资产创建时间 */
  AssetCreateTime?: string;
  /** Appid */
  AppId?: number;
  /** 账号id */
  Uin?: string;
  /** 账号名称 */
  NickName?: string;
  /** 是否核心 */
  IsCore?: number;
  /** 是否云上资产 */
  IsCloud?: number;
  /** 网络攻击 */
  Attack?: number;
  /** 网络访问 */
  Access?: number;
  /** 网络拦截 */
  Intercept?: number;
  /** 入站峰值带宽 */
  InBandwidth?: string;
  /** 出站峰值带宽 */
  OutBandwidth?: string;
  /** 入站累计流量 */
  InFlow?: string;
  /** 出站累计流量 */
  OutFlow?: string;
  /** 最近扫描时间 */
  LastScanTime?: string;
  /** 端口风险 */
  PortRisk?: number;
  /** 漏洞风险 */
  VulnerabilityRisk?: number;
  /** 配置风险 */
  ConfigurationRisk?: number;
  /** 扫描任务 */
  ScanTask?: number;
  /** 域名 */
  SubDomain?: string;
  /** 解析ip */
  SeverIp?: string[];
  /** bot攻击数量 */
  BotCount?: number;
  /** 弱口令风险 */
  WeakPassword?: number;
  /** 内容风险 */
  WebContentRisk?: number;
  /** tag标签 */
  Tag?: Tag[];
  /** 关联实例类型 */
  SourceType?: string;
  /** memberId信息 */
  MemberId?: string;
  /** cc攻击 */
  CCAttack?: number;
  /** web攻击 */
  WebAttack?: number;
  /** 风险服务暴露数量 */
  ServiceRisk?: number;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
  /** 待确认资产的随机三级域名 */
  VerifyDomain?: string;
  /** 待确认资产的TXT记录内容 */
  VerifyTXTRecord?: string;
  /** 待确认资产的认证状态，0-待认证，1-认证成功，2-认证中，3-txt认证失败，4-人工认证失败 */
  VerifyStatus?: number;
  /** bot访问数量 */
  BotAccessCount?: number;
}

/** 统计条目 */
declare interface Element {
  /** 统计类型 */
  Key?: string;
  /** 统计对象 */
  Value?: string;
}

/** 暴露资产分类 */
declare interface ExposeAssetTypeItem {
  /** 云厂商 */
  Provider?: string;
  /** 云厂商名称 */
  ProviderName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产类型名称 */
  AssetTypeName?: string;
}

/** 暴露资产 */
declare interface ExposesItem {
  /** 云厂商 */
  Provider?: string;
  /** 云账号名称 */
  CloudAccountName?: string;
  /** 云账号 */
  CloudAccountId?: string;
  /** 域名 */
  Domain?: string;
  /** IP */
  Ip?: string;
  /** 端口或者端口范围 */
  Port?: string;
  /** 开放 */
  Status?: string;
  /** 风险类型 */
  RiskType?: string;
  /** acl类型 */
  AclType?: string;
  /** acl列表 */
  AclList?: string;
  /** 资产ID */
  AssetId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 端口服务数量 */
  PortServiceCount?: number;
  /** 高危端口数量 */
  HighRiskPortServiceCount?: number;
  /** web应用数量 */
  WebAppCount?: number;
  /** 有风险web应用数量 */
  RiskWebAppCount?: number;
  /** 弱口令数量 */
  WeakPasswordCount?: number;
  /** 漏洞数量 */
  VulCount?: number;
  /** 首次发现时间 */
  CreateTime?: string;
  /** 最近更新时间 */
  UpdateTime?: string;
  /** 实例类型名称 */
  AssetTypeName?: string;
  /** 开放状态 */
  DisplayStatus?: string;
  /** 端口状态 */
  DisplayRiskType?: string;
  /** 扫描任务状态 */
  ScanTaskStatus?: string;
  /** uuid */
  Uuid?: string;
  /** 是否进行过安全体检 */
  HasScan?: string;
  /** 租户ID */
  AppId?: number;
  /** 租户ID字符串 */
  AppIdStr?: string;
  /** 记录ID */
  ExposureID?: number;
  /** 端口开放数量 */
  PortDetectCount?: number;
  /** 端口开放结果 */
  PortDetectResult?: string;
  /** 标签 */
  Tag?: string;
  /** 备注 */
  Comment?: string;
  /** 待治理风险数量 */
  ToGovernedRiskCount?: number;
  /** 待治理风险内容 */
  ToGovernedRiskContent?: string;
}

/** 列表查询接口采用新filter 接口，直接传给后台供后台查询过滤 */
declare interface Filter {
  /** 查询数量限制 */
  Limit?: number;
  /** 查询偏移位置 */
  Offset?: number;
  /** 排序采用升序还是降序 升:asc 降 desc */
  Order?: string;
  /** 需排序的字段 */
  By?: string;
  /** 过滤的列及内容 */
  Filters?: WhereFilter[];
  /** 可填无， 日志使用查询时间 */
  StartTime?: string;
  /** 可填无， 日志使用查询时间 */
  EndTime?: string;
}

/** 过滤数据对象 */
declare interface FilterDataObject {
  /** 英文翻译 */
  Value?: string;
  /** 中文翻译 */
  Text?: string;
}

/** filter过滤条件 */
declare interface Filters {
  /** 实例ID */
  Name?: string | null;
  /** 实例ID内容 */
  Values?: string[] | null;
  /** 模糊匹配 */
  ExactMatch?: string | null;
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
  Tag?: Tag[];
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
  AddressIPV6?: string;
  /** 是否核心 */
  IsCore?: number;
  /** 风险服务暴露 */
  RiskExposure?: number;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
  /** 网关状态 */
  Status?: string;
  /** TSE的网关真实地域 */
  EngineRegion?: string;
  /** 弱口令风险 */
  WeakPasswordRisk?: number;
}

/** 高危基线风险内容 */
declare interface HighBaseLineRiskItem {
  /** 云账号ID */
  CloudAccountID?: string;
  /** 实例ID */
  AssetID?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 风险名称 */
  RiskName?: string;
  /** 风险分类 */
  RiskCategory?: string;
  /** 风险等级 */
  RiskLevel?: string;
  /** 风险描述 */
  RiskDesc?: string;
  /** 风险结果 */
  RiskResult?: string;
  /** 修复建议 */
  FixAdvice?: string;
  /** Linux漏洞 */
  RiskCategoryName?: string;
  /** 风险等级名称 */
  RiskLevelName?: string;
  /** 实例状态 */
  InstanceStatusName?: string;
  /** 首次发现时间 */
  CreateTime?: string;
  /** 最近发现时间 */
  UpdateTime?: string;
  /** 租户ID */
  AppID?: number;
}

/** ip列表 */
declare interface IpAssetListVO {
  /** 资产id */
  AssetId?: string;
  /** 资产name */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 地域 */
  Region?: string;
  /** 云防状态 */
  CFWStatus?: number;
  /** 资产创建时间 */
  AssetCreateTime?: string;
  /** 公网IP */
  PublicIp?: string;
  /** 公网ip类型 */
  PublicIpType?: number;
  /** vpc */
  VpcId?: string;
  /** vpc名 */
  VpcName?: string;
  /** appid */
  AppId?: number;
  /** 用户uin */
  Uin?: string;
  /** 名称 */
  NickName?: string;
  /** 核心 */
  IsCore?: number;
  /** 云上 */
  IsCloud?: number;
  /** 网络攻击 */
  Attack?: number;
  /** 网络访问 */
  Access?: number;
  /** 网络拦截 */
  Intercept?: number;
  /** 入向带宽 */
  InBandwidth?: string;
  /** 出向带宽 */
  OutBandwidth?: string;
  /** 入向流量 */
  InFlow?: string;
  /** 出向流量 */
  OutFlow?: string;
  /** 最近扫描时间 */
  LastScanTime?: string;
  /** 端口风险 */
  PortRisk?: number;
  /** 漏洞风险 */
  VulnerabilityRisk?: number;
  /** 配置风险 */
  ConfigurationRisk?: number;
  /** 扫描任务 */
  ScanTask?: number;
  /** 弱口令 */
  WeakPassword?: number;
  /** 内容风险 */
  WebContentRisk?: number;
  /** 标签 */
  Tag?: Tag[];
  /** eip主键 */
  AddressId?: string;
  /** MemberId信息 */
  MemberId?: string;
  /** 风险服务暴露 */
  RiskExposure?: number;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
  /** 资产认证状态，0-待认证，1-认证成功，2-认证中，3+-认证失败 */
  VerifyStatus?: number;
}

/** KeyValue对 */
declare interface KeyValue {
  /** 字段 */
  Key?: string;
  /** 值 */
  Value?: string;
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
  Tag?: Tag[];
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
  IsCore?: number;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
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

/** 集团账号详情 */
declare interface OrganizationInfo {
  /** 成员账号名称 */
  NickName?: string;
  /** 部门节点名称，账号所属部门 */
  NodeName?: string;
  /** Member/Admin/DelegatedAdmin/EntityAdmin; 成员/管理员/委派管理员/主体管理员 */
  Role?: string;
  /** 成员账号id */
  MemberId?: string;
  /** 账号加入方式,create/invite */
  JoinType?: string;
  /** 集团名称 */
  GroupName?: string;
  /** 管理员账号名称 */
  AdminName?: string;
  /** 管理员Uin */
  AdminUin?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 部门数 */
  NodeCount?: number;
  /** 成员数 */
  MemberCount?: number;
  /** 子账号数 */
  SubAccountCount?: number;
  /** 异常子账号数量 */
  AbnormalSubUserCount?: number;
  /** 集团关系策略权限 */
  GroupPermission?: string[];
  /** 成员关系策略权限 */
  MemberPermission?: string[];
  /** 集团付费模式；0/自付费，1/代付费 */
  GroupPayMode?: number;
  /** 个人付费模式；0/自付费，1/代付费 */
  MemberPayMode?: number;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  CFWProtect?: string;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  WAFProtect?: string;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  CWPProtect?: string;
  /** 所有部门的集合数组 */
  Departments?: string[];
  /** 成员创建时间 */
  MemberCreateTime?: string;
  /** Advanced/Enterprise/Ultimate */
  CSIPProtect?: string;
  /** 1表示配额消耗方 */
  QuotaConsumer?: number;
  /** 管理员/委派管理员 已开启数量 */
  EnableAdminCount?: number;
  /** 账户多云信息统计，数组形式，具体参考CloudCountDesc描述 */
  CloudCountDesc?: CloudCountDesc[];
  /** 管理员/委派管理员 总数量 */
  AdminCount?: number;
}

/** 集团账号成员详情 */
declare interface OrganizationUserInfo {
  /** 成员账号Uin */
  Uin?: string;
  /** 成员账号名称 */
  NickName?: string;
  /** 部门节点名称，账号所属部门 */
  NodeName?: string;
  /** 资产数量 */
  AssetCount?: number;
  /** 风险数量 */
  RiskCount?: number;
  /** 攻击数量 */
  AttackCount?: number;
  /** Member/Admin/;成员或者管理员 */
  Role?: string;
  /** 成员账号id */
  MemberId?: string;
  /** 成员账号Appid */
  AppId?: string;
  /** 账号加入方式,create/invite */
  JoinType?: string;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  CFWProtect?: string;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  WAFProtect?: string;
  /** 空则未开启，否则不同字符串对应不同版本，common为通用，不区分版本 */
  CWPProtect?: string;
  /** 1启用，0未启用 */
  Enable?: number;
  /** "Free" //免费版 "Advanced" //高级版 "Enterprise" //企业版 "Ultimate" //旗舰版 */
  CSIPProtect?: string;
  /** 1为配额消耗者 */
  QuotaConsumer?: number;
  /** 账户类型，0为腾讯云账户，1为AWS账户 */
  CloudType?: number;
  /** 0为缺省值，1为10分钟，2为1小时，3为24小时 */
  SyncFrequency?: number;
  /** 多云账户是否过期 */
  IsExpired?: boolean;
  /** 多云账户 权限列表 */
  PermissionList?: string[];
  /** 1 */
  AuthType?: number;
  /** 0 腾讯云集团账户1 腾讯云接入账户2 非腾讯云 */
  TcMemberType?: number;
  /** 子账号数量 */
  SubUserCount?: number;
  /** 加入方式详细信息 */
  JoinTypeInfo?: string;
}

/** 端口风险高级配置项 */
declare interface PortRiskAdvanceCFGParamItem {
  /** 端口集合,以逗号分隔 */
  PortSets: string;
  /** 检测项类型，0-系统定义，1-用户自定义 */
  CheckType: number;
  /** 检测项描述 */
  Detail?: string;
  /** 是否启用，1-启用，0-禁用 */
  Enable?: number;
}

/** 端口视角的端口风险对象 */
declare interface PortViewPortRisk {
  /** 未处理数量 */
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
  /** 影响资产数量 */
  AffectAssetCount?: string;
  /** ID */
  Id?: string;
  /** 识别来源 */
  From?: string;
  /** 前端索引 */
  Index?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户昵称 */
  Nick?: string;
  /** 用户uin */
  Uin?: string;
  /** 服务 */
  Service?: string;
}

/** 漏洞信息产品支持状态 */
declare interface ProductSupport {
  /** true支持扫描。false不支持扫描 */
  VSSScan?: boolean;
  /** 0不支持，1支持 */
  CWPScan?: string;
  /** 1支持虚拟补丁，0或空不支持 */
  CFWPatch?: string;
  /** 0不支持，1支持 */
  WafPatch?: number;
  /** 0不支持，1支持 */
  CWPFix?: number;
  /** cveid */
  CveId?: string;
}

/** 公网IP和域名资产列表key */
declare interface PublicIpDomainListKey {
  /** 资产值 */
  Asset: string;
}

/** 相关攻击事件结构 */
declare interface RelatedEvent {
  /** 事件ID */
  EventID?: string;
  /** 事件描述 */
  Description?: string;
  /** 与事件关联的告警数量 */
  RelatedCount?: number;
}

/** 报告项key */
declare interface ReportItemKey {
  /** 日志Id列表 */
  TaskLogList: string[];
}

/** 报告中的task_id list */
declare interface ReportTaskIdList {
  /** 任务id列表 */
  TaskIdList: string[];
  /** 租户ID */
  AppId?: string;
}

/** 仓库镜像列表 */
declare interface RepositoryImageVO {
  /** 用户appid */
  AppId?: number;
  /** 用户uin */
  Uin?: string;
  /** 昵称 */
  NickName?: string;
  /** 镜像id */
  InstanceId?: string;
  /** 镜像名称 */
  InstanceName?: string;
  /** 镜像创建时间 */
  InstanceCreateTime?: string;
  /** 镜像大小带单位 */
  InstanceSize?: string;
  /** 构建次数 */
  BuildCount?: number;
  /** 镜像类型 */
  InstanceType?: string;
  /** 授权状态 */
  AuthStatus?: number;
  /** 镜像版本 */
  InstanceVersion?: string;
  /** 地域 */
  Region?: string;
  /** 仓库地址 */
  RepositoryUrl?: string;
  /** 仓库名称 */
  RepositoryName?: string;
  /** 是否核心 */
  IsCore?: number;
  /** 漏洞风险 */
  VulRisk?: number;
  /** 检查任务 */
  CheckCount?: number;
  /** 体检时间 */
  CheckTime?: string;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
}

/** 风险调用记录详情 */
declare interface RiskCallRecord {
  /** 接口名称 */
  EventName?: string;
  /** 接口中文描述 */
  EventDescCN?: string;
  /** 接口英文描述 */
  EventDescEN?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 产品中文名称 */
  ProductNameCN?: string;
  /** 调用次数 */
  CallCount?: number;
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

/** 风险详情 */
declare interface RiskDetailItem {
  /** 首次发现时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 风险状态 */
  RiskStatus?: number;
  /** 风险内容 */
  RiskContent?: string;
  /** 云厂商 */
  Provider?: string;
  /** 云厂商名称 */
  ProviderName?: string;
  /** 云账号 */
  CloudAccountId?: string;
  /** 云账号名称 */
  CloudAccountName?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 风险ID */
  RiskId?: number;
  /** 风险规则ID */
  RiskRuleId?: string;
  /** 风险验证状态 */
  CheckStatus?: string;
}

/** 风险规则 */
declare interface RiskRuleInfo {
  /** 风险检查项ID */
  RuleID?: string;
  /** 云厂商名称 */
  Provider?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 风险名称 */
  RiskTitle?: string;
  /** 检查类型 */
  CheckType?: string;
  /** 风险等级 */
  RiskLevel?: string;
  /** 风险危害 */
  RiskInfluence?: string;
  /** 风险修复指引报告链接 */
  RiskFixAdvance?: string;
  /** 边界管控 */
  DispositionType?: string;
}

/** 风险规则 */
declare interface RiskRuleItem {
  /** 风险检查项ID */
  ItemId?: string;
  /** 云厂商名称 */
  Provider?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 实例类型名称 */
  InstanceName?: string;
  /** 风险名称 */
  RiskTitle?: string;
  /** 检查类型 */
  CheckType?: string;
  /** 风险等级 */
  Severity?: string;
  /** 风险危害 */
  RiskInfluence?: string;
}

/** 告警数据攻击者或受害者信息 */
declare interface RoleInfo {
  /** IP */
  IP?: string;
  /** HostIP */
  HostIP?: string;
  /** 原始IP */
  OriginIP?: string;
  /** 端口 */
  Port?: number;
  /** 资产ID */
  InstanceID?: string;
  /** 城市 */
  City?: string;
  /** 省份 */
  Province?: string;
  /** 国家 */
  Country?: string;
  /** 地址 */
  Address?: string;
  /** 纬度 */
  Latitude?: string;
  /** 经度 */
  Longitude?: string;
  /** 信息 */
  Info?: string;
  /** 域名 */
  Domain?: string;
  /** 企业名称 */
  Name?: string;
  /** 账号 */
  Account?: string;
  /** 家族团伙 */
  Family?: string;
  /** 病毒名 */
  VirusName?: string;
  /** MD5值 */
  MD5?: string;
  /** 恶意进程文件名 */
  FileName?: string;
  /** 1:主机资产 2:域名资产 3:网络资产 */
  AssetType?: number;
  /** 来源日志分析的信息字段 */
  FromLogAnalysisData?: KeyValue[];
  /** 容器名 */
  ContainerName?: string;
  /** 容器ID */
  ContainerID?: string;
}

/** 扫描任务详情 */
declare interface ScanTaskInfo {
  /** 任务Id */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务状态码：1等待开始 2正在扫描 3扫描出错 4扫描完成 */
  Status?: number;
  /** 任务进度 */
  Progress?: number;
  /** 任务完成时间 */
  TaskTime?: string;
  /** 报告ID */
  ReportId?: string;
  /** 报告名称 */
  ReportName?: string;
  /** 扫描计划，0-周期任务,1-立即扫描,2-定时扫描,3-自定义 */
  ScanPlan?: number;
  /** 关联的资产数 */
  AssetCount?: number;
  /** APP ID */
  AppId?: string;
  /** 用户主账户ID */
  UIN?: string;
  /** 用户名称 */
  UserName?: string;
}

/** 扫描任务列表展示信息 */
declare interface ScanTaskInfoList {
  /** 任务名称 */
  TaskName?: string;
  /** 任务开始时间 */
  StartTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** cron格式 */
  ScanPlanContent?: string;
  /** 0-周期任务,1-立即扫描,2-定时扫描,3-自定义 */
  TaskType?: number;
  /** 创建时间 */
  InsertTime?: string;
  /** 任务ID */
  TaskId?: string;
  /** 自定义指定扫描资产信息 */
  SelfDefiningAssets?: string[];
  /** 预估时间 */
  PredictTime?: number;
  /** 预估完成时间 */
  PredictEndTime?: string;
  /** 报告数量 */
  ReportNumber?: number;
  /** 资产数量 */
  AssetNumber?: number;
  /** 扫描状态, 0-初始值，1-正在扫描，2-扫描完成，3-扫描出错，4-停止扫描 */
  ScanStatus?: number;
  /** 任务进度 */
  Percent?: number;
  /** port/poc/weakpass/webcontent/configrisk */
  ScanItem?: string;
  /** 0-全扫，1-指定资产扫，2-排除资产扫，3-自定义指定资产扫描 */
  ScanAssetType?: number;
  /** vss子任务id */
  VSSTaskId?: string;
  /** cspm子任务id */
  CSPMTaskId?: string;
  /** 主机漏扫子任务id */
  CWPPOCId?: string;
  /** 主机基线子任务id */
  CWPBlId?: string;
  /** vss子任务进度 */
  VSSTaskProcess?: number;
  /** cspm子任务进度 */
  CSPMTaskProcess?: number;
  /** 主机漏扫子任务进度 */
  CWPPOCProcess?: number;
  /** 主机基线子任务进度 */
  CWPBlProcess?: number;
  /** 异常状态码 */
  ErrorCode?: number;
  /** 异常信息 */
  ErrorInfo?: string;
  /** 周期任务开始的天数 */
  StartDay?: number;
  /** 扫描频率,单位天,1-每天,7-每周,30-月,0-扫描一次 */
  Frequency?: number;
  /** 完成次数 */
  CompleteNumber?: number;
  /** 已完成资产个数 */
  CompleteAssetNumber?: number;
  /** 风险数 */
  RiskCount?: number;
  /** 资产 */
  Assets?: TaskAssetObject[];
  /** 用户Appid */
  AppId?: string;
  /** 用户主账户ID */
  UIN?: string;
  /** 用户名称 */
  UserName?: string;
  /** 体检模式，0-标准模式，1-快速模式，2-高级模式 */
  TaskMode?: number;
  /** 扫描来源 */
  ScanFrom?: string;
  /** 是否限免体检0不是，1是 */
  IsFree?: number;
  /** 是否可以删除，1-可以，0-不可以，对应多账户管理使用 */
  IsDelete?: number;
  /** 任务源类型，0-默认，1-小助手，2-体检项 */
  SourceType?: number;
}

/** 服务风险 */
declare interface ServerRisk {
  /** 测绘标签 */
  ServiceTag?: string;
  /** 端口 */
  Port?: number;
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
  RiskDetails?: string;
  /** 处置建议 */
  Suggestion?: string;
  /** 状态，0未处理、1已处置、2已忽略、3云防已防护 */
  Status?: number;
  /** 资产唯一id */
  Id?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户昵称 */
  Nick?: string;
  /** 用户uin */
  Uin?: string;
  /** 服务快照 */
  ServiceSnapshot?: string;
  /** 服务访问的url */
  Url?: string;
  /** 列表索引值 */
  Index?: string;
  /** 风险列表 */
  RiskList?: ServerRiskSuggestion[];
  /** 建议列表 */
  SuggestionList?: ServerRiskSuggestion[];
  /** HTTP响应状态码 */
  StatusCode?: string;
  /** 新风险等级,high_risk 高危 suspect 疑似 Normal 暂无风险 */
  NewLevel?: string;
  /** 状态，0未处理、1已处置、2已忽略、3云防已防护、4无需处理 */
  XspmStatus?: number;
}

/** 风险详情 */
declare interface ServerRiskSuggestion {
  /** 标题 */
  Title?: string;
  /** 详情 */
  Body?: string;
}

/** 产品支持情况 */
declare interface ServiceSupport {
  /** 产品名称:"cfw_waf_virtual", "cwp_detect", "cwp_defense", "cwp_fix" */
  ServiceName?: string;
  /** 已处理的资产总数 */
  SupportHandledCount?: number;
  /** 支持的资产总数 */
  SupportTotalCount?: number;
  /** 是否支持该产品1支持；0不支持 */
  IsSupport?: boolean;
}

/** 访问密钥资产信息（源IP角度） */
declare interface SourceIPAsset {
  /** 源IP id */
  ID?: number;
  /** 源IP */
  SourceIP?: string;
  /** 备注 */
  Remark?: string;
  /** 账号所属APPID */
  AppID?: number;
  /** IP地域 */
  Region?: string;
  /** 调用方式-1:未统计0:控制台调用1:API */
  EventType?: number;
  /** IP类型0:账号内（未备注）1:账号外（未备注）2:账号内 (已备注)3:账号外 (已备注) */
  IPType?: number;
  /** 告警信息列表 */
  AccessKeyAlarmList?: AccessKeyAlarmInfo[];
  /** ak信息列表 */
  AKInfo?: AKInfo[];
  /** 调用接口数量 */
  ActionCount?: number;
  /** 最近访问时间 */
  LastAccessTime?: string;
  /** IP关联实例ID，如果为空字符串，代表非账号内资产 */
  InstanceID?: string;
  /** IP关联实例名称 */
  InstanceName?: string;
  /** 账号所属Uin */
  Uin?: string;
  /** 昵称 */
  Nickname?: string;
  /** 展示状态 */
  ShowStatus?: boolean;
  /** 运营商字段 */
  ISP?: string;
  /** 账号外vpc信息 */
  VpcInfo?: SourceIPVpcInfo[];
  /** 云类型0为腾讯云 */
  CloudType?: number;
}

/** 调用源IP 外部账号信息 */
declare interface SourceIPVpcInfo {
  /** 账号名称 */
  Name?: string;
  /** vpc所属appid */
  AppID?: number;
  /** vpc id */
  VpcID?: string;
  /** vpc 名称 */
  VpcName?: string;
}

/** CSPM规范 */
declare interface StandardItem {
  /** 规范ID */
  ID?: number;
  /** 规范名称 */
  Name?: string;
}

/** CSPM条款 */
declare interface StandardTerm {
  /** 标签 */
  Tag?: string;
  /** 条款 */
  Terms?: string[];
}

/** 用户行为分析 统计条件 */
declare interface StatisticalFilter {
  /** 0:不基于统计检测1:发生次数高于固定值2:发生次数高于周期平均值的百分之3:发生次数高于用户平均值的百分之 */
  OperatorType: number;
  /** 统计值 */
  Value: number;
}

/** 子账号详情 */
declare interface SubUserInfo {
  /** 主键ID，无业务意义仅作为唯一键 */
  ID?: number;
  /** 子账号Appid */
  AppID?: string;
  /** 子账号UIn */
  Uin?: string;
  /** 子账号名称 */
  NickName?: string;
  /** 主账号Appid */
  OwnerAppID?: string;
  /** 主账号Uin */
  OwnerUin?: string;
  /** 主账号名称 */
  OwnerNickName?: string;
  /** 所属主账号memberId信息 */
  OwnerMemberID?: string;
  /** 账户类型，0为腾讯云账户，1为AWS账户 */
  CloudType?: number;
  /** 可访问服务数量 */
  ServiceCount?: number;
  /** 可访问接口数量 */
  InterfaceCount?: number;
  /** 可访问资源数量 */
  AssetCount?: number;
  /** 访问/行为日志数量 */
  LogCount?: number;
  /** 权限配置风险 */
  ConfigRiskCount?: number;
  /** 危险行为告警 */
  ActionRiskCount?: number;
  /** 是否接入操作审计日志 */
  IsAccessCloudAudit?: boolean;
  /** 是否配置风险的安全体检 */
  IsAccessCheck?: boolean;
  /** 是否配置用户行为管理策略 */
  IsAccessUeba?: boolean;
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
  Tag?: Tag[];
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
  IsCore?: number;
  /** 是否新资产 1新 */
  IsNewAsset?: number;
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
  Name?: string;
  /** 日志条数 */
  Count?: number;
}

/** 主机标签信息 */
declare interface Tags {
  /** 主机标签key */
  TagKey?: string;
  /** 主机标签value */
  TagValue?: string;
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
  AssetName?: string;
  /** 资产类型 */
  InstanceType?: string;
  /** 资产分类 */
  AssetType?: string;
  /** ip/域名/资产id，数据库id等 */
  Asset?: string;
  /** 地域 */
  Region?: string;
  /** 多云资产唯一id */
  Arn?: string;
}

/** 配置风险高级配置 */
declare interface TaskCenterCFGRiskInputParam {
  /** 检测项ID */
  ItemId: string;
  /** 是否开启，0-不开启，1-开启 */
  Enable: number;
  /** 资源类型 */
  ResourceType: string;
}

/** 漏洞风险高级配置 */
declare interface TaskCenterVulRiskInputParam {
  /** 风险ID */
  RiskId: string;
  /** 是否开启，0-不开启，1-开启 */
  Enable: number;
}

/** 弱口令风险高级配置 */
declare interface TaskCenterWeakPwdRiskInputParam {
  /** 检测项ID */
  CheckItemId: number;
  /** 是否开启，0-不开启，1-开启 */
  Enable: number;
}

/** 任务ID列表Key */
declare interface TaskIdListKey {
  /** 任务ID */
  TaskId: string;
  /** APP ID */
  TargetAppId?: string;
}

/** 任务报告信息 */
declare interface TaskLogInfo {
  /** 报告名称 */
  TaskLogName?: string;
  /** 报告ID */
  TaskLogId?: string;
  /** 关联资产个数 */
  AssetsNumber?: number;
  /** 安全风险数量 */
  RiskNumber?: number;
  /** 报告生成时间 */
  Time?: string;
  /** 任务状态码：0 初始值 1正在扫描 2扫描完成 3扫描出错，4停止，5暂停，6该任务已被重启过 */
  Status?: number;
  /** 关联任务名称 */
  TaskName?: string;
  /** 扫描开始时间 */
  StartTime?: string;
  /** 任务中心扫描任务ID */
  TaskCenterTaskId?: string;
  /** 租户ID */
  AppId?: string;
  /** 主账户ID */
  UIN?: string;
  /** 用户名称 */
  UserName?: string;
  /** 报告类型： 1安全体检 2日报 3周报 4月报 */
  ReportType?: number;
  /** 报告模板id */
  TemplateId?: number;
}

/** 报告pdf下载的临时链接 */
declare interface TaskLogURL {
  /** 报告下载临时链接 */
  URL?: string;
  /** 任务报告id */
  LogId?: string;
  /** 任务报告名称 */
  TaskLogName?: string;
  /** APP ID */
  AppId?: string;
}

/** 用户行为分析 自定义策略结构体 */
declare interface UebaCustomRule {
  /** 策略名称 */
  RuleName: string;
  /** 1: 云账号2: 自定义用户 */
  UserType: number;
  /** 发生时间1：10分钟2：1小时3：一天4：一周5：一个月 */
  TimeInterval: number;
  /** 发生事件 */
  EventContent: UebaEventContent;
  /** 告警名称 */
  AlertName: string;
  /** 告警类型0: 提示1: 低危2: 中危3: 高危4: 严重 */
  AlterLevel: number;
  /** 操作者 */
  Operator: string[];
  /** 操作对象 */
  OperateObject: string[];
  /** 操作方式 */
  OperateMethod: string[];
  /** 日志类型 */
  LogType?: string;
  /** 日志中文名 */
  LogTypeStr?: string;
}

/** 用户行为分析 发生事件结构体 */
declare interface UebaEventContent {
  /** 发生事件类型1:语句检索2:过滤检索 */
  EventType: number;
  /** 语句检索内容 */
  Content?: string;
  /** 检索条件 */
  Filters?: WhereFilter[];
  /** 统计条件 */
  StatisticalFilter?: StatisticalFilter;
}

/** 用户行为分析策略 */
declare interface UebaRule {
  /** 策略id */
  RuleID?: string;
  /** 规则名称 */
  RuleName?: string;
  /** 策略类型0:系统策略1:自定义策略 */
  RuleType?: number;
  /** 策略等级0:提示1:低危2:中危3:高危4:严重 */
  RuleLevel?: number;
  /** 策略内容 */
  RuleContent?: string;
  /** 策略开关 */
  RuleStatus?: boolean;
  /** 命中次数 */
  HitCount?: number;
  /** 所属账号Appid */
  AppID?: string;
  /** 多账号，成员ID */
  MemberID?: string;
  /** Uin */
  Uin?: string;
  /** 昵称 */
  Nickname?: string;
  /** 自定义规则具体内容 */
  CustomRuleDetail?: UebaCustomRule;
  /** 云类型腾讯云：0aws：1 */
  CloudType?: number;
}

/** 调用记录详情 */
declare interface UserCallRecord {
  /** 调用源IP */
  SourceIP?: string;
  /** 调用类型0:控制台调用1:API */
  EventType?: number;
  /** 调用次数 */
  CallCount?: number;
  /** 调用错误码0表示成功 */
  Code?: number;
  /** 首次调用时间 */
  FirstCallTime?: string;
  /** 最后调用时间 */
  LastCallTime?: string;
  /** 调用源IP备注 */
  SourceIPRemark?: string;
  /** 调用源IP地域 */
  Region?: string;
  /** 用户/角色名称 */
  UserName?: string;
  /** 聚合日期 */
  Date?: string;
  /** appid */
  AppID?: number;
  /** 运营商 */
  ISP?: string;
}

/** 应急漏洞基本数据 */
declare interface VULBaseInfo {
  /** 风险等级high 高危/ middle 中危 / low 低危 /info 提示 */
  Level?: string;
  /** 组件 */
  Component?: string;
  /** 漏洞发布时间 */
  PublishTime?: string;
  /** 最近扫描时间 */
  LastScanTime?: string;
  /** 影响资产数量 */
  AffectAssetCount?: number;
  /** 风险ID */
  RiskId?: string;
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
  /** CVSS评分 */
  CVSS?: number | null;
  /** 攻击热度0/1/2/3 */
  AttackHeat?: number | null;
  /** 检测状态 0 未扫描 1扫描中 2 扫描完成 */
  ScanStatus?: number | null;
  /** 1/0是否必修 */
  IsSuggest?: number | null;
  /** 标签 */
  VulTag?: string[] | null;
  /** 支持产品 逗号分隔 "cfw_waf_virtual", "cwp_detect", "cwp_defense", "cwp_fix" */
  SupportProduct?: string | null;
  /** 漏洞检测任务id */
  TaskId?: string | null;
  /** 主键 */
  Index?: string | null;
  /** 漏洞id 旧版 */
  PcmgrID?: string | null;
  /** 漏洞id 新版 */
  TvdID?: string | null;
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
  Enable?: number;
  /** 风险类型 */
  VULType?: string;
  /** 影响版本 */
  ImpactVersion?: string;
  /** CVE */
  CVE?: string;
  /** 漏洞标签 */
  VULTag?: string[];
  /** 修复方式 */
  FixMethod?: string[];
  /** 披露时间 */
  ReleaseTime?: string;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number;
  /** 漏洞描述 */
  VULDescribe?: string;
  /** 影响组件 */
  ImpactComponent?: string;
  /** 漏洞Payload */
  Payload?: string;
  /** 技术参考 */
  References?: string;
  /** cvss评分 */
  CVSS?: string;
  /** 攻击热度 */
  AttackHeat?: string;
  /** 安全产品支持情况 */
  ServiceSupport?: ServiceSupport[];
  /** 最新检测时间 */
  RecentScanTime?: string;
}

/** 漏洞风险信息 */
declare interface VULRiskInfo {
  /** 修复建议 */
  Fix?: string;
  /** 技术参考/参考链接 */
  References?: string;
  /** 漏洞描述 */
  Describe?: string;
  /** 受影响组件 */
  ImpactComponent?: VulImpactComponentInfo[];
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
  Nick?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户uin */
  Uin?: string;
  /** 修复建议 */
  Fix?: string;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number;
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
  Nick?: string;
  /** 用户appid */
  AppId?: string;
  /** 用户uin */
  Uin?: string;
  /** 应急漏洞类型，1-应急漏洞，0-非应急漏洞 */
  EMGCVulType?: number;
  /** CVSS评分 */
  CVSS?: number;
  /** PCMGRId */
  PCMGRId?: string;
  /** 漏洞标签。搜索时应急 必修传参VulTag=SuggestRepair/EMGCVul */
  VulTag?: string[];
  /** 漏洞披露时间 */
  DisclosureTime?: string;
  /** 攻击热度 */
  AttackHeat?: number;
  /** 是否必修漏洞，1-是，0-不是 */
  IsSuggest?: number;
  /** 处置任务id */
  HandleTaskId?: string;
  /** 引擎来源 */
  EngineSource?: string;
  /** 新的漏洞风险id */
  VulRiskId?: string;
  /** 新版漏洞id */
  TvdID?: string;
  /** 是否可以一键体检，1-可以，0-不可以 */
  IsOneClick?: number;
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
  Tag?: Tag[];
  /** dns域名 */
  DNS?: string[];
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
  IsNewAsset?: number;
  /** 是否核心资产1是 2不是 */
  IsCore?: number;
}

/** 漏洞影响组件信息 */
declare interface VulImpactComponentInfo {
  /** 组件名称 */
  Component?: string;
  /** 版本名称 */
  Version?: string;
}

/** 主机漏洞风险内容 */
declare interface VulRiskItem {
  /** 云账号ID */
  CloudAccountID?: string;
  /** 实例ID */
  AssetID?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 漏洞名称 */
  VulName?: string;
  /** 漏洞类型 */
  VulCategory?: string;
  /** 漏洞等级 */
  VulLevel?: string;
  /** CVE编号 */
  CveID?: string;
  /** 漏洞描述 */
  Description?: string;
  /** 容器ID */
  ContainerID?: string;
  /** 漏洞风险修复建议 */
  Fix?: string;
  /** Linux漏洞 */
  VulCategoryName?: string;
  /** 漏洞等级名称 */
  VulLevelName?: string;
  /** 实例状态中文信息 */
  InstanceStatusName?: string;
  /** 租户ID */
  AppID?: number;
}

/** 漏洞趋势-攻击趋势、影响用户、影响资产 */
declare interface VulTrend {
  /** 影响的资产数 */
  AffectAssetCount?: number;
  /** 影响的用户数 */
  AffectUserCount?: number;
  /** 攻击数 */
  AttackCount?: number;
  /** 时间 */
  Date?: string;
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
  /** ID,处理风险使用 */
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
  Nick?: string;
  /** 用户uin */
  Uin?: string;
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
  Name: string;
  /** 过滤的值 */
  Values: string[];
  /** 中台定义：1等于 2大于 3小于 4大于等于 5小于等于 6不等于 9模糊匹配 13非模糊匹配 14按位与精确匹配填 7 模糊匹配填9 */
  OperatorType?: number;
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
  VpcId?: string;
  /** vpc-name */
  VpcName?: string;
  /** 资产名 */
  AssetName?: string;
  /** 操作系统 */
  Os?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 内网ip */
  PrivateIp?: string;
  /** 地域 */
  Region?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产id */
  AssetId?: string;
  /** 账号数量 */
  AccountNum?: number;
  /** 端口数量 */
  PortNum?: number;
  /** 进程数量 */
  ProcessNum?: number;
  /** 软件应用数量 */
  SoftApplicationNum?: number;
  /** 数据库数量 */
  DatabaseNum?: number;
  /** Web应用数量 */
  WebApplicationNum?: number;
  /** 服务数量 */
  ServiceNum?: number;
  /** web框架数量 */
  WebFrameworkNum?: number;
  /** Web站点数量 */
  WebSiteNum?: number;
  /** Jar包数量 */
  JarPackageNum?: number;
  /** 启动服务数量 */
  StartServiceNum?: number;
  /** 计划任务数量 */
  ScheduledTaskNum?: number;
  /** 环境变量数量 */
  EnvironmentVariableNum?: number;
  /** 内核模块数量 */
  KernelModuleNum?: number;
  /** 系统安装包数量 */
  SystemInstallationPackageNum?: number;
  /** 剩余防护时长 */
  SurplusProtectDay?: number;
  /** 客户端是否安装 1 已安装 0 未安装 */
  CWPStatus?: number;
  /** 标签 */
  Tag?: Tag[];
  /** 防护等级 */
  ProtectLevel?: string;
  /** 防护时长 */
  ProtectedDay?: number;
}

declare interface CreateAccessKeyCheckTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 风险列表 */
  RiskIDList?: number[];
  /** 访问密钥列表 */
  AccessKeyList?: string[];
  /** 账号uin列表 */
  SubUinList?: string[];
  /** 风险规则id列表 */
  RiskRuleIDList?: number[];
}

declare interface CreateAccessKeyCheckTaskResponse {
  /** 0表示成功 1表示失败 */
  Code?: number;
  /** 错误信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccessKeySyncTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateAccessKeySyncTaskResponse {
  /** 发起同步任务 */
  TaskID?: number;
  /** 0成功 1失败 */
  Code?: number;
  /** 错误信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainAndIpRequest {
  /** 公网IP/域名 */
  Content: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
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
  /** 请求发起源，vss表示漏洞扫描服务，云安全中心的用户请填充csip，默认csip */
  ScanFrom?: string;
  /** 高级配置 */
  TaskAdvanceCFG?: TaskAdvanceCFG;
  /** 体检模式，0-标准模式，1-快速模式，2-高级模式，默认标准模式 */
  TaskMode?: number;
  /** 资产标签 */
  Tags?: AssetTag;
  /** 任务完成回调webhook地址 */
  FinishWebHook?: string;
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
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产 */
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
  /** 任务id 和目标AppID列表 */
  TaskIdList: TaskIdListKey[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteRiskScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAbnormalCallRecordRequest {
  /** 告警规则ID */
  AlarmRuleID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 访问密钥 */
  AccessKey?: string;
  /** 调用源IP */
  SourceIP?: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeAbnormalCallRecordResponse {
  /** 调用记录列表 */
  Data?: CallRecord[];
  /** 调用记录总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessKeyAlarmDetailRequest {
  /** 告警记录ID */
  ID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAccessKeyAlarmDetailResponse {
  /** 告警信息 */
  AlarmInfo?: AccessKeyAlarm;
  /** 所属账号CAM策略数量 */
  CamCount?: number;
  /** AK风险数量 */
  RiskCount?: number;
  /** 告警策略描述 */
  AlarmDesc?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessKeyAlarmRequest {
  /** 过滤器 */
  Filter?: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 访问密钥的ID */
  AccessKeyID?: number;
  /** 源IP的ID */
  SourceIPID?: number;
  /** 账号uin */
  SubUin?: string;
}

declare interface DescribeAccessKeyAlarmResponse {
  /** 告警列表 */
  Data?: AccessKeyAlarm[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessKeyAssetRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeAccessKeyAssetResponse {
  /** 访问密钥资产列表 */
  Data?: AccessKeyAsset[];
  /** 全部数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessKeyRiskDetailRequest {
  /** 风险记录ID */
  ID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAccessKeyRiskDetailResponse {
  /** 风险列表 */
  RiskInfo?: AccessKeyRisk;
  /** CAM策略总数 */
  CamCount?: number;
  /** 账号关联告警数量 */
  AlarmCount?: number;
  /** 访问方式 0 API 1 控制台与API */
  AccessType?: number;
  /** 访问密钥告警数量列表 */
  AccessKeyAlarmCount?: AccessKeyAlarmCount[];
  /** 操作保护是否开启 0 未开启 1 已开启 */
  ActionFlag?: number;
  /** 登录保护是否开启 0 未开启 1 已开启 */
  LoginFlag?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessKeyRiskRequest {
  /** 过滤器 */
  Filter?: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 访问密钥的ID */
  AccessKeyID?: number;
  /** 账号uin */
  SubUin?: string;
}

declare interface DescribeAccessKeyRiskResponse {
  /** 风险列表 */
  Data?: AccessKeyRisk[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessKeyUserDetailRequest {
  /** 账号自身uin */
  SubUin: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAccessKeyUserDetailResponse {
  /** 账号详情信息 */
  User?: AccessKeyUser;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessKeyUserListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeAccessKeyUserListResponse {
  /** 账号列表 */
  Data?: AccessKeyUser[];
  /** 总数 */
  Total?: number;
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
  /** 0：succeed 1：timeout */
  ReturnCode?: number;
  /** 返回状态信息 */
  ReturnMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetProcessListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 云厂商 */
  Provider?: string;
}

declare interface DescribeAssetProcessListResponse {
  /** 进程数量 */
  TotalCount?: number;
  /** 进程列表 */
  AssetProcessList?: AssetProcessItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAssetRiskListResponse {
  /** 资产视角下风险数量 */
  TotalCount?: number;
  /** 资产视角下风险列表 */
  AssetRiskList?: AssetRiskItem[];
  /** 等保规范名称集合 */
  StandardNameList?: StandardItem[];
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
  Data?: AssetViewVULRiskData[];
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
  Tags?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCFWAssetStatisticsRequest {
}

declare interface DescribeCFWAssetStatisticsResponse {
  /** 网络资产总数 */
  NetworkTotal?: number;
  /** 资产clb数量 */
  ClbTotal?: number;
  /** nat数量 */
  NatTotal?: number;
  /** 公网ip数量 */
  PublicAssetTotal?: number;
  /** 主机数量 */
  CVMAssetTotal?: number;
  /** 配置风险 */
  CFGTotal?: number;
  /** 端口风险 */
  PortTotal?: number;
  /** 内容风险 */
  WebsiteTotal?: number;
  /** 风险服务暴露 */
  ServerTotal?: number;
  /** 弱口令风险 */
  WeakPasswordTotal?: number;
  /** 漏洞风险 */
  VULTotal?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCSIPRiskStatisticsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
}

declare interface DescribeCSIPRiskStatisticsResponse {
  /** 资产概况数据 */
  Data?: CsipRiskCenterStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCVMAssetInfoRequest {
  /** 资产id */
  AssetId: string;
}

declare interface DescribeCVMAssetInfoResponse {
  /** 数据 */
  Data?: AssetBaseInfoResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCVMAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器参数 */
  Filter?: Filter;
}

declare interface DescribeCVMAssetsResponse {
  /** 总数 */
  Total?: number;
  /** 机器列表 */
  Data?: CVMAssetVO[];
  /** 地域列表 */
  RegionList?: FilterDataObject[];
  /** 防护状态 */
  DefenseStatusList?: FilterDataObject[];
  /** vpc枚举 */
  VpcList?: FilterDataObject[];
  /** 资产类型枚举 */
  AssetTypeList?: FilterDataObject[];
  /** 操作系统枚举 */
  SystemTypeList?: FilterDataObject[];
  /** ip列表 */
  IpTypeList?: FilterDataObject[];
  /** appid列表 */
  AppIdList?: FilterDataObject[];
  /** 可用区列表 */
  ZoneList?: FilterDataObject[];
  /** os列表 */
  OsList?: FilterDataObject[];
  /** 资产类型和实例类型的对应关系 */
  AssetMapInstanceTypeList?: AssetInstanceTypeMap[];
  /** 公网内网枚举 */
  PublicPrivateAttr?: FilterDataObject[];
  /** 主机防护状态 */
  ProtectStatusList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCallRecordRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 访问密钥的ID */
  AccessKeyID?: number;
  /** 调用源IP的ID */
  SourceIPID?: number;
  /** 访问账号uin */
  AccUin?: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCallRecordResponse {
  /** 调用记录列表 */
  Data?: CallRecord[];
  /** 调用记录总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCheckViewRisksRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeCheckViewRisksResponse {
  /** 检查视角下风险数量 */
  TotalCount?: number;
  /** 检查视角下风险列表 */
  CheckViewRiskList?: CheckViewRiskItem[];
  /** 检查视角下cspm规范标签列表 */
  StandardNameList?: StandardItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤 */
  Filter?: Filter;
}

declare interface DescribeClusterAssetsResponse {
  /** 列表 */
  Data?: AssetCluster[];
  /** 总数 */
  TotalCount?: number;
  /** 集群类型枚举 */
  ClusterTypeList?: FilterDataObject[];
  /** 集群状态枚举 */
  ClusterStatusList?: FilterDataObject[];
  /** 组件状态枚举 */
  ComponentStatusList?: FilterDataObject[];
  /** 私有网络枚举 */
  VpcList?: FilterDataObject[];
  /** 地域枚举 */
  RegionList?: FilterDataObject[];
  /** 租户枚举 */
  AppIdList?: FilterDataObject[];
  /** 集群防护状态枚举 */
  ProtectStatusList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterPodAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
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

declare interface DescribeConfigCheckRulesRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeConfigCheckRulesResponse {
  /** 风险规则数量 */
  TotalCount?: number;
  /** 风险规则列表 */
  RuleList?: RiskRuleInfo[];
  /** 云厂商类型选项 */
  ProviderList?: AttributeOptionSet[];
  /** 风险等级类型选项 */
  RiskLevelList?: AttributeOptionSet[];
  /** 处置分类选项 */
  DispositionTypeList?: AttributeOptionSet[];
  /** 检查类型选项 */
  CheckTypeList?: AttributeOptionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDbAssetInfoRequest {
  /** 资产id */
  AssetId: string;
}

declare interface DescribeDbAssetInfoResponse {
  /** db资产详情 */
  Data?: DbAssetInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDbAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器参数 */
  Filter?: Filter;
  /** 资产类型:MYSQL/MARIADB/REDIS/MONGODB/POSTGRES/CTS/ES/KAFKA/COS/CBS/CFS */
  AssetTypes?: string[];
}

declare interface DescribeDbAssetsResponse {
  /** 总数 */
  Total?: number;
  /** 资产总数 */
  Data?: DBAssetVO[];
  /** 地域枚举 */
  RegionList?: FilterDataObject[];
  /** 资产类型枚举 */
  AssetTypeList?: FilterDataObject[];
  /** Vpc枚举 */
  VpcList?: FilterDataObject[];
  /** Appid枚举 */
  AppIdList?: FilterDataObject[];
  /** 公网内网枚举 */
  PublicPrivateAttr?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器参数 */
  Filter?: Filter;
  /** 安全中心自定义标签 */
  Tags?: AssetTag[];
}

declare interface DescribeDomainAssetsResponse {
  /** 总数 */
  Total?: number;
  /** 域名列表 */
  Data?: DomainAssetVO[];
  /** 防护状态列表 */
  DefenseStatusList?: FilterDataObject[];
  /** 资产归属地列表 */
  AssetLocationList?: FilterDataObject[];
  /** 资产类型列表 */
  SourceTypeList?: FilterDataObject[];
  /** 地域列表 */
  RegionList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposeAssetCategoryRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeExposeAssetCategoryResponse {
  /** 云边界分析资产分类列表 */
  ExposeAssetTypeList?: ExposeAssetTypeItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposePathRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产ID */
  AssetId?: string;
  /** 资产IP */
  Ip?: string;
  /** 资产域名 */
  Domain?: string;
  /** 端口或端口范围 */
  Port?: string;
}

declare interface DescribeExposePathResponse {
  /** 云边界分析路径节点内容 */
  Content?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposuresRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeExposuresResponse {
  /** 云边界分析资产数量 */
  TotalCount?: number;
  /** 云边界分析资产列表 */
  ExposeList?: ExposesItem[];
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

declare interface DescribeHighBaseLineRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 云账号ID */
  CloudAccountID?: string;
  /** 云厂商 */
  Provider?: string;
}

declare interface DescribeHighBaseLineRiskListResponse {
  /** 高危基线风险数量 */
  TotalCount?: number;
  /** 高危基线风险列表 */
  HighBaseLineRiskList?: HighBaseLineRiskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenerListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器参数 */
  Filter?: Filter;
}

declare interface DescribeListenerListResponse {
  /** 总数 */
  Total?: number;
  /** 监听器列表 */
  Data?: ClbListenerListInfo[];
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

declare interface DescribeOrganizationInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeOrganizationInfoResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 集团用户列表 */
  Data?: OrganizationInfo[];
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
  TotalCount?: number;
  /** 集团用户列表 */
  Data?: OrganizationUserInfo[];
  /** 加入方式枚举 */
  JoinTypeLst?: FilterDataObject[];
  /** 云厂商枚举 */
  CloudTypeLst?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOtherCloudAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** - */
  Filter?: Filter;
  /** 资产类型:MYSQL/MARIADB/REDIS/MONGODB/POSTGRES/CTS/ES/KAFKA/COS/CBS/CFS */
  AssetTypes?: string[];
}

declare interface DescribeOtherCloudAssetsResponse {
  /** 总数 */
  Total?: number;
  /** 资产总数 */
  Data?: DBAssetVO[];
  /** 地域枚举 */
  RegionList?: FilterDataObject[];
  /** 资产类型枚举 */
  AssetTypeList?: FilterDataObject[];
  /** Vpc枚举 */
  VpcList?: FilterDataObject[];
  /** Appid枚举 */
  AppIdList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicIpAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器参数 */
  Filter?: Filter;
  /** 安全中心自定义标签 */
  Tags?: AssetTag[];
}

declare interface DescribePublicIpAssetsResponse {
  /** 列表 */
  Data?: IpAssetListVO[];
  /** 总数 */
  Total?: number;
  /** 资产归属地 */
  AssetLocationList?: FilterDataObject[];
  /** ip列表枚举 */
  IpTypeList?: FilterDataObject[];
  /** 地域列表枚举 */
  RegionList?: FilterDataObject[];
  /** 防护枚举 */
  DefenseStatusList?: FilterDataObject[];
  /** 资产类型枚举 */
  AssetTypeList?: FilterDataObject[];
  /** AppId枚举 */
  AppIdList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepositoryImageAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** filter过滤条件 */
  Filter?: Filter;
}

declare interface DescribeRepositoryImageAssetsResponse {
  /** 仓库镜像列表 */
  Data?: RepositoryImageVO[];
  /** 总数 */
  Total?: number;
  /** region列表 */
  RegionList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskCallRecordRequest {
  /** 风险记录ID */
  RiskID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeRiskCallRecordResponse {
  /** 风险调用记录列表 */
  Data?: RiskCallRecord[];
  /** 调用记录总数 */
  Total?: number;
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

declare interface DescribeRiskCenterCFGViewCFGRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
}

declare interface DescribeRiskCenterCFGViewCFGRiskListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 资产视角的配置风险列表 */
  Data?: CFGViewCFGRisk[];
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

declare interface DescribeRiskDetailListRequest {
  /** 风险规则ID */
  RiskRuleId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface DescribeRiskDetailListResponse {
  /** 资产视角下风险详情数量 */
  TotalCount?: number;
  /** 资产视角下风险详情列表 */
  AssetRiskDetailList?: RiskDetailItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskRuleDetailRequest {
  /** 风险规则ID */
  RiskRuleId: string;
}

declare interface DescribeRiskRuleDetailResponse {
  /** 风险规则ID */
  RiskRuleId?: string;
  /** 云厂商 */
  Provider?: string;
  /** 风险名称 */
  RiskName?: string;
  /** 风险危害 */
  RiskInfluence?: string;
  /** 修复指引 */
  RiskFixAdvice?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskRulesRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeRiskRulesResponse {
  /** 风险规则数量 */
  TotalCount?: number;
  /** 风险规则列表 */
  RiskRuleList?: RiskRuleItem[];
  /** 实例类型选项 */
  InstanceTypeList?: AttributeOptionSet[];
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
  TotalCount?: number;
  /** 任务日志列表 */
  Data?: ScanTaskInfo[];
  /** 主账户ID列表 */
  UINList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanStatisticRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 体检任务id */
  TaskLogId?: string;
}

declare interface DescribeScanStatisticResponse {
  /** 端口服务数量 */
  PortServiceCount?: number;
  /** Web服务数量 */
  WebAppCount?: number;
  /** 弱口令风险数量 */
  WeakPasswordCount?: number;
  /** 漏洞风险数量 */
  VulCount?: number;
  /** 高危端口服务数量 */
  HighRiskPortServiceCount?: number;
  /** 风险Web服务数量 */
  RiskWebAppCount?: number;
  /** 端口服务近7天新增数量 */
  PortServiceIncrement?: number;
  /** Web服务近7天新增数量 */
  WebAppIncrement?: number;
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
  TotalCount?: number;
  /** 任务日志列表 */
  Data?: ScanTaskInfoList[];
  /** 主账户ID列表 */
  UINList?: string[];
  /** 体检模式过滤列表 */
  TaskModeList?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSearchBugInfoRequest {
  /** 1的时候返回应急漏洞，2的时候返回应急漏洞列表，3的时候搭配输入CVEId字段展示该漏洞数据 */
  Id: string;
  /** id=3时传入该参数 */
  CVEId?: string;
}

declare interface DescribeSearchBugInfoResponse {
  /** 漏洞信息和资产信息 */
  Data?: DataSearchBug;
  /** 状态值，0：查询成功，非0：查询失败 */
  ReturnCode?: number;
  /** 状态信息，success：查询成功，fail：查询失败 */
  ReturnMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSourceIPAssetRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeSourceIPAssetResponse {
  /** 访问密钥资产列表 */
  Data?: SourceIPAsset[];
  /** 全部数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubUserInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
}

declare interface DescribeSubUserInfoResponse {
  /** 总数 */
  TotalCount?: number;
  /** 子用户列表 */
  Data?: SubUserInfo[];
  /** 厂商枚举列表 */
  CloudTypeLst?: FilterDataObject[];
  /** 所属主账号appid枚举 */
  OwnerAppIDLst?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubnetAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
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
  TotalCount?: number;
  /** 报告列表 */
  Data?: TaskLogInfo[];
  /** 待查看数量 */
  NotViewNumber?: number;
  /** 报告模板数 */
  ReportTemplateNumber?: number;
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
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 1:攻击类型 2:攻击者 */
  QueryType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 被调用的集团账号的成员id */
  OperatedMemberId?: string[];
  /** 资产名称 */
  AssetName?: string;
  /** 0: 默认全部 1:资产ID 2:域名 */
  AssetType?: number;
}

declare interface DescribeTopAttackInfoResponse {
  /** Top攻击类型/攻击者次数 */
  TopAttackInfo?: TagCount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUebaRuleRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeUebaRuleResponse {
  /** 总数 */
  TotalCount?: number;
  /** 策略列表 */
  Data?: UebaRule[];
  /** 自定义策略对应的告警类别枚举 */
  AlterType?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCallRecordRequest {
  /** 账号uin */
  SubUin: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeUserCallRecordResponse {
  /** 账号调用记录列表 */
  Data?: UserCallRecord[];
  /** 调用记录总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVULListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 查询条件 */
  Filter?: Filter;
}

declare interface DescribeVULListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 漏洞列表 */
  Data?: VULBaseInfo[];
  /** 漏洞类型列表 */
  VULTypeLists?: FilterDataObject[];
  /** 风险等级列表 */
  RiskLevels?: FilterDataObject[];
  /** 标签 */
  Tags?: FilterDataObject[];
  /** 产品支持情况 */
  ProductSupport?: FilterDataObject[];
  /** 产品支持情况 */
  CheckStatus?: FilterDataObject[];
  /** 攻击热度枚举 */
  AttackHeat?: FilterDataObject[];
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
  Data?: VULRiskAdvanceCFGList[];
  /** 总数 */
  TotalCount?: number;
  /** 风险等级过滤列表 */
  RiskLevelLists?: FilterDataObject[];
  /** 漏洞类型过滤列表 */
  VULTypeLists?: FilterDataObject[];
  /** 识别来源过滤列表 */
  CheckFromLists?: FilterDataObject[];
  /** 漏洞标签列表 */
  VulTagList?: FilterDataObject[];
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
  /** 集团账号的成员id */
  MemberId?: string[];
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

declare interface DescribeVulRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filters?: Filters[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 云账号ID */
  CloudAccountID?: string;
  /** 云厂商 */
  Provider?: string;
}

declare interface DescribeVulRiskListResponse {
  /** 漏洞数量 */
  TotalCount?: number;
  /** 漏洞列表 */
  VulRiskList?: VulRiskItem[];
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
  Data?: VULViewVULRiskData[];
  /** 危险等级列表 */
  LevelLists?: FilterDataObject[];
  /** 来源列表 */
  FromLists?: FilterDataObject[];
  /** 漏洞类型列表 */
  VULTypeLists?: FilterDataObject[];
  /** tag枚举 */
  Tags?: FilterDataObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOrganizationAccountStatusRequest {
  /** 修改集团账号状态，1 开启， 2关闭 */
  Status: number;
  /** 集团账号的成员id */
  MemberId?: string[];
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
  /** 任务完成回调webhook地址 */
  FinishWebHook?: string;
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

declare interface ModifyUebaRuleSwitchRequest {
  /** 策略ID */
  RuleID: string;
  /** 开关状态 */
  Status: boolean;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyUebaRuleSwitchResponse {
  /** 0成功，1失败 */
  Code?: number;
  /** 返回信息 */
  Msg?: string;
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

declare interface UpdateAccessKeyAlarmStatusRequest {
  /** 状态 0:未处理 1:已处理 2:已忽略 */
  Status: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 告警ID列表 */
  AlarmIDList?: number[];
  /** 风险ID列表 */
  RiskIDList?: number[];
}

declare interface UpdateAccessKeyAlarmStatusResponse {
  /** 0成功，1失败 */
  Code?: number;
  /** 错误信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAccessKeyRemarkRequest {
  /** 备注 */
  Remark: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 源IP 名称 */
  SourceIPList?: string[];
  /** ak名称 */
  AccessKeyList?: string[];
  /** 源IP的ID */
  SourceIPIDList?: number[];
  /** AK的ID */
  AccessKeyIDList?: number[];
}

declare interface UpdateAccessKeyRemarkResponse {
  /** 0:成功 1:失败 */
  Code?: number;
  /** 错误信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAlertStatusListRequest {
  /** 告警ID列表 */
  ID: NewAlertKey[];
  /** 操作类型 1:撤销处置 2:标记为已处置 3:标记忽略 4:取消标记处置5:取消标记忽略 */
  OperateType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 被调用的集团账号的成员id */
  OperatedMemberId?: string[];
}

declare interface UpdateAlertStatusListResponse {
  /** 结果信息 */
  Msg?: string;
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
  /** 发起访问密钥的检测任务 {@link CreateAccessKeyCheckTaskRequest} {@link CreateAccessKeyCheckTaskResponse} */
  CreateAccessKeyCheckTask(data?: CreateAccessKeyCheckTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessKeyCheckTaskResponse>;
  /** 创建访问密钥的资产同步任务 {@link CreateAccessKeySyncTaskRequest} {@link CreateAccessKeySyncTaskResponse} */
  CreateAccessKeySyncTask(data?: CreateAccessKeySyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessKeySyncTaskResponse>;
  /** 创建域名、ip相关信息 {@link CreateDomainAndIpRequest} {@link CreateDomainAndIpResponse} */
  CreateDomainAndIp(data: CreateDomainAndIpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainAndIpResponse>;
  /** 创建风险中心扫描任务 {@link CreateRiskCenterScanTaskRequest} {@link CreateRiskCenterScanTaskResponse} */
  CreateRiskCenterScanTask(data: CreateRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRiskCenterScanTaskResponse>;
  /** 删除域名和ip请求 {@link DeleteDomainAndIpRequest} {@link DeleteDomainAndIpResponse} */
  DeleteDomainAndIp(data?: DeleteDomainAndIpRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainAndIpResponse>;
  /** 删除风险中心扫描任务 {@link DeleteRiskScanTaskRequest} {@link DeleteRiskScanTaskResponse} */
  DeleteRiskScanTask(data: DeleteRiskScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskScanTaskResponse>;
  /** 获取异常调用记录 {@link DescribeAbnormalCallRecordRequest} {@link DescribeAbnormalCallRecordResponse} */
  DescribeAbnormalCallRecord(data: DescribeAbnormalCallRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalCallRecordResponse>;
  /** 获取访问密钥告警记录 {@link DescribeAccessKeyAlarmRequest} {@link DescribeAccessKeyAlarmResponse} */
  DescribeAccessKeyAlarm(data?: DescribeAccessKeyAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessKeyAlarmResponse>;
  /** 获取访问密钥告警详情 {@link DescribeAccessKeyAlarmDetailRequest} {@link DescribeAccessKeyAlarmDetailResponse} */
  DescribeAccessKeyAlarmDetail(data: DescribeAccessKeyAlarmDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessKeyAlarmDetailResponse>;
  /** 获取访问密钥资产 {@link DescribeAccessKeyAssetRequest} {@link DescribeAccessKeyAssetResponse} */
  DescribeAccessKeyAsset(data?: DescribeAccessKeyAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessKeyAssetResponse>;
  /** 获取访问密钥风险记录 {@link DescribeAccessKeyRiskRequest} {@link DescribeAccessKeyRiskResponse} */
  DescribeAccessKeyRisk(data?: DescribeAccessKeyRiskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessKeyRiskResponse>;
  /** 获取访问密钥风险详情 {@link DescribeAccessKeyRiskDetailRequest} {@link DescribeAccessKeyRiskDetailResponse} */
  DescribeAccessKeyRiskDetail(data: DescribeAccessKeyRiskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessKeyRiskDetailResponse>;
  /** 获取访问密钥的账号详情信息 {@link DescribeAccessKeyUserDetailRequest} {@link DescribeAccessKeyUserDetailResponse} */
  DescribeAccessKeyUserDetail(data: DescribeAccessKeyUserDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessKeyUserDetailResponse>;
  /** 获取访问密钥的账号列表 {@link DescribeAccessKeyUserListRequest} {@link DescribeAccessKeyUserListResponse} */
  DescribeAccessKeyUserList(data?: DescribeAccessKeyUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessKeyUserListResponse>;
  /** 查询全量告警列表 {@link DescribeAlertListRequest} {@link DescribeAlertListResponse} */
  DescribeAlertList(data: DescribeAlertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlertListResponse>;
  /** 查询云边界分析-暴露路径下主机节点的进程列表 {@link DescribeAssetProcessListRequest} {@link DescribeAssetProcessListResponse} */
  DescribeAssetProcessList(data?: DescribeAssetProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessListResponse>;
  /** 资产视角下的云资源配置风险列表 {@link DescribeAssetRiskListRequest} {@link DescribeAssetRiskListResponse} */
  DescribeAssetRiskList(data?: DescribeAssetRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetRiskListResponse>;
  /** 漏洞管理-资产视角的漏洞风险列表 {@link DescribeAssetViewVulRiskListRequest} {@link DescribeAssetViewVulRiskListResponse} */
  DescribeAssetViewVulRiskList(data?: DescribeAssetViewVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetViewVulRiskListResponse>;
  /** 云防资产中心统计数据 {@link DescribeCFWAssetStatisticsRequest} {@link DescribeCFWAssetStatisticsResponse} */
  DescribeCFWAssetStatistics(data?: DescribeCFWAssetStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCFWAssetStatisticsResponse>;
  /** 资产风险概览统计接口 {@link DescribeCSIPRiskStatisticsRequest} {@link DescribeCSIPRiskStatisticsResponse} */
  DescribeCSIPRiskStatistics(data?: DescribeCSIPRiskStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCSIPRiskStatisticsResponse>;
  /** cvm详情 {@link DescribeCVMAssetInfoRequest} {@link DescribeCVMAssetInfoResponse} */
  DescribeCVMAssetInfo(data: DescribeCVMAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetInfoResponse>;
  /** cvm列表 {@link DescribeCVMAssetsRequest} {@link DescribeCVMAssetsResponse} */
  DescribeCVMAssets(data?: DescribeCVMAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetsResponse>;
  /** 获取调用记录 {@link DescribeCallRecordRequest} {@link DescribeCallRecordResponse} */
  DescribeCallRecord(data?: DescribeCallRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallRecordResponse>;
  /** 检查项视角风险列表 {@link DescribeCheckViewRisksRequest} {@link DescribeCheckViewRisksResponse} */
  DescribeCheckViewRisks(data?: DescribeCheckViewRisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckViewRisksResponse>;
  /** 集群列表 {@link DescribeClusterAssetsRequest} {@link DescribeClusterAssetsResponse} */
  DescribeClusterAssets(data?: DescribeClusterAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAssetsResponse>;
  /** 集群pod列表 {@link DescribeClusterPodAssetsRequest} {@link DescribeClusterPodAssetsResponse} */
  DescribeClusterPodAssets(data?: DescribeClusterPodAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPodAssetsResponse>;
  /** 云资源配置风险规则列表 {@link DescribeConfigCheckRulesRequest} {@link DescribeConfigCheckRulesResponse} */
  DescribeConfigCheckRules(data?: DescribeConfigCheckRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigCheckRulesResponse>;
  /** db资产详情 {@link DescribeDbAssetInfoRequest} {@link DescribeDbAssetInfoResponse} */
  DescribeDbAssetInfo(data: DescribeDbAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetInfoResponse>;
  /** 数据库资产列表 {@link DescribeDbAssetsRequest} {@link DescribeDbAssetsResponse} */
  DescribeDbAssets(data?: DescribeDbAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetsResponse>;
  /** 域名列表 {@link DescribeDomainAssetsRequest} {@link DescribeDomainAssetsResponse} */
  DescribeDomainAssets(data?: DescribeDomainAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAssetsResponse>;
  /** 查询云边界分析资产分类 {@link DescribeExposeAssetCategoryRequest} {@link DescribeExposeAssetCategoryResponse} */
  DescribeExposeAssetCategory(data?: DescribeExposeAssetCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposeAssetCategoryResponse>;
  /** 查询云边界分析路径节点 {@link DescribeExposePathRequest} {@link DescribeExposePathResponse} */
  DescribeExposePath(data?: DescribeExposePathRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposePathResponse>;
  /** 查询云边界分析列表 {@link DescribeExposuresRequest} {@link DescribeExposuresResponse} */
  DescribeExposures(data?: DescribeExposuresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposuresResponse>;
  /** 网关列表 {@link DescribeGatewayAssetsRequest} {@link DescribeGatewayAssetsResponse} */
  DescribeGatewayAssets(data?: DescribeGatewayAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayAssetsResponse>;
  /** 查询云边界分析-暴露路径下主机节点的高危基线风险列表 {@link DescribeHighBaseLineRiskListRequest} {@link DescribeHighBaseLineRiskListResponse} */
  DescribeHighBaseLineRiskList(data?: DescribeHighBaseLineRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHighBaseLineRiskListResponse>;
  /** 查询clb监听器列表 {@link DescribeListenerListRequest} {@link DescribeListenerListResponse} */
  DescribeListenerList(data?: DescribeListenerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerListResponse>;
  /** 网卡列表 {@link DescribeNICAssetsRequest} {@link DescribeNICAssetsResponse} */
  DescribeNICAssets(data?: DescribeNICAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNICAssetsResponse>;
  /** 查询集团账号详情 {@link DescribeOrganizationInfoRequest} {@link DescribeOrganizationInfoResponse} */
  DescribeOrganizationInfo(data?: DescribeOrganizationInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationInfoResponse>;
  /** 查询集团账号用户列表 {@link DescribeOrganizationUserInfoRequest} {@link DescribeOrganizationUserInfoResponse} */
  DescribeOrganizationUserInfo(data?: DescribeOrganizationUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationUserInfoResponse>;
  /** 资产列表 {@link DescribeOtherCloudAssetsRequest} {@link DescribeOtherCloudAssetsResponse} */
  DescribeOtherCloudAssets(data?: DescribeOtherCloudAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOtherCloudAssetsResponse>;
  /** 公网列表 {@link DescribePublicIpAssetsRequest} {@link DescribePublicIpAssetsResponse} */
  DescribePublicIpAssets(data?: DescribePublicIpAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicIpAssetsResponse>;
  /** 仓库镜像列表 {@link DescribeRepositoryImageAssetsRequest} {@link DescribeRepositoryImageAssetsResponse} */
  DescribeRepositoryImageAssets(data?: DescribeRepositoryImageAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoryImageAssetsResponse>;
  /** 获取风险对应的调用记录 {@link DescribeRiskCallRecordRequest} {@link DescribeRiskCallRecordResponse} */
  DescribeRiskCallRecord(data: DescribeRiskCallRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCallRecordResponse>;
  /** 获取资产视角的配置风险列表 {@link DescribeRiskCenterAssetViewCFGRiskListRequest} {@link DescribeRiskCenterAssetViewCFGRiskListResponse} */
  DescribeRiskCenterAssetViewCFGRiskList(data?: DescribeRiskCenterAssetViewCFGRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewCFGRiskListResponse>;
  /** 获取资产视角的端口风险列表 {@link DescribeRiskCenterAssetViewPortRiskListRequest} {@link DescribeRiskCenterAssetViewPortRiskListResponse} */
  DescribeRiskCenterAssetViewPortRiskList(data?: DescribeRiskCenterAssetViewPortRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewPortRiskListResponse>;
  /** 获取资产视角的漏洞风险列表 {@link DescribeRiskCenterAssetViewVULRiskListRequest} {@link DescribeRiskCenterAssetViewVULRiskListResponse} */
  DescribeRiskCenterAssetViewVULRiskList(data?: DescribeRiskCenterAssetViewVULRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewVULRiskListResponse>;
  /** 获取资产视角的弱口令风险列表 {@link DescribeRiskCenterAssetViewWeakPasswordRiskListRequest} {@link DescribeRiskCenterAssetViewWeakPasswordRiskListResponse} */
  DescribeRiskCenterAssetViewWeakPasswordRiskList(data?: DescribeRiskCenterAssetViewWeakPasswordRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterAssetViewWeakPasswordRiskListResponse>;
  /** 获取配置视角的配置风险列表 {@link DescribeRiskCenterCFGViewCFGRiskListRequest} {@link DescribeRiskCenterCFGViewCFGRiskListResponse} */
  DescribeRiskCenterCFGViewCFGRiskList(data?: DescribeRiskCenterCFGViewCFGRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterCFGViewCFGRiskListResponse>;
  /** 获取端口视角的端口风险列表 {@link DescribeRiskCenterPortViewPortRiskListRequest} {@link DescribeRiskCenterPortViewPortRiskListResponse} */
  DescribeRiskCenterPortViewPortRiskList(data?: DescribeRiskCenterPortViewPortRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterPortViewPortRiskListResponse>;
  /** 获取风险服务列表 {@link DescribeRiskCenterServerRiskListRequest} {@link DescribeRiskCenterServerRiskListResponse} */
  DescribeRiskCenterServerRiskList(data?: DescribeRiskCenterServerRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterServerRiskListResponse>;
  /** 获取漏洞视角的漏洞风险列表 {@link DescribeRiskCenterVULViewVULRiskListRequest} {@link DescribeRiskCenterVULViewVULRiskListResponse} */
  DescribeRiskCenterVULViewVULRiskList(data?: DescribeRiskCenterVULViewVULRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterVULViewVULRiskListResponse>;
  /** 获取内容风险列表 {@link DescribeRiskCenterWebsiteRiskListRequest} {@link DescribeRiskCenterWebsiteRiskListResponse} */
  DescribeRiskCenterWebsiteRiskList(data?: DescribeRiskCenterWebsiteRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterWebsiteRiskListResponse>;
  /** 云配置风险详情列表 {@link DescribeRiskDetailListRequest} {@link DescribeRiskDetailListResponse} */
  DescribeRiskDetailList(data: DescribeRiskDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDetailListResponse>;
  /** 云配置风险规则详情 {@link DescribeRiskRuleDetailRequest} {@link DescribeRiskRuleDetailResponse} */
  DescribeRiskRuleDetail(data: DescribeRiskRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskRuleDetailResponse>;
  /** 高级配置风险规则列表 {@link DescribeRiskRulesRequest} {@link DescribeRiskRulesResponse} */
  DescribeRiskRules(data?: DescribeRiskRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskRulesResponse>;
  /** 获取扫描报告列表 {@link DescribeScanReportListRequest} {@link DescribeScanReportListResponse} */
  DescribeScanReportList(data?: DescribeScanReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanReportListResponse>;
  /** 查询云边界分析扫描结果统计信息 {@link DescribeScanStatisticRequest} {@link DescribeScanStatisticResponse} */
  DescribeScanStatistic(data?: DescribeScanStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanStatisticResponse>;
  /** 获取扫描任务列表 {@link DescribeScanTaskListRequest} {@link DescribeScanTaskListResponse} */
  DescribeScanTaskList(data?: DescribeScanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskListResponse>;
  /** 查询漏洞信息 {@link DescribeSearchBugInfoRequest} {@link DescribeSearchBugInfoResponse} */
  DescribeSearchBugInfo(data: DescribeSearchBugInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchBugInfoResponse>;
  /** 获取访问密钥资产（源IP视角） {@link DescribeSourceIPAssetRequest} {@link DescribeSourceIPAssetResponse} */
  DescribeSourceIPAsset(data?: DescribeSourceIPAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSourceIPAssetResponse>;
  /** 查询集团的子账号列表 {@link DescribeSubUserInfoRequest} {@link DescribeSubUserInfoResponse} */
  DescribeSubUserInfo(data?: DescribeSubUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubUserInfoResponse>;
  /** 子网列表 {@link DescribeSubnetAssetsRequest} {@link DescribeSubnetAssetsResponse} */
  DescribeSubnetAssets(data?: DescribeSubnetAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetAssetsResponse>;
  /** 获取任务扫描报告列表 {@link DescribeTaskLogListRequest} {@link DescribeTaskLogListResponse} */
  DescribeTaskLogList(data?: DescribeTaskLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogListResponse>;
  /** 获取报告下载的临时链接 {@link DescribeTaskLogURLRequest} {@link DescribeTaskLogURLResponse} */
  DescribeTaskLogURL(data: DescribeTaskLogURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogURLResponse>;
  /** 查询TOP攻击信息 {@link DescribeTopAttackInfoRequest} {@link DescribeTopAttackInfoResponse} */
  DescribeTopAttackInfo(data: DescribeTopAttackInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopAttackInfoResponse>;
  /** 查询用户行为分析策略列表 {@link DescribeUebaRuleRequest} {@link DescribeUebaRuleResponse} */
  DescribeUebaRule(data?: DescribeUebaRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUebaRuleResponse>;
  /** 获取账号的调用记录 {@link DescribeUserCallRecordRequest} {@link DescribeUserCallRecordResponse} */
  DescribeUserCallRecord(data: DescribeUserCallRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCallRecordResponse>;
  /** 风险中心-漏洞列表 {@link DescribeVULListRequest} {@link DescribeVULListResponse} */
  DescribeVULList(data?: DescribeVULListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULListResponse>;
  /** 查询漏洞风险高级配置 {@link DescribeVULRiskAdvanceCFGListRequest} {@link DescribeVULRiskAdvanceCFGListResponse} */
  DescribeVULRiskAdvanceCFGList(data?: DescribeVULRiskAdvanceCFGListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULRiskAdvanceCFGListResponse>;
  /** 漏洞管理-漏洞详情 {@link DescribeVULRiskDetailRequest} {@link DescribeVULRiskDetailResponse} */
  DescribeVULRiskDetail(data?: DescribeVULRiskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULRiskDetailResponse>;
  /** vpc列表 {@link DescribeVpcAssetsRequest} {@link DescribeVpcAssetsResponse} */
  DescribeVpcAssets(data?: DescribeVpcAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcAssetsResponse>;
  /** 查询云边界分析-暴露路径下主机节点的漏洞列表 {@link DescribeVulRiskListRequest} {@link DescribeVulRiskListResponse} */
  DescribeVulRiskList(data?: DescribeVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulRiskListResponse>;
  /** 漏洞管理-漏洞视角的漏洞风险列表 {@link DescribeVulViewVulRiskListRequest} {@link DescribeVulViewVulRiskListResponse} */
  DescribeVulViewVulRiskList(data?: DescribeVulViewVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulViewVulRiskListResponse>;
  /** 修改集团账号状态 {@link ModifyOrganizationAccountStatusRequest} {@link ModifyOrganizationAccountStatusResponse} */
  ModifyOrganizationAccountStatus(data: ModifyOrganizationAccountStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOrganizationAccountStatusResponse>;
  /** 修改风险中心风险状态 {@link ModifyRiskCenterRiskStatusRequest} {@link ModifyRiskCenterRiskStatusResponse} */
  ModifyRiskCenterRiskStatus(data: ModifyRiskCenterRiskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterRiskStatusResponse>;
  /** 修改风险中心扫描任务 {@link ModifyRiskCenterScanTaskRequest} {@link ModifyRiskCenterScanTaskResponse} */
  ModifyRiskCenterScanTask(data: ModifyRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterScanTaskResponse>;
  /** 更新自定义策略的开关 {@link ModifyUebaRuleSwitchRequest} {@link ModifyUebaRuleSwitchResponse} */
  ModifyUebaRuleSwitch(data: ModifyUebaRuleSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUebaRuleSwitchResponse>;
  /** 停止扫风险中心扫描任务 {@link StopRiskCenterTaskRequest} {@link StopRiskCenterTaskResponse} */
  StopRiskCenterTask(data: StopRiskCenterTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopRiskCenterTaskResponse>;
  /** 修改告警或者风险状态 {@link UpdateAccessKeyAlarmStatusRequest} {@link UpdateAccessKeyAlarmStatusResponse} */
  UpdateAccessKeyAlarmStatus(data: UpdateAccessKeyAlarmStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccessKeyAlarmStatusResponse>;
  /** 编辑访问密钥备注 {@link UpdateAccessKeyRemarkRequest} {@link UpdateAccessKeyRemarkResponse} */
  UpdateAccessKeyRemark(data: UpdateAccessKeyRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccessKeyRemarkResponse>;
  /** 批量告警状态处理 {@link UpdateAlertStatusListRequest} {@link UpdateAlertStatusListResponse} */
  UpdateAlertStatusList(data: UpdateAlertStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAlertStatusListResponse>;
}

export declare type Versions = ["2022-11-21"];

export default Csip;
