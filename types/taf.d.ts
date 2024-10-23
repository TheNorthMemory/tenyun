/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 业务入参 */
declare interface Device {
  /** 业务入参id */
  DeviceId: string;
  /** 业务入参类型 */
  DeviceType: number;
}

/** 业务入参 */
declare interface InputBusinessEncryptData {
  /** 加密方式；0：AES;1:DES */
  EncryptMethod: number;
  /** 业务数据加密字符串 */
  EncryptData: string;
  /** 加密模式；0：ECB,1:CBC;2:CTR;3:CFB;4:OFB */
  EncryptMode: number;
  /** 填充模式;0:ZERO ;1:PKCS5;3:PKCS7 */
  PaddingType: number;
}

/** 流量反欺诈-验准入参 */
declare interface InputRecognizeTargetAudience {
  /** 模型ID列表 */
  ModelIdList: number[];
  /** 设备ID，AccountType指定的类型 */
  Uid?: string;
  /** 设备号类型，1.imei 2.imeiMd5（小写后转MD5转小写）3.idfa， 4.idfaMd5（大写后转MD5转小写），5.手机号,256.其它 */
  AccountType?: number;
  /** 用户IP */
  Ip?: string;
  /** 操作系统类型(unknown，android，ios，windows) */
  Os?: string;
  /** 操作系统版本 */
  Osv?: string;
  /** 纬度 */
  Lat?: string;
  /** 经度 */
  Lon?: string;
  /** 设备型号(MI 6) */
  DeviceModel?: string;
  /** 竞价底价 */
  BidFloor?: number;
  /** 年龄 */
  Age?: number;
  /** 性别(1.MALE 2.FEMALE) */
  Gender?: number;
  /** 用户地址 */
  Location?: string;
  /** 投放模式（0=PDB，1=PD，2=RTB，10=其他） */
  DeliveryMode?: number;
  /** 广告位类型（0=前贴片，1=开屏广告，2=网页头部广告、3=网页中部广告、4=网页底部广告、5=悬浮广告、10=其它） */
  AdvertisingType?: number;
  /** mac地址，建议提供 */
  Mac?: string;
  /** 电话号码 */
  Phone?: string;
  /** 浏览器类型 */
  Ua?: string;
  /** 客户端应用 */
  App?: string;
  /** 应用包名 */
  Package?: string;
  /** 设备制造商 */
  Maker?: string;
  /** 设备类型（PHONE,TABLET） */
  DeviceType?: string;
  /** 入网方式(wifi,4g,3g,2g) */
  AccessMode?: string;
  /** 运营商(1.移动 2.联通 3.电信等) */
  Sp?: number;
  /** 设备屏幕分辨率宽度像素数 */
  DeviceW?: number;
  /** 设备屏幕分辨率高度像素数 */
  DeviceH?: number;
  /** 是否全屏插广告(0-否，1-是) */
  FullScreen?: number;
  /** 广告位宽度 */
  ImpBannerW?: number;
  /** 广告位高度 */
  ImpBannerH?: number;
  /** 网址 */
  Url?: string;
  /** 上下文信息 */
  Context?: string;
  /** 渠道 */
  Channel?: string;
  /** 请求ID */
  ReqId?: string;
  /** 请求ID的md5值 */
  ReqMd5?: string;
  /** ad_type */
  AdType?: number;
  /** app名称 */
  AppName?: string;
  /** app版本描述 */
  AppVer?: string;
  /** 竞价模式1：rtb 2:pd */
  ReqType?: number;
  /** 用户是否授权,1为授权，0为未授权 */
  IsAuthorized?: number;
  /** 设备信息 */
  DeviceList?: Device[];
}

/** 业务入参 */
declare interface ManagePortraitRiskInput {
  /** 请求时间戳秒 */
  PostTime: number;
  /** 用户公网ip（仅支持IPv4） */
  UserIp: string;
  /** 渠道号 */
  Channel: number;
}

/** 业务出参 */
declare interface ManagePortraitRiskOutput {
  /** 返回码（0，成功，其他失败） */
  Code?: number;
  /** 返回码对应的信息 */
  Message?: string | null;
  /** 结果 */
  Value?: ManagePortraitRiskValueOutput | null;
}

/** 业务出参 */
declare interface ManagePortraitRiskValueOutput {
  /** 对应的IP */
  UserIp?: string;
  /** 返回风险等级, 0 - 4，0代表无风险，数值越大，风险越高 */
  Level?: number;
}

/** 流量反欺诈-验准返回值 */
declare interface OutputRecognizeTargetAudience {
  /** 返回码（0，成功，其他失败） */
  Code: number;
  /** 返回码对应的信息 */
  Message: string | null;
  /** 返回模型结果 */
  Value: OutputRecognizeTargetAudienceValue[] | null;
}

/** 流量反欺诈-验准返回的查询分值 */
declare interface OutputRecognizeTargetAudienceValue {
  /** 模型ID */
  ModelId: number | null;
  /** 是否正常返回结果 */
  IsFound: number | null;
  /** 返回分值 */
  Score: number | null;
  /** 模型类型 */
  ModelType: number | null;
  /** 入参Uid */
  Uid: string | null;
}

declare interface ManagePortraitRiskRequest {
  /** 业务入参 */
  BusinessSecurityData: ManagePortraitRiskInput;
}

declare interface ManagePortraitRiskResponse {
  /** 业务出参 */
  Data?: ManagePortraitRiskOutput | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeCustomizedAudienceRequest {
  /** 业务入参 */
  BspData: InputRecognizeTargetAudience;
}

declare interface RecognizeCustomizedAudienceResponse {
  /** 业务出参 */
  Data?: OutputRecognizeTargetAudience | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizePreciseTargetAudienceRequest {
  /** 业务数据 */
  BspData: InputRecognizeTargetAudience;
}

declare interface RecognizePreciseTargetAudienceResponse {
  /** 回包数据 */
  Data?: OutputRecognizeTargetAudience | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeTargetAudienceRequest {
  /** 业务数据 */
  BspData: InputRecognizeTargetAudience;
  /** 业务加密数据 */
  BusinessEncryptData?: InputBusinessEncryptData;
}

declare interface RecognizeTargetAudienceResponse {
  /** 回包数据 */
  Data?: OutputRecognizeTargetAudience | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Taf 流量反欺诈} */
declare interface Taf {
  (): Versions;
  /** 虚假流量识别 {@link ManagePortraitRiskRequest} {@link ManagePortraitRiskResponse} */
  ManagePortraitRisk(data: ManagePortraitRiskRequest, config?: AxiosRequestConfig): AxiosPromise<ManagePortraitRiskResponse>;
  /** 流量反欺诈-流量验准定制版 {@link RecognizeCustomizedAudienceRequest} {@link RecognizeCustomizedAudienceResponse} */
  RecognizeCustomizedAudience(data: RecognizeCustomizedAudienceRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeCustomizedAudienceResponse>;
  /** 流量反欺诈-流量验准高级版 {@link RecognizePreciseTargetAudienceRequest} {@link RecognizePreciseTargetAudienceResponse} */
  RecognizePreciseTargetAudience(data: RecognizePreciseTargetAudienceRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePreciseTargetAudienceResponse>;
  /** 流量反欺诈-流量验准 {@link RecognizeTargetAudienceRequest} {@link RecognizeTargetAudienceResponse} */
  RecognizeTargetAudience(data: RecognizeTargetAudienceRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeTargetAudienceResponse>;
}

export declare type Versions = ["2020-02-10"];

export default Taf;
