/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 获取国家码接口的一个元素类型 */
declare interface CountryCodeItem {
  /** 国家英文名 */
  EnName: string;
  /** 国家中文名 */
  Name: string;
  /** ISO2标准国家/地区代码 */
  IOS2: string;
  /** ISO3标准国家/地区代码 */
  IOS3: string;
  /** 电话代码 */
  Code: string;
}

/** 查询子客授信历史记录返回信息 */
declare interface QueryCreditAllocationHistoryData {
  /** 分配时间 */
  AllocatedTime: string;
  /** 操作员 */
  Operator: string;
  /** 分配的信用值 */
  Credit: number;
  /** 分配的总金额 */
  AllocatedCredit: number;
}

/** 查询客户信用额度出参复杂类型 */
declare interface QueryCustomersCreditData {
  /** 名字 */
  Name: string;
  /** 类型 */
  Type: string;
  /** 电话 */
  Mobile: string;
  /** 邮箱 */
  Email: string;
  /** 欠费标记 */
  Arrears: string;
  /** 绑定时间 */
  AssociationTime: string;
  /** 最近到期时间 */
  RecentExpiry: string;
  /** 子客uin */
  ClientUin: number;
  /** 子客授信额度 */
  Credit: number;
  /** 子客剩余额度 */
  RemainingCredit: number;
  /** 0：未实名 1: 个人实名 2：企业实名 */
  IdentifyType: number;
  /** 客户备注 */
  Remark: string;
  /** 强制状态 */
  Force: number;
}

/** 直接子客信用信息 */
declare interface QueryDirectCustomersCreditData {
  /** 用户Uin */
  Uin: number;
  /** 总信用值 */
  TotalCredit: number;
  /** 剩余信用值 */
  RemainingCredit: number;
}

/** 子客代金券额度 */
declare interface QueryVoucherAmountByUinItem {
  /** 子客uin */
  ClientUin: number;
  /** 代金券额度 */
  TotalAmount: number;
  /** 代金券余额 */
  RemainAmount: number;
}

/** 单个客户代金券数据 */
declare interface QueryVoucherListByUinItem {
  /** 子客uin */
  ClientUin: number;
  /** 券总数量 */
  TotalCount: number;
  /** 券详情 */
  Data: QueryVoucherListByUinVoucherItem[];
}

/** 子客代金券数据 */
declare interface QueryVoucherListByUinVoucherItem {
  /** 券号 */
  VoucherId: string;
  /** 状态 */
  VoucherStatus: string;
  /** 面额 */
  TotalAmount: number;
  /** 余额 */
  RemainAmount: number;
}

declare interface AllocateCustomerCreditRequest {
  /** 分配客户信用的具体值 */
  AddedCredit: number;
  /** 客户uin */
  ClientUin: number;
}

declare interface AllocateCustomerCreditResponse {
  /** 更新后的信用总额 */
  TotalCredit: number;
  /** 更新后的信用余额 */
  RemainingCredit: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccountRequest {
  /** 新建客户的账户类型标识。本接口取值为：personal或company */
  AccountType: string;
  /** 注册邮件地址。需要调用方保证邮件地址的有效性和正确性。需要满足邮件的格式。如：account@qq.com */
  Mail: string;
  /** 账户密码。长度限制：[8,20]。需同时包含数字、字母以及特殊符号（!@#$%^&*()等非空格） */
  Password: string;
  /** 二次确认密码。必须和Password值相同 */
  ConfirmPassword: string;
  /** 客户手机号码。需要调用方保证手机号码的有效性和正确性。长度限制：[1,32]。支持全球手机号。如18888888888 */
  PhoneNum: string;
  /** 客户的国家/地区代码。取值参考获取国家/地区码接口GetCountryCodes。如852 */
  CountryCode: string;
  /** 客户的IOS2标准国家/地区代码。参考获取国家/地区码接口GetCountryCodes。需要与CountryCode值对应。如HK */
  Area: string;
  /** 拓展字段，默认为空 */
  Extended?: string;
}

declare interface CreateAccountResponse {
  /** 账号的uin */
  Uin: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCountryCodesRequest {
}

declare interface GetCountryCodesResponse {
  /** 国家地区代码列表 */
  Data: CountryCodeItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCreditAllocationHistoryRequest {
  /** 客户uin */
  ClientUin: number;
  /** 翻页参数，所在页数 */
  Page?: number;
  /** 翻页参数，每页数据量 */
  PageSize?: number;
}

declare interface QueryCreditAllocationHistoryResponse {
  /** 历史信息总条数 */
  Total: number | null;
  /** 历史信息详细列表数据 */
  History: QueryCreditAllocationHistoryData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCreditByUinListRequest {
  /** 用户列表 */
  UinList: number[];
}

declare interface QueryCreditByUinListResponse {
  /** 用户信息列表 */
  Data: QueryDirectCustomersCreditData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCustomersCreditRequest {
  /** 搜索条件类型，只能是：ClientUin|Name|Remark|Email四选一 */
  FilterType?: string;
  /** 查询条件值 */
  Filter?: string;
  /** 分页参数：当前页数，从1开始 */
  Page?: number;
  /** 分页参数：每页条数 */
  PageSize?: number;
  /** 排序参数，根据AssociationTime按照空或者desc：逆序，asc：顺序的方式进行排序 */
  Order?: string;
}

declare interface QueryCustomersCreditResponse {
  /** 查询客户列表 */
  Data: QueryCustomersCreditData[] | null;
  /** 客户数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryDirectCustomersCreditRequest {
}

declare interface QueryDirectCustomersCreditResponse {
  /** 直接子客信息列表 */
  Data: QueryDirectCustomersCreditData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryPartnerCreditRequest {
}

declare interface QueryPartnerCreditResponse {
  /** 已分配额度 */
  AllocatedCredit: number;
  /** 额度总数 */
  TotalCredit: number;
  /** 剩余额度 */
  RemainingCredit: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryVoucherAmountByUinRequest {
  /** 子客uin列表 */
  ClientUins: number[];
}

declare interface QueryVoucherAmountByUinResponse {
  /** 子客代金券额度数据 */
  Data: QueryVoucherAmountByUinItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryVoucherListByUinRequest {
  /** 子客uin列表 */
  ClientUins: number[];
  /** 状态，不传时默认查询所有状态。Unused,Used,Expired */
  Status?: string;
}

declare interface QueryVoucherListByUinResponse {
  /** 子客代金券数据 */
  Data: QueryVoucherListByUinItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryVoucherPoolRequest {
}

declare interface QueryVoucherPoolResponse {
  /** 经销商姓名 */
  AgentName: string;
  /** 经销商角色类型：1:经销商 2:总经销商 3:二级经销商 */
  AccountType: number;
  /** 总额度 */
  TotalQuota: number;
  /** 剩余额度 */
  RemainingQuota: number;
  /** 已发放的代金券数量 */
  IssuedNum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Intlpartnersmgt 国际合作伙伴管理} */
declare interface Intlpartnersmgt {
  (): Versions;
  /** 合作伙伴分配客户信用额度 {@link AllocateCustomerCreditRequest} {@link AllocateCustomerCreditResponse} */
  AllocateCustomerCredit(data: AllocateCustomerCreditRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateCustomerCreditResponse>;
  /** 创建客户接口 {@link CreateAccountRequest} {@link CreateAccountResponse} */
  CreateAccount(data: CreateAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountResponse>;
  /** 获取国家和地区的代码 {@link GetCountryCodesRequest} {@link GetCountryCodesResponse} */
  GetCountryCodes(data?: GetCountryCodesRequest, config?: AxiosRequestConfig): AxiosPromise<GetCountryCodesResponse>;
  /** 查询信用分配历史记录 {@link QueryCreditAllocationHistoryRequest} {@link QueryCreditAllocationHistoryResponse} */
  QueryCreditAllocationHistory(data: QueryCreditAllocationHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCreditAllocationHistoryResponse>;
  /** 通过Uin列表查询信用 {@link QueryCreditByUinListRequest} {@link QueryCreditByUinListResponse} */
  QueryCreditByUinList(data: QueryCreditByUinListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCreditByUinListResponse>;
  /** 查询客户信用额度 {@link QueryCustomersCreditRequest} {@link QueryCustomersCreditResponse} */
  QueryCustomersCredit(data?: QueryCustomersCreditRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCustomersCreditResponse>;
  /** 查询直接子客信用 {@link QueryDirectCustomersCreditRequest} {@link QueryDirectCustomersCreditResponse} */
  QueryDirectCustomersCredit(data?: QueryDirectCustomersCreditRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDirectCustomersCreditResponse>;
  /** 查询合作伙伴信用额度 {@link QueryPartnerCreditRequest} {@link QueryPartnerCreditResponse} */
  QueryPartnerCredit(data?: QueryPartnerCreditRequest, config?: AxiosRequestConfig): AxiosPromise<QueryPartnerCreditResponse>;
  /** 根据客户uin查询代金券额度 {@link QueryVoucherAmountByUinRequest} {@link QueryVoucherAmountByUinResponse} */
  QueryVoucherAmountByUin(data: QueryVoucherAmountByUinRequest, config?: AxiosRequestConfig): AxiosPromise<QueryVoucherAmountByUinResponse>;
  /** 根据客户uin查询代金券列表 {@link QueryVoucherListByUinRequest} {@link QueryVoucherListByUinResponse} */
  QueryVoucherListByUin(data: QueryVoucherListByUinRequest, config?: AxiosRequestConfig): AxiosPromise<QueryVoucherListByUinResponse>;
  /** 查询代金券额度池 {@link QueryVoucherPoolRequest} {@link QueryVoucherPoolResponse} */
  QueryVoucherPool(data?: QueryVoucherPoolRequest, config?: AxiosRequestConfig): AxiosPromise<QueryVoucherPoolResponse>;
}

export declare type Versions = ["2022-09-28"];

export default Intlpartnersmgt;
