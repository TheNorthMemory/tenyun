/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 过滤键的名称。 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
}

/** 站点信息。 */
declare interface MiniSite {
  /** 站点ID。 */
  SiteId: number;
  /** 站点Url。 */
  Url: string;
}

/** 监控任务基础数据 */
declare interface Monitor {
  /** 监控任务ID。 */
  Id?: number;
  /** 监控名称。 */
  Name?: string;
  /** 监测状态：1-监测中；2-暂停监测。 */
  MonitorStatus?: number;
  /** 监测模式，normal-正常扫描；deep-深度扫描。 */
  ScannerType?: string;
  /** 扫描周期，单位小时，每X小时执行一次。 */
  Crontab?: number;
  /** 指定扫描类型，3位数每位依次表示：扫描Web漏洞、扫描系统漏洞、扫描系统端口。 */
  IncludedVulsTypes?: string;
  /** 速率限制，每秒发送X个HTTP请求。 */
  RateLimit?: number;
  /** 首次扫描开始时间。 */
  FirstScanStartTime?: string;
  /** 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。 */
  ScanStatus?: number;
  /** 上一次扫描完成时间。 */
  LastScanFinishTime?: string;
  /** 当前扫描开始时间，如扫描完成则为上一次扫描的开始时间。 */
  CurrentScanStartTime?: string;
  /** CreatedAt。 */
  CreatedAt?: string;
  /** UpdatedAt。 */
  UpdatedAt?: string;
  /** 云用户appid。 */
  Appid: number;
  /** 扫描状态：0-待检测；1-检测完成 */
  ContentScanStatus: number;
}

/** 监控任务中的站点信息。 */
declare interface MonitorMiniSite {
  /** 站点ID。 */
  SiteId?: number;
  /** 站点Url。 */
  Url?: string;
}

/** 监控任务详细数据 */
declare interface MonitorsDetail {
  /** 监控任务基础信息。 */
  Basic?: Monitor;
  /** 监控任务包含的站点列表。 */
  Sites?: MonitorMiniSite[];
  /** 监控任务包含的站点列表数量。 */
  SiteNumber?: number;
  /** 监控任务包含的受漏洞威胁的站点列表。 */
  ImpactSites?: MonitorMiniSite[];
  /** 监控任务包含的受漏洞威胁的站点列表数量。 */
  ImpactSiteNumber?: number;
  /** 高风险漏洞数量。 */
  VulsHighNumber?: number;
  /** 中风险漏洞数量。 */
  VulsMiddleNumber?: number;
  /** 低风险漏洞数量。 */
  VulsLowNumber?: number;
  /** 提示数量。 */
  VulsNoticeNumber?: number;
  /** 监控任务包含的站点列表的平均扫描进度。 */
  Progress: number;
  /** 扫描页面总数。 */
  PageCount: number;
  /** 内容检测数量。 */
  ContentNumber: number;
}

/** 站点数据 */
declare interface Site {
  /** 站点ID。 */
  Id?: number;
  /** 监控任务ID，为0时表示未加入监控任务。 */
  MonitorId?: number;
  /** 站点url。 */
  Url?: string;
  /** 站点名称。 */
  Name?: string;
  /** 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。 */
  VerifyStatus?: number;
  /** 监测状态：0-未监测；1-监测中；2-暂停监测。 */
  MonitorStatus?: number;
  /** 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。 */
  ScanStatus?: number;
  /** 最近一次的AIScanner的扫描任务id，注意取消的情况。 */
  LastScanTaskId?: number;
  /** 最近一次扫描开始时间。 */
  LastScanStartTime?: string;
  /** 最近一次扫描完成时间。 */
  LastScanFinishTime?: string;
  /** 最近一次取消时间，取消即使用上一次扫描结果。 */
  LastScanCancelTime?: string;
  /** 最近一次扫描扫描的页面数。 */
  LastScanPageCount?: number;
  /** normal-正常扫描；deep-深度扫描。 */
  LastScanScannerType?: string;
  /** 最近一次扫描高风险漏洞数量。 */
  LastScanVulsHighNum?: number;
  /** 最近一次扫描中风险漏洞数量。 */
  LastScanVulsMiddleNum?: number;
  /** 最近一次扫描低风险漏洞数量。 */
  LastScanVulsLowNum?: number;
  /** 最近一次扫描提示信息数量。 */
  LastScanVulsNoticeNum?: number;
  /** 记录添加时间。 */
  CreatedAt?: string;
  /** 记录最近修改时间。 */
  UpdatedAt?: string;
  /** 速率限制，每秒发送X个HTTP请求。 */
  LastScanRateLimit?: number;
  /** 最近一次扫描漏洞总数量。 */
  LastScanVulsNum?: number;
  /** 最近一次扫描提示总数量 */
  LastScanNoticeNum?: number;
  /** 扫描进度，百分比整数 */
  Progress: number;
  /** 云用户appid。 */
  Appid: number;
  /** 云用户标识。 */
  Uin: string;
  /** 网站是否需要登录扫描：0-未知；-1-不需要；1-需要。 */
  NeedLogin: number;
  /** 登录后的cookie。 */
  LoginCookie: string;
  /** 登录后的cookie是否有效：0-无效；1-有效。 */
  LoginCookieValid: number;
  /** 用于测试cookie是否有效的URL。 */
  LoginCheckUrl: string;
  /** 用于测试cookie是否有效的关键字。 */
  LoginCheckKw: string;
  /** 禁止扫描器扫描的目录关键字。 */
  ScanDisallow: string;
  /** 访问网站的客户端标识。 */
  UserAgent: string;
  /** 内容检测状态：0-未检测；1-已检测； */
  ContentStatus: number;
  /** 最近一次扫描内容检测数量 */
  LastScanContentNum: number;
}

/** 站点验证数据 */
declare interface SitesVerification {
  /** 根域名。 */
  Domain?: string;
  /** txt解析域名验证的name。 */
  TxtName?: string;
  /** txt解析域名验证的text。 */
  TxtText?: string;
  /** 验证有效期，在此之前有效。 */
  ValidTo?: string;
  /** 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。 */
  VerifyStatus?: number;
  /** CreatedAt。 */
  CreatedAt?: string;
  /** UpdatedAt。 */
  UpdatedAt?: string;
  /** ID。 */
  Id: number;
  /** 云用户appid */
  Appid: number;
  /** 用于验证站点的url，即访问该url获取验证数据。 */
  VerifyUrl: string;
  /** 获取验证验证文件的url。 */
  VerifyFileUrl: string;
}

/** 漏洞数据 */
declare interface Vul {
  /** 漏洞ID。 */
  Id?: number;
  /** 站点ID。 */
  SiteId?: number;
  /** 扫描引擎的扫描任务ID。 */
  TaskId?: number;
  /** 漏洞级别：high、middle、low、notice。 */
  Level?: string;
  /** 漏洞名称。 */
  Name?: string;
  /** 出现漏洞的url。 */
  Url?: string;
  /** 网址/细节。 */
  Html?: string;
  /** 漏洞类型。 */
  Nickname?: string;
  /** 危害说明。 */
  Harm?: string;
  /** 漏洞描述。 */
  Describe?: string;
  /** 解决方案。 */
  Solution?: string;
  /** 漏洞参考。 */
  From?: string;
  /** 漏洞通过该参数攻击。 */
  Parameter?: string;
  /** CreatedAt。 */
  CreatedAt?: string;
  /** UpdatedAt。 */
  UpdatedAt?: string;
  /** 是否已经添加误报，0-否，1-是。 */
  IsReported: number;
  /** 云用户appid。 */
  Appid: number;
  /** 云用户标识。 */
  Uin: string;
}

/** 用户漏洞数随时间变化统计数据 */
declare interface VulsTimeline {
  /** ID。 */
  Id: number;
  /** 云用户appid。 */
  Appid: number;
  /** 日期。 */
  Date: string;
  /** 扫描页面总数量。 */
  PageCount: number;
  /** 已验证网站总数量。 */
  SiteNum: number;
  /** 受影响的网站总数量。 */
  ImpactSiteNum: number;
  /** 高危漏洞总数量。 */
  VulsHighNum: number;
  /** 中危漏洞总数量。 */
  VulsMiddleNum: number;
  /** 低危漏洞总数量。 */
  VulsLowNum: number;
  /** 风险提示总数量 */
  VulsNoticeNum: number;
  /** 记录添加时间。 */
  CreatedAt: string;
  /** 记录最近修改时间。 */
  UpdatedAt: string;
}

declare interface CreateMonitorsRequest {
  /** 站点的url列表 */
  Urls: string[];
  /** 任务名称 */
  Name: string;
  /** 扫描模式，normal-正常扫描；deep-深度扫描 */
  ScannerType: string;
  /** 扫描周期，单位小时，每X小时执行一次 */
  Crontab: number;
  /** 扫描速率限制，每秒发送X个HTTP请求 */
  RateLimit: number;
  /** 首次扫描开始时间 */
  FirstScanStartTime: string;
}

declare interface CreateMonitorsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSitesRequest {
  /** 站点的url列表 */
  Urls: string[];
  /** 访问网站的客户端标识 */
  UserAgent?: string;
}

declare interface CreateSitesResponse {
  /** 新增站点数。 */
  Number?: number;
  /** 站点数组 */
  Sites?: MiniSite[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSitesScansRequest {
  /** 站点的ID列表 */
  SiteIds: number[];
  /** 扫描模式，normal-正常扫描；deep-深度扫描 */
  ScannerType: string;
  /** 扫描速率限制，每秒发送X个HTTP请求 */
  RateLimit: number;
}

declare interface CreateSitesScansResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulsMisinformationRequest {
  /** 漏洞ID列表 */
  VulIds: number[];
}

declare interface CreateVulsMisinformationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVulsReportRequest {
  /** 站点ID */
  SiteId?: number;
  /** 监控任务ID */
  MonitorId?: number;
}

declare interface CreateVulsReportResponse {
  /** 报告下载地址 */
  ReportFileUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMonitorsRequest {
  /** 监控任务ID列表 */
  MonitorIds: number[];
}

declare interface DeleteMonitorsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSitesRequest {
  /** 站点ID列表 */
  SiteIds: number[];
}

declare interface DeleteSitesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigRequest {
}

declare interface DescribeConfigResponse {
  /** 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示。 */
  NoticeLevel?: string;
  /** 配置ID。 */
  Id?: number;
  /** 记录创建时间。 */
  CreatedAt?: string;
  /** 记录更新新建。 */
  UpdatedAt?: string;
  /** 云用户appid。 */
  Appid?: number;
  /** 内容检测通知等级-1:通知,0-不通知 */
  ContentLevel?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonitorsRequest {
  /** 监控任务ID列表 */
  MonitorIds?: number[];
  /** 过滤条件 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeMonitorsResponse {
  /** 监控任务列表。 */
  Monitors?: MonitorsDetail[];
  /** 监控任务数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSiteQuotaRequest {
}

declare interface DescribeSiteQuotaResponse {
  /** 已购买的扫描次数。 */
  Total?: number;
  /** 已使用的扫描次数。 */
  Used?: number;
  /** 剩余可用的扫描次数。 */
  Available?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSitesRequest {
  /** 站点ID列表 */
  SiteIds?: number[];
  /** 过滤条件 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeSitesResponse {
  /** 站点数量。 */
  TotalCount?: number;
  /** 站点信息列表。 */
  Sites?: Site[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSitesVerificationRequest {
  /** 站点的url列表 */
  Urls: string[];
}

declare interface DescribeSitesVerificationResponse {
  /** 验证信息数量。 */
  TotalCount?: number;
  /** 验证信息列表。 */
  SitesVerification?: SitesVerification[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulsNumberRequest {
}

declare interface DescribeVulsNumberResponse {
  /** 受影响的网站总数。 */
  ImpactSiteNumber?: number;
  /** 已验证的网站总数。 */
  SiteNumber?: number;
  /** 高风险漏洞总数。 */
  VulsHighNumber?: number;
  /** 中风险漏洞总数。 */
  VulsMiddleNumber?: number;
  /** 低高风险漏洞总数。 */
  VulsLowNumber?: number;
  /** 风险提示总数。 */
  VulsNoticeNumber?: number;
  /** 扫描页面总数。 */
  PageCount?: number;
  /** 已验证的网站列表。 */
  Sites?: MonitorMiniSite[];
  /** 受影响的网站列表。 */
  ImpactSites?: MonitorMiniSite[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulsNumberTimelineRequest {
}

declare interface DescribeVulsNumberTimelineResponse {
  /** 统计数据记录数量。 */
  TotalCount?: number;
  /** 用户漏洞数随时间变化统计数据。 */
  VulsTimeline?: VulsTimeline[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulsRequest {
  /** 站点ID */
  SiteId?: number;
  /** 监控任务ID */
  MonitorId?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为10，最大值为100 */
  Limit?: number;
}

declare interface DescribeVulsResponse {
  /** 漏洞数量。 */
  TotalCount?: number;
  /** 漏洞信息列表。 */
  Vuls?: Vul[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConfigAttributeRequest {
  /** 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示 */
  NoticeLevel?: string;
}

declare interface ModifyConfigAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMonitorAttributeRequest {
  /** 监测任务ID */
  MonitorId: number;
  /** 站点的url列表 */
  Urls: string[];
  /** 任务名称 */
  Name: string;
  /** 扫描模式，normal-正常扫描；deep-深度扫描 */
  ScannerType: string;
  /** 扫描周期，单位小时，每X小时执行一次 */
  Crontab: number;
  /** 扫描速率限制，每秒发送X个HTTP请求 */
  RateLimit: number;
  /** 首次扫描开始时间 */
  FirstScanStartTime: string;
  /** 监测状态：1-监测中；2-暂停监测 */
  MonitorStatus: number;
}

declare interface ModifyMonitorAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySiteAttributeRequest {
  /** 站点ID */
  SiteId: number;
  /** 站点名称 */
  Name?: string;
  /** 网站是否需要登录扫描：0-未知；-1-不需要；1-需要 */
  NeedLogin?: number;
  /** 登录后的cookie */
  LoginCookie?: string;
  /** 用于测试cookie是否有效的URL */
  LoginCheckUrl?: string;
  /** 用于测试cookie是否有效的关键字 */
  LoginCheckKw?: string;
  /** 禁止扫描器扫描的目录关键字 */
  ScanDisallow?: string;
}

declare interface ModifySiteAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifySitesRequest {
  /** 站点的url列表 */
  Urls: string[];
}

declare interface VerifySitesResponse {
  /** 验证成功的根域名数量。 */
  SuccessNumber?: number;
  /** 验证失败的根域名数量。 */
  FailNumber?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cws 漏洞扫描服务} */
declare interface Cws {
  (): Versions;
  /** 新增监测任务 {@link CreateMonitorsRequest} {@link CreateMonitorsResponse} */
  CreateMonitors(data: CreateMonitorsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMonitorsResponse>;
  /** 新增站点 {@link CreateSitesRequest} {@link CreateSitesResponse} */
  CreateSites(data: CreateSitesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSitesResponse>;
  /** 新增站点扫描任务 {@link CreateSitesScansRequest} {@link CreateSitesScansResponse} */
  CreateSitesScans(data: CreateSitesScansRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSitesScansResponse>;
  /** 新增漏洞误报信息 {@link CreateVulsMisinformationRequest} {@link CreateVulsMisinformationResponse} */
  CreateVulsMisinformation(data: CreateVulsMisinformationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulsMisinformationResponse>;
  /** 生成漏洞报告 {@link CreateVulsReportRequest} {@link CreateVulsReportResponse} */
  CreateVulsReport(data?: CreateVulsReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulsReportResponse>;
  /** 删除监控任务 {@link DeleteMonitorsRequest} {@link DeleteMonitorsResponse} */
  DeleteMonitors(data: DeleteMonitorsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMonitorsResponse>;
  /** 删除站点 {@link DeleteSitesRequest} {@link DeleteSitesResponse} */
  DeleteSites(data: DeleteSitesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSitesResponse>;
  /** 查看用户配置列表 {@link DescribeConfigRequest} {@link DescribeConfigResponse} */
  DescribeConfig(data?: DescribeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigResponse>;
  /** 查看监控任务 {@link DescribeMonitorsRequest} {@link DescribeMonitorsResponse} */
  DescribeMonitors(data?: DescribeMonitorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorsResponse>;
  /** 查看站点购买配额 {@link DescribeSiteQuotaRequest} {@link DescribeSiteQuotaResponse} */
  DescribeSiteQuota(data?: DescribeSiteQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSiteQuotaResponse>;
  /** 查看站点列表 {@link DescribeSitesRequest} {@link DescribeSitesResponse} */
  DescribeSites(data?: DescribeSitesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSitesResponse>;
  /** 查看站点列表的验证信息列表 {@link DescribeSitesVerificationRequest} {@link DescribeSitesVerificationResponse} */
  DescribeSitesVerification(data: DescribeSitesVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSitesVerificationResponse>;
  /** 查看漏洞列表 {@link DescribeVulsRequest} {@link DescribeVulsResponse} */
  DescribeVuls(data?: DescribeVulsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulsResponse>;
  /** 查看当前漏洞总计数量 {@link DescribeVulsNumberRequest} {@link DescribeVulsNumberResponse} */
  DescribeVulsNumber(data?: DescribeVulsNumberRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulsNumberResponse>;
  /** 查看漏洞数随时间变化统计信息 {@link DescribeVulsNumberTimelineRequest} {@link DescribeVulsNumberTimelineResponse} */
  DescribeVulsNumberTimeline(data?: DescribeVulsNumberTimelineRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulsNumberTimelineResponse>;
  /** 修改用户配置的属性 {@link ModifyConfigAttributeRequest} {@link ModifyConfigAttributeResponse} */
  ModifyConfigAttribute(data?: ModifyConfigAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigAttributeResponse>;
  /** 修改监测任务的属性 {@link ModifyMonitorAttributeRequest} {@link ModifyMonitorAttributeResponse} */
  ModifyMonitorAttribute(data: ModifyMonitorAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMonitorAttributeResponse>;
  /** 修改站点的属性 {@link ModifySiteAttributeRequest} {@link ModifySiteAttributeResponse} */
  ModifySiteAttribute(data: ModifySiteAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySiteAttributeResponse>;
  /** 验证站点 {@link VerifySitesRequest} {@link VerifySitesResponse} */
  VerifySites(data: VerifySitesRequest, config?: AxiosRequestConfig): AxiosPromise<VerifySitesResponse>;
}

export declare type Versions = ["2018-03-12"];

export default Cws;
