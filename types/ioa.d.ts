/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 按版本聚合后的软件列表 */
declare interface AggrCategorySoftDetailRow {
  /** ID */
  ID?: number | null;
  /** 软件名称 */
  Name?: string | null;
  /** 盗版风险 */
  PiracyRisk?: number | null;
  /** 系统平台 */
  OsType?: number | null;
  /** 企业名 */
  CorpName?: string | null;
  /** 安装设备数量(只支持32位) */
  InstalledDeviceNum?: number | null;
  /** 盗版安装设备数 */
  PiracyInstalledDeviceNum?: number | null;
  /** 已安装用户数 */
  InstalledUserNum?: number | null;
  /** 盗版软件用户数 */
  PiracyInstalledUserNum?: number | null;
  /** 授权总数 */
  AuthNum?: number | null;
  /** 正版率 */
  GenuineRate?: number | null;
  /** 有新版本可升级的设备数量 */
  UpgradableDeviceNum?: number;
}

/** 自动划分规则数据 */
declare interface ComplexRule {
  /** 简单规则表达式 */
  SimpleRules?: SimpleRule[];
  /** 表达式间逻辑关系 */
  Relation?: string;
}

/** 这是一个多接口的公共数据结构，用于接口根据条件进行过滤和分页。具体支持哪些过滤条件，参考具体使用该结构的接口字段描述 */
declare interface Condition {
  /** Filters 条件过滤 */
  Filters?: Filter[];
  /** FilterGroups 条件过滤组 */
  FilterGroups?: FilterGroup[];
  /** Sort 排序字段 */
  Sort?: Sort;
  /** PageSize 每页获取数(只支持32位) */
  PageSize?: number;
  /** PageNum 获取第几页(只支持32位) */
  PageNum?: number;
}

/** 提交送检任务相应数据 */
declare interface CreateDLPFileDetectionTaskData {
  /** 提交任务生成的id，也即requestID。用于后续查询 */
  DLPFileDetectionTaskID?: string;
}

/** 响应返回的data */
declare interface CreateDeviceVirtualGroupRspData {
  /** 返回的自定义分组id */
  Id?: number;
}

/** 业务响应数据 */
declare interface CreatePrivilegeCodeRspData {
  /** 特权码数据 */
  Code?: string | null;
}

/** 账号分组信息 */
declare interface DescribeAccountGroupsData {
  /** 账号分组名全路径，点分格式 */
  NamePath?: string;
  /** 账号分组ID全路径，数组格式 */
  IdPathArr?: number[];
  /** 扩展信息 */
  ExtraInfo?: string;
  /** 最后更新时间 */
  Utime?: string;
  /** 父分组ID */
  ParentId?: number;
  /** 源账号组织ID。使用第三方导入用户源时，记录该分组在源组织架构下的分组ID */
  OrgId?: string;
  /** 分组名称 */
  Name?: string;
  /** 分组ID */
  Id?: number;
  /** 分组描述 */
  Description?: string;
  /** 同步数据源 */
  Source?: number;
  /** 账号分组ID全路径，点分格式 */
  IdPath?: string;
  /** 创建时间 */
  Itime?: string;
  /** 父源账号组织ID。使用第三方导入用户源时，记录该分组在源组织架构下的分组ID */
  ParentOrgId?: string;
  /** 导入类型 */
  ImportType?: string;
  /** miniIAM id */
  MiniIamId?: string;
  /** 该分组下含子组的所有用户总数 */
  UserTotal?: number;
  /** 是否叶子节点 */
  IsLeaf?: boolean;
  /** 是否该账户的直接权限 */
  ReadOnly?: boolean;
  /** 最新一次同步任务的结果 */
  LatestSyncResult?: string;
  /** 最新一次同步任务的结束时间 */
  LatestSyncTime?: string;
}

/** 账户分组详情响应数据 */
declare interface DescribeAccountGroupsPageResp {
  /** 账户分响应对象集合 */
  Items?: DescribeAccountGroupsData[];
  /** 分页公共对象 */
  Page?: Paging;
}

/** 业务响应数据 */
declare interface DescribeAggrSoftCategorySoftListData {
  /** 分页公共对象 */
  Page?: Paging | null;
  /** 总数(只支持32位) */
  Total?: number | null;
  /** 行数据 */
  AggrSoftCategorySoftList?: AggrCategorySoftDetailRow[] | null;
}

/** 查询文件检测结果响应数据 */
declare interface DescribeDLPFileDetectResultData {
  /** 提交任务时的文件md5 */
  FileMd5?: string;
  /** 提交任务时的文件名 */
  FileName?: string;
  /** 状态：等待检测->正在检测->检测失败/检测成功。或任务不存在 */
  Status?: string;
  /** 文件检测结果，json字符串。 */
  DetectResult?: string;
}

/** 查询设备组子分组详情响应结构 */
declare interface DescribeDeviceChildGroupsRspData {
  /** 返回的数组列表 */
  Items?: DeviceGroupDetail[];
}

/** 终端硬件信息列表Item数据 */
declare interface DescribeDeviceHardwareInfoItem {
  /** 设备ID */
  Id?: number;
  /** 设备唯一标识符 */
  Mid?: string;
  /** OS平台 0 Windows 1 Linux 2 macOS 4 Android 5 iOS */
  OsType?: number;
  /** 终端名 */
  Name?: string;
  /** 终端用户名 */
  UserName?: string;
  /** 授权状态（ 4未授权 5已授权） */
  Status?: number;
  /** 设备所属分组ID */
  GroupId?: number;
  /** 设备所属分组名 */
  GroupName?: string;
  /** 设备所属分组路径 */
  GroupNamePath?: string;
  /** 最近登录账户的姓名 */
  AccountName?: string;
  /** 出口IP */
  Ip?: string;
  /** MAC地址 */
  MacAddr?: string;
  /** CPU品牌型号 */
  Cpu?: string;
  /** 内存信息 */
  Memory?: string;
  /** 硬盘信息 */
  HardDiskSize?: string;
  /** 显示器品牌型号 */
  Monitor?: string;
  /** 终端备注名 */
  RemarkName?: string;
}

/** 终端硬件信息列表响应详情 */
declare interface DescribeDeviceHardwareInfoListRspData {
  /** 分页数据 */
  Page?: Paging;
  /** 终端硬件信息数据数组 */
  Items?: DescribeDeviceHardwareInfoItem[];
}

/** 业务响应数据 */
declare interface DescribeDeviceInfoRspData {
  /** 分页的具体数据对象 */
  ProcessList?: DeviceProcessInfo[] | null;
  /** 分页的具体数据对象 */
  NetworkList?: DeviceNetworkInfo[] | null;
  /** 分页的具体数据对象 */
  ServiceList?: DeviceServiceInfo[] | null;
}

/** 查询返回终端自定义分组的Data数据 */
declare interface DescribeDeviceVirtualGroupsPageRsp {
  /** 分页公共对象 */
  Page?: Paging;
  /** 终端自定义分组列表数据 */
  Items?: DeviceVirtualDeviceGroupsDetail[];
}

/** 分页的data数据 */
declare interface DescribeDevicesPageRsp {
  /** 数据分页信息 */
  Paging?: Paging;
  /** 业务响应数据 */
  Items?: DeviceDetail[];
}

/** 所属组 */
declare interface DescribeLocalAccountAccountGroupsData {
  /** 组Id(只支持32位) */
  AccountGroupId?: number;
}

/** 获取账号列表响应的单个对象 */
declare interface DescribeLocalAccountsData {
  /** uid，数据库中唯一 */
  Id?: number;
  /** 账号，登录账号 */
  UserId?: string;
  /** 用户名 */
  UserName?: string;
  /** 账号id，同Id字段 */
  AccountId?: number;
  /** 账号所在的分组id */
  GroupId?: number;
  /** 账号所在的分组名称 */
  GroupName?: string;
  /** 账号所在的分组名称路径，用英文.分割 */
  NamePath?: string;
  /** 账号来源,0表示本地账号(只支持32位) */
  Source?: number;
  /** 账号状态,0禁用，1启用(只支持32位) */
  Status?: number;
  /** 账号的创建时间 */
  Itime?: string;
  /** 账号的最后更新时间 */
  Utime?: string;
  /** 账号的扩展信息，包含邮箱、手机号、身份证、职位等信息 */
  ExtraInfo?: string;
  /** 用户风险等级，枚举：none, low, middle, high */
  RiskLevel?: string;
  /** 所属组 */
  AccountGroups?: DescribeLocalAccountAccountGroupsData[];
  /** 绑定手机端设备数 */
  MobileBindNum?: number;
  /** 绑定Pc端设备数 */
  PcBindNum?: number;
  /** 账号在线状态 1：在线 2：离线 */
  OnlineStatus?: number;
  /** 账号活跃状态 1：活跃 2：非活跃 */
  ActiveStatus?: number;
  /** 账号登录时间 */
  LoginTime?: string;
  /** 账号登出时间 */
  LogoutTime?: string;
}

/** 获取账号列表响应的分页对象 */
declare interface DescribeLocalAccountsPage {
  /** 公共分页对象 */
  Page?: Paging;
  /** 获取账号列表响应的单个对象 */
  Items?: DescribeLocalAccountsData[];
}

/** 软件统计响应对象集合 */
declare interface DescribeSoftCensusListByDeviceData {
  /** 终端用户名 */
  UserName?: string | null;
  /** mac地址 */
  MacAddr?: string | null;
  /** 终端计算机名称 */
  Name?: string | null;
  /** 终端组路径名 */
  GroupNamePath?: string | null;
  /** IP地址 */
  Ip?: string | null;
  /** 唯一标识Mid */
  Mid?: string | null;
  /** 企业账户名 */
  IoaUserName?: string | null;
  /** 终端分组Id(只支持32位) */
  GroupId?: number | null;
  /** 终端组名 */
  GroupName?: string | null;
  /** 终端列表Id(只支持32位) */
  Id?: number | null;
  /** 软件数量(只支持32位) */
  SoftNum?: number | null;
  /** 盗版风险（1=风险;2=未知） */
  PiracyRisk?: number | null;
  /** 终端备注名 */
  RemarkName?: string;
}

/** 业务响应数据 */
declare interface DescribeSoftCensusListByDevicePageData {
  /** 软件统计响应对象集合 */
  Items?: DescribeSoftCensusListByDeviceData[] | null;
  /** 分页公共对象 */
  Page?: Paging | null;
}

/** 业务响应数据 */
declare interface DescribeSoftwareInformationPageData {
  /** 软件详情响应对象集合 */
  Items?: SoftwareInformationData[];
  /** 分页公共对象 */
  Page?: Paging;
}

/** 返回的具体Data数据 */
declare interface DescribeVirtualDevicesPageRsp {
  /** 数据分页信息 */
  Paging?: Paging;
  /** 设备列表 */
  Items?: DeviceDetail[];
}

/** 业务响应数据 */
declare interface DeviceDetail {
  /** 设备ID */
  Id?: number;
  /** 设备唯一标识码，在ioa中每个设备有唯一标识码 */
  Mid?: string;
  /** 终端名（设备名） */
  Name?: string;
  /** 设备所在分组ID */
  GroupId?: number;
  /** OS平台，0：Windows 、1： Linux、 2：macOS 、4： Android、 5: iOS。默认是0 */
  OsType?: number;
  /** 设备IP地址（出口IP） */
  Ip?: string;
  /** 在线状态，2：在线、0或者1:离线 */
  OnlineStatus?: number;
  /** 客户端版本号-大整数 */
  Version?: string;
  /** 客户端版本号-点分字符串 */
  StrVersion?: string;
  /** 首次在线时间 */
  Itime?: string;
  /** 最后一次在线时间 */
  ConnActiveTime?: string;
  /** 设备是否加锁 ，1：锁定 0或者2：未锁定。 */
  Locked?: number;
  /** 设备本地IP列表, 包括IP */
  LocalIpList?: string;
  /** 宿主机id（需要宿主机也安装iOA才能显示） */
  HostId?: number;
  /** 设备所属分组名 */
  GroupName?: string;
  /** 设备所属分组路径 */
  GroupNamePath?: string;
  /** 未修复高危漏洞数(只支持32位) */
  CriticalVulListCount?: number;
  /** 操作系统名称 */
  Os?: string;
  /** 操作系统位数 */
  OsBits?: number;
  /** 操作系统版本 */
  OsVersion?: string;
  /** 操作系统语言 */
  OsLanguage?: string;
  /** 操作系统安装时间 */
  OsInstallDate?: string;
  /** 设备名，和Name相同 */
  ComputerName?: string;
  /** 登录域名 */
  DomainName?: string;
  /** MAC地址 */
  MacAddr?: string;
  /** 漏洞数 */
  VulCount?: number;
  /** 病毒风险数 */
  RiskCount?: number;
  /** 病毒库版本 */
  VirusVer?: string;
  /** 漏洞库版本 */
  VulVersion?: string;
  /** 系统修复引擎版本 */
  SysRepVersion?: string;
  /** 高危补丁列表 */
  VulCriticalList?: string[];
  /** 标签 */
  Tags?: string;
  /** 终端用户名 */
  UserName?: string;
  /** 防火墙状态，不等于0表示开启 */
  FirewallStatus?: number;
  /** SN序列号 */
  SerialNum?: string;
  /** 设备管控策略版本 */
  DeviceStrategyVer?: string;
  /** NGN策略版本 */
  NGNStrategyVer?: string;
  /** 最近登录账户的账号(账号系统用户账号) */
  IOAUserName?: string;
  /** 设备管控新策略 */
  DeviceNewStrategyVer?: string;
  /** NGN策略新版本 */
  NGNNewStrategyVer?: string;
  /** 宿主机名称（需要宿主机也安装iOA才能显示） */
  HostName?: string;
  /** 主板序列号 */
  BaseBoardSn?: string;
  /** 绑定账户名称 */
  AccountUsers?: string;
  /** 身份策略版本 */
  IdentityStrategyVer?: string;
  /** 身份策略新版本 */
  IdentityNewStrategyVer?: string;
  /** 最近登录账号部门 */
  AccountGroupName?: string;
  /** 最近登录账户的姓名(账号系统用户姓名) */
  AccountName?: string;
  /** 账号组id */
  AccountGroupId?: number;
  /** 终端备注名 */
  RemarkName?: string;
}

/** 返回的数组列表 */
declare interface DeviceGroupDetail {
  /** 设备组id */
  Id?: number;
  /** 设备组名称 */
  Name?: string;
  /** 设备组描述 */
  Description?: string;
  /** 父节点id */
  ParentId?: number;
  /** 基于id的节点路径 */
  IdPath?: string;
  /** 基于名称的节点路径 */
  NamePath?: string;
  /** 分组锁定状态 */
  Locked?: number;
  /** 系统类型（0: win，1：linux，2: mac，4：android，5：ios ） */
  OsType?: number;
  /** 排序 */
  Sort?: number;
  /** 是否自动调整 */
  FromAuto?: number;
  /** 子节点数量 */
  Count?: number;
  /** 图标 */
  Icon?: string;
  /** 是否有ip */
  WithIp?: number;
  /** 是否有组ip */
  HasIp?: boolean;
  /** 是否是叶子节点 */
  IsLeaf?: boolean;
  /** 是否只读 */
  ReadOnly?: boolean;
  /** 对应绑定的账号id */
  BindAccount?: number;
  /** 绑定账号的用户名 */
  BindAccountName?: string;
}

/** 分页的具体数据对象 */
declare interface DeviceNetworkInfo {
  /** 本地地址 */
  LocalAddr?: string | null;
  /** 本地端口 */
  LocalPort?: number | null;
  /** 进程id */
  ProcessId?: number | null;
  /** 进程名称 */
  ProcessName?: string | null;
  /** 协议 */
  Protocol?: string | null;
  /** 远程地址 */
  RemoteAddr?: string | null;
  /** 远程端口 */
  RemotePort?: number | null;
  /** 状态 */
  State?: number | null;
}

/** 分页的具体数据对象 */
declare interface DeviceProcessInfo {
  /** 命令行 */
  CmdLine?: string | null;
  /** 内存 */
  Memory?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 路径 */
  Path?: string | null;
  /** 进程id */
  ProcessId?: number | null;
  /** 启动用户 */
  User?: string | null;
}

/** 分页的具体数据对象 */
declare interface DeviceServiceInfo {
  /** 命令行 */
  CmdLine?: string | null;
  /** 内存 */
  Description?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 进程id */
  ProcessId?: number | null;
  /** 启动类型 */
  StartType?: number | null;
  /** 状态 */
  State?: number | null;
  /** 启动用户 */
  User?: string | null;
}

/** 终端自定义分组列表数据 */
declare interface DeviceVirtualDeviceGroupsDetail {
  /** 终端自定义分组id */
  Id?: number;
  /** 自定义分组名称 */
  DeviceVirtualGroupName?: string;
  /** 设备数 */
  DeviceCount?: number;
  /** 系统类型（0: win，1：linux，2: mac，4：android，5：ios ） */
  OsType?: number;
  /** 创建时间 */
  Itime?: string;
  /** 更新时间 */
  Utime?: string;
}

/** Filters 条件过滤 */
declare interface Filter {
  /** 过滤字段 */
  Field?: string;
  /** 过滤方式： eq:等于,net:不等于,like,nlike,gt:大于,lt:小于,egt:大于等于,elt:小于等于。具体支持哪些过滤方式，结合具体接口字段描述来定 */
  Operator?: string;
  /** 过滤条件 */
  Values?: string[];
}

/** FilterGroups 条件过滤组 */
declare interface FilterGroup {
  /** Filters 条件过滤 */
  Filters?: Filter[];
}

/** 账号分组详情响应数据 */
declare interface GetAccountGroupData {
  /** 分组名称全路径，点分格式 */
  NamePath?: string;
  /** 分组ID全路径，数组格式 */
  IdPathArr?: number[];
  /** 分组扩展信息 */
  ExtraInfo?: string;
  /** 最后更新时间 */
  Utime?: string;
  /** 当前分组的父分组ID */
  ParentId?: number;
  /** 源账号组ID，该字段仅适用于第三方同步的组织架构，通过OrgId-Id构成源组织架构分组ID-现组织架构分组ID映射关系 */
  OrgId?: string;
  /** 分组名称 */
  Name?: string;
  /** 分组ID */
  Id?: number;
  /** 分组描述 */
  Description?: string;
  /** 分组导入源(只支持32位) */
  Source?: number;
  /** 分组ID全路径，点分格式 */
  IdPath?: string;
  /** 创建时间 */
  Itime?: string;
  /** 父源账号组ID，该字段仅适用于第三方同步的组织架构 */
  ParentOrgId?: string;
  /** 导入信息,json格式 */
  Import?: string;
  /** 是否开启导入架构 */
  ImportEnable?: boolean;
  /** 导入类型 */
  ImportType?: string;
  /** miniIAMId，MiniIAM源才有 */
  MiniIamId?: string;
}

/** 操作的设备列表 */
declare interface ModifyVirtualDeviceGroupsReqItem {
  /** 设备mid */
  DeviceMid?: string;
  /** 操作标识 0:删除设备 1:添加设备 */
  Operation?: number;
}

/** 页码 */
declare interface Paging {
  /** 每页条数 */
  PageSize?: number;
  /** 页码 */
  PageNum?: number;
  /** 总页数 */
  PageCount?: number;
  /** 记录总数 */
  Total?: number;
}

/** 规则表达式 */
declare interface RuleExpression {
  /** 规则元数据 */
  Items?: RuleItem[];
  /** 关系 */
  Relation?: string;
}

/** 规则元数据 */
declare interface RuleItem {
  /** 字段名称 */
  Key?: string;
  /** 操作关系（等于、不等于、包含、不包含） */
  Operate?: string;
  /** 内容 */
  Value?: string;
  /** 内容，v2多值版本使用 */
  Values?: string[];
}

/** 简单规则表达式 */
declare interface SimpleRule {
  /** 规则表达式 */
  Expressions?: RuleExpression[];
  /** 表达式间逻辑关系 */
  Relation?: string;
}

/** 软件详情响应对象集合 */
declare interface SoftwareInformationData {
  /** 软件名称 */
  Name?: string;
  /** 安装时间 */
  InstallDate?: string;
  /** 软件列表id(只支持32位) */
  SoftwareId?: number;
  /** 唯一标识Mid */
  Mid?: string;
  /** 软件版本 */
  Version?: string;
  /** 公司名 */
  CorpName?: string;
  /** 列表Id(只支持32位) */
  Id?: number;
  /** 盗版风险（0:未支持，1:风险，2:未发现，3:未开启） */
  PiracyRisk?: number;
}

/** Sort 排序字段 */
declare interface Sort {
  /** 排序字段 */
  Field?: string;
  /** 排序方式 */
  Order?: string;
}

declare interface CreateDLPFileDetectionTaskRequest {
  /** 文件下载链接，要求公网可访问，GET方式访问后为文件 */
  Url: string;
  /** 文件名，带后缀 */
  FileName: string;
  /** 文件md5，传入相同md5会直接使用之前缓存的结果。> 请注意：不同文件使用相同md5送检，会命中缓存得到旧的检测结果 */
  FileMd5: string;
  /** 管理域实例ID，用于CAM管理域权限分配 */
  DomainInstanceId?: string;
  /** 回调地址，暂时未使用 */
  CallBackUrl?: string;
}

declare interface CreateDLPFileDetectionTaskResponse {
  /** 创建送检任务响应数据 */
  Data?: CreateDLPFileDetectionTaskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeviceTaskRequest {
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 终端id */
  Mid?: string;
}

declare interface CreateDeviceTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeviceVirtualGroupRequest {
  /** 必填，终端自定义分组名 */
  DeviceVirtualGroupName: string;
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 详情 */
  Description?: string;
  /** 系统类型（0: win，1：linux，2: mac，4：android，5：ios ； 默认值0）(只支持32位) */
  OsType?: number;
  /** 分组类型（0:手动分组；非0为自动划分分组；具体枚举值为：1:自动每小时划分分组、2:自动每天划分分组、3:自定义时间划分分组； 默认值0）(只支持32位) */
  TimeType?: number;
  /** 选填，TimeType=3时的自动划分时间，其他情况为0（单位min）(只支持32位) */
  AutoMinute?: number;
  /** 选填，手动分组不填，自动划分分组的划分规则数据 */
  AutoRules?: ComplexRule;
}

declare interface CreateDeviceVirtualGroupResponse {
  /** 响应返回的data */
  Data?: CreateDeviceVirtualGroupRspData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivilegeCodeRequest {
  /** 必填；设备唯一标识符; */
  Mid: string;
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 系统类型（0: win，1：linux，2: mac，4：android，5：ios ）；默认值0 */
  OsType?: number;
}

declare interface CreatePrivilegeCodeResponse {
  /** 业务响应数据 */
  Data?: CreatePrivilegeCodeRspData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountGroupsRequest {
  /** 搜索范围：0-仅当前分组的直接子组，1-当前分组的所有子组。默认为0。 */
  Deepin?: number;
  /** 查询条件过滤参数1、Name，string类型，按分组名过滤是否必填：否操作符: like排序条件1、Itime，string类型，按分组创建时间排序是否必填：否2、Utime，string类型，按分组更新时间排序是否必填：否 */
  Condition?: Condition;
  /** 父分组ID，获取该分组下的子组信息。默认查询全网根分组下子组信息。 */
  ParentId?: number;
}

declare interface DescribeAccountGroupsResponse {
  /** 账号分组详情响应数据 */
  Data?: DescribeAccountGroupsPageResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAggrSoftCategorySoftListRequest {
  /** os类别(只支持32位) */
  OsType?: number;
}

declare interface DescribeAggrSoftCategorySoftListResponse {
  /** 数据 */
  Data?: DescribeAggrSoftCategorySoftListData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDLPFileDetectResultRequest {
  /** 管理域实例ID，用于CAM管理域权限分配 */
  DomainInstanceId?: string;
  /** 查询ID，即提交送检任务接口（CreateDLPFileDetectionTask）返回的任务ID（DLPFileDetectionTaskID） */
  QueryID?: string;
}

declare interface DescribeDLPFileDetectResultResponse {
  /** 查询任务结果 */
  Data?: DescribeDLPFileDetectResultData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceChildGroupsRequest {
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 过滤条件参数（字段含义请参考接口返回值）- Name, 类型String，支持操作：【like，ilike】，支持排序分页参数- PageNum 从1开始，小于等于0时使用默认参数- PageSize 最大值5000，最好不超过100 */
  Condition?: Condition;
  /** 父分组id，默认0：表示获取全网终端分组 */
  ParentId?: number;
  /** 操作系统类型（0：win，1：linux，2：mac，4：android，5：ios；默认0：系统win） */
  OsType?: number;
}

declare interface DescribeDeviceChildGroupsResponse {
  /** 查询设备组子分组详情响应结构 */
  Data?: DescribeDeviceChildGroupsRspData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceHardwareInfoListRequest {
  /** 【必填】设备分组id（需要和OsType匹配），下面是私有化场景下默认id：id-名称-操作系统1	全网终端	Win2	未分组终端	Win30000000	服务器	Win40000101	全网终端	Linux40000102	未分组终端	Linux40000103	服务器	Linux40000201	全网终端	macOS40000202	未分组终端	macOS40000203	服务器	macOS40000401	全网终端	Android40000402	未分组终端	Android40000501	全网终端	iOS40000502	未分组终端	iOSSaaS需要调用分组接口DescribeDeviceChildGroups获取对应分组id */
  GroupId: number;
  /** 【必填】操作系统类型（0: win，1：linux，2: mac，4：android，5：ios 默认值0），需要和GroupId或者GroupIds匹配 */
  OsType: number;
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 过滤条件参数（字段含义请参考接口返回值） - Name, 类型String，支持操作：【eq，like，ilike】，支持排序 - UserName, 类型String，支持操作：【eq，like，ilike】，支持排序 - IoaUserName，类型String，支持操作：【eq，like，ilike】，支持排序 - MacAddr, 类型String，支持操作：【eq，like，ilike】，支持排序 - Ip, 类型String，支持操作：【eq，like，ilike】，支持排序 - Mid, 类型String，支持操作：【eq，like，ilike】，支持排序 ，支持排序分页参数 - PageNum 从1开始，小于等于0时使用默认参数 - PageSize 最大值5000，最好不超过100 */
  Condition?: Condition;
}

declare interface DescribeDeviceHardwareInfoListResponse {
  /** 分页的data数据 */
  Data?: DescribeDeviceHardwareInfoListRspData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceInfoRequest {
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 终端id */
  Mid?: string;
  /** 查询类型 process_list network_list service_list */
  Type?: string;
}

declare interface DescribeDeviceInfoResponse {
  /** 业务响应数据 */
  Data?: DescribeDeviceInfoRspData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceVirtualGroupsRequest {
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 滤条件、分页参数 Name - String - 是否必填：否 - 操作符: like - 排序支持：否- 按终端自定义分组过滤。 DeviceVirtualGroupName - String - 是否必填：否 - 操作符: like - 排序支持：否- 按终端自定义分组过滤。 */
  Condition?: Condition;
  /** 必填，系统类型（0: win，1：linux，2: mac，4：android，5：ios 默认值0） */
  OsType?: number;
  /** 非必填，自定义分组ids */
  VirtualGroupIds?: number[];
}

declare interface DescribeDeviceVirtualGroupsResponse {
  /** 查询终端自定义分组的Data数据 */
  Data?: DescribeDeviceVirtualGroupsPageRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicesRequest {
  /** 过滤条件参数（字段含义请参考接口返回值）- Mid, 类型String，支持操作：【eq，like，ilike】，支持排序- Name, 类型String，支持操作：【eq，like，ilike】，支持排序- Itime, 类型String，支持操作：【eq，like，ilike】，支持排序- UserName, 类型String，支持操作：【eq，like，ilike】，支持排序- MacAddr, 类型String，支持操作：【eq，like，ilike】，支持排序- UserId, 类型String，支持操作：【eq，like，ilike】，支持排序- Ip, 类型String，支持操作：【eq，like，ilike】，支持排序- Tags，类型String，支持操作：【eq，like，ilike】，支持排序- LocalIpList，类型String，支持操作：【eq，like，ilike】，支持排序- SerialNum，类型String，支持操作：【eq，like，ilike】，支持排序- Version，类型String，支持操作：【eq，like，ilike】，支持排序- StrVersion，类型String，支持操作：【eq，like，ilike】，支持排序- RtpStatus，类型String，支持操作：【eq，like，ilike】，**不支持排序**- HostName，类型String，支持操作：【eq，like，ilike】，支持排序- IoaUserName，类型String，支持操作：【eq，like，ilike】，支持排序- GroupName，类型String，支持操作：【eq，like，ilike】，支持排序- CriticalVulListCount，**类型Int**，支持操作：【eq】，**不支持排序**- RiskCount，**类型Int**，支持操作：【eq】，**不支持排序**- VulVersion，类型String，支持操作：【eq，like，ilike】，**不支持排序**- Virusver，类型String，支持操作：【eq，like，ilike】，**不支持排序**- SysRepver，类型String，支持操作：【eq，like，ilike】，**不支持排序**- BaseBoardSn，类型String，支持操作：【eq，like，ilike】，支持排序- Os，类型String，支持操作：【eq，like，ilike】，支持排序- ConnActiveTime，类型String，支持操作：【eq，like，ilike】，**不支持排序**- FirewallStatus，**类型Int**，支持操作：【eq】，**不支持排序**- ProfileName，类型String，支持操作：【eq，like，ilike】，支持排序- DomainName，类型String，支持操作：【eq，like，ilike】，支持排序- SysRepVersion，类型String，支持操作：【eq，like，ilike】，支持排序- VirusVer，类型String，支持操作：【eq，like，ilike】，支持排序- Cpu，类型String，支持操作：【eq，like，ilike】，支持排序- Memory，类型String，支持操作：【eq，like，ilike】，支持排序- HardDiskSize，类型String，支持操作：【eq，like，ilike】，支持排序- HardwareChangeCount，**类型Int**，支持操作：【eq】，支持排序- AccountName，类型String，支持操作：【like.ilike】，支持排序- AccountGroupName，类型String，支持操作：【like.ilike】，支持排序- ScreenRecordingPermission，**类型Int**，支持操作：【eq】，支持排序- DiskAccessPermission，**类型Int**，支持操作：【eq】，支持排序分页参数- PageNum 从1开始，小于等于0时使用默认参数- PageSize 最大值5000，最好不超过100 */
  Condition?: Condition;
  /** 【和GroupIds必须有一个填写】设备分组id（需要和OsType匹配），下面是私有化场景下默认id：id-名称-操作系统1	全网终端	Win2	未分组终端	Win30000000	服务器	Win40000101	全网终端	Linux40000102	未分组终端	Linux40000103	服务器	Linux40000201	全网终端	macOS40000202	未分组终端	macOS40000203	服务器	macOS40000401	全网终端	Android40000402	未分组终端	Android40000501	全网终端	iOS40000502	未分组终端	iOSSaaS需要调用分组接口DescribeDeviceChildGroups获取对应分组id */
  GroupId?: number;
  /** 【必填】操作系统类型（0: win，1：linux，2: mac，4：android，5：ios 默认值0），需要和GroupId或者GroupIds匹配 */
  OsType?: number;
  /** 在线状态 （2表示在线，0或者1表示离线） */
  OnlineStatus?: number;
  /** 过滤条件--兼容旧接口,参数同Condition */
  Filters?: Filter[];
  /** 排序字段--兼容旧接口,参数同Condition */
  Sort?: Sort;
  /** 获取第几页--兼容旧接口,参数同Condition */
  PageNum?: number;
  /** 每页获取数--兼容旧接口,参数同Condition */
  PageSize?: number;
  /** 授权状态： 4基础授权 5高级授权 */
  Status?: number;
  /** 【和GroupId必须有一个填写】设备分组id列表（需要和OsType匹配） */
  GroupIds?: number[];
}

declare interface DescribeDevicesResponse {
  /** 分页的data数据 */
  Data?: DescribeDevicesPageRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLocalAccountsRequest {
  /** 查询条件：过滤或排序1、UserName，string类型，姓名是否必填：否过滤支持：是，支持eq、like、ilike排序支持：否2、UserId，string类型，账户是否必填：否过滤支持：是，支持eq、like、ilike排序支持：否3、Phone，string类型，手机号是否必填：否过滤支持：是，支持eq、like、ilike排序支持：否 */
  Condition?: Condition;
  /** 获取账号的分组ID，不传默认获取全网根账号组 */
  AccountGroupId?: number;
  /** 是否仅展示当前目录下用户 1： 递归显示 2：仅显示当前目录下用户 */
  ShowFlag?: number;
}

declare interface DescribeLocalAccountsResponse {
  /** 获取账号列表响应的分页对象 */
  Data?: DescribeLocalAccountsPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRootAccountGroupRequest {
}

declare interface DescribeRootAccountGroupResponse {
  /** 账号根分组响应详情 */
  Data?: GetAccountGroupData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSoftCensusListByDeviceRequest {
  /** 必填，终端分组ID */
  GroupId: number;
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 系统类型（0: win，1：linux，2: mac，4：android，5：ios ）；默认值0 */
  OsType?: number;
  /** 过滤条件、分页参数 Name - String - 是否必填：否 - 操作符: eq,like,ilike - 排序支持：否 - 备注：字段含义，终端名。 UserName - String - 是否必填：否 - 操作符: eq,like,ilike - 排序支持：否 - 备注：字段含义，终端用户名。 IoaUserName - String - 是否必填：否 - 操作符: eq,like,ilike - 排序支持：否 - 备注：字段含义，最近登录账号。 Ip - String - 是否必填：否 - 操作符: eq,like,ilike - 排序支持：否 - 备注：字段含义，IP地址。 MacAddr - String - 是否必填：否 - 操作符: eq,like,ilike - 排序支持：否 - 备注：字段含义，MAC地址。 */
  Condition?: Condition;
}

declare interface DescribeSoftCensusListByDeviceResponse {
  /** 业务响应数据 */
  Data?: DescribeSoftCensusListByDevicePageData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSoftwareInformationRequest {
  /** 终端唯一标识Mid */
  Mid?: string;
  /** 过滤条件、分页参数Name - String - 过滤支持：是 - 操作符:eq,like - 排序支持：是 。 */
  Condition?: Condition;
}

declare interface DescribeSoftwareInformationResponse {
  /** 业务响应数据 */
  Data?: DescribeSoftwareInformationPageData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirtualDevicesRequest {
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 过滤条件参数（字段含义请参考接口返回值）- Mid, 类型String，支持操作：【eq，like，ilike】，支持排序- Name, 类型String，支持操作：【eq，like，ilike】，支持排序- Itime, 类型String，支持操作：【eq，like，ilike】，支持排序- UserName, 类型String，支持操作：【eq，like，ilike】，支持排序- MacAddr, 类型String，支持操作：【eq，like，ilike】，支持排序- UserId, 类型String，支持操作：【eq，like，ilike】，支持排序- Ip, 类型String，支持操作：【eq，like，ilike】，支持排序- Tags，类型String，支持操作：【eq，like，ilike】，支持排序- LocalIpList，类型String，支持操作：【eq，like，ilike】，支持排序- SerialNum，类型String，支持操作：【eq，like，ilike】，支持排序- Version，类型String，支持操作：【eq，like，ilike】，支持排序- StrVersion，类型String，支持操作：【eq，like，ilike】，支持排序- RtpStatus，类型String，支持操作：【eq，like，ilike】，**不支持排序**- HostName，类型String，支持操作：【eq，like，ilike】，支持排序- IoaUserName，类型String，支持操作：【eq，like，ilike】，支持排序- GroupName，类型String，支持操作：【eq，like，ilike】，支持排序- CriticalVulListCount，**类型Int**，支持操作：【eq】，**不支持排序**- RiskCount，**类型Int**，支持操作：【eq】，**不支持排序**- VulVersion，类型String，支持操作：【eq，like，ilike】，**不支持排序**- Virusver，类型String，支持操作：【eq，like，ilike】，**不支持排序**- SysRepver，类型String，支持操作：【eq，like，ilike】，**不支持排序**- BaseBoardSn，类型String，支持操作：【eq，like，ilike】，支持排序- Os，类型String，支持操作：【eq，like，ilike】，支持排序- ConnActiveTime，类型String，支持操作：【eq，like，ilike】，**不支持排序**- FirewallStatus，**类型Int**，支持操作：【eq】，**不支持排序**- ProfileName，类型String，支持操作：【eq，like，ilike】，支持排序- DomainName，类型String，支持操作：【eq，like，ilike】，支持排序- SysRepVersion，类型String，支持操作：【eq，like，ilike】，支持排序- VirusVer，类型String，支持操作：【eq，like，ilike】，支持排序- Cpu，类型String，支持操作：【eq，like，ilike】，支持排序- Memory，类型String，支持操作：【eq，like，ilike】，支持排序- HardDiskSize，类型String，支持操作：【eq，like，ilike】，支持排序- HardwareChangeCount，**类型Int**，支持操作：【eq】，支持排序- AccountName，类型String，支持操作：【like.ilike】，支持排序- AccountGroupName，类型String，支持操作：【like.ilike】，支持排序- ScreenRecordingPermission，**类型Int**，支持操作：【eq】，支持排序- DiskAccessPermission，**类型Int**，支持操作：【eq】，支持排序分页参数- PageNum 从1开始，小于等于0时使用默认参数- PageSize 最大值5000，最好不超过100 */
  Condition?: Condition;
  /** 必填，终端自定义分组id */
  DeviceVirtualGroupId?: number;
  /** 必填，系统类型（0: win，1：linux，2: mac，3: win_srv，4：android，5：ios 默认值0） */
  OsType?: number;
  /** 选填，在线状态 （2表示在线，0或者1表示离线） */
  OnlineStatus?: number;
}

declare interface DescribeVirtualDevicesResponse {
  /** 返回的具体Data数据 */
  Data?: DescribeVirtualDevicesPageRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVirtualDeviceGroupsRequest {
  /** 必填，操作的设备列表数据 */
  DeviceList: ModifyVirtualDeviceGroupsReqItem[];
  /** 管理域实例ID，用于CAM管理域权限分配。若企业未进行管理域的划分，可直接传入根域"1"，此时表示针对当前企业的全部设备和账号进行接口CRUD，具体CRUD的影响范围限制于相应接口的入参。 */
  DomainInstanceId?: string;
  /** 添加到的终端自定义分组id。和DeviceVirtualGroupIds互斥，必填其一，优先使用本参数 */
  DeviceVirtualGroupId?: number;
  /** 要添加的终端自定义分组id列表 */
  DeviceVirtualGroupIds?: number[];
  /** 系统类型（0: win，1：linux，2: mac，4：android，5：ios 默认值0） */
  OsType?: number;
}

declare interface ModifyVirtualDeviceGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ioa iOA 零信任安全管理系统} */
declare interface Ioa {
  (): Versions;
  /** 提交送检任务 {@link CreateDLPFileDetectionTaskRequest} {@link CreateDLPFileDetectionTaskResponse} */
  CreateDLPFileDetectionTask(data: CreateDLPFileDetectionTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDLPFileDetectionTaskResponse>;
  /** 创建获取终端进程网络服务信息任务 {@link CreateDeviceTaskRequest} {@link CreateDeviceTaskResponse} */
  CreateDeviceTask(data?: CreateDeviceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceTaskResponse>;
  /** 创建终端自定义分组 {@link CreateDeviceVirtualGroupRequest} {@link CreateDeviceVirtualGroupResponse} */
  CreateDeviceVirtualGroup(data: CreateDeviceVirtualGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceVirtualGroupResponse>;
  /** 创建特权码、卸载码 {@link CreatePrivilegeCodeRequest} {@link CreatePrivilegeCodeResponse} */
  CreatePrivilegeCode(data: CreatePrivilegeCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivilegeCodeResponse>;
  /** 查询账号分组列表 {@link DescribeAccountGroupsRequest} {@link DescribeAccountGroupsResponse} */
  DescribeAccountGroups(data?: DescribeAccountGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountGroupsResponse>;
  /** 软件分类的聚合软件列表查询 {@link DescribeAggrSoftCategorySoftListRequest} {@link DescribeAggrSoftCategorySoftListResponse} */
  DescribeAggrSoftCategorySoftList(data?: DescribeAggrSoftCategorySoftListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAggrSoftCategorySoftListResponse>;
  /** 查询文件检测结果 {@link DescribeDLPFileDetectResultRequest} {@link DescribeDLPFileDetectResultResponse} */
  DescribeDLPFileDetectResult(data?: DescribeDLPFileDetectResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDLPFileDetectResultResponse>;
  /** 查询设备组子分组 {@link DescribeDeviceChildGroupsRequest} {@link DescribeDeviceChildGroupsResponse} */
  DescribeDeviceChildGroups(data?: DescribeDeviceChildGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceChildGroupsResponse>;
  /** 查询终端硬件信息列表 {@link DescribeDeviceHardwareInfoListRequest} {@link DescribeDeviceHardwareInfoListResponse} */
  DescribeDeviceHardwareInfoList(data: DescribeDeviceHardwareInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceHardwareInfoListResponse>;
  /** 获取终端进程网络服务信息 {@link DescribeDeviceInfoRequest} {@link DescribeDeviceInfoResponse} */
  DescribeDeviceInfo(data?: DescribeDeviceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceInfoResponse>;
  /** 查询终端自定义分组列表 {@link DescribeDeviceVirtualGroupsRequest} {@link DescribeDeviceVirtualGroupsResponse} */
  DescribeDeviceVirtualGroups(data?: DescribeDeviceVirtualGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceVirtualGroupsResponse>;
  /** 查询设备列表详情 {@link DescribeDevicesRequest} {@link DescribeDevicesResponse} */
  DescribeDevices(data?: DescribeDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicesResponse>;
  /** 获取账号列表 {@link DescribeLocalAccountsRequest} {@link DescribeLocalAccountsResponse} */
  DescribeLocalAccounts(data?: DescribeLocalAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLocalAccountsResponse>;
  /** 查询账号根分组 {@link DescribeRootAccountGroupRequest} {@link DescribeRootAccountGroupResponse} */
  DescribeRootAccountGroup(data?: DescribeRootAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRootAccountGroupResponse>;
  /** 按终端查看软件统计信息 {@link DescribeSoftCensusListByDeviceRequest} {@link DescribeSoftCensusListByDeviceResponse} */
  DescribeSoftCensusListByDevice(data: DescribeSoftCensusListByDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSoftCensusListByDeviceResponse>;
  /** 查看软件详情列表 {@link DescribeSoftwareInformationRequest} {@link DescribeSoftwareInformationResponse} */
  DescribeSoftwareInformation(data?: DescribeSoftwareInformationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSoftwareInformationResponse>;
  /** 展示自定义分组终端列表 {@link DescribeVirtualDevicesRequest} {@link DescribeVirtualDevicesResponse} */
  DescribeVirtualDevices(data?: DescribeVirtualDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirtualDevicesResponse>;
  /** 终端手动自定义分组增减终端 {@link ModifyVirtualDeviceGroupsRequest} {@link ModifyVirtualDeviceGroupsResponse} */
  ModifyVirtualDeviceGroups(data: ModifyVirtualDeviceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirtualDeviceGroupsResponse>;
}

export declare type Versions = ["2022-06-01"];

export default Ioa;
