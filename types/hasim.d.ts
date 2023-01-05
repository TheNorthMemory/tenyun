/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 设备上报信息 */
declare interface DeviceReport {
  /** 移动设备ID */
  Imei: string;
  /** 经度 */
  Lng: string | null;
  /** 维度 */
  Lat: string | null;
  /** 运营商基站ID */
  Lac: string | null;
  /** 小区CellID */
  Cell: string | null;
  /** 当前上报运营商ID */
  Iccid: string | null;
  /** 信号强度 */
  Rss: number | null;
  /** 运营商: 1 移动 2 联通 3 电信 */
  Tele: number | null;
  /** 当前设备策略ID */
  Tid: number | null;
  /** 心跳间隔,单位秒 */
  Ping: number | null;
  /** 网络延迟,单位毫秒 */
  Delay: number | null;
  /** 高级日志启停状态 */
  Log: number | null;
  /** 设备型号 */
  DevType: string | null;
  /** 设备型号 */
  DevModel: string | null;
  /** 设备版本 */
  Version: string | null;
  /** 设备刷新时间戳 */
  UploadTime: string | null;
  /** 网络环境: 0 正常 1 弱网 */
  Status: number | null;
  /** 每月第一次上报心跳时间 */
  MonthFirstTime: string | null;
}

/** 云兔连接详细信息 */
declare interface LinkDetailInfo {
  /** 云兔连接ID */
  ID: number | null;
  /** 卡片状态 */
  Status: number | null;
  /** 激活时间 */
  ActiveTime: string | null;
  /** 过期时间 */
  ExpireTime: string | null;
  /** 数据用量 */
  DataUse: number | null;
  /** 语音用量 */
  AudioUse: number | null;
  /** 短信用量 */
  SmsUse: number | null;
  /** 在线状态 0 未激活 1 在线 2 离线 */
  LinkedState: number | null;
  /** 预期策略ID */
  TacticID: number | null;
  /** 策略下发状态 */
  TacticStatus: number | null;
  /** 策略下发成功过期时间 */
  TacticExpireTime: string | null;
  /** 高级日志预期状态 */
  IsActiveLog: boolean | null;
  /** 运营商 1移动 2联通 3电信 */
  TeleOperator: number | null;
  /** 设备最新上报信息 */
  Report: DeviceReport | null;
  /** 标签列表 */
  Tags: Tag[] | null;
  /** 运营商ICCID信息集合 */
  Cards: TeleOperatorCard[] | null;
  /** 云兔实际卡片ID */
  CardID: string | null;
}

/** 云兔连接基本信息 */
declare interface LinkInfo {
  /** 云兔连接ID */
  ID: number | null;
  /** 卡片状态 */
  Status: number | null;
  /** 激活时间 */
  ActiveTime: string | null;
  /** 过期时间 */
  ExpireTime: string | null;
  /** 数据用量 */
  DataUse: number | null;
  /** 语音用量 */
  AudioUse: number | null;
  /** 短信用量 */
  SmsUse: number | null;
  /** 在线状态 0 未激活 1 在线 2 离线 */
  LinkedState: number | null;
  /** 预期策略ID */
  TacticID: number | null;
  /** 策略下发状态 */
  TacticStatus: number | null;
  /** 策略下发成功过期时间 */
  TacticExpireTime: string | null;
  /** 高级日志预期状态 */
  IsActiveLog: boolean | null;
  /** 运营商 1移动 2联通 3电信 */
  TeleOperator: number | null;
  /** 设备最新上报信息 */
  Report: DeviceReport | null;
}

/** 云兔连接信息集合 */
declare interface LinkInfos {
  /** 总量 */
  Total: number;
  /** 云兔连接列表 */
  List: LinkInfo[] | null;
}

/** 订单信息 */
declare interface OrderInfo {
  /** 子订单ID */
  DealName: string;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 订单账户 */
  Uin: string;
  /** 购买数量 */
  BuyNum: number | null;
  /** 行业代码 */
  IndustryCode: string | null;
  /** 地址 */
  Address: string | null;
  /** 联系人 */
  Contact: string | null;
  /** 电话号码 */
  Msisdn: string | null;
  /** 卡片规格 */
  Specification: string | null;
  /** 用户订单备注 */
  Comment: string | null;
  /** 大订单号 */
  BigDealId: string | null;
  /** 审批状态 */
  AuditStatus: string | null;
  /** 发货状态 */
  FlowStatus: string | null;
  /** 审批备注 */
  Remark: string | null;
  /** 退费订单 */
  RefundBigDealId: string | null;
}

/** 订单列表 */
declare interface Orders {
  /** 总数 */
  Total: number;
  /** 订单集合 */
  List: OrderInfo[] | null;
}

/** 自动化规则 */
declare interface Rule {
  /** 规则名称 */
  Name: string;
  /** 规则ID */
  ID: number;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 更新时间 */
  UpdatedAt: string | null;
  /** 删除时间 */
  DeletedAt: string | null;
  /** 规则类型 */
  Type: number | null;
  /** 是否激活 */
  IsActive: boolean | null;
  /** 触发动作：1 邮件 2 API请求 5 停卡 6 地图标识为盲点 */
  Notice: number | null;
  /** 邮箱 */
  Email: string | null;
  /** 回调API地址 */
  Url: string | null;
  /** 用量类：用量阈值,单位MB */
  DataThreshold: number | null;
  /** 行政区类型：1. 省份 2. 城市 3. 区 */
  District: number | null;
  /** 移动距离阈值，单位KM */
  Distance: number | null;
  /** 信号强度阈值(-dbm） */
  SignalStrength: number | null;
  /** 盲点阈值天数 */
  LostDay: number | null;
  /** 绑定的标签ID集合 */
  TagIDs: number[] | null;
  /** 绑定的资费计划 */
  SalePlan: string | null;
}

/** 自动化规则详细信息 */
declare interface RuleDetail {
  /** 规则名称 */
  Name: string;
  /** 规则ID */
  ID: number;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 更新时间 */
  UpdatedAt: string | null;
  /** 删除时间 */
  DeletedAt: string | null;
  /** 规则类型 */
  Type: number | null;
  /** 是否激活 */
  IsActive: boolean | null;
  /** 触发动作：1 邮件 2 API请求 5 停卡 6 地图标识为盲点 */
  Notice: number | null;
  /** 邮箱 */
  Email: string | null;
  /** 回调API地址 */
  Url: string | null;
  /** 用量类：用量阈值,单位MB */
  DataThreshold: number | null;
  /** 行政区类型：1. 省份 2. 城市 3. 区 */
  District: number | null;
  /** 移动距离阈值，单位KM */
  Distance: number | null;
  /** 信号强度阈值(-dbm） */
  SignalStrength: number | null;
  /** 盲点阈值天数 */
  LostDay: number | null;
  /** 标签ID集合 */
  TagIDs: number[] | null;
  /** 资费信息 */
  SalePlan: string | null;
}

/** 自动化规则集合 */
declare interface RuleInfos {
  /** 总量 */
  Total: number;
  /** 列表 */
  List: Rule[] | null;
}

/** 策略信息 */
declare interface Tactic {
  /** 策略ID */
  ID: number;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 是否自动执行策略 */
  IsAuto: number;
  /** 设备上报信息间隔 */
  PingInterval: number | null;
  /** 是否开启弱信号检查 */
  IsWeak: number | null;
  /** 弱信号阈值（-dbm） */
  WeakThreshold: number | null;
  /** 忘了时延切换 */
  IsDelay: number | null;
  /** 时延阈值（ms） */
  DelayThreshold: number | null;
  /** 是否开启假信号检测 */
  IsFake: number | null;
  /** 假信号检测IP字符串，用逗号分隔 */
  FakeIP: string | null;
  /** 假信号检测间隔（s） */
  FakeInterval: number | null;
  /** 是否开启网络制式检测 */
  IsNet: number | null;
  /** 网络回落制式 1: 2G、 2: 3G 、 3: 2/3G */
  Network: number | null;
  /** 是否开启移动检测 */
  IsMove: number | null;
  /** 策略名称 */
  Name: string;
  /** 是否开启最优先运营商 */
  IsPriorityTele: number | null;
  /** 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商 */
  PriorityTele: number | null;
  /** 是否开启最不优先运营商 */
  IsBottomTele: number | null;
  /** 最不优先运营商 1 移动、 2 联通、 3 电信 */
  BottomTele: number | null;
  /** 是否开启最优先信号选取策略 */
  IsBestSignal: number | null;
}

/** 策略信息集合 */
declare interface TacticInfos {
  /** 总量 */
  Total: number;
  /** 策略列表 */
  List: Tactic[] | null;
}

/** 云兔标签信息 */
declare interface Tag {
  /** 标签名称 */
  Name: string;
  /** 标签ID */
  ID: number;
  /** 备注信息 */
  Comment: string | null;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 更改时间 */
  UpdatedAt: string | null;
}

/** 标签列表集合 */
declare interface TagInfos {
  /** 总量 */
  Total: number;
  /** 列表 */
  List: Tag[] | null;
}

/** 运营商卡片信息 */
declare interface TeleOperatorCard {
  /** 开户时间 */
  AccountTime: string | null;
  /** 激活时间 */
  ActiveTime: string | null;
  /** 运营商ICCID */
  ICCID: string;
  /** 云兔卡ID */
  LinkID: number;
  /** 电话号码 */
  Msisdn: string | null;
  /** 移动用户识别码 */
  IMSI: string | null;
  /** 运营商: 1 移动 2 联通 3 电信 */
  TeleOperator: number;
}

declare interface CreateRuleRequest {
  /** 自动化规则名称 */
  Name: string;
  /** 规则类型：用量类(101 当月|102有效期内)、位置类(201行政区|202移动距离)、网络质量类(301网络盲点) */
  Type: number;
  /** 是否激活 */
  IsActive: boolean;
  /** 触发动作：1 邮件 2 API请求 3 微信 4 停卡 5 地图标识为盲点 */
  Notice: number;
  /** 邮箱 */
  Email?: string;
  /** 推送的API地址 */
  Url?: string;
  /** 用量阈值 */
  DataThreshold?: number;
  /** 行政区类型：1. 省份 2. 城市 3. 区 */
  District?: number;
  /** 心跳移动距离阈值 */
  Distance?: number;
  /** 信号强度阈值 */
  SignalStrength?: number;
  /** 盲点时间阈值，天 */
  LostDay?: number;
  /** 标签ID集合 */
  TagIDs?: number[];
  /** 资费计划 */
  SalePlan?: string;
}

declare interface CreateRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTacticRequest {
  /** 策略名称 */
  Name: string;
  /** 是否自动执行 */
  IsAuto: number;
  /** 心跳上报间隔(s) */
  PingInterval: number;
  /** 是否开启弱信号检测 */
  IsWeak: number;
  /** 弱信号阈值（-dbm） */
  WeakThreshold: number;
  /** 是否开启时延切换 */
  IsDelay: number;
  /** 网络时延阈值（ms） */
  DelayThreshold: number;
  /** 是否开启假信号检测 */
  IsFake: number;
  /** 假信号检测IP字符串，用逗号分隔 */
  FakeIP: string;
  /** 假信号检测间隔（s） */
  FakeInterval: number;
  /** 是否开启网络制式检测 */
  IsNet: number;
  /** 网络回落制式 1 2G、 2 3G 、 3 2/3G */
  Network: number;
  /** 是否开启移动检测 */
  IsMove: number;
  /** 是否开启最优先运营商 */
  IsPriorityTele: number;
  /** 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商 */
  PriorityTele: number;
  /** 是否开启最不优先运营商 */
  IsBottomTele: number;
  /** 最不优先运营商 1 移动、 2 联通、 3 电信 */
  BottomTele: number;
  /** 最优先信号选取策略 */
  IsBestSignal: number;
}

declare interface CreateTacticResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTagRequest {
  /** 名称 */
  Name: string;
  /** 备注 */
  Comment?: string;
}

declare interface CreateTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRuleRequest {
  /** 自动化规则ID */
  RuleID: number;
}

declare interface DeleteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTacticRequest {
  /** 策略ID */
  TacticID: number;
}

declare interface DeleteTacticResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTagRequest {
  /** 标签ID */
  TagID: number;
}

declare interface DeleteTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLinkRequest {
  /** 云兔卡ID */
  LinkID: number;
  /** 具体的账号 */
  UinAccount?: string;
}

declare interface DescribeLinkResponse {
  /** 云兔连接详细信息 */
  Data?: LinkDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLinksRequest {
  /** 云兔卡ID */
  LinkID?: number;
  /** 运营商ICCID */
  ICCID?: string;
  /** 设备码 */
  IMEI?: string;
  /** 卡片状态 */
  Status?: number;
  /** 运营商 1移动 2联通 3电信 */
  TeleOperator?: number;
  /** 标签ID */
  TagID?: number;
  /** 策略ID */
  TacticID?: number;
  /** 设备在线状态 0 未激活 1 在线 2 离线 */
  LinkedState?: number;
  /** 标签ID 集合 */
  TagIDs?: number[];
}

declare interface DescribeLinksResponse {
  /** 云兔连接响应信息 */
  Data?: LinkInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrdersRequest {
  /** 子订单ID */
  DealName?: string;
  /** 审批状态 0全部 1通过 2驳回 3待审核 */
  AuditStatus?: number;
  /** 翻页大小 */
  Limit?: number;
  /** 翻页偏移 */
  Offset?: number;
  /** 开始时间,例如2022-06-30 00:00:00 */
  BeginTime?: string;
  /** 结束时间,例如2022-06-30 00:00:00 */
  EndTime?: string;
}

declare interface DescribeOrdersResponse {
  /** 订单列表 */
  Data?: Orders;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleRequest {
  /** 自动化规则ID */
  RuleID: number;
}

declare interface DescribeRuleResponse {
  /** 策略信息 */
  Data: RuleDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesRequest {
  /** 自动化规则ID */
  RuleID?: number;
  /** 自动化规则ID */
  RuleIDs?: number[];
  /** 名称 */
  Name?: string;
  /** 类型 */
  Type?: number;
  /** 是否激活 */
  IsActive?: number;
  /** 翻页大小 */
  Limit?: number;
  /** 翻页偏移 */
  Offset?: number;
}

declare interface DescribeRulesResponse {
  /** 自动化规则列表集合 */
  Data?: RuleInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTacticRequest {
  /** 策略ID */
  TacticID: number;
}

declare interface DescribeTacticResponse {
  /** 策略信息 */
  Data: Tactic;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTacticsRequest {
  /** 策略ID */
  TacticID?: number;
  /** 策略名称 */
  Name?: string;
}

declare interface DescribeTacticsResponse {
  /** 策略集合信息 */
  Data: TacticInfos;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagsRequest {
  /** 标签名称 */
  Name?: string;
}

declare interface DescribeTagsResponse {
  /** 列表 */
  Data: TagInfos;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLinkAdvancedLogRequest {
  /** 云兔ID */
  LinkID: number;
  /** 是否激活高级日志 0 关闭 1激活 */
  IsAdLog: number;
}

declare interface ModifyLinkAdvancedLogResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLinkTacticRequest {
  /** 云兔ID */
  LinkID: number;
  /** 策略ID */
  TacticID: number;
}

declare interface ModifyLinkTacticResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLinkTeleRequest {
  /** 云兔ID */
  LinkID: number;
  /** 运营商 1 移动 2 联通 3 电信 */
  TeleOperator: number;
}

declare interface ModifyLinkTeleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleRequest {
  /** 自动化规则名称 */
  Name: string;
  /** 规则类型：用量类(101 当月|102有效期内)、位置类(201行政区|202移动距离)、网络质量类(301网络盲点) */
  Type: number;
  /** 是否激活 */
  IsActive: boolean;
  /** 触发动作：1 邮件 2 API请求 3 微信 4 停卡 5 地图标识为盲点 */
  Notice: number;
  /** 自动化规则ID */
  RuleID: number;
  /** 邮箱 */
  Email?: string;
  /** 推送的API地址 */
  Url?: string;
  /** 用量阈值 */
  DataThreshold?: number;
  /** 行政区类型：1. 省份 2. 城市 3. 区 */
  District?: number;
  /** 心跳移动距离阈值 */
  Distance?: number;
  /** 信号强度阈值 */
  SignalStrength?: number;
  /** 标签ID集合 */
  TagIDs?: number[];
  /** 资费计划 */
  SalePlan?: string;
  /** 具体的账号 */
  UinAccount?: string;
}

declare interface ModifyRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleStatusRequest {
  /** 自动化规则ID */
  RuleID: number;
  /** 是否激活 */
  IsActive?: boolean;
}

declare interface ModifyRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTacticRequest {
  /** 策略名称 */
  Name: string;
  /** 是否自动执行 */
  IsAuto: number;
  /** 心跳上报间隔(s) */
  PingInterval: number;
  /** 是否开启弱信号检测 */
  IsWeak: number;
  /** 弱信号阈值（-dbm） */
  WeakThreshold: number;
  /** 是否开启时延切换 */
  IsDelay: number;
  /** 网络时延阈值（ms） */
  DelayThreshold: number;
  /** 是否开启假信号检测 */
  IsFake: number;
  /** 假信号检测间隔（s） */
  FakeInterval: number;
  /** 是否开启网络制式检测 */
  IsNet: number;
  /** 网络回落制式 1 2G、 2 3G 、 3 2/3G */
  Network: number;
  /** 是否开启移动检测 */
  IsMove: number;
  /** 策略ID */
  TacticID: number;
  /** 是否开启最优先运营商 */
  IsPriorityTele: number;
  /** 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商 */
  PriorityTele: number;
  /** 是否开启最不优先运营商 */
  IsBottomTele: number;
  /** 最不优先运营商 1 移动、 2 联通、 3 电信 */
  BottomTele: number;
  /** 是否最优先信号选取策略 */
  IsBestSignal: number;
  /** 假信号检测IP字符串，用逗号分隔 */
  FakeIP?: string;
}

declare interface ModifyTacticResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTagRequest {
  /** 名称 */
  Name: string;
  /** 标签ID */
  TagID: number;
  /** 备注 */
  Comment?: string;
}

declare interface ModifyTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewLinkInfoRequest {
  /** 云兔ID */
  LinkID: number;
  /** 具体的账号 */
  UinAccount?: string;
}

declare interface RenewLinkInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Hasim 高可用物联网卡} */
declare interface Hasim {
  (): Versions;
  /** 创建自动化规则 {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建云兔切换策略 {@link CreateTacticRequest} {@link CreateTacticResponse} */
  CreateTactic(data: CreateTacticRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTacticResponse>;
  /** 创建标签 {@link CreateTagRequest} {@link CreateTagResponse} */
  CreateTag(data: CreateTagRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTagResponse>;
  /** 删除自动化规则 {@link DeleteRuleRequest} {@link DeleteRuleResponse} */
  DeleteRule(data: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 删除策略 {@link DeleteTacticRequest} {@link DeleteTacticResponse} */
  DeleteTactic(data: DeleteTacticRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTacticResponse>;
  /** 删除标签 {@link DeleteTagRequest} {@link DeleteTagResponse} */
  DeleteTag(data: DeleteTagRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTagResponse>;
  /** 查询云兔连接详细信息 {@link DescribeLinkRequest} {@link DescribeLinkResponse} */
  DescribeLink(data: DescribeLinkRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLinkResponse>;
  /** 查询云兔连接列表 {@link DescribeLinksRequest} {@link DescribeLinksResponse} */
  DescribeLinks(data?: DescribeLinksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLinksResponse>;
  /** 查询订单列表 {@link DescribeOrdersRequest} {@link DescribeOrdersResponse} */
  DescribeOrders(data?: DescribeOrdersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrdersResponse>;
  /** 查询自动化规则 {@link DescribeRuleRequest} {@link DescribeRuleResponse} */
  DescribeRule(data: DescribeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleResponse>;
  /** 查询自动化规则列表 {@link DescribeRulesRequest} {@link DescribeRulesResponse} */
  DescribeRules(data?: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 查询云兔切换策略信息 {@link DescribeTacticRequest} {@link DescribeTacticResponse} */
  DescribeTactic(data: DescribeTacticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTacticResponse>;
  /** 查询云兔切换策略列表 {@link DescribeTacticsRequest} {@link DescribeTacticsResponse} */
  DescribeTactics(data?: DescribeTacticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTacticsResponse>;
  /** 查询标签列表 {@link DescribeTagsRequest} {@link DescribeTagsResponse} */
  DescribeTags(data?: DescribeTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagsResponse>;
  /** 编辑云兔高级日志状态 {@link ModifyLinkAdvancedLogRequest} {@link ModifyLinkAdvancedLogResponse} */
  ModifyLinkAdvancedLog(data: ModifyLinkAdvancedLogRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLinkAdvancedLogResponse>;
  /** 编辑云兔策略 {@link ModifyLinkTacticRequest} {@link ModifyLinkTacticResponse} */
  ModifyLinkTactic(data: ModifyLinkTacticRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLinkTacticResponse>;
  /** 修改云兔运营商 {@link ModifyLinkTeleRequest} {@link ModifyLinkTeleResponse} */
  ModifyLinkTele(data: ModifyLinkTeleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLinkTeleResponse>;
  /** 编辑自动化规则 {@link ModifyRuleRequest} {@link ModifyRuleResponse} */
  ModifyRule(data: ModifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleResponse>;
  /** 编辑自动化规则状态 {@link ModifyRuleStatusRequest} {@link ModifyRuleStatusResponse} */
  ModifyRuleStatus(data: ModifyRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleStatusResponse>;
  /** 修改策略 {@link ModifyTacticRequest} {@link ModifyTacticResponse} */
  ModifyTactic(data: ModifyTacticRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTacticResponse>;
  /** 编辑标签 {@link ModifyTagRequest} {@link ModifyTagResponse} */
  ModifyTag(data: ModifyTagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTagResponse>;
  /** 刷新云兔连接信息同步 {@link RenewLinkInfoRequest} {@link RenewLinkInfoResponse} */
  RenewLinkInfo(data: RenewLinkInfoRequest, config?: AxiosRequestConfig): AxiosPromise<RenewLinkInfoResponse>;
}

export declare type Versions = ["2021-07-16"];

export default Hasim;
