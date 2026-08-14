/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 参加营销活动事件详情 */
declare interface AddPromotionEvent {
  /** 营销活动ID */
  PromotionId: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 邀请人ID */
  InviterUserId?: string;
  /** 营销活动关联的优惠券 */
  Coupon?: Coupon;
  /** 营销活动关联的积分活动 */
  Point?: CreditPoint;
  /** 参加营销活动结果 */
  Result?: Result;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 地址 */
declare interface Address {
  /** 国家参数格式：符合ISO 3166标准 */
  Country?: string;
  /** 省份 */
  Region?: string;
  /** 城市 */
  City?: string;
  /** 地区 */
  District?: string;
  /** 详细地址 */
  Detail?: string;
  /** 邮政编码 */
  ZipCode?: string;
}

/** 金额 */
declare interface Amount {
  /** 原始货币类型参数格式：符合ISO 4217标准 */
  Currency: string;
  /** 原始金额 */
  OriginalAmount: number;
  /** 当前币种对美金的汇率 */
  ExchangeRateUSD?: number;
  /** 当前币种对人民币的汇率 */
  ExchangeRateCNY?: number;
}

/** 应用程序信息 */
declare interface App {
  /** 应用程序运行的移动设备的操作系统类型 */
  OS?: string;
  /** 应用程序运行的移动设备的操作系统版本 */
  OSVersion?: string;
  /** 应用程序运行的移动设备的生产厂商 */
  DeviceManufacturer?: string;
  /** 应用程序运行的移动设备的型号 */
  DeviceModel?: string;
  /** 应用程序运行的移动设备的唯一ID，对于iOS为IFV标识，对于Android为Android ID */
  DeviceId?: string;
  /** 应用程序名称 */
  AppName?: string;
  /** 应用程序版本 */
  AppVersion?: string;
  /** 应用程序提供的语言 */
  ClientLanguage?: string;
}

/** 设备风险评估高级版返回结果 */
declare interface AssessDeviceRiskPremiumRsp {
  /** 决策信息 */
  Decision?: Decision;
  /** 设备风险分信息 */
  Score?: DataScore;
  /** 设备基础信息 */
  Device?: Device;
  /** IP环境基础信息 */
  Environment?: Environment | null;
}

/** 设备风险评估基础版返回结果 */
declare interface AssessDeviceRiskRsp {
  /** 设备风险分信息 */
  Score?: DataScore;
  /** 设备基础信息 */
  Device?: Device;
  /** IP环境基础信息 */
  Environment?: Environment | null;
}

/** 环境风险评估返回结果 */
declare interface AssessEnvironmentRiskRsp {
  /** IP环境风险分信息 */
  Score?: DataScore;
  /** IP环境基础信息 */
  Environment?: Environment;
}

/** 事件风险评估返回结果 */
declare interface AssessRiskRsp {
  /** 决策信息 */
  Decision?: Decision;
  /** 风险分，根据您开启的产品服务计算的评分结果 */
  Score?: Score;
  /** 扩展信息 */
  ExtraInfo?: Cust[] | null;
}

/** 账单信息 */
declare interface Billing {
  /** 账单地址 */
  Address?: Address;
  /** 账单联系电话参数格式：符合E.164标准的带“+”、地区编码和号码的格式 */
  Phone?: string;
  /** 账单邮箱 */
  Email?: string;
  /** 账单接收人姓名 */
  Recipient?: string;
}

/** 浏览事件详情 */
declare interface BrowseEvent {
  /** 当前浏览网页的类型，例如主页、搜索页等 */
  PageType?: string;
  /** 当前浏览的网页URL */
  PageUrl?: string;
  /** 浏览耗时单位：毫秒 */
  Duration?: number;
  /** 网页内容类型，例如广告、视频、文章等 */
  ContentType?: string;
  /** 网页内容ID */
  ContentId?: string;
  /** 上一个网页的类型，例如主页、搜索页等 */
  ReferPageType?: string;
  /** 上一个网页URL */
  ReferPageUrl?: string;
  /** 游客账号ID */
  GuestId?: string;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 浏览器信息 */
declare interface Browser {
  /** 与网站交互的浏览器的用户代理 */
  UserAgent?: string;
  /** 浏览器支持的用户请求语言参数格式：符合ISO 3166标准 */
  AcceptLanguage?: string;
  /** 浏览器当前网站内容的语言参数格式：符合ISO 3166标准 */
  ContentLanguage?: string;
}

/** 银行卡 */
declare interface Card {
  /** 发卡行识别码卡号前6位参数格式：符合ISO 13616-1标准 */
  CardBin: string;
  /** 发卡行识别码卡号后4位参数格式：符合ISO 13616-1标准 */
  LastFourDigits: string;
  /** 发行国家 */
  Country?: string;
  /** 发行银行 */
  Bank?: string;
  /** 支付卡类型枚举值：credit： 信用卡debit： 借记卡charge： 签账卡 */
  Type?: string;
  /** 支付卡品牌 */
  Brand?: string;
  /** 支付卡等级 */
  Level?: string;
  /** 持有者姓名 */
  HolderName?: string;
  /** 过期日期参数格式：YYYY-MM-DD */
  ExpireTime?: string;
}

/** 拒付事件详情 */
declare interface ChargeBackEvent {
  /** 交易ID */
  TransactionId: string;
  /** 订单 ID，当一笔交易关联多个订单（合并支付）时请输入所有订单ID */
  OrderId: string[];
  /** 拒付理由码，参考各卡组织定义的拒付码，例如：10.1、13.1、 4870、4871等 */
  ChargeBackCode: string;
  /** 拒付原因，参考各卡组织定义的拒付原因，例如：未收到商品、欺诈等 */
  ChargeBackReason: string;
  /** 拒付申诉阶段枚举值：need_response： 需要商家回应information_supplied： 商家已提供信息chargeback_reversed： 拒付已撤销chargeback_sustained： 拒付已成立 */
  ChargeBackProcess?: string;
  /** 拒付金额 */
  ChargeBackAmount?: Amount;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 领红包事件详情 */
declare interface ClaimRedPacketEvent {
  /** 营销活动ID */
  PromotionId?: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 邀请人ID */
  InviterUserId?: string;
  /** 红包ID */
  RedPacketId?: string;
  /** 红包类型，如手气红包、口令红包、均分红包等 */
  RedPacketType?: string;
  /** 红包金额 */
  RedPacketAmount?: Amount;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 优惠券 */
declare interface Coupon {
  /** 优惠券ID */
  CouponId?: string;
  /** 优惠券名称 */
  CouponName?: string;
  /** 优惠券开始时间参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间 */
  StartTime?: string;
  /** 优惠券过期时间参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间 */
  ExpireTime?: string;
  /** 折扣百分比，如果折扣为 10%，则发送“0.1” */
  PercentageRate?: number;
  /** 折扣金额 */
  DiscountAmount?: Amount;
  /** 优惠券门槛 */
  Threshold?: number;
}

/** 创建订单事件详情 */
declare interface CreateOrderEvent {
  /** 订单ID */
  OrderId: string;
  /** 订单金额 */
  Amount: Amount;
  /** 商家信息 */
  Merchant: Merchant;
  /** 账单信息 */
  Billing?: Billing;
  /** 商品信息 */
  Items?: Item[];
  /** 物流信息 */
  Delivery?: Delivery;
  /** 营销活动信息 */
  Promotions?: Promotion[];
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 账号积分 */
declare interface CreditPoint {
  /** 积分分值 */
  Point: number;
  /** 积分类型 */
  PointType: string;
}

/** 与RCE约定的定制化参数，K:V 格式的对象数组 */
declare interface Cust {
  /** 标识符 */
  Key?: string;
  /** 数据 */
  Value?: string | null;
}

/** 自定义事件 */
declare interface CustEvent {
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 数据授权信息 */
declare interface DataAuthorization {
  /** 数据委托方，客户主体名称 */
  DataProviderName?: string;
  /** 数据受托方，腾讯云主体名称，固定填：腾讯云计算（北京）有限责任公司 */
  DataRecipientName?: string;
  /** 客户请求RCE所提供的用户数据类型，支持多选枚举值：1： 手机号2： 微信开放账号3： QQ开放账号4： IP地址5： URL网址999： 其他 */
  UserDataType?: number[];
  /** 客户是否已按合规指南要求获取用户授权，同意客户委托腾讯云处理入参信息枚举值：true： 已授权false： 未授权 */
  IsAuthorized?: boolean;
  /** 客户是否已按合规指南要求获取用户授权，同意腾讯云结合客户提供的信息，对已合法收集的用户数据进行必要处理得出服务结果，并返回给客户枚举值：true： 已授权false： 未授权 */
  IsOrderHanding?: boolean;
  /** 客户获得的用户授权期限Unix时间戳（单位秒），不填默认无固定期限 */
  AuthorizationDeadline?: number;
  /** 客户获得用户授权所依赖的协议地址 */
  PrivacyPolicyLink?: string;
}

/** 风险分信息 */
declare interface DataScore {
  /** 风险等级 */
  RiskLevel?: number;
  /** 风险标签 */
  RiskLabels?: RiskLabel[];
  /** 综合风险分数。取值范围：[1, 1000]数值越大，风险越大。 */
  RiskScore?: number | null;
}

/** 决策信息 */
declare interface Decision {
  /** 决策结果pass：通过review：复审reject：拒绝 */
  DecisionResult?: string;
  /** 命中策略后的决策动作，可在控制台配置 */
  Disposition?: string | null;
}

/** 物流信息 */
declare interface Delivery {
  /** 物流方式physical：物理投送electonic：电子投送 */
  DeliveryMethod?: string;
  /** 物流费用 */
  DeliveryAmount?: Amount;
  /** 收货地址 */
  DeliveryAddress?: Address;
  /** 收货人电话参数格式：符合E.164标准的带“+”、地区编码和号码的格式 */
  ConsigneePhone?: string;
  /** 收货人邮箱 */
  ConsigneeEmail?: string;
  /** 收货人姓名 */
  ConsigneeName?: string;
  /** 是否加急 */
  Expedited?: boolean;
  /** 物流厂商，一般是物流的公司 */
  DeliveryCarrier?: string;
  /** 物流追踪单号 */
  DeliveryTracking?: string;
}

/** 设备基础信息 */
declare interface Device {
  /** 设备ID */
  DeviceId?: string;
  /** App版本信息 */
  AppVersion?: string;
  /** 品牌 */
  Brand?: string;
  /** 客户端IP */
  ClientIp?: string;
  /** 机型 */
  Model?: string;
  /** 网络类型 */
  NetworkType?: string;
  /** 应用包名 */
  PackageName?: string;
  /** 平台枚举值：2： Android3： IOS4： H55： 微信小程序 */
  Platform?: string;
  /** 系统版本 */
  SystemVersion?: string;
  /** SDK版本 */
  SdkBuildVersion?: string;
  /** 验签token，验签功能启用请联系我们。 */
  SignToken?: string;
  /** token生成时间戳，毫秒级。 */
  TokenTime?: string;
}

/** 数字订单 */
declare interface DigitalOrder {
  /** 数字资产 */
  DigitalAsset?: string;
  /** 数字资产类型枚举值：coin： 代币commodity： 大宗商品crypto： 加密货币fiat： 法币token： 通证stock： 股票bond： 债券 */
  AssetType?: string;
  /** 订单类型枚举值：limit： 限价单market： 市价单stop_limit： 止损限价单stop_loss： 止损单take_profit： 止盈单take_profit_limit： 止盈限价单 */
  OrderType?: string;
  /** 数字资产的数量 */
  Volume?: number;
}

/** 环境基础信息 */
declare interface Environment {
  /** IP地理位置信息 */
  Location?: IPLocation;
  /** IP基础网络信息 */
  Network?: IPNetwork;
}

/** 事件详情 */
declare interface EventDetail {
  /** 登录 */
  Login?: LoginEvent;
  /** 注册（变更用户信息） */
  Register?: RegisterEvent;
  /** 创建订单 */
  CreateOrder?: CreateOrderEvent;
  /** 交易支付 */
  Transaction?: TransactionEvent;
  /** 短信 */
  Sms?: SMSEvent;
  /** 拒付 */
  ChargeBack?: ChargeBackEvent;
  /** 登出 */
  Logout?: LogoutEvent;
  /** 修改账号 */
  ModifyAccount?: ModifyAccountEvent;
  /** 修改密码 */
  ModifyPassword?: ModifyPasswordEvent;
  /** 安全验证 */
  SecurityVerification?: SecurityVerificationEvent;
  /** 参加营销活动 */
  AddPromotion?: AddPromotionEvent;
  /** 兑奖 */
  Redeem?: RedeemEvent;
  /** 提现 */
  Withdraw?: WithdrawEvent;
  /** 自定义事件 */
  CustEvent?: CustEvent;
  /** 扫码 */
  ScanCode?: ScanCodeEvent;
  /** 抽奖 */
  LuckyDraw?: LuckyDrawEvent;
  /** 做任务 */
  Task?: TaskEvent;
  /** 邀请 */
  Invitation?: InvitationEvent;
  /** 领红包 */
  ClaimRedPacket?: ClaimRedPacketEvent;
  /** 浏览 */
  Browse?: BrowseEvent;
}

/** IP地理位置信息 */
declare interface IPLocation {
  /** IP地址所属国家 */
  Country?: string;
  /** IP地址所属省份 */
  Region?: string;
  /** IP地址所属城市 */
  City?: string;
  /** IP地址所属地区 */
  District?: string;
  /** IP地址的经度 */
  Longitude?: string;
  /** IP地址的纬度 */
  Latitude?: string;
  /** IP地址所属时区 */
  Timezone?: string;
  /** IP地址的邮政编码 */
  ZipCode?: string;
}

/** IP基础网络信息 */
declare interface IPNetwork {
  /** 互联网服务提供商 */
  ISP?: string;
  /** 自治系统号 */
  ASN?: string;
  /** IP注册组织名称 */
  Organization?: string;
  /** 是否保留IP */
  IsReserved?: boolean;
  /** 是否网关IP */
  IsGateway?: boolean;
  /** 是否任播网络 */
  IsAnycast?: boolean;
  /** 是否移动网络 */
  IsMobile?: boolean;
  /** 是否动态IP */
  IsDynamic?: boolean;
  /** 是否网络出口 */
  IsEgress?: boolean;
  /** 是否域名解析 */
  IsDNS?: boolean;
  /** 是否教育机构 */
  IsEducation?: boolean;
  /** 是否组织机构 */
  IsInstitution?: boolean;
  /** 是否企业专线 */
  IsCompany?: boolean;
  /** 是否家用宽带 */
  IsResidence?: boolean;
  /** 是否云服务 */
  IsCloudService?: boolean;
  /** 是否基础设施 */
  IsInfrastructure?: boolean;
  /** 是否邮箱服务 */
  IsMXServer?: boolean;
}

/** 邀请事件详情 */
declare interface InvitationEvent {
  /** 受邀请人ID */
  InviteeUserId: string;
  /** 营销活动ID */
  PromotionId?: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 受邀请人电话号码参数格式：符合E.164标准的带“+”、地区编码和号码的格式 */
  InviteePhone?: string;
  /** 邀请码 */
  InvitationCode?: string;
  /** 邀请链接 */
  InvitationUrl?: string;
  /** 邀请渠道，如微信、抖音、小红书等 */
  InvitationChannel?: string;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 邀请人信息 */
declare interface Inviter {
  /** 邀请人ID */
  InviterUserId: string;
  /** 邀请人电话号码参数格式：符合E.164标准的带“+”、地区编码和号码的格式 */
  InviterPhone?: string;
  /** 邀请码 */
  InviteCode?: string;
  /** 邀请渠道 */
  InviteChannel?: string;
}

/** 商品信息 */
declare interface Item {
  /** 商品ID */
  ItemId: string;
  /** 商品名称 */
  ItemName?: string;
  /** 商品类别 */
  Category?: string;
  /** 商品单价 */
  Price?: Amount;
  /** 如果商品有UPC码（Universal Product Code），请提供 */
  UPC?: string;
  /** 如果商品有EAN码（European Article Number），请提供 */
  EAN?: string;
  /** 如果商品有SKU码（Stock Keeping Unit），请提供 */
  SKU?: string;
  /** 如果商品有ISBN码（International Standard Book Number ），请提供 */
  ISBN?: string;
  /** 商品品牌 */
  Brand?: string;
  /** 商品数量 */
  Quantity?: number;
  /** 生产厂商 */
  Manufacturer?: string;
  /** 商品标签 */
  Tags?: string;
}

/** 登录事件详情 */
declare interface LoginEvent {
  /** 用户基础信息 */
  UserInfo?: User;
  /** 用户登录时输入的用户名 */
  UserLoginName?: string;
  /** 登录结果 */
  LoginResult?: Result;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 登出事件详情 */
declare interface LogoutEvent {
  /** 用户基础信息 */
  UserInfo?: User;
  /** 用户登录时输入的用户名 */
  UserLoginName?: string;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 抽奖事件详情 */
declare interface LuckyDrawEvent {
  /** 营销活动ID */
  PromotionId?: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 邀请人ID */
  InviterUserId?: string;
  /** 抽奖次数单位：次数 */
  LuckyDrawCount?: number;
  /** 抽奖类型 */
  LuckyDrawType?: string;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 商家信息 */
declare interface Merchant {
  /** 商家ID */
  MerchantId: string;
  /** 商家名称 */
  Name?: string;
  /** 商家的注册时间参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间 */
  RegisterTime?: string;
  /** 商家类别代码参数格式：符合ISO 18245标准的4位编号 */
  Category?: string;
  /** 商家电话参数格式：符合E.164标准的带“+”、地区编码和号码的格式 */
  Phone?: string;
  /** 商家邮件 */
  Email?: string;
  /** 商家店铺网址 */
  URL?: string;
  /** 商家地址 */
  Address?: Address;
  /** 商家等级 */
  Level?: string;
  /** 经营类型枚举值：person： 个人company： 企业 */
  BusinessType?: string;
  /** 商家在售商品数量 */
  GoodsQuantity?: number;
  /** 商家历史销售数量 */
  HistoricSalesQuantity?: number;
  /** 商家历史销售总额 */
  HistoricSalesAmount?: Amount;
}

/** 修改账号事件详情 */
declare interface ModifyAccountEvent {
  /** 用户基础信息 */
  UserInfo?: User;
  /** 用户填写的个人信息 */
  Person?: Person;
  /** 用户填写的账单地址 */
  BillingAddress?: Address;
  /** 用户填写的收货地址 */
  DeliveryAddress?: Address;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 修改密码事件详情 */
declare interface ModifyPasswordEvent {
  /** 修改原因枚举值：user_modify： 用户主动修改forgot_password： 忘记密码forced_reset： 系统强制重置 */
  Reason?: string;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 订单信息 */
declare interface Order {
  /** 订单ID */
  OrderId: string;
  /** 订单金额 */
  Amount: Amount;
  /** 商品信息 */
  Items?: Item[];
  /** 物流信息 */
  Delivery?: Delivery;
}

/** 支付方式，支持多种支付方式 */
declare interface PaymentMethod {
  /** 支付方式枚举值：cash： 现金check： 支票credit_card： 信用卡debit_card： 借记卡crypto_currency： 加密货币digital_wallet： 数字钱包gift_card： 礼品卡points： 积分in_app_purchase： APP内购买electronic_fund_transfer： 电子资金转账financing： 融资invoice： 发票prepaid_card： 预付卡sepa_credit： SEPA信用转账 */
  PaymentType: string;
  /** 支付渠道 */
  PaymentChannel?: string;
  /** 银行卡信息，当用支付方式是credit_card、debit_card时必填 */
  Card?: Card;
  /** SEPA直接借记授权枚举值：true： 是false： 否 */
  SEPADirectDebitMandate?: boolean;
  /** 数字钱包 */
  DigitalWallet?: Wallet;
}

/** 支付结果 */
declare interface PaymentResult {
  /** 支付状态枚举值：success： 成功failure： 失败 */
  Status: string;
  /** 支付失败原因 */
  FailureReason?: string;
  /** 是否使用3DS，枚举值：是：true否：false */
  ThreeDomainSecure?: boolean;
  /** ECI返回码 */
  ECICode?: string;
  /** AVS响应结果（地址验证） */
  AVSCode?: string;
  /** CVC验证结果（交易真实性验证） */
  CVCCode?: string;
}

/** 个人信息 */
declare interface Person {
  /** 姓名全称 */
  Name?: string;
  /** 性别 */
  Gender?: string;
  /** 出生日期参数格式：YYYY-MM-DD */
  Birthday?: string;
  /** 学历 */
  Degree?: string;
  /** 职业 */
  Occupation?: string;
}

/** 营销活动 */
declare interface Promotion {
  /** 营销活动ID */
  PromotionId: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 邀请人ID */
  InviterUserId?: string;
  /** 优惠券 */
  Coupon?: Coupon;
  /** 积分 */
  CreditPoint?: CreditPoint;
}

/** 营销活动码 */
declare interface PromotionCode {
  /** 活动码ID */
  Id: string;
  /** 活动码类型，例如：qrcode-二维码、barcode-条形码、miniprogram_code-小程序码 */
  Type?: string;
  /** 活动码图片URL或链接 */
  ImageLink?: string;
  /** 营销活动码使用地址 */
  Address?: Address;
  /** 营销活动码关联的商品 */
  Items?: Item[];
}

/** 兑奖事件详情 */
declare interface RedeemEvent {
  /** 营销活动ID */
  PromotionId: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 邀请人ID */
  InviterUserId?: string;
  /** 兑奖关联的订单信息 */
  Order?: Order;
  /** 兑奖结果 */
  Result?: Result;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 注册事件详情 */
declare interface RegisterEvent {
  /** 注册结果 */
  RegisterResult?: Result;
  /** 用户基础信息 */
  UserInfo?: User;
  /** 用户注册时填写的个人信息 */
  Person?: Person;
  /** 用户注册时填写的账单地址 */
  BillingAddress?: Address;
  /** 用户注册时填写的收货地址 */
  DeliveryAddress?: Address;
  /** 邀请人信息 */
  Inviter?: Inviter;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 事件结果 */
declare interface Result {
  /** 实际是否完成状态枚举值：success： 成功failure： 失败 */
  Status: string;
  /** 失败原因 */
  FailureReason?: string;
}

/** 风险标签 */
declare interface RiskLabel {
  /** 风险ID */
  Id?: string;
  /** 风险描述 */
  Reason?: string;
}

/** 短信事件详情 */
declare interface SMSEvent {
  /** 用户基础信息 */
  UserInfo?: User;
  /** 本次短信发送标识 ID */
  SMSId?: string;
  /** 用户实际完成验证码时间参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间 */
  ReceivedTime?: string;
  /** 记录用户收到短信的动作no_action：用户无动作safe：用户确认本人操作compromised：用户反馈为第三方操作 */
  Action?: string;
  /** 短信回执结果 */
  SMSResult?: Result;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 扫码事件详情 */
declare interface ScanCodeEvent {
  /** 营销活动码 */
  PromotionCode: PromotionCode;
  /** 营销活动ID */
  PromotionId?: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 邀请人ID */
  InviterUserId?: string;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组， 示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 风险分 */
declare interface Score {
  /** 风险分值，范围[1, 1000]，分值越大，风险越高 */
  RiskScore?: number;
  /** 风险标签 */
  RiskLabels?: RiskLabel[];
}

/** 安全验证事件详情 */
declare interface SecurityVerificationEvent {
  /** 安全验证所处的事件类型枚举值：register： 注册login： 登录modify_account： 修改账号modify_password： 修改密码create_order： 创建订单transaction： 交易支付modify_order： 修改订单withdraw： 提现add_promotion： 参加营销活动redeem： 兑奖 */
  VerificationEvent: string;
  /** 安全验证类型，sms-短信、phone_call-电话、email-邮件、captcha-验证码、shared_knowledge-共享知识、face-人脸、fingerprint-指纹等 */
  VerificationType: string;
  /** 安全验证的内容，例如：用于验证的电话号码、邮件、验证码或者问题，当安全验证类型是sms、phone_call、email、captcha、shared_knowledge时输入 */
  VerificationContent?: string;
  /** 安全验证结果 */
  VerificationResult?: Result;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 做任务事件详情 */
declare interface TaskEvent {
  /** 营销活动ID */
  PromotionId?: string;
  /** 营销活动名称 */
  PromotionName?: string;
  /** 营销活动描述 */
  Description?: string;
  /** 邀请人ID */
  InviterUserId?: string;
  /** 任务ID */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务类型，如签到打卡、观看广告、累计步数等 */
  TaskType?: string;
  /** 任务完成耗时单位：毫秒 */
  TaskCostTime?: number;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 交易事件详情 */
declare interface TransactionEvent {
  /** 交易唯一标识 */
  TransactionId: string;
  /** 您系统中的订单 ID，当一笔交易关联多个订单（合并支付）时请输入所有订单ID */
  OrderId: string[];
  /** 交易金额 */
  PaymentAmount: Amount;
  /** 支付方式，支持多种支付方式 */
  PaymentMethod: PaymentMethod;
  /** 交易类型枚举值：sale： 一次性完成授权与扣款（最常见）authorize： 仅授权（冻结金额）capture： 执行扣款（在授权后）void： 取消待处理的授权或扣款refund： 退款（部分或全部）deposit： 向账户存款withdrawal： 从账户提现transfer： 账户间转账buy： 购买资产（如加密货币）sell： 出售资产send： 发送资金/资产（如跨钱包转账）receive： 接收资金/资产默认值：sale */
  TransactionType?: string;
  /** 账单信息 */
  Billing?: Billing;
  /** 物流信息 */
  Delivery?: Delivery;
  /** 商家信息 */
  Merchant?: Merchant;
  /** 支付结果 */
  PaymentResult?: PaymentResult;
  /** 接收方的用户ID，适用于 transfer 交易类型 */
  TransferRecipientUserId?: string;
  /** 发送方的物理地址，适用于 transfer 交易类型 */
  TransferSentAddress?: Address;
  /** 接收方的物理地址，适用于 transfer 交易类型 */
  TransferReceivedAddress?: Address;
  /** 数字订单列表 */
  DigitalOrders?: DigitalOrder[];
  /** 接收加密货币的钱包 */
  ReceiverWallet?: Wallet;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

/** 账号信息 */
declare interface User {
  /** 用户等级 */
  UserLevel?: string;
  /** 用户积分 */
  UserPoint?: CreditPoint;
  /** 用户类型 */
  UserType?: string;
}

/** 数字钱包 */
declare interface Wallet {
  /** 钱包类型枚举值：crypto： 加密货币digital： 数字货币fiat： 法币 */
  WalletType: string;
  /** 钱包地址，通常为钱包的唯一标识 */
  WalletAddress: string;
  /** 钱包归属人姓名 */
  WalletHolderName?: string;
  /** 钱包供应商，wechat、alipay、paypal等 */
  WalletProvider?: string;
}

/** 提现事件详情 */
declare interface WithdrawEvent {
  /** 提现金额 */
  Amount: Amount;
  /** 提现方式枚举值：card： 银行卡wallet： 电子钱包 */
  Method: string;
  /** 提现银行卡，当提现方式是card时必填 */
  Card?: Card;
  /** 提现数字钱包，当提现方式是wallet时必填 */
  Wallet?: Wallet;
  /** 提现结果 */
  Result?: Result;
  /** 与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}] */
  Cust?: Cust[];
}

declare interface AssessDeviceRiskPremiumProRequest {
  /** 用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取 */
  DeviceToken: string;
  /** 客户端 IP 地址（IPv4或IPv6） */
  UserIp?: string;
}

declare interface AssessDeviceRiskPremiumProResponse {
  /** 设备风险评估高级版返回结果 */
  Data?: AssessDeviceRiskPremiumRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssessDeviceRiskProRequest {
  /** 用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取 */
  DeviceToken: string;
  /** 客户端 IP 地址（IPv4或IPv6） */
  UserIp?: string;
}

declare interface AssessDeviceRiskProResponse {
  /** 设备风险评估基础版返回结果 */
  Data?: AssessDeviceRiskRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssessEnvironmentRiskRequest {
  /** 客户端 IP 地址（IPv4或IPv6） */
  UserIp: string;
}

declare interface AssessEnvironmentRiskResponse {
  /** 环境风险评估返回结果 */
  Data?: AssessEnvironmentRiskRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssessRiskRequest {
  /** 事件码，标准事件包含：枚举值：login： 登录register： 注册create_order： 创建订单transaction： 交易支付charge_back： 拒付sms： 短信logout： 登出modify_account： 修改账号modify_password： 修改密码security_verification： 安全验证add_promotion： 参加营销活动redeem： 兑奖withdraw： 提现cust_event： 自定义事件，cust_xxxscan_code： 扫码lucky_draw： 抽奖task： 做任务invitation： 邀请claim_red_packet： 领红包browse： 浏览自定义事件可与RCE约定后进行风险评估 */
  EventCode: string;
  /** 事件的发生时间参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间 */
  EventTime: string;
  /** 用户当前会话 ID， 用于关联用户登录前后的动作，如果没有传UserId，则SessionId必传，如缺失则可填充空字符串 */
  SessionId: string;
  /** 用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取 */
  DeviceToken: string;
  /** 客户端 IP 地址（IPv4或IPv6） */
  UserIp: string;
  /** 事件详情，根据您输入的事件码传入对应的事件信息 */
  EventDetail: EventDetail;
  /** 用户在您系统中的唯一ID */
  UserId?: string;
  /** 用户邮箱 */
  UserEmail?: string;
  /** 用户提供的联系方式参数格式：符合E.164标准的带“+”、地区编码和号码的格式 */
  UserPhone?: string;
  /** web浏览器相关信息，若您已集成我们的设备指纹SDK，则无需传入此字段 */
  Browser?: Browser;
  /** 应用程序、操作系统和移动设备详细信息，若您已集成我们的设备指纹SDK，则无需传入此字段 */
  App?: App;
  /** 数据授权信息，国内地域必填 */
  DataAuthorization?: DataAuthorization;
  /** 手机号码加密方式，国内地域必填枚举值：md5： md5加密plain： 明文 */
  UserPhoneEncrypt?: string;
  /** 微信开放账号 */
  WeChatOpenId?: string;
  /** QQ开放账号 */
  QQOpenId?: string;
  /** QQ应用ID，当传入QQ开放账号时，该字段必填，QQ分配给网站或应用的AppId，用来唯一标识网站或应用 */
  QQAppId?: string;
}

declare interface AssessRiskResponse {
  /** 事件风险评估结果 */
  Data?: AssessRiskRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportEventRequest {
  /** 事件码，标准事件包含：枚举值：login： 登录register： 注册create_order： 创建订单transaction： 交易支付charge_back： 拒付sms： 短信logout： 登出modify_account： 修改账号modify_password： 修改密码security_verification： 安全验证add_promotion： 参加营销活动redeem： 兑奖withdraw： 提现cust_event： 自定义事件，cust_xxxscan_code： 扫码lucky_draw： 抽奖task： 做任务invitation： 邀请claim_red_packet： 领红包browse： 浏览自定义事件可与RCE约定后进行风险评估 */
  EventCode: string;
  /** 事件的发生时间参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间 */
  EventTime: string;
  /** 用户当前会话 ID， 用于关联用户登录前后的动作，如果没有传UserId，则SessionId必传，如缺失则可填充空字符串 */
  SessionId: string;
  /** 用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取 */
  DeviceToken: string;
  /** 客户端 IP 地址（IPv4或IPv6） */
  UserIp: string;
  /** 事件详情，根据您输入的事件码传入对应的事件信息 */
  EventDetail: EventDetail;
  /** 用户在您系统中的唯一ID */
  UserId?: string;
  /** 用户邮箱 */
  UserEmail?: string;
  /** 用户提供的联系方式参数格式：符合E.164标准的带“+”、地区编码和号码的格式 */
  UserPhone?: string;
  /** web浏览器相关信息，若您已集成我们的设备指纹SDK，则无需传入此字段 */
  Browser?: Browser;
  /** 应用程序、操作系统和移动设备详细信息，若您已集成我们的设备指纹SDK，则无需传入此字段 */
  App?: App;
  /** 数据授权信息，国内地域必填 */
  DataAuthorization?: DataAuthorization;
  /** 手机号码加密方式，国内地域必填枚举值：md5： md5加密plain： 明文 */
  UserPhoneEncrypt?: string;
  /** 微信开放账号 */
  WeChatOpenId?: string;
  /** QQ开放账号 */
  QQOpenId?: string;
  /** QQ应用ID，当传入QQ开放账号时，该字段必填，QQ分配给网站或应用的AppId，用来唯一标识网站或应用 */
  QQAppId?: string;
}

declare interface ReportEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20250425 {
  type VersionHeader = { headers: { 'X-TC-Version': '2025-04-25' } }

  /** IP地理位置信息 */
  interface IpLocationInfo {
    /** IP地址所属国家 */
    Country?: string;
    /** IP地址所属省份 */
    Region?: string;
    /** IP地址所属城市 */
    City?: string;
    /** IP地址所属地区 */
    District?: string;
    /** IP地址的经度 */
    Longitude?: string;
    /** IP地址的纬度 */
    Latitude?: string;
    /** IP地址所属时区 */
    Timezone?: string;
    /** IP地址的邮政编码 */
    ZipCode?: string;
  }

  /** IP基础网络信息 */
  interface IpNetworkInfo {
    /** 互联网服务提供商 */
    ISP?: string;
    /** 自治系统号 */
    ASN?: string;
    /** IP注册组织名称 */
    Organization?: string;
    /** 是否保留IP */
    IsReserved?: boolean;
    /** 是否网关IP */
    IsGateway?: boolean;
    /** 是否任播网络 */
    IsAnycast?: boolean;
    /** 是否移动网络 */
    IsMobile?: boolean;
    /** 是否动态IP */
    IsDynamic?: boolean;
    /** 是否网络出口 */
    IsEgress?: boolean;
    /** 是否域名解析 */
    IsDNS?: boolean;
    /** 是否教育机构 */
    IsEducation?: boolean;
    /** 是否组织机构 */
    IsInstitution?: boolean;
    /** 是否企业专线 */
    IsCompany?: boolean;
    /** 是否家用宽带 */
    IsResidence?: boolean;
    /** 是否云服务 */
    IsCloudService?: boolean;
    /** 是否基础设施 */
    IsInfrastructure?: boolean;
    /** 是否邮箱服务 */
    IsMXServer?: boolean;
  }

  /** 业务入参 */
  interface ManageIPPortraitRiskInput {
    /** 用户公网ip（仅支持IPv4） */
    UserIp: string;
    /** 渠道号1：pc2：H53：app4：ott */
    Channel: number;
  }

  /** IP画像出参 */
  interface ManageIPPortraitRiskOutput {
    /** 错误码，0 表示成功，非0表示失败错误码。0：成功1002：参数错误6000：系统内部错误 */
    Code?: number;
    /** 返回消息 */
    Message?: string;
    /** 结果 */
    Value?: ManageIPPortraitRiskValueOutput;
  }

  /** 业务出参 */
  interface ManageIPPortraitRiskValueOutput {
    /** 对应的IP */
    UserIp?: string;
    /** 返回风险等级, 0 - 4，0代表无风险，数值越大，风险越高 */
    RiskScore?: number;
    /** 风险类型730001：垃圾邮件，当前IP存在未经用户请求或同意，大量发送的广告、欺诈或推广信息，通常通过邮件、短信或社交消息传播。730002：恶意行为，当前IP存在破坏、窃取、干扰或未授权访问为目的的故意行为。730003：恶意工具，当前IP关联用于实施恶意行为的软件或脚本，如病毒、木马、勒索软件、漏洞利用工具等。730004：匿名IP，通过代理、Tor网络等技术手段隐藏真实来源的IP地址，存在逃避定位或实施攻击风险。730005：开放端口，网络上处于开放状态的服务入口，若配置不当或存在漏洞。730006：养号，当前IP存在通过模拟正常操作（如登录、浏览）维护和提升账号的活跃度与可信度行为。730007：IDC，互联网数据中心，可能被黑客利用来托管恶意服务或发动攻击。730008：晒号，当前IP在公开或地下论坛展示、交易非法获取的各类账号（如游戏、社交、金融账号）的行为。730009：盗号，当前IP存在通过钓鱼、撞库、木马等手段，非法获取他人账号的登录凭证（用户名、密码等）行为。730010：代理，作为中间节点转发网络流量，可用于隐藏真实IP、绕过地域限制。730011：扫描，使用工具自动探测目标网络或系统的开放端口、服务、漏洞等。730012：秒拨，当前IP通过不断重新拨号以快速切换IP地址，常被用于绕过基于IP的频率限制或封禁。730013：爬虫，自动抓取网络信息的脚本或程序。730014：VPN 虚拟专用网络。730015：僵尸网络，当前IP由攻击者通过恶意软件控制的、大规模联网设备（如电脑、IoT设备）集群，可能被用于发动DDoS攻击、发送垃圾邮件等。730016：网络攻击，当前IP存在对计算机系统、网络或数据的任何进攻行为。 */
    RiskType?: number[];
    /** IP地理位置信息 */
    IpLocation?: IpLocationInfo;
    /** IP基础网络信息 */
    IpNetwork?: IpNetworkInfo;
  }

  interface ManageIPPortraitRiskRequest {
    /** 请求秒级时间戳 */
    PostTime: number;
    /** 业务入参 */
    BusinessSecurityData?: ManageIPPortraitRiskInput;
  }

  interface ManageIPPortraitRiskResponse {
    /** 出参 */
    Data?: ManageIPPortraitRiskOutput;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

declare namespace V20201103 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-11-03' } }

  /** 账号信息。 */
  interface AccountInfo {
    /** 用户账号类型；默认开通QQOpenId、手机号MD5权限；如果需要使用微信OpenId入参，则需要"提交工单"或联系对接人进行资格审核，审核通过后方可正常使用微信开放账号。1：QQ开放账号2：微信开放账号10004：手机号MD5，中国大陆11位手机号进行MD5加密，取32位小写值10005：手机号SHA256，中国大陆11位手机号进行SHA256加密，取64位小写值 */
    AccountType: number;
    /** QQ账号信息，AccountType是"1"时，该字段必填。 */
    QQAccount?: QQAccountInfo;
    /** 微信账号信息，AccountType是"2"时，该字段必填。 */
    WeChatAccount?: WeChatAccountInfo;
    /** 其它账号信息，AccountType是10004或10005时，该字段必填。 */
    OtherAccount?: OtherAccountInfo;
  }

  /** 数据授权信息 */
  interface DataAuthorizationInfo {
    /** 数据委托方、需求方：客户主体名称。 */
    DataProviderName: string;
    /** 数据受托方、提供方：腾讯云主体名称。固定填：腾讯云计算（北京）有限责任公司 */
    DataRecipientName: string;
    /** 客户请求RCE所提供的用户数据类型，支持多选。实际以接口请求传参为准。1-手机号；2-微信开放账号；3-QQ开放账号；4-IP地址；999-其它； */
    UserDataType: number[];
    /** 客户是否已按[合规指南](https://rule.tencent.com/rule/202409130001)要求获取用户授权，同意客户委托腾讯云处理入参信息1-已授权；其它值为未授权。 */
    IsAuthorize: number;
    /** 客户是否已按[合规指南](https://rule.tencent.com/rule/202409130001)要求获取用户授权，同意腾讯云结合客户提供的信息，对已合法收集的用户数据进行必要处理得出服务结果，并返回给客户。1-已授权；其它值为未授权。 */
    IsOrderHandling?: number;
    /** 客户获得的用户授权期限时间戳（单位秒）。不填默认无固定期限。 */
    AuthorizationTerm?: number;
    /** 客户获得用户授权所依赖的协议地址。 */
    PrivacyPolicyLink?: string;
  }

  /** 黑白名单导入名单数据的业务入参数据结构 */
  interface DataContentInfo {
    /** 名单数据内容 */
    DataContent?: string;
    /** 名单数据描述 */
    DataRemark?: string;
    /** 名单数据开始时间 */
    StartTime?: string;
    /** 名单数据结束时间 */
    EndTime?: string;
  }

  /** 创建黑白名单入参 */
  interface InputCreateNameListFront {
    /** 名单名称 */
    ListName: string;
    /** 名单类型 [1 黑名单 2白名单] */
    ListType: number;
    /** 数据类型[1 手机号 2 qqOpenId 3 2echatOpenId 4 ip 6 idfa 7 imei] */
    DataType: number;
    /** 描述 */
    Remark?: string;
    /** 加密类型[0 无需加密 1 MD5加密 2 SHA256加密] */
    EncryptionType?: number;
    /** 场景Code，all_scene代表全部场景 */
    SceneCode?: string;
  }

  /** 风险识别RCE入参 */
  interface InputCryptoManageMarketingRisk {
    /** 是否授权：1已授权，否则未授权。 调用全栈式风控引擎接口服务时，客户需先明确授权。 */
    IsAuthorized?: string;
    /** 加密类型：1AES加密 */
    CryptoType?: string;
    /** 加密内容，非空时接口采用加密模式。 */
    CryptoContent?: string;
  }

  /** 删除黑白名单数据业务入参 */
  interface InputDeleteNameListData {
    /** 黑白名单数据ID集合 */
    NameListDataIdList: number[];
  }

  /** 删除黑白名单入参 */
  interface InputDeleteNameListFront {
    /** 名单ID */
    NameListId: number;
  }

  /** 查询黑白名单数据入参 */
  interface InputDescribeDataListFront {
    /** 名单ID */
    NameListId: number;
    /** 当前页数 */
    PageNumber: number;
    /** 每页显示条数 */
    PageSize: number;
    /** 搜索关键字，按照名单数据名称或加密名单数据名称搜索 */
    KeyWord?: string;
    /** 黑白名单列表状态[1 启用 2 停用] */
    Status?: number;
  }

  /** 查询黑白名单详情入参 */
  interface InputDescribeNameListDetail {
    /** 名单ID */
    NameListId: number;
  }

  /** 查询黑白名单入参 */
  interface InputDescribeNameListFront {
    /** 当前页数 */
    PageNumber: number;
    /** 每页显示条数 */
    PageSize: number;
    /** 名单类型 [1 黑名单 2 白名单] */
    ListType?: number;
    /** 数据类型[1 手机号 2 qqOpenId 3 wechatOpenId 4 ip 6 idfa 7 imei] */
    DataType?: number;
    /** 关键字，按照名单名称搜索 */
    KeyWord?: string;
    /** 记录状态[1 启用 2 停用] */
    Status?: number;
  }

  /** 入参的详细参数信息 */
  interface InputDetails {
    /** 字段名称 */
    FieldName: string;
    /** 字段值 */
    FieldValue: string;
  }

  /** 添加名单数据入参 */
  interface InputImportNameListDataFront {
    /** 名单ID */
    NameListId: number;
    /** 数据来源，固定传2（手工录入） */
    DataSource: number;
    /** 黑白名单数据内容 */
    DataContentInfo?: DataContentInfo[];
  }

  /** 全栈式风控引擎入参 */
  interface InputManageMarketingRisk {
    /** 用户账号类型；默认开通QQOpenId、手机号MD5权限；如果需要使用微信OpenId入参，则需要"提交工单"或联系对接人进行资格审核，审核通过后方可正常使用微信开放账号。1：QQ开放账号2：微信开放账号10004：手机号MD5，中国大陆11位手机号进行MD5加密，取32位小写值10005：手机号SHA256，中国大陆11位手机号进行SHA256加密，取64位小写值 */
    Account: AccountInfo;
    /** 场景码，用于识别和区分不同的业务场景，可在控制台上新建和管理控制台链接：https://console.cloud.tencent.com/rce/risk/strategy/scene-root活动防刷默认场景码：e_activity_antirush登录保护默认场景码：e_login_protection注册保护默认场景码：e_register_protection */
    SceneCode: string;
    /** 用户外网ip（传入用户非外网ip会影响判断结果）。 */
    UserIp: string;
    /** 用户操作时间戳，精确到秒。 */
    PostTime: number;
    /** 业务平台用户唯一标识，支持自定义。 */
    UserId?: string;
    /** 设备指纹DeviceToken值，集成设备指纹后获取；如果集成了相应的设备指纹，该字段必填。 */
    DeviceToken?: string;
    /** 设备指纹 BusinessId。 */
    DeviceBusinessId?: number;
    /** 业务ID。网站或应用在多个业务中使用此服务，通过此ID区分统计数据。 */
    BusinessId?: number;
    /** 昵称，UTF-8 编码。 */
    Nickname?: string;
    /** 用户邮箱地址。 */
    EmailAddress?: string;
    /** 是否识别设备异常：0：不识别。1：识别。 */
    CheckDevice?: number;
    /** 用户HTTP请求中的Cookie进行2次hash的值，只要保证相同Cookie的hash值一致即可。 */
    CookieHash?: string;
    /** 用户HTTP请求的Referer值。 */
    Referer?: string;
    /** 用户HTTP请求的User-Agent值。 */
    UserAgent?: string;
    /** 用户HTTP请求的X-Forwarded-For值。 */
    XForwardedFor?: string;
    /** MAC地址或设备唯一标识。 */
    MacAddress?: string;
    /** 手机制造商ID，如果手机注册，请带上此信息。 */
    VendorId?: string;
    /** 设备类型(已不推荐使用)。 */
    DeviceType?: number;
    /** 扩展字段。 */
    Details?: InputDetails[];
    /** 邀请助力场景相关信息。 */
    Sponsor?: SponsorInfo;
    /** 详情请跳转至OnlineScamInfo查看。 */
    OnlineScam?: OnlineScamInfo;
    /** 1：Android2：iOS3：H54：小程序5：鸿蒙 */
    Platform?: string;
    /** 数据授权信息。注意：新接入通用业务欺诈保护（RCE）服务的客户该字段【必传】。 */
    DataAuthorization?: DataAuthorizationInfo;
  }

  /** 修改黑白名单入参 */
  interface InputModifyNameFront {
    /** 名单ID */
    NameListId: number;
    /** 名单名称 */
    ListName?: string;
    /** 名单状态 [1 启用 2 停用] */
    Status?: number;
    /** 描述 */
    Remark?: string;
  }

  /** 名单数据集合 */
  interface InputModifyNameListDataFront {
    /** 名单数据ID */
    NameListDataId: number;
    /** 名单数据内容 */
    DataContent?: string;
    /** 名单数据开始时间 */
    StartTime?: string;
    /** 名单数据结束时间 */
    EndTime?: string;
    /** 记录状态 [1 启用 2 停用] */
    Status?: number;
    /** 名单数据描述 */
    Remark?: string;
  }

  /** 修改黑白名单数据入参 */
  interface InputModifyNameListDataFrontListData {
    /** 名单数据集合 */
    DataList?: InputModifyNameListDataFront[];
  }

  /** 诈骗信息。 */
  interface OnlineScamInfo {
    /** 内容标签。 */
    ContentLabel?: string;
    /** 内容风险等级：0：正常。1：可疑。 */
    ContentRiskLevel?: number;
    /** 内容产生形式：0：对话。1：广播。 */
    ContentType?: number;
    /** 账号类型1：手机号2：uin账号 */
    FraudType?: number;
    /** 账号 */
    FraudAccount?: string;
  }

  /** 其它账号信息。 */
  interface OtherAccountInfo {
    /** 其他账号信息；AccountType是10004时，填入中国大陆标准11位手机号的MD5值AccountType是10005时，填入中国大陆标准11位手机号的SHA256值注释：MD5手机号加密方式，使用中国大陆11位手机号进行MD5加密，加密后取32位小写值。SHA256手机号加密方式，使用中国大陆11位手机号进行SHA256加密，加密后取64位小写值。 */
    AccountId: string;
    /** 账号绑定的MD5或SHA256加密的手机号（该字段已不推荐使用）。注释：支持标准中国大陆11位手机号MD5加密后位的32位小写字符串； 支持标准中国大陆11位手机号SHA256加密后位的64位小写字符串。 */
    MobilePhone?: string;
    /** 用户设备号（该字段已不推荐使用）。 */
    DeviceId?: string;
  }

  /** 黑白名单数据列表信息 */
  interface OuntputDescribeDataListInfo {
    /** 数量 */
    Count?: number;
    /** 列表 */
    List?: OutputDescribeDataListFront[] | null;
  }

  /** 创建黑白名单出参 */
  interface OutputCreateNameListFront {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 空数组 */
    Value?: string[] | null;
  }

  /** 删除黑白名单出参 */
  interface OutputDeleteNameListData {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 空数组 */
    Value?: string[] | null;
  }

  /** 删除黑白名单出参 */
  interface OutputDeleteNameListFront {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 空数组 */
    Value?: string[] | null;
  }

  /** 黑白名单数据信息 */
  interface OutputDescribeDataListFront {
    /** 名单数据ID */
    NameListDataId?: number;
    /** 名单ID */
    NameListId?: number;
    /** 名单数据内容 */
    DataContent?: string;
    /** 数据来源，固定传2（手工录入） */
    DataSource?: number;
    /** 名单数据开始时间 */
    StartTime?: string;
    /** 名单数据结束时间 */
    EndTime?: string;
    /** 名单数据状态 [1 启用 2 停用] */
    Status?: number;
    /** 名单数据描述 */
    Remark?: string;
    /** 名单数据创建时间 */
    CreateTime?: string;
    /** 名单数据更新时间 */
    UpdateTime?: string;
    /** 加密名单数据内容 */
    EncryptDataContent?: string;
  }

  /** 查询黑白名单数据出参 */
  interface OutputDescribeDataListFrontData {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 黑白名单数据信息 */
    Value?: OuntputDescribeDataListInfo;
  }

  /** 黑白名单详情出参 */
  interface OutputDescribeNameListDetail {
    /** 名单ID */
    NameListId?: number;
    /** 名单名称 */
    ListName?: string;
    /** 名单类型 [1 黑名单 2 白名单] */
    ListType?: number;
    /** 数据类型[1 手机号 2 qqOpenId 3 2echatOpenId 4 ip 6 idfa 7 imei] */
    DataType?: number;
    /** 场景Code */
    SceneCode?: string;
    /** 名单列表状态 [1 启用 2 停用] */
    Status?: number;
    /** 描述 */
    Remark?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 更新时间 */
    UpdateTime?: string;
    /** 加密类型 [0 无需加密，1 MD5加密，2 SHA256加密] */
    EncryptionType?: number;
  }

  /** 查询列表详情出参 */
  interface OutputDescribeNameListDetailFront {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 列表详情信息 */
    Value?: OutputDescribeNameListDetail | null;
  }

  /** 黑白名单信息 */
  interface OutputDescribeNameListFrontFix {
    /** 名单ID */
    NameListId?: number;
    /** 名单名称 */
    ListName?: string;
    /** 名单类型 [1 黑名单 2 白名单] */
    ListType?: number;
    /** 数据类型[1 手机号 2 qqOpenId 3 2echatOpenId 4 ip 6 idfa 7 imei] */
    DataType?: number;
    /** 记录状态 [1 启用 2 停用] */
    Status?: number;
    /** 描述 */
    Remark?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 更新时间 */
    UpdateTime?: string;
    /** 有效数据/数据总数 */
    EffectCount?: string;
    /** 加密类型[0 无需加密 1 MD5加密 2 SHA256加密] */
    EncryptionType?: number;
    /** 场景Code，all_scene代表全部场景 */
    SceneCode?: string;
  }

  /** 查询黑白名单出参 */
  interface OutputDescribeNameListFrontFixListData {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误。 */
    Code?: number;
    /** 错误信息。 */
    Message?: string;
    /** 黑白名单列表信息。 */
    Value?: OutputDescribeNameListInfo;
  }

  /** 黑白名单信息 */
  interface OutputDescribeNameListInfo {
    /** 总数 */
    Count?: number;
    /** 列表 */
    List?: OutputDescribeNameListFrontFix[] | null;
  }

  /** 预付费 后付费 总数显示接口出参 */
  interface OutputDescribeUserUsageCnt {
    /** 当前付费模式，0 后付费 1 预付费 */
    PayMode?: number;
    /** 后付费本月使用量 */
    AfterPayModeThisMonthUsedCnt?: number;
    /** 创建时间 */
    CreateTime?: string;
    /** 超出时间 */
    ExpireTime?: string;
    /** 后付费上月使用量 */
    AfterPayModeLastMonthUsedCnt?: number;
    /** 预付费总量 */
    BeforePayModeTotalUsedCnt?: number;
    /** 预付费剩余用量 */
    BeforePayModeRemainUsedCnt?: number;
  }

  /** RCE控制台预付费和后付费次数展示出参数据 */
  interface OutputDescribeUserUsageCntData {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 4300：未开通服务 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 业务详情 */
    Value?: OutputDescribeUserUsageCnt | null;
  }

  /** 添加黑白名单数据出参 */
  interface OutputImportNameListDataFront {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 空数组 */
    Value?: string[] | null;
  }

  /** 全栈式风控引擎出参 */
  interface OutputManageMarketingRisk {
    /** 错误码，0 表示成功，非0表示失败错误码。0：成功1002：参数错误4300：未开通服务4301：后端未创建对应产品6000：系统内部错误 */
    Code?: number;
    /** UTF-8编码，出错消息。 */
    Message?: string;
    /** 业务详情。 */
    Value?: OutputManageMarketingRiskValue | null;
    /** 控制台显示的req_id。 */
    UUid?: string;
  }

  /** 全栈式风控引擎出参值 */
  interface OutputManageMarketingRiskValue {
    /** 账号ID：对应输入参数。当AccountType为1时，对应QQ的OpenId；当AccountType为2时，对应微信的OpenId/UnionId；当AccountType为10004时，对应手机号的MD5值；当AccountType为10005时，对应手机号的SHA256值。 */
    UserId?: string;
    /** 操作时间戳，单位秒（对应输入参数）。 */
    PostTime?: number;
    /** 业务预留参数（暂无实际业务含义， 无需关注返回值） */
    AssociateAccount?: string;
    /** 操作来源的外网IP（对应输入参数）。 */
    UserIp?: string;
    /** 风险等级pass：无恶意review：低风险，需要人工审核reject：高风险，建议拦截 */
    RiskLevel?: string;
    /** 风险类型，可能同时命中多个风险类型1: 账号信用低。11: 疑似低活跃账号。2: 垃圾账号。21: 疑似小号。22: 疑似违规账号。3: 无效账号。4: 黑名单。5: 白名单。101: 批量操作。1011: 疑似 IP 属性聚集。1012: 疑似设备属性聚集。102: 自动机。103: 恶意行为。104: 登录态无效。201: 环境风险。2011: 疑似非常用IP。2012: 疑似 IP 异常。205: 非公网有效 IP。 */
    RiskType?: number[];
    /** 设备指纹ID，如果集成了设备指纹，并传入了正确的DeviceToken和Platform，该字段正常输出；如果DeviceToken异常（校验不通过），则会在RiskType中返回"-1"标签，ConstId字段为空；如果没有集成设备指纹ConstId字段默认为空。 */
    ConstId?: string;
    /** 风险扩展数据。 */
    RiskInformation?: string;
  }

  /** 修改黑白名单出参 */
  interface OutputModifyNameFront {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 空数组 */
    Value?: string[] | null;
  }

  /** 修改黑白名单数据出参 */
  interface OutputModifyNameListFront {
    /** 错误码，0 表示成功，非0表示失败错误码。 0：成功 1002：参数错误 4300：未开通服务 6000：系统内部错误 */
    Code?: number;
    /** 错误信息 */
    Message?: string;
    /** 空数组 */
    Value?: string[] | null;
  }

  /** QQ账号信息。 */
  interface QQAccountInfo {
    /** QQ的OpenId。 */
    QQOpenId: string;
    /** QQ分配给网站或应用的AppId，用来唯一标识网站或应用。 */
    AppIdUser: string;
    /** 用于标识QQ用户登录后所关联业务自身的账号ID。 */
    AssociateAccount?: string;
    /** 账号绑定的MD5或SHA256加密的手机号。注释：支持标准中国大陆11位手机号MD5加密后位的32位小写字符串； 支持标准中国大陆11位手机号SHA256加密后位的64位小写字符串。 */
    MobilePhone?: string;
    /** 用户设备号（已不推荐使用）。 */
    DeviceId?: string;
  }

  /** 网赚防刷相关参数 */
  interface SponsorInfo {
    /** 助力场景建议填写：活动发起人微信OpenId。 */
    SponsorOpenId?: string;
    /** 助力场景建议填写：发起人设备号 */
    SponsorDeviceNumber?: string;
    /** 助力场景建议填写：发起人的MD5手机号 */
    SponsorPhone?: string;
    /** 助力场景建议填写：发起人IP */
    SponsorIp?: string;
    /** 助力场景建议填写：活动链接 */
    CampaignUrl?: string;
  }

  /** 微信账号信息。 */
  interface WeChatAccountInfo {
    /** 微信的OpenId/UnionId。 */
    WeChatOpenId: string;
    /** 微信开放账号类型：1：微信公众号/微信第三方登录。2：微信小程序。 */
    WeChatSubType?: number;
    /** 随机串。如果WeChatSubType是2，该字段必填。Token签名随机数，建议16个字符。 */
    RandStr?: string;
    /** 如果WeChatSubType 是1，填入授权的 access_token（注意：不是普通 access_token，详情请参阅官方说明文档。获取网页版本的 access_token 时，scope 字段必需填写snsapi_userinfo如果WeChatSubType是2，填入以session_key 为密钥签名随机数RandStr（hmac_sha256签名算法）得到的字符串。 */
    WeChatAccessToken?: string;
    /** 用于标识微信用户登录后所关联业务自身的账号ID。 */
    AssociateAccount?: string;
    /** 账号绑定的MD5或SHA256加密的手机号。注释：支持标准中国大陆11位手机号MD5加密后位的32位小写字符串； 支持标准中国大陆11位手机号SHA256加密后位的64位小写字符串。 */
    MobilePhone?: string;
    /** 用户设备号（已不推荐使用）。 */
    DeviceId?: string;
  }

  interface CreateNameListRequest {
    /** 业务入参 */
    BusinessSecurityData: InputCreateNameListFront;
  }

  interface CreateNameListResponse {
    /** 业务出参 */
    Data?: OutputCreateNameListFront;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteNameListDataRequest {
    /** 业务入参 */
    BusinessSecurityData?: InputDeleteNameListData;
  }

  interface DeleteNameListDataResponse {
    /** 业务出参 */
    Data?: OutputDeleteNameListData;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteNameListRequest {
    /** 业务入参 */
    BusinessSecurityData: InputDeleteNameListFront;
  }

  interface DeleteNameListResponse {
    /** 业务出参 */
    Data?: OutputDeleteNameListFront;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNameListDataListRequest {
    /** 业务入参 */
    BusinessSecurityData: InputDescribeDataListFront;
  }

  interface DescribeNameListDataListResponse {
    /** 业务出参 */
    Data?: OutputDescribeDataListFrontData;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNameListDetailRequest {
    /** 业务入参 */
    BusinessSecurityData?: InputDescribeNameListDetail;
  }

  interface DescribeNameListDetailResponse {
    /** 黑白名单列表详情业务出参 */
    Data?: OutputDescribeNameListDetailFront;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNameListRequest {
    /** 业务入参 */
    BusinessSecurityData: InputDescribeNameListFront;
  }

  interface DescribeNameListResponse {
    /** 业务出参 */
    Data?: OutputDescribeNameListFrontFixListData;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeUserUsageCntRequest {
  }

  interface DescribeUserUsageCntResponse {
    /** 业务出参 */
    Data?: OutputDescribeUserUsageCntData;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ImportNameListDataRequest {
    /** 业务入参 */
    BusinessSecurityData: InputImportNameListDataFront;
  }

  interface ImportNameListDataResponse {
    /** 业务出参 */
    Data?: OutputImportNameListDataFront;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ManageMarketingRiskRequest {
    /** 业务入参 */
    BusinessSecurityData?: InputManageMarketingRisk;
    /** 业务入参 */
    BusinessCryptoData?: InputCryptoManageMarketingRisk;
  }

  interface ManageMarketingRiskResponse {
    /** 业务出参 */
    Data?: OutputManageMarketingRisk;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyNameListDataRequest {
    /** 业务入参 */
    BusinessSecurityData: InputModifyNameListDataFrontListData;
  }

  interface ModifyNameListDataResponse {
    /** 业务出参 */
    Data?: OutputModifyNameListFront;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyNameListRequest {
    /** 业务入参 */
    BusinessSecurityData: InputModifyNameFront;
  }

  interface ModifyNameListResponse {
    /** 业务出参 */
    Data?: OutputModifyNameFront;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Rce 风险识别 RCE} */
declare interface Rce {
  (): Versions;
  /** 设备风险评估-高级版 {@link AssessDeviceRiskPremiumProRequest} {@link AssessDeviceRiskPremiumProResponse} */
  AssessDeviceRiskPremiumPro(data: AssessDeviceRiskPremiumProRequest, config?: AxiosRequestConfig): AxiosPromise<AssessDeviceRiskPremiumProResponse>;
  /** 设备风险评估-基础版 {@link AssessDeviceRiskProRequest} {@link AssessDeviceRiskProResponse} */
  AssessDeviceRiskPro(data: AssessDeviceRiskProRequest, config?: AxiosRequestConfig): AxiosPromise<AssessDeviceRiskProResponse>;
  /** 环境风险评估 {@link AssessEnvironmentRiskRequest} {@link AssessEnvironmentRiskResponse} */
  AssessEnvironmentRisk(data: AssessEnvironmentRiskRequest, config?: AxiosRequestConfig): AxiosPromise<AssessEnvironmentRiskResponse>;
  /** 事件风险评估 {@link AssessRiskRequest} {@link AssessRiskResponse} */
  AssessRisk(data: AssessRiskRequest, config?: AxiosRequestConfig): AxiosPromise<AssessRiskResponse>;
  /** 事件信息上报 {@link ReportEventRequest} {@link ReportEventResponse} */
  ReportEvent(data: ReportEventRequest, config?: AxiosRequestConfig): AxiosPromise<ReportEventResponse>;
  /** IP风险画像 {@link V20250425.ManageIPPortraitRiskRequest} {@link V20250425.ManageIPPortraitRiskResponse} */
  ManageIPPortraitRisk(data: V20250425.ManageIPPortraitRiskRequest, config: AxiosRequestConfig & V20250425.VersionHeader): AxiosPromise<V20250425.ManageIPPortraitRiskResponse>;
  /** 创建黑白名单 {@link V20201103.CreateNameListRequest} {@link V20201103.CreateNameListResponse} */
  CreateNameList(data: V20201103.CreateNameListRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.CreateNameListResponse>;
  /** 删除黑白名单 {@link V20201103.DeleteNameListRequest} {@link V20201103.DeleteNameListResponse} */
  DeleteNameList(data: V20201103.DeleteNameListRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.DeleteNameListResponse>;
  /** 删除黑白名单数据 {@link V20201103.DeleteNameListDataRequest} {@link V20201103.DeleteNameListDataResponse} */
  DeleteNameListData(data: V20201103.DeleteNameListDataRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.DeleteNameListDataResponse>;
  /** 查询黑白名单 {@link V20201103.DescribeNameListRequest} {@link V20201103.DescribeNameListResponse} */
  DescribeNameList(data: V20201103.DescribeNameListRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.DescribeNameListResponse>;
  /** 查询黑白名单数据 {@link V20201103.DescribeNameListDataListRequest} {@link V20201103.DescribeNameListDataListResponse} */
  DescribeNameListDataList(data: V20201103.DescribeNameListDataListRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.DescribeNameListDataListResponse>;
  /** 查询黑白名单详情 {@link V20201103.DescribeNameListDetailRequest} {@link V20201103.DescribeNameListDetailResponse} */
  DescribeNameListDetail(data: V20201103.DescribeNameListDetailRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.DescribeNameListDetailResponse>;
  /** 客户资源用量查询 {@link V20201103.DescribeUserUsageCntRequest} {@link V20201103.DescribeUserUsageCntResponse} */
  DescribeUserUsageCnt(data: V20201103.DescribeUserUsageCntRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.DescribeUserUsageCntResponse>;
  /** 添加黑白名单数据 {@link V20201103.ImportNameListDataRequest} {@link V20201103.ImportNameListDataResponse} */
  ImportNameListData(data: V20201103.ImportNameListDataRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.ImportNameListDataResponse>;
  /** 通用业务欺诈保护 {@link V20201103.ManageMarketingRiskRequest} {@link V20201103.ManageMarketingRiskResponse} */
  ManageMarketingRisk(data: V20201103.ManageMarketingRiskRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.ManageMarketingRiskResponse>;
  /** 修改黑白名单 {@link V20201103.ModifyNameListRequest} {@link V20201103.ModifyNameListResponse} */
  ModifyNameList(data: V20201103.ModifyNameListRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.ModifyNameListResponse>;
  /** 修改黑白名单数据 {@link V20201103.ModifyNameListDataRequest} {@link V20201103.ModifyNameListDataResponse} */
  ModifyNameListData(data: V20201103.ModifyNameListDataRequest, config: AxiosRequestConfig & V20201103.VersionHeader): AxiosPromise<V20201103.ModifyNameListDataResponse>;
}

export declare type Versions = ["2026-01-30", "2025-04-25", "2020-11-03"];

export default Rce;
