/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 返回结构 */
declare interface Data {
  /** 操作时间戳，单位秒 */
  PostTime: number;
  /** 用户ID accountType不同对应不同的用户ID。如果是QQ或微信用户则填入对应的openId */
  Uid: string;
  /** 操作来源的外网IP */
  UserIp: string;
  /** 0~100：营销价值评分，分值越高，价值越大[0,50]低价值[50,70]价值一般[70,100]高价值 */
  ValueScore: number;
}

declare interface MarketingValueJudgementRequest {
  /** 手机账号类型填写4 */
  AccountType: number;
  /** 填写手机号码，如15317537488 */
  Uid: string;
  /** 用户请求时的客户端外网IP */
  UserIp: string;
  /** 用户操作时间戳，单位秒（格林威治时间精确到秒，如1501590972） */
  PostTime: number;
  /** 用户设备号imei/idfa(建议填写) */
  Imei?: string;
  /** 活动链接(建议填写) */
  Referer?: string;
}

declare interface MarketingValueJudgementResponse {
  /** 返回数据 */
  Data?: Data;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mvj 营销价值判断} */
declare interface Mvj {
  (): Versions;
  /** 营销价值判断 {@link MarketingValueJudgementRequest} {@link MarketingValueJudgementResponse} */
  MarketingValueJudgement(data: MarketingValueJudgementRequest, config?: AxiosRequestConfig): AxiosPromise<MarketingValueJudgementResponse>;
}

export declare type Versions = ["2019-09-26"];

export default Mvj;
