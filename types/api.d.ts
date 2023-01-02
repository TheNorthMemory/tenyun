/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 地域信息 */
declare interface RegionInfo {
  /** 地域名称，例如，ap-guangzhou */
  Region: string;
  /** 地域描述，例如，华南地区(广州) */
  RegionName: string;
  /** 地域是否可用状态 */
  RegionState: string;
}

/** 地域管理系统支持的产品信息 */
declare interface RegionProduct {
  /** 产品名称，如cvm */
  Name: string;
}

/** 可用区信息 */
declare interface ZoneInfo {
  /** 可用区名称，例如，ap-guangzhou-3全网可用区名称如下： ap-chongqing-1 ap-seoul-1 ap-seoul-2 ap-chengdu-1 ap-chengdu-2 ap-hongkong-1 ap-hongkong-2 ap-shenzhen-fsi-1 ap-shenzhen-fsi-2 ap-shenzhen-fsi-3 ap-guangzhou-1（售罄） ap-guangzhou-2（售罄） ap-guangzhou-3 ap-guangzhou-4 ap-guangzhou-6 ap-tokyo-1 ap-singapore-1 ap-singapore-2 ap-shanghai-fsi-1 ap-shanghai-fsi-2 ap-shanghai-fsi-3 ap-bangkok-1 ap-shanghai-1（售罄） ap-shanghai-2 ap-shanghai-3 ap-shanghai-4 ap-shanghai-5 ap-mumbai-1 ap-mumbai-2 eu-moscow-1 ap-beijing-1 ap-beijing-2 ap-beijing-3 ap-beijing-4 ap-beijing-5 na-siliconvalley-1 na-siliconvalley-2 eu-frankfurt-1 na-toronto-1 na-ashburn-1 na-ashburn-2 ap-nanjing-1 ap-nanjing-2 */
  Zone: string;
  /** 可用区描述，例如，广州三区 */
  ZoneName: string;
  /** 可用区ID */
  ZoneId: string;
  /** 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。 */
  ZoneState: string;
}

declare interface DescribeProductsRequest {
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeProductsResponse {
  /** 产品详细信息列表。 */
  Products: RegionProduct[];
  /** 产品总数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
  /** 待查询产品的名称，例如cvm，具体取值请查询DescribeProducts接口 */
  Product: string;
}

declare interface DescribeRegionsResponse {
  /** 地域数量 */
  TotalCount: number;
  /** 地域列表信息 */
  RegionSet: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
  /** 待查询产品的名称，例如cvm，具体取值请查询DescribeProducts接口 */
  Product: string;
}

declare interface DescribeZonesResponse {
  /** 可用区数量。 */
  TotalCount: number;
  /** 可用区列表信息。 */
  ZoneSet: ZoneInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Api 云 API} */
declare interface Api {
  (): Versions;
  /** 查询支持地域列表查询的产品 {@link DescribeProductsRequest} {@link DescribeProductsResponse} */
  DescribeProducts(data?: DescribeProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductsResponse>;
  /** 查询产品支持的地域列表 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询产品可用区列表 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
}

export declare type Versions = ["2020-11-06"];

export default Api;
