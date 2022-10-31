/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 帐号列表信息数据。 */
declare interface Account {
  /** 唯一ID。 */
  Id: number;
  /** 云镜客户端唯一Uuid */
  Uuid: string;
  /** 主机内网IP。 */
  MachineIp: string;
  /** 主机名称。 */
  MachineName: string;
  /** 帐号名。 */
  Username: string;
  /** 帐号所属组。 */
  Groups: string;
  /** 帐号类型。ORDINARY：普通帐号SUPPER：超级管理员帐号 */
  Privilege: string;
  /** 帐号创建时间。 */
  AccountCreateTime: string;
  /** 帐号最后登录时间。 */
  LastLoginTime: string;
}

/** 帐号统计数据。 */
declare interface AccountStatistics {
  /** 用户名。 */
  Username: string;
  /** 主机数量。 */
  MachineNum: number;
}

/** 主机漏洞信息 */
declare interface AgentVul {
  /** 漏洞ID。 */
  Id: number;
  /** 主机IP。 */
  MachineIp: string;
  /** 漏洞名称。 */
  VulName: string;
  /** 漏洞危害等级。HIGH：高危MIDDLE：中危LOW：低危NOTICE：提示 */
  VulLevel: string;
  /** 最后扫描时间。 */
  LastScanTime: string;
  /** 漏洞描述。 */
  Description: string;
  /** 漏洞种类ID。 */
  VulId: number;
  /** 漏洞状态。UN_OPERATED : 待处理FIXED : 已修复 */
  VulStatus: string;
}

/** 高危命令数据 */
declare interface BashEvent {
  /** ID */
  Id: number;
  /** 云镜ID */
  Uuid: string;
  /** 主机ID */
  Quuid: string;
  /** 主机内网IP */
  Hostip: string;
  /** 执行用户名 */
  User: string;
  /** 平台类型 */
  Platform: number;
  /** 执行命令 */
  BashCmd: string;
  /** 规则ID */
  RuleId: number;
  /** 规则名称 */
  RuleName: string;
  /** 规则等级 */
  RuleLevel: number;
  /** 处理状态 */
  Status: number;
  /** 发生时间 */
  CreateTime: string;
  /** 主机名 */
  MachineName: string;
}

/** 高危命令规则 */
declare interface BashRule {
  /** 规则ID */
  Id: number;
  /** 客户端ID */
  Uuid: string;
  /** 规则名称 */
  Name: string;
  /** 危险等级(1: 高危 2:中危 3: 低危) */
  Level: number;
  /** 正则表达式 */
  Rule: string;
  /** 规则描述 */
  Decription: string;
  /** 操作人 */
  Operator: string;
  /** 是否全局规则 */
  IsGlobal: number;
  /** 状态 (0: 有效 1: 无效) */
  Status: number;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
  /** 主机IP */
  Hostip: string;
}

/** 暴力破解列表 */
declare interface BruteAttack {
  /** 事件ID。 */
  Id: number;
  /** 主机IP。 */
  MachineIp: string;
  /** 破解事件状态BRUTEATTACK_FAIL_ACCOUNT： 暴力破解事件-失败(存在帐号) BRUTEATTACK_FAIL_NOACCOUNT：暴力破解事件-失败(帐号不存在)BRUTEATTACK_SUCCESS：暴力破解事件-成功 */
  Status: string;
  /** 用户名称。 */
  UserName: string;
  /** 城市ID。 */
  City: number;
  /** 国家ID。 */
  Country: number;
  /** 省份ID。 */
  Province: number;
  /** 来源IP。 */
  SrcIp: string;
  /** 尝试破解次数。 */
  Count: number;
  /** 发生时间。 */
  CreateTime: string;
  /** 主机名称。 */
  MachineName: string;
  /** 云镜客户端唯一标识UUID。 */
  Uuid: string;
  /** 是否专业版。 */
  IsProVersion: boolean;
  /** 阻断状态。 */
  BanStatus: string;
  /** 机器UUID */
  Quuid: string;
}

/** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。 */
declare interface ChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string;
}

/** 组件列表数据。 */
declare interface Component {
  /** 唯一ID。 */
  Id: number;
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
  /** 主机内网IP。 */
  MachineIp: string;
  /** 主机名。 */
  MachineName: string;
  /** 组件版本号。 */
  ComponentVersion: string;
  /** 组件类型。SYSTEM：系统组件WEB：Web组件 */
  ComponentType: string;
  /** 组件名称。 */
  ComponentName: string;
  /** 组件检测更新时间。 */
  ModifyTime: string;
}

/** 组件统计数据。 */
declare interface ComponentStatistics {
  /** 组件ID。 */
  Id: number;
  /** 主机数量。 */
  MachineNum: number;
  /** 组件名称。 */
  ComponentName: string;
  /** 组件类型。WEB：Web组件SYSTEM：系统组件 */
  ComponentType: string;
  /** 组件描述。 */
  Description: string;
}

/** 网络攻击日志 */
declare interface DefendAttackLog {
  /** 日志ID */
  Id: number;
  /** 客户端ID */
  Uuid: string;
  /** 来源IP */
  SrcIp: string;
  /** 来源端口 */
  SrcPort: number;
  /** 攻击方式 */
  HttpMethod: string;
  /** 攻击描述 */
  HttpCgi: string;
  /** 攻击参数 */
  HttpParam: string;
  /** 威胁类型 */
  VulType: string;
  /** 攻击时间 */
  CreatedAt: string;
  /** 目标服务器IP */
  MachineIp: string;
  /** 目标服务器名称 */
  MachineName: string;
  /** 目标IP */
  DstIp: string;
  /** 目标端口 */
  DstPort: number;
  /** 攻击内容 */
  HttpContent: string;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。* 最多只能有5个Filter* 同一个Filter存在多个Values，Values值数量最多不能超过5个。 */
declare interface Filter {
  /** 过滤键的名称。 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
}

/** 账号变更历史数据。 */
declare interface HistoryAccount {
  /** 唯一ID。 */
  Id: number;
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
  /** 主机内网IP。 */
  MachineIp: string;
  /** 主机名。 */
  MachineName: string;
  /** 帐号名。 */
  Username: string;
  /** 帐号变更类型。CREATE：表示新增帐号MODIFY：表示修改帐号DELETE：表示删除帐号 */
  ModifyType: string;
  /** 变更时间。 */
  ModifyTime: string;
}

/** 受影响主机信息 */
declare interface ImpactedHost {
  /** 漏洞ID。 */
  Id: number;
  /** 主机IP。 */
  MachineIp: string;
  /** 主机名称。 */
  MachineName: string;
  /** 最后检测时间。 */
  LastScanTime: string;
  /** 漏洞状态。UN_OPERATED ：待处理SCANING : 扫描中FIXED : 已修复 */
  VulStatus: string;
  /** 云镜客户端唯一标识UUID。 */
  Uuid: string;
  /** 漏洞描述。 */
  Description: string;
  /** 漏洞种类ID。 */
  VulId: number;
  /** 是否为专业版。 */
  IsProVersion: boolean;
}

/** 异地登录白名单 */
declare interface LoginWhiteLists {
  /** 记录ID */
  Id: number;
  /** 云镜客户端ID */
  Uuid: string;
  /** 白名单地域 */
  Places: Place[];
  /** 白名单用户（多个用户逗号隔开） */
  UserName: string;
  /** 白名单IP（多个IP逗号隔开） */
  SrcIp: string;
  /** 是否为全局规则 */
  IsGlobal: boolean;
  /** 创建白名单时间 */
  CreateTime: string;
  /** 修改白名单时间 */
  ModifyTime: string;
  /** 机器名 */
  MachineName: string;
  /** 机器IP */
  HostIp: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

/** 白名单规则 */
declare interface LoginWhiteListsRule {
  /** 加白地域 */
  Places: Place[];
  /** 加白源IP，支持网段，多个IP以逗号隔开 */
  SrcIp: string;
  /** 加白用户名，多个用户名以逗号隔开 */
  UserName: string;
  /** 是否对全局生效 */
  IsGlobal: boolean;
  /** 白名单生效的机器 */
  HostIp: string;
  /** 规则ID，用于更新规则 */
  Id?: number;
  /** 起始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

/** 主机列表 */
declare interface Machine {
  /** 主机名称。 */
  MachineName: string;
  /** 主机系统。 */
  MachineOs: string;
  /** 主机状态。OFFLINE: 离线 ONLINE: 在线MACHINE_STOPPED: 已关机 */
  MachineStatus: string;
  /** 云镜客户端唯一Uuid，若客户端长时间不在线将返回空字符。 */
  Uuid: string;
  /** CVM或BM机器唯一Uuid。 */
  Quuid: string;
  /** 漏洞数。 */
  VulNum: number;
  /** 主机IP。 */
  MachineIp: string;
  /** 是否是专业版。true： 是false：否 */
  IsProVersion: boolean;
  /** 主机外网IP。 */
  MachineWanIp: string;
  /** 主机状态。POSTPAY: 表示后付费，即按量计费 PREPAY: 表示预付费，即包年包月 */
  PayMode: string;
  /** 木马数。 */
  MalwareNum: number;
  /** 标签信息 */
  Tag: MachineTag[];
  /** 基线风险数。 */
  BaselineNum: number;
  /** 网络风险数。 */
  CyberAttackNum: number;
  /** 风险状态。SAFE：安全RISK：风险UNKNOWN：未知 */
  SecurityStatus: string;
  /** 入侵事件数 */
  InvasionNum: number;
  /** 地域信息 */
  RegionInfo: RegionInfo;
}

/** 服务器标签信息 */
declare interface MachineTag {
  /** 关联标签ID */
  Rid: number;
  /** 标签名 */
  Name: string;
  /** 标签ID */
  TagId: number;
}

/** 木马相关信息 */
declare interface Malware {
  /** 事件ID。 */
  Id: number;
  /** 主机IP。 */
  MachineIp: string;
  /** 当前木马状态。UN_OPERATED：未处理SEGREGATED：已隔离TRUSTED：已信任SEPARATING：隔离中RECOVERING：恢复中 */
  Status: string;
  /** 木马所在的路径。 */
  FilePath: string;
  /** 木马描述。 */
  Description: string;
  /** 主机名称。 */
  MachineName: string;
  /** 木马文件创建时间。 */
  FileCreateTime: string;
  /** 木马文件修改时间。 */
  ModifyTime: string;
  /** 云镜客户端唯一标识UUID。 */
  Uuid: string;
}

/** 异地登录 */
declare interface NonLocalLoginPlace {
  /** 事件ID。 */
  Id: number;
  /** 主机IP。 */
  MachineIp: string;
  /** 登录状态NON_LOCAL_LOGIN：异地登录NORMAL_LOGIN：正常登录 */
  Status: string;
  /** 用户名。 */
  UserName: string;
  /** 城市ID。 */
  City: number;
  /** 国家ID。 */
  Country: number;
  /** 省份ID。 */
  Province: number;
  /** 登录IP。 */
  SrcIp: string;
  /** 机器名称。 */
  MachineName: string;
  /** 登录时间。 */
  LoginTime: string;
  /** 云镜客户端唯一标识Uuid。 */
  Uuid: string;
}

/** 端口列表 */
declare interface OpenPort {
  /** 唯一ID。 */
  Id: number;
  /** 云镜客户端唯一UUID。 */
  Uuid: string;
  /** 开放端口号。 */
  Port: number;
  /** 主机IP。 */
  MachineIp: string;
  /** 主机名。 */
  MachineName: string;
  /** 端口对应进程名。 */
  ProcessName: string;
  /** 端口对应进程Pid。 */
  Pid: number;
  /** 记录创建时间。 */
  CreateTime: string;
  /** 记录更新时间。 */
  ModifyTime: string;
}

/** 端口统计列表 */
declare interface OpenPortStatistics {
  /** 端口号 */
  Port: number;
  /** 主机数量 */
  MachineNum: number;
}

/** 登录地信息 */
declare interface Place {
  /** 城市 ID。 */
  CityId: number;
  /** 省份 ID。 */
  ProvinceId: number;
  /** 国家ID，暂只支持国内：1。 */
  CountryId: number;
}

/** 本地提权数据 */
declare interface PrivilegeEscalationProcess {
  /** 数据ID */
  Id: number;
  /** 云镜ID */
  Uuid: string;
  /** 主机ID */
  Quuid: string;
  /** 主机内网IP */
  Hostip: string;
  /** 进程名 */
  ProcessName: string;
  /** 进程路径 */
  FullPath: string;
  /** 执行命令 */
  CmdLine: string;
  /** 用户名 */
  UserName: string;
  /** 用户组 */
  UserGroup: string;
  /** 进程文件权限 */
  ProcFilePrivilege: string;
  /** 父进程名 */
  ParentProcName: string;
  /** 父进程用户名 */
  ParentProcUser: string;
  /** 父进程用户组 */
  ParentProcGroup: string;
  /** 父进程路径 */
  ParentProcPath: string;
  /** 进程树 */
  ProcTree: string;
  /** 处理状态 */
  Status: number;
  /** 发生时间 */
  CreateTime: string;
  /** 机器名 */
  MachineName: string;
}

/** 本地提权规则 */
declare interface PrivilegeRule {
  /** 规则ID */
  Id: number;
  /** 客户端ID */
  Uuid: string;
  /** 进程名 */
  ProcessName: string;
  /** 是否S权限 */
  SMode: number;
  /** 操作人 */
  Operator: string;
  /** 是否全局规则 */
  IsGlobal: number;
  /** 状态(0: 有效 1: 无效) */
  Status: number;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
  /** 主机IP */
  Hostip: string;
}

/** 需要开通专业版机器信息。 */
declare interface ProVersionMachine {
  /** 主机类型。CVM: 虚拟主机BM: 黑石物理机 */
  MachineType: string;
  /** 主机所在地域。如：ap-guangzhou、ap-beijing */
  MachineRegion: string;
  /** 主机唯一标识Uuid。黑石的InstanceId，CVM的Uuid */
  Quuid: string;
}

/** 进程信息数据。 */
declare interface Process {
  /** 唯一ID。 */
  Id: number;
  /** 云镜客户端唯一UUID。 */
  Uuid: string;
  /** 主机内网IP。 */
  MachineIp: string;
  /** 主机名。 */
  MachineName: string;
  /** 进程Pid。 */
  Pid: number;
  /** 进程Ppid。 */
  Ppid: number;
  /** 进程名。 */
  ProcessName: string;
  /** 进程用户名。 */
  Username: string;
  /** 所属平台。WIN32：windows32位WIN64：windows64位LINUX32：Linux32位LINUX64：Linux64位 */
  Platform: string;
  /** 进程路径。 */
  FullPath: string;
  /** 创建时间。 */
  CreateTime: string;
}

/** 进程数据统计数据。 */
declare interface ProcessStatistics {
  /** 进程名。 */
  ProcessName: string;
  /** 主机数量。 */
  MachineNum: number;
}

/** 地域信息 */
declare interface RegionInfo {
  /** 地域标志，如 ap-guangzhou，ap-shanghai，ap-beijing */
  Region: string;
  /** 地域中文名，如华南地区（广州），华东地区（上海金融），华北地区（北京） */
  RegionName: string;
  /** 地域ID */
  RegionId: number;
  /** 地域代码，如 gz，sh，bj */
  RegionCode: string;
}

/** 反弹Shell数据 */
declare interface ReverseShell {
  /** ID */
  Id: number;
  /** 云镜UUID */
  Uuid: string;
  /** 主机ID */
  Quuid: string;
  /** 主机内网IP */
  Hostip: string;
  /** 目标IP */
  DstIp: string;
  /** 目标端口 */
  DstPort: number;
  /** 进程名 */
  ProcessName: string;
  /** 进程路径 */
  FullPath: string;
  /** 命令详情 */
  CmdLine: string;
  /** 执行用户 */
  UserName: string;
  /** 执行用户组 */
  UserGroup: string;
  /** 父进程名 */
  ParentProcName: string;
  /** 父进程用户 */
  ParentProcUser: string;
  /** 父进程用户组 */
  ParentProcGroup: string;
  /** 父进程路径 */
  ParentProcPath: string;
  /** 处理状态 */
  Status: number;
  /** 产生时间 */
  CreateTime: string;
  /** 主机名 */
  MachineName: string;
  /** 进程树 */
  ProcTree: string;
}

/** 反弹Shell规则 */
declare interface ReverseShellRule {
  /** 规则ID */
  Id: number;
  /** 客户端ID */
  Uuid: string;
  /** 进程名称 */
  ProcessName: string;
  /** 目标IP */
  DestIp: string;
  /** 目标端口 */
  DestPort: string;
  /** 操作人 */
  Operator: string;
  /** 是否全局规则 */
  IsGlobal: number;
  /** 状态 (0: 有效 1: 无效) */
  Status: number;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
  /** 主机IP */
  Hostip: string;
}

/** 安全事件消息数据。 */
declare interface SecurityDynamic {
  /** 云镜客户端UUID。 */
  Uuid: string;
  /** 安全事件发生事件。 */
  EventTime: string;
  /** 安全事件类型。MALWARE：木马事件NON_LOCAL_LOGIN：异地登录BRUTEATTACK_SUCCESS：密码破解成功VUL：漏洞BASELINE：安全基线 */
  EventType: string;
  /** 安全事件消息。 */
  Message: string;
  /** 安全事件等级。RISK: 严重HIGH: 高危NORMAL: 中危LOW: 低危 */
  SecurityLevel: string;
}

/** 安全趋势统计数据。 */
declare interface SecurityTrend {
  /** 事件时间。 */
  Date: string;
  /** 事件数量。 */
  EventNum: number;
}

/** 标签信息 */
declare interface Tag {
  /** 标签ID */
  Id: number;
  /** 标签名 */
  Name: string;
  /** 服务器数 */
  Count: number;
}

/** 标签相关服务器信息 */
declare interface TagMachine {
  /** ID */
  Id: string;
  /** 主机ID */
  Quuid: string;
  /** 主机名称 */
  MachineName: string;
  /** 主机内网IP */
  MachineIp: string;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 主机区域 */
  MachineRegion: string;
  /** 主机区域类型 */
  MachineType: string;
}

/** 常用登录地 */
declare interface UsualPlace {
  /** ID。 */
  Id: number;
  /** 云镜客户端唯一标识UUID。 */
  Uuid: string;
  /** 国家 ID。 */
  CountryId: number;
  /** 省份 ID。 */
  ProvinceId: number;
  /** 城市 ID。 */
  CityId: number;
}

/** 漏洞列表数据 */
declare interface Vul {
  /** 漏洞种类ID */
  VulId: number;
  /** 漏洞名称 */
  VulName: string;
  /** 漏洞危害等级:HIGH：高危MIDDLE：中危LOW：低危NOTICE：提示 */
  VulLevel: string;
  /** 最后扫描时间 */
  LastScanTime: string;
  /** 受影响机器数量 */
  ImpactedHostNum: number;
  /** 漏洞状态* UN_OPERATED : 待处理* FIXED : 已修复 */
  VulStatus: string;
}

/** 周报列表。 */
declare interface WeeklyReport {
  /** 周报开始时间。 */
  BeginDate: string;
  /** 周报结束时间。 */
  EndDate: string;
}

/** 专业周报密码破解数据。 */
declare interface WeeklyReportBruteAttack {
  /** 主机IP。 */
  MachineIp: string;
  /** 被破解用户名。 */
  Username: string;
  /** 源IP。 */
  SrcIp: string;
  /** 尝试次数。 */
  Count: number;
  /** 攻击时间。 */
  AttackTime: string;
}

/** 专业周报木马数据。 */
declare interface WeeklyReportMalware {
  /** 主机IP。 */
  MachineIp: string;
  /** 木马文件路径。 */
  FilePath: string;
  /** 木马文件MD5值。 */
  Md5: string;
  /** 木马发现时间。 */
  FindTime: string;
  /** 当前木马状态。UN_OPERATED：未处理SEGREGATED：已隔离TRUSTED：已信任SEPARATING：隔离中RECOVERING：恢复中 */
  Status: string;
}

/** 专业周报异地登录数据。 */
declare interface WeeklyReportNonlocalLoginPlace {
  /** 主机IP。 */
  MachineIp: string;
  /** 用户名。 */
  Username: string;
  /** 源IP。 */
  SrcIp: string;
  /** 国家ID。 */
  Country: number;
  /** 省份ID。 */
  Province: number;
  /** 城市ID。 */
  City: number;
  /** 登录时间。 */
  LoginTime: string;
}

/** 专业版周报漏洞数据。 */
declare interface WeeklyReportVul {
  /** 主机内网IP。 */
  MachineIp: string;
  /** 漏洞名称。 */
  VulName: string;
  /** 漏洞类型。 WEB : Web漏洞 SYSTEM :系统组件漏洞 BASELINE : 安全基线 */
  VulType: string;
  /** 漏洞描述。 */
  Description: string;
  /** 漏洞状态。 UN_OPERATED : 待处理 SCANING : 扫描中 FIXED : 已修复 */
  VulStatus: string;
  /** 最后扫描时间。 */
  LastScanTime: string;
}

declare interface AddLoginWhiteListRequest {
  /** 白名单规则 */
  Rules: LoginWhiteListsRule;
}

declare interface AddLoginWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddMachineTagRequest {
  /** 云服务器ID */
  Quuid: string;
  /** 标签ID */
  TagId: number;
  /** 云服务器地区 */
  MRegion: string;
  /** 云服务器类型(CVM|BM) */
  MArea: string;
}

declare interface AddMachineTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CloseProVersionRequest {
  /** 主机唯一标识Uuid。黑石的InstanceId，CVM的Uuid */
  Quuid?: string;
}

declare interface CloseProVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBaselineStrategyRequest {
  /** 策略名称 */
  StrategyName: string;
  /** 检测周期, 表示每隔多少天进行检测.示例: 2, 表示每2天进行检测一次. */
  ScanCycle: number;
  /** 定期检测时间，该时间下发扫描. 示例:“22:00”, 表示在22:00下发检测 */
  ScanAt: string;
  /** 该策略下选择的基线id数组. 示例: [1,3,5,7] */
  CategoryIds: number[];
  /** 扫描范围是否全部服务器, 1:是 0:否, 为1则为全部专业版主机 */
  IsGlobal: number;
  /** 云主机类型：“CVM”：虚拟主机，"BMS"：裸金属，"ECM"：边缘计算主机 */
  MachineType: string;
  /** 主机地域. 示例: "ap-bj" */
  RegionCode: string;
  /** 主机id数组. 示例: ["quuid1","quuid2"] */
  Quuids?: string[];
}

declare interface CreateBaselineStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOpenPortTaskRequest {
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
}

declare interface CreateOpenPortTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateProcessTaskRequest {
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
}

declare interface CreateProcessTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUsualLoginPlacesRequest {
  /** 云镜客户端UUID数组。 */
  Uuids: string[];
  /** 登录地域信息数组。 */
  Places: Place[];
}

declare interface CreateUsualLoginPlacesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAttackLogsRequest {
  /** 日志ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteAttackLogsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteBashEventsRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteBashEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteBashRulesRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteBashRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteBruteAttacksRequest {
  /** 暴力破解事件Id数组。 */
  Ids: number[];
}

declare interface DeleteBruteAttacksResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLoginWhiteListRequest {
  /** 白名单ID */
  Ids: number[];
}

declare interface DeleteLoginWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMachineRequest {
  /** 云镜客户端Uuid。 */
  Uuid: string;
}

declare interface DeleteMachineResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMachineTagRequest {
  /** 关联的标签ID */
  Rid: number;
}

declare interface DeleteMachineTagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMaliciousRequestsRequest {
  /** 恶意请求记录ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteMaliciousRequestsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMalwaresRequest {
  /** 木马记录ID数组 */
  Ids: number[];
}

declare interface DeleteMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNonlocalLoginPlacesRequest {
  /** 异地登录事件ID数组。 */
  Ids: number[];
}

declare interface DeleteNonlocalLoginPlacesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePrivilegeEventsRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeletePrivilegeEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePrivilegeRulesRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeletePrivilegeRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReverseShellEventsRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteReverseShellEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReverseShellRulesRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteReverseShellRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTagsRequest {
  /** 标签ID */
  Ids: number[];
}

declare interface DeleteTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUsualLoginPlacesRequest {
  /** 云镜客户端Uuid */
  Uuid: string;
  /** 已添加常用登录地城市ID数组 */
  CityIds: number[];
}

declare interface DeleteUsualLoginPlacesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountStatisticsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Username - String - 是否必填：否 - 帐号用户名 */
  Filters?: Filter[];
}

declare interface DescribeAccountStatisticsResponse {
  /** 帐号统计列表记录总数。 */
  TotalCount?: number;
  /** 帐号统计列表。 */
  AccountStatistics?: AccountStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 云镜客户端唯一Uuid。Username和Uuid必填其一，使用Uuid表示，查询该主机下列表信息。 */
  Uuid?: string;
  /** 云镜客户端唯一Uuid。Username和Uuid必填其一，使用Username表示，查询该用户名下列表信息。 */
  Username?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Username - String - 是否必填：否 - 帐号名Privilege - String - 是否必填：否 - 帐号类型（ORDINARY: 普通帐号 | SUPPER: 超级管理员帐号）MachineIp - String - 是否必填：否 - 主机内网IP */
  Filters?: Filter[];
}

declare interface DescribeAccountsResponse {
  /** 帐号列表记录总数。 */
  TotalCount?: number;
  /** 帐号数据列表。 */
  Accounts?: Account[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAgentVulsRequest {
  /** 漏洞类型。WEB: Web应用漏洞SYSTEM：系统组件漏洞BASELINE：安全基线 */
  VulType: string;
  /** 客户端UUID。 */
  Uuid: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | FIXED：已修复） */
  Filters?: Filter[];
}

declare interface DescribeAgentVulsResponse {
  /** 记录总数 */
  TotalCount?: number;
  /** 主机漏洞信息 */
  AgentVuls?: AgentVul[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAlarmAttributeRequest {
}

declare interface DescribeAlarmAttributeResponse {
  /** 防护软件离线告警状态：OPEN：告警已开启CLOSE： 告警已关闭 */
  Offline?: string;
  /** 发现木马告警状态：OPEN：告警已开启CLOSE： 告警已关闭 */
  Malware?: string;
  /** 发现异地登录告警状态：OPEN：告警已开启CLOSE： 告警已关闭 */
  NonlocalLogin?: string;
  /** 被暴力破解成功告警状态：OPEN：告警已开启CLOSE： 告警已关闭 */
  CrackSuccess?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAttackLogInfoRequest {
  /** 日志ID */
  Id: number;
}

declare interface DescribeAttackLogInfoResponse {
  /** 日志ID */
  Id?: number;
  /** 主机ID */
  Quuid?: string;
  /** 攻击来源端口 */
  SrcPort?: number;
  /** 攻击来源IP */
  SrcIp?: string;
  /** 攻击目标端口 */
  DstPort?: number;
  /** 攻击目标IP */
  DstIp?: string;
  /** 攻击方法 */
  HttpMethod?: string;
  /** 攻击目标主机 */
  HttpHost?: string;
  /** 攻击头信息 */
  HttpHead?: string;
  /** 攻击者浏览器标识 */
  HttpUserAgent?: string;
  /** 请求源 */
  HttpReferer?: string;
  /** 威胁类型 */
  VulType?: string;
  /** 攻击路径 */
  HttpCgi?: string;
  /** 攻击参数 */
  HttpParam?: string;
  /** 攻击时间 */
  CreatedAt?: string;
  /** 攻击内容 */
  HttpContent?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAttackLogsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)MachineIp - String - 是否必填：否 - 主机内网IPDateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"] */
  Filters?: Filter[];
  /** 主机安全客户端ID */
  Uuid?: string;
  /** 云主机机器ID */
  Quuid?: string;
}

declare interface DescribeAttackLogsResponse {
  /** 日志列表 */
  AttackLogs?: DefendAttackLog[] | null;
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBashEventsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键词(主机内网IP) */
  Filters?: Filter[];
}

declare interface DescribeBashEventsResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 高危命令事件列表 */
  List?: BashEvent[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBashRulesRequest {
  /** 0-系统规则; 1-用户规则 */
  Type: number;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键字(规则名称) */
  Filters?: Filter[];
}

declare interface DescribeBashRulesResponse {
  /** 列表内容 */
  List?: BashRule[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBruteAttacksRequest {
  /** 客户端唯一Uuid。 */
  Uuid?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字Status - String - 是否必填：否 - 查询状态（FAILED：破解失败 |SUCCESS：破解成功） */
  Filters?: Filter[];
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
}

declare interface DescribeBruteAttacksResponse {
  /** 事件数量 */
  TotalCount?: number;
  /** 暴力破解事件列表 */
  BruteAttacks?: BruteAttack[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComponentInfoRequest {
  /** 组件ID。 */
  ComponentId: number;
}

declare interface DescribeComponentInfoResponse {
  /** 组件ID。 */
  Id?: number;
  /** 组件名称。 */
  ComponentName?: string;
  /** 组件类型。WEB：web组件SYSTEM：系统组件 */
  ComponentType?: string;
  /** 组件官网。 */
  Homepage?: string;
  /** 组件描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComponentStatisticsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ComponentName - String - 是否必填：否 - 组件名称 */
  Filters?: Filter[];
}

declare interface DescribeComponentStatisticsResponse {
  /** 组件统计列表记录总数。 */
  TotalCount?: number;
  /** 组件统计列表数据数组。 */
  ComponentStatistics?: ComponentStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComponentsRequest {
  /** 云镜客户端唯一Uuid。Uuid和ComponentId必填其一，使用Uuid表示，查询该主机列表信息。 */
  Uuid?: string;
  /** 组件ID。Uuid和ComponentId必填其一，使用ComponentId表示，查询该组件列表信息。 */
  ComponentId?: number;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ComponentVersion - String - 是否必填：否 - 组件版本号MachineIp - String - 是否必填：否 - 主机内网IP */
  Filters?: Filter[];
}

declare interface DescribeComponentsResponse {
  /** 组件列表记录总数。 */
  TotalCount?: number;
  /** 组件列表数据。 */
  Components?: Component[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeHistoryAccountsRequest {
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Username - String - 是否必填：否 - 帐号名 */
  Filters?: Filter[];
}

declare interface DescribeHistoryAccountsResponse {
  /** 帐号变更历史列表记录总数。 */
  TotalCount?: number;
  /** 帐号变更历史数据数组。 */
  HistoryAccounts?: HistoryAccount[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImpactedHostsRequest {
  /** 漏洞种类ID。 */
  VulId: number;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - 状态筛选（UN_OPERATED：待处理 | FIXED：已修复） */
  Filters?: Filter[];
}

declare interface DescribeImpactedHostsResponse {
  /** 记录总数 */
  TotalCount?: number;
  /** 漏洞影响机器列表数组 */
  ImpactedHosts?: ImpactedHost[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLoginWhiteListRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字 */
  Filters?: Filter[];
}

declare interface DescribeLoginWhiteListResponse {
  /** 记录总数 */
  TotalCount?: number;
  /** 异地登录白名单数组 */
  LoginWhiteLists?: LoginWhiteLists[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMachineInfoRequest {
  /** 云镜客户端唯一Uuid。 */
  Uuid?: string;
}

declare interface DescribeMachineInfoResponse {
  /** 机器ip。 */
  MachineIp?: string;
  /** 受云镜保护天数。 */
  ProtectDays?: number;
  /** 操作系统。 */
  MachineOs?: string;
  /** 主机名称。 */
  MachineName?: string;
  /** 在线状态。ONLINE： 在线OFFLINE：离线 */
  MachineStatus?: string;
  /** CVM或BM主机唯一标识。 */
  InstanceId?: string;
  /** 主机外网IP。 */
  MachineWanIp?: string;
  /** CVM或BM主机唯一Uuid。 */
  Quuid?: string;
  /** 云镜客户端唯一Uuid。 */
  Uuid?: string;
  /** 是否开通专业版。true：是false：否 */
  IsProVersion?: boolean;
  /** 专业版开通时间。 */
  ProVersionOpenDate?: string;
  /** 云主机类型。CVM: 虚拟主机BM: 黑石物理机 */
  MachineType?: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion?: string;
  /** 主机状态。POSTPAY: 表示后付费，即按量计费 PREPAY: 表示预付费，即包年包月 */
  PayMode?: string;
  /** 免费木马剩余检测数量。 */
  FreeMalwaresLeft?: number;
  /** 免费漏洞剩余检测数量。 */
  FreeVulsLeft?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMachinesRequest {
  /** 云主机类型。CVM：表示虚拟主机BM: 表示黑石物理机 */
  MachineType: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字 Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装）Version - String 是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）每个过滤条件只支持一个值，暂不支持多个值“或”关系查询 */
  Filters?: Filter[];
}

declare interface DescribeMachinesResponse {
  /** 主机列表 */
  Machines?: Machine[];
  /** 主机数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMaliciousRequestsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | TRUSTED：已信任 | UN_TRUSTED：已取消信任）Domain - String - 是否必填：否 - 恶意请求的域名MachineIp - String - 是否必填：否 - 主机内网IP */
  Filters?: Filter[];
  /** 云镜客户端唯一UUID。 */
  Uuid?: string;
}

declare interface DescribeMaliciousRequestsResponse {
  /** 记录总数。 */
  TotalCount?: number;
  /** 恶意请求记录数组。 */
  MaliciousRequests?: MaliciousRequest[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMalwaresRequest {
  /** 客户端唯一Uuid。 */
  Uuid?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字 Status - String - 是否必填：否 - 木马状态（UN_OPERATED: 未处理 | SEGREGATED: 已隔离|TRUSTED：信任）每个过滤条件只支持一个值，暂不支持多个值“或”关系查询。 */
  Filters?: Filter[];
}

declare interface DescribeMalwaresResponse {
  /** 木马总数。 */
  TotalCount?: number;
  /** Malware数组。 */
  Malwares?: Malware[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNonlocalLoginPlacesRequest {
  /** 客户端唯一Uuid。 */
  Uuid?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字Status - String - 是否必填：否 - 登录状态（NON_LOCAL_LOGIN: 异地登录 | NORMAL_LOGIN : 正常登录） */
  Filters?: Filter[];
}

declare interface DescribeNonlocalLoginPlacesResponse {
  /** 记录总数。 */
  TotalCount?: number;
  /** 异地登录信息数组。 */
  NonLocalLoginPlaces?: NonLocalLoginPlace[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOpenPortStatisticsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Port - Uint64 - 是否必填：否 - 端口号 */
  Filters?: Filter[];
}

declare interface DescribeOpenPortStatisticsResponse {
  /** 端口统计列表总数 */
  TotalCount?: number;
  /** 端口统计数据列表 */
  OpenPortStatistics?: OpenPortStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOpenPortTaskStatusRequest {
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
}

declare interface DescribeOpenPortTaskStatusResponse {
  /** 任务状态。COMPLETE：完成（此时可以调用DescribeOpenPorts接口获取实时进程列表）AGENT_OFFLINE：云镜客户端离线COLLECTING：端口获取中FAILED：进程获取失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOpenPortsRequest {
  /** 云镜客户端唯一Uuid。Port和Uuid必填其一，使用Uuid表示，查询该主机列表信息。 */
  Uuid?: string;
  /** 开放端口号。Port和Uuid必填其一，使用Port表示查询该端口的列表信息。 */
  Port?: number;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Port - Uint64 - 是否必填：否 - 端口号ProcessName - String - 是否必填：否 - 进程名MachineIp - String - 是否必填：否 - 主机内网IP */
  Filters?: Filter[];
}

declare interface DescribeOpenPortsResponse {
  /** 端口列表记录总数。 */
  TotalCount?: number;
  /** 端口列表。 */
  OpenPorts?: OpenPort[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOverviewStatisticsRequest {
}

declare interface DescribeOverviewStatisticsResponse {
  /** 服务器在线数。 */
  OnlineMachineNum?: number;
  /** 专业服务器数。 */
  ProVersionMachineNum?: number;
  /** 木马文件数。 */
  MalwareNum?: number;
  /** 异地登录数。 */
  NonlocalLoginNum?: number;
  /** 暴力破解成功数。 */
  BruteAttackSuccessNum?: number;
  /** 漏洞数。 */
  VulNum?: number;
  /** 安全基线数。 */
  BaseLineNum?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePrivilegeEventsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键词(主机IP) */
  Filters?: Filter[];
}

declare interface DescribePrivilegeEventsResponse {
  /** 数据列表 */
  List?: PrivilegeEscalationProcess[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePrivilegeRulesRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键字(进程名称) */
  Filters?: Filter[];
}

declare interface DescribePrivilegeRulesResponse {
  /** 列表内容 */
  List?: PrivilegeRule[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProVersionInfoRequest {
}

declare interface DescribeProVersionInfoResponse {
  /** 后付费昨日扣费 */
  PostPayCost?: number;
  /** 新增主机是否自动开通专业版 */
  IsAutoOpenProVersion?: boolean;
  /** 开通专业版主机数 */
  ProVersionNum?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProcessStatisticsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ProcessName - String - 是否必填：否 - 进程名 */
  Filters?: Filter[];
}

declare interface DescribeProcessStatisticsResponse {
  /** 进程统计列表记录总数。 */
  TotalCount?: number;
  /** 进程统计列表数据数组。 */
  ProcessStatistics?: ProcessStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProcessTaskStatusRequest {
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
}

declare interface DescribeProcessTaskStatusResponse {
  /** 任务状态。COMPLETE：完成（此时可以调用DescribeProcesses接口获取实时进程列表）AGENT_OFFLINE：云镜客户端离线COLLECTING：进程获取中FAILED：进程获取失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProcessesRequest {
  /** 云镜客户端唯一Uuid。Uuid和ProcessName必填其一，使用Uuid表示，查询该主机列表信息。 */
  Uuid?: string;
  /** 进程名。Uuid和ProcessName必填其一，使用ProcessName表示，查询该进程列表信息。 */
  ProcessName?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ProcessName - String - 是否必填：否 - 进程名MachineIp - String - 是否必填：否 - 主机内网IP */
  Filters?: Filter[];
}

declare interface DescribeProcessesResponse {
  /** 进程列表记录总数。 */
  TotalCount?: number;
  /** 进程列表数据数组。 */
  Processes?: Process[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReverseShellEventsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键字(主机内网IP|进程名) */
  Filters?: Filter[];
}

declare interface DescribeReverseShellEventsResponse {
  /** 列表内容 */
  List?: ReverseShell[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReverseShellRulesRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键字(进程名称) */
  Filters?: Filter[];
}

declare interface DescribeReverseShellRulesResponse {
  /** 列表内容 */
  List?: ReverseShellRule[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityDynamicsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeSecurityDynamicsResponse {
  /** 安全事件消息数组。 */
  SecurityDynamics?: SecurityDynamic[];
  /** 记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityTrendsRequest {
  /** 开始时间。 */
  BeginDate: string;
  /** 结束时间。 */
  EndDate: string;
}

declare interface DescribeSecurityTrendsResponse {
  /** 木马事件统计数据数组。 */
  Malwares?: SecurityTrend[];
  /** 异地登录事件统计数据数组。 */
  NonLocalLoginPlaces?: SecurityTrend[];
  /** 密码破解事件统计数据数组。 */
  BruteAttacks?: SecurityTrend[];
  /** 漏洞统计数据数组。 */
  Vuls?: SecurityTrend[];
  /** 基线统计数据数组。 */
  BaseLines?: SecurityTrend[];
  /** 恶意请求统计数据数组。 */
  MaliciousRequests?: SecurityTrend[];
  /** 高危命令统计数据数组。 */
  HighRiskBashs?: SecurityTrend[];
  /** 反弹shell统计数据数组。 */
  ReverseShells?: SecurityTrend[];
  /** 本地提权统计数据数组。 */
  PrivilegeEscalations?: SecurityTrend[];
  /** 网络攻击统计数据数组。 */
  CyberAttacks?: SecurityTrend[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagMachinesRequest {
  /** 标签ID */
  Id: number;
}

declare interface DescribeTagMachinesResponse {
  /** 列表数据 */
  List?: TagMachine[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagsRequest {
  /** 云主机类型。CVM：表示虚拟主机BM: 表示黑石物理机 */
  MachineType?: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion?: string;
}

declare interface DescribeTagsResponse {
  /** 列表信息 */
  List?: Tag[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUsualLoginPlacesRequest {
  /** 云镜客户端UUID */
  Uuid: string;
}

declare interface DescribeUsualLoginPlacesResponse {
  /** 常用登录地数组 */
  UsualLoginPlaces?: UsualPlace[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulInfoRequest {
  /** 漏洞种类ID。 */
  VulId: number;
}

declare interface DescribeVulInfoResponse {
  /** 漏洞种类ID。 */
  VulId?: number;
  /** 漏洞名称。 */
  VulName?: string;
  /** 漏洞等级。 */
  VulLevel?: string;
  /** 漏洞类型。 */
  VulType?: string;
  /** 漏洞描述。 */
  Description?: string;
  /** 修复方案。 */
  RepairPlan?: string;
  /** 漏洞CVE。 */
  CveId?: string;
  /** 参考链接。 */
  Reference?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulScanResultRequest {
}

declare interface DescribeVulScanResultResponse {
  /** 漏洞数量。 */
  VulNum?: number;
  /** 专业版机器数。 */
  ProVersionNum?: number;
  /** 受影响的专业版主机数。 */
  ImpactedHostNum?: number;
  /** 主机总数。 */
  HostNum?: number;
  /** 基础版机器数。 */
  BasicVersionNum?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulsRequest {
  /** 漏洞类型。WEB：Web应用漏洞SYSTEM：系统组件漏洞BASELINE：安全基线 */
  VulType: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - 状态筛选（UN_OPERATED: 待处理 | FIXED：已修复）Status过滤条件值只能取其一，不能是“或”逻辑。 */
  Filters?: Filter[];
}

declare interface DescribeVulsResponse {
  /** 漏洞数量。 */
  TotalCount?: number;
  /** 漏洞列表数组。 */
  Vuls?: Vul[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWeeklyReportBruteAttacksRequest {
  /** 专业周报开始时间。 */
  BeginDate: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeWeeklyReportBruteAttacksResponse {
  /** 专业周报密码破解数组。 */
  WeeklyReportBruteAttacks?: WeeklyReportBruteAttack[];
  /** 记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWeeklyReportInfoRequest {
  /** 专业周报开始时间。 */
  BeginDate: string;
}

declare interface DescribeWeeklyReportInfoResponse {
  /** 账号所属公司或个人名称。 */
  CompanyName?: string;
  /** 机器总数。 */
  MachineNum?: number;
  /** 云镜客户端在线数。 */
  OnlineMachineNum?: number;
  /** 云镜客户端离线数。 */
  OfflineMachineNum?: number;
  /** 开通云镜专业版数量。 */
  ProVersionMachineNum?: number;
  /** 周报开始时间。 */
  BeginDate?: string;
  /** 周报结束时间。 */
  EndDate?: string;
  /** 安全等级。HIGH：高MIDDLE：中LOW：低 */
  Level?: string;
  /** 木马记录数。 */
  MalwareNum?: number;
  /** 异地登录数。 */
  NonlocalLoginNum?: number;
  /** 密码破解成功数。 */
  BruteAttackSuccessNum?: number;
  /** 漏洞数。 */
  VulNum?: number;
  /** 导出文件下载地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWeeklyReportMalwaresRequest {
  /** 专业周报开始时间。 */
  BeginDate: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeWeeklyReportMalwaresResponse {
  /** 专业周报木马数据。 */
  WeeklyReportMalwares?: WeeklyReportMalware[];
  /** 记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWeeklyReportNonlocalLoginPlacesRequest {
  /** 专业周报开始时间。 */
  BeginDate: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeWeeklyReportNonlocalLoginPlacesResponse {
  /** 专业周报异地登录数据。 */
  WeeklyReportNonlocalLoginPlaces?: WeeklyReportNonlocalLoginPlace[];
  /** 记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWeeklyReportVulsRequest {
  /** 专业版周报开始时间。 */
  BeginDate: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeWeeklyReportVulsResponse {
  /** 专业周报漏洞数据数组。 */
  WeeklyReportVuls?: WeeklyReportVul[];
  /** 记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWeeklyReportsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeWeeklyReportsResponse {
  /** 专业周报列表数组。 */
  WeeklyReports?: WeeklyReport[];
  /** 记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EditBashRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 危险等级(1: 高危 2:中危 3: 低危) */
  Level: number;
  /** 正则表达式 */
  Rule: string;
  /** 规则ID(新增时不填) */
  Id?: number;
  /** 客户端ID(IsGlobal为1时，Uuid或Hostip必填一个) */
  Uuid?: string;
  /** 主机IP(IsGlobal为1时，Uuid或Hostip必填一个) */
  Hostip?: string;
  /** 是否全局规则(默认否) */
  IsGlobal?: number;
}

declare interface EditBashRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EditPrivilegeRuleRequest {
  /** 规则ID(新增时请留空) */
  Id?: number;
  /** 客户端ID(IsGlobal为1时，Uuid或Hostip必填一个) */
  Uuid?: string;
  /** 主机IP(IsGlobal为1时，Uuid或Hostip必填一个) */
  Hostip?: string;
  /** 进程名 */
  ProcessName?: string;
  /** 是否S权限进程 */
  SMode?: number;
  /** 是否全局规则(默认否) */
  IsGlobal?: number;
}

declare interface EditPrivilegeRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EditReverseShellRuleRequest {
  /** 规则ID(新增时请留空) */
  Id?: number;
  /** 客户端ID(IsGlobal为1时，Uuid或Hostip必填一个) */
  Uuid?: string;
  /** 主机IP(IsGlobal为1时，Uuid或Hostip必填一个) */
  Hostip?: string;
  /** 目标IP */
  DestIp?: string;
  /** 目标端口 */
  DestPort?: string;
  /** 进程名 */
  ProcessName?: string;
  /** 是否全局规则(默认否) */
  IsGlobal?: number;
}

declare interface EditReverseShellRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EditTagsRequest {
  /** 标签名 */
  Name: string;
  /** 标签ID */
  Id?: number;
  /** CVM主机ID */
  Quuids?: string[];
}

declare interface EditTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportAttackLogsRequest {
}

declare interface ExportAttackLogsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 导出任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportBashEventsRequest {
}

declare interface ExportBashEventsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportBruteAttacksRequest {
}

declare interface ExportBruteAttacksResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportMaliciousRequestsRequest {
}

declare interface ExportMaliciousRequestsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportMalwaresRequest {
}

declare interface ExportMalwaresResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportNonlocalLoginPlacesRequest {
}

declare interface ExportNonlocalLoginPlacesResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 导出任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportPrivilegeEventsRequest {
}

declare interface ExportPrivilegeEventsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportReverseShellEventsRequest {
}

declare interface ExportReverseShellEventsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IgnoreImpactedHostsRequest {
  /** 漏洞ID数组。 */
  Ids: number[];
}

declare interface IgnoreImpactedHostsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceOpenProVersionPrepaidRequest {
  /** 预付费模式(包年包月)参数设置。 */
  ChargePrepaid: ChargePrepaid;
  /** 需要开通专业版机器列表数组。 */
  Machines: ProVersionMachine[];
}

declare interface InquiryPriceOpenProVersionPrepaidResponse {
  /** 预支费用的原价，单位：元。 */
  OriginalPrice?: number;
  /** 预支费用的折扣价，单位：元。 */
  DiscountPrice?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MaliciousRequest {
  /** 记录ID。 */
  Id: number;
  /** 云镜客户端UUID。 */
  Uuid: string;
  /** 主机内网IP。 */
  MachineIp: string;
  /** 主机名。 */
  MachineName: string;
  /** 恶意请求域名。 */
  Domain: string;
  /** 恶意请求数。 */
  Count: number;
  /** 进程名。 */
  ProcessName: string;
  /** 记录状态。UN_OPERATED：待处理TRUSTED：已信任UN_TRUSTED：已取消信任 */
  Status: string;
  /** 恶意请求域名描述。 */
  Description: string;
  /** 参考地址。 */
  Reference: string;
  /** 发现时间。 */
  CreateTime: string;
  /** 记录合并时间。 */
  MergeTime: string;
  /** 进程MD5值。 */
  ProcessMd5: string;
  /** 执行命令行。 */
  CmdLine: string;
  /** 进程PID。 */
  Pid: number;
}

declare interface MisAlarmNonlocalLoginPlacesRequest {
  /** 异地登录事件Id数组。 */
  Ids: number[];
}

declare interface MisAlarmNonlocalLoginPlacesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAlarmAttributeRequest {
  /** 告警项目。Offline：防护软件离线Malware：发现木马文件NonlocalLogin：发现异地登录行为CrackSuccess：被暴力破解成功 */
  Attribute: string;
  /** 告警项目属性。CLOSE：关闭OPEN：打开 */
  Value: string;
}

declare interface ModifyAlarmAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAutoOpenProVersionConfigRequest {
  /** 设置自动开通状态。CLOSE：关闭OPEN：打开 */
  Status: string;
}

declare interface ModifyAutoOpenProVersionConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyLoginWhiteListRequest {
  /** 白名单规则 */
  Rules: LoginWhiteListsRule;
}

declare interface ModifyLoginWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyProVersionRenewFlagRequest {
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费 */
  RenewFlag: string;
  /** 主机唯一ID，对应CVM的uuid、BM的instanceId。 */
  Quuid: string;
}

declare interface ModifyProVersionRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OpenProVersionPrepaidRequest {
  /** 购买相关参数。 */
  ChargePrepaid: ChargePrepaid;
  /** 需要开通专业版主机信息数组。 */
  Machines: ProVersionMachine[];
}

declare interface OpenProVersionPrepaidResponse {
  /** 订单ID列表。 */
  DealIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OpenProVersionRequest {
  /** 云主机类型。CVM：表示虚拟主机BM: 表示黑石物理机 */
  MachineType: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion: string;
  /** 主机唯一标识Uuid数组。黑石的InstanceId，CVM的Uuid */
  Quuids: string[];
  /** 活动ID。 */
  ActivityId?: number;
}

declare interface OpenProVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RecoverMalwaresRequest {
  /** 木马Id数组,单次最大删除不能超过200条 */
  Ids: number[];
}

declare interface RecoverMalwaresResponse {
  /** 恢复成功id数组 */
  SuccessIds?: number[];
  /** 恢复失败id数组 */
  FailedIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RenewProVersionRequest {
  /** 购买相关参数。 */
  ChargePrepaid: ChargePrepaid;
  /** 主机唯一ID，对应CVM的uuid、BM的InstanceId。 */
  Quuid: string;
}

declare interface RenewProVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RescanImpactedHostRequest {
  /** 漏洞ID。 */
  Id: number;
}

declare interface RescanImpactedHostResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SeparateMalwaresRequest {
  /** 木马事件ID数组。 */
  Ids: number[];
}

declare interface SeparateMalwaresResponse {
  /** 隔离成功的id数组。 */
  SuccessIds?: number[];
  /** 隔离失败的id数组。 */
  FailedIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetBashEventsStatusRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
  /** 新状态(0-待处理 1-高危 2-正常) */
  Status: number;
}

declare interface SetBashEventsStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwitchBashRulesRequest {
  /** 规则ID */
  Id: number;
  /** 是否禁用 */
  Disabled: number;
}

declare interface SwitchBashRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TrustMaliciousRequestRequest {
  /** 恶意请求记录ID。 */
  Id: number;
}

declare interface TrustMaliciousRequestResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TrustMalwaresRequest {
  /** 木马ID数组。 */
  Ids: number[];
}

declare interface TrustMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UntrustMaliciousRequestRequest {
  /** 受信任记录ID。 */
  Id: number;
}

declare interface UntrustMaliciousRequestResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UntrustMalwaresRequest {
  /** 木马ID数组，单次最大处理不能超过200条。 */
  Ids: number[];
}

declare interface UntrustMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Yunjing 主机安全} */
declare interface Yunjing {
  (): Versions;
  /** {@link AddLoginWhiteList 新增白名单规则}({@link AddLoginWhiteListRequest 请求参数}): {@link AddLoginWhiteListResponse 返回参数} */
  AddLoginWhiteList(data: AddLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddLoginWhiteListResponse>;
  /** {@link AddMachineTag 增加机器关联标签}({@link AddMachineTagRequest 请求参数}): {@link AddMachineTagResponse 返回参数} */
  AddMachineTag(data: AddMachineTagRequest, config?: AxiosRequestConfig): AxiosPromise<AddMachineTagResponse>;
  /** {@link CloseProVersion 关闭专业版}({@link CloseProVersionRequest 请求参数}): {@link CloseProVersionResponse 返回参数} */
  CloseProVersion(data?: CloseProVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CloseProVersionResponse>;
  /** {@link CreateBaselineStrategy 创建基线策略}({@link CreateBaselineStrategyRequest 请求参数}): {@link CreateBaselineStrategyResponse 返回参数} */
  CreateBaselineStrategy(data: CreateBaselineStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaselineStrategyResponse>;
  /** {@link CreateOpenPortTask 创建实时获取端口任务}({@link CreateOpenPortTaskRequest 请求参数}): {@link CreateOpenPortTaskResponse 返回参数} */
  CreateOpenPortTask(data: CreateOpenPortTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenPortTaskResponse>;
  /** {@link CreateProcessTask 创建实时拉取进程任务}({@link CreateProcessTaskRequest 请求参数}): {@link CreateProcessTaskResponse 返回参数} */
  CreateProcessTask(data: CreateProcessTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProcessTaskResponse>;
  /** {@link CreateUsualLoginPlaces 添加常用登录地}({@link CreateUsualLoginPlacesRequest 请求参数}): {@link CreateUsualLoginPlacesResponse 返回参数} */
  CreateUsualLoginPlaces(data: CreateUsualLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUsualLoginPlacesResponse>;
  /** {@link DeleteAttackLogs 删除网络攻击日志}({@link DeleteAttackLogsRequest 请求参数}): {@link DeleteAttackLogsResponse 返回参数} */
  DeleteAttackLogs(data: DeleteAttackLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttackLogsResponse>;
  /** {@link DeleteBashEvents 删除高危命令事件}({@link DeleteBashEventsRequest 请求参数}): {@link DeleteBashEventsResponse 返回参数} */
  DeleteBashEvents(data: DeleteBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBashEventsResponse>;
  /** {@link DeleteBashRules 删除高危命令规则}({@link DeleteBashRulesRequest 请求参数}): {@link DeleteBashRulesResponse 返回参数} */
  DeleteBashRules(data: DeleteBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBashRulesResponse>;
  /** {@link DeleteBruteAttacks 删除暴力破解记录}({@link DeleteBruteAttacksRequest 请求参数}): {@link DeleteBruteAttacksResponse 返回参数} */
  DeleteBruteAttacks(data: DeleteBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBruteAttacksResponse>;
  /** {@link DeleteLoginWhiteList 删除白名单规则}({@link DeleteLoginWhiteListRequest 请求参数}): {@link DeleteLoginWhiteListResponse 返回参数} */
  DeleteLoginWhiteList(data: DeleteLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoginWhiteListResponse>;
  /** {@link DeleteMachine 卸载云镜客户端}({@link DeleteMachineRequest 请求参数}): {@link DeleteMachineResponse 返回参数} */
  DeleteMachine(data: DeleteMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineResponse>;
  /** {@link DeleteMachineTag 删除服务器关联的标签}({@link DeleteMachineTagRequest 请求参数}): {@link DeleteMachineTagResponse 返回参数} */
  DeleteMachineTag(data: DeleteMachineTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineTagResponse>;
  /** {@link DeleteMaliciousRequests 删除恶意请求记录}({@link DeleteMaliciousRequestsRequest 请求参数}): {@link DeleteMaliciousRequestsResponse 返回参数} */
  DeleteMaliciousRequests(data: DeleteMaliciousRequestsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMaliciousRequestsResponse>;
  /** {@link DeleteMalwares 删除木马记录}({@link DeleteMalwaresRequest 请求参数}): {@link DeleteMalwaresResponse 返回参数} */
  DeleteMalwares(data: DeleteMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMalwaresResponse>;
  /** {@link DeleteNonlocalLoginPlaces 删除异地登录记录}({@link DeleteNonlocalLoginPlacesRequest 请求参数}): {@link DeleteNonlocalLoginPlacesResponse 返回参数} */
  DeleteNonlocalLoginPlaces(data: DeleteNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNonlocalLoginPlacesResponse>;
  /** {@link DeletePrivilegeEvents 删除本地提权事件}({@link DeletePrivilegeEventsRequest 请求参数}): {@link DeletePrivilegeEventsResponse 返回参数} */
  DeletePrivilegeEvents(data: DeletePrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivilegeEventsResponse>;
  /** {@link DeletePrivilegeRules 删除本地提权规则}({@link DeletePrivilegeRulesRequest 请求参数}): {@link DeletePrivilegeRulesResponse 返回参数} */
  DeletePrivilegeRules(data: DeletePrivilegeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivilegeRulesResponse>;
  /** {@link DeleteReverseShellEvents 删除反弹Shell事件}({@link DeleteReverseShellEventsRequest 请求参数}): {@link DeleteReverseShellEventsResponse 返回参数} */
  DeleteReverseShellEvents(data: DeleteReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellEventsResponse>;
  /** {@link DeleteReverseShellRules 删除反弹Shell规则}({@link DeleteReverseShellRulesRequest 请求参数}): {@link DeleteReverseShellRulesResponse 返回参数} */
  DeleteReverseShellRules(data: DeleteReverseShellRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellRulesResponse>;
  /** {@link DeleteTags 删除标签}({@link DeleteTagsRequest 请求参数}): {@link DeleteTagsResponse 返回参数} */
  DeleteTags(data: DeleteTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTagsResponse>;
  /** {@link DeleteUsualLoginPlaces 删除常用登录地}({@link DeleteUsualLoginPlacesRequest 请求参数}): {@link DeleteUsualLoginPlacesResponse 返回参数} */
  DeleteUsualLoginPlaces(data: DeleteUsualLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsualLoginPlacesResponse>;
  /** {@link DescribeAccountStatistics 获取帐号统计列表数据}({@link DescribeAccountStatisticsRequest 请求参数}): {@link DescribeAccountStatisticsResponse 返回参数} */
  DescribeAccountStatistics(data?: DescribeAccountStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountStatisticsResponse>;
  /** {@link DescribeAccounts 获取帐号列表}({@link DescribeAccountsRequest 请求参数}): {@link DescribeAccountsResponse 返回参数} */
  DescribeAccounts(data?: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** {@link DescribeAgentVuls 获取单台主机的漏洞列表}({@link DescribeAgentVulsRequest 请求参数}): {@link DescribeAgentVulsResponse 返回参数} */
  DescribeAgentVuls(data: DescribeAgentVulsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentVulsResponse>;
  /** {@link DescribeAlarmAttribute 获取告警设置}({@link DescribeAlarmAttributeRequest 请求参数}): {@link DescribeAlarmAttributeResponse 返回参数} */
  DescribeAlarmAttribute(data?: DescribeAlarmAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmAttributeResponse>;
  /** {@link DescribeAttackLogInfo 网络攻击日志详情}({@link DescribeAttackLogInfoRequest 请求参数}): {@link DescribeAttackLogInfoResponse 返回参数} */
  DescribeAttackLogInfo(data: DescribeAttackLogInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackLogInfoResponse>;
  /** {@link DescribeAttackLogs 网络攻击日志列表}({@link DescribeAttackLogsRequest 请求参数}): {@link DescribeAttackLogsResponse 返回参数} */
  DescribeAttackLogs(data?: DescribeAttackLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackLogsResponse>;
  /** {@link DescribeBashEvents 获取高危命令列表}({@link DescribeBashEventsRequest 请求参数}): {@link DescribeBashEventsResponse 返回参数} */
  DescribeBashEvents(data?: DescribeBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashEventsResponse>;
  /** {@link DescribeBashRules 获取高危命令规则列表}({@link DescribeBashRulesRequest 请求参数}): {@link DescribeBashRulesResponse 返回参数} */
  DescribeBashRules(data: DescribeBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashRulesResponse>;
  /** {@link DescribeBruteAttacks 获取云镜破解事件列表}({@link DescribeBruteAttacksRequest 请求参数}): {@link DescribeBruteAttacksResponse 返回参数} */
  DescribeBruteAttacks(data?: DescribeBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBruteAttacksResponse>;
  /** {@link DescribeComponentInfo 获取组件信息}({@link DescribeComponentInfoRequest 请求参数}): {@link DescribeComponentInfoResponse 返回参数} */
  DescribeComponentInfo(data: DescribeComponentInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComponentInfoResponse>;
  /** {@link DescribeComponentStatistics 获取组件统计列表}({@link DescribeComponentStatisticsRequest 请求参数}): {@link DescribeComponentStatisticsResponse 返回参数} */
  DescribeComponentStatistics(data?: DescribeComponentStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComponentStatisticsResponse>;
  /** {@link DescribeComponents 获取组件列表}({@link DescribeComponentsRequest 请求参数}): {@link DescribeComponentsResponse 返回参数} */
  DescribeComponents(data?: DescribeComponentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComponentsResponse>;
  /** {@link DescribeHistoryAccounts 获取帐号变更历史列表}({@link DescribeHistoryAccountsRequest 请求参数}): {@link DescribeHistoryAccountsResponse 返回参数} */
  DescribeHistoryAccounts(data: DescribeHistoryAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHistoryAccountsResponse>;
  /** {@link DescribeImpactedHosts 获取漏洞受影响机器列表}({@link DescribeImpactedHostsRequest 请求参数}): {@link DescribeImpactedHostsResponse 返回参数} */
  DescribeImpactedHosts(data: DescribeImpactedHostsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImpactedHostsResponse>;
  /** {@link DescribeLoginWhiteList 获取异地登录白名单列表}({@link DescribeLoginWhiteListRequest 请求参数}): {@link DescribeLoginWhiteListResponse 返回参数} */
  DescribeLoginWhiteList(data?: DescribeLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteListResponse>;
  /** {@link DescribeMachineInfo 获取机器详情}({@link DescribeMachineInfoRequest 请求参数}): {@link DescribeMachineInfoResponse 返回参数} */
  DescribeMachineInfo(data?: DescribeMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineInfoResponse>;
  /** {@link DescribeMachines 获取区域主机列表}({@link DescribeMachinesRequest 请求参数}): {@link DescribeMachinesResponse 返回参数} */
  DescribeMachines(data: DescribeMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachinesResponse>;
  /** {@link DescribeMaliciousRequests 获取恶意请求数据}({@link DescribeMaliciousRequestsRequest 请求参数}): {@link DescribeMaliciousRequestsResponse 返回参数} */
  DescribeMaliciousRequests(data?: DescribeMaliciousRequestsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaliciousRequestsResponse>;
  /** {@link DescribeMalwares 获取木马信息}({@link DescribeMalwaresRequest 请求参数}): {@link DescribeMalwaresResponse 返回参数} */
  DescribeMalwares(data?: DescribeMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwaresResponse>;
  /** {@link DescribeNonlocalLoginPlaces 获取异地登录事件}({@link DescribeNonlocalLoginPlacesRequest 请求参数}): {@link DescribeNonlocalLoginPlacesResponse 返回参数} */
  DescribeNonlocalLoginPlaces(data?: DescribeNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNonlocalLoginPlacesResponse>;
  /** {@link DescribeOpenPortStatistics 获取端口统计列表}({@link DescribeOpenPortStatisticsRequest 请求参数}): {@link DescribeOpenPortStatisticsResponse 返回参数} */
  DescribeOpenPortStatistics(data?: DescribeOpenPortStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpenPortStatisticsResponse>;
  /** {@link DescribeOpenPortTaskStatus 获取实时拉取端口任务状态}({@link DescribeOpenPortTaskStatusRequest 请求参数}): {@link DescribeOpenPortTaskStatusResponse 返回参数} */
  DescribeOpenPortTaskStatus(data: DescribeOpenPortTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpenPortTaskStatusResponse>;
  /** {@link DescribeOpenPorts 获取端口列表}({@link DescribeOpenPortsRequest 请求参数}): {@link DescribeOpenPortsResponse 返回参数} */
  DescribeOpenPorts(data?: DescribeOpenPortsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpenPortsResponse>;
  /** {@link DescribeOverviewStatistics 获取概览统计数据}({@link DescribeOverviewStatisticsRequest 请求参数}): {@link DescribeOverviewStatisticsResponse 返回参数} */
  DescribeOverviewStatistics(data?: DescribeOverviewStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewStatisticsResponse>;
  /** {@link DescribePrivilegeEvents 获取本地提权事件列表}({@link DescribePrivilegeEventsRequest 请求参数}): {@link DescribePrivilegeEventsResponse 返回参数} */
  DescribePrivilegeEvents(data?: DescribePrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivilegeEventsResponse>;
  /** {@link DescribePrivilegeRules 获取本地提权规则列表}({@link DescribePrivilegeRulesRequest 请求参数}): {@link DescribePrivilegeRulesResponse 返回参数} */
  DescribePrivilegeRules(data?: DescribePrivilegeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivilegeRulesResponse>;
  /** {@link DescribeProVersionInfo 获取专业版信息}({@link DescribeProVersionInfoRequest 请求参数}): {@link DescribeProVersionInfoResponse 返回参数} */
  DescribeProVersionInfo(data?: DescribeProVersionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionInfoResponse>;
  /** {@link DescribeProcessStatistics 获取进程统计列表}({@link DescribeProcessStatisticsRequest 请求参数}): {@link DescribeProcessStatisticsResponse 返回参数} */
  DescribeProcessStatistics(data?: DescribeProcessStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProcessStatisticsResponse>;
  /** {@link DescribeProcessTaskStatus 获取实时拉取进程任务状态}({@link DescribeProcessTaskStatusRequest 请求参数}): {@link DescribeProcessTaskStatusResponse 返回参数} */
  DescribeProcessTaskStatus(data: DescribeProcessTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProcessTaskStatusResponse>;
  /** {@link DescribeProcesses 获取进程列表}({@link DescribeProcessesRequest 请求参数}): {@link DescribeProcessesResponse 返回参数} */
  DescribeProcesses(data?: DescribeProcessesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProcessesResponse>;
  /** {@link DescribeReverseShellEvents 获取反弹Shell列表}({@link DescribeReverseShellEventsRequest 请求参数}): {@link DescribeReverseShellEventsResponse 返回参数} */
  DescribeReverseShellEvents(data?: DescribeReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsResponse>;
  /** {@link DescribeReverseShellRules 获取反弹Shell规则列表}({@link DescribeReverseShellRulesRequest 请求参数}): {@link DescribeReverseShellRulesResponse 返回参数} */
  DescribeReverseShellRules(data?: DescribeReverseShellRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellRulesResponse>;
  /** {@link DescribeSecurityDynamics 获取安全事件消息}({@link DescribeSecurityDynamicsRequest 请求参数}): {@link DescribeSecurityDynamicsResponse 返回参数} */
  DescribeSecurityDynamics(data?: DescribeSecurityDynamicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityDynamicsResponse>;
  /** {@link DescribeSecurityTrends 获取安全事件统计数据}({@link DescribeSecurityTrendsRequest 请求参数}): {@link DescribeSecurityTrendsResponse 返回参数} */
  DescribeSecurityTrends(data: DescribeSecurityTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityTrendsResponse>;
  /** {@link DescribeTagMachines 获取指定标签关联的服务器信息}({@link DescribeTagMachinesRequest 请求参数}): {@link DescribeTagMachinesResponse 返回参数} */
  DescribeTagMachines(data: DescribeTagMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagMachinesResponse>;
  /** {@link DescribeTags 获取所有主机标签}({@link DescribeTagsRequest 请求参数}): {@link DescribeTagsResponse 返回参数} */
  DescribeTags(data?: DescribeTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagsResponse>;
  /** {@link DescribeUsualLoginPlaces 查询常用登录地}({@link DescribeUsualLoginPlacesRequest 请求参数}): {@link DescribeUsualLoginPlacesResponse 返回参数} */
  DescribeUsualLoginPlaces(data: DescribeUsualLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsualLoginPlacesResponse>;
  /** {@link DescribeVulInfo 获取漏洞详情}({@link DescribeVulInfoRequest 请求参数}): {@link DescribeVulInfoResponse 返回参数} */
  DescribeVulInfo(data: DescribeVulInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulInfoResponse>;
  /** {@link DescribeVulScanResult 获取漏洞检测结果}({@link DescribeVulScanResultRequest 请求参数}): {@link DescribeVulScanResultResponse 返回参数} */
  DescribeVulScanResult(data?: DescribeVulScanResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanResultResponse>;
  /** {@link DescribeVuls 获取漏洞列表}({@link DescribeVulsRequest 请求参数}): {@link DescribeVulsResponse 返回参数} */
  DescribeVuls(data: DescribeVulsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulsResponse>;
  /** {@link DescribeWeeklyReportBruteAttacks 获取专业周报密码破解数据}({@link DescribeWeeklyReportBruteAttacksRequest 请求参数}): {@link DescribeWeeklyReportBruteAttacksResponse 返回参数} */
  DescribeWeeklyReportBruteAttacks(data: DescribeWeeklyReportBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWeeklyReportBruteAttacksResponse>;
  /** {@link DescribeWeeklyReportInfo 获取专业周报详情}({@link DescribeWeeklyReportInfoRequest 请求参数}): {@link DescribeWeeklyReportInfoResponse 返回参数} */
  DescribeWeeklyReportInfo(data: DescribeWeeklyReportInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWeeklyReportInfoResponse>;
  /** {@link DescribeWeeklyReportMalwares 获取专业周报木马数据}({@link DescribeWeeklyReportMalwaresRequest 请求参数}): {@link DescribeWeeklyReportMalwaresResponse 返回参数} */
  DescribeWeeklyReportMalwares(data: DescribeWeeklyReportMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWeeklyReportMalwaresResponse>;
  /** {@link DescribeWeeklyReportNonlocalLoginPlaces 获取专业周报异地登录数据}({@link DescribeWeeklyReportNonlocalLoginPlacesRequest 请求参数}): {@link DescribeWeeklyReportNonlocalLoginPlacesResponse 返回参数} */
  DescribeWeeklyReportNonlocalLoginPlaces(data: DescribeWeeklyReportNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWeeklyReportNonlocalLoginPlacesResponse>;
  /** {@link DescribeWeeklyReportVuls 获取专业版周报漏洞数据}({@link DescribeWeeklyReportVulsRequest 请求参数}): {@link DescribeWeeklyReportVulsResponse 返回参数} */
  DescribeWeeklyReportVuls(data: DescribeWeeklyReportVulsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWeeklyReportVulsResponse>;
  /** {@link DescribeWeeklyReports 获取周报列表}({@link DescribeWeeklyReportsRequest 请求参数}): {@link DescribeWeeklyReportsResponse 返回参数} */
  DescribeWeeklyReports(data?: DescribeWeeklyReportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWeeklyReportsResponse>;
  /** {@link EditBashRule 新增或修改高危命令规则}({@link EditBashRuleRequest 请求参数}): {@link EditBashRuleResponse 返回参数} */
  EditBashRule(data: EditBashRuleRequest, config?: AxiosRequestConfig): AxiosPromise<EditBashRuleResponse>;
  /** {@link EditPrivilegeRule 新增或修改本地提权规则}({@link EditPrivilegeRuleRequest 请求参数}): {@link EditPrivilegeRuleResponse 返回参数} */
  EditPrivilegeRule(data?: EditPrivilegeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<EditPrivilegeRuleResponse>;
  /** {@link EditReverseShellRule 编辑反弹Shell规则}({@link EditReverseShellRuleRequest 请求参数}): {@link EditReverseShellRuleResponse 返回参数} */
  EditReverseShellRule(data?: EditReverseShellRuleRequest, config?: AxiosRequestConfig): AxiosPromise<EditReverseShellRuleResponse>;
  /** {@link EditTags 新增或编辑标签}({@link EditTagsRequest 请求参数}): {@link EditTagsResponse 返回参数} */
  EditTags(data: EditTagsRequest, config?: AxiosRequestConfig): AxiosPromise<EditTagsResponse>;
  /** {@link ExportAttackLogs 导出网络攻击日志}({@link ExportAttackLogsRequest 请求参数}): {@link ExportAttackLogsResponse 返回参数} */
  ExportAttackLogs(data?: ExportAttackLogsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAttackLogsResponse>;
  /** {@link ExportBashEvents 导出高危命令事件}({@link ExportBashEventsRequest 请求参数}): {@link ExportBashEventsResponse 返回参数} */
  ExportBashEvents(data?: ExportBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBashEventsResponse>;
  /** {@link ExportBruteAttacks 导出密码破解记录}({@link ExportBruteAttacksRequest 请求参数}): {@link ExportBruteAttacksResponse 返回参数} */
  ExportBruteAttacks(data?: ExportBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBruteAttacksResponse>;
  /** {@link ExportMaliciousRequests 导出下载恶意请求文件}({@link ExportMaliciousRequestsRequest 请求参数}): {@link ExportMaliciousRequestsResponse 返回参数} */
  ExportMaliciousRequests(data?: ExportMaliciousRequestsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportMaliciousRequestsResponse>;
  /** {@link ExportMalwares 导出木马记录}({@link ExportMalwaresRequest 请求参数}): {@link ExportMalwaresResponse 返回参数} */
  ExportMalwares(data?: ExportMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<ExportMalwaresResponse>;
  /** {@link ExportNonlocalLoginPlaces 导出异地登录记录}({@link ExportNonlocalLoginPlacesRequest 请求参数}): {@link ExportNonlocalLoginPlacesResponse 返回参数} */
  ExportNonlocalLoginPlaces(data?: ExportNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportNonlocalLoginPlacesResponse>;
  /** {@link ExportPrivilegeEvents 导出本地提权事件}({@link ExportPrivilegeEventsRequest 请求参数}): {@link ExportPrivilegeEventsResponse 返回参数} */
  ExportPrivilegeEvents(data?: ExportPrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportPrivilegeEventsResponse>;
  /** {@link ExportReverseShellEvents 导出反弹Shell事件}({@link ExportReverseShellEventsRequest 请求参数}): {@link ExportReverseShellEventsResponse 返回参数} */
  ExportReverseShellEvents(data?: ExportReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportReverseShellEventsResponse>;
  /** {@link IgnoreImpactedHosts 忽略漏洞}({@link IgnoreImpactedHostsRequest 请求参数}): {@link IgnoreImpactedHostsResponse 返回参数} */
  IgnoreImpactedHosts(data: IgnoreImpactedHostsRequest, config?: AxiosRequestConfig): AxiosPromise<IgnoreImpactedHostsResponse>;
  /** {@link InquiryPriceOpenProVersionPrepaid 开通专业版询价(预付费)}({@link InquiryPriceOpenProVersionPrepaidRequest 请求参数}): {@link InquiryPriceOpenProVersionPrepaidResponse 返回参数} */
  InquiryPriceOpenProVersionPrepaid(data: InquiryPriceOpenProVersionPrepaidRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceOpenProVersionPrepaidResponse>;
  /** {@link MisAlarmNonlocalLoginPlaces 误报异地登录}({@link MisAlarmNonlocalLoginPlacesRequest 请求参数}): {@link MisAlarmNonlocalLoginPlacesResponse 返回参数} */
  MisAlarmNonlocalLoginPlaces(data: MisAlarmNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<MisAlarmNonlocalLoginPlacesResponse>;
  /** {@link ModifyAlarmAttribute 修改告警设置}({@link ModifyAlarmAttributeRequest 请求参数}): {@link ModifyAlarmAttributeResponse 返回参数} */
  ModifyAlarmAttribute(data: ModifyAlarmAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmAttributeResponse>;
  /** {@link ModifyAutoOpenProVersionConfig 设置新增主机自动开通专业版配置}({@link ModifyAutoOpenProVersionConfigRequest 请求参数}): {@link ModifyAutoOpenProVersionConfigResponse 返回参数} */
  ModifyAutoOpenProVersionConfig(data: ModifyAutoOpenProVersionConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoOpenProVersionConfigResponse>;
  /** {@link ModifyLoginWhiteList 编辑白名单规则}({@link ModifyLoginWhiteListRequest 请求参数}): {@link ModifyLoginWhiteListResponse 返回参数} */
  ModifyLoginWhiteList(data: ModifyLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoginWhiteListResponse>;
  /** {@link ModifyProVersionRenewFlag 修改专业版续费标识}({@link ModifyProVersionRenewFlagRequest 请求参数}): {@link ModifyProVersionRenewFlagResponse 返回参数} */
  ModifyProVersionRenewFlag(data: ModifyProVersionRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProVersionRenewFlagResponse>;
  /** {@link OpenProVersion 开通专业版}({@link OpenProVersionRequest 请求参数}): {@link OpenProVersionResponse 返回参数} */
  OpenProVersion(data: OpenProVersionRequest, config?: AxiosRequestConfig): AxiosPromise<OpenProVersionResponse>;
  /** {@link OpenProVersionPrepaid 开通专业版(包年包月)}({@link OpenProVersionPrepaidRequest 请求参数}): {@link OpenProVersionPrepaidResponse 返回参数} */
  OpenProVersionPrepaid(data: OpenProVersionPrepaidRequest, config?: AxiosRequestConfig): AxiosPromise<OpenProVersionPrepaidResponse>;
  /** {@link RecoverMalwares 恢复木马文件}({@link RecoverMalwaresRequest 请求参数}): {@link RecoverMalwaresResponse 返回参数} */
  RecoverMalwares(data: RecoverMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverMalwaresResponse>;
  /** {@link RenewProVersion 续费专业版}({@link RenewProVersionRequest 请求参数}): {@link RenewProVersionResponse 返回参数} */
  RenewProVersion(data: RenewProVersionRequest, config?: AxiosRequestConfig): AxiosPromise<RenewProVersionResponse>;
  /** {@link RescanImpactedHost 漏洞重新检测}({@link RescanImpactedHostRequest 请求参数}): {@link RescanImpactedHostResponse 返回参数} */
  RescanImpactedHost(data: RescanImpactedHostRequest, config?: AxiosRequestConfig): AxiosPromise<RescanImpactedHostResponse>;
  /** {@link SeparateMalwares 隔离木马}({@link SeparateMalwaresRequest 请求参数}): {@link SeparateMalwaresResponse 返回参数} */
  SeparateMalwares(data: SeparateMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<SeparateMalwaresResponse>;
  /** {@link SetBashEventsStatus 设置高危命令事件状态}({@link SetBashEventsStatusRequest 请求参数}): {@link SetBashEventsStatusResponse 返回参数} */
  SetBashEventsStatus(data: SetBashEventsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<SetBashEventsStatusResponse>;
  /** {@link SwitchBashRules 切换高危命令规则状态}({@link SwitchBashRulesRequest 请求参数}): {@link SwitchBashRulesResponse 返回参数} */
  SwitchBashRules(data: SwitchBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchBashRulesResponse>;
  /** {@link TrustMaliciousRequest 恶意请求添加信任}({@link TrustMaliciousRequestRequest 请求参数}): {@link TrustMaliciousRequestResponse 返回参数} */
  TrustMaliciousRequest(data: TrustMaliciousRequestRequest, config?: AxiosRequestConfig): AxiosPromise<TrustMaliciousRequestResponse>;
  /** {@link TrustMalwares 信任木马文件}({@link TrustMalwaresRequest 请求参数}): {@link TrustMalwaresResponse 返回参数} */
  TrustMalwares(data: TrustMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<TrustMalwaresResponse>;
  /** {@link UntrustMaliciousRequest 取消信任恶意请求}({@link UntrustMaliciousRequestRequest 请求参数}): {@link UntrustMaliciousRequestResponse 返回参数} */
  UntrustMaliciousRequest(data: UntrustMaliciousRequestRequest, config?: AxiosRequestConfig): AxiosPromise<UntrustMaliciousRequestResponse>;
  /** {@link UntrustMalwares 取消信任木马}({@link UntrustMalwaresRequest 请求参数}): {@link UntrustMalwaresResponse 返回参数} */
  UntrustMalwares(data: UntrustMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<UntrustMalwaresResponse>;
}

export declare type Versions = ["2018-02-28"];

export default Yunjing;
