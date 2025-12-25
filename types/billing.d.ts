/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 按交易类型汇总消费详情 */
declare interface ActionSummaryOverviewItem {
  /** 交易类型编码 */
  ActionType?: string;
  /** 交易类型：如包年包月新购、包年包月续费、按量计费扣费等类型 */
  ActionTypeName?: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio?: string;
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 账单月份，格式2019-08 */
  BillMonth?: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost?: string;
}

/** UIN异常调整明细 */
declare interface AdjustInfoDetail {
  /** 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
  /** 账单月份，格式：yyyy-MM */
  Month?: string;
  /** 调整类型调账：manualAdjustment补结算：supplementarySettlement重结算：reSettlement */
  AdjustType?: string;
  /** 调整单号 */
  AdjustNum?: string;
  /** 异常调整完成时间，格式：yyyy-MM-dd HH:mm:ss */
  AdjustCompletionTime?: string;
  /** 调整金额 */
  AdjustAmount?: number;
}

/** 分账账单趋势图平均值 */
declare interface AllocationAverageData {
  /** 起始月份 */
  BeginMonth?: string;
  /** 结束月份 */
  EndMonth?: string;
  /** 合计费用(折后总额)平均值 */
  RealTotalCost?: string;
}

/** 分账趋势图详情数据 */
declare interface AllocationBillTrendDetail {
  /** 账单月份 */
  Month?: string;
  /** 账单月份展示名称 */
  Name?: string;
  /** 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额) */
  RealTotalCost?: string;
}

/** 分账账单明细 */
declare interface AllocationDetail {
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元名称 */
  TreeNodeUniqKeyName?: string;
  /** 日期：结算日期 */
  BillDate?: string;
  /** 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
  /** 使用者 UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID） */
  OperateUin?: string;
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品 */
  BusinessCodeName?: string;
  /** 计费模式编码 */
  PayMode?: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName?: string;
  /** 地域ID */
  RegionId?: number;
  /** 地域名称：资源所属地域 */
  RegionName?: string;
  /** 可用区ID */
  ZoneId?: number;
  /** 可用区：资源所属可用区 */
  ZoneName?: string;
  /** 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  ResourceId?: string;
  /** 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名 */
  ResourceName?: string;
  /** 实例类型编码 */
  InstanceType?: string;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-” */
  InstanceTypeName?: string;
  /** 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  SplitItemId?: string | null;
  /** 分拆项名称：涉及分拆产品的分拆后的分拆项 */
  SplitItemName?: string | null;
  /** 子产品编码 */
  ProductCode?: string;
  /** 子产品名称：用户采购的具体产品细分类型 */
  ProductCodeName?: string;
  /** 交易类型编码 */
  ActionType?: string;
  /** 交易类型：明细交易类型 */
  ActionTypeName?: string;
  /** 订单 ID：包年包月计费模式下订购的订单号 */
  OrderId?: string;
  /** 交易 ID：结算扣费单号 */
  BillId?: string;
  /** 扣费时间：结算扣费时间 */
  PayTime?: string;
  /** 开始使用时间：产品服务开始使用时间 */
  FeeBeginTime?: string;
  /** 结束使用时间：产品服务结束使用时间 */
  FeeEndTime?: string;
  /** 组件类型编码 */
  ComponentCode?: string;
  /** 组件类型：用户购买的产品或服务对应的组件大类 */
  ComponentCodeName?: string;
  /** 组件刊例价：组件的官网原始单价（如客户享受一口价/合同价则默认不展示） */
  SinglePrice?: string;
  /** 组件单价：组件的折后单价，组件单价 = 刊例价 * 折扣 */
  ContractPrice?: string;
  /** 组件价格单位：组件价格的单位，单位构成：元/用量单位/时长单位 */
  SinglePriceUnit?: string;
  /** 组件用量：该组件实际结算用量，组件用量=组件原始用量-抵扣用量（含资源包） */
  UsedAmount?: string;
  /** 组件用量单位：组件用量对应的单位 */
  UsedAmountUnit?: string;
  /** 使用时长：资源使用的时长，组件用量=组件原始使用时长-抵扣时长（含资源包） */
  TimeSpan?: string;
  /** 时长单位：资源使用时长的单位 */
  TimeUnit?: string;
  /** 备注属性（实例配置）：其他备注信息，如预留实例的预留实例类型和交易类型、CCN 产品的两端地域信息 */
  ReserveDetail?: string;
  /** 分拆项用量/时长占比：分拆项用量（时长）占比，分拆项用量（时长）/ 拆分前合计用量（时长） */
  SplitRatio?: string;
  /** 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式 */
  TotalCost?: string;
  /** 预留实例抵扣时长：本产品或服务使用预留实例抵扣的使用时长 */
  RITimeSpan?: string;
  /** 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  RICost?: string;
  /** 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率 */
  SPCost?: string;
  /** 折扣率：本资源享受的折扣率（如客户享受一口价/合同价则默认不展示，退费场景也默认不展示） */
  Discount?: string;
  /** 混合折扣率：综合各类折扣抵扣信息后的最终折扣率，混合折扣率=优惠后总价/原价 */
  BlendedDiscount?: string;
  /** 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率 */
  RealTotalCost?: string;
  /** 现金账户支出(元)：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 赠送账户支出(元)：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 分成账户支出(元)：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 分账标签：资源绑定的标签 */
  Tag?: BillTag[];
  /** 国内国际编码 */
  RegionType?: string;
  /** 国内国际：资源所属区域类型（国内、国际） */
  RegionTypeName?: string;
  /** 组件名称编码 */
  ItemCode?: string;
  /** 组件名称：用户购买的产品或服务，所包含的具体组件 */
  ItemCodeName?: string;
  /** 关联单据ID：和本笔交易关联单据ID，如退费订单对应的原新购订单等 */
  AssociatedOrder?: string;
  /** 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息 */
  PriceInfo?: string[];
  /** 计算规则说明：特殊交易类型计费结算的详细计算说明，如退费及变配 */
  Formula?: string;
  /** 计费规则：各产品详细的计费规则官网说明链接 */
  FormulaUrl?: string;
  /** 原始用量/时长：组件被资源包抵扣前的原始用量（目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中） */
  RealTotalMeasure?: string;
  /** 抵扣用量/时长（含资源包）：组件被资源包抵扣的用量（目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中） */
  DeductedMeasure?: string;
  /** 配置描述：资源配置规格信息 */
  ComponentConfig?: string;
  /** 费用归集类型：费用来源类型，分摊、归集、未分配0 - 分摊1 - 归集2 - 未分配 */
  AllocationType?: number;
  /** 当前消费项的优惠对象，例如：官网折扣、用户折扣、活动折扣。 */
  DiscountObject?: string;
  /** 当前消费项的优惠类型，例如：折扣、合同价。 */
  DiscountType?: string;
  /** 对优惠类型的补充描述，例如：商务折扣8折，则优惠类型为“折扣”，优惠内容为“0.8”。 */
  DiscountContent?: string;
  /** SPDeduction */
  SPDeduction?: string;
  /** SPDeduction */
  SPDeductionRate?: string;
  /** 账单月 */
  BillMonth?: string;
}

/** 分账账单月概览金额明细 */
declare interface AllocationMonthOverviewDetail {
  /** 归集费用(现金)：基于归集规则直接归集到分账单元的现金 */
  GatherCashPayAmount?: string;
  /** 归集费用(优惠券)：基于归集规则直接归集到分账单元的资源优惠券 */
  GatherVoucherPayAmount?: string;
  /** 归集费用(赠送金)：基于归集规则直接归集到分账单元的资源赠送金 */
  GatherIncentivePayAmount?: string;
  /** 归集费用(分成金)：基于归集规则直接归集到分账单元的资源分成金 */
  GatherTransferPayAmount?: string;
  /** 分摊费用(现金)：基于分摊规则分摊到分账单元的资源现金 */
  AllocateCashPayAmount?: string;
  /** 分摊费用(优惠券)：基于分摊规则分摊到分账单元的资源优惠券 */
  AllocateVoucherPayAmount?: string;
  /** 分摊费用(赠送金)：基于分摊规则分摊到分账单元的资源赠送金 */
  AllocateIncentivePayAmount?: string;
  /** 分摊费用(分成金)：基于分摊规则分摊到分账单元的资源分成金 */
  AllocateTransferPayAmount?: string;
  /** 合计费用(现金)：分账单元总费用，归集费用(现金) + 分摊费用(现金) */
  TotalCashPayAmount?: string;
  /** 合计费用(优惠券)：分账单元总费用，归集费用(优惠券) + 分摊费用(优惠券) */
  TotalVoucherPayAmount?: string;
  /** 合计费用(赠送金)：分账单元总费用，归集费用(赠送金) + 分摊费用(赠送金) */
  TotalIncentivePayAmount?: string;
  /** 合计费用(分成金)：分账单元总费用，归集费用(分成金)+分摊费用(分成金) */
  TotalTransferPayAmount?: string;
  /** 归集费用(折后总额)：基于归集规则直接归集到分账单元的资源优惠后总价 */
  GatherRealCost?: string;
  /** 分摊费用(折后总额)：基于分摊规则分摊到分账单元的资源优惠后总价 */
  AllocateRealCost?: string;
  /** 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额) */
  RealTotalCost?: string;
  /** 占比(折后总额)：本分账单元合计费用(折后总额)/合计费用(折后总额)*100% */
  Ratio?: string;
  /** 环比(折后总额)：[本月分账单元合计费用(折后总额) - 上月分账单元合计费用(折后总额)] / 上月分账单元合计费用(折后总额) * 100% */
  Trend?: string;
  /** 环比箭头upward -上升downward - 下降none - 平稳 */
  TrendType?: string;
}

/** 分账概览明细 */
declare interface AllocationOverviewDetail {
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元名称 */
  TreeNodeUniqKeyName?: string;
  /** 日期：结算日期 */
  BillDate?: string;
  /** 归集费用(现金)：基于归集规则直接归集到分账单元的现金 */
  GatherCashPayAmount?: string;
  /** 归集费用(优惠券)：基于归集规则直接归集到分账单元的资源优惠券 */
  GatherVoucherPayAmount?: string;
  /** 归集费用(赠送金)：基于归集规则直接归集到分账单元的资源赠送金 */
  GatherIncentivePayAmount?: string;
  /** 归集费用(分成金)：基于归集规则直接归集到分账单元的资源分成金 */
  GatherTransferPayAmount?: string;
  /** 分摊费用(现金)：基于分摊规则分摊到分账单元的资源现金 */
  AllocateCashPayAmount?: string;
  /** 分摊费用(优惠券)：基于分摊规则分摊到分账单元的资源优惠券 */
  AllocateVoucherPayAmount?: string;
  /** 分摊费用(赠送金)：基于分摊规则分摊到分账单元的资源赠送金 */
  AllocateIncentivePayAmount?: string;
  /** 分摊费用(分成金)：基于分摊规则分摊到分账单元的资源分成金 */
  AllocateTransferPayAmount?: string;
  /** 合计费用(现金)：分账单元总费用，归集费用(现金) + 分摊费用(现金) */
  TotalCashPayAmount?: string;
  /** 合计费用(优惠券)：分账单元总费用，归集费用(优惠券) + 分摊费用(优惠券) */
  TotalVoucherPayAmount?: string;
  /** 合计费用(赠送金)：分账单元总费用，归集费用(赠送金) + 分摊费用(赠送金) */
  TotalIncentivePayAmount?: string;
  /** 合计费用(分成金)：分账单元总费用，归集费用(分成金)+分摊费用(分成金) */
  TotalTransferPayAmount?: string;
  /** 归集费用(折后总额)：基于归集规则直接归集到分账单元的资源优惠后总价 */
  GatherRealCost?: string;
  /** 分摊费用(折后总额)：基于分摊规则分摊到分账单元的资源优惠后总价 */
  AllocateRealCost?: string;
  /** 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额) */
  RealTotalCost?: string;
  /** 占比(折后总额)：本分账单元合计费用(折后总额)/合计费用(折后总额)*100% */
  Ratio?: string;
  /** 环比(折后总额)：[本月分账单元合计费用(折后总额) - 上月分账单元合计费用(折后总额)] / 上月分账单元合计费用(折后总额) * 100% */
  Trend?: string;
  /** 环比箭头upward -上升downward - 下降none - 平稳 */
  TrendType?: string;
}

/** 分账账单月概览详情 */
declare interface AllocationOverviewNode {
  /** 分账单元ID */
  Id?: number;
  /** 分账单元名称 */
  Name?: string;
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元包含规则标志0 - 不存在规则1 - 同时存在归集规则和公摊规则2 - 仅存在归集规则3 - 仅存在公摊规则 */
  Symbol?: number;
  /** 子单元月概览详情 */
  Children?: AllocationOverviewNode[];
  /** 分账账单月概览金额明细 */
  Detail?: AllocationMonthOverviewDetail;
}

/** 分账账单概览金额汇总 */
declare interface AllocationOverviewTotal {
  /** 总费用：现金费用合计+分成金费用合计+赠送金费用合计+优惠券费用合计 */
  RealTotalCost?: string | null;
  /** 现金： 现金费用合计 */
  CashPayAmount?: string | null;
  /** 赠送金：赠送金费用合计 */
  IncentivePayAmount?: string | null;
  /** 优惠券：优惠券费用合计 */
  VoucherPayAmount?: string | null;
  /** 分成金：分成金费用合计 */
  TransferPayAmount?: string | null;
}

/** 分摊比例表达式 */
declare interface AllocationRationExpression {
  /** 公摊规则所属分账单元ID */
  NodeId: number;
  /** 分账单元所占公摊比例，按占比分摊传0 */
  Ratio: number;
}

/** 当前资源命中公摊规则信息 */
declare interface AllocationRule {
  /** 公摊规则ID */
  RuleId?: number;
  /** 公摊规则名称 */
  RuleName?: string;
}

/** 分账规则表达式 */
declare interface AllocationRuleExpression {
  /** RuleKey：分账维度枚举值：ownerUin - 使用者UIN,operateUin - 操作者UIN,businessCode - 产品一层编码,productCode - 产品二层编码,itemCode - 产品四层编码,projectId - 项目ID,regionId - 地域ID,resourceId - 资源ID,tag - 标签键值对,payMode - 计费模式,instanceType - 实例类型,actionType - 交易类型 */
  RuleKey?: string;
  /** 分账维度规则枚举值：in - 是not in - 不是 */
  Operator?: string;
  /** 分账维度值，例如当RuleKey为businessCode时，["p_cbs","p_sqlserver"]表示产品一层是"p_cbs","p_sqlserver"的费用 */
  RuleValue?: string[];
  /** 分账逻辑连接词，枚举值如下：and - 且or - 或 */
  Connectors?: string;
  /** 嵌套规则 */
  Children?: AllocationRuleExpression[];
}

/** 公摊规则概览 */
declare interface AllocationRuleOverview {
  /** 公摊规则ID */
  RuleId?: number;
  /** 公摊规则名称 */
  RuleName?: string;
  /** 公摊策略类型枚举值：1 - 自定义分摊占比 2 - 等比分摊 3 - 按占比分摊 */
  Type?: number;
  /** 公摊规则最后更新时间 */
  UpdateTime?: string;
  /** 分账单元概览 */
  AllocationNode?: AllocationUnit[];
}

/** 公摊规则列表 */
declare interface AllocationRulesSummary {
  /** 新增公摊规则名称 */
  Name: string;
  /** 公摊策略类型，枚举值如下：1 - 自定义分摊占比 2 - 等比分摊3 - 按占比分摊 */
  Type: number;
  /** 公摊规则表达式 */
  RuleDetail: AllocationRuleExpression;
  /** 公摊比例表达式，按占比分摊不传 */
  RatioDetail?: AllocationRationExpression[];
}

/** 分账账单趋势图 */
declare interface AllocationStat {
  /** 费用平均信息 */
  Average?: AllocationAverageData;
}

/** 分账账单按产品汇总明细 */
declare interface AllocationSummaryByBusiness {
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元名称 */
  TreeNodeUniqKeyName?: string;
  /** 日期：结算日期 */
  BillDate?: string;
  /** 归集费用(现金)：基于归集规则直接归集到分账单元的现金 */
  GatherCashPayAmount?: string;
  /** 归集费用(优惠券)：基于归集规则直接归集到分账单元的资源优惠券 */
  GatherVoucherPayAmount?: string;
  /** 归集费用(赠送金)：基于归集规则直接归集到分账单元的资源赠送金 */
  GatherIncentivePayAmount?: string;
  /** 归集费用(分成金)：基于归集规则直接归集到分账单元的资源分成金 */
  GatherTransferPayAmount?: string;
  /** 分摊费用(现金)：基于分摊规则分摊到分账单元的资源现金 */
  AllocateCashPayAmount?: string;
  /** 分摊费用(优惠券)：基于分摊规则分摊到分账单元的资源优惠券 */
  AllocateVoucherPayAmount?: string;
  /** 分摊费用(赠送金)：基于分摊规则分摊到分账单元的资源赠送金 */
  AllocateIncentivePayAmount?: string;
  /** 分摊费用(分成金)：基于分摊规则分摊到分账单元的资源分成金 */
  AllocateTransferPayAmount?: string;
  /** 合计费用(现金)：分账单元总费用，归集费用(现金) + 分摊费用(现金) */
  TotalCashPayAmount?: string;
  /** 合计费用(优惠券)：分账单元总费用，归集费用(优惠券) + 分摊费用(优惠券) */
  TotalVoucherPayAmount?: string;
  /** 合计费用(赠送金)：分账单元总费用，归集费用(赠送金) + 分摊费用(赠送金) */
  TotalIncentivePayAmount?: string;
  /** 合计费用(分成金)：分账单元总费用，归集费用(分成金)+分摊费用(分成金) */
  TotalTransferPayAmount?: string;
  /** 归集费用(折后总额)：基于归集规则直接归集到分账单元的资源优惠后总价 */
  GatherRealCost?: string;
  /** 分摊费用(折后总额)：基于分摊规则分摊到分账单元的资源优惠后总价 */
  AllocateRealCost?: string;
  /** 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额) */
  RealTotalCost?: string;
  /** 占比(折后总额)：本分账单元合计费用(折后总额)/合计费用(折后总额)*100% */
  Ratio?: string;
  /** 环比(折后总额)：[本月分账单元合计费用(折后总额) - 上月分账单元合计费用(折后总额)] / 上月分账单元合计费用(折后总额) * 100% */
  Trend?: string;
  /** 环比箭头upward -上升downward - 下降none - 平稳 */
  TrendType?: string;
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品 */
  BusinessCodeName?: string;
  /** 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式 */
  TotalCost?: string;
  /** 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  RICost?: string;
  /** 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率 */
  SPCost?: string;
  /** 现金账户支出(元)：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 赠送账户支出(元)：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 分成账户支出(元)：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率 */
  AllocationRealTotalCost?: string;
}

/** 分账账单按组件汇总明细 */
declare interface AllocationSummaryByItem {
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元名称 */
  TreeNodeUniqKeyName?: string;
  /** 日期：结算日期 */
  BillDate?: string;
  /** 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
  /** 使用者 UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID） */
  OperateUin?: string;
  /** 计费模式编码 */
  PayMode?: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName?: string;
  /** 交易类型编码 */
  ActionType?: string;
  /** 交易类型：明细交易类型 */
  ActionTypeName?: string;
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品 */
  BusinessCodeName?: string;
  /** 子产品编码 */
  ProductCode?: string;
  /** 子产品名称：用户采购的具体产品细分类型 */
  ProductCodeName?: string;
  /** 地域ID */
  RegionId?: number;
  /** 地域名称：资源所属地域 */
  RegionName?: string;
  /** 可用区ID */
  ZoneId?: number;
  /** 可用区：资源所属可用区 */
  ZoneName?: string;
  /** 实例类型编码 */
  InstanceType?: string;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-” */
  InstanceTypeName?: string;
  /** 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  ResourceId?: string;
  /** 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名 */
  ResourceName?: string;
  /** 分账标签：资源绑定的标签 */
  Tag?: BillTag[];
  /** 项目ID */
  ProjectId?: number;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName?: string;
  /** 费用归集类型：费用来源类型，分摊、归集、未分配0 - 分摊1 - 归集-1 - 未分配 */
  AllocationType?: number;
  /** 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式 */
  TotalCost?: string;
  /** 预留实例抵扣时长：本产品或服务使用预留实例抵扣的使用时长 */
  RiTimeSpan?: string;
  /** 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  RiCost?: string;
  /** 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率 */
  RealTotalCost?: string;
  /** 现金账户支出(元)：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 赠送账户支出(元)：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 分成账户支出(元)：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 组件名称编码 */
  ItemCode?: string;
  /** 组件名称：用户购买的产品或服务，所包含的具体组件 */
  ItemCodeName?: string;
  /** 组件类型编码 */
  ComponentCode?: string;
  /** 组件类型：用户购买的产品或服务对应的组件大类 */
  ComponentCodeName?: string;
  /** 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  SplitItemId?: string | null;
  /** 分拆项名称：涉及分拆产品的分拆后的分拆项 */
  SplitItemName?: string | null;
  /** 开始使用时间：产品服务开始使用时间 */
  FeeBeginTime?: string;
  /** 结束使用时间：产品服务结束使用时间 */
  FeeEndTime?: string;
  /** 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率 */
  SPCost?: string;
  /** 国内国际编码 */
  RegionType?: string;
  /** 国内国际：资源所属区域类型（国内、国际） */
  RegionTypeName?: string;
  /** 组件刊例价：组件的官网原始单价（如客户享受一口价/合同价则默认不展示） */
  SinglePrice?: string;
  /** 组件单价：组件的折后单价，组件单价 = 刊例价 * 折扣 */
  ContractPrice?: string;
  /** 组件价格单位：组件价格的单位，单位构成：元/用量单位/时长单位 */
  SinglePriceUnit?: string;
  /** 组件用量：该组件实际结算用量，组件用量=组件原始用量-抵扣用量（含资源包） */
  UsedAmount?: string;
  /** 组件用量单位：组件用量对应的单位 */
  UsedAmountUnit?: string;
  /** 使用时长：资源使用的时长，组件用量=组件原始使用时长-抵扣时长（含资源包） */
  TimeSpan?: string;
  /** 时长单位：资源使用时长的单位 */
  TimeUnit?: string;
  /** 备注属性（实例配置）：其他备注信息，如预留实例的预留实例类型和交易类型、CCN 产品的两端地域信息 */
  ReserveDetail?: string;
  /** 原始用量/时长：组件被资源包抵扣前的原始用量（目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中） */
  RealTotalMeasure?: string;
  /** 抵扣用量/时长（含资源包）：组件被资源包抵扣的用量（目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中） */
  DeductedMeasure?: string;
  /** 折扣率：本资源享受的折扣率（如客户享受一口价/合同价则默认不展示，退费场景也默认不展示） */
  Discount?: string;
  /** 混合折扣率：综合各类折扣抵扣信息后的最终折扣率，混合折扣率=优惠后总价/原价 */
  BlendedDiscount?: string;
  /** 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息 */
  PriceInfo?: string[];
  /** 计算规则说明：特殊交易类型计费结算的详细计算说明，如退费及变配 */
  Formula?: string;
  /** 计费规则：各产品详细的计费规则官网说明链接 */
  FormulaUrl?: string;
  /** 配置描述：资源配置规格信息 */
  ComponentConfig?: string;
  /** SPDeduction */
  SPDeduction?: string;
  /** 节省计划抵扣率：节省计划可用余额额度范围内，节省计划对于此组件打的折扣率 */
  SPDeductionRate?: string;
  /** AssociatedOrder */
  AssociatedOrder?: string;
  /** 当前消费项的优惠对象，例如：官网折扣、用户折扣、活动折扣。 */
  DiscountObject?: string;
  /** 当前消费项的优惠类型，例如：折扣、合同价。 */
  DiscountType?: string;
  /** 对优惠类型的补充描述，例如：商务折扣8折，则优惠类型为“折扣”，优惠内容为“0.8”。 */
  DiscountContent?: string;
  /** 账单月 */
  BillMonth?: string;
}

/** 分账账单按资源汇总明细 */
declare interface AllocationSummaryByResource {
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元名称 */
  TreeNodeUniqKeyName?: string;
  /** 日期：结算日期 */
  BillDate?: string;
  /** 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
  /** 使用者 UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID） */
  OperateUin?: string;
  /** 计费模式编码 */
  PayMode?: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName?: string;
  /** 交易类型编码 */
  ActionType?: string;
  /** 交易类型：明细交易类型 */
  ActionTypeName?: string;
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品 */
  BusinessCodeName?: string;
  /** 子产品编码 */
  ProductCode?: string;
  /** 子产品名称：用户采购的具体产品细分类型 */
  ProductCodeName?: string;
  /** 地域ID */
  RegionId?: number;
  /** 地域名称：资源所属地域 */
  RegionName?: string;
  /** 可用区ID */
  ZoneId?: number;
  /** 可用区：资源所属可用区 */
  ZoneName?: string;
  /** 实例类型编码 */
  InstanceType?: string;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-” */
  InstanceTypeName?: string;
  /** 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  ResourceId?: string;
  /** 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名 */
  ResourceName?: string;
  /** 分账标签：资源绑定的标签 */
  Tag?: BillTag[];
  /** 项目ID */
  ProjectId?: number;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName?: string;
  /** 费用归集类型：费用来源类型，分摊、归集、未分配0 - 分摊 1 - 归集 -1 - 未分配 */
  AllocationType?: number;
  /** 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式 */
  TotalCost?: string;
  /** 预留实例抵扣时长：本产品或服务使用预留实例抵扣的使用时长 */
  RiTimeSpan?: string;
  /** 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  RiCost?: string;
  /** 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率 */
  RealTotalCost?: string;
  /** 现金账户支出(元)：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 赠送账户支出(元)：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 分成账户支出(元)：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  SplitItemId?: string | null;
  /** 分拆项名称：涉及分拆产品的分拆后的分拆项 */
  SplitItemName?: string | null;
  /** 开始使用时间：产品服务开始使用时间 */
  FeeBeginTime?: string;
  /** 结束使用时间：产品服务结束使用时间 */
  FeeEndTime?: string;
  /** 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率 */
  SPCost?: string;
  /** 国内国际编码 */
  RegionType?: string;
  /** 国内国际：资源所属区域类型（国内、国际） */
  RegionTypeName?: string;
  /** 配置描述：对应资源下各组件名称及用量（如组件为用量累加型计费则为合计用量） */
  ComponentConfig?: string;
  /** SPDeduction */
  SPDeduction?: string;
  /** 账单月 */
  BillMonth?: string;
}

/** 分账目录树 */
declare interface AllocationTree {
  /** 分账单元ID */
  Id?: number;
  /** 分账单元名称 */
  Name?: string;
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 子树 */
  Children?: AllocationTree[];
}

/** 当前归属单元信息 */
declare interface AllocationTreeNode {
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元名称 */
  TreeNodeUniqKeyName?: string;
}

/** 分账单元id和名称 */
declare interface AllocationUnit {
  /** 分账单元ID */
  NodeId?: number;
  /** 分账规则名称 */
  TreeNodeUniqKeyName?: string;
}

/** 成本分析交易类型复杂类型 */
declare interface AnalyseActionTypeDetail {
  /** 交易类型code */
  ActionType?: string;
  /** 交易类型Name */
  ActionTypeName?: string;
}

/** 成本分析金额返回数据模型 */
declare interface AnalyseAmountDetail {
  /** 费用类型 */
  Key?: string;
  /** 是否展示 */
  Display?: number;
}

/** 成本分析产品返回复杂类型 */
declare interface AnalyseBusinessDetail {
  /** 产品码code */
  BusinessCode?: string;
  /** 产品名称 */
  BusinessCodeName?: string;
}

/** 成本分析过滤框复杂类型 */
declare interface AnalyseConditionDetail {
  /** 产品 */
  Business?: AnalyseBusinessDetail[];
  /** 项目 */
  Project?: AnalyseProjectDetail[];
  /** 地域 */
  Region?: AnalyseRegionDetail[];
  /** 计费模式 */
  PayMode?: AnalysePayModeDetail[];
  /** 交易类型 */
  ActionType?: AnalyseActionTypeDetail[];
  /** 可用区 */
  Zone?: AnalyseZoneDetail[];
  /** 资源所有者Uin */
  OwnerUin?: AnalyseOwnerUinDetail[];
  /** 费用类型 */
  Amount?: AnalyseAmountDetail[];
}

/** 成本分析查询条件 */
declare interface AnalyseConditions {
  /** 产品名称代码 */
  BusinessCodes?: string;
  /** 子产品名称代码 */
  ProductCodes?: string;
  /** 组件类型代码 */
  ComponentCode?: string;
  /** 可用区ID：资源所属可用区ID */
  ZoneIds?: string;
  /** 地域ID:资源所属地域ID */
  RegionIds?: string;
  /** 项目ID:资源所属项目ID */
  ProjectIds?: string;
  /** 计费模式 prePay(表示包年包月)/postPay(表示按量计费) */
  PayModes?: string;
  /** 交易类型，查询交易类型（请使用交易类型code入参） */
  ActionTypes?: string;
  /** 分账标签键 */
  Tags?: string;
  /** 费用类型，查询费用类型（请使用费用类型code入参)入参枚举如下：cashPayAmount:现金 incentivePayAmount:赠送金 voucherPayAmount:优惠券 tax:税金 costBeforeTax:税前价 */
  FeeType?: string;
  /** 查询成本分析数据的用户UIN */
  PayerUins?: string;
  /** 使用资源的用户UIN */
  OwnerUins?: string;
  /** 消耗类型，查询消耗类型（请使用消耗类型code入参） */
  ConsumptionTypes?: string;
}

/** 成本分析数据复杂类型 */
declare interface AnalyseDetail {
  /** 时间 */
  Name?: string;
  /** 金额 */
  Total?: string;
  /** 日期明细金额 */
  TimeDetail?: AnalyseTimeDetail[];
}

/** 成本分析表头数据复杂类型 */
declare interface AnalyseHeaderDetail {
  /** 表头日期 */
  HeadDetail?: AnalyseHeaderTimeDetail[];
  /** 时间 */
  Name?: string;
  /** 总计 */
  Total?: string;
}

/** 成本分析header表头数据 */
declare interface AnalyseHeaderTimeDetail {
  /** 日期 */
  Name?: string;
}

/** 成本分析使用者uin复杂类型 */
declare interface AnalyseOwnerUinDetail {
  /** 使用者uin */
  OwnerUin?: string;
}

/** 成本分析支付方式复杂类型 */
declare interface AnalysePayModeDetail {
  /** 计费模式code */
  PayMode?: string;
  /** 计费模式Name */
  PayModeName?: string;
}

/** 成本分析项目返回复杂类型 */
declare interface AnalyseProjectDetail {
  /** 项目id */
  ProjectId?: string;
  /** 默认项目 */
  ProjectName?: string;
}

/** 成本分析地域返回复杂类型 */
declare interface AnalyseRegionDetail {
  /** 地域id */
  RegionId?: string;
  /** 地域名称 */
  RegionName?: string;
}

/** 成本分返回值复杂类型 */
declare interface AnalyseTimeDetail {
  /** 日期 */
  Time?: string;
  /** 金额 */
  Money?: string;
}

/** 成本分析可用区复杂类型 */
declare interface AnalyseZoneDetail {
  /** 可用区id */
  ZoneId?: string;
  /** 可用区Name */
  ZoneName?: string;
}

/** 适用商品信息 */
declare interface ApplicableProducts {
  /** 适用商品名称，值为“全产品通用”或商品名称组成的string，以","分割。 */
  GoodsName?: string;
  /** postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。如GoodsName为多个商品名以","分割组成的string，而PayMode为"*"，表示每一件商品的模式都为"*"。 */
  PayMode?: string;
}

/** 交易类型筛选列表 */
declare interface BillActionType {
  /** 交易类型编码 */
  ActionType: string;
  /** 交易类型：明细交易类型 */
  ActionTypeName: string;
}

/** 产品筛选列表 */
declare interface BillBusiness {
  /** 产品编码 */
  BusinessCode: string;
  /** 产品名称：用户所采购的各类云产品 */
  BusinessCodeName: string;
}

/** 产品级联筛选值 */
declare interface BillBusinessLink {
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称 */
  BusinessCodeName?: string;
  /** 子产品 */
  Children?: BillProductLink[];
}

/** 组件类型筛选列表 */
declare interface BillComponent {
  /** 组件类型编码 */
  ComponentCode: string;
  /** 组件类型：用户购买的产品或服务对应的组件大类 */
  ComponentCodeName: string;
}

/** 日期筛选列表 */
declare interface BillDays {
  /** 日期：结算日期 */
  BillDay: string;
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
  /** 订单ID：包年包月计费模式下对应子订单号。后付费计费模式下账单费用不存在订单概念，可忽略此参数。 */
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
  Tags?: BillTagInfo[];
  /** 产品编码 */
  BusinessCode?: string;
  /** 子产品编码 */
  ProductCode?: string;
  /** 交易类型编码 */
  ActionType?: string;
  /** 地域ID */
  RegionId?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息 */
  PriceInfo?: string[];
  /** 关联交易单据ID：和本笔交易关联单据 ID，如，冲销订单，记录原订单、重结订单，退费单记录对应的原购买订单号 */
  AssociatedOrder?: BillDetailAssociatedOrder;
  /** 计算说明：特殊交易类型计费结算的详细计算说明，如退费及变配 */
  Formula?: string;
  /** 计费规则：各产品详细的计费规则官网说明链接 */
  FormulaUrl?: string;
  /** 账单归属日 */
  BillDay?: string;
  /** 账单归属月 */
  BillMonth?: string;
  /** 账单记录ID */
  Id?: string;
  /** 国内国际编码 */
  RegionType?: string;
  /** 国内国际：资源所属区域类型（国内、国际） */
  RegionTypeName?: string;
  /** 备注属性（实例配置）：其他备注信息，如预留实例的预留实例类型和交易类型、CCN 产品的两端地域信息 */
  ReserveDetail?: string;
  /** 优惠对象 */
  DiscountObject?: string;
  /** 优惠类型 */
  DiscountType?: string;
  /** 优惠内容 */
  DiscountContent?: string;
}

/** 明细账单关联单据信息 */
declare interface BillDetailAssociatedOrder {
  /** 新购订单 */
  PrepayPurchase?: string;
  /** 续费订单 */
  PrepayRenew?: string;
  /** 升配订单 */
  PrepayModifyUp?: string;
  /** 冲销订单 */
  ReverseOrder?: string;
  /** 优惠调整后订单 */
  NewOrder?: string;
  /** 优惠调整前订单 */
  Original?: string;
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
  RealTotalMeasure?: string;
  /** 抵扣用量/时长（含资源包）：组件被资源包抵扣的用量/时长 */
  DeductedMeasure?: string;
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
  TransferPayAmount?: string;
  /** 组件类型编码 */
  ItemCode?: string;
  /** 组件名称编码 */
  ComponentCode?: string;
  /** 组件单价：组件的折后单价，组件单价 = 刊例价 * 折扣 */
  ContractPrice?: string;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。正常的实例展示默认为不展示 */
  InstanceType?: string;
  /** 预留实例抵扣的使用时长：本产品或服务使用预留实例抵扣的使用时长 */
  RiTimeSpan?: string;
  /** 预留实例抵扣组件原价：本产品或服务使用预留实例抵扣的组件原价金额 */
  OriginalCostWithRI?: string;
  /** 节省计划抵扣率：节省计划可用余额额度范围内，节省计划对于此组件打的折扣率 */
  SPDeductionRate?: string;
  /** 节省计划抵扣金额（已废弃） */
  SPDeduction?: string | null;
  /** 节省计划抵扣组件原价：节省计划抵扣原价=节省计划包抵扣金额/节省计划抵扣率 */
  OriginalCostWithSP?: string;
  /** 混合折扣率：综合各类折扣抵扣信息后的最终折扣率，混合折扣率 = 优惠后总价 / 组件原价 */
  BlendedDiscount?: string;
  /** 配置描述：资源配置规格信息 */
  ComponentConfig?: BillDetailComponentConfig[];
}

/** 明细账单配置描述结构 */
declare interface BillDetailComponentConfig {
  /** 配置描述名称 */
  Name?: string;
  /** 配置描述值 */
  Value?: string;
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
  TransferPayAmount?: string;
  /** 扩展字段3：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField3?: string;
  /** 扩展字段4：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField4?: string;
  /** 扩展字段5：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField5?: string;
  /** 标签信息 */
  Tags?: BillTagInfo[];
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
  /** 账单归属月 */
  BillMonth?: string;
}

/** 实例类型筛选列表 */
declare interface BillInstanceType {
  /** 实例类型编码 */
  InstanceType: string;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-” */
  InstanceTypeName: string;
}

/** 组件名称筛选列表 */
declare interface BillItem {
  /** 组件名称编码 */
  ItemCode: string;
  /** 组件名称：用户购买的产品或服务，所包含的具体组件 */
  ItemCodeName: string;
}

/** 操作者 UIN筛选列表 */
declare interface BillOperateUin {
  /** 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID） */
  OperateUin: string;
}

/** 使用者 UIN筛选列表 */
declare interface BillOwnerUin {
  /** 使用者 UIN：实际使用资源的账号 ID */
  OwnerUin: string;
}

/** 计费模式筛选列表 */
declare interface BillPayMode {
  /** 计费模式编码 */
  PayMode: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName: string;
}

/** 子产品筛选列表 */
declare interface BillProduct {
  /** 子产品编码 */
  ProductCode: string;
  /** 子产品名称：用户采购的具体产品细分类型 */
  ProductCodeName: string;
}

/** 分账条件子产品筛选 */
declare interface BillProductLink {
  /** 子产品编码 */
  ProductCode?: string;
  /** 子产品名称 */
  ProductCodeName?: string;
  /** 组件名称 */
  Children?: BillItem[];
}

/** 项目筛选列表 */
declare interface BillProject {
  /** 项目ID */
  ProjectId: number;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName: string;
}

/** 地域筛选列表 */
declare interface BillRegion {
  /** 地域ID */
  RegionId: number;
  /** 地域名称：资源所属地域 */
  RegionName: string;
}

/** 账单资源汇总数据对象 */
declare interface BillResourceSummary {
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
  TransferPayAmount?: string;
  /** 扩展字段3：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField3?: string;
  /** 扩展字段4：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField4?: string;
  /** 扩展字段5：产品对应的扩展属性信息，仅在资源账单体现 */
  ExtendField5?: string;
  /** 标签信息 */
  Tags?: BillTagInfo[];
  /** 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
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
  /** 账单归属月 */
  BillMonth?: string;
}

/** 标签筛选列表 */
declare interface BillTag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 账单 Tag 信息 */
declare interface BillTagInfo {
  /** 分账标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 收支明细的流水信息 */
declare interface BillTransactionInfo {
  /** 收支类型：deduct 扣费, recharge 充值, return 退费， block 冻结, unblock 解冻 */
  ActionType?: string;
  /** 流水金额，单位（分）；正数表示入账，负数表示出账 */
  Amount?: number;
  /** 可用余额，单位（分）；正数表示入账，负数表示出账 */
  Balance?: number;
  /** 流水号，如20190131020000236005203583326401 */
  BillId?: string;
  /** 描述信息 */
  OperationInfo?: string;
  /** 操作时间"2019-01-31 23:35:10.000" */
  OperationTime?: string;
  /** 现金账户余额，单位（分） */
  Cash?: number;
  /** 赠送金余额，单位（分） */
  Incentive?: number;
  /** 冻结余额，单位（分） */
  Freezing?: number;
  /** 交易渠道 */
  PayChannel?: string;
  /** 扣费模式：trade 包年包月(预付费)，hourh 按量-小时结，hourd 按量-日结，hourm 按量-月结，month 按量-月结 */
  DeductMode?: string;
}

/** 可用区筛选列表 */
declare interface BillZoneId {
  /** 可用区ID */
  ZoneId: number;
  /** 可用区：资源所属可用区 */
  ZoneName: string;
}

/** 预算管理自定义费用范围参数 */
declare interface BudgetConditionsForm {
  /** 产品 */
  Business?: string[] | null;
  /** 计费模式 */
  PayMode?: string[] | null;
  /** 子产品 */
  ProductCodes?: string[] | null;
  /** 组件编码 */
  ComponentCodes?: string[] | null;
  /** 地域 */
  ZoneIds?: string[] | null;
  /** 可用区 */
  RegionIds?: string[] | null;
  /** 项目 */
  ProjectIds?: string[] | null;
  /** 交易类型 */
  ActionTypes?: string[] | null;
  /** 消耗类型 */
  ConsumptionTypes?: string[] | null;
  /** 标签 */
  Tags?: TagsForm[] | null;
  /** 末级分账单元 */
  PayerUins?: string[] | null;
  /** 主用户Uin */
  OwnerUins?: string[] | null;
  /** 末级分账单元唯一键 */
  TreeNodeUniqKeys?: string[] | null;
}

/** 查询返回预算完整信息 */
declare interface BudgetExtend {
  /** 预算名称 */
  BudgetName: string;
  /** 预算额度 */
  BudgetQuota: string;
  /** DAY 天，MONTH 月度，QUARTER 季度 ，YEAR 年度 */
  CycleType: string;
  /** BILL 系统账单，CONSUMPTION 消耗账单 */
  BillType: string;
  /** COST 原价，REAL_COST 实际费用，CASH 现金，INCENTIVE 赠送金，VOUCHER 代金券，TRANSFER 分成金，TAX 税，AMOUNT_BEFORE_TAX 现金支付(税前) */
  FeeType: string;
  /** 有效期起始时间 2025-01-01 */
  PeriodBegin: string;
  /** 有效期结束时间 2025-12-01 */
  PeriodEnd: string;
  /** COST，USAGE，RI，SP */
  Dimensions: string;
  /** FIX 固定值，CYCLE 不同值 */
  PlanType: string;
  /** 阈值提醒 */
  WarnJson: BudgetWarn[];
  /** 用户Uin */
  PayerUin?: number;
  /** 波动提醒 */
  WaveThresholdJson?: WaveThresholdForm[];
  /** 预算备注 */
  BudgetNote?: string;
  /** 自定义发送对象信息 */
  SendDetail?: string;
  /** 0:默认uin发送 */
  DefaultMode?: number;
  /** CUS 自定义预算，ZERO_COST 零支出预算模板，BY_MONTH 按月费用预算模板 */
  TemplateType?: string | null;
  /** (1, "未超支"),(2, "超支") */
  MoneyStatus?: number;
  /** 提醒次数 */
  RemindTimes?: number;
  /** 创建预算时间 */
  CreateTime?: string;
  /** 更新预算时间 */
  UpdateTime?: string;
  /** 预算关联Id */
  BudgetId?: string;
  /** NO_FORECAST(没有设置预测), FORECAST_NO_DATA(设置了预测,但是没有数据),FORECAST_HAS_DATA(设置了预测,且有预测数据) */
  HasForecast?: string | null;
  /** 预测费用 */
  ForecastCost?: string | null;
  /** 预测进度 */
  ForecastProgress?: string | null;
  /** 实际费用 */
  RealCost?: string;
  /** 自定义发送 */
  BudgetSendInfoForm?: BudgetSendInfoDto[];
  /** 当前周期 */
  CurDateDesc?: string;
  /** EXPIRED 已过期ACTIVE 生效中UNACTIVATED 已失效ACTIVATED 待生效 */
  BudgetStatus?: string;
  /** 预算维度范围条件 */
  DimensionsRange?: BudgetConditionsForm | null;
  /** 预算进度 */
  BudgetProgress?: string | null;
  /** 预算类型设置为计划预算时返回预算额度 */
  BudgetQuotaJson?: BudgetPlan[] | null;
}

/** 记录预算项目相关字段的变更信息 */
declare interface BudgetInfoDiffEntity {
  /** 变更属性 */
  Property?: string;
  /** 变更前内容 */
  Before?: string | null;
  /** 变更后内容 */
  After?: string | null;
}

/** 预算修改记录信息 */
declare interface BudgetOperationLogEntity {
  /** 支付者Uin */
  PayerUin?: number;
  /** 使用者Uin */
  OwnerUin?: number;
  /** 操作用户Uin */
  OperateUin?: number;
  /** 日期 */
  BillDay?: number;
  /** 月份 */
  BillMonth?: string;
  /** 修改类型：ADD(新增)、UPDATE(更新)、DELETE(删除) */
  Action?: string;
  /** 变更信息 */
  DiffValue?: BudgetInfoDiffEntity[];
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 修改渠道：CONSOLE/API */
  OperationChannel?: string;
  /** 预算项目id */
  BudgetId?: string;
}

/** 预算计算复杂数据类型 */
declare interface BudgetPlan {
  /** 前端页面日期显示 */
  DateDesc?: string | null;
  /** 预算额度 */
  Quota?: string | null;
}

/** 预算管理的分页数据 */
declare interface BudgetRemindRecordList {
  /** 自动优化 COUNT SQL 如果遇到 jSqlParser 无法解析情况，设置该参数为 false */
  OptimizeCountSql?: boolean | null;
  /** 分页 */
  Pages?: number | null;
  /** 排序字段信息，允许前端传入的时候，注意 SQL 注入问题，可以使用 SqlInjectionUtils.check(...) 检查文本 */
  Orders?: OrderDto[] | null;
  /** xml 自定义 count 查询的 statementId 也可以不用指定在分页 statementId 后面加上 _mpCount 例如分页 selectPageById 指定 count 的查询 statementId 设置为 selectPageById_mpCount 即可默认找到该 SQL 执行 */
  CountId?: string | null;
  /** 分页大小 */
  Size?: number | null;
  /** 总量 */
  Total?: number | null;
  /** 单页分页条数限制 */
  MaxLimit?: string | null;
  /** 查询数据列表 */
  Records?: BudgetRemindRecords[] | null;
  /** 当前页 */
  Current?: number | null;
  /** 是否进行 count 查询，如果只想查询到列表不要查询总记录数，设置该参数为 false */
  SearchCount?: boolean | null;
}

/** 预算历史详情 */
declare interface BudgetRemindRecords {
  /** 预算周期 */
  DateDesc?: string;
  /** 实际费用 */
  RealCost?: string;
  /** 预算值额度 */
  BudgetQuota?: string;
  /** 提醒类型。枚举值:BUDGET 预算提醒,WAVE 波动提醒. */
  AlarmType?: string | null;
  /** 消息内容 */
  MessageContent?: string | null;
  /** 发送时间 */
  SendTime?: number | null;
  /** 创建时间 */
  CreateTime?: number | null;
}

/** 预算提醒 */
declare interface BudgetSendInfoDto {
  /** 通知周期,逗号隔开。枚举值:周一:1,周二:2,周天:7 */
  WeekDays?: number[] | null;
  /** 接收类型。枚举值:UIN 默认模式,USER 用户,GROUP 用户组。 */
  ReceiverType?: string | null;
  /** 发送接收窗口HH:mm:ss */
  EndTime?: string | null;
  /** 预算配置id（预算名称） */
  BudgetId?: number | null;
  /** 接收渠道,逗号隔开;枚举值:TITLE 标题，SITE 站内信,EMAIL 邮件,SMS 短信,WECHAT 微信,VOICE 语音,QYWX 企业微信; */
  NoticeWays?: string[] | null;
  /** 发送开始窗口HH:mm:ss */
  StartTime?: string | null;
  /** id */
  Id?: string | null;
  /** 用户id,用户组id */
  ReceiverIds?: number[] | null;
}

/** 预算阈值提醒信息 */
declare interface BudgetWarn {
  /** ACTUAL 实际金额，FORECAST 预测金额 */
  WarnType: string;
  /** PERCENTAGE 预算金额的百分比，ABS 固定值 */
  CalType: string;
  /** 阈值（大于等于0） */
  ThresholdValue: string;
}

/** 产品汇总信息 */
declare interface BusinessSummaryInfo {
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName?: string;
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
  TransferPayAmount?: string;
}

/** 按产品汇总产品详情 */
declare interface BusinessSummaryOverviewItem {
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品，例如：云服务器 CVM */
  BusinessCodeName?: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio?: string;
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 账单月份，格式2019-08 */
  BillMonth?: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost?: string;
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
  PayMode?: string;
  /** 付费模式名称 */
  PayModeName?: string;
}

/** 项目过滤条件 */
declare interface ConditionProject {
  /** 项目ID */
  ProjectId?: string;
  /** 项目名称 */
  ProjectName?: string;
}

/** 地域过滤条件 */
declare interface ConditionRegion {
  /** 地域ID */
  RegionId?: string;
  /** 地域名称 */
  RegionName?: string;
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
  BusinessCode?: string;
  /** 产品名称 */
  BusinessCodeName?: string;
  /** 折后总价 */
  RealTotalCost?: string;
  /** 费用趋势 */
  Trend?: ConsumptionSummaryTrend;
  /** 现金 */
  CashPayAmount?: string;
  /** 赠送金 */
  IncentivePayAmount?: string;
  /** 代金券 */
  VoucherPayAmount?: string;
  /** 分成金 */
  TransferPayAmount?: string;
  /** 地域名称（仅在地域汇总总展示） */
  RegionName?: string;
}

/** 消耗按项目汇总详情 */
declare interface ConsumptionProjectSummaryDataItem {
  /** 项目ID */
  ProjectId?: string;
  /** 项目名称 */
  ProjectName?: string;
  /** 折后总价 */
  RealTotalCost?: string;
  /** 趋势 */
  Trend?: ConsumptionSummaryTrend;
  /** 产品消耗详情 */
  Business?: ConsumptionBusinessSummaryDataItem[];
  /** 现金 */
  CashPayAmount?: string;
  /** 赠送金 */
  IncentivePayAmount?: string;
  /** 代金券 */
  VoucherPayAmount?: string;
  /** 分成金 */
  TransferPayAmount?: string;
}

/** 消耗按地域汇总详情 */
declare interface ConsumptionRegionSummaryDataItem {
  /** 地域ID */
  RegionId?: string;
  /** 地域名称 */
  RegionName?: string;
  /** 折后总价 */
  RealTotalCost?: string;
  /** 趋势 */
  Trend?: ConsumptionSummaryTrend;
  /** 产品消费详情 */
  Business?: ConsumptionBusinessSummaryDataItem[];
  /** 现金 */
  CashPayAmount?: string;
  /** 代金券 */
  VoucherPayAmount?: string;
  /** 赠送金 */
  IncentivePayAmount?: string;
  /** 分成金 */
  TransferPayAmount?: string;
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
  ResourceId?: string;
  /** 资源名称 */
  ResourceName?: string;
  /** 折后总价 */
  RealTotalCost?: string;
  /** 现金花费 */
  CashPayAmount?: string;
  /** 项目ID */
  ProjectId?: string;
  /** 项目名称 */
  ProjectName?: string;
  /** 地域ID */
  RegionId?: string;
  /** 地域名称 */
  RegionName?: string;
  /** 付费模式 */
  PayMode?: string;
  /** 付费模式名称 */
  PayModeName?: string;
  /** 产品名称代码 */
  BusinessCode?: string;
  /** 产品名称 */
  BusinessCodeName?: string;
  /** 消耗类型 */
  ConsumptionTypeName?: string;
  /** 折前价 */
  RealCost?: string;
  /** 费用起始时间 */
  FeeBeginTime?: string;
  /** 费用结束时间 */
  FeeEndTime?: string;
  /** 天数 */
  DayDiff?: string;
  /** 每日消耗 */
  DailyTotalCost?: string;
  /** 订单号 */
  OrderId?: string;
  /** 代金券 */
  VoucherPayAmount?: string;
  /** 赠送金 */
  IncentivePayAmount?: string;
  /** 分成金 */
  TransferPayAmount?: string;
  /** 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
  /** 使用者UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ） */
  OperateUin?: string;
  /** 子产品编码 */
  ProductCode?: string;
  /** 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1 */
  ProductCodeName?: string;
  /** 地域类型 */
  RegionType?: string;
  /** 地域类型名称 */
  RegionTypeName?: string;
  /** 扩展字段1 */
  Extend1?: string;
  /** 扩展字段2 */
  Extend2?: string;
  /** 扩展字段3 */
  Extend3?: string;
  /** 扩展字段4 */
  Extend4?: string;
  /** 扩展字段5 */
  Extend5?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 实例类型名称 */
  InstanceTypeName?: string;
  /** 扣费时间：结算扣费时间 */
  PayTime?: string;
  /** 可用区：资源所属可用区，如广州三区 */
  ZoneName?: string;
  /** 配置描述 */
  ComponentConfig?: string;
  /** 标签信息 */
  Tags?: string;
}

/** 消耗汇总详情 */
declare interface ConsumptionSummaryTotal {
  /** 折后总价 */
  RealTotalCost?: string;
}

/** 消耗费用趋势 */
declare interface ConsumptionSummaryTrend {
  /** 趋势类型，upward上升/downward下降/none无 */
  Type?: string;
  /** 趋势值，Type为none是该字段值为null */
  Value?: string;
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
  ComponentCodeName?: string;
  /** 组件名称 */
  ItemCodeName?: string;
  /** 刊例价 */
  SinglePrice?: string;
  /** 刊例价单位 */
  PriceUnit?: string;
  /** 用量 */
  UsedAmount?: string;
  /** 用量单位 */
  UsedAmountUnit?: string;
  /** 原价 */
  Cost?: string;
  /** 折扣 */
  Discount?: string;
  /** 折后价 */
  RealCost?: string;
  /** 代金券支付金额 */
  VoucherPayAmount?: string;
  /** 现金支付金额 */
  CashPayAmount?: string;
  /** 赠送金支付金额 */
  IncentivePayAmount?: string;
}

/** 消耗明细数据类型 */
declare interface CostDetail {
  /** 支付者uin */
  PayerUin?: string;
  /** 产品名称 */
  BusinessCodeName?: string;
  /** 子产品名称 */
  ProductCodeName?: string;
  /** 计费模式名称 */
  PayModeName?: string;
  /** 项目名称 */
  ProjectName?: string;
  /** 区域名称 */
  RegionName?: string;
  /** 地区名称 */
  ZoneName?: string;
  /** 资源id */
  ResourceId?: string;
  /** 资源名称 */
  ResourceName?: string;
  /** 类型名称 */
  ActionTypeName?: string;
  /** 订单id */
  OrderId?: string;
  /** 交易id */
  BillId?: string;
  /** 费用开始时间 */
  FeeBeginTime?: string;
  /** 费用结束时间 */
  FeeEndTime?: string;
  /** 组件明细 */
  ComponentSet?: CostComponentSet[];
  /** 子产品名称代码 */
  ProductCode?: string;
  /** 标签信息 */
  Tags?: BillTagInfo[];
}

/** 获取预算管理的基础信息分页数据 */
declare interface DataForBudgetInfoPage {
  /** 分页 */
  Pages?: number;
  /** 分页大小 */
  Size?: number;
  /** 总量 */
  Total?: number;
  /** 查询数据列表 */
  Records?: BudgetExtend[] | null;
  /** 当前页 */
  Current?: number;
}

/** 预算修改记录信息分页数据 */
declare interface DataForBudgetOperationLogPage {
  /** 分页 */
  Pages?: number;
  /** 分页大小 */
  Size?: number;
  /** 总量 */
  Total?: number;
  /** 查询数据列表 */
  Records?: BudgetOperationLogEntity[] | null;
  /** 当前页 */
  Current?: number;
}

/** 订单数据对象 */
declare interface Deal {
  /** 订单号 */
  OrderId?: string;
  /** 订单的状态 1：未支付 2：已支付3：发货中 4：已发货 5：发货失败 6：已退款 7：已关单 8：订单过期 9：订单已失效 10：产品已失效 11：代付拒绝 12：支付中 */
  Status?: number;
  /** 支付者 */
  Payer?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 创建人 */
  Creator?: string;
  /** 实际支付金额（分） */
  RealTotalCost?: number;
  /** 代金券抵扣金额（分） */
  VoucherDecline?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 产品分类ID */
  GoodsCategoryId?: number;
  /** 产品详情 */
  ProductInfo?: ProductInfo[];
  /** 时长 */
  TimeSpan?: number;
  /** 时间单位 */
  TimeUnit?: string;
  /** 货币单位 */
  Currency?: string;
  /** 折扣率 */
  Policy?: number;
  /** 单价（分） */
  Price?: number;
  /** 原价（分） */
  TotalCost?: number;
  /** 产品编码 */
  ProductCode?: string;
  /** 子产品编码 */
  SubProductCode?: string;
  /** 大订单号 */
  BigDealId?: string;
  /** 退费公式 */
  Formula?: string;
  /** 退费涉及订单信息 */
  RefReturnDeals?: string;
  /** 付费模式：prePay 预付费 postPay后付费 riPay预留实例 */
  PayMode?: string;
  /** 交易类型modifyNetworkMode 调整带宽模式modifyNetworkSize 调整带宽大小refund 退款downgrade 降配upgrade 升配renew 续费purchase 购买preMoveOut 包年包月迁出资源preMoveIn 包年包月迁入资源preToPost 预付费转后付费postMoveOut 按量计费迁出资源postMoveIn 按量计费迁入资源 */
  Action?: string;
  /** 产品编码中文名称 */
  ProductName?: string;
  /** 子产品编码中文名称 */
  SubProductName?: string;
  /** 订单对应的资源id, 查询参数Limit超过200，将返回null */
  ResourceId?: string[] | null;
  /** 订单对应的可用区Id */
  ZoneCode?: string;
}

/** 计量标准接入类产品支持API接口获取用量明细返回数据结构 */
declare interface DescribeDosageDetail {
  /** 日期 */
  Date?: string;
  /** 账号 ID 是用户在腾讯云的唯一账号标识 */
  Uin?: string;
  /** 用量统计类型 */
  DosageType?: string;
  /** 产品编码 */
  ProductCode?: string;
  /** 子产品编码 */
  SubProductCode?: string;
  /** 组件类型编码 */
  BillingItemCode?: string;
  /** 组件编码 */
  SubBillingItemCode?: string;
  /** 产品名称 */
  ProductCodeName?: string;
  /** 子产品名称 */
  SubProductCodeName?: string;
  /** 组件类型 */
  BillingItemCodeName?: string;
  /** 组件 */
  SubBillingItemCodeName?: string;
  /** 用量单位 */
  DosageUnit?: string;
  /** 用量起始时间 */
  DosageBeginTime?: string;
  /** 用量截止时间 */
  DosageEndTime?: string;
  /** 标准用量 */
  DosageValue?: number;
  /** 抵扣用量 */
  DeductValue?: number;
  /** 抵扣余量 */
  RemainValue?: number;
  /** sdkAppId */
  SdkAppId?: string;
  /** 其他信息 */
  AttrStr?: JsonObject[];
  /** 用量模板名称 */
  SheetName?: string[];
}

/** 由时间和值组成的数据结构 */
declare interface DetailPoint {
  /** 时间 */
  Time?: string;
  /** 值 */
  Value?: string;
}

/** 由域名和使用明细组成的数据结构 */
declare interface DetailSet {
  /** 域名 */
  Domain?: string;
  /** 使用数据明细 */
  DetailPoints?: DetailPoint[];
  /** 实例ID */
  InstanceID?: string;
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
  Tags?: BillTagInfo[];
  /** 产品编码 */
  BusinessCode?: string;
  /** 子产品编码 */
  ProductCode?: string;
  /** 交易类型编码 */
  ActionType?: string;
  /** 地域ID */
  RegionId?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息 */
  PriceInfo?: string[];
  /** 关联交易单据ID：和本笔交易关联单据 ID，如，冲销订单，记录原订单、重结订单，退费单记录对应的原购买订单号 */
  AssociatedOrder?: BillDetailAssociatedOrder;
  /** 计算说明：特殊交易类型计费结算的详细计算说明，如退费及变配 */
  Formula?: string;
  /** 计费规则：各产品详细的计费规则官网说明链接 */
  FormulaUrl?: string;
  /** 账单归属月 */
  BillMonth?: string;
  /** 账单归属日 */
  BillDay?: string;
}

/** 不适用商品信息 */
declare interface ExcludedProducts {
  /** 不适用商品名称 */
  GoodsName?: string;
  /** postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。 */
  PayMode?: string;
}

/** 资源归集汇总 */
declare interface GatherResourceSummary {
  /** 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识 */
  PayerUin?: string;
  /** 使用者 UIN：实际使用资源的账号 ID */
  OwnerUin?: string;
  /** 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID） */
  OperateUin?: string;
  /** 实例类型编码 */
  InstanceType?: string;
  /** 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-” */
  InstanceTypeName?: string;
  /** 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  ResourceId?: string;
  /** 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名 */
  ResourceName?: string;
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 分账单元名称 */
  TreeNodeUniqKeyName?: string;
  /** 资源命中公摊规则ID */
  RuleId?: number;
  /** 资源命中公摊规则名称 */
  RuleName?: string;
  /** 产品编码 */
  BusinessCode?: string;
  /** 产品名称：用户所采购的各类云产品 */
  BusinessCodeName?: string;
  /** 组件名称编码 */
  ItemCode?: string;
  /** 组件名称：用户购买的产品或服务，所包含的具体组件 */
  ItemCodeName?: string;
  /** 地域ID */
  RegionId?: number;
  /** 地域名称：资源所属地域 */
  RegionName?: string;
  /** 分账标签：资源绑定的标签 */
  Tag?: BillTag[];
  /** 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率 */
  RealTotalCost?: string;
  /** 现金账户支出(元)：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 赠送账户支出(元)：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 分成账户支出(元)：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 费用归集类型：费用来源类型，分摊、归集、未分配0 - 分摊1 - 归集-1 - 未分配 */
  AllocationType?: number;
  /** 当前归属单元信息 */
  BelongTreeNodeUniqKey?: AllocationTreeNode;
  /** 当前资源命中公摊规则信息 */
  BelongRule?: AllocationRule;
  /** 其它归属单元信息 */
  OtherTreeNodeUniqKeys?: AllocationTreeNode[];
  /** 其他命中规则信息 */
  OtherRules?: AllocationRule[];
  /** 项目ID */
  ProjectId?: number;
  /** 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目 */
  ProjectName?: string;
  /** 子产品编码 */
  ProductCode?: string;
  /** 子产品名称：用户采购的具体产品细分类型 */
  ProductCodeName?: string;
  /** 计费模式编码 */
  PayMode?: string;
  /** 计费模式：资源的计费模式，区分为包年包月和按量计费 */
  PayModeName?: string;
  /** 交易类型编码 */
  ActionType?: string;
  /** 交易类型：明细交易类型 */
  ActionTypeName?: string;
  /** 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名 */
  SplitItemId?: string | null;
  /** 分拆项名称：涉及分拆产品的分拆后的分拆项 */
  SplitItemName?: string | null;
}

/** 归集规则列表 */
declare interface GatherRuleSummary {
  /** 分账规则表达式 */
  RuleDetail: AllocationRuleExpression;
}

/** Json对象 */
declare interface JsonObject {
  /** key值 */
  Key?: string;
  /** value值 */
  Value?: string;
}

/** 字段排序 */
declare interface OrderDto {
  /** 字段 */
  Column: string | null;
  /** 是否升序 */
  Asc: boolean | null;
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
  RegionId?: string;
  /** 地域名称：资源所属地域，例如华南地区（广州） */
  RegionName?: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio?: string;
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 账单月份，格式2019-08 */
  BillMonth?: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost?: string;
}

/** 账单多维度汇总消费详情 */
declare interface SummaryDetail {
  /** 账单维度编码 */
  GroupKey?: string;
  /** 账单维度值 */
  GroupValue?: string;
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
  TransferPayAmount?: string;
  /** 产品汇总信息 */
  Business?: BusinessSummaryInfo[];
}

/** 总数 */
declare interface SummaryTotal {
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost?: string;
}

/** 标签信息 */
declare interface TagDataInfo {
  /** 分账标签键 */
  TagKey?: string;
  /** 标签类型，0普通标签，1分账标签 */
  Status?: number;
  /** 设置分账标签时间，普通标签不返回 */
  UpdateTime?: string;
}

/** 按标签汇总消费详情 */
declare interface TagSummaryOverviewItem {
  /** 标签值 */
  TagValue?: string;
  /** 费用所占百分比，两位小数 */
  RealTotalCostRatio?: string;
  /** 优惠后总价 */
  RealTotalCost?: string;
  /** 现金账户支出：通过现金账户支付的金额 */
  CashPayAmount?: string;
  /** 赠送账户支出：使用赠送金支付的金额 */
  IncentivePayAmount?: string;
  /** 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额 */
  VoucherPayAmount?: string;
  /** 分成金账户支出：通过分成金账户支付的金额 */
  TransferPayAmount?: string;
  /** 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。 */
  TotalCost?: string;
}

/** 预算管理自定义费用范围，tag 参数 */
declare interface TagsForm {
  /** key */
  TagKey?: string | null;
  /** value */
  TagValue?: string[] | null;
}

/** 临时额度详情 */
declare interface UinTempAmountModel {
  /** 用户uin */
  Uin?: string;
  /** 临时额度 */
  TempAmount?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

/** 购买商品信息 */
declare interface UsageDetails {
  /** 商品名 */
  ProductName?: string;
  /** 商品细节 */
  SubProductName?: string;
  /** 产品码 */
  ProductCode?: string;
  /** 子产品码 */
  SubProductCode?: string;
  /** 计费项码 */
  BillingItemCode?: string;
  /** 计费细项码 */
  SubBillingItemCode?: string;
  /** 产品英文名 */
  ProductEnName?: string;
  /** 子产品英文名 */
  SubProductEnName?: string;
  /** 结算周期 */
  CalcUnit?: string;
  /** payMode为prepay 且 payScene为common的情况下存在 */
  Action?: string;
}

/** 使用记录 */
declare interface UsageRecords {
  /** 使用金额（微分） */
  UsedAmount?: number;
  /** 使用时间 */
  UsedTime?: string;
  /** 使用记录细节 */
  UsageDetails?: UsageDetails[];
  /** 付费模式 */
  PayMode?: string;
  /** 查询的券id */
  VoucherId?: string;
  /** 交易场景：（adjust：调账、common：正常交易场景） */
  PayScene?: string;
  /** 唯一id,对应交易:预付费的dealName,调账/后付费的outTradeNo */
  SeqId?: string;
}

/** 代金券相关信息 */
declare interface VoucherInfos {
  /** 代金券拥有者 */
  OwnerUin?: string;
  /** 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue */
  Status?: string;
  /** 代金券面额（微分） */
  NominalValue?: number;
  /** 剩余金额（微分） */
  Balance?: number;
  /** 代金券id */
  VoucherId?: string;
  /** postPay后付费/prePay预付费/riPay预留实例/空字符串或者'*'表示全部模式 */
  PayMode?: string;
  /** 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景 */
  PayScene?: string;
  /** 有效期生效时间 */
  BeginTime?: string;
  /** 有效期截止时间 */
  EndTime?: string;
  /** 适用商品信息 */
  ApplicableProducts?: ApplicableProducts;
  /** 不适用商品信息 */
  ExcludedProducts?: ExcludedProducts[];
  /** 使用说明/批次备注 */
  PolicyRemark?: string;
  /** 发券时间 */
  CreateTime?: string;
}

/** 阈值波动预警信息 */
declare interface WaveThresholdForm {
  /** ACTUAL 实际金额，FORECAST 预测金额 */
  WarnType?: string | null;
  /** 波动阈值（大于等于0） */
  Threshold?: string | null;
  /** 告警类型：chain 环比，yoy 同比，fix 固定值（支持类型：日环比 chain day，日同比周维度 chain weekday，日同比月维度 yoy day，日固定值 fix day，月环比 chain month，月固定值 fix month） */
  MetaType?: string | null;
  /** 告警维度：day 日，month 月，weekday 周（支持类型：日环比 chain day，日同比周维度 chain weekday，日同比月维度 yoy day，日固定值 fix day，月环比 chain month，月固定值 fix month） */
  PeriodType?: string | null;
}

declare interface BudgetInfoApiResponse {
  /** 预算项目id */
  BudgetId?: string;
  /** 更新预算时间 */
  UpdateTime?: string;
}

declare interface CreateAllocationRuleRequest {
  /** 公摊规则列表 */
  RuleList: AllocationRulesSummary;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface CreateAllocationRuleResponse {
  /** 新增公摊规则ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAllocationTagRequest {
  /** 用户分账标签键 */
  TagKey: string[];
}

declare interface CreateAllocationTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAllocationUnitRequest {
  /** 新增分账单元父节点ID */
  ParentId: number;
  /** 新增分账单元名称 */
  Name?: string;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface CreateAllocationUnitResponse {
  /** 新增分账单元ID */
  Id?: number;
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBudgetRequest {
  /** 预算名称 */
  BudgetName: string;
  /** DAY 天，MONTH 月度，QUARTER 季度 ，YEAR 年度 */
  CycleType: string;
  /** 有效期起始时间 2025-01-01(周期: 天) / 2025-01（周期: 月） */
  PeriodBegin: string;
  /** 有效期结束时间 2025-12-01(周期：天) / 2025-12（周期：月） */
  PeriodEnd: string;
  /** FIX 固定预算，CYCLE 计划预算 */
  PlanType: string;
  /** 预算值额度预算计划类型为FIX(固定预算)时传定值；预算计划类型为CYCLE(计划预算)时传[{"dateDesc":"2025-07","quota":"1000"},{"dateDesc":"2025-08","quota":"2000"}]； */
  BudgetQuota: string;
  /** BILL 系统账单，CONSUMPTION 消耗账单 */
  BillType: string;
  /** COST 原价，REAL_COST 实际费用，CASH 现金，INCENTIVE 赠送金，VOUCHER 代金券，TRANSFER 分成金，TAX 税，AMOUNT_BEFORE_TAX 现金支付(税前) */
  FeeType: string;
  /** 阈值提醒 */
  WarnJson: BudgetWarn[];
  /** 预算备注 */
  BudgetNote?: string;
  /** 预算维度范围条件 */
  DimensionsRange?: BudgetConditionsForm;
  /** 波动提醒 */
  WaveThresholdJson?: WaveThresholdForm[];
}

declare interface CreateBudgetResponse {
  /** 创建预算返回信息 */
  Data?: BudgetInfoApiResponse;
  /** create success */
  Message?: string;
  /** 返回码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGatherRuleRequest {
  /** 规则所属分账单元ID */
  Id: number;
  /** 归集规则详情 */
  RuleList: GatherRuleSummary;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface CreateGatherRuleResponse {
  /** 归集规则ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAllocationRuleRequest {
  /** 所删除公摊规则ID */
  RuleId: number;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface DeleteAllocationRuleResponse {
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

declare interface DeleteAllocationUnitRequest {
  /** 所删除分账单元ID */
  Id: number;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface DeleteAllocationUnitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBudgetRequest {
  /** 预算项目id */
  BudgetIds: string[];
}

declare interface DeleteBudgetResponse {
  /** 返回删除预算项目id */
  Data?: string[];
  /** 信息提示 */
  Message?: string;
  /** 返回码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGatherRuleRequest {
  /** 所删除归集规则ID */
  RuleId: number;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface DeleteGatherRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountBalanceRequest {
  /** 是否查询临时额度 */
  TempCredit?: boolean;
}

declare interface DescribeAccountBalanceResponse {
  /** 接口做过变更,为兼容老接口,本字段与RealBalance相同,为当前真实可用余额,单位 分 */
  Balance?: number;
  /** 查询的用户Uin */
  Uin?: number;
  /** 当前真实可用余额,单位 分 */
  RealBalance?: number;
  /** 现金账户余额,单位 分 */
  CashAccountBalance?: number;
  /** 收益转入账户余额,单位 分 */
  IncomeIntoAccountBalance?: number;
  /** 赠送账户余额,单位 分 */
  PresentAccountBalance?: number;
  /** 冻结金额,单位 分 */
  FreezeAmount?: number;
  /** 欠费金额,单位 分 */
  OweAmount?: number;
  /** 是否允许欠费消费 */
  IsAllowArrears?: boolean;
  /** 是否限制信用额度 */
  IsCreditLimited?: boolean;
  /** 信用额度,单位 分 */
  CreditAmount?: number;
  /** 可用信用额度,单位 分 */
  CreditBalance?: number;
  /** 真实可用信用额度,单位 分 */
  RealCreditBalance?: number;
  /** 临时额度，单位 分 */
  TempCredit?: number;
  /** 临时额度详情 */
  TempAmountInfoList?: UinTempAmountModel[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocateConditionsRequest {
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
}

declare interface DescribeAllocateConditionsResponse {
  /** 产品筛选列表 */
  Business?: BillBusinessLink[];
  /** 子产品筛选列表 */
  Product?: BillProduct[];
  /** 组件名称筛选列表 */
  Item?: BillItem[];
  /** 地域筛选列表 */
  Region?: BillRegion[];
  /** 实例类型筛选列表 */
  InstanceType?: BillInstanceType[];
  /** 计费模式筛选列表 */
  PayMode?: BillPayMode[];
  /** 项目筛选列表 */
  Project?: BillProject[];
  /** 标签筛选列表 */
  Tag?: BillTag[];
  /** 使用者 UIN 筛选列表 */
  OwnerUin?: BillOwnerUin[];
  /** 操作者 UIN 筛选列表 */
  OperateUin?: BillOperateUin[];
  /** 交易类型筛选列表 */
  ActionType?: BillActionType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationBillConditionsRequest {
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
  /** 分账单元唯一标识，用作筛选 */
  TreeNodeUniqKeys?: string[];
  /** 日期 */
  BillDates?: string[];
  /** 产品编码 */
  BusinessCodes?: string[];
  /** 使用者UIN */
  OwnerUins?: string[];
  /** 操作者UIN */
  OperateUins?: string[];
  /** 计费模式编码 */
  PayModes?: string[];
  /** 交易类型编码 */
  ActionTypes?: string[];
  /** 子产品编码 */
  ProductCodes?: string[];
  /** 地域ID */
  RegionIds?: string[];
  /** 可用区ID */
  ZoneIds?: string[];
  /** 实例类型编码 */
  InstanceTypes?: string[];
  /** 标签 */
  Tag?: string[];
  /** 组件类型编码 */
  ComponentCodes?: string[];
  /** 组件名称编码 */
  ItemCodes?: string[];
  /** 模糊搜索条件 */
  SearchKey?: string;
  /** 项目id */
  ProjectIds?: number[];
  /** 费用归集类型 */
  AllocationType?: number[];
}

declare interface DescribeAllocationBillConditionsResponse {
  /** 产品筛选列表 */
  Business?: BillBusiness[];
  /** 子产品筛选列表 */
  Product?: BillProduct[];
  /** 组件名称筛选列表 */
  Item?: BillItem[];
  /** 地域筛选列表 */
  Region?: BillRegion[];
  /** 实例类型筛选列表 */
  InstanceType?: BillInstanceType[];
  /** 计费模式筛选列表 */
  PayMode?: BillPayMode[];
  /** 项目筛选列表 */
  Project?: BillProject[];
  /** 标签筛选列表 */
  Tag?: BillTag[];
  /** 使用者 UIN 筛选列表 */
  OwnerUin?: BillOwnerUin[];
  /** 操作者 UIN 筛选列表 */
  OperateUin?: BillOperateUin[];
  /** 日期筛选列表 */
  BillDay?: BillDays[];
  /** 交易类型筛选列表 */
  ActionType?: BillActionType[];
  /** 组件类型筛选列表 */
  Component?: BillComponent[];
  /** 可用区筛选列表 */
  Zone?: BillZoneId[];
  /** 分账单元筛选列表 */
  AllocationTreeNode?: AllocationTreeNode[];
  /** 分账标签键 */
  TagKey?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationBillDetailRequest {
  /** 数量，最大值为1000 */
  Limit: number;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推 */
  Offset: number;
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
  /** 分账单元唯一标识，用作筛选 */
  TreeNodeUniqKeys?: string[];
  /** 排序字段，枚举值如下：RiTimeSpan - 预留实例抵扣时长ExtendPayAmount1 - 预留实例抵扣组件原价RealCost - 折后总价CashPayAmount - 现金金额VoucherPayAmount - 代金券金额IncentivePayAmount - 赠送金金额TransferPayAmount -分成金金额Cost - 组件原价 */
  Sort?: string;
  /** 排序类型，枚举值如下：asc - 升序desc - 降序 */
  SortType?: string;
  /** 产品编码，用作筛选 */
  BusinessCodes?: string[];
  /** 使用者UIN，用作筛选 */
  OwnerUins?: string[];
  /** 操作者UIN，用作筛选 */
  OperateUins?: string[];
  /** 计费模式编码，用作筛选 */
  PayModes?: string[];
  /** 交易类型编码，用作筛选 */
  ActionTypes?: string[];
  /** 子产品编码，用作筛选 */
  ProductCodes?: string[];
  /** 地域ID，用作筛选 */
  RegionIds?: string[];
  /** 可用区ID，用作筛选 */
  ZoneIds?: string[];
  /** 实例类型编码，用作筛选 */
  InstanceTypes?: string[];
  /** 标签，用作筛选 */
  Tag?: string[];
  /** 组件类型编码，用作筛选 */
  ComponentCodes?: string[];
  /** 组件名称编码，用作筛选 */
  ItemCodes?: string[];
  /** 模糊搜索：支持标签、资源id、资源别名 */
  SearchKey?: string;
  /** 项目ID，用作筛选 */
  ProjectIds?: number[];
}

declare interface DescribeAllocationBillDetailResponse {
  /** 总条数 */
  RecordNum?: number;
  /** 分账账单概览金额汇总 */
  Total?: AllocationOverviewTotal;
  /** 分账账单明细 */
  Detail?: AllocationDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationMonthOverviewRequest {
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
}

declare interface DescribeAllocationMonthOverviewResponse {
  /** 分账账单月概览详情 */
  Detail?: AllocationOverviewNode[];
  /** 分账账单概览金额汇总 */
  Total?: AllocationOverviewTotal;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationOverviewRequest {
  /** 数量，最大值为1000 */
  Limit: number;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推 */
  Offset: number;
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
  /** 统计周期，枚举值如下month - 月day - 日 */
  PeriodType?: string;
  /** 分账单元唯一标识，用作筛选 */
  TreeNodeUniqKeys?: string[];
  /** 排序字段，枚举值如下： GatherCashPayAmount - 归集费用(现金)GatherVoucherPayAmount- 归集费用(优惠券)GatherIncentivePayAmount - 归集费用(赠送金)GatherTransferPayAmount - 归集费用(分成金)AllocateCashPayAmount - 分摊费用(现金)AllocateVoucherPayAmount - 分摊费用(优惠券)AllocateIncentivePayAmount - 分摊费用(赠送金)AllocateTransferPayAmount - 分摊费用(分成金)TotalCashPayAmount - 合计费用(现金)TotalVoucherPayAmount - 合计费用(优惠券)TotalIncentivePayAmount - 合计费用(赠送金)TotalTransferPayAmount - 合计费用(分成金)GatherRealCost - 归集费用(折后总额)AllocateRealCost - 分摊费用(折后总额)RealTotalCost - 合计费用(折后总额)Ratio - 占比(折后总额) */
  Sort?: string;
  /** 排序类型，枚举值如下：asc - 升序desc - 降序 */
  SortType?: string;
  /** 日期，用作筛选 */
  BillDates?: string[];
}

declare interface DescribeAllocationOverviewResponse {
  /** 总条数 */
  RecordNum?: number;
  /** 分账账单概览金额汇总 */
  Total?: AllocationOverviewTotal;
  /** 分账概览明细 */
  Detail?: AllocationOverviewDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationRuleDetailRequest {
  /** 所查询公摊规则ID */
  RuleId: number;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface DescribeAllocationRuleDetailResponse {
  /** 公摊规则ID */
  Id?: number;
  /** 公摊规则所属UIN */
  Uin?: string;
  /** 公摊规则名称 */
  Name?: string;
  /** 公摊策略类型，枚举值如下：1 - 自定义分摊占比 2 - 等比分摊 3 - 按占比分摊 */
  Type?: number;
  /** 公摊规则表达式 */
  RuleDetail?: AllocationRuleExpression;
  /** 公摊比例表达式，Type为1和2时返回 */
  RatioDetail?: AllocationRationExpression[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationRuleSummaryRequest {
  /** 每次获取数据量，最大值1000 */
  Limit: number;
  /** 分页偏移量 */
  Offset: number;
  /** 月份，不传默认当前月 */
  Month?: string;
  /** 公摊策略类型，用于筛选。枚举值如下： 1 - 自定义分摊占比 2 - 等比分摊 3 - 按占比分摊 */
  Type?: number;
  /** 公摊规则名称或分账单元名称，用于模糊筛选。 */
  Name?: string;
}

declare interface DescribeAllocationRuleSummaryResponse {
  /** 公摊规则表达式 */
  RuleList?: AllocationRuleOverview[];
  /** 规则总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationSummaryByBusinessRequest {
  /** 数量，最大值为1000 */
  Limit: number;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推 */
  Offset: number;
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
  /** 统计周期，枚举值如下month - 月day - 日 */
  PeriodType?: string;
  /** 分账单元唯一标识，用作筛选 */
  TreeNodeUniqKeys?: string[];
  /** 排序类型，枚举值如下：asc - 升序desc - 降序 */
  SortType?: string;
  /** 排序字段，枚举值如下：GatherCashPayAmount - 归集费用(现金)GatherVoucherPayAmount- 归集费用(优惠券)GatherIncentivePayAmount - 归集费用(赠送金)GatherTransferPayAmount - 归集费用(分成金)AllocateCashPayAmount - 分摊费用(现金)AllocateVoucherPayAmount - 分摊费用(优惠券)AllocateIncentivePayAmount - 分摊费用(赠送金)AllocateTransferPayAmount - 分摊费用(分成金)TotalCashPayAmount - 合计费用(现金)TotalVoucherPayAmount - 合计费用(优惠券)TotalIncentivePayAmount - 合计费用(赠送金)TotalTransferPayAmount - 合计费用(分成金)GatherRealCost - 归集费用(折后总额)AllocateRealCost - 分摊费用(折后总额)RealTotalCost - 合计费用(折后总额)BusinessCode - 产品代码Ratio - 占比(折后总额)Trend - 环比(折后总额) */
  Sort?: string;
  /** 日期，用作筛选，PeriodType=day时可传 */
  BillDates?: string[];
  /** 产品编码，用作筛选 */
  BusinessCodes?: string[];
  /** 模糊搜索条件 */
  SearchKey?: string;
}

declare interface DescribeAllocationSummaryByBusinessResponse {
  /** 总条数 */
  RecordNum?: number;
  /** 分账账单概览金额汇总 */
  Total?: AllocationOverviewTotal;
  /** 分账账单按产品汇总明细 */
  Detail?: AllocationSummaryByBusiness[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationSummaryByItemRequest {
  /** 数量，最大值为1000 */
  Limit: number;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推 */
  Offset: number;
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
  /** 统计周期，枚举值如下month - 月day - 日 */
  PeriodType?: string;
  /** 分账单元唯一标识，用作筛选 */
  TreeNodeUniqKeys?: string[];
  /** 排序字段，枚举值如下：RiTimeSpan - 预留实例抵扣时长ExtendPayAmount1 - 预留实例抵扣组件原价RealCost - 折后总价CashPayAmount - 现金金额VoucherPayAmount - 代金券金额IncentivePayAmount - 赠送金金额TransferPayAmount -分成金金额Cost - 组件原价 */
  Sort?: string;
  /** 排序类型，枚举值如下：asc - 升序desc - 降序 */
  SortType?: string;
  /** 日期，用作筛选 */
  BillDates?: string[];
  /** 产品编码，用作筛选 */
  BusinessCodes?: string[];
  /** 使用者UIN，用作筛选 */
  OwnerUins?: string[];
  /** 操作者UIN，用作筛选 */
  OperateUins?: string[];
  /** 计费模式编码，用作筛选 */
  PayModes?: string[];
  /** 交易类型编码，用作筛选 */
  ActionTypes?: string[];
  /** 子产品编码，用作筛选 */
  ProductCodes?: string[];
  /** 地域ID，用作筛选 */
  RegionIds?: string[];
  /** 可用区ID，用作筛选 */
  ZoneIds?: string[];
  /** 实例类型编码，用作筛选 */
  InstanceTypes?: string[];
  /** 标签，用作筛选 */
  Tag?: string[];
  /** 组件类型编码，用作筛选 */
  ComponentCodes?: string[];
  /** 组件名称编码，用作筛选 */
  ItemCodes?: string[];
  /** 模糊搜索：支持标签、资源id、资源别名 */
  SearchKey?: string;
  /** 项目ID，用作筛选 */
  ProjectIds?: number[];
  /** 费用归集类型，枚举值如下：0 - 分摊1 - 归集-1 - 未分配 */
  AllocationType?: number[];
}

declare interface DescribeAllocationSummaryByItemResponse {
  /** 总条数 */
  RecordNum?: number;
  /** 分账账单概览金额汇总 */
  Total?: AllocationOverviewTotal;
  /** 分账账单按组件汇总明细 */
  Detail?: AllocationSummaryByItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationSummaryByResourceRequest {
  /** 数量，最大值为1000 */
  Limit: number;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推 */
  Offset: number;
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
  /** 统计周期，枚举值如下month - 月day - 日 */
  PeriodType?: string;
  /** 分账单元唯一标识，用作筛选 */
  TreeNodeUniqKeys?: string[];
  /** 排序字段，枚举值如下：RiTimeSpan - 预留实例抵扣时长ExtendPayAmount1 - 预留实例抵扣组件原价RealCost - 折后总价CashPayAmount - 现金金额VoucherPayAmount - 代金券金额IncentivePayAmount - 赠送金金额TransferPayAmount -分成金金额Cost - 组件原价 */
  Sort?: string;
  /** 排序类型，枚举值如下：asc - 升序desc - 降序 */
  SortType?: string;
  /** 日期，用作筛选 */
  BillDates?: string[];
  /** 产品编码，用作筛选 */
  BusinessCodes?: string[];
  /** 使用者UIN，用作筛选 */
  OwnerUins?: string[];
  /** 操作者UIN，用作筛选 */
  OperateUins?: string[];
  /** 计费模式编码，用作筛选 */
  PayModes?: string[];
  /** 交易类型编码，用作筛选 */
  ActionTypes?: string[];
  /** 子产品编码，用作筛选 */
  ProductCodes?: string[];
  /** 地域ID，用作筛选 */
  RegionIds?: string[];
  /** 可用区ID，用作筛选 */
  ZoneIds?: string[];
  /** 实例类型编码，用作筛选 */
  InstanceTypes?: string[];
  /** 标签，用作筛选 */
  Tag?: string[];
  /** 模糊搜索：支持标签、资源id、资源别名 */
  SearchKey?: string;
  /** 项目ID，用作筛选 */
  ProjectIds?: number[];
  /** 费用归集类型，枚举值如下：0 - 分摊 1 - 归集 -1 - 未分配 */
  AllocationType?: number[];
}

declare interface DescribeAllocationSummaryByResourceResponse {
  /** 总条数 */
  RecordNum?: number;
  /** 分账账单概览金额汇总 */
  Total?: AllocationOverviewTotal;
  /** 分账账单按资源汇总明细 */
  Detail?: AllocationSummaryByResource[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationTreeRequest {
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface DescribeAllocationTreeResponse {
  /** 分账单元ID */
  Id?: number;
  /** 分账单元名称 */
  Name?: string;
  /** 分账单元唯一标识 */
  TreeNodeUniqKey?: string;
  /** 子树 */
  Children?: AllocationTree[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationTrendByMonthRequest {
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month: string;
  /** 分账单元唯一标识 */
  TreeNodeUniqKey: string;
  /** 产品编码，用作筛选 */
  BusinessCode?: string;
}

declare interface DescribeAllocationTrendByMonthResponse {
  /** 当月费用信息 */
  Current?: AllocationBillTrendDetail;
  /** 之前月份费用信息 */
  Previous?: AllocationBillTrendDetail[];
  /** 费用统计信息 */
  Stat?: AllocationStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllocationUnitDetailRequest {
  /** 所查询分账单元Id */
  Id: number;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface DescribeAllocationUnitDetailResponse {
  /** 分账单元ID */
  Id?: number;
  /** 分账单元所属UIN */
  Uin?: string;
  /** 分账单元名称 */
  Name?: string;
  /** 分账单元父节点ID */
  ParentId?: number;
  /** 源组织名称 */
  SourceName?: string;
  /** 源组织ID */
  SourceId?: string;
  /** 备注说明 */
  Remark?: string;
  /** 分账单元标识 */
  TreeNodeUniqKey?: string;
  /** 若分账单元设置归集规则，返回归集规则ID，若无分账规则，则不返回 */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillAdjustInfoRequest {
  /** 格式：yyyy-MM账单月份，month和timeFrom&timeTo必传一个，如果有传timeFrom&timeTo则month字段无效 */
  Month?: string;
  /** 格式：yyyy-MM-dd开始时间，month和timeFrom&timeTo必传一个，如果有该字段则month字段无效。timeFrom和timeTo必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据 */
  TimeFrom?: string;
  /** 格式：yyyy-MM-dd截止时间，month和timeFrom&timeTo必传一个，如果有该字段则month字段无效。timeFrom和timeTo必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据 */
  TimeTo?: string;
}

declare interface DescribeBillAdjustInfoResponse {
  /** 数据总量 */
  Total?: number;
  /** 明细数据 */
  Data?: AdjustInfoDetail[];
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
  Context?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillDetailRequest {
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推 */
  Offset: number;
  /** 数量，最大值为300 */
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
  Total?: number;
  /** 本次请求的上下文信息，可用于下一次请求的请求参数中，加快查询速度 */
  Context?: string;
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
  /** 账单文件下载链接，有效时长为一天 */
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
  /** 扣费模式，当所选的交易类型为扣费deduct时： all所有扣费类型;trade预付费支付;hour_h按量小时结;hour_d按量日结;hour_m按量月结;decompensate调账扣费;other第三方扣费;panshi 线下项目扣费;offline 线下产品扣费;当所选的交易类型为扣费recharge时： online 在线充值;bank-enterprice 银企直联;offline 线下充值;transfer 分成充值当所选的交易类型为扣费cash时： online 线上提现;offline 线下提现;panshi 赠送金清零当所选的交易类型为扣费advanced时： advanced 垫付充值当所选的交易类型为扣费repay时： panshi 垫付回款当所选的交易类型为扣费block时： other 第三方冻结;hour 按量冻结;month按月冻结当所选的交易类型为扣费return时： compensate 调账补偿;trade 预付费退款当所选的交易类型为扣费unblock时：other 第三方解冻;hour 按量解冻;month 按月解冻 */
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
  /** 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ） */
  OperateUin?: string;
}

declare interface DescribeBillSummaryResponse {
  /** 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可） */
  Ready?: number;
  /** 账单多维度汇总消费详情 */
  SummaryDetail?: SummaryDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBudgetOperationLogRequest {
  /** 页码 */
  PageNo: number;
  /** 每页数目 */
  PageSize: number;
  /** 预算项目id */
  BudgetId: string;
}

declare interface DescribeBudgetOperationLogResponse {
  /** 预算修改记录详情 */
  Data?: DataForBudgetOperationLogPage;
  /** 信息提示 */
  Message?: string;
  /** 返回码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBudgetRemindRecordListRequest {
  /** 页码，整型 */
  PageNo: number;
  /** 每页数目，整型 */
  PageSize: number;
  /** 预算基础信息关联id */
  BudgetId: string;
}

declare interface DescribeBudgetRemindRecordListResponse {
  /** 预算配置属性 */
  Data?: BudgetRemindRecordList;
  /** 错误信息提示 */
  Message?: string | null;
  /** 错误响应码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBudgetRequest {
  /** 页码，整型 */
  PageNo: number;
  /** 每页数目，整型 */
  PageSize: number;
  /** 预算项目id */
  BudgetId?: string;
  /** 预算名称 */
  BudgetName?: string;
  /** EXPIRED失效，ACTIVE生效中， ACTIVATED待生效 */
  BudgetStatus?: string;
  /** DAY天 MONTH月度 QUARTER季度 YEAR年度 */
  CycleTypes?: string[];
}

declare interface DescribeBudgetResponse {
  /** 预算项目详情 */
  Data?: DataForBudgetInfoPage;
  /** 信息提示 */
  Message?: string | null;
  /** 返回码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostDetailRequest {
  /** 数量，最大值为100 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 周期开始时间，查询粒度为天级别，需传入时分秒参数，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通消耗账单后，且距今 18 个月内的数据。 */
  BeginTime?: string;
  /** 周期结束时间，查询粒度为天级别，需传入时分秒参数，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通消耗账单后，且距今 18 个月内的数据。 */
  EndTime?: string;
  /** 是否需要访问列表的总记录数，用于前端分页1-表示需要， 0-表示不需要 */
  NeedRecordNum?: number;
  /** 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通消耗账单的月份，最多可拉取18个月内的数据。 */
  Month?: string;
  /** 查询指定产品信息 */
  ProductCode?: string;
  /** 付费模式 prePay/postPay */
  PayMode?: string;
  /** 查询指定资源信息 */
  ResourceId?: string;
}

declare interface DescribeCostDetailResponse {
  /** 消耗明细 */
  DetailSet?: CostDetail[];
  /** 记录数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostExplorerSummaryRequest {
  /** 周期开始时间，格式为yyyy-mm-dd hh:ii:ss */
  BeginTime: string;
  /** 周期结束时间，格式为yyyy-mm-dd hh:ii:ss */
  EndTime: string;
  /** 账单类型：1-费用账单、2-消耗账单 */
  BillType: string;
  /** 统计周期：日-day，月-month； */
  PeriodType: string;
  /** 分类维度（数据汇总维度），查询分类维度（请使用分类维度code入参）入参枚举值：default=仅总计feeType=费用类型billType=账单类型business=产品product=子产品region=地域zone=可用区actionType=交易类型payMode =计费模式tags=标签project =项目payerUin=支付者账号ownerUin=使用者账号 */
  Dimensions: string;
  /** 费用类型：cost-总费用，totalCost-原价费用 */
  FeeType: string;
  /** 数量，每页最大值为100 */
  PageSize: number;
  /** 起始页，当PageNo=1表示第一页， PageNo=2表示第二页，依次类推。 */
  PageNo: number;
  /** 分账标签值 */
  TagKeyStr?: string;
  /** 是否需要筛选框， 1-表示需要， 0-表示不需要，若不传默认不需要。 */
  NeedConditionValue?: string;
  /** 筛选参数 */
  Conditions?: AnalyseConditions;
}

declare interface DescribeCostExplorerSummaryResponse {
  /** 数据条数 */
  Total?: number;
  /** 表头信息 */
  Header?: AnalyseHeaderDetail;
  /** 数据明细 */
  Detail?: AnalyseDetail[];
  /** 数据总计 */
  TotalDetail?: AnalyseDetail;
  /** 筛选框 */
  ConditionValue?: AnalyseConditionDetail;
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
  Data?: ConsumptionBusinessSummaryDataItem[];
  /** 记录数量，NeedRecordNum为0时返回null */
  RecordNum?: number;
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
  /** 记录数量，NeedRecordNum为0时返回null */
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
  /** 记录数量，NeedRecordNum为0时返回null */
  RecordNum?: number;
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
  Total?: ConsumptionSummaryTotal;
  /** 过滤条件 */
  ConditionValue?: ConsumptionResourceSummaryConditionValue | null;
  /** 记录数量 */
  RecordNum?: number | null;
  /** 资源消耗详情 */
  Data?: ConsumptionResourceSummaryDataItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCostSummaryByTagRequest {
  /** 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2025-12，EndTime 为 2025-12，查询结果是 2025 年 12 月数据。 */
  BeginTime: string;
  /** 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2025-12，EndTime 为 2025-12，查询结果是 2025 年 12 月数据。 */
  EndTime: string;
  /** 分账标签键，用户自定义 */
  TagKey: string;
}

declare interface DescribeCostSummaryByTagResponse {
  /** 数据是否准备好，0准备中，1已就绪。 */
  Ready?: number;
  /** 各标签值消耗分布详情 */
  SummaryOverview?: TagSummaryOverviewItem[];
  /** 总计 */
  SummaryTotal?: SummaryTotal;
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
  /** 子订单号 */
  OrderId?: string;
  /** 大订单号 */
  BigDealId?: string;
  /** 资源id */
  ResourceId?: string;
  /** 订单状态 */
  StatusSet?: number[];
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
  /** 查询用量开始时间，格式为yyyy-mm-dd，例如：2020-09-01 */
  StartDate: string;
  /** 查询用量结束时间，格式为yyyy-mm-dd，例如：2020-09-30（与开始时间同月，不支持跨月查询） */
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
  /** 互动直播：10194 互动直播-核心机房 :10195 互动直播-边缘机房cdn业务：102383：CDN静态加速流量(国内)102384：CDN静态加速带宽(国内)102385：CDN静态加速流量(海外)102386：CDN静态加速带宽(海外)100967：弹性公网IP-按流量计费101065：公网负载均衡-按流量计费视频直播10226 视频直播流量(国内)10227 视频直播带宽(国内)100763 视频直播流量(海外)100762 视频直播宽带(海外)仅支持以上产品 */
  ProductCode: string;
  /** 查询域名 例如 www.qq.com非CDN业务查询时传入空字符串，返回的值为空 */
  Domain: string;
  /** 1、如果为空，则返回EIP或CLB所有实例的明细；2、如果传入实例名，则返回该实例明细 */
  InstanceID?: string;
  /** 支付者的账号 ID（账号 ID 是用户在腾讯云的唯一账号标识），默认查询本账号账单，如集团管理账号需查询成员账号自付的账单，该字段需入参成员账号UIN */
  PayerUin?: string;
}

declare interface DescribeDosageDetailByDateResponse {
  /** 计量单位 */
  Unit?: string;
  /** 用量数组 */
  DetailSets?: DetailSet[];
  /** 错误码 */
  RetCode?: number;
  /** 错误信息 */
  RetMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDosageDetailListRequest {
  /** 用量起始时间，如：2023-02-01 */
  StartTime: string;
  /** 用量截止时间，如：2023-02-28 */
  EndTime: string;
  /** 产品编码，已支持查询的产品如下：p_ccc（云联络中心）p_rav（实时音视频）p_pstn（号码保护）p_smh（智能媒资托管）p_coding_devops（CODING DevOps）p_dsa（全球IP应用加速） */
  ProductCode: string;
  /** 数据偏移量（从0开始） */
  Offset: number;
  /** 单次数据量（最大3000） */
  Limit: number;
  /** 用量统计类型：用量明细的数据统计汇总周期类型，包括minute-按5分钟汇总、hour-按小时汇总、day-按天汇总、month-按月汇总、comm-其他，默认查询所有类型明细，目前各产品已支持的统计类型如下：p_ccc（云联络中心）：comm、dayp_rav（实时音视频）：minute、dayp_pstn（号码保护）：commp_smh（智能媒资托管）：dayp_coding_devops（CODING DevOps）：comm、dayp_dsa（全球IP应用加速）：minute */
  DosageType?: string;
}

declare interface DescribeDosageDetailListResponse {
  /** 用量明细集合 */
  Record?: DescribeDosageDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatherResourceRequest {
  /** 数量，最大值为1000 */
  Limit: number;
  /** 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推 */
  Offset: number;
  /** 账单月份，格式为2024-02，不传默认当前月 */
  Month?: string;
  /** 分账单元唯一标识，用作筛选 */
  TreeNodeUniqKey?: string;
  /** 资源目录类别，枚举值如下：all - 全部 none - 未归集 */
  GatherType?: string;
  /** 排序字段，枚举值如下：realCost - 折后总价cashPayAmount - 现金金额voucherPayAmount - 代金券金额incentivePayAmount - 赠送金金额transferPayAmount -分成金金额 */
  Sort?: string;
  /** 排序类型，枚举值如下：asc - 升序desc - 降序 */
  SortType?: string;
  /** 产品编码，用作筛选 */
  BusinessCodes?: string[];
  /** 子产品编码，用作筛选 */
  ProductCodes?: string[];
  /** 组件名称编码，用作筛选 */
  ItemCodes?: string[];
  /** 地域ID，用作筛选 */
  RegionIds?: number[];
  /** 实例类型编码，用作筛选 */
  InstanceTypes?: string[];
  /** 计费模式编码，用作筛选 */
  PayModes?: string[];
  /** 操作者UIN，用作筛选 */
  OperateUins?: string[];
  /** 使用者UIN，用作筛选 */
  OwnerUins?: string[];
  /** 模糊搜索：支持标签、资源id、资源别名 */
  SearchKey?: string;
  /** 标签，用作筛选 */
  Tag?: string[];
  /** 项目ID，用作筛选 */
  ProjectIds?: string[];
  /** 交易类型编码，用作筛选 */
  ActionTypes?: string[];
}

declare interface DescribeGatherResourceResponse {
  /** 总条数 */
  RecordNum?: number;
  /** 资源归集汇总 */
  GatherResourceSummary?: GatherResourceSummary[] | null;
  /** 数据更新时间 */
  LastUpdateTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatherRuleDetailRequest {
  /** 所查询归集规则ID */
  Id: number;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface DescribeGatherRuleDetailResponse {
  /** 归集规则ID */
  Id?: number;
  /** 归集规则所属UIN */
  Uin?: string;
  /** 归集规则最后更新时间 */
  UpdateTime?: string;
  /** 归集规则详情 */
  RuleDetail?: AllocationRuleExpression;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSavingPlanResourceInfoRequest {
  /** 数量，最大值为100 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 购买开始时间，格式yyyy-MM-dd */
  CreateStartDate?: string;
  /** 购买结束时间，格式yyyy-MM-dd */
  CreateEndDate?: string;
}

declare interface DescribeSavingPlanResourceInfoResponse {
  /** 记录数 */
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
  /** 券有效时间开始时间 */
  StartTimeFrom?: string;
  /** 券有效时间结束时间 */
  StartTimeTo?: string;
  /** 券失效时间开始时间 */
  EndTimeFrom?: string;
  /** 券失效时间结束时间 */
  EndTimeTo?: string;
  /** 发券时间开始时间 */
  CreateTimeFrom?: string;
  /** 发券时间结束时间 */
  CreateTimeTo?: string;
}

declare interface DescribeVoucherInfoResponse {
  /** 券总数 */
  TotalCount?: number;
  /** 总余额（微分） */
  TotalBalance?: number;
  /** 代金券相关信息 */
  VoucherInfos?: VoucherInfos[];
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
  UsageRecords?: UsageRecords[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAllocationRuleRequest {
  /** 所编辑公摊规则ID */
  RuleId: number;
  /** 编辑后公摊规则名称 */
  Name: string;
  /** 公摊策略类型，枚举值如下： 1 - 自定义分摊占比 2 - 等比分摊 3 - 按占比分摊 */
  Type: number;
  /** 编辑后公摊规则表达式 */
  RuleDetail: AllocationRuleExpression;
  /** 编辑后公摊比例表达式 */
  RatioDetail?: AllocationRationExpression[];
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface ModifyAllocationRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAllocationUnitRequest {
  /** 所修改分账单元ID */
  Id: number;
  /** 修改后分账单元名称 */
  Name?: string;
  /** 修改后分账单元源组织名称 */
  SourceName?: string;
  /** 修改后分账单元源组织ID */
  SourceId?: string;
  /** 分账单元备注说明 */
  Remark?: string;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface ModifyAllocationUnitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBudgetRequest {
  /** 预算项目id */
  BudgetId: string;
  /** 预算名称 */
  BudgetName: string;
  /** DAY 天，MONTH 月度，QUARTER 季度 ，YEAR 年度 */
  CycleType: string;
  /** 有效期起始时间 2025-01-01 */
  PeriodBegin: string;
  /** 有效期结束时间 2025-12-01 */
  PeriodEnd: string;
  /** FIX 固定值，CYCLE 不同值 */
  PlanType: string;
  /** 预算值额度 预算计划类型固定预算时设为定值；预算计划类型为CYCLE(计划预算)时传[{"dateDesc":"2025-07","quota":"1000"},{"dateDesc":"2025-08","quota":"2000"}]； */
  BudgetQuota: string;
  /** BILL 系统账单，CONSUMPTION 消耗账单 */
  BillType: string;
  /** COST 原价，REAL_COST 实际费用，CASH 现金，INCENTIVE 赠送金，VOUCHER 代金券，TRANSFER 分成金，TAX 税，AMOUNT_BEFORE_TAX 现金支付(税前) */
  FeeType: string;
  /** 阈值提醒 */
  WarnJson: BudgetWarn[];
  /** 预算备注 */
  BudgetNote?: string;
  /** 预算维度范围条件 */
  DimensionsRange?: BudgetConditionsForm;
  /** 波动提醒 */
  WaveThresholdJson?: WaveThresholdForm[];
}

declare interface ModifyBudgetResponse {
  /** 更新预算返回信息 */
  Data?: BudgetInfoApiResponse;
  /** update success */
  Message?: string | null;
  /** 返回码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGatherRuleRequest {
  /** 所编辑归集规则ID */
  Id: number;
  /** 所编辑分账规则详情 */
  RuleDetail: AllocationRuleExpression;
  /** 月份，不传默认当前月 */
  Month?: string;
}

declare interface ModifyGatherRuleResponse {
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
  /** 0非代理，1代理商代付，3集团代理，4代理商为代客下产品级代付单，默认0 */
  AgentPay?: number;
  /** 推荐者，用于返利 */
  CpsUin?: string;
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
  /** 创建公摊规则 {@link CreateAllocationRuleRequest} {@link CreateAllocationRuleResponse} */
  CreateAllocationRule(data: CreateAllocationRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAllocationRuleResponse>;
  /** 批量设置分账标签 {@link CreateAllocationTagRequest} {@link CreateAllocationTagResponse} */
  CreateAllocationTag(data: CreateAllocationTagRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAllocationTagResponse>;
  /** 创建分账单元 {@link CreateAllocationUnitRequest} {@link CreateAllocationUnitResponse} */
  CreateAllocationUnit(data: CreateAllocationUnitRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAllocationUnitResponse>;
  /** 创建预算项目 {@link CreateBudgetRequest} {@link CreateBudgetResponse} */
  CreateBudget(data: CreateBudgetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBudgetResponse>;
  /** 创建归集规则 {@link CreateGatherRuleRequest} {@link CreateGatherRuleResponse} */
  CreateGatherRule(data: CreateGatherRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGatherRuleResponse>;
  /** 公摊规则删除接口 {@link DeleteAllocationRuleRequest} {@link DeleteAllocationRuleResponse} */
  DeleteAllocationRule(data: DeleteAllocationRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAllocationRuleResponse>;
  /** 批量取消设置分账标签 {@link DeleteAllocationTagRequest} {@link DeleteAllocationTagResponse} */
  DeleteAllocationTag(data: DeleteAllocationTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAllocationTagResponse>;
  /** 删除分账单元 {@link DeleteAllocationUnitRequest} {@link DeleteAllocationUnitResponse} */
  DeleteAllocationUnit(data: DeleteAllocationUnitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAllocationUnitResponse>;
  /** 删除预算项目 {@link DeleteBudgetRequest} {@link DeleteBudgetResponse} */
  DeleteBudget(data: DeleteBudgetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBudgetResponse>;
  /** 删除归集规则 {@link DeleteGatherRuleRequest} {@link DeleteGatherRuleResponse} */
  DeleteGatherRule(data: DeleteGatherRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGatherRuleResponse>;
  /** 获取账户余额 {@link DescribeAccountBalanceRequest} {@link DescribeAccountBalanceResponse} */
  DescribeAccountBalance(data?: DescribeAccountBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountBalanceResponse>;
  /** 查询资源目录筛选条件 {@link DescribeAllocateConditionsRequest} {@link DescribeAllocateConditionsResponse} */
  DescribeAllocateConditions(data?: DescribeAllocateConditionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocateConditionsResponse>;
  /** 查询分账账单筛选条件 {@link DescribeAllocationBillConditionsRequest} {@link DescribeAllocationBillConditionsResponse} */
  DescribeAllocationBillConditions(data?: DescribeAllocationBillConditionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationBillConditionsResponse>;
  /** 查询分账账单明细 {@link DescribeAllocationBillDetailRequest} {@link DescribeAllocationBillDetailResponse} */
  DescribeAllocationBillDetail(data: DescribeAllocationBillDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationBillDetailResponse>;
  /** 查询分账账单月概览 {@link DescribeAllocationMonthOverviewRequest} {@link DescribeAllocationMonthOverviewResponse} */
  DescribeAllocationMonthOverview(data?: DescribeAllocationMonthOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationMonthOverviewResponse>;
  /** 查询分账账单日概览 {@link DescribeAllocationOverviewRequest} {@link DescribeAllocationOverviewResponse} */
  DescribeAllocationOverview(data: DescribeAllocationOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationOverviewResponse>;
  /** 查询公摊规则详情 {@link DescribeAllocationRuleDetailRequest} {@link DescribeAllocationRuleDetailResponse} */
  DescribeAllocationRuleDetail(data: DescribeAllocationRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationRuleDetailResponse>;
  /** 查询所有公摊规则概览 {@link DescribeAllocationRuleSummaryRequest} {@link DescribeAllocationRuleSummaryResponse} */
  DescribeAllocationRuleSummary(data: DescribeAllocationRuleSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationRuleSummaryResponse>;
  /** 查询分账账单按产品汇总 {@link DescribeAllocationSummaryByBusinessRequest} {@link DescribeAllocationSummaryByBusinessResponse} */
  DescribeAllocationSummaryByBusiness(data: DescribeAllocationSummaryByBusinessRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationSummaryByBusinessResponse>;
  /** 查询分账账单按组件汇总 {@link DescribeAllocationSummaryByItemRequest} {@link DescribeAllocationSummaryByItemResponse} */
  DescribeAllocationSummaryByItem(data: DescribeAllocationSummaryByItemRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationSummaryByItemResponse>;
  /** 查询分账账单按资源汇总 {@link DescribeAllocationSummaryByResourceRequest} {@link DescribeAllocationSummaryByResourceResponse} */
  DescribeAllocationSummaryByResource(data: DescribeAllocationSummaryByResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationSummaryByResourceResponse>;
  /** 查询分账目录树 {@link DescribeAllocationTreeRequest} {@link DescribeAllocationTreeResponse} */
  DescribeAllocationTree(data?: DescribeAllocationTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationTreeResponse>;
  /** 查询分账账单费用趋势 {@link DescribeAllocationTrendByMonthRequest} {@link DescribeAllocationTrendByMonthResponse} */
  DescribeAllocationTrendByMonth(data: DescribeAllocationTrendByMonthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationTrendByMonthResponse>;
  /** 查询分账单元详情 {@link DescribeAllocationUnitDetailRequest} {@link DescribeAllocationUnitDetailResponse} */
  DescribeAllocationUnitDetail(data: DescribeAllocationUnitDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllocationUnitDetailResponse>;
  /** 获取账单异常调整信息 {@link DescribeBillAdjustInfoRequest} {@link DescribeBillAdjustInfoResponse} */
  DescribeBillAdjustInfo(data?: DescribeBillAdjustInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillAdjustInfoResponse>;
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
  /** 获取预算详细信息 {@link DescribeBudgetRequest} {@link DescribeBudgetResponse} */
  DescribeBudget(data: DescribeBudgetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBudgetResponse>;
  /** 获取预算修改记录 {@link DescribeBudgetOperationLogRequest} {@link DescribeBudgetOperationLogResponse} */
  DescribeBudgetOperationLog(data: DescribeBudgetOperationLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBudgetOperationLogResponse>;
  /** 获取预算提醒记录 {@link DescribeBudgetRemindRecordListRequest} {@link DescribeBudgetRemindRecordListResponse} */
  DescribeBudgetRemindRecordList(data: DescribeBudgetRemindRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBudgetRemindRecordListResponse>;
  /** 查询消耗明细 {@link DescribeCostDetailRequest} {@link DescribeCostDetailResponse} */
  DescribeCostDetail(data: DescribeCostDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostDetailResponse>;
  /** 查看成本分析明细 {@link DescribeCostExplorerSummaryRequest} {@link DescribeCostExplorerSummaryResponse} */
  DescribeCostExplorerSummary(data: DescribeCostExplorerSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostExplorerSummaryResponse>;
  /** 获取按产品汇总消耗详情 {@link DescribeCostSummaryByProductRequest} {@link DescribeCostSummaryByProductResponse} */
  DescribeCostSummaryByProduct(data: DescribeCostSummaryByProductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByProductResponse>;
  /** 获取按项目汇总消耗详情 {@link DescribeCostSummaryByProjectRequest} {@link DescribeCostSummaryByProjectResponse} */
  DescribeCostSummaryByProject(data: DescribeCostSummaryByProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByProjectResponse>;
  /** 获取按地域汇总消耗详情 {@link DescribeCostSummaryByRegionRequest} {@link DescribeCostSummaryByRegionResponse} */
  DescribeCostSummaryByRegion(data: DescribeCostSummaryByRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByRegionResponse>;
  /** 获取按资源汇总消耗详情 {@link DescribeCostSummaryByResourceRequest} {@link DescribeCostSummaryByResourceResponse} */
  DescribeCostSummaryByResource(data: DescribeCostSummaryByResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByResourceResponse>;
  /** 获取按标签汇总消耗详情 {@link DescribeCostSummaryByTagRequest} {@link DescribeCostSummaryByTagResponse} */
  DescribeCostSummaryByTag(data: DescribeCostSummaryByTagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCostSummaryByTagResponse>;
  /** 查询订单数据 {@link DescribeDealsByCondRequest} {@link DescribeDealsByCondResponse} */
  DescribeDealsByCond(data: DescribeDealsByCondRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDealsByCondResponse>;
  /** 获取COS产品用量明细 {@link DescribeDosageCosDetailByDateRequest} {@link DescribeDosageCosDetailByDateResponse} */
  DescribeDosageCosDetailByDate(data: DescribeDosageCosDetailByDateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDosageCosDetailByDateResponse>;
  /** 按日期获取产品用量明细 {@link DescribeDosageDetailByDateRequest} {@link DescribeDosageDetailByDateResponse} */
  DescribeDosageDetailByDate(data: DescribeDosageDetailByDateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDosageDetailByDateResponse>;
  /** 获取计量标准接入类产品用量明细 {@link DescribeDosageDetailListRequest} {@link DescribeDosageDetailListResponse} */
  DescribeDosageDetailList(data: DescribeDosageDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDosageDetailListResponse>;
  /** 查询分账账单资源归集汇总 {@link DescribeGatherResourceRequest} {@link DescribeGatherResourceResponse} */
  DescribeGatherResource(data: DescribeGatherResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatherResourceResponse>;
  /** 查询归集规则详情 {@link DescribeGatherRuleDetailRequest} {@link DescribeGatherRuleDetailResponse} */
  DescribeGatherRuleDetail(data: DescribeGatherRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatherRuleDetailResponse>;
  /** 查询节省计划可共享列表详情 {@link DescribeSavingPlanResourceInfoRequest} {@link DescribeSavingPlanResourceInfoResponse} */
  DescribeSavingPlanResourceInfo(data: DescribeSavingPlanResourceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSavingPlanResourceInfoResponse>;
  /** 获取分账标签 {@link DescribeTagListRequest} {@link DescribeTagListResponse} */
  DescribeTagList(data: DescribeTagListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagListResponse>;
  /** 获取代金券相关信息 {@link DescribeVoucherInfoRequest} {@link DescribeVoucherInfoResponse} */
  DescribeVoucherInfo(data: DescribeVoucherInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVoucherInfoResponse>;
  /** 获取代金券使用记录 {@link DescribeVoucherUsageDetailsRequest} {@link DescribeVoucherUsageDetailsResponse} */
  DescribeVoucherUsageDetails(data: DescribeVoucherUsageDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVoucherUsageDetailsResponse>;
  /** 编辑公摊规则 {@link ModifyAllocationRuleRequest} {@link ModifyAllocationRuleResponse} */
  ModifyAllocationRule(data: ModifyAllocationRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllocationRuleResponse>;
  /** 修改分账单元 {@link ModifyAllocationUnitRequest} {@link ModifyAllocationUnitResponse} */
  ModifyAllocationUnit(data: ModifyAllocationUnitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAllocationUnitResponse>;
  /** 更新预算信息 {@link ModifyBudgetRequest} {@link ModifyBudgetResponse} */
  ModifyBudget(data: ModifyBudgetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBudgetResponse>;
  /** 编辑归集规则 {@link ModifyGatherRuleRequest} {@link ModifyGatherRuleResponse} */
  ModifyGatherRule(data: ModifyGatherRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGatherRuleResponse>;
  /** 支付订单 {@link PayDealsRequest} {@link PayDealsResponse} */
  PayDeals(data?: PayDealsRequest, config?: AxiosRequestConfig): AxiosPromise<PayDealsResponse>;
}

export declare type Versions = ["2018-07-09"];

export default Billing;
