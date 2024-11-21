/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** CDZ的母机和子机的对应关系 */
declare interface CloudDedicatedZoneHostsInfo {
  /** Host的唯一标识uuid */
  HostUuid?: string | null;
  /** 实例名称数组 */
  InstancesInfo?: string[] | null;
}

/** 专属可用区资源统计项数据详情，对应一个具体的垂直产品的资源统计项。 */
declare interface CloudDedicatedZoneResourceStatisticsInfo {
  /** 资源统计项名称 */
  Item?: string;
  /** 资源统计项单位 */
  Unit?: string;
  /** 资源总量 */
  Total?: string;
  /** 已用资源 */
  Usage?: string;
  /** 已用资源占比 */
  UsageRate?: string;
  /** 剩余资源 */
  Remain?: string;
  /** 剩余资源占比 */
  RemainRate?: string;
  /** 本周一零点资源使用率 */
  ThisMondayUsageRate?: string;
  /** 本周资源增长比例 */
  ThisMondayUsageGrowthRate?: string;
  /** 上周资源增长比例 */
  LastMondayUsageGrowthRate?: string;
}

/** 专属可用区资源水位数据详情，对应一个具体的垂直产品。 */
declare interface CloudDedicatedZoneResourceSummaryInfo {
  /** 产品名称 */
  ProductName?: string;
  /** 子产品名称 */
  SubProductName?: string;
  /** 资源统计详情 */
  Statistics?: CloudDedicatedZoneResourceStatisticsInfo[];
}

/** 专属可用区资源水位数据扩展信息，包含可用区当地时间等数据。 */
declare interface ExtraInfo {
  /** 专属可用区当地时间本周一日期 */
  ThisMondayLocalDate?: string | null;
  /** 专属可用区当地时间上周一日期 */
  LastMondayLocalDate?: string | null;
}

declare interface DescribeCloudDedicatedZoneHostsRequest {
  /** 专属可用区ID */
  CloudDedicatedZoneID: string;
  /** 一个或多个Host面的CVM实例信息。最大支持查询100台Host。 */
  HostUuids?: string[];
  /** 查询一个实例或者多个实例所在的Host上面的CVM实例信息。最大支持查询100台实例。 */
  InstanceIds?: string[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。该参数仅与CloudDedicatedZoneID有关，传递了HostUuids和InstanceIds则会失效。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。该参数仅与CloudDedicatedZoneID有关，传递了HostUuids和InstanceIds则会失效。 */
  Limit?: number;
}

declare interface DescribeCloudDedicatedZoneHostsResponse {
  /** 返回Host和Host上部署的实例信息之间的关系 */
  CloudDedicatedZoneHostsInfoSet?: CloudDedicatedZoneHostsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudDedicatedZoneResourceSummaryRequest {
  /** 专属可用区唯一标识 */
  CdzId: string;
}

declare interface DescribeCloudDedicatedZoneResourceSummaryResponse {
  /** 资源水位详情 */
  ResourceSummarySet?: CloudDedicatedZoneResourceSummaryInfo[] | null;
  /** 资源水位扩展信息 */
  ExtraInfo?: ExtraInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdz 专属可用区} */
declare interface Cdz {
  (): Versions;
  /** 查询用户的专属可用区的母机及该母机下的子机信息 {@link DescribeCloudDedicatedZoneHostsRequest} {@link DescribeCloudDedicatedZoneHostsResponse} */
  DescribeCloudDedicatedZoneHosts(data: DescribeCloudDedicatedZoneHostsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudDedicatedZoneHostsResponse>;
  /** 查询专属可用区资源水位概览 {@link DescribeCloudDedicatedZoneResourceSummaryRequest} {@link DescribeCloudDedicatedZoneResourceSummaryResponse} */
  DescribeCloudDedicatedZoneResourceSummary(data: DescribeCloudDedicatedZoneResourceSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudDedicatedZoneResourceSummaryResponse>;
}

export declare type Versions = ["2022-11-23"];

export default Cdz;
