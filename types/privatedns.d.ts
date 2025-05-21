/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 私有域解析账号Vpc信息 */
declare interface AccountVpcInfo {
  /** VpcId */
  UniqVpcId: string;
  /** Vpc所属地区 */
  Region: string;
  /** Vpc所属账号 */
  Uin: string;
  /** vpc资源名称 */
  VpcName?: string;
}

/** 查询关联账号VPC列表出参 */
declare interface AccountVpcInfoOut {
  /** VpcId */
  VpcId?: string;
  /** Vpc所属地区: ap-guangzhou, ap-shanghai */
  Region?: string;
  /** Vpc所属账号: 123456789 */
  Uin?: string;
  /** vpc资源名称：testname */
  VpcName?: string;
}

/** 关联的VPC出参 */
declare interface AccountVpcInfoOutput {
  /** 关联账户的uin */
  Uin: string;
  /** vpcid */
  UniqVpcId: string;
  /** 地域 */
  Region: string;
}

/** 操作日志 */
declare interface AuditLog {
  /** 日志类型 */
  Resource?: string;
  /** 日志表名 */
  Metric?: string;
  /** 日志总数 */
  TotalCount?: number;
  /** 日志列表 */
  DataSet?: AuditLogInfo[];
}

/** 日志详情 */
declare interface AuditLogInfo {
  /** 时间 */
  Date?: string;
  /** 操作人uin */
  OperatorUin?: string;
  /** 日志内容 */
  Content?: string;
}

/** 时间统计值 */
declare interface DatePoint {
  /** 时间 */
  Date?: string;
  /** 值 */
  Value?: number;
}

/** 筛选参数 */
declare interface Filter {
  /** 参数名 */
  Name: string;
  /** 参数值数组 */
  Values: string[];
}

/** 流量包用量 */
declare interface FlowUsage {
  /** 流量包类型：ZONE 私有域；TRAFFIC 解析流量包 */
  FlowType?: string;
  /** 流量包总额度 */
  TotalQuantity?: number;
  /** 流量包可用额度 */
  AvailableQuantity?: number;
}

/** 统计数据表 */
declare interface MetricData {
  /** 资源描述 */
  Resource?: string;
  /** 表名 */
  Metric?: string;
  /** 表数据 */
  DataSet?: DatePoint[];
  /** 查询范围内的请求总量 */
  MetricCount?: number;
}

/** 私有域解析账号 */
declare interface PrivateDNSAccount {
  /** 主账号Uin */
  Uin: string;
  /** 主账号名称 */
  Account?: string;
  /** 用户昵称 */
  Nickname?: string;
}

/** 私有域信息 */
declare interface PrivateZone {
  /** 私有域id: zone-xxxxxxxx */
  ZoneId?: string;
  /** 域名所有者uin */
  OwnerUin?: number;
  /** 私有域名 */
  Domain?: string;
  /** 创建时间 */
  CreatedOn?: string;
  /** 修改时间 */
  UpdatedOn?: string;
  /** 记录数 */
  RecordCount?: number;
  /** 备注 */
  Remark?: string;
  /** 绑定的Vpc列表 */
  VpcSet?: VpcInfo[];
  /** 私有域绑定VPC状态，未关联vpc：SUSPEND，已关联VPC：ENABLED，关联VPC失败：FAILED */
  Status?: string;
  /** 域名递归解析状态：开通：ENABLED, 关闭，DISABLED */
  DnsForwardStatus?: string;
  /** 标签键值对集合 */
  Tags?: TagInfo[];
  /** 绑定的关联账号的vpc列表 */
  AccountVpcSet?: AccountVpcInfoOutput[];
  /** 是否自定义TLD */
  IsCustomTld?: boolean;
  /** CNAME加速状态：开通：ENABLED, 关闭，DISABLED */
  CnameSpeedupStatus?: string;
  /** 转发规则名称 */
  ForwardRuleName?: string;
  /** 转发规则类型：云上到云下，DOWN；云下到云上，UP，目前只支持DOWN */
  ForwardRuleType?: string;
  /** 转发的地址 */
  ForwardAddress?: string;
  /** 终端节点名称 */
  EndPointName?: string | null;
  /** 已删除的vpc */
  DeletedVpcSet?: VpcInfo[];
}

/** 私有域信息 */
declare interface PrivateZoneRecord {
  /** 记录id */
  RecordId?: string;
  /** 私有域id: zone-xxxxxxxx */
  ZoneId?: string;
  /** 子域名 */
  SubDomain?: string;
  /** 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR" */
  RecordType?: string;
  /** 记录值 */
  RecordValue?: string;
  /** 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600 */
  TTL?: number;
  /** MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50 */
  MX?: number;
  /** 记录状态：ENABLED */
  Status?: string;
  /** 记录权重，值为1-100 */
  Weight?: number | null;
  /** 记录创建时间 */
  CreatedOn?: string;
  /** 记录更新时间 */
  UpdatedOn?: string;
  /** 附加信息 */
  Extra?: string | null;
  /** 0暂停，1启用 */
  Enabled?: number;
  /** 备注 */
  Remark?: string;
}

/** 标签 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** Tld额度 */
declare interface TldQuota {
  /** 总共额度 */
  Total: number;
  /** 已使用额度 */
  Used: number;
  /** 库存 */
  Stock: number;
  /** 用户限额 */
  Quota: number;
}

/** Vpc信息 */
declare interface VpcInfo {
  /** VpcId */
  UniqVpcId: string;
  /** Vpc所属地区: ap-guangzhou, ap-shanghai */
  Region: string;
}

declare interface AddSpecifyPrivateZoneVpcRequest {
  /** 私有域id */
  ZoneId: string;
  /** 本次新增的vpc信息 */
  VpcSet?: VpcInfo[];
  /** 本次新增关联账户vpc信息 */
  AccountVpcSet?: AccountVpcInfo[];
  /** 是否为同步操作 */
  Sync?: boolean;
}

declare interface AddSpecifyPrivateZoneVpcResponse {
  /** zone id */
  ZoneId?: string;
  /** 本次新增的vpc */
  VpcSet?: VpcInfo[];
  /** 本次新增的关联账号vpc */
  AccountVpcSet?: AccountVpcInfo[];
  /** 唯一id */
  UniqId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateDNSAccountRequest {
  /** 私有域解析账号 */
  Account: PrivateDNSAccount;
}

declare interface CreatePrivateDNSAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateZoneRecordRequest {
  /** 私有域ID */
  ZoneId: string;
  /** 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR" */
  RecordType: string;
  /** 子域名，例如 "www", "m", "@" */
  SubDomain: string;
  /** 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com. */
  RecordValue: string;
  /** 记录权重，值为1-100 */
  Weight?: number;
  /** MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50 */
  MX?: number;
  /** 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600 */
  TTL?: number;
  /** 备注 */
  Remark?: string;
}

declare interface CreatePrivateZoneRecordResponse {
  /** 记录Id */
  RecordId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateZoneRequest {
  /** 域名，格式必须是标准的TLD */
  Domain: string;
  /** 创建私有域的同时，为其打上标签 */
  TagSet?: TagInfo[];
  /** 创建私有域的同时，将其关联至VPC */
  VpcSet?: VpcInfo[];
  /** 备注 */
  Remark?: string;
  /** 是否开启子域名递归, ENABLED， DISABLED。默认值为ENABLED */
  DnsForwardStatus?: string;
  /** 创建私有域的同时，将其关联至VPC */
  Vpcs?: VpcInfo[];
  /** 创建私有域同时绑定关联账号的VPC */
  AccountVpcSet?: AccountVpcInfo[];
  /** 是否CNAME加速：ENABLED，DISABLED，默认值为ENABLED */
  CnameSpeedupStatus?: string;
}

declare interface CreatePrivateZoneResponse {
  /** 私有域ID, zone-12345678 */
  ZoneId?: string;
  /** 私有域名 */
  Domain?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateDNSAccountRequest {
  /** 私有域解析账号 */
  Account: PrivateDNSAccount;
}

declare interface DeletePrivateDNSAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateZoneRecordRequest {
  /** 私有域ID */
  ZoneId?: string;
  /** 记录ID（调用DescribePrivateZoneRecordList可获取到RecordId） */
  RecordId?: string;
  /** 记录ID数组，RecordId 优先 */
  RecordIdSet?: string[];
}

declare interface DeletePrivateZoneRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateZoneRequest {
  /** 私有域ID */
  ZoneId?: string;
  /** 私有域ID数组，ZoneId 优先 */
  ZoneIdSet?: string[];
}

declare interface DeletePrivateZoneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSpecifyPrivateZoneVpcRequest {
  /** 私有域id */
  ZoneId: string;
  /** 本次删除的VPC */
  VpcSet?: VpcInfo[];
  /** 本次删除的关联账户VPC */
  AccountVpcSet?: AccountVpcInfo[];
  /** 是否为同步操作 */
  Sync?: boolean;
}

declare interface DeleteSpecifyPrivateZoneVpcResponse {
  /** 私有域id */
  ZoneId?: string;
  /** 本次删除的VPC */
  VpcSet?: VpcInfo[];
  /** 本次删除的关联账户的VPC */
  AccountVpcSet?: AccountVpcInfo[];
  /** 唯一id */
  UniqId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountVpcListRequest {
  /** 关联账号的uin */
  AccountUin: string;
  /** 分页偏移量，从0开始 */
  Offset?: number;
  /** 分页限制数目， 最大100，默认20 */
  Limit?: number;
  /** 过滤参数 */
  Filters?: Filter[];
}

declare interface DescribeAccountVpcListResponse {
  /** VPC数量 */
  TotalCount?: number;
  /** VPC 列表 */
  VpcSet?: AccountVpcInfoOut[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditLogRequest {
  /** 请求量统计起始时间 */
  TimeRangeBegin: string;
  /** 筛选参数：ZoneId：私有域ID；Domain：私有域；OperatorUin：操作者账号ID */
  Filters?: Filter[];
  /** 请求量统计结束时间 */
  TimeRangeEnd?: string;
  /** 分页偏移量，从0开始 */
  Offset?: number;
  /** 分页限制数目， 最大100，默认20 */
  Limit?: number;
}

declare interface DescribeAuditLogResponse {
  /** 操作日志列表 */
  Data?: AuditLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDashboardRequest {
}

declare interface DescribeDashboardResponse {
  /** 私有域解析总数 */
  ZoneTotal?: number;
  /** 私有域关联VPC数量 */
  ZoneVpcCount?: number;
  /** 历史请求量总数 */
  RequestTotalCount?: number;
  /** 流量包用量 */
  FlowUsage?: FlowUsage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateDNSAccountListRequest {
  /** 分页偏移量，从0开始 */
  Offset?: number;
  /** 分页限制数目， 最大100，默认20 */
  Limit?: number;
  /** 过滤参数 */
  Filters?: Filter[];
}

declare interface DescribePrivateDNSAccountListResponse {
  /** 私有域解析账号数量 */
  TotalCount?: number;
  /** 私有域解析账号列表 */
  AccountSet?: PrivateDNSAccount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateZoneListRequest {
  /** 分页偏移量，从0开始 */
  Offset?: number;
  /** 分页限制数目， 最大100，默认20 */
  Limit?: number;
  /** 过滤参数 */
  Filters?: Filter[];
}

declare interface DescribePrivateZoneListResponse {
  /** 私有域数量 */
  TotalCount?: number;
  /** 私有域列表 */
  PrivateZoneSet?: PrivateZone[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateZoneRecordListRequest {
  /** 私有域ID: zone-xxxxxx */
  ZoneId: string;
  /** 过滤参数（支持使用Value、RecordType过滤） */
  Filters?: Filter[];
  /** 分页偏移量，从0开始 */
  Offset?: number;
  /** 分页限制数目， 最大200，默认20 */
  Limit?: number;
}

declare interface DescribePrivateZoneRecordListResponse {
  /** 解析记录数量 */
  TotalCount?: number;
  /** 解析记录列表 */
  RecordSet?: PrivateZoneRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateZoneRequest {
  /** 私有域id */
  ZoneId: string;
}

declare interface DescribePrivateZoneResponse {
  /** 私有域详情 */
  PrivateZone?: PrivateZone;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateZoneServiceRequest {
}

declare interface DescribePrivateZoneServiceResponse {
  /** 私有域解析服务开通状态。ENABLED已开通，DISABLED未开通 */
  ServiceStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuotaUsageRequest {
}

declare interface DescribeQuotaUsageResponse {
  /** Tld额度使用情况 */
  TldQuota: TldQuota;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRequestDataRequest {
  /** 请求量统计起始时间，格式：2020-11-22 00:00:00 */
  TimeRangeBegin: string;
  /** 筛选参数： */
  Filters?: Filter[];
  /** 请求量统计结束时间，格式：2020-11-22 23:59:59 */
  TimeRangeEnd?: string;
  /** 是否导出：true导出，false不导出 */
  Export?: boolean;
}

declare interface DescribeRequestDataResponse {
  /** 请求量统计表 */
  Data?: MetricData[];
  /** 请求量单位时间: Day：天，Hour：小时 */
  Interval?: string;
  /** 导出数据下载地址 */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateZoneRecordRequest {
  /** 私有域ID */
  ZoneId: string;
  /** 记录ID */
  RecordId: string;
  /** 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR" */
  RecordType: string;
  /** 子域名，例如 "www", "m", "@" */
  SubDomain: string;
  /** 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com. */
  RecordValue: string;
  /** 记录权重，值为1-100 */
  Weight?: number;
  /** MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50 */
  MX?: number;
  /** 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600 */
  TTL?: number;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyPrivateZoneRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateZoneRequest {
  /** 私有域ID */
  ZoneId: string;
  /** 备注 */
  Remark?: string;
  /** 是否开启子域名递归, ENABLED， DISABLED */
  DnsForwardStatus?: string;
  /** 是否开启CNAME加速：ENABLED， DISABLED */
  CnameSpeedupStatus?: string;
}

declare interface ModifyPrivateZoneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateZoneVpcRequest {
  /** 私有域ID */
  ZoneId: string;
  /** 私有域关联的全部VPC列表 */
  VpcSet?: VpcInfo[];
  /** 私有域账号关联的全部VPC列表 */
  AccountVpcSet?: AccountVpcInfo[];
}

declare interface ModifyPrivateZoneVpcResponse {
  /** 私有域ID, zone-12345ds6 */
  ZoneId?: string;
  /** 解析域关联的VPC列表 */
  VpcSet?: VpcInfo[];
  /** 私有域账号关联的全部VPC列表 */
  AccountVpcSet?: AccountVpcInfoOutput[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordsStatusRequest {
  /** 私有域ID */
  ZoneId: string;
  /** 解析记录ID列表 */
  RecordIds: number[];
  /** enabled：生效，disabled：失效 */
  Status: string;
}

declare interface ModifyRecordsStatusResponse {
  /** 私有域ID */
  ZoneId?: string;
  /** 解析记录ID列表 */
  RecordIds?: number[];
  /** enabled：生效，disabled：失效 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryAsyncBindVpcStatusRequest {
  /** 唯一ID */
  UniqId: string;
}

declare interface QueryAsyncBindVpcStatusResponse {
  /** processing 处理中，success 执行成功，failed 执行失败 */
  Status?: string;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubscribePrivateZoneServiceRequest {
}

declare interface SubscribePrivateZoneServiceResponse {
  /** 私有域解析服务开通状态 */
  ServiceStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Privatedns 私有域解析 Private DNS} */
declare interface Privatedns {
  (): Versions;
  /** 追加与私有域关联的VPC {@link AddSpecifyPrivateZoneVpcRequest} {@link AddSpecifyPrivateZoneVpcResponse} */
  AddSpecifyPrivateZoneVpc(data: AddSpecifyPrivateZoneVpcRequest, config?: AxiosRequestConfig): AxiosPromise<AddSpecifyPrivateZoneVpcResponse>;
  /** 添加绑定账号 {@link CreatePrivateDNSAccountRequest} {@link CreatePrivateDNSAccountResponse} */
  CreatePrivateDNSAccount(data: CreatePrivateDNSAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateDNSAccountResponse>;
  /** 创建私有域 {@link CreatePrivateZoneRequest} {@link CreatePrivateZoneResponse} */
  CreatePrivateZone(data: CreatePrivateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateZoneResponse>;
  /** 添加私有域解析记录 {@link CreatePrivateZoneRecordRequest} {@link CreatePrivateZoneRecordResponse} */
  CreatePrivateZoneRecord(data: CreatePrivateZoneRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateZoneRecordResponse>;
  /** 删除私有域解析账号 {@link DeletePrivateDNSAccountRequest} {@link DeletePrivateDNSAccountResponse} */
  DeletePrivateDNSAccount(data: DeletePrivateDNSAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateDNSAccountResponse>;
  /** 删除私有域 {@link DeletePrivateZoneRequest} {@link DeletePrivateZoneResponse} */
  DeletePrivateZone(data?: DeletePrivateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateZoneResponse>;
  /** 删除私有域解析记录 {@link DeletePrivateZoneRecordRequest} {@link DeletePrivateZoneRecordResponse} */
  DeletePrivateZoneRecord(data?: DeletePrivateZoneRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateZoneRecordResponse>;
  /** 删除与私有域关联的VPC {@link DeleteSpecifyPrivateZoneVpcRequest} {@link DeleteSpecifyPrivateZoneVpcResponse} */
  DeleteSpecifyPrivateZoneVpc(data: DeleteSpecifyPrivateZoneVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSpecifyPrivateZoneVpcResponse>;
  /** 获取私有域解析账号的VPC列表 {@link DescribeAccountVpcListRequest} {@link DescribeAccountVpcListResponse} */
  DescribeAccountVpcList(data: DescribeAccountVpcListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountVpcListResponse>;
  /** 获取操作日志列表 {@link DescribeAuditLogRequest} {@link DescribeAuditLogResponse} */
  DescribeAuditLog(data: DescribeAuditLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogResponse>;
  /** 获取私有域解析概览 {@link DescribeDashboardRequest} {@link DescribeDashboardResponse} */
  DescribeDashboard(data?: DescribeDashboardRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDashboardResponse>;
  /** 获取私有域解析账号列表 {@link DescribePrivateDNSAccountListRequest} {@link DescribePrivateDNSAccountListResponse} */
  DescribePrivateDNSAccountList(data?: DescribePrivateDNSAccountListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateDNSAccountListResponse>;
  /** 获取私有域信息 {@link DescribePrivateZoneRequest} {@link DescribePrivateZoneResponse} */
  DescribePrivateZone(data: DescribePrivateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateZoneResponse>;
  /** 获取私有域列表 {@link DescribePrivateZoneListRequest} {@link DescribePrivateZoneListResponse} */
  DescribePrivateZoneList(data?: DescribePrivateZoneListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateZoneListResponse>;
  /** 获取私有域记录列表 {@link DescribePrivateZoneRecordListRequest} {@link DescribePrivateZoneRecordListResponse} */
  DescribePrivateZoneRecordList(data: DescribePrivateZoneRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateZoneRecordListResponse>;
  /** 查询私有域解析开通状态 {@link DescribePrivateZoneServiceRequest} {@link DescribePrivateZoneServiceResponse} */
  DescribePrivateZoneService(data?: DescribePrivateZoneServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateZoneServiceResponse>;
  /** 查询额度使用情况 {@link DescribeQuotaUsageRequest} {@link DescribeQuotaUsageResponse} */
  DescribeQuotaUsage(data?: DescribeQuotaUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuotaUsageResponse>;
  /** 获取私有域解析请求量 {@link DescribeRequestDataRequest} {@link DescribeRequestDataResponse} */
  DescribeRequestData(data: DescribeRequestDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRequestDataResponse>;
  /** 修改私有域 {@link ModifyPrivateZoneRequest} {@link ModifyPrivateZoneResponse} */
  ModifyPrivateZone(data: ModifyPrivateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateZoneResponse>;
  /** 修改私有域解析记录 {@link ModifyPrivateZoneRecordRequest} {@link ModifyPrivateZoneRecordResponse} */
  ModifyPrivateZoneRecord(data: ModifyPrivateZoneRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateZoneRecordResponse>;
  /** 修改私有域关联的VPC {@link ModifyPrivateZoneVpcRequest} {@link ModifyPrivateZoneVpcResponse} */
  ModifyPrivateZoneVpc(data: ModifyPrivateZoneVpcRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateZoneVpcResponse>;
  /** 修改解析记录状态 {@link ModifyRecordsStatusRequest} {@link ModifyRecordsStatusResponse} */
  ModifyRecordsStatus(data: ModifyRecordsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordsStatusResponse>;
  /** 查询异步绑定vpc操作状态 {@link QueryAsyncBindVpcStatusRequest} {@link QueryAsyncBindVpcStatusResponse} */
  QueryAsyncBindVpcStatus(data: QueryAsyncBindVpcStatusRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAsyncBindVpcStatusResponse>;
  /** 开通私有域解析 {@link SubscribePrivateZoneServiceRequest} {@link SubscribePrivateZoneServiceResponse} */
  SubscribePrivateZoneService(data?: SubscribePrivateZoneServiceRequest, config?: AxiosRequestConfig): AxiosPromise<SubscribePrivateZoneServiceResponse>;
}

export declare type Versions = ["2020-10-28"];

export default Privatedns;
