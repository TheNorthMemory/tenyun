/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 系统生成的TID和密钥信息 */
declare interface TidKeysInfo {
  /** TID号码 */
  Tid: string;
  /** 公钥 */
  PublicKey: string;
  /** 私钥 */
  PrivateKey: string;
  /** 共享密钥 */
  Psk: string;
  /** 软加固白盒密钥下载地址 */
  DownloadUrl: string;
  /** 软加固设备标识码 */
  DeviceCode: string;
}

declare interface AuthTestTidRequest {
  /** 设备端SDK填入测试TID参数后生成的加密数据串 */
  Data: string;
}

declare interface AuthTestTidResponse {
  /** 认证结果 */
  Pass?: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BurnTidNotifyRequest {
  /** 订单编号 */
  OrderId: string;
  /** TID编号 */
  Tid: string;
}

declare interface BurnTidNotifyResponse {
  /** 接收回执成功的TID */
  Tid?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeliverTidNotifyRequest {
  /** 订单编号 */
  OrderId: string;
  /** TID编号 */
  Tid: string;
}

declare interface DeliverTidNotifyResponse {
  /** 剩余空发数量 */
  RemaindCount?: number;
  /** 已回执的TID编码 */
  Tid?: string;
  /** 产品公钥 */
  ProductKey?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeliverTidsRequest {
  /** 订单ID */
  OrderId: string;
  /** 数量，1~100 */
  Quantity: number;
}

declare interface DeliverTidsResponse {
  /** 空发的TID信息 */
  TidSet?: TidKeysInfo[] | null;
  /** 产品公钥 */
  ProductKey?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAvailableLibCountRequest {
  /** 订单编号 */
  OrderId: string;
}

declare interface DescribeAvailableLibCountResponse {
  /** 可空发的白盒密钥数量 */
  Quantity?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePermissionRequest {
}

declare interface DescribePermissionResponse {
  /** 企业用户 */
  EnterpriseUser?: boolean;
  /** 下载控制台权限 */
  DownloadPermission?: string;
  /** 使用控制台权限 */
  UsePermission?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DownloadTidsRequest {
  /** 订单编号 */
  OrderId: string;
  /** 下载数量：1~10 */
  Quantity: number;
}

declare interface DownloadTidsResponse {
  /** 下载的TID信息列表 */
  TidSet?: TidKeysInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UploadDeviceUniqueCodeRequest {
  /** 硬件唯一标识码 */
  CodeSet: string[];
  /** 硬件标识码绑定的申请编号 */
  OrderId: string;
}

declare interface UploadDeviceUniqueCodeResponse {
  /** 本次已上传数量 */
  Count?: number;
  /** 重复的硬件唯一标识码 */
  ExistedCodeSet?: string[] | null;
  /** 剩余可上传数量 */
  LeftQuantity?: number;
  /** 错误的硬件唯一标识码 */
  IllegalCodeSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyChipBurnInfoRequest {
  /** 验证数据 */
  Data: string;
}

declare interface VerifyChipBurnInfoResponse {
  /** 验证结果 */
  Pass?: boolean;
  /** 已验证次数 */
  VerifiedTimes?: number;
  /** 剩余验证次数 */
  LeftTimes?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Iottid 物联网设备身份认证} */
declare interface Iottid {
  (): Versions;
  /** {@link AuthTestTid 单向认证测试TID}({@link AuthTestTidRequest 请求参数}): {@link AuthTestTidResponse 返回参数} */
  AuthTestTid(data: AuthTestTidRequest, config?: AxiosRequestConfig): AxiosPromise<AuthTestTidResponse>;
  /** {@link BurnTidNotify 安全芯片TID烧录回执}({@link BurnTidNotifyRequest 请求参数}): {@link BurnTidNotifyResponse 返回参数} */
  BurnTidNotify(data: BurnTidNotifyRequest, config?: AxiosRequestConfig): AxiosPromise<BurnTidNotifyResponse>;
  /** {@link DeliverTidNotify 安全芯片TID空发回执}({@link DeliverTidNotifyRequest 请求参数}): {@link DeliverTidNotifyResponse 返回参数} */
  DeliverTidNotify(data: DeliverTidNotifyRequest, config?: AxiosRequestConfig): AxiosPromise<DeliverTidNotifyResponse>;
  /** {@link DeliverTids 请求空发TID信息}({@link DeliverTidsRequest 请求参数}): {@link DeliverTidsResponse 返回参数} */
  DeliverTids(data: DeliverTidsRequest, config?: AxiosRequestConfig): AxiosPromise<DeliverTidsResponse>;
  /** {@link DescribeAvailableLibCount 查询可空发的白盒密钥数量}({@link DescribeAvailableLibCountRequest 请求参数}): {@link DescribeAvailableLibCountResponse 返回参数} */
  DescribeAvailableLibCount(data: DescribeAvailableLibCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableLibCountResponse>;
  /** {@link DescribePermission 查询权限}({@link DescribePermissionRequest 请求参数}): {@link DescribePermissionResponse 返回参数} */
  DescribePermission(data?: DescribePermissionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePermissionResponse>;
  /** {@link DownloadTids 下载芯片订单的TID}({@link DownloadTidsRequest 请求参数}): {@link DownloadTidsResponse 返回参数} */
  DownloadTids(data: DownloadTidsRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadTidsResponse>;
  /** {@link UploadDeviceUniqueCode 上传硬件唯一标识码}({@link UploadDeviceUniqueCodeRequest 请求参数}): {@link UploadDeviceUniqueCodeResponse 返回参数} */
  UploadDeviceUniqueCode(data: UploadDeviceUniqueCodeRequest, config?: AxiosRequestConfig): AxiosPromise<UploadDeviceUniqueCodeResponse>;
  /** {@link VerifyChipBurnInfo 验证芯片烧录TID信息}({@link VerifyChipBurnInfoRequest 请求参数}): {@link VerifyChipBurnInfoResponse 返回参数} */
  VerifyChipBurnInfo(data: VerifyChipBurnInfoRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyChipBurnInfoResponse>;
}

export declare type Versions = ["2019-04-11"];

export default Iottid;