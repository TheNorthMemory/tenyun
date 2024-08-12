/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 灰度项目配置 */
declare interface ABTestConfig {
  /** 灰度项目名称 */
  ProjectName: string;
  /** true：正在灰度，false：不在灰度 */
  Status: boolean;
}

/** 帐号统计数据。 */
declare interface AccountStatistics {
  /** 用户名。 */
  Username: string;
  /** 主机数量。 */
  MachineNum: number;
}

/** 节点关联的告警信息 */
declare interface AlarmInfo {
  /** 该节点关联的告警，告警的table_name+id（t1:id1,t2:id2,...) */
  AlarmId: string;
  /** 告警事件表状态，当该节点为告警点时生效 */
  Status: number;
}

/** 资源管理进程基本信息 */
declare interface AssetAppBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[] | null;
  /** 应用名称 */
  Name?: string;
  /** 应用类型	1: 运维2 : 数据库3 : 安全4 : 可疑应用5 : 系统架构6 : 系统应用7 : WEB服务99: 其他 */
  Type?: number;
  /** 二进制路径 */
  BinPath?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 关联进程数 */
  ProcessCount?: number;
  /** 应用描述 */
  Desc?: string;
  /** 版本号 */
  Version?: string;
  /** 配置文件路径 */
  ConfigPath?: string;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 是否新增[0:否|1:是] */
  IsNew?: number | null;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 软件应用关联进程信息 */
declare interface AssetAppProcessInfo {
  /** 名称 */
  Name: string;
  /** 进程状态 */
  Status: string;
  /** 进程版本 */
  Version: string;
  /** 路径 */
  Path: string;
  /** 用户 */
  User: string;
  /** 启动时间 */
  StartTime: string;
}

/** 资产管理内核模块列表 */
declare interface AssetCoreModuleBaseInfo {
  /** 名称 */
  Name?: string;
  /** 描述 */
  Desc?: string;
  /** 路径 */
  Path?: string;
  /** 版本 */
  Version?: string;
  /** 服务器IP */
  MachineIp?: string;
  /** 服务器名称 */
  MachineName?: string;
  /** 操作系统 */
  OsInfo?: string;
  /** 模块大小 */
  Size?: number;
  /** 依赖进程数 */
  ProcessCount?: number;
  /** 依赖模块数 */
  ModuleCount?: number;
  /** 模块ID */
  Id?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机uuid */
  Uuid?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 服务器外网IP */
  MachineWanIp?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资产管理内核模块详情 */
declare interface AssetCoreModuleDetail {
  /** 名称 */
  Name: string;
  /** 描述 */
  Desc: string;
  /** 路径 */
  Path: string;
  /** 版本 */
  Version: string;
  /** 大小 */
  Size: number;
  /** 依赖进程 */
  Processes: string;
  /** 被依赖模块 */
  Modules: string;
  /** 参数信息 */
  Params: AssetCoreModuleParam[] | null;
  /** 数据更新时间 */
  UpdateTime: string | null;
}

/** 资产管理内核模块参数 */
declare interface AssetCoreModuleParam {
  /** 名称 */
  Name: string;
  /** 数据 */
  Data: string;
}

/** 资源管理数据库列表信息 */
declare interface AssetDatabaseBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[] | null;
  /** 数据库名 */
  Name?: string;
  /** 版本 */
  Version?: string;
  /** 监听端口 */
  Port?: string;
  /** 协议 */
  Proto?: string;
  /** 运行用户 */
  User?: string;
  /** 绑定IP */
  Ip?: string;
  /** 配置文件路径 */
  ConfigPath?: string;
  /** 日志文件路径 */
  LogPath?: string;
  /** 数据路径 */
  DataPath?: string;
  /** 运行权限 */
  Permission?: string;
  /** 错误日志路径 */
  ErrorLogPath?: string;
  /** 插件路径 */
  PlugInPath?: string;
  /** 二进制路径 */
  BinPath?: string;
  /** 启动参数 */
  Param?: string;
  /** 数据库ID */
  Id?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 主机名称 */
  MachineName?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资源管理数据库列表信息 */
declare interface AssetDatabaseDetail {
  /** 主机内网IP */
  MachineIp: string;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** 操作系统信息 */
  OsInfo: string;
  /** 数据库名 */
  Name: string;
  /** 版本 */
  Version: string;
  /** 监听端口 */
  Port: string;
  /** 协议 */
  Proto: string;
  /** 运行用户 */
  User: string;
  /** 绑定IP */
  Ip: string;
  /** 配置文件路径 */
  ConfigPath: string;
  /** 日志文件路径 */
  LogPath: string;
  /** 数据路径 */
  DataPath: string;
  /** 运行权限 */
  Permission: string;
  /** 错误日志路径 */
  ErrorLogPath: string;
  /** 插件路径 */
  PlugInPath: string;
  /** 二进制路径 */
  BinPath: string;
  /** 启动参数 */
  Param: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
}

/** 资产管理磁盘分区信息 */
declare interface AssetDiskPartitionInfo {
  /** 分区名 */
  Name: string;
  /** 分区大小：单位G */
  Size: number;
  /** 分区使用率 */
  Percent: number;
  /** 文件系统类型 */
  Type: string;
  /** 挂载目录 */
  Path: string;
  /** 已使用空间：单位G */
  Used: number;
}

/** 资产管理环境变量列表 */
declare interface AssetEnvBaseInfo {
  /** 名称 */
  Name?: string;
  /** 类型：0:用户变量1:系统变量 */
  Type?: number;
  /** 启动用户 */
  User?: string;
  /** 环境变量值 */
  Value?: string;
  /** 服务器IP */
  MachineIp?: string;
  /** 服务器名称 */
  MachineName?: string;
  /** 操作系统 */
  OsInfo?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机uuid */
  Uuid?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 服务器外网IP */
  MachineWanIp?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
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

/** 资产管理启动服务列表 */
declare interface AssetInitServiceBaseInfo {
  /** 名称 */
  Name?: string;
  /** 类型：1:编码器2:IE插件3:网络提供者4:镜像劫持5:LSA提供者6:KnownDLLs7:启动执行8:WMI9:计划任务10:Winsock提供者11:打印监控器12:资源管理器13:驱动服务14:登录 */
  Type?: number;
  /** 默认启用状态：0未启用，1启用 */
  Status?: number;
  /** 启动用户 */
  User?: string;
  /** 路径 */
  Path?: string;
  /** 服务器IP */
  MachineIp?: string;
  /** 服务器名称 */
  MachineName?: string;
  /** 操作系统 */
  OsInfo?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机uuid */
  Uuid?: string;
  /** 数据更新时间 */
  UpdateTime?: string;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 服务器外网IP */
  MachineWanIp?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 开机自启动[0:否|1:是] */
  IsAutoRun?: number;
}

/** 资产管理jar包列表 */
declare interface AssetJarBaseInfo {
  /** 名称 */
  Name?: string;
  /** 类型：1应用程序，2系统类库，3Web服务自带库，8:其他， */
  Type?: number;
  /** 是否可执行：0未知，1是，2否 */
  Status?: number;
  /** 版本 */
  Version?: string;
  /** 路径 */
  Path?: string;
  /** 服务器IP */
  MachineIp?: string;
  /** 服务器名称 */
  MachineName?: string;
  /** 操作系统 */
  OsInfo?: string;
  /** Jar包ID */
  Id?: string;
  /** Jar包Md5 */
  Md5?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机uuid */
  Uuid?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 服务器外网IP */
  MachineWanIp?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资产管理jar包详情 */
declare interface AssetJarDetail {
  /** 名称 */
  Name: string;
  /** 类型：1应用程序，2系统类库，3Web服务自带库，8:其他， */
  Type: number;
  /** 是否可执行：0未知，1是，2否 */
  Status: number;
  /** 版本 */
  Version: string;
  /** 路径 */
  Path: string;
  /** 服务器IP */
  MachineIp: string;
  /** 服务器名称 */
  MachineName: string;
  /** 操作系统 */
  OsInfo: string;
  /** 引用进程列表 */
  Process: AssetAppProcessInfo[] | null;
  /** Jar包Md5 */
  Md5: string | null;
  /** 数据更新时间 */
  UpdateTime: string | null;
}

/** key-val类型的通用数据结构 */
declare interface AssetKeyVal {
  /** 标签 */
  Key: string;
  /** 数量 */
  Value: number;
  /** 描述信息 */
  Desc: string | null;
  /** 今日新增数量 */
  NewCount: number | null;
}

/** 资产管理负载信息 */
declare interface AssetLoadDetail {
  /** 主机名称 */
  MachineName: string;
  /** 描述 */
  Desc: string;
  /** 负载 */
  Value: number;
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
}

/** 资源负载概况 */
declare interface AssetLoadSummary {
  /** 负载量数组，依次为：[0%或未知数量，0%～20%，20%～50%，50%～80%，80%～100%] */
  Counts: number[];
  /** 负载Top5 */
  Top5: AssetLoadDetail[] | null;
}

/** 资产指纹中服务器列表的基本信息 */
declare interface AssetMachineBaseInfo {
  /** 服务器Quuid */
  Quuid?: string;
  /** 服务器uuid */
  Uuid?: string;
  /** 服务器内网IP */
  MachineIp?: string;
  /** 服务器名称 */
  MachineName?: string;
  /** 操作系统名称 */
  OsInfo?: string;
  /** CPU信息 */
  Cpu?: string;
  /** 内存容量：单位G */
  MemSize?: number;
  /** 内存使用率百分比 */
  MemLoad?: string;
  /** 硬盘容量：单位G */
  DiskSize?: number;
  /** 硬盘使用率百分比 */
  DiskLoad?: string;
  /** 分区数 */
  PartitionCount?: number;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 业务组ID */
  ProjectId?: number;
  /** Cpu数量 */
  CpuSize?: number;
  /** Cpu使用率百分比 */
  CpuLoad?: string;
  /** 标签 */
  Tag?: MachineTag[] | null;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** cpu负载读数（仅linux系统有效） */
  CpuLoadNum?: string | null;
}

/** 资产指纹中服务器列表的基本信息 */
declare interface AssetMachineDetail {
  /** 服务器Quuid */
  Quuid?: string;
  /** 服务器uuid */
  Uuid?: string;
  /** 服务器内网IP */
  MachineIp?: string;
  /** 服务器名称 */
  MachineName?: string;
  /** 操作系统名称 */
  OsInfo?: string;
  /** CPU信息 */
  Cpu?: string;
  /** 内存容量：单位G */
  MemSize?: number;
  /** 内存使用率百分比 */
  MemLoad?: string;
  /** 硬盘容量：单位G */
  DiskSize?: number;
  /** 硬盘使用率百分比 */
  DiskLoad?: string;
  /** 分区数 */
  PartitionCount?: number;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** Cpu数量 */
  CpuSize?: number;
  /** Cpu负载 */
  CpuLoad?: string;
  /** 防护级别：0基础版，1专业版，2旗舰版，3普惠版 */
  ProtectLevel?: number;
  /** 风险状态：UNKNOW-未知，RISK-风险，SAFT-安全 */
  RiskStatus?: string;
  /** 已防护天数 */
  ProtectDays?: number;
  /** 专业版开通时间 */
  BuyTime?: string;
  /** 专业版到期时间 */
  EndTime?: string;
  /** 内核版本 */
  CoreVersion?: string;
  /** linux/windows */
  OsType?: string;
  /** agent版本 */
  AgentVersion?: string;
  /** 安装时间 */
  InstallTime?: string;
  /** 系统启动时间 */
  BootTime?: string;
  /** 最后上线时间 */
  LastLiveTime?: string;
  /** 生产商 */
  Producer?: string;
  /** 序列号 */
  SerialNumber?: string;
  /** 网卡 */
  NetCards?: AssetNetworkCardInfo[];
  /** 分区 */
  Disks?: AssetDiskPartitionInfo[];
  /** 0在线，1已离线 */
  Status?: number;
  /** 业务组ID */
  ProjectId?: number;
  /** 设备型号 */
  DeviceVersion?: string;
  /** 离线时间 */
  OfflineTime?: string | null;
  /** 主机ID */
  InstanceId?: string | null;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 主机二外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** CpuLoadVul */
  CpuLoadVul?: string | null;
  /** 时间 */
  FirstTime?: string | null;
}

/** 资产管理网卡信息 */
declare interface AssetNetworkCardInfo {
  /** 网卡名称 */
  Name: string;
  /** Ipv4对应IP */
  Ip: string;
  /** 网关 */
  GateWay: string;
  /** MAC地址 */
  Mac: string;
  /** Ipv6对应IP */
  Ipv6: string;
  /** DNS服务器 */
  DnsServer: string;
}

/** 资产管理计划任务列表 */
declare interface AssetPlanTask {
  /** 默认启用状态：1启用，2未启用 */
  Status?: number;
  /** 执行周期 */
  Cycle?: string;
  /** 执行命令或脚本 */
  Command?: string;
  /** 启动用户 */
  User?: string;
  /** 配置文件路径 */
  ConfigPath?: string;
  /** 服务器IP */
  MachineIp?: string;
  /** 服务器名称 */
  MachineName?: string;
  /** 操作系统 */
  OsInfo?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机uuid */
  Uuid?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 服务器外网IP */
  MachineWanIp?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资源管理账号基本信息 */
declare interface AssetPortBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[] | null;
  /** 进程名称 */
  ProcessName?: string;
  /** 进程版本 */
  ProcessVersion?: string;
  /** 进程路径 */
  ProcessPath?: string;
  /** 进程ID */
  Pid?: string;
  /** 运行用户 */
  User?: string;
  /** 启动时间 */
  StartTime?: string;
  /** 启动参数 */
  Param?: string;
  /** 进程TTY */
  Teletype?: string;
  /** 端口 */
  Port?: string;
  /** 所属用户组 */
  GroupName?: string;
  /** 进程MD5 */
  Md5?: string;
  /** 父进程ID */
  Ppid?: string;
  /** 父进程名称 */
  ParentProcessName?: string;
  /** 端口协议 */
  Proto?: string;
  /** 绑定IP */
  BindIp?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资源管理进程基本信息 */
declare interface AssetProcessBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[] | null;
  /** 进程名称 */
  Name?: string;
  /** 进程说明 */
  Desc?: string;
  /** 进程路径 */
  Path?: string;
  /** 进程ID */
  Pid?: string;
  /** 运行用户 */
  User?: string;
  /** 启动时间 */
  StartTime?: string;
  /** 启动参数 */
  Param?: string;
  /** 进程TTY */
  Tty?: string;
  /** 进程版本 */
  Version?: string;
  /** 进程用户组 */
  GroupName?: string;
  /** 进程MD5 */
  Md5?: string;
  /** 父进程ID */
  Ppid?: string;
  /** 父进程名称 */
  ParentProcessName?: string;
  /** 进程状态 */
  Status?: string;
  /** 数字签名:0无，1有， 999 空，仅windows */
  HasSign?: number;
  /** 是否通过安装包安装：:0否，1是， 999 空，仅linux */
  InstallByPackage?: number;
  /** 软件包名 */
  PackageName?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资源管理系统安装包列表信息 */
declare interface AssetSystemPackageInfo {
  /** 数据库名 */
  Name: string;
  /** 描述 */
  Desc: string;
  /** 版本 */
  Version: string;
  /** 安装时间 */
  InstallTime: string;
  /** 类型 */
  Type: string;
  /** 主机名称 */
  MachineName: string;
  /** 主机IP */
  MachineIp: string;
  /** 操作系统 */
  OsInfo: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo;
  /** 主机Id */
  Quuid?: string;
  /** Agent Id */
  Uuid?: string;
}

/** 资产指纹类型描述 */
declare interface AssetType {
  /** 类型ID */
  Id: number;
  /** 类型名称 */
  Name: string;
}

/** 资源管理账号基本信息 */
declare interface AssetUserBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 账号UID */
  Uid?: string;
  /** 账号GID */
  Gid?: string;
  /** 账号状态：0-禁用；1-启用 */
  Status?: number;
  /** 是否有root权限：0-否；1是，999为空: 仅linux */
  IsRoot?: number;
  /** 登录方式：0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码，999为空，仅linux */
  LoginType?: number;
  /** 上次登录时间 */
  LastLoginTime?: string;
  /** 账号名称 */
  Name?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅windows */
  UserType?: number;
  /** 是否域账号：0否， 1是，2否, 999为空 仅windows */
  IsDomain?: number;
  /** 是否有sudo权限，1是，0否, 999为空, 仅linux */
  IsSudo?: number;
  /** 是否允许ssh登录，1是，0否, 999为空, 仅linux */
  IsSshLogin?: number;
  /** Home目录 */
  HomePath?: string;
  /** Shell路径 仅linux */
  Shell?: string;
  /** 是否shell登录性，0不是；1是 仅linux */
  ShellLoginStatus?: number;
  /** 密码修改时间 */
  PasswordChangeTime?: string;
  /** 密码过期时间 仅linux */
  PasswordDueTime?: string;
  /** 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux */
  PasswordLockDays?: number;
  /** 密码状态：1正常 2即将过期 3已过期 4已锁定 999为空 仅linux */
  PasswordStatus?: number;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资源管理账号基本信息 */
declare interface AssetUserDetail {
  /** 主机内网IP */
  MachineIp: string;
  /** 主机名称 */
  MachineName: string;
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
  /** 账号UID */
  Uid: string;
  /** 账号GID */
  Gid: string;
  /** 账号状态：0-禁用；1-启用 */
  Status: number;
  /** 是否有root权限：0-否；1是，999为空: 仅linux */
  IsRoot: number;
  /** 上次登录时间 */
  LastLoginTime: string;
  /** 账号名称 */
  Name: string;
  /** 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅windows */
  UserType: number;
  /** 是否域账号：0否， 1是, 999为空 仅windows */
  IsDomain: number;
  /** 是否允许ssh登录，1是，0否, 999为空, 仅linux */
  IsSshLogin: number;
  /** Home目录 */
  HomePath: string;
  /** Shell路径 仅linux */
  Shell: string;
  /** 是否shell登录性，0不是；1是 仅linux */
  ShellLoginStatus: number;
  /** 密码修改时间 */
  PasswordChangeTime: string;
  /** 密码过期时间 仅linux */
  PasswordDueTime: string;
  /** 密码锁定时间：单位天, -1为永不锁定 999为空，仅linux */
  PasswordLockDays: number;
  /** 备注 */
  Remark: string;
  /** 用户组名 */
  GroupName: string;
  /** 账号到期时间 */
  DisableTime: string;
  /** 最近登录终端 */
  LastLoginTerminal: string;
  /** 最近登录位置 */
  LastLoginLoc: string;
  /** 最近登录IP */
  LastLoginIp: string;
  /** 密码过期提醒：单位天 */
  PasswordWarnDays: number;
  /** 密码修改设置：0-不可修改，1-可修改 */
  PasswordChangeType: number;
  /** 用户公钥列表 */
  Keys: AssetUserKeyInfo[] | null;
  /** 数据更新时间 */
  UpdateTime: string | null;
}

/** 资产管理账号key详情 */
declare interface AssetUserKeyInfo {
  /** 公钥值 */
  Value: string;
  /** 公钥备注 */
  Comment: string;
  /** 加密方式 */
  EncryptType: string;
}

/** 资源管理Web应用列表信息 */
declare interface AssetWebAppBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[] | null;
  /** 应用名 */
  Name?: string;
  /** 版本 */
  Version?: string;
  /** 根路径 */
  RootPath?: string;
  /** 服务类型 */
  ServiceType?: string;
  /** 站点域名 */
  Domain?: string;
  /** 虚拟路径 */
  VirtualPath?: string;
  /** 插件数 */
  PluginCount?: number;
  /** 应用ID */
  Id?: string;
  /** 应用描述 */
  Desc?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资产管理Web应用插件详情 */
declare interface AssetWebAppPluginInfo {
  /** 名称 */
  Name: string;
  /** 描述 */
  Desc: string;
  /** 版本 */
  Version: string;
  /** 链接 */
  Link: string;
}

/** 资源管理Web应用列表信息 */
declare interface AssetWebFrameBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[] | null;
  /** 数据库名 */
  Name?: string;
  /** 版本 */
  Version?: string;
  /** 语言 */
  Lang?: string;
  /** 服务类型 */
  ServiceType?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 数据更新时间 */
  UpdateTime?: string;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 应用路径 */
  Path?: string;
}

/** 资产管理Web站点列表信息 */
declare interface AssetWebLocationBaseInfo {
  /** 主机Uuid */
  Uuid?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 内网IP */
  MachineIp?: string;
  /** 外网IP */
  MachineWanIp?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 操作系统 */
  OsInfo?: string;
  /** 域名 */
  Name?: string;
  /** 站点端口 */
  Port?: string;
  /** 站点协议 */
  Proto?: string;
  /** 服务类型 */
  ServiceType?: string;
  /** 站点路经数 */
  PathCount?: number;
  /** 运行用户 */
  User?: string;
  /** 主目录 */
  MainPath?: string;
  /** 主目录所有者 */
  MainPathOwner?: string;
  /** 拥有者权限 */
  Permission?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[];
  /** Web站点Id */
  Id?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number | null;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 资产管理Web站点列表信息 */
declare interface AssetWebLocationInfo {
  /** 域名 */
  Name: string;
  /** 站点端口 */
  Port: string;
  /** 站点协议 */
  Proto: string;
  /** 服务类型 */
  ServiceType: string;
  /** 安全模块状态：0未启用，1启用，999空，仅nginx */
  SafeStatus: number;
  /** 运行用户 */
  User: string;
  /** 主目录 */
  MainPath: string;
  /** 启动命令 */
  Command: string;
  /** 绑定IP */
  Ip: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
}

/** 资产管理Web站点虚拟目录 */
declare interface AssetWebLocationPath {
  /** 虚拟路径 */
  VirtualPath: string;
  /** 物理路径 */
  RealPath: string;
  /** 文件所有者 */
  User: string;
  /** 文件所属组 */
  Group: string;
  /** 文件权限 */
  Permission: string;
}

/** 资源管理Web服务列表信息 */
declare interface AssetWebServiceBaseInfo {
  /** 主机内网IP */
  MachineIp?: string;
  /** 主机外网IP */
  MachineWanIp?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 主机Uuid */
  Uuid?: string;
  /** 操作系统信息 */
  OsInfo?: string;
  /** 主机业务组ID */
  ProjectId?: number;
  /** 主机标签 */
  Tag?: MachineTag[] | null;
  /** 数据库名 */
  Name?: string;
  /** 版本 */
  Version?: string;
  /** 二进制路径 */
  BinPath?: string;
  /** 启动用户 */
  User?: string;
  /** 安装路径 */
  InstallPath?: string;
  /** 配置路径 */
  ConfigPath?: string;
  /** 关联进程数 */
  ProcessCount?: number;
  /** Web服务ID */
  Id?: string;
  /** 主机名称 */
  MachineName?: string;
  /** 描述 */
  Desc?: string;
  /** 数据更新时间 */
  UpdateTime?: string | null;
  /** 首次采集时间 */
  FirstTime?: string;
  /** 是否新增[0:否|1:是] */
  IsNew?: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 攻击溯源 */
declare interface AttackSource {
  /** 攻击溯源节点描述 */
  Nodes: AttackSourceNode[] | null;
  /** 攻击溯源节点路径 */
  Edges: AttackSourceEdge[] | null;
  /** 请求节点相关事件详情的参数 */
  EventInfoParam: string | null;
}

/** 攻击溯源路线描述 */
declare interface AttackSourceEdge {
  /** 出发节点 */
  From: string;
  /** 目标节点 */
  To: string;
}

/** 攻击溯源事件 */
declare interface AttackSourceEvent {
  /** 事件类型：0：文件查杀，1：异常登录， 2：密码破解，3：恶意请求，4：高危命令 */
  EventType: number;
  /** 【文件查杀】病毒名 VirusName、文件名 FileName、文件路径 FilePath、文件大小 FileSize、文件MD5 MD5、首次发现时间 CreateTime、最近检测时间LatestScanTime、危害描述 HarmDescribe、修复建议SuggestScheme【异常登录】来源IP SrcIp、来源地 Location、登录用户名 UserName、登录时间 LoginTime【密码破解】来源IP SrcIp、来源地 City,Country 、协议 Protocol、登录用户名UserName 、端口 Port、尝试次数 Count、首次攻击时间 CreateTime、最近攻击时间 ModifyTime【恶意请求】恶意请求域名 Url、进程ProcessName 、MD5 ProcessMd5、PID Pid、请求次数 AccessCount、最近请求时间 MergeTime、危害描述 HarmDescribe、修复建议SuggestScheme【高危命令】命中规则名 RuleName、规则类别 RuleCategory、命令内容 BashCmd、数据来源 DetectBy、登录用户 User、PID Pid、发生时间 CreateTime 、危害描述 HarmDescribe、修复建议SuggestScheme */
  Content: string;
  /** 入侵时间 */
  CreatedTime: string;
  /** 等级 事件统一等级 0：提示，1：低危, 2：中危, 3：高危, 4：严重 */
  Level: number;
  /** 等级中文展示字符串 */
  LevelZh: string;
  /** 事件id */
  Id: number;
  /** 主机uuid */
  Uuid: string;
}

/** 攻击溯源节点 */
declare interface AttackSourceNode {
  /** 事件ID，为空的时候表示没有对应事件 */
  EventId: number;
  /** BRUTEFORCE:密码破解、MALWARE:木马、BASH:高危命令、RISK_DNS:恶意请求、LOGIN:异地登录、HOST:主机节点, TIME_ORDER：通用节点 */
  EventType: string;
  /** 节点ip 当节点为HOST时 */
  Ip: string;
  /** 等级 0：提示，1：低危, 2：中危, 3：高危, 4：严重 */
  Level: number;
  /** 节点ID */
  NodeId: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 通用节点的描述 */
  NodeDesc: string;
  /** 时间线编号，同一个编号的节点属于同一个时间线 */
  TimeLineNum: number;
  /** 节点详情 */
  NodeDetail: string;
}

/** 阻断白名单规则 */
declare interface BanWhiteList {
  /** 白名单ID。 */
  Id?: string;
  /** 白名单别名。 */
  Remark?: string;
  /** 阻断来源IP。 */
  SrcIp?: string;
  /** 修改白名单时间。 */
  ModifyTime?: string;
  /** 创建白名单时间。 */
  CreateTime?: string;
  /** 白名单所属机器。 */
  Uuid?: string | null;
  /** 白名单是否全局 */
  IsGlobal?: boolean | null;
  /** 白名单所属机器列表 */
  Quuids?: string[] | null;
}

/** 阻断白名单展示列表，包含了机器的信息 */
declare interface BanWhiteListDetail {
  /** 白名单ID */
  Id: string;
  /** 白名单别名 */
  Remark: string;
  /** 阻断来源IP */
  SrcIp: string;
  /** 修改白名单时间 */
  ModifyTime: string;
  /** 创建白名单时间 */
  CreateTime: string;
  /** 白名单是否全局 */
  IsGlobal: boolean;
  /** 机器的UUID */
  Quuid: string;
  /** 主机安全程序的UUID */
  Uuid: string;
  /** 机器IP */
  MachineIp: string;
  /** 机器名称 */
  MachineName: string;
}

/** 基线基础信息 */
declare interface BaselineBasicInfo {
  /** 基线名称 */
  Name: string | null;
  /** 基线id */
  BaselineId: number | null;
  /** 父级id */
  ParentId: number | null;
}

/** 基线规则或项的分类 */
declare interface BaselineCategory {
  /** 分类Id */
  CategoryId?: number;
  /** 分类名称 */
  CategoryName?: string;
  /** 父分类ID,如果为0则没有父分类 */
  ParentCategoryId?: number;
  /** 子分类下检测项总数 */
  ItemCount?: number | null;
}

/** 基线自定规则ID和名字 */
declare interface BaselineCustomRuleIdName {
  /** 自定义规则ID */
  RuleId: number | null;
  /** 自定义规则名字 */
  RuleName: string | null;
}

/** 基线详情 */
declare interface BaselineDetail {
  /** 基线描述 */
  Description: string | null;
  /** 危害等级 */
  Level: number | null;
  /** package名 */
  PackageName: string | null;
  /** 父级id */
  ParentId: number | null;
  /** 基线名 */
  Name: string | null;
}

/** 基线扫描参数 */
declare interface BaselineDetectParam {
  /** 检测的策略集合 */
  PolicyIds?: number[];
  /** 检测的规则集合 */
  RuleIds?: number[];
  /** 检测项集合 */
  ItemIds?: number[];
  /** 检测的主机ID集合 */
  HostIds?: string[];
}

/** 基线导出结果下载 */
declare interface BaselineDownload {
  /** 任务Id */
  TaskId: number;
  /** 任务名称 */
  TaskName: string;
  /** 状态0:未完成 1:完成 */
  Status: number;
  /** 开始时间 */
  StartTime: string;
  /** 完成时间 */
  EndTime: string;
  /** 下载地址 */
  DownloadUrl: string;
}

/** 基线影响主机信息 */
declare interface BaselineEffectHost {
  /** 通过项 */
  PassCount: number | null;
  /** 风险项 */
  FailCount: number | null;
  /** 首次检测事件 */
  FirstScanTime: string | null;
  /** 最后检测时间 */
  LastScanTime: string | null;
  /** 风险项处理状态状态：0-未通过，1-通过 */
  Status: number | null;
  /** 主机Quuid */
  Quuid: string | null;
  /** 主机IP */
  HostIp: string | null;
  /** 主机别名 */
  AliasName: string | null;
  /** 主机Uuid */
  Uuid: string | null;
  /** 检测中状态 */
  MaxStatus: number | null;
}

/** 服务器风险Top的主机信息 */
declare interface BaselineEventLevelInfo {
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 */
  EventLevel: number | null;
  /** 漏洞数量 */
  EventCount: number | null;
}

/** 基线密码修复 */
declare interface BaselineFix {
  /** 修复项名称 */
  ItemName?: string;
  /** 主机Ip */
  HostIp?: string;
  /** 首次检测时间 */
  CreateTime?: string;
  /** 最后检测时间 */
  ModifyTime?: string;
  /** 修复时间 */
  FixTime?: string;
  /** 基线检测项结果ID */
  Id?: number;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 基线主机信息 */
declare interface BaselineHost {
  /** 主机Id */
  HostId?: string;
  /** 主机名称 */
  HostName?: string | null;
  /** 主机标签 */
  HostTag?: string | null;
  /** 内网Ip */
  HostIp?: string | null;
  /** 外网Ip */
  WanIp?: string | null;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 基线主机检测 */
declare interface BaselineHostDetect {
  /** 主机Id */
  HostId?: string;
  /** 内网Ip */
  HostIp?: string;
  /** 主机名称 */
  HostName?: string;
  /** 外网Ip */
  WanIp?: string;
  /** 0:未通过 1:忽略 3:通过 5:检测中 */
  DetectStatus?: number;
  /** 检测通过数 */
  PassedItemCount?: number;
  /** 关联检测项数 */
  ItemCount?: number;
  /** 检测未通过数 */
  NotPassedItemCount?: number;
  /** 首次检测时间 */
  FirstTime?: string;
  /** 最后检测时间 */
  LastTime?: string;
  /** 主机安全UUID */
  Uuid?: string | null;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 基线影响服务器列表数据 */
declare interface BaselineHostTopList {
  /** 事件等级与次数列表 */
  EventLevelList: BaselineEventLevelInfo[] | null;
  /** 主机名称 */
  HostName: string | null;
  /** 主机Quuid */
  Quuid: string | null;
  /** 计算权重的分数 */
  Score: number | null;
}

/** 基线信息 */
declare interface BaselineInfo {
  /** 基线名 */
  Name: string | null;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 */
  Level: number | null;
  /** 检测项数量 */
  RuleCount: number | null;
  /** 影响服务器数量 */
  HostCount: number | null;
  /** 通过状态:0:未通过,1:已通过 */
  Status: number | null;
  /** 基线id */
  CategoryId: number | null;
  /** 最后检测时间 */
  LastScanTime: string | null;
  /** 检测中状态: 5 */
  MaxStatus: number | null;
  /** 基线风险项 */
  BaselineFailCount: number | null;
}

/** 基线项 */
declare interface BaselineItem {
  /** 项Id */
  ItemId?: number;
  /** 项名称 */
  ItemName?: string;
  /** 检测项分类 */
  CategoryId?: number;
  /** 项描述 */
  ItemDesc?: string;
  /** 修复方法 */
  FixMethod?: string;
  /** 所属规则 */
  RuleName?: string;
  /** 检测结果描述 */
  DetectResultDesc?: string | null;
  /** 危险等级 */
  Level?: number | null;
  /** 检测状态：0 未通过，1：忽略，3：通过，5：检测中 */
  DetectStatus?: number | null;
  /** 主机ID */
  HostId?: string | null;
  /** 主机名 */
  HostName?: string | null;
  /** 主机IP */
  HostIp?: string | null;
  /** 外网IP */
  WanIp?: string | null;
  /** 第一次出现时间 */
  FirstTime?: string | null;
  /** 最近出现时间 */
  LastTime?: string | null;
  /** 是否可以修复 */
  CanBeFixed?: number | null;
  /** 主机安全uuid */
  Uuid?: string | null;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 基线检测项 */
declare interface BaselineItemDetect {
  /** 项Id */
  ItemId: number | null;
  /** 项名称 */
  ItemName: string | null;
  /** 项描述 */
  ItemDesc: string | null;
  /** 修复方法 */
  FixMethod: string | null;
  /** 所属规则 */
  RuleName: string | null;
  /** 0:未通过 1:忽略 3:通过 5:检测中 */
  DetectStatus: number | null;
  /** 风险等级 */
  Level: number | null;
  /** 影响服务器数 */
  HostCount: number | null;
  /** 首次检测时间 */
  FirstTime: string | null;
  /** 最后检测时间 */
  LastTime: string | null;
  /** 检测结果,Json字符串 */
  DetectResult: string | null;
  /** 所属规则ID */
  RuleId: number | null;
  /** 通过的服务器数 */
  PassedHostCount: number | null;
  /** 未通过的服务器数 */
  NotPassedHostCount: number | null;
}

/** 基线信息 */
declare interface BaselineItemInfo {
  /** 基线检测项ID */
  ItemId: number;
  /** 检测项名字 */
  ItemName: string;
  /** 检测项所属规则的ID */
  RuleId: number | null;
  /** 检测项描述 */
  ItemDesc: string;
  /** 检测项的修复方法 */
  FixMethod: string;
  /** 检测项所属规则名字 */
  RuleName: string;
  /** 危险等级 */
  Level: number;
  /** 系统规则ID */
  SysRuleId: number | null;
  /** 被引自定义规则信息 */
  RelatedCustomRuleInfo: BaselineCustomRuleIdName[] | null;
}

/** 基线检测项分类树状结构 */
declare interface BaselineItemsCategory {
  /** 基线检测项父分类id */
  ParentCategoryId?: number;
  /** 基线检测项父分类名称 */
  ParentCategoryName?: string;
  /** 基线检测项子分类数目 */
  CategoryCount?: number;
  /** 基线检测项子分类列表 */
  CategoryLists?: BaselineCategory[];
}

/** 基线策略信息 */
declare interface BaselinePolicy {
  /** 策略名称,长度不超过128英文字符 */
  PolicyName: string;
  /** 检测间隔[1:1天|3:3天|5:5天|7:7天] */
  DetectInterval: number;
  /** 检测时间 */
  DetectTime: string;
  /** 是否开启[0:未开启|1:开启] */
  IsEnabled: number;
  /** 资产类型[0:所有专业版旗舰版|1:id|2:ip] */
  AssetType: number;
  /** 策略Id */
  PolicyId?: number;
  /** 关联基线项数目 */
  RuleCount?: number;
  /** 关联基线项数目 */
  ItemCount?: number;
  /** 关联基线主机数目 */
  HostCount?: number;
  /** 规则Id */
  RuleIds?: number[];
  /** 主机Id */
  HostIds?: string[];
  /** 主机Ip */
  HostIps?: string[];
  /** 是否是系统默认 */
  IsDefault?: number;
}

/** 基线检测策略 */
declare interface BaselinePolicyDetect {
  /** 策略Id */
  PolicyId: number;
  /** 检测任务Id */
  TaskId: number;
  /** 关联主机数 */
  HostCount: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  FinishTime: string;
  /** 策略名称 */
  PolicyName: string;
  /** 成功主机数 */
  SuccessCount: number;
  /** 失败主技数 */
  FailedCount: number;
  /** 失败主机数 */
  TimeoutCount: number;
  /** 1:检测中 2:检测完成 */
  PolicyDetectStatus: number | null;
}

/** 基线检测项top5 */
declare interface BaselineRiskItem {
  /** 检测项Id */
  ItemId: number | null;
  /** 检测项名字 */
  ItemName: string;
  /** 风险等级 */
  Level: number;
  /** 影响服务器数 */
  HostCount: number;
}

/** 基线规则 */
declare interface BaselineRule {
  /** 规则名称,长度不超过128英文字符 */
  RuleName: string;
  /** 规则Id */
  RuleId?: number;
  /** 规则类型 [0:系统|1:自定义] */
  RuleType?: number;
  /** 规则分类 */
  CategoryId?: number;
  /** 规则描述 */
  RuleDesc?: string;
  /** 主机数 */
  HostCount?: number;
  /** 适配项ID列表 */
  Items?: Item[];
  /** [0:所有专业版旗舰版|1:hostID|2:ip] */
  AssetType?: number | null;
  /** 主机Id集合 */
  HostIds?: string[] | null;
  /** 主机IP */
  HostIps?: string[] | null;
}

/** 基线规则检测 */
declare interface BaselineRuleDetect {
  /** 规则Id */
  RuleId: number;
  /** 规则名称 */
  RuleName: string;
  /** 规则描述 */
  RuleDesc: string;
  /** 关联项数 */
  ItemCount: number;
  /** 关联主机数 */
  HostCount: number;
  /** 首次检测时间 */
  FirstTime: string;
  /** string */
  LastTime: string;
  /** 0:未通过 1:忽略 3:通过 5:检测中 */
  DetectStatus: number;
  /** ItemID集合 */
  ItemIds: number[] | null;
}

/** 基线检测信息 */
declare interface BaselineRuleInfo {
  /** 检测项名称 */
  RuleName: string;
  /** 检测项描述 */
  Description: string;
  /** 修复建议 */
  FixMessage: string;
  /** 危害等级 */
  Level: number;
  /** 状态 */
  Status: number;
  /** 检测项id */
  RuleId: number;
  /** 最后检测时间 */
  LastScanAt: string;
  /** 具体原因说明 */
  RuleRemark: string;
  /** 唯一Uuid */
  Uuid: string;
  /** 唯一事件ID */
  EventId: number;
}

/** 基线检测项TOP信息 */
declare interface BaselineRuleTopInfo {
  /** 基线检测项名 */
  RuleName: string | null;
  /** 检测项危害等级 */
  Level: number | null;
  /** 事件总数 */
  EventCount: number | null;
  /** 检测项id */
  RuleId: number | null;
}

/** 基线弱口令 */
declare interface BaselineWeakPassword {
  /** 密码Id */
  PasswordId: number;
  /** 密码 */
  WeakPassword: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
}

/** 高危命令数据 */
declare interface BashEvent {
  /** 数据ID */
  Id?: number;
  /** 主机安全ID */
  Uuid?: string;
  /** 主机ID */
  Quuid?: string;
  /** 主机内网IP */
  Hostip?: string;
  /** 执行用户名 */
  User?: string;
  /** 平台类型 */
  Platform?: number;
  /** 执行命令 */
  BashCmd?: string;
  /** 规则ID */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 规则等级：1-高 2-中 3-低 */
  RuleLevel?: number;
  /** 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3 = 已忽略 */
  Status?: number;
  /** 发生时间 */
  CreateTime?: string;
  /** 主机名 */
  MachineName?: string;
  /** 0: bash日志 1: 实时监控(雷霆版) */
  DetectBy?: number | null;
  /** 进程id */
  Pid?: string | null;
  /** 进程名称 */
  Exe?: string | null;
  /** 处理时间 */
  ModifyTime?: string | null;
  /** 规则类别 0=系统规则，1=用户规则 */
  RuleCategory?: number | null;
  /** 自动生成的正则表达式 */
  RegexBashCmd?: string | null;
  /** 主机HostName */
  HostName?: string | null;
}

/** 高危命令数据(新) */
declare interface BashEventNew {
  /** 数据ID */
  Id?: number;
  /** 主机安全ID */
  Uuid?: string;
  /** 主机ID */
  Quuid?: string;
  /** 主机内网IP */
  HostIp?: string;
  /** 执行用户名 */
  User?: string;
  /** 平台类型 */
  Platform?: number;
  /** 执行命令 */
  BashCmd?: string;
  /** 规则ID */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 规则等级：1-高 2-中 3-低 */
  RuleLevel?: number;
  /** 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3 = 已忽略 */
  Status?: number;
  /** 发生时间 */
  CreateTime?: string;
  /** 主机名 */
  MachineName?: string;
  /** 0: bash日志 1: 实时监控(雷霆版) */
  DetectBy?: number | null;
  /** 进程id */
  Pid?: string | null;
  /** 进程名称 */
  Exe?: string | null;
  /** 处理时间 */
  ModifyTime?: string | null;
  /** 规则类别 0=系统规则，1=用户规则 */
  RuleCategory?: number | null;
  /** 自动生成的正则表达式 */
  RegexBashCmd?: string | null;
  /** 0:普通 1:专业版 2:旗舰版 */
  MachineType?: number | null;
  /** 机器额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 高危命令数据详情 */
declare interface BashEventsInfo {
  /** 数据ID */
  Id?: number;
  /** 云镜ID */
  Uuid?: string;
  /** 主机ID */
  Quuid?: string;
  /** 主机内网IP */
  HostIp?: string;
  /** 平台类型 */
  Platform?: number;
  /** 执行命令 */
  BashCmd?: string;
  /** 规则ID,等于0表示已规则已被删除或生效范围已修改 */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 规则等级：1-高 2-中 3-低 */
  RuleLevel?: number;
  /** 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3= 已忽略 */
  Status?: number;
  /** 发生时间 */
  CreateTime?: string;
  /** 主机名 */
  MachineName?: string;
  /** 进程名称 */
  Exe?: string | null;
  /** 处理时间 */
  ModifyTime?: string | null;
  /** 规则类别 0=系统规则，1=用户规则 */
  RuleCategory?: number | null;
  /** 自动生成的正则表达式 */
  RegexBashCmd?: string | null;
  /** 进程树 json pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源 */
  PsTree?: string | null;
  /** 建议方案 */
  SuggestScheme?: string | null;
  /** 描述 */
  HarmDescribe?: string | null;
  /** 标签 */
  Tags?: string[] | null;
  /** 参考链接 */
  References?: string[] | null;
  /** 主机外网ip */
  MachineWanIp?: string | null;
  /** 主机在线状态 OFFLINE ONLINE */
  MachineStatus?: string | null;
  /** 登录用户 */
  User?: string | null;
  /** 进程号 */
  Pid?: string | null;
  /** 数据来源 */
  DetectBy?: string | null;
}

/** 高危命令数据详情(新) */
declare interface BashEventsInfoNew {
  /** 数据ID */
  Id?: number;
  /** 主机安全ID */
  Uuid?: string;
  /** 主机ID */
  Quuid?: string;
  /** 主机内网IP */
  HostIp?: string;
  /** 平台类型 */
  Platform?: number;
  /** 执行命令 */
  BashCmd?: string;
  /** 规则ID,等于0表示已规则已被删除或生效范围已修改 */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 规则等级：1-高 2-中 3-低 */
  RuleLevel?: number;
  /** 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3= 已忽略 */
  Status?: number;
  /** 发生时间 */
  CreateTime?: string;
  /** 主机名 */
  MachineName?: string;
  /** 进程名称 */
  Exe?: string | null;
  /** 处理时间 */
  ModifyTime?: string | null;
  /** 规则类别 0=系统规则，1=用户规则 */
  RuleCategory?: number | null;
  /** 自动生成的正则表达式 */
  RegexBashCmd?: string | null;
  /** 进程树 json pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源 */
  PsTree?: string | null;
  /** 建议方案 */
  SuggestScheme?: string | null;
  /** 描述 */
  HarmDescribe?: string | null;
  /** 标签 */
  Tags?: string[] | null;
  /** 参考链接 */
  References?: string[] | null;
  /** 主机外网ip */
  MachineWanIp?: string | null;
  /** 主机在线状态 OFFLINE ONLINE */
  MachineStatus?: string | null;
  /** 登录用户 */
  User?: string | null;
  /** 进程号 */
  Pid?: string | null;
  /** 0:普通 1:专业版 2:旗舰版 */
  MachineType?: number | null;
  /** 检测来源 0:bash日志 1:实时监控 */
  DetectBy?: number | null;
}

/** 高位命令策略 */
declare interface BashPolicy {
  /** 策略名称 */
  Name: string;
  /** 1:有效 0:无效 */
  Enable: number;
  /** 0:黑名单 1:白名单 */
  White: number;
  /** 0:告警 1:白名单 2:拦截 */
  BashAction: number;
  /** 正则表达式 */
  Rule: string;
  /** 危险等级(0:无，1: 高危 2:中危 3: 低危) */
  Level: number;
  /** 生效范围（0:一组quuid 1:所有专业版(包含旗舰版) 2:所有旗舰版 3:所有主机） */
  Scope: number;
  /** 策略ID */
  Id?: number;
  /** 策略描述 */
  Descript?: string | null;
  /** 事件列表点击“加入白名单”时,需要传EventId 事件的id */
  EventId?: number | null;
  /** 是否处理旧事件为白名单 0=不处理 1=处理 */
  DealOldEvents?: number | null;
  /** 生效主机的QUUID集合 */
  Quuids?: string[] | null;
  /** 策略类型，0:系统 1:用户 */
  Category?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 老版本兼容可能会用到 */
  Uuids?: string[];
}

/** 高危命令规则 */
declare interface BashRule {
  /** 规则ID */
  Id?: number;
  /** 客户端ID */
  Uuid?: string;
  /** 规则名称 */
  Name?: string;
  /** 危险等级(0 ：无 1: 高危 2:中危 3: 低危) */
  Level?: number;
  /** 正则表达式 */
  Rule?: string;
  /** 规则描述 */
  Decription?: string;
  /** 操作人 */
  Operator?: string;
  /** 是否全局规则 */
  IsGlobal?: number;
  /** 状态 (0: 有效 1: 无效) */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 主机IP */
  Hostip?: string;
  /** 生效服务器的uuid数组 */
  Uuids?: string[] | null;
  /** 0=黑名单 1=白名单 */
  White?: number | null;
  /** 是否处理之前的事件 0: 不处理 1:处理 */
  DealOldEvents?: number | null;
  /** 规则描述 */
  Description?: string | null;
}

/** 安全播报文章详情 */
declare interface BroadcastInfo {
  /** 文章名字 */
  Title: string | null;
  /** 跳转位置：0=不跳转，1=文件查杀，2=漏洞扫描，3=安全基线 */
  GotoType: number | null;
  /** 副标题 */
  Subtitle: string;
  /** 发布时间 */
  CreateTime: string;
  /** 富文本内容信息 */
  Content: string;
  /** 文章唯一Id */
  Id: number;
  /** 类型：0=紧急通知，1=功能更新，2=行业荣誉，3=版本发布 */
  Type: number;
}

/** 安全播报列表 */
declare interface Broadcasts {
  /** 文章名字 */
  Title: string | null;
  /** 类型：0=紧急通知，1=功能更新，2=行业荣誉，3=版本发布 */
  Type: number | null;
  /** 副标题 */
  Subtitle: string;
  /** 发布时间 */
  CreateTime: string;
  /** 文章唯一id */
  Id: number;
  /** 危险程度 0：无， 1：严重， 2: 高危， 3:中危， 4: 低危 */
  Level: number;
}

/** 密码破解列表实体 */
declare interface BruteAttackInfo {
  /** 唯一Id */
  Id?: number;
  /** 主机安全客户端唯一标识UUID */
  Uuid?: string | null;
  /** 主机ip */
  MachineIp?: string | null;
  /** 主机名 */
  MachineName?: string | null;
  /** 用户名 */
  UserName?: string | null;
  /** 来源ip */
  SrcIp?: string | null;
  /** SUCCESS：破解成功；FAILED：破解失败 */
  Status?: string | null;
  /** 国家id */
  Country?: number | null;
  /** 城市id */
  City?: number | null;
  /** 省份id */
  Province?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 0 -不阻断(客户端版本不支持)1 -已阻断2 -阻断失败(程序异常)3 -不阻断(内网不阻断)4 -可用区不支持阻断10-阻断中81-不阻断(未开启阻断)82-不阻断(非专业版)83-不阻断(已加白名单)86-不阻断(系统白名单)87-不阻断(客户端离线) */
  BanStatus?: number | null;
  /** 事件类型：200-暴力破解事件，300-暴力破解成功事件（页面展示），400-暴力破解不存在的帐号事件 */
  EventType?: number | null;
  /** 发生次数 */
  Count?: number | null;
  /** 机器UUID */
  Quuid?: string | null;
  /** 是否为专业版（true/false） */
  IsProVersion?: boolean | null;
  /** 被攻击的服务的用户名 */
  Protocol?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 最近攻击时间 */
  ModifyTime?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 0：待处理，1：忽略，5：已处理，6：加入白名单 */
  DataStatus?: number | null;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 地理位置中文名 */
  Location?: string | null;
  /** 威胁等级：0低危，1中危，2高危 */
  RiskLevel?: number | null;
  /** 事件来源：0--阻断规则，1--威胁情报 */
  DataFrom?: number | null;
  /** 破解状态说明 */
  AttackStatusDesc?: string | null;
  /** 阻断过期时间（仅阻断中事件有效） */
  BanExpiredTime?: string | null;
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
  TimeRange: number;
  /** 爆破事件失败次数 */
  LoginFailTimes: number;
  /** 规则是否为空，为空则填充默认规则 */
  Enable: boolean;
  /** 爆破事件发生的时间范围，单位：秒（默认规则） */
  TimeRangeDefault: number;
  /** 爆破事件失败次数（默认规则） */
  LoginFailTimesDefault: number;
}

/** CKafka实例信息 */
declare interface CKafkaInstanceInfo {
  /** 实例ID */
  InstanceID: string;
  /** 实例名称 */
  InstanceName: string;
  /** 版本号 */
  KafkaVersion: string;
  /** 主题列表 */
  TopicList: CKafkaTopicInfo[] | null;
  /** 路由列表 */
  RouteList: CKafkaRouteInfo[];
  /** 磁盘容量，单位GB */
  DiskSize: number;
  /** vpcId，如果为空，说明是基础网络 */
  VpcId: string;
  /** 子网id */
  SubnetId: string;
  /** 状态，1表示健康，2表示告警，3 表示实例状态异常 */
  Healthy: number;
  /** 可用区 */
  Zone: string;
  /** 地域 */
  Az: string;
  /** 实例带宽，单位Mbps */
  Bandwidth: number;
}

/** CKafka域名信息 */
declare interface CKafkaRouteInfo {
  /** 路由ID */
  RouteID: number;
  /** 域名 */
  Domain: string;
  /** 域名端口 */
  DomainPort: number;
  /** 虚拟ip */
  Vip: string;
  /** 虚拟ip类型 */
  VipType: number;
  /** 接入类型 */
  AccessType: number;
}

/** Ckafka主题名称 */
declare interface CKafkaTopicInfo {
  /** 主题ID */
  TopicID: string;
  /** 主题名称 */
  TopicName: string;
}

/** 批量修复漏洞二次弹窗 漏洞主机信息 */
declare interface CanFixVulInfo {
  /** 漏洞id */
  VulId: number | null;
  /** 漏洞名称 */
  VulName: string | null;
  /** 该漏洞可修复的主机信息 */
  HostList: VulInfoHostInfo[] | null;
  /** 修复提示tag */
  FixTag: string[] | null;
}

/** 不可隔离木马的机器信息 */
declare interface CanNotSeparateInfo {
  /** 主机quuid */
  Quuid: string;
  /** 主机uuid */
  Uuid: string;
  /** 主机名 */
  Alias: string;
  /** 内网ip */
  PrivateIp: string;
  /** 外网ip */
  PublicIp: string;
  /** 隔离失败原因 1:agent离线 */
  Reason: number;
}

/** 云护航服务详情信息 */
declare interface CloudProtectService {
  /** 资源ID */
  ResourceId?: string;
  /** 类型： 这里为新购 */
  Type?: string;
  /** 配置：购买的配置信息 */
  Config?: string;
  /** 服务名称 */
  ServiceName?: string;
  /** 购买时间 */
  BeginTime?: string;
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

/** 创建修复任务的quuids */
declare interface CreateVulFixTaskQuuids {
  /** 漏洞id */
  VulId: number;
  /** 需要修复漏洞的主机，所有主机必须有VulId的这个漏洞且是待修复状态。 */
  Quuids: string[];
}

/** 默认策略基础信息 */
declare interface DefaultStrategyInfo {
  /** 策略名 */
  StrategyName: string;
  /** 策略id */
  StrategyId: number;
}

/** 网络攻击日志 */
declare interface DefendAttackLog {
  /** 日志ID */
  Id?: number;
  /** 客户端ID */
  Uuid?: string;
  /** 来源IP */
  SrcIp?: string;
  /** 来源端口 */
  SrcPort?: number;
  /** 攻击方式 */
  HttpMethod?: string;
  /** 攻击描述 */
  HttpCgi?: string;
  /** 攻击参数 */
  HttpParam?: string;
  /** 威胁类型 */
  VulType?: string;
  /** 攻击时间 */
  CreatedAt?: string;
  /** 目标服务器IP */
  MachineIp?: string;
  /** 目标服务器名称 */
  MachineName?: string;
  /** 目标IP */
  DstIp?: string;
  /** 目标端口 */
  DstPort?: number;
  /** 攻击内容 */
  HttpContent?: string;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 日志投递类型细节 */
declare interface DeliverTypeDetails {
  /** 安全模块类型 1: 入侵检测 2: 漏洞管理 3: 基线管理 4: 高级防御 5:客户端相关 6: 资产指纹 7 主机列表 8 客户端上报 */
  SecurityType: number;
  /** 安全模块下的日志类型 */
  LogType: number[];
  /** 主题ID */
  TopicId: string;
  /** 主题名 */
  TopicName: string;
  /** 投递开关 0关闭 1开启 */
  Switch: number;
  /** 投递状态，0未开启 1正常 2异常 */
  Status?: number;
  /** 错误信息 */
  ErrInfo?: string;
  /** 最近一次状态上报时间戳 */
  StatusTime?: number;
  /** 日志集名 */
  LogName?: string;
  /** 日志集ID */
  LogSetId?: string;
  /** 日志集所在地域 */
  Region?: string;
}

/** 批量添加白名单：重复情况重复列表实体 */
declare interface DuplicateHosts {
  /** Quuid */
  Quuid: string | null;
  /** Uuid */
  Uuid: string | null;
  /** Id */
  Id: number;
}

/** 批量导入机器信息. */
declare interface EffectiveMachineInfo {
  /** 机器名称 */
  MachineName?: string | null;
  /** 机器公网ip */
  MachinePublicIp?: string | null;
  /** 机器内网ip */
  MachinePrivateIp?: string | null;
  /** 机器标签 */
  MachineTag?: MachineTag[] | null;
  /** 机器Quuid */
  Quuid?: string | null;
  /** 云镜Uuid */
  Uuid?: string | null;
  /** 内核版本号 */
  KernelVersion?: string | null;
  /** 在线状态 OFFLINE，ONLINE */
  MachineStatus?: string | null;
  /** 授权订单对象 */
  LicenseOrder?: LicenseOrder | null;
  /** 漏洞数量 */
  VulNum?: number | null;
  /** 云标签信息 */
  CloudTags?: Tags[] | null;
  /** 机器instance ID */
  InstanceID?: string | null;
}

/** 专家服务-应急响应信息 */
declare interface EmergencyResponseInfo {
  /** 任务id */
  TaskId: string;
  /** 主机个数 */
  HostNum: number;
  /** 服务状态 0未启动，·响应中，2响应完成 */
  Status: number;
  /** 服务开始时间 */
  StartTime: string;
  /** 服务结束时间 */
  EndTime: string;
  /** 报告下载地址 */
  ReportPath: string;
}

/** 应急漏洞信息 */
declare interface EmergencyVul {
  /** 漏洞id */
  VulId: number;
  /** 漏洞级别 */
  Level: number;
  /** 漏洞名称 */
  VulName: string;
  /** 发布日期 */
  PublishDate: string;
  /** 漏洞分类 */
  Category: number;
  /** 漏洞状态 0未检测 1有风险 ，2无风险 ，3 检查中展示progress */
  Status: number;
  /** 最后扫描时间 */
  LastScanTime: string;
  /** 扫描进度 */
  Progress: number;
  /** cve编号 */
  CveId: string | null;
  /** CVSS评分 */
  CvssScore: number | null;
  /** 漏洞标签 多个逗号分割 */
  Labels: string | null;
  /** 影响机器数 */
  HostCount: number | null;
  /** 是否支持防御， 0:不支持 1:支持 */
  IsSupportDefense: number | null;
  /** 已防御的攻击次数 */
  DefenseAttackCount: number | null;
  /** 检测规则 0 - 版本比对, 1 - POC验证 */
  Method?: number | null;
  /** 攻击热度级别 */
  AttackLevel?: number | null;
  /** 是否有漏洞主机开启漏洞防御 */
  DefenseState?: boolean | null;
}

/** 未处理的安全事件统计信息 */
declare interface EventStat {
  /** 事件数 */
  EventsNum: number;
  /** 受影响的主机数 */
  MachineAffectNum: number;
}

/** 专家服务订单信息 */
declare interface ExpertServiceOrderInfo {
  /** 订单id */
  OrderId: number;
  /** 订单类型 1应急 2 旗舰重保 3 安全管家 */
  InquireType: number;
  /** 服务数量 */
  InquireNum: number;
  /** 服务开始时间 */
  BeginTime: string;
  /** 服务结束时间 */
  EndTime: string;
  /** 服务时长几个月 */
  ServiceTime: number;
  /** 订单状态 0 未启动 1 服务中 2已过期 3完成，4退费销毁 */
  Status: number;
}

/** 日志下载任务列表 */
declare interface ExportInfo {
  /** 日志导出任务ID */
  ExportId: string;
  /** 日志导出查询语句 */
  Query: string;
  /** 日志导出文件名 */
  FileName: string;
  /** 日志文件大小 */
  FileSize: number;
  /** 日志导出时间排序 */
  Order: string;
  /** 日志导出格式 */
  Format: string;
  /** 日志导出数量 */
  Count: number;
  /** 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）。 */
  Status: string;
  /** 日志导出起始时间，uinx毫秒时间戳 */
  StartTime: number;
  /** 日志导出结束时间，uinx毫秒时间戳 */
  EndTime: number;
  /** 日志导出路径 */
  CosPath: string;
  /** 日志导出创建时间 */
  CreateTime: string;
}

/** 快速分析统计信息 */
declare interface FieldValueRatioInfo {
  /** 个数 */
  Count: number;
  /** 比例 */
  Ratio: number;
  /** 值 */
  Value: string;
}

/** 核心文件监控事件 */
declare interface FileTamperEvent {
  /** 机器名称 */
  HostName?: string;
  /** 机器IP */
  HostIp?: string;
  /** 发生时间 */
  CreateTime?: string;
  /** 最近发生时间 */
  ModifyTime?: string;
  /** 事件id */
  Id?: number;
  /** 主机uuid */
  Uuid?: string;
  /** cvm id */
  Quuid?: string;
  /** 事件类型/动作 0 -- 告警 */
  Type?: number;
  /** 进程路径 */
  ProcessExe?: string;
  /** 进程参数 */
  ProcessArgv?: string;
  /** 目标文件路径 */
  Target?: string;
  /** 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略 4-已手动处理 */
  Status?: number;
  /** 事件产生次数 */
  EventCount?: number;
  /** 规则id */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 事件详情: json格式 */
  Pstree?: string;
  /** 规则类型 0系统规则 1自定义规则 */
  RuleCategory?: number;
  /** 主机在线信息 ONLINE、OFFLINE */
  MachineStatus?: string;
  /** 危害描述 */
  Description?: string;
  /** 修护建议 */
  Suggestion?: string;
  /** 内网ip */
  PrivateIp?: string;
  /** 进程权限 */
  ExePermission?: string;
  /** 用户名 */
  UserName?: string;
  /** 用户组 */
  UserGroup?: string;
  /** 进程名 */
  ExeMd5?: string;
  /** 进程文件大小 */
  ExeSize?: number;
  /** 进程执行时长 */
  ExeTime?: number;
  /** 目标文件大小 */
  TargetSize?: number;
  /** 目标文件权限 */
  TargetPermission?: string;
  /** 目标文件更新时间 */
  TargetModifyTime?: string | null;
  /** 目标文件创建时间 */
  TargetCreatTime?: string | null;
  /** 进程pid */
  ExePid?: number;
  /** 文件名称 */
  TargetName?: string;
  /** 参考链接 */
  Reference?: string;
  /** 风险等级 0：无， 1: 高危， 2:中危， 3: 低危 */
  Level?: number;
  /** 进程名称 */
  ExeName?: string | null;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 文件威胁行为read 读取文件write 修改文件 */
  FileAction?: string | null;
}

/** 核心文件监控规则 */
declare interface FileTamperRule {
  /** 进程路径 */
  ProcessPath: string;
  /** 被访问文件路径 */
  Target: string;
  /** 执行动作 跳过：skip，告警：alert */
  Action: string;
  /** 监控行为read 读取文件write 修改文件read-write 读取修改文件 */
  FileAction?: string | null;
}

/** 主机关联核心文件规则数量信息 */
declare interface FileTamperRuleCount {
  /** 主机uuid */
  Uuid: string;
  /** 关联规则的数量 */
  Count: number;
  /** 关联规则的名称（仅展示其中一条） */
  Name: string | null;
}

/** 核心文件监控规则详情 */
declare interface FileTamperRuleDetail {
  /** 规则名称 */
  Name: string | null;
  /** 更新时间 */
  ModifyTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 状态 0: 启用 1: 已关闭 */
  Status: number;
  /** 规则 */
  Rule: FileTamperRule[];
  /** 生效主机uuid,空表示全部主机，通过参数可控制返回的条数 */
  Uuids: string[] | null;
  /** 规则id */
  Id: number;
  /** 是否全局规则(默认否) 0：否 ，1：是 */
  IsGlobal: number;
  /** 风险等级 0：无， 1: 高危， 2:中危， 3: 低危 */
  Level: number;
  /** 生效主机的总数 */
  UuidTotalCount: number;
  /** 加白处理类型cur 仅对当前加白all 所有符合条件加白 */
  AddWhiteType?: string | null;
}

/** 核心文件监控规则列表 */
declare interface FileTamperRuleInfo {
  /** 规则名称 */
  Name: string | null;
  /** 规则类型 0 ：系统规则 1：用户规则 */
  RuleCategory: number;
  /** 影响主机数 */
  HostCount: number | null;
  /** 更新时间 */
  ModifyTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 状态 0: 启用 1: 已关闭 */
  Status: number;
  /** 规则id，系统的规则时为0。 */
  Id: number;
  /** 是否是全局的 0：否 ，1：是 */
  IsGlobal: number;
  /** 风险等级 0：无， 1: 高危， 2:中危， 3: 低危 */
  Level: number;
  /** 子规则写条目数 */
  WriteRuleCount?: number | null;
  /** 子规则读条目数 */
  ReadRuleCount?: number | null;
  /** 子规则读写条目数 */
  ReadWriteRuleCount?: number | null;
  /** 监控行为read 读取文件write 修改文件read-write 读取修改文件 */
  FileAction?: string | null;
  /** 加白处理类型cur 仅对当前加白all 所有符合条件加白 */
  AddWhiteType?: string | null;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。* 最多只能有5个Filter* 同一个Filter存在多个Values，Values值数量最多不能超过5个。 */
declare interface Filter {
  /** 过滤键的名称。 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 模糊搜索 */
  ExactMatch?: boolean;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filters {
  /** 过滤键的名称。 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 是否模糊匹配，前端框架会带上，可以不管 */
  ExactMatch?: boolean;
}

/** 全文索引的相关配置 */
declare interface FullTextInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean;
  /** 分词符 */
  Tokenizer: string;
  /** 是否包含中文 */
  ContainZH: boolean;
}

/** 账号变更历史数据。 */
declare interface HistoryAccount {
  /** 唯一ID。 */
  Id: number;
  /** 主机安全客户端唯一Uuid。 */
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

/** 展示登录审计白名单时的主机信息实体 */
declare interface HostDesc {
  /** 云镜客户端ID */
  Quuid: string;
  /** 主机ID */
  Uuid: string;
  /** 机器名 */
  MachineName: string;
  /** 机器IP:已销毁的服务器IP为空 */
  MachineIp: string;
  /** 公网IP:已销毁的服务器IP为空 */
  MachineWanIp: string;
  /** 标签信息数组 */
  Tags: MachineTag[];
}

/** 添加登录审计白名单的主机信息实体 */
declare interface HostInfo {
  /** Quuid */
  Quuid: string;
  /** Uuid */
  Uuid: string;
}

/** 登录审计列表实体 */
declare interface HostLoginList {
  /** 记录Id */
  Id?: number;
  /** Uuid串 */
  Uuid?: string | null;
  /** 主机ip */
  MachineIp?: string | null;
  /** 主机名 */
  MachineName?: string | null;
  /** 用户名 */
  UserName?: string | null;
  /** 来源ip */
  SrcIp?: string | null;
  /** 1:正常登录；2异地登录； 5已加白； 14：已处理；15：已忽略。 */
  Status?: number;
  /** 国家id */
  Country?: number | null;
  /** 城市id */
  City?: number | null;
  /** 省份id */
  Province?: number | null;
  /** 登录时间 */
  LoginTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 是否命中异地登录异常 1表示命中此类异常, 0表示未命中 */
  IsRiskArea?: number | null;
  /** 是否命中异常用户异常 1表示命中此类异常, 0表示未命中 */
  IsRiskUser?: number | null;
  /** 是否命中异常时间异常 1表示命中此类异常, 0表示未命中 */
  IsRiskTime?: number | null;
  /** 是否命中异常IP异常 1表示命中此类异常, 0表示未命中 */
  IsRiskSrcIp?: number | null;
  /** 危险等级：0 高危1 可疑 */
  RiskLevel?: number | null;
  /** 位置名称 */
  Location?: string | null;
  /** 主机quuid */
  Quuid?: string | null;
  /** 高危信息说明：ABROAD - 海外IP；XTI - 威胁情报 */
  Desc?: string | null;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 请求目的端口 */
  Port?: number | null;
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

/** 主机风险计数 */
declare interface HostRiskLevelCount {
  /** 主机ID */
  HostId: string;
  /** 主机名 */
  HostName: string | null;
  /** 严重个数 */
  SeriousCount: number;
  /** 高危个数 */
  HighCount: number;
  /** 中危个数 */
  MediumCount: number;
  /** 低危个数 */
  LowCount: number;
}

/** 主机与主机标签信息 */
declare interface HostTagInfo {
  /** 主机Quuid */
  Quuid?: string | null;
  /** 主机标签名数组 */
  TagList?: string[] | null;
  /** 主机内网Ip */
  HostIp?: string | null;
  /** 主机名 */
  AliasName?: string | null;
  /** 主机公网ip */
  MachineWanIp?: string | null;
  /** 主机uuid */
  Uuid?: string | null;
  /** 内核版本号 */
  KernelVersion?: string | null;
  /** 主机在线状态 ONLINE，OFFLINE */
  MachineStatus?: string | null;
  /** 防护版本 BASIC_VERSION 基础版, PRO_VERSION 专业版 Flagship 旗舰版 */
  ProtectType?: string | null;
  /** 漏洞数 */
  VulNum?: number | null;
  /** 云标签信息 */
  CloudTags?: Tags[] | null;
  /** 主机instance ID */
  InstanceID?: string | null;
}

/** 忽略的基线检测项信息 */
declare interface IgnoreBaselineRule {
  /** 基线检测项名称 */
  RuleName: string | null;
  /** 基线检测项id */
  RuleId: number | null;
  /** 更新时间 */
  ModifyTime: string | null;
  /** 修复建议 */
  Fix: string | null;
  /** 影响主机数 */
  EffectHostCount: number | null;
}

/** 忽略检测项影响主机信息 */
declare interface IgnoreRuleEffectHostInfo {
  /** 主机名称 */
  HostName: string | null;
  /** 危害等级：1-低位，2-中危，3-高危，4-严重 */
  Level: number | null;
  /** 主机标签数组 */
  TagList: string[] | null;
  /** 状态：0-未通过，1-忽略，3-已通过，5-检测中 */
  Status: number | null;
  /** 最后检测时间 */
  LastScanTime: string | null;
  /** 事件id */
  EventId: number | null;
  /** 主机quuid */
  Quuid: string | null;
}

/** 事件点信息 */
declare interface IncidentVertexInfo {
  /** 事件id */
  IncidentId?: string | null;
  /** 事件所在表名 */
  TableName?: string | null;
  /** 节点信息列表，数组项中包含节点详细信息 */
  Vertex?: VertexInfo[] | null;
  /** 节点总个数 */
  VertexCount?: number | null;
}

/** 项 */
declare interface Item {
  /** Id */
  ItemId: number;
  /** 名称 */
  ItemName?: string;
  /** 自定义阈值 */
  CustomItemValues?: number[] | null;
  /** 检测项所属分类 */
  CategoryId?: number | null;
}

/** java内存马事件详细信息 */
declare interface JavaMemShellDetail {
  /** 容器名 */
  InstanceName?: string;
  /** 实例状态：RUNNING,STOPPED,SHUTDOWN... */
  InstanceState?: string;
  /** 内网IP */
  PrivateIp?: string;
  /** 公共ip */
  PublicIp?: string;
  /** 内存马类型 0:Filter型 1:Listener型 2:Servlet型 3:Interceptors型 4:Agent型 5:其他 */
  Type?: number;
  /** 说明 */
  Description?: string;
  /** 首次发现时间 */
  CreateTime?: string;
  /** 最近检测时间 */
  RecentFoundTime?: string;
  /** 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略 4 - 已手动处理 */
  Status?: number;
  /** java加载器类名 */
  ClassLoaderName?: string;
  /** 父类名 */
  SuperClassName?: string;
  /** 类文件MD5 */
  Md5?: string;
  /** 继承的接口 */
  Interfaces?: string;
  /** 注释 */
  Annotations?: string;
  /** 进程pid */
  Pid?: number;
  /** java进程路径 */
  Exe?: string;
  /** java进程命令行参数 */
  Args?: string;
  /** 类名 */
  ClassName?: string;
  /** java内存马二进制代码(base64) */
  ClassContent?: string;
  /** java内存马反编译代码 */
  ClassContentPretty?: string;
  /** 事件描述 */
  EventDescription?: string;
  /** 安全建议 */
  SecurityAdvice?: string;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 实例状态：RUNNING,STOPPED,SHUTDOWN... */
  MachineState?: string;
}

/** java内存马事件信息 */
declare interface JavaMemShellInfo {
  /** 事件ID */
  Id?: number;
  /** 服务器名称 */
  Alias?: string | null;
  /** 服务器IP */
  HostIp?: string | null;
  /** 内存马类型 0:Filter型 1:Listener型 2:Servlet型 3:Interceptors型 4:Agent型 5:其他 */
  Type?: number;
  /** 说明 */
  Description?: string;
  /** 首次发现时间 */
  CreateTime?: string;
  /** 最近检测时间 */
  RecentFoundTime?: string;
  /** 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略 4 - 已手动处理 */
  Status?: number;
  /** 服务器quuid */
  Quuid?: string;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 服务器uuid */
  Uuid?: string | null;
}

/** Java内存马插件信息 */
declare interface JavaMemShellPluginInfo {
  /** 注入进程pid */
  Pid: number;
  /** 注入进程主类 */
  MainClass: string;
  /** 注入状态：0: 注入中, 1: 注入成功, 2: 插件超时, 3: 插件退出, 4: 注入失败 5: 软删除 */
  Status: number;
  /** 错误日志 */
  ErrorLog: string;
}

/** Java内存马插件配置 */
declare interface JavaMemShellPluginSetting {
  /** 容器quuid */
  Quuid: string;
  /** 服务器名 */
  Alias: string;
  /** 服务器ip */
  HostIp: string;
  /** javashell插件开关 0: 关闭 1: 开启 */
  JavaShellStatus: number;
  /** 插件是否存在异常 0: 正常 1: 异常 */
  Exception: number;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
  /** 服务器uuid */
  Uuid?: string | null;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 索引键值信息 */
declare interface KeyValueArrayInfo {
  /** 需要配置键值或者元字段索引的字段 */
  Key: string;
  /** 字段的索引描述信息 */
  Value: ValueInfo;
}

/** 键值索引配置 */
declare interface KeyValueInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean;
  /** 需要建立索引的键值对信息 */
  KeyValues: KeyValueArrayInfo[] | null;
}

/** 授权绑定详情信息 */
declare interface LicenseBindDetail {
  /** 机器别名 */
  MachineName?: string;
  /** 机器公网IP */
  MachineWanIp?: string;
  /** 机器内网IP */
  MachineIp?: string;
  /** 云服务器UUID */
  Quuid?: string;
  /** 主机安全客户端UUID */
  Uuid?: string;
  /** 标签信息 */
  Tags?: string[];
  /** 主机安全客户端状态,OFFLINE 离线,ONLINE 在线,UNINSTALL 未安装 */
  AgentStatus?: string;
  /** 是否允许解绑,false 不允许解绑 */
  IsUnBind?: boolean;
  /** 是否允许换绑,false 不允许换绑 */
  IsSwitchBind?: boolean;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 授权绑定任务详情 */
declare interface LicenseBindTaskDetail {
  /** 云服务器UUID */
  Quuid: string;
  /** 错误信息 */
  ErrMsg: string;
  /** 0 执行中, 1 成功,2失败 */
  Status: number;
  /** 修复建议 */
  FixMessage?: string;
  /** 机器额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 授权订单列表对象 */
declare interface LicenseDetail {
  /** 授权ID */
  LicenseId?: number;
  /** 授权类型,0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月 */
  LicenseType?: number;
  /** 授权状态 0 未使用,1 部分使用, 2 已用完, 3 不可用 */
  LicenseStatus?: number | null;
  /** 总授权数 */
  LicenseCnt?: number;
  /** 已使用授权数 */
  UsedLicenseCnt?: number;
  /** 订单状态 1 正常 2隔离, 3销毁 */
  OrderStatus?: number;
  /** 截止日期 */
  Deadline?: string;
  /** 订单资源ID */
  ResourceId?: string;
  /** 0 初始化,1 自动续费,2 不自动续费 */
  AutoRenewFlag?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 任务ID ,默认0 ,查询绑定进度用 */
  TaskId?: number;
  /** 购买时间 */
  BuyTime?: string;
  /** 是否试用订单. */
  SourceType?: number;
  /** 资源别名 */
  Alias?: string;
  /** 平台标签 */
  Tags?: Tags[] | null;
  /** 冻结数,当为0时 为未冻结,非0 则表示冻结授权数额 */
  FreezeNum?: number | null;
}

/** 授权订单对象内容 */
declare interface LicenseOrder {
  /** 授权ID */
  LicenseId: number;
  /** 授权类型 */
  LicenseType: number;
  /** 授权订单资源状态 */
  Status: number;
  /** 订单类型 */
  SourceType: number;
  /** 资源ID */
  ResourceId: string;
}

/** 授权解绑信息 */
declare interface LicenseUnBindRsp {
  /** QUUID 云服务器uuid,轻量服务器uuid,边缘计算 uuid */
  Quuid: string;
  /** 失败原因 */
  ErrMsg: string;
}

/** 直方图周期内统计结果详情 */
declare interface LogHistogram {
  /** 统计周期内的日志条数 */
  Count: number;
  /** 按 period 取整后的 unix timestamp： 单位毫秒 */
  TimeStamp: number;
}

/** 日志详情 */
declare interface LogInfo {
  /** 日志内容的Json序列化字符串 */
  Content: string;
  /** 日志文件名称 */
  FileName: string;
  /** 日志来源IP */
  Source: string;
  /** 日志时间，单位ms */
  TimeStamp: number;
}

/** 日志存储量记录 */
declare interface LogStorageRecord {
  /** 年月份 */
  Month?: string | null;
  /** 存储量，字节 */
  UsedSize?: number | null;
  /** 总量，字节 */
  InquireSize?: number | null;
}

/** 异地登录合并后白名单 */
declare interface LoginWhiteCombinedInfo {
  /** 白名单地域 */
  Places?: Place[] | null;
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
  /** 登陆地 */
  Locations: string;
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

/** 主机列表 */
declare interface Machine {
  /** 主机名称。 */
  MachineName?: string;
  /** 主机系统。 */
  MachineOs?: string;
  /** 主机状态。OFFLINE: 离线 ONLINE: 在线SHUTDOWN: 已关机UNINSTALLED: 未防护 */
  MachineStatus?: string;
  /** 云镜客户端唯一Uuid，若客户端长时间不在线将返回空字符。 */
  Uuid?: string;
  /** CVM或BM机器唯一Uuid。 */
  Quuid?: string;
  /** 漏洞数。 */
  VulNum?: number;
  /** 主机IP。 */
  MachineIp?: string;
  /** 是否是专业版。true： 是false：否 */
  IsProVersion?: boolean;
  /** 主机外网IP。 */
  MachineWanIp?: string;
  /** 主机状态。POSTPAY: 表示后付费，即按量计费 PREPAY: 表示预付费，即包年包月 */
  PayMode?: string;
  /** 木马数。 */
  MalwareNum?: number;
  /** 标签信息 */
  Tag?: MachineTag[];
  /** 基线风险数。 */
  BaselineNum?: number;
  /** 网络风险数。 */
  CyberAttackNum?: number;
  /** 风险状态。SAFE：安全RISK：风险UNKNOWN：未知 */
  SecurityStatus?: string;
  /** 入侵事件数 */
  InvasionNum?: number;
  /** 地域信息 */
  RegionInfo?: RegionInfo;
  /** 实例状态 TERMINATED_PRO_VERSION 已销毁 */
  InstanceState?: string;
  /** 防篡改 授权状态 1 授权 0 未授权 */
  LicenseStatus?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 是否有资产扫描接口，0无，1有 */
  HasAssetScan?: number;
  /** 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区 */
  MachineType?: string;
  /** 内核版本 */
  KernelVersion?: string;
  /** 防护版本：BASIC_VERSION 基础版， PRO_VERSION 专业版，Flagship 旗舰版，GENERAL_DISCOUNT 普惠版 */
  ProtectType?: string;
  /** 云标签信息 */
  CloudTags?: Tags[] | null;
  /** 是否15天内新增的主机 0：非15天内新增的主机，1：15天内增加的主机 */
  IsAddedOnTheFifteen?: number | null;
  /** 主机ip列表 */
  IpList?: string | null;
  /** 所属网络 */
  VpcId?: string | null;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 实例ID */
  InstanceId?: string;
  /** 备注信息 */
  Remark?: string | null;
}

/** 机器清理记录对象 */
declare interface MachineClearHistory {
  /** ID值 */
  Id: number;
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 公网IP */
  PublicIp: string;
  /** 内网IP */
  PrivateIp: string;
  /** 客户端最后离线时间 */
  AgentLastOfflineTime: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 服务器基础信息 */
declare interface MachineExtraInfo {
  /** 公网IP */
  WanIP?: string | null;
  /** 内网IP */
  PrivateIP?: string | null;
  /** 网络类型，1:vpc网络 2:基础网络 3:非腾讯云网络 */
  NetworkType?: number | null;
  /** 网络名，vpc网络情况下会返回vpc_id */
  NetworkName?: string | null;
  /** 实例ID */
  InstanceID?: string | null;
  /** 主机名 */
  HostName?: string | null;
}

/** 查询主机相关核心文件监控规则详情 */
declare interface MachineFileTamperRule {
  /** 规则名称 */
  Name: string | null;
  /** 规则类型 0 ：系统规则 1：用户规则 */
  RuleCategory: number;
  /** 规则 */
  Rule: FileTamperRule[];
  /** 唯一id */
  Id: number;
}

/** 机器绑定授权信息 */
declare interface MachineLicenseDetail {
  /** 主机quuid */
  Quuid: string;
  /** xx */
  PayMode: number;
  /** xxx */
  ResourceId: string;
  /** xxx */
  InquireKey: string;
  /** xxx */
  SourceType: number;
}

/** 主机列表穿梭框 */
declare interface MachineSimple {
  /** 主机名称。 */
  MachineName?: string;
  /** 主机系统。 */
  MachineOs?: string;
  /** 云镜客户端唯一Uuid，若客户端长时间不在线将返回空字符。 */
  Uuid?: string;
  /** CVM或BM机器唯一Uuid。 */
  Quuid?: string;
  /** 主机IP。 */
  MachineIp?: string;
  /** 是否是专业版。true： 是false：否 */
  IsProVersion?: boolean;
  /** 主机外网IP。 */
  MachineWanIp?: string;
  /** 主机状态。POSTPAY: 表示后付费，即按量计费 PREPAY: 表示预付费，即包年包月 */
  PayMode?: string;
  /** 标签信息 */
  Tag?: MachineTag[];
  /** 地域信息 */
  RegionInfo?: RegionInfo;
  /** 实例状态 TERMINATED_PRO_VERSION 已销毁 */
  InstanceState?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区 */
  MachineType?: string;
  /** 内核版本 */
  KernelVersion?: string;
  /** 防护版本 BASIC_VERSION 基础版， PRO_VERSION 专业版，Flagship 旗舰版，GENERAL_DISCOUNT 普惠版. */
  ProtectType?: string;
  /** 授权订单对象 */
  LicenseOrder?: LicenseOrder | null;
  /** 云标签信息 */
  CloudTags?: Tags[] | null;
  /** 实例ID */
  InstanceId?: string | null;
}

/** 机器快照信息 */
declare interface MachineSnapshotInfo {
  /** cvm id */
  Quuid: string;
  /** 主机名称 */
  HostName: string;
  /** 主机ip */
  HostIp: string;
  /** 快照名称 */
  SnapshotName: string;
  /** 快照创建时间 */
  CreateTime: string;
  /** 磁盘id */
  DiskId: string;
  /** 实例Id */
  InstanceId: string;
  /** 地区id */
  RegionId: number;
  /** 快照id */
  SnapshotId: string;
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

/** 木马列表集合 */
declare interface MalWareList {
  /** 服务器ip */
  HostIp?: string;
  /** 唯一UUID */
  Uuid?: string;
  /** 路径 */
  FilePath?: string;
  /** 描述 */
  VirusName?: string;
  /** 状态；4-:待处理，5-已信任，6-已隔离，8-文件已删除, 14:已处理 */
  Status?: number;
  /** 唯一ID */
  Id?: number | null;
  /** 主机别名 */
  Alias?: string;
  /** 特性标签，已废弃字段，不会再返回标签，详情中才会返回标签信息 */
  Tags?: string[] | null;
  /** 首次运行时间 */
  FileCreateTime?: string | null;
  /** 最近运行时间 */
  FileModifierTime?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 最近扫描时间 */
  LatestScanTime?: string;
  /** 风险等级 0未知、1低、2中、3高、4严重 */
  Level?: number;
  /** '木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报 */
  CheckPlatform?: string;
  /** 木马进程是否存在 0:不存在，1:存在 */
  ProcessExists?: number;
  /** 木马文件是否存在 0:不存在，1:存在 */
  FileExists?: number;
  /** cvm quuid */
  Quuid?: string;
  /** 木马样本md5 */
  MD5?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 恶意请求白名单列表信息 */
declare interface MaliciousRequestWhiteListInfo {
  /** 白名单id */
  Id: number;
  /** 域名 */
  Domain: string;
  /** 备注 */
  Mark: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  ModifyTime: string;
}

/** 恶意文件详情 */
declare interface MalwareInfo {
  /** 病毒名称 */
  VirusName?: string;
  /** 文件大小 */
  FileSize?: number;
  /** 文件MD5 */
  MD5?: string;
  /** 文件地址 */
  FilePath?: string;
  /** 首次运行时间 */
  FileCreateTime?: string;
  /** 最近一次运行时间 */
  FileModifierTime?: string;
  /** 危害描述 */
  HarmDescribe?: string;
  /** 建议方案 */
  SuggestScheme?: string;
  /** 服务器名称 */
  ServersName?: string;
  /** 服务器IP */
  HostIp?: string;
  /** 进程名称 */
  ProcessName?: string;
  /** 进程ID */
  ProcessID?: string;
  /** 标签特性 */
  Tags?: string[];
  /** 影响广度 // 暂时不提供 */
  Breadth?: string | null;
  /** 查询热度 // 暂时不提供 */
  Heat?: string | null;
  /** 唯一ID */
  Id?: number;
  /** 文件名称 */
  FileName?: string;
  /** 首次发现时间 */
  CreateTime?: string;
  /** 最近扫描时间 */
  LatestScanTime?: string;
  /** 参考链接 */
  Reference?: string;
  /** 外网ip */
  MachineWanIp?: string | null;
  /** 进程树 json pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源 */
  PsTree?: string | null;
  /** 主机在线状态 OFFLINE ONLINE */
  MachineStatus?: string | null;
  /** 状态；4-:待处理，5-已信任，6-已隔离 */
  Status?: number | null;
  /** 风险等级 0提示、1低、2中、3高、4严重 */
  Level?: number | null;
  /** 木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报 */
  CheckPlatform?: string | null;
  /** 主机uuid */
  Uuid?: string | null;
  /** 最近修改时间 */
  ModifyTime?: string | null;
  /** 最近访问时间 */
  StrFileAccessTime?: string | null;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 恶意文件风险提示列表信息 */
declare interface MalwareRisk {
  /** 机器IP */
  MachineIp: string;
  /** 病毒名 */
  VirusName: string;
  /** 发现时间 */
  CreateTime: string;
  /** 唯一ID */
  Id: number;
}

/** 文件查杀概览信息 */
declare interface MalwareRiskOverview {
  /** 影响主机数 */
  HostCount: number;
  /** 异常进程数 */
  ProcessCount: number;
  /** 恶意文件数 */
  FileCount: number;
  /** 是否首次扫描[false:否|true:是] */
  IsFirstScan: boolean;
  /** 最后扫描时间 */
  ScanTime: string;
}

/** 木马白名单影响事件信息 */
declare interface MalwareWhiteListAffectEvent {
  /** 唯一ID。 */
  Id: number;
  /** 主机ip */
  HostIp: string;
  /** 影响的md5 */
  Md5: string;
  /** 文件路径 */
  FilePath: string;
  /** 添加时间 */
  CreateTime: string;
}

/** 木马白名单信息 */
declare interface MalwareWhiteListInfo {
  /** 唯一ID。 */
  Id: number;
  /** cvm quuid 按,分割。 */
  QuuidList: string;
  /** md5列表 按,分割 */
  Md5List: string;
  /** 是否全部主机； 0否，1是 */
  IsGlobal: number;
  /** 白名单模式；0 MD5 ，1自定义 */
  Mode: number;
  /** 匹配模式；0精确匹配，1模糊匹配 */
  MatchType: number;
  /** 文件名；按,分割 */
  FileName: string;
  /** 文件目录；按,分割 */
  FileDirectory: string;
  /** 文件后缀；按,分割 */
  FileExtension: string;
  /** 规则创建时间 */
  CreateTime: string;
  /** 受影响记录 */
  EventsCount: number;
}

/** 专家服务-月巡检报告 */
declare interface MonthInspectionReport {
  /** 巡检报告名称 */
  ReportName: string;
  /** 巡检报告下载地址 */
  ReportPath: string;
  /** 巡检报告更新时间 */
  ModifyTime: string;
}

/** 网络攻击事件 */
declare interface NetAttackEvent {
  /** 日志ID */
  Id?: number;
  /** 客户端ID */
  Uuid?: string;
  /** 目标端口 */
  DstPort?: number;
  /** 来源IP */
  SrcIP?: string;
  /** 来源地 */
  Location?: string;
  /** 漏洞id */
  VulId?: number;
  /** 漏洞名称 */
  VulName?: string;
  /** 攻击时间 */
  MergeTime?: string;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 攻击状态，0: 尝试攻击 1: 实锤攻击(攻击成功) */
  Type?: number;
  /** 处理状态，0 待处理 1 已处理 2 已加白 3 已忽略 4 已删除 5: 已开启防御 */
  Status?: number;
  /** 漏洞是否支持防御，0:不支持 1:支持 */
  VulSupportDefense?: number;
  /** 是否开启漏洞防御，0关1开 */
  VulDefenceStatus?: number;
  /** 机器付费版本，0 基础版，1专业版，2旗舰版，3普惠版 */
  PayVersion?: number;
  /** cvm uuid */
  Quuid?: string;
  /** 攻击次数 */
  Count?: number;
  /** 是否今日新增主机 */
  New?: boolean;
}

/** 网络攻击事件详情 */
declare interface NetAttackEventInfo {
  /** 处理状态，0 待处理 1 已处理 2 已加白 3 已忽略 4 已删除 5: 已开启防御 */
  Status?: number;
  /** 攻击源ip */
  SrcIP?: string;
  /** 攻击源地 */
  Location?: string;
  /** 漏洞名称 */
  VulName?: string;
  /** 漏洞id */
  VulId?: number;
  /** 漏洞CVE编号 */
  CVEId?: string;
  /** 漏洞攻击热度 */
  AttackLevel?: number;
  /** 漏洞防御状态，0关闭，1开启 */
  VulDefenceStatus?: number;
  /** 漏洞是否支持防御，0:不支持 1:支持 */
  VulSupportDefense?: number;
  /** 服务进程 base64 */
  SvcPs?: string;
  /** 攻击数据包 */
  NetPayload?: string;
  /** 异常行为 */
  AbnormalAction?: string;
  /** 主机uuid */
  Uuid?: string;
  /** 事件id */
  Id?: number;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 目标端口 */
  DstPort?: number;
  /** 攻击次数 */
  Count?: number;
  /** 机器付费版本，0 基础版，1专业版，2旗舰版，3普惠版 */
  PayVersion?: number;
  /** cvm uuid */
  Quuid?: string | null;
  /** 攻击发生时间 */
  MergeTime?: string | null;
  /** 0: 尝试攻击 1:攻击成功 */
  Type?: number | null;
  /** 0:无失陷行为 1: rce(命令执行) 2: dnslog 3: writefile */
  HostOpType?: number | null;
  /** 进程树,需要用base64 解码 */
  HostOpProcessTree?: string | null;
}

/** 网络攻击top统计数据 */
declare interface NetAttackTopInfo {
  /** 网络攻击主机维度top统计数据 */
  Agent?: TopInfo[] | null;
  /** 网络攻击ip来源维度top统计数据 */
  SrcIp?: TopInfo[] | null;
  /** 网络攻击目标端口维度top统计数据 */
  DstPort?: TopInfo[] | null;
  /** 网络攻击漏洞维度top统计数据 */
  Vul?: TopInfo[] | null;
}

/** 攻击趋势统计数据 */
declare interface NetAttackTrend {
  /** 时间点，如 2023-05-06 */
  DateTime?: string | null;
  /** 攻击次数 */
  AttackCount?: number | null;
  /** 尝试攻击次数 */
  TryAttackCount?: number | null;
  /** 攻击成功次数 */
  SuccAttackCount?: number | null;
}

/** 网络攻击白名单规则 */
declare interface NetAttackWhiteRule {
  /** 规则id */
  Id?: number | null;
  /** 规则描述 */
  Description?: string | null;
  /** 0: 一组quuid 1: 所有主机 */
  Scope?: number | null;
  /** 是否处理之前的事件 0: 不处理 1:处理 */
  DealOldEvents?: number | null;
  /** 主机quuid 多个用;隔开 */
  Quuids?: string | null;
  /** 来源IP 单IP:1.1.1.1 IP范围:1.1.1.1-1.1.2.1 IP范围：1.1.1.0/24 多个用;隔开 */
  SrcIP?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
}

/** 端口统计列表 */
declare interface OpenPortStatistics {
  /** 端口号 */
  Port: number;
  /** 主机数量 */
  MachineNum: number;
}

/** 订单变配参数对象 */
declare interface OrderModifyObject {
  /** 资源ID */
  ResourceId?: string;
  /** 新产品标识,这里支持PRO_VERSION 专业版,FLAGSHIP 旗舰版 */
  NewSubProductCode?: string;
  /** 扩容/缩容数,变配子产品忽略该参数 */
  InquireNum?: number;
}

/** 订单资源 */
declare interface OrderResource {
  /** 资源主键ID */
  Id: number;
  /** 资源ID */
  ResourceId: string;
  /** 开始时间 */
  BeginTime: string;
  /** 到期时间 */
  EndTime: string;
  /** 授权类型 */
  LicenseType: number;
}

/** 操作系统名称 */
declare interface OsName {
  /** 系统名称 */
  Name: string;
  /** 操作系统类型枚举值 */
  MachineOSType: number;
}

/** 登录地信息 */
declare interface Place {
  /** 城市 ID。 */
  CityId: number;
  /** 省份 ID。 */
  ProvinceId: number;
  /** 国家ID，暂只支持国内：1。 */
  CountryId: number;
  /** 位置名称 */
  Location?: string;
}

/** 本地提权数据 */
declare interface PrivilegeEscalationProcess {
  /** 数据ID */
  Id?: number;
  /** 主机安全ID */
  Uuid?: string;
  /** 主机ID */
  Quuid?: string;
  /** 主机内网IP */
  Hostip?: string;
  /** 进程名 */
  ProcessName?: string;
  /** 进程路径 */
  FullPath?: string;
  /** 执行命令 */
  CmdLine?: string;
  /** 用户名 */
  UserName?: string;
  /** 用户组 */
  UserGroup?: string;
  /** 进程文件权限 */
  ProcFilePrivilege?: string;
  /** 父进程名 */
  ParentProcName?: string;
  /** 父进程用户名 */
  ParentProcUser?: string;
  /** 父进程用户组 */
  ParentProcGroup?: string;
  /** 父进程路径 */
  ParentProcPath?: string;
  /** 进程树 */
  ProcTree?: string;
  /** 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略 */
  Status?: number;
  /** 发生时间 */
  CreateTime?: string;
  /** 机器名 */
  MachineName?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 进程id */
  Pid?: number | null;
}

/** 本地提权数据 */
declare interface PrivilegeEventInfo {
  /** 数据ID */
  Id: number;
  /** 云镜ID */
  Uuid: string;
  /** 主机ID */
  Quuid: string;
  /** 主机内网IP */
  HostIp: string;
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
  /** 进程树 json pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源 */
  PsTree: string;
  /** 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略 */
  Status: number;
  /** 发生时间 */
  CreateTime: string;
  /** 机器名 */
  MachineName: string;
  /** 建议方案 */
  SuggestScheme: string;
  /** 危害描述信息 */
  HarmDescribe: string;
  /** 标签 */
  Tags: string[];
  /** 参考链接 */
  References: string[];
  /** 主机外网ip */
  MachineWanIp: string;
  /** 权限列表|隔开 */
  NewCaps: string;
  /** 主机在线状态 OFFLINE ONLINE */
  MachineStatus: string;
  /** 处理时间 */
  ModifyTime: string;
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

/** 进程数据统计数据。 */
declare interface ProcessStatistics {
  /** 进程名。 */
  ProcessName: string;
  /** 主机数量。 */
  MachineNum: number;
}

/** 产品试用状态查询接口Data出参 */
declare interface ProductStatusInfo {
  /** 防护状态，1未防护，2防护中，3试用中，4已过期 */
  FWUserStatus: number;
  /** 是否可以申请试用，true可以申请 */
  CanApplyTrial: boolean;
  /** 无法试用原因，可试用为空 */
  CanNotApplyReason: string;
  /** 上次试用结束时间（不存在试用记录则为空） */
  LastTrialTime: string;
}

/** 防护目录列表集 */
declare interface ProtectDirInfo {
  /** 网站名称 */
  DirName: string;
  /** 网站防护目录地址 */
  DirPath: string;
  /** 关联服务器数 */
  RelatedServerNum: number;
  /** 防护服务器数 */
  ProtectServerNum: number;
  /** 未防护服务器数 */
  NoProtectServerNum: number;
  /** 唯一ID */
  Id: string;
  /** 防护状态 */
  ProtectStatus: number;
  /** 防护异常 */
  ProtectException: number;
  /** 自动恢复开关 (Filters 过滤Quuid 时 返回) 默认0 */
  AutoRestoreSwitchStatus: number;
  /** 首次开启防护时间 */
  FirstProtectTime?: string | null;
  /** 最近开启防护时间 */
  LatestProtectTime?: string | null;
  /** 防护文件类型 */
  ProtectFileType?: string | null;
  /** 防护文件总数 */
  ProtectFilesCount?: number | null;
}

/** 防护目录关联服务器列表信息 */
declare interface ProtectDirRelatedServer {
  /** 唯一ID */
  Id?: string;
  /** 服务器名称 */
  HostName?: string;
  /** 服务器IP */
  HostIp?: string;
  /** 服务器系统 */
  MachineOs?: string;
  /** 关联目录数 */
  RelateDirNum?: number;
  /** 防护状态 */
  ProtectStatus?: number;
  /** 防护开关 */
  ProtectSwitch?: number;
  /** 自动恢复开关 */
  AutoRestoreSwitchStatus?: number;
  /** 服务器唯一ID */
  Quuid?: string;
  /** 是否已经授权 */
  Authorization?: boolean;
  /** 异常状态 */
  Exception?: number;
  /** 过渡进度 */
  Progress?: number;
  /** 异常信息 */
  ExceptionMessage?: string;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 防护事件列表信息 */
declare interface ProtectEventLists {
  /** 服务器名称 */
  HostName?: string;
  /** 服务器ip */
  HostIp?: string;
  /** 事件地址 */
  EventDir?: string;
  /** 事件类型 0-内容被修改恢复；1-权限被修改恢复；2-归属被修改恢复；3-被删除恢复；4-新增删除 */
  EventType?: number;
  /** 事件状态 1 已恢复 0 未恢复 */
  EventStatus?: number;
  /** 发现时间 */
  CreateTime?: string;
  /** 恢复时间 */
  RestoreTime?: string;
  /** 唯一ID */
  Id?: number;
  /** 文件类型 0-常规文件；1-目录；2-软链 */
  FileType?: number;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 机器实例uuid */
  Quuid?: string | null;
}

/** 防护机器信息 */
declare interface ProtectHostConfig {
  /** 机器唯一ID */
  Quuid: string;
  /** 防护开关 0 关闭 1开启 */
  ProtectSwitch: number;
  /** 自动恢复开关 0 关闭 1开启 */
  AutoRecovery: number;
}

/** 机器授权到期信息 */
declare interface ProtectMachine {
  /** 机器名称 */
  HostName: string;
  /** 机器IP */
  HostIp: string;
  /** 防护目录数 */
  SafeguardDirNum: number;
}

/** 授权机器信息 */
declare interface ProtectMachineInfo {
  /** 机器名称 */
  HostName: string;
  /** 机器IP */
  HostIp: string;
  /** 开通时间 */
  CreateTime: string;
  /** 到期时间 */
  ExpireTime: string;
}

/** 专家服务-旗舰护网信息 */
declare interface ProtectNetInfo {
  /** 任务id */
  TaskId: string;
  /** 护网天数 */
  ProtectDays: number;
  /** 护网状态 0未启动，1护网中，2已完成 */
  Status: number;
  /** 护网启动时间 */
  StartTime: string;
  /** 护网完成时间 */
  EndTime: string;
  /** 报告下载地址 */
  ReportPath: string;
}

/** 防护信息统计 */
declare interface ProtectStat {
  /** 名称 */
  Name: string;
  /** 数量 */
  Num: number;
}

/** 主机快照备份列表 */
declare interface RansomDefenseBackup {
  /** 备份时间 */
  BackupTime: string;
  /** 勒索状态：0无告警, 1有告警 */
  EventStatus: number;
  /** 备份状态：0备份中，1正常，2、3失败，4快照已过期，9快照已删除 */
  BackupStatus: number;
  /** 备份磁盘数量 */
  DiskCount: number;
  /** 硬盘信息，；分隔 */
  Disks: string;
  /** 快照列表，；分隔 */
  SnapshotIds: string;
  /** 策略id */
  StrategyId: number;
  /** 策略状态:0关闭，1开启，9已删除 */
  StrategyStatus: number;
  /** 策略名称 */
  StrategyName: string;
}

/** 防勒索诱饵篡改事件 */
declare interface RansomDefenseEvent {
  /** 事件id */
  Id: number;
  /** 主机uuid */
  Uuid: string;
  /** cvm uuid */
  Quuid: string;
  /** 主机名称 */
  HostName: string;
  /** 事件状态 0待处理，1已处理，2已信任，3处理中，4已恢复备份 */
  Status: number;
  /** 被篡改文件路径 */
  BaitFilePath: string;
  /** 恶意文件路径 */
  FilePath: string;
  /** 恶意进程id */
  Pid: number;
  /** 恶意进程参数 */
  PidParam: string;
  /** 恶意文件大小 */
  FileSize: number;
  /** 恶意文件md5 */
  FileMd5: string;
  /** 事件类型：0加密勒索，1文件篡改 */
  Type: number;
  /** 事件发送时间 */
  CreateTime: string;
  /** cvm 实例id */
  InstanceId: string;
  /** 事件修改事件 */
  ModifyTime: string;
  /** 策略id */
  StrategyId: number;
  /** 策略名称 */
  StrategyName: string;
  /** 主机外网ip */
  HostIp: string;
  /** 主机内网ip */
  WanIp: string;
  /** 进程树 base64 json */
  PsTree: string;
  /** 进程启动时间 */
  ProcessStartTime: string;
  /** 主机拥有快照备份数 */
  SnapshotNum: number;
}

/** 防勒索回滚任务 */
declare interface RansomDefenseRollbackTask {
  /** 任务ID */
  Id: number;
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机名称 */
  MachineName: string;
  /** 回滚任务状态：0进行中，1成功，2失败 */
  Status: number;
  /** 硬盘id列表，;分隔 */
  Disks: string;
  /** 操作时间 */
  CreateTime: string;
  /** 快照时间 */
  BackupTime: string;
  /** Status!=0时为完成时间 */
  ModifyTime: string;
  /** 可用区信息 */
  RegionInfo: RegionInfo;
}

/** 主机列表查询接口相应数据HostList的TagList节点 */
declare interface RansomDefenseStrategy {
  /** 策略id */
  Id: number;
  /** 操作uin */
  Uin: string | null;
  /** 策略名称 */
  Name: string;
  /** 策略备注 */
  Description: string | null;
  /** 开启状态：0关闭，1开启 */
  Status: number;
  /** 是否对所有主机生效 */
  IsAll: number;
  /** 包含目录，用;分隔 */
  IncludeDir: string | null;
  /** 包含目录，用;分隔 */
  ExcludeDir: string | null;
  /** 备份模式： 0按周，1按天 */
  BackupType: number | null;
  /** 备份星期天数（1-7）：1;2;3;4 */
  Weekday: string | null;
  /** 备份执行时间点(0-23): 11:00;12:00 */
  Hour: string;
  /** 保存天数，0永久保存 */
  SaveDay: number;
  /** 创建时间 */
  CreateTime: string | null;
  /** 最近修改时间 */
  ModifyTime: string | null;
  /** 绑定机器数 */
  MachineCount: number | null;
}

/** 主机列表查询接口相应数据HostList的TagList节点 */
declare interface RansomDefenseStrategyDetail {
  /** 策略id */
  Id: number;
  /** 操作uin */
  Uin: string | null;
  /** 策略名称 */
  Name: string;
  /** 策略备注 */
  Description: string | null;
  /** 开启状态：0关闭，1开启 */
  Status: number;
  /** 是否对所有主机生效 */
  IsAll: number;
  /** 包含目录，用;分隔 */
  IncludeDir: string | null;
  /** 包含目录，用;分隔 */
  ExcludeDir: string | null;
  /** 备份模式： 0按周，1按天 */
  BackupType: number | null;
  /** 备份星期天数（1-7）：1;2;3;4 */
  Weekday: string | null;
  /** 备份执行时间点(0-23): 11:00;12:00 */
  Hour: string;
  /** 保存天数，0永久保存 */
  SaveDay: number;
  /** 创建时间 */
  CreateTime: string | null;
  /** 最近修改时间 */
  ModifyTime: string | null;
  /** 绑定机器数 */
  MachineCount: number | null;
  /** 策略关联事件数 */
  EventCount: number | null;
}

/** 防勒索策略绑定主机备份详情 */
declare interface RansomDefenseStrategyMachineBackupInfo {
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机名称 */
  MachineName: string;
  /** 主机实例id */
  InstanceId: string;
  /** 内网ip */
  MachineIp: string;
  /** 外网ip */
  MachineWanIp: string | null;
  /** 云标签 */
  CloudTags: Tag[] | null;
  /** 可用区信息 */
  RegionInfo: RegionInfo | null;
  /** 主机安全标签 */
  Tag: MachineTag[] | null;
  /** 防护状态：0关闭，1开启 */
  Status: number | null;
  /** 策略id，为0时未绑定策略 */
  StrategyId: number | null;
  /** 硬盘信息，为空时所有硬盘生效：;分割 diskId1|diskName1;diskId2|diskName2 */
  DiskInfo: string | null;
  /** 策略名称 */
  StrategyName: string | null;
  /** 备份数量 */
  BackupCount: number | null;
  /** 最近一次备份状态：0备份中，1正常，2失败，9暂无备份 */
  LastBackupStatus: number | null;
  /** 最近一次备份失败原因 */
  LastBackupMessage: string | null;
  /** 最近一次备份时间 */
  LastBackupTime: string | null;
  /** 最近一次回滚进度百分比 */
  RollBackPercent: number | null;
  /** 最近一次回滚状态：0进行中，1成功，2失败 */
  RollBackStatus: number | null;
  /** 备份成功次数 */
  BackupSuccessCount: number | null;
}

/** 防勒索主机列表 */
declare interface RansomDefenseStrategyMachineDetail {
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机名称 */
  MachineName: string;
  /** 主机实例id */
  InstanceId: string;
  /** 内网ip */
  MachineIp: string;
  /** 外网ip */
  MachineWanIp: string | null;
  /** 云标签 */
  CloudTags: Tag[] | null;
  /** 可用区信息 */
  RegionInfo: RegionInfo | null;
  /** 主机安全标签 */
  Tag: MachineTag[] | null;
  /** 防护状态：0关闭，1开启 */
  Status: number | null;
  /** 策略id，为0时未绑定策略 */
  StrategyId: number | null;
  /** 硬盘信息，为空时所有硬盘生效：;分割 diskId1|diskName1;diskId2|diskName2 */
  DiskInfo: string | null;
  /** 版本信息：0-基础版 1-专业版 2-旗舰版 3-普惠版 */
  HostVersion: number | null;
  /** 策略名称 */
  StrategyName: string | null;
}

/** 防勒索机器硬盘配置 */
declare interface RansomDefenseStrategyMachineInfo {
  /** 主机uuid */
  Uuid: string;
  /** 指定硬盘列表，为空时表示所有硬盘：disk_id1|disk_name1;disk_id2|disk_name2 */
  DiskInfo?: string | null;
}

/** 客户端异常信息结构 */
declare interface RecordInfo {
  /** 主机ip */
  HostIP: string;
  /** 主机实例id */
  InstanceID: string;
  /** 客户端离线时间 */
  OfflineTime: string;
  /** 客户端卸载时间 */
  UninstallTime: string;
  /** 客户端卸载调用链 */
  UninstallCmd: string;
  /** 客户端uuid */
  Uuid: string;
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
  /** 地域英文名 */
  RegionNameEn: string;
}

/** 地域列表详情 */
declare interface RegionListDetail {
  /** 机器类型CVM 腾讯云云服务器LH 腾讯云轻量服务器ECM 腾讯云边缘计算服务器BM 腾讯云黑石1.0 服务器Other 其他服务器(非腾讯云) */
  MachineType?: string | null;
  /** 0 腾讯云1 IDC机房2 阿里云3 华为云4 亚马逊5 微软6 Google7 Oracle8 Digital Ocean */
  CloudFrom?: number | null;
  /** 地域列表 */
  RegionList?: RegionInfo[] | null;
}

/** 地域信息 */
declare interface RegionSet {
  /** 地域名称 */
  RegionName: string;
  /** 可用区信息 */
  ZoneSet: ZoneInfo[];
}

/** 反弹Shell数据 */
declare interface ReverseShell {
  /** ID 主键 */
  Id?: number;
  /** 主机安全UUID */
  Uuid?: string;
  /** 主机ID */
  Quuid?: string;
  /** 主机内网IP */
  Hostip?: string;
  /** 目标IP */
  DstIp?: string;
  /** 目标端口 */
  DstPort?: number;
  /** 进程名 */
  ProcessName?: string;
  /** 进程路径 */
  FullPath?: string;
  /** 命令详情 */
  CmdLine?: string;
  /** 执行用户 */
  UserName?: string;
  /** 执行用户组 */
  UserGroup?: string;
  /** 父进程名 */
  ParentProcName?: string;
  /** 父进程用户 */
  ParentProcUser?: string;
  /** 父进程用户组 */
  ParentProcGroup?: string;
  /** 父进程路径 */
  ParentProcPath?: string;
  /** 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略 */
  Status?: number;
  /** 产生时间 */
  CreateTime?: string;
  /** 主机名 */
  MachineName?: string;
  /** 进程树 */
  ProcTree?: string;
  /** 检测方法: 0行为分析; 1命令特征检测 */
  DetectBy?: number;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 进程id */
  Pid?: number | null;
  /** 威胁等级：0中危，1高危 */
  RiskLevel?: number | null;
}

/** 反弹Shell数据详情 */
declare interface ReverseShellEventInfo {
  /** ID 主键 */
  Id: number;
  /** 云镜UUID */
  Uuid: string;
  /** 主机ID */
  Quuid: string;
  /** 主机内网IP */
  HostIp: string;
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
  /** 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略 */
  Status: number;
  /** 产生时间 */
  CreateTime: string;
  /** 主机名 */
  MachineName: string;
  /** 检测方法 */
  DetectBy: number;
  /** 进程树 json pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源 */
  PsTree: string | null;
  /** 建议方案 */
  SuggestScheme: string;
  /** 描述 */
  HarmDescribe: string;
  /** 标签 */
  Tags: string[];
  /** 参考链接 */
  References: string[];
  /** 主机外网ip */
  MachineWanIp: string;
  /** 主机在线状态 OFFLINE ONLINE */
  MachineStatus: string;
  /** 处理时间 */
  ModifyTime: string;
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

/** 恶意请求事件 */
declare interface RiskDnsEvent {
  /** 事件Id */
  Id?: number;
  /** 策略ID */
  PolicyId?: number;
  /** 命中策略类型[-1:未知|0系统|1:用户] */
  PolicyType?: number;
  /** 命中策略名称 */
  PolicyName?: string;
  /** 保护级别[0:基础版|1:专业版|2:旗舰版] */
  ProtectLevel?: number;
  /** 主机ID */
  HostId?: string;
  /** 主机名称 */
  HostName?: string;
  /** 主机IP */
  HostIp?: string;
  /** 外网IP */
  WanIp?: string;
  /** 客户端ID */
  AgentId?: string;
  /** 访问域名 */
  Domain?: string;
  /** 标签特性 */
  Tags?: string[];
  /** 访问次数 */
  AccessCount?: number;
  /** 威胁描述 */
  ThreatDesc?: string;
  /** 修复方案 */
  SuggestSolution?: string;
  /** 参考链接 */
  ReferenceLink?: string;
  /** 处理状态；[0:待处理|2:已加白|3:非信任状态|4:已处理|5:已忽略] */
  HandleStatus?: number;
  /** 进程ID */
  Pid?: number;
  /** 进程名 */
  ProcessName?: string;
  /** 进程MD5 */
  ProcessMd5?: string;
  /** 命令行 */
  CmdLine?: string;
  /** 首次访问时间 */
  FirstTime?: string;
  /** 最近访问时间 */
  LastTime?: string;
  /** 主机在线状态[OFFLINE:离线|ONLINE:在线|UNKNOWN:未知] */
  HostStatus?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** [1:CentOS|2:Debian|3:Gentoo|4:Redhat|5:Ubuntu|6:Windows|7:TencentOS|8:CoreOS|9:FreeBSD|10:SUSE] */
  OsType?: number;
}

/** 恶意请求列表 */
declare interface RiskDnsList {
  /** 对外访问域名 */
  Url: string;
  /** 访问次数 */
  AccessCount: number;
  /** 进程名 */
  ProcessName: string;
  /** 进程MD5 */
  ProcessMd5: string;
  /** 是否为全局规则，0否，1是 */
  GlobalRuleId: number;
  /** 用户规则id */
  UserRuleId: number;
  /** 状态；0-待处理，2-已加白，3-非信任状态，4-已处理，5-已忽略 */
  Status: number;
  /** 首次访问时间 */
  CreateTime: string;
  /** 最近访问时间 */
  MergeTime: string;
  /** 唯一 Quuid */
  Quuid: string;
  /** 主机ip */
  HostIp: string;
  /** 别名 */
  Alias: string;
  /** 描述 */
  Description: string;
  /** 唯一ID */
  Id: number;
  /** 参考 */
  Reference: string;
  /** 命令行 */
  CmdLine: string;
  /** 进程号 */
  Pid: number;
  /** 唯一UUID */
  Uuid: string;
  /** 建议方案 */
  SuggestScheme: string;
  /** 标签特性 */
  Tags: string[];
  /** 外网ip */
  MachineWanIp: string | null;
  /** 主机在线状态[OFFLINE:离线|ONLINE:在线|UNKNOWN:未知] */
  MachineStatus: string | null;
}

/** 恶意请求策略 */
declare interface RiskDnsPolicy {
  /** 策略名称 */
  PolicyName: string;
  /** 策略类型[0:系统,1:用户] */
  PolicyType: number;
  /** 策略动作[0:告警,1:放行,2:拦截+告警] */
  PolicyAction: number;
  /** 主机范围[1: 所有专业版+旗舰版|2:所有旗舰版|0: 部分主机] */
  HostScope: number;
  /** 主机ID */
  HostIds: string[];
  /** 域名,作为入参时需要进行base64 encode */
  Domains: string[];
  /** 是否生效[0:生效,1:不生效] */
  IsEnabled: number;
  /** 策略ID */
  PolicyId?: number;
  /** 策略描述 */
  PolicyDesc?: string;
  /** 是否处理之前的事件[0:不处理|1:处理] */
  IsDealOldEvent?: number;
  /** 更新时间 */
  UpdateTime?: string;
  /** 事件ID */
  EventId?: number;
}

/** 异常进程事件 */
declare interface RiskProcessEvent {
  /** 事件ID */
  EventId?: number;
  /** 主机名称 */
  HostName?: string;
  /** 主机IP */
  HostIp?: string;
  /** 外网IP */
  WanIp?: string;
  /** 进程ID */
  ProcessId?: number;
  /** 文件路径 */
  FilePath?: string;
  /** 执行命令 */
  CmdLine?: string;
  /** 进程启动时间 */
  StartTime?: string;
  /** 最近检测时间 */
  DetectTime?: string;
  /** 病毒名称 */
  VirusName?: string;
  /** 木马检测平台 [1:云查杀引擎|2:TAV|3:binaryAi|4:异常行为|5:威胁情报] */
  CheckPlatform?: string[];
  /** 病毒标签 */
  VirusTags?: string[];
  /** 威胁描述 */
  ThreatDesc?: string;
  /** 建议方案 */
  SuggestSolution?: string;
  /** 参考链接 */
  ReferenceLink?: string;
  /** 处理状态[0待处理;1已处理;2查杀中;3已查杀;4已退出;5忽略] */
  HandleStatus?: number;
  /** 主机在线状态 */
  OnlineStatus?: number;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
  /** 主机uuid */
  Uuid?: string;
}

/** 索引规则 */
declare interface RuleInfo {
  /** 全文索引的相关配置 */
  FullText: FullTextInfo;
  /** 键值索引的相关配置 */
  KeyValue: KeyValueInfo;
  /** 元字段索引配置 */
  Tag: KeyValueInfo;
}

/** 扫描任务详情列表信息 */
declare interface ScanTaskDetails {
  /** 服务器IP */
  HostIp?: string;
  /** 服务器名称 */
  HostName?: string;
  /** 操作系统 */
  OsName?: string;
  /** 风险数量 */
  RiskNum?: number;
  /** 扫描开始时间 */
  ScanBeginTime?: string;
  /** 扫描结束时间 */
  ScanEndTime?: string;
  /** 唯一Uuid */
  Uuid?: string;
  /** 唯一Quuid */
  Quuid?: string;
  /** 状态码 */
  Status?: string;
  /** 描述 */
  Description?: string;
  /** id唯一 */
  Id?: number;
  /** 失败详情 */
  FailType?: number;
  /** 外网ip */
  MachineWanIp?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 大屏全网攻击热点 */
declare interface ScreenAttackHotspot {
  /** 事件名 */
  EventName: string;
  /** 攻击者IP */
  SrcIp: string;
  /** 受害者IP */
  DstIp: string;
  /** 地域 */
  Region: string;
  /** 时间 */
  CreatedTime: string;
}

/** 大屏基线信息 */
declare interface ScreenBaselineInfo {
  /** 基线名 */
  Name: string | null;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 */
  Level: number | null;
  /** 基线id */
  CategoryId: number | null;
  /** 最后检测时间 */
  LastScanTime: string | null;
  /** 基线风险项 */
  BaselineFailCount: number | null;
  /** 主机uuid */
  Uuid: string | null;
}

/** 大屏可视化安全播报内容 */
declare interface ScreenBroadcasts {
  /** 播报文章标题 */
  Title: string;
  /** 播报文章危险程度 0：无， 1：严重， 2: 高危， 3:中危， 4: 低危 */
  Level: number;
  /** 发布时间 */
  Time: string;
  /** 文章ID */
  Id: number;
}

/** 大屏网络攻击日志 */
declare interface ScreenDefendAttackLog {
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
  /** 威胁类型 */
  VulType: string;
  /** 攻击时间 */
  CreatedTime: string;
  /** 目标端口 */
  DstPort: number;
  /** 主机 quuid */
  Quuid: string;
  /** 目标IP */
  DstIp: string;
}

/** 大屏可视化紧急通知 */
declare interface ScreenEmergentMsg {
  /** 通知标签/标题 */
  Title: string;
  /** 通知内容 */
  Text: string;
  /** 跳转类型：0=漏洞管理 */
  Type: number;
}

/** 统计入侵检测 */
declare interface ScreenEventsCnt {
  /** 展示内容：待处理风险总数，影响资产总数 */
  Title: string;
  /** 事件总数 */
  Total: number;
  /** name 具体展示内容类型： 攻击事件, 潜在风险, 失陷资产, 潜在风险资产Value: 事件统计数 */
  Category: ScreenNameValue[];
}

/** 大屏入侵事件详情 */
declare interface ScreenInvasion {
  /** 入侵时间 */
  CreatedTime: string;
  /** 事件类型：0：文件查杀，1：异常登录， 2：密码破解，3：恶意请求，4：高危命令，5：本地提权， 6：反弹shell */
  EventType: number;
  /** 事件数据的json, 每种事件不同，【文件查杀】病毒名 VirusName、文件名 FileName、文件路径 FilePath、文件大小 FileSize、文件MD5 MD5、首次发现时间 CreateTime、最近检测时间LatestScanTime、危害描述 HarmDescribe、修复建议SuggestScheme【异常登录】来源IP SrcIp、来源地 Location、登录用户名 UserName、登录时间 LoginTime【密码破解】来源IP SrcIp、来源地 City,Country、协议 Protocol、登录用户名UserName 、端口 Port、尝试次数 Count、首次攻击时间 CreateTime、最近攻击时间 ModifyTime【恶意请求】恶意请求域名 Url、进程ProcessName 、MD5 ProcessMd5、PID Pid、请求次数 AccessCount、最近请求时间 MergeTime、危害描述 HarmDescribe、修复建议SuggestScheme【高危命令】命中规则名 RuleName、规则类别 RuleCategory、命令内容 BashCmd、数据来源 DetectBy、登录用户 User、PID Pid、发生时间 CreateTime 、危害描述 HarmDescribe、修复建议SuggestScheme【本地提权】提权用户 UserName、父进程 ParentProcName 、父进程所属用户 ParentProcGroup、发现时间 CreateTime、危害描述 HarmDescribe、修复建议SuggestScheme【反弹shell】连接进程 ProcessName、执行命令CmdLine、父进程ParentProcName、目标主机DstIp、目标端口DstPort、发现时间 CreateTime、危害描述 HarmDescribe、修复建议SuggestScheme */
  Content: string;
  /** 事件统一等级 0：提示，1：低危, 2：中危, 3：高危, 4：严重 */
  Level: number;
  /** 等级中文展示 */
  LevelZh: string;
  /** 事件id */
  Id: number;
  /** 主机uuid */
  Uuid: string;
}

/** 大屏主机列表数据 */
declare interface ScreenMachine {
  /** 主机名称。 */
  MachineName?: string;
  /** 主机系统。 */
  MachineOs?: string;
  /** 云镜客户端唯一Uuid，若客户端长时间不在线将返回空字符。 */
  Uuid?: string;
  /** 大屏主机状态 0：未安装agent，1：离线状态，2:离线-风险，3：离线-严重4：安装设备-正常，5：安装设备-正常 且是专业版或旗舰版，6：安装设备-风险（网络攻击事件>0） ， 7：安装设备-风险（网络攻击事件>0 且是专业版或旗舰版，8：安装设备-严重（入侵检测事件>0），9：安装设备-严重（入侵检测事件>0）且是专业版或旗舰版 */
  MachineStatus?: number;
  /** CVM或BM机器唯一Uuid。 */
  Quuid?: string;
  /** 漏洞数。 */
  VulNum?: number;
  /** 主机IP。 */
  MachineIp?: string;
  /** 主机外网IP。 */
  MachineWanIp?: string;
  /** 基线风险数。 */
  BaselineNum?: number;
  /** 网络风险数。 */
  CyberAttackNum?: number;
  /** 风险状态。SAFE：安全RISK：风险UNKNOWN：未知 */
  SecurityStatus?: string;
  /** 入侵事件数 */
  InvasionNum?: number;
  /** 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区 */
  MachineType?: string;
  /** cpu 负载状态 */
  CpuLoad?: string;
  /** cpu 核数 */
  CpuSize?: number;
  /** 硬盘使用率 % */
  DiskLoad?: string;
  /** 硬盘容量GB */
  DiskSize?: number;
  /** 内存负载率% */
  MemLoad?: string;
  /** 内存容量 GB */
  MemSize?: number;
  /** 内核版本 */
  CoreVersion?: string;
  /** 附加信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 【云安全预警】大屏可视化数据Name Value 数据 */
declare interface ScreenNameValue {
  /** 统计类型 不同接口对应不同的内容 */
  Name: string;
  /** 统计数量 */
  Value: number;
}

/** 大屏可视化攻防状态 */
declare interface ScreenProtection {
  /** 类型值：文件查杀，暴力破解，漏洞扫描，基线检测 */
  Name: string;
  /** 文件查杀: 0:从未检测过，或0资产付费情况, 1:已检测，存在恶意文件, 2:已检测，未开启隔离防护, 3:已检测且已开启防护且无风险；暴力破解: 0:未开启防护（0付费资产情况）1:已开启自动阻断；漏洞扫描: 0:从未检测过，或0资产付费情况, 1:存在漏洞风险, 2:无风险；基线检测: 0:从未检测过，或0资产付费情况, 1:存在基线风险,2:无风险； */
  Status: number;
}

/** 大屏可视化主机安全返回态势数据 */
declare interface ScreenProtectionCnt {
  /** cloud：云查杀引擎，detect：检测引擎，defend：攻击防御，threat：威胁情报，analysis：异常分析，ai：AI引擎 */
  Type: string;
  /** cloud：云查杀引擎，detect：检测引擎，defend：攻击防御，threat：威胁情报，analysis：异常分析，ai：AI引擎 */
  Name: string;
  /** 总数 */
  Count: number;
}

/** 地域信息 */
declare interface ScreenRegionInfo {
  /** 地域标志，如 ap-guangzhou，ap-shanghai，ap-beijing */
  Region: string;
  /** 地域中文名，如华南地区（广州），华东地区（上海金融），华北地区（北京） */
  RegionName: string;
  /** 地域ID */
  RegionId: number;
  /** 地域代码，如 gz，sh，bj */
  RegionCode: string;
  /** 地域英文名 */
  RegionNameEn: string;
}

/** 大屏主机3D图 列表 */
declare interface ScreenRegionMachines {
  /** 所有区域 */
  Region: string;
  /** 区域中文描述 */
  RegionName: string;
  /** 主机列表 */
  Machines: ScreenMachine[];
  /** 此区域的主机总数 */
  TotalCount: number;
  /** 风险主机数量 */
  RiskCnt: number;
  /** 潜在风险主机数 */
  AttackCnt: number;
  /** 无风险主机数 */
  SafetyCnt: number;
  /** 离线/未安装主机数 */
  UnAgentOfflineCnt: number;
  /** 省略展示多少主机，等于0时没有省略展示 */
  IgnoreCnt: number;
}

/** 大屏攻防趋势图 */
declare interface ScreenTrendsChart {
  /** X轴 时间 */
  X: string;
  /** Y轴 数值 */
  Y: number;
  /** 统计分类类型 值：防御次数，攻击次数 */
  Type: string;
}

/** 大屏漏洞列表 */
declare interface ScreenVulInfo {
  /** 漏洞事件id */
  Id: number;
  /** 漏洞名 */
  Name: string;
  /** 漏洞id */
  VulId: number;
  /** 最后检测时间 */
  LastTime: string;
  /** 漏洞等级 1:低 2:中 3:高 4:提示 */
  Level: number;
  /** 漏洞类型 1: web-cms漏洞, 2:应用漏洞, 4: Linux软件漏洞, 5: Windows系统漏洞 */
  Category: number | null;
  /** 主机UUID */
  Uuid: string | null;
}

/** 快速搜索模板 */
declare interface SearchTemplate {
  /** 检索名称 */
  Name: string;
  /** 检索索引类型 */
  LogType: string;
  /** 检索语句 */
  Condition: string;
  /** 时间范围 */
  TimeRange: string;
  /** 转换的检索语句内容 */
  Query: string;
  /** 检索方式。输入框检索：standard,过滤，检索：simple */
  Flag: string;
  /** 展示数据 */
  DisplayData: string;
  /** 规则ID */
  Id?: number;
}

/** 安全管家列表信息 */
declare interface SecurityButlerInfo {
  /** 数据id */
  Id: number;
  /** 订单id */
  OrderId: number;
  /** cvm id */
  Quuid: string;
  /** 服务状态 0-服务中,1-已到期 2已销毁 */
  Status: number;
  /** 服务开始时间 */
  StartTime: string;
  /** 服务结束时间 */
  EndTime: string;
  /** 主机名称 */
  HostName: string;
  /** 主机Ip */
  HostIp: string;
  /** 主机 uuid */
  Uuid: string;
  /** 主机风险数 */
  RiskCount: number;
}

/** 安全事件消息数据。 */
declare interface SecurityDynamic {
  /** 主机安全客户端UUID。 */
  Uuid: string;
  /** 安全事件发生时间。 */
  EventTime: string;
  /** 安全事件类型。MALWARE：木马事件NON_LOCAL_LOGIN：异地登录BRUTEATTACK_SUCCESS：密码破解成功VUL：漏洞BASELINE：安全基线 */
  EventType: string;
  /** 安全事件消息。 */
  Message: string;
  /** 安全事件等级。RISK: 严重HIGH: 高危NORMAL: 中危LOW: 低危UNKNOWNED: 可疑 */
  SecurityLevel: string;
}

/** 安全事件统计列表 */
declare interface SecurityEventInfo {
  /** 安全事件数 */
  EventCnt: number;
  /** 受影响机器数 */
  UuidCnt: number;
}

/** 安全趋势统计数据。 */
declare interface SecurityTrend {
  /** 事件时间。 */
  Date: string;
  /** 事件数量。 */
  EventNum: number;
}

/** 标准模式阻断配置 */
declare interface StandardModeConfig {
  /** 阻断时长，单位：秒 */
  Ttl: number;
}

/** 基线安全用户策略信息 */
declare interface Strategy {
  /** 策略名 */
  StrategyName: string | null;
  /** 策略id */
  StrategyId: number | null;
  /** 基线检测项总数 */
  RuleCount: number | null;
  /** 主机数量 */
  HostCount: number | null;
  /** 扫描周期 */
  ScanCycle: number | null;
  /** 扫描时间 */
  ScanAt: string | null;
  /** 是否可用 */
  Enabled: number | null;
  /** 通过率 */
  PassRate: number | null;
  /** 基线id */
  CategoryIds: string | null;
  /** 是否默认策略 */
  IsDefault: number | null;
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

/** 平台标签 */
declare interface Tags {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 任务扫描状态列表 */
declare interface TaskStatus {
  /** 扫描中（包含初始化） */
  Scanning: string;
  /** 扫描终止（包含终止中） */
  Ok: string;
  /** 扫描失败 */
  Fail: string;
  /** 扫描失败（提示具体原因：扫描超时、客户端版本低、客户端离线） */
  Stop: string | null;
}

/** 网络攻击top统计数据 */
declare interface TopInfo {
  /** top统计数据，如ip、漏洞名等 */
  Value?: string;
  /** top统计计数 */
  Count?: number;
}

/** 编辑白名单实体 */
declare interface UpdateHostLoginWhiteObj {
  /** 地域信息数组 */
  Places: Place[];
  /** 来源ip */
  SrcIp: string;
  /** 用户名 */
  UserName: string;
  /** 备注信息 */
  Remark: string;
  /** 要更新的数据id */
  Id: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

/** 常用登录地 */
declare interface UsualPlace {
  /** ID。 */
  Id: number;
  /** 主机安全客户端唯一标识UUID。 */
  Uuid: string;
  /** 国家 ID。 */
  CountryId: number;
  /** 省份 ID。 */
  ProvinceId: number;
  /** 城市 ID。 */
  CityId: number;
}

/** 索引的value描述 */
declare interface ValueInfo {
  /** 字段的分词符 */
  Tokenizer: string;
  /** 字段类型 */
  Type: string;
  /** 字段是否开启分析功能 */
  SqlFlag: boolean;
  /** 是否包含中文 */
  ContainZH: boolean;
}

/** 授权版本白名单配置信息 */
declare interface VersionWhiteConfig {
  /** 到期天数 */
  Deadline?: number;
  /** 授权数量 */
  LicenseNum?: number;
  /** 是否可申请 */
  IsApplyFor?: boolean;
  /** 类型 */
  SourceType?: number;
}

/** 点详细信息 */
declare interface VertexDetail {
  /** 该节点类型，进程:1；网络:2；文件:3；ssh:4 */
  Type?: number | null;
  /** 各节点类型用到的时间，2022-11-29 00:00:00 格式 */
  Time?: string | null;
  /** 告警信息 */
  AlarmInfo?: AlarmInfo[] | null;
  /** 进程名，当该节点为进程时生效 */
  ProcName?: string | null;
  /** 命令行，当该节点为进程时生效 */
  CmdLine?: string | null;
  /** 进程id，当该节点为进程时生效 */
  Pid?: string | null;
  /** 文件md5，当该节点为文件时生效 */
  FileMd5?: string | null;
  /** 文件写入内容，当该节点为文件时生效 */
  FileContent?: string | null;
  /** 文件路径，当该节点为文件时生效 */
  FilePath?: string | null;
  /** 文件创建时间，当该节点为文件时生效 */
  FileCreateTime?: string | null;
  /** 请求目的地址，当该节点为网络时生效 */
  Address?: string | null;
  /** 目标端口，当该节点为网络时生效 */
  DstPort?: number | null;
  /** 登录源ip，当该节点为ssh时生效 */
  SrcIP?: string | null;
  /** 登录用户名用户组，当该节点为ssh时生效 */
  User?: string | null;
  /** 漏洞名称，当该节点为漏洞时生效 */
  VulName?: string | null;
  /** 漏洞利用时间，当该节点为漏洞时生效 */
  VulTime?: string | null;
  /** http请求内容，当该节点为漏洞时生效 */
  HttpContent?: string | null;
  /** 漏洞利用者来源ip，当该节点为漏洞时生效 */
  VulSrcIP?: string | null;
  /** 点id */
  VertexId?: string | null;
}

/** 攻击溯源节点信息 */
declare interface VertexInfo {
  /** 该结点类型，进程:1；网络:2；文件:3；ssh:4； */
  Type: number;
  /** 该节点包含的vid */
  Vid: string;
  /** 该节点的父节点vid */
  ParentVid: string;
  /** 是否叶子 */
  IsLeaf: boolean;
  /** 进程名，当Type=1时使用 */
  ProcNamePrefix: string | null;
  /** 进程名md5，当Type=1时使用 */
  ProcNameMd5: string | null;
  /** 命令行，当Type=1时使用 */
  CmdLinePrefix: string | null;
  /** 命令行md5，当Type=1时使用 */
  CmdLineMd5: string | null;
  /** 文件路径，当Type=3时使用 */
  FilePathPrefix: string | null;
  /** 请求目的地址，当Type=2时使用 */
  AddressPrefix: string | null;
  /** 是否漏洞节点 */
  IsWeDetect: boolean;
  /** 是否告警节点 */
  IsAlarm: boolean;
  /** 文件路径md5，当Type=3时使用 */
  FilePathMd5: string | null;
  /** 请求目的地址md5，当Type=2时使用 */
  AddressMd5: string | null;
}

/** 漏洞详细信息 */
declare interface VulDefenceEvent {
  /** 漏洞ID */
  VulId?: number;
  /** 漏洞名称 */
  VulName?: string;
  /** cve编号 */
  CveId?: string;
  /** 漏洞事件id */
  Id?: number;
  /** 主机quuid */
  Quuid?: string;
  /** 主机名 */
  Alias?: string;
  /** 内网ip */
  PrivateIp?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 0: 尝试攻击(WeDetect) 1:尝试攻击成功(WeDetect) 2:rasp防御事件 */
  EventType?: number;
  /** 攻击源ip */
  SourceIp?: string;
  /** 攻击源ip地址所在城市 */
  City?: string;
  /** 攻击源端口 */
  SourcePort?: number[];
  /** 创建事件时间 */
  CreateTime?: string;
  /** 更新事件时间 */
  MergeTime?: string;
  /** 事件发生次数 */
  Count?: number;
  /** 状态 0: 待处理 1:已防御 2:已处理 3: 已忽略 4: 已删除 */
  Status?: number;
  /** 0 专业版,1 旗舰版,2 LH普惠版（仅限LH使用）,3 CVM普惠版（仅限CVM使用） */
  UpgradeType?: number;
  /** 0 不支持修复，1 支持修复 */
  FixType?: number;
  /** 主机uuid */
  Uuid?: string;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 漏洞详细信息 */
declare interface VulDefenceEventDetail {
  /** 漏洞名称 */
  VulName?: string;
  /** cve编号 */
  CveId?: string;
  /** 漏洞事件id */
  Id?: number;
  /** 主机quuid */
  Quuid?: string;
  /** 主机名 */
  Alias?: string;
  /** 内网ip */
  PrivateIp?: string;
  /** 公网ip */
  PublicIp?: string;
  /** 0: 尝试攻击(WeDetect) 1:尝试攻击成功(WeDetect) 2:rasp防御事件 */
  EventType?: number;
  /** 攻击源ip */
  SourceIp?: string;
  /** 攻击源ip地址所在城市 */
  City?: string;
  /** 攻击源端口 */
  SourcePort?: number[] | null;
  /** 创建事件时间 */
  CreateTime?: string;
  /** 更新事件时间 */
  MergeTime?: string;
  /** 事件发生次数 */
  Count?: number;
  /** 状态 0: 待处理 1:已防御 2:已处理 3: 已忽略 4: 已删除 */
  Status?: number;
  /** ONLINE OFFLINE */
  MachineStatus?: string;
  /** 漏洞描述信息 */
  Description?: string;
  /** 修复建议 */
  Fix?: string;
  /** 攻击payload */
  NetworkPayload?: string;
  /** 关联进程pid */
  Pid?: number;
  /** 关联进程主类名 */
  MainClass?: string;
  /** 堆栈信息(rasp特有) */
  StackTrace?: string;
  /** 漏洞ID相关的事件详情(json array格式 rasp特有) */
  EventDetail?: string;
  /** 主机失陷事件进程树(json格式 WeDetect特有) */
  ExceptionPstree?: string;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 漏洞防御趋势页，包括插件状态及攻防趋势，趋势由三个长度相同，元素一一对应的数组保存，如果某天没有数据将会缺失 */
declare interface VulDefenceOverview {
  /** 防御开关：0 关闭 1 开启 */
  Enable: number;
  /** 已开启防御主机数 */
  DefendHostCount: number;
  /** 插件异常数 */
  ExceptionCount: number;
  /** 每日攻击趋势 */
  AttackCounts: number[] | null;
  /** 每日防御趋势 */
  DefendCounts: number[] | null;
  /** 日期 */
  Date: string[] | null;
}

/** 单个进程漏洞防御插件状态 */
declare interface VulDefencePluginDetail {
  /** 注入进程Pid */
  Pid: number;
  /** 注入进程主类名 */
  MainClass: string;
  /** 插件状态：0: 注入中, 1: 注入成功, 2: 插件超时, 3: 插件退出, 4: 注入失败 5: 软删除 */
  Status: number;
  /** 错误日志 */
  ErrorLog: string;
  /** 注入日志 */
  InjectLog: string;
}

/** 主机漏洞防御插件信息 */
declare interface VulDefencePluginStatus {
  /** 主机quuid */
  Quuid: string;
  /** 主机别名 */
  Alias: string;
  /** 内网ip */
  PrivateIp: string;
  /** 公网ip */
  PublicIp: string;
  /** 插件状态：0 正常，1 异常 */
  Exception: number;
  /** 创建时间 */
  CreateTime: string;
  /** 最后跟新时间 */
  ModifyTime: string;
}

/** 漏洞防御范围详情 */
declare interface VulDefenceRangeDetail {
  /** 漏洞名称 */
  VulName: string;
  /** 标签 */
  Label: string;
  /** 漏洞级别： 1低危 2中危 3高危 4严重 */
  Level: number;
  /** cvss 分数 */
  CvssScore: number;
  /** cve id */
  CveId: string;
  /** 发布时间 */
  PublishTime: string;
  /** 漏洞id */
  VulId: number;
}

/** 漏洞详细信息 */
declare interface VulDetailInfo {
  /** 漏洞ID */
  VulId: number;
  /** 漏洞级别 */
  Level: number;
  /** 漏洞名称 */
  Name: string;
  /** cve编号 */
  CveId: string;
  /** 1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 0= 应急漏洞 */
  VulCategory: number;
  /** 漏洞描述 */
  Descript: string;
  /** 修复建议 */
  Fix: string;
  /** 参考链接 */
  Reference: string;
  /** CVSS评分 */
  CvssScore: number;
  /** CVSS详情 */
  Cvss: string;
  /** 发布时间 */
  PublishTime: string;
}

/** 漏洞影响主机列表 */
declare interface VulEffectHostList {
  /** 事件id */
  EventId?: number | null;
  /** 状态：0: 待处理 1:忽略 3:已修复 5:检测中 6:修复中 7: 回滚中 8:修复失败 */
  Status?: number | null;
  /** 最后检测时间 */
  LastTime?: string | null;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 */
  Level?: number | null;
  /** 主机Quuid */
  Quuid?: string | null;
  /** 主机Uuid */
  Uuid?: string | null;
  /** 主机HostIp */
  HostIp?: string | null;
  /** 主机别名 */
  AliasName?: string | null;
  /** 主机标签 */
  Tags?: string[] | null;
  /** 说明 */
  Description?: string | null;
  /** 版本信息：0-基础版 1-专业版 2-旗舰版 3-普惠版 */
  HostVersion?: number | null;
  /** 是否能自动修复 0 :漏洞不可自动修复， 1：可自动修复， 2：客户端已离线， 3：主机不是旗舰版只能手动修复， 4：机型不允许 ，5：修复中 ，6：已修复， 7：检测中 9:修复失败，10:已忽略 11:漏洞只支持linux不支持Windows 12：漏洞只支持Windows不支持linux，13:修复失败但此时主机已离线，14:修复失败但此时主机不是旗舰版， 15:已手动修复 */
  IsSupportAutoFix?: number | null;
  /** 失败原因 */
  FixStatusMsg?: string | null;
  /** 首次发现时间 */
  FirstDiscoveryTime?: string | null;
  /** 实例状态："PENDING"-创建中 "LAUNCH_FAILED"-创建失败 "RUNNING"-运行中 "STOPPED"-关机 "STARTING"-表示开机中 "STOPPING"-表示关机中 "REBOOTING"-重启中 "SHUTDOWN"-表示停止待销毁 "TERMINATING"-表示销毁中 " */
  InstanceState?: string | null;
  /** 外网ip */
  PublicIpAddresses?: string | null;
  /** 云标签信息 */
  CloudTags?: Tags[] | null;
  /** 主机额外信息 */
  MachineExtraInfo?: MachineExtraInfo | null;
}

/** 漏洞影响组件详情 */
declare interface VulEffectModuleInfo {
  /** 组件名 */
  Name: string;
  /** 影响的主机uuid */
  Uuids: string[];
  /** 组件影响版本 */
  Rule: string;
  /** 组件路径 */
  Path: string;
  /** 组件版本 */
  Version: string;
  /** 修复命令 */
  FixCmd: string;
  /** 影响的主机quuid */
  Quuids: string[];
}

/** 紧急通知实体 */
declare interface VulEmergentMsgInfo {
  /** 漏洞id */
  VulId: number;
  /** 漏洞纰漏时间 */
  PublishTime: string;
  /** 漏洞名 */
  Name: string;
}

/** 查看漏洞修复详情 每台主机每个漏洞修复状态 */
declare interface VulFixStatusHostInfo {
  /** 主机名称 */
  HostName: string;
  /** 主机ip */
  HostIp: string;
  /** 主机的quuid */
  Quuid: string;
  /** 状态：0-初始状态；1-已下发任务（修复中）2-完成（成功）；3-修复失败（失败）4-快照创建失败 导致修复失败（未修复）； */
  Status: number;
  /** 修复时间 */
  ModifyTime: string;
  /** 修复失败原因 */
  FailReason: string | null;
}

/** 查看漏洞修复详情 */
declare interface VulFixStatusInfo {
  /** 漏洞id */
  VulId: number | null;
  /** 漏洞名称 */
  VulName: string | null;
  /** 漏洞修复进度 1-100； */
  Progress: number;
  /** 漏洞对应主机修复状态 */
  HostList: VulFixStatusHostInfo[] | null;
  /** 漏洞修复失败主机数量 */
  FailCnt: number | null;
  /** 修复成功的数量 */
  FixSuccessCnt: number | null;
}

/** 机器快照信息 */
declare interface VulFixStatusSnapshotInfo {
  /** cvm id */
  Quuid: string;
  /** 主机名称 */
  HostName: string | null;
  /** 主机ip */
  HostIp: string | null;
  /** 快照名称 */
  SnapshotName: string | null;
  /** 快照创建时间 */
  ModifyTime: string | null;
  /** 快照id */
  SnapshotId: string | null;
  /** 记录唯一id */
  Id: number;
  /** 快照状态 0-初始状态1-快照创建成功；2-快照创建失败； */
  Status: number;
  /** 快照创建失败原因 */
  FailReason: string | null;
}

/** 服务器风险top5实体 */
declare interface VulHostTopInfo {
  /** 主机名 */
  HostName: string | null;
  /** 漏洞等级与数量统计列表 */
  VulLevelList: VulLevelCountInfo[] | null;
  /** 主机Quuid */
  Quuid: string | null;
  /** top评分 */
  Score: number | null;
}

/** 根据cve_id查询漏洞详情 */
declare interface VulInfoByCveId {
  /** 漏洞id */
  VulId: number;
  /** 修复支持情况：0-windows/linux均不支持修复 ;1-windows/linux 均支持修复 ;2-仅linux支持修复;3-仅windows支持修复 */
  FixSwitch: number;
}

/** 批量修复漏洞二次弹窗 */
declare interface VulInfoHostInfo {
  /** 主机名 */
  HostName: string | null;
  /** 主机ip */
  HostIp: string | null;
  /** 主机标签 */
  Tags: string[] | null;
  /** 主机quuid */
  Quuid: string | null;
  /** 0 :漏洞不可自动修复， 1：可自动修复， 2：客户端已离线， 3：主机不是旗舰版只能手动修复， 4：机型不允许 ，5：修复中 ，6：已修复， 7：检测中, 9:修复失败, 10:已忽略 ,11:漏洞只支持linux不支持Windows, 12：漏洞只支持Windows不支持linux */
  IsSupportAutoFix: number | null;
  /** 主机uuid */
  Uuid: string | null;
  /** 主机InstanceId */
  InstanceId: string | null;
}

/** 主机安全-漏洞管理-漏洞列表 */
declare interface VulInfoList {
  /** 漏洞包含的事件id串，多个用“,”分割 */
  Ids: string;
  /** 漏洞名 */
  Name: string;
  /** 0: 待处理 1:忽略 3:已修复 5:检测中 6:修复中 8:修复失败 */
  Status: number;
  /** 漏洞id */
  VulId: number;
  /** 漏洞披露事件 */
  PublishTime: string;
  /** 最后检测时间 */
  LastTime: string;
  /** 影响主机数 */
  HostCount: number;
  /** 漏洞等级 1:低 2:中 3:高 4:严重 */
  Level: number;
  /** 废弃字段 */
  From: number | null;
  /** 描述 */
  Descript: string | null;
  /** 废弃字段 */
  PublishTimeWisteria: string | null;
  /** 废弃字段 */
  NameWisteria: string | null;
  /** 废弃字段 */
  DescriptWisteria: string | null;
  /** 聚合后事件状态串 */
  StatusStr: string | null;
  /** cve编号 */
  CveId: string | null;
  /** CVSS评分 */
  CvssScore: number | null;
  /** 漏洞标签 多个逗号分割 */
  Labels: string | null;
  /** 是否能自动修复且包含能自动修复的主机， 0=否 1=是 */
  FixSwitch: number | null;
  /** 最后扫描任务的id */
  TaskId: number | null;
  /** 是否支持防御， 0:不支持 1:支持 */
  IsSupportDefense: number | null;
  /** 已防御的攻击次数 */
  DefenseAttackCount: number | null;
  /** 首次出现时间 */
  FirstAppearTime: string | null;
  /** 漏洞类别 1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 */
  VulCategory: number | null;
  /** 攻击热度级别 */
  AttackLevel?: number | null;
  /** 漏洞修复后是否需要重启 */
  FixNoNeedRestart?: boolean | null;
  /** 检测方式0 - 版本比对, 1 - POC验证 */
  Method?: number | null;
}

/** 漏洞等级数量实体 */
declare interface VulLevelCountInfo {
  /** 漏洞等级 */
  VulLevel: number;
  /** 漏洞数量 */
  VulCount: number;
}

/** 漏洞数量按等级分布统计结果实体 */
declare interface VulLevelInfo {
  /** // 危害等级：1-低危；2-中危；3-高危；4-严重 */
  VulLevel: number;
  /** 数量 */
  Count: number;
}

/** 漏洞概览 */
declare interface VulOverview {
  /** 总数 */
  TotalCount: number;
  /** 今日新增数量 */
  TodayCount: number;
}

/** 漏洞仓库列表信息 */
declare interface VulStoreListInfo {
  /** 漏洞ID */
  VulId: number;
  /** 漏洞级别 */
  Level: number;
  /** 漏洞名称 */
  Name: string;
  /** cve编号 */
  CveId: string;
  /** 1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 0= 应急漏洞 */
  VulCategory: number;
  /** 发布时间 */
  PublishDate: string;
  /** 漏洞检测方法 0 - 版本比对, 1 - POC验证 */
  Method?: number;
  /** 漏洞攻击热度 */
  AttackLevel?: number;
  /** 漏洞是否支持自动修复0-windows/linux均关闭; 1-windows/linux均打开; 2-仅linux; 3-仅windows */
  FixSwitch?: number;
  /** 漏洞是否支持防御0:不支持 1:支持 */
  SupportDefense?: number;
}

/** 漏洞top统计实体 */
declare interface VulTopInfo {
  /** 漏洞 名 */
  VulName: string | null;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 */
  VulLevel: number | null;
  /** 漏洞数量 */
  VulCount: number | null;
  /** 漏洞id */
  VulId: number | null;
}

/** 告警设置列表 */
declare interface WarningInfoObj {
  /** 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高危命令，7：反弹sell，8：本地提权，9：应用漏洞，10：web-cms漏洞，11：应急漏洞，12：安全基线 ,13: 防篡改，14：恶意请求，15: 网络攻击，16：Windows系统漏洞，17：Linux软件漏洞，18：核心文件监控告警，19：客户端卸载告警。20：客户端离线告警 */
  Type: number;
  /** 1: 关闭告警 0: 开启告警 */
  DisablePhoneWarning: number;
  /** 开始时间，格式: HH:mm */
  BeginTime: string;
  /** 结束时间，格式: HH:mm */
  EndTime: string;
  /** 时区信息 */
  TimeZone: string;
  /** 漏洞等级控制位（对应DB的十进制存储） */
  ControlBit: number;
  /** 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高 */
  ControlBits: string;
  /** 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机 */
  HostRange?: number | null;
  /** 配置的告警范围主机个数，前端用此判断展示提示信息 */
  Count: number | null;
}

/** 告警更新或插入的参数 */
declare interface WarningObject {
  /** 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高位命令，7：反弹sell，8：本地提权，9：系统组件漏洞，10：web应用漏洞，11：应急漏洞，12：安全基线，14：恶意请求，15: 网络攻击，16：Windows系统漏洞，17：Linux软件漏洞 */
  Type?: number;
  /** 1: 关闭告警 0: 开启告警 */
  DisablePhoneWarning?: number;
  /** 开始时间，格式: HH:mm */
  BeginTime?: string;
  /** 结束时间，格式: HH:mm */
  EndTime?: string;
  /** 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高；01→(登录审计)疑似不告警，高危告警 */
  ControlBits?: string;
  /** 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机 */
  HostRange?: number | null;
}

/** 自定义透传字段结构 */
declare interface WebHookCustomField {
  /** key */
  Key: string | null;
  /** value */
  Value: string | null;
}

/** 企微机器人事件类型 */
declare interface WebHookEventKv {
  /** 事件类型 */
  Type: number;
  /** 事件内容 */
  ControlBit: string;
}

/** 企微机器人主机范围 */
declare interface WebHookHostLabel {
  /** 主机范围[1:所属项目|2:腾讯云标签|3:主机安全标签|4:自选]空数组为全部 */
  Type: number;
  /** 主机项目或标签内容 */
  Values: string[];
}

/** 策略 */
declare interface WebHookPolicy {
  /** id */
  Id?: number | null;
  /** 策略名称 */
  Name?: string | null;
  /** 事件类型 */
  Events?: WebHookEventKv[] | null;
  /** 主机范围 */
  HostLabels?: WebHookHostLabel[] | null;
  /** 接收人 */
  Receivers?: WebHookReceiver[] | null;
  /** 格式 0text 1json */
  Format?: number | null;
  /** 自定义透传字段 */
  CustomFields?: WebHookCustomField[] | null;
  /** 是否启用[1:禁用|0:启用] */
  IsDisabled?: number | null;
  /** 主机列表 */
  Quuids?: string[] | null;
  /** 主机数目 */
  HostCount?: number | null;
}

/** 告警接收人 */
declare interface WebHookReceiver {
  /** id */
  Id?: number | null;
  /** 接收人名称 */
  Name?: string | null;
  /** webhook地址 */
  Addr?: string | null;
}

/** 告警接收人的关联策略使用信息 */
declare interface WebHookReceiverUsage {
  /** 接收人id */
  ReceiverId?: number | null;
  /** 接收人名称 */
  ReceiverName?: string | null;
  /** 策略名称 */
  PolicyName?: string | null;
}

/** 企微机器人规则详情 */
declare interface WebHookRuleDetail {
  /** 规则名称 */
  RuleName: string;
  /** 机器人地址 */
  HookAddr: string;
  /** 事件类型 */
  RuleItems: WebHookEventKv[];
  /** 规则Id */
  RuleId?: number;
  /** 备注信息 */
  RuleRemark?: string;
  /** 主机范围 */
  HostLabels?: WebHookHostLabel[];
  /** 主机Id列表 */
  HostIds?: string[];
  /** 是否启用[1:禁用|0:启用] */
  IsDisabled?: number;
}

/** 企微机器人规则概要 */
declare interface WebHookRuleSummary {
  /** 规则Id */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 机器人地址 */
  HookAddr?: string;
  /** 备注信息 */
  RuleRemark?: string;
  /** 事件类型 */
  RuleItems?: WebHookEventKv[];
  /** 主机范围 */
  HostLabels?: WebHookHostLabel[];
  /** 是否启用[1:禁用|0:启用] */
  IsDisabled?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 主机数目 */
  HostCount?: number;
}

/** 可用区信息 */
declare interface ZoneInfo {
  /** 可用区名称 */
  ZoneName: string;
}

declare interface AddLoginWhiteListsRequest {
  /** 异地登录白名单实体 */
  HostLoginWhiteObj: HostLoginWhiteObj;
  /** 事件同步处理方式： "" -- 不操作 "All" -- 将符合此配置的所有事件记录加白 "Id" -- 将EventId对应的事件记录加白 */
  ProcessType?: string;
  /** 异地登录事件ID，当ProcessType为Id时此项必填 */
  EventId?: number;
}

declare interface AddLoginWhiteListsResponse {
  /** 重复添加的提示列表 */
  DuplicateHosts: DuplicateHosts[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelIgnoreVulRequest {
  /** 漏洞事件id串，多个用英文逗号分隔 */
  EventIds: string;
}

declare interface CancelIgnoreVulResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeRuleEventsIgnoreStatusRequest {
  /** 忽略状态 0:取消忽略 ； 1:忽略 */
  IgnoreStatus: number;
  /** 检测项id数组 */
  RuleIdList?: number[];
  /** 事件id数组 */
  EventIdList?: number[];
}

declare interface ChangeRuleEventsIgnoreStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeStrategyEnableStatusRequest {
  /** 基线策略id */
  StrategyId: number;
  /** 开关状态 */
  Status: number;
}

declare interface ChangeStrategyEnableStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckBashPolicyParamsRequest {
  /** 校验内容 Name或Rule ，两个都要校验时逗号分割 */
  CheckField: string;
  /** 在事件列表中新增白名时需要提交事件ID */
  EventId?: number;
  /** 填入的规则名称 */
  Name?: string;
  /** 用户填入的正则表达式："正则表达式" 需与 "提交EventId对应的命令内容" 相匹配 */
  Rule?: string;
  /** 编辑时传的规则id */
  Id?: number;
}

declare interface CheckBashPolicyParamsResponse {
  /** 0=校验通过 1=规则名称校验不通过 2=正则表达式校验不通过 */
  ErrCode: number;
  /** 校验信息 */
  ErrMsg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckBashRuleParamsRequest {
  /** 校验内容 Name或Rule ，两个都要校验时逗号分割 */
  CheckField: string;
  /** 在事件列表中新增白名时需要提交事件ID */
  EventId?: number;
  /** 填入的规则名称 */
  Name?: string;
  /** 用户填入的正则表达式："正则表达式" 需与 "提交EventId对应的命令内容" 相匹配 */
  Rule?: string;
  /** 编辑时传的规则id */
  Id?: number;
}

declare interface CheckBashRuleParamsResponse {
  /** 0=校验通过 1=规则名称校验不通过 2=正则表达式校验不通过 */
  ErrCode: number;
  /** 校验信息 */
  ErrMsg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckFileTamperRuleRequest {
  /** 填入的规则名称 */
  Name?: string;
  /** 编辑时传的规则id */
  Id?: number;
}

declare interface CheckFileTamperRuleResponse {
  /** 0=校验通过 1=规则名称校验不通过 */
  ErrCode: number;
  /** 校验信息 */
  ErrMsg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckFirstScanBaselineRequest {
}

declare interface CheckFirstScanBaselineResponse {
  /** 是否是第一次检测 0：不是；1：是 */
  FirstScan: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckLogKafkaConnectionStateRequest {
  /** 接入方式,1公网域名接入，2支撑环境接入 */
  AccessType: number;
  /** 接入地址，域名或ip，带端口 */
  AccessAddr: string;
  /** 用户名 */
  Username: string;
  /** 0不用密码，1有密码 */
  HasPwd: number;
  /** 密码，使用aes加密 */
  Pwd: string;
  /** kafka实例id */
  KafkaId: string;
  /** kafka版本 */
  InsVersion: string;
}

declare interface CheckLogKafkaConnectionStateResponse {
  /** true连通，false不通 */
  IsConnect: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClearLocalStorageRequest {
}

declare interface ClearLocalStorageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBanWhiteListRequest {
  /** 阻断规则 */
  Rules: BanWhiteList;
  /** 事件ID，事件列表加白名单时传递，白名单添加成功后，会将事件变成已加白状态 */
  EventId?: number;
}

declare interface CreateBanWhiteListResponse {
  /** 是否全局规则 */
  IsGlobal: boolean;
  /** 添加规则是否重复 */
  IsDuplicate: boolean;
  /** 重复机器的信息 */
  DuplicateHosts: DuplicateHosts[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 云主机类型：CVM：虚拟主机BM：裸金属ECM：边缘计算主机LH：轻量应用服务器Other：混合云机器 */
  MachineType: string;
  /** 主机地域. 示例: "ap-guangzhou" */
  RegionCode: string;
  /** 主机id数组. 示例: ["quuid1","quuid2"] */
  Quuids?: string[];
}

declare interface CreateBaselineStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBuyBindTaskRequest {
  /** 订单号 */
  DealName: string;
  /** 可选参数: 1专业版-包年包月 , 2 旗舰版-包年包月 */
  LicenseType: number;
  /** 机器列表 */
  QuuidList?: string[];
  /** 是否全选机器 */
  IsAll?: boolean;
}

declare interface CreateBuyBindTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudProtectServiceOrderRecordRequest {
  /** 对应云护航服务的资源ID */
  ResourceIds: string[];
}

declare interface CreateCloudProtectServiceOrderRecordResponse {
  /** 成功收货的资源ID */
  Success?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmergencyVulScanRequest {
  /** 漏洞id */
  VulId: number;
  /** 自选服务器时生效，主机uuid的string数组 */
  Uuids?: string[];
  /** 扫描超时时长 ，单位秒 */
  TimeoutPeriod?: number;
}

declare interface CreateEmergencyVulScanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIncidentBacktrackingRequest {
  /** 主机安全quuid */
  Quuid: string;
}

declare interface CreateIncidentBacktrackingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLicenseOrderRequest {
  /** 标签数组, 空则表示不需要绑定标签 */
  Tags?: Tags[];
  /** 授权类型, 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月默认为0 */
  LicenseType?: number;
  /** 授权数量 , 需要购买的数量.默认为1 */
  LicenseNum?: number;
  /** 购买订单地域,这里仅支持 1 广州,9 新加坡. 推荐选择广州. 新加坡地域为白名单用户购买.默认为1 */
  RegionId?: number;
  /** 项目ID .默认为0 */
  ProjectId?: number;
  /** 购买时间长度,默认1 , 可选值为1,2,3,4,5,6,7,8,9,10,11,12,24,36该参数仅包年包月生效 */
  TimeSpan?: number;
  /** 是否自动续费, 默认不自动续费.该参数仅包年包月生效 */
  AutoRenewFlag?: boolean;
  /** 该字段作废 */
  AutoProtectOpenConfig?: string;
  /** 变配参数 */
  ModifyConfig?: OrderModifyObject;
}

declare interface CreateLicenseOrderResponse {
  /** 订单号列表 */
  DealNames: string[];
  /** 资源ID列表,预付费订单该字段空值 */
  ResourceIds: string[];
  /** 大订单号 , 后付费该字段空值 */
  BigDealId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLogExportRequest {
  /** 日志导出数量, 最大值5000万 */
  Count: number;
  /** 日志导出起始时间，毫秒时间戳 */
  StartTime: number;
  /** 日志导出结束时间，毫秒时间戳 */
  EndTime: number;
  /** 日志导出检索语句，不支持[SQL语句] */
  QueryString?: string;
  /** 日志导出时间排序。desc，asc，默认为desc */
  Sort?: string;
  /** 日志导出数据格式。json，csv，默认为json */
  Format?: string;
}

declare interface CreateLogExportResponse {
  /** 日志导出ID */
  ExportId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMaliciousRequestWhiteListRequest {
  /** 白名单域名 */
  Domain: string;
  /** 备注 */
  Mark?: string;
}

declare interface CreateMaliciousRequestWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMalwareWhiteListRequest {
  /** 白名单模式； 0 MD5白名单，1自定义 */
  Mode: number;
  /** quuid 列表 */
  QuuidList?: string[];
  /** 是否全部主机； 0否，1是。 */
  IsGlobal?: number;
  /** 匹配模式 ；0 精确匹配，1模糊匹配（废弃） */
  MatchType?: number;
  /** 文件名称(正则)；长度不超过200个 */
  FileName?: string[];
  /** 文件目录(正则)；长度不超过200个,内容base64转义 */
  FileDirectory?: string[];
  /** 文件后缀；长度不超过200个,内容base64转义（废弃） */
  FileExtension?: string[];
  /** MD5列表 */
  Md5List?: string[];
  /** 木马事件ID */
  EventId?: number;
}

declare interface CreateMalwareWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNetAttackWhiteListRequest {
  /** 是否全部主机； 0否，1是。 */
  Scope: number;
  /** 来源IP 单IP:1.1.1.1 IP范围:1.1.1.1-1.1.2.1 IP范围：1.1.1.0/24 */
  SrcIp: string[];
  /** quuid 列表 */
  QuuidList?: string[];
  /** 事件id */
  EventId?: number;
  /** 是否加白所有符合该规则的告警 ，1:处理,0:不处理 */
  DealOldEvents?: number;
  /** 描述 */
  Description?: string;
}

declare interface CreateNetAttackWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProtectServerRequest {
  /** 防护目录地址 */
  ProtectDir: string;
  /** 防护机器 信息 */
  ProtectHostConfig: ProtectHostConfig[];
}

declare interface CreateProtectServerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRansomDefenseStrategyRequest {
  /** 策略名称 */
  Name: string;
  /** 定时快照执行时间（0-23）：01:00;23:00 */
  Hour: string;
  /** 策略ID，填ID时修改策略，否则新增策略 */
  Id?: number;
  /** 策略备注 */
  Description?: string;
  /** 是否开启：0关，1开 */
  Status?: number;
  /** 是否全部机器生效：0否，1是 */
  IsAll?: number;
  /** 包含目录，;分隔 */
  IncludeDir?: string;
  /** 排除目录，;分隔 */
  ExcludeDir?: string;
  /** 备份模式： 0按周，1按天 */
  BackupType?: number;
  /** 定时任务执行星期天数（1-7）：1;2;7 */
  Weekday?: string;
  /** 保留天数：0永久 */
  SaveDay?: number;
  /** 绑定主机列表 */
  Machines?: RansomDefenseStrategyMachineInfo[];
}

declare interface CreateRansomDefenseStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScanMalwareSettingRequest {
  /** 扫描模式 0 全盘扫描, 1 快速扫描 */
  ScanPattern: number;
  /** 服务器分类：1:专业版服务器；2:自选服务器 */
  HostType: number;
  /** 自选服务器时生效，主机quuid的string数组 */
  QuuidList?: string[];
  /** 超时时间单位 秒 默认3600 秒 */
  TimeoutPeriod?: number;
  /** 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示） */
  EngineType?: number;
  /** 是否开启恶意进程查杀[0:未开启,1:开启] */
  EnableMemShellScan?: number;
}

declare interface CreateScanMalwareSettingResponse {
  /** 任务id */
  TaskId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSearchLogRequest {
  /** 搜索内容 */
  SearchContent: string;
}

declare interface CreateSearchLogResponse {
  /** 0：成功，非0：失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSearchTemplateRequest {
  /** 搜索模板 */
  SearchTemplate: SearchTemplate;
}

declare interface CreateSearchTemplateResponse {
  /** 0：成功，非0：失败 */
  Status?: number;
  /** 失败原因 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulFixRequest {
  /** 漏洞对应要修复的主机列表 */
  CreateVulFixTaskQuuids: CreateVulFixTaskQuuids[];
  /** 快照保存天数， 0 天表示不创建快照。24小时没有快照的主机必须要创建快照才能修复 */
  SaveDays: number;
  /** 快照名称 */
  SnapshotName?: string;
}

declare interface CreateVulFixResponse {
  /** 任务id */
  FixId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWhiteListOrderRequest {
  /** 授权类型 */
  LicenseType: number;
  /** 授权数量,最小为1 最大99999 */
  LicenseNum: number;
  /** 到期时间,最小为1 */
  Deadline: number;
  /** 规则名称,大资产中心:asset_center */
  RuleName: string;
  /** 订单类型, 1 试用 2 赠送 3 体验 4 SSL-证书赠送 5 cvm赠送 */
  SourceType?: number;
  /** 地域, 1 广州 9新加坡, 默认为 1. 非必要情况不要选9 */
  RegionId?: number;
  /** 额外参数,json字符串,包含ResourceId 资源ID,LicenseType 授权类型 */
  ExtraParam?: string;
}

declare interface CreateWhiteListOrderResponse {
  /** 资源对象 */
  Resource?: OrderResource;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAllJavaMemShellsRequest {
  /** 服务器quuid */
  Quuid?: string;
}

declare interface DeleteAllJavaMemShellsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBanWhiteListRequest {
  /** 要删除的白名单ID列表 (最大100条) */
  Ids: number[];
}

declare interface DeleteBanWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaselinePolicyRequest {
  /** 策略Id */
  PolicyIds: number[];
}

declare interface DeleteBaselinePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaselineRuleIgnoreRequest {
  /** 规则Id */
  RuleIds: number[];
}

declare interface DeleteBaselineRuleIgnoreResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaselineRuleRequest {
  /** 规则Id */
  RuleId: number;
}

declare interface DeleteBaselineRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaselineStrategyRequest {
  /** 基线策略id */
  StrategyId: number;
}

declare interface DeleteBaselineStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaselineWeakPasswordRequest {
  /** 弱口令Id */
  PasswordIds: number[];
}

declare interface DeleteBaselineWeakPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBashEventsRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteBashEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBashPoliciesRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteBashPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBashRulesRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteBashRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBruteAttacksRequest {
  /** 暴力破解事件Id数组。(最大 100条) */
  Ids: number[];
}

declare interface DeleteBruteAttacksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLicenseRecordAllRequest {
}

declare interface DeleteLicenseRecordAllResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLicenseRecordRequest {
  /** 授权ID ,可以用授权订单列表获取. */
  LicenseId: number;
  /** 授权类型 */
  LicenseType: number;
  /** 资源ID */
  ResourceId: string;
}

declare interface DeleteLicenseRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLogExportRequest {
  /** 日志导出ID */
  ExportId: string;
}

declare interface DeleteLogExportResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoginWhiteListRequest {
  /** 白名单ID (最大 100 条) */
  Ids: number[];
}

declare interface DeleteLoginWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMachineClearHistoryRequest {
  /** 需要删除的记录id值,最大长度100个 */
  Ids: number[];
}

declare interface DeleteMachineClearHistoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMachineRequest {
  /** 主机安全客户端Uuid。 */
  Uuid: string;
}

declare interface DeleteMachineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMachineTagRequest {
  /** 关联的标签ID */
  Rid: number;
}

declare interface DeleteMachineTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMaliciousRequestWhiteListRequest {
  /** 白名单id (最大100条) */
  Ids: number[];
}

declare interface DeleteMaliciousRequestWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMaliciousRequestsRequest {
  /** 恶意请求记录ID数组，(最大100条) */
  Ids: number[];
}

declare interface DeleteMaliciousRequestsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMalwareScanTaskRequest {
}

declare interface DeleteMalwareScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMalwareWhiteListRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteMalwareWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMalwaresRequest {
  /** 木马记录ID数组 (最大100条) */
  Ids: number[];
}

declare interface DeleteMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNetAttackWhiteListRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeleteNetAttackWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNonlocalLoginPlacesRequest {
  /** 删除异地登录事件的方式，可选值："Ids"、"Ip"、"All"，默认为Ids */
  DelType?: string;
  /** 异地登录事件ID数组。DelType为Ids或DelType未填时此项必填 */
  Ids?: number[];
  /** 异地登录事件的Ip。DelType为Ip时必填 */
  Ip?: string[];
  /** 主机Uuid */
  Uuid?: string;
}

declare interface DeleteNonlocalLoginPlacesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivilegeEventsRequest {
  /** ID数组. (最大100条) */
  Ids: number[];
}

declare interface DeletePrivilegeEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivilegeRulesRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
}

declare interface DeletePrivilegeRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProtectDirRequest {
  /** 删除的目录ID 最大100条 */
  Ids: string[];
}

declare interface DeleteProtectDirResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReverseShellEventsRequest {
  /** ID数组. (最大100条) */
  Ids: number[];
}

declare interface DeleteReverseShellEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReverseShellRulesRequest {
  /** ID数组. (最大100条) */
  Ids: number[];
}

declare interface DeleteReverseShellRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRiskDnsEventRequest {
  /** 恶意请求记录ID数组，(最大100条), 为空时全部删除 */
  Ids?: number[];
}

declare interface DeleteRiskDnsEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRiskDnsPolicyRequest {
  /** 策略ID */
  PolicyIds?: number[];
}

declare interface DeleteRiskDnsPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScanTaskRequest {
  /** 任务Id */
  TaskId: number;
  /** 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线 */
  ModuleType: string;
  /** 自选服务器时生效，主机quuid的string数组 */
  QuuidList?: string[];
}

declare interface DeleteScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSearchTemplateRequest {
  /** 模板ID */
  Id: number;
}

declare interface DeleteSearchTemplateResponse {
  /** 0：成功，非0：失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTagsRequest {
  /** 标签ID (最大100 条) */
  Ids: number[];
}

declare interface DeleteTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWebHookPolicyRequest {
  /** id列表 */
  Ids?: number[];
}

declare interface DeleteWebHookPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWebHookReceiverRequest {
  /** id数组 */
  Ids?: number[];
}

declare interface DeleteWebHookReceiverResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWebHookRuleRequest {
  /** 规则Id列表 */
  Ids: number[];
}

declare interface DeleteWebHookRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWebPageEventLogRequest {
}

declare interface DeleteWebPageEventLogResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeABTestConfigRequest {
  /** 灰度项目名称 */
  ProjectName?: string;
}

declare interface DescribeABTestConfigResponse {
  /** 灰度项目配置 */
  Config: ABTestConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAESKeyRequest {
}

declare interface DescribeAESKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount: number;
  /** 帐号统计列表。 */
  AccountStatistics: AccountStatistics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentInstallCommandRequest {
  /** 是否腾讯云 */
  IsCloud: boolean;
  /** 网络类型：basic-基础网络，private-VPC, public-公网，direct-专线 */
  NetType: string;
  /** 地域标示, NetType=direct时必填 */
  RegionCode?: string;
  /** VpcId, NetType=direct时必填 */
  VpcId?: string;
  /** 标签ID列表，IsCloud=false时才会生效 */
  TagIds?: number[];
  /** 命令有效期，非腾讯云时必填 */
  ExpireDate?: string;
  /** 代理方式接入的vip */
  Vip?: string;
}

declare interface DescribeAgentInstallCommandResponse {
  /** linux系统安装命令 */
  LinuxCommand: string;
  /** windows系统安装命令（windows2008及以上） */
  WindowsCommand: string;
  /** windows系统安装命令第一步（windows2003） */
  WindowsStepOne: string;
  /** windows系统安装命令第二步（windows2003） */
  WindowsStepTwo: string;
  /** windows版agent下载链接 */
  WindowsDownloadUrl: string;
  /** Arm安装命令 */
  ARMCommand: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentInstallationTokenRequest {
  /** token 过期时间 */
  ExpireDate: string;
}

declare interface DescribeAgentInstallationTokenResponse {
  /** 安装命令token */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmIncidentNodesRequest {
  /** 机器uuid */
  Uuid: string;
  /** 告警vid */
  AlarmVid: string;
  /** 告警时间 */
  AlarmTime: number;
  /** 告警来源表ID */
  TableId?: number;
}

declare interface DescribeAlarmIncidentNodesResponse {
  /** 告警点所在事件的所有节点信息,可能包含多事件 */
  IncidentNodes?: IncidentVertexInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmVertexIdRequest {
  /** 机器uuid */
  Uuid: string;
  /** 开始时间戳 */
  StartTime: number;
  /** 结束时间戳 */
  EndTime: number;
}

declare interface DescribeAlarmVertexIdResponse {
  /** 告警点id列表 */
  AlarmVertexIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetAppCountRequest {
  /** 搜索条件：搜索返回所有软件名包含Name的进程列表 */
  Name?: string;
}

declare interface DescribeAssetAppCountResponse {
  /** 各软件应用数量 */
  Apps: AssetKeyVal[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetAppListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。AppName- string - 是否必填：否 - 应用名搜索IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDType - int - 是否必填：否 - 类型	: 仅linux0: 全部1: 运维2 : 数据库3 : 安全4 : 可疑应用5 : 系统架构6 : 系统应用7 : WEB服务99:其他OsType - uint64 - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: AssetFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime|ProcessCount] */
  By?: string;
}

declare interface DescribeAssetAppListResponse {
  /** 应用列表 */
  Apps?: AssetAppBaseInfo[] | null;
  /** 总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetAppProcessListRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** App名 */
  Name: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeAssetAppProcessListResponse {
  /** 进程列表 */
  Process: AssetAppProcessInfo[] | null;
  /** 分区总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetCoreModuleInfoRequest {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器Uuid */
  Uuid: string;
  /** 内核模块ID */
  Id: string;
}

declare interface DescribeAssetCoreModuleInfoResponse {
  /** 内核模块详情 */
  Module: AssetCoreModuleDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetCoreModuleListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName- string - 是否必填：否 - 包名User- string - 是否必填：否 - 用户 */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序依据[Size|FirstTime|ProcessCount|ModuleCount] */
  By?: string;
}

declare interface DescribeAssetCoreModuleListResponse {
  /** 列表 */
  Modules?: AssetCoreModuleBaseInfo[] | null;
  /** 总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetDatabaseCountRequest {
  /** 搜索条件：返回名称包含Name的数据库列表 */
  Name?: string;
}

declare interface DescribeAssetDatabaseCountResponse {
  /** 各数据库数量 */
  Databases: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetDatabaseInfoRequest {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器Uuid */
  Uuid: string;
  /** 数据库ID */
  Id: string;
}

declare interface DescribeAssetDatabaseInfoResponse {
  /** 数据库详情 */
  Database: AssetDatabaseDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetDatabaseListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。MachineName- String - 是否必填：否 - 主机别名筛选IP- String - 是否必填：否 - 主机ip筛选InstanceID- String - 是否必填：否 - 主机实例ID筛选User- string - 是否必填：否 - 运行用户Port - Int - 是否必填：否 - 端口Name - Int - 是否必填：否 - 数据库名称0:全部1:MySQL2:Redis3:Oracle4:MongoDB5:MemCache6:PostgreSQL7:HBase8:DB29:Sybase10:TiDBProto - String - 是否必填：否 - 协议：1:TCP, 2:UDP, 3:未知OsType - String - 是否必填：否 - 操作系统: linux/windowsOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface DescribeAssetDatabaseListResponse {
  /** 列表 */
  Databases?: AssetDatabaseBaseInfo[] | null;
  /** 总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetDiskListRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeAssetDiskListResponse {
  /** 磁盘分区列表 */
  Disks: AssetDiskPartitionInfo[] | null;
  /** 分区总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetEnvListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 该字段已废弃，由Filters代替 */
  Type?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name- string - 是否必填：否 - 环境变量名Type- int - 是否必填：否 - 类型：0用户变量，1系统变量 */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface DescribeAssetEnvListResponse {
  /** 列表 */
  Envs: AssetEnvBaseInfo[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetHostTotalCountRequest {
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
}

declare interface DescribeAssetHostTotalCountResponse {
  /** 各项资源数量system : 资源监控account: 账号port: 端口process: 进程app: 应用软件database:数据库webapp: Web应用webframe: Web框架webservice: Web服务weblocation: Web站点systempackage: 系统安装包jar: jar包initservice:启动服务env: 环境变量coremodule: 内核模块 */
  Types: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetInfoRequest {
}

declare interface DescribeAssetInfoResponse {
  /** 主机数 */
  MachineCount: number;
  /** 账号数 */
  AccountCount: number;
  /** 端口数 */
  PortCount: number;
  /** 进程数 */
  ProcessCount: number;
  /** 软件数 */
  SoftwareCount: number;
  /** 数据库数 */
  DatabaseCount: number;
  /** Web应用数 */
  WebAppCount: number;
  /** Web框架数 */
  WebFrameCount: number;
  /** Web服务数 */
  WebServiceCount: number;
  /** Web站点数 */
  WebLocationCount: number;
  /** 账号今日新增 */
  AccountNewCount: number;
  /** 端口今日新增 */
  PortNewCount: number;
  /** 进程今日新增 */
  ProcessNewCount: number;
  /** 软件今日新增 */
  SoftwareNewCount: number;
  /** 数据库今日新增 */
  DatabaseNewCount: number;
  /** Web应用今日新增 */
  WebAppNewCount: number;
  /** Web框架今日新增 */
  WebFrameNewCount: number;
  /** Web服务今日新增 */
  WebServiceNewCount: number;
  /** Web站点今日新增 */
  WebLocationNewCount: number;
  /** 主机今日新增 */
  MachineNewCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetInitServiceListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName- string - 是否必填：否 - 包名User- string - 是否必填：否 - 用户IsAutoRun - string - 是否必填：否 - 是否开机自启动：0否，1是Status- string - 是否必填：否 - 默认启用状态：0未启用， 1启用 仅linuxType- string - 是否必填：否 - 类型：类型 仅windows：1:编码器2:IE插件3:网络提供者4:镜像劫持5:LSA提供者6:KnownDLLs7:启动执行8:WMI9:计划任务10:Winsock提供者11:打印监控器12:资源管理器13:驱动服务14:登录 */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface DescribeAssetInitServiceListResponse {
  /** 列表 */
  Services?: AssetInitServiceBaseInfo[] | null;
  /** 总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetJarInfoRequest {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器Uuid */
  Uuid: string;
  /** Jar包ID */
  Id: string;
}

declare interface DescribeAssetJarInfoResponse {
  /** Jar包详情 */
  Jar: AssetJarDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetJarListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName- string - 是否必填：否 - 包名Type- uint - 是否必填：否 - 类型	1: 应用程序2 : 系统类库3 : Web服务自带库4 : 其他依赖包Status- string - 是否必填：否 - 是否可执行：0否，1是 */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface DescribeAssetJarListResponse {
  /** 应用列表 */
  Jars?: AssetJarBaseInfo[] | null;
  /** 总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetLoadInfoRequest {
}

declare interface DescribeAssetLoadInfoResponse {
  /** 系统负载 */
  CpuLoad: AssetLoadSummary | null;
  /** 内存使用率 */
  MemLoad: AssetLoadSummary | null;
  /** 硬盘使用率 */
  DiskLoad: AssetLoadSummary | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetMachineDetailRequest {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器Uuid */
  Uuid: string;
}

declare interface DescribeAssetMachineDetailResponse {
  /** 主机详情 */
  MachineDetail?: AssetMachineDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetMachineListRequest {
  /** 过滤条件。MachineName 主机名称InstanceID 实例ID IP 内网IP或公网IPOsType - String - 是否必填：否 - windows或linuxCpuLoad - Int - 是否必填：否 - 0: 未知 1: 低负载	2: 中负载 3: 高负载DiskLoad - Int - 是否必填：否 - 0: 0%或未知 1: 0%～20%	2: 20%～50% 3: 50%～80%	4: 80%～100%MemLoad - Int - 是否必填：否 - 0: 0%或未知 1: 0%～20%	2: 20%～50% 3: 50%～80%	4: 80%～100%Quuid：主机QuuidOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序[FirstTime|PartitionCount] */
  By?: string;
}

declare interface DescribeAssetMachineListResponse {
  /** 总数 */
  Total?: number;
  /** 记录列表 */
  Machines?: AssetMachineBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetMachineTagTopRequest {
}

declare interface DescribeAssetMachineTagTopResponse {
  /** Top5标签及数量 */
  Tags: AssetKeyVal[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetPlanTaskListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDUser- string - 是否必填：否 - 用户Status- int - 是否必填：否 - 默认启用状态：0未启用， 1启用 */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface DescribeAssetPlanTaskListResponse {
  /** 列表 */
  Tasks?: AssetPlanTask[] | null;
  /** 总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetPortCountRequest {
  /** 搜索条件：返回指定端口号数据 */
  Port?: number;
}

declare interface DescribeAssetPortCountResponse {
  /** 各进程数量 */
  Ports: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetPortInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Port - uint64 - 是否必填：否 - 端口IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDProcessName - String - 是否必填：否 - 监听进程Pid - uint64 - 是否必填：否 - PIDUser - String - 是否必填：否 - 运行用户Group - String - 是否必填：否 - 所属用户组Ppid - uint64 - 是否必填：否 - PPIDProto - string - 是否必填：否 - tcp/udp或“”(空字符串筛选未知状态)OsType - uint64 - 是否必填：否 - windows/linuxRunTimeStart - String - 是否必填：否 - 运行开始时间RunTimeEnd - String - 是否必填：否 - 运行结束时间Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime|StartTime] */
  By?: string;
}

declare interface DescribeAssetPortInfoListResponse {
  /** 记录总数 */
  Total?: number;
  /** 列表 */
  Ports?: AssetPortBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetProcessCountRequest {
  /** 搜索条件：搜索返回所有进程名包含Name的进程列表 */
  Name?: string;
}

declare interface DescribeAssetProcessCountResponse {
  /** 各进程数量 */
  Process: AssetKeyVal[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetProcessInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName - String - 是否必填：否 - 进程名User - String - 是否必填：否 - 进程用户Group - String - 是否必填：否 - 进程用户组Pid - uint64 - 是否必填：否 - 进程IDPpid - uint64 - 是否必填：否 - 父进程IDOsType - uint64 - 是否必填：否 - windows/linuxStatus - string - 是否必填：否 - 进程状态：1:R 可执行2:S 可中断3:D 不可中断4:T 暂停状态或跟踪状态5:Z 僵尸状态6:X 将被销毁RunTimeStart - String - 是否必填：否 - 运行开始时间RunTimeEnd - String - 是否必填：否 - 运行结束时间InstallByPackage - uint64 - 是否必填：否 - 是否包安装：0否，1是Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime|StartTime] */
  By?: string;
}

declare interface DescribeAssetProcessInfoListResponse {
  /** 记录总数 */
  Total?: number;
  /** 列表 */
  Process?: AssetProcessBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetRecentMachineInfoRequest {
  /** 开始时间，如：2020-09-22 */
  BeginDate: string;
  /** 结束时间，如：2020-09-22 */
  EndDate: string;
}

declare interface DescribeAssetRecentMachineInfoResponse {
  /** 总数量列表 */
  TotalList: AssetKeyVal[] | null;
  /** 在线数量列表 */
  LiveList: AssetKeyVal[] | null;
  /** 离线数量列表 */
  OfflineList: AssetKeyVal[] | null;
  /** 风险数量列表 */
  RiskList: AssetKeyVal[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetSystemPackageListRequest {
  /** 主机Uuid */
  Uuid?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 过滤条件。Name - String - 是否必填：否 - 包 名StartTime - String - 是否必填：否 - 安装开始时间EndTime - String - 是否必填：否 - 安装开始时间Type - int - 是否必填：否 - 安装包类型：1:rmp2:dpkg3:java4:system */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc-升序 或 desc-降序。默认：desc-降序 */
  Order?: string;
  /** 排序方式可选：[FistTime|InstallTime:安装时间] */
  By?: string;
}

declare interface DescribeAssetSystemPackageListResponse {
  /** 记录总数 */
  Total?: number;
  /** 列表 */
  Packages?: AssetSystemPackageInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetTotalCountRequest {
}

declare interface DescribeAssetTotalCountResponse {
  /** 各项资源数量system : 资源监控account: 账号port: 端口process: 进程app: 应用软件database:数据库webapp: Web应用webframe: Web框架webservice: Web服务weblocation: Web站点jar: Jar包initservice: 启动服务planTask:计划任务env:环境变量coremodule:内核模块 */
  Types?: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetTypeTopRequest {
}

declare interface DescribeAssetTypeTopResponse {
  /** 账号Top5 */
  User: AssetKeyVal[] | null;
  /** 端口Top5 */
  Port: AssetKeyVal[] | null;
  /** 进程Top5 */
  Process: AssetKeyVal[] | null;
  /** 软件Top5 */
  Software: AssetKeyVal[] | null;
  /** 数据库Top5 */
  Database: AssetKeyVal[] | null;
  /** Web应用Top5 */
  WebApp: AssetKeyVal[] | null;
  /** Web站点Top5 */
  WebLocation: AssetKeyVal[] | null;
  /** Web框架Top5 */
  WebFrame: AssetKeyVal[] | null;
  /** Web服务Top5 */
  WebService: AssetKeyVal[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetTypesRequest {
}

declare interface DescribeAssetTypesResponse {
  /** 资产指纹类型列表 */
  Types: AssetType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetUserCountRequest {
  /** 搜索条件：搜索名称中包含name的所有账号列表 */
  Name?: string;
}

declare interface DescribeAssetUserCountResponse {
  /** 各账号数量 */
  Users: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetUserInfoRequest {
  /** 云服务器UUID */
  Quuid: string;
  /** 主机安全UUID */
  Uuid: string;
  /** 账户名 */
  Name: string;
}

declare interface DescribeAssetUserInfoResponse {
  /** 用户详细信息 */
  User: AssetUserDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetUserKeyListRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** 账号名 */
  Name: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeAssetUserKeyListResponse {
  /** 公钥列表 */
  Keys: AssetUserKeyInfo[] | null;
  /** 分区总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetUserListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName - String - 是否必填：否 - 账户名（模糊匹配）NameStrict - String - 是否必填：否 - 账户名（严格匹配）Uid - uint64 - 是否必填：否 - UidGuid - uint64 - 是否必填：否 - GuidLoginTimeStart - String - 是否必填：否 - 开始时间，如：2021-01-11LoginTimeEnd - String - 是否必填：否 - 结束时间，如：2021-01-11LoginType - uint64 - 是否必填：否 - 0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码 仅linuxOsType - String - 是否必填：否 - windows或linuxStatus - uint64 - 是否必填：否 - 账号状态：0-禁用；1-启用UserType - uint64 - 是否必填：否 - 账号类型：0访客用户，1标准用户，2管理员用户 仅windowsIsDomain - uint64 - 是否必填：否 - 是否域账号：0 不是，1是 仅windowsIsRoot - uint64 - 是否必填：否 - 是否Root权限：0 不是，1是 仅linuxIsSudo - uint64 - 是否必填：否 - 是否Sudo权限：0 不是，1是 仅linuxIsSshLogin - uint64 - 是否必填：否 - 是否ssh登录：0 不是，1是 仅linuxShellLoginStatus - uint64 - 是否必填：否 - 是否shell登录性，0不是；1是 仅linuxPasswordStatus - uint64 - 是否必填：否 - 密码状态：1正常 2即将过期 3已过期 4已锁定 仅linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|LoginTime|PasswordChangeTime|PasswordDuaTime|PasswordLockDays] */
  By?: string;
}

declare interface DescribeAssetUserListResponse {
  /** 记录总数 */
  Total?: number;
  /** 账号列表 */
  Users?: AssetUserBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebAppCountRequest {
  /** 搜索条件：返回名称包含Name的所有Web应用列表 */
  Name?: string;
}

declare interface DescribeAssetWebAppCountResponse {
  /** 各Web应用数量 */
  WebApps: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebAppListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName - String - 是否必填：否 - 应用名Domain - String - 是否必填：否 - 站点域名Type - int - 是否必填：否 - 服务类型：0：全部1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:Jetty8:IHS9:TengineOsType - String - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|PluginCount] */
  By?: string;
}

declare interface DescribeAssetWebAppListResponse {
  /** 记录总数 */
  Total?: number;
  /** 列表 */
  WebApps?: AssetWebAppBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebAppPluginListRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** Web应用ID */
  Id: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeAssetWebAppPluginListResponse {
  /** 列表 */
  Plugins: AssetWebAppPluginInfo[] | null;
  /** 分区总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebFrameCountRequest {
  /** 搜索条件：返回名称包含Name的所有Web框架列表 */
  Name?: string;
}

declare interface DescribeAssetWebFrameCountResponse {
  /** 各Web框架数量 */
  WebFrames: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebFrameListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName - String - 是否必填：否 - 框架名NameStrict - String - 是否必填：否 - 框架名（严格匹配）Lang - String - 是否必填：否 - 框架语言:java/pythonType - String - 是否必填：否 - 服务类型：0：全部1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType - String - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|JarCount] */
  By?: string;
}

declare interface DescribeAssetWebFrameListResponse {
  /** 记录总数 */
  Total?: number;
  /** 列表 */
  WebFrames?: AssetWebFrameBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebLocationCountRequest {
  /** 搜索条件：返回名称包含Name的所有Web站点列表 */
  Name?: string;
}

declare interface DescribeAssetWebLocationCountResponse {
  /** 各Web站点数量 */
  WebLocations: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebLocationInfoRequest {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器Uuid */
  Uuid: string;
  /** 站点Id */
  Id: string;
}

declare interface DescribeAssetWebLocationInfoResponse {
  /** 站点信息 */
  WebLocation: AssetWebLocationInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebLocationListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDName - String - 是否必填：否 - 域名User - String - 是否必填：否 - 运行用户Port - uint64 - 是否必填：否 - 站点端口Proto - uint64 - 是否必填：否 - 站点协议：1:HTTP,2:HTTPSServiceType - uint64 - 是否必填：否 - 服务类型：1:Tomcat2：Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType - String - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|PathCount] */
  By?: string;
}

declare interface DescribeAssetWebLocationListResponse {
  /** 记录总数 */
  Total?: number;
  /** 站点列表 */
  Locations?: AssetWebLocationBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebLocationPathListRequest {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器Uuid */
  Uuid: string;
  /** Web站点Id */
  Id: string;
  /** 返回列表数量，最多100，默认10 */
  Limit: number;
  /** 偏移量，默认为0 */
  Offset: number;
}

declare interface DescribeAssetWebLocationPathListResponse {
  /** 总数 */
  Total: number | null;
  /** 列表 */
  Paths: AssetWebLocationPath[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebServiceCountRequest {
  /** 搜索条件：返回名称包含Name的所有Web服务列表 */
  Name?: string;
}

declare interface DescribeAssetWebServiceCountResponse {
  /** 各Web服务数量 */
  WebServices: AssetKeyVal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebServiceInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。User- string - 是否必填：否 - 运行用户Name- string - 是否必填：否 - Web服务名：1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType- string - 是否必填：否 - Windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|ProcessCount] */
  By?: string;
}

declare interface DescribeAssetWebServiceInfoListResponse {
  /** 列表 */
  WebServices: AssetWebServiceBaseInfo[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetWebServiceProcessListRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** Web服务ID */
  Id: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeAssetWebServiceProcessListResponse {
  /** 进程列表 */
  Process: AssetAppProcessInfo[] | null;
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackEventInfoRequest {
  /** 事件id */
  Id: number;
}

declare interface DescribeAttackEventInfoResponse {
  /** 网络攻击事件详情 */
  NetAttackEventInfo?: NetAttackEventInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackEventsRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Type - String 攻击状态 0: 尝试攻击 1: 攻击成功 - 是否必填: 否Status - String 事件处理状态 0：待处理 1：已处理 2： 已加白 3： 已忽略 4：已删除 - 是否必填: 否SrcIP - String 来源IP - 是否必填: 否Uuids - String 主机安全uuid - 是否必填: 否Quuids - String cvm uuid - 是否必填: 否DstPort - String 攻击目标端口 - 是否必填: 否MachineName - String 主机名称 - 是否必填: 否InstanceID - String 主机实例ID - 是否必填: 否AttackTimeBegin - String 攻击开始时间 - 是否必填: 否AttackTimeEnd - String 攻击结束时间 - 是否必填: 否VulSupportDefense - String 漏洞是否支持防御 0不支持，1支持 - 是否必填: 否 */
  Filters?: Filter[];
  /** 排序 */
  By?: string;
  /** 排序方式 ASC,DESC */
  Order?: string;
}

declare interface DescribeAttackEventsResponse {
  /** 攻击事件列表 */
  List?: NetAttackEvent[] | null;
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackLogsRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)DateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"]VulType - String 威胁类型 - 是否必填: 否SrcIp - String 攻击源IP - 是否必填: 否DstIp - String 攻击目标IP - 是否必填: 否SrcPort - String 攻击源端口 - 是否必填: 否DstPort - String 攻击目标端口 - 是否必填: 否 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackSourceEventsRequest {
  /** 主机uuid */
  Uuid: string;
  /** 开始日期 */
  BeginDate: string;
  /** 结束日期 */
  EndDate: string;
  /** 接口DescribeAttackSource 返回的EventInfoParam */
  EventInfoParam: string;
  /** 限制分页条数默认10 */
  Limit?: number;
  /** 起始步长默认0 */
  Offset?: number;
}

declare interface DescribeAttackSourceEventsResponse {
  /** 总条数 */
  TotalCount: number;
  /** 攻击溯源事件列表 */
  List: AttackSourceEvent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackSourceRequest {
  /** 主机uuid */
  Uuid: string;
  /** 开始日期 */
  BeginDate: string;
  /** 结束日期 */
  EndDate: string;
}

declare interface DescribeAttackSourceResponse {
  /** 攻击溯源数据 */
  AttackSource: AttackSource;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackStatisticsRequest {
}

declare interface DescribeAttackStatisticsResponse {
  /** 总攻击次数 */
  PendingAttackCount?: number | null;
  /** 总尝试攻击次数 */
  PendingTryAttackCount?: number | null;
  /** 总攻击成功次数 */
  PendingSuccAttackCount?: number | null;
  /** 今日新增攻击次数 */
  PendingNewAttackCount?: number | null;
  /** 总受攻击资产数量 */
  AttackedAssetCount?: number | null;
  /** 今日新增受攻击资产数量 */
  NewAttackedAssetCount?: number | null;
  /** 总受攻击端口数量 */
  AttackedPortCount?: number | null;
  /** 今日新增受攻击端口数量 */
  NewAttackedPortCount?: number | null;
  /** 总攻击来源ip数量 */
  AttackSrcIpCount?: number | null;
  /** 今日新增攻击来源ip数量 */
  NewAttackSrcIpCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackTopRequest {
  /** 过滤条件。BeginTime - String 起始时间,默认近7天- 是否必填: 否 */
  Filters?: Filter[];
}

declare interface DescribeAttackTopResponse {
  /** top统计数据 */
  NetAttackTopInfo?: NetAttackTopInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackTrendsRequest {
  /** 过滤条件。BeginTime - String 起始时间,默认近7天- 是否必填: 否 */
  Filters?: Filter[];
}

declare interface DescribeAttackTrendsResponse {
  /** 攻击趋势统计数据（天） */
  NetAttackTrend?: NetAttackTrend[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackVulTypeListRequest {
}

declare interface DescribeAttackVulTypeListResponse {
  /** 威胁类型列表 */
  List: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAvailableExpertServiceDetailRequest {
}

declare interface DescribeAvailableExpertServiceDetailResponse {
  /** 安全管家订单 */
  ExpertService: ExpertServiceOrderInfo[];
  /** 应急响应可用次数 */
  EmergencyResponse: number;
  /** 旗舰护网可用次数 */
  ProtectNet: number;
  /** 是否购买过安全管家 */
  ExpertServiceBuy: boolean;
  /** 是否购买过应急响应 */
  EmergencyResponseBuy: boolean;
  /** 是否购买过旗舰护网 */
  ProtectNetBuy: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBanModeRequest {
}

declare interface DescribeBanModeResponse {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode: string;
  /** 标准阻断模式的配置 */
  StandardModeConfig: StandardModeConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBanRegionsRequest {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode: string;
}

declare interface DescribeBanRegionsResponse {
  /** 地域信息列表 */
  RegionSet: RegionSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBanStatusRequest {
}

declare interface DescribeBanStatusResponse {
  /** 阻断开关状态: 0 -- 关闭 1 -- 高级阻断 2 -- 基础阻断(只阻断情报库黑ip) */
  Status?: number;
  /** 是否弹窗提示信息 false: 关闭，true: 开启 */
  ShowTips?: boolean;
  /** 是否开启智能过白模式 */
  OpenSmartMode?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBanWhiteListRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字 */
  Filters?: Filter[];
}

declare interface DescribeBanWhiteListResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 白名单列表 */
  WhiteList: BanWhiteListDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineAnalysisDataRequest {
  /** 基线策略id */
  StrategyId: number;
}

declare interface DescribeBaselineAnalysisDataResponse {
  /** 最后检测时间 */
  LatestScanTime: string | null;
  /** 是否全部服务器：1-是 0-否 */
  IsGlobal: number | null;
  /** 服务器总数 */
  ScanHostCount: number | null;
  /** 检测项总数 */
  ScanRuleCount: number | null;
  /** 是否是第一次检测 1是 0不是 */
  IfFirstScan: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineBasicInfoRequest {
  /** 基线名称 */
  BaselineName?: string;
}

declare interface DescribeBaselineBasicInfoResponse {
  /** 基线基础信息列表 */
  BaselineBasicInfoList: BaselineBasicInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineDefaultStrategyListRequest {
}

declare interface DescribeBaselineDefaultStrategyListResponse {
  /** 默认策略基础信息列表 */
  StrategyList: DefaultStrategyInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineDetailRequest {
  /** 基线id */
  BaselineId: number;
}

declare interface DescribeBaselineDetailResponse {
  /** 基线详情 */
  BaselineDetail: BaselineDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineDetectListRequest {
  /** PolicyName - string - 是否必填：否 - 策略名称PolicyDetectStatus - int - 是否必填：否 - 1:检测中 2:检测完成FirstTime - string - 是否必填：否 - 开始时间LastTime - string - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [HostCount|StartTime|StopTime] */
  By?: string;
}

declare interface DescribeBaselineDetectListResponse {
  /** 无 */
  List: BaselinePolicyDetect[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineDetectOverviewRequest {
  /** 策略Id */
  PolicyId?: number;
}

declare interface DescribeBaselineDetectOverviewResponse {
  /** 检测服务器数 */
  HostCount: number;
  /** 检测项 */
  ItemCount: number;
  /** 检测策略项 */
  PolicyCount: number;
  /** 通过率*100% */
  PassRate: number;
  /** 最近一次检测通过个数 */
  LatestPassCount: number | null;
  /** 最近一次检测未通过个数 */
  LatestNotPassCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineDownloadListRequest {
  /** Status - int - 是否必填：否 - 0:导出中 1:已完成StartTime - string - 是否必填：否 - 开始时间EndTime - string - 是否必填：否 - 结束时间TaskName - string - 是否必填：否 - 任务名称 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [StartTime|EndTime] */
  By?: string;
}

declare interface DescribeBaselineDownloadListResponse {
  /** 无 */
  List?: BaselineDownload[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineEffectHostListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 基线id */
  BaselineId: number;
  /** 过滤条件。AliasName- String- 主机别名Status- Uint- 1已通过 0未通过 5检测中 */
  Filters?: Filters[];
  /** 策略id */
  StrategyId?: number;
  /** 主机uuid数组 */
  UuidList?: string[];
}

declare interface DescribeBaselineEffectHostListResponse {
  /** 记录总数 */
  TotalCount: number | null;
  /** 影响服务器列表 */
  EffectHostList: BaselineEffectHost[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineFixListRequest {
  /** ItemName- string - 是否必填：否 - 项名称 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [CreateTime|MoifyTime|FixTime] */
  By?: string;
}

declare interface DescribeBaselineFixListResponse {
  /** 无 */
  List?: BaselineFix[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineHostDetectListRequest {
  /** PolicyId - int64 - 是否必填：否 - 策略IdHostName - string - 是否必填：否 - 主机名称HostIp - string - 是否必填：否 - 主机IpItemId - int64 - 是否必填：否 - 项IdRuleId - int64 - 是否必填：否 - 规则IdDetectStatus - int - 是否必填：否 - 检测状态Level - int - 是否必填：否 - 风险等级StartTime - string - 是否必填：否 - 开时时间EndTime - string - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [LastTime|ItemCount|PassedItemCount|NotPassedItemCount|FirstTime] */
  By?: string;
}

declare interface DescribeBaselineHostDetectListResponse {
  /** 无 */
  List: BaselineHostDetect[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineHostIgnoreListRequest {
  /** 请求的规则 */
  RuleID: number;
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
}

declare interface DescribeBaselineHostIgnoreListResponse {
  /** 总数 */
  Total: number;
  /** 无 */
  List: BaselineHost[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineHostRiskTopRequest {
  /** 策略ID */
  PolicyId?: number;
}

declare interface DescribeBaselineHostRiskTopResponse {
  /** 风险主机top5 */
  HostRiskTop5: HostRiskLevelCount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineHostTopRequest {
  /** 动态top值 */
  Top: number;
  /** 策略id */
  StrategyId: number;
}

declare interface DescribeBaselineHostTopResponse {
  /** 主机基线策略事件Top */
  BaselineHostTopList: BaselineHostTopList[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineItemDetectListRequest {
  /** HostId - string - 是否必填：否 - 主机IdRuleId - int64 - 是否必填：否 - 规则IdPolicyId - int64 - 是否必填：否 - 规则IdItemName - string - 是否必填：否 - 项名称DetectStatus - int - 是否必填：否 - 检测状态Level - int - 是否必填：否 - 风险等级StartTime - string - 是否必填：否 - 开始时间EndTime - string - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [HostCount|FirstTime|LastTime] */
  By?: string;
}

declare interface DescribeBaselineItemDetectListResponse {
  /** 总数 */
  Total: number;
  /** 无 */
  List: BaselineItemDetect[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineItemIgnoreListRequest {
  /** 忽略规则ID */
  RuleID: number;
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 请求偏移默认0 */
  Offset?: number;
  /** CatgoryId - int64 - 是否必填：否 - 规则Id */
  Filters?: Filter[];
  /** 排序方式 [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列 [ID] */
  By?: string;
}

declare interface DescribeBaselineItemIgnoreListResponse {
  /** 无 */
  List?: BaselineItemInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineItemInfoRequest {
  /** ItemId - int64 - 是否必填：否 - 项IdLevel - int - 是否必填：否 - 风险等级ItemName - string - 是否必填：否 - 检测项名字RuleId - int - 是否必填：否 - 规则Id */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列 */
  By?: string;
}

declare interface DescribeBaselineItemInfoResponse {
  /** 结果列表 */
  List?: BaselineItemInfo[];
  /** 总条目数 */
  Total?: number;
  /** 基线分类列表 */
  CategoryList?: BaselineItemsCategory[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineItemListRequest {
  /** PolicyId - int64 - 是否必填：否 - 策略IdRuleId - int64 - 是否必填：否 - 规则IdHostId - string - 是否必填：否 - 主机IdHostName - string - 是否必填：否 - 主机名HostIp - string - 是否必填：否 - 主机IPItemId - String - 是否必填：否 - 检测项IdItemName - String - 是否必填：否 - 项名称DetectStatus - int - 是否必填：否 - 检测状态[0:未通过|3:通过|5:检测中]Level - int - 是否必填：否 - 风险等级StartTime - string - 是否必填：否 - 开始时间EndTime - string - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列 */
  By?: string;
}

declare interface DescribeBaselineItemListResponse {
  /** 无 */
  List: BaselineItem[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineItemRiskTopRequest {
  /** 策略ID */
  PolicyId?: number;
}

declare interface DescribeBaselineItemRiskTopResponse {
  /** 结果数组 */
  RiskItemTop5: BaselineRiskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 过滤条件。StrategyId- Uint64 - 基线策略idStatus - Uint64 - 处理状态1已通过 0未通过Level - Uint64[] - 处理状态1已通过 0未通过BaselineName BaselineName - String - 基线名称Quuid- String - 主机quuidUuid- String - 主机uuid */
  Filters?: Filters[];
}

declare interface DescribeBaselineListResponse {
  /** 基线信息列表 */
  BaselineList: BaselineInfo[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselinePolicyListRequest {
  /** PolicyName - String - 是否必填：否 - 策略名称 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [RuleCount|ItemCount|HostCount] */
  By?: string;
}

declare interface DescribeBaselinePolicyListResponse {
  /** 无 */
  List: BaselinePolicy[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineRuleCategoryListRequest {
}

declare interface DescribeBaselineRuleCategoryListResponse {
  /** 无 */
  List: BaselineCategory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineRuleDetectListRequest {
  /** PolicyId - int64 - 是否必填：否 - 策略IdItemId - int64 - 是否必填：否 - 策略IdRuleName - string - 是否必填：否 - 规则名称DetectStatus - int - 是否必填：否 - 检测状态StartTime - string - 是否必填：否 - 开时时间EndTime - string - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [HostCount|FirstTime|LastTime] */
  By?: string;
}

declare interface DescribeBaselineRuleDetectListResponse {
  /** 无 */
  List: BaselineRuleDetect[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineRuleIgnoreListRequest {
  /** RuleName - String - 是否必填：否 - 规则名称ItemId- int - 是否必填：否 - 检测项Id */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [HostCount] */
  By?: string;
}

declare interface DescribeBaselineRuleIgnoreListResponse {
  /** 总数 */
  Total: number;
  /** 列表 */
  List: BaselineRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineRuleListRequest {
  /** RuleName - String - 是否必填：否 - 规则名称CategoryId - int64 - 是否必填：否 自定义筛选为-1 - 规则分类RuleType - int - 是否必填：否 0:系统 1:自定义 - 规则类型 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列 */
  By?: string;
}

declare interface DescribeBaselineRuleListResponse {
  /** 无 */
  List: BaselineRule[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineRuleRequest {
  /** 基线id */
  BaselineId: number;
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 危害等级 */
  Level?: number[];
  /** 状态 */
  Status?: number;
  /** 主机quuid */
  Quuid?: string;
  /** 主机uuid */
  Uuid?: string;
}

declare interface DescribeBaselineRuleResponse {
  /** 分页查询记录总数 */
  TotalCount: number;
  /** 基线检测项列表 */
  BaselineRuleList: BaselineRuleInfo[] | null;
  /** 是否显示说明列：true-是，false-否 */
  ShowRuleRemark: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineScanScheduleRequest {
  /** 任务id */
  TaskId: number;
}

declare interface DescribeBaselineScanScheduleResponse {
  /** 检测进度(百分比) */
  Schedule: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineStrategyDetailRequest {
  /** 用户基线策略id */
  StrategyId: number;
}

declare interface DescribeBaselineStrategyDetailResponse {
  /** 策略扫描通过率 */
  PassRate: number | null;
  /** 策略名 */
  StrategyName: string | null;
  /** 策略扫描周期(天) */
  ScanCycle: string | null;
  /** 定期检测时间, 该时间下发扫描 */
  ScanAt: string | null;
  /** 扫描范围是否全部服务器, 1:是 0:否, 为1则为全部专业版主机 */
  IsGlobal: number | null;
  /** 云服务器类型：cvm：腾讯云服务器bm：裸金属ecm：边缘计算主机lh: 轻量应用服务器ohter: 混合云机器 */
  MachineType: string | null;
  /** 主机地域 */
  Region: string | null;
  /** 用户该策略下的所有主机id */
  Quuids: string[] | null;
  /** 用户该策略下所有的基线id */
  CategoryIds: string[] | null;
  /** 1 表示扫描过, 0没扫描过 */
  IfScanned: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineStrategyListRequest {
  /** 分页参数 最大100 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 规则开关，1：打开 0：关闭 2:全部 */
  Enabled: number;
}

declare interface DescribeBaselineStrategyListResponse {
  /** 分页查询记录的总数 */
  TotalCount: number | null;
  /** 用户策略信息列表 */
  StrategyList: Strategy[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineTopRequest {
  /** 动态top值 */
  Top: number;
  /** 策略id */
  StrategyId: number;
}

declare interface DescribeBaselineTopResponse {
  /** 检测项Top列表 */
  RuleTopList: BaselineRuleTopInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineWeakPasswordListRequest {
  /** WeakPassword - string - 是否必填：否 - 弱口令 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式 [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列 [CreateTime|ModifyTime] */
  By?: string;
}

declare interface DescribeBaselineWeakPasswordListResponse {
  /** 总数 */
  Total: number;
  /** 无 */
  List: BaselineWeakPassword[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBashEventsInfoNewRequest {
  /** 事件id */
  Id: number;
}

declare interface DescribeBashEventsInfoNewResponse {
  /** 事件详情 */
  BashEventsInfo: BashEventsInfoNew | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBashEventsInfoRequest {
  /** 事件id */
  Id: number;
}

declare interface DescribeBashEventsInfoResponse {
  /** 事件详情 */
  BashEventsInfo: BashEventsInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBashEventsNewRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 过滤条件。HostName - String - 是否必填：否 - 主机名Hostip - String - 是否必填：否 - 主机内网IPHostIp - String - 是否必填：否 - 主机内网IPRuleCategory - Int - 是否必填：否 - 策略类型,全部或者单选(0:系统 1:用户)RuleName - String - 是否必填：否 - 策略名称RuleLevel - Int - 是否必填：否 - 威胁等级,可以多选Status - Int - 是否必填：否 - 处理状态,可多选(0:待处理 1:已处理 2:已加白 3:已忽略 4:已删除 5:已拦截)DetectBy - Int - 是否必填：否 - 数据来源,可多选(0:bash日志 1:实时监控)StartTime - String - 是否必填：否 - 开始时间EndTime - String - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：CreateTime-发生时间。ModifyTime-处理时间 */
  By?: string;
}

declare interface DescribeBashEventsNewResponse {
  /** 总条数 */
  TotalCount: number;
  /** 高危命令事件列表 */
  List: BashEventNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBashEventsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 过滤条件。HostName - String - 是否必填：否 - 主机名Hostip - String - 是否必填：否 - 主机内网IPRuleCategory - Int - 是否必填：否 - 策略类型,全部或者单选(0:系统 1:用户)RuleName - String - 是否必填：否 - 策略名称RuleLevel - Int - 是否必填：否 - 威胁等级,可以多选Status - Int - 是否必填：否 - 处理状态,可多选(0:待处理 1:已处理 2:已加白 3:已忽略 4:已删除 5:已拦截)DetectBy - Int - 是否必填：否 - 数据来源,可多选(0:bash日志 1:实时监控)StartTime - String - 是否必填：否 - 开始时间EndTime - String - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：CreateTime-发生时间。ModifyTime-处理时间 */
  By?: string;
}

declare interface DescribeBashEventsResponse {
  /** 总条数 */
  TotalCount: number;
  /** 高危命令事件列表 */
  List: BashEvent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBashPoliciesRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Name - String - 是否必填：否 - 规则名称Rule - String - 是否必填：否 - 规则内容Level - Int - 是否必填：否 - 威胁等级White - Int - 是否必填：否 - 白名单类型Category - Int - 是否必填：否 - 策略类型BashAction - Int - 是否必填：否 - 操作动作Enable - Int - 是否必填：否 - 生效状态Id - Int - 是否必填：否 - 策略IDPolicyId - Int - 是否必填：否 - 策略IDRuleId - Int - 是否必填：否 - 策略ID */
  Filters?: Filter[];
}

declare interface DescribeBashPoliciesResponse {
  /** 列表内容 */
  List: BashPolicy[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBashRulesRequest {
  /** 0-系统规则; 1-用户规则 */
  Type: number;
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键字(规则名称) */
  Filters?: Filter[];
}

declare interface DescribeBashRulesResponse {
  /** 列表内容 */
  List: BashRule[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBruteAttackListRequest {
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Uuid - String - 是否必填：否 - 主机安全唯一UuidQuuid - String - 是否必填：否 - 云服务器uuidStatus - String - 是否必填：否 - 状态筛选：失败：FAILED 成功：SUCCESSUserName - String - 是否必填：否 - UserName筛选SrcIp - String - 是否必填：否 - 来源ip筛选CreateBeginTime - String - 是否必填：否 - 首次攻击时间筛选，开始时间CreateEndTime - String - 是否必填：否 - 首次攻击时间筛选，结束时间ModifyBeginTime - String - 是否必填：否 - 最近攻击时间筛选，开始时间ModifyEndTime - String - 是否必填：否 - 最近攻击时间筛选，结束时间Banned - String - 是否必填：否 - 阻断状态筛选，多个用","分割：0-未阻断（全局ZK开关关闭），82-未阻断(非专业版)，83-未阻断(已加白名单)，1-已阻断，2-未阻断-程序异常，3-未阻断-内网攻击暂不支持阻断，4-未阻断-安平暂不支持阻断 */
  Filters?: Filter[];
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：CreateTime-首次攻击时间 */
  By?: string;
}

declare interface DescribeBruteAttackListResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 密码破解列表 */
  BruteAttackList?: BruteAttackInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBruteAttackRulesRequest {
}

declare interface DescribeBruteAttackRulesResponse {
  /** 爆破阻断规则列表 */
  Rules: BruteAttackRuleList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCanFixVulMachineRequest {
  /** 漏洞id 支持多个漏洞 */
  VulIds: number[];
  /** 需要修复的主机，和VulIds是and 的关系 */
  Quuids?: string[];
}

declare interface DescribeCanFixVulMachineResponse {
  /** 主机漏洞修护信息列表 */
  VulInfo: CanFixVulInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCanNotSeparateMachineRequest {
  /** 需要修改的事件id 数组，支持批量 */
  Ids?: number[];
  /** 是否更新全部，即是否对所有的事件进行操作，当ids 不为空时，此参数无效 */
  UpdateAll?: boolean;
  /** 排除的事件id,当操作全部事件时，需要排除这次id */
  ExcludeId?: number[];
  /** IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选FilePath - String - 是否必填：否 - 路径筛选VirusName - String - 是否必填：否 - 描述筛选CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中 */
  Filters?: Filters[];
}

declare interface DescribeCanNotSeparateMachineResponse {
  /** 不可隔离主机列表 */
  List: CanNotSeparateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClientExceptionRequest {
  /** 客户端异常类型 1:客户端离线，2:客户端卸载 */
  ExceptionType: number;
  /** 分页的偏移量 */
  Offset: number;
  /** 分页单页限制数目，不为0，最大值100 */
  Limit: number;
  /** 起始时间 `2006-01-02 15:04:05` 格式 */
  StartTime?: string;
  /** 结束时间 `2006-01-02 15:04:05` 格式 */
  EndTime?: string;
}

declare interface DescribeClientExceptionResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 事件详情 */
  Records: RecordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudProtectServiceOrderListRequest {
  /** 排序字段,当前支持: BeginTime */
  Order?: string;
  /** 排序方式,当前支持:ASC 正序,DESC 倒序 */
  By?: string;
}

declare interface DescribeCloudProtectServiceOrderListResponse {
  /** 云护航订单列表信息 */
  Data?: CloudProtectService[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount: number;
  /** 组件统计列表数据数组。 */
  ComponentStatistics: ComponentStatistics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDefenceEventDetailRequest {
  /** 漏洞事件id */
  Id: number;
}

declare interface DescribeDefenceEventDetailResponse {
  /** 漏洞事件详细信息 */
  Data: VulDefenceEventDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDirectConnectInstallCommandRequest {
  /** 地域标示 */
  RegionCode: string;
  /** Vpc的ID */
  VpcId: string;
  /** 命令过期时间 */
  ExpireDate: string;
}

declare interface DescribeDirectConnectInstallCommandResponse {
  /** 安装命令的ip */
  Ip: string;
  /** 安装命令的token */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeESAggregationsRequest {
  /** ES聚合条件JSON */
  Query: string;
}

declare interface DescribeESAggregationsResponse {
  /** ES聚合结果JSON */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEmergencyResponseListRequest {
  /** 过滤条件。Keyword- String - 是否必填：否 - 关键词过滤，Uuids - String - 是否必填：否 - 主机id过滤 */
  Filters?: Filters[];
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 排序步长 */
  Offset?: number;
  /** 排序方法 */
  Order?: string;
  /** 排序字段 StartTime，EndTime */
  By?: string;
}

declare interface DescribeEmergencyResponseListResponse {
  /** 总条数 */
  TotalCount: number;
  /** 应急响应列表 */
  List: EmergencyResponseInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEmergencyVulListRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：是 - 漏洞状态筛选，0//未检测 1有风险 ，2无风险 ，3 检查中展示progressLevel - String - 是否必填：否 - 漏洞等级筛选 1:低 2:中 3:高 4:提示VulName- String - 是否必填：否 - 漏洞名称搜索Uuids- String - 是否必填：否 - 主机uuidIsSupportDefense - int- 是否必填：否 - 是否支持防御 0:不支持 1:支持 */
  Filters?: Filters[];
  /** 排序方式 desc , asc */
  Order?: string;
  /** 排序字段 PublishDate LastScanTime HostCount */
  By?: string;
  /** 是否热点漏洞 */
  HotspotAttack?: boolean;
}

declare interface DescribeEmergencyVulListResponse {
  /** 漏洞列表 */
  List?: EmergencyVul[] | null;
  /** 漏洞总条数 */
  TotalCount?: number | null;
  /** 是否存在风险 */
  ExistsRisk?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventByTableRequest {
  /** 事件表名 */
  TableName: string;
  /** 事件表id号 */
  Ids: number[];
}

declare interface DescribeEventByTableResponse {
  /** 告警类型，爆破bruteattack，高危命令bash，恶意文件malware，恶意请求risk_dns，本地提权privilege_escalation，反弹shell reverse_shell，内存马java_shell */
  Type?: string;
  /** 事件内容的json编码字符串，字段结构对齐事件表 */
  Value?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExpertServiceListRequest {
  /** 过滤条件。Keyword- String - 是否必填：否 - 关键词过滤，Uuids - String - 是否必填：否 - 主机id过滤 */
  Filters?: Filters[];
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 排序步长 */
  Offset?: number;
  /** 排序方法 */
  Order?: string;
  /** 排序字段 StartTime，EndTime */
  By?: string;
}

declare interface DescribeExpertServiceListResponse {
  /** 总条数 */
  TotalCount: number;
  /** 安全管家数据 */
  List: SecurityButlerInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExpertServiceOrderListRequest {
  /** InquireType- String - 是否必填：否 - 订单类型过滤， */
  Filters?: Filters[];
  /** 分页条数 最大100条 */
  Limit?: number;
  /** 分页步长 */
  Offset?: number;
}

declare interface DescribeExpertServiceOrderListResponse {
  /** 总条数 */
  TotalCount: number;
  /** 订单列表 */
  List: ExpertServiceOrderInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExportMachinesRequest {
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
  /** 机器所属业务ID列表 */
  ProjectIds?: number[];
}

declare interface DescribeExportMachinesResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFastAnalysisRequest {
  /** 起始时间，单位ms */
  From: number;
  /** 结束时间，单位ms */
  To: number;
  /** 查询语句，语句长度最大为4096 */
  Query: string;
  /** 日志字段名称 */
  FieldName: string;
}

declare interface DescribeFastAnalysisResponse {
  /** 分析统计信息 */
  FieldValueRatioInfos: FieldValueRatioInfo[] | null;
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileTamperEventRuleInfoRequest {
  /** 事件id */
  Id: number;
  /** 一页多少个 控制返回的uuids条数 */
  Limit?: number;
  /** 控制返回的uuids条数 */
  Offset?: number;
}

declare interface DescribeFileTamperEventRuleInfoResponse {
  /** 规则详情信息 */
  FileTamperRuleDetail: FileTamperRuleDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileTamperEventsRequest {
  /** 过滤条件。Status - String - 是否必填：否 - 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略ModifyTime - String - 是否必填：否 - 最近发生时间Uuid- String - 是否必填：否 - 主机uuid查询RuleCategory- string - 是否必填：否 - 规则类别 0 系统规则 1 自定义规则FileAction- string - 是否必填：否 - 威胁行为 read 读取文件 write 写文件 */
  Filters?: Filters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式 ASC,DESC */
  Order?: string;
  /** 排序字段 CreateTime、ModifyTime */
  By?: string;
}

declare interface DescribeFileTamperEventsResponse {
  /** 核心文件事件列表 */
  List?: FileTamperEvent[] | null;
  /** 数据总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileTamperRuleCountRequest {
  /** 查询的主机uuids 一次性最多只能查100个 */
  Uuids: string[];
}

declare interface DescribeFileTamperRuleCountResponse {
  /** 主机关联核心文件规则数量信息 */
  List: FileTamperRuleCount[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileTamperRuleInfoRequest {
  /** 规则id */
  Id: number;
  /** 控制返回的uuids 数量 */
  Limit?: number;
  /** 控制返回的uuids 数量，起始位置 */
  Offset?: number;
}

declare interface DescribeFileTamperRuleInfoResponse {
  /** 规则详情信息 */
  FileTamperRuleDetail: FileTamperRuleDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileTamperRulesRequest {
  /** 过滤条件。RuleCategory- string- 规则类别 0=系统规则，1=用户规则Name- String - 规则名称 */
  Filters?: Filters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式 ASC,DESC */
  Order?: string;
  /** 排序字段 CreateTime、ModifyTime、HostCount */
  By?: string;
}

declare interface DescribeFileTamperRulesResponse {
  /** 规则列表 */
  List?: FileTamperRuleInfo[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGeneralStatRequest {
  /** 云主机类型。CVM：表示腾讯云服务器BM: 表示黑石物理机ECM: 表示边缘计算服务器LH: 表示轻量应用服务器Other: 表示混合云机器 */
  MachineType?: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion?: string;
}

declare interface DescribeGeneralStatResponse {
  /** 云主机总数 */
  MachinesAll?: number;
  /** 云主机没有安装主机安全客户端的总数 */
  MachinesUninstalled?: number;
  /** 主机安全客户端总数的总数 */
  AgentsAll?: number;
  /** 主机安全客户端在线的总数 */
  AgentsOnline?: number;
  /** 主机安全客户端 离线+关机 的总数 */
  AgentsOffline?: number;
  /** 主机安全客户端专业版的总数 */
  AgentsPro?: number;
  /** 主机安全客户端基础版的总数 */
  AgentsBasic?: number;
  /** 7天内到期的预付费专业版总数 */
  AgentsProExpireWithInSevenDays?: number;
  /** 风险主机总数 */
  RiskMachine?: number;
  /** 已关机总数 */
  Shutdown?: number;
  /** 已离线总数 */
  Offline?: number;
  /** 旗舰版主机数 */
  FlagshipMachineCnt?: number | null;
  /** 保护天数 */
  ProtectDays?: number | null;
  /** 15天内新增的主机数 */
  AddedOnTheFifteen?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount: number;
  /** 帐号变更历史数据数组。 */
  HistoryAccounts: HistoryAccount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHistoryServiceRequest {
}

declare interface DescribeHistoryServiceResponse {
  /** 1 可购买 2 只能升降配 3 只能跳到续费管理页 */
  BuyStatus: number;
  /** 用户已购容量 单位 G */
  InquireNum: number;
  /** 到期时间 */
  EndTime: string;
  /** 是否自动续费,0 初始值, 1 开通 2 没开通 */
  IsAutoOpenRenew: number;
  /** 资源ID */
  ResourceId: string;
  /** 0 没开通 1 正常 2隔离 3销毁 */
  Status: number;
  /** 开始时间 */
  StartTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostInfoRequest {
  /** 主机Quuid数组 */
  QuuidList?: string[];
  /** Uuids 查询，Quuid查询时填空 */
  Uuids?: string[];
}

declare interface DescribeHostInfoResponse {
  /** 主机信息与标签信息 */
  HostInfoList: HostTagInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostLoginListRequest {
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Quuid - String - 是否必填：否 - 云服务器uuidUuid - String - 是否必填：否 - 主机安全唯一UuidMachineName - String - 是否必填：否 - 主机别名Ip - String - 是否必填：否 - 主机ipInstanceID - String - 是否必填：否 - 主机实例IDSrcIp - String - 是否必填：否 - 来源ip筛选UserName - String - 是否必填：否 - 用户名筛选Status - int - 是否必填：否 - 状态筛选1:正常登录；5：已加白,14:已处理，15：已忽略LoginTimeBegin - String - 是否必填：否 - 按照修改时间段筛选，开始时间LoginTimeEnd - String - 是否必填：否 - 按照修改时间段筛选，结束时间RiskLevel - int - 是否必填：否 - 状态筛选0:高危；1：可疑 */
  Filters?: Filter[];
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：LoginTime-发生时间 */
  By?: string;
}

declare interface DescribeHostLoginListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 登录审计列表 */
  HostLoginList?: HostLoginList[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHotVulTopRequest {
}

declare interface DescribeHotVulTopResponse {
  /** 漏洞信息 */
  List?: VulStoreListInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIgnoreBaselineRuleRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 检测项名称 */
  RuleName?: string;
}

declare interface DescribeIgnoreBaselineRuleResponse {
  /** 忽略基线检测项列表信息 */
  IgnoreBaselineRuleList: IgnoreBaselineRule[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIgnoreHostAndItemConfigRequest {
  /** ItemId - int64 - 是否必填：否 - 项IdRuleId - int64 - 是否必填：否 - 规则IdHostId - string - 是否必填：否 - 主机Id */
  Filters?: Filter[];
}

declare interface DescribeIgnoreHostAndItemConfigResponse {
  /** 受影响检测项 */
  ItemSet: BaselineItemInfo[] | null;
  /** 受影响主机 */
  HostSet: BaselineHost[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIgnoreRuleEffectHostListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 检测项id */
  RuleId: number;
  /** 过滤条件。AliasName- String- 主机别名 */
  Filters?: Filters[];
  /** 主机标签名 */
  TagNames?: string[];
}

declare interface DescribeIgnoreRuleEffectHostListResponse {
  /** 忽略检测项影响主机列表 */
  IgnoreRuleEffectHostList: IgnoreRuleEffectHostInfo[] | null;
  /** 分页查询记录总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImportMachineInfoRequest {
  /** 服务器内网IP（默认）/ 服务器名称 / 服务器ID 数组 (最大 1000条) */
  MachineList: string[];
  /** 批量导入的数据类型：Ip、Name、Id 三选一 */
  ImportType: string;
  /** 该参数已作废. */
  IsQueryProMachine?: boolean;
  /** 过滤条件：Version - String 是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship：旗舰版 | ProtectedMachines：专业版+旗舰版） | BASIC_PROPOST_GENERAL_DISCOUNT：普惠版+专业版按量计费+基础版主机 | UnFlagship：专业版预付费+专业版后付费+基础版+普惠版 */
  Filters?: Filters[];
}

declare interface DescribeImportMachineInfoResponse {
  /** 有效的机器信息列表：机器名称、机器公网/内网ip、机器标签 */
  EffectiveMachineInfoList?: EffectiveMachineInfo[] | null;
  /** 用户批量导入失败的机器列表（例如机器不存在等...） */
  InvalidMachineList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIndexListRequest {
}

declare interface DescribeIndexListResponse {
  /** ES 索引信息 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJavaMemShellInfoRequest {
  /** 事件Id */
  Id: number;
}

declare interface DescribeJavaMemShellInfoResponse {
  /** java内存马事件详细信息 */
  Info: JavaMemShellDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJavaMemShellListRequest {
  /** 过滤条件：Keywords: ip或者主机名模糊查询, Type，Status精确匹配，CreateBeginTime，CreateEndTime时间段 */
  Filters?: Filters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeJavaMemShellListResponse {
  /** 事件列表 */
  List: JavaMemShellInfo[] | null;
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJavaMemShellPluginInfoRequest {
  /** 主机quuid */
  Quuid: string;
  /** 过滤条件：Pid精确匹配，MainClass模糊匹配 */
  Filters?: Filters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeJavaMemShellPluginInfoResponse {
  /** java内存马插件列表 */
  List: JavaMemShellPluginInfo[] | null;
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJavaMemShellPluginListRequest {
  /** 过滤条件：Keywords: ip或者主机名模糊查询, JavaShellStatus，Exception精确匹配 */
  Filters?: Filters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeJavaMemShellPluginListResponse {
  /** java内存马插件列表 */
  List: JavaMemShellPluginSetting[] | null;
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseBindListRequest {
  /** 授权ID */
  LicenseId: number;
  /** 授权类型 */
  LicenseType: number;
  /** 资源ID */
  ResourceId: string;
  /** InstanceID、IP、MachineName 模糊查询 */
  Filters?: Filters[];
  /** 限制条数,默认10. */
  Limit?: number;
  /** 偏移量,默认0. */
  Offset?: number;
}

declare interface DescribeLicenseBindListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 绑定机器列表信息 */
  List?: LicenseBindDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseBindScheduleRequest {
  /** 任务ID */
  TaskId: number;
  /** 限制条数,默认10. */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 过滤参数Status 绑定进度状态 0 进行中 1 已完成 2 失败 */
  Filters?: Filter[];
}

declare interface DescribeLicenseBindScheduleResponse {
  /** 进度 */
  Schedule: number;
  /** 绑定任务详情 */
  List: LicenseBindTaskDetail[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseGeneralRequest {
}

declare interface DescribeLicenseGeneralResponse {
  /** 总授权数 (包含隔离,过期等不可用状态) */
  LicenseCnt?: number;
  /** 可用授权数 */
  AvailableLicenseCnt?: number;
  /** 可用专业版授权数(包含后付费). */
  AvailableProVersionLicenseCnt?: number;
  /** 可用旗舰版授权数 */
  AvailableFlagshipVersionLicenseCnt?: number;
  /** 即将到期授权数 (15天内到期的) */
  NearExpiryLicenseCnt?: number;
  /** 已到期授权数(不包含已删除的记录) */
  ExpireLicenseCnt?: number;
  /** 自动升级开关状态,默认 false, true 开启, false 关闭 */
  AutoOpenStatus?: boolean;
  /** PROVERSION_POSTPAY 专业版-后付费, PROVERSION_PREPAY 专业版-预付费, FLAGSHIP_PREPAY 旗舰版-预付费 */
  ProtectType?: string;
  /** 历史是否开通过自动升级开关 */
  IsOpenStatusHistory?: boolean;
  /** 已使用授权数 */
  UsedLicenseCnt?: number;
  /** 未到期授权数 */
  NotExpiredLicenseCnt?: number;
  /** 旗舰版总授权数(有效订单) */
  FlagshipVersionLicenseCnt?: number;
  /** 专业版总授权数(有效订单) */
  ProVersionLicenseCnt?: number;
  /** 普惠版总授权数(有效订单的授权数) */
  CwpVersionLicenseCnt?: number;
  /** 可用惠普版授权数 */
  AvailableLHLicenseCnt?: number;
  /** 自动加购开关, true 开启, false 关闭 */
  AutoRepurchaseSwitch?: boolean;
  /** 自动加购订单是否自动续费 ,true 开启, false 关闭 */
  AutoRepurchaseRenewSwitch?: boolean;
  /** 已销毁订单数 */
  DestroyOrderNum?: number;
  /** 是否自动续费开关,true 开启,false 关闭 */
  RepurchaseRenewSwitch?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseListRequest {
  /** 多个条件筛选时取交集 LicenseStatus 授权状态信息,0 未使用,1 部分使用, 2 已用完, 3 不可用 4 可使用 BuyTime 购买时间 LicenseType 授权类型, 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月DeadlineStatus 到期状态 NotExpired 未过期, Expire 已过期(包含已销毁) NearExpiry 即将到期ResourceId 资源IDKeywords IP筛选PayMode 付费模式 0 按量计费 , 1 包年包月OrderStatus 订单状态 1 正常 2 隔离 3 销毁DealNames 子订单号,最大长度10个,超出会失败 */
  Filters?: Filters[];
  /** 限制条数,默认10. */
  Limit?: number;
  /** 偏移量,默认0. */
  Offset?: number;
  /** 标签筛选,平台标签能力,这里传入 标签键,标签值作为一个对象 */
  Tags?: Tags[];
}

declare interface DescribeLicenseListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 授权数列表信息 */
  List?: LicenseDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseRequest {
}

declare interface DescribeLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseWhiteConfigRequest {
  /** 规则名称,例如: cwp */
  RuleName: string;
}

declare interface DescribeLicenseWhiteConfigResponse {
  /** 旗舰版 配置信息 */
  FlagShip?: VersionWhiteConfig;
  /** 专业版 配置信息 */
  Professional?: VersionWhiteConfig;
  /** 普惠版 配置信息 */
  PrattWhitney?: VersionWhiteConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogDeliveryKafkaOptionsRequest {
  /** kafka实例id */
  InstanceID?: string;
}

declare interface DescribeLogDeliveryKafkaOptionsResponse {
  /** 实例列表 */
  InstanceList: CKafkaInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogExportsRequest {
  /** 分页的偏移量，默认值为0 */
  Offset: number;
  /** 分页单页限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeLogExportsResponse {
  /** 总数目 */
  TotalCount?: number;
  /** 日志导出列表 */
  Exports?: ExportInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogHistogramRequest {
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  StartTime: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  EndTime: number;
  /** 查询语句 */
  QueryString: string;
  /** 时间间隔: 单位ms */
  Interval: number;
}

declare interface DescribeLogHistogramResponse {
  /** 周期内统计结果详情 */
  Data: LogHistogram[];
  /** 统计周期： 单位ms */
  Period: number;
  /** 命中关键字的日志总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogIndexRequest {
}

declare interface DescribeLogIndexResponse {
  /** 是否生效 */
  Status: boolean;
  /** 索引规则 */
  Rule: RuleInfo;
  /** 索引修改时间，初始值为索引创建时间 */
  ModifyTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogKafkaDeliverInfoRequest {
}

declare interface DescribeLogKafkaDeliverInfoResponse {
  /** 实例环境 */
  KafkaEnvName?: string;
  /** 实例id */
  KafkaId?: string;
  /** 地域 */
  Zone?: string;
  /** 可用区 */
  Az?: string;
  /** 所属网络 */
  VpcId?: string;
  /** 所在子网 */
  SubnetId?: string;
  /** 接入方式，1公网域名接入，2支撑环境接入 */
  AccessType?: number;
  /** 接入地址 */
  AccessAddr?: string;
  /** 投递状态，1：健康，2：告警，3：异常 */
  DeliverStatus?: number;
  /** kafka版本 */
  InsVersion?: string;
  /** 峰值带宽 */
  BandWidth?: number;
  /** 磁盘容量 */
  DiskSize?: number;
  /** 用户名 */
  Username?: string;
  /** xx */
  DeliverTypeDetails?: DeliverTypeDetails[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogStorageConfigRequest {
}

declare interface DescribeLogStorageConfigResponse {
  /** 存储类型，string数组 */
  Type?: string[] | null;
  /** 日志存储天数，3640表示不限 */
  Period?: number | null;
  /** 本月Period的修改次数 */
  PeriodModifyCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogStorageRecordRequest {
}

declare interface DescribeLogStorageRecordResponse {
  /** 存储量记录 */
  Records?: LogStorageRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogStorageStatisticRequest {
}

declare interface DescribeLogStorageStatisticResponse {
  /** 总容量（单位：GB） */
  TotalSize: number;
  /** 已使用容量（单位：GB） */
  UsedSize: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogTypeRequest {
}

declare interface DescribeLogTypeResponse {
  /** cls日志类型信息 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoginWhiteCombinedListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选UserName - String - 是否必填：否 - 用户名筛选ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间 */
  Filters?: Filter[];
}

declare interface DescribeLoginWhiteCombinedListResponse {
  /** 总数量 */
  TotalCount: number;
  /** 合并后的白名单列表 */
  LoginWhiteCombinedInfos: LoginWhiteCombinedInfo[] | null;
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
  /** 过滤条件 IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选 */
  Filters?: AssetFilters[];
}

declare interface DescribeLoginWhiteHostListResponse {
  /** 总数 */
  TotalCount: number;
  /** 服务器列表 */
  Hosts: HostDesc[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoginWhiteListRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 查询关键字 UserName - String - 是否必填：否 - 用户名筛选 ModifyBeginTime - String - 是否必填：否 - 按照修改时间段筛选，开始时间 ModifyEndTime - String - 是否必填：否 - 按照修改时间段筛选，结束时间 */
  Filters?: Filter[];
}

declare interface DescribeLoginWhiteListResponse {
  /** 记录总数 */
  TotalCount: number;
  /** 异地登录白名单数组 */
  LoginWhiteLists: LoginWhiteLists[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineClearHistoryRequest {
  /** 筛选条件多个条件筛选时 Keywords,TimeBetween,取交集 Keywords 实例名称/内网/公网IP TimeBetween 时间区间 */
  Filters?: Filters[];
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

declare interface DescribeMachineDefenseCntRequest {
  /** 过滤条件。Uuids- String - 是否必填：否 - 主机uuid */
  Filters?: Filter[];
}

declare interface DescribeMachineDefenseCntResponse {
  /** 攻击检测统计 */
  AttackLogs: number;
  /** 核心文件监控统计 */
  FileTamper: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineFileTamperRulesRequest {
  /** 主机uuid */
  Uuid: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeMachineFileTamperRulesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 查询主机相关核心文件监控规则详情 */
  List?: MachineFileTamperRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineGeneralRequest {
}

declare interface DescribeMachineGeneralResponse {
  /** 资产总数 */
  MachineCnt: number;
  /** 腾讯云服务商机器数 */
  TencentCloudMachineCnt: number;
  /** 阿里云服务商机器数 */
  AliCloudMachineCnt: number;
  /** 百度云服务商机器数 */
  BaiduCloudMachineCnt: number;
  /** IDC机器数 */
  IDCMachineCnt: number;
  /** 其他云服务商机器数 */
  OtherCloudMachineCnt: number;
  /** 已防护机器数 */
  ProtectMachineCnt: number;
  /** 已防护基础版机器数 */
  BaseMachineCnt: number;
  /** 已防护专业版机器数 */
  SpecialtyMachineCnt: number;
  /** 已防护旗舰版机器数 */
  FlagshipMachineCnt: number;
  /** 存在风险的机器数 */
  RiskMachineCnt: number;
  /** 比较昨日风险机器数 */
  CompareYesterdayRiskMachineCnt: number;
  /** 比较昨日未防护机器数 */
  CompareYesterdayNotProtectMachineCnt: number;
  /** 比较昨日即将到期的机器数 */
  CompareYesterdayDeadlineMachineCnt: number;
  /** 即将到期的机器数 */
  DeadlineMachineCnt: number;
  /** 未防护机器数 */
  NotProtectMachineCnt: number;
  /** 已防护普惠版机器数（Lighthouse机器） */
  LHGeneralDiscountCnt: number;
  /** 比较昨日新增的主机数 */
  CompareYesterdayMachineCnt: number;
  /** 自动清理时间,最大720小时,最小0, 默认0 ,0=关闭 */
  MachineDestroyAfterOfflineHours: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineInfoRequest {
  /** 主机安全客户端唯一Uuid。 */
  Uuid?: string;
  /** Quuid , Uuid 必填一项 */
  Quuid?: string;
}

declare interface DescribeMachineInfoResponse {
  /** 机器ip。 */
  MachineIp?: string;
  /** 受主机安全保护天数。 */
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
  /** 主机安全客户端唯一Uuid。 */
  Uuid?: string;
  /** 是否开通专业版。true：是false：否 */
  IsProVersion?: boolean;
  /** 专业版开通时间。 */
  ProVersionOpenDate?: string;
  /** 云服务器类型。CVM: 腾讯云服务器BM: 黑石物理机ECM: 边缘计算服务器LH: 轻量应用服务器Other: 混合云机器 */
  MachineType?: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion?: string;
  /** 主机状态。POSTPAY: 表示后付费，即按量计费 PREPAY: 表示预付费，即包年包月 */
  PayMode?: string;
  /** 免费木马剩余检测数量。 */
  FreeMalwaresLeft?: number;
  /** 免费漏洞剩余检测数量。 */
  FreeVulsLeft?: number;
  /** agent版本号 */
  AgentVersion?: string;
  /** 专业版到期时间(仅预付费) */
  ProVersionDeadline?: string;
  /** 是否有资产扫描记录，0无，1有 */
  HasAssetScan?: number;
  /** 防护版本：BASIC_VERSION 基础版，PRO_VERSION 专业版，Flagship 旗舰版，GENERAL_DISCOUNT 普惠版 */
  ProtectType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineLicenseDetailRequest {
  /** 主机quuid */
  Quuids: string[];
}

declare interface DescribeMachineLicenseDetailResponse {
  /** 授权信息 */
  MachineLicense: MachineLicenseDetail[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineListRequest {
  /** 云主机类型。CVM：表示虚拟主机BM: 表示黑石物理机ECM: 表示边缘计算服务器LH: 表示轻量应用服务器Other: 表示混合云机器 */
  MachineType: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字 Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装）Version - String 是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）每个过滤条件只支持一个值，暂不支持多个值“或”关系查询 */
  Filters?: AssetFilters[];
}

declare interface DescribeMachineListResponse {
  /** 主机列表 */
  Machines: Machine[];
  /** 主机数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineOsListRequest {
}

declare interface DescribeMachineOsListResponse {
  /** 操作系统列表 */
  List: OsName[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineRegionListRequest {
}

declare interface DescribeMachineRegionListResponse {
  /** 云服务器类型地域列表 */
  RegionList?: RegionListDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineRegionsRequest {
}

declare interface DescribeMachineRegionsResponse {
  /** CVM 云服务器地域列表 */
  CVM: RegionInfo[];
  /** BM 黑石机器地域列表 */
  BM: RegionInfo[];
  /** LH 轻量应用服务器地域列表 */
  LH: RegionInfo[];
  /** ECM 边缘计算服务器地域列表 */
  ECM: RegionInfo[];
  /** Other 混合云地域列表 */
  Other: RegionInfo[];
  /** 所有地域列表(包含以上所有地域) */
  ALL: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineRiskCntRequest {
  /** 过滤条件。Uuids- String - 是否必填：否 - 主机uuid */
  Filters?: Filter[];
}

declare interface DescribeMachineRiskCntResponse {
  /** 异地登录 */
  HostLogin: number;
  /** 密码破解 */
  BruteAttack: number;
  /** 恶意请求 */
  MaliciousRequest: number;
  /** 反弹shell */
  ReverseShell: number;
  /** 高危命令 */
  Bash: number;
  /** 本地提权 */
  PrivilegeEscalation: number;
  /** 木马 */
  Malware: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineSnapshotRequest {
  /** cvm id 集合 */
  Quuids: string[];
  /** 查询快照类型0 最近一个 1所有 */
  Type: number;
  /** 分页个数 */
  Limit: number;
  /** 分页步长 */
  Offset: number;
}

declare interface DescribeMachineSnapshotResponse {
  /** 主机快照列表 */
  List: MachineSnapshotInfo[];
  /** 总个数 */
  TotalCount: number;
  /** 是否都有24小时内创建的快照 */
  SnapshotCheck: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachinesRequest {
  /** 机器所属专区类型 CVM 云服务器BM 黑石ECM 边缘计算LH 轻量应用服务器Other 混合云专区 */
  MachineType: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Ips - String - 是否必填：否 - 通过ip查询 Names - String - 是否必填：否 - 通过实例名查询 InstanceIds - String - 是否必填：否 - 通过实例id查询 Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线/关机 | ONLINE: 在线 | UNINSTALLED：未安装 | AGENT_OFFLINE 离线| AGENT_SHUTDOWN 已关机）Version - String 是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版）Risk - String 是否必填: 否 - 风险主机( yes ) Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )每个过滤条件只支持一个值，暂不支持多个值“或”关系查询Quuid - String - 是否必填: 否 - 云服务器uuid 最大100条.AddedOnTheFifteen- String 是否必填: 否 - 是否只查询15天内新增的主机( 1：是) TagId- String 是否必填: 否 - 查询指定标签关联的主机列表 */
  Filters?: Filter[];
  /** 机器所属业务ID列表 */
  ProjectIds?: number[];
}

declare interface DescribeMachinesResponse {
  /** 主机列表 */
  Machines?: Machine[];
  /** 主机数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachinesSimpleRequest {
  /** 机器所属专区类型 CVM 云服务器BM 黑石ECM 边缘计算LH 轻量应用服务器Other 混合云专区 */
  MachineType: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字 Version - String 是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版 | UnFlagship : 非旗舰版 | PRO_POST_PAY：专业版按量计费 | PRO_PRE_PAY：专业版包年包月）TagId - String - 是否必填：否 - 标签ID */
  Filters?: Filter[];
  /** 机器所属业务ID列表 */
  ProjectIds?: number[];
}

declare interface DescribeMachinesSimpleResponse {
  /** 主机列表 */
  Machines: MachineSimple[];
  /** 主机数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalWareListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选FilePath - String - 是否必填：否 - 路径筛选VirusName - String - 是否必填：否 - 描述筛选CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中,14 已处理 */
  Filters?: Filter[];
  /** 检测排序 CreateTime */
  By?: string;
  /** 排序方式 ASC,DESC */
  Order?: string;
}

declare interface DescribeMalWareListResponse {
  /** 木马列表 */
  MalWareList?: MalWareList[] | null;
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMaliciousRequestWhiteListRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit: number;
  /** 偏移量，默认为0。 */
  Offset: number;
  /** 过滤条件。Domain - String - 基线名称 */
  Filters?: Filters[];
  /** 排序方式 [asc:升序|desc:降序] */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeMaliciousRequestWhiteListResponse {
  /** 白名单信息列表 */
  List?: MaliciousRequestWhiteListInfo[] | null;
  /** 分页查询记录总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareFileRequest {
  /** 木马记录ID */
  Id: number;
}

declare interface DescribeMalwareFileResponse {
  /** 木马文件下载地址 */
  FileUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareInfoRequest {
  /** 唯一ID */
  Id: number;
}

declare interface DescribeMalwareInfoResponse {
  /** 恶意文件详情信息 */
  MalwareInfo: MalwareInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareRiskOverviewRequest {
}

declare interface DescribeMalwareRiskOverviewResponse {
  /** 无 */
  Data: MalwareRiskOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareRiskWarningRequest {
}

declare interface DescribeMalwareRiskWarningResponse {
  /** 是否开启自动扫描：true-开启，false-未开启 */
  IsCheckRisk: boolean;
  /** 风险文件列表信息 */
  List: MalwareRisk[] | null;
  /** 是否弹出提示 true 弹出, false不弹 */
  IsPop: boolean;
  /** 异常进程列表信息 */
  ProcessList: MalwareRisk[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareTimingScanSettingRequest {
}

declare interface DescribeMalwareTimingScanSettingResponse {
  /** 检测模式 0 全盘检测 1快速检测 */
  CheckPattern?: number;
  /** 检测周期 开始时间 */
  StartTime?: string;
  /** 检测周期 超时结束时间 */
  EndTime?: string;
  /** 是否全部服务器 1 全部 2 自选 */
  IsGlobal?: number;
  /** 自选服务器时必须 主机quuid的string数组 */
  QuuidList?: string[] | null;
  /** 监控模式 0 标准 1深度 */
  MonitoringPattern?: number;
  /** 周期 1每天 */
  Cycle?: number;
  /** 定时检测开关 0 关闭1 开启 */
  EnableScan?: number;
  /** 唯一ID */
  Id?: number;
  /** 实时监控0 关闭 1开启 */
  RealTimeMonitoring?: number;
  /** 是否自动隔离：1-是，0-否 */
  AutoIsolation?: number;
  /** 一键扫描超时时长，如：1800秒（s） */
  ClickTimeout?: number;
  /** 是否杀掉进程 1杀掉 0不杀掉 只有开启自动隔离才生效 */
  KillProcess?: number;
  /** 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示） */
  EngineType?: number;
  /** 启发引擎 0 关闭 1开启 */
  EnableInspiredEngine?: number;
  /** 是否开启恶意进程查杀[0:未开启,1:开启] */
  EnableMemShellScan?: number;
  /** 防护模式 0 标准 1 重保 */
  ProtectMode?: number;
  /** 查杀范围 0 脚本类之外的恶意文件，1全部恶意文件 */
  ProtectFileScope?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareWhiteListAffectListRequest {
  /** 白名单规则id */
  WhiteListId: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 过滤条件。HostIp - String - 是否必填：否 - 主机ip查询 FileName - String - 是否必填：否 - 文件名称查询 FileDirectory - String - 是否必填：否 - 文件目录查询 FileExtension - String - 是否必填：否 - 文件后缀查询 Mode - String - 是否必填：否 - 规则类型 0 MD5,1自定义Md5 - String - 是否必填：否 - MD5查询 */
  Filters?: Filter[];
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [CreateTime] */
  By?: string;
}

declare interface DescribeMalwareWhiteListAffectListResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 白名单规则影响事件列表 */
  AffectList: MalwareWhiteListAffectEvent[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMalwareWhiteListRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 过滤条件。HostIp - String - 是否必填：否 - 主机ip查询 FileName - String - 是否必填：否 - 文件名称查询 FileDirectory - String - 是否必填：否 - 文件目录查询 FileExtension - String - 是否必填：否 - 文件后缀查询 Mode - String - 是否必填：否 - 规则类型 0 MD5,1自定义Md5 - String - 是否必填：否 - MD5查询 */
  Filters?: Filter[];
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [EventsCount] */
  By?: string;
}

declare interface DescribeMalwareWhiteListResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 白名单列表 */
  WhiteList: MalwareWhiteListInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonthInspectionReportRequest {
  /** 分页大小 */
  Limit: number;
  /** 分页步长 */
  Offset: number;
}

declare interface DescribeMonthInspectionReportResponse {
  /** 总条数 */
  TotalCount: number;
  /** 巡检报告列表 */
  List: MonthInspectionReport[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetAttackSettingRequest {
}

declare interface DescribeNetAttackSettingResponse {
  /** 0 关闭网络攻击检测，1开启网络攻击检测 */
  NetAttackEnable?: number;
  /** 0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略 */
  NetAttackAlarmStatus?: number;
  /** 1 全部旗舰版主机，0 InstanceIds列表主机 */
  Scope?: number;
  /** 自选主机 */
  InstanceIds?: string[] | null;
  /** 自选排除主机 */
  ExcludeInstanceIds?: string[] | null;
  /** 新增资产自动包含 0 不包含 1包含 */
  AutoInclude?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetAttackWhiteListRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 过滤条件。IP - String - 是否必填：否 - 主机ip查询 SrcIP- String - 是否必填：否 - 白名单ip查询 */
  Filters?: Filter[];
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [CreateTime] */
  By?: string;
}

declare interface DescribeNetAttackWhiteListResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 白名单列表 */
  WhiteList?: NetAttackWhiteRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount: number;
  /** 端口统计数据列表 */
  OpenPortStatistics: OpenPortStatistics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewStatisticsRequest {
}

declare interface DescribeOverviewStatisticsResponse {
  /** 服务器在线数。 */
  OnlineMachineNum: number;
  /** 专业服务器数。 */
  ProVersionMachineNum: number;
  /** 木马文件数。 */
  MalwareNum: number;
  /** 异地登录数。 */
  NonlocalLoginNum: number;
  /** 暴力破解成功数。 */
  BruteAttackSuccessNum: number;
  /** 漏洞数。 */
  VulNum: number;
  /** 安全基线数。 */
  BaseLineNum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivilegeEventInfoRequest {
  /** 事件id */
  Id: number;
}

declare interface DescribePrivilegeEventInfoResponse {
  /** 本地提权详情 */
  PrivilegeEventInfo: PrivilegeEventInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivilegeEventsRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键词(主机IP) */
  Filters?: Filter[];
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：CreateTime-发现时间 */
  By?: string;
}

declare interface DescribePrivilegeEventsResponse {
  /** 数据列表 */
  List: PrivilegeEscalationProcess[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivilegeRulesRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键字(进程名称) */
  Filters?: Filter[];
}

declare interface DescribePrivilegeRulesResponse {
  /** 列表内容 */
  List: PrivilegeRule[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProVersionInfoRequest {
}

declare interface DescribeProVersionInfoResponse {
  /** 后付费昨日扣费 */
  PostPayCost: number;
  /** 新增主机是否自动开通专业版 */
  IsAutoOpenProVersion: boolean;
  /** 开通专业版主机数 */
  ProVersionNum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProVersionStatusRequest {
  /** 主机安全客户端UUID、填写"all"表示所有主机。 */
  Uuid: string;
}

declare interface DescribeProVersionStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount: number;
  /** 进程统计列表数据数组。 */
  ProcessStatistics: ProcessStatistics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductStatusRequest {
}

declare interface DescribeProductStatusResponse {
  /** 接口调用返回状态码 */
  ReturnCode?: number;
  /** 接口调用返回信息 */
  ReturnMsg?: string;
  /** 防护状态及试用信息 */
  Data?: ProductStatusInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProtectDirListRequest {
  /** 分页条数 最大100条 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** DirName 网站名称DirPath 网站防护目录地址 */
  Filters?: AssetFilters[];
  /** asc：升序/desc：降序 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeProtectDirListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 防护目录列表信息 */
  List?: ProtectDirInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProtectDirRelatedServerRequest {
  /** 唯一ID */
  Id: string;
  /** 分页条数 最大100条 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 过滤参数 ProtectStatus */
  Filters?: Filter[];
  /** 排序方式 */
  Order?: string;
  /** 排序值 */
  By?: string;
}

declare interface DescribeProtectDirRelatedServerResponse {
  /** 网站关联服务器列表信息 */
  List: ProtectDirRelatedServer[];
  /** 总数 */
  TotalCount: number;
  /** 已开启防护总数 */
  ProtectServerCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProtectNetListRequest {
  /** 过滤条件。Keyword- String - 是否必填：否 - 关键词过滤，Uuids - String - 是否必填：否 - 主机id过滤 */
  Filters?: Filters[];
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 排序步长 */
  Offset?: number;
  /** 排序方法 */
  Order?: string;
  /** 排序字段 StartTime，EndTime */
  By?: string;
}

declare interface DescribeProtectNetListResponse {
  /** 总条数 */
  TotalCount: number;
  /** 安全管家数据 */
  List: ProtectNetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicProxyInstallCommandRequest {
  /** nginx主机IP列表，逗号分隔 */
  Ip?: string;
}

declare interface DescribePublicProxyInstallCommandResponse {
  /** Nginx安装命令 */
  NginxCommand?: string;
  /** Keepalived安装命令 */
  KeepAliveCommand?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseBackupListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 主机Quuid */
  Quuid: string;
  /** 过滤条件。Status - Int - 是否必填：否 - 通过勒索状态查询：0未勒索，1已勒索 CreateTimeBegin - string - 是否必填：否 - 创建时间开始 CreateTimeEnd - string - 是否必填：否 - 创建时间结束 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime */
  By?: string;
}

declare interface DescribeRansomDefenseBackupListResponse {
  /** 备份列表 */
  List: RansomDefenseBackup[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseEventsListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 过滤条件。HostName- string- 主机名称Status - Uint64 - 0待处理，1已处理，2已信任HostIp- String - 主机ip */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime */
  By?: string;
}

declare interface DescribeRansomDefenseEventsListResponse {
  /** 事件列表 */
  List: RansomDefenseEvent[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseMachineListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 过滤条件。Ips - String - 是否必填：否 - 通过ip查询 MachineNames - String - 是否必填：否 - 通过实例名查询 Names - String - 是否必填：否 - 通过策略名查询 Status - String - 是否必填：否 - 策略状态：0备份中，1备份成功，2备份失败, 9暂无备份 LastBackupStatus - String - 是否必填：否 - 上次备份状态：0备份中，1备份成功，2备份失败, 9暂无备份 LastBackupTimeBegin - String - 是否必填：否 - 最近一次备份时间开始LastBackupTimeEnd - String - 是否必填：否 - 最近一次备份时间结束 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime、LastBackupTime、BackupCount */
  By?: string;
}

declare interface DescribeRansomDefenseMachineListResponse {
  /** 主机列表 */
  List: RansomDefenseStrategyMachineBackupInfo[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseMachineStrategyInfoRequest {
  /** 主机Quuid列表 */
  Quuids: string[];
}

declare interface DescribeRansomDefenseMachineStrategyInfoResponse {
  /** 策略ID列表,0表示未绑定任何策略 */
  StrategyIds: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseRollBackTaskListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 过滤条件。Ips- string- 主机名称Status - Uint64 - 0进行中，1成功，2失败Names- String - 主机名称 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime、ModifyTime */
  By?: string;
}

declare interface DescribeRansomDefenseRollBackTaskListResponse {
  /** 任务列表 */
  List: RansomDefenseRollbackTask[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseStateRequest {
}

declare interface DescribeRansomDefenseStateResponse {
  /** 已开启防御策略数量 */
  StrategyCount: number;
  /** 已开启防御机器数 */
  MachineCount: number;
  /** 快照总容量 */
  SnapshotSize: number;
  /** 恢复备份任务数量 */
  RollBackTaskCount: number;
  /** 进行中的创建快照任务数 */
  ProgressingSnapshotTaskCount: number;
  /** 进行中的恢复备份任务数 */
  ProgressingRollBackTaskCount: number;
  /** 机器总数 */
  MachineTotal: number;
  /** 策略总数 */
  StrategyTotal: number;
  /** 账户状态：0未欠费，1已欠费 */
  BalanceStatus: number;
  /** 已备份主机数 */
  BackupMachineCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseStrategyDetailRequest {
  /** 策略ID */
  Id: number;
}

declare interface DescribeRansomDefenseStrategyDetailResponse {
  /** 策略详情 */
  Strategy: RansomDefenseStrategyDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseStrategyListRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 过滤条件。Ips - String - 是否必填：否 - 通过ip查询 MachineNames - String - 是否必填：否 - 通过实例名查询 Names - String - 是否必填：否 - 通过防勒索策略名查询 Dirs - String - 是否必填：否 - 诱饵目录 Status - String - 是否必填：否 - 策略状态：0关闭，1开启 BackupType - String - 是否必填：否 - 备份模式：0-按周;1-按天 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime, MachineCount */
  By?: string;
}

declare interface DescribeRansomDefenseStrategyListResponse {
  /** 策略列表 */
  List?: RansomDefenseStrategy[] | null;
  /** 分页查询记录总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseStrategyMachinesRequest {
  /** 分页参数 最大100条 */
  Limit: number;
  /** 分页参数 */
  Offset: number;
  /** 过滤条件。Ips- string- 主机名称Status - Uint64 - 0未绑定，1已绑定Names- String - 主机名称 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime */
  By?: string;
  /** 防勒索策略ID */
  Id?: number;
}

declare interface DescribeRansomDefenseStrategyMachinesResponse {
  /** 主机列表 */
  List: RansomDefenseStrategyMachineDetail[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRansomDefenseTrendRequest {
}

declare interface DescribeRansomDefenseTrendResponse {
  /** 勒索事件数量 */
  EventCount: number;
  /** 影响行业数量 */
  IndustryCount: number;
  /** 开通勒索的公司数量 */
  CompanyCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecommendedProtectCpuRequest {
}

declare interface DescribeRecommendedProtectCpuResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReverseShellEventInfoRequest {
  /** 事件id */
  Id: number;
}

declare interface DescribeReverseShellEventInfoResponse {
  /** 反弹shell详情信息 */
  ReverseShellEventInfo: ReverseShellEventInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReverseShellEventsRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords - String - 是否必填：否 - 关键字(主机内网IP|进程名) */
  Filters?: Filter[];
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：CreateTime-发生时间 */
  By?: string;
}

declare interface DescribeReverseShellEventsResponse {
  /** 列表内容 */
  List: ReverseShell[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List: ReverseShellRule[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskBatchStatusRequest {
  /** 操作事件类型，文件查杀：MALWARE，异常登录：HOST_LOGIN，密码破解：BRUTE_ATTACK，恶意请求：MALICIOUS_REQUEST，高危命令：BASH_EVENT，本地提权：PRIVILEGE_EVENT，反弹shell：REVERSE_SHELL */
  RiskType: string;
}

declare interface DescribeRiskBatchStatusResponse {
  /** Handling:正在执行删除操作，Pending：没有任务执行 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskDnsEventInfoRequest {
  /** 恶意请求事件Id */
  Id: number;
}

declare interface DescribeRiskDnsEventInfoResponse {
  /** 恶意请求事件详情 */
  Info: RiskDnsEvent | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskDnsEventListRequest {
  /** IpOrName - String - 是否必填：否 - 主机Ip或别名筛选HostId - String - 是否必填：否 - 主机IdAgentId - String - 是否必填：否 - 客户端IdPolicyType - String - 是否必填：否 - 策略类型,0:系统策略1:用户自定义策略Domain - String - 是否必填：否 - 域名(先对域名做urlencode,再base64)HandleStatus - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任BeginTime - String - 是否必填：否 - 最近访问开始时间EndTime - String - 是否必填：否 - 最近访问结束时间 */
  Filters?: Filter[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：根据请求次数排序：[asc:升序|desc:降序] */
  Order?: string;
  /** 排序字段：[AccessCount:请求次数|LastTime:最近请求时间] */
  By?: string;
}

declare interface DescribeRiskDnsEventListResponse {
  /** 恶意请求事件列表 */
  List: RiskDnsEvent[] | null;
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskDnsInfoRequest {
  /** 恶意请求-事件Id */
  Id: number;
}

declare interface DescribeRiskDnsInfoResponse {
  /** 恶意请求事件详情 */
  RiskDnsInfo?: RiskDnsList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskDnsListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Url - String - 是否必填：否 - Url筛选Status - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任MergeBeginTime - String - 是否必填：否 - 最近访问开始时间MergeEndTime - String - 是否必填：否 - 最近访问结束时间 */
  Filters?: Filter[];
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：AccessCount-请求次数。MergeTime-最近请求时间 */
  By?: string;
}

declare interface DescribeRiskDnsListResponse {
  /** 恶意请求列表数组 */
  RiskDnsList: RiskDnsList[] | null;
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskDnsPolicyListRequest {
  /** PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [HostScope|UpdateTime] */
  By?: string;
}

declare interface DescribeRiskDnsPolicyListResponse {
  /** 总数 */
  TotalCount: number;
  /** 列表 */
  List: RiskDnsPolicy[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskProcessEventsRequest {
  /** 过滤条件。HostId - String - 是否必填：否 - 主机IDIpOrName - String - 是否必填：否 - 主机IP或主机名VirusName - String - 是否必填：否 - 病毒名ProcessId - String - 是否必填：否 - 进程IDFilePath - String - 是否必填：否 - 进程路径BeginTime - String - 是否必填：否 - 进程启动时间-开始EndTime - String - 是否必填：否 - 进程启动时间-结束Status - String - 是否必填：否 - 状态筛选 0待处理；1查杀中；2已查杀；3已退出;4已信任 */
  Filters?: Filter[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式 [ASC|DESC] */
  Order?: string;
  /** [StartTime:进程启动时间|DetectTime:最后检测时间] */
  By?: string;
}

declare interface DescribeRiskProcessEventsResponse {
  /** 总数量 */
  TotalCount: number;
  /** 异常进程列表 */
  List: RiskProcessEvent[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSafeInfoRequest {
}

declare interface DescribeSafeInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanMalwareScheduleRequest {
}

declare interface DescribeScanMalwareScheduleResponse {
  /** 扫描进度（单位：%） */
  Schedule: number;
  /** 风险文件数,当进度满了以后才有该值 */
  RiskFileNumber: number;
  /** 是否正在扫描中 */
  IsSchedule: boolean;
  /** 0 从未扫描过、 1 扫描中、 2扫描完成、 3停止中、 4停止完成 */
  ScanStatus: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanScheduleRequest {
  /** 任务id */
  TaskId: number;
}

declare interface DescribeScanScheduleResponse {
  /** 检测进度 */
  Schedule: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanStateRequest {
  /** 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线 */
  ModuleType: string;
  /** 过滤参数;StrategyId 基线策略ID ,仅ModuleType 为 Baseline 时需要 */
  Filters?: Filters[];
}

declare interface DescribeScanStateResponse {
  /** 0 从未扫描过、 1 扫描中、 2扫描完成、 3停止中、 4停止完成 */
  ScanState: number;
  /** 扫描进度 */
  Schedule: number;
  /** 任务Id */
  TaskId: number;
  /** 任务扫描的漏洞id */
  VulId: number[];
  /** 0一键检测 1定时检测 */
  Type: number;
  /** 开始扫描时间 */
  ScanBeginTime: string | null;
  /** 扫描漏洞数 */
  RiskEventCount: number | null;
  /** 扫描结束时间 */
  ScanEndTime: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanTaskDetailsRequest {
  /** 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线 */
  ModuleType: string;
  /** 任务ID */
  TaskId: number;
  /** 过滤参数 */
  Filters?: Filters[];
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeScanTaskDetailsResponse {
  /** 扫描任务信息列表 */
  ScanTaskDetailList: ScanTaskDetails[];
  /** 总数 */
  TotalCount: number;
  /** 扫描机器总数 */
  ScanMachineCount: number;
  /** 发现风险机器数 */
  RiskMachineCount: number;
  /** 扫描开始时间 */
  ScanBeginTime: string;
  /** 扫描结束时间 */
  ScanEndTime: string;
  /** 检测时间 */
  ScanTime: number;
  /** 扫描进度 */
  ScanProgress: number;
  /** 扫描剩余时间 */
  ScanLeftTime: number;
  /** 扫描内容 */
  ScanContent: string[];
  /** 漏洞信息 */
  VulInfo: VulDetailInfo[] | null;
  /** 风险事件个数 */
  RiskEventCount: number | null;
  /** 0一键检测 1定时检测 */
  Type: number | null;
  /** 任务是否全部正在被停止 ture是 */
  StoppingAll: boolean | null;
  /** 扫描出漏洞个数 */
  VulCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanTaskStatusRequest {
  /** 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线 */
  ModuleType: string;
}

declare interface DescribeScanTaskStatusResponse {
  /** 任务扫描状态列表 */
  State: TaskStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanVulSettingRequest {
}

declare interface DescribeScanVulSettingResponse {
  /** 漏洞类型：1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 */
  VulCategories?: string;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文逗号分隔) */
  VulLevels?: string;
  /** 定期检测间隔时间（天） */
  TimerInterval?: number;
  /** 定期检测时间，如：00:00 */
  TimerTime?: string;
  /** 是否紧急漏洞：0-否 1-是 */
  VulEmergency?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 是否开启 */
  EnableScan?: number;
  /** 结束时间 */
  EndTime?: string;
  /** 一键扫描超时时长，如：1800秒（s） */
  ClickTimeout?: number;
  /** 为空默认扫描全部专业版、旗舰版、普惠版主机，不为空只扫描选中主机 */
  Uuids?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenAttackHotspotRequest {
}

declare interface DescribeScreenAttackHotspotResponse {
  /** 攻击热点列表 */
  List: ScreenAttackHotspot[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenBroadcastsRequest {
}

declare interface DescribeScreenBroadcastsResponse {
  /** 播报文章列表 */
  List: ScreenBroadcasts[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenDefenseTrendsRequest {
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface DescribeScreenDefenseTrendsResponse {
  /** 统计详情图标数据 */
  TrendsChart: ScreenTrendsChart[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenEmergentMsgRequest {
}

declare interface DescribeScreenEmergentMsgResponse {
  /** 通知内容 */
  MessageInfo: ScreenEmergentMsg[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenEventsCntRequest {
  /** 数据类型：0:待处理风险总数 1:影响资产总数，默认为0 */
  BusinessType?: number;
}

declare interface DescribeScreenEventsCntResponse {
  /** 事件统计详情 */
  Info: ScreenEventsCnt[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenGeneralStatRequest {
}

declare interface DescribeScreenGeneralStatResponse {
  /** name 的值: 在线，关机/离线,未安装，value : 表示对应的数量 */
  Machines: ScreenNameValue[];
  /** name 的值: 旗舰版，专业版，基础版value : 表示对应的数量 */
  Protection: ScreenNameValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenHostInvasionRequest {
  /** 主机quuid */
  Quuid: string;
}

declare interface DescribeScreenHostInvasionResponse {
  /** 网络攻击事件列表 */
  DefendAttackLog: ScreenDefendAttackLog[];
  /** 入侵检测事件列表 */
  InvasionEvents: ScreenInvasion[];
  /** 漏洞事件列表 */
  Vul: ScreenVulInfo[];
  /** 基线事件列表 */
  Baseline: ScreenBaselineInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenMachineRegionsRequest {
}

declare interface DescribeScreenMachineRegionsResponse {
  /** 列表详情 */
  List: ScreenRegionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenMachinesRequest {
  /** 主机区域 */
  MachineRegion?: string;
  /** IP 支持内网IP,主机别名 */
  MachineIpOrAlias?: string;
  /** 风险状态类型：0：全部类型，1：风险主机，2：潜在风险主机 ， 3：已关机/离线主机，4：无风险主机 */
  SecurityStatus?: number;
}

declare interface DescribeScreenMachinesResponse {
  /** 列表详情 */
  List: ScreenRegionMachines[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenProtectionCntRequest {
}

declare interface DescribeScreenProtectionCntResponse {
  /** 主机安全防护引擎介绍 内容 */
  List: ScreenProtectionCnt[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenProtectionStatRequest {
}

declare interface DescribeScreenProtectionStatResponse {
  /** 文件查杀 status: 0:从未检测过，或0资产付费情况, 1:已检测，存在恶意文件, 2:已检测，未开启隔离防护, 3:已检测且已开启防护且无风险暴力破解status: 0:未开启防护或0付费资产情况 1:已开启防护 2:存在带处理事件漏洞扫描status: 0:从未检测过，或0资产付费情况, 1:存在漏洞风险, 2:无风险基线检测status: 0:从未检测过，或0资产付费情况, 1:存在基线风险,2:无风险 */
  Info: ScreenProtection[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenRiskAssetsTopRequest {
  /** 统计类型：0:潜在威胁 1:失陷 2:漏洞 3:基线 */
  BusinessType: number;
}

declare interface DescribeScreenRiskAssetsTopResponse {
  /** 统计详情图标数据 Name：展示主机ip 和地域， value：事件数量 */
  Chart: ScreenNameValue[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSearchLogsRequest {
}

declare interface DescribeSearchLogsResponse {
  /** 历史搜索记录 保留最新的10条 */
  Data: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSearchTemplatesRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
}

declare interface DescribeSearchTemplatesResponse {
  /** 总数 */
  TotalCount: number;
  /** 模板列表 */
  List: SearchTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityBroadcastInfoRequest {
  /** 文章id */
  Id: number;
}

declare interface DescribeSecurityBroadcastInfoResponse {
  /** 安全播报文章详情 */
  BroadcastInfo: BroadcastInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityBroadcastsRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10 ，0=全部 */
  Limit?: number;
  /** 筛选发布日期：开始时间 */
  BeginDate?: string;
  /** 筛选发布日期：结束时间 */
  EndDate?: string;
  /** 过滤安全播报类型：0-紧急通知，1-功能更新，2-行业荣誉，3-版本发布 */
  BroadcastType?: string;
}

declare interface DescribeSecurityBroadcastsResponse {
  /** 列表 */
  List: Broadcasts[];
  /** 总共多少条 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityDynamicsRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeSecurityDynamicsResponse {
  /** 安全事件消息数组。 */
  SecurityDynamics: SecurityDynamic[];
  /** 记录总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityEventStatRequest {
  /** 该接口无过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeSecurityEventStatResponse {
  /** 木马事件统计 */
  MalwareStat: EventStat;
  /** 异地事件统计 */
  HostLoginStat: EventStat;
  /** 爆破事件统计 */
  BruteAttackStat: EventStat;
  /** 恶意请求事件统计 */
  MaliciousRequestStat: EventStat;
  /** 本地提权事件统计 */
  PrivilegeStat: EventStat;
  /** 反弹Shell事件统计 */
  ReverseShellStat: EventStat;
  /** 高危命令事件统计 */
  HighRiskBashStat: EventStat;
  /** 网络攻击事件统计 */
  AttackLogsStat: EventStat;
  /** 高危漏洞事件统计 */
  VulHighStat: EventStat;
  /** 中危漏洞事件统计 */
  VulNormalStat: EventStat;
  /** 低危漏洞事件统计 */
  VulLowStat: EventStat;
  /** 高危基线漏洞事件统计 */
  BaselineHighStat: EventStat;
  /** 中危基线漏事件统计 */
  BaselineNormalStat: EventStat;
  /** 低危基线漏事件统计 */
  BaselineLowStat: EventStat;
  /** 有未处理安全事件的机器总数 */
  MachineTotalAffectNum: number;
  /** 有未处理入侵安全事件的机器总数 */
  InvasionTotalAffectNum: number;
  /** 有未处理漏洞安全事件的机器总数 */
  VulTotalAffectNum: number;
  /** 有未处理基线安全事件的机器总数 */
  BaseLineTotalAffectNum: number;
  /** 有未处理网络攻击安全事件的机器总数 */
  CyberAttackTotalAffectNum: number;
  /** 严重漏洞事件统计 */
  VulRiskStat: EventStat;
  /** 严重基线漏洞事件统计 */
  BaselineRiskStat: EventStat;
  /** 漏洞数统计 */
  VulStat: EventStat;
  /** 安全得分 */
  Score: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityEventsCntRequest {
}

declare interface DescribeSecurityEventsCntResponse {
  /** 木马文件相关风险事件 */
  Malware: SecurityEventInfo;
  /** 登录审计相关风险事件 */
  HostLogin: SecurityEventInfo;
  /** 密码破解相关风险事件 */
  BruteAttack: SecurityEventInfo;
  /** 恶意请求相关风险事件 */
  RiskDns: SecurityEventInfo;
  /** 高危命令相关风险事件 */
  Bash: SecurityEventInfo;
  /** 本地提权相关风险事件 */
  PrivilegeRules: SecurityEventInfo;
  /** 反弹Shell相关风险事件 */
  ReverseShell: SecurityEventInfo;
  /** 应用漏洞风险事件 */
  SysVul: SecurityEventInfo;
  /** Web应用漏洞相关风险事件 */
  WebVul: SecurityEventInfo;
  /** 应急漏洞相关风险事件 */
  EmergencyVul: SecurityEventInfo;
  /** 安全基线相关风险事件 */
  BaseLine: SecurityEventInfo;
  /** 攻击检测相关风险事件 */
  AttackLogs: SecurityEventInfo;
  /** 受影响机器数 */
  EffectMachineCount: number;
  /** 所有事件总数 */
  EventsCount: number;
  /** window 系统漏洞事件总数 */
  WindowVul: SecurityEventInfo | null;
  /** linux系统漏洞事件总数 */
  LinuxVul: SecurityEventInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityProtectionStatRequest {
}

declare interface DescribeSecurityProtectionStatResponse {
  /** 0 ：0付费资产情况， 1：存在未安装agent情况 ，2：部分资产已是专业版/旗舰版， 3：全部资产已是专业版/旗舰版 */
  AssetManageStat: number;
  /** 0:从未检测过，或0资产付费情况, 1:存在漏洞风险, 2:无风险 */
  VulManageStat: number;
  /** 0:从未检测过，或0资产付费情况, 1:存在基线风险,2:无风险 */
  SecureBasicLineStat: number;
  /** 0:从未检测过，或0资产付费情况, 1:已检测，存在恶意文件, 2:已检测，未开启隔离防护, 3:已检测且已开启防护且无风险 */
  MalwareScanStat: number;
  /** 密码破解是否开启防护 0:未开启防护或0付费资产情况 1:已开启防护 2:存在带处理事件 */
  DefenseBruteAttackStat: number;
  /** 核心文件监控 0:未开启防护（0付费资产情况）,1: 已开通 */
  FileTamperStat: number;
  /** 网页防篡改 0:未开通, 1:已开通 */
  WebPageStat: number;
  /** 异常登录 0:存在未处理风险,1:无风险，未配置白名单,2:无风险，已配置 */
  LoginLogStat: number;
  /** 检测--密码破解有无存在风险 0:存在未处理风险, 1：无风险，正常检测 */
  DiscoverBruteAttackStat: number;
  /** 恶意请求 0 : 0台开通专业版/旗舰版, 1: 恶意请求 存在未处理风险, 2:已有付费资产，无风险 */
  MaliciousRequestStat: number;
  /** 本地提权 0:0台开通专业版/旗舰版, 1:存在未处理风险 2:已有付费资产，无风险 */
  PrivilegeStat: number;
  /** 反弹shell 0:0台开通专业版/旗舰版, 1:存在未处理风险 2:已有付费资产，无风险 */
  ReverseShellStat: number;
  /** 专家服务 0:未开通服务, 1:已开通 */
  ExpertServiceStat: number;
  /** 日志分析 0:未开通服务, 1:已开通 */
  LogAnalysisStat: number;
  /** 安全告警 0:未开通设置（全部关闭） 1:已开通（只要开启1个就算） */
  WarningSetStat: number;
  /** 高危命令，0：0台开通专业版/旗舰版， 1：存在未处理风险， 2：已有付费资产，无风险 */
  EventBashStat: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityTrendsRequest {
  /** 开始时间，如：2021-07-10 */
  BeginDate: string;
  /** 结束时间，如：2021-07-10 */
  EndDate: string;
}

declare interface DescribeSecurityTrendsResponse {
  /** 木马事件统计数据数组。 */
  Malwares: SecurityTrend[];
  /** 异地登录事件统计数据数组。 */
  NonLocalLoginPlaces: SecurityTrend[];
  /** 密码破解事件统计数据数组。 */
  BruteAttacks: SecurityTrend[];
  /** 漏洞统计数据数组。 */
  Vuls: SecurityTrend[];
  /** 基线统计数据数组。 */
  BaseLines: SecurityTrend[];
  /** 恶意请求统计数据数组。 */
  MaliciousRequests: SecurityTrend[];
  /** 高危命令统计数据数组。 */
  HighRiskBashs: SecurityTrend[];
  /** 反弹shell统计数据数组。 */
  ReverseShells: SecurityTrend[];
  /** 本地提权统计数据数组。 */
  PrivilegeEscalations: SecurityTrend[];
  /** 网络攻击统计数据数组。 */
  CyberAttacks: SecurityTrend[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerRelatedDirInfoRequest {
  /** 唯一ID */
  Id: number;
}

declare interface DescribeServerRelatedDirInfoResponse {
  /** 服务器名称 */
  HostName: string;
  /** 服务器IP */
  HostIp: string;
  /** 防护目录数量 */
  ProtectDirNum: number;
  /** 防护文件数量 */
  ProtectFileNum: number;
  /** 防篡改数量 */
  ProtectTamperNum: number;
  /** 防护软链数量 */
  ProtectLinkNum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServersAndRiskAndFirstInfoRequest {
}

declare interface DescribeServersAndRiskAndFirstInfoResponse {
  /** 风险文件数 */
  RiskFileCount: number;
  /** 今日新增风险文件数 */
  AddRiskFileCount: number;
  /** 受影响服务器台数 */
  ServersCount: number;
  /** 是否试用：true-是，false-否 */
  IsFirstCheck: boolean;
  /** 木马最近检测时间 */
  ScanTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStrategyExistRequest {
  /** 策略名 */
  StrategyName: string;
}

declare interface DescribeStrategyExistResponse {
  /** 策略是否存在, 1是 0否 */
  IfExist: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagMachinesRequest {
  /** 标签ID */
  Id: number;
}

declare interface DescribeTagMachinesResponse {
  /** 列表数据 */
  List: TagMachine[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagsRequest {
  /** 云主机类型。CVM：表示云服务器BM: 表示黑石物理机ECM: 表示边缘计算服务器LH: 表示轻量应用服务器Other: 表示混合云服务器 */
  MachineType?: string;
  /** 机器所属地域。如：ap-guangzhou */
  MachineRegion?: string;
  /** 过滤条件。Keywords - String - 是否必填：否 - 查询关键字(机器名称/机器IP Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线 | ONLINE: 在线 | UNINSTALLED：未安装 | SHUTDOWN 已关机）Version - String 是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版）Risk - String 是否必填: 否 - 风险主机( yes ) Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )每个过滤条件只支持一个值，暂不支持多个值“或”关系查询 */
  Filters?: Filters[];
}

declare interface DescribeTagsResponse {
  /** 列表信息 */
  List: Tag[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrialReportRequest {
}

declare interface DescribeTrialReportResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUndoVulCountsRequest {
  /** 漏洞分类，1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 */
  VulCategory?: number;
  /** 是否应急漏洞筛选, 是 : yes */
  IfEmergency?: string;
}

declare interface DescribeUndoVulCountsResponse {
  /** 未处理的漏洞数 */
  UndoVulCount: number | null;
  /** 未处理的主机数 */
  UndoHostCount: number | null;
  /** 普通版主机数 */
  NotProfessionCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsersConfigRequest {
  /** 配置名称license_monitor 授权监控配置 0 关闭, 1开启 */
  ConfigName: string;
}

declare interface DescribeUsersConfigResponse {
  /** 配置值 */
  Value?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsualLoginPlacesRequest {
  /** 主机安全客户端UUID */
  Uuid: string;
}

declare interface DescribeUsualLoginPlacesResponse {
  /** 常用登录地数组 */
  UsualLoginPlaces?: UsualPlace[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVdbAndPocInfoRequest {
}

declare interface DescribeVdbAndPocInfoResponse {
  /** 病毒库更新时间。 */
  VdbUpdateTime: string;
  /** 漏洞库更新时间。 */
  PocUpdateTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVersionCompareChartRequest {
}

declare interface DescribeVersionCompareChartResponse {
  /** json 字符串 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVersionStatisticsRequest {
}

declare interface DescribeVersionStatisticsResponse {
  /** 基础版数量 */
  BasicVersionNum?: number;
  /** 专业版数量 */
  ProVersionNum?: number;
  /** 旗舰版数量 */
  UltimateVersionNum?: number;
  /** 普惠版数量 */
  GeneralVersionNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVertexDetailRequest {
  /** 点id列表 */
  VertexIds: string[];
  /** 事件id */
  IncidentId: string;
  /** 事件所在表名 */
  TableName: string;
}

declare interface DescribeVertexDetailResponse {
  /** 指定点列表的属性信息 */
  VertexDetails?: VertexDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulCountByDatesRequest {
  /** 需要查询最近几天的数据，需要都 -1后传入 */
  LastDays?: number[];
  /** 漏洞的分类: 1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 */
  VulCategory?: number;
  /** 是否为应急漏洞筛选 是: yes */
  IfEmergency?: string;
}

declare interface DescribeVulCountByDatesResponse {
  /** 批量获得对应天数的漏洞数量 */
  VulCount: number[] | null;
  /** 批量获得对应天数的主机数量 */
  HostCount: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulCveIdInfoRequest {
  /** 漏洞cve_id 列表 */
  CveIds: string[];
}

declare interface DescribeVulCveIdInfoResponse {
  /** 详情列表 */
  List: VulInfoByCveId[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceEventRequest {
  /** 过滤条件：Keywords: ip或者主机名, VulKeywords漏洞名或者CveId模糊查询; Quuid，VulId，EventType，Status精确匹配，CreateBeginTime，CreateEndTime时间段查询 */
  Filters?: Filter[];
  /** 数据偏移 */
  Offset?: number;
  /** 数据限制 */
  Limit?: number;
  /** 排序，大小写无关：asc 升序，desc降序 */
  Order?: string;
  /** 排序列，严格相等：CreateTime创建时间，MergeTime合并时间，Count事件数量 */
  By?: string;
}

declare interface DescribeVulDefenceEventResponse {
  /** 数据总数 */
  TotalCount: number;
  /** 漏洞防御事件列表 */
  List: VulDefenceEvent[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceListRequest {
  /** 过滤条件：Level、Keywords */
  Filters?: Filter[];
  /** 数据偏移 */
  Offset?: number;
  /** 数据限制 */
  Limit?: number;
  /** 排序，大小写无关：asc 升序，desc降序 */
  Order?: string;
  /** 排序列，严格相等：PublishTime发布时间 */
  By?: string;
}

declare interface DescribeVulDefenceListResponse {
  /** 数据总数 */
  TotalCount: number;
  /** 漏洞防御列表 */
  List: VulDefenceRangeDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceOverviewRequest {
}

declare interface DescribeVulDefenceOverviewResponse {
  /** 漏洞防御概览信息 */
  Overview: VulDefenceOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefencePluginDetailRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 过滤条件：Keywords: ip或者主机名,Exception，Status精确匹配 */
  Filters?: Filter[];
  /** 数据偏移 */
  Offset?: number;
  /** 数据限制 */
  Limit?: number;
}

declare interface DescribeVulDefencePluginDetailResponse {
  /** 数据总数 */
  TotalCount: number;
  /** 漏洞防御插件信息详情列表 */
  List: VulDefencePluginDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefencePluginExceptionCountRequest {
}

declare interface DescribeVulDefencePluginExceptionCountResponse {
  /** 当前异常插件数 */
  Count: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefencePluginStatusRequest {
  /** 过滤条件。Keywords - String - 是否必填：否 - 主机ip或别名筛选Exception - String - 是否必填：否 - 插件状态 0:正常,1:异常,2:无java进程注入 */
  Filters?: Filter[];
  /** 数据偏移 */
  Offset?: number;
  /** 数据限制 */
  Limit?: number;
  /** 排序，大小写无关：asc 升序，desc降序 */
  Order?: string;
  /** 排序列，严格相等：CreateTime创建时间，ModifyTime更新时间 */
  By?: string;
}

declare interface DescribeVulDefencePluginStatusResponse {
  /** 数据总数 */
  TotalCount?: number;
  /** 各主机漏洞防御插件信息列表 */
  List?: VulDefencePluginStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceSettingRequest {
}

declare interface DescribeVulDefenceSettingResponse {
  /** 防御开关，0 关闭 1 开启 */
  Enable?: number;
  /** 影响范围：1 全网旗舰版主机，0 quuid列表主机 */
  Scope?: number;
  /** 影响主机quuid列表 */
  Quuids?: string[] | null;
  /** 当前旗舰版主机数量 */
  FlagshipCount?: number;
  /** 影响主机id列表 */
  InstanceIds?: string[] | null;
  /** 新增旗舰版主机自动加入;1是，0否 */
  AutoInclude?: number;
  /** 排除的主机id列表 */
  ExcludeInstanceIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulEffectHostListRequest {
  /** 分页limit 最大100 */
  Limit: number;
  /** 分页Offset */
  Offset: number;
  /** 漏洞id */
  VulId: number;
  /** 过滤条件：AliasName - String - 主机名筛选TagIds - String - 主机标签id串，多个用英文用逗号分隔Status - String - 状态：0-待处理 1-忽略 3-已修复 5-检测中 6-修复中 8-修复失败Uuid - String数组 - Uuid串数组Version - String数组 - 付费版本数组："Flagship"-旗舰版 "PRO_VERSION"-专业版 "BASIC_VERSION"-基础版InstanceState - String数组 - 实例状态数组："PENDING"-创建中 "LAUNCH_FAILED"-创建失败 "RUNNING"-运行中 "STOPPED"-关机 "STARTING"-开机中 "STOPPING"-关机中 "REBOOTING"-重启中 "SHUTDOWN"-待销毁 "TERMINATING"-销毁中 "UNKNOWN"-未知（针对非腾讯云机器，且客户端离线的场景） */
  Filters?: Filter[];
}

declare interface DescribeVulEffectHostListResponse {
  /** 列表总数量 */
  TotalCount: number;
  /** 影响主机列表 */
  VulEffectHostList: VulEffectHostList[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulEffectModulesRequest {
  /** 分页limit 最大100 */
  Limit: number;
  /** 分页Offset */
  Offset: number;
  /** 漏洞id */
  VulId: number;
  /** 过滤条件：Uuid - String数组 - Uuid串数组 */
  Filters?: Filter[];
}

declare interface DescribeVulEffectModulesResponse {
  /** 列表总数量 */
  TotalCount: number;
  /** 影响主机列表 */
  VulEffectModuleInfo: VulEffectModuleInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulEmergentMsgRequest {
}

declare interface DescribeVulEmergentMsgResponse {
  /** 漏洞紧急通知数据 */
  EmergentMsgList: VulEmergentMsgInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulFixStatusRequest {
  /** 任务id 传VulId可以不用传FixId */
  FixId?: number;
  /** 漏洞id 传FixId可以不用传VulId */
  VulId?: number;
  /** 主机quuid 和VulId 组合可查 某主机最近一次修复任务详情 */
  Quuid?: string;
}

declare interface DescribeVulFixStatusResponse {
  /** 开始修复时间 */
  FixStartTime: string | null;
  /** 修复结束时间，为空表示还没结束 */
  FixEndTime: string | null;
  /** 修复成功的主机数 */
  FixSuccessCnt: number | null;
  /** 修复失败的主机数 */
  FixFailCnt: number;
  /** 主机总是 */
  HostCnt: number;
  /** 修复的任务id */
  FixId: number;
  /** 修复快照状态列表 */
  SnapshotList: VulFixStatusSnapshotInfo[] | null;
  /** 修复漏洞详情列表 */
  VulFixList: VulFixStatusInfo[] | null;
  /** 快照创建进度0-100 */
  SnapshotProgress: number;
  /** 修复精度 0-100 */
  FixProgress: number;
  /** 预计剩余时间（单位秒） */
  RemainingTime: number;
  /** 快照是否是重试状态 0=非重试 1=重试 */
  IsRetrySnapshot: number;
  /** 快照创建失败数 */
  SnapshotFailCnt: number | null;
  /** 是否允许重试 0:不允许 1：允许 */
  IsAllowRetry: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulHostCountScanTimeRequest {
}

declare interface DescribeVulHostCountScanTimeResponse {
  /** 总漏洞数 */
  TotalVulCount: number;
  /** 漏洞影响主机数 */
  VulHostCount: number;
  /** 扫描时间 */
  ScanTime: string;
  /** 是否第一次检测 */
  IfFirstScan: boolean;
  /** 运行中的任务号, 没有任务则为0 */
  TaskId: number;
  /** 最后一次修复漏洞的时间 */
  LastFixTime: string;
  /** 是否有支持自动修复的漏洞事件 */
  hadAutoFixVul: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulHostTopRequest {
  /** 获取top值，1-100 */
  Top: number;
  /** 1:web-cms 漏洞，2.应用漏洞 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞，不填或者填0时返回 1，2，4，5 的总统计数据 */
  VulCategory?: number;
  /** 是否仅统计重点关注漏洞 1=仅统计重点关注漏洞, 0=统计全部漏洞 */
  IsFollowVul?: number;
}

declare interface DescribeVulHostTopResponse {
  /** 服务器风险top列表 */
  VulHostTopList: VulHostTopInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulInfoCvssRequest {
  /** 漏洞id */
  VulId: number;
}

declare interface DescribeVulInfoCvssResponse {
  /** 漏洞id */
  VulId: number | null;
  /** 漏洞名称 */
  VulName: string | null;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 */
  VulLevel: number | null;
  /** 漏洞分类 1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 */
  VulType: number | null;
  /** 漏洞描述信息 */
  Description: string | null;
  /** 修复方案 */
  RepairPlan: string | null;
  /** 漏洞CVEID */
  CveId: string | null;
  /** 参考链接 */
  Reference: string | null;
  /** CVSS信息 */
  CVSS: string | null;
  /** 发布时间 */
  PublicDate: string | null;
  /** Cvss分数 */
  CvssScore: number | null;
  /** cvss详情 */
  CveInfo: string | null;
  /** cvss 分数 浮点型 */
  CvssScoreFloat: number | null;
  /** 漏洞标签 多个逗号分割 */
  Labels: string | null;
  /** 已防御的攻击次数 */
  DefenseAttackCount: number | null;
  /** 全网修复成功次数, 不支持自动修复的漏洞默认返回0 */
  SuccessFixCount: number | null;
  /** 修复是否支持：0-windows/linux均不支持修复 ;1-windows/linux 均支持修复 ;2-仅linux支持修复;3-仅windows支持修复 */
  FixSwitch: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulLabelsRequest {
}

declare interface DescribeVulLabelsResponse {
  /** 标签列表 */
  List: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulLevelCountRequest {
  /** 1:web-cms 漏洞，2.应用漏洞 3:安全基线 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞，不填或者填0时返回 1，2，4，5 的总统计数据 */
  VulCategory?: number;
  /** 是否仅统计重点关注漏洞 1=仅统计重点关注漏洞, 0=统计全部漏洞 */
  IsFollowVul?: number;
}

declare interface DescribeVulLevelCountResponse {
  /** 统计结果 */
  VulLevelList: VulLevelInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulListRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略ModifyTime - String - 是否必填：否 - 最近发生时间Uuid- String - 是否必填：否 - 主机uuid查询VulName- string -VulCategory- string - 是否必填：否 - 漏洞类别 1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞IsSupportDefense - int- 是否必填：否 - 是否支持防御 0:不支持 1:支持Labels- string- 是否必填：否 - 标签搜索IsSupportAutoFix- string- 是否必填：否 - 是否支持自动修复 0:不支持 1:支持CvssScore- string- 是否必填：否 - CvssScore大于多少AttackLevel- string- 是否必填：否 - 攻击热度大于多少 */
  Filters?: Filters[];
  /** 可选排序字段 Level，LastTime，HostCount */
  By?: string;
  /** 排序顺序：desc 默认asc */
  Order?: string;
}

declare interface DescribeVulListResponse {
  /** 漏洞列表 */
  VulInfoList?: VulInfoList[] | null;
  /** 漏洞总条数 */
  TotalCount?: number | null;
  /** 重点关注漏洞总数 */
  FollowVulCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulOverviewRequest {
}

declare interface DescribeVulOverviewResponse {
  /** 重点关注漏洞统计 */
  FollowVul?: VulOverview;
  /** 全部漏洞统计 */
  AllVul?: VulOverview;
  /** 影响主机统计 */
  EffectHost?: VulOverview;
  /** 漏洞攻击事件（近1月）统计 */
  VulAttackEvent?: VulOverview;
  /** 已防御攻击（近1月）统计 */
  VulDefenceEvent?: VulOverview;
  /** 漏洞库统计 */
  VulStore?: VulOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulStoreListRequest {
  /** VulName- string - 是否必填：否 - 漏洞名称CveId- string - 是否必填：否 - cveidVulCategory- string - 是否必填：否 - 漏洞分类 1 Web-CMS漏洞 ,2 应用漏洞 ,4 Linux软件漏洞,5 Windows系统漏洞Method- string - 是否必填：否 - 检测方法 0版本对比,1 poc检测 SupportDefense- string - 是否必填：否 - 是否支持防御 0不支持,1支持FixSwitch- string - 是否必填：否 - 是否支持自动修复 0不支持,1支持 */
  Filters?: Filter[];
  /** 限制条数,默认10,最大100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [PublishDate] */
  By?: string;
}

declare interface DescribeVulStoreListResponse {
  /** 漏洞信息 */
  List?: VulStoreListInfo[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 今日剩余搜索此时 */
  Remaining?: number;
  /** 免费搜索次数 */
  FreeSearchTimes?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulTopRequest {
  /** 漏洞风险服务器top，1-100 */
  Top: number;
  /** 1:web-cms 漏洞，2.应用漏洞 4: Linux软件漏洞 5: windows系统漏洞 6:应急漏洞，不填或者填0时返回 1，2，4，5 的总统计数据 */
  VulCategory?: number;
  /** 是否仅统计重点关注漏洞 1=仅统计重点关注漏洞, 0=统计全部漏洞 */
  IsFollowVul?: number;
}

declare interface DescribeVulTopResponse {
  /** 漏洞top列表 */
  VulTopList: VulTopInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulTrendRequest {
}

declare interface DescribeVulTrendResponse {
  /** 近半年漏洞利用攻击事件数量 */
  VulEventCount?: number;
  /** 近半年新增漏洞利用攻击事件数量 */
  IncreaseVulEventCount?: number;
  /** 近半年热点攻击漏洞 */
  HotVulCount?: number;
  /** 近半年新增热点攻击漏洞 */
  IncreaseHotVulCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWarningHostConfigRequest {
  /** 告警类型 */
  Type: number;
  /** 分页单页限制数目, 0表示不分页 */
  Limit?: number;
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
}

declare interface DescribeWarningHostConfigResponse {
  /** 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机 */
  HostRange: number;
  /** 项目或标签的名称列表，自选主机时为空 */
  ItemLabels: string[] | null;
  /** 机器列表 */
  Quuids: string[] | null;
  /** 机器列表总数量 */
  TotalCount: number | null;
  /** 项目或标签的id列表，自选主机时为空 */
  ItemLabelIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWarningListRequest {
}

declare interface DescribeWarningListResponse {
  /** 获取告警列表 */
  WarningInfoList: WarningInfoObj[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebHookPolicyRequest {
  /** 过滤条件 */
  Filter?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式 [asc:升序|desc:降序] */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeWebHookPolicyResponse {
  /** 策略列表 */
  List?: WebHookPolicy[] | null;
  /** 策略列表总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebHookReceiverRequest {
  /** 过滤条件 */
  Filter?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式 [asc:升序|desc:降序] */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeWebHookReceiverResponse {
  /** 告警接收人列表 */
  List?: WebHookReceiver[];
  /** 个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebHookReceiverUsageRequest {
  /** 告警接收人列表 */
  List?: WebHookReceiver[];
}

declare interface DescribeWebHookReceiverUsageResponse {
  /** 告警接收人的关联策略使用信息 */
  List?: WebHookReceiverUsage[];
  /** 个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebHookRuleRequest {
  /** 规则Id */
  Id?: number;
}

declare interface DescribeWebHookRuleResponse {
  /** 规则内容 */
  Data?: WebHookRuleDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebHookRulesRequest {
  /** 过滤条件 */
  Filter?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式 [asc:升序|desc:降序] */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeWebHookRulesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 规则内容 */
  List?: WebHookRuleSummary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebPageEventListRequest {
  /** 过滤条件IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选EventType - String - 是否必填：否 - 事件类型EventStatus - String - 是否必填：否 - 事件状态 */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 排序方式：CreateTime 或 RestoreTime，默认为CreateTime */
  By?: string;
  /** 排序方式，0降序，1升序，默认为0 */
  Order?: number;
}

declare interface DescribeWebPageEventListResponse {
  /** 防护事件列表信息 */
  List: ProtectEventLists[];
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebPageGeneralizeRequest {
}

declare interface DescribeWebPageGeneralizeResponse {
  /** 防护监测 0 未开启 1 已开启 2 异常 */
  ProtectMonitor: number;
  /** 防护目录数 */
  ProtectDirNum: number;
  /** 防护文件数 */
  ProtectFileNum: number;
  /** 篡改文件数 */
  TamperFileNum: number;
  /** 篡改数 */
  TamperNum: number;
  /** 今日防护数 */
  ProtectToday: number;
  /** 防护主机数 */
  ProtectHostNum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebPageProtectStatRequest {
}

declare interface DescribeWebPageProtectStatResponse {
  /** 文件篡改信息 */
  FileTamperNum: ProtectStat[];
  /** 防护文件分类信息 */
  ProtectFileType: ProtectStat[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebPageServiceInfoRequest {
}

declare interface DescribeWebPageServiceInfoResponse {
  /** 是否已购服务：true-是，false-否 */
  Status: boolean;
  /** 已使用授权数 */
  UsedNum: number;
  /** 剩余授权数 */
  ResidueNum: number;
  /** 已购授权数 */
  BuyNum: number;
  /** 临近到期数量 */
  ExpireNum: number;
  /** 所有授权机器信息 */
  AllAuthorizedMachines: ProtectMachineInfo[];
  /** 临近到期授权机器信息 */
  ExpireAuthorizedMachines: ProtectMachine[];
  /** 已过期授权数 */
  ExpiredNum: number;
  /** 防护目录数 */
  ProtectDirNum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyOrderRequest {
  /** 资源ID */
  ResourceId: string;
  /** 授权类型 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月 */
  LicenseType: number;
}

declare interface DestroyOrderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EditBashRulesRequest {
  /** 规则ID（新增时不填） */
  Id?: number;
  /** 客户端ID数组 */
  Uuids?: string[];
  /** 主机IP */
  HostIp?: string;
  /** 规则名称，编辑时不可修改规则名称 */
  Name?: string;
  /** 危险等级(0:无，1: 高危 2:中危 3: 低危) */
  Level?: number;
  /** 正则表达式 ，编辑时不可修改正则表达式，需要对内容QueryEscape后再base64 */
  Rule?: string;
  /** 是否全局规则(默认否)：1-全局，0-非全局 */
  IsGlobal?: number;
  /** 0=黑名单， 1=白名单 */
  White?: number;
  /** 事件列表点击“加入白名单”时,需要传EventId 事件的id */
  EventId?: number;
  /** 是否处理旧事件为白名单 0=不处理 1=处理 */
  DealOldEvents?: number;
}

declare interface EditBashRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EditPrivilegeRulesRequest {
  /** 规则ID(新增时请留空) */
  Id?: number;
  /** 客户端ID数组 */
  Uuids?: string[];
  /** 主机IP */
  HostIp?: string;
  /** 进程名 */
  ProcessName?: string;
  /** 是否S权限进程 */
  SMode?: number;
  /** 是否全局规则(默认否) */
  IsGlobal?: number;
  /** 事件列表和详情点击加白时关联的事件id (新增规则时请留空) */
  EventId?: number;
}

declare interface EditPrivilegeRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EditReverseShellRulesRequest {
  /** 规则ID(新增时请留空) */
  Id?: number;
  /** 客户端ID数组 */
  Uuids?: string[];
  /** 主机IP */
  HostIp?: string;
  /** 目标IP */
  DestIp?: string;
  /** 目标端口 */
  DestPort?: string;
  /** 进程名 */
  ProcessName?: string;
  /** 是否全局规则(默认否) */
  IsGlobal?: number;
  /** 事件列表和详情点击加白时关联的事件id (新增规则时请留空) */
  EventId?: number;
}

declare interface EditReverseShellRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EditTagsRequest {
  /** 标签名 */
  Name: string;
  /** 标签ID */
  Id?: number;
  /** Quuid */
  Quuids?: string[];
}

declare interface EditTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetAppListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。AppName- string - 是否必填：否 - 应用名搜索IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDType - int - 是否必填：否 - 类型	: 仅linux0: 全部1: 运维2 : 数据库3 : 安全4 : 可疑应用5 : 系统架构6 : 系统应用7 : WEB服务99:其他OsType - uint64 - 是否必填：否 - windows/linux */
  Filters?: AssetFilters[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime|ProcessCount] */
  By?: string;
}

declare interface ExportAssetAppListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetCoreModuleListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。Name- string - 是否必填：否 - 包名User- string - 是否必填：否 - 用户名 */
  Filters?: AssetFilters[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序依据[FirstTime|Size|ProcessCount|ModuleCount] */
  By?: string;
}

declare interface ExportAssetCoreModuleListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetDatabaseListRequest {
  /** 过滤条件。User- string - 是否必填：否 - 运行用户Ip - String - 是否必填：否 - 绑定IPPort - Int - 是否必填：否 - 端口Name - Int - 是否必填：否 - 数据库名称0:全部1:MySQL2:Redis3:Oracle4:MongoDB5:MemCache6:PostgreSQL7:HBase8:DB29:Sybase10:TiDBProto - String - 是否必填：否 - 协议：1:TCP, 2:UDP, 3:未知OsType - String - 是否必填：否 - 操作系统: linux/windows */
  Filters?: AssetFilters[];
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface ExportAssetDatabaseListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetEnvListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。Name- string - 是否必填：否 - 环境变量名Type- int - 是否必填：否 - 类型：0用户变量，1系统变量 */
  Filters?: AssetFilters[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface ExportAssetEnvListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetInitServiceListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。Name- string - 是否必填：否 - 包名User- string - 是否必填：否 - 用户Status- string - 是否必填：否 - 默认启用状态：0未启用， 1启用 仅linuxType- string - 是否必填：否 - 类型：类型 仅windows：1:编码器2:IE插件3:网络提供者4:镜像劫持5:LSA提供者6:KnownDLLs7:启动执行8:WMI9:计划任务10:Winsock提供者11:打印监控器12:资源管理器13:驱动服务14:登录 */
  Filters?: AssetFilters[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface ExportAssetInitServiceListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetJarListRequest {
  /** 过滤条件。Name- string - 是否必填：否 - 包名Type- uint - 是否必填：否 - 类型	1: 应用程序2 : 系统类库3 : Web服务自带库4 : 其他依赖包Status- string - 是否必填：否 - 是否可执行：0否，1是 */
  Filters?: AssetFilters[];
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface ExportAssetJarListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetMachineDetailRequest {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器Uuid */
  Uuid: string;
}

declare interface ExportAssetMachineDetailResponse {
  /** 下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetMachineListRequest {
  /** 过滤条件。IP - String - 是否必填：否 - 主机ipMachineName - String - 是否必填：否 - 主机名称InstanceID - string - 是否必填：否 - 实例IDOsType - String - 是否必填：否 - windows或linuxCpuLoad - Int - 是否必填：否 - 0: 0%或未知 1: 0%～20%2: 20%～50% 3: 50%～80%4: 80%～100%DiskLoad - Int - 是否必填：否 - 0: 0%或未知 1: 0%～20%2: 20%～50% 3: 50%～80%4: 80%～100%MemLoad - Int - 是否必填：否 - 0: 0%或未知 1: 0%～20%2: 20%～50% 3: 50%～80%4: 80%～100% */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序[FirstTime|PartitionCount] */
  By?: string;
}

declare interface ExportAssetMachineListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetPlanTaskListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。User- string - 是否必填：否 - 用户Status- int - 是否必填：否 - 默认启用状态：0未启用， 1启用 */
  Filters?: AssetFilters[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime] */
  By?: string;
}

declare interface ExportAssetPlanTaskListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetPortInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Port - uint64 - 是否必填：否 - 端口Ip - String - 是否必填：否 - 绑定IPProcessName - String - 是否必填：否 - 监听进程Pid - uint64 - 是否必填：否 - PIDUser - String - 是否必填：否 - 运行用户Group - String - 是否必填：否 - 所属用户组Ppid - uint64 - 是否必填：否 - PPIDProto - string - 是否必填：否 - tcp/udp或“”(空字符串筛选未知状态)OsType - uint64 - 是否必填：否 - windows/linuxRunTimeStart - String - 是否必填：否 - 运行开始时间RunTimeEnd - String - 是否必填：否 - 运行结束时间 */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime|StartTime] */
  By?: string;
}

declare interface ExportAssetPortInfoListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetProcessInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Name - String - 是否必填：否 - 进程名User - String - 是否必填：否 - 进程用户Group - String - 是否必填：否 - 进程用户组Pid - uint64 - 是否必填：否 - 进程IDPpid - uint64 - 是否必填：否 - 父进程IDOsType - uint64 - 是否必填：否 - windows/linuxStatus - string - 是否必填：否 - 进程状态：0:全部1:R 可执行2:S 可中断3:不可中断RunTimeStart - String - 是否必填：否 - 运行开始时间RunTimeEnd - String - 是否必填：否 - 运行结束时间InstallByPackage - uint64 - 是否必填：否 - 是否包安装：0否，1是 */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式：[FirstTime|StartTime] */
  By?: string;
}

declare interface ExportAssetProcessInfoListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetRecentMachineInfoRequest {
  /** 开始时间。 */
  BeginDate: string;
  /** 结束时间。 */
  EndDate: string;
}

declare interface ExportAssetRecentMachineInfoResponse {
  /** 下载地址 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetSystemPackageListRequest {
  /** 主机Uuid */
  Uuid?: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 过滤条件。Name - String - 是否必填：否 - 包 名StartTime - String - 是否必填：否 - 安装开始时间EndTime - String - 是否必填：否 - 安装开始时间Type - int - 是否必填：否 - 安装包类型：1:rpm2:dpkg3:java4:system */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序方式可选：[FistTime|InstallTime:安装时间] */
  By?: string;
}

declare interface ExportAssetSystemPackageListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetUserListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Name - String - 是否必填：否 - 账户名Uid - uint64 - 是否必填：否 - UidGuid - uint64 - 是否必填：否 - GuidLoginTimeStart - String - 是否必填：否 - 开始时间，如：2021-01-11LoginTimeEnd - String - 是否必填：否 - 结束时间，如：2021-01-11LoginType - uint64 - 是否必填：否 - 0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码 仅linuxOsType - String - 是否必填：否 - windows或linuxStatus - uint64 - 是否必填：否 - 账号状态：0-禁用；1-启用Type - uint64 - 是否必填：否 - 账号类型：0访客用户，1标准用户，2管理员用户 仅windowsIsDomain - uint64 - 是否必填：否 - 是否域账号：0 不是，1是 仅windowsIsRoot - uint64 - 是否必填：否 - 是否Root权限：0 不是，1是 仅linuxIsSudo - uint64 - 是否必填：否 - 是否Sudo权限：0 不是，1是 仅linuxIsSshLogin - uint64 - 是否必填：否 - 是否ssh登录：0 不是，1是 仅linuxShellLoginStatus - uint64 - 是否必填：否 - 是否shell登录性，0不是；1是 仅linuxPasswordStatus - uint64 - 是否必填：否 - 密码状态：1正常 2即将过期 3已过期 4已锁定 仅linux */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|LoginTime|ChangePasswordTime|PasswordDuaTime]PasswordLockDays */
  By?: string;
}

declare interface ExportAssetUserListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetWebAppListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Name - String - 是否必填：否 - 应用名Domain - String - 是否必填：否 - 站点域名Type - int - 是否必填：否 - 服务类型：0：全部1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:Jetty8:IHS9:TengineOsType - String - 是否必填：否 - windows/linux */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|PluginCount] */
  By?: string;
}

declare interface ExportAssetWebAppListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetWebFrameListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Name - String - 是否必填：否 - 框架名Lang - String - 是否必填：否 - 框架语言:java/pythonType - String - 是否必填：否 - 服务类型：0：全部1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType - String - 是否必填：否 - windows/linux */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|JarCount] */
  By?: string;
}

declare interface ExportAssetWebFrameListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetWebLocationListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Name - String - 是否必填：否 - 域名User - String - 是否必填：否 - 运行用户Port - uint64 - 是否必填：否 - 站点端口Proto - uint64 - 是否必填：否 - 站点协议：1:HTTP,2:HTTPSServiceType - uint64 - 是否必填：否 - 服务类型：1:Tomcat2：Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType - String - 是否必填：否 - windows/linux */
  Filters?: Filter[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|PathCount] */
  By?: string;
}

declare interface ExportAssetWebLocationListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetWebServiceInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。User- string - 是否必填：否 - 运行用户Name- string - 是否必填：否 - Web服务名：1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType- string - 是否必填：否 - Windows/linux */
  Filters?: AssetFilters[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|ProcessCount] */
  By?: string;
}

declare interface ExportAssetWebServiceInfoListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAttackEventsRequest {
  /** 过滤参数。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选FilePath - String - 是否必填：否 - 路径筛选VirusName - String - 是否必填：否 - 描述筛选CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间Status - String - 是否必填：否 - 状态筛选 */
  Filters?: Filters[];
  /** 排序值 CreateTime */
  By?: string;
  /** 排序 方式 ，ASC，DESC */
  Order?: string;
}

declare interface ExportAttackEventsResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineEffectHostListRequest {
  /** 基线id */
  BaselineId: number;
  /** 筛选条件AliasName- String- 主机别名 */
  Filters?: Filters[];
  /** 策略id */
  StrategyId?: number;
  /** 主机uuid数组 */
  UuidList?: string[];
  /** 基线名称 */
  BaselineName?: string;
}

declare interface ExportBaselineEffectHostListResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string | null;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineFixListRequest {
  /** ItemName - String - 是否必填：否 - 项名称 */
  Filters?: Filter[];
  /** 0:过滤的结果导出；1:全部导出 */
  ExportAll?: number;
}

declare interface ExportBaselineFixListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineHostDetectListRequest {
  /** HostTag - string - 是否必填：否 - 主机标签ItemId - int64 - 是否必填：否 - 项IdRuleId - int64 - 是否必填：否 - 规则IdIsPassed - int - 是否必填：否 - 是否通过RiskTier - int - 是否必填：否 - 风险等级 */
  Filters?: Filter[];
  /** 0:过滤的结果导出；1:全部导出 */
  ExportAll?: number;
  /** 0:导出界面展示；1:导出全部结果事件 */
  IsExportDetail?: number;
}

declare interface ExportBaselineHostDetectListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineItemDetectListRequest {
  /** HostId - string - 是否必填：否 - 主机IdRuleId - int64 - 是否必填：否 - 规则IdIsPassed - int - 是否必填：否 - 是否通过RiskTier - int - 是否必填：否 - 风险等级 */
  Filters?: Filter[];
  /** 0:过滤的结果导出；1:全部导出 */
  ExportAll?: number;
  /** 0:导出界面展示；1:导出全部结果事件 */
  IsExportDetail?: number;
}

declare interface ExportBaselineItemDetectListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineItemListRequest {
  /** PolicyId - int64 - 是否必填：否 - 策略IdRuleId - int64 - 是否必填：否 - 规则IdHostId - string - 是否必填：否 - 主机IdHostName - string - 是否必填：否 - 主机名HostIp - string - 是否必填：否 - 主机IPItemId - String - 是否必填：否 - 检测项IdItemName - String - 是否必填：否 - 项名称DetectStatus - int - 是否必填：否 - 检测状态[0:未通过|3:通过|5:检测中]Level - int - 是否必填：否 - 风险等级StartTime - string - 是否必填：否 - 开始时间EndTime - string - 是否必填：否 - 结束时间 */
  Filters?: Filter[];
  /** 0:过滤的结果导出；1:全部导出 */
  ExportAll?: number;
}

declare interface ExportBaselineItemListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineListRequest {
  /** 过滤条件：StrategyId- Uint64 - 基线策略idStatus - Uint64 - 事件状态：0-未通过，1-忽略，3-通过，5-检测中BaselineName - String - 基线名称AliasName- String - 服务器名称/服务器ipUuid- String - 主机uuid */
  Filters?: Filters[];
  /** 已废弃 */
  IfDetail?: number;
}

declare interface ExportBaselineListResponse {
  /** 导出文件下载地址（已弃用） */
  DownloadUrl?: string | null;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineRuleDetectListRequest {
  /** RuleName - string - 是否必填：否 - 规则名称IsPassed - int - 是否必填：否 - 是否通过RiskTier - int - 是否必填：否 - 风险等级 */
  Filters?: Filter[];
  /** 0:过滤的结果导出；1:全部导出 */
  ExportAll?: number;
  /** 0:导出界面展示；1:导出全部结果事件 */
  IsExportDetail?: number;
}

declare interface ExportBaselineRuleDetectListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBaselineWeakPasswordListRequest {
  /** WeakPassword - string - 是否必填：否 - 弱口令 */
  Filters?: Filter[];
  /** 0:过滤的结果导出；1:全部导出 */
  ExportAll?: number;
}

declare interface ExportBaselineWeakPasswordListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBashEventsNewRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportBashEventsNewResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBashEventsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportBashEventsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBashPoliciesRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportBashPoliciesResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBruteAttacksRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportBruteAttacksResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportFileTamperEventsRequest {
  /** 过滤条件。Status - String - 是否必填：否 - 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略ModifyTime - String - 是否必填：否 - 最近发生时间Uuid- String - 是否必填：否 - 主机uuid查询RuleCategory- string - 是否必填：否 - 规则类别 0 系统规则 1 自定义规则 */
  Filters?: Filters[];
  /** 需要导出的字段 */
  Fileds?: string[];
  /** 需要导出的字段 */
  Fields?: string;
}

declare interface ExportFileTamperEventsResponse {
  /** 导出任务ID 可通过ExportTasks接口下载 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportFileTamperRulesRequest {
  /** 过滤条件。RuleCategory- string- 规则类别 0=系统规则，1=用户规则Name- String - 规则名称 */
  Filters?: Filters[];
}

declare interface ExportFileTamperRulesResponse {
  /** 导出任务ID 可通过ExportTasks接口下载 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportIgnoreBaselineRuleRequest {
  /** 检测项名称 */
  RuleName?: string;
}

declare interface ExportIgnoreBaselineRuleResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportIgnoreRuleEffectHostListRequest {
  /** 检测项id */
  RuleId: number;
  /** 过滤条件。AliasName- String- 主机别名 */
  Filters?: Filters[];
}

declare interface ExportIgnoreRuleEffectHostListResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportJavaMemShellPluginsRequest {
  /** 过滤条件：Keywords: ip或者主机名模糊查询, Pid精确匹配，MainClass模糊匹配 */
  Filters?: Filter[];
  /** 导出字段 */
  Where?: string[];
}

declare interface ExportJavaMemShellPluginsResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportJavaMemShellsRequest {
  /** 过滤条件：InstanceID、IP、MachineName主机名模糊查询, Type，Status精确匹配，CreateBeginTime，CreateEndTime时间段 */
  Filters?: Filter[];
  /** 导出字段 */
  Where?: string[];
}

declare interface ExportJavaMemShellsResponse {
  /** 任务ID,需要到接口 异步导出任务获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportLicenseDetailRequest {
  /** 多个条件筛选时 LicenseStatus,DeadlineStatus,ResourceId,Keywords 取交集 LicenseType 授权类型, 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月ResourceId 资源ID */
  Filters?: Filters[];
  /** 是否导出全部授权详情 */
  IsHistory?: boolean;
  /** 标签筛选,平台标签能力,这里传入 标签键,标签值作为一个对象 */
  Tags?: Tags[];
  /** 导出月份, 该参数仅在IsHistory 时可选. */
  ExportMonth?: string;
}

declare interface ExportLicenseDetailResponse {
  /** 下载地址,该字段废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportMaliciousRequestsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportMaliciousRequestsResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportMalwaresRequest {
  /** 限制条数,默认10 */
  Limit?: number;
  /** 偏移量 默认0 */
  Offset?: number;
  /** 过滤参数。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选FilePath - String - 是否必填：否 - 路径筛选VirusName - String - 是否必填：否 - 描述筛选CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间Status - String - 是否必填：否 - 状态筛选 */
  Filters?: Filters[];
  /** 排序值 CreateTime */
  By?: string;
  /** 排序 方式 ，ASC，DESC */
  Order?: string;
}

declare interface ExportMalwaresResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportNonlocalLoginPlacesRequest {
  /** Status - int - 是否必填：否 - 状态筛选1:正常登录；2：异地登录 */
  Filters?: Filter[];
}

declare interface ExportNonlocalLoginPlacesResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportPrivilegeEventsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportPrivilegeEventsResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportProtectDirListRequest {
  /** DirName 网站名称DirPath 网站防护目录地址 */
  Filters?: AssetFilters[];
  /** asc：升序/desc：降序 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface ExportProtectDirListResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRansomDefenseBackupListRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 过滤条件。Status - Int - 是否必填：否 - 通过勒索状态查询：0未勒索，1已勒索 CreateTimeBegin - string - 是否必填：否 - 创建时间开始 CreateTimeEnd - string - 是否必填：否 - 创建时间结束 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime */
  By?: string;
}

declare interface ExportRansomDefenseBackupListResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRansomDefenseEventsListRequest {
  /** 过滤条件。HostName- string- 主机名称Status - Uint64 - 0待处理，1已处理，2已信任HostIp- String - 主机ip */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime */
  By?: string;
}

declare interface ExportRansomDefenseEventsListResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRansomDefenseMachineListRequest {
  /** 过滤条件。Ips - String - 是否必填：否 - 通过ip查询 MachineNames - String - 是否必填：否 - 通过实例名查询 Names - String - 是否必填：否 - 通过实例名查询 Status - String - 是否必填：否 - 策略状态：0备份中，1备份成功，2备份失败 LastBackupTimeBegin - String - 是否必填：否 - 最近一次备份时间开始LastBackupTimeEnd - String - 是否必填：否 - 最近一次备份时间结束 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime、MachineCount */
  By?: string;
}

declare interface ExportRansomDefenseMachineListResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRansomDefenseStrategyListRequest {
  /** 过滤条件。Ips - String - 是否必填：否 - 通过ip查询 MachineNames - String - 是否必填：否 - 通过实例名查询 Names - String - 是否必填：否 - 通过实例名查询 Dirs - String - 是否必填：否 - 诱饵目录 Status - String - 是否必填：否 - 策略状态：0关闭，1开启 BackupType - String - 是否必填：否 - 备份模式：0-按周;1-按天 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime、MachineCount */
  By?: string;
}

declare interface ExportRansomDefenseStrategyListResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRansomDefenseStrategyMachinesRequest {
  /** 过滤条件。Ips - String - 是否必填：否 - 通过ip查询 MachineNames - String - 是否必填：否 - 通过实例名查询 Names - String - 是否必填：否 - 通过实例名查询 Status - String - 是否必填：否 - 策略状态：0备份中，1备份成功，2备份失败 LastBackupTimeBegin - String - 是否必填：否 - 最近一次备份时间开始LastBackupTimeEnd - String - 是否必填：否 - 最近一次备份时间结束 */
  Filters?: Filters[];
  /** 排序方法 ASC DESC */
  Order?: string;
  /** 排序字段支持CreateTime、MachineCount */
  By?: string;
  /** 策略id */
  Id?: number;
}

declare interface ExportRansomDefenseStrategyMachinesResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportReverseShellEventsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportReverseShellEventsResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRiskDnsEventListRequest {
  /** IpOrName - String - 是否必填：否 - 主机Ip或别名筛选HostId - String - 是否必填：否 - 主机IdAgentId - String - 是否必填：否 - 客户端IdPolicyType - String - 是否必填：否 - 策略类型,0:系统策略1:用户自定义策略Domain - String - 是否必填：否 - 域名(先对域名做urlencode,再base64)HandleStatus - String - 是否必填：否 - 状态筛选0:待处理；2:信任；3:不信任BeginTime - String - 是否必填：否 - 最近访问开始时间EndTime - String - 是否必填：否 - 最近访问结束时间 */
  Filters?: Filter[];
  /** 排序方式：[ASC:升序|DESC:降序] */
  Order?: string;
  /** 排序字段：[AccessCount:请求次数|LastTime:最近请求时间] */
  By?: string;
}

declare interface ExportRiskDnsEventListResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRiskDnsPolicyListRequest {
  /** PolicyType - int - 是否必填：否 - 策略类型PolicyName - string - 是否必填：否 - 策略名称Domain - string - 是否必填：否 - 域名(先对域名做urlencode,再base64)PolicyAction- int - 是否必填：否 - 策略动作IsEnabled - int - 是否必填：否 - 是否生效 */
  Filters?: Filter[];
  /** 排序方式: [ASC:升序|DESC:降序] */
  Order?: string;
  /** 可选排序列: [PolicyName|HostType] */
  By?: string;
}

declare interface ExportRiskDnsPolicyListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportRiskProcessEventsRequest {
  /** 过滤条件。HostId - String - 是否必填：否 - 主机IDIpOrName - String - 是否必填：否 - 主机IP或主机名VirusName - String - 是否必填：否 - 病毒名ProcessId - String - 是否必填：否 - 进程IDProcessPath - String - 是否必填：否 - 进程路径BeginTime - String - 是否必填：否 - 进程启动时间-开始EndTime - String - 是否必填：否 - 进程启动时间-结束Status - String - 是否必填：否 - 状态筛选 0待处理；1查杀中；2已查杀；3已退出;4已信任 */
  Filters?: Filter[];
  /** 排序方式：[ASC:升序|DESC:降序] */
  Order?: string;
  /** [StartTime:进程启动时间|DetectTime:最后检测时间] */
  By?: string;
}

declare interface ExportRiskProcessEventsResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportScanTaskDetailsRequest {
  /** 本次检测的任务id（不同于出参的导出本次检测Excel的任务Id） */
  TaskId: number;
  /** 模块类型，当前提供：Malware 木马 , Vul 漏洞 , Baseline 基线 */
  ModuleType: string;
  /** 过滤参数：ipOrAlias（服务器名/ip） */
  Filters?: Filters[];
}

declare interface ExportScanTaskDetailsResponse {
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址(不同于入参的本次检测任务id) */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportSecurityTrendsRequest {
  /** 开始时间。 */
  BeginDate: string;
  /** 结束时间。 */
  EndDate: string;
}

declare interface ExportSecurityTrendsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportTasksRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface ExportTasksResponse {
  /** PENDING：正在生成下载链接，FINISHED：下载链接已生成，ERROR：网络异常等异常情况 */
  Status: string;
  /** 下载链接 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulDefenceEventRequest {
  /** 过滤条件：Keywords: ip或者主机名, VulKeywords漏洞名或者CveId模糊查询; Quuid，VulId，EventType，Status精确匹配，CreateBeginTime，CreateEndTime时间段查询 */
  Filters?: Filter[];
  /** 导出字段，默认全导出 */
  Where?: string[];
}

declare interface ExportVulDefenceEventResponse {
  /** 导出文件Id 可通过ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulDefenceListRequest {
  /** 过滤条件：Keywords: 漏洞名称或CVE编号模糊匹配, Level精确匹配 */
  Filters?: Filter[];
  /** 导出字段，默认全导出 */
  Where?: string[];
}

declare interface ExportVulDefenceListResponse {
  /** 导出文件Id 可通过ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulDefencePluginEventRequest {
  /** Keywords: ip或者主机名模糊匹配，Quuid，Exception、Status精确匹配 */
  Filters?: Filter[];
  /** 导出字段，默认全导出 */
  Where?: string[];
}

declare interface ExportVulDefencePluginEventResponse {
  /** 导出文件Id 可通过ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulDetectionExcelRequest {
  /** 本次漏洞检测任务id（不同于出参的导出本次漏洞检测Excel的任务Id） */
  TaskId: number;
}

declare interface ExportVulDetectionExcelResponse {
  /** 该参数已废弃 */
  DownloadUrl?: string;
  /** 任务ID,需要到接口“异步导出任务”ExportTasks获取DownloadUrl下载地址（不同于入参的本次漏洞检测任务id） */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulDetectionReportRequest {
  /** 漏洞扫描任务id（不同于出参的导出检测报告的任务Id） */
  TaskId: number;
  /** 过滤参数 */
  Filters?: Filters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface ExportVulDetectionReportResponse {
  /** 导出文件下载链接地址 */
  DownloadUrl: string;
  /** 导出检测报告的任务Id（不同于入参的漏洞扫描任务id） */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulEffectHostListRequest {
  /** 漏洞id */
  VulId: number;
  /** 过滤条件。AliasName - String - 主机名筛选 */
  Filters?: Filter[];
}

declare interface ExportVulEffectHostListResponse {
  /** 已废弃 */
  DownloadUrl: string | null;
  /** 导出任务Id , 可通过ExportTasks 接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulInfoRequest {
  /** 漏洞id */
  VulId: number;
}

declare interface ExportVulInfoResponse {
  /** 导出任务Id , 可通过ExportTasks 接口下载 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportVulListRequest {
  /** 过滤条件。VulCategory - int - 是否必填：否 - 漏洞分类筛选1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞IfEmergency - String - 是否必填：否 - 是否为应急漏洞，查询应急漏洞传:yesStatus - String - 是否必填：是 - 漏洞状态筛选，0: 待处理 1:忽略 3:已修复 5:检测中， 控制台仅处理0,1,3,5四种状态Level - String - 是否必填：否 - 漏洞等级筛选 1:低 2:中 3:高 4:提示VulName- String - 是否必填：否 - 漏洞名称搜索 */
  Filters?: Filter[];
  /** 是否导出详情,1是 0不是 */
  IfDetail?: number;
}

declare interface ExportVulListResponse {
  /** 导出的文件下载url（已弃用！） */
  DownloadUrl: string | null;
  /** 导出文件Id 可通过ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportWebPageEventListRequest {
  /** 过滤条件IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选EventType - String - 是否必填：否 - 事件类型EventStatus - String - 是否必填：否 - 事件状态 */
  Filters?: AssetFilters[];
  /** 排序方式：CreateTime 或 RestoreTime，默认为CreateTime */
  By?: string;
  /** 排序方式，0降序，1升序，默认为0 */
  Order?: number;
}

declare interface ExportWebPageEventListResponse {
  /** 任务id 可通过 ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FixBaselineDetectRequest {
  /** 主机Id */
  HostId: string;
  /** 项Id */
  ItemId: number;
  /** 修复内容 */
  Data?: string[];
}

declare interface FixBaselineDetectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLocalStorageItemRequest {
  /** 键 */
  Key: string;
}

declare interface GetLocalStorageItemResponse {
  /** 值 */
  Value?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IgnoreImpactedHostsRequest {
  /** 漏洞ID数组。 */
  Ids: number[];
}

declare interface IgnoreImpactedHostsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KeysLocalStorageRequest {
}

declare interface KeysLocalStorageResponse {
  /** 键列表 */
  Keys?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoOpenProVersionConfigRequest {
  /** 设置自动开通状态。CLOSE：关闭OPEN：打开 */
  Status: string;
  /** 自动加购/扩容授权开关,默认 1, 0关闭, 1开启 */
  AutoRepurchaseSwitch?: number;
  /** 自动加购的订单是否自动续费,默认0 ,0关闭, 1开启 */
  AutoRepurchaseRenewSwitch?: number;
  /** 手动购买的订单是否自动续费,默认0, 0关闭 ,1 开启 */
  RepurchaseRenewSwitch?: number;
}

declare interface ModifyAutoOpenProVersionConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBanModeRequest {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode: string;
  /** 阻断时间，用于标准阻断模式 */
  Ttl?: number;
}

declare interface ModifyBanModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBanStatusRequest {
  /** 阻断开关状态: 0 -- 关闭 1 -- 高级阻断 2 -- 基础阻断(只阻断情报库黑ip) */
  Status: number;
  /** 是否开启智能过白模式 */
  OpenSmartMode?: boolean;
}

declare interface ModifyBanStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBanWhiteListRequest {
  /** 修改白名单规则项 */
  Rules: BanWhiteList;
}

declare interface ModifyBanWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselinePolicyRequest {
  /** 无 */
  Data: BaselinePolicy;
  /** RuleName - String - 是否必填：否 - 规则名称CategoryId - int64 - 是否必填：否 自定义筛选为-1 - 规则分类RuleType - int - 是否必填：否 0:系统 1:自定义 - 规则类型 */
  Filters?: Filter[];
  /** 是否按照过滤的全选 */
  SelectAll?: number;
}

declare interface ModifyBaselinePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselinePolicyStateRequest {
  /** 策略Id */
  PolicyId: number;
  /** 开启状态[1:开启|0:未开启] */
  IsEnabled: number;
}

declare interface ModifyBaselinePolicyStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselineRuleIgnoreRequest {
  /** 规则名称 */
  RuleName: string;
  /** 资产类型[0:所有专业版旗舰版|1:id|2:ip] */
  AssetType: number;
  /** 规则Id */
  RuleId?: number;
  /** 关联项 */
  ItemIds?: number[];
  /** 主机Id */
  HostIds?: string[];
  /** 主机Ip */
  HostIps?: string[];
  /** 是否全选过滤 */
  SelectAll?: number;
  /** ItemName - string - 是否必填：否 - 项名称 */
  Filters?: Filter[];
}

declare interface ModifyBaselineRuleIgnoreResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselineRuleRequest {
  /** 无 */
  Data: BaselineRule;
  /** 是否过滤全选 */
  SelectAll?: number;
  /** ItemName - string - 是否必填：否 - 项名称 */
  Filters?: Filter[];
  /** 0:检测项，1:检测项分类 */
  IdType?: number;
  /** 需要排除的检测项id */
  ExcludeIds?: number[];
  /** 勾选的检测项分类 */
  CategoryIds?: number[];
}

declare interface ModifyBaselineRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselineWeakPasswordRequest {
  /** 无 */
  Data: BaselineWeakPassword[];
}

declare interface ModifyBaselineWeakPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBashPolicyRequest {
  /** 具体的策略配置 */
  Policy: BashPolicy;
}

declare interface ModifyBashPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBashPolicyStatusRequest {
  /** 规则ID */
  Id: number;
  /** 是否禁用 */
  Enable: number;
}

declare interface ModifyBashPolicyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBruteAttackRulesRequest {
  /** 暴力破解判断规则 */
  Rules: BruteAttackRule[];
}

declare interface ModifyBruteAttackRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEventAttackStatusRequest {
  /** 需要修改的事件id 数组，支持批量 */
  Ids?: number[];
  /** 是否更新全部，即是否对所有的事件进行操作，当ids 不为空时，此参数无效 */
  All?: boolean;
  /** 0：待处理 1：已处理 2： 已加白 3： 已忽略 4：已删除 */
  Status?: number;
  /** 过滤条件。Type - String 攻击状态 0: 尝试攻击 1: 攻击成功 - 是否必填: 否Status - String 事件处理状态 0：待处理 1：已处理 2： 已加白 3： 已忽略 4：已删除 - 是否必填: 否SrcIP - String 来源IP - 是否必填: 否DstPort - String 攻击目标端口 - 是否必填: 否MachineName - String 主机名称 - 是否必填: 否InstanceID - String 主机实例ID - 是否必填: 否Quuids - String 主机cvm uuid - 是否必填: 否 */
  Filters?: Filters[];
  /** 排除的id */
  ExcludeId?: number[];
}

declare interface ModifyEventAttackStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFileTamperEventsRequest {
  /** Status 1 -- 加白 2 -- 删除 3 - 忽略 */
  Status: number;
  /** 对应事件id */
  Ids: number[];
}

declare interface ModifyFileTamperEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFileTamperRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 规则内容 */
  Rules: FileTamperRule[];
  /** 是否全局规则(默认否) 0：否 ，1：是，全局是Uuids 可为空 */
  IsGlobal: number;
  /** 启用状态 0: 启用 1: 已关闭 */
  Status: number;
  /** 规则id 不填或者0表示新增 */
  Id?: number;
  /** 影响的主机uuid集合 */
  Uuids?: string[];
  /** 风险等级 0：无， 1: 高危， 2:中危， 3: 低危 */
  Level?: number;
  /** 加白处理类型cur 仅对当前加白all 所有符合条件加白 */
  AddWhiteType?: string;
}

declare interface ModifyFileTamperRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFileTamperRuleStatusRequest {
  /** 0: 启用1: 关闭2：删除 */
  Status: number;
  /** 对应事件id */
  Ids: number[];
  /** 是否是系统规则 0=系统规则 1=用户自定义规则，系统规则Status 不支持删除 */
  RuleCategory: number;
}

declare interface ModifyFileTamperRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyJavaMemShellPluginSwitchRequest {
  /** 主机quuid数组 */
  Quuids: string[];
  /** 插件目标状态：0: 关闭 1: 开启 */
  JavaShellStatus: number;
}

declare interface ModifyJavaMemShellPluginSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyJavaMemShellsStatusRequest {
  /** 事件Id数组 */
  Ids: number[];
  /** 目标处理状态： 0 - 待处理 1 - 已加白 2 - 已删除 3 - 已忽略 4 - 已手动处理 */
  Status: number;
}

declare interface ModifyJavaMemShellsStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLicenseBindsRequest {
  /** 资源ID */
  ResourceId: string;
  /** 授权类型 */
  LicenseType: number;
  /** 是否全部机器(当全部机器数大于当前订单可用授权数时,多余机器会被跳过) */
  IsAll?: boolean;
  /** 需要绑定的机器quuid列表, 当IsAll = false 时必填,反之忽略该参数. 最大长度=2000 */
  QuuidList?: string[];
}

declare interface ModifyLicenseBindsResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLicenseOrderRequest {
  /** 资源ID */
  ResourceId: string;
  /** 预期值,如果当前为10,扩容则输入原来大的值, 缩容则比原来小的值(缩容时不允许预期值比使用量小),如果保持不变则填写原值, */
  InquireNum?: number;
  /** 项目ID,不修改则输入原值. */
  ProjectId?: number;
  /** 资源别名,不修改则输入原值. */
  Alias?: string;
}

declare interface ModifyLicenseOrderResponse {
  /** 订单号 */
  DealNames?: string[];
  /** 资源ID */
  ResourceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLicenseUnBindsRequest {
  /** 资源ID */
  ResourceId: string;
  /** 授权类型 */
  LicenseType: number;
  /** 是否全部机器(当全部机器数大于当前订单可用授权数时,多余机器会被跳过) */
  IsAll?: boolean;
  /** 需要绑定的机器quuid列表, 当IsAll = false 时必填,反之忽略该参数.最大长度=100 */
  QuuidList?: string[];
}

declare interface ModifyLicenseUnBindsResponse {
  /** 只有解绑失败的才有该值. */
  ErrMsg: LicenseUnBindRsp[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLogKafkaAccessRequest {
  /** 实例名称 如 主机安全测试环境 */
  KafkaEnvName: string;
  /** 实例ID */
  KafkaId: string;
  /** 接入方式，1公网域名接入，2支撑环境接入 */
  AccessType: number;
  /** 接入地址 */
  AccessAddr: string;
  /** 用户名 */
  Username: string;
  /** 0不用密码，1有密码 */
  HasPwd: number;
  /** 日志投递类型配置细节 */
  DeliverTypeDetails: DeliverTypeDetails[];
  /** kafka版本 */
  InsVersion: string;
  /** 地域 */
  Zone: string;
  /** 可用区 */
  Az: string;
  /** vpcid地址 */
  VpcId: string;
  /** 子网id */
  SubnetId: string;
  /** 投递状态，1：健康，2：告警，3：异常 */
  DeliverStatus: number;
  /** 峰值带宽 */
  BandWidth: number;
  /** 磁盘容量 */
  DiskSize: number;
  /** 密码，aes加密 */
  Pwd?: string;
}

declare interface ModifyLogKafkaAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLogKafkaDeliverTypeRequest {
  /** 安全模块类型 1: 入侵检测 2: 漏洞管理 3: 基线管理 4: 高级防御 5:客户端相关 6: 资产指纹 */
  SecurityType: number;
  /** 安全模块下的日志类型， */
  LogType: number[];
  /** 投递开关 0关闭 1开启 */
  Switch: number;
  /** kafka topic id */
  TopicId: string;
  /** kafka topic name */
  TopicName: string;
}

declare interface ModifyLogKafkaDeliverTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLogKafkaStateRequest {
  /** 实例名称 如 主机安全测试环境 */
  KafkaEnvName: string;
  /** 实例ID */
  KafkaId: string;
  /** 接入方式，1公网域名接入，2支撑环境接入 */
  AccessType: number;
  /** 接入地址 */
  AccessAddr: string;
  /** 用户名 */
  Username: string;
  /** 区域 */
  Zone: string;
  /** 可用区 */
  Az: string;
  /** 所属网络 */
  VpcId: string;
  /** 所在子网 */
  SubnetId: string;
  /** 投递状态，1：健康，2：告警，3：异常 */
  DeliverStatus: number;
  /** kafka版本 */
  InsVersion: string;
  /** 峰值带宽 */
  BandWidth: number;
  /** 磁盘容量 */
  DiskSize: number;
}

declare interface ModifyLogKafkaStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLogStorageConfigRequest {
  /** 是否修改有效期 */
  IsModifyPeriod: boolean;
  /** 存储类型，string数组 */
  Type?: string[];
  /** 日志存储天数，3640表示不限 */
  Period?: number;
}

declare interface ModifyLogStorageConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoginWhiteInfoRequest {
  /** 更新白名单信息实体 */
  HostLoginWhiteObj: UpdateHostLoginWhiteObj;
}

declare interface ModifyLoginWhiteInfoResponse {
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
}

declare interface ModifyMachineAutoClearConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMachineRemarkRequest {
  /** 主机Quuid */
  Quuid: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface ModifyMachineRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMaliciousRequestWhiteListRequest {
  /** 白名单id */
  Id: number;
  /** 白名单域名 */
  Domain: string;
  /** 备注 */
  Mark?: string;
}

declare interface ModifyMaliciousRequestWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMalwareTimingScanSettingsRequest {
  /** 检测模式 0 全盘检测 1快速检测 */
  CheckPattern: number;
  /** 检测周期 开始时间，如：02:00:00 */
  StartTime: string;
  /** 检测周期 超时结束时间，如：04:00:00 */
  EndTime: string;
  /** 是否全部服务器 1 全部 2 自选 */
  IsGlobal: number;
  /** 定时检测开关 0 关闭 1开启 */
  EnableScan: number;
  /** 监控模式 0 标准 1深度 */
  MonitoringPattern: number;
  /** 扫描周期 默认每天 1 */
  Cycle: number;
  /** 实时监控 0 关闭 1开启 */
  RealTimeMonitoring: number;
  /** 自选服务器时必须 主机quuid的string数组 */
  QuuidList?: string[];
  /** 是否自动隔离 1隔离 0 不隔离 */
  AutoIsolation?: number;
  /** 是否杀掉进程 1杀掉 0不杀掉 */
  KillProcess?: number;
  /** 1 清理, 0 不清理本操作会修复被篡改的系统命令，计划任务等系统文件，操作中请确保yum/apt 可用 */
  DoClean?: number;
  /** 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示） */
  EngineType?: number;
  /** 启发引擎开关 0 关闭 1开启 */
  EnableInspiredEngine?: number;
  /** 是否开启恶意进程查杀[0:未开启,1:开启] */
  EnableMemShellScan?: number;
  /** 防护模式 0 标准 1重保 */
  ProtectMode?: number;
  /** 查杀范围 0 脚本类之外的恶意文件，1全部恶意文件 */
  ProtectFileScope?: number;
}

declare interface ModifyMalwareTimingScanSettingsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMalwareWhiteListRequest {
  /** 白名单模式； 0MD5白名单，1自定义 */
  Mode: number;
  /** 规则唯一ID */
  Id: number;
  /** quuid 列表 */
  QuuidList?: string[];
  /** 是否全部主机； 0否，1是。 */
  IsGlobal?: number;
  /** 匹配模式 ；0 精确匹配，1模糊匹配(废弃) */
  MatchType?: number;
  /** 文件名称(正则)；长度不超过200个 */
  FileName?: string[];
  /** 文件目录(正则)；长度不超过200个，内容base64转义 */
  FileDirectory?: string[];
  /** 文件后缀；长度不超过200个，内容base64转义（废弃） */
  FileExtension?: string[];
  /** MD5列表 */
  Md5List?: string[];
}

declare interface ModifyMalwareWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetAttackSettingRequest {
  /** 0 关闭网络攻击检测，1开启网络攻击检测 */
  NetAttackEnable: number;
  /** 0 新增告警事件默认待处理，1新增告警事件默认已处理，3新增告警事件默认忽略 */
  NetAttackAlarmStatus: number;
  /** 1 全部旗舰版主机，0 Quuids列表主机 */
  Scope?: number;
  /** 自选主机 */
  InstanceIds?: string[];
  /** 自选排除的主机 */
  ExcludeInstanceIds?: string[];
  /** 新增资产自动包含 0 不包含 1包含 */
  AutoInclude?: number;
}

declare interface ModifyNetAttackSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetAttackWhiteListRequest {
  /** 是否全部主机； 0否，1是。 */
  Scope: number;
  /** 来源IP 单IP:1.1.1.1 IP范围:1.1.1.1-1.1.2.1 IP范围：1.1.1.0/24 */
  SrcIp: string[];
  /** 是否加白所有符合该规则的告警 ，1:处理,0:不处理 */
  DealOldEvents: number;
  /** 规则id */
  Id: number;
  /** quuid 列表 */
  QuuidList?: string[];
  /** 规则描述 */
  Description?: string;
}

declare interface ModifyNetAttackWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOrderAttributeRequest {
  /** 授权类型 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月 */
  LicenseType: number;
  /** 资源ID */
  ResourceId: string;
  /** 可编辑的属性名称 ,当前支持的有: alias 资源别名 */
  AttrName: string;
  /** 属性值 */
  AttrValue: string;
}

declare interface ModifyOrderAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRansomDefenseEventsStatusRequest {
  /** 需要修改的事件id 数组，支持批量 */
  Ids: number[];
  /** 操作 0待处理，1已处理,2信任,9:删除记录 */
  Status: number;
  /** 是否更新所有同路径事件 */
  All?: boolean;
}

declare interface ModifyRansomDefenseEventsStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRansomDefenseStrategyStatusRequest {
  /** 是否对全部策略生效: 0否，1是 */
  IsAll: number;
  /** 0关闭，1开启，9删除 */
  Status: number;
  /** 策略ID列表 */
  IdList?: number[];
}

declare interface ModifyRansomDefenseStrategyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyReverseShellRulesAggregationRequest {
  /** 规则ID(新增时请留空) */
  Id?: number;
  /** 客户端ID数组 */
  Uuids?: string[];
  /** 主机IP */
  HostIp?: string;
  /** 目标IP */
  DestIp?: string;
  /** 目标端口 */
  DestPort?: string;
  /** 进程名 */
  ProcessName?: string;
  /** 是否全局规则(默认否) */
  IsGlobal?: number;
  /** 事件列表和详情点击加白时关联的事件id (新增规则时请留空) */
  EventId?: number;
  /** 加白方式， 0:常规加白 1:正则加白 */
  WhiteType?: number;
  /** 正则表达式 */
  RuleRegexp?: string;
  /** 处理历史事件， 0:不处理 1:处理 */
  HandleHistory?: number;
  /** 批次id */
  GroupID?: string;
}

declare interface ModifyReverseShellRulesAggregationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRiskDnsPolicyRequest {
  /** 策略 */
  Data: RiskDnsPolicy;
}

declare interface ModifyRiskDnsPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRiskDnsPolicyStatusRequest {
  /** 策略ID */
  PolicyId: number;
  /** 是否生效[0:生效,1:不生效] */
  IsEnabled: number;
}

declare interface ModifyRiskDnsPolicyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRiskEventsStatusRequest {
  /** 操作-0:标记已处理,1:忽略,2:删除记录,3:木马隔离,4:木马恢复隔离,5:木马信任,6:木马取消信任,7:查杀异常进程 */
  Operate: number;
  /** 操作事件类型，文件查杀：MALWARE，异常登录：HOST_LOGIN，密码破解：BRUTE_ATTACK，恶意请求：MALICIOUS_REQUEST，高危命令：BASH_EVENT，本地提权：PRIVILEGE_EVENT，反弹shell：REVERSE_SHELL. 异常进程:PROCESS */
  RiskType: string;
  /** 需要修改的事件id 数组，支持批量 */
  Ids?: number[];
  /** 是否更新全部，即是否对所有的事件进行操作，当ids 不为空时，此参数无效 */
  UpdateAll?: boolean;
  /** 排除的事件id,当操作全部事件时，需要排除这次id */
  ExcludeId?: number[];
  /** 当Operate 是木马隔离时，表示是否要杀进程，其他操作无效 */
  KillProcess?: boolean;
  /** 当RiskType 为异地登录且ids为空时，可以修改所有来源ip的事件的状态 */
  Ip?: string[];
  /** 过滤条件。RiskType为 MALWARE时1、当RiskType为 MALWARE时：IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选FilePath - String - 是否必填：否 - 路径筛选VirusName - String - 是否必填：否 - 描述筛选CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中RiskType 为PROCESS时:过滤条件。IpOrName - String - 是否必填：否 - 主机IP或主机名VirusName - String - 是否必填：否 - 病毒名BeginTime - String - 是否必填：否 - 进程启动时间-开始EndTime - String - 是否必填：否 - 进程启动时间-结束Status - String - 是否必填：否 - 状态筛选 0待处理；1查杀中;2已查杀3已退出;4已信任 */
  Filters?: Filters[];
}

declare interface ModifyRiskEventsStatusResponse {
  /** 此次操作是否是异步操作，0：操作已完成，1：正在异步操作中，前端需要通过DescribeRiskBatchStatus 查询操作是否完成 */
  IsSync: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUsersConfigRequest {
  /** 配置名称license_monitor 新增授权监控配置 0 关闭, 1开启 */
  ConfigName: string;
  /** 配置值 */
  ConfigValue: string;
}

declare interface ModifyUsersConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVulDefenceEventStatusRequest {
  /** 事件id */
  Ids: number[];
  /** 0: 待处理 2:已处理 3: 已忽略 4: 已删除 */
  Status: number;
}

declare interface ModifyVulDefenceEventStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVulDefenceSettingRequest {
  /** 防御开关，0 关闭 1 开启 */
  Enable: number;
  /** 1 全部旗舰版主机，0 Quuids列表主机 */
  Scope: number;
  /** 作用范围内旗舰版主机列表 */
  Quuids?: string[];
  /** 排除作用范围内旗舰版主机列表 */
  ExcludeInstanceIds?: string[];
  /** 新增资产自动包含 0 不包含 1包含 */
  AutoInclude?: number;
  /** 作用范围内旗舰版主机列表 */
  InstanceIds?: string[];
}

declare interface ModifyVulDefenceSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWarningHostConfigRequest {
  /** 告警类型 */
  Type: number;
  /** 告警主机范围类型，0:全部主机，1:按所属项目选，2:按腾讯云标签选，3:按主机安全标签选，4:自选主机 */
  HostRange: number;
  /** 项目或标签的名称列表，自选主机时为空 */
  ItemLabels?: string[];
  /** 机器列表 */
  Quuids?: string[];
  /** 项目或标签的id列表，自选主机时为空 */
  ItemLabelIds?: string[];
}

declare interface ModifyWarningHostConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWarningSettingRequest {
  /** 告警设置的修改内容 */
  WarningObjects: WarningObject[];
}

declare interface ModifyWarningSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebHookPolicyRequest {
  /** id */
  Id?: number;
  /** 策略名称 */
  Name?: string;
  /** 事件类型 */
  Events?: WebHookEventKv[];
  /** 主机范围 */
  HostLabels?: WebHookHostLabel[];
  /** 接收人 */
  Receivers?: WebHookReceiver[];
  /** 格式 0text 1json */
  Format?: number;
  /** 自定义透传字段 */
  CustomFields?: WebHookCustomField[];
  /** 是否启用[1:禁用|0:启用] */
  IsDisabled?: number;
  /** 主机列表 */
  Quuids?: string[];
}

declare interface ModifyWebHookPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebHookPolicyStatusRequest {
  /** id */
  Id: number;
  /** 开关, 1禁用 0启用 */
  IsDisabled?: number;
}

declare interface ModifyWebHookPolicyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebHookReceiverRequest {
  /** id */
  Id?: number;
  /** 接收人名称 */
  Name?: string;
  /** webhook地址 */
  Addr?: string;
  /** 是否修改 */
  IsModify?: boolean;
}

declare interface ModifyWebHookReceiverResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebHookRuleRequest {
  /** 规则内容 */
  Data: WebHookRuleDetail;
}

declare interface ModifyWebHookRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebHookRuleStatusRequest {
  /** 规则Id */
  Id: number;
  /** 开启状态[0:开启|1:关闭] */
  IsDisabled: number;
}

declare interface ModifyWebHookRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebPageProtectDirRequest {
  /** 网站防护目录地址 */
  ProtectDirAddr: string;
  /** 网站防护目录名称 */
  ProtectDirName: string;
  /** 防护文件类型,分号分割 ; */
  ProtectFileType: string;
  /** 防护机器列表信息 */
  HostConfig: ProtectHostConfig[];
}

declare interface ModifyWebPageProtectDirResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebPageProtectSettingRequest {
  /** 需要操作的类型1 目录名称 2 防护文件类型 */
  ModifyType: number;
  /** 提交值 */
  Value: string;
  /** 配置对应的protect_path */
  Id: string;
}

declare interface ModifyWebPageProtectSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebPageProtectSwitchRequest {
  /** 开关类型 1 防护开关 2 自动恢复开关 3 移除防护目录 */
  SwitchType: number;
  /** 需要操作开关的网站 最大100条 */
  Ids: string[];
  /** 1 开启 0 关闭 SwitchType 为 1 | 2 必填; */
  Status?: number;
}

declare interface ModifyWebPageProtectSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RansomDefenseRollbackRequest {
  /** 快照时间 */
  BackupTime: string;
  /** 主机Quuid */
  Quuid?: string;
  /** 需要回滚的硬盘信息，硬盘直接用;分隔，留空为全部已快照磁盘： disk-id1|disk-name1;disk-id2|disk-name2 */
  DiskInfo?: string;
}

declare interface RansomDefenseRollbackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverMalwaresRequest {
  /** 木马Id数组（最大100条） */
  Ids: number[];
}

declare interface RecoverMalwaresResponse {
  /** 恢复成功id数组，若无则返回空数组 */
  SuccessIds: number[];
  /** 恢复失败id数组，若无则返回空数组 */
  FailedIds: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveLocalStorageItemRequest {
  /** 键 */
  Key: string;
}

declare interface RemoveLocalStorageItemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveMachineRequest {
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
}

declare interface RemoveMachineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryCreateSnapshotRequest {
  /** 修复任务id */
  FixId: number;
  /** 主机quuid */
  Quuid: string;
  /** 任务进度返回的快照唯一Id */
  Id: number;
}

declare interface RetryCreateSnapshotResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryVulFixRequest {
  /** 漏洞id */
  FixId: number;
  /** 主机Quuid */
  Quuid: string;
  /** 漏洞id */
  VulId: number;
}

declare interface RetryVulFixResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanAssetRequest {
  /** 资产指纹类型id列表 */
  AssetTypeIds?: number[];
  /** Quuid列表 */
  Quuids?: string[];
}

declare interface ScanAssetResponse {
  /** 任务id */
  TaskId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanBaselineRequest {
  /** 策略id数组(StrategyIdList与CategoryIdList和RuleIdList三选一) */
  StrategyIdList?: number[];
  /** 基线id数组(StrategyIdList与CategoryIdList和RuleIdList三选一) */
  CategoryIdList?: number[];
  /** 检测项id数组(StrategyIdList与CategoryIdList和RuleIdList三选一) */
  RuleIdList?: number[];
  /** 选择StrategyIdList时，不需要填写，其他情况必填 */
  QuuidList?: string[];
  /** 主机Uuid数组 */
  UuidList?: string[];
}

declare interface ScanBaselineResponse {
  /** 正在扫描中的主机Quuid */
  ScanningQuuids: string[] | null;
  /** 任务下发成功返回的TaskId */
  TaskId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanTaskAgainRequest {
  /** 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线 */
  ModuleType: string;
  /** 任务ID */
  TaskId: number;
  /** 自选服务器时生效，主机quuid的string数组 */
  QuuidList?: string[];
  /** 扫描超时时长 */
  TimeoutPeriod?: number;
}

declare interface ScanTaskAgainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanVulAgainRequest {
  /** 漏洞事件id串，多个用英文逗号分隔 */
  EventIds: string;
  /** 重新检查的机器uuid,多个逗号分隔 */
  Uuids?: string;
}

declare interface ScanVulAgainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanVulRequest {
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文;分隔) */
  VulLevels: string;
  /** 服务器分类：1:专业版服务器；2:自选服务器 */
  HostType: number;
  /** 漏洞类型：1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 (多选英文;分隔) */
  VulCategories?: string;
  /** 自选服务器时生效，主机quuid的string数组 */
  QuuidList?: string[];
  /** 是否是应急漏洞 0 否 1 是 */
  VulEmergency?: number;
  /** 超时时长 单位秒 默认 3600 秒 */
  TimeoutPeriod?: number;
  /** 需要扫描的漏洞id */
  VulIds?: number[];
}

declare interface ScanVulResponse {
  /** 任务id */
  TaskId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanVulSettingRequest {
  /** 定期检测间隔时间（天） */
  TimerInterval: number;
  /** 漏洞类型：1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞, 以数组方式传参[1,2] */
  VulCategories?: number[];
  /** 危害等级：1-低危；2-中危；3-高危；4-严重,以数组方式传参[1,2,3] */
  VulLevels?: number[];
  /** 定期检测时间，如：02:10:50 */
  TimerTime?: string;
  /** 是否是应急漏洞 0 否 1 是 */
  VulEmergency?: number;
  /** 扫描开始时间，如：00:00 */
  StartTime?: string;
  /** 扫描结束时间，如：08:00 */
  EndTime?: string;
  /** 是否开启扫描 1开启 0不开启 */
  EnableScan?: number;
  /** 为空默认扫描全部专业版、旗舰版、普惠版主机，不为空只扫描选中主机 */
  Uuids?: string[];
}

declare interface ScanVulSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchLogRequest {
  /** 要检索分析的日志的起始时间，Unix时间戳（毫秒） */
  StartTime: number;
  /** 要检索分析的日志的结束时间，Unix时间戳（毫秒） */
  EndTime: number;
  /** 检索分析语句，最大长度为12KB */
  QueryString: string;
  /** 表示单次查询返回的原始日志条数，最大值为1000，获取后续日志需使用Context参数 */
  Count?: number;
  /** 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc */
  Sort?: string;
  /** 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时 */
  Context?: string;
}

declare interface SearchLogResponse {
  /** 匹配检索条件的原始日志的数量 */
  Count: number;
  /** 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时 */
  Context: string;
  /** 符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志 */
  ListOver: boolean;
  /** 返回的是否为统计分析（即SQL）结果 */
  Analysis: boolean;
  /** 匹配检索条件的原始日志 */
  Data: LogInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SeparateMalwaresRequest {
  /** 木马事件ID数组。(最大100条) */
  Ids: number[];
  /** 是否杀掉进程 */
  KillProcess?: boolean;
}

declare interface SeparateMalwaresResponse {
  /** 隔离成功的id数组，若无则返回空数组 */
  SuccessIds: number[];
  /** 隔离失败的id数组，若无则返回空数组 */
  FailedIds: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetBashEventsStatusRequest {
  /** ID数组，最大100条。 */
  Ids: number[];
  /** 新状态(0-待处理 1-高危 2-正常) */
  Status: number;
}

declare interface SetBashEventsStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLocalStorageExpireRequest {
  /** 键 */
  Key: string;
  /** 过期时间（单位：秒） */
  Expire: number;
}

declare interface SetLocalStorageExpireResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLocalStorageItemRequest {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
  /** 失效时间（单位；秒） */
  Expire?: number;
}

declare interface SetLocalStorageItemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartBaselineDetectRequest {
  /** 基线检测参数 */
  Param: BaselineDetectParam;
}

declare interface StartBaselineDetectResponse {
  /** 扫描任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopAssetScanRequest {
  /** 任务Id */
  TaskId: number;
}

declare interface StopAssetScanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopBaselineDetectRequest {
  /** 取消任务ID集合 */
  TaskIds: number[];
}

declare interface StopBaselineDetectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopNoticeBanTipsRequest {
}

declare interface StopNoticeBanTipsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchBashRulesRequest {
  /** 规则ID */
  Id: number;
  /** 是否禁用 */
  Disabled: number;
}

declare interface SwitchBashRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncAssetScanRequest {
  /** 是否同步：true-是 false-否；默认false */
  Sync: boolean;
}

declare interface SyncAssetScanResponse {
  /** 枚举值有(大写)：NOTASK（没有同步任务），SYNCING（同步中），FINISHED（同步完成） */
  State: string;
  /** 最新开始同步时间 */
  LatestStartTime: string;
  /** 最新结束同步时间 */
  LatestEndTime: string;
  /** 任务ID */
  TaskId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncBaselineDetectSummaryRequest {
  /** 用于计算检测中和进度的任务ID集合，一般不用传入 */
  TaskIds?: number[];
}

declare interface SyncBaselineDetectSummaryResponse {
  /** 处理进度 */
  ProgressRate?: number;
  /** 未通过策略总数 */
  NotPassPolicyCount?: number;
  /** 主机总数 */
  HostCount?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 1:即将进行首次扫描 0:已经扫描过了 */
  WillFirstScan?: number;
  /** 正在检测的任务ID */
  DetectingTaskIds?: number[];
  /** 扫描中剩余时间(分钟) */
  LeftMins?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncMachinesRequest {
  /** 是否同步 */
  Sync?: boolean;
}

declare interface SyncMachinesResponse {
  /** 枚举值有(大写)：NOTASK（没有同步任务），SYNCING（同步中），FINISHED（同步完成） */
  State: string;
  /** 最新开始同步时间 */
  LatestStartTime: string;
  /** 最新同步结束时间 */
  LatestEndTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TestWebHookRuleRequest {
  /** 规则Id */
  Id: number;
  /** 测试内容 */
  Data: string;
}

declare interface TestWebHookRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TrustMalwaresRequest {
  /** 木马ID数组（单次不超过的最大条数：100） */
  Ids: number[];
}

declare interface TrustMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UntrustMalwaresRequest {
  /** 木马ID数组 (最大100条) */
  Ids: number[];
}

declare interface UntrustMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateBaselineStrategyRequest {
  /** 策略id */
  StrategyId: number;
  /** 策略名称 */
  StrategyName: string;
  /** 检测周期 */
  ScanCycle: number;
  /** 定期检测时间，该时间下发扫描 */
  ScanAt: string;
  /** 该策略下选择的基线id数组 */
  CategoryIds: string[];
  /** 扫描范围是否全部服务器, 1:是 0:否, 为1则为全部专业版主机 */
  IsGlobal: number;
  /** 云主机类型：cvm：腾讯云服务器bm：裸金属ecm：边缘计算主机lh:轻量应用服务器other:混合云机器 */
  MachineType: string;
  /** 主机地域 ap-guangzhou */
  RegionCode: string;
  /** 主机id数组 */
  Quuids: string[];
}

declare interface UpdateBaselineStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateMachineTagsRequest {
  /** 机器 Quuid */
  Quuid: string;
  /** 标签ID，该操作会覆盖原有的标签列表 */
  TagIds?: number[];
  /** 服务器地区 如: ap-guangzhou */
  MachineRegion?: string;
  /** 服务器类型(CVM|BM|ECM|LH|Other) */
  MachineArea?: string;
}

declare interface UpdateMachineTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cwp 主机安全} */
declare interface Cwp {
  (): Versions;
  /** 批量添加异地登录白名单 {@link AddLoginWhiteListsRequest} {@link AddLoginWhiteListsResponse} */
  AddLoginWhiteLists(data: AddLoginWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<AddLoginWhiteListsResponse>;
  /** 取消漏洞忽略 {@link CancelIgnoreVulRequest} {@link CancelIgnoreVulResponse} */
  CancelIgnoreVul(data: CancelIgnoreVulRequest, config?: AxiosRequestConfig): AxiosPromise<CancelIgnoreVulResponse>;
  /** 修改事件忽略状态 {@link ChangeRuleEventsIgnoreStatusRequest} {@link ChangeRuleEventsIgnoreStatusResponse} */
  ChangeRuleEventsIgnoreStatus(data: ChangeRuleEventsIgnoreStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeRuleEventsIgnoreStatusResponse>;
  /** 修改策略可用状态 {@link ChangeStrategyEnableStatusRequest} {@link ChangeStrategyEnableStatusResponse} */
  ChangeStrategyEnableStatus(data: ChangeStrategyEnableStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeStrategyEnableStatusResponse>;
  /** 校验高危命新增用户策略参数 {@link CheckBashPolicyParamsRequest} {@link CheckBashPolicyParamsResponse} */
  CheckBashPolicyParams(data: CheckBashPolicyParamsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckBashPolicyParamsResponse>;
  /** 校验高危命新增用户规则参数 {@link CheckBashRuleParamsRequest} {@link CheckBashRuleParamsResponse} */
  CheckBashRuleParams(data: CheckBashRuleParamsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckBashRuleParamsResponse>;
  /** 检验核心文件监控前端输入的规则参数 {@link CheckFileTamperRuleRequest} {@link CheckFileTamperRuleResponse} */
  CheckFileTamperRule(data?: CheckFileTamperRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CheckFileTamperRuleResponse>;
  /** 查询基线是否首次检测 {@link CheckFirstScanBaselineRequest} {@link CheckFirstScanBaselineResponse} */
  CheckFirstScanBaseline(data?: CheckFirstScanBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<CheckFirstScanBaselineResponse>;
  /** 检查日志投递kafka连通性 {@link CheckLogKafkaConnectionStateRequest} {@link CheckLogKafkaConnectionStateResponse} */
  CheckLogKafkaConnectionState(data: CheckLogKafkaConnectionStateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckLogKafkaConnectionStateResponse>;
  /** 清理本地存储数据 {@link ClearLocalStorageRequest} {@link ClearLocalStorageResponse} */
  ClearLocalStorage(data?: ClearLocalStorageRequest, config?: AxiosRequestConfig): AxiosPromise<ClearLocalStorageResponse>;
  /** 添加阻断白名单列表 {@link CreateBanWhiteListRequest} {@link CreateBanWhiteListResponse} */
  CreateBanWhiteList(data: CreateBanWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBanWhiteListResponse>;
  /** 创建基线策略 {@link CreateBaselineStrategyRequest} {@link CreateBaselineStrategyResponse} */
  CreateBaselineStrategy(data: CreateBaselineStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaselineStrategyResponse>;
  /** 创建新购授权绑定任务 {@link CreateBuyBindTaskRequest} {@link CreateBuyBindTaskResponse} */
  CreateBuyBindTask(data: CreateBuyBindTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBuyBindTaskResponse>;
  /** @deprecated 云护航服务确认收货 {@link CreateCloudProtectServiceOrderRecordRequest} {@link CreateCloudProtectServiceOrderRecordResponse} */
  CreateCloudProtectServiceOrderRecord(data: CreateCloudProtectServiceOrderRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudProtectServiceOrderRecordResponse>;
  /** 应急漏洞扫描 {@link CreateEmergencyVulScanRequest} {@link CreateEmergencyVulScanResponse} */
  CreateEmergencyVulScan(data: CreateEmergencyVulScanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmergencyVulScanResponse>;
  /** 触发事件调查回溯 {@link CreateIncidentBacktrackingRequest} {@link CreateIncidentBacktrackingResponse} */
  CreateIncidentBacktracking(data: CreateIncidentBacktrackingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIncidentBacktrackingResponse>;
  /** 创建授权订单 {@link CreateLicenseOrderRequest} {@link CreateLicenseOrderResponse} */
  CreateLicenseOrder(data?: CreateLicenseOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLicenseOrderResponse>;
  /** 创建日志下载任务 {@link CreateLogExportRequest} {@link CreateLogExportResponse} */
  CreateLogExport(data: CreateLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLogExportResponse>;
  /** 添加恶意请求白名单 {@link CreateMaliciousRequestWhiteListRequest} {@link CreateMaliciousRequestWhiteListResponse} */
  CreateMaliciousRequestWhiteList(data: CreateMaliciousRequestWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMaliciousRequestWhiteListResponse>;
  /** 创建木马白名单 {@link CreateMalwareWhiteListRequest} {@link CreateMalwareWhiteListResponse} */
  CreateMalwareWhiteList(data: CreateMalwareWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMalwareWhiteListResponse>;
  /** 创建网络攻击白名单 {@link CreateNetAttackWhiteListRequest} {@link CreateNetAttackWhiteListResponse} */
  CreateNetAttackWhiteList(data: CreateNetAttackWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetAttackWhiteListResponse>;
  /** 添加网站防护服务器 {@link CreateProtectServerRequest} {@link CreateProtectServerResponse} */
  CreateProtectServer(data: CreateProtectServerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProtectServerResponse>;
  /** 创建或修改防勒索策略 {@link CreateRansomDefenseStrategyRequest} {@link CreateRansomDefenseStrategyResponse} */
  CreateRansomDefenseStrategy(data: CreateRansomDefenseStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRansomDefenseStrategyResponse>;
  /** 文件查杀检测 {@link CreateScanMalwareSettingRequest} {@link CreateScanMalwareSettingResponse} */
  CreateScanMalwareSetting(data: CreateScanMalwareSettingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScanMalwareSettingResponse>;
  /** 添加历史搜索记录 {@link CreateSearchLogRequest} {@link CreateSearchLogResponse} */
  CreateSearchLog(data: CreateSearchLogRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSearchLogResponse>;
  /** 添加检索模板 {@link CreateSearchTemplateRequest} {@link CreateSearchTemplateResponse} */
  CreateSearchTemplate(data: CreateSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSearchTemplateResponse>;
  /** 漏洞修护-提交漏洞修护 {@link CreateVulFixRequest} {@link CreateVulFixResponse} */
  CreateVulFix(data: CreateVulFixRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulFixResponse>;
  /** 创建白名单订单 {@link CreateWhiteListOrderRequest} {@link CreateWhiteListOrderResponse} */
  CreateWhiteListOrder(data: CreateWhiteListOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWhiteListOrderResponse>;
  /** 删除全部java内存马事件 {@link DeleteAllJavaMemShellsRequest} {@link DeleteAllJavaMemShellsResponse} */
  DeleteAllJavaMemShells(data?: DeleteAllJavaMemShellsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAllJavaMemShellsResponse>;
  /** 删除阻断白名单列表 {@link DeleteBanWhiteListRequest} {@link DeleteBanWhiteListResponse} */
  DeleteBanWhiteList(data: DeleteBanWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBanWhiteListResponse>;
  /** 删除基线策略配置 {@link DeleteBaselinePolicyRequest} {@link DeleteBaselinePolicyResponse} */
  DeleteBaselinePolicy(data: DeleteBaselinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselinePolicyResponse>;
  /** 删除基线规则 {@link DeleteBaselineRuleRequest} {@link DeleteBaselineRuleResponse} */
  DeleteBaselineRule(data: DeleteBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselineRuleResponse>;
  /** 删除基线忽略规则 {@link DeleteBaselineRuleIgnoreRequest} {@link DeleteBaselineRuleIgnoreResponse} */
  DeleteBaselineRuleIgnore(data: DeleteBaselineRuleIgnoreRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselineRuleIgnoreResponse>;
  /** 删除基线策略 {@link DeleteBaselineStrategyRequest} {@link DeleteBaselineStrategyResponse} */
  DeleteBaselineStrategy(data: DeleteBaselineStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselineStrategyResponse>;
  /** 删除基线弱口令 {@link DeleteBaselineWeakPasswordRequest} {@link DeleteBaselineWeakPasswordResponse} */
  DeleteBaselineWeakPassword(data: DeleteBaselineWeakPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselineWeakPasswordResponse>;
  /** 删除高危命令事件 {@link DeleteBashEventsRequest} {@link DeleteBashEventsResponse} */
  DeleteBashEvents(data: DeleteBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBashEventsResponse>;
  /** 删除高危命令策略 {@link DeleteBashPoliciesRequest} {@link DeleteBashPoliciesResponse} */
  DeleteBashPolicies(data: DeleteBashPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBashPoliciesResponse>;
  /** 删除高危命令规则 {@link DeleteBashRulesRequest} {@link DeleteBashRulesResponse} */
  DeleteBashRules(data: DeleteBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBashRulesResponse>;
  /** 删除暴力破解记录 {@link DeleteBruteAttacksRequest} {@link DeleteBruteAttacksResponse} */
  DeleteBruteAttacks(data: DeleteBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBruteAttacksResponse>;
  /** 删除授权记录 {@link DeleteLicenseRecordRequest} {@link DeleteLicenseRecordResponse} */
  DeleteLicenseRecord(data: DeleteLicenseRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLicenseRecordResponse>;
  /** 删除授权全部记录 {@link DeleteLicenseRecordAllRequest} {@link DeleteLicenseRecordAllResponse} */
  DeleteLicenseRecordAll(data?: DeleteLicenseRecordAllRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLicenseRecordAllResponse>;
  /** 删除日志下载任务 {@link DeleteLogExportRequest} {@link DeleteLogExportResponse} */
  DeleteLogExport(data: DeleteLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogExportResponse>;
  /** 删除异地登录白名单规则 {@link DeleteLoginWhiteListRequest} {@link DeleteLoginWhiteListResponse} */
  DeleteLoginWhiteList(data: DeleteLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoginWhiteListResponse>;
  /** 卸载主机安全客户端 {@link DeleteMachineRequest} {@link DeleteMachineResponse} */
  DeleteMachine(data: DeleteMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineResponse>;
  /** 删除机器清理记录 {@link DeleteMachineClearHistoryRequest} {@link DeleteMachineClearHistoryResponse} */
  DeleteMachineClearHistory(data: DeleteMachineClearHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineClearHistoryResponse>;
  /** 删除服务器关联的标签 {@link DeleteMachineTagRequest} {@link DeleteMachineTagResponse} */
  DeleteMachineTag(data: DeleteMachineTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineTagResponse>;
  /** 删除恶意请求白名单 {@link DeleteMaliciousRequestWhiteListRequest} {@link DeleteMaliciousRequestWhiteListResponse} */
  DeleteMaliciousRequestWhiteList(data: DeleteMaliciousRequestWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMaliciousRequestWhiteListResponse>;
  /** 删除恶意请求记录 {@link DeleteMaliciousRequestsRequest} {@link DeleteMaliciousRequestsResponse} */
  DeleteMaliciousRequests(data: DeleteMaliciousRequestsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMaliciousRequestsResponse>;
  /** 入侵管理-终止扫描任务 {@link DeleteMalwareScanTaskRequest} {@link DeleteMalwareScanTaskResponse} */
  DeleteMalwareScanTask(data?: DeleteMalwareScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMalwareScanTaskResponse>;
  /** 删除木马白名单 {@link DeleteMalwareWhiteListRequest} {@link DeleteMalwareWhiteListResponse} */
  DeleteMalwareWhiteList(data: DeleteMalwareWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMalwareWhiteListResponse>;
  /** 删除木马记录 {@link DeleteMalwaresRequest} {@link DeleteMalwaresResponse} */
  DeleteMalwares(data: DeleteMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMalwaresResponse>;
  /** 删除网络攻击白名单 {@link DeleteNetAttackWhiteListRequest} {@link DeleteNetAttackWhiteListResponse} */
  DeleteNetAttackWhiteList(data: DeleteNetAttackWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetAttackWhiteListResponse>;
  /** 删除异地登录记录 {@link DeleteNonlocalLoginPlacesRequest} {@link DeleteNonlocalLoginPlacesResponse} */
  DeleteNonlocalLoginPlaces(data?: DeleteNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNonlocalLoginPlacesResponse>;
  /** 删除本地提权事件 {@link DeletePrivilegeEventsRequest} {@link DeletePrivilegeEventsResponse} */
  DeletePrivilegeEvents(data: DeletePrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivilegeEventsResponse>;
  /** 删除本地提权规则 {@link DeletePrivilegeRulesRequest} {@link DeletePrivilegeRulesResponse} */
  DeletePrivilegeRules(data: DeletePrivilegeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivilegeRulesResponse>;
  /** 删除防护网站 {@link DeleteProtectDirRequest} {@link DeleteProtectDirResponse} */
  DeleteProtectDir(data: DeleteProtectDirRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProtectDirResponse>;
  /** 删除反弹Shell事件 {@link DeleteReverseShellEventsRequest} {@link DeleteReverseShellEventsResponse} */
  DeleteReverseShellEvents(data: DeleteReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellEventsResponse>;
  /** 删除反弹Shell规则 {@link DeleteReverseShellRulesRequest} {@link DeleteReverseShellRulesResponse} */
  DeleteReverseShellRules(data: DeleteReverseShellRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellRulesResponse>;
  /** 删除恶意请求事件 {@link DeleteRiskDnsEventRequest} {@link DeleteRiskDnsEventResponse} */
  DeleteRiskDnsEvent(data?: DeleteRiskDnsEventRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskDnsEventResponse>;
  /** 删除恶意请求策略 {@link DeleteRiskDnsPolicyRequest} {@link DeleteRiskDnsPolicyResponse} */
  DeleteRiskDnsPolicy(data?: DeleteRiskDnsPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskDnsPolicyResponse>;
  /** 停止扫描任务 {@link DeleteScanTaskRequest} {@link DeleteScanTaskResponse} */
  DeleteScanTask(data: DeleteScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScanTaskResponse>;
  /** 删除检索模板 {@link DeleteSearchTemplateRequest} {@link DeleteSearchTemplateResponse} */
  DeleteSearchTemplate(data: DeleteSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSearchTemplateResponse>;
  /** 删除标签 {@link DeleteTagsRequest} {@link DeleteTagsResponse} */
  DeleteTags(data: DeleteTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTagsResponse>;
  /** 删除告警策略 {@link DeleteWebHookPolicyRequest} {@link DeleteWebHookPolicyResponse} */
  DeleteWebHookPolicy(data?: DeleteWebHookPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebHookPolicyResponse>;
  /** 删除告警接收人 {@link DeleteWebHookReceiverRequest} {@link DeleteWebHookReceiverResponse} */
  DeleteWebHookReceiver(data?: DeleteWebHookReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebHookReceiverResponse>;
  /** 删除企微机器人规则 {@link DeleteWebHookRuleRequest} {@link DeleteWebHookRuleResponse} */
  DeleteWebHookRule(data: DeleteWebHookRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebHookRuleResponse>;
  /** 删除事件记录 {@link DeleteWebPageEventLogRequest} {@link DeleteWebPageEventLogResponse} */
  DeleteWebPageEventLog(data?: DeleteWebPageEventLogRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebPageEventLogResponse>;
  /** 获取用户当前灰度配置 {@link DescribeABTestConfigRequest} {@link DescribeABTestConfigResponse} */
  DescribeABTestConfig(data?: DescribeABTestConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeABTestConfigResponse>;
  /** 获取配置的aeskey和aesiv {@link DescribeAESKeyRequest} {@link DescribeAESKeyResponse} */
  DescribeAESKey(data?: DescribeAESKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAESKeyResponse>;
  /** 获取帐号统计列表数据 {@link DescribeAccountStatisticsRequest} {@link DescribeAccountStatisticsResponse} */
  DescribeAccountStatistics(data?: DescribeAccountStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountStatisticsResponse>;
  /** 获取agent安装命令 {@link DescribeAgentInstallCommandRequest} {@link DescribeAgentInstallCommandResponse} */
  DescribeAgentInstallCommand(data: DescribeAgentInstallCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentInstallCommandResponse>;
  /** 混合云安装agent token获取 {@link DescribeAgentInstallationTokenRequest} {@link DescribeAgentInstallationTokenResponse} */
  DescribeAgentInstallationToken(data: DescribeAgentInstallationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentInstallationTokenResponse>;
  /** 获取告警点所在事件的所有节点信息 {@link DescribeAlarmIncidentNodesRequest} {@link DescribeAlarmIncidentNodesResponse} */
  DescribeAlarmIncidentNodes(data: DescribeAlarmIncidentNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmIncidentNodesResponse>;
  /** 查询告警点id列表 {@link DescribeAlarmVertexIdRequest} {@link DescribeAlarmVertexIdResponse} */
  DescribeAlarmVertexId(data: DescribeAlarmVertexIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmVertexIdResponse>;
  /** 获取所有软件应用数量 {@link DescribeAssetAppCountRequest} {@link DescribeAssetAppCountResponse} */
  DescribeAssetAppCount(data?: DescribeAssetAppCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppCountResponse>;
  /** 查询应用列表 {@link DescribeAssetAppListRequest} {@link DescribeAssetAppListResponse} */
  DescribeAssetAppList(data?: DescribeAssetAppListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppListResponse>;
  /** 获取软件关联进程列表 {@link DescribeAssetAppProcessListRequest} {@link DescribeAssetAppProcessListResponse} */
  DescribeAssetAppProcessList(data: DescribeAssetAppProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppProcessListResponse>;
  /** 获取内核模块详情 {@link DescribeAssetCoreModuleInfoRequest} {@link DescribeAssetCoreModuleInfoResponse} */
  DescribeAssetCoreModuleInfo(data: DescribeAssetCoreModuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetCoreModuleInfoResponse>;
  /** 查询资产管理内核模块列表 {@link DescribeAssetCoreModuleListRequest} {@link DescribeAssetCoreModuleListResponse} */
  DescribeAssetCoreModuleList(data?: DescribeAssetCoreModuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetCoreModuleListResponse>;
  /** 获取所有数据库数量 {@link DescribeAssetDatabaseCountRequest} {@link DescribeAssetDatabaseCountResponse} */
  DescribeAssetDatabaseCount(data?: DescribeAssetDatabaseCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDatabaseCountResponse>;
  /** 获取资产管理数据库详情 {@link DescribeAssetDatabaseInfoRequest} {@link DescribeAssetDatabaseInfoResponse} */
  DescribeAssetDatabaseInfo(data: DescribeAssetDatabaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDatabaseInfoResponse>;
  /** 查询资产管理数据库列表 {@link DescribeAssetDatabaseListRequest} {@link DescribeAssetDatabaseListResponse} */
  DescribeAssetDatabaseList(data?: DescribeAssetDatabaseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDatabaseListResponse>;
  /** 获取主机磁盘分区列表 {@link DescribeAssetDiskListRequest} {@link DescribeAssetDiskListResponse} */
  DescribeAssetDiskList(data: DescribeAssetDiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDiskListResponse>;
  /** 查询资产管理环境变量列表 {@link DescribeAssetEnvListRequest} {@link DescribeAssetEnvListResponse} */
  DescribeAssetEnvList(data?: DescribeAssetEnvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetEnvListResponse>;
  /** 获取主机所有资源数量 {@link DescribeAssetHostTotalCountRequest} {@link DescribeAssetHostTotalCountResponse} */
  DescribeAssetHostTotalCount(data: DescribeAssetHostTotalCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostTotalCountResponse>;
  /** 获取资产数量概况 {@link DescribeAssetInfoRequest} {@link DescribeAssetInfoResponse} */
  DescribeAssetInfo(data?: DescribeAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetInfoResponse>;
  /** 查询资产管理启动服务列表 {@link DescribeAssetInitServiceListRequest} {@link DescribeAssetInitServiceListResponse} */
  DescribeAssetInitServiceList(data?: DescribeAssetInitServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetInitServiceListResponse>;
  /** 获取Jar包详情 {@link DescribeAssetJarInfoRequest} {@link DescribeAssetJarInfoResponse} */
  DescribeAssetJarInfo(data: DescribeAssetJarInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetJarInfoResponse>;
  /** 查询Jar包列表 {@link DescribeAssetJarListRequest} {@link DescribeAssetJarListResponse} */
  DescribeAssetJarList(data?: DescribeAssetJarListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetJarListResponse>;
  /** 获取资源负载概览 {@link DescribeAssetLoadInfoRequest} {@link DescribeAssetLoadInfoResponse} */
  DescribeAssetLoadInfo(data?: DescribeAssetLoadInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetLoadInfoResponse>;
  /** 获取资产管理主机资源详细信息 {@link DescribeAssetMachineDetailRequest} {@link DescribeAssetMachineDetailResponse} */
  DescribeAssetMachineDetail(data: DescribeAssetMachineDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetMachineDetailResponse>;
  /** 获取资源监控列表 {@link DescribeAssetMachineListRequest} {@link DescribeAssetMachineListResponse} */
  DescribeAssetMachineList(data?: DescribeAssetMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetMachineListResponse>;
  /** 获取主机标签Top5 {@link DescribeAssetMachineTagTopRequest} {@link DescribeAssetMachineTagTopResponse} */
  DescribeAssetMachineTagTop(data?: DescribeAssetMachineTagTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetMachineTagTopResponse>;
  /** 查询资产管理计划任务列表 {@link DescribeAssetPlanTaskListRequest} {@link DescribeAssetPlanTaskListResponse} */
  DescribeAssetPlanTaskList(data?: DescribeAssetPlanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPlanTaskListResponse>;
  /** 获取所有端口数量 {@link DescribeAssetPortCountRequest} {@link DescribeAssetPortCountResponse} */
  DescribeAssetPortCount(data?: DescribeAssetPortCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPortCountResponse>;
  /** 获取资产管理端口列表 {@link DescribeAssetPortInfoListRequest} {@link DescribeAssetPortInfoListResponse} */
  DescribeAssetPortInfoList(data?: DescribeAssetPortInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPortInfoListResponse>;
  /** 获取所有进程数量 {@link DescribeAssetProcessCountRequest} {@link DescribeAssetProcessCountResponse} */
  DescribeAssetProcessCount(data?: DescribeAssetProcessCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessCountResponse>;
  /** 获取资产管理进程列表 {@link DescribeAssetProcessInfoListRequest} {@link DescribeAssetProcessInfoListResponse} */
  DescribeAssetProcessInfoList(data?: DescribeAssetProcessInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessInfoListResponse>;
  /** 获取主机概况趋势 {@link DescribeAssetRecentMachineInfoRequest} {@link DescribeAssetRecentMachineInfoResponse} */
  DescribeAssetRecentMachineInfo(data: DescribeAssetRecentMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetRecentMachineInfoResponse>;
  /** 获取资产管理系统安装包列表 {@link DescribeAssetSystemPackageListRequest} {@link DescribeAssetSystemPackageListResponse} */
  DescribeAssetSystemPackageList(data?: DescribeAssetSystemPackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSystemPackageListResponse>;
  /** 获取所有资源数量 {@link DescribeAssetTotalCountRequest} {@link DescribeAssetTotalCountResponse} */
  DescribeAssetTotalCount(data?: DescribeAssetTotalCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetTotalCountResponse>;
  /** 获取各种类型资源Top5 {@link DescribeAssetTypeTopRequest} {@link DescribeAssetTypeTopResponse} */
  DescribeAssetTypeTop(data?: DescribeAssetTypeTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetTypeTopResponse>;
  /** 获取资产指纹类型列表 {@link DescribeAssetTypesRequest} {@link DescribeAssetTypesResponse} */
  DescribeAssetTypes(data?: DescribeAssetTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetTypesResponse>;
  /** 获取所有账号数量 {@link DescribeAssetUserCountRequest} {@link DescribeAssetUserCountResponse} */
  DescribeAssetUserCount(data?: DescribeAssetUserCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetUserCountResponse>;
  /** 获取主机账号详情 {@link DescribeAssetUserInfoRequest} {@link DescribeAssetUserInfoResponse} */
  DescribeAssetUserInfo(data: DescribeAssetUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetUserInfoResponse>;
  /** 获取主机账号Key列表 {@link DescribeAssetUserKeyListRequest} {@link DescribeAssetUserKeyListResponse} */
  DescribeAssetUserKeyList(data: DescribeAssetUserKeyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetUserKeyListResponse>;
  /** 获取账号列表 {@link DescribeAssetUserListRequest} {@link DescribeAssetUserListResponse} */
  DescribeAssetUserList(data?: DescribeAssetUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetUserListResponse>;
  /** 获取所有Web应用数量 {@link DescribeAssetWebAppCountRequest} {@link DescribeAssetWebAppCountResponse} */
  DescribeAssetWebAppCount(data?: DescribeAssetWebAppCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebAppCountResponse>;
  /** 获取资产管理Web应用列表 {@link DescribeAssetWebAppListRequest} {@link DescribeAssetWebAppListResponse} */
  DescribeAssetWebAppList(data?: DescribeAssetWebAppListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebAppListResponse>;
  /** 获取资产管理Web应用插件列表 {@link DescribeAssetWebAppPluginListRequest} {@link DescribeAssetWebAppPluginListResponse} */
  DescribeAssetWebAppPluginList(data: DescribeAssetWebAppPluginListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebAppPluginListResponse>;
  /** 获取所有Web框架数量 {@link DescribeAssetWebFrameCountRequest} {@link DescribeAssetWebFrameCountResponse} */
  DescribeAssetWebFrameCount(data?: DescribeAssetWebFrameCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebFrameCountResponse>;
  /** 获取资产管理Web框架列表 {@link DescribeAssetWebFrameListRequest} {@link DescribeAssetWebFrameListResponse} */
  DescribeAssetWebFrameList(data?: DescribeAssetWebFrameListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebFrameListResponse>;
  /** 获取所有Web站点数量 {@link DescribeAssetWebLocationCountRequest} {@link DescribeAssetWebLocationCountResponse} */
  DescribeAssetWebLocationCount(data?: DescribeAssetWebLocationCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebLocationCountResponse>;
  /** 获取Web站点详情 {@link DescribeAssetWebLocationInfoRequest} {@link DescribeAssetWebLocationInfoResponse} */
  DescribeAssetWebLocationInfo(data: DescribeAssetWebLocationInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebLocationInfoResponse>;
  /** 获取Web站点列表 {@link DescribeAssetWebLocationListRequest} {@link DescribeAssetWebLocationListResponse} */
  DescribeAssetWebLocationList(data?: DescribeAssetWebLocationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebLocationListResponse>;
  /** 获取Web站点虚拟目录列表 {@link DescribeAssetWebLocationPathListRequest} {@link DescribeAssetWebLocationPathListResponse} */
  DescribeAssetWebLocationPathList(data: DescribeAssetWebLocationPathListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebLocationPathListResponse>;
  /** 获取所有Web服务数量 {@link DescribeAssetWebServiceCountRequest} {@link DescribeAssetWebServiceCountResponse} */
  DescribeAssetWebServiceCount(data?: DescribeAssetWebServiceCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceCountResponse>;
  /** 查询资产管理Web服务列表 {@link DescribeAssetWebServiceInfoListRequest} {@link DescribeAssetWebServiceInfoListResponse} */
  DescribeAssetWebServiceInfoList(data?: DescribeAssetWebServiceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceInfoListResponse>;
  /** 获取Web服务关联进程列表 {@link DescribeAssetWebServiceProcessListRequest} {@link DescribeAssetWebServiceProcessListResponse} */
  DescribeAssetWebServiceProcessList(data: DescribeAssetWebServiceProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceProcessListResponse>;
  /** 网络攻击事件详情 {@link DescribeAttackEventInfoRequest} {@link DescribeAttackEventInfoResponse} */
  DescribeAttackEventInfo(data: DescribeAttackEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackEventInfoResponse>;
  /** 网络攻击检测事件列表 {@link DescribeAttackEventsRequest} {@link DescribeAttackEventsResponse} */
  DescribeAttackEvents(data?: DescribeAttackEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackEventsResponse>;
  /** 网络攻击日志列表(待下线,请使用DescribeAttackEvents代替) {@link DescribeAttackLogsRequest} {@link DescribeAttackLogsResponse} */
  DescribeAttackLogs(data?: DescribeAttackLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackLogsResponse>;
  /** 查询攻击溯源 {@link DescribeAttackSourceRequest} {@link DescribeAttackSourceResponse} */
  DescribeAttackSource(data: DescribeAttackSourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackSourceResponse>;
  /** 查询攻击溯源事件 {@link DescribeAttackSourceEventsRequest} {@link DescribeAttackSourceEventsResponse} */
  DescribeAttackSourceEvents(data: DescribeAttackSourceEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackSourceEventsResponse>;
  /** 网络攻击数据统计 {@link DescribeAttackStatisticsRequest} {@link DescribeAttackStatisticsResponse} */
  DescribeAttackStatistics(data?: DescribeAttackStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackStatisticsResponse>;
  /** 网络攻击top数据列表 {@link DescribeAttackTopRequest} {@link DescribeAttackTopResponse} */
  DescribeAttackTop(data?: DescribeAttackTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackTopResponse>;
  /** 网络攻击趋势数据 {@link DescribeAttackTrendsRequest} {@link DescribeAttackTrendsResponse} */
  DescribeAttackTrends(data?: DescribeAttackTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackTrendsResponse>;
  /** 获取网络攻击威胁类型列表 {@link DescribeAttackVulTypeListRequest} {@link DescribeAttackVulTypeListResponse} */
  DescribeAttackVulTypeList(data?: DescribeAttackVulTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackVulTypeListResponse>;
  /** 可用订单详情 {@link DescribeAvailableExpertServiceDetailRequest} {@link DescribeAvailableExpertServiceDetailResponse} */
  DescribeAvailableExpertServiceDetail(data?: DescribeAvailableExpertServiceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableExpertServiceDetailResponse>;
  /** 获取爆破阻断模式 {@link DescribeBanModeRequest} {@link DescribeBanModeResponse} */
  DescribeBanMode(data?: DescribeBanModeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanModeResponse>;
  /** 获取阻断地域 {@link DescribeBanRegionsRequest} {@link DescribeBanRegionsResponse} */
  DescribeBanRegions(data: DescribeBanRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanRegionsResponse>;
  /** 获取阻断按钮状态 {@link DescribeBanStatusRequest} {@link DescribeBanStatusResponse} */
  DescribeBanStatus(data?: DescribeBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanStatusResponse>;
  /** 获取阻断白名单列表 {@link DescribeBanWhiteListRequest} {@link DescribeBanWhiteListResponse} */
  DescribeBanWhiteList(data?: DescribeBanWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanWhiteListResponse>;
  /** 基线策略概览统计数据查询 {@link DescribeBaselineAnalysisDataRequest} {@link DescribeBaselineAnalysisDataResponse} */
  DescribeBaselineAnalysisData(data: DescribeBaselineAnalysisDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineAnalysisDataResponse>;
  /** 查询基线基础信息 {@link DescribeBaselineBasicInfoRequest} {@link DescribeBaselineBasicInfoResponse} */
  DescribeBaselineBasicInfo(data?: DescribeBaselineBasicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineBasicInfoResponse>;
  /** 查询基线默认策略列表信息 {@link DescribeBaselineDefaultStrategyListRequest} {@link DescribeBaselineDefaultStrategyListResponse} */
  DescribeBaselineDefaultStrategyList(data?: DescribeBaselineDefaultStrategyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineDefaultStrategyListResponse>;
  /** 查询基线详情 {@link DescribeBaselineDetailRequest} {@link DescribeBaselineDetailResponse} */
  DescribeBaselineDetail(data: DescribeBaselineDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineDetailResponse>;
  /** 获取基线检测详情记录 {@link DescribeBaselineDetectListRequest} {@link DescribeBaselineDetectListResponse} */
  DescribeBaselineDetectList(data?: DescribeBaselineDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineDetectListResponse>;
  /** 获取基线检测概览 {@link DescribeBaselineDetectOverviewRequest} {@link DescribeBaselineDetectOverviewResponse} */
  DescribeBaselineDetectOverview(data?: DescribeBaselineDetectOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineDetectOverviewResponse>;
  /** 获取基线下载列表 {@link DescribeBaselineDownloadListRequest} {@link DescribeBaselineDownloadListResponse} */
  DescribeBaselineDownloadList(data?: DescribeBaselineDownloadListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineDownloadListResponse>;
  /** 基线影响主机列表 {@link DescribeBaselineEffectHostListRequest} {@link DescribeBaselineEffectHostListResponse} */
  DescribeBaselineEffectHostList(data: DescribeBaselineEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineEffectHostListResponse>;
  /** 获取基线修复列表 {@link DescribeBaselineFixListRequest} {@link DescribeBaselineFixListResponse} */
  DescribeBaselineFixList(data?: DescribeBaselineFixListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineFixListResponse>;
  /** 获取基线检测主机列表 {@link DescribeBaselineHostDetectListRequest} {@link DescribeBaselineHostDetectListResponse} */
  DescribeBaselineHostDetectList(data?: DescribeBaselineHostDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineHostDetectListResponse>;
  /** 获取忽略规则主机列表 {@link DescribeBaselineHostIgnoreListRequest} {@link DescribeBaselineHostIgnoreListResponse} */
  DescribeBaselineHostIgnoreList(data: DescribeBaselineHostIgnoreListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineHostIgnoreListResponse>;
  /** 获取基线服务器风险TOP5 {@link DescribeBaselineHostRiskTopRequest} {@link DescribeBaselineHostRiskTopResponse} */
  DescribeBaselineHostRiskTop(data?: DescribeBaselineHostRiskTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineHostRiskTopResponse>;
  /** 服务器风险top接口 {@link DescribeBaselineHostTopRequest} {@link DescribeBaselineHostTopResponse} */
  DescribeBaselineHostTop(data: DescribeBaselineHostTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineHostTopResponse>;
  /** 获取基线检测项的列表 {@link DescribeBaselineItemDetectListRequest} {@link DescribeBaselineItemDetectListResponse} */
  DescribeBaselineItemDetectList(data?: DescribeBaselineItemDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemDetectListResponse>;
  /** 获取忽略规则项列表 {@link DescribeBaselineItemIgnoreListRequest} {@link DescribeBaselineItemIgnoreListResponse} */
  DescribeBaselineItemIgnoreList(data: DescribeBaselineItemIgnoreListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemIgnoreListResponse>;
  /** 获取基线检测项信息 {@link DescribeBaselineItemInfoRequest} {@link DescribeBaselineItemInfoResponse} */
  DescribeBaselineItemInfo(data?: DescribeBaselineItemInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemInfoResponse>;
  /** 获取基线项检测结果列表 {@link DescribeBaselineItemListRequest} {@link DescribeBaselineItemListResponse} */
  DescribeBaselineItemList(data?: DescribeBaselineItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemListResponse>;
  /** 获取基线检测项TOP5 {@link DescribeBaselineItemRiskTopRequest} {@link DescribeBaselineItemRiskTopResponse} */
  DescribeBaselineItemRiskTop(data?: DescribeBaselineItemRiskTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemRiskTopResponse>;
  /** 查询基线列表 {@link DescribeBaselineListRequest} {@link DescribeBaselineListResponse} */
  DescribeBaselineList(data: DescribeBaselineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineListResponse>;
  /** 获取基线策略列表 {@link DescribeBaselinePolicyListRequest} {@link DescribeBaselinePolicyListResponse} */
  DescribeBaselinePolicyList(data?: DescribeBaselinePolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselinePolicyListResponse>;
  /** 查询基线检测项信息 {@link DescribeBaselineRuleRequest} {@link DescribeBaselineRuleResponse} */
  DescribeBaselineRule(data: DescribeBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineRuleResponse>;
  /** 获取基线分类列表 {@link DescribeBaselineRuleCategoryListRequest} {@link DescribeBaselineRuleCategoryListResponse} */
  DescribeBaselineRuleCategoryList(data?: DescribeBaselineRuleCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineRuleCategoryListResponse>;
  /** 获取基线规则检测列表 {@link DescribeBaselineRuleDetectListRequest} {@link DescribeBaselineRuleDetectListResponse} */
  DescribeBaselineRuleDetectList(data?: DescribeBaselineRuleDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineRuleDetectListResponse>;
  /** 获取基线忽略规则列表 {@link DescribeBaselineRuleIgnoreListRequest} {@link DescribeBaselineRuleIgnoreListResponse} */
  DescribeBaselineRuleIgnoreList(data?: DescribeBaselineRuleIgnoreListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineRuleIgnoreListResponse>;
  /** 获取基线规则列表 {@link DescribeBaselineRuleListRequest} {@link DescribeBaselineRuleListResponse} */
  DescribeBaselineRuleList(data?: DescribeBaselineRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineRuleListResponse>;
  /** 基线检测进度查询 {@link DescribeBaselineScanScheduleRequest} {@link DescribeBaselineScanScheduleResponse} */
  DescribeBaselineScanSchedule(data: DescribeBaselineScanScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineScanScheduleResponse>;
  /** 查询基线策略详情 {@link DescribeBaselineStrategyDetailRequest} {@link DescribeBaselineStrategyDetailResponse} */
  DescribeBaselineStrategyDetail(data: DescribeBaselineStrategyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineStrategyDetailResponse>;
  /** 用户基线策略列表查询 {@link DescribeBaselineStrategyListRequest} {@link DescribeBaselineStrategyListResponse} */
  DescribeBaselineStrategyList(data: DescribeBaselineStrategyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineStrategyListResponse>;
  /** 基线检测项TOP {@link DescribeBaselineTopRequest} {@link DescribeBaselineTopResponse} */
  DescribeBaselineTop(data: DescribeBaselineTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineTopResponse>;
  /** 获取基线弱口令列表 {@link DescribeBaselineWeakPasswordListRequest} {@link DescribeBaselineWeakPasswordListResponse} */
  DescribeBaselineWeakPasswordList(data?: DescribeBaselineWeakPasswordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineWeakPasswordListResponse>;
  /** 获取高危命令列表 {@link DescribeBashEventsRequest} {@link DescribeBashEventsResponse} */
  DescribeBashEvents(data?: DescribeBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashEventsResponse>;
  /** 高危命令详情 {@link DescribeBashEventsInfoRequest} {@link DescribeBashEventsInfoResponse} */
  DescribeBashEventsInfo(data: DescribeBashEventsInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashEventsInfoResponse>;
  /** 高危命令详情(新) {@link DescribeBashEventsInfoNewRequest} {@link DescribeBashEventsInfoNewResponse} */
  DescribeBashEventsInfoNew(data: DescribeBashEventsInfoNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashEventsInfoNewResponse>;
  /** 获取高危命令列表(新) {@link DescribeBashEventsNewRequest} {@link DescribeBashEventsNewResponse} */
  DescribeBashEventsNew(data?: DescribeBashEventsNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashEventsNewResponse>;
  /** 获取高危命令策略列表 {@link DescribeBashPoliciesRequest} {@link DescribeBashPoliciesResponse} */
  DescribeBashPolicies(data?: DescribeBashPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashPoliciesResponse>;
  /** 获取高危命令规则列表 {@link DescribeBashRulesRequest} {@link DescribeBashRulesResponse} */
  DescribeBashRules(data: DescribeBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashRulesResponse>;
  /** 获取密码破解列表 {@link DescribeBruteAttackListRequest} {@link DescribeBruteAttackListResponse} */
  DescribeBruteAttackList(data?: DescribeBruteAttackListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBruteAttackListResponse>;
  /** 获取爆破破解规则 {@link DescribeBruteAttackRulesRequest} {@link DescribeBruteAttackRulesResponse} */
  DescribeBruteAttackRules(data?: DescribeBruteAttackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBruteAttackRulesResponse>;
  /** 查询可修护主机信息 {@link DescribeCanFixVulMachineRequest} {@link DescribeCanFixVulMachineResponse} */
  DescribeCanFixVulMachine(data: DescribeCanFixVulMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCanFixVulMachineResponse>;
  /** 获取木马不可隔离的主机 {@link DescribeCanNotSeparateMachineRequest} {@link DescribeCanNotSeparateMachineResponse} */
  DescribeCanNotSeparateMachine(data?: DescribeCanNotSeparateMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCanNotSeparateMachineResponse>;
  /** 获取客户端异常事件 {@link DescribeClientExceptionRequest} {@link DescribeClientExceptionResponse} */
  DescribeClientException(data: DescribeClientExceptionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClientExceptionResponse>;
  /** 查询云护航服务订单列表 {@link DescribeCloudProtectServiceOrderListRequest} {@link DescribeCloudProtectServiceOrderListResponse} */
  DescribeCloudProtectServiceOrderList(data?: DescribeCloudProtectServiceOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudProtectServiceOrderListResponse>;
  /** 获取组件统计列表 {@link DescribeComponentStatisticsRequest} {@link DescribeComponentStatisticsResponse} */
  DescribeComponentStatistics(data?: DescribeComponentStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComponentStatisticsResponse>;
  /** 获取漏洞防御事件详情 {@link DescribeDefenceEventDetailRequest} {@link DescribeDefenceEventDetailResponse} */
  DescribeDefenceEventDetail(data: DescribeDefenceEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefenceEventDetailResponse>;
  /** 获取专线agent安装命令 {@link DescribeDirectConnectInstallCommandRequest} {@link DescribeDirectConnectInstallCommandResponse} */
  DescribeDirectConnectInstallCommand(data: DescribeDirectConnectInstallCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectInstallCommandResponse>;
  /** 获取ES字段聚合结果 {@link DescribeESAggregationsRequest} {@link DescribeESAggregationsResponse} */
  DescribeESAggregations(data: DescribeESAggregationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeESAggregationsResponse>;
  /** 应急响应列表 {@link DescribeEmergencyResponseListRequest} {@link DescribeEmergencyResponseListResponse} */
  DescribeEmergencyResponseList(data?: DescribeEmergencyResponseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmergencyResponseListResponse>;
  /** 应急漏洞列表 {@link DescribeEmergencyVulListRequest} {@link DescribeEmergencyVulListResponse} */
  DescribeEmergencyVulList(data?: DescribeEmergencyVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmergencyVulListResponse>;
  /** 根据事件表名和id查询告警事件详情 {@link DescribeEventByTableRequest} {@link DescribeEventByTableResponse} */
  DescribeEventByTable(data: DescribeEventByTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventByTableResponse>;
  /** 安全管家列表 {@link DescribeExpertServiceListRequest} {@link DescribeExpertServiceListResponse} */
  DescribeExpertServiceList(data?: DescribeExpertServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExpertServiceListResponse>;
  /** 专家服务订单列表 {@link DescribeExpertServiceOrderListRequest} {@link DescribeExpertServiceOrderListResponse} */
  DescribeExpertServiceOrderList(data?: DescribeExpertServiceOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExpertServiceOrderListResponse>;
  /** 导出区域主机列表 {@link DescribeExportMachinesRequest} {@link DescribeExportMachinesResponse} */
  DescribeExportMachines(data: DescribeExportMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportMachinesResponse>;
  /** 日志快速分析统计 {@link DescribeFastAnalysisRequest} {@link DescribeFastAnalysisResponse} */
  DescribeFastAnalysis(data: DescribeFastAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFastAnalysisResponse>;
  /** 查看产生事件时规则详情接口 {@link DescribeFileTamperEventRuleInfoRequest} {@link DescribeFileTamperEventRuleInfoResponse} */
  DescribeFileTamperEventRuleInfo(data: DescribeFileTamperEventRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileTamperEventRuleInfoResponse>;
  /** 核心文件监控事件列表 {@link DescribeFileTamperEventsRequest} {@link DescribeFileTamperEventsResponse} */
  DescribeFileTamperEvents(data?: DescribeFileTamperEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileTamperEventsResponse>;
  /** 查询主机关联文件监控规则数量 {@link DescribeFileTamperRuleCountRequest} {@link DescribeFileTamperRuleCountResponse} */
  DescribeFileTamperRuleCount(data: DescribeFileTamperRuleCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileTamperRuleCountResponse>;
  /** 查询文件监控规则详情 {@link DescribeFileTamperRuleInfoRequest} {@link DescribeFileTamperRuleInfoResponse} */
  DescribeFileTamperRuleInfo(data: DescribeFileTamperRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileTamperRuleInfoResponse>;
  /** 核心文件监控规则列表 {@link DescribeFileTamperRulesRequest} {@link DescribeFileTamperRulesResponse} */
  DescribeFileTamperRules(data?: DescribeFileTamperRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileTamperRulesResponse>;
  /** 获取主机相关统计 {@link DescribeGeneralStatRequest} {@link DescribeGeneralStatResponse} */
  DescribeGeneralStat(data?: DescribeGeneralStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralStatResponse>;
  /** 获取帐号变更历史列表 {@link DescribeHistoryAccountsRequest} {@link DescribeHistoryAccountsResponse} */
  DescribeHistoryAccounts(data: DescribeHistoryAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHistoryAccountsResponse>;
  /** 查询日志检索服务信息 {@link DescribeHistoryServiceRequest} {@link DescribeHistoryServiceResponse} */
  DescribeHistoryService(data?: DescribeHistoryServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHistoryServiceResponse>;
  /** 主机信息与标签信息查询 {@link DescribeHostInfoRequest} {@link DescribeHostInfoResponse} */
  DescribeHostInfo(data?: DescribeHostInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostInfoResponse>;
  /** 获取登录审计列表 {@link DescribeHostLoginListRequest} {@link DescribeHostLoginListResponse} */
  DescribeHostLoginList(data?: DescribeHostLoginListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostLoginListResponse>;
  /** 获取全网热点漏洞 {@link DescribeHotVulTopRequest} {@link DescribeHotVulTopResponse} */
  DescribeHotVulTop(data?: DescribeHotVulTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHotVulTopResponse>;
  /** 查询忽略检测项信息 {@link DescribeIgnoreBaselineRuleRequest} {@link DescribeIgnoreBaselineRuleResponse} */
  DescribeIgnoreBaselineRule(data: DescribeIgnoreBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIgnoreBaselineRuleResponse>;
  /** 获取一键忽略受影响的检测项和主机信息 {@link DescribeIgnoreHostAndItemConfigRequest} {@link DescribeIgnoreHostAndItemConfigResponse} */
  DescribeIgnoreHostAndItemConfig(data?: DescribeIgnoreHostAndItemConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIgnoreHostAndItemConfigResponse>;
  /** 查询忽略检测项影响主机列表 {@link DescribeIgnoreRuleEffectHostListRequest} {@link DescribeIgnoreRuleEffectHostListResponse} */
  DescribeIgnoreRuleEffectHostList(data: DescribeIgnoreRuleEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIgnoreRuleEffectHostListResponse>;
  /** 查询批量导入机器信息 {@link DescribeImportMachineInfoRequest} {@link DescribeImportMachineInfoResponse} */
  DescribeImportMachineInfo(data: DescribeImportMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImportMachineInfoResponse>;
  /** 获取索引列表 {@link DescribeIndexListRequest} {@link DescribeIndexListResponse} */
  DescribeIndexList(data?: DescribeIndexListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexListResponse>;
  /** 查询java内存马事件详细信息 {@link DescribeJavaMemShellInfoRequest} {@link DescribeJavaMemShellInfoResponse} */
  DescribeJavaMemShellInfo(data: DescribeJavaMemShellInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJavaMemShellInfoResponse>;
  /** 查询java内存马事件列表 {@link DescribeJavaMemShellListRequest} {@link DescribeJavaMemShellListResponse} */
  DescribeJavaMemShellList(data?: DescribeJavaMemShellListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJavaMemShellListResponse>;
  /** 查询给定主机java内存马插件信息 {@link DescribeJavaMemShellPluginInfoRequest} {@link DescribeJavaMemShellPluginInfoResponse} */
  DescribeJavaMemShellPluginInfo(data: DescribeJavaMemShellPluginInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJavaMemShellPluginInfoResponse>;
  /** 查询java内存马插件列表 {@link DescribeJavaMemShellPluginListRequest} {@link DescribeJavaMemShellPluginListResponse} */
  DescribeJavaMemShellPluginList(data?: DescribeJavaMemShellPluginListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJavaMemShellPluginListResponse>;
  /** 查询授权信息 {@link DescribeLicenseRequest} {@link DescribeLicenseResponse} */
  DescribeLicense(data?: DescribeLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseResponse>;
  /** 查看授权绑定列表 {@link DescribeLicenseBindListRequest} {@link DescribeLicenseBindListResponse} */
  DescribeLicenseBindList(data: DescribeLicenseBindListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseBindListResponse>;
  /** 查询授权绑定进度 {@link DescribeLicenseBindScheduleRequest} {@link DescribeLicenseBindScheduleResponse} */
  DescribeLicenseBindSchedule(data: DescribeLicenseBindScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseBindScheduleResponse>;
  /** 授权概览信息 {@link DescribeLicenseGeneralRequest} {@link DescribeLicenseGeneralResponse} */
  DescribeLicenseGeneral(data?: DescribeLicenseGeneralRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseGeneralResponse>;
  /** 获取授权订单列表 {@link DescribeLicenseListRequest} {@link DescribeLicenseListResponse} */
  DescribeLicenseList(data?: DescribeLicenseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseListResponse>;
  /** 查询授权白名单配置 {@link DescribeLicenseWhiteConfigRequest} {@link DescribeLicenseWhiteConfigResponse} */
  DescribeLicenseWhiteConfig(data: DescribeLicenseWhiteConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseWhiteConfigResponse>;
  /** 查询日志投递kafka可选项列表 {@link DescribeLogDeliveryKafkaOptionsRequest} {@link DescribeLogDeliveryKafkaOptionsResponse} */
  DescribeLogDeliveryKafkaOptions(data?: DescribeLogDeliveryKafkaOptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogDeliveryKafkaOptionsResponse>;
  /** 获取日志下载任务列表 {@link DescribeLogExportsRequest} {@link DescribeLogExportsResponse} */
  DescribeLogExports(data: DescribeLogExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogExportsResponse>;
  /** 获取日志直方图信息 {@link DescribeLogHistogramRequest} {@link DescribeLogHistogramResponse} */
  DescribeLogHistogram(data: DescribeLogHistogramRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogHistogramResponse>;
  /** 查询索引 {@link DescribeLogIndexRequest} {@link DescribeLogIndexResponse} */
  DescribeLogIndex(data?: DescribeLogIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogIndexResponse>;
  /** 获取kafka投递信息 {@link DescribeLogKafkaDeliverInfoRequest} {@link DescribeLogKafkaDeliverInfoResponse} */
  DescribeLogKafkaDeliverInfo(data?: DescribeLogKafkaDeliverInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogKafkaDeliverInfoResponse>;
  /** 获取日志存储配置 {@link DescribeLogStorageConfigRequest} {@link DescribeLogStorageConfigResponse} */
  DescribeLogStorageConfig(data?: DescribeLogStorageConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogStorageConfigResponse>;
  /** 获取日志存储量记录 {@link DescribeLogStorageRecordRequest} {@link DescribeLogStorageRecordResponse} */
  DescribeLogStorageRecord(data?: DescribeLogStorageRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogStorageRecordResponse>;
  /** 获取日志检索容量使用统计 {@link DescribeLogStorageStatisticRequest} {@link DescribeLogStorageStatisticResponse} */
  DescribeLogStorageStatistic(data?: DescribeLogStorageStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogStorageStatisticResponse>;
  /** 获取日志类型 {@link DescribeLogTypeRequest} {@link DescribeLogTypeResponse} */
  DescribeLogType(data?: DescribeLogTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogTypeResponse>;
  /** 获取异地登录白名单合并后列表 {@link DescribeLoginWhiteCombinedListRequest} {@link DescribeLoginWhiteCombinedListResponse} */
  DescribeLoginWhiteCombinedList(data?: DescribeLoginWhiteCombinedListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteCombinedListResponse>;
  /** 查询合并后白名单机器列表 {@link DescribeLoginWhiteHostListRequest} {@link DescribeLoginWhiteHostListResponse} */
  DescribeLoginWhiteHostList(data: DescribeLoginWhiteHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteHostListResponse>;
  /** 获取异地登录白名单列表 {@link DescribeLoginWhiteListRequest} {@link DescribeLoginWhiteListResponse} */
  DescribeLoginWhiteList(data?: DescribeLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteListResponse>;
  /** 查询机器清理历史记录 {@link DescribeMachineClearHistoryRequest} {@link DescribeMachineClearHistoryResponse} */
  DescribeMachineClearHistory(data?: DescribeMachineClearHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineClearHistoryResponse>;
  /** 查询主机高级防御事件数统计 {@link DescribeMachineDefenseCntRequest} {@link DescribeMachineDefenseCntResponse} */
  DescribeMachineDefenseCnt(data?: DescribeMachineDefenseCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineDefenseCntResponse>;
  /** 查询主机相关核心文件监控规则 {@link DescribeMachineFileTamperRulesRequest} {@link DescribeMachineFileTamperRulesResponse} */
  DescribeMachineFileTamperRules(data: DescribeMachineFileTamperRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineFileTamperRulesResponse>;
  /** 查询主机概览 {@link DescribeMachineGeneralRequest} {@link DescribeMachineGeneralResponse} */
  DescribeMachineGeneral(data?: DescribeMachineGeneralRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineGeneralResponse>;
  /** 获取机器详情 {@link DescribeMachineInfoRequest} {@link DescribeMachineInfoResponse} */
  DescribeMachineInfo(data?: DescribeMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineInfoResponse>;
  /** 查询机器授权信息 {@link DescribeMachineLicenseDetailRequest} {@link DescribeMachineLicenseDetailResponse} */
  DescribeMachineLicenseDetail(data: DescribeMachineLicenseDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineLicenseDetailResponse>;
  /** 网页防篡改获取区域主机列表 {@link DescribeMachineListRequest} {@link DescribeMachineListResponse} */
  DescribeMachineList(data: DescribeMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineListResponse>;
  /** 查询机器操作系统列表 {@link DescribeMachineOsListRequest} {@link DescribeMachineOsListResponse} */
  DescribeMachineOsList(data?: DescribeMachineOsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineOsListResponse>;
  /** 查询机器地域列表 {@link DescribeMachineRegionListRequest} {@link DescribeMachineRegionListResponse} */
  DescribeMachineRegionList(data?: DescribeMachineRegionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineRegionListResponse>;
  /** 获取机器地域列表 {@link DescribeMachineRegionsRequest} {@link DescribeMachineRegionsResponse} */
  DescribeMachineRegions(data?: DescribeMachineRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineRegionsResponse>;
  /** 查询主机入侵检测事件统计 {@link DescribeMachineRiskCntRequest} {@link DescribeMachineRiskCntResponse} */
  DescribeMachineRiskCnt(data?: DescribeMachineRiskCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineRiskCntResponse>;
  /** 漏洞修护-查找主机最近创建的快照 {@link DescribeMachineSnapshotRequest} {@link DescribeMachineSnapshotResponse} */
  DescribeMachineSnapshot(data: DescribeMachineSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineSnapshotResponse>;
  /** 获取区域主机列表 {@link DescribeMachinesRequest} {@link DescribeMachinesResponse} */
  DescribeMachines(data: DescribeMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachinesResponse>;
  /** 获取主机列表 {@link DescribeMachinesSimpleRequest} {@link DescribeMachinesSimpleResponse} */
  DescribeMachinesSimple(data: DescribeMachinesSimpleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachinesSimpleResponse>;
  /** 获取木马列表 {@link DescribeMalWareListRequest} {@link DescribeMalWareListResponse} */
  DescribeMalWareList(data?: DescribeMalWareListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalWareListResponse>;
  /** 查询恶意请求白名单列表 {@link DescribeMaliciousRequestWhiteListRequest} {@link DescribeMaliciousRequestWhiteListResponse} */
  DescribeMaliciousRequestWhiteList(data: DescribeMaliciousRequestWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaliciousRequestWhiteListResponse>;
  /** 获取木马文件下载地址 {@link DescribeMalwareFileRequest} {@link DescribeMalwareFileResponse} */
  DescribeMalwareFile(data: DescribeMalwareFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareFileResponse>;
  /** 查看恶意文件详情 {@link DescribeMalwareInfoRequest} {@link DescribeMalwareInfoResponse} */
  DescribeMalwareInfo(data: DescribeMalwareInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareInfoResponse>;
  /** 获取文件查杀概览信息 {@link DescribeMalwareRiskOverviewRequest} {@link DescribeMalwareRiskOverviewResponse} */
  DescribeMalwareRiskOverview(data?: DescribeMalwareRiskOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareRiskOverviewResponse>;
  /** 风险预警提示 {@link DescribeMalwareRiskWarningRequest} {@link DescribeMalwareRiskWarningResponse} */
  DescribeMalwareRiskWarning(data?: DescribeMalwareRiskWarningRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareRiskWarningResponse>;
  /** 查询定时扫描配置 {@link DescribeMalwareTimingScanSettingRequest} {@link DescribeMalwareTimingScanSettingResponse} */
  DescribeMalwareTimingScanSetting(data?: DescribeMalwareTimingScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareTimingScanSettingResponse>;
  /** 获取木马白名单列表 {@link DescribeMalwareWhiteListRequest} {@link DescribeMalwareWhiteListResponse} */
  DescribeMalwareWhiteList(data?: DescribeMalwareWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareWhiteListResponse>;
  /** 获取木马白名单受影响列表 {@link DescribeMalwareWhiteListAffectListRequest} {@link DescribeMalwareWhiteListAffectListResponse} */
  DescribeMalwareWhiteListAffectList(data: DescribeMalwareWhiteListAffectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareWhiteListAffectListResponse>;
  /** 安全管家月巡检报告下载 {@link DescribeMonthInspectionReportRequest} {@link DescribeMonthInspectionReportResponse} */
  DescribeMonthInspectionReport(data: DescribeMonthInspectionReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonthInspectionReportResponse>;
  /** 查询网络攻击设置 {@link DescribeNetAttackSettingRequest} {@link DescribeNetAttackSettingResponse} */
  DescribeNetAttackSetting(data?: DescribeNetAttackSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetAttackSettingResponse>;
  /** 获取网络攻击白名单列表 {@link DescribeNetAttackWhiteListRequest} {@link DescribeNetAttackWhiteListResponse} */
  DescribeNetAttackWhiteList(data?: DescribeNetAttackWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetAttackWhiteListResponse>;
  /** 获取端口统计列表 {@link DescribeOpenPortStatisticsRequest} {@link DescribeOpenPortStatisticsResponse} */
  DescribeOpenPortStatistics(data?: DescribeOpenPortStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpenPortStatisticsResponse>;
  /** 获取概览统计数据 {@link DescribeOverviewStatisticsRequest} {@link DescribeOverviewStatisticsResponse} */
  DescribeOverviewStatistics(data?: DescribeOverviewStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewStatisticsResponse>;
  /** 查询本地提权详情 {@link DescribePrivilegeEventInfoRequest} {@link DescribePrivilegeEventInfoResponse} */
  DescribePrivilegeEventInfo(data: DescribePrivilegeEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivilegeEventInfoResponse>;
  /** 获取本地提权事件列表 {@link DescribePrivilegeEventsRequest} {@link DescribePrivilegeEventsResponse} */
  DescribePrivilegeEvents(data?: DescribePrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivilegeEventsResponse>;
  /** 获取本地提权规则列表 {@link DescribePrivilegeRulesRequest} {@link DescribePrivilegeRulesResponse} */
  DescribePrivilegeRules(data?: DescribePrivilegeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivilegeRulesResponse>;
  /** 获取专业版概览信息 {@link DescribeProVersionInfoRequest} {@link DescribeProVersionInfoResponse} */
  DescribeProVersionInfo(data?: DescribeProVersionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionInfoResponse>;
  /** 获取专业版状态 {@link DescribeProVersionStatusRequest} {@link DescribeProVersionStatusResponse} */
  DescribeProVersionStatus(data: DescribeProVersionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionStatusResponse>;
  /** 获取进程统计列表 {@link DescribeProcessStatisticsRequest} {@link DescribeProcessStatisticsResponse} */
  DescribeProcessStatistics(data?: DescribeProcessStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProcessStatisticsResponse>;
  /** 产品试用状态查询接口 {@link DescribeProductStatusRequest} {@link DescribeProductStatusResponse} */
  DescribeProductStatus(data?: DescribeProductStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductStatusResponse>;
  /** 防护目录列表 {@link DescribeProtectDirListRequest} {@link DescribeProtectDirListResponse} */
  DescribeProtectDirList(data: DescribeProtectDirListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectDirListResponse>;
  /** 查询防护目录关联服务器 {@link DescribeProtectDirRelatedServerRequest} {@link DescribeProtectDirRelatedServerResponse} */
  DescribeProtectDirRelatedServer(data: DescribeProtectDirRelatedServerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectDirRelatedServerResponse>;
  /** 旗舰重保列表 {@link DescribeProtectNetListRequest} {@link DescribeProtectNetListResponse} */
  DescribeProtectNetList(data?: DescribeProtectNetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectNetListResponse>;
  /** 获取公网接入代理安装命令 {@link DescribePublicProxyInstallCommandRequest} {@link DescribePublicProxyInstallCommandResponse} */
  DescribePublicProxyInstallCommand(data?: DescribePublicProxyInstallCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicProxyInstallCommandResponse>;
  /** 查询主机快照备份列表 {@link DescribeRansomDefenseBackupListRequest} {@link DescribeRansomDefenseBackupListResponse} */
  DescribeRansomDefenseBackupList(data: DescribeRansomDefenseBackupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseBackupListResponse>;
  /** 查询防勒索事件列表 {@link DescribeRansomDefenseEventsListRequest} {@link DescribeRansomDefenseEventsListResponse} */
  DescribeRansomDefenseEventsList(data: DescribeRansomDefenseEventsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseEventsListResponse>;
  /** 查询备份详情列表 {@link DescribeRansomDefenseMachineListRequest} {@link DescribeRansomDefenseMachineListResponse} */
  DescribeRansomDefenseMachineList(data: DescribeRansomDefenseMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseMachineListResponse>;
  /** 获取主机绑定策略列表 {@link DescribeRansomDefenseMachineStrategyInfoRequest} {@link DescribeRansomDefenseMachineStrategyInfoResponse} */
  DescribeRansomDefenseMachineStrategyInfo(data: DescribeRansomDefenseMachineStrategyInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseMachineStrategyInfoResponse>;
  /** 查询回滚任务列表 {@link DescribeRansomDefenseRollBackTaskListRequest} {@link DescribeRansomDefenseRollBackTaskListResponse} */
  DescribeRansomDefenseRollBackTaskList(data: DescribeRansomDefenseRollBackTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseRollBackTaskListResponse>;
  /** 获取用户防勒索趋势 {@link DescribeRansomDefenseStateRequest} {@link DescribeRansomDefenseStateResponse} */
  DescribeRansomDefenseState(data?: DescribeRansomDefenseStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseStateResponse>;
  /** 获取策略详情 {@link DescribeRansomDefenseStrategyDetailRequest} {@link DescribeRansomDefenseStrategyDetailResponse} */
  DescribeRansomDefenseStrategyDetail(data: DescribeRansomDefenseStrategyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseStrategyDetailResponse>;
  /** 查询防勒索策略列表 {@link DescribeRansomDefenseStrategyListRequest} {@link DescribeRansomDefenseStrategyListResponse} */
  DescribeRansomDefenseStrategyList(data: DescribeRansomDefenseStrategyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseStrategyListResponse>;
  /** 查询防勒索策略绑定机器列表 {@link DescribeRansomDefenseStrategyMachinesRequest} {@link DescribeRansomDefenseStrategyMachinesResponse} */
  DescribeRansomDefenseStrategyMachines(data: DescribeRansomDefenseStrategyMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseStrategyMachinesResponse>;
  /** 获取全网勒索态势 {@link DescribeRansomDefenseTrendRequest} {@link DescribeRansomDefenseTrendResponse} */
  DescribeRansomDefenseTrend(data?: DescribeRansomDefenseTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRansomDefenseTrendResponse>;
  /** 查询推荐购买防护核数 {@link DescribeRecommendedProtectCpuRequest} {@link DescribeRecommendedProtectCpuResponse} */
  DescribeRecommendedProtectCpu(data?: DescribeRecommendedProtectCpuRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecommendedProtectCpuResponse>;
  /** 查询反弹shell详情 {@link DescribeReverseShellEventInfoRequest} {@link DescribeReverseShellEventInfoResponse} */
  DescribeReverseShellEventInfo(data: DescribeReverseShellEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventInfoResponse>;
  /** 获取反弹Shell列表 {@link DescribeReverseShellEventsRequest} {@link DescribeReverseShellEventsResponse} */
  DescribeReverseShellEvents(data?: DescribeReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsResponse>;
  /** 获取反弹Shell规则列表 {@link DescribeReverseShellRulesRequest} {@link DescribeReverseShellRulesResponse} */
  DescribeReverseShellRules(data?: DescribeReverseShellRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellRulesResponse>;
  /** 查询入侵检测事件更新状态任务是否完成 {@link DescribeRiskBatchStatusRequest} {@link DescribeRiskBatchStatusResponse} */
  DescribeRiskBatchStatus(data: DescribeRiskBatchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskBatchStatusResponse>;
  /** 查询恶意请求事件详情 {@link DescribeRiskDnsEventInfoRequest} {@link DescribeRiskDnsEventInfoResponse} */
  DescribeRiskDnsEventInfo(data: DescribeRiskDnsEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsEventInfoResponse>;
  /** 获取恶意请求事件列表 {@link DescribeRiskDnsEventListRequest} {@link DescribeRiskDnsEventListResponse} */
  DescribeRiskDnsEventList(data?: DescribeRiskDnsEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsEventListResponse>;
  /** 查询恶意请求详情 {@link DescribeRiskDnsInfoRequest} {@link DescribeRiskDnsInfoResponse} */
  DescribeRiskDnsInfo(data: DescribeRiskDnsInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsInfoResponse>;
  /** 获取恶意请求列表 {@link DescribeRiskDnsListRequest} {@link DescribeRiskDnsListResponse} */
  DescribeRiskDnsList(data?: DescribeRiskDnsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsListResponse>;
  /** 获取恶意请求策略列表 {@link DescribeRiskDnsPolicyListRequest} {@link DescribeRiskDnsPolicyListResponse} */
  DescribeRiskDnsPolicyList(data?: DescribeRiskDnsPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsPolicyListResponse>;
  /** 获取异常进程列表 {@link DescribeRiskProcessEventsRequest} {@link DescribeRiskProcessEventsResponse} */
  DescribeRiskProcessEvents(data?: DescribeRiskProcessEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskProcessEventsResponse>;
  /** 安全通知查询 {@link DescribeSafeInfoRequest} {@link DescribeSafeInfoResponse} */
  DescribeSafeInfo(data?: DescribeSafeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSafeInfoResponse>;
  /** 查询木马扫描进度 {@link DescribeScanMalwareScheduleRequest} {@link DescribeScanMalwareScheduleResponse} */
  DescribeScanMalwareSchedule(data?: DescribeScanMalwareScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanMalwareScheduleResponse>;
  /** 查询检测进度 {@link DescribeScanScheduleRequest} {@link DescribeScanScheduleResponse} */
  DescribeScanSchedule(data: DescribeScanScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanScheduleResponse>;
  /** 查询扫描状态 {@link DescribeScanStateRequest} {@link DescribeScanStateResponse} */
  DescribeScanState(data: DescribeScanStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanStateResponse>;
  /** 查询扫描任务详情 {@link DescribeScanTaskDetailsRequest} {@link DescribeScanTaskDetailsResponse} */
  DescribeScanTaskDetails(data: DescribeScanTaskDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskDetailsResponse>;
  /** 查询机器扫描状态列表 {@link DescribeScanTaskStatusRequest} {@link DescribeScanTaskStatusResponse} */
  DescribeScanTaskStatus(data: DescribeScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskStatusResponse>;
  /** 定期检测配置查询 {@link DescribeScanVulSettingRequest} {@link DescribeScanVulSettingResponse} */
  DescribeScanVulSetting(data?: DescribeScanVulSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanVulSettingResponse>;
  /** 大屏可视化获取全网攻击热点 {@link DescribeScreenAttackHotspotRequest} {@link DescribeScreenAttackHotspotResponse} */
  DescribeScreenAttackHotspot(data?: DescribeScreenAttackHotspotRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenAttackHotspotResponse>;
  /** 大屏可视化安全播报 {@link DescribeScreenBroadcastsRequest} {@link DescribeScreenBroadcastsResponse} */
  DescribeScreenBroadcasts(data?: DescribeScreenBroadcastsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenBroadcastsResponse>;
  /** 大屏攻防趋势 {@link DescribeScreenDefenseTrendsRequest} {@link DescribeScreenDefenseTrendsResponse} */
  DescribeScreenDefenseTrends(data?: DescribeScreenDefenseTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenDefenseTrendsResponse>;
  /** 大屏可视化紧急通知 {@link DescribeScreenEmergentMsgRequest} {@link DescribeScreenEmergentMsgResponse} */
  DescribeScreenEmergentMsg(data?: DescribeScreenEmergentMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenEmergentMsgResponse>;
  /** 大屏可视化获取安全事件数统计数据 {@link DescribeScreenEventsCntRequest} {@link DescribeScreenEventsCntResponse} */
  DescribeScreenEventsCnt(data?: DescribeScreenEventsCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenEventsCntResponse>;
  /** 大屏可视化获取主机相关统计 {@link DescribeScreenGeneralStatRequest} {@link DescribeScreenGeneralStatResponse} */
  DescribeScreenGeneralStat(data?: DescribeScreenGeneralStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenGeneralStatResponse>;
  /** 大屏可视化主机入侵详情 {@link DescribeScreenHostInvasionRequest} {@link DescribeScreenHostInvasionResponse} */
  DescribeScreenHostInvasion(data: DescribeScreenHostInvasionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenHostInvasionResponse>;
  /** 大屏可视化主机区域选项列表 {@link DescribeScreenMachineRegionsRequest} {@link DescribeScreenMachineRegionsResponse} */
  DescribeScreenMachineRegions(data?: DescribeScreenMachineRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenMachineRegionsResponse>;
  /** 大屏可视化主机列表 {@link DescribeScreenMachinesRequest} {@link DescribeScreenMachinesResponse} */
  DescribeScreenMachines(data?: DescribeScreenMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenMachinesResponse>;
  /** 大屏可视化主机安全防护引擎介绍 {@link DescribeScreenProtectionCntRequest} {@link DescribeScreenProtectionCntResponse} */
  DescribeScreenProtectionCnt(data?: DescribeScreenProtectionCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenProtectionCntResponse>;
  /** 大屏获取安全防护状态 {@link DescribeScreenProtectionStatRequest} {@link DescribeScreenProtectionStatResponse} */
  DescribeScreenProtectionStat(data?: DescribeScreenProtectionStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenProtectionStatResponse>;
  /** 大屏风险资产top5（今日） {@link DescribeScreenRiskAssetsTopRequest} {@link DescribeScreenRiskAssetsTopResponse} */
  DescribeScreenRiskAssetsTop(data: DescribeScreenRiskAssetsTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenRiskAssetsTopResponse>;
  /** 获取历史搜索记录 {@link DescribeSearchLogsRequest} {@link DescribeSearchLogsResponse} */
  DescribeSearchLogs(data?: DescribeSearchLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchLogsResponse>;
  /** 获取快速检索列表 {@link DescribeSearchTemplatesRequest} {@link DescribeSearchTemplatesResponse} */
  DescribeSearchTemplates(data?: DescribeSearchTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchTemplatesResponse>;
  /** 查询安全播报文章信息 {@link DescribeSecurityBroadcastInfoRequest} {@link DescribeSecurityBroadcastInfoResponse} */
  DescribeSecurityBroadcastInfo(data: DescribeSecurityBroadcastInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityBroadcastInfoResponse>;
  /** 安全播报列表 {@link DescribeSecurityBroadcastsRequest} {@link DescribeSecurityBroadcastsResponse} */
  DescribeSecurityBroadcasts(data?: DescribeSecurityBroadcastsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityBroadcastsResponse>;
  /** 获取安全事件动态消息 {@link DescribeSecurityDynamicsRequest} {@link DescribeSecurityDynamicsResponse} */
  DescribeSecurityDynamics(data?: DescribeSecurityDynamicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityDynamicsResponse>;
  /** 获取安全事件统计 {@link DescribeSecurityEventStatRequest} {@link DescribeSecurityEventStatResponse} */
  DescribeSecurityEventStat(data?: DescribeSecurityEventStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityEventStatResponse>;
  /** 获取安全事件数统计数据 {@link DescribeSecurityEventsCntRequest} {@link DescribeSecurityEventsCntResponse} */
  DescribeSecurityEventsCnt(data?: DescribeSecurityEventsCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityEventsCntResponse>;
  /** 获取安全防护状态 {@link DescribeSecurityProtectionStatRequest} {@link DescribeSecurityProtectionStatResponse} */
  DescribeSecurityProtectionStat(data?: DescribeSecurityProtectionStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityProtectionStatResponse>;
  /** 获取安全事件统计数据 {@link DescribeSecurityTrendsRequest} {@link DescribeSecurityTrendsResponse} */
  DescribeSecurityTrends(data: DescribeSecurityTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityTrendsResponse>;
  /** 查询服务器关联目录详情 {@link DescribeServerRelatedDirInfoRequest} {@link DescribeServerRelatedDirInfoResponse} */
  DescribeServerRelatedDirInfo(data: DescribeServerRelatedDirInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerRelatedDirInfoResponse>;
  /** 获文件查杀概览信息 {@link DescribeServersAndRiskAndFirstInfoRequest} {@link DescribeServersAndRiskAndFirstInfoResponse} */
  DescribeServersAndRiskAndFirstInfo(data?: DescribeServersAndRiskAndFirstInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServersAndRiskAndFirstInfoResponse>;
  /** 根据策略名查询策略是否存在 {@link DescribeStrategyExistRequest} {@link DescribeStrategyExistResponse} */
  DescribeStrategyExist(data: DescribeStrategyExistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategyExistResponse>;
  /** 获取指定标签关联的服务器信息 {@link DescribeTagMachinesRequest} {@link DescribeTagMachinesResponse} */
  DescribeTagMachines(data: DescribeTagMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagMachinesResponse>;
  /** 获取所有主机标签 {@link DescribeTagsRequest} {@link DescribeTagsResponse} */
  DescribeTags(data?: DescribeTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagsResponse>;
  /** 查询试用报告 {@link DescribeTrialReportRequest} {@link DescribeTrialReportResponse} */
  DescribeTrialReport(data?: DescribeTrialReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrialReportResponse>;
  /** 获取指定漏洞分类统计数 {@link DescribeUndoVulCountsRequest} {@link DescribeUndoVulCountsResponse} */
  DescribeUndoVulCounts(data?: DescribeUndoVulCountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUndoVulCountsResponse>;
  /** 查询用户配置 {@link DescribeUsersConfigRequest} {@link DescribeUsersConfigResponse} */
  DescribeUsersConfig(data: DescribeUsersConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersConfigResponse>;
  /** 查询常用登录地 {@link DescribeUsualLoginPlacesRequest} {@link DescribeUsualLoginPlacesResponse} */
  DescribeUsualLoginPlaces(data: DescribeUsualLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsualLoginPlacesResponse>;
  /** 获取病毒库及POC的更新信息 {@link DescribeVdbAndPocInfoRequest} {@link DescribeVdbAndPocInfoResponse} */
  DescribeVdbAndPocInfo(data?: DescribeVdbAndPocInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVdbAndPocInfoResponse>;
  /** 版本比较信息 {@link DescribeVersionCompareChartRequest} {@link DescribeVersionCompareChartResponse} */
  DescribeVersionCompareChart(data?: DescribeVersionCompareChartRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVersionCompareChartResponse>;
  /** 获取专业版和基础版机器数 {@link DescribeVersionStatisticsRequest} {@link DescribeVersionStatisticsResponse} */
  DescribeVersionStatistics(data?: DescribeVersionStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVersionStatisticsResponse>;
  /** 获取指定点属性信息 {@link DescribeVertexDetailRequest} {@link DescribeVertexDetailResponse} */
  DescribeVertexDetail(data: DescribeVertexDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVertexDetailResponse>;
  /** 获取近日指定类型的漏洞数量和主机数量 {@link DescribeVulCountByDatesRequest} {@link DescribeVulCountByDatesResponse} */
  DescribeVulCountByDates(data?: DescribeVulCountByDatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulCountByDatesResponse>;
  /** CveId查询漏洞详情 {@link DescribeVulCveIdInfoRequest} {@link DescribeVulCveIdInfoResponse} */
  DescribeVulCveIdInfo(data: DescribeVulCveIdInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulCveIdInfoResponse>;
  /** 获取漏洞防御事件列表 {@link DescribeVulDefenceEventRequest} {@link DescribeVulDefenceEventResponse} */
  DescribeVulDefenceEvent(data?: DescribeVulDefenceEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceEventResponse>;
  /** 查询漏洞防御列表 {@link DescribeVulDefenceListRequest} {@link DescribeVulDefenceListResponse} */
  DescribeVulDefenceList(data?: DescribeVulDefenceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceListResponse>;
  /** 获取漏洞防御概览信息 {@link DescribeVulDefenceOverviewRequest} {@link DescribeVulDefenceOverviewResponse} */
  DescribeVulDefenceOverview(data?: DescribeVulDefenceOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceOverviewResponse>;
  /** 获取单台主机漏洞防御插件信息 {@link DescribeVulDefencePluginDetailRequest} {@link DescribeVulDefencePluginDetailResponse} */
  DescribeVulDefencePluginDetail(data: DescribeVulDefencePluginDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefencePluginDetailResponse>;
  /** 获取当前异常插件数 {@link DescribeVulDefencePluginExceptionCountRequest} {@link DescribeVulDefencePluginExceptionCountResponse} */
  DescribeVulDefencePluginExceptionCount(data?: DescribeVulDefencePluginExceptionCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefencePluginExceptionCountResponse>;
  /** 获取各主机漏洞防御插件状态 {@link DescribeVulDefencePluginStatusRequest} {@link DescribeVulDefencePluginStatusResponse} */
  DescribeVulDefencePluginStatus(data?: DescribeVulDefencePluginStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefencePluginStatusResponse>;
  /** 获取当前漏洞防御插件设置 {@link DescribeVulDefenceSettingRequest} {@link DescribeVulDefenceSettingResponse} */
  DescribeVulDefenceSetting(data?: DescribeVulDefenceSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceSettingResponse>;
  /** 漏洞影响主机列表 {@link DescribeVulEffectHostListRequest} {@link DescribeVulEffectHostListResponse} */
  DescribeVulEffectHostList(data: DescribeVulEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulEffectHostListResponse>;
  /** 漏洞影响组件列表 {@link DescribeVulEffectModulesRequest} {@link DescribeVulEffectModulesResponse} */
  DescribeVulEffectModules(data: DescribeVulEffectModulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulEffectModulesResponse>;
  /** 获取漏洞紧急通知 {@link DescribeVulEmergentMsgRequest} {@link DescribeVulEmergentMsgResponse} */
  DescribeVulEmergentMsg(data?: DescribeVulEmergentMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulEmergentMsgResponse>;
  /** 漏洞修护-查找主机漏洞修护进度 {@link DescribeVulFixStatusRequest} {@link DescribeVulFixStatusResponse} */
  DescribeVulFixStatus(data?: DescribeVulFixStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulFixStatusResponse>;
  /** 获取待处理漏洞数+影响主机数 {@link DescribeVulHostCountScanTimeRequest} {@link DescribeVulHostCountScanTimeResponse} */
  DescribeVulHostCountScanTime(data?: DescribeVulHostCountScanTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulHostCountScanTimeResponse>;
  /** 获取服务器风险top列表 {@link DescribeVulHostTopRequest} {@link DescribeVulHostTopResponse} */
  DescribeVulHostTop(data: DescribeVulHostTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulHostTopResponse>;
  /** 漏洞详情 {@link DescribeVulInfoCvssRequest} {@link DescribeVulInfoCvssResponse} */
  DescribeVulInfoCvss(data: DescribeVulInfoCvssRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulInfoCvssResponse>;
  /** 获取漏洞标签列表 {@link DescribeVulLabelsRequest} {@link DescribeVulLabelsResponse} */
  DescribeVulLabels(data?: DescribeVulLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLabelsResponse>;
  /** 查询漏洞数量等级分布统计 {@link DescribeVulLevelCountRequest} {@link DescribeVulLevelCountResponse} */
  DescribeVulLevelCount(data?: DescribeVulLevelCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLevelCountResponse>;
  /** 漏洞列表 {@link DescribeVulListRequest} {@link DescribeVulListResponse} */
  DescribeVulList(data?: DescribeVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulListResponse>;
  /** 获取漏洞概览数据 {@link DescribeVulOverviewRequest} {@link DescribeVulOverviewResponse} */
  DescribeVulOverview(data?: DescribeVulOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulOverviewResponse>;
  /** 获取漏洞库列表 {@link DescribeVulStoreListRequest} {@link DescribeVulStoreListResponse} */
  DescribeVulStoreList(data?: DescribeVulStoreListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulStoreListResponse>;
  /** 获取漏洞top统计 {@link DescribeVulTopRequest} {@link DescribeVulTopResponse} */
  DescribeVulTop(data: DescribeVulTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulTopResponse>;
  /** 获取漏洞态势信息 {@link DescribeVulTrendRequest} {@link DescribeVulTrendResponse} */
  DescribeVulTrend(data?: DescribeVulTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulTrendResponse>;
  /** 查询告警机器范围配置 {@link DescribeWarningHostConfigRequest} {@link DescribeWarningHostConfigResponse} */
  DescribeWarningHostConfig(data: DescribeWarningHostConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarningHostConfigResponse>;
  /** 获取当前用户告警列表 {@link DescribeWarningListRequest} {@link DescribeWarningListResponse} */
  DescribeWarningList(data?: DescribeWarningListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarningListResponse>;
  /** 查询告警策略 {@link DescribeWebHookPolicyRequest} {@link DescribeWebHookPolicyResponse} */
  DescribeWebHookPolicy(data?: DescribeWebHookPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebHookPolicyResponse>;
  /** 查询告警接收人列表 {@link DescribeWebHookReceiverRequest} {@link DescribeWebHookReceiverResponse} */
  DescribeWebHookReceiver(data?: DescribeWebHookReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebHookReceiverResponse>;
  /** 查询指定告警接收人的关联策略使用信息 {@link DescribeWebHookReceiverUsageRequest} {@link DescribeWebHookReceiverUsageResponse} */
  DescribeWebHookReceiverUsage(data?: DescribeWebHookReceiverUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebHookReceiverUsageResponse>;
  /** 获取企微机器人规则详情 {@link DescribeWebHookRuleRequest} {@link DescribeWebHookRuleResponse} */
  DescribeWebHookRule(data?: DescribeWebHookRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebHookRuleResponse>;
  /** 获取企微机器人规则列表 {@link DescribeWebHookRulesRequest} {@link DescribeWebHookRulesResponse} */
  DescribeWebHookRules(data?: DescribeWebHookRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebHookRulesResponse>;
  /** 查询篡改事件列表 {@link DescribeWebPageEventListRequest} {@link DescribeWebPageEventListResponse} */
  DescribeWebPageEventList(data?: DescribeWebPageEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageEventListResponse>;
  /** 查询网页防篡改概览信息 {@link DescribeWebPageGeneralizeRequest} {@link DescribeWebPageGeneralizeResponse} */
  DescribeWebPageGeneralize(data?: DescribeWebPageGeneralizeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageGeneralizeResponse>;
  /** 查询网页防篡改防护统计 {@link DescribeWebPageProtectStatRequest} {@link DescribeWebPageProtectStatResponse} */
  DescribeWebPageProtectStat(data?: DescribeWebPageProtectStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageProtectStatResponse>;
  /** 查询网站防篡改服务信息 {@link DescribeWebPageServiceInfoRequest} {@link DescribeWebPageServiceInfoResponse} */
  DescribeWebPageServiceInfo(data?: DescribeWebPageServiceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageServiceInfoResponse>;
  /** 销毁订单 {@link DestroyOrderRequest} {@link DestroyOrderResponse} */
  DestroyOrder(data: DestroyOrderRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyOrderResponse>;
  /** 新增或修改高危命令规则（支持多服务器选择） {@link EditBashRulesRequest} {@link EditBashRulesResponse} */
  EditBashRules(data?: EditBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<EditBashRulesResponse>;
  /** 新增或修改本地提权规则（支持多服务器选择） {@link EditPrivilegeRulesRequest} {@link EditPrivilegeRulesResponse} */
  EditPrivilegeRules(data?: EditPrivilegeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<EditPrivilegeRulesResponse>;
  /** 编辑反弹Shell规则（支持多服务器选择） {@link EditReverseShellRulesRequest} {@link EditReverseShellRulesResponse} */
  EditReverseShellRules(data?: EditReverseShellRulesRequest, config?: AxiosRequestConfig): AxiosPromise<EditReverseShellRulesResponse>;
  /** 新增或编辑标签 {@link EditTagsRequest} {@link EditTagsResponse} */
  EditTags(data: EditTagsRequest, config?: AxiosRequestConfig): AxiosPromise<EditTagsResponse>;
  /** 导出资产管理应用列表 {@link ExportAssetAppListRequest} {@link ExportAssetAppListResponse} */
  ExportAssetAppList(data?: ExportAssetAppListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetAppListResponse>;
  /** 导出资产管理内核模块列表 {@link ExportAssetCoreModuleListRequest} {@link ExportAssetCoreModuleListResponse} */
  ExportAssetCoreModuleList(data?: ExportAssetCoreModuleListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetCoreModuleListResponse>;
  /** 导出资产管理数据库列表 {@link ExportAssetDatabaseListRequest} {@link ExportAssetDatabaseListResponse} */
  ExportAssetDatabaseList(data?: ExportAssetDatabaseListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetDatabaseListResponse>;
  /** 导出资产管理环境变量列表 {@link ExportAssetEnvListRequest} {@link ExportAssetEnvListResponse} */
  ExportAssetEnvList(data?: ExportAssetEnvListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetEnvListResponse>;
  /** 导出资产管理启动服务列表 {@link ExportAssetInitServiceListRequest} {@link ExportAssetInitServiceListResponse} */
  ExportAssetInitServiceList(data?: ExportAssetInitServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetInitServiceListResponse>;
  /** 导出Jar包列表 {@link ExportAssetJarListRequest} {@link ExportAssetJarListResponse} */
  ExportAssetJarList(data?: ExportAssetJarListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetJarListResponse>;
  /** 导出资产管理主机资源详细信息 {@link ExportAssetMachineDetailRequest} {@link ExportAssetMachineDetailResponse} */
  ExportAssetMachineDetail(data: ExportAssetMachineDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetMachineDetailResponse>;
  /** 导出资源监控列表 {@link ExportAssetMachineListRequest} {@link ExportAssetMachineListResponse} */
  ExportAssetMachineList(data?: ExportAssetMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetMachineListResponse>;
  /** 导出资产管理计划任务列表 {@link ExportAssetPlanTaskListRequest} {@link ExportAssetPlanTaskListResponse} */
  ExportAssetPlanTaskList(data?: ExportAssetPlanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetPlanTaskListResponse>;
  /** 导出资产管理端口列表 {@link ExportAssetPortInfoListRequest} {@link ExportAssetPortInfoListResponse} */
  ExportAssetPortInfoList(data?: ExportAssetPortInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetPortInfoListResponse>;
  /** 导出资产管理进程列表 {@link ExportAssetProcessInfoListRequest} {@link ExportAssetProcessInfoListResponse} */
  ExportAssetProcessInfoList(data?: ExportAssetProcessInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetProcessInfoListResponse>;
  /** 导出主机概况趋势 {@link ExportAssetRecentMachineInfoRequest} {@link ExportAssetRecentMachineInfoResponse} */
  ExportAssetRecentMachineInfo(data: ExportAssetRecentMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetRecentMachineInfoResponse>;
  /** 导出资产管理系统安装包列表 {@link ExportAssetSystemPackageListRequest} {@link ExportAssetSystemPackageListResponse} */
  ExportAssetSystemPackageList(data?: ExportAssetSystemPackageListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetSystemPackageListResponse>;
  /** 导出账号列表 {@link ExportAssetUserListRequest} {@link ExportAssetUserListResponse} */
  ExportAssetUserList(data?: ExportAssetUserListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetUserListResponse>;
  /** 导出资产管理Web应用列表 {@link ExportAssetWebAppListRequest} {@link ExportAssetWebAppListResponse} */
  ExportAssetWebAppList(data?: ExportAssetWebAppListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetWebAppListResponse>;
  /** 导出资产管理Web框架列表 {@link ExportAssetWebFrameListRequest} {@link ExportAssetWebFrameListResponse} */
  ExportAssetWebFrameList(data?: ExportAssetWebFrameListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetWebFrameListResponse>;
  /** 导出Web站点列表 {@link ExportAssetWebLocationListRequest} {@link ExportAssetWebLocationListResponse} */
  ExportAssetWebLocationList(data?: ExportAssetWebLocationListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetWebLocationListResponse>;
  /** 导出资产管理Web服务列表 {@link ExportAssetWebServiceInfoListRequest} {@link ExportAssetWebServiceInfoListResponse} */
  ExportAssetWebServiceInfoList(data?: ExportAssetWebServiceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetWebServiceInfoListResponse>;
  /** 导出网络攻击事件 {@link ExportAttackEventsRequest} {@link ExportAttackEventsResponse} */
  ExportAttackEvents(data?: ExportAttackEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAttackEventsResponse>;
  /** 基线影响主机列表导出 {@link ExportBaselineEffectHostListRequest} {@link ExportBaselineEffectHostListResponse} */
  ExportBaselineEffectHostList(data: ExportBaselineEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineEffectHostListResponse>;
  /** 导出修复列表 {@link ExportBaselineFixListRequest} {@link ExportBaselineFixListResponse} */
  ExportBaselineFixList(data?: ExportBaselineFixListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineFixListResponse>;
  /** 导出基线主机检测 {@link ExportBaselineHostDetectListRequest} {@link ExportBaselineHostDetectListResponse} */
  ExportBaselineHostDetectList(data?: ExportBaselineHostDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineHostDetectListResponse>;
  /** 导出基线检测项 {@link ExportBaselineItemDetectListRequest} {@link ExportBaselineItemDetectListResponse} */
  ExportBaselineItemDetectList(data?: ExportBaselineItemDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineItemDetectListResponse>;
  /** 导出检测项结果列表 {@link ExportBaselineItemListRequest} {@link ExportBaselineItemListResponse} */
  ExportBaselineItemList(data?: ExportBaselineItemListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineItemListResponse>;
  /** 导出基线列表 {@link ExportBaselineListRequest} {@link ExportBaselineListResponse} */
  ExportBaselineList(data?: ExportBaselineListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineListResponse>;
  /** 导出基线检测规则 {@link ExportBaselineRuleDetectListRequest} {@link ExportBaselineRuleDetectListResponse} */
  ExportBaselineRuleDetectList(data?: ExportBaselineRuleDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineRuleDetectListResponse>;
  /** 导出弱口令配置列表 {@link ExportBaselineWeakPasswordListRequest} {@link ExportBaselineWeakPasswordListResponse} */
  ExportBaselineWeakPasswordList(data?: ExportBaselineWeakPasswordListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineWeakPasswordListResponse>;
  /** 导出高危命令事件 {@link ExportBashEventsRequest} {@link ExportBashEventsResponse} */
  ExportBashEvents(data?: ExportBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBashEventsResponse>;
  /** 导出高危命令事件(新) {@link ExportBashEventsNewRequest} {@link ExportBashEventsNewResponse} */
  ExportBashEventsNew(data?: ExportBashEventsNewRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBashEventsNewResponse>;
  /** 导出高危命令策略 {@link ExportBashPoliciesRequest} {@link ExportBashPoliciesResponse} */
  ExportBashPolicies(data?: ExportBashPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBashPoliciesResponse>;
  /** 导出密码破解记录 {@link ExportBruteAttacksRequest} {@link ExportBruteAttacksResponse} */
  ExportBruteAttacks(data?: ExportBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBruteAttacksResponse>;
  /** 导出核心文件事件 {@link ExportFileTamperEventsRequest} {@link ExportFileTamperEventsResponse} */
  ExportFileTamperEvents(data?: ExportFileTamperEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportFileTamperEventsResponse>;
  /** 导出核心文件监控规则 {@link ExportFileTamperRulesRequest} {@link ExportFileTamperRulesResponse} */
  ExportFileTamperRules(data?: ExportFileTamperRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportFileTamperRulesResponse>;
  /** 已忽略基线检测项导出 {@link ExportIgnoreBaselineRuleRequest} {@link ExportIgnoreBaselineRuleResponse} */
  ExportIgnoreBaselineRule(data?: ExportIgnoreBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ExportIgnoreBaselineRuleResponse>;
  /** 忽略检测项影响主机列表导出 {@link ExportIgnoreRuleEffectHostListRequest} {@link ExportIgnoreRuleEffectHostListResponse} */
  ExportIgnoreRuleEffectHostList(data: ExportIgnoreRuleEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportIgnoreRuleEffectHostListResponse>;
  /** 导出java内存马插件信息 {@link ExportJavaMemShellPluginsRequest} {@link ExportJavaMemShellPluginsResponse} */
  ExportJavaMemShellPlugins(data?: ExportJavaMemShellPluginsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportJavaMemShellPluginsResponse>;
  /** 导出java内存马事件列表 {@link ExportJavaMemShellsRequest} {@link ExportJavaMemShellsResponse} */
  ExportJavaMemShells(data?: ExportJavaMemShellsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportJavaMemShellsResponse>;
  /** 导出授权详情 {@link ExportLicenseDetailRequest} {@link ExportLicenseDetailResponse} */
  ExportLicenseDetail(data?: ExportLicenseDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ExportLicenseDetailResponse>;
  /** 导出下载恶意请求文件 {@link ExportMaliciousRequestsRequest} {@link ExportMaliciousRequestsResponse} */
  ExportMaliciousRequests(data?: ExportMaliciousRequestsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportMaliciousRequestsResponse>;
  /** 导出木马记录 {@link ExportMalwaresRequest} {@link ExportMalwaresResponse} */
  ExportMalwares(data?: ExportMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<ExportMalwaresResponse>;
  /** 导出异地登录记录 {@link ExportNonlocalLoginPlacesRequest} {@link ExportNonlocalLoginPlacesResponse} */
  ExportNonlocalLoginPlaces(data?: ExportNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportNonlocalLoginPlacesResponse>;
  /** 导出本地提权事件 {@link ExportPrivilegeEventsRequest} {@link ExportPrivilegeEventsResponse} */
  ExportPrivilegeEvents(data?: ExportPrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportPrivilegeEventsResponse>;
  /** 导出防护目录列表 {@link ExportProtectDirListRequest} {@link ExportProtectDirListResponse} */
  ExportProtectDirList(data?: ExportProtectDirListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportProtectDirListResponse>;
  /** 导出主机快照备份列表 {@link ExportRansomDefenseBackupListRequest} {@link ExportRansomDefenseBackupListResponse} */
  ExportRansomDefenseBackupList(data: ExportRansomDefenseBackupListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRansomDefenseBackupListResponse>;
  /** 导出防勒索事件列表 {@link ExportRansomDefenseEventsListRequest} {@link ExportRansomDefenseEventsListResponse} */
  ExportRansomDefenseEventsList(data?: ExportRansomDefenseEventsListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRansomDefenseEventsListResponse>;
  /** 导出备份详情列表 {@link ExportRansomDefenseMachineListRequest} {@link ExportRansomDefenseMachineListResponse} */
  ExportRansomDefenseMachineList(data?: ExportRansomDefenseMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRansomDefenseMachineListResponse>;
  /** 导出防勒索策略列表 {@link ExportRansomDefenseStrategyListRequest} {@link ExportRansomDefenseStrategyListResponse} */
  ExportRansomDefenseStrategyList(data?: ExportRansomDefenseStrategyListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRansomDefenseStrategyListResponse>;
  /** 导出勒索防御策略绑定机器列表 {@link ExportRansomDefenseStrategyMachinesRequest} {@link ExportRansomDefenseStrategyMachinesResponse} */
  ExportRansomDefenseStrategyMachines(data?: ExportRansomDefenseStrategyMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRansomDefenseStrategyMachinesResponse>;
  /** 导出反弹Shell事件 {@link ExportReverseShellEventsRequest} {@link ExportReverseShellEventsResponse} */
  ExportReverseShellEvents(data?: ExportReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportReverseShellEventsResponse>;
  /** 导出恶意请求事件列表 {@link ExportRiskDnsEventListRequest} {@link ExportRiskDnsEventListResponse} */
  ExportRiskDnsEventList(data?: ExportRiskDnsEventListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRiskDnsEventListResponse>;
  /** 导出恶意请求策略列表 {@link ExportRiskDnsPolicyListRequest} {@link ExportRiskDnsPolicyListResponse} */
  ExportRiskDnsPolicyList(data?: ExportRiskDnsPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRiskDnsPolicyListResponse>;
  /** 导出异常进程事件 {@link ExportRiskProcessEventsRequest} {@link ExportRiskProcessEventsResponse} */
  ExportRiskProcessEvents(data?: ExportRiskProcessEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportRiskProcessEventsResponse>;
  /** 导出扫描任务详情 {@link ExportScanTaskDetailsRequest} {@link ExportScanTaskDetailsResponse} */
  ExportScanTaskDetails(data: ExportScanTaskDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportScanTaskDetailsResponse>;
  /** 导出风险趋势 {@link ExportSecurityTrendsRequest} {@link ExportSecurityTrendsResponse} */
  ExportSecurityTrends(data: ExportSecurityTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportSecurityTrendsResponse>;
  /** 异步导出任务 {@link ExportTasksRequest} {@link ExportTasksResponse} */
  ExportTasks(data: ExportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ExportTasksResponse>;
  /** 导出漏洞防御事件 {@link ExportVulDefenceEventRequest} {@link ExportVulDefenceEventResponse} */
  ExportVulDefenceEvent(data?: ExportVulDefenceEventRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulDefenceEventResponse>;
  /** 导出漏洞防御列表 {@link ExportVulDefenceListRequest} {@link ExportVulDefenceListResponse} */
  ExportVulDefenceList(data?: ExportVulDefenceListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulDefenceListResponse>;
  /** 导出漏洞防御插件事件 {@link ExportVulDefencePluginEventRequest} {@link ExportVulDefencePluginEventResponse} */
  ExportVulDefencePluginEvent(data?: ExportVulDefencePluginEventRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulDefencePluginEventResponse>;
  /** 导出本次漏洞检测Excel {@link ExportVulDetectionExcelRequest} {@link ExportVulDetectionExcelResponse} */
  ExportVulDetectionExcel(data: ExportVulDetectionExcelRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulDetectionExcelResponse>;
  /** 导出漏洞检测报告 {@link ExportVulDetectionReportRequest} {@link ExportVulDetectionReportResponse} */
  ExportVulDetectionReport(data: ExportVulDetectionReportRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulDetectionReportResponse>;
  /** 导出漏洞影响主机列表 {@link ExportVulEffectHostListRequest} {@link ExportVulEffectHostListResponse} */
  ExportVulEffectHostList(data: ExportVulEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulEffectHostListResponse>;
  /** 导出漏洞信息 {@link ExportVulInfoRequest} {@link ExportVulInfoResponse} */
  ExportVulInfo(data: ExportVulInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulInfoResponse>;
  /** 漏洞管理-导出漏洞列表 {@link ExportVulListRequest} {@link ExportVulListResponse} */
  ExportVulList(data?: ExportVulListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulListResponse>;
  /** 导出篡改事件列表 {@link ExportWebPageEventListRequest} {@link ExportWebPageEventListResponse} */
  ExportWebPageEventList(data?: ExportWebPageEventListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportWebPageEventListResponse>;
  /** 修复基线检测 {@link FixBaselineDetectRequest} {@link FixBaselineDetectResponse} */
  FixBaselineDetect(data: FixBaselineDetectRequest, config?: AxiosRequestConfig): AxiosPromise<FixBaselineDetectResponse>;
  /** 获取本地存储数据 {@link GetLocalStorageItemRequest} {@link GetLocalStorageItemResponse} */
  GetLocalStorageItem(data: GetLocalStorageItemRequest, config?: AxiosRequestConfig): AxiosPromise<GetLocalStorageItemResponse>;
  /** 忽略漏洞 {@link IgnoreImpactedHostsRequest} {@link IgnoreImpactedHostsResponse} */
  IgnoreImpactedHosts(data: IgnoreImpactedHostsRequest, config?: AxiosRequestConfig): AxiosPromise<IgnoreImpactedHostsResponse>;
  /** 获取本地存储键值列表 {@link KeysLocalStorageRequest} {@link KeysLocalStorageResponse} */
  KeysLocalStorage(data?: KeysLocalStorageRequest, config?: AxiosRequestConfig): AxiosPromise<KeysLocalStorageResponse>;
  /** 设置自动开通配置 {@link ModifyAutoOpenProVersionConfigRequest} {@link ModifyAutoOpenProVersionConfigResponse} */
  ModifyAutoOpenProVersionConfig(data: ModifyAutoOpenProVersionConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoOpenProVersionConfigResponse>;
  /** 修改爆破阻断模式 {@link ModifyBanModeRequest} {@link ModifyBanModeResponse} */
  ModifyBanMode(data: ModifyBanModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBanModeResponse>;
  /** 设置阻断开关状态 {@link ModifyBanStatusRequest} {@link ModifyBanStatusResponse} */
  ModifyBanStatus(data: ModifyBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBanStatusResponse>;
  /** 修改阻断白名单列表 {@link ModifyBanWhiteListRequest} {@link ModifyBanWhiteListResponse} */
  ModifyBanWhiteList(data: ModifyBanWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBanWhiteListResponse>;
  /** 修改或新增基线策略设置 {@link ModifyBaselinePolicyRequest} {@link ModifyBaselinePolicyResponse} */
  ModifyBaselinePolicy(data: ModifyBaselinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselinePolicyResponse>;
  /** 修改或新增基线策略状态 {@link ModifyBaselinePolicyStateRequest} {@link ModifyBaselinePolicyStateResponse} */
  ModifyBaselinePolicyState(data: ModifyBaselinePolicyStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselinePolicyStateResponse>;
  /** 修改或新增基线检测规则 {@link ModifyBaselineRuleRequest} {@link ModifyBaselineRuleResponse} */
  ModifyBaselineRule(data: ModifyBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineRuleResponse>;
  /** 修改或新增基线忽略规则 {@link ModifyBaselineRuleIgnoreRequest} {@link ModifyBaselineRuleIgnoreResponse} */
  ModifyBaselineRuleIgnore(data: ModifyBaselineRuleIgnoreRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineRuleIgnoreResponse>;
  /** 修改或新增弱口令 {@link ModifyBaselineWeakPasswordRequest} {@link ModifyBaselineWeakPasswordResponse} */
  ModifyBaselineWeakPassword(data: ModifyBaselineWeakPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineWeakPasswordResponse>;
  /** 新增或修改高危命令策略 {@link ModifyBashPolicyRequest} {@link ModifyBashPolicyResponse} */
  ModifyBashPolicy(data: ModifyBashPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBashPolicyResponse>;
  /** 切换高危命令策略状态 {@link ModifyBashPolicyStatusRequest} {@link ModifyBashPolicyStatusResponse} */
  ModifyBashPolicyStatus(data: ModifyBashPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBashPolicyStatusResponse>;
  /** 修改暴力破解规则 {@link ModifyBruteAttackRulesRequest} {@link ModifyBruteAttackRulesResponse} */
  ModifyBruteAttackRules(data: ModifyBruteAttackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBruteAttackRulesResponse>;
  /** 修改网络攻击事件状态 {@link ModifyEventAttackStatusRequest} {@link ModifyEventAttackStatusResponse} */
  ModifyEventAttackStatus(data?: ModifyEventAttackStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEventAttackStatusResponse>;
  /** 核心文件事件更新 {@link ModifyFileTamperEventsRequest} {@link ModifyFileTamperEventsResponse} */
  ModifyFileTamperEvents(data: ModifyFileTamperEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFileTamperEventsResponse>;
  /** 编辑核心文件监控规则 {@link ModifyFileTamperRuleRequest} {@link ModifyFileTamperRuleResponse} */
  ModifyFileTamperRule(data: ModifyFileTamperRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFileTamperRuleResponse>;
  /** 核心文件规则状态更新 {@link ModifyFileTamperRuleStatusRequest} {@link ModifyFileTamperRuleStatusResponse} */
  ModifyFileTamperRuleStatus(data: ModifyFileTamperRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFileTamperRuleStatusResponse>;
  /** 开关java内存马插件 {@link ModifyJavaMemShellPluginSwitchRequest} {@link ModifyJavaMemShellPluginSwitchResponse} */
  ModifyJavaMemShellPluginSwitch(data: ModifyJavaMemShellPluginSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJavaMemShellPluginSwitchResponse>;
  /** 修改java内存马事件状态 {@link ModifyJavaMemShellsStatusRequest} {@link ModifyJavaMemShellsStatusResponse} */
  ModifyJavaMemShellsStatus(data: ModifyJavaMemShellsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJavaMemShellsStatusResponse>;
  /** 授权批量绑定 {@link ModifyLicenseBindsRequest} {@link ModifyLicenseBindsResponse} */
  ModifyLicenseBinds(data: ModifyLicenseBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLicenseBindsResponse>;
  /** 编辑授权订单 {@link ModifyLicenseOrderRequest} {@link ModifyLicenseOrderResponse} */
  ModifyLicenseOrder(data: ModifyLicenseOrderRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLicenseOrderResponse>;
  /** 授权批量解绑 {@link ModifyLicenseUnBindsRequest} {@link ModifyLicenseUnBindsResponse} */
  ModifyLicenseUnBinds(data: ModifyLicenseUnBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLicenseUnBindsResponse>;
  /** 新增或修改日志投递kafka接入配置 {@link ModifyLogKafkaAccessRequest} {@link ModifyLogKafkaAccessResponse} */
  ModifyLogKafkaAccess(data: ModifyLogKafkaAccessRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogKafkaAccessResponse>;
  /** 修改指定日志类别投递配置、开关 {@link ModifyLogKafkaDeliverTypeRequest} {@link ModifyLogKafkaDeliverTypeResponse} */
  ModifyLogKafkaDeliverType(data: ModifyLogKafkaDeliverTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogKafkaDeliverTypeResponse>;
  /** 修改日志投递状态信息 {@link ModifyLogKafkaStateRequest} {@link ModifyLogKafkaStateResponse} */
  ModifyLogKafkaState(data: ModifyLogKafkaStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogKafkaStateResponse>;
  /** 修改日志存储配置 {@link ModifyLogStorageConfigRequest} {@link ModifyLogStorageConfigResponse} */
  ModifyLogStorageConfig(data: ModifyLogStorageConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogStorageConfigResponse>;
  /** 更新登录审计白名单信息 {@link ModifyLoginWhiteInfoRequest} {@link ModifyLoginWhiteInfoResponse} */
  ModifyLoginWhiteInfo(data: ModifyLoginWhiteInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoginWhiteInfoResponse>;
  /** 更新合并后登录审计白名单信息 {@link ModifyLoginWhiteRecordRequest} {@link ModifyLoginWhiteRecordResponse} */
  ModifyLoginWhiteRecord(data: ModifyLoginWhiteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoginWhiteRecordResponse>;
  /** 修改机器清理配置 {@link ModifyMachineAutoClearConfigRequest} {@link ModifyMachineAutoClearConfigResponse} */
  ModifyMachineAutoClearConfig(data: ModifyMachineAutoClearConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachineAutoClearConfigResponse>;
  /** 修改主机备注信息 {@link ModifyMachineRemarkRequest} {@link ModifyMachineRemarkResponse} */
  ModifyMachineRemark(data: ModifyMachineRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachineRemarkResponse>;
  /** 更新恶意请求白名单 {@link ModifyMaliciousRequestWhiteListRequest} {@link ModifyMaliciousRequestWhiteListResponse} */
  ModifyMaliciousRequestWhiteList(data: ModifyMaliciousRequestWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMaliciousRequestWhiteListResponse>;
  /** 定时扫描设置 {@link ModifyMalwareTimingScanSettingsRequest} {@link ModifyMalwareTimingScanSettingsResponse} */
  ModifyMalwareTimingScanSettings(data: ModifyMalwareTimingScanSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMalwareTimingScanSettingsResponse>;
  /** 编辑木马白名单 {@link ModifyMalwareWhiteListRequest} {@link ModifyMalwareWhiteListResponse} */
  ModifyMalwareWhiteList(data: ModifyMalwareWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMalwareWhiteListResponse>;
  /** 修改网络攻击设置 {@link ModifyNetAttackSettingRequest} {@link ModifyNetAttackSettingResponse} */
  ModifyNetAttackSetting(data: ModifyNetAttackSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetAttackSettingResponse>;
  /** 编辑网络攻击白名单 {@link ModifyNetAttackWhiteListRequest} {@link ModifyNetAttackWhiteListResponse} */
  ModifyNetAttackWhiteList(data: ModifyNetAttackWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetAttackWhiteListResponse>;
  /** 编辑订单属性 {@link ModifyOrderAttributeRequest} {@link ModifyOrderAttributeResponse} */
  ModifyOrderAttribute(data: ModifyOrderAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOrderAttributeResponse>;
  /** 修改防勒索事件状态 {@link ModifyRansomDefenseEventsStatusRequest} {@link ModifyRansomDefenseEventsStatusResponse} */
  ModifyRansomDefenseEventsStatus(data: ModifyRansomDefenseEventsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRansomDefenseEventsStatusResponse>;
  /** 批量修改防勒索策略状态 {@link ModifyRansomDefenseStrategyStatusRequest} {@link ModifyRansomDefenseStrategyStatusResponse} */
  ModifyRansomDefenseStrategyStatus(data: ModifyRansomDefenseStrategyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRansomDefenseStrategyStatusResponse>;
  /** 编辑反弹Shell规则（支持多服务器选择）-聚合版本-支持正则 {@link ModifyReverseShellRulesAggregationRequest} {@link ModifyReverseShellRulesAggregationResponse} */
  ModifyReverseShellRulesAggregation(data?: ModifyReverseShellRulesAggregationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReverseShellRulesAggregationResponse>;
  /** 更改恶意请求策略 {@link ModifyRiskDnsPolicyRequest} {@link ModifyRiskDnsPolicyResponse} */
  ModifyRiskDnsPolicy(data: ModifyRiskDnsPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskDnsPolicyResponse>;
  /** 更改恶意请求策略状态 {@link ModifyRiskDnsPolicyStatusRequest} {@link ModifyRiskDnsPolicyStatusResponse} */
  ModifyRiskDnsPolicyStatus(data: ModifyRiskDnsPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskDnsPolicyStatusResponse>;
  /** 修改入侵检测事件状态 {@link ModifyRiskEventsStatusRequest} {@link ModifyRiskEventsStatusResponse} */
  ModifyRiskEventsStatus(data: ModifyRiskEventsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskEventsStatusResponse>;
  /** 修改用户配置 {@link ModifyUsersConfigRequest} {@link ModifyUsersConfigResponse} */
  ModifyUsersConfig(data: ModifyUsersConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUsersConfigResponse>;
  /** 修改漏洞防御事件状态 {@link ModifyVulDefenceEventStatusRequest} {@link ModifyVulDefenceEventStatusResponse} */
  ModifyVulDefenceEventStatus(data: ModifyVulDefenceEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulDefenceEventStatusResponse>;
  /** 修改漏洞防御插件设置 {@link ModifyVulDefenceSettingRequest} {@link ModifyVulDefenceSettingResponse} */
  ModifyVulDefenceSetting(data: ModifyVulDefenceSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulDefenceSettingResponse>;
  /** 修改告警机器范围配置 {@link ModifyWarningHostConfigRequest} {@link ModifyWarningHostConfigResponse} */
  ModifyWarningHostConfig(data: ModifyWarningHostConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWarningHostConfigResponse>;
  /** 修改告警设置 {@link ModifyWarningSettingRequest} {@link ModifyWarningSettingResponse} */
  ModifyWarningSetting(data: ModifyWarningSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWarningSettingResponse>;
  /** 新增或修改告警策略 {@link ModifyWebHookPolicyRequest} {@link ModifyWebHookPolicyResponse} */
  ModifyWebHookPolicy(data?: ModifyWebHookPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebHookPolicyResponse>;
  /** 修改告警策略开关 {@link ModifyWebHookPolicyStatusRequest} {@link ModifyWebHookPolicyStatusResponse} */
  ModifyWebHookPolicyStatus(data: ModifyWebHookPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebHookPolicyStatusResponse>;
  /** 新增或更新告警接收人 {@link ModifyWebHookReceiverRequest} {@link ModifyWebHookReceiverResponse} */
  ModifyWebHookReceiver(data?: ModifyWebHookReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebHookReceiverResponse>;
  /** 新增或修改企微机器人规则 {@link ModifyWebHookRuleRequest} {@link ModifyWebHookRuleResponse} */
  ModifyWebHookRule(data: ModifyWebHookRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebHookRuleResponse>;
  /** 修改企微机器人规则状态 {@link ModifyWebHookRuleStatusRequest} {@link ModifyWebHookRuleStatusResponse} */
  ModifyWebHookRuleStatus(data: ModifyWebHookRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebHookRuleStatusResponse>;
  /** 创建网站防护目录 {@link ModifyWebPageProtectDirRequest} {@link ModifyWebPageProtectDirResponse} */
  ModifyWebPageProtectDir(data: ModifyWebPageProtectDirRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebPageProtectDirResponse>;
  /** 修改网站防护设置 {@link ModifyWebPageProtectSettingRequest} {@link ModifyWebPageProtectSettingResponse} */
  ModifyWebPageProtectSetting(data: ModifyWebPageProtectSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebPageProtectSettingResponse>;
  /** 网站防护设置开关 {@link ModifyWebPageProtectSwitchRequest} {@link ModifyWebPageProtectSwitchResponse} */
  ModifyWebPageProtectSwitch(data: ModifyWebPageProtectSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebPageProtectSwitchResponse>;
  /** 防勒索快照回滚 {@link RansomDefenseRollbackRequest} {@link RansomDefenseRollbackResponse} */
  RansomDefenseRollback(data: RansomDefenseRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<RansomDefenseRollbackResponse>;
  /** 恢复木马文件 {@link RecoverMalwaresRequest} {@link RecoverMalwaresResponse} */
  RecoverMalwares(data: RecoverMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverMalwaresResponse>;
  /** 删除本地存储数据 {@link RemoveLocalStorageItemRequest} {@link RemoveLocalStorageItemResponse} */
  RemoveLocalStorageItem(data: RemoveLocalStorageItemRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveLocalStorageItemResponse>;
  /** 清理主机信息 {@link RemoveMachineRequest} {@link RemoveMachineResponse} */
  RemoveMachine(data: RemoveMachineRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveMachineResponse>;
  /** 重试创建快照 {@link RetryCreateSnapshotRequest} {@link RetryCreateSnapshotResponse} */
  RetryCreateSnapshot(data: RetryCreateSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<RetryCreateSnapshotResponse>;
  /** 重试漏洞修复 {@link RetryVulFixRequest} {@link RetryVulFixResponse} */
  RetryVulFix(data: RetryVulFixRequest, config?: AxiosRequestConfig): AxiosPromise<RetryVulFixResponse>;
  /** 资产指纹启动扫描 {@link ScanAssetRequest} {@link ScanAssetResponse} */
  ScanAsset(data?: ScanAssetRequest, config?: AxiosRequestConfig): AxiosPromise<ScanAssetResponse>;
  /** 基线检测接口 {@link ScanBaselineRequest} {@link ScanBaselineResponse} */
  ScanBaseline(data?: ScanBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<ScanBaselineResponse>;
  /** 重新开始扫描任务 {@link ScanTaskAgainRequest} {@link ScanTaskAgainResponse} */
  ScanTaskAgain(data: ScanTaskAgainRequest, config?: AxiosRequestConfig): AxiosPromise<ScanTaskAgainResponse>;
  /** 漏洞一键检测 {@link ScanVulRequest} {@link ScanVulResponse} */
  ScanVul(data: ScanVulRequest, config?: AxiosRequestConfig): AxiosPromise<ScanVulResponse>;
  /** 漏洞管理-重新检测接口 {@link ScanVulAgainRequest} {@link ScanVulAgainResponse} */
  ScanVulAgain(data: ScanVulAgainRequest, config?: AxiosRequestConfig): AxiosPromise<ScanVulAgainResponse>;
  /** 定期扫描漏洞设置 {@link ScanVulSettingRequest} {@link ScanVulSettingResponse} */
  ScanVulSetting(data: ScanVulSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ScanVulSettingResponse>;
  /** 查询日志 {@link SearchLogRequest} {@link SearchLogResponse} */
  SearchLog(data: SearchLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchLogResponse>;
  /** 隔离木马 {@link SeparateMalwaresRequest} {@link SeparateMalwaresResponse} */
  SeparateMalwares(data: SeparateMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<SeparateMalwaresResponse>;
  /** 设置高危命令事件状态 {@link SetBashEventsStatusRequest} {@link SetBashEventsStatusResponse} */
  SetBashEventsStatus(data: SetBashEventsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<SetBashEventsStatusResponse>;
  /** 设置本地存储过期时间 {@link SetLocalStorageExpireRequest} {@link SetLocalStorageExpireResponse} */
  SetLocalStorageExpire(data: SetLocalStorageExpireRequest, config?: AxiosRequestConfig): AxiosPromise<SetLocalStorageExpireResponse>;
  /** 设置本地存储数据 {@link SetLocalStorageItemRequest} {@link SetLocalStorageItemResponse} */
  SetLocalStorageItem(data: SetLocalStorageItemRequest, config?: AxiosRequestConfig): AxiosPromise<SetLocalStorageItemResponse>;
  /** 检测基线 {@link StartBaselineDetectRequest} {@link StartBaselineDetectResponse} */
  StartBaselineDetect(data: StartBaselineDetectRequest, config?: AxiosRequestConfig): AxiosPromise<StartBaselineDetectResponse>;
  /** 停止资产扫描任务 {@link StopAssetScanRequest} {@link StopAssetScanResponse} */
  StopAssetScan(data: StopAssetScanRequest, config?: AxiosRequestConfig): AxiosPromise<StopAssetScanResponse>;
  /** 停止基线检测 {@link StopBaselineDetectRequest} {@link StopBaselineDetectResponse} */
  StopBaselineDetect(data: StopBaselineDetectRequest, config?: AxiosRequestConfig): AxiosPromise<StopBaselineDetectResponse>;
  /** 不再提醒爆破阻断提示弹窗 {@link StopNoticeBanTipsRequest} {@link StopNoticeBanTipsResponse} */
  StopNoticeBanTips(data?: StopNoticeBanTipsRequest, config?: AxiosRequestConfig): AxiosPromise<StopNoticeBanTipsResponse>;
  /** 切换高危命令规则状态 {@link SwitchBashRulesRequest} {@link SwitchBashRulesResponse} */
  SwitchBashRules(data: SwitchBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchBashRulesResponse>;
  /** 同步资产扫描信息 {@link SyncAssetScanRequest} {@link SyncAssetScanResponse} */
  SyncAssetScan(data: SyncAssetScanRequest, config?: AxiosRequestConfig): AxiosPromise<SyncAssetScanResponse>;
  /** 同步基线检测进度概要 {@link SyncBaselineDetectSummaryRequest} {@link SyncBaselineDetectSummaryResponse} */
  SyncBaselineDetectSummary(data?: SyncBaselineDetectSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<SyncBaselineDetectSummaryResponse>;
  /** 同步机器信息 {@link SyncMachinesRequest} {@link SyncMachinesResponse} */
  SyncMachines(data?: SyncMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<SyncMachinesResponse>;
  /** 测试企微机器人 {@link TestWebHookRuleRequest} {@link TestWebHookRuleResponse} */
  TestWebHookRule(data: TestWebHookRuleRequest, config?: AxiosRequestConfig): AxiosPromise<TestWebHookRuleResponse>;
  /** 信任木马文件 {@link TrustMalwaresRequest} {@link TrustMalwaresResponse} */
  TrustMalwares(data: TrustMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<TrustMalwaresResponse>;
  /** 取消信任木马 {@link UntrustMalwaresRequest} {@link UntrustMalwaresResponse} */
  UntrustMalwares(data: UntrustMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<UntrustMalwaresResponse>;
  /** 更新基线策略信息 {@link UpdateBaselineStrategyRequest} {@link UpdateBaselineStrategyResponse} */
  UpdateBaselineStrategy(data: UpdateBaselineStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateBaselineStrategyResponse>;
  /** 关联机器标签列表 {@link UpdateMachineTagsRequest} {@link UpdateMachineTagsResponse} */
  UpdateMachineTags(data: UpdateMachineTagsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateMachineTagsResponse>;
}

export declare type Versions = ["2018-02-28"];

export default Cwp;
