/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 节省计划覆盖率数据 */
declare interface SavingPlanCoverageDetail {
  /** 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID */
  ResourceId?: string;
  /** 地域ID */
  RegionId?: number;
  /** 产品编码 */
  ProductCode?: string;
  /** 子产品编码 */
  SubProductCode?: string;
  /** 费用起始日期，格式yyyy-MM-dd */
  StartDate?: string;
  /** 费用结束日期，格式yyyy-MM-dd，目前与StartDate相等 */
  EndDate?: string;
  /** 节省计划覆盖金额（即节省计划支付金额） */
  SpCoveredAmount?: number;
  /** 节省计划未覆盖金额（即优惠后总价） */
  SpUncoveredAmount?: number;
  /** 总支出（即节省计划未覆盖金额 + 节省计划覆盖金额） */
  TotalRealAmount?: number;
  /** 按量计费预期金额（即折前价 * 折扣） */
  ExpectedAmount?: number;
  /** 覆盖率结果，取值[0, 100] */
  SpCoverage?: number;
  /** 支付者昵称 */
  PayerUinName?: string;
  /** 使用者昵称 */
  OwnerUinName?: string;
  /** 支付者uin */
  PayerUin?: string;
  /** 计费项名称 */
  SubBillingItemName?: string;
  /** 计费细项名称 */
  BillingItemName?: string;
  /** 子产品名称 */
  SubProductName?: string;
}

/** 节省计划覆盖率聚合数据 */
declare interface SavingPlanCoverageRate {
  /** 聚合时间维度，按天聚合格式为yyyy-MM-dd，按月聚合格式为yyyy-MM */
  DatePoint?: string;
  /** 覆盖率结果，取值[0, 100] */
  Rate?: number;
}

/** 节省计划抵扣明细 */
declare interface SavingPlanDeductDetail {
  /** 账号id */
  OwnerUin?: string;
  /** 账号名称 */
  OwnerUinName?: string;
  /** 抵扣账号id */
  PayerUin?: string;
  /** 抵扣账号名称 */
  PayerUinName?: string;
  /** 节省计划资源id */
  SpId?: string;
  /** 产品编码 */
  ProductCode?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 子产品编码 */
  SubProductCode?: string;
  /** 子产品名称 */
  SubProductName?: string;
  /** 交易ID */
  OutTradeNo?: string;
  /** 地域id */
  RegionId?: number;
  /** 地域名称 */
  RegionName?: string;
  /** 地区id */
  ZoneId?: number;
  /** 地区名称 */
  ZoneName?: string;
  /** 开始使用时间 */
  SpStartTime?: string;
  /** 结束使用时间 */
  SpEndTime?: string;
  /** 折扣时间 */
  DeductTime?: string;
  /** 抵扣金额，单位分 */
  DeductAmount?: string;
  /** 抵扣折扣率 */
  DeductDiscount?: string;
  /** 抵扣比率 */
  DeductRate?: string;
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
  PayType?: number;
  /** 购买时间 yyyy-mm-dd HH:mm:ss格式 */
  BuyTime?: string;
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
  Region?: string[];
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

declare interface DescribeSavingPlanCoverageRequest {
  /** 费用起始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 费用结束日期，格式yyyy-MM-dd */
  EndDate: string;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推 */
  Offset: number;
  /** 数量，最大值为200 */
  Limit: number;
  /** 取值包括1（缺省值）和2，1表示按天统计覆盖率，2表示按月统计覆盖率，此参数仅影响返回的RateSet聚合粒度，不影响返回的DetailSet */
  PeriodType?: number;
}

declare interface DescribeSavingPlanCoverageResponse {
  /** 节省计划覆盖率明细数据 */
  DetailSet?: SavingPlanCoverageDetail[];
  /** 节省计划覆盖率聚合数据 */
  RateSet?: SavingPlanCoverageRate[];
  /** 查询命中的节省计划覆盖率明细数据总条数 */
  TotalCount?: number;
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
  Total?: number;
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
  Overviews?: SavingPlanOverviewDetail[];
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
  /** 查询节省计划覆盖率数据 {@link DescribeSavingPlanCoverageRequest} {@link DescribeSavingPlanCoverageResponse} */
  DescribeSavingPlanCoverage(data: DescribeSavingPlanCoverageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanCoverageResponse>;
  /** 查询节省计划抵扣明细 {@link DescribeSavingPlanDeductRequest} {@link DescribeSavingPlanDeductResponse} */
  DescribeSavingPlanDeduct(data: DescribeSavingPlanDeductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanDeductResponse>;
  /** 查询节省计划总览明细 {@link DescribeSavingPlanOverviewRequest} {@link DescribeSavingPlanOverviewResponse} */
  DescribeSavingPlanOverview(data: DescribeSavingPlanOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanOverviewResponse>;
  /** 查询节省计划使用率明细 {@link DescribeSavingPlanUsageRequest} {@link DescribeSavingPlanUsageResponse} */
  DescribeSavingPlanUsage(data: DescribeSavingPlanUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanUsageResponse>;
}

export declare type Versions = ["2024-01-25"];

export default Svp;
