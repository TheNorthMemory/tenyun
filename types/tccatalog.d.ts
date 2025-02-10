/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 网络配置信息 */
declare interface NetWork {
  /** vpc实例id */
  VpcId?: string;
  /** vpc网段 */
  VpcCidrBlock?: string;
  /** 子网实例id */
  SubnetId?: string;
  /** 子网网段 */
  SubnetCidrBlock?: string;
  /** 服务clbip */
  ClbIp?: string;
  /** 服务clbPort */
  ClbPort?: string;
}

/** Tcc数据目录信息 */
declare interface TccCatalogConfig {
  /** 数据目录唯一id */
  Id?: string;
  /** 数据目录名字 */
  Name?: string;
  /** 数据目录类型,当前支持：TCC-HIVE */
  Type?: string;
  /** 描述信息 */
  Comment?: string;
  /** 状态信息：注册中0，待测试1，连接成功2，连接失败3，删除中4，已删除5 */
  Status?: number;
  /** Tcc数据目录连接信息 */
  Connection?: TccConnectionConfig;
  /** 操作人uin */
  Operator?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** Tcc数据目录信息集合 */
declare interface TccCatalogSet {
  /** 数据目录唯一id */
  Id?: string;
  /** 数据目录名字 */
  Name?: string;
  /** 数据目录类型,当前支持：TCC-HIVE */
  Type?: string;
  /** 状态信息：注册中0，待测试1，连接成功2，连接失败3，删除中4，已删除5 */
  Status?: number;
  /** 操作人uin */
  Operator?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** Tcc数据目录连接配置 */
declare interface TccConnection {
  /** 引擎终端节点服务Id */
  EndpointServiceId?: string;
  /** 元数据连接串 */
  MetaStoreUrl?: string;
  /** 网络信息 */
  NetWork?: NetWork;
  /** hive版本 */
  HiveVersion?: string;
  /** hive location */
  Location?: string;
  /** HMS终端节点服务 */
  HmsEndpointServiceId?: string;
}

/** Tcc数据目录连接信息 */
declare interface TccConnectionConfig {
  /** Tcc数据目录连接配置 */
  TccHive?: TccConnection;
}

declare interface AcceptTccVpcEndPointConnectRequest {
  /** 终端节点服务Id */
  EndPointServiceId?: string;
  /** 终端节点id */
  EndPointId?: string[];
  /** 是否接受连接 */
  AcceptFlag?: boolean;
}

declare interface AcceptTccVpcEndPointConnectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindTccVpcEndPointServiceWhiteListRequest {
  /** 终端节点服务Id */
  EndPointServiceId?: string;
  /** 需要开白的用户Uin */
  UserUin?: string;
  /** 用户描述 */
  Description?: string;
}

declare interface BindTccVpcEndPointServiceWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTccCatalogRequest {
  /** 数据目录Id */
  CatalogId?: string;
}

declare interface DescribeTccCatalogResponse {
  /** Tcc数据目录信息 */
  TccCatalog?: TccCatalogConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTccCatalogsRequest {
  /** 数据目录Id */
  CatalogId?: string;
  /** 数据目录名称 */
  Name?: string;
  /** 数据目录类型,当前支持：TCC-HIVE */
  Type?: string;
  /** 状态信息：注册中0，待测试1，连接成功2，连接失败3，删除中4，已删除5 */
  Status?: number;
  /** 操作人uin */
  Operator?: string;
}

declare interface DescribeTccCatalogsResponse {
  /** 数据目录列表 */
  TccCatalogSet?: TccCatalogSet[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tccatalog 统一Catalog服务} */
declare interface Tccatalog {
  (): Versions;
  /** 接受终端节点连接 {@link AcceptTccVpcEndPointConnectRequest} {@link AcceptTccVpcEndPointConnectResponse} */
  AcceptTccVpcEndPointConnect(data?: AcceptTccVpcEndPointConnectRequest, config?: AxiosRequestConfig): AxiosPromise<AcceptTccVpcEndPointConnectResponse>;
  /** 绑定终端节点服务用户白名单 {@link BindTccVpcEndPointServiceWhiteListRequest} {@link BindTccVpcEndPointServiceWhiteListResponse} */
  BindTccVpcEndPointServiceWhiteList(data?: BindTccVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<BindTccVpcEndPointServiceWhiteListResponse>;
  /** 获取Tcc数据目录信息 {@link DescribeTccCatalogRequest} {@link DescribeTccCatalogResponse} */
  DescribeTccCatalog(data?: DescribeTccCatalogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTccCatalogResponse>;
  /** 获取Tcc数据目录列表 {@link DescribeTccCatalogsRequest} {@link DescribeTccCatalogsResponse} */
  DescribeTccCatalogs(data?: DescribeTccCatalogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTccCatalogsResponse>;
}

export declare type Versions = ["2024-10-24"];

export default Tccatalog;
