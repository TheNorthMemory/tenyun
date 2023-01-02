/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 购买详情 */
declare interface GoodsDetail {
  /** 按照四层接入的产品需要传入产品标签,例如:p_cvm */
  ProductCode: string | null;
  /** 四层定义的子产品标签,例如:sp_cvm_s1 */
  SubProductCode: string | null;
  /** 资源类型 */
  Type: string[] | null;
  /** 资源数量 */
  GoodsNum: number | null;
}

/** 资源信息 */
declare interface Resource {
  /** 资源拥有者 */
  UIN: string | null;
  /** 云平台应用ID，一般来说与uin存在一一对应的关系 */
  AppId: number | null;
  /** 资源id，会展示到通知内容 */
  ResourceId: string | null;
  /** 区域ID */
  ZoneId: number | null;
  /** 资源状态，1正常，2隔离，3销毁(如果资源已经删除或销毁，不需要返回)，4冻结/封禁 */
  Status: number | null;
  /** 资源隔离时间，未隔离传"0000-00-00 00:00:00"，资源由隔离变回正常传"0000-00-00 00:00:00" */
  IsolatedTimestamp: string | null;
  /** 资源创建时间，用于更新新购订单的资源开始时间，按时长退费时的资源结束时间取自订单的资源结束时间， */
  CreateTime: string | null;
  /** 0后付费 1预付费 2预留实例 */
  PayMode: number | null;
  /** 资源名称，账单中资源别名，生命周期通知中的资源名称，不返回则通知中展示为空 */
  Alias: string | null;
  /** 购买详情 */
  GoodsDetail: GoodsDetail | null;
  /** 预付费必填 ，自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费，用户开通了预付费不停服特权也会进行自动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续费，需要设置为0 */
  RenewFlag: number | null;
  /** （仅预付费）资源到期时间，无到期概念传"0000-00-00 00:00:00" */
  ExpireTime: string | null;
  /** 地域ID */
  Region: number | null;
  /** sdk appid */
  SdkAppId: string | null;
  /** app名称 */
  AppName: string | null;
  /** app的package名称 */
  PackageName: string | null;
  /** 资源链接 */
  URL: string | null;
  /** app的entry */
  Entry: string | null;
  /** 0：sdk 1：素材 */
  InstType: number | null;
  /** license的秘钥 */
  Key: string | null;
}

declare interface CheckAppidExistRequest {
  /** 业务的appid */
  SDKAppid: string;
  /** sub product code */
  Type: string;
}

declare interface CheckAppidExistResponse {
  /** appid是否存在 */
  Exist: boolean;
  /** 请求是否成功 */
  HasError: boolean;
  /** 出错消息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryResourceInfoRequest {
  /** 资源id */
  InstanceId: string;
}

declare interface QueryResourceInfoResponse {
  /** 资源信息 */
  Resource: Resource | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryResourceRequest {
  /** 0: sdk 1:material */
  Type: number;
  /** 分页起始页 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
}

declare interface QueryResourceResponse {
  /** 资源信息列表 */
  Resources: Resource[] | null;
  /** 总量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Anicloud 动效素材服务} */
declare interface Anicloud {
  (): Versions;
  /** 查看appid是否存在 {@link CheckAppidExistRequest} {@link CheckAppidExistResponse} */
  CheckAppidExist(data: CheckAppidExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAppidExistResponse>;
  /** 查询购买资源 {@link QueryResourceRequest} {@link QueryResourceResponse} */
  QueryResource(data: QueryResourceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryResourceResponse>;
  /** 查询资源信息 {@link QueryResourceInfoRequest} {@link QueryResourceInfoResponse} */
  QueryResourceInfo(data: QueryResourceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryResourceInfoResponse>;
}

export declare type Versions = ["2022-09-23"];

export default Anicloud;
