/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 购买的cbs信息 */
declare interface CbsInfo {
  /** cbs存储大小，单位TB */
  Size: number;
  /** cbs存储类型，默认为SSD */
  Type: string;
}

/** CDC集群内cos的容量信息 */
declare interface CosCapacity {
  /** 已购cos的总容量大小，单位GB */
  TotalCapacity: number;
  /** 剩余可用cos的容量大小，单位GB */
  TotalFreeCapacity: number;
  /** 已用cos的容量大小，单位GB */
  TotalUsedCapacity: number;
}

/** 用于购买页面添加cos信息 */
declare interface CosInfo {
  /** COS存储大小，单位TB */
  Size: number;
  /** COS存储类型，默认为cos */
  Type: string;
}

/** 专用集群列表 */
declare interface DedicatedCluster {
  /** 专用集群id。如"cluster-xxxxx"。 */
  DedicatedClusterId: string;
  /** 专用集群所属可用区名称。 */
  Zone: string;
  /** 专用集群的描述。 */
  Description: string | null;
  /** 专用集群的名称。 */
  Name: string;
  /** 专用集群的生命周期。如"PENDING"。 */
  LifecycleStatus: string;
  /** 专用集群的创建时间。 */
  CreateTime: string;
  /** 专用集群所属的站点id。 */
  SiteId: string;
}

/** 专用宿主机支持的实例规格列表 */
declare interface DedicatedClusterInstanceType {
  /** 可用区 */
  Zone: string;
  /** 规格名称 */
  InstanceType: string;
  /** 网卡类型，例如：25代表25G网卡 */
  NetworkCard: number;
  /** 实例的CPU核数，单位：核。 */
  Cpu: number;
  /** 实例内存容量，单位：`GB`。 */
  Memory: number;
  /** 实例机型系列。 */
  InstanceFamily: string;
  /** 机型名称。 */
  TypeName: string;
  /** 本地存储块数量。 */
  StorageBlockAmount: number;
  /** 内网带宽，单位Gbps。 */
  InstanceBandwidth: number;
  /** 网络收发包能力，单位万PPS。 */
  InstancePps: number;
  /** 处理器型号。 */
  CpuType: string;
  /** 实例的GPU数量。 */
  Gpu: number;
  /** 实例的FPGA数量。 */
  Fpga: number;
  /** 机型描述 */
  Remark: string;
  /** 实例是否售卖。取值范围： SELL：表示实例可购买SOLD_OUT：表示实例已售罄。 */
  Status: string;
}

/** 专用集群订单 */
declare interface DedicatedClusterOrder {
  /** 专用集群id */
  DedicatedClusterId: string;
  /** 专用集群类型id（移到下一层级，已经废弃，后续将删除） */
  DedicatedClusterTypeId: string;
  /** 支持的存储类型列表（移到下一层级，已经废弃，后续将删除） */
  SupportedStorageType: string[];
  /** 支持的上连交换机的链路传输速率(GiB)（移到下一层级，已经废弃，后续将删除） */
  SupportedUplinkSpeed: number[];
  /** 支持的实例族列表（移到下一层级，已经废弃，后续将删除） */
  SupportedInstanceFamily: string[];
  /** 地板承重要求(KG) */
  Weight: number;
  /** 功率要求(KW) */
  PowerDraw: number;
  /** 订单状态 */
  OrderStatus: string;
  /** 订单创建的时间 */
  CreateTime: string;
  /** 大订单ID */
  DedicatedClusterOrderId: string;
  /** 订单类型，创建CREATE或扩容EXTEND */
  Action: string;
  /** 子订单详情列表 */
  DedicatedClusterOrderItems: DedicatedClusterOrderItem[] | null;
  /** cpu值 */
  Cpu: number | null;
  /** mem值 */
  Mem: number | null;
  /** gpu值 */
  Gpu: number | null;
  /** 0代表未支付，1代表已支付 */
  PayStatus: number | null;
  /** 支付方式，一次性、按月、按年 */
  PayType: string | null;
  /** 购买时长的单位 */
  TimeUnit: string | null;
  /** 购买时长 */
  TimeSpan: number | null;
  /** 订单类型 */
  OrderType: string | null;
}

/** 专用集群子订单 */
declare interface DedicatedClusterOrderItem {
  /** 专用集群类型id */
  DedicatedClusterTypeId: string;
  /** 支持的存储类型列表 */
  SupportedStorageType: string[];
  /** 支持的上连交换机的链路传输速率(GiB) */
  SupportedUplinkSpeed: number[];
  /** 支持的实例族列表 */
  SupportedInstanceFamily: string[];
  /** 地板承重要求(KG) */
  Weight: number;
  /** 功率要求(KW) */
  PowerDraw: number;
  /** 订单状态 */
  SubOrderStatus: string;
  /** 订单创建的时间 */
  CreateTime: string;
  /** 子订单ID */
  SubOrderId: string;
  /** 关联的集群规格数量 */
  Count: number;
  /** 规格简单描述 */
  Name: string;
  /** 规格详细描述 */
  Description: string;
  /** CPU数 */
  TotalCpu: number;
  /** 内存数 */
  TotalMem: number;
  /** GPU数 */
  TotalGpu: number;
  /** 规格英文名 */
  TypeName: string;
  /** 规格展示 */
  ComputeFormat: string | null;
  /** 规格类型 */
  TypeFamily: string | null;
  /** 0未支付，1已支付 */
  SubOrderPayStatus: number | null;
}

/** 专用集群配置 */
declare interface DedicatedClusterType {
  /** 配置id */
  DedicatedClusterTypeId: string;
  /** 配置描述，对应描述 */
  Description: string | null;
  /** 配置名称，对应计算资源类型 */
  Name: string;
  /** 创建配置的时间 */
  CreateTime: string;
  /** 支持的存储类型列表 */
  SupportedStorageType: string[];
  /** 支持的上连交换机的链路传输速率 */
  SupportedUplinkGiB: number[];
  /** 支持的实例族列表 */
  SupportedInstanceFamily: string[];
  /** 地板承重要求(KG) */
  Weight: number;
  /** 功率要求(KW) */
  PowerDrawKva: number;
  /** 显示计算资源规格详情，存储等资源不显示；对应规格 */
  ComputeFormatDesc: string;
}

/** DedicatedClusterType => (Id, Count) */
declare interface DedicatedClusterTypeInfo {
  /** 集群类型Id */
  Id: string;
  /** 集群类型个数 */
  Count: number;
}

/** CDC宿主机的详细信息 */
declare interface HostInfo {
  /** 宿主机IP */
  HostIp: string;
  /** 云服务类型 */
  ServiceType: string;
  /** 宿主机运行状态 */
  HostStatus: string;
  /** 宿主机类型 */
  HostType: string;
  /** cpu可用数 */
  CpuAvailable: number;
  /** cpu总数 */
  CpuTotal: number;
  /** 内存可用数 */
  MemAvailable: number;
  /** 内存总数 */
  MemTotal: number;
  /** 运行时间 */
  RunTime: string;
  /** 到期时间 */
  ExpireTime: string;
  /** 宿主机id */
  HostId: string | null;
}

/** CDC集群内宿主机的统计信息 */
declare interface HostStatistic {
  /** 宿主机规格 */
  HostType: string;
  /** 宿主机机型系列 */
  HostFamily: string;
  /** 宿主机的CPU核数，单位：核 */
  Cpu: number;
  /** 宿主机内存大小，单位：GB */
  Memory: number;
  /** 该规格宿主机的数量 */
  Count: number;
}

/** 入带宽数据 */
declare interface InBandwidth {
  /** 时间戳 */
  Timestamps: number[] | null;
  /** 时间对应的值 */
  Values: number[] | null;
}

/** 本地网络信息 */
declare interface LocalNetInfo {
  /** 协议 */
  Protocol: string | null;
  /** 网络id */
  VpcId: string | null;
  /** 路由信息 */
  BGPRoute: string | null;
  /** 本地IP */
  LocalIp: string | null;
}

/** 出带宽数据。 */
declare interface OutBandwidth {
  /** 时间戳 */
  Timestamps: number[] | null;
  /** 对应时间的值 */
  Values: number[] | null;
}

/** RegionZoneInfo信息 */
declare interface RegionZoneInfo {
  /** Region id */
  RegionId: number;
  /** ZoneInfo数组 */
  Zones: ZoneInfo[];
}

/** 客户站点信息 */
declare interface Site {
  /** 站点名称 */
  Name: string;
  /** 站点id */
  SiteId: string;
  /** 站点描述 */
  Description: string | null;
  /** 站点创建时间 */
  CreateTime: string;
}

/** 站点详情 */
declare interface SiteDetail {
  /** 站点id */
  SiteId: string;
  /** 站点名称 */
  Name: string;
  /** 站点描述 */
  Description: string;
  /** 站点创建时间 */
  CreateTime: string;
  /** 光纤类型 */
  FiberType: string;
  /** 网络到腾讯云Region区域的上行链路速度 */
  UplinkSpeedGbps: number;
  /** 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。 */
  UplinkCount: number;
  /** 将CDC连接到网络时采用的光学标准 */
  OpticalStandard: string;
  /** 是否提供冗余的上游设备(交换机或路由器)，以便两台 网络设备都能连接到网络设备。 */
  RedundantNetworking: boolean;
  /** 电源连接器类型 */
  PowerConnectors: string;
  /** 从机架上方还是下方供电。 */
  PowerFeedDrop: string;
  /** 功耗(KW) */
  PowerDrawKva: number;
  /** 是否满足下面环境条件：1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。2、确定的机架位置包含:温度范围为 41 到 104°F (5 到 40°C)。湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。 */
  ConditionRequirement: boolean;
  /** 是否满足下面的尺寸条件：您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。 */
  DimensionRequirement: boolean;
  /** 最大承重(KG) */
  MaxWeight: number;
  /** 站点地址 */
  AddressLine: string;
  /** 站点所在地区的详细地址信息（补充） */
  OptionalAddressLine: string;
  /** 是否需要腾讯云团队协助完成机架支撑工作 */
  NeedHelp: boolean;
  /** 上游断路器是否具备 */
  BreakerRequirement: boolean;
  /** 是否电源冗余 */
  RedundantPower: boolean;
  /** 站点所在国家 */
  Country: string;
  /** 站点所在省份 */
  Province: string;
  /** 站点所在城市 */
  City: string;
  /** 站点所在地区的邮编 */
  PostalCode: number;
}

/** VPN网关的流量监控数据。 */
declare interface VpngwBandwidthData {
  /** 出带宽流量 */
  OutBandwidth: OutBandwidth | null;
  /** 入带宽流量 */
  InBandwidth: InBandwidth;
}

/** 可用区信息 */
declare interface ZoneInfo {
  /** 可用区名称 */
  Zone: string;
  /** 可用区描述 */
  ZoneName: string;
  /** 可用区ID */
  ZoneId: number;
  /** 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。 */
  ZoneState: string;
}

declare interface CreateDedicatedClusterOrderRequest {
  /** 专用集群id */
  DedicatedClusterId: string;
  /** order关联的专用集群类型数组 */
  DedicatedClusterTypes?: DedicatedClusterTypeInfo[];
  /** order关联的cos存储信息 */
  CosInfo?: CosInfo;
  /** order关联的cbs存储信息 */
  CbsInfo?: CbsInfo;
  /** 购买来源，默认为cloudApi */
  PurchaseSource?: string;
  /** 当调用API接口提交订单时，需要提交DedicatedClusterOrderId */
  DedicatedClusterOrderId?: string;
}

declare interface CreateDedicatedClusterOrderResponse {
  /** 专用集群订单id */
  DedicatedClusterOrderId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDedicatedClusterRequest {
  /** 专用集群所属的SiteId */
  SiteId: string;
  /** 专用集群的名称 */
  Name: string;
  /** 专用集群所属的可用区 */
  Zone: string;
  /** 专用集群的描述 */
  Description?: string;
}

declare interface CreateDedicatedClusterResponse {
  /** 创建的专用集群id */
  DedicatedClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSiteRequest {
  /** 站点名称 */
  Name: string;
  /** 站点所在国家 */
  Country: string;
  /** 站点所在省份 */
  Province: string;
  /** 站点所在城市 */
  City: string;
  /** 站点所在地区的详细地址信息 */
  AddressLine: string;
  /** 站点描述 */
  Description?: string;
  /** 注意事项 */
  Note?: string;
  /** 您将使用光纤类型将CDC设备连接到网络。有单模和多模两种选项。 */
  FiberType?: string;
  /** 您将CDC连接到网络时采用的光学标准。此字段取决于上行链路速度、光纤类型和到上游设备的距离。 */
  OpticalStandard?: string;
  /** 电源连接器类型 */
  PowerConnectors?: string;
  /** 从机架上方还是下方供电。 */
  PowerFeedDrop?: string;
  /** 最大承重(KG) */
  MaxWeight?: number;
  /** 功耗(KW) */
  PowerDrawKva?: number;
  /** 网络到腾讯云Region区域的上行链路速度 */
  UplinkSpeedGbps?: number;
  /** 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。 */
  UplinkCount?: number;
  /** 是否满足下面环境条件：1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。2、确定的机架位置包含:温度范围为 41 到 104°F (5 到 40°C)。湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。 */
  ConditionRequirement?: boolean;
  /** 是否满足下面的尺寸条件：您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。 */
  DimensionRequirement?: boolean;
  /** 是否提供冗余的上游设备(交换机或路由器)，以便两台 网络设备都能连接到网络设备。 */
  RedundantNetworking?: boolean;
  /** 站点所在地区的邮编 */
  PostalCode?: number;
  /** 站点所在地区的详细地址信息（补充） */
  OptionalAddressLine?: string;
  /** 是否需要腾讯云团队协助完成机架支撑工作 */
  NeedHelp?: boolean;
  /** 是否电源冗余 */
  RedundantPower?: boolean;
  /** 上游断路器是否具备 */
  BreakerRequirement?: boolean;
}

declare interface CreateSiteResponse {
  /** 创建Site生成的id */
  SiteId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDedicatedClustersRequest {
  /** 要删除的专用集群id */
  DedicatedClusterIds: string[];
}

declare interface DeleteDedicatedClustersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSitesRequest {
  /** 要删除的站点id列表 */
  SiteIds: string[];
}

declare interface DeleteSitesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClusterCosCapacityRequest {
  /** 查询的专用集群id */
  DedicatedClusterId: string;
}

declare interface DescribeDedicatedClusterCosCapacityResponse {
  /** 本集群内cos容量信息，单位：‘GB’ */
  CosCapacity?: CosCapacity;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClusterHostStatisticsRequest {
  /** 查询的专用集群id */
  DedicatedClusterId: string;
}

declare interface DescribeDedicatedClusterHostStatisticsResponse {
  /** 该集群内宿主机的统计信息列表 */
  HostStatisticSet?: HostStatistic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClusterHostsRequest {
  /** 集群id */
  DedicatedClusterId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20 */
  Limit?: number;
}

declare interface DescribeDedicatedClusterHostsResponse {
  /** 宿主机信息 */
  HostInfoSet: HostInfo[] | null;
  /** 宿主机总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClusterInstanceTypesRequest {
  /** 查询的专用集群id */
  DedicatedClusterId: string;
}

declare interface DescribeDedicatedClusterInstanceTypesResponse {
  /** 支持的实例规格列表 */
  DedicatedClusterInstanceTypeSet?: DedicatedClusterInstanceType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClusterOrdersRequest {
  /** 按照专用集群id过滤 */
  DedicatedClusterIds?: string[];
  /** 按照专用集群订单id过滤 */
  DedicatedClusterOrderIds?: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 订单状态为过滤条件：PENDING INCONSTRUCTION DELIVERING DELIVERED EXPIRED CANCELLED OFFLINE */
  Status?: string;
  /** 订单类型为过滤条件：CREATE EXTEND */
  ActionType?: string;
}

declare interface DescribeDedicatedClusterOrdersResponse {
  /** 专用集群订单列表 */
  DedicatedClusterOrderSet?: DedicatedClusterOrder[];
  /** 符合条件的专用集群订单总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClusterOverviewRequest {
  /** 集群id */
  DedicatedClusterId: string;
}

declare interface DescribeDedicatedClusterOverviewResponse {
  /** 云服务器数量 */
  CvmCount: number;
  /** 宿主机数量 */
  HostCount: number;
  /** vpn通道状态 */
  VpnConnectionState: string | null;
  /** vpn网关监控数据 */
  VpngwBandwidthData: VpngwBandwidthData | null;
  /** 本地网关信息 */
  LocalNetInfo: LocalNetInfo | null;
  /** vpn网关通道监控数据 */
  VpnConnectionBandwidthData: VpngwBandwidthData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClusterTypesRequest {
  /** 模糊匹配专用集群配置名称 */
  Name?: string;
  /** 待查询的专用集群配置id列表 */
  DedicatedClusterTypeIds?: string[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 是否只查询计算规格类型 */
  IsCompute?: boolean;
}

declare interface DescribeDedicatedClusterTypesResponse {
  /** 专用集群配置列表 */
  DedicatedClusterTypeSet: DedicatedClusterType[];
  /** 符合条件的个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedClustersRequest {
  /** 按照一个或者多个实例ID查询。实例ID形如：`cluster-xxxxxxxx` */
  DedicatedClusterIds?: string[];
  /** 按照可用区名称过滤 */
  Zones?: string[];
  /** 按照站点id过滤 */
  SiteIds?: string[];
  /** 按照专用集群生命周期过滤 */
  LifecycleStatuses?: string[];
  /** 模糊匹配专用集群名称 */
  Name?: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeDedicatedClustersResponse {
  /** 符合查询条件的专用集群列表 */
  DedicatedClusterSet?: DedicatedCluster[];
  /** 符合条件的专用集群数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDedicatedSupportedZonesRequest {
  /** 传入region列表 */
  Regions?: number[];
}

declare interface DescribeDedicatedSupportedZonesResponse {
  /** 支持的可用区列表 */
  ZoneSet: RegionZoneInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSitesDetailRequest {
  /** 按照站点id过滤 */
  SiteIds?: string[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 按照站定名称模糊匹配 */
  Name?: string;
}

declare interface DescribeSitesDetailResponse {
  /** 站点详情 */
  SiteDetailSet?: SiteDetail[];
  /** 符合条件的站点总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSitesRequest {
  /** 按照站点id过滤 */
  SiteIds?: string[];
  /** 模糊匹配站点名称 */
  Name?: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeSitesResponse {
  /** 符合查询条件的站点列表 */
  SiteSet?: Site[];
  /** 符合条件的站点数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDedicatedClusterInfoRequest {
  /** 本地专用集群ID */
  DedicatedClusterId: string;
  /** 集群的新名称 */
  Name?: string;
  /** 集群的新可用区 */
  Zone?: string;
  /** 集群的新描述信息 */
  Description?: string;
  /** 集群所在站点 */
  SiteId?: string;
}

declare interface ModifyDedicatedClusterInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOrderStatusRequest {
  /** 要更新成的状态 */
  Status: string;
  /** 大订单ID */
  DedicatedClusterOrderId?: string;
  /** 小订单ID */
  SubOrderIds?: string[];
}

declare interface ModifyOrderStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySiteDeviceInfoRequest {
  /** 机房ID */
  SiteId: string;
  /** 您将使用光纤类型将CDC设备连接到网络。有单模和多模两种选项。 */
  FiberType?: string;
  /** 您将CDC连接到网络时采用的光学标准。此字段取决于上行链路速度、光纤类型和到上游设备的距离。 */
  OpticalStandard?: string;
  /** 电源连接器类型 */
  PowerConnectors?: string;
  /** 从机架上方还是下方供电。 */
  PowerFeedDrop?: string;
  /** 最大承重(KG) */
  MaxWeight?: number;
  /** 功耗(KW) */
  PowerDrawKva?: number;
  /** 网络到腾讯云Region区域的上行链路速度 */
  UplinkSpeedGbps?: number;
  /** 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。 */
  UplinkCount?: number;
  /** 是否满足下面环境条件：1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。2、确定的机架位置包含:温度范围为 41 到 104°F (5 到 40°C)。湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。 */
  ConditionRequirement?: boolean;
  /** 是否满足下面的尺寸条件：您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。 */
  DimensionRequirement?: boolean;
  /** 是否提供冗余的上游设备(交换机或路由器)，以便两台 网络设备都能连接到网络设备。 */
  RedundantNetworking?: boolean;
  /** 是否需要腾讯云团队协助完成机架支撑工作 */
  NeedHelp?: boolean;
  /** 是否电源冗余 */
  RedundantPower?: boolean;
  /** 上游断路器是否具备 */
  BreakerRequirement?: boolean;
}

declare interface ModifySiteDeviceInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySiteInfoRequest {
  /** 机房ID */
  SiteId: string;
  /** 站点名称 */
  Name?: string;
  /** 站点描述 */
  Description?: string;
  /** 注意事项 */
  Note?: string;
  /** 站点所在国家 */
  Country?: string;
  /** 站点所在省份 */
  Province?: string;
  /** 站点所在城市 */
  City?: string;
  /** 站点所在地区的邮编 */
  PostalCode?: string;
  /** 站点所在地区的详细地址信息 */
  AddressLine?: string;
}

declare interface ModifySiteInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdc 本地专用集群} */
declare interface Cdc {
  (): Versions;
  /** 创建专用集群 {@link CreateDedicatedClusterRequest} {@link CreateDedicatedClusterResponse} */
  CreateDedicatedCluster(data: CreateDedicatedClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDedicatedClusterResponse>;
  /** 创建专用集群订单 {@link CreateDedicatedClusterOrderRequest} {@link CreateDedicatedClusterOrderResponse} */
  CreateDedicatedClusterOrder(data: CreateDedicatedClusterOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDedicatedClusterOrderResponse>;
  /** 创建站点 {@link CreateSiteRequest} {@link CreateSiteResponse} */
  CreateSite(data: CreateSiteRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSiteResponse>;
  /** 删除专用集群 {@link DeleteDedicatedClustersRequest} {@link DeleteDedicatedClustersResponse} */
  DeleteDedicatedClusters(data: DeleteDedicatedClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDedicatedClustersResponse>;
  /** 删除站点 {@link DeleteSitesRequest} {@link DeleteSitesResponse} */
  DeleteSites(data: DeleteSitesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSitesResponse>;
  /** 查询专用集群内cos的容量信息 {@link DescribeDedicatedClusterCosCapacityRequest} {@link DescribeDedicatedClusterCosCapacityResponse} */
  DescribeDedicatedClusterCosCapacity(data: DescribeDedicatedClusterCosCapacityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClusterCosCapacityResponse>;
  /** 查询专用集群内宿主机的统计信息 {@link DescribeDedicatedClusterHostStatisticsRequest} {@link DescribeDedicatedClusterHostStatisticsResponse} */
  DescribeDedicatedClusterHostStatistics(data: DescribeDedicatedClusterHostStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClusterHostStatisticsResponse>;
  /** 专用集群宿主机信息 {@link DescribeDedicatedClusterHostsRequest} {@link DescribeDedicatedClusterHostsResponse} */
  DescribeDedicatedClusterHosts(data: DescribeDedicatedClusterHostsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClusterHostsResponse>;
  /** 查询专用集群支持的实例规格列表 {@link DescribeDedicatedClusterInstanceTypesRequest} {@link DescribeDedicatedClusterInstanceTypesResponse} */
  DescribeDedicatedClusterInstanceTypes(data: DescribeDedicatedClusterInstanceTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClusterInstanceTypesResponse>;
  /** 查询专用集群订单列表 {@link DescribeDedicatedClusterOrdersRequest} {@link DescribeDedicatedClusterOrdersResponse} */
  DescribeDedicatedClusterOrders(data?: DescribeDedicatedClusterOrdersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClusterOrdersResponse>;
  /** 专用集群概览信息 {@link DescribeDedicatedClusterOverviewRequest} {@link DescribeDedicatedClusterOverviewResponse} */
  DescribeDedicatedClusterOverview(data: DescribeDedicatedClusterOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClusterOverviewResponse>;
  /** 查询专有集群配置列表 {@link DescribeDedicatedClusterTypesRequest} {@link DescribeDedicatedClusterTypesResponse} */
  DescribeDedicatedClusterTypes(data?: DescribeDedicatedClusterTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClusterTypesResponse>;
  /** 查询专用集群列表 {@link DescribeDedicatedClustersRequest} {@link DescribeDedicatedClustersResponse} */
  DescribeDedicatedClusters(data?: DescribeDedicatedClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedClustersResponse>;
  /** 查询专用集群支持的可用区列表 {@link DescribeDedicatedSupportedZonesRequest} {@link DescribeDedicatedSupportedZonesResponse} */
  DescribeDedicatedSupportedZones(data?: DescribeDedicatedSupportedZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDedicatedSupportedZonesResponse>;
  /** 查询站点列表 {@link DescribeSitesRequest} {@link DescribeSitesResponse} */
  DescribeSites(data?: DescribeSitesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSitesResponse>;
  /** 查询站点详情 {@link DescribeSitesDetailRequest} {@link DescribeSitesDetailResponse} */
  DescribeSitesDetail(data?: DescribeSitesDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSitesDetailResponse>;
  /** 修改本地专用集群信息 {@link ModifyDedicatedClusterInfoRequest} {@link ModifyDedicatedClusterInfoResponse} */
  ModifyDedicatedClusterInfo(data: ModifyDedicatedClusterInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDedicatedClusterInfoResponse>;
  /** 修改订单状态 {@link ModifyOrderStatusRequest} {@link ModifyOrderStatusResponse} */
  ModifyOrderStatus(data: ModifyOrderStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOrderStatusResponse>;
  /** 修改机房设备信息 {@link ModifySiteDeviceInfoRequest} {@link ModifySiteDeviceInfoResponse} */
  ModifySiteDeviceInfo(data: ModifySiteDeviceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySiteDeviceInfoResponse>;
  /** 修改机房信息 {@link ModifySiteInfoRequest} {@link ModifySiteInfoResponse} */
  ModifySiteInfo(data: ModifySiteInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySiteInfoResponse>;
}

export declare type Versions = ["2020-12-14"];

export default Cdc;
