/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 设备信息 */
declare interface DevInfoQ {
  /** devid */
  OpenId: string;
  /** 风险值 */
  RiskScore: number;
  /** 风险详情 */
  RiskInfo: RiskDetail[] | null;
  /** 概率值 */
  Probability: number;
}

/** 风险详情 */
declare interface RiskDetail {
  /** 风险码 */
  RiskCode: number;
  /** 风险详情 */
  RiskCodeValue: string | null;
}

/** 风险信息 */
declare interface RiskInfo {
  /** 风险码 */
  Key: number;
  /** 风险详情 */
  Value: string | null;
}

declare interface GetOpenIdRequest {
  /** dev临时token，通过sdk接口获取 */
  DeviceToken: string;
  /** 业务ID */
  BusinessId: number;
  /** 业务侧账号体系下的用户ID */
  BusinessUserId?: string;
  /** 平台：0-Android， 1-iOS， 2-web */
  Platform?: number;
  /** 选项 */
  Option?: string;
}

declare interface GetOpenIdResponse {
  /** 设备ID */
  OpenId?: string | null;
  /** 设备风险 */
  RiskInfo?: RiskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTokenRequest {
  /** 业务ID */
  BusinessId: number;
  /** 业务子场景 */
  Scene: number;
  /** 业务侧账号体系下的用户ID */
  BusinessUserId?: string;
  /** 用户侧的IP */
  AppClientIp?: string;
  /** 过期时间 */
  ExpireTime?: number;
  /** 上一个token */
  OldToken?: string;
}

declare interface GetTokenResponse {
  /** 返回token */
  Token?: string;
  /** 过期时间 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface QueryDevAndRiskRequest {
  /** 设备类型 0表示Android， 1表示IOS */
  DevType: number;
  /** Android Imei号 */
  Imei?: string;
  /** Mac地址 */
  Mac?: string;
  /** android Aid */
  Aid?: string;
  /** Android Cid */
  Cid?: string;
  /** 手机Imsi */
  Imsi?: string;
  /** Df 磁盘分区信息 */
  Df?: string;
  /** 内核版本 */
  KernelVer?: string;
  /** 存储大小 */
  Storage?: string;
  /** 设备驱动指纹 */
  Dfp?: string;
  /** 启动时间 */
  BootTime?: string;
  /** 分辨率 水平*垂直 格式 */
  Resolution?: string;
  /** 铃声列表 */
  RingList?: string;
  /** 字体列表 */
  FontList?: string;
  /** 传感器列表 */
  SensorList?: string;
  /** CPU型号 */
  CpuType?: string;
  /** 电池容量 */
  Battery?: string;
  /** 信通院广告ID */
  Oaid?: string;
  /** IOS 广告ID */
  Idfa?: string;
  /** IOS 应用ID */
  Idfv?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** IOS手机型号 */
  IphoneModel?: string;
  /** Android 指纹 */
  Fingerprint?: string;
  /** Android序列号 */
  SerialId?: string;
}

declare interface QueryDevAndRiskResponse {
  /** 是否查得 */
  Found?: number;
  /** 匹配数量级别 */
  AllCnt?: number | null;
  /** 匹配到的设备信息 */
  Matches?: DevInfoQ[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [风险探针](https://cloud.tencent.com/document/product/1169) */
declare interface Rkp {
  (): Versions;
  /** RPopenID查询 */
  GetOpenId(data: GetOpenIdRequest, config?: AxiosRequestConfig): AxiosPromise<GetOpenIdResponse>;
  /** 获取token */
  GetToken(data: GetTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetTokenResponse>;
  /** Devid及风险查询 */
  QueryDevAndRisk(data: QueryDevAndRiskRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDevAndRiskResponse>;
}

export declare type Versions = ["2019-12-09"];

export default Rkp;
