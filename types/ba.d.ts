/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateWeappQRUrlRequest {
  /** 代理角色临时密钥的Token */
  SessionKey: string;
}

declare interface CreateWeappQRUrlResponse {
  /** 渠道备案小程序二维码 */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGetAuthInfoRequest {
}

declare interface DescribeGetAuthInfoResponse {
  /** 实名认证状态：0未实名，1已实名 */
  IsTenPayMasked: string;
  /** 实名认证类型：0个人，1企业 */
  IsAuthenticated: string;
  /** 认证类型，个人0，企业1 */
  Type: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SyncIcpOrderWebInfoRequest {
  /** 备案ICP订单号 */
  IcpOrderId: string;
  /** 订单里的webId */
  SourceWebId: string;
  /** 订单里的webId 数组(如果传入的webIds含有 订单中不包含的webId，会自动跳过) */
  TargetWebIds: string[];
  /** 网站信息字段名 数组 */
  SyncFields: string[];
  /** 是否先判断同步的网站负责人是否一致 (这里会判断 sitePersonName, sitePersonCerType,sitePersonCerNum三个字段完全一致) 默认:true. 非必要 不建议关闭修改该参数默认值 */
  CheckSamePerson?: boolean;
}

declare interface SyncIcpOrderWebInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 网站备案 */
declare interface Ba {
  (): Versions;
  /** 创建渠道备案小程序二维码 */
  CreateWeappQRUrl(data: CreateWeappQRUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWeappQRUrlResponse>;
  /** 获取实名认证信息 */
  DescribeGetAuthInfo(data?: DescribeGetAuthInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGetAuthInfoResponse>;
  /** 同步备案ICP订单网站信息 */
  SyncIcpOrderWebInfo(data: SyncIcpOrderWebInfoRequest, config?: AxiosRequestConfig): AxiosPromise<SyncIcpOrderWebInfoResponse>;
}

export declare type Versions = ["2020-07-20"];

export default Ba;
