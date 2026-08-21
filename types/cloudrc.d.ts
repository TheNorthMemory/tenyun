/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 过滤器 */
declare interface ExtendedFilter {
  /** 过滤条件键枚举值：ResourceType： 资源类型ResourceId： 资源IDResourceAlias： 资源名称PayMode： 计费模式RegionCode： 地域编码ZoneCode： 可用区编码PublicIpAddress： 外网IPPrivateIpAddress： 内网IPVpcId： VPC IDSubnetId： 子网IDTag： 标签 */
  Key: string;
  /** 过滤条件值 */
  Values: string[];
  /** 匹配方式枚举值：Equals： 等于NotEquals： 不等于Contains： 包含NotContains： 不包含Exists： 存在NotExists： 不存在 */
  MatchType?: string;
}

/** 资源信息 */
declare interface ResourceSummary {
  /** 资源ID */
  ResourceId?: string;
  /** 资源别名 */
  ResourceAlias?: string;
  /** uin */
  Uin?: number;
  /** 资源类型 */
  ResourceType?: string;
  /** 地域编码 */
  RegionCode?: string;
  /** 可用区编码 */
  ZoneCode?: string;
  /** 付费类型，包括后付费(0)、预付费(1)、预留实例(2) */
  PayMode?: string;
  /** 资源创建时间 */
  CreateTime?: string;
  /** 资源过期时间 */
  ExpireTime?: string;
  /** 内网IP */
  PrivateIpAddress?: string[];
  /** 外网IP */
  PublicIpAddress?: string[];
  /** 标签 */
  Tags?: Tag[];
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string | null;
  /** 标签值 */
  Value: string | null;
}

declare interface DescribeResourceRequest {
  /** 资源类型 */
  ResourceType: string;
  /** 地域编码 */
  RegionCode: string;
  /** 资源ID */
  ResourceId: string;
  /** 视图ID */
  ViewId?: string;
}

declare interface DescribeResourceResponse {
  /** 资源ID */
  ResourceId?: string;
  /** 资源别名 */
  ResourceAlias?: string;
  /** uin */
  Uin?: number;
  /** 资源类型 */
  ResourceType?: string;
  /** 地域编码 */
  RegionCode?: string;
  /** 可用区编码 */
  ZoneCode?: string;
  /** 付费类型 */
  PayMode?: string;
  /** 资源创建时间 */
  CreateTime?: string;
  /** 资源过期时间 */
  ExpireTime?: string;
  /** 内网IP */
  PrivateIpAddress?: string[];
  /** 外网IP */
  PublicIpAddress?: string[];
  /** 资源属性 */
  Properties?: string;
  /** 标签信息 */
  Tags?: Tag[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchResourcesRequest {
  /** 视图ID */
  ViewId?: string;
  /** 每页返回的最大记录数 */
  MaxResults?: number;
  /** 分页Token，首次查询不传 */
  NextToken?: string;
  /** 过滤条件列表 */
  Filters?: ExtendedFilter[];
  /** 排序条件枚举值：CreateTime： 表示按资源创建时间排序ExpireTime： 表示按资源到期时间排序IpAddress： 表示按资源IP地址排序 */
  SortBy?: string;
  /** 排序顺序枚举值：Asc： 升序Desc： 降序默认值：Asc */
  SortOrder?: string;
}

declare interface SearchResourcesResponse {
  /** 下一页Token，为空时表示无更多数据 */
  NextToken?: string;
  /** 资源列表 */
  Resources?: ResourceSummary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cloudrc 资源中心} */
declare interface Cloudrc {
  (): Versions;
  /** 查询资源详情 {@link DescribeResourceRequest} {@link DescribeResourceResponse} */
  DescribeResource(data: DescribeResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceResponse>;
  /** 搜索资源 {@link SearchResourcesRequest} {@link SearchResourcesResponse} */
  SearchResources(data?: SearchResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<SearchResourcesResponse>;
}

export declare type Versions = ["2024-06-06"];

export default Cloudrc;
