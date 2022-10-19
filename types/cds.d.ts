/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据安全产品实例信息 */
declare interface CdsAuditInstance {
  /** 实例ID */
  InstanceId: string;
  /** 用户AppId */
  AppId: string;
  /** 用户Uin */
  Uin: string;
  /** 项目ID */
  ProjectId: number;
  /** 续费标识 */
  RenewFlag: number;
  /** 所属地域 */
  Region: string;
  /** 付费模式（数据安全审计只支持预付费：1） */
  PayMode: number;
  /** 实例状态： 0，未生效；1：正常运行； 2：被隔离； 3，已过期 */
  Status: number;
  /** 实例被隔离时间，格式：yyyy-mm-dd HH:ii:ss */
  IsolatedTimestamp: string;
  /** 实例创建时间，格式： yyyy-mm-dd HH:ii:ss */
  CreateTime: string;
  /** 实例过期时间，格式：yyyy-mm-dd HH:ii:ss */
  ExpireTime: string;
  /** 实例名称 */
  InstanceName: string | null;
  /** 实例公网IP */
  PublicIp: string | null;
  /** 实例私网IP */
  PrivateIp: string | null;
  /** 实例类型（版本） */
  InstanceType: string;
  /** 实例域名 */
  Pdomain: string | null;
}

/** 数据安全审计产品规格信息 */
declare interface DbauditTypesInfo {
  /** 规格描述 */
  InstanceVersionName: string;
  /** 规格名称 */
  InstanceVersionKey: string;
  /** 最大吞吐量 */
  Qps: number;
  /** 最大实例数 */
  MaxInstances: number;
  /** 入库速率（每小时） */
  InsertSpeed: number;
  /** 最大在线存储量，单位：条 */
  OnlineStorageCapacity: number;
  /** 最大归档存储量，单位：条 */
  ArchivingStorageCapacity: number;
}

/** 数盾地域信息 */
declare interface RegionInfo {
  /** 地域ID */
  RegionId: number;
  /** 地域名称 */
  Region: string;
  /** 地域描述 */
  RegionName: string;
  /** 地域可用状态 */
  RegionState: number;
}

declare interface DescribeDasbImageIdsRequest {
}

declare interface DescribeDasbImageIdsResponse {
  /** 基础镜像ID */
  BaseImageId?: string;
  /** AI镜像ID */
  AiImageId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDbauditInstanceTypeRequest {
}

declare interface DescribeDbauditInstanceTypeResponse {
  /** 数据安全审计产品规格信息列表 */
  DbauditTypesSet?: DbauditTypesInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDbauditInstancesRequest {
  /** 查询条件地域 */
  SearchRegion?: string;
  /** 限制数目，默认10， 最大50 */
  Limit?: number;
  /** 偏移量，默认1 */
  Offset?: number;
}

declare interface DescribeDbauditInstancesResponse {
  /** 总实例数 */
  TotalCount?: number;
  /** 数据安全审计实例信息列表 */
  CdsAuditInstanceSet?: CdsAuditInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDbauditUsedRegionsRequest {
}

declare interface DescribeDbauditUsedRegionsResponse {
  /** 可售卖地域信息列表 */
  RegionSet?: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceDbauditInstanceRequest {
  /** 实例规格，取值范围： cdsaudit，cdsaudit_adv， cdsaudit_ent 分别为合规版，高级版，企业版 */
  InstanceVersion: string;
  /** 询价类型： renew，续费；newbuy，新购 */
  InquiryType: string;
  /** 购买实例的时长。取值范围：1（y/m），2（y/m）,，3（y/m），4（m）， 5（m），6（m）， 7（m），8（m），9（m）， 10（m） */
  TimeSpan: number;
  /** 购买时长单位，y：年；m：月 */
  TimeUnit: string;
  /** 实例所在地域 */
  ServiceRegion: string;
}

declare interface InquiryPriceDbauditInstanceResponse {
  /** 总价，单位：元 */
  TotalPrice?: number;
  /** 真实价钱，预支费用的折扣价，单位：元 */
  RealTotalCost?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDbauditInstancesRenewFlagRequest {
  /** 实例ID */
  InstanceId: string;
  /** 0，表示默认状态(用户未设置，即初始状态)；1，表示自动续费；2，表示明确不自动续费 */
  AutoRenewFlag: number;
}

declare interface ModifyDbauditInstancesRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 数据安全审计 */
declare interface Cds {
  (): Versions;
  /** 数盾-DASB-获取镜像列表 */
  DescribeDasbImageIds(data?: DescribeDasbImageIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDasbImageIdsResponse>;
  /** 获取产品规格信息列表 */
  DescribeDbauditInstanceType(data?: DescribeDbauditInstanceTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbauditInstanceTypeResponse>;
  /** 获取数据安全审计实例列表 */
  DescribeDbauditInstances(data: DescribeDbauditInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbauditInstancesResponse>;
  /** 查询可售卖地域列表 */
  DescribeDbauditUsedRegions(data?: DescribeDbauditUsedRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbauditUsedRegionsResponse>;
  /** 数据安全审计产品实例询价 */
  InquiryPriceDbauditInstance(data: InquiryPriceDbauditInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceDbauditInstanceResponse>;
  /** 修改实例续费标识 */
  ModifyDbauditInstancesRenewFlag(data: ModifyDbauditInstancesRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDbauditInstancesRenewFlagResponse>;
}

export declare type Versions = ["2018-04-20"];

export default Cds;
