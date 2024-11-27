/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 节省计划抵扣明细 */
declare interface SavingPlanDeductDetail {
  /** 账号id */
  OwnerUin?: string | null;
  /** 账号名称 */
  OwnerUinName?: string | null;
  /** 抵扣账号id */
  PayerUin?: string | null;
  /** 抵扣账号名称 */
  PayerUinName?: string | null;
  /** 节省计划资源id */
  SpId?: string | null;
  /** 产品编码 */
  ProductCode?: string | null;
  /** 产品名称 */
  ProductName?: string | null;
  /** 子产品编码 */
  SubProductCode?: string | null;
  /** 子产品名称 */
  SubProductName?: string | null;
  /** 交易ID */
  OutTradeNo?: string | null;
  /** 地域id */
  RegionId?: number | null;
  /** 地域名称 */
  RegionName?: string | null;
  /** 地区id */
  ZoneId?: number | null;
  /** 地区名称 */
  ZoneName?: string | null;
  /** 开始使用时间 */
  SpStartTime?: string | null;
  /** 结束使用时间 */
  SpEndTime?: string | null;
  /** 折扣时间 */
  DeductTime?: string | null;
  /** 抵扣金额，单位分 */
  DeductAmount?: string | null;
  /** 抵扣折扣率 */
  DeductDiscount?: string | null;
  /** 抵扣比率 */
  DeductRate?: string | null;
}

/** 节省计划总览明细数据 */
declare interface SavingPlanOverviewDetail {
  /** 节省计划类型 */
  SpType?: string;
  /** 支付金额（单位：元） */
  PayAmount?: string;
  /** 开始时间 yyyy-mm-dd HH:mm:ss格式 */
  StartTime?: string;
  /** 结束时间 yyyy-mm-dd HH:mm:ss格式 */
  EndTime?: string;
  /** 状态 */
  Status?: number;
  /** 累计节省金额（单位：元） */
  SavingAmount?: string;
  /** 地域 */
  Region?: string[];
  /** 支付类型 */
  PayType?: number | null;
  /** 购买时间 yyyy-mm-dd HH:mm:ss格式 */
  BuyTime?: string | null;
}

/** 节省计划使用率数据 */
declare interface SavingPlanUsageDetail {
  /** 节省计划类型 */
  SpType?: string;
  /** 节省计划状态 */
  Status?: number;
  /** 累计抵扣的金额（单位：元） */
  DeductAmount?: string;
  /** 累计承诺消费金额（单位：元） */
  PromiseAmount?: string;
  /** 累计净节省金额（单位：元） */
  NetSavings?: string;
  /** 使用率 */
  UtilizationRate?: number;
  /** 累计流失金额（单位：元） */
  LossAmount?: string;
  /** 累计按量计费预期金额（单位：元） */
  DosageAmount?: string;
  /** 累计成本金额（单位：元） */
  CostAmount?: string;
  /** 地域 */
  Region?: string[] | null;
}

declare interface CreateSavingPlanOrderRequest {
  /** 地域编码 */
  RegionId: number;
  /** 区域编码 */
  ZoneId: number;
  /** 预付费类型 */
  PrePayType: string;
  /** 时长 */
  TimeSpan: number;
  /** 时长单位 */
  TimeUnit: string;
  /** 商品唯一标识 */
  CommodityCode: string;
  /** 承诺时长内的小额金额（单位：元） */
  PromiseUseAmount: number;
  /** 节省计划的指定生效时间，若不传则为当前下单时间。传参数格式:"2023-10-01 00:00:00"，仅支持指定日期的0点时刻 */
  SpecifyEffectTime?: string;
  /** 可重入ID */
  ClientToken?: string;
}

declare interface CreateSavingPlanOrderResponse {
  /** 订单号 */
  BigDealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSavingPlanDeductRequest {
  /** 分页偏移量 */
  Offset: number;
  /** 每页数量，最大值为200 */
  Limit: number;
  /** 节省计划使用开始的查询结束时间 */
  StartEndDate: string;
  /** 节省计划使用开始的查询开始时间 */
  StartStartDate: string;
  /** 地域编码 */
  RegionId?: number;
  /** 区域编码 */
  ZoneId?: number;
  /** 节省计划资源id */
  SpId?: string;
  /** 抵扣查询结束时间，格式：yyyy-MM-dd HH:mm:ss */
  DeductEndDate?: string;
  /** 抵扣查询开始时间，格式：yyyy-MM-dd HH:mm:ss */
  DeductStartDate?: string;
  /** 节省计划使用结束的查询结束时间 */
  EndEndDate?: string;
  /** 节省计划使用结束的查询开始时间 */
  EndStartDate?: string;
}

declare interface DescribeSavingPlanDeductResponse {
  /** 查询命中的节省计划抵扣明细数据总条数 */
  Total?: number | null;
  /** 查询命中的节省计划抵扣明细数据明细 */
  Deducts?: SavingPlanDeductDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSavingPlanOverviewRequest {
  /** 开始时间，格式yyyy-MM-dd 注：查询范围请勿超过6个月 */
  StartDate: string;
  /** 结束时间，格式yyyy-MM-dd */
  EndDate: string;
  /** 分页偏移量 */
  Offset: number;
  /** 每页数量，最大值为200 */
  Limit: number;
}

declare interface DescribeSavingPlanOverviewResponse {
  /** 节省计划总览明细数据 */
  Overviews?: SavingPlanOverviewDetail[] | null;
  /** 查询命中的节省计划总览明细数据总条数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSavingPlanUsageRequest {
  /** 开始时间，格式yyyy-MM-dd 注：查询范围请勿超过6个月 */
  StartDate: string;
  /** 结束时间，格式yyyy-MM-dd */
  EndDate: string;
  /** 分页偏移量 */
  Offset: number;
  /** 每页数量，最大值为200 */
  Limit: number;
  /** 查询结果数据的时间间隔 */
  TimeInterval: string;
}

declare interface DescribeSavingPlanUsageResponse {
  /** 查询命中的节省计划总览明细数据总条数 */
  Total?: number;
  /** 节省计划使用率数据 */
  Usages?: SavingPlanUsageDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Svp 节省计划} */
declare interface Svp {
  (): Versions;
  /** 创建节省计划订单 {@link CreateSavingPlanOrderRequest} {@link CreateSavingPlanOrderResponse} */
  CreateSavingPlanOrder(data: CreateSavingPlanOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSavingPlanOrderResponse>;
  /** 查询节省计划抵扣明细 {@link DescribeSavingPlanDeductRequest} {@link DescribeSavingPlanDeductResponse} */
  DescribeSavingPlanDeduct(data: DescribeSavingPlanDeductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanDeductResponse>;
  /** 查询节省计划总览明细 {@link DescribeSavingPlanOverviewRequest} {@link DescribeSavingPlanOverviewResponse} */
  DescribeSavingPlanOverview(data: DescribeSavingPlanOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanOverviewResponse>;
  /** 查询节省计划使用率明细 {@link DescribeSavingPlanUsageRequest} {@link DescribeSavingPlanUsageResponse} */
  DescribeSavingPlanUsage(data: DescribeSavingPlanUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanUsageResponse>;
}

export declare type Versions = ["2024-01-25"];

export default Svp;
