/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 描述了操作系统所在块设备即系统盘的信息 */
declare interface SystemDisk {
  /** 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_BSSD：通用性SSD云硬盘默认取值：当前有库存的硬盘类型。 */
  DiskType?: string | null;
  /** 系统盘大小，单位：GB。默认值为 80 */
  DiskSize?: number | null;
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

/** {@link Hai 高性能应用服务} */
declare interface Hai {
  (): Versions;
  /** 创建实例 {@link RunInstancesRequest} {@link RunInstancesResponse} */
  RunInstances(data: RunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RunInstancesResponse>;
}

export declare type Versions = ["2023-08-12"];

export default Hai;
