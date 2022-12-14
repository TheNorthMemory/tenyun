/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 帐号统计数据。 */
declare interface AccountStatistics {
  /** 用户名。 */
  Username: string;
  /** 主机数量。 */
  MachineNum: number;
}

/** 资源管理进程基本信息 */
declare interface AssetAppBaseInfo {
  /** 主机内网IP */
  MachineIp: string;
  /** 主机名称 */
  MachineName: string;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[] | null;
  /** 应用名称 */
  Name: string;
  /** 应用类型	1: 运维2 : 数据库3 : 安全4 : 可疑应用5 : 系统架构6 : 系统应用7 : WEB服务99: 其他 */
  Type: number;
  /** 二进制路径 */
  BinPath: string;
  /** 操作系统信息 */
  OsInfo: string;
  /** 关联进程数 */
  ProcessCount: number;
  /** 应用描述 */
  Desc: string;
  /** 版本号 */
  Version: string;
  /** 配置文件路径 */
  ConfigPath: string;
  /** 首次采集时间 */
  FirstTime: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 是否新增[0:否|1:是] */
  IsNew: number | null;
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
  Name: string;
  /** 描述 */
  Desc: string;
  /** 路径 */
  Path: string;
  /** 版本 */
  Version: string;
  /** 服务器IP */
  MachineIp: string;
  /** 服务器名称 */
  MachineName: string;
  /** 操作系统 */
  OsInfo: string;
  /** 模块大小 */
  Size: number;
  /** 依赖进程数 */
  ProcessCount: number;
  /** 依赖模块数 */
  ModuleCount: number;
  /** 模块ID */
  Id: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机uuid */
  Uuid: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 服务器外网IP */
  MachineWanIp: string;
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
  MachineIp: string;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** 操作系统信息 */
  OsInfo: string;
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[] | null;
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
  /** 数据库ID */
  Id: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 主机名称 */
  MachineName: string;
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
  Name: string;
  /** 类型：0:用户变量1:系统变量 */
  Type: number;
  /** 启动用户 */
  User: string;
  /** 环境变量值 */
  Value: string;
  /** 服务器IP */
  MachineIp: string;
  /** 服务器名称 */
  MachineName: string;
  /** 操作系统 */
  OsInfo: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机uuid */
  Uuid: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 服务器外网IP */
  MachineWanIp: string;
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
  Name: string;
  /** 类型：1:编码器2:IE插件3:网络提供者4:镜像劫持5:LSA提供者6:KnownDLLs7:启动执行8:WMI9:计划任务10:Winsock提供者11:打印监控器12:资源管理器13:驱动服务14:登录 */
  Type: number;
  /** 默认启用状态：0未启用，1启用 */
  Status: number;
  /** 启动用户 */
  User: string;
  /** 路径 */
  Path: string;
  /** 服务器IP */
  MachineIp: string;
  /** 服务器名称 */
  MachineName: string;
  /** 操作系统 */
  OsInfo: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机uuid */
  Uuid: string;
  /** 数据更新时间 */
  UpdateTime: string;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 服务器外网IP */
  MachineWanIp: string;
}

/** 资产管理jar包列表 */
declare interface AssetJarBaseInfo {
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
  /** Jar包ID */
  Id: string;
  /** Jar包Md5 */
  Md5: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机uuid */
  Uuid: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 服务器外网IP */
  MachineWanIp: string;
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

/** 资产指纹中服务器列表的基本信息 */
declare interface AssetMachineBaseInfo {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器uuid */
  Uuid: string;
  /** 服务器内网IP */
  MachineIp: string;
  /** 服务器名称 */
  MachineName: string;
  /** 操作系统名称 */
  OsInfo: string;
  /** CPU信息 */
  Cpu: string;
  /** 内存容量：单位G */
  MemSize: number;
  /** 内存使用率百分比 */
  MemLoad: string;
  /** 硬盘容量：单位G */
  DiskSize: number;
  /** 硬盘使用率百分比 */
  DiskLoad: string;
  /** 分区数 */
  PartitionCount: number;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 业务组ID */
  ProjectId: number;
  /** Cpu数量 */
  CpuSize: number;
  /** Cpu使用率百分比 */
  CpuLoad: string;
  /** 标签 */
  Tag: MachineTag[] | null;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 首次采集时间 */
  FirstTime: string;
}

/** 资产指纹中服务器列表的基本信息 */
declare interface AssetMachineDetail {
  /** 服务器Quuid */
  Quuid: string;
  /** 服务器uuid */
  Uuid: string;
  /** 服务器内网IP */
  MachineIp: string;
  /** 服务器名称 */
  MachineName: string;
  /** 操作系统名称 */
  OsInfo: string;
  /** CPU信息 */
  Cpu: string;
  /** 内存容量：单位G */
  MemSize: number;
  /** 内存使用率百分比 */
  MemLoad: string;
  /** 硬盘容量：单位G */
  DiskSize: number;
  /** 硬盘使用率百分比 */
  DiskLoad: string;
  /** 分区数 */
  PartitionCount: number;
  /** 主机外网IP */
  MachineWanIp: string;
  /** Cpu数量 */
  CpuSize: number;
  /** Cpu使用率百分比 */
  CpuLoad: string;
  /** 防护级别：0基础版，1专业版 */
  ProtectLevel: number;
  /** 风险状态：UNKNOW-未知，RISK-风险，SAFT-安全 */
  RiskStatus: string;
  /** 已防护天数 */
  ProtectDays: number;
  /** 专业版开通时间 */
  BuyTime: string;
  /** 专业版到期时间 */
  EndTime: string;
  /** 内核版本 */
  CoreVersion: string;
  /** linux/windows */
  OsType: string;
  /** agent版本 */
  AgentVersion: string;
  /** 安装时间 */
  InstallTime: string;
  /** 系统启动时间 */
  BootTime: string;
  /** 最后上线时间 */
  LastLiveTime: string;
  /** 生产商 */
  Producer: string;
  /** 序列号 */
  SerialNumber: string;
  /** 网卡 */
  NetCards: AssetNetworkCardInfo[];
  /** 分区 */
  Disks: AssetDiskPartitionInfo[];
  /** 0在线，1已离线 */
  Status: number;
  /** 业务组ID */
  ProjectId: number;
  /** 设备型号 */
  DeviceVersion: string;
  /** 离线时间 */
  OfflineTime: string | null;
  /** 主机ID */
  InstanceId: string | null;
  /** 数据更新时间 */
  UpdateTime: string | null;
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
  Status: number;
  /** 执行周期 */
  Cycle: string;
  /** 执行命令或脚本 */
  Command: string;
  /** 启动用户 */
  User: string;
  /** 配置文件路径 */
  ConfigPath: string;
  /** 服务器IP */
  MachineIp: string;
  /** 服务器名称 */
  MachineName: string;
  /** 操作系统 */
  OsInfo: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机uuid */
  Uuid: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
  /** 服务器外网IP */
  MachineWanIp: string;
}

/** 资源管理账号基本信息 */
declare interface AssetPortBaseInfo {
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
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[] | null;
  /** 进程名称 */
  ProcessName: string;
  /** 进程版本 */
  ProcessVersion: string;
  /** 进程路径 */
  ProcessPath: string;
  /** 进程ID */
  Pid: string;
  /** 运行用户 */
  User: string;
  /** 启动时间 */
  StartTime: string;
  /** 启动参数 */
  Param: string;
  /** 进程TTY */
  Teletype: string;
  /** 端口 */
  Port: string;
  /** 所属用户组 */
  GroupName: string;
  /** 进程MD5 */
  Md5: string;
  /** 父进程ID */
  Ppid: string;
  /** 父进程名称 */
  ParentProcessName: string;
  /** 端口协议 */
  Proto: string;
  /** 绑定IP */
  BindIp: string;
  /** 主机名称 */
  MachineName: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
}

/** 资源管理进程基本信息 */
declare interface AssetProcessBaseInfo {
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
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[] | null;
  /** 进程名称 */
  Name: string;
  /** 进程说明 */
  Desc: string;
  /** 进程路径 */
  Path: string;
  /** 进程ID */
  Pid: string;
  /** 运行用户 */
  User: string;
  /** 启动时间 */
  StartTime: string;
  /** 启动参数 */
  Param: string;
  /** 进程TTY */
  Tty: string;
  /** 进程版本 */
  Version: string;
  /** 进程用户组 */
  GroupName: string;
  /** 进程MD5 */
  Md5: string;
  /** 父进程ID */
  Ppid: string;
  /** 父进程名称 */
  ParentProcessName: string;
  /** 进程状态 */
  Status: string;
  /** 数字签名:0无，1有， 999 空，仅windows */
  HasSign: number;
  /** 是否通过安装包安装：:0否，1是， 999 空，仅linux */
  InstallByPackage: number;
  /** 软件包名 */
  PackageName: string;
  /** 主机名称 */
  MachineName: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
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
}

/** 资源管理账号基本信息 */
declare interface AssetUserBaseInfo {
  /** 主机内网IP */
  MachineIp: string;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 主机名称 */
  MachineName: string;
  /** 操作系统信息 */
  OsInfo: string;
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
  /** 登录方式：0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码，999为空，仅linux */
  LoginType: number;
  /** 上次登录时间 */
  LastLoginTime: string;
  /** 账号名称 */
  Name: string;
  /** 主机业务组ID */
  ProjectId: number;
  /** 账号类型：0访客用户，1标准用户，2管理员用户 ,999为空,仅windows */
  UserType: number;
  /** 是否域账号：0否， 1是，2否, 999为空 仅windows */
  IsDomain: number;
  /** 是否有sudo权限，1是，0否, 999为空, 仅linux */
  IsSudo: number;
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
  /** 密码状态：1正常 2即将过期 3已过期 4已锁定 999为空 仅linux */
  PasswordStatus: number;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
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
  MachineIp: string;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** 操作系统信息 */
  OsInfo: string;
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[] | null;
  /** 应用名 */
  Name: string;
  /** 版本 */
  Version: string;
  /** 根路径 */
  RootPath: string;
  /** 服务类型 */
  ServiceType: string;
  /** 站点域名 */
  Domain: string;
  /** 虚拟路径 */
  VirtualPath: string;
  /** 插件数 */
  PluginCount: number;
  /** 应用ID */
  Id: string;
  /** 应用描述 */
  Desc: string;
  /** 主机名称 */
  MachineName: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
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
  MachineIp: string;
  /** 主机外网IP */
  MachineWanIp: string;
  /** 主机Quuid */
  Quuid: string;
  /** 主机Uuid */
  Uuid: string;
  /** 操作系统信息 */
  OsInfo: string;
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[] | null;
  /** 数据库名 */
  Name: string;
  /** 版本 */
  Version: string;
  /** 语言 */
  Lang: string;
  /** 服务类型 */
  ServiceType: string;
  /** 主机名称 */
  MachineName: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
}

/** 资产管理Web站点列表信息 */
declare interface AssetWebLocationBaseInfo {
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
  /** 内网IP */
  MachineIp: string;
  /** 外网IP */
  MachineWanIp: string;
  /** 主机名称 */
  MachineName: string;
  /** 操作系统 */
  OsInfo: string;
  /** 域名 */
  Name: string;
  /** 站点端口 */
  Port: string;
  /** 站点协议 */
  Proto: string;
  /** 服务类型 */
  ServiceType: string;
  /** 站点路经数 */
  PathCount: number;
  /** 运行用户 */
  User: string;
  /** 主目录 */
  MainPath: string;
  /** 主目录所有者 */
  MainPathOwner: string;
  /** 拥有者权限 */
  Permission: string;
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[];
  /** Web站点Id */
  Id: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number | null;
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

/** 资源管理Web服务列表信息 */
declare interface AssetWebServiceBaseInfo {
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
  /** 主机业务组ID */
  ProjectId: number;
  /** 主机标签 */
  Tag: MachineTag[] | null;
  /** 数据库名 */
  Name: string;
  /** 版本 */
  Version: string;
  /** 二进制路径 */
  BinPath: string;
  /** 启动用户 */
  User: string;
  /** 安装路径 */
  InstallPath: string;
  /** 配置路径 */
  ConfigPath: string;
  /** 关联进程数 */
  ProcessCount: number;
  /** Web服务ID */
  Id: string;
  /** 主机名称 */
  MachineName: string;
  /** 描述 */
  Desc: string;
  /** 数据更新时间 */
  UpdateTime: string | null;
  /** 首次采集时间 */
  FirstTime: string;
  /** 是否新增[0:否|1:是] */
  IsNew: number;
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

/** 基线主机检测 */
declare interface BaselineHostDetect {
  /** 主机Id */
  HostId: string;
  /** 内网Ip */
  HostIp: string;
  /** 主机名称 */
  HostName: string;
  /** 外网Ip */
  WanIp: string;
  /** 0:未通过 1:忽略 3:通过 5:检测中 */
  DetectStatus: number;
  /** 检测通过数 */
  PassedItemCount: number;
  /** 关联检测项数 */
  ItemCount: number;
  /** 检测未通过数 */
  NotPassedItemCount: number;
  /** 首次检测时间 */
  FirstTime: string;
  /** 最后检测时间 */
  LastTime: string;
  /** 主机安全UUID */
  Uuid: string | null;
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
  ItemId: number;
  /** 项名称 */
  ItemName: string;
  /** 检测项分类 */
  CategoryId: number;
  /** 项描述 */
  ItemDesc: string;
  /** 修复方法 */
  FixMethod: string;
  /** 所属规则 */
  RuleName: string;
  /** 检测结果描述 */
  DetectResultDesc: string | null;
  /** 危险等级 */
  Level: number | null;
  /** 检测状态：0 未通过，1：忽略，3：通过，5：检测中 */
  DetectStatus: number | null;
  /** 主机ID */
  HostId: string | null;
  /** 主机名 */
  HostName: string | null;
  /** 主机IP */
  HostIp: string | null;
  /** 外网IP */
  WanIp: string | null;
  /** 第一次出现时间 */
  FirstTime: string | null;
  /** 最近出现时间 */
  LastTime: string | null;
  /** 是否可以修复 */
  CanBeFixed: number | null;
  /** 主机安全uuid */
  Uuid: string | null;
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

/** 高危命令数据 */
declare interface BashEvent {
  /** 数据ID */
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
  /** 规则等级：1-高 2-中 3-低 */
  RuleLevel: number;
  /** 处理状态： 0 = 待处理 1= 已处理, 2 = 已加白， 3 = 已忽略 */
  Status: number;
  /** 发生时间 */
  CreateTime: string;
  /** 主机名 */
  MachineName: string;
  /** 0: bash日志 1: 实时监控(雷霆版) */
  DetectBy: number | null;
  /** 进程id */
  Pid: string | null;
  /** 进程名称 */
  Exe: string | null;
  /** 处理时间 */
  ModifyTime: string | null;
  /** 规则类别 0=系统规则，1=用户规则 */
  RuleCategory: number | null;
  /** 自动生成的正则表达式 */
  RegexBashCmd: string | null;
}

/** 高危命令规则 */
declare interface BashRule {
  /** 规则ID */
  Id: number;
  /** 客户端ID */
  Uuid: string;
  /** 规则名称 */
  Name: string;
  /** 危险等级(0 ：无 1: 高危 2:中危 3: 低危) */
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
  /** 生效服务器的uuid数组 */
  Uuids: string[] | null;
  /** 0=黑名单 1=白名单 */
  White: number | null;
  /** 是否处理之前的事件 0: 不处理 1:处理 */
  DealOldEvents: number | null;
}

/** 密码破解列表实体 */
declare interface BruteAttackInfo {
  /** 唯一Id */
  Id: number;
  /** 云镜客户端唯一标识UUID */
  Uuid: string | null;
  /** 主机ip */
  MachineIp: string | null;
  /** 主机名 */
  MachineName: string | null;
  /** 用户名 */
  UserName: string | null;
  /** 来源ip */
  SrcIp: string | null;
  /** SUCCESS：破解成功；FAILED：破解失败 */
  Status: string | null;
  /** 国家id */
  Country: number | null;
  /** 城市id */
  City: number | null;
  /** 省份id */
  Province: number | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 阻断状态：1-阻断成功；非1-阻断失败 */
  BanStatus: number | null;
  /** 事件类型：200-暴力破解事件，300-暴力破解成功事件（页面展示），400-暴力破解不存在的帐号事件 */
  EventType: number | null;
  /** 发生次数 */
  Count: number | null;
  /** 机器UUID */
  Quuid: string | null;
  /** 是否为专业版（true/false） */
  IsProVersion: boolean | null;
  /** 被攻击的服务的用户名 */
  Protocol: string | null;
  /** 端口 */
  Port: number | null;
  /** 最近攻击时间 */
  ModifyTime: string | null;
  /** 实例ID */
  InstanceId: string | null;
  /** 0：待处理，1：忽略，5：已处理，6：加入白名单 */
  DataStatus: number | null;
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

/** 批量导入机器信息. */
declare interface EffectiveMachineInfo {
  /** 机器名称 */
  MachineName: string | null;
  /** 机器公网ip */
  MachinePublicIp: string | null;
  /** 机器内网ip */
  MachinePrivateIp: string | null;
  /** 机器标签 */
  MachineTag: MachineTag[] | null;
  /** 机器Quuid */
  Quuid: string | null;
  /** 云镜Uuid */
  Uuid: string | null;
  /** 内核版本号 */
  KernelVersion: string | null;
  /** 在线状态 OFFLINE，ONLINE */
  MachineStatus: string | null;
  /** 授权订单对象 */
  LicenseOrder: LicenseOrder | null;
  /** 漏洞数量 */
  VulNum: number | null;
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

/** 登录审计列表实体 */
declare interface HostLoginList {
  /** 记录Id */
  Id: number;
  /** Uuid串 */
  Uuid: string | null;
  /** 主机ip */
  MachineIp: string | null;
  /** 主机名 */
  MachineName: string | null;
  /** 用户名 */
  UserName: string | null;
  /** 来源ip */
  SrcIp: string | null;
  /** 1:正常登录；2异地登录； 5已加白； 14：已处理；15：已忽略。 */
  Status: number;
  /** 国家id */
  Country: number | null;
  /** 城市id */
  City: number | null;
  /** 省份id */
  Province: number | null;
  /** 登录时间 */
  LoginTime: string | null;
  /** 修改时间 */
  ModifyTime: string | null;
  /** 是否命中异地登录异常 1表示命中此类异常, 0表示未命中 */
  IsRiskArea: number | null;
  /** 是否命中异常用户异常 1表示命中此类异常, 0表示未命中 */
  IsRiskUser: number | null;
  /** 是否命中异常时间异常 1表示命中此类异常, 0表示未命中 */
  IsRiskTime: number | null;
  /** 是否命中异常IP异常 1表示命中此类异常, 0表示未命中 */
  IsRiskSrcIp: number | null;
  /** 危险等级：0 高危1 可疑 */
  RiskLevel: number | null;
  /** 位置名称 */
  Location: string | null;
  /** 主机quuid */
  Quuid: string | null;
  /** 高危信息说明：ABROAD - 海外IP；XTI - 威胁情报 */
  Desc: string | null;
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

/** java内存马事件信息 */
declare interface JavaMemShellInfo {
  /** 事件ID */
  Id: number;
  /** 服务器名称 */
  Alias: string | null;
  /** 服务器IP */
  HostIp: string | null;
  /** 内存马类型 0:Filter型 1:Listener型 2:Servlet型 3:Interceptors型 4:Agent型 5:其他 */
  Type: number;
  /** 说明 */
  Description: string;
  /** 首次发现时间 */
  CreateTime: string;
  /** 最近检测时间 */
  RecentFoundTime: string;
  /** 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略 4 - 已手动处理 */
  Status: number;
  /** 服务器quuid */
  Quuid: string;
}

/** 授权绑定详情信息 */
declare interface LicenseBindDetail {
  /** 机器别名 */
  MachineName: string;
  /** 机器公网IP */
  MachineWanIp: string;
  /** 机器内网IP */
  MachineIp: string;
  /** 云服务器UUID */
  Quuid: string;
  /** 云镜客户端UUID */
  Uuid: string;
  /** 标签信息 */
  Tags: string[];
  /** 云镜客户端状态,OFFLINE 离线,ONLINE 在线,UNINSTALL 未安装 */
  AgentStatus: string;
  /** 是否允许解绑,false 不允许解绑 */
  IsUnBind: boolean;
  /** 是否允许换绑,false 不允许换绑 */
  IsSwitchBind: boolean;
}

/** 授权绑定任务详情 */
declare interface LicenseBindTaskDetail {
  /** 云服务器UUID */
  Quuid: string;
  /** 错误信息 */
  ErrMsg: string;
  /** 0 执行中, 1 成功,2失败 */
  Status: number;
}

/** 授权订单列表对象 */
declare interface LicenseDetail {
  /** 授权ID */
  LicenseId: number;
  /** 授权类型,0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月 */
  LicenseType: number;
  /** 授权状态 0 未使用,1 部分使用, 2 已用完, 3 不可用 */
  LicenseStatus: number | null;
  /** 总授权数 */
  LicenseCnt: number;
  /** 已使用授权数 */
  UsedLicenseCnt: number;
  /** 订单状态 1 正常 2隔离, 3销毁 */
  OrderStatus: number;
  /** 截止日期 */
  Deadline: string;
  /** 订单资源ID */
  ResourceId: string;
  /** 0 初始化,1 自动续费,2 不自动续费 */
  AutoRenewFlag: number;
  /** 项目ID */
  ProjectId: number;
  /** 任务ID ,默认0 ,查询绑定进度用 */
  TaskId: number;
  /** 购买时间 */
  BuyTime: string;
  /** 是否试用订单. */
  SourceType: number;
  /** 资源别名 */
  Alias: string;
  /** 平台标签 */
  Tags: Tags[] | null;
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

/** 异地登录合并后白名单 */
declare interface LoginWhiteCombinedInfo {
  /** 白名单地域 */
  Places: Place[] | null;
  /** 白名单用户（多个用户逗号隔开） */
  UserName: string;
  /** 白名单IP（多个IP逗号隔开） */
  SrcIp: string;
  /** 地域字符串 */
  Locale: string;
  /** 备注 */
  Remark: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 是否对全局生效, 1：全局有效 0: 对指定主机列表生效' */
  IsGlobal: number;
  /** 白名单名字：IsLocal=1时固定为：全部服务器；单台机器时为机器内网IP，多台服务器时为服务器数量，如：11台 */
  Name: string;
  /** 仅在单台服务器时，返回服务器名称 */
  Desc: string;
  /** 白名单ID */
  Id: number;
  /** 创建时间 */
  CreateTime: string;
  /** 最近修改时间 */
  ModifyTime: string;
  /** 服务器Uuid */
  Uuid: string;
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
  MachineName: string;
  /** 主机系统。 */
  MachineOs: string;
  /** 主机状态。OFFLINE: 离线 ONLINE: 在线SHUTDOWN: 已关机UNINSTALLED: 未防护 */
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
  /** 实例状态 TERMINATED_PRO_VERSION 已销毁 */
  InstanceState: string;
  /** 防篡改 授权状态 1 授权 0 未授权 */
  LicenseStatus: number;
  /** 项目ID */
  ProjectId: number;
  /** 是否有资产扫描接口，0无，1有 */
  HasAssetScan: number;
  /** 机器所属专区类型 CVM 云服务器, BM 黑石, ECM 边缘计算, LH 轻量应用服务器 ,Other 混合云专区 */
  MachineType: string;
  /** 内核版本 */
  KernelVersion: string;
  /** 防护版本：BASIC_VERSION 基础版， PRO_VERSION 专业版，Flagship 旗舰版，GENERAL_DISCOUNT 普惠版 */
  ProtectType: string;
  /** 云标签信息 */
  CloudTags: Tags[] | null;
  /** 是否15天内新增的主机 0：非15天内新增的主机，1：15天内增加的主机 */
  IsAddedOnTheFifteen: number | null;
  /** 主机ip列表 */
  IpList: string | null;
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
  HostIp: string;
  /** 唯一UUID */
  Uuid: string;
  /** 路径 */
  FilePath: string;
  /** 描述 */
  VirusName: string;
  /** 状态；4-:待处理，5-已信任，6-已隔离，8-文件已删除, 14:已处理 */
  Status: number;
  /** 唯一ID */
  Id: number | null;
  /** 主机别名 */
  Alias: string;
  /** 特性标签，已废弃字段，不会再返回标签，详情中才会返回标签信息 */
  Tags: string[] | null;
  /** 首次运行时间 */
  FileCreateTime: string | null;
  /** 最近运行时间 */
  FileModifierTime: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 最近扫描时间 */
  LatestScanTime: string;
  /** 风险等级 0未知、1低、2中、3高、4严重 */
  Level: number;
  /** '木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报 */
  CheckPlatform: string;
  /** 木马进程是否存在 0:不存在，1:存在 */
  ProcessExists: number;
  /** 木马文件是否存在 0:不存在，1:存在 */
  FileExists: number;
  /** cvm quuid */
  Quuid: string;
  /** 木马样本md5 */
  MD5: string;
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
  VirusName: string;
  /** 文件大小 */
  FileSize: number;
  /** 文件MD5 */
  MD5: string;
  /** 文件地址 */
  FilePath: string;
  /** 首次运行时间 */
  FileCreateTime: string;
  /** 最近一次运行时间 */
  FileModifierTime: string;
  /** 危害描述 */
  HarmDescribe: string;
  /** 建议方案 */
  SuggestScheme: string;
  /** 服务器名称 */
  ServersName: string;
  /** 服务器IP */
  HostIp: string;
  /** 进程名称 */
  ProcessName: string;
  /** 进程ID */
  ProcessID: string;
  /** 标签特性 */
  Tags: string[];
  /** 影响广度 // 暂时不提供 */
  Breadth: string | null;
  /** 查询热度 // 暂时不提供 */
  Heat: string | null;
  /** 唯一ID */
  Id: number;
  /** 文件名称 */
  FileName: string;
  /** 首次发现时间 */
  CreateTime: string;
  /** 最近扫描时间 */
  LatestScanTime: string;
  /** 参考链接 */
  Reference: string;
  /** 外网ip */
  MachineWanIp: string | null;
  /** 进程树 json pid:进程id，exe:文件路径 ，account:进程所属用组和用户 ,cmdline:执行命令，ssh_service: SSH服务ip, ssh_soure:登录源 */
  PsTree: string | null;
  /** 主机在线状态 OFFLINE ONLINE */
  MachineStatus: string | null;
  /** 状态；4-:待处理，5-已信任，6-已隔离 */
  Status: number | null;
  /** 风险等级 0提示、1低、2中、3高、4严重 */
  Level: number | null;
  /** 木马检测平台用,分割 1云查杀引擎、2TAV、3binaryAi、4异常行为、5威胁情报 */
  CheckPlatform: string | null;
  /** 主机uuid */
  Uuid: string | null;
  /** 最近修改时间 */
  ModifyTime: string | null;
  /** 最近访问时间 */
  StrFileAccessTime: string | null;
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

/** 专家服务-月巡检报告 */
declare interface MonthInspectionReport {
  /** 巡检报告名称 */
  ReportName: string;
  /** 巡检报告下载地址 */
  ReportPath: string;
  /** 巡检报告更新时间 */
  ModifyTime: string;
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
  /** 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略 */
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

/** 进程数据统计数据。 */
declare interface ProcessStatistics {
  /** 进程名。 */
  ProcessName: string;
  /** 主机数量。 */
  MachineNum: number;
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
}

/** 防护目录关联服务器列表信息 */
declare interface ProtectDirRelatedServer {
  /** 唯一ID */
  Id: string;
  /** 服务器名称 */
  HostName: string;
  /** 服务器IP */
  HostIp: string;
  /** 服务器系统 */
  MachineOs: string;
  /** 关联目录数 */
  RelateDirNum: number;
  /** 防护状态 */
  ProtectStatus: number;
  /** 防护开关 */
  ProtectSwitch: number;
  /** 自动恢复开关 */
  AutoRestoreSwitchStatus: number;
  /** 服务器唯一ID */
  Quuid: string;
  /** 是否已经授权 */
  Authorization: boolean;
  /** 异常状态 */
  Exception: number;
  /** 过渡进度 */
  Progress: number;
  /** 异常信息 */
  ExceptionMessage: string;
}

/** 防护事件列表信息 */
declare interface ProtectEventLists {
  /** 服务器名称 */
  HostName: string;
  /** 服务器ip */
  HostIp: string;
  /** 事件地址 */
  EventDir: string;
  /** 事件类型 0-内容被修改恢复；1-权限被修改恢复；2-归属被修改恢复；3-被删除恢复；4-新增删除 */
  EventType: number;
  /** 事件状态 1 已恢复 0 未恢复 */
  EventStatus: number;
  /** 发现时间 */
  CreateTime: string;
  /** 恢复时间 */
  RestoreTime: string;
  /** 唯一ID */
  Id: number;
  /** 文件类型 0-常规文件；1-目录；2-软链 */
  FileType: number;
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
  /** 处理状态：0-待处理 2-白名单 3-已处理 4-已忽略 */
  Status: number;
  /** 产生时间 */
  CreateTime: string;
  /** 主机名 */
  MachineName: string;
  /** 进程树 */
  ProcTree: string;
  /** 检测方法 */
  DetectBy: number;
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
  /** 主机在线状态 OFFLINE ONLINE */
  MachineStatus: string | null;
}

/** 扫描任务详情列表信息 */
declare interface ScanTaskDetails {
  /** 服务器IP */
  HostIp: string;
  /** 服务器名称 */
  HostName: string;
  /** 操作系统 */
  OsName: string;
  /** 风险数量 */
  RiskNum: number;
  /** 扫描开始时间 */
  ScanBeginTime: string;
  /** 扫描结束时间 */
  ScanEndTime: string;
  /** 唯一Uuid */
  Uuid: string;
  /** 唯一Quuid */
  Quuid: string;
  /** 状态码 */
  Status: string;
  /** 描述 */
  Description: string;
  /** id唯一 */
  Id: number;
  /** 失败详情 */
  FailType: number;
  /** 外网ip */
  MachineWanIp: string;
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
  /** 云镜客户端UUID。 */
  Uuid: string;
  /** 安全事件发生时间。 */
  EventTime: string;
  /** 安全事件类型。MALWARE：木马事件NON_LOCAL_LOGIN：异地登录BRUTEATTACK_SUCCESS：密码破解成功VUL：漏洞BASELINE：安全基线 */
  EventType: string;
  /** 安全事件消息。 */
  Message: string;
  /** 安全事件等级。RISK: 严重HIGH: 高危NORMAL: 中危LOW: 低危 */
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
  EventId: number | null;
  /** 状态：0: 待处理 1:忽略 3:已修复 5:检测中 6:修复中 7: 回滚中 8:修复失败 */
  Status: number | null;
  /** 最后检测时间 */
  LastTime: string | null;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 */
  Level: number | null;
  /** 主机Quuid */
  Quuid: string | null;
  /** 主机Uuid */
  Uuid: string | null;
  /** 主机HostIp */
  HostIp: string | null;
  /** 主机别名 */
  AliasName: string | null;
  /** 主机标签 */
  Tags: string[] | null;
  /** 说明 */
  Description: string | null;
  /** 版本信息：0-基础版 1-专业版 2-旗舰版 3-普惠版 */
  HostVersion: number | null;
  /** 是否能自动修复 0 :漏洞不可自动修复， 1：可自动修复， 2：客户端已离线， 3：主机不是旗舰版只能手动修复， 4：机型不允许 ，5：修复中 ，6：已修复， 7：检测中 9:修复失败，10:已忽略 11:漏洞只支持linux不支持Windows 12：漏洞只支持Windows不支持linux，13:修复失败但此时主机已离线，14:修复失败但此时主机不是旗舰版， 15:已手动修复 */
  IsSupportAutoFix: number | null;
  /** 失败原因 */
  FixStatusMsg: string | null;
  /** 首次发现时间 */
  FirstDiscoveryTime: string | null;
  /** 实例状态："PENDING"-创建中 "LAUNCH_FAILED"-创建失败 "RUNNING"-运行中 "STOPPED"-关机 "STARTING"-表示开机中 "STOPPING"-表示关机中 "REBOOTING"-重启中 "SHUTDOWN"-表示停止待销毁 "TERMINATING"-表示销毁中 " */
  InstanceState: string | null;
  /** 外网ip */
  PublicIpAddresses: string | null;
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
}

/** 告警更新或插入的参数 */
declare interface WarningObject {
  /** 事件告警类型；1：离线，2：木马，3：异常登录，4：爆破，5：漏洞（已拆分为9-12四种类型）6：高位命令，7：反弹sell，8：本地提权，9：系统组件漏洞，10：web应用漏洞，11：应急漏洞，12：安全基线 */
  Type?: number;
  /** 1: 关闭告警 0: 开启告警 */
  DisablePhoneWarning?: number;
  /** 开始时间，格式: HH:mm */
  BeginTime?: string;
  /** 结束时间，格式: HH:mm */
  EndTime?: string;
  /** 漏洞等级控制位二进制，每一位对应页面漏洞等级的开启关闭：低中高（0:关闭；1：开启），例如：101 → 同时勾选低+高；01→(登录审计)疑似不告警，高危告警 */
  ControlBits?: string;
}

/** 可用区信息 */
declare interface ZoneInfo {
  /** 可用区名称 */
  ZoneName: string;
}

declare interface CancelIgnoreVulRequest {
  /** 漏洞事件id串，多个用英文逗号分隔 */
  EventIds: string;
}

declare interface CancelIgnoreVulResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 云主机类型：CVM：虚拟主机BM：裸金属ECM：边缘计算主机LH：轻量应用服务器Other：混合云机器 */
  MachineType: string;
  /** 主机地域. 示例: "ap-guangzhou" */
  RegionCode: string;
  /** 主机id数组. 示例: ["quuid1","quuid2"] */
  Quuids?: string[];
}

declare interface CreateBaselineStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEmergencyVulScanRequest {
  /** 漏洞id */
  VulId: number;
  /** 自选服务器时生效，主机uuid的string数组 */
  Uuids?: string[];
}

declare interface CreateEmergencyVulScanResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateProtectServerRequest {
  /** 防护目录地址 */
  ProtectDir: string;
  /** 防护机器 信息 */
  ProtectHostConfig: ProtectHostConfig[];
}

declare interface CreateProtectServerResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSearchLogRequest {
  /** 搜索内容 */
  SearchContent: string;
}

declare interface CreateSearchLogResponse {
  /** 0：成功，非0：失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSearchTemplateRequest {
  /** 搜索模板 */
  SearchTemplate: SearchTemplate;
}

declare interface CreateSearchTemplateResponse {
  /** 0：成功，非0：失败 */
  Status: number;
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

declare interface DeleteBaselinePolicyRequest {
  /** 策略Id */
  PolicyIds: number[];
}

declare interface DeleteBaselinePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteBaselineStrategyRequest {
  /** 基线策略id */
  StrategyId: number;
}

declare interface DeleteBaselineStrategyResponse {
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
  /** 暴力破解事件Id数组。(最大 100条) */
  Ids: number[];
}

declare interface DeleteBruteAttacksResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLoginWhiteListRequest {
  /** 白名单ID (最大 100 条) */
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
  /** 恶意请求记录ID数组，(最大100条) */
  Ids: number[];
}

declare interface DeleteMaliciousRequestsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMalwareScanTaskRequest {
}

declare interface DeleteMalwareScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMalwaresRequest {
  /** 木马记录ID数组 (最大100条) */
  Ids: number[];
}

declare interface DeleteMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePrivilegeEventsRequest {
  /** ID数组. (最大100条) */
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

declare interface DeleteProtectDirRequest {
  /** 删除的目录ID 最大100条 */
  Ids: string[];
}

declare interface DeleteProtectDirResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReverseShellEventsRequest {
  /** ID数组. (最大100条) */
  Ids: number[];
}

declare interface DeleteReverseShellEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReverseShellRulesRequest {
  /** ID数组. (最大100条) */
  Ids: number[];
}

declare interface DeleteReverseShellRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSearchTemplateRequest {
  /** 模板ID */
  Id: number;
}

declare interface DeleteSearchTemplateResponse {
  /** 0：成功，非0：失败 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTagsRequest {
  /** 标签ID (最大100 条) */
  Ids: number[];
}

declare interface DeleteTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteWebPageEventLogRequest {
}

declare interface DeleteWebPageEventLogResponse {
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
  TotalCount: number;
  /** 帐号统计列表。 */
  AccountStatistics: AccountStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetAppListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。AppName- string - 是否必填：否 - 应用名搜索IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Type - int - 是否必填：否 - 类型	: 仅linux0: 全部1: 运维2 : 数据库3 : 安全4 : 可疑应用5 : 系统架构6 : 系统应用7 : WEB服务99:其他OsType - uint64 - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Apps: AssetAppBaseInfo[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetCoreModuleListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name- string - 是否必填：否 - 包名User- string - 是否必填：否 - 用户 */
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
  Modules: AssetCoreModuleBaseInfo[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetDatabaseListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选User- string - 是否必填：否 - 运行用户Ip - String - 是否必填：否 - 绑定IPPort - Int - 是否必填：否 - 端口Name - Int - 是否必填：否 - 数据库名称0:全部1:MySQL2:Redis3:Oracle4:MongoDB5:MemCache6:PostgreSQL7:HBase8:DB29:Sybase10:TiDBProto - String - 是否必填：否 - 协议：1:TCP, 2:UDP, 3:未知OsType - String - 是否必填：否 - 操作系统: linux/windowsOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Databases: AssetDatabaseBaseInfo[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetInitServiceListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name- string - 是否必填：否 - 包名User- string - 是否必填：否 - 用户Status- string - 是否必填：否 - 默认启用状态：0未启用， 1启用 仅linuxType- string - 是否必填：否 - 类型：类型 仅windows：1:编码器2:IE插件3:网络提供者4:镜像劫持5:LSA提供者6:KnownDLLs7:启动执行8:WMI9:计划任务10:Winsock提供者11:打印监控器12:资源管理器13:驱动服务14:登录 */
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
  Services: AssetInitServiceBaseInfo[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetJarListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name- string - 是否必填：否 - 包名Type- uint - 是否必填：否 - 类型	1: 应用程序2 : 系统类库3 : Web服务自带库4 : 其他依赖包Status- string - 是否必填：否 - 是否可执行：0否，1是 */
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
  Jars: AssetJarBaseInfo[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  MachineDetail: AssetMachineDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetMachineListRequest {
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选OsType - String - 是否必填：否 - windows或linuxCpuLoad - Int - 是否必填：否 - 0: 未知 1: 低负载2: 中负载 3: 高负载DiskLoad - Int - 是否必填：否 - 0: 0%或未知 1: 0%～20%2: 20%～50% 3: 50%～80%4: 80%～100%MemLoad - Int - 是否必填：否 - 0: 0%或未知 1: 0%～20%2: 20%～50% 3: 50%～80%4: 80%～100%Quuid：主机QuuidOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Total: number;
  /** 记录列表 */
  Machines: AssetMachineBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetPlanTaskListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选User- string - 是否必填：否 - 用户Status- int - 是否必填：否 - 默认启用状态：0未启用， 1启用 */
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
  Tasks: AssetPlanTask[] | null;
  /** 总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetPortInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。Port - uint64 - 是否必填：否 - 端口Ip - String - 是否必填：否 - 绑定IPProcessName - String - 是否必填：否 - 监听进程Pid - uint64 - 是否必填：否 - PIDUser - String - 是否必填：否 - 运行用户Group - String - 是否必填：否 - 所属用户组Ppid - uint64 - 是否必填：否 - PPIDProto - string - 是否必填：否 - tcp/udp或“”(空字符串筛选未知状态)OsType - uint64 - 是否必填：否 - windows/linuxRunTimeStart - String - 是否必填：否 - 运行开始时间RunTimeEnd - String - 是否必填：否 - 运行结束时间Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Total: number;
  /** 列表 */
  Ports: AssetPortBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetProcessInfoListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name - String - 是否必填：否 - 进程名User - String - 是否必填：否 - 进程用户Group - String - 是否必填：否 - 进程用户组Pid - uint64 - 是否必填：否 - 进程IDPpid - uint64 - 是否必填：否 - 父进程IDOsType - uint64 - 是否必填：否 - windows/linuxStatus - string - 是否必填：否 - 进程状态：1:R 可执行2:S 可中断3:D 不可中断4:T 暂停状态或跟踪状态5:Z 僵尸状态6:X 将被销毁RunTimeStart - String - 是否必填：否 - 运行开始时间RunTimeEnd - String - 是否必填：否 - 运行结束时间InstallByPackage - uint64 - 是否必填：否 - 是否包安装：0否，1是Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Total: number;
  /** 列表 */
  Process: AssetProcessBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetSystemPackageListRequest {
  /** 主机Uuid */
  Uuid: string;
  /** 主机Quuid */
  Quuid: string;
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
  Total: number;
  /** 列表 */
  Packages: AssetSystemPackageInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetUserListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name - String - 是否必填：否 - 账户名（模糊匹配）NameStrict - String - 是否必填：否 - 账户名（严格匹配）Uid - uint64 - 是否必填：否 - UidGuid - uint64 - 是否必填：否 - GuidLoginTimeStart - String - 是否必填：否 - 开始时间，如：2021-01-11LoginTimeEnd - String - 是否必填：否 - 结束时间，如：2021-01-11LoginType - uint64 - 是否必填：否 - 0-不可登录；1-只允许key登录；2只允许密码登录；3-允许key和密码 仅linuxOsType - String - 是否必填：否 - windows或linuxStatus - uint64 - 是否必填：否 - 账号状态：0-禁用；1-启用UserType - uint64 - 是否必填：否 - 账号类型：0访客用户，1标准用户，2管理员用户 仅windowsIsDomain - uint64 - 是否必填：否 - 是否域账号：0 不是，1是 仅windowsIsRoot - uint64 - 是否必填：否 - 是否Root权限：0 不是，1是 仅linuxIsSudo - uint64 - 是否必填：否 - 是否Sudo权限：0 不是，1是 仅linuxIsSshLogin - uint64 - 是否必填：否 - 是否ssh登录：0 不是，1是 仅linuxShellLoginStatus - uint64 - 是否必填：否 - 是否shell登录性，0不是；1是 仅linuxPasswordStatus - uint64 - 是否必填：否 - 密码状态：1正常 2即将过期 3已过期 4已锁定 仅linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
  Filters?: Filter[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 可选排序：[FirstTime|LoginTime|PasswordChangeTime|PasswordDuaTime]PasswordLockDays */
  By?: string;
}

declare interface DescribeAssetUserListResponse {
  /** 记录总数 */
  Total: number;
  /** 账号列表 */
  Users: AssetUserBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetWebAppListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name - String - 是否必填：否 - 应用名Domain - String - 是否必填：否 - 站点域名Type - int - 是否必填：否 - 服务类型：0：全部1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:Jetty8:IHS9:TengineOsType - String - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Total: number;
  /** 列表 */
  WebApps: AssetWebAppBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetWebFrameListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name - String - 是否必填：否 - 框架名NameStrict - String - 是否必填：否 - 框架名（严格匹配）Lang - String - 是否必填：否 - 框架语言:java/pythonType - String - 是否必填：否 - 服务类型：0：全部1:Tomcat2:Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType - String - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Total: number;
  /** 列表 */
  WebFrames: AssetWebFrameBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetWebLocationListRequest {
  /** 查询指定Quuid主机的信息 */
  Quuid?: string;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Name - String - 是否必填：否 - 域名User - String - 是否必填：否 - 运行用户Port - uint64 - 是否必填：否 - 站点端口Proto - uint64 - 是否必填：否 - 站点协议：1:HTTP,2:HTTPSServiceType - uint64 - 是否必填：否 - 服务类型：1:Tomcat2：Apache3:Nginx4:WebLogic5:Websphere6:JBoss7:WildFly8:Jetty9:IHS10:TengineOsType - String - 是否必填：否 - windows/linuxOs -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 ) */
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
  Total: number;
  /** 站点列表 */
  Locations: AssetWebLocationBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAttackLogInfoRequest {
  /** 日志ID */
  Id: number;
}

declare interface DescribeAttackLogInfoResponse {
  /** 日志ID */
  Id: number;
  /** 主机ID */
  Quuid: string;
  /** 攻击来源端口 */
  SrcPort: number;
  /** 攻击来源IP */
  SrcIp: string;
  /** 攻击目标端口 */
  DstPort: number;
  /** 攻击目标IP */
  DstIp: string;
  /** 攻击方法 */
  HttpMethod: string;
  /** 攻击目标主机 */
  HttpHost: string;
  /** 攻击头信息 */
  HttpHead: string;
  /** 攻击者浏览器标识 */
  HttpUserAgent: string;
  /** 请求源 */
  HttpReferer: string;
  /** 威胁类型 */
  VulType: string;
  /** 攻击路径 */
  HttpCgi: string;
  /** 攻击参数 */
  HttpParam: string;
  /** 攻击时间 */
  CreatedAt: string;
  /** 攻击内容 */
  HttpContent: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  AttackLogs: DefendAttackLog[] | null;
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAttackVulTypeListRequest {
}

declare interface DescribeAttackVulTypeListResponse {
  /** 威胁类型列表 */
  List: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBanModeRequest {
}

declare interface DescribeBanModeResponse {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode: string;
  /** 标准阻断模式的配置 */
  StandardModeConfig: StandardModeConfig;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBanRegionsRequest {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode: string;
}

declare interface DescribeBanRegionsResponse {
  /** 地域信息列表 */
  RegionSet: RegionSet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBanStatusRequest {
}

declare interface DescribeBanStatusResponse {
  /** 阻断开关状态 0:关闭 1:开启 */
  Status: number;
  /** 是否弹窗提示信息 false: 关闭，true: 开启 */
  ShowTips: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBaselineBasicInfoRequest {
  /** 基线名称 */
  BaselineName?: string;
}

declare interface DescribeBaselineBasicInfoResponse {
  /** 基线基础信息列表 */
  BaselineBasicInfoList: BaselineBasicInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBaselineDetailRequest {
  /** 基线id */
  BaselineId: number;
}

declare interface DescribeBaselineDetailResponse {
  /** 基线详情 */
  BaselineDetail: BaselineDetail | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBaselineScanScheduleRequest {
  /** 任务id */
  TaskId: number;
}

declare interface DescribeBaselineScanScheduleResponse {
  /** 检测进度(百分比) */
  Schedule: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBruteAttackListRequest {
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Uuid - String - 是否必填：否 - 云镜唯一UuidQuuid - String - 是否必填：否 - 云服务器uuidStatus - String - 是否必填：否 - 状态筛选：失败：FAILED 成功：SUCCESSUserName - String - 是否必填：否 - UserName筛选SrcIp - String - 是否必填：否 - 来源ip筛选CreateBeginTime - String - 是否必填：否 - 首次攻击时间筛选，开始时间CreateEndTime - String - 是否必填：否 - 首次攻击时间筛选，结束时间ModifyBeginTime - String - 是否必填：否 - 最近攻击时间筛选，开始时间ModifyEndTime - String - 是否必填：否 - 最近攻击时间筛选，结束时间Banned - String - 是否必填：否 - 阻断状态筛选，多个用","分割：0-未阻断（全局ZK开关关闭），82-未阻断(非专业版)，83-未阻断(已加白名单)，1-已阻断，2-未阻断-程序异常，3-未阻断-内网攻击暂不支持阻断，4-未阻断-安平暂不支持阻断 */
  Filters?: Filter[];
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：CreateTime-首次攻击时间 */
  By?: string;
}

declare interface DescribeBruteAttackListResponse {
  /** 总数 */
  TotalCount: number | null;
  /** 密码破解列表 */
  BruteAttackList: BruteAttackInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBruteAttackRulesRequest {
}

declare interface DescribeBruteAttackRulesResponse {
  /** 爆破阻断规则列表 */
  Rules: BruteAttackRuleList[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number;
  /** 组件统计列表数据数组。 */
  ComponentStatistics: ComponentStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeESAggregationsRequest {
  /** ES聚合条件JSON */
  Query: string;
}

declare interface DescribeESAggregationsResponse {
  /** ES聚合结果JSON */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface DescribeEmergencyVulListResponse {
  /** 漏洞列表 */
  List: EmergencyVul[] | null;
  /** 漏洞总条数 */
  TotalCount: number | null;
  /** 是否存在风险 */
  ExistsRisk: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  MachinesAll: number;
  /** 云主机没有安装主机安全客户端的总数 */
  MachinesUninstalled: number;
  /** 主机安全客户端总数的总数 */
  AgentsAll: number;
  /** 主机安全客户端在线的总数 */
  AgentsOnline: number;
  /** 主机安全客户端 离线+关机 的总数 */
  AgentsOffline: number;
  /** 主机安全客户端专业版的总数 */
  AgentsPro: number;
  /** 主机安全客户端基础版的总数 */
  AgentsBasic: number;
  /** 7天内到期的预付费专业版总数 */
  AgentsProExpireWithInSevenDays: number;
  /** 风险主机总数 */
  RiskMachine: number;
  /** 已关机总数 */
  Shutdown: number;
  /** 已离线总数 */
  Offline: number;
  /** 旗舰版主机数 */
  FlagshipMachineCnt: number | null;
  /** 保护天数 */
  ProtectDays: number | null;
  /** 15天内新增的主机数 */
  AddedOnTheFifteen: number | null;
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
  TotalCount: number;
  /** 帐号变更历史数据数组。 */
  HistoryAccounts: HistoryAccount[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeHostLoginListRequest {
  /** 需要返回的数量，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选Uuid - String - 是否必填：否 - 云镜唯一UuidQuuid - String - 是否必填：否 - 云服务器uuidUserName - String - 是否必填：否 - 用户名筛选LoginTimeBegin - String - 是否必填：否 - 按照修改时间段筛选，开始时间LoginTimeEnd - String - 是否必填：否 - 按照修改时间段筛选，结束时间SrcIp - String - 是否必填：否 - 来源ip筛选Status - int - 是否必填：否 - 状态筛选1:正常登录；5：已加白,14:已处理，15：已忽略RiskLevel - int - 是否必填：否 - 状态筛选0:高危；1：可疑 */
  Filters?: Filter[];
  /** 排序方式：根据请求次数排序：asc-升序/desc-降序 */
  Order?: string;
  /** 排序字段：LoginTime-发生时间 */
  By?: string;
}

declare interface DescribeHostLoginListResponse {
  /** 总数 */
  TotalCount: number;
  /** 登录审计列表 */
  HostLoginList: HostLoginList[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  EffectiveMachineInfoList: EffectiveMachineInfo[] | null;
  /** 用户批量导入失败的机器列表（例如机器不存在等...） */
  InvalidMachineList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIndexListRequest {
}

declare interface DescribeIndexListResponse {
  /** ES 索引信息 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLicenseBindListRequest {
  /** 授权ID */
  LicenseId: number;
  /** 授权类型 */
  LicenseType: number;
  /** 资源ID */
  ResourceId: string;
  /** Keywords 机器别名/公私IP 模糊查询 */
  Filters?: Filters[];
  /** 限制条数,默认10. */
  Limit?: number;
  /** 偏移量,默认0. */
  Offset?: number;
}

declare interface DescribeLicenseBindListResponse {
  /** 总条数 */
  TotalCount: number;
  /** 绑定机器列表信息 */
  List: LicenseBindDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLicenseGeneralRequest {
}

declare interface DescribeLicenseGeneralResponse {
  /** 总授权数 (包含隔离,过期等不可用状态) */
  LicenseCnt: number;
  /** 可用授权数 */
  AvailableLicenseCnt: number;
  /** 可用专业版授权数(包含后付费). */
  AvailableProVersionLicenseCnt: number;
  /** 可用旗舰版授权数 */
  AvailableFlagshipVersionLicenseCnt: number;
  /** 即将到期授权数 (15天内到期的) */
  NearExpiryLicenseCnt: number;
  /** 已到期授权数(不包含已删除的记录) */
  ExpireLicenseCnt: number;
  /** 自动升级开关状态,默认 false, true 开启, false 关闭 */
  AutoOpenStatus: boolean;
  /** PROVERSION_POSTPAY 专业版-后付费, PROVERSION_PREPAY 专业版-预付费, FLAGSHIP_PREPAY 旗舰版-预付费 */
  ProtectType: string;
  /** 历史是否开通过自动升级开关 */
  IsOpenStatusHistory: boolean;
  /** 已使用授权数 */
  UsedLicenseCnt: number;
  /** 未到期授权数 */
  NotExpiredLicenseCnt: number;
  /** 旗舰版总授权数(有效订单) */
  FlagshipVersionLicenseCnt: number;
  /** 专业版总授权数(有效订单) */
  ProVersionLicenseCnt: number;
  /** 普惠版总授权数(有效订单的授权数) */
  CwpVersionLicenseCnt: number;
  /** 可用惠普版授权数 */
  AvailableLHLicenseCnt: number;
  /** 自动加购开关, true 开启, false 关闭 */
  AutoRepurchaseSwitch: boolean;
  /** 自动加购订单是否自动续费 ,true 开启, false 关闭 */
  AutoRepurchaseRenewSwitch: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLicenseListRequest {
  /** 多个条件筛选时 LicenseStatus,DeadlineStatus,ResourceId,Keywords 取交集 LicenseStatus 授权状态信息,0 未使用,1 部分使用, 2 已用完, 3 不可用 4 可使用 BuyTime 购买时间 LicenseType 授权类型, 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月DeadlineStatus 到期状态 NotExpired 未过期, Expire 已过期(包含已销毁) NearExpiry 即将到期ResourceId 资源IDKeywords IP筛选PayMode 付费模式 0 按量计费 , 1 包年包月OrderStatus 订单状态 1 正常 2 隔离 3 销毁 */
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
  TotalCount: number;
  /** 授权数列表信息 */
  List: LicenseDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLogStorageStatisticRequest {
}

declare interface DescribeLogStorageStatisticResponse {
  /** 总容量（单位：GB） */
  TotalSize: number;
  /** 已使用容量（单位：GB） */
  UsedSize: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMachineInfoRequest {
  /** 云镜客户端唯一Uuid。 */
  Uuid?: string;
  /** Quuid , Uuid 必填一项 */
  Quuid?: string;
}

declare interface DescribeMachineInfoResponse {
  /** 机器ip。 */
  MachineIp: string;
  /** 受云镜保护天数。 */
  ProtectDays: number;
  /** 操作系统。 */
  MachineOs: string;
  /** 主机名称。 */
  MachineName: string;
  /** 在线状态。ONLINE： 在线OFFLINE：离线 */
  MachineStatus: string;
  /** CVM或BM主机唯一标识。 */
  InstanceId: string;
  /** 主机外网IP。 */
  MachineWanIp: string;
  /** CVM或BM主机唯一Uuid。 */
  Quuid: string;
  /** 云镜客户端唯一Uuid。 */
  Uuid: string;
  /** 是否开通专业版。true：是false：否 */
  IsProVersion: boolean;
  /** 专业版开通时间。 */
  ProVersionOpenDate: string;
  /** 云服务器类型。CVM: 腾讯云服务器BM: 黑石物理机ECM: 边缘计算服务器LH: 轻量应用服务器Other: 混合云机器 */
  MachineType: string;
  /** 机器所属地域。如：ap-guangzhou，ap-shanghai */
  MachineRegion: string;
  /** 主机状态。POSTPAY: 表示后付费，即按量计费 PREPAY: 表示预付费，即包年包月 */
  PayMode: string;
  /** 免费木马剩余检测数量。 */
  FreeMalwaresLeft: number;
  /** 免费漏洞剩余检测数量。 */
  FreeVulsLeft: number;
  /** agent版本号 */
  AgentVersion: string;
  /** 专业版到期时间(仅预付费) */
  ProVersionDeadline: string;
  /** 是否有资产扫描记录，0无，1有 */
  HasAssetScan: number;
  /** 防护版本 BASIC_VERSION 基础版, PRO_VERSION 专业版 Flagship 旗舰版. */
  ProtectType: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMachineOsListRequest {
}

declare interface DescribeMachineOsListResponse {
  /** 操作系统列表 */
  List: OsName[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 过滤条件。Ips - String - 是否必填：否 - 通过ip查询 Names - String - 是否必填：否 - 通过实例名查询 InstanceIds - String - 是否必填：否 - 通过实例id查询 Status - String - 是否必填：否 - 客户端在线状态（OFFLINE: 离线/关机 | ONLINE: 在线 | UNINSTALLED：未安装 | AGENT_OFFLINE 离线| AGENT_SHUTDOWN 已关机）Version - String 是否必填：否 - 当前防护版本（ PRO_VERSION：专业版 | BASIC_VERSION：基础版 | Flagship : 旗舰版 | ProtectedMachines: 专业版+旗舰版）Risk - String 是否必填: 否 - 风险主机( yes ) Os -String 是否必填: 否 - 操作系统( DescribeMachineOsList 接口 值 )每个过滤条件只支持一个值，暂不支持多个值“或”关系查询Quuid - String - 是否必填: 否 - 云服务器uuid 最大100条.AddedOnTheFifteen- String 是否必填: 否 - 是否只查询15天内新增的主机( 1：是) */
  Filters?: Filter[];
  /** 机器所属业务ID列表 */
  ProjectIds?: number[];
}

declare interface DescribeMachinesResponse {
  /** 主机列表 */
  Machines: Machine[];
  /** 主机数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMalWareListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。IpOrAlias - String - 是否必填：否 - 主机ip或别名筛选FilePath - String - 是否必填：否 - 路径筛选VirusName - String - 是否必填：否 - 描述筛选CreateBeginTime - String - 是否必填：否 - 创建时间筛选-开始时间CreateEndTime - String - 是否必填：否 - 创建时间筛选-结束时间Status - String - 是否必填：否 - 状态筛选 4待处理,5信任,6已隔离,10隔离中,11恢复隔离中 */
  Filters?: Filter[];
  /** 检测排序 CreateTime */
  By?: string;
  /** 排序方式 ASC,DESC */
  Order?: string;
}

declare interface DescribeMalWareListResponse {
  /** 木马列表 */
  MalWareList: MalWareList[] | null;
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMaliciousRequestWhiteListRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit: number;
  /** 偏移量，默认为0。 */
  Offset: number;
  /** 过滤条件。Domain - String - 基线名称 */
  Filters?: Filters[];
}

declare interface DescribeMaliciousRequestWhiteListResponse {
  /** 白名单信息列表 */
  List: MaliciousRequestWhiteListInfo[] | null;
  /** 分页查询记录总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMalwareFileRequest {
  /** 木马记录ID */
  Id: number;
}

declare interface DescribeMalwareFileResponse {
  /** 木马文件下载地址 */
  FileUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMalwareInfoRequest {
  /** 唯一ID */
  Id: number;
}

declare interface DescribeMalwareInfoResponse {
  /** 恶意文件详情信息 */
  MalwareInfo: MalwareInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMalwareTimingScanSettingRequest {
}

declare interface DescribeMalwareTimingScanSettingResponse {
  /** 检测模式 0 全盘检测 1快速检测 */
  CheckPattern: number;
  /** 检测周期 开始时间 */
  StartTime: string;
  /** 检测周期 超时结束时间 */
  EndTime: string;
  /** 是否全部服务器 1 全部 2 自选 */
  IsGlobal: number;
  /** 自选服务器时必须 主机quuid的string数组 */
  QuuidList: string[] | null;
  /** 监控模式 0 标准 1深度 */
  MonitoringPattern: number;
  /** 周期 1每天 */
  Cycle: number;
  /** 定时检测开关 0 关闭1 开启 */
  EnableScan: number;
  /** 唯一ID */
  Id: number;
  /** 实时监控0 关闭 1开启 */
  RealTimeMonitoring: number;
  /** 是否自动隔离：1-是，0-否 */
  AutoIsolation: number;
  /** 一键扫描超时时长，如：1800秒（s） */
  ClickTimeout: number;
  /** 是否杀掉进程 1杀掉 0不杀掉 只有开启自动隔离才生效 */
  KillProcess: number;
  /** 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示） */
  EngineType: number;
  /** 启发引擎 0 关闭 1开启 */
  EnableInspiredEngine: number;
  /** 是否开启恶意进程查杀[0:未开启,1:开启] */
  EnableMemShellScan: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number;
  /** 端口统计数据列表 */
  OpenPortStatistics: OpenPortStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProVersionStatusRequest {
  /** 云镜客户端UUID、填写"all"表示所有主机。 */
  Uuid: string;
}

declare interface DescribeProVersionStatusResponse {
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
  TotalCount: number;
  /** 进程统计列表数据数组。 */
  ProcessStatistics: ProcessStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number;
  /** 防护目录列表信息 */
  List: ProtectDirInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  List: ReverseShellRule[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSaveOrUpdateWarningsRequest {
  /** 告警设置的修改内容 */
  WarningObjects?: WarningObject[];
}

declare interface DescribeSaveOrUpdateWarningsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScanScheduleRequest {
  /** 任务id */
  TaskId: number;
}

declare interface DescribeScanScheduleResponse {
  /** 检测进度 */
  Schedule: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScanTaskStatusRequest {
  /** 模块类型 当前提供 Malware 木马 , Vul 漏洞 , Baseline 基线 */
  ModuleType: string;
}

declare interface DescribeScanTaskStatusResponse {
  /** 任务扫描状态列表 */
  State: TaskStatus;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScanVulSettingRequest {
}

declare interface DescribeScanVulSettingResponse {
  /** 漏洞类型：1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞 */
  VulCategories: string;
  /** 危害等级：1-低危；2-中危；3-高危；4-严重 (多选英文逗号分隔) */
  VulLevels: string;
  /** 定期检测间隔时间（天） */
  TimerInterval: number;
  /** 定期检测时间，如：00:00 */
  TimerTime: string;
  /** 是否紧急漏洞：0-否 1-是 */
  VulEmergency: number;
  /** 开始时间 */
  StartTime: string;
  /** 是否开启 */
  EnableScan: number;
  /** 结束时间 */
  EndTime: string;
  /** 一键扫描超时时长，如：1800秒（s） */
  ClickTimeout: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSearchExportListRequest {
  /** ES查询条件JSON */
  Query: string;
}

declare interface DescribeSearchExportListResponse {
  /** 导出的任务号 */
  TaskId: number;
  /** 下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSearchLogsRequest {
}

declare interface DescribeSearchLogsResponse {
  /** 历史搜索记录 保留最新的10条 */
  Data: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStrategyExistRequest {
  /** 策略名 */
  StrategyName: string;
}

declare interface DescribeStrategyExistResponse {
  /** 策略是否存在, 1是 0否 */
  IfExist: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTagMachinesRequest {
  /** 标签ID */
  Id: number;
}

declare interface DescribeTagMachinesResponse {
  /** 列表数据 */
  List: TagMachine[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUsualLoginPlacesRequest {
  /** 云镜客户端UUID */
  Uuid: string;
}

declare interface DescribeUsualLoginPlacesResponse {
  /** 常用登录地数组 */
  UsualLoginPlaces: UsualPlace[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVersionStatisticsRequest {
}

declare interface DescribeVersionStatisticsResponse {
  /** 基础版数量 */
  BasicVersionNum: number;
  /** 专业版数量 */
  ProVersionNum: number;
  /** 旗舰版数量 */
  UltimateVersionNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulListRequest {
  /** 返回数量，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - 处理状态 0 -- 待处理 1 -- 已加白 2 -- 已删除 3 - 已忽略ModifyTime - String - 是否必填：否 - 最近发生时间Uuid- String - 是否必填：否 - 主机uuid查询VulName- string -VulCategory- string - 是否必填：否 - 漏洞类别 1: web-cms漏洞 2:应用漏洞 4: Linux软件漏洞 5: Windows系统漏洞IsSupportDefense - int- 是否必填：否 - 是否支持防御 0:不支持 1:支持Labels- string- 是否必填：否 - 标签搜索 */
  Filters?: Filters[];
  /** 可选排序字段 Level，LastTime，HostCount */
  By?: string;
  /** 排序顺序：desc 默认asc */
  Order?: string;
}

declare interface DescribeVulListResponse {
  /** 漏洞列表 */
  VulInfoList: VulInfoList[] | null;
  /** 漏洞总条数 */
  TotalCount: number | null;
  /** 重点关注漏洞总数 */
  FollowVulCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWarningListRequest {
}

declare interface DescribeWarningListResponse {
  /** 获取告警列表 */
  WarningInfoList: WarningInfoObj[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWebPageProtectStatRequest {
}

declare interface DescribeWebPageProtectStatResponse {
  /** 文件篡改信息 */
  FileTamperNum: ProtectStat[];
  /** 防护文件分类信息 */
  ProtectFileType: ProtectStat[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroyOrderRequest {
  /** 资源ID */
  ResourceId: string;
  /** 授权类型 0 专业版-按量计费, 1专业版-包年包月 , 2 旗舰版-包年包月 */
  LicenseType: number;
}

declare interface DestroyOrderResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportAssetCoreModuleListRequest {
  /** 服务器Uuid */
  Uuid?: string;
  /** 服务器Quuid */
  Quuid?: string;
  /** 过滤条件。Name- string - 是否必填：否 - 包名User- string - 是否必填：否 - 用户 */
  Filters?: AssetFilters[];
  /** 排序方式，asc升序 或 desc降序 */
  Order?: string;
  /** 排序依据[FirstTime|Size|ProcessCount|ModuleCount] */
  By?: string;
}

declare interface ExportAssetCoreModuleListResponse {
  /** 异步下载任务ID，需要配合ExportTasks接口使用 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportAttackLogsRequest {
  /** 过滤条件。HttpMethod - String - 是否必填：否 - 攻击方法(POST|GET)DateRange - String - 是否必填：否 - 时间范围(存储最近3个月的数据)，如最近一个月["2019-11-17", "2019-12-17"]VulType - String 威胁类型 - 是否必填: 否SrcIp - String 攻击源IP - 是否必填: 否DstIp - String 攻击目标IP - 是否必填: 否SrcPort - String 攻击源端口 - 是否必填: 否DstPort - String 攻击目标端口 - 是否必填: 否 */
  Filters?: Filters[];
  /** 主机安全客户端ID */
  Uuid?: string;
  /** 云主机机器ID */
  Quuid?: string;
}

declare interface ExportAttackLogsResponse {
  /** 已废弃 */
  DownloadUrl: string;
  /** 导出任务ID 可通过ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 下载地址 */
  DownloadUrl: string | null;
  /** 导出任务id 可通过 ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  DownloadUrl: string | null;
  /** 导出文件Id 可通过ExportTasks接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportBashEventsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportBashEventsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl: string;
  /** 导出任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportBruteAttacksRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportBruteAttacksResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl: string;
  /** 导出任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportIgnoreBaselineRuleRequest {
  /** 检测项名称 */
  RuleName?: string;
}

declare interface ExportIgnoreBaselineRuleResponse {
  /** 文件下载地址 */
  DownloadUrl: string;
  /** 导出任务Id , 可通过ExportTasks 接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportIgnoreRuleEffectHostListRequest {
  /** 检测项id */
  RuleId: number;
  /** 过滤条件。AliasName- String- 主机别名 */
  Filters?: Filters[];
}

declare interface ExportIgnoreRuleEffectHostListResponse {
  /** 导出文件下载地址 */
  DownloadUrl: string;
  /** 导出任务Id , 可通过ExportTasks 接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  DownloadUrl: string;
  /** 任务ID,可通过任务ID去查下载任务 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportMaliciousRequestsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportMaliciousRequestsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl: string;
  /** 导出任务Id , 可通过ExportTasks 接口下载 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 导出文件下载链接地址。 */
  DownloadUrl: string;
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportNonlocalLoginPlacesRequest {
  /** Status - int - 是否必填：否 - 状态筛选1:正常登录；2：异地登录 */
  Filters?: Filter[];
}

declare interface ExportNonlocalLoginPlacesResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl: string;
  /** 导出任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportPrivilegeEventsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportPrivilegeEventsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl: string;
  /** 导出任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportReverseShellEventsRequest {
  /** 过滤参数 */
  Filters?: Filters[];
}

declare interface ExportReverseShellEventsResponse {
  /** 导出文件下载链接地址。 */
  DownloadUrl: string;
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 导出本次检测Excel的任务Id（不同于入参的本次检测任务id） */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportVulDetectionExcelRequest {
  /** 本次漏洞检测任务id（不同于出参的导出本次漏洞检测Excel的任务Id） */
  TaskId: number;
}

declare interface ExportVulDetectionExcelResponse {
  /** 导出文件下载链接地址 */
  DownloadUrl: string;
  /** 导出本次漏洞检测Excel的任务Id（不同于入参的本次漏洞检测任务id） */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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

declare interface ModifyAutoOpenProVersionConfigRequest {
  /** 设置自动开通状态。CLOSE：关闭OPEN：打开 */
  Status: string;
  /** 自动加购/扩容授权开关,默认 1, 0关闭, 1开启 */
  AutoRepurchaseSwitch?: number;
  /** 自动加购的订单是否自动续费,默认0 ,0关闭, 1开启 */
  AutoRepurchaseRenewSwitch?: number;
}

declare interface ModifyAutoOpenProVersionConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBanModeRequest {
  /** 阻断模式，STANDARD_MODE：标准阻断，DEEP_MODE：深度阻断 */
  Mode: string;
  /** 阻断时间，用于标准阻断模式 */
  Ttl?: number;
}

declare interface ModifyBanModeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBanStatusRequest {
  /** 阻断状态 0:关闭 1:开启 */
  Status: number;
}

declare interface ModifyBanStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBruteAttackRulesRequest {
  /** 暴力破解判断规则 */
  Rules: BruteAttackRule[];
}

declare interface ModifyBruteAttackRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 1标准模式（只报严重、高危）、2增强模式（报严重、高危、中危）、3严格模式（报严重、高、中、低、提示） */
  EngineType?: number;
  /** 启发引擎开关 0 关闭 1开启 */
  EnableInspiredEngine?: number;
  /** 是否开启恶意进程查杀[0:未开启,1:开启] */
  EnableMemShellScan?: number;
}

declare interface ModifyMalwareTimingScanSettingsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWarningSettingRequest {
  /** 告警设置的修改内容 */
  WarningObjects: WarningObject[];
}

declare interface ModifyWarningSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ScanVulAgainRequest {
  /** 漏洞事件id串，多个用英文逗号分隔 */
  EventIds: string;
  /** 重新检查的机器uuid,多个逗号分隔 */
  Uuids?: string;
}

declare interface ScanVulAgainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TaskId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface ScanVulSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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

declare interface StartBaselineDetectRequest {
  /** 基线检测参数 */
  Param: BaselineDetectParam;
}

declare interface StartBaselineDetectResponse {
  /** 扫描任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopBaselineDetectRequest {
  /** 取消任务ID集合 */
  TaskIds: number[];
}

declare interface StopBaselineDetectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopNoticeBanTipsRequest {
}

declare interface StopNoticeBanTipsResponse {
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SyncBaselineDetectSummaryRequest {
}

declare interface SyncBaselineDetectSummaryResponse {
  /** 处理进度 */
  ProgressRate: number;
  /** 未通过策略总数 */
  NotPassPolicyCount: number;
  /** 主机总数 */
  HostCount: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 1:即将进行首次扫描 0:已经扫描过了 */
  WillFirstScan: number;
  /** 正在检测的任务ID */
  DetectingTaskIds: number[];
  /** 扫描中剩余时间(分钟) */
  LeftMins: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TrustMalwaresRequest {
  /** 木马ID数组（单次不超过的最大条数：100） */
  Ids: number[];
}

declare interface TrustMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UntrustMalwaresRequest {
  /** 木马ID数组 (最大100条) */
  Ids: number[];
}

declare interface UntrustMalwaresResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateMachineTagsRequest {
  /** 机器 Quuid */
  Quuid: string;
  /** 服务器地区 如: ap-guangzhou */
  MachineRegion: string;
  /** 服务器类型(CVM|BM|ECM|LH|Other) */
  MachineArea: string;
  /** 标签ID，该操作会覆盖原有的标签列表 */
  TagIds?: number[];
}

declare interface UpdateMachineTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Cwp 主机安全} */
declare interface Cwp {
  (): Versions;
  /** {@link CancelIgnoreVul 取消漏洞忽略}({@link CancelIgnoreVulRequest 请求参数}): {@link CancelIgnoreVulResponse 返回参数} */
  CancelIgnoreVul(data: CancelIgnoreVulRequest, config?: AxiosRequestConfig): AxiosPromise<CancelIgnoreVulResponse>;
  /** {@link ChangeRuleEventsIgnoreStatus 修改事件忽略状态}({@link ChangeRuleEventsIgnoreStatusRequest 请求参数}): {@link ChangeRuleEventsIgnoreStatusResponse 返回参数} */
  ChangeRuleEventsIgnoreStatus(data: ChangeRuleEventsIgnoreStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeRuleEventsIgnoreStatusResponse>;
  /** {@link CheckBashRuleParams 校验高危命新增用户规则参数}({@link CheckBashRuleParamsRequest 请求参数}): {@link CheckBashRuleParamsResponse 返回参数} */
  CheckBashRuleParams(data: CheckBashRuleParamsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckBashRuleParamsResponse>;
  /** {@link CreateBaselineStrategy 创建基线策略}({@link CreateBaselineStrategyRequest 请求参数}): {@link CreateBaselineStrategyResponse 返回参数} */
  CreateBaselineStrategy(data: CreateBaselineStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaselineStrategyResponse>;
  /** {@link CreateEmergencyVulScan 应急漏洞扫描}({@link CreateEmergencyVulScanRequest 请求参数}): {@link CreateEmergencyVulScanResponse 返回参数} */
  CreateEmergencyVulScan(data: CreateEmergencyVulScanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmergencyVulScanResponse>;
  /** {@link CreateLicenseOrder 创建授权订单}({@link CreateLicenseOrderRequest 请求参数}): {@link CreateLicenseOrderResponse 返回参数} */
  CreateLicenseOrder(data?: CreateLicenseOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLicenseOrderResponse>;
  /** {@link CreateProtectServer 添加网站防护服务器}({@link CreateProtectServerRequest 请求参数}): {@link CreateProtectServerResponse 返回参数} */
  CreateProtectServer(data: CreateProtectServerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProtectServerResponse>;
  /** {@link CreateScanMalwareSetting 文件查杀检测}({@link CreateScanMalwareSettingRequest 请求参数}): {@link CreateScanMalwareSettingResponse 返回参数} */
  CreateScanMalwareSetting(data: CreateScanMalwareSettingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScanMalwareSettingResponse>;
  /** {@link CreateSearchLog 添加历史搜索记录}({@link CreateSearchLogRequest 请求参数}): {@link CreateSearchLogResponse 返回参数} */
  CreateSearchLog(data: CreateSearchLogRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSearchLogResponse>;
  /** {@link CreateSearchTemplate 添加检索模板}({@link CreateSearchTemplateRequest 请求参数}): {@link CreateSearchTemplateResponse 返回参数} */
  CreateSearchTemplate(data: CreateSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSearchTemplateResponse>;
  /** {@link DeleteAttackLogs 删除网络攻击日志}({@link DeleteAttackLogsRequest 请求参数}): {@link DeleteAttackLogsResponse 返回参数} */
  DeleteAttackLogs(data: DeleteAttackLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttackLogsResponse>;
  /** {@link DeleteBaselinePolicy 删除基线策略配置}({@link DeleteBaselinePolicyRequest 请求参数}): {@link DeleteBaselinePolicyResponse 返回参数} */
  DeleteBaselinePolicy(data: DeleteBaselinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselinePolicyResponse>;
  /** {@link DeleteBaselineStrategy 删除基线策略}({@link DeleteBaselineStrategyRequest 请求参数}): {@link DeleteBaselineStrategyResponse 返回参数} */
  DeleteBaselineStrategy(data: DeleteBaselineStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselineStrategyResponse>;
  /** {@link DeleteBashEvents 删除高危命令事件}({@link DeleteBashEventsRequest 请求参数}): {@link DeleteBashEventsResponse 返回参数} */
  DeleteBashEvents(data: DeleteBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBashEventsResponse>;
  /** {@link DeleteBashRules 删除高危命令规则}({@link DeleteBashRulesRequest 请求参数}): {@link DeleteBashRulesResponse 返回参数} */
  DeleteBashRules(data: DeleteBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBashRulesResponse>;
  /** {@link DeleteBruteAttacks 删除暴力破解记录}({@link DeleteBruteAttacksRequest 请求参数}): {@link DeleteBruteAttacksResponse 返回参数} */
  DeleteBruteAttacks(data: DeleteBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBruteAttacksResponse>;
  /** {@link DeleteLicenseRecord 删除授权记录}({@link DeleteLicenseRecordRequest 请求参数}): {@link DeleteLicenseRecordResponse 返回参数} */
  DeleteLicenseRecord(data: DeleteLicenseRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLicenseRecordResponse>;
  /** {@link DeleteLoginWhiteList 删除异地登录白名单规则}({@link DeleteLoginWhiteListRequest 请求参数}): {@link DeleteLoginWhiteListResponse 返回参数} */
  DeleteLoginWhiteList(data: DeleteLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoginWhiteListResponse>;
  /** {@link DeleteMachine 卸载云镜客户端}({@link DeleteMachineRequest 请求参数}): {@link DeleteMachineResponse 返回参数} */
  DeleteMachine(data: DeleteMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineResponse>;
  /** {@link DeleteMachineTag 删除服务器关联的标签}({@link DeleteMachineTagRequest 请求参数}): {@link DeleteMachineTagResponse 返回参数} */
  DeleteMachineTag(data: DeleteMachineTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineTagResponse>;
  /** {@link DeleteMaliciousRequests 删除恶意请求记录}({@link DeleteMaliciousRequestsRequest 请求参数}): {@link DeleteMaliciousRequestsResponse 返回参数} */
  DeleteMaliciousRequests(data: DeleteMaliciousRequestsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMaliciousRequestsResponse>;
  /** {@link DeleteMalwareScanTask 入侵管理-终止扫描任务}({@link DeleteMalwareScanTaskRequest 请求参数}): {@link DeleteMalwareScanTaskResponse 返回参数} */
  DeleteMalwareScanTask(data?: DeleteMalwareScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMalwareScanTaskResponse>;
  /** {@link DeleteMalwares 删除木马记录}({@link DeleteMalwaresRequest 请求参数}): {@link DeleteMalwaresResponse 返回参数} */
  DeleteMalwares(data: DeleteMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMalwaresResponse>;
  /** {@link DeleteNonlocalLoginPlaces 删除异地登录记录}({@link DeleteNonlocalLoginPlacesRequest 请求参数}): {@link DeleteNonlocalLoginPlacesResponse 返回参数} */
  DeleteNonlocalLoginPlaces(data?: DeleteNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNonlocalLoginPlacesResponse>;
  /** {@link DeletePrivilegeEvents 删除本地提权事件}({@link DeletePrivilegeEventsRequest 请求参数}): {@link DeletePrivilegeEventsResponse 返回参数} */
  DeletePrivilegeEvents(data: DeletePrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivilegeEventsResponse>;
  /** {@link DeletePrivilegeRules 删除本地提权规则}({@link DeletePrivilegeRulesRequest 请求参数}): {@link DeletePrivilegeRulesResponse 返回参数} */
  DeletePrivilegeRules(data: DeletePrivilegeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivilegeRulesResponse>;
  /** {@link DeleteProtectDir 删除防护网站}({@link DeleteProtectDirRequest 请求参数}): {@link DeleteProtectDirResponse 返回参数} */
  DeleteProtectDir(data: DeleteProtectDirRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProtectDirResponse>;
  /** {@link DeleteReverseShellEvents 删除反弹Shell事件}({@link DeleteReverseShellEventsRequest 请求参数}): {@link DeleteReverseShellEventsResponse 返回参数} */
  DeleteReverseShellEvents(data: DeleteReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellEventsResponse>;
  /** {@link DeleteReverseShellRules 删除反弹Shell规则}({@link DeleteReverseShellRulesRequest 请求参数}): {@link DeleteReverseShellRulesResponse 返回参数} */
  DeleteReverseShellRules(data: DeleteReverseShellRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellRulesResponse>;
  /** {@link DeleteScanTask 停止扫描任务}({@link DeleteScanTaskRequest 请求参数}): {@link DeleteScanTaskResponse 返回参数} */
  DeleteScanTask(data: DeleteScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScanTaskResponse>;
  /** {@link DeleteSearchTemplate 删除检索模板}({@link DeleteSearchTemplateRequest 请求参数}): {@link DeleteSearchTemplateResponse 返回参数} */
  DeleteSearchTemplate(data: DeleteSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSearchTemplateResponse>;
  /** {@link DeleteTags 删除标签}({@link DeleteTagsRequest 请求参数}): {@link DeleteTagsResponse 返回参数} */
  DeleteTags(data: DeleteTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTagsResponse>;
  /** {@link DeleteWebPageEventLog 删除事件记录}({@link DeleteWebPageEventLogRequest 请求参数}): {@link DeleteWebPageEventLogResponse 返回参数} */
  DeleteWebPageEventLog(data?: DeleteWebPageEventLogRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebPageEventLogResponse>;
  /** {@link DescribeAccountStatistics 获取帐号统计列表数据}({@link DescribeAccountStatisticsRequest 请求参数}): {@link DescribeAccountStatisticsResponse 返回参数} */
  DescribeAccountStatistics(data?: DescribeAccountStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountStatisticsResponse>;
  /** {@link DescribeAssetAppList 查询应用列表}({@link DescribeAssetAppListRequest 请求参数}): {@link DescribeAssetAppListResponse 返回参数} */
  DescribeAssetAppList(data?: DescribeAssetAppListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppListResponse>;
  /** {@link DescribeAssetAppProcessList 获取软件关联进程列表}({@link DescribeAssetAppProcessListRequest 请求参数}): {@link DescribeAssetAppProcessListResponse 返回参数} */
  DescribeAssetAppProcessList(data: DescribeAssetAppProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppProcessListResponse>;
  /** {@link DescribeAssetCoreModuleInfo 获取内核模块详情}({@link DescribeAssetCoreModuleInfoRequest 请求参数}): {@link DescribeAssetCoreModuleInfoResponse 返回参数} */
  DescribeAssetCoreModuleInfo(data: DescribeAssetCoreModuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetCoreModuleInfoResponse>;
  /** {@link DescribeAssetCoreModuleList 查询资产管理内核模块列表}({@link DescribeAssetCoreModuleListRequest 请求参数}): {@link DescribeAssetCoreModuleListResponse 返回参数} */
  DescribeAssetCoreModuleList(data?: DescribeAssetCoreModuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetCoreModuleListResponse>;
  /** {@link DescribeAssetDatabaseInfo 获取资产管理数据库详情}({@link DescribeAssetDatabaseInfoRequest 请求参数}): {@link DescribeAssetDatabaseInfoResponse 返回参数} */
  DescribeAssetDatabaseInfo(data: DescribeAssetDatabaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDatabaseInfoResponse>;
  /** {@link DescribeAssetDatabaseList 查询资产管理数据库列表}({@link DescribeAssetDatabaseListRequest 请求参数}): {@link DescribeAssetDatabaseListResponse 返回参数} */
  DescribeAssetDatabaseList(data?: DescribeAssetDatabaseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDatabaseListResponse>;
  /** {@link DescribeAssetEnvList 查询资产管理环境变量列表}({@link DescribeAssetEnvListRequest 请求参数}): {@link DescribeAssetEnvListResponse 返回参数} */
  DescribeAssetEnvList(data?: DescribeAssetEnvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetEnvListResponse>;
  /** {@link DescribeAssetHostTotalCount 获取主机所有资源数量}({@link DescribeAssetHostTotalCountRequest 请求参数}): {@link DescribeAssetHostTotalCountResponse 返回参数} */
  DescribeAssetHostTotalCount(data: DescribeAssetHostTotalCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostTotalCountResponse>;
  /** {@link DescribeAssetInfo 获取资产数量概况}({@link DescribeAssetInfoRequest 请求参数}): {@link DescribeAssetInfoResponse 返回参数} */
  DescribeAssetInfo(data?: DescribeAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetInfoResponse>;
  /** {@link DescribeAssetInitServiceList 查询资产管理启动服务列表}({@link DescribeAssetInitServiceListRequest 请求参数}): {@link DescribeAssetInitServiceListResponse 返回参数} */
  DescribeAssetInitServiceList(data?: DescribeAssetInitServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetInitServiceListResponse>;
  /** {@link DescribeAssetJarInfo 获取Jar包详情}({@link DescribeAssetJarInfoRequest 请求参数}): {@link DescribeAssetJarInfoResponse 返回参数} */
  DescribeAssetJarInfo(data: DescribeAssetJarInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetJarInfoResponse>;
  /** {@link DescribeAssetJarList 查询Jar包列表}({@link DescribeAssetJarListRequest 请求参数}): {@link DescribeAssetJarListResponse 返回参数} */
  DescribeAssetJarList(data?: DescribeAssetJarListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetJarListResponse>;
  /** {@link DescribeAssetMachineDetail 获取资产管理主机资源详细信息}({@link DescribeAssetMachineDetailRequest 请求参数}): {@link DescribeAssetMachineDetailResponse 返回参数} */
  DescribeAssetMachineDetail(data: DescribeAssetMachineDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetMachineDetailResponse>;
  /** {@link DescribeAssetMachineList 获取资源监控列表}({@link DescribeAssetMachineListRequest 请求参数}): {@link DescribeAssetMachineListResponse 返回参数} */
  DescribeAssetMachineList(data?: DescribeAssetMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetMachineListResponse>;
  /** {@link DescribeAssetPlanTaskList 查询资产管理计划任务列表}({@link DescribeAssetPlanTaskListRequest 请求参数}): {@link DescribeAssetPlanTaskListResponse 返回参数} */
  DescribeAssetPlanTaskList(data?: DescribeAssetPlanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPlanTaskListResponse>;
  /** {@link DescribeAssetPortInfoList 获取资产管理端口列表}({@link DescribeAssetPortInfoListRequest 请求参数}): {@link DescribeAssetPortInfoListResponse 返回参数} */
  DescribeAssetPortInfoList(data?: DescribeAssetPortInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPortInfoListResponse>;
  /** {@link DescribeAssetProcessInfoList 获取资产管理进程列表}({@link DescribeAssetProcessInfoListRequest 请求参数}): {@link DescribeAssetProcessInfoListResponse 返回参数} */
  DescribeAssetProcessInfoList(data?: DescribeAssetProcessInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessInfoListResponse>;
  /** {@link DescribeAssetRecentMachineInfo 获取主机概况趋势}({@link DescribeAssetRecentMachineInfoRequest 请求参数}): {@link DescribeAssetRecentMachineInfoResponse 返回参数} */
  DescribeAssetRecentMachineInfo(data: DescribeAssetRecentMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetRecentMachineInfoResponse>;
  /** {@link DescribeAssetSystemPackageList 获取资产管理系统安装包列表}({@link DescribeAssetSystemPackageListRequest 请求参数}): {@link DescribeAssetSystemPackageListResponse 返回参数} */
  DescribeAssetSystemPackageList(data: DescribeAssetSystemPackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSystemPackageListResponse>;
  /** {@link DescribeAssetUserInfo 获取主机账号详情}({@link DescribeAssetUserInfoRequest 请求参数}): {@link DescribeAssetUserInfoResponse 返回参数} */
  DescribeAssetUserInfo(data: DescribeAssetUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetUserInfoResponse>;
  /** {@link DescribeAssetUserList 获取账号列表}({@link DescribeAssetUserListRequest 请求参数}): {@link DescribeAssetUserListResponse 返回参数} */
  DescribeAssetUserList(data?: DescribeAssetUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetUserListResponse>;
  /** {@link DescribeAssetWebAppList 获取资产管理Web应用列表}({@link DescribeAssetWebAppListRequest 请求参数}): {@link DescribeAssetWebAppListResponse 返回参数} */
  DescribeAssetWebAppList(data?: DescribeAssetWebAppListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebAppListResponse>;
  /** {@link DescribeAssetWebAppPluginList 获取资产管理Web应用插件列表}({@link DescribeAssetWebAppPluginListRequest 请求参数}): {@link DescribeAssetWebAppPluginListResponse 返回参数} */
  DescribeAssetWebAppPluginList(data: DescribeAssetWebAppPluginListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebAppPluginListResponse>;
  /** {@link DescribeAssetWebFrameList 获取资产管理Web框架列表}({@link DescribeAssetWebFrameListRequest 请求参数}): {@link DescribeAssetWebFrameListResponse 返回参数} */
  DescribeAssetWebFrameList(data?: DescribeAssetWebFrameListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebFrameListResponse>;
  /** {@link DescribeAssetWebLocationInfo 获取Web站点详情}({@link DescribeAssetWebLocationInfoRequest 请求参数}): {@link DescribeAssetWebLocationInfoResponse 返回参数} */
  DescribeAssetWebLocationInfo(data: DescribeAssetWebLocationInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebLocationInfoResponse>;
  /** {@link DescribeAssetWebLocationList 获取Web站点列表}({@link DescribeAssetWebLocationListRequest 请求参数}): {@link DescribeAssetWebLocationListResponse 返回参数} */
  DescribeAssetWebLocationList(data?: DescribeAssetWebLocationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebLocationListResponse>;
  /** {@link DescribeAssetWebServiceInfoList 查询资产管理Web服务列表}({@link DescribeAssetWebServiceInfoListRequest 请求参数}): {@link DescribeAssetWebServiceInfoListResponse 返回参数} */
  DescribeAssetWebServiceInfoList(data?: DescribeAssetWebServiceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceInfoListResponse>;
  /** {@link DescribeAssetWebServiceProcessList 获取Web服务关联进程列表}({@link DescribeAssetWebServiceProcessListRequest 请求参数}): {@link DescribeAssetWebServiceProcessListResponse 返回参数} */
  DescribeAssetWebServiceProcessList(data: DescribeAssetWebServiceProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceProcessListResponse>;
  /** {@link DescribeAttackLogInfo 网络攻击日志详情}({@link DescribeAttackLogInfoRequest 请求参数}): {@link DescribeAttackLogInfoResponse 返回参数} */
  DescribeAttackLogInfo(data: DescribeAttackLogInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackLogInfoResponse>;
  /** {@link DescribeAttackLogs 网络攻击日志列表}({@link DescribeAttackLogsRequest 请求参数}): {@link DescribeAttackLogsResponse 返回参数} */
  DescribeAttackLogs(data?: DescribeAttackLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackLogsResponse>;
  /** {@link DescribeAttackVulTypeList 获取网络攻击威胁类型列表}({@link DescribeAttackVulTypeListRequest 请求参数}): {@link DescribeAttackVulTypeListResponse 返回参数} */
  DescribeAttackVulTypeList(data?: DescribeAttackVulTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackVulTypeListResponse>;
  /** {@link DescribeAvailableExpertServiceDetail 可用订单详情}({@link DescribeAvailableExpertServiceDetailRequest 请求参数}): {@link DescribeAvailableExpertServiceDetailResponse 返回参数} */
  DescribeAvailableExpertServiceDetail(data?: DescribeAvailableExpertServiceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableExpertServiceDetailResponse>;
  /** {@link DescribeBanMode 获取爆破阻断模式}({@link DescribeBanModeRequest 请求参数}): {@link DescribeBanModeResponse 返回参数} */
  DescribeBanMode(data?: DescribeBanModeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanModeResponse>;
  /** {@link DescribeBanRegions 获取阻断地域}({@link DescribeBanRegionsRequest 请求参数}): {@link DescribeBanRegionsResponse 返回参数} */
  DescribeBanRegions(data: DescribeBanRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanRegionsResponse>;
  /** {@link DescribeBanStatus 获取阻断按钮状态}({@link DescribeBanStatusRequest 请求参数}): {@link DescribeBanStatusResponse 返回参数} */
  DescribeBanStatus(data?: DescribeBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanStatusResponse>;
  /** {@link DescribeBanWhiteList 获取阻断白名单列表}({@link DescribeBanWhiteListRequest 请求参数}): {@link DescribeBanWhiteListResponse 返回参数} */
  DescribeBanWhiteList(data?: DescribeBanWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBanWhiteListResponse>;
  /** {@link DescribeBaselineAnalysisData 基线策略概览统计数据查询}({@link DescribeBaselineAnalysisDataRequest 请求参数}): {@link DescribeBaselineAnalysisDataResponse 返回参数} */
  DescribeBaselineAnalysisData(data: DescribeBaselineAnalysisDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineAnalysisDataResponse>;
  /** {@link DescribeBaselineBasicInfo 查询基线基础信息}({@link DescribeBaselineBasicInfoRequest 请求参数}): {@link DescribeBaselineBasicInfoResponse 返回参数} */
  DescribeBaselineBasicInfo(data?: DescribeBaselineBasicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineBasicInfoResponse>;
  /** {@link DescribeBaselineDetail 查询基线详情}({@link DescribeBaselineDetailRequest 请求参数}): {@link DescribeBaselineDetailResponse 返回参数} */
  DescribeBaselineDetail(data: DescribeBaselineDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineDetailResponse>;
  /** {@link DescribeBaselineEffectHostList 基线影响主机列表}({@link DescribeBaselineEffectHostListRequest 请求参数}): {@link DescribeBaselineEffectHostListResponse 返回参数} */
  DescribeBaselineEffectHostList(data: DescribeBaselineEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineEffectHostListResponse>;
  /** {@link DescribeBaselineHostDetectList 获取基线检测主机列表}({@link DescribeBaselineHostDetectListRequest 请求参数}): {@link DescribeBaselineHostDetectListResponse 返回参数} */
  DescribeBaselineHostDetectList(data?: DescribeBaselineHostDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineHostDetectListResponse>;
  /** {@link DescribeBaselineHostTop 服务器风险top接口}({@link DescribeBaselineHostTopRequest 请求参数}): {@link DescribeBaselineHostTopResponse 返回参数} */
  DescribeBaselineHostTop(data: DescribeBaselineHostTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineHostTopResponse>;
  /** {@link DescribeBaselineItemDetectList 获取基线检测项的列表}({@link DescribeBaselineItemDetectListRequest 请求参数}): {@link DescribeBaselineItemDetectListResponse 返回参数} */
  DescribeBaselineItemDetectList(data?: DescribeBaselineItemDetectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemDetectListResponse>;
  /** {@link DescribeBaselineItemList 获取基线项检测结果列表}({@link DescribeBaselineItemListRequest 请求参数}): {@link DescribeBaselineItemListResponse 返回参数} */
  DescribeBaselineItemList(data?: DescribeBaselineItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineItemListResponse>;
  /** {@link DescribeBaselineList 查询基线列表}({@link DescribeBaselineListRequest 请求参数}): {@link DescribeBaselineListResponse 返回参数} */
  DescribeBaselineList(data: DescribeBaselineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineListResponse>;
  /** {@link DescribeBaselinePolicyList 获取基线策略列表}({@link DescribeBaselinePolicyListRequest 请求参数}): {@link DescribeBaselinePolicyListResponse 返回参数} */
  DescribeBaselinePolicyList(data?: DescribeBaselinePolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselinePolicyListResponse>;
  /** {@link DescribeBaselineRule 查询基线检测项信息}({@link DescribeBaselineRuleRequest 请求参数}): {@link DescribeBaselineRuleResponse 返回参数} */
  DescribeBaselineRule(data: DescribeBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineRuleResponse>;
  /** {@link DescribeBaselineScanSchedule 基线检测进度查询}({@link DescribeBaselineScanScheduleRequest 请求参数}): {@link DescribeBaselineScanScheduleResponse 返回参数} */
  DescribeBaselineScanSchedule(data: DescribeBaselineScanScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineScanScheduleResponse>;
  /** {@link DescribeBaselineStrategyDetail 查询基线策略详情}({@link DescribeBaselineStrategyDetailRequest 请求参数}): {@link DescribeBaselineStrategyDetailResponse 返回参数} */
  DescribeBaselineStrategyDetail(data: DescribeBaselineStrategyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineStrategyDetailResponse>;
  /** {@link DescribeBaselineStrategyList 用户基线策略列表查询}({@link DescribeBaselineStrategyListRequest 请求参数}): {@link DescribeBaselineStrategyListResponse 返回参数} */
  DescribeBaselineStrategyList(data: DescribeBaselineStrategyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineStrategyListResponse>;
  /** {@link DescribeBaselineTop 基线检测项TOP}({@link DescribeBaselineTopRequest 请求参数}): {@link DescribeBaselineTopResponse 返回参数} */
  DescribeBaselineTop(data: DescribeBaselineTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineTopResponse>;
  /** {@link DescribeBashEvents 获取高危命令列表}({@link DescribeBashEventsRequest 请求参数}): {@link DescribeBashEventsResponse 返回参数} */
  DescribeBashEvents(data?: DescribeBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashEventsResponse>;
  /** {@link DescribeBashRules 获取高危命令规则列表}({@link DescribeBashRulesRequest 请求参数}): {@link DescribeBashRulesResponse 返回参数} */
  DescribeBashRules(data: DescribeBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBashRulesResponse>;
  /** {@link DescribeBruteAttackList 获取密码破解列表}({@link DescribeBruteAttackListRequest 请求参数}): {@link DescribeBruteAttackListResponse 返回参数} */
  DescribeBruteAttackList(data?: DescribeBruteAttackListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBruteAttackListResponse>;
  /** {@link DescribeBruteAttackRules 获取爆破破解规则}({@link DescribeBruteAttackRulesRequest 请求参数}): {@link DescribeBruteAttackRulesResponse 返回参数} */
  DescribeBruteAttackRules(data?: DescribeBruteAttackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBruteAttackRulesResponse>;
  /** {@link DescribeClientException 获取客户端异常事件}({@link DescribeClientExceptionRequest 请求参数}): {@link DescribeClientExceptionResponse 返回参数} */
  DescribeClientException(data: DescribeClientExceptionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClientExceptionResponse>;
  /** {@link DescribeComponentStatistics 获取组件统计列表}({@link DescribeComponentStatisticsRequest 请求参数}): {@link DescribeComponentStatisticsResponse 返回参数} */
  DescribeComponentStatistics(data?: DescribeComponentStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComponentStatisticsResponse>;
  /** {@link DescribeESAggregations 获取ES字段聚合结果}({@link DescribeESAggregationsRequest 请求参数}): {@link DescribeESAggregationsResponse 返回参数} */
  DescribeESAggregations(data: DescribeESAggregationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeESAggregationsResponse>;
  /** {@link DescribeEmergencyResponseList 应急响应列表}({@link DescribeEmergencyResponseListRequest 请求参数}): {@link DescribeEmergencyResponseListResponse 返回参数} */
  DescribeEmergencyResponseList(data?: DescribeEmergencyResponseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmergencyResponseListResponse>;
  /** {@link DescribeEmergencyVulList 应急漏洞列表}({@link DescribeEmergencyVulListRequest 请求参数}): {@link DescribeEmergencyVulListResponse 返回参数} */
  DescribeEmergencyVulList(data?: DescribeEmergencyVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmergencyVulListResponse>;
  /** {@link DescribeExpertServiceList 安全管家列表}({@link DescribeExpertServiceListRequest 请求参数}): {@link DescribeExpertServiceListResponse 返回参数} */
  DescribeExpertServiceList(data?: DescribeExpertServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExpertServiceListResponse>;
  /** {@link DescribeExpertServiceOrderList 专家服务订单列表}({@link DescribeExpertServiceOrderListRequest 请求参数}): {@link DescribeExpertServiceOrderListResponse 返回参数} */
  DescribeExpertServiceOrderList(data?: DescribeExpertServiceOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExpertServiceOrderListResponse>;
  /** {@link DescribeExportMachines 导出区域主机列表}({@link DescribeExportMachinesRequest 请求参数}): {@link DescribeExportMachinesResponse 返回参数} */
  DescribeExportMachines(data: DescribeExportMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportMachinesResponse>;
  /** {@link DescribeGeneralStat 获取主机相关统计}({@link DescribeGeneralStatRequest 请求参数}): {@link DescribeGeneralStatResponse 返回参数} */
  DescribeGeneralStat(data?: DescribeGeneralStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralStatResponse>;
  /** {@link DescribeHistoryAccounts 获取帐号变更历史列表}({@link DescribeHistoryAccountsRequest 请求参数}): {@link DescribeHistoryAccountsResponse 返回参数} */
  DescribeHistoryAccounts(data: DescribeHistoryAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHistoryAccountsResponse>;
  /** {@link DescribeHistoryService 查询日志检索服务信息}({@link DescribeHistoryServiceRequest 请求参数}): {@link DescribeHistoryServiceResponse 返回参数} */
  DescribeHistoryService(data?: DescribeHistoryServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHistoryServiceResponse>;
  /** {@link DescribeHostLoginList 获取登录审计列表}({@link DescribeHostLoginListRequest 请求参数}): {@link DescribeHostLoginListResponse 返回参数} */
  DescribeHostLoginList(data?: DescribeHostLoginListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostLoginListResponse>;
  /** {@link DescribeIgnoreBaselineRule 查询忽略检测项信息}({@link DescribeIgnoreBaselineRuleRequest 请求参数}): {@link DescribeIgnoreBaselineRuleResponse 返回参数} */
  DescribeIgnoreBaselineRule(data: DescribeIgnoreBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIgnoreBaselineRuleResponse>;
  /** {@link DescribeIgnoreRuleEffectHostList 查询忽略检测项影响主机列表}({@link DescribeIgnoreRuleEffectHostListRequest 请求参数}): {@link DescribeIgnoreRuleEffectHostListResponse 返回参数} */
  DescribeIgnoreRuleEffectHostList(data: DescribeIgnoreRuleEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIgnoreRuleEffectHostListResponse>;
  /** {@link DescribeImportMachineInfo 查询批量导入机器信息}({@link DescribeImportMachineInfoRequest 请求参数}): {@link DescribeImportMachineInfoResponse 返回参数} */
  DescribeImportMachineInfo(data: DescribeImportMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImportMachineInfoResponse>;
  /** {@link DescribeIndexList 获取索引列表}({@link DescribeIndexListRequest 请求参数}): {@link DescribeIndexListResponse 返回参数} */
  DescribeIndexList(data?: DescribeIndexListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexListResponse>;
  /** {@link DescribeJavaMemShellList 查询java内存马事件列表}({@link DescribeJavaMemShellListRequest 请求参数}): {@link DescribeJavaMemShellListResponse 返回参数} */
  DescribeJavaMemShellList(data?: DescribeJavaMemShellListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJavaMemShellListResponse>;
  /** {@link DescribeLicenseBindList 查看授权绑定列表}({@link DescribeLicenseBindListRequest 请求参数}): {@link DescribeLicenseBindListResponse 返回参数} */
  DescribeLicenseBindList(data: DescribeLicenseBindListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseBindListResponse>;
  /** {@link DescribeLicenseBindSchedule 查询授权绑定进度}({@link DescribeLicenseBindScheduleRequest 请求参数}): {@link DescribeLicenseBindScheduleResponse 返回参数} */
  DescribeLicenseBindSchedule(data: DescribeLicenseBindScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseBindScheduleResponse>;
  /** {@link DescribeLicenseGeneral 授权概览信息}({@link DescribeLicenseGeneralRequest 请求参数}): {@link DescribeLicenseGeneralResponse 返回参数} */
  DescribeLicenseGeneral(data?: DescribeLicenseGeneralRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseGeneralResponse>;
  /** {@link DescribeLicenseList 获取授权订单列表}({@link DescribeLicenseListRequest 请求参数}): {@link DescribeLicenseListResponse 返回参数} */
  DescribeLicenseList(data?: DescribeLicenseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseListResponse>;
  /** {@link DescribeLogStorageStatistic 获取日志检索容量使用统计}({@link DescribeLogStorageStatisticRequest 请求参数}): {@link DescribeLogStorageStatisticResponse 返回参数} */
  DescribeLogStorageStatistic(data?: DescribeLogStorageStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogStorageStatisticResponse>;
  /** {@link DescribeLoginWhiteCombinedList 获取异地登录白名单合并后列表}({@link DescribeLoginWhiteCombinedListRequest 请求参数}): {@link DescribeLoginWhiteCombinedListResponse 返回参数} */
  DescribeLoginWhiteCombinedList(data?: DescribeLoginWhiteCombinedListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteCombinedListResponse>;
  /** {@link DescribeLoginWhiteList 获取异地登录白名单列表}({@link DescribeLoginWhiteListRequest 请求参数}): {@link DescribeLoginWhiteListResponse 返回参数} */
  DescribeLoginWhiteList(data?: DescribeLoginWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginWhiteListResponse>;
  /** {@link DescribeMachineInfo 获取机器详情}({@link DescribeMachineInfoRequest 请求参数}): {@link DescribeMachineInfoResponse 返回参数} */
  DescribeMachineInfo(data?: DescribeMachineInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineInfoResponse>;
  /** {@link DescribeMachineList 网页防篡改获取区域主机列表}({@link DescribeMachineListRequest 请求参数}): {@link DescribeMachineListResponse 返回参数} */
  DescribeMachineList(data: DescribeMachineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineListResponse>;
  /** {@link DescribeMachineOsList 查询机器操作系统列表}({@link DescribeMachineOsListRequest 请求参数}): {@link DescribeMachineOsListResponse 返回参数} */
  DescribeMachineOsList(data?: DescribeMachineOsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineOsListResponse>;
  /** {@link DescribeMachineRegions 获取机器地域列表}({@link DescribeMachineRegionsRequest 请求参数}): {@link DescribeMachineRegionsResponse 返回参数} */
  DescribeMachineRegions(data?: DescribeMachineRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineRegionsResponse>;
  /** {@link DescribeMachines 获取区域主机列表}({@link DescribeMachinesRequest 请求参数}): {@link DescribeMachinesResponse 返回参数} */
  DescribeMachines(data: DescribeMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachinesResponse>;
  /** {@link DescribeMalWareList 获取木马列表}({@link DescribeMalWareListRequest 请求参数}): {@link DescribeMalWareListResponse 返回参数} */
  DescribeMalWareList(data?: DescribeMalWareListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalWareListResponse>;
  /** {@link DescribeMaliciousRequestWhiteList 查询恶意请求白名单列表}({@link DescribeMaliciousRequestWhiteListRequest 请求参数}): {@link DescribeMaliciousRequestWhiteListResponse 返回参数} */
  DescribeMaliciousRequestWhiteList(data: DescribeMaliciousRequestWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaliciousRequestWhiteListResponse>;
  /** {@link DescribeMalwareFile 获取木马文件下载地址}({@link DescribeMalwareFileRequest 请求参数}): {@link DescribeMalwareFileResponse 返回参数} */
  DescribeMalwareFile(data: DescribeMalwareFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareFileResponse>;
  /** {@link DescribeMalwareInfo 查看恶意文件详情}({@link DescribeMalwareInfoRequest 请求参数}): {@link DescribeMalwareInfoResponse 返回参数} */
  DescribeMalwareInfo(data: DescribeMalwareInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareInfoResponse>;
  /** {@link DescribeMalwareRiskWarning 风险预警提示}({@link DescribeMalwareRiskWarningRequest 请求参数}): {@link DescribeMalwareRiskWarningResponse 返回参数} */
  DescribeMalwareRiskWarning(data?: DescribeMalwareRiskWarningRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareRiskWarningResponse>;
  /** {@link DescribeMalwareTimingScanSetting 查询定时扫描配置}({@link DescribeMalwareTimingScanSettingRequest 请求参数}): {@link DescribeMalwareTimingScanSettingResponse 返回参数} */
  DescribeMalwareTimingScanSetting(data?: DescribeMalwareTimingScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMalwareTimingScanSettingResponse>;
  /** {@link DescribeMonthInspectionReport 安全管家月巡检报告下载}({@link DescribeMonthInspectionReportRequest 请求参数}): {@link DescribeMonthInspectionReportResponse 返回参数} */
  DescribeMonthInspectionReport(data: DescribeMonthInspectionReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonthInspectionReportResponse>;
  /** {@link DescribeOpenPortStatistics 获取端口统计列表}({@link DescribeOpenPortStatisticsRequest 请求参数}): {@link DescribeOpenPortStatisticsResponse 返回参数} */
  DescribeOpenPortStatistics(data?: DescribeOpenPortStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpenPortStatisticsResponse>;
  /** {@link DescribeOverviewStatistics 获取概览统计数据}({@link DescribeOverviewStatisticsRequest 请求参数}): {@link DescribeOverviewStatisticsResponse 返回参数} */
  DescribeOverviewStatistics(data?: DescribeOverviewStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewStatisticsResponse>;
  /** {@link DescribePrivilegeEvents 获取本地提权事件列表}({@link DescribePrivilegeEventsRequest 请求参数}): {@link DescribePrivilegeEventsResponse 返回参数} */
  DescribePrivilegeEvents(data?: DescribePrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivilegeEventsResponse>;
  /** {@link DescribePrivilegeRules 获取本地提权规则列表}({@link DescribePrivilegeRulesRequest 请求参数}): {@link DescribePrivilegeRulesResponse 返回参数} */
  DescribePrivilegeRules(data?: DescribePrivilegeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivilegeRulesResponse>;
  /** {@link DescribeProVersionInfo 获取专业版概览信息}({@link DescribeProVersionInfoRequest 请求参数}): {@link DescribeProVersionInfoResponse 返回参数} */
  DescribeProVersionInfo(data?: DescribeProVersionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionInfoResponse>;
  /** {@link DescribeProVersionStatus 获取专业版状态}({@link DescribeProVersionStatusRequest 请求参数}): {@link DescribeProVersionStatusResponse 返回参数} */
  DescribeProVersionStatus(data: DescribeProVersionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionStatusResponse>;
  /** {@link DescribeProcessStatistics 获取进程统计列表}({@link DescribeProcessStatisticsRequest 请求参数}): {@link DescribeProcessStatisticsResponse 返回参数} */
  DescribeProcessStatistics(data?: DescribeProcessStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProcessStatisticsResponse>;
  /** {@link DescribeProtectDirList 防护目录列表}({@link DescribeProtectDirListRequest 请求参数}): {@link DescribeProtectDirListResponse 返回参数} */
  DescribeProtectDirList(data: DescribeProtectDirListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectDirListResponse>;
  /** {@link DescribeProtectDirRelatedServer 查询防护目录关联服务器}({@link DescribeProtectDirRelatedServerRequest 请求参数}): {@link DescribeProtectDirRelatedServerResponse 返回参数} */
  DescribeProtectDirRelatedServer(data: DescribeProtectDirRelatedServerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectDirRelatedServerResponse>;
  /** {@link DescribeProtectNetList 旗舰重保列表}({@link DescribeProtectNetListRequest 请求参数}): {@link DescribeProtectNetListResponse 返回参数} */
  DescribeProtectNetList(data?: DescribeProtectNetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectNetListResponse>;
  /** {@link DescribeReverseShellEvents 获取反弹Shell列表}({@link DescribeReverseShellEventsRequest 请求参数}): {@link DescribeReverseShellEventsResponse 返回参数} */
  DescribeReverseShellEvents(data?: DescribeReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsResponse>;
  /** {@link DescribeReverseShellRules 获取反弹Shell规则列表}({@link DescribeReverseShellRulesRequest 请求参数}): {@link DescribeReverseShellRulesResponse 返回参数} */
  DescribeReverseShellRules(data?: DescribeReverseShellRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellRulesResponse>;
  /** {@link DescribeRiskDnsList 获取恶意请求列表}({@link DescribeRiskDnsListRequest 请求参数}): {@link DescribeRiskDnsListResponse 返回参数} */
  DescribeRiskDnsList(data?: DescribeRiskDnsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsListResponse>;
  /** {@link DescribeSaveOrUpdateWarnings 更新用户告警设置}({@link DescribeSaveOrUpdateWarningsRequest 请求参数}): {@link DescribeSaveOrUpdateWarningsResponse 返回参数} */
  DescribeSaveOrUpdateWarnings(data?: DescribeSaveOrUpdateWarningsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSaveOrUpdateWarningsResponse>;
  /** {@link DescribeScanMalwareSchedule 查询木马扫描进度}({@link DescribeScanMalwareScheduleRequest 请求参数}): {@link DescribeScanMalwareScheduleResponse 返回参数} */
  DescribeScanMalwareSchedule(data?: DescribeScanMalwareScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanMalwareScheduleResponse>;
  /** {@link DescribeScanSchedule 查询检测进度}({@link DescribeScanScheduleRequest 请求参数}): {@link DescribeScanScheduleResponse 返回参数} */
  DescribeScanSchedule(data: DescribeScanScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanScheduleResponse>;
  /** {@link DescribeScanState 查询扫描状态}({@link DescribeScanStateRequest 请求参数}): {@link DescribeScanStateResponse 返回参数} */
  DescribeScanState(data: DescribeScanStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanStateResponse>;
  /** {@link DescribeScanTaskDetails 查询扫描任务详情}({@link DescribeScanTaskDetailsRequest 请求参数}): {@link DescribeScanTaskDetailsResponse 返回参数} */
  DescribeScanTaskDetails(data: DescribeScanTaskDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskDetailsResponse>;
  /** {@link DescribeScanTaskStatus 查询机器扫描状态列表}({@link DescribeScanTaskStatusRequest 请求参数}): {@link DescribeScanTaskStatusResponse 返回参数} */
  DescribeScanTaskStatus(data: DescribeScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskStatusResponse>;
  /** {@link DescribeScanVulSetting 定期检测配置查询}({@link DescribeScanVulSettingRequest 请求参数}): {@link DescribeScanVulSettingResponse 返回参数} */
  DescribeScanVulSetting(data?: DescribeScanVulSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanVulSettingResponse>;
  /** {@link DescribeSearchExportList 导出ES查询文档列表}({@link DescribeSearchExportListRequest 请求参数}): {@link DescribeSearchExportListResponse 返回参数} */
  DescribeSearchExportList(data: DescribeSearchExportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchExportListResponse>;
  /** {@link DescribeSearchLogs 获取历史搜索记录}({@link DescribeSearchLogsRequest 请求参数}): {@link DescribeSearchLogsResponse 返回参数} */
  DescribeSearchLogs(data?: DescribeSearchLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchLogsResponse>;
  /** {@link DescribeSearchTemplates 获取快速检索列表}({@link DescribeSearchTemplatesRequest 请求参数}): {@link DescribeSearchTemplatesResponse 返回参数} */
  DescribeSearchTemplates(data?: DescribeSearchTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchTemplatesResponse>;
  /** {@link DescribeSecurityDynamics 获取安全事件动态消息}({@link DescribeSecurityDynamicsRequest 请求参数}): {@link DescribeSecurityDynamicsResponse 返回参数} */
  DescribeSecurityDynamics(data?: DescribeSecurityDynamicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityDynamicsResponse>;
  /** {@link DescribeSecurityEventStat 获取安全事件统计}({@link DescribeSecurityEventStatRequest 请求参数}): {@link DescribeSecurityEventStatResponse 返回参数} */
  DescribeSecurityEventStat(data?: DescribeSecurityEventStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityEventStatResponse>;
  /** {@link DescribeSecurityEventsCnt 获取安全事件数统计数据}({@link DescribeSecurityEventsCntRequest 请求参数}): {@link DescribeSecurityEventsCntResponse 返回参数} */
  DescribeSecurityEventsCnt(data?: DescribeSecurityEventsCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityEventsCntResponse>;
  /** {@link DescribeSecurityTrends 获取安全事件统计数据}({@link DescribeSecurityTrendsRequest 请求参数}): {@link DescribeSecurityTrendsResponse 返回参数} */
  DescribeSecurityTrends(data: DescribeSecurityTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityTrendsResponse>;
  /** {@link DescribeServerRelatedDirInfo 查询服务器关联目录详情}({@link DescribeServerRelatedDirInfoRequest 请求参数}): {@link DescribeServerRelatedDirInfoResponse 返回参数} */
  DescribeServerRelatedDirInfo(data: DescribeServerRelatedDirInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerRelatedDirInfoResponse>;
  /** {@link DescribeServersAndRiskAndFirstInfo 获文件查杀概览信息}({@link DescribeServersAndRiskAndFirstInfoRequest 请求参数}): {@link DescribeServersAndRiskAndFirstInfoResponse 返回参数} */
  DescribeServersAndRiskAndFirstInfo(data?: DescribeServersAndRiskAndFirstInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServersAndRiskAndFirstInfoResponse>;
  /** {@link DescribeStrategyExist 根据策略名查询策略是否存在}({@link DescribeStrategyExistRequest 请求参数}): {@link DescribeStrategyExistResponse 返回参数} */
  DescribeStrategyExist(data: DescribeStrategyExistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategyExistResponse>;
  /** {@link DescribeTagMachines 获取指定标签关联的服务器信息}({@link DescribeTagMachinesRequest 请求参数}): {@link DescribeTagMachinesResponse 返回参数} */
  DescribeTagMachines(data: DescribeTagMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagMachinesResponse>;
  /** {@link DescribeTags 获取所有主机标签}({@link DescribeTagsRequest 请求参数}): {@link DescribeTagsResponse 返回参数} */
  DescribeTags(data?: DescribeTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagsResponse>;
  /** {@link DescribeUndoVulCounts 获取指定漏洞分类统计数}({@link DescribeUndoVulCountsRequest 请求参数}): {@link DescribeUndoVulCountsResponse 返回参数} */
  DescribeUndoVulCounts(data?: DescribeUndoVulCountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUndoVulCountsResponse>;
  /** {@link DescribeUsualLoginPlaces 查询常用登录地}({@link DescribeUsualLoginPlacesRequest 请求参数}): {@link DescribeUsualLoginPlacesResponse 返回参数} */
  DescribeUsualLoginPlaces(data: DescribeUsualLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsualLoginPlacesResponse>;
  /** {@link DescribeVersionStatistics 获取专业版和基础版机器数}({@link DescribeVersionStatisticsRequest 请求参数}): {@link DescribeVersionStatisticsResponse 返回参数} */
  DescribeVersionStatistics(data?: DescribeVersionStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVersionStatisticsResponse>;
  /** {@link DescribeVulCountByDates 获取近日指定类型的漏洞数量和主机数量}({@link DescribeVulCountByDatesRequest 请求参数}): {@link DescribeVulCountByDatesResponse 返回参数} */
  DescribeVulCountByDates(data?: DescribeVulCountByDatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulCountByDatesResponse>;
  /** {@link DescribeVulEffectHostList 漏洞影响主机列表}({@link DescribeVulEffectHostListRequest 请求参数}): {@link DescribeVulEffectHostListResponse 返回参数} */
  DescribeVulEffectHostList(data: DescribeVulEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulEffectHostListResponse>;
  /** {@link DescribeVulHostCountScanTime 获取待处理漏洞数+影响主机数}({@link DescribeVulHostCountScanTimeRequest 请求参数}): {@link DescribeVulHostCountScanTimeResponse 返回参数} */
  DescribeVulHostCountScanTime(data?: DescribeVulHostCountScanTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulHostCountScanTimeResponse>;
  /** {@link DescribeVulHostTop 获取服务器风险top列表}({@link DescribeVulHostTopRequest 请求参数}): {@link DescribeVulHostTopResponse 返回参数} */
  DescribeVulHostTop(data: DescribeVulHostTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulHostTopResponse>;
  /** {@link DescribeVulInfoCvss 漏洞详情}({@link DescribeVulInfoCvssRequest 请求参数}): {@link DescribeVulInfoCvssResponse 返回参数} */
  DescribeVulInfoCvss(data: DescribeVulInfoCvssRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulInfoCvssResponse>;
  /** {@link DescribeVulLevelCount 查询漏洞数量等级分布统计}({@link DescribeVulLevelCountRequest 请求参数}): {@link DescribeVulLevelCountResponse 返回参数} */
  DescribeVulLevelCount(data?: DescribeVulLevelCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLevelCountResponse>;
  /** {@link DescribeVulList 漏洞列表}({@link DescribeVulListRequest 请求参数}): {@link DescribeVulListResponse 返回参数} */
  DescribeVulList(data?: DescribeVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulListResponse>;
  /** {@link DescribeVulTop 获取漏洞top统计}({@link DescribeVulTopRequest 请求参数}): {@link DescribeVulTopResponse 返回参数} */
  DescribeVulTop(data: DescribeVulTopRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulTopResponse>;
  /** {@link DescribeWarningList 获取当前用户告警列表}({@link DescribeWarningListRequest 请求参数}): {@link DescribeWarningListResponse 返回参数} */
  DescribeWarningList(data?: DescribeWarningListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarningListResponse>;
  /** {@link DescribeWebPageEventList 查询篡改事件列表}({@link DescribeWebPageEventListRequest 请求参数}): {@link DescribeWebPageEventListResponse 返回参数} */
  DescribeWebPageEventList(data?: DescribeWebPageEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageEventListResponse>;
  /** {@link DescribeWebPageGeneralize 查询网页防篡改概览信息}({@link DescribeWebPageGeneralizeRequest 请求参数}): {@link DescribeWebPageGeneralizeResponse 返回参数} */
  DescribeWebPageGeneralize(data?: DescribeWebPageGeneralizeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageGeneralizeResponse>;
  /** {@link DescribeWebPageProtectStat 查询网页防篡改防护统计}({@link DescribeWebPageProtectStatRequest 请求参数}): {@link DescribeWebPageProtectStatResponse 返回参数} */
  DescribeWebPageProtectStat(data?: DescribeWebPageProtectStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageProtectStatResponse>;
  /** {@link DescribeWebPageServiceInfo 查询网站防篡改服务信息}({@link DescribeWebPageServiceInfoRequest 请求参数}): {@link DescribeWebPageServiceInfoResponse 返回参数} */
  DescribeWebPageServiceInfo(data?: DescribeWebPageServiceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebPageServiceInfoResponse>;
  /** {@link DestroyOrder 销毁订单}({@link DestroyOrderRequest 请求参数}): {@link DestroyOrderResponse 返回参数} */
  DestroyOrder(data: DestroyOrderRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyOrderResponse>;
  /** {@link EditBashRules 新增或修改高危命令规则（支持多服务器选择）}({@link EditBashRulesRequest 请求参数}): {@link EditBashRulesResponse 返回参数} */
  EditBashRules(data?: EditBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<EditBashRulesResponse>;
  /** {@link EditTags 新增或编辑标签}({@link EditTagsRequest 请求参数}): {@link EditTagsResponse 返回参数} */
  EditTags(data: EditTagsRequest, config?: AxiosRequestConfig): AxiosPromise<EditTagsResponse>;
  /** {@link ExportAssetCoreModuleList 导出资产管理内核模块列表}({@link ExportAssetCoreModuleListRequest 请求参数}): {@link ExportAssetCoreModuleListResponse 返回参数} */
  ExportAssetCoreModuleList(data?: ExportAssetCoreModuleListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetCoreModuleListResponse>;
  /** {@link ExportAssetWebServiceInfoList 导出资产管理Web服务列表}({@link ExportAssetWebServiceInfoListRequest 请求参数}): {@link ExportAssetWebServiceInfoListResponse 返回参数} */
  ExportAssetWebServiceInfoList(data?: ExportAssetWebServiceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetWebServiceInfoListResponse>;
  /** {@link ExportAttackLogs 导出网络攻击日志}({@link ExportAttackLogsRequest 请求参数}): {@link ExportAttackLogsResponse 返回参数} */
  ExportAttackLogs(data?: ExportAttackLogsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAttackLogsResponse>;
  /** {@link ExportBaselineEffectHostList 基线影响主机列表导出}({@link ExportBaselineEffectHostListRequest 请求参数}): {@link ExportBaselineEffectHostListResponse 返回参数} */
  ExportBaselineEffectHostList(data: ExportBaselineEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineEffectHostListResponse>;
  /** {@link ExportBaselineList 导出基线列表}({@link ExportBaselineListRequest 请求参数}): {@link ExportBaselineListResponse 返回参数} */
  ExportBaselineList(data?: ExportBaselineListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBaselineListResponse>;
  /** {@link ExportBashEvents 导出高危命令事件}({@link ExportBashEventsRequest 请求参数}): {@link ExportBashEventsResponse 返回参数} */
  ExportBashEvents(data?: ExportBashEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBashEventsResponse>;
  /** {@link ExportBruteAttacks 导出密码破解记录}({@link ExportBruteAttacksRequest 请求参数}): {@link ExportBruteAttacksResponse 返回参数} */
  ExportBruteAttacks(data?: ExportBruteAttacksRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBruteAttacksResponse>;
  /** {@link ExportIgnoreBaselineRule 已忽略基线检测项导出}({@link ExportIgnoreBaselineRuleRequest 请求参数}): {@link ExportIgnoreBaselineRuleResponse 返回参数} */
  ExportIgnoreBaselineRule(data?: ExportIgnoreBaselineRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ExportIgnoreBaselineRuleResponse>;
  /** {@link ExportIgnoreRuleEffectHostList 忽略检测项影响主机列表导出}({@link ExportIgnoreRuleEffectHostListRequest 请求参数}): {@link ExportIgnoreRuleEffectHostListResponse 返回参数} */
  ExportIgnoreRuleEffectHostList(data: ExportIgnoreRuleEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportIgnoreRuleEffectHostListResponse>;
  /** {@link ExportLicenseDetail 导出授权详情}({@link ExportLicenseDetailRequest 请求参数}): {@link ExportLicenseDetailResponse 返回参数} */
  ExportLicenseDetail(data?: ExportLicenseDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ExportLicenseDetailResponse>;
  /** {@link ExportMaliciousRequests 导出下载恶意请求文件}({@link ExportMaliciousRequestsRequest 请求参数}): {@link ExportMaliciousRequestsResponse 返回参数} */
  ExportMaliciousRequests(data?: ExportMaliciousRequestsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportMaliciousRequestsResponse>;
  /** {@link ExportMalwares 导出木马记录}({@link ExportMalwaresRequest 请求参数}): {@link ExportMalwaresResponse 返回参数} */
  ExportMalwares(data?: ExportMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<ExportMalwaresResponse>;
  /** {@link ExportNonlocalLoginPlaces 导出异地登录记录}({@link ExportNonlocalLoginPlacesRequest 请求参数}): {@link ExportNonlocalLoginPlacesResponse 返回参数} */
  ExportNonlocalLoginPlaces(data?: ExportNonlocalLoginPlacesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportNonlocalLoginPlacesResponse>;
  /** {@link ExportPrivilegeEvents 导出本地提权事件}({@link ExportPrivilegeEventsRequest 请求参数}): {@link ExportPrivilegeEventsResponse 返回参数} */
  ExportPrivilegeEvents(data?: ExportPrivilegeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportPrivilegeEventsResponse>;
  /** {@link ExportProtectDirList 导出防护目录列表}({@link ExportProtectDirListRequest 请求参数}): {@link ExportProtectDirListResponse 返回参数} */
  ExportProtectDirList(data?: ExportProtectDirListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportProtectDirListResponse>;
  /** {@link ExportReverseShellEvents 导出反弹Shell事件}({@link ExportReverseShellEventsRequest 请求参数}): {@link ExportReverseShellEventsResponse 返回参数} */
  ExportReverseShellEvents(data?: ExportReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportReverseShellEventsResponse>;
  /** {@link ExportScanTaskDetails 导出扫描任务详情}({@link ExportScanTaskDetailsRequest 请求参数}): {@link ExportScanTaskDetailsResponse 返回参数} */
  ExportScanTaskDetails(data: ExportScanTaskDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportScanTaskDetailsResponse>;
  /** {@link ExportSecurityTrends 导出风险趋势}({@link ExportSecurityTrendsRequest 请求参数}): {@link ExportSecurityTrendsResponse 返回参数} */
  ExportSecurityTrends(data: ExportSecurityTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportSecurityTrendsResponse>;
  /** {@link ExportTasks 异步导出任务}({@link ExportTasksRequest 请求参数}): {@link ExportTasksResponse 返回参数} */
  ExportTasks(data: ExportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ExportTasksResponse>;
  /** {@link ExportVulDetectionExcel 导出本次漏洞检测Excel}({@link ExportVulDetectionExcelRequest 请求参数}): {@link ExportVulDetectionExcelResponse 返回参数} */
  ExportVulDetectionExcel(data: ExportVulDetectionExcelRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulDetectionExcelResponse>;
  /** {@link ExportVulDetectionReport 导出漏洞检测报告}({@link ExportVulDetectionReportRequest 请求参数}): {@link ExportVulDetectionReportResponse 返回参数} */
  ExportVulDetectionReport(data: ExportVulDetectionReportRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulDetectionReportResponse>;
  /** {@link ExportVulEffectHostList 导出漏洞影响主机列表}({@link ExportVulEffectHostListRequest 请求参数}): {@link ExportVulEffectHostListResponse 返回参数} */
  ExportVulEffectHostList(data: ExportVulEffectHostListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulEffectHostListResponse>;
  /** {@link ExportVulList 漏洞管理-导出漏洞列表}({@link ExportVulListRequest 请求参数}): {@link ExportVulListResponse 返回参数} */
  ExportVulList(data?: ExportVulListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVulListResponse>;
  /** {@link ExportWebPageEventList 导出篡改事件列表}({@link ExportWebPageEventListRequest 请求参数}): {@link ExportWebPageEventListResponse 返回参数} */
  ExportWebPageEventList(data?: ExportWebPageEventListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportWebPageEventListResponse>;
  /** {@link IgnoreImpactedHosts 忽略漏洞}({@link IgnoreImpactedHostsRequest 请求参数}): {@link IgnoreImpactedHostsResponse 返回参数} */
  IgnoreImpactedHosts(data: IgnoreImpactedHostsRequest, config?: AxiosRequestConfig): AxiosPromise<IgnoreImpactedHostsResponse>;
  /** {@link ModifyAutoOpenProVersionConfig 设置自动开通配置}({@link ModifyAutoOpenProVersionConfigRequest 请求参数}): {@link ModifyAutoOpenProVersionConfigResponse 返回参数} */
  ModifyAutoOpenProVersionConfig(data: ModifyAutoOpenProVersionConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoOpenProVersionConfigResponse>;
  /** {@link ModifyBanMode 修改爆破阻断模式}({@link ModifyBanModeRequest 请求参数}): {@link ModifyBanModeResponse 返回参数} */
  ModifyBanMode(data: ModifyBanModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBanModeResponse>;
  /** {@link ModifyBanStatus 设置阻断开关状态}({@link ModifyBanStatusRequest 请求参数}): {@link ModifyBanStatusResponse 返回参数} */
  ModifyBanStatus(data: ModifyBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBanStatusResponse>;
  /** {@link ModifyBaselinePolicy 更改基线策略设置}({@link ModifyBaselinePolicyRequest 请求参数}): {@link ModifyBaselinePolicyResponse 返回参数} */
  ModifyBaselinePolicy(data: ModifyBaselinePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselinePolicyResponse>;
  /** {@link ModifyBruteAttackRules 修改暴力破解规则}({@link ModifyBruteAttackRulesRequest 请求参数}): {@link ModifyBruteAttackRulesResponse 返回参数} */
  ModifyBruteAttackRules(data: ModifyBruteAttackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBruteAttackRulesResponse>;
  /** {@link ModifyLicenseBinds 授权批量绑定}({@link ModifyLicenseBindsRequest 请求参数}): {@link ModifyLicenseBindsResponse 返回参数} */
  ModifyLicenseBinds(data: ModifyLicenseBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLicenseBindsResponse>;
  /** {@link ModifyLicenseUnBinds 授权批量解绑}({@link ModifyLicenseUnBindsRequest 请求参数}): {@link ModifyLicenseUnBindsResponse 返回参数} */
  ModifyLicenseUnBinds(data: ModifyLicenseUnBindsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLicenseUnBindsResponse>;
  /** {@link ModifyMalwareTimingScanSettings 定时扫描设置}({@link ModifyMalwareTimingScanSettingsRequest 请求参数}): {@link ModifyMalwareTimingScanSettingsResponse 返回参数} */
  ModifyMalwareTimingScanSettings(data: ModifyMalwareTimingScanSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMalwareTimingScanSettingsResponse>;
  /** {@link ModifyOrderAttribute 编辑订单属性}({@link ModifyOrderAttributeRequest 请求参数}): {@link ModifyOrderAttributeResponse 返回参数} */
  ModifyOrderAttribute(data: ModifyOrderAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOrderAttributeResponse>;
  /** {@link ModifyWarningSetting 修改告警设置}({@link ModifyWarningSettingRequest 请求参数}): {@link ModifyWarningSettingResponse 返回参数} */
  ModifyWarningSetting(data: ModifyWarningSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWarningSettingResponse>;
  /** {@link ModifyWebPageProtectDir 创建网站防护目录}({@link ModifyWebPageProtectDirRequest 请求参数}): {@link ModifyWebPageProtectDirResponse 返回参数} */
  ModifyWebPageProtectDir(data: ModifyWebPageProtectDirRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebPageProtectDirResponse>;
  /** {@link ModifyWebPageProtectSetting 修改网站防护设置}({@link ModifyWebPageProtectSettingRequest 请求参数}): {@link ModifyWebPageProtectSettingResponse 返回参数} */
  ModifyWebPageProtectSetting(data: ModifyWebPageProtectSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebPageProtectSettingResponse>;
  /** {@link ModifyWebPageProtectSwitch 网站防护设置开关}({@link ModifyWebPageProtectSwitchRequest 请求参数}): {@link ModifyWebPageProtectSwitchResponse 返回参数} */
  ModifyWebPageProtectSwitch(data: ModifyWebPageProtectSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebPageProtectSwitchResponse>;
  /** {@link RecoverMalwares 恢复木马文件}({@link RecoverMalwaresRequest 请求参数}): {@link RecoverMalwaresResponse 返回参数} */
  RecoverMalwares(data: RecoverMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverMalwaresResponse>;
  /** {@link ScanAsset 资产指纹启动扫描}({@link ScanAssetRequest 请求参数}): {@link ScanAssetResponse 返回参数} */
  ScanAsset(data?: ScanAssetRequest, config?: AxiosRequestConfig): AxiosPromise<ScanAssetResponse>;
  /** {@link ScanVul 一键检测}({@link ScanVulRequest 请求参数}): {@link ScanVulResponse 返回参数} */
  ScanVul(data: ScanVulRequest, config?: AxiosRequestConfig): AxiosPromise<ScanVulResponse>;
  /** {@link ScanVulAgain 漏洞管理-重新检测接口}({@link ScanVulAgainRequest 请求参数}): {@link ScanVulAgainResponse 返回参数} */
  ScanVulAgain(data: ScanVulAgainRequest, config?: AxiosRequestConfig): AxiosPromise<ScanVulAgainResponse>;
  /** {@link ScanVulSetting 定期扫描漏洞设置}({@link ScanVulSettingRequest 请求参数}): {@link ScanVulSettingResponse 返回参数} */
  ScanVulSetting(data: ScanVulSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ScanVulSettingResponse>;
  /** {@link SeparateMalwares 隔离木马}({@link SeparateMalwaresRequest 请求参数}): {@link SeparateMalwaresResponse 返回参数} */
  SeparateMalwares(data: SeparateMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<SeparateMalwaresResponse>;
  /** {@link SetBashEventsStatus 设置高危命令事件状态}({@link SetBashEventsStatusRequest 请求参数}): {@link SetBashEventsStatusResponse 返回参数} */
  SetBashEventsStatus(data: SetBashEventsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<SetBashEventsStatusResponse>;
  /** {@link StartBaselineDetect 检测基线}({@link StartBaselineDetectRequest 请求参数}): {@link StartBaselineDetectResponse 返回参数} */
  StartBaselineDetect(data: StartBaselineDetectRequest, config?: AxiosRequestConfig): AxiosPromise<StartBaselineDetectResponse>;
  /** {@link StopBaselineDetect 停止基线检测}({@link StopBaselineDetectRequest 请求参数}): {@link StopBaselineDetectResponse 返回参数} */
  StopBaselineDetect(data: StopBaselineDetectRequest, config?: AxiosRequestConfig): AxiosPromise<StopBaselineDetectResponse>;
  /** {@link StopNoticeBanTips 不再提醒爆破阻断提示弹窗}({@link StopNoticeBanTipsRequest 请求参数}): {@link StopNoticeBanTipsResponse 返回参数} */
  StopNoticeBanTips(data?: StopNoticeBanTipsRequest, config?: AxiosRequestConfig): AxiosPromise<StopNoticeBanTipsResponse>;
  /** {@link SwitchBashRules 切换高危命令规则状态}({@link SwitchBashRulesRequest 请求参数}): {@link SwitchBashRulesResponse 返回参数} */
  SwitchBashRules(data: SwitchBashRulesRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchBashRulesResponse>;
  /** {@link SyncAssetScan 同步资产扫描信息}({@link SyncAssetScanRequest 请求参数}): {@link SyncAssetScanResponse 返回参数} */
  SyncAssetScan(data: SyncAssetScanRequest, config?: AxiosRequestConfig): AxiosPromise<SyncAssetScanResponse>;
  /** {@link SyncBaselineDetectSummary 同步基线检测进度概要}({@link SyncBaselineDetectSummaryRequest 请求参数}): {@link SyncBaselineDetectSummaryResponse 返回参数} */
  SyncBaselineDetectSummary(data?: SyncBaselineDetectSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<SyncBaselineDetectSummaryResponse>;
  /** {@link TrustMalwares 信任木马文件}({@link TrustMalwaresRequest 请求参数}): {@link TrustMalwaresResponse 返回参数} */
  TrustMalwares(data: TrustMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<TrustMalwaresResponse>;
  /** {@link UntrustMalwares 取消信任木马}({@link UntrustMalwaresRequest 请求参数}): {@link UntrustMalwaresResponse 返回参数} */
  UntrustMalwares(data: UntrustMalwaresRequest, config?: AxiosRequestConfig): AxiosPromise<UntrustMalwaresResponse>;
  /** {@link UpdateBaselineStrategy 更新基线策略信息}({@link UpdateBaselineStrategyRequest 请求参数}): {@link UpdateBaselineStrategyResponse 返回参数} */
  UpdateBaselineStrategy(data: UpdateBaselineStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateBaselineStrategyResponse>;
  /** {@link UpdateMachineTags 关联机器标签列表}({@link UpdateMachineTagsRequest 请求参数}): {@link UpdateMachineTagsResponse 返回参数} */
  UpdateMachineTags(data: UpdateMachineTagsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateMachineTagsResponse>;
}

export declare type Versions = ["2018-02-28"];

export default Cwp;
