/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 规则引擎转发动作 */
declare interface Action {
  /** 转发至topic */
  Topic?: TopicAction | null;
  /** 转发至第三发 */
  Service?: ServiceAction | null;
  /** 转发至第三发Ckafka */
  Ckafka?: CkafkaAction | null;
}

/** 绑定设备 */
declare interface AppDevice {
  /** 设备Id */
  DeviceId: string;
  /** 所属产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 别名 */
  AliasName: string;
  /** 地区 */
  Region: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** 绑定设备详情 */
declare interface AppDeviceDetail {
  /** 设备Id */
  DeviceId: string;
  /** 所属产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 别名 */
  AliasName: string;
  /** 地区 */
  Region: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 设备信息（json） */
  DeviceInfo: string;
  /** 数据模板 */
  DataTemplate: DataTemplate[];
}

/** 应用用户 */
declare interface AppUser {
  /** 应用Id */
  ApplicationId: string;
  /** 用户名 */
  UserName: string;
  /** 昵称 */
  NickName: string;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  UpdateTime: string;
}

/** 布尔类型数据 */
declare interface BoolData {
  /** 名称 */
  Name: string;
  /** 描述 */
  Desc: string;
  /** 读写模式 */
  Mode: string;
  /** 取值列表 */
  Range: boolean[];
}

/** 转发至Ckafka */
declare interface CkafkaAction {
  /** 实例Id */
  InstanceId: string;
  /** topic名称 */
  TopicName: string;
  /** 地域 */
  Region: string;
}

/** 数据历史条目 */
declare interface DataHistoryEntry {
  /** 日志id */
  Id: string;
  /** 时间戳 */
  Timestamp: number;
  /** 设备名称 */
  DeviceName: string;
  /** 数据 */
  Data: string;
}

/** 数据模版 */
declare interface DataTemplate {
  /** 数字类型 */
  Number?: NumberData | null;
  /** 字符串类型 */
  String?: StringData | null;
  /** 枚举类型 */
  Enum?: EnumData | null;
  /** 布尔类型 */
  Bool?: BoolData | null;
}

/** 设备日志条目 */
declare interface DebugLogEntry {
  /** 日志id */
  Id: string;
  /** 行为（事件） */
  Event: string;
  /** shadow/action/mqtt, 分别表示：影子/规则引擎/上下线日志 */
  LogType: string;
  /** 时间戳 */
  Timestamp: number;
  /** success/fail */
  Result: string;
  /** 日志详细内容 */
  Data: string;
  /** 数据来源topic */
  Topic: string;
  /** 设备名称 */
  DeviceName: string;
}

/** 设备 */
declare interface Device {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 设备密钥 */
  DeviceSecret: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 设备信息（json） */
  DeviceInfo: string;
}

/** 设备条目 */
declare interface DeviceEntry {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 设备密钥 */
  DeviceSecret: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 设备日志条目 */
declare interface DeviceLogEntry {
  /** 日志id */
  Id: string;
  /** 日志内容 */
  Msg: string;
  /** 状态码 */
  Code: string;
  /** 时间戳 */
  Timestamp: number;
  /** 设备名称 */
  DeviceName: string;
  /** 设备动作 */
  Method: string;
}

/** 设备签名 */
declare interface DeviceSignature {
  /** 设备名称 */
  DeviceName: string;
  /** 设备签名 */
  DeviceSignature: string;
}

/** 设备统计数据 */
declare interface DeviceStatData {
  /** 时间点 */
  Datetime: string;
  /** 在线设备数 */
  DeviceOnline: number;
  /** 激活设备数 */
  DeviceActive: number;
  /** 设备总数 */
  DeviceTotal: number;
}

/** 设备状态 */
declare interface DeviceStatus {
  /** 设备名称 */
  DeviceName: string;
  /** 设备状态（inactive, online, offline） */
  Status: string;
  /** 首次上线时间 */
  FirstOnline: string | null;
  /** 最后上线时间 */
  LastOnline: string | null;
  /** 上线次数 */
  OnlineTimes: number;
}

/** 枚举类型数据 */
declare interface EnumData {
  /** 名称 */
  Name: string;
  /** 描述 */
  Desc: string;
  /** 读写模式 */
  Mode: string;
  /** 取值列表 */
  Range: string[];
}

/** 数字类型数据 */
declare interface NumberData {
  /** 名称 */
  Name: string;
  /** 描述 */
  Desc: string;
  /** 读写模式 */
  Mode: string;
  /** 取值范围 */
  Range: number[];
}

/** 产品 */
declare interface Product {
  /** 产品Id */
  ProductId: string;
  /** 产品Key */
  ProductKey: string;
  /** AppId */
  AppId: number;
  /** 产品名称 */
  Name: string;
  /** 产品描述 */
  Description: string;
  /** 连接域名 */
  Domain: string;
  /** 产品规格 */
  Standard: number;
  /** 鉴权类型（0：直连，1：Token） */
  AuthType: number;
  /** 删除（0未删除） */
  Deleted: number;
  /** 备注 */
  Message: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 数据模版 */
  DataTemplate: DataTemplate[];
  /** 数据协议（native/template） */
  DataProtocol: string;
  /** 直连用户名 */
  Username: string;
  /** 直连密码 */
  Password: string;
  /** 通信方式 */
  CommProtocol: string;
  /** qps */
  Qps: number;
  /** 地域 */
  Region: string;
  /** 产品的设备类型 */
  DeviceType: string;
  /** 关联的产品列表 */
  AssociatedProducts: string[];
}

/** 产品条目 */
declare interface ProductEntry {
  /** 产品Id */
  ProductId: string;
  /** 产品Key */
  ProductKey: string;
  /** AppId */
  AppId: number;
  /** 产品名称 */
  Name: string;
  /** 产品描述 */
  Description: string;
  /** 连接域名 */
  Domain: string;
  /** 鉴权类型（0：直连，1：Token） */
  AuthType: number;
  /** 数据协议（native/template） */
  DataProtocol: string;
  /** 删除（0未删除） */
  Deleted: number;
  /** 备注 */
  Message: string;
  /** 创建时间 */
  CreateTime: string;
  /** 通信方式 */
  CommProtocol: string;
  /** 地域 */
  Region: string;
  /** 设备类型 */
  DeviceType: string;
}

/** 规则 */
declare interface Rule {
  /** 规则Id */
  RuleId: string;
  /** AppId */
  AppId: number;
  /** 名称 */
  Name: string;
  /** 描述 */
  Description: string;
  /** 查询 */
  Query: RuleQuery;
  /** 转发 */
  Actions: Action[];
  /** 已启动 */
  Active: number;
  /** 已删除 */
  Deleted: number;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 消息顺序 */
  MsgOrder: number;
  /** 数据类型（0：文本，1：二进制） */
  DataType: number;
}

/** 查询 */
declare interface RuleQuery {
  /** 字段 */
  Field: string;
  /** 过滤规则 */
  Condition: string;
  /** Topic */
  Topic?: string | null;
  /** 产品Id */
  ProductId?: string | null;
}

/** 转发到第三方http(s)服务 */
declare interface ServiceAction {
  /** 服务url地址 */
  Url: string;
}

/** 数字类型数据 */
declare interface StringData {
  /** 名称 */
  Name: string;
  /** 描述 */
  Desc: string;
  /** 读写模式 */
  Mode: string;
  /** 长度范围 */
  Range: number[];
}

/** Topic */
declare interface Topic {
  /** TopicId */
  TopicId: string;
  /** Topic名称 */
  TopicName: string;
  /** 产品Id */
  ProductId: string;
  /** 消息最大生命周期 */
  MsgLife: number;
  /** 消息最大大小 */
  MsgSize: number;
  /** 消息最大数量 */
  MsgCount: number;
  /** 已删除 */
  Deleted: number;
  /** Topic完整路径 */
  Path: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** 转发到topic动作 */
declare interface TopicAction {
  /** 目标topic */
  Topic: string;
}

declare interface ActivateRuleRequest {
  /** 规则Id */
  RuleId: string;
}

declare interface ActivateRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddDeviceRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称，唯一标识某产品下的一个设备 */
  DeviceName: string;
}

declare interface AddDeviceResponse {
  /** 设备信息 */
  Device?: Device;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddProductRequest {
  /** 产品名称，同一区域产品名称需唯一，支持中文、英文字母、中划线和下划线，长度不超过31个字符，中文占两个字符 */
  Name: string;
  /** 产品描述 */
  Description: string;
  /** 数据模版 */
  DataTemplate?: DataTemplate[];
  /** 产品版本（native表示基础版，template表示高级版，默认值为template） */
  DataProtocol?: string;
  /** 设备认证方式（1：动态令牌，2：签名直连鉴权） */
  AuthType?: number;
  /** 通信方式（other/wifi/cellular/nb-iot） */
  CommProtocol?: string;
  /** 产品的设备类型（device: 直连设备；sub_device：子设备；gateway：网关设备） */
  DeviceType?: string;
}

declare interface AddProductResponse {
  /** 产品信息 */
  Product?: Product;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddRuleRequest {
  /** 名称 */
  Name: string;
  /** 描述 */
  Description: string;
  /** 查询 */
  Query?: RuleQuery;
  /** 转发动作列表 */
  Actions?: Action[];
  /** 数据类型（0：文本，1：二进制） */
  DataType?: number;
}

declare interface AddRuleResponse {
  /** 规则 */
  Rule?: Rule;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddTopicRequest {
  /** 产品Id */
  ProductId: string;
  /** Topic名称 */
  TopicName: string;
}

declare interface AddTopicResponse {
  /** Topic信息 */
  Topic?: Topic;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppAddUserRequest {
  /** 用户名 */
  UserName: string;
  /** 密码 */
  Password: string;
}

declare interface AppAddUserResponse {
  /** 应用用户 */
  AppUser?: AppUser;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppDeleteDeviceRequest {
  /** 访问Token */
  AccessToken: string;
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface AppDeleteDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppGetDeviceDataRequest {
  /** 访问Token */
  AccessToken: string;
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface AppGetDeviceDataResponse {
  /** 设备数据。 */
  DeviceData?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppGetDeviceRequest {
  /** 访问Token */
  AccessToken: string;
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface AppGetDeviceResponse {
  /** 绑定设备详情 */
  AppDevice?: AppDeviceDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppGetDeviceStatusesRequest {
  /** 访问Token */
  AccessToken: string;
  /** 设备Id列表（单次限制1000个设备） */
  DeviceIds: string[];
}

declare interface AppGetDeviceStatusesResponse {
  /** 设备状态 */
  DeviceStatuses?: DeviceStatus[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppGetDevicesRequest {
  /** 访问Token */
  AccessToken: string;
}

declare interface AppGetDevicesResponse {
  /** 绑定设备列表 */
  Devices?: AppDevice[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppGetTokenRequest {
  /** 用户名 */
  UserName: string;
  /** 密码 */
  Password: string;
  /** TTL */
  Expire?: number;
}

declare interface AppGetTokenResponse {
  /** 访问Token */
  AccessToken?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppGetUserRequest {
  /** 访问Token */
  AccessToken: string;
}

declare interface AppGetUserResponse {
  /** 用户信息 */
  AppUser?: AppUser;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppIssueDeviceControlRequest {
  /** 访问Token */
  AccessToken: string;
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 控制数据（json） */
  ControlData: string;
  /** 是否发送metadata字段 */
  Metadata?: boolean;
}

declare interface AppIssueDeviceControlResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppResetPasswordRequest {
  /** 访问Token */
  AccessToken: string;
  /** 旧密码 */
  OldPassword: string;
  /** 新密码 */
  NewPassword: string;
}

declare interface AppResetPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppSecureAddDeviceRequest {
  /** 访问Token */
  AccessToken: string;
  /** 设备签名 */
  DeviceSignature: string;
}

declare interface AppSecureAddDeviceResponse {
  /** 绑定设备信息 */
  AppDevice?: AppDevice;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppUpdateDeviceRequest {
  /** 访问Token */
  AccessToken: string;
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 设备别名 */
  AliasName?: string;
}

declare interface AppUpdateDeviceResponse {
  /** 设备信息 */
  AppDevice?: AppDevice;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AppUpdateUserRequest {
  /** 访问Token */
  AccessToken: string;
  /** 昵称 */
  NickName?: string;
}

declare interface AppUpdateUserResponse {
  /** 应用用户 */
  AppUser?: AppUser;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateSubDeviceToGatewayProductRequest {
  /** 子设备产品Id */
  SubDeviceProductId: string;
  /** 网关产品Id */
  GatewayProductId: string;
}

declare interface AssociateSubDeviceToGatewayProductResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeactivateRuleRequest {
  /** 规则Id */
  RuleId: string;
}

declare interface DeactivateRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDeviceRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface DeleteDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteProductRequest {
  /** 产品Id */
  ProductId: string;
}

declare interface DeleteProductResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRuleRequest {
  /** 规则Id */
  RuleId: string;
}

declare interface DeleteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTopicRequest {
  /** TopicId */
  TopicId: string;
  /** 产品Id */
  ProductId: string;
}

declare interface DeleteTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDataHistoryRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称列表，允许最多一次100台 */
  DeviceNames: string[];
  /** 查询开始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
  /** 查询数据量 */
  Size?: number;
  /** 时间排序（desc/asc） */
  Order?: string;
  /** 查询游标 */
  ScrollId?: string;
}

declare interface GetDataHistoryResponse {
  /** 数据历史 */
  DataHistory?: DataHistoryEntry[];
  /** 查询游标 */
  ScrollId?: string;
  /** 查询游标超时 */
  ScrollTimeout?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDebugLogRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称列表，最大支持100台 */
  DeviceNames: string[];
  /** 查询开始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
  /** 查询数据量 */
  Size?: number;
  /** 时间排序（desc/asc） */
  Order?: string;
  /** 查询游标 */
  ScrollId?: string;
  /** 日志类型（shadow/action/mqtt） */
  Type?: string;
}

declare interface GetDebugLogResponse {
  /** 调试日志 */
  DebugLog?: DebugLogEntry[];
  /** 查询游标 */
  ScrollId?: string;
  /** 游标超时 */
  ScrollTimeout?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDeviceDataRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface GetDeviceDataResponse {
  /** 设备数据 */
  DeviceData?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDeviceLogRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称列表，最大支持100台 */
  DeviceNames: string[];
  /** 查询开始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
  /** 查询数据量 */
  Size?: number;
  /** 时间排序（desc/asc） */
  Order?: string;
  /** 查询游标 */
  ScrollId?: string;
  /** 日志类型（comm/status） */
  Type?: string;
}

declare interface GetDeviceLogResponse {
  /** 设备日志 */
  DeviceLog?: DeviceLogEntry[];
  /** 查询游标 */
  ScrollId?: string;
  /** 游标超时 */
  ScrollTimeout?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDeviceRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface GetDeviceResponse {
  /** 设备信息 */
  Device?: Device;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDeviceSignaturesRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称列表（单次限制1000个设备） */
  DeviceNames: string[];
  /** 过期时间 */
  Expire?: number;
}

declare interface GetDeviceSignaturesResponse {
  /** 设备绑定签名列表 */
  DeviceSignatures?: DeviceSignature[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDeviceStatisticsRequest {
  /** 产品Id列表 */
  Products?: string[];
  /** 开始日期 */
  StartDate?: string;
  /** 结束日期 */
  EndDate?: string;
}

declare interface GetDeviceStatisticsResponse {
  /** 统计数据 */
  DeviceStatistics?: DeviceStatData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDeviceStatusesRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称列表（单次限制1000个设备） */
  DeviceNames: string[];
}

declare interface GetDeviceStatusesResponse {
  /** 设备状态列表 */
  DeviceStatuses?: DeviceStatus[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDevicesRequest {
  /** 产品Id */
  ProductId: string;
  /** 偏移 */
  Offset?: number;
  /** 长度 */
  Length?: number;
  /** 关键字查询 */
  Keyword?: string;
}

declare interface GetDevicesResponse {
  /** 设备列表 */
  Devices?: DeviceEntry[];
  /** 设备总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetProductRequest {
  /** 产品Id */
  ProductId: string;
}

declare interface GetProductResponse {
  /** 产品信息 */
  Product?: Product;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetProductsRequest {
  /** 偏移 */
  Offset?: number;
  /** 长度 */
  Length?: number;
}

declare interface GetProductsResponse {
  /** Product列表 */
  Products?: ProductEntry[];
  /** Product总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRuleRequest {
  /** 规则Id */
  RuleId: string;
}

declare interface GetRuleResponse {
  /** 规则 */
  Rule?: Rule;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRulesRequest {
  /** 偏移 */
  Offset?: number;
  /** 长度 */
  Length?: number;
}

declare interface GetRulesResponse {
  /** 规则列表 */
  Rules?: Rule[];
  /** 规则总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTopicRequest {
  /** TopicId */
  TopicId: string;
  /** 产品Id */
  ProductId: string;
}

declare interface GetTopicResponse {
  /** Topic信息 */
  Topic?: Topic;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTopicsRequest {
  /** 产品Id */
  ProductId: string;
  /** 偏移 */
  Offset?: number;
  /** 长度 */
  Length?: number;
}

declare interface GetTopicsResponse {
  /** Topic列表 */
  Topics?: Topic[];
  /** Topic总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IssueDeviceControlRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 控制数据（json） */
  ControlData: string;
  /** 是否发送metadata字段 */
  Metadata?: boolean;
}

declare interface IssueDeviceControlResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PublishMsgRequest {
  /** Topic */
  Topic: string;
  /** 消息内容 */
  Message: string;
  /** Qos(目前QoS支持0与1) */
  Qos?: number;
}

declare interface PublishMsgResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetDeviceRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface ResetDeviceResponse {
  /** 设备信息 */
  Device?: Device;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnassociateSubDeviceFromGatewayProductRequest {
  /** 子设备产品Id */
  SubDeviceProductId: string;
  /** 网关设备产品Id */
  GatewayProductId: string;
}

declare interface UnassociateSubDeviceFromGatewayProductResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateProductRequest {
  /** 产品Id */
  ProductId: string;
  /** 产品名称 */
  Name?: string;
  /** 产品描述 */
  Description?: string;
  /** 数据模版 */
  DataTemplate?: DataTemplate[];
}

declare interface UpdateProductResponse {
  /** 更新后的产品信息 */
  Product?: Product;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateRuleRequest {
  /** 规则Id */
  RuleId: string;
  /** 名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 查询 */
  Query?: RuleQuery;
  /** 转发动作列表 */
  Actions?: Action[];
  /** 数据类型（0：文本，1：二进制） */
  DataType?: number;
}

declare interface UpdateRuleResponse {
  /** 规则 */
  Rule?: Rule;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [加速物联网套件](https://cloud.tencent.com/document/product/568) */
declare interface Iot {
  (): Versions;
  /** 启用规则 */
  ActivateRule(data: ActivateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateRuleResponse>;
  /** 新增设备 */
  AddDevice(data: AddDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AddDeviceResponse>;
  /** 新增产品 */
  AddProduct(data: AddProductRequest, config?: AxiosRequestConfig): AxiosPromise<AddProductResponse>;
  /** 新增规则 */
  AddRule(data: AddRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddRuleResponse>;
  /** 新增Topic */
  AddTopic(data: AddTopicRequest, config?: AxiosRequestConfig): AxiosPromise<AddTopicResponse>;
  /** 用户注册 */
  AppAddUser(data: AppAddUserRequest, config?: AxiosRequestConfig): AxiosPromise<AppAddUserResponse>;
  /** 用户解绑设备 */
  AppDeleteDevice(data: AppDeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AppDeleteDeviceResponse>;
  /** 获取绑定设备信息 */
  AppGetDevice(data: AppGetDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AppGetDeviceResponse>;
  /** 获取绑定设备数据 */
  AppGetDeviceData(data: AppGetDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<AppGetDeviceDataResponse>;
  /** 获取绑定设备状态 */
  AppGetDeviceStatuses(data: AppGetDeviceStatusesRequest, config?: AxiosRequestConfig): AxiosPromise<AppGetDeviceStatusesResponse>;
  /** 获取绑定设备列表 */
  AppGetDevices(data: AppGetDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<AppGetDevicesResponse>;
  /** 获取用户token */
  AppGetToken(data: AppGetTokenRequest, config?: AxiosRequestConfig): AxiosPromise<AppGetTokenResponse>;
  /** 获取用户信息 */
  AppGetUser(data: AppGetUserRequest, config?: AxiosRequestConfig): AxiosPromise<AppGetUserResponse>;
  /** 用户控制设备 */
  AppIssueDeviceControl(data: AppIssueDeviceControlRequest, config?: AxiosRequestConfig): AxiosPromise<AppIssueDeviceControlResponse>;
  /** 重置用户密码 */
  AppResetPassword(data: AppResetPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<AppResetPasswordResponse>;
  /** 用户绑定设备 */
  AppSecureAddDevice(data: AppSecureAddDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AppSecureAddDeviceResponse>;
  /** 修改设备别名 */
  AppUpdateDevice(data: AppUpdateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AppUpdateDeviceResponse>;
  /** 用户信息修改 */
  AppUpdateUser(data: AppUpdateUserRequest, config?: AxiosRequestConfig): AxiosPromise<AppUpdateUserResponse>;
  /** 关联子设备产品和网关产品 */
  AssociateSubDeviceToGatewayProduct(data: AssociateSubDeviceToGatewayProductRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSubDeviceToGatewayProductResponse>;
  /** 禁用规则 */
  DeactivateRule(data: DeactivateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeactivateRuleResponse>;
  /** 删除设备 */
  DeleteDevice(data: DeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceResponse>;
  /** 删除产品 */
  DeleteProduct(data: DeleteProductRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProductResponse>;
  /** 删除规则 */
  DeleteRule(data: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 删除Topic */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** 获取设备历史数据 */
  GetDataHistory(data: GetDataHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<GetDataHistoryResponse>;
  /** 获取调试日志 */
  GetDebugLog(data: GetDebugLogRequest, config?: AxiosRequestConfig): AxiosPromise<GetDebugLogResponse>;
  /** 获取设备信息 */
  GetDevice(data: GetDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceResponse>;
  /** 获取设备数据 */
  GetDeviceData(data: GetDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceDataResponse>;
  /** 获取设备日志 */
  GetDeviceLog(data: GetDeviceLogRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceLogResponse>;
  /** 获取设备绑定签名 */
  GetDeviceSignatures(data: GetDeviceSignaturesRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceSignaturesResponse>;
  /** 获取设备统计指标 */
  GetDeviceStatistics(data?: GetDeviceStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceStatisticsResponse>;
  /** 批量获取设备状态 */
  GetDeviceStatuses(data: GetDeviceStatusesRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceStatusesResponse>;
  /** 获取设备列表 */
  GetDevices(data: GetDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<GetDevicesResponse>;
  /** 获取产品信息 */
  GetProduct(data: GetProductRequest, config?: AxiosRequestConfig): AxiosPromise<GetProductResponse>;
  /** 获取产品列表 */
  GetProducts(data?: GetProductsRequest, config?: AxiosRequestConfig): AxiosPromise<GetProductsResponse>;
  /** 获取转发规则信息 */
  GetRule(data: GetRuleRequest, config?: AxiosRequestConfig): AxiosPromise<GetRuleResponse>;
  /** 获取转发规则列表 */
  GetRules(data?: GetRulesRequest, config?: AxiosRequestConfig): AxiosPromise<GetRulesResponse>;
  /** 获取Topic信息 */
  GetTopic(data: GetTopicRequest, config?: AxiosRequestConfig): AxiosPromise<GetTopicResponse>;
  /** 获取Topic列表 */
  GetTopics(data: GetTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<GetTopicsResponse>;
  /** 下发设备控制指令 */
  IssueDeviceControl(data: IssueDeviceControlRequest, config?: AxiosRequestConfig): AxiosPromise<IssueDeviceControlResponse>;
  /** 向Topic发布消息 */
  PublishMsg(data: PublishMsgRequest, config?: AxiosRequestConfig): AxiosPromise<PublishMsgResponse>;
  /** 重置设备 */
  ResetDevice(data: ResetDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ResetDeviceResponse>;
  /** 取消子设备产品与网关设备产品的关联 */
  UnassociateSubDeviceFromGatewayProduct(data: UnassociateSubDeviceFromGatewayProductRequest, config?: AxiosRequestConfig): AxiosPromise<UnassociateSubDeviceFromGatewayProductResponse>;
  /** 更新产品信息 */
  UpdateProduct(data: UpdateProductRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProductResponse>;
  /** 更新规则 */
  UpdateRule(data: UpdateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRuleResponse>;
}

export declare type Versions = ["2018-01-23"];

export default Iot;
