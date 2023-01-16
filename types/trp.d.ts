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
  /** 防伪码长度 */
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

/** 渠道商的子企业额度使用情况 */
declare interface CorpQuota {
  /** 企业ID */
  CorpId: number;
  /** 企业名称 */
  CorpName: string;
  /** 额度 */
  Quota: Quota;
  /** 额度使用量 */
  UsageQuota: UsageQuota;
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

/** 企业配额信息 */
declare interface Quota {
  /** 服务开始时间 */
  StartTime: string | null;
  /** 服务结束时间 */
  EndTime: string | null;
  /** 配额ID */
  QuotaId?: number | null;
  /** 企业ID */
  CorpId?: number | null;
  /** 开通服务 */
  Services?: string[] | null;
  /** 商户配额 */
  FactoryQuota?: number | null;
  /** 商品配额 */
  ItemQuota?: number | null;
  /** 溯源码配额 */
  TrackQuota?: number | null;
  /** 销售码配额 */
  SaleQuota?: number | null;
  /** 上链配额 */
  ChainQuota?: number | null;
  /** 风控配额 */
  RiskQuota?: number | null;
  /** 溯源类型 */
  TrackType?: number | null;
  /** 开通版本 lite:轻量版, basic:基础版, standard:标准版 */
  Version?: string | null;
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
  /** 渠道商ID */
  AgentId?: number;
  /** 码层级 0: 最小级, 1: 一级, 2: 二级 */
  Level?: number;
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

/** 溯源数据项Type的枚举值text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型具体组合如下Type: "text" 文本类型, 对应值 Value: "文本字符串"Type: "longtext" 长文本类型, 对应值 Value: "长文本字符串, 支持换行\n"Type: "banner" 单图片类型, 对应图片地址 Value: "https://sample.cdn.com/xxx.jpg"Type: "image" 多图片类型, 对应图片地址 Values: ["https://sample.cdn.com/1.jpg", "https://sample.cdn.com/2.jpg"]Type: "video" 视频类型, 对应视频地址 Value: "https://sample.cdn.com/xxx.mp4"Type: "mp" 小程序类型, 对应配置 Values: ["WXAPPID", "WXAPP_PATH", "跳转说明"] */
declare interface TraceItem {
  /** 字段名称 */
  Name: string | null;
  /** 字段值 */
  Value: string | null;
  /** 类型 text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型 */
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

/** 付费信息使用量 */
declare interface UsageQuota {
  /** 企业ID */
  CorpId: number | null;
  /** 商户配额 */
  FactoryCnt: number | null;
  /** 商品数量 */
  ItemCnt: number | null;
  /** 溯源码量 */
  TrackCnt: number | null;
  /** 营销码额度 */
  SaleCnt: number | null;
  /** 区块链上链次数 */
  ChainCnt: number | null;
  /** 营销风控次数 */
  RiskCnt: number | null;
  /** 时间 */
  UpdateTime: string | null;
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
  /** 批次ID，留空时系统自动生成 */
  BatchId?: string;
  /** 备注 */
  Remark?: string;
  /** 模版ID，或者活动ID */
  MpTpl?: string;
  /** 克隆批次ID，同时会复制溯源信息 */
  CloneId?: string;
  /** 批次编号，业务字段不判断唯一性 */
  BatchCode?: string;
}

declare interface CreateCodeBatchResponse {
  /** 批次ID */
  BatchId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 批次ID，如果传了生码后会同时绑定批次，并激活码 */
  BatchId?: string;
  /** 是否有流水码 0:无 1:有 */
  SerialType?: number;
}

declare interface CreateCodePackResponse {
  /** 码包ID */
  PackId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCorporationOrderRequest {
  /** 企业名称 */
  CorpName: string;
  /** 所有者ID */
  Owner: string;
  /** 溯源码额度 */
  CodeQuota: number;
  /** 额度过期时间 */
  ExpireTime: string;
  /** 金额 */
  Amount: number;
  /** 企业ID */
  CorpId?: number;
  /** 联系人 */
  ContactPerson?: string;
  /** 联系电话 */
  ContactNumber?: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateCorporationOrderResponse {
  /** 企业ID */
  CorpId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 批次ID，如果传了生码后会同时绑定批次，并激活码 */
  BatchId?: string;
  /** 是否有流水码 0:无 1:有 */
  SerialType?: number;
}

declare interface CreateCustomPackResponse {
  /** 码包ID */
  PackId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 是否有流水码 0:无 1:有 */
  SerialType?: number;
}

declare interface DescribeCodePacksResponse {
  /** 码列表 */
  CodePacks: CodePack[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCorpQuotasRequest {
  /** 渠道商ID，不要传 */
  AgentId?: number;
  /** 页数 */
  PageNumber?: number;
  /** 每页数量 */
  PageSize?: number;
  /** 搜索企业ID */
  Keyword?: string;
}

declare interface DescribeCorpQuotasResponse {
  /** 子企业额度使用情况 */
  CorpQuotas: CorpQuota[] | null;
  /** 记录总数量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTmpTokenRequest {
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeTmpTokenResponse {
  /** 临时token */
  Token: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCodeBatchRequest {
  /** 批次ID */
  BatchId: string;
  /** 企业ID */
  CorpId?: number;
  /** 状态 0: 未激活 1: 已激活 -1: 已冻结 */
  Status?: number;
  /** 模板ID，或者活动ID */
  MpTpl?: string;
  /** 商户ID */
  MerchantId?: string;
  /** 商品ID */
  ProductId?: string;
  /** 备注 */
  Remark?: string;
  /** 批次编码，业务字段不判断唯一性 */
  BatchCode?: string;
}

declare interface ModifyCodeBatchResponse {
  /** 批次ID */
  BatchId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomRuleStatusRequest {
  /** 码规则ID */
  CustomId: string;
  /** 码规则状态 0:未生效 1:已生效 -1:已失效 */
  Status: number;
  /** 企业ID */
  CorpId?: number;
}

declare interface ModifyCustomRuleStatusResponse {
  /** 码规则ID */
  CustomId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTraceCodeUnlinkRequest {
  /** 批次ID */
  BatchId: string;
  /** 溯源码列表 */
  Codes: string[];
  /** 企业ID */
  CorpId?: number;
}

declare interface ModifyTraceCodeUnlinkResponse {
  /** 成功解绑溯源码的数量 */
  UnlinkCnt: number;
  /** 当前批次的码数量 */
  CodeCnt: number;
  /** 批次ID */
  BatchId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Trp T-Sec-安心平台(RP)} */
declare interface Trp {
  (): Versions;
  /** 新增批次 {@link CreateCodeBatchRequest} {@link CreateCodeBatchResponse} */
  CreateCodeBatch(data?: CreateCodeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodeBatchResponse>;
  /** 生成普通码包 {@link CreateCodePackRequest} {@link CreateCodePackResponse} */
  CreateCodePack(data: CreateCodePackRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodePackResponse>;
  /** 以订单方式新建企业 {@link CreateCorporationOrderRequest} {@link CreateCorporationOrderResponse} */
  CreateCorporationOrder(data: CreateCorporationOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCorporationOrderResponse>;
  /** 生成自定义码包 {@link CreateCustomPackRequest} {@link CreateCustomPackResponse} */
  CreateCustomPack(data: CreateCustomPackRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomPackResponse>;
  /** 新建自定义码规则 {@link CreateCustomRuleRequest} {@link CreateCustomRuleResponse} */
  CreateCustomRule(data: CreateCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomRuleResponse>;
  /** 新建商户 {@link CreateMerchantRequest} {@link CreateMerchantResponse} */
  CreateMerchant(data: CreateMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMerchantResponse>;
  /** 新建商品 {@link CreateProductRequest} {@link CreateProductResponse} */
  CreateProduct(data: CreateProductRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProductResponse>;
  /** 上链溯源信息 {@link CreateTraceChainRequest} {@link CreateTraceChainResponse} */
  CreateTraceChain(data?: CreateTraceChainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceChainResponse>;
  /** 批量导入二维码 {@link CreateTraceCodesRequest} {@link CreateTraceCodesResponse} */
  CreateTraceCodes(data: CreateTraceCodesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceCodesResponse>;
  /** 异步导入激活码包 {@link CreateTraceCodesAsyncRequest} {@link CreateTraceCodesAsyncResponse} */
  CreateTraceCodesAsync(data?: CreateTraceCodesAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceCodesAsyncResponse>;
  /** 新增溯源信息 {@link CreateTraceDataRequest} {@link CreateTraceDataResponse} */
  CreateTraceData(data?: CreateTraceDataRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceDataResponse>;
  /** 删除批次 {@link DeleteCodeBatchRequest} {@link DeleteCodeBatchResponse} */
  DeleteCodeBatch(data?: DeleteCodeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCodeBatchResponse>;
  /** 删除商户 {@link DeleteMerchantRequest} {@link DeleteMerchantResponse} */
  DeleteMerchant(data: DeleteMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMerchantResponse>;
  /** 删除商品 {@link DeleteProductRequest} {@link DeleteProductResponse} */
  DeleteProduct(data: DeleteProductRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProductResponse>;
  /** 删除溯源信息 {@link DeleteTraceDataRequest} {@link DeleteTraceDataResponse} */
  DeleteTraceData(data: DeleteTraceDataRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTraceDataResponse>;
  /** 查询批次信息 {@link DescribeCodeBatchByIdRequest} {@link DescribeCodeBatchByIdResponse} */
  DescribeCodeBatchById(data?: DescribeCodeBatchByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodeBatchByIdResponse>;
  /** 查询批次列表 {@link DescribeCodeBatchsRequest} {@link DescribeCodeBatchsResponse} */
  DescribeCodeBatchs(data?: DescribeCodeBatchsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodeBatchsResponse>;
  /** 查询码包状态 {@link DescribeCodePackStatusRequest} {@link DescribeCodePackStatusResponse} */
  DescribeCodePackStatus(data: DescribeCodePackStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodePackStatusResponse>;
  /** 查询码包地址 {@link DescribeCodePackUrlRequest} {@link DescribeCodePackUrlResponse} */
  DescribeCodePackUrl(data: DescribeCodePackUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodePackUrlResponse>;
  /** 查询码包列表 {@link DescribeCodePacksRequest} {@link DescribeCodePacksResponse} */
  DescribeCodePacks(data?: DescribeCodePacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodePacksResponse>;
  /** 查询码包的二维码列表 {@link DescribeCodesByPackRequest} {@link DescribeCodesByPackResponse} */
  DescribeCodesByPack(data: DescribeCodesByPackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodesByPackResponse>;
  /** 查询渠道商下属企业额度使用情况 {@link DescribeCorpQuotasRequest} {@link DescribeCorpQuotasResponse} */
  DescribeCorpQuotas(data?: DescribeCorpQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCorpQuotasResponse>;
  /** 查自定义码规则 {@link DescribeCustomRuleByIdRequest} {@link DescribeCustomRuleByIdResponse} */
  DescribeCustomRuleById(data: DescribeCustomRuleByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomRuleByIdResponse>;
  /** 查自定义码规则列表 {@link DescribeCustomRulesRequest} {@link DescribeCustomRulesResponse} */
  DescribeCustomRules(data?: DescribeCustomRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomRulesResponse>;
  /** 获取异步任务的输出地址 {@link DescribeJobFileUrlRequest} {@link DescribeJobFileUrlResponse} */
  DescribeJobFileUrl(data: DescribeJobFileUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobFileUrlResponse>;
  /** 查询商户信息 {@link DescribeMerchantByIdRequest} {@link DescribeMerchantByIdResponse} */
  DescribeMerchantById(data: DescribeMerchantByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMerchantByIdResponse>;
  /** 查询商户列表 {@link DescribeMerchantsRequest} {@link DescribeMerchantsResponse} */
  DescribeMerchants(data?: DescribeMerchantsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMerchantsResponse>;
  /** 查询商品信息 {@link DescribeProductByIdRequest} {@link DescribeProductByIdResponse} */
  DescribeProductById(data: DescribeProductByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductByIdResponse>;
  /** 查询商品列表 {@link DescribeProductsRequest} {@link DescribeProductsResponse} */
  DescribeProducts(data?: DescribeProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductsResponse>;
  /** 查询临时Token {@link DescribeTmpTokenRequest} {@link DescribeTmpTokenResponse} */
  DescribeTmpToken(data?: DescribeTmpTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTmpTokenResponse>;
  /** 查询二维码信息 {@link DescribeTraceCodeByIdRequest} {@link DescribeTraceCodeByIdResponse} */
  DescribeTraceCodeById(data?: DescribeTraceCodeByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceCodeByIdResponse>;
  /** 查询二维码列表 {@link DescribeTraceCodesRequest} {@link DescribeTraceCodesResponse} */
  DescribeTraceCodes(data?: DescribeTraceCodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceCodesResponse>;
  /** 查询溯源信息 {@link DescribeTraceDataListRequest} {@link DescribeTraceDataListResponse} */
  DescribeTraceDataList(data?: DescribeTraceDataListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceDataListResponse>;
  /** 修改批次 {@link ModifyCodeBatchRequest} {@link ModifyCodeBatchResponse} */
  ModifyCodeBatch(data: ModifyCodeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCodeBatchResponse>;
  /** 修改自定义码规则 {@link ModifyCustomRuleRequest} {@link ModifyCustomRuleResponse} */
  ModifyCustomRule(data: ModifyCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleResponse>;
  /** 更新自定义码规则状态 {@link ModifyCustomRuleStatusRequest} {@link ModifyCustomRuleStatusResponse} */
  ModifyCustomRuleStatus(data: ModifyCustomRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleStatusResponse>;
  /** 编辑商户 {@link ModifyMerchantRequest} {@link ModifyMerchantResponse} */
  ModifyMerchant(data: ModifyMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMerchantResponse>;
  /** 编辑商品 {@link ModifyProductRequest} {@link ModifyProductResponse} */
  ModifyProduct(data: ModifyProductRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProductResponse>;
  /** 修改二维码的状态 {@link ModifyTraceCodeRequest} {@link ModifyTraceCodeResponse} */
  ModifyTraceCode(data: ModifyTraceCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTraceCodeResponse>;
  /** 解绑溯源码和批次的关系 {@link ModifyTraceCodeUnlinkRequest} {@link ModifyTraceCodeUnlinkResponse} */
  ModifyTraceCodeUnlink(data: ModifyTraceCodeUnlinkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTraceCodeUnlinkResponse>;
  /** 修改溯源信息 {@link ModifyTraceDataRequest} {@link ModifyTraceDataResponse} */
  ModifyTraceData(data?: ModifyTraceDataRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTraceDataResponse>;
  /** 修改溯源信息的排序 {@link ModifyTraceDataRanksRequest} {@link ModifyTraceDataRanksResponse} */
  ModifyTraceDataRanks(data?: ModifyTraceDataRanksRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTraceDataRanksResponse>;
}

export declare type Versions = ["2021-05-15"];

export default Trp;
