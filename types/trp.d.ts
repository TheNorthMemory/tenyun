/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 上链数据 */
declare interface ChainData {
  /** 区块hash */
  BlockHash: string | null;
  /** 区块高度 */
  BlockHeight: string | null;
  /** 区块时间 */
  BlockTime: string | null;
}

/** 批次 */
declare interface CodeBatch {
  /** 批次号 */
  BatchId: string | null;
  /** 企业ID */
  CorpId: number | null;
  /** 批次编码(未使用) */
  BatchCode: string | null;
  /** 码数量 */
  CodeCnt: number | null;
  /** 所属商户ID */
  MerchantId: string | null;
  /** 产品ID */
  ProductId: string | null;
  /** 批次类型 */
  BatchType: number | null;
  /** 备注 */
  Remark: string | null;
  /** 微信模板 */
  MpTpl: string | null;
  /** 批次状态 0: 未激活 1: 已激活 -1: 已冻结 */
  Status: number | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 修改时间 */
  UpdateTime: string | null;
  /** 所属商户名称 */
  MerchantName: string | null;
  /** 产品名称 */
  ProductName: string | null;
  /** 未使用 */
  Ext: Ext | null;
  /** 模板名称 */
  TplName?: string | null;
  /** 调度任务 */
  Job?: Job | null;
}

/** 码类型 */
declare interface CodeItem {
  /** 无 */
  Code?: string;
}

/** 码包类型 */
declare interface CodePack {
  /** 码id */
  PackId: string | null;
  /** 企业id */
  CorpId: number | null;
  /** 商户id */
  MerchantId: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 制码状态 init: 初始化, pending: 执行中, done: 完成, error: 失败 */
  Status: string | null;
  /** 执行日志 */
  Log: string | null;
  /** 创建人 */
  CreateUser: string | null;
  /** 码数 */
  Amount: number | null;
  /** 码长度 */
  CodeLength: number | null;
  /** 码类型 */
  CodeType: string | null;
  /** 是否暗码 */
  Cipher: number | null;
  /** [弃用] 文字码地址，通过另一个接口查 */
  TextUrl: string | null;
  /** [弃用] 二维码地址，通过另一个接口查 */
  PackUrl: string | null;
  /** 商户名 */
  MerchantName: string | null;
  /** 码规则类型 0: 默认, 1: 自定义 */
  RuleType: number | null;
  /** 自定义码规则ID */
  CustomId: string | null;
  /** 码包类型 0: 普通码包 1: 层级码包 */
  PackType: number | null;
  /** 生码层级 */
  PackLevel: number | null;
  /** 层级码配置 */
  PackSpec: PackSpec[] | null;
}

/** 码段配置 */
declare interface CodePart {
  /** 码段名称 */
  Name: string | null;
  /** 码段类型 */
  Type: string | null;
  /** 码段内容 */
  Value: string | null;
  /** 码段长度 */
  Length: number;
  /** 扩展字段 */
  Ext: string | null;
}

/** 码规则 */
declare interface CustomRule {
  /** 码规则ID */
  CustomId: string;
  /** 码规则名 */
  Name: string | null;
  /** 企业ID */
  CorpId: number | null;
  /** 商户ID */
  MerchantId: string | null;
  /** 码ID长度 */
  CodeLength: number;
  /** 规则状态 */
  Status: number;
  /** 码段配置 */
  CodeParts: CodePart[];
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** 预留字段 */
declare interface Ext {
}

/** 通用调度任务 */
declare interface Job {
  /** 调度ID */
  JobId: number;
  /** 执行状态 init:初始化, pending: 执行中, done: 执行成功, error: 执行失败 */
  Status: string;
}

/** 商户信息 */
declare interface Merchant {
  /** 商户标识码 */
  MerchantId: string;
  /** 企业id */
  CorpId: number;
  /** 商户名称 */
  Name: string;
  /** 备注 */
  Remark: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 商户码规则 */
  CodeRule: string;
  /** 码来源类型 0: 安心平台 1: 第三方码 */
  CodeType: number;
  /** 第三方码域名前缀 */
  CodeUrl: string | null;
}

/** 层级码配置 */
declare interface PackSpec {
  /** 层级 */
  Level: number;
  /** 比例 */
  Rate: number;
  /** 数量 */
  Amount: number;
  /** 码规则ID */
  CustomId?: string | null;
  /** 码段配置 */
  CodeParts?: CodePart[] | null;
}

/** 环节数据 */
declare interface PhaseData {
  /** 启用头 */
  HeadEnabled?: boolean;
  /** 标题 */
  HeadTitle?: string;
  /** 标识符 */
  Key?: string;
  /** 小程序AppId */
  AppId?: string;
  /** 小程序AppPath */
  AppPath?: string;
  /** 小程序名称AppName */
  AppName?: string;
}

/** 商品信息 */
declare interface Product {
  /** 商品id */
  ProductId: string;
  /** 企业id */
  CorpId: number;
  /** 商户标识码 */
  MerchantId: string;
  /** 商品编号 */
  ProductCode: string;
  /** 商品名称 */
  Name: string;
  /** 商品规格 */
  Specification: string | null;
  /** 备注 */
  Remark: string | null;
  /** 商品图片 */
  Logo: string[] | null;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  UpdateTime: string;
  /** 预留字段 */
  Ext: Ext | null;
  /** 商户名称 */
  MerchantName: string;
}

/** 溯源码 */
declare interface TraceCode {
  /** 二维码 */
  Code: string;
  /** 企业ID */
  CorpId: number;
  /** 码包ID */
  PackId: string;
  /** 批次ID */
  BatchId: string;
  /** 所属商户ID */
  MerchantId: string;
  /** 产品ID */
  ProductId: string;
  /** 码状态 0: 冻结 1: 激活 */
  Status: number;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  UpdateTime: string;
  /** 商户名称 */
  MerchantName: string;
  /** 产品名称 */
  ProductName: string;
}

/** 溯源数据 */
declare interface TraceData {
  /** 溯源ID */
  TraceId: string | null;
  /** 企业ID */
  CorpId: number | null;
  /** 码类型 0: 批次, 1: 码, 2: 生产任务 */
  Type: number | null;
  /** 码值，跟码类型一一对应 */
  Code: string | null;
  /** 排序，在Phase相同情况下，值越小排名靠前 */
  Rank: number | null;
  /** 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源 */
  Phase: number | null;
  /** 溯源环节名称 */
  PhaseName: string | null;
  /** 溯源时间 */
  TraceTime: string | null;
  /** 无 */
  TraceItems: TraceItem[] | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 上链状态 0: 未上链 1: 上链中 2: 已上链 -1: 异常 */
  ChainStatus: number | null;
  /** 上链时间 */
  ChainTime: string | null;
  /** 上链数据 */
  ChainData: ChainData | null;
  /** 溯源阶段配置 */
  PhaseData: PhaseData | null;
  /** 溯源阶段状态 0: 无效, 1: 有效 */
  Status: number | null;
}

/** 溯源数据 */
declare interface TraceItem {
  /** 名称 */
  Name: string | null;
  /** 单个值 */
  Value: string | null;
  /** 类型 */
  Type: string | null;
  /** 只读 */
  ReadOnly: boolean | null;
  /** 扫码展示 */
  Hidden: boolean | null;
  /** 多个值 */
  Values: string[] | null;
  /** 类型标识 */
  Key: string | null;
  /** 扩展字段 */
  Ext: string | null;
}

declare interface CreateCodeBatchRequest {
  /** 企业ID */
  CorpId?: number;
  /** 商户ID */
  MerchantId?: string;
  /** 产品ID */
  ProductId?: string;
  /** 批次类型 0:溯源 1:营销 */
  BatchType?: number;
  /** 批次ID，系统自动生成 */
  BatchId?: string;
  /** 备注 */
  Remark?: string;
  /** 活动ID */
  MpTpl?: string;
  /** 克隆批次ID */
  CloneId?: string;
}

declare interface CreateCodeBatchResponse {
  /** 批次ID */
  BatchId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCodePackRequest {
  /** 商户ID */
  MerchantId: string;
  /** 码长度 */
  CodeLength: number;
  /** 码类型 alphabet 字母, number 数字, mixin 混合 */
  CodeType: string;
  /** 生码数量 普通码包时必填 */
  Amount?: number;
  /** 企业ID */
  CorpId?: number;
  /** 码包类型 0: 普通码包 1: 层级码包 */
  PackType?: number;
  /** 码包层级 */
  PackLevel?: number;
  /** 码包规格 */
  PackSpec?: PackSpec[];
}

declare interface CreateCodePackResponse {
  /** 码包ID */
  PackId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomPackRequest {
  /** 商户ID */
  MerchantId: string;
  /** 生码数量, 普通码包时必填 */
  Amount?: number;
  /** 企业ID */
  CorpId?: number;
  /** 码包类型 0: 普通码包 1: 层级码包 */
  PackType?: number;
  /** 码包层级 */
  PackLevel?: number;
  /** 层级码包规则 */
  PackSpec?: PackSpec[];
  /** 码规则ID, 和CodeParts二选一必填 */
  CustomId?: string;
  /** 码段配置，和CustomId二选一必填 */
  CodeParts?: CodePart[];
}

declare interface CreateCustomPackResponse {
  /** 码包ID */
  PackId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 商户ID */
  MerchantId: string;
  /** 码长度 */
  CodeLength: number;
  /** 码段配置 */
  CodeParts: CodePart[];
  /** 企业ID */
  CorpId?: number;
}

declare interface CreateCustomRuleResponse {
  /** 码规则ID */
  CustomId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMerchantRequest {
  /** 商户名称 */
  Name: string;
  /** 备注 */
  Remark?: string;
  /** 企业ID */
  CorpId?: number;
  /** 码包来源 0:自建, 1:第三发 */
  CodeType?: number;
  /** 码包前缀地址 第三方码包时必填 */
  CodeUrl?: string;
}

declare interface CreateMerchantResponse {
  /** 商户标识码 */
  MerchantId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateProductRequest {
  /** 商品名称 */
  Name: string;
  /** 商户ID */
  MerchantId: string;
  /** 备注 */
  Remark?: string;
  /** 商户名称 */
  MerchantName?: string;
  /** 商品规格 */
  Specification?: string;
  /** 商品图片 */
  Logo?: string[];
  /** 企业ID */
  CorpId?: number;
  /** 预留字段 */
  Ext?: Ext;
}

declare interface CreateProductResponse {
  /** 商品ID */
  ProductId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTraceChainRequest {
  /** 企业ID */
  CorpId?: number;
  /** 溯源ID */
  TraceId?: string;
}

declare interface CreateTraceChainResponse {
  /** 溯源ID */
  TraceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTraceCodesAsyncRequest {
  /** 企业ID */
  CorpId?: number;
  /** 批次ID */
  BatchId?: string;
  /** 上传文件Key，仅支持 csv 或者 zip 类型 */
  FileKey?: string;
}

declare interface CreateTraceCodesAsyncResponse {
  /** 批次ID */
  BatchId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTraceCodesRequest {
  /** 批次ID */
  BatchId: string;
  /** 企业ID */
  CorpId?: number;
  /** 码 */
  Codes?: CodeItem[];
}

declare interface CreateTraceCodesResponse {
  /** 批次ID */
  BatchId: string;
  /** 导入成功码数量 */
  ActiveCnt: number;
  /** 批次码数量 */
  CodeCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTraceDataRequest {
  /** 企业ID */
  CorpId?: number;
  /** 批次ID */
  BatchId?: string;
  /** 任务ID */
  TaskId?: string;
  /** 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源 */
  Phase?: number;
  /** 溯源阶段名称 */
  PhaseName?: string;
  /** [无效] 上链状态 */
  ChainStatus?: number;
  /** [无效] 码类型 0: 批次, 1: 码, 2: 生产任务, 3: 物流信息 */
  Type?: number;
  /** [无效] 溯源ID */
  TraceId?: string;
  /** 溯源信息 */
  TraceItems?: TraceItem[];
  /** 溯源状态 0: 无效, 1: 有效 */
  Status?: number;
  /** 环节数据 */
  PhaseData?: PhaseData;
}

declare interface CreateTraceDataResponse {
  /** 溯源ID */
  TraceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCodeBatchRequest {
  /** 企业ID */
  CorpId?: number;
  /** 批次ID */
  BatchId?: string;
}

declare interface DeleteCodeBatchResponse {
  /** 批次ID */
  BatchId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMerchantRequest {
  /** 商户标识码 */
  MerchantId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DeleteMerchantResponse {
  /** 商户标识码 */
  MerchantId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteProductRequest {
  /** 商品ID */
  ProductId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DeleteProductResponse {
  /** 商品ID */
  ProductId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTraceDataRequest {
  /** 溯源ID */
  TraceId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DeleteTraceDataResponse {
  /** 溯源id */
  TraceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCodeBatchByIdRequest {
  /** 企业ID */
  CorpId?: number;
  /** 批次ID */
  BatchId?: string;
}

declare interface DescribeCodeBatchByIdResponse {
  /** 批次 */
  CodeBatch: CodeBatch;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCodeBatchsRequest {
  /** 查询商户ID */
  MerchantId?: string;
  /** 查询商品ID */
  ProductId?: string;
  /** 查询关键字 */
  Keyword?: string;
  /** 条数 */
  PageSize?: number;
  /** 页数 */
  PageNumber?: number;
  /** 批次类型 0:溯源 1:营销 */
  BatchType?: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeCodeBatchsResponse {
  /** 批次列表 */
  CodeBatchs: CodeBatch[] | null;
  /** 总条数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCodePackStatusRequest {
  /** 码包ID */
  PackId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeCodePackStatusResponse {
  /** 码包状态 init: 初始化, pending: 执行中, done: 完成, error: 失败 */
  Status: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCodePackUrlRequest {
  /** 码包ID */
  PackId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeCodePackUrlResponse {
  /** 文字码包地址 */
  Url: string | null;
  /** 图片码包地址，可能为空 */
  ImgUrl: string | null;
  /** 文字码包Key，用于上传导入 */
  FileKey: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCodePacksRequest {
  /** 每页数量 */
  PageSize?: number;
  /** 页数 */
  PageNumber?: number;
  /** 查询关键字 */
  Keyword?: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeCodePacksResponse {
  /** 码列表 */
  CodePacks: CodePack[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCodesByPackRequest {
  /** 码包ID */
  PackId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeCodesByPackResponse {
  /** 码列表 */
  Codes: CodeItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomRuleByIdRequest {
  /** 码规则ID */
  CustomId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeCustomRuleByIdResponse {
  /** 码规则信息 */
  CustomRule: CustomRule | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomRulesRequest {
  /** 搜索关键字 */
  Keyword?: string;
  /** 条数 */
  PageSize?: number;
  /** 页数 */
  PageNumber?: number;
  /** 企业ID */
  CorpId?: number;
  /** 码规则状态 0:未生效 1:已生效 -1:已失效 */
  Status?: number;
  /** 商户ID */
  MerchantId?: string;
}

declare interface DescribeCustomRulesResponse {
  /** 码规则列表 */
  CustomRules: CustomRule[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeJobFileUrlRequest {
  /** 调度ID */
  JobId: number;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeJobFileUrlResponse {
  /** 码包地址 */
  Url: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMerchantByIdRequest {
  /** 商户标识码 */
  MerchantId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeMerchantByIdResponse {
  /** 商户信息 */
  Merchant: Merchant | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMerchantsRequest {
  /** 搜索商户名称 */
  Name?: string;
  /** 条数 */
  PageSize?: number;
  /** 页数 */
  PageNumber?: number;
  /** 企业ID */
  CorpId?: number;
  /** 码来源类型 0:自建, 1:第三方 */
  CodeType?: number;
}

declare interface DescribeMerchantsResponse {
  /** 商户列表 */
  Merchants: Merchant[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProductByIdRequest {
  /** 商品ID */
  ProductId: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeProductByIdResponse {
  /** 商品信息 */
  Product: Product | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProductsRequest {
  /** 商品名称 */
  Name?: string;
  /** 条数 */
  PageSize?: number;
  /** 页数 */
  PageNumber?: number;
  /** 商品ID */
  MerchantId?: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeProductsResponse {
  /** 商品列表 */
  Products: Product[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTmpTokenRequest {
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeTmpTokenResponse {
  /** 临时token */
  Token: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTraceCodeByIdRequest {
  /** 企业ID */
  CorpId?: number;
  /** 二维码 */
  Code?: string;
}

declare interface DescribeTraceCodeByIdResponse {
  /** 无 */
  TraceCode: TraceCode;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTraceCodesRequest {
  /** 搜索关键字 码标识，或者批次ID */
  Keyword?: string;
  /** 条数 */
  PageNumber?: number;
  /** 页码 */
  PageSize?: number;
  /** 批次ID，弃用 */
  BatchId?: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeTraceCodesResponse {
  /** 标识列表 */
  TraceCodes: TraceCode[] | null;
  /** 条数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTraceDataListRequest {
  /** 企业ID */
  CorpId?: number;
  /** 批次ID */
  BatchId?: string;
  /** 任务ID 用于外部溯源 */
  TaskId?: string;
  /** 页数 */
  PageNumber?: number;
  /** 二维码 */
  Code?: string;
  /** 溯源阶段 0:商品 1:通用 2:内部溯源 3:外部溯源 */
  Phase?: number;
  /** 数量 */
  PageSize?: number;
}

declare interface DescribeTraceDataListResponse {
  /** 数量 */
  TotalCount: number;
  /** 无 */
  TraceDataList: TraceData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCodeBatchRequest {
  /** 批次ID */
  BatchId: string;
  /** 企业ID */
  CorpId?: number;
  /** 状态 0: 未激活 1: 已激活 -1: 已冻结 */
  Status?: number;
  /** 模板ID */
  MpTpl?: string;
  /** 商户ID */
  MerchantId?: string;
  /** 商品ID */
  ProductId?: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyCodeBatchResponse {
  /** 批次ID */
  BatchId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCustomRuleRequest {
  /** 码规则ID */
  CustomId: string;
  /** 规则名称 */
  Name: string;
  /** 码长度 */
  CodeLength: number;
  /** 码段配置 */
  CodeParts: CodePart[];
  /** 企业ID */
  CorpId?: number;
}

declare interface ModifyCustomRuleResponse {
  /** 码规则ID */
  CustomId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCustomRuleStatusRequest {
  /** 码规则ID */
  CustomId: string;
  /** 码规则状态 0:未生效 1:已生效 -1:已失效 */
  Status: number;
}

declare interface ModifyCustomRuleStatusResponse {
  /** 码规则ID */
  CustomId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMerchantRequest {
  /** 商户名称 */
  Name: string;
  /** 商户标识码 */
  MerchantId: string;
  /** 备注 */
  Remark?: string;
  /** 企业ID */
  CorpId?: number;
  /** 码包来源 0:自建, 1:第三码包，暂不支持修改 */
  CodeType?: number;
  /** 码包前缀地址 第三方码包时必填 */
  CodeUrl?: string;
}

declare interface ModifyMerchantResponse {
  /** 商户标识码 */
  MerchantId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyProductRequest {
  /** 商品名称 */
  Name: string;
  /** 商品ID */
  ProductId: string;
  /** 备注 */
  Remark?: string;
  /** 商品规格 */
  Specification?: string;
  /** 商品图片 */
  Logo?: string[];
  /** 企业ID */
  CorpId?: number;
  /** 预留字段 */
  Ext?: Ext;
}

declare interface ModifyProductResponse {
  /** 商品ID */
  ProductId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTraceCodeRequest {
  /** 二维码 */
  Code: string;
  /** 企业ID */
  CorpId?: number;
  /** 状态 0: 冻结 1: 激活 */
  Status?: number;
}

declare interface ModifyTraceCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTraceDataRanksRequest {
  /** 企业ID */
  CorpId?: number;
  /** 批次ID */
  BatchId?: string;
  /** 生产任务ID */
  TaskId?: string;
  /** 溯源ID */
  TraceIds?: string[];
}

declare interface ModifyTraceDataRanksResponse {
  /** 批次ID */
  BatchId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTraceDataRequest {
  /** 溯源ID */
  TraceId?: string;
  /** 批次ID */
  BatchId?: string;
  /** 生产溯源任务ID */
  TaskId?: string;
  /** 溯源信息 */
  TraceItems?: TraceItem[];
  /** 溯源阶段名称 */
  PhaseName?: string;
  /** [无效] 类型 */
  Type?: number;
  /** [无效] 溯源码 */
  Code?: string;
  /** [无效] 排序 */
  Rank?: number;
  /** [无效] 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源 */
  Phase?: number;
  /** [无效] 溯源时间 */
  TraceTime?: string;
  /** [无效] 创建时间 */
  CreateTime?: string;
  /** [无效] 上链状态 */
  ChainStatus?: number;
  /** [无效] 上链时间 */
  ChainTime?: string;
  /** [无效] 上链数据 */
  ChainData?: ChainData;
  /** 企业ID */
  CorpId?: number;
  /** 溯源状态 0: 无效, 1: 有效 */
  Status?: number;
  /** 环节数据 */
  PhaseData?: PhaseData;
}

declare interface ModifyTraceDataResponse {
  /** 溯源ID */
  TraceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** T-Sec-安心平台(RP) */
declare interface Trp {
  (): Versions;
  /** 新增批次 */
  CreateCodeBatch(data: CreateCodeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodeBatchResponse>;
  /** 生成普通码包 */
  CreateCodePack(data: CreateCodePackRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodePackResponse>;
  /** 生成自定义码包 */
  CreateCustomPack(data: CreateCustomPackRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomPackResponse>;
  /** 新建自定义码规则 */
  CreateCustomRule(data: CreateCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomRuleResponse>;
  /** 新建商户 */
  CreateMerchant(data: CreateMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMerchantResponse>;
  /** 新建商品 */
  CreateProduct(data: CreateProductRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProductResponse>;
  /** 上链溯源信息 */
  CreateTraceChain(data: CreateTraceChainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceChainResponse>;
  /** 批量导入二维码 */
  CreateTraceCodes(data: CreateTraceCodesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceCodesResponse>;
  /** 异步导入激活码包 */
  CreateTraceCodesAsync(data: CreateTraceCodesAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceCodesAsyncResponse>;
  /** 新增溯源信息 */
  CreateTraceData(data: CreateTraceDataRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceDataResponse>;
  /** 删除批次 */
  DeleteCodeBatch(data: DeleteCodeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCodeBatchResponse>;
  /** 删除商户 */
  DeleteMerchant(data: DeleteMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMerchantResponse>;
  /** 删除商品 */
  DeleteProduct(data: DeleteProductRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProductResponse>;
  /** 删除溯源信息 */
  DeleteTraceData(data: DeleteTraceDataRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTraceDataResponse>;
  /** 查询批次信息 */
  DescribeCodeBatchById(data: DescribeCodeBatchByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodeBatchByIdResponse>;
  /** 查询批次列表 */
  DescribeCodeBatchs(data: DescribeCodeBatchsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodeBatchsResponse>;
  /** 查询码包状态 */
  DescribeCodePackStatus(data: DescribeCodePackStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodePackStatusResponse>;
  /** 查询码包地址 */
  DescribeCodePackUrl(data: DescribeCodePackUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodePackUrlResponse>;
  /** 查询码包列表 */
  DescribeCodePacks(data: DescribeCodePacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodePacksResponse>;
  /** 查询码包的二维码列表 */
  DescribeCodesByPack(data: DescribeCodesByPackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodesByPackResponse>;
  /** 查自定义码规则 */
  DescribeCustomRuleById(data: DescribeCustomRuleByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomRuleByIdResponse>;
  /** 查自定义码规则列表 */
  DescribeCustomRules(data: DescribeCustomRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomRulesResponse>;
  /** 获取异步任务的输出地址 */
  DescribeJobFileUrl(data: DescribeJobFileUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobFileUrlResponse>;
  /** 查询商户信息 */
  DescribeMerchantById(data: DescribeMerchantByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMerchantByIdResponse>;
  /** 查询商户列表 */
  DescribeMerchants(data: DescribeMerchantsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMerchantsResponse>;
  /** 查询商品信息 */
  DescribeProductById(data: DescribeProductByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductByIdResponse>;
  /** 查询商品列表 */
  DescribeProducts(data: DescribeProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductsResponse>;
  /** 查询临时Token */
  DescribeTmpToken(data: DescribeTmpTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTmpTokenResponse>;
  /** 查询二维码信息 */
  DescribeTraceCodeById(data: DescribeTraceCodeByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceCodeByIdResponse>;
  /** 查询二维码列表 */
  DescribeTraceCodes(data: DescribeTraceCodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceCodesResponse>;
  /** 查询溯源信息 */
  DescribeTraceDataList(data: DescribeTraceDataListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceDataListResponse>;
  /** 修改批次 */
  ModifyCodeBatch(data: ModifyCodeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCodeBatchResponse>;
  /** 修改自定义码规则 */
  ModifyCustomRule(data: ModifyCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleResponse>;
  /** 更新自定义码规则状态 */
  ModifyCustomRuleStatus(data: ModifyCustomRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleStatusResponse>;
  /** 编辑商户 */
  ModifyMerchant(data: ModifyMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMerchantResponse>;
  /** 编辑商品 */
  ModifyProduct(data: ModifyProductRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProductResponse>;
  /** 修改二维码的状态 */
  ModifyTraceCode(data: ModifyTraceCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTraceCodeResponse>;
  /** 修改溯源信息 */
  ModifyTraceData(data: ModifyTraceDataRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTraceDataResponse>;
  /** 修改溯源信息的排序 */
  ModifyTraceDataRanks(data: ModifyTraceDataRanksRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTraceDataRanksResponse>;
}

export declare type Versions = ["2021-05-15"];

export default Trp;
