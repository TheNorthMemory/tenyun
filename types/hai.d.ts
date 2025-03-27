/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用信息 */
declare interface ApplicationInfo {
  /** 应用id */
  ApplicationId?: string;
  /** 应用名称 */
  ApplicationName?: string;
  /** 应用描述 */
  Description?: string;
  /** 应用的环境配置 */
  ConfigEnvironment?: string;
  /** 系统盘大小下限 */
  MinSystemDiskSize?: number;
  /** 应用类型，目前该项取值可以为PRIVATE_APPLICATION或者PUBLIC_APPLICATION */
  ApplicationType?: string;
  /** 应用状态：CREATING-创建中；ONLINE -正常在线；DELETING -删除中；ARREARS - 欠费隔离示例值：ONLINE */
  ApplicationState?: string;
  /** 应用创建时间 */
  CreateTime?: string;
  /** 应用大小 */
  ApplicationSize?: number;
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
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例状态：PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中ARREARS：表示待回收STOPPED_NO_CHARGE：表示关机不收费TERMINATING：表示销毁中TERMINATED：表示已销毁 */
  InstanceState?: string;
  /** 应用名称 */
  ApplicationName?: string;
  /** 算力套餐名称 */
  BundleName?: string;
  /** 实例所包含的GPU卡数 */
  GPUCount?: number;
  /** 算力 */
  GPUPerformance?: string;
  /** 显存 */
  GPUMemory?: string;
  /** CPU核数 */
  CPU?: string;
  /** 内存 */
  Memory?: string;
  /** 系统盘数据 */
  SystemDisk?: SystemDisk;
  /** 内网ip地址 */
  PrivateIpAddresses?: string[];
  /** 公网ip地址 */
  PublicIpAddresses?: string[];
  /** 安全组ID */
  SecurityGroupIds?: string[];
  /** 实例最新操作 */
  LatestOperation?: string;
  /** 实例最新操作状态：SUCCESS：表示操作成功OPERATING：表示操作执行中FAILED：表示操作失败 */
  LatestOperationState?: string;
  /** 实例创建时间 */
  CreateTime?: string;
  /** 公网出带宽上限，默认10Mbps */
  MaxOutBandwidth?: string;
  /** 每月免费流量，默认500G */
  MaxFreeTraffic?: string;
  /** 应用配置环境 */
  ConfigurationEnvironment?: string;
  /** 实例包含的登录服务详情 */
  LoginServices?: LoginService[];
  /** 应用服务的操作系统类型 */
  OSType?: string;
}

/** 实例预付费入参 */
declare interface InstanceChargePrepaid {
  /** 时长，默认值：1 */
  Period?: number;
  /** 续费标志可选参数：NOTIFY_AND_MANUAL_RENEW：表示默认状态(用户未设置，即初始状态：若用户有预付费不停服特权，也会对该值进行自动续费)NOTIFY_AND_AUTO_RENEW：表示自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：表示明确不自动续费(用户设置)默认值：NOTIFY_AND_MANUAL_RENEW */
  RenewFlag?: string;
  /** 时长单位，默认值MONTH */
  TimeUnit?: string;
}

/** 套餐价格 */
declare interface ItemPrice {
  /** 原单价 */
  UnitPrice?: number;
  /** 折扣后单价 */
  DiscountUnitPrice?: number;
  /** 折扣 */
  Discount?: number;
  /** 单位：时/月 */
  ChargeUnit?: string;
  /** 商品数量 */
  Amount?: number;
}

/** 分实例价格 */
declare interface ItemPriceDetail {
  /** 实例id */
  InstanceId?: string;
  /** 实例价格详情 */
  InstancePrice?: ItemPrice;
  /** 磁盘价格详情 */
  CloudDiskPrice?: ItemPrice;
  /** 该实例的总价钱 */
  InstanceTotalPrice?: ItemPrice;
}

/** 登录服务详情 */
declare interface LoginService {
  /** 登录方式名称 */
  ServiceName?: string;
}

/** 某服务的登录配置 */
declare interface LoginSetting {
  /** 服务名称 */
  ServiceName?: string | null;
  /** 服务登录url */
  Url?: string | null;
}

/** musk prompt详情 */
declare interface MuskPromptInfo {
  /** workflow id */
  WorkflowId?: string;
  /** workgroup id */
  WorkgroupId?: string;
  /** prompt id */
  PromptId?: string;
  /** 生成的内容 */
  OutputResource?: string[];
  /** prompt status 0: 执行中1: 执行成功2: 执行失败 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 任务执行耗时，单位毫秒 */
  Cost?: number;
  /** 任务执行失败错误信息 */
  ErrorMessage?: string;
}

/** HAI 实例的网络配置和消耗情况 */
declare interface NetworkStatus {
  /** HAI 的实例 ID */
  InstanceId?: string;
  /** 公网 IP 地址 */
  AddressIp?: string | null;
  /** 出带宽上限，单位Mbps */
  Bandwidth?: number | null;
  /** 流量包总量，单位GB */
  TotalTrafficAmount?: number;
  /** 流量包剩余量，单位GB */
  RemainingTrafficAmount?: number;
}

/** 费用数据结构体 */
declare interface Price {
  /** 实例价格信息 */
  InstancePrice?: ItemPrice;
  /** 云盘价格信息 */
  CloudDiskPrice?: ItemPrice;
  /** 分实例价格 */
  PriceDetailSet?: ItemPriceDetail[];
}

/** 地域列表 */
declare interface RegionInfo {
  /** ap-guangzhou */
  Region?: string;
  /** 华南地区(广州) */
  RegionName?: string;
  /** 地域是否可用状态AVAILABLE：可用 */
  RegionState?: string;
  /** 学术加速是否支持：NO_NEED_SUPPORT表示不需支持；NOT_SUPPORT_YET表示暂未支持；ALREADY_SUPPORT表示已经支持。对于ALREADY_SUPPORT的地域才需进一步调用DescribeScholarRocketStatus查看学术加速是开启还是关闭 */
  ScholarRocketSupportState?: string;
}

/** 场景详情 */
declare interface SceneInfo {
  /** 场景id */
  SceneId?: string;
  /** 场景名 */
  SceneName?: string;
}

/** 描述了操作系统所在块设备即系统盘的信息 */
declare interface SystemDisk {
  /** 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_BSSD：通用性SSD云硬盘默认取值：当前有库存的硬盘类型。 */
  DiskType?: string | null;
  /** 系统盘大小，单位：GB。默认值为 80 */
  DiskSize?: number | null;
  /** 系统盘分区盘符 */
  DiskName?: string | null;
}

declare interface CreateMuskPromptRequest {
  /** workgroup id */
  WorkgroupId: string;
  /** workflow id */
  WorkflowId: string;
  /** prompt 参数 */
  PromptParams: string;
}

declare interface CreateMuskPromptResponse {
  /** prompt id */
  PromptId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationsRequest {
  /** 应用id列表 */
  ApplicationIds?: string[];
  /** 过滤器，跟ApplicationIds不能共用，支持的filter主要有：application-id: 精确匹配;scene-id: 精确匹配;application-name: 模糊匹配;application-type: 精确匹配; */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回量，默认为20MC：1000用户：100 */
  Limit?: number;
  /** 应用列表排序的依据字段。取值范围："CREATED_TIME"：依据应用的创建时间排序。 "APPLICATION_SIZE"：依据应用的大小排序。默认按应用的创建时间排序。 */
  OrderField?: string;
  /** 输出应用列表的排列顺序。取值范围："ASC"：升序排列。 "DESC"：降序排列。默认按降序排列。 */
  Order?: string;
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
  /** 描述键值对过滤器，用于条件过滤查询。目前支持的过滤器有：instance-id，实例id；instance-state，实例状态；charge-type，付费方式；public-ip-address，公网IP过滤 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回量，默认为20 */
  Limit?: number;
}

declare interface DescribeInstancesResponse {
  /** 实例总数 */
  TotalCount?: number;
  /** 分页实例详情 */
  InstanceSet?: Instance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMuskPromptsRequest {
  /** workgroup id */
  WorkgroupId: string;
  /** workflow id */
  WorkflowId: string;
  /** offset */
  Offset: number;
  /** limit */
  Limit: number;
  /** 过滤参数 支持过滤的键值： PromptId，Status */
  Filters?: Filter[];
}

declare interface DescribeMuskPromptsResponse {
  /** total count */
  TotalCount?: number;
  /** prompt列表详情 */
  MuskPromptInfos?: MuskPromptInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 地域列表 */
  RegionSet?: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScenesRequest {
  /** 场景id列表 */
  SceneIds?: string[];
}

declare interface DescribeScenesResponse {
  /** 场景详情 */
  SceneSet?: SceneInfo[];
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
  LoginSettings?: LoginSetting[];
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
  /** 付费方式，POSTPAID_BY_HOUR按量后付费，PREPAID_BY_MONTH预付费按月，PREPAID_BY_DAY预付费按天 */
  InstanceChargeType?: string;
  /** 预付费参数 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
}

declare interface InquirePriceRunInstancesResponse {
  /** 发货参数对应的价格组合，当DryRun=True，会返回空 */
  Price?: Price;
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

declare interface StartInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 默认为False，True代表只验证接口连通性 */
  DryRun?: boolean;
}

declare interface StartInstanceResponse {
  /** task任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** hai实例关机的模式，目前仅支持关机不收费：STOP_CHARGE -- 关闭hai实例，释放计算资源，停止收取计算资源的费用。注意：默认值为STOP_CHARGE */
  StopMode?: string;
  /** 默认为False，True代表只验证接口连通性 */
  DryRun?: boolean;
}

declare interface StopInstanceResponse {
  /** task任务id */
  TaskId?: number;
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
  /** 创建Prompt请求任务 {@link CreateMuskPromptRequest} {@link CreateMuskPromptResponse} */
  CreateMuskPrompt(data: CreateMuskPromptRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMuskPromptResponse>;
  /** 查询应用 {@link DescribeApplicationsRequest} {@link DescribeApplicationsResponse} */
  DescribeApplications(data?: DescribeApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationsResponse>;
  /** 查询实例的网络配置及消耗情况 {@link DescribeInstanceNetworkStatusRequest} {@link DescribeInstanceNetworkStatusResponse} */
  DescribeInstanceNetworkStatus(data: DescribeInstanceNetworkStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNetworkStatusResponse>;
  /** 查询实例 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取Prompt任务列表 {@link DescribeMuskPromptsRequest} {@link DescribeMuskPromptsResponse} */
  DescribeMuskPrompts(data: DescribeMuskPromptsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMuskPromptsResponse>;
  /** 查询地域列表 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询场景 {@link DescribeScenesRequest} {@link DescribeScenesResponse} */
  DescribeScenes(data?: DescribeScenesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScenesResponse>;
  /** 查询服务登录配置 {@link DescribeServiceLoginSettingsRequest} {@link DescribeServiceLoginSettingsResponse} */
  DescribeServiceLoginSettings(data: DescribeServiceLoginSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceLoginSettingsResponse>;
  /** 创建实例询价 {@link InquirePriceRunInstancesRequest} {@link InquirePriceRunInstancesResponse} */
  InquirePriceRunInstances(data: InquirePriceRunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRunInstancesResponse>;
  /** 创建实例 {@link RunInstancesRequest} {@link RunInstancesResponse} */
  RunInstances(data: RunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RunInstancesResponse>;
  /** 启动实例 {@link StartInstanceRequest} {@link StartInstanceResponse} */
  StartInstance(data: StartInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StartInstanceResponse>;
  /** 关闭实例 {@link StopInstanceRequest} {@link StopInstanceResponse} */
  StopInstance(data: StopInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstanceResponse>;
  /** 销毁实例 {@link TerminateInstancesRequest} {@link TerminateInstancesResponse} */
  TerminateInstances(data: TerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstancesResponse>;
}

export declare type Versions = ["2023-08-12"];

export default Hai;
