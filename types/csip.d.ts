/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** Ai Agent 资产信息列表项 */
declare interface AIAgentAsset {
  /** ID 标识 */
  ID?: string;
  /** agent 名称 */
  AgentName?: string;
  /** agent 使用模型名称 */
  AgentModel?: string[];
  /** 实例 ID */
  InstanceID?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** metadata 风险列表。有如下枚举值: 1. AK_TMP 2. USER_DATA */
  MetadataRiskList?: string[];
  /** 首次检出时间 */
  IdentityTimeFirst?: string;
  /** 最近检出时间 */
  IdentityTimeLast?: string;
  /** 检出方式。有如下枚举值 1. FINGER 资产指纹方式检出 2. NETWORK 网络访问方式检出 */
  IdentityMethod?: string;
  /** 暴露状态。有如下枚举值。1. EXPOSED；2.UNEXPOSED；UNKNOWN; */
  ExposureStatus?: string;
  /** metadata 有风险时对应路径 */
  MetadataRiskURL?: string;
  /** 无 */
  SkillState?: SkillState;
  /** 流量沙箱插件状态 */
  TrafficPluginState?: TrafficPluginState;
  /** 流量沙箱规则状态 */
  TrafficRuleState?: TrafficRuleState[];
  /** 命令沙箱插件状态 */
  CommandPluginState?: CommandPluginState;
}

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

/** 常规密钥凭据（出参专用），用于查询详情接口的响应。Value字段返回打码后的值，不暴露明文 */
declare interface AccessCredentialOutput {
  /** 凭据键名（原文），如SecretId、SecretKey、Token等 */
  Key?: string;
  /** 凭据键值（打码后）补充说明：保留前3后4位，中间用***替代；长度不足7位时全部替换为*** */
  Value?: string;
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
  /** ai分析失败描述，未失败为空字符串 */
  AIFailedReason?: string;
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

/** 资产视角风险信息 */
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
  /** 资产类型 */
  AssetType?: string;
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
  /** 资产类型 */
  AssetTypeName?: string;
}

/** 安全中心资产标签 */
declare interface AssetTag {
  /** 标签的key值,可以是字母、数字、下划线 */
  TagKey?: string;
  /** 标签的vale值,可以是字母、数字、下划线 */
  TagValue?: string;
}

/** 操作资产标签资产信息 */
declare interface AssetTagModifyAssetItem {
  /** appid */
  AppID: number;
  /** 资产类型 */
  AssetType: string;
  /** 实例ID */
  InstanceID: string;
  /** 云厂商 */
  Provider: string;
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

/** EDR-攻击阶段对应数量 */
declare interface AttackStageCount {
  /** 攻击阶段 */
  AttackStage?: string;
  /** 策略数量 */
  Count?: number;
}

/** 通用的下拉框列表 */
declare interface AttributeOptionSet {
  /** cvm实例类型 */
  Text?: string;
  /** cvm实例名称 */
  Value?: string;
}

/** 审计日志列表信息 */
declare interface AuditLogInfo {
  /** ai分数 */
  AiScore?: number;
  /** 应用用户 */
  AppUser?: string;
  /** 备份数据包 */
  BackPacket?: string;
  /** 客户端 IP */
  ClientIp?: string;
  /** 客户端 Mac */
  ClientMac?: string;
  /** 终端名称，取值Proxy时为casb代理流量，其它为Agent流量 */
  ClientName?: string;
  /** 客户端用户 */
  ClientUser?: string;
  /** 客户端端口 */
  ClientPort?: number;
  /** 风险等级 */
  DangerLevel?: number;
  /** 数据库 IP */
  DbIp?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 数据库端口 */
  DbPort?: number;
  /** 数据库用户 */
  DbUser?: string;
  /** 影响行数 */
  EffectRow?: number;
  /** 执行时间 */
  ExecTime?: number;
  /** 命中规则 */
  HitRule?: string;
  /** 日志 ID */
  Id?: number;
  /** 数据资产名称 */
  InstanceId?: number;
  /** 审计单元名 */
  InstanceName?: string;
  /** 操作语句(sql 语句) */
  OpSql?: string;
  /** 操作时间(时间) */
  OpTime?: number;
  /** 返回消息 */
  RetMsg?: string;
  /** 返回码 */
  RetNo?: number;
  /** 会话ID */
  SessionId?: string;
  /** 操作类型 */
  SqlType?: string;
  /** 表名 */
  TableName?: string;
  /** 数据资产名称 */
  AssetName?: string;
  /** 规则集合 */
  HitRules?: HitRules[];
  /** 流量来源 */
  SourceType?: string;
  /** 单条审计日志id */
  ReqId?: string;
  /** SQL 主要类型，DML/DDL/DCL/TCL */
  SqlMainType?: string;
  /** 表名集合 */
  TableNames?: string[];
  /** 字段名集合 */
  FieldNames?: string[];
  /** 字段名 */
  FieldName?: string;
  /** 数据库类型 */
  DbType?: string;
  /** 客户端工具 */
  ClientDriverName?: string;
  /** 位置信息 */
  Location?: Location;
  /** 字段信息（包含敏感信息） */
  FieldDetails?: TableField[];
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
}

/** 日志备份 */
declare interface BackupLog {
  /** 索引 */
  Id: number;
  /** 索引开始时间 */
  IndexStartTime: number;
  /** 索引结束时间 */
  IndexEndTime: number;
  /** 备份后压缩的大小，单位M */
  BackupSize: number;
  /** 日志状态 0备份未完成， 1备份文件，2恢复中，3已恢复，4.已删除 */
  Status: number;
  /** 恢复剩余的分钟数，分钟，需要前端转换 */
  RestoreProcessRemindTime?: number;
  /** 恢复日志保留的时间 */
  RestoreRemindTime?: number;
  /** 恢复索引大小 */
  RestoreIndexSize?: number;
  /** 恢复日志执行结束时间 */
  RestoreEndTime?: number;
  /** 备份所属的appId */
  AppId?: number;
  /** 备份所属的资产ID */
  AssetId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
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

/** CI/CD接入Token */
declare interface CICDToken {
  /** ID */
  Id?: number;
  /** appid */
  AppId?: number;
  /** CI/CD名称 */
  Name?: string;
  /** 用于接入的Token */
  Token?: string;
  /** 扫描结果存储时长 */
  Period?: number;
  /** 已扫描文件 */
  FileCnt?: number;
  /** 最近扫描状态 */
  LastScanStatus?: string;
  /** 最近扫描时间 */
  LastScanTime?: string;
}

/** 安全中心标签 */
declare interface CSIPTag {
  /** 标签颜色 */
  TagColor?: string;
  /** 标签ID */
  TagID?: number;
  /** 标签键（根据语言环境返回中文或英文） */
  TagKey?: string;
  /** 标签值（根据语言环境返回中文或英文） */
  TagValue?: string;
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
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
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

/** AI Agent 命令沙箱插件状态 */
declare interface CommandPluginState {
  /** 插件安装状态（上层聚合）枚举值：NONE：未安装INSTALLING：安装中INSTALLED：已安装INSTALL_FAIL：安装失败 */
  InstallStatus?: string;
}

/** 容器环境信息 */
declare interface ContainerEnvInfo {
  /** 节点类型 */
  NodeType?: string;
  /** docker版本 */
  DockerVersion?: string;
  /** containerd版本 */
  ContainerdVersion?: string;
  /** 文件系统类型 */
  FileSystemType?: string;
}

/** cos访问权限信息 */
declare interface CosAccessInfo {
  /** 可访问账号uin */
  AccessUin?: string;
  /** 可访问账号uid */
  AccessUid?: string;
  /** 昵称 */
  NickName?: string;
  /** 身份标识 1 主账号2 子账号 */
  Identity?: number;
  /** 所属主账号名称 */
  MainNickName?: string;
  /** 可访问ak列表 */
  AkList?: string[];
  /** 可访问权限数 */
  CamPolicyCount?: number;
  /** 修改时间Unix时间单位毫秒 */
  UpdateTime?: number;
}

/** cos命令信息 */
declare interface CosActionInfo {
  /** 接口名 */
  ActionName?: string;
  /** 接口中文名 */
  ActionNameCn?: string;
  /** 接口描述 */
  ActionDescription?: string;
}

/** cos关联ak资产信息 */
declare interface CosAkAssetInfo {
  /** appid */
  AppId?: number;
  /** ak id */
  AkId?: string;
  /** ak名称 */
  AkName?: string;
  /** ak备注 */
  AkRemark?: string;
  /** ak所属uin */
  AkOwnerUin?: string;
  /** ak类型 1 主 2 子 */
  AkOwnerType?: number;
  /** ak所属账号名 */
  AkOwnerName?: string;
  /** ak主账号名 */
  AkMainOwnerName?: string;
  /** ak关联桶集合 */
  AkRelBucketSet?: string[];
  /** ak关联告警集合 */
  AkRelAlarmSet?: CosRiskInfo[];
  /** Ak关联ip数 */
  AkRelIpCount?: number;
  /** ak状态 0 禁用 1 启用 */
  AkStatus?: number;
  /** 创建时间 */
  CreateTimestamp?: number;
  /** 最后访问时间 */
  LastAccessTimestamp?: number;
}

/** cos ak 集合 */
declare interface CosAkSet {
  /** ak所属appid */
  AppId?: number;
  /** ak名称集合 */
  AkNameSet?: string[];
}

/** 对象存储告警信息 */
declare interface CosAlarmInfo {
  /** appid */
  AppId?: number;
  /** 策略id */
  PolicyId?: number;
  /** 策略名称 */
  PolicyName?: string;
  /** 策略类型 0-未知规则分类(Unknown), 1-异常行为(AbnormalBehavior), 2-权限过大(ExcessivePermission), 3-资源枚举(ResourceEnumerated), 4-匿名访问(AnonymousAccess) */
  PolicyAbnormalType?: number;
  /** 风险等级：0:Normal, 1:Tip, 2:Low, 3:Middle, 4:High, 5:Critical */
  PolicyRiskLevel?: number;
  /** 策略信息描述 */
  PolicyDescription?: string;
  /** 桶名 */
  BucketName?: string;
  /** 桶地域 */
  BucketRegion?: string;
  /** 桶备注 */
  BucketMarker?: string;
  /** 桶tag信息 */
  BucketTagInfo?: string;
  /** 桶可访问属性 */
  BucketAccessWay?: string;
  /** 所属账号uin */
  AccountUin?: string;
  /** 所属账号昵称 */
  AccountNickName?: string;
  /** 所属账号社身份 1 主 2子 */
  AccountIdentify?: number;
  /** 子账号所属主账号昵称 */
  AccountMainNickName?: string;
  /** 告警时间戳Unix时间单位毫秒 */
  AlarmTimestamp?: number;
  /** 处置状态 0 未处理 1 标记处置 2标记忽略 */
  HandleStatus?: number;
  /** 告警对象id */
  AlarmId?: number;
  /** 桶地域码值 */
  BucketRegionCode?: string;
  /** 数据识别分类详情 */
  CategoryDetails?: CosIdentifyCategoryDetail[];
}

/** 告警或者风险id信息 */
declare interface CosAlarmRiskIdInfo {
  /** 告警id */
  AlarmRiskId: number;
  /** 租户id */
  AppId: number;
}

/** cos每日告警/风险信息 */
declare interface CosAlarmTrendInfo {
  /** 当前日期字符串格式 */
  CurrentDateStr?: string;
  /** 当前日期总数 */
  CurrentDayCount?: number;
  /** 当天告警分类详情 */
  CurrentDayOverView?: CosRiskInfo[];
}

/** cos审计资产数据识别详情 */
declare interface CosAssetDataScanDetail {
  /** 识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败 */
  Status?: number;
  /** 识别进度 */
  Progress?: number;
  /** 最近扫描时间 */
  LatestScanTime?: number;
  /** 识别失败信息 */
  ErrorInfo?: string;
  /** 识别结果分类详情 */
  CategoryDetails?: CosIdentifyCategoryDetail[];
}

/** cos审计文件数据识别信息 */
declare interface CosAssetFileIdentifyInfo {
  /** 文件名称 */
  FileName?: string;
  /** 文件路径 */
  DirName?: string;
  /** 分类数据项详情 */
  CategoryDetails?: CosIdentifyCategoryDetail[];
}

/** Cos资产信息 */
declare interface CosAssetInfo {
  /** appid */
  AppId?: number;
  /** cos桶名 */
  BucketName?: string;
  /** cos region名 */
  BucketRegion?: string;
  /** 地域码值 */
  BucketRegionCode?: string;
  /** cos桶备注 */
  BucketMarker?: string;
  /** cos桶主账号所属者 */
  BucketOwnerUin?: string;
  /** cos主账号所属者昵称 */
  BucketOwnerNickName?: string;
  /** cos桶标签详情 */
  BucketTagInfo?: string;
  /** 安全建议1 暂无异常2 建议加固3 立即处理 */
  BucketSecuritySuggestion?: number;
  /** 告警列表 */
  BucketAlarmList?: CosRiskAlarmInfo[];
  /** 风险列表 */
  BucketRiskList?: CosRiskAlarmInfo[];
  /** 调用源ip数 */
  BucketInvokeSourceIpCount?: number;
  /** 访问策略 */
  BucketAccessWay?: CosBucketAccessWay;
  /** 创建时间Unix时间单位毫秒 */
  CreateTime?: number;
  /** 最后访问时间Unix时间单位毫秒 */
  LastAccessTime?: number;
  /** 存储桶id */
  BucketId?: number;
  /** 0 关闭1 开启 */
  MonitorStatus?: number;
  /** 数据识别扫描信息 */
  DataScanInfo?: CosAssetDataScanDetail;
  /** 存储桶Az类型枚举值：MAZ： 多azSAZ： 单az */
  BucketAzType?: string;
  /** 存储桶存储大小默认值：0 */
  BucketStorageSize?: number;
  /** 存储桶对象个数默认值：0 */
  BucketObjectCount?: number;
  /** 存储桶敏感识别采样率取值范围：[0, 1]默认值：0 */
  IdentifySampleRate?: number;
}

/** cos资产同步任务信息 */
declare interface CosAssetSyncTaskInfo {
  /** appid */
  AppId?: number;
  /** 同步任务id */
  TaskId?: string;
  /** 最后一次扫描时间 */
  LastScanTime?: number;
}

/** cos审计支付信息 */
declare interface CosAuditPayInfo {
  /** APPID */
  AppId?: number;
  /** 订单状态 0未购买 1正常，2隔离，3销毁，6试用中，7到期 */
  OrderStatus?: number;
  /** 已购对象存储数量 */
  BucketNum?: number;
  /** 支付模式，0-后付费 1-预付费 */
  PayMode?: number;
  /** 是否单独购买，1-单独购买，2-被其它账号共享 */
  IsSelfBuy?: number;
  /** 订单开始时间 */
  BeginTime?: string;
  /** 订单到期时间 */
  EndTime?: string;
  /** 0-用户未设置,1-用户设置自动续费,2-用户设置不自动续费 */
  AutoRenew?: number;
  /** 订单时长 */
  TimeSpan?: number;
  /** 时长单位 */
  TimeUnit?: string;
  /** 资源id */
  ResourceId?: string;
  /** 公测结束时间 */
  BetaEndTime?: string;
  /** 系统当前时间 */
  TimeNow?: string;
  /** 是否分享给其它账号，1-是，2-否 */
  IsShareToOther?: number;
  /** uin */
  Uin?: string;
  /** 昵称 */
  NickName?: string;
  /** 共享的bucketIdSet */
  BindBucket?: CosBucketId[];
  /** 共享的appid */
  SharedAppIdSet?: number[];
  /** 是否已经开启后付费 */
  PostPayStatus?: number;
  /** 0：未做过试用期试用 1 ：做过试用期试用 */
  IsTestUser?: number;
  /** 剩余可用数 */
  AvailableBucketNum?: number;
  /** 已开启的监测存储桶数 */
  MonitorBucketNum?: number;
  /** 总的存储桶数 */
  TotalBucketNum?: number;
  /** 后付费产品开关状态 */
  PostProductStatusList?: number[];
  /** 后付费产品购买状态 */
  PostProductBuyStatusList?: number[];
  /** 新后付费资源id */
  NewPostPayResourceId?: string;
}

/** cos风险识别桶访问规则 */
declare interface CosBucketAccessWay {
  /** 可访问方式：specify 指定用户anonymous 可匿名访问 */
  AccessType?: string;
  /** 用户数 */
  AccessUserCount?: number;
  /** ak数 */
  AccessAkCount?: number;
  /** 角色数 */
  AccessRoleCount?: number;
}

/** 存储桶数量 */
declare interface CosBucketBillingInfo {
  /** appid */
  AppId?: number;
  /** uin */
  OwnerUin?: string;
  /** 昵称 */
  OwnerNickName?: string;
  /** 存储桶数量 */
  BucketCount?: number;
  /** 0 未购买 1 已单独购买 2 已被共享 */
  BuyStatus?: number;
  /** 共享账号appid */
  ShareFromAppId?: number;
  /** 共享账号uin */
  ShareFromUin?: string;
  /** 共享账号昵称 */
  ShareFromNickName?: string;
  /** 监控的存储桶数 */
  MonitorBucketCount?: number;
  /** 0 关闭 1 开启 */
  IsAutoMonitor?: number;
  /** 是否启用白名单日志功能 */
  LogFeatureWhitelist?: boolean;
  /** 是否存在新的后付费订单 */
  IsHaveNewPostOrder?: boolean;
  /** 是否存在旧后付费订单 */
  IsHaveOldPostOrder?: boolean;
  /** 后付费产品列表 */
  PostProductList?: number[];
}

/** 存储桶id */
declare interface CosBucketId {
  /** appid */
  AppId?: string;
  /**  */
  IsAutoMonitor?: number;
  /** bucket id集合 */
  BucketIdSet?: string[];
}

/** cos存储桶详情信息 */
declare interface CosBucketInfo {
  /** appid信息 */
  AppId: number | null;
  /** 存储桶名 */
  BucketName: string | null;
  /** 地域信息 */
  BucketRegion?: string;
  /** 地域码值 */
  BucketRegionCode?: string;
  /** 备注 */
  BucketMarker?: string;
}

/** cos存储桶任务信息 */
declare interface CosBucketTaskInfo {
  /** appid */
  AppId?: number;
  /** 存储桶名 */
  BucketName?: string;
  /** 任务id */
  TaskId?: string;
  /** 最后一次扫描时间 */
  LastScanTime?: number;
}

/** cos字典信息 */
declare interface CosDictionary {
  /** 字典id */
  DictId?: number;
  /** 字典名称 */
  DictName?: string;
}

/** cos数据识别结果分类详情 */
declare interface CosIdentifyCategoryDetail {
  /** 分类id */
  CategoryId?: number;
  /** 分类名称 */
  CategoryName?: string;
  /** 数据项集合 */
  RuleSet?: CosIdentifyRuleDetail[];
}

/** cos数据项详情 */
declare interface CosIdentifyRuleDetail {
  /** 数据项id */
  RuleId?: number;
  /** 数据项名称 */
  RuleName?: string;
  /** 敏感级别id */
  LevelId?: number;
  /** 敏感级别名称 */
  LevelName?: string;
  /** 敏感程度 */
  LevelScore?: number;
}

/** cos调用详情信息 */
declare interface CosInvokeDetailInfo {
  /** 调用时间 */
  InvokeTimestamp: number;
  /** 请求id */
  InvokeRequestId: string;
  /** 调用内容 */
  InvokeContent: string;
}

/** cos调用源ip vpc信息 */
declare interface CosInvokeIpVpcInfo {
  /** vpc所属uin */
  Uin?: string;
  /** vpc所属appid */
  AppId?: number;
  /** 昵称 */
  NickName?: string;
  /** vpcid信息 */
  VpcId?: string;
  /** vpc名称 */
  VpcName?: string;
}

/** cos调用日志 */
declare interface CosInvokeLog {
  /** 调用时间戳 */
  InvokeTimestamp?: number;
  /** 请求id */
  RequestId?: string;
  /** 请求内容 base64 json 结构 */
  RequestContent?: string;
}

/** cos概览页面数据结构 */
declare interface CosOverview {
  /** 资产总数 */
  AssetCount?: number;
  /** 需要立即处理的资产数 */
  AlarmAssetCount?: number;
  /** 需要加固的资产数 */
  RiskAssetCount?: number;
  /** 告警总数 */
  AlarmCount?: number;
  /** 当日新增告警总数 */
  IncrementAlarmCount?: number;
  /** 风险总数 */
  RiskCount?: number;
  /** 当日新增告警总数 */
  IncrementRiskCount?: number;
  /** 风险top详情 */
  RiskTop?: CosRiskInfo[];
  /** 告警风险top */
  AlarmTop?: CosRiskInfo[];
}

/** cos权限信息 */
declare interface CosPermissionInfo {
  /** 权限来源 */
  PermissionSource?: string;
  /** 权限内容 */
  PermissionContent?: string;
  /** 授权资源 */
  GrantResource?: string;
  /** 授权动作 */
  GrantAction?: string;
  /** 授权条件 */
  GrantCondition?: string;
}

/** cos策略信息 */
declare interface CosPolicyInfo {
  /** 策略名称 */
  PolicyName: string;
  /** 策略类型PolicyType：1 告警策略 2 风险策略 3 白名单策略 4 ip隐藏策略 */
  PolicyType: number;
  /** system:系统内置 user:用户自定义 */
  PolicySource: number;
  /** 策略内容 */
  PolicyContent: string;
  /** 0 关闭1 开启 */
  PolicyStatus: number;
  /** 策略分类 */
  PolicyAbnormalType: number;
  /** 风险级别 */
  RiskLevel: number;
  /** 策略id */
  PolicyId?: number;
  /** 创建时间 */
  PolicyCreateTime?: number;
  /** 更新时间 */
  PolicyUpdateTime?: number;
  /** 策略近七天命中次数 */
  PolicyHitCount?: number;
  /** 告警内容hash */
  PolicyContentHash?: string;
  /** 关联账户数 */
  RelAccountCount?: number;
  /** 关联账号uin */
  RelAccountUin?: string;
  /** 关联账号名 */
  RelAccountName?: string;
  /** 描述信息 */
  PolicyDescription?: string;
  /** 备注信息 */
  PolicyMarker?: string;
  /** appid */
  AppId?: number;
  /** 多账号场景下的id集合 */
  PolicyIdSet?: number[];
  /** 是否处置历史数据状态 0 无须处置 1 需要处置 2 已处置 */
  PolicyHistoryHandleStatus?: number;
  /** 系统策略编辑状态 */
  SystemPolicyEditStatus?: number;
}

/** 风险接口情况 */
declare interface CosRiskActionInfo {
  /** 接口名 */
  ActionName?: string;
  /** 接口名中文 */
  ActionNameCn?: string;
  /** 调用次数 */
  InvokeCount?: number;
  /** 最后访问时间Unix时间单位毫秒 */
  ActionAccessTime?: number;
}

/** cos风险告警信息 */
declare interface CosRiskAlarmInfo {
  /** 策略类型枚举值 */
  PolicyType?: number;
  /** 策略名 */
  PolicyTypeName?: string;
  /** 策略类型对应的策略数量 */
  PolicyCount?: number;
}

/** 受影响的存储桶信息 */
declare interface CosRiskBucketInfo {
  /** appid */
  AppId?: number;
  /** 桶名 */
  BucketName?: string;
  /** 桶地域 */
  BucketRegion?: string;
  /** 桶备注信息 */
  BucketMarker?: string;
  /** 桶uin */
  BucketUin?: string;
  /** uin昵称 */
  BucketNickName?: string;
  /** uin主账号昵称 */
  BucketMainNickName?: string;
  /** uin身份 */
  BucketIdentify?: number;
  /** 风险检出时间Unix时间单位毫秒 */
  LastScanTimestamp?: number;
  /** 状态信息 */
  HandleStatus?: number;
  /** 风险名称 */
  PolicyName?: string;
  /** 风险类型 */
  PolicyType?: number;
  /** 策略id */
  PolicyId?: number;
  /** 策略级别 */
  PolicyLevel?: number;
  /** 策略描述 */
  PolicyDescription?: string;
  /** 访问方式 */
  BucketAccessWay?: string;
  /** 标签信息 */
  BucketTagInfo?: string;
  /** 风险id */
  RiskId?: number;
  /** cos地域码值 */
  BucketRegionCode?: string;
  /** 是否开启自动监测状态 0 关闭 1 开启 */
  BucketMonitorStatus?: number;
}

/** cos风险详情 */
declare interface CosRiskInfo {
  /** 策略类型码值 */
  PolicyType?: number;
  /** 策略分类名 */
  PolicyTypeName?: string;
  /** 命中策略总数 */
  PolicyCount?: number;
}

/** 对象存储风险趋势图 */
declare interface CosRiskTrendInfo {
  /** 当前日期 */
  CurrentDateStr?: string;
  /** 风险数据信息 */
  RiskDataSet?: CosRiskInfo[];
}

/** 风险视角风险列表 */
declare interface CosRiskViewInfo {
  /** appid */
  AppId?: number;
  /** 策略名称 */
  PolicyName?: string;
  /** 策略id */
  PolicyId?: string;
  /** 策略分类 */
  PolicyType?: number;
  /** 策略风险等级 */
  PolicyRiskLevel?: number;
  /** 策略描述 */
  PolicyDescription?: string;
  /** 待处理的桶数 */
  HandleBucketCount?: number;
  /** 最近风险检出时间Unix时间单位毫秒 */
  LastScanTimestamp?: number;
}

/** Cos桶关联角色列表信息 */
declare interface CosRoleAccessInfo {
  /** 角色ID */
  RoleId?: string;
  /** 角色名称 */
  RoleName?: string;
  /** 角色描述 */
  RoleDescription?: string;
  /** 可访问权限数 */
  PermissionCount?: number;
  /** 策略创建时间 */
  CreateTime?: number;
}

/** 对象存储调用源ip信息 */
declare interface CosSourceIpInfo {
  /** 调用UA */
  UA?: string[];
  /** 调用vpc信息 */
  VpcInfo?: CosInvokeIpVpcInfo;
}

/** 生效机器范围，用于指定凭证在哪些机器上生效 */
declare interface CredentialEffectScope {
  /** 是否排除模式枚举值：0：包含模式（仅Instances中的机器生效），此时Instances必填1：排除模式（Instances中的机器不生效，其余机器生效），此时Instances可选（空列表表示全部机器生效） */
  Exclude?: number;
  /** 机器实例ID列表。Exclude为0时必填，表示仅这些机器可访问凭证；Exclude为1时可选，表示这些机器不可访问凭证（空列表表示全部机器生效） */
  Instances?: string[] | null;
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

/** EDR-检测方式对应策略数量 */
declare interface DetectTypeCount {
  /** 检测方式，0：主机检测，1：网络检测 */
  DetectType?: number;
  /** 策略数量 */
  Count?: number;
}

/** 磁盘分区信息 */
declare interface DiskPartitionInfo {
  /** 分区名称 */
  Name?: string;
  /** 挂载路径 */
  Path?: string;
  /** 使用百分比 */
  Percent?: number;
  /** 分区大小(MB) */
  Size?: number;
  /** 分区类型 */
  Type?: string;
  /** 已使用(MB) */
  Used?: number;
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

/** 反查域名信息 */
declare interface DomainInfo {
  /** 域名 */
  Domain?: string;
  /** 分析时间 */
  AnalysisTime?: string;
  /** 标签 */
  Tags?: string[];
}

/** Dspm访问记录 */
declare interface DspmAccessRecord {
  /** 资产信息 */
  Asset?: DspmDbAsset;
  /** 账号 */
  Accounts?: DspmAssetAccount[];
  /** 来源ip信息 */
  SourceIpList?: DspmIp[];
  /** 记录时间 */
  RecordTime?: string;
  /** 登录成功次数 */
  LoginSuccessCount?: number;
  /** 登录失败次数 */
  LoginFailedCount?: number;
}

/** Dspm访问管理记录Id */
declare interface DspmAccessRecordId {
  /** 来源ip */
  SourceIp?: string;
  /** 资产列表 */
  AssetId?: string;
  /** 资产所在地域 */
  Region?: string;
  /** 资产账号 */
  Account?: string;
  /** 主机地址 */
  Host?: string;
  /** 记录时间 */
  RecordTime?: string;
}

/** Dspm 账号统计数 */
declare interface DspmAccountCount {
  /** 云账号个数 */
  UinAccountCount?: number;
  /** 访客账号个数 */
  PersonCount?: number;
  /** 未管控账号个数 */
  UncontrolledAccountCount?: number;
  /** 总账号个数 */
  TotalAccountCount?: number;
}

/** dspm数据识别级别信息 */
declare interface DspmAddIdentifyLevelItem {
  /** 级别名称 */
  LevelName: string;
  /** 级别敏感程度单位：分数 */
  LevelScore: number;
}

/** 申请单信息 */
declare interface DspmApplyOrder {
  /** 申请单id */
  OrderId?: string;
  /** 身份id。 */
  IdentifyId?: string;
  /** 申请人账号uin */
  ApplicantUin?: DspmUinUser;
  /** 资产id */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 资产所属地域 */
  Region?: string;
  /** 申请类型。0-关联身份 1-编辑身份 2-创建临时身份 */
  ApplyType?: number;
  /** 申请权限。 */
  Privilege?: DspmDbAccountPrivilege;
  /** 从审批完成后开始计算的访问权限失效时间，临时账号有效。单位毫秒。 */
  ValidatePeriod?: number;
  /** 申请原因。 */
  Reason?: string;
  /** 审批步骤 */
  ApproverSteps?: DspmApproverStep[];
  /** 管理类型。0-普通成员 1-管理员 */
  ManagerType?: number;
  /** 个人用户信息 */
  Person?: DspmPersonUser;
  /** 云账号用户信息 */
  SubjectUser?: DspmUinUser;
  /** 审批状态。 0-未审批 1-通过 2-拒绝 */
  Status?: number;
  /** 申请单创建时间。 */
  CreateTime?: string;
}

/** 审批单信息 */
declare interface DspmApproverOrder {
  /** 对应申请单id */
  OrderId?: string;
  /** 身份id。 */
  IdentifyId?: string;
  /** 申请人账号uin */
  ApplicantUin?: DspmUinUser;
  /** 资产id */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 申请类型。0-关联身份 1-编辑身份 2-创建临时身份 */
  ApplyType?: number;
  /** 申请权限 */
  Privilege?: DspmDbAccountPrivilege;
  /** 从审批完成后开始计算的访问权限失效时间，临时账号有效。单位毫秒。 */
  ValidatePeriod?: number;
  /** 申请原因 */
  Reason?: string;
  /** 管理类型。0-普通成员 1-管理员 */
  ManagerType?: number;
  /** 个人用户信息 */
  Person?: DspmPersonUser;
  /** 云账号用户信息 */
  SubjectUser?: DspmUinUser;
  /** 对应申请单创建时间。 */
  CreateTime?: string;
}

/** 审批步骤 */
declare interface DspmApproverStep {
  /** 审批人列表 */
  ApproverUinSet?: DspmUinUser[];
  /** 审批人 */
  ApproverUin?: string;
  /** 审批状态 0-未审批 1-通过 2-拒绝 */
  Status?: number;
  /** 审批意见 */
  Comment?: string;
  /** 审批时间。 */
  ApproveTime?: string;
}

/** Dspm地域信息 */
declare interface DspmArea {
  /** 国家 */
  Country?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
}

/** Dspm资产访问拓扑 */
declare interface DspmAssetAccessTopologyItem {
  /** 资产id */
  AssetId?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产名 */
  AssetName?: string;
  /** 资产账号 */
  AssetAccount?: string;
  /** 主机地址 */
  Host?: string;
  /** 账号类型 */
  AccountType?: number;
  /** 资产地址 */
  AssetIp?: string;
  /** 访问来源ip地址 */
  SourceIp?: string;
  /** 访问来源ip类型 */
  SourceIpType?: string;
  /** 访问频率。次/天 */
  AccessFrequency?: DspmFrequency;
  /** 执行SQL频率。条/小时。 */
  ExecSQLFrequency?: DspmFrequency;
  /** 访问起始时间 */
  AccessBeginTime?: string;
  /** 访问结束时间 */
  AccessEndTime?: string;
  /** 账号风险数 */
  AccountRisk?: number;
  /** 资产风险数 */
  AssetRisk?: number;
  /** 所属地域 */
  Region?: string;
  /** 身份类型。非身份账号为null。0-未定义 2-长期身份 3-临时身份 */
  IdentifyType?: number;
  /** 所属云账号uin用户。 */
  OwnerUin?: DspmUinUser;
  /** 所属个人用户信息。 */
  Person?: DspmPersonUser;
  /** 账号告警数 */
  AccountAlarm?: number;
  /** 资产告警数 */
  AssetAlarm?: number;
}

/** 资产账号信息 */
declare interface DspmAssetAccount {
  /** 账号名 */
  Account?: string;
  /** 主机地址 */
  Host?: string;
  /** 账号类型。 0-未定义 1-服务账号 2-个人账号 3-临时账号 */
  AccountType?: number;
  /** 所属对象。uin或个人id */
  Subject?: string;
  /** 权限信息 */
  Privilege?: DspmDbAccountPrivilege;
  /** 状态。 0-不活跃 1-活跃 2-已删除 */
  Status?: number;
  /** 账号创建时间。 */
  CreateTime?: string;
  /** 访问权限生效时间。 */
  ValidateFrom?: string;
  /** 访问权限失效时间。 */
  ValidateTo?: string;
  /** 备注 */
  Remark?: string;
  /** 资产id */
  AssetId?: string;
  /** 是否新账号 */
  IsNewAccount?: number;
  /** 身份类型。非身份账号为null。0-未定义 2-长期身份 3-临时身份 */
  IdentifyType?: number;
  /** 所属云账号uin用户。 */
  OwnerUin?: DspmUinUser;
  /** 所属个人用户信息。 */
  Person?: DspmPersonUser;
  /** 风险统计信息 */
  RiskCount?: DspmRiskCount;
  /** 预设权限。 */
  PresetPrivilege?: DspmDbAccountPrivilege;
}

/** 资产账号身份信息 */
declare interface DspmAssetAccountIdentify {
  /** 资产id */
  AssetId?: string;
  /** 所属云账号uin用户。 */
  OwnerUin?: DspmUinUser;
  /** 是否管理员 */
  IsManager?: number;
  /** 主机地址 */
  Host?: string;
  /** 账号类型。 0-未定义 1-服务账号 2-个人账号 3-临时账号 */
  AccountType?: number;
  /** 权限信息 */
  Privilege?: DspmDbAccountPrivilege;
  /** 活跃状态。 0-不活跃 1-活跃 */
  Status?: number;
  /** 账号创建时间。 */
  CreateTime?: string;
  /** 访问权限生效时间。 */
  ValidateFrom?: string;
  /** 访问权限失效时间。 */
  ValidateTo?: string;
  /** 备注 */
  Remark?: string;
  /** 访客权限申请次数 */
  PersonApplyCount?: number;
  /** 资产名 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 所属地域 */
  Region?: string;
  /** 风险统计信息 */
  RiskCount?: DspmRiskCount;
  /** 身份类型。非身份账号为null。0-未定义 2-长期身份 3-临时身份 */
  IdentifyType?: number;
  /** 所属个人用户信息。 */
  Person?: DspmPersonUser;
  /** 创建者账号uin用户。 */
  CreatorUin?: DspmUinUser;
  /** 预设权限。 */
  PresetPrivilege?: DspmDbAccountPrivilege;
  /** 内网访问地址，如果有多个，使用';'分割 */
  PrivateIp?: string;
  /** 身份id */
  IdentifyId?: string;
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
}

/** Dspm 资产统计数 */
declare interface DspmAssetCount {
  /** 资产个数 */
  AssetCount?: number;
  /** 资产有危险风险的个数 */
  DangerRiskCount?: number;
  /** 资产有低风险的个数 */
  LowRiskCount?: number;
  /** 有待处理风险的实例数 */
  RiskAssetCount?: number;
  /** 有待处理告警的实例数 */
  AlarmAssetCount?: number;
}

/** dspm资产数据识别详情 */
declare interface DspmAssetDataScanDetail {
  /** 识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败 */
  Status?: number;
  /** 识别任务状态 0:未识别 1:识别中 2:识别终止 3:识别成功 4:识别失败 */
  StatusInfo?: string;
  /** 识别进度 */
  Progress?: number;
  /** 最近扫描时间 */
  LatestScanTime?: string;
  /** 识别失败信息 */
  ErrorInfo?: string;
  /** 数据库数量 */
  DbCount?: number;
  /** 分类id集合 */
  CategoryIds?: number[];
  /** 分类名称集合 */
  CategoryNames?: string[];
  /** 扫描任务配置 */
  TaskConfig?: DspmSensitiveScanTaskConfig;
  /** 识别结果分类详情 */
  CategoryDetails?: DspmIdentifyCategoryDetail[];
  /** 任务ID */
  TaskId?: number;
}

/** dspm资产数据库信息 */
declare interface DspmAssetDatabaseInfo {
  /** 资产实例id */
  AssetId?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 总表数 */
  TableCount?: number;
  /** 敏感表数 */
  SensitiveTableCount?: number;
  /** 数据项id集合 */
  RuleIds?: number[];
  /** 数据项名称集合 */
  RuleNames?: string[];
  /** 分类id集合 */
  CategoryIds?: number[];
  /** 分类名称集合 */
  CategoryNames?: string[];
  /** 分类详情 */
  CategoryDetails?: DspmIdentifyCategoryDetail[];
}

/** dspm资产字段信息 */
declare interface DspmAssetFieldInfo {
  /** 资产实例id */
  AssetId?: string;
  /** 数据库名称 */
  DbName?: string;
  /** schema名 */
  SchemaName?: string;
  /** 表名 */
  TableName?: string;
  /** 字段名 */
  FieldName?: string;
  /** 数据项id集合 */
  RuleIds?: number[];
  /** 数据项名称集合 */
  RuleNames?: string[];
  /** 分类id集合 */
  CategoryIds?: number[];
  /** 分类名称集合 */
  CategoryNames?: string[];
  /** 分类详情 */
  CategoryDetails?: DspmIdentifyCategoryDetail[];
  /** 字段注释 */
  FieldComment?: string;
}

/** dspm资产数据识别统计信息 */
declare interface DspmAssetIdentifyInfo {
  /** 资产实例id */
  AssetId?: string;
  /** 资产名称 */
  AssetName?: string;
  /** 资产类型枚举值：cdb： MySQLmariadb： MariaDBmongodb： MongoDB */
  AssetType?: string;
  /** 已检出数据库数量 */
  DetectedDbCount?: number;
  /** 已检出表数量 */
  DetectedTableCount?: number;
  /** 数据项id集合 */
  RuleIds?: number[];
  /** 数据项名称集合 */
  RuleNames?: string[];
  /** 分类id集合 */
  CategoryIds?: number[];
  /** 分类名称集合 */
  CategoryNames?: string[];
  /** 最高级别ID */
  LevelId?: number;
  /** 最高级别名称 */
  LevelName?: string;
  /** 级别敏感程度 */
  LevelScore?: number;
  /** 检出时间 */
  DetectedTime?: string;
  /** 分类详情 */
  CategoryDetails?: DspmIdentifyCategoryDetail[];
  /** APPID */
  AppId?: number;
  /** 账号名称 */
  NickName?: string;
  /** 账号ID */
  Uin?: string;
}

/** dspm数据识别任务状态 */
declare interface DspmAssetIdentifyTaskStatus {
  /** 任务ID */
  TaskId?: number;
  /** 任务状态枚举值：0： 未识别1： 识别中2： 识别终止3： 识别成功4： 识别失败5： 暂停 */
  Status?: number;
}

/** Dspm资产实例 */
declare interface DspmAssetInstance {
  /** 资产实例Id */
  AssetId: string;
  /** 资产类型 */
  AssetType: string;
  /** 地域 */
  Region: string;
  /** 资产所属账号app id */
  AppId?: number;
}

/** Dspm资产安全分析状态 */
declare interface DspmAssetSecurityAnalyseStatus {
  /** 资产所属账号app id */
  AppId?: number;
  /** 资产实例Id */
  AssetId?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 地域 */
  Region?: string;
  /** 是否支持敏感数据识别。0 不支持；1 支持 */
  IdentifyScanSupported?: number;
  /** 是否支持日志投递。0-不支持 1-支持 */
  LogDeliverySupported?: number;
  /** 安全分析状态（0-关闭 1-打开 2-开通中 3-关闭中） */
  SecurityAnalyseStatus?: number;
  /** 日志投递状态。0-投递关闭 1-投递打开 2-投递开通中 3-投递关闭中 */
  LogDeliveryStatus?: number;
  /** 日志审计禁止开通的原因，可选值：VersionNotSupportLogSubscription, InstanceIsUpgrading,CdbRuleAuditEnabled */
  LogDeliveryDisableReason?: string;
  /** 当前实例的总日志数 */
  TotalAuditLogs?: number;
  /** 已识别敏感数据项个数 */
  DataScanDetailRuleCount?: number;
  /** 操作错误信息 */
  OperationErrorMsg?: string;
}

/** dspm资产表信息 */
declare interface DspmAssetTableInfo {
  /** 资产实例id */
  AssetId?: string;
  /** 数据库名称 */
  DbName?: string;
  /** schema名称 */
  SchemaName?: string;
  /** 表名 */
  TableName?: string;
  /** 字段数 */
  FieldCount?: number;
  /** 敏感字段数 */
  SensitiveFieldCount?: number;
  /** 数据项id集合 */
  RuleIds?: number[];
  /** 数据项名称集合 */
  RuleNames?: string[];
  /** 分类id集合 */
  CategoryIds?: number[];
  /** 分类名称集合 */
  CategoryNames?: string[];
  /** 分类详情 */
  CategoryDetails?: DspmIdentifyCategoryDetail[];
  /** 数据表id */
  TableId?: number;
  /** 表注释 */
  TableComment?: string;
}

/** Dspm 资产按类型统计数 */
declare interface DspmAssetTypeCount {
  /** 资产类型 */
  AssetType?: string;
  /** 资产安全分析开启数 */
  OpenCount?: number;
  /** 资产安全分析开启中数 */
  OpeningCount?: number;
  /** 资产安全分析关闭中数 */
  ClosingCount?: number;
  /** 资产安全分析未开启数 */
  CloseCount?: number;
}

/** 列权限信息 */
declare interface DspmColumnPrivilege {
  /** 数据库名 */
  Database?: string;
  /** 数据库表名 */
  Table?: string;
  /** 数据库列名 */
  Column?: string;
  /** 权限信息 */
  Privileges?: string[];
}

/** 数据库权限 */
declare interface DspmDatabasePrivilege {
  /** 权限信息 */
  Privileges?: string[];
  /** 数据库名 */
  Database?: string;
}

/** 数据库账号权限信息 */
declare interface DspmDbAccountPrivilege {
  /** 使用默认权限。0-未使用；1-只读权限，即SELECT权限；2-全部权限，即global级别全部权限。 */
  UseDefaultPrivilege?: number;
  /** 全局权限数组。 */
  GlobalPrivileges?: string[];
  /** 数据库权限数组。 */
  DatabasePrivilegesList?: DspmDatabasePrivilege[];
  /** 数据库中的表权限数组。 */
  TablePrivileges?: DspmTablePrivilege[];
  /** 数据库表中的列权限数组。 */
  ColumnPrivileges?: DspmColumnPrivilege[];
}

/** 数据库资产 */
declare interface DspmDbAsset {
  /** 资产实例Id */
  AssetId?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产名 */
  Name?: string;
  /** 账号数 */
  AccountCount?: number;
  /** 公网访问地址，如果有多个，使用';'分割 */
  PublicIp?: string;
  /** 内网访问地址，如果有多个，使用';'分割 */
  PrivateIp?: string;
  /** 广域网域名地址，如果有多个，使用';'分割 */
  WanDomain?: string;
  /** 地域 */
  Region?: string;
  /** 资产所在vpc的vpcid */
  VpcId?: string;
  /** 资产所在vpc的vpc名 */
  VpcName?: string;
  /** 资产所在vpc子网的subnetid */
  SubnetId?: string;
  /** 资产所在vpc子网名 */
  SubnetName?: string;
  /** 实例状态 */
  Status?: number;
  /** 创建时间。 */
  CreateTime?: string;
  /** 管理者信息。 */
  Manager?: DspmUinUser[];
  /** 是否绑定身份。0-未绑定 1-已绑定 */
  BindIdentify?: number;
  /** 是否管理员 */
  IsManager?: number;
  /** 风险统计信息 */
  RiskCount?: DspmRiskCount;
  /** 安全建议。Resolve 立即解决Reinforcement 加固None 暂无异常 */
  SafetyAdvice?: string;
  /** 日志投递状态。0-投递关闭 1-投递打开 2-投递开通中 3-投递关闭中 */
  LogDeliveryStatus?: number;
  /** 是否支持日志投递。0-不支持 1-支持 */
  LogDeliverySupported?: number;
  /** 数据扫描信息 */
  DataScanInfo?: DspmAssetDataScanDetail;
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
  /** 安全分析状态（0-关闭 1-打开 2-开通中 3-关闭中） */
  SecurityAnalyseStatus?: number;
  /** 当前实例的总日志数 */
  TotalAuditLogs?: number;
  /** 日志审计禁止开通的原因，可选值：VersionNotSupportLogSubscription, InstanceIsUpgrading, CdbRuleAuditEnabled, AssetNotExists */
  LogDeliveryDisableReason?: string;
  /** 在线日志的起始时间戳，精确到秒 */
  OldestOnlineLogTimestamp?: number;
  /** 在线日志的最新时间戳，精确到秒 */
  NewestOnlineLogTimestamp?: number;
  /** 操作错误信息 */
  OperationErrorMsg?: string;
  /** 是否支持账号操作。0 不支持；1 支持 */
  AccountOptSupported?: number;
  /** 实例类型 */
  InstanceType?: number;
  /** 集群类型（MongoDB），与云接口 DescribeDBInstances 的 ClusterType 一致：0-副本集 1-分片；非 MongoDB 资产固定 0 */
  ClusterType?: number;
  /** 是否支持敏感数据识别。0 不支持；1 支持 */
  IdentifyScanSupported?: number;
}

/** 数据库资产Id信息 */
declare interface DspmDbAssetId {
  /** 资产实例Id */
  AssetId?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产名 */
  Name?: string;
  /** 资产记录id */
  Id?: number;
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
}

/** dspm字典信息 */
declare interface DspmDictionary {
  /** 字典id */
  DictId?: number;
  /** 字典名称 */
  DictName?: string;
}

/** Dspm频率 */
declare interface DspmFrequency {
  /** 数量。 */
  Count?: number;
  /** 单位。 */
  Unit?: string;
}

/** Dspm身份关联资产统计 */
declare interface DspmIdentifyAssetStatistic {
  /** 关联资产管理员数。 */
  ManagerCount?: number;
  /** 关联资产普通成员数。 */
  MemberCount?: number;
}

/** dspm数据识别结果分类详情 */
declare interface DspmIdentifyCategoryDetail {
  /** 分类id */
  CategoryId?: number;
  /** 分类名称 */
  CategoryName?: string;
  /** 数据项集合 */
  RuleSet?: DspmIdentifyRuleDetail[];
}

/** dspm数据识别分类列表项 */
declare interface DspmIdentifyCategoryItem {
  /** 分类ID */
  Id?: number;
  /** 分类名称 */
  Name?: string;
  /** 类型枚举值：0： 内置1： 自定义 */
  Type?: number;
  /** 更新时间 */
  UpdateTime?: string;
  /** 无 */
  ComplianceRelations?: DspmIdentifyRefComplianceInfo[];
}

/** dspm数据识别分类数据项关联详情 */
declare interface DspmIdentifyCategoryRuleRelateDetailItem {
  /** 识别模板ID */
  ComplianceId?: number;
  /** 分类ID */
  CategoryId?: number;
  /** 数据项ID */
  RuleId?: number;
  /** 数据项名称 */
  RuleName?: string;
  /** 级别ID */
  LevelId?: number;
  /** 级别名称 */
  LevelName?: string;
}

/** dspm数据识别分类和数据项关联关系 */
declare interface DspmIdentifyCategoryRuleRelateItem {
  /** 数据项ID */
  RuleId: number;
  /** 级别ID */
  LevelId: number;
}

/** dspm数据识别模板分类关联关系 */
declare interface DspmIdentifyComplianceCategoryRelation {
  /** 分类ID */
  CategoryId?: number;
  /** 分类名称 */
  CategoryName?: string;
  /** 父分类ID */
  CategoryParentId?: string;
  /** 是否叶子节点 */
  IsLeaf?: boolean;
  /** 分类类型枚举值：0： 内置1： 自定义 */
  CategoryType?: number;
  /** 分类层级单位：层 */
  CategoryGrade?: number;
  /** 无 */
  RuleRelations?: DspmIdentifyComplianceRuleRelation[];
  /** 无 */
  Children?: DspmIdentifyComplianceCategoryRelation[];
}

/** dspm分类分级模板列表信息 */
declare interface DspmIdentifyComplianceItem {
  /** 识别模板ID */
  Id?: number;
  /** 识别模板名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 启用状态枚举值：0： 不启用1： 启用 */
  Status?: number;
  /** 模板类型枚举值：0： 内置1： 自定义 */
  Type?: number;
  /** 更新时间 */
  UpdateTime?: string;
  /** 应用状态枚举值：0： 未应用1： 应用中 */
  ApplyStatus?: number;
}

/** dspm数据识别模板数据项关联关系 */
declare interface DspmIdentifyComplianceRuleRelation {
  /** 数据项ID */
  RuleId?: number;
  /** 数据项名称 */
  RuleName?: string;
  /** 级别ID */
  LevelId?: number;
  /** 级别名称 */
  LevelName?: string;
  /** 级别程度单位：分数 */
  LevelScore?: number;
  /** 结构化规则状态枚举值：0： 未配置1： 已配置 */
  StructuredStatus?: number;
  /** 非结构化规则状态枚举值：0： 未配置1： 已配置 */
  UnStructuredStatus?: number;
  /** 数据项开启状态枚举值：0： 未开启1： 已开启 */
  Status?: number;
}

/** Dspm身份统计信息 */
declare interface DspmIdentifyCount {
  /** 身份类型。0-未定义 2-长期身份 3-临时身份 */
  IdentifyType?: number;
  /** 个数。 */
  Count?: number;
}

/** Dspm身份id信息 */
declare interface DspmIdentifyIdItem {
  /** 身份id。 */
  IdentifyId?: string;
  /** 备注。 */
  Remark?: string;
  /** 身份类型。0-未定义 2-长期身份 3-临时身份 */
  IdentifyType?: number;
  /** 所属云账号uin用户。 */
  OwnerUin?: DspmUinUser | null;
  /** 创建者账号uin用户。 */
  CreatorUin?: DspmUinUser;
  /** 创建时间。 */
  CreateTime?: string;
  /** 状态。0-不活跃 1-活跃 */
  Status?: number;
  /** 所属个人用户信息 */
  Person?: DspmPersonUser | null;
}

/** Dspm身份信息 */
declare interface DspmIdentifyInfoItem {
  /** 身份id。 */
  IdentifyId?: string;
  /** 备注。 */
  Remark?: string;
  /** 身份类型。0-未定义 2-长期身份 3-临时身份 */
  IdentifyType?: number;
  /** 所属云账号uin用户。 */
  OwnerUin?: DspmUinUser | null;
  /** 创建者账号uin用户。 */
  CreatorUin?: DspmUinUser;
  /** 关联资产。 */
  AssetCount?: number;
  /** 创建时间。 */
  CreateTime?: string;
  /** 状态。0-不活跃 1-活跃 */
  Status?: number;
  /** 所属个人用户信息 */
  Person?: DspmPersonUser | null;
  /** 关联数据资产统计信息。 */
  AssetStatistic?: DspmIdentifyAssetStatistic;
  /** 风险统计信息 */
  RiskCount?: DspmRiskCount;
  /** 安全建议。 Resolve 立即解决 Reinforcement 加固 None 暂无异常 */
  SafetyAdvice?: string;
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
}

/** dspm数据识别分级组列表项 */
declare interface DspmIdentifyLevelGroupItem {
  /** 级别组id */
  Id?: number;
  /** 级别组名称 */
  Name?: string;
  /** 级别组描述 */
  Description?: string;
  /** 级别组类型枚举值：0： 内置1： 自定义 */
  Type?: number;
  /** 级别信息 */
  LevelItems?: DspmIdentifyLevelItem[];
  /** 更新时间参数格式：YYYY-MM-DD hh:mm:ss */
  UpdateTime?: string;
  /** 无 */
  ComplianceRelations?: DspmIdentifyRefComplianceInfo[];
}

/** dspm数据识别级别信息 */
declare interface DspmIdentifyLevelItem {
  /** 级别名称 */
  LevelName: string;
  /** 级别风险程度（从低到高）取值范围：[1, 10]单位：程度 */
  LevelScore: number;
  /** 级别id */
  LevelId?: number;
}

/** dspm关联识别模板信息 */
declare interface DspmIdentifyRefComplianceInfo {
  /** 识别模板ID */
  ComplianceId?: number;
  /** 识别模板名称 */
  ComplianceName?: string;
  /** 识别模板类型枚举值：0： 内置1： 自定义 */
  ComplianceType?: number;
}

/** dspm数据项详情 */
declare interface DspmIdentifyRuleDetail {
  /** 数据项id */
  RuleId?: number;
  /** 数据项名称 */
  RuleName?: string;
  /** 敏感级别id */
  LevelId?: number;
  /** 敏感级别名称 */
  LevelName?: string;
  /** 敏感程度 */
  LevelScore?: number;
}

/** dspm分类分级数据项列表项 */
declare interface DspmIdentifyRuleItem {
  /** 数据项id */
  Id?: number;
  /** 数据项名称 */
  Name?: string;
  /** 数据项描述 */
  Description?: string;
  /** 数据项是否启用枚举值：0： 否1： 是 */
  Status?: number;
  /** 数据项类型枚举值：0： 内置1： 自定义 */
  Type?: number;
  /** 更新时间 */
  UpdateTime?: string;
  /** 结构化规则配置状态 */
  StructuredStatus?: boolean;
  /** 非结构化规则配置状态 */
  UnStructuredStatus?: boolean;
  /** 无 */
  ComplianceRelations?: DspmIdentifyRefComplianceInfo[];
}

/** dspm结构化数据项测试 */
declare interface DspmIdentifyRuleStructuredTestItem {
  /** 参数名 */
  Name: string;
  /** 参数类型 */
  Value?: string;
}

/** Dspm Ip信息 */
declare interface DspmIp {
  /** ip地址 */
  Ip?: string;
  /** ip类型。public-公网 private-内网 */
  IpType?: string;
  /** ip标记信息 */
  Remark?: string;
  /** 是否已经标记信息 */
  IsRemarked?: number;
  /** ip归属实例id */
  ResourceInstanceId?: string;
  /** ip所属产品 */
  ResourceType?: string;
  /** ip所属地域 */
  Area?: DspmArea;
  /** 是否新ip地址 */
  IsNewIp?: number;
}

/** Dspm ip 统计数 */
declare interface DspmIpCount {
  /** 访问Ip个数 */
  IpCount?: number;
  /** 未打标公网Ip个数 */
  UnmarkedPublicIpCount?: number;
  /** 内网Ip个数 */
  PrivateIpCount?: number;
}

/** 访客申请记录 */
declare interface DspmPersonApplyHistoryItem {
  /** 资产id */
  AssetId?: string;
  /** 姓名 */
  PersonName?: string;
  /** 手机号 */
  Phone?: string;
  /** 访问权限生效时间。 */
  ValidateFrom?: string;
  /** 访问权限失效时间。 */
  ValidateTo?: string;
  /** 访问权限有效时间。单位毫秒。 */
  ValidatePeriod?: number;
  /** 权限信息。 */
  Privilege?: DspmDbAccountPrivilege;
  /** 是否有效。0-无效；1-有效。 */
  ValidStatus?: number;
}

/** Dspm个人身份信息 */
declare interface DspmPersonIdentifyItem {
  /** 身份id。 */
  PersonId?: string;
  /** 姓名。 */
  Name?: string;
  /** 手机号 */
  Phone?: string;
  /** 备注。 */
  Remark?: string;
  /** 创建时间。 */
  CreateTime?: string;
}

/** 个人用户信息 */
declare interface DspmPersonUser {
  /** 个人id */
  PersonId?: string;
  /** 姓名 */
  PersonName?: string;
  /** 手机号 */
  Phone?: string;
}

/** Dspm风险 */
declare interface DspmRisk {
  /** 风险id */
  RiskId?: string;
  /** 风险名称 */
  RiskName?: string;
  /** 风险英文名称 */
  RiskNameEn?: string;
  /** 策略类型 */
  StrategyType?: string;
  /** 策略类别 */
  StrategyCategory?: string;
  /** 风险等级 */
  RiskLevel?: string;
  /** 资产实例Id */
  AssetId?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产名 */
  AssetName?: string;
  /** 地域 */
  AssetRegion?: string;
  /** 资产账号 */
  Account?: string;
  /** 主机地址 */
  Host?: string;
  /** 账号类型 */
  AccountType?: number;
  /** 风险检出时间 */
  DetectTime?: string;
  /** 处理状态 0-未处理 1-已处置 2-已忽略 */
  Status?: number;
  /** 身份id */
  IdentifyId?: string;
  /** 所属云账号uin用户 */
  OwnerUin?: DspmUinUser;
  /** 所属个人用户信息 */
  Person?: DspmPersonUser;
  /** 风险数据。 */
  RiskData?: string;
  /** 是否资产管理员 */
  IsAssetManager?: number;
  /** 数据起始时间 */
  DataBeginTime?: string;
  /** 数据结束时间 */
  DataEndTime?: string;
  /** 风险类型。risk-风险；alarm-告警。 */
  RiskType?: string;
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
}

/** Dspm 风险统计数 */
declare interface DspmRiskCount {
  /** 待处理风险个数 */
  UnprocessedRisk?: number;
  /** 配置风险个数 */
  ConfigurationRisk?: number;
  /** 基线风险个数 */
  BaselineDeviation?: number;
  /** 泄露风险个数 */
  LeakDetection?: number;
  /** SQL行为异常风险个数 */
  SQLBehaviorAnomaly?: number;
  /** 权限异常风险个数 */
  PermissionAnomaly?: number;
  /** 登录行为异常风险个数 */
  LoginBehaviorAnomaly?: number;
  /** 攻击面风险个数 */
  AttackSurfaceRisk?: number;
  /** 账号敏感操作个数 */
  AccountSensitiveOperation?: number;
  /** 待处理告警个数 */
  UnprocessedAlarm?: number;
  /** 新增事件告警 */
  NumOfNewAlarmEvent?: number;
  /** 新增配置风险 */
  NumOfNewConfigRisk?: number;
}

/** Dspm 风险策略 */
declare interface DspmRiskStrategy {
  /** 策略类型 */
  StrategyType?: string;
  /** 策略名 */
  Name?: string;
  /** 策略类型 */
  StrategyCategory?: string;
  /** 是否启用。0-禁用 1-启用 */
  IsEnabled?: number;
  /** 风险等级。 */
  RiskLevel?: string;
  /** 策略规则 */
  Rule?: string;
  /** 备注 */
  Remark?: string;
  /** 策略内容 */
  Description?: string;
  /** 命中次数 */
  HitCount?: number;
  /** 风险类型。risk-风险；alarm-告警。 */
  RiskType?: string;
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
  /** 策略id */
  StrategyId?: number;
}

/** Dspm 风险分组策略 */
declare interface DspmRiskStrategyGroup {
  /** 策略类型 */
  StrategyType?: string;
  /** 策略名 */
  Name?: string;
  /** 策略类型 */
  StrategyCategory?: string;
  /** 是否启用。0-禁用 1-启用 */
  IsEnabled?: number;
  /** 命中次数 */
  HitCount?: number;
  /** 风险类型。risk-风险；alarm-告警。 */
  RiskType?: string;
  /** 策略列表 */
  StrategyList?: DspmRiskStrategy[];
}

/** Dspm风险趋势 */
declare interface DspmRiskTendency {
  /** 日期 */
  Date?: string;
  /** 未管控账号个数 */
  UncontrolledAccount?: number;
  /** 配置风险个数 */
  ConfigurationRisk?: number;
  /** 基线风险个数 */
  BaselineRisk?: number;
  /** 泄露风险个数 */
  LeakDetectionRisk?: number;
  /** SQL行为异常风险个数 */
  SQLBehaviorAnomaly?: number;
  /** 权限异常风险个数 */
  PermissionAnomaly?: number;
  /** 登录行为异常风险个数 */
  LoginBehaviorAnomaly?: number;
  /** 攻击面风险风险个数 */
  AttackSurfaceRisk?: number;
  /** 账号敏感操作个数 */
  AccountSensitiveOperation?: number;
}

/** 调度任务配置 */
declare interface DspmScheduleConfig {
  /** 调度类型: daily(按天), weekly(按周), monthly(按月) */
  ScheduleType?: string;
  /** 按天不传，按周调度配置（星期几 (1=周一, ..., 7=周日)），按月调度配置（每月第几天 (1-31)） */
  Day?: number | null;
  /** 调度时间配置 */
  Time?: string | null;
  /** 时区,默认东八区（Asia/Shanghai） */
  TimeZone?: string;
}

/** Dspm 资产安全分析状态统计数 */
declare interface DspmSecurityAnalyseStatusCount {
  /** 资产安全分析开启数 */
  OpenCount?: number;
  /** 资产安全分析开启中数 */
  OpeningCount?: number;
  /** 资产安全分析关闭中数 */
  ClosingCount?: number;
  /** 资产安全分析未开启数 */
  CloseCount?: number;
  /** 按照资产类型分组的资产安全分析状态统计数 */
  AssetTypeCountSet?: DspmAssetTypeCount[];
}

/** dspm敏感数据扫描任务配置 */
declare interface DspmSensitiveScanTaskConfig {
  /** 是否定时任务 */
  IsScheduled?: boolean;
  /** 调度周期配置 */
  ScheduleConfig?: DspmScheduleConfig;
  /** 是否立即扫描 */
  IsRunAtOnce?: boolean;
}

/** dspm统计项 */
declare interface DspmStatisticsItem {
  /** 统计项名称 */
  Name?: string;
  /** 统计值 */
  Value?: number;
  /** 描述 */
  Desc?: string;
}

/** dspm支持的产品信息 */
declare interface DspmSupportedAssetType {
  /** 产品名（用于查询） */
  Product?: string;
  /** 地域列表 */
  Regions?: RegionConfig[];
  /** 产品名-用于展示 */
  ProductDisplayName?: string;
  /** 产品组名 */
  ProductGroup?: string;
  /** 给定资产类型的资产实例总数 */
  AssetTotal?: number;
}

/** 表权限 */
declare interface DspmTablePrivilege {
  /** 数据库名 */
  Database?: string;
  /** 数据库表名 */
  Table?: string;
  /** 权限信息 */
  Privileges?: string[];
}

/** 云账号用户信息 */
declare interface DspmUinUser {
  /** 账号uin */
  Uin?: string;
  /** 姓名 */
  Name?: string;
  /** 用户类型。1-主账号 2-子用户 */
  UserType?: number;
}

/** Dspm 白名单策略 */
declare interface DspmWhitelistStrategy {
  /** 白名单策略id */
  WhitelistStrategyId?: string;
  /** 策略类型 */
  StrategyType?: string;
  /** 白名单策略名 */
  Name?: string;
  /** 策略类型 */
  StrategyCategory?: string;
  /** 策略规则 */
  Rule?: string;
  /** 备注 */
  Remark?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 资产id */
  AssetId?: string;
  /** 账号 */
  Account?: string;
  /** 主机 */
  Host?: string;
  /** 策略规则内容描述 */
  Description?: string;
  /** 白名单类型。risk-风险白名单；alarm-告警白名单。 */
  RiskType?: string;
  /** 资产所属账号app id */
  AppId?: number;
  /** 账号昵称 */
  NickName?: string;
  /** 资产所属账号uin */
  Uin?: string;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。* 最多只能有5个Filter* 同一个Filter存在多个Values，Values值数量最多不能超过5个。 */
declare interface EDRFilter {
  /** 过滤键的名称。 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 模糊搜索 */
  ExactMatch?: boolean;
}

/** EDR-策略内容 */
declare interface EDRRule {
  /** 策略ID */
  RuleID?: string;
  /** 策略类型，0-系统策略/System Rule, 1-自定义策略/Custom Rule */
  RuleType?: number;
  /** 策略名称 */
  Name?: string;
  /** 策略描述 */
  Description?: string;
  /** 内容类型 / Content Type: md5-文件MD5/File MD5, cmdline-命令行/Command Line, dns-DNS, ip_inbound-入站IP/Inbound IP, ip_outbound-出站IP/Outbound IP, custom_file-自定义文件/Custom File, process_network-进程网络/Process Network */
  ContentType?: string;
  /** 执行动作 / Action: 0-告警/Alert, 1-放行/Allow, 2-告警并拦截/Alert and Block */
  Action?: number;
  /** 告警等级 / Alert Level: 0-无/None, 1-高危/High, 2-中危/Medium, 3-低危/Low, 4-提示/Reminder */
  Level?: number;
  /** 检测模式 / Detect Mode: 0-精准/Precise, 1-均衡/Balanced, 2-深度/Deep */
  DetectMode?: number;
  /** 检测方式 / Detect Type: 0-主机检测/Host Detection, 1-网络检测/Network Detection */
  DetectType?: number;
  /** 攻击阶段 */
  AttackStage?: string;
  /** 主机生效资产范围 / Effective Scope: 0-指定主机/Specified Hosts, 1-全部主机/All Hosts, 2-专业版/Professional, 3-旗舰版/Flagship, 4-专业版+旗舰版/Professional+Flagship */
  CWPScope?: number;
  /** 主机运行时的自选主机 */
  QUUIDS?: string[];
  /** 状态 / Status: 0-开启/Enabled, 1-关闭/Disabled */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 是否支持拦截 / Support Block: 0-不支持/Not Supported, 1-支持/Supported */
  SupportBlock?: number;
  /** MD5列表,ContentType=md5 时填充 */
  Md5List?: string[];
  /** 文件名列表,ContentType=custom_file 时填充 */
  FileName?: string[];
  /** 文件目录列表,ContentType=custom_file 时填充 */
  FileDirectory?: string[];
  /** 域名列表,ContentType=dns 时填充 */
  Domains?: string[];
  /** 出站IP列表,ContentType=ip_outbound 时填充 */
  OutboundIP?: string[];
  /** 入站IP列表,ContentType=ip_inbound 时填充 */
  InboundIP?: string[];
  /** 命令行规则,ContentType=cmdline 时填充 */
  CmdLineRules?: RuleContentCmdLine;
  /** 容器生效镜像范围 / Container Image Scope: 0-指定镜像/Specified Images, 1-全部镜像/All Images */
  TCSSScope?: number;
  /** 生效镜像ID列表 / Image IDs (when TCSSScope=0) */
  ImageIDs?: string[];
  /** 镜像名正则表达式 / Image Names Regex */
  ImageNamesRegex?: string;
  /** 置信度 / Confidence: 0-低/Low, 1-中/Medium, 2-高/High */
  Confidence?: number;
  /** 排除的主机列表 / Excluded Host QUUIDS */
  ExcludeQUUIDS?: string[];
  /** 排除的镜像ID列表 / Excluded Image IDs */
  ExcludeImageIDs?: string[];
  /** 进程网络规则 / Process network rules */
  ProcessNetworkRules?: RuleContentProcessNetwork;
  /** 策略对应APPID */
  AppID?: number;
  /** 自选实例ID范围 */
  InstanceIDs?: string[];
  /** 排除实例ID */
  ExcludeInstanceIDs?: string[];
}

/** EDR告警大类对应的告警数量 */
declare interface EdrAlertCategoryCount {
  /** 告警大类 */
  AlertCategory?: string;
  /** 告警数量 */
  Count?: number;
}

/** EDR告警详情（含content JSON + 资产/情报富化字段） */
declare interface EdrAlertDetail {
  /** 主键ID */
  Id?: number;
  /** 租户ID */
  AppId?: number;
  /** 告警唯一标识 */
  AlertId?: string;
  /** 告警大类（英文枚举：VIRUS_TROJAN/ABNORMAL_LOGIN/HOST_BEHAVIOR/NETWORK_BEHAVIOR/LINK_ENGINE） */
  AlertCategory?: string;
  /** 告警子类型（英文枚举：MALWARE_FILE/MALWARE_PROCESS/RISK_LOGIN/BRUTE_FORCE/DNS/BASH/PRIV_ESCALATION/REVERSE_SHELL/NET_ATTACK/VUL_DEFENCE/MEMORY_SHELL_INJECT/MEMORY_SHELL_SCAN/MULTI_BEHAVIOR_ATTACK） */
  AlertSubType?: string;
  /** 关联规则ID */
  RuleId?: string;
  /** 规则类型: 0-系统规则 1-用户自定义 */
  RuleType?: number;
  /** 告警等级（英文枚举：CRITICAL/HIGH/MEDIUM/LOW/INFO） */
  Level?: string;
  /** 处理状态（英文枚举：PENDING/PROCESSED/WHITELISTED/ISOLATED/CLEANED/IGNORED/ISOLATING/RESTORING/BLOCKED/DELETED） */
  Status?: string;
  /** ATT&amp;CK攻击阶段 */
  AttackStage?: string;
  /** 检测模式（英文枚举：PRECISE/BALANCED/DEEP） */
  DetectMode?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 主机UUID */
  Quuid?: string;
  /** 聚合事件数 */
  EventCount?: number;
  /** 是否付费版 */
  IsProVersion?: number;
  /** 告警来源（英文枚举：HOST/CONTAINER/K8S/CSIP） */
  AlertSource?: string;
  /** 容器镜像ID（保留字段，恒为空串） */
  ImageId?: string;
  /** 容器ID（保留字段，恒为空串） */
  ContainerId?: string;
  /** 集群ID（保留字段，恒为空串） */
  ClusterId?: string;
  /** 首次发现时间 */
  FirstDetectTime?: string;
  /** 最近发现时间 */
  LatestDetectTime?: string;
  /** 规则名称（规则富化） */
  RuleName?: string;
  /** 内容类型: md5/cmdline/dns/ip_inbound/ip_outbound/custom_file/process_network */
  ContentType?: string;
  /** 实例名（资产富化） */
  InstanceName?: string;
  /** 公网IP（资产富化） */
  PublicIp?: string;
  /** 内网IP（资产富化） */
  PrivateIp?: string;
  /** 告警详情JSON字符串（前端通过JSON.parse解析，空值为"{}"） */
  Content?: string;
  /** 告警名称（子类型中英文名） */
  AlertName?: string;
  /** 安全中心标签 */
  CSIPTags?: CSIPTag[];
  /** 危害描述（统一字段，合并原各子类型独立字段） */
  HarmDesc?: string;
  /** 修复建议（统一字段） */
  SuggestScheme?: string;
  /** 数据来源: vuldb/vdc/intel/default */
  HarmDescSource?: string;
  /** 统一威胁情报标签（按子类型路由不同情报源） */
  ThreatTags?: string[];
  /** Base64解码后的命令（高危命令子类型独有） */
  BashCmdDecoded?: string;
  /** 漏洞名称（网络攻击子类型独有） */
  NetVulName?: string;
  /** CVE编号（网络攻击子类型独有） */
  NetCVEId?: string;
  /** 异常行为（网络攻击子类型独有） */
  NetAbnormalAction?: string;
  /** IP情报信息（为空时不返回） */
  IPIntel?: IPIntelInfo;
  /** 多行为攻击规则类型分类: sequence/threshold/command */
  MultiBehaviorDetectionMode?: string;
  /** 告警来源描述（按子类型派生，描述哪个引擎/规则检出） */
  SourceDesc?: string;
  /** 处理时间参数格式：2026-05-26 19:45:48 */
  ModifyTime?: string;
  /** 情报富化结果来源（标识本次详情是否成功命中外部情报）；取值 "VDC" / "IPAnalysis" / "BreakingTI" / 空串 */
  IntelSource?: string;
  /** 综合研判，中英文已翻译，中：恶意/安全/未知；英：Malicious/Safe/Unknown */
  Verdict?: string;
  /** 研判依据 */
  VerdictBasis?: string;
  /** 病毒名称 */
  VirusName?: string;
  /** 病毒家族 */
  VirusFamily?: string;
  /** NetResponsePayload 响应数据包（base64 编码后的字符串） */
  NetResponsePayload?: string;
  /** 服务进程信息（base64 编码后的 JSON 字符串） */
  NetSvcPs?: string;
}

/** EDR告警列表信息 */
declare interface EdrAlertItem {
  /** 告警表id */
  Id?: number;
  /** APPID */
  AppId?: number;
  /** 告警ID */
  AlertId?: string;
  /** 告警大类 */
  AlertCategory?: string;
  /** 告警子类 */
  AlertSubType?: string;
  /** 策略ID */
  RuleId?: string;
  /** 策略类型 */
  RuleType?: number;
  /** 告警等级 */
  Level?: string;
  /** 告警状态 */
  Status?: string;
  /** 攻击阶段 */
  AttackStage?: string;
  /** 检测模式 */
  DetectMode?: string;
  /** 实例ID */
  InstanceId?: string;
  /** QUUID */
  Quuid?: string;
  /** 是否付费 */
  IsProVersion?: number;
  /** 告警来源 */
  AlertSource?: string;
  /** 镜像ID */
  ImageId?: string;
  /** 容器id */
  ContainerId?: string;
  /** 集群ID */
  ClusterId?: string;
  /** 告警数量 */
  EventCount?: number;
  /** 最初发现时间 */
  FirstDetectTime?: string;
  /** 最近发现时间 */
  LatestDetectTime?: string;
  /** 规则名 */
  RuleName?: string;
  /** 策略类型 */
  ContentType?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 公共IP */
  PublicIp?: string;
  /** 内网IP */
  PrivateIp?: string;
  /** 该机器是否开启应用防护 */
  RaspOpen?: boolean;
}

/** EDR告警定位信息（ID + AlertID + AppID 三元组） */
declare interface EdrAlertTarget {
  /** 告警主键ID */
  Id: number;
  /** 告警所属账号ID（跨账号，前端必传） */
  AppId: number;
  /** 告警唯一标识 */
  AlertId?: string;
  /** 主机UUID（可选，由列表带回透传） */
  Quuid?: string;
  /** 实例ID（可选，由列表带回透传，用于安全中心标签富化） */
  InstanceId?: string;
  /** 告警子类型 */
  AlertSubType?: string;
}

/** EDR告警定位信息，用于永久忽略 */
declare interface EdrAlertTargetForIgnore {
  /** 告警主键ID */
  Id: number;
  /** 告警所属账号ID（跨账号，前端必传） */
  AppId: number;
  /** 告警唯一标识 */
  AlertId?: string;
  /** 主机UUID（可选） */
  Quuid?: string;
  /** 实例ID（可选，用于白名单写入） */
  InstanceId?: string;
}

/** 统计条目 */
declare interface Element {
  /** 统计类型 */
  Key?: string;
  /** 统计对象 */
  Value?: string;
}

/** 导出任务列表 */
declare interface ExportTask {
  /** 任务Id */
  Id?: number;
  /** 用户AppId */
  AppId?: number;
  /** 进度百分比 */
  Percentage?: number;
  /** 任务状态：0.未开始 1.执行中 2.执行成功 3.执行超时 4.执行失败 */
  TaskStatus?: number;
  /** 任务创建时间 */
  CreateTime?: number;
  /** 任务更新时间 */
  ModifyTime?: number;
  /** 文件名 */
  FileName?: string;
  /** 文件大小 字节 */
  FileSize?: number;
  /** 剩余时间(单位：秒) */
  RemainingTime?: number;
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
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
  /** 资产类型3D图标 */
  AssetTypeIconSolidURL?: string;
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

/** 过滤条件。同一 Name 下多个 Values 为或关系；不同 Name 之间为且关系 */
declare interface Filters {
  /** 过滤条件名称 */
  Name?: string;
  /** 过滤条件值列表 */
  Values?: string[];
  /** 是否精确匹配：1 精确匹配；默认模糊匹配 */
  ExactMatch?: string;
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

/** 规则集合 */
declare interface HitRules {
  /** 规则Id */
  RuleId: number;
  /** 规则 */
  RuleName: string;
}

/** IP威胁情报信息（通过TIX IPAnalysis接口获取） */
declare interface IPIntelInfo {
  /** 情报标签（如常规木马、漏洞软件、窃密木马） */
  Tags?: string[];
  /** 研判依据 */
  Basis?: string;
  /** 所属运营商 */
  ISP?: string;
  /** 地理位置 */
  Location?: string;
  /** 家族团伙 */
  Characteristic?: string;
  /** IP画像 */
  Purpose?: string;
  /** 反查域名列表 */
  Referer?: DomainInfo[];
}

/** IaC检测文件 */
declare interface IaCFile {
  /** ID */
  Id?: number;
  /** appid */
  AppId?: number;
  /** 文件ID */
  FileId?: string;
  /** 文件名称 */
  FileName?: string;
  /** CI/CD名称 */
  CICDName?: string;
  /** 文件路径 */
  FilePath?: string;
  /** 文件类型(1:Dockerfile,2:Terraform,3:KubernetesYaml) */
  FileType?: number;
  /** 风险总计数量 */
  RiskTotalCnt?: number;
  /** 风险等级数量(0:低危,1:中危,2:高危,3:严重) */
  RiskLevelCnt?: KeyValueInt[];
  /** 扫描时间 */
  ScanTime?: string;
  /** 检测状态(0:待扫描,1:检测中,2:已完成,3:检测异常) */
  Status?: number;
  /** 扫描失败类型(0:无失败, 1:检测超时, 2:文件格式解析失败, 3:检测失败) */
  FailType?: number;
}

/** IaC检测文件风险 */
declare interface IaCFileRisk {
  /** 风险等级(0:低危,1:中危,2:高危,3:严重) */
  Level?: number;
  /** 风险所在行数 */
  Line?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 问题描述 */
  Description?: string;
  /** 修复建议 */
  Suggestion?: string;
}

/** 计费项信息 */
declare interface InquireInfo {
  /** 计费项名称 */
  Name?: string;
  /** 购买量 */
  Value?: number;
}

/** instance_id和对应的appid账号信息 */
declare interface InstanceIDWithAppIdItem {
  /** APPID */
  AppId: number;
  /** 实例ID */
  InstanceID: string;
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

/** 凭证数据结构，用于列表查询和详情查询的响应 */
declare interface KeySandboxCredential {
  /** 凭证ID */
  CredentialId?: string;
  /** 凭证名称 */
  CredentialName?: string;
  /** 凭证类型枚举值：access：常规密钥（Key/Value键值对）sts：STS临时密钥凭据 */
  CredentialType?: string;
  /** 生效机器范围 */
  CredentialEffectScope?: CredentialEffectScope;
  /** 创建时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  CreateTime?: string;
  /** 更新时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  UpdateTime?: string;
}

/** KeyValue对 */
declare interface KeyValue {
  /** 字段 */
  Key?: string;
  /** 值 */
  Value?: string;
}

/** 键值对（整数） */
declare interface KeyValueInt {
  /** 键 */
  Key?: number;
  /** 值 */
  Value?: number;
}

/** 位置信息 */
declare interface Location {
  /** 国家 */
  Country?: string;
  /** 地区 */
  Region?: string;
  /** 城市 */
  City?: string;
}

/** 日志过滤器 */
declare interface LogCLSFilter {
  /** 键 */
  Key?: string;
  /** 值 */
  Values?: string[];
}

/** 日志列信息 */
declare interface LogColumn {
  /** 名称 */
  Name?: string;
  /** 类型 */
  Type?: string;
}

/** 日志检索上下文信息 */
declare interface LogContextInfo {
  /** 主题id */
  TopicId?: string;
  /** 上下文 */
  Context?: string;
}

/** 日志动态索引信息 */
declare interface LogDynamicIndex {
  /** 状态 */
  Status?: boolean;
}

/** 日志全文索引信息 */
declare interface LogFullTextInfo {
  /** 大小写敏感 */
  CaseSensitive?: boolean;
  /** token */
  Tokenizer?: string;
  /** 包含中文 */
  ContainZH?: boolean;
}

/** 日志高亮信息 */
declare interface LogHighLightItem {
  /** 键 */
  Key?: string;
  /** 值 */
  Values?: string[];
}

/** 日志索引规则信息 */
declare interface LogIndexRuleInfo {
  /** 全文索引 */
  FullText?: LogFullTextInfo;
  /** 键值索引 */
  KeyValue?: LogRuleKeyValueInfo;
  /** 标签 */
  Tag?: LogRuleKeyValueInfo;
  /** 动态索引 */
  DynamicIndex?: LogDynamicIndex;
}

/** 日志条目 */
declare interface LogItem {
  /** 键 */
  Key?: string;
  /** 值 */
  Value?: string;
}

/** 日志条目列表 */
declare interface LogItems {
  /** 数值 */
  Data?: LogItem[];
}

/** 日志键值索引详情 */
declare interface LogKeyValueInfo {
  /** 键 */
  Key?: string;
  /** 值 */
  Value?: LogValueInfo;
}

/** 日志键值索引规则信息 */
declare interface LogRuleKeyValueInfo {
  /** 大小写敏感 */
  CaseSensitive?: boolean;
  /** 键值索引信息 */
  KeyValues?: LogKeyValueInfo[];
}

/** 日志检索错误信息 */
declare interface LogSearchErrors {
  /** 主题 */
  TopicId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 错误信息 */
  ErrorCodeStr?: string;
}

/** 日志检索信息 */
declare interface LogSearchInfos {
  /** 主题 */
  TopicId?: string;
  /** 时间间隔 */
  Period?: number;
  /** 上下文 */
  Context?: string;
}

/** 日志检索结果 */
declare interface LogSearchResult {
  /** 时间 */
  Time?: number;
  /** 主题 */
  TopicId?: string;
  /** 主题名 */
  TopicName?: string;
  /** 源 */
  Source?: string;
  /** 文件名 */
  FileName?: string;
  /** pkgid */
  PkgId?: string;
  /** pkglogid */
  PkgLogId?: string;
  /** json数据 */
  LogJson?: string;
  /** 主机名 */
  HostName?: string;
  /** log信息 */
  RawLog?: string;
  /** 索引状态 */
  IndexStatus?: string;
  /** 高亮信息 */
  HighLights?: LogHighLightItem[];
}

/** 日志检索主题信息 */
declare interface LogSearchTopics {
  /** 错误信息 */
  Errors?: LogSearchErrors[];
  /** 正常信息 */
  Infos?: LogSearchInfos[];
}

/** 日志主题索性信息 */
declare interface LogTopicIndexInfo {
  /** 主题 */
  TopicId?: string;
  /** 状态 */
  Status?: boolean;
  /** 规则 */
  Rule?: LogIndexRuleInfo;
  /** 修改时间 */
  ModifyTime?: string;
  /** 是否包含 */
  IncludeInternalFields?: boolean;
  /** 元数据标签 */
  MetadataFlag?: number;
}

/** 日志索引值描述信息 */
declare interface LogValueInfo {
  /** 类型 */
  Type?: string;
  /** 标签 */
  Tokenizer?: string;
  /** sql标签 */
  SqlFlag?: boolean;
  /** 包含中文 */
  ContainZH?: boolean;
  /** 别名 */
  Alias?: string;
}

/** 主机列表 */
declare interface Machine {
  /** Agent状态，取值：ONLINE-在线，OFFLINE-离线，UNINSTALL-未安装 */
  AgentStatus?: string;
  /** Agent版本 */
  AgentVersion?: string;
  /** 账号AppId */
  AppId?: number;
  /** 云服务商 */
  CloudFromEnum?: string;
  /** 云标签列表 */
  CloudTags?: Tag[];
  /** CSIP防护类型，取值：BASIC-基础版，PRO-专业版，ULTIMATE-旗舰版 */
  CsipProtectType?: string;
  /** 暴露状态 */
  ExposedStatus?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 实例状态，取值：RUNNING-运行中，STOPPED-已关机，EXPIRED-待回收 */
  InstanceStatus?: string;
  /** 网卡IP列表 */
  IpList?: string[];
  /** 是否为新增主机（15天内新增） */
  IsNew?: boolean;
  /** 内核版本 */
  KernelVersion?: string;
  /** 最近一次离线时间（Unix时间戳） */
  LatestOfflineTime?: number;
  /** 内网IP */
  MachineIp?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 操作系统 */
  MachineOs?: string;
  /** 外网IP */
  MachineWanIp?: string;
  /** 付费模式，取值：PREPAID-预付费，POSTPAID-后付费 */
  PayMode?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 防护类型，取值：NONE-无防护，BASIC-基础版，PRO-专业版，ULTIMATE-旗舰版，PRO_LH-轻量版 */
  ProtectType?: string;
  /** 主机唯一标识 */
  Quuid?: string;
  /** 地域信息 */
  RegionInfo?: RegionInfo;
  /** 备注 */
  Remark?: string;
  /** 资产标签列表 */
  TagItems?: MiniTagItem[];
  /** 标签修改信息 */
  TagModifyInfo?: AssetTagModifyAssetItem;
  /** TAT状态，取值：ONLINE-在线，OFFLINE-离线 */
  TatStatus?: string;
  /** Agent唯一标识 */
  Uuid?: string;
  /** VPC ID */
  VpcId?: string;
  /** 主机节点类型枚举值：NONE： 主机节点CLUSTER： 集群节点CONTAINER： 容器节点 */
  NodeType?: string;
  /** 容器防护状态枚举值：Enabled： 开启防护Disabled： 关闭防护Unknown： 未知 */
  ContainerDefendStatus?: string;
  /** 容器数量 */
  ContainerCount?: number;
  /** 核数 */
  CpuCoreCount?: number;
}

/** 主机列表 */
declare interface MachineDetail {
  /** Agent状态 */
  AgentStatus?: string;
  /** Agent版本 */
  AgentVersion?: string;
  /** 账号AppId */
  AppId?: number;
  /** 资产类型名称 */
  AssetTypeName?: string;
  /** 系统启动时间（Unix时间戳） */
  BootTime?: number;
  /** 购买时间（Unix时间戳） */
  BuyTime?: number;
  /** 云服务商 */
  CloudFromEnum?: string;
  /** 云标签列表 */
  CloudTags?: Tags[];
  /** 内核版本 */
  CoreVersion?: string;
  /** CPU信息 */
  Cpu?: string;
  /** CPU负载 */
  CpuLoad?: string;
  /** CPU核数 */
  CpuSize?: number;
  /** 设备型号 */
  DeviceVersion?: string;
  /** 磁盘分区信息 */
  Disks?: DiskPartitionInfo[];
  /** 到期时间（Unix时间戳） */
  EndTime?: number;
  /** 暴露状态 */
  ExposedStatus?: string;
  /** 安装时间（Unix时间戳） */
  InstallTime?: number;
  /** 实例ID */
  InstanceID?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 内核版本 */
  KernelVersion?: string;
  /** 最近一次在线时间（Unix时间戳） */
  LatestLiveTime?: number;
  /** 最近一次离线时间（Unix时间戳） */
  LatestOfflineTime?: number;
  /** 内网IP */
  MachineIp?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 操作系统（云采集） */
  MachineOs?: string;
  /** 主机状态 */
  MachineStatus?: string;
  /** 外网IP */
  MachineWanIp?: string;
  /** 内存大小(MB) */
  MemSize?: number;
  /** 内存使用率 */
  MemoryLoad?: string;
  /** 网卡信息 */
  NetCards?: NetworkCardInfo[];
  /** 操作系统（端采集） */
  OsByAgent?: string;
  /** 付费模式 */
  PayMode?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 已防护天数 */
  ProtectDays?: number;
  /** 防护类型 */
  ProtectType?: string;
  /** 主机唯一标识 */
  Quuid?: string;
  /** 地域信息 */
  RegionInfo?: RegionInfo;
  /** 备注 */
  Remark?: string;
  /** 序列号 */
  SerialNumber?: string;
  /** 资产标签列表 */
  TagItems?: MiniTagItem[];
  /** 标签修改信息 */
  TagModifyInfo?: AssetTagModifyAssetItem;
  /** Agent唯一标识 */
  Uuid?: string;
  /** VPC CIDR */
  VpcCidrBlock?: string;
  /** VPC ID */
  VpcId?: string;
  /** VPC名称 */
  VpcName?: string;
  /** 主机节点类型枚举值：NONE： 主机节点CLUSTER： 集群节点CONTAINER： 容器节点 */
  NodeType?: string;
  /** 容器防护状态枚举值：Enabled： 开启防护Disabled： 关闭防护Unknown： 未知 */
  ContainerDefendStatus?: string;
  /** 集群签证md5 */
  ClusterCaMd5?: string;
  /** 容器环境信息 */
  ContainerEnvInfo?: ContainerEnvInfo;
  /** 集群id */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
}

/** 简要的资产标签元素，CSIP 内部使用。 */
declare interface MiniTagItem {
  /** 标签展示颜色。 */
  Color?: string;
  /** 标签描述。 */
  Description?: string;
  /** 标签 ID。 */
  ID?: number;
  /** 标签键（中文）。 */
  TagKey?: string;
  /** 标签值（中文）。 */
  TagValue?: string;
  /** 标签键（英文）。 */
  TagKeyEn?: string;
  /** 标签值（英文）。 */
  TagValueEn?: string;
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

/** 网卡信息 */
declare interface NetworkCardInfo {
  /** DNS服务器 */
  DnsServer?: string;
  /** 网关 */
  Gateway?: string;
  /** IP地址 */
  Ip?: string;
  /** IPv6地址 */
  Ipv6?: string;
  /** MAC地址 */
  Mac?: string;
  /** 网卡名称 */
  Name?: string;
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

/** 通知资产范围配置项 */
declare interface NotifyAssetConfigItem {
  /** 模块名 */
  Module: string;
  /** 子模块 */
  SubModule: string;
  /** 资产范围枚举值：0： 无含义1： 全部2： 自选3： 按标签 */
  AssetRange: number;
  /** 选中的实例ID */
  InstanceIds?: string[];
  /** 剔除的实例ID */
  ExcludedInstanceIds?: string[];
  /** 标签ID */
  TagIds?: number[];
  /** 云标签 */
  CloudTags?: string[];
  /** 总数 */
  TotalCount?: number;
}

/** 通知设置 */
declare interface NotifySetting {
  /** 通知模块枚举值：AkSk： 云API风险治理Alert： 告警中心Agent： 客户端 */
  Module: string;
  /** 通知设置模式枚举值：0： 标准模式1： 高级模式 */
  Mode: number;
  /** 通知状态枚举值：0： 通知关闭1： 通知开启 */
  Status: number;
  /** 通知开始时间参数格式：hh:mm:ss */
  BeginTime: string;
  /** 通知结束时间参数格式：hh:mm:ss */
  EndTime: string;
  /** 资产范围枚举值：1： 全部主机2： 自选主机3： 按标签选择 */
  AssetRange: number;
  /** 通知选项枚举值：CRITICAL： 告警等级：严重HIGH： 告警等级：高危MEDIUM： 告警等级：中危LOW： 告警等级：低危INFO： 告警等级：提醒AGENT_UNINSTALL： 客户端卸载AGENT_OFFLINE： 客户端离线 */
  Option?: string[];
  /** 通知模块（二级模块） */
  SubModule?: string;
  /** 处置状态等 */
  Item?: string[];
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

/** 地域配置 */
declare interface RegionConfig {
  /** 地域 */
  Region?: string | null;
  /** 地域中文 */
  RegionName?: string | null;
  /** 是否境外 */
  Foreign?: number | null;
  /** 地域码 */
  Code?: number | null;
  /** 是否自驾云 */
  IsAutoDriveCloud?: number | null;
  /** 是否支持nat */
  IsSupportNat?: number | null;
  /** 地区信息 */
  RegionArea?: string | null;
  /** 地域英文 */
  RegionNameEN?: string;
}

/** 地域信息 */
declare interface RegionInfo {
  /** 地域 */
  Region?: string;
  /** 地域编码 */
  RegionCode?: string;
  /** 地域ID */
  RegionId?: number;
  /** 地域名称 */
  RegionName?: string;
  /** 地域英文名称 */
  RegionNameEn?: string;
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
  /** 用户AppID */
  AppID?: number;
  /** 资产类型 */
  AssetType?: string;
  /** 风险忽略原因 */
  Reason?: string;
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

/** EDR命令行规则 */
declare interface RuleContentCmdLine {
  /** 进程命令行信息 */
  Process?: RuleContentProcessInfo;
  /** 父进程命令行信息 */
  ParentProcess?: RuleContentProcessInfo;
  /** 祖先进程命令行信息 */
  AncestorProcess?: RuleContentProcessInfo;
}

/** EDR命令行规则单规则 */
declare interface RuleContentProcessInfo {
  /** 进程文件路径 */
  Exe: string;
  /** 进程命令行 */
  CmdLine: string;
}

/** 定义进程网络规则内容结构，用于反弹Shell白名单场景，支持进程匹配 + IP/端口过滤 */
declare interface RuleContentProcessNetwork {
  /** 当前进程 */
  Process: RuleContentProcessInfo;
  /** 目标IP（必填）: 支持单个IP/IP范围/CIDR, 支持IPv4和IPv6 */
  DstIP: string;
  /** 父进程 */
  ParentProcess?: RuleContentProcessInfo;
  /** 目标端口列表（可选）: 支持1-65535, 为空表示不限端口 */
  DstPorts?: number[];
}

/** STS临时密钥凭据（出参专用），用于查询详情接口的响应。SecretID和SecretKey字段返回打码后的值，System返回原文 */
declare interface STSCredentialOutput {
  /** 凭据提供商标识（原文），如tencentCam、aws、aliyun等 */
  System?: string;
  /** SecretID（打码后）补充说明：保留前3后4位，中间用***替代；长度不足7位时全部替换为*** */
  SecretID?: string;
  /** SecretKey（打码后）补充说明：保留前3后4位，中间用***替代；长度不足7位时全部替换为*** */
  SecretKey?: string;
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

/** 敏感分类分级描述 */
declare interface SensitiveDetail {
  /** 字段分类 */
  CategoryRule?: string;
  /** 字段分级 */
  LevelRisk?: string;
  /** 1:敏感信息字段0:非敏感字段 */
  IsSensitive?: number;
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

/** Skill 能力标签 */
declare interface SkillCapabilityTag {
  /** 能力标签标识，适合程序判定、过滤或聚合使用 */
  ID?: string;
  /** 能力标签展示名称 */
  Name?: string;
}

/** 融合规则目录项 */
declare interface SkillRuleCatalogItem {
  /** 融合规则 ID（9xxxx） */
  RuleID?: string;
  /** 风险类别名称 */
  RuleName?: string;
}

/** 子引擎扫描结果 */
declare interface SkillScanEngineResult {
  /** 子引擎类型枚举值：AI：AI 引擎STATIC：静态分析引擎 */
  ScanType?: string;
  /** 该引擎命中的规则列表 */
  RuleList?: SkillScanRuleHit[];
}

/** Skill 安全检测结果详情 */
declare interface SkillScanItem {
  /** Skill 名称 */
  SkillName?: string;
  /** Skill 描述，帮助理解 Skill 的主要用途 */
  SkillDescription?: string;
  /** ZIP 文件的 SHA256 Hash参数格式：sha256:<64位hex> */
  ContentHash?: string;
  /** 原始上传 ZIP 文件解压后的实际文件数，也是计费的范围，扫描成功后1个文件计为1次额度 */
  UploadFileCount?: number;
  /** 综合风险等级枚举值：malicious：恶意suspicious：可疑benign：可信 */
  RiskLevel?: string;
  /** 风险主标签融合规则 ID（9xxxx），由服务端从命中的融合风险标签中生成；benign 且无规则命中时为空。展示名称可通过 RuleCatalog 获取 */
  PrimaryRuleID?: string;
  /** 综合处置建议，用于指导调用方优先执行下线、隔离、修复、复检等动作。历史结果中可能为空。传 Language=en-US 时返回英文文案 */
  Mitigation?: string;
  /** 风险综合描述，对本次检测发现的风险进行概括性说明。传 Language=en-US 时返回英文文案 */
  RiskDescription?: string;
  /** 安全评分取值范围：[0, 100]补充说明：分数越高越安全 */
  SecurityScore?: number;
  /** 本次扫描使用的引擎版本号 */
  EngineVersion?: number;
  /** Skill 能力标签列表，描述 Skill 具备的能力特征或适用场景。不等同于风险标签，也不参与风险等级判定。传 Language=en-US 时 Name 切换为英文，ID 保持不变 */
  CapabilityTags?: SkillCapabilityTag[];
  /** 融合规则目录全集，包含所有融合规则类别（9xxxx），调用方可据此展示分类标签，无需本地维护映射表。传 Language=en-US 时返回英文名称 */
  RuleCatalog?: SkillRuleCatalogItem[];
  /** 扫描结果详情，按子引擎分组。每个元素包含 ScanType（引擎类型）和 RuleList（命中规则列表）。规则中的 RuleID 使用融合编码（9xxxx），可与 RuleCatalog 交叉引用。传 Language=en-US 时 Description 返回英文文本 */
  ScanItems?: SkillScanEngineResult[];
  /** 综合安全审计报告地址（签名 URL）。有效期由请求参数 ReportURLExpireHours 控制 */
  ReportURL?: string;
  /** 扫描完成时间。仅 Status=SUCCESS 时有值参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  ScannedAt?: string;
  /** 任务创建时间。仅 Status=SCANNING 时有值参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  CreatedAt?: string;
  /** 失败时间。仅 Status=FAILED 时有值参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  FailedAt?: string;
  /** 失败原因描述。仅 Status=FAILED 时有值 */
  Message?: string;
}

/** 命中规则项 */
declare interface SkillScanRuleHit {
  /** 融合规则编号（9xxxx），可与 RuleCatalog 交叉引用 */
  RuleID?: string;
  /** 当前命中规则的具体发现描述，包含文件位置、行为特征、风险点等信息 */
  Description?: string;
}

/** SKILL安装状态信息 */
declare interface SkillState {
  /** SKILL安装状态枚举值：0：未安装1：安装中2：已安装3：安装失败4：卸载中5：卸载失败 */
  SkillInstallStatus?: number;
  /** SKILL安装/卸载操作时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  SkillInstallTime?: string;
  /** SKILL安装/卸载结果描述信息 */
  SkillInstallResult?: string;
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
  /** 创建时间（Unix时间戳） */
  CreateTime?: number;
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

/** 数据库字段描述 */
declare interface TableField {
  /** 数据库名 */
  DB?: string;
  /** 数据库视图名 */
  Schema?: string;
  /** 数据库表名 */
  Table?: string;
  /** 数据库字段名 */
  Field?: string;
  /** 字段敏感信息 */
  Sensitive?: SensitiveDetail;
}

/** 云上原生标签键值对。 */
declare interface Tag {
  /** 标签键。 */
  Name: string;
  /** 标签值。 */
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

/** AI Agent 流量沙箱插件状态 */
declare interface TrafficPluginState {
  /** 插件安装状态（上层聚合）枚举值：NONE：未安装INSTALLING：安装中INSTALLED：已安装INSTALL_FAIL：安装失败 */
  InstallStatus?: string;
  /** 插件安装细分状态。取值与 InstallStatus 对应：未安装（InstallStatus=UNINSTALL）时为空字符串；安装成功（InstallStatus=INSTALLED）时为 SUCCESS；安装失败（InstallStatus=INSTALL_FAIL）时为具体失败原因枚举值：NOT_SUPPORT：环境不支持CONTAINER_NOT_FOUND：容器不存在REQUIRE_RESTART：需要重启CA_FAILED：CA 失败EBPF_FAILED：eBPF 失败IPTABLE_FAILED：iptables 失败REDIRECT_FAILED：流量重定向失败 */
  Status?: string;
  /** 状态文案（由 Status 根据请求语言派生的国际化描述） */
  Message?: string;
  /** 插件最近活跃时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  ActivityTime?: string;
}

/** 流量沙箱规则状态 */
declare interface TrafficRuleState {
  /** 沙箱插件模块名 */
  Module?: string;
  /** 沙箱规则状态枚举值：ON： 开启OFF： 关闭 */
  Status?: string;
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

/** 账号dspm信息 */
declare interface UserDspmInfo {
  /** APPID */
  AppID?: number;
  /** UIN */
  Uin?: string;
  /** 账号昵称 */
  NickName?: string;
  /** 账号下数据库资产数量 */
  AssetNum?: number;
  /** 账号下开启安全分析数据库资产数量 */
  UsedAssetNum?: number;
  /** 是否被共享，1-被共享，2-未被共享 */
  IsShared?: number;
  /** 是否单独购买，1-单独购买，2-未单独购买 */
  IsSelfBuy?: number;
  /** 配额来源账号 */
  ShareFromAppID?: number;
  /** 云类型（0：腾讯云 1:亚马逊云 2:微软云 3:谷歌云 4:阿里云 5:华为云） */
  CloudType?: number;
  /** 账号是否隔离中 */
  IsIsolating?: boolean;
  /** 是否正在数据清理 */
  IsDataCleaning?: boolean;
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

declare interface AddDspmAssetManagerRequest {
  /** 管理员uin */
  IdentifyIds: string[];
  /** 资产id */
  AssetId: string[];
}

declare interface AddDspmAssetManagerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface CreateCosAssetSyncTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 1 同步所有 2 仅同步资产数 */
  SyncType?: number;
}

declare interface CreateCosAssetSyncTaskResponse {
  /** 同步任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCosObjectScanTaskRequest {
  /** 1: 敏感数据识别 2:恶意文件扫描 3:批量扫描敏感数据 */
  TaskType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 存储桶列表 */
  BucketSet?: string[];
  /** 任务参数 */
  TaskArgs?: string;
  /** 是否全部扫描 */
  IsScanAll?: boolean;
  /** 扫描时需要剔除的存储桶 */
  DeleteBucketSet?: string[];
}

declare interface CreateCosObjectScanTaskResponse {
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCosPolicyRequest {
  /** 策略信息 */
  CosPolicyInfo: CosPolicyInfo;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateCosPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCosRiskScanTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 需要扫描的桶列表 */
  BucketNameSet?: CosBucketInfo[];
  /** 是否扫描全部的桶 */
  IsScanAllBucket?: boolean;
}

declare interface CreateCosRiskScanTaskResponse {
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

declare interface CreateDspmAccessExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 视图类型 */
  View?: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface CreateDspmAccessExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmApplyOrderRequest {
  /** 资产id */
  AssetId: string;
  /** 申请类型。0-子账号授权 1-访客授权。 */
  ApplyType: number;
  /** 权限信息。 */
  Privilege?: DspmDbAccountPrivilege;
  /** 主机地址。当前仅支持'%'。默认'%'。 */
  Host?: string;
  /** 从审批完成后开始计算的访问权限失效时间，临时账号有效。单位毫秒。 */
  ValidatePeriod?: number;
  /** 审批人列表。为空使用资产全部管理员。 */
  ApproverUin?: string[];
  /** 申请原因 */
  Reason?: string;
  /** 管理类型。0-普通成员 1-管理员 */
  ManagerType?: number;
  /** 被授权者。子账号授权时，传目标uin，为空时默认使用当前uin；访客授权时传访客身份id。 */
  Subject?: string;
}

declare interface CreateDspmApplyOrderResponse {
  /** 申请单id */
  OrderId?: string;
  /** 自动审批 */
  AutoApproval?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmApproveHistoryExportJobRequest {
  /** 过滤器 */
  Filter?: Filter;
}

declare interface CreateDspmApproveHistoryExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmAssetAccessTopologyExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 视图类型。ip或instance */
  View?: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface CreateDspmAssetAccessTopologyExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmAssetIdentifyInfoExportJobRequest {
  /** 资产实例id */
  AssetId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface CreateDspmAssetIdentifyInfoExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmAssetsExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface CreateDspmAssetsExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmExportTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 风险等级(0-安全,1-低风险,2-中风险,3-高风险,-1-全部) */
  DangerLevel?: number;
  /** 数据库名称 */
  DbName?: string;
  /** 数据库端口 */
  DbPort?: number;
  /** 数据库 IP */
  DbIp?: string;
  /** 资产 ID */
  AssetsId?: number;
  /** 会话 ID */
  SessionId?: string;
  /** 客户端 IP */
  ClientSideIp?: string;
  /** 结束时间 */
  EndTime?: number;
  /** 命中规则 */
  HitRule?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 模糊查询 */
  FuzzySearch?: string;
  /** 用户名 */
  UserName?: string;
  /** 客户端 */
  ClientName?: string;
  /** 流量来源，取值 Agent/Proxy/空；传Agent会返回Agent的日志，传Proxy会返回Proxy日志，两都传或不传则返回所有 */
  SourceTypes?: string[];
  /** 表名，长度限制64，多个表名查询的话可以用空格连接 */
  TableName?: string;
  /** 字段名，长度限制64，多个字段名查询的话可以用空格连接 */
  FieldName?: string;
  /** SQL 主要类型，DDL, DML, DCL, TCL */
  SqlMainTypes?: string[];
  /** 操作类型 */
  SqlType?: string;
  /** 影响行数最小值 */
  RowNumMin?: number;
  /** 影响行数最大值 */
  RowNumMax?: number;
  /** 数据库类型 */
  DbTypes?: string[];
  /** 返回码 */
  RetNo?: number;
  /** 客户端工具 */
  ClientDriverName?: string;
  /** 客户端端口 */
  ClientPort?: number;
  /** 审计日志 ID */
  LogId?: string;
  /** 风险等级数组(0-安全,1-低风险,2-中风险,3-高风险), 如果要全部，则需要将所有的值都传入。如果为空，则会参考：DangerLevel 入参 */
  DangerLevels?: number[];
  /** 字段分类 */
  SensitiveCategoryRule?: string;
  /** 字段分级 */
  SensitiveLevelRisk?: string;
  /** 事务Id */
  TrxId?: number;
  /** clientMac */
  ClientMac?: string;
}

declare interface CreateDspmExportTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyCategoryRequest {
  /** 分类名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateDspmIdentifyCategoryResponse {
  /** 分类ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyComplianceCategoryRelationRequest {
  /** 识别模板ID */
  ComplianceId: number;
  /** 分类ID */
  CategoryId: number;
  /** 父分类ID */
  ParentCategoryId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateDspmIdentifyComplianceCategoryRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyComplianceGroupCopyRequest {
  /** 来源模板ID */
  FromId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 模板名称 */
  Name?: string;
  /** 模板描述 */
  Description?: string;
}

declare interface CreateDspmIdentifyComplianceGroupCopyResponse {
  /** 模板ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyComplianceGroupRequest {
  /** 级别名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 描述 */
  Description?: string;
  /** 级别组ID */
  LevelGroupId?: number;
  /** 状态枚举值：0： 不启用1： 启用 */
  Status?: number;
}

declare interface CreateDspmIdentifyComplianceGroupResponse {
  /** 识别模板ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyComplianceRuleRelationRequest {
  /** 识别模板ID */
  ComplianceId: number;
  /** 分类ID */
  CategoryId: number;
  /** 无 */
  Rules: DspmIdentifyCategoryRuleRelateItem[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateDspmIdentifyComplianceRuleRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyInfoListExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface CreateDspmIdentifyInfoListExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyLevelGroupRequest {
  /** 分级组名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 描述 */
  Description?: string;
  /** 无 */
  LevelItems?: DspmAddIdentifyLevelItem[];
}

declare interface CreateDspmIdentifyLevelGroupResponse {
  /** 分级组ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmIdentifyRuleRequest {
  /** 数据项名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 数据项描述 */
  Description?: string;
  /** 数据项启用状态枚举值：0： 未启用1： 启用 */
  Status?: number;
  /** 结构化规则 */
  StructuredRule?: string;
  /** 非结构化规则 */
  UnStructuredRule?: string;
}

declare interface CreateDspmIdentifyRuleResponse {
  /** 数据项id */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmPersonalIdentifyRequest {
  /** 手机号 */
  Phone: string;
  /** 姓名 */
  Name: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateDspmPersonalIdentifyResponse {
  /** 个人id */
  PersonId?: string;
  /** 身份id */
  IdentifyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmRiskExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface CreateDspmRiskExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDspmWhitelistStrategyRequest {
  /** 策略类型 */
  StrategyType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 白名单 */
  Name?: string;
  /** 规则 */
  Rule?: string;
  /** 资产id */
  AssetId?: string;
  /** 账号 */
  Account?: string;
  /** 主机 */
  Host?: string;
  /** 风险id */
  RiskId?: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateDspmWhitelistStrategyResponse {
  /** 白名单id */
  WhitelistStrategyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIaCAccessTokenRequest {
  /** CI/CD名称 */
  Name: string;
  /** 扫描结果存储时长(30/60/90/120/150/180天) */
  Period: number;
}

declare interface CreateIaCAccessTokenResponse {
  /** 接入Token */
  Token?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIaCFileExportJobRequest {
  /** 过滤条件 */
  Filter?: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateIaCFileExportJobResponse {
  /** 任务ID */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIaCFileReScanTaskRequest {
  /** 文件ID */
  Id: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateIaCFileReScanTaskResponse {
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

declare interface CreateSkillScanRequest {
  /** ZIP 文件内容的 Base64 编码入参限制：文件大小上限 7MB（编码前），仅接受有效的 ZIP 格式 */
  FileBase64: string;
  /** 文件名，用于服务端日志记录参数格式：形如 my-skill.zip */
  FileName?: string;
}

declare interface CreateSkillScanResponse {
  /** 文件的 SHA256 Hash，用于轮询 DescribeSkillScanResult 接口参数格式：sha256: */
  ContentHash?: string;
  /** 本次请求实际绑定的引擎版本号。调用方应保存并在后续 DescribeSkillScanResult 时显式传入 */
  EngineVersion?: number;
  /** 任务状态，固定为 SCANNING，表示任务已接收 */
  Status?: string;
  /** 可读的操作结果描述 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCosAkAssetRequest {
  /** 要删除的cos ak集合 */
  CosAkSet: CosAkSet[];
}

declare interface DeleteCosAkAssetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCosPolicyRequest {
  /** 要删除的策略集合 */
  PolicyIdSet?: number[];
  /** 是否删除所有 */
  IsDeleteAll?: number;
}

declare interface DeleteCosPolicyResponse {
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

declare interface DeleteDspmApplyOrderRequest {
  /** 申请单id */
  OrderId?: string[];
}

declare interface DeleteDspmApplyOrderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmAssetAccountRequest {
  /** 实例id */
  AssetId: string;
  /** 账号名 */
  Account: string;
  /** 主机地址 */
  Host?: string;
  /** 风险id */
  RiskId?: string;
}

declare interface DeleteDspmAssetAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmBackupLogListRequest {
  /** 备份日志Id */
  Id: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmBackupLogListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmExportTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 要删除的导出任务ID */
  TaskIds?: number[];
}

declare interface DeleteDspmExportTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmIdentifyCategoryRequest {
  /** 分类ID集合 */
  Ids: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmIdentifyCategoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmIdentifyComplianceCategoryRelationRequest {
  /** 识别模板ID */
  ComplianceId: number;
  /** 分类ID */
  CategoryId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmIdentifyComplianceCategoryRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmIdentifyComplianceGroupRequest {
  /** 识别模板ID集合 */
  Ids: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmIdentifyComplianceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmIdentifyComplianceRuleRelationRequest {
  /** 识别模板ID */
  ComplianceId: number;
  /** 分类ID */
  CategoryId: number;
  /** 数据项ID集合 */
  RuleIds: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmIdentifyComplianceRuleRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmIdentifyLevelGroupRequest {
  /** 级别组id */
  Ids: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmIdentifyLevelGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmIdentifyRuleRequest {
  /** 数据项id */
  Ids: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmIdentifyRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmPersonalIdentifyRequest {
  /** 个人id */
  PersonId: string;
}

declare interface DeleteDspmPersonalIdentifyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmRestoreLogListRequest {
  /** 日志Id */
  Id: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteDspmRestoreLogListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDspmWhitelistStrategyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 白名单id */
  WhitelistStrategyId?: string[];
}

declare interface DeleteDspmWhitelistStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIaCAccessTokenRequest {
  /** 删除ID列表 */
  Id: number[];
}

declare interface DeleteIaCAccessTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIaCFileRequest {
  /** 删除ID列表 */
  Id: number[];
}

declare interface DeleteIaCFileResponse {
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

declare interface DescribeAIAgentAssetListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选 */
  Filter?: Filter;
}

declare interface DescribeAIAgentAssetListResponse {
  /** 资产列表 */
  AssetList?: AIAgentAsset[];
  /** 资产总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAILinkSettingRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAILinkSettingResponse {
  /** 0 关闭AI-Link智链引擎，1 开启AI-Link智链引擎 */
  AILinkEnable?: number;
  /** 深度模式 0-关闭 1-开启 */
  RuleScopeDeep?: number;
  /** 均衡模式 0-关闭 1-开启 */
  RuleScopeBalanced?: number;
  /** 精准模式 0-关闭 1-开启 */
  RuleScopePrecise?: number;
  /** 1 全部专业/旗舰版主机，0 Quuids列表主机 */
  Scope?: number;
  /** 自选主机Quuid列表 */
  Quuids?: string[];
  /** 排除主机Quuid列表 */
  ExcludeQuuids?: string[];
  /** 新增资产自动包含 0 不包含 1包含 */
  AutoInclude?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAKAnalysisDetailRequest {
  /** 告警记录ID */
  ID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAKAnalysisDetailResponse {
  /** 告警AI分析状态 -1 分析失败 0 未分析 1 分析中 2 分析成功，真实告警 3 分析成功，可疑告警 */
  AIStatus?: number;
  /** AI分析任务ID */
  AITaskID?: string;
  /** 告警AI分析结果，base64格式，避免数据被拦截 */
  AIResult?: string;
  /** 反馈建议 */
  Feedback?: string;
  /** 反馈状态 0表示没有反馈，1表示认可，2表示不认可 */
  FeedbackResult?: number;
  /** 失败原因 */
  FailedReason?: string;
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
  /** 资产类型集合 */
  AssetTypeList?: AttributeOptionSet[];
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

declare interface DescribeAssumeRoleRequest {
  /** 角色名 */
  RoleName?: string;
}

declare interface DescribeAssumeRoleResponse {
  /** 是否绑定角色。0-未绑定 1-已绑定 */
  Bind?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBucketInvokeIpListRequest {
  /** appid */
  RelAppId: number;
  /** 桶名 */
  BucketName: string;
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeBucketInvokeIpListResponse {
  /** ip信息 */
  Data?: CosSourceIpInfo[];
  /** 总数 */
  Total?: number;
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

declare interface DescribeCLSLogIndexV3Request {
  /** 过滤条件 */
  Filters: LogCLSFilter[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** limit限制 */
  Limit?: number;
  /** offset */
  Offset?: number;
}

declare interface DescribeCLSLogIndexV3Response {
  /** 主题信息 */
  TopicIndexInfos?: LogTopicIndexInfo[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCLSLogListV3Request {
  /** 开始时间 */
  From: number;
  /** 结束时间 */
  To: number;
  /** 查询条件 */
  Query: string;
  /** 语法 */
  SyntaxRule: number;
  /** 主题 */
  Topics?: LogContextInfo[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 排序 */
  Sort?: string;
  /** limit */
  Limit?: number;
  /** offset */
  Offset?: number;
  /** 采样 */
  SamplingRate?: number;
  /** 是否高亮 */
  HighLight?: boolean;
  /** 是否采用新分析 */
  UseNewAnalysis?: boolean;
  /** 查询优化 */
  QueryOptimize?: number;
  /** 主题id */
  TopicId?: string;
  /** 上下文信息 */
  Context?: string;
  /** 查询类型 */
  SubQueryTypes?: string[];
}

declare interface DescribeCLSLogListV3Response {
  /** 上下文 */
  Context?: string;
  /** listover */
  ListOver?: boolean;
  /** 是否采用分析 */
  Analysis?: boolean;
  /** 结果 */
  Results?: LogSearchResult[];
  /** 列名 */
  ColNames?: string[];
  /** 分析结果 */
  AnalysisResults?: LogItems[];
  /** 分析记录 */
  AnalysisRecords?: string[];
  /** 列名 */
  Columns?: LogColumn[];
  /** 采样 */
  SamplingRate?: number;
  /** 主题信息 */
  Topics?: LogSearchTopics;
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

declare interface DescribeCWPMachineDetailRequest {
  /** 实例ID */
  InstanceId?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeCWPMachineDetailResponse {
  /** 主机详情 */
  MachineDetail?: MachineDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCWPMachinesRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 一、主表字段筛选（需要指定 OperatorType）MachineName：主机名称，支持 OperatorType 9(模糊)、7(IN)，Values示例：["test-server"]MachineIp：内网IP，支持 OperatorType 9(模糊)、7(IN)，Values示例：["10.0.0.1"]MachineWanIp：外网IP，支持 OperatorType 9(模糊)、7(IN)，Values示例：["1.2.3.4"]InstanceID：实例ID，支持 OperatorType 9(模糊)、7(IN)，Values示例：["ins-xxxxx"]MachineStatus / InstanceStatus：实例状态，支持 OperatorType 7(IN)、1(等于)，Values示例：["RUNNING"]，可选值：RUNNING/STOPPED/EXPIREDMachineOs：操作系统类型，支持 OperatorType 7(IN)，Values示例：["1"]，值为数字编码，见下方OsType说明VpcId：VPC ID，支持 OperatorType 7(IN)、1(等于)，Values示例：["vpc-xxxxx"]CloudFromEnum：云服务商，支持 OperatorType 7(IN)、1(等于)，Values示例：["0"]，值为数字编码，见下方CloudFrom说明Region ：地域，支持 OperatorType 7(IN)、1(等于)，Values示例：["ap-guangzhou"]AppId：账号AppId，支持 OperatorType 7(IN)、1(等于)，Values示例：["1234567890"]ProjectId：项目ID，支持 OperatorType 7(IN)、1(等于)，Values示例：["0"]二、预筛选字段（不需要指定 OperatorType）AgentStatus：Agent状态，单选，Values示例：["ONLINE"]，可选值：ONLINE/OFFLINE/UNINSTALLProtectType：防护类型（综合），Values示例：["ULTIMATE"]，可选值：BASIC/PRO/ULTIMATE/NONECsipProtectType：CSIP防护类型，Values示例：["ULTIMATE"]，可选值：BASIC/PRO/ULTIMATE/NONECloudTags：云标签，Values示例：["tagKey$tagValue"]，格式：tagKey$tagValue 或 tagKey（只匹配key），最多5个值Tags：资产标签，Values示例：["123"]，值为标签IDExposedStatus：暴露状态，单选，Values示例：["EXPOSED"]，可选值：NOT_APPLICABLE/EXPOSED/UNEXPOSED三、特殊筛选字段（不需要指定 OperatorType）NetworkType：网络类型，单选，Values示例：["1"]，1=VPC网络, 2=基础网络, 3=非腾讯云网络MachineType：机器类型，可多选，Values示例：["CVM"]，可选值：CVM/BM/ECM/LH/EKS-NATIVE/ECS/EC2/VMSCommon：通用搜索，单选，Values示例：["关键词"]，同时对内网IP、外网IP、主机名称、实例ID做模糊匹配 */
  Filter?: Filter;
  /** 是否需要tat状态信息 */
  NeedTatStatus?: boolean;
  /** 是否需要额外信息，如安全中心标签、腾讯云标签 */
  MoreInformation?: boolean;
  /** 是否需要容器信息，如容器数、核数、容器防护状态 */
  NeedContainerInfo?: boolean;
}

declare interface DescribeCWPMachinesResponse {
  /** 主机列表 */
  Machines?: Machine[];
  /** 总数 */
  Total?: number;
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
  /** 访问密钥，注意：不支持临时密钥的情况 */
  AccessKey?: string;
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
  /** 资产类型集合 */
  AssetTypeList?: AttributeOptionSet[];
  /** 云厂商类型集合 */
  ProviderList?: AttributeOptionSet[];
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

declare interface DescribeCosAccessPermissionRequest {
  /** 关联的appid */
  RelAppId: number;
  /** 桶名 */
  BucketName: string;
  /** 需要查看的uin */
  RelUin: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosAccessPermissionResponse {
  /** cos权限信息 */
  Data?: CosPermissionInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAccessPermissionsRequest {
  /** appid */
  RelAppId: number;
  /** 桶名 */
  BucketName: string;
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeCosAccessPermissionsResponse {
  /** 返回数据列表 */
  Data?: CosAccessInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosActionListRequest {
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosActionListResponse {
  /** 列表 */
  Data?: CosActionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAkAssetRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 查询过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosAkAssetResponse {
  /** 总数 */
  Total?: number;
  /** ak资产列表 */
  Data?: CosAkAssetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAkInvokeIpListRequest {
  /** appid */
  RelAppId: number;
  /** ak */
  Ak: string;
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeCosAkInvokeIpListResponse {
  /** ip信息 */
  Data?: CosSourceIpInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAlarmListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosAlarmListResponse {
  /** 总数 */
  Total?: number;
  /** 告警列表 */
  Data?: CosAlarmInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAlarmTrendDataRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 需要查看多久的时间 */
  LastDays?: number;
}

declare interface DescribeCosAlarmTrendDataResponse {
  /** 告警趋势信息 */
  CosAlarmTrendInfo?: CosAlarmTrendInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAssetRequest {
  /** 请求过滤器 */
  Filter: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeCosAssetResponse {
  /** 总数 */
  Total?: number;
  /** 桶信息 */
  Data?: CosAssetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAssetSyncTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeCosAssetSyncTaskResponse {
  /** 数据信息 */
  Data?: CosAssetSyncTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAuditAppIdListRequest {
}

declare interface DescribeCosAuditAppIdListResponse {
  /** 已购买appid集合 */
  Data?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAuditDictionaryListRequest {
  /** 字典类型（RootCategory：一级分类，IdentifyRule:敏感识别数据项） */
  DictType: string;
  /** 筛选条件 */
  Filters?: WhereFilter[];
}

declare interface DescribeCosAuditDictionaryListResponse {
  /** 结果集 */
  DataSet?: CosDictionary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosAuditPayInfoRequest {
}

declare interface DescribeCosAuditPayInfoResponse {
  /** cos审计支付信息 */
  CosAuditPayInfo?: CosAuditPayInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosBucketBillingInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeCosBucketBillingInfoResponse {
  /** 存储桶计费信息 */
  CosBucketBillingInfoSet?: CosBucketBillingInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosBucketListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeCosBucketListResponse {
  /** 总数 */
  Total?: number;
  /** 资产信息 */
  Data?: CosAssetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosBucketRiskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosBucketRiskResponse {
  /** 总数 */
  Total?: number;
  /** 列表 */
  Data?: CosRiskBucketInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosIdentifyFileListRequest {
  /** 存储桶名 */
  BucketName: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
  /** 0：没有识别结果 1：有识别结果 */
  ResultStatus?: number;
}

declare interface DescribeCosIdentifyFileListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 结果集 */
  DataSet?: CosAssetFileIdentifyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosInvokeUaRequest {
  /** appid */
  RelAppId: number;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosInvokeUaResponse {
  /** 总数 */
  Total?: number;
  /** 文件列表 */
  Data?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosIpInvokeLogRequest {
  /** appid */
  RelAppId: number;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosIpInvokeLogResponse {
  /** 总数 */
  Total?: number;
  /** 请求日志数据 */
  Data?: CosInvokeLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosIpInvokeRecordFileRequest {
  /** appid */
  RelAppId: number;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosIpInvokeRecordFileResponse {
  /** 总数 */
  Total?: number;
  /** 文件列表 */
  Data?: string[];
  /** 文件列表详情 */
  DataSet?: CosAssetFileIdentifyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosObjectScanTaskRequest {
  /** 1: 敏感数据识别 2:恶意文件扫描 */
  TaskType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 存储桶列表 */
  BucketSet?: string[];
}

declare interface DescribeCosObjectScanTaskResponse {
  /** 存储桶任务详情 */
  BucketTaskIdSet?: CosBucketTaskInfo[];
  /** appid维度任务列表 */
  MemberTaskIdSet?: CosAssetSyncTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosOverviewRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤信息 */
  Filter?: Filter;
}

declare interface DescribeCosOverviewResponse {
  /** cos概览 */
  CosOverview?: CosOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosPolicyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeCosPolicyResponse {
  /** 策略总数 */
  Total?: number;
  /** 策略信息 */
  Data?: CosPolicyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosRiskActionListRequest {
  /** appid */
  RelAppId: number;
  /** 策略id */
  PolicyId: number;
  /** 桶名 */
  BucketName: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosRiskActionListResponse {
  /** 总数 */
  Total?: number;
  /** 列表 */
  Data?: CosRiskActionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosRiskEvidenceRequest {
  /** appid */
  RelAppId: number;
  /** 策略id */
  PolicyId: number;
  /** 存储桶名 */
  BucketName: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosRiskEvidenceResponse {
  /** 证据信息 */
  Evidences?: CosPermissionInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosRiskScanTaskRequest {
  /** 需要查看的存储桶详情 */
  BucketInfoSet?: CosBucketInfo[];
}

declare interface DescribeCosRiskScanTaskResponse {
  /** cos桶任务详情 */
  BucketTaskInfoSet?: CosBucketTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosRoleAccessPermissionRequest {
  /** 关联的appid */
  RelAppId: number;
  /** 需要查看的角色id */
  RelRoleId: string;
  /** 桶名 */
  BucketName: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeCosRoleAccessPermissionResponse {
  /** cos权限信息 */
  Data?: CosPermissionInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosRoleAccessPermissionsRequest {
  /** 存储桶所属appid */
  RelAppId: number;
  /** 存储桶名 */
  BucketName: string;
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeCosRoleAccessPermissionsResponse {
  /** 总数 */
  Total?: number;
  /** 角色详情 */
  Data?: CosRoleAccessInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosSourceIpRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeCosSourceIpResponse {
  /** 列表信息 */
  Data?: CosSourceIpInfo[];
  /** 总数 */
  Total?: number;
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

declare interface DescribeDspmAccessRecordRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 视图类型。ip或instance */
  View?: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmAccessRecordResponse {
  /** 访问记录 */
  AccessSet?: DspmAccessRecord[];
  /** 记录总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAccessTopologyAccountsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器。 支持的FilterName: Ip/AssetId */
  Filter?: Filter;
}

declare interface DescribeDspmAccessTopologyAccountsResponse {
  /** 资产账号列表 */
  Items?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAccessTopologyAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器。 支持的FilterName: Ip/Account */
  Filter?: Filter;
}

declare interface DescribeDspmAccessTopologyAssetsResponse {
  /** 资产id列表 */
  Items?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAccessTopologyIpsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器。 支持的FilterName: AssetId/Account */
  Filter?: Filter;
}

declare interface DescribeDspmAccessTopologyIpsResponse {
  /** ip列表 */
  Items?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmApplyHistoryRequest {
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmApplyHistoryResponse {
  /** 申请记录总数 */
  TotalCount?: number;
  /** 申请记录信息 */
  ApplySet?: DspmApplyOrder[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmApplyOrderListRequest {
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmApplyOrderListResponse {
  /** 申请单总数 */
  TotalCount?: number;
  /** 申请单详情 */
  OrderSet?: DspmApplyOrder[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmApproveHistoryRequest {
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmApproveHistoryResponse {
  /** 审批记录总数 */
  TotalCount?: number;
  /** 审批记录信息 */
  ApproveSet?: DspmApplyOrder[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmApproveOrderListRequest {
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmApproveOrderListResponse {
  /** 审批单总数 */
  TotalCount?: number;
  /** 审批单详情 */
  OrderSet?: DspmApproverOrder[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetAccessTopologyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 视图类型。ip或instance */
  View?: string;
  /** - 来源ip方式查看View: "ip"Filter:{	{ "Name":"Ip", "Values":["172.1.1.1"]	},	{ "Name":"AssetId", "Values":["cdb-1111|ap-guangzhou","cdb-2222|ap-guangzhou","cdb-3333|ap-guangzhou"]	},	{ "Name":"Account", "Values":["root|%","test|%"]	}}- 实例方式查看View: "instance"Filter:{	{ "Name":"AssetId", "Values":["cdb-1111|ap-guangzhou"]	},	{ "Name":"Ip", "Values":["172.1.1.1","172.1.1.2","172.1.1.3"]	},	{ "Name":"Account", "Values":["root|%","test|%"]	}} */
  Filter?: Filter;
}

declare interface DescribeDspmAssetAccessTopologyResponse {
  /** 拓扑数据 */
  ItemSet?: DspmAssetAccessTopologyItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetAccountIdentifyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产id */
  AssetId?: string;
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetAccountIdentifyResponse {
  /** 资产账号身份总数 */
  TotalCount?: number;
  /** 资产账号身份信息 */
  IdentifySet?: DspmAssetAccountIdentify[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetAccountPresetPrivilegesRequest {
  /** 资产id */
  AssetId?: string;
  /** 账号 */
  Account?: string;
  /** 地址 */
  Host?: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetAccountPresetPrivilegesResponse {
  /** 权限信息 */
  Privilege?: DspmDbAccountPrivilege;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetAccountRecycledPrivilegesRequest {
  /** 风险id */
  RiskId?: string;
}

declare interface DescribeDspmAssetAccountRecycledPrivilegesResponse {
  /** 权限信息 */
  Privilege?: DspmDbAccountPrivilege;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetAccountsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产id */
  AssetId?: string;
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetAccountsResponse {
  /** 资产账号总数 */
  TotalCount?: number;
  /** 账号信息 */
  AccountSet?: DspmAssetAccount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetDatabaseListRequest {
  /** 资产实例id */
  AssetId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetDatabaseListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 结果集 */
  DataSet?: DspmAssetDatabaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetDatabasesRequest {
  /** 资产id */
  AssetId: string;
}

declare interface DescribeDspmAssetDatabasesResponse {
  /** 数据库列表 */
  Items?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetFieldListRequest {
  /** 资产实例id */
  AssetId: string;
  /** 数据库名称 */
  DbName: string;
  /** 表名 */
  TableName: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetFieldListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 结果集 */
  DataSet?: DspmAssetFieldInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetFieldSamplesRequest {
  /** 资产实例ID */
  AssetId: string;
  /** 数据库名 */
  DbName: string;
  /** 表名 */
  TableName: string;
  /** 字段名 */
  FieldName: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** schema名 */
  SchemaName?: string;
}

declare interface DescribeDspmAssetFieldSamplesResponse {
  /** 无 */
  DataSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetIdentifyInfoListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
  /** 识别模板id */
  ComplianceId?: number;
}

declare interface DescribeDspmAssetIdentifyInfoListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 结果集 */
  DataSet?: DspmAssetIdentifyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetIdsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetIdsResponse {
  /** 数据库资产总数 */
  TotalCount?: number;
  /** 资产id信息 */
  AssetSet?: DspmDbAssetId[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetLoginCredentialRequest {
  /** 数据库资产id */
  AssetId: string;
  /** 主机。默认'%' */
  Host?: string;
  /** 加密算法 */
  EncryptMethod?: string;
}

declare interface DescribeDspmAssetLoginCredentialResponse {
  /** 账号 */
  Account?: string;
  /** 密码信息 */
  Password?: string;
  /** 有效期开始时间 */
  ValidateStart?: string;
  /** 有效期结束时间 */
  ValidateEnd?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetSecurityAnalyseStatusRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetSecurityAnalyseStatusResponse {
  /** 数据库资产总数 */
  TotalCount?: number;
  /** 资产安全分析状态信息 */
  AssetSet?: DspmAssetSecurityAnalyseStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetSupportedPrivilegesRequest {
  /** 资产id */
  AssetId: string;
}

declare interface DescribeDspmAssetSupportedPrivilegesResponse {
  /** 实例支持的全局权限。 */
  GlobalSupportedPrivileges?: string[];
  /** 实例支持的数据库权限。 */
  DatabaseSupportedPrivileges?: string[];
  /** 实例支持的数据库表权限。 */
  TableSupportedPrivileges?: string[];
  /** 实例支持的数据库列权限。 */
  ColumnSupportedPrivileges?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetTableListRequest {
  /** 资产实例id */
  AssetId: string;
  /** 数据库名称 */
  DbName: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetTableListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 结果集 */
  DataSet?: DspmAssetTableInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmAssetsResponse {
  /** 数据库资产总数 */
  TotalCount?: number;
  /** 资产信息 */
  AssetSet?: DspmDbAsset[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmBackupLogListRequest {
  /** 限制数目 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 排序方式(desc=倒叙,asc=升序) */
  Sort?: string;
  /** 排序字段(支持'StartTime') */
  Field?: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 备份日志状态0未完成的,1备份文件，2恢复中，3已恢复，4.已删除,全部查询-1 */
  Status?: number;
  /** 数据库类型,如：cdb, mariadb */
  DbTypes?: string[];
}

declare interface DescribeDspmBackupLogListResponse {
  /** 总共多少条 */
  TotalCount?: number;
  /** 备份日志列表 */
  List?: BackupLog[];
  /** 当前是否存在恢复中任务 */
  HasRestoringTask?: boolean;
  /** 最大恢复空间 */
  MaxRestoreSizeInGB?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmBackupSettingRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeDspmBackupSettingResponse {
  /** 备份日志保留时长 */
  BackupLogSaveTime?: number;
  /** 恢复日志保留时长 */
  RestoreLogSaveTime?: number;
  /** 日志最大生命周期限制 */
  LogMaxSaveTime?: number;
  /** 在线日志最大天数限制 */
  OnlineLogMaxSaveTime?: number;
  /** 最大在线日志条数，单位是：个 */
  MaxOnlineLogCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmDictionaryListRequest {
  /** 字典类型（RootCategory：一级分类，IdentifyRule:敏感识别数据项） */
  DictType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件 */
  Filters?: WhereFilter[];
}

declare interface DescribeDspmDictionaryListResponse {
  /** 结果集 */
  DataSet?: DspmDictionary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmExportTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 任务状态：0.未开始 1.执行中 2.执行成功 3.执行超时 4.执行失败 */
  TaskStatus?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

declare interface DescribeDspmExportTaskResponse {
  /** 任务列表 */
  List?: ExportTask[];
  /** 任务总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyCategoryListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeDspmIdentifyCategoryListResponse {
  /** 总数单位：数量 */
  TotalCount?: number;
  /** 无 */
  DataSet?: DspmIdentifyCategoryItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyComplianceCategoryRuleListRequest {
  /** 识别模板ID */
  ComplianceId: number;
  /** 分类ID */
  CategoryId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeDspmIdentifyComplianceCategoryRuleListResponse {
  /** 总数单位：数量 */
  TotalCount?: number;
  /** 无 */
  DataSet?: DspmIdentifyCategoryRuleRelateDetailItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyComplianceGroupDetailRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 识别模板ID */
  Id?: number;
}

declare interface DescribeDspmIdentifyComplianceGroupDetailResponse {
  /** 识别模板ID */
  Id?: number;
  /** 识别模板名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 模板类型枚举值：0： 内置1： 自定义 */
  Type?: number;
  /** 状态枚举值：0： 未启用1： 启用 */
  Status?: number;
  /** 关联级别组ID */
  LevelGroupId?: number;
  /** 无 */
  Detail?: DspmIdentifyComplianceCategoryRelation[];
  /** 关联级别组名称 */
  LevelGroupName?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyComplianceGroupListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeDspmIdentifyComplianceGroupListResponse {
  /** 总数单位：数量 */
  TotalCount?: number;
  /** 无 */
  DataSet?: DspmIdentifyComplianceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyDistributionStatisticsRequest {
  /** 统计类型枚举值：FieldTop5Asset： 识别字段Top5FieldCategoryDistribution： 识别字段分类分布FieldLevelDistribution： 识别字段级别分布AssetDistribution： 识别资产分布 */
  StatType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产类型枚举值：cdb： 云数据库MySQLmariadb： 云数据库MariaDB */
  AssetType?: string;
  /** 识别模板id */
  ComplianceId?: number;
}

declare interface DescribeDspmIdentifyDistributionStatisticsResponse {
  /** 结果 */
  DataSet?: DspmStatisticsItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyIdListRequest {
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmIdentifyIdListResponse {
  /** id总数 */
  TotalCount?: number;
  /** 身份id列表 */
  IdSet?: DspmIdentifyIdItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyInfoListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmIdentifyInfoListResponse {
  /** 身份总数 */
  TotalCount?: number;
  /** 身份 信息 */
  InfoSet?: DspmIdentifyInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeDspmIdentifyInfoResponse {
  /** 身份id */
  IdentifyId?: string;
  /** 身份统计信息 */
  IdentifyCount?: DspmIdentifyCount[];
  /** 申请单个数 */
  ApplyOrderCount?: number;
  /** 审批单个数 */
  ApproveOrderCount?: number;
  /** 已审批个数 */
  ApproveHistoryCount?: number;
  /** 资产总数 */
  AssetCount?: number | null;
  /** 云账号总数 */
  UinAccountCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyLevelGroupListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeDspmIdentifyLevelGroupListResponse {
  /** 总数单位：数量 */
  TotalCount?: number;
  /** 无 */
  DataSet?: DspmIdentifyLevelGroupItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyRuleDetailRequest {
  /** 数据项id */
  Id: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeDspmIdentifyRuleDetailResponse {
  /** 数据项id */
  Id?: number;
  /** 数据项名称 */
  Name?: string;
  /** 数据项描述 */
  Description?: string;
  /** 数据项是否启用枚举值：0： 否1： 是默认值：0 */
  Status?: number;
  /** 数据项类型枚举值：0： 内置1： 自定义 */
  Type?: number;
  /** 结构化规则 */
  StructuredRule?: string;
  /** 非结构化规则 */
  UnStructuredRule?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyRuleListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmIdentifyRuleListResponse {
  /** 总数单位：数量 */
  TotalCount?: number;
  /** 结果 */
  DataSet?: DspmIdentifyRuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmIdentifyRuleTestResultRequest {
  /** 规则类型枚举值：structured： 结构化规则unstructrued： 非结构化规则 */
  RuleType: string;
  /** 规则内容 */
  RuleContent?: string;
  /** 数据项id */
  RuleId?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 结构化测试内容 */
  StructuredTestContent?: DspmIdentifyRuleStructuredTestItem[];
  /** 非结构化测试内容 */
  UnStructuredTestContent?: string;
}

declare interface DescribeDspmIdentifyRuleTestResultResponse {
  /** 是否匹配成功枚举值：true： 匹配成功false： 匹配失败 */
  IsMatch?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmLogListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序方式(desc=倒叙,asc=升序) */
  Sort?: string;
  /** 排序字段(opTime=时间,dangerLvl=风险等级) */
  Field?: string;
  /** 风险等级(0-安全,1-低风险,2-中风险,3-高风险,不传全部) */
  DangerLevel?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 数据库端口 */
  DbPort?: number;
  /** 数据库 IP */
  DbIp?: string;
  /** 资产 ID */
  AssetsId?: number;
  /** 会话 ID */
  SessionId?: string;
  /** 客户端 IP */
  ClientSideIp?: string;
  /** 结束时间 */
  EndTime?: number;
  /** 命中规则 */
  HitRule?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 模糊查询 */
  FuzzySearch?: string;
  /** 用户名 */
  UserName?: string;
  /** 恢复日志id */
  RestoreLogId?: number;
  /** 客户端 */
  ClientName?: string;
  /** 流量来源，取值 Agent/Proxy/空；传Agent会返回Agent的日志，传Proxy会返回Proxy日志，两者都传或不传则返回所有 */
  SourceTypes?: string[];
  /** 表名，长度限制64，多个表名查询的话可以用空格连接 */
  TableName?: string;
  /** 字段名，长度限制64，多个字段名查询的话可以用空格连接 */
  FieldName?: string;
  /** SQL 主要类型，DDL, DML, DCL, TCL */
  SqlMainTypes?: string[];
  /** 操作类型 */
  SqlType?: string;
  /** 影响行数最小值 */
  RowNumMin?: number;
  /** 影响行数最大值 */
  RowNumMax?: number;
  /** 数据库类型 */
  DbTypes?: string[];
  /** 返回码 */
  RetNo?: number;
  /** 客户端工具 */
  ClientDriverName?: string;
  /** 客户端端口 */
  ClientPort?: number;
  /** 审计日志 ID */
  LogId?: string;
  /** 风险等级数组(0-安全,1-低风险,2-中风险,3-高风险) */
  DangerLevels?: number[];
  /** 字段分类 */
  SensitiveCategoryRule?: string;
  /** 字段分级 */
  SensitiveLevelRisk?: string;
  /** 客户端MAC */
  ClientMac?: string;
}

declare interface DescribeDspmLogListResponse {
  /** 总数目 */
  TotalCount?: number;
  /** 日志信息列表 */
  List?: AuditLogInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmPayInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeDspmPayInfoResponse {
  /** APPID */
  AppID?: number;
  /** 订单状态 0未购买 1正常，2隔离，3销毁，6试用中，7到期 */
  OrderStatus?: number;
  /** 已购数据库实例数量 */
  AssetNum?: number;
  /** 已购审计日志量（TB） */
  LogStorage?: number;
  /** 已使用数据库实例数量 */
  UsedAssetNum?: number;
  /** 已使用审计日志量（TB） */
  UsedLogStorage?: number;
  /** 已购sql存储总量（单位百万） */
  SqlTotal?: number;
  /** 已购sql qps */
  SqlQps?: number;
  /** 支付模式，0-后付费 1-预付费 */
  PayMode?: number;
  /** 是否单独购买，1-单独购买，2-被其它账号共享 */
  IsSelfBuy?: number;
  /** 订单开始时间 */
  BeginTime?: string;
  /** 订单到期时间 */
  EndTime?: string;
  /** 0-用户未设置,1-用户设置自动续费,2-用户设置不自动续费 */
  AutoRenew?: number;
  /** 订单时长 */
  TimeSpan?: number;
  /** 时长单位 */
  TimeUnit?: string;
  /** 资源id */
  ResourceId?: string;
  /** 公测结束时间 */
  BetaEndTime?: string;
  /** 系统当前时间 */
  TimeNow?: string;
  /** 是否分享给其它账号，1-是，2-否 */
  IsShareToOther?: number;
  /** uin */
  Uin?: string;
  /** 昵称 */
  NickName?: string;
  /** 购买信息 */
  InquireData?: InquireInfo[];
  /** 版本(专业版：professional 试用版：trial) */
  Version?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmPersonApplyHistoryRequest {
  /** 对象 */
  Subject?: string;
  /** 资产id */
  AssetId?: string;
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmPersonApplyHistoryResponse {
  /** 申请记录总数 */
  TotalCount?: number;
  /** 申请记录信息 */
  ApplySet?: DspmPersonApplyHistoryItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmPersonalIdentifyListRequest {
  /** 筛选项 */
  Filter?: Filter;
}

declare interface DescribeDspmPersonalIdentifyListResponse {
  /** 身份总数 */
  TotalCount?: number;
  /** 个人身份信息 */
  InfoSet?: DspmPersonIdentifyItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmRiskDetailRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
  /** 风险id */
  RiskId?: string;
}

declare interface DescribeDspmRiskDetailResponse {
  /** 风险等级 */
  RiskLevel?: string;
  /** 风险检出时间 */
  DetectTime?: string;
  /** 资产实例Id */
  AssetId?: string;
  /** 资产名 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 地域 */
  Region?: string;
  /** 公网访问地址 */
  PublicIp?: string;
  /** 内网访问地址 */
  PrivateIp?: string;
  /** 账号 */
  Account?: string;
  /** 主机地址 */
  Host?: string;
  /** 身份id */
  IdentifyId?: string;
  /** 所属云账号uin用户 */
  OwnerUin?: DspmUinUser;
  /** 所属个人用户信息 */
  Person?: DspmPersonUser;
  /** 风险名称 */
  RiskName?: string;
  /** 风险英文名称 */
  RiskNameEn?: string;
  /** 风险数据 */
  RiskData?: string;
  /** 基线数据 */
  BaselineData?: string;
  /** 风险id */
  RiskId?: string;
  /** 策略类型 */
  StrategyType?: string;
  /** 策略类别 */
  StrategyCategory?: string;
  /** 账号类型 */
  AccountType?: number;
  /** 风险状态 */
  Status?: number;
  /** 是否资产管理员 */
  IsAssetManager?: number;
  /** 数据起始时间 */
  DataBeginTime?: string;
  /** 数据结束时间 */
  DataEndTime?: string;
  /** 风险类型。risk-风险；alarm-告警。 */
  RiskType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmRiskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmRiskResponse {
  /** 风险列表 */
  RiskSet?: DspmRisk[];
  /** 风险总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmRiskStrategyGroupRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmRiskStrategyGroupResponse {
  /** 分组策略列表 */
  StrategyGroupSet?: DspmRiskStrategyGroup[];
  /** 分组策略总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmRiskStrategyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmRiskStrategyResponse {
  /** 策略列表 */
  StrategySet?: DspmRiskStrategy[];
  /** 策略总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmRiskTendencyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 起始日期 */
  StartDate?: string;
  /** 结束日期 */
  EndDate?: string;
}

declare interface DescribeDspmRiskTendencyResponse {
  /** 风险趋势 */
  RiskTendencySet?: DspmRiskTendency[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmStatisticsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 按照资产类型过滤枚举值：cdb： cdbmariadb： mariadbcynosdb： cynosdb默认值：默认值为空，即不按照资产类型过滤，返回所有资产信息 */
  AssetType?: string[];
}

declare interface DescribeDspmStatisticsResponse {
  /** 资产统计信息 */
  AssetCount?: DspmAssetCount;
  /** 访问Ip统计信息 */
  IpCount?: DspmIpCount;
  /** 用户账号统计信息 */
  UserCount?: DspmAccountCount;
  /** 风险统计信息 */
  RiskCount?: DspmRiskCount;
  /** 资产安全分析统计信息 */
  AnalyseAssetStatusCount?: DspmSecurityAnalyseStatusCount;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmSupportedAssetTypeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeDspmSupportedAssetTypeResponse {
  /** 实例支持的全局权限。 */
  AssetTypeSet?: DspmSupportedAssetType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmSyncAssetsStatusRequest {
}

declare interface DescribeDspmSyncAssetsStatusResponse {
  /** 资产同步任务状态。0-未执行。1-执行中 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmSyncUsersStatusRequest {
}

declare interface DescribeDspmSyncUsersStatusResponse {
  /** 用户同步任务状态。0-未执行。1-执行中 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDspmWhitelistStrategyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeDspmWhitelistStrategyResponse {
  /** 白名单列表 */
  WhitelistSet?: DspmWhitelistStrategy[];
  /** 白名单总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEDRRuleListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效 */
  Filters?: EDRFilter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [ModifyTime] */
  By?: string;
}

declare interface DescribeEDRRuleListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: EDRRule[];
  /** 攻击阶段对应的策略数量 */
  AttackStageCounts?: AttackStageCount[];
  /** 检测方式对应的策略数量 */
  DetectTypeCounts?: DetectTypeCount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrAlertInfoRequest {
  /** 告警定位信息（含跨账号AppID） */
  Target: EdrAlertTarget;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeEdrAlertInfoResponse {
  /** 告警详情 */
  Alert?: EdrAlertDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrAlertListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效 */
  Filters?: EDRFilter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [LatestDetectTime] */
  By?: string;
}

declare interface DescribeEdrAlertListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: EdrAlertItem[];
  /** 攻击阶段对应的策略数量 */
  AttackStageCounts?: AttackStageCount[];
  /** 告警大类统计（随筛选变化，排除 AlertCategory filter） */
  AlertCategoryCounts?: EdrAlertCategoryCount[];
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

declare interface DescribeIaCFileListRequest {
  /** 过滤条件 */
  Filter?: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeIaCFileListResponse {
  /** 列表 */
  List?: IaCFile[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIaCFileOverviewRequest {
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeIaCFileOverviewResponse {
  /** 文件数量 */
  TotalFile?: number;
  /** 风险文件数量(1:Dockerfile,2:Terraform,3:KubernetesYaml) */
  RiskFile?: KeyValueInt[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIaCFileReportRequest {
  /** 资产ID */
  AssetId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeIaCFileReportResponse {
  /** 检测文件 */
  File?: string;
  /** 检测状态(0:待扫描,1:检测中,2:已完成,3:检测异常) */
  Status?: number;
  /** 检测时间 */
  ScanTime?: string;
  /** 风险列表 */
  Risks?: IaCFileRisk[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIaCTokenListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeIaCTokenListResponse {
  /** 列表 */
  List?: CICDToken[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpInvokeRecordDetailRequest {
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeIpInvokeRecordDetailResponse {
  /** 调用详情信息 */
  InvokeDetailInfo?: CosInvokeDetailInfo[];
  /** 调用权限相关 */
  InvokePermission?: CosPermissionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpInvokeRecordRequest {
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeIpInvokeRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKeySandboxCredentialListRequest {
  /** 过滤条件列表，支持的过滤条件如下：CredentialName - 凭证名称（模糊匹配）CredentialType - 凭证类型（精确匹配），取值：access、sts */
  Filter?: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeKeySandboxCredentialListResponse {
  /** 凭证数据列表 */
  Data?: KeySandboxCredential[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKeySandboxCredentialRequest {
  /** 凭证ID */
  CredentialId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeKeySandboxCredentialResponse {
  /** 凭证ID */
  CredentialId?: string;
  /** 凭证名称 */
  CredentialName?: string;
  /** 凭证类型枚举值：access：常规密钥sts：STS临时密钥 */
  CredentialType?: string;
  /** 生效机器范围 */
  CredentialEffectScope?: CredentialEffectScope;
  /** 常规密钥凭据数据（打码后），CredentialType为access时返回补充说明：Key为原文，Value为打码后的值（保留前3后4位，中间用***替代） */
  Access?: AccessCredentialOutput[] | null;
  /** STS凭据数据（打码后），CredentialType为sts时返回补充说明：System为原文，SecretID和SecretKey为打码后的值（保留前3后4位，中间用***替代） */
  STS?: STSCredentialOutput | null;
  /** 创建时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  CreateTime?: string;
  /** 更新时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  UpdateTime?: string;
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

declare interface DescribeNotifyAssetConfigRequest {
  /** 模块名 */
  Modules?: string[];
}

declare interface DescribeNotifyAssetConfigResponse {
  /** 资产范围配置 */
  Items?: NotifyAssetConfigItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotifySettingAlertRequest {
}

declare interface DescribeNotifySettingAlertResponse {
  /** 通知配置 */
  Settings?: NotifySetting[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotifySettingRequest {
}

declare interface DescribeNotifySettingResponse {
  /** 通知设置列表 */
  List?: NotifySetting[];
  /** 成员账号Id */
  MemberId?: string[];
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

declare interface DescribePolicyHitDataRequest {
  /** 查看的日期时间戳 */
  IndexTimestamp: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribePolicyHitDataResponse {
  /** 策略命中详情信息 */
  PolicyHitDetail?: CosRiskInfo[];
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

declare interface DescribeRiskBucketListRequest {
  /** 关联的appid */
  RelAppId: number;
  /** 规则id */
  PolicyId: string;
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeRiskBucketListResponse {
  /** 总数 */
  Total?: number;
  /** 受影响的存储桶 */
  Data?: CosRiskBucketInfo[];
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

declare interface DescribeRiskItemListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filter?: Filter;
}

declare interface DescribeRiskItemListResponse {
  /** 列表信息 */
  Data?: CosRiskViewInfo[];
  /** 总数 */
  Total?: number;
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
  /** 资产类型 */
  AssetType?: string;
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

declare interface DescribeRiskTrendDataRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 指定的日期 */
  LastDays?: number;
}

declare interface DescribeRiskTrendDataResponse {
  /** 风险趋势数据 */
  CosRiskTrendData?: CosRiskTrendInfo[];
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

declare interface DescribeSkillScanPayInfoRequest {
}

declare interface DescribeSkillScanPayInfoResponse {
  /** 订单所属租户 AppID */
  AppID?: number;
  /** 订单状态枚举值：0：未购买1：正常2：隔离6：试用中7：已过期8：试用到期 */
  OrderStatus?: number;
  /** 总配额 */
  TotalQuota?: number;
  /** 已消耗配额 */
  UsedCount?: number;
  /** 支付模式枚举值：0：后付费1：预付费 */
  PayMode?: number;
  /** 自动续费标志枚举值：0：未设置1：自动续费2：不自动续费 */
  AutoRenew?: number;
  /** 资源ID */
  ResourceId?: string;
  /** 购买时长 */
  TimeSpan?: number;
  /** 时长单位 */
  TimeUnit?: string;
  /** 订单开始时间 */
  BeginTime?: string;
  /** 订单到期时间 */
  EndTime?: string;
  /** 公测结束时间，固定为 2026-06-30 23:59:59 */
  BetaEndTime?: string;
  /** 服务器当前时间 */
  TimeNow?: string;
  /** 租户 Uin */
  Uin?: string;
  /** 租户昵称 */
  NickName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSkillScanResultRequest {
  /** ZIP 文件的 SHA256 Hash参数格式：sha256: */
  ContentHash: string;
  /** 指定引擎版本号取值参考：由 CreateSkillScan 接口返回 */
  EngineVersion: number;
  /** 报告签名地址有效期单位：小时默认值：8760（1年）补充说明：对返回的 ReportURL 生效 */
  ReportURLExpireHours?: number;
}

declare interface DescribeSkillScanResultResponse {
  /** 检测状态枚举值：SUCCESS：检测完成，有结果SCANNING：检测进行中NOT_FOUND：无检测记录FAILED：检测失败 */
  Status?: string;
  /** 检测结果详情。Status=SUCCESS 时大部分字段有值；Status=SCANNING 时仅包含 ContentHash 和 CreatedAt；Status=FAILED 时仅包含 ContentHash、FailedAt 和 Message；Status=NOT_FOUND 时仅包含 ContentHash */
  Data?: SkillScanItem;
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

declare interface DescribeUserDspmInfoListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeUserDspmInfoListResponse {
  /** 账号dspm信息列表 */
  List?: UserDspmInfo[];
  /** 已勾选数据库资产总数 */
  SelectedAssetNum?: number;
  /** 账号总数 */
  Count?: number;
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

declare interface DownloadDspmExportLogRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 要下载的导出任务ID */
  TaskId?: number;
}

declare interface DownloadDspmExportLogResponse {
  /** 下载URL */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAILinkSettingRequest {
  /** 0 关闭AI-Link智链引擎，1 开启AI-Link智链引擎 */
  AILinkEnable: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 深度模式 0-关闭 1-开启 */
  RuleScopeDeep?: number;
  /** 均衡模式 0-关闭 1-开启 */
  RuleScopeBalanced?: number;
  /** 精准模式 0-关闭 1-开启 */
  RuleScopePrecise?: number;
  /** 1 全部专业/旗舰版主机，0 自选主机列表 */
  Scope?: number;
  /** 自选主机Quuid列表（Scope=0时必填） */
  Quuids?: string[];
  /** 排除主机Quuid列表（Scope=1时生效） */
  ExcludeQuuids?: string[];
  /** 新增资产自动包含 0 不包含 1包含 */
  AutoInclude?: number;
}

declare interface ModifyAILinkSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmRiskStatusRequest {
  /** 告警或者风险id */
  AlarmRiskIdSet: CosAlarmRiskIdInfo[];
  /** 风险或告警状态 1 告警 2风险 */
  AlarmRiskType: number;
  /** 处置状态 */
  HandleStatus: number;
}

declare interface ModifyAlarmRiskStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCosAuditMonitorAccountRequest {
  /** 资源id */
  ResourceId: string;
  /** 需要监测的appid信息 */
  MonitorAppIdSet?: number[];
  /** 选择存储桶映射关系 */
  BindBucket?: CosBucketId[];
}

declare interface ModifyCosAuditMonitorAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCosAuditObjectIdentifyStatusRequest {
  /** 资源id */
  ResourceId: string;
  /** 文本识别状态 */
  TextIdentifyStatus: number;
  /** 图片识别状态 */
  ImageIdentifyStatus: number;
}

declare interface ModifyCosAuditObjectIdentifyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCosAuditObjectSampleRateRequest {
  /** 存储桶资产id集合 */
  BucketIdSet: number[];
  /** 采样率集合 */
  SampleRateSet: number[];
}

declare interface ModifyCosAuditObjectSampleRateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCosMarkInfoRequest {
  /** 需要修改的存储桶列表 */
  BucketNameSet: CosBucketInfo[];
  /** 备注信息 */
  MarkInfo: string;
}

declare interface ModifyCosMarkInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmAccessRecordRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 来源ip */
  Id?: DspmAccessRecordId[];
  /** 视图。ip或instance */
  View?: string;
  /** 阅读标记。 1-已阅 */
  Noted?: number;
}

declare interface ModifyDspmAccessRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmApplyingIdentifyComplianceGroupRequest {
  /** 识别模板id */
  ComplianceId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyDspmApplyingIdentifyComplianceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmApproveStatusRequest {
  /** 申请单id */
  OrderId: string;
  /** 状态。1-通过 2-拒绝 */
  Status: number;
  /** 审批信息 */
  Comment?: string;
}

declare interface ModifyDspmApproveStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmAssetAccountPrivilegesRequest {
  /** 实例id */
  AssetId: string;
  /** 账号名 */
  Account: string;
  /** 权限信息 */
  Privilege?: DspmDbAccountPrivilege;
  /** 主机地址 */
  Host?: string;
  /** 风险id */
  RiskId?: string;
}

declare interface ModifyDspmAssetAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmAssetAccountRequest {
  /** 实例id */
  AssetId: string;
  /** 账号名 */
  Account: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 主机地址 */
  Host?: string;
  /** 账号类型 */
  AccountType?: number;
  /** 备注 */
  Remark?: string;
  /** 风险id */
  RiskId?: string;
}

declare interface ModifyDspmAssetAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmAssetDataScanTaskRequest {
  /** 实例id */
  AssetIds: string[];
  /** 是否定时任务 */
  IsScheduled: boolean;
  /** 是否同意一键授权 */
  IsAgreeAuth: boolean;
  /** 是否立即执行 */
  IsRunAtOnce: boolean;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 调度周期配置 */
  ScheduleConfig?: DspmScheduleConfig;
}

declare interface ModifyDspmAssetDataScanTaskResponse {
  /** 识别任务id集合 */
  TaskIdSet?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmAssetDataScanTaskStatusRequest {
  /** 任务ID */
  TaskIds: number[];
  /** 任务状态枚举值：1： 识别中2： 识别终止3： 识别成功4： 识别失败5： 暂停0： 未识别 */
  Status: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyDspmAssetDataScanTaskStatusResponse {
  /** 无 */
  DataSet?: DspmAssetIdentifyTaskStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmAssetLogDeliverySwitchRequest {
  /** 实例id */
  AssetId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 开关。1-打开 0-关闭 */
  Enable?: number;
}

declare interface ModifyDspmAssetLogDeliverySwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmAssetSecurityAnalysisSwitchRequest {
  /** 实例信息 */
  Instances: DspmAssetInstance[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 开关。1-打开 0-关闭 */
  Enable?: number;
}

declare interface ModifyDspmAssetSecurityAnalysisSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmBackupSettingRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 备份日志保留时长 */
  BackupLogSaveTime?: number;
  /** 恢复日志保留时长 */
  RestoreLogSaveTime?: number;
  /** 日志最大生命周期限制 */
  LogMaxSaveTime?: number;
  /** 在线日志最大天数限制 */
  OnlineLogMaxSaveTime?: number;
}

declare interface ModifyDspmBackupSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyCategoryRequest {
  /** 分类ID */
  Id: number;
  /** 分类名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyDspmIdentifyCategoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyComplianceGroupRequest {
  /** 识别模板ID */
  Id: number;
  /** 识别模板名称 */
  Name?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 描述 */
  Description?: string;
  /** 状态枚举值：0： 未启用1： 启用 */
  Status?: number;
}

declare interface ModifyDspmIdentifyComplianceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyComplianceGroupStatusRequest {
  /** 识别模板ID */
  Id: number;
  /** 启用状态枚举值：0： 不启用1： 启用 */
  Status: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyDspmIdentifyComplianceGroupStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyComplianceRuleLevelInfoRequest {
  /** 识别模板ID */
  ComplianceId: number;
  /** 数据项id */
  RuleId: number;
  /** 级别项id */
  LevelId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyDspmIdentifyComplianceRuleLevelInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyInfoRequest {
  /** 对象。uin或person id */
  Subject: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyDspmIdentifyInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyLevelGroupRequest {
  /** 级别组id */
  Id: number;
  /** 级别组名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 级别组描述 */
  Description?: string;
  /** 级别信息 */
  LevelItems?: DspmIdentifyLevelItem[];
}

declare interface ModifyDspmIdentifyLevelGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyLevelItemRequest {
  /** 级别组id */
  Id: number;
  /** 级别组名称 */
  Name?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 敏感程度分取值范围：[1, 10]单位：敏感程度 */
  LevelScore?: number;
}

declare interface ModifyDspmIdentifyLevelItemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyRuleRequest {
  /** 数据项id */
  Id: number;
  /** 数据项名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 数据项描述 */
  Description?: string;
  /** 数据项启用状态枚举值：0： 未启用1： 启用 */
  Status?: number;
  /** 结构化规则 */
  StructuredRule?: string;
  /** 非结构化规则 */
  UnStructuredRule?: string;
}

declare interface ModifyDspmIdentifyRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIdentifyRuleStatusRequest {
  /** 数据项id */
  Ids: number[];
  /** 数据项状态枚举值：0： 关闭1： 开启 */
  Status: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyDspmIdentifyRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmIpInfoRequest {
  /** ip地址 */
  Ip: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 备注 */
  Remark?: string;
}

declare interface ModifyDspmIpInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmPersonalIdentifyRequest {
  /** 身份id */
  PersonId: string;
  /** 手机号 */
  Phone?: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyDspmPersonalIdentifyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmRestoreLogTaskRequest {
  /** 备份日志Id */
  Id: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyDspmRestoreLogTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmRiskInfoRequest {
  /** 风险id */
  RiskId: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 风险状态 2-已忽略 */
  Status?: number;
}

declare interface ModifyDspmRiskInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmRiskStrategyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 风险策略类型 */
  StrategyType?: string;
  /** 是否启用 */
  IsEnabled?: number;
  /** 策略内容，如：{ ThresholdValue: "100" } */
  Rule?: string;
  /** 可选值：Info/Low/Medium/High */
  RiskLevel?: string;
  /** 策略id */
  StrategyId?: number[];
}

declare interface ModifyDspmRiskStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDspmWhitelistStrategyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 白名单id */
  WhitelistStrategyId?: string;
  /** 白名单名 */
  Name?: string;
  /** 规则 */
  Rule?: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyDspmWhitelistStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEDRRuleRequest {
  /** 策略类型 / Rule Type: 0-系统策略/System Rule, 1-自定义策略/Custom Rule */
  RuleType: number;
  /** 执行动作 / Action: 0-告警/Alert, 1-放行/Allow, 2-告警并拦截/Alert and Block */
  AlertAction: number;
  /** 生效资产 / Effective Scope: 0-指定主机/Specified Hosts, 1-全部主机/All Hosts, 2-专业版/Professional, 3-旗舰版/Flagship, 4-专业版+旗舰版/Professional+Flagship QUUIDS []string json:"QUUIDS" // 主机列表 / Host QUUIDS (when Scope=0) */
  CWPScope: number;
  /** 容器生效镜像范围 / Container Image Scope: 0-指定镜像/Specified Images, 1-全部镜像/All Images */
  TCSSScope: number;
  /** 开关 / Status: 0-开启/Enabled, 1-关闭/Disabled */
  Status: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 策略名称 */
  Name?: string;
  /** 内容类型 / Content Type: md5-文件MD5/File MD5, cmdline-命令行/Command Line, dns-DNS, ip_inbound-入站IP/Inbound IP, ip_outbound-出站IP/Outbound IP, custom_file-自定义文件/Custom File, process_network-进程网络/Process Network */
  ContentType?: string;
  /** 告警等级 / Alert Level: 1-高危/High, 2-中危/Medium, 3-低危/Low, 4-提示/Reminder */
  Level?: number;
  /** 检测模式 / Detect Mode: 0-精准/Precise, 1-均衡/Balanced, 2-深度/Deep */
  DetectMode?: number;
  /** 攻击阶段 */
  AttackStage?: string;
  /** 策略 */
  RuleID?: string;
  /** 策略描述 */
  Description?: string;
  /** 处理历史告警 / Handle Old Events: 0-否/No, 1-是/Yes */
  DealOldEvents?: number;
  /** ContentType=md5 时传入的 MD5 列表 */
  Md5List?: string[];
  /** ContentType=custom_file 时传入的文件名列表(Base64编码) */
  FileName?: string[];
  /** ContentType=custom_file 时传入的文件目录列表(Base64编码) */
  FileDirectory?: string[];
  /** ContentType=cmdline 时传入的命令行规则，Process/PProcess/AProcess 的 Exe/Cmdline 字段需要 Base64 编码 */
  CmdLineRules?: RuleContentCmdLine;
  /** ContentType=dns 时传入的域名列表(Base64编码) */
  Domains?: string[];
  /** ContentType=ip_outbound 时传入的出站IP列表(Base64编码) */
  OutboundIP?: string[];
  /** ContentType=ip_inbound 时传入的入站IP列表(Base64编码) */
  InboundIP?: string[];
  /** 镜像ID列表 / Image IDs (when TCSSScope=0) */
  ImageIDs?: string[];
  /** ContentType=process_network 时传入的进程网络规则 */
  ProcessNetworkRules?: RuleContentProcessNetwork;
  /** 选择的多账号的APPID */
  TargetAppIDs?: number[];
  /** 告警的加白目标机器信息 */
  Target?: EdrAlertTarget;
  /** 自选资产对应的实例ID和APPID */
  InstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 全选资产排除的实例ID和APPID */
  ExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
}

declare interface ModifyEDRRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEdrAlertPermanentIgnoreRequest {
  /** 告警定位列表（支持跨账号），最多500条 */
  Targets: EdrAlertTargetForIgnore[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyEdrAlertPermanentIgnoreResponse {
  /** 成功忽略的告警数 */
  IgnoredCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIaCTokenPeriodRequest {
  /** ID */
  Id: number;
  /** 扫描结果存储周期 */
  Period: number;
}

declare interface ModifyIaCTokenPeriodResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMachineRemarkRequest {
  /** 实例ID */
  InstanceId: string;
  /** 备注信息 */
  Remark: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyMachineRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNotifyAssetConfigRequest {
  /** 资产范围配置 */
  Items?: NotifyAssetConfigItem[];
}

declare interface ModifyNotifyAssetConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNotifySettingAlertRequest {
  /** 通知配置 */
  Settings: NotifySetting[];
}

declare interface ModifyNotifySettingAlertResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNotifySettingRequest {
  /** 通知模块枚举值：AkSk： 云API风险治理Alert： 告警中心Agent： 客户端 */
  Module?: string;
  /** 通知设置模式枚举值：0： 标准模式1： 高级模式 */
  Mode?: number;
  /** 通知状态枚举值：0： 通知关闭1： 通知开启 */
  Status?: number;
  /** 通知开始时间参数格式：hh:mm:ss */
  BeginTime?: string;
  /** 通知结束时间参数格式：hh:mm:ss */
  EndTime?: string;
  /** 通知选项枚举值：CRITICAL： 告警等级：严重HIGH： 告警等级：高危MEDIUM： 告警等级：中危LOW： 告警等级：低危INFO： 告警等级：提醒AGENT_UNINSTALL： 客户端卸载AGENT_OFFLINE： 客户端离线 */
  Option?: string[];
}

declare interface ModifyNotifySettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOrganizationAccountStatusRequest {
  /** 修改集团账号状态，1 开启， 0关闭 */
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

declare interface ModifyPolicyStatusRequest {
  /** 策略id集合 */
  PolicyIdSet: number[];
  /** 状态值 */
  Status: number;
}

declare interface ModifyPolicyStatusResponse {
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

declare interface ResetDspmAssetAccountPasswordRequest {
  /** 实例id */
  AssetId: string;
  /** 账号名 */
  Account: string;
  /** 主机地址 */
  Host?: string;
  /** 风险id */
  RiskId?: string;
}

declare interface ResetDspmAssetAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryDspmExportLogRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 任务ID */
  TaskId?: number;
}

declare interface RetryDspmExportLogResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevertDspmAssetAccountRequest {
  /** 实例id */
  AssetId: string;
  /** 账号名 */
  Account: string;
  /** 主机地址 */
  Host?: string;
  /** 是否回退权限 */
  PrivilegeFlag?: number;
  /** 是否回退密码 */
  PasswordFlag?: number;
  /** 风险id */
  RiskId?: string;
}

declare interface RevertDspmAssetAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendDspmAssetLoginSmsCodeRequest {
  /** 个人id */
  PersonId: string;
  /** 数据库资产id */
  AssetId: string;
  /** 主机。默认'%' */
  Host?: string;
}

declare interface SendDspmAssetLoginSmsCodeResponse {
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

declare interface SyncDspmAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface SyncDspmAssetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncDspmUsersRequest {
}

declare interface SyncDspmUsersResponse {
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

declare interface VerifyDspmAssetLoginCodeRequest {
  /** 个人id */
  PersonId: string;
  /** 数据库资产id */
  AssetId: string;
  /** 验证码 */
  Code: string;
  /** 主机。默认'%' */
  Host?: string;
}

declare interface VerifyDspmAssetLoginCodeResponse {
  /** 账号 */
  Account?: string;
  /** 密码信息 */
  Password?: string;
  /** 有效期开始时间 */
  ValidateStart?: string;
  /** 有效期结束时间 */
  ValidateEnd?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Csip 云安全一体化平台} */
declare interface Csip {
  (): Versions;
  /** 添加资产管理员 {@link AddDspmAssetManagerRequest} {@link AddDspmAssetManagerResponse} */
  AddDspmAssetManager(data: AddDspmAssetManagerRequest, config?: AxiosRequestConfig): AxiosPromise<AddDspmAssetManagerResponse>;
  /** csip角色授权绑定接口 {@link AddNewBindRoleUserRequest} {@link AddNewBindRoleUserResponse} */
  AddNewBindRoleUser(data?: AddNewBindRoleUserRequest, config?: AxiosRequestConfig): AxiosPromise<AddNewBindRoleUserResponse>;
  /** 发起访问密钥的检测任务 {@link CreateAccessKeyCheckTaskRequest} {@link CreateAccessKeyCheckTaskResponse} */
  CreateAccessKeyCheckTask(data?: CreateAccessKeyCheckTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessKeyCheckTaskResponse>;
  /** 创建访问密钥的资产同步任务 {@link CreateAccessKeySyncTaskRequest} {@link CreateAccessKeySyncTaskResponse} */
  CreateAccessKeySyncTask(data?: CreateAccessKeySyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessKeySyncTaskResponse>;
  /** 创建对象存储资产同步任务 {@link CreateCosAssetSyncTaskRequest} {@link CreateCosAssetSyncTaskResponse} */
  CreateCosAssetSyncTask(data?: CreateCosAssetSyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosAssetSyncTaskResponse>;
  /** 创建cos文件内容扫描任务 {@link CreateCosObjectScanTaskRequest} {@link CreateCosObjectScanTaskResponse} */
  CreateCosObjectScanTask(data: CreateCosObjectScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosObjectScanTaskResponse>;
  /** 创建cos策略 {@link CreateCosPolicyRequest} {@link CreateCosPolicyResponse} */
  CreateCosPolicy(data: CreateCosPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosPolicyResponse>;
  /** 创建对象存储风险监测任务 {@link CreateCosRiskScanTaskRequest} {@link CreateCosRiskScanTaskResponse} */
  CreateCosRiskScanTask(data?: CreateCosRiskScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosRiskScanTaskResponse>;
  /** 创建域名、ip相关信息 {@link CreateDomainAndIpRequest} {@link CreateDomainAndIpResponse} */
  CreateDomainAndIp(data: CreateDomainAndIpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainAndIpResponse>;
  /** 创建Dspm访问记录导出任务 {@link CreateDspmAccessExportJobRequest} {@link CreateDspmAccessExportJobResponse} */
  CreateDspmAccessExportJob(data?: CreateDspmAccessExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmAccessExportJobResponse>;
  /** 创建Dspm申请单 {@link CreateDspmApplyOrderRequest} {@link CreateDspmApplyOrderResponse} */
  CreateDspmApplyOrder(data: CreateDspmApplyOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmApplyOrderResponse>;
  /** 创建Dspm审批历史导出任务 {@link CreateDspmApproveHistoryExportJobRequest} {@link CreateDspmApproveHistoryExportJobResponse} */
  CreateDspmApproveHistoryExportJob(data?: CreateDspmApproveHistoryExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmApproveHistoryExportJobResponse>;
  /** 创建Dspm资产访问拓扑导出任务 {@link CreateDspmAssetAccessTopologyExportJobRequest} {@link CreateDspmAssetAccessTopologyExportJobResponse} */
  CreateDspmAssetAccessTopologyExportJob(data?: CreateDspmAssetAccessTopologyExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmAssetAccessTopologyExportJobResponse>;
  /** 创建Dspm资产数据识别结果导出任务 {@link CreateDspmAssetIdentifyInfoExportJobRequest} {@link CreateDspmAssetIdentifyInfoExportJobResponse} */
  CreateDspmAssetIdentifyInfoExportJob(data: CreateDspmAssetIdentifyInfoExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmAssetIdentifyInfoExportJobResponse>;
  /** 创建Dspm资产列表导出任务 {@link CreateDspmAssetsExportJobRequest} {@link CreateDspmAssetsExportJobResponse} */
  CreateDspmAssetsExportJob(data?: CreateDspmAssetsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmAssetsExportJobResponse>;
  /** 创建日志导出任务 {@link CreateDspmExportTaskRequest} {@link CreateDspmExportTaskResponse} */
  CreateDspmExportTask(data?: CreateDspmExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmExportTaskResponse>;
  /** 创建dspm数据识别分类 {@link CreateDspmIdentifyCategoryRequest} {@link CreateDspmIdentifyCategoryResponse} */
  CreateDspmIdentifyCategory(data: CreateDspmIdentifyCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyCategoryResponse>;
  /** 创建dspm数据识别模板分类关联 {@link CreateDspmIdentifyComplianceCategoryRelationRequest} {@link CreateDspmIdentifyComplianceCategoryRelationResponse} */
  CreateDspmIdentifyComplianceCategoryRelation(data: CreateDspmIdentifyComplianceCategoryRelationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyComplianceCategoryRelationResponse>;
  /** 创建dspm数据识别模板 {@link CreateDspmIdentifyComplianceGroupRequest} {@link CreateDspmIdentifyComplianceGroupResponse} */
  CreateDspmIdentifyComplianceGroup(data: CreateDspmIdentifyComplianceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyComplianceGroupResponse>;
  /** 复制dspm数据识别模板 {@link CreateDspmIdentifyComplianceGroupCopyRequest} {@link CreateDspmIdentifyComplianceGroupCopyResponse} */
  CreateDspmIdentifyComplianceGroupCopy(data: CreateDspmIdentifyComplianceGroupCopyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyComplianceGroupCopyResponse>;
  /** 创建dspm数据识别模板数据项关联 {@link CreateDspmIdentifyComplianceRuleRelationRequest} {@link CreateDspmIdentifyComplianceRuleRelationResponse} */
  CreateDspmIdentifyComplianceRuleRelation(data: CreateDspmIdentifyComplianceRuleRelationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyComplianceRuleRelationResponse>;
  /** 创建Dspm身份列表导出任务 {@link CreateDspmIdentifyInfoListExportJobRequest} {@link CreateDspmIdentifyInfoListExportJobResponse} */
  CreateDspmIdentifyInfoListExportJob(data?: CreateDspmIdentifyInfoListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyInfoListExportJobResponse>;
  /** 创建dspm数据识别分级组 {@link CreateDspmIdentifyLevelGroupRequest} {@link CreateDspmIdentifyLevelGroupResponse} */
  CreateDspmIdentifyLevelGroup(data: CreateDspmIdentifyLevelGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyLevelGroupResponse>;
  /** 创建dspm数据识别数据项 {@link CreateDspmIdentifyRuleRequest} {@link CreateDspmIdentifyRuleResponse} */
  CreateDspmIdentifyRule(data: CreateDspmIdentifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmIdentifyRuleResponse>;
  /** 创建Dspm个人身份 {@link CreateDspmPersonalIdentifyRequest} {@link CreateDspmPersonalIdentifyResponse} */
  CreateDspmPersonalIdentify(data: CreateDspmPersonalIdentifyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmPersonalIdentifyResponse>;
  /** 创建Dspm风险导出任务 {@link CreateDspmRiskExportJobRequest} {@link CreateDspmRiskExportJobResponse} */
  CreateDspmRiskExportJob(data?: CreateDspmRiskExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmRiskExportJobResponse>;
  /** 创建Dspm白名单策略 {@link CreateDspmWhitelistStrategyRequest} {@link CreateDspmWhitelistStrategyResponse} */
  CreateDspmWhitelistStrategy(data: CreateDspmWhitelistStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmWhitelistStrategyResponse>;
  /** 创建IaC检测接入Token {@link CreateIaCAccessTokenRequest} {@link CreateIaCAccessTokenResponse} */
  CreateIaCAccessToken(data: CreateIaCAccessTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIaCAccessTokenResponse>;
  /** 创建IaC检测文件导出任务 {@link CreateIaCFileExportJobRequest} {@link CreateIaCFileExportJobResponse} */
  CreateIaCFileExportJob(data?: CreateIaCFileExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIaCFileExportJobResponse>;
  /** 创建IaC检测文件重新扫描任务 {@link CreateIaCFileReScanTaskRequest} {@link CreateIaCFileReScanTaskResponse} */
  CreateIaCFileReScanTask(data: CreateIaCFileReScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIaCFileReScanTaskResponse>;
  /** 创建风险中心扫描任务 {@link CreateRiskCenterScanTaskRequest} {@link CreateRiskCenterScanTaskResponse} */
  CreateRiskCenterScanTask(data: CreateRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRiskCenterScanTaskResponse>;
  /** 上传 Skill 触发安全检测 {@link CreateSkillScanRequest} {@link CreateSkillScanResponse} */
  CreateSkillScan(data: CreateSkillScanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSkillScanResponse>;
  /** 删除cosak资产 {@link DeleteCosAkAssetRequest} {@link DeleteCosAkAssetResponse} */
  DeleteCosAkAsset(data: DeleteCosAkAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCosAkAssetResponse>;
  /** 删除cos策略 {@link DeleteCosPolicyRequest} {@link DeleteCosPolicyResponse} */
  DeleteCosPolicy(data?: DeleteCosPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCosPolicyResponse>;
  /** 删除域名和ip请求 {@link DeleteDomainAndIpRequest} {@link DeleteDomainAndIpResponse} */
  DeleteDomainAndIp(data?: DeleteDomainAndIpRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainAndIpResponse>;
  /** 删除Dspm申请单 {@link DeleteDspmApplyOrderRequest} {@link DeleteDspmApplyOrderResponse} */
  DeleteDspmApplyOrder(data?: DeleteDspmApplyOrderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmApplyOrderResponse>;
  /** 删除Dspm资产账号 {@link DeleteDspmAssetAccountRequest} {@link DeleteDspmAssetAccountResponse} */
  DeleteDspmAssetAccount(data: DeleteDspmAssetAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmAssetAccountResponse>;
  /** 删除备份日志 {@link DeleteDspmBackupLogListRequest} {@link DeleteDspmBackupLogListResponse} */
  DeleteDspmBackupLogList(data: DeleteDspmBackupLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmBackupLogListResponse>;
  /** 删除导出任务 {@link DeleteDspmExportTaskRequest} {@link DeleteDspmExportTaskResponse} */
  DeleteDspmExportTask(data?: DeleteDspmExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmExportTaskResponse>;
  /** 删除dspm数据识别分类 {@link DeleteDspmIdentifyCategoryRequest} {@link DeleteDspmIdentifyCategoryResponse} */
  DeleteDspmIdentifyCategory(data: DeleteDspmIdentifyCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmIdentifyCategoryResponse>;
  /** 删除dspm数据识别模板分类关联 {@link DeleteDspmIdentifyComplianceCategoryRelationRequest} {@link DeleteDspmIdentifyComplianceCategoryRelationResponse} */
  DeleteDspmIdentifyComplianceCategoryRelation(data: DeleteDspmIdentifyComplianceCategoryRelationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmIdentifyComplianceCategoryRelationResponse>;
  /** 删除dspm数据识别模板 {@link DeleteDspmIdentifyComplianceGroupRequest} {@link DeleteDspmIdentifyComplianceGroupResponse} */
  DeleteDspmIdentifyComplianceGroup(data: DeleteDspmIdentifyComplianceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmIdentifyComplianceGroupResponse>;
  /** 删除dspm数据识别模板数据项关联 {@link DeleteDspmIdentifyComplianceRuleRelationRequest} {@link DeleteDspmIdentifyComplianceRuleRelationResponse} */
  DeleteDspmIdentifyComplianceRuleRelation(data: DeleteDspmIdentifyComplianceRuleRelationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmIdentifyComplianceRuleRelationResponse>;
  /** 删除dspm数据识别分级组 {@link DeleteDspmIdentifyLevelGroupRequest} {@link DeleteDspmIdentifyLevelGroupResponse} */
  DeleteDspmIdentifyLevelGroup(data: DeleteDspmIdentifyLevelGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmIdentifyLevelGroupResponse>;
  /** 删除dspm数据识别数据项 {@link DeleteDspmIdentifyRuleRequest} {@link DeleteDspmIdentifyRuleResponse} */
  DeleteDspmIdentifyRule(data: DeleteDspmIdentifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmIdentifyRuleResponse>;
  /** 删除Dspm个人身份 {@link DeleteDspmPersonalIdentifyRequest} {@link DeleteDspmPersonalIdentifyResponse} */
  DeleteDspmPersonalIdentify(data: DeleteDspmPersonalIdentifyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmPersonalIdentifyResponse>;
  /** 删除恢复日志 {@link DeleteDspmRestoreLogListRequest} {@link DeleteDspmRestoreLogListResponse} */
  DeleteDspmRestoreLogList(data: DeleteDspmRestoreLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmRestoreLogListResponse>;
  /** 删除Dspm白名单策略 {@link DeleteDspmWhitelistStrategyRequest} {@link DeleteDspmWhitelistStrategyResponse} */
  DeleteDspmWhitelistStrategy(data?: DeleteDspmWhitelistStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDspmWhitelistStrategyResponse>;
  /** 删除IaC检测接入Token {@link DeleteIaCAccessTokenRequest} {@link DeleteIaCAccessTokenResponse} */
  DeleteIaCAccessToken(data: DeleteIaCAccessTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIaCAccessTokenResponse>;
  /** 删除IaC检测文件 {@link DeleteIaCFileRequest} {@link DeleteIaCFileResponse} */
  DeleteIaCFile(data: DeleteIaCFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIaCFileResponse>;
  /** 删除风险中心扫描任务 {@link DeleteRiskScanTaskRequest} {@link DeleteRiskScanTaskResponse} */
  DeleteRiskScanTask(data: DeleteRiskScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskScanTaskResponse>;
  /** 获取 AI Agent 资产列表 {@link DescribeAIAgentAssetListRequest} {@link DescribeAIAgentAssetListResponse} */
  DescribeAIAgentAssetList(data?: DescribeAIAgentAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAgentAssetListResponse>;
  /** 查询AI-Link智链引擎配置 {@link DescribeAILinkSettingRequest} {@link DescribeAILinkSettingResponse} */
  DescribeAILinkSetting(data?: DescribeAILinkSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAILinkSettingResponse>;
  /** 获取访问密钥告警AI分析详情 {@link DescribeAKAnalysisDetailRequest} {@link DescribeAKAnalysisDetailResponse} */
  DescribeAKAnalysisDetail(data: DescribeAKAnalysisDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAKAnalysisDetailResponse>;
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
  /** 资产视角下的云资源配置风险 {@link DescribeAssetRiskListRequest} {@link DescribeAssetRiskListResponse} */
  DescribeAssetRiskList(data?: DescribeAssetRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetRiskListResponse>;
  /** 漏洞管理-资产视角的漏洞风险列表 {@link DescribeAssetViewVulRiskListRequest} {@link DescribeAssetViewVulRiskListResponse} */
  DescribeAssetViewVulRiskList(data?: DescribeAssetViewVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetViewVulRiskListResponse>;
  /** 查询是否绑定角色 {@link DescribeAssumeRoleRequest} {@link DescribeAssumeRoleResponse} */
  DescribeAssumeRole(data?: DescribeAssumeRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssumeRoleResponse>;
  /** 查看存储桶调用源ip列表 {@link DescribeBucketInvokeIpListRequest} {@link DescribeBucketInvokeIpListResponse} */
  DescribeBucketInvokeIpList(data: DescribeBucketInvokeIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBucketInvokeIpListResponse>;
  /** 云防资产中心统计数据 {@link DescribeCFWAssetStatisticsRequest} {@link DescribeCFWAssetStatisticsResponse} */
  DescribeCFWAssetStatistics(data?: DescribeCFWAssetStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCFWAssetStatisticsResponse>;
  /** 获取日志索引信息v3 {@link DescribeCLSLogIndexV3Request} {@link DescribeCLSLogIndexV3Response} */
  DescribeCLSLogIndexV3(data: DescribeCLSLogIndexV3Request, config?: AxiosRequestConfig): AxiosPromise<DescribeCLSLogIndexV3Response>;
  /** 日志分析cls日志检索v3 {@link DescribeCLSLogListV3Request} {@link DescribeCLSLogListV3Response} */
  DescribeCLSLogListV3(data: DescribeCLSLogListV3Request, config?: AxiosRequestConfig): AxiosPromise<DescribeCLSLogListV3Response>;
  /** 资产风险概览统计接口 {@link DescribeCSIPRiskStatisticsRequest} {@link DescribeCSIPRiskStatisticsResponse} */
  DescribeCSIPRiskStatistics(data?: DescribeCSIPRiskStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCSIPRiskStatisticsResponse>;
  /** cvm详情 {@link DescribeCVMAssetInfoRequest} {@link DescribeCVMAssetInfoResponse} */
  DescribeCVMAssetInfo(data: DescribeCVMAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetInfoResponse>;
  /** cvm列表 {@link DescribeCVMAssetsRequest} {@link DescribeCVMAssetsResponse} */
  DescribeCVMAssets(data?: DescribeCVMAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetsResponse>;
  /** 查询主机详情 {@link DescribeCWPMachineDetailRequest} {@link DescribeCWPMachineDetailResponse} */
  DescribeCWPMachineDetail(data?: DescribeCWPMachineDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPMachineDetailResponse>;
  /** 查询主机列表 {@link DescribeCWPMachinesRequest} {@link DescribeCWPMachinesResponse} */
  DescribeCWPMachines(data?: DescribeCWPMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPMachinesResponse>;
  /** 获取调用记录 {@link DescribeCallRecordRequest} {@link DescribeCallRecordResponse} */
  DescribeCallRecord(data?: DescribeCallRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallRecordResponse>;
  /** 检查项视角云资源配置风险 {@link DescribeCheckViewRisksRequest} {@link DescribeCheckViewRisksResponse} */
  DescribeCheckViewRisks(data?: DescribeCheckViewRisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckViewRisksResponse>;
  /** 集群列表 {@link DescribeClusterAssetsRequest} {@link DescribeClusterAssetsResponse} */
  DescribeClusterAssets(data?: DescribeClusterAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAssetsResponse>;
  /** 集群pod列表 {@link DescribeClusterPodAssetsRequest} {@link DescribeClusterPodAssetsResponse} */
  DescribeClusterPodAssets(data?: DescribeClusterPodAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPodAssetsResponse>;
  /** 云资源配置风险规则列表 {@link DescribeConfigCheckRulesRequest} {@link DescribeConfigCheckRulesResponse} */
  DescribeConfigCheckRules(data?: DescribeConfigCheckRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigCheckRulesResponse>;
  /** 查看可访问权限列表 {@link DescribeCosAccessPermissionRequest} {@link DescribeCosAccessPermissionResponse} */
  DescribeCosAccessPermission(data: DescribeCosAccessPermissionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAccessPermissionResponse>;
  /** 访问权限列表 {@link DescribeCosAccessPermissionsRequest} {@link DescribeCosAccessPermissionsResponse} */
  DescribeCosAccessPermissions(data: DescribeCosAccessPermissionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAccessPermissionsResponse>;
  /** 查看cos操作名列表 {@link DescribeCosActionListRequest} {@link DescribeCosActionListResponse} */
  DescribeCosActionList(data?: DescribeCosActionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosActionListResponse>;
  /** 查看cos关联ak资产信息 {@link DescribeCosAkAssetRequest} {@link DescribeCosAkAssetResponse} */
  DescribeCosAkAsset(data?: DescribeCosAkAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAkAssetResponse>;
  /** 查看cos ak调用源ip列表 {@link DescribeCosAkInvokeIpListRequest} {@link DescribeCosAkInvokeIpListResponse} */
  DescribeCosAkInvokeIpList(data: DescribeCosAkInvokeIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAkInvokeIpListResponse>;
  /** 查看cos告警列表 {@link DescribeCosAlarmListRequest} {@link DescribeCosAlarmListResponse} */
  DescribeCosAlarmList(data?: DescribeCosAlarmListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAlarmListResponse>;
  /** 查看cos告警趋势图 {@link DescribeCosAlarmTrendDataRequest} {@link DescribeCosAlarmTrendDataResponse} */
  DescribeCosAlarmTrendData(data?: DescribeCosAlarmTrendDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAlarmTrendDataResponse>;
  /** 查看cos资产列表 {@link DescribeCosAssetRequest} {@link DescribeCosAssetResponse} */
  DescribeCosAsset(data: DescribeCosAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAssetResponse>;
  /** 查看对象存储资产同步任务 {@link DescribeCosAssetSyncTaskRequest} {@link DescribeCosAssetSyncTaskResponse} */
  DescribeCosAssetSyncTask(data?: DescribeCosAssetSyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAssetSyncTaskResponse>;
  /** 查看该appid下已购买的appid集合 {@link DescribeCosAuditAppIdListRequest} {@link DescribeCosAuditAppIdListResponse} */
  DescribeCosAuditAppIdList(data?: DescribeCosAuditAppIdListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAuditAppIdListResponse>;
  /** 查询cos审计字典信息列表 {@link DescribeCosAuditDictionaryListRequest} {@link DescribeCosAuditDictionaryListResponse} */
  DescribeCosAuditDictionaryList(data: DescribeCosAuditDictionaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAuditDictionaryListResponse>;
  /** 查看对象存储审计支付信息 {@link DescribeCosAuditPayInfoRequest} {@link DescribeCosAuditPayInfoResponse} */
  DescribeCosAuditPayInfo(data?: DescribeCosAuditPayInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosAuditPayInfoResponse>;
  /** 获取存储桶计费信息 {@link DescribeCosBucketBillingInfoRequest} {@link DescribeCosBucketBillingInfoResponse} */
  DescribeCosBucketBillingInfo(data?: DescribeCosBucketBillingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosBucketBillingInfoResponse>;
  /** 查询cos存储桶列表 {@link DescribeCosBucketListRequest} {@link DescribeCosBucketListResponse} */
  DescribeCosBucketList(data?: DescribeCosBucketListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosBucketListResponse>;
  /** 查看存储桶风险信息 {@link DescribeCosBucketRiskRequest} {@link DescribeCosBucketRiskResponse} */
  DescribeCosBucketRisk(data?: DescribeCosBucketRiskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosBucketRiskResponse>;
  /** 查询cos文件数据识别结果列表 {@link DescribeCosIdentifyFileListRequest} {@link DescribeCosIdentifyFileListResponse} */
  DescribeCosIdentifyFileList(data: DescribeCosIdentifyFileListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosIdentifyFileListResponse>;
  /** 查看cos调用ua {@link DescribeCosInvokeUaRequest} {@link DescribeCosInvokeUaResponse} */
  DescribeCosInvokeUa(data: DescribeCosInvokeUaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosInvokeUaResponse>;
  /** 查看调用记录日志 {@link DescribeCosIpInvokeLogRequest} {@link DescribeCosIpInvokeLogResponse} */
  DescribeCosIpInvokeLog(data: DescribeCosIpInvokeLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosIpInvokeLogResponse>;
  /** 查看cos调用记录文件列表 {@link DescribeCosIpInvokeRecordFileRequest} {@link DescribeCosIpInvokeRecordFileResponse} */
  DescribeCosIpInvokeRecordFile(data: DescribeCosIpInvokeRecordFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosIpInvokeRecordFileResponse>;
  /** 查看cos扫描任务状态 {@link DescribeCosObjectScanTaskRequest} {@link DescribeCosObjectScanTaskResponse} */
  DescribeCosObjectScanTask(data: DescribeCosObjectScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosObjectScanTaskResponse>;
  /** 查看cos统计概览 {@link DescribeCosOverviewRequest} {@link DescribeCosOverviewResponse} */
  DescribeCosOverview(data?: DescribeCosOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosOverviewResponse>;
  /** 告警策略列表 {@link DescribeCosPolicyRequest} {@link DescribeCosPolicyResponse} */
  DescribeCosPolicy(data?: DescribeCosPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosPolicyResponse>;
  /** 查看存储桶风险接口列表 {@link DescribeCosRiskActionListRequest} {@link DescribeCosRiskActionListResponse} */
  DescribeCosRiskActionList(data: DescribeCosRiskActionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosRiskActionListResponse>;
  /** 查看风险证据信息 {@link DescribeCosRiskEvidenceRequest} {@link DescribeCosRiskEvidenceResponse} */
  DescribeCosRiskEvidence(data: DescribeCosRiskEvidenceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosRiskEvidenceResponse>;
  /** 查看cos风险监测任务 {@link DescribeCosRiskScanTaskRequest} {@link DescribeCosRiskScanTaskResponse} */
  DescribeCosRiskScanTask(data?: DescribeCosRiskScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosRiskScanTaskResponse>;
  /** 查看角色可访问权限列表 {@link DescribeCosRoleAccessPermissionRequest} {@link DescribeCosRoleAccessPermissionResponse} */
  DescribeCosRoleAccessPermission(data: DescribeCosRoleAccessPermissionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosRoleAccessPermissionResponse>;
  /** 查看cos桶角色相关权限 {@link DescribeCosRoleAccessPermissionsRequest} {@link DescribeCosRoleAccessPermissionsResponse} */
  DescribeCosRoleAccessPermissions(data: DescribeCosRoleAccessPermissionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosRoleAccessPermissionsResponse>;
  /** 获取调用源ip列表 {@link DescribeCosSourceIpRequest} {@link DescribeCosSourceIpResponse} */
  DescribeCosSourceIp(data?: DescribeCosSourceIpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosSourceIpResponse>;
  /** db资产详情 {@link DescribeDbAssetInfoRequest} {@link DescribeDbAssetInfoResponse} */
  DescribeDbAssetInfo(data: DescribeDbAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetInfoResponse>;
  /** 数据库资产列表 {@link DescribeDbAssetsRequest} {@link DescribeDbAssetsResponse} */
  DescribeDbAssets(data?: DescribeDbAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetsResponse>;
  /** 域名列表 {@link DescribeDomainAssetsRequest} {@link DescribeDomainAssetsResponse} */
  DescribeDomainAssets(data?: DescribeDomainAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAssetsResponse>;
  /** 查询Dspm访问记录 {@link DescribeDspmAccessRecordRequest} {@link DescribeDspmAccessRecordResponse} */
  DescribeDspmAccessRecord(data?: DescribeDspmAccessRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAccessRecordResponse>;
  /** 查询Dspm访问拓扑账号列表 {@link DescribeDspmAccessTopologyAccountsRequest} {@link DescribeDspmAccessTopologyAccountsResponse} */
  DescribeDspmAccessTopologyAccounts(data?: DescribeDspmAccessTopologyAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAccessTopologyAccountsResponse>;
  /** 查询Dspm访问拓扑资产列表 {@link DescribeDspmAccessTopologyAssetsRequest} {@link DescribeDspmAccessTopologyAssetsResponse} */
  DescribeDspmAccessTopologyAssets(data?: DescribeDspmAccessTopologyAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAccessTopologyAssetsResponse>;
  /** 查询Dspm访问拓扑ip列表 {@link DescribeDspmAccessTopologyIpsRequest} {@link DescribeDspmAccessTopologyIpsResponse} */
  DescribeDspmAccessTopologyIps(data?: DescribeDspmAccessTopologyIpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAccessTopologyIpsResponse>;
  /** 查询Dspm申请历史 {@link DescribeDspmApplyHistoryRequest} {@link DescribeDspmApplyHistoryResponse} */
  DescribeDspmApplyHistory(data?: DescribeDspmApplyHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmApplyHistoryResponse>;
  /** 查询Dspm申请单列表 {@link DescribeDspmApplyOrderListRequest} {@link DescribeDspmApplyOrderListResponse} */
  DescribeDspmApplyOrderList(data?: DescribeDspmApplyOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmApplyOrderListResponse>;
  /** 查询Dspm审批历史 {@link DescribeDspmApproveHistoryRequest} {@link DescribeDspmApproveHistoryResponse} */
  DescribeDspmApproveHistory(data?: DescribeDspmApproveHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmApproveHistoryResponse>;
  /** 查询Dspm审批单列表 {@link DescribeDspmApproveOrderListRequest} {@link DescribeDspmApproveOrderListResponse} */
  DescribeDspmApproveOrderList(data?: DescribeDspmApproveOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmApproveOrderListResponse>;
  /** 查询Dspm资产访问拓扑 {@link DescribeDspmAssetAccessTopologyRequest} {@link DescribeDspmAssetAccessTopologyResponse} */
  DescribeDspmAssetAccessTopology(data?: DescribeDspmAssetAccessTopologyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetAccessTopologyResponse>;
  /** 查询Dspm资产账号身份信息 {@link DescribeDspmAssetAccountIdentifyRequest} {@link DescribeDspmAssetAccountIdentifyResponse} */
  DescribeDspmAssetAccountIdentify(data?: DescribeDspmAssetAccountIdentifyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetAccountIdentifyResponse>;
  /** 查询Dspm资产账号预设特权信息 {@link DescribeDspmAssetAccountPresetPrivilegesRequest} {@link DescribeDspmAssetAccountPresetPrivilegesResponse} */
  DescribeDspmAssetAccountPresetPrivileges(data?: DescribeDspmAssetAccountPresetPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetAccountPresetPrivilegesResponse>;
  /** 查询Dspm资产账号回收后特权信息 {@link DescribeDspmAssetAccountRecycledPrivilegesRequest} {@link DescribeDspmAssetAccountRecycledPrivilegesResponse} */
  DescribeDspmAssetAccountRecycledPrivileges(data?: DescribeDspmAssetAccountRecycledPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetAccountRecycledPrivilegesResponse>;
  /** 查询Dspm资产账号列表 {@link DescribeDspmAssetAccountsRequest} {@link DescribeDspmAssetAccountsResponse} */
  DescribeDspmAssetAccounts(data?: DescribeDspmAssetAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetAccountsResponse>;
  /** 查询dspm资产数据库信息列表 {@link DescribeDspmAssetDatabaseListRequest} {@link DescribeDspmAssetDatabaseListResponse} */
  DescribeDspmAssetDatabaseList(data: DescribeDspmAssetDatabaseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetDatabaseListResponse>;
  /** 查询Dspm资产数据库列表 {@link DescribeDspmAssetDatabasesRequest} {@link DescribeDspmAssetDatabasesResponse} */
  DescribeDspmAssetDatabases(data: DescribeDspmAssetDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetDatabasesResponse>;
  /** 查询dspm资产字段信息列表 {@link DescribeDspmAssetFieldListRequest} {@link DescribeDspmAssetFieldListResponse} */
  DescribeDspmAssetFieldList(data: DescribeDspmAssetFieldListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetFieldListResponse>;
  /** 查询dspm资产字段样本值 {@link DescribeDspmAssetFieldSamplesRequest} {@link DescribeDspmAssetFieldSamplesResponse} */
  DescribeDspmAssetFieldSamples(data: DescribeDspmAssetFieldSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetFieldSamplesResponse>;
  /** 查询dspm资产数据识别信息列表 {@link DescribeDspmAssetIdentifyInfoListRequest} {@link DescribeDspmAssetIdentifyInfoListResponse} */
  DescribeDspmAssetIdentifyInfoList(data?: DescribeDspmAssetIdentifyInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetIdentifyInfoListResponse>;
  /** 查询Dspm资产id列表 {@link DescribeDspmAssetIdsRequest} {@link DescribeDspmAssetIdsResponse} */
  DescribeDspmAssetIds(data?: DescribeDspmAssetIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetIdsResponse>;
  /** 查询Dspm资产登录凭据 {@link DescribeDspmAssetLoginCredentialRequest} {@link DescribeDspmAssetLoginCredentialResponse} */
  DescribeDspmAssetLoginCredential(data: DescribeDspmAssetLoginCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetLoginCredentialResponse>;
  /** 查询Dspm资产安全分析状态 {@link DescribeDspmAssetSecurityAnalyseStatusRequest} {@link DescribeDspmAssetSecurityAnalyseStatusResponse} */
  DescribeDspmAssetSecurityAnalyseStatus(data?: DescribeDspmAssetSecurityAnalyseStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetSecurityAnalyseStatusResponse>;
  /** 查询Dspm资产支持的权限 {@link DescribeDspmAssetSupportedPrivilegesRequest} {@link DescribeDspmAssetSupportedPrivilegesResponse} */
  DescribeDspmAssetSupportedPrivileges(data: DescribeDspmAssetSupportedPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetSupportedPrivilegesResponse>;
  /** 查询dspm资产表信息列表 {@link DescribeDspmAssetTableListRequest} {@link DescribeDspmAssetTableListResponse} */
  DescribeDspmAssetTableList(data: DescribeDspmAssetTableListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetTableListResponse>;
  /** 查询Dspm资产列表 {@link DescribeDspmAssetsRequest} {@link DescribeDspmAssetsResponse} */
  DescribeDspmAssets(data?: DescribeDspmAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmAssetsResponse>;
  /** 查询备份日志列表 {@link DescribeDspmBackupLogListRequest} {@link DescribeDspmBackupLogListResponse} */
  DescribeDspmBackupLogList(data: DescribeDspmBackupLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmBackupLogListResponse>;
  /** 查询日志备份配置 {@link DescribeDspmBackupSettingRequest} {@link DescribeDspmBackupSettingResponse} */
  DescribeDspmBackupSetting(data?: DescribeDspmBackupSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmBackupSettingResponse>;
  /** 查询dspm字典信息列表 {@link DescribeDspmDictionaryListRequest} {@link DescribeDspmDictionaryListResponse} */
  DescribeDspmDictionaryList(data: DescribeDspmDictionaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmDictionaryListResponse>;
  /** 查询导出任务 {@link DescribeDspmExportTaskRequest} {@link DescribeDspmExportTaskResponse} */
  DescribeDspmExportTask(data?: DescribeDspmExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmExportTaskResponse>;
  /** 查询dspm数据识别分类列表 {@link DescribeDspmIdentifyCategoryListRequest} {@link DescribeDspmIdentifyCategoryListResponse} */
  DescribeDspmIdentifyCategoryList(data?: DescribeDspmIdentifyCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyCategoryListResponse>;
  /** 查询dspm数据识别模板分类关联数据项列表 {@link DescribeDspmIdentifyComplianceCategoryRuleListRequest} {@link DescribeDspmIdentifyComplianceCategoryRuleListResponse} */
  DescribeDspmIdentifyComplianceCategoryRuleList(data: DescribeDspmIdentifyComplianceCategoryRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyComplianceCategoryRuleListResponse>;
  /** 查询dspm数据识别模板详情 {@link DescribeDspmIdentifyComplianceGroupDetailRequest} {@link DescribeDspmIdentifyComplianceGroupDetailResponse} */
  DescribeDspmIdentifyComplianceGroupDetail(data?: DescribeDspmIdentifyComplianceGroupDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyComplianceGroupDetailResponse>;
  /** 查询dspm数据识别模板列表 {@link DescribeDspmIdentifyComplianceGroupListRequest} {@link DescribeDspmIdentifyComplianceGroupListResponse} */
  DescribeDspmIdentifyComplianceGroupList(data?: DescribeDspmIdentifyComplianceGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyComplianceGroupListResponse>;
  /** 查询dspm数据识别分布统计 {@link DescribeDspmIdentifyDistributionStatisticsRequest} {@link DescribeDspmIdentifyDistributionStatisticsResponse} */
  DescribeDspmIdentifyDistributionStatistics(data: DescribeDspmIdentifyDistributionStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyDistributionStatisticsResponse>;
  /** 查询Dspm身份id列表 {@link DescribeDspmIdentifyIdListRequest} {@link DescribeDspmIdentifyIdListResponse} */
  DescribeDspmIdentifyIdList(data?: DescribeDspmIdentifyIdListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyIdListResponse>;
  /** 查询Dspm身份信息 {@link DescribeDspmIdentifyInfoRequest} {@link DescribeDspmIdentifyInfoResponse} */
  DescribeDspmIdentifyInfo(data?: DescribeDspmIdentifyInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyInfoResponse>;
  /** 查询Dspm身份信息列表 {@link DescribeDspmIdentifyInfoListRequest} {@link DescribeDspmIdentifyInfoListResponse} */
  DescribeDspmIdentifyInfoList(data?: DescribeDspmIdentifyInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyInfoListResponse>;
  /** 查询dspm数据识别分级组列表 {@link DescribeDspmIdentifyLevelGroupListRequest} {@link DescribeDspmIdentifyLevelGroupListResponse} */
  DescribeDspmIdentifyLevelGroupList(data?: DescribeDspmIdentifyLevelGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyLevelGroupListResponse>;
  /** 查询dspm数据识别数据项详情 {@link DescribeDspmIdentifyRuleDetailRequest} {@link DescribeDspmIdentifyRuleDetailResponse} */
  DescribeDspmIdentifyRuleDetail(data: DescribeDspmIdentifyRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyRuleDetailResponse>;
  /** 查询dspm数据识别数据项列表 {@link DescribeDspmIdentifyRuleListRequest} {@link DescribeDspmIdentifyRuleListResponse} */
  DescribeDspmIdentifyRuleList(data?: DescribeDspmIdentifyRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyRuleListResponse>;
  /** 查询dspm数据识别数据项验证结果 {@link DescribeDspmIdentifyRuleTestResultRequest} {@link DescribeDspmIdentifyRuleTestResultResponse} */
  DescribeDspmIdentifyRuleTestResult(data: DescribeDspmIdentifyRuleTestResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmIdentifyRuleTestResultResponse>;
  /** 日志列表信息 {@link DescribeDspmLogListRequest} {@link DescribeDspmLogListResponse} */
  DescribeDspmLogList(data?: DescribeDspmLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmLogListResponse>;
  /** 获取已购Dspm订单的信息 {@link DescribeDspmPayInfoRequest} {@link DescribeDspmPayInfoResponse} */
  DescribeDspmPayInfo(data?: DescribeDspmPayInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmPayInfoResponse>;
  /** 查询Dspm访客申请记录 {@link DescribeDspmPersonApplyHistoryRequest} {@link DescribeDspmPersonApplyHistoryResponse} */
  DescribeDspmPersonApplyHistory(data?: DescribeDspmPersonApplyHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmPersonApplyHistoryResponse>;
  /** 查询Dspm个人身份信息列表 {@link DescribeDspmPersonalIdentifyListRequest} {@link DescribeDspmPersonalIdentifyListResponse} */
  DescribeDspmPersonalIdentifyList(data?: DescribeDspmPersonalIdentifyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmPersonalIdentifyListResponse>;
  /** 查询Dspm风险记录 {@link DescribeDspmRiskRequest} {@link DescribeDspmRiskResponse} */
  DescribeDspmRisk(data?: DescribeDspmRiskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmRiskResponse>;
  /** 查询Dspm风险详情 {@link DescribeDspmRiskDetailRequest} {@link DescribeDspmRiskDetailResponse} */
  DescribeDspmRiskDetail(data?: DescribeDspmRiskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmRiskDetailResponse>;
  /** 查询Dspm风险策略 {@link DescribeDspmRiskStrategyRequest} {@link DescribeDspmRiskStrategyResponse} */
  DescribeDspmRiskStrategy(data?: DescribeDspmRiskStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmRiskStrategyResponse>;
  /** 查询Dspm风险分组策略 {@link DescribeDspmRiskStrategyGroupRequest} {@link DescribeDspmRiskStrategyGroupResponse} */
  DescribeDspmRiskStrategyGroup(data?: DescribeDspmRiskStrategyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmRiskStrategyGroupResponse>;
  /** 查询Dspm风险趋势 {@link DescribeDspmRiskTendencyRequest} {@link DescribeDspmRiskTendencyResponse} */
  DescribeDspmRiskTendency(data?: DescribeDspmRiskTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmRiskTendencyResponse>;
  /** 查询Dspm统计信息 {@link DescribeDspmStatisticsRequest} {@link DescribeDspmStatisticsResponse} */
  DescribeDspmStatistics(data?: DescribeDspmStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmStatisticsResponse>;
  /** 查询Dspm支持的资产类型信息 {@link DescribeDspmSupportedAssetTypeRequest} {@link DescribeDspmSupportedAssetTypeResponse} */
  DescribeDspmSupportedAssetType(data?: DescribeDspmSupportedAssetTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmSupportedAssetTypeResponse>;
  /** 查询Dspm同步资产状态 {@link DescribeDspmSyncAssetsStatusRequest} {@link DescribeDspmSyncAssetsStatusResponse} */
  DescribeDspmSyncAssetsStatus(data?: DescribeDspmSyncAssetsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmSyncAssetsStatusResponse>;
  /** 查询Dspm同步用户状态 {@link DescribeDspmSyncUsersStatusRequest} {@link DescribeDspmSyncUsersStatusResponse} */
  DescribeDspmSyncUsersStatus(data?: DescribeDspmSyncUsersStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmSyncUsersStatusResponse>;
  /** 查询Dspm白名单策略 {@link DescribeDspmWhitelistStrategyRequest} {@link DescribeDspmWhitelistStrategyResponse} */
  DescribeDspmWhitelistStrategy(data?: DescribeDspmWhitelistStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDspmWhitelistStrategyResponse>;
  /** 获取EDR策略列表 {@link DescribeEDRRuleListRequest} {@link DescribeEDRRuleListResponse} */
  DescribeEDRRuleList(data?: DescribeEDRRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEDRRuleListResponse>;
  /** 获取EDR告警详情 {@link DescribeEdrAlertInfoRequest} {@link DescribeEdrAlertInfoResponse} */
  DescribeEdrAlertInfo(data: DescribeEdrAlertInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertInfoResponse>;
  /** 获取EDR告警列表 {@link DescribeEdrAlertListRequest} {@link DescribeEdrAlertListResponse} */
  DescribeEdrAlertList(data?: DescribeEdrAlertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertListResponse>;
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
  /** 获取IaC检测文件列表 {@link DescribeIaCFileListRequest} {@link DescribeIaCFileListResponse} */
  DescribeIaCFileList(data?: DescribeIaCFileListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIaCFileListResponse>;
  /** 获取IaC检测文件概览 {@link DescribeIaCFileOverviewRequest} {@link DescribeIaCFileOverviewResponse} */
  DescribeIaCFileOverview(data?: DescribeIaCFileOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIaCFileOverviewResponse>;
  /** 获取IaC检测文件报告 {@link DescribeIaCFileReportRequest} {@link DescribeIaCFileReportResponse} */
  DescribeIaCFileReport(data: DescribeIaCFileReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIaCFileReportResponse>;
  /** 获取IaC检测接入Token列表 {@link DescribeIaCTokenListRequest} {@link DescribeIaCTokenListResponse} */
  DescribeIaCTokenList(data?: DescribeIaCTokenListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIaCTokenListResponse>;
  /** 查看ip调用记录详情 {@link DescribeIpInvokeRecordRequest} {@link DescribeIpInvokeRecordResponse} */
  DescribeIpInvokeRecord(data?: DescribeIpInvokeRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpInvokeRecordResponse>;
  /** 调用记录详情 {@link DescribeIpInvokeRecordDetailRequest} {@link DescribeIpInvokeRecordDetailResponse} */
  DescribeIpInvokeRecordDetail(data?: DescribeIpInvokeRecordDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpInvokeRecordDetailResponse>;
  /** 查询凭证详情 {@link DescribeKeySandboxCredentialRequest} {@link DescribeKeySandboxCredentialResponse} */
  DescribeKeySandboxCredential(data: DescribeKeySandboxCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeySandboxCredentialResponse>;
  /** 查询凭证列表 {@link DescribeKeySandboxCredentialListRequest} {@link DescribeKeySandboxCredentialListResponse} */
  DescribeKeySandboxCredentialList(data?: DescribeKeySandboxCredentialListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeySandboxCredentialListResponse>;
  /** 查询clb监听器列表 {@link DescribeListenerListRequest} {@link DescribeListenerListResponse} */
  DescribeListenerList(data?: DescribeListenerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerListResponse>;
  /** 网卡列表 {@link DescribeNICAssetsRequest} {@link DescribeNICAssetsResponse} */
  DescribeNICAssets(data?: DescribeNICAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNICAssetsResponse>;
  /** 获取通知资产范围配置 {@link DescribeNotifyAssetConfigRequest} {@link DescribeNotifyAssetConfigResponse} */
  DescribeNotifyAssetConfig(data?: DescribeNotifyAssetConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotifyAssetConfigResponse>;
  /** 获取通知设置 {@link DescribeNotifySettingRequest} {@link DescribeNotifySettingResponse} */
  DescribeNotifySetting(data?: DescribeNotifySettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotifySettingResponse>;
  /** 获取告警中心通知高级配置 {@link DescribeNotifySettingAlertRequest} {@link DescribeNotifySettingAlertResponse} */
  DescribeNotifySettingAlert(data?: DescribeNotifySettingAlertRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotifySettingAlertResponse>;
  /** 查询集团账号详情 {@link DescribeOrganizationInfoRequest} {@link DescribeOrganizationInfoResponse} */
  DescribeOrganizationInfo(data?: DescribeOrganizationInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationInfoResponse>;
  /** 查询集团账号用户列表 {@link DescribeOrganizationUserInfoRequest} {@link DescribeOrganizationUserInfoResponse} */
  DescribeOrganizationUserInfo(data?: DescribeOrganizationUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationUserInfoResponse>;
  /** 资产列表 {@link DescribeOtherCloudAssetsRequest} {@link DescribeOtherCloudAssetsResponse} */
  DescribeOtherCloudAssets(data?: DescribeOtherCloudAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOtherCloudAssetsResponse>;
  /** 查看风险趋势图详情数据 {@link DescribePolicyHitDataRequest} {@link DescribePolicyHitDataResponse} */
  DescribePolicyHitData(data: DescribePolicyHitDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyHitDataResponse>;
  /** 公网列表 {@link DescribePublicIpAssetsRequest} {@link DescribePublicIpAssetsResponse} */
  DescribePublicIpAssets(data?: DescribePublicIpAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicIpAssetsResponse>;
  /** 仓库镜像列表 {@link DescribeRepositoryImageAssetsRequest} {@link DescribeRepositoryImageAssetsResponse} */
  DescribeRepositoryImageAssets(data?: DescribeRepositoryImageAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoryImageAssetsResponse>;
  /** 查看受影响的存储桶列表 {@link DescribeRiskBucketListRequest} {@link DescribeRiskBucketListResponse} */
  DescribeRiskBucketList(data: DescribeRiskBucketListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskBucketListResponse>;
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
  /** 查看风险项视角列表 {@link DescribeRiskItemListRequest} {@link DescribeRiskItemListResponse} */
  DescribeRiskItemList(data?: DescribeRiskItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskItemListResponse>;
  /** 云配置风险规则详情 {@link DescribeRiskRuleDetailRequest} {@link DescribeRiskRuleDetailResponse} */
  DescribeRiskRuleDetail(data: DescribeRiskRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskRuleDetailResponse>;
  /** 高级配置风险规则列表 {@link DescribeRiskRulesRequest} {@link DescribeRiskRulesResponse} */
  DescribeRiskRules(data?: DescribeRiskRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskRulesResponse>;
  /** 查看风险趋势图信息 {@link DescribeRiskTrendDataRequest} {@link DescribeRiskTrendDataResponse} */
  DescribeRiskTrendData(data?: DescribeRiskTrendDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskTrendDataResponse>;
  /** 获取扫描报告列表 {@link DescribeScanReportListRequest} {@link DescribeScanReportListResponse} */
  DescribeScanReportList(data?: DescribeScanReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanReportListResponse>;
  /** 查询云边界分析扫描结果统计信息 {@link DescribeScanStatisticRequest} {@link DescribeScanStatisticResponse} */
  DescribeScanStatistic(data?: DescribeScanStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanStatisticResponse>;
  /** 获取扫描任务列表 {@link DescribeScanTaskListRequest} {@link DescribeScanTaskListResponse} */
  DescribeScanTaskList(data?: DescribeScanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskListResponse>;
  /** 查询漏洞信息 {@link DescribeSearchBugInfoRequest} {@link DescribeSearchBugInfoResponse} */
  DescribeSearchBugInfo(data: DescribeSearchBugInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchBugInfoResponse>;
  /** 查询 Skill 安全检测计费信息 {@link DescribeSkillScanPayInfoRequest} {@link DescribeSkillScanPayInfoResponse} */
  DescribeSkillScanPayInfo(data?: DescribeSkillScanPayInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillScanPayInfoResponse>;
  /** 查询 Skill 安全检测结果 {@link DescribeSkillScanResultRequest} {@link DescribeSkillScanResultResponse} */
  DescribeSkillScanResult(data: DescribeSkillScanResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillScanResultResponse>;
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
  /** 获取用户Dspm信息列表 {@link DescribeUserDspmInfoListRequest} {@link DescribeUserDspmInfoListResponse} */
  DescribeUserDspmInfoList(data?: DescribeUserDspmInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDspmInfoListResponse>;
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
  /** 下载导出日志 {@link DownloadDspmExportLogRequest} {@link DownloadDspmExportLogResponse} */
  DownloadDspmExportLog(data?: DownloadDspmExportLogRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadDspmExportLogResponse>;
  /** 修改AI-Link智链引擎配置 {@link ModifyAILinkSettingRequest} {@link ModifyAILinkSettingResponse} */
  ModifyAILinkSetting(data: ModifyAILinkSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAILinkSettingResponse>;
  /** 风险或者告警处理 {@link ModifyAlarmRiskStatusRequest} {@link ModifyAlarmRiskStatusResponse} */
  ModifyAlarmRiskStatus(data: ModifyAlarmRiskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmRiskStatusResponse>;
  /** 修改cos审计监测账号 {@link ModifyCosAuditMonitorAccountRequest} {@link ModifyCosAuditMonitorAccountResponse} */
  ModifyCosAuditMonitorAccount(data: ModifyCosAuditMonitorAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosAuditMonitorAccountResponse>;
  /** 修改cos对象存储识别状态 {@link ModifyCosAuditObjectIdentifyStatusRequest} {@link ModifyCosAuditObjectIdentifyStatusResponse} */
  ModifyCosAuditObjectIdentifyStatus(data: ModifyCosAuditObjectIdentifyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosAuditObjectIdentifyStatusResponse>;
  /** 设置对象存储内容识别采样率 {@link ModifyCosAuditObjectSampleRateRequest} {@link ModifyCosAuditObjectSampleRateResponse} */
  ModifyCosAuditObjectSampleRate(data: ModifyCosAuditObjectSampleRateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosAuditObjectSampleRateResponse>;
  /** 修改对象存储备注信息 {@link ModifyCosMarkInfoRequest} {@link ModifyCosMarkInfoResponse} */
  ModifyCosMarkInfo(data: ModifyCosMarkInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosMarkInfoResponse>;
  /** 修改Dspm访问管理信息 {@link ModifyDspmAccessRecordRequest} {@link ModifyDspmAccessRecordResponse} */
  ModifyDspmAccessRecord(data?: ModifyDspmAccessRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmAccessRecordResponse>;
  /** 修改dspm当前应用的数据识别模板 {@link ModifyDspmApplyingIdentifyComplianceGroupRequest} {@link ModifyDspmApplyingIdentifyComplianceGroupResponse} */
  ModifyDspmApplyingIdentifyComplianceGroup(data: ModifyDspmApplyingIdentifyComplianceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmApplyingIdentifyComplianceGroupResponse>;
  /** 修改Dspm审批单状态 {@link ModifyDspmApproveStatusRequest} {@link ModifyDspmApproveStatusResponse} */
  ModifyDspmApproveStatus(data: ModifyDspmApproveStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmApproveStatusResponse>;
  /** 修改Dspm资产账号信息 {@link ModifyDspmAssetAccountRequest} {@link ModifyDspmAssetAccountResponse} */
  ModifyDspmAssetAccount(data: ModifyDspmAssetAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmAssetAccountResponse>;
  /** 修改Dspm资产账号权限 {@link ModifyDspmAssetAccountPrivilegesRequest} {@link ModifyDspmAssetAccountPrivilegesResponse} */
  ModifyDspmAssetAccountPrivileges(data: ModifyDspmAssetAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmAssetAccountPrivilegesResponse>;
  /** 修改Dspm资产数据识别扫描任务 {@link ModifyDspmAssetDataScanTaskRequest} {@link ModifyDspmAssetDataScanTaskResponse} */
  ModifyDspmAssetDataScanTask(data: ModifyDspmAssetDataScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmAssetDataScanTaskResponse>;
  /** 修改Dspm资产数据识别扫描任务状态 {@link ModifyDspmAssetDataScanTaskStatusRequest} {@link ModifyDspmAssetDataScanTaskStatusResponse} */
  ModifyDspmAssetDataScanTaskStatus(data: ModifyDspmAssetDataScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmAssetDataScanTaskStatusResponse>;
  /** 修改Dspm资产日志投递开关 {@link ModifyDspmAssetLogDeliverySwitchRequest} {@link ModifyDspmAssetLogDeliverySwitchResponse} */
  ModifyDspmAssetLogDeliverySwitch(data: ModifyDspmAssetLogDeliverySwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmAssetLogDeliverySwitchResponse>;
  /** 修改Dspm安全分析开关 {@link ModifyDspmAssetSecurityAnalysisSwitchRequest} {@link ModifyDspmAssetSecurityAnalysisSwitchResponse} */
  ModifyDspmAssetSecurityAnalysisSwitch(data: ModifyDspmAssetSecurityAnalysisSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmAssetSecurityAnalysisSwitchResponse>;
  /** 修改日志备份设置 {@link ModifyDspmBackupSettingRequest} {@link ModifyDspmBackupSettingResponse} */
  ModifyDspmBackupSetting(data?: ModifyDspmBackupSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmBackupSettingResponse>;
  /** 修改dspm数据识别分类 {@link ModifyDspmIdentifyCategoryRequest} {@link ModifyDspmIdentifyCategoryResponse} */
  ModifyDspmIdentifyCategory(data: ModifyDspmIdentifyCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyCategoryResponse>;
  /** 修改dspm数据识别模板 {@link ModifyDspmIdentifyComplianceGroupRequest} {@link ModifyDspmIdentifyComplianceGroupResponse} */
  ModifyDspmIdentifyComplianceGroup(data: ModifyDspmIdentifyComplianceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyComplianceGroupResponse>;
  /** 修改dspm数据识别模板状态 {@link ModifyDspmIdentifyComplianceGroupStatusRequest} {@link ModifyDspmIdentifyComplianceGroupStatusResponse} */
  ModifyDspmIdentifyComplianceGroupStatus(data: ModifyDspmIdentifyComplianceGroupStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyComplianceGroupStatusResponse>;
  /** 修改dspm数据识别模板数据项关联级别信息 {@link ModifyDspmIdentifyComplianceRuleLevelInfoRequest} {@link ModifyDspmIdentifyComplianceRuleLevelInfoResponse} */
  ModifyDspmIdentifyComplianceRuleLevelInfo(data: ModifyDspmIdentifyComplianceRuleLevelInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyComplianceRuleLevelInfoResponse>;
  /** 修改Dspm身份信息 {@link ModifyDspmIdentifyInfoRequest} {@link ModifyDspmIdentifyInfoResponse} */
  ModifyDspmIdentifyInfo(data: ModifyDspmIdentifyInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyInfoResponse>;
  /** 修改dspm数据识别分级组 {@link ModifyDspmIdentifyLevelGroupRequest} {@link ModifyDspmIdentifyLevelGroupResponse} */
  ModifyDspmIdentifyLevelGroup(data: ModifyDspmIdentifyLevelGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyLevelGroupResponse>;
  /** 修改dspm数据识别分级信息 {@link ModifyDspmIdentifyLevelItemRequest} {@link ModifyDspmIdentifyLevelItemResponse} */
  ModifyDspmIdentifyLevelItem(data: ModifyDspmIdentifyLevelItemRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyLevelItemResponse>;
  /** 修改dspm数据识别数据项 {@link ModifyDspmIdentifyRuleRequest} {@link ModifyDspmIdentifyRuleResponse} */
  ModifyDspmIdentifyRule(data: ModifyDspmIdentifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyRuleResponse>;
  /** 修改dspm数据识别数据项状态 {@link ModifyDspmIdentifyRuleStatusRequest} {@link ModifyDspmIdentifyRuleStatusResponse} */
  ModifyDspmIdentifyRuleStatus(data: ModifyDspmIdentifyRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIdentifyRuleStatusResponse>;
  /** 修改DspmIp信息 {@link ModifyDspmIpInfoRequest} {@link ModifyDspmIpInfoResponse} */
  ModifyDspmIpInfo(data: ModifyDspmIpInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmIpInfoResponse>;
  /** 修改Dspm个人身份 {@link ModifyDspmPersonalIdentifyRequest} {@link ModifyDspmPersonalIdentifyResponse} */
  ModifyDspmPersonalIdentify(data: ModifyDspmPersonalIdentifyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmPersonalIdentifyResponse>;
  /** 恢复备份日志 {@link ModifyDspmRestoreLogTaskRequest} {@link ModifyDspmRestoreLogTaskResponse} */
  ModifyDspmRestoreLogTask(data: ModifyDspmRestoreLogTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmRestoreLogTaskResponse>;
  /** 修改Dspm风险信息 {@link ModifyDspmRiskInfoRequest} {@link ModifyDspmRiskInfoResponse} */
  ModifyDspmRiskInfo(data: ModifyDspmRiskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmRiskInfoResponse>;
  /** 修改Dspm风险策略 {@link ModifyDspmRiskStrategyRequest} {@link ModifyDspmRiskStrategyResponse} */
  ModifyDspmRiskStrategy(data?: ModifyDspmRiskStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmRiskStrategyResponse>;
  /** 修改Dspm白名单策略 {@link ModifyDspmWhitelistStrategyRequest} {@link ModifyDspmWhitelistStrategyResponse} */
  ModifyDspmWhitelistStrategy(data?: ModifyDspmWhitelistStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDspmWhitelistStrategyResponse>;
  /** 编辑或者创建EDR策略 {@link ModifyEDRRuleRequest} {@link ModifyEDRRuleResponse} */
  ModifyEDRRule(data: ModifyEDRRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEDRRuleResponse>;
  /** 永久忽略EDR多行为告警 {@link ModifyEdrAlertPermanentIgnoreRequest} {@link ModifyEdrAlertPermanentIgnoreResponse} */
  ModifyEdrAlertPermanentIgnore(data: ModifyEdrAlertPermanentIgnoreRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdrAlertPermanentIgnoreResponse>;
  /** 修改IaC检测接入Token存储周期 {@link ModifyIaCTokenPeriodRequest} {@link ModifyIaCTokenPeriodResponse} */
  ModifyIaCTokenPeriod(data: ModifyIaCTokenPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIaCTokenPeriodResponse>;
  /** 修改主机备注信息 {@link ModifyMachineRemarkRequest} {@link ModifyMachineRemarkResponse} */
  ModifyMachineRemark(data: ModifyMachineRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachineRemarkResponse>;
  /** 修改通知资产范围配置 {@link ModifyNotifyAssetConfigRequest} {@link ModifyNotifyAssetConfigResponse} */
  ModifyNotifyAssetConfig(data?: ModifyNotifyAssetConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotifyAssetConfigResponse>;
  /** 修改通知设置 {@link ModifyNotifySettingRequest} {@link ModifyNotifySettingResponse} */
  ModifyNotifySetting(data?: ModifyNotifySettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotifySettingResponse>;
  /** 修改告警中心通知高级配置 {@link ModifyNotifySettingAlertRequest} {@link ModifyNotifySettingAlertResponse} */
  ModifyNotifySettingAlert(data: ModifyNotifySettingAlertRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotifySettingAlertResponse>;
  /** 修改集团账号状态 {@link ModifyOrganizationAccountStatusRequest} {@link ModifyOrganizationAccountStatusResponse} */
  ModifyOrganizationAccountStatus(data: ModifyOrganizationAccountStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOrganizationAccountStatusResponse>;
  /** 修改策略状态 {@link ModifyPolicyStatusRequest} {@link ModifyPolicyStatusResponse} */
  ModifyPolicyStatus(data: ModifyPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPolicyStatusResponse>;
  /** 修改风险中心风险状态 {@link ModifyRiskCenterRiskStatusRequest} {@link ModifyRiskCenterRiskStatusResponse} */
  ModifyRiskCenterRiskStatus(data: ModifyRiskCenterRiskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterRiskStatusResponse>;
  /** 修改风险中心扫描任务 {@link ModifyRiskCenterScanTaskRequest} {@link ModifyRiskCenterScanTaskResponse} */
  ModifyRiskCenterScanTask(data: ModifyRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterScanTaskResponse>;
  /** 更新自定义策略的开关 {@link ModifyUebaRuleSwitchRequest} {@link ModifyUebaRuleSwitchResponse} */
  ModifyUebaRuleSwitch(data: ModifyUebaRuleSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUebaRuleSwitchResponse>;
  /** 重置Dspm资产账号密码 {@link ResetDspmAssetAccountPasswordRequest} {@link ResetDspmAssetAccountPasswordResponse} */
  ResetDspmAssetAccountPassword(data: ResetDspmAssetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetDspmAssetAccountPasswordResponse>;
  /** 重试导出任务 {@link RetryDspmExportLogRequest} {@link RetryDspmExportLogResponse} */
  RetryDspmExportLog(data?: RetryDspmExportLogRequest, config?: AxiosRequestConfig): AxiosPromise<RetryDspmExportLogResponse>;
  /** 恢复Dspm资产账号 {@link RevertDspmAssetAccountRequest} {@link RevertDspmAssetAccountResponse} */
  RevertDspmAssetAccount(data: RevertDspmAssetAccountRequest, config?: AxiosRequestConfig): AxiosPromise<RevertDspmAssetAccountResponse>;
  /** 发送Dspm资产访问验证码 {@link SendDspmAssetLoginSmsCodeRequest} {@link SendDspmAssetLoginSmsCodeResponse} */
  SendDspmAssetLoginSmsCode(data: SendDspmAssetLoginSmsCodeRequest, config?: AxiosRequestConfig): AxiosPromise<SendDspmAssetLoginSmsCodeResponse>;
  /** 停止扫风险中心扫描任务 {@link StopRiskCenterTaskRequest} {@link StopRiskCenterTaskResponse} */
  StopRiskCenterTask(data: StopRiskCenterTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopRiskCenterTaskResponse>;
  /** 同步Dspm资产 {@link SyncDspmAssetsRequest} {@link SyncDspmAssetsResponse} */
  SyncDspmAssets(data?: SyncDspmAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<SyncDspmAssetsResponse>;
  /** 同步Dspm用户列表 {@link SyncDspmUsersRequest} {@link SyncDspmUsersResponse} */
  SyncDspmUsers(data?: SyncDspmUsersRequest, config?: AxiosRequestConfig): AxiosPromise<SyncDspmUsersResponse>;
  /** 修改告警或者风险状态 {@link UpdateAccessKeyAlarmStatusRequest} {@link UpdateAccessKeyAlarmStatusResponse} */
  UpdateAccessKeyAlarmStatus(data: UpdateAccessKeyAlarmStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccessKeyAlarmStatusResponse>;
  /** 编辑访问密钥备注 {@link UpdateAccessKeyRemarkRequest} {@link UpdateAccessKeyRemarkResponse} */
  UpdateAccessKeyRemark(data: UpdateAccessKeyRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccessKeyRemarkResponse>;
  /** 批量告警状态处理 {@link UpdateAlertStatusListRequest} {@link UpdateAlertStatusListResponse} */
  UpdateAlertStatusList(data: UpdateAlertStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAlertStatusListResponse>;
  /** 验证Dspm资产登录验证码 {@link VerifyDspmAssetLoginCodeRequest} {@link VerifyDspmAssetLoginCodeResponse} */
  VerifyDspmAssetLoginCode(data: VerifyDspmAssetLoginCodeRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyDspmAssetLoginCodeResponse>;
}

export declare type Versions = ["2022-11-21"];

export default Csip;
