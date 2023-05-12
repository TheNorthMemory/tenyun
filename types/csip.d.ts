/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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

/** 列表查询接口采用新filter 接口，直接传给后台供后台查询过滤 */
declare interface Filter {
  /** 查询数量限制 */
  Limit?: number | null;
  /** 查询偏移位置 */
  Offset?: number | null;
  /** 需排序的字段 */
  Order?: string | null;
  /** 排序采用升序还是降序 升:asc 降 desc */
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

/** 扫描任务详情 */
declare interface ScanTaskInfo {
  /** 任务日志Id */
  TaskId: string | null;
  /** 任务日志名称 */
  TaskName: string | null;
  /** 任务状态码：1等待开始 2正在扫描 3扫描出错 4扫描完成 */
  Status: number | null;
  /** 任务进度 */
  Progress: number | null;
  /** 对应的展示时间 */
  TaskTime: string | null;
  /** 报表id */
  ReportId: string | null;
  /** 报表名称 */
  ReportName: string | null;
  /** 扫描计划，0-周期任务,1-立即扫描,2-定时扫描,3-自定义 */
  ScanPlan: number | null;
  /** 关联的资产数 */
  AssetCount: number | null;
  /** APP ID */
  AppId?: string | null;
  /** 用户主账户ID */
  UIN?: string | null;
  /** 用户名称 */
  UserName?: string | null;
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
}

/** 标签 */
declare interface Tag {
  /** 标签名称 */
  Name: string;
  /** 标签内容 */
  Value: string;
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
}

/** 过滤条件 */
declare interface WhereFilter {
  /** 过滤的项 */
  Name: string | null;
  /** 过滤的值 */
  Values: string[] | null;
  /** 精确匹配填 7 模糊匹配填9 ， 兼容 中台定的结构 */
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
  /** - */
  Filter?: Filter;
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanReportListRequest {
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

/** {@link Csip 云安全一体化平台} */
declare interface Csip {
  (): Versions;
  /** csip角色授权绑定接口 {@link AddNewBindRoleUserRequest} {@link AddNewBindRoleUserResponse} */
  AddNewBindRoleUser(data?: AddNewBindRoleUserRequest, config?: AxiosRequestConfig): AxiosPromise<AddNewBindRoleUserResponse>;
  /** cvm详情 {@link DescribeCVMAssetInfoRequest} {@link DescribeCVMAssetInfoResponse} */
  DescribeCVMAssetInfo(data: DescribeCVMAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetInfoResponse>;
  /** cvm列表 {@link DescribeCVMAssetsRequest} {@link DescribeCVMAssetsResponse} */
  DescribeCVMAssets(data?: DescribeCVMAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCVMAssetsResponse>;
  /** db资产详情 {@link DescribeDbAssetInfoRequest} {@link DescribeDbAssetInfoResponse} */
  DescribeDbAssetInfo(data: DescribeDbAssetInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetInfoResponse>;
  /** 资产列表 {@link DescribeDbAssetsRequest} {@link DescribeDbAssetsResponse} */
  DescribeDbAssets(data?: DescribeDbAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbAssetsResponse>;
  /** 获取扫描报告列表 {@link DescribeScanReportListRequest} {@link DescribeScanReportListResponse} */
  DescribeScanReportList(data?: DescribeScanReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanReportListResponse>;
  /** 子网列表 {@link DescribeSubnetAssetsRequest} {@link DescribeSubnetAssetsResponse} */
  DescribeSubnetAssets(data?: DescribeSubnetAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetAssetsResponse>;
  /** vpc列表 {@link DescribeVpcAssetsRequest} {@link DescribeVpcAssetsResponse} */
  DescribeVpcAssets(data?: DescribeVpcAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcAssetsResponse>;
}

export declare type Versions = ["2022-11-21"];

export default Csip;
