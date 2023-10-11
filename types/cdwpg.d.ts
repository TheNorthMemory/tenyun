/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 磁盘规格 */
declare interface CBSSpec {
  /** 盘类型 */
  DiskType: string;
  /** 大小 */
  DiskSize: number;
  /** 个数 */
  DiskCount: number;
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

/** 精简集群信息 */
declare interface InstanceSimpleInfoNew {
  /** 1 */
  ID?: number | null;
  /** 1 */
  InstanceId?: string | null;
  /** 1 */
  InstanceName?: string | null;
  /** 1 */
  Version?: string | null;
  /** 1 */
  Region?: string | null;
  /** 1 */
  RegionId?: number | null;
  /** 1 */
  RegionDesc?: string | null;
  /** 1 */
  Zone?: string | null;
  /** 1 */
  ZoneId?: number | null;
  /** 1 */
  ZoneDesc?: string | null;
  /** 1 */
  VpcId?: string | null;
  /** 1 */
  SubnetId?: string | null;
  /** 1 */
  CreateTime?: string | null;
  /** 1 */
  ExpireTime?: string | null;
  /** 1 */
  AccessInfo?: string | null;
  /** 1 */
  PayMode?: string | null;
  /** 1 */
  RenewFlag?: boolean | null;
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

/** 标签描述 */
declare interface Tag {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
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
  /** 标签列表 */
  Tags?: Tag;
}

declare interface CreateInstanceByApiResponse {
  /** 流程ID */
  FlowId?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSimpleInstancesRequest {
  /** 11 */
  SearchInstanceId?: string;
  /** 11 */
  SearchInstanceName?: string;
  /** 11 */
  Offset?: number;
  /** 11 */
  Limit?: number;
  /** 11 */
  SearchTags?: string[];
}

declare interface DescribeSimpleInstancesResponse {
  /** 1 */
  TotalCount?: number | null;
  /** 1 */
  InstancesList?: InstanceSimpleInfoNew[] | null;
  /** - */
  ErrorMsg?: string | null;
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

/** {@link Cdwpg 云数据仓库 PostgreSQL} */
declare interface Cdwpg {
  (): Versions;
  /** 创建集群 {@link CreateInstanceByApiRequest} {@link CreateInstanceByApiResponse} */
  CreateInstanceByApi(data: CreateInstanceByApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceByApiResponse>;
  /** 获取集群精简信息列表 {@link DescribeSimpleInstancesRequest} {@link DescribeSimpleInstancesResponse} */
  DescribeSimpleInstances(data?: DescribeSimpleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSimpleInstancesResponse>;
  /** 销毁集群 {@link DestroyInstanceByApiRequest} {@link DestroyInstanceByApiResponse} */
  DestroyInstanceByApi(data: DestroyInstanceByApiRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstanceByApiResponse>;
}

export declare type Versions = ["2020-12-30"];

export default Cdwpg;
