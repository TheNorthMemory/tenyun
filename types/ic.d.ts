/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 物联网卡应用信息详情 */
declare interface AppInfo {
  /** 应用ID */
  Sdkappid: string;
  /** 应用key */
  Appkey: string;
  /** 用户appid */
  CloudAppid: string;
  /** 应用名称 */
  Name: string | null;
  /** 应用描述 */
  Description: string;
  /** 创建时间 */
  CreatedTime: string;
  /** 应用类型 */
  BizType: number;
  /** 用户Uin */
  Uin: string;
}

/** 卡片详细信息 */
declare interface CardInfo {
  /** 卡片ID */
  Iccid: string;
  /** 卡电话号码 */
  Msisdn: string | null;
  /** 卡imsi */
  Imsi: string | null;
  /** 卡imei */
  Imei: string | null;
  /** 应用ID */
  Sdkappid: string;
  /** 运营商编号 */
  Teleoperator: number;
  /** 卡片状态 1:未激活 2：激活 3：停卡 5：销卡 */
  CardStatus: number;
  /** 网络状态 */
  NetworkStatus: number | null;
  /** 激活时间 */
  ActivitedTime: string | null;
  /** 资费类型，1 单卡，2 流量池 */
  Type: number;
  /** 套餐类型 */
  ProductId: string | null;
  /** 流量池ID */
  PoolId: string | null;
  /** 周期套餐流量使用 */
  DataUsedInPeriod: number | null;
  /** 周期套餐总量 */
  DataTotalInPeriod: number | null;
  /** 过期时间 */
  ProductExpiredTime: string | null;
  /** 描述信息 */
  Description: string | null;
  /** 创建时间 */
  CreatedTime: string;
  /** 修改时间 */
  ModifiedTime: string;
  /** 套餐周期 */
  PreorderCnt: number | null;
  /** 激活被回调标志 */
  IsActivated: number | null;
  /** 订单ID */
  OrderId: string | null;
  /** 是否自动续费 */
  AutoRenew: number | null;
  /** 备注 */
  Remark: string | null;
  /** 0 不需要开通达量不停卡 1 需要开通达量不停卡 */
  AllowArrears: number | null;
  /** 是否开通短信0:未开短信 1:开通短信 */
  NeedSms: number;
  /** 供应商 */
  Provider: number;
  /** 实名认证 0:无 1:未实名 2:已实名 */
  CertificationState: number | null;
  /** 其他流量信息,流量分离统计其他流量 */
  OtherData: number | null;
}

/** 卡片列表数据 */
declare interface CardList {
  /** 卡片总数 */
  Total: string;
  /** 卡片列表信息 */
  List: CardInfo[] | null;
}

/** 订单ID集合 */
declare interface ResOrderIds {
  /** 每一张续费卡片的订单ID数组 */
  OrderIds: string[] | null;
}

/** 云api 卡片续费 */
declare interface ResRenew {
  /** 每一张续费卡片的订单ID数组 */
  OrderIds: string[] | null;
}

/** 查询短信列表 */
declare interface ResSms {
  /** 卡片ID */
  Iccid: string | null;
  /** 卡片号码 */
  Msisdn: string | null;
  /** 应用ID */
  SdkAppid: number | null;
  /** 短信内容 */
  Content: string | null;
  /** 短信类型 */
  SmsType: number | null;
  /** 发送时间 */
  SendTime: string | null;
  /** 推送时间 */
  ReportTime: string | null;
  /** SUCC：成功 FAIL 失败 */
  Remark: string | null;
  /** 回执状态 */
  Status: number | null;
}

/** 短信流水信息 */
declare interface SmsRet {
  /** 该iccid请求状态 */
  Code: string;
  /** 短信发送返回信息 */
  Msg: string;
  /** 卡片ID */
  Iccid: string;
  /** 流水ID */
  Sid: string;
}

/** 短信流水信息 */
declare interface SmsSid {
  /** 卡片ID */
  Iccid: string | null;
  /** 信息流水ID */
  Sid: string;
}

declare interface DescribeAppRequest {
  /** 物联卡应用ID */
  Sdkappid: number;
}

declare interface DescribeAppResponse {
  /** 应用信息详情 */
  Data: AppInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCardRequest {
  /** 应用ID */
  Sdkappid: number;
  /** 卡片ID */
  Iccid: string;
}

declare interface DescribeCardResponse {
  /** 卡片详细信息 */
  Data: CardInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCardsRequest {
  /** 应用ID */
  Sdkappid: string;
  /** 偏移值 */
  Offset: number;
  /** 列表限制 */
  Limit: number;
}

declare interface DescribeCardsResponse {
  /** 卡片列表信息 */
  Data: CardList;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSmsRequest {
  /** 应用ID */
  Sdkappid: number;
  /** 卡片ID */
  Iccid?: string;
  /** 卡片号码 */
  Msisdn?: string;
  /** 短信类型 */
  SmsType?: number;
  /** 开始时间 YYYY-MM-DD HH:mm:ss */
  BeginTime?: string;
  /** 结束时间 YYYY-MM-DD HH:mm:ss */
  EndTime?: string;
  /** 偏移量 */
  Offset?: number;
  /** 小于200 */
  Limit?: number;
}

declare interface DescribeSmsResponse {
  /** 总数 */
  Total?: number | null;
  /** 短信列表 */
  List?: ResSms[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyUserCardRemarkRequest {
  /** 应用ID */
  Sdkappid: number;
  /** 物联卡ICCID */
  Iccid: string;
  /** 备注信息，限50字 */
  Remark?: string;
}

declare interface ModifyUserCardRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PayForExtendDataRequest {
  /** 卡片ICCID */
  Iccid: string;
  /** 套外流量,单位MB */
  ExtentData: number;
  /** 应用ID */
  Sdkappid: number;
}

declare interface PayForExtendDataResponse {
  /** 订单号 */
  Data: ResOrderIds;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RenewCardsRequest {
  /** 应用ID */
  Sdkappid: number;
  /** 续费的iccid */
  Iccids: string[];
  /** 续费的周期（单位：月） */
  RenewNum: number;
}

declare interface RenewCardsResponse {
  /** 续费成功的订单id */
  Data: ResRenew | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendMultiSmsRequest {
  /** 应用ID */
  Sdkappid: string;
  /** 卡片列表 */
  Iccids: string[];
  /** 短信内容 长度限制 70 */
  Content: string;
}

declare interface SendMultiSmsResponse {
  /** 短信流水数组 */
  Data?: SmsRet[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendSmsRequest {
  /** 应用ID */
  Sdkappid: number;
  /** 卡片ID */
  Iccid: string;
  /** 短信内容长度70限制 */
  Content: string;
}

declare interface SendSmsResponse {
  /** 短信流水信息 */
  Data?: SmsSid | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [物联卡](https://cloud.tencent.com/document/product/636) */
declare interface Ic {
  (): Versions;
  /** 查询应用详情 */
  DescribeApp(data: DescribeAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppResponse>;
  /** 查询卡片详情 */
  DescribeCard(data: DescribeCardRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCardResponse>;
  /** 查询卡片列表 */
  DescribeCards(data: DescribeCardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCardsResponse>;
  /** 查询短信列表 */
  DescribeSms(data: DescribeSmsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmsResponse>;
  /** 编辑卡片备注 */
  ModifyUserCardRemark(data: ModifyUserCardRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserCardRemarkResponse>;
  /** 购买套外流量包 */
  PayForExtendData(data: PayForExtendDataRequest, config?: AxiosRequestConfig): AxiosPromise<PayForExtendDataResponse>;
  /** 卡片续费 */
  RenewCards(data: RenewCardsRequest, config?: AxiosRequestConfig): AxiosPromise<RenewCardsResponse>;
  /** 群发短信接口 */
  SendMultiSms(data: SendMultiSmsRequest, config?: AxiosRequestConfig): AxiosPromise<SendMultiSmsResponse>;
  /** 发送短信息接口 */
  SendSms(data: SendSmsRequest, config?: AxiosRequestConfig): AxiosPromise<SendSmsResponse>;
}

export declare type Versions = ["2019-03-07"];

export default Ic;
