/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 告警策略 */
declare interface AlarmPolicy {
  /** 用户账号 */
  Uin?: string;
  /** 告警事件 */
  Event?: string;
  /** 告警阈值 */
  Limit?: number;
  /** 告警策略是否生效，0：停用，1：启用 */
  Status?: number;
  /** 在这个时间后才允许发送告警 */
  BeginTime?: string;
  /** 在这个时间前才允许发送告警 */
  EndTime?: string;
}

/** 设备厂商信息 */
declare interface DeviceInfo {
  /** 厂商名称 */
  Manufacturer: string;
  /** 此厂商旗下的设备信息列表 */
  HsmTypes: HsmInfo[];
}

/** 支持的加密机类型信息 */
declare interface HsmInfo {
  /** 加密机型号 */
  Model: string;
  /** 此类型的加密机所支持的VSM类型列表 */
  VsmTypes: VsmInfo[];
  /** 加密机母机类型：virtualization、GHSM、EHSM、SHSM */
  HsmType?: string;
}

/** 资源信息 */
declare interface ResourceInfo {
  /** 资源Id */
  ResourceId?: string | null;
  /** 资源名称 */
  ResourceName?: string | null;
  /** 资源状态，1-正常，2-隔离，3-销毁 */
  Status?: number | null;
  /** 资源IP */
  Vip?: string | null;
  /** 资源所属Vpc */
  VpcId?: string | null;
  /** 资源所属子网 */
  SubnetId?: string | null;
  /** 资源所属HSM规格 */
  Model?: string | null;
  /** 云加密机类型id */
  VsmType?: number | null;
  /** 地域Id */
  RegionId?: number | null;
  /** 区域Id */
  ZoneId?: number | null;
  /** 过期时间（Epoch Unix Timestamp） */
  ExpireTime?: number | null;
  /** 地域名 */
  RegionName?: string | null;
  /** 区域名 */
  ZoneName?: string | null;
  /** 实例的安全组列表 */
  SgList?: SgUnit[] | null;
  /** 子网名称 */
  SubnetName?: string | null;
  /** 当前实例是否已经过期 */
  Expired?: boolean | null;
  /** 为正数表示实例距离过期时间还剩余多少秒，为负数表示已经过期多少秒 */
  RemainSeconds?: number | null;
  /** Vpc名称 */
  VpcName?: string | null;
  /** 创建者Uin账号 */
  CreateUin?: string | null;
  /** 自动续费状态标识， 0-手动续费，1-自动续费，2-到期不续 */
  RenewFlag?: number | null;
  /** 标签列表 */
  Tags?: Tag[] | null;
  /** 厂商 */
  Manufacturer?: string | null;
  /** 告警状态，0：停用，1：启用 */
  AlarmStatus?: number | null;
}

/** 安全组基础信息 */
declare interface SgUnit {
  /** 安全组Id */
  SgId: string | null;
  /** 安全组名称 */
  SgName: string | null;
  /** 备注 */
  SgRemark: string | null;
  /** 创建时间 */
  CreateTime: string | null;
}

/** Subnet对象 */
declare interface Subnet {
  /** VPC实例ID。 */
  VpcId: string | null;
  /** 子网实例ID，例如：subnet-bthucmmy。 */
  SubnetId: string | null;
  /** 子网名称。 */
  SubnetName: string | null;
  /** 子网的 IPv4 CIDR。 */
  CidrBlock: string | null;
  /** 创建时间。 */
  CreatedTime: string | null;
  /** 可用IP数。 */
  AvailableIpAddressCount: number | null;
  /** 子网的 IPv6 CIDR。 */
  Ipv6CidrBlock: string | null;
  /** 总IP数 */
  TotalIpAddressCount: number | null;
  /** 是否为默认Subnet */
  IsDefault: boolean | null;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 标签过滤参数 */
declare interface TagFilter {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue?: string[];
}

/** 安全组策略 */
declare interface UsgPolicy {
  /** cidr格式地址 */
  Ip?: string | null;
  /** 安全组id代表的地址集合 */
  Id?: string | null;
  /** 地址组id代表的地址集合 */
  AddressModule?: string | null;
  /** 协议 */
  Proto?: string | null;
  /** 端口 */
  Port?: string | null;
  /** 服务组id代表的协议和端口集合 */
  ServiceModule?: string | null;
  /** 备注 */
  Desc?: string | null;
  /** 匹配后行为:ACCEPT/DROP */
  Action?: string | null;
}

/** 安全组规则详情 */
declare interface UsgRuleDetail {
  /** 入站规则 */
  InBound?: UsgPolicy[] | null;
  /** 出站规则 */
  OutBound?: UsgPolicy[] | null;
  /** 安全组Id */
  SgId?: string | null;
  /** 安全组名称 */
  SgName?: string | null;
  /** 备注 */
  SgRemark?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 版本 */
  Version?: number | null;
}

/** VPC对象 */
declare interface Vpc {
  /** Vpc名称 */
  VpcName: string | null;
  /** VpcId */
  VpcId: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 是否为默认VPC */
  IsDefault: boolean | null;
}

/** 支持的Vsm类型信息 */
declare interface VsmInfo {
  /** VSM类型名称 */
  TypeName: string;
  /** VSM类型值 */
  TypeID: number;
}

declare interface DescribeHSMBySubnetIdRequest {
  /** Subnet标识符 */
  SubnetId: string;
}

declare interface DescribeHSMBySubnetIdResponse {
  /** HSM数量 */
  TotalCount?: number;
  /** 作为查询条件的SubnetId */
  SubnetId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHSMByVpcIdRequest {
  /** VPC标识符 */
  VpcId: string;
}

declare interface DescribeHSMByVpcIdResponse {
  /** HSM数量 */
  TotalCount?: number;
  /** 作为查询条件的VpcId */
  VpcId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubnetRequest {
  /** 返回数量。Limit需要在[1, 100]之间。 */
  Limit: number;
  /** 偏移量。偏移量最小为0。 */
  Offset: number;
  /** 查询指定VpcId下的子网信息。 */
  VpcId: string;
  /** 查找关键字 */
  SearchWord?: string;
}

declare interface DescribeSubnetResponse {
  /** 返回的子网数量。 */
  TotalCount: number;
  /** 返回的子网实例列表。 */
  SubnetList: Subnet[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSupportedHsmRequest {
  /** Hsm类型，可选值all、virtulization、GHSM、EHSM、SHSM */
  HsmType?: string;
}

declare interface DescribeSupportedHsmResponse {
  /** 当前地域所支持的设备列表 */
  DeviceTypes: DeviceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsgRequest {
  /** 偏移量，当Offset和Limit均为0时将一次性返回用户所有的安全组列表。 */
  Offset: number;
  /** 返回量，当Offset和Limit均为0时将一次性返回用户所有的安全组列表。 */
  Limit: number;
  /** 搜索关键字 */
  SearchWord?: string;
}

declare interface DescribeUsgResponse {
  /** 用户的安全组列表 */
  SgList: SgUnit[] | null;
  /** 返回的安全组数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsgRuleRequest {
  /** 根据安全组Id获取安全组详情 */
  SgIds: string[];
}

declare interface DescribeUsgRuleResponse {
  /** 安全组详情 */
  SgRules: UsgRuleDetail[] | null;
  /** 安全组详情数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcRequest {
  /** 返回偏移量。Offset最小为0。 */
  Offset: number;
  /** 返回数量。Limit需要在[1, 100]之间。 */
  Limit: number;
  /** 搜索关键字 */
  SearchWord?: string;
}

declare interface DescribeVpcResponse {
  /** 可查询到的所有Vpc实例总数。 */
  TotalCount: number;
  /** Vpc对象列表 */
  VpcList: Vpc[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVsmAttributesRequest {
  /** 资源Id */
  ResourceId: string;
}

declare interface DescribeVsmAttributesResponse {
  /** 资源Id */
  ResourceId?: string;
  /** 资源名称 */
  ResourceName?: string;
  /** 资源状态，1表示资源为正常，2表示资源处于隔离状态 */
  Status?: number;
  /** 资源IP */
  Vip?: string;
  /** 资源所属Vpc */
  VpcId?: string;
  /** 资源所属子网 */
  SubnetId?: string;
  /** 资源所属HSM的规格 */
  Model?: string;
  /** 资源类型，17表示EVSM，33表示GVSM，49表示SVSM */
  VsmType?: number;
  /** 地域Id，返回腾讯云地域代码，如广州为1，北京为8 */
  RegionId?: number;
  /** 区域Id，返回腾讯云每个地域的可用区代码 */
  ZoneId?: number;
  /** 资源过期时间，以时间戳形式展示。 */
  ExpireTime?: number;
  /** 安全组详情信息 */
  SgList?: UsgRuleDetail[] | null;
  /** 子网名 */
  SubnetName?: string | null;
  /** 地域名 */
  RegionName?: string | null;
  /** 区域名 */
  ZoneName?: string | null;
  /** 实例是否已经过期 */
  Expired?: boolean | null;
  /** 为正数表示实例距离过期时间剩余秒数，为负数表示实例已经过期多少秒 */
  RemainSeconds?: number | null;
  /** 私有虚拟网络名称 */
  VpcName?: string | null;
  /** VPC的IPv4 CIDR */
  VpcCidrBlock?: string | null;
  /** 子网的CIDR */
  SubnetCidrBlock?: string | null;
  /** 资源所关联的Tag */
  Tags?: Tag[] | null;
  /** 资源续费标识，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  RenewFlag?: number | null;
  /** 厂商 */
  Manufacturer?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVsmsRequest {
  /** 偏移 */
  Offset: number;
  /** 最大数量 */
  Limit: number;
  /** 资源ID或者资源名字模糊查询的关键字 */
  SearchWord?: string;
  /** 标签过滤条件 */
  TagFilters?: TagFilter[];
  /** 设备所属的厂商名称，根据厂商来进行筛选 */
  Manufacturer?: string;
  /** Hsm服务类型，可选virtualization、physical、GHSM、EHSM、SHSM、all */
  HsmType?: string;
}

declare interface DescribeVsmsResponse {
  /** 获取实例的总个数 */
  TotalCount?: number;
  /** 资源信息 */
  VsmList?: ResourceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAlarmEventRequest {
}

declare interface GetAlarmEventResponse {
  /** 用户所有的告警策略 */
  AlarmConfig?: AlarmPolicy[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetVsmMonitorInfoRequest {
  /** 资源Id */
  ResourceId: string;
  /** 资源名称 */
  ResourceName?: string;
}

declare interface GetVsmMonitorInfoResponse {
  /** VSM监控信息 */
  MonitorInfo?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceBuyVsmRequest {
  /** 需购买实例的数量 */
  GoodsNum: number;
  /** 付费模式：0表示按需计费/后付费，1表示预付费 */
  PayMode: number;
  /** 商品的时间大小，整型参数，举例：当TimeSpan为1，TImeUnit为m时，表示询价购买时长为1个月时的价格 */
  TimeSpan: string;
  /** 商品的时间单位，m表示月，y表示年 */
  TimeUnit: string;
  /** 货币类型，默认为CNY */
  Currency?: string;
  /** 默认为CREATE，可选RENEW */
  Type?: string;
  /** Hsm服务类型，可选值virtualization、physical、GHSM、EHSM、SHSM */
  HsmType?: string;
}

declare interface InquiryPriceBuyVsmResponse {
  /** 原始总金额，浮点型参数，精确到小数点后两位，如：2000.99 */
  TotalCost: number | null;
  /** 购买的实例数量 */
  GoodsNum: number | null;
  /** 商品的时间大小，整型参数，举例：当TimeSpan为1，TImeUnit为m时，表示询价购买时长为1个月时的价格 */
  TimeSpan: string | null;
  /** 商品的时间单位，m表示月，y表示年 */
  TimeUnit: string | null;
  /** 应付总金额，浮点型参数，精确到小数点后两位，如：2000.99 */
  OriginalCost: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmEventRequest {
  /** 告警事件，支持CPU、MEM、TCP */
  Event: string;
  /** 告警阈值 */
  Limit: number;
  /** 告警状态，0表示停用，1表示启动 */
  Status: number;
  /** 告警开始时间，只有在这个时间后才会发送告警，当跟EndTime同时为空时表示全天告警 */
  BeginTime?: string;
  /** 告警结束时间，只有在这个时间前才会发送告警，当跟BeginTime同时为空时表示全天告警 */
  EndTime?: string;
}

declare interface ModifyAlarmEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVsmAttributesRequest {
  /** 资源Id */
  ResourceId: string;
  /** UpdateResourceName-修改资源名称,UpdateSgIds-修改安全组名称,UpdateNetWork-修改网络,Default-默认不修改 */
  Type: string[];
  /** 资源名称 */
  ResourceName?: string;
  /** 安全组Id */
  SgIds?: string[];
  /** 虚拟专网Id */
  VpcId?: string;
  /** 子网Id */
  SubnetId?: string;
  /** 告警开关，0表示关闭告警，1表示启用告警 */
  AlarmStatus?: number;
}

declare interface ModifyVsmAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cloudhsm 云加密机} */
declare interface Cloudhsm {
  (): Versions;
  /** 通过SubnetId获取Hsm资源数 {@link DescribeHSMBySubnetIdRequest} {@link DescribeHSMBySubnetIdResponse} */
  DescribeHSMBySubnetId(data: DescribeHSMBySubnetIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHSMBySubnetIdResponse>;
  /** 通过VpcId获取Hsm资源数 {@link DescribeHSMByVpcIdRequest} {@link DescribeHSMByVpcIdResponse} */
  DescribeHSMByVpcId(data: DescribeHSMByVpcIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHSMByVpcIdResponse>;
  /** 查询子网列表 {@link DescribeSubnetRequest} {@link DescribeSubnetResponse} */
  DescribeSubnet(data: DescribeSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetResponse>;
  /** 获取当前地域所支持的设备列表 {@link DescribeSupportedHsmRequest} {@link DescribeSupportedHsmResponse} */
  DescribeSupportedHsm(data?: DescribeSupportedHsmRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSupportedHsmResponse>;
  /** 获取用户安全组列表 {@link DescribeUsgRequest} {@link DescribeUsgResponse} */
  DescribeUsg(data: DescribeUsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsgResponse>;
  /** 获取安全组详情 {@link DescribeUsgRuleRequest} {@link DescribeUsgRuleResponse} */
  DescribeUsgRule(data: DescribeUsgRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsgRuleResponse>;
  /** 查询私有网络列表 {@link DescribeVpcRequest} {@link DescribeVpcResponse} */
  DescribeVpc(data: DescribeVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcResponse>;
  /** 获取VSM属性 {@link DescribeVsmAttributesRequest} {@link DescribeVsmAttributesResponse} */
  DescribeVsmAttributes(data: DescribeVsmAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVsmAttributesResponse>;
  /** 获取用户VSM列表 {@link DescribeVsmsRequest} {@link DescribeVsmsResponse} */
  DescribeVsms(data: DescribeVsmsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVsmsResponse>;
  /** 获取告警事件 {@link GetAlarmEventRequest} {@link GetAlarmEventResponse} */
  GetAlarmEvent(data?: GetAlarmEventRequest, config?: AxiosRequestConfig): AxiosPromise<GetAlarmEventResponse>;
  /** 获取VSM监控信息 {@link GetVsmMonitorInfoRequest} {@link GetVsmMonitorInfoResponse} */
  GetVsmMonitorInfo(data: GetVsmMonitorInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetVsmMonitorInfoResponse>;
  /** 询价 {@link InquiryPriceBuyVsmRequest} {@link InquiryPriceBuyVsmResponse} */
  InquiryPriceBuyVsm(data: InquiryPriceBuyVsmRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceBuyVsmResponse>;
  /** 修改告警事件 {@link ModifyAlarmEventRequest} {@link ModifyAlarmEventResponse} */
  ModifyAlarmEvent(data: ModifyAlarmEventRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmEventResponse>;
  /** 修改VSM属性 {@link ModifyVsmAttributesRequest} {@link ModifyVsmAttributesResponse} */
  ModifyVsmAttributes(data: ModifyVsmAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVsmAttributesResponse>;
}

export declare type Versions = ["2019-11-12"];

export default Cloudhsm;
