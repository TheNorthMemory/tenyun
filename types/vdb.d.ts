/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 实例信息，用于实例列表 */
declare interface InstanceInfo {
  /** 实例ID。 */
  InstanceId?: string | null;
  /** 实例自定义名称。 */
  Name?: string | null;
  /** 用户APPID。 */
  AppId?: number | null;
  /** 地域。 */
  Region?: string | null;
  /** 可用区。 */
  Zone?: string | null;
  /** 产品。 */
  Product?: string | null;
  /** 网络信息。 */
  Networks?: Network[] | null;
  /** 分片信息。 */
  ShardNum?: number | null;
  /** 副本数。 */
  ReplicaNum?: number | null;
  /** CPU. */
  Cpu?: number | null;
  /** 内存。 */
  Memory?: number | null;
  /** 磁盘。 */
  Disk?: number | null;
  /** 健康得分。 */
  HealthScore?: number | null;
  /** 异常告警。 */
  Warning?: number | null;
  /** 所属项目。 */
  Project?: string | null;
  /** 所属标签。 */
  ResourceTags?: Tag[] | null;
  /** 创建时间。 */
  CreatedAt?: string | null;
  /** 资源状态。 */
  Status?: string | null;
  /** 引擎名称。 */
  EngineName?: string | null;
  /** 引擎版本。 */
  EngineVersion?: string | null;
  /** 计费模式。 */
  PayMode?: number | null;
  /** 差异化扩展信息, json格式。 */
  Extend?: string | null;
  /** 过期时间。 */
  ExpiredAt?: string | null;
  /** 是否不过期(永久)。 */
  IsNoExpired?: boolean | null;
  /** 外网地址。 */
  WanAddress?: string | null;
}

/** 网路信息 */
declare interface Network {
  /** VpcId(VPC网络下有效) */
  VpcId?: string | null;
  /** 子网Id(VPC网络下有效)。 */
  SubnetId?: string | null;
  /** 内网访问IP。 */
  Vip?: string | null;
  /** 内网访问Port。 */
  Port?: number | null;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

declare interface DescribeInstancesRequest {
  /** 实例ID数组。 */
  InstanceIds?: string[];
  /** 实例名称，支持模糊搜索。 */
  InstanceNames?: string[];
  /** 实例模糊搜索字段。 */
  InstanceKeys?: string[];
  /** 根据状态获取实例， 为空则获取全部非隔离和非下线的实例。 */
  Status?: string[];
  /** 按照引擎筛选实例。 */
  EngineNames?: string[];
  /** 按照版本筛选实例。 */
  EngineVersions?: string[];
  /** 按照创建时间筛选实例。 */
  CreateAt?: string;
  /** 按照可用区筛选实例。 */
  Zones?: string[];
  /** 排序字段。 */
  OrderBy?: string;
  /** 排序方式。 */
  OrderDirection?: string;
  /** 查询开始位置。 */
  Offset?: number;
  /** 列表查询数量。 */
  Limit?: number;
  /** 按照标签筛选实例 */
  ResourceTags?: Tag[];
}

declare interface DescribeInstancesResponse {
  /** 实例列表。 */
  Items?: InstanceInfo[] | null;
  /** 实例总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vdb 向量数据库} */
declare interface Vdb {
  (): Versions;
  /** 查询实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
}

export declare type Versions = ["2023-06-16"];

export default Vdb;
