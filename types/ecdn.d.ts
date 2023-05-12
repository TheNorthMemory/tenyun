/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 回源的自定义Https配置 */
declare interface AdvanceHttps {
  /** 自定义Tls数据开关 */
  CustomTlsStatus?: string | null;
  /** Tls版本列表，支持设置 TLSv1, TLSV1.1, TLSV1.2, TLSv1.3，修改时必须开启连续的版本 */
  TlsVersion?: string[] | null;
  /** 自定义加密套件 */
  Cipher?: string | null;
  /** 回源双向校验开启状态off - 关闭校验oneWay - 校验源站twoWay - 双向校验 */
  VerifyOriginType?: string | null;
  /** 回源层证书配置信息 */
  CertInfo?: ServerCert | null;
  /** 源站证书配置信息 */
  OriginCertInfo?: ClientCert | null;
}

/** 缓存配置简单版本，该版本不支持设置源站未返回max-age情况下的缓存规则。 */
declare interface Cache {
  /** 缓存配置规则数组。 */
  CacheRules: CacheRule[];
  /** 遵循源站 Cache-Control: max-age 配置，白名单功能。on：开启off：关闭开启后，未能匹配 CacheRules 规则的资源将根据源站返回的 max-age 值进行节点缓存；匹配了 CacheRules 规则的资源将按照 CacheRules 中设置的缓存过期时间在节点进行缓存 */
  FollowOrigin?: string | null;
}

/** 缓存相关配置。 */
declare interface CacheKey {
  /** 是否开启全路径缓存，on或off。 */
  FullUrlCache?: string;
}

/** 缓存配置规则。 */
declare interface CacheRule {
  /** 缓存类型，支持all，file，directory，path，index，分别表示全部文件，后缀类型，目录，完整路径，首页。 */
  CacheType: string;
  /** 缓存内容列表。 */
  CacheContents: string[];
  /** 缓存时间，单位秒。 */
  CacheTime: number;
}

/** https客户端证书配置。 */
declare interface ClientCert {
  /** 客户端证书，pem格式。 */
  Certificate: string | null;
  /** 客户端证书名称。 */
  CertName?: string | null;
  /** 证书过期时间。 */
  ExpireTime?: string | null;
  /** 证书颁发时间。 */
  DeployTime?: string | null;
}

/** 排序类型的数据结构 */
declare interface DetailData {
  /** 数据类型的名称 */
  Name: string;
  /** 数据值 */
  Value: number;
}

/** CDN域名简要信息。 */
declare interface DomainBriefInfo {
  /** 域名ID。 */
  ResourceId: string;
  /** 腾讯云账号ID。 */
  AppId: number;
  /** CDN加速域名。 */
  Domain: string;
  /** 域名CName。 */
  Cname: string;
  /** 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。 */
  Status: string;
  /** 项目ID。 */
  ProjectId: number;
  /** 域名创建时间。 */
  CreateTime: string;
  /** 域名更新时间。 */
  UpdateTime: string;
  /** 源站配置详情。 */
  Origin: Origin;
  /** 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读 */
  Disable: string;
  /** 加速区域，mainland，oversea或global。 */
  Area: string;
  /** 域名锁定状态，normal、global，分别表示未被锁定、全球锁定。 */
  Readonly: string;
  /** 域名标签。 */
  Tag: Tag[] | null;
}

/** 排序类型数据结构 */
declare interface DomainData {
  /** 域名 */
  Resource: string;
  /** 结果详情 */
  DetailData: DetailData[];
}

/** ECDN域名详细配置信息。 */
declare interface DomainDetailInfo {
  /** 域名ID。 */
  ResourceId: string;
  /** 腾讯云账号ID。 */
  AppId: number;
  /** 加速域名。 */
  Domain: string;
  /** 域名CName。 */
  Cname: string | null;
  /** 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。 */
  Status: string;
  /** 项目ID。 */
  ProjectId: number;
  /** 域名创建时间。 */
  CreateTime: string;
  /** 域名更新时间。 */
  UpdateTime: string;
  /** 源站配置。 */
  Origin: Origin;
  /** IP黑白名单配置。 */
  IpFilter: IpFilter | null;
  /** IP限频配置。 */
  IpFreqLimit: IpFreqLimit | null;
  /** 源站响应头部配置。 */
  ResponseHeader: ResponseHeader | null;
  /** 节点缓存配置。 */
  CacheKey: CacheKey | null;
  /** 缓存规则配置。 */
  Cache: Cache | null;
  /** Https配置。 */
  Https: Https | null;
  /** 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读。 */
  Disable: string | null;
  /** 访问协议强制跳转配置。 */
  ForceRedirect: ForceRedirect | null;
  /** 加速区域，mainland，overseas或global。 */
  Area: string | null;
  /** 域名锁定状态，normal、global 分别表示未被锁定，全球锁定。 */
  Readonly: string | null;
  /** 域名标签。 */
  Tag: Tag[] | null;
  /** WebSocket配置。 */
  WebSocket: WebSocket | null;
}

/** 域名查询时过滤条件。 */
declare interface DomainFilter {
  /** 过滤字段名，支持的列表如下：- origin：主源站。- domain：域名。- resourceId：域名id。- status：域名状态，online，offline，processing。- disable：域名封禁状态，normal，unlicensed。- projectId：项目ID。- fullUrlCache：全路径缓存，on或off。- https：是否配置https，on，off或processing。- originPullProtocol：回源协议类型，支持http，follow或https。- area：加速区域，支持mainland，overseas或global。- tagKey：标签键。 */
  Name: string;
  /** 过滤字段值。 */
  Value: string[];
  /** 是否启用模糊查询，仅支持过滤字段名为origin，domain。 */
  Fuzzy?: boolean;
}

/** 域名日志信息 */
declare interface DomainLogs {
  /** 日志起始时间。 */
  StartTime: string;
  /** 日志结束时间。 */
  EndTime: string;
  /** 日志下载路径。 */
  LogPath: string;
}

/** 访问明细数据类型 */
declare interface EcdnData {
  /** 查询指定的指标名称：Bandwidth，Flux，Request，Delay，状态码，LogBandwidth，LogFlux，LogRequest */
  Metrics: string[];
  /** 明细数据组合 */
  DetailData: TimestampData[];
}

/** 访问协议强制跳转配置。 */
declare interface ForceRedirect {
  /** 访问协议强制跳转配置开关，on或off。 */
  Switch: string | null;
  /** 强制跳转访问协议类型，支持http，https，分别表示请求强制跳转http协议，请求强制跳转https协议。 */
  RedirectType?: string | null;
  /** 强制跳转开启时返回的http状态码，支持301或302。 */
  RedirectStatusCode?: number | null;
}

/** HSTS 配置。 */
declare interface Hsts {
  /** 是否开启，on或off。 */
  Switch: string;
  /** MaxAge数值。 */
  MaxAge?: number | null;
  /** 是否包含子域名，on或off。 */
  IncludeSubDomains?: string | null;
}

/** 分路径的http头部设置规则。 */
declare interface HttpHeaderPathRule {
  /** http头部设置方式，支持add，set或del，分别表示新增，设置或删除头部。请求头部暂不支持set。 */
  HeaderMode: string | null;
  /** http头部名称。 */
  HeaderName: string | null;
  /** http头部值。del时可不填写该字段。 */
  HeaderValue: string | null;
  /** 生效的url路径规则类型，支持all，file，directory或path，分别表示全部路径，文件后缀类型，目录或绝对路径生效。 */
  RuleType: string | null;
  /** url路径或文件类型列表。 */
  RulePaths: string[] | null;
}

/** 域名https配置。 */
declare interface Https {
  /** https配置开关，on或off。开启https配置的域名在部署中状态，开关保持off。 */
  Switch: string | null;
  /** 是否开启http2，on或off。 */
  Http2?: string | null;
  /** 是否开启OCSP功能，on或off。 */
  OcspStapling?: string | null;
  /** 是否开启客户端证书校验功能，on或off，开启时必选上传客户端证书信息。 */
  VerifyClient?: string | null;
  /** 服务器证书配置信息。 */
  CertInfo?: ServerCert | null;
  /** 客户端证书配置信息。 */
  ClientCertInfo?: ClientCert | null;
  /** 是否开启Spdy，on或off。 */
  Spdy?: string | null;
  /** https证书部署状态，closed，deploying，deployed，failed分别表示已关闭，部署中，部署成功，部署失败。不可作为入参使用。 */
  SslStatus?: string | null;
  /** Hsts配置 */
  Hsts?: Hsts | null;
}

/** IP黑白名单。 */
declare interface IpFilter {
  /** IP黑白名单开关，on或off。 */
  Switch: string;
  /** IP黑白名单类型，whitelist或blacklist。 */
  FilterType?: string | null;
  /** IP黑白名单列表。 */
  Filters?: string[] | null;
}

/** IP限频配置。 */
declare interface IpFreqLimit {
  /** IP限频配置开关，on或off。 */
  Switch: string;
  /** 每秒请求数。 */
  Qps?: number | null;
}

/** 节点 IP 信息 */
declare interface IpStatus {
  /** 节点 IP */
  Ip: string;
  /** 节点所属区域 */
  District: string;
  /** 节点所属运营商 */
  Isp: string;
  /** 节点所在城市 */
  City: string;
  /** 节点状态online：上线状态，正常调度服务中offline：下线状态 */
  Status: string;
  /** 节点 IP 添加时间 */
  CreateTime: string;
}

/** 源站配置。 */
declare interface Origin {
  /** 主源站列表，IP与域名源站不可混填。配置源站端口["origin1:port1", "origin2:port2"]，配置回源权重["origin1::weight1", "origin2::weight2"]，同时配置端口与权重 ["origin1:port1:weight1", "origin2:port2:weight2"]，权重值有效范围为0-100。 */
  Origins?: string[];
  /** 主源站类型，支持domain，ip，分别表示域名源站，ip源站。设置Origins时必须填写。 */
  OriginType?: string | null;
  /** 回源时Host头部值。 */
  ServerName?: string | null;
  /** 回源协议类型，支持http，follow，https，分别表示强制http回源，协议跟随回源，https回源。不传入的情况下默认为http回源. */
  OriginPullProtocol?: string | null;
  /** 备份源站列表。 */
  BackupOrigins?: string[];
  /** 备份源站类型，同OriginType。设置BackupOrigins时必须填写。 */
  BackupOriginType?: string | null;
  /** HTTPS回源高级配置 */
  AdvanceHttps?: AdvanceHttps | null;
}

/** 刷新任务日志详情 */
declare interface PurgeTask {
  /** 刷新任务ID。 */
  TaskId: string;
  /** 刷新Url。 */
  Url: string;
  /** 刷新任务状态，fail表示失败，done表示成功，process表示刷新中。 */
  Status: string;
  /** 刷新类型，url表示url刷新，path表示目录刷新。 */
  PurgeType: string;
  /** 刷新资源方式，flush代表刷新更新资源，delete代表刷新全部资源。 */
  FlushType: string;
  /** 刷新任务提交时间 */
  CreateTime: string;
}

/** 刷新用量及刷新配额 */
declare interface Quota {
  /** 单次批量提交配额上限。 */
  Batch: number;
  /** 每日提交配额上限。 */
  Total: number;
  /** 每日剩余的可提交配额。 */
  Available: number;
}

/** 查询对象及其对应的访问明细数据 */
declare interface ResourceData {
  /** 资源名称，根据查询条件不同分为以下几类：具体域名：表示该域名明细数据multiDomains：表示多域名汇总明细数据项目 ID：指定项目查询时，显示为项目 IDall：账号维度明细数据 */
  Resource: string;
  /** 资源对应的数据明细 */
  EcdnData: EcdnData;
}

/** 自定义响应头配置。 */
declare interface ResponseHeader {
  /** 自定义响应头开关，on或off。 */
  Switch: string;
  /** 自定义响应头规则数组。 */
  HeaderRules?: HttpHeaderPathRule[] | null;
}

/** https服务端证书配置。 */
declare interface ServerCert {
  /** 服务器证书id，当证书为腾讯云托管证书时必填。 */
  CertId?: string | null;
  /** 服务器证书名称，当证书为腾讯云托管证书时必填。 */
  CertName?: string | null;
  /** 服务器证书信息，上传自有证书时必填，必须包含完整的证书链信息。 */
  Certificate?: string | null;
  /** 服务器密钥信息，上传自有证书时必填。 */
  PrivateKey?: string | null;
  /** 证书过期时间。 */
  ExpireTime?: string | null;
  /** 证书颁发时间。 */
  DeployTime?: string | null;
  /** 证书备注信息。 */
  Message?: string | null;
}

/** 查询结果排序条件。 */
declare interface Sort {
  /** 排序字段，当前支持：createTime，域名创建时间certExpireTime，证书过期时间 */
  Key: string;
  /** asc/desc，默认desc。 */
  Sequence?: string;
}

/** 标签键和标签值 */
declare interface Tag {
  /** 标签键 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

/** 时间戳与其对应的数值 */
declare interface TimestampData {
  /** 数据统计时间点，采用向前汇总模式以 5 分钟粒度为例，13:35:00 时间点代表的统计数据区间为 13:35:00 至 13:39:59 */
  Time: string;
  /** 数据值 */
  Value: number[];
}

/** WebSocket配置。 */
declare interface WebSocket {
  /** WebSocket 超时配置开关, 开关为off时，平台仍支持WebSocket连接，此时超时时间默认为15秒，若需要调整超时时间，将开关置为on.* WebSocket 为内测功能,如需使用,请联系腾讯云工程师开白. */
  Switch: string;
  /** 设置超时时间，单位为秒，最大超时时间65秒。 */
  Timeout?: number | null;
}

declare interface AddEcdnDomainRequest {
  /** 域名。 */
  Domain: string;
  /** 源站配置。 */
  Origin: Origin;
  /** 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。 */
  Area: string;
  /** 项目id，默认0。 */
  ProjectId?: number;
  /** IP黑白名单配置。 */
  IpFilter?: IpFilter;
  /** IP限频配置。 */
  IpFreqLimit?: IpFreqLimit;
  /** 源站响应头部配置。 */
  ResponseHeader?: ResponseHeader;
  /** 节点缓存配置。 */
  CacheKey?: CacheKey;
  /** 缓存规则配置。 */
  Cache?: Cache;
  /** Https配置。 */
  Https?: Https;
  /** 访问协议强制跳转配置。 */
  ForceRedirect?: ForceRedirect;
  /** 域名绑定的标签 */
  Tag?: Tag[];
  /** WebSocket配置 */
  WebSocket?: WebSocket;
}

declare interface AddEcdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVerifyRecordRequest {
  /** 要取回的域名 */
  Domain: string;
}

declare interface CreateVerifyRecordResponse {
  /** 子解析 */
  SubDomain: string;
  /** 解析值 */
  Record: string;
  /** 解析类型 */
  RecordType: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEcdnDomainRequest {
  /** 待删除域名。 */
  Domain: string;
}

declare interface DeleteEcdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainsConfigRequest {
  /** 分页查询的偏移地址，默认0。 */
  Offset?: number;
  /** 分页查询的域名个数，默认100。 */
  Limit?: number;
  /** 查询条件过滤器。 */
  Filters?: DomainFilter[];
  /** 查询结果排序规则。 */
  Sort?: Sort;
}

declare interface DescribeDomainsConfigResponse {
  /** 域名列表。 */
  Domains: DomainDetailInfo[];
  /** 符合查询条件的域名总数，用于分页查询。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainsRequest {
  /** 分页查询的偏移地址，默认0。 */
  Offset?: number;
  /** 分页查询的域名个数，默认100，最大支持1000。 */
  Limit?: number;
  /** 查询条件过滤器。 */
  Filters?: DomainFilter[];
}

declare interface DescribeDomainsResponse {
  /** 域名信息列表。 */
  Domains: DomainBriefInfo[];
  /** 域名总个数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEcdnDomainLogsRequest {
  /** 待查询域名。 */
  Domain: string;
  /** 日志起始时间。如：2019-10-01 00:00:00 */
  StartTime: string;
  /** 日志结束时间，只支持最近30天内日志查询。2019-10-02 00:00:00 */
  EndTime: string;
  /** 日志链接列表分页起始地址，默认0。 */
  Offset?: number;
  /** 日志链接列表分页记录条数，默认100，最大1000。 */
  Limit?: number;
}

declare interface DescribeEcdnDomainLogsResponse {
  /** 日志链接列表。 */
  DomainLogs: DomainLogs[] | null;
  /** 日志链接总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEcdnDomainStatisticsRequest {
  /** 查询起始时间，如：2019-12-13 00:00:00。起止时间不超过90天。 */
  StartTime: string;
  /** 查询结束时间，如：2019-12-13 23:59:59。起止时间不超过90天。 */
  EndTime: string;
  /** 统计指标名称:flux：流量，单位为 bytebandwidth：带宽，单位为 bpsrequest：请求数，单位为 次 */
  Metrics: string[];
  /** 指定查询域名列表 */
  Domains?: string[];
  /** 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主 */
  Projects?: number[];
  /** 列表分页起始地址，默认0。 */
  Offset?: number;
  /** 列表分页记录条数，默认1000，最大3000。 */
  Limit?: number;
  /** 统计区域:mainland: 境内oversea: 境外global: 全部默认 global */
  Area?: string;
}

declare interface DescribeEcdnDomainStatisticsResponse {
  /** 域名数据 */
  Data: DomainData[];
  /** 数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEcdnStatisticsRequest {
  /** 查询起始时间，如：2019-12-13 00:00:00 */
  StartTime: string;
  /** 查询结束时间，如：2019-12-13 23:59:59 */
  EndTime: string;
  /** 指定查询指标，支持的类型有：flux：流量，单位为 bytebandwidth：带宽，单位为 bpsrequest：请求数，单位为 次2xx：返回 2xx 状态码汇总或者 2 开头状态码数据，单位为 个3xx：返回 3xx 状态码汇总或者 3 开头状态码数据，单位为 个4xx：返回 4xx 状态码汇总或者 4 开头状态码数据，单位为 个5xx：返回 5xx 状态码汇总或者 5 开头状态码数据，单位为 个 */
  Metrics: string[];
  /** 时间粒度，支持以下几种模式：1 天 1，5，15，30，60，120，240，1440 2 ~ 3 天	15，30，60，120，240，14404 ~ 7 天	30，60，120，240，14408 ~ 31 天 60，120，240，1440 */
  Interval: number;
  /** 指定查询域名列表最多可一次性查询30个加速域名。 */
  Domains?: string[];
  /** 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主 */
  Projects?: number[];
  /** 统计区域:mainland: 境内oversea: 境外global: 全部默认 global */
  Area?: string;
}

declare interface DescribeEcdnStatisticsResponse {
  /** 指定条件查询得到的数据明细 */
  Data: ResourceData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpStatusRequest {
  /** 加速域名 */
  Domain: string;
  /** 查询区域：mainland: 国内节点overseas: 海外节点global: 全球节点 */
  Area?: string;
}

declare interface DescribeIpStatusResponse {
  /** 节点列表 */
  Ips: IpStatus[];
  /** 节点总个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePurgeQuotaRequest {
}

declare interface DescribePurgeQuotaResponse {
  /** Url刷新用量及配额。 */
  UrlPurge: Quota;
  /** 目录刷新用量及配额。 */
  PathPurge: Quota;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePurgeTasksRequest {
  /** 查询刷新类型。url：查询 url 刷新记录；path：查询目录刷新记录。 */
  PurgeType?: string;
  /** 开始时间，如2018-08-08 00:00:00。 */
  StartTime?: string;
  /** 结束时间，如2018-08-08 23:59:59。 */
  EndTime?: string;
  /** 提交时返回的任务 Id，查询时 TaskId 和起始时间必须指定一项。 */
  TaskId?: string;
  /** 分页查询偏移量，默认为0（从第0条开始）。 */
  Offset?: number;
  /** 分页查询限制数目，默认为20。 */
  Limit?: number;
  /** 查询关键字，请输入域名或 http(s):// 开头完整 URL。 */
  Keyword?: string;
  /** 查询指定任务状态，fail表示失败，done表示成功，process表示刷新中。 */
  Status?: string;
}

declare interface DescribePurgeTasksResponse {
  /** 刷新历史记录。 */
  PurgeLogs: PurgeTask[];
  /** 任务总数，用于分页。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PurgePathCacheRequest {
  /** 要刷新的目录列表，必须包含协议头部。 */
  Paths: string[];
  /** 刷新类型，flush 代表刷新有更新的资源，delete 表示刷新全部资源。 */
  FlushType: string;
}

declare interface PurgePathCacheResponse {
  /** 刷新任务Id。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PurgeUrlsCacheRequest {
  /** 要刷新的Url列表，必须包含协议头部。 */
  Urls: string[];
}

declare interface PurgeUrlsCacheResponse {
  /** 刷新任务Id。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartEcdnDomainRequest {
  /** 待启用域名。 */
  Domain: string;
}

declare interface StartEcdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopEcdnDomainRequest {
  /** 待停用域名。 */
  Domain: string;
}

declare interface StopEcdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDomainConfigRequest {
  /** 域名。 */
  Domain: string;
  /** 源站配置。 */
  Origin?: Origin;
  /** 项目id。 */
  ProjectId?: number;
  /** IP黑白名单配置。 */
  IpFilter?: IpFilter;
  /** IP限频配置。 */
  IpFreqLimit?: IpFreqLimit;
  /** 源站响应头部配置。 */
  ResponseHeader?: ResponseHeader;
  /** 节点缓存配置。 */
  CacheKey?: CacheKey;
  /** 缓存规则配置。 */
  Cache?: Cache;
  /** Https配置。 */
  Https?: Https;
  /** 访问协议强制跳转配置。 */
  ForceRedirect?: ForceRedirect;
  /** 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。 */
  Area?: string;
  /** WebSocket配置 */
  WebSocket?: WebSocket;
}

declare interface UpdateDomainConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ecdn 全站加速网络} */
declare interface Ecdn {
  (): Versions;
  /** @deprecated 新增加速域名 {@link AddEcdnDomainRequest} {@link AddEcdnDomainResponse} */
  AddEcdnDomain(data: AddEcdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<AddEcdnDomainResponse>;
  /** @deprecated 生成解析记录 {@link CreateVerifyRecordRequest} {@link CreateVerifyRecordResponse} */
  CreateVerifyRecord(data: CreateVerifyRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVerifyRecordResponse>;
  /** @deprecated 删除加速域名 {@link DeleteEcdnDomainRequest} {@link DeleteEcdnDomainResponse} */
  DeleteEcdnDomain(data: DeleteEcdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEcdnDomainResponse>;
  /** 查询域名基本信息 {@link DescribeDomainsRequest} {@link DescribeDomainsResponse} */
  DescribeDomains(data?: DescribeDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsResponse>;
  /** 查询域名详细配置 {@link DescribeDomainsConfigRequest} {@link DescribeDomainsConfigResponse} */
  DescribeDomainsConfig(data?: DescribeDomainsConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsConfigResponse>;
  /** 查询域名日志下载链接 {@link DescribeEcdnDomainLogsRequest} {@link DescribeEcdnDomainLogsResponse} */
  DescribeEcdnDomainLogs(data: DescribeEcdnDomainLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEcdnDomainLogsResponse>;
  /** 域名统计指标查询 {@link DescribeEcdnDomainStatisticsRequest} {@link DescribeEcdnDomainStatisticsResponse} */
  DescribeEcdnDomainStatistics(data: DescribeEcdnDomainStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEcdnDomainStatisticsResponse>;
  /** 访问数据查询 {@link DescribeEcdnStatisticsRequest} {@link DescribeEcdnStatisticsResponse} */
  DescribeEcdnStatistics(data: DescribeEcdnStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEcdnStatisticsResponse>;
  /** 查询平台服务节点IP {@link DescribeIpStatusRequest} {@link DescribeIpStatusResponse} */
  DescribeIpStatus(data: DescribeIpStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpStatusResponse>;
  /** @deprecated 查询刷新用量配额 {@link DescribePurgeQuotaRequest} {@link DescribePurgeQuotaResponse} */
  DescribePurgeQuota(data?: DescribePurgeQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurgeQuotaResponse>;
  /** 刷新历史查询 {@link DescribePurgeTasksRequest} {@link DescribePurgeTasksResponse} */
  DescribePurgeTasks(data?: DescribePurgeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurgeTasksResponse>;
  /** @deprecated 刷新目录 {@link PurgePathCacheRequest} {@link PurgePathCacheResponse} */
  PurgePathCache(data: PurgePathCacheRequest, config?: AxiosRequestConfig): AxiosPromise<PurgePathCacheResponse>;
  /** 刷新 URL {@link PurgeUrlsCacheRequest} {@link PurgeUrlsCacheResponse} */
  PurgeUrlsCache(data: PurgeUrlsCacheRequest, config?: AxiosRequestConfig): AxiosPromise<PurgeUrlsCacheResponse>;
  /** @deprecated 启用加速域名 {@link StartEcdnDomainRequest} {@link StartEcdnDomainResponse} */
  StartEcdnDomain(data: StartEcdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<StartEcdnDomainResponse>;
  /** @deprecated 停用加速域名 {@link StopEcdnDomainRequest} {@link StopEcdnDomainResponse} */
  StopEcdnDomain(data: StopEcdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<StopEcdnDomainResponse>;
  /** @deprecated 更新域名配置 {@link UpdateDomainConfigRequest} {@link UpdateDomainConfigResponse} */
  UpdateDomainConfig(data: UpdateDomainConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDomainConfigResponse>;
}

export declare type Versions = ["2019-10-12"];

export default Ecdn;
