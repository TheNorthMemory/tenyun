/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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
  /** 查询跨境账单 {@link DescribeCrossBorderSettlementRequest} {@link DescribeCrossBorderSettlementResponse} */
  DescribeCrossBorderSettlement(data: DescribeCrossBorderSettlementRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderSettlementResponse>;
}

export declare type Versions = ["2025-01-15"];

export default Ga2;
