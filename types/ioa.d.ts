/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** - [ ] 过滤条件Name - String - 是否必填：否 - 操作符: ilike - 排序支持：否- 根据分组名称进行查询。分页参数PageNum 从1开始，小于等于0时使用默认参数。PageSize 最大值5000，最好不超过100。 */
declare interface Condition {
  /** Filters 条件过滤 */
  Filters?: Filter[] | null;
  /** FilterGroups 条件过滤组 */
  FilterGroups?: FilterGroup[] | null;
  /** Sort 排序字段 */
  Sort?: Sort | null;
  /** PageSize 每页获取数(只支持32位) */
  PageSize?: number | null;
  /** PageNum 获取第几页(只支持32位) */
  PageNum?: number | null;
}

/** 分组名称 */
declare interface DescribeAccountGroupsData {
  /** 名称path */
  NamePath?: string | null;
  /** id patch数组(只支持32位) */
  IdPathArr?: number[] | null;
  /** 扩展信息 */
  ExtraInfo?: string | null;
  /** 最后更新时间 */
  Utime?: string | null;
  /** 父id */
  ParentId?: number | null;
  /** 组织id */
  OrgId?: string | null;
  /** 账户组名称 */
  Name?: string | null;
  /** id */
  Id?: number | null;
  /** 描述 */
  Description?: string | null;
  /** 同步数据源 */
  Source?: number | null;
  /** id path */
  IdPath?: string | null;
  /** 创建时间 */
  Itime?: string | null;
  /** 父组织id */
  ParentOrgId?: string | null;
  /** 导入类型 */
  ImportType?: string | null;
  /** miniIAM id */
  MiniIamId?: string | null;
  /** 该分组下用户总数 */
  UserTotal?: number | null;
  /** 是否叶子节点 */
  IsLeaf?: boolean | null;
  /** 是否该账户的直接权限 */
  ReadOnly?: boolean | null;
  /** 最新一次同步任务的结果 */
  LatestSyncResult?: string | null;
  /** 最新一次同步任务的结束时间 */
  LatestSyncTime?: string | null;
}

/** 账户分组详情响应数据 */
declare interface DescribeAccountGroupsPageResp {
  /** 账户分响应对象集合 */
  Items?: DescribeAccountGroupsData[] | null;
  /** 分页公共对象 */
  Page?: Paging | null;
}

/** 分页的data数据 */
declare interface DescribeDevicesPageRsp {
  /** 数据分页信息 */
  Paging?: Paging | null;
  /** 业务响应数据 */
  Items?: DeviceDetail[] | null;
}

/** 所属组 */
declare interface DescribeLocalAccountAccountGroupsData {
  /** 组Id(只支持32位) */
  AccountGroupId?: number | null;
}

/** 获取账号列表响应的单个对象 */
declare interface DescribeLocalAccountsData {
  /** uid，数据库中唯一 */
  Id?: number | null;
  /** 账号，登录账号 */
  UserId?: string | null;
  /** 用户名 */
  UserName?: string | null;
  /** 账号id，同Id字段 */
  AccountId?: number | null;
  /** 账号所在的分组id */
  GroupId?: number | null;
  /** 账号所在的分组名称 */
  GroupName?: string | null;
  /** 账号所在的分组名称路径，用英文.分割 */
  NamePath?: string | null;
  /** 账号来源,0表示本地账号(只支持32位) */
  Source?: number | null;
  /** 账号状态,0禁用，1启用(只支持32位) */
  Status?: number | null;
  /** 账号的创建时间 */
  Itime?: string | null;
  /** 账号的最后更新时间 */
  Utime?: string | null;
  /** 账号的扩展信息，包含邮箱、手机号、身份证、职位等信息 */
  ExtraInfo?: string | null;
  /** 用户风险等级，枚举：none, low, middle, high */
  RiskLevel?: string | null;
  /** 所属组 */
  AccountGroups?: DescribeLocalAccountAccountGroupsData[] | null;
  /** 绑定手机端设备数 */
  MobileBindNum?: number | null;
  /** 绑定Pc端设备数 */
  PcBindNum?: number | null;
  /** 账号在线状态 1：在线 2：离线 */
  OnlineStatus?: number | null;
  /** 账号活跃状态 1：活跃 2：非活跃 */
  ActiveStatus?: number | null;
  /** 账号登录时间 */
  LoginTime?: string | null;
  /** 账号登出时间 */
  LogoutTime?: string | null;
}

/** 获取账号列表响应的分页对象 */
declare interface DescribeLocalAccountsPage {
  /** 公共分页对象 */
  Page?: Paging | null;
  /** 获取账号列表响应的单个对象 */
  Items?: DescribeLocalAccountsData[] | null;
}

/** 业务响应数据 */
declare interface DeviceDetail {
  /** 设备ID */
  Id?: number | null;
  /** 设备唯一标识码，在ioa中每个设备有唯一标识码 */
  Mid?: string | null;
  /** 终端名（设备名） */
  Name?: string | null;
  /** 设备所在分组ID */
  GroupId?: number | null;
  /** OS平台，0：Windows 、1： Linux、 2：macOS 、4： Android、 5: iOS。默认是0 */
  OsType?: number | null;
  /** 设备IP地址（出口IP） */
  Ip?: string | null;
  /** 在线状态，2：在线、0或者1:离线 */
  OnlineStatus?: number | null;
  /** 客户端版本号-大整数 */
  Version?: string | null;
  /** 客户端版本号-点分字符串 */
  StrVersion?: string | null;
  /** 首次在线时间 */
  Itime?: string | null;
  /** 最后一次在线时间 */
  ConnActiveTime?: string | null;
  /** 设备是否加锁 ，1：锁定 0或者2：未锁定。 */
  Locked?: number | null;
  /** 设备本地IP列表, 包括IP */
  LocalIpList?: string | null;
  /** 主机ID(只支持32位) */
  HostId?: number | null;
  /** 设备所属分组名 */
  GroupName?: string | null;
  /** 设备所属分组路径 */
  GroupNamePath?: string | null;
  /** 未修复高危漏洞数(只支持32位) */
  CriticalVulListCount?: number | null;
  /** 设备名，和Name相同 */
  ComputerName?: string | null;
  /** 登录域名 */
  DomainName?: string | null;
  /** MAC地址 */
  MacAddr?: string | null;
  /** 漏洞数 */
  VulCount?: number | null;
  /** 病毒风险数 */
  RiskCount?: number | null;
  /** 病毒库版本 */
  VirusVer?: string | null;
  /** 漏洞库版本 */
  VulVersion?: string | null;
  /** 系统修复引擎版本 */
  SysRepVersion?: string | null;
  /** 高危补丁列表 */
  VulCriticalList?: string[] | null;
  /** 标签 */
  Tags?: string | null;
  /** 终端用户名 */
  UserName?: string | null;
  /** 防火墙状态，不等于0表示开启 */
  FirewallStatus?: number | null;
  /** SN序列号 */
  SerialNum?: string | null;
  /** 设备管控策略版本 */
  DeviceStrategyVer?: string | null;
  /** NGN策略版本 */
  NGNStrategyVer?: string | null;
  /** 最近登录账户的账号 */
  IOAUserName?: string | null;
  /** 设备管控新策略 */
  DeviceNewStrategyVer?: string | null;
  /** NGN策略新版本 */
  NGNNewStrategyVer?: string | null;
  /** 主机名称 */
  HostName?: string | null;
  /** 主板序列号 */
  BaseBoardSn?: string | null;
  /** 绑定账户只有名字 */
  AccountUsers?: string | null;
  /** 身份策略版本 */
  IdentityStrategyVer?: string | null;
  /** 身份策略新版本 */
  IdentityNewStrategyVer?: string | null;
  /** 最近登录账号部门 */
  AccountGroupName?: string | null;
  /** 最近登录账户的姓名 */
  AccountName?: string | null;
  /** 账号组id */
  AccountGroupId?: number | null;
}

/** Filters 条件过滤 */
declare interface Filter {
  /** 过滤字段 */
  Field?: string | null;
  /** 过滤方式 eq:等于,net:不等于,like,nlike,gt:大于,lt:小于,egt:大于等于,elt:小于等于 */
  Operator?: string | null;
  /** 过滤条件 */
  Values?: string[] | null;
}

/** FilterGroups 条件过滤组 */
declare interface FilterGroup {
  /** Filters 条件过滤 */
  Filters?: Filter[] | null;
}

/** 账户分组详情响应数据 */
declare interface GetAccountGroupData {
  /** 分组Namepath */
  NamePath?: string | null;
  /** 分组Id path arr(只支持32位) */
  IdPathArr?: number[] | null;
  /** 分组扩展信息 */
  ExtraInfo?: string | null;
  /** 最后更新时间 */
  Utime?: string | null;
  /** 父分组id(只支持32位) */
  ParentId?: number | null;
  /** 组织id */
  OrgId?: string | null;
  /** 分组名称 */
  Name?: string | null;
  /** 分组id(只支持32位) */
  Id?: number | null;
  /** 描述 */
  Description?: string | null;
  /** 分组导入源(只支持32位) */
  Source?: number | null;
  /** Id Path */
  IdPath?: string | null;
  /** 创建时间 */
  Itime?: string | null;
  /** 父组织id */
  ParentOrgId?: string | null;
  /** 导入信息,json格式 */
  Import?: string | null;
  /** 是否开启导入架构 */
  ImportEnable?: boolean | null;
  /** 导入类型 */
  ImportType?: string | null;
  /** miniIAMId，MiniIAM源才有 */
  MiniIamId?: string | null;
}

/** 页码 */
declare interface Paging {
  /** 每页条数(只支持32位) */
  PageSize?: number | null;
  /** 页码(只支持32位) */
  PageNum?: number | null;
  /** 总页数(只支持32位) */
  PageCount?: number | null;
  /** 记录总数 */
  Total?: number | null;
}

/** Sort 排序字段 */
declare interface Sort {
  /** 排序字段 */
  Field?: string | null;
  /** 排序方式 */
  Order?: string | null;
}

declare interface DescribeAccountGroupsRequest {
  /** 搜索范围,0-仅搜直接子组,1-深层搜索(只支持32位) */
  Deepin?: number;
  /** 滤条件、分页参数Name - String - 是否必填：否 - 操作符: like - 排序支持：否- 按账号分组过滤。排序条件Itime - string - 是否必填：否 - 排序支持：是 - 按账号分组创建时间排序。Utime - string - 是否必填：否 - 排序支持：是 - 按账号分组更新时间排序。 */
  Condition?: Condition;
  /** 父分组id */
  ParentId?: number;
}

declare interface DescribeAccountGroupsResponse {
  /** 账户分组详情响应数据 */
  Data?: DescribeAccountGroupsPageResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicesRequest {
  /** 过滤条件Ip - String - 是否必填：否 - 操作符: eq - 排序支持：否- 按照Ip进行过滤。MacAddr - String - 是否必填：否 - 操作符: eq - 排序支持：否- 按照mac地址进行过滤。IoaUserName - String - 是否必填：否 - 操作符: eq - 排序支持：否- 按照ioa用户名进行过滤。分页参数PageNum 从1开始，小于等于0时使用默认参数。PageSize 最大值5000，最好不超过100。 */
  Condition?: Condition;
  /** 【和GroupIds必须有一个填写】设备分组id（需要和OsType匹配）id-名称-操作系统1	全网终端	Win2	未分组终端	Win30000000	服务器	Win40000101	全网终端	Linux40000102	未分组终端	Linux40000103	服务器	Linux40000201	全网终端	macOS40000202	未分组终端	macOS40000203	服务器	macOS40000401	全网终端	Android40000402	未分组终端	Android40000501	全网终端	iOS40000502	未分组终端	iOS */
  GroupId?: number;
  /** 【必填】操作系统类型（0: win，1：linux，2: mac，3: win_srv，4：android，5：ios 默认值0），需要和GroupId或者GroupIds匹配 */
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
  /** 授权状态 4未授权 5已授权 */
  Status?: number;
}

declare interface DescribeDevicesResponse {
  /** 分页的data数据 */
  Data?: DescribeDevicesPageRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLocalAccountsRequest {
  /** 滤条件、分页参数UserName - String - 是否必填：否 - 操作符: eq,like - 排序支持：否- 按账号UserName过滤。UserId - string - 是否必填：否 - 操作符: eq,like - 排序支持：否 - 按账号UserNd过滤。Phone - string - 是否必填：否 - 操作符: eq,like - 排序支持：否 - 按手机号过滤。 */
  Condition?: Condition;
  /** 获取账号的分组Id，不传默认获取全部(只支持32位) */
  AccountGroupId?: number;
  /** 是否仅展示当前目录下用户 1： 递归显示 2：仅显示当前目录下用户(只支持32位) */
  ShowFlag?: number;
}

declare interface DescribeLocalAccountsResponse {
  /** 获取账号列表响应的分页对象 */
  Data?: DescribeLocalAccountsPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRootAccountGroupRequest {
}

declare interface DescribeRootAccountGroupResponse {
  /** 账户分组详情响应数据 */
  Data?: GetAccountGroupData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ioa iOA 零信任安全管理系统} */
declare interface Ioa {
  (): Versions;
  /** 查询账户目录列表 {@link DescribeAccountGroupsRequest} {@link DescribeAccountGroupsResponse} */
  DescribeAccountGroups(data?: DescribeAccountGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountGroupsResponse>;
  /** 查询设备列表详情 {@link DescribeDevicesRequest} {@link DescribeDevicesResponse} */
  DescribeDevices(data?: DescribeDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicesResponse>;
  /** 获取账号列表 {@link DescribeLocalAccountsRequest} {@link DescribeLocalAccountsResponse} */
  DescribeLocalAccounts(data?: DescribeLocalAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLocalAccountsResponse>;
  /** 查询账户根分组详情 {@link DescribeRootAccountGroupRequest} {@link DescribeRootAccountGroupResponse} */
  DescribeRootAccountGroup(data?: DescribeRootAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRootAccountGroupResponse>;
}

export declare type Versions = ["2022-06-01"];

export default Ioa;
