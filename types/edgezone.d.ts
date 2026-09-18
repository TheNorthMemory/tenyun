/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 操作失败的实例信息 */
declare interface FailedInstance {
  /** 实例ID。 */
  InstanceId?: string;
  /** 错误码。 */
  ErrorCode?: string;
  /** 错误信息。 */
  ErrorMessage?: string;
}

/** 描述物理机实例信息 */
declare interface Instance {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 绑定的物理机ID */
  MachineId?: string;
  /** 机型规格 */
  InstanceType?: string;
  /** 可用区代码 */
  Zone?: string;
  /** 镜像ID */
  ImageId?: string;
  /** 镜像版本号 */
  VersionNumber?: string;
  /** 实例状态，可选值：allocating、running、isolating、isolated、terminating、error */
  InstanceStatus?: string;
  /** 操作状态，可选值：normal、starting、stopping、stopped、rebooting */
  OperateStatus?: string;
  /** 私有网络ID */
  PrivateNetworkId?: string;
  /** 私有IPv4地址 */
  PrivateIp?: string;
  /** 私有IPv6地址 */
  PrivateIpV6?: string;
  /** 公网网络ID */
  PublicNetworkId?: string;
  /** 公网IPv4地址 */
  PublicIp?: string;
  /** 公网IPv6地址 */
  PublicIpV6?: string;
  /** 文件系统类型 */
  FileSystemType?: string;
  /** 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string;
  /** 机型族标识 */
  InstanceFamily?: string;
  /** 机型族名称 */
  InstanceFamilyName?: string;
  /** CPU 型号 */
  CpuType?: string;
  /** CPU 核数 */
  Cpu?: number;
  /** 内存大小 */
  Memory?: number;
}

/** 账号在可用区下的机型配额信息，包含可用区、机型详情和配额数量。 */
declare interface InstanceTypeQuota {
  /** 可用区代码。 */
  Zone?: string;
  /** 机型规格。 */
  InstanceType?: string;
  /** 机型家族。 */
  InstanceFamily?: string;
  /** 机型族名称 */
  InstanceFamilyName?: string;
  /** CPU核数。 */
  CpuCores?: number;
  /** CPU类型。 */
  CpuType?: string;
  /** 内存大小（GB）。 */
  MemoryGb?: number;
  /** 系统盘类型。 */
  SystemDiskType?: string;
  /** 系统盘大小（GB）。 */
  SystemDiskSize?: number;
  /** 系统盘数量。 */
  SystemDiskCount?: number;
  /** 数据盘类型。 */
  DataDiskType?: string;
  /** 数据盘大小（GB）。 */
  DataDiskSize?: number;
  /** 数据盘数量。 */
  DataDiskCount?: number;
  /** 第二组数据盘类型 */
  SecondaryDataDiskType?: string;
  /** 第二组数据盘大小(GB) */
  SecondaryDataDiskSize?: number;
  /** 第二组数据盘数量 */
  SecondaryDataDiskCount?: number;
  /** 磁盘描述字符串（向后兼容）。 */
  DiskType?: string;
  /** 网络接口类型。 */
  NetworkInterfaceType?: string;
  /** GPU类型，无GPU时为空字符串。 */
  GpuType?: string;
  /** 配额数量 */
  Quota?: number;
}

/** 公网Ip信息 */
declare interface IpInfo {
  /** 10.100.0.20 */
  Ip?: string;
  /** epn-asdfghjkl */
  NetworkInstanceId?: string;
  /** epm-asdfghjkl */
  InstanceId?: string;
  /** Unbound */
  State?: string;
  /** Ipv4 */
  Type?: string;
  /** 2026-04-07T00:00:00 */
  CreatedAt?: string;
  /** 2026-04-07T00:00:00 */
  UpdatedAt?: string;
}

/** 私网实例信息 */
declare interface PrivateNetworkInstanceInfo {
  /** 私网实例ID */
  NetworkInstanceId?: string;
  /** 私网实例名称 */
  NetworkInstanceName?: string;
  /** 可用区ID */
  ZoneId?: string;
  /** 网络地址 */
  Network?: string;
  /** 网络掩码 */
  Mask?: number;
  /** 关联物理机数量 */
  ServerCount?: number;
  /** 可用Ip数量 */
  AvailableIpCount?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
}

/** 公网实例信息，包含实例ID、可用区ID、实例名称、线路、路由模式等信息 */
declare interface PublicNetworkInstanceInfo {
  /** 公网实例ID */
  NetworkInstanceId?: string;
  /** 可用区ID */
  ZoneId?: string;
  /** 公网实例名称 */
  NetworkInstanceName?: string | null;
  /** 带宽，单位Mbps */
  Bandwidth?: number | null;
  /** 线路信息 */
  Line?: string;
  /** 路由模式，枚举值：STATIC、BGP、OSPF */
  RouteMode?: string;
  /** 关联的物理服务器数量 */
  ServerCount?: number;
  /** 已申请的Ipv4数量 */
  Ipv4Count?: number;
  /** 已申请的Ipv6数量 */
  Ipv6Count?: number;
  /** 关联的Ipv4网段 */
  Ipv4CidrSet?: PublicNetworkSegment[] | null;
  /** 关联的Ipv6网段 */
  Ipv6CidrSet?: PublicNetworkSegment[] | null;
  /** 公网实例创建时间 */
  CreatedAt?: string;
  /** 公网实例修改时间 */
  UpdatedAt?: string;
}

/** 公网网段信息，包含网段cidr和网关ip */
declare interface PublicNetworkSegment {
  /** 网段Cidr */
  Cidr?: string;
  /** 网关Ip */
  Gateway?: string;
}

/** 交换机数据 */
declare interface SwitchData {
  /** UTC时间 */
  Time?: string;
  /** 统计值 */
  Value?: number;
}

/** 跨地域聚合后的可用区信息。 */
declare interface ZoneInfo {
  /** 可用区ID。 */
  ZoneId?: number;
  /** 可用区代码。 */
  Zone?: string;
  /** 可用区中文名称。 */
  ZoneName?: string;
  /** 可用区英文名称。 */
  ZoneNameEn?: string;
  /** 地域代码。 */
  Region?: string;
  /** 区域代码。 */
  Location?: string;
  /** 区域名称。 */
  LocationName?: string;
}

declare interface ApplyPublicIpsRequest {
  /** 公网实例 ID（路由发布模式必须为 STATIC ） */
  NetworkInstanceId: string;
  /** 申请Ip数量，最小为 1 */
  Count: number;
  /** 申请的Ip类型，枚举值：ipv4、ipv6 */
  Type: string;
}

declare interface ApplyPublicIpsResponse {
  /** 分配的公网 IP 地址列表 */
  IpList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdgeNodeServiceRequest {
  /** 可用区代码，如 ap-guangzhou-1。 */
  Zone: string;
}

declare interface CreateEdgeNodeServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstancesRequest {
  /** 可用区代码，如 ap-guangzhou-1。 */
  Zone: string;
  /** 机型规格，如 BMS5.MEDIUM8。 */
  InstanceType: string;
  /** 内网网络实例ID，格式如 net-xxx。 */
  PrivateNetworkId: string;
  /** 公网网络实例ID，格式如 net-xxx。 */
  PublicNetworkId: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 镜像ID，如 img-centos-7.9。 */
  ImageId?: string;
  /** 创建数量，默认1，最大50。 */
  InstanceCount?: number;
  /** 登录密码，与SSHKey二选一 */
  Password?: string;
  /** SSH密钥公钥字符串，与Password二选一 */
  SSHKey?: string;
  /** 镜像版本号，仅公共镜像有版本概念。 */
  VersionNumber?: string;
  /** 是否启用公网IPv6，默认false。启用后系统会在分配IPv4后额外分配一个IPv6地址。 */
  EnableIpv6?: boolean;
}

declare interface CreateInstancesResponse {
  /** 创建成功的实例ID列表。 */
  InstanceIdSet?: string[];
  /** 创建失败的实例个数。仅部分失败时返回，全部成功时不返回该字段。 */
  FailedCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateNetworkInstanceRequest {
  /** 新实例名称 */
  NetworkInstanceName: string;
  /** 可用区ID */
  ZoneId: string;
  /** 网络地址（host 位必须全为 0），必须落在以下 RFC 1918 私有范围之一：`10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16` */
  Network: string;
  /** 掩码位数，上限统一为 `28`，下限随所属私有段而定：`10.0.0.0/8` 允许 `8~28`，`172.16.0.0/12` 允许 `12~28`，`192.168.0.0/16` 允许 `16~28`；需与 Network 共同构成合法网络地址（host 位全为 0） */
  Mask: number;
}

declare interface CreatePrivateNetworkInstanceResponse {
  /** 私网实例ID */
  NetworkInstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePublicNetworkInstanceRequest {
  /** 可用区 */
  ZoneId: string;
  /** 公网实例名称 */
  NetworkInstanceName: string;
  /** 网络线路 */
  Line: string;
  /** 路由模式 */
  RouteMode: string;
  /** 公网带宽（Mbps） */
  Bandwidth?: number;
  /** BGP AS号 */
  BgpAsNumber?: number;
  /** BGP认证密码 */
  BgpPassword?: string;
  /** 公网实例类型枚举值：standard： 标准型(默认)custom： 自定义型(暂不支持创建) */
  InstanceType?: string;
}

declare interface CreatePublicNetworkInstanceResponse {
  /** 公网实例 ID */
  NetworkInstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateNetworkInstanceRequest {
  /** 私网实例Id */
  NetworkInstanceId: string;
}

declare interface DeletePrivateNetworkInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePublicNetworkInstanceRequest {
  /** 公网实例 ID */
  NetworkInstanceId: string;
}

declare interface DeletePublicNetworkInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceTypesRequest {
  /** 可用区代码，如 ap-guangzhou-1；不传则返回账号下所有可用区的机型。 */
  Zone?: string;
  /** 分页偏移量,默认0 */
  Offset?: number;
  /** 分页大小，默认20，最大100 */
  Limit?: number;
}

declare interface DescribeInstanceTypesResponse {
  /** 机型配额列表。 */
  InstanceTypeQuotaSet?: InstanceTypeQuota[];
  /** 返回记录数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 实例ID列表，用于按实例ID筛选 */
  InstanceIds?: string[];
  /** 实例名称，支持模糊匹配 */
  InstanceName?: string;
  /** 可用区代码，用于筛选指定可用区的实例 */
  Zone?: string;
  /** 实例状态列表，用于按状态筛选实例。可选值：allocating、running、isolating、isolated、terminating、error */
  InstanceStatus?: string[];
  /** 公网网络ID */
  PublicNetworkId?: string;
  /** 私有网络ID */
  PrivateNetworkId?: string;
  /** 公网IPv4地址列表，用于按公网IP筛选实例 */
  PublicIps?: string[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20，最大100 */
  Limit?: number;
}

declare interface DescribeInstancesResponse {
  /** 实例详细信息列表 */
  InstanceSet?: Instance[];
  /** 符合条件的实例数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateNetworkInstancesRequest {
  /** 私网实例Id */
  NetworkInstanceId?: string;
  /** 新实例名称 */
  NetworkInstanceName?: string;
  /** 可用区ID */
  ZoneId?: string;
  /** 分页偏移量，默认0 */
  Offset?: number;
  /** 每页数量，默认 20，最大 100 */
  Limit?: number;
}

declare interface DescribePrivateNetworkInstancesResponse {
  /** 私网实例总数 */
  TotalCount?: number;
  /** 私网实例集合 */
  PrivateNetworkInstanceSet?: PrivateNetworkInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicIpsRequest {
  /** 按公网实例 ID 过滤（子串匹配，多个值取并集） */
  NetworkInstanceId?: string[];
  /** 按可用区/机房过滤 */
  ZoneId?: string;
  /** 按 IP 过滤（子串匹配，多个值取并集） */
  Ip?: string[];
  /** 按状态过滤，可选值：`InUse`、`Unbound`（多个值取并集） */
  State?: string[];
  /** 按 IP 版本过滤，可选值：`Ipv4`、`Ipv6`（多个值取并集） */
  Type?: string[];
  /** 按创建时间排序，可选值：`asc`、`desc`（默认 `desc`） */
  OrderByCreateTime?: string;
  /** 按更新时间排序，可选值：`asc`、`desc`（优先级高于创建时间排序） */
  OrderByUpdateTime?: string;
  /** 分页偏移量，默认 0 */
  Offset?: number;
  /** 每页数量，默认 20，最大 100 */
  Limit?: number;
}

declare interface DescribePublicIpsResponse {
  /** 公网Ip总数 */
  TotalCount?: number;
  /** 分配的公网 IP 地址列表 */
  IpInfoSet?: IpInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicNetworkInstancesRequest {
  /** 公网实例ID */
  NetworkInstanceId?: string;
  /** 公网实例名称 */
  NetworkInstanceName?: string;
  /** 可用区Id */
  ZoneId?: string;
  /** 分页偏移量，默认 0 */
  Offset?: number;
  /** 每页数量，默认 20，最大 100 */
  Limit?: number;
}

declare interface DescribePublicNetworkInstancesResponse {
  /** 公网实例总数 */
  TotalCount?: number;
  /** 公网实例集合 */
  PublicNetworkInstanceSet?: PublicNetworkInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZoneDataRequest {
  /** 区id */
  Zone: string;
  /** 指标名(inbw:入带宽，outbw:出带宽) */
  MetricName: string;
  /** 开始时间（UTC时间:0时区） */
  StartTime: string;
  /** 结束时间（UTC时间:0时区）,最多查询2天时间 */
  EndTime: string;
}

declare interface DescribeZoneDataResponse {
  /** 统计数据,指标inbw|outbw单位为Mbps */
  Data?: SwitchData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
}

declare interface DescribeZonesResponse {
  /** 所有地域的可用区列表。 */
  ZoneSet?: ZoneInfo[];
  /** 可用区总数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceAttributeRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 新的实例名称，1-60字符。与 NewPublicIp 至少传入一个。 */
  InstanceName?: string;
  /** 新的公网IP（需从该实例所绑定公网实例的可用IP中选择）。与 InstanceName 至少传入一个。 */
  NewPublicIp?: string;
  /** IP类型，ipv4 或 ipv6，默认 ipv4。仅在指定 NewPublicIp 时有效。 */
  IpType?: string;
}

declare interface ModifyInstanceAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateNetworkInstanceRequest {
  /** 私网实例Id */
  NetworkInstanceId: string;
  /** 新实例名称 */
  NetworkInstanceName: string;
}

declare interface ModifyPrivateNetworkInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPublicNetworkInstanceRequest {
  /** 公网实例 ID */
  NetworkInstanceId: string;
  /** 新实例名称 */
  NetworkInstanceName: string;
}

declare interface ModifyPublicNetworkInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleasePublicIpRequest {
  /** 公网实例 ID（路由发布模式为 STATIC ） */
  NetworkInstanceId: string;
  /** 待释放的Ip类型，枚举值：ipv4、ipv6 */
  Type: string;
  /** 待释放的 Ip 地址列表 */
  IpList: string[];
}

declare interface ReleasePublicIpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateInstancesRequest {
  /** 实例ID列表，最多100个。 */
  InstanceIds: string[];
}

declare interface TerminateInstancesResponse {
  /** 销毁成功的实例ID列表。 */
  InstanceIdSet?: string[];
  /** 销毁失败的实例信息列表（部分成功时返回）。 */
  FailedInstanceSet?: FailedInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Edgezone 边缘可用区} */
declare interface Edgezone {
  (): Versions;
  /** 申请公网 IP {@link ApplyPublicIpsRequest} {@link ApplyPublicIpsResponse} */
  ApplyPublicIps(data: ApplyPublicIpsRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyPublicIpsResponse>;
  /** 开通边缘节点计费服务 {@link CreateEdgeNodeServiceRequest} {@link CreateEdgeNodeServiceResponse} */
  CreateEdgeNodeService(data: CreateEdgeNodeServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeNodeServiceResponse>;
  /** 创建物理机实例 {@link CreateInstancesRequest} {@link CreateInstancesResponse} */
  CreateInstances(data: CreateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancesResponse>;
  /** 创建私网实例 {@link CreatePrivateNetworkInstanceRequest} {@link CreatePrivateNetworkInstanceResponse} */
  CreatePrivateNetworkInstance(data: CreatePrivateNetworkInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateNetworkInstanceResponse>;
  /** 创建公网实例 {@link CreatePublicNetworkInstanceRequest} {@link CreatePublicNetworkInstanceResponse} */
  CreatePublicNetworkInstance(data: CreatePublicNetworkInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePublicNetworkInstanceResponse>;
  /** 删除私网实例 {@link DeletePrivateNetworkInstanceRequest} {@link DeletePrivateNetworkInstanceResponse} */
  DeletePrivateNetworkInstance(data: DeletePrivateNetworkInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateNetworkInstanceResponse>;
  /** 删除公网实例 {@link DeletePublicNetworkInstanceRequest} {@link DeletePublicNetworkInstanceResponse} */
  DeletePublicNetworkInstance(data: DeletePublicNetworkInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePublicNetworkInstanceResponse>;
  /** 查询物理机机型 {@link DescribeInstanceTypesRequest} {@link DescribeInstanceTypesResponse} */
  DescribeInstanceTypes(data?: DescribeInstanceTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTypesResponse>;
  /** 查询物理机实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询私网实例 {@link DescribePrivateNetworkInstancesRequest} {@link DescribePrivateNetworkInstancesResponse} */
  DescribePrivateNetworkInstances(data?: DescribePrivateNetworkInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateNetworkInstancesResponse>;
  /** 查询公网IP列表 {@link DescribePublicIpsRequest} {@link DescribePublicIpsResponse} */
  DescribePublicIps(data?: DescribePublicIpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicIpsResponse>;
  /** 查询公网实例列表 {@link DescribePublicNetworkInstancesRequest} {@link DescribePublicNetworkInstancesResponse} */
  DescribePublicNetworkInstances(data?: DescribePublicNetworkInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicNetworkInstancesResponse>;
  /** 查询可用区机房指标数据 {@link DescribeZoneDataRequest} {@link DescribeZoneDataResponse} */
  DescribeZoneData(data: DescribeZoneDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneDataResponse>;
  /** 查询所有地域可用区列表 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 修改实例属性 {@link ModifyInstanceAttributeRequest} {@link ModifyInstanceAttributeResponse} */
  ModifyInstanceAttribute(data: ModifyInstanceAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceAttributeResponse>;
  /** 修改私网实例 {@link ModifyPrivateNetworkInstanceRequest} {@link ModifyPrivateNetworkInstanceResponse} */
  ModifyPrivateNetworkInstance(data: ModifyPrivateNetworkInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateNetworkInstanceResponse>;
  /** 修改公网实例 {@link ModifyPublicNetworkInstanceRequest} {@link ModifyPublicNetworkInstanceResponse} */
  ModifyPublicNetworkInstance(data: ModifyPublicNetworkInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPublicNetworkInstanceResponse>;
  /** 释放公网 IP {@link ReleasePublicIpRequest} {@link ReleasePublicIpResponse} */
  ReleasePublicIp(data: ReleasePublicIpRequest, config?: AxiosRequestConfig): AxiosPromise<ReleasePublicIpResponse>;
  /** 销毁实例 {@link TerminateInstancesRequest} {@link TerminateInstancesResponse} */
  TerminateInstances(data: TerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstancesResponse>;
}

export declare type Versions = ["2026-04-01"];

export default Edgezone;
