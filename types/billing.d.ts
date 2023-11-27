/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 按交易类型汇总消费详情 */
declare interface ActionSummaryOverviewItem {
  /** 交易类型编码 */
  ActionType: string;
  /** 交易类型：如包年包月新购、包年包月续费、按量计费扣费等类型 */
  ActionTypeName: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio: string;
  /** 优惠后总价 */
  RealTotalCost: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string | null;
  /** 账单月份，格式2019-08 */
  BillMonth: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string;
}

/** 适用商品信息 */
declare interface ApplicableProducts {
  /** 适用商品名称，值为“全产品通用”或商品名称组成的string，以","分割。 */
  GoodsName: string;
  /** postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。如GoodsName为多个商品名以","分割组成的string，而PayMode为"*"，表示每一件商品的模式都为"*"。 */
  PayMode: string;
}

/** 账单明细数据对象 */
declare interface BillDetail {
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName?: string;
  /** 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1 */
  ProductCodeName?: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName?: string;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName?: string;
  /** 地域：资源所属地域，如华南地区（广州） */
  RegionName?: string;
  /** 可用区：资源所属可用区，如广州三区 */
  ZoneName?: string;
  /** 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID */
  ResourceId?: string;
  /** 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空 */
  ResourceName?: string;
  /** 交易类型，如包年包月新购、包年包月续费、按量计费扣费等类型 */
  ActionTypeName?: string;
  /** 订单ID：包年包月计费模式下订购的订单号 */
  OrderId?: string;
  /** 交易ID：结算扣费单号 */
  BillId?: string;
  /** 扣费时间：结算扣费时间 */
  PayTime?: string;
  /** 开始使用时间：产品服务开始使用时间 */
  FeeBeginTime?: string;
  /** 结束使用时间：产品服务结束使用时间 */
  FeeEndTime?: string;
  /** 组件列表 */
  ComponentSet?: BillDetailComponent[];
  /** 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
  /** 使用者UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ） */
  OperateUin?: string;
  /** 标签信息 */
  Tags?: BillTagInfo[] | null;
  /** 产品编码 */
  BusinessCode?: string | null;
  /** 子产品编码 */
  ProductCode?: string | null;
  /** 交易类型编码 */
  ActionType?: string | null;
  /** 地域ID */
  RegionId?: string | null;
  /** 项目ID */
  ProjectId?: number;
  /** 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息 */
  PriceInfo?: string[] | null;
  /** 关联交易单据ID：和本笔交易关联单据 ID，如，冲销订单，记录原订单、重结订单，退费单记录对应的原购买订单号 */
  AssociatedOrder?: BillDetailAssociatedOrder | null;
  /** 计算说明：特殊交易类型计费结算的详细计算说明，如退费及变配 */
  Formula?: string | null;
  /** 计费规则：各产品详细的计费规则官网说明链接 */
  FormulaUrl?: string | null;
}

/** 明细账单关联单据信息 */
declare interface BillDetailAssociatedOrder {
  /** 新购订单 */
  PrepayPurchase?: string | null;
  /** 续费订单 */
  PrepayRenew?: string | null;
  /** 升配订单 */
  PrepayModifyUp?: string | null;
  /** 冲销订单 */
  ReverseOrder?: string | null;
  /** 优惠调整后订单 */
  NewOrder?: string | null;
  /** 优惠调整前订单 */
  Original?: string | null;
}

/** 账单明细组件对象 */
declare interface BillDetailComponent {
  /** 组件类型：用户购买的产品或服务对应的组件大类，例如：云服务器 CVM 的组件：CPU、内存等 */
  ComponentCodeName?: string;
  /** 组件名称：用户购买的产品或服务，所包含的具体组件 */
  ItemCodeName?: string;
  /** 组件刊例价：组件的官网原始单价（如果客户享受一口价/合同价则默认不展示） */
  SinglePrice?: string;
  /** 组件指定价（已废弃） */
  SpecifiedPrice?: string;
  /** 组件价格单位：组件价格的单位，单位构成：元/用量单位/时长单位 */
  PriceUnit?: string;
  /** 组件用量：该组件实际结算用量，组件用量 = 组件原始用量 - 抵扣用量（含资源包 */
  UsedAmount?: string;
  /** 组件用量单位：组件用量对应的单位 */
  UsedAmountUnit?: string;
  /** 原始用量/时长：组件被资源包抵扣前的原始用量/时长 */
  RealTotalMeasure?: string | null;
  /** 抵扣用量/时长（含资源包）：组件被资源包抵扣的用量/时长 */
  DeductedMeasure?: string | null;
  /** 使用时长：资源使用的时长 */
  TimeSpan?: string;
  /** 时长单位：资源使用时长的单位 */
  TimeUnitName?: string;
  /** 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如果客户享受一口价/合同价则默认不展示，退费类场景也默认不展示） */
  Cost?: string;
  /** 折扣率：本资源享受的折扣率（如果客户享受一口价/合同价则默认不展示，退费场景也默认不展示） */
  Discount?: string;
  /** 优惠类型 */
  ReduceType?: string;
  /** 优惠后总价：优惠后总价=（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率 */
  RealCost?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string | null;
  /** 组件类型编码 */
  ItemCode?: string | null;
  /** 组件名称编码 */
  ComponentCode?: string | null;
  /** 组件单价：组件的折后单价，组件单价 = 刊例价 * 折扣 */
  ContractPrice?: string | null;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。正常的实例展示默认为不展示 */
  InstanceType?: string | null;
  /** 预留实例抵扣的使用时长：本产品或服务使用预留实例抵扣的使用时长 */
  RiTimeSpan?: string | null;
  /** 预留实例抵扣组件原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  OriginalCostWithRI?: string | null;
  /** 节省计划抵扣率：节省计划可用余额额度范围内，节省计划对于此组件打的折扣率 */
  SPDeductionRate?: string | null;
  /** 节省计划抵扣金额（已废弃） */
  SPDeduction?: string | null;
  /** 节省计划抵扣组件原价：节省计划抵扣原价=节省计划包抵扣金额/节省计划抵扣率 */
  OriginalCostWithSP?: string | null;
  /** 混合折扣率：综合各类折扣抵扣信息后的最终折扣率，混合折扣率 = 优惠后总价 / 组件原价 */
  BlendedDiscount?: string | null;
  /** 配置描述：资源配置规格信息 */
  ComponentConfig?: BillDetailComponentConfig[] | null;
}

/** 明细账单配置描述结构 */
declare interface BillDetailComponentConfig {
  /** 配置描述名称 */
  Name?: string | null;
  /** 配置描述值 */
  Value?: string | null;
}

/** 经销账单资源汇总数据对象 */
declare interface BillDistributionResourceSummary {
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName?: string;
  /** 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1 */
  ProductCodeName?: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName?: string;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName?: string;
  /** 地域：资源所属地域，如华南地区（广州） */
  RegionName?: string;
  /** 可用区：资源所属可用区，如广州三区 */
  ZoneName?: string;
  /** 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID */
  ResourceId?: string;
  /** 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空 */
  ResourceName?: string;
  /** 交易类型：如包年包月新购、包年包月续费、按量计费扣费等类型 */
  ActionTypeName?: string;
  /** 订单ID：包年包月计费模式下订购的订单号 */
  OrderId?: string;
  /** 扣费时间：结算扣费时间 */
  PayTime?: string;
  /** 开始使用时间：产品服务开始使用时间 */
  FeeBeginTime?: string;
  /** 结束使用时间：产品服务结束使用时间 */
  FeeEndTime?: string;
  /** 配置描述：该资源下的计费项名称和用量合并展示，仅在资源账单体现 */
  ConfigDesc?: string;
  /** 扩展字段1：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField1?: string;
  /** 扩展字段2：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField2?: string;
  /** 原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如果客户享受一口价/合同价则默认不展示，退费类场景也默认不展示） */
  TotalCost?: string;
  /** 折扣率：本资源享受的折扣率（如果客户享受一口价/合同价则默认不展示，退费场景也默认不展示） */
  Discount?: string;
  /** 优惠类型 */
  ReduceType?: string;
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string | null;
  /** 扩展字段3：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField3?: string;
  /** 扩展字段4：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField4?: string;
  /** 扩展字段5：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField5?: string;
  /** 标签信息 */
  Tags?: BillTagInfo[] | null;
  /** 使用者UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ） */
  OperateUin?: string;
  /** 产品编码 */
  BusinessCode?: string;
  /** 子产品编码 */
  ProductCode?: string;
  /** 地域ID */
  RegionId?: number;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。正常的实例展示默认为不展示 */
  InstanceType?: string;
  /** 预留实例抵扣组件原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  OriginalCostWithRI?: string;
  /** 节省计划抵扣金额（已废弃） */
  SPDeduction?: string;
  /** 节省计划抵扣组件原价：节省计划抵扣原价=节省计划包抵扣金额/节省计划抵扣率 */
  OriginalCostWithSP?: string;
}

/** 账单资源汇总数据对象 */
declare interface BillResourceSummary {
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName: string;
  /** 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1 */
  ProductCodeName: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName: string;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName: string;
  /** 地域：资源所属地域，如华南地区（广州） */
  RegionName: string;
  /** 可用区：资源所属可用区，如广州三区 */
  ZoneName: string;
  /** 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID */
  ResourceId: string;
  /** 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空 */
  ResourceName: string;
  /** 交易类型：如包年包月新购、包年包月续费、按量计费扣费等类型 */
  ActionTypeName: string;
  /** 订单ID：包年包月计费模式下订购的订单号 */
  OrderId: string;
  /** 扣费时间：结算扣费时间 */
  PayTime: string;
  /** 开始使用时间：产品服务开始使用时间 */
  FeeBeginTime: string;
  /** 结束使用时间：产品服务结束使用时间 */
  FeeEndTime: string;
  /** 配置描述：该资源下的计费项名称和用量合并展示，仅在资源账单体现 */
  ConfigDesc: string;
  /** 扩展字段1：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField1: string;
  /** 扩展字段2：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField2: string;
  /** 原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如果客户享受一口价/合同价则默认不展示，退费类场景也默认不展示） */
  TotalCost: string;
  /** 折扣率：本资源享受的折扣率（如果客户享受一口价/合同价则默认不展示，退费场景也默认不展示） */
  Discount: string;
  /** 优惠类型 */
  ReduceType: string;
  /** 优惠后总价 */
  RealTotalCost: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string | null;
  /** 扩展字段3：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField3: string;
  /** 扩展字段4：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField4: string;
  /** 扩展字段5：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField5: string;
  /** 标签信息 */
  Tags: BillTagInfo[] | null;
  /** 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin: string;
  /** 使用者UIN：实际使用资源的账号 ID */
  OwnerUin: string;
  /** 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ） */
  OperateUin: string;
  /** 产品编码 */
  BusinessCode: string;
  /** 子产品编码 */
  ProductCode: string;
  /** 地域ID */
  RegionId: number;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。正常的实例展示默认为不展示 */
  InstanceType: string;
  /** 预留实例抵扣组件原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  OriginalCostWithRI: string;
  /** 节省计划抵扣金额（已废弃） */
  SPDeduction?: string;
  /** 节省计划抵扣组件原价：节省计划抵扣原价=节省计划包抵扣金额/节省计划抵扣率 */
  OriginalCostWithSP: string;
}

/** 账单 Tag 信息 */
declare interface BillTagInfo {
  /** 分账标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 收支明细的流水信息 */
declare interface BillTransactionInfo {
  /** 收支类型：deduct 扣费, recharge 充值, return 退费， block 冻结, unblock 解冻 */
  ActionType: string;
  /** 流水金额，单位（分）；正数表示入账，负数表示出账 */
  Amount: number;
  /** 可用余额，单位（分）；正数表示入账，负数表示出账 */
  Balance: number;
  /** 流水号，如20190131020000236005203583326401 */
  BillId: string;
  /** 描述信息 */
  OperationInfo: string;
  /** 操作时间"2019-01-31 23:35:10.000" */
  OperationTime: string;
  /** 现金账户余额，单位（分） */
  Cash: number;
  /** 赠送金余额，单位（分） */
  Incentive: number;
  /** 冻结余额，单位（分） */
  Freezing: number;
  /** 交易渠道 */
  PayChannel: string;
  /** 扣费模式：trade 包年包月(预付费)，hourh 按量-小时结，hourd 按量-日结，hourm 按量-月结，month 按量-月结 */
  DeductMode: string;
}

/** 产品汇总信息 */
declare interface BusinessSummaryInfo {
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName?: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost?: string | null;
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string | null;
}

/** 按产品汇总产品详情 */
declare interface BusinessSummaryOverviewItem {
  /** 产品编码 */
  BusinessCode: string | null;
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio: string;
  /** 优惠后总价 */
  RealTotalCost: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount: string;
  /** 账单月份，格式2019-08 */
  BillMonth: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string;
}

/** 按产品汇总总费用 */
declare interface BusinessSummaryTotal {
  /** 优惠后总价 */
  RealTotalCost: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string;
}

/** 产品过滤条件 */
declare interface ConditionBusiness {
  /** 产品名称代码 */
  BusinessCode: string;
  /** 产品名称 */
  BusinessCodeName: string;
}

/** 付费模式过滤条件 */
declare interface ConditionPayMode {
  /** 付费模式 */
  PayMode: string;
  /** 付费模式名称 */
  PayModeName: string;
}

/** 项目过滤条件 */
declare interface ConditionProject {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
}

/** 地域过滤条件 */
declare interface ConditionRegion {
  /** 地域ID */
  RegionId: string;
  /** 地域名称 */
  RegionName: string;
}

/** 账单筛选条件对象 */
declare interface Conditions {
  /** 只支持6和12两个值 */
  TimeRange?: number;
  /** 产品名称代码 */
  BusinessCode?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 地域ID */
  RegionId?: number;
  /** 付费模式，可选prePay和postPay */
  PayMode?: string;
  /** 资源关键字 */
  ResourceKeyword?: string;
  /** 产品名称代码 */
  BusinessCodes?: string[];
  /** 子产品名称代码 */
  ProductCodes?: string[];
  /** 地域ID */
  RegionIds?: number[];
  /** 项目ID */
  ProjectIds?: number[];
  /** 付费模式，可选prePay和postPay */
  PayModes?: string[];
  /** 交易类型 */
  ActionTypes?: string[];
  /** 是否隐藏0元流水 */
  HideFreeCost?: number;
  /** 排序规则，可选desc和asc */
  OrderByCost?: string;
  /** 交易ID */
  BillIds?: string[];
  /** 组件编码 */
  ComponentCodes?: string[];
  /** 文件ID */
  FileIds?: string[];
  /** 文件类型 */
  FileTypes?: string[];
  /** 状态 */
  Status?: number[];
}

/** 消耗按产品汇总详情 */
declare interface ConsumptionBusinessSummaryDataItem {
  /** 产品名称代码 */
  BusinessCode: string;
  /** 产品名称 */
  BusinessCodeName: string;
  /** 折后总价 */
  RealTotalCost: string;
  /** 费用趋势 */
  Trend: ConsumptionSummaryTrend;
  /** 现金 */
  CashPayAmount?: string | null;
  /** 赠送金 */
  IncentivePayAmount?: string | null;
  /** 代金券 */
  VoucherPayAmount?: string | null;
  /** 分成金 */
  TransferPayAmount?: string | null;
}

/** 消耗按项目汇总详情 */
declare interface ConsumptionProjectSummaryDataItem {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 折后总价 */
  RealTotalCost: string;
  /** 趋势 */
  Trend: ConsumptionSummaryTrend;
  /** 产品消耗详情 */
  Business: ConsumptionBusinessSummaryDataItem[];
  /** 现金 */
  CashPayAmount?: string | null;
  /** 赠送金 */
  IncentivePayAmount?: string | null;
  /** 代金券 */
  VoucherPayAmount?: string | null;
  /** 分成金 */
  TransferPayAmount?: string | null;
}

/** 消耗按地域汇总详情 */
declare interface ConsumptionRegionSummaryDataItem {
  /** 地域ID */
  RegionId: string;
  /** 地域名称 */
  RegionName: string;
  /** 折后总价 */
  RealTotalCost: string;
  /** 趋势 */
  Trend: ConsumptionSummaryTrend;
  /** 产品消费详情 */
  Business: ConsumptionBusinessSummaryDataItem[];
}

/** 消耗按资源汇总过滤条件 */
declare interface ConsumptionResourceSummaryConditionValue {
  /** 产品列表 */
  Business: ConditionBusiness[];
  /** 项目列表 */
  Project: ConditionProject[];
  /** 地域列表 */
  Region: ConditionRegion[];
  /** 付费模式列表 */
  PayMode: ConditionPayMode[];
}

/** 消耗按资源汇总详情 */
declare interface ConsumptionResourceSummaryDataItem {
  /** 资源ID */
  ResourceId: string;
  /** 资源名称 */
  ResourceName: string;
  /** 折后总价 */
  RealTotalCost: string;
  /** 现金花费 */
  CashPayAmount: string;
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 地域ID */
  RegionId: string;
  /** 地域名称 */
  RegionName: string;
  /** 付费模式 */
  PayMode: string;
  /** 付费模式名称 */
  PayModeName: string;
  /** 产品名称代码 */
  BusinessCode: string;
  /** 产品名称 */
  BusinessCodeName: string;
  /** 消耗类型 */
  ConsumptionTypeName: string;
  /** 折前价 */
  RealCost?: string | null;
  /** 费用起始时间 */
  FeeBeginTime?: string | null;
  /** 费用结束时间 */
  FeeEndTime?: string | null;
  /** 天数 */
  DayDiff?: string | null;
  /** 每日消耗 */
  DailyTotalCost?: string | null;
  /** 订单号 */
  OrderId?: string | null;
  /** 代金券 */
  VoucherPayAmount?: string | null;
  /** 赠送金 */
  IncentivePayAmount?: string | null;
  /** 分成金 */
  TransferPayAmount?: string | null;
}

/** 消耗汇总详情 */
declare interface ConsumptionSummaryTotal {
  /** 折后总价 */
  RealTotalCost: string;
}

/** 消耗费用趋势 */
declare interface ConsumptionSummaryTrend {
  /** 趋势类型，upward上升/downward下降/none无 */
  Type: string;
  /** 趋势值，Type为none是该字段值为null */
  Value: string | null;
}

/** cos产品用量明细返回数据结构 */
declare interface CosDetailSets {
  /** 存储桶名称 */
  BucketName: string;
  /** 用量开始时间 */
  DosageBeginTime: string;
  /** 用量结束时间 */
  DosageEndTime: string;
  /** 子产品名称 */
  SubProductCodeName: string;
  /** 计费项名称 */
  BillingItemCodeName: string;
  /** 用量 */
  DosageValue: string;
  /** 单位 */
  Unit: string;
}

/** 消耗组件明细 */
declare interface CostComponentSet {
  /** 组件类型名称 */
  ComponentCodeName: string;
  /** 组件名称 */
  ItemCodeName: string;
  /** 刊例价 */
  SinglePrice: string;
  /** 刊例价单位 */
  PriceUnit: string;
  /** 用量 */
  UsedAmount: string;
  /** 用量单位 */
  UsedAmountUnit: string;
  /** 原价 */
  Cost: string;
  /** 折扣 */
  Discount: string;
  /** 折后价 */
  RealCost: string;
  /** 代金券支付金额 */
  VoucherPayAmount: string;
  /** 现金支付金额 */
  CashPayAmount: string;
  /** 赠送金支付金额 */
  IncentivePayAmount: string;
}

/** 消耗明细数据类型 */
declare interface CostDetail {
  /** 支付者uin */
  PayerUin: string;
  /** 产品名称 */
  BusinessCodeName: string;
  /** 子产品名称 */
  ProductCodeName: string;
  /** 计费模式名称 */
  PayModeName: string;
  /** 项目名称 */
  ProjectName: string;
  /** 区域名称 */
  RegionName: string;
  /** 地区名称 */
  ZoneName: string;
  /** 资源id */
  ResourceId: string;
  /** 资源名称 */
  ResourceName: string;
  /** 类型名称 */
  ActionTypeName: string | null;
  /** 订单id */
  OrderId: string;
  /** 交易id */
  BillId: string;
  /** 费用开始时间 */
  FeeBeginTime: string;
  /** 费用结束时间 */
  FeeEndTime: string;
  /** 组件明细 */
  ComponentSet: CostComponentSet[];
  /** 子产品名称代码 */
  ProductCode: string;
}

/** 订单数据对象 */
declare interface Deal {
  /** 订单号 */
  OrderId: string;
  /** 订单的状态 1：未支付 2：已支付3：发货中 4：已发货 5：发货失败 6：已退款 7：已关单 8：订单过期 9：订单已失效 10：产品已失效 11：代付拒绝 12：支付中 */
  Status: number;
  /** 支付者 */
  Payer: string;
  /** 创建时间 */
  CreateTime: string;
  /** 创建人 */
  Creator: string;
  /** 实际支付金额（分） */
  RealTotalCost: number;
  /** 代金券抵扣金额（分） */
  VoucherDecline: number;
  /** 项目ID */
  ProjectId: number;
  /** 产品分类ID */
  GoodsCategoryId: number;
  /** 产品详情 */
  ProductInfo: ProductInfo[];
  /** 时长 */
  TimeSpan: number;
  /** 时间单位 */
  TimeUnit: string;
  /** 货币单位 */
  Currency: string;
  /** 折扣率 */
  Policy: number;
  /** 单价（分） */
  Price: number;
  /** 原价（分） */
  TotalCost: number;
  /** 产品编码 */
  ProductCode: string | null;
  /** 子产品编码 */
  SubProductCode: string;
  /** 大订单号 */
  BigDealId: string;
  /** 退费公式 */
  Formula: string | null;
  /** 退费涉及订单信息 */
  RefReturnDeals: string | null;
  /** 付费模式：prePay 预付费 postPay后付费 riPay预留实例 */
  PayMode: string;
  /** 交易类型modifyNetworkMode 调整带宽模式modifyNetworkSize 调整带宽大小refund 退款downgrade 降配upgrade 升配renew 续费purchase 购买preMoveOut 包年包月迁出资源preMoveIn 包年包月迁入资源preToPost 预付费转后付费postMoveOut 按量计费迁出资源postMoveIn 按量计费迁入资源 */
  Action: string | null;
  /** 产品编码中文名称 */
  ProductName: string | null;
  /** 子产品编码中文名称 */
  SubProductName: string | null;
  /** 订单对应的资源id, 查询参数Limit超过200，将返回null */
  ResourceId: string[] | null;
}

/** 由时间和值组成的数据结构 */
declare interface DetailPoint {
  /** 时间 */
  Time: string;
  /** 值 */
  Value: string;
}

/** 由域名和使用明细组成的数据结构 */
declare interface DetailSet {
  /** 域名 */
  Domain: string;
  /** 使用数据明细 */
  DetailPoints: DetailPoint[];
  /** 实例ID */
  InstanceID: string | null;
}

/** 经销账单明细数据对象 */
declare interface DistributionBillDetail {
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName?: string;
  /** 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1 */
  ProductCodeName?: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName?: string;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName?: string;
  /** 地域：资源所属地域，如华南地区（广州） */
  RegionName?: string;
  /** 可用区：资源所属可用区，如广州三区 */
  ZoneName?: string;
  /** 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID */
  ResourceId?: string;
  /** 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空 */
  ResourceName?: string;
  /** 交易类型，如包年包月新购、包年包月续费、按量计费扣费等类型 */
  ActionTypeName?: string;
  /** 订单ID：包年包月计费模式下订购的订单号 */
  OrderId?: string;
  /** 交易ID：结算扣费单号 */
  BillId?: string;
  /** 扣费时间：结算扣费时间 */
  PayTime?: string;
  /** 开始使用时间：产品服务开始使用时间 */
  FeeBeginTime?: string;
  /** 结束使用时间：产品服务结束使用时间 */
  FeeEndTime?: string;
  /** 组件列表 */
  ComponentSet?: BillDetailComponent[];
  /** 使用者UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ） */
  OperateUin?: string;
  /** 标签信息 */
  Tags?: BillTagInfo[] | null;
  /** 产品编码 */
  BusinessCode?: string | null;
  /** 子产品编码 */
  ProductCode?: string | null;
  /** 交易类型编码 */
  ActionType?: string | null;
  /** 地域ID */
  RegionId?: string | null;
  /** 项目ID */
  ProjectId?: number;
  /** 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息 */
  PriceInfo?: string[] | null;
  /** 关联交易单据ID：和本笔交易关联单据 ID，如，冲销订单，记录原订单、重结订单，退费单记录对应的原购买订单号 */
  AssociatedOrder?: BillDetailAssociatedOrder | null;
  /** 计算说明：特殊交易类型计费结算的详细计算说明，如退费及变配 */
  Formula?: string | null;
  /** 计费规则：各产品详细的计费规则官网说明链接 */
  FormulaUrl?: string | null;
}

/** 不适用商品信息 */
declare interface ExcludedProducts {
  /** 不适用商品名称 */
  GoodsName: string;
  /** postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。 */
  PayMode: string;
}

/** 按计费模式汇总消费详情 */
declare interface PayModeSummaryOverviewItem {
  /** 计费模式编码 */
  PayMode: string;
  /** 计费模式：区分为包年包月和按量计费 */
  PayModeName: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio: string;
  /** 优惠后总价 */
  RealTotalCost: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string;
  /** 按交易类型汇总消费详情 */
  Detail: ActionSummaryOverviewItem[];
}

/** 商品详细信息 */
declare interface ProductInfo {
  /** 商品详情名称标识 */
  Name: string;
  /** 商品详情 */
  Value: string;
}

/** 按项目汇总消费详情 */
declare interface ProjectSummaryOverviewItem {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio: string;
  /** 优惠后总价 */
  RealTotalCost: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount: string;
  /** 账单月份，格式2019-08 */
  BillMonth: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string;
}

/** 按地域汇总消费详情 */
declare interface RegionSummaryOverviewItem {
  /** 地域ID */
  RegionId: string | null;
  /** 地域名称：资源所属地域，例如华南地区（广州） */
  RegionName: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio: string;
  /** 优惠后总价 */
  RealTotalCost: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount: string;
  /** 账单月份，格式2019-08 */
  BillMonth: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string;
}

/** 节省计划覆盖率数据 */
declare interface SavingPlanCoverageDetail {
  /** 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID */
  ResourceId?: string;
  /** 地域ID */
  RegionId?: number | null;
  /** 产品编码 */
  ProductCode?: string | null;
  /** 子产品编码 */
  SubProductCode?: string | null;
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
}

/** 节省计划覆盖率聚合数据 */
declare interface SavingPlanCoverageRate {
  /** 聚合时间维度，按天聚合格式为yyyy-MM-dd，按月聚合格式为yyyy-MM */
  DatePoint?: string;
  /** 覆盖率结果，取值[0, 100] */
  Rate?: number;
}

/** 节省计划总览明细数据 */
declare interface SavingPlanOverviewDetail {
  /** 节省计划类型 */
  SpType?: string;
  /** 支付类型 */
  PayType?: number;
  /** 支付金额（单位：元） */
  PayAmount?: string;
  /** 开始时间 yyyy-mm-dd HH:mm:ss格式 */
  StartTime?: string;
  /** 结束时间 yyyy-mm-dd HH:mm:ss格式 */
  EndTime?: string;
  /** 购买时间 yyyy-mm-dd HH:mm:ss格式 */
  BuyTime?: string;
  /** 状态 */
  Status?: number;
  /** 累计节省金额（单位：元） */
  SavingAmount?: string;
  /** 地域 */
  Region?: string[];
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

/** 账单多维度汇总消费详情 */
declare interface SummaryDetail {
  /** 账单维度编码 */
  GroupKey?: string | null;
  /** 账单维度值 */
  GroupValue?: string | null;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost?: string;
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string | null;
  /** 产品汇总信息 */
  Business?: BusinessSummaryInfo[] | null;
}

/** 总数 */
declare interface SummaryTotal {
  /** 优惠后总价 */
  RealTotalCost: string | null;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string | null;
}

/** 标签信息 */
declare interface TagDataInfo {
  /** 分账标签键 */
  TagKey?: string;
  /** 标签类型，0普通标签，1分账标签 */
  Status?: number;
  /** 设置分账标签时间，普通标签不返回 */
  UpdateTime?: string | null;
}

/** 按标签汇总消费详情 */
declare interface TagSummaryOverviewItem {
  /** 标签值 */
  TagValue: string | null;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio: string | null;
  /** 优惠后总价 */
  RealTotalCost: string | null;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount: string | null;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount: string | null;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount: string | null;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount: string | null;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost: string | null;
}

/** 购买商品信息 */
declare interface UsageDetails {
  /** 商品名 */
  ProductName: string | null;
  /** 商品细节 */
  SubProductName: string | null;
}

/** 使用记录 */
declare interface UsageRecords {
  /** 使用金额（微分） */
  UsedAmount: number;
  /** 使用时间 */
  UsedTime: string;
  /** 使用记录细节 */
  UsageDetails: UsageDetails[] | null;
}

/** 代金券相关信息 */
declare interface VoucherInfos {
  /** 代金券拥有者 */
  OwnerUin: string;
  /** 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue */
  Status: string;
  /** 代金券面额（微分） */
  NominalValue: number;
  /** 剩余金额（微分） */
  Balance: number;
  /** 代金券id */
  VoucherId: string;
  /** postPay后付费/prePay预付费/riPay预留实例/空字符串或者'*'表示全部模式 */
  PayMode: string;
  /** 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景 */
  PayScene: string;
  /** 有效期生效时间 */
  BeginTime: string;
  /** 有效期截止时间 */
  EndTime: string;
  /** 适用商品信息 */
  ApplicableProducts: ApplicableProducts | null;
  /** 不适用商品信息 */
  ExcludedProducts: ExcludedProducts[] | null;
}

declare interface CreateAllocationTagRequest {
  /** 用户分账标签键 */
  TagKey: string[];
}

declare interface CreateAllocationTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface DeleteAllocationTagRequest {
  /** 用户分账标签键 */
  TagKey: string[];
}

declare interface DeleteAllocationTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountBalanceRequest {
}

declare interface DescribeAccountBalanceResponse {
  /** 接口做过变更,为兼容老接口,本字段与RealBalance相同,为当前真实可用余额,单位 分 */
  Balance: number;
  /** 查询的用户Uin */
  Uin: number;
  /** 当前真实可用余额,单位 分 */
  RealBalance: number;
  /** 现金账户余额,单位 分 */
  CashAccountBalance: number;
  /** 收益转入账户余额,单位 分 */
  IncomeIntoAccountBalance: number;
  /** 赠送账户余额,单位 分 */
  PresentAccountBalance: number;
  /** 冻结金额,单位 分 */
  FreezeAmount: number;
  /** 欠费金额,单位 分 */
  OweAmount: number;
  /** 是否允许欠费消费 */
  IsAllowArrears: boolean;
  /** 是否限制信用额度 */
  IsCreditLimited: boolean;
  /** 信用额度 */
  CreditAmount: number;
  /** 可用信用额度 */
  CreditBalance: number;
  /** 真实可用信用额度 */
  RealCreditBalance: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillDetailForOrganizationRequest {
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推 */
  Offset: number;
  /** 数量，最大值为100 */
  Limit: number;
  /** 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。 */
  PeriodType?: string;
  /** 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。最多可拉取近18个月内的数据。 */
  Month?: string;
  /** 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取18个月内的数据。 */
  BeginTime?: string;
  /** 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取近18个月内的数据。 */
  EndTime?: string;
  /** 是否需要访问列表的总记录数，用于前端分页1-表示需要， 0-表示不需要 */
  NeedRecordNum?: number;
  /** 付费模式 prePay(表示包年包月)/postPay(表示按时按量) */
  PayMode?: string;
  /** 查询指定资源信息 */
  ResourceId?: string;
  /** 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：包年包月新购包年包月续费包年包月配置变更包年包月退款 按量计费扣费 线下项目扣费 线下产品扣费 调账扣费 调账补偿 按量计费小时结 按量计费日结 按量计费月结 竞价实例小时结 线下项目调账补偿 线下产品调账补偿 优惠扣费 优惠补偿 按量计费迁入资源 按量计费迁出资源 包年包月迁入资源 包年包月迁出资源 预付费用 小时费用 预留实例退款 按量计费冲正 包年包月转按量 保底扣款 节省计划小时费用 */
  ActionType?: string;
  /** 项目ID:资源所属项目ID */
  ProjectId?: number;
  /** 产品名称代码备注：如需获取当月使用过的BusinessCode，请调用API：获取产品汇总费用分布 */
  BusinessCode?: string;
  /** 上一次请求返回的上下文信息，翻页查询Month>=2023-05的月份的数据可加快查询速度，数据量10万级别以上的用户建议使用，查询速度可提升2~10倍 */
  Context?: string;
}

declare interface DescribeBillDetailForOrganizationResponse {
  /** 详情列表 */
  DetailSet?: DistributionBillDetail[];
  /** 总记录数，24小时缓存一次，可能比实际总记录数少 */
  Total?: number | null;
  /** 本次请求的上下文信息，可用于下一次请求的请求参数中，加快查询速度 */
  Context?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillDetailRequest {
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推 */
  Offset: number;
  /** 数量，最大值为100 */
  Limit: number;
  /** 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。 */
  PeriodType?: string;
  /** 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。最多可拉取近18个月内的数据。 */
  Month?: string;
  /** 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取18个月内的数据。 */
  BeginTime?: string;
  /** 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取近18个月内的数据。 */
  EndTime?: string;
  /** 是否需要访问列表的总记录数，用于前端分页1-表示需要， 0-表示不需要 */
  NeedRecordNum?: number;
  /** 已废弃参数，未开放 */
  ProductCode?: string;
  /** 付费模式 prePay(表示包年包月)/postPay(表示按时按量) */
  PayMode?: string;
  /** 查询指定资源信息 */
  ResourceId?: string;
  /** 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：包年包月新购包年包月续费包年包月配置变更包年包月退款 按量计费扣费 线下项目扣费 线下产品扣费 调账扣费 调账补偿 按量计费小时结 按量计费日结 按量计费月结 竞价实例小时结 线下项目调账补偿 线下产品调账补偿 优惠扣费 优惠补偿 按量计费迁入资源 按量计费迁出资源 包年包月迁入资源 包年包月迁出资源 预付费用 小时费用 预留实例退款 按量计费冲正 包年包月转按量 保底扣款 节省计划小时费用 */
  ActionType?: string;
  /** 项目ID:资源所属项目ID */
  ProjectId?: number;
  /** 产品名称代码备注：如需获取当月使用过的BusinessCode，请调用API：获取产品汇总费用分布 */
  BusinessCode?: string;
  /** 上一次请求返回的上下文信息，翻页查询Month>=2023-05的月份的数据可加快查询速度，数据量10万级别以上的用户建议使用，查询速度可提升2~10倍 */
  Context?: string;
  /** 支付者的账号 ID（账号 ID 是用户在腾讯云的唯一账号标识），默认查询本账号账单，如集团管理账号需查询成员账号自付的账单，该字段需入参成员账号UIN */
  PayerUin?: string;
}

declare interface DescribeBillDetailResponse {
  /** 详情列表 */
  DetailSet?: BillDetail[];
  /** 总记录数，24小时缓存一次，可能比实际总记录数少 */
  Total?: number | null;
  /** 本次请求的上下文信息，可用于下一次请求的请求参数中，加快查询速度 */
  Context?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillDownloadUrlRequest {
  /** 账单类型，枚举值billOverview=L0-PDF账单billSummary=L1-汇总账单	billResource=L2-资源账单	billDetail=L3-明细账单	billPack=账单包 */
  FileType: string;
  /** 账单月份支持的最早开始月份为2021-01L0-PDF&账单包不支持当月下载，当月账单请在次月1号19:00出账后下载 */
  Month: string;
  /** 下载的账号 ID列表，默认查询本账号账单，如集团管理账号需下载成员账号自付的账单，该字段需入参成员账号UIN */
  ChildUin?: string[];
}

declare interface DescribeBillDownloadUrlResponse {
  /** 账单文件是否准备就绪，0文件生成中，1文件已生成 */
  Ready?: number;
  /** 账单文件下载链接，有效时长为一小时 */
  DownloadUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillListRequest {
  /** 查询范围的起始时间（包含）时间格式 yyyy-MM-dd HH:mm:ss 开始时间和结束时间差值小于等于六个月 */
  StartTime: string;
  /** 查询范围的结束时间（包含）时间格式 yyyy-MM-dd HH:mm:ss ，开始时间和结束时间差值小于等于六个月 */
  EndTime: string;
  /** 翻页偏移量，初始值为0 */
  Offset: number;
  /** 每页的限制数量 */
  Limit: number;
  /** 交易类型： all所有交易类型，recharge充值，return退款，unblock解冻，agentin资金转入，advanced垫付，cash提现，deduct扣费，block冻结，agentout资金转出，repay垫付回款，repayment还款(仅国际信用账户)，adj_refund调增(仅国际信用账户)，adj_deduct调减(仅国际信用账户) */
  PayType?: string[];
  /** 扣费模式，当所选的交易类型为扣费deduct时： all所有扣费类型;trade预付费支付;hour_h按量小时结;hour_d按量日结;hour_m按量月结;decompensate调账扣费;other第三方扣费;panshi 线下项目扣费;offline 线下产品扣费;当所选的交易类型为扣费recharge时： online 在线充值;bank-enterprice 银企直连;offline 线下充值;transfer 分成充值当所选的交易类型为扣费cash时： online 线上提现;offline 线下提现;panshi 赠送金清零当所选的交易类型为扣费advanced时： advanced 垫付充值当所选的交易类型为扣费repay时： panshi 垫付回款当所选的交易类型为扣费block时： other 第三方冻结;hour 按量冻结;month按月冻结当所选的交易类型为扣费return时： compensate 调账补偿;trade 预付费退款当所选的交易类型为扣费unblock时：other 第三方解冻;hour 按量解冻;month 按月解冻 */
  SubPayType?: string[];
  /** 是否返回0元交易金额的交易项，取值：0-不返回，1-返回。不传该参数则不返回 */
  WithZeroAmount?: number;
}

declare interface DescribeBillListResponse {
  /** 收支明细列表 */
  TransactionList?: BillTransactionInfo[];
  /** 总条数 */
  Total?: number;
  /** 退费总额，单位（分） */
  ReturnAmount?: number;
  /** 充值总额，单位（分） */
  RechargeAmount?: number;
  /** 冻结总额，单位（分） */
  BlockAmount?: number;
  /** 解冻总额，单位（分） */
  UnblockAmount?: number;
  /** 扣费总额，单位（分） */
  DeductAmount?: number;
  /** 资金转入总额，单位（分） */
  AgentInAmount?: number;
  /** 垫付充值总额，单位（分） */
  AdvanceRechargeAmount?: number;
  /** 提现扣减总额，单位（分） */
  WithdrawAmount?: number;
  /** 资金转出总额，单位（分） */
  AgentOutAmount?: number;
  /** 还垫付总额，单位（分） */
  AdvancePayAmount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillResourceSummaryForOrganizationRequest {
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推 */
  Offset: number;
  /** 数量，最大值为1000 */
  Limit: number;
  /** 月份，格式为yyyy-mm。不能早于开通账单2.0的月份 */
  Month: string;
  /** 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。 */
  PeriodType?: string;
  /** 是否需要访问列表的总记录数，用于前端分页1-表示需要， 0-表示不需要 */
  NeedRecordNum?: number;
  /** 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：包年包月新购包年包月续费包年包月配置变更包年包月退款 按量计费扣费 线下项目扣费 线下产品扣费 调账扣费 调账补偿 按量计费小时结 按量计费日结 按量计费月结 竞价实例小时结 线下项目调账补偿 线下产品调账补偿 优惠扣费 优惠补偿 按量计费迁入资源 按量计费迁出资源 包年包月迁入资源 包年包月迁出资源 预付费用 小时费用 预留实例退款 按量计费冲正 包年包月转按量 保底扣款 节省计划小时费用 */
  ActionType?: string;
  /** 查询指定资源信息 */
  ResourceId?: string;
  /** 付费模式 prePay/postPay */
  PayMode?: string;
  /** 产品名称代码备注：如需获取当月使用过的BusinessCode，请调用API：获取产品汇总费用分布 */
  BusinessCode?: string;
  /** 分账标签键，用户自定义（支持2021-01以后账单查询） */
  TagKey?: string;
  /** 分账标签值，该参数为空表示该标签键下未设置标签值的记录（支持2021-01以后账单查询） */
  TagValue?: string;
}

declare interface DescribeBillResourceSummaryForOrganizationResponse {
  /** 资源汇总列表 */
  ResourceSummarySet?: BillDistributionResourceSummary[];
  /** 资源汇总列表总数，入参NeedRecordNum为0时不返回 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillResourceSummaryRequest {
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推 */
  Offset: number;
  /** 数量，最大值为1000 */
  Limit: number;
  /** 月份，格式为yyyy-mm。不能早于开通账单2.0的月份 */
  Month: string;
  /** 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。 */
  PeriodType?: string;
  /** 是否需要访问列表的总记录数，用于前端分页1-表示需要， 0-表示不需要 */
  NeedRecordNum?: number;
  /** 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：包年包月新购包年包月续费包年包月配置变更包年包月退款 按量计费扣费 线下项目扣费 线下产品扣费 调账扣费 调账补偿 按量计费小时结 按量计费日结 按量计费月结 竞价实例小时结 线下项目调账补偿 线下产品调账补偿 优惠扣费 优惠补偿 按量计费迁入资源 按量计费迁出资源 包年包月迁入资源 包年包月迁出资源 预付费用 小时费用 预留实例退款 按量计费冲正 包年包月转按量 保底扣款 节省计划小时费用 */
  ActionType?: string;
  /** 查询指定资源信息 */
  ResourceId?: string;
  /** 付费模式 prePay/postPay */
  PayMode?: string;
  /** 产品名称代码备注：如需获取当月使用过的BusinessCode，请调用API：获取产品汇总费用分布 */
  BusinessCode?: string;
  /** 支付者的账号 ID（账号 ID 是用户在腾讯云的唯一账号标识），默认查询本账号账单，如集团管理账号需查询成员账号自付的账单，该字段需入参成员账号UIN */
  PayerUin?: string;
  /** 分账标签键，用户自定义（支持2021-01以后账单查询） */
  TagKey?: string;
  /** 分账标签值，该参数为空表示该标签键下未设置标签值的记录（支持2021-01以后账单查询） */
  TagValue?: string;
}

declare interface DescribeBillResourceSummaryResponse {
  /** 资源汇总列表 */
  ResourceSummarySet?: BillResourceSummary[];
  /** 资源汇总列表总数，入参NeedRecordNum为0时不返回 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillSummaryByPayModeRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
}

declare interface DescribeBillSummaryByPayModeResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 各付费模式花费分布详情 */
  SummaryOverview?: PayModeSummaryOverviewItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillSummaryByProductRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
  /** 款项类别，与L0账单上的汇总类别对应。此参数自账单3.0（即2021-05）之后开始生效。枚举值：consume-消费refund-退款adjustment-调账 */
  PayType?: string;
}

declare interface DescribeBillSummaryByProductResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 总花费详情 */
  SummaryTotal?: BusinessSummaryTotal | null;
  /** 各产品花费分布 */
  SummaryOverview?: BusinessSummaryOverviewItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillSummaryByProjectRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
}

declare interface DescribeBillSummaryByProjectResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 各项目花费分布详情 */
  SummaryOverview?: ProjectSummaryOverviewItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillSummaryByRegionRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
}

declare interface DescribeBillSummaryByRegionResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 各地域花费分布详情 */
  SummaryOverview?: RegionSummaryOverviewItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillSummaryByTagRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 分账标签键，用户自定义 */
  TagKey: string;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
  /** 分账标签值 */
  TagValue?: string;
}

declare interface DescribeBillSummaryByTagResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 各标签值花费分布详情 */
  SummaryOverview?: TagSummaryOverviewItem[] | null;
  /** 总数 */
  SummaryTotal?: SummaryTotal | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillSummaryForOrganizationRequest {
  /** 账单月份，格式为2023-04 */
  Month: string;
  /** 账单维度类型，枚举值如下：business、project、region、payMode、tag */
  GroupType: string;
  /** 标签键，GroupType=tag获取标签维度账单时传 */
  TagKey?: string[];
}

declare interface DescribeBillSummaryForOrganizationResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 账单多维度汇总消费详情 */
  SummaryDetail?: SummaryDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillSummaryRequest {
  /** 账单月份，格式为2023-04 */
  Month: string;
  /** 账单维度类型，枚举值如下：business、project、region、payMode、tag */
  GroupType: string;
  /** 标签键，GroupType=tag获取标签维度账单时传 */
  TagKey?: string[];
}

declare interface DescribeBillSummaryResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 账单多维度汇总消费详情 */
  SummaryDetail?: SummaryDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostDetailRequest {
  /** 数量，最大值为100 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。 */
  BeginTime?: string;
  /** 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。 */
  EndTime?: string;
  /** 是否需要访问列表的总记录数，用于前端分页1-表示需要， 0-表示不需要 */
  NeedRecordNum?: number;
  /** 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通成本分析的月份，最多可拉取24个月内的数据。 */
  Month?: string;
  /** 查询指定产品信息（暂时未开放获取） */
  ProductCode?: string;
  /** 付费模式 prePay/postPay */
  PayMode?: string;
  /** 查询指定资源信息 */
  ResourceId?: string;
}

declare interface DescribeCostDetailResponse {
  /** 消耗明细 */
  DetailSet?: CostDetail[] | null;
  /** 记录数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostSummaryByProductRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 每次获取数据量，最大值为100 */
  Limit: number;
  /** 偏移量,默认从0开始 */
  Offset: number;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
  /** 是否需要返回记录数量，0不需要，1需要，默认不需要 */
  NeedRecordNum?: number;
}

declare interface DescribeCostSummaryByProductResponse {
  /** 数据是否准备好，0未准备好，1准备好 */
  Ready?: number;
  /** 消耗详情 */
  Total?: ConsumptionSummaryTotal;
  /** 消耗按产品汇总详情 */
  Data?: ConsumptionBusinessSummaryDataItem[] | null;
  /** 记录数量，NeedRecordNum为0是返回null */
  RecordNum?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostSummaryByProjectRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 每次获取数据量，最大值为100 */
  Limit: number;
  /** 偏移量,默认从0开始 */
  Offset: number;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
  /** 是否需要返回记录数量，0不需要，1需要，默认不需要 */
  NeedRecordNum?: number;
}

declare interface DescribeCostSummaryByProjectResponse {
  /** 数据是否准备好，0未准备好，1准备好 */
  Ready?: number;
  /** 消耗详情 */
  Total?: ConsumptionSummaryTotal;
  /** 消耗按业务汇总详情 */
  Data?: ConsumptionProjectSummaryDataItem[];
  /** 记录数量，NeedRecordNum为0是返回null */
  RecordNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostSummaryByRegionRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 每次获取数据量，最大值为100 */
  Limit: number;
  /** 偏移量,默认从0开始 */
  Offset: number;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
  /** 是否需要返回记录数量，0不需要，1需要，默认不需要 */
  NeedRecordNum?: number;
}

declare interface DescribeCostSummaryByRegionResponse {
  /** 数据是否准备好，0未准备好，1准备好 */
  Ready?: number;
  /** 消耗详情 */
  Total?: ConsumptionSummaryTotal;
  /** 消耗按地域汇总详情 */
  Data?: ConsumptionRegionSummaryDataItem[];
  /** 记录数量，NeedRecordNum为0是返回null */
  RecordNum?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostSummaryByResourceRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。 */
  EndTime: string;
  /** 每次获取数据量，最大值为100 */
  Limit: number;
  /** 偏移量,默认从0开始 */
  Offset: number;
  /** 查询账单数据的用户UIN */
  PayerUin?: string;
  /** 是否需要返回记录数量，0不需要，1需要，默认不需要 */
  NeedRecordNum?: number;
  /** 是否需要返回过滤条件，0不需要，1需要，默认不需要 */
  NeedConditionValue?: number;
  /** 过滤条件，只支持ResourceKeyword(资源关键字，支持资源id及资源名称模糊查询)，ProjectIds（项目id），RegionIds(地域id)，PayModes(付费模式，可选prePay和postPay)，HideFreeCost（是否隐藏0元流水，可选0和1），OrderByCost（按费用排序规则，可选desc和asc） */
  Conditions?: Conditions;
}

declare interface DescribeCostSummaryByResourceResponse {
  /** 数据是否准备好，0未准备好，1准备好 */
  Ready?: number;
  /** 消耗详情 */
  Total?: ConsumptionSummaryTotal | null;
  /** 过滤条件 */
  ConditionValue?: ConsumptionResourceSummaryConditionValue | null;
  /** 记录数量 */
  RecordNum?: number | null;
  /** 资源消耗详情 */
  Data?: ConsumptionResourceSummaryDataItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDealsByCondRequest {
  /** 开始时间 2016-01-01 00:00:00 */
  StartTime: string;
  /** 结束时间 2016-02-01 00:00:00 建议跨度不超过3个月 */
  EndTime: string;
  /** 一页多少条数据，默认是20条，最大不超过1000 */
  Limit: number;
  /** 第多少页，从0开始，默认是0 */
  Offset?: number;
  /** 订单状态,默认为4（成功的订单）订单的状态1：未支付2：已支付3：发货中4：已发货5：发货失败6：已退款7：已关单8：订单过期9：订单已失效10：产品已失效11：代付拒绝12：支付中 */
  Status?: number;
  /** 订单号 */
  OrderId?: string;
  /** 大订单号 */
  BigDealId?: string;
  /** 资源id */
  ResourceId?: string;
}

declare interface DescribeDealsByCondResponse {
  /** 订单列表 */
  Deals?: Deal[];
  /** 订单总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDosageCosDetailByDateRequest {
  /** 查询用量开始时间，例如：2020-09-01 */
  StartDate: string;
  /** 查询用量结束时间，例如：2020-09-30（与开始时间同月，不支持跨月查询） */
  EndDate: string;
  /** COS 存储桶名称，可通过Get Service 接口是用来获取请求者名下的所有存储空间列表（Bucket list）https://cloud.tencent.com/document/product/436/8291 */
  BucketName: string;
}

declare interface DescribeDosageCosDetailByDateResponse {
  /** 用量数组 */
  DetailSets?: CosDetailSets[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDosageDetailByDateRequest {
  /** 查询账单开始日期，如 2019-01-01 */
  StartDate: string;
  /** 查询账单结束日期，如 2019-01-01， 时间跨度不超过7天 */
  EndDate: string;
  /** 互动直播：10194 互动直播-核心机房 :10195 互动直播-边缘机房cdn业务：102383：CDN静态加速流量(国内)102384：CDN静态加速带宽(国内)102385：CDN静态加速流量(海外)102386：CDN静态加速带宽(海外)100967：弹性公网IP-按流量计费101065：公网负载均衡-按流量计费视频直播10226 视频直播流量(国内)10227 视频直播带宽(国内)100763 视频直播流量(海外)100762 视频直播宽带(海外) */
  ProductCode: string;
  /** 查询域名 例如 www.qq.com非CDN业务查询时传入空字符串，返回的值为空 */
  Domain: string;
  /** 1、如果为空，则返回EIP或CLB所有实例的明细；2、如果传入实例名，则返回该实例明细 */
  InstanceID?: string;
}

declare interface DescribeDosageDetailByDateResponse {
  /** 计量单位 */
  Unit: string | null;
  /** 用量数组 */
  DetailSets: DetailSet[] | null;
  /** 错误码 */
  RetCode: number | null;
  /** 错误信息 */
  RetMsg: string | null;
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
  /** 节省计划使用率数据 */
  Usages?: SavingPlanUsageDetail[];
  /** 查询命中的节省计划总览明细数据总条数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagListRequest {
  /** 数量，最大值为1000 */
  Limit: number;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推 */
  Offset: number;
  /** 分账标签键，用作模糊搜索 */
  TagKey?: string;
  /** 标签类型，枚举值：0普通标签，1分账标签，用作筛选，不传获取全部标签键 */
  Status?: number;
  /** 排序方式，枚举值：asc排升序，desc排降序 */
  OrderType?: string;
}

declare interface DescribeTagListResponse {
  /** 总记录数 */
  RecordNum?: number;
  /** 标签信息 */
  Data?: TagDataInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVoucherInfoRequest {
  /** 一页多少条数据，默认是20条，最大不超过1000 */
  Limit: number;
  /** 第多少页，默认是1 */
  Offset: number;
  /** 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue */
  Status?: string;
  /** 代金券id */
  VoucherId?: string;
  /** 代金券订单id */
  CodeId?: string;
  /** 商品码 */
  ProductCode?: string;
  /** 活动id */
  ActivityId?: string;
  /** 代金券名称 */
  VoucherName?: string;
  /** 发放开始时间,例：2021-01-01 */
  TimeFrom?: string;
  /** 发放结束时间，例：2021-01-01 */
  TimeTo?: string;
  /** 指定排序字段：BeginTime开始时间、EndTime到期时间、CreateTime创建时间 */
  SortField?: string;
  /** 指定升序降序：desc、asc */
  SortOrder?: string;
  /** 付费模式，postPay后付费/prePay预付费/riPay预留实例/""或者"*"表示全部模式，如果payMode为""或"*"，那么productCode与subProductCode必须传空 */
  PayMode?: string;
  /** 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景 */
  PayScene?: string;
  /** 操作人，默认就是用户uin */
  Operator?: string;
  /** 代金券主类型 has_price 为有价现金券 no_price 为无价代金券 */
  VoucherMainType?: string;
  /** 代金券副类型 discount 为折扣券 deduct 为抵扣券 */
  VoucherSubType?: string;
}

declare interface DescribeVoucherInfoResponse {
  /** 券总数 */
  TotalCount?: number;
  /** 总余额（微分） */
  TotalBalance?: number;
  /** 代金券相关信息 */
  VoucherInfos?: VoucherInfos[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVoucherUsageDetailsRequest {
  /** 一页多少条数据，默认是20条，最大不超过1000 */
  Limit: number;
  /** 第多少页，默认是1 */
  Offset: number;
  /** 代金券id */
  VoucherId: string;
  /** 操作人，默认就是用户uin */
  Operator?: string;
}

declare interface DescribeVoucherUsageDetailsResponse {
  /** 券总数 */
  TotalCount?: number;
  /** 总已用金额（微分） */
  TotalUsedAmount?: number;
  /** 代金券使用记录细节 */
  UsageRecords?: UsageRecords[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PayDealsRequest {
  /** 需要支付的一个或者多个子订单号，与BigDealIds字段两者必须且仅传一个参数 */
  OrderIds?: string[];
  /** 是否自动使用代金券,1:是,0否,默认0 */
  AutoVoucher?: number;
  /** 代金券ID列表,目前仅支持指定一张代金券 */
  VoucherIds?: string[];
  /** 需要支付的一个或者多个大订单号，与OrderIds字段两者必须且仅传一个参数 */
  BigDealIds?: string[];
}

declare interface PayDealsResponse {
  /** 此次操作支付成功的子订单号数组 */
  OrderIds?: string[];
  /** 此次操作支付成功的资源Id数组 */
  ResourceIds?: string[];
  /** 此次操作支付成功的大订单号数组 */
  BigDealIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Billing 费用中心} */
declare interface Billing {
  (): Versions;
  /** 批量设置分账标签 {@link CreateAllocationTagRequest} {@link CreateAllocationTagResponse} */
  CreateAllocationTag(data: CreateAllocationTagRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAllocationTagResponse>;
  /** 创建节省计划订单 {@link CreateSavingPlanOrderRequest} {@link CreateSavingPlanOrderResponse} */
  CreateSavingPlanOrder(data: CreateSavingPlanOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSavingPlanOrderResponse>;
  /** 批量取消设置分账标签 {@link DeleteAllocationTagRequest} {@link DeleteAllocationTagResponse} */
  DeleteAllocationTag(data: DeleteAllocationTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAllocationTagResponse>;
  /** 获取账户余额 {@link DescribeAccountBalanceRequest} {@link DescribeAccountBalanceResponse} */
  DescribeAccountBalance(data?: DescribeAccountBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountBalanceResponse>;
  /** 获取账单明细数据 {@link DescribeBillDetailRequest} {@link DescribeBillDetailResponse} */
  DescribeBillDetail(data: DescribeBillDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillDetailResponse>;
  /** 成员账号获取管理账号代付账单（费用明细） {@link DescribeBillDetailForOrganizationRequest} {@link DescribeBillDetailForOrganizationResponse} */
  DescribeBillDetailForOrganization(data: DescribeBillDetailForOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillDetailForOrganizationResponse>;
  /** 获取账单文件下载链接 {@link DescribeBillDownloadUrlRequest} {@link DescribeBillDownloadUrlResponse} */
  DescribeBillDownloadUrl(data: DescribeBillDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillDownloadUrlResponse>;
  /** 获取收支明细列表 {@link DescribeBillListRequest} {@link DescribeBillListResponse} */
  DescribeBillList(data: DescribeBillListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillListResponse>;
  /** 获取账单资源汇总数据 {@link DescribeBillResourceSummaryRequest} {@link DescribeBillResourceSummaryResponse} */
  DescribeBillResourceSummary(data: DescribeBillResourceSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillResourceSummaryResponse>;
  /** 成员账号获取管理账号代付账单（按资源汇总） {@link DescribeBillResourceSummaryForOrganizationRequest} {@link DescribeBillResourceSummaryForOrganizationResponse} */
  DescribeBillResourceSummaryForOrganization(data: DescribeBillResourceSummaryForOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillResourceSummaryForOrganizationResponse>;
  /** 获取账单多维度汇总费用 {@link DescribeBillSummaryRequest} {@link DescribeBillSummaryResponse} */
  DescribeBillSummary(data: DescribeBillSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillSummaryResponse>;
  /** 获取按计费模式汇总费用分布 {@link DescribeBillSummaryByPayModeRequest} {@link DescribeBillSummaryByPayModeResponse} */
  DescribeBillSummaryByPayMode(data: DescribeBillSummaryByPayModeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillSummaryByPayModeResponse>;
  /** 获取产品汇总费用分布 {@link DescribeBillSummaryByProductRequest} {@link DescribeBillSummaryByProductResponse} */
  DescribeBillSummaryByProduct(data: DescribeBillSummaryByProductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillSummaryByProductResponse>;
  /** 获取按项目汇总费用分布 {@link DescribeBillSummaryByProjectRequest} {@link DescribeBillSummaryByProjectResponse} */
  DescribeBillSummaryByProject(data: DescribeBillSummaryByProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillSummaryByProjectResponse>;
  /** 获取按地域汇总费用分布 {@link DescribeBillSummaryByRegionRequest} {@link DescribeBillSummaryByRegionResponse} */
  DescribeBillSummaryByRegion(data: DescribeBillSummaryByRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillSummaryByRegionResponse>;
  /** 获取按标签汇总费用分布 {@link DescribeBillSummaryByTagRequest} {@link DescribeBillSummaryByTagResponse} */
  DescribeBillSummaryByTag(data: DescribeBillSummaryByTagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillSummaryByTagResponse>;
  /** 成员账号获取管理账号代付账单（按多维度汇总） {@link DescribeBillSummaryForOrganizationRequest} {@link DescribeBillSummaryForOrganizationResponse} */
  DescribeBillSummaryForOrganization(data: DescribeBillSummaryForOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillSummaryForOrganizationResponse>;
  /** 查询消耗明细 {@link DescribeCostDetailRequest} {@link DescribeCostDetailResponse} */
  DescribeCostDetail(data: DescribeCostDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostDetailResponse>;
  /** 获取按产品汇总消耗详情 {@link DescribeCostSummaryByProductRequest} {@link DescribeCostSummaryByProductResponse} */
  DescribeCostSummaryByProduct(data: DescribeCostSummaryByProductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByProductResponse>;
  /** 获取按项目汇总消耗详情 {@link DescribeCostSummaryByProjectRequest} {@link DescribeCostSummaryByProjectResponse} */
  DescribeCostSummaryByProject(data: DescribeCostSummaryByProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByProjectResponse>;
  /** 获取按地域汇总消耗详情 {@link DescribeCostSummaryByRegionRequest} {@link DescribeCostSummaryByRegionResponse} */
  DescribeCostSummaryByRegion(data: DescribeCostSummaryByRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByRegionResponse>;
  /** 获取按资源汇总消耗详情 {@link DescribeCostSummaryByResourceRequest} {@link DescribeCostSummaryByResourceResponse} */
  DescribeCostSummaryByResource(data: DescribeCostSummaryByResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByResourceResponse>;
  /** 查询订单数据 {@link DescribeDealsByCondRequest} {@link DescribeDealsByCondResponse} */
  DescribeDealsByCond(data: DescribeDealsByCondRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDealsByCondResponse>;
  /** 获取COS产品用量明细 {@link DescribeDosageCosDetailByDateRequest} {@link DescribeDosageCosDetailByDateResponse} */
  DescribeDosageCosDetailByDate(data: DescribeDosageCosDetailByDateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDosageCosDetailByDateResponse>;
  /** 按日期获取产品用量明细 {@link DescribeDosageDetailByDateRequest} {@link DescribeDosageDetailByDateResponse} */
  DescribeDosageDetailByDate(data: DescribeDosageDetailByDateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDosageDetailByDateResponse>;
  /** 查询节省计划覆盖率数据 {@link DescribeSavingPlanCoverageRequest} {@link DescribeSavingPlanCoverageResponse} */
  DescribeSavingPlanCoverage(data: DescribeSavingPlanCoverageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanCoverageResponse>;
  /** 查询节省计划总览明细 {@link DescribeSavingPlanOverviewRequest} {@link DescribeSavingPlanOverviewResponse} */
  DescribeSavingPlanOverview(data: DescribeSavingPlanOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanOverviewResponse>;
  /** 查询节省计划使用率明细 {@link DescribeSavingPlanUsageRequest} {@link DescribeSavingPlanUsageResponse} */
  DescribeSavingPlanUsage(data: DescribeSavingPlanUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanUsageResponse>;
  /** 获取分账标签 {@link DescribeTagListRequest} {@link DescribeTagListResponse} */
  DescribeTagList(data: DescribeTagListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagListResponse>;
  /** 获取代金券相关信息 {@link DescribeVoucherInfoRequest} {@link DescribeVoucherInfoResponse} */
  DescribeVoucherInfo(data: DescribeVoucherInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVoucherInfoResponse>;
  /** 获取代金券使用记录 {@link DescribeVoucherUsageDetailsRequest} {@link DescribeVoucherUsageDetailsResponse} */
  DescribeVoucherUsageDetails(data: DescribeVoucherUsageDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVoucherUsageDetailsResponse>;
  /** 支付订单 {@link PayDealsRequest} {@link PayDealsResponse} */
  PayDeals(data?: PayDealsRequest, config?: AxiosRequestConfig): AxiosPromise<PayDealsResponse>;
}

export declare type Versions = ["2018-07-09"];

export default Billing;
