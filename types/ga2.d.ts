/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

declare interface CreateGlobalAcceleratorRequest {
  /** 名称，最大长度不能超过60个字节。 */
  Name: string;
  /** 计费模式，PREPAID：表示预付费，即包年包月，POSTPAID：表示后付费，即按量计费。默认：POSTPAID。当前仅支持后付费。 */
  InstanceChargeType?: string;
  /** 描述信息，最大长度不能超过100个字节。 */
  Description?: string;
  /** 跨境类型；HighQuality：精品BGP-IP跨境；Unicom：联通专线跨境。 */
  CrossBorderType?: string;
  /** 此Flag代表签署跨境服务承诺书。当使用跨境服务时候，此字段必传。True：代表签署。 */
  CrossBorderPromiseFlag?: boolean;
  /** 标签信息 */
  Tags?: Tag[];
}

declare interface CreateGlobalAcceleratorResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 全球加速实例ID。 */
  GlobalAcceleratorId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderSettlementRequest {
  /** 全球加速实例ID。 */
  GlobalAcceleratorId: string;
  /** 加速地域。 */
  AccelerateRegion: string;
  /** 终端节点组地域。 */
  EndpointGroupRegion: string;
  /** 账单年月时间。 */
  SettlementMonth: number;
}

declare interface DescribeCrossBorderSettlementResponse {
  /** 流量用量，单位是GB；精度为保留小数点6位。 */
  Traffic?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ga2 全球加速} */
declare interface Ga2 {
  (): Versions;
  /** 创建全球加速实例 {@link CreateGlobalAcceleratorRequest} {@link CreateGlobalAcceleratorResponse} */
  CreateGlobalAccelerator(data: CreateGlobalAcceleratorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGlobalAcceleratorResponse>;
  /** 查询跨境账单 {@link DescribeCrossBorderSettlementRequest} {@link DescribeCrossBorderSettlementResponse} */
  DescribeCrossBorderSettlement(data: DescribeCrossBorderSettlementRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderSettlementResponse>;
}

export declare type Versions = ["2025-01-15"];

export default Ga2;
