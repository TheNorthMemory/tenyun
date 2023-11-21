/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用信息 */
declare interface ApplicationInfo {
  /** 应用id */
  ApplicationId?: string | null;
  /** 应用名称 */
  ApplicationName?: string | null;
  /** 应用描述 */
  Description?: string | null;
  /** 应用的环境配置 */
  ConfigEnvironment?: string | null;
  /** 系统盘大小下限 */
  MinSystemDiskSize?: number | null;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 实例信息 */
declare interface Instance {
  /** 实例id */
  InstanceId?: string | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 实例状态：PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中ARREAR：表示欠费隔离TERMINATING：表示销毁中。TERMINATED：表示已销毁 */
  InstanceState?: string | null;
  /** 应用名称 */
  ApplicationName?: string | null;
  /** 算力套餐名称 */
  BundleName?: string | null;
  /** 实例所包含的GPU卡数 */
  GPUCount?: number | null;
  /** 算力 */
  GPUPerformance?: string | null;
  /** 显存 */
  GPUMemory?: string | null;
  /** CPU核数 */
  CPU?: string | null;
  /** 内存 */
  Memory?: string | null;
  /** 系统盘数据 */
  SystemDisk?: SystemDisk | null;
  /** 内网ip地址 */
  PrivateIpAddresses?: string[] | null;
  /** 公网ip地址 */
  PublicIpAddresses?: string[] | null;
  /** 安全组ID */
  SecurityGroupIds?: string[] | null;
  /** 实例最新操作 */
  LatestOperation?: string | null;
  /** 实例最新操作状态：SUCCESS：表示操作成功OPERATING：表示操作执行中FAILED：表示操作失败 */
  LatestOperationState?: string | null;
  /** 实例创建时间 */
  CreateTime?: string | null;
  /** 公网出带宽上限，默认5Mbps */
  MaxOutBandwidth?: string | null;
  /** 每月免费流量，默认500G */
  MaxFreeTraffic?: string | null;
  /** 应用配置环境 */
  ConfigurationEnvironment?: string | null;
  /** 实例包含的登录服务详情 */
  LoginServices?: LoginService[] | null;
}

/** 套餐价格 */
declare interface ItemPrice {
  /** 原单价 */
  UnitPrice?: number | null;
  /** 折扣后单价 */
  DiscountUnitPrice?: number | null;
  /** 折扣 */
  Discount?: number | null;
  /** 单位：时 */
  ChargeUnit?: string | null;
  /** 商品数量 */
  Amount?: number | null;
}

/** 登录服务详情 */
declare interface LoginService {
  /** 登录方式名称 */
  ServiceName?: string | null;
}

/** 某服务的登录配置 */
declare interface LoginSetting {
  /** 服务名称 */
  ServiceName?: string | null;
  /** 服务登录url */
  Url?: string | null;
}

/** HAI 实例的网络配置和消耗情况 */
declare interface NetworkStatus {
  /** HAI 的实例 ID */
  InstanceId?: string | null;
  /** 公网 IP 地址 */
  AddressIp?: string | null;
  /** 出带宽上限，单位Mbps */
  Bandwidth?: number | null;
  /** 流量包总量，单位GB */
  TotalTrafficAmount?: number | null;
  /** 流量包剩余量，单位GB */
  RemainingTrafficAmount?: number | null;
}

/** 费用数据结构体 */
declare interface Price {
  /** 实例价格信息 */
  InstancePrice?: ItemPrice | null;
  /** 云盘价格信息 */
  CloudDiskPrice?: ItemPrice | null;
}

/** 地域列表 */
declare interface RegionInfo {
  /** ap-guangzhou */
  Region?: string | null;
  /** 华南地区(广州) */
  RegionName?: string | null;
  /** 地域是否可用状态AVAILABLE：可用 */
  RegionState?: string | null;
  /** 学术加速是否支持：NO_NEED_SUPPORT表示不需支持；NOT_SUPPORT_YET表示暂未支持；ALREADY_SUPPORT表示已经支持。对于ALREADY_SUPPORT的地域才需进一步调用DescribeScholarRocketStatus查看学术加速是开启还是关闭 */
  ScholarRocketSupportState?: string | null;
}

/** 场景详情 */
declare interface SceneInfo {
  /** 场景id */
  SceneId?: string | null;
  /** 场景名 */
  SceneName?: string | null;
}

/** 描述了操作系统所在块设备即系统盘的信息 */
declare interface SystemDisk {
  /** 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_BSSD：通用性SSD云硬盘默认取值：当前有库存的硬盘类型。 */
  DiskType?: string | null;
  /** 系统盘大小，单位：GB。默认值为 80 */
  DiskSize?: number | null;
}

declare interface DescribeApplicationsRequest {
  /** 应用id列表 */
  ApplicationIds?: string[];
  /** 过滤器，跟ApplicationIds不能共用，支持的filter主要有：application-id，精确匹配scene-id，精确匹配application-name，模糊匹配 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回量，默认为20MC：1000用户：100 */
  Limit?: number;
}

declare interface DescribeApplicationsResponse {
  /** 应用总数 */
  TotalCount?: number | null;
  /** 分页返回的应用列表 */
  ApplicationSet?: ApplicationInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNetworkStatusRequest {
  /** 实例ID数组，单次请求最多不超过100个实例 */
  InstanceIds: string[];
}

declare interface DescribeInstanceNetworkStatusResponse {
  /** 查询结果集长度 */
  TotalCount?: number;
  /** 查询结果集 */
  NetworkStatusSet?: NetworkStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 实例元组 */
  InstanceIds?: string[];
  /** 描述键值对过滤器，用于条件过滤查询。目前支持的过滤器有：instance-id，实例id；instance-state，实例状态 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回量，默认为20 */
  Limit?: number;
}

declare interface DescribeInstancesResponse {
  /** 实例总数 */
  TotalCount?: number | null;
  /** 分页实例详情 */
  InstanceSet?: Instance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 地域列表 */
  RegionSet?: RegionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScenesRequest {
  /** 场景id列表 */
  SceneIds?: string[];
}

declare interface DescribeScenesResponse {
  /** 场景详情 */
  SceneSet?: SceneInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceLoginSettingsRequest {
  /** 实例id */
  InstanceId: string;
  /** 服务名称 */
  ServiceName?: string;
}

declare interface DescribeServiceLoginSettingsResponse {
  /** 服务登录配置详情 */
  LoginSettings?: LoginSetting[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRunInstancesRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 算力套餐类型 */
  BundleType: string;
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 购买实例数量。 */
  InstanceCount?: number;
  /** 实例显示名称 */
  InstanceName?: string;
  /** 幂等请求token */
  ClientToken?: string;
  /** DryRun为True就是只验接口连通性，默认为False */
  DryRun?: boolean;
}

declare interface InquirePriceRunInstancesResponse {
  /** 发货参数对应的价格组合，当DryRun=True，会返回空 */
  Price?: Price | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunInstancesRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 算力套餐类型 */
  BundleType: string;
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 购买实例数量。 */
  InstanceCount?: number;
  /** 实例显示名称 */
  InstanceName?: string;
  /** 幂等请求的token */
  ClientToken?: string;
  /** DryRun为True就是只验接口连通性，默认为False */
  DryRun?: boolean;
}

declare interface RunInstancesResponse {
  /** 实例ID列表 */
  InstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateInstancesRequest {
  /** 实例ID列表 */
  InstanceIds: string[];
  /** 默认为False，True代表只验证接口连通性 */
  DryRun?: boolean;
}

declare interface TerminateInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Hai 高性能应用服务} */
declare interface Hai {
  (): Versions;
  /** 查询应用 {@link DescribeApplicationsRequest} {@link DescribeApplicationsResponse} */
  DescribeApplications(data?: DescribeApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationsResponse>;
  /** 查询实例的网络配置及消耗情况 {@link DescribeInstanceNetworkStatusRequest} {@link DescribeInstanceNetworkStatusResponse} */
  DescribeInstanceNetworkStatus(data: DescribeInstanceNetworkStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNetworkStatusResponse>;
  /** 查询实例 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询地域列表 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询场景 {@link DescribeScenesRequest} {@link DescribeScenesResponse} */
  DescribeScenes(data?: DescribeScenesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScenesResponse>;
  /** 查询服务登录配置 {@link DescribeServiceLoginSettingsRequest} {@link DescribeServiceLoginSettingsResponse} */
  DescribeServiceLoginSettings(data: DescribeServiceLoginSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceLoginSettingsResponse>;
  /** 实例费用询价 {@link InquirePriceRunInstancesRequest} {@link InquirePriceRunInstancesResponse} */
  InquirePriceRunInstances(data: InquirePriceRunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRunInstancesResponse>;
  /** 创建实例 {@link RunInstancesRequest} {@link RunInstancesResponse} */
  RunInstances(data: RunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RunInstancesResponse>;
  /** 销毁实例 {@link TerminateInstancesRequest} {@link TerminateInstancesResponse} */
  TerminateInstances(data: TerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstancesResponse>;
}

export declare type Versions = ["2023-08-12"];

export default Hai;
