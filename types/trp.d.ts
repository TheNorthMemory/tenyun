/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 通用属性Type 的枚举值text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型具体组合如下- Type: "text" 文本类型, 对应值 Value: "文本字符串"- Type: "longtext" 长文本类型, 对应值 Value: "长文本字符串, 支持换行\n"- Type: "banner" 单图片类型, 对应图片地址 Value: "https://sample.cdn.com/xxx.jpg"- Type: "image" 多图片类型, 对应图片地址 Values: ["https://sample.cdn.com/1.jpg", "https://sample.cdn.com/2.jpg"]- Type: "video" 视频类型, 对应视频地址 Value: "https://sample.cdn.com/xxx.mp4"- Type: "mp" 小程序类型, 对应配置 Values: ["WXAPPID", "WXAPP_PATH", "跳转说明"] */
declare interface AttrItem {
  /** 字段名称 */
  Name: string;
  /** 字段值 */
  Value: string;
  /** 字段类型text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型,video:视频类型,mp:小程序类型 */
  Type: string;
  /** 只读 */
  ReadOnly: boolean;
  /** 扫码展示 */
  Hidden: boolean;
  /** 多个值 */
  Values: string[];
  /** 类型标识 */
  Key: string;
  /** 扩展字段 */
  Ext: string;
}

/** 上链数据 */
declare interface Chain {
  /** 码url */
  Code: string;
  /** 上链数据 */
  Data: ChainValue[];
}

/** 上链数据 */
declare interface ChainData {
  /** 区块hash */
  BlockHash?: string;
  /** 区块高度 */
  BlockHeight?: string;
  /** 区块时间 */
  BlockTime?: string;
}

/** 上链数据 key-value */
declare interface ChainValue {
  /** 标题名字 */
  Label: string;
  /** 类型，文字："text"，图片："image" */
  Type: string;
  /** 值，文字类型："abc"，图片类型：""/images/img.png" */
  Value: string;
}

/** 批次 */
declare interface CodeBatch {
  /** 批次号 */
  BatchId?: string;
  /** 企业ID */
  CorpId?: number;
  /** 批次编码(未使用) */
  BatchCode?: string;
  /** 码数量 */
  CodeCnt?: number;
  /** 所属商户ID */
  MerchantId?: string;
  /** 产品ID */
  ProductId?: string;
  /** 批次类型 */
  BatchType?: number;
  /** 备注 */
  Remark?: string;
  /** 微信模板 */
  MpTpl?: string;
  /** 批次状态 0: 未激活 1: 已激活 -1: 已冻结 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 所属商户名称 */
  MerchantName?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 未使用 */
  Ext?: Ext | null;
  /** 模板名称 */
  TplName?: string;
  /** 调度任务 */
  Job?: Job | null;
  /** 生产日期 */
  ProductionDate?: string | null;
  /** 有效期 */
  ValidDate?: string | null;
  /** 扩展属性 */
  Attrs?: AttrItem[];
}

/** 码类型 */
declare interface CodeItem {
  /** 无 */
  Code?: string;
}

/** 码包类型 */
declare interface CodePack {
  /** 码id */
  PackId?: string;
  /** 企业id */
  CorpId?: number;
  /** 商户id */
  MerchantId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 制码状态 init: 初始化, pending: 执行中, done: 完成, error: 失败 */
  Status?: string;
  /** 执行日志 */
  Log?: string;
  /** 创建人 */
  CreateUser?: string;
  /** 码数 */
  Amount?: number;
  /** 防伪码长度 */
  CodeLength?: number;
  /** 码类型 */
  CodeType?: string;
  /** 是否暗码 */
  Cipher?: number;
  /** [弃用] 文字码地址，通过另一个接口查 */
  TextUrl?: string;
  /** [弃用] 二维码地址，通过另一个接口查 */
  PackUrl?: string;
  /** 商户名 */
  MerchantName?: string;
  /** 码规则类型 0: 默认, 1: 自定义 */
  RuleType?: number;
  /** 自定义码规则ID */
  CustomId?: string;
  /** 码包类型 0: 普通码包 1: 层级码包 */
  PackType?: number;
  /** 生码层级 */
  PackLevel?: number;
  /** 层级码配置 */
  PackSpec?: PackSpec[];
  /** 商品名称 */
  ProductName?: string;
  /** 商品规格 */
  ProductSpecification?: string;
  /** 商品ID */
  ProductId?: string;
  /** 码关系是否预关联0:否, 1:是 */
  RelateType?: number;
  /** 场景码 */
  SceneCode?: number;
  /** 码规则 */
  CodeRule?: string;
  /** 已使用码数 */
  UsedAmount?: number;
  /** 开始流水号 */
  SerialStart?: number;
  /** 结束流水号 */
  SerialEnd?: number;
}

/** 码段配置 */
declare interface CodePart {
  /** 码段名称 */
  Name: string;
  /** 码段类型 */
  Type: string;
  /** 码段内容 */
  Value: string;
  /** 码段长度 */
  Length: number;
  /** 扩展字段 */
  Ext: string;
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
  CustomId?: string;
  /** 码规则名 */
  Name?: string;
  /** 企业ID */
  CorpId?: number;
  /** 商户ID */
  MerchantId?: string;
  /** 码ID长度 */
  CodeLength?: number;
  /** 规则状态 */
  Status?: number;
  /** 码段配置 */
  CodeParts?: CodePart[];
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 预留字段 */
declare interface Ext {
  /** 字符串 */
  Value?: string | null;
}

/** 业务加密入参 */
declare interface InputEncryptData {
  /** 加密方式，0：AES加密； */
  EncryptMethod: number;
  /** 加密算法中的块处理模式，1：CBC模式； 目前只支持CBC模式 */
  EncryptMode: number;
  /** 填充模式，0：ZeroPadding；1：PKCS5Padding；2：PKCS7Padding。 */
  PaddingType: number;
  /** 加密数据，将AuthorizedData结构体数组（数组最大长度不超过20）序列化成JSON字符串，对得到的字符串加密并填充到该字段。 */
  EncryptData: string;
  /** 用户是否授权，本接口取值：1，已授权。 */
  IsAuthorized?: number;
}

/** 通用调度任务 */
declare interface Job {
  /** 调度ID */
  JobId?: number;
  /** 执行状态 init:初始化, pending: 执行中, done: 执行成功, error: 执行失败 */
  Status?: string;
  /** 任务错误信息 */
  ErrorMessage?: string;
}

/** 商户信息 */
declare interface Merchant {
  /** 商户标识码 */
  MerchantId?: string;
  /** 企业id */
  CorpId?: number;
  /** 商户名称 */
  Name?: string;
  /** 备注 */
  Remark?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 商户码规则 */
  CodeRule?: string;
  /** 码来源类型 0: 安心平台 1: 第三方码 */
  CodeType?: number;
  /** 第三方码域名前缀 */
  CodeUrl?: string;
}

/** 业务出参 */
declare interface OutputAuthorizedTransfer {
  /** 推送状态，0表示成功。 */
  Code?: number;
  /** 错误码。 */
  Message?: string;
  /** 错误信息描述。 */
  Value?: string;
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
  CustomId?: string;
  /** 码段配置 */
  CodeParts?: CodePart[];
  /** 包装单位 */
  Unit?: string;
  /** 场景值 */
  SceneCode?: number;
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

/** 安心计划二维码 */
declare interface PlanQRCode {
  /** 二维码 */
  Url: string;
  /** 状态，0:未激活 1:已激活 2:已冻结 */
  Status: number;
}

/** 安心计划二维码扫码记录 */
declare interface PlanQRCodeRecord {
  /** 二维码 */
  Url: string;
  /** OpenID */
  OpenId: string;
  /** 扫码时间 */
  ScanTime: string;
  /** IP 地址 */
  Ip: string;
  /** 国家 */
  Country: string;
  /** 省份 */
  Province: string;
  /** 城市 */
  City: string;
}

/** 商品信息 */
declare interface Product {
  /** 商户标识码 */
  MerchantId: string;
  /** 商品名称 */
  Name: string;
  /** 商品id */
  ProductId?: string;
  /** 企业id */
  CorpId?: number;
  /** 商品编号 */
  ProductCode?: string;
  /** 商品规格 */
  Specification?: string;
  /** 备注 */
  Remark?: string;
  /** 商品图片 */
  Logo?: string[];
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 预留字段 */
  Ext?: Ext;
  /** 商户名称 */
  MerchantName?: string;
  /** 认证状态 */
  CertState?: number;
}

/** 企业配额信息 */
declare interface Quota {
  /** 服务开始时间 */
  StartTime: string;
  /** 服务结束时间 */
  EndTime: string;
  /** 配额ID */
  QuotaId?: number;
  /** 企业ID */
  CorpId?: number;
  /** 开通服务 */
  Services?: string[];
  /** 商户配额 */
  FactoryQuota?: number;
  /** 商品配额 */
  ItemQuota?: number;
  /** 溯源码配额 */
  TrackQuota?: number;
  /** 销售码配额 */
  SaleQuota?: number;
  /** 上链配额 */
  ChainQuota?: number;
  /** 风控配额 */
  RiskQuota?: number;
  /** AI文字数量 */
  AigcTextQuota?: number;
  /** AI图片数量 */
  AigcImageQuota?: number;
  /** 溯源类型 */
  TrackType?: number;
  /** 开通版本 lite:轻量版, basic:基础版, standard:标准版 */
  Version?: string;
  /** 是否开启企业认证 */
  ProductCertify?: number;
}

/** 原始扫码日志 */
declare interface RawScanLog {
  /** 日志ID */
  LogId?: number;
  /** 微信小程序openid */
  Openid?: string;
  /** 扫码时间 */
  CreateTime?: string;
  /** 溯源码 */
  Code?: string;
  /** 企业ID */
  CorpId?: number;
  /** 商户ID */
  MerchantId?: string;
  /** 商品ID */
  ProductId?: string;
  /** 批次ID */
  BatchId?: string;
  /** 省份 */
  Province?: string;
  /** 地市 */
  City?: string;
  /** 区/县 */
  District?: string;
}

/** 扫码明细 */
declare interface ScanLog {
  /** 行ID */
  LogId?: number;
  /** 微信openid */
  Openid?: string;
  /** 微信昵称 */
  Nickname?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 码 */
  Code?: string;
  /** 企业ID */
  CorpId?: number;
  /** 商户ID */
  MerchantId?: string;
  /** 商品ID */
  ProductId?: string;
  /** ip地址 */
  Ip?: string;
  /** 国家 */
  Country?: string;
  /** 省份 */
  Province?: string;
  /** 城市 */
  City?: string;
  /** 县/区 */
  District?: string;
  /** 微信 unionid */
  Unionid?: string;
  /** 首次扫码 0:否, 1:是 */
  First?: number;
  /** 批次ID */
  BatchId?: string;
  /** 扫码类型 0:无效扫码 1: 小程序扫码 2: 商家扫码 */
  Type?: number;
  /** 商户名称 */
  MerchantName?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 产品Logo */
  ProductLogo?: string;
  /** 风险状态0: 未知, 1:通过, 2:失败/风险, 3:存疑 */
  Status?: number;
  /** 是否开启验证0:否, 1:是 */
  Verify?: number;
}

/** 扫码统计 */
declare interface ScanStat {
  /** 安心码 */
  Code?: string;
  /** 企业ID */
  CorpId?: number;
  /** 商户ID */
  MerchantId?: string;
  /** 产品ID */
  ProductId?: string;
  /** 批次ID */
  BatchId?: string;
  /** 扫码次数 */
  Pv?: number;
  /** 扫码人数 */
  Uv?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 商户名称 */
  MerchantName?: string;
  /** 产品名称 */
  ProductName?: string;
}

/** 溯源码 */
declare interface TraceCode {
  /** 二维码 */
  Code?: string;
  /** 企业ID */
  CorpId?: number;
  /** 码包ID */
  PackId?: string;
  /** 批次ID */
  BatchId?: string;
  /** 所属商户ID */
  MerchantId?: string;
  /** 产品ID */
  ProductId?: string;
  /** 码状态 0: 冻结 1: 激活 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 商户名称 */
  MerchantName?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 渠道商ID */
  AgentId?: number;
  /** 码层级 0: 最小级, 1: 一级, 2: 二级 */
  Level?: number;
  /** 码层级详情 */
  PackSpec?: PackSpec[];
  /** 场景码 */
  SceneCode?: number;
  /** 流水码 */
  SerialCode?: number;
}

/** 溯源数据 */
declare interface TraceData {
  /** 溯源ID */
  TraceId: string;
  /** 企业ID */
  CorpId: number;
  /** 码类型 0: 批次, 1: 码, 2: 生产任务 */
  Type: number;
  /** 码值，跟码类型一一对应 */
  Code: string;
  /** 排序，在Phase相同情况下，值越小排名靠前 */
  Rank: number;
  /** 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源 */
  Phase: number;
  /** 溯源环节名称 */
  PhaseName: string;
  /** 溯源时间 */
  TraceTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 上链状态 0: 未上链 1: 上链中 2: 已上链 -1: 异常 */
  ChainStatus: number;
  /** 上链时间 */
  ChainTime: string;
  /** 上链数据 */
  ChainData: ChainData;
  /** 溯源阶段配置 */
  PhaseData: PhaseData;
  /** 溯源阶段状态 0: 无效, 1: 有效 */
  Status: number;
  /** 无 */
  TraceItems?: TraceItem[];
}

/** 溯源数据项 Type 的枚举值text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型具体组合如下- Type: "text" 文本类型, 对应值 Value: "文本字符串"- Type: "longtext" 长文本类型, 对应值 Value: "长文本字符串, 支持换行\n"- Type: "banner" 单图片类型, 对应图片地址 Value: "https://sample.cdn.com/xxx.jpg"- Type: "image" 多图片类型, 对应图片地址 Values: ["https://sample.cdn.com/1.jpg", "https://sample.cdn.com/2.jpg"]- Type: "video" 视频类型, 对应视频地址 Value: "https://sample.cdn.com/xxx.mp4"- Type: "mp" 小程序类型, 对应配置 Values: ["WXAPPID", "WXAPP_PATH", "跳转说明"] */
declare interface TraceItem {
  /** 字段名称 */
  Name: string;
  /** 字段值 */
  Value: string;
  /** 字段类型text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型,video:视频类型,mp:小程序类型 */
  Type: string;
  /** 多个值 */
  Values: string[];
  /** 只读 */
  ReadOnly?: boolean;
  /** 扫码展示 */
  Hidden?: boolean;
  /** 类型标识 */
  Key?: string;
  /** 扩展字段 */
  Ext?: string;
  /** 额外属性 */
  Attrs?: TraceItem[];
  /** 子页面，只读 */
  List?: TraceData[];
}

/** 付费信息使用量 */
declare interface UsageQuota {
  /** 企业ID */
  CorpId?: number;
  /** 商户配额 */
  FactoryCnt?: number;
  /** 商品数量 */
  ItemCnt?: number;
  /** 溯源码量 */
  TrackCnt?: number;
  /** 营销码额度 */
  SaleCnt?: number;
  /** 区块链上链次数 */
  ChainCnt?: number;
  /** 风险检测次数 */
  RiskCnt?: number | null;
  /** 时间 */
  UpdateTime?: string;
}

declare interface AuthorizedTransferRequest {
  /** 业务加密入参。 */
  BusinessSecurityData: InputEncryptData;
}

declare interface AuthorizedTransferResponse {
  /** 业务出参。 */
  Data?: OutputAuthorizedTransfer;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChainBatchRequest {
  /** 企业ID */
  CorpId: number;
  /** 溯源ID */
  ChainList: Chain[];
}

declare interface CreateChainBatchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  /** 模板ID，或者活动ID */
  MpTpl?: string;
  /** 克隆批次ID，同时会复制溯源信息 */
  CloneId?: string;
  /** 批次编号，业务字段不判断唯一性 */
  BatchCode?: string;
  /** 有效期 */
  ValidDate?: string;
  /** 生产日期 */
  ProductionDate?: string;
}

declare interface CreateCodeBatchResponse {
  /** 批次ID */
  BatchId?: string;
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
  /** 关联产品ID */
  ProductId?: string;
  /** 层级码时是否提前生成关联关系，默认为 1 */
  RelateType?: number;
  /** 场景值 */
  SceneCode?: number;
}

declare interface CreateCodePackResponse {
  /** 码包ID */
  PackId?: string;
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
  CorpId?: number;
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
  /** 产品ID */
  ProductId?: string;
  /** 是否预生成码关系0: 否, 1:是默认为1，仅对层级码有效 */
  RelateType?: number;
  /** 场景值 */
  SceneCode?: number;
}

declare interface CreateCustomPackResponse {
  /** 码包ID */
  PackId?: string;
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
  CustomId?: string;
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
  /** 码包来源 0:自建, 1:第三方 */
  CodeType?: number;
  /** 码包前缀地址 第三方码包时必填 */
  CodeUrl?: string;
}

declare interface CreateMerchantResponse {
  /** 商户标识码 */
  MerchantId?: string;
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
  ProductId?: string;
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
  TraceId?: string;
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
  BatchId?: string;
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
  /** 码绑定激活策略，默认 00: 传什么码就激活什么码1: 层级码 + 层级子码 */
  CodeType?: number;
  /** 错误检查类型，默认 00: 没有新导入码时正常返回1: 没有新导入码时报错，并返回没有导入成功的原因 */
  CheckType?: number;
}

declare interface CreateTraceCodesResponse {
  /** 批次ID */
  BatchId?: string;
  /** 导入成功码数量 */
  ActiveCnt?: number;
  /** 批次码数量 */
  CodeCnt?: number;
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
  TraceId?: string;
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
  BatchId?: string;
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
  MerchantId?: string;
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
  ProductId?: string;
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
  TraceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentCorpsRequest {
  /** 每页数量 */
  PageSize?: number;
  /** 页数 */
  PageNumber?: number;
  /** 渠道ID */
  AgentId?: number;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeAgentCorpsResponse {
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
  CodeBatch?: CodeBatch;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCodeBatchesRequest {
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
  /** 批次状态 0: 未激活 1: 已激活 -1: 已冻结 */
  Status?: number;
}

declare interface DescribeCodeBatchesResponse {
  /** 批次列表 */
  CodeBatches?: CodeBatch[];
  /** 总条数 */
  TotalCount?: number;
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
  /** 批次状态 */
  Status?: number;
}

declare interface DescribeCodeBatchsResponse {
  /** 批次列表 */
  CodeBatchs?: CodeBatch[];
  /** 总条数 */
  TotalCount?: number;
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
  Status?: string;
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
  Url?: string;
  /** 图片码包地址，可能为空 */
  ImgUrl?: string;
  /** 文字码包Key，用于上传导入 */
  FileKey?: string;
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
  /** 资源类型 batch:批次, order_in 入库, order_out: 出入 */
  ResType?: string;
  /** 资源ID ResType是 batch 时对应是批次ID, 是 order_in, order_out时，则是订单ID */
  ResId?: string;
  /** 应用场景 */
  SceneCode?: number;
  /** 码包状态 */
  Status?: string;
}

declare interface DescribeCodePacksResponse {
  /** 码列表 */
  CodePacks?: CodePack[];
  /** 总数 */
  TotalCount?: number;
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
  Codes?: CodeItem[];
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
  CorpQuotas?: CorpQuota[];
  /** 记录总数量 */
  Total?: number;
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
  CustomRule?: CustomRule;
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
  CustomRules?: CustomRule[];
  /** 总数 */
  TotalCount?: number;
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
  Url?: string;
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
  Merchant?: Merchant;
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
  Merchants?: Merchant[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePlanQRCodeScanRecordsRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 页码 */
  PageNo: number;
  /** 页大小 */
  PageSize: number;
}

declare interface DescribePlanQRCodeScanRecordsResponse {
  /** 返回码 */
  Ret?: number;
  /** 总数 */
  Total?: number;
  /** 数据 */
  Data?: PlanQRCodeRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePlanQRCodesRequest {
  /** 计划ID */
  PlanId: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 页码 */
  PageNo: number;
  /** 页大小 */
  PageSize: number;
}

declare interface DescribePlanQRCodesResponse {
  /** 返回码 */
  Ret?: number;
  /** 总数 */
  Total?: number;
  /** 数据 */
  Data?: PlanQRCode[];
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
  Product?: Product;
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
  /** 认证状态 */
  CertState?: number;
}

declare interface DescribeProductsResponse {
  /** 商品列表 */
  Products?: Product[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRawScanLogsRequest {
  /** 企业ID, 默认为当前企业如果有渠道权限，可以传 0 会查渠道下所有的企业 */
  CorpId?: number;
  /** 分页数量，默认为 20，最大为 1000 */
  PageSize?: number;
  /** 当前分页，默认为 1 */
  PageNumber?: number;
  /** 从哪个日志后查询即: LogId > $AfterLogId */
  AfterLogId?: number;
  /** 开始时间 >= StartTime */
  StartTime?: string;
  /** 结束时间 < EndTime */
  EndTime?: string;
}

declare interface DescribeRawScanLogsResponse {
  /** 原始扫码日志 */
  ScanLogs?: RawScanLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanLogsRequest {
  /** 企业ID */
  CorpId?: number;
  /** 分页数量 */
  PageSize?: number;
  /** 当前分页 */
  PageNumber?: number;
  /** 安心码 */
  Code?: string;
  /** 小程序用户ID */
  Openid?: string;
}

declare interface DescribeScanLogsResponse {
  /** 【弃用】 */
  Products?: ScanLog[];
  /** 条数 */
  TotalCount?: number;
  /** 扫描记录 */
  ScanLogs?: ScanLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanStatsRequest {
  /** 企业ID */
  CorpId?: number;
  /** 分页数量 */
  PageSize?: number;
  /** 当前分页 */
  PageNumber?: number;
  /** 商户ID */
  MerchantId?: string;
  /** 产品ID */
  ProductId?: string;
  /** 批次ID */
  BatchId?: string;
  /** 安心码 */
  Code?: string;
}

declare interface DescribeScanStatsResponse {
  /** 统计记录 */
  ScanStats?: ScanStat[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTmpTokenRequest {
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeTmpTokenResponse {
  /** 临时token */
  Token?: string;
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
  TraceCode?: TraceCode;
  /** 码路径，如level是2，则为 [1级, 2级] */
  CodePath?: string[];
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
  TraceCodes?: TraceCode[];
  /** 条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTraceDataByIdRequest {
  /** 溯源ID */
  Id: string;
  /** 企业ID */
  CorpId?: number;
}

declare interface DescribeTraceDataByIdResponse {
  /** 无 */
  TraceData?: TraceData;
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
  /** 溯源码 */
  Code?: string;
  /** 溯源阶段 0:商品 1:通用 2:内部溯源 3:外部溯源 */
  Phase?: number;
  /** 数量 */
  PageSize?: number;
}

declare interface DescribeTraceDataListResponse {
  /** 溯源阶段数量 */
  TotalCount?: number;
  /** 溯源明细 */
  TraceDataList?: TraceData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EffectFeedbackRequest {
  /** 业务加密入参。 */
  BusinessSecurityData: InputEncryptData;
}

declare interface EffectFeedbackResponse {
  /** 业务出参。 */
  Data?: OutputAuthorizedTransfer;
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
  /** 有效期 */
  ValidDate?: string;
  /** 生产日期 */
  ProductionDate?: string;
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
  CustomId?: string;
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
  CustomId?: string;
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
  /** 码包来源 0:自建, 1:第三方码包，暂不支持修改 */
  CodeType?: number;
  /** 码包前缀地址 第三方码包时必填 */
  CodeUrl?: string;
}

declare interface ModifyMerchantResponse {
  /** 商户标识码 */
  MerchantId?: string;
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
  ProductId?: string;
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
  UnlinkCnt?: number;
  /** 当前批次的码数量 */
  CodeCnt?: number;
  /** 批次ID */
  BatchId?: string;
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
  BatchId?: string;
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
  /** 环节数据 */
  PhaseData?: PhaseData;
  /** 溯源状态 0: 无效, 1: 有效 */
  Status?: number;
  /** 排序 */
  Rank?: number;
  /** [无效] 类型 */
  Type?: number;
  /** [无效] 溯源码 */
  Code?: string;
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
}

declare interface ModifyTraceDataResponse {
  /** 溯源ID */
  TraceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportBatchCallbackStatusRequest {
  /** 业务加密入参。 */
  BusinessSecurityData: InputEncryptData;
}

declare interface ReportBatchCallbackStatusResponse {
  /** 业务出参。 */
  Data?: OutputAuthorizedTransfer;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Trp T-Sec-安心平台(RP)} */
declare interface Trp {
  (): Versions;
  /** 授权数据上报接口 {@link AuthorizedTransferRequest} {@link AuthorizedTransferResponse} */
  AuthorizedTransfer(data: AuthorizedTransferRequest, config?: AxiosRequestConfig): AxiosPromise<AuthorizedTransferResponse>;
  /** 通用批量上链接口 {@link CreateChainBatchRequest} {@link CreateChainBatchResponse} */
  CreateChainBatch(data: CreateChainBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChainBatchResponse>;
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
  /** 查询渠道企业列表 {@link DescribeAgentCorpsRequest} {@link DescribeAgentCorpsResponse} */
  DescribeAgentCorps(data?: DescribeAgentCorpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentCorpsResponse>;
  /** 查询批次信息 {@link DescribeCodeBatchByIdRequest} {@link DescribeCodeBatchByIdResponse} */
  DescribeCodeBatchById(data?: DescribeCodeBatchByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodeBatchByIdResponse>;
  /** 查询批次列表 {@link DescribeCodeBatchesRequest} {@link DescribeCodeBatchesResponse} */
  DescribeCodeBatches(data?: DescribeCodeBatchesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodeBatchesResponse>;
  /** 【废弃】查询批次列表 {@link DescribeCodeBatchsRequest} {@link DescribeCodeBatchsResponse} */
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
  /** 查询安心计划二维码扫码记录 {@link DescribePlanQRCodeScanRecordsRequest} {@link DescribePlanQRCodeScanRecordsResponse} */
  DescribePlanQRCodeScanRecords(data: DescribePlanQRCodeScanRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlanQRCodeScanRecordsResponse>;
  /** 查询安心计划二维码列表 {@link DescribePlanQRCodesRequest} {@link DescribePlanQRCodesResponse} */
  DescribePlanQRCodes(data: DescribePlanQRCodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlanQRCodesResponse>;
  /** 查询商品信息 {@link DescribeProductByIdRequest} {@link DescribeProductByIdResponse} */
  DescribeProductById(data: DescribeProductByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductByIdResponse>;
  /** 查询商品列表 {@link DescribeProductsRequest} {@link DescribeProductsResponse} */
  DescribeProducts(data?: DescribeProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductsResponse>;
  /** 增量查询原始扫码日志 {@link DescribeRawScanLogsRequest} {@link DescribeRawScanLogsResponse} */
  DescribeRawScanLogs(data?: DescribeRawScanLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRawScanLogsResponse>;
  /** 查询扫码日志明细 {@link DescribeScanLogsRequest} {@link DescribeScanLogsResponse} */
  DescribeScanLogs(data?: DescribeScanLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanLogsResponse>;
  /** 查询扫码统计列表 {@link DescribeScanStatsRequest} {@link DescribeScanStatsResponse} */
  DescribeScanStats(data?: DescribeScanStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanStatsResponse>;
  /** 查询临时Token {@link DescribeTmpTokenRequest} {@link DescribeTmpTokenResponse} */
  DescribeTmpToken(data?: DescribeTmpTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTmpTokenResponse>;
  /** 查询二维码信息 {@link DescribeTraceCodeByIdRequest} {@link DescribeTraceCodeByIdResponse} */
  DescribeTraceCodeById(data?: DescribeTraceCodeByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceCodeByIdResponse>;
  /** 查询二维码列表 {@link DescribeTraceCodesRequest} {@link DescribeTraceCodesResponse} */
  DescribeTraceCodes(data?: DescribeTraceCodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceCodesResponse>;
  /** 根据溯源ID查溯源信息 {@link DescribeTraceDataByIdRequest} {@link DescribeTraceDataByIdResponse} */
  DescribeTraceDataById(data: DescribeTraceDataByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceDataByIdResponse>;
  /** 查询溯源信息 {@link DescribeTraceDataListRequest} {@link DescribeTraceDataListResponse} */
  DescribeTraceDataList(data?: DescribeTraceDataListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTraceDataListResponse>;
  /** 效果数据反馈 {@link EffectFeedbackRequest} {@link EffectFeedbackResponse} */
  EffectFeedback(data: EffectFeedbackRequest, config?: AxiosRequestConfig): AxiosPromise<EffectFeedbackResponse>;
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
  /** 离线筛选包数据推送 {@link ReportBatchCallbackStatusRequest} {@link ReportBatchCallbackStatusResponse} */
  ReportBatchCallbackStatus(data: ReportBatchCallbackStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ReportBatchCallbackStatusResponse>;
}

export declare type Versions = ["2021-05-15"];

export default Trp;
