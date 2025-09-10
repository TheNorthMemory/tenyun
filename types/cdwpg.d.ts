/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 访问信息 */
declare interface AccessInfo {
  /** 地址 */
  Address?: string;
  /** 协议 */
  Protocol?: string;
}

/** 用于描述账号的实例ID、账号名 */
declare interface AccountInfo {
  /** 实例ID */
  InstanceId?: string;
  /** 账号名 */
  UserName?: string;
  /** 账户属性 */
  Perms?: string[];
}

/** 磁盘规格 */
declare interface CBSSpec {
  /** 盘类型 */
  DiskType: string;
  /** 大小 */
  DiskSize: number;
  /** 个数 */
  DiskCount: number;
}

/** 磁盘信息 */
declare interface CBSSpecInfo {
  /** 盘类型 */
  DiskType: string;
  /** 大小 */
  DiskSize: number;
  /** 个数 */
  DiskCount: number;
}

/** 云原生资源规格描述信息 */
declare interface CNResourceSpec {
  /** 节点类型 */
  Type: string;
  /** 机型 */
  SpecName: string;
  /** 节点个数 */
  Count: number;
  /** 磁盘信息 */
  DiskSpec: CBSSpec;
}

/** 计费时间参数 */
declare interface ChargeProperties {
  /** 1-需要自动续期 */
  RenewFlag: number;
  /** 订单时间范围 */
  TimeSpan: number;
  /** 时间单位，一般为h和m */
  TimeUnit: string;
  /** 计费类型0-按量计费，1-包年包月 */
  PayMode?: number;
  /** PREPAID、POSTPAID_BY_HOUR */
  ChargeType?: string;
}

/** ConfigHistory1 */
declare interface ConfigHistory {
  /** id */
  Id?: number;
  /** 实例名 */
  InstanceId?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** dn/cn */
  NodeType?: string;
  /** 参数名 */
  ParamName?: string;
  /** 新参数值 */
  ParamNewValue?: string;
  /** 旧参数值 */
  ParamOldValue?: string;
  /** 状态 doing/success */
  Status?: string;
}

/** 参数 */
declare interface ConfigParams {
  /** 名字 */
  ParameterName?: string;
  /** 值 */
  ParameterValue?: string;
  /** 修改前的值 */
  ParameterOldValue?: string;
}

/** 磁盘规格 */
declare interface DiskSpecPlus {
  /** 磁盘个数 */
  DiskCount?: number;
  /** 磁盘最大值 */
  MaxDiskSize?: number;
  /** 磁盘最小值 */
  MinDiskSize?: number;
  /** 磁盘类型 */
  DiskType?: string;
  /** 磁盘类型详情 */
  DiskDesc?: string;
  /** 机型类型 */
  CvmClass?: string;
}

/** 错误日志详细信息 */
declare interface ErrorLogDetail {
  /** 用户名称 */
  UserName?: string;
  /** 数据库 */
  Database?: string;
  /** 报错时间 */
  ErrorTime?: string;
  /** 报错信息 */
  ErrorMessage?: string;
}

/** user_config */
declare interface HbaConfig {
  /** 类型 */
  Type: string;
  /** 数据库 */
  Database: string;
  /** 用户 */
  User: string;
  /** ip地址 */
  Address: string;
  /** 方法 */
  Method: string;
  /** 是否遮盖 */
  Mask?: string;
}

/** 云原生实例详情 */
declare interface InstanceInfo {
  /** ID值 */
  ID?: number;
  /** 内核版本类型 */
  InstanceType?: string;
  /** 集群名字 */
  InstanceName?: string;
  /** 集群状态 */
  Status?: string;
  /** 集群状态详情 */
  StatusDesc?: string;
  /** 集群状态信息 */
  InstanceStateInfo?: InstanceStateInfo | null;
  /** 集群id */
  InstanceID?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 地域 */
  Region?: string;
  /** 地区 */
  Zone?: string;
  /** 地域详情 */
  RegionDesc?: string;
  /** 地区详情 */
  ZoneDesc?: string;
  /** 标签 */
  Tags?: Tag[];
  /** 内核版本 */
  Version?: string;
  /** 字符集 */
  Charset?: string;
  /** CN节点列表 */
  CNNodes?: InstanceNodeGroup[];
  /** DN节点列表 */
  DNNodes?: InstanceNodeGroup[];
  /** 地域id */
  RegionId?: number;
  /** 地区id */
  ZoneId?: number;
  /** 私有网络 */
  VpcId?: string;
  /** 子网 */
  SubnetId?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 计费方式 */
  PayMode?: string;
  /** 自动续费 */
  RenewFlag?: boolean;
  /** 集群id */
  InstanceId?: string;
  /** 访问信息 */
  AccessDetails?: AccessInfo[];
}

/** Instance node */
declare interface InstanceNode {
  /** id */
  NodeId: number;
  /** cn */
  NodeType: string;
  /** ip */
  NodeIp: string;
}

/** 集群节点信息 */
declare interface InstanceNodeGroup {
  /** 机型 */
  SpecName?: string;
  /** 磁盘信息 */
  DataDisk?: DiskSpecPlus;
  /** 机器个数 */
  CvmCount?: number;
}

/** 集群操作描述 */
declare interface InstanceOperation {
  /** 操作名称，例如“create_instance"、“scaleout_instance”等 */
  Id?: number;
  /** 集群ID */
  InstanceId?: string;
  /** 操作名称描述，例如“创建”，“修改集群名称”等 */
  Action?: string;
  /** 状态 */
  Status?: number;
  /** 操作开始时间 */
  StartTime?: string;
  /** 操作结束时间 */
  EndTime?: string;
  /** 操作上下文 */
  Context?: string;
  /** 操作更新时间 */
  UpdateTime?: string;
  /** 操作UIN */
  Uin?: string;
}

/** 精简集群信息 */
declare interface InstanceSimpleInfoNew {
  /** ID */
  ID?: number;
  /** 集群Id */
  InstanceId?: string;
  /** 集群名字 */
  InstanceName?: string;
  /** 内核版本 */
  Version?: string;
  /** 地域 */
  Region?: string;
  /** 地域Id */
  RegionId?: number;
  /** 地域详情 */
  RegionDesc?: string;
  /** 地区 */
  Zone?: string;
  /** 地区id */
  ZoneId?: number;
  /** 地区详情 */
  ZoneDesc?: string;
  /** 私有网络 */
  VpcId?: string;
  /** 子网 */
  SubnetId?: string;
  /** 开始时间 */
  CreateTime?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 访问地址 */
  AccessInfo?: string;
  /** 计费方式 */
  PayMode?: string;
  /** 自动续费 */
  RenewFlag?: boolean;
}

/** 集群状态抽象后的结构体 */
declare interface InstanceStateInfo {
  /** 集群状态，例如：Serving */
  InstanceState?: string;
  /** 集群操作创建时间 */
  FlowCreateTime?: string;
  /** 集群操作名称 */
  FlowName?: string;
  /** 集群操作进度 */
  FlowProgress?: number;
  /** 集群状态描述，例如：运行中 */
  InstanceStateDesc?: string;
  /** 集群流程错误信息，例如：“创建失败，资源不足” */
  FlowMsg?: string;
  /** 当前步骤的名称，例如：”购买资源中“ */
  ProcessName?: string;
  /** 集群是否有备份中任务，有为1,无为0 */
  BackupStatus?: number;
  /** 请求id */
  RequestId?: string;
  /** 集群是否有备份中任务，有为1,无为0 */
  BackupOpenStatus?: number;
}

/** node参数 */
declare interface NodeConfigParams {
  /** node类型 */
  NodeType: string;
  /** 参数 */
  ConfigParams: ConfigParams[];
}

/** 慢查询项目信息 */
declare interface NormQueryItem {
  /** 调用次数 */
  CallTimes: number;
  /** 读共享内存块数 */
  SharedReadBlocks: number;
  /** 写共享内存块数 */
  SharedWriteBlocks: number;
  /** 数据库 */
  DatabaseName: string;
  /** 脱敏后语句 */
  NormalQuery: string;
  /** 执行时间最长的语句 */
  MaxElapsedQuery: string;
  /** 花费总时间 */
  CostTime: number;
  /** 客户端ip */
  ClientIp: string;
  /** 用户名 */
  UserName: string;
  /** 总次数占比 */
  TotalCallTimesPercent: number;
  /** 总耗时占比 */
  TotalCostTimePercent: number;
  /** 花费最小时间 */
  MinCostTime: number;
  /** 花费最大时间 */
  MaxCostTime: number;
  /** 最早一条时间 */
  FirstTime: string;
  /** 最晚一条时间 */
  LastTime: string;
  /** 读io总耗时 */
  ReadCostTime: number;
  /** 写io总耗时 */
  WriteCostTime: number;
}

/** ParamDetail 详细 */
declare interface ParamDetail {
  /** 参数名 */
  ParamName?: string;
  /** 默认值 */
  DefaultValue?: string;
  /** 是否需要重启 */
  NeedRestart?: boolean;
  /** 当前运行值 */
  RunningValue?: string;
  /** 取值范围 */
  ValueRange?: ValueRange;
  /** 单位 */
  Unit?: string;
  /** 英文简介 */
  ShortDesc?: string;
  /** 参数名 */
  ParameterName?: string;
}

/** ParamItem 信息 */
declare interface ParamItem {
  /** 节点类型, cn/dn */
  NodeType?: string;
  /** 节点名 */
  NodeName?: string;
  /** 参数个数 */
  TotalCount?: number;
  /** 参数信息 */
  Details?: ParamDetail[];
}

/** Range范围 */
declare interface Range {
  /** 最小值 */
  Min?: string;
  /** 最大值 */
  Max?: string;
}

/** 资源信息 */
declare interface ResourceInfo {
  /** 资源名称 */
  SpecName: string;
  /** 资源数 */
  Count: number;
  /** 磁盘信息 */
  DiskSpec: CBSSpecInfo;
  /** 节点类型，cn 或dn */
  Type: string;
}

/** 资源规格 */
declare interface ResourceSpecNew {
  /** 资源名称 */
  SpecName: string;
  /** 资源数 */
  Count: number;
  /** 磁盘信息 */
  DiskSpec: CBSSpec;
  /** 资源类型，DATA */
  Type: string;
}

/** 列表页搜索的标记列表 */
declare interface SearchTags {
  /** 标签的键 */
  TagKey?: string;
  /** 标签的值 */
  TagValue?: string;
  /** 1表示只输入标签的键，没有输入值；0表示输入键时且输入值 */
  AllValue?: number;
}

/** 集群信息 */
declare interface SimpleInstanceInfo {
  /** ID */
  ID?: number;
  /** 集群Id */
  InstanceId?: string;
  /** 集群名字 */
  InstanceName?: string;
  /** 内核版本 */
  Version?: string;
  /** 地域 */
  Region?: string;
  /** 地区 */
  Zone?: string;
  /** 私有网络 */
  UserVPCID?: string;
  /** 子网 */
  UserSubnetID?: string;
  /** 开始时间 */
  CreateTime?: string;
  /** 到期时间 */
  ExpireTime?: string;
  /** 访问地址 */
  AccessInfo?: string;
  /** 自动续费开关，0为不自动续费，1为自动续费 */
  RenewFlag?: number;
  /** 计费方式 */
  ChargeProperties?: ChargeProperties;
  /** 资源集合 */
  Resources?: ResourceInfo[];
  /** 标签列表 */
  Tags?: Tag[];
  /** 集群状态 */
  Status?: number;
}

/** 慢SQL日志 */
declare interface SlowLogDetail {
  /** 花费总时间 */
  TotalTime?: number;
  /** 调用总次数 */
  TotalCallTimes?: number;
  /** 慢SQL */
  NormalQuerys?: NormQueryItem[];
}

/** 标签描述 */
declare interface Tag {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

/** 升级信息 */
declare interface UpgradeItem {
  /** 任务名称 */
  TaskName?: string;
  /** 原有内核版本 */
  SourceVersion?: string;
  /** 目标内核版本 */
  TargetVersion?: string;
  /** 任务创建时间 */
  CreateTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 任务完成状态 */
  Status?: string;
  /** 操作者 */
  OperateUin?: string;
}

/** ValueRange值 */
declare interface ValueRange {
  /** 参数类型，可以为 enum，string，section; 其中enum表示枚举，类似： utf8,latin1,gbk; string表示返回的参数值是字符串; section表示返回的参数值是一个取值范围，类似：[4-8] */
  Type?: string;
  /** type 取section的时候，返回的参数值 */
  Range?: Range;
  /** type 取enum的时候，返回参数值 */
  Enum?: string[];
  /** type 取string的时候，返回的参数值 */
  String?: string;
}

declare interface CreateInstanceByApiRequest {
  /** 实例名称 */
  InstanceName: string;
  /** 可用区 */
  Zone: string;
  /** 私有网络 */
  UserVPCId: string;
  /** 子网 */
  UserSubnetId: string;
  /** 计费方式 */
  ChargeProperties: ChargeProperties;
  /** 集群密码 */
  AdminPassword: string;
  /** 资源信息 */
  Resources: ResourceSpecNew[];
  /** 废弃，用TagItems */
  Tags?: Tag;
  /** 版本 */
  ProductVersion?: string;
  /** 标签列表 */
  TagItems?: Tag[];
}

declare interface CreateInstanceByApiResponse {
  /** 流程ID */
  FlowId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribeAccountsResponse {
  /** 实例总数 */
  TotalCount?: number;
  /** 账号数组 */
  Accounts?: AccountInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBConfigHistoryRequest {
  /** 实例Id */
  InstanceId: string;
  /** 数据库分页 */
  Limit?: number;
  /** 数据库分页 */
  Offset?: number;
}

declare interface DescribeDBConfigHistoryResponse {
  /** 总数 */
  TotalCount?: number;
  /** 历史参数 */
  ConfigHistory?: ConfigHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBParamsRequest {
  /** cn/dn */
  NodeTypes?: string[];
  /** 分页参数，分页步长，默认为10 示例值：10 */
  Limit?: number;
  /** 分页参数，第一页为0，第二页为10 */
  Offset?: number;
  /** InstanceId名称 */
  InstanceId?: string;
}

declare interface DescribeDBParamsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 参数信息 */
  Items?: ParamItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeErrorLogRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 返回数量，默认为20，最大值为2000 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
}

declare interface DescribeErrorLogResponse {
  /** 返回信息总数 */
  TotalCount?: number;
  /** 错误日志详细信息 */
  ErrorLogDetails?: ErrorLogDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceInfoRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceInfoResponse {
  /** 集群描述信息 */
  SimpleInstanceInfo?: SimpleInstanceInfo;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodesRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DescribeInstanceNodesResponse {
  /** error msg */
  ErrorMsg?: string;
  /** 节点列表 */
  InstanceNodes?: InstanceNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceOperationsRequest {
  /** 集群ID */
  InstanceId: string;
  /** 分页参数，偏移量，从0开始 */
  Offset?: number;
  /** 分页参数，每页数目，默认为10 */
  Limit?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface DescribeInstanceOperationsResponse {
  /** 操作记录总数 */
  TotalCount?: number;
  /** 操作记录具体数据 */
  Operations?: InstanceOperation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceResponse {
  /** 实例描述信息 */
  InstanceInfo?: InstanceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceStateRequest {
  /** 集群实例名称 */
  InstanceId: string;
}

declare interface DescribeInstanceStateResponse {
  /** 集群状态，例如：Serving */
  InstanceState?: string;
  /** 集群操作创建时间 */
  FlowCreateTime?: string;
  /** 集群操作名称 */
  FlowName?: string;
  /** 集群操作进度 */
  FlowProgress?: number;
  /** 集群状态描述，例如：运行中 */
  InstanceStateDesc?: string;
  /** 集群流程错误信息，例如：“创建失败，资源不足” */
  FlowMsg?: string;
  /** 当前步骤的名称，例如：”购买资源中“ */
  ProcessName?: string;
  /** 集群备份任务开启状态 */
  BackupStatus?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 用集群id搜索 */
  SearchInstanceId?: string;
  /** 用集群名字搜索 */
  SearchInstanceName?: string;
  /** 分页参数，第一页为0，第二页为10 */
  Offset?: number;
  /** 分页参数，分页步长，默认为10 */
  Limit?: number;
  /** 搜索标签列表 */
  SearchTags?: SearchTags[];
}

declare interface DescribeInstancesResponse {
  /** 实例总数 */
  TotalCount?: number;
  /** 实例数组 */
  InstancesList?: InstanceInfo[] | null;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSimpleInstancesRequest {
  /** 用集群id搜索 */
  SearchInstanceId?: string;
  /** 用集群名字搜索 */
  SearchInstanceName?: string;
  /** 分页参数，第一页为0，第二页为10 */
  Offset?: number;
  /** 分页参数，分页步长，默认为10 */
  Limit?: number;
  /** 用标签列表搜索 */
  SearchTags?: string[];
}

declare interface DescribeSimpleInstancesResponse {
  /** 集群列表总数 */
  TotalCount?: number;
  /** 集群列表详情 */
  InstancesList?: InstanceSimpleInfoNew[];
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 返回数量，默认为20，最大值为2000 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 数据库 */
  Database?: string;
  /** 排序根据 */
  OrderBy?: string;
  /** 升降序 */
  OrderByType?: string;
  /** 过滤时间 */
  Duration?: number;
  /** 执行用户 */
  UserName?: string;
  /** query 语句 */
  QueryString?: string;
}

declare interface DescribeSlowLogResponse {
  /** 返回信息总数 */
  TotalCount?: number;
  /** 慢SQL日志详细信息 */
  SlowLogDetails?: SlowLogDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUpgradeListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 分页参数，偏移量，从0开始 */
  Offset?: number;
  /** 分页参数，每页数目，默认为10 */
  Limit?: number;
}

declare interface DescribeUpgradeListResponse {
  /** 升级记录具体数据 */
  UpgradeItems?: UpgradeItem[] | null;
  /** 升级记录总数 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserHbaConfigRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeUserHbaConfigResponse {
  /** 实例总数 */
  TotalCount?: number;
  /** hba数组 */
  HbaConfigs?: HbaConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyInstanceByApiRequest {
  /** 实例名称，例如"cdwpg-xxxx" */
  InstanceId: string;
}

declare interface DestroyInstanceByApiResponse {
  /** 销毁流程Id */
  FlowId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBParametersRequest {
  /** Instance 名字 */
  InstanceId?: string;
  /** node参数 */
  NodeConfigParams?: NodeConfigParams[];
}

declare interface ModifyDBParametersResponse {
  /** 异步流程Id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 实例Id */
  InstanceId: string;
  /** 新修改的实例名称 */
  InstanceName: string;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserHbaRequest {
  /** 实例ID */
  InstanceId: string;
  /** hba数组 */
  HbaConfigs?: HbaConfig[];
}

declare interface ModifyUserHbaResponse {
  /** 任务id */
  TaskId?: number;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 实例Id */
  InstanceId: string;
  /** 需要修改的用户名 */
  UserName: string;
  /** 新密码 */
  NewPassword: string;
}

declare interface ResetAccountPasswordResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartInstanceRequest {
  /** 实例名称，例如“cdwpg-xxxx" */
  InstanceId: string;
  /** 需要重启的节点类型么，gtm/cn/dn/fn */
  NodeTypes?: string[];
  /** 需要重启的节点编号，指定重启节点 */
  NodeIds?: string[];
}

declare interface RestartInstanceResponse {
  /** 重启实例id */
  FlowId?: number;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutInstanceRequest {
  /** 集群名 */
  InstanceId: string;
  /** 节点类型 */
  NodeType: string;
  /** 扩容节点数量 */
  ScaleOutCount: number;
}

declare interface ScaleOutInstanceResponse {
  /** 流程id */
  FlowId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleUpInstanceRequest {
  /** 集群唯一ID */
  InstanceId: string;
  /** 变更资源类型 */
  Case: string;
  /** 修改的参数 */
  ModifySpec: CNResourceSpec;
  /** 集群名称 */
  InstanceName?: string;
}

declare interface ScaleUpInstanceResponse {
  /** 返回的id */
  FlowId?: number;
  /** 具体错误 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeInstanceRequest {
  /** 集群id */
  InstanceId: string;
  /** 安装包版本 */
  PackageVersion: string;
}

declare interface UpgradeInstanceResponse {
  /** 任务id */
  FlowId?: number;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdwpg 腾讯云数据仓库TCHouse-P} */
declare interface Cdwpg {
  (): Versions;
  /** 创建集群 {@link CreateInstanceByApiRequest} {@link CreateInstanceByApiResponse} */
  CreateInstanceByApi(data: CreateInstanceByApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceByApiResponse>;
  /** 账号管理 {@link DescribeAccountsRequest} {@link DescribeAccountsResponse} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** 查询DB参数操作历史操作 {@link DescribeDBConfigHistoryRequest} {@link DescribeDBConfigHistoryResponse} */
  DescribeDBConfigHistory(data: DescribeDBConfigHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBConfigHistoryResponse>;
  /** 集群配置描述 {@link DescribeDBParamsRequest} {@link DescribeDBParamsResponse} */
  DescribeDBParams(data?: DescribeDBParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBParamsResponse>;
  /** 错误日志 {@link DescribeErrorLogRequest} {@link DescribeErrorLogResponse} */
  DescribeErrorLog(data: DescribeErrorLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeErrorLogResponse>;
  /** 描述云原生实例信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取集群信息 {@link DescribeInstanceInfoRequest} {@link DescribeInstanceInfoResponse} */
  DescribeInstanceInfo(data: DescribeInstanceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceInfoResponse>;
  /** 节点列表 {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 云原生拉取集群操作列表 {@link DescribeInstanceOperationsRequest} {@link DescribeInstanceOperationsResponse} */
  DescribeInstanceOperations(data: DescribeInstanceOperationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceOperationsResponse>;
  /** 获取集群实例状态 {@link DescribeInstanceStateRequest} {@link DescribeInstanceStateResponse} */
  DescribeInstanceState(data: DescribeInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceStateResponse>;
  /** 获取云原生实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取集群精简信息列表 {@link DescribeSimpleInstancesRequest} {@link DescribeSimpleInstancesResponse} */
  DescribeSimpleInstances(data?: DescribeSimpleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSimpleInstancesResponse>;
  /** 慢SQL日志 {@link DescribeSlowLogRequest} {@link DescribeSlowLogResponse} */
  DescribeSlowLog(data: DescribeSlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogResponse>;
  /** 升级记录 {@link DescribeUpgradeListRequest} {@link DescribeUpgradeListResponse} */
  DescribeUpgradeList(data: DescribeUpgradeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUpgradeListResponse>;
  /** 查询用户Hba {@link DescribeUserHbaConfigRequest} {@link DescribeUserHbaConfigResponse} */
  DescribeUserHbaConfig(data: DescribeUserHbaConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserHbaConfigResponse>;
  /** 销毁集群 {@link DestroyInstanceByApiRequest} {@link DestroyInstanceByApiResponse} */
  DestroyInstanceByApi(data: DestroyInstanceByApiRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstanceByApiResponse>;
  /** 集群配置下发 {@link ModifyDBParametersRequest} {@link ModifyDBParametersResponse} */
  ModifyDBParameters(data?: ModifyDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBParametersResponse>;
  /** 修改实例信息 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** 修改用户Hba {@link ModifyUserHbaRequest} {@link ModifyUserHbaResponse} */
  ModifyUserHba(data: ModifyUserHbaRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserHbaResponse>;
  /** 重置密码 {@link ResetAccountPasswordRequest} {@link ResetAccountPasswordResponse} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** 云原生重启实例 {@link RestartInstanceRequest} {@link RestartInstanceResponse} */
  RestartInstance(data: RestartInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartInstanceResponse>;
  /** 水平扩容 {@link ScaleOutInstanceRequest} {@link ScaleOutInstanceResponse} */
  ScaleOutInstance(data: ScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstanceResponse>;
  /** 集群垂直变配 {@link ScaleUpInstanceRequest} {@link ScaleUpInstanceResponse} */
  ScaleUpInstance(data: ScaleUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleUpInstanceResponse>;
  /** 在线升级 {@link UpgradeInstanceRequest} {@link UpgradeInstanceResponse} */
  UpgradeInstance(data: UpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceResponse>;
}

export declare type Versions = ["2020-12-30"];

export default Cdwpg;
