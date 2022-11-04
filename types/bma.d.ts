/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 商标信息 */
declare interface BrandData {
  /** 商标名称 */
  BrandName: string;
  /** 商标证明 */
  BrandCertificateName: string;
  /** 商标审核状态 1-审核中 2-审核未通过 3-审核通过 */
  BrandStatus: number;
  /** 审核说明 */
  BrandNote: string;
  /** 商标转让证明 */
  TransferName: string;
  /** 商标转让证明审核状态 */
  TransferStatus: number;
  /** 审核说明 1-审核中 2-审核未通过 3-审核通过 */
  TransferNote: string;
}

/** 仿冒网站信息 */
declare interface FakeURLInfo {
  /** 仿冒网址ID */
  FakeURLId: number;
  /** 保护网站 */
  ProtectWeb: string;
  /** 检测时间 */
  DetectTime: string;
  /** 仿冒网址 */
  FakeURL: string;
  /** 截图 */
  Snapshot: string;
  /** IP地址 */
  IP: string;
  /** IP地理位置 */
  IPLoc: string;
  /** 热度 */
  Heat: number;
  /** 网址状态 */
  Status: number;
  /** 备注 */
  Note: string;
  /** 仿冒网站所属单位 */
  FakeURLCompany: string;
  /** 仿冒网站性质 */
  FakeURLAttr: string;
  /** 仿冒网站名称 */
  FakeURLName: string;
  /** 仿冒网站备案号 */
  FakeURLICP: string;
  /** 仿冒网站创建时间 */
  FakeURLCreateTime: string;
  /** 仿冒网站过期时间 */
  FakeURLExpireTime: string;
}

/** 权属文件列表 */
declare interface File {
  /** 文件下载地址 */
  FileUrl: string;
  /** 文件类型 1-委托书 2-授权书 5-存证证书 11-营业执照 */
  FileType: number;
  /** 文件有效开始日期 */
  ValidStartDate: string;
  /** 文件有效截止日期 */
  ValidEndDate: string;
}

/** 过滤参数 */
declare interface Filter {
}

/** 版权保护-监测结果 */
declare interface Monitor {
  /** 作品ID */
  WorkId: number;
  /** 作品名称 */
  WorkName: string;
  /** 作品内容类型 01-视频 02-音频 03-文本 04-图片 */
  WorkType: string;
  /** 侵权平台数量 */
  TortPlatNum: number;
  /** 侵权链接数量 */
  TortURLNum: number;
  /** 监测时间 */
  MonitorTime: string;
  /** 0-待监测 1-监测中 2-不监测 3-暂停监测 */
  MonitorStatus: number;
  /** 作品类型 */
  WorkCategory: string;
  /** 新增时间 */
  InsertTime: string;
  /** 监测状态说明 */
  MonitorNote: string;
  /** 作品类型全部展示 */
  WorkCategoryAll: string;
  /** 存证状态 */
  EvidenceStatus: number;
  /** 存证状态说明 */
  EvidenceNote: string;
  /** 侵权站点数量 */
  TortSiteNum: number;
}

/** 监测侵权信息详情 */
declare interface MonitorTort {
  /** 侵权信息ID */
  TortId: number;
  /** 侵权标题 */
  TortTitle: string;
  /** 侵权平台 */
  TortPlat: string;
  /** 侵权链接 */
  TortURL: string;
  /** 侵权链接发布时间 */
  PubTime: string;
  /** 作者 */
  Author: string;
  /** 发现时间 */
  DetectTime: string;
  /** 取证状态 */
  ObtainStatus: number;
  /** 维权状态 */
  RightStatus: number;
  /** 拦截状态 */
  BlockStatus: number;
  /** 侵权编号 */
  TortNum: string;
  /** 取证状态说明 */
  ObtainNote: string;
  /** 作品标题 */
  WorkTitle: string;
  /** 侵权站点 */
  TortSite: string;
  /** ICP备案信息 */
  ICP: string;
  /** 维权状态说明 */
  RightNote: string;
  /** 取证类型 */
  ObtainType: number;
  /** 拦截状态说明 */
  BlockNote: string;
  /** 作品ID */
  WorkId: number;
  /** 作品名称 */
  WorkName: string;
  /** 授权书状态 */
  AuthStatus: number;
  /** 委托书状态 */
  CommStatus: number;
  /** 存证证书状态 */
  EvidenceStatus: number;
  /** 是否著作权人 */
  IsProducer: number;
  /** 是否境外网址 */
  IsOverseas: number;
  /** ip地理位置 */
  IPLoc: string;
}

/** 保护网站信息 */
declare interface ProtectURLInfo {
  /** 保护网站ID */
  ProtectURLId: number;
  /** 保护网站 */
  ProtectURL: string;
  /** 保护网站名称 */
  ProtectWeb: string;
  /** 保护网站审核状态 1-审核中 2-审核不通过 3-审核通过 */
  ProtectURLStatus: number;
  /** 网站审核不通过原因 */
  ProtectURLNote: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 举报网址信息 */
declare interface ReportFakeURLInfo {
  /** 仿冒网址ID */
  FakeURLId: number;
  /** 检测时间 */
  DetectTime: string;
  /** 保护网站 */
  ProtectURL: string;
  /** 保护网站名称 */
  ProtectWeb: string;
  /** 仿冒网址 */
  FakeURL: string;
  /** 截图 */
  Snapshot: string;
  /** IP地址 */
  IP: string;
  /** IP地理位置 */
  IPLoc: string;
  /** 热度 */
  Heat: number;
  /** 网站状态 */
  Status: number;
  /** 网站不处理原因 */
  Note: string;
  /** 仿冒网站的企业名称 */
  FakeURLCompany: string;
  /** 仿冒网站的网站性质 */
  FakeURLAttr: string;
  /** 仿冒网站的网站名称 */
  FakeURLName: string;
  /** 仿冒网站的备案 */
  FakeURLICP: string;
  /** 仿冒网站创建时间 */
  FakeURLCreateTime: string;
  /** 仿冒网站过期时间 */
  FakeURLExpireTime: string;
  /** 协查处置时间 */
  BlockTime: string;
}

declare interface CreateBPFakeURLRequest {
  /** 保护网址ID */
  ProtectURLId?: number;
  /** 仿冒网址 */
  FakeURL?: string;
  /** 截图 */
  SnapshotNames?: string[];
  /** 举报说明 */
  Note?: string;
}

declare interface CreateBPFakeURLResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBPFalseTicketRequest {
  /** 仿冒网址 */
  FakeURL?: string;
}

declare interface CreateBPFalseTicketResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBPOfflineAttachmentRequest {
  /** 品牌名字 */
  BrandName?: string;
  /** 商标证明 */
  BrandCertificateName?: string;
  /** 商标转让证明 */
  TransferName?: string;
  /** 授权书 */
  AuthorizationName?: string;
}

declare interface CreateBPOfflineAttachmentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBPOfflineTicketRequest {
  /** 仿冒网址ID */
  FakeURLId?: number;
}

declare interface CreateBPOfflineTicketResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBPProtectURLsRequest {
  /** 企业名称 */
  CompanyName?: string;
  /** 电话号码 */
  Phone?: string;
  /** 营业执照 */
  LicenseName?: string;
  /** 保护网站 */
  ProtectURLs?: string[];
  /** 网站名称 */
  ProtectWebs?: string[];
}

declare interface CreateBPProtectURLsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRBlockRequest {
  /** 作品ID */
  WorkId: number;
  /** 侵权链接 */
  TortUrl: string;
  /** 侵权标题 */
  TortTitle?: string;
  /** 侵权平台 */
  TortPlat?: string;
  /** 拦截结果回调地址 */
  BlockUrl?: string;
  /** 授权书下载地址 */
  FileUrl?: string;
  /** 授权书生效日期 */
  ValidStartDate?: string;
  /** 授权书截止日期 */
  ValidEndDate?: string;
  /** 侵权截图 */
  TortPic?: string;
  /** 委托书下载地址 */
  CommFileUrl?: string;
  /** 委托书生效日期 */
  CommValidStartDate?: string;
  /** 委托书截止日期 */
  CommValidEndDate?: string;
  /** 是否著作权人：0-否 1-是 */
  IsProducer?: string;
  /** 存证证书下载地址 */
  EvidenceFileUrl?: string;
  /** 存证证书生效日期 */
  EvidenceValidStartDate?: string;
  /** 存证证书截止日期 */
  EvidenceValidEndDate?: string;
}

declare interface CreateCRBlockResponse {
  /** 侵权ID */
  TortId: number;
  /** 该字段已废弃 */
  TortNum: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRCompanyVerifyRequest {
  /** 企业名称 */
  CompanyName: string;
  /** 企业证件号码 */
  CompanyID?: string;
  /** 企业法人姓名 */
  CompanyLegalName?: string;
  /** 联系人姓名 */
  ManagerName?: string;
  /** 联系人手机号 */
  ManagerPhone?: string;
  /** 手机验证码，接口接入可以置空 */
  VerificationCode?: string;
  /** 字段已废弃，企业认证号码类型 1：社会信用代码 2：组织机构代码 3：企业工商注册码 4：其他 默认为1 */
  CompanyIDType?: string;
  /** 字段已废弃，认证类型 */
  Type?: string;
}

declare interface CreateCRCompanyVerifyResponse {
  /** 认证状态：0-认证成功 1-认证失败 */
  Status: number;
  /** 认证状态说明，包括认证失败的原因 */
  Note: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRDesktopCodeRequest {
  /** xxx */
  TortId: number;
  /** xxx */
  DesktopCode: string;
}

declare interface CreateCRDesktopCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRObtainRequest {
  /** 已存证的作品ID */
  WorkId: number;
  /** 侵权链接 */
  TortUrl: string;
  /** 取证类型 1-网页取证 2-过程取证 */
  ObtainType: number;
  /** 侵权标题 */
  WorkTitle?: string;
  /** 侵权平台 */
  TortPlat?: string;
  /** 过程取证的取证时长 6-300分钟 */
  ObtainDuration?: number;
  /** 取证回调地址 */
  ObtainUrl?: string;
  /** xxx */
  WorkCategory?: string;
  /** xxx */
  WorkType?: string;
}

declare interface CreateCRObtainResponse {
  /** 侵权ID */
  TortId: number;
  /** xxx */
  TortNum: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRRightFileRequest {
  /** 作品ID */
  WorkId: number;
  /** 权属文件列表 */
  FileList: File[];
}

declare interface CreateCRRightFileResponse {
  /** 权属文件Id，按提交顺序排序 */
  FileIds: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRRightRequest {
  /** 作品ID */
  WorkId: number;
  /** 侵权链接 */
  TortUrl: string;
  /** 侵权标题 */
  TortTitle?: string;
  /** 侵权平台 */
  TortPlat?: string;
  /** 发函结果回调地址 */
  RightUrl?: string;
  /** 授权书下载地址 */
  FileUrl?: string;
  /** 授权书生效日期 */
  ValidStartDate?: string;
  /** 授权书截止日期 */
  ValidEndDate?: string;
  /** 委托书下载地址 */
  CommFileUrl?: string;
  /** 委托书生效日期 */
  CommValidStartDate?: string;
  /** 委托书截止日期 */
  CommValidEndDate?: string;
  /** 主页下载地址 */
  HomeFileUrl?: string;
  /** 主页生效日期 */
  HomeValidStartDate?: string;
  /** 主页截止日期 */
  HomeValidEndDate?: string;
  /** 是否著作权人：0-否 1-是 */
  IsProducer?: string;
  /** 存证证书下载地址 */
  EvidenceFileUrl?: string;
  /** 存证证书生效日期 */
  EvidenceValidStartDate?: string;
  /** 存证证书截止日期 */
  EvidenceValidEndDate?: string;
}

declare interface CreateCRRightResponse {
  /** 侵权ID */
  TortId: number;
  /** 该字段已废弃 */
  TortNum: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRTortRequest {
  /** 作品ID */
  WorkId: number;
  /** 侵权网址 */
  TortURL: string;
  /** 侵权平台 */
  TortPlat?: string;
  /** 侵权标题 */
  TortTitle?: string;
}

declare interface CreateCRTortResponse {
  /** 作品ID */
  WorkId: number;
  /** 侵权ID */
  TortId: number;
  /** 侵权标题 */
  TortTitle: string;
  /** 侵权平台 */
  TortPlat: string;
  /** 侵权网址 */
  TortURL: string;
  /** 侵权域名 */
  TortDomain: string;
  /** 侵权主体 */
  TortBodyName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRUserVerifyRequest {
  /** 用户真实姓名 */
  UserName: string;
  /** 用户身份证号 */
  UserID: string;
  /** 用户手机号码 */
  UserPhone: string;
  /** 短信验证码，接口接入可以置空 */
  VerificationCode?: string;
  /** 字段已废弃，认证类型 */
  Type?: string;
}

declare interface CreateCRUserVerifyResponse {
  /** 认证状态：0-认证成功 1-认证失败 */
  Status: number;
  /** 认证状态说明，包括认证失败原因等 */
  Note: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCRWorkRequest {
  /** 作品名称 */
  WorkName: string;
  /** 作品分类 */
  WorkCategory: string;
  /** 作品内容类型 */
  WorkType: string;
  /** 作品标签 */
  WorkSign?: string;
  /** 字段已废弃，作品图片 */
  WorkPic?: string;
  /** 作品描述 */
  WorkDesc?: string;
  /** 是否原创：0-否 1-是 */
  IsOriginal?: string;
  /** 是否发布：0-未发布 1-已发布 */
  IsRelease?: string;
  /** 字段已废弃，著作权人ID */
  ProducerID?: number;
  /** 创作时间 */
  ProduceTime?: string;
  /** 字段已废弃 */
  SampleContentURL?: string;
  /** 作品下载地址 */
  SampleDownloadURL?: string;
  /** 作品在线地址 */
  SamplePublicURL?: string;
  /** 字段已废弃，授予类型 */
  GrantType?: string;
  /** 是否监测：0-不监测 1-监测 */
  IsMonitor?: string;
  /** 是否存证：0-不存证 2-存证 注意是2 */
  IsCert?: string;
  /** 存证回调地址 */
  CertUrl?: string;
  /** 监测回调地址 */
  MonitorUrl?: string;
  /** 字段已废弃，创作性质 */
  ProduceType?: string;
  /** 白名单列表 */
  WhiteLists?: string[];
  /** 作品ID，忽略该字段 */
  WorkId?: number;
  /** 著作权人姓名 */
  ProducerName?: string;
  /** 作者，小说类型必填 */
  Nickname?: string;
  /** 授权书下载地址 */
  Authorization?: string;
  /** 授权书开始时间 */
  AuthorizationStartTime?: string;
  /** 授权书结束时间 */
  AuthorizationEndTime?: string;
  /** 内容格式，支持txt、doc等，表示Content的具体格式 */
  ContentType?: string;
  /** 文件内容base64编码，该字段仅在无法提供下载链接时使用 */
  Content?: string;
  /** 监测结束时间 */
  MonitorEndTime?: string;
  /** 申请人ID，用于存证和取证 */
  ApplierId?: string;
  /** 申请人姓名，用于存证和取证 */
  ApplierName?: string;
}

declare interface CreateCRWorkResponse {
  /** 作品ID，一个作品对应唯一的workid */
  WorkId: number;
  /** 存证ID，忽略该字段 */
  EvidenceId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBPCompanyInfoRequest {
}

declare interface DescribeBPCompanyInfoResponse {
  /** 企业名称 */
  CompanyName: string;
  /** 电话号码 */
  Phone: string;
  /** 营业执照 */
  LicenseName: string;
  /** 营业执照审核状态 1-审核中 2-审核未通过，3、审核通过 */
  LicenseStatus: number;
  /** 营业执照备注 */
  LicenseNote: string;
  /** 授权书 */
  AuthorizationName: string;
  /** 授权书审核状态 */
  AuthorizationStatus: number;
  /** 授权书备注 */
  AuthorizationNote: string;
  /** 品牌信息 */
  BrandDatas: BrandData[];
  /** 企业ID */
  CompanyId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBPFakeURLsRequest {
  /** 过滤条件 */
  Filters?: Filter[];
  /** 页数 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
}

declare interface DescribeBPFakeURLsResponse {
  /** 仿冒网址列表 */
  FakeURLInfos: FakeURLInfo[];
  /** 总量 */
  TotalCount: number;
  /** 导出量 */
  ExportURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBPProtectURLsRequest {
  /** 页数 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
}

declare interface DescribeBPProtectURLsResponse {
  /** 保护网址列表 */
  ProtectURLInfos: ProtectURLInfo[];
  /** 总量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBPReportFakeURLsRequest {
  /** 过滤条件 */
  Filters?: Filter[];
  /** 页数 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
}

declare interface DescribeBPReportFakeURLsResponse {
  /** 举报网站列表 */
  ReportFakeURLInfos: ReportFakeURLInfo[];
  /** 总量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCRMonitorDetailRequest {
  /** 作品ID */
  WorkId: number;
  /** 页数 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
  /** 过滤参数 */
  Filters?: Filter[];
}

declare interface DescribeCRMonitorDetailResponse {
  /** 侵权数组 */
  Torts: MonitorTort[];
  /** 总记录数 */
  TotalCount: number;
  /** 监测状态 */
  MonitorStatus: number;
  /** 导出地址 */
  ExportURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCRMonitorsRequest {
  /** 过滤条件 */
  Filters?: Filter[];
  /** 页数 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
}

declare interface DescribeCRMonitorsResponse {
  /** 监测结果 */
  Monitors: Monitor[];
  /** 记录总条数 */
  TotalCount: number;
  /** 导出地址 */
  ExportURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCRObtainDetailRequest {
  /** 侵权ID */
  TortId: number;
}

declare interface DescribeCRObtainDetailResponse {
  /** 作品名称 */
  WorkName: string;
  /** 侵权链接 */
  TortURL: string;
  /** 取证时间 */
  ObtainTime: string;
  /** 取证类型 */
  ObtainType: string;
  /** 取证号 */
  ObtainNum: string;
  /** 证据地址 */
  DepositFile: string;
  /** 公证信息地址 */
  DepositCert: string;
  /** 内容类型 */
  WorkType: string;
  /** 作品类型 */
  WorkCategory: string;
  /** 侵权ID */
  TortId: number;
  /** 侵权编号 */
  TortNum: string;
  /** 取证状态 */
  ObtainStatus: number;
  /** 取证状态说明 */
  ObtainNote: string;
  /** 取证时长 */
  ObtainDuration: string;
  /** 取证名称 */
  ObtainName: string;
  /** 取证公证信息 */
  DepositPdfCert: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCRWorkInfoRequest {
  /** 作品ID */
  WorkId: number;
}

declare interface DescribeCRWorkInfoResponse {
  /** 作品名称 */
  WorkName: string;
  /** 监测状态 */
  MonitorStatus: number;
  /** 授权文件状态 */
  AuthStatus: number;
  /** 委托书状态 */
  CommStatus: number;
  /** 是否著作权人 */
  IsProducer: number;
  /** 存证证书状态 */
  EvidenceStatus: number;
  /** 作品类型 */
  WorkCategory: string;
  /** 是否原创 */
  IsOriginal: string;
  /** 是否已发表 */
  IsRelease: string;
  /** 著作权人姓名 */
  ProducerName: string;
  /** 发表时间 */
  ProduceTime: string;
  /** 白名单 */
  WhiteLists: string[];
  /** 作品描述 */
  WorkDesc: string;
  /** 授权书 */
  Authorization: string;
  /** 授权书生效日期 */
  AuthorizationStartTime: string;
  /** 授权书截止日期 */
  AuthorizationEndTime: string;
  /** 委托书 */
  Commission: string;
  /** 委托书生效日期 */
  CommissionStartTime: string;
  /** 委托书截止日期 */
  CommissionEndTime: string;
  /** 存证证书 */
  EvidenceUrl: string;
  /** 存证证书生效日期 */
  EvidenceStartTime: string;
  /** 存证证书截止日期 */
  EvidenceEndTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBPOfflineAttachmentRequest {
  /** 营业执照 */
  LicenseName?: string;
  /** 授权书 */
  AuthorizationName?: string;
  /** 商标名称 */
  BrandName?: string;
  /** 商标证明 */
  BrandCertificateName?: string;
  /** 商标转让证明 */
  TransferName?: string;
}

declare interface ModifyBPOfflineAttachmentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCRBlockStatusRequest {
  /** 侵权ID */
  TortId: number;
  /** 拦截结果回调地址 */
  BlockUrl?: string;
}

declare interface ModifyCRBlockStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCRMonitorRequest {
  /** 作品ID */
  WorkId: number;
  /** 监测状态：1-开启监测 2-关闭监测 */
  MonitorStatus: string;
  /** 监测截止时间 */
  MonitorEnd?: string;
}

declare interface ModifyCRMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCRObtainStatusRequest {
  /** 侵权ID */
  TortId: number;
  /** 取证类型：1-网页取证 2-过程取证(暂不提供) */
  ObtainType: number;
  /** 过程取证的取证时长，单位分钟，范围0-120 */
  ObtainDuration: number;
  /** 取证结果回调地址 */
  ObtainUrl?: string;
}

declare interface ModifyCRObtainStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCRRightStatusRequest {
  /** 侵权ID */
  TortId: number;
  /** 发函结果回调地址 */
  RightUrl?: string;
}

declare interface ModifyCRRightStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCRWhiteListRequest {
  /** 该字段已废弃，白名单ID */
  WhiteListId?: number;
  /** 该字段已废弃，平台名称 */
  PlatForm?: string;
  /** 该字段已废弃，平台站点链接 */
  PlatUrl?: string;
  /** 该字段已废弃，作者ID */
  AuthorId?: string;
  /** 该字段已废弃，作品ID */
  WorksId?: number;
  /** 作品ID */
  WorkId?: number;
  /** 白名单列表，以\n分割 */
  WhiteSites?: string;
}

declare interface ModifyCRWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCRWorkRequest {
  /** 作品ID */
  WorkId: number;
  /** 文件的扩展名，例如txt，docx */
  ContentType?: string;
  /** 内容的base64编码 */
  Content?: string;
  /** 本次存证类型：0-不存证 1-存当前文件 2-存历史全量文件 */
  CertType?: string;
}

declare interface UpdateCRWorkResponse {
  /** 作品ID */
  WorkId: number;
  /** 存证ID */
  EvidenceId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Bma 品牌经营管家} */
declare interface Bma {
  (): Versions;
  /** {@link CreateBPFakeURL 添加仿冒链接（举报）}({@link CreateBPFakeURLRequest 请求参数}): {@link CreateBPFakeURLResponse 返回参数} */
  CreateBPFakeURL(data?: CreateBPFakeURLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBPFakeURLResponse>;
  /** {@link CreateBPFalseTicket 添加误报工单}({@link CreateBPFalseTicketRequest 请求参数}): {@link CreateBPFalseTicketResponse 返回参数} */
  CreateBPFalseTicket(data?: CreateBPFalseTicketRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBPFalseTicketResponse>;
  /** {@link CreateBPOfflineAttachment 添加下线材料}({@link CreateBPOfflineAttachmentRequest 请求参数}): {@link CreateBPOfflineAttachmentResponse 返回参数} */
  CreateBPOfflineAttachment(data?: CreateBPOfflineAttachmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBPOfflineAttachmentResponse>;
  /** {@link CreateBPOfflineTicket 添加下线工单}({@link CreateBPOfflineTicketRequest 请求参数}): {@link CreateBPOfflineTicketResponse 返回参数} */
  CreateBPOfflineTicket(data?: CreateBPOfflineTicketRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBPOfflineTicketResponse>;
  /** {@link CreateBPProtectURLs 添加保护网站}({@link CreateBPProtectURLsRequest 请求参数}): {@link CreateBPProtectURLsResponse 返回参数} */
  CreateBPProtectURLs(data?: CreateBPProtectURLsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBPProtectURLsResponse>;
  /** {@link CreateCRBlock 新建协查处置}({@link CreateCRBlockRequest 请求参数}): {@link CreateCRBlockResponse 返回参数} */
  CreateCRBlock(data: CreateCRBlockRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRBlockResponse>;
  /** {@link CreateCRCompanyVerify 企业认证}({@link CreateCRCompanyVerifyRequest 请求参数}): {@link CreateCRCompanyVerifyResponse 返回参数} */
  CreateCRCompanyVerify(data: CreateCRCompanyVerifyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRCompanyVerifyResponse>;
  /** {@link CreateCRDesktopCode 新建过程取证码}({@link CreateCRDesktopCodeRequest 请求参数}): {@link CreateCRDesktopCodeResponse 返回参数} */
  CreateCRDesktopCode(data: CreateCRDesktopCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRDesktopCodeResponse>;
  /** {@link CreateCRObtain 新建取证}({@link CreateCRObtainRequest 请求参数}): {@link CreateCRObtainResponse 返回参数} */
  CreateCRObtain(data: CreateCRObtainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRObtainResponse>;
  /** {@link CreateCRRight 新建发函}({@link CreateCRRightRequest 请求参数}): {@link CreateCRRightResponse 返回参数} */
  CreateCRRight(data: CreateCRRightRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRRightResponse>;
  /** {@link CreateCRRightFile 权属文件添加}({@link CreateCRRightFileRequest 请求参数}): {@link CreateCRRightFileResponse 返回参数} */
  CreateCRRightFile(data: CreateCRRightFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRRightFileResponse>;
  /** {@link CreateCRTort 举报侵权链接}({@link CreateCRTortRequest 请求参数}): {@link CreateCRTortResponse 返回参数} */
  CreateCRTort(data: CreateCRTortRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRTortResponse>;
  /** {@link CreateCRUserVerify 个人认证}({@link CreateCRUserVerifyRequest 请求参数}): {@link CreateCRUserVerifyResponse 返回参数} */
  CreateCRUserVerify(data: CreateCRUserVerifyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRUserVerifyResponse>;
  /** {@link CreateCRWork 新建作品}({@link CreateCRWorkRequest 请求参数}): {@link CreateCRWorkResponse 返回参数} */
  CreateCRWork(data: CreateCRWorkRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCRWorkResponse>;
  /** {@link DescribeBPCompanyInfo 查询企业信息}({@link DescribeBPCompanyInfoRequest 请求参数}): {@link DescribeBPCompanyInfoResponse 返回参数} */
  DescribeBPCompanyInfo(data?: DescribeBPCompanyInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBPCompanyInfoResponse>;
  /** {@link DescribeBPFakeURLs 查询仿冒链接}({@link DescribeBPFakeURLsRequest 请求参数}): {@link DescribeBPFakeURLsResponse 返回参数} */
  DescribeBPFakeURLs(data?: DescribeBPFakeURLsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBPFakeURLsResponse>;
  /** {@link DescribeBPProtectURLs 查询保护网站}({@link DescribeBPProtectURLsRequest 请求参数}): {@link DescribeBPProtectURLsResponse 返回参数} */
  DescribeBPProtectURLs(data?: DescribeBPProtectURLsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBPProtectURLsResponse>;
  /** {@link DescribeBPReportFakeURLs 查询举报列表}({@link DescribeBPReportFakeURLsRequest 请求参数}): {@link DescribeBPReportFakeURLsResponse 返回参数} */
  DescribeBPReportFakeURLs(data?: DescribeBPReportFakeURLsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBPReportFakeURLsResponse>;
  /** {@link DescribeCRMonitorDetail 查询作品监测详情}({@link DescribeCRMonitorDetailRequest 请求参数}): {@link DescribeCRMonitorDetailResponse 返回参数} */
  DescribeCRMonitorDetail(data: DescribeCRMonitorDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCRMonitorDetailResponse>;
  /** {@link DescribeCRMonitors 查询监测列表}({@link DescribeCRMonitorsRequest 请求参数}): {@link DescribeCRMonitorsResponse 返回参数} */
  DescribeCRMonitors(data?: DescribeCRMonitorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCRMonitorsResponse>;
  /** {@link DescribeCRObtainDetail 查询取证详情}({@link DescribeCRObtainDetailRequest 请求参数}): {@link DescribeCRObtainDetailResponse 返回参数} */
  DescribeCRObtainDetail(data: DescribeCRObtainDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCRObtainDetailResponse>;
  /** {@link DescribeCRWorkInfo 查询作品基本信息}({@link DescribeCRWorkInfoRequest 请求参数}): {@link DescribeCRWorkInfoResponse 返回参数} */
  DescribeCRWorkInfo(data: DescribeCRWorkInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCRWorkInfoResponse>;
  /** {@link ModifyBPOfflineAttachment 修改下线材料}({@link ModifyBPOfflineAttachmentRequest 请求参数}): {@link ModifyBPOfflineAttachmentResponse 返回参数} */
  ModifyBPOfflineAttachment(data?: ModifyBPOfflineAttachmentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBPOfflineAttachmentResponse>;
  /** {@link ModifyCRBlockStatus 协查处置申请}({@link ModifyCRBlockStatusRequest 请求参数}): {@link ModifyCRBlockStatusResponse 返回参数} */
  ModifyCRBlockStatus(data: ModifyCRBlockStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCRBlockStatusResponse>;
  /** {@link ModifyCRMonitor 开启或关闭监测}({@link ModifyCRMonitorRequest 请求参数}): {@link ModifyCRMonitorResponse 返回参数} */
  ModifyCRMonitor(data: ModifyCRMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCRMonitorResponse>;
  /** {@link ModifyCRObtainStatus 取证申请}({@link ModifyCRObtainStatusRequest 请求参数}): {@link ModifyCRObtainStatusResponse 返回参数} */
  ModifyCRObtainStatus(data: ModifyCRObtainStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCRObtainStatusResponse>;
  /** {@link ModifyCRRightStatus 发函申请}({@link ModifyCRRightStatusRequest 请求参数}): {@link ModifyCRRightStatusResponse 返回参数} */
  ModifyCRRightStatus(data: ModifyCRRightStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCRRightStatusResponse>;
  /** {@link ModifyCRWhiteList 修改白名单列表}({@link ModifyCRWhiteListRequest 请求参数}): {@link ModifyCRWhiteListResponse 返回参数} */
  ModifyCRWhiteList(data?: ModifyCRWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCRWhiteListResponse>;
  /** {@link UpdateCRWork 更新作品}({@link UpdateCRWorkRequest 请求参数}): {@link UpdateCRWorkResponse 返回参数} */
  UpdateCRWork(data: UpdateCRWorkRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCRWorkResponse>;
}

export declare type Versions = ["2021-06-24"];

export default Bma;
