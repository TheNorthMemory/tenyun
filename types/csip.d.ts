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
  /** 凭据 Skill 安装状态 */
  SkillState?: SkillState;
  /** 流量沙箱插件状态 */
  TrafficPluginState?: TrafficPluginState;
  /** 流量沙箱规则状态 */
  TrafficRuleState?: TrafficRuleState[];
  /** 命令沙箱插件状态 */
  CommandPluginState?: CommandPluginState;
}

/** AI安全助手会话信息 */
declare interface AIAnalysisSession {
  /** 标题 */
  Title?: string;
  /** 会话ID */
  SessionID?: string;
  /** 最后修改的时间戳 */
  ModifyTime?: number;
  /** 是否置顶 */
  IsPinned?: boolean;
}

/** AI助手AI问答推荐操作项 */
declare interface AIRecommendAction {
  /** 推荐操作类型 */
  Action?: string;
  /** 推荐操作 */
  Question?: string;
}

/** AI助手用户身份信息 */
declare interface AIScheduleUserIdentity {
  /**  */
  AppId?: number;
  /**  */
  Uin?: string;
  /**  */
  SubUin?: string;
  /**  */
  UserId?: string;
  /**  */
  BotId?: string;
  /**  */
  ChatId?: string;
  /**  */
  Channel?: string;
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

/** 灰度用户配置 */
declare interface AbTestUserItem {
  /** appId */
  AppId?: number;
  /** 是否灰度用户 */
  IsAbTestUser?: boolean;
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

/** 账号简要信息 */
declare interface AccountBriefInfo {
  /** 账号 AppID */
  AppID?: number;
  /** 账号昵称 */
  Nick?: string;
  /** 账号 Uin */
  Uin?: string;
}

/** Agent运行模式策略（CPU/Memory/NetworkPps） */
declare interface AgentRunModePolicy {
  /** 内存限制(MB)，可选0/200/300/500 */
  Memory?: number | null;
  /** CPU限制(%)，可选10/20/30/40/50/60 */
  Cpu?: number | null;
  /** 网络PPS限制 */
  NetworkPps?: number | null;
}

/** AI 定时任务信息 */
declare interface AiScheduleInfo {
  /** AI 定时任务 ID。 */
  ScheduleId?: string;
  /** 任务名称。最大 128 字符。 */
  Name?: string;
  /** 执行提示词。最大 2048 字符。 */
  Prompts?: string;
  /** 状态。取值：1（已启用）、2（已停用）。 */
  Status?: number;
  /** 触发器 */
  Triggers?: AiScheduleTriggerInfo[];
  /** 最大触发次数，0 表示无限制。 */
  MaxFireCount?: number;
  /** 已触发次数。 */
  CurrentFireCount?: number;
  /** 生效开始时间，Unix 毫秒时间戳，0 表示立即生效。 */
  StartTime?: number;
  /** 生效结束时间，Unix 毫秒时间戳，0 表示永不过期。 */
  EndTime?: number;
  /** 创建时间，Unix 毫秒时间戳。 */
  CreateTime?: number;
  /** 更新时间，Unix 毫秒时间戳。 */
  UpdateTime?: number;
  /** 身份信息 */
  Identity?: AIScheduleUserIdentity;
}

/** 未来触发计划条目 */
declare interface AiSchedulePlanInfo {
  /** 触发器 ID。 */
  TriggerId?: string | null;
  /** 预计触发时间，Unix 毫秒时间戳。 */
  FireTime?: number | null;
  /** 触发器类型。取值：1（Cron 表达式）、2（固定时间）。 */
  TriggerType?: number | null;
}

/** 执行任务记录 */
declare interface AiScheduleTaskInfo {
  /** 任务 ID。 */
  TaskId?: string | null;
  /** 所属AI 定时任务 ID。 */
  ScheduleId?: string | null;
  /** 触发该任务的触发器 ID。 */
  TriggerId?: string | null;
  /** Agent 调用的唯一会话 ID。 */
  SessionId?: string | null;
  /** 执行状态。 */
  Status?: number | null;
  /** Agent 输出结果或错误详情。 */
  Result?: string | null;
  /** 计划触发时间，Unix 毫秒时间戳。 */
  ScheduledTime?: number | null;
  /** 实际开始执行时间，Unix 毫秒时间戳。 */
  StartTime?: number | null;
  /** 执行完成时间，Unix 毫秒时间戳。 */
  EndTime?: number | null;
  /** 创建时间，Unix 毫秒时间戳。 */
  CreateTime?: number | null;
  /** 更新时间，Unix 毫秒时间戳。 */
  UpdateTime?: number | null;
  /** 定时任务名称 */
  TaskName?: string;
  /** 定时任务提示词 */
  Prompts?: string;
}

/** 触发器配置 */
declare interface AiScheduleTriggerInfo {
  /** 触发器 ID。 */
  TriggerId?: string;
  /** 触发器类型。取值：1（Cron 表达式）、2（固定时间）。 */
  TriggerType?: number;
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

/** 资产详情信息 */
declare interface AssetDetailItem {
  /** 租户ID */
  AppID?: number;
  /** 云账号名称 */
  CloudAccountName?: string;
  /** 资产ID */
  AssetID?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 云API返回标签 */
  Tags?: AssetTag[];
  /** 安全组ID集合 */
  SecurityGroupIDs?: string[];
  /** 公网IP */
  PublicIP?: string;
  /** 内网IP */
  PrivateIP?: string;
  /** 公网域名 */
  PublicDomain?: string;
  /** 内网域名 */
  PrivateDomain?: string;
  /** 风险总数 */
  RiskCount?: number;
  /** 告警总数 */
  AlarmCount?: number;
  /** 资产名称 */
  AssetName?: string;
  /** 云安全中心标签 */
  CustomTags?: CustomTag[];
  /** 云厂商 */
  Provider?: string;
  /** 资产类型名称 */
  AssetTypeName?: string;
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
  /** 资产唯一标志 */
  AssetRID?: string;
}

/** 资产过滤配置器 */
declare interface AssetFilterConfig {
  /** 查询属性 */
  Attr?: string;
  /** 展示 */
  Label?: string;
  /** 样式 */
  Style?: string;
  /** 值 */
  Value?: string;
  /** 英文展示 */
  LabelEn?: string;
  /** 资产私有字段过滤器 */
  Options?: AssetFilterOptions[];
}

/** 资产过滤选项 */
declare interface AssetFilterOptions {
  /** 显示值 */
  Text?: string;
  /** 实际值 */
  Value?: string;
  /** 样式 */
  Style?: string;
}

/** 容器安全描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface AssetFilters {
  /** 过滤键的名称。 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 是否模糊查询 */
  ExactMatch?: boolean;
}

/** 资产动态表头 */
declare interface AssetHeaderItem {
  /** 类型 */
  ItemType?: string;
  /** 展示 */
  Label?: string;
  /** 是否支持复制 */
  Copy?: number;
  /** 值对应字段键 */
  Values?: string[];
  /** 跳转URL */
  LinkURL?: string;
  /** 过滤器 */
  Filters?: AssetFilterConfig[];
  /** 是否支持排序 */
  Sort?: number;
  /** 字段展示样式 */
  ValueStyle?: string;
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

/** 资产信息 */
declare interface AssetItem {
  /** 租户ID */
  AppID?: number;
  /** 云厂商 */
  Provider?: string;
  /** 云厂商名称 */
  ProviderName?: string;
  /** 云账号ID */
  CloudAccountID?: string;
  /** 云账号名称 */
  CloudAccountName?: string;
  /** 资产ID */
  AssetID?: string;
  /** 资产名称 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产类型名称 */
  AssetTypeName?: string;
  /** 资产运行状态 */
  AssetStatus?: string;
  /** 是否公网暴露 */
  PublicExpose?: number;
  /** 资产标签 */
  Tags?: AssetTag[];
  /** 公网ip */
  PublicIP?: string;
  /** 内网ip */
  PrivateIP?: string;
  /** 公网域名 */
  PublicDomain?: string;
  /** 内网域名 */
  PrivateDomain?: string;
  /** 防护状态 */
  ProtectStatus?: number;
  /** 风险数量 */
  RiskCount?: number;
  /** 告警数量 */
  AlarmCount?: number;
  /** 实例创建时间 */
  CreatedAt?: string;
  /** 首次同步时间 */
  FirstSyncTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 操作系统名称 */
  OsName?: string;
  /** 严重风险总数 */
  CriticalRiskCount?: number;
  /** 高风险总数 */
  HighRiskCount?: number;
  /** 中风险总数 */
  MediumRiskCount?: number;
  /** 低风险总数 */
  LowRiskCount?: number;
  /** 地域 */
  Region?: string;
  /** 地域名称 */
  RegionName?: string;
  /** 资产唯一ID */
  AssetRID?: string;
  /** 云安全中心标签 */
  CustomTags?: CustomTag[];
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
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

/** 云厂商资产数量 */
declare interface AssetProviderDistributeInfo {
  /** 腾讯云资产总数 */
  TencentAssetCount?: number;
  /** 阿里云资产总数 */
  AliAssetCount?: number;
  /** 亚马逊云资产总数 */
  AwsAssetCount?: number;
  /** 其他云环境资产总数 */
  OtherAssetCount?: number;
  /** 微软云资产数量 */
  AzureAssetCount?: number;
}

/** 按风险引擎分组风险信息 */
declare interface AssetRiskContent {
  /** 风险引擎 */
  EngineType?: string;
  /** 风险引擎下具体风险分布 */
  Risks?: AssetRiskInfo[];
  /** 资产ID */
  AssetRID?: string;
}

/** 资产关联风险信息 */
declare interface AssetRiskInfo {
  /** 风险类型 */
  ResultType?: string;
  /** 总风险数量 */
  RiskCount?: number;
  /** 严重风险数量 */
  RiskCritical?: number;
  /** 高风险数量 */
  RiskHigh?: number;
  /** 中风险数量 */
  RiskMedium?: number;
  /** 低风险数量 */
  RiskLow?: number;
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

/** 资产概览统计信息 */
declare interface AssetStatisticsInfo {
  /** 资产总数 */
  AssetTotalCount?: number;
  /** 近7天新增资产数量 */
  AssetAddCount?: number;
  /** 有风险资产数量 */
  RiskAssetCount?: number;
  /** 有告警资产数量 */
  AlarmAssetCount?: number;
  /** 公网资产数量 */
  PublicAssetCount?: number;
  /** 暴露资产数量 */
  ExposeAssetCount?: number;
  /** 主机资产数量 */
  CloudHostAssetCount?: number;
}

/** 安全中心资产标签 */
declare interface AssetTag {
  /** 标签的key值,可以是字母、数字、下划线 */
  TagKey?: string;
  /** 标签的vale值,可以是字母、数字、下划线 */
  TagValue?: string;
}

/** 资产标签元素 */
declare interface AssetTagItem {
  /** 标签ID */
  ID?: number;
  /** appid */
  AppID?: number;
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
  /** 描述 */
  Description?: string;
  /** 自动打标策略 */
  TaggingRule?: string;
  /** 标签颜色 */
  Color?: string;
  /** 标签绑定的资产数量 */
  AssetCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
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

/** 资产标签预览资产 */
declare interface AssetTagPreviewAssetItem {
  /** 资产ID */
  AssetID?: string;
  /** 资产名称 */
  AssetName?: string;
  /** 公网IP地址 */
  PublicIP?: string;
  /** 内网IP */
  PrivateIP?: string;
  /** 公网域名 */
  PublicDomain?: string;
  /** 内网域名 */
  PrivateDomain?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产类型名称 */
  AssetTypeName?: string;
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
}

/** 资产标签树节点 */
declare interface AssetTagTreeNode {
  /** 标签键 */
  Key?: string;
  /** 标签值 */
  Value?: string;
  /** 子节点 */
  Children?: AssetTagTreeNode[];
  /** 颜色 */
  Color?: string;
}

/** 关联资产数量分布 */
declare interface AssetTypeCount {
  /** 关联资产类型 */
  AssetType?: string;
  /** 数量 */
  Count?: number;
  /** 资产类型展示名称 */
  AssetTypeName?: string;
  /** 过滤字段 */
  Filter?: string;
}

/** 资产树-资产类型节点 */
declare interface AssetTypeNode {
  /** 资产类型 */
  AssetType?: string;
  /** 资产类型名称 */
  AssetTypeName?: string;
  /** 资产类型数量 */
  AssetCount?: number;
  /** 资产类型ID */
  AssetTypeID?: number;
}

/** 资产类型以及存在风险的资产类型数量 */
declare interface AssetTypeStatisticsInfo {
  /** 资产类型数量 */
  AssetTypeCount?: number;
  /** 存在风险的资产类型数量 */
  RiskAssetTypeCount?: number;
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

/** 资产搜索视图 */
declare interface AssetViewFilter {
  /** 视图ID */
  ViewID?: number;
  /** 视图名称 */
  ViewName?: string;
  /** 视图过滤项 */
  Filters?: Filters[];
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
  /** 执行时间,单位：毫秒 */
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

/** 云边界分析自动打标项 */
declare interface AutoTagRuleItem {
  /** 规则ID */
  RuleID?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 标签 */
  Tag?: string;
  /** 描述 */
  Description?: string;
  /** 开关状态 */
  Enable?: boolean;
  /** 资产类型 */
  AssetTypes?: string[];
  /** 端口 */
  Ports?: string[];
  /** 开放状态 */
  OpenStatuses?: string[];
  /** 规则优先级 */
  Priority?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
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

/** 基线子分类维度的聚合结果，承载该子分类下检测项的通过/未通过统计。 */
declare interface BaselineAggregatedCategory {
  /** 基线子分类基础信息（含分类 ID、名称、描述）。 */
  Category?: BaselineCategory;
  /** 该子分类下未通过检测项按风险等级的分布统计。 */
  NotPassItemRiskLevelStatistic?: BaselineRiskLevelStatistic[];
  /** 该子分类下结果为 PASS 的检测项数量。 */
  PassItemCount?: number;
  /** 该子分类下结果为 NOT_PASS 的检测项数量。 */
  NotPassItemCount?: number;
  /** 该子分类下检测项通过率，单位为百分比（0~100），保留两位小数。 */
  PassRate?: number;
  /** 该基线类别是否被扫描过 */
  Scanned?: boolean;
}

/** 检测项维度的聚合结果，承载该检测项在资产上的通过/未通过统计。 */
declare interface BaselineAggregatedItem {
  /** 检测项基础信息（含 ID、名称、风险等级、分类等）。 */
  Item?: BaselineItem;
  /** 该检测项最近一次扫描中结果为 PASS 的资产数量。 */
  PassAssetCount?: number;
  /** 该检测项最近一次扫描中结果为 NOT_PASS 的资产数量。 */
  NotPassAssetCount?: number;
  /** 该检测项最近一次扫描中结果为 PASS NOT_PASS 以及 CHECKING 的资产数量。 */
  TotalAssetCount?: number;
  /** 该检测项最近一次扫描的资产通过率，单位为百分比（0~100）。 */
  PassRate?: number;
  /** 该检测项最近一次完成扫描的时间。 */
  LatestCheckTime?: string;
  /** 上次扫描结果状态。取值：CHECKING：检测中PASS：通过NOT_PASS：未通过CHECK_FAILED：检测失败NOT_INVOLVED：不涉及 */
  ResultStatus?: string;
  /** 该聚合结果涉及的租户 Appid 列表。 */
  Appid?: number[];
  /** 该聚合结果涉及的扫描 JobID 列表。 */
  JobID?: string[];
}

/** 基线策略聚合结果，用于策略维度汇总展示当前扫描通过/未通过情况。 */
declare interface BaselineAggregatedPolicy {
  /** 系统策略所属父分类 ID（仅 PolicyType=SYSTEM 时聚合使用，自定义策略为 0）。 */
  ParentCategoryID?: number;
  /** 本次聚合涉及的基线策略 ID 列表。 */
  PolicyID?: number[];
  /** 策略名称（自定义策略为用户输入，系统策略为内置分类名）。 */
  Name?: string;
  /** 策略描述。 */
  Description?: string;
  /** 策略已配置的检测项数量。 */
  ConfItemCount?: number;
  /** 本策略下结果为 PASS 的检测项数量。 */
  PassItemCount?: number;
  /** 本策略下结果为 NOT_PASS 的检测项数量。 */
  NotPassItemCount?: number;
  /** 未通过检测项按风险等级（LOW/MEDIUM/HIGH/CRITICAL）的分布统计。 */
  NotPassItemRiskLevelStatistic?: BaselineRiskLevelStatistic[];
  /** 本策略最近一次扫描的通过率，单位为百分比（0~100），保留两位小数。 */
  PassRate?: number;
  /** 该策略下各子分类的扫描结果统计明细。 */
  CategoryStatistic?: BaselineAggregatedCategory[];
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  PolicyType?: string;
  /** 检测资产大类，区分主机基线与容器集群基线。取值：HOST：主机CLUSTER：容器集群 */
  CheckAssetType?: string;
  /** 该基线类别是否被扫描过 */
  Scanned?: boolean;
}

/** 基线分类基础信息，覆盖父分类与子分类两层。 */
declare interface BaselineCategory {
  /** 基线分类 ID。 */
  ID?: number;
  /** 基线分类名称（中文）。 */
  Name?: string;
  /** 基线分类描述（中文）。 */
  Description?: string;
  /** 检测资产大类，区分主机基线与容器集群基线。取值：HOST：主机CLUSTER：容器集群 */
  CheckAssetType?: string;
}

/** 基线集群资产。 */
declare interface BaselineClusterAsset {
  /** 集群 ID。 */
  ClusterID?: string;
  /** 集群名称。 */
  ClusterName?: string;
  /** 集群类型。 */
  ClusterType?: string;
  /** 集群节点总数。 */
  NodeCount?: number;
  /** 集群在线节点数。 */
  OnlineNodeCount?: number;
  /** 集群所属租户 Appid。 */
  Appid?: number;
  /** 集群子资产名称（Pod名/Node名/Container名/Namespace名；CLUSTER 类型时为集群名）。 */
  AssetName?: string;
}

/** 在策略上对内置检测项做自定义值覆盖的配置项。 */
declare interface BaselineCustomItemConf {
  /** 内置检测项规则 ID，与 CustomItemID 二选一传入。 */
  RuleID: number;
  /** 用户自定义的判定值列表，需符合检测项 WebEditParam 定义的取值约束。 */
  CustomValueList: string[];
  /** 已存在的自定义配置 ID；新增时可不传，编辑时回填。 */
  CustomItemID: number;
}

/** 基线风险修复历史记录 */
declare interface BaselineFixRecord {
  /** 修复记录主键 ID。 */
  ID?: number;
  /** 租户 AppID。 */
  AppID?: number;
  /** 被修复的检测项基础信息。 */
  ItemInfo?: BaselineItem;
  /** 本次修复涉及的主机资产信息，无数据时为 null。 */
  HostInfo?: BaselineHostAsset | null;
  /** 集群资产信息，无数据时为 null。 */
  ClusterInfo?: BaselineClusterAsset | null;
  /** 资产类型：HOST（主机）、CLUSTER（容器集群）。 */
  AssetType?: string;
  /** 修复完成时间。 */
  FixTime?: string;
  /** 该风险首次被发现的时间。 */
  DiscoveryTime?: string;
}

/** 基线主机资产，承载子任务/风险记录关联的主机详情。 */
declare interface BaselineHostAsset {
  /** 云主机实例 ID，格式形如 ins-instanceid。 */
  InstanceID?: string;
  /** CWP（云镜）侧主机唯一标识 QUUID。 */
  QUUID?: string;
  /** 主机 Agent 上报的 UUID。 */
  UUID?: string;
  /** 主机公网 IP。 */
  PublicIP?: string;
  /** 主机内网 IP。 */
  PrivateIP?: string;
  /** CWP Agent 状态。取值：ONLINE：在线OFFLINE：离线UNINSTALLED：未安装 */
  AgentStatus?: string;
  /** 云主机实例运行状态。取值：RUNNING：运行中STOPPED：已停止UNKNOWN：未知 */
  InstanceStatus?: string;
  /** 主机名称。 */
  Name?: string;
  /** 主机所属租户 Appid。 */
  Appid?: number;
  /** CSIP 内部资产标签列表。 */
  TagItem?: MiniTagItem[];
  /** 云上原生资产标签（Tag）列表。 */
  CloudTag?: Tag[];
  /** 主机所在地域信息。 */
  RegionInfo?: RegionInfo;
  /** 主机操作系统信息（含发行版与版本号）。 */
  OsInfo?: string;
  /** 主机防护版本。取值：NONE（未防护）、BASIC（基础版）、PRO（专业版）、ULTIMATE（旗舰版）、PRO_LH（轻量版）。 */
  ProtectVersion?: string;
}

/** 基线检测项。 */
declare interface BaselineItem {
  /** 基线检测项 ID。 */
  ID?: number;
  /** 内置规则 ID。 */
  RuleID?: number;
  /** 检测对象描述，例如配置文件路径、内核参数、Kubernetes 资源等。 */
  CheckObject?: string[];
  /** 风险等级。取值：LOW：低危MEDIUM：中危HIGH：高危CRITICAL：严重 */
  RiskLevel?: string;
  /** 检测项名称（中文）。 */
  Name?: string;
  /** 检测项描述（中文，说明检测背景与判定逻辑）。 */
  Description?: string;
  /** 检测项修复建议（中文，含建议的配置参考值或加固命令）。 */
  FixSuggestion?: string;
  /** 检测项的参考链接列表。 */
  ReferenceLink?: string;
  /** 所属系统父分类信息。 */
  SystemCategory?: BaselineCategory;
  /** 所属子分类信息。 */
  Category?: BaselineCategory;
  /** 是否支持一键修复。true 支持，false 不支持。 */
  SupportFix?: boolean;
  /** 是否支持用户自定义判定值。true 支持，false 不支持。 */
  SupportCustomValue?: boolean;
  /** 该检测项适用的操作系统/组件版本列表。 */
  AffectedVersionList?: string[];
  /** 编辑自定义判定值时的参数定义（如取值范围、控件类型等）。 */
  WebEditParam?: string;
  /** 检测项默认判定值列表。 */
  DefaultValueList?: string[];
  /** 是否已被用户自定义。true 已自定义，false 仍使用默认值。 */
  IsCustomConf?: boolean;
  /** 用户自定义配置记录 ID，未自定义时为 0。 */
  CustomItemID?: number;
}

/** 单个资产上单个检测项的风险结果记录。 */
declare interface BaselineItemRiskRecord {
  /** 风险记录主键 ID。 */
  ID?: number;
  /** 命中风险的主机资产信息，无数据时为 null。 */
  HostInfo?: BaselineHostAsset | null;
  /** 集群资产信息，无数据时为 null。 */
  ClusterInfo?: BaselineClusterAsset | null;
  /** 命中资产的资产类型。取值：HOST：主机CLUSTER：集群POD：PodCONTAINER：容器IMAGE：镜像 */
  AssetType?: string;
  /** 风险检测结果状态。取值：CHECKING：检测中PASS：通过NOT_PASS：未通过CHECK_FAILED：检测失败NOT_INVOLVED：不涉及IGNORED：已忽略 */
  ResultStatus?: string;
  /** 最近检查时间。 */
  LatestCheckTime?: string;
  /** 基线检测项 ID。 */
  ItemID?: number;
  /** 风险事件 ID，用于唯一标识该风险记录。 */
  RiskID?: string;
  /** 本次扫描的全局 JobID。 */
  JobID?: string;
}

/** 基线扫描主任务，对应一次“一键扫描/周期扫描/分散扫描”动作。 */
declare interface BaselineMainTask {
  /** 主任务对应的全局任务 ID。 */
  JobID?: string;
  /** 主任务 ID。 */
  ID?: number;
  /** 主任务状态。取值：INIT：初始化SUBTASK_CREATING：子任务创建中SCANNING：扫描中TIMEOUT：超时USER_CANCELED：用户取消ALL_FAILED：全部失败SUCCESS：成功 */
  Status?: string;
  /** 主任务所属租户 Appid。 */
  Appid?: number;
  /** 主任务类型。取值：ONE_SHOT：一键策略扫描（手动触发）PERIODIC：周期扫描（按 CycleScanConf 自动触发）OTHER：其他分散扫描（资产维度等触发） */
  TaskType?: string;
  /** 主任务开始执行时间。 */
  StartTime?: string;
  /** 主任务结束时间，未结束时为空。 */
  FinishTime?: string;
  /** 检测资产大类，区分主机基线与容器集群基线。取值：HOST：主机CLUSTER：容器集群 */
  CheckAssetType?: string;
  /** 失败错误码，成功时为空。 */
  ErrCode?: string;
  /** 失败原因，成功时为空。 */
  ErrMessage?: string;
  /** 解决方案（根据 ErrCode 映射，成功时为空） */
  Solution?: string;
  /** 扫描成功的资产数量。 */
  ScanSuccessCount?: number;
  /** 扫描失败的资产数量。 */
  ScanFailedCount?: number;
  /** 子任务总数 */
  ScanTotalCount?: number;
}

/** 基线概览页头部的统计指标。 */
declare interface BaselineOverviewStatistic {
  /** 当前未通过的检测项总数（含主机和容器集群）。 */
  NotPassItemCount?: number;
  /** 未通过检测项按策略分组的统计列表。 */
  NotPassItemStatistic?: NotPassItemStatistic[];
  /** 近一年累计已修复的基线风险数量。 */
  LastYearFixCount?: number;
}

/** 基线策略 */
declare interface BaselinePolicy {
  /** 周期扫描配置（开关、间隔类型、扫描时段等）。 */
  CycleScanConf: CycleScanConf;
  /** 检测资产大类，区分主机基线与容器集群基线。取值：HOST：主机CLUSTER：容器集群 */
  CheckAssetType: string;
  /** 是否在系统新增内置检测项时自动加入本策略。true 自动加入，false 不加入。 */
  AutoSyncItem: boolean;
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  Type: string;
  /** 策略名称（自定义策略由用户填写，系统策略为内置分类名）。 */
  Name: string;
  /** 策略描述。 */
  Description: string;
  /** 主机生效范围。取值：ALL：全部主机（可配合 ConfHostExcludeList 剔除）TAG_MATCH：按标签匹配，配合 ConfHostTagValuePICK：仅在 ConfHostIncludeList 指定的主机生效NONE：未配置 */
  ConfHostType: string;
  /** 主机 InstanceID 白名单，在 ConfHostType=PICK / TAG_MATCH 时使用。 */
  ConfHostIncludeList: string[];
  /** 主机 InstanceID 剔除名单，在 ConfHostType=ALL 时使用。 */
  ConfHostExcludeList: string[];
  /** 策略启用状态。0 停用，1 启用；停用后该策略不参与扫描与统计。 */
  Enable: boolean;
  /** 集群生效范围。取值：ALL：全部集群（可配合 ConfClusterExcludeList 剔除）PICK：仅在 ConfClusterIncludeList 指定的集群生效NONE：未配置 */
  ConfClusterType: string;
  /** 集群 ID 白名单，在 ConfClusterType=PICK 时使用。 */
  ConfClusterIncludeList: string[];
  /** 集群 ID 剔除名单，在 ConfClusterType=ALL 时使用。 */
  ConfClusterExcludeList: string[];
  /** 系统分类 / 子分类 / 检测项的命中配置（仅系统策略生效）。 */
  CategoryConf: BaselinePolicySystemCategoryConf[];
  /** 自定义检测项的取值配置列表（在系统检测项基础上覆盖判定值）。 */
  CustomItemConf: BaselineCustomItemConf[];
  /** 策略所属租户 Appid。 */
  Appid: number;
  /** 基线策略 ID。 */
  ID?: number;
  /** 当前策略已配置的检测项数量。 */
  ConfItemCount?: number;
  /** 当前策略命中的主机数量。 */
  ConfHostCount?: number;
  /** 当前策略命中的集群数量。 */
  ConfClusterCount?: number;
  /** 策略当前进行中的扫描主任务 ID；未在扫描时为 0。 */
  ScanningTaskID?: number;
  /** 最近一次扫描完成时间（含手动 / 周期）。 */
  LatestScanTime?: string;
  /** 最近一次周期性扫描完成时间。 */
  LatestCycleScanTime?: string;
  /** 安全中心标签ID列表 */
  TagIDList?: number[];
  /** 云标签列表 */
  CloudTagList?: string[];
}

/** 子分类维度的检测项命中配置。 */
declare interface BaselinePolicySubCategoryConf {
  /** 基线子分类 ID。 */
  CategoryID: number;
  /** 是否全选该子分类下所有检测项。true 全选，false 按 ItemIDList 明细生效。 */
  AllSelect: boolean;
  /** 已选的检测项 ID 列表，AllSelect=false 时按此明细生效。 */
  ItemIDList: number[];
}

/** 系统策略下父分类维度的检测项命中配置。 */
declare interface BaselinePolicySystemCategoryConf {
  /** 系统父分类 ID。 */
  CategoryID: number;
  /** 是否全选该父分类下所有子分类。true 全选，false 按 SubCategoryConfList 明细生效。 */
  AllSelect: boolean;
  /** 子分类配置列表，AllSelect=false 时按此明细生效。 */
  SubCategoryConfList: BaselinePolicySubCategoryConf[];
}

/** 按风险等级聚合的未通过检测项数量统计。 */
declare interface BaselineRiskLevelStatistic {
  /** 风险等级。取值：LOW（低危）、MEDIUM（中危）、HIGH（高危）、CRITICAL（严重）。 */
  RiskLevel?: string;
  /** 该风险等级下结果为 NOT_PASS 的检测项数量。 */
  NotPassCount?: number;
}

/** 基线系统子分类（含其下全部内置检测项 ID 列表）。 */
declare interface BaselineSubCategory {
  /** 子分类基础信息。 */
  Category?: BaselineCategory;
}

/** 基线扫描的子任务，按检测资产维度拆分（一台主机或一个集群对应一条子任务）。 */
declare interface BaselineSubTask {
  /** 子任务 ID。 */
  ID?: number;
  /** 所属主任务 ID（对应 BaselineMainTask.ID）。 */
  TaskID?: number;
  /** 子任务执行结果。取值：SUCCESS：成功FAILED：失败USER_CANCELED：用户取消CHECKING：检测中UNKNOWN：未知状态 */
  Status?: string;
  /** 子任务所属租户 Appid。 */
  Appid?: number;
  /** 子任务开始执行时间。 */
  StartTime?: string;
  /** 子任务结束时间，未结束时为空。 */
  FinishTime?: string;
  /** 检测资产大类，区分主机基线与容器集群基线。取值：HOST：主机CLUSTER：容器集群 */
  CheckAssetType?: string;
  /** CheckAssetType=HOST 时返回的主机资产信息，CLUSTER 时为空。 */
  HostAsset?: BaselineHostAsset | null;
  /** 状态码：失败时返回失败码（如 AGENT_OFFLINE、SCAN_TIMEOUT、CLIENT_SCAN_FAILED 等），检测中时返回检测状态，成功或用户取消时为空。 */
  ErrCode?: string;
  /** 失败时的详细原因描述，成功、用户取消或检测中时为空。 */
  ErrMessage?: string;
  /** 失败时的解决方案建议，成功、用户取消或检测中时为空。 */
  Solution?: string;
  /** CheckAssetType=CLUSTER 时返回的集群资产信息，HOST 时为空。 */
  ClusterAsset?: BaselineClusterAsset | null;
}

/** 集团管理员侧的基线同步配置。 */
declare interface BaselineSyncConf {
  /** 是否开启向成员账号自动同步基线配置。true 开启，false 关闭。 */
  AutoSync: boolean;
  /** 自动同步的目标成员账号 Appid 列表，AutoSync=true 时生效。 */
  TargetAppidList: number[];
  /** 用户配置列表 */
  UserConfList?: UserConfSyncStatus[];
}

/** 基线系统主分类（含其下所有子分类与检测项 ID 列表）。 */
declare interface BaselineSystemCategory {
  /** 该父分类下的子分类列表（每个子分类含其内置检测项 ID 列表）。 */
  SubCategoryList?: BaselineSubCategory[];
  /** 系统父分类基础信息（ID、名称、描述、CheckAssetType）。 */
  Category?: BaselineCategory;
  /** 检测项个数 */
  ItemCount?: number;
}

/** 用户级基线其他配置（同步授权、离线清风险、Agent 扫描超时等）。 */
declare interface BaselineUserOtherConf {
  /** 是否允许集团管理员将基线配置同步到本账号。true 允许，false 不允许。 */
  AllowSync: boolean;
  /** 资产离线时是否自动清除其历史风险结果。true 清除，false 保留。 */
  CleanRiskWhenOffline: boolean;
  /** Agent 单次扫描的超时时间，单位秒。取值范围 [60, 86400]，默认 1800。 */
  AgentScanTimeout: number;
}

/** 用户行为 异常行为详细信息 */
declare interface BehaviorInfo {
  /** 日期 */
  Date?: string | null;
  /** 具体数据，用来渲染曲线 */
  NodeInfo?: NodeInfo[] | null;
}

/** 用户行为概览 */
declare interface BehaviorSummary {
  /** 具体行为数据，用于渲染曲线图 */
  BehaviorInfo?: BehaviorInfo[] | null;
  /** 异常行为个数 */
  AbnormalCount?: number | null;
  /** 是否接入 */
  IsAccess?: boolean | null;
}

/** 标准阻断模式规则 */
declare interface BruteAttackRule {
  /** 爆破事件发生的时间范围，单位：秒 */
  TimeRange: number;
  /** 爆破事件失败次数 */
  LoginFailTimes: number;
}

/** 暴力破解判定规则列表 */
declare interface BruteAttackRuleList {
  /** 爆破事件发生的时间范围，单位：秒 */
  TimeRange?: number;
  /** 爆破事件失败次数 */
  LoginFailTimes?: number;
  /** 规则是否为空，为空则填充默认规则 */
  Enable?: boolean;
  /** 爆破事件发生的时间范围，单位：秒（默认规则） */
  TimeRangeDefault?: number;
  /** 爆破事件失败次数（默认规则） */
  LoginFailTimesDefault?: number;
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

/** 云资源配置风险统计信息 */
declare interface CFGRiskStatisticsItem {
  /** 风险总数 */
  TotalRiskCount?: number;
  /** 近7天新增风险数量 */
  RiskAddCount?: number;
  /** 全部云资源配置风险的待修复项 */
  CheckViewCount?: number;
  /** 高优待修复风险 */
  HighPriorityRiskCount?: number;
  /** 近7天新增的待修复项 */
  CheckViewAddCount?: number;
  /** 全部云资源配置风险的待修复项，高优待修复 */
  HighPriorityCheckViewCount?: number;
  /** 资产视角下的展示条数 */
  AssetViewCount?: number;
  /** 近7天新增的待修复资产条数 */
  AssetViewAddCount?: number;
  /** 资产视角下的展示条数，高优待修复量 */
  HighPriorityAssetViewCount?: number;
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

/** CSIP扫描任务主机额外资产信息 */
declare interface CSIPMachineExtraInfo {
  /** 公网IP */
  WanIP?: string;
  /** 内网IP */
  PrivateIP?: string;
  /** 实例ID（CVM/BM/ECM唯一标识） */
  InstanceID?: string;
}

/** 文件查杀手动扫描详情 */
declare interface CSIPMalwareScanUuidDetailItem {
  /** UUID */
  Uuid?: string;
  /** QUUID */
  Quuid?: string;
  /** 机器APPID */
  MachineAppId?: number;
  /** 机器名 */
  MachineName?: string;
  /** 机器IP */
  MachineIP?: string;
  /** 类型 */
  OsType?: string;
  /** 主机额外信息（公网IP、内网IP、实例ID） */
  MachineExtraInfo?: CSIPMachineExtraInfo;
  /** 状态 */
  Status?: number;
  /** 风险个数 */
  RiskCount?: number;
  /** 扫描耗时（秒） */
  UsedTimeS?: number;
  /** 异常码 */
  Exception?: number;
  /** 异常信息 */
  ExceptionMessage?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
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

/** 订单额外参数 */
declare interface CWPOrderExtraParam {
  /** PrePay 包年包月PostPay 按量计费Disposable 一次性交付 */
  Mode?: string;
  /** 一次性服务交付状态,仅一次性资源订单才有该值false 未验收true 已验收 */
  DisposableStatus?: boolean;
}

/** 订单列表对象成员 */
declare interface CWPOrderList {
  /** 所属产品 p_ */
  ProductCode?: string | null;
  /** 子产品 sp_ */
  SubProductCode?: string | null;
  /** 计费项四层 sv_ */
  InquireKey?: string | null;
  /** 资源购买量 */
  InquireNum?: number | null;
  /** 资源用量 */
  UsedNum?: number | null;
  /** 云标签 */
  TagList?: Tags[] | null;
  /** 订单状态 1 正常 2隔离 3销毁 */
  Status?: number | null;
  /** 订单的开始时间 */
  BeginTime?: string | null;
  /** 订单的结束时间 */
  EndTime?: string | null;
  /** 项目ID */
  ProjectID?: number | null;
  /** 资源别名 */
  Alias?: string | null;
  /** 资源ID */
  ResourceId?: string | null;
  /** 自动续费标签 0 默认不自动续费(大客户特权会自动续费的) 1 自动续费 2 手动设置不自动续费(大客户特权不会自动续费) */
  AutoRenewFlag?: number | null;
  /** 资源类型 */
  SourceType?: number | null;
  /** 计费模式 0 后付费 1 预付费(包年包月) */
  PayMode?: number | null;
  /** 地域ID */
  RegionID?: number | null;
  /** 可用区ID */
  ZoneID?: number | null;
  /** 当前子订单号 */
  DealName?: string | null;
  /** 订单额外参数 */
  ExtraParam?: CWPOrderExtraParam | null;
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

/** 子项扣分及待办信息 */
declare interface CategoryItem {
  /** 子项ID枚举值：vulnerability：漏洞治理cloud_config：云产品配置治理system_baseline：系统基线风险intrusion_alert：入侵威胁告警cloud_api_alert：云API告警ai_agent_alert：AI Agent安全告警object_storage_alert：对象存储异常告警database_alert：数据库安全告警protection_config：推荐防护配置未开启edition_coverage：专业版/旗舰版覆盖率不足product_expiry：产品7天内到期 */
  CategoryId?: string;
  /** 子项名称 */
  CategoryName?: string;
  /** 子类说明 */
  CategoryDesc?: string;
  /** 子项扣分上限 */
  MaxDeductScore?: number;
  /** 子项实际扣分 */
  DeductScore?: number;
  /** 风险总数 */
  RiskCount?: number;
  /** 等级明细，风险/威胁类子项有值 */
  SeverityItems?: SeverityItem[];
  /** 扣分原因描述 */
  DeductReason?: string;
  /** 处理建议文案 */
  ActionText?: string;
  /** 防护配置详情，仅防护配置维度子项返回 */
  ProtectionDetail?: ProtectionDetail;
}

/** 资产树-资产分类节点 */
declare interface CategoryNode {
  /** 资产分类名称 */
  Category?: string;
  /** 展示顺序 */
  DisplayOrder?: number;
  /** 下级资产类型节点 */
  AssetTypes?: AssetTypeNode[];
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

/** CLB监听器 */
declare interface ClbListenerItem {
  /** 监听器ID */
  ListenerID?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 协议 */
  Protocol?: string;
  /** 端口 */
  Port?: number;
  /** 创建时间 */
  CreateTime?: string;
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

/** CLB七层转发规则 */
declare interface ClbListenerRuleItem {
  /** 监听器ID */
  ListenerID?: string;
  /** 规则ID */
  LocationID?: string;
  /** 域名 */
  Domain?: string;
  /** URL */
  Url?: string;
  /** 创建时间 */
  CreateTime?: string;
}

/** CLB后端服务 */
declare interface ClbTargetItem {
  /** 实例ID */
  InstanceID?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 内网IP地址 */
  PrivateIpAddresses?: string;
  /** 网卡ID */
  EniID?: string;
  /** 端口 */
  Port?: number;
}

/** 客户端设置相关功能主机结构体 */
declare interface ClientSettingHost {
  /** host对应的数据库记录ID */
  Id?: number;
  /** 主机名字 */
  Name?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 公网IP */
  PublicIp?: string;
  /** 内网IP */
  PrivateIp?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机状态OFFLINE: 离线ONLINE: 在线SHUTDOWN: 已关机UNINSTALLED: 未防护 */
  Status?: string;
  /** ins-sad143 */
  VpcId?: string;
  /** 地域信息 */
  RegionInfo?: RegionInfo;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo;
  /** 0: 关闭1: 开启2: 开启中3: 关闭中9: 未设置 */
  FunctionStatus?: number;
  /** 以下几个固定值需要前端特殊处理，其他失败原因可直接展示：UNINSTALLED -- 未安装NEED_UPGRADE -- 需要升级NOT_RUNNING -- 已关机NO_PASSWORD -- 未开启密码登录，无法开启扫码 */
  Message?: string;
  /** 失败原因 */
  MessageDesc?: string;
  /** 实例状态RUNNING: 运行中STOPED: 已关机EXPIRED: 待回收 */
  InstanceStatus?: string;
}

/** 云厂商资产数量明细 */
declare interface CloudAssetInfo {
  /** 云厂商类型枚举值：tencent：腾讯云aliyun：阿里云aws：AWShuawei：华为云azure：Azure */
  CloudType?: string;
  /** 该云厂商的资产数量取值范围：[0, +∞) */
  Count?: number;
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

/** 云服务器类型机器数量 */
declare interface CloudFromCnt {
  /** 云服务器类型 */
  CloudFrom?: number;
  /** 机器数量 */
  MachineCnt?: number;
}

/** 云函数 */
declare interface CloudFunctionItem {
  /** 云函数名称 */
  InstanceName?: string;
  /** 云函数状态 */
  InstanceStatus?: string;
  /** 云函数类型 */
  FunctionType?: string;
  /** 资源标签 */
  InstanceTag?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 地域 */
  Region?: string;
  /** 自定义域名 */
  Domain?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 租户ID */
  AppID?: number;
  /** 云函数状态展示内容 */
  InstanceStatusDisplay?: string;
  /** 核心资产标签 */
  CoreAssetFlag?: string;
  /** 公网访问URL */
  PublicURL?: string;
  /** 私网访问URL */
  PrivateURL?: string;
  /** 所属账号 */
  AccountInfo?: string;
}

/** 集群容器列表项 */
declare interface ClusterContainerListItem {
  /** appid */
  AppID?: number;
  /** 资产id */
  AssetId?: string;
  /** 容器id */
  ContainerId?: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 运行状态 */
  RunStatus?: string;
  /** 节点id */
  NodeId?: string;
  /** 节点类型 */
  NodeType?: string;
  /** pod唯一id */
  PodUid?: string;
  /** pod名称 */
  PodName?: string;
  /** 镜像id */
  ImageId?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 隔离状态 */
  IsolateStatus?: string;
  /** 严重风险数量 */
  RiskEventCriticalCount?: number;
  /** 高危风险数量 */
  RiskEventHighCount?: number;
  /** 中危风险数量 */
  RiskEventMiddleCount?: number;
  /** 低危风险数量 */
  RiskEventLowCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 关联告警数 */
  AlarmCount?: number;
}

/** 集群自定义参数 */
declare interface ClusterCustomParameters {
  /** 占位符名称入参限制：长度 1-256适用分支：腾讯云分支（IsCloud=true） */
  Name?: string;
  /** 一个或多个取值（多个取值以逗号拼接替换占位符）入参限制：每个元素长度 1-256适用分支：腾讯云分支（IsCloud=true） */
  Values?: string[];
  /** 是否精确匹配默认值：false */
  ExactMatch?: boolean;
}

/** 集群定位信息 */
declare interface ClusterIDWithAppIdItem {
  /** 集群ID */
  ClusterID: string;
  /** 集群所属AppId */
  AppId: number;
}

/** 集群列表项 */
declare interface ClusterListItem {
  /** appid */
  AppID?: number;
  /** 资产id */
  AssetId?: string;
  /** 集群id */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群类型MANAGED_CLUSTER: 托管集群 */
  ClusterType?: string;
  /** 严重告警事件数 */
  AlarmEventCriticalCount?: number;
  /** 高危告警事件数 */
  AlarmEventHighCount?: number;
  /** 中危告警事件数 */
  AlarmEventMiddleCount?: number;
  /** 低危告警事件数 */
  AlarmEventLowCount?: number;
  /** 严重风险事件数 */
  RiskEventCriticalCount?: number;
  /** 高危风险事件数 */
  RiskEventHighCount?: number;
  /** 中危风险事件数 */
  RiskEventMiddleCount?: number;
  /** 低危风险事件数 */
  RiskEventLowCount?: number;
  /** 节点总数 */
  NodeCount?: number;
  /** 离线节点总数 */
  OfflineNodeCount?: number;
  /** 未安装节点总数 */
  UninstallNodeCount?: number;
  /** 总核数 */
  TotalCoresCount?: number;
  /** 已防护核数 */
  DefendCoresCount?: number;
  /** 审计日志开关(0:关闭 1:开启 2:开启失败 3:关闭失败) */
  AuditLogSwitchStatus?: number;
  /** 防护状态已防护: Defended */
  DefendStatus?: string;
  /** 集群状态 */
  RunStatus?: string;
  /** 地域 */
  Region?: string;
  /** k8s版本 */
  Version?: string;
  /** 最近资产同步时间 */
  LastAssetSyncTime?: string;
  /** 最近风险检查时间 */
  LastRiskCheckTime?: string;
  /** 风险状态 */
  RiskStatus?: string;
  /** 标签列表 */
  Tags?: AssetTag[];
  /** 负责人名称 */
  OwnerName?: string;
  /** 失败原因 */
  FailMessage?: string;
  /** 运行子状态 */
  RunSubStatus?: string;
  /** 集群接入状态枚举值：AccessedNone： 未接入AccessedInstalling： 接入中AccessedInstalled： 已接入-未防护AccessedUninstalling： 卸载中AccessedUninstallException： 卸载异常AccessedDefended： 已接入-已防护AccessedPartialDefence： 已接入-部分防护AccessedException： 接入异常 */
  AccessedStatus?: string;
  /** 接入子状态 */
  AccessedSubStatus?: string;
  /** 集群ca证书md5值，集群唯一标识 */
  ClusterCaMD5?: string;
  /** 资产同步状态枚举值：AssetCheckNone： 初始状态AssetCheckSync： 同步中AssetCheckFinished： 同步完成AssetCheckFailed： 同步失败 */
  AssetSyncStatus?: string;
  /** 集群配置风险数量 */
  RiskConfigCount?: number;
  /** 集群接入失败原因 */
  AccessFailedMessage?: string;
  /** 地域中文名 */
  RegionName?: string;
  /** 地域英文名 */
  RegionNameEn?: string;
  /** 未绑定旗舰版的节点数量 */
  UnboundUltimateNodeCount?: number;
}

/** 集群命名空间项 */
declare interface ClusterNamespaceListItem {
  /** appid */
  AppID?: number;
  /** 名称 */
  Name?: string;
  /** 标签 */
  Label?: AssetTag[];
  /** 创建时间 */
  CreateTime?: string;
  /** 资产 ID */
  AssetId?: string;
  /** 命名空间唯一标识ID */
  UniqueID?: string;
}

/** 集群节点列表项 */
declare interface ClusterNodeListItem {
  /** 资产 ID */
  AssetId?: string;
  /** appid */
  AppID?: number;
  /** 节点id */
  NodeId?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 公网ip */
  PublicIP?: string;
  /** 内网ip */
  InternalIP?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 核数 */
  CoresCount?: number;
  /** 标签 */
  Tags?: string[];
  /** 运行状态 */
  RunStatus?: string;
  /** 是否为新资产 */
  IsNew?: boolean;
  /** 节点唯一 ID */
  UniqueID?: string;
  /** 客户端状态枚举值：ONLINE： 在线OFFLINE： 离线UNINSTALL： 未安装 */
  ClientStatus?: string;
  /** 节点实例ID */
  InstanceId?: string;
}

/** 集群pod列表项 */
declare interface ClusterPodListItem {
  /** 资产id */
  AssetId?: string;
  /** appid */
  AppID?: number;
  /** pod唯一id */
  PodUid?: string;
  /** pod名称 */
  PodName?: string;
  /** podip数组 */
  PodIPs?: string[];
  /** pod状态 */
  RunStatus?: string;
  /** 防护核数 */
  DefendCoresCount?: number;
  /** 节点id */
  NodeId?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 负载名称 */
  WorkloadName?: string;
  /** 负载类型 */
  WorkloadType?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** Pod唯一标识ID */
  UniqueID?: string;
  /** 严重风险数量 */
  RiskEventCriticalCount?: number;
  /** 高危风险数量 */
  RiskEventHighCount?: number;
  /** 中危风险数量 */
  RiskEventMiddleCount?: number;
  /** 低危风险数量 */
  RiskEventLowCount?: number;
  /** 严重告警数量 */
  AlarmEventCriticalCount?: number;
  /** 高危告警数量 */
  AlarmEventHighCount?: number;
  /** 中危告警数量 */
  AlarmEventMiddleCount?: number;
  /** 低危告警数量 */
  AlarmEventLowCount?: number;
  /** 关联容器列表 */
  ContainerList?: ClusterContainerListItem[];
  /** 关联告警数 */
  AlarmCount?: number;
  /** 核数单位：毫核 */
  CoresCount?: number;
}

/** 集群service列表项 */
declare interface ClusterServiceListItem {
  /** appid */
  AppID?: number;
  /** 资产id */
  AssetId?: string;
  /** 名称 */
  Name?: string;
  /** selector标签 */
  SelectorLabel?: AssetTag[];
  /** 命名空间 */
  Namespace?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** service 唯一 ID */
  ServiceUniqueID?: string;
  /** service 类型 */
  ServiceType?: string;
  /** 集群IP */
  ClusterIP?: string;
  /** 外网IP */
  ExternalIP?: string[];
  /** 端口 */
  Ports?: string[];
}

/** 集群定位信息 */
declare interface ClusterWithAppIdItem {
  /** 集群ID */
  ClusterID: string | null;
  /** 集群所属AppId */
  AppId: number | null;
}

/** AI Agent 命令沙箱插件状态 */
declare interface CommandPluginState {
  /** 插件安装状态（上层聚合）枚举值：NONE：未安装INSTALLING：安装中INSTALLED：已安装INSTALL_FAIL：安装失败 */
  InstallStatus?: string;
}

/** 云资源配置检测章节项 */
declare interface ComplianceChapterItem {
  /** 菜单ID */
  MenuID?: string;
  /** 条款分类名称 */
  Name?: string;
  /** 条款对应章节 */
  Terms?: ComplianceTermItem[];
}

/** 云资源配置检测全部检查项统计 */
declare interface ComplianceCheckItemsOverview {
  /** 检查项数量 */
  TotalCount?: number;
  /** 检查项通过率 */
  PassRate?: number;
  /** 检查类型和检查项分布 */
  CheckTypes?: ComplianceCheckTypeItem[];
}

/** 云资源配置检测检查类型统计 */
declare interface ComplianceCheckTypeItem {
  /** 检查类型 */
  CheckType?: string;
  /** 关联检查项数量 */
  Count?: number;
}

/** 云资源配置检测合规标准概览 */
declare interface ComplianceStandardOverview {
  /** 规范ID */
  ID?: number;
  /** 规范名称 */
  Name?: string;
  /** 关联检查项数量 */
  TotalCount?: number;
  /** 检查项通过率 */
  PassRate?: number;
}

/** 云资源配置检测规范关联检查项 */
declare interface ComplianceStandardRuleCount {
  /** 规范ID */
  ID?: number;
  /** 规范名称 */
  Name?: string;
  /** 关联检查项数量 */
  Count?: number;
}

/** 云资源配置检测条款项 */
declare interface ComplianceTermItem {
  /** 条款ID */
  TermID?: number;
  /** 条款描述 */
  Description?: string;
  /** 条款名称 */
  Name?: string;
  /** 关联规则数量 */
  RuleCount?: number;
  /** 条款原理 */
  Rationale?: string;
  /** 编号 */
  Sn?: string;
}

/** 关联组件&路径详情 */
declare interface ComponentDetailItem {
  /** 组件名称 */
  Name?: string;
  /** 命中版本 */
  Version?: string;
  /** 关联路径 */
  Path?: string;
  /** 修复命令 */
  FixCommand?: string;
}

/** 高级镜像条件匹配（三个匹配串有且仅有一个非空） */
declare interface ConditionMatch {
  /** 镜像ID匹配串（三选一，有且仅有一个非空） */
  ImageIDMatchString?: string;
  /** 镜像名匹配串（三选一，有且仅有一个非空） */
  ImageNameMatchString?: string;
  /** 镜像地址匹配串（三选一，有且仅有一个非空） */
  ImageAddressMatchString?: string;
  /** 匹配条件，取值：EQUALS-等于/NOT_EQUALS-不等于/STARTS_WITH-以…开头/NOT_STARTS_WITH-不以…开头/ENDS_WITH-以…结尾/NOT_ENDS_WITH-不以…结尾/CONTAINS-包含/NOT_CONTAINS-不包含 */
  MatchType?: string;
}

/** 容器应用信息 */
declare interface ContainerAppItem {
  /** 应用综合类型如web或app或db */
  MainType?: string | null;
  /** 具体应用类型如nginx或redis */
  Type?: string | null;
  /** 应用版本号 */
  Version?: string | null;
  /** 运行用户名 */
  RunAs?: string | null;
  /** 可执行文件路径 */
  ExePath?: string | null;
  /** 配置文件路径 */
  ConfigPath?: string | null;
  /** 关联进程数量 */
  ProcessCnt?: number;
}

/** 容器组件信息 */
declare interface ContainerComponentItem {
  /** 组件名称 */
  Name?: string | null;
  /** 组件版本号 */
  Version?: string | null;
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

/** 容器挂载信息 */
declare interface ContainerMountItem {
  /** 挂载类型 */
  Type?: string | null;
  /** 宿主机路径 */
  Source?: string | null;
  /** 容器内路径 */
  Destination?: string | null;
  /** 挂载模式 */
  Mode?: string | null;
  /** 是否可读写 */
  RW?: boolean | null;
  /** 传播方式 */
  Propagation?: string | null;
  /** 挂载名称 */
  Name?: string | null;
  /** 驱动名称 */
  Driver?: string | null;
}

/** 容器端口信息 */
declare interface ContainerPortItem {
  /** 监听进程名称 */
  ProcessName?: string | null;
  /** 容器内监听端口 */
  ContainerPort?: number;
  /** 进程运行用户 */
  RunAs?: string | null;
  /** 容器内进程ID */
  ContainerPID?: number;
  /** 宿主机内网IP地址 */
  HostInnerIP?: string | null;
  /** 宿主机外网IP地址 */
  HostPublicIP?: string | null;
  /** 宿主机映射端口 */
  PublicPort?: number;
  /** 网络协议类型 */
  ProtocolType?: string | null;
}

/** 容器进程信息 */
declare interface ContainerProcessItem {
  /** 进程名称 */
  ProcessName?: string | null;
  /** 宿主机进程ID */
  PID?: number;
  /** 容器内进程ID */
  ContainerPID?: number;
  /** 进程可执行文件路径 */
  ProcessPath?: string | null;
  /** 进程运行用户 */
  RunAs?: string | null;
  /** 进程启动时间 */
  StartTime?: string | null;
}

/** 容器Web服务信息 */
declare interface ContainerWebServiceItem {
  /** Web服务类型 */
  Type?: string | null;
  /** 服务版本号 */
  Version?: string | null;
  /** 服务启动用户 */
  RunAs?: string | null;
  /** 可执行文件路径 */
  ExePath?: string | null;
  /** 配置文件路径 */
  ConfigPath?: string | null;
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
  /** 是否自动监测 */
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

/** 创建任务返回项 */
declare interface CreatedTaskItem {
  /** 任务ID */
  TaskId?: number | null;
  /** 任务类型：HOST-主机扫描/CONTAINER-容器扫描 */
  TaskType?: string | null;
  /** 任务所属账号AppId */
  AppId?: number | null;
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

/** 自定义Agent运行策略 */
declare interface CustomAgentRunModePolicy {
  /** 运行内存 */
  Memory?: number | null;
  /** 运行cpu */
  Cpu?: number | null;
  /** 网络抓包上限 */
  NetworkPps?: number | null;
}

/** 指定策略详情配置 */
declare interface CustomRiskRuleDetailItem {
  /** 规则开启状态 */
  Status?: string;
  /** 租户ID */
  AppID?: number;
}

/** 自定义策略详情 */
declare interface CustomRiskRuleItem {
  /** 风险规则ID */
  RuleID?: string;
  /** 腾讯云 */
  Provider?: string;
  /** 风险标题 */
  RiskTitle?: string;
  /** 风险分类 */
  Classify?: string;
  /** 风险等级 */
  Severity?: string;
  /** 风险规则开启状态 */
  Status?: string;
  /** 关联的账号数量 */
  RelatedUinCount?: number;
  /** 策略启用的账号数量 */
  PolicyEnableCount?: number;
  /** 资产类型 */
  AssetType?: string;
  /** 规则是否免费 */
  IsFree?: number;
  /** 检查类型 */
  CheckType?: string;
  /** 安全条款规范 */
  StandardTerms?: StandardTerm[];
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
}

/** 云安全中心标签 */
declare interface CustomTag {
  /** 标签ID */
  TagID?: number;
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
  /** 标签颜色 */
  TagColor?: string;
}

/** 策略的周期扫描配置（间隔类型 + 间隔取值 + 扫描时段窗口）。 */
declare interface CycleScanConf {
  /** 周期扫描开关。0 关闭，1 开启。 */
  Enable: number;
  /** 周期扫描的间隔类型。取值：DAY：每若干天，IntervalValueList 取间隔天数（如 ["1"] 表示每天）WEEK：每周指定星期几，IntervalValueList 取 1~7（周一~周日）MONTH：每月指定日期，IntervalValueList 取 1~31 */
  IntervalType: string;
  /** 周期取值列表，含义随 IntervalType 变化：IntervalType=DAY：每隔多少天，例如 ["1"] 表示每天IntervalType=WEEK：每周的星期几，取值 1~7（周一 ~ 周日）IntervalType=MONTH：每月的几号，取值 1~31 */
  IntervalValueList: string[];
  /** 扫描时段起始时间，格式 HH:mm，例如 02:00。 */
  ScanStart: string;
  /** 扫描时段结束时间，格式 HH:mm，例如 06:00。 */
  ScanEnd: string;
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

/** 云边界风险待治理风险信息 */
declare interface DescribeExposureStatisticsItem {
  /** 风险标题 */
  Title?: string;
  /** 风险等级 */
  Severity?: string;
  /** 风险类型 */
  RuleType?: string;
  /** 关联风险数量 */
  RiskCount?: number;
}

/** EDR-检测方式对应策略数量 */
declare interface DetectTypeCount {
  /** 检测方式，0：主机检测，1：网络检测 */
  DetectType?: number;
  /** 策略数量 */
  Count?: number;
}

/** 维度扣分项 */
declare interface DimensionItem {
  /** 维度ID枚举值：risk_governance：风险治理threat_detection：威胁检测protection_config：防护配置 */
  DimensionId?: string;
  /** 维度名称 */
  DimensionName?: string;
  /** 维度扣分上限 */
  MaxDeductScore?: number;
  /** 维度实际扣分 */
  DeductScore?: number;
  /** 子项列表 */
  Categories?: CategoryItem[];
}

/** 维度趋势数据 */
declare interface DimensionTrendData {
  /** 维度ID枚举值：risk_governance：风险治理threat_detection：威胁检测 */
  DimensionId?: string;
  /** 每日数据点 */
  DataPoints?: TrendDataPoint[];
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
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群名 */
  ClusterName?: string | null;
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
  /** 关联的识别模板信息 */
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
  /** 关联的数据项信息 */
  RuleRelations?: DspmIdentifyComplianceRuleRelation[];
  /** 子节点信息 */
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
  /** 关联的识别模板信息 */
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
  /** 关联的识别模板信息 */
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
  /** MongoDb的集群类型，非 MongoDB 资产固定 0枚举值：0： 副本集1： 分片默认值：0 */
  ClusterType?: number;
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群名 */
  ClusterName?: string | null;
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
  /** 规则来源 */
  RuleSource?: string | null;
  /** 支持的资产类型 */
  AssetTypes?: string[];
  /** 风险描述 */
  RiskDescription?: string;
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
  /** 规则来源 */
  RuleSource?: string | null;
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
  /** 白名单类型 */
  WhitelistType?: string;
}

/** 批量添加白名单：重复情况重复列表实体 */
declare interface DuplicateHosts {
  /** Quuid 参数 */
  Quuid?: string;
  /** Uuid 参数 */
  Uuid?: string;
  /** Id 参数 */
  Id?: number;
}

/** 资产详情动态tab配置 */
declare interface DynamicTab {
  /** key */
  TabKey?: string;
  /** 数量 */
  Count?: number;
  /** 关联资产配置 */
  AssetType?: AssetTypeCount[];
}

/** EDR任务列表 */
declare interface EDRExportJobItem {
  /** 任务ID */
  JobId?: string;
  /** 任务名 */
  JobName?: string;
  /** 数据源 */
  Source?: string;
  /** 导出状态 */
  ExportStatus?: string;
  /** 导出进度 */
  ExportProgress?: number;
  /** 失败信息 */
  FailureMsg?: string;
  /** 超时时间 */
  Timeout?: string;
  /** 插入时间 */
  InsertTime?: string;
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

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface EDRFilters {
  /** 过滤键的名称。 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 是否模糊匹配，前端框架会带上，可以不管 */
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
  /** 生效集群ID列表（TCSSScope=0 时有值；空返回 []） */
  ClusterIDs?: string[];
  /** 排除集群ID列表（空返回 []） */
  ExcludeClusterIDs?: string[];
  /** 容器条件匹配 */
  ConditionMatches?: ConditionMatch[];
  /** 安全中心标签 */
  TagItems?: EDRRuleTagItem[];
}

/** 安全中心标签 */
declare interface EDRRuleTagItem {
  /** 安全中心标签ID */
  ID?: number;
  /** 标签中文Key */
  TagKey?: string;
  /** 标签英文key */
  TagKeyEn?: string;
  /** 标签中文值 */
  TagValue?: string;
  /** 标签英文值 */
  TagValueEn?: string;
  /** 标签描述 */
  Description?: string;
  /** 标签颜色 */
  Color?: string;
}

/** 扫描任务记录项 */
declare interface EDRScanRecordItem {
  /** 任务主键 ID */
  TaskId?: number | null;
  /** 任务名称，如 Malware_20260702_030000 */
  TaskName?: string | null;
  /** 扫描类型枚举值：MANNAL： 手动扫描CYCLE： 定时扫描 */
  TriggerType?: string | null;
  /** 定时调度描述（ScanType=1 时有值），如“每天 03:00:00” */
  ScheduleDesc?: string | null;
  /** 任务资产类型：0=主机扫描，1=容器扫描 */
  TaskType?: string | null;
  /** 扫描目标涉及的账号AppId列表 */
  TargetAppIDs?: number[] | null;
  /** 任务创建者账号名称 */
  AccountName?: string | null;
  /** 云类型：0=腾讯云，1=AWS，2=Azure，4=阿里云 */
  CloudType?: number | null;
  /** 资产选择方式：all=全部资产，tag=按标签选择，direct=直接选择 */
  AssetSelectionType?: string | null;
  /** 扫描资产总数 */
  TotalAssetCount?: number | null;
  /** 创建者账号AppId（前端据此判断操作权限） */
  CreateAppID?: number | null;
  /** 创建者账号uin */
  Creator?: string | null;
  /** 创建者账号名称 */
  CreatorName?: string | null;
  /** 创建者云类型：0=腾讯云, 1=AWS, 2=Azure, 4=阿里云 */
  CreatorCloudType?: number | null;
  /** 任务开始时间，格式 2006-01-02 15:04:05 */
  StartTime?: string | null;
  /** 任务结束时间，未结束为空字符串 */
  EndTime?: string | null;
  /** WAIT：待扫描，SCANNING：扫描中，FINISHED：已完成，FAILED：失败，CANCELED：已停止枚举值：WAIT： 待扫描SCANNING： 扫描中FINISHED： 已完成FAILED： 失败CANCELED： 已停止 */
  Status?: string | null;
}

/** 容器资产扫描详情项 */
declare interface EDRScanTaskContainerItem {
  /** 容器ID */
  ContainerID?: string | null;
  /** 容器名称 */
  ContainerName?: string | null;
  /** Pod名称 */
  PodName?: string | null;
  /** 集群ID */
  ClusterID?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
  /** 集群类型 */
  ClusterType?: string | null;
  /** 资产所属账号名称（后端富化） */
  AccountName?: string | null;
  /** 所属账号AppId */
  AppId?: number | null;
  /** 云类型 */
  CloudType?: number | null;
  /** 扫描状态：WAIT/SCANNING/FINISHED/FAILED */
  Status?: string | null;
  /** 告警数 */
  RiskCount?: number | null;
  /** 失败原因 */
  FailReason?: string | null;
  /** 解决方案 */
  FixSuggestion?: string | null;
}

/** 主机资产扫描详情项 */
declare interface EDRScanTaskHostItem {
  /** 主机唯一标识 */
  Quuid?: string | null;
  /** 主机名称 */
  HostName?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 公网IP */
  PublicIp?: string | null;
  /** 内网IP */
  PrivateIp?: string | null;
  /** 操作系统 */
  OsType?: string | null;
  /** 资产所属账号名称（后端富化） */
  AccountName?: string | null;
  /** 资产所属账号AppId */
  AppId?: number | null;
  /** 云类型 */
  CloudType?: number | null;
  /** 扫描状态：WAIT/SCANNING/FINISHED/FAILED */
  Status?: string | null;
  /** 风险数 */
  RiskCount?: number | null;
  /** 失败原因 */
  FailReason?: string | null;
  /** 解决方案 */
  FixSuggestion?: string | null;
}

/** EDR告警大类对应的告警数量 */
declare interface EdrAlertCategoryCount {
  /** 告警大类 */
  AlertCategory?: string;
  /** 告警数量 */
  Count?: number;
}

/** EDR告警数量统计项 */
declare interface EdrAlertCountItem {
  /** 查询实例ID */
  InstanceId?: string;
  /** 总告警条数 */
  TotalCount?: number;
  /** 病毒木马（VIRUS_TROJAN）数量 */
  VirusTrojanCount?: number;
  /** 异常登录（ABNORMAL_LOGIN）数量 */
  AbnormalLoginCount?: number;
  /** 主机行为（HOST_BEHAVIOR）数量 */
  HostBehaviorCount?: number;
  /** 网络行为（NETWORK_BEHAVIOR）数量 */
  NetworkBehaviorCount?: number;
  /** 存在告警的主机数量（仅 GlobalCount 模式有值） */
  InstancesCount?: number;
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
  /** 容器名称 */
  ContainerName?: string;
  /** 容器镜像名称 */
  ImageName?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 容器运行状态（原始枚举 RUNNING/PAUSED/STOPPED…，前端自行映射）枚举值：RUNNING： 运行PAUSED： 暂停STOPPED： 停止CREATED： 已经创建DESTROYED： 已销毁RESTARTING： 重启中REMOVING： 迁移中DEAD： DEADUNKNOWN： 未知 */
  RunStatus?: string;
  /** POD 名称 */
  PodName?: string;
  /** POD IP */
  PodIp?: string;
  /** 命名空间 */
  Namespace?: string;
  /** POD 负载类型 */
  PodWorkloadType?: string;
  /** 集群 ca 证书 md5 */
  ClusterCaMD5?: string;
  /** POD 唯一 id */
  PodUniqueId?: string;
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
  /** 机器类型（列表接口专有；不限于容器告警，主机告警同样返回）。按 Quuid 富化自 machines.machine_type，原始枚举值原样透传、不做 i18n 翻译，前端自行映射展示。取值如 CVM / LH / Other / EKS-NATIVE 等；查不到对应机器信息时降级为空串 ""（与 InstanceName / PublicIp / PrivateIp 等资产富化字段降级行为一致）。告警详情接口（DescribeEdrAlertInfo）不返回此字段 */
  MachineType?: string;
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
  /** 容器名称 */
  ContainerName?: string;
  /** 容器镜像名称 */
  ImageName?: string;
  /** 集群名称 */
  ClusterName?: string;
}

/** 标签查询结果项 */
declare interface EdrAlertTagItem {
  /** 告警ID */
  AlertId?: string;
  /** 腾讯云标签 */
  CloudTags?: TagItem[];
  /** 安全中心标签 */
  CSIPTags?: CSIPTag[];
  /** 情报标签 */
  ThreatTags?: string[];
  /** IP情报信息 */
  IPIntel?: IPIntelInfo;
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

/** EDR告警定位信息，用于永久忽略/取消忽略 */
declare interface EdrAlertTargetForIgnore {
  /** 告警主键ID */
  Id: number;
  /** 告警所属账号ID（跨账号，前端必传） */
  AppId: number;
  /** 告警唯一标识 */
  AlertId?: string;
  /** 主机UUID（可选） */
  Quuid?: string;
  /** 实例ID（可选，用于白名单删除） */
  InstanceId?: string;
}

/** 容器告警分组统计项（仅返回 TotalCount，不做告警大类拆分） */
declare interface EdrContainerAlertCountItem {
  /** 集群 ID（按集群分组时有值，否则空串） */
  ClusterId?: string;
  /** 容器 ID（按容器分组时有值，否则空串） */
  ContainerId?: string;
  /** 该集群/容器的告警总条数 */
  TotalCount?: number;
}

/** 容器告警全局统计 */
declare interface EdrContainerGlobalCount {
  /** 总告警条数 */
  TotalCount?: number;
  /** 存在告警的集群数量（COUNT(DISTINCT cluster_id)，排除空 cluster_id） */
  ClustersCount?: number;
}

/** 统计条目 */
declare interface Element {
  /** 统计类型 */
  Key?: string;
  /** 统计对象 */
  Value?: string;
}

/** 即将到期产品 */
declare interface ExpiringProduct {
  /** 产品ID */
  ProductId?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 距到期天数单位：天 */
  DaysToExpire?: number;
  /** 到期时间 */
  ExpireTime?: string;
}

/** 导出任务信息 */
declare interface ExportJobItem {
  /** 任务ID */
  JobID?: string;
  /** 任务名称 */
  JobName?: string;
  /** 任务来源 */
  Source?: string;
  /** 任务状态 */
  ExportJobStatus?: string;
  /** 任务进度 */
  ExportProgress?: number;
  /** 错误信息 */
  FailureMsg?: string;
  /** 任务超时时间 */
  Timeout?: string;
  /** 任务创建时间 */
  InsertTime?: string;
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

/** 云边界待处理风险信息 */
declare interface ExposeRiskItem {
  /** 规则类型 */
  RuleType?: string;
  /** 风险等级 */
  Severity?: string;
  /** 规则名称 */
  Title?: string;
}

/** 云边界规则信息 */
declare interface ExposeRuleItem {
  /** 规则类型 */
  RuleType?: string;
  /** 风险等级 */
  Severity?: string;
  /** 规则名称 */
  Title?: string;
  /** 修复建议 */
  FixAdvice?: string;
}

/** 暴露趋势周期统计数量信息 */
declare interface ExposeTrendItem {
  /** 完全开放数量 */
  OpenCount?: number;
  /** 受限访问数量 */
  AclCount?: number;
  /** 无法访问数量 */
  CloseCount?: number;
  /** 日期 */
  Date?: string;
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

/** 资产详情字段配置 */
declare interface FieldConfig {
  /** 字段显示 */
  Label?: string;
  /** 字段值 */
  Value?: string;
  /** 字段样式配置 */
  Style?: FieldStyle;
  /** 字段内容数量 */
  ValueCount?: number;
}

/** 字段样式配置 */
declare interface FieldStyle {
  /** 类型 */
  Type?: string;
  /** 是否支持复制 */
  Copy?: boolean;
  /** 颜色 */
  Color?: string;
  /** 跳转url */
  URL?: string;
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

/** 过滤条件。同一 Name 下多个 Values 为或关系；不同 Name 之间为且关系。支持的 Name：Status（执行结果，Values: SUCCESS/FAILED/USER_CANCELED/CHECKING） */
declare interface Filters {
  /** 过滤条件名称。取值：Status（执行结果，Values: SUCCESS/FAILED/USER_CANCELED/CHECKING） */
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

/** 主机安全模块自动扩容配置 */
declare interface HostAutoScaleConfig {
  /** 主机自动扩容开关枚举值：ON：开启OFF：关闭补充说明：不传则不修改；映射底层自动加购开关 auto_repurchase_switch */
  Switch?: string;
  /** 扩容版本枚举值：PRO：专业版ULTIMATE：旗舰版补充说明：不传则不修改 */
  ProtectType?: string;
}

/** 主机简要信息 */
declare interface HostBriefInfo {
  /** 云主机实例 ID参数格式：形如 ins-instance */
  InstanceID?: string;
  /** 主机 QUUID（CWP 内部唯一标识） */
  QUUID?: string;
  /** 主机 UUID */
  UUID?: string;
  /** 公网 IP 地址 */
  PublicIP?: string;
  /** 内网 IP 地址 */
  PrivateIP?: string;
  /** CWP Agent 状态枚举值：ONLINE：在线OFFLINE：离线UNINSTALLED：未安装 */
  AgentStatus?: string;
  /** 云主机实例状态枚举值：RUNNING：运行中STOPPED：已停止UNKNOWN：未知 */
  InstanceStatus?: string;
  /** 主机名称 */
  Name?: string;
  /** 所属账号信息 */
  Account?: AccountBriefInfo;
  /** 资产标签列表（CSIP 内部资产标签） */
  TagItem?: MiniTagItem[];
  /** 云上标签列表（云资产侧 Tag） */
  CloudTag?: Tag[];
}

/** 展示登录审计白名单时的主机信息实体 */
declare interface HostDesc {
  /** 机器uuid */
  Quuid?: string;
  /** 主机安全uuid */
  Uuid?: string;
  /** 机器名 */
  MachineName?: string;
  /** 机器IP:已销毁的服务器IP为空 */
  MachineIp?: string;
  /** 公网IP:已销毁的服务器IP为空 */
  MachineWanIp?: string;
  /** 标签信息数组 */
  Tags?: MachineTag[];
}

/** 添加登录审计白名单的主机信息实体 */
declare interface HostInfo {
  /** 主机Quuid */
  Quuid: string;
  /** Uuid主机 */
  Uuid: string;
}

/** 主机漏洞风险 */
declare interface HostKBRisk {
  /** 风险记录 ID（kb_risk.id） */
  RiskID?: number;
  /** Windows KB 补丁详细信息 */
  KBDetail?: KBDetail;
  /** 受影响主机数 */
  EffectHostCount?: number;
  /** 最近扫描时间参数格式：YYYY-MM-DDTHH:mm:ssZ */
  LatestScanTime?: string;
  /** 所属账号列表 */
  Account?: AccountBriefInfo[];
  /** 修复状态枚举值：PENDING：待修复SCANNING：扫描中FIXED：已修复IGNORED：已加白FIXING：修复中FIX_FAILED：修复失败 */
  RiskStatus?: string;
}

/** 新增登录审计白名单实体 */
declare interface HostLoginWhiteObj {
  /** 加白地域 */
  Places: Place[];
  /** 加白源IP，支持网段，多个IP以逗号隔开 */
  SrcIp: string;
  /** 加白用户名，多个用户名以逗号隔开 */
  UserName: string;
  /** 是否对全局生效, 1：全局有效 0: 仅针对单台主机' */
  IsGlobal: number;
  /** 白名单生效的机器信息列表 */
  HostInfos: HostInfo[];
  /** 备注 */
  Remark?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

/** 主机漏洞组件 */
declare interface HostVulComponent {
  /** 主机简要信息 */
  HostInfo?: HostBriefInfo;
  /** 受影响组件版本 */
  EffectVersion?: string;
  /** 组件在主机上的安装路径 */
  Path?: string;
  /** 关联进程 ID */
  ProcessID?: string;
  /** 修复命令（仅展示） */
  FixCommand?: string;
  /** 组件名字 */
  Name?: string;
}

/** 主机漏洞概要 */
declare interface HostVulOverview {
  /** 需立即修复漏洞数（VPR 评级为 URGENT 的漏洞数量） */
  UrgentRepairCount?: number;
  /** 已开启漏洞防御的主机数 */
  DefendHostCount?: number;
  /** 主机总数 */
  TotalHostCount?: number;
  /** 已修复漏洞总次数 */
  FixedVulCount?: number;
  /** Linux 软件漏洞数 */
  LinuxVulCount?: number;
  /** Windows 系统补丁数 */
  WindowVulCount?: number;
  /** Web-CMS 漏洞数 */
  WebCMSVulCount?: number;
  /** 应用漏洞数 */
  AppVulCount?: number;
  /** 应急漏洞数 */
  EmergencyCount?: number;
  /** 漏洞知识库总数 */
  VulItemCount?: number;
  /** 最近扫描时间参数格式：YYYY-MM-DDTHH:mm:ssZ */
  LatestScanTime?: string;
  /** 是否开启周期扫描枚举值：1： 开启0： 未开启 */
  EnableTimingScan?: number;
  /** 严重修复数 */
  CriticalRepairCount?: number;
  /** 严重修复Linux漏洞数 */
  CriticalRepairLinuxVulCount?: number;
  /** 严重修复应用漏洞数 */
  CriticalRepairAppVulCount?: number;
  /** 严重修复Web-CMS漏洞数 */
  CriticalRepairWebCMSVulCount?: number;
  /** 严重修复紧急漏洞数 */
  CriticalRepairEmergencyCount?: number;
}

/** 主机漏洞风险 */
declare interface HostVulRisk {
  /** 风险记录 ID（host_vul_risk.id） */
  RiskID?: number;
  /** 受影响主机数 */
  EffectHostCount?: number;
  /** 最近扫描时间参数格式：YYYY-MM-DD HH:mm:ss */
  LatestScanTime?: string;
  /** 所属账号列表 */
  Account?: AccountBriefInfo[];
  /** 漏洞防御状态枚举值：ENABLED：已开启NOT_SUPPORTED：不支持NOT_ENABLED：未开启 */
  DefendStatus?: string;
  /** 修复状态枚举值：PENDING：待修复SCANNING：扫描中FIXED：已修复IGNORED：已加白FIXING：修复中FIX_FAILED：修复失败NOTSCAN：未扫描WITHOUT_RISK：无风险NEED_REBOOT：修复待重启 */
  RiskStatus?: string;
  /** 漏洞详细信息 */
  VulDetail?: VulDetailInfo;
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

/** 镜像ID和对应的appid账号信息 */
declare interface ImageIDWithAppIdItem {
  /** 账号ID */
  AppId?: number;
  /** 容器镜像ID */
  ImageID?: string;
}

/** 计费项信息 */
declare interface InquireInfo {
  /** 计费项名称 */
  Name?: string;
  /** 购买量 */
  Value?: number;
}

/** 主机实例定位信息 */
declare interface InstanceIDWithAppIdItem {
  /** 机器所属AppId */
  AppId: number;
  /** 机器实例ID */
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

/** Windows KB详细信息 */
declare interface KBDetail {
  /** KB 补丁内部 ID（kb_info.id） */
  ID?: number;
  /** KB 编号参数格式：形如 KB5001234 */
  Number?: string;
  /** KB 补丁名称 */
  Name?: string;
  /** 参考链接（微软官方文档地址） */
  ReferUrl?: string;
  /** 发布时间参数格式：YYYY-MM-DD HH:mm:ss */
  PublishTime?: string;
  /** 安装该 KB 后是否需要重启枚举值：true：需要false：不需要 */
  NeedRestart?: boolean;
  /** 关联漏洞列表 */
  RelateVulList?: VulBriefInfo[];
  /** 关联漏洞总数 */
  RelateVulCount?: number;
  /** 关联os版本 */
  RelateProduct?: string;
}

/** KB补丁修复汇总信息 */
declare interface KBFixSummaryItem {
  /** KB补丁ID */
  KBId?: number;
  /** KB补丁名称 */
  KBName?: string;
  /** KB编号（如 KB5001234） */
  KBNo?: string;
  /** 关联漏洞数 */
  RelatedVulCount?: number;
  /** 受影响主机数 */
  AffectedCount?: number;
  /** 修复后是否需要重启系统 */
  NeedReboot?: boolean;
  /** 前置依赖补丁（逗号分隔的KB编号列表） */
  KBPreCondition?: string;
}

/** 可更新补丁主机信息 */
declare interface KBUpdateMachineItem {
  /** KB补丁ID */
  KBId?: number;
  /** 主机实例ID */
  InstanceId?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 主机IP */
  MachineIp?: string;
  /** 公网IP */
  PublicIp?: string;
  /** 操作系统名称 */
  OsName?: string;
  /** 主机在线状态枚举值：ONLINE：在线OFFLINE：离线 */
  MachineStatus?: string;
  /** 是否支持自动更新补丁枚举值：0：不支持1：支持 */
  SupportAutoFix?: number;
  /** 当前修复状态枚举值：0：未修复1：修复中2：修复失败3：修复成功4：修复超时 */
  FixStatus?: number;
  /** 最近一次修复时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  LatestFixTime?: string;
  /** 不可修复原因，SupportAutoFix为0时返回 */
  NotFixableReason?: string;
  /** 资产标签列表 */
  TagItems?: MiniTagItem[];
  /** 所属账号AppId */
  AppId?: number;
  /** 付费版本信息枚举值：BASIC：基础版PRO：专业版ULTIMATE：旗舰版 */
  PayVersion?: string;
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

/** 绑定失败明细 */
declare interface LicenseBindFailedItem {
  /** 实例ID */
  InstanceId?: string | null;
  /** 失败原因 */
  ExceptionMessage?: string | null;
  /** 修复建议 */
  FixMessage?: string | null;
  /** 机器额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 过滤条件 */
declare interface LicenseBindFilter {
  /** 过滤字段名，目前支持 Status */
  Name?: string;
  /** 过滤值列表 */
  Values?: string[];
}

/** 单台机器的绑定状态明细 */
declare interface LicenseBindScheduleItem {
  /** 实例ID */
  Quuid?: string | null;
  /** 绑定状态：0-初始化 1-成功 2-失败 3-跳过 */
  Status?: number | null;
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 修复建议 */
  FixMessage?: string | null;
}

/** 授权绑定任务详情 */
declare interface LicenseBindTaskDetail {
  /** 云服务器UUID */
  Quuid?: string;
  /** 错误信息 */
  ErrMsg?: string;
  /** 0 执行中, 1 成功,2失败 */
  Status?: number;
  /** 修复建议 */
  FixMessage?: string;
  /** 机器额外信息 */
  MachineExtraInfo?: MachineExtraInfo;
}

/** 单个计费项的授权状态汇总 */
declare interface LicenseStatusItem {
  /** 资源ID */
  ResourceId?: string;
  /** 授权类型（ENTERPRISE_HP=旗舰版/ADVANCED_HP=专业版/RASP） */
  LicenseType?: string;
  /** 授权名称（旗舰版/专业版/RASP） */
  Name?: string;
  /** 授权类别 0-主机授权 1-RASP授权 */
  Category?: number;
  /** 总数 */
  TotalNum?: number;
  /** 已用 */
  UsedNum?: number;
  /** 剩余 */
  RemainNum?: number;
  /** 最早开始时间（格式：2006-01-02 15:04:05） */
  BeginTime?: string;
  /** 最晚到期时间（格式：2006-01-02 15:04:05） */
  EndTime?: string;
}

/** 解绑失败明细 */
declare interface LicenseUnbindFailedItem {
  /** 实例ID */
  InstanceId?: string;
  /** 失败原因 */
  ExceptionMessage?: string;
}

/** 轻量应用服务器防火墙规则 */
declare interface LighthouseFirewallRule {
  /** 应用类型 */
  AppType?: string;
  /** 协议 */
  Protocol?: string;
  /** 端口 */
  Port?: string;
  /** 地址 */
  CidrBlock?: string;
  /** ipv6地址 */
  Ipv6CidrBlock?: string;
  /** 状态 */
  Action?: string;
  /** 描述 */
  FirewallRuleDescription?: string;
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

/** 应用日志采集路径 */
declare interface LogAppCollectPath {
  /** 配置ID */
  Id?: number;
  /** 采集路径 */
  Path?: string;
  /** 日志标签 */
  LogTag?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
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

/** 异地登录合并后白名单 */
declare interface LoginWhiteCombinedInfo {
  /** 白名单地域 */
  Places?: Place[];
  /** 白名单用户（多个用户逗号隔开） */
  UserName?: string;
  /** 白名单IP（多个IP逗号隔开） */
  SrcIp?: string;
  /** 地域字符串 */
  Locale?: string;
  /** 备注 */
  Remark?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 是否对全局生效, 1：全局有效 0: 对指定主机列表生效' */
  IsGlobal?: number;
  /** 白名单名字：IsLocal=1时固定为：全部服务器；单台机器时为机器内网IP，多台服务器时为服务器数量，如：11台 */
  Name?: string;
  /** 仅在单台服务器时，返回服务器名称 */
  Desc?: string;
  /** 白名单ID */
  Id?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 最近修改时间 */
  ModifyTime?: string;
  /** 服务器Uuid */
  Uuid?: string;
  /** 登录地 */
  Locations?: string;
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
  /** 是否支持迁移 */
  MigrationRequired?: boolean;
  /** 是否支持暴露面扫描 */
  IsSupportXSPM?: boolean;
  /** 是否能解绑 */
  CanUnbind?: boolean;
}

/** 机器清理记录对象 */
declare interface MachineClearHistory {
  /** ID值 */
  Id?: number;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 公网IP */
  PublicIp?: string;
  /** 内网IP */
  PrivateIp?: string;
  /** 客户端最后离线时间 */
  AgentLastOfflineTime?: string;
  /** 创建时间 */
  CreateTime?: string;
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

/** 机器额外信息 */
declare interface MachineExtraInfo {
  /** 公网IP */
  WanIP?: string | null;
  /** 内网IP */
  PrivateIP?: string | null;
  /** 网络类型：1-vpc网络 2-基础网络 3-非腾讯云网络 */
  NetworkType?: number | null;
  /** VPC ID */
  NetworkName?: string | null;
  /** CVM实例ID */
  InstanceID?: string | null;
  /** 主机名 */
  HostName?: string | null;
}

/** 主机登录方式 */
declare interface MachineLoginType {
  /** 实例ID */
  InstanceId?: string | null;
  /** 主机Quuid */
  Quuid?: string | null;
  /** 登录方式：0-原始登录方式，1-扫码免密登录，2-开启扫码中，3-关闭扫码中 */
  LoginType?: number | null;
}

/** 服务器标签信息 */
declare interface MachineTag {
  /** 关联标签ID */
  Rid?: number;
  /** 标签名 */
  Name?: string;
  /** 标签ID */
  TagId?: number;
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

/** 修改主机登录方式失败详情 */
declare interface ModifyLoginTypeFailInfo {
  /** 主机名称 */
  MachineName?: string;
  /** 主机实例ID */
  InstanceId?: string;
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机公网IP */
  MachineWanIp?: string;
  /** 主机可用区 */
  Region?: string;
  /** 主机类型 */
  MachineType?: string;
  /** 以下几个固定值需要前端特殊处理，其他失败原因可直接展示：UNINSTALLED -- 未安装NEED_UPGRADE -- 需要升级NOT_RUNNING -- 已关机NO_PASSWORD -- 未开启密码登录，无法开启扫码 */
  Message?: string;
  /** 失败原因 */
  MessageDesc?: string;
}

/** 批量修改主机登录方式任务 */
declare interface ModifyMachinesLoginTypeTask {
  /** 任务ID */
  Id?: number;
  /** 1-进行中，2已完成 */
  Status?: number;
  /** 执行成功数量 */
  SuccessCount?: number;
  /** 执行失败主机列表 */
  FailList?: ModifyLoginTypeFailInfo[];
  /** 修改成功的实例ID列表 */
  SuccessInstances?: string[];
  /** 修改中的实例ID列表 */
  ProgressingInstances?: string[];
  /** 失败主机数 */
  FailedHostCount?: number;
}

/** 防护设置对象 */
declare interface ModifyProtectionSetting {
  /** 资产唯一ID */
  QUUID: string;
  /** 总开关 0关闭 1开启 */
  Enable?: number;
  /** 漏洞防护开关 0: 关闭 1:开启 */
  VulDefEnable?: number;
  /** 漏洞防护模式 0: 标准 1: 重保 */
  VulDefMode?: number;
  /** 漏洞防护动作 0: 仅检测 1: 检测+防御 */
  VulDefAction?: number;
  /** 内存马防御开关 0: 关闭 1:开启 */
  MemShellDefEnable?: number;
  /** 性能限制开关 0: 关闭 1:开启 */
  PerformanceLimit?: number;
  /** CPU阈值 取值1-99 */
  PerformanceLimitCpu?: number;
  /** 内存阈值 取值1-99 */
  PerformanceLimitMem?: number;
  /** 内存剩余阈值 */
  PerformanceLimitMemAmount?: number;
  /** 更多防护, 0: 不注入会重启的进程 1: 注入会重启的进程 */
  SafeInject?: number;
}

/** 修改规则项 */
declare interface ModifyRuleItem {
  /** 规则类型枚举值：dimension：维度级规则category：子项级规则severity：等级级规则 */
  RuleType?: string;
  /** 维度ID */
  DimensionId?: string;
  /** 子项ID，category和severity级别必填 */
  CategoryId?: string;
  /** 等级，severity级别必填枚举值：critical：严重high：高危medium：中危low：低危 */
  Severity?: string;
  /** 扣分上限 */
  MaxDeductScore?: number;
  /** 单次扣分 */
  DeductPerItem?: number;
}

/** 告警对应的多攻击阶段 */
declare interface MultiAttackStageItem {
  /** 表id */
  Id?: number;
  /** APPID */
  AppId?: number;
  /** 告警ID */
  AlertId?: string;
  /** 攻击阶段列表 */
  AttackStages?: string[];
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

/** DNAT规则 */
declare interface NatDnatRuleItem {
  /** IP协议 */
  IpProtocol?: string;
  /** 公网IP地址 */
  PublicIpAddress?: string;
  /** 公网端口 */
  PublicPort?: number;
  /** 内网IP地址 */
  PrivateIpAddress?: string;
  /** 内网端口 */
  PrivatePort?: number;
  /** 描述 */
  Description?: string;
}

/** SNAT规则 */
declare interface NatSnatRuleItem {
  /** 网关SNat ID */
  NatGatewaySnatId?: string;
  /** 资源ID */
  ResourceId?: string;
  /** 资源类型 */
  ResourceType?: string;
  /** 内网IP地址 */
  PrivateIpAddress?: string;
  /** 公网IP地址 */
  PublicIpAddresses?: string;
  /** 描述 */
  Description?: string;
  /** 创建时间 */
  CreatedTime?: string;
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

/** 网段 */
declare interface NetworkSegment {
  /** 网段 */
  Segment?: string;
  /** 描述 */
  Desc?: string;
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

/** 节点信息 */
declare interface NodeInfo {
  /** 英文名 */
  Key: string | null;
  /** 值 */
  Value: string | null;
  /** 中文名 */
  Name: string | null;
}

/** 未通过检测项按策略分组的统计。 */
declare interface NotPassItemStatistic {
  /** 策略类型。取值：SYSTEM（系统策略）、SELF（自定义策略）。 */
  PolicyType?: string;
  /** 策略 ID。SYSTEM 策略为 0。 */
  PolicyID?: number;
  /** 父分类 ID。SELF 策略为 0。 */
  ParentCategoryID?: number;
  /** 该策略下未通过的检测项数。 */
  NotPassCount?: number;
  /** 策略或分类名称。SYSTEM 取父分类名称，SELF 取策略名称。 */
  Name?: string;
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

/** 订单详情 */
declare interface OrderDetail {
  /** 资源ID */
  ResourceID?: string;
  /** 计费项 */
  InquireKey?: string;
  /** 订单状态1 正常2 隔离期3 已销毁 */
  Status?: number;
  /** 订单类型 */
  SourceType?: number;
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

/** 操作系统信息 */
declare interface OsName {
  /** 操作系统类型ID */
  MachineOSType?: number;
  /** 操作系统名称 */
  Name?: string;
}

/** 登录地信息 */
declare interface Place {
  /** 城市 ID。 */
  CityId: number;
  /** 省份 ID。 */
  ProvinceId: number;
  /** 国家ID，暂只支持境内：1。 */
  CountryId: number;
  /** 位置名称 */
  Location?: string;
}

/** 端口探测信息 */
declare interface PortDetectInfo {
  /** 主机地址(ip或者域名) */
  Host?: string;
  /** 端口 */
  Port?: number;
  /** 协议 */
  Protocol?: string;
  /** 状态 */
  Status?: string;
  /** 最近发现时间 */
  UpdateTime?: string;
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

/** 推荐防护配置项 */
declare interface ProtectionConfigItem {
  /** 配置项ID */
  ConfigId?: string;
  /** 配置项名称 */
  ConfigName?: string;
  /** 配置项描述 */
  ConfigDescription?: string;
  /** 配置分组枚举值：auto_risk_discovery：自动风险发现auto_defense：自动防御client_hardening：客户端强化 */
  ConfigGroup?: string;
  /** 是否已开启 */
  Enabled?: boolean;
}

/** 防护配置详情 */
declare interface ProtectionDetail {
  /** 各配置项开启状态 */
  ConfigItems?: ProtectionConfigItem[];
  /** 应防护资产数 */
  EligibleAssetCount?: number;
  /** 已防护资产数 */
  ProtectedAssetCount?: number;
  /** 覆盖率百分比取值范围：[0, 100] */
  CoveragePercent?: number;
  /** 即将到期产品列表 */
  ExpiringProducts?: ExpiringProduct[];
}

/** 资产树-云厂商节点 */
declare interface ProviderNode {
  /** 云厂商 */
  Provider?: string;
  /** 云厂商名称 */
  ProviderName?: string;
  /** 下属资产分类节点 */
  Categories?: CategoryNode[];
}

/** 资产信息 */
declare interface PublicAssetInfo {
  /** 租户ID */
  AppID?: number;
  /** 云厂商 */
  Provider?: string;
  /** 云厂商名称 */
  ProviderName?: string;
  /** 云账号ID */
  CloudAccountID?: string;
  /** 云账号名称 */
  CloudAccountName?: string;
  /** 资产ID */
  AssetID?: string;
  /** 资产名称 */
  AssetName?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 资产类型名称 */
  AssetTypeName?: string;
  /** 资产标签 */
  Tags?: AssetTag[];
  /** 公网地址 */
  Address?: string;
  /** 公网地址类型 */
  AddressType?: string;
  /** 解析地址 */
  ResolvedAddress?: string[];
  /** 地域 */
  Region?: string;
  /** 防护状态 */
  ProtectStatus?: number;
  /** 风险数量 */
  RiskCount?: number;
  /** 告警数量 */
  AlarmCount?: number;
  /** 实例创建时间 */
  CreatedAt?: string;
  /** 首次同步时间 */
  FirstSyncTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 严重风险总数 */
  CriticalRiskCount?: number;
  /** 高风险总数 */
  HighRiskCount?: number;
  /** 中风险总数 */
  MediumRiskCount?: number;
  /** 低风险总数 */
  LowRiskCount?: number;
  /** 资产唯一ID */
  AssetRID?: string;
  /** 云安全中心标签 */
  CustomTags?: CustomTag[];
  /** 资产类型图标 */
  AssetTypeIconURL?: string;
}

/** 公网IP和域名资产列表key */
declare interface PublicIpDomainListKey {
  /** 资产值 */
  Asset: string;
}

/** 重保授权包列表对象 */
declare interface RaspLicenseList {
  /** 机器唯一ID */
  QUUID?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 公网IP */
  PublicIP?: string;
  /** 内网IP */
  PrivateIP?: string;
  /** 云标签信息 */
  Tags?: Tags[];
  /** 防护版本信息CriticalProtection 重保防护包Pro 容器安全-专业版Ultimate 主机安全-旗舰版 */
  ProtectionVersion?: string[];
  /** 防护设置0 未配置1 已配置 */
  ConfigurationSetting?: number;
  /** 总开关0 未开启1已开启 */
  Enable?: number;
  /** 漏洞防御开关0 未开启1 开启 */
  VulDefEnable?: number;
  /** 漏洞防御模式0 标准1 重保 */
  VulDefMode?: number;
  /** 漏洞防御动作0 仅检测1 检测+防御 */
  VulDefAction?: number;
  /** 内存马防御开关0 未开启1 开启 */
  MemShellDefEnable?: number;
  /** 更多防护0 不注入会重启的进程 1 注入会重启的进程 */
  SafeInject?: number;
  /** 性能阈值配置开关0 未开启1 开启 */
  PerformanceLimit?: number;
  /** CPU阈值,取值1-99 */
  PerformanceLimitCpu?: number;
  /** 内存阈值,取值1-99 */
  PerformanceLimitMem?: number;
  /** 内存剩余阈值 */
  PerformanceLimitMemAmount?: number;
  /** 插件状态0 使用正常1 存在异常2 未使用 */
  RaspException?: number;
  /** 最近更新时间 */
  LatestUpdateTime?: string;
  /** 集群ID,仅容器资产有值 */
  ClusterName?: string;
  /** 集群名称,仅容器资产有值 */
  ClusterId?: string;
  /** 订单信息 */
  OrderDetail?: OrderDetail;
  /** 是否允许解绑,fasle 不允许 true 允许 */
  IsUnBind?: boolean;
  /** uuid 机器唯一ID,仅AssetType = CWP 时有值 */
  UUID?: string;
  /** 无注入/注入失败原因默认值：空注入失败才会有值 */
  Reason?: string;
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

/** 云资产所在地域信息。 */
declare interface RegionInfo {
  /** 地域标志，如 ap-guangzhou、ap-shanghai、ap-beijing。 */
  Region?: string;
  /** 地域中文名，如华南地区（广州）、华东地区（上海）、华北地区（北京）。 */
  RegionName?: string;
  /** 地域数字 ID。 */
  RegionId?: number;
  /** 地域简码，如 gz、sh、bj。 */
  RegionCode?: string;
  /** 地域英文名。 */
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

/** 风险趋势 */
declare interface RiskCenterOverviewTrendAnalysis {
  /** 日期 */
  Date?: string;
  /** 端口数 */
  Port?: number;
  /** 漏洞数 */
  VUL?: number;
  /** 弱口令数 */
  WeakPassword?: number;
  /** 网站数 */
  Website?: number;
  /** 配置数 */
  CFG?: number;
  /** 测绘风险数 */
  Server?: number | null;
  /** 主机风险配置数量 */
  HostCFG?: number;
  /** 容器基线风险配置数量 */
  PodCFG?: number;
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

/** 云资源配置风险周期扫描配置 */
declare interface RiskCronConfig {
  /** 周期任务创建者appid */
  CreateAppID?: number;
  /** 周期计划 */
  PlanContent?: string;
  /** 周期扫描开启状态 */
  CronStatus?: number;
  /** 新增规则是否自动加入扫描 */
  AddRuleEnableStatus?: boolean;
  /** 时区 */
  ScanPlanTimezone?: string;
  /** 增量资产开启风险扫描 */
  IncrementAssetScanRisk?: boolean;
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

/** 最后一天风险摘要项 */
declare interface RiskTrendItem {
  /** 风险项类型：intrusion_alert / vulnerability */
  Key?: string;
  /** 展示名称，按请求语言返回；漏洞项按是否付费区分文案 */
  Name?: string;
  /** 风险数量 */
  Count?: number;
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

/** 规则统计信息 */
declare interface RuleStatisticsItem {
  /** 名称 */
  Text?: string;
  /** 值 */
  Value?: string;
  /** 统计信息 */
  Count?: string;
}

/** SCF 函数别名精简信息 */
declare interface SCFAliasInfo {
  /** 别名名称 */
  Name?: string;
  /** 别名指向的主版本号 */
  FunctionVersion?: string;
}

/** SCF 函数精简信息 */
declare interface SCFFunctionInfo {
  /** 函数 ID参数格式：形如 lam-xxxxxxxx */
  FunctionId?: string;
  /** 函数名称 */
  FunctionName?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 函数状态枚举值：Active：可用Creating：创建中Updating：更新中CreateFailed：创建失败Deleting：删除中 */
  Status?: string;
  /** 函数类型枚举值：Event：事件函数（当前接口仅返回该类型） */
  Type?: string;
}

/** SCF 函数版本精简信息 */
declare interface SCFFunctionVersionInfo {
  /** 函数版本名称参数格式：$LATEST 或数字版本号，如 1、2、3 */
  Version?: string;
  /** 版本状态。当前实现与 Version 字段同值返回 */
  Status?: string;
}

/** SCF 命名空间精简信息 */
declare interface SCFNamespaceInfo {
  /** 命名空间名称 */
  Name?: string;
  /** 命名空间类型枚举值：Default：默认命名空间Custom：自定义命名空间 */
  Type?: string;
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

/** 扫描任务记录详情 */
declare interface ScanTaskRecordItem {
  /** 任务ID */
  TaskID?: string;
  /** 任务状态 */
  Status?: string;
  /** 任务进度 */
  Progress?: number;
  /** 消耗配额 */
  CostQuota?: number;
  /** 任务创建时间 */
  CreateTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 任务来源 */
  TaskSource?: string;
}

/** SCF自定义域名端点 */
declare interface ScfCustomDomainEndpointItem {
  /** 匹配路径 */
  PathMatch?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 函数名称 */
  FunctionName?: string;
  /** 函数版本 */
  Qualifier?: string;
}

/** 评分规则项 */
declare interface ScoreRuleItem {
  /** 规则类型枚举值：dimension：维度级规则category：子项级规则severity：等级级规则 */
  RuleType?: string;
  /** 维度ID */
  DimensionId?: string;
  /** 维度名称 */
  DimensionName?: string;
  /** 子项ID */
  CategoryId?: string;
  /** 子项扣分规则说明 */
  CategoryDesc?: string;
  /** 子项名称 */
  CategoryName?: string;
  /** 等级枚举值：critical：严重high：高危medium：中危low：低危 */
  Severity?: string;
  /** 扣分上限 */
  MaxDeductScore?: number;
  /** 单次扣分 */
  DeductPerItem?: number;
  /** 单项扣分是否不可编辑（防护配置维度子项为 true） */
  DeductPerItemDisabled?: boolean;
  /** 排序序号 */
  SortOrder?: number;
}

/** 安全组策略 */
declare interface SecurityGroupPolicyItem {
  /** 端口 */
  Port?: string;
  /** 策略 */
  Action?: string;
  /** 协议 */
  Protocol?: string;
  /** 访问源 */
  CidrBlock?: string;
  /** 描述 */
  Description?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 优先级单位：1 */
  Priority?: number;
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

/** 等级扣分明细 */
declare interface SeverityItem {
  /** 风险等级枚举值：critical：严重high：高危medium：中危low：低危 */
  Severity?: string;
  /** 等级中文名 */
  SeverityName?: string;
  /** 该等级风险数量 */
  RiskCount?: number;
  /** 单次扣分 */
  DeductPerItem?: number;
  /** 等级扣分上限 */
  MaxDeductScore?: number;
  /** 实际扣分 */
  DeductScore?: number;
}

/** Skill 能力标签 */
declare interface SkillCapabilityTag {
  /** 能力标签标识 */
  ID?: string;
  /** 能力标签展示名称 */
  Name?: string;
}

/** 融合规则目录项 */
declare interface SkillRuleCatalogItem {
  /** 融合规则 ID参数格式：形如 9xxxx */
  RuleID?: string;
  /** 风险类别名称 */
  RuleName?: string;
}

/** 子引擎扫描结果 */
declare interface SkillScanEngineResult {
  /** 子引擎类型枚举值：AI：AI 引擎STATIC：静态分析引擎 */
  ScanType?: string;
  /** 命中规则列表 */
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
  /** 融合规则编号参数格式：形如 9xxxx */
  RuleID?: string;
  /** 风险发现描述 */
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

/** 标准模式阻断配置 */
declare interface StandardModeConfig {
  /** 阻断时长，单位：秒 */
  Ttl?: number;
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

/** 腾讯云标签 */
declare interface TagItem {
  /** 标签key */
  Key?: string;
  /** 标签value */
  Value?: string;
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

/** 检测任务信息 */
declare interface TaskInfo {
  /** 检测时间 */
  ScanTime?: string;
  /** 任务ID */
  TaskID?: string;
  /** 任务状态 */
  Status?: string;
  /** 任务进度 */
  Progress?: number;
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

/** 趋势数据点 */
declare interface TrendDataPoint {
  /** 日期参数格式：YYYY-MM-DD */
  Date?: string;
  /** 风险数量，无数据时为0 */
  RiskCount?: number;
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

/** 用户行为分析-用户概览信息 */
declare interface UebaUserSummary {
  /** 全部用户数量 */
  AllUserCount?: number | null;
  /** 异常用户数量 */
  AbnormalUserCount?: number | null;
  /** 云账号用户数量 */
  UserCount?: number | null;
  /** 子用户数量 */
  SubUserCount?: number | null;
  /** 自定义用户数量 */
  CustomUserCount?: number | null;
  /** 自定义用户求和组成元素 */
  Element?: UebaUserSummaryElement[] | null;
}

/** 用户行为分析 用户概览 求和元素 */
declare interface UebaUserSummaryElement {
  /** 成员id */
  MemberID?: string | null;
  /** 日志类型 */
  LogType?: string | null;
  /** 用户ID依据字段 */
  UserID?: string | null;
  /** 数量 */
  Count?: number | null;
}

/** 用户旗舰版信息 */
declare interface UltimateAppItem {
  /** 用户AppID */
  AppID?: number;
  /** 是否旗舰版 */
  IsUltimateVersion?: boolean;
}

/** 账号CSPM信息 */
declare interface UserCSPMInfo {
  /** APPID */
  AppID?: number;
  /** UIN */
  Uin?: string;
  /** 账号昵称 */
  NickName?: string;
  /** CSPM扫描配额 */
  CSPMNum?: number;
  /** 已消耗CSPM扫描配额 */
  UsedCount?: number;
  /** 赠送CSPM扫描配额 */
  GrantedCSPMNum?: number;
  /** 是否被共享，1-被共享，2-未被共享 */
  IsShared?: number;
  /** 是否单独购买，1-单独购买，2-未单独购买 */
  IsSelfBuy?: number;
  /** 配额来源账号 */
  ShareFromAppID?: number;
  /** 角色:member:成员;admin:管理员;delegatedAdmin:委派管理员 */
  Role?: string;
  /** 所在部门 */
  Department?: string;
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

/** 用户配置同步状态 */
declare interface UserConfSyncStatus {
  /** 用户AppID */
  AppID?: number;
  /** 是否允许管理员同步 */
  AllowSync?: boolean;
  /** 是否在配置中 */
  InConf?: boolean;
  /** 是否被其他管理员同步 */
  ManagedByOther?: boolean;
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

/** 用户信息 */
declare interface UserItem {
  /** 登录用户appid */
  AppID?: number;
  /** 用户类型 */
  AccountType?: number;
  /** 用户付费类型 */
  PayType?: number;
  /** 总配额次数 */
  TotalQuota?: number;
  /** 已消耗配额次数 */
  CostQuota?: number;
  /** 云厂商信息 */
  Providers?: string[];
  /** refresh:下次仍会刷新;expire:下次不再刷新 */
  QuotaFlushType?: string;
  /** 下次配额刷新时间 */
  QuotaFlushTime?: string;
  /** 购买类型 */
  QuotaSource?: number;
  /** 被共享时为共享方appid，自购或无配额时为0 */
  ShareFromAppID?: number;
  /** 配额共享方账号 */
  ShareFromUser?: string;
}

/** VPR解释卡片中的单个维度 */
declare interface VPRExplainDimension {
  /** 标签key */
  Key?: string;
  /** 标签名称 */
  Name?: string;
  /** 标签子项 */
  Items?: VPRExplainDimensionItem[];
}

/** VPR解释卡片中的单个标签项 */
declare interface VPRExplainDimensionItem {
  /** 标签 */
  Key?: string;
  /** 标签名称 */
  Name?: string;
  /** 标签描述 */
  Remark?: string;
}

/** VPR评级解释卡片 */
declare interface VPRExplainInfo {
  /** 漏洞情报 */
  VulIntel?: VPRExplainDimension[];
  /** 资产上下文 */
  AssetContext?: VPRExplainDimension[];
}

/** 漏洞VPR标签 */
declare interface VPRLabel {
  /** 标签名称枚举值：IN_THE_WILD：在野利用EXP：有 EXPPOC：有 POCINTERNET_EXPOSED：外网暴露NO_RESTART：无需重启HIGH_VALUE_ASSET：重要资产MALWARE_WEAPONIZED：已武器化 */
  Name?: string;
  /** 标签等级枚举值：HIGH：高MEDIUM：中LOW：低 */
  Level?: string;
  /** 标签说明 */
  Remark?: string;
}

/** VRP评级信息 */
declare interface VPRRatingInfo {
  /** VPR 评级结果枚举值：URGENT：立即修复SUGGESTED：建议修复DEFERRABLE：可延迟修复 */
  Result?: string;
  /** 评级说明 */
  Remark?: string;
  /** 分阶段评级详情列表 */
  Stage?: VPRRatingStage[];
}

/** VRP评级阶段 */
declare interface VPRRatingStage {
  /** 阶段名称（例如：威胁活跃度、可利用性、漏洞严重性等） */
  Stage?: string;
  /** 该阶段的评级结果 */
  Result?: string;
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

/** 漏洞简要信息 */
declare interface VulBriefInfo {
  /** 漏洞 ID（vul_vuls.id） */
  VulID?: number;
  /** 漏洞名称 */
  VulName?: string;
  /** CVE 编号参数格式：形如 CVE-2018-5377 */
  CVEID?: string;
  /** VPR 风险标签列表 */
  Label?: VPRLabel[];
  /** CVSS 评分取值范围：[0.0, 10.0] */
  CvssScore?: number;
  /** 威胁等级枚举值：INVALID：无效INFO：提示LOW：低危MEDIUM：中危HIGH：高危CRITICAL：严重 */
  Level?: string;
  /** 漏洞披露时间参数格式：YYYY-MM-DD HH:mm:ss */
  PublishTime?: string;
}

/** 主机漏洞组件概要 */
declare interface VulComponentSummary {
  /** 组件名称 */
  Name: string;
  /** 关联主机数 */
  RelateHostCount?: number;
}

/** 漏洞全部信息 */
declare interface VulDetailInfo {
  /** 漏洞ID */
  ID?: number;
  /** 漏洞名字 */
  Name?: string;
  /** CveID */
  CVEID?: string;
  /** 漏洞分类枚举值：LINUX：Linux 软件漏洞WINDOWS：Windows 系统补丁WEB_CMS：Web-CMS 漏洞APPLICATION：应用漏洞EMERGENCY：应急漏洞 */
  Category?: string;
  /** 漏洞披露时间参数格式：YYYY-MM-DD HH:mm:ss */
  PublishTime?: string;
  /** 检测方式枚举值：VersionCompare： 版本对比POC： POC检测 */
  CheckMethod?: string;
  /** 漏洞防御状态枚举值：ENABLED：已开启NOT_SUPPORTED：不支持NOT_ENABLED：未开启 */
  DefendStatus?: string;
  /** 是否支持一键修复枚举值：true：支持false：不支持 */
  SupportFix?: boolean;
  /** VPR 评级信息（包含评级结果、说明和分阶段评分） */
  VRPRatingInfo?: VPRRatingInfo;
  /** CVSS 评分取值范围：[0.0, 10.0] */
  CvssScore?: number;
  /** VPR 风险标签列表（如在野利用、有 EXP、有 POC、外网暴露、无需重启等） */
  Label?: VPRLabel[];
  /** 漏洞备注 */
  Remark?: string;
  /** 漏洞概述说明 */
  Summary?: string;
  /** 已开启漏洞防御的主机数 */
  DefendHostCount?: number;
  /** 未开启漏洞防御的主机数 */
  NotDefendHostCount?: number;
  /** 最近扫描时间参数格式：YYYY-MM-DD HH:mm:ss */
  LatestScanTime?: string;
  /** CVSS 危害等级枚举值：INVALID：无效INFO：提示LOW：低危MEDIUM：中危HIGH：高危CRITICAL：严重 */
  CVSSLevel?: string;
  /** 受影响软件描述列表（每项形如 openssl < 1.1.1k） */
  VulAffect?: string[];
  /** 是否被 KVE（已知被利用漏洞）库收录枚举值：true：已收录false：未收录 */
  KVERecord?: boolean;
  /** KVE 收录时间参数格式：YYYY-MM-DD HH:mm:ss */
  KVERecordTime?: string;
  /** EPSS 评分（漏洞利用概率预测）取值范围：[0.0, 1.0] */
  EPSSScore?: number;
  /** 受影响厂商列表 */
  AffectVendor?: string[];
  /** 受影响产品列表 */
  AffectProduct?: string[];
  /** 漏洞利用机制说明 */
  Mechanism?: string;
  /** 漏洞利用前置条件说明 */
  Precondition?: string;
  /** 漏洞最新传播趋势数据列表（按日期） */
  LatestTrend?: VulSpreadTrend[];
  /** 修复方案 */
  FixSolution?: string;
  /** 参考链接 */
  RefLink?: string;
  /** 漏洞危害描述 */
  HarmDescription?: string;
  /** 漏洞影响产品 */
  AffectVendorProduct?: VulVendorProduct[];
}

/** 漏洞修复项，指定一个漏洞/KB补丁及其需要修复的目标主机 */
declare interface VulFixItem {
  /** 需要修复的主机实例ID列表入参限制：单项最多1000个实例ID */
  InstanceIds: string[];
  /** 漏洞ID，VulId和KBId二选一 */
  VulId?: number;
  /** KB补丁ID，VulId和KBId二选一 */
  KBId?: number;
}

/** 漏洞/KB补丁维度修复状态 */
declare interface VulFixStatusItem {
  /** 漏洞ID（KB补丁修复任务时为空） */
  VulId?: number;
  /** KB补丁ID（漏洞修复任务时为空） */
  KBId?: number;
  /** 漏洞名称或KB补丁名称 */
  VulName?: string;
  /** 该漏洞的修复状态枚举值：0：修复中1：全部成功2：部分失败3：全部失败 */
  FixStatus?: number;
  /** 该漏洞/KB补丁关联的主机总数 */
  HostCount?: number;
  /** 该漏洞/KB补丁修复成功的主机数 */
  SuccessHostCount?: number;
  /** 该漏洞/KB补丁修复失败的主机数 */
  FailHostCount?: number;
}

/** 漏洞修复汇总信息 */
declare interface VulFixSummaryItem {
  /** 漏洞ID */
  VulId?: number;
  /** 漏洞名称 */
  VulName?: string;
  /** CVE编号 */
  CveId?: string;
  /** 受影响主机数 */
  AffectedCount?: number;
  /** 修复后是否需要重启系统 */
  NeedReboot?: boolean;
  /** 是否支持一键修复true-支持 false-不支持 */
  FixSwitch?: boolean;
}

/** 漏洞修复任务明细项 */
declare interface VulFixTaskDetailItem {
  /** 明细记录ID */
  Id?: number;
  /** 关联的修复任务ID */
  TaskId?: number;
  /** 修复的漏洞ID */
  VulId?: number;
  /** 修复的KB补丁ID */
  KBId?: number;
  /** 主机实例ID */
  InstanceId?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 主机内网IP */
  MachineIp?: string;
  /** 漏洞名称 */
  VulName?: string;
  /** 执行状态枚举值：0：初始状态1：已下发任务11：客户端已确认2：修复完成3：客户端离线4：超时5：失败6：不支持9：等待快照创建完成中10：快照创建失败 */
  Status?: number;
  /** 修复结果枚举值：0： 初始状态1： 修复成功2： 修复失败3： 修复中 */
  FixStatus?: number;
  /** 快照状态枚举值：-1：无需创建快照0：未开始1：进行中2：已完成3：创建失败 */
  SnapshotStatus?: number;
  /** 异常提示信息 */
  ExceptionMessage?: string;
  /** 修复启动时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  StartTime?: string;
  /** 修复结束时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  EndTime?: string;
  /** 快照创建时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  SnapshotCreateTime?: string;
  /** 快照到期时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  SnapshotExpireTime?: string;
  /** 快照创建失败原因（当 SnapshotStatus=3 时有值） */
  SnapshotFailReason?: string;
}

/** 漏洞修复任务概要信息 */
declare interface VulFixTaskInfo {
  /** 修复任务主键ID */
  Id?: number;
  /** 任务ID */
  TaskId?: number;
  /** 修复状态枚举值：0：初始化1：修复中2：修复成功3：部分修复失败4：全部修复失败5：停止修复 */
  FixStatus?: number;
  /** 修复资产总数 */
  AssetCount?: number;
  /** 修复成功数 */
  SuccessCount?: number;
  /** 修复失败数 */
  FailCount?: number;
  /** 修复中数量 */
  FixingCount?: number;
  /** 排队中数量（等待下发或等待快照创建） */
  QueueCount?: number;
  /** 修复进度百分比取值范围：[0, 100]补充说明：计算方式为(SuccessCount+FailCount)/AssetCount×100 */
  Progress?: number;
  /** 修复成功的漏洞数 */
  SuccessVulCount?: number;
  /** 修复失败的漏洞数 */
  FailVulCount?: number;
  /** 修复的漏洞名称列表 */
  VulNames?: string[];
  /** 修复启动时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  StartTime?: string;
  /** 修复结束时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  EndTime?: string;
  /** 漏洞维度修复状态列表，每个漏洞的修复状态详情 */
  VulFixStatusList?: VulFixStatusItem[];
}

/** 漏洞修复任务列表项 */
declare interface VulFixTaskItem {
  /** 修复任务主键ID */
  Id?: number;
  /** 任务ID，用于交互的hash标识 */
  TaskId?: number;
  /** 任务JobId，对应后台任务系统的任务ID */
  JobId?: string;
  /** 修复的漏洞ID列表 */
  VulIds?: number[];
  /** 修复的KB补丁ID列表 */
  KBIds?: number[];
  /** 修复资产总数 */
  AssetCount?: number;
  /** 修复成功的主机数 */
  SuccessCount?: number;
  /** 修复失败的主机数 */
  FailCount?: number;
  /** 修复进度百分比取值范围：[0, 100]补充说明：计算方式为(SuccessCount+FailCount)/AssetCount×100 */
  Progress?: number;
  /** 修复任务用户数 */
  TargetAppIdsCount?: number;
  /** 修复状态枚举值：0：初始化1：修复中2：修复成功3：部分修复失败4：全部修复失败5：停止修复 */
  FixStatus?: number;
  /** 最大修复时间单位：秒 */
  Timeout?: number;
  /** 修复启动时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  StartTime?: string;
  /** 修复结束时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  EndTime?: string;
  /** 记录创建时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  CreateTime?: string;
  /** 修复的漏洞名称列表，便于列表页直接展示 */
  VulNames?: string[];
  /** 漏洞类型列表枚举值：LINUX：Linux软件漏洞WINDOWS：Windows系统补丁漏洞WEB_CMS：Web-CMS漏洞APPLICATION：应用漏洞EMERGENCY：应急漏洞 */
  VulCategory?: string[];
  /** 创建者AppId */
  AppId?: number;
}

/** 可修复主机信息 */
declare interface VulFixableMachineItem {
  /** 漏洞ID列表，按 SupportAutoFix 维度分组：SupportAutoFix=1 时为可修复的漏洞ID，SupportAutoFix=0 时为不可修复的漏洞ID */
  VulIds?: number[];
  /** 主机实例ID */
  InstanceId?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 主机IP */
  MachineIp?: string;
  /** 公网IP */
  PublicIp?: string;
  /** 操作系统类型枚举值：linux：Linux操作系统windows：Windows操作系统 */
  OsType?: string;
  /** 操作系统名称 */
  OsName?: string;
  /** 主机在线状态枚举值：ONLINE：在线OFFLINE：离线 */
  MachineStatus?: string;
  /** 是否支持自动修复枚举值：0：不支持1：支持 */
  SupportAutoFix?: number;
  /** 当前修复状态枚举值：0：未修复1：修复中2：修复失败3：修复成功4：修复超时 */
  FixStatus?: number;
  /** 最近一次修复时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  LatestFixTime?: string;
  /** 不可修复原因，SupportAutoFix为0时返回 */
  NotFixableReason?: string;
  /** 修复命令列表，SupportAutoFix为1时返回 */
  FixCommands?: string[];
  /** 关联组件列表 */
  Components?: string[];
  /** 资产标签列表 */
  TagItems?: MiniTagItem[];
  /** 所属账号AppId */
  AppId?: number;
  /** 付费版本信息枚举值：BASIC：基础版PRO：专业版ULTIMATE：旗舰版 */
  PayVersion?: string;
}

/** 已修复漏洞信息 */
declare interface VulFixedItem {
  /** 漏洞ID */
  VulId?: number;
  /** 漏洞名称 */
  VulName?: string;
  /** 漏洞等级枚举值：LOW：低危MEDIUM：中危HIGH：高危CRITICAL：严重 */
  Level?: string;
  /** VPR 评级信息（包含评级结果、说明和分阶段评分），与 DescribeHostVulRiskList 一致 */
  VRPRatingInfo?: VPRRatingInfo;
  /** 漏洞类型枚举值：LINUX：Linux软件漏洞WINDOWS：Windows系统补丁漏洞WEB_CMS：Web-CMS漏洞APPLICATION：应用漏洞EMERGENCY：应急漏洞 */
  VulCategory?: string;
  /** CVE编号 */
  CveId?: string;
  /** 修复主机名称 */
  MachineName?: string;
  /** 修复主机实例ID */
  InstanceId?: string;
  /** 关联组件&amp;路径数量 */
  ComponentCount?: number;
  /** 关联组件&amp;路径列表 */
  Components?: string[];
  /** 最近一次修复时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  LatestFixTime?: string;
  /** VPR评级依据 */
  VPRExplainInfo?: VPRExplainInfo;
}

/** 主机简要信息 */
declare interface VulHostBriefInfo {
  /** 云主机实例 ID参数格式：形如 ins-xxxxxxxx */
  InstanceID?: string;
  /** 主机名称 */
  Name?: string;
  /** 公网 IP 地址 */
  PublicIP?: string;
  /** 内网 IP 地址 */
  PrivateIP?: string;
  /** 防护版本枚举值：NONE：无防护BASIC：基础版PRO：专业版ULTIMATE：旗舰版PRO_LH：轻量版 */
  DefendVersion?: string;
  /** 漏洞防御状态枚举值：ENABLED：已开启NOT_SUPPORTED：不支持NOT_ENABLED：未开启 */
  DefendStatus?: string;
  /** 所属账号信息 */
  Account?: AccountBriefInfo;
  /** 云主机实例状态枚举值：RUNNING：运行中STOPPED：已停止UNKNOWN：未知 */
  InstanceStatus?: string;
  /** 修复状态枚举值枚举值：PENDING： 待修复SCANNING： 扫描中FIXED： 已修复IGNORED： 已忽略FIXING： 修复中FIX_FAILED： 修复失败NEED_REBOOT： 修复待重启 */
  RiskStatus?: string;
  /** VPR 评级信息（含评级结果与各维度详情） */
  VPRRating?: VPRRatingInfo;
  /** CWP Agent 状态枚举值：ONLINE：在线OFFLINE：离线UNINSTALLED：未安装 */
  AgentStatus?: string;
  /** 资产标签列表（CSIP 内部资产标签） */
  TagItem?: MiniTagItem[];
  /** 云上标签列表（云资产侧 Tag） */
  CloudTag?: Tag[];
}

/** 漏洞影响组件信息 */
declare interface VulImpactComponentInfo {
  /** 组件名称 */
  Component?: string;
  /** 版本名称 */
  Version?: string;
}

/** 漏洞情报数据 */
declare interface VulInfoListItem {
  /** 风险等级high 高危/ middle 中危 / low 低危 /info 提示 */
  Level?: string;
  /** 漏洞披露时间 */
  SubmitTime?: string;
  /** 漏洞名 */
  VULName?: string;
  /** cveID/tvdID/ssvid */
  VULID?: string;
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

/** 漏洞扫描任务记录 */
declare interface VulScanTask {
  /** 任务id */
  Id?: number;
  /** 任务id */
  JobId?: string;
  /** 任务所属用户appid */
  AppId?: number;
  /** 任务类型枚举值：0： 一键扫描1： 周期扫描 */
  TaskType?: number;
  /** 漏洞分类枚举值：LINUX： Linux软件漏洞WINDOWS： Windows系统补丁WEB_CMS： Web-CMS漏洞APPLICATION： 应用漏洞EMERGENCY： 应急漏洞 */
  VulCategory?: string[];
  /** 漏洞名称 */
  VulName?: string[];
  /** kb名称 */
  KbName?: string[];
  /** 是否应急漏洞枚举值：0： 否1： 是 */
  Emergency?: number;
  /** 扫描账号数量（0: 全部账号, others: 账号数量） */
  Account?: number;
  /** 扫描开始时间 */
  StartTime?: string;
  /** 扫描结束时间 */
  EndTime?: string;
  /** 扫描状态（INITIALIZING: 初始化, SCANNING: 扫描中, SUCCESS: 扫描成功, TOTAL_FAIL: 全部扫描失败）枚举值：STOPPED： 已停止 */
  Status?: string;
  /** 漏洞威胁等级枚举值：LOW： 低危MEDIUM： 中危HIGH： 高危CRITICAL： 严重 */
  Level?: string[];
  /** 扫描方式枚举值：VersionCompare： 版本对比POC： POC检测VersionComparePOC： 版本对比+POC检测 */
  Method?: string[];
  /** 资产列表 */
  AssetList?: string[];
  /** 资产范围枚举值：0： 所有资产1： 自选资产2： 自选排除资产 */
  AssetRange?: number;
}

/** 漏洞扫描任务详情 */
declare interface VulScanTaskDetail {
  /** 任务id */
  Id?: string;
  /** 创建者AppId */
  AppId?: number;
  /** 实例id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 内网ip */
  PrivateIp?: string;
  /** 操作系统 */
  OS?: string;
  /** 扫描状态（SUCCESS: 扫描完成/成功, OFFLINE: 客户端离线, TIMEOUT: 扫描超时, FAILED: 扫描失败, UNSUPPORTED: 客户端版本过低/不支持扫描, TERMINATED: 已终止, TERMINATING: 终止中）枚举值：SCANNING： 扫描中 */
  Status?: string;
  /** 扫描开始时间 */
  StartTime?: string;
  /** 扫描结束时间 */
  EndTime?: string;
  /** 漏洞数量 */
  Vuls?: number;
  /** 失败原因 */
  Description?: string;
}

/** 漏洞传播趋势 */
declare interface VulSpreadTrend {
  /** 日期参数格式：YYYY-MM-DD */
  Date?: string;
  /** 该日期的传播趋势数值 */
  Trend?: number;
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

/** 漏洞影响厂商和产品 */
declare interface VulVendorProduct {
  /** 供应商 */
  Vendor?: string;
  /** 产品名称 */
  Product?: string;
  /** 影响版本 */
  VersionRange?: string[];
}

/** 漏洞白名单 */
declare interface VulWhitelist {
  /** id */
  Id?: number;
  /** 漏洞名称 */
  Name?: string;
  /** 备注 */
  Remark?: string;
  /** 所属账号 */
  AppId?: number;
  /** 资产列表 */
  AssetList?: string[];
  /** 更新时间 */
  UpdateTime?: string;
  /** 策略开关（0-关闭, 1-开启） */
  Switch?: number;
  /** 资产范围枚举值：0： 全部资产1： 自选资产2： 全选排除资产 */
  AssetRange?: number;
  /** 补丁KB id */
  KBId?: number;
  /** 漏洞Id */
  VulId?: number;
}

/** 通知资产范围 */
declare interface WebhookAssetScope {
  /** 资产范围类型（对齐 NotifyAssetRange）枚举值：1：全部主机（可剔除）2：自选主机3：按标签选择 */
  AssetRange: number;
  /** 选中的主机 quuid 列表，仅 AssetRange=2 生效 */
  InstanceIds?: string[];
  /** 排除的主机 quuid 列表，仅 AssetRange=1 生效 */
  ExcludedInstanceIds?: string[];
  /** 安全中心标签 ID 列表，仅 AssetRange=3 生效 */
  TagIds?: number[];
  /** 腾讯云标签列表，仅 AssetRange=3 生效入参限制：AssetRange=3 时 TagIds + CloudTags 不能同时为空 */
  CloudTags?: string[];
}

/** 自定义透传字段 */
declare interface WebhookCustomField {
  /** 字段名入参限制：长度 1-64 */
  Key?: string;
  /** 字段值入参限制：长度 1-256 */
  Value?: string;
}

/** 单个通知项 */
declare interface WebhookNotifyItem {
  /** 模块编码（与 ModifyNotifySettingAlert 共用枚举）枚举值：Vul：漏洞与云安全态势Alert：告警中心AkSk：云API风险治理Agent：客户端/主机资产LogAnalysis：日志分析 */
  Module?: string;
  /** 子模块编码枚举值（部分）：MALWARE_FILE：恶意文件MALWARE_PROCESS：恶意进程RISK_LOGIN：异常登录BRUTE_FORCE：密码破解MALICIOUS_REQUEST：恶意请求HIGH_RISK_COMMAND：高危命令PRIVILEGE_ESCALATION：本地提权REVERSE_SHELL：反弹ShellNETWORK_ATTACK：网络攻击MULTI_BEHAVIOR_ATTACK：多行为攻击AGENT_OFFLINE：客户端离线AGENT_UNINSTALL：客户端卸载完整枚举见 DescribeWebhookNotifyItemTree */
  SubModule?: string;
  /** 风险等级集合枚举值：CRITICAL：严重HIGH：高危MEDIUM：中危LOW：低危INFO：提示不支持等级的子模块传空数组 */
  Levels?: string[];
  /** 处理状态等 */
  Items?: string[];
}

/** 通知策略完整信息 */
declare interface WebhookPolicy {
  /** 策略 ID */
  ID?: number;
  /** 策略名称 */
  Name?: string;
  /** 启用状态枚举值：ON：启用OFF：禁用 */
  Status?: string;
  /** 通知项列表（模块+子模块+等级+处置状态） */
  NotifyItems?: WebhookNotifyItem[];
  /** 接收的成员账号范围 */
  MemberId?: string[];
  /** 通知资产范围 */
  AssetScope?: WebhookAssetScope;
  /** 接收格式枚举值：TEXT：文本格式JSON：JSON 格式 */
  ReceiveFormat?: string;
  /** 推送语言枚举值：zh：中文en：英文 */
  MsgLanguage?: string;
  /** 自定义透传字段列表，关闭时为空数组 */
  CustomFields?: WebhookCustomField[];
  /** 接收机器人 ID 列表 */
  ReceiverIDList?: number[];
  /** 接收机器人精简信息（列表行展示用） */
  ReceiverList?: WebhookReceiverBrief[];
}

/** 接收机器人信息 */
declare interface WebhookReceiver {
  /** 机器人 ID */
  ID?: number;
  /** 机器人名称入参限制：长度 1-20 个字符 */
  Name?: string;
  /** 机器人类型枚举值：WEBHOOK：webhook 类型SCF：云函数类型 */
  Type?: string;
  /** Webhook 地址，仅 Type=WEBHOOK 时返回，否则为空串 */
  WebhookAddr?: string;
  /** 云函数地域，仅 Type=SCF 时返回 */
  SCFRegion?: string;
  /** 云函数命名空间，仅 Type=SCF 时返回 */
  Namespace?: string;
  /** 云函数函数名，仅 Type=SCF 时返回 */
  FunctionName?: string;
  /** 云函数函数版本，仅 Type=SCF 时返回 */
  FunctionVersion?: string;
  /** 云函数函数别名，仅 Type=SCF 时返回 */
  Alias?: string;
}

/** 接收机器人精简信息 */
declare interface WebhookReceiverBrief {
  /** 机器人 ID */
  ID?: number;
  /** 机器人名称 */
  Name?: string;
  /** 机器人类型枚举值：WEBHOOK：webhook 类型SCF：云函数类型 */
  Type?: string;
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

declare interface AccessAIAnalysisSMTPRequest {
  /** 邮箱账号 */
  AccountName?: string;
  /** 邮箱类型枚举值：1： QQ邮箱2： GMail3： OutLook */
  Type?: number;
  /** 邮箱授权密码 */
  Password?: string;
}

declare interface AccessAIAnalysisSMTPResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface AddLoginWhiteListsRequest {
  /** 异地登录白名单实体 */
  HostLoginWhiteObj: HostLoginWhiteObj;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 事件同步处理方式： "" -- 不操作 "All" -- 将符合此配置的所有事件记录加白 "Id" -- 将EventId对应的事件记录加白 */
  ProcessType?: string;
  /** 异地登录事件ID，当ProcessType为Id时此项必填 */
  EventId?: number;
}

declare interface AddLoginWhiteListsResponse {
  /** 重复添加的提示列表 */
  DuplicateHosts?: DuplicateHosts[];
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

declare interface AddVulWhitelistRequest {
  /** 漏洞ID */
  VulId?: number[];
  /** 补丁ID */
  KbId?: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 备注 */
  Remark?: string;
  /** 资产列表 */
  AssetList?: string[];
}

declare interface AddVulWhitelistResponse {
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

declare interface BatchModifyBaselinePolicyRequest {
  /** 待修改的基线策略 ID 列表，不可为空且元素不可为 0。 */
  PolicyIDList: number[];
  /** 周期扫描配置；不修改时可省略。Enable=1 时必须同时传 IntervalType 与 IntervalValueList。 */
  CycleScanConf: CycleScanConf;
  /** 新增内置检测项自动同步开关。true 自动加入，false 不加入。 */
  AutoSyncItem?: boolean;
  /** 分类 / 子分类 / 检测项命中配置；不修改时可省略。 */
  CategoryConf?: BaselinePolicySystemCategoryConf[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 自定义检测项取值配置列表；不修改时可省略。每个元素 RuleID 与 CustomItemID 不能同时为 0。 */
  CustomItemConf?: BaselineCustomItemConf[];
}

declare interface BatchModifyBaselinePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindClusterOwnerRequest {
  /** 集群资产id */
  ClusterAssetIds: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 负责人名称 */
  OwnerName?: string;
  /** 集群CAMD5值 */
  ClusterCaMD5List?: string[];
}

declare interface BindClusterOwnerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelEdrAlertIgnoreRequest {
  /** 告警定位列表（支持跨账号），最多500条 */
  Targets: EdrAlertTargetForIgnore[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CancelEdrAlertIgnoreResponse {
  /** 数量 */
  CancelledCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckCWPExposePathPermissionRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CheckCWPExposePathPermissionResponse {
  /** 用户旗舰版信息 */
  UltimateList?: UltimateAppItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckIsUltimateVersionRequest {
}

declare interface CheckIsUltimateVersionResponse {
  /** 是否旗舰版用户 */
  IsUltimateVersion?: boolean;
  /** 是否新版旗舰版用户 */
  IsNewUltimateVersion?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckRiskRequest {
  /** 风险ID */
  RiskDetailId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CheckRiskResponse {
  /** 风险操作返回信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyBaselinePolicyRequest {
  /** 被复制的策略ID */
  PolicyID: number;
  /** 复制的目标AppID */
  TargetAppIDList: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CopyBaselinePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAIScheduleRequest {
  /** 任务名称。最大 128 字符。 */
  Name?: string;
  /** 执行提示词。最大 2048 字符。 */
  Prompts?: string;
  /** 触发器列表，多个触发器之间为「或」关系，满足任一即触发。 */
  Triggers?: AiScheduleTriggerInfo[];
  /** 最大触发次数，0 表示无限制。 */
  MaxFireCount?: number;
  /** 生效开始时间，Unix 毫秒时间戳，0 表示立即生效。 */
  StartTime?: number;
  /** 生效结束时间，Unix 毫秒时间戳，0 表示永不过期。 */
  EndTime?: number;
}

declare interface CreateAIScheduleResponse {
  /** AI 定时任务 ID。 */
  ScheduleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface CreateAllAssetsExportJobRequest {
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
  /** 是否查询主机列表 */
  IsCloudHost?: boolean;
}

declare interface CreateAllAssetsExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetFilterViewRequest {
  /** 视图名称 */
  ViewName: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产搜索过滤项 */
  Filters?: Filters[];
}

declare interface CreateAssetFilterViewResponse {
  /** 操作信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetProcessExportJobRequest {
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

declare interface CreateAssetProcessExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetSyncTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateAssetSyncTaskResponse {
  /** 资产同步任务ID集合 */
  TaskIDs?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetTagRequest {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 颜色 */
  Color?: string;
  /** 描述 */
  Description?: string;
  /** 打标策略 */
  TaggingRule?: string;
  /** 是否立即执行资产打标 */
  ApplyNow?: boolean;
}

declare interface CreateAssetTagResponse {
  /** 状态码 */
  Code?: string;
  /** 信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetViewRisksExportJobRequest {
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

declare interface CreateAssetViewRisksExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBaselineAggregatedItemExportJobRequest {
  /** 基线策略 ID 列表（可同时传多条做联合统计）。 */
  PolicyID: number[];
  /** 基线系统父分类 ID。 */
  ParentCategoryID: number;
  /** 基线子分类 ID。 */
  CategoryID?: number;
  /** 导出任务名称。不传时自动生成。 */
  Name?: string;
  /** 导出类型，默认 RISK。枚举值：STATISTIC：导出统计结果RISK：导出风险明细 */
  ExportType?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件。支持的 Name：ResultStatus（通过状态 PASS/NOT_PASS）、Name（检测项名称，模糊搜索）、RiskLevel（风险等级 CRITICAL/HIGH/MEDIUM/LOW）、PolicyName（所属基线/策略名称，模糊搜索）。 */
  Filters?: Filters[];
  /** 废弃 */
  CheckAssetType?: string;
}

declare interface CreateBaselineAggregatedItemExportJobResponse {
  /** 导出任务ID，异步导出任务唯一标识，用于查询任务状态与获取下载链接。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBaselineFixRecordExportJobRequest {
  /** 导出任务名称。不传时自动生成。 */
  Name?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件，支持字段：检测项名称（模糊）、资产名称/ID、风险等级、修复时间区间等。 */
  Filters?: Filters[];
}

declare interface CreateBaselineFixRecordExportJobResponse {
  /** 导出任务ID，异步导出任务唯一标识，用于查询任务状态与获取下载链接。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBaselineMainTaskExportJobRequest {
  /** 基线主任务 ID，精确导出该任务的检测项与子任务；不传时导出为空。 */
  TaskID?: number;
  /** 导出任务名称。不传时自动生成。 */
  Name?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件，支持的字段包括：TaskID（精确）、TaskType、Status、CheckAssetType 等。 */
  Filters?: Filters[];
}

declare interface CreateBaselineMainTaskExportJobResponse {
  /** 导出任务ID，异步导出任务唯一标识，用于查询任务状态与获取下载链接。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCFGRiskPDFReportExportJobRequest {
  /** 合规规范ID */
  StandardID: number;
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

declare interface CreateCFGRiskPDFReportExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCFGRisksExportJobRequest {
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
  /** 规范ID */
  StandardIDs?: number[];
}

declare interface CreateCFGRisksExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCSIPManualMalwareScanRequest {
  /** 扫描模式：0=全盘扫描 / 1=快速扫描，与 cwp_malware Scan RPC 的 scan_type 字段语义一致 */
  ScanPattern: number;
  /** 生效范围档位：0=指定主机（ScopeSpecified） / 1=全选 CSIP 付费机器（ScopeAll）。旧前端不传时零值默认 0，保持兼容 */
  Scope: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 是否启用内存马扫描（0/1），透传给 cwp_malware */
  EnableMemShellScan?: number;
  /** 单机扫描超时秒数；<=0 时取默认 3600 */
  Timeout?: number;
  /** 多账号体系目标 AppId 列表；为空时 fallback 到 [req.AppID]（仅自身）。无论 Scope=0/1，均经过 csip.ValidateTargetAppIDsViaCSIP 校验 */
  TargetAppIDs?: number[];
  /** 扫描引擎类型，cloudapi 层透传给 cwp_malware，不持久化到主表，引擎模式 1标准模式 2增强模式 3严格模式枚举值：1： 标准模式2： 增强模式3： 严格模式 */
  EngineType?: number;
  /** 指定机器列表，实例ID版本 */
  InstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 全选时候排除的机器，实例ID版本 */
  ExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
}

declare interface CreateCSIPManualMalwareScanResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCheckViewRisksExportJobRequest {
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

declare interface CreateCheckViewRisksExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudFunctionExportJobRequest {
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

declare interface CreateCloudFunctionExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterAssetSyncTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 集群资产id */
  ClusterAssetIds?: string[];
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5List?: string[];
}

declare interface CreateClusterAssetSyncTaskResponse {
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterContainerListExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：ContainerId：容器ID，精确匹配。ContainerName：容器名称，模糊匹配。RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。ImageId：镜像ID，精确匹配。ImageName：镜像名称，模糊匹配。IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。UUID：主机UUID，精确匹配。 */
  Filter?: Filter;
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
}

declare interface CreateClusterContainerListExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterListExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：ClusterId：集群ID，精确匹配。ClusterName：集群名称，模糊匹配。ClusterType：集群类型，精确匹配。取值：TKE_MANAGED_CLUSTER（腾讯云标准集群）、TKE_INDEPENDENT_CLUSTER（标准集群Master自维护）、TKE_SERVERLESS_CLUSTER（Serverless集群）、TKE_EDGE_CLUSTER（边缘集群）、SELF_BUILT（腾讯云内自建）、SELF_BUILT_OTHER（非腾讯云自建/混合云）。RunStatus：集群运行状态，精确匹配。取值：Running（运行中）、Exception（异常）、Unknown（未知）。AccessedStatus：接入状态，精确匹配。取值：AccessedNone（未接入）、AccessedInstalling（接入中）、AccessedException（接入异常）、AccessedInstalled（已接入）。DefendStatus：防护状态，精确匹配。取值：Enabled（已防护）、Partial（部分防护）、Disabled（未防护）。RiskStatus：风险检查状态，精确匹配。RiskLevel：风险等级，精确匹配。取值：CRITICAL、HIGH、MEDIUM、LOW、NONE（无风险）。HasHighRisk：仅筛选含高危及以上风险的集群，无需填入 value，传入 HasHighRisk 即生效。Region：地域，精确匹配。OwnerName：负责人，模糊匹配。ClusterAssetIds：集群资产ID，精确匹配。ExcludeClusterAssetIds：排除的集群资产ID，精确排除。 */
  Filter?: Filter;
  /** 可导出字段 */
  ExportFields?: string[];
}

declare interface CreateClusterListExportJobResponse {
  /** 任务id */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterNamespaceListExportJobRequest {
  /** 集群CA证书MD5 */
  ClusterCaMD5: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：Name：命名空间名称，模糊匹配。Label：标签，模糊匹配（对标签的 key 或 value 做匹配，任一命中即匹配）。 */
  Filter?: Filter;
  /** 导出字段列表（不传则导出全部字段）枚举值：Name：命名空间名称Labels：标签（格式：key1=value1;key2=value2）CreateTime：创建时间 */
  ExportFields?: string[];
}

declare interface CreateClusterNamespaceListExportJobResponse {
  /** 导出任务ID取值参考：前端轮询导出任务状态时使用 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterNodeListExportJobRequest {
  /** 集群CA证书MD5（32位十六进制；唯一标识）入参限制：长度必须等于32个字符 */
  ClusterCaMD5: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：NodeName：节点名称，模糊匹配。NodeId：节点ID，精确匹配。NodeUniqueID：节点唯一ID，精确匹配（NodeAssetID 为等价别名）。NodeType：节点类型，精确匹配。取值：SUPER（超级节点）、MASTER（主节点）、WORKER（工作节点）。RunStatus：节点运行状态，精确匹配。InternalIP：内网IP，精确匹配。ClientStatus：客户端状态，精确匹配。取值：ONLINE（在线）、OFFLINE（离线）、UNINSTALL（未安装）。 */
  Filter?: Filter;
  /** 导出字段列表（不传则导出全部字段）枚举值：NodeId：节点IDNodeName：节点名称PublicIP：公网IPInternalIP：内网IPNodeType：节点类型（NORMAL普通节点 / SUPER超级节点 / WORKER / MASTER / ETCD）CoresCount：核数ClientStatus：客户端状态（ONLINE在线 / OFFLINE离线 / UNINSTALL未安装）RunStatus：运行状态（Running运行中 / Exception异常） */
  ExportFields?: string[];
}

declare interface CreateClusterNodeListExportJobResponse {
  /** 导出任务ID取值参考：前端轮询导出任务状态时使用 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateComplianceRiskExportJobRequest {
  /** 合规标准ID */
  StandardID: number;
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
  /** 条款ID */
  TermID?: number;
}

declare interface CreateComplianceRiskExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
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
  StrategyType?: string;
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
  /** 白名单的类型枚举值：static_risk： 静态配置扫描的白名单规则audit： 审计白名单规则ueba： ueba相关的白名单规则 */
  WhitelistType?: string;
}

declare interface CreateDspmWhitelistStrategyResponse {
  /** 白名单id */
  WhitelistStrategyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDynamicAssetsExportJobRequest {
  /** 云厂商 */
  Provider: string;
  /** 资产类型 */
  AssetType: string;
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

declare interface CreateDynamicAssetsExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEDRManualScanRequest {
  /** 资产选择方式：all-全部资产/tag-按标签选择(仅主机)/direct-直接选择 */
  AssetSelectionType: string;
  /** 检测模式：full-全盘检测/quick-快速检测/include-仅检测指定路径/exclude-排除指定路径 */
  ScanType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 直接选择的主机列表（AssetSelectionType=direct或all时使用） */
  InstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 剔除的主机列表（AssetSelectionType=all时使用） */
  ExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 主机对应的标签ID */
  TagIds?: number[];
  /** 直接选择的集群列表 */
  ClusterIDsWithAppId?: ClusterWithAppIdItem[];
  /** 剔除的集群列表（AssetSelectionType=all时使用） */
  ExcludeClusterIDsWithAppId?: ClusterWithAppIdItem[];
  /** 自选路径列表（ScanType=include或exclude时必填，最多100条） */
  CustomPaths?: string[];
  /** 超时时间（秒），上限7200 */
  Timeout?: number;
  /** 是否开启深度检测：0-否/1-是 */
  EnableMemShellScan?: number;
}

declare interface CreateEDRManualScanResponse {
  /** 创建的任务列表（主机和容器分别一条） */
  Tasks?: CreatedTaskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdrAlertExportJobRequest {
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
  /** 自定义任务名，允许重复；传空自动生成默认名 alert_{appid}_{时间戳}（如 alert_1234567890_20260501114522）；仅支持数字/字母/下划线/短横线/中文，≤100 字符（按字符/rune 计，中文按 1 个字符），校验失败返回 InvalidParameter（文案 TextEdrExportJobNameInvalid） */
  JobName?: string;
}

declare interface CreateEdrAlertExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdrLessAlertExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** MachineName 主机名称InstanceID 实例ID IP 内网IP或公网IP - 是否必填：否 - 主机Ip或别名筛选HostId - String - 是否必填：否 - 主机IdAgentId - String - 是否必填：否 - 客户端IdPolicyType - String - 是否必填：否 - 策略类型,0:系统策略1:用户自定义策略Domain - String - 是否必填：否 - 域名(先对域名做urlencode,再base64)HandleStatus - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任BeginTime - String - 是否必填：否 - 最近访问开始时间EndTime - String - 是否必填：否 - 最近访问结束时间 */
  Filters?: EDRFilter[];
  /** 排序方式：[ASC:升序|DESC:降序] */
  Order?: string;
  /** 排序字段：[ LatestDetectTime:最近请求时间] */
  By?: string;
}

declare interface CreateEdrLessAlertExportJobResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExposureAutoTagRuleRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 规则名称 */
  RuleName?: string;
  /** 标签 */
  Tag?: string;
  /** 规则描述 */
  Description?: string;
  /** 规则开启状态 */
  Enable?: boolean;
  /** 资产类型 */
  AssetTypes?: string[];
  /** 端口 */
  Ports?: string[];
  /** 开放状态 */
  OpenStatuses?: string[];
  /** 是否立即执行规则 */
  ApplyNow?: boolean;
}

declare interface CreateExposureAutoTagRuleResponse {
  /** 规则ID */
  RuleID?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExposuresExportJobRequest {
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

declare interface CreateExposuresExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHighBaseLineRisksExportJobRequest {
  /** 云账号ID */
  CloudAccountID: string;
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

declare interface CreateHighBaseLineRisksExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHostVulExportJobRequest {
  /** 导出的action枚举值：LinuxHostVulRiskList： linux漏洞风险列表WebCmsHostVulRiskList： WebCms漏洞风险列表AppHostVulRiskList： App漏洞风险列表EmergencyHostVulRiskList： 紧急漏洞风险列表KBRiskList： Windows kb风险列表RelateHostList： 关联主机列表WhiteList： 漏洞白名单 */
  BusinessAction: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件数组，多条件之间为 AND 关系支持的 Filter.Name：KbID：KB风险关联主机情况下需要额外加入KB风险IDVulID：漏洞风险关联主机情况下需要额外加入vul风险ID */
  Filters?: Filters[];
}

declare interface CreateHostVulExportJobResponse {
  /** 任务ID */
  JobID?: string;
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

declare interface CreatePodContainerListExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** Pod唯一ID */
  PodUniqueID?: string;
  /** 集群CA证书MD5（用于查节点信息） */
  ClusterCaMD5?: string;
  /** 通用过滤条件列表。支持的过滤字段：ContainerId：容器ID，精确匹配。ContainerName：容器名称，模糊匹配。RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。ImageId：镜像ID，精确匹配。ImageName：镜像名称，模糊匹配。IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。UUID：主机UUID，精确匹配。 */
  Filter?: Filter;
  /** 导出字段列表（不传则导出全部字段）枚举值：ContainerId：容器IDContainerName：容器名称RunStatus：运行状态NodeId：节点IDNodeType：节点类型ImageId：镜像IDImageName：镜像名称IsolateStatus：隔离状态 */
  ExportFields?: string[];
}

declare interface CreatePodContainerListExportJobResponse {
  /** 导出任务ID取值参考：前端轮询导出任务状态时使用 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePodServiceListExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 集群CA证书MD5（与PodUniqueID至少传一个） */
  ClusterCaMD5?: string;
  /** Pod唯一ID（传了即Pod关联Service模式）补充说明：与ClusterCaMD5至少传一个 */
  PodUniqueID?: string;
  /** 通用过滤条件列表。支持的过滤字段：Name：服务名称，模糊匹配。ServiceType：服务类型，精确匹配。取值：ClusterIP、NodePort、LoadBalancer、ExternalName。Namespace：命名空间，精确匹配。SelectorLabel：Selector 标签，模糊匹配。 */
  Filter?: Filter;
  /** 导出字段列表（不传则导出全部字段）枚举值：Name：服务名称ServiceType：服务类型（如LoadBalancer/ClusterIP）Selector：Selector标签（格式：key1=value1;key2=value2）Namespace：命名空间CreateTime：创建时间 */
  ExportFields?: string[];
}

declare interface CreatePodServiceListExportJobResponse {
  /** 导出任务ID取值参考：前端轮询导出任务状态时使用 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePublicAssetsExportJobRequest {
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

declare interface CreatePublicAssetsExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
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

declare interface CreateRiskDetailExportJobRequest {
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

declare interface CreateRiskDetailExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScanStatisticExportJobRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 体检任务id */
  TaskLogId?: string;
}

declare interface CreateScanStatisticExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScanTaskRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 检测模式 */
  TaskMode?: number;
  /** 规则集合 */
  RuleIDs?: string[];
  /** 规范ID */
  StandardIDs?: number[];
}

declare interface CreateScanTaskResponse {
  /** 扫描任务ID */
  TaskID?: string;
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

declare interface CreateVulFixRetryTaskRequest {
  /** 需要重试的修复任务ID */
  TaskId: number;
  /** 指定需要重试的主机实例ID列表，不传则对所有失败主机进行重试 */
  InstanceIds?: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateVulFixRetryTaskResponse {
  /** 重试生成的新任务ID，用于后续查询任务状态 */
  TaskId?: number;
  /** 本次重试的主机数量 */
  RetryCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulFixTaskRequest {
  /** 修复项列表，每项指定一个漏洞/KB补丁及其需要修复的主机入参限制：最多100项，总实例数不超过5000 */
  FixItems: VulFixItem[];
  /** 最大修复时间单位：秒默认值：3600 */
  Timeout?: number;
  /** 是否在修复前创建磁盘快照默认值：false */
  CreateSnapshot?: boolean;
  /** 快照名称，CreateSnapshot为true时有效入参限制：最长128个字符 */
  SnapshotName?: string;
  /** 快照保存天数，CreateSnapshot为true时有效 */
  SaveDays?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateVulFixTaskResponse {
  /** 修复任务ID，用于后续查询任务状态 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulFixedExportJobRequest {
  /** 过滤条件（与 DescribeVulFixedList 一致）支持的Filter.Name：Keyword - 模糊匹配，按关键字搜索（漏洞名称/CVE编号/主机名称/实例ID）VulName - 模糊匹配，按漏洞名称搜索Level - 精确匹配，按漏洞等级筛选：LOW-低危 MEDIUM-中危 HIGH-高危 CRITICAL-严重VprLevel - 精确匹配，按VPR评级筛选：1-Low 2-Medium 3-High 4-CriticalVulCategory - 精确匹配，按漏洞类型筛选：LINUX-Linux软件漏洞 WINDOWS-Windows系统补丁漏洞 WEB_CMS-Web-CMS漏洞 APPLICATION-应用漏洞 EMERGENCY-应急漏洞MachineName - 模糊匹配，按主机名称搜索InstanceId - 模糊匹配，按实例ID搜索FixTime - 范围匹配，修复时间范围，传入两个值表示起止时间 */
  Filters?: Filters[];
  /** 排序字段枚举值：FixTime：按修复时间排序VulName：按漏洞名称排序 */
  Order?: string;
  /** 排序方式枚举值：asc：升序desc：降序默认值：desc */
  By?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface CreateVulFixedExportJobResponse {
  /** 导出任务ID取值参考：前端轮询导出任务状态时使用 */
  JobID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulReScanRequest {
  /** 漏洞ID */
  VulId?: number[];
  /** 补丁编号 */
  KbNo?: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产列表 */
  AssetList?: string[];
}

declare interface CreateVulReScanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulRisksExportJobRequest {
  /** 云账号ID */
  CloudAccountID: string;
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

declare interface CreateVulRisksExportJobResponse {
  /** 导出任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulScanManualRequest {
  /** 超时时间（秒） */
  Timeout: number;
  /** 资产范围（0-全部资产，1-自选资产，2-剔除资产，3-自动资产匹配） */
  AssetRange: number;
  /** 扫描方式（VersionCompare: 版本对比, POC: POC检测, VersionComparePOC: 版本对比+POC检测） */
  Method?: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 漏洞id */
  VulId?: number[];
  /** kb编号 */
  KbNo?: string[];
  /** 漏扫类型枚举值：LINUX： Linux软件漏洞WINDOWS： Windows系统补丁WEB_CMS： Web-CMS漏洞APPLICATION： 应用漏洞EMERGENCY： 应急漏洞 */
  VulCategory?: string[];
  /** 漏洞等级（INVALID: 无效, INFO: 提示, LOW: 低危, MEDIUM: 中危, HIGH: 高危, CRITICAL: 严重） */
  Level?: string[];
  /** 资产列表（Quuid列表） */
  AssetList?: string[];
  /** 标签id */
  TagIds?: number[];
}

declare interface CreateVulScanManualResponse {
  /** 任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAIAnalysisSMTPAccessRequest {
}

declare interface DeleteAIAnalysisSMTPAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAIScheduleRequest {
  /** AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。 */
  ScheduleId?: string;
}

declare interface DeleteAIScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAssetFilterViewRequest {
  /** 资产搜索视图ID */
  ViewID: number;
}

declare interface DeleteAssetFilterViewResponse {
  /** 删除成功 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAssetTagRequest {
  /** 标签ID */
  TagID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteAssetTagResponse {
  /** 状态码 */
  Code?: string;
  /** 信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaselineSelfDefinedPolicyListRequest {
  /** 待删除的自定义策略 ID 列表，不可为空且元素不可为 0。 */
  PolicyIDList: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteBaselineSelfDefinedPolicyListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCSIPMalwareScanTaskRequest {
  /** 任务ID */
  TaskIds: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteCSIPMalwareScanTaskResponse {
  /** 实际物理删除的任务数（主表 affected rows） */
  SuccessCount?: number;
  /** 因运行中（子表 status IN {0,1,11} 计数 > 0）而未删除的 TaskId 列表；越权 / 不存在的 ID 不出现在此 */
  FailedIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 被调用的集团账号的成员id */
  OperatedMemberId?: string[];
  /** 集群资产 id */
  ClusterAssetIds?: string[];
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5List?: string[];
}

declare interface DeleteClusterResponse {
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

declare interface DeleteEDRRulesRequest {
  /** 规则ID数组. (最大100条) */
  RuleIDs: string[];
  /** 规则类型，0-system 1-custom，目前只支持删除自定义规则 */
  RuleType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 删除策略对应的APPID */
  TargetAppIDs?: number[];
}

declare interface DeleteEDRRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEDRScanTaskRequest {
  /** 任务ID */
  TaskId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteEDRScanTaskResponse {
  /** 被删除任务的taskId */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEdrLogCollectPathsRequest {
  /** 配置ID列表 */
  Ids: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteEdrLogCollectPathsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteExposureAutoTagRuleRequest {
  /** 规则ID集合 */
  RuleIDs: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteExposureAutoTagRuleResponse {
  /** 操作结果 */
  Message?: string;
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

declare interface DeleteLoginWhiteListRequest {
  /** 白名单ID (最大 100 条) */
  Ids: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteLoginWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMachineClearHistoryRequest {
  /** 需要删除的记录id值,最大长度100个 */
  Ids: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteMachineClearHistoryResponse {
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

declare interface DeleteVulWhitelistRequest {
  /** id列表 */
  Id?: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DeleteVulWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWebhookPoliciesRequest {
  /** 策略 ID 列表入参限制：单次最多 100 个 */
  IDList: number[];
}

declare interface DeleteWebhookPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWebhookReceiversRequest {
  /** 机器人 ID 列表入参限制：单次最多 50 个 */
  IDList: number[];
}

declare interface DeleteWebhookReceiversResponse {
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

declare interface DescribeAIAnalysisFileDownloadURLRequest {
  /** 文件原始下载地址，最大 2048 字符。可通过 AI 分析流式接口返回的文件信息获取。 */
  Url?: string;
}

declare interface DescribeAIAnalysisFileDownloadURLResponse {
  /** 带签名的临时下载链接，有效期 2 小时。 */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIAnalysisHistoryRequest {
  /** 过滤器 */
  Filter?: Filter;
  /** sessionID，用于游标分页 */
  SessionID?: string;
}

declare interface DescribeAIAnalysisHistoryResponse {
  /** 会话记录 */
  SessionList?: AIAnalysisSession[];
  /** 会话总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIAnalysisRecommendQuestionsRequest {
  /** 问答的SessionID */
  SessionID: string;
}

declare interface DescribeAIAnalysisRecommendQuestionsResponse {
  /** 推荐问题 */
  RecommendAction?: AIRecommendAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIAnalysisRobotInfoRequest {
  /** 接入类型，0/不传入：企业微信url配置接入 1:企业微信扫码接入 2:微信扫码接入 3:QQ 账密接入 4:飞书 账密接入 5:钉钉 账密接入 */
  AccessType?: number;
  /** QQ/飞书/钉钉 创建Bot账号ID */
  AccountId?: string;
  /** QQ/飞书/钉钉 创建Bot密钥 */
  Secret?: string;
  /** 预设机器人名称，为空时则后台生成 */
  BotName?: string;
}

declare interface DescribeAIAnalysisRobotInfoResponse {
  /** 机器人配置url */
  URL?: string;
  /** 访问token */
  AccessToken?: string;
  /** aes key */
  AesKey?: string;
  /** 机器人ID */
  BotID?: string;
  /** 二维码图片获取地址 */
  QrcodeImageContext?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIAnalysisSMTPRequest {
}

declare interface DescribeAIAnalysisSMTPResponse {
  /** 是否已接入邮箱 */
  Exist?: boolean;
  /** 邮箱账号 */
  AccountName?: string;
  /** 邮箱类型枚举值：1： QQ邮箱2： GMail3： OutLook */
  Type?: number;
  /** 邮箱授权密码 */
  Password?: string;
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
  /** 标签 */
  TagIDs?: string[];
  /** 0，1枚举值：0： 部分1： 全部 */
  TCSSScope?: number;
  /** 集群ID */
  ClusterIDs?: string[];
  /** 排除集群ID */
  ExcludeClusterIDs?: string[];
  /** 实例ID */
  InstanceIds?: string[];
  /** 排除实例ID */
  ExcludeInstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIScheduleListRequest {
  /** 分页偏移量，默认 0。 */
  Offset?: number;
  /** 分页大小，默认 20，最大 100。 */
  Limit?: number;
  /** 状态过滤。取值：0（全部）、1（已启用）、2（已停用），默认 0。 */
  Status?: number;
  /** 定时任务ID，可选，为空时则全量查询 */
  ScheduleId?: string;
}

declare interface DescribeAIScheduleListResponse {
  /** AI 定时任务列表。 */
  ScheduleSet?: AiScheduleInfo[];
  /** 总条数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAISchedulePlanListRequest {
  /** AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。 */
  ScheduleId?: string;
  /** 预览窗口开始时间，Unix 毫秒时间戳，0 表示当前时间。 */
  StartTime?: number;
  /** 预览窗口结束时间，Unix 毫秒时间戳。 */
  EndTime?: number;
  /** 分页偏移量，默认 0。 */
  Offset?: number;
  /** 最大返回条数，默认 20，最大 100。 */
  Limit?: number;
}

declare interface DescribeAISchedulePlanListResponse {
  /** 触发计划列表。 */
  PlanSet?: AiSchedulePlanInfo[];
  /** 总条数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIScheduleStatsRequest {
}

declare interface DescribeAIScheduleStatsResponse {
  /** 定时任务总数。 */
  ScheduleCount?: number;
  /** 当前运行中的任务数量。 */
  RunningTaskCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIScheduleTaskDetailRequest {
  /** 任务 ID。可通过 DescribeAIScheduleTaskList 接口获取。 */
  TaskId?: string;
}

declare interface DescribeAIScheduleTaskDetailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIScheduleTaskListRequest {
  /** AI 定时任务 ID，用于过滤。可通过 DescribeAIScheduleList 接口获取。 */
  ScheduleId?: string;
  /** 分页偏移量，默认 0。 */
  Offset?: number;
  /** 分页大小，默认 20，最大 100。 */
  Limit?: number;
}

declare interface DescribeAIScheduleTaskListResponse {
  /** 任务列表。 */
  TaskSet?: AiScheduleTaskInfo[];
  /** 总条数。 */
  TotalCount?: number;
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

declare interface DescribeAbTestUserRequest {
  /** 项目名称 */
  ProjectName: string;
  /** 租户ID */
  UserAppIds: number[];
}

declare interface DescribeAbTestUserResponse {
  /** 是否灰度用户 */
  AbTestUserList?: AbTestUserItem[];
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

declare interface DescribeAgentConfigSettingRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAgentConfigSettingResponse {
  /** 增强日志模式开关，0-关闭 1-开启（未配置时为空） */
  EnhanceLogMode?: number;
  /** 恶意软件 POC 模式开关，0-关闭 1-开启（未配置时为空） */
  MalwarePocMode?: number;
  /** 上报源端口开关（兼容旧版本），0-关闭 1-开启 */
  ReportSourcePort?: number;
  /** 已开启的日志采集类型列表，如 tcp_ingress、tcp_src_port、http_egress、http_ingress、app_access */
  LogCollectSettings?: string[];
  /** 资产选择方式：all/tag/direct */
  AssetSelectionType?: string;
  /** 按标签选择时的标签ID数组 */
  TagIds?: string[];
  /** 直接选择的主机instance_id列表 */
  InstanceIDs?: string[];
  /** 排除的主机instance_id列表 */
  ExcludeInstanceIDs?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentRunModeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAgentRunModeResponse {
  /** 自定义模式配置 */
  CustomPolicy?: CustomAgentRunModePolicy;
  /** 高安全防护模式quuid列表 */
  AdvanceModeQuuids?: string[];
  /** 自定义模式quuid列表 */
  CustomModeQuuids?: string[];
  /** 日志增强开关,0：关闭，1：打开 */
  EnhanceLogMode?: number;
  /** 文件查杀自动poc模式开关，0：关闭，1：打开 */
  MalwarePocMode?: number;
  /** 五元组日志是否上报源端口，0：不上报，1：上报 */
  ReportSourcePort?: number;
  /** 业务优先配置 */
  BasicPolicy?: CustomAgentRunModePolicy;
  /** 安全优先配置 */
  AdvancePolicy?: CustomAgentRunModePolicy;
  /** 日志采集设置，采集TCP源端口tcp_src_port，TCP入向日志tcp_ingress，HTTP出向连接日志http_egress，HTTP入向连接日志http_ingress，应用访问日志app_access */
  LogCollectSettings?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentRunPolicyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAgentRunPolicyResponse {
  /** 基础运行策略 */
  BasicPolicy?: AgentRunModePolicy;
  /** 高级运行策略 */
  AdvancePolicy?: AgentRunModePolicy;
  /** 自定义运行策略 */
  CustomPolicy?: AgentRunModePolicy;
  /** 自定义模式关联的机器instance_id列表 */
  CustomModeInstanceIDs?: string[];
  /** 高级模式关联的机器instance_id列表 */
  AdvanceModeInstanceIDs?: string[];
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

declare interface DescribeAssetDetailRequest {
  /** 资产ID */
  AssetID: string;
  /** 云厂商 */
  Provider?: string;
  /** 资产类型 */
  AssetType?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetDetailResponse {
  /** 动态tab配置 */
  DynamicTabs?: DynamicTab[];
  /** 基础tab项 */
  DetailTabs?: string[];
  /** 资产详情信息 */
  AssetDetail?: AssetDetailItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetFilterViewsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetFilterViewsResponse {
  /** 资产搜索视图 */
  FilterViews?: AssetViewFilter[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetInfoRequest {
  /** 资产ID */
  AssetID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 云厂商 */
  Provider?: string;
  /** 资产类型 */
  AssetType?: string;
}

declare interface DescribeAssetInfoResponse {
  /** 基本信息 */
  Basic?: FieldConfig[];
  /** 网络信息 */
  Network?: FieldConfig[];
  /** 防护信息 */
  Protection?: FieldConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetLastSyncTimeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetLastSyncTimeResponse {
  /** 资产最近同步时间 */
  LastSyncTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetOverviewRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetOverviewResponse {
  /** 资产概览统计 */
  AssetOverview?: AssetStatisticsInfo;
  /** 云厂商资产数量 */
  AssetProviderDistribute?: AssetProviderDistributeInfo;
  /** 资产类型以及存在风险的资产类型数量 */
  AssetTypeOverview?: AssetTypeStatisticsInfo;
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

declare interface DescribeAssetRiskDetailRequest {
  /** 资产唯一标识 */
  AssetRIDs: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetRiskDetailResponse {
  /** 资产风险详情 */
  AssetRisks?: AssetRiskContent[];
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

declare interface DescribeAssetSyncTaskStatusRequest {
  /** ["csip-xsjdjss"] */
  TaskIDs: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetSyncTaskStatusResponse {
  /** 资产同步任务状态 */
  TaskStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetTagAttributesRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetTagAttributesResponse {
  /** 过滤条件 */
  FilterConditions?: FilterDataObject[];
  /** 打标策略通用属性 */
  TaggingAttributes?: FilterDataObject[];
  /** 已有标签键列表 */
  TagKeyList?: FilterDataObject[];
  /** 可选颜色列表 */
  ColorOptions?: FilterDataObject[];
  /** 资产类型列表 */
  AssetTypeList?: FilterDataObject[];
  /** 标签树 */
  TagTree?: AssetTagTreeNode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetTagTreeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetTagTreeResponse {
  /** 总数 */
  TotalCount?: number;
  /** 资产标签树结构数据 */
  TreeData?: AssetTagTreeNode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetTagsRequest {
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

declare interface DescribeAssetTagsResponse {
  /** 资产数量 */
  TotalCount?: number;
  /** 资产集合 */
  AssetTags?: AssetTagItem[];
  /** 自动打标策略是否开启集合 */
  AutoTaggingEnabledList?: AttributeOptionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetTreeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeAssetTreeResponse {
  /** 资产树 */
  AssetTree?: ProviderNode[];
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

declare interface DescribeBanModeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBanModeResponse {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode?: string;
  /** 标准阻断模式的配置 */
  StandardModeConfig?: StandardModeConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBanStatusRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBanStatusResponse {
  /** (已废弃) 阻断开关状态: 0 -- 关闭 1 -- 高级阻断 2 -- 基础阻断(只阻断情报库黑ip) */
  Status?: number;
  /** 是否弹窗提示信息 false: 关闭，true: 开启 */
  ShowTips?: boolean;
  /** 是否开启智能过白模式 */
  OpenSmartMode?: boolean;
  /** 是否开启情报IP阻断 */
  BanBlackIp?: boolean;
  /** 是否开启漏洞IP阻断 */
  BanVulIp?: boolean;
  /** 是否开启规则阻断 */
  BanByRule?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineAggregatedItemListRequest {
  /** 基线策略 ID 列表（可同时传多条做联合统计）。 */
  PolicyID: number[];
  /** 基线系统父分类 ID。 */
  ParentCategoryID: number;
  /** 检测资产大类，区分主机基线与容器集群基线。取值：HOST：主机CLUSTER：容器集群 */
  CheckAssetType?: string;
  /** 基线子分类 ID。 */
  CategoryID?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件。支持的 Name：ResultStatus（结果状态 PASS/NOT_PASS/CHECKING/CHECK_FAILED/NOT_INVOLVED）、Name（检测项名称，模糊搜索）、RiskLevel（风险等级 CRITICAL/HIGH/MEDIUM/LOW）、PolicyName（所属基线/策略名称，模糊搜索）。 */
  Filters?: Filters[];
  /** 分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。 */
  Limit?: number;
  /** 分页查询起始偏移量，从 0 开始。 */
  Offset?: number;
  /** 排序方向，取值 asc（升序）或 desc（降序），默认 desc。 */
  Order?: string;
  /** 排序字段名，由具体接口定义可选字段。 */
  By?: string;
}

declare interface DescribeBaselineAggregatedItemListResponse {
  /** 检测项聚合结果列表。 */
  List?: BaselineAggregatedItem[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 当前查询条件下涉及到的检测对象列表。 */
  CheckObjectEnum?: KeyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineAggregatedPolicyListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBaselineAggregatedPolicyListResponse {
  /** 策略维度聚合结果列表。 */
  List?: BaselineAggregatedPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineCalculatingStatisticsPolicyIDListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBaselineCalculatingStatisticsPolicyIDListResponse {
  /** 当前统计计算中的系统父分类 ID 列表。 */
  SystemCategoryIDList?: number[];
  /** 当前统计计算中的自定义策略 ID 列表。 */
  SelfDefinedPolicyIDList?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineCategoryItemListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 基线父分类 ID，用于筛选指定父分类下的检测项。 */
  ParentCategoryID?: number;
  /** 分页查询每页返回条数，默认值 10，最大值 100。 */
  Limit?: number;
  /** 分页查询偏移量，默认值 0。 */
  Offset?: number;
  /** 通用过滤条件列表。支持的过滤字段：CategoryID：子分类 ID，精确匹配Name：检测项名称，模糊匹配RiskLevel：风险等级，精确匹配。取值：LOW、MEDIUM、HIGH、CRITICALSupportCustomValue：是否支持编辑，精确匹配。取值：true、false */
  Filters?: Filters[];
}

declare interface DescribeBaselineCategoryItemListResponse {
  /** 基线检测项列表。 */
  ItemList?: BaselineItem[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineFixRecordListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件。支持字段：ItemName（检测项名称，模糊）、PolicyName（所属基线名称，模糊）、InstanceName（主机名称，模糊）、InstanceID（实例ID，精准）、IP（IP 地址，模糊）。不同 Name 之间为且关系，同一 Name 下多个 Values 为或关系。 */
  Filters?: Filters[];
  /** 分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。 */
  Limit?: number;
  /** 分页查询起始偏移量，从 0 开始。 */
  Offset?: number;
  /** 排序方向，取值 asc（升序）或 desc（降序），默认 desc。 */
  Order?: string;
  /** 排序字段名。取值：FixTime（修复时间）、ID（记录 ID）。默认按 ID 倒序。 */
  By?: string;
}

declare interface DescribeBaselineFixRecordListResponse {
  /** 基线风险修复记录列表。 */
  List?: BaselineFixRecord[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineItemRiskListRequest {
  /** 基线策略 ID 列表。 */
  PolicyID: number[];
  /** 基线系统父分类 ID。 */
  ParentCategoryID: number;
  /** 基线检测项 ID。 */
  ItemID: number;
  /** 检测资产类型列表，元素取值为 HOST 或 CLUSTER。 */
  CheckAssetType?: string[];
  /** 基线子分类 ID。 */
  CategoryID?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件。支持的 Name：ResultStatus（通过状态，Values: PASS/NOT_PASS）、AssetName（资产名称/ID，模糊搜索）、IP（IP地址，模糊搜索）、Tag（资产标签，模糊搜索）。 */
  Filters?: Filters[];
  /** 分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。 */
  Limit?: number;
  /** 分页查询起始偏移量，从 0 开始。 */
  Offset?: number;
  /** 排序方向，取值 asc（升序）或 desc（降序），默认 desc。 */
  Order?: string;
  /** 排序字段名，由具体接口定义可选字段。 */
  By?: string;
}

declare interface DescribeBaselineItemRiskListResponse {
  /** 检测项风险记录列表。 */
  List?: BaselineItemRiskRecord[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineMainTaskItemListRequest {
  /** 基线扫描主任务 ID。 */
  MainTaskID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 分页查询每页返回条数，默认值 10，最大值 100。 */
  Limit?: number;
  /** 分页查询偏移量，默认值 0。 */
  Offset?: number;
}

declare interface DescribeBaselineMainTaskItemListResponse {
  /** 基线检测项列表。 */
  ItemList?: BaselineItem[];
  /** 符合条件的检测项总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineMainTaskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件。支持的 Name：JobID（任务ID精确搜索）、TaskStatus（任务状态 INIT/SCANNING/SUCCESS/FAILED）、TaskType（任务类型 PERIODIC/MANUAL）。 */
  Filters?: Filters[];
  /** 分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。 */
  Limit?: number;
  /** 分页查询起始偏移量，从 0 开始。 */
  Offset?: number;
  /** 排序方向，取值 asc（升序）或 desc（降序），默认 desc。 */
  Order?: string;
  /** 排序字段名，由具体接口定义可选字段。 */
  By?: string;
}

declare interface DescribeBaselineMainTaskListResponse {
  /** 扫描主任务列表。 */
  List?: BaselineMainTask[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineOverviewRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBaselineOverviewResponse {
  /** 基线概览统计数据（主机/集群未通过项数、近一年修复数）。 */
  Statistics?: BaselineOverviewStatistic;
  /** 最近一次基线扫描完成时间。 */
  LatestScanTime?: string;
  /** 当前是否已启用任意周期性扫描。true 启用，false 未启用。 */
  EnableCycleScan?: boolean;
  /** 当前进行中的扫描主任务数量。 */
  ScanningTaskCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselinePolicyCategoryListRequest {
  /** 基线策略ID */
  PolicyID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBaselinePolicyCategoryListResponse {
  /** 系统父分类列表，含每个父分类下的子分类与检测项 ID 列表。 */
  SystemCategoryList?: BaselineSystemCategory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselinePolicyItemListRequest {
  /** 基线策略ID */
  PolicyID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 基线父分类 ID，用于筛选指定父分类下的检测项。 */
  ParentCategoryID?: number;
  /** 分页查询每页返回条数，默认值 10，最大值 100。 */
  Limit?: number;
  /** 分页查询偏移量，默认值 0。 */
  Offset?: number;
  /** 通用过滤条件列表。支持的过滤字段：CategoryID：子分类 ID，精确匹配Name：检测项名称，模糊匹配RiskLevel：风险等级，精确匹配。取值：LOW、MEDIUM、HIGH、CRITICALSupportCustomValue：是否支持编辑，精确匹配。取值：true、false */
  Filters?: Filters[];
}

declare interface DescribeBaselinePolicyItemListResponse {
  /** 基线检测项列表。 */
  ItemList?: BaselineItem[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselinePolicyListRequest {
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  PolicyType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件，支持的过滤字段如下：Name - 策略名称（模糊匹配）Enable - 是否开启CycleScanEnable - 周期扫描是否开启 */
  Filters?: Filters[];
  /** 分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。 */
  Limit?: number;
  /** 分页查询起始偏移量，从 0 开始。 */
  Offset?: number;
}

declare interface DescribeBaselinePolicyListResponse {
  /** 基线策略列表。 */
  List?: BaselinePolicy[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselinePolicyNameExistAppidListRequest {
  /** 策略名称 */
  PolicyName: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBaselinePolicyNameExistAppidListResponse {
  /** AppID 列表 */
  AppidList?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineSubTaskListRequest {
  /** 基线主任务 ID。 */
  TaskID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件，支持的字段包括：TaskID（主任务 ID，精确）、Status（子任务状态）、CheckAssetType、InstanceID/ClusterID 等。 */
  Filters?: Filters[];
  /** 分页查询每页数量，最大值 100；超过时服务端将自动回退为默认值 10。 */
  Limit?: number;
  /** 分页查询起始偏移量，从 0 开始。 */
  Offset?: number;
  /** 排序方向，取值 asc（升序）或 desc（降序），默认 desc。 */
  Order?: string;
  /** 排序字段名，由具体接口定义可选字段。 */
  By?: string;
}

declare interface DescribeBaselineSubTaskListResponse {
  /** 子任务列表。 */
  List?: BaselineSubTask[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineSyncConfRequest {
  /** 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。 */
  MemberId?: string[];
}

declare interface DescribeBaselineSyncConfResponse {
  /** 当前账号的基线同步配置。 */
  SyncConf?: BaselineSyncConf;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineSystemCategoryListRequest {
}

declare interface DescribeBaselineSystemCategoryListResponse {
  /** 系统父分类列表，含每个父分类下的子分类与检测项 ID 列表。 */
  SystemCategoryList?: BaselineSystemCategory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineUserOtherConfRequest {
  /** 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。 */
  MemberId?: string[];
}

declare interface DescribeBaselineUserOtherConfResponse {
  /** 当前账号的用户级基线配置。 */
  UserConf?: BaselineUserOtherConf;
  /** 是否来自同步 */
  IsSync?: boolean;
  /** 同步的账号信息 */
  AdminInfo?: AccountBriefInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineUserWeakPasswordConfRequest {
  /** 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。 */
  MemberId?: string[];
}

declare interface DescribeBaselineUserWeakPasswordConfResponse {
  /** 当前账号配置的弱口令字典明文。 */
  UserConf?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBruteAttackRulesRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeBruteAttackRulesResponse {
  /** 爆破阻断规则列表 */
  Rules?: BruteAttackRuleList[];
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

declare interface DescribeCFGRiskReportStatisticsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 规范ID */
  StandardIDs?: number[];
}

declare interface DescribeCFGRiskReportStatisticsResponse {
  /** 规则数量 */
  TotalRuleCount?: number;
  /** 资产数量 */
  TotalAssetCount?: number;
  /** 风险数量 */
  TotalRiskCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCFGRiskStatisticsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeCFGRiskStatisticsResponse {
  /** 云资源配置风险结果统计 */
  CFGRiskStatistics?: CFGRiskStatisticsItem;
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

declare interface DescribeCSIPLicenseBindScheduleRequest {
  /** ModifyCSIPLicenseBinds返回的任务ID */
  TaskId: number;
  /** 分页大小，默认10 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 过滤条件，支持按 Status 过滤（0-初始化 1-成功 2-失败 3-跳过） */
  Filters?: LicenseBindFilter[];
}

declare interface DescribeCSIPLicenseBindScheduleResponse {
  /** 任务ID */
  TaskId?: number;
  /** 任务状态：INIT-初始化 / RUNNING-进行中 / DONE-已完成 / FAILED-已失败 */
  Status?: string;
  /** 进度百分比 0-100 */
  Schedule?: number;
  /** 全部机器数（不受过滤影响） */
  Total?: number;
  /** 成功数 */
  SuccessNum?: number;
  /** 失败数 */
  FailedNum?: number;
  /** 失败明细（全量，含机器额外信息） */
  FailedList?: LicenseBindFailedItem[];
  /** 逐机器明细（受 Filters + 分页影响） */
  List?: LicenseBindScheduleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCSIPMalwareScanTaskDetailRequest {
  /** 任务ID */
  TaskId: number;
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
  /** 可选排序列，暂不支持排序，默认按照id降序排列 */
  By?: string;
}

declare interface DescribeCSIPMalwareScanTaskDetailResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: CSIPMalwareScanUuidDetailItem[];
  /** 扫描开始时间，格式 2006-01-02 15:04:05 */
  ScanBeginTime?: string;
  /** 扫描结束时间，格式 2006-01-02 15:04:05，扫描未完成时为空字符串 */
  ScanEndTime?: string;
  /** 扫描机器总数 */
  ScanMachineCount?: number;
  /** 影响机器数（有风险的机器数） */
  RiskMachineCount?: number;
  /** 扫描内容，0-全盘扫描 1-快速扫描 */
  ScanContent?: string[];
  /** 任务类型，0-一键扫描 1-定时扫描 2-重新扫描 */
  Type?: number;
  /** 预估剩余扫描时间（分钟），扫描完成时为0 */
  ScanLeftTime?: number;
  /** 是否所有机器正在停止中，true表示停止中 */
  StoppingAll?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCSIPMalwareScanTaskProgressRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 任务ID */
  TaskId?: number;
}

declare interface DescribeCSIPMalwareScanTaskProgressResponse {
  /** 任务ID */
  TaskId?: number;
  /** 任务整体状态枚举值：0： NeverScanned1： Scanning2： Finished3： Stopping4： Stopped */
  Status?: number;
  /** 进度百分比 0~100（公式：20 + 80 × finished/total，含运行中机器时强制 ≤ 99；Status=Stopped 时强制 100） */
  Schedule?: number;
  /** 子表机器总数 */
  TotalCount?: number;
  /** 进入终态的机器数（含 Terminating(6) / Terminated(7)） */
  FinishedCount?: number;
  /** 累计风险告警数（来自主表 total_risk_count） */
  RiskCount?: number;
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

declare interface DescribeCWPExposePathRequest {
  /** 主机资产ID */
  AssetID: string;
  /** 资产归属用户AppID */
  AssetAppID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产IP */
  Ip?: string;
  /** 资产域名 */
  Domain?: string;
  /** 端口或端口范围 */
  Port?: string;
}

declare interface DescribeCWPExposePathResponse {
  /** 云边界分析路径节点内容 */
  Content?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCWPExposuresRequest {
  /** 资产ID */
  AssetID: string;
  /** 资产归属用户AppiD */
  AssetAppID: number;
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

declare interface DescribeCWPExposuresResponse {
  /** 云边界分析资产数量 */
  TotalCount?: number;
  /** 云边界分析资产列表 */
  ExposeList?: ExposesItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCWPLicenseBindScheduleRequest {
  /** 任务ID */
  TaskId: number;
  /** 限制条数,默认10. */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 过滤参数Status 绑定进度状态 0 进行中 1 已完成 2 失败 */
  Filters?: Filters[];
}

declare interface DescribeCWPLicenseBindScheduleResponse {
  /** 进度 */
  Schedule?: number;
  /** 绑定任务详情 */
  List?: LicenseBindTaskDetail[];
  /** 总条数 */
  TotalCount?: number;
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

declare interface DescribeCWPMachineOsListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeCWPMachineOsListResponse {
  /** 操作系统列表 */
  List?: OsName[];
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

declare interface DescribeCWPOrderListRequest {
  /** 多个条件筛选时取交集ProductCode 产品编码,p_开头SubProductCode 子产品编码,sp_开头InquireKey 计费项,sv_开头Status 资源状态 1正常 2隔离 3销毁PayMode 付费模式 0 按量计费 , 1 包年包月ResourceId 资源IDRenewFlag 自动续费标签 0 默认不需要(大客户存在自动续费的能力) 1 自动续费 2 手动设置不自动续费DealNames 子订单号 */
  Filters?: Filters[];
  /** 偏移量,默认0 */
  Offset?: number;
  /** 限制条数,默认10 ,最大100 */
  Limit?: number;
}

declare interface DescribeCWPOrderListResponse {
  /** 订单资源对象列表 */
  List?: CWPOrderList[] | null;
  /** 订单总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCWPScanIpInfoRequest {
  /** IP地址 */
  IP: string;
}

declare interface DescribeCWPScanIpInfoResponse {
  /** 所属业务 */
  Bussiness?: string;
  /** 业务特征 */
  Characteristic?: string;
  /** 描述 */
  Describe?: string;
  /** 官方公告 */
  Referer?: string;
  /** 扫描示例 */
  Demo?: string;
  /** 扫描对象 */
  Target?: string;
  /** 扫描目的 */
  Purpose?: string;
  /** 产品文案 */
  Announcement?: string;
  /** 地理位置 */
  Location?: string;
  /** 所属运营商 */
  ISP?: string;
  /** 是否归属于腾讯 */
  IsBelongTencent?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCWPTaskDurationRequest {
  /** 需要执行任务的主机数 */
  UuidCnt: number;
  /** 是否定时扫描 */
  TimingScan?: boolean;
}

declare interface DescribeCWPTaskDurationResponse {
  /** 任务下发需要的时长，单位为分钟 */
  Duration?: number;
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

declare interface DescribeClbListenerListRequest {
  /** 资产ID */
  AssetID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filters?: Filters[];
  /** 每页条数 */
  Limit?: number;
  /** 偏移 */
  Offset?: number;
  /** 排序方向 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeClbListenerListResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 监听器列表 */
  Listeners?: ClbListenerItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClbListenerRulesRequest {
  /** 资产ID */
  AssetID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filters?: Filters[];
  /** 每页条数 */
  Limit?: number;
  /** 偏移 */
  Offset?: number;
  /** 排序方向 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeClbListenerRulesResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 七层规则列表 */
  Rules?: ClbListenerRuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClbTargetsRequest {
  /** 资产ID */
  AssetID: string;
  /** 目标类型枚举值：listener： 监听器rule： 七层规则 */
  TargetType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClbTargetsResponse {
  /** 后端服务列表 */
  Targets?: ClbTargetItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudAssetsRequest {
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
  /** 是否查询主机资产 */
  IsCloudHost?: boolean;
}

declare interface DescribeCloudAssetsResponse {
  /** 资产数量 */
  TotalCount?: number;
  /** 资产集合 */
  Assets?: AssetItem[];
  /** 资产类型集合 */
  AssetTypeList?: AttributeOptionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudFunctionListRequest {
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

declare interface DescribeCloudFunctionListResponse {
  /** 云函数数量 */
  TotalCount?: number;
  /** 云函数列表 */
  FunctionList?: CloudFunctionItem[];
  /** 地域列表选项 */
  RegionList?: AttributeOptionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterAssetListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：ClusterId：集群ID，精确匹配。ClusterName：集群名称，模糊匹配。ClusterType：集群类型，精确匹配。取值：TKE_MANAGED_CLUSTER（腾讯云标准集群）、TKE_INDEPENDENT_CLUSTER（标准集群Master自维护）、TKE_SERVERLESS_CLUSTER（Serverless集群）、TKE_EDGE_CLUSTER（边缘集群）、SELF_BUILT（腾讯云内自建）、SELF_BUILT_OTHER（非腾讯云自建/混合云）。RunStatus：集群运行状态，精确匹配。取值：Running（运行中）、Exception（异常）、Unknown（未知）。AccessedStatus：接入状态，精确匹配。取值：AccessedNone（未接入）、AccessedInstalling（接入中）、AccessedException（接入异常）、AccessedInstalled（已接入）。DefendStatus：防护状态，精确匹配。取值：Enabled（已防护）、Partial（部分防护）、Disabled（未防护）。RiskStatus：风险检查状态，精确匹配。RiskLevel：风险等级，精确匹配。取值：CRITICAL、HIGH、MEDIUM、LOW、NONE（无风险）。HasHighRisk：仅筛选含高危及以上风险的集群，无需填入 value，传入 HasHighRisk 即生效。Region：地域，精确匹配。OwnerName：负责人，模糊匹配。ClusterAssetIds：集群资产ID，精确匹配。ExcludeClusterAssetIds：排除的集群资产ID，精确排除。 */
  Filter?: Filter;
}

declare interface DescribeClusterAssetListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: ClusterListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterAssetSyncTaskStatusRequest {
  /** 任务id */
  TaskId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterAssetSyncTaskStatusResponse {
  /** 任务状态 */
  Status?: string;
  /** 任务进度(%) */
  Progress?: number;
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

declare interface DescribeClusterContainerAppListRequest {
  /** 容器ID */
  ContainerId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterContainerAppListResponse {
  /** 匹配总数 */
  TotalCount?: number;
  /** 应用列表 */
  List?: ContainerAppItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterContainerComponentListRequest {
  /** 容器ID */
  ContainerId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterContainerComponentListResponse {
  /** 匹配总数 */
  TotalCount?: number;
  /** 组件列表 */
  List?: ContainerComponentItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterContainerDetailRequest {
  /** 容器ID */
  ContainerId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterContainerDetailResponse {
  /** 主账号AppID */
  AppID?: number;
  /** 容器ID */
  ContainerId?: string;
  /** 容器启动CMD */
  Cmd?: string;
  /** 容器创建时间 */
  CreateTime?: string;
  /** 运行状态 */
  RunStatus?: string;
  /** 隔离状态 */
  IsolateStatus?: string;
  /** 严重风险事件数 */
  RiskEventCriticalCount?: number;
  /** 高风险事件数 */
  RiskEventHighCount?: number;
  /** 中风险事件数 */
  RiskEventMiddleCount?: number;
  /** 低风险事件数 */
  RiskEventLowCount?: number;
  /** 镜像名称 */
  ImageName?: string;
  /** 镜像ID */
  ImageId?: string;
  /** 镜像大小 */
  ImageSize?: string;
  /** 镜像创建时间 */
  ImageCreateTime?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 节点内网IP */
  NodeInternalIP?: string;
  /** 节点运行状态 */
  NodeRunStatus?: string;
  /** 挂载信息列表 */
  Mounts?: ContainerMountItem[];
  /** 网络名称 */
  NetworkName?: string;
  /** 网络模式 */
  NetworkMode?: string;
  /** 网络ID */
  NetworkId?: string;
  /** 端点ID */
  EndpointId?: string;
  /** 网关地址 */
  Gateway?: string;
  /** IPv4地址 */
  IPv4?: string;
  /** IPv6地址 */
  IPv6?: string;
  /** MAC地址 */
  MAC?: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 节点实例ID */
  NodeInstanceId?: string;
  /** 容器关联节点的节点类型 */
  NodeType?: string;
  /** 容器关联节点的节点唯一ID */
  NodeUniqueID?: string;
  /** 容器关联集群的集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
  /** 容器镜像能否关联到镜像仓库中的记录 */
  EnableLinkImage?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterContainerListRequest {
  /** 集群资产 id */
  ClusterAssetId?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：ContainerId：容器ID，精确匹配。ContainerName：容器名称，模糊匹配。RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。ImageId：镜像ID，精确匹配。ImageName：镜像名称，模糊匹配。IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。UUID：主机UUID，精确匹配。 */
  Filter?: Filter;
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
}

declare interface DescribeClusterContainerListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: ClusterContainerListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterContainerPortListRequest {
  /** 容器ID */
  ContainerId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterContainerPortListResponse {
  /** 匹配总数 */
  TotalCount?: number;
  /** 端口列表 */
  List?: ContainerPortItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterContainerProcessListRequest {
  /** 容器ID */
  ContainerId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterContainerProcessListResponse {
  /** 匹配总数 */
  TotalCount?: number;
  /** 进程列表 */
  List?: ContainerProcessItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterContainerWebServiceListRequest {
  /** 容器ID */
  ContainerId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterContainerWebServiceListResponse {
  /** 匹配总数 */
  TotalCount?: number;
  /** Web服务列表 */
  List?: ContainerWebServiceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailRequest {
  /** 集群资产id */
  ClusterAssetId?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
}

declare interface DescribeClusterDetailResponse {
  /** 集群基础信息 */
  ClusterBaseInfo?: ClusterListItem;
  /** 运行时组件 */
  RuntimeComponent?: string;
  /** master ip */
  MasterIP?: string;
  /** 节点数 */
  NodeCount?: number;
  /** 命名空间数 */
  NamespaceCount?: number;
  /** pod数 */
  PodCount?: number;
  /** 容器数 */
  ContainerCount?: number;
  /** service数 */
  ServiceCount?: number;
  /** ingress数 */
  IngressCount?: number;
  /** 镜像数 */
  ImageCount?: number;
  /** 系统组件数量 */
  SystemComponentCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterInstallCommandRequest {
  /** 是否腾讯云。true：走平行容器 daemonset yaml 安装分支；false：走主机 agent 安装命令分支 */
  IsCloud: boolean;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 网络类型枚举值：basic：基础网络private：VPCpublic：公网direct：专线 */
  NetType?: string;
  /** 地域编码（NetType=direct 时必填；腾讯云分支用于特殊地域镜像仓库替换） */
  RegionCode?: string;
  /** VPC ID（NetType=direct 时必填）参数格式：形如 vpc-xxxxxxxx */
  VpcId?: string;
  /** 过期时间参数格式：yyyy-MM-dd（如 2026-12-31）用途：腾讯云分支用于 daemonset yaml 的 cos 下载链接过期时间；非腾讯云分支用于 agent 安装 token 过期时间 */
  ExpireDate?: string;
  /** csip 标签 ID 列表（非腾讯云分支用，关联安装标签） */
  TagIds?: number[];
  /** 集群自定义参数（腾讯云分支用于替换 daemonset 模板占位符） */
  ClusterCustomParameters?: ClusterCustomParameters[];
  /** 接入 VIP（非腾讯云分支用；NetType=direct 且未传 Vip 时由专线服务自动申请） */
  Vip?: string;
}

declare interface DescribeClusterInstallCommandResponse {
  /** 接入命令 */
  Command?: string;
  /** 接入文件下载地址 */
  URL?: string;
  /** 接入文件内容 */
  FileContent?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterListV2Request {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：ClusterId：集群ID，精确匹配。ClusterName：集群名称，模糊匹配。ClusterType：集群类型，精确匹配。取值：TKE_MANAGED_CLUSTER（腾讯云标准集群）、TKE_INDEPENDENT_CLUSTER（标准集群Master自维护）、TKE_SERVERLESS_CLUSTER（Serverless集群）、TKE_EDGE_CLUSTER（边缘集群）、SELF_BUILT（腾讯云内自建）、SELF_BUILT_OTHER（非腾讯云自建/混合云）。RunStatus：集群运行状态，精确匹配。取值：Running（运行中）、Exception（异常）、Unknown（未知）。AccessedStatus：接入状态，精确匹配。取值：AccessedNone（未接入）、AccessedInstalling（接入中）、AccessedException（接入异常）、AccessedInstalled（已接入）。DefendStatus：防护状态，精确匹配。取值：Enabled（已防护）、Partial（部分防护）、Disabled（未防护）。RiskStatus：风险检查状态，精确匹配。RiskLevel：风险等级，精确匹配。取值：CRITICAL、HIGH、MEDIUM、LOW、NONE（无风险）。HasHighRisk：仅筛选含高危及以上风险的集群，无需填入 value，传入 HasHighRisk 即生效。Region：地域，精确匹配。OwnerName：负责人，模糊匹配。ClusterAssetIds：集群资产ID，精确匹配。ExcludeClusterAssetIds：排除的集群资产ID，精确排除。 */
  Filter?: Filter;
}

declare interface DescribeClusterListV2Response {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: ClusterListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterNamespaceListRequest {
  /** 集群资产 id */
  ClusterAssetId?: string;
  /** 通用过滤条件列表。支持的过滤字段：Name：命名空间名称，模糊匹配。Label：标签，模糊匹配（对标签的 key 或 value 做匹配，任一命中即匹配）。 */
  Filter?: Filter;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
}

declare interface DescribeClusterNamespaceListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: ClusterNamespaceListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterNodeListRequest {
  /** 集群资产 id */
  ClusterAssetId?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：NodeName：节点名称，模糊匹配。NodeId：节点ID，精确匹配。NodeUniqueID：节点唯一ID，精确匹配（NodeAssetID 为等价别名）。NodeType：节点类型，精确匹配。取值：SUPER（超级节点）、MASTER（主节点）、WORKER（工作节点）。RunStatus：节点运行状态，精确匹配。InternalIP：内网IP，精确匹配。ClientStatus：客户端状态，精确匹配。取值：ONLINE（在线）、OFFLINE（离线）、UNINSTALL（未安装）。 */
  Filter?: Filter;
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
}

declare interface DescribeClusterNodeListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: ClusterNodeListItem[];
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

declare interface DescribeClusterPodDetailRequest {
  /** Pod 唯一 ID */
  UniqueID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterPodDetailResponse {
  /** Pod 唯一 ID */
  UniqueID?: string;
  /** 主账号 AppID */
  AppID?: number;
  /** Pod 名称 */
  PodName?: string;
  /** Pod IP 地址 */
  PodIP?: string;
  /** Pod 运行状态 */
  RunStatus?: string;
  /** Pod Labels 列表 */
  Labels?: AssetTag[] | null;
  /** Pod 启动时间 */
  StartTime?: string;
  /** 启动时间（秒） */
  StartupTime?: number;
  /** Pod 重启次数 */
  RestartCount?: number;
  /** 所属集群名称 */
  ClusterName?: string;
  /** 所属集群 ID */
  ClusterID?: string;
  /** 所属集群类型 */
  ClusterType?: string;
  /** 所属集群运行状态 */
  ClusterRunStatus?: string;
  /** 所属命名空间 */
  Namespace?: string;
  /** 所在节点名称 */
  NodeName?: string;
  /** 所在节点 ID */
  NodeId?: string;
  /** 所属 Workload 名称 */
  WorkloadName?: string;
  /** 所属 Workload 类型 */
  WorkloadType?: string;
  /** 严重风险事件数 */
  RiskEventCriticalCount?: number;
  /** 高危风险事件数 */
  RiskEventHighCount?: number;
  /** 中危风险事件数 */
  RiskEventMiddleCount?: number;
  /** 低危风险事件数 */
  RiskEventLowCount?: number;
  /** 严重告警事件数 */
  AlarmEventCriticalCount?: number;
  /** 高危告警事件数 */
  AlarmEventHighCount?: number;
  /** 中危告警事件数 */
  AlarmEventMiddleCount?: number;
  /** 低危告警事件数 */
  AlarmEventLowCount?: number;
  /** 所属地域 */
  Region?: string;
  /** 节点内网 IP */
  NodeInternalIP?: string;
  /** 节点外网 IP */
  NodeExternalIP?: string;
  /** 关联容器数量 */
  ContainerCount?: number;
  /** 关联服务数量 */
  ServiceCount?: number;
  /** 地域中文名 */
  RegionName?: string;
  /** 地域英文名 */
  RegionNameEn?: string;
  /** 告警数量 */
  AlarmCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterPodListRequest {
  /** 集群资产 id */
  ClusterAssetId?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：PodName：Pod名称，模糊匹配。PodIPs：Pod IP，模糊匹配。RunStatus：Pod运行状态，精确匹配。取值：Pending、Running、Succeeded、Failed、Unknown。NodeUniqueID：所属节点唯一ID，精确匹配。InstanceId：所属节点实例ID，精确匹配。WorkloadName：负载名称，模糊匹配。WorkloadType：负载类型，精确匹配（如 DaemonSet/Deployment/StatefulSet/Job/CronJob/ReplicaSet 等）。Namespace：命名空间，精确匹配。 */
  Filter?: Filter;
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
}

declare interface DescribeClusterPodListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: ClusterPodListItem[];
  /** 命名空间可选范围 */
  Namespaces?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterServiceListRequest {
  /** 集群资产 id */
  ClusterAssetId?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用过滤条件列表。支持的过滤字段：Name：服务名称，模糊匹配。ServiceType：服务类型，精确匹配。取值：ClusterIP、NodePort、LoadBalancer、ExternalName。Namespace：命名空间，精确匹配。SelectorLabel：Selector 标签，模糊匹配。 */
  Filter?: Filter;
  /** 集群ca证书md5值，集群的唯一标识 */
  ClusterCaMD5?: string;
  /** Pod唯一标识ID */
  PodUniqueID?: string;
}

declare interface DescribeClusterServiceListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 列表 */
  List?: ClusterServiceListItem[];
  /** 集群下所有 namespace 名称枚举（用于前端 filter 下拉） */
  Namespaces?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterSummaryRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterSummaryResponse {
  /** 集群总数 */
  TotalClusterCount?: number;
  /** 告警集群总数 */
  AlarmClusterCount?: number;
  /** 风险集群总数 */
  RiskClusterCount?: number;
  /** 节点总数 */
  TotalNodeCount?: number;
  /** 总核数 */
  TotalCoreCount?: number;
  /** 告警事件总数 */
  AlarmEventCount?: number;
  /** 严重告警事件数 */
  CriticalAlarmEventCount?: number;
  /** 高危告警事件数 */
  HighAlarmEventCount?: number;
  /** 中危告警事件数 */
  MiddleAlarmEventCount?: number;
  /** 低危告警事件数 */
  LowAlarmEventCount?: number;
  /** 风险事件总数 */
  RiskEventCount?: number;
  /** 严重风险事件数 */
  CriticalRiskEventCount?: number;
  /** 高危风险事件数 */
  HighRiskEventCount?: number;
  /** 中危风险事件个数 */
  MiddleRiskEventCount?: number;
  /** 低危风险事件个数 */
  LowRiskEventCount?: number;
  /** 已使用核数额度 */
  UsedCoreQuota?: number;
  /** 已购买核数额度 */
  PurchasedCoreQuota?: number;
  /** 弹性计费核数 */
  ElasticCoreQuota?: number;
  /** 集群未防护核数 */
  UnprotectedCoreCount?: number;
  /** 集群已防护核数 */
  ProtectedCoreCount?: number;
  /** 未防护集群数 */
  UnprotectedClusterCount?: number;
  /** 已防护集群数 */
  ProtectedClusterCount?: number;
  /** 腾讯云TKE集群数量 */
  TkeClusterCount?: number;
  /** 自建集群数量 */
  SelfBuiltClusterCount?: number;
  /** 严重告警集群数量 */
  CriticalAlarmClusterCount?: number;
  /** 高危告警集群数量 */
  HighAlarmClusterCount?: number;
  /** 严重风险集群数 */
  CriticalRiskClusterCount?: number;
  /** 高危风险集群数量 */
  HighRiskClusterCount?: number;
  /** 未绑定旗舰版节点数量 */
  UnboundUltimateNodeCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterSuperNodeInfoRequest {
  /** 超级节点唯一 ID（对应集群节点表 unique_id）。取值参考：通过 DescribeClusterNodeList 接口返回的 UniqueID 字段获取（节点类型为 SUPER 的节点） */
  NodeUniqueID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeClusterSuperNodeInfoResponse {
  /** 所属地域 code（原样，如 ap-chengdu）。 */
  Region?: string;
  /** 地域中文名（如 西南地区（成都）；由地域 code 经字典翻译得到）。 */
  RegionName?: string;
  /** 地域英文名（如 Southwest China (Chengdu)；由地域 code 经字典翻译得到）。 */
  RegionNameEn?: string;
  /** 可用区（中文名，由可用区 code 经字典翻译得到）。 */
  Zone?: string;
  /** 资产最后更新时间。参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式，UTC时区） */
  AssetSyncTime?: string;
  /** 节点来源（所属集群类型）。枚举值：TKE_MANAGED_CLUSTER：腾讯云标准集群TKE_INDEPENDENT_CLUSTER：腾讯云标准集群（Master自维护）TKE_SERVERLESS_CLUSTER：腾讯云Serverless集群TKE_EDGE_CLUSTER：腾讯云边缘集群SELF_BUILT：腾讯云内自建集群SELF_BUILT_OTHER：非腾讯云自建集群（混合云） */
  NodeSource?: string;
  /** 子网名称。 */
  SubNetName?: string;
  /** 子网 ID。 */
  SubNetId?: string;
  /** 子网网段（CIDR）。 */
  SubNetCIDR?: string;
  /** 核数（由 cpu_request 除以 1000 得到）。单位：核 */
  CoresCount?: number;
  /** 所属集群名称。 */
  ClusterName?: string;
  /** 所属集群 ID。 */
  ClusterId?: string;
  /** 所属集群运行状态。枚举值：Running：运行中Exception：异常Unknown：未知Creating：创建中Destroyed：已销毁 */
  Status?: string;
  /** Kubernetes 版本。 */
  ClusterVersion?: string;
  /** Kubelet 版本。 */
  KubeletVersion?: string;
  /** 超级节点所属账号APPID */
  AppID?: number;
  /** 超级节点实例ID */
  InstanceId?: string;
  /** 超级节点名称 */
  NodeName?: string;
  /** VPCID */
  VpcId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComplianceOverviewRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 内容筛选场景 */
  ContentFilter?: string;
}

declare interface DescribeComplianceOverviewResponse {
  /** 检查类型和检查项分布 */
  AllCheckItems?: ComplianceCheckItemsOverview;
  /** 规范和检查项分布 */
  Standards?: ComplianceStandardOverview[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComplianceRiskListRequest {
  /** 合规标准ID */
  StandardID: number;
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
  /** 条款ID */
  TermID?: number;
}

declare interface DescribeComplianceRiskListResponse {
  /** 检查视角下风险数量 */
  TotalCount?: number;
  /** 检查视角下风险列表 */
  CheckViewRiskList?: CheckViewRiskItem[];
  /** 资产类型集合 */
  AssetTypeList?: AttributeOptionSet[];
  /** 云厂商类型集合 */
  ProviderList?: AttributeOptionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComplianceStandardTermTreeRequest {
  /** 合规规范ID */
  StandardID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 内容筛选场景 */
  ContentFilter?: string;
}

declare interface DescribeComplianceStandardTermTreeResponse {
  /** 合规规范ID */
  StandardID?: number;
  /** 规范名称 */
  Name?: string;
  /** 条款章节 */
  Chapters?: ComplianceChapterItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComplianceStatisticsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeComplianceStatisticsResponse {
  /** 检查项数量 */
  TotalCount?: number;
  /** 合规标准和检查项分布 */
  Standards?: ComplianceStandardRuleCount[];
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

declare interface DescribeCspmShardConfigRequest {
}

declare interface DescribeCspmShardConfigResponse {
  /** 共享配额来源appid */
  ShardFromAppID?: number;
  /** 自动共享开关状态 */
  AutoShardStatus?: number;
  /** 已被共享配额的目标appid列表 */
  ShardAppIDs?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomAssetTagCountRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeCustomAssetTagCountResponse {
  /** 自定义标签数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomRiskRuleDetailRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 规则ID */
  RuleID?: string;
}

declare interface DescribeCustomRiskRuleDetailResponse {
  /** 指定规则账号开启详情 */
  CustomRiskRuleDetailList?: CustomRiskRuleDetailItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomRiskRulesRequest {
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

declare interface DescribeCustomRiskRulesResponse {
  /** 风险规则数量 */
  TotalCount?: number;
  /** 风险规则列表 */
  RiskRuleList?: CustomRiskRuleItem[];
  /** 云厂商选项 */
  ProviderList?: AttributeOptionSet[];
  /** 资产类型选项 */
  AssetTypeList?: AttributeOptionSet[];
  /** 安全条款规范 */
  StandardNameList?: StandardItem[];
  /** 风险等级 */
  RuleSeverityList?: RuleStatisticsItem[];
  /** 检查类型 */
  CheckTypeList?: RuleStatisticsItem[];
  /** 安全分类 */
  ClassifyList?: RuleStatisticsItem[];
  /** 安全规范 */
  StandardList?: RuleStatisticsItem[];
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

declare interface DescribeDefaultSecurityScoreRuleRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeDefaultSecurityScoreRuleResponse {
  /** 内置默认规则列表 */
  Rules?: ScoreRuleItem[];
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
  /** 数据库类型, 支持的值：cdb，mariadb */
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

declare interface DescribeDynamicAssetsRequest {
  /** 云厂商 */
  Provider: string;
  /** 资产类型 */
  AssetType: string;
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

declare interface DescribeDynamicAssetsResponse {
  /** 资产数量 */
  TotalCount?: number;
  /** 资产集合 */
  Assets?: string[];
  /** 表头 */
  Header?: AssetHeaderItem[];
  /** 地域集合 */
  RegionList?: AttributeOptionSet[];
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

declare interface DescribeEDRScanRecordListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用查询参数（含Filters/Limit/Offset/Order/By） */
  Filter?: Filter;
}

declare interface DescribeEDRScanRecordListResponse {
  /** 符合条件的总数 */
  TotalCount?: number;
  /** 扫描任务记录列表 */
  RecordList?: EDRScanRecordItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEDRScanTaskDetailRequest {
  /** 任务ID */
  TaskId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 通用查询参数（含Filters/Limit/Offset） */
  Filter?: Filter;
}

declare interface DescribeEDRScanTaskDetailResponse {
  /** 任务ID */
  TaskId?: number;
  /** 任务名称 */
  TaskName?: string;
  /** 整体状态：WAIT/SCANNING/FINISHED/FAILED/CANCELED/TERMINATED/TIMEOUT */
  Status?: string;
  /** 任务类型：HOST/CONTAINER */
  TaskType?: string;
  /** 触发方式：MANUAL/CYCLE */
  TriggerType?: string;
  /** 任务开始时间 */
  StartTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 检测模式：full/quick/include/exclude */
  ScanType?: string;
  /** 自选路径列表 */
  CustomPaths?: string[] | null;
  /** 超时时间（秒） */
  Timeout?: number;
  /** 是否开启深度检测：0-否/1-是 */
  EnableMemShellScan?: number;
  /** 创建者账号AppId */
  CreateAppID?: number;
  /** 任务创建者账号名称（后端富化） */
  AccountName?: string;
  /** 创建者云类型 */
  CloudType?: number;
  /** 任务总资产数 */
  TotalAssetCount?: number;
  /** 已完成资产数 */
  FinishedAssetCount?: number;
  /** 风险资产数 */
  RiskAssetCount?: number;
  /** 主机资产列表（TaskType=HOST时有值） */
  HostList?: EDRScanTaskHostItem[] | null;
  /** 容器资产列表（TaskType=CONTAINER时有值） */
  ContainerList?: EDRScanTaskContainerItem[] | null;
  /** 当前筛选条件下资产列表总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrAlertCountForAssetRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 主机instance_id列表，为空时返回MemberId对应appid范围内的汇总统计，非空时按每个instance_id粒度分别返回统计 */
  InstanceIds?: string[];
  /** 筛选条件列表，与DescribeEdrAlertList保持一致。支持的Name取值及对应Values枚举：Status - string - 是否必填：否 - 告警状态。Values取值：PENDING（待处理）、WHITELISTED（已加白）、PROCESSED（已处理）、IGNORED（已忽略）Level - string - 是否必填：否 - 告警等级。Values取值：CRITICAL（严重）、HIGH（高危）、MEDIUM（中危）、LOW（低危）、INFO（提示）DetectMode - string - 是否必填：否 - 检测模式。Values取值：PRECISE（精准）、BALANCED（均衡）、DEEP（深度）AlertCategory - string - 是否必填：否 - 告警大类。Values取值：VIRUS_TROJAN（病毒木马）、ABNORMAL_LOGIN（异常登录）、HOST_BEHAVIOR（主机行为）、NETWORK_BEHAVIOR（网络行为）、AI_LINK_ENGINE（AI关联引擎）AlertSubType - string - 是否必填：否 - 告警子类型。Values取值：MALWARE_FILE（恶意文件）、MALWARE_PROCESS（恶意进程）、RISK_LOGIN（异常登录）、BRUTE_FORCE（密码破解）、DNS（恶意请求）、BASH（高危命令）、PRIV_ESCALATION（本地提权）、REVERSE_SHELL（反弹Shell）、NET_ATTACK（网络攻击）、VUL_DEFENCE（漏洞防御）、MEMORY_SHELL_INJECT（内存马注入）、MEMORY_SHELL_SCAN（内存马扫描）、MULTI_BEHAVIOR_ATTACK（多行为攻击）AttackStage - string - 是否必填：否 - ATT&amp;CK攻击阶段。Values取值：TA0001~TA0011、TA0040、TA0042、TA0043，空字符串表示未分类AlertSource - string - 是否必填：否 - 告警来源。Values取值：HOST（主机）StartTime - string - 是否必填：否 - 起始时间，格式YYYY-MM-DD HH:MM:SS，不传默认近180天EndTime - string - 是否必填：否 - 结束时间，格式YYYY-MM-DD HH:MM:SS，不传默认当前时间 */
  Filters?: EDRFilters[];
}

declare interface DescribeEdrAlertCountForAssetResponse {
  /** 全局汇总统计（Quuids为空时返回） */
  GlobalCount?: EdrAlertCountItem | null;
  /** 按quuid粒度统计列表（Quuids非空时返回） */
  Items?: EdrAlertCountItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrAlertCountForContainerRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 集群 ID 列表（≤500）；非空且 ContainerIds 为空时按集群分组统计 */
  ClusterIds?: string[];
  /** 容器 ID 列表（≤500）；非空时按容器分组统计（优先级高于 ClusterIds） */
  ContainerIds?: string[];
  /** PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效ContainerId - string - 是否必填：否 - 容器ID（精确/IN，容器维度筛选）ClusterId - string - 是否必填：否 - 集群ID（精确/IN，容器维度筛选）ClusterName - string - 是否必填：否 - 集群名称（前缀模糊）ContainerName - string - 是否必填：否 - 容器名称（前缀模糊）AlertSource - string - 是否必填：否 - 告警来源：HOST-主机告警 / CONTAINER-容器告警，不传返回全部 */
  Filters?: EDRFilter[];
}

declare interface DescribeEdrAlertCountForContainerResponse {
  /** 全局模式返回（两个 ID 数组都为空时）；分组模式为 null */
  GlobalCount?: EdrContainerGlobalCount;
  /** 分组模式返回（ContainerIds 或 ClusterIds 非空时）；空返回 [] */
  Items?: EdrContainerAlertCountItem[];
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

declare interface DescribeEdrAlertMultiAttackStagesRequest {
  /** 目标告警信息 */
  Targets: EdrAlertTarget[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeEdrAlertMultiAttackStagesResponse {
  /** 多攻击阶段详情 */
  List?: MultiAttackStageItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrAlertSummaryRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeEdrAlertSummaryResponse {
  /** 严重+高危待处理数（Level IN CRITICAL,HIGH，DB 内部值 1,5） */
  CriticalPendingCount?: number;
  /** 全部待处理数 */
  TotalPendingCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrAlertThreatTagsRequest {
  /** 目标告警的信息 */
  Targets: EdrAlertTarget[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeEdrAlertThreatTagsResponse {
  /** 对应告警和标签信息 */
  List?: EdrAlertTagItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrExcludeNetworkSegmentsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeEdrExcludeNetworkSegmentsResponse {
  /** 例外网段列表，支持IP/IP段/CIDR格式 */
  NetworkSegments?: string[];
  /** 网段数量 */
  TotalCount?: number;
  /** 默认网段配置 */
  DefaultNetworkSegments?: NetworkSegment[];
  /** 是否修改过 */
  IsModified?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrExportJobDownloadURLRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 导出任务 ID */
  JobId?: string;
}

declare interface DescribeEdrExportJobDownloadURLResponse {
  /** COS 预签名下载链接（2 小时有效） */
  DownloadUrl?: string;
  /** 文件名 */
  FileName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrExportJobListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效 */
  Filters?: EDRFilter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 按 任务创建时间排序方向，仅支持 ASC / DESC枚举值：ASC： 升序DESC： 降序 */
  Order?: string;
  /** 排序字段，目前仅支持 InsertTime（按任务下发时间排序），不传默认 InsertTime；传入其他值返回 InvalidParameter */
  By?: string;
}

declare interface DescribeEdrExportJobListResponse {
  /** 下载文件数量 */
  TotalCount?: number;
  /** 下载文件信息 */
  List?: EDRExportJobItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdrLogCollectPathsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 返回数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
}

declare interface DescribeEdrLogCollectPathsResponse {
  /** 采集路径配置列表 */
  Paths?: LogAppCollectPath[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExportJobDownloadURLRequest {
  /** 任务ID */
  JobID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeExportJobDownloadURLResponse {
  /** 下载URL */
  DownloadURL?: string | null;
  /** 任务状态 RUNNING/SUCCESS/FAILURE */
  ExportStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExportJobManageListRequest {
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

declare interface DescribeExportJobManageListResponse {
  /** 导出任务数量 */
  TotalCount?: number;
  /** 导出任务列表 */
  List?: ExportJobItem[];
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

declare interface DescribeExposeRiskStatisticsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeExposeRiskStatisticsResponse {
  /** 云边界风险待治理风险 */
  ExposureRiskStatistics?: DescribeExposureStatisticsItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposeRisksRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 边界资产ID */
  ExposureID?: number;
  /** 过滤条件 */
  Filters?: Filters[];
}

declare interface DescribeExposeRisksResponse {
  /** 边界待处理风险列表 */
  ExposeRiskList?: ExposeRiskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposeRulesRequest {
  /** 过滤项 */
  Filters?: Filters[];
}

declare interface DescribeExposeRulesResponse {
  /** 边界规则列表 */
  ExposeRuleList?: ExposeRuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposureAutoTagAttributeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeExposureAutoTagAttributeResponse {
  /** 资产类型 */
  AssetTypeList?: ExposeAssetTypeItem[];
  /** 标签集合 */
  TagList?: AttributeOptionSet[];
  /** 开放状态集合 */
  OpenStatusList?: AttributeOptionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposureAutoTagRulesRequest {
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

declare interface DescribeExposureAutoTagRulesResponse {
  /** 云边界分析资产数量 */
  TotalCount?: number;
  /** 云边界分析自动打标规则 */
  RuleList?: AutoTagRuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExposureTrendRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeExposureTrendResponse {
  /** 暴露周期趋势数量统计信息 */
  ExposeTrendList?: ExposeTrendItem[];
  /** 暴露周期新增数量统计 */
  ExposeIncrement?: number;
  /** 近1天（24h）完全开放数量 */
  OpenCount?: number;
  /** 近1天（24h）受限访问数量 */
  AclCount?: number;
  /** 近1天（24h）无法访问数量 */
  CloseCount?: number;
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

declare interface DescribeHostKBRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件数组，多条件之间为 AND 关系支持的 Filter.Name：Keyword：关键字模糊搜索（对 KB 编号/名称模糊匹配）RiskStatus：修复状态InstanceID：实例IDNewestKB: 最新补丁(0/1) */
  Filters?: Filters[];
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 排序方向枚举值：ASC：升序DESC：降序默认值：DESC */
  Order?: string;
  /** 排序字段枚举值：LatestScanTime：最近扫描时间默认值：LatestScanTime */
  By?: string;
}

declare interface DescribeHostKBRiskListResponse {
  /** 主机 KB 补丁风险列表 */
  List?: HostKBRisk[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostVulItemVPRInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 漏洞ID */
  VulID?: number;
}

declare interface DescribeHostVulItemVPRInfoResponse {
  /** VPR Label */
  Label?: VPRLabel[];
  /** VPR评级过程和结果 */
  VRPRatingInfo?: VPRRatingInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostVulOverviewRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeHostVulOverviewResponse {
  /** 主机漏洞概览数据 */
  Overview?: HostVulOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostVulRiskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件数组，多条件之间为 AND 关系支持的 Filter.Name：CVSSLevel：CVSS level过滤Keyword：关键字模糊搜索（多词使用｜分隔，对漏洞名/CVEID 模糊匹配）Category：漏洞分类（LINUX/WEB_CMS/APPLICATION/EMERGENCY）VPRLevel：VPR 评级RiskStatus：修复状态Label：VPR风险标签InstanceID：实例IDCheckMethod：检测方法 */
  Filters?: Filters[];
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 排序方向枚举值：ASC：升序DESC：降序默认值：DESC */
  Order?: string;
  /** 排序字段枚举值：LatestScanTime：最近扫描时间默认值：LatestScanTime */
  By?: string;
}

declare interface DescribeHostVulRiskListResponse {
  /** 主机漏洞风险列表（按漏洞维度聚合） */
  List?: HostVulRisk[];
  /** 凭据总数 */
  TotalCount?: number;
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

declare interface DescribeKBDetailRequest {
  /** KB 补丁内部 ID（kb_info.id） */
  KBID: number;
}

declare interface DescribeKBDetailResponse {
  /** Windows KB 补丁详细信息 */
  KBDetail?: KBDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKBUpdatableMachineListRequest {
  /** KB补丁ID列表，最多支持100个 */
  KBIds: number[];
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 过滤条件支持的Filter.Name：InstanceId - 精确匹配，按主机实例ID筛选MachineName - 模糊匹配，按主机名称搜索MachineIp - 模糊匹配，按主机IP搜索SupportAutoFix - 精确匹配，按是否支持自动修复筛选：0-不支持 1-支持 */
  Filters?: Filters[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeKBUpdatableMachineListResponse {
  /** 可更新补丁主机列表 */
  Data?: KBUpdateMachineItem[];
  /** 总数量 */
  TotalCount?: number;
  /** 可一键修复的主机数量 */
  FixableCount?: number;
  /** 不可一键修复的主机数量 */
  NotFixableCount?: number;
  /** KB补丁维度汇总信息，展示被修复的补丁列表概要 */
  KBSummary?: KBFixSummaryItem[];
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

declare interface DescribeLastScanTaskInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 任务来源 */
  TaskSource?: string;
}

declare interface DescribeLastScanTaskInfoResponse {
  /** 任务信息 */
  TaskInfo?: TaskInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseStatusRequest {
}

declare interface DescribeLicenseStatusResponse {
  /** 授权状态列表（旗舰版→专业版→RASP） */
  List?: LicenseStatusItem[];
  /** 自动加购开关 0-关 1-开 */
  AutoRepurchaseSwitch?: number;
  /** 合并剩余解绑次数 = (旗舰版total + 专业版total) × 2 - 当月已解绑次数 */
  UnbindCountLeft?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLighthouseFirewallRulesRequest {
  /** 资产ID */
  AssetID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeLighthouseFirewallRulesResponse {
  /** 防火墙规则列表 */
  FirewallRules?: LighthouseFirewallRule[];
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

declare interface DescribeLoginTypeGlobalConfRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeLoginTypeGlobalConfResponse {
  /** 是否开启防卸载 0 否 1 是 9 未设置,和0一样是未开启 */
  Enable?: number;
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope?: number;
  /** 正选主机配置数 */
  IncludeHostCount?: number;
  /** 反选主机配置数 */
  ExcludeHostCount?: number;
  /** 正选quuid配置列表 */
  IncludeQuuid?: string[];
  /** 反选quuid配置列表 */
  ExcludeQuuid?: string[];
  /** 已开启机器数 */
  EnableCount?: number;
  /** 未启机器数 */
  DisableCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoginTypeHostRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP */
  Filters?: EDRFilter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [Id] */
  By?: string;
}

declare interface DescribeLoginTypeHostResponse {
  /** 总数 */
  Total?: number;
  /** 主机列表 */
  List?: ClientSettingHost[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoginWhiteCombinedListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选UserName - String - 是否必填：否 - 用户名筛选SrcIP - String - 是否必填：否 - 来源IP筛选Location - String - 是否必填：否 - 登录地筛选ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间 */
  Filters?: EDRFilter[];
}

declare interface DescribeLoginWhiteCombinedListResponse {
  /** 总数量 */
  TotalCount?: number;
  /** 合并后的白名单列表 */
  LoginWhiteCombinedInfos?: LoginWhiteCombinedInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoginWhiteHostListRequest {
  /** 白名单ID */
  Id: number;
  /** 需要返回的数量，最大值为1000 */
  Limit: number;
  /** 偏移量，默认为0。 */
  Offset: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件 IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选 */
  Filters?: AssetFilters[];
}

declare interface DescribeLoginWhiteHostListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 服务器列表 */
  Hosts?: HostDesc[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineClearHistoryRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件多个条件筛选时 Keywords,TimeBetween,取交集 Keywords 实例名称/内网/公网IP TimeBetween 时间区间 */
  Filters?: EDRFilters[];
  /** 限制条数,默认10 ,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 正序, ASC , 倒序 DESC , 默认ASC */
  Order?: string;
  /** AgentLastOfflineTime 客户端最后离线时间AutoClearTime 清理时间 */
  By?: string;
}

declare interface DescribeMachineClearHistoryResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 列表数据 */
  List?: MachineClearHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineGeneralRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeMachineGeneralResponse {
  /** 资产总数 */
  MachineCnt?: number;
  /** 已防护机器数 */
  ProtectMachineCnt?: number;
  /** 已防护基础版机器数 */
  BaseMachineCnt?: number;
  /** 已防护专业版机器数 */
  SpecialtyMachineCnt?: number;
  /** 已防护旗舰版机器数 */
  FlagshipMachineCnt?: number;
  /** 存在风险的机器数 */
  RiskMachineCnt?: number;
  /** 比较昨日风险机器数 */
  CompareYesterdayRiskMachineCnt?: number;
  /** 比较昨日未防护机器数 */
  CompareYesterdayNotProtectMachineCnt?: number;
  /** 比较昨日即将到期的机器数 */
  CompareYesterdayDeadlineMachineCnt?: number;
  /** 即将到期的机器数 */
  DeadlineMachineCnt?: number;
  /** 未防护机器数 */
  NotProtectMachineCnt?: number;
  /** 已防护轻量机器数（Lighthouse机器） */
  LHGeneralDiscountCnt?: number;
  /** 比较昨日新增的主机数 */
  CompareYesterdayMachineCnt?: number;
  /** 自动清理时间,最大720小时,最小0, 默认0 ,0=关闭 */
  MachineDestroyAfterOfflineHours?: number;
  /** 云服务器类型数组 */
  CloudFrom?: CloudFromCnt[];
  /** 腾讯云服务商机器数 */
  TencentCloudMachineCnt?: number;
  /** 阿里云服务商机器数 */
  AliCloudMachineCnt?: number;
  /** 百度云服务商机器数 */
  BaiduCloudMachineCnt?: number;
  /** IDC机器数 */
  IDCMachineCnt?: number;
  /** 其他云服务商机器数 */
  OtherCloudMachineCnt?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineLoginTypeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** instance_id */
  InstanceIds?: string[];
  /** 主机Quuid列表 */
  Quuids?: string[];
}

declare interface DescribeMachineLoginTypeResponse {
  /** 登录方式 */
  List?: MachineLoginType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareTimingScanSettingRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeMalwareTimingScanSettingResponse {
  /** 定时检测开关 0 关闭1 开启 */
  EnableScan?: number;
  /** 周期 1每天 */
  Cycle?: number;
  /** 检测周期 开始时间 */
  StartTime?: string;
  /** 检测周期 超时结束时间 */
  EndTime?: string;
  /** 检测模式 */
  ScanType?: string;
  /** 自选路径列表 */
  CustomPaths?: string[];
  /** 资产选择方式 */
  AssetSelectionType?: string;
  /** 标签ID数组 */
  TagIds?: string[];
  /** 直接选择的主机列表 */
  InstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 排除的主机列表 */
  ExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 直接选择的集群列表 */
  ClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 排除的集群列表 */
  ExcludeClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 实时监控0 关闭 1开启 */
  RealTimeMonitoring?: number;
  /** 监控模式 0 标准 1深度 */
  MonitoringPattern?: number;
  /** 实时监控自定义路径列表 */
  MonitorCustomPaths?: string[];
  /** 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示） */
  EngineType?: number;
  /** 启发引擎 0 关闭 1开启 */
  EnableInspiredEngine?: number;
  /** 是否开启恶意进程查杀[0:未开启,1:开启] */
  EnableMemShellScan?: number;
  /** 是否自动隔离：1-是，0-否 */
  AutoIsolation?: number;
  /** 是否杀掉进程 1杀掉 0不杀掉 只有开启自动隔离才生效 */
  KillProcess?: number;
  /** 执行清理开关 0未开启 1开启 */
  DoClean?: number;
  /** 防护模式 0 标准 1 重保 */
  ProtectMode?: number;
  /** 查杀范围 0 脚本类之外的恶意文件，1全部恶意文件 */
  ProtectFileScope?: number;
  /** 隔离资产选择 */
  QuaraAssetSelectionType?: string;
  /** 隔离标签ID数组 */
  QuaraTagIds?: string[];
  /** 隔离直接选择的主机 */
  QuaraInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 隔离排除的主机 */
  QuaraExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 隔离直接选择的集群 */
  QuaraClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 隔离排除的集群 */
  QuaraExcludeClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 超时时长（秒） */
  Timeout?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMandatoryVulSetRequest {
  /** 漏洞披露所属年份 */
  Year?: number;
  /** 漏洞披露所属月份 */
  Month?: number;
}

declare interface DescribeMandatoryVulSetResponse {
  /** 漏洞总数 */
  Total?: number;
  /** 漏洞列表 */
  Data?: VulInfoListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModifyMachinesLoginTypeTasksRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeModifyMachinesLoginTypeTasksResponse {
  /** 任务列表 */
  List?: ModifyMachinesLoginTypeTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMultiCloudAssetCountRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeMultiCloudAssetCountResponse {
  /** 云上资产总数取值范围：[0, +∞) */
  TotalCount?: number;
  /** 各云厂商资产数量明细 */
  CloudAssetInfos?: CloudAssetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNFSScanConfRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeNFSScanConfResponse {
  /** 是否开启NFS扫描 0 否 1 是 9未设置,和0一样是未开启 */
  Enable?: number;
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope?: number;
  /** 正选quuid配置列表 */
  IncludeQuuid?: string[];
  /** 反选quuid配置列表 */
  ExcludeQuuid?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNFSScanHostRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP */
  Filters?: EDRFilter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [Id] */
  By?: string;
}

declare interface DescribeNFSScanHostResponse {
  /** 总数 */
  Total?: number;
  /** 主机列表 */
  List?: ClientSettingHost[];
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

declare interface DescribeNatRulesRequest {
  /** 资产ID */
  AssetID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeNatRulesResponse {
  /** Dnat规则列表 */
  DnatRules?: NatDnatRuleItem[];
  /** Snat规则列表 */
  SnatRules?: NatSnatRuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetAttackSettingRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeNetAttackSettingResponse {
  /** 0 关闭网络攻击检测，1开启网络攻击检测 */
  NetAttackEnable?: number;
  /** 0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略 */
  NetAttackAlarmStatus?: number;
  /** 新增资产自动包含 0 不包含 1包含 */
  AutoInclude?: number;
  /** 主机范围 */
  CWPScope?: number;
  /** 指定主机instance_id列表 */
  InstanceIDs?: string[];
  /** 排除主机instance_id列表 */
  ExcludeInstanceIDs?: string[];
  /** 标签ID列表 */
  TagIDs?: string[];
  /** 容器范围 */
  TCSSScope?: number;
  /** 指定集群ID列表 */
  ClusterIDs?: string[];
  /** 排除集群ID列表 */
  ExcludeClusterIDs?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotifyAgentOfflineDurationRequest {
}

declare interface DescribeNotifyAgentOfflineDurationResponse {
  /** 离线时长，分钟级20-50m，步长10；小时级1-24h，步长1 */
  Duration?: string;
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

declare interface DescribePodContainerListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** Pod唯一标识ID */
  PodUniqueID?: string;
  /** 通用过滤条件列表。支持的过滤字段：ContainerId：容器ID，精确匹配。ContainerName：容器名称，模糊匹配。RunStatus：容器运行状态，精确匹配。取值：RUNNING、PAUSED、STOPPED、CREATED、DESTROYED、RESTARTING、REMOVING、DEAD、UNKNOWN。ImageId：镜像ID，精确匹配。ImageName：镜像名称，模糊匹配。IsolateStatus：隔离状态，精确匹配。取值：NORMAL（未隔离）、ISOLATED（已隔离）、ISOLATING（隔离中）、ISOLATE_FAILED（隔离失败）、RESTORING（解除隔离中）、RESTORE_FAILED（解除隔离失败）。NodeUniqueId：所属节点唯一ID，精确匹配（NodeAssetId 为等价别名）。UUID：主机UUID，精确匹配。NodeId：所属节点实例ID，精确匹配。NodeType：节点类型，精确匹配。取值：SUPER、MASTER、WORKER。 */
  Filter?: Filter;
}

declare interface DescribePodContainerListResponse {
  /** 查询结果总数 */
  TotalCount?: number;
  /** 结果列表 */
  List?: ClusterContainerListItem[];
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

declare interface DescribePortDetectListRequest {
  /** 边界分析ID */
  ExposureID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribePortDetectListResponse {
  /** 端口探测数量 */
  TotalCount?: number;
  /** 端口探测列表 */
  PortDetectList?: PortDetectInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePortScanTaskCountRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribePortScanTaskCountResponse {
  /** 端口扫描任务次数 */
  PortScanTaskCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePreventUninstallGlobalConfRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribePreventUninstallGlobalConfResponse {
  /** 是否开启防卸载 0 否 1 是 9 未设置,和0一样是未开启 */
  Enable?: number;
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope?: number;
  /** 正选主机数 */
  IncludeHostCount?: number;
  /** 反选主机数 */
  ExcludeHostCount?: number;
  /** 正选quuid列表 */
  IncludeQuuid?: string[];
  /** 反选quuid列表 */
  ExcludeQuuid?: string[];
  /** 已经开启数 */
  EnableCount?: number;
  /** 未开启数 */
  DisableCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePreventUninstallHostRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP */
  Filters?: EDRFilter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [Id] */
  By?: string;
}

declare interface DescribePreventUninstallHostResponse {
  /** 总数 */
  Total?: number;
  /** 主机列表 */
  List?: ClientSettingHost[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProcessDaemonGlobalConfRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeProcessDaemonGlobalConfResponse {
  /** 是否开启进程防护 0 否 1 是 9 未设置,和0一样是未开启 */
  Enable?: number;
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope?: number;
  /** 正选主机数 */
  IncludeHostCount?: number;
  /** 反选主机数 */
  ExcludeHostCount?: number;
  /** 正选quuid列表 */
  IncludeQuuid?: string[];
  /** 反选quuid列表 */
  ExcludeQuuid?: string[];
  /** 已经开启数 */
  EnableCount?: number;
  /** 未开启数 */
  DisableCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProcessDaemonHostRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** Name - string - 是否必填：否 - 主机名 InstanceId - string - 是否必填：否 - 实例ID PublicIp - string - 是否必填：否 - 公网IP PrivateIp - string - 是否必填：否 - 私网IP */
  Filters?: EDRFilter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [Id] */
  By?: string;
}

declare interface DescribeProcessDaemonHostResponse {
  /** 总数 */
  Total?: number;
  /** 主机列表 */
  List?: ClientSettingHost[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicCloudAssetsRequest {
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

declare interface DescribePublicCloudAssetsResponse {
  /** 资产数量 */
  TotalCount?: number;
  /** 资产集合 */
  Assets?: PublicAssetInfo[];
  /** 资产类型集合 */
  AssetTypeList?: AttributeOptionSet[];
  /** 地域集合 */
  RegionList?: AttributeOptionSet[];
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

declare interface DescribeRaspLicenseListRequest {
  /** 过滤条件- AssetType 资产类型(CWP 主机安全资产, TCSS_HOST 容器主机节点,TCSS_EKS 容器超级节点)- PluginStatus 插件状态(Normal 使用正常,Abnormal 存在异常,Unused 未使用)- ProtectionSwitch 防护开关(Enable 开启,Disable 未开启)- ProtectionVersion 防护版本(Rasp 重保授权包,Unauthorized 未授权)- InstanceID 实例ID- InstanceName 实例名称- InstanceIP 实例IP(内网IP/外网IP)- NodeID 容器节点ID- NodeName 容器节点名称- ClusterID 容器集群ID- ClusterName 容器集群名称 */
  Filters?: Filters[];
  /** 限制条数,默认10 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式,ASC 正序,DESC 倒序 */
  Order?: string;
  /** 排序值- LatestUpdateTime 最近更新时间 */
  By?: string;
}

declare interface DescribeRaspLicenseListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 数组对象 */
  List?: RaspLicenseList[];
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

declare interface DescribeReverseShellSystemPolicyConfigRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeReverseShellSystemPolicyConfigResponse {
  /** 内网告警展示 */
  InnerNetAlarmShow?: boolean;
  /** 内网ip展示 */
  InnerIPShow?: boolean;
  /** 主机范围 */
  CWPScope?: number;
  /** 指定主机instance_id列表 */
  InstanceIDs?: string[];
  /** 排除主机instance_id列表 */
  ExcludeInstanceIDs?: string[];
  /** 标签ID列表 */
  TagIDs?: string[];
  /** 容器范围 */
  TCSSScope?: number;
  /** 指定集群ID列表 */
  ClusterIDs?: string[];
  /** 排除集群ID列表 */
  ExcludeClusterIDs?: string[];
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

declare interface DescribeRiskCenterRiskTrendAnalysisRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤内容 */
  Filter?: Filter;
}

declare interface DescribeRiskCenterRiskTrendAnalysisResponse {
  /** 趋势列表 */
  Data?: RiskCenterOverviewTrendAnalysis[];
  /** 日期类型列表 */
  DateTypeLists?: FilterDataObject[];
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

declare interface DescribeRiskScanCronConfigRequest {
}

declare interface DescribeRiskScanCronConfigResponse {
  /** 风险扫描周期配置 */
  CronConfig?: RiskCronConfig;
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

declare interface DescribeSCFAliasListRequest {
  /** 云函数所在地域参数格式：腾讯云标准 Region，如 ap-guangzhou */
  SCFRegion: string;
  /** 命名空间名称取值参考：通过 DescribeSCFNamespaceList 接口获取 */
  Namespace: string;
  /** 函数名称取值参考：通过 DescribeSCFFunctionList 接口获取 */
  FunctionName: string;
  /** 单页条数取值范围：[1, 100]默认值：20 */
  Limit: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
}

declare interface DescribeSCFAliasListResponse {
  /** SCF 函数别名列表 */
  List?: SCFAliasInfo[];
  /** 别名总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSCFFunctionListRequest {
  /** 云函数所在地域参数格式：腾讯云标准 Region，如 ap-guangzhou */
  SCFRegion: string;
  /** 命名空间名称取值参考：通过 DescribeSCFNamespaceList 接口获取 */
  Namespace: string;
  /** 单页条数取值范围：[1, 100]默认值：20 */
  Limit: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
}

declare interface DescribeSCFFunctionListResponse {
  /** SCF 函数列表（仅返回 Event 类型） */
  List?: SCFFunctionInfo[];
  /** 函数总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSCFFunctionVersionListRequest {
  /** 云函数所在地域参数格式：腾讯云标准 Region，如 ap-guangzhou */
  SCFRegion: string;
  /** 命名空间名称取值参考：通过 DescribeSCFNamespaceList 接口获取 */
  Namespace: string;
  /** 函数名称取值参考：通过 DescribeSCFFunctionList 接口获取 */
  FunctionName: string;
  /** 单页条数取值范围：[1, 100]默认值：20 */
  Limit: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
}

declare interface DescribeSCFFunctionVersionListResponse {
  /** SCF 函数版本列表 */
  List?: SCFFunctionVersionInfo[];
  /** 版本总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSCFNamespaceListRequest {
  /** 云函数所在地域参数格式：腾讯云标准 Region，如 ap-guangzhou / ap-shanghai */
  SCFRegion: string;
  /** 单页条数取值范围：[1, 100]默认值：20 */
  Limit: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
}

declare interface DescribeSCFNamespaceListResponse {
  /** SCF 命名空间列表 */
  List?: SCFNamespaceInfo[];
  /** 命名空间总数 */
  TotalCount?: number;
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

declare interface DescribeScanTaskRecordListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤器 */
  Filters?: Filters[];
  /** 每页条数 */
  Limit?: number;
  /** 偏移 */
  Offset?: number;
  /** 排序方向 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeScanTaskRecordListResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 任务记录列表 */
  TaskRecordList?: ScanTaskRecordItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScfCustomDomainEndpointsRequest {
  /** 资产ID */
  AssetID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeScfCustomDomainEndpointsResponse {
  /** 端点列表 */
  Endpoints?: ScfCustomDomainEndpointItem[];
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

declare interface DescribeSecurityGroupPolicyRequest {
  /** 云厂商 */
  Provider: string;
  /** 资产ID */
  AssetID: string;
  /** 资产类型 */
  AssetType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 安全组ID */
  SecurityGroupID?: string;
}

declare interface DescribeSecurityGroupPolicyResponse {
  /** 关联安全组ID集合 */
  SecurityGroupIDList?: string[];
  /** 出站规则 */
  Egress?: SecurityGroupPolicyItem[];
  /** 入站规则 */
  Ingress?: SecurityGroupPolicyItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityRiskTrendRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeSecurityRiskTrendResponse {
  /** 按维度分组的趋势数据 */
  TrendData?: DimensionTrendData[];
  /** 最后一天风险摘要（告警 + 适用漏洞项） */
  RiskItems?: RiskTrendItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityScoreOverviewRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeSecurityScoreOverviewResponse {
  /** 安全评分取值范围：[0, 100] */
  Score?: number;
  /** 安全等级枚举值：safe：安全(90-100分)good：良好(70-89分)medium：一般(40-69分)danger：危险(0-39分) */
  Level?: string;
  /** 评分状态枚举值：success：全部数据源正常partial_error：部分数据源使用了缓存stale：使用上次完整快照error：无法计算 */
  ScoreStatus?: string;
  /** 初始分默认值：100 */
  InitialScore?: number;
  /** 存在风险的分类数量（X类风险建议尽快处理） */
  RiskCategoryCount?: number;
  /** 总扣分 */
  DeductScore?: number;
  /** 计算时间参数格式：YYYY-MM-DDTHH:mm:ss+08:00 */
  CalculatedAt?: string;
  /** 维度明细，含子项扣分和待办 */
  Dimensions?: DimensionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityScoreRuleRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeSecurityScoreRuleResponse {
  /** 是否为默认规则，用户未自定义时为true */
  IsDefault?: boolean;
  /** 当前生效规则列表 */
  Rules?: ScoreRuleItem[];
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

declare interface DescribeTagRuleAssetsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序类型 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 打标策略 */
  TaggingRule?: string;
}

declare interface DescribeTagRuleAssetsResponse {
  /** 资产数量 */
  TotalCount?: number;
  /** 资产集合 */
  Assets?: AssetTagPreviewAssetItem[];
  /** 资产类型集合 */
  AssetTypeList?: AttributeOptionSet[];
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

declare interface DescribeTaskPredictCostQuotaRequest {
  /** 任务模式 */
  TaskMode?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 自定义规则列表 */
  RuleIDs?: string[];
  /** 规范ID */
  StandardIDs?: number[];
}

declare interface DescribeTaskPredictCostQuotaResponse {
  /** 用户消耗配额数量 */
  CostQuota?: number;
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

declare interface DescribeUebaBehaviorSummaryRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeUebaBehaviorSummaryResponse {
  /** NodeInfo中有具体数据，Key为AbnormalUser表示异常账号，Key为AbnormalBehavior异常行为。 */
  Data?: BehaviorSummary | null;
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

declare interface DescribeUebaUserSummaryRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeUebaUserSummaryResponse {
  /** 用户概览信息 */
  Data?: UebaUserSummary | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCSPMInfoListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeUserCSPMInfoListResponse {
  /** 账号CSPM列表 */
  List?: UserCSPMInfo[];
  /** 已勾选账号CSPM配额总数 */
  SelectedCSPMNum?: number;
  /** 账号总数 */
  Count?: number;
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

declare interface DescribeUserInfoRequest {
}

declare interface DescribeUserInfoResponse {
  /** 用户配额信息 */
  UserInfo?: UserItem;
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

declare interface DescribeVdbAndPocInfoRequest {
}

declare interface DescribeVdbAndPocInfoResponse {
  /** 病毒库更新时间。 */
  VdbUpdateTime?: string;
  /** 漏洞库更新时间。 */
  PocUpdateTime?: string;
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

declare interface DescribeVulComponentRelateHostRequest {
  /** 漏洞 ID（vul_vuls.id） */
  VulID: number;
  /** 组件名称 */
  Name: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件数组，多条件之间为 AND 关系支持的 Filter.Name：Keyword：关键字模糊搜索（对主机名/IP/InstanceID 模糊匹配） */
  Filters?: Filters[];
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
}

declare interface DescribeVulComponentRelateHostResponse {
  /** 受该组件影响的主机列表 */
  List?: HostVulComponent[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulFixTaskDetailRequest {
  /** 修复任务ID */
  TaskId: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 过滤条件支持的Filter.Name：InstanceId - 精确匹配，按主机实例ID筛选VulId - 精确匹配，按漏洞ID筛选，过滤出某个漏洞下的主机KBId - 精确匹配，按KB补丁ID筛选，过滤出某个KB补丁下的主机Status - 精确匹配，按执行状态筛选：0-初始状态 1-已下发 11-客户端已确认 2-修复完成 3-客户端离线 4-超时 5-失败 6-不支持 9-等待快照创建完成中 10-快照创建失败FixStatus - 精确匹配，按修复结果筛选：0-初始状态 1-修复成功 2-修复失败SnapshotStatus - 精确匹配，按快照状态筛选：-1-无需创建快照 0-未开始 1-进行中 2-已完成 3-创建失败 */
  Filters?: Filters[];
  /** 排序字段枚举值：StartTime：按修复启动时间排序EndTime：按修复结束时间排序 */
  Order?: string;
  /** 排序方式枚举值：asc：升序desc：降序默认值：desc */
  By?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeVulFixTaskDetailResponse {
  /** 任务明细列表 */
  Data?: VulFixTaskDetailItem[];
  /** 总数量 */
  TotalCount?: number;
  /** 任务概要信息 */
  TaskInfo?: VulFixTaskInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulFixTaskListRequest {
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 过滤条件支持的Filter.Name：TaskId - 精确匹配，按任务ID筛选JobId - 精确匹配，按任务JobId筛选，对应后台任务系统的任务IDFixStatus - 精确匹配，按修复状态筛选：0-初始化 1-修复中 2-修复成功 3-部分修复失败 4-全部修复失败 5-停止修复StartTime - 范围匹配，修复启动时间范围，传入两个值表示起止时间AppId - 精确匹配，按创建者AppId筛选VulCategory - 精确匹配，按漏洞类型筛选：LINUX-Linux软件漏洞 WINDOWS-Windows系统补丁漏洞 WEB_CMS-Web-CMS漏洞 APPLICATION-应用漏洞 EMERGENCY-应急漏洞TaskName - 模糊匹配，按漏洞名称/CVE编号/KB补丁名称筛选，匹配任务关联的漏洞或KB补丁 */
  Filters?: Filters[];
  /** 排序字段枚举值：StartTime：按修复启动时间排序EndTime：按修复结束时间排序CreateTime：按创建时间排序 */
  Order?: string;
  /** 排序方式枚举值：asc：升序desc：降序默认值：desc */
  By?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeVulFixTaskListResponse {
  /** 修复任务列表 */
  Data?: VulFixTaskItem[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulFixableMachineListRequest {
  /** 漏洞ID列表，最多支持100个 */
  VulIds: number[];
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 过滤条件支持的Filter.Name：Keyword - 模糊匹配，按资产ID、资产名称搜索ComponentName - 模糊匹配，按关联组件名称搜索InstanceId - 精确匹配，按主机实例ID筛选MachineName - 模糊匹配，按主机名称搜索MachineIp - 模糊匹配，按主机IP搜索OsType - 精确匹配，按操作系统类型筛选：linux/windowsSupportAutoFix - 精确匹配，按是否支持自动修复筛选：0-不支持 1-支持Tag - 精确匹配，按资产标签筛选AppId - 精确匹配，按所属账号筛选 */
  Filters?: Filters[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeVulFixableMachineListResponse {
  /** 可修复主机列表 */
  Data?: VulFixableMachineItem[];
  /** 总数量 */
  TotalCount?: number;
  /** 可一键修复的主机数量 */
  FixableCount?: number;
  /** 不可一键修复的主机数量 */
  NotFixableCount?: number;
  /** 漏洞维度汇总信息，展示被修复的漏洞列表概要 */
  VulSummary?: VulFixSummaryItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulFixedHostDetailRequest {
  /** 漏洞ID */
  VulId: number;
  /** 主机实例ID */
  InstanceId: string;
  /** 分页偏移量，用于关联组件&amp;路径列表分页取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量，用于关联组件&amp;路径列表分页取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeVulFixedHostDetailResponse {
  /** 漏洞名称 */
  VulName?: string;
  /** CVE编号 */
  CveId?: string;
  /** 漏洞类型枚举值：LINUX：Linux软件漏洞WINDOWS：Windows系统补丁漏洞WEB_CMS：Web-CMS漏洞APPLICATION：应用漏洞 */
  VulCategory?: string;
  /** 修复完成时间参数格式：YYYY-MM-DDTHH:mm:ssZ（ISO8601格式） */
  FixTime?: string;
  /** 主机实例ID */
  InstanceId?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 主机公网IP */
  PublicIp?: string | null;
  /** 主机内网IP */
  PrivateIp?: string;
  /** 关联组件&amp;路径详情列表 */
  ComponentDetails?: ComponentDetailItem[];
  /** 关联组件&amp;路径总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulFixedListRequest {
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 过滤条件支持的Filter.Name：Keyword - 模糊匹配，按关键字搜索（漏洞名称/CVE编号/主机名称/实例ID）VulName - 模糊匹配，按漏洞名称搜索Level - 精确匹配，按漏洞等级筛选：LOW-低危 MEDIUM-中危 HIGH-高危 CRITICAL-严重VprLevel - 精确匹配，按VPR评级筛选：1-Low 2-Medium 3-High 4-CriticalVulCategory - 精确匹配，按漏洞类型筛选：LINUX-Linux软件漏洞 WINDOWS-Windows系统补丁漏洞 WEB_CMS-Web-CMS漏洞 APPLICATION-应用漏洞 EMERGENCY-应急漏洞MachineName - 模糊匹配，按主机名称搜索InstanceId - 模糊匹配，按实例ID搜索FixTime - 范围匹配，修复时间范围，传入两个值表示起止时间 */
  Filters?: Filters[];
  /** 排序字段枚举值：FixTime：按修复时间排序VulName：按漏洞名称排序 */
  Order?: string;
  /** 排序方式枚举值：asc：升序desc：降序默认值：desc */
  By?: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeVulFixedListResponse {
  /** 已修复漏洞列表 */
  Data?: VulFixedItem[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulHostRelateComponentRequest {
  /** 漏洞 ID（vul_vuls.id） */
  VulID: number;
  /** 实例ID */
  InstanceID: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeVulHostRelateComponentResponse {
  /** 受该组件影响的主机列表 */
  List?: HostVulComponent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulIgnoreRuleListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件，支持以下 Name：Keyword - 漏洞名/备注，模糊匹配Switch - 开关状态，过滤值：0（关闭）/ 1（开启） */
  Filters?: Filters[];
  /** 分页大小，默认 10，最大 100 */
  Limit?: number;
  /** 分页偏移，从 0 开始 */
  Offset?: number;
  /** 排序方向：asc（升序）/ desc（降序），默认 desc */
  Order?: string;
  /** 排序字段，默认按更新时间（UpdateTime）排序 */
  By?: string;
}

declare interface DescribeVulIgnoreRuleListResponse {
  /** 白名单列表 */
  List?: VulWhitelist[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulItemListRequest {
  /** 筛选条件数组，多条件之间为 AND 关系支持的 Filter.Name：Keyword：关键字模糊搜索（对漏洞名/CVE/VulID 模糊匹配）Category：漏洞分类（LINUX/WINDOWS/WEB_CMS/APPLICATION/EMERGENCY）Level：威胁等级VPRLevel：VPR 评级Label：风险标签CheckMethod：检测方式（VERSION_COMPARE/POC/VERSION_COMPARE_POC）DefendStatus：漏洞防御状态（ENABLED/NOT_SUPPORTED/NOT_ENABLED）SupportFix：是否支持一键修复（true/false）Emergency: 紧急漏洞获取 (0/1)Top5HotVul: 热点top 5 漏洞 (0/1) */
  Filters?: Filters[];
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 排序方向枚举值：ASC：升序DESC：降序默认值：DESC */
  Order?: string;
  /** 排序字段枚举值：PublishTime：漏洞披露时间默认值：PublishTime */
  By?: string;
}

declare interface DescribeVulItemListResponse {
  /** 漏洞条目列表 */
  List?: VulDetailInfo[];
  /** 凭据总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulLabelListRequest {
}

declare interface DescribeVulLabelListResponse {
  /** 漏洞条目列表 */
  List?: VPRLabel[];
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

declare interface DescribeVulRiskRelateComponentRequest {
  /** 漏洞 ID（vul_vuls.id） */
  VulID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件数组，多条件之间为 AND 关系支持的 Filter.Name：Keyword：关键字模糊搜索（对组件名称模糊匹配） */
  Filters?: Filters[];
}

declare interface DescribeVulRiskRelateComponentResponse {
  /** 该漏洞影响的组件列表 */
  List?: VulComponentSummary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulRiskRelateHostRequest {
  /** KB 补丁内部 ID（kb_info.id） */
  KBID: number;
  /** 漏洞 ID（vul_vuls.id） */
  VulID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 筛选条件数组，多条件之间为 AND 关系支持的 Filter.Name：Keyword：关键字模糊搜索（对主机名/IP/InstanceID 模糊匹配）CloudTag: 云标签Tag: 安全中心标签 */
  Filters?: Filters[];
  /** 每页返回数量取值范围：[1, 100]默认值：10 */
  Limit?: number;
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 排序方向枚举值：ASC：升序DESC：降序默认值：DESC */
  Order?: string;
  /** 排序字段枚举值：LatestScanTime：最近扫描时间VPRLevel：VPR 评级RiskStatus：修复状态默认值：LatestScanTime */
  By?: string;
}

declare interface DescribeVulRiskRelateHostResponse {
  /** 该漏洞影响的主机列表 */
  List?: VulHostBriefInfo[];
  /** 符合条件的总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulScanPeriodicRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface DescribeVulScanPeriodicResponse {
  /** 周期扫描开关（0-关闭, 1-开启） */
  Status?: number;
  /** 漏洞类型枚举值：LINUX： Linux软件漏洞WINDOWS： Windows系统补丁WEB_CMS： Web-CMS漏洞APPLICATION： 应用漏洞EMERGENCY： 应急漏洞 */
  VulCategory?: string[];
  /** 漏洞等级（INVALID: 无效, INFO: 提示, LOW: 低危, MEDIUM: 中危, HIGH: 高危, CRITICAL: 严重） */
  Level?: string[];
  /** 扫描方式（VersionCompare: 版本对比, POC: POC检测, VersionComparePOC: 版本对比+POC检测） */
  Method?: string;
  /** 周期扫描类型枚举值：1： 每天2： 每周3： 每月 */
  CycleType?: number;
  /** 开始时间（09:00:00） */
  StartTime?: string;
  /** 结束时间（18:00:00） */
  EndTime?: string;
  /** 资产范围（0-全部资产，1-自选资产，2-剔除资产） */
  AssetRange?: number;
  /** 资产列表（instance_id列表） */
  AssetList?: string[];
  /** 周期值单位：周几或者每月几号 */
  CycleValue?: number[];
  /** 超时时长单位：秒 */
  Timeout?: number;
  /** 是否运行被同步配置 0-不允许，1-允许 */
  AllowSync?: number;
  /** 管理员账号是否开启了自动同步配置开关 0-关闭，1-开启 */
  EnableSync?: number;
  /** 配置信息来自哪个账号，为空表示自己设置 */
  AdminInfo?: AccountBriefInfo;
  /** 标签id */
  TagIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulScanTaskDetailRequest {
  /** 任务id */
  Id: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件，支持以下 Name：InstanceId - 资产实例 ID，精确匹配InstanceName - 资产实例名称，模糊匹配（ExactMatch=1 时精确匹配）Ip - 资产 IP 地址，精确匹配Status - 扫描状态，精确匹配 */
  Filters?: Filters[];
  /** 分页大小，默认 10，最大 100 */
  Limit?: number;
  /** 分页偏移，从 0 开始 */
  Offset?: number;
  /** 排序方向：asc（升序）/ desc（降序），默认 desc */
  Order?: string;
  /** 排序字段，默认按创建时间（CreateTime）排序 */
  By?: string;
}

declare interface DescribeVulScanTaskDetailResponse {
  /** 任务详情列表 */
  List?: VulScanTaskDetail[];
  /** 总数 */
  Total?: number;
  /** 漏洞数量 */
  Vuls?: number;
  /** 扫描数量 */
  Scanned?: number;
  /** 风险数量 */
  Risk?: number;
  /** 失败数量 */
  Failed?: number;
  /** 扫描进度（0-100） */
  Progress?: number;
  /** 任务pdf报告地址 */
  TaskPdf?: string;
  /** 任务excel报告地址 */
  TaskExcel?: string;
  /** 任务开始时间，格式：2006-01-02T15:04:05+08:00 */
  StartTime?: string;
  /** 任务结束时间，格式：2006-01-02T15:04:05+08:00 */
  EndTime?: string;
  /** 漏洞ID */
  VulId?: number[];
  /** KB编号 */
  KbNo?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulScanTaskListRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件，支持以下 Name：JobId - 任务 ID 精确匹配TaskType- 任务类型精确匹配 */
  Filters?: Filters[];
  /** 分页大小取值范围：[1, 100]单位：条默认值：10 */
  Limit?: number;
  /** 分页偏移取值范围：[0, 99999]单位：条 */
  Offset?: number;
  /** 过滤方向枚举值：DESC： 倒序ASC： 正序 */
  Order?: string;
  /** 排序字段默认值：ScanTime */
  By?: string;
}

declare interface DescribeVulScanTaskListResponse {
  /** 任务列表 */
  List?: VulScanTask[];
  /** 总数 */
  Total?: number;
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

declare interface DescribeWebhookPolicyListRequest {
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量取值范围：[1, 200]默认值：20 */
  Limit?: number;
  /** 过滤条件支持的过滤项：Name：按策略名称模糊搜索Status：启用状态，可选值：ON / OFFReceiveFormat：接收格式，可选值：TEXT / JSONModule：通知项模块，可选值：Vul / Alert / AkSk / Agent / LogAnalysisReceiverID：关联的接收机器人 ID */
  Filters?: Filters[];
  /** 排序字段枚举值：InsertTime：创建时间UpdateTime：更新时间默认值：UpdateTime */
  Order?: string;
  /** 排序方式枚举值：asc：升序desc：降序默认值：desc */
  By?: string;
}

declare interface DescribeWebhookPolicyListResponse {
  /** 策略列表 */
  Data?: WebhookPolicy[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebhookReceiverListRequest {
  /** 分页偏移量取值范围：[0, +∞)默认值：0 */
  Offset?: number;
  /** 每页返回数量取值范围：[1, 200]默认值：20 */
  Limit?: number;
  /** 过滤条件支持的过滤项：Name：按机器人名称模糊搜索Type：机器人类型，可选值：WEBHOOK（webhook） / SCF（云函数） */
  Filters?: Filters[];
  /** 排序字段枚举值：InsertTime：创建时间UpdateTime：更新时间默认值：UpdateTime */
  Order?: string;
  /** 排序方式枚举值：asc：升序desc：降序默认值：desc */
  By?: string;
}

declare interface DescribeWebhookReceiverListResponse {
  /** 接收机器人列表 */
  Data?: WebhookReceiver[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableAIScheduleRequest {
  /** AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。 */
  ScheduleId?: string;
}

declare interface DisableAIScheduleResponse {
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

declare interface EnableAIScheduleRequest {
  /** AI 定时任务 ID。可通过 DescribeAIScheduleList 接口获取。 */
  ScheduleId?: string;
}

declare interface EnableAIScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportCSIPMalwareScanTaskDetailRequest {
  /** CSIP扫描任务ID */
  TaskId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** Status - int - 是否必填：否 - 扫描状态过滤Quuid - string - 是否必填：否 - 主机Quuid过滤MachineName - string - 是否必填：否 - 主机名称模糊搜索InstanceID - string - 是否必填：否 - 实例ID过滤（单值模糊匹配，多值精确匹配）IP - string - 是否必填：否 - IP地址过滤（内网IP+公网IP双向模糊匹配） */
  Filters?: EDRFilter[];
}

declare interface ExportCSIPMalwareScanTaskDetailResponse {
  /** 导出任务ID，用于查询导出结果 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportClientSettingHostListRequest {
  /** 导出业务类型 PreventUninstall 防卸载主机列表导出 LoginType 扫码登录主机列表导出 ProcessDaemon 进程守护主机列表导出 */
  BusiType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤参数 */
  Filters?: EDRFilters[];
}

declare interface ExportClientSettingHostListResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportEDRRulesRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 过滤条件：Name、RuleContent、RuleType、ContentType、Action、Level、DetectMode、DetectType、AttackStage、Status */
  Filters?: EDRFilter[];
  /** 排序，大小写无关：ASC 升序，DESC降序 */
  Order?: string;
  /** 排序列，ModifyTime */
  By?: string;
}

declare interface ExportEDRRulesResponse {
  /** 任务ID,需要到接口 异步导出任务获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportTasksRequest {
  /** 任务ID */
  TaskId: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ExportTasksResponse {
  /** PENDING：正在生成下载链接，FINISHED：下载链接已生成，ERROR：网络异常等异常情况 */
  Status?: string;
  /** 下载链接 */
  DownloadUrl?: string;
  /** 文件名称 */
  FileName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstallClusterAgentRequest {
  /** 集群CA证书MD5列表（单/批量统一）用途：指定需要安装容器安全Agent（平行容器方式）的集群取值参考：通过 DescribeClusterListV2 接口返回项中的 ClusterCaMD5 字段获取说明：capi 层不对该字段做存在性/类型校验，按 cluster_ca_md5 透传到接入侧 ClusterInstall RPC */
  ClusterCaMD5List: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface InstallClusterAgentResponse {
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
  /** 标签ID */
  TagIDs?: string[];
  /** 0,1枚举值：0： 部分1： 全部 */
  TCSSScope?: number;
  /** 集群ID */
  ClusterIDs?: string[];
  /** 排除集群ID */
  ExcludeClusterIDs?: string[];
  /** 实例ID */
  InstanceIds?: string[];
  /** 排除实例ID */
  ExcludeInstanceIds?: string[];
}

declare interface ModifyAILinkSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAIScheduleRequest {
  /** AI 定时任务 ID。可通过 CreateAISchedule 接口获取。 */
  ScheduleId?: string;
  /** 任务名称。最大 128 字符。 */
  Name?: string;
  /** 执行提示词。最大 2048 字符。 */
  Prompts?: string;
  /** 最大触发次数，0 表示无限制。 */
  MaxFireCount?: number;
  /** 生效开始时间，Unix 毫秒时间戳，0 表示立即生效。 */
  StartTime?: number;
  /** 生效结束时间，Unix 毫秒时间戳，0 表示永不过期。 */
  EndTime?: number;
  /** 触发器列表，当 UpdateTriggers 为 true 时全量替换。 */
  Triggers?: AiScheduleTriggerInfo[];
  /** 是否更新触发器列表。取值：true（使用 Triggers 字段全量替换）、false（不更新）。 */
  UpdateTriggers?: boolean;
}

declare interface ModifyAIScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentConfigSettingRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 日志采集类型列表，可选值：tcp_src_port/tcp_ingress/http_egress/http_ingress/app_access */
  LogCollectSettings?: string[];
  /** 资产选择方式：all-全部付费资产，tag-按标签选择，direct-直接选择 */
  AssetSelectionType?: string;
  /** 按标签选择时的标签ID数组（AssetSelectionType=tag时使用） */
  TagIds?: string[];
  /** 直接选择的主机instance_id列表（AssetSelectionType=direct时使用） */
  InstanceIDs?: string[];
  /** 排除的主机instance_id列表（AssetSelectionType=all时使用） */
  ExcludeInstanceIDs?: string[];
}

declare interface ModifyAgentConfigSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentRunModeRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 自定义模式配置 */
  CustomPolicy?: CustomAgentRunModePolicy;
  /** 高安全防护模式quuid列表 */
  AdvanceModeQuuids?: string[];
  /** 自定义模式quuid列表 */
  CustomModeQuuids?: string[];
  /** 日志增强开关,0：关闭，1：打开 */
  EnhanceLogMode?: number;
  /** 文件查杀自动poc模式开关，0：关闭，1：打开 */
  MalwarePocMode?: number;
  /** 五元组是否上报源端口，0:不上报，1:上报 */
  ReportSourcePort?: number;
  /** 日志采集设置，采集TCP源端口tcp_src_port，TCP入向日志tcp_ingress，HTTP出向连接日志http_egress，HTTP入向连接日志http_ingress，应用访问日志app_access */
  LogCollectSettings?: string[];
}

declare interface ModifyAgentRunModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentRunPolicyRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 自定义运行策略（CPU/Memory/NetworkPps），不传则不修改 */
  CustomPolicy?: CustomAgentRunModePolicy;
  /** 高级模式机器instance_id列表，后台自动转为quuid存储 */
  AdvanceModeInstanceIDs?: string[];
  /** 自定义模式机器instance_id列表，后台自动转为quuid存储 */
  CustomModeInstanceIDs?: string[];
}

declare interface ModifyAgentRunPolicyResponse {
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

declare interface ModifyAssetCoreAttributeRequest {
  /** 标记或者取消标记核心资产 */
  OperateType: string;
  /** 资产ID集合 */
  InstanceIDs: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyAssetCoreAttributeResponse {
  /** 标记资产是否核心 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAssetFilterViewRequest {
  /** 视图ID */
  ViewID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产搜索过滤项 */
  Filters?: Filters[];
}

declare interface ModifyAssetFilterViewResponse {
  /** 操作信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAssetTagRequest {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
  /** 标签ID */
  TagID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 颜色 */
  Color?: string;
  /** 描述 */
  Description?: string;
  /** 打标策略 */
  TaggingRule?: string;
  /** 是否立即执行资产打标 */
  ApplyNow?: boolean;
}

declare interface ModifyAssetTagResponse {
  /** 状态码 */
  Code?: string;
  /** 信息 */
  Message?: string;
  /** 该打标规则是否在执行中 */
  HasRunningApply?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAssetTagsByAssetInfoRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产列表 */
  Assets?: AssetTagModifyAssetItem[];
  /** 标签ID列表 */
  TagIDs?: string[];
  /** 操作类型 */
  OperationType?: string;
}

declare interface ModifyAssetTagsByAssetInfoResponse {
  /** 状态码 */
  Code?: string;
  /** 信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAssetTagsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产RID列表 */
  AssetRIDs?: string[];
  /** 标签ID列表 */
  TagIDs?: string[];
  /** 操作类型 */
  OperationType?: string;
}

declare interface ModifyAssetTagsResponse {
  /** 状态码 */
  Code?: string;
  /** 信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBanModeRequest {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 阻断时间，用于标准阻断模式 */
  Ttl?: number;
}

declare interface ModifyBanModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselinePolicyEnableRequest {
  /** 待修改的基线策略 ID 列表，不可为空且元素不可为 0。 */
  PolicyIDList: number[];
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  PolicyType: string;
  /** 目标启用状态。0 停用，1 启用。 */
  Enable: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyBaselinePolicyEnableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselinePolicyRequest {
  /** 待新建或编辑的基线策略详情。 */
  Policy: BaselinePolicy;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyBaselinePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselineSyncConfRequest {
  /** 待更新的基线同步配置。 */
  SyncConf: BaselineSyncConf;
  /** 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。 */
  MemberId?: string[];
}

declare interface ModifyBaselineSyncConfResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselineUserOtherConfRequest {
  /** 待更新的用户其他配置；AgentScanTimeout 必须在 [60, 86400] 秒范围内。 */
  UserConf: BaselineUserOtherConf;
  /** 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。 */
  MemberId?: string[];
}

declare interface ModifyBaselineUserOtherConfResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselineUserWeakPasswordConfRequest {
  /** 弱口令字典原文（明文），允许为空字符串以清空配置。 */
  UserConf: string;
  /** 集团账号场景下的成员账号 Appid 列表。非集团账号或仅查询当前账号时传空。 */
  MemberId?: string[];
}

declare interface ModifyBaselineUserWeakPasswordConfResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBruteAttackBanStatusRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 是否开启智能过白模式 */
  OpenSmartMode?: boolean;
  /** 是否阻断情报黑IP */
  BanBlackIp?: boolean;
  /** 是否阻断漏洞黑IP */
  BanVulIp?: boolean;
  /** 是否开启规则阻断 */
  BanByRule?: boolean;
}

declare interface ModifyBruteAttackBanStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBruteAttackRulesRequest {
  /** 暴力破解判断规则 */
  Rules: BruteAttackRule[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyBruteAttackRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCSIPLicenseBindsRequest {
  /** 资源ID（指定绑定到哪个订单） */
  ResourceId: string;
  /** 待绑定的实例ID列表（IsAll=true时可不传） */
  InstanceIDs?: string[];
  /** 是否绑定全部未绑定机器（true时自动算差集） */
  IsAll?: boolean;
  /** 授权版本。枚举值：ENTERPRISE_HP(旗舰版) / ADVANCED_HP(专业版) / RASP(RASP)。推荐使用此参数，与InquireKey二选一。 */
  LicenseType?: string;
}

declare interface ModifyCSIPLicenseBindsResponse {
  /** 异步任务ID，用于调用DescribeLicenseBindSchedule轮询进度 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCSIPLicenseUnBindsRequest {
  /** 待解绑的实例ID列表（IsAll=true时可不传） */
  InstanceIDs?: string[];
  /** 是否解绑全部已绑定主机授权机器 */
  IsAll?: boolean;
}

declare interface ModifyCSIPLicenseUnBindsResponse {
  /** 总数 */
  Total?: number;
  /** 成功数 */
  SuccessNum?: number;
  /** 失败数 */
  FailedNum?: number;
  /** 失败明细 */
  FailedList?: LicenseUnbindFailedItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCSIPRaspLicenseBindsRequest {
  /** 资源ID（指定绑定到哪个订单） */
  ResourceId: string;
  /** 授权类型。枚举值：rasp(RASP) / enterprise_hp(旗舰版)。为空默认 rasp */
  LicenseType: string;
  /** 资产类型。枚举值：host(主机) / cluster(容器节点) / eks(EKS超级节点)。为空默认 host */
  AssetType: string;
  /** 待绑定的实例ID列表（IsAll=true时可不传） */
  InstanceIDs?: string[];
  /** 是否绑定全部未绑定机器（true时自动算差集） */
  IsAll?: boolean;
}

declare interface ModifyCSIPRaspLicenseBindsResponse {
  /** 异步任务ID，用于调用DescribeCSIPLicenseBindSchedule轮询进度 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCSIPRaspLicenseUnBindsRequest {
  /** 待解绑的实例ID列表（IsAll=true时可不传） */
  InstanceIDs?: string[];
  /** 是否解绑全部已绑定RASP机器 */
  IsAll?: boolean;
}

declare interface ModifyCSIPRaspLicenseUnBindsResponse {
  /** 总数 */
  Total?: number;
  /** 成功数 */
  SuccessNum?: number;
  /** 失败数 */
  FailedNum?: number;
  /** 失败明细 */
  FailedList?: LicenseUnbindFailedItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCosAuditBucketMonitorStatusRequest {
  /** 存储桶集合 */
  BucketNameSet: string[];
  /** 0 关闭 1 开启 */
  MonitorStatus: number;
}

declare interface ModifyCosAuditBucketMonitorStatusResponse {
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

declare interface ModifyCspmShardConfigRequest {
  /** 开关状态 */
  AutoShardStatus: number;
}

declare interface ModifyCspmShardConfigResponse {
  /** 共享AppID */
  ShardFromAppID?: number;
  /** 共享开关:1:开启;2:关闭 */
  AutoShardStatus?: number;
  /** 被共享AppID集合 */
  ShardAppIDs?: number[];
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
  /** 策略名 */
  Name?: string;
  /** 策略描述 */
  Description?: string;
  /** 支持的数据库类型 */
  DbTypes?: string;
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
  /** 安全中心标签ID列表（主机资产范围「按标签选择」，仅对主机生效）；上限 100（超限截断）。标签来源接口 DescribeAssetTagTree */
  TagIDs?: string[];
  /** 指定生效集群列表（每项含 AppId + ClusterID，TCSSScope=0 时使用）。入参数组上限 3000（超限截断保留前 3000 项） */
  ClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 排除集群列表（每项含 AppId + ClusterID）；入参数组上限 3000（超限截断保留前 3000 项） */
  ExcludeClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 直接选择镜像（每项含 AppId + ImageID，在集群基础上进一步过滤）。多账号场景下各账号只存属于自己的镜像；入参数组上限 3000（超限截断保留前 3000 项） */
  ImageIDsWithAppId?: ImageIDWithAppIdItem[];
  /** 容器条件匹配 */
  ConditionMatches?: ConditionMatch[];
}

declare interface ModifyEDRRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEDRRuleStatusRequest {
  /** 开启状态：0-开启，1-关闭 */
  Status: number;
  /** 策略ID数组 */
  RuleIDs: string[];
  /** 策略类型，0-system 1-custom */
  RuleType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 修改策略对应的APPID */
  TargetAppIDs?: number[];
}

declare interface ModifyEDRRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEDRRulesActionRequest {
  /** 策略ID数组 */
  RuleIDs: string[];
  /** 目标 Action：0-告警 1-放行 2-告警并拦截 */
  AlertAction: number;
  /** 目标账号 AppId 列表 */
  TargetAppIDs: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyEDRRulesActionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEdrAlertIsolationRequest {
  /** 告警定位列表（1-500） */
  Targets: EdrAlertTarget[];
  /** 操作类型：Isolate（隔离）/ RestoreIsolate（恢复隔离）/ KillProcess（进程查杀）枚举值：Isolate： 隔离RestoreIsolate： 恢复隔离KillProcess： 进程查杀 */
  Status: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 是否终止关联进程，仅 Status=Isolate 有效，Status=KillProcess 时忽略 */
  KillProcess?: boolean;
}

declare interface ModifyEdrAlertIsolationResponse {
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

declare interface ModifyEdrAlertStatusRequest {
  /** 目标告警信息 */
  Targets: EdrAlertTarget[];
  /** 想达到的告警状态枚举值：PROCESSED： 已处理WHITELISTED： 已加白IGNORED： 已忽略DELETED： 已删除-软删除 */
  Status: string;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyEdrAlertStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEdrExcludeNetworkSegmentsRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 例外网段列表，支持IP/IP段/CIDR格式，最多可添加100条 */
  NetworkSegments?: string[];
}

declare interface ModifyEdrExcludeNetworkSegmentsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEdrLogCollectPathRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 采集路径，最多可添加1000条 */
  Paths?: LogAppCollectPath[];
}

declare interface ModifyEdrLogCollectPathResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExposureAutoTagRuleRequest {
  /** 规则名称 */
  RuleName: string;
  /** 标签 */
  Tag: string;
  /** 规则ID */
  RuleID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 规则描述 */
  Description?: string;
  /** 开启状态 */
  Enable?: boolean;
  /** 资产类型 */
  AssetTypes?: string[];
  /** 端口 */
  Ports?: string[];
  /** 开放状态 */
  OpenStatuses?: string[];
  /** 是否立即执行打标 */
  ApplyNow?: boolean;
}

declare interface ModifyExposureAutoTagRuleResponse {
  /** 操作结果 */
  Message?: string;
  /** 当前是否有正在运行的打标任务 */
  HasRunningApply?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExposureAutoTagRuleStatusRequest {
  /** 规则ID */
  RuleID: number;
  /** 开启状态 */
  Enable: boolean;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyExposureAutoTagRuleStatusResponse {
  /** 操作结果 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExposureTagRequest {
  /** 云边界分析ID集合 */
  ExposureIDs: number[];
  /** 标签 */
  Tag: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 备注 */
  Comment?: string;
}

declare interface ModifyExposureTagResponse {
  /** 更新标签操作返回信息 */
  Message?: string;
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

declare interface ModifyLoginWhiteRecordRequest {
  /** 白名单用户（多个用户逗号隔开） */
  UserName: string;
  /** 更新后记录的白名单维度信息 */
  SrcIp: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 备注 */
  Remark: string;
  /** 是否对所有服务器生效，0-否，1-是 */
  IsGlobal: number;
  /** 白名单ID */
  Id: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 服务器列表 */
  Hosts?: HostInfo[];
  /** 地域列表 */
  Places?: Place[];
}

declare interface ModifyLoginWhiteRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMachineAutoClearConfigRequest {
  /** 清理规则时间, 0 表示关闭, 单位为天, 最大为 30天 */
  ClearRule: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifyMachineAutoClearConfigResponse {
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

declare interface ModifyMachinesLoginTypeRequest {
  /** 登录方式：0-原始方式，1-扫码免密登录 */
  LoginType: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** instance_id列表(instance_ids和quuids至少要填一个) */
  InstanceIds?: string[];
  /** 主机quuid列表(instance_ids和quuids至少要填一个) */
  Quuids?: string[];
  /** 排除的quuid集合 */
  ExcludeQuuid?: string[];
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope?: number;
  /** 操作来源 :0 主机页面1 客户端设置页面2 安全中心页面3 LightHouse购买页4 LightHouse控制台 */
  From?: number;
  /** 请求版本 0 原始版本 1 策略式请求 */
  RequestVersion?: number;
}

declare interface ModifyMachinesLoginTypeResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMalwareTimingScanSettingsRequest {
  /** 扫描周期 默认每天 1 */
  Cycle: number;
  /** 检测周期 开始时间，如：02:00:00 */
  StartTime: string;
  /** 检测周期 超时结束时间，如：04:00:00 */
  EndTime: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 定时检测开关 0 关闭 1开启 */
  EnableScan?: number;
  /** 检测模式：full/quick/include/exclude */
  ScanType?: string;
  /** 自选路径列表（ScanType=include/exclude时必填，最多100条） */
  CustomPaths?: string[];
  /** 资产选择方式：all/tag/direct */
  AssetSelectionType?: string;
  /** 按标签选择时的标签ID数组 */
  TagIds?: string[];
  /** 直接选择的主机列表 */
  InstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 排除的主机列表 */
  ExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 直接选择的集群列表 */
  ClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 排除的集群列表 */
  ExcludeClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 实时监控 0 关闭 1开启 */
  RealTimeMonitoring?: number;
  /** 监控模式 0 标准 1深度 */
  MonitoringPattern?: number;
  /** 实时监控自定义路径列表（MonitoringPattern=2或3时必填，最多100条） */
  MonitorCustomPaths?: string[];
  /** 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示） */
  EngineType?: number;
  /** 启发引擎开关 0 关闭 1开启 */
  EnableInspiredEngine?: number;
  /** 是否开启恶意进程查杀[0:未开启,1:开启] */
  EnableMemShellScan?: number;
  /** 是否自动隔离 1隔离 0 不隔离 */
  AutoIsolation?: number;
  /** 是否杀掉进程 1杀掉 0不杀掉 */
  KillProcess?: number;
  /** 1 清理, 0 不清理本操作会修复被篡改的系统命令，计划任务等系统文件，操作中请确保yum/apt 可用 */
  DoClean?: number;
  /** 防护模式 0 标准 1重保 */
  ProtectMode?: number;
  /** 查杀范围 0 脚本类之外的恶意文件，1全部恶意文件 */
  ProtectFileScope?: number;
  /** 隔离资产选择：all/tag/direct */
  QuaraAssetSelectionType?: string;
  /** 隔离按标签选择时的tagId数组 */
  QuaraTagIds?: string[];
  /** 隔离直接选择的主机 */
  QuaraInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 隔离排除的主机 */
  QuaraExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 隔离直接选择的集群 */
  QuaraClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 隔离排除的集群 */
  QuaraExcludeClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 超时时长（秒） */
  Timeout?: number;
}

declare interface ModifyMalwareTimingScanSettingsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNFSScanConfRequest {
  /** 是否开启NFS扫描 0 否 1 是 9未设置,和0一样是未开启 */
  Enable: number;
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 记录ID，新增时为0 */
  Id?: number;
  /** 正选quuid配置列表 */
  IncludeQuuid?: string[];
  /** 反选quuid配置列表 */
  ExcludeQuuid?: string[];
}

declare interface ModifyNFSScanConfResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNFSScanHostRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 移除配置的机器 */
  Quuid?: string[];
}

declare interface ModifyNFSScanHostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetAttackSettingRequest {
  /** 0 关闭网络攻击检测，1开启网络攻击检测 */
  NetAttackEnable: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略 */
  NetAttackAlarmStatus?: number;
  /** 新增资产自动包含 0 不包含 1包含 */
  AutoInclude?: number;
  /** 主机范围：0-指定 1-全部 2-专业版 3-旗舰版 4-专业+旗舰 */
  CWPScope?: number;
  /** 指定主机列表（CWPScope=0时使用） */
  InstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 排除主机列表 */
  ExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 标签ID列表 */
  TagIDs?: string[];
  /** 容器范围：0-指定集群 1-全部集群 */
  TCSSScope?: number;
  /** 指定集群列表（TCSSScope=0时使用） */
  ClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 排除集群列表 */
  ExcludeClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
}

declare interface ModifyNetAttackSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNotifyAgentOfflineDurationRequest {
  /** 离线时长，分钟级20-50m，步长10；小时级1-24h，步长1 */
  Duration: string;
}

declare interface ModifyNotifyAgentOfflineDurationResponse {
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

declare interface ModifyPayConfigRequest {
  /** 主机安全模块自动扩容配置补充说明：不传则不修改主机配置；本期至少需传本模块。后续可扩展 ContainerConfig / AIAgentConfig 命名模块字段 */
  HostConfig?: HostAutoScaleConfig;
}

declare interface ModifyPayConfigResponse {
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

declare interface ModifyProtectionSettingRequest {
  /** 资产类型- CWP 主机安全资产- TCSS_HOST 容器主机节点- TCSS_EKS 容器超级节点 */
  AssetType: string;
  /** 防护配置 */
  Config?: ModifyProtectionSetting[];
  /** 是否全部,这里需要配合筛选条件Filters */
  IsALL?: boolean;
  /** 过滤参数,这里IsALL=true生效,结果作用到Config里 */
  Filters?: Filters[];
}

declare interface ModifyProtectionSettingResponse {
  /** 绑定失败的QUUID,失败原因为未绑定重保授权包 */
  FailList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRaspLicenseBindsRequest {
  /** 资产类型- CWP 主机安全资产- TCSS_HOST 容器主机节点- TCSS_EKS 容器超级节点 */
  AssetType: string;
  /** 资源ID */
  ResourceID: string;
  /** 计费项类型- sv_yunjing_vas_small 小型包- sv_yunjing_vas_medium 中型包- sv_yunjing_vas_large 大型包- sv_yunjing_vas_expansion 扩展包 */
  InquireKey: string;
  /** 实例ID数组 */
  QUUID?: string[];
  /** 是否全部机器实例 */
  IsALL?: boolean;
  /** 过滤参数,该参数需要IsALL=true时生效,表示筛选的结果作用到QUUID里 */
  Filters?: Filters[];
}

declare interface ModifyRaspLicenseBindsResponse {
  /** 任务ID,用于查询绑定进度 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyReverseShellSystemPolicyConfigRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 内网告警展示 */
  InnerNetAlarmShow?: boolean;
  /** 内网ip展示 */
  InnerIPShow?: boolean;
  /** 主机范围：0-指定 1-全部 2-专业版 3-旗舰版 4-专业+旗舰 */
  CWPScope?: number;
  /** 指定主机列表（CWPScope=0时使用） */
  InstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 排除主机列表 */
  ExcludeInstanceIDsWithAppId?: InstanceIDWithAppIdItem[];
  /** 标签ID列表 */
  TagIDs?: string[];
  /** 容器范围：0-指定集群 1-全部集群 */
  TCSSScope?: number;
  /** 指定集群列表（TCSSScope=0时使用） */
  ClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
  /** 排除集群列表 */
  ExcludeClusterIDsWithAppId?: ClusterIDWithAppIdItem[];
}

declare interface ModifyReverseShellSystemPolicyConfigResponse {
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

declare interface ModifyRiskScanCronConfigRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 计划开启状态 */
  CronStatus?: number;
  /** 计划表达式 */
  CronPlanContent?: string;
  /** 新增规则是否自动执行 */
  RuleAutoEnable?: boolean;
  /** 时区 */
  ScanPlanTimezone?: string;
  /** 增量资产开启风险扫描开关 */
  IncrementAssetScanRisk?: boolean;
}

declare interface ModifyRiskScanCronConfigResponse {
  /** 操作返回 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityScoreRuleRequest {
  /** 完整规则列表，必须包含所有维度、子项、等级的规则 */
  Rules: ModifyRuleItem[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ModifySecurityScoreRuleResponse {
  /** 修改后的完整规则列表 */
  Rules?: ScoreRuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyShareUserCSPMRequest {
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 增加共享账号 */
  SharedAppIDList?: number[];
}

declare interface ModifyShareUserCSPMResponse {
  /** 0-成功，1-失败 */
  Result?: number;
  /** 成功或失败信息 */
  Msg?: string;
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

declare interface ModifyVulScanPeriodicRequest {
  /** 周期扫描开关（0-关闭, 1-开启） */
  Status: number;
  /** 漏洞类型枚举值：LINUX： Linux软件漏洞WINDOWS： Windows系统补丁WEB_CMS： Web-CMS漏洞APPLICATION： 应用漏洞EMERGENCY： 应急漏洞 */
  VulCategory: string[];
  /** 漏洞等级枚举值：LOW： 低危MEDIUM： 中危HIGH： 高危CRITICAL： 严重 */
  Level: string[];
  /** 扫描方式（VersionCompare: 版本对比, POC: POC检测, VersionComparePOC: 版本对比+POC检测） */
  Method: string;
  /** 开始时间（09:00:00） */
  StartTime: string;
  /** 结束时间（18:00:00） */
  EndTime: string;
  /** 资产范围（0-全部资产，1-自选资产，2-剔除资产，3-自动资产匹配） */
  AssetRange: number;
  /** 周期扫描类型枚举值：1： 每天2： 每周3： 每月 */
  CycleType: number;
  /** 扫描超时时长单位：秒 */
  Timeout: number;
  /** 周期值取值范围：[1, 31]单位：周几或者每月几号 */
  CycleValue?: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 资产列表（instance_id列表） */
  AssetList?: string[];
  /** 是否运行被同步配置 0-不允许，1-允许 */
  AllowSync?: number;
  /** 管理员账号是否开启了自动同步配置开关 0-关闭，1-开启 */
  EnableSync?: number;
  /** 配置同步给哪些账号appid */
  SyncTo?: number[];
  /** 标签ID */
  TagIds?: number[];
}

declare interface ModifyVulScanPeriodicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVulWhitelistConfigRequest {
  /** id列表 */
  Id?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 备注 */
  Remark?: string;
  /** 资产范围枚举值：0： 全部资产1： 自选资产2： 全选剔除资产 */
  AssetRange?: number;
  /** 资产列表（Quuid列表） */
  AssetList?: string[];
}

declare interface ModifyVulWhitelistConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVulWhitelistSwitchRequest {
  /** id列表 */
  Id?: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 策略开关枚举值：0： 关闭1： 开启 */
  Switch?: number;
}

declare interface ModifyVulWhitelistSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebhookPolicyRequest {
  /** 策略名称入参限制：长度 1-20 个字符，租户内唯一 */
  Name: string;
  /** 启用状态枚举值：ON：启用OFF：禁用 */
  Status: string;
  /** 通知项列表入参限制：至少 1 项，Module/SubModule 必须为 DescribeWebhookNotifyItemTree 返回的合法组合 */
  NotifyItems: WebhookNotifyItem[];
  /** 通知资产范围 */
  AssetScope: WebhookAssetScope;
  /** 接收格式枚举值：TEXT：文本格式JSON：JSON 格式 */
  ReceiveFormat: string;
  /** 接收机器人 ID 列表入参限制：至少 1 个，最多 50 个 */
  ReceiverIDList: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 策略 ID。大于 0 表示修改；等于 0 或不传表示新增默认值：0 */
  ID?: number;
  /** 推送语言枚举值：zh：中文en：英文默认值：国内站默认 zh，国际站默认 en */
  MsgLanguage?: string;
  /** 自定义透传字段列表入参限制：EnableCustomFields=true 时必填，最多 20 个 */
  CustomFields?: WebhookCustomField[];
}

declare interface ModifyWebhookPolicyResponse {
  /** 新增或被修改的策略 ID */
  ID?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebhookPolicyStatusRequest {
  /** 策略 ID */
  ID: number;
  /** 目标状态枚举值：ON：启用OFF：禁用 */
  Status: string;
}

declare interface ModifyWebhookPolicyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebhookReceiverRequest {
  /** 机器人名称入参限制：长度 1-20 个字符，租户内唯一 */
  Name: string;
  /** 机器人类型枚举值：WEBHOOK：webhook 类型SCF：云函数类型 */
  Type: string;
  /** 机器人 ID。大于 0 表示修改已有记录；等于 0 或不传表示新增默认值：0 */
  ID?: number;
  /** Webhook 地址入参限制：Type=WEBHOOK 时必填，长度 1-2048，必须为合法 http(s) URL，且不允许内网地址 */
  WebhookAddr?: string;
  /** 云函数地域，例如 ap-guangzhou入参限制：Type=SCF 时必填 */
  SCFRegion?: string;
  /** 云函数命名空间入参限制：Type=SCF 时必填取值参考：通过 DescribeSCFNamespaceList 接口获取 */
  Namespace?: string;
  /** 云函数名称入参限制：Type=SCF 时必填取值参考：通过 DescribeSCFFunctionList 接口获取 */
  FunctionName?: string;
  /** 云函数版本入参限制：Type=SCF 时必填，例如 $LATEST取值参考：通过 DescribeSCFFunctionVersionList 接口获取 */
  FunctionVersion?: string;
  /** 云函数别名入参限制：Type=SCF 时必填，例如 $DEFAULT取值参考：通过 DescribeSCFAliasList 接口获取 */
  Alias?: string;
}

declare interface ModifyWebhookReceiverResponse {
  /** 新增或被修改的机器人 ID */
  ID?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OperateRiskRequest {
  /** 风险规则ID */
  RiskRuleId: string;
  /** 风险ID集合 */
  RiskIdList: number[];
  /** 操作类型 */
  OperationType: string;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 风险忽略原因 */
  Reason?: string;
}

declare interface OperateRiskResponse {
  /** 风险操作返回信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OperateRiskRulePolicyRequest {
  /** 启用或者禁用 */
  OperateType: string;
  /** 风险规则ID集合 */
  RuleIDs?: string[];
  /** 是否选择全部 */
  CheckAll?: boolean;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 用户AppID */
  UserAppID?: number;
}

declare interface OperateRiskRulePolicyResponse {
  /** 自定义风险规则返回信息 */
  Message?: string;
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

declare interface ScanBaselineAssetItemListRequest {
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  PolicyType: string;
  /** 目标基线策略 ID，必须大于 0。 */
  PolicyID: number;
  /** 基线系统父分类 ID。 */
  ParentCategoryID: number;
  /** 要重新扫描的检测项 ID 列表，仅对该资产生效。 */
  ItemIDList: number[];
  /** 目标资产 ID（AssetType=HOST 时为 InstanceID，=CLUSTER 时为集群 ID）。 */
  AssetID: string;
  /** 基线子分类 ID。 */
  CategoryID?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 命中资产的资产类型。取值：HOST：主机CLUSTER：集群POD：PodCONTAINER：容器IMAGE：镜像 */
  AssetType?: string;
}

declare interface ScanBaselineAssetItemListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanBaselineItemListRequest {
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  PolicyType: string;
  /** 目标基线策略 ID，必须大于 0。 */
  PolicyID: number;
  /** 基线系统父分类 ID。 */
  ParentCategoryID: number;
  /** 要重新扫描的检测项 ID 列表，不可为空且元素不可为 0。 */
  ItemIDList: number[];
  /** 基线子分类 ID。 */
  CategoryID?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ScanBaselineItemListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanBaselinePolicyListRequest {
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  PolicyType: string;
  /** 待重新扫描的基线策略 ID 列表，不可为空且元素不可为 0。 */
  PolicyIDList: number[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ScanBaselinePolicyListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanBaselineRiskListRequest {
  /** 基线策略类型。取值：SYSTEM：系统策略（CSIP 内置）SELF：用户自定义策略 */
  PolicyType: string;
  /** 目标基线策略 ID，必须大于 0。 */
  PolicyID: number;
  /** 基线系统父分类 ID。 */
  ParentCategoryID: number;
  /** 待重新扫描的风险记录 RiskID 列表，不可为空且元素不可为空字符串。 */
  RiskIDList: string[];
  /** 检测项ID */
  ItemID: number;
  /** 基线子分类 ID。 */
  CategoryID?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface ScanBaselineRiskListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanCSIPTaskAgainRequest {
  /** 扫描任务ID */
  TaskId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 限定本次重扫的目标主机列表；为空时取主表对应子表的全量 实例ID；长度上限 1000 */
  InstanceIDList?: string[];
  /** 扫描超时时长（秒），可选。非零时更新一键扫描超时配置并同步更新子表 timeout 字段。上限 7200 秒（2小时），超出返回 InvalidParameter。 */
  TimeoutPeriod?: number;
}

declare interface ScanCSIPTaskAgainResponse {
  /** 本次实际触发重扫的机器数（= 状态白名单过滤后的候选机器数）单位：个 */
  SuccessCount?: number;
  /** 原任务 ID（与入参一致；CWP 原版同样返回原 ID 而非新 ID，重扫为原地复用） */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanEDRTaskAgainRequest {
  /** 原任务ID */
  TaskId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 主机Quuid或ContainerID（详情页单资产重扫时传，为空则全量重扫） */
  AssetId?: string;
}

declare interface ScanEDRTaskAgainResponse {
  /** 新建任务的TaskId */
  NewTaskId?: number;
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

declare interface StartOrModifyPreventUninstallRequest {
  /** 操作来源 0 主机页面 1 客户端设置页面 */
  From: number;
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 正选的quuid集合 */
  IncludeQuuid?: string[];
  /** 反选的quuid集合 */
  ExcludeQuuid?: string[];
}

declare interface StartOrModifyPreventUninstallResponse {
  /** 失败机器列表 */
  FailList?: ModifyLoginTypeFailInfo[];
  /** 开启失败的机器数 */
  FailedHostCount?: number;
  /** 任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartOrModifyProcessDaemonRequest {
  /** 操作来源 0 主机页面 1 客户端设置页面 */
  From: number;
  /** 开启范围 0 自选主机 1 全部主机 */
  Scope: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 正选的quuid集合 */
  IncludeQuuid?: string[];
  /** 反选的quuid集合 */
  ExcludeQuuid?: string[];
}

declare interface StartOrModifyProcessDaemonResponse {
  /** 开启失败的机器数 */
  FailedHostCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopBaselineScanTaskRequest {
  /** 要停止的扫描主任务 ID，必须大于 0。 */
  TaskID: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface StopBaselineScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCSIPManualMalwareScanRequest {
  /** 任务ID */
  TaskId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface StopCSIPManualMalwareScanResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopEDRScanTaskRequest {
  /** 任务ID */
  TaskId: number;
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface StopEDRScanTaskResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopPreventUninstallRequest {
  /** 是否关闭全局 0 否 1 是 */
  StopGlobal: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 不是全局的情况下关闭的quuid集合 */
  Quuid?: string[];
}

declare interface StopPreventUninstallResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopProcessDaemonRequest {
  /** 是否关闭全局 0 否 1 是 */
  StopGlobal: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 不是全局的情况下关闭的quuid集合 */
  Quuid?: string[];
}

declare interface StopProcessDaemonResponse {
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

declare interface StopVulScanTaskRequest {
  /** 任务id */
  Id?: number;
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 停止扫描的资产instance_id */
  AssetList?: string[];
}

declare interface StopVulScanTaskResponse {
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

declare interface TestWebhookReceiverRequest {
  /** 机器人配置ID */
  ID: number;
  /** 自定义测试内容（明文）。不传时使用系统默认测试样例入参限制：长度 0-2048 */
  Data?: string;
}

declare interface TestWebhookReceiverResponse {
  /** 测试结果（需base64解码得到明文） */
  RespData?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UninstallClusterAgentRequest {
  /** 集群CA证书MD5列表（单/批量统一）用途：指定需要卸载容器安全Agent的集群取值参考：通过 DescribeClusterListV2 接口返回项中的 ClusterCaMD5 字段获取说明：capi 层不对该字段做存在性/类型校验，按 cluster_ca_md5 透传到接入侧 ClusterUninstall RPC */
  ClusterCaMD5List: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
}

declare interface UninstallClusterAgentResponse {
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

declare interface UpdateClusterOwnerRequest {
  /** 集群ClusterCaMD5列表 */
  ClusterCaMD5List: string[];
  /** 集团账号的成员id */
  MemberId?: string[];
  /** 负责人名称 */
  OwnerName?: string;
}

declare interface UpdateClusterOwnerResponse {
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
  /** 接入AI助手SMTP邮箱信息 {@link AccessAIAnalysisSMTPRequest} {@link AccessAIAnalysisSMTPResponse} */
  AccessAIAnalysisSMTP(data?: AccessAIAnalysisSMTPRequest, config?: AxiosRequestConfig): AxiosPromise<AccessAIAnalysisSMTPResponse>;
  /** 添加资产管理员 {@link AddDspmAssetManagerRequest} {@link AddDspmAssetManagerResponse} */
  AddDspmAssetManager(data: AddDspmAssetManagerRequest, config?: AxiosRequestConfig): AxiosPromise<AddDspmAssetManagerResponse>;
  /** 批量添加异地登录白名单 {@link AddLoginWhiteListsRequest} {@link AddLoginWhiteListsResponse} */
  AddLoginWhiteLists(data: AddLoginWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<AddLoginWhiteListsResponse>;
  /** csip角色授权绑定接口 {@link AddNewBindRoleUserRequest} {@link AddNewBindRoleUserResponse} */
  AddNewBindRoleUser(data?: AddNewBindRoleUserRequest, config?: AxiosRequestConfig): AxiosPromise<AddNewBindRoleUserResponse>;
  /** 添加漏洞白名单 {@link AddVulWhitelistRequest} {@link AddVulWhitelistResponse} */
  AddVulWhitelist(data?: AddVulWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddVulWhitelistResponse>;
  /** 批量更改基线策略 {@link BatchModifyBaselinePolicyRequest} {@link BatchModifyBaselinePolicyResponse} */
  BatchModifyBaselinePolicy(data: BatchModifyBaselinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyBaselinePolicyResponse>;
  /** 绑定集群负责人 {@link BindClusterOwnerRequest} {@link BindClusterOwnerResponse} */
  BindClusterOwner(data: BindClusterOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<BindClusterOwnerResponse>;
  /** 取消忽略EDR多行为告警 {@link CancelEdrAlertIgnoreRequest} {@link CancelEdrAlertIgnoreResponse} */
  CancelEdrAlertIgnore(data: CancelEdrAlertIgnoreRequest, config?: AxiosRequestConfig): AxiosPromise<CancelEdrAlertIgnoreResponse>;
  /** 判断用户是否购买旗舰版(适用于主机资产) {@link CheckCWPExposePathPermissionRequest} {@link CheckCWPExposePathPermissionResponse} */
  CheckCWPExposePathPermission(data?: CheckCWPExposePathPermissionRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCWPExposePathPermissionResponse>;
  /** 判断当前用户是否购买旗舰版 {@link CheckIsUltimateVersionRequest} {@link CheckIsUltimateVersionResponse} */
  CheckIsUltimateVersion(data?: CheckIsUltimateVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIsUltimateVersionResponse>;
  /** 风险验证 {@link CheckRiskRequest} {@link CheckRiskResponse} */
  CheckRisk(data: CheckRiskRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRiskResponse>;
  /** 复制基线策略 {@link CopyBaselinePolicyRequest} {@link CopyBaselinePolicyResponse} */
  CopyBaselinePolicy(data: CopyBaselinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CopyBaselinePolicyResponse>;
  /** 创建AI 定时任务 {@link CreateAIScheduleRequest} {@link CreateAIScheduleResponse} */
  CreateAISchedule(data?: CreateAIScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIScheduleResponse>;
  /** 发起访问密钥的检测任务 {@link CreateAccessKeyCheckTaskRequest} {@link CreateAccessKeyCheckTaskResponse} */
  CreateAccessKeyCheckTask(data?: CreateAccessKeyCheckTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessKeyCheckTaskResponse>;
  /** 创建访问密钥的资产同步任务 {@link CreateAccessKeySyncTaskRequest} {@link CreateAccessKeySyncTaskResponse} */
  CreateAccessKeySyncTask(data?: CreateAccessKeySyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessKeySyncTaskResponse>;
  /** 创建全部资产导出任务 {@link CreateAllAssetsExportJobRequest} {@link CreateAllAssetsExportJobResponse} */
  CreateAllAssetsExportJob(data?: CreateAllAssetsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAllAssetsExportJobResponse>;
  /** 创建资产搜索视图 {@link CreateAssetFilterViewRequest} {@link CreateAssetFilterViewResponse} */
  CreateAssetFilterView(data: CreateAssetFilterViewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetFilterViewResponse>;
  /** 创建主机进程列表导出任务 {@link CreateAssetProcessExportJobRequest} {@link CreateAssetProcessExportJobResponse} */
  CreateAssetProcessExportJob(data?: CreateAssetProcessExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetProcessExportJobResponse>;
  /** 创建资产同步任务 {@link CreateAssetSyncTaskRequest} {@link CreateAssetSyncTaskResponse} */
  CreateAssetSyncTask(data?: CreateAssetSyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetSyncTaskResponse>;
  /** 创建资产标签 {@link CreateAssetTagRequest} {@link CreateAssetTagResponse} */
  CreateAssetTag(data: CreateAssetTagRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetTagResponse>;
  /** 创建资产视角下风险列表导出任务 {@link CreateAssetViewRisksExportJobRequest} {@link CreateAssetViewRisksExportJobResponse} */
  CreateAssetViewRisksExportJob(data?: CreateAssetViewRisksExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetViewRisksExportJobResponse>;
  /** 创建基线聚合检测项导出任务 {@link CreateBaselineAggregatedItemExportJobRequest} {@link CreateBaselineAggregatedItemExportJobResponse} */
  CreateBaselineAggregatedItemExportJob(data: CreateBaselineAggregatedItemExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaselineAggregatedItemExportJobResponse>;
  /** 创建基线修复记录导出任务 {@link CreateBaselineFixRecordExportJobRequest} {@link CreateBaselineFixRecordExportJobResponse} */
  CreateBaselineFixRecordExportJob(data?: CreateBaselineFixRecordExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaselineFixRecordExportJobResponse>;
  /** 创建基线主任务导出任务 {@link CreateBaselineMainTaskExportJobRequest} {@link CreateBaselineMainTaskExportJobResponse} */
  CreateBaselineMainTaskExportJob(data?: CreateBaselineMainTaskExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaselineMainTaskExportJobResponse>;
  /** 创建云资源配置检测风险PDF报告导出任务 {@link CreateCFGRiskPDFReportExportJobRequest} {@link CreateCFGRiskPDFReportExportJobResponse} */
  CreateCFGRiskPDFReportExportJob(data: CreateCFGRiskPDFReportExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCFGRiskPDFReportExportJobResponse>;
  /** 创建云资源配置检测风险导出任务 {@link CreateCFGRisksExportJobRequest} {@link CreateCFGRisksExportJobResponse} */
  CreateCFGRisksExportJob(data?: CreateCFGRisksExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCFGRisksExportJobResponse>;
  /** CSIP 手动扫描创建接口 {@link CreateCSIPManualMalwareScanRequest} {@link CreateCSIPManualMalwareScanResponse} */
  CreateCSIPManualMalwareScan(data: CreateCSIPManualMalwareScanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCSIPManualMalwareScanResponse>;
  /** 创建检出项视角下风险列表导出任务 {@link CreateCheckViewRisksExportJobRequest} {@link CreateCheckViewRisksExportJobResponse} */
  CreateCheckViewRisksExportJob(data?: CreateCheckViewRisksExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCheckViewRisksExportJobResponse>;
  /** 创建云函数列表导出任务 {@link CreateCloudFunctionExportJobRequest} {@link CreateCloudFunctionExportJobResponse} */
  CreateCloudFunctionExportJob(data?: CreateCloudFunctionExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudFunctionExportJobResponse>;
  /** 创建集群资产同步任务 {@link CreateClusterAssetSyncTaskRequest} {@link CreateClusterAssetSyncTaskResponse} */
  CreateClusterAssetSyncTask(data?: CreateClusterAssetSyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterAssetSyncTaskResponse>;
  /** 创建集群容器列表导出任务 {@link CreateClusterContainerListExportJobRequest} {@link CreateClusterContainerListExportJobResponse} */
  CreateClusterContainerListExportJob(data?: CreateClusterContainerListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterContainerListExportJobResponse>;
  /** 创建集群列表导出任务 {@link CreateClusterListExportJobRequest} {@link CreateClusterListExportJobResponse} */
  CreateClusterListExportJob(data?: CreateClusterListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterListExportJobResponse>;
  /** 创建命名空间列表导出任务 {@link CreateClusterNamespaceListExportJobRequest} {@link CreateClusterNamespaceListExportJobResponse} */
  CreateClusterNamespaceListExportJob(data: CreateClusterNamespaceListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterNamespaceListExportJobResponse>;
  /** 创建节点列表导出任务 {@link CreateClusterNodeListExportJobRequest} {@link CreateClusterNodeListExportJobResponse} */
  CreateClusterNodeListExportJob(data: CreateClusterNodeListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterNodeListExportJobResponse>;
  /** 创建合规标准和条款聚合风险导出任务 {@link CreateComplianceRiskExportJobRequest} {@link CreateComplianceRiskExportJobResponse} */
  CreateComplianceRiskExportJob(data: CreateComplianceRiskExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateComplianceRiskExportJobResponse>;
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
  CreateDspmWhitelistStrategy(data?: CreateDspmWhitelistStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDspmWhitelistStrategyResponse>;
  /** 创建动态资产导出任务 {@link CreateDynamicAssetsExportJobRequest} {@link CreateDynamicAssetsExportJobResponse} */
  CreateDynamicAssetsExportJob(data: CreateDynamicAssetsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDynamicAssetsExportJobResponse>;
  /** 创建手动EDR扫描任务 {@link CreateEDRManualScanRequest} {@link CreateEDRManualScanResponse} */
  CreateEDRManualScan(data: CreateEDRManualScanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEDRManualScanResponse>;
  /** 创建EDR告警导出任务 {@link CreateEdrAlertExportJobRequest} {@link CreateEdrAlertExportJobResponse} */
  CreateEdrAlertExportJob(data?: CreateEdrAlertExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdrAlertExportJobResponse>;
  /** 创建EDR告警普通导出任务接口 {@link CreateEdrLessAlertExportJobRequest} {@link CreateEdrLessAlertExportJobResponse} */
  CreateEdrLessAlertExportJob(data?: CreateEdrLessAlertExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdrLessAlertExportJobResponse>;
  /** 云边界自动打标-新建规则 {@link CreateExposureAutoTagRuleRequest} {@link CreateExposureAutoTagRuleResponse} */
  CreateExposureAutoTagRule(data?: CreateExposureAutoTagRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExposureAutoTagRuleResponse>;
  /** 创建暴露资产导出任务 {@link CreateExposuresExportJobRequest} {@link CreateExposuresExportJobResponse} */
  CreateExposuresExportJob(data?: CreateExposuresExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExposuresExportJobResponse>;
  /** 创建高危基线风险列表导出任务 {@link CreateHighBaseLineRisksExportJobRequest} {@link CreateHighBaseLineRisksExportJobResponse} */
  CreateHighBaseLineRisksExportJob(data: CreateHighBaseLineRisksExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHighBaseLineRisksExportJobResponse>;
  /** 创建主机漏洞列表导出任务 {@link CreateHostVulExportJobRequest} {@link CreateHostVulExportJobResponse} */
  CreateHostVulExportJob(data: CreateHostVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostVulExportJobResponse>;
  /** 创建IaC检测接入Token {@link CreateIaCAccessTokenRequest} {@link CreateIaCAccessTokenResponse} */
  CreateIaCAccessToken(data: CreateIaCAccessTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIaCAccessTokenResponse>;
  /** 创建IaC检测文件导出任务 {@link CreateIaCFileExportJobRequest} {@link CreateIaCFileExportJobResponse} */
  CreateIaCFileExportJob(data?: CreateIaCFileExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIaCFileExportJobResponse>;
  /** 创建IaC检测文件重新扫描任务 {@link CreateIaCFileReScanTaskRequest} {@link CreateIaCFileReScanTaskResponse} */
  CreateIaCFileReScanTask(data: CreateIaCFileReScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIaCFileReScanTaskResponse>;
  /** 创建Pod关联容器列表导出任务 {@link CreatePodContainerListExportJobRequest} {@link CreatePodContainerListExportJobResponse} */
  CreatePodContainerListExportJob(data?: CreatePodContainerListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePodContainerListExportJobResponse>;
  /** 创建Pod关联服务列表导出任务 {@link CreatePodServiceListExportJobRequest} {@link CreatePodServiceListExportJobResponse} */
  CreatePodServiceListExportJob(data?: CreatePodServiceListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePodServiceListExportJobResponse>;
  /** 创建公网资产导出任务 {@link CreatePublicAssetsExportJobRequest} {@link CreatePublicAssetsExportJobResponse} */
  CreatePublicAssetsExportJob(data?: CreatePublicAssetsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePublicAssetsExportJobResponse>;
  /** 创建风险中心扫描任务 {@link CreateRiskCenterScanTaskRequest} {@link CreateRiskCenterScanTaskResponse} */
  CreateRiskCenterScanTask(data: CreateRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRiskCenterScanTaskResponse>;
  /** 创建云资源配置风险详情导出任务 {@link CreateRiskDetailExportJobRequest} {@link CreateRiskDetailExportJobResponse} */
  CreateRiskDetailExportJob(data: CreateRiskDetailExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRiskDetailExportJobResponse>;
  /** 创建暴露面扫描结果导出任务 {@link CreateScanStatisticExportJobRequest} {@link CreateScanStatisticExportJobResponse} */
  CreateScanStatisticExportJob(data?: CreateScanStatisticExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScanStatisticExportJobResponse>;
  /** 创建立即检测任务 {@link CreateScanTaskRequest} {@link CreateScanTaskResponse} */
  CreateScanTask(data?: CreateScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScanTaskResponse>;
  /** 上传 Skill 触发安全检测 {@link CreateSkillScanRequest} {@link CreateSkillScanResponse} */
  CreateSkillScan(data: CreateSkillScanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSkillScanResponse>;
  /** 重试漏洞修复任务 {@link CreateVulFixRetryTaskRequest} {@link CreateVulFixRetryTaskResponse} */
  CreateVulFixRetryTask(data: CreateVulFixRetryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulFixRetryTaskResponse>;
  /** 提交漏洞修复任务 {@link CreateVulFixTaskRequest} {@link CreateVulFixTaskResponse} */
  CreateVulFixTask(data: CreateVulFixTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulFixTaskResponse>;
  /** 创建已修复漏洞列表导出任务 {@link CreateVulFixedExportJobRequest} {@link CreateVulFixedExportJobResponse} */
  CreateVulFixedExportJob(data?: CreateVulFixedExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulFixedExportJobResponse>;
  /** 创建漏洞重新扫描 {@link CreateVulReScanRequest} {@link CreateVulReScanResponse} */
  CreateVulReScan(data?: CreateVulReScanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulReScanResponse>;
  /** 创建漏洞风险列表导出任务 {@link CreateVulRisksExportJobRequest} {@link CreateVulRisksExportJobResponse} */
  CreateVulRisksExportJob(data: CreateVulRisksExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulRisksExportJobResponse>;
  /** 创建漏洞扫描（一键扫描） {@link CreateVulScanManualRequest} {@link CreateVulScanManualResponse} */
  CreateVulScanManual(data: CreateVulScanManualRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulScanManualResponse>;
  /** 删除AI助手的SMTP邮箱接入信息 {@link DeleteAIAnalysisSMTPAccessRequest} {@link DeleteAIAnalysisSMTPAccessResponse} */
  DeleteAIAnalysisSMTPAccess(data?: DeleteAIAnalysisSMTPAccessRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAIAnalysisSMTPAccessResponse>;
  /** 删除AI 定时任务 {@link DeleteAIScheduleRequest} {@link DeleteAIScheduleResponse} */
  DeleteAISchedule(data?: DeleteAIScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAIScheduleResponse>;
  /** 删除用户创建的资产搜索视图 {@link DeleteAssetFilterViewRequest} {@link DeleteAssetFilterViewResponse} */
  DeleteAssetFilterView(data: DeleteAssetFilterViewRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAssetFilterViewResponse>;
  /** 删除资产标签 {@link DeleteAssetTagRequest} {@link DeleteAssetTagResponse} */
  DeleteAssetTag(data: DeleteAssetTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAssetTagResponse>;
  /** 删除自定义基线策略 {@link DeleteBaselineSelfDefinedPolicyListRequest} {@link DeleteBaselineSelfDefinedPolicyListResponse} */
  DeleteBaselineSelfDefinedPolicyList(data: DeleteBaselineSelfDefinedPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselineSelfDefinedPolicyListResponse>;
  /** CSIP 手动扫描任务删除接口 {@link DeleteCSIPMalwareScanTaskRequest} {@link DeleteCSIPMalwareScanTaskResponse} */
  DeleteCSIPMalwareScanTask(data: DeleteCSIPMalwareScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCSIPMalwareScanTaskResponse>;
  /** 删除集群 {@link DeleteClusterRequest} {@link DeleteClusterResponse} */
  DeleteCluster(data?: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
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
  /** 删除EDR策略 {@link DeleteEDRRulesRequest} {@link DeleteEDRRulesResponse} */
  DeleteEDRRules(data: DeleteEDRRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEDRRulesResponse>;
  /** 删除EDR扫描任务 {@link DeleteEDRScanTaskRequest} {@link DeleteEDRScanTaskResponse} */
  DeleteEDRScanTask(data: DeleteEDRScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEDRScanTaskResponse>;
  /** 删除EDR日志采集路径配置 {@link DeleteEdrLogCollectPathsRequest} {@link DeleteEdrLogCollectPathsResponse} */
  DeleteEdrLogCollectPaths(data: DeleteEdrLogCollectPathsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdrLogCollectPathsResponse>;
  /** 云边界自动打标-规则删除 {@link DeleteExposureAutoTagRuleRequest} {@link DeleteExposureAutoTagRuleResponse} */
  DeleteExposureAutoTagRule(data: DeleteExposureAutoTagRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteExposureAutoTagRuleResponse>;
  /** 删除IaC检测接入Token {@link DeleteIaCAccessTokenRequest} {@link DeleteIaCAccessTokenResponse} */
  DeleteIaCAccessToken(data: DeleteIaCAccessTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIaCAccessTokenResponse>;
  /** 删除IaC检测文件 {@link DeleteIaCFileRequest} {@link DeleteIaCFileResponse} */
  DeleteIaCFile(data: DeleteIaCFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIaCFileResponse>;
  /** 删除异地登录白名单规则 {@link DeleteLoginWhiteListRequest} {@link DeleteLoginWhiteListResponse} */
  DeleteLoginWhiteList(data: DeleteLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoginWhiteListResponse>;
  /** 删除机器清理记录 {@link DeleteMachineClearHistoryRequest} {@link DeleteMachineClearHistoryResponse} */
  DeleteMachineClearHistory(data: DeleteMachineClearHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineClearHistoryResponse>;
  /** 删除风险中心扫描任务 {@link DeleteRiskScanTaskRequest} {@link DeleteRiskScanTaskResponse} */
  DeleteRiskScanTask(data: DeleteRiskScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskScanTaskResponse>;
  /** 删除漏洞白名单 {@link DeleteVulWhitelistRequest} {@link DeleteVulWhitelistResponse} */
  DeleteVulWhitelist(data?: DeleteVulWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVulWhitelistResponse>;
  /** 批量删除通知策略 {@link DeleteWebhookPoliciesRequest} {@link DeleteWebhookPoliciesResponse} */
  DeleteWebhookPolicies(data: DeleteWebhookPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebhookPoliciesResponse>;
  /** 批量删除接收机器人 {@link DeleteWebhookReceiversRequest} {@link DeleteWebhookReceiversResponse} */
  DeleteWebhookReceivers(data: DeleteWebhookReceiversRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebhookReceiversResponse>;
  /** 获取 AI Agent 资产列表 {@link DescribeAIAgentAssetListRequest} {@link DescribeAIAgentAssetListResponse} */
  DescribeAIAgentAssetList(data?: DescribeAIAgentAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAgentAssetListResponse>;
  /** 获取AI分析文件下载链接 {@link DescribeAIAnalysisFileDownloadURLRequest} {@link DescribeAIAnalysisFileDownloadURLResponse} */
  DescribeAIAnalysisFileDownloadURL(data?: DescribeAIAnalysisFileDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAnalysisFileDownloadURLResponse>;
  /** 获取AI分析历史记录 {@link DescribeAIAnalysisHistoryRequest} {@link DescribeAIAnalysisHistoryResponse} */
  DescribeAIAnalysisHistory(data?: DescribeAIAnalysisHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAnalysisHistoryResponse>;
  /** 查询AI分析追问推荐问题 {@link DescribeAIAnalysisRecommendQuestionsRequest} {@link DescribeAIAnalysisRecommendQuestionsResponse} */
  DescribeAIAnalysisRecommendQuestions(data: DescribeAIAnalysisRecommendQuestionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAnalysisRecommendQuestionsResponse>;
  /** 获取AI分析机器人接入信息 {@link DescribeAIAnalysisRobotInfoRequest} {@link DescribeAIAnalysisRobotInfoResponse} */
  DescribeAIAnalysisRobotInfo(data?: DescribeAIAnalysisRobotInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAnalysisRobotInfoResponse>;
  /** 查询AI助手SMTP接入邮箱信息 {@link DescribeAIAnalysisSMTPRequest} {@link DescribeAIAnalysisSMTPResponse} */
  DescribeAIAnalysisSMTP(data?: DescribeAIAnalysisSMTPRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAnalysisSMTPResponse>;
  /** 查询AI-Link智链引擎配置 {@link DescribeAILinkSettingRequest} {@link DescribeAILinkSettingResponse} */
  DescribeAILinkSetting(data?: DescribeAILinkSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAILinkSettingResponse>;
  /** 查询AI 定时任务列表 {@link DescribeAIScheduleListRequest} {@link DescribeAIScheduleListResponse} */
  DescribeAIScheduleList(data?: DescribeAIScheduleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIScheduleListResponse>;
  /** 查询AI 定时任务触发计划 {@link DescribeAISchedulePlanListRequest} {@link DescribeAISchedulePlanListResponse} */
  DescribeAISchedulePlanList(data?: DescribeAISchedulePlanListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAISchedulePlanListResponse>;
  /** 查询AI 定时任务统计信息 {@link DescribeAIScheduleStatsRequest} {@link DescribeAIScheduleStatsResponse} */
  DescribeAIScheduleStats(data?: DescribeAIScheduleStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIScheduleStatsResponse>;
  /** 查询AI 定时任务执行详情 {@link DescribeAIScheduleTaskDetailRequest} {@link DescribeAIScheduleTaskDetailResponse} */
  DescribeAIScheduleTaskDetail(data?: DescribeAIScheduleTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIScheduleTaskDetailResponse>;
  /** 查询AI 定时任务执行列表 {@link DescribeAIScheduleTaskListRequest} {@link DescribeAIScheduleTaskListResponse} */
  DescribeAIScheduleTaskList(data?: DescribeAIScheduleTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIScheduleTaskListResponse>;
  /** 获取访问密钥告警AI分析详情 {@link DescribeAKAnalysisDetailRequest} {@link DescribeAKAnalysisDetailResponse} */
  DescribeAKAnalysisDetail(data: DescribeAKAnalysisDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAKAnalysisDetailResponse>;
  /** 判断指定AppId是否灰度用户 {@link DescribeAbTestUserRequest} {@link DescribeAbTestUserResponse} */
  DescribeAbTestUser(data: DescribeAbTestUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbTestUserResponse>;
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
  /** 查询客户端配置的设置 {@link DescribeAgentConfigSettingRequest} {@link DescribeAgentConfigSettingResponse} */
  DescribeAgentConfigSetting(data?: DescribeAgentConfigSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentConfigSettingResponse>;
  /** 查询agent运行配置 {@link DescribeAgentRunModeRequest} {@link DescribeAgentRunModeResponse} */
  DescribeAgentRunMode(data?: DescribeAgentRunModeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentRunModeResponse>;
  /** 查询客户端运行策略 {@link DescribeAgentRunPolicyRequest} {@link DescribeAgentRunPolicyResponse} */
  DescribeAgentRunPolicy(data?: DescribeAgentRunPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentRunPolicyResponse>;
  /** 查询全量告警列表 {@link DescribeAlertListRequest} {@link DescribeAlertListResponse} */
  DescribeAlertList(data: DescribeAlertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlertListResponse>;
  /** 资产详情 {@link DescribeAssetDetailRequest} {@link DescribeAssetDetailResponse} */
  DescribeAssetDetail(data: DescribeAssetDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDetailResponse>;
  /** 资产搜索视图列表 {@link DescribeAssetFilterViewsRequest} {@link DescribeAssetFilterViewsResponse} */
  DescribeAssetFilterViews(data?: DescribeAssetFilterViewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetFilterViewsResponse>;
  /** 资产基本信息 {@link DescribeAssetInfoRequest} {@link DescribeAssetInfoResponse} */
  DescribeAssetInfo(data: DescribeAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetInfoResponse>;
  /** 资产最近同步时间 {@link DescribeAssetLastSyncTimeRequest} {@link DescribeAssetLastSyncTimeResponse} */
  DescribeAssetLastSyncTime(data?: DescribeAssetLastSyncTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetLastSyncTimeResponse>;
  /** 资产概览 {@link DescribeAssetOverviewRequest} {@link DescribeAssetOverviewResponse} */
  DescribeAssetOverview(data?: DescribeAssetOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetOverviewResponse>;
  /** 查询云边界分析-暴露路径下主机节点的进程列表 {@link DescribeAssetProcessListRequest} {@link DescribeAssetProcessListResponse} */
  DescribeAssetProcessList(data?: DescribeAssetProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessListResponse>;
  /** 资产风险详情 {@link DescribeAssetRiskDetailRequest} {@link DescribeAssetRiskDetailResponse} */
  DescribeAssetRiskDetail(data: DescribeAssetRiskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetRiskDetailResponse>;
  /** 资产视角下的云资源配置风险 {@link DescribeAssetRiskListRequest} {@link DescribeAssetRiskListResponse} */
  DescribeAssetRiskList(data?: DescribeAssetRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetRiskListResponse>;
  /** 获取资产同步任务状态 {@link DescribeAssetSyncTaskStatusRequest} {@link DescribeAssetSyncTaskStatusResponse} */
  DescribeAssetSyncTaskStatus(data: DescribeAssetSyncTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSyncTaskStatusResponse>;
  /** 获取资产标签属性 {@link DescribeAssetTagAttributesRequest} {@link DescribeAssetTagAttributesResponse} */
  DescribeAssetTagAttributes(data?: DescribeAssetTagAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetTagAttributesResponse>;
  /** 获取资产标签树 {@link DescribeAssetTagTreeRequest} {@link DescribeAssetTagTreeResponse} */
  DescribeAssetTagTree(data?: DescribeAssetTagTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetTagTreeResponse>;
  /** 全部资产标签列表 {@link DescribeAssetTagsRequest} {@link DescribeAssetTagsResponse} */
  DescribeAssetTags(data?: DescribeAssetTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetTagsResponse>;
  /** 资产树 {@link DescribeAssetTreeRequest} {@link DescribeAssetTreeResponse} */
  DescribeAssetTree(data?: DescribeAssetTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetTreeResponse>;
  /** 漏洞管理-资产视角的漏洞风险列表 {@link DescribeAssetViewVulRiskListRequest} {@link DescribeAssetViewVulRiskListResponse} */
  DescribeAssetViewVulRiskList(data?: DescribeAssetViewVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetViewVulRiskListResponse>;
  /** 查询是否绑定角色 {@link DescribeAssumeRoleRequest} {@link DescribeAssumeRoleResponse} */
  DescribeAssumeRole(data?: DescribeAssumeRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssumeRoleResponse>;
  /** 获取爆破阻断模式 {@link DescribeBanModeRequest} {@link DescribeBanModeResponse} */
  DescribeBanMode(data?: DescribeBanModeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanModeResponse>;
  /** 获取阻断按钮状态 {@link DescribeBanStatusRequest} {@link DescribeBanStatusResponse} */
  DescribeBanStatus(data?: DescribeBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanStatusResponse>;
  /** 获取基线聚合检测项列表 {@link DescribeBaselineAggregatedItemListRequest} {@link DescribeBaselineAggregatedItemListResponse} */
  DescribeBaselineAggregatedItemList(data: DescribeBaselineAggregatedItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineAggregatedItemListResponse>;
  /** 获取基线聚合策略结果列表 {@link DescribeBaselineAggregatedPolicyListRequest} {@link DescribeBaselineAggregatedPolicyListResponse} */
  DescribeBaselineAggregatedPolicyList(data?: DescribeBaselineAggregatedPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineAggregatedPolicyListResponse>;
  /** 获取基线统计中的策略ID {@link DescribeBaselineCalculatingStatisticsPolicyIDListRequest} {@link DescribeBaselineCalculatingStatisticsPolicyIDListResponse} */
  DescribeBaselineCalculatingStatisticsPolicyIDList(data?: DescribeBaselineCalculatingStatisticsPolicyIDListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineCalculatingStatisticsPolicyIDListResponse>;
  /** 获取基线分类检测项列表 {@link DescribeBaselineCategoryItemListRequest} {@link DescribeBaselineCategoryItemListResponse} */
  DescribeBaselineCategoryItemList(data?: DescribeBaselineCategoryItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineCategoryItemListResponse>;
  /** 获取基线修复记录列表 {@link DescribeBaselineFixRecordListRequest} {@link DescribeBaselineFixRecordListResponse} */
  DescribeBaselineFixRecordList(data?: DescribeBaselineFixRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineFixRecordListResponse>;
  /** 获取基线检测项风险列表 {@link DescribeBaselineItemRiskListRequest} {@link DescribeBaselineItemRiskListResponse} */
  DescribeBaselineItemRiskList(data: DescribeBaselineItemRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemRiskListResponse>;
  /** 获取主任务检测项列表 {@link DescribeBaselineMainTaskItemListRequest} {@link DescribeBaselineMainTaskItemListResponse} */
  DescribeBaselineMainTaskItemList(data: DescribeBaselineMainTaskItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineMainTaskItemListResponse>;
  /** 获取基线主任务列表 {@link DescribeBaselineMainTaskListRequest} {@link DescribeBaselineMainTaskListResponse} */
  DescribeBaselineMainTaskList(data?: DescribeBaselineMainTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineMainTaskListResponse>;
  /** 获取基线概览数据 {@link DescribeBaselineOverviewRequest} {@link DescribeBaselineOverviewResponse} */
  DescribeBaselineOverview(data?: DescribeBaselineOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineOverviewResponse>;
  /** 获取基线策略配置的分类列表 {@link DescribeBaselinePolicyCategoryListRequest} {@link DescribeBaselinePolicyCategoryListResponse} */
  DescribeBaselinePolicyCategoryList(data: DescribeBaselinePolicyCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselinePolicyCategoryListResponse>;
  /** 获取基线策略配置的检测项列表 {@link DescribeBaselinePolicyItemListRequest} {@link DescribeBaselinePolicyItemListResponse} */
  DescribeBaselinePolicyItemList(data: DescribeBaselinePolicyItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselinePolicyItemListResponse>;
  /** 获取基线策略列表 {@link DescribeBaselinePolicyListRequest} {@link DescribeBaselinePolicyListResponse} */
  DescribeBaselinePolicyList(data: DescribeBaselinePolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselinePolicyListResponse>;
  /** 获取策略名字存在的用户ID列表 {@link DescribeBaselinePolicyNameExistAppidListRequest} {@link DescribeBaselinePolicyNameExistAppidListResponse} */
  DescribeBaselinePolicyNameExistAppidList(data: DescribeBaselinePolicyNameExistAppidListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselinePolicyNameExistAppidListResponse>;
  /** 获取基线子任务列表 {@link DescribeBaselineSubTaskListRequest} {@link DescribeBaselineSubTaskListResponse} */
  DescribeBaselineSubTaskList(data: DescribeBaselineSubTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineSubTaskListResponse>;
  /** 获取基线同步配置 {@link DescribeBaselineSyncConfRequest} {@link DescribeBaselineSyncConfResponse} */
  DescribeBaselineSyncConf(data?: DescribeBaselineSyncConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineSyncConfResponse>;
  /** 获取基线系统分类列表 {@link DescribeBaselineSystemCategoryListRequest} {@link DescribeBaselineSystemCategoryListResponse} */
  DescribeBaselineSystemCategoryList(data?: DescribeBaselineSystemCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineSystemCategoryListResponse>;
  /** 获取基线用户其他配置 {@link DescribeBaselineUserOtherConfRequest} {@link DescribeBaselineUserOtherConfResponse} */
  DescribeBaselineUserOtherConf(data?: DescribeBaselineUserOtherConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineUserOtherConfResponse>;
  /** 获取基线用户弱口令配置 {@link DescribeBaselineUserWeakPasswordConfRequest} {@link DescribeBaselineUserWeakPasswordConfResponse} */
  DescribeBaselineUserWeakPasswordConf(data?: DescribeBaselineUserWeakPasswordConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineUserWeakPasswordConfResponse>;
  /** 获取爆破破解规则 {@link DescribeBruteAttackRulesRequest} {@link DescribeBruteAttackRulesResponse} */
  DescribeBruteAttackRules(data?: DescribeBruteAttackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBruteAttackRulesResponse>;
  /** 查看存储桶调用源ip列表 {@link DescribeBucketInvokeIpListRequest} {@link DescribeBucketInvokeIpListResponse} */
  DescribeBucketInvokeIpList(data: DescribeBucketInvokeIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBucketInvokeIpListResponse>;
  /** 云资源配置检查报告风险统计 {@link DescribeCFGRiskReportStatisticsRequest} {@link DescribeCFGRiskReportStatisticsResponse} */
  DescribeCFGRiskReportStatistics(data?: DescribeCFGRiskReportStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCFGRiskReportStatisticsResponse>;
  /** 云资源配置风险统计 {@link DescribeCFGRiskStatisticsRequest} {@link DescribeCFGRiskStatisticsResponse} */
  DescribeCFGRiskStatistics(data?: DescribeCFGRiskStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCFGRiskStatisticsResponse>;
  /** 云防资产中心统计数据 {@link DescribeCFWAssetStatisticsRequest} {@link DescribeCFWAssetStatisticsResponse} */
  DescribeCFWAssetStatistics(data?: DescribeCFWAssetStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCFWAssetStatisticsResponse>;
  /** 获取日志索引信息v3 {@link DescribeCLSLogIndexV3Request} {@link DescribeCLSLogIndexV3Response} */
  DescribeCLSLogIndexV3(data: DescribeCLSLogIndexV3Request, config?: AxiosRequestConfig): AxiosPromise<DescribeCLSLogIndexV3Response>;
  /** 日志分析cls日志检索v3 {@link DescribeCLSLogListV3Request} {@link DescribeCLSLogListV3Response} */
  DescribeCLSLogListV3(data: DescribeCLSLogListV3Request, config?: AxiosRequestConfig): AxiosPromise<DescribeCLSLogListV3Response>;
  /** 查询绑定任务进度 {@link DescribeCSIPLicenseBindScheduleRequest} {@link DescribeCSIPLicenseBindScheduleResponse} */
  DescribeCSIPLicenseBindSchedule(data: DescribeCSIPLicenseBindScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCSIPLicenseBindScheduleResponse>;
  /** CSIP 扫描任务主机详情接口 {@link DescribeCSIPMalwareScanTaskDetailRequest} {@link DescribeCSIPMalwareScanTaskDetailResponse} */
  DescribeCSIPMalwareScanTaskDetail(data: DescribeCSIPMalwareScanTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCSIPMalwareScanTaskDetailResponse>;
  /** CSIP 手动扫描进度查询接口 {@link DescribeCSIPMalwareScanTaskProgressRequest} {@link DescribeCSIPMalwareScanTaskProgressResponse} */
  DescribeCSIPMalwareScanTaskProgress(data?: DescribeCSIPMalwareScanTaskProgressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCSIPMalwareScanTaskProgressResponse>;
  /** 资产风险概览统计接口 {@link DescribeCSIPRiskStatisticsRequest} {@link DescribeCSIPRiskStatisticsResponse} */
  DescribeCSIPRiskStatistics(data?: DescribeCSIPRiskStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCSIPRiskStatisticsResponse>;
  /** cvm详情 {@link DescribeCVMAssetInfoRequest} {@link DescribeCVMAssetInfoResponse} */
  DescribeCVMAssetInfo(data: DescribeCVMAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetInfoResponse>;
  /** cvm列表 {@link DescribeCVMAssetsRequest} {@link DescribeCVMAssetsResponse} */
  DescribeCVMAssets(data?: DescribeCVMAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetsResponse>;
  /** 查询云边界分析路径节点(主机资产) {@link DescribeCWPExposePathRequest} {@link DescribeCWPExposePathResponse} */
  DescribeCWPExposePath(data: DescribeCWPExposePathRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPExposePathResponse>;
  /** 查询云边界分析列表(适用于主机资产) {@link DescribeCWPExposuresRequest} {@link DescribeCWPExposuresResponse} */
  DescribeCWPExposures(data: DescribeCWPExposuresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPExposuresResponse>;
  /** 查询授权绑定进度（CWP） {@link DescribeCWPLicenseBindScheduleRequest} {@link DescribeCWPLicenseBindScheduleResponse} */
  DescribeCWPLicenseBindSchedule(data: DescribeCWPLicenseBindScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPLicenseBindScheduleResponse>;
  /** 查询主机详情 {@link DescribeCWPMachineDetailRequest} {@link DescribeCWPMachineDetailResponse} */
  DescribeCWPMachineDetail(data?: DescribeCWPMachineDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPMachineDetailResponse>;
  /** 查询机器操作系统列表（CWP） {@link DescribeCWPMachineOsListRequest} {@link DescribeCWPMachineOsListResponse} */
  DescribeCWPMachineOsList(data?: DescribeCWPMachineOsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPMachineOsListResponse>;
  /** 查询主机列表 {@link DescribeCWPMachinesRequest} {@link DescribeCWPMachinesResponse} */
  DescribeCWPMachines(data?: DescribeCWPMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPMachinesResponse>;
  /** 查询订单列表（CWP） {@link DescribeCWPOrderListRequest} {@link DescribeCWPOrderListResponse} */
  DescribeCWPOrderList(data?: DescribeCWPOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPOrderListResponse>;
  /** 查询腾讯云扫描IP信息（CWP） {@link DescribeCWPScanIpInfoRequest} {@link DescribeCWPScanIpInfoResponse} */
  DescribeCWPScanIpInfo(data: DescribeCWPScanIpInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPScanIpInfoResponse>;
  /** 获取任务下发时长（CWP） {@link DescribeCWPTaskDurationRequest} {@link DescribeCWPTaskDurationResponse} */
  DescribeCWPTaskDuration(data: DescribeCWPTaskDurationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCWPTaskDurationResponse>;
  /** 获取调用记录 {@link DescribeCallRecordRequest} {@link DescribeCallRecordResponse} */
  DescribeCallRecord(data?: DescribeCallRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallRecordResponse>;
  /** 检查项视角云资源配置风险 {@link DescribeCheckViewRisksRequest} {@link DescribeCheckViewRisksResponse} */
  DescribeCheckViewRisks(data?: DescribeCheckViewRisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckViewRisksResponse>;
  /** 查询腾讯云指定CLB实例对应的监听器列表 {@link DescribeClbListenerListRequest} {@link DescribeClbListenerListResponse} */
  DescribeClbListenerList(data: DescribeClbListenerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClbListenerListResponse>;
  /** 查询腾讯云指定CLB实例对应的七层转发规则列表 {@link DescribeClbListenerRulesRequest} {@link DescribeClbListenerRulesResponse} */
  DescribeClbListenerRules(data: DescribeClbListenerRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClbListenerRulesResponse>;
  /** 查询CLB后端服务列表 {@link DescribeClbTargetsRequest} {@link DescribeClbTargetsResponse} */
  DescribeClbTargets(data: DescribeClbTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClbTargetsResponse>;
  /** 全部资产列表 {@link DescribeCloudAssetsRequest} {@link DescribeCloudAssetsResponse} */
  DescribeCloudAssets(data?: DescribeCloudAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudAssetsResponse>;
  /** 云函数列表 {@link DescribeCloudFunctionListRequest} {@link DescribeCloudFunctionListResponse} */
  DescribeCloudFunctionList(data?: DescribeCloudFunctionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudFunctionListResponse>;
  /** 查询容器集群资产列表 {@link DescribeClusterAssetListRequest} {@link DescribeClusterAssetListResponse} */
  DescribeClusterAssetList(data?: DescribeClusterAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAssetListResponse>;
  /** 查询集群资产同步任务状态 {@link DescribeClusterAssetSyncTaskStatusRequest} {@link DescribeClusterAssetSyncTaskStatusResponse} */
  DescribeClusterAssetSyncTaskStatus(data: DescribeClusterAssetSyncTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAssetSyncTaskStatusResponse>;
  /** 集群列表 {@link DescribeClusterAssetsRequest} {@link DescribeClusterAssetsResponse} */
  DescribeClusterAssets(data?: DescribeClusterAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAssetsResponse>;
  /** 查询容器关联应用列表 {@link DescribeClusterContainerAppListRequest} {@link DescribeClusterContainerAppListResponse} */
  DescribeClusterContainerAppList(data: DescribeClusterContainerAppListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterContainerAppListResponse>;
  /** 查询容器关联组件列表 {@link DescribeClusterContainerComponentListRequest} {@link DescribeClusterContainerComponentListResponse} */
  DescribeClusterContainerComponentList(data: DescribeClusterContainerComponentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterContainerComponentListResponse>;
  /** 查询集群容器详情 {@link DescribeClusterContainerDetailRequest} {@link DescribeClusterContainerDetailResponse} */
  DescribeClusterContainerDetail(data: DescribeClusterContainerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterContainerDetailResponse>;
  /** 查询集群容器列表 {@link DescribeClusterContainerListRequest} {@link DescribeClusterContainerListResponse} */
  DescribeClusterContainerList(data?: DescribeClusterContainerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterContainerListResponse>;
  /** 查询容器关联端口列表 {@link DescribeClusterContainerPortListRequest} {@link DescribeClusterContainerPortListResponse} */
  DescribeClusterContainerPortList(data: DescribeClusterContainerPortListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterContainerPortListResponse>;
  /** 查询容器关联进程列表 {@link DescribeClusterContainerProcessListRequest} {@link DescribeClusterContainerProcessListResponse} */
  DescribeClusterContainerProcessList(data: DescribeClusterContainerProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterContainerProcessListResponse>;
  /** 查询容器关联Web服务列表 {@link DescribeClusterContainerWebServiceListRequest} {@link DescribeClusterContainerWebServiceListResponse} */
  DescribeClusterContainerWebServiceList(data: DescribeClusterContainerWebServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterContainerWebServiceListResponse>;
  /** 查询集群详情 {@link DescribeClusterDetailRequest} {@link DescribeClusterDetailResponse} */
  DescribeClusterDetail(data?: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** 查询集群安装命令 {@link DescribeClusterInstallCommandRequest} {@link DescribeClusterInstallCommandResponse} */
  DescribeClusterInstallCommand(data: DescribeClusterInstallCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstallCommandResponse>;
  /** 查询集群列表V2版本 {@link DescribeClusterListV2Request} {@link DescribeClusterListV2Response} */
  DescribeClusterListV2(data?: DescribeClusterListV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterListV2Response>;
  /** 查询集群命名空间列表 {@link DescribeClusterNamespaceListRequest} {@link DescribeClusterNamespaceListResponse} */
  DescribeClusterNamespaceList(data?: DescribeClusterNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNamespaceListResponse>;
  /** 查询集群节点列表 {@link DescribeClusterNodeListRequest} {@link DescribeClusterNodeListResponse} */
  DescribeClusterNodeList(data?: DescribeClusterNodeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNodeListResponse>;
  /** 集群pod列表 {@link DescribeClusterPodAssetsRequest} {@link DescribeClusterPodAssetsResponse} */
  DescribeClusterPodAssets(data?: DescribeClusterPodAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPodAssetsResponse>;
  /** 查询集群 Pod 详情 {@link DescribeClusterPodDetailRequest} {@link DescribeClusterPodDetailResponse} */
  DescribeClusterPodDetail(data: DescribeClusterPodDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPodDetailResponse>;
  /** 查询集群pod列表 {@link DescribeClusterPodListRequest} {@link DescribeClusterPodListResponse} */
  DescribeClusterPodList(data?: DescribeClusterPodListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPodListResponse>;
  /** 查询集群service列表 {@link DescribeClusterServiceListRequest} {@link DescribeClusterServiceListResponse} */
  DescribeClusterServiceList(data?: DescribeClusterServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterServiceListResponse>;
  /** 查询集群概览数据 {@link DescribeClusterSummaryRequest} {@link DescribeClusterSummaryResponse} */
  DescribeClusterSummary(data?: DescribeClusterSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterSummaryResponse>;
  /** 查询集群超级节点详情 {@link DescribeClusterSuperNodeInfoRequest} {@link DescribeClusterSuperNodeInfoResponse} */
  DescribeClusterSuperNodeInfo(data: DescribeClusterSuperNodeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterSuperNodeInfoResponse>;
  /** 云资源配置检测合规概览 {@link DescribeComplianceOverviewRequest} {@link DescribeComplianceOverviewResponse} */
  DescribeComplianceOverview(data?: DescribeComplianceOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceOverviewResponse>;
  /** 合规标准聚合视角云资源配置风险 {@link DescribeComplianceRiskListRequest} {@link DescribeComplianceRiskListResponse} */
  DescribeComplianceRiskList(data: DescribeComplianceRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceRiskListResponse>;
  /** 云资源配置检测标准章节条款树 {@link DescribeComplianceStandardTermTreeRequest} {@link DescribeComplianceStandardTermTreeResponse} */
  DescribeComplianceStandardTermTree(data: DescribeComplianceStandardTermTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceStandardTermTreeResponse>;
  /** 云资源配置检测检查规范分类统计 {@link DescribeComplianceStatisticsRequest} {@link DescribeComplianceStatisticsResponse} */
  DescribeComplianceStatistics(data?: DescribeComplianceStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceStatisticsResponse>;
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
  /** 获取CSPM自动配额共享配置 {@link DescribeCspmShardConfigRequest} {@link DescribeCspmShardConfigResponse} */
  DescribeCspmShardConfig(data?: DescribeCspmShardConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCspmShardConfigResponse>;
  /** 获取用户自定义标签数量 {@link DescribeCustomAssetTagCountRequest} {@link DescribeCustomAssetTagCountResponse} */
  DescribeCustomAssetTagCount(data?: DescribeCustomAssetTagCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomAssetTagCountResponse>;
  /** 自定义风险规则配置详情列表 {@link DescribeCustomRiskRuleDetailRequest} {@link DescribeCustomRiskRuleDetailResponse} */
  DescribeCustomRiskRuleDetail(data?: DescribeCustomRiskRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomRiskRuleDetailResponse>;
  /** 自定义风险规则配置 {@link DescribeCustomRiskRulesRequest} {@link DescribeCustomRiskRulesResponse} */
  DescribeCustomRiskRules(data?: DescribeCustomRiskRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomRiskRulesResponse>;
  /** db资产详情 {@link DescribeDbAssetInfoRequest} {@link DescribeDbAssetInfoResponse} */
  DescribeDbAssetInfo(data: DescribeDbAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetInfoResponse>;
  /** 数据库资产列表 {@link DescribeDbAssetsRequest} {@link DescribeDbAssetsResponse} */
  DescribeDbAssets(data?: DescribeDbAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetsResponse>;
  /** 获取默认安全评分规则 {@link DescribeDefaultSecurityScoreRuleRequest} {@link DescribeDefaultSecurityScoreRuleResponse} */
  DescribeDefaultSecurityScoreRule(data?: DescribeDefaultSecurityScoreRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultSecurityScoreRuleResponse>;
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
  /** 动态资产列表 {@link DescribeDynamicAssetsRequest} {@link DescribeDynamicAssetsResponse} */
  DescribeDynamicAssets(data: DescribeDynamicAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDynamicAssetsResponse>;
  /** 获取EDR策略列表 {@link DescribeEDRRuleListRequest} {@link DescribeEDRRuleListResponse} */
  DescribeEDRRuleList(data?: DescribeEDRRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEDRRuleListResponse>;
  /** 查询EDR扫描任务列表 {@link DescribeEDRScanRecordListRequest} {@link DescribeEDRScanRecordListResponse} */
  DescribeEDRScanRecordList(data?: DescribeEDRScanRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEDRScanRecordListResponse>;
  /** 查询EDR扫描任务详情 {@link DescribeEDRScanTaskDetailRequest} {@link DescribeEDRScanTaskDetailResponse} */
  DescribeEDRScanTaskDetail(data: DescribeEDRScanTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEDRScanTaskDetailResponse>;
  /** 获取EDR告警数量统计（资产模块） {@link DescribeEdrAlertCountForAssetRequest} {@link DescribeEdrAlertCountForAssetResponse} */
  DescribeEdrAlertCountForAsset(data?: DescribeEdrAlertCountForAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertCountForAssetResponse>;
  /** 容器场景告警数量统计 {@link DescribeEdrAlertCountForContainerRequest} {@link DescribeEdrAlertCountForContainerResponse} */
  DescribeEdrAlertCountForContainer(data?: DescribeEdrAlertCountForContainerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertCountForContainerResponse>;
  /** 获取EDR告警详情 {@link DescribeEdrAlertInfoRequest} {@link DescribeEdrAlertInfoResponse} */
  DescribeEdrAlertInfo(data: DescribeEdrAlertInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertInfoResponse>;
  /** 获取EDR告警列表 {@link DescribeEdrAlertListRequest} {@link DescribeEdrAlertListResponse} */
  DescribeEdrAlertList(data?: DescribeEdrAlertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertListResponse>;
  /** EDR告警多攻击阶段查询 {@link DescribeEdrAlertMultiAttackStagesRequest} {@link DescribeEdrAlertMultiAttackStagesResponse} */
  DescribeEdrAlertMultiAttackStages(data: DescribeEdrAlertMultiAttackStagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertMultiAttackStagesResponse>;
  /** 获取EDR告警统计 {@link DescribeEdrAlertSummaryRequest} {@link DescribeEdrAlertSummaryResponse} */
  DescribeEdrAlertSummary(data?: DescribeEdrAlertSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertSummaryResponse>;
  /** EDR告警标签批量查询 {@link DescribeEdrAlertThreatTagsRequest} {@link DescribeEdrAlertThreatTagsResponse} */
  DescribeEdrAlertThreatTags(data: DescribeEdrAlertThreatTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrAlertThreatTagsResponse>;
  /** 查询EDR日志采集例外网段配置 {@link DescribeEdrExcludeNetworkSegmentsRequest} {@link DescribeEdrExcludeNetworkSegmentsResponse} */
  DescribeEdrExcludeNetworkSegments(data?: DescribeEdrExcludeNetworkSegmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrExcludeNetworkSegmentsResponse>;
  /** 获取EDR导出下载链接 {@link DescribeEdrExportJobDownloadURLRequest} {@link DescribeEdrExportJobDownloadURLResponse} */
  DescribeEdrExportJobDownloadURL(data?: DescribeEdrExportJobDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrExportJobDownloadURLResponse>;
  /** 导出EDR任务列表 {@link DescribeEdrExportJobListRequest} {@link DescribeEdrExportJobListResponse} */
  DescribeEdrExportJobList(data?: DescribeEdrExportJobListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrExportJobListResponse>;
  /** 查询日志采集路径配置列表 {@link DescribeEdrLogCollectPathsRequest} {@link DescribeEdrLogCollectPathsResponse} */
  DescribeEdrLogCollectPaths(data?: DescribeEdrLogCollectPathsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdrLogCollectPathsResponse>;
  /** 获取导出任务结果下载URL {@link DescribeExportJobDownloadURLRequest} {@link DescribeExportJobDownloadURLResponse} */
  DescribeExportJobDownloadURL(data: DescribeExportJobDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobDownloadURLResponse>;
  /** 查询导出任务列表 {@link DescribeExportJobManageListRequest} {@link DescribeExportJobManageListResponse} */
  DescribeExportJobManageList(data?: DescribeExportJobManageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobManageListResponse>;
  /** 查询云边界分析资产分类 {@link DescribeExposeAssetCategoryRequest} {@link DescribeExposeAssetCategoryResponse} */
  DescribeExposeAssetCategory(data?: DescribeExposeAssetCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposeAssetCategoryResponse>;
  /** 查询云边界分析路径节点 {@link DescribeExposePathRequest} {@link DescribeExposePathResponse} */
  DescribeExposePath(data?: DescribeExposePathRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposePathResponse>;
  /** 边界待治理风险统计列表 {@link DescribeExposeRiskStatisticsRequest} {@link DescribeExposeRiskStatisticsResponse} */
  DescribeExposeRiskStatistics(data?: DescribeExposeRiskStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposeRiskStatisticsResponse>;
  /** 云边界待治理风险列表 {@link DescribeExposeRisksRequest} {@link DescribeExposeRisksResponse} */
  DescribeExposeRisks(data?: DescribeExposeRisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposeRisksResponse>;
  /** 云边界规则列表 {@link DescribeExposeRulesRequest} {@link DescribeExposeRulesResponse} */
  DescribeExposeRules(data?: DescribeExposeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposeRulesResponse>;
  /** 云边界自动打标-规则属性 {@link DescribeExposureAutoTagAttributeRequest} {@link DescribeExposureAutoTagAttributeResponse} */
  DescribeExposureAutoTagAttribute(data?: DescribeExposureAutoTagAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposureAutoTagAttributeResponse>;
  /** 云边界自动打标-规则列表 {@link DescribeExposureAutoTagRulesRequest} {@link DescribeExposureAutoTagRulesResponse} */
  DescribeExposureAutoTagRules(data?: DescribeExposureAutoTagRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposureAutoTagRulesResponse>;
  /** 查询暴露面数量趋势周期统计信息 {@link DescribeExposureTrendRequest} {@link DescribeExposureTrendResponse} */
  DescribeExposureTrend(data?: DescribeExposureTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposureTrendResponse>;
  /** 查询云边界分析列表 {@link DescribeExposuresRequest} {@link DescribeExposuresResponse} */
  DescribeExposures(data?: DescribeExposuresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExposuresResponse>;
  /** 网关列表 {@link DescribeGatewayAssetsRequest} {@link DescribeGatewayAssetsResponse} */
  DescribeGatewayAssets(data?: DescribeGatewayAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayAssetsResponse>;
  /** 查询云边界分析-暴露路径下主机节点的高危基线风险列表 {@link DescribeHighBaseLineRiskListRequest} {@link DescribeHighBaseLineRiskListResponse} */
  DescribeHighBaseLineRiskList(data?: DescribeHighBaseLineRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHighBaseLineRiskListResponse>;
  /** 获取主机KB风险列表 {@link DescribeHostKBRiskListRequest} {@link DescribeHostKBRiskListResponse} */
  DescribeHostKBRiskList(data?: DescribeHostKBRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostKBRiskListResponse>;
  /** 获取主机漏洞VPR信息 {@link DescribeHostVulItemVPRInfoRequest} {@link DescribeHostVulItemVPRInfoResponse} */
  DescribeHostVulItemVPRInfo(data?: DescribeHostVulItemVPRInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostVulItemVPRInfoResponse>;
  /** 获取主机漏洞概览 {@link DescribeHostVulOverviewRequest} {@link DescribeHostVulOverviewResponse} */
  DescribeHostVulOverview(data?: DescribeHostVulOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostVulOverviewResponse>;
  /** 获取主机漏洞风险列表 {@link DescribeHostVulRiskListRequest} {@link DescribeHostVulRiskListResponse} */
  DescribeHostVulRiskList(data?: DescribeHostVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostVulRiskListResponse>;
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
  /** 获取KB详情 {@link DescribeKBDetailRequest} {@link DescribeKBDetailResponse} */
  DescribeKBDetail(data: DescribeKBDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBDetailResponse>;
  /** 查询可更新补丁主机信息 {@link DescribeKBUpdatableMachineListRequest} {@link DescribeKBUpdatableMachineListResponse} */
  DescribeKBUpdatableMachineList(data: DescribeKBUpdatableMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBUpdatableMachineListResponse>;
  /** 查询凭证详情 {@link DescribeKeySandboxCredentialRequest} {@link DescribeKeySandboxCredentialResponse} */
  DescribeKeySandboxCredential(data: DescribeKeySandboxCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeySandboxCredentialResponse>;
  /** 查询凭证列表 {@link DescribeKeySandboxCredentialListRequest} {@link DescribeKeySandboxCredentialListResponse} */
  DescribeKeySandboxCredentialList(data?: DescribeKeySandboxCredentialListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeySandboxCredentialListResponse>;
  /** 获取最近一次立即检测任务信息 {@link DescribeLastScanTaskInfoRequest} {@link DescribeLastScanTaskInfoResponse} */
  DescribeLastScanTaskInfo(data?: DescribeLastScanTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLastScanTaskInfoResponse>;
  /** 查询授权状态汇总 {@link DescribeLicenseStatusRequest} {@link DescribeLicenseStatusResponse} */
  DescribeLicenseStatus(data?: DescribeLicenseStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseStatusResponse>;
  /** 查询指定lighthouse实例对应的防火墙规则 {@link DescribeLighthouseFirewallRulesRequest} {@link DescribeLighthouseFirewallRulesResponse} */
  DescribeLighthouseFirewallRules(data: DescribeLighthouseFirewallRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLighthouseFirewallRulesResponse>;
  /** 查询clb监听器列表 {@link DescribeListenerListRequest} {@link DescribeListenerListResponse} */
  DescribeListenerList(data?: DescribeListenerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerListResponse>;
  /** 获取扫码登录全局配置 {@link DescribeLoginTypeGlobalConfRequest} {@link DescribeLoginTypeGlobalConfResponse} */
  DescribeLoginTypeGlobalConf(data?: DescribeLoginTypeGlobalConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginTypeGlobalConfResponse>;
  /** 获取扫码登录机器列表 {@link DescribeLoginTypeHostRequest} {@link DescribeLoginTypeHostResponse} */
  DescribeLoginTypeHost(data?: DescribeLoginTypeHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginTypeHostResponse>;
  /** 获取异地登录白名单合并后列表 {@link DescribeLoginWhiteCombinedListRequest} {@link DescribeLoginWhiteCombinedListResponse} */
  DescribeLoginWhiteCombinedList(data?: DescribeLoginWhiteCombinedListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteCombinedListResponse>;
  /** 查询合并后白名单机器列表 {@link DescribeLoginWhiteHostListRequest} {@link DescribeLoginWhiteHostListResponse} */
  DescribeLoginWhiteHostList(data: DescribeLoginWhiteHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteHostListResponse>;
  /** 查询机器清理历史记录 {@link DescribeMachineClearHistoryRequest} {@link DescribeMachineClearHistoryResponse} */
  DescribeMachineClearHistory(data?: DescribeMachineClearHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineClearHistoryResponse>;
  /** CWP查询主机概览 {@link DescribeMachineGeneralRequest} {@link DescribeMachineGeneralResponse} */
  DescribeMachineGeneral(data?: DescribeMachineGeneralRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineGeneralResponse>;
  /** 获取主机登录方式 {@link DescribeMachineLoginTypeRequest} {@link DescribeMachineLoginTypeResponse} */
  DescribeMachineLoginType(data?: DescribeMachineLoginTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineLoginTypeResponse>;
  /** 查询定时扫描设置 {@link DescribeMalwareTimingScanSettingRequest} {@link DescribeMalwareTimingScanSettingResponse} */
  DescribeMalwareTimingScanSetting(data?: DescribeMalwareTimingScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareTimingScanSettingResponse>;
  /** 查询漏洞情报列表 {@link DescribeMandatoryVulSetRequest} {@link DescribeMandatoryVulSetResponse} */
  DescribeMandatoryVulSet(data?: DescribeMandatoryVulSetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMandatoryVulSetResponse>;
  /** 获取批量修改主机登录方式任务列表 {@link DescribeModifyMachinesLoginTypeTasksRequest} {@link DescribeModifyMachinesLoginTypeTasksResponse} */
  DescribeModifyMachinesLoginTypeTasks(data?: DescribeModifyMachinesLoginTypeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModifyMachinesLoginTypeTasksResponse>;
  /** 获取多云资产数量 {@link DescribeMultiCloudAssetCountRequest} {@link DescribeMultiCloudAssetCountResponse} */
  DescribeMultiCloudAssetCount(data?: DescribeMultiCloudAssetCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMultiCloudAssetCountResponse>;
  /** 获取NFS扫描全局配置 {@link DescribeNFSScanConfRequest} {@link DescribeNFSScanConfResponse} */
  DescribeNFSScanConf(data?: DescribeNFSScanConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNFSScanConfResponse>;
  /** 获取NFS扫描配置机器列表 {@link DescribeNFSScanHostRequest} {@link DescribeNFSScanHostResponse} */
  DescribeNFSScanHost(data?: DescribeNFSScanHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNFSScanHostResponse>;
  /** 网卡列表 {@link DescribeNICAssetsRequest} {@link DescribeNICAssetsResponse} */
  DescribeNICAssets(data?: DescribeNICAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNICAssetsResponse>;
  /** 查询腾讯云nat网关实例对应的NAT策略 {@link DescribeNatRulesRequest} {@link DescribeNatRulesResponse} */
  DescribeNatRules(data: DescribeNatRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatRulesResponse>;
  /** 查询网络攻击设置 {@link DescribeNetAttackSettingRequest} {@link DescribeNetAttackSettingResponse} */
  DescribeNetAttackSetting(data?: DescribeNetAttackSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetAttackSettingResponse>;
  /** 查询客户端离线时长 {@link DescribeNotifyAgentOfflineDurationRequest} {@link DescribeNotifyAgentOfflineDurationResponse} */
  DescribeNotifyAgentOfflineDuration(data?: DescribeNotifyAgentOfflineDurationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotifyAgentOfflineDurationResponse>;
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
  /** 查询 Pod 关联容器列表 {@link DescribePodContainerListRequest} {@link DescribePodContainerListResponse} */
  DescribePodContainerList(data?: DescribePodContainerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePodContainerListResponse>;
  /** 查看风险趋势图详情数据 {@link DescribePolicyHitDataRequest} {@link DescribePolicyHitDataResponse} */
  DescribePolicyHitData(data: DescribePolicyHitDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyHitDataResponse>;
  /** 端口探测列表 {@link DescribePortDetectListRequest} {@link DescribePortDetectListResponse} */
  DescribePortDetectList(data: DescribePortDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePortDetectListResponse>;
  /** 查询当前账号下端口扫描次数 {@link DescribePortScanTaskCountRequest} {@link DescribePortScanTaskCountResponse} */
  DescribePortScanTaskCount(data?: DescribePortScanTaskCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePortScanTaskCountResponse>;
  /** 获取防卸载全局配置 {@link DescribePreventUninstallGlobalConfRequest} {@link DescribePreventUninstallGlobalConfResponse} */
  DescribePreventUninstallGlobalConf(data?: DescribePreventUninstallGlobalConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePreventUninstallGlobalConfResponse>;
  /** 获取防卸载机器列表 {@link DescribePreventUninstallHostRequest} {@link DescribePreventUninstallHostResponse} */
  DescribePreventUninstallHost(data?: DescribePreventUninstallHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePreventUninstallHostResponse>;
  /** 获取进程守护全局配置 {@link DescribeProcessDaemonGlobalConfRequest} {@link DescribeProcessDaemonGlobalConfResponse} */
  DescribeProcessDaemonGlobalConf(data?: DescribeProcessDaemonGlobalConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProcessDaemonGlobalConfResponse>;
  /** 获取进程守护机器列表 {@link DescribeProcessDaemonHostRequest} {@link DescribeProcessDaemonHostResponse} */
  DescribeProcessDaemonHost(data?: DescribeProcessDaemonHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProcessDaemonHostResponse>;
  /** 公网资产列表 {@link DescribePublicCloudAssetsRequest} {@link DescribePublicCloudAssetsResponse} */
  DescribePublicCloudAssets(data?: DescribePublicCloudAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicCloudAssetsResponse>;
  /** 公网列表 {@link DescribePublicIpAssetsRequest} {@link DescribePublicIpAssetsResponse} */
  DescribePublicIpAssets(data?: DescribePublicIpAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicIpAssetsResponse>;
  /** 查询应用防护授权列表 {@link DescribeRaspLicenseListRequest} {@link DescribeRaspLicenseListResponse} */
  DescribeRaspLicenseList(data?: DescribeRaspLicenseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRaspLicenseListResponse>;
  /** 仓库镜像列表 {@link DescribeRepositoryImageAssetsRequest} {@link DescribeRepositoryImageAssetsResponse} */
  DescribeRepositoryImageAssets(data?: DescribeRepositoryImageAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoryImageAssetsResponse>;
  /** 查询反弹Shell系统策略配置 {@link DescribeReverseShellSystemPolicyConfigRequest} {@link DescribeReverseShellSystemPolicyConfigResponse} */
  DescribeReverseShellSystemPolicyConfig(data?: DescribeReverseShellSystemPolicyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellSystemPolicyConfigResponse>;
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
  /** 获取风险趋势分析 {@link DescribeRiskCenterRiskTrendAnalysisRequest} {@link DescribeRiskCenterRiskTrendAnalysisResponse} */
  DescribeRiskCenterRiskTrendAnalysis(data?: DescribeRiskCenterRiskTrendAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskCenterRiskTrendAnalysisResponse>;
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
  /** 获取风险扫描周期计划配置 {@link DescribeRiskScanCronConfigRequest} {@link DescribeRiskScanCronConfigResponse} */
  DescribeRiskScanCronConfig(data?: DescribeRiskScanCronConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskScanCronConfigResponse>;
  /** 查看风险趋势图信息 {@link DescribeRiskTrendDataRequest} {@link DescribeRiskTrendDataResponse} */
  DescribeRiskTrendData(data?: DescribeRiskTrendDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskTrendDataResponse>;
  /** 查询 SCF 函数别名列表 {@link DescribeSCFAliasListRequest} {@link DescribeSCFAliasListResponse} */
  DescribeSCFAliasList(data: DescribeSCFAliasListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSCFAliasListResponse>;
  /** 查询 SCF 函数列表 {@link DescribeSCFFunctionListRequest} {@link DescribeSCFFunctionListResponse} */
  DescribeSCFFunctionList(data: DescribeSCFFunctionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSCFFunctionListResponse>;
  /** 查询 SCF 函数版本列表 {@link DescribeSCFFunctionVersionListRequest} {@link DescribeSCFFunctionVersionListResponse} */
  DescribeSCFFunctionVersionList(data: DescribeSCFFunctionVersionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSCFFunctionVersionListResponse>;
  /** 查询 SCF 命名空间列表 {@link DescribeSCFNamespaceListRequest} {@link DescribeSCFNamespaceListResponse} */
  DescribeSCFNamespaceList(data: DescribeSCFNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSCFNamespaceListResponse>;
  /** 获取扫描报告列表 {@link DescribeScanReportListRequest} {@link DescribeScanReportListResponse} */
  DescribeScanReportList(data?: DescribeScanReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanReportListResponse>;
  /** 查询云边界分析扫描结果统计信息 {@link DescribeScanStatisticRequest} {@link DescribeScanStatisticResponse} */
  DescribeScanStatistic(data?: DescribeScanStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanStatisticResponse>;
  /** 获取扫描任务列表 {@link DescribeScanTaskListRequest} {@link DescribeScanTaskListResponse} */
  DescribeScanTaskList(data?: DescribeScanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskListResponse>;
  /** 扫描任务记录 {@link DescribeScanTaskRecordListRequest} {@link DescribeScanTaskRecordListResponse} */
  DescribeScanTaskRecordList(data?: DescribeScanTaskRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskRecordListResponse>;
  /** 查询腾讯云SCF自定义域名端点列表 {@link DescribeScfCustomDomainEndpointsRequest} {@link DescribeScfCustomDomainEndpointsResponse} */
  DescribeScfCustomDomainEndpoints(data: DescribeScfCustomDomainEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScfCustomDomainEndpointsResponse>;
  /** 查询漏洞信息 {@link DescribeSearchBugInfoRequest} {@link DescribeSearchBugInfoResponse} */
  DescribeSearchBugInfo(data: DescribeSearchBugInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchBugInfoResponse>;
  /** 安全组策略 {@link DescribeSecurityGroupPolicyRequest} {@link DescribeSecurityGroupPolicyResponse} */
  DescribeSecurityGroupPolicy(data: DescribeSecurityGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupPolicyResponse>;
  /** 获取安全风险趋势 {@link DescribeSecurityRiskTrendRequest} {@link DescribeSecurityRiskTrendResponse} */
  DescribeSecurityRiskTrend(data?: DescribeSecurityRiskTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityRiskTrendResponse>;
  /** 获取安全评分概览 {@link DescribeSecurityScoreOverviewRequest} {@link DescribeSecurityScoreOverviewResponse} */
  DescribeSecurityScoreOverview(data?: DescribeSecurityScoreOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityScoreOverviewResponse>;
  /** 获取安全评分规则 {@link DescribeSecurityScoreRuleRequest} {@link DescribeSecurityScoreRuleResponse} */
  DescribeSecurityScoreRule(data?: DescribeSecurityScoreRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityScoreRuleResponse>;
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
  /** 打标策略生效资产列表 {@link DescribeTagRuleAssetsRequest} {@link DescribeTagRuleAssetsResponse} */
  DescribeTagRuleAssets(data?: DescribeTagRuleAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagRuleAssetsResponse>;
  /** 获取任务扫描报告列表 {@link DescribeTaskLogListRequest} {@link DescribeTaskLogListResponse} */
  DescribeTaskLogList(data?: DescribeTaskLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogListResponse>;
  /** 获取报告下载的临时链接 {@link DescribeTaskLogURLRequest} {@link DescribeTaskLogURLResponse} */
  DescribeTaskLogURL(data: DescribeTaskLogURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogURLResponse>;
  /** 获取扫描预消耗配额 {@link DescribeTaskPredictCostQuotaRequest} {@link DescribeTaskPredictCostQuotaResponse} */
  DescribeTaskPredictCostQuota(data?: DescribeTaskPredictCostQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskPredictCostQuotaResponse>;
  /** 查询TOP攻击信息 {@link DescribeTopAttackInfoRequest} {@link DescribeTopAttackInfoResponse} */
  DescribeTopAttackInfo(data: DescribeTopAttackInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopAttackInfoResponse>;
  /** 查询用户行为分析的行为概览 {@link DescribeUebaBehaviorSummaryRequest} {@link DescribeUebaBehaviorSummaryResponse} */
  DescribeUebaBehaviorSummary(data?: DescribeUebaBehaviorSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUebaBehaviorSummaryResponse>;
  /** 查询用户行为分析策略列表 {@link DescribeUebaRuleRequest} {@link DescribeUebaRuleResponse} */
  DescribeUebaRule(data?: DescribeUebaRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUebaRuleResponse>;
  /** 获取用户行为分析的用户概览 {@link DescribeUebaUserSummaryRequest} {@link DescribeUebaUserSummaryResponse} */
  DescribeUebaUserSummary(data?: DescribeUebaUserSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUebaUserSummaryResponse>;
  /** 获取用户CSPM配额信息 {@link DescribeUserCSPMInfoListRequest} {@link DescribeUserCSPMInfoListResponse} */
  DescribeUserCSPMInfoList(data?: DescribeUserCSPMInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCSPMInfoListResponse>;
  /** 获取账号的调用记录 {@link DescribeUserCallRecordRequest} {@link DescribeUserCallRecordResponse} */
  DescribeUserCallRecord(data: DescribeUserCallRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCallRecordResponse>;
  /** 获取用户Dspm信息列表 {@link DescribeUserDspmInfoListRequest} {@link DescribeUserDspmInfoListResponse} */
  DescribeUserDspmInfoList(data?: DescribeUserDspmInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDspmInfoListResponse>;
  /** 获取用户信息 {@link DescribeUserInfoRequest} {@link DescribeUserInfoResponse} */
  DescribeUserInfo(data?: DescribeUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserInfoResponse>;
  /** 风险中心-漏洞列表 {@link DescribeVULListRequest} {@link DescribeVULListResponse} */
  DescribeVULList(data?: DescribeVULListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULListResponse>;
  /** 查询漏洞风险高级配置 {@link DescribeVULRiskAdvanceCFGListRequest} {@link DescribeVULRiskAdvanceCFGListResponse} */
  DescribeVULRiskAdvanceCFGList(data?: DescribeVULRiskAdvanceCFGListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULRiskAdvanceCFGListResponse>;
  /** 漏洞管理-漏洞详情 {@link DescribeVULRiskDetailRequest} {@link DescribeVULRiskDetailResponse} */
  DescribeVULRiskDetail(data?: DescribeVULRiskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVULRiskDetailResponse>;
  /** 获取病毒库及POC的更新信息 {@link DescribeVdbAndPocInfoRequest} {@link DescribeVdbAndPocInfoResponse} */
  DescribeVdbAndPocInfo(data?: DescribeVdbAndPocInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVdbAndPocInfoResponse>;
  /** vpc列表 {@link DescribeVpcAssetsRequest} {@link DescribeVpcAssetsResponse} */
  DescribeVpcAssets(data?: DescribeVpcAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcAssetsResponse>;
  /** 获取漏洞组件关联主机 {@link DescribeVulComponentRelateHostRequest} {@link DescribeVulComponentRelateHostResponse} */
  DescribeVulComponentRelateHost(data: DescribeVulComponentRelateHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulComponentRelateHostResponse>;
  /** 获取漏洞修复任务详情 {@link DescribeVulFixTaskDetailRequest} {@link DescribeVulFixTaskDetailResponse} */
  DescribeVulFixTaskDetail(data: DescribeVulFixTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulFixTaskDetailResponse>;
  /** 获取漏洞修复任务记录列表 {@link DescribeVulFixTaskListRequest} {@link DescribeVulFixTaskListResponse} */
  DescribeVulFixTaskList(data?: DescribeVulFixTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulFixTaskListResponse>;
  /** 查询可修复主机信息 {@link DescribeVulFixableMachineListRequest} {@link DescribeVulFixableMachineListResponse} */
  DescribeVulFixableMachineList(data: DescribeVulFixableMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulFixableMachineListResponse>;
  /** 获取已修复漏洞的主机修复详情 {@link DescribeVulFixedHostDetailRequest} {@link DescribeVulFixedHostDetailResponse} */
  DescribeVulFixedHostDetail(data: DescribeVulFixedHostDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulFixedHostDetailResponse>;
  /** 获取被修复漏洞列表 {@link DescribeVulFixedListRequest} {@link DescribeVulFixedListResponse} */
  DescribeVulFixedList(data?: DescribeVulFixedListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulFixedListResponse>;
  /** 获取漏洞主机关联组件 {@link DescribeVulHostRelateComponentRequest} {@link DescribeVulHostRelateComponentResponse} */
  DescribeVulHostRelateComponent(data: DescribeVulHostRelateComponentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulHostRelateComponentResponse>;
  /** 获取漏洞忽略列表 {@link DescribeVulIgnoreRuleListRequest} {@link DescribeVulIgnoreRuleListResponse} */
  DescribeVulIgnoreRuleList(data?: DescribeVulIgnoreRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulIgnoreRuleListResponse>;
  /** 获取漏洞列表 {@link DescribeVulItemListRequest} {@link DescribeVulItemListResponse} */
  DescribeVulItemList(data?: DescribeVulItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulItemListResponse>;
  /** 获取漏洞标签列表 {@link DescribeVulLabelListRequest} {@link DescribeVulLabelListResponse} */
  DescribeVulLabelList(data?: DescribeVulLabelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLabelListResponse>;
  /** 查询云边界分析-暴露路径下主机节点的漏洞列表 {@link DescribeVulRiskListRequest} {@link DescribeVulRiskListResponse} */
  DescribeVulRiskList(data?: DescribeVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulRiskListResponse>;
  /** 获取漏洞风险关联组件 {@link DescribeVulRiskRelateComponentRequest} {@link DescribeVulRiskRelateComponentResponse} */
  DescribeVulRiskRelateComponent(data: DescribeVulRiskRelateComponentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulRiskRelateComponentResponse>;
  /** 获取漏洞风险关联主机 {@link DescribeVulRiskRelateHostRequest} {@link DescribeVulRiskRelateHostResponse} */
  DescribeVulRiskRelateHost(data: DescribeVulRiskRelateHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulRiskRelateHostResponse>;
  /** 获取漏洞扫描配置（周期扫描） {@link DescribeVulScanPeriodicRequest} {@link DescribeVulScanPeriodicResponse} */
  DescribeVulScanPeriodic(data?: DescribeVulScanPeriodicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanPeriodicResponse>;
  /** 获取漏洞扫描任务详情 {@link DescribeVulScanTaskDetailRequest} {@link DescribeVulScanTaskDetailResponse} */
  DescribeVulScanTaskDetail(data: DescribeVulScanTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanTaskDetailResponse>;
  /** 获取漏洞扫描任务记录 {@link DescribeVulScanTaskListRequest} {@link DescribeVulScanTaskListResponse} */
  DescribeVulScanTaskList(data?: DescribeVulScanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanTaskListResponse>;
  /** 漏洞管理-漏洞视角的漏洞风险列表 {@link DescribeVulViewVulRiskListRequest} {@link DescribeVulViewVulRiskListResponse} */
  DescribeVulViewVulRiskList(data?: DescribeVulViewVulRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulViewVulRiskListResponse>;
  /** 查询通知策略列表 {@link DescribeWebhookPolicyListRequest} {@link DescribeWebhookPolicyListResponse} */
  DescribeWebhookPolicyList(data?: DescribeWebhookPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebhookPolicyListResponse>;
  /** 查询接收机器人列表 {@link DescribeWebhookReceiverListRequest} {@link DescribeWebhookReceiverListResponse} */
  DescribeWebhookReceiverList(data?: DescribeWebhookReceiverListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebhookReceiverListResponse>;
  /** 停用AI 定时任务 {@link DisableAIScheduleRequest} {@link DisableAIScheduleResponse} */
  DisableAISchedule(data?: DisableAIScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DisableAIScheduleResponse>;
  /** 下载导出日志 {@link DownloadDspmExportLogRequest} {@link DownloadDspmExportLogResponse} */
  DownloadDspmExportLog(data?: DownloadDspmExportLogRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadDspmExportLogResponse>;
  /** 启用AI 定时任务 {@link EnableAIScheduleRequest} {@link EnableAIScheduleResponse} */
  EnableAISchedule(data?: EnableAIScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<EnableAIScheduleResponse>;
  /** 导出CSIP扫描任务主机详情 {@link ExportCSIPMalwareScanTaskDetailRequest} {@link ExportCSIPMalwareScanTaskDetailResponse} */
  ExportCSIPMalwareScanTaskDetail(data: ExportCSIPMalwareScanTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ExportCSIPMalwareScanTaskDetailResponse>;
  /** 导出客户端设置主机列表 {@link ExportClientSettingHostListRequest} {@link ExportClientSettingHostListResponse} */
  ExportClientSettingHostList(data: ExportClientSettingHostListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportClientSettingHostListResponse>;
  /** 导出EDR策略列表 {@link ExportEDRRulesRequest} {@link ExportEDRRulesResponse} */
  ExportEDRRules(data?: ExportEDRRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportEDRRulesResponse>;
  /** 异步导出任务 {@link ExportTasksRequest} {@link ExportTasksResponse} */
  ExportTasks(data: ExportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ExportTasksResponse>;
  /** 安装集群容器安全Agent {@link InstallClusterAgentRequest} {@link InstallClusterAgentResponse} */
  InstallClusterAgent(data: InstallClusterAgentRequest, config?: AxiosRequestConfig): AxiosPromise<InstallClusterAgentResponse>;
  /** 修改AI-Link智链引擎配置 {@link ModifyAILinkSettingRequest} {@link ModifyAILinkSettingResponse} */
  ModifyAILinkSetting(data: ModifyAILinkSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAILinkSettingResponse>;
  /** 修改AI 定时任务 {@link ModifyAIScheduleRequest} {@link ModifyAIScheduleResponse} */
  ModifyAISchedule(data?: ModifyAIScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAIScheduleResponse>;
  /** 修改客户端日志采集配置 {@link ModifyAgentConfigSettingRequest} {@link ModifyAgentConfigSettingResponse} */
  ModifyAgentConfigSetting(data?: ModifyAgentConfigSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentConfigSettingResponse>;
  /** 修改agent运行模式配置 {@link ModifyAgentRunModeRequest} {@link ModifyAgentRunModeResponse} */
  ModifyAgentRunMode(data?: ModifyAgentRunModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentRunModeResponse>;
  /** 修改客户端运行的策略 {@link ModifyAgentRunPolicyRequest} {@link ModifyAgentRunPolicyResponse} */
  ModifyAgentRunPolicy(data?: ModifyAgentRunPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentRunPolicyResponse>;
  /** 风险或者告警处理 {@link ModifyAlarmRiskStatusRequest} {@link ModifyAlarmRiskStatusResponse} */
  ModifyAlarmRiskStatus(data: ModifyAlarmRiskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmRiskStatusResponse>;
  /** 标记资产是否核心属性 {@link ModifyAssetCoreAttributeRequest} {@link ModifyAssetCoreAttributeResponse} */
  ModifyAssetCoreAttribute(data: ModifyAssetCoreAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetCoreAttributeResponse>;
  /** 更新资产搜索视图 {@link ModifyAssetFilterViewRequest} {@link ModifyAssetFilterViewResponse} */
  ModifyAssetFilterView(data: ModifyAssetFilterViewRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetFilterViewResponse>;
  /** 编辑资产标签 {@link ModifyAssetTagRequest} {@link ModifyAssetTagResponse} */
  ModifyAssetTag(data: ModifyAssetTagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetTagResponse>;
  /** 操作资产绑定标签 {@link ModifyAssetTagsRequest} {@link ModifyAssetTagsResponse} */
  ModifyAssetTags(data?: ModifyAssetTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetTagsResponse>;
  /** 通过资产信息操作资产绑定标签 {@link ModifyAssetTagsByAssetInfoRequest} {@link ModifyAssetTagsByAssetInfoResponse} */
  ModifyAssetTagsByAssetInfo(data?: ModifyAssetTagsByAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetTagsByAssetInfoResponse>;
  /** 修改爆破阻断模式 {@link ModifyBanModeRequest} {@link ModifyBanModeResponse} */
  ModifyBanMode(data: ModifyBanModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBanModeResponse>;
  /** 更改基线策略 {@link ModifyBaselinePolicyRequest} {@link ModifyBaselinePolicyResponse} */
  ModifyBaselinePolicy(data: ModifyBaselinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselinePolicyResponse>;
  /** 更改基线策略开关 {@link ModifyBaselinePolicyEnableRequest} {@link ModifyBaselinePolicyEnableResponse} */
  ModifyBaselinePolicyEnable(data: ModifyBaselinePolicyEnableRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselinePolicyEnableResponse>;
  /** 更改基线同步配置 {@link ModifyBaselineSyncConfRequest} {@link ModifyBaselineSyncConfResponse} */
  ModifyBaselineSyncConf(data: ModifyBaselineSyncConfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineSyncConfResponse>;
  /** 更改基线用户其他配置 {@link ModifyBaselineUserOtherConfRequest} {@link ModifyBaselineUserOtherConfResponse} */
  ModifyBaselineUserOtherConf(data: ModifyBaselineUserOtherConfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineUserOtherConfResponse>;
  /** 修改基线用户弱口令配置 {@link ModifyBaselineUserWeakPasswordConfRequest} {@link ModifyBaselineUserWeakPasswordConfResponse} */
  ModifyBaselineUserWeakPasswordConf(data: ModifyBaselineUserWeakPasswordConfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineUserWeakPasswordConfResponse>;
  /** 设置暴力破解阻断开关状态 {@link ModifyBruteAttackBanStatusRequest} {@link ModifyBruteAttackBanStatusResponse} */
  ModifyBruteAttackBanStatus(data?: ModifyBruteAttackBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBruteAttackBanStatusResponse>;
  /** 修改暴力破解规则 {@link ModifyBruteAttackRulesRequest} {@link ModifyBruteAttackRulesResponse} */
  ModifyBruteAttackRules(data: ModifyBruteAttackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBruteAttackRulesResponse>;
  /** 绑定授权 {@link ModifyCSIPLicenseBindsRequest} {@link ModifyCSIPLicenseBindsResponse} */
  ModifyCSIPLicenseBinds(data: ModifyCSIPLicenseBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCSIPLicenseBindsResponse>;
  /** 解绑主机授权 {@link ModifyCSIPLicenseUnBindsRequest} {@link ModifyCSIPLicenseUnBindsResponse} */
  ModifyCSIPLicenseUnBinds(data?: ModifyCSIPLicenseUnBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCSIPLicenseUnBindsResponse>;
  /** 绑定RASP授权 {@link ModifyCSIPRaspLicenseBindsRequest} {@link ModifyCSIPRaspLicenseBindsResponse} */
  ModifyCSIPRaspLicenseBinds(data: ModifyCSIPRaspLicenseBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCSIPRaspLicenseBindsResponse>;
  /** 解绑RASP授权 {@link ModifyCSIPRaspLicenseUnBindsRequest} {@link ModifyCSIPRaspLicenseUnBindsResponse} */
  ModifyCSIPRaspLicenseUnBinds(data?: ModifyCSIPRaspLicenseUnBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCSIPRaspLicenseUnBindsResponse>;
  /** 修改存储桶监测状态 {@link ModifyCosAuditBucketMonitorStatusRequest} {@link ModifyCosAuditBucketMonitorStatusResponse} */
  ModifyCosAuditBucketMonitorStatus(data: ModifyCosAuditBucketMonitorStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosAuditBucketMonitorStatusResponse>;
  /** 修改cos审计监测账号 {@link ModifyCosAuditMonitorAccountRequest} {@link ModifyCosAuditMonitorAccountResponse} */
  ModifyCosAuditMonitorAccount(data: ModifyCosAuditMonitorAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosAuditMonitorAccountResponse>;
  /** 修改cos对象存储识别状态 {@link ModifyCosAuditObjectIdentifyStatusRequest} {@link ModifyCosAuditObjectIdentifyStatusResponse} */
  ModifyCosAuditObjectIdentifyStatus(data: ModifyCosAuditObjectIdentifyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosAuditObjectIdentifyStatusResponse>;
  /** 设置对象存储内容识别采样率 {@link ModifyCosAuditObjectSampleRateRequest} {@link ModifyCosAuditObjectSampleRateResponse} */
  ModifyCosAuditObjectSampleRate(data: ModifyCosAuditObjectSampleRateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosAuditObjectSampleRateResponse>;
  /** 修改对象存储备注信息 {@link ModifyCosMarkInfoRequest} {@link ModifyCosMarkInfoResponse} */
  ModifyCosMarkInfo(data: ModifyCosMarkInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosMarkInfoResponse>;
  /** 更新CSPM自动配额管理者共享开关 {@link ModifyCspmShardConfigRequest} {@link ModifyCspmShardConfigResponse} */
  ModifyCspmShardConfig(data: ModifyCspmShardConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCspmShardConfigResponse>;
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
  /** 修改EDR策略开关状态 {@link ModifyEDRRuleStatusRequest} {@link ModifyEDRRuleStatusResponse} */
  ModifyEDRRuleStatus(data: ModifyEDRRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEDRRuleStatusResponse>;
  /** 批量修改EDR策略动作 {@link ModifyEDRRulesActionRequest} {@link ModifyEDRRulesActionResponse} */
  ModifyEDRRulesAction(data: ModifyEDRRulesActionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEDRRulesActionResponse>;
  /** EDR告警隔离和恢复 {@link ModifyEdrAlertIsolationRequest} {@link ModifyEdrAlertIsolationResponse} */
  ModifyEdrAlertIsolation(data: ModifyEdrAlertIsolationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdrAlertIsolationResponse>;
  /** 永久忽略EDR多行为告警 {@link ModifyEdrAlertPermanentIgnoreRequest} {@link ModifyEdrAlertPermanentIgnoreResponse} */
  ModifyEdrAlertPermanentIgnore(data: ModifyEdrAlertPermanentIgnoreRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdrAlertPermanentIgnoreResponse>;
  /** EDR告警状态处置 {@link ModifyEdrAlertStatusRequest} {@link ModifyEdrAlertStatusResponse} */
  ModifyEdrAlertStatus(data: ModifyEdrAlertStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdrAlertStatusResponse>;
  /** 修改日志采集例外网段配置 {@link ModifyEdrExcludeNetworkSegmentsRequest} {@link ModifyEdrExcludeNetworkSegmentsResponse} */
  ModifyEdrExcludeNetworkSegments(data?: ModifyEdrExcludeNetworkSegmentsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdrExcludeNetworkSegmentsResponse>;
  /** 修改EDR日志采集路径配置 {@link ModifyEdrLogCollectPathRequest} {@link ModifyEdrLogCollectPathResponse} */
  ModifyEdrLogCollectPath(data?: ModifyEdrLogCollectPathRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdrLogCollectPathResponse>;
  /** 云边界自动打标-规则更新 {@link ModifyExposureAutoTagRuleRequest} {@link ModifyExposureAutoTagRuleResponse} */
  ModifyExposureAutoTagRule(data: ModifyExposureAutoTagRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExposureAutoTagRuleResponse>;
  /** 云边界自动打标-规则启停 {@link ModifyExposureAutoTagRuleStatusRequest} {@link ModifyExposureAutoTagRuleStatusResponse} */
  ModifyExposureAutoTagRuleStatus(data: ModifyExposureAutoTagRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExposureAutoTagRuleStatusResponse>;
  /** 云边界自定义标签 {@link ModifyExposureTagRequest} {@link ModifyExposureTagResponse} */
  ModifyExposureTag(data: ModifyExposureTagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExposureTagResponse>;
  /** 修改IaC检测接入Token存储周期 {@link ModifyIaCTokenPeriodRequest} {@link ModifyIaCTokenPeriodResponse} */
  ModifyIaCTokenPeriod(data: ModifyIaCTokenPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIaCTokenPeriodResponse>;
  /** 更新合并后登录审计白名单信息 {@link ModifyLoginWhiteRecordRequest} {@link ModifyLoginWhiteRecordResponse} */
  ModifyLoginWhiteRecord(data: ModifyLoginWhiteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoginWhiteRecordResponse>;
  /** 修改机器清理配置 {@link ModifyMachineAutoClearConfigRequest} {@link ModifyMachineAutoClearConfigResponse} */
  ModifyMachineAutoClearConfig(data: ModifyMachineAutoClearConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachineAutoClearConfigResponse>;
  /** 修改主机备注信息 {@link ModifyMachineRemarkRequest} {@link ModifyMachineRemarkResponse} */
  ModifyMachineRemark(data: ModifyMachineRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachineRemarkResponse>;
  /** 批量修改主机登录方式 {@link ModifyMachinesLoginTypeRequest} {@link ModifyMachinesLoginTypeResponse} */
  ModifyMachinesLoginType(data: ModifyMachinesLoginTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachinesLoginTypeResponse>;
  /** 修改定时扫描设置 {@link ModifyMalwareTimingScanSettingsRequest} {@link ModifyMalwareTimingScanSettingsResponse} */
  ModifyMalwareTimingScanSettings(data: ModifyMalwareTimingScanSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMalwareTimingScanSettingsResponse>;
  /** 新增或更新NFS扫描全局配置 {@link ModifyNFSScanConfRequest} {@link ModifyNFSScanConfResponse} */
  ModifyNFSScanConf(data: ModifyNFSScanConfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNFSScanConfResponse>;
  /** 移除NFS扫描配置机器 {@link ModifyNFSScanHostRequest} {@link ModifyNFSScanHostResponse} */
  ModifyNFSScanHost(data?: ModifyNFSScanHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNFSScanHostResponse>;
  /** 修改网络攻击设置 {@link ModifyNetAttackSettingRequest} {@link ModifyNetAttackSettingResponse} */
  ModifyNetAttackSetting(data: ModifyNetAttackSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetAttackSettingResponse>;
  /** 修改客户端离线时长 {@link ModifyNotifyAgentOfflineDurationRequest} {@link ModifyNotifyAgentOfflineDurationResponse} */
  ModifyNotifyAgentOfflineDuration(data: ModifyNotifyAgentOfflineDurationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotifyAgentOfflineDurationResponse>;
  /** 修改通知资产范围配置 {@link ModifyNotifyAssetConfigRequest} {@link ModifyNotifyAssetConfigResponse} */
  ModifyNotifyAssetConfig(data?: ModifyNotifyAssetConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotifyAssetConfigResponse>;
  /** 修改通知设置 {@link ModifyNotifySettingRequest} {@link ModifyNotifySettingResponse} */
  ModifyNotifySetting(data?: ModifyNotifySettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotifySettingResponse>;
  /** 修改告警中心通知高级配置 {@link ModifyNotifySettingAlertRequest} {@link ModifyNotifySettingAlertResponse} */
  ModifyNotifySettingAlert(data: ModifyNotifySettingAlertRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotifySettingAlertResponse>;
  /** 修改集团账号状态 {@link ModifyOrganizationAccountStatusRequest} {@link ModifyOrganizationAccountStatusResponse} */
  ModifyOrganizationAccountStatus(data: ModifyOrganizationAccountStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOrganizationAccountStatusResponse>;
  /** 修改付费配置信息 {@link ModifyPayConfigRequest} {@link ModifyPayConfigResponse} */
  ModifyPayConfig(data?: ModifyPayConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPayConfigResponse>;
  /** 修改策略状态 {@link ModifyPolicyStatusRequest} {@link ModifyPolicyStatusResponse} */
  ModifyPolicyStatus(data: ModifyPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPolicyStatusResponse>;
  /** 重保防护包防护设置 {@link ModifyProtectionSettingRequest} {@link ModifyProtectionSettingResponse} */
  ModifyProtectionSetting(data: ModifyProtectionSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProtectionSettingResponse>;
  /** 重保防护包授权绑定 {@link ModifyRaspLicenseBindsRequest} {@link ModifyRaspLicenseBindsResponse} */
  ModifyRaspLicenseBinds(data: ModifyRaspLicenseBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRaspLicenseBindsResponse>;
  /** 修改反弹Shell系统策略配置 {@link ModifyReverseShellSystemPolicyConfigRequest} {@link ModifyReverseShellSystemPolicyConfigResponse} */
  ModifyReverseShellSystemPolicyConfig(data?: ModifyReverseShellSystemPolicyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReverseShellSystemPolicyConfigResponse>;
  /** 修改风险中心风险状态 {@link ModifyRiskCenterRiskStatusRequest} {@link ModifyRiskCenterRiskStatusResponse} */
  ModifyRiskCenterRiskStatus(data: ModifyRiskCenterRiskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterRiskStatusResponse>;
  /** 修改风险中心扫描任务 {@link ModifyRiskCenterScanTaskRequest} {@link ModifyRiskCenterScanTaskResponse} */
  ModifyRiskCenterScanTask(data: ModifyRiskCenterScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskCenterScanTaskResponse>;
  /** 更新用户周期检测计划 {@link ModifyRiskScanCronConfigRequest} {@link ModifyRiskScanCronConfigResponse} */
  ModifyRiskScanCronConfig(data?: ModifyRiskScanCronConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskScanCronConfigResponse>;
  /** 修改安全评分规则 {@link ModifySecurityScoreRuleRequest} {@link ModifySecurityScoreRuleResponse} */
  ModifySecurityScoreRule(data: ModifySecurityScoreRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityScoreRuleResponse>;
  /** 更新CSPM共享配额 {@link ModifyShareUserCSPMRequest} {@link ModifyShareUserCSPMResponse} */
  ModifyShareUserCSPM(data?: ModifyShareUserCSPMRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyShareUserCSPMResponse>;
  /** 更新自定义策略的开关 {@link ModifyUebaRuleSwitchRequest} {@link ModifyUebaRuleSwitchResponse} */
  ModifyUebaRuleSwitch(data: ModifyUebaRuleSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUebaRuleSwitchResponse>;
  /** 修改漏洞扫描配置（周期扫描） {@link ModifyVulScanPeriodicRequest} {@link ModifyVulScanPeriodicResponse} */
  ModifyVulScanPeriodic(data: ModifyVulScanPeriodicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulScanPeriodicResponse>;
  /** 修改漏洞白名单配置 {@link ModifyVulWhitelistConfigRequest} {@link ModifyVulWhitelistConfigResponse} */
  ModifyVulWhitelistConfig(data?: ModifyVulWhitelistConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulWhitelistConfigResponse>;
  /** 修改漏洞白名单开关 {@link ModifyVulWhitelistSwitchRequest} {@link ModifyVulWhitelistSwitchResponse} */
  ModifyVulWhitelistSwitch(data?: ModifyVulWhitelistSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulWhitelistSwitchResponse>;
  /** 新增或修改通知策略 {@link ModifyWebhookPolicyRequest} {@link ModifyWebhookPolicyResponse} */
  ModifyWebhookPolicy(data: ModifyWebhookPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebhookPolicyResponse>;
  /** 启用或禁用通知策略 {@link ModifyWebhookPolicyStatusRequest} {@link ModifyWebhookPolicyStatusResponse} */
  ModifyWebhookPolicyStatus(data: ModifyWebhookPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebhookPolicyStatusResponse>;
  /** 新增或修改接收机器人 {@link ModifyWebhookReceiverRequest} {@link ModifyWebhookReceiverResponse} */
  ModifyWebhookReceiver(data: ModifyWebhookReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebhookReceiverResponse>;
  /** 风险操作 {@link OperateRiskRequest} {@link OperateRiskResponse} */
  OperateRisk(data: OperateRiskRequest, config?: AxiosRequestConfig): AxiosPromise<OperateRiskResponse>;
  /** 自定义风险规则策略 {@link OperateRiskRulePolicyRequest} {@link OperateRiskRulePolicyResponse} */
  OperateRiskRulePolicy(data: OperateRiskRulePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<OperateRiskRulePolicyResponse>;
  /** 重置Dspm资产账号密码 {@link ResetDspmAssetAccountPasswordRequest} {@link ResetDspmAssetAccountPasswordResponse} */
  ResetDspmAssetAccountPassword(data: ResetDspmAssetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetDspmAssetAccountPasswordResponse>;
  /** 重试导出任务 {@link RetryDspmExportLogRequest} {@link RetryDspmExportLogResponse} */
  RetryDspmExportLog(data?: RetryDspmExportLogRequest, config?: AxiosRequestConfig): AxiosPromise<RetryDspmExportLogResponse>;
  /** 恢复Dspm资产账号 {@link RevertDspmAssetAccountRequest} {@link RevertDspmAssetAccountResponse} */
  RevertDspmAssetAccount(data: RevertDspmAssetAccountRequest, config?: AxiosRequestConfig): AxiosPromise<RevertDspmAssetAccountResponse>;
  /** 扫描基线资产附属检测项列表 {@link ScanBaselineAssetItemListRequest} {@link ScanBaselineAssetItemListResponse} */
  ScanBaselineAssetItemList(data: ScanBaselineAssetItemListRequest, config?: AxiosRequestConfig): AxiosPromise<ScanBaselineAssetItemListResponse>;
  /** 扫描基线检测项 {@link ScanBaselineItemListRequest} {@link ScanBaselineItemListResponse} */
  ScanBaselineItemList(data: ScanBaselineItemListRequest, config?: AxiosRequestConfig): AxiosPromise<ScanBaselineItemListResponse>;
  /** 扫描基线策略 {@link ScanBaselinePolicyListRequest} {@link ScanBaselinePolicyListResponse} */
  ScanBaselinePolicyList(data: ScanBaselinePolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<ScanBaselinePolicyListResponse>;
  /** 扫描基线风险 {@link ScanBaselineRiskListRequest} {@link ScanBaselineRiskListResponse} */
  ScanBaselineRiskList(data: ScanBaselineRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<ScanBaselineRiskListResponse>;
  /** CSIP 手动扫描重扫接口 {@link ScanCSIPTaskAgainRequest} {@link ScanCSIPTaskAgainResponse} */
  ScanCSIPTaskAgain(data: ScanCSIPTaskAgainRequest, config?: AxiosRequestConfig): AxiosPromise<ScanCSIPTaskAgainResponse>;
  /** 重新扫描EDR任务 {@link ScanEDRTaskAgainRequest} {@link ScanEDRTaskAgainResponse} */
  ScanEDRTaskAgain(data: ScanEDRTaskAgainRequest, config?: AxiosRequestConfig): AxiosPromise<ScanEDRTaskAgainResponse>;
  /** 发送Dspm资产访问验证码 {@link SendDspmAssetLoginSmsCodeRequest} {@link SendDspmAssetLoginSmsCodeResponse} */
  SendDspmAssetLoginSmsCode(data: SendDspmAssetLoginSmsCodeRequest, config?: AxiosRequestConfig): AxiosPromise<SendDspmAssetLoginSmsCodeResponse>;
  /** 开启或者修改防卸载功能 {@link StartOrModifyPreventUninstallRequest} {@link StartOrModifyPreventUninstallResponse} */
  StartOrModifyPreventUninstall(data: StartOrModifyPreventUninstallRequest, config?: AxiosRequestConfig): AxiosPromise<StartOrModifyPreventUninstallResponse>;
  /** 开启或者修改进程守护 {@link StartOrModifyProcessDaemonRequest} {@link StartOrModifyProcessDaemonResponse} */
  StartOrModifyProcessDaemon(data: StartOrModifyProcessDaemonRequest, config?: AxiosRequestConfig): AxiosPromise<StartOrModifyProcessDaemonResponse>;
  /** 停止基线扫描任务 {@link StopBaselineScanTaskRequest} {@link StopBaselineScanTaskResponse} */
  StopBaselineScanTask(data: StopBaselineScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopBaselineScanTaskResponse>;
  /** CSIP 手动扫描停止接口 {@link StopCSIPManualMalwareScanRequest} {@link StopCSIPManualMalwareScanResponse} */
  StopCSIPManualMalwareScan(data: StopCSIPManualMalwareScanRequest, config?: AxiosRequestConfig): AxiosPromise<StopCSIPManualMalwareScanResponse>;
  /** 停止或取消EDR扫描任务 {@link StopEDRScanTaskRequest} {@link StopEDRScanTaskResponse} */
  StopEDRScanTask(data: StopEDRScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopEDRScanTaskResponse>;
  /** 关闭防卸载功能 {@link StopPreventUninstallRequest} {@link StopPreventUninstallResponse} */
  StopPreventUninstall(data: StopPreventUninstallRequest, config?: AxiosRequestConfig): AxiosPromise<StopPreventUninstallResponse>;
  /** 关闭进程防护功能 {@link StopProcessDaemonRequest} {@link StopProcessDaemonResponse} */
  StopProcessDaemon(data: StopProcessDaemonRequest, config?: AxiosRequestConfig): AxiosPromise<StopProcessDaemonResponse>;
  /** 停止扫风险中心扫描任务 {@link StopRiskCenterTaskRequest} {@link StopRiskCenterTaskResponse} */
  StopRiskCenterTask(data: StopRiskCenterTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopRiskCenterTaskResponse>;
  /** 停止漏洞扫描（任务扫描） {@link StopVulScanTaskRequest} {@link StopVulScanTaskResponse} */
  StopVulScanTask(data?: StopVulScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopVulScanTaskResponse>;
  /** 同步Dspm资产 {@link SyncDspmAssetsRequest} {@link SyncDspmAssetsResponse} */
  SyncDspmAssets(data?: SyncDspmAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<SyncDspmAssetsResponse>;
  /** 同步Dspm用户列表 {@link SyncDspmUsersRequest} {@link SyncDspmUsersResponse} */
  SyncDspmUsers(data?: SyncDspmUsersRequest, config?: AxiosRequestConfig): AxiosPromise<SyncDspmUsersResponse>;
  /** 测试接收机器人 {@link TestWebhookReceiverRequest} {@link TestWebhookReceiverResponse} */
  TestWebhookReceiver(data: TestWebhookReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<TestWebhookReceiverResponse>;
  /** 卸载集群容器安全Agent {@link UninstallClusterAgentRequest} {@link UninstallClusterAgentResponse} */
  UninstallClusterAgent(data: UninstallClusterAgentRequest, config?: AxiosRequestConfig): AxiosPromise<UninstallClusterAgentResponse>;
  /** 修改告警或者风险状态 {@link UpdateAccessKeyAlarmStatusRequest} {@link UpdateAccessKeyAlarmStatusResponse} */
  UpdateAccessKeyAlarmStatus(data: UpdateAccessKeyAlarmStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccessKeyAlarmStatusResponse>;
  /** 编辑访问密钥备注 {@link UpdateAccessKeyRemarkRequest} {@link UpdateAccessKeyRemarkResponse} */
  UpdateAccessKeyRemark(data: UpdateAccessKeyRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccessKeyRemarkResponse>;
  /** 批量告警状态处理 {@link UpdateAlertStatusListRequest} {@link UpdateAlertStatusListResponse} */
  UpdateAlertStatusList(data: UpdateAlertStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAlertStatusListResponse>;
  /** 绑定、更新集群负责人 {@link UpdateClusterOwnerRequest} {@link UpdateClusterOwnerResponse} */
  UpdateClusterOwner(data: UpdateClusterOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateClusterOwnerResponse>;
  /** 验证Dspm资产登录验证码 {@link VerifyDspmAssetLoginCodeRequest} {@link VerifyDspmAssetLoginCodeResponse} */
  VerifyDspmAssetLoginCode(data: VerifyDspmAssetLoginCodeRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyDspmAssetLoginCodeResponse>;
}

export declare type Versions = ["2022-11-21"];

export default Csip;
