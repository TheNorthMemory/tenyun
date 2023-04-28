/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账户信息 */
declare interface Acct {
  /** STRING(50)，见证子账户的账号（可重复） */
  SubAcctNo: string | null;
  /** STRING(10)，见证子账户的属性（可重复。1: 普通会员子账号; 2: 挂账子账号; 3: 手续费子账号; 4: 利息子账号; 5: 平台担保子账号） */
  SubAcctProperty: string | null;
  /** STRING(32)，交易网会员代码（可重复） */
  TranNetMemberCode: string | null;
  /** STRING(150)，见证子账户的名称（可重复） */
  SubAcctName: string | null;
  /** STRING(20)，见证子账户可用余额（可重复） */
  AcctAvailBal: string | null;
  /** STRING(20)，见证子账户可提现金额（可重复。开户日期或修改日期） */
  CashAmt: string | null;
  /** STRING(8)，维护日期 */
  MaintenanceDate: string | null;
}

/** 添加合同响应对象 */
declare interface AddContractResult {
  /** 合同主键 */
  ContractId: string | null;
}

/** 添加商户响应对象 */
declare interface AddMerchantResult {
  /** 系统商户号 */
  MerchantNo: string | null;
}

/** 添加门店响应对象 */
declare interface AddShopResult {
  /** 门店编号 */
  ShopNo: string | null;
}

/** 经办人信息 */
declare interface AgencyClientInfo {
  /** 经办人姓名，存在经办人必输 */
  AgencyClientName: string;
  /** 经办人证件类型，存在经办人必输 */
  AgencyClientGlobalType: string;
  /** 经办人证件号，存在经办人必输 */
  AgencyClientGlobalId: string;
  /** 经办人手机号，存在经办人必输 */
  AgencyClientMobile: string;
}

/** 代理商完税证明 */
declare interface AgentTaxPayment {
  /** 主播银行账号 */
  AnchorId: string;
  /** 主播姓名 */
  AnchorName: string;
  /** 主播身份证 */
  AnchorIDCard: string;
  /** 纳税的开始时间，格式yyyy-MM-dd */
  StartTime: string;
  /** 纳税的结束时间，格式yyyy-MM-dd */
  EndTime: string;
  /** 流水金额。以“分”为单位 */
  Amount: number;
  /** 应缴税款。以“分”为单位 */
  Tax: number;
}

/** 代理商完税证明批次信息 */
declare interface AgentTaxPaymentBatch {
  /** 状态消息 */
  StatusMsg: string;
  /** 批次号 */
  BatchNum: number;
  /** 录入记录的条数 */
  InfoNum: number;
  /** 源电子凭证下载地址 */
  RawElectronicCertUrl: string;
  /** 代理商账号 */
  AgentId: string;
  /** 文件名 */
  FileName: string;
  /** 状态码。0表示下载成功 */
  StatusCode: number;
  /** 渠道号 */
  Channel: number;
  /** 0-视同，1-个体工商户 */
  Type: number;
}

/** 税前金额结果 */
declare interface AmountBeforeTaxResult {
  /** 税前金额 */
  AmountBeforeTax: string | null;
  /** 两位精度税前金额 */
  AmountBeforeTaxWithTwoDigitPrecision: string | null;
}

/** 主播签约信息 */
declare interface AnchorContractInfo {
  /** 主播ID */
  AnchorId: string;
  /** 主播名称 */
  AnchorName: string;
  /** 代理商ID */
  AgentId: string;
  /** 代理商名称 */
  AgentName: string;
  /** 主播身份证号 */
  IdNo: string;
}

/** 主播扩展信息 */
declare interface AnchorExtendInfo {
  /** 扩展信息类型__id_card_no__:身份证号码__id_card_name__:身份证姓名__id_card_front__:身份证图片正面__id_card_back__:身份证图片反面__tax_type__:完税类型:0-自然人,1-个体工商户__channel_account__:渠道账号(_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密) */
  Type: string;
  /** 扩展信息 */
  Value: string;
}

/** 提交申报材料结果 */
declare interface ApplyDeclareData {
  /** 商户号 */
  MerchantId: string;
  /** 第三方指令编号 */
  TransactionId: string;
  /** 受理状态 */
  Status: string;
  /** 申报流水号 */
  DeclareId: string;
  /** 原申报流水号 */
  OriginalDeclareId: string | null;
  /** 付款人ID */
  PayerId: string;
}

/** 提交申报材料结果 */
declare interface ApplyDeclareResult {
  /** 错误码 */
  Code: string;
  /** 提交申报材料数据 */
  Data: ApplyDeclareData;
}

/** 付款结果 */
declare interface ApplyFlexPaymentResult {
  /** 订单ID */
  OrderId: string;
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 税后金额 */
  AmountAfterTax: string;
  /** 税金 */
  Tax: string;
  /** 增值税 */
  Vat: string | null;
  /** 个人所得税 */
  IndividualIncomeTax: string | null;
  /** 附加税总税额 */
  AdditionalTaxSum: string | null;
  /** 附加税税项。格式为JSON格式 */
  AdditionalTaxItem: string | null;
}

/** 结算结果 */
declare interface ApplyFlexSettlementResult {
  /** 订单ID */
  OrderId: string;
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 税后金额 */
  AmountAfterTax: string;
  /** 税金 */
  Tax: string;
}

/** 申请单笔交易回单结果 */
declare interface ApplyOpenBankOrderDetailReceiptResult {
  /** 渠道回单申请ID */
  ChannelApplyId: string;
  /** 申请状态。SUCCESS：申请成功；FAILED：申请失败；PROCESSING：申请中。注意：若返回申请中，需要再次调用回单申请结果查询接口，查询结果。 */
  ReceiptStatus: string;
  /** 申请返回描述，例如失败原因等。 */
  ReceiptMessage: string | null;
  /** 回单下载链接，申请成功时返回。 */
  DownloadUrl: string | null;
  /** 过期时间，yyyy-MM-dd HH:mm:ss格式。 */
  ExpireTime: string | null;
}

/** 云企付结算申请结果 */
declare interface ApplyOpenBankSettleOrderResult {
  /** 外部结算流水号 */
  OutSettleId: string;
  /** 渠道结算流水号 */
  ChannelSettleId: string;
  /** 退款状态。SUCCESS：结算成功；FAILED：结算失败；PROCESSING：结算中;INIT:初始化;ACCEPT_FAILED:受理失败,底层银行返回订单不存在ACCEPTED：受理成功_UNKNOWN：默认未知 */
  SettleStatus: string;
}

/** 子商户在线签约返回结果 */
declare interface ApplyOpenBankSubMerchantSignOnlineResult {
  /** 处理状态 SUCCESS：签约成功 FAILED：签约失败 PROCESSING：签约中 */
  SignStatus: string;
  /** 上传返回描述，例如失败原因等 */
  SignMessage: string | null;
  /** 第三方渠道返回信息，见渠道特殊说明 */
  ExternalReturnData: string | null;
}

/** 汇出指令申请数据 */
declare interface ApplyOutwardOrderData {
  /** 商户号 */
  MerchantId: string;
  /** 对接方汇出指令编号 */
  TransactionId: string;
  /** 受理状态 */
  Status: string;
}

/** 汇出指令申请结果 */
declare interface ApplyOutwardOrderResult {
  /** 汇出指令申请数据 */
  Data: ApplyOutwardOrderData;
  /** 错误码 */
  Code: string;
}

/** 付款人申请结果 */
declare interface ApplyPayerinfoData {
  /** 商户号 */
  MerchantId: string;
  /** 付款人ID */
  PayerId: string;
  /** 状态 */
  Status: string;
  /** 失败原因 */
  FailReason: string | null;
}

/** 付款人申请结果 */
declare interface ApplyPayerinfoResult {
  /** 错误码 */
  Code: string;
  /** 数据 */
  Data: ApplyPayerinfoData;
}

/** 申请对账文件结果 */
declare interface ApplyReconciliationFileResult {
  /** 申请对账文件的任务ID。 */
  ApplyFileId: string;
  /** 对账文件申请状态。__I__：申请中__S__：申请成功__F__：申请失败 */
  ApplyStatus: string;
  /** 申请结果描述。 */
  ApplyMessage: string | null;
}

/** 提交贸易材料结果 */
declare interface ApplyTradeData {
  /** 商户号 */
  MerchantId: string;
  /** 贸易材料流水号 */
  TradeFileId: string;
  /** 交易币种 */
  TradeCurrency: string;
  /** 交易金额 */
  TradeAmount: string;
  /** 付款人ID */
  PayerId: string;
  /** 状态 */
  Status: string;
}

/** 提交贸易材料结果 */
declare interface ApplyTradeResult {
  /** 错误码 */
  Code: string;
  /** 提交贸易材料数据 */
  Data: ApplyTradeData;
}

/** 分配关系 */
declare interface AssignmentData {
  /** 主播ID */
  AnchorId: string;
  /** 主播名称 */
  AnchorName: string;
  /** 代理商ID */
  AgentId: string;
  /** 代理商名称 */
  AgentName: string;
}

/** 支行信息 */
declare interface BankBranchInfo {
  /** 银行名称。 */
  BankName: string;
  /** 银行简称。 */
  BankAbbreviation: string;
  /** 支行名。 */
  BankBranchName: string;
  /** 联行号。 */
  BankBranchId: string;
}

/** 绑卡列表 */
declare interface BankCardItem {
  /** 超级网银行号 */
  EiconBankBranchId: string;
  /** 大小额行号 */
  CnapsBranchId: string;
  /** 结算账户类型1 – 本行账户2 – 他行账户 */
  SettleAcctType: number;
  /** 结算账户户名<敏感信息> */
  SettleAcctName: string;
  /** 开户行名称 */
  AcctBranchName: string;
  /** 用于提现<敏感信息> */
  SettleAcctNo: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 验证类型1 – 小额转账验证2 – 短信验证 */
  BindType: number;
  /** 用于短信验证BindType==2时必填<敏感信息> */
  Mobile: string;
  /** 证件类型 */
  IdType: string;
  /** 证件号码<敏感信息> */
  IdCode: string;
}

/** 机构账单文件下载地址响应对象 */
declare interface BillDownloadUrlResult {
  /** 对账单下载地址。GET方式访问，返回zip包，解压后为csv格式文件。 */
  DownloadUrl: string | null;
}

/** 第三方子商户银行卡绑定返回结果 */
declare interface BindOpenBankExternalSubMerchantBankAccountResult {
  /** 渠道申请编号。 */
  ChannelApplyId: string;
  /** 绑定状态。__SUCCESS__: 绑定成功__FAILED__: 绑定失败__PROCESSING__: 绑定中。注意：若返回绑定中，需要再次调用绑定结果查询接口,查询结果。 */
  BindStatus: string;
  /** 绑定返回描述, 例如失败原因等。 */
  BindMessage: string | null;
  /** 渠道子商户银行账户信息, 为JSON格式字符串（绑定成功状态下返回）。详情见附录-复杂类型。 */
  ExternalSubMerchantBankAccountReturnData: string | null;
  /** 绑卡序列号。 */
  BindSerialNo: string | null;
}

/** 绑定分账收款方响应 */
declare interface BindOpenBankProfitSharePayeeResult {
  /** 账户ID。受益人ID */
  AccountId: string;
  /** 账户号，通联渠道指客户银行账号 */
  AccountNo: string;
  /** 账户货币。参考附录“币种类型”。 */
  Currency: string;
}

/** 营业证件信息 */
declare interface BusinessLicenseInfo {
  /** 营业证件类型 IDCARD：身份证 CREDITCODE：统一社会信用代码 */
  BusinessLicenseType: string;
  /** 营业证件号码 非个人商户上送统一社会信用代码，个人商户上送身份证号码 */
  BusinessLicenseNumber: string;
  /** 营业证件有效期类型 LONGTERM：长期有效OTHER：非长期有效 */
  BusinessLicenseValidityType: string;
  /** 营业证件生效日期，yyyy-MM-dd */
  BusinessLicenseEffectiveDate: string;
  /** 营业证件失效日期，yyyy-MM-dd */
  BusinessLicenseExpireDate?: string;
}

/** 米大师内部存放的合约信息 */
declare interface ChannelContractInfo {
  /** 外部合约协议号 */
  OutContractCode: string;
  /** 米大师内部生成的合约协议号 */
  ChannelContractCode: string;
}

/** 米大师内部生成的合约信息 */
declare interface ChannelReturnContractInfo {
  /** 平台合约状态协议状态，枚举值：CONTRACT_STATUS_SIGNED：已签约CONTRACT_STATUS_TERMINATED：未签约CONTRACT_STATUS_PENDING：签约进行中 */
  ContractStatus: string;
  /** 米大师内部存放的合约信息 */
  ChannelContractInfo: ChannelContractInfo;
}

/** 查询城市编码响应对象 */
declare interface CityCodeResult {
  /** 城市编码cityid，数字与字母的结合 */
  CityId: string | null;
  /** 省份 */
  Province: string | null;
  /** 县区 */
  District: string | null;
  /** 城市 */
  City: string | null;
}

/** 银行在途清算结果信息 */
declare interface ClearItem {
  /** STRING(8)，日期（格式: 20190101） */
  Date: string | null;
  /** STRING(40)，子账号类型（子帐号类型。1: 普通会员子账号; 2: 挂账子账号; 3: 手续费子账号; 4: 利息子账号; 5: 平台担保子账号; 7: 在途; 8: 理财购买子帐号; 9: 理财赎回子帐号; 10: 平台子拥有结算子帐号） */
  SubAcctType: string | null;
  /** STRING(3)，对账状态（0: 成功; 1: 失败） */
  ReconcileStatus: string | null;
  /** STRING(300)，对账返回信息 */
  ReconcileReturnMsg: string | null;
  /** STRING(20)，清算状态（0: 成功; 1: 失败; 2: 异常; 3: 待处理） */
  ClearingStatus: string | null;
  /** STRING(2)，清算返回信息 */
  ClearingReturnMsg: string | null;
  /** STRING(300)，待清算总金额 */
  TotalAmt: string | null;
}

/** 云企付-关单响应 */
declare interface CloseOpenBankPaymentOrderResult {
  /** 外部商户订单号 */
  OutOrderId: string;
  /** 云企付平台订单号 */
  ChannelOrderId: string;
  /** 订单状态。关单成功CLOSED */
  OrderStatus: string;
}

/** 附加项信息对象 */
declare interface CloudAttachmentInfo {
  /** 附加项金额。附加项的金额（必须是正数，单位：分），代表积分的数量、抵扣的金额、溢价的金额、补贴的金额 */
  AttachmentAmount: number;
  /** 附加项类型。Add：加项；Sub：减项；Point：积分项；Subsidy：补贴项。 */
  AttachmentType: string;
  /** 附加项名称。当银行作为收单机构可能会对该字段有要求，请向米大师确认。 */
  AttachmentName: string;
  /** 附加项编号。当银行作为收单机构可能会对该字段有要求，请向米大师确认。 */
  AttachmentCode: string;
}

/** 渠道方用户信息 */
declare interface CloudChannelExternalUserInfo {
  /** 渠道方用户类型，枚举值:WX_OPENID 微信支付类型ALIPAY_BUYERID 支付宝支付类型 */
  ChannelExternalUserType: string;
  /** 渠道方用户Id */
  ChannelExternalUserId: string;
}

/** 客户端信息 */
declare interface CloudClientInfo {
  /** 场景类型。wechat_ecommerce渠道 - h5支付方式，此字段必填；枚举值：CLIENT_TYPE_UNKNOWN 未知;CLIENT_TYPE_IOS ios系统;CLIENT_TYPE_ANDROID 安卓系统;CLIENT_TYPE_WAP WAP场景;CLIENT_TYPE_H5 H5场景; */
  ClientType?: string;
  /** 应用名称。 */
  AppName?: string;
  /** 网站URL。 */
  AppUrl?: string;
  /** IOS平台BundleID。 */
  BundleId?: string;
  /** Android平台PackageName */
  PackageName?: string;
}

/** 渠道透传字段 */
declare interface CloudExternalAttachmentData {
  /** 渠道名 */
  ChannelName: string;
  /** 渠道透传字段，由各个渠道自行定义 */
  AttachmentData: string;
}

/** 第三方渠道数据信息 */
declare interface CloudExternalChannelData {
  /** 第三方渠道数据名。PAYMENT_ORDER_EXTERNAL_REQUEST_DATA: 支付下单请求数据PAYMENT_ORDER_EXTERNAL_RETURN_DATA: 支付下单返回数据PAYMENT_ORDER_EXTERNAL_NOTIFY_DATA: 支付通知数据 */
  ExternalChannelDataName: string | null;
  /** 第三方渠道数据值。当ExternalChannelDataType=PAYMENT时，反序列化格式请参考[ExternalChannelPaymentDataValue](https://dev.tke.midas.qq.com/juxin-doc-next/apidocs/external-channel-data/QueryExternalChannelData.html#externalchannelpaymentdatavalue) */
  ExternalChannelDataValue: string | null;
}

/** 渠道扩展促销信息 */
declare interface CloudExternalPromptGroup {
  /** 渠道名。为米大师定义的枚举值：wechat 微信渠道 */
  ChannelName: string;
  /** 渠道扩展促销信息列表，由各个渠道自行定义。ChannelName为wechat时，组成为 */
  ExternalPromptInfoList: CloudExternalPromptInfo[];
}

/** 渠道扩展促销信息 */
declare interface CloudExternalPromptInfo {
  /** 优惠商品信息类型。 */
  ExternalPromptType: string;
  /** 优惠商品信息数据。 */
  ExternalPromptValue: string;
  /** 优惠商品名称。 */
  ExternalPromptName?: string;
}

/** 渠道方用户信息 */
declare interface CloudExternalUserInfo {
  /** 渠道方用户类型 */
  ExternalUserType?: string;
  /** 渠道方用户ID */
  ExternalUserId?: string;
}

/** 全局支付时间信息 */
declare interface CloudGlobalPayTimeInfo {
  /** 订单开始时间。不指定时默认为当前时间。 */
  StartTimestamp?: number;
  /** 订单结束时间。逾期将会拒绝下单。不指定时默认为当前时间的7天后结束。 */
  ExpireTimestamp?: number;
  /** 时区。不指定时默认为28800，表示北京时间（东八区）。 */
  TimeOffset?: number;
}

/** 返回订单信息 */
declare interface CloudOrderReturn {
  /** 米大师分配的支付主MidasAppId */
  AppId: string;
  /** 开发者支付订单号 */
  OutTradeNo: string;
  /** 调用下单接口传进来的子单列表 */
  SubOrderList: CloudSubOrderReturn[] | null;
  /** 调用下单接口获取的米大师交易订单号 */
  TransactionId: string;
  /** 用户Id */
  UserId: string;
  /** 支付渠道wechat:微信支付 */
  Channel: string;
  /** 物品Id */
  ProductId: string;
  /** 发货标识，由开发者在调用下单接口的时候传入 */
  Metadata: string;
  /** ISO货币代码 */
  CurrencyType: string;
  /** 支付金额，单位：分 */
  Amt: number;
  /** 订单状态0:初始状态，获取米大师交易订单成功1:拉起米大师支付页面成功，用户未支付2:用户支付成功，正在发货3:用户支付成功，发货失败4:用户支付成功，发货成功5:关单中6:已关单 */
  OrderState: string;
  /** 下单时间，unix时间戳 */
  OrderTime: string;
  /** 支付时间，unix时间戳 */
  PayTime: string;
  /** 支付回调时间，unix时间戳 */
  CallBackTime: string;
  /** 支付机构订单号 */
  ChannelExternalOrderId: string;
  /** 米大师内部渠道订单号 */
  ChannelOrderId: string;
  /** 是否曾退款 */
  RefundFlag: string;
  /** 用户支付金额 */
  CashAmt: string;
  /** 抵扣券金额 */
  CouponAmt: string;
  /** 商品名称 */
  ProductName: string;
  /** 结算信息 */
  SettleInfo: CloudSettleInfo | null;
  /** 附加项信息列表 */
  AttachmentInfoList: CloudAttachmentInfo[] | null;
  /** 渠道方返回的用户信息列表 */
  ChannelExternalUserInfoList: CloudChannelExternalUserInfo[] | null;
  /** 渠道扩展促销列表 */
  ExternalReturnPromptGroupList: CloudExternalPromptGroup[] | null;
  /** 场景扩展信息 */
  SceneInfo: string | null;
  /** 子应用ID */
  SubAppId: string | null;
  /** 支付场景 */
  PayScene: string | null;
  /** 支付方式 */
  PaymentMethod: string | null;
  /** 平台应收金额单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome */
  TotalPlatformIncome: number | null;
  /** 商户应收金额单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome */
  TotalMchIncome: number | null;
}

/** 结算信息对象 */
declare interface CloudSettleInfo {
  /** 是否需要支付确认。0: 不需要支付确认1: 需要支付确认传1时，需要在支付完成后成功调用了《支付确认》接口，该笔订单才会被清分出去 */
  NeedToBeConfirmed?: number;
  /** 是否指定分账。0: 不指定分账1: 指定分账 */
  ProfitSharing?: number;
}

/** 门店信息 */
declare interface CloudStoreInfo {
  /** 门店ID。 */
  StoreId?: string;
  /** 门店名称。 */
  StoreName?: string;
  /** 门店地址。 */
  StoreAddress?: string;
  /** 门店地区代码。 */
  StoreAreaCode?: string;
  /** 设备ID。wechat_ecommerce渠道 - h5支付方式，此字段必填。 */
  StoreDeviceId?: string;
}

/** 子订单对象 */
declare interface CloudSubOrder {
  /** 子订单号。长度32个字符供参考，部分渠道存在长度更短的情况接入时请联系开发咨询。 */
  SubOutTradeNo: string;
  /** 支付子商户ID。米大师计费SubAppId，代表子商户。 */
  SubAppId: string;
  /** 商品名称。业务自定义的子订单商品名称，无需URL编码，长度限制以具体所接入渠道为准。 */
  ProductName: string;
  /** 商品详情。业务自定义的子订单商品详情，无需URL编码，长度限制以具体所接入渠道为准。 */
  ProductDetail: string;
  /** 平台应收。子订单平台应收金额，单位：分，需要注意的是Amt = PlatformIncome+SubMchIncome。 */
  PlatformIncome: number;
  /** 商户应收。子订单结算应收金额，单位：分，需要注意的是Amt = PlatformIncome+SubMchIncome。 */
  SubMchIncome: number;
  /** 透传字段。发货标识，由开发者在调用米大师下单接口的 时候下发。 */
  Metadata: string;
  /** 支付金额。子订单支付金额，需要注意的是Amt = PlatformIncome+SubMchIncome。 */
  Amt: number;
  /** 原始金额。子订单原始金额，OriginalAmt>=Amt。 */
  OriginalAmt: number;
  /** 微信子商户号。 */
  WxSubMchId?: string;
  /** 结算信息。例如是否需要分账、是否需要支付确认等。 */
  SettleInfo?: CloudSettleInfo;
  /** 附加项信息列表。例如溢价信息、抵扣信息、积分信息、补贴信息通过该字段可以实现渠道方的优惠抵扣补贴等营销功能。 */
  AttachmentInfoList?: CloudAttachmentInfo[];
  /** 渠道透传数据列表。 */
  ExternalAttachmentDataList?: CloudExternalAttachmentData[];
}

/** 退款子单 */
declare interface CloudSubOrderRefund {
  /** 子订单退款金额 */
  RefundAmt: number;
  /** 平台应退金额 */
  PlatformRefundAmt: number;
  /** 商家应退金额 */
  SubMchRefundAmt: number;
  /** 子订单号 */
  SubOutTradeNo: string;
  /** 子退款单号，调用方需要保证全局唯一性 */
  SubRefundId: string;
}

/** 子订单详情 */
declare interface CloudSubOrderReturn {
  /** 子订单号 */
  SubOutTradeNo: string;
  /** 米大师计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 子订单商品名称 */
  ProductName: string;
  /** 子订单商品详情 */
  ProductDetail: string;
  /** 子订单平台应收金额，单位：分 */
  PlatformIncome: number;
  /** 子订单结算应收金额，单位：分 */
  SubMchIncome: number;
  /** 子订单支付金额 */
  Amt: number;
  /** 子订单原始金额 */
  OriginalAmt: number;
  /** 核销状态，1表示核销，0表示未核销 */
  SettleCheck: number;
  /** 结算信息 */
  SettleInfo: CloudSettleInfo | null;
  /** 透传字段，由开发者在调用米大师下单接口的时候下发 */
  Metadata: string;
  /** 附加项信息 */
  AttachmentInfoList: CloudAttachmentInfo | null;
  /** 渠道方应答的订单号，透传处理 */
  ChannelExternalSubOrderId: string;
  /** 微信子商户号 */
  WxSubMchId: string;
  /** 米大师侧渠道子订单号 */
  ChannelSubPayOrderId: string | null;
  /** 物品ID */
  ProductId: string | null;
}

/** 子单退款信息 */
declare interface CloudSubRefundItem {
  /** 渠道方应答的退款ID，透传处理 */
  ChannelExternalRefundId: string | null;
  /** 渠道方应答的订单号，透传处理 */
  ChannelExternalOrderId: string | null;
  /** 子单退款金额 */
  RefundAmt: number | null;
  /** 子单订单号 */
  SubOutTradeNo: string | null;
  /** 子单退款id */
  SubRefundId: string | null;
  /** 子应用ID */
  SubAppId: string | null;
  /** 渠道子单支付订单号 */
  ChannelSubOrderId: string | null;
  /** 渠道子退款订单号 */
  ChannelSubRefundId: string | null;
}

/** 公司抬头结果 */
declare interface CompanyTitleResult {
  /** 公司银行账号 */
  CompanyBankAccount: string | null;
  /** 公司地址 */
  CompanyAddress: string | null;
  /** 公司税号 */
  CompanyTaxpayerNum: string | null;
  /** 公司名称 */
  CompanyName: string | null;
  /** 公司银行名称 */
  CompanyBankName: string | null;
  /** 公司电话 */
  CompanyPhone: string | null;
}

/** 合约信息 */
declare interface ContractInfo {
  /** 米大师内部签约商户号 */
  ChannelContractMerchantId: string;
  /** 米大师内部签约子商户号 */
  ChannelContractSubMerchantId: string | null;
  /** 米大师内部签约应用ID */
  ChannelContractAppId: string | null;
  /** 米大师内部签约子应用ID */
  ChannelContractSubAppId: string | null;
  /** 业务合约协议号 */
  OutContractCode: string;
  /** 第三方渠道用户信息 */
  ExternalContractUserInfoList: ExternalContractUserInfo[] | null;
  /** 签约方式，如 wechat_app ，使用app方式下的微信签 */
  ContractMethod: string;
  /** 合约场景id */
  ContractSceneId: string | null;
  /** 用户信息 */
  UserInfo: ContractUserInfo;
  /** 第三方渠道签约数据 */
  ExternalContractData: string;
}

/** 支付中签约子订单列表 */
declare interface ContractOrderInSubOrder {
  /** 子订单结算应收金额，单位： 分 */
  SubMchIncome: number;
  /** 子订单平台应收金额，单位：分 */
  PlatformIncome: number;
  /** 子订单商品详情 */
  ProductDetail: string;
  /** 子订单商品名称 */
  ProductName: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 子订单号 */
  SubOutTradeNo: string;
  /** 子订单支付金额 */
  Amt: number;
  /** 子订单原始金额 */
  OriginalAmt: number;
  /** 发货标识，由业务在调用聚鑫下单接口的 时候下发 */
  Metadata?: string;
}

/** 合同-支付方式列表响应对象 */
declare interface ContractPayListResult {
  /** 支付方式编号 */
  PaymentId: string | null;
  /** 支持的交易类型（多个以小写逗号分开，0现金，1刷卡，2主扫，3被扫，4JSPAY，5预授权） */
  PaymentType: string | null;
  /** 支付标签 */
  PaymentTag: string | null;
  /** 支付方式图片url路径 */
  PaymentIcon: string | null;
  /** 付款方式名称 */
  PaymentName: string | null;
  /** 付款方式名称（内部名称） */
  PaymentInternalName: string | null;
  /** 支付方式 */
  PaymentOptionOne?: string | null;
  /** 支付方式 */
  PaymentOptionTwo?: string | null;
  /** 支付方式 */
  PaymentOptionThree?: string | null;
  /** 支付方式 */
  PaymentOptionFour?: string | null;
  /** 支付方式 */
  PaymentOptionFive?: string | null;
  /** 支付方式 */
  PaymentOptionSix?: string | null;
  /** 支付方式 */
  PaymentOptionSeven?: string | null;
  /** 支付方式 */
  PaymentOptionOther?: string | null;
  /** 支付方式 */
  PaymentOptionNine?: string | null;
  /** 支付方式 */
  PaymentOptionTen?: string | null;
}

/** 签约同步信息 */
declare interface ContractSyncInfo {
  /** 第三方渠道合约信息 */
  ExternalReturnContractInfo: ExternalReturnContractInfo;
  /** 第三方渠道用户信息 */
  ExternalContractUserInfo: ExternalContractUserInfo[];
  /** 签约方式，枚举值，CONTRACT_METHOD_WECHAT_INVALID: 无效CONTRACT_METHOD_WECHAT_APP: 微信APPCONTRACT_METHOD_WECHAT_PUBLIC: 微信公众号CONTRACT_METHOD_WECHAT_MINIPROGRAM: 微信小程序CONTRACT_METHOD_WECHAT_H5: 微信H5 */
  ContractMethod?: string;
  /** 在米大师侧分配的场景id */
  ContractSceneId?: string;
  /** 调用方从第三方渠道查询到的签约数据，由各个渠道定义 */
  ExternalReturnContractData?: string;
}

/** 用户信息 */
declare interface ContractUserInfo {
  /** USER_ID: 用户IDANONYMOUS: 匿名类型用户ID */
  UserType: string;
  /** 用户类型 */
  UserId: string;
}

/** CreateBatchPayment接口BatchInfo对象 */
declare interface CreateBatchPaymentBatchData {
  /** 订单号 */
  OrderId: string | null;
  /** 交易流水号 */
  TradeSerialNo: string | null;
  /** 交易状态。0 处理中 1 预占成功 2 交易成功 3 交易失败 4 未知渠道异常 5 预占额度失败6 提交成功7 提交失败8 订单重复提交99 未知系统异常 */
  Status: number | null;
  /** 状态描述 */
  StatusDesc: string | null;
  /** 代理商ID */
  AgentId: string | null;
  /** 代理商名称 */
  AgentName: string | null;
}

/** CreateBatchPayment接口返回响应 */
declare interface CreateBatchPaymentData {
  /** 批次号 */
  BatchId: string;
  /** 批次列表详情 */
  BatchInfoList: CreateBatchPaymentBatchData[] | null;
}

/** CreateBatchPayment转账明细 */
declare interface CreateBatchPaymentRecipient {
  /** 转账金额 */
  TransferAmount: number;
  /** 订单号 */
  OrderId: string;
  /** 主播ID（与主播业务ID不能同时为空，两者都填取主播ID） */
  AnchorId?: string;
  /** 主播业务ID（与主播业务ID不能同时为空，两者都填取主播ID） */
  Uid?: string;
  /** 主播名称。如果该字段填入，则会对AnchorName和AnchorId/Uid进行校验。 */
  AnchorName?: string;
  /** 业务备注 */
  Remark?: string;
  /** 子单请求预留字段 */
  ReqReserved?: string;
}

/** 创建第三方电子记账本返回值 */
declare interface CreateExternalAccountBookResult {
  /** 处理状态。__SUCCESS__: 成功__FAILED__: 失败__PROCESSING__: 进行中。 */
  DealStatus: string;
  /** 处理返回描述，例如失败原因等 */
  DealMessage: string | null;
  /** 渠道电子记账本ID */
  ChannelAccountBookId: string | null;
  /** 电子记账本对外收款的账户信息。为JSON格式字符串（成功状态下返回）。详情见附录-复杂类型。 */
  CollectMoneyAccountInfo: string | null;
}

/** CreateExternalAnchor接口返回参数 */
declare interface CreateExternalAnchorData {
  /** 主播Id */
  AnchorId: string;
}

/** 账户开立结果 */
declare interface CreateFlexPayeeResult {
  /** 收款用户ID */
  PayeeId: string;
}

/** 发票开具明细 */
declare interface CreateInvoiceItem {
  /** 商品名称 */
  Name: string;
  /** 税收商品编码 */
  TaxCode: string;
  /** 不含税商品总价（商品含税价总额/（1+税率））。InvoicePlatformId 为1时，该金额为含税总金额。单位为分。 */
  TotalPrice: number;
  /** 商品税率 */
  TaxRate: number;
  /** 商品税额（不含税商品总价*税率）。单位为分 */
  TaxAmount: number;
  /** 税收商品类别 */
  TaxType?: string;
  /** 商品规格 */
  Models?: string;
  /** 商品单位 */
  Unit?: string;
  /** 商品数量 */
  Total?: string;
  /** 不含税商品单价。InvoicePlatformId 为1时，该金额为含税单价。 */
  Price?: string;
  /** 含税折扣总额。单位为分 */
  Discount?: number;
  /** 优惠政策标志。0：不使用优惠政策；1：使用优惠政策。 */
  PreferentialPolicyFlag?: string;
  /** 零税率标识：空：非零税率；0：出口零税率；1：免税；2：不征税；3：普通零税率。 */
  ZeroTaxFlag?: string;
  /** 增值税特殊管理。PreferentialPolicyFlag字段为1时，必填。目前仅支持5%(3%，2%，1.5%)简易征税、免税、不征税。 */
  VatSpecialManagement?: string;
}

/** 发票结果 */
declare interface CreateInvoiceResult {
  /** 错误消息 */
  Message: string;
  /** 错误码 */
  Code: number;
  /** 数据 */
  Data: CreateInvoiceResultData | null;
}

/** 蓝票结果数据 */
declare interface CreateInvoiceResultData {
  /** 开票状态 */
  State: number;
  /** 发票ID */
  InvoiceId: string;
  /** 业务开票号 */
  OrderSn: string;
}

/** 发票结果V2 */
declare interface CreateInvoiceResultV2 {
  /** 发票ID */
  InvoiceId: string;
}

/** 创建商户结果 */
declare interface CreateMerchantResult {
  /** 状态码 */
  Code: number;
  /** 响应消息 */
  Message: string;
  /** 创建商户结果数据 */
  Data: CreateMerchantResultData | null;
}

/** 创建商户结果数据 */
declare interface CreateMerchantResultData {
  /** 企业名称 */
  TaxpayerName: string;
  /** 请求流水号 */
  SerialNo: string;
  /** 纳税号 */
  TaxpayerNum: string;
}

/** 聚合支付子商户线上入驻结果 */
declare interface CreateOpenBankExternalAggregatedSubMerchantRegistrationResult {
  /** 进件状态 SUCCESS: 进件成功 FAILED: 进件失败PROCESSING: 进件中 注意：若返回进件中，需要再次调用进件结果查询接口，查询结果。 */
  RegistrationStatus: string;
  /** 进件返回描述 */
  RegistrationMessage: string | null;
  /** 渠道进件序列号 */
  ChannelRegistrationNo: string;
  /** 渠道子商户ID */
  ChannelSubMerchantId: string;
}

/** 子商户进件返回结果 */
declare interface CreateOpenBankExternalSubMerchantRegistrationResult {
  /** 进件状态。__SUCCESS__: 进件成功__FAILED__: 进件失败__PROCESSING__: 进件中注意：若返回进件中，需要再次调用进件结果查询接口，查询结果。 */
  RegistrationStatus: string;
  /** 进件返回描述, 例如失败原因等。 */
  RegistrationMessage: string | null;
  /** 渠道进件序列号。 */
  ChannelRegistrationNo: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 第三方渠道返回信息, 为JSON格式字符串。详情见附录-复杂类型。 */
  ExternalReturnData: string | null;
}

/** 创建渠道商户返回结果 */
declare interface CreateOpenBankMerchantResult {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
}

/** 云企付-支付下单返回响应 */
declare interface CreateOpenBankOrderPaymentResult {
  /** 云企付平台订单号。 */
  ChannelOrderId: string;
  /** 第三方支付平台返回支付订单号。 */
  ThirdPayOrderId: string | null;
  /** 跳转参数渠道为TENPAY，付款方式为EBANK_PAYMENT时必选。 */
  RedirectInfo: OpenBankRedirectInfo | null;
  /** 外部商户订单号，只能是数字、大小写字母，且在同一个接入平台下唯一。 */
  OutOrderId: string;
  /** 渠道扩展支付信息 */
  PayInfo: string | null;
  /** 渠道扩展支付信息类型 */
  PayInfoType: string | null;
}

/** 云企付-充值下单返回响应 */
declare interface CreateOpenBankOrderRechargeResult {
  /** 云企付平台订单号。 */
  ChannelOrderId: string;
  /** 第三方支付平台返回支付订单号。 */
  ThirdPayOrderId: string | null;
  /** 跳转参数 */
  RedirectInfo: OpenBankRechargeRedirectInfo | null;
  /** 外部商户订单号，只能是数字、大小写字母，且在同一个接入平台下唯一。 */
  OutOrderId: string;
  /** 充值状态 */
  DealStatus: string | null;
  /** 充值返回描述 */
  DealMessage: string | null;
  /** PC web端跳转链接 */
  PcWebUrl: string | null;
}

/** 聚合支付子商户费率配置结果 */
declare interface CreateOpenBankSubMerchantRateConfigureResult {
  /** 处理状态 SUCCESS: 开通成功 FAILED: 开通失败PROCESSING: 开通中 注意：若返回开通中，需要再次调用费率配置结果查询接口，查询结果。 */
  DealStatus: string;
  /** 处理描述 */
  DealMessage: string | null;
  /** 渠道产品费率序列号 */
  ChannelProductFeeNo: string;
}

/** 云企付-支付下单返回响应 */
declare interface CreateOpenBankUnifiedOrderPaymentResult {
  /** 云企付平台订单号。 */
  ChannelOrderId: string;
  /** 第三方支付平台返回支付订单号。 */
  ThirdPayOrderId: string | null;
  /** 跳转参数渠道为TENPAY，付款方式为EBANK_PAYMENT时必选。 */
  RedirectInfo: OpenBankOrderRedirectInfo | null;
  /** 外部商户订单号，只能是数字、大小写字母，且在同一个接入平台下唯一。 */
  OutOrderId: string;
  /** 渠道扩展支付信息 */
  PayInfo: string | null;
  /** 渠道扩展支付信息类型 */
  PayInfoType: string | null;
}

/** 云企付-核销确认收货申请响应结果 */
declare interface CreateOpenBankVerificationResult {
  /** 云企付渠道核销订单号 */
  ChannelVerificationId: string;
  /** 第三方支付渠道核销订单号 */
  ThirdVerificationId: string;
  /** 核销状态INIT("INIT","初始化"),SUCCESS("SUCCESS","核销成功"),FAILED("FAILED","核销失败"),PROCESSING("PROCESSING","核销中"); */
  VerificationStatus: string;
  /** 核销金额，单位分 */
  VerificationAmount: number;
  /** 渠道附加返回信息，一般情况可以不关注 */
  ThirdVerificationReturnInfo: string | null;
}

/** 创建红票明细 */
declare interface CreateRedInvoiceItem {
  /** 订单号 */
  OrderId: string;
  /** 发票结果回传地址 */
  CallbackUrl?: string;
  /** 业务开票号 */
  OrderSn?: string;
  /** 红字信息表编码 */
  RedSerialNo?: string;
  /** 门店编号 */
  StoreNo?: string;
}

/** 红票结果 */
declare interface CreateRedInvoiceResult {
  /** 错误消息 */
  Message: string;
  /** 错误码 */
  Code: number;
  /** 红票数据 */
  Data: CreateRedInvoiceResultData[] | null;
}

/** 红票结果数据 */
declare interface CreateRedInvoiceResultData {
  /** 红冲状态码 */
  Code: number;
  /** 红冲状态消息 */
  Message: string;
  /** 发票ID */
  InvoiceId: string;
  /** 业务开票号 */
  OrderSn: string;
}

/** 红票结果V2 */
declare interface CreateRedInvoiceResultV2 {
  /** 红票ID */
  InvoiceId: string;
}

/** CreateSinglePayment接口返回响应 */
declare interface CreateSinglePaymentData {
  /** 平台交易流水号，唯一 */
  TradeSerialNo: string;
  /** 代理商ID */
  AgentId: string | null;
  /** 代理商名称 */
  AgentName: string | null;
}

/** 分账授权申请查询响应对象 */
declare interface DistributeAccreditQueryResult {
  /** 状态（0-未开通，1-已开通，2-商户主动关闭，3-待审核，4-冻结，5-注销，6-待签合同） */
  Status: string | null;
  /** 合同h5地址 */
  ContractUrl?: string | null;
  /** 说明 */
  Remark?: string | null;
}

/** 授权申请响应对象 */
declare interface DistributeAccreditResult {
  /** 合同h5地址 */
  ContractUrl: string | null;
  /** 系统商户号 */
  MerchantNo: string | null;
}

/** 分账撤销响应对象 */
declare interface DistributeCancelResult {
  /** 分账订单状态（0初始1成功2失败3撤销） */
  Status?: string | null;
  /** 平台交易订单号 */
  OrderNo?: string | null;
  /** 商户分账单号 */
  OutDistributeNo?: string | null;
  /** 平台分账单号 */
  DistributeNo?: string | null;
}

/** 分账申请响应对象 */
declare interface DistributeMultiApplyResult {
  /** 分账状态（0分账初始 1分账成功 2分账失败） */
  Status?: string | null;
  /** 平台分账单号 */
  DistributeNo?: string | null;
  /** 入账日期，yyyy-MM-dd格式 */
  InDate?: string | null;
  /** 分账金额 */
  Amount?: string | null;
  /** 商户分账单号 */
  OutDistributeNo?: string | null;
  /** 平台支付单号 */
  OrderNo?: string | null;
}

/** 分账结果响应对象 */
declare interface DistributeQueryResult {
  /** 分账订单列表 */
  Orders?: MultiApplyOrder[] | null;
}

/** 分账接收方响应对象 */
declare interface DistributeReceiverResult {
  /** 商户编号 */
  MerchantNo?: string | null;
}

/** 上传下载响应对象 */
declare interface DownloadFileResult {
  /** 文件内容（base64加密的二进制内容） */
  Content: string | null;
  /** 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域 */
  Storage: string | null;
}

/** 第三方渠道用户信息 */
declare interface ExternalContractUserInfo {
  /** 第三方用户类型，例如: WX_OPENID, WX_SUB_OPENID,WX_PAYER_OPENID */
  ExternalUserType: string;
  /** 第三方用户ID */
  ExternalUserId: string;
}

/** 第三方渠道合约信息 */
declare interface ExternalReturnContractInfo {
  /** 第三方渠道协议id */
  ExternalReturnAgreementId: string | null;
  /** 第三方渠道协议生效时间戳 */
  ExternalReturnContractEffectiveTimestamp: string | null;
  /** 第三方渠道协议解约时间戳 */
  ExternalReturnContractTerminationTimestamp: string | null;
  /** 平台合约状态协议状态，枚举值：CONTRACT_STATUS_SIGNED：已签约CONTRACT_STATUS_TERMINATED：未签约CONTRACT_STATUS_PENDING：签约进行中 */
  ExternalReturnContractStatus: string | null;
  /** 第三方渠道请求序列号 */
  ExternalReturnRequestId: string | null;
  /** 第三方渠道协议签署时间戳 */
  ExternalReturnContractSignedTimestamp: string | null;
  /** 第三方渠道协议到期时间戳 */
  ExternalReturnContractExpiredTimestamp: string | null;
  /** 第三方渠道返回的合约数据 */
  ExternalReturnContractData: string | null;
  /** 第三方渠道解约备注 */
  ExternalReturnContractTerminationRemark?: string | null;
  /** 第三方渠道协议解约方式 */
  ExternalReturnContractTerminationMode?: string | null;
}

/** 分段计费区间信息 */
declare interface FeeRangInfo {
  /** 卡类型，银联产品使用 DEBIT：借记卡 CREDIT：贷记卡 */
  CardType: string;
  /** 区间起始金额，单位（分） */
  RangeStartValue: number;
  /** 区间结束金额，单位（分） */
  RangeEndValue: number;
  /** 分段计费模式 SINGLE：按金额计费 RATIO：按费率计费 */
  RangeFeeMode: string;
  /** 费用值，单位（0.01%或分） */
  FeeValue: number;
  /** 最低收费金额，单位（分） */
  MinFee?: number;
  /** 最高收费金额，单位（分） */
  MaxFee?: number;
}

/** 对账文件信息 */
declare interface FileItem {
  /** STRING(256)，文件名称 */
  FileName: string | null;
  /** STRING(120)，随机密码 */
  RandomPassword: string | null;
  /** STRING(512)，文件路径 */
  FilePath: string | null;
  /** STRING(64)，提取码 */
  DrawCode: string | null;
}

/** 对账单文件下载链接 */
declare interface FlexBillDownloadUrlResult {
  /** 对账单文件下载链接 */
  Url: string;
  /** 下载链接过期时间 */
  ExpireTime: string;
}

/** 灵云V2-银行信息 */
declare interface FlexFundingAccountInfo {
  /** 资金账户号 */
  FundingAccountNo?: string;
  /** 资金账户类型 */
  FundingAccountType?: string;
  /** 资金账户绑定序列号 */
  FundingAccountBindSerialNo?: string;
  /** 资金账户名称 */
  FundingAccountName?: string;
}

/** 冻结余额结果 */
declare interface FreezeFlexBalanceResult {
  /** 冻结订单ID */
  OrderId: string;
}

/** 冻结单结果 */
declare interface FreezeOrderResult {
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 外部订单ID */
  OutOrderId: string;
  /** 订单ID */
  OrderId: string;
  /** 操作类型FREEZE:冻结UNFREEZE:解冻 */
  OperationType: string;
  /** 发起时间 */
  InitiateTime: string;
  /** 完成时间 */
  FinishTime: string | null;
  /** 状态ACCEPTED:已受理ACCOUNTED:已记账SUCCEED:已成功FAILED:已失败 */
  Status: string;
  /** 状态描述 */
  StatusDesc: string;
  /** 冻结备注 */
  Remark: string | null;
  /** 收款用户ID */
  PayeeId: string;
  /** 外部用户ID */
  OutUserId: string;
}

/** 冻结订单列表 */
declare interface FreezeOrders {
  /** 列表 */
  List: FreezeOrderResult[] | null;
  /** 总数 */
  Count: number | null;
}

/** 会员资金交易明细信息 */
declare interface FundsTransactionItem {
  /** 资金交易类型。__1__：提现/退款__2__：清分/充值 */
  TransType: string;
  /** 银行记账说明。 */
  BankBookingMessage: string | null;
  /** 交易状态。__0__：成功 */
  TranStatus: string;
  /** 业务方会员标识。_平安渠道为交易网会员代码_ */
  TransNetMemberCode: string | null;
  /** 子账户账号。_平安渠道为见证子账户的账号_ */
  SubAccountNumber: string;
  /** 子账户名称。_平安渠道为见证子账户的户名_ */
  SubAccountName: string | null;
  /** 交易金额。 */
  TransAmount: string;
  /** 交易手续费。 */
  TransFee: string | null;
  /** 交易日期，格式：yyyyMMdd。 */
  TransDate: string;
  /** 交易时间，格式：HHmmss。 */
  TransTime: string | null;
  /** 银行系统流水号。_平安渠道为见证系统流水号_ */
  BankSequenceNumber: string;
  /** 备注。_平安渠道，如果是见证+收单的交易，返回交易订单号_ */
  Remark: string | null;
}

/** 商户法人代表信息 */
declare interface LegalPersonInfo {
  /** 证件类型 IDCARD：身份证 PASSPORT：护照 SOLDIERSCERTIFICATE：士兵证 OFFICERSCERTIFICATE：军官证 GATXCERTIFICATE：香港居民来往内地通行证 TWNDCERTIFICATE：台湾同胞来往内地通行证 MACAOCERTIFICATE：澳门来往内地通行证 */
  IdType: string;
  /** 证件号码 */
  IdNumber: string;
  /** 姓名 */
  PersonName: string;
  /** 证件有效期类型 LONGTERM：长期有效 OTHER：非长期有效 */
  IdValidityType: string;
  /** 证件生效日期，yyyy-MM-dd */
  IdEffectiveDate: string;
  /** 联系电话 */
  ContactPhone: string;
  /** 证件失效日期，yyyy-MM-dd */
  IdExpireDate?: string;
  /** 联系地址 */
  ContactAddress?: string;
  /** 邮箱地址 */
  EmailAddress?: string;
}

/** 会员间交易明细信息 */
declare interface MemberTransactionItem {
  /** 交易类型。__1__：转出__2__：转入 */
  TransType: string;
  /** 交易状态。__0__：成功 */
  TranStatus: string;
  /** 交易金额。 */
  TransAmount: string;
  /** 交易日期，格式：yyyyMMdd。 */
  TransDate: string;
  /** 交易时间，格式：HHmmss。 */
  TransTime: string | null;
  /** 银行系统流水号。_平安渠道为见证系统流水号_ */
  BankSequenceNumber: string;
  /** 银行记账类型。_平安渠道为：__1：会员支付__2：会员冻结__3：会员解冻__4：登记挂账__6：下单预支付__7：确认并付款__8：会员退款__22：见证+收单平台调账__23：见证+收单资金冻结__24：见证+收单资金解冻__25：会员间交易退款_ */
  BankBookingType: string | null;
  /** 转入方子账户账号。_平安渠道为转入见证子账户的账号_ */
  InSubAccountNumber: string;
  /** 转出方子账户账号。_平安渠道为转出见证子账户的账号_ */
  OutSubAccountNumber: string;
  /** 备注。_平安渠道，如果是见证+收单的交易，返回交易订单号_ */
  Remark: string | null;
}

/** 商户分类 */
declare interface MerchantClassificationId {
  /** 分类编号 */
  Code?: string;
  /** 分类名称 */
  Name?: string;
  /** 父级编号（0为一级编号，大于0为父级分类编号） */
  Parent?: string;
}

/** 商户查询管理端列表 */
declare interface MerchantManagementList {
  /** 企业名称。 */
  TaxpayerName: string;
  /** 纳税人识别号(税号)	。 */
  TaxpayerNum: string;
  /** 请求流水号。 */
  SerialNo: string;
  /** 开票系统ID */
  InvoicePlatformId: number;
}

/** 商户管理端结果 */
declare interface MerchantManagementResult {
  /** 总数。 */
  Total: number;
  /** 商户列表。 */
  List: MerchantManagementList[];
}

/** 商户支付方式数据 */
declare interface MerchantPayWayData {
  /** 支付币种 */
  PayCurrency: string | null;
  /** 支付图标 */
  PayIcon: string | null;
  /** 支付名称 */
  PayInternalName: string | null;
  /** 支付简称 */
  PayName: string | null;
  /** 是否支持退款 */
  PaySplitRefund: string | null;
  /** 支付标签 */
  PayTag: string | null;
  /** 支付凭证图标 */
  PayTicketIcon: string | null;
  /** 支付类型，逗号分隔 */
  PayType: string | null;
  /** 凭证名称 */
  TicketName: string | null;
}

/** 商户风险信息 */
declare interface MerchantRiskInfo {
  /** 恶意注册等级，0-9级，9级最高 */
  RiskLevel: number | null;
  /** 恶意注册代码，代码以|分割，如"G001|T002" */
  RiskTypes: string | null;
}

/** 分账明细 */
declare interface MultiApplyDetail {
  /** 商户编号 */
  MerchantNo: string;
  /** 分账金额 */
  Amount: string;
  /** 备注 */
  Remark?: string;
}

/** 分账订单信息 */
declare interface MultiApplyOrder {
  /** 商户分账单号 */
  OutDistributeNo: string | null;
  /** 平台分账单号 */
  DistributeNo: string | null;
  /** 平台交易订单号 */
  OrderNo: string | null;
  /** 分账订单状态（0初始1成功2失败3撤销） */
  Status: string | null;
  /** 入账日期，格式yyyy-MM-dd */
  InDate: string | null;
  /** 备注 */
  Remark: string | null;
  /** 分账明细 */
  Details: MultiApplyDetail[] | null;
}

/** 自然人信息 */
declare interface NaturalPersonInfo {
  /** 自然人类型 2：商户负责人 3：授权经办人4：业务联系人 5：实际控制人 6：控股股东 7：受益人 8：结算人注意：HELIPAY渠道必传业务联系人 */
  PersonType: string;
  /** 证件类型 IDCARD：身份证 PASSPORT：护照 SOLDIERSCERTIFICATE：士兵证 OFFICERSCERTIFICATE：军官证 GATXCERTIFICATE：香港居民来往内地通行证 TWNDCERTIFICATE：台湾同胞来往内地通行证 MACAOCERTIFICATE：澳门来往内地通行证 */
  IdType: string;
  /** 证件号码 */
  IdNumber: string;
  /** 姓名 */
  PersonName: string;
  /** 证件有效期类型 LONGTERM：长期有效 OTHER：非长期有效 */
  IdValidityType: string;
  /** 证件生效日期，yyyy-MM-dd */
  IdEffectiveDate: string;
  /** 证件失效日期，yyyy-MM-dd */
  IdExpireDate: string;
  /** 联系电话，HELIPAY渠道业务联系人必传 */
  ContactPhone?: string;
  /** 联系地址 */
  ContactAddress?: string;
  /** 邮箱地址 */
  EmailAddress?: string;
}

/** 附加项信息 */
declare interface OldAttachmentInfo {
  /** 附加项金额 */
  AttachmentAmount: number | null;
  /** 附加项类型 */
  AttachmentType: string | null;
  /** 附加项名称 */
  AttachmentName: string | null;
  /** 附加项编号 */
  AttachmentCode: string | null;
}

/** 渠道方用户信息 */
declare interface OldChannelExternalUserInfo {
  /** 渠道方用户类型 */
  ChannelExternalUserType: string | null;
  /** 渠道方用户ID */
  ChannelExternalUserId: string | null;
}

/** 子单退款信息 */
declare interface OldSubRefund {
  /** 支付机构退款流水号 */
  ChannelExternalRefundId: string | null;
  /** 支付机构支付订单号 */
  ChannelExternalOrderId: string | null;
  /** 渠道退款订单号 */
  ChannelRefundId: string | null;
  /** 子订单号 */
  SubOutTradeNo: string | null;
  /** 子单退款金额 */
  RefundAmt: string | null;
}

/** 银行复核指引。银行侧返回网银授权指引链接，一般PC网银，手机网银链接 */
declare interface OpenBankApprovalGuideInfo {
  /** PC网银指引 */
  PcGuideUrl: string;
  /** 手机网银指引 */
  MobileGuideUrl: string | null;
}

/** 云企付-账单信息 */
declare interface OpenBankBillingInfo {
  /** 账单人名字 */
  FirstName?: string;
  /** 账单人姓氏 */
  LastName?: string;
  /** 账单地址1 */
  AddressOne?: string;
  /** 账单地址1 */
  AddressTwo?: string;
  /** 账单地址所在城市 */
  City?: string;
  /** 账单地址所在州/省，当国家是美国或加拿大时，使用ISO-3166-2:US或ISO -3166-2:CA 中该国家地区编 码标准中的两位字母编码。 */
  State?: string;
  /** 账单地址所在国家，使用ISO-3166-1标准中的两位字母编码。 */
  Country?: string;
  /** 账单地址邮编 */
  ZipCode?: string;
  /** 账单人手机号 */
  Phone?: string;
}

/** 网银页面提交html */
declare interface OpenBankFormInfo {
  /** 网银页面提交html */
  FormHtml: string | null;
  /** 网银提交页面字符集 */
  FormEncoding: string | null;
}

/** 云企付-商品信息 */
declare interface OpenBankGoodsInfo {
  /** 商品标题。默认值“商品支付”。 */
  GoodsName?: string;
  /** 商品详细描述（商品列表）。 */
  GoodsDetail?: string;
  /** 银行附言。不可以有以下字符：<>+{}()%*&';"[]等特殊符号 */
  GoodsDescription?: string;
  /** 业务类型。汇付渠道必填，汇付渠道传入固定值100099。 */
  GoodsBizType?: string;
  /** 商品编号。 */
  Sku?: string;
  /** 商品单价。 */
  Price?: string;
  /** 商品数量 */
  Quantity?: string;
  /** 商品图片url */
  ProductImage?: string;
  /** 商品链接url */
  ProductUrl?: string;
}

/** 云企付-下单跳转参数，用于小程序前端跳转 */
declare interface OpenBankOrderRedirectInfo {
  /** 生成二维码，引导用户扫码 */
  QRCodeUrl: string | null;
  /** 二维码凭证 */
  QRCodeKey: string | null;
  /** 跳转 URL,用于客户端跳转，订单未支付时返回该参数 */
  Url: string | null;
  /** 跳转凭证过期时间,yyyy-MM-dd HH:mm:ss */
  ExpireTime: string | null;
  /** 小程序 appid */
  MpAppId: string | null;
  /** 小程序路径 */
  MpPath: string | null;
  /** 小程序原始 id */
  MpUserName: string | null;
  /** 网银支付提交页面信息 */
  FormInfo: OpenBankFormInfo | null;
}

/** 云企付-支付限制 */
declare interface OpenBankPayLimitInfo {
  /** 限制类型 */
  PayLimitType: string;
  /** 限制类型值 */
  PayLimitValue: string;
}

/** 云企付-收款人信息 */
declare interface OpenBankPayeeInfo {
  /** 收款方唯一标识。当渠道为TENPAY，付款方式为EBANK_PAYMENT，必填，上送收款方入驻云企付商户ID；付款方式为OPENBANK_PAYMENT时，非必填，输入外部收款方的标识ID渠道为WECHAT，付款方式为TRANS_TO_CHANGE时，上送微信OPEN_ID； */
  PayeeId?: string;
  /** 支行名称。 */
  BankBranchName?: string;
  /** 银行账号。渠道为TENPAY，付款方式为OPENBANK_PAYMENT时必选 */
  BankAccountNumber?: string;
  /** 收款方名称。当渠道为TENPAY，付款方式为EBANK_PAYMENT时，上送收款方入驻云企付的商户名称；渠道为TENPAY，付款方式为OPENBANK_PAYMENT时必选，上送收款方账户名称；渠道为ALIPAY，付款方式为SAFT_ISV时，收款账户标识类型为ALIPAY_LOGON_ID时必传，上送收款方真实姓名。渠道为WECHAT，付款方式为TRANS_TO_CHANGE时，上送收款人姓名。 */
  PayeeName?: string;
  /** 联行号。渠道为TENPAY，付款方式为OPENBANK_PAYMENT时必选 */
  BankBranchId?: string;
  /** 收款方绑卡序列号。当渠道为TENPAY，付款方式为EBANK_PAYMENT时，必填，上送收款方入驻云企付平台时，下发的绑卡序列号；当渠道为ALIPAY，付款方式为SAFT_ISV时，必填，根据收款账户标识类型上送。 */
  BindSerialNo?: string;
  /** 收款账户标识类型BANK_ACCOUNT：绑定银行账户ACCOUNT_BOOK_ID：电子记账本IDALIPAY_USER_ID：支付宝的会员IDALIPAY_LOGON_ID：支付宝登录号。付款方式为SAFT_ISV时，必填。 */
  AccountType?: string;
}

/** 云企付-付款人信息 */
declare interface OpenBankPayerInfo {
  /** 付款方唯一标识。当TENPAY时，必填上送付款方入驻云企付商户ID。 */
  PayerId?: string;
  /** 付款方名称。当TENPAY上送付款方入驻云企付的商户名称。 */
  PayerName?: string;
  /** 付款方付款账户标识。当付款方式为OPENBANK_PAYMENT时，必输表示企业账户ID；当付款方式为SAFT_ISV时，必须上送付款方的渠道电子记账本ID；当付款方式为ONLINEBANK，上送付款方银行编号BankId。 */
  BindSerialNo?: string;
  /** 付款账户标识类型BANK_ACCOUNT：绑定银行账户ACCOUNT_BOOK_ID：电子记账本ID。当付款方式为SAFT_ISV时，必须上送类型为ACCOUNT_BOOK_ID。 */
  AccountType?: string;
  /** 付款卡类型。汇付渠道必填。DEBIT_CARD：借记卡CREDIT_CARD：信用卡 */
  BankCardType?: string;
}

/** 云企付-分润信息 */
declare interface OpenBankProfitShareInfo {
  /** 分润接收方，渠道商户号ID */
  RecvId?: string;
  /** 分润金额，单位分 */
  ProfitShareFee?: number;
}

/** 分账收款人信息 */
declare interface OpenBankProfitSharePayeeInfo {
  /** 收款人账户名称 */
  AccountName: string;
  /** 银行名称可大体识别银行就行 */
  BankName: string;
  /** 账户货币 */
  Currency: string;
  /** 账户类型。00:借记卡01:存折 02:信用卡 03:准贷记卡 04:预付卡费 05:境外卡 */
  Nature: string;
  /** 账户地区/受益人所在国家。参考附录“国家代码”表——“代码”字段 */
  Country: string;
  /** 账户开户所在国家参考附录“国家代码”表——“代码”字段 */
  DepositCountry: string;
  /** 合作有效期yyyy-MM-dd */
  ExpireDate: string;
  /** 0:个人(对私) 1:公司(对公) */
  Flag: string;
  /** 开户行地址账户地区非中国必填，【账户名+开户行地址不可超过114个字符（只允许【英文字母数字空格.,/-()'】），否则可能导致境外银行付款失败】 */
  BankAddress?: string;
  /** 客户地址非中国内地账户的客户地址不能为空 */
  Address?: string;
  /** 账户属性账户开户所在国家为中国则必填。1-离岸账户 0-在岸账户 */
  IsOSA?: string;
  /** 账户省份参考附录“地区代码” */
  Province?: string;
  /** 账户城市参考附录“地区代码 */
  City?: string;
  /** 证件号/统一信用证代码如果country与depositcountry字段都是CHN时，必填对公账户填统一信用证代码，对私账户填身份证号码离岸账户非必填 */
  LegalIdNo?: string;
  /** 手机号。账户地区是日本则必填 */
  Telephone?: string;
  /** 参考接口说明。 */
  BicCode?: string;
  /** 参考接口说明。 */
  SwiftCode?: string;
  /** 大额支付行号/支付行号参考接口说明。境外（大额支付行号）参考附录【大额行号】，境内（支付行号）参考附录【支付行号】 */
  Cnaps?: string;
  /** 中转行号，参考接口说明。 */
  TransferBankNo?: string;
  /** 关联附件。上传的文件ID */
  Fid?: string;
}

/** 分账信息结果 */
declare interface OpenBankProfitShareRespInfo {
  /** 接收方企业ID */
  RecvId: string;
  /** 分润金额（分） */
  ProfitShareFee: number;
  /** 实际分账金额 */
  RealProfitShareFee: number;
  /** 分账状态 */
  ProfitShareStatus: string;
  /** 分账完成时间 */
  ProfitFinishTime: string;
  /** 分账类型 */
  ProfitShareType: number;
}

/** 云企付-退款查询结果 */
declare interface OpenBankQueryRefundOrderResult {
  /** 外部商户退款单号 */
  OutRefundId?: string | null;
  /** 渠道退款单号 */
  ChannelRefundId?: string | null;
  /** 退款原因 */
  RefundReason?: string | null;
  /** 退款金额，单位分 */
  RefundAmount?: number | null;
  /** 实际退款金额，单位分 */
  RealRefundAmount?: number | null;
  /** 原支付订单总金额，单位分 */
  TotalAmount?: number | null;
  /** 退款完成时间 */
  TimeFinish?: string | null;
  /** 退款订单状态 */
  RefundStatus?: string | null;
  /** 退款明细信息 */
  RefundInfo?: string | null;
  /** 退款手续费金额 */
  FeeAmount: number | null;
  /** 退款返回描述，比如失败原因等。 */
  RefundMessage: string | null;
  /** 分账信息 */
  ProfitShareRespInfoList: OpenBankProfitShareRespInfo[] | null;
}

/** 云企付-充值单收款人信息 */
declare interface OpenBankRechargePayeeInfo {
  /** 收款方标识收款方类型为电子记账本时，上送渠道电子记账本ID */
  PayeeId: string;
  /** 收款方标识类型ACCOUNT_BOOK_ID：电子记账本ID */
  PayeeIdType: string;
  /** 收款方名称 */
  PayeeName?: string;
}

/** 云企付-充值跳转参数 */
declare interface OpenBankRechargeRedirectInfo {
  /** 跳转URL */
  Url: string | null;
}

/** 云企付-跳转参数，用于小程序前端跳转 */
declare interface OpenBankRedirectInfo {
  /** 生成二维码，引导用户扫码 */
  QRCodeUrl: string;
  /** 二维码凭证 */
  QRCodeKey: string;
  /** 跳转 URL,用于客户端跳转，订单未支付时返回该参数 */
  Url: string | null;
  /** 跳转凭证过期时间,yyyy-MM-dd HH:mm:ss */
  ExpireTime: string;
  /** 小程序 appid */
  MpAppId: string;
  /** 小程序路径 */
  MpPath: string;
  /** 小程序原始 id */
  MpUserName: string;
  /** 网银支付提交页面信息 */
  FormInfo: OpenBankFormInfo | null;
}

/** 云企付-退款申请结果 */
declare interface OpenBankRefundOrderApplyResult {
  /** 云企付订单号 */
  ChannelOrderId?: string | null;
  /** 云企付退款流水号 */
  ChannelRefundId?: string | null;
  /** 外部商户退款单号 */
  OutRefundId?: string | null;
  /** 外部商户订单号 */
  OutOrderId?: string | null;
  /** 退款返回描述，比如失败原因等。 */
  RefundMessage?: string | null;
  /** 退款金额 */
  RefundAmount?: number | null;
  /** 退款手续费金额 */
  FeeAmount: number | null;
  /** 退款状态 */
  RefundStatus: string | null;
}

/** 云企付-设备信息 */
declare interface OpenBankSceneInfo {
  /** 用户端实际 ip。汇付渠道必填。 */
  PayerClientIp?: string;
  /** 浏览器 User-Agent。 */
  PayerUa?: string;
  /** 用户下单时间。若不上送，服务端默认当前时间。 */
  OrderTime?: string;
  /** 终端设备号（门店号或收银设备 ID），示例值：POS1:1。 */
  DeviceId?: string;
  /** 终端设备类型。MOBILE_BROWSER:手机浏览器，MOBILE_APP:手机应用程序，TABLET:平板；WATCH:手表，PC:电脑PC，OTHER:其他。汇付渠道必填。 */
  DeviceType?: string;
}

/** 云企付-结算规则信息 */
declare interface OpenBankSettlementRulesInfo {
  /** ONCE：仅单次解冻（默认）MULTI：多次解冻 */
  UnfreezeRule?: string | null;
  /** ONCE：仅单次退款（默认）MULTI：多次退款 */
  RefundRule?: string | null;
}

/** 云企付-邮寄信息 */
declare interface OpenBankShippingInfo {
  /** 收货人名字 */
  FirstName?: string;
  /** 收货人姓氏 */
  LastName?: string;
  /** 收货地址1 */
  AddressOne?: string;
  /** 收货地址2 */
  AddressTwo?: string;
  /** 收货地址所在城市 */
  City?: string;
  /** 收货地址所在州，当国家是美国或加拿大时，使用ISO-3166-2:US或ISO -3166-2:CA 中该国家地区编码标准中的两位字母编码 */
  State?: string;
  /** 使用ISO-3166-1标准中的两位字母编码 */
  Country?: string;
  /** 收货地址邮编 */
  ZipCode?: string;
  /** 收货联系电话 */
  Phone?: string;
}

/** 云企付-门店信息 */
declare interface OpenBankStoreInfo {
  /** 门店名称 */
  Name: string;
  /** 地区编码 */
  AreaCode: string;
  /** 详细地址 */
  Address: string;
  /** 门店编号 */
  Id?: string;
}

/** 线下查票-订单信息 */
declare interface Order {
  /** 含税金额 */
  AmountHasTax: number | null;
  /** 优惠金额 */
  Discount: number | null;
  /** 销方名称 */
  SellerName: string | null;
  /** 发票类型 */
  InvoiceType: number | null;
  /** 默认“” */
  Name: string | null;
  /** 支付金额 */
  Amount: number | null;
  /** 下单日期 */
  OrderDate: string | null;
  /** 订单号 */
  OrderId: string | null;
  /** 门店号 */
  StoreNo: string | null;
  /** 明细 */
  Items: OrderItem[] | null;
}

/** 线下查票-订单明细 */
declare interface OrderItem {
  /** 明细金额 */
  AmountHasTax: number | null;
  /** 优惠金额 */
  Discount: number | null;
  /** 商品名称 */
  Name: string | null;
  /** 型号 */
  Models: string | null;
  /** 数量 */
  Total: number | null;
  /** 数量单位 */
  Unit: string | null;
  /** 默认“0” */
  Status: string | null;
  /** 单价 */
  Price: number | null;
  /** 商品编码 */
  TaxCode: string | null;
}

/** 订单汇总列表 */
declare interface OrderSummaries {
  /** 汇总列表 */
  List: OrderSummaryResult[];
  /** 总数 */
  Count: number;
}

/** 订单汇总结果 */
declare interface OrderSummaryResult {
  /** 汇总ID */
  SummaryId: string;
  /** 收款账户ID */
  PayeeId: string;
  /** 收款账户名称 */
  Name: string;
  /** 收入类型 */
  IncomeType: string;
  /** 汇总金额 */
  SummaryAmount: string;
  /** 汇总日期 */
  SummaryTime: string;
  /** 汇总记录数量 */
  SummaryCount: number;
  /** 外部用户ID */
  OutUserId: string;
}

/** 公司信息 */
declare interface OrganizationInfo {
  /** 公司名称，个体工商户必输 */
  OrganizationName?: string;
  /** 公司证件类型，个体工商户必输，证件类型仅支持73 */
  OrganizationType?: string;
  /** 公司证件号码，个体工商户必输 */
  OrganizationCode?: string;
  /** 法人名称，如果SubMchName不是法人，需要另外送入法人信息（企业必输）<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  LegalPersonName?: string;
  /** 法人证件类型，如果SubMchName不是法人，需要另外送入法人信息（企业必输） */
  LegalPersonIdType?: string;
  /** 法人证件号码，如果SubMchName不是法人，需要另外送入法人信息（企业必输）<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  LegalPersonIdCode?: string;
}

/** 外部子商户扩展信息 */
declare interface OutSubMerchantExtensionInfo {
  /** 地区代码，国标码HELIPAY渠道必传 */
  RegionCode?: string;
  /** 注册地址 */
  RegisterAddress?: string;
  /** 通讯地址HELIPAY渠道必传 */
  MailingAddress?: string;
  /** 营业地址/经营地址 */
  BusinessAddress?: string;
  /** 客服电话 */
  ServicePhone?: string;
  /** 网站url */
  WebSiteUrl?: string;
  /** 邮箱地址 */
  EmailAddress?: string;
}

/** 分页参数 */
declare interface Paging {
  /** 页码 */
  Index: number;
  /** 页长 */
  Count: number;
}

/** pay支付方式json数据 */
declare interface PayDataResult {
  /** 支付标签（唯一性） */
  PaymentTag: string;
  /** 添加合同时需要隐藏的选项（多个以小写逗号分开） */
  PaymentOptionHide?: string;
  /** 支付方式图片url路径 */
  PaymentIcon: string;
  /** 合同选项名称6 */
  PaymentOptionSix?: string;
  /** 付款方式名称 */
  PaymentName: string;
  /** 合同选项名称7 */
  PaymentOptionSeven?: string;
  /** 合同选项名称8 */
  PaymentOptionOther?: string;
  /** 合同选项名称2 */
  PaymentOptionTwo?: string;
  /** 合同选项名称1 */
  PaymentOptionOne?: string;
  /** 是否开启智能扣率（1是，0否） */
  PaymentDiscountFee: string;
  /** 支持的交易类型（多个以小写逗号分开，0现金，1刷卡，2主扫，3被扫，4JSPAY，5预授权） */
  PaymentType: string;
  /** 合同选项名称5 */
  PaymentOptionFive?: string;
  /** 合同选项名称9 */
  PaymentOptionNine?: string;
  /** 支付方式编号 */
  PaymentId: string;
  /** 合同选项名称3 */
  PaymentOptionThree?: string;
  /** 付款方式名称（内部名称） */
  PaymentInternalName: string;
  /** 合同选项名称4 */
  PaymentOptionFour?: string;
  /** 合同选项名称10 */
  PaymentOptionTen?: string;
}

/** pay_fee支付方式行业分类费率json数据 */
declare interface PayFeeDataResult {
  /** 机构的分佣扣率扣率 */
  OrganizationFee: string;
  /** 商户手续费封顶值，0为不限封顶 */
  PaymentClassificationLimit: string;
  /** 机构的分佣扣率类型(1按签约扣率，2按收单收益) */
  OrganizationFeeType: string;
  /** 商户扣率最大值 */
  PaymentClassificationMaxFee: string;
  /** 商户扣率最小值 */
  PaymentClassificationMinFee: string;
  /** 行业会类编号 */
  PaymentClassificationId: string;
  /** 行业分类名称 */
  PaymentClassificationName: string;
}

/** 订单支付响应对象 */
declare interface PayOrderResult {
  /** 付款订单号 */
  OrderNo: string | null;
  /** 开发者流水号 */
  DeveloperNo: string | null;
  /** 交易优惠金额（免充值券） */
  TradeDiscountAmount: string | null;
  /** 付款方式名称 */
  PayName: string | null;
  /** 商户流水号（从1开始自增长不重复） */
  OrderMerchantId: string | null;
  /** 交易帐号（银行卡号、支付宝帐号、微信帐号等，某些收单机构没有此数据） */
  TradeAccount: string | null;
  /** 实际交易金额（以分为单位，没有小数点） */
  TradeAmount: string | null;
  /** 币种签名 */
  CurrencySign: string | null;
  /** 付款完成时间（以收单机构为准） */
  TradePayTime: string | null;
  /** 门店流水号（从1开始自增长不重复） */
  ShopOrderId: string | null;
  /** 支付标签 */
  PayTag: string | null;
  /** 订单状态（1交易成功，2待支付，4已取消，9等待用户输入密码确认 */
  Status: string | null;
  /** 币种代码 */
  OrderCurrency: string | null;
  /** 二维码字符串 */
  TradeQrcode: string | null;
  /** 微信返回调起小程序/原生JS支付的appid参数 */
  WechatAppId: string | null;
  /** 微信返回调起小程序/原生JS支付的timeStamp参数 */
  WechatTimeStamp: string | null;
  /** 微信返回调起小程序/原生JS支付的nonceStr参数 */
  WechatNonceStr: string | null;
  /** 微信返回调起小程序/原生JS支付的signType参数 */
  WechatSignType: string | null;
  /** 微信返回调起小程序/原生JS支付的package参数 */
  WechatPackage: string | null;
  /** 微信返回调起小程序/原生JS支付的paySign参数 */
  WechatPaySign: string | null;
}

/** 微工卡核身结果 */
declare interface PayRollAuthResult {
  /** 结果为核身失败时的原因描述，仅在失败记录返回，空字符串等同null */
  AuthFailedReason: string | null;
  /** 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一 */
  AuthNumber: string;
  /** 核身渠道，发起核身时的来源渠道，如通过小程序，硬件设备等FROM_MINI_APP：来自小程序方式核身FROM_HARDWARE：来自硬件设备方式核身 */
  AuthScene: string;
  /** 核身渠道标识，用于定位渠道具体来源，如果是扫码打卡渠道标识就是具体的小程序appid，若是硬件设备，则是设备的序列号等 */
  AuthSource: string;
  /** 核身状态AUTHENTICATE_PROCESSING：核身中AUTHENTICATE_SUCCESS：核身成功AUTHENTICATE_FAILED：核身失败 */
  AuthStatus: string;
  /** 核身时间，遵循[rfc3339](https://datatracker.ietf.org/doc/html/rfc3339)标准格式，格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE */
  AuthTime: string;
  /** 该用户所属的单位名称 */
  CompanyName: string;
  /** 微信服务商商户的商户号，由微信支付生成并下发 */
  MerchantId: string;
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 该项目的名称 */
  ProjectName: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
}

/** 账户余额信息 */
declare interface PayeeAccountBalanceResult {
  /** 账户ID */
  AccountId: string | null;
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: number | null;
  /** 总余额 */
  Balance: string | null;
  /** 系统冻结余额 */
  SystemFreezeBalance: string | null;
  /** 人工冻结余额 */
  ManualFreezeBalance: string | null;
  /** 可提现余额 */
  PayableBalance: string | null;
  /** 已提现余额 */
  PaidBalance: string | null;
  /** 提现中余额 */
  InPayBalance: string | null;
  /** 累计结算金额 */
  SumSettlementAmount: string | null;
}

/** 账户信息结果 */
declare interface PayeeAccountInfoResult {
  /** 账户ID */
  AccountId: string | null;
  /** 账户名称 */
  AccountName: string | null;
  /** 备注 */
  Remark: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 用户信息 */
  UserInfo: PayeeAccountUserInfo | null;
  /** 属性信息 */
  PropertyInfo: PayeeAccountPropertyInfo | null;
}

/** 账户信息列表 */
declare interface PayeeAccountInfos {
  /** 列表 */
  List: PayeeAccountInfoResult[] | null;
  /** 总数 */
  Count: number | null;
}

/** 账户属性信息 */
declare interface PayeeAccountPropertyInfo {
  /** 结算权益状态ENABLE:启用DISABLE:停用 */
  SettleRightStatus?: string | null;
  /** 付款权益状态ENABLE:启用DISABLE:停用 */
  PaymentRightStatus?: string | null;
}

/** 账户用户信息 */
declare interface PayeeAccountUserInfo {
  /** 外部用户ID */
  OutUserId: string | null;
  /** 用户类型0:B端用户1:C端用户 */
  UserType: number | null;
  /** 证件类型0:身份证1:社会信用代码 */
  IdType: number | null;
  /** 证件号 */
  IdNo: string | null;
  /** 姓名 */
  Name: string | null;
}

/** 收款用户资金账户信息 */
declare interface PayeeFundingAccountResult {
  /** 资金账户ID */
  FundingAccountBindSerialNo: string;
}

/** 收款用户信息结果 */
declare interface PayeeInfoResult {
  /** 收款用户ID */
  PayeeId: string;
  /** 用户外部业务ID */
  OutUserId: string;
  /** 姓名 */
  Name: string;
  /** 证件类型0:身份证1:社会信用代码 */
  IdType: number;
  /** 证件号 */
  IdNo: string;
  /** 服务商ID */
  ServiceProviderId: string | null;
  /** 备注 */
  Remark: string | null;
}

/** 计税信息 */
declare interface PayeeTaxInfo {
  /** 计税模板列表 */
  TaxTemplateInfoList: PayeeTaxTemplateInfo[];
  /** 纳税人识别号 */
  TaxpayerIdNo: string;
  /** 纳税主体类型NATURAL:自然人NON_NATURAL:非自然人 */
  TaxEntityType: string;
  /** 财税服务商ID */
  TaxServiceProviderId: string;
}

/** 收款用户计税模板信息 */
declare interface PayeeTaxTemplateInfo {
  /** 收入类型LABOR: 劳务所得OCCASION: 偶然所得 */
  IncomeType: string;
  /** 计税模板ID */
  TaxTemplateId: string;
}

/** 付款订单结果 */
declare interface PaymentOrderResult {
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 税后金额 */
  AmountAfterTax: string;
  /** 税金 */
  Tax: string;
  /** 外部订单ID */
  OutOrderId: string;
  /** 订单ID */
  OrderId: string;
  /** 发起时间 */
  InitiateTime: string;
  /** 完成时间 */
  FinishTime: string | null;
  /** 状态ACCEPTED:已受理ACCOUNTED:已记账PAYING:付款中PAYED:完成付款渠道调用SUCCEED:已成功FAILED:已失败 */
  Status: string;
  /** 状态描述 */
  StatusDesc: string;
  /** 提现备注 */
  Remark: string | null;
  /** 收款用户ID */
  PayeeId: string;
  /** 外部用户ID */
  OutUserId: string;
  /** 渠道支付订单号 */
  ChannelOrderId: string | null;
  /** 增值税 */
  Vat: string | null;
  /** 个人所得税 */
  IndividualIncomeTax: string | null;
  /** 附加税总税额 */
  AdditionalTaxSum: string | null;
  /** 附加税税项。格式为JSON格式 */
  AdditionalTaxItem: string | null;
  /** 失败原因。当Status为FAILED时，改字段为失败的原因。 */
  FailReason: string | null;
  /** 资金账户字类型: WECHATPAY_ACCOUNT 微信零钱, BANK_ACCOUNT 银行卡 */
  FundingAccountSubType?: string | null;
}

/** 付款订单状态结果 */
declare interface PaymentOrderStatusResult {
  /** 状态ACCEPTED:已受理ACCOUNTED:已记账PAYING:付款中PAYED:完成付款渠道调用SUCCEED:已成功FAILED:已失败 */
  Status: string;
  /** 状态描述 */
  StatusDesc: string;
  /** 失败原因。当Status为FAILED时，改字段为失败的原因。 */
  FailReason: string | null;
}

/** 付款订单列表 */
declare interface PaymentOrders {
  /** 列表 */
  List: PaymentOrderResult[];
  /** 总数 */
  Count: number;
}

/** 平台账户余额信息 */
declare interface PlatformAccountBalanceResult {
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string | null;
  /** 总余额 */
  Balance: string | null;
  /** 系统冻结余额 */
  SystemFreezeBalance: string | null;
  /** 人工冻结余额 */
  ManualFreezeBalance: string | null;
  /** 可提现余额 */
  PayableBalance: string | null;
  /** 提现中余额 */
  InPayBalance: string | null;
}

/** 查询账户列表接口 */
declare interface QueryAcctItem {
  /** 子商户类型：个人: personal企业：enterprise缺省： enterprise */
  SubMchType: string;
  /** 子商户名称 */
  SubMchName: string;
  /** 子账号 */
  SubAcctNo: string;
  /** 不填则默认子商户名称 */
  ShortName: string;
  /** 业务平台的子商户Id，唯一 */
  SubMchId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 子商户联系人<敏感信息> */
  Contact: string;
  /** 子商户地址 */
  Address: string;
  /** 联系人手机号<敏感信息> */
  Mobile: string;
  /** 邮箱 <敏感信息> */
  Email: string;
  /** 子商户会员类型：general:普通子账户merchant:商户子账户缺省： general */
  SubMerchantMemberType: string | null;
}

/** QueryBatchPaymentResult接口返回响应 */
declare interface QueryBatchPaymentResultData {
  /** 批次号 */
  BatchId: string | null;
  /** 批次总额 */
  TotalAmount: number | null;
  /** 批次总量 */
  TotalCount: number | null;
  /** 批次预留字段 */
  ReqReserved: string | null;
  /** 批次备注 */
  Remark: string | null;
  /** 渠道类型 */
  TransferType: number | null;
  /** 转账明细 */
  TransferInfoList: QueryBatchPaymentResultDataInfo[] | null;
}

/** QueryBatchPaymentResultData复杂类型中的TransferInfoList */
declare interface QueryBatchPaymentResultDataInfo {
  /** 订单号 */
  OrderId: string | null;
  /** 代理商ID */
  AgentId: string | null;
  /** 代理商名称 */
  AgentName: string | null;
  /** 交易状态。0 处理中 1 预占成功 2 交易成功 3 交易失败 4 未知渠道异常 5 预占额度失败6 提交成功7 提交失败8 订单重复提交99 未知系统异常 */
  Status: number | null;
  /** 状态描述 */
  StatusDesc: string | null;
  /** 转账金额 */
  TransferAmount: number | null;
}

/** 智能代发-单笔代发转账对账单返回数据 */
declare interface QueryBillDownloadURLData {
  /** 统一对账单下载链接 */
  BillDownloadURL: string | null;
  /** 渠道原始对账单下载链接 */
  OriginalBillDownloadURL: string | null;
}

/** 支付方式费率及自定义表单项 */
declare interface QueryContractPayFeeResult {
  /** pay支付方式json数据 */
  Pay: PayDataResult | null;
  /** 合同扩展自定义字段 */
  ExtraInput?: string[];
  /** pay_fee支付方式行业分类费率json数据 */
  PayFee: PayFeeDataResult[] | null;
}

/** 合同可关联门店响应对象 */
declare interface QueryContractRelateShopResult {
  /** 省份 */
  Province: string | null;
  /** 城市编码 */
  CityId: string | null;
  /** 门店简称 */
  ShopName: string | null;
  /** 终端数量 */
  TerminalCount: string | null;
  /** 城市 */
  City: string | null;
  /** 门店状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过） */
  ShopStatus: string | null;
  /** 若是支付宝合同，支付宝上线状态 */
  AliPayOnline?: string | null;
  /** 门店编号 */
  ShopNo: string | null;
  /** 县/区 */
  Country: string | null;
  /** 若是支付宝合同，支付宝审核状态 */
  AliPayStatus?: string | null;
  /** 为空或者0表示未关联，大于0表示已关联 */
  IsChecked?: string | null;
  /** 详细地址 */
  Address: string | null;
  /** 若是支付宝合同，支付宝审核描述 */
  AliPayDesc?: string | null;
}

/** 成功申报材料查询数据 */
declare interface QueryDeclareData {
  /** 商户号 */
  MerchantId: string;
  /** 对接方汇出指令编号 */
  TransactionId: string;
  /** 申报流水号 */
  DeclareId: string;
  /** 原申报流水号 */
  OriginalDeclareId: string | null;
  /** 付款人ID */
  PayerId: string;
  /** 源币种 */
  SourceCurrency: string;
  /** 源金额 */
  SourceAmount: string | null;
  /** 目的币种 */
  TargetCurrency: string;
  /** 目的金额 */
  TargetAmount: string | null;
  /** 交易编码 */
  TradeCode: string;
  /** 状态 */
  Status: string | null;
}

/** 成功申报材料查询结果 */
declare interface QueryDeclareResult {
  /** 成功申报材料查询数据 */
  Data: QueryDeclareData;
  /** 错误码 */
  Code: string;
}

/** 超额信息数据 */
declare interface QueryExceedingInfoData {
  /** 代理商ID。 */
  AgentId: string;
  /** 代理商名称。 */
  AgentName: string;
  /** 主播ID。当入参Dimension为ANCHOR或ORDER时，该字段才会有值。 */
  AnchorId: string | null;
  /** 主播名称。当入参Dimension为ANCHOR或ORDER时，该字段才会有值。 */
  AnchorName: string | null;
  /** 订单号。当入参Dimension为ORDER时，该字段才会有值。 */
  OrderId: string | null;
  /** 超额类型。目前支持 AGENT_EXCEED_100 和 ANCHOR_EXCEED_100_12 两种类型。 */
  ExceedingType: string;
}

/** 超额信息结果 */
declare interface QueryExceedingInfoResult {
  /** 记录总数。 */
  Count: number;
  /** 超额信息数据。 */
  Data: QueryExceedingInfoData[] | null;
}

/** 查询汇率数据 */
declare interface QueryExchangerateData {
  /** 汇率 */
  Rate: string;
  /** 源币种 */
  SourceCurrency: string;
  /** 目的币种 */
  TargetCurrency: string;
  /** 汇率时间 */
  RateTime: string;
  /** 基准币种 */
  BaseCurrency: string;
}

/** 查询汇率结果 */
declare interface QueryExchangerateResult {
  /** 错误码 */
  Code: string;
  /** 查询汇率数据数组 */
  Data: QueryExchangerateData[];
}

/** 查询第三方电子记账本余额返回值 */
declare interface QueryExternalAccountBookResult {
  /** 渠道记账本ID */
  ChannelAccountBookId: string;
  /** 可用余额。 */
  AvailableBalance: string | null;
  /** 电子记账本对外收款的账户信息。为JSON格式字符串（成功状态下返回）。详情见附录-复杂类型。 */
  CollectMoneyAccountInfo: string | null;
}

/** 查询会员资金交易信息列表结果 */
declare interface QueryFundsTransactionDetailsResult {
  /** 本次交易返回查询结果记录数。 */
  ResultCount: number;
  /** 符合业务查询条件的记录总数。 */
  TotalCount: number | null;
  /** 结束标志。__0__：否__1__：是 */
  EndFlag: string | null;
  /** 会员资金交易信息数组。 */
  TranItemArray: FundsTransactionItem[] | null;
}

/** 查询发票结果 */
declare interface QueryInvoiceResult {
  /** 错误消息 */
  Message: string;
  /** 错误码 */
  Code: number;
  /** 查询发票数据 */
  Data: QueryInvoiceResultData | null;
  /** 订单数据 */
  Order: Order | null;
}

/** 查询发票结果数据 */
declare interface QueryInvoiceResultData {
  /** 订单号 */
  OrderId: string;
  /** 业务开票号 */
  OrderSn: string;
  /** 发票状态 */
  Status: number;
  /** 开票描述 */
  Message: string;
  /** 开票日期 */
  TicketDate: string;
  /** 发票号码 */
  TicketSn: string;
  /** 发票代码 */
  TicketCode: string;
  /** 检验码 */
  CheckCode: string;
  /** 含税金额(元) */
  AmountWithTax: string;
  /** 不含税金额(元) */
  AmountWithoutTax: string;
  /** 税额(元) */
  TaxAmount: string;
  /** 是否被红冲 */
  IsRedWashed: number;
  /** pdf地址 */
  PdfUrl: string;
  /** png地址 */
  ImageUrl: string | null;
}

/** 聚鑫商户余额查询输出项 */
declare interface QueryItem {
  /** 子商户账户 */
  SubAcctNo: string;
  /** 子账户属性 1：普通会员子账号 2：挂账子账号 3：手续费子账号 4：利息子账号5：平台担保子账号 */
  SubAcctProperty: string;
  /** 业务平台的子商户Id，唯一 */
  SubMchId: string;
  /** 子账户名称 */
  SubAcctName: string;
  /** 账户可用余额 */
  AcctAvailBal: string;
  /** 可提现金额 */
  CashAmt: string;
  /** 维护日期 开户日期或修改日期 */
  MaintenanceDate: string;
}

/** 聚鑫-查询会员间交易信息列表结果 */
declare interface QueryMemberTransactionDetailsResult {
  /** 本次交易返回查询结果记录数。 */
  ResultCount: number;
  /** 符合业务查询条件的记录总数。 */
  TotalCount: number | null;
  /** 结束标志。__0__：否__1__：是 */
  EndFlag: string | null;
  /** 会员间交易信息数组 */
  TranItemArray: MemberTransactionItem[] | null;
}

/** 对接账户余额查询数据 */
declare interface QueryMerchantBalanceData {
  /** 余额币种 */
  Currency: string;
  /** 账户余额 */
  Balance: string;
  /** 商户ID */
  MerchantId: string;
}

/** 对接账户余额查询结果 */
declare interface QueryMerchantBalanceResult {
  /** 错误码 */
  Code: string;
  /** 对接账户余额查询数据 */
  Data: QueryMerchantBalanceData;
}

/** 云企付-查询账户余额 */
declare interface QueryOpenBankBankAccountBalanceResult {
  /** 总余额，单位分 */
  TotalBalance: string;
  /** 昨日余额，单位分 */
  YesterdayBalance: string;
}

/** 查询联行号返回结果 */
declare interface QueryOpenBankBankBranchListResult {
  /** 支行列表。 */
  BankBranchList: BankBranchInfo[];
  /** 列表总数。 */
  Count: number;
}

/** 云企付-分页查询对账单数据结果 */
declare interface QueryOpenBankBillData {
  /** 交易日期 */
  BillDate: string;
  /** 渠道编码 */
  Channel: string;
  /** 二级渠道 */
  SubChannel: string | null;
  /** 系统父商户号 */
  ParentMerchantId: string | null;
  /** 外部商户号 */
  OutMerchantId: string | null;
  /** 系统商户号 */
  MerchantId: string;
  /** 第三方商户号 */
  EndMerchantId: string | null;
  /** 外部订单号 */
  OutTradeNo: string | null;
  /** 系统订单号 */
  TradeNo: string;
  /** 第三方订单号 */
  EndTradeNo: string | null;
  /** 收付类型，PAYMENT:付款，INCOME:收款 */
  PaymentType: string | null;
  /** 业务类型，WITHDRAW:提现，PAY:支付，RECHARGE:充值，TRANSFER:转账，REFUND:退款 */
  BusinessType: string | null;
  /** 发起交易时间，格式yyyy-MM-dd HH:mm:ss */
  TradeTime: string;
  /** 交易完成时间，格式yyyy-MM-dd HH:mm:ss */
  FinishTime: string | null;
  /** 交易状态，0:未知，1:成功，2:失败 */
  TradeStatus: string;
  /** 对账状态，1:成功，2:失败 3:长账 4:短账 */
  CheckStatus: string;
  /** 对账失败原因 */
  CheckFailReason: string | null;
  /** 交易金额（元） */
  OrderAmount: string;
  /** 服务费（元） */
  ServiceFee: string | null;
  /** 收款人账号 */
  PayeeAccount: string | null;
  /** 收款人名称 */
  PayeeName: string | null;
  /** 付款人账号 */
  PayerAccount: string | null;
  /** 付款人名称 */
  PayerName: string | null;
  /** 支付信息描述 */
  Description: string | null;
}

/** 云企付-分页查询对账单数据结果 */
declare interface QueryOpenBankBillDataPageResult {
  /** 页码 */
  PageNo: number;
  /** 分页大小 */
  PageSize: number;
  /** 总数 */
  Count: number;
  /** 账单数据明细 */
  DataList: QueryOpenBankBillData[] | null;
}

/** 子商户银行卡绑定结果查询返回结果 */
declare interface QueryOpenBankBindExternalSubMerchantBankAccountResult {
  /** 渠道子商户收款方银行卡信息, 为JSON格式字符串（绑定成功状态下返回）。详情见附录-复杂类型。 */
  ExternalSubMerchantBankAccountReturnData: string | null;
  /** 渠道申请编号。 */
  ChannelApplyId: string;
  /** 绑定状态。__SUCCESS__: 绑定成功__FAILED__: 绑定失败__PROCESSING__: 绑定中 */
  BindStatus: string;
  /** 绑定返回描述, 例如失败原因等。 */
  BindMessage: string | null;
  /** 绑卡序列号。 */
  BindSerialNo: string | null;
}

/** 云企付-按日期查询回单下载地址 */
declare interface QueryOpenBankDailyReceiptDownloadUrlResult {
  /** 回单文件下载链接 */
  DownloadUrl: string;
  /** 过期时间 */
  ExpireTime: string;
  /** 回单状态PENDING: 处理中READY: 可以下载 */
  ReceiptStatus: string;
}

/** 云企付-查询对账单文件下载url */
declare interface QueryOpenBankDownLoadUrlResult {
  /** 供下一步请求账单文件的下载地址。 */
  DownloadUrl: string;
  /** 从 download_url 下载的文件的哈希值，用于校验文件的完整性。 */
  HashValue: string;
  /** 从 download_url 下载的文件的哈希类型，用于校验文件的完整性。 */
  HashType: string;
}

/** 第三方子商户银行卡列表查询返回数据 */
declare interface QueryOpenBankExternalSubMerchantBankAccountData {
  /** 开户银行。 */
  AccountBank: string;
  /** 绑卡序列号。 */
  BindSerialNo: string;
  /** 账号类型。__COLLECT_MONEY__: 收款卡__PAYMENT__: 付款卡 */
  AccountType: string;
  /** 支行号。 */
  BankBranchId: string | null;
  /** 银行卡卡后四位。 */
  AccountNumberLastFour: string | null;
}

/** 第三方子商户银行卡列表查询返回结果 */
declare interface QueryOpenBankExternalSubMerchantBankAccountResult {
  /** 第三方渠道子商户查询银行账户返回。 */
  AccountList: QueryOpenBankExternalSubMerchantBankAccountData[];
}

/** 第三方子商户进件结果查询返回结果 */
declare interface QueryOpenBankExternalSubMerchantRegistrationResult {
  /** 进件状态。__SUCCESS__: 进件成功__FAILED__: 进件失败__PROCESSING__: 进件中 */
  RegistrationStatus: string;
  /** 进件返回描述, 例如失败原因等。 */
  RegistrationMessage: string | null;
  /** 渠道进件号。 */
  ChannelRegistrationNo: string;
  /** 渠道子商户ID（进件成功返回）。 */
  ChannelSubMerchantId: string | null;
  /** 外部子商户名称（进件成功返回）。 */
  OutSubMerchantName: string | null;
  /** 渠道名称（进件成功返回）。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string | null;
  /** 支付方式（进件成功返回）。__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付 */
  PaymentMethod: string | null;
  /** 社会信用代码。 */
  BusinessLicenseNumber: string | null;
  /** 法人姓名 */
  LegalName: string | null;
  /** 第三方渠道查询进件返回数据。详情见附录-复杂类型。 */
  ExternalReturnData: string | null;
}

/** 单笔交易回单申请结果查询 */
declare interface QueryOpenBankOrderDetailReceiptInfoResult {
  /** 渠道回单申请ID */
  ChannelApplyId: string;
  /** 申请状态。SUCCESS：申请成功；FAILED：申请失败；PROCESSING：申请中。注意：若返回申请中，需要再次调用回单申请结果查询接口，查询结果。 */
  ReceiptStatus: string;
  /** 申请返回描述，例如失败原因等。 */
  ReceiptMessage: string | null;
  /** 回单下载链接，申请成功时返回。 */
  DownloadUrl: string | null;
  /** 过期时间，yyyy-MM-dd HH:mm:ss格式。 */
  ExpireTime: string | null;
}

/** 云企付-查询订单支付结果 */
declare interface QueryOpenBankPaymentOrderResult {
  /** 渠道商户号。外部接入平台入驻云企付平台下发 */
  ChannelMerchantId: string;
  /** 外部商户订单号 */
  OutOrderId: string;
  /** 云企付平台订单号 */
  ChannelOrderId: string;
  /** 第三方支付平台订单号 */
  ThirdPayOrderId: string;
  /** 订单状态。INIT：初始化PAYING：支付中ACCEPTED：支付受理成功SUCCESS：支付成功CLOSED：关单PAY_FAIL：支付失败REVOKE：退票PART_REFUND：部分退款FULL_REFUND：全部退款 */
  OrderStatus: string;
  /** 支付渠道名称，如TENPAY */
  ChannelName: string;
  /** 付款方式。如EBANK_PAYMENTOPENBANK_PAYMENT */
  PaymentMethod: string;
  /** 订单金额。单位分 */
  TotalAmount: number;
  /** 实际支付金额。单位分，支付成功时返回 */
  PayAmount: number;
  /** 失败原因，若失败的返回 */
  FailReason: string | null;
  /** 附加信息，查询时原样透传 */
  Attachment: string | null;
  /** 重定向参数，用于客户端跳转，订单未支付时返回该参数渠道为TENPAY，付款方式为EBANK_PAYMENT时返回 */
  RedirectInfo: OpenBankRedirectInfo | null;
  /** 第三方渠道返回信息，见渠道特殊说明,详情见附录-复杂类型。 */
  ExternalReturnData: string | null;
  /** 银行复核指引。当TENPAY下OPENBANT_PAYMENT时，下单受理成功是返回。 */
  BankApprovalGuideInfo: OpenBankApprovalGuideInfo | null;
  /** 手续费金额 */
  FeeAmount: number | null;
  /** 手续费费率 */
  FeeRate: number | null;
  /** 分账信息 */
  ProfitShareRespInfoList: OpenBankProfitShareRespInfo[] | null;
  /** 支付完成时间 */
  TimeFinish: string | null;
}

/** 绑定分账收款方查询响应 */
declare interface QueryOpenBankProfitSharePayeeResult {
  /** 账户ID（受益ID） */
  AccountId: string;
  /** 账户号。通联国际指客户银行账户号 */
  AccountNo: string;
  /** 账户货币。参考附录“币种类型”。 */
  Currency: string;
  /** 收款人账户名称 */
  AccountName: string;
  /** 银行名称 */
  BankName: string | null;
  /** 账户类型。00:借记卡01:存折 02:信用卡 03:准贷记卡 04:预付卡费 05:境外卡 */
  Nature: string | null;
  /** 状态0-待审核；1-审核通过；2-审核不通过 3-关联实体未审核 */
  BindState: string;
  /** 状态描述 */
  StateExplain: string;
}

/** 云企付结算查询结果 */
declare interface QueryOpenBankSettleOrderResult {
  /** 外部结算流水号 */
  OutSettleId: string;
  /** 渠道结算流水号 */
  ChannelSettleId: string;
  /** 退款状态。SUCCESS：结算成功；FAILED：结算失败；PROCESSING：结算中;INIT:初始化;ACCEPT_FAILED:受理失败,底层银行返回订单不存在ACCEPTED：受理成功_UNKNOWN：默认未知 */
  SettleStatus: string | null;
  /** 结算金额 */
  SettleAmount: number;
  /** 结算日期，格式YYYYMMdd */
  SettleDate: string | null;
  /** 结算类型（T1/D1） */
  SettleType: string;
  /** 失败原因 */
  FailReason: string | null;
  /** 完成时间，格式yyyy-MM-dd HH:mm:ss */
  TimeFinish: string | null;
  /** 结算手续费 */
  SettleFee: string | null;
  /** 账户货币。参考附录“币种类型”。 */
  Currency: string | null;
}

/** 子商户资质文件查询 */
declare interface QueryOpenBankSubMerchantCredentialResult {
  /** 上传状态 */
  UploadStatus: string;
  /** 上传描述 */
  UploadMessage: string | null;
}

/** 子商户费率配置查询结果 */
declare interface QueryOpenBankSubMerchantRateConfigureResult {
  /** 处理状态 SUCCESS: 开通成功 FAILED: 开通失败PROCESSING: 开通中 */
  DealStatus: string;
  /** 处理描述 */
  DealMessage: string | null;
}

/** 子商户查询签约返回结果 */
declare interface QueryOpenBankSubMerchantSignOnlineResult {
  /** 处理状态 SUCCESS：签约成功 FAILED：签约失败 PROCESSING：签约中 */
  SignStatus: string;
  /** 上传返回描述，例如失败原因等 */
  SignMessage: string | null;
}

/** 查询支持的银行列表返回结果 */
declare interface QueryOpenBankSupportBankListResult {
  /** 支持的银行列表 */
  SupportBankList: SupportBankInfo[];
}

/** 第三方子商户银行卡解绑结果查询返回结果 */
declare interface QueryOpenBankUnbindExternalSubMerchantBankAccountResult {
  /** 渠道申请编号。 */
  ChannelApplyId: string;
  /** 解绑状态。__SUCCESS__: 解绑成功__FAILED__: 解绑失败__PROCESSING__: 解绑中 */
  UnbindStatus: string;
  /** 解绑返回描述, 例如失败原因等。 */
  UnbindMessage: string | null;
}

/** 云企付-查询核销申请结果 */
declare interface QueryOpenBankVerificationResult {
  /** 云企付渠道核销订单号 */
  ChannelVerificationId: string;
  /** 第三方支付渠道核销订单号 */
  ThirdVerificationId: string;
  /** 核销金额，单位分 */
  VerificationAmount: number;
  /** 核销状态INIT("INIT","初始化"),SUCCESS("SUCCESS","核销成功"),FAILED("FAILED","核销失败"),PROCESSING("PROCESSING","核销中"); */
  VerificationStatus: string;
  /** 失败原因，若核销失败，附上原因。 */
  FailReason: string | null;
  /** 渠道附加返回信息，一般情况可以不关注 */
  ThirdVerificationReturnData: string | null;
}

/** 查询订单接口的出参，订单列表 */
declare interface QueryOrderOutOrderList {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 支付金额，单位：分 */
  Amt: number;
  /** 用户Id */
  UserId: string;
  /** 现金支付金额 */
  CashAmt: string;
  /** 发货标识，由业务在调用聚鑫下单 接口的时候下发 */
  Metadata: string;
  /** 支付时间unix时间戳 */
  PayTime: string;
  /** 抵扣券金额 */
  CouponAmt: string;
  /** 下单时间unix时间戳 */
  OrderTime: string;
  /** 物品id */
  ProductId: string;
  /** 高速场景信息 */
  SceneInfo: string;
  /** 当前订单的订单状态 0：初始状态，获取聚鑫交易订单成功； 1：拉起聚鑫支付页面成功，用户未 支付；2：用户支付成功，正在发货；3：用户支付成功，发货失败；4：用户支付成功，发货成功；5：聚鑫支付页面正在失效中；6：聚鑫支付页面已经失效； */
  OrderState: string;
  /** 支付渠道：wechat：微信支付;qqwallet：QQ钱包;bank：网银 */
  Channel: string;
  /** 是否曾退款 */
  RefundFlag: string;
  /** 务支付订单号 */
  OutTradeNo: string;
  /** 商品名称 */
  ProductName: string;
  /** 支付回调时间，unix时间戳 */
  CallBackTime: string;
  /** ISO 货币代码，CNY */
  CurrencyType: string;
  /** 微校场景账户Id */
  AcctSubAppId: string;
  /** 调用下单接口获取的聚鑫交易订单 */
  TransactionId: string;
  /** 聚鑫内部渠道订单号 */
  ChannelOrderId: string;
  /** 调用下单接口传进来的 SubOutTradeNoList */
  SubOrderList: QueryOrderOutSubOrderList[];
  /** 支付机构订单号 */
  ChannelExternalOrderId: string;
  /** 主单核销状态 */
  SettleCheck: number | null;
  /** 渠道方用户信息列表 */
  ChannelExternalUserInfoList: OldChannelExternalUserInfo[] | null;
  /** 附加项信息列表 */
  AttachmentInfoList: OldAttachmentInfo[] | null;
}

/** 子订单列表 */
declare interface QueryOrderOutSubOrderList {
  /** 子订单支付金额 */
  Amt: number;
  /** 子订单结算应收金额，单位：分 */
  SubMchIncome: number;
  /** 发货标识，由业务在调用Midas下单接口的时候下发。 */
  Metadata: string;
  /** 子订单原始金额 */
  OriginalAmt: number;
  /** 子订单平台应收金额，单位：分 */
  PlatformIncome: number;
  /** 子订单商品详情 */
  ProductDetail: string;
  /** 子订单商品名称 */
  ProductName: string;
  /** 核销状态，1表示核销，0表示未核销 */
  SettleCheck: number;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 子订单号 */
  SubOutTradeNo: string;
}

/** 查询订单付款状态响应对象 */
declare interface QueryOrderStatusResult {
  /** 付款订单号 */
  OrderNo: string | null;
  /** 开发者流水号 */
  DeveloperNo: string | null;
  /** 交易优惠金额（免充值券） */
  TradeDiscountAmount: string | null;
  /** 付款方式名称 */
  PayName: string | null;
  /** 商户流水号（从1开始自增长不重复） */
  OrderMerchantId: string | null;
  /** 交易帐号（银行卡号、支付宝帐号、微信帐号等，某些收单机构没有此数据） */
  TradeAccount: string | null;
  /** 实际交易金额（以分为单位，没有小数点） */
  TradeAmount: string | null;
  /** 币种签名 */
  CurrencySign: string | null;
  /** 付款完成时间（以收单机构为准） */
  TradePayTime: string | null;
  /** 门店流水号（从1开始自增长不重复） */
  ShopOrderId: string | null;
  /** 支付标签 */
  PayTag: string | null;
  /** 订单状态（1交易成功，2待支付，4已取消，9等待用户输入密码确认 */
  Status: string | null;
  /** 币种代码 */
  OrderCurrency: string | null;
  /** 二维码字符串 */
  TradeQrcode: string | null;
  /** 开始交易时间 */
  TradeTime: string | null;
  /** 折扣金额（以分为单位，没有小数点） */
  DiscountAmount: string | null;
  /** 商户号 */
  MerchantNo: string | null;
  /** 订单备注 */
  Remark: string | null;
  /** 订单标题 */
  OrderName: string | null;
  /** 原始金额（以分为单位，没有小数点） */
  OriginalAmount: string | null;
  /** 门店编号 */
  ShopNo: string | null;
  /** 收单机构原始交易数据，如果返回非标准json数据，请自行转换 */
  TradeResult: string | null;
  /** 订单流水号 */
  OrderId: string | null;
  /** 订单类型（1消费，2辙单） */
  OrderType: string | null;
  /** 收单机构交易号 */
  TradeNo: string | null;
  /** 原始订单号 */
  OriginalOrderNo: string | null;
  /** 订单标记，订单附加数据 */
  Tag: string | null;
  /** 下单时间 */
  AddTime: string | null;
  /** 收银员编号 */
  CashierId: string | null;
  /** 收银员名称 */
  CashierRealName: string | null;
  /** 店铺全称 */
  ShopFullName: string | null;
  /** 店铺名称 */
  ShopName: string | null;
}

/** 查询汇出数据 */
declare interface QueryOutwardOrderData {
  /** 商户号 */
  MerchantId: string;
  /** 对接方汇出指令编号 */
  TransactionId: string;
  /** 财务日期 */
  AcctDate: string | null;
  /** 定价币种 */
  PricingCurrency: string | null;
  /** 源币种 */
  SourceCurrency: string | null;
  /** 源金额 */
  SourceAmount: string | null;
  /** 目的币种 */
  TargetCurrency: string | null;
  /** 目的金额 */
  TargetAmount: string | null;
  /** 汇率 */
  FxRate: string | null;
  /** 指令状态 */
  Status: string;
  /** 失败原因 */
  FailReason: string | null;
  /** 退汇金额 */
  RefundAmount: string | null;
  /** 退汇币种 */
  RefundCurrency: string | null;
}

/** 查询汇出结果 */
declare interface QueryOutwardOrderResult {
  /** 错误码 */
  Code: string;
  /** 查询汇出数据 */
  Data: QueryOutwardOrderData;
}

/** 付款人查询数据 */
declare interface QueryPayerinfoData {
  /** 商户号 */
  MerchantId: string;
  /** 付款人ID */
  PayerId: string;
  /** 审核状态 */
  Status: string;
  /** 失败原因 */
  FailReason: string | null;
  /** 付款人类型 */
  PayerType: string;
  /** 付款人姓名 */
  PayerName: string;
  /** 付款人证件类型 */
  PayerIdType: string;
  /** 付款人证件号 */
  PayerIdNo: string;
  /** 付款人联系电话 */
  PayerContactNumber: string | null;
  /** 付款人联系邮箱 */
  PayerEmailAddress: string | null;
  /** 付款人常驻国家或地区编码 */
  PayerCountryCode: string;
  /** 付款人联系名称 */
  PayerContactName: string | null;
}

/** 付款人查询结果 */
declare interface QueryPayerinfoResult {
  /** 错误码 */
  Code: string;
  /** 付款人查询数据 */
  Data: QueryPayerinfoData;
}

/** 查询对账文件申请结果 */
declare interface QueryReconciliationFileApplyInfoResult {
  /** 申请对账文件的任务ID。 */
  ApplyFileId: string;
  /** 对账文件申请状态。__I__：申请中__S__：申请成功__F__：申请失败 */
  ApplyStatus: string;
  /** 申请结果描述。 */
  ApplyMessage: string | null;
  /** 对账文件下载地址列表。 */
  FileUrlArray: string[] | null;
}

/** 获取门店OpenId响应对象 */
declare interface QueryShopOpenIdResult {
  /** 省份 */
  Province: string | null;
  /** 城市 */
  City: string | null;
  /** 门店简称 */
  ShopName: string | null;
  /** 商户编号 */
  MerchantNo: string | null;
  /** 城市编码 */
  CityId: string | null;
  /** open_id */
  OpenId?: string | null;
  /** 门店电话 */
  Telephone: string | null;
  /** 门店编号 */
  ShopNo: string | null;
  /** 县/区 */
  County: string | null;
  /** 门店全称 */
  ShopFullName: string | null;
  /** 品牌名称 */
  BrandName: string | null;
  /** 详细地址 */
  Address: string | null;
  /** open_key */
  OpenKey?: string | null;
  /** 商户名称 */
  MerchantName: string | null;
}

/** QuerySinglePaymentResult接口返回响应 */
declare interface QuerySinglePaymentResultData {
  /** 平台交易流水号，唯一 */
  TradeSerialNo: string | null;
  /** 订单号 */
  OrderId: string | null;
  /** 交易状态。0 处理中 1 预占成功 2 交易成功 3 交易失败 4 未知渠道异常 5 预占额度失败6 提交成功7 提交失败8 订单重复提交99 未知系统异常 */
  TradeStatus: number | null;
  /** 业务备注 */
  Remark: string | null;
  /** 代理商ID */
  AgentId: string | null;
  /** 代理商名称 */
  AgentName: string | null;
  /** 交易状态描述。 */
  TradeStatusDesc: string | null;
}

/** 贸易材料明细查询数据 */
declare interface QueryTradeData {
  /** 商户号 */
  MerchantId: string;
  /** 贸易材料流水号 */
  TradeFileId: string;
  /** 贸易材料订单号 */
  TradeOrderId: string;
  /** 审核状态 */
  Status: string;
  /** 失败原因 */
  FailReason: string | null;
  /** 付款人ID */
  PayerId: string;
  /** 收款人姓名 */
  PayeeName: string;
  /** 收款人常驻国家或地区编码 */
  PayeeCountryCode: string;
  /** 交易类型 */
  TradeType: string;
  /** 交易日期 */
  TradeTime: string;
  /** 交易币种 */
  TradeCurrency: string;
  /** 交易金额 */
  TradeAmount: string;
  /** 交易名称 */
  TradeName: string;
  /** 交易数量 */
  TradeCount: number;
  /** 货贸承运人 */
  GoodsCarrier: string | null;
  /** 服贸交易细节 */
  ServiceDetail: string | null;
  /** 服贸服务时间 */
  ServiceTime: string | null;
}

/** 贸易材料明细查询结果 */
declare interface QueryTradeResult {
  /** 贸易材料明细查询数据 */
  Data: QueryTradeData;
  /** 错误码 */
  Code: string;
}

/** 智能代发-单笔代发转账查询接口返回内容 */
declare interface QueryTransferResultData {
  /** 平台交易流水号 */
  TradeSerialNo: string;
  /** 订单号 */
  OrderId: string;
  /** 交易状态。0 处理中 1 提交成功 2 交易成功 3 交易失败 4 未知渠道异常 99 未知系统异常 */
  TradeStatus: number;
  /** 业务备注 */
  Remark: string | null;
}

/** 订单退款响应对象 */
declare interface RefundOrderResult {
  /** 付款订单号 */
  OrderNo: string | null;
  /** 开发者流水号 */
  DeveloperNo: string | null;
  /** 交易优惠金额（免充值券） */
  TradeDiscountAmount: string | null;
  /** 付款方式名称 */
  PayName: string | null;
  /** 商户流水号（从1开始自增长不重复） */
  OrderMerchantId: string | null;
  /** 实际交易金额（以分为单位，没有小数点） */
  TradeAmount: string | null;
  /** 币种签名 */
  CurrencySign: string | null;
  /** 付款完成时间（以收单机构为准） */
  TradePayTime: string | null;
  /** 门店流水号（从1开始自增长不重复） */
  ShopOrderId: string | null;
  /** 支付标签 */
  PayTag: string | null;
  /** 订单状态（1交易成功，2待支付，4已取消，9等待用户输入密码确认 */
  Status: string | null;
  /** 币种代码 */
  OrderCurrency: string | null;
  /** 开始交易时间 */
  TradeTime: string | null;
  /** 折扣金额（以分为单位，没有小数点） */
  DiscountAmount: string | null;
  /** 原始订单号 */
  OriginalOrderNo: string | null;
}

/** 退款子订单列表 */
declare interface RefundOutSubOrderRefundList {
  /** 平台应退金额 */
  PlatformRefundAmt: number;
  /** 子订单退款金额 */
  RefundAmt: number;
  /** 商家应退金额 */
  SubMchRefundAmt: number;
  /** 子订单号 */
  SubOutTradeNo: string;
  /** 子退款单号，调用方需要保证 全局唯一性 */
  SubRefundId: string;
}

/** 签约信息 */
declare interface RegisterInfo {
  /** 法人证件号码 */
  LegalPersonIdCode: string | null;
  /** 法人证件类型 */
  LegalPersonIdType: string | null;
  /** 法人名称 */
  LegalPersonName: string | null;
  /** 公司证件号码 */
  OrganizationCode: string | null;
  /** 公司名称 */
  OrganizationName: string | null;
  /** 公司证件类型 */
  OrganizationType: string | null;
}

/** 签约数据 */
declare interface ResponseQueryContract {
  /** 第三方渠道错误码 */
  ExternalReturnCode: string | null;
  /** 第三方渠道错误信息 */
  ExternalReturnMessage: string | null;
  /** 第三方渠道返回的原始数据 */
  ExternalReturnData: string | null;
  /** 米大师内部商户号 */
  ChannelMerchantId: string;
  /** 米大师内部子商户号 */
  ChannelSubMerchantId: string | null;
  /** 米大师内部应用ID */
  ChannelAppId: string | null;
  /** 米大师内部子应用ID */
  ChannelSubAppId: string | null;
  /** 渠道名称 */
  ChannelName: string;
  /** 返回的合约信息 */
  ReturnContractInfo: ReturnContractInfo | null;
  /** 签约通知地址 */
  NotifyUrl: string;
}

/** 解约数据 */
declare interface ResponseTerminateContract {
  /** 第三方渠道错误码 */
  ExternalReturnCode: string | null;
  /** 第三方渠道错误信息 */
  ExternalReturnMessage: string | null;
  /** 第三方渠道返回的原始数据 */
  ExternalReturnData: string | null;
}

/** 返回的合约信息 */
declare interface ReturnContractInfo {
  /** 合约信息 */
  ContractInfo: ContractInfo;
  /** 米大师内部生成的合约信息 */
  ChannelReturnContractInfo: ChannelReturnContractInfo;
  /** 第三方渠道合约信息 */
  ExternalReturnContractInfo: ExternalReturnContractInfo;
}

/** 场景信息 */
declare interface SceneInfo {
  /** 语言代码 */
  LocaleCode: string | null;
  /** 地区代码 */
  RegionCode: string | null;
  /** 用户IP */
  UserClientIp: string | null;
}

/** 服务商账户余额返回信息 */
declare interface ServiceProviderAccountBalanceResult {
  /** 服务商账户余额 */
  Balance: string;
}

/** 商户结算信息 */
declare interface SettleInfo {
  /** 结算账户类型 PRIVATE：对私 BUSINESS：对公HELIPAY渠道必传 */
  SettleAccountType?: string;
  /** 结算账号HELIPAY渠道必传 */
  SettleAccountNumber?: string;
  /** 结算账户名称HELIPAY渠道必传 */
  SettleAccountName?: string;
  /** 支行号HELIPAY渠道必传 */
  BankBranchId?: string;
  /** 支行名称 */
  BankBranchName?: string;
  /** 结算方式 AUTO：自动结算 SELF：自主结算HELIPAY渠道必传 */
  SettleMode?: string;
  /** 结算周期 T1：工作日隔天结算 D1：自然日隔天结算 D0：当日结算HELIPAY渠道必传 */
  SettlePeriod?: string;
}

/** 结算订单结果 */
declare interface SettlementOrderResult {
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 税后金额 */
  AmountAfterTax: string | null;
  /** 税金 */
  Tax: string | null;
  /** 外部订单ID */
  OutOrderId: string;
  /** 订单ID */
  OrderId: string;
  /** 发起时间 */
  InitiateTime: string;
  /** 完成时间 */
  FinishTime: string | null;
  /** 状态ACCEPTED:已受理ACCOUNTED:已记账SUCCEED:已成功FAILED:已失败 */
  Status: string;
  /** 状态描述 */
  StatusDesc: string;
  /** 备注 */
  Remark: string | null;
  /** 收款用户ID */
  PayeeId: string;
  /** 外部用户ID */
  OutUserId: string;
  /** 操作类型 */
  OperationType: string;
}

/** 结算订单列表 */
declare interface SettlementOrders {
  /** 列表 */
  List: SettlementOrderResult[] | null;
  /** 总数 */
  Count: number | null;
}

/** 支持的银行信息 */
declare interface SupportBankInfo {
  /** 银行简称。 */
  BankCode: string;
  /** 银行名称。 */
  BankName: string;
  /** 状态。__MAINTAINING__: 维护中__WORKING__: 正常工作 */
  MaintainStatus: string | null;
  /** 银行渠道维护公告。 */
  BankNotice: string | null;
  /** 支持银行代码 */
  BankId: string | null;
  /** 卡类型。D：借记卡，C：信用卡，Z：借贷合一卡。 */
  CardType: string | null;
}

/** 交易信息 */
declare interface TranItem {
  /** STRING(50)，资金汇总账号 */
  FundSummaryAcctNo: string | null;
  /** STRING(50)，见证子账户的账号 */
  SubAcctNo: string | null;
  /** STRING(32)，交易网会员代码 */
  TranNetMemberCode: string | null;
  /** STRING(150)，会员名称 */
  MemberName: string | null;
  /** STRING(5)，会员证件类型（详情见“常见问题”） */
  MemberGlobalType: string | null;
  /** STRING(32)，会员证件号码 */
  MemberGlobalId: string | null;
  /** STRING(50)，会员绑定账户的账号（提现的银行卡） */
  MemberAcctNo: string | null;
  /** STRING(10)，会员绑定账户的本他行类型（1: 本行; 2: 他行） */
  BankType: string | null;
  /** STRING(150)，会员绑定账户的开户行名称 */
  AcctOpenBranchName: string | null;
  /** STRING(20)，会员绑定账户的开户行的联行号 */
  CnapsBranchId: string | null;
  /** STRING(20)，会员绑定账户的开户行的超级网银行号 */
  EiconBankBranchId: string | null;
  /** STRING(30)，会员的手机号 */
  Mobile: string | null;
}

/** 交易明细信息 */
declare interface TransactionItem {
  /** STRING(2)，记账标志（1: 转出; 2: 转入） */
  BookingFlag: string | null;
  /** STRING(32)，交易状态（0: 成功） */
  TranStatus: string | null;
  /** STRING(20)，交易金额 */
  TranAmt: string | null;
  /** STRING(8)，交易日期 */
  TranDate: string | null;
  /** STRING(20)，交易时间 */
  TranTime: string | null;
  /** STRING(52)，见证系统流水号 */
  FrontSeqNo: string | null;
  /** STRING(20)，记账类型（详情见“常见问题”） */
  BookingType: string | null;
  /** STRING(50)，转入见证子账户的帐号 */
  InSubAcctNo: string | null;
  /** STRING(50)，转出见证子账户的帐号 */
  OutSubAcctNo: string | null;
  /** STRING(300)，备注（返回交易订单号） */
  Remark: string | null;
}

/** 转账充值明细信息 */
declare interface TransferItem {
  /** STRING(10)，入账类型（02: 会员充值; 03: 资金挂账） */
  InAcctType: string | null;
  /** STRING(32)，交易网会员代码 */
  TranNetMemberCode: string | null;
  /** STRING(50)，见证子帐户的帐号 */
  SubAcctNo: string | null;
  /** STRING(20)，入金金额 */
  TranAmt: string | null;
  /** STRING(50)，入金账号 */
  InAcctNo: string | null;
  /** STRING(150)，入金账户名称 */
  InAcctName: string | null;
  /** STRING(3)，币种 */
  Ccy: string | null;
  /** STRING(8)，会计日期（即银行主机记账日期） */
  AccountingDate: string | null;
  /** STRING(150)，银行名称（付款账户银行名称） */
  BankName: string | null;
  /** STRING(300)，转账备注 */
  Remark: string | null;
  /** STRING(52)，见证系统流水号 */
  FrontSeqNo: string | null;
}

/** 智能代发-单笔代发转账接口返回数据 */
declare interface TransferSinglePayData {
  /** 平台交易流水号，唯一 */
  TradeSerialNo: string;
}

/** 第三方子商户银行卡解绑返回结果 */
declare interface UnbindOpenBankExternalSubMerchantBankAccountResult {
  /** 渠道申请编号。 */
  ChannelApplyId: string;
  /** 解绑状态。__SUCCESS__: 解绑成功__FAILED__: 解绑失败__PROCESSING__: 解绑中注意：若返回解绑中，需要再次调用解绑结果查询接口查询结果。 */
  UnbindStatus: string;
  /** 解绑返回描述, 例如失败原因等。 */
  UnbindMessage: string | null;
}

/** 子订单列表 */
declare interface UnifiedOrderInSubOrderList {
  /** 子订单结算应收金额，单位： 分 */
  SubMchIncome: number;
  /** 子订单平台应收金额，单位：分 */
  PlatformIncome: number;
  /** 子订单商品详情 */
  ProductDetail: string;
  /** 子订单商品名称 */
  ProductName: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 子订单号 */
  SubOutTradeNo: string;
  /** 子订单支付金额 */
  Amt: number;
  /** 发货标识，由业务在调用聚鑫下单接口的 时候下发 */
  Metadata: string;
  /** 子订单原始金额 */
  OriginalAmt: number;
}

/** 上传文件响应对象 */
declare interface UploadFileResult {
  /** 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域 */
  Storage: string | null;
  /** 文件路径 */
  FilePath: string | null;
}

/** 上传子商户资质文件返回值 */
declare interface UploadOpenBankSubMerchantCredentialResult {
  /** 上传状态SUCCESS：上传成功FAILED：上传失败PROCESSING:上传中 */
  UploadStatus: string;
  /** 上传描述 */
  UploadMessage: string | null;
  /** 渠道上传流水号 */
  ChannelApplyId: string;
}

/** 打款验证响应结果结构体 */
declare interface VerifyOpenBankAccountResult {
  /** 打款验证状态。 INIT("打款中"),PENDING("打款成功待验证"),VERIFIED("验证成功"),FAILED("打款失败"),VERIFY_FAILED("验证失败") */
  VerifyState: string;
  /** 重定向参数，用于客户端跳转，收款商户未完成打款验证时返回该参数 */
  RedirectInfo: OpenBankRedirectInfo;
}

/** 合同明细响应对象 */
declare interface ViewContractResult {
  /** 支付标签（唯一性） */
  PaymentTag: string | null;
  /** 城市 */
  City: string | null;
  /** 机构编号 */
  AgentNo?: string | null;
  /** 合同选项值4 */
  ContractOptionFour?: string | null;
  /** 合同选项值2 */
  ContractOptionTwo?: string | null;
  /** 合同状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过） */
  Status: string | null;
  /** 支付方式编号 */
  PaymentId: string | null;
  /** 商户签约扣率 */
  Fee: string | null;
  /** 合同选项名称5 */
  PaymentOptionFive?: string | null;
  /** 机构合同主键 */
  OutContractId: string | null;
  /** 不同的支付方式对于进件有不同的个性化需求，支付方式字段都是以双下划写开头的字段名称，请以支付方式规定的格式传值 */
  ChannelExtJson?: string | null;
  /** 合同选项值5 */
  ContractOptionFive?: string | null;
  /** 省份 */
  Province: string | null;
  /** 生效日期 */
  StartDate: string | null;
  /** 详细地址 */
  Address: string | null;
  /** 过期日期 */
  EndDate: string | null;
  /** 合同选项值6 */
  ContractOptionSix?: string | null;
  /** 合同选项名称7 */
  PaymentOptionSeven?: string | null;
  /** 合同照片补充【私密区】 */
  PictureTwo?: string | null;
  /** 商户编号 */
  MerchantNo: string | null;
  /** 机构名称 */
  AgentName?: string | null;
  /** 合同选项值8 */
  ContractOptionOther?: string | null;
  /** 合同选项值3 */
  ContractOptionThree?: string | null;
  /** 县/区 */
  Country: string | null;
  /** 合同关联的门店数量 */
  ShopCount: string | null;
  /** 合同选项名称3 */
  PaymentOptionThree?: string | null;
  /** 支付方式行业名称 */
  PaymentClassificationName: string | null;
  /** 合同选项值7 */
  ContractOptionSeven?: string | null;
  /** 合同选项名称4 */
  PaymentOptionFour?: string | null;
  /** 商户签约扣率封顶值（分为单位） */
  PaymentClassificationLimit: string | null;
  /** 审核备注 */
  Remark?: string | null;
  /** 合同选项名称6 */
  PaymentOptionSix?: string | null;
  /** 品牌名称 */
  MerchantName: string | null;
  /** 合同选项值1 */
  ContractOptionOne?: string | null;
  /** 合同选项名称8 */
  PaymentOptionOther?: string | null;
  /** 合同选项名称2 */
  PaymentOptionTwo?: string | null;
  /** 合同选项名称1 */
  PaymentOptionOne?: string | null;
  /** 更新时间（yyyy-mm-dd hh:ii:ss） */
  UpdateTime: string | null;
  /** 联系人电话 */
  ContactTelephone?: string | null;
  /** 联系人 */
  Contact?: string | null;
  /** 签约日期 */
  SignDate: string | null;
  /** 合同选项名称9 */
  PaymentOptionNine?: string | null;
  /** 付款方式名称 */
  PaymentName: string | null;
  /** 付款方式名称（内部名称） */
  PaymentInternalName: string | null;
  /** 合同选项值10 */
  ContractOptionTen?: string | null;
  /** 合同编号 */
  Code: string | null;
  /** 合同照片【私密区】 */
  PictureOne: string | null;
  /** 签约人 */
  SignMan?: string | null;
  /** 渠道号 */
  ChannelNo?: string | null;
  /** 添加时间（yyyy-mm-dd hh:ii:ss） */
  AddTime: string | null;
  /** 是否自动续签（1是，0否） */
  AutoSign: string | null;
  /** 合同选项值9 */
  ContractOptionNine?: string | null;
  /** 城市编码 */
  CityId: string | null;
  /** 交易类型（多个以小写逗号分开，0现金，1刷卡，2主扫，3被扫，4JSPAY，5预授权） */
  PaymentType: string | null;
  /** 支付方式行业编号 */
  PaymentClassificationId: string | null;
  /** 品牌名称 */
  BrandName: string | null;
  /** 合同选项名称10 */
  PaymentOptionTen?: string | null;
  /** 合同主键 */
  ContractId: string | null;
}

/** 商户明细响应对象 */
declare interface ViewMerchantResult {
  /** 城市 */
  City: string | null;
  /** 税务登记证图片【私密区】 */
  TaxCollectionPicture?: string | null;
  /** 法人证件号码 */
  BossIdNo: string | null;
  /** 法人亲属证件号码 */
  AccountIdNo?: string | null;
  /** 其他资料3 */
  OtherPictureThree?: string | null;
  /** 法人亲属证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件）结算账户人身份为法人亲属时必填 */
  AccountIdType?: string | null;
  /** 商户状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过） */
  Status: string | null;
  /** 营业执照图片【私密区】（系统返回的图片路径） */
  BusinessLicensePicture: string | null;
  /** 品牌名称 */
  BrandName: string | null;
  /** 法人身份证正面【私密区】（系统返回的图片路径） */
  BossPositive: string | null;
  /** 开通应用数量 */
  AppCount: string | null;
  /** 法人身份证背面【私密区】（系统返回的图片路径） */
  BossBack: string | null;
  /** 组织机构代码证图片【私密区】 */
  OrganizationCodePicture?: string | null;
  /** 营业执照过期时间（yyyy-mm-dd） */
  BusinessLicenseEndDate: string | null;
  /** 组织机构代码证号 */
  OrganizationCodeNo?: string | null;
  /** 机构编号 */
  AgentNo?: string | null;
  /** 省份 */
  Province: string | null;
  /** 法人证件生效时间（yyyy-mm-dd） */
  BossStartDate: string | null;
  /** 更新时间（yyyy-mm-dd hh:ii:ss） */
  UpdateTime: string | null;
  /** 清算联行号，开户行行号 */
  BankNo: string | null;
  /** 税务登记证生效时间（yyyy-mm-dd） */
  TaxCollectionStartDate?: string | null;
  /** 营业执照生效时间（yyyy-mm-dd） */
  BusinessLicenseStartDate: string | null;
  /** 客户经理用户编号 */
  AccountManagerId?: string | null;
  /** 分类编号(多个以小写逗号分开) */
  ClassificationIds: string | null;
  /** 营业执照类型（1三证合一，2非三证合一） */
  BusinessLicenseType: string | null;
  /** 法人证件过期时间（yyyy-mm-dd） */
  BossEndDate: string | null;
  /** 营业执照编号（系统有唯一性校验） */
  BusinessLicenseNo: string | null;
  /** 机构名称 */
  AgentName?: string | null;
  /** 商户简介 */
  Intro?: string | null;
  /** 法人证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件） */
  BossIdType: string | null;
  /** 添加时间（yyyy-mm-dd hh:ii:ss） */
  AddTime: string | null;
  /** 门店数量 */
  ShopCount: string | null;
  /** 结算账户人身份（1法人，2法人亲属），结算帐户为对私时必填 */
  AccountBoss?: string | null;
  /** 分类名称(多个以小写逗号分开) */
  ClassificationNames: string | null;
  /** 法人电话 */
  BossTelephone?: string | null;
  /** 客户经理姓名，必须为系统后台的管理员真实姓名 */
  AccountManagerName?: string | null;
  /** 终端数量 */
  TerminalCount: string | null;
  /** 审核备注 */
  Remark: string | null;
  /** 财务联系人 */
  FinancialContact?: string | null;
  /** 商户名称 */
  MerchantName: string | null;
  /** 法人性别（1男，2女） */
  BossSex: string | null;
  /** 商户编号 */
  MerchantNo: string | null;
  /** 法人住址 */
  BossAddress?: string | null;
  /** 县/区 */
  Country: string | null;
  /** 详细地址 */
  Address: string | null;
  /** 法人职业 */
  BossJob?: string | null;
  /** 许可证图片【私密区】 */
  LicencePicture?: string | null;
  /** 组织机构代码证过期时间（yyyy-mm-dd） */
  OrganizationCodeEndDate?: string | null;
  /** 营业时间，多个以小写逗号分开(9:00-12:00,13:00-18:00) */
  OpenHours: string | null;
  /** 其他资料2 */
  OtherPictureTwo?: string | null;
  /** 其他资料1 */
  OtherPictureOne?: string | null;
  /** 银行户名 */
  AccountName: string | null;
  /** 合同数量 */
  ContractCount: string | null;
  /** 授权文件【私密区】（当结算帐户身份为法人亲属时必传） */
  LicencePictureTwo?: string | null;
  /** 银行账号 */
  AccountNo: string | null;
  /** 法人邮箱 */
  BossEmail?: string | null;
  /** 结算账户类型（2对私，1对公） */
  AccountType: string | null;
  /** 税务登记证过期时间（yyyy-mm-dd） */
  TaxCollectionEndDate?: string | null;
  /** 开户行名称 */
  BankName: string | null;
  /** 联系电话 */
  Telephone: string | null;
  /** 外部商户主键编号 */
  OutMerchantId: string | null;
  /** 城市编码 */
  CityId: string | null;
  /** 法人证件国别/地区（中国CHN，香港HKG，澳门MAC，台湾CTN） */
  BossIdCount: string | null;
  /** 商户标记，自定义参数 */
  Tag?: string | null;
  /** 财务联系人电话 */
  FinancialTelephone?: string | null;
  /** 法人姓名 */
  BossName: string | null;
  /** 组织机构代码证生效时间（yyyy-mm-dd） */
  OrganizationCodeStartDate?: string | null;
  /** 商户logo【公共区】 */
  Logo?: string | null;
  /** 其他资料4 */
  OtherPictureFour?: string | null;
  /** 税务登记证号 */
  TaxCollectionNo?: string | null;
}

/** 门店明细响应对象 */
declare interface ViewShopResult {
  /** 城市 */
  City: string | null;
  /** 门店简称 */
  ShopName: string | null;
  /** 百度地图纬度 */
  Latitude: string | null;
  /** 品牌名称 */
  BrandName: string | null;
  /** 开通应用数量 */
  AppCount: string | null;
  /** 负责人手机号码 */
  ContactTelephone?: string | null;
  /** 商户名称 */
  MerchantName: string | null;
  /** 省份 */
  Province: string | null;
  /** 县/区 */
  County: string | null;
  /** 更新时间（yyyy-mm-dd hh:ii:ss） */
  UpdateTime: string | null;
  /** 终端数量 */
  TerminalCount: string | null;
  /** 收银台图片【公共区】 */
  PictureTwo: string | null;
  /** 高德地图纬度 */
  LatitudeTwo: string | null;
  /** 机构名称 */
  AgentName?: string | null;
  /** 其他照片【公共区】 */
  PictureFour?: string | null;
  /** 高德地图经度 */
  LongitudeTwo: string | null;
  /** 门店状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过） */
  Status: string | null;
  /** 审核备注 */
  Remark: string | null;
  /** 机构编号 */
  AgentNo?: string | null;
  /** 商户编号 */
  MerchantNo: string | null;
  /** 添加时间（yyyy-mm-dd hh:ii:ss） */
  AddTime: string | null;
  /** 详细地址 */
  Address: string | null;
  /** 百度地图经度 */
  Longitude: string | null;
  /** 门店编号 */
  ShopNo: string | null;
  /** 门店全称 */
  ShopFullName: string | null;
  /** 门店负责人 */
  Contact?: string | null;
  /** 店内环境图片【公共区】 */
  PictureThree: string | null;
  /** 整体门面（含招牌）图片【公共区】 */
  PictureOne: string | null;
  /** 门店电话 */
  Telephone: string | null;
  /** 机构门店主键 */
  OutShopId: string | null;
  /** 城市编码 */
  CityId: string | null;
}

/** 聚鑫提现订单内容 */
declare interface WithdrawBill {
  /** 业务提现订单号 */
  WithdrawOrderId: string;
  /** 提现日期 */
  Date: string;
  /** 提现金额，单位： 分 */
  PayAmt: string;
  /** 聚鑫分配转入账户appid */
  InSubAppId: string;
  /** 聚鑫分配转出账户appid */
  OutSubAppId: string;
  /** ISO货币代码 */
  CurrencyType: string;
  /** 透传字段 */
  MetaData?: string;
  /** 扩展字段 */
  ExtendFieldData?: string;
}

/** 清分提现明细信息 */
declare interface WithdrawItem {
  /** STRING(2)，记账标志（01: 提现; 02: 清分 ） */
  BookingFlag: string | null;
  /** STRING(32)，交易状态（0: 成功） */
  TranStatus: string | null;
  /** STRING(200)，记账说明 */
  BookingMsg: string | null;
  /** STRING(32)，交易网会员代码 */
  TranNetMemberCode: string | null;
  /** STRING(50)，见证子帐户的帐号 */
  SubAcctNo: string | null;
  /** STRING(150)，见证子账户的名称 */
  SubAcctName: string | null;
  /** STRING(20)，交易金额 */
  TranAmt: string | null;
  /** STRING(20)，手续费 */
  Commission: string | null;
  /** STRING(8)，交易日期 */
  TranDate: string | null;
  /** STRING(20)，交易时间 */
  TranTime: string | null;
  /** STRING(52)，见证系统流水号 */
  FrontSeqNo: string | null;
  /** STRING(300)，备注 */
  Remark: string | null;
}

declare interface AddContractRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 机构合同主键（系统有唯一性校验），建议使用合同表的主键ID，防止重复添加合同 */
  OutContractId: string;
  /** 合同编号（系统有唯一性校验） */
  Code: string;
  /** 支付方式编号 */
  PaymentId: string;
  /** 支付方式行业分类编号 */
  PaymentClassificationId: string;
  /** 封顶值（分为单位，无封顶填0） */
  PaymentClassificationLimit: string;
  /** 商户编号 */
  MerchantNo: string;
  /** 签约扣率百分比（如：0.32） */
  Fee: string;
  /** 合同生效日期（yyyy-mm-dd） */
  StartDate: string;
  /** 合同过期日期（yyyy-mm-dd） */
  EndDate: string;
  /** 合同签约人 */
  SignMan: string;
  /** 签购单名称，建议使用商户招牌名称 */
  SignName: string;
  /** 合同签署日期（yyyy-mm-dd） */
  SignDate: string;
  /** 是否自动续签（1是，0否） */
  AutoSign: string;
  /** 联系人 */
  Contact: string;
  /** 联系人电话 */
  ContactTelephone: string;
  /** 合同照片【私密区】 */
  PictureOne: string;
  /** 合同照片【私密区】 */
  PictureTwo?: string;
  /** 渠道扩展字段，json格式 */
  ChannelExtJson?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
  /** 合同选项1（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionOne?: string;
  /** 合同选项2（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionTwo?: string;
  /** 合同选项3（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionThree?: string;
  /** 合同选项4（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionFour?: string;
  /** 合同证书选项1（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionFive?: string;
  /** 合同证书选项2（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionSix?: string;
  /** 合同选项5（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionSeven?: string;
  /** 合同选项6（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionOther?: string;
  /** 合同选项8 */
  PaymentOptionTen?: string;
  /** 合同选项7（不同支付方式规则不一样，请以支付方式规定的格式传值） */
  PaymentOptionNine?: string;
}

declare interface AddContractResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 添加合同响应对象 */
  Result: AddContractResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddFlexFundingAccountRequest {
  /** 资金账户类型PINGAN_BANK:平安银行 */
  FundingAccountType: string;
  /** 收款资金账户姓名 */
  FundingAccountName: string;
  /** 收款资金账户号 */
  FundingAccountNo: string;
  /** 收款资金账户手机号 */
  PhoneNo: string;
  /** 收款用户ID */
  PayeeId: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
  /** 开户支行名 */
  BankBranchName?: string;
}

declare interface AddFlexFundingAccountResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 无 */
  Result: PayeeFundingAccountResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddFlexIdInfoRequest {
  /** 证件类型0:身份证1:社会信用代码 */
  IdType: number;
  /** 证件号 */
  IdNo: string;
  /** 收款用户ID */
  PayeeId: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
  /** 姓名 */
  Name?: string;
}

declare interface AddFlexIdInfoResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 无 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddFlexPhoneNoRequest {
  /** 手机号 */
  PhoneNo: string;
  /** 收款用户ID */
  PayeeId: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface AddFlexPhoneNoResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 无 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddMerchantRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 机构商户主键（系统有唯一性校验），建议使用商户表的主键ID，防止重复添加商户 */
  OutMerchantId: string;
  /** 商户名称，小微商户命名要符合“”商户_名字” （例如：商户_张三） */
  MerchantName: string;
  /** 营业执照类型（1三证合一，2非三证合一） */
  BusinessLicenseType: string;
  /** 营业执照编号（系统有唯一性校验），（小微商户不效验，随意传要有值，公司/个体户必传） */
  BusinessLicenseNo: string;
  /** 营业执照图片【私密区】（系统返回的图片路径），（小微商户不效验，随意传要有值，公司/个体户必传） */
  BusinessLicensePicture: string;
  /** 营业执照生效时间（yyyy-mm-dd），（小微商户不效验，随意传要有值，公司/个体户必传） */
  BusinessLicenseStartDate: string;
  /** 营业执照过期时间（yyyy-mm-dd），（小微商户不效验，随意传要有值，公司/个体户必传） */
  BusinessLicenseEndDate: string;
  /** 行业分类编号列表（第一个分类编号为主分类，后面的为二级分类） */
  ClassificationIds: string[];
  /** 招牌名称 */
  BrandName: string;
  /** 联系电话 */
  Telephone: string;
  /** 城市编号 */
  CityId: string;
  /** 详细地址，不含省市区县名称，长度需要大于5。 */
  Address: string;
  /** 营业时间，多个以小写逗号分开(9:00-12:00,13:00-18:00) */
  OpenHours: string;
  /** 结算账户类型（2对私，1对公） */
  AccountType: string;
  /** 清算联行号，开户行行号 */
  BankNo: string;
  /** 开户行名称 */
  BankName: string;
  /** 银行账号 */
  AccountNo: string;
  /** 银行户名 */
  AccountName: string;
  /** 法人证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件） */
  BossIdType: string;
  /** 法人证件号码 */
  BossIdNo: string;
  /** 法人姓名 */
  BossName: string;
  /** 法人性别（1男，2女） */
  BossSex: string;
  /** 法人证件国别/地区（中国CHN，香港HKG，澳门MAC，台湾CTN） */
  BossIdCountry: string;
  /** 法人身份证正面【私密区】（系统返回的图片路径） */
  BossPositive: string;
  /** 法人身份证背面【私密区】（系统返回的图片路径） */
  BossBack: string;
  /** 法人证件生效时间（yyyy-mm-dd） */
  BossStartDate: string;
  /** 法人证件过期时间（yyyy-mm-dd） */
  BossEndDate: string;
  /** 许可证图片【私密区】，（小微商户不效验，随意传要有值，公司/个体户必传） */
  LicencePicture: string;
  /** 商户类型：1-个体，2-小微，3-企业。不传默认为2-小微商户。 */
  Type?: string;
  /** 组织机构代码证号 */
  OrganizationNo?: string;
  /** 组织机构代码证生效时间（yyyy-mm-dd） */
  OrganizationStartDate?: string;
  /** 组织机构代码证图片【私密区】 */
  OrganizationPicture?: string;
  /** 组织机构代码证过期时间（yyyy-mm-dd） */
  OrganizationEndDate?: string;
  /** 商户简介 */
  Intro?: string;
  /** 商户logo【公共区】 */
  Logo?: string;
  /** 商户标记，自定义参数 */
  Tag?: string;
  /** 财务联系人电话 */
  FinancialTelephone?: string;
  /** 财务联系人 */
  FinancialContact?: string;
  /** 税务登记证号 */
  TaxRegistrationNo?: string;
  /** 税务登记证图片【私密区】 */
  TaxRegistrationPicture?: string;
  /** 税务登记证生效时间（yyyy-mm-dd） */
  TaxRegistrationStartDate?: string;
  /** 税务登记证过期时间（yyyy-mm-dd） */
  TaxRegistrationEndDate?: string;
  /** 结算账户人身份（1法人，2法人亲属），结算帐户为对私时必填 */
  AccountBoss?: string;
  /** 客户经理姓名，必须为系统后台的管理员真实姓名 */
  AccountManagerName?: string;
  /** 法人电话 */
  BossTelephone?: string;
  /** 法人职业 */
  BossJob?: string;
  /** 法人邮箱 */
  BossEmail?: string;
  /** 法人住址 */
  BossAddress?: string;
  /** 法人亲属证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件）结算账户人身份为法人亲属时必填 */
  AccountIdType?: string;
  /** 法人亲属证件号码 */
  AccountIdNo?: string;
  /** 授权文件【私密区】 */
  LicencePictureTwo?: string;
  /** 其他资料1 */
  OtherPictureOne?: string;
  /** 其他资料2 */
  OtherPictureTwo?: string;
  /** 其他资料3 */
  OtherPictureThree?: string;
  /** 其他资料4 */
  OtherPictureFour?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface AddMerchantResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码，0表示成功，其他表示失败。 */
  ErrCode: string;
  /** 添加商户响应对象 */
  Result: AddMerchantResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddShopRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 机构门店主键（系统有唯一性校验），建议使用门店表的主键ID，防止重复添加门店 */
  OutShopId: string;
  /** 门店简称（例如：南山店） */
  ShopName: string;
  /** 门店全称（例如：江山小厨（南山店）） */
  ShopFullName: string;
  /** 商户编号 */
  MerchantNo: string;
  /** 门店电话 */
  Telephone: string;
  /** 营业时间，多个以小写逗号分开(9:00-12:00,13:00-18:00) */
  OpenHours: string;
  /** 门店所在的城市编码 */
  CityId: string;
  /** 门店详细地址，不含省市区县名称 */
  Address: string;
  /** 整体门面（含招牌）图片【公共区】 */
  PictureOne: string;
  /** 整体门面（含招牌）图片【公共区】 */
  PictureTwo: string;
  /** 店内环境图片【公共区】 */
  PictureThree: string;
  /** 负责人手机号码 */
  FinancialTelephone?: string;
  /** 门店负责人 */
  Contact?: string;
  /** 百度地图纬度 */
  Latitude?: string;
  /** 高德地图纬度 */
  LatitudeTwo?: string;
  /** 百度地图经度 */
  Longitude?: string;
  /** 高德地图经度 */
  LongitudeTwo?: string;
  /** 其他照片【公共区】 */
  OtherPicture?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface AddShopResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 添加申请响应对象 */
  Result: AddShopResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyApplicationMaterialRequest {
  /** 对接方汇出指令编号 */
  TransactionId: string;
  /** 申报流水号 */
  DeclareId: string;
  /** 付款人ID */
  PayerId: string;
  /** 源币种 */
  SourceCurrency: string;
  /** 目的币种 */
  TargetCurrency: string;
  /** 贸易编码 */
  TradeCode: string;
  /** 原申报流水号 */
  OriginalDeclareId?: string;
  /** 源金额 */
  SourceAmount?: number;
  /** 目的金额 */
  TargetAmount?: number;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface ApplyApplicationMaterialResponse {
  /** 提交申报材料结果 */
  Result: ApplyDeclareResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyFlexPaymentRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 外部订单ID */
  OutOrderId: string;
  /** 资金账户信息 */
  FundingAccountInfo: FlexFundingAccountInfo;
  /** 提现备注 */
  Remark?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
  /** 支付结果通知回调地址 */
  NotifyUrl?: string;
}

declare interface ApplyFlexPaymentResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: ApplyFlexPaymentResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyFlexSettlementRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 外部订单ID */
  OutOrderId: string;
  /** 备注 */
  Remark: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface ApplyFlexSettlementResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: ApplyFlexSettlementResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyOpenBankOrderDetailReceiptRequest {
  /** 外部回单申请编号 */
  OutApplyId: string;
  /** 渠道商户ID */
  ChannelMerchantId: string;
  /** 渠道子商户ID */
  ChannelSubMerchantId: string;
  /** 渠道名称，目前只支持ALIPAY */
  ChannelName: string;
  /** 支付方式，目前只支持SAFT_ISV */
  PaymentMethod: string;
  /** 云企付平台订单号 */
  ChannelOrderId: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface ApplyOpenBankOrderDetailReceiptResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string | null;
  /** 返回结果。 */
  Result: ApplyOpenBankOrderDetailReceiptResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyOpenBankSettleOrderRequest {
  /** 渠道商户号 */
  ChannelMerchantId: string;
  /** 外部结算流水号 */
  OutSettleId: string;
  /** 结算金额 */
  SettleAmount: number;
  /** 渠道名称。详见附录-枚举类型-ChannelName。 */
  ChannelName: string;
  /** 渠道子商户号 */
  ChannelSubMerchantId?: string;
  /** 结算备注 */
  SettleDetail?: string;
  /** 结算成功回调地址 */
  NotifyUrl?: string;
  /** 附言 */
  Remark?: string;
  /** 结算第三方渠道扩展信息。通联国际必选 */
  ExternalSettleData?: string;
  /** 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境 */
  Environment?: string;
}

declare interface ApplyOpenBankSettleOrderResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误信息。 */
  ErrMessage: string;
  /** 返回结果 */
  Result: ApplyOpenBankSettleOrderResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyOpenBankSubMerchantSignOnlineRequest {
  /** 渠道商户号。外部平台接入云企付平台下发。必填。 */
  ChannelMerchantId: string;
  /** 渠道名称。详见附录-枚举类型-ChannelName。 */
  ChannelName: string;
  /** 外部子商户ID。 */
  OutSubMerchantId?: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId?: string;
  /** 签约成功回调地址。 */
  NotifyUrl?: string;
}

declare interface ApplyOpenBankSubMerchantSignOnlineResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误信息。 */
  ErrMessage: string;
  /** 返回结果 */
  Result: ApplyOpenBankSubMerchantSignOnlineResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyOutwardOrderRequest {
  /** 对接方汇出指令编号 */
  TransactionId: string;
  /** 定价币种 */
  PricingCurrency: string;
  /** 源币种 */
  SourceCurrency: string;
  /** 目的币种 */
  TargetCurrency: string;
  /** 收款人类型（银行卡填"BANK_ACCOUNT"） */
  PayeeType: string;
  /** 收款人账号 */
  PayeeAccount: string;
  /** 源币种金额 */
  SourceAmount?: number;
  /** 目的金额 */
  TargetAmount?: number;
  /** 收款人姓名（PayeeType为"BANK_COUNT"时必填） */
  PayeeName?: string;
  /** 收款人地址（PayeeType为"BANK_COUNT"时必填） */
  PayeeAddress?: string;
  /** 收款人银行账号类型（PayeeType为"BANK_COUNT"时必填）个人填"INDIVIDUAL"企业填"CORPORATE" */
  PayeeBankAccountType?: string;
  /** 收款人国家或地区编码（PayeeType为"BANK_COUNT"时必填） */
  PayeeCountryCode?: string;
  /** 收款人开户银行名称（PayeeType为"BANK_COUNT"时必填） */
  PayeeBankName?: string;
  /** 收款人开户银行地址（PayeeType为"BANK_COUNT"时必填） */
  PayeeBankAddress?: string;
  /** 收款人开户银行所在国家或地区编码（PayeeType为"BANK_COUNT"时必填） */
  PayeeBankDistrict?: string;
  /** 收款银行SwiftCode（PayeeType为"BANK_COUNT"时必填） */
  PayeeBankSwiftCode?: string;
  /** 收款银行国际编码类型 */
  PayeeBankType?: string;
  /** 收款银行国际编码 */
  PayeeBankCode?: string;
  /** 收款人附言 */
  ReferenceForBeneficiary?: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface ApplyOutwardOrderResponse {
  /** 汇出指令申请 */
  Result: ApplyOutwardOrderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyPayerInfoRequest {
  /** 付款人ID */
  PayerId: string;
  /** 付款人类型 (个人: INDIVIDUAL, 企业: CORPORATE) */
  PayerType: string;
  /** 付款人姓名 */
  PayerName: string;
  /** 付款人证件类型 (身份证: ID_CARD, 统一社会信用代码: UNIFIED_CREDIT_CODE) */
  PayerIdType: string;
  /** 付款人证件号 */
  PayerIdNo: string;
  /** 付款人常驻国家或地区编码 (见常见问题-国家/地区编码) */
  PayerCountryCode: string;
  /** 付款人联系人名称 */
  PayerContactName?: string;
  /** 付款人联系电话 */
  PayerContactNumber?: string;
  /** 付款人联系邮箱 */
  PayerEmailAddress?: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface ApplyPayerInfoResponse {
  /** 付款人申请结果 */
  Result: ApplyPayerinfoResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyReWithdrawalRequest {
  /** 聚鑫业务类型 */
  BusinessType: number;
  /** 由平台客服提供的计费密钥Id */
  MidasSecretId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 提现信息 */
  Body: WithdrawBill;
  /** 聚鑫业务ID */
  MidasAppId: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface ApplyReWithdrawalResponse {
  /** 重新提现业务订单号 */
  WithdrawOrderId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyReconciliationFileRequest {
  /** 申请的文件类型。__CZ__：充值文件__TX__：提现文件__JY__：交易文件__YE__：余额文件 */
  ApplyFileType: string;
  /** 申请的对账文件日期，格式：yyyyMMdd。 */
  ApplyFileDate: string;
  /** 父账户账号。_平安渠道为资金汇总账号_ */
  BankAccountNumber: string;
  /** 环境名。__release__: 现网环境__sandbox__: 沙箱环境__development__: 开发环境_缺省: release_ */
  MidasEnvironment?: string;
}

declare interface ApplyReconciliationFileResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: ApplyReconciliationFileResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyTradeRequest {
  /** 贸易材料流水号 */
  TradeFileId: string;
  /** 贸易材料订单号 */
  TradeOrderId: string;
  /** 付款人ID */
  PayerId: string;
  /** 收款人姓名 */
  PayeeName: string;
  /** 收款人常驻国家或地区编码 (见常见问题) */
  PayeeCountryCode: string;
  /** 贸易类型 (GOODS: 商品, SERVICE: 服务) */
  TradeType: string;
  /** 交易时间 (格式: yyyyMMdd) */
  TradeTime: string;
  /** 交易币种 */
  TradeCurrency: string;
  /** 交易金额 */
  TradeAmount: number;
  /** 交易名称 (TradeType=GOODS时填写物品名称，可填写多个，格式无要求；TradeType=SERVICE时填写贸易类别，见常见问题-贸易类别) */
  TradeName: string;
  /** 交易数量 (TradeType=GOODS 填写物品数量, TradeType=SERVICE填写服务次数) */
  TradeCount: number;
  /** 货贸承运人 (TradeType=GOODS 必填) */
  GoodsCarrier?: string;
  /** 服贸交易细节 (TradeType=GOODS 必填, 见常见问题-交易细节) */
  ServiceDetail?: string;
  /** 服贸服务时间 (TradeType=GOODS 必填, 见常见问题-服务时间) */
  ServiceTime?: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface ApplyTradeResponse {
  /** 提交贸易材料结果 */
  Result: ApplyTradeResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyWithdrawalRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 用于提现<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SettleAcctNo: string;
  /** 结算账户户名<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SettleAcctName: string;
  /** 币种 RMB */
  CurrencyType: string;
  /** 单位，1：元，2：角，3：分 */
  CurrencyUnit: number;
  /** 金额 */
  CurrencyAmt: string;
  /** 交易网名称 */
  TranWebName: string;
  /** 会员证件类型 */
  IdType: string;
  /** 会员证件号码<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  IdCode: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** 手续费金额 */
  CommissionAmount?: string;
  /** 提现单号，长度32字节 */
  WithdrawOrderId?: string;
}

declare interface ApplyWithdrawalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindAccountRequest {
  /** 主播Id */
  AnchorId: string;
  /** 1 微信企业付款 2 支付宝转账 3 平安银企直连代发转账 */
  TransferType: number;
  /** 收款方标识。微信为open_id；支付宝为会员alipay_user_id;平安为收款方银行账号; */
  AccountNo: string;
  /** 手机号 */
  PhoneNum: string;
}

declare interface BindAccountResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息。 */
  ErrMessage: string;
  /** 该字段为null。 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindAcctRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 1 – 小额转账验证2 – 短信验证3 - 一分钱转账验证，无需再调CheckAcct验证绑卡4 - 银行四要素验证，无需再调CheckAcct验证绑卡每个结算账户每天只能使用一次小额转账验证 */
  BindType: number;
  /** 用于提现<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SettleAcctNo: string;
  /** 结算账户户名<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SettleAcctName: string;
  /** 1 – 本行账户2 – 他行账户 */
  SettleAcctType: number;
  /** 证件类型，见《证件类型》表 */
  IdType: string;
  /** 证件号码<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  IdCode: string;
  /** 开户行名称 */
  AcctBranchName: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 用于短信验证BindType==2时必填<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  Mobile?: string;
  /** 大小额行号，超级网银行号和大小额行号二选一 */
  CnapsBranchId?: string;
  /** 超级网银行号，超级网银行号和大小额行号二选一 */
  EiconBankBranchId?: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** 经办人信息 */
  AgencyClientInfo?: AgencyClientInfo;
}

declare interface BindAcctResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindOpenBankExternalSubMerchantBankAccountRequest {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付 */
  PaymentMethod: string;
  /** 第三方渠道子商户收款方银行卡信息, 为JSON格式字符串。详情见附录-复杂类型。 */
  ExternalSubMerchantBindBankAccountData: string;
  /** 外部申请编号。 */
  OutApplyId: string;
  /** 通知地址。 */
  NotifyUrl?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface BindOpenBankExternalSubMerchantBankAccountResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: BindOpenBankExternalSubMerchantBankAccountResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindOpenBankProfitSharePayeeRequest {
  /** 渠道商户号。代理商/集团ID */
  ChannelMerchantId: string;
  /** 收款人银行账户号。唯一 */
  AccountNo: string;
  /** 渠道名称通联国际: CNP */
  ChannelName: string;
  /** 渠道子商户号。商户ID */
  ChannelSubMerchantId?: string;
  /** 绑定状态通知地址,若为空，即不回调通知。 */
  NotifyUrl?: string;
  /** 分账收款人信息。通联国际必选 */
  ProfitSharePayeeInfo?: OpenBankProfitSharePayeeInfo;
  /** 第三方拓展信息。若无特殊说明，可为空 */
  ExternalProfitSharingData?: string;
  /** 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境 */
  Environment?: string;
}

declare interface BindOpenBankProfitSharePayeeResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误信息。 */
  ErrMessage: string;
  /** 返回结果 */
  Result: BindOpenBankProfitSharePayeeResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindRelateAccReUnionPayRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”（右侧）进行分隔） */
  TranNetMemberCode: string;
  /** STRING(50)，会员的待绑定账户的账号（即 BindRelateAcctUnionPay接口中的“会员的待绑定账户的账号”） */
  MemberAcctNo: string;
  /** STRING(20)，短信验证码（即 BindRelateAcctUnionPay接口中的手机所接收到的短信验证码） */
  MessageCheckCode: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface BindRelateAccReUnionPayResponse {
  /** STRING(52)，见证系统流水号 */
  FrontSeqNo?: string | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindRelateAcctSmallAmountRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔） */
  TranNetMemberCode: string;
  /** STRING(150)，见证子账户的户名（首次绑定的情况下，此字段即为待绑定的提现账户的户名。非首次绑定的情况下，须注意带绑定的提现账户的户名须与留存在后台系统的会员户名一致） */
  MemberName: string;
  /** STRING(5)，会员证件类型（详情见“常见问题”） */
  MemberGlobalType: string;
  /** STRING(32)，会员证件号码 */
  MemberGlobalId: string;
  /** STRING(50)，会员的待绑定账户的账号（提现的银行卡） */
  MemberAcctNo: string;
  /** STRING(10)，会员的待绑定账户的本他行类型（1: 本行; 2: 他行） */
  BankType: string;
  /** STRING(150)，会员的待绑定账户的开户行名称 */
  AcctOpenBranchName: string;
  /** STRING(30)，会员的手机号（手机号须由长度为11位的数字构成） */
  Mobile: string;
  /** STRING(20)，会员的待绑定账户的开户行的联行号（本他行类型为他行的情况下，此字段和下一个字段至少一个不为空） */
  CnapsBranchId?: string;
  /** STRING(20)，会员的待绑定账户的开户行的超级网银行号（本他行类型为他行的情况下，此字段和上一个字段至少一个不为空） */
  EiconBankBranchId?: string;
  /** STRING(1027)，转账方式（1: 往账鉴权(默认值); 2: 来账鉴权） */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface BindRelateAcctSmallAmountResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(1027)，保留域（来账鉴权的方式下，此字段的值为客户需往监管账户转入的金额。在同名子账户绑定的场景下，若返回""VERIFIED""则说明无需验证直接绑定成功） */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindRelateAcctUnionPayRequest {
  /** STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”（右侧）进行分隔） */
  TranNetMemberCode: string;
  /** STRING(150)，见证子账户的户名（首次绑定的情况下，此字段即为待绑定的提现账户的户名。非首次绑定的情况下，须注意带绑定的提现账户的户名须与留存在后台系统的会员户名一致） */
  MemberName: string;
  /** STRING(5)，会员证件类型（详情见“常见问题”） */
  MemberGlobalType: string;
  /** STRING(32)，会员证件号码 */
  MemberGlobalId: string;
  /** STRING(50)，会员的待绑定账户的账号（提现的银行卡） */
  MemberAcctNo: string;
  /** STRING(10)，会员的待绑定账户的本他行类型（1: 本行; 2: 他行） */
  BankType: string;
  /** STRING(150)，会员的待绑定账户的开户行名称（若大小额行号不填则送超级网银号对应的银行名称，若填大小额行号则送大小额行号对应的银行名称） */
  AcctOpenBranchName: string;
  /** STRING(30)，会员的手机号（手机号须由长度为11位的数字构成） */
  Mobile: string;
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(20)，会员的待绑定账户的开户行的联行号（本他行类型为他行的情况下，此字段和下一个字段至少一个不为空） */
  CnapsBranchId?: string;
  /** STRING(20)，会员的待绑定账户的开户行的超级网银行号（本他行类型为他行的情况下，此字段和上一个字段至少一个不为空） */
  EiconBankBranchId?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface BindRelateAcctUnionPayResponse {
  /** STRING(1027)，保留域（在同名子账户绑定的场景下，若返回"VERIFIED"则说明无需验证直接绑定成功） */
  ReservedMsg?: string | null;
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckAcctRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 1 – 小额转账验证2 – 短信验证每个结算账户每天只能使用一次小额转账验证 */
  BindType: number;
  /** 结算账户账号<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SettleAcctNo: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 短信验证码或指令号BindType==2必填，平安渠道必填 */
  CheckCode?: string;
  /** 币种 RMBBindType==1必填 */
  CurrencyType?: string;
  /** 单位1：元，2：角，3：分BindType==1必填 */
  CurrencyUnit?: number;
  /** 金额BindType==1必填 */
  CurrencyAmt?: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface CheckAcctResponse {
  /** 前置流水号，请保存 */
  FrontSeqNo: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckAmountRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔） */
  TranNetMemberCode: string;
  /** STRING(50)，会员的待绑定账户的账号（即 BindRelateAcctSmallAmount接口中的“会员的待绑定账户的账号”） */
  TakeCashAcctNo: string;
  /** STRING(20)，鉴权验证金额（即 BindRelateAcctSmallAmount接口中的“会员的待绑定账户收到的验证金额。原小额转账鉴权方式为来账鉴权的情况下此字段须赋值为0.00） */
  AuthAmt: string;
  /** STRING(3)，币种（默认为RMB） */
  Ccy: string;
  /** STRING(1027)，原小额转账方式（1: 往账鉴权，此为默认值; 2: 来账鉴权） */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface CheckAmountResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求） */
  FrontSeqNo?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseCloudOrderRequest {
  /** 米大师分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户Id，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 开发者订单号 */
  OutTradeNo: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  MidasEnvironment?: string;
}

declare interface CloseCloudOrderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseOpenBankPaymentOrderRequest {
  /** 渠道商户ID，云企付平台下发给外部接入平台。 */
  ChannelMerchantId: string;
  /** 外部商户订单号，与ChannelOrderId不能同时为空 */
  OutOrderId?: string;
  /** 云企付平台订单号，与OutOrderId不能同时为空 */
  ChannelOrderId?: string;
  /** 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境 */
  Environment?: string;
}

declare interface CloseOpenBankPaymentOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息 */
  ErrMessage: string;
  /** 关单响应对象 */
  Result: CloseOpenBankPaymentOrderResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseOrderRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户ID，长度不小于5位， 仅支持字母和数字的组合 */
  UserId: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 业务订单号，OutTradeNo ， TransactionId二选一，不能都为空,优先使用 OutTradeNo */
  OutTradeNo?: string;
  /** 聚鑫订单号，OutTradeNo ， TransactionId二选一，不能都为空,优先使用 OutTradeNo */
  TransactionId?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface CloseOrderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConfirmOrderRequest {
  /** 分配给商户的AppId */
  MerchantAppId: string;
  /** 平台流水号。消费订单发起成功后，返回的平台唯一订单号。 */
  OrderNo: string;
}

declare interface ConfirmOrderResponse {
  /** 分配给商户的AppId */
  MerchantAppId: string;
  /** 平台流水号。消费订单发起成功后，返回的平台唯一订单号。 */
  OrderNo: string;
  /** 订单确认状态。0-确认失败1-确认成功 2-可疑状态 */
  Status: string;
  /** 订单确认状态描述 */
  Description: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ContractOrderRequest {
  /** ISO 货币代码，CNY */
  CurrencyType: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 支付订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  OutTradeNo: string;
  /** 商品详情，需要URL编码 */
  ProductDetail: string;
  /** 商品ID，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  ProductId: string;
  /** 商品名称，需要URL编码 */
  ProductName: string;
  /** 支付金额，单位： 分 */
  TotalAmt: number;
  /** 用户ID，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 银行真实渠道.如:bank_pingan */
  RealChannel: string;
  /** 原始金额 */
  OriginalAmt: number;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 签约通知地址 */
  ContractNotifyUrl: string;
  /** Web端回调地址 */
  CallbackUrl?: string;
  /** 指定支付渠道： wechat：微信支付 qqwallet：QQ钱包 bank：网银支付 只有一个渠道时需要指定 */
  Channel?: string;
  /** 透传字段，支付成功回调透传给应用，用于业务透传自定义内容 */
  Metadata?: string;
  /** 购买数量，不传默认为1 */
  Quantity?: number;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId?: string;
  /** 子订单信息列表，格式：子订单号、子应用ID、金额。 压缩后最长不可超过65535字节(去除空格，换行，制表符等无意义字符)注：接入银行或其他支付渠道服务商模式下，必传 */
  SubOrderList?: ContractOrderInSubOrder[];
  /** 结算应收金额，单位：分 */
  TotalMchIncome?: number;
  /** 平台应收金额，单位：分 */
  TotalPlatformIncome?: number;
  /** 微信公众号/小程序支付时为必选，需要传微信下的openid */
  WxOpenId?: string;
  /** 在服务商模式下，微信公众号/小程序支付时wx_sub_openid和wx_openid二选一 */
  WxSubOpenId?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** 微信商户应用ID */
  WxAppId?: string;
  /** 微信商户子应用ID */
  WxSubAppId?: string;
  /** 支付通知地址 */
  PaymentNotifyUrl?: string;
  /** 传入调用方在Midas注册签约信息时获得的ContractSceneId。若未在Midas注册签约信息，则传入ExternalContractData。注意：ContractSceneId与ExternalContractData必须二选一传入其中一个 */
  ContractSceneId?: string;
  /** 需要按照各个渠道的扩展签约信息规范组装好该字段。若未在Midas注册签约信息，则传入该字段。注意：ContractSceneId与ExternalContractData必须二选一传入其中一个 */
  ExternalContractData?: string;
  /** 外部签约协议号，唯一标记一个签约关系。仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  OutContractCode?: string;
  /** 透传给第三方渠道的附加数据 */
  AttachData?: string;
  /** 展示用的签约用户名称，若不传入时，默认取UserId */
  ContractDisplayName?: string;
}

declare interface ContractOrderResponse {
  /** 支付金额，单位： 分 */
  TotalAmt: number;
  /** 应用支付订单号 */
  OutTradeNo: string;
  /** 支付参数透传给聚鑫SDK（原文透传给SDK即可，不需要解码） */
  PayInfo: string;
  /** 聚鑫的交易订单号 */
  TransactionId: string;
  /** 外部签约协议号 */
  OutContractCode: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAcctRequest {
  /** 聚鑫平台分配的支付MidasAppId */
  MidasAppId: string;
  /** 业务平台的子商户ID，唯一 */
  SubMchId: string;
  /** 子商户名称 */
  SubMchName: string;
  /** 子商户地址 */
  Address: string;
  /** 子商户联系人<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  Contact: string;
  /** 联系人手机号<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  Mobile: string;
  /** 邮箱 <敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  Email: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 子商户类型：个人: personal企业: enterprise个体工商户: individual缺省: enterprise */
  SubMchType?: string;
  /** 不填则默认子商户名称 */
  ShortName?: string;
  /** 子商户会员类型：general: 普通子账户merchant: 商户子账户缺省: general */
  SubMerchantMemberType?: string;
  /** 子商户密钥<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SubMerchantKey?: string;
  /** 子商户私钥<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SubMerchantPrivateKey?: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 银行生成的子商户账户，已开户的场景需要录入 */
  SubAcctNo?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** 店铺名称企业、个体工商户必输 */
  SubMerchantStoreName?: string;
  /** 公司信息 */
  OrganizationInfo?: OrganizationInfo;
  /** 子商户证件类型1 - 身份证3 - 回乡证4 - 中国护照5 - 台胞证19 - 外国护照52 - 组织机构代码证68 - 营业执照 73 - 统一社会信用代码 */
  SubMerchantIdType?: string;
  /** 子商户证件号码<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SubMerchantIdCode?: string;
}

declare interface CreateAcctResponse {
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 银行生成的子商户账户 */
  SubAcctNo: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentTaxPaymentInfosRequest {
  /** 代理商ID */
  AgentId: string;
  /** 平台渠道 */
  Channel: number;
  /** 类型。0-视同，1-个体工商户 */
  Type: number;
  /** 源电子凭证下载地址 */
  RawElectronicCertUrl: string;
  /** 文件名 */
  FileName: string;
  /** 完税信息 */
  AgentTaxPaymentInfos: AgentTaxPayment[];
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface CreateAgentTaxPaymentInfosResponse {
  /** 代理商完税证明批次信息 */
  AgentTaxPaymentBatch: AgentTaxPaymentBatch;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAnchorRequest {
  /** 主播业务ID，唯一 */
  AnchorUid: string;
  /** 主播姓名 */
  AnchorName: string;
  /** 主播电话_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密 */
  AnchorPhone: string;
  /** 主播邮箱_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密 */
  AnchorEmail: string;
  /** 主播地址_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密 */
  AnchorAddress: string;
  /** 主播身份证号_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密 */
  AnchorIdNo: string;
  /** 主播类型__KMusic__:全民K歌__QMusic__:QQ音乐__WeChat__:微信视频号 */
  AnchorType: string;
  /** 主播扩展信息 */
  AnchorExtendInfo?: AnchorExtendInfo[];
}

declare interface CreateAnchorResponse {
  /** 主播ID */
  AnchorId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchPaymentRequest {
  /** 1 微信企业付款 2 支付宝转账 3 平安银企直连代发转账 */
  TransferType: number;
  /** 转账详情 */
  RecipientList: CreateBatchPaymentRecipient[];
  /** 请求预留字段 */
  ReqReserved?: string;
  /** 回调Url */
  NotifyUrl?: string;
}

declare interface CreateBatchPaymentResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息。 */
  ErrMessage: string;
  /** 返回响应 */
  Result: CreateBatchPaymentData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudSubMerchantRequest {
  /** 米大师分配的支付主MidasAppId，根应用Id。 */
  MidasAppId: string;
  /** 父应用Id。 */
  ParentAppId: string;
  /** 子商户名。 */
  SubMchName: string;
  /** 子商户描述。 */
  SubMchDescription: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  MidasEnvironment?: string;
  /** 子应用Id，为空则自动创建子应用id。 */
  SubAppId?: string;
  /** 子商户名缩写。 */
  SubMchShortName?: string;
  /** 业务平台自定义的子商户Id，唯一。 */
  OutSubMerchantId?: string;
}

declare interface CreateCloudSubMerchantResponse {
  /** 子应用ID */
  SubAppId: string | null;
  /** 渠道子商户ID */
  ChannelSubMerchantId: string | null;
  /** 层级，从0开始 */
  Level: number | null;
  /** 渠道应用ID */
  ChannelAppId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustAcctIdRequest {
  /** STRING(2)，功能标志（1: 开户; 3: 销户） */
  FunctionFlag: string;
  /** STRING(50)，资金汇总账号（即收单资金归集入账的账号） */
  FundSummaryAcctNo: string;
  /** STRING(32)，交易网会员代码（平台端的用户ID，需要保证唯一性，可数字字母混合，如HY_120） */
  TranNetMemberCode: string;
  /** STRING(10)，会员属性（00-普通子账户(默认); SH-商户子账户） */
  MemberProperty: string;
  /** STRING(30)，手机号码 */
  Mobile: string;
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** String(2)，是否为自营业务（0位非自营，1为自营） */
  SelfBusiness: boolean;
  /** String(64)，联系人 */
  ContactName: string;
  /** String(64)，子账户名称 */
  SubAcctName: string;
  /** String(64)，子账户简称 */
  SubAcctShortName: string;
  /** String(4)，子账户类型（0: 个人子账户; 1: 企业子账户） */
  SubAcctType: number;
  /** STRING(150)，用户昵称 */
  UserNickname?: string;
  /** STRING(150)，邮箱 */
  Email?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface CreateCustAcctIdResponse {
  /** STRING(50)，见证子账户的账号（平台需要记录下来，后续所有接口交互都会用到） */
  SubAcctNo?: string | null;
  /** STRING(1027)，保留域（需要开通智能收款，此处返回智能收款账号，正常情况下返回空） */
  ReservedMsg?: string | null;
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExternalAnchorRequest {
  /** 平台业务系统唯一标示的主播id */
  Uid: string;
  /** 主播名称 */
  Name: string;
  /** 身份证号 */
  IdNo: string;
  /** 身份证正面图片下载链接 */
  IdCardFront?: string;
  /** 身份证反面图片下载链接 */
  IdCardReverse?: string;
  /** 指定分配的代理商ID */
  AgentId?: string;
}

declare interface CreateExternalAnchorResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息。 */
  ErrMessage: string;
  /** 返回响应 */
  Result: CreateExternalAnchorData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlexPayeeRequest {
  /** 用户外部业务ID */
  OutUserId: string;
  /** 姓名 */
  Name: string;
  /** 证件号 */
  IdNo: string;
  /** 账户名称 */
  AccountName: string;
  /** 服务商ID */
  ServiceProviderId: string;
  /** 计税信息 */
  TaxInfo: PayeeTaxInfo;
  /** 证件类型0:身份证1:社会信用代码 */
  IdType: number;
  /** 备注 */
  Remark?: string;
  /** 手机号码 */
  PhoneNo?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface CreateFlexPayeeResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: CreateFlexPayeeResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInvoiceRequest {
  /** 开票平台ID。0：高灯，1：票易通 */
  InvoicePlatformId: number;
  /** 抬头类型：1：个人/政府事业单位；2：企业 */
  TitleType: number;
  /** 购方名称 */
  BuyerTitle: string;
  /** 业务开票号 */
  OrderId: string;
  /** 含税总金额（单位为分） */
  AmountHasTax: number;
  /** 总税额（单位为分） */
  TaxAmount: number;
  /** 不含税总金额（单位为分）。InvoicePlatformId 为1时，传默认值-1 */
  AmountWithoutTax: number;
  /** 销方纳税人识别号 */
  SellerTaxpayerNum: string;
  /** 销方名称。（不填默认读取商户注册时输入的信息） */
  SellerName?: string;
  /** 销方地址。（不填默认读取商户注册时输入的信息） */
  SellerAddress?: string;
  /** 销方电话。（不填默认读取商户注册时输入的信息） */
  SellerPhone?: string;
  /** 销方银行名称。（不填默认读取商户注册时输入的信息） */
  SellerBankName?: string;
  /** 销方银行账号。（不填默认读取商户注册时输入的信息） */
  SellerBankAccount?: string;
  /** 购方纳税人识别号（购方票面信息）,若抬头类型为2时，必传 */
  BuyerTaxpayerNum?: string;
  /** 购方地址。开具专用发票时必填 */
  BuyerAddress?: string;
  /** 购方银行名称。开具专用发票时必填 */
  BuyerBankName?: string;
  /** 购方银行账号。开具专用发票时必填 */
  BuyerBankAccount?: string;
  /** 购方电话。开具专用发票时必填 */
  BuyerPhone?: string;
  /** 收票人邮箱。若填入，会收到发票推送邮件 */
  BuyerEmail?: string;
  /** 收票人手机号。若填入，会收到发票推送短信 */
  TakerPhone?: string;
  /** 开票类型：1：增值税专用发票；2：增值税普通发票；3：增值税电子发票；4：增值税卷式发票；5：区块链电子发票。若该字段不填，或值不为1-5，则认为开具”增值税电子发票” */
  InvoiceType?: number;
  /** 发票结果回传地址 */
  CallbackUrl?: string;
  /** 开票人姓名。（不填默认读取商户注册时输入的信息） */
  Drawer?: string;
  /** 收款人姓名。（不填默认读取商户注册时输入的信息） */
  Payee?: string;
  /** 复核人姓名。（不填默认读取商户注册时输入的信息） */
  Checker?: string;
  /** 税盘号 */
  TerminalCode?: string;
  /** 征收方式。开具差额征税发票时必填2。开具普通征税发票时为空 */
  LevyMethod?: string;
  /** 差额征税扣除额（单位为分） */
  Deduction?: number;
  /** 备注（票面信息） */
  Remark?: string;
  /** 项目商品明细 */
  Items?: CreateInvoiceItem[];
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
  /** 撤销部分商品。0-不撤销，1-撤销 */
  UndoPart?: number;
  /** 订单下单时间（格式 YYYYMMDD） */
  OrderDate?: string;
  /** 订单级别折扣（单位为分） */
  Discount?: number;
  /** 门店编码 */
  StoreNo?: string;
  /** 开票渠道。0：APP渠道，1：线下渠道，2：小程序渠道。不填默认为APP渠道 */
  InvoiceChannel?: number;
}

declare interface CreateInvoiceResponse {
  /** 发票开具结果 */
  Result: CreateInvoiceResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInvoiceV2Request {
  /** 开票平台ID。0：高灯，1：票易通 */
  InvoicePlatformId: number;
  /** 抬头类型：1：个人/政府事业单位；2：企业 */
  TitleType: number;
  /** 购方名称 */
  BuyerTitle: string;
  /** 业务开票号 */
  OrderId: string;
  /** 含税总金额（单位为分） */
  AmountHasTax: number;
  /** 总税额（单位为分） */
  TaxAmount: number;
  /** 不含税总金额（单位为分）。InvoicePlatformId 为1时，传默认值-1 */
  AmountWithoutTax: number;
  /** 销方纳税人识别号 */
  SellerTaxpayerNum: string;
  /** 销方名称。（不填默认读取商户注册时输入的信息） */
  SellerName?: string;
  /** 销方地址。（不填默认读取商户注册时输入的信息） */
  SellerAddress?: string;
  /** 销方电话。（不填默认读取商户注册时输入的信息） */
  SellerPhone?: string;
  /** 销方银行名称。（不填默认读取商户注册时输入的信息） */
  SellerBankName?: string;
  /** 销方银行账号。（不填默认读取商户注册时输入的信息） */
  SellerBankAccount?: string;
  /** 购方纳税人识别号（购方票面信息）,若抬头类型为2时，必传 */
  BuyerTaxpayerNum?: string;
  /** 购方地址。开具专用发票时必填 */
  BuyerAddress?: string;
  /** 购方银行名称。开具专用发票时必填 */
  BuyerBankName?: string;
  /** 购方银行账号。开具专用发票时必填 */
  BuyerBankAccount?: string;
  /** 购方电话。开具专用发票时必填 */
  BuyerPhone?: string;
  /** 收票人邮箱。若填入，会收到发票推送邮件 */
  BuyerEmail?: string;
  /** 收票人手机号。若填入，会收到发票推送短信 */
  TakerPhone?: string;
  /** 开票类型：1：增值税专用发票；2：增值税普通发票；3：增值税电子发票；4：增值税卷式发票；5：区块链电子发票。若该字段不填，或值不为1-5，则认为开具”增值税电子发票” */
  InvoiceType?: number;
  /** 发票结果回传地址 */
  CallbackUrl?: string;
  /** 开票人姓名。（不填默认读取商户注册时输入的信息） */
  Drawer?: string;
  /** 收款人姓名。（不填默认读取商户注册时输入的信息） */
  Payee?: string;
  /** 复核人姓名。（不填默认读取商户注册时输入的信息） */
  Checker?: string;
  /** 税盘号 */
  TerminalCode?: string;
  /** 征收方式。开具差额征税发票时必填2。开具普通征税发票时为空 */
  LevyMethod?: string;
  /** 差额征税扣除额（单位为分） */
  Deduction?: number;
  /** 备注（票面信息） */
  Remark?: string;
  /** 项目商品明细 */
  Items?: CreateInvoiceItem[];
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
  /** 撤销部分商品。0-不撤销，1-撤销 */
  UndoPart?: number;
  /** 订单下单时间（格式 YYYYMMDD） */
  OrderDate?: string;
  /** 订单级别折扣（单位为分） */
  Discount?: number;
  /** 门店编码 */
  StoreNo?: string;
  /** 开票渠道。0：APP渠道，1：线下渠道，2：小程序渠道。不填默认为APP渠道 */
  InvoiceChannel?: number;
}

declare interface CreateInvoiceV2Response {
  /** 发票开具结果 */
  Result: CreateInvoiceResultV2 | null;
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMerchantRequest {
  /** 开票平台ID */
  InvoicePlatformId: number;
  /** 企业名称 */
  TaxpayerName: string;
  /** 销方纳税人识别号 */
  TaxpayerNum: string;
  /** 注册企业法定代表人名称 */
  LegalPersonName: string;
  /** 联系人 */
  ContactsName: string;
  /** 联系人手机号 */
  Phone: string;
  /** 不包含省市名称的地址 */
  Address: string;
  /** 地区编码 */
  RegionCode: number;
  /** 市（地区）名称 */
  CityName: string;
  /** 开票人 */
  Drawer: string;
  /** 税务登记证图片（Base64）字符串，需小于 3M */
  TaxRegistrationCertificate: string;
  /** 联系人邮箱地址 */
  Email?: string;
  /** 企业电话 */
  BusinessMobile?: string;
  /** 银行名称 */
  BankName?: string;
  /** 银行账号 */
  BankAccount?: string;
  /** 复核人 */
  Reviewer?: string;
  /** 收款人 */
  Payee?: string;
  /** 注册邀请码 */
  RegisterCode?: string;
  /** 不填默认为1，有效状态0：表示无效；1:表示有效；2:表示禁止开蓝票；3:表示禁止冲红。 */
  State?: string;
  /** 接收推送的消息地址 */
  CallbackUrl?: string;
  /** 接入环境。沙箱环境填 sandbox。 */
  Profile?: string;
}

declare interface CreateMerchantResponse {
  /** 商户注册结果 */
  Result: CreateMerchantResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankAggregatedSubMerchantRegistrationRequest {
  /** 外部进件序列号。 */
  OutRegistrationNo: string;
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 外部子商户ID。 */
  OutSubMerchantId: string;
  /** 渠道名称。详见附录-云企付枚举类说明-ChannelName。TENPAY: 商企付WECHAT: 微信支付ALIPAY: 支付宝HELIPAY:合利宝 */
  ChannelName: string;
  /** 外部子商户类型。ENTERPRISE：企业商户 INSTITUTION：事业单位商户 INDIVIDUALBISS：个体工商户 PERSON：个人商户(小微商户) SUBJECT_TYPE_OTHERS：其他组织 */
  OutSubMerchantType: string;
  /** 外部子商户名称。HELIPAY渠道(长度不能小于5大于150)。 */
  OutSubMerchantName: string;
  /** 商户法人代表信息。 */
  LegalPersonInfo: LegalPersonInfo;
  /** 营业证件信息。 */
  BusinessLicenseInfo: BusinessLicenseInfo;
  /** 支付渠道子商户进件信息。json字符串，详情见附录-复杂类型-InterConnectionSubMerchantData。 */
  InterConnectionSubMerchantData: string;
  /** 支付方式。详见附录-云企付枚举类说明-PaymentMethod。合利宝渠道不需要传。 */
  PaymentMethod?: string;
  /** 外部子商户简称。HELIPAY渠道必传(长度不能小于2大于20)。 */
  OutSubMerchantShortName?: string;
  /** 外部子商户描述。 */
  OutSubMerchantDescription?: string;
  /** 通知地址。 */
  NotifyUrl?: string;
  /** 相关自然人信息列表。HELIPAY渠道必传业务联系人。 */
  NaturalPersonList?: NaturalPersonInfo[];
  /** 商户结算信息。HELIPAY渠道必传。 */
  SettleInfo?: SettleInfo;
  /** 外部子商户其他公用扩展信息。HELIPAY渠道必传。 */
  OutSubMerchantExtensionInfo?: OutSubMerchantExtensionInfo;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankAggregatedSubMerchantRegistrationResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string | null;
  /** 返回结果。 */
  Result: CreateOpenBankExternalAggregatedSubMerchantRegistrationResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankExternalSubMerchantAccountBookRequest {
  /** 外部账本ID */
  OutAccountBookId: string;
  /** 渠道商户ID */
  ChannelMerchantId: string;
  /** 渠道子商户ID */
  ChannelSubMerchantId: string;
  /** 渠道名称。目前只支持支付宝__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。目前只支持安心发支付__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付__SAFT_ISV__: 安心发支付 */
  PaymentMethod: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankExternalSubMerchantAccountBookResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: CreateExternalAccountBookResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankExternalSubMerchantRegistrationRequest {
  /** 外部进件序列号。 */
  OutRegistrationNo: string;
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 外部子商户ID,平台侧商户唯一ID。 */
  OutSubMerchantId: string;
  /** 渠道名称。详见附录-云企付枚举类说明-ChannelName。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。详见附录-云企付枚举类说明-PaymentMethod。__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付 */
  PaymentMethod: string;
  /** 社会信用代码。 */
  BusinessLicenseNumber: string;
  /** 外部子商户名称。 */
  OutSubMerchantName: string;
  /** 法人姓名。 */
  LegalName?: string;
  /** 外部子商户简称。 */
  OutSubMerchantShortName?: string;
  /** 外部子商户描述。 */
  OutSubMerchantDescription?: string;
  /** 第三方子商户进件信息，为JSON格式字符串。详情见附录-复杂类型。 */
  ExternalSubMerchantRegistrationData?: string;
  /** 通知地址。 */
  NotifyUrl?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankExternalSubMerchantRegistrationResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: CreateOpenBankExternalSubMerchantRegistrationResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankGlobalPaymentOrderRequest {
  /** 渠道商户号 */
  ChannelMerchantId: string;
  /** 渠道名称 */
  ChannelName: string;
  /** 付款方式 */
  PayType: string;
  /** 外部商户订单号,只能是数字、大小写字母，且在同一个接入平台下唯一 */
  OutOrderId: string;
  /** 付款金额，单位分 */
  TotalAmount: number;
  /** 支付币种，参考附录：货币代码 */
  Currency: string;
  /** 渠道子商户号 */
  ChannelSubMerchantId?: string;
  /** 支付成功回调地址。 */
  NotifyUrl?: string;
  /** 前端跳转地址。通联支付成功后，支付网关跳回商户的地址 */
  FrontUrl?: string;
  /** 网站语言。收银台显示语言，见附录网站语言 */
  FrontLanguage?: string;
  /** 付款备注 */
  Remark?: string;
  /** 第三方拓展信息信息 */
  ExternalPaymentData?: string;
  /** 商品信息 */
  GoodsInfos?: OpenBankGoodsInfo[];
  /** 邮寄信息 */
  ShippingInfo?: OpenBankShippingInfo;
  /** 账单信息 */
  BillingInfo?: OpenBankBillingInfo;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface CreateOpenBankGlobalPaymentOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 统一下单响应对象。 */
  Result: CreateOpenBankUnifiedOrderPaymentResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankMerchantRequest {
  /** 外部商户ID。 */
  OutMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付 */
  ChannelName: string;
  /** 外部商户名称。 */
  OutMerchantName: string;
  /** 第三方渠道商户信息。详情见附录-复杂类型。 */
  ExternalMerchantInfo: string;
  /** 外部商户简称。 */
  OutMerchantShortName?: string;
  /** 外部商户描述 */
  OutMerchantDescription?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankMerchantResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: CreateOpenBankMerchantResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankPaymentOrderRequest {
  /** 云企付渠道商户号。外部接入平台入驻云企付平台后下发。 */
  ChannelMerchantId: string;
  /** 渠道名称。详见附录-云企付枚举类说明-ChannelName。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝__HUIFU__: 汇付斗拱 */
  ChannelName: string;
  /** 付款方式。详见附录-云企付枚举类说明-PaymentMethod。__EBANK_PAYMENT__:B2B EBank付款__OPENBANK_PAYMENT__:B2C openbank付款__SAFT_ISV__:支付宝安心发__TRANS_TO_CHANGE__: 微信支付转账到零钱v2__TRANS_TO_CHANGE_V3__: 微信支付转账到零钱v3__ONLINEBANK__: 汇付网银 */
  PaymentMethod: string;
  /** 付款模式。默认直接支付，如__DIRECT__:直接支付__FREEZE__:担保支付 */
  PaymentMode: string;
  /** 外部订单号,只能是数字、大小写字母，且在同一个接入平台下唯一，限定长度40位。 */
  OutOrderId: string;
  /** 付款金额，单位分。 */
  TotalAmount: number;
  /** 固定值CNY。 */
  Currency: string;
  /** 付款方信息。 */
  PayerInfo: OpenBankPayerInfo;
  /** 收款方信息。 */
  PayeeInfo: OpenBankPayeeInfo;
  /** 通知地址，如www.test.com。 */
  NotifyUrl?: string;
  /** 订单过期时间，yyyy-MM-dd HH:mm:ss格式。 */
  ExpireTime?: string;
  /** 前端成功回调URL。条件可选。 */
  FrontUrl?: string;
  /** 前端刷新 URL。条件可选。 */
  RefreshUrl?: string;
  /** 设备信息，条件可选。 */
  SceneInfo?: OpenBankSceneInfo;
  /** 商品信息，条件可选。 */
  GoodsInfo?: OpenBankGoodsInfo;
  /** 附加信息，查询时原样返回。 */
  Attachment?: string;
  /** 若不上传，即使用默认值无需分润__NO_NEED_SHARE__：无需分润；__SHARE_BY_INFO__：分润时指定金额，此时如果分润信息 ProfitShareInfo为空，只冻结，不分账给其他商户；需要调用解冻接口。__SHARE_BY_API__：后续调用分润接口决定分润金额 */
  ProfitShareFlag?: string;
  /** 分润信息，配合ProfitShareFlag使用。 */
  ProfitShareInfoList?: OpenBankProfitShareInfo[];
  /** 商企付-担保支付（PaymentMode为 FREEZE ）时需设置该参数 */
  SettlementRulesInfo?: OpenBankSettlementRulesInfo;
  /** 底层支付渠道特殊字段，若无特殊说明时，可以为空 */
  ExternalPaymentData?: string;
  /** 备注信息。 */
  Remark?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface CreateOpenBankPaymentOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 统一下单响应对象。 */
  Result: CreateOpenBankOrderPaymentResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankRechargeOrderRequest {
  /** 云企付渠道商户号。外部接入平台入驻云企付平台后下发。 */
  ChannelMerchantId: string;
  /** 外部订单号,只能是数字、大小写字母，且在同一个接入平台下唯一，限定长度40位。 */
  OutOrderId: string;
  /** 付款金额，单位分。 */
  TotalAmount: number;
  /** 固定值CNY。 */
  Currency: string;
  /** 订单过期时间，yyyy-MM-dd HH:mm:ss格式。 */
  ExpireTime: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  PaymentMethod: string;
  /** 收款方信息。 */
  PayeeInfo: OpenBankRechargePayeeInfo;
  /** 渠道子商户号 */
  ChannelSubMerchantId: string;
  /** 通知地址，如www.test.com。 */
  NotifyUrl?: string;
  /** 备注信息。限制200个字符。 */
  Remark?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankRechargeOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 充值响应对象 */
  Result: CreateOpenBankOrderRechargeResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankSubMerchantRateConfigureRequest {
  /** 渠道进件序列号。填写子商户进件返回的渠道进件编号。 */
  ChannelRegistrationNo: string;
  /** 外部产品费率申请序列号。 */
  OutProductFeeNo: string;
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。详见附录-云企付枚举类说明-ChannelName。 */
  ChannelName: string;
  /** 支付类型。SWIPE:刷卡SCAN:扫码WAP:WAPPUBLIC:公众号支付SDK:SDKMINI_PROGRAM:小程序注意：HELIPAY渠道传SDK。 */
  PayType: string;
  /** 支付渠道。ALIPAY：支付宝 WXPAY：微信支付 UNIONPAY：银联 */
  PayChannel: string;
  /** 计费模式。SINGLE：按单笔金额计费RATIO：按单笔费率计费 RANGE：按分段区间计费 */
  FeeMode: string;
  /** 费用值，单位（0.01%或分）。 */
  FeeValue: number;
  /** 支付方式。详见附录-云企付枚举类说明-PaymentMethod。HELIPAY渠道不需要传入。 */
  PaymentMethod?: string;
  /** 最低收费金额，单位（分）。 */
  MinFee?: number;
  /** 最高收费金额，单位（分）。 */
  MaxFee?: number;
  /** 通知地址。 */
  NotifyUrl?: string;
  /** 分段计费区间列表。 */
  FeeRangeList?: FeeRangInfo[];
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankSubMerchantRateConfigureResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string | null;
  /** 返回结果。 */
  Result: CreateOpenBankSubMerchantRateConfigureResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankUnifiedOrderRequest {
  /** 渠道商户号。 */
  ChannelMerchantId: string;
  /** 渠道名称。 */
  ChannelName: string;
  /** 支付产品类型。被扫（扫码）：SWIPE, 主扫（刷卡）：SCAN, H5：WAP, 公众号：PUBLIC, APP-SDK：SDK, 小程序：MINI_PROGRAM, 快捷支付：QUICK, 网银支付：ONLINE_BANK。 */
  PayType: string;
  /** 外部商户订单号。只能是数字、大小写字母，且在同一个接入平台下唯一。 */
  OutOrderId: string;
  /** 交易金额，单位分。 */
  TotalAmount: number;
  /** 币种。固定：CNY。 */
  Currency: string;
  /** 渠道子商户号。 */
  ChannelSubMerchantId?: string;
  /** 实际支付渠道。没有则无需填写。如支付宝 ALIPAY微信支付 WXPAY银联 UNIONPAY一般在间连模式下使用。 */
  PayChannel?: string;
  /** 设备信息。 */
  SceneInfo?: OpenBankSceneInfo;
  /** 分账信息列表。 */
  ProfitShareInfoList?: OpenBankProfitShareInfo[];
  /** 订单标题。 */
  OrderSubject?: string;
  /** 商品信息。 */
  GoodsDetail?: string;
  /** 超时时间。 */
  ExpireTime?: string;
  /** 支付成功回调地址。 */
  NotifyUrl?: string;
  /** 支付成功前端跳转URL。 */
  FrontUrl?: string;
  /** 订单附加信息，查询或者回调的时候原样返回。 */
  Attachment?: string;
  /** 第三方渠道扩展字段。见附录-复杂类型。未作特殊说明，则无需传入。 */
  ExternalPaymentData?: string;
  /** 备注。 */
  Remark?: string;
  /** 门店信息。 */
  StoreInfo?: OpenBankStoreInfo;
  /** 支付限制。 */
  PayLimitInfo?: OpenBankPayLimitInfo;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankUnifiedOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 统一下单响应对象。 */
  Result: CreateOpenBankOrderPaymentResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpenBankVerificationOrderRequest {
  /** 云企付渠道商户号。外部接入平台入驻云企付平台后下发。 */
  ChannelMerchantId: string;
  /** 外部核销申请订单号 */
  OutVerificationId: string;
  /** 核销金额，单位分 */
  VerificationAmount: number;
  /** 外部支付订单号。调用创建支付订单时，下单支付时的外部订单号。与ChannelOrderId不能同时为空。 */
  OutOrderId?: string;
  /** 云企付渠道订单号。调用创建支付订单时，下单支付时的云企付渠道订单号。与OutOrderId不能同时为空。 */
  ChannelOrderId?: string;
  /** 核销成功回调地址。若不上送，则不回调通知。 */
  NotifyUrl?: string;
  /** 备注。 */
  Remark?: string;
  /** 第三方支付渠道需要额外上送字段。详情见附录描述。 */
  ExternalVerificationData?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface CreateOpenBankVerificationOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 核销申请响应对象。 */
  Result: CreateOpenBankVerificationResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrderRequest {
  /** 渠道编号。ZSB2B：招商银行B2B。 */
  ChannelCode: string;
  /** 进件成功后返给商户方的 AppId。 */
  MerchantAppId: string;
  /** 交易金额。单位：元 */
  Amount: string;
  /** 商户流水号。商户唯一订单号由字母或数字组成。 */
  TraceNo: string;
  /** 通知地址。商户接收交易结果的通知地址。 */
  NotifyUrl: string;
  /** 返回地址。支付成功后，页面将跳 转返回到商户的该地址。 */
  ReturnUrl: string;
}

declare interface CreateOrderResponse {
  /** 进件成功后返给商户方的AppId。 */
  MerchantAppId: string;
  /** 商户流水号，商户唯一订单号由字母或数字组成。 */
  TraceNo: string;
  /** 平台流水号，若下单成功则返回。 */
  OrderNo: string;
  /** 支付页面跳转地址，若下单成功则返回。 */
  PayUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePayMerchantRequest {
  /** 平台编号 */
  PlatformCode: string;
  /** 渠道方收款商户编号，由渠道方(银行)提 供。 */
  ChannelMerchantNo: string;
  /** 是否需要向渠道进行 商户信息验证 1:验证0:不验证 */
  ChannelCheckFlag: string;
  /** 收款商户名称 */
  MerchantName: string;
  /** 是否开通 B2B 支付 1:开通 0:不开通 缺省:1 */
  BusinessPayFlag?: string;
}

declare interface CreatePayMerchantResponse {
  /** 分配给商户的 AppId。该 AppId 为后续各项 交易的商户标识。 */
  MerchantAppId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePayRollPreOrderRequest {
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一 */
  AuthNumber: string;
  /** 该劳务活动的项目名称 */
  ProjectName: string;
  /** 该工人所属的用工企业 */
  CompanyName: string;
  /** 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatAppId?: string;
  /** 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatSubAppId?: string;
}

declare interface CreatePayRollPreOrderResponse {
  /** 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一 */
  AuthNumber: string;
  /** Token有效时间，单位秒 */
  ExpireTime: number;
  /** 微信服务商商户的商户号，由微信支付生成并下发 */
  MerchantId: string;
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** Token值 */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePayRollPreOrderWithAuthRequest {
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一 */
  AuthNumber: string;
  /** 该劳务活动的项目名称 */
  ProjectName: string;
  /** 该工人所属的用工企业 */
  CompanyName: string;
  /** 用户实名信息，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml) */
  UserName: string;
  /** 用户证件号，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml) */
  IdNo: string;
  /** 微工卡服务仅支持用于与商户有用工关系的用户，需明确用工类型；参考值：LONG_TERM_EMPLOYMENT：长期用工，SHORT_TERM_EMPLOYMENT： 短期用工，COOPERATION_EMPLOYMENT：合作关系 */
  EmploymentType: string;
  /** 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatAppId?: string;
  /** 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatSubAppId?: string;
}

declare interface CreatePayRollPreOrderWithAuthResponse {
  /** 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一 */
  AuthNumber: string;
  /** Token有效时间，单位秒 */
  ExpireTime: number;
  /** 微信服务商商户的商户号，由微信支付生成并下发 */
  MerchantId: string;
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** Token值 */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePayRollTokenRequest {
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** 用户实名信息，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml) */
  UserName: string;
  /** 用户证件号，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml) */
  IdNo: string;
  /** 微工卡服务仅支持用于与商户有用工关系的用户，需明确用工类型；参考值：LONG_TERM_EMPLOYMENT：长期用工，SHORT_TERM_EMPLOYMENT： 短期用工，COOPERATION_EMPLOYMENT：合作关系 */
  EmploymentType: string;
  /** 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatAppId?: string;
  /** 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatSubAppId?: string;
}

declare interface CreatePayRollTokenResponse {
  /** Token有效时间，单位秒 */
  ExpireTime: number;
  /** 微信服务商商户的商户号，由微信支付生成并下发 */
  MerchantId: string;
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** Token值 */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRedInvoiceRequest {
  /** 开票平台ID0 : 高灯1 : 票易通 */
  InvoicePlatformId: number;
  /** 红冲明细 */
  Invoices: CreateRedInvoiceItem[];
  /** 接入环境。沙箱环境填 sandbox。 */
  Profile?: string;
  /** 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道 */
  InvoiceChannel?: number;
}

declare interface CreateRedInvoiceResponse {
  /** 红冲结果 */
  Result: CreateRedInvoiceResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRedInvoiceV2Request {
  /** 开票平台ID0 : 高灯1 : 票易通 */
  InvoicePlatformId: number;
  /** 订单号 */
  OrderId: string;
  /** 接入环境。沙箱环境填 sandbox。 */
  Profile?: string;
  /** 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道 */
  InvoiceChannel?: number;
}

declare interface CreateRedInvoiceV2Response {
  /** 红冲结果 */
  Result: CreateRedInvoiceResultV2 | null;
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSinglePaymentRequest {
  /** 转账类型1 微信企业付款 2 支付宝转账 3 平安银企直连代发转账 */
  TransferType: number;
  /** 订单流水号 */
  OrderId: string;
  /** 转账金额 */
  TransferAmount: number;
  /** 主播ID（与主播业务ID不能同时为空，两者都填取主播ID） */
  AnchorId: string;
  /** 请求预留字段，原样透传返回 */
  ReqReserved?: string;
  /** 业务备注 */
  Remark?: string;
  /** 主播名称。如果该字段填入，则会对AnchorName和AnchorId/Uid进行校验。 */
  AnchorName?: string;
  /** 主播业务ID（与主播ID不能同时为空，两者都填取主播ID） */
  Uid?: string;
  /** 转账结果回调通知URL。若不填，则不进行回调。 */
  NotifyUrl?: string;
}

declare interface CreateSinglePaymentResponse {
  /** 错误码 */
  ErrCode: string;
  /** 响应消息 */
  ErrMessage: string;
  /** 返回数据 */
  Result: CreateSinglePaymentData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTransferBatchRequest {
  /** 商户号。示例值：129284394 */
  MerchantId: string;
  /** 转账明细列表。发起批量转账的明细列表，最多三千笔 */
  TransferDetails: TransferDetailRequest[];
  /** 直连商户appId。即商户号绑定的appid。示例值：wxf636efh567hg4356 */
  MerchantAppId: string;
  /** 商家批次单号。商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。示例值：plfk2020042013 */
  MerchantBatchNo: string;
  /** 批次名称。批量转账的名称。示例值：2019年1月深圳分部报销单 */
  BatchName: string;
  /** 转账说明。UTF8编码，最多32个字符。示例值：2019年深圳分部报销单 */
  BatchRemark: string;
  /** 转账总金额。转账金额，单位为分。示例值：4000000 */
  TotalAmount: number;
  /** 转账总笔数。一个转账批次最多允许发起三千笔转账。示例值：200 */
  TotalNum: number;
  /** 环境名。release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  Profile?: string;
}

declare interface CreateTransferBatchResponse {
  /** 商家批次单号。商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。示例值：plfk2020042013 */
  MerchantBatchNo?: string;
  /** 微信批次单号。微信商家转账系统返回的唯一标识。示例值：1030000071100999991182020050700019480001 */
  BatchId?: string;
  /** 批次受理成功时返回，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。示例值：2015-05-20T13:29:35.120+08:00 */
  CreateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeduceQuotaRequest {
  /** 主播ID */
  AnchorId: string;
  /** 提现金额，单位为"分" */
  Amount: number;
  /** 外部业务订单号 */
  OrderId: string;
}

declare interface DeduceQuotaResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息 */
  ErrMsg: string;
  /** 返回响应 */
  Result: AssignmentData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentTaxPaymentInfoRequest {
  /** 批次号 */
  BatchNum: number;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface DeleteAgentTaxPaymentInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentTaxPaymentInfosRequest {
  /** 批次号 */
  BatchNum: number;
}

declare interface DeleteAgentTaxPaymentInfosResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChargeDetailRequest {
  /** 请求类型 */
  RequestType: string;
  /** 商户号 */
  MerchantCode: string;
  /** 支付渠道 */
  PayChannel: string;
  /** 子渠道 */
  PayChannelSubId: number;
  /** 原始交易订单号或者流水号 */
  OrderId: string;
  /** 父账户账号，资金汇总账号 */
  BankAccountNumber: string;
  /** 收单渠道类型 */
  AcquiringChannelType: string;
  /** 平台短号(银行分配) */
  PlatformShortNumber: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 交易流水号 */
  TransSequenceNumber: string;
  /** Midas环境参数 */
  MidasEnvironment: string;
  /** 保留域 */
  ReservedMessage?: string;
}

declare interface DescribeChargeDetailResponse {
  /** 交易状态 （0：成功，1：失败，2：异常,3:冲正，5：待处理） */
  OrderStatus?: string;
  /** 交易金额 */
  OrderAmount?: string;
  /** 佣金费 */
  CommissionAmount?: string;
  /** 支付方式 0-冻结支付 1-普通支付 */
  PayMode?: string;
  /** 交易日期 */
  OrderDate?: string;
  /** 交易时间 */
  OrderTime?: string;
  /** 订单实际转入见证子账户的名称 */
  OrderActualInSubAccountName?: string;
  /** 订单实际转入见证子账户的帐号 */
  OrderActualInSubAccountNumber?: string;
  /** 订单实际转入见证子账户的帐号 */
  OrderInSubAccountName?: string;
  /** 订单转入见证子账户的帐号 */
  OrderInSubAccountNumber?: string;
  /** 银行流水号 */
  FrontSequenceNumber?: string;
  /** 当充值失败时，返回交易失败原因 */
  FailMessage?: string;
  /** 请求类型 */
  RequestType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrderStatusRequest {
  /** 请求类型，此接口固定填：QueryOrderStatusReq */
  RequestType: string;
  /** 商户号 */
  MerchantCode: string;
  /** 支付渠道 */
  PayChannel: string;
  /** 子渠道 */
  PayChannelSubId: number;
  /** 交易订单号或流水号，提现，充值或会员交易请求时的CnsmrSeqNo值 */
  OrderId: string;
  /** 父账户账号，资金汇总账号 */
  BankAccountNumber: string;
  /** 平台短号(银行分配) */
  PlatformShortNumber: string;
  /** 功能标志 0：会员间交易 1：提现 2：充值 */
  QueryType: string;
  /** 银行流水号 */
  TransSequenceNumber: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** Midas环境参数 */
  MidasEnvironment: string;
  /** 保留字段 */
  ReservedMessage?: string;
  /** 子账户账号 暂未使用 */
  BankSubAccountNumber?: string;
  /** 交易日期 暂未使用 */
  TransDate?: string;
}

declare interface DescribeOrderStatusResponse {
  /** 交易状态 （0：成功，1：失败，2：待确认, 5：待处理，6：处理中） */
  OrderStatus?: string;
  /** 交易金额 */
  OrderAmount?: string;
  /** 交易日期 */
  OrderDate?: string;
  /** 交易时间 */
  OrderTime?: string;
  /** 转出子账户账号 */
  OutSubAccountNumber?: string;
  /** 转入子账户账号 */
  InSubAccountNumber?: string;
  /** 记账标志（1：登记挂账 2：支付 3：提现 4：清分5:下单预支付 6：确认并付款 7：退款 8：支付到平台 N:其他） */
  BookingFlag?: string;
  /** 当交易失败时，返回交易失败原因 */
  FailMessage?: string;
  /** 请求类型 */
  RequestType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeAccreditQueryRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeAccreditQueryResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 查询授权申请结果响应对象 */
  Result: DistributeAccreditQueryResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeAccreditTlinxRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 验证方式，传1手机验证(验证码时效60S)传2结算卡验证(时效6小时)，多种方式用逗号隔开 */
  AuthType: string;
  /** 分账比例（500=5%）不传默认百分之10 */
  Percent?: string;
  /** 营业执照商户全称 */
  FullName?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeAccreditTlinxResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 授权申请响应对象 */
  Result: DistributeAccreditResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeAddReceiverRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 商户编号 */
  MerchantNo: string;
  /** 备注 */
  Remark?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeAddReceiverResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 添加分账接收方响应对象 */
  Result: DistributeReceiverResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeApplyRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 商户分账单号 */
  OutDistributeNo: string;
  /** 分账明细 */
  Details: MultiApplyDetail[];
  /** 商户交易订单号，和OrderNo二者传其一 */
  DeveloperNo?: string;
  /** 平台交易订单号，和DeveloperNo二者传其一 */
  OrderNo?: string;
  /** 说明 */
  Remark?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeApplyResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 分账申请响应对象 */
  Result: DistributeMultiApplyResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeCancelRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 平台交易订单号 */
  OrderNo: string;
  /** 商户分账单号，type为2时，和DistributeNo二者传其一 */
  OutDistributeNo?: string;
  /** 平台分账单号，type为2时，和OutDistributeNo二者传其一 */
  DistributeNo?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeCancelResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 分账撤销响应对象 */
  Result: DistributeCancelResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeQueryReceiverRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeQueryReceiverResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 查询询已添加分账接收方响应对象 */
  Result: DistributeReceiverResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeQueryRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 查询类型（1-全部，2-单笔） */
  Type: string;
  /** 商户分账单号，type为2时，和DistributeNo二者传其一 */
  OutDistributeNo?: string;
  /** 平台分账单号，type为2时，和OutDistributeNo二者传其一 */
  DistributeNo?: string;
  /** 平台交易订单号 */
  OrderNo?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeQueryResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 分账结果响应对象 */
  Result: DistributeQueryResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeRemoveReceiverRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 商户编号 */
  MerchantNo: string;
  /** 备注 */
  Remark?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DistributeRemoveReceiverResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 解除分账接收方响应对象 */
  Result: DistributeReceiverResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadBillRequest {
  /** 请求下载对账单日期 */
  StateDate: string;
  /** 聚鑫分配的MidasAppId */
  MidasAppId: string;
  /** 聚鑫分配的SecretId */
  MidasSecretId: string;
  /** 使用聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface DownloadBillResponse {
  /** 账单文件名 */
  FileName: string;
  /** 账单文件的MD5值 */
  FileMD5: string;
  /** 账单文件的真实下载地址 */
  DownloadUrl: string;
  /** 账单类型TRADE，对账单FUND，资金账单 */
  StateType: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadOrgFileRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域 */
  Storage?: string;
  /** 文件路径 */
  FilePath?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface DownloadOrgFileResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 下载机构文件响应对象 */
  Result: DownloadFileResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadReconciliationUrlRequest {
  /** 平台应用ID */
  MainAppId: string;
  /** 平台代码 */
  AppCode: string;
  /** 账单日期，yyyy-MM-dd */
  BillDate: string;
  /** 商户或者代理商ID */
  SubAppId?: string;
}

declare interface DownloadReconciliationUrlResponse {
  /** 下载地址 */
  DownloadUrl: string;
  /** hash类型 */
  HashType: string | null;
  /** hash值 */
  HashValue: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExecuteMemberTransactionRequest {
  /** 请求类型此接口固定填：MemberTransactionReq */
  RequestType: string;
  /** 银行注册商户号 */
  MerchantCode: string;
  /** 支付渠道 */
  PayChannel: string;
  /** 子渠道 */
  PayChannelSubId: number;
  /** 转出交易网会员代码 */
  OutTransNetMemberCode: string;
  /** 转出见证子账户的户名 */
  OutSubAccountName: string;
  /** 转入见证子账户的户名 */
  InSubAccountName: string;
  /** 转出子账户账号 */
  OutSubAccountNumber: string;
  /** 转入子账户账号 */
  InSubAccountNumber: string;
  /** 父账户账号，资金汇总账号 */
  BankAccountNumber: string;
  /** 货币单位 单位，1：元，2：角，3：分 */
  CurrencyUnit: string;
  /** 币种 */
  CurrencyType: string;
  /** 交易金额 */
  CurrencyAmount: string;
  /** 订单号 */
  OrderId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 交易流水号 生成方式：用户短号+日期（6位）+ 随机编号（10位）例如：F088722005120904930798短号：F08872 日期： 200512 随机编号：0904930798 */
  TransSequenceNumber: string;
  /** 转入交易网会员代码 */
  InTransNetMemberCode: string;
  /** Midas环境标识 release 现网环境 sandbox 沙箱环境development 开发环境 */
  MidasEnvironment: string;
  /** 平台短号(银行分配) */
  PlatformShortNumber?: string;
  /** 1：下单预支付 2：确认并付款3：退款6：直接支付T+19：直接支付T+0 */
  TransType?: string;
  /** 交易手续费 */
  TransFee?: string;
  /** 保留域 */
  ReservedMessage?: string;
}

declare interface ExecuteMemberTransactionResponse {
  /** 请求类型 */
  RequestType?: string;
  /** 银行流水号 */
  FrontSequenceNumber?: string;
  /** 保留域 */
  ReservedMessage?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreezeFlexBalanceRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 税前金额 */
  AmountBeforeTax: string;
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 外部订单ID */
  OutOrderId: string;
  /** 操作类型FREEZE:冻结UNFREEZE:解冻 */
  OperationType: string;
  /** 冻结备注 */
  Remark?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface FreezeFlexBalanceResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: FreezeFlexBalanceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBillDownloadUrlRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 清算日期（YYYYMMDD，今天传昨天的日期，每日下午1点后出前一日的账单） */
  Day: string;
}

declare interface GetBillDownloadUrlResponse {
  /** 业务系统返回码 */
  ErrCode: string;
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 账单文件下载地址响应对象 */
  Result: BillDownloadUrlResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDistributeBillDownloadUrlRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 分账日期（YYYYMMDD，今天传昨天的日期） */
  Day: string;
}

declare interface GetDistributeBillDownloadUrlResponse {
  /** 业务系统返回码 */
  ErrCode: string;
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 账单文件下载地址响应对象 */
  Result: BillDownloadUrlResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPayRollAuthListRequest {
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** 核身日期，一次只能查询一天，最久可查询90天内的记录，格式为YYYY-MM-DD */
  AuthDate: string;
  /** 非负整数，表示该次请求资源的起始位置，从0开始计数 */
  Offset: number;
  /** 非0非负的整数，该次请求可返回的最大资源条数，默认值为10，最大支持10条 */
  Limit: number;
  /** 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatAppId?: string;
  /** 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatSubAppId?: string;
  /** 核身状态，列表查询仅提供成功状态的核身记录查询，故此字段固定AUTHENTICATE_SUCCESS即可 */
  AuthStatus?: string;
}

declare interface GetPayRollAuthListResponse {
  /** 核身结果列表 */
  Results: PayRollAuthResult[] | null;
  /** 总记录条数 */
  Total: number;
  /** 记录起始位置，该次请求资源的起始位置，请求中包含偏移量时应答消息返回相同偏移量，否则返回默认值0 */
  Offset: number;
  /** 本次返回条数 */
  Limit: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPayRollAuthRequest {
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatAppId?: string;
  /** 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID */
  WechatSubAppId?: string;
}

declare interface GetPayRollAuthResponse {
  /** 授权状态：UNAUTHORIZED：未授权AUTHORIZED：已授权DEAUTHORIZED：已取消授权 */
  AuthStatus: string;
  /** 授权时间，遵循[rfc3339](https://datatracker.ietf.org/doc/html/rfc3339)标准格式，格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，空字符串等同null */
  AuthTime: string | null;
  /** 授权时间，遵循[rfc3339](https://datatracker.ietf.org/doc/html/rfc3339)标准格式，格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，空字符串等同null */
  CancelAuthTime: string | null;
  /** 微信服务商商户的商户号，由微信支付生成并下发 */
  MerchantId: string;
  /** 用户在商户对应appid下的唯一标识 */
  OpenId: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPayRollAuthResultRequest {
  /** 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一 */
  AuthNumber: string;
  /** 微信服务商下特约商户的商户号，由微信支付生成并下发 */
  SubMerchantId: string;
}

declare interface GetPayRollAuthResultResponse {
  /** 核身结果 */
  Result: PayRollAuthResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MigrateOrderRefundQueryRequest {
  /** 商户号 */
  MerchantId: string;
  /** 支付渠道，ALIPAY对应支付宝渠道；UNIONPAY对应银联渠道 */
  PayChannel: string;
  /** 退款订单号，最长64位，仅支持数字、 字母 */
  RefundOrderId: string;
  /** 退款流水号 */
  TradeSerialNo: string;
  /** 接入环境。沙箱环境填 sandbox。 */
  Profile?: string;
}

declare interface MigrateOrderRefundQueryResponse {
  /** 请求成功状态 */
  IsSuccess?: boolean;
  /** 交易流水号 */
  TradeSerialNo?: string;
  /** 交易备注 */
  TradeMsg?: string;
  /** 交易状态：0=交易待处理；1=交易处理中；2=交易处理成功；3=交易失败；4=状态未知 */
  TradeStatus?: number;
  /** 第三方支付机构支付交易号 */
  ThirdChannelOrderId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MigrateOrderRefundRequest {
  /** 商户代码 */
  MerchantId: string;
  /** 支付渠道，ALIPAY对应支付宝渠道；UNIONPAY对应银联渠道 */
  PayChannel: string;
  /** 正向支付商户订单号 */
  PayOrderId: string;
  /** 退款订单号，最长64位，仅支持数字、 字母 */
  RefundOrderId: string;
  /** 退款金额，单位：分。备注：改字段必须大于0 和小于10000000000的整数。 */
  RefundAmt: number;
  /** 第三方支付机构支付交易号 */
  ThirdChannelOrderId: string;
  /** 原始支付金额，单位：分。备注：当该字段为空或者为0 时，系统会默认使用订单当 实付金额作为退款金额 */
  PayAmt?: number;
  /** 接入环境。沙箱环境填 sandbox。 */
  Profile?: string;
  /** 退款原因 */
  RefundReason?: string;
}

declare interface MigrateOrderRefundResponse {
  /** 请求成功状态 */
  IsSuccess?: boolean;
  /** 退款流水号 */
  TradeSerialNo?: string;
  /** 交易备注 */
  TradeMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentTaxPaymentInfoRequest {
  /** 批次号 */
  BatchNum: number;
  /** 新源电子凭证地址 */
  RawElectronicCertUrl: string;
  /** 新的文件名 */
  FileName?: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface ModifyAgentTaxPaymentInfoResponse {
  /** 代理商完税证明批次信息 */
  AgentTaxPaymentBatch: AgentTaxPaymentBatch;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBindedAccountRequest {
  /** 主播Id */
  AnchorId: string;
  /** 1 微信企业付款 2 支付宝转账 3 平安银企直连代发转账 */
  TransferType: number;
  /** 收款方标识。微信为open_id；支付宝为会员alipay_user_id;平安为收款方银行账号; */
  AccountNo: string;
  /** 手机号 */
  PhoneNum: string;
}

declare interface ModifyBindedAccountResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息。 */
  ErrMessage: string;
  /** 该字段为null。 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFlexFundingAccountRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 收款用户资金账户ID */
  FundingAccountBindSerialNo: string;
  /** 资金账户类型PINGAN_BANK:平安银行 */
  FundingAccountType: string;
  /** 收款资金账户手机号 */
  PhoneNo: string;
  /** 收款资金账户姓名 */
  FundingAccountName: string;
  /** 收款资金账户号 */
  FundingAccountNo: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
  /** 开户支行名 */
  BankBranchName?: string;
}

declare interface ModifyFlexFundingAccountResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 无 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFlexPayeeAccountRightStatusRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 账户权益类型SETTLEMENT:结算权益PAYMENT:付款权益 */
  AccountRightType: string;
  /** 账户权益状态ENABLE:启用DISABLE:停用 */
  AccountRightStatus: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface ModifyFlexPayeeAccountRightStatusResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果。默认为空。 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMerchantRequest {
  /** 进件成功后返给商户的AppId */
  MerchantAppId: string;
  /** 收款商户名称 */
  MerchantName: string;
  /** B2B 支付标志。是否开通 B2B支付， 1:开通 0:不开通。 */
  BusinessPayFlag: string;
}

declare interface ModifyMerchantResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMntMbrBindRelateAcctBankCodeRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(50)，见证子账户的账号 */
  SubAcctNo: string;
  /** STRING(50)，会员绑定账号 */
  MemberBindAcctNo: string;
  /** STRING(150)，开户行名称（若大小额行号不填则送超级网银号对应的银行名称，若填大小额行号则送大小额行号对应的银行名称） */
  AcctOpenBranchName: string;
  /** STRING(20)，大小额行号（CnapsBranchId和EiconBankBranchId两者二选一必填） */
  CnapsBranchId?: string;
  /** STRING(20)，超级网银行号 */
  EiconBankBranchId?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface ModifyMntMbrBindRelateAcctBankCodeResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAcctBindingRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 由平台客服提供的计费密钥Id */
  MidasSecretId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface QueryAcctBindingResponse {
  /** 总行数 */
  TotalCount: number;
  /** 银行卡信息列表 */
  BankCardItems: BankCardItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAcctInfoListRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 查询开始时间(以开户时间为准) */
  QueryAcctBeginTime: string;
  /** 查询结束时间(以开户时间为准) */
  QueryAcctEndTime: string;
  /** 分页号, 起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照开户时间的先后 */
  PageOffset: string;
  /** 由平台客服提供的计费密钥Id */
  MidasSecretId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface QueryAcctInfoListResponse {
  /** 本次交易返回查询结果记录数 */
  ResultCount?: number;
  /** 符合业务查询条件的记录总数 */
  TotalCount?: number;
  /** 查询结果项 [object,object] */
  QueryAcctItems?: QueryAcctItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAcctInfoRequest {
  /** 聚鑫平台分配的支付MidasAppId */
  MidasAppId: string;
  /** 业务平台的子商户Id，唯一 */
  SubMchId: string;
  /** 由平台客服提供的计费密钥Id */
  MidasSecretId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface QueryAcctInfoResponse {
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId?: string;
  /** 子商户名称 */
  SubMchName?: string;
  /** 子商户类型：个人: personal企业：enterprise缺省： enterprise */
  SubMchType?: string;
  /** 不填则默认子商户名称 */
  ShortName?: string;
  /** 子商户地址 */
  Address?: string;
  /** 子商户联系人子商户联系人<敏感信息> */
  Contact?: string;
  /** 联系人手机号<敏感信息> */
  Mobile?: string;
  /** 邮箱 <敏感信息> */
  Email?: string;
  /** 子商户id */
  SubMchId?: string;
  /** 子账户 */
  SubAcctNo?: string;
  /** 子商户会员类型：general:普通子账户merchant:商户子账户缺省： general */
  SubMerchantMemberType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAgentStatementsRequest {
  /** 结算单日期，月结算单填每月1日 */
  Date: string;
  /** 日结算单:daily月结算单:monthly */
  Type: string;
}

declare interface QueryAgentStatementsResponse {
  /** 文件下载链接 */
  FileUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAgentTaxPaymentBatchRequest {
  /** 批次号 */
  BatchNum: number;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface QueryAgentTaxPaymentBatchResponse {
  /** 代理商完税证明批次信息 */
  AgentTaxPaymentBatch: AgentTaxPaymentBatch;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAnchorContractInfoRequest {
  /** 起始时间，格式为yyyy-MM-dd */
  BeginTime: string;
  /** 起始时间，格式为yyyy-MM-dd */
  EndTime: string;
}

declare interface QueryAnchorContractInfoResponse {
  /** 签约主播数据 */
  AnchorContractInfoList: AnchorContractInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryApplicationMaterialRequest {
  /** 申报流水号 */
  DeclareId: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface QueryApplicationMaterialResponse {
  /** 成功申报材料查询结果 */
  Result: QueryDeclareResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAssignmentRequest {
  /** 主播ID */
  AnchorId: string;
}

declare interface QueryAssignmentResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息 */
  ErrMsg: string;
  /** 返回响应 */
  Result: AssignmentData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBalanceRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 2：普通会员子账号3：功能子账号 */
  QueryFlag: string;
  /** 起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后 */
  PageOffset: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface QueryBalanceResponse {
  /** 本次交易返回查询结果记录数 */
  ResultCount?: string;
  /** 起始记录号 */
  StartRecordOffset?: string;
  /** 结束标志 */
  EndFlag?: string;
  /** 符合业务查询条件的记录总数 */
  TotalCount?: string;
  /** 查询结果项 */
  QueryItems?: QueryItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBankClearRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(2)，功能标志（1: 全部; 2: 指定时间段） */
  FunctionFlag: string;
  /** STRING (10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后） */
  PageNum: string;
  /** STRING(8)，开始日期（若是指定时间段查询，则必输，当查询全部时，不起作用。格式: 20190101） */
  StartDate?: string;
  /** STRING(8)，终止日期（若是指定时间段查询，则必输，当查询全部时，不起作用。格式：20190101） */
  EndDate?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryBankClearResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING (10)，本次交易返回查询结果记录数 */
  ResultNum?: string | null;
  /** STRING(30)，起始记录号 */
  StartRecordNo?: string | null;
  /** STRING(2)，结束标志（0: 否; 1: 是） */
  EndFlag?: string | null;
  /** STRING (10)，符合业务查询条件的记录总数（重复次数, 一次最多返回20条记录） */
  TotalNum?: string | null;
  /** 交易信息数组 */
  TranItemArray?: ClearItem[] | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBankTransactionDetailsRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(2)，功能标志（1: 当日; 2: 历史） */
  FunctionFlag: string;
  /** STRING(50)，见证子帐户的帐号 */
  SubAcctNo: string;
  /** STRING(4)，查询标志（1: 全部; 2: 转出; 3: 转入 ） */
  QueryFlag: string;
  /** STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后） */
  PageNum: string;
  /** STRING(8)，开始日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101） */
  StartDate?: string;
  /** STRING(8)，终止日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101） */
  EndDate?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryBankTransactionDetailsResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(10)，本次交易返回查询结果记录数 */
  ResultNum?: string | null;
  /** STRING(30)，起始记录号 */
  StartRecordNo?: string | null;
  /** STRING(2)，结束标志（0: 否; 1: 是） */
  EndFlag?: string | null;
  /** STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录） */
  TotalNum?: string | null;
  /** 交易信息数组 */
  TranItemArray?: TransactionItem[] | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBankWithdrawCashDetailsRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(2)，功能标志（1: 当日; 2: 历史） */
  FunctionFlag: string;
  /** STRING(50)，见证子帐户的帐号 */
  SubAcctNo: string;
  /** STRING(4)，查询标志（2: 提现; 3: 清分） */
  QueryFlag: string;
  /** STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后） */
  PageNum: string;
  /** STRING(8)，开始日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101） */
  BeginDate?: string;
  /** STRING(8)，结束日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101） */
  EndDate?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryBankWithdrawCashDetailsResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(10)，本次交易返回查询结果记录数 */
  ResultNum?: string | null;
  /** STRING(30)，起始记录号 */
  StartRecordNo?: string | null;
  /** STRING(2)，结束标志（0:否; 1:是） */
  EndFlag?: string | null;
  /** STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录） */
  TotalNum?: string | null;
  /** 交易信息数组 */
  TranItemArray?: WithdrawItem[] | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBatchPaymentResultRequest {
  /** 批次号 */
  BatchId: string;
}

declare interface QueryBatchPaymentResultResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息。 */
  ErrMessage: string;
  /** 返回响应 */
  Result: QueryBatchPaymentResultData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBillDownloadURLRequest {
  /** 商户号 */
  MerchantId: string;
  /** 代发类型：1、 微信企业付款 2、 支付宝转账 3、 平安银企直联代发转账 */
  TransferType: number;
  /** 账单日期，格式yyyy-MM-dd */
  BillDate: string;
}

declare interface QueryBillDownloadURLResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功 */
  ErrCode: string;
  /** 响应消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: QueryBillDownloadURLData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCityCodeRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryCityCodeResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 查询城市编码响应对象 */
  Result: CityCodeResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCloudChannelDataRequest {
  /** 米大师分配的支付主MidasAppId */
  MidasAppId: string;
  /** 业务订单号，外部订单号 */
  OutOrderNo: string;
  /** 数据类型PAYMENT:支付 */
  ExternalChannelDataType: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  MidasEnvironment?: string;
  /** 子应用ID */
  SubAppId?: string;
  /** 渠道订单号 */
  ChannelOrderId?: string;
  /** 渠道名称，指定渠道查询wechat:微信支付 */
  Channel?: string;
}

declare interface QueryCloudChannelDataResponse {
  /** 外部订单号 */
  OutOrderNo: string | null;
  /** 渠道订单号 */
  ChannelOrderId: string | null;
  /** 第三方渠道数据类型 */
  ExternalChannelDataType: string | null;
  /** 渠道名称 */
  Channel: string | null;
  /** 第三方渠道数据列表 */
  ExternalChannelDataList: CloudExternalChannelData[] | null;
  /** 子应用ID */
  SubAppId: string | null;
  /** 米大师分配的支付主MidasAppId */
  AppId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCloudOrderRequest {
  /** 米大师分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户Id，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 查询类型by_order:根据订单号查订单 */
  Type: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  MidasEnvironment?: string;
  /** 开发者的主订单号 */
  OutTradeNo?: string;
}

declare interface QueryCloudOrderResponse {
  /** 订单数量 */
  TotalNum: number;
  /** 订单列表 */
  OrderList: CloudOrderReturn[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCloudRefundOrderRequest {
  /** 米大师分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户Id，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 退款订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  RefundId: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  MidasEnvironment?: string;
}

declare interface QueryCloudRefundOrderResponse {
  /** 该笔退款订单对应的UnifiedOrder下单时传入的OutTradeNo */
  OutTradeNo: string;
  /** 该笔退款订单对应的支付成功后支付机构返回的支付订单号 */
  ChannelExternalOrderId: string;
  /** 该笔退款订单退款后支付机构返回的退款单号 */
  ChannelExternalRefundId: string;
  /** 内部请求微信支付、银行等支付机构的订单号 */
  ChannelOrderId: string;
  /** 请求退款时传的退款ID后查询退款时传的RefundId */
  RefundId: string;
  /** 被使用的RefundId，业务可忽略该字段 */
  UsedRefundId: string;
  /** 退款总金额 */
  TotalRefundAmt: number;
  /** ISO货币代码 */
  CurrencyType: string;
  /** 退款状态码，退款提交成功后返回1:退款中2:退款成功3:退款失败 */
  State: string;
  /** 子单退款信息列表 */
  SubRefundList: CloudSubRefundItem[] | null;
  /** 透传字段，退款成功回调透传给应用，用于开发者透传自定义内容 */
  Metadata: string;
  /** 米大师分配的支付主MidasAppId */
  AppId: string | null;
  /** 该笔退款订单退款后内部返回的退款单号 */
  ChannelRefundId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCommonTransferRechargeRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(2)，功能标志（1为查询当日数据，0查询历史数据） */
  FunctionFlag: string;
  /** STRING(8)，开始日期（格式：20190101） */
  StartDate: string;
  /** STRING(8)，终止日期（格式：20190101） */
  EndDate: string;
  /** STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后） */
  PageNum: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryCommonTransferRechargeResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(10)，本次交易返回查询结果记录数 */
  ResultNum?: string | null;
  /** STRING(30)，起始记录号 */
  StartRecordNo?: string | null;
  /** STRING(2)，结束标志（0: 否; 1: 是） */
  EndFlag?: string | null;
  /** STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录） */
  TotalNum?: string | null;
  /** 交易信息数组 */
  TranItemArray?: TransferItem[] | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCompanyTitleRequest {
  /** 公司抬头关键字 */
  CompanyTitleKeyword: string;
  /** 开票平台ID。0：高灯，1：票易通 */
  InvoicePlatformId: number;
  /** 销方纳税人识别号 */
  SellerTaxpayerNum: string;
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
}

declare interface QueryCompanyTitleResponse {
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 公司抬头结果 */
  Result: CompanyTitleResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryContractPayFeeRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 支付方式编号 */
  PaymentId: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryContractPayFeeResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码，0表示成功，其他表示失败。 */
  ErrCode: string;
  /** 查询支付方式费率及自定义表单项响应对象 */
  Result: QueryContractPayFeeResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryContractPayWayListRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryContractPayWayListResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 查询合同支付方式响应对象 */
  Result: ContractPayListResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryContractRelateShopRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 合同主键 */
  ContractId: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryContractRelateShopResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 查询合同可关联门店响应对象 */
  Result: QueryContractRelateShopResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryContractRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户ID，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 指定渠道： wechat：微信支付 qqwallet：QQ钱包 bank：网银支付 只有一个渠道时需要指定 */
  Channel: string;
  /** 枚举值：CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE：按 OutContractCode + ContractSceneId 查询CONTRACT_QUERY_MODE_BY_CHANNEL_CONTRACT_CODE：按ChannelContractCode查询 */
  ContractQueryMode: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId?: string;
  /** 业务签约合同协议号 当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE 时 ，必填 */
  OutContractCode?: string;
  /** 签约场景ID，当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE 时 必填，在米大师侧托管后生成 */
  ContractSceneId?: string;
  /** 米大师生成的协议号 ，当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_CHANNEL_CONTRACT_CODE 时必填 */
  ChannelContractCode?: string;
  /** 第三方渠道合约数据，为json字符串，与特定渠道有关 */
  ExternalContractData?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** USER_ID: 用户IDANONYMOUS: 匿名类型 USER_ID默认值为 USER_ID */
  UserType?: string;
  /** 签约代扣穿透查询存量数据迁移模式 */
  MigrateMode?: string;
  /** 签约方式 */
  ContractMethod?: string;
}

declare interface QueryContractResponse {
  /** 签约数据 */
  ContractData: ResponseQueryContract;
  /** 请求处理信息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCustAcctIdBalanceRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(4)，查询标志（2: 普通会员子账号; 3: 功能子账号） */
  QueryFlag: string;
  /** STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后） */
  PageNum: string;
  /** STRING(50)，见证子账户的账号（若SelectFlag为2时，子账号必输） */
  SubAcctNo?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryCustAcctIdBalanceResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(10)，本次交易返回查询结果记录数 */
  ResultNum?: string | null;
  /** STRING(30)，起始记录号 */
  StartRecordNo?: string | null;
  /** STRING(2)，结束标志（0: 否; 1: 是） */
  EndFlag?: string | null;
  /** STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录） */
  TotalNum?: string | null;
  /** 账户信息数组 */
  AcctArray?: Acct[] | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryDownloadBillURLRequest {
  /** 分配给商户的AppId。进件成功后返给商户方的AppId。 */
  MerchantAppId: string;
  /** 渠道编号。固定值：ZSB2B */
  ChannelCode: string;
  /** 对账单日期，格式yyyyMMdd */
  BillDate: string;
}

declare interface QueryDownloadBillURLResponse {
  /** 分配给商户的AppId。进件成功后返给商户方的AppId。 */
  MerchantAppId: string;
  /** 对账单下载地址。 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryExceedingInfoRequest {
  /** 超额日期。格式为yyyy-MM-dd。 */
  TimeStr: string;
  /** 维度。目前支持三个维度: AGENT, ANCHOR, ORDER。不填默认使用AGENT维度。 */
  Dimension?: string;
  /** 分页信息。不填默认Index为1，Count为100。 */
  PageNumber?: Paging;
}

declare interface QueryExceedingInfoResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 超额信息结果。 */
  Result: QueryExceedingInfoResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryExchangeRateRequest {
  /** 源币种 (默认CNY) */
  SourceCurrency: string;
  /** 目的币种 (见常见问题-汇出币种) */
  TargetCurrency?: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface QueryExchangeRateResponse {
  /** 查询汇率结果 */
  Result: QueryExchangerateResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFinancialDataUrlRequest {
  /** 数据查询范围:结束时间 yyyy-MM-dd HH:mm:ss */
  EndTime: string;
  /** 数据查询范围:开始时间 yyyy-MM-dd HH:mm:ss */
  StartTime: string;
  /** 数据类型：ADDED_INVOICE_REPORT 增值税开票数据，NATURAL_FINANCE_REPORT 自然人金融数据,NATURAL_FINANCE_REPORT_BY_TIME 按次报税数据导出,NATURAL_FINANCE_REPORT_STAT_BY_DAY 按日累计报税数据导出 */
  DataType: string;
}

declare interface QueryFinancialDataUrlResponse {
  /** 下载链接 */
  CosUrl: string | null;
  /** 过期时间 */
  ExpireTime: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexAmountBeforeTaxRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 税后金额 */
  AmountAfterTax: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexAmountBeforeTaxResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: AmountBeforeTaxResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexBillDownloadUrlRequest {
  /** 对账单日期 */
  BillDate: string;
  /** 对账单类型：FREEZE, SETTLEMENT,PAYMENT */
  BillType: string;
  /** 服务商ID，如不填则查询平台级别对账单文件 */
  ServiceProviderId?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexBillDownloadUrlResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: FlexBillDownloadUrlResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexFreezeOrderListRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 操作类型FREEZE:冻结UNFREEZE:解冻 */
  OperationType: string;
  /** 开始时间，格式"yyyy-MM-dd hh:mm:ss" */
  StartTime: string;
  /** 结束时间，格式"yyyy-MM-dd hh:mm:ss" */
  EndTime: string;
  /** 分页 */
  PageNumber: Paging;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexFreezeOrderListResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: FreezeOrders | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexOrderSummaryListRequest {
  /** 汇总日期:yyyy-MM-dd */
  SummaryDate: string;
  /** 分页 */
  PageNumber: Paging;
  /** 汇总订单类型:FREEZE, SETTLEMENT,PAYMENT */
  OrderType: string;
  /** 收款用户ID */
  PayeeId?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexOrderSummaryListResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: OrderSummaries | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexPayeeAccountBalanceRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
  /** 快照日期。格式yyyy-MM-dd */
  SnapshotDate?: string;
}

declare interface QueryFlexPayeeAccountBalanceResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: PayeeAccountBalanceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexPayeeAccountInfoRequest {
  /** 收款用户ID */
  PayeeId?: string;
  /** 外部用户ID */
  OutUserId?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexPayeeAccountInfoResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: PayeeAccountInfoResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexPayeeAccountListRequest {
  /** 账户属性信息 */
  PropertyInfo: PayeeAccountPropertyInfo;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 分页 */
  PageNumber?: Paging;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexPayeeAccountListResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: PayeeAccountInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexPayeeInfoRequest {
  /** 收款用户ID */
  PayeeId?: string;
  /** 外部用户ID */
  OutUserId?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexPayeeInfoResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: PayeeInfoResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexPaymentOrderListRequest {
  /** 开始时间，格式"yyyy-MM-dd hh:mm:ss" */
  StartTime: string;
  /** 结束时间，格式"yyyy-MM-dd hh:mm:ss" */
  EndTime: string;
  /** 分页 */
  PageNumber: Paging;
  /** 收款用户ID */
  PayeeId?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexPaymentOrderListResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: PaymentOrders | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexPaymentOrderStatusRequest {
  /** 外部订单ID */
  OutOrderId?: string;
  /** 订单ID */
  OrderId?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexPaymentOrderStatusResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: PaymentOrderStatusResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexPlatformAccountBalanceRequest {
  /** 收入类型LABOR:劳务所得OCCASION:偶然所得 */
  IncomeType: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
  /** 快照日期。格式yyyy-MM-dd */
  SnapshotDate?: string;
}

declare interface QueryFlexPlatformAccountBalanceResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: PlatformAccountBalanceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexServiceProviderAccountBalanceRequest {
  /** 服务商ID */
  ServiceProviderId: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexServiceProviderAccountBalanceResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: ServiceProviderAccountBalanceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFlexSettlementOrderListRequest {
  /** 收款用户ID */
  PayeeId: string;
  /** 开始时间，格式"yyyy-MM-dd hh:mm:ss" */
  StartTime: string;
  /** 结束时间，格式"yyyy-MM-dd hh:mm:ss" */
  EndTime: string;
  /** 分页 */
  PageNumber: Paging;
  /** 操作类型。ENABLE_SETTLE: 正常结算DISABLE_SETTLE: 停用结算UNFREEZE_SETTLE: 解冻结算若需要支持多个操作类型，则以;分隔 */
  OperationType?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境__test__:测试环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryFlexSettlementOrderListResponse {
  /** 错误码。SUCCESS为成功，其他为失败 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: SettlementOrders | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFundsTransactionDetailsRequest {
  /** 查询的交易发生时间类型。__1__：当日__2__：历史 */
  QueryDateType: string;
  /** 查询的交易类型。__2__：提现/退款__3__：清分/充值 */
  QueryTranType: string;
  /** 父账户账号。_平安渠道为资金汇总账号_ */
  BankAccountNumber: string;
  /** 子账户账号。_平安渠道为见证子账户的账号_ */
  SubAccountNumber: string;
  /** 分页号, 起始值为1。 */
  PageOffSet: string;
  /** 查询开始日期，格式：yyyyMMdd。__若是历史查询，则必输，当日查询时，不起作用；开始日期不能超过当前日期__ */
  QueryStartDate?: string;
  /** 查询终止日期，格式：yyyyMMdd。__若是历史查询，则必输，当日查询时，不起作用；终止日期不能超过当前日期__ */
  QueryEndDate?: string;
  /** 环境名。__release__: 现网环境__sandbox__: 沙箱环境__development__: 开发环境_缺省: release_ */
  MidasEnvironment?: string;
}

declare interface QueryFundsTransactionDetailsResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryFundsTransactionDetailsResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryInvoiceRequest {
  /** 开票平台ID0 : 高灯1 : 票易通 */
  InvoicePlatformId: number;
  /** 订单号 */
  OrderId: string;
  /** 业务开票号 */
  OrderSn?: string;
  /** 发票种类：0：蓝票1：红票【该字段默认为0， 如果需要查询红票信息，本字段必须传1，否则可能查询不到需要的发票信息】。 */
  IsRed?: number;
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
  /** 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道 */
  InvoiceChannel?: number;
  /** 当渠道为线下渠道时，必填 */
  SellerTaxpayerNum?: string;
}

declare interface QueryInvoiceResponse {
  /** 发票查询结果 */
  Result: QueryInvoiceResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryInvoiceV2Request {
  /** 开票平台ID0 : 高灯1 : 票易通 */
  InvoicePlatformId: number;
  /** 订单号 */
  OrderId: string;
  /** 发票种类：0：蓝票1：红票【该字段默认为0， 如果需要查询红票信息，本字段必须传1，否则可能查询不到需要的发票信息】。 */
  IsRed?: number;
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
  /** 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道 */
  InvoiceChannel?: number;
  /** 当渠道为线下渠道时，必填 */
  SellerTaxpayerNum?: string;
}

declare interface QueryInvoiceV2Response {
  /** 发票查询结果 */
  Result: QueryInvoiceResultData | null;
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMaliciousRegistrationRequest {
  /** 商户ID，调用方使用的商户号信息，与商户主体一一对应 */
  MerchantId: string;
  /** 商户名称 */
  MerchantName: string;
  /** 企业工商注册标准名称 */
  CompanyName: string;
  /** 注册地址 */
  RegAddress: string;
  /** 商户进件Unix时间，单位秒（非企业注册工商时间) */
  RegTime: number;
  /** 统一社会信用代码 */
  USCI?: string;
  /** 工商注册码，匹配优先级为Usci>RegNumber>CompanyName */
  RegNumber?: string;
  /** 手机号码32位MD5加密结果，全大写，格式为0086-13812345678 */
  EncryptedPhoneNumber?: string;
  /** 邮箱32位MD5加密结果，全大写 */
  EncryptedEmailAddress?: string;
  /** 身份证MD5加密结果，最后一位x大写 */
  EncryptedPersonId?: string;
  /** 填写信息设备的IP地址 */
  Ip?: string;
  /** 进件渠道号，客户自行编码即可 */
  Channel?: string;
}

declare interface QueryMaliciousRegistrationResponse {
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMsg: string;
  /** 商户风险信息 */
  Result: MerchantRiskInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMemberBindRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(4)，查询标志（1: 全部会员; 2: 单个会员; 3: 单个会员的证件信息） */
  QueryFlag: string;
  /** STRING (10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后） */
  PageNum: string;
  /** STRING(50)，见证子账户的账号（若SelectFlag为2或3时，子账户账号必输） */
  SubAcctNo?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryMemberBindResponse {
  /** STRING (10)，本次交易返回查询结果记录数 */
  ResultNum?: string | null;
  /** STRING(30)，起始记录号 */
  StartRecordNo?: string | null;
  /** STRING(2)，结束标志（0: 否; 1: 是） */
  EndFlag?: string | null;
  /** STRING (10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录） */
  TotalNum?: string | null;
  /** 交易信息数组 */
  TranItemArray?: TranItem[] | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMemberTransactionDetailsRequest {
  /** 查询的交易发生时间类型。__1__：当日__2__：历史 */
  QueryDateType: string;
  /** 查询的交易类型。__1__：全部__2__：转出__3__：转入 */
  QueryTranType: string;
  /** 父账户账号。_平安渠道为资金汇总账号_ */
  BankAccountNumber: string;
  /** 子账户账号。_平安渠道为见证子账户的账号_ */
  SubAccountNumber: string;
  /** 分页号, 起始值为1。 */
  PageOffSet: string;
  /** 查询开始日期，格式：yyyyMMdd。__若是历史查询，则必输，当日查询时，不起作用；开始日期不能超过当前日期__ */
  QueryStartDate?: string;
  /** 查询终止日期，格式：yyyyMMdd。__若是历史查询，则必输，当日查询时，不起作用；终止日期不能超过当前日期__ */
  QueryEndDate?: string;
  /** 环境名。__release__: 现网环境__sandbox__: 沙箱环境__development__: 开发环境_缺省: release_ */
  MidasEnvironment?: string;
}

declare interface QueryMemberTransactionDetailsResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryMemberTransactionDetailsResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMemberTransactionRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(2)，功能标志（1: 下单预支付; 2: 确认并付款; 3: 退款; 6: 直接支付T+1; 9: 直接支付T+0） */
  FunctionFlag: string;
  /** STRING(50)，转出方的见证子账户的账号（付款方） */
  OutSubAcctNo: string;
  /** STRING(32)，转出方的交易网会员代码 */
  OutMemberCode: string;
  /** STRING(150)，转出方的见证子账户的户名（户名是绑卡时上送的账户名称，如果未绑卡，就送OpenCustAcctId接口上送的用户昵称UserNickname） */
  OutSubAcctName: string;
  /** STRING(50)，转入方的见证子账户的账号（收款方） */
  InSubAcctNo: string;
  /** STRING(32)，转入方的交易网会员代码 */
  InMemberCode: string;
  /** STRING(150)，转入方的见证子账户的户名（户名是绑卡时上送的账户名称，如果未绑卡，就送OpenCustAcctId接口上送的用户昵称UserNickname） */
  InSubAcctName: string;
  /** STRING(20)，交易金额 */
  TranAmt: string;
  /** STRING(20)，交易费用（平台收取交易费用） */
  TranFee: string;
  /** STRING(20)，交易类型（01: 普通交易） */
  TranType: string;
  /** STRING(3)，币种（默认: RMB） */
  Ccy: string;
  /** STRING(50)，订单号（功能标志为1,2,3时必输） */
  OrderNo?: string;
  /** STRING(500)，订单内容 */
  OrderContent?: string;
  /** STRING(300)，备注（建议可送订单号，可在对账文件的备注字段获取到） */
  Remark?: string;
  /** STRING(1027)，保留域（若需短信验证码则此项必输短信指令号） */
  ReservedMsg?: string;
  /** STRING(300)，网银签名（若需短信验证码则此项必输） */
  WebSign?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryMemberTransactionResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求） */
  FrontSeqNo?: string | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMerchantBalanceRequest {
  /** 余额币种 */
  Currency: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface QueryMerchantBalanceResponse {
  /** 对接方账户余额查询结果 */
  Result: QueryMerchantBalanceResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMerchantClassificationRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryMerchantClassificationResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 查询商户分类响应对象 */
  Result: MerchantClassificationId[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMerchantInfoForManagementRequest {
  /** 开票平台ID */
  InvoicePlatformId: number;
  /** 页码 */
  Offset: number;
  /** 页大小 */
  Limit: number;
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
}

declare interface QueryMerchantInfoForManagementResponse {
  /** 商户结果 */
  Result: MerchantManagementResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMerchantOrderRequest {
  /** 进件成功后返给商户方的AppId。 */
  MerchantAppId: string;
  /** 平台流水号。平台唯一订单号。 */
  OrderNo: string;
}

declare interface QueryMerchantOrderResponse {
  /** 进件成功后返给商户方的AppId。 */
  MerchantAppId: string;
  /** 平台流水号。平台唯一订单号。 */
  OrderNo: string;
  /** 订单支付状态。0-下单失败 1-下单成功未支付 2-支付成功 3-支付失败 4-退款中 5-退款成功 6-退款失败 7-待付款 8-待确认。 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMerchantPayWayListRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 支付类型，逗号分隔。1-现金，2-主扫，3-被扫，4-JSAPI。 */
  PayType: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryMerchantPayWayListResponse {
  /** 业务系统返回码，0表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 查询商户支付方式列表结果 */
  Result: MerchantPayWayData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMerchantRequest {
  /** 进件成功后返给商户方的 AppId */
  MerchantAppId: string;
}

declare interface QueryMerchantResponse {
  /** 分配给商户的 AppId，该 AppId 为后续各项 交易的商户标识。 */
  MerchantAppId: string;
  /** 收款商户名称。 */
  MerchantName: string;
  /** B2B 支付标志。是否开通 B2B 支付， 1:开通 0:不开通。 */
  BusinessPayFlag: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankBankAccountBalanceRequest {
  /** 云企付渠道商户号。外部接入平台入驻云企付平台后下发。 */
  ChannelMerchantId: string;
  /** 云企付渠道子商户号。入驻在渠道商户下的子商户ID，如付款方的商户ID，对应创建支付订单中接口参数中的PayerInfo中的payerId。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式，如__EBANK_PAYMENT__:ebank付款__OPENBANK_PAYMENT__: openbank付款 */
  PaymentMethod: string;
  /** 绑卡序列号，银行账户唯一ID，区分多卡或多账户的场景 */
  BindSerialNo: string;
  /** 环境类型release:生产环境sandbox:沙箱环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryOpenBankBankAccountBalanceResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 账户余额查询响应对象。 */
  Result: QueryOpenBankBankAccountBalanceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankBankBranchListRequest {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。__EBANK_PAYMENT__:ebank付款__OPENBANK_PAYMENT__: openbank付款 */
  PaymentMethod: string;
  /** 支行名称。 */
  BankBranchName: string;
  /** 银行简称。 */
  BankAbbreviation: string;
  /** 页码。Index和Count必须大于等于1。Count建议不超过100。 */
  PageNumber: Paging;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankBankBranchListResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string | null;
  /** 返回结果。 */
  Result: QueryOpenBankBankBranchListResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankBillDataPageRequest {
  /** 渠道商户号，外部接入平台方入驻云企付平台后下发。EBANK_PAYMENT支付方式下，填写渠道商户号；SAFT_ISV支付方式下，填写渠道子商户号;HELIPAY渠道下，填写渠道子商户号。 */
  ChannelMerchantId: string;
  /** 账单日期,yyyy-MM-dd。 */
  BillDate: string;
  /** 渠道名称。详见附录-云企付枚举类说明-ChannelName。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝HELIPAY：合利宝 */
  ChannelName: string;
  /** 分页页码。 */
  PageNo: number;
  /** 分页大小，最大1000。 */
  PageSize: number;
  /** 账单类型，默认交易账单。 */
  BillType?: string;
  /** 支付方式。详见附录-云企付枚举类说明-PaymentMethod。 */
  PaymentMethod?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankBillDataPageResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 结果 */
  Result: QueryOpenBankBillDataPageResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankBindExternalSubMerchantBankAccountRequest {
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道申请编号，与外部申请编号二者选填其一。 */
  ChannelApplyId?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
  /** 外部申请编号，与渠道申请编号二者选填其一。 */
  OutApplyId?: string;
}

declare interface QueryOpenBankBindExternalSubMerchantBankAccountResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryOpenBankBindExternalSubMerchantBankAccountResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankDailyReceiptDownloadUrlRequest {
  /** 云企付渠道商户号。外部接入平台入驻云企付平台后下发。 */
  ChannelMerchantId: string;
  /** 云企付渠道子商户号。入驻在渠道商户下的子商户ID，如付款方的商户ID，对应创建支付订单中接口参数中的PayerInfo中的payerId。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 付款方式。如__EBANK_PAYMENT__:ebank付款__OPENBANK_PAYMENT__: openbank付款 */
  PaymentMethod: string;
  /** 绑卡序列号，银行卡唯一标记，资金账户ID，用于区分商户绑定多卡或多账户场景 */
  BindSerialNo: string;
  /** 查询日期，D日查询D-1日的回单文件 */
  QueryDate: string;
  /** 环境类型release:生产环境sandbox:沙箱环境缺省默认为生产环境 */
  Environment?: string;
}

declare interface QueryOpenBankDailyReceiptDownloadUrlResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 按日期查询回单下载地址响应对象。 */
  Result: QueryOpenBankDailyReceiptDownloadUrlResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankDownLoadUrlRequest {
  /** 渠道商户号，外部接入平台方入驻云企付平台后下发。EBANK_PAYMENT支付方式下，填写渠道商户号；SAFT_ISV支付方式下，填写渠道子商户号。 */
  ChannelMerchantId: string;
  /** 账单日期,yyyy-MM-dd。 */
  BillDate: string;
  /** 账单类型，默认交易账单。 */
  BillType?: string;
  /** 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境。 */
  Environment?: string;
  /** 渠道名称。不填默认为商企付。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName?: string;
  /** 支付方式。不填默认为ebank支付。__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付__SAFT_ISV__: 人资ISV支付 */
  PaymentMethod?: string;
}

declare interface QueryOpenBankDownLoadUrlResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string;
  /** 查询对账文件下载响应对象。 */
  Result: QueryOpenBankDownLoadUrlResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankExternalSubAccountBookBalanceRequest {
  /** 渠道商户ID */
  ChannelMerchantId: string;
  /** 渠道子商户ID */
  ChannelSubMerchantId: string;
  /** 渠道名称。目前只支持支付宝__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。目前只支持安心发支付__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付__SAFT_ISV__: 安心发支付 */
  PaymentMethod: string;
  /** 外部账本号ID。与ChannelAccountBookId二者选填其一。 */
  OutAccountBookId?: string;
  /** 渠道账本号ID。与OutAccountBookId二者选填其一。 */
  ChannelAccountBookId?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankExternalSubAccountBookBalanceResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryExternalAccountBookResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankExternalSubMerchantBankAccountRequest {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付 */
  PaymentMethod: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankExternalSubMerchantBankAccountResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryOpenBankExternalSubMerchantBankAccountResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankExternalSubMerchantRegistrationRequest {
  /** 渠道商户号。 */
  ChannelMerchantId: string;
  /** 渠道进件号，与外部进件号二者选填其一。 */
  ChannelRegistrationNo?: string;
  /** 外部进件号，与渠道进件号二者选填其一。 */
  OutRegistrationNo?: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankExternalSubMerchantRegistrationResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryOpenBankExternalSubMerchantRegistrationResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankOrderDetailReceiptInfoRequest {
  /** 渠道商户ID */
  ChannelMerchantId: string;
  /** 渠道子商户ID */
  ChannelSubMerchantId: string;
  /** 渠道名称，目前只支持ALIPAY */
  ChannelName: string;
  /** 支付方式，目前只支持SAFT_ISV */
  PaymentMethod: string;
  /** 外部回单申请ID，与渠道回单申请ID二者选填其一 */
  OutApplyId?: string;
  /** 渠道回单申请ID，与外部回单申请ID二者选填其一 */
  ChannelApplyId?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankOrderDetailReceiptInfoResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string | null;
  /** 返回结果。 */
  Result: QueryOpenBankOrderDetailReceiptInfoResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankPaymentOrderRequest {
  /** 渠道商户号。外部接入平台入驻云企付平台下发。 */
  ChannelMerchantId: string;
  /** 外部商户订单号。与ChannelOrderId不能同时为空。若传空串即表示忽略该参数。 */
  OutOrderId: string;
  /** 云平台订单号。与OutOrderId不能同时为空。若调用下单接口时，发生异常，无法取到ChannelOrderId，传空串即可 */
  ChannelOrderId: string;
  /** 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境。 */
  Environment?: string;
}

declare interface QueryOpenBankPaymentOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string;
  /** 查询支付结果响应对象。 */
  Result: QueryOpenBankPaymentOrderResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankProfitSharePayeeRequest {
  /** 渠道商户号。代理商/集团ID */
  ChannelMerchantId: string;
  /** 渠道子商户号。商户ID */
  ChannelSubMerchantId?: string;
  /** 分账方绑定添加返回的AccountId，账户号和账户ID选其一 */
  AccountId?: string;
  /** 银行账户号要与绑定收款方时保持一致，账户号AccountNo和账户AccoutId选其一 */
  AccountNo?: string;
  /** 使用账户号时必选 */
  Currency?: string;
  /** 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境 */
  Environment?: string;
}

declare interface QueryOpenBankProfitSharePayeeResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误信息。 */
  ErrMessage: string;
  /** 返回结果 */
  Result: QueryOpenBankProfitSharePayeeResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankRefundOrderRequest {
  /** 渠道商户号。 */
  ChannelMerchantId: string;
  /** 外部商户退单号，与渠道退款单号二者选填其一。 */
  OutRefundId?: string;
  /** 渠道退款订单号，与外部商户退款单号二者选填其一。 */
  ChannelRefundId?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankRefundOrderResponse {
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string | null;
  /** 返回结果 */
  Result: OpenBankQueryRefundOrderResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankSettleOrderRequest {
  /** 渠道商户号 */
  ChannelMerchantId: string;
  /** 渠道子商户号 */
  ChannelSubMerchantId?: string;
  /** 外部结算流水号，与渠道结算流水号二选一 */
  OutSettleId?: string;
  /** 渠道结算流水号，与外部结算流水号二选一 */
  ChannelSettleId?: string;
  /** 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境 */
  Environment?: string;
}

declare interface QueryOpenBankSettleOrderResponse {
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: QueryOpenBankSettleOrderResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankSubMerchantCredentialRequest {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。详见附录-枚举类型-ChannelName。 */
  ChannelName: string;
  /** 支付方式。合利宝渠道不需要传。 */
  PaymentMethod?: string;
  /** 外部申请流水号。外部申请流水号与渠道申请流水号两者选填其一。 */
  OutApplyId?: string;
  /** 渠道申请流水号。外部申请流水号与渠道申请流水号两者选填其一。 */
  ChannelApplyId?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankSubMerchantCredentialResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果 */
  Result: QueryOpenBankSubMerchantCredentialResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankSubMerchantRateConfigureRequest {
  /** 渠道进件序列号。 */
  ChannelRegistrationNo: string;
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。详见附录-云企付枚举类说明-ChannelName。TENPAY: 商企付WECHAT: 微信支付ALIPAY: 支付宝HELIPAY:合利宝 */
  ChannelName: string;
  /** 渠道产品费率序列号。与外部产品费率序列号二者选填其一。 */
  ChannelProductFeeNo?: string;
  /** 外部产品费率序列号。与渠道产品费率序列号二者选填其一。 */
  OutProductFeeNo?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankSubMerchantRateConfigureResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string | null;
  /** 返回结果。 */
  Result: QueryOpenBankSubMerchantRateConfigureResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankSubMerchantSignOnlineRequest {
  /** 渠道商户号。外部平台接入云企付平台下发。必填。 */
  ChannelMerchantId: string;
  /** 渠道名称。详见附录-枚举类型-ChannelName。 */
  ChannelName: string;
  /** 外部子商户ID。 */
  OutSubMerchantId?: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId?: string;
}

declare interface QueryOpenBankSubMerchantSignOnlineResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误信息。 */
  ErrMessage: string;
  /** 返回结果 */
  Result: QueryOpenBankSubMerchantSignOnlineResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankSupportBankListRequest {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。__EBANK_PAYMENT__:ebank付款__OPENBANK_PAYMENT__: openbank付款 */
  PaymentMethod: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankSupportBankListResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string | null;
  /** 返回结果。 */
  Result: QueryOpenBankSupportBankListResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankUnbindExternalSubMerchantBankAccountRequest {
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道申请编号，与外部申请编号二者选填其一。 */
  ChannelApplyId?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
  /** 外部申请编号，与渠道申请编号二者选填其一。 */
  OutApplyId?: string;
}

declare interface QueryOpenBankUnbindExternalSubMerchantBankAccountResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryOpenBankUnbindExternalSubMerchantBankAccountResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOpenBankVerificationOrderRequest {
  /** 云企付渠道商户号。外部接入平台入驻云企付平台后下发。 */
  ChannelMerchantId: string;
  /** 云企付渠道核销订单号。与OutVerificationId不能同时为空。 */
  ChannelVerificationId?: string;
  /** 外部核销申请订单号。与ChannelVerificationId不能同时为空。 */
  OutVerificationId?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface QueryOpenBankVerificationOrderResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 核销查询响应对象。 */
  Result: QueryOpenBankVerificationResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOrderRequest {
  /** 聚鑫分配的支付主 MidasAppId */
  MidasAppId: string;
  /** 用户ID，长度不小于5位， 仅支持字母和数字的组合 */
  UserId: string;
  /** type=by_order根据订单号 查订单；type=by_user根据用户id 查订单 。 */
  Type: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 每页返回的记录数。根据用户 号码查询订单列表时需要传。 用于分页展示。Type=by_order时必填 */
  Count?: number;
  /** 记录数偏移量，默认从0开 始。根据用户号码查询订单列 表时需要传。用于分页展示。Type=by_order时必填 */
  Offset?: number;
  /** 查询开始时间，Unix时间戳。Type=by_order时必填 */
  StartTime?: string;
  /** 查询结束时间，Unix时间戳。Type=by_order时必填 */
  EndTime?: string;
  /** 业务订单号，OutTradeNo与 TransactionId不能同时为 空，都传优先使用 OutTradeNo */
  OutTradeNo?: string;
  /** 聚鑫订单号，OutTradeNo与 TransactionId不能同时为 空，都传优先使用 OutTradeNo */
  TransactionId?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface QueryOrderResponse {
  /** 返回订单数 */
  TotalNum: number;
  /** 查询结果的订单列表 */
  OrderList: QueryOrderOutOrderList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOrderStatusRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 开发者流水号 */
  DeveloperNo: string;
  /** 付款订单号 */
  OrderNo?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryOrderStatusResponse {
  /** 业务系统返回码，0表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 查询订单付款状态结果 */
  Result: QueryOrderStatusResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryOutwardOrderRequest {
  /** 对接方汇出指令编号 */
  TransactionId: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface QueryOutwardOrderResponse {
  /** 查询汇出结果 */
  Result: QueryOutwardOrderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryPayerInfoRequest {
  /** 付款人ID */
  PayerId: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface QueryPayerInfoResponse {
  /** 付款人查询结果 */
  Result: QueryPayerinfoResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryReconciliationDocumentRequest {
  /** String(22)，商户号 */
  MrchCode: string;
  /** STRING(10)，文件类型（充值文件-CZ; 提现文件-TX; 交易文件-JY; 余额文件-YE; 合约文件-HY） */
  FileType: string;
  /** STRING(8)，文件日期（格式：20190101） */
  FileDate: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QueryReconciliationDocumentResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(10)，本次交易返回查询结果记录数 */
  ResultNum?: string | null;
  /** 交易信息数组 */
  TranItemArray?: FileItem[] | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryReconciliationFileApplyInfoRequest {
  /** 申请对账文件的任务ID。 */
  ApplyFileId: string;
  /** 环境名。__release__: 现网环境__sandbox__: 沙箱环境__development__: 开发环境_缺省: release_ */
  MidasEnvironment?: string;
}

declare interface QueryReconciliationFileApplyInfoResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: QueryReconciliationFileApplyInfoResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryRefundRequest {
  /** 用户ID，长度不小于5位，仅支持字母和数字的组合。 */
  UserId: string;
  /** 退款订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合。 */
  RefundId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface QueryRefundResponse {
  /** 退款状态码，退款提交成功后返回 1：退款中； 2：退款成功； 3：退款失败。 */
  State: string;
  /** 支付机构订单号 */
  ChannelExternalOrderId: string | null;
  /** 支付机构退款单号 */
  ChannelExternalRefundId: string | null;
  /** 渠道订单号 */
  ChannelOrderId: string | null;
  /** 退款总金额 */
  TotalRefundAmt: number | null;
  /** 货币类型 */
  CurrencyType: string | null;
  /** 外部订单号 */
  OutTradeNo: string | null;
  /** 退款订单号 */
  RefundId: string | null;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 指定退款订单号。与RefundId的区别是，UsedRefundId不会再做修饰，而RefundId则可能在查询退款处理时做了如添加前缀等的修饰 */
  UsedRefundId: string | null;
  /** 子单退款信息列表 */
  SubRefundList: OldSubRefund[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryShopOpenIdRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 门店编号 */
  ShopNo: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface QueryShopOpenIdResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 获取门店OpenId响应对象 */
  Result: QueryShopOpenIdResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QuerySinglePaymentResultRequest {
  /** 转账类型 */
  TransferType: number;
  /** 交易流水流水号，唯一 */
  TradeSerialNo?: string;
  /** 订单号，与TradeSerialNo不能同时为空 */
  OrderId?: string;
}

declare interface QuerySinglePaymentResultResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功 */
  ErrCode: string;
  /** 响应消息。 */
  ErrMessage: string;
  /** 返回响应 */
  Result: QuerySinglePaymentResultData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QuerySingleTransactionStatusRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(2)，功能标志（2: 会员间交易; 3: 提现; 4: 充值） */
  FunctionFlag: string;
  /** STRING(52)，交易网流水号（提现，充值或会员交易请求时的CnsmrSeqNo值） */
  TranNetSeqNo: string;
  /** STRING(50)，见证子帐户的帐号（未启用） */
  SubAcctNo?: string;
  /** STRING(8)，交易日期（未启用） */
  TranDate?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QuerySingleTransactionStatusResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(2)，记账标志（记账标志。1: 登记挂账; 2: 支付; 3: 提现; 4: 清分; 5: 下单预支付; 6: 确认并付款; 7: 退款; 8: 支付到平台; N: 其他） */
  BookingFlag?: string | null;
  /** STRING(32)，交易状态（0: 成功; 1: 失败; 2: 待确认; 5: 待处理; 6: 处理中。0和1是终态，2、5、6是中间态，其中2是特指提现后待确认提现是否成功，5是银行收到交易等待处理，6是交易正在处理） */
  TranStatus?: string | null;
  /** STRING(20)，交易金额 */
  TranAmt?: string | null;
  /** STRING(8)，交易日期 */
  TranDate?: string | null;
  /** STRING(20)，交易时间 */
  TranTime?: string | null;
  /** STRING(50)，转入子账户账号 */
  InSubAcctNo?: string | null;
  /** STRING(50)，转出子账户账号 */
  OutSubAcctNo?: string | null;
  /** STRING(300)，失败信息（当提现失败时，返回交易失败原因） */
  FailMsg?: string | null;
  /** STRING(50)，原前置流水号 */
  OldTranFrontSeqNo?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QuerySmallAmountTransferRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(52)，原交易流水号（小额鉴权交易请求时的CnsmrSeqNo值） */
  OldTranSeqNo: string;
  /** STRING(8)，交易日期（格式：20190101） */
  TranDate: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface QuerySmallAmountTransferResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(10)，返回状态（0: 成功; 1: 失败; 2: 待确认） */
  ReturnStatus?: string | null;
  /** STRING(512)，返回信息（失败返回具体信息） */
  ReturnMsg?: string | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryTradeRequest {
  /** 贸易材料流水号 */
  TradeFileId: string;
  /** 接入环境。沙箱环境填sandbox */
  Profile?: string;
}

declare interface QueryTradeResponse {
  /** 贸易材料明细查询结果 */
  Result: QueryTradeResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryTransferBatchRequest {
  /** 商户号。示例值：129284394 */
  MerchantId: string;
  /** 微信明细单号。微信区分明细单返回的唯一标识。示例值：1030000071100999991182020050700019480101 */
  NeedQueryDetail: boolean;
  /** 商家批次单号。商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。示例值：plfk2020042013 */
  MerchantBatchNo?: string;
  /** 是否查询账单明细。true-是；false-否，默认否。商户可选择是否查询指定状态的转账明细单，当转账批次单状态为“FINISHED”（已完成）时，才会返回满足条件的转账明细单。示例值：true */
  BatchId?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  Profile?: string;
  /** 请求资源起始位置。从0开始，默认值为0。示例值：20 */
  Offset?: number;
  /** 最大资源条数。该次请求可返回的最大资源（转账明细单）条数，最小20条，最大100条，不传则默认20条。不足20条按实际条数返回示例值：20 */
  Limit?: number;
  /** 明细状态。ALL：全部，需要同时查询转账成功喝失败的明细单；SUCCESS：转账成功，只查询成功的明细单；FAIL：转账失败，只查询转账失败的明细单。示例值：FAIL */
  DetailStatus?: string;
}

declare interface QueryTransferBatchResponse {
  /** 商户号。示例值：19300009329 */
  MerchantId?: string;
  /** 商家批次单号。商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。示例值：plfk2020042013 */
  MerchantBatchNo?: string;
  /** 微信批次单号。微信商家转账系统返回的唯一标识。示例值：1030000071100999991182020050700019480001 */
  BatchId?: string;
  /** 直连商户appId。商户号绑定的appid。示例值：wxf636efh567hg4356 */
  MerchantAppId?: string;
  /** 批次状态。ACCEPTED:已受理，批次已受理成功，若发起批量转账的30分钟后，转账批次单仍处于该状态，可能原因是商户账户余额不足等。商户可查询账户资金流水，若该笔转账批次单的扣款已经发生，则表示批次已经进入转账中，请再次查单确认；PROCESSING:转账中，已开始处理批次内的转账明细单；FINISHED:已完成，批次内的所有转账明细单都已处理完成；CLOSED:已关闭，可查询具体的批次关闭原因确认；示例值：ACCEPTED */
  BatchStatus?: string;
  /** 批次关闭原因。如果批次单状态为“CLOSED”（已关闭），则有关闭原因；MERCHANT_REVOCATION：商户主动撤销；OVERDUE_CLOSE：系统超时关闭。示例值：OVERDUE_CLOSE */
  CloseReason?: string | null;
  /** 转账总金额。转账金额，单位为分。示例值：4000000 */
  TotalAmount?: number;
  /** 转账总笔数。一个转账批次最多允许发起三千笔转账。示例值：200 */
  TotalNum?: number;
  /** 批次受理成功时返回，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。示例值：2015-05-20T13:29:35.120+08:00 */
  CreateTime?: string | null;
  /** 批次最近一次更新时间，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。示例值：2015-05-20T13:29:35.120+08:00 */
  UpdateTime?: string | null;
  /** 转账成功金额。转账成功的金额，单位为分，可能随时变化。示例值：4000000 */
  SuccessAmount?: number | null;
  /** 转账成功的笔数。可能随时变化。示例值：200 */
  SuccessNum?: number | null;
  /** 转账失败金额。转账失败的金额，单位为分，可能随时变化。示例值：4000000 */
  FailAmount?: number | null;
  /** 转账失败笔数。可能随时变化。示例值：200 */
  FailNum?: number | null;
  /** 转账明细列表。返回明细详情 */
  TransferDetails?: TransferDetailResponse[] | null;
  /** 批次类型。 */
  BatchType?: string | null;
  /** 批次名称。 */
  BatchName?: string | null;
  /** 批次标注。 */
  BatchRemark?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryTransferDetailRequest {
  /** 商户号。示例值：129284394 */
  MerchantId: string;
  /** 商家批次单号。商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。示例值：plfk2020042013 */
  MerchantBatchNo?: string;
  /** 商家明细单号。商户系统内部的商家明细单号示例值：plfk2020042013 */
  MerchantDetailNo?: string;
  /** 微信批次单号。微信商家转账系统返回的唯一标识。商家单号（包含批次号和明细单号）和微信单号（包含批次号和明细单号）二者必填其一。示例值：1030000071100999991182020050700019480001 */
  BatchId?: string;
  /** 微信明细单号。微信区分明细单返回的唯一标识。示例值：1030000071100999991182020050700019480001 */
  DetailId?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  Profile?: string;
}

declare interface QueryTransferDetailResponse {
  /** 商户号。示例值：19300009329 */
  MerchantId?: string;
  /** 商家批次单号。商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。示例值：plfk2020042013 */
  MerchantBatchNo?: string;
  /** 微信批次单号。微信商家转账系统返回的唯一标识。示例值：1030000071100999991182020050700019480001 */
  BatchId?: string;
  /** 商家明细单号。商户系统内部的商家明细单号示例值：plfk2020042013 */
  MerchantDetailNo?: string;
  /** 微信明细单号。微信区分明细单返回的唯一标识。示例值：1030000071100999991182020050700019480001 */
  DetailId?: string;
  /** 明细状态。PROCESSING：转账中，正在处理，结果未明；SUCCESS：转账成功；FAIL：转账失败，需要确认失败原因以后，再决定是否重新发起地该笔明细的转账。示例值：SUCCESS */
  DetailStatus?: string;
  /** 转账金额。单位为分。示例值：200 */
  TransferAmount?: number;
  /** 失败原因。如果转账失败则有失败原因ACCOUNT_FROZEN：账户冻结REAL_NAME_CHECK_FAIL：用户未实名NAME_NOT_CORRECT：用户姓名校验失败OPENID_INVALID：Openid校验失败TRANSFER_QUOTA_EXCEED：超过用户单笔收款额度DAY_RECEIVED_QUOTA_EXCEED：超过用户单日收款额度MONTH_RECEIVED_QUOTA_EXCEED：超过用户单月收款额度DAY_RECEIVED_COUNT_EXCEED：超过用户单日收款次数PRODUCT_AUTH_CHECK_FAIL：产品权限校验失败OVERDUE_CLOSE：转账关闭ID_CARD_NOT_CORRECT：用户身份证校验失败ACCOUNT_NOT_EXIST：用户账户不存在TRANSFER_RISK：转账存在风险示例值：ACCOUNT_FROZEN */
  FailReason?: string | null;
  /** 转账发起时间。遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。示例值：2015-05-20T13:29:35.120+08:00 */
  InitiateTime?: string | null;
  /** 转账更新时间。遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。示例值：2015-05-20T13:29:35.120+08:00 */
  UpdateTime?: string | null;
  /** 用户名。示例值：张三 */
  UserName?: string | null;
  /** 转账备注。单条转账备注（微信用户会收到该备注）。UTF8编码，最多32字符。示例值：2020年4月报销 */
  TransferRemark?: string | null;
  /** 商家绑定公众号APPID。 */
  MerchantAppId?: string | null;
  /** 用户openId。 */
  OpenId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryTransferResultRequest {
  /** 商户号 */
  MerchantId: string;
  /** 申请商户号的appid或者商户号绑定的appid */
  MerchantAppId: string;
  /** 1、 微信企业付款 2、 支付宝转账 3、 平安银企直联代发转账 */
  TransferType: number;
  /** 交易流水流水号（与 OrderId 不能同时为空） */
  TradeSerialNo?: string;
  /** 订单号（与 TradeSerialNo 不能同时为空） */
  OrderId?: string;
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
}

declare interface QueryTransferResultResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功 */
  ErrCode: string;
  /** 响应消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: QueryTransferResultData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RechargeByThirdPayRequest {
  /** 请求类型 此接口固定填：MemberRechargeThirdPayReq */
  RequestType: string;
  /** 商户号 */
  MerchantCode: string;
  /** 支付渠道 */
  PayChannel: string;
  /** 子渠道 */
  PayChannelSubId: number;
  /** 交易订单号 */
  OrderId: string;
  /** 父账户账号，资金汇总账号 */
  BankAccountNumber: string;
  /** 平台短号(银行分配) */
  PlatformShortNumber: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 交易流水号 */
  TransSequenceNumber: string;
  /** 子账户账号 */
  BankSubAccountNumber: string;
  /** 交易手续费，以元为单位 */
  TransFee: string;
  /** 第三方支付渠道类型 0001-微信 0002-支付宝 0003-京东支付 */
  ThirdPayChannel: string;
  /** 第三方渠道商户号 */
  ThirdPayChannelMerchantCode: string;
  /** 第三方渠道订单号或流水号 */
  ThirdPayChannelOrderId: string;
  /** 交易金额 */
  CurrencyAmount: string;
  /** 单位，1：元，2：角，3：分 */
  CurrencyUnit: string;
  /** 币种 */
  CurrencyType: string;
  /** 交易网会员代码 */
  TransNetMemberCode: string;
  /** midas环境参数 */
  MidasEnvironment: string;
  /** 保留域 */
  ReservedMessage?: string;
  /** 备注 */
  Remark?: string;
}

declare interface RechargeByThirdPayResponse {
  /** 保留字段 */
  ReservedMessage?: string | null;
  /** 银行流水号 */
  FrontSequenceNumber?: string | null;
  /** 请求类型 */
  RequestType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RechargeMemberThirdPayRequest {
  /** STRING(32)，交易网会代码 */
  TranNetMemberCode: string;
  /** STRING(20)，会员充值金额 */
  MemberFillAmt: string;
  /** STRING(20)，手续费金额 */
  Commission: string;
  /** STRING(3)，币种。如RMB */
  Ccy: string;
  /** STRING(20)，支付渠道类型。0001-微信0002-支付宝0003-京东支付 */
  PayChannelType: string;
  /** STRING(50)，支付渠道所分配的商户号 */
  PayChannelAssignMerNo: string;
  /** STRING(52)，支付渠道交易流水号 */
  PayChannelTranSeqNo: string;
  /** STRING(52)，电商见证宝订单号 */
  EjzbOrderNo: string;
  /** String(22)，商户号 */
  MrchCode: string;
  /** STRING(500)，电商见证宝订单内容 */
  EjzbOrderContent?: string;
  /** STRING(300)，备注 */
  Remark?: string;
  /** STRING(300)，保留域1 */
  ReservedMsgOne?: string;
  /** STRING(300)，保留域2 */
  ReservedMsgTwo?: string;
  /** STRING(300)，保留域3 */
  ReservedMsgThree?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface RechargeMemberThirdPayResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(52)，前置流水号 */
  FrontSeqNo?: string | null;
  /** STRING(20)，会员子账户交易前可用余额 */
  MemberSubAcctPreAvailBal?: string | null;
  /** STRING(300)，保留域1 */
  ReservedMsgOne?: string | null;
  /** STRING(300)，保留域2 */
  ReservedMsgTwo?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefundCloudOrderRequest {
  /** 米大师分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户Id，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 退款订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  RefundId: string;
  /** 退款金额，单位：分当该字段为空或者为0时，系统会默认使用订单当实付金额作为退款金额 */
  TotalRefundAmt: number;
  /** 商品订单，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  OutTradeNo: string;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  MidasEnvironment?: string;
  /** 平台应收金额，单位：分 */
  PlatformRefundAmt?: number;
  /** 结算应收金额，单位：分 */
  MchRefundAmt?: number;
  /** 支持多个子订单批量退款单个子订单退款支持传SubOutTradeNo也支持传SubOrderRefundList，都传的时候以SubOrderRefundList为准。如果传了子单退款细节，外部不需要再传退款金额，平台应退，商户应退金额 */
  SubOrderRefundList?: CloudSubOrderRefund[];
  /** 渠道订单号，当出现重复支付时，可以将重复支付订单的渠道订单号传入，以进行退款（注意：目前该重复支付订单的渠道订单号仅能通过米大师内部获取），更多重复支付订单退款说明，请参考[重复支付订单退款说明](https://dev.tke.midas.qq.com/juxin-doc-next/apidocs/receive-order/Refund.html#%E9%87%8D%E5%A4%8D%E6%94%AF%E4%BB%98%E8%AE%A2%E5%8D%95%E9%80%80%E6%AC%BE%E8%AF%B4%E6%98%8E) */
  ChannelOrderId?: string;
  /** 通知地址 */
  RefundNotifyUrl?: string;
  /** 透传字段，退款成功回调透传给应用，用于开发者透传自定义内容 */
  Metadata?: string;
  /** 渠道扩展退款促销列表，可将各个渠道的退款促销信息放于该列表 */
  ExternalRefundPromptGroupList?: string;
}

declare interface RefundCloudOrderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefundMemberTransactionRequest {
  /** 转出见证子账户的户名 */
  OutSubAccountName: string;
  /** 转入见证子账户的户名 */
  InSubAccountName: string;
  /** 子渠道 */
  PayChannelSubId: number;
  /** 转出见证子账户账号 */
  OutSubAccountNumber: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 转入见证子账户账号 */
  InSubAccountNumber: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 父账户账号，资金汇总账号 */
  BankAccountNumber: string;
  /** 原老订单流水号 */
  OldTransSequenceNumber: string;
  /** 银行注册商户号 */
  MerchantCode: string;
  /** 请求类型，固定为MemberTransactionRefundReq */
  RequestType: string;
  /** 交易金额 */
  CurrencyAmount: string;
  /** 交易流水号 */
  TransSequenceNumber: string;
  /** 渠道 */
  PayChannel: string;
  /** 原订单号 */
  OldOrderId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 订单号 */
  OrderId: string;
  /** Midas环境标识 release 现网环境 sandbox 沙箱环境development 开发环境 */
  MidasEnvironment: string;
  /** 转出子账户交易网会员代码 */
  OutTransNetMemberCode?: string;
  /** 转入子账户交易网会员代码 */
  InTransNetMemberCode?: string;
  /** 保留域 */
  ReservedMessage?: string;
  /** 平台短号(银行分配) */
  PlatformShortNumber?: string;
  /** 0-登记挂账，1-撤销挂账 */
  TransType?: string;
  /** 交易手续费 */
  TransFee?: string;
}

declare interface RefundMemberTransactionResponse {
  /** 请求类型 */
  RequestType?: string;
  /** 银行流水号 */
  FrontSequenceNumber?: string;
  /** 保留域 */
  ReservedMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefundOpenBankOrderRequest {
  /** 外部商户退款单号。 */
  OutRefundId: string;
  /** 退款金额。单位分。 */
  RefundAmount: number;
  /** 渠道商户号。外部平台接入云企付平台下发。必填。 */
  ChannelMerchantId?: string;
  /** 外部商户订单号，与云企付渠道订单号二者不能同时为空。 */
  OutOrderId?: string;
  /** 云企付渠道订单号，与外部订单号二者不能同时为空。 */
  ChannelOrderId?: string;
  /** 退款通知地址。 */
  NotifyUrl?: string;
  /** 退款原因。当EBANK_PAYMENT担保支付订单退款时，此字段必传。 */
  RefundReason?: string;
  /** 第三方渠道退款附加信息。详见附录-复杂类型。若未作特殊说明，则无需传入。 */
  ExternalRefundData?: string;
  /** 备注信息 */
  Remark?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
  /** 分账信息列表。 */
  ProfitShareInfoList?: OpenBankProfitShareInfo[];
}

declare interface RefundOpenBankOrderResponse {
  /** 错误码 */
  ErrCode: string;
  /** 错误消息 */
  ErrMessage: string | null;
  /** 返回结果 */
  Result: OpenBankRefundOrderApplyResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefundOrderRequest {
  /** 进件成功后返给商户方的AppId */
  MerchantAppId: string;
  /** 平台流水号。消费订单发起成功后，返回的平台唯一订单号。 */
  OrderNo: string;
}

declare interface RefundOrderResponse {
  /** 进件成功后返给商户方的AppId */
  MerchantAppId: string;
  /** 平台流水号。消费订单发起成功后，返回的平台唯一订单号。 */
  OrderNo: string;
  /** 订单退款状态。0-退款失败1-退款成功 2-可疑状态 */
  Status: string;
  /** 订单退款状态描述 */
  Description: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefundRequest {
  /** 用户ID，长度不小于5位， 仅支持字母和数字的组合 */
  UserId: string;
  /** 退款订单号，仅支持数字、 字母、下划线（_）、横杠字 符（-）、点（.）的组合 */
  RefundId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 退款金额，单位：分。备注：当该字段为空或者为0 时，系统会默认使用订单当 实付金额作为退款金额 */
  TotalRefundAmt: number;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 商品订单，仅支持数字、字 母、下划线（_）、横杠字符 （-）、点（.）的组合。 OutTradeNo ,TransactionId 二选一,不能都为空,优先使用 OutTradeNo */
  OutTradeNo?: string;
  /** 结算应收金额，单位：分 */
  MchRefundAmt?: number;
  /** 调用下单接口获取的聚鑫交 易订单。 OutTradeNo ,TransactionId 二选一,不能都为空,优先使用 OutTradeNo */
  TransactionId?: string;
  /** 平台应收金额，单位：分 */
  PlatformRefundAmt?: number;
  /** 支持多个子订单批量退款单 个子订单退款支持传 SubOutTradeNo ，也支持传 SubOutTradeNoList ，都传的时候以 SubOutTradeNoList 为准。 如果传了子单退款细节，外 部不需要再传退款金额，平 台应退，商户应退金额，我 们可以直接根据子单退款算出来总和。 */
  SubOrderRefundList?: RefundOutSubOrderRefundList[];
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface RefundResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefundTlinxOrderRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 原始订单的开发者交易流水号 */
  DeveloperNo: string;
  /** 新退款订单的开发者流水号，同一门店内唯一 */
  RefundOutNo: string;
  /** 退款订单名称，可以为空 */
  RefundOrderName: string;
  /** 退款金额（以分为单位，没有小数点） */
  RefundAmount: string;
  /** 主管密码，对密码进行SHA-1加密，默认为123456 */
  ShopPassword: string;
  /** 退款备注 */
  Remark?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface RefundTlinxOrderResponse {
  /** 业务系统返回码，0表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 退款响应对象 */
  Result: RefundOrderResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterBehaviorRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 功能标志1：登记行为记录信息2：查询补录信息 */
  FunctionFlag: number;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** 操作点击时间yyyyMMddHHmmss功能标志FunctionFlag=1时必输 */
  OperationClickTime?: string;
  /** IP地址功能标志FunctionFlag=1时必输 */
  IpAddress?: string;
  /** MAC地址功能标志FunctionFlag=1时必输 */
  MacAddress?: string;
  /** 签约渠道1: App2: 平台H5网页3：公众号4：小程序功能标志FunctionFlag=1时必输 */
  SignChannel?: number;
}

declare interface RegisterBehaviorResponse {
  /** 补录是否成功标志功能标志为2时存在。S：成功F：失败 */
  ReplenishSuccessFlag: string | null;
  /** 签约信息 */
  RegisterInfo: RegisterInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterBillRequest {
  /** 请求类型此接口固定填：RegBillSupportWithdrawReq */
  RequestType: string;
  /** 商户号 */
  MerchantCode: string;
  /** 支付渠道 */
  PayChannel: string;
  /** 子渠道 */
  PayChannelSubId: number;
  /** 交易订单号 */
  OrderId: string;
  /** 父账户账号，资金汇总账号 */
  BankAccountNo: string;
  /** 平台短号(银行分配) */
  PlatformShortNo: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 交易流水号 */
  TransSeqNo: string;
  /** 暂未使用，默认传0.0 */
  TranFee: string;
  /** 挂账金额，以元为单位 */
  OrderAmt: string;
  /** 子账户账号 */
  BankSubAccountNo: string;
  /** 交易网会员代码 */
  TranNetMemberCode: string;
  /** 0,登记挂账，1，撤销挂账 */
  TranType: string;
  /** 保留域 */
  ReservedMessage?: string;
  /** 备注 */
  Remark?: string;
  /** Midas环境参数 */
  MidasEnvironment?: string;
}

declare interface RegisterBillResponse {
  /** 银行流水号 */
  FrontSeqNo?: string;
  /** 保留字段 */
  ReservedMessage?: string;
  /** 请求类型 */
  RequestType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterBillSupportWithdrawRequest {
  /** STRING(32)，交易网会员代码 */
  TranNetMemberCode: string;
  /** STRING(50)，订单号 */
  OrderNo: string;
  /** STRING(20)，挂账金额（包含交易费用） */
  SuspendAmt: string;
  /** STRING(20)，交易费用（暂未使用，默认传0.0） */
  TranFee: string;
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(300)，备注 */
  Remark?: string;
  /** STRING(300)，保留域1 */
  ReservedMsgOne?: string;
  /** STRING(300)，保留域2 */
  ReservedMsgTwo?: string;
  /** STRING(300)，保留域3 */
  ReservedMsgThree?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface RegisterBillSupportWithdrawResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** STRING(52)，见证系统流水号 */
  FrontSeqNo?: string | null;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevResigterBillSupportWithdrawRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(32)，交易网会员代码 */
  TranNetMemberCode: string;
  /** STRING(30)，原订单号（RegisterBillSupportWithdraw接口中的订单号） */
  OldOrderNo: string;
  /** STRING(20)，撤销金额（支持部分撤销，不能大于原订单可用金额，包含交易费用） */
  CancelAmt: string;
  /** STRING(20)，交易费用（暂未使用，默认传0.0） */
  TranFee: string;
  /** STRING(300)，备注 */
  Remark?: string;
  /** STRING(300)，保留域1 */
  ReservedMsgOne?: string;
  /** STRING(300)，保留域2 */
  ReservedMsgTwo?: string;
  /** STRING(300)，保留域3 */
  ReservedMsgThree?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface RevResigterBillSupportWithdrawResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(52)，见证系统流水号 */
  FrontSeqNo?: string | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReviseMbrPropertyRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(50)，见证子账户的账号 */
  SubAcctNo: string;
  /** STRING(10)，会员属性（00-普通子账号; SH-商户子账户。暂时只支持00-普通子账号改为SH-商户子账户） */
  MemberProperty: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface ReviseMbrPropertyResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevokeMemberRechargeThirdPayRequest {
  /** STRING(52)，原充值的前置流水号 */
  OldFillFrontSeqNo: string;
  /** STRING(20)，原充值的支付渠道类型 */
  OldFillPayChannelType: string;
  /** STRING(52)，原充值的支付渠道交易流水号 */
  OldPayChannelTranSeqNo: string;
  /** STRING(52)，原充值的电商见证宝订单号 */
  OldFillEjzbOrderNo: string;
  /** STRING(20)，申请撤销的会员金额 */
  ApplyCancelMemberAmt: string;
  /** STRING(20)，申请撤销的手续费金额 */
  ApplyCancelCommission: string;
  /** String(22)，商户号 */
  MrchCode: string;
  /** STRING(300)，备注 */
  Remark?: string;
  /** STRING(300)，保留域1 */
  ReservedMsgOne?: string;
  /** STRING(300)，保留域2 */
  ReservedMsgTwo?: string;
  /** STRING(300)，保留域3 */
  ReservedMsgThree?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface RevokeMemberRechargeThirdPayResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(52)，前置流水号 */
  FrontSeqNo?: string | null;
  /** STRING(300)，保留域1 */
  ReservedMsgOne?: string | null;
  /** STRING(300)，保留域2 */
  ReservedMsgTwo?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevokeRechargeByThirdPayRequest {
  /** 请求类型此接口固定填：RevokeMemberRechargeThirdPayReq */
  RequestType: string;
  /** 商户号 */
  MerchantCode: string;
  /** 支付渠道 */
  PayChannel: string;
  /** 子渠道 */
  PayChannelSubId: number;
  /** 原始充值交易订单号 */
  OrderId: string;
  /** 父账户账号，资金汇总账号 */
  BankAccountNumber: string;
  /** 平台短号(银行分配) */
  PlatformShortNumber: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 计费签名 */
  MidasSignature: string;
  /** 交易流水号 */
  TransSequenceNumber: string;
  /** 申请撤销的手续费金额,以元为单位 */
  TransFee: string;
  /** 第三方支付渠道类型 0001-微信 0002-支付宝 0003-京东支付 */
  ThirdPayChannel: string;
  /** 第三方渠道订单号或流水号 */
  ThirdPayChannelOrderId: string;
  /** 充值接口银行返回的流水号(FrontSeqNo) */
  OldFrontSequenceNumber: string;
  /** 申请撤销的金额 */
  CurrencyAmount: string;
  /** 单位，1：元，2：角，3：分 目前固定填1 */
  CurrencyUnit: string;
  /** 币种 目前固定填RMB */
  CurrencyType: string;
  /** Midas环境标识 */
  MidasEnvironment: string;
  /** 保留域 */
  ReservedMessage?: string;
  /** 备注 */
  Remark?: string;
}

declare interface RevokeRechargeByThirdPayResponse {
  /** 请求类型 */
  RequestType?: string;
  /** 保留域 */
  ReservedMessage?: string | null;
  /** 银行流水号 */
  FrontSequenceNumber?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncContractDataRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户ID，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 签约使用的渠道 */
  Channel: string;
  /** 业务签约合同协议号 */
  OutContractCode: string;
  /** 签约状态，枚举值CONTRACT_STATUS_INVALID=无效状态CONTRACT_STATUS_SIGNED=已签约CONTRACT_STATUS_TERMINATED=已解约CONTRACT_STATUS_PENDING=签约进行中 */
  ContractStatus: string;
  /** 签约同步信息 */
  ContractSyncInfo: ContractSyncInfo;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId?: string;
  /** 用户类型，枚举值USER_ID: 用户IDANONYMOUS: 匿名类型 USER_ID默认值为 USER_ID */
  UserType?: string;
  /** 场景信息 */
  SceneInfo?: SceneInfo;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface SyncContractDataResponse {
  /** 请求处理信息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateContractRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户ID，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 指定渠道： wechat：微信支付 qqwallet：QQ钱包 bank：网银支付 只有一个渠道时需要指定 */
  Channel: string;
  /** 枚举值：CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE: 按OutContractCode+ContractSceneId解约CONTRACT_TERMINATION_MODE_BY_CHANNEL_CONTRACT_CODE：按ChannelContractCode解约 */
  TerminateMode: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId?: string;
  /** 业务签约合同协议号 当TerminateMode=CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE 时 必填 */
  OutContractCode?: string;
  /** 签约场景ID，当 TerminateMode=CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE 时 必填，在米大师侧托管后生成 */
  ContractSceneId?: string;
  /** 米大师生成的协议号 当 TerminateMode=CONTRACT_TERMINATION_MODE_BY_CHANNEL_CONTRACT_CODE 时 必填 */
  ChannelContractCode?: string;
  /** 第三方渠道合约数据，json字符串，与特定渠道有关 */
  ExternalContractData?: string;
  /** 终止合约原因 */
  TerminationReason?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** USER_ID: 用户IDANONYMOUS: 匿名类型 USER_ID默认值为 USER_ID */
  UserType?: string;
  /** 签约方式 */
  ContractMethod?: string;
  /** 签约代扣穿透查询存量数据迁移模式 */
  MigrateMode?: string;
}

declare interface TerminateContractResponse {
  /** 解约数据 */
  ContractTerminateData: ResponseTerminateContract;
  /** 请求处理信息 */
  Msg: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransferDetailRequest {
  /** 商家明细单号。商户系统内部区分转账批次单下不同转账明细单的唯一标识，要求此参数只能由数字、大小写字母组成。示例值：x23zy545Bd5436 */
  MerchantDetailNo: string;
  /** 转账金额。转账金额单位为分。示例值：200000 */
  TransferAmount: number;
  /** 转账备注。单条转账备注（微信用户会收到该备注）。UTF8编码，最多32字符。示例值：2020年4月报销 */
  TransferRemark: string;
  /** 用户在直连商户下的唯一标识。示例值：o-MYE42l80oelYMDE34nYD456Xoy */
  OpenId: string;
  /** 收款用户姓名。收款方姓名。示例值：张三 */
  UserName: string;
}

declare interface TransferDetailResponse {
  /** 商家明细单号。商户系统内部的商家明细单号示例值：plfk2020042013 */
  MerchantDetailNo: string;
  /** 微信明细单号。微信区分明细单返回的唯一标识。示例值：1030000071100999991182020050700019480001 */
  DetailId: string;
  /** 明细状态。PROCESSING：转账中，正在处理，结果未明；SUCCESS：转账成功；FAIL：转账失败，需要确认失败原因以后，再决定是否重新发起地该笔明细的转账。示例值：SUCCESS */
  DetailStatus: string;
}

declare interface TransferSinglePayRequest {
  /** 商户号 */
  MerchantId: string;
  /** 微信申请商户号的appid或者商户号绑定的appid支付宝、平安填入MerchantId */
  MerchantAppId: string;
  /** 1、 微信企业付款 2、 支付宝转账 3、 平安银企直联代发转账 */
  TransferType: number;
  /** 订单流水号，唯一，不能包含特殊字符，长度最大限制64位，推荐使用字母，数字组合，"_","-"组合 */
  OrderId: string;
  /** 转账金额，单位分 */
  TransferAmount: number;
  /** 收款方标识。微信为open_id；支付宝为会员alipay_user_id;平安为收款方银行账号 */
  PayeeId: string;
  /** 收款方姓名。支付宝可选；微信，平安模式下必传 */
  PayeeName?: string;
  /** 收款方附加信息，平安接入使用。需要以JSON格式提供以下字段：PayeeBankName：收款人开户行名称 CcyCode：货币类型（RMB-人民币） UnionFlag：行内跨行标志（1：行内转账，0：跨行转账）。 */
  PayeeExtends?: string;
  /** 请求预留字段，原样透传返回 */
  ReqReserved?: string;
  /** 业务备注 */
  Remark?: string;
  /** 转账结果回调通知URL。若不填，则不进行回调。 */
  NotifyUrl?: string;
  /** 接入环境。沙箱环境填sandbox。 */
  Profile?: string;
}

declare interface TransferSinglePayResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功 */
  ErrCode: string;
  /** 响应消息 */
  ErrMessage: string;
  /** 返回结果 */
  Result: TransferSinglePayData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindAcctRequest {
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId: string;
  /** 用于提现<敏感信息>加密详见《商户端接口敏感信息加密说明》 */
  SettleAcctNo: string;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** 敏感信息加密类型:RSA: rsa非对称加密，使用RSA-PKCS1-v1_5AES: aes对称加密，使用AES256-CBC-PCKS7padding缺省: RSA */
  EncryptType?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
}

declare interface UnBindAcctResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindOpenBankExternalSubMerchantBankAccountRequest {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。__TENPAY__: 商企付__WECHAT__: 微信支付__ALIPAY__: 支付宝 */
  ChannelName: string;
  /** 支付方式。__EBANK_PAYMENT__: ebank支付__OPENBANK_PAYMENT__: openbank支付 */
  PaymentMethod: string;
  /** 绑卡序列号。 */
  BindSerialNo: string;
  /** 外部申请编号。 */
  OutApplyId: string;
  /** 通知地址。 */
  NotifyUrl?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface UnbindOpenBankExternalSubMerchantBankAccountResponse {
  /** 错误码。__SUCCESS__: 成功__其他__: 见附录-错误码表 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果。 */
  Result: UnbindOpenBankExternalSubMerchantBankAccountResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindRelateAcctRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(2)，功能标志（1: 解绑） */
  FunctionFlag: string;
  /** STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔） */
  TranNetMemberCode: string;
  /** STRING(50)，待解绑的提现账户的账号（提现账号） */
  MemberAcctNo: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface UnbindRelateAcctResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求） */
  FrontSeqNo?: string | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnifiedCloudOrderRequest {
  /** 米大师分配的支付主MidasAppId */
  MidasAppId: string;
  /** 用户ID长度不小于5位，仅支持字母和数字的组合，长度限制以具体接入渠道为准 */
  UserId: string;
  /** 开发者主订单号支付订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合，长度供参考，部分渠道存在长度更短的情况接入时请联系开发咨询 */
  OutTradeNo: string;
  /** 货币类型ISO货币代码，CNY */
  CurrencyType: string;
  /** 商品ID业务自定义的商品id，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合。 */
  ProductId: string;
  /** 商品名称业务自定义的商品名称，无需URL编码，长度限制以具体所接入渠道为准。 */
  ProductName: string;
  /** 商品详情业务自定义的商品详情，无需URL编码，长度限制以具体所接入渠道为准。 */
  ProductDetail: string;
  /** 原始金额单位：分，需要注意的是，OriginalAmt>=TotalAmt */
  OriginalAmt: number;
  /** 支付金额单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome。 */
  TotalAmt: number;
  /** 环境类型__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  MidasEnvironment?: string;
  /** 支付SubAppId米大师计费SubAppId，代表子商户。指定使用该商户的商户号下单时必传。 */
  SubAppId?: string;
  /** 顶层支付渠道银行收单:openbank_ccb: 建设银行openbank_icbc: 工商银行openbank_cmb: 招商银行openbank_ping: 平安银行openbank_icbc_jft：工商银行聚付通非银行收单，可以为空 */
  RealChannel?: string;
  /** 支付渠道wechat：微信支付wechat_ecommerce: 微信电商收付通open_alipay: 支付宝open_quickpass: 银联云闪付icbc_epay: 工银e支付foreign_cardpay: 外卡支付icbc_jft_wechat: 工行聚付通-微信icbc_jft_alipay: 工行聚付通-支付宝icbc_jft_epay: 工行聚付通-e支付指定渠道下单时必传 */
  Channel?: string;
  /** 透传字段支付成功回调透传给应用，用于开发者透传自定义内容。 */
  Metadata?: string;
  /** 数量购买数量,不传默认为1。 */
  Quantity?: number;
  /** Web端回调地址Web端网页回调地址，仅当Web端SDK使用页面跳转方式时有效。 */
  CallbackUrl?: string;
  /** 支付取消地址 */
  CancelUrl?: string;
  /** 微信AppIdwechat渠道或wchat_ecommerce渠道可以指定下单时的wxappid。 */
  WxAppId?: string;
  /** 微信SubAppIdwechat渠道可以指定下单时的sub_appid。 */
  WxSubAppId?: string;
  /** 微信公众号/小程序OpenId微信公众号/小程序支付时为必选，需要传微信下的openid。 */
  WxOpenId?: string;
  /** 微信公众号/小程序SubOpenId在服务商模式下，微信公众号/小程序支付时wx_sub_openid和wx_openid二选一。 */
  WxSubOpenId?: string;
  /** 平台应收金额单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome */
  TotalPlatformIncome?: number;
  /** 结算应收金额单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome */
  TotalMchIncome?: number;
  /** 子订单列表格式：子订单号、子应用Id、金额。压缩后最长不可超过32K字节(去除空格，换行，制表符等无意义字符)。 */
  SubOrderList?: CloudSubOrder[];
  /** 结算信息例如是否需要分账、是否需要支付确认等，注意：如果子单列表中传入了SettleInfo，在主单中不可再传入SettleInfo字段。 */
  SettleInfo?: CloudSettleInfo;
  /** 附加项信息列表例如溢价信息、抵扣信息、积分信息、补贴信息通过该字段可以实现渠道方的优惠抵扣补贴等营销功能注意：当传SubOrderList时，请在子单信息中传附加项信息，不要在主单中传该字段。 */
  AttachmentInfoList?: CloudAttachmentInfo[];
  /** 支付通知地址调用方可通过该字段传入自定义支付通知地址。 */
  PaymentNotifyUrl?: string;
  /** 支付场景需要结合 RealChannel和Channel字段使用可选值:wechat-app 微信APP支付方式wechat-mini 微信小程序支付，示例：当 RealChannel=wechat Channel=wechat PayScene=wechat-mini时，内部会直接以小程序方式调用微信统一下单接口。 */
  PayScene?: string;
  /** 语言代码取值请参考[ISO 639-1代码表](https://zh.wikipedia.org/zh-cn/ISO_639-1%E4%BB%A3%E7%A0%81%E8%A1%A8) */
  LocaleCode?: string;
  /** 地区代码取值请参考[ISO 3166-1二位字母代码表](https://zh.wikipedia.org/zh-cn/ISO_3166-1%E4%BA%8C%E4%BD%8D%E5%AD%97%E6%AF%8D%E4%BB%A3%E7%A0%81) */
  RegionCode?: string;
  /** 用户IP请求用户的IP地址，特定的渠道或特定的支付方式，此字段为必填wechat_ecommerce渠道 - h5支付方式，此字段必填。 */
  UserClientIp?: string;
  /** 渠道订单号生成模式枚举值。决定请求渠道方时的订单号的生成模式，详情请联系米大师沟通。不指定时默认为由米大师自行生成。 */
  ChannelOrderIdMode?: string;
  /** 全局支付时间信息 */
  GlobalPayTimeInfo?: CloudGlobalPayTimeInfo;
  /** 渠道应用ID取用方式USE_APPID 使用渠道应用Id;USE_SUB_APPID 使用子渠道应用Id;USE_APPID_AND_SUB_APPID 既使用渠道应用Id也使用子渠道应用ID。 */
  ChannelAppIdPolicy?: string;
  /** 门店信息特定的渠道或特定的支付方式，此字段为必填wechat_ecommerce渠道 - h5支付方式，此字段必填 */
  StoreInfo?: CloudStoreInfo;
  /** 客户端信息特定的渠道或特定的支付方式，此字段为必填wechat_ecommerce渠道 - h5支付方式，此字段必填 */
  ClientInfo?: CloudClientInfo;
  /** 渠道扩展促销列表可将各个渠道的促销信息放于该列表。 */
  ExternalPromptGroupList?: CloudExternalPromptGroup[];
  /** 收单模式ORDER_RECEIVE_MODE_COMMON - 普通支付ORDER_RECEIVE_MODE_COMBINE - 合单支付ORDER_RECEIVE_MODE_V_COMBINE - 虚拟合单支付若不传入该字段，则会根据是否传入子单来判断是 普通支付 还是 合单支付 */
  OrderReceiveMode?: string;
  /** 渠道方用户信息列表 */
  ExternalUserInfoList?: CloudExternalUserInfo[];
  /** 渠道透传数据列表 */
  ExternalAttachmentDataList?: CloudExternalAttachmentData[];
}

declare interface UnifiedCloudOrderResponse {
  /** 米大师的交易订单号。 */
  TransactionId: string | null;
  /** 开发者的支付订单号。 */
  OutTradeNo: string | null;
  /** SDK的支付参数。支付参数透传给米大师SDK（原文透传给SDK即可，不需要解码） */
  PayInfo: string | null;
  /** 支付金额，单位：分。 */
  TotalAmt: number | null;
  /** 渠道信息，用于拉起渠道支付。json字符串，注意此字段仅会在传入正确的PayScene入参时才会有效。 */
  ChannelInfo: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnifiedOrderRequest {
  /** ISO 货币代码，CNY */
  CurrencyType: string;
  /** 聚鑫分配的支付主MidasAppId */
  MidasAppId: string;
  /** 支付订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  OutTradeNo: string;
  /** 商品详情，需要URL编码 */
  ProductDetail: string;
  /** 商品ID，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合 */
  ProductId: string;
  /** 商品名称，需要URL编码 */
  ProductName: string;
  /** 支付金额，单位： 分 */
  TotalAmt: number;
  /** 用户ID，长度不小于5位，仅支持字母和数字的组合 */
  UserId: string;
  /** 银行真实渠道.如:bank_pingan */
  RealChannel: string;
  /** 原始金额 */
  OriginalAmt: number;
  /** 聚鑫分配的安全ID */
  MidasSecretId: string;
  /** 按照聚鑫安全密钥计算的签名 */
  MidasSignature: string;
  /** Web端回调地址 */
  CallbackUrl?: string;
  /** 指定支付渠道： wechat：微信支付 qqwallet：QQ钱包 bank：网银支付 只有一个渠道时需要指定 */
  Channel?: string;
  /** 透传字段，支付成功回调透传给应用，用于业务透传自定义内容 */
  Metadata?: string;
  /** 购买数量，不传默认为1 */
  Quantity?: number;
  /** 聚鑫计费SubAppId，代表子商户 */
  SubAppId?: string;
  /** 子订单信息列表，格式：子订单号、子应用ID、金额。 压缩后最长不可超过65535字节(去除空格，换行，制表符等无意义字符)注：接入银行或其他支付渠道服务商模式下，必传 */
  SubOrderList?: UnifiedOrderInSubOrderList[];
  /** 结算应收金额，单位：分 */
  TotalMchIncome?: number;
  /** 平台应收金额，单位：分 */
  TotalPlatformIncome?: number;
  /** 微信公众号/小程序支付时为必选，需要传微信下的openid */
  WxOpenId?: string;
  /** 在服务商模式下，微信公众号/小程序支付时wx_sub_openid和wx_openid二选一 */
  WxSubOpenId?: string;
  /** 环境名:release: 现网环境sandbox: 沙箱环境development: 开发环境缺省: release */
  MidasEnvironment?: string;
  /** 微信商户应用ID */
  WxAppId?: string;
  /** 微信商户子应用ID */
  WxSubAppId?: string;
  /** 支付通知地址 */
  PaymentNotifyUrl?: string;
}

declare interface UnifiedOrderResponse {
  /** 支付金额，单位： 分 */
  TotalAmt: number;
  /** 应用支付订单号 */
  OutTradeNo: string;
  /** 支付参数透传给聚鑫SDK（原文透传给SDK即可，不需要解码） */
  PayInfo: string;
  /** 聚鑫的交易订单 */
  TransactionId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnifiedTlinxOrderRequest {
  /** 使用门店OpenId */
  OpenId: string;
  /** 使用门店OpenKey */
  OpenKey: string;
  /** 开发者流水号 */
  DeveloperNo: string;
  /** 支付标签 */
  PayTag: string;
  /** 实际交易金额（以分为单位，没有小数点） */
  TradeAmount: string;
  /** 交易结果异步通知url地址 */
  NotifyUrl: string;
  /** 付款方式名称(当PayTag为Diy时，PayName不能为空) */
  PayName?: string;
  /** 公众号支付时，支付成功后跳转url地址 */
  JumpUrl?: string;
  /** 订单名称（描述） */
  OrderName?: string;
  /** 原始交易金额（以分为单位，没有小数点） */
  OriginalAmount?: string;
  /** 抹零金额（以分为单位，没有小数点） */
  IgnoreAmount?: string;
  /** 折扣金额（以分为单位，没有小数点） */
  DiscountAmount?: string;
  /** 交易帐号（银行卡号） */
  TradeAccount?: string;
  /** 交易号（收单机构交易号） */
  TradeNo?: string;
  /** 条码支付的授权码（条码抢扫手机扫到的一串数字） */
  AuthCode?: string;
  /** 订单标记，订单附加数据。 */
  Tag?: string;
  /** 订单备注 */
  Remark?: string;
  /** 收单机构原始交易报文，请转换为json */
  TradeResult?: string;
  /** 0-不分账，1-需分账。为1时标记为待分账订单，待分账订单不会进行清算。不传默认为不分账。 */
  Royalty?: string;
  /** 小程序支付参数：填默认值 1 */
  Jsapi?: string;
  /** 小程序支付参数：当前调起支付的小程序APPID */
  SubAppId?: string;
  /** 小程序支付参数:用户在子商户appid下的唯一标识。 */
  SubOpenId?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface UnifiedTlinxOrderResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码，0表示成功，其他表示失败。 */
  ErrCode: string;
  /** 统一下单响应对象 */
  Result: PayOrderResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadExternalAnchorInfoRequest {
  /** 主播Id */
  AnchorId: string;
  /** 身份证正面图片下载链接 */
  IdCardFront?: string;
  /** 身份证反面图片下载链接 */
  IdCardReverse?: string;
}

declare interface UploadExternalAnchorInfoResponse {
  /** 错误码。响应成功："SUCCESS"，其他为不成功。 */
  ErrCode: string;
  /** 响应消息。 */
  ErrMessage: string;
  /** 该字段为null。 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFileRequest {
  /** 文件名 */
  FileName: string;
  /** 文件类型__IdCard__:身份证__IdCardCheck__:身份证加验证(只支持人像面) */
  FileType: string;
  /** 文件链接__FileUrl和FileContent二选一__ */
  FileUrl?: string;
  /** 文件内容，Base64编码__FileUrl和FileContent二选一__ */
  FileContent?: string;
  /** 文件扩展信息 */
  FileExtendInfo?: AnchorExtendInfo[];
}

declare interface UploadFileResponse {
  /** 文件ID */
  FileId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadOpenBankSubMerchantCredentialRequest {
  /** 渠道商户ID。 */
  ChannelMerchantId: string;
  /** 渠道子商户ID。 */
  ChannelSubMerchantId: string;
  /** 渠道名称。详见附录-枚举类型-ChannelName。 */
  ChannelName: string;
  /** 外部序列进件号。 */
  OutApplyId: string;
  /** 资质类型，详见附录-枚举类型-CredentialType。 */
  CredentialType: string;
  /** 文件类型。合利宝渠道，文件类型为PNG/JPG格式。 */
  FileType: string;
  /** 支付方式。合利宝渠道不需要传。 */
  PaymentMethod?: string;
  /** 资质文件内容。Base64编码，资质文件内容和链接二选一。合利宝渠道，文件限制大小5M以内。 */
  CredentialContent?: string;
  /** 资质文件链接。资质文件内容和链接二选一。合利宝渠道，文件限制大小5M以内。 */
  CredentialUrl?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface UploadOpenBankSubMerchantCredentialResponse {
  /** 错误码。 */
  ErrCode: string;
  /** 错误消息。 */
  ErrMessage: string;
  /** 返回结果 */
  Result: UploadOpenBankSubMerchantCredentialResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadOrgFileRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域 */
  Storage: string;
  /** 文件的md5值（为防止平台多次上传重复文件，文件名为文件md5,且不会覆盖，重复上传返回第一次上传成功的文件路径） */
  FileMd5: string;
  /** 文件内容（先将图片转换成二进制，再进行base64加密） */
  FileContent: string;
  /** 文件扩展名（png,jpg,gif） */
  FileExtension: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface UploadOrgFileResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 上传机构文件响应对象 */
  Result: UploadFileResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadTaxListRequest {
  /** 平台渠道 */
  Channel: number;
  /** 起始月份，YYYY-MM */
  BeginMonth: string;
  /** 结束月份。如果只上传一个月，结束月份等于起始月份 */
  EndMonth: string;
  /** 完税列表下载地址 */
  FileUrl: string;
}

declare interface UploadTaxListResponse {
  /** 完税ID */
  TaxId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadTaxPaymentRequest {
  /** 平台渠道 */
  Channel: number;
  /** 完税ID */
  TaxId: string;
  /** 完税列表下载地址 */
  FileUrl: string;
}

declare interface UploadTaxPaymentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyOpenBankAccountRequest {
  /** 渠道商户号。外部接入平台入驻云企付平台下发 */
  ChannelMerchantId: string;
  /** 渠道名称。详见附录-云企付枚举类说明-ChannelName。__TENPAY__: 商企付 */
  ChannelName: string;
  /** 收款方信息。 */
  PayeeInfo: OpenBankPayeeInfo;
  /** 通知地址，如www.test.com。 */
  NotifyUrl?: string;
  /** 环境类型。__release__:生产环境__sandbox__:沙箱环境_不填默认为生产环境_ */
  Environment?: string;
}

declare interface VerifyOpenBankAccountResponse {
  /** 业务系统返回码，SUCCESS表示成功，其他表示失败。 */
  ErrCode: string;
  /** 业务系统返回消息。 */
  ErrMessage: string | null;
  /** 打款验证结果。前端使用url字段，根据指引完成打款验证动作 */
  Result: VerifyOpenBankAccountResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ViewContractRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 外部合同主键编号（ContractId或OutContractId必须传一个） */
  OutContractId?: string;
  /** 合同主键（ContractId或OutContractId必须传一个） */
  ContractId?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface ViewContractResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 合同明细响应对象 */
  Result: ViewContractResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ViewMerchantRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 外部商户主键编号（MerchantNo或OutMerchantId必须传一个） */
  OutMerchantId?: string;
  /** 商户编号（MerchantNo或OutMerchantId必须传一个） */
  MerchantNo?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface ViewMerchantResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 商户明细响应对象 */
  Result: ViewMerchantResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ViewShopRequest {
  /** 收单系统分配的开放ID */
  OpenId: string;
  /** 收单系统分配的密钥 */
  OpenKey: string;
  /** 外部商户主键编号（ShopNo或OutShopId必须传一个） */
  OutShopId?: string;
  /** 门店编号（ShopNo或OutShopId必须传一个） */
  ShopNo?: string;
  /** 沙箱环境填sandbox，正式环境不填 */
  Profile?: string;
}

declare interface ViewShopResponse {
  /** 业务系统返回消息 */
  ErrMessage: string | null;
  /** 业务系统返回码 */
  ErrCode: string;
  /** 门店明细响应对象 */
  Result: ViewShopResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface WithdrawCashMembershipRequest {
  /** String(22)，商户号（签约客户号） */
  MrchCode: string;
  /** STRING(150)，交易网名称（市场名称） */
  TranWebName: string;
  /** STRING(5)，会员证件类型（详情见“常见问题”） */
  MemberGlobalType: string;
  /** STRING(32)，会员证件号码 */
  MemberGlobalId: string;
  /** STRING(32)，交易网会员代码 */
  TranNetMemberCode: string;
  /** STRING(150)，会员名称 */
  MemberName: string;
  /** STRING(50)，提现账号（银行卡） */
  TakeCashAcctNo: string;
  /** STRING(150)，出金账户名称（银行卡户名） */
  OutAmtAcctName: string;
  /** STRING(3)，币种（默认为RMB） */
  Ccy: string;
  /** STRING(20)，可提现金额 */
  CashAmt: string;
  /** STRING(300)，备注（建议可送订单号，可在对账文件的备注字段获取到） */
  Remark?: string;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string;
  /** STRING(300)，网银签名 */
  WebSign?: string;
  /** STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod" */
  Profile?: string;
}

declare interface WithdrawCashMembershipResponse {
  /** String(20)，返回码 */
  TxnReturnCode?: string;
  /** String(100)，返回信息 */
  TxnReturnMsg?: string;
  /** String(22)，交易流水号 */
  CnsmrSeqNo?: string;
  /** STRING(52)，见证系统流水号 */
  FrontSeqNo?: string | null;
  /** STRING(20)，转账手续费（固定返回0.00） */
  TransferFee?: string | null;
  /** STRING(1027)，保留域 */
  ReservedMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cpdp 企业收付平台} */
declare interface Cpdp {
  (): Versions;
  /** 云支付-添加合同接口 {@link AddContractRequest} {@link AddContractResponse} */
  AddContract(data: AddContractRequest, config?: AxiosRequestConfig): AxiosPromise<AddContractResponse>;
  /** 灵云V2-绑定收款用户资金账号信息 {@link AddFlexFundingAccountRequest} {@link AddFlexFundingAccountResponse} */
  AddFlexFundingAccount(data: AddFlexFundingAccountRequest, config?: AxiosRequestConfig): AxiosPromise<AddFlexFundingAccountResponse>;
  /** 灵云V2-补充证件信息 {@link AddFlexIdInfoRequest} {@link AddFlexIdInfoResponse} */
  AddFlexIdInfo(data: AddFlexIdInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddFlexIdInfoResponse>;
  /** 灵云V2-补充手机号信息 {@link AddFlexPhoneNoRequest} {@link AddFlexPhoneNoResponse} */
  AddFlexPhoneNo(data: AddFlexPhoneNoRequest, config?: AxiosRequestConfig): AxiosPromise<AddFlexPhoneNoResponse>;
  /** 云支付-添加商户接口 {@link AddMerchantRequest} {@link AddMerchantResponse} */
  AddMerchant(data: AddMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<AddMerchantResponse>;
  /** 云支付-添加门店接口 {@link AddShopRequest} {@link AddShopResponse} */
  AddShop(data: AddShopRequest, config?: AxiosRequestConfig): AxiosPromise<AddShopResponse>;
  /** 跨境-提交申报材料 {@link ApplyApplicationMaterialRequest} {@link ApplyApplicationMaterialResponse} */
  ApplyApplicationMaterial(data: ApplyApplicationMaterialRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyApplicationMaterialResponse>;
  /** 灵云V2-付款 {@link ApplyFlexPaymentRequest} {@link ApplyFlexPaymentResponse} */
  ApplyFlexPayment(data: ApplyFlexPaymentRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyFlexPaymentResponse>;
  /** 灵云V2-结算 {@link ApplyFlexSettlementRequest} {@link ApplyFlexSettlementResponse} */
  ApplyFlexSettlement(data: ApplyFlexSettlementRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyFlexSettlementResponse>;
  /** 云企付-申请单笔交易回单 {@link ApplyOpenBankOrderDetailReceiptRequest} {@link ApplyOpenBankOrderDetailReceiptResponse} */
  ApplyOpenBankOrderDetailReceipt(data: ApplyOpenBankOrderDetailReceiptRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyOpenBankOrderDetailReceiptResponse>;
  /** 云企付-结算申请接口 {@link ApplyOpenBankSettleOrderRequest} {@link ApplyOpenBankSettleOrderResponse} */
  ApplyOpenBankSettleOrder(data: ApplyOpenBankSettleOrderRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyOpenBankSettleOrderResponse>;
  /** 云企付-子商户在线签约 {@link ApplyOpenBankSubMerchantSignOnlineRequest} {@link ApplyOpenBankSubMerchantSignOnlineResponse} */
  ApplyOpenBankSubMerchantSignOnline(data: ApplyOpenBankSubMerchantSignOnlineRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyOpenBankSubMerchantSignOnlineResponse>;
  /** 跨境-汇出指令申请 {@link ApplyOutwardOrderRequest} {@link ApplyOutwardOrderResponse} */
  ApplyOutwardOrder(data: ApplyOutwardOrderRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyOutwardOrderResponse>;
  /** 跨境-付款人申请 {@link ApplyPayerInfoRequest} {@link ApplyPayerInfoResponse} */
  ApplyPayerInfo(data: ApplyPayerInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyPayerInfoResponse>;
  /** 聚鑫-重新提现接口 {@link ApplyReWithdrawalRequest} {@link ApplyReWithdrawalResponse} */
  ApplyReWithdrawal(data: ApplyReWithdrawalRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyReWithdrawalResponse>;
  /** 聚鑫-申请对账文件 {@link ApplyReconciliationFileRequest} {@link ApplyReconciliationFileResponse} */
  ApplyReconciliationFile(data: ApplyReconciliationFileRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyReconciliationFileResponse>;
  /** 跨境-提交贸易材料 {@link ApplyTradeRequest} {@link ApplyTradeResponse} */
  ApplyTrade(data: ApplyTradeRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyTradeResponse>;
  /** 聚鑫-提现 {@link ApplyWithdrawalRequest} {@link ApplyWithdrawalResponse} */
  ApplyWithdrawal(data: ApplyWithdrawalRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyWithdrawalResponse>;
  /** 灵云-绑定账号 {@link BindAccountRequest} {@link BindAccountResponse} */
  BindAccount(data: BindAccountRequest, config?: AxiosRequestConfig): AxiosPromise<BindAccountResponse>;
  /** 聚鑫-绑定提现银行卡 {@link BindAcctRequest} {@link BindAcctResponse} */
  BindAcct(data: BindAcctRequest, config?: AxiosRequestConfig): AxiosPromise<BindAcctResponse>;
  /** 云企付-子商户银行卡绑定 {@link BindOpenBankExternalSubMerchantBankAccountRequest} {@link BindOpenBankExternalSubMerchantBankAccountResponse} */
  BindOpenBankExternalSubMerchantBankAccount(data: BindOpenBankExternalSubMerchantBankAccountRequest, config?: AxiosRequestConfig): AxiosPromise<BindOpenBankExternalSubMerchantBankAccountResponse>;
  /** 云企付-绑定分账收款方 {@link BindOpenBankProfitSharePayeeRequest} {@link BindOpenBankProfitSharePayeeResponse} */
  BindOpenBankProfitSharePayee(data: BindOpenBankProfitSharePayeeRequest, config?: AxiosRequestConfig): AxiosPromise<BindOpenBankProfitSharePayeeResponse>;
  /** 云鉴-会员绑定提现账户-回填银联鉴权短信码 {@link BindRelateAccReUnionPayRequest} {@link BindRelateAccReUnionPayResponse} */
  BindRelateAccReUnionPay(data: BindRelateAccReUnionPayRequest, config?: AxiosRequestConfig): AxiosPromise<BindRelateAccReUnionPayResponse>;
  /** 云鉴-会员绑定提现账户-小额鉴权 {@link BindRelateAcctSmallAmountRequest} {@link BindRelateAcctSmallAmountResponse} */
  BindRelateAcctSmallAmount(data: BindRelateAcctSmallAmountRequest, config?: AxiosRequestConfig): AxiosPromise<BindRelateAcctSmallAmountResponse>;
  /** 云鉴-会员绑定提现账户-银联鉴权 {@link BindRelateAcctUnionPayRequest} {@link BindRelateAcctUnionPayResponse} */
  BindRelateAcctUnionPay(data: BindRelateAcctUnionPayRequest, config?: AxiosRequestConfig): AxiosPromise<BindRelateAcctUnionPayResponse>;
  /** 聚鑫-提现银行卡验证 {@link CheckAcctRequest} {@link CheckAcctResponse} */
  CheckAcct(data: CheckAcctRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAcctResponse>;
  /** 云鉴-验证鉴权金额 {@link CheckAmountRequest} {@link CheckAmountResponse} */
  CheckAmount(data: CheckAmountRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAmountResponse>;
  /** 聚鑫V2-关闭订单 {@link CloseCloudOrderRequest} {@link CloseCloudOrderResponse} */
  CloseCloudOrder(data: CloseCloudOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CloseCloudOrderResponse>;
  /** 云企付-关闭订单 {@link CloseOpenBankPaymentOrderRequest} {@link CloseOpenBankPaymentOrderResponse} */
  CloseOpenBankPaymentOrder(data: CloseOpenBankPaymentOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CloseOpenBankPaymentOrderResponse>;
  /** 聚鑫-关闭订单接口 {@link CloseOrderRequest} {@link CloseOrderResponse} */
  CloseOrder(data: CloseOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CloseOrderResponse>;
  /** 云鉴-消费订单确认接口 {@link ConfirmOrderRequest} {@link ConfirmOrderResponse} */
  ConfirmOrder(data: ConfirmOrderRequest, config?: AxiosRequestConfig): AxiosPromise<ConfirmOrderResponse>;
  /** 支付中签约接口 {@link ContractOrderRequest} {@link ContractOrderResponse} */
  ContractOrder(data: ContractOrderRequest, config?: AxiosRequestConfig): AxiosPromise<ContractOrderResponse>;
  /** 聚鑫-商户入驻 {@link CreateAcctRequest} {@link CreateAcctResponse} */
  CreateAcct(data: CreateAcctRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAcctResponse>;
  /** 直播平台-代理商完税信息录入 {@link CreateAgentTaxPaymentInfosRequest} {@link CreateAgentTaxPaymentInfosResponse} */
  CreateAgentTaxPaymentInfos(data: CreateAgentTaxPaymentInfosRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentTaxPaymentInfosResponse>;
  /** 直播平台-主播入驻 {@link CreateAnchorRequest} {@link CreateAnchorResponse} */
  CreateAnchor(data: CreateAnchorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAnchorResponse>;
  /** 灵云-批量主播转账接口 {@link CreateBatchPaymentRequest} {@link CreateBatchPaymentResponse} */
  CreateBatchPayment(data: CreateBatchPaymentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchPaymentResponse>;
  /** 聚鑫V2-创建子商户 {@link CreateCloudSubMerchantRequest} {@link CreateCloudSubMerchantResponse} */
  CreateCloudSubMerchant(data: CreateCloudSubMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudSubMerchantResponse>;
  /** 云鉴-会员子账户开立 {@link CreateCustAcctIdRequest} {@link CreateCustAcctIdResponse} */
  CreateCustAcctId(data: CreateCustAcctIdRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustAcctIdResponse>;
  /** 灵云-主播入驻 {@link CreateExternalAnchorRequest} {@link CreateExternalAnchorResponse} */
  CreateExternalAnchor(data: CreateExternalAnchorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExternalAnchorResponse>;
  /** 灵云V2-收款用户开立 {@link CreateFlexPayeeRequest} {@link CreateFlexPayeeResponse} */
  CreateFlexPayee(data: CreateFlexPayeeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlexPayeeResponse>;
  /** 智慧零售-发票开具 {@link CreateInvoiceRequest} {@link CreateInvoiceResponse} */
  CreateInvoice(data: CreateInvoiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInvoiceResponse>;
  /** 智慧零售-发票开具V2 {@link CreateInvoiceV2Request} {@link CreateInvoiceV2Response} */
  CreateInvoiceV2(data: CreateInvoiceV2Request, config?: AxiosRequestConfig): AxiosPromise<CreateInvoiceV2Response>;
  /** 智慧零售-商户注册 {@link CreateMerchantRequest} {@link CreateMerchantResponse} */
  CreateMerchant(data: CreateMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMerchantResponse>;
  /** 云企付-子商户进件V2 {@link CreateOpenBankAggregatedSubMerchantRegistrationRequest} {@link CreateOpenBankAggregatedSubMerchantRegistrationResponse} */
  CreateOpenBankAggregatedSubMerchantRegistration(data: CreateOpenBankAggregatedSubMerchantRegistrationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankAggregatedSubMerchantRegistrationResponse>;
  /** 云企付-子商户电子记账本创建接口 {@link CreateOpenBankExternalSubMerchantAccountBookRequest} {@link CreateOpenBankExternalSubMerchantAccountBookResponse} */
  CreateOpenBankExternalSubMerchantAccountBook(data: CreateOpenBankExternalSubMerchantAccountBookRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankExternalSubMerchantAccountBookResponse>;
  /** 云企付-子商户进件 {@link CreateOpenBankExternalSubMerchantRegistrationRequest} {@link CreateOpenBankExternalSubMerchantRegistrationResponse} */
  CreateOpenBankExternalSubMerchantRegistration(data: CreateOpenBankExternalSubMerchantRegistrationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankExternalSubMerchantRegistrationResponse>;
  /** 云企付-跨境支付下单 {@link CreateOpenBankGlobalPaymentOrderRequest} {@link CreateOpenBankGlobalPaymentOrderResponse} */
  CreateOpenBankGlobalPaymentOrder(data: CreateOpenBankGlobalPaymentOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankGlobalPaymentOrderResponse>;
  /** 云企付-创建商户 {@link CreateOpenBankMerchantRequest} {@link CreateOpenBankMerchantResponse} */
  CreateOpenBankMerchant(data: CreateOpenBankMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankMerchantResponse>;
  /** 云企付-创建支付订单 {@link CreateOpenBankPaymentOrderRequest} {@link CreateOpenBankPaymentOrderResponse} */
  CreateOpenBankPaymentOrder(data: CreateOpenBankPaymentOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankPaymentOrderResponse>;
  /** 云企付-创建充值订单 {@link CreateOpenBankRechargeOrderRequest} {@link CreateOpenBankRechargeOrderResponse} */
  CreateOpenBankRechargeOrder(data: CreateOpenBankRechargeOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankRechargeOrderResponse>;
  /** 云企付-子商户费率配置 {@link CreateOpenBankSubMerchantRateConfigureRequest} {@link CreateOpenBankSubMerchantRateConfigureResponse} */
  CreateOpenBankSubMerchantRateConfigure(data: CreateOpenBankSubMerchantRateConfigureRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankSubMerchantRateConfigureResponse>;
  /** 云企付-聚合下单 {@link CreateOpenBankUnifiedOrderRequest} {@link CreateOpenBankUnifiedOrderResponse} */
  CreateOpenBankUnifiedOrder(data: CreateOpenBankUnifiedOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankUnifiedOrderResponse>;
  /** 云企付-创建核销申请 {@link CreateOpenBankVerificationOrderRequest} {@link CreateOpenBankVerificationOrderResponse} */
  CreateOpenBankVerificationOrder(data: CreateOpenBankVerificationOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpenBankVerificationOrderResponse>;
  /** 云鉴-消费订单发起接口 {@link CreateOrderRequest} {@link CreateOrderResponse} */
  CreateOrder(data: CreateOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrderResponse>;
  /** 云鉴-商户新增接口 {@link CreatePayMerchantRequest} {@link CreatePayMerchantResponse} */
  CreatePayMerchant(data: CreatePayMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePayMerchantResponse>;
  /** 务工卡-核身预下单 {@link CreatePayRollPreOrderRequest} {@link CreatePayRollPreOrderResponse} */
  CreatePayRollPreOrder(data: CreatePayRollPreOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePayRollPreOrderResponse>;
  /** 务工卡-核身预下单带授权 {@link CreatePayRollPreOrderWithAuthRequest} {@link CreatePayRollPreOrderWithAuthResponse} */
  CreatePayRollPreOrderWithAuth(data: CreatePayRollPreOrderWithAuthRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePayRollPreOrderWithAuthResponse>;
  /** 务工卡-生成授权令牌 {@link CreatePayRollTokenRequest} {@link CreatePayRollTokenResponse} */
  CreatePayRollToken(data: CreatePayRollTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePayRollTokenResponse>;
  /** 智慧零售-发票红冲 {@link CreateRedInvoiceRequest} {@link CreateRedInvoiceResponse} */
  CreateRedInvoice(data: CreateRedInvoiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRedInvoiceResponse>;
  /** 智慧零售-发票红冲V2 {@link CreateRedInvoiceV2Request} {@link CreateRedInvoiceV2Response} */
  CreateRedInvoiceV2(data: CreateRedInvoiceV2Request, config?: AxiosRequestConfig): AxiosPromise<CreateRedInvoiceV2Response>;
  /** 灵云-单笔主播转账接口 {@link CreateSinglePaymentRequest} {@link CreateSinglePaymentResponse} */
  CreateSinglePayment(data: CreateSinglePaymentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSinglePaymentResponse>;
  /** 智慧薪酬-发起批量转账 {@link CreateTransferBatchRequest} {@link CreateTransferBatchResponse} */
  CreateTransferBatch(data: CreateTransferBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTransferBatchResponse>;
  /** 直播平台-扣减额度 {@link DeduceQuotaRequest} {@link DeduceQuotaResponse} */
  DeduceQuota(data: DeduceQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DeduceQuotaResponse>;
  /** 直播平台-删除代理商完税信息 {@link DeleteAgentTaxPaymentInfoRequest} {@link DeleteAgentTaxPaymentInfoResponse} */
  DeleteAgentTaxPaymentInfo(data: DeleteAgentTaxPaymentInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentTaxPaymentInfoResponse>;
  /** 直播平台-删除代理商完税信息 {@link DeleteAgentTaxPaymentInfosRequest} {@link DeleteAgentTaxPaymentInfosResponse} */
  DeleteAgentTaxPaymentInfos(data: DeleteAgentTaxPaymentInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentTaxPaymentInfosResponse>;
  /** 查询充值明细接口 {@link DescribeChargeDetailRequest} {@link DescribeChargeDetailResponse} */
  DescribeChargeDetail(data: DescribeChargeDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChargeDetailResponse>;
  /** 查询单笔订单交易状态 {@link DescribeOrderStatusRequest} {@link DescribeOrderStatusResponse} */
  DescribeOrderStatus(data: DescribeOrderStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrderStatusResponse>;
  /** 云支付-分账授权申请查询接口 {@link DistributeAccreditQueryRequest} {@link DistributeAccreditQueryResponse} */
  DistributeAccreditQuery(data: DistributeAccreditQueryRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeAccreditQueryResponse>;
  /** 云支付-分账授权申请接口 {@link DistributeAccreditTlinxRequest} {@link DistributeAccreditTlinxResponse} */
  DistributeAccreditTlinx(data: DistributeAccreditTlinxRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeAccreditTlinxResponse>;
  /** 云支付-分账添加分账接收方接口 {@link DistributeAddReceiverRequest} {@link DistributeAddReceiverResponse} */
  DistributeAddReceiver(data: DistributeAddReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeAddReceiverResponse>;
  /** 云支付-分账请求接口 {@link DistributeApplyRequest} {@link DistributeApplyResponse} */
  DistributeApply(data: DistributeApplyRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeApplyResponse>;
  /** 云支付-分账撤销接口 {@link DistributeCancelRequest} {@link DistributeCancelResponse} */
  DistributeCancel(data: DistributeCancelRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeCancelResponse>;
  /** 云支付-分账结果查询接口 {@link DistributeQueryRequest} {@link DistributeQueryResponse} */
  DistributeQuery(data: DistributeQueryRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeQueryResponse>;
  /** 云支付-查询已添加分账接收方接口 {@link DistributeQueryReceiverRequest} {@link DistributeQueryReceiverResponse} */
  DistributeQueryReceiver(data: DistributeQueryReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeQueryReceiverResponse>;
  /** 云支付-分账解除分账接收方接口 {@link DistributeRemoveReceiverRequest} {@link DistributeRemoveReceiverResponse} */
  DistributeRemoveReceiver(data: DistributeRemoveReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeRemoveReceiverResponse>;
  /** 聚鑫-账单下载 {@link DownloadBillRequest} {@link DownloadBillResponse} */
  DownloadBill(data: DownloadBillRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadBillResponse>;
  /** 云支付-下载机构文件接口 {@link DownloadOrgFileRequest} {@link DownloadOrgFileResponse} */
  DownloadOrgFile(data: DownloadOrgFileRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadOrgFileResponse>;
  /** 灵云-对账中心账单下载接口 {@link DownloadReconciliationUrlRequest} {@link DownloadReconciliationUrlResponse} */
  DownloadReconciliationUrl(data: DownloadReconciliationUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadReconciliationUrlResponse>;
  /** 会员间交易接口 {@link ExecuteMemberTransactionRequest} {@link ExecuteMemberTransactionResponse} */
  ExecuteMemberTransaction(data: ExecuteMemberTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteMemberTransactionResponse>;
  /** 灵云V2-冻结余额 {@link FreezeFlexBalanceRequest} {@link FreezeFlexBalanceResponse} */
  FreezeFlexBalance(data: FreezeFlexBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeFlexBalanceResponse>;
  /** 云支付-获取机构账单文件下载地址 {@link GetBillDownloadUrlRequest} {@link GetBillDownloadUrlResponse} */
  GetBillDownloadUrl(data: GetBillDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GetBillDownloadUrlResponse>;
  /** 云支付-获取机构分账账单文件下载地址 {@link GetDistributeBillDownloadUrlRequest} {@link GetDistributeBillDownloadUrlResponse} */
  GetDistributeBillDownloadUrl(data: GetDistributeBillDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GetDistributeBillDownloadUrlResponse>;
  /** 务工卡-查询授权关系 {@link GetPayRollAuthRequest} {@link GetPayRollAuthResponse} */
  GetPayRollAuth(data: GetPayRollAuthRequest, config?: AxiosRequestConfig): AxiosPromise<GetPayRollAuthResponse>;
  /** 务工卡-查询核身记录 {@link GetPayRollAuthListRequest} {@link GetPayRollAuthListResponse} */
  GetPayRollAuthList(data: GetPayRollAuthListRequest, config?: AxiosRequestConfig): AxiosPromise<GetPayRollAuthListResponse>;
  /** 务工卡-获取核身结果 {@link GetPayRollAuthResultRequest} {@link GetPayRollAuthResultResponse} */
  GetPayRollAuthResult(data: GetPayRollAuthResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetPayRollAuthResultResponse>;
  /** 智慧零售-系统迁移存量订单退款 {@link MigrateOrderRefundRequest} {@link MigrateOrderRefundResponse} */
  MigrateOrderRefund(data: MigrateOrderRefundRequest, config?: AxiosRequestConfig): AxiosPromise<MigrateOrderRefundResponse>;
  /** 智慧零售-系统迁移存量订单退款查询 {@link MigrateOrderRefundQueryRequest} {@link MigrateOrderRefundQueryResponse} */
  MigrateOrderRefundQuery(data: MigrateOrderRefundQueryRequest, config?: AxiosRequestConfig): AxiosPromise<MigrateOrderRefundQueryResponse>;
  /** 直播平台-修改代理商完税信息 {@link ModifyAgentTaxPaymentInfoRequest} {@link ModifyAgentTaxPaymentInfoResponse} */
  ModifyAgentTaxPaymentInfo(data: ModifyAgentTaxPaymentInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentTaxPaymentInfoResponse>;
  /** 灵云-重新绑定账号 {@link ModifyBindedAccountRequest} {@link ModifyBindedAccountResponse} */
  ModifyBindedAccount(data: ModifyBindedAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBindedAccountResponse>;
  /** 灵云V2-修改收款用户资金账号信息 {@link ModifyFlexFundingAccountRequest} {@link ModifyFlexFundingAccountResponse} */
  ModifyFlexFundingAccount(data: ModifyFlexFundingAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFlexFundingAccountResponse>;
  /** 灵云V2-收款用户账户权益状态修改 {@link ModifyFlexPayeeAccountRightStatusRequest} {@link ModifyFlexPayeeAccountRightStatusResponse} */
  ModifyFlexPayeeAccountRightStatus(data: ModifyFlexPayeeAccountRightStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFlexPayeeAccountRightStatusResponse>;
  /** 云鉴-商户信息修改接口 {@link ModifyMerchantRequest} {@link ModifyMerchantResponse} */
  ModifyMerchant(data: ModifyMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMerchantResponse>;
  /** 云鉴-维护会员绑定提现账户联行号 {@link ModifyMntMbrBindRelateAcctBankCodeRequest} {@link ModifyMntMbrBindRelateAcctBankCodeResponse} */
  ModifyMntMbrBindRelateAcctBankCode(data: ModifyMntMbrBindRelateAcctBankCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMntMbrBindRelateAcctBankCodeResponse>;
  /** 聚鑫-查询子账户绑定银行卡 {@link QueryAcctBindingRequest} {@link QueryAcctBindingResponse} */
  QueryAcctBinding(data: QueryAcctBindingRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAcctBindingResponse>;
  /** 聚鑫-开户查询 {@link QueryAcctInfoRequest} {@link QueryAcctInfoResponse} */
  QueryAcctInfo(data: QueryAcctInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAcctInfoResponse>;
  /** 聚鑫-开户列表查询 {@link QueryAcctInfoListRequest} {@link QueryAcctInfoListResponse} */
  QueryAcctInfoList(data: QueryAcctInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAcctInfoListResponse>;
  /** 直播平台-查询代理商结算单链接 {@link QueryAgentStatementsRequest} {@link QueryAgentStatementsResponse} */
  QueryAgentStatements(data: QueryAgentStatementsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAgentStatementsResponse>;
  /** 直播平台-查询批次信息 {@link QueryAgentTaxPaymentBatchRequest} {@link QueryAgentTaxPaymentBatchResponse} */
  QueryAgentTaxPaymentBatch(data: QueryAgentTaxPaymentBatchRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAgentTaxPaymentBatchResponse>;
  /** 直播平台-查询主播签约信息 {@link QueryAnchorContractInfoRequest} {@link QueryAnchorContractInfoResponse} */
  QueryAnchorContractInfo(data: QueryAnchorContractInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAnchorContractInfoResponse>;
  /** 跨境-成功申报材料查询 {@link QueryApplicationMaterialRequest} {@link QueryApplicationMaterialResponse} */
  QueryApplicationMaterial(data: QueryApplicationMaterialRequest, config?: AxiosRequestConfig): AxiosPromise<QueryApplicationMaterialResponse>;
  /** 直播平台-查询分配关系 {@link QueryAssignmentRequest} {@link QueryAssignmentResponse} */
  QueryAssignment(data: QueryAssignmentRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAssignmentResponse>;
  /** 聚鑫-余额查询 {@link QueryBalanceRequest} {@link QueryBalanceResponse} */
  QueryBalance(data: QueryBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBalanceResponse>;
  /** 云鉴-查询银行在途清算结果 {@link QueryBankClearRequest} {@link QueryBankClearResponse} */
  QueryBankClear(data: QueryBankClearRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBankClearResponse>;
  /** 云鉴-查询银行时间段内交易明细 {@link QueryBankTransactionDetailsRequest} {@link QueryBankTransactionDetailsResponse} */
  QueryBankTransactionDetails(data: QueryBankTransactionDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBankTransactionDetailsResponse>;
  /** 云鉴-查询银行时间段内清分提现明细 {@link QueryBankWithdrawCashDetailsRequest} {@link QueryBankWithdrawCashDetailsResponse} */
  QueryBankWithdrawCashDetails(data: QueryBankWithdrawCashDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBankWithdrawCashDetailsResponse>;
  /** 灵云-批量转账结果查询 {@link QueryBatchPaymentResultRequest} {@link QueryBatchPaymentResultResponse} */
  QueryBatchPaymentResult(data: QueryBatchPaymentResultRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBatchPaymentResultResponse>;
  /** 智能代发-单笔代发转账对账单下载接口 {@link QueryBillDownloadURLRequest} {@link QueryBillDownloadURLResponse} */
  QueryBillDownloadURL(data: QueryBillDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBillDownloadURLResponse>;
  /** 云支付-查询城市编码接口 {@link QueryCityCodeRequest} {@link QueryCityCodeResponse} */
  QueryCityCode(data: QueryCityCodeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCityCodeResponse>;
  /** 聚鑫V2-查询第三方渠道数据 {@link QueryCloudChannelDataRequest} {@link QueryCloudChannelDataResponse} */
  QueryCloudChannelData(data: QueryCloudChannelDataRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCloudChannelDataResponse>;
  /** 聚鑫V2-查询订单 {@link QueryCloudOrderRequest} {@link QueryCloudOrderResponse} */
  QueryCloudOrder(data: QueryCloudOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCloudOrderResponse>;
  /** 聚鑫V2-查询退款 {@link QueryCloudRefundOrderRequest} {@link QueryCloudRefundOrderResponse} */
  QueryCloudRefundOrder(data: QueryCloudRefundOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCloudRefundOrderResponse>;
  /** 云鉴-查询普通转账充值明细 {@link QueryCommonTransferRechargeRequest} {@link QueryCommonTransferRechargeResponse} */
  QueryCommonTransferRecharge(data: QueryCommonTransferRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCommonTransferRechargeResponse>;
  /** 智慧零售-查询公司抬头 {@link QueryCompanyTitleRequest} {@link QueryCompanyTitleResponse} */
  QueryCompanyTitle(data: QueryCompanyTitleRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCompanyTitleResponse>;
  /** 查询签约数据接口 {@link QueryContractRequest} {@link QueryContractResponse} */
  QueryContract(data: QueryContractRequest, config?: AxiosRequestConfig): AxiosPromise<QueryContractResponse>;
  /** 云支付-查询支付方式费率及自定义表单项接口 {@link QueryContractPayFeeRequest} {@link QueryContractPayFeeResponse} */
  QueryContractPayFee(data: QueryContractPayFeeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryContractPayFeeResponse>;
  /** 云支付-查询合同支付方式列表接口 {@link QueryContractPayWayListRequest} {@link QueryContractPayWayListResponse} */
  QueryContractPayWayList(data: QueryContractPayWayListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryContractPayWayListResponse>;
  /** 云支付-查询合同可关联门店接口 {@link QueryContractRelateShopRequest} {@link QueryContractRelateShopResponse} */
  QueryContractRelateShop(data: QueryContractRelateShopRequest, config?: AxiosRequestConfig): AxiosPromise<QueryContractRelateShopResponse>;
  /** 云鉴-查询银行子账户余额 {@link QueryCustAcctIdBalanceRequest} {@link QueryCustAcctIdBalanceResponse} */
  QueryCustAcctIdBalance(data: QueryCustAcctIdBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCustAcctIdBalanceResponse>;
  /** 云鉴-查询对账单下载地址接口 {@link QueryDownloadBillURLRequest} {@link QueryDownloadBillURLResponse} */
  QueryDownloadBillURL(data: QueryDownloadBillURLRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDownloadBillURLResponse>;
  /** 灵云-查询超额信息 {@link QueryExceedingInfoRequest} {@link QueryExceedingInfoResponse} */
  QueryExceedingInfo(data: QueryExceedingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryExceedingInfoResponse>;
  /** 跨境-查询汇率 {@link QueryExchangeRateRequest} {@link QueryExchangeRateResponse} */
  QueryExchangeRate(data: QueryExchangeRateRequest, config?: AxiosRequestConfig): AxiosPromise<QueryExchangeRateResponse>;
  /** 财税-查询金融数据文件下载链接 {@link QueryFinancialDataUrlRequest} {@link QueryFinancialDataUrlResponse} */
  QueryFinancialDataUrl(data: QueryFinancialDataUrlRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFinancialDataUrlResponse>;
  /** 灵云V2-查询税前金额 {@link QueryFlexAmountBeforeTaxRequest} {@link QueryFlexAmountBeforeTaxResponse} */
  QueryFlexAmountBeforeTax(data: QueryFlexAmountBeforeTaxRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexAmountBeforeTaxResponse>;
  /** 灵云V2-查询对账单文件下载链接 {@link QueryFlexBillDownloadUrlRequest} {@link QueryFlexBillDownloadUrlResponse} */
  QueryFlexBillDownloadUrl(data: QueryFlexBillDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexBillDownloadUrlResponse>;
  /** 灵云V2-查询冻结订单列表 {@link QueryFlexFreezeOrderListRequest} {@link QueryFlexFreezeOrderListResponse} */
  QueryFlexFreezeOrderList(data: QueryFlexFreezeOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexFreezeOrderListResponse>;
  /** 灵云V2-订单汇总列表查询 {@link QueryFlexOrderSummaryListRequest} {@link QueryFlexOrderSummaryListResponse} */
  QueryFlexOrderSummaryList(data: QueryFlexOrderSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexOrderSummaryListResponse>;
  /** 灵云V2-收款用户账户余额查询 {@link QueryFlexPayeeAccountBalanceRequest} {@link QueryFlexPayeeAccountBalanceResponse} */
  QueryFlexPayeeAccountBalance(data: QueryFlexPayeeAccountBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexPayeeAccountBalanceResponse>;
  /** 灵云V2-收款用户账户信息查询 {@link QueryFlexPayeeAccountInfoRequest} {@link QueryFlexPayeeAccountInfoResponse} */
  QueryFlexPayeeAccountInfo(data?: QueryFlexPayeeAccountInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexPayeeAccountInfoResponse>;
  /** 灵云V2-收款用户账户列表查询 {@link QueryFlexPayeeAccountListRequest} {@link QueryFlexPayeeAccountListResponse} */
  QueryFlexPayeeAccountList(data: QueryFlexPayeeAccountListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexPayeeAccountListResponse>;
  /** 灵云V2-收款用户信息查询 {@link QueryFlexPayeeInfoRequest} {@link QueryFlexPayeeInfoResponse} */
  QueryFlexPayeeInfo(data?: QueryFlexPayeeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexPayeeInfoResponse>;
  /** 灵云V2-查询付款订单列表 {@link QueryFlexPaymentOrderListRequest} {@link QueryFlexPaymentOrderListResponse} */
  QueryFlexPaymentOrderList(data: QueryFlexPaymentOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexPaymentOrderListResponse>;
  /** 灵云V2-查询付款订单状态 {@link QueryFlexPaymentOrderStatusRequest} {@link QueryFlexPaymentOrderStatusResponse} */
  QueryFlexPaymentOrderStatus(data?: QueryFlexPaymentOrderStatusRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexPaymentOrderStatusResponse>;
  /** 灵云V2-平台账户余额查询 {@link QueryFlexPlatformAccountBalanceRequest} {@link QueryFlexPlatformAccountBalanceResponse} */
  QueryFlexPlatformAccountBalance(data: QueryFlexPlatformAccountBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexPlatformAccountBalanceResponse>;
  /** 灵云V2-查询服务商账户余额 {@link QueryFlexServiceProviderAccountBalanceRequest} {@link QueryFlexServiceProviderAccountBalanceResponse} */
  QueryFlexServiceProviderAccountBalance(data: QueryFlexServiceProviderAccountBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexServiceProviderAccountBalanceResponse>;
  /** 灵云V2-查询结算订单列表 {@link QueryFlexSettlementOrderListRequest} {@link QueryFlexSettlementOrderListResponse} */
  QueryFlexSettlementOrderList(data: QueryFlexSettlementOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFlexSettlementOrderListResponse>;
  /** 聚鑫-查询会员资金交易信息列表 {@link QueryFundsTransactionDetailsRequest} {@link QueryFundsTransactionDetailsResponse} */
  QueryFundsTransactionDetails(data: QueryFundsTransactionDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFundsTransactionDetailsResponse>;
  /** 智慧零售-发票查询 {@link QueryInvoiceRequest} {@link QueryInvoiceResponse} */
  QueryInvoice(data: QueryInvoiceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryInvoiceResponse>;
  /** 智慧零售-发票查询V2 {@link QueryInvoiceV2Request} {@link QueryInvoiceV2Response} */
  QueryInvoiceV2(data: QueryInvoiceV2Request, config?: AxiosRequestConfig): AxiosPromise<QueryInvoiceV2Response>;
  /** 商户恶意注册接口 {@link QueryMaliciousRegistrationRequest} {@link QueryMaliciousRegistrationResponse} */
  QueryMaliciousRegistration(data: QueryMaliciousRegistrationRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMaliciousRegistrationResponse>;
  /** 云鉴-会员绑定信息查询 {@link QueryMemberBindRequest} {@link QueryMemberBindResponse} */
  QueryMemberBind(data: QueryMemberBindRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMemberBindResponse>;
  /** 云鉴-会员间交易-不验证 {@link QueryMemberTransactionRequest} {@link QueryMemberTransactionResponse} */
  QueryMemberTransaction(data: QueryMemberTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMemberTransactionResponse>;
  /** 聚鑫-查询会员间交易信息列表 {@link QueryMemberTransactionDetailsRequest} {@link QueryMemberTransactionDetailsResponse} */
  QueryMemberTransactionDetails(data: QueryMemberTransactionDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMemberTransactionDetailsResponse>;
  /** 云鉴-商户信息查询接口 {@link QueryMerchantRequest} {@link QueryMerchantResponse} */
  QueryMerchant(data: QueryMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMerchantResponse>;
  /** 跨境-对接方账户余额查询 {@link QueryMerchantBalanceRequest} {@link QueryMerchantBalanceResponse} */
  QueryMerchantBalance(data: QueryMerchantBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMerchantBalanceResponse>;
  /** 云支付-查询商户分类接口 {@link QueryMerchantClassificationRequest} {@link QueryMerchantClassificationResponse} */
  QueryMerchantClassification(data: QueryMerchantClassificationRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMerchantClassificationResponse>;
  /** 智慧零售-查询管理端商户 {@link QueryMerchantInfoForManagementRequest} {@link QueryMerchantInfoForManagementResponse} */
  QueryMerchantInfoForManagement(data: QueryMerchantInfoForManagementRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMerchantInfoForManagementResponse>;
  /** 云鉴-消费订单查询接口 {@link QueryMerchantOrderRequest} {@link QueryMerchantOrderResponse} */
  QueryMerchantOrder(data: QueryMerchantOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMerchantOrderResponse>;
  /** 云支付-查询商户支付方式列表 {@link QueryMerchantPayWayListRequest} {@link QueryMerchantPayWayListResponse} */
  QueryMerchantPayWayList(data: QueryMerchantPayWayListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMerchantPayWayListResponse>;
  /** 云企付-子商户银行卡余额查询 {@link QueryOpenBankBankAccountBalanceRequest} {@link QueryOpenBankBankAccountBalanceResponse} */
  QueryOpenBankBankAccountBalance(data: QueryOpenBankBankAccountBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankBankAccountBalanceResponse>;
  /** 云企付-查询联行号 {@link QueryOpenBankBankBranchListRequest} {@link QueryOpenBankBankBranchListResponse} */
  QueryOpenBankBankBranchList(data: QueryOpenBankBankBranchListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankBankBranchListResponse>;
  /** 云企付-分页查询对账单数据 {@link QueryOpenBankBillDataPageRequest} {@link QueryOpenBankBillDataPageResponse} */
  QueryOpenBankBillDataPage(data: QueryOpenBankBillDataPageRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankBillDataPageResponse>;
  /** 云企付-子商户银行卡绑定结果查询 {@link QueryOpenBankBindExternalSubMerchantBankAccountRequest} {@link QueryOpenBankBindExternalSubMerchantBankAccountResponse} */
  QueryOpenBankBindExternalSubMerchantBankAccount(data: QueryOpenBankBindExternalSubMerchantBankAccountRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankBindExternalSubMerchantBankAccountResponse>;
  /** 云企付-按日期批量查询回单下载地址 {@link QueryOpenBankDailyReceiptDownloadUrlRequest} {@link QueryOpenBankDailyReceiptDownloadUrlResponse} */
  QueryOpenBankDailyReceiptDownloadUrl(data: QueryOpenBankDailyReceiptDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankDailyReceiptDownloadUrlResponse>;
  /** 云企付-查询对账单下载地址 {@link QueryOpenBankDownLoadUrlRequest} {@link QueryOpenBankDownLoadUrlResponse} */
  QueryOpenBankDownLoadUrl(data: QueryOpenBankDownLoadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankDownLoadUrlResponse>;
  /** 云企付-子商户电子记账本余额查询 {@link QueryOpenBankExternalSubAccountBookBalanceRequest} {@link QueryOpenBankExternalSubAccountBookBalanceResponse} */
  QueryOpenBankExternalSubAccountBookBalance(data: QueryOpenBankExternalSubAccountBookBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankExternalSubAccountBookBalanceResponse>;
  /** 云企付-子商户银行卡列表查询 {@link QueryOpenBankExternalSubMerchantBankAccountRequest} {@link QueryOpenBankExternalSubMerchantBankAccountResponse} */
  QueryOpenBankExternalSubMerchantBankAccount(data: QueryOpenBankExternalSubMerchantBankAccountRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankExternalSubMerchantBankAccountResponse>;
  /** 云企付-子商户进件结果查询 {@link QueryOpenBankExternalSubMerchantRegistrationRequest} {@link QueryOpenBankExternalSubMerchantRegistrationResponse} */
  QueryOpenBankExternalSubMerchantRegistration(data: QueryOpenBankExternalSubMerchantRegistrationRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankExternalSubMerchantRegistrationResponse>;
  /** 云企付-单笔交易回单申请结果查询 {@link QueryOpenBankOrderDetailReceiptInfoRequest} {@link QueryOpenBankOrderDetailReceiptInfoResponse} */
  QueryOpenBankOrderDetailReceiptInfo(data: QueryOpenBankOrderDetailReceiptInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankOrderDetailReceiptInfoResponse>;
  /** 云企付-查询订单支付结果 {@link QueryOpenBankPaymentOrderRequest} {@link QueryOpenBankPaymentOrderResponse} */
  QueryOpenBankPaymentOrder(data: QueryOpenBankPaymentOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankPaymentOrderResponse>;
  /** 云企付-绑定分账收款方查询 {@link QueryOpenBankProfitSharePayeeRequest} {@link QueryOpenBankProfitSharePayeeResponse} */
  QueryOpenBankProfitSharePayee(data: QueryOpenBankProfitSharePayeeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankProfitSharePayeeResponse>;
  /** 云企付-退款结果查询 {@link QueryOpenBankRefundOrderRequest} {@link QueryOpenBankRefundOrderResponse} */
  QueryOpenBankRefundOrder(data: QueryOpenBankRefundOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankRefundOrderResponse>;
  /** 云企付-结算单查询结果 {@link QueryOpenBankSettleOrderRequest} {@link QueryOpenBankSettleOrderResponse} */
  QueryOpenBankSettleOrder(data: QueryOpenBankSettleOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankSettleOrderResponse>;
  /** 云企付-子商户资质文件查询 {@link QueryOpenBankSubMerchantCredentialRequest} {@link QueryOpenBankSubMerchantCredentialResponse} */
  QueryOpenBankSubMerchantCredential(data: QueryOpenBankSubMerchantCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankSubMerchantCredentialResponse>;
  /** 云企付-子商户费率配置结果查询 {@link QueryOpenBankSubMerchantRateConfigureRequest} {@link QueryOpenBankSubMerchantRateConfigureResponse} */
  QueryOpenBankSubMerchantRateConfigure(data: QueryOpenBankSubMerchantRateConfigureRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankSubMerchantRateConfigureResponse>;
  /** 云企付-子商户在线签约查询 {@link QueryOpenBankSubMerchantSignOnlineRequest} {@link QueryOpenBankSubMerchantSignOnlineResponse} */
  QueryOpenBankSubMerchantSignOnline(data: QueryOpenBankSubMerchantSignOnlineRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankSubMerchantSignOnlineResponse>;
  /** 云企付-查询支持银行列表 {@link QueryOpenBankSupportBankListRequest} {@link QueryOpenBankSupportBankListResponse} */
  QueryOpenBankSupportBankList(data: QueryOpenBankSupportBankListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankSupportBankListResponse>;
  /** 云企付-子商户银行卡解绑结果查询 {@link QueryOpenBankUnbindExternalSubMerchantBankAccountRequest} {@link QueryOpenBankUnbindExternalSubMerchantBankAccountResponse} */
  QueryOpenBankUnbindExternalSubMerchantBankAccount(data: QueryOpenBankUnbindExternalSubMerchantBankAccountRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankUnbindExternalSubMerchantBankAccountResponse>;
  /** 云企付-查询核销订单状态 {@link QueryOpenBankVerificationOrderRequest} {@link QueryOpenBankVerificationOrderResponse} */
  QueryOpenBankVerificationOrder(data: QueryOpenBankVerificationOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOpenBankVerificationOrderResponse>;
  /** 聚鑫-查询订单接口 {@link QueryOrderRequest} {@link QueryOrderResponse} */
  QueryOrder(data: QueryOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOrderResponse>;
  /** 云支付-查询订单付款状态 {@link QueryOrderStatusRequest} {@link QueryOrderStatusResponse} */
  QueryOrderStatus(data: QueryOrderStatusRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOrderStatusResponse>;
  /** 跨境-查询汇出结果 {@link QueryOutwardOrderRequest} {@link QueryOutwardOrderResponse} */
  QueryOutwardOrder(data: QueryOutwardOrderRequest, config?: AxiosRequestConfig): AxiosPromise<QueryOutwardOrderResponse>;
  /** 跨境-付款人查询 {@link QueryPayerInfoRequest} {@link QueryPayerInfoResponse} */
  QueryPayerInfo(data: QueryPayerInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryPayerInfoResponse>;
  /** 云鉴-查询对账文件信息 {@link QueryReconciliationDocumentRequest} {@link QueryReconciliationDocumentResponse} */
  QueryReconciliationDocument(data: QueryReconciliationDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<QueryReconciliationDocumentResponse>;
  /** 聚鑫-查询对账文件申请结果 {@link QueryReconciliationFileApplyInfoRequest} {@link QueryReconciliationFileApplyInfoResponse} */
  QueryReconciliationFileApplyInfo(data: QueryReconciliationFileApplyInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryReconciliationFileApplyInfoResponse>;
  /** 聚鑫-查询退款接口 {@link QueryRefundRequest} {@link QueryRefundResponse} */
  QueryRefund(data: QueryRefundRequest, config?: AxiosRequestConfig): AxiosPromise<QueryRefundResponse>;
  /** 云支付-获取门店OpenId接口 {@link QueryShopOpenIdRequest} {@link QueryShopOpenIdResponse} */
  QueryShopOpenId(data: QueryShopOpenIdRequest, config?: AxiosRequestConfig): AxiosPromise<QueryShopOpenIdResponse>;
  /** 灵云-单笔转账结果查询 {@link QuerySinglePaymentResultRequest} {@link QuerySinglePaymentResultResponse} */
  QuerySinglePaymentResult(data: QuerySinglePaymentResultRequest, config?: AxiosRequestConfig): AxiosPromise<QuerySinglePaymentResultResponse>;
  /** 云鉴-查询银行单笔交易状态 {@link QuerySingleTransactionStatusRequest} {@link QuerySingleTransactionStatusResponse} */
  QuerySingleTransactionStatus(data: QuerySingleTransactionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<QuerySingleTransactionStatusResponse>;
  /** 云鉴-查询小额鉴权转账结果 {@link QuerySmallAmountTransferRequest} {@link QuerySmallAmountTransferResponse} */
  QuerySmallAmountTransfer(data: QuerySmallAmountTransferRequest, config?: AxiosRequestConfig): AxiosPromise<QuerySmallAmountTransferResponse>;
  /** 跨境-贸易材料明细查询 {@link QueryTradeRequest} {@link QueryTradeResponse} */
  QueryTrade(data: QueryTradeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTradeResponse>;
  /** 智慧薪酬-通过商家或者微信批次号查询批次单 {@link QueryTransferBatchRequest} {@link QueryTransferBatchResponse} */
  QueryTransferBatch(data: QueryTransferBatchRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTransferBatchResponse>;
  /** 智慧薪酬-通过明细单号查询批明细单 {@link QueryTransferDetailRequest} {@link QueryTransferDetailResponse} */
  QueryTransferDetail(data: QueryTransferDetailRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTransferDetailResponse>;
  /** 智能代发-单笔代发转账查询接口 {@link QueryTransferResultRequest} {@link QueryTransferResultResponse} */
  QueryTransferResult(data: QueryTransferResultRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTransferResultResponse>;
  /** 会员在途充值(经第三方支付渠道)接口 {@link RechargeByThirdPayRequest} {@link RechargeByThirdPayResponse} */
  RechargeByThirdPay(data: RechargeByThirdPayRequest, config?: AxiosRequestConfig): AxiosPromise<RechargeByThirdPayResponse>;
  /** 云鉴-会员在途充值(经第三方支付渠道) {@link RechargeMemberThirdPayRequest} {@link RechargeMemberThirdPayResponse} */
  RechargeMemberThirdPay(data: RechargeMemberThirdPayRequest, config?: AxiosRequestConfig): AxiosPromise<RechargeMemberThirdPayResponse>;
  /** 聚鑫-退款接口 {@link RefundRequest} {@link RefundResponse} */
  Refund(data: RefundRequest, config?: AxiosRequestConfig): AxiosPromise<RefundResponse>;
  /** 聚鑫V2-退款申请 {@link RefundCloudOrderRequest} {@link RefundCloudOrderResponse} */
  RefundCloudOrder(data: RefundCloudOrderRequest, config?: AxiosRequestConfig): AxiosPromise<RefundCloudOrderResponse>;
  /** 会员间交易退款 {@link RefundMemberTransactionRequest} {@link RefundMemberTransactionResponse} */
  RefundMemberTransaction(data: RefundMemberTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<RefundMemberTransactionResponse>;
  /** 云企付-退款申请 {@link RefundOpenBankOrderRequest} {@link RefundOpenBankOrderResponse} */
  RefundOpenBankOrder(data: RefundOpenBankOrderRequest, config?: AxiosRequestConfig): AxiosPromise<RefundOpenBankOrderResponse>;
  /** 云鉴-消费订单退款接口 {@link RefundOrderRequest} {@link RefundOrderResponse} */
  RefundOrder(data: RefundOrderRequest, config?: AxiosRequestConfig): AxiosPromise<RefundOrderResponse>;
  /** 云支付-订单退款接口 {@link RefundTlinxOrderRequest} {@link RefundTlinxOrderResponse} */
  RefundTlinxOrder(data: RefundTlinxOrderRequest, config?: AxiosRequestConfig): AxiosPromise<RefundTlinxOrderResponse>;
  /** 聚鑫-签约行为上报 {@link RegisterBehaviorRequest} {@link RegisterBehaviorResponse} */
  RegisterBehavior(data: RegisterBehaviorRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterBehaviorResponse>;
  /** 登记挂账(支持撤销) {@link RegisterBillRequest} {@link RegisterBillResponse} */
  RegisterBill(data: RegisterBillRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterBillResponse>;
  /** 云鉴-登记挂账 {@link RegisterBillSupportWithdrawRequest} {@link RegisterBillSupportWithdrawResponse} */
  RegisterBillSupportWithdraw(data: RegisterBillSupportWithdrawRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterBillSupportWithdrawResponse>;
  /** 云鉴-登记挂账撤销 {@link RevResigterBillSupportWithdrawRequest} {@link RevResigterBillSupportWithdrawResponse} */
  RevResigterBillSupportWithdraw(data: RevResigterBillSupportWithdrawRequest, config?: AxiosRequestConfig): AxiosPromise<RevResigterBillSupportWithdrawResponse>;
  /** 云鉴-修改会员属性-普通商户子账户 {@link ReviseMbrPropertyRequest} {@link ReviseMbrPropertyResponse} */
  ReviseMbrProperty(data: ReviseMbrPropertyRequest, config?: AxiosRequestConfig): AxiosPromise<ReviseMbrPropertyResponse>;
  /** 云鉴-撤销会员在途充值(经第三方支付渠道) {@link RevokeMemberRechargeThirdPayRequest} {@link RevokeMemberRechargeThirdPayResponse} */
  RevokeMemberRechargeThirdPay(data: RevokeMemberRechargeThirdPayRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeMemberRechargeThirdPayResponse>;
  /** 撤销会员在途充值(经第三方支付渠道)接口 {@link RevokeRechargeByThirdPayRequest} {@link RevokeRechargeByThirdPayResponse} */
  RevokeRechargeByThirdPay(data: RevokeRechargeByThirdPayRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeRechargeByThirdPayResponse>;
  /** 签约状态同步接口 {@link SyncContractDataRequest} {@link SyncContractDataResponse} */
  SyncContractData(data: SyncContractDataRequest, config?: AxiosRequestConfig): AxiosPromise<SyncContractDataResponse>;
  /** 解除签约关系接口 {@link TerminateContractRequest} {@link TerminateContractResponse} */
  TerminateContract(data: TerminateContractRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateContractResponse>;
  /** 智能代发-单笔代发转账接口 {@link TransferSinglePayRequest} {@link TransferSinglePayResponse} */
  TransferSinglePay(data: TransferSinglePayRequest, config?: AxiosRequestConfig): AxiosPromise<TransferSinglePayResponse>;
  /** 聚鑫-解绑银行卡 {@link UnBindAcctRequest} {@link UnBindAcctResponse} */
  UnBindAcct(data: UnBindAcctRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindAcctResponse>;
  /** 云企付-子商户银行卡解绑 {@link UnbindOpenBankExternalSubMerchantBankAccountRequest} {@link UnbindOpenBankExternalSubMerchantBankAccountResponse} */
  UnbindOpenBankExternalSubMerchantBankAccount(data: UnbindOpenBankExternalSubMerchantBankAccountRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindOpenBankExternalSubMerchantBankAccountResponse>;
  /** 云鉴-会员解绑提现账户 {@link UnbindRelateAcctRequest} {@link UnbindRelateAcctResponse} */
  UnbindRelateAcct(data: UnbindRelateAcctRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindRelateAcctResponse>;
  /** 聚鑫V2-统一下单 {@link UnifiedCloudOrderRequest} {@link UnifiedCloudOrderResponse} */
  UnifiedCloudOrder(data: UnifiedCloudOrderRequest, config?: AxiosRequestConfig): AxiosPromise<UnifiedCloudOrderResponse>;
  /** 聚鑫-统一下单接口 {@link UnifiedOrderRequest} {@link UnifiedOrderResponse} */
  UnifiedOrder(data: UnifiedOrderRequest, config?: AxiosRequestConfig): AxiosPromise<UnifiedOrderResponse>;
  /** 云支付-统一下单接口 {@link UnifiedTlinxOrderRequest} {@link UnifiedTlinxOrderResponse} */
  UnifiedTlinxOrder(data: UnifiedTlinxOrderRequest, config?: AxiosRequestConfig): AxiosPromise<UnifiedTlinxOrderResponse>;
  /** 灵云-上传主播信息 {@link UploadExternalAnchorInfoRequest} {@link UploadExternalAnchorInfoResponse} */
  UploadExternalAnchorInfo(data: UploadExternalAnchorInfoRequest, config?: AxiosRequestConfig): AxiosPromise<UploadExternalAnchorInfoResponse>;
  /** 直播平台-文件上传 {@link UploadFileRequest} {@link UploadFileResponse} */
  UploadFile(data: UploadFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFileResponse>;
  /** 云企付-子商户资质文件上传 {@link UploadOpenBankSubMerchantCredentialRequest} {@link UploadOpenBankSubMerchantCredentialResponse} */
  UploadOpenBankSubMerchantCredential(data: UploadOpenBankSubMerchantCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<UploadOpenBankSubMerchantCredentialResponse>;
  /** 云支付-上传机构文件接口 {@link UploadOrgFileRequest} {@link UploadOrgFileResponse} */
  UploadOrgFile(data: UploadOrgFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadOrgFileResponse>;
  /** 直播平台-上传代理商完税列表 {@link UploadTaxListRequest} {@link UploadTaxListResponse} */
  UploadTaxList(data: UploadTaxListRequest, config?: AxiosRequestConfig): AxiosPromise<UploadTaxListResponse>;
  /** 直播平台-上传代理商完税证明 {@link UploadTaxPaymentRequest} {@link UploadTaxPaymentResponse} */
  UploadTaxPayment(data: UploadTaxPaymentRequest, config?: AxiosRequestConfig): AxiosPromise<UploadTaxPaymentResponse>;
  /** 云企付-子商户银行卡打款验证 {@link VerifyOpenBankAccountRequest} {@link VerifyOpenBankAccountResponse} */
  VerifyOpenBankAccount(data: VerifyOpenBankAccountRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyOpenBankAccountResponse>;
  /** 云支付-查询合同明细接口 {@link ViewContractRequest} {@link ViewContractResponse} */
  ViewContract(data: ViewContractRequest, config?: AxiosRequestConfig): AxiosPromise<ViewContractResponse>;
  /** 云支付-查询商户明细接口 {@link ViewMerchantRequest} {@link ViewMerchantResponse} */
  ViewMerchant(data: ViewMerchantRequest, config?: AxiosRequestConfig): AxiosPromise<ViewMerchantResponse>;
  /** 云支付-查询门店明细接口 {@link ViewShopRequest} {@link ViewShopResponse} */
  ViewShop(data: ViewShopRequest, config?: AxiosRequestConfig): AxiosPromise<ViewShopResponse>;
  /** 云鉴-会员提现-不验证 {@link WithdrawCashMembershipRequest} {@link WithdrawCashMembershipResponse} */
  WithdrawCashMembership(data: WithdrawCashMembershipRequest, config?: AxiosRequestConfig): AxiosPromise<WithdrawCashMembershipResponse>;
}

export declare type Versions = ["2019-08-20"];

export default Cpdp;
