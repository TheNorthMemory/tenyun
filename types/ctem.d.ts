/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 企业详情 */
declare interface Customer {
  /** 企业ID */
  Id?: number;
  /** 企业名称 */
  Name?: string;
  /** 股权占比 */
  Percent?: number;
  /** 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息 */
  ScanType?: string;
  /** 创建账号 */
  Creator?: string;
  /** 腾讯云客户AppId */
  AppId?: number;
  /** 腾讯云客户Uin */
  Uin?: string;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
  /** 周期测绘时间 */
  ScanCron?: string;
  /** 是否启用周期测绘 */
  EnableCron?: boolean;
  /** 是否扫描子公司 */
  EnableScanSubEnterprise?: boolean;
  /** 是否授权 */
  EnableAuth?: boolean;
  /** 授权开始时间 */
  AuthStartAt?: string;
  /** 授权结束时间 */
  AuthEndAt?: string;
  /** 授权文件id */
  AuthFile?: string;
  /** 测绘时间配置项 */
  ScanTime?: string;
  /** 图标 */
  Icon?: string;
  /** 关键字 */
  Keywords?: string;
  /** Qps设置，10-500，默认100 */
  Qps?: number;
  /** 子公司拓展层次 */
  SubCompanyLevel?: number;
  /** 是否包含完整扫描 */
  IsIncludeFullScan?: boolean | null;
  /** 是否识别集团成员 */
  EnableGroupMemberDiscovered?: boolean;
}

/** 移动资产详情 */
declare interface DisplayApp {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** APP名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 开发者 */
  Developer?: string;
  /** 下载地址 */
  DownloadUrl?: string;
  /** 图片 */
  Logo?: string;
  /** 包名 */
  PackageName?: string;
  /** 平台 */
  Platform?: string;
  /** 服务端地址 */
  ServerUrl?: string;
  /** app版本 */
  AppVersion?: string;
}

/** 主机资产详情 */
declare interface DisplayAsset {
  /** 主机资产Id */
  Id?: number;
  /** 操作系统类型 */
  Os?: string;
  /** 主机地址 */
  Ip?: string;
  /** 国家 */
  Country?: string;
  /** 省份 */
  Province?: string;
  /** 地域 */
  City?: string;
  /** 运营商 */
  Isp?: string;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 端口数据 */
  Ports?: string;
  /** 服务数据 */
  Services?: string;
  /** 域名数据 */
  Domains?: string;
  /** 端口和服务最近更新时间 */
  LastModify?: string;
}

/** 目录爆破详情 */
declare interface DisplayConfig {
  /** 主键Id */
  Id?: number;
  /** 地址 */
  Url?: string;
  /** 站点标题 */
  Title?: string;
  /** 状态码 */
  Code?: number;
  /** 响应长度 */
  ContentLength?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** Ip数据 */
  Ip?: string;
  /** AI评分 */
  AIRating?: number;
  /** AI分析 */
  AIAnalysis?: string;
  /** 风险等级: 1-低危, 2-中危, 3-高危, 4-危级, 5-误报 */
  RiskLevel?: number;
  /** 建议 */
  Suggestion?: string;
}

/** 暗网详情 */
declare interface DisplayDarkWeb {
  /** 主键ID */
  Id?: number;
  /** 内容 */
  Content?: string;
  /** 命中关键字 */
  MatchedKeywords?: string;
  /** APP地址 */
  Url?: string;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 状态：unrepaired:未修复，repaired:已修复，ignore:已忽略 */
  Status?: string;
}

/** 主域名详情 */
declare interface DisplayDomain {
  /** 主键ID */
  Id?: number;
  /** 主域名 */
  Domain?: string;
  /** ICP */
  ICP?: string;
  /** 注册时间 */
  RegisteredTime?: string;
  /** 过期时间 */
  ExpiredTime?: string;
  /** 公司 */
  Company?: string;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
}

/** 企业架构详情 */
declare interface DisplayEnterprise {
  /** 主键Id */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 子公司上级 */
  ParentEnterpriseUid?: string;
  /** 企业名称 */
  Name?: string;
  /** 公司简称 */
  Abbreviation?: string;
  /** 统一社会信用代码 */
  CreditCode?: string;
  /** 企业状态 */
  Status?: string;
  /** 注册资本 */
  RegisteredCapital?: string;
  /** 持股比例 */
  ShareholdingRatio?: string;
  /** 法人代表 */
  LegalPerson?: string;
  /** 类型 */
  Type?: string;
  /** 行业类型 */
  Industry?: string;
  /** 子公司唯一uid */
  EnterpriseUid?: string;
  /** 主域名数量 */
  DomainCount?: number;
  /** 子域名数量 */
  SubDomainCount?: number;
  /** 网站数量 */
  HttpCount?: number;
  /** 漏洞数量 */
  VulCount?: number;
}

/** 仿冒应用详情 */
declare interface DisplayFakeApp {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 仿冒应用名称 */
  AppName?: string;
  /** 仿冒应用包名称 */
  PackageName?: string;
  /** 下载链接 */
  DownloadUrl?: string;
  /** 处置状态：0-待处理 1-处理中 2-已处理 */
  HandlingStatus?: number;
  /** 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败 */
  ShutdownStatus?: number;
  /** 关停时间 */
  ShutdownTime?: string;
}

/** 仿冒小程序详情 */
declare interface DisplayFakeMiniProgram {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 仿冒小程序名称 */
  ProgramName?: string;
  /** 小程序ID */
  ProgramId?: string;
  /** 类别 */
  Category?: string;
  /** 二维码 */
  QrCode?: string;
  /** 处置状态：0-待处理 1-处理中 2-已处理 */
  HandlingStatus?: number;
  /** 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败 */
  ShutdownStatus?: number;
  /** 关停时间 */
  ShutdownTime?: string;
}

/** 仿冒网站详情 */
declare interface DisplayFakeWebsite {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 仿冒网站 */
  Website?: string;
  /** ip位置 */
  IPLocation?: string;
  /** 截图 */
  Screenshot?: string;
  /** 处置状态：0-待处理 1-处理中 2-已处理 */
  HandlingStatus?: number;
  /** 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败 */
  ShutdownStatus?: number;
  /** 关停时间 */
  ShutdownTime?: string;
}

/** 仿冒公众号详情 */
declare interface DisplayFakeWechatOfficial {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 仿冒公众号名称 */
  AccountName?: string;
  /** 公众号ID */
  WechatId?: string;
  /** 头像 */
  Avatar?: string;
  /** 二维码 */
  QrCode?: string;
  /** 处置状态：0-待处理 1-处理中 2-已处理 */
  HandlingStatus?: number;
  /** 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败 */
  ShutdownStatus?: number;
  /** 关停时间 */
  ShutdownTime?: string;
}

/** Github泄露详情 */
declare interface DisplayGithub {
  /** 主键ID */
  Id?: number;
  /** 内容 */
  Content?: string;
  /** 命中关键字 */
  MatchedKeywords?: string;
  /** 泄露地址 */
  Url?: string;
  /** 状态 */
  Status?: string;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
}

/** Http详情 */
declare interface DisplayHttp {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** Url */
  Url?: string;
  /** 标题 */
  Title?: string;
  /** 报文长度 */
  ContentLength?: number;
  /** 报文内容 */
  Content?: string;
  /** 截图缩略图URL */
  ScreenshotThumbUrl?: string;
  /** 截图URL */
  ScreenshotUrl?: string;
  /** 状态码 */
  Code?: number;
  /** Api地址 */
  Api?: string;
  /** 解析的IP */
  Ip?: string;
  /** 证书信息 */
  Ssl?: string;
  /** ssl证书过期时间 */
  SslExpiredTime?: string;
  /** 资产是否发生变动 */
  IsChange?: boolean | null;
}

/** 任务详情 */
declare interface DisplayJobRecord {
  /** 任务Id */
  Id?: number;
  /** 企业ID */
  CustomerId?: number;
  /** 企业名称 */
  CustomerName?: string;
  /** 周期任务详情 */
  Crontab?: string | null;
  /** 状态：2-错误/已停止，3-进行中，1-已完成, 4-停止 */
  Status?: number;
  /** 新增数据 */
  NewCount?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
  /** 子任务进度 */
  Progress?: JobRecordProgress;
  /** 并发设置 */
  Qps?: number;
  /** 任务类型 */
  TaskType?: string | null;
  /** 客户Uin */
  Uin?: string | null;
  /** 客户appid */
  AppId?: number | null;
}

/** 链路详情 */
declare interface DisplayJobRecordDetail {
  /** 发现时间 */
  TimeAt?: string | null;
  /** 模块 */
  Module?: string | null;
  /** 模块名称 */
  ModuleName?: string | null;
  /** 任务id */
  JobRecordId?: number | null;
  /** 目标 */
  Data?: IdndValue[] | null;
}

/** 代码泄露详情 */
declare interface DisplayLeakageCode {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 事件名称 */
  Name?: string;
  /** 事件描述 */
  Description?: string;
  /** 数据源 */
  Source?: string;
  /** 风险等级：1-低危 2-中危 3-高危 4-严重 5-误报 */
  RiskLevel?: number;
  /** 仓库名称 */
  HubName?: string;
  /** 链接 */
  Url?: string;
  /** 截图 */
  Screenshot?: string;
  /** 建议 */
  Suggestion?: string;
  /** 关键词 */
  Keyword?: string;
  /** 处置状态：0-待处理 1-处理中 2-已处理 */
  HandlingStatus?: number;
  /** 备注 */
  Remark?: string;
}

/** 数据泄露详情 */
declare interface DisplayLeakageData {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 事件名称 */
  Name?: string;
  /** 事件描述 */
  Description?: string;
  /** 数据源 */
  Source?: string;
  /** 风险等级：1-低危 2-中危 3-高危 4-严重 5-误报 */
  RiskLevel?: number;
  /** 链接 */
  Url?: string;
  /** 截图 */
  Screenshot?: string;
  /** 建议 */
  Suggestion?: string;
  /** 关键词 */
  Keyword?: string;
  /** 处置状态：0-待处理 1-处理中 2-已处理 */
  HandlingStatus?: number;
  /** 备注 */
  Remark?: string;
}

/** 邮箱泄露详情 */
declare interface DisplayLeakageEmail {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 邮箱 */
  Email?: string;
  /** 用户名 */
  Username?: string;
  /** 数据源 */
  Source?: string;
  /** 风险等级：1-低危 2-中危 3-高危 4-严重 5-误报 */
  RiskLevel?: number;
  /** 建议 */
  Suggestion?: string;
  /** 关键词 */
  Keyword?: string;
  /** 处置状态：0-待处理 1-处理中 2-已处理 */
  HandlingStatus?: number;
  /** 备注 */
  Remark?: string;
}

/** 后台详情 */
declare interface DisplayManage {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** Url */
  Url?: string;
  /** 标题 */
  Title?: string;
  /** Icon */
  Icon?: string;
  /** 缩略图 */
  Screenshot?: string;
  /** 状态码 */
  Code?: number;
  /** 后台Host */
  Host?: string;
  /** 状态：not_converged:未收敛, converged:已收敛, ignore:已忽略 */
  Status?: string;
}

/** 网盘泄露详情 */
declare interface DisplayNetDisk {
  /** 主键ID */
  Id?: number;
  /** 内容 */
  Content?: string;
  /** 命中关键字 */
  MatchedKeywords?: string;
  /** 泄露地址 */
  Url?: string;
  /** 状态 */
  Status?: string;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 泄露平台 */
  Platform?: string;
}

/** 端口详情 */
declare interface DisplayPort {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** IP或域名地址 */
  Asset?: string;
  /** 解析的IP */
  Ip?: string;
  /** 端口 */
  Port?: number;
  /** 是否高危 */
  IsHighRisk?: boolean;
  /** 组件名称 */
  App?: string;
  /** 服务名称 */
  Service?: string;
  /** 端口响应详情 */
  Banner?: string;
  /** 上次检测时间 */
  LastCheckTime?: string;
  /** 状态，close:连接超时，端口可能已关闭，open:端口开放, checking:复测中, ignore:已忽略 */
  Status?: string;
}

/** 敏感信息泄露数据 */
declare interface DisplaySensitiveInfo {
  /** 主键Id */
  Id?: number;
  /** 类型 */
  Type?: string;
  /** 来源 */
  Source?: string;
  /** 值 */
  Value?: string;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
}

/** 子域名详情 */
declare interface DisplaySubDomain {
  /** 主键ID */
  Id?: number;
  /** 子域名 */
  SubDomain?: string;
  /** Ip */
  Ip?: string;
  /** 国家 */
  Country?: string;
  /** 省份 */
  Province?: string;
  /** 城市 */
  City?: string;
  /** 互联网服务提供商 */
  Isp?: string;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
}

/** 影子资产详情 */
declare interface DisplaySuspiciousAsset {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** Url */
  Url?: string;
  /** 标题 */
  Title?: string;
  /** 报文长度 */
  ContentLength?: number;
  /** 报文内容 */
  Content?: string;
  /** 截图缩略图URL */
  ScreenshotThumbUrl?: string;
  /** 截图URL */
  ScreenshotUrl?: string;
  /** 状态码 */
  Code?: number;
  /** Api */
  Api?: string;
  /** 解析的IP */
  Ip?: string;
  /** 证书信息 */
  Ssl?: string;
  /** ssl证书过期时间 */
  SslExpiredTime?: string;
  /** 来源类型 */
  SourceType?: string;
  /** 来源值 */
  SourceValue?: string;
  /** 是否信任 */
  Trusted?: boolean;
  /** 所属者 */
  Owner?: string;
  /** 根域名 */
  RootDomain?: string;
}

/** 数据管理公共字段 */
declare interface DisplayToolCommon {
  /** 子公司ID */
  EnterpriseUid?: string;
  /** 子公司名称 */
  EnterpriseName?: string;
  /** 主任务ID */
  JobId?: number;
  /** 单任务ID */
  JobStageId?: number;
  /** 是否忽略 */
  Ignored?: boolean;
  /** 子任务ID */
  JobRecordId?: number;
  /** 企业ID */
  CustomerId?: number;
  /** 企业名称 */
  CustomerName?: string;
  /** 详情 */
  Detail?: string;
  /** Md5值 */
  Md5?: string;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
  /** 标签列表，json格式：{\"tag1\":[\"责任人xxx\"],\"tag2\":[\"测试站\"]} */
  Labels?: string;
}

/** 漏洞详情 */
declare interface DisplayVul {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 解析的IP */
  Ip?: string;
  /** 端口 */
  Port?: number;
  /** Url地址 */
  Url?: string;
  /** 风险等级：1：提示, 2:低危, 3:中危, 4:高危, 5: 严重 */
  Level?: number;
  /** 漏洞名称 */
  Name?: string;
  /** 是否修复，0:未修复，1:已修复 */
  RepairStatus?: number;
  /** 建议 */
  Suggestion?: string;
  /** 发现时间 */
  DiscoverTime?: string;
  /** AI研判 */
  AiJudge?: string;
  /** 状态：unrepaired:未修复，repaired:已修复, offline:资产已下线, ignore:已忽略 */
  Status?: string;
  /** 上次复测时间 */
  LastCheckTime?: string;
}

/** 弱口令详情 */
declare interface DisplayWeakPassword {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 解析的IP */
  Ip?: string;
  /** 端口 */
  Port?: number;
  /** Url地址 */
  Url?: string;
  /** 弱口令类型 */
  Type?: string;
  /** 弱口令账号 */
  Account?: string;
  /** 弱口令密码 */
  Password?: string;
  /** 是否蜜罐 */
  IsHoneypot?: boolean;
  /** 截图 */
  ScreenshotUrl?: string;
  /** 状态：unrepaired:未修复，repaired:已修复, offline:资产已下线, ignore:已忽略, checking:复测中 */
  Status?: string;
  /** 上次复测时间 */
  LastCheckTime?: string;
}

/** 微信小程序详情 */
declare interface DisplayWechatApplet {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 名称 */
  Name?: string;
  /** 图片地址 */
  Logo?: string;
  /** 账号 */
  AccountId?: string;
  /** 二维码 */
  QrCode?: string;
  /** 描述 */
  Description?: string;
}

/** 微信公众号详情 */
declare interface DisplayWechatOfficialAccount {
  /** 主键ID */
  Id?: number;
  /** 公共字段 */
  DisplayToolCommon?: DisplayToolCommon;
  /** 名称 */
  Name?: string;
  /** 图片地址 */
  Logo?: string;
  /** 账号 */
  AccountId?: string;
  /** 二维码 */
  QrCode?: string;
  /** 描述 */
  Description?: string;
}

/** 支持按照各字段过滤 */
declare interface Filter {
  /** 要搜索的字段 */
  Name?: string;
  /** 目标值列表 */
  Values?: string[];
}

/** 链路详情扫描目标和ID */
declare interface IdndValue {
  /** 详情ID */
  Id?: number | null;
  /** 目标 */
  Value?: string | null;
}

/** 子任务进度 */
declare interface JobRecordProgress {
  /** 正在执行的任务数 */
  Doing?: number;
  /** 已完成的任务数 */
  Done?: number;
  /** 发生错误的任务数 */
  Error?: number;
  /** 超时 */
  Timeout?: number;
  /** 停止 */
  Stop?: number;
  /** 暂停 */
  Todo?: number;
}

declare interface CreateCustomerRequest {
  /** 企业名称 */
  Name: string;
  /** 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息 */
  ScanType: string;
  /** 百分比取值范围为30-100 */
  Percent?: number;
  /** 周期测绘时间 */
  ScanCron?: string;
  /** 是否立即启动 */
  IsScanNow?: boolean;
  /** 是否启用周期测绘 */
  EnableCron?: boolean;
  /** 是否扫描子公司 */
  EnableScanSubEnterprise?: boolean;
  /** 是否授权 */
  EnableAuth?: boolean;
  /** 授权开始时间 */
  AuthStartAt?: string;
  /** 授权结束时间 */
  AuthEndAt?: string;
  /** 授权文件id */
  AuthFile?: string;
  /** 测绘时间配置项，采用json字符串格式 */
  ScanTime?: string;
  /** 企业相关的关键字 */
  Keywords?: string;
  /** 图标 */
  Icon?: string;
  /** 并发设置 */
  Qps?: number;
  /** 限制子公司层级，-1表示不限制 */
  SubCompanyLevel?: number;
  /** 是否以企业名称为起点做完整扫描(包含手动上传),如只想扫描特定的某几个域名，则传false。 */
  IsIncludeFullScan?: boolean;
}

declare interface CreateCustomerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateJobRecordRequest {
  /** 企业ID */
  CustomerId: number;
  /** 任务类型：即时任务 */
  TaskType: string;
  /** 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息 */
  ScanType?: string;
  /** qps设置 */
  Qps?: number;
  /** 是否包含完整扫描 */
  IsIncludeFullScan?: boolean;
}

declare interface CreateJobRecordResponse {
  /** 任务Id */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeAppsResponse {
  /** 总数 */
  Total?: number;
  /** 移动资产数组 */
  List?: DisplayApp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeAssetsResponse {
  /** 总数 */
  Total?: number;
  /** 主机资产数组 */
  List?: DisplayAsset[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
  /** 支持按照响应长度排序，例如：+ContentLength或-ContentLength，+是递增，-是递减 */
  OrderBy?: string;
}

declare interface DescribeConfigsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayConfig[];
  /** 全部路径数量 */
  AllConfigNum?: number;
  /** 高风险路径数量 */
  HighRiskConfigNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomersRequest {
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 查询数组 */
  Filters?: Filter[];
  /** 企业名称模糊搜索 */
  Keyword?: string;
}

declare interface DescribeCustomersResponse {
  /** 总数 */
  Total?: number;
  /** 企业列表 */
  List?: Customer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDarkWebsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeDarkWebsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayDarkWeb[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeDomainsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayDomain[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnterprisesRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
  /** 是否展示统计数据 */
  IsShowStatistics?: boolean;
}

declare interface DescribeEnterprisesResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayEnterprise[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFakeAppsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeFakeAppsResponse {
  /** 总数 */
  Total?: number;
  /** 仿冒应用 */
  List?: DisplayFakeApp[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFakeMiniProgramsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeFakeMiniProgramsResponse {
  /** 总数 */
  Total?: number;
  /** 仿冒小程序 */
  List?: DisplayFakeMiniProgram[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFakeWebsitesRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeFakeWebsitesResponse {
  /** 总数 */
  Total?: number;
  /** 仿冒网站 */
  List?: DisplayFakeWebsite[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFakeWechatOfficialsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeFakeWechatOfficialsResponse {
  /** 总数 */
  Total?: number;
  /** 仿冒公众号 */
  List?: DisplayFakeWechatOfficial[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGithubsRequest {
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeGithubsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayGithub[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHttpsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
  /** 是否显示变更 */
  IsShowChange?: boolean;
  /** 是否仅显示过期风险资产 */
  HasExpirationRisk?: boolean;
}

declare interface DescribeHttpsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayHttp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobRecordDetailsRequest {
  /** 数据类型，包括：enterprise(企业架构)，domain(主域名)，sub_domain(子域名)，asset(主机资产)，port(端口服务)，http(网站资产)，vul(漏洞信息)，app(APP)，wechat_applet(微信小程序)，wechat_official_account(微信公众号)，github(Github泄露)，manage(后台识别)，config(目录爆破)，dark_web(暗网泄露)，net_disk(文库网盘泄露)，social_engineering(员工信息)，supply_chain(供应链信息)，weak_password(弱口令)，sensitive_info(敏感信息泄露)，suspicious_asset(影子资产) */
  Module: string;
  /** 结果id */
  Id: number;
  /** 任务id */
  JobRecordId?: number;
}

declare interface DescribeJobRecordDetailsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayJobRecordDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobRecordsRequest {
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 查询数组 */
  Filters?: Filter[];
}

declare interface DescribeJobRecordsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayJobRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLeakageCodesRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeLeakageCodesResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayLeakageCode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLeakageDatasRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeLeakageDatasResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayLeakageData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLeakageEmailsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeLeakageEmailsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayLeakageEmail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManagesRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeManagesResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayManage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetDisksRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeNetDisksResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayNetDisk[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePortsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribePortsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayPort[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSensitiveInfosRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeSensitiveInfosResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplaySensitiveInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubDomainsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeSubDomainsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplaySubDomain[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSuspiciousAssetsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeSuspiciousAssetsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplaySuspiciousAsset[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeVulsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayVul[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWeakPasswordsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeWeakPasswordsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayWeakPassword[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWechatAppletsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 企业ID */
  CustomerId?: number;
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeWechatAppletsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayWechatApplet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWechatOfficialAccountsRequest {
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 是否新增数据 */
  IsNew?: boolean;
  /** 企业ID */
  CustomerId?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 子公司ID列表 */
  EnterpriseUidList?: string[];
  /** 数据输出格式：json、file，默认不填为json */
  Format?: string;
  /** 创建时间-开始 */
  CreateAtStart?: string;
  /** 创建时间-结束 */
  CreateAtEnd?: string;
  /** 更新时间-开始 */
  UpdateAtStart?: string;
  /** 更新时间-结束 */
  UpdateAtEnd?: string;
  /** 查询数组 */
  Filters?: Filter[];
  /** 是否显示被忽略的数据 */
  Ignored?: boolean;
}

declare interface DescribeWechatOfficialAccountsResponse {
  /** 总数 */
  Total?: number;
  /** 数组 */
  List?: DisplayWechatOfficialAccount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomerRequest {
  /** 企业名称 */
  Name: string;
  /** 百分比取值范围为30-100 */
  Percent: number;
  /** 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息 */
  ScanType: string;
  /** 企业ID */
  Id: number;
  /** 周期测绘时间 */
  ScanCron?: string;
  /** 是否立即启动 */
  IsScanNow?: boolean;
  /** 是否启用周期测绘 */
  EnableCron?: boolean;
  /** 是否扫描子公司 */
  EnableScanSubEnterprise?: boolean;
  /** 是否授权 */
  EnableAuth?: boolean;
  /** 授权开始时间 */
  AuthStartAt?: string;
  /** 授权结束时间 */
  AuthEndAt?: string;
  /** 授权文件id */
  AuthFile?: string;
  /** 测绘时间配置项，采用json字符串格式 */
  ScanTime?: string;
  /** 企业图标 */
  Icon?: string;
  /** 并发 */
  Qps?: number;
  /** 子公司拓展层次 */
  SubCompanyLevel?: number;
  /** 是否包含完整的扫描 */
  IsIncludeFullScan?: boolean;
}

declare interface ModifyCustomerResponse {
  /** 企业ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLabelRequest {
  /** 模块，包括：enterprise：企业架构，domain：主域名，sub_domain：子域名，asset：IP资产，port：端口服务，http：HTTP资产，vul：漏洞信息，app：APP，wechat_applet：微信小程序，wechat_official_account：微信公众号，github：Github信息泄露，manage：管理后台暴露，config：目录爆破，dark_web：暗网泄露，net_disk：文库网盘泄露，supply_chain：供应链，weak_password：弱口令，sensitive_info：敏感信息泄露 */
  Module: string;
  /** 企业ID列表，可多选 */
  CustomerIdList?: number[];
  /** 资产或风险主键ID */
  Id?: number;
  /** 企业ID，在企业管理页面查看 */
  CustomerId?: number;
  /** 是否聚合数据 */
  IsAggregation?: boolean;
  /** 标签详情 */
  Labels?: string;
  /** 资产或风险主键ID列表 */
  Ids?: number[];
}

declare interface ModifyLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopJobRecordRequest {
  /** 企业ID */
  CustomerId?: number;
  /** 任务ID */
  JobRecordId?: number;
}

declare interface StopJobRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ctem 暴露面管理服务} */
declare interface Ctem {
  (): Versions;
  /** 创建企业 {@link CreateCustomerRequest} {@link CreateCustomerResponse} */
  CreateCustomer(data: CreateCustomerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomerResponse>;
  /** 启动测绘 {@link CreateJobRecordRequest} {@link CreateJobRecordResponse} */
  CreateJobRecord(data: CreateJobRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJobRecordResponse>;
  /** 查看移动端资产 {@link DescribeAppsRequest} {@link DescribeAppsResponse} */
  DescribeApps(data?: DescribeAppsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppsResponse>;
  /** 查看主机资产 {@link DescribeAssetsRequest} {@link DescribeAssetsResponse} */
  DescribeAssets(data?: DescribeAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetsResponse>;
  /** 查看目录爆破数据 {@link DescribeConfigsRequest} {@link DescribeConfigsResponse} */
  DescribeConfigs(data?: DescribeConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigsResponse>;
  /** 查看企业列表 {@link DescribeCustomersRequest} {@link DescribeCustomersResponse} */
  DescribeCustomers(data?: DescribeCustomersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomersResponse>;
  /** 查看暗网数据 {@link DescribeDarkWebsRequest} {@link DescribeDarkWebsResponse} */
  DescribeDarkWebs(data?: DescribeDarkWebsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDarkWebsResponse>;
  /** 查看主域名数据 {@link DescribeDomainsRequest} {@link DescribeDomainsResponse} */
  DescribeDomains(data?: DescribeDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsResponse>;
  /** 查看企业架构数据 {@link DescribeEnterprisesRequest} {@link DescribeEnterprisesResponse} */
  DescribeEnterprises(data?: DescribeEnterprisesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnterprisesResponse>;
  /** 查询仿冒APP {@link DescribeFakeAppsRequest} {@link DescribeFakeAppsResponse} */
  DescribeFakeApps(data?: DescribeFakeAppsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFakeAppsResponse>;
  /** 查询仿冒小程序 {@link DescribeFakeMiniProgramsRequest} {@link DescribeFakeMiniProgramsResponse} */
  DescribeFakeMiniPrograms(data?: DescribeFakeMiniProgramsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFakeMiniProgramsResponse>;
  /** 查询仿冒网站 {@link DescribeFakeWebsitesRequest} {@link DescribeFakeWebsitesResponse} */
  DescribeFakeWebsites(data?: DescribeFakeWebsitesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFakeWebsitesResponse>;
  /** 查询仿冒公众号 {@link DescribeFakeWechatOfficialsRequest} {@link DescribeFakeWechatOfficialsResponse} */
  DescribeFakeWechatOfficials(data?: DescribeFakeWechatOfficialsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFakeWechatOfficialsResponse>;
  /** 查看Github泄露数据 {@link DescribeGithubsRequest} {@link DescribeGithubsResponse} */
  DescribeGithubs(data?: DescribeGithubsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGithubsResponse>;
  /** 查看http数据 {@link DescribeHttpsRequest} {@link DescribeHttpsResponse} */
  DescribeHttps(data?: DescribeHttpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHttpsResponse>;
  /** 查看链路详情 {@link DescribeJobRecordDetailsRequest} {@link DescribeJobRecordDetailsResponse} */
  DescribeJobRecordDetails(data: DescribeJobRecordDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobRecordDetailsResponse>;
  /** 查看任务运行记录列表 {@link DescribeJobRecordsRequest} {@link DescribeJobRecordsResponse} */
  DescribeJobRecords(data?: DescribeJobRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobRecordsResponse>;
  /** 获取代码泄露数据 {@link DescribeLeakageCodesRequest} {@link DescribeLeakageCodesResponse} */
  DescribeLeakageCodes(data?: DescribeLeakageCodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLeakageCodesResponse>;
  /** 获取数据泄露事件 {@link DescribeLeakageDatasRequest} {@link DescribeLeakageDatasResponse} */
  DescribeLeakageDatas(data?: DescribeLeakageDatasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLeakageDatasResponse>;
  /** 获取邮箱泄露数据 {@link DescribeLeakageEmailsRequest} {@link DescribeLeakageEmailsResponse} */
  DescribeLeakageEmails(data?: DescribeLeakageEmailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLeakageEmailsResponse>;
  /** 查看后台数据 {@link DescribeManagesRequest} {@link DescribeManagesResponse} */
  DescribeManages(data?: DescribeManagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeManagesResponse>;
  /** 查看网盘泄露数据 {@link DescribeNetDisksRequest} {@link DescribeNetDisksResponse} */
  DescribeNetDisks(data?: DescribeNetDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetDisksResponse>;
  /** 查看端口数据 {@link DescribePortsRequest} {@link DescribePortsResponse} */
  DescribePorts(data?: DescribePortsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePortsResponse>;
  /** 查看敏感信息数据 {@link DescribeSensitiveInfosRequest} {@link DescribeSensitiveInfosResponse} */
  DescribeSensitiveInfos(data?: DescribeSensitiveInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSensitiveInfosResponse>;
  /** 查看子域名数据 {@link DescribeSubDomainsRequest} {@link DescribeSubDomainsResponse} */
  DescribeSubDomains(data?: DescribeSubDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubDomainsResponse>;
  /** 查看影子资产 {@link DescribeSuspiciousAssetsRequest} {@link DescribeSuspiciousAssetsResponse} */
  DescribeSuspiciousAssets(data?: DescribeSuspiciousAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSuspiciousAssetsResponse>;
  /** 查看漏洞数据 {@link DescribeVulsRequest} {@link DescribeVulsResponse} */
  DescribeVuls(data?: DescribeVulsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulsResponse>;
  /** 查看弱口令数据 {@link DescribeWeakPasswordsRequest} {@link DescribeWeakPasswordsResponse} */
  DescribeWeakPasswords(data?: DescribeWeakPasswordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWeakPasswordsResponse>;
  /** 查看微信小程序数据 {@link DescribeWechatAppletsRequest} {@link DescribeWechatAppletsResponse} */
  DescribeWechatApplets(data?: DescribeWechatAppletsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWechatAppletsResponse>;
  /** 查看微信公众号数据 {@link DescribeWechatOfficialAccountsRequest} {@link DescribeWechatOfficialAccountsResponse} */
  DescribeWechatOfficialAccounts(data?: DescribeWechatOfficialAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWechatOfficialAccountsResponse>;
  /** 编辑企业 {@link ModifyCustomerRequest} {@link ModifyCustomerResponse} */
  ModifyCustomer(data: ModifyCustomerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomerResponse>;
  /** 修改标签 {@link ModifyLabelRequest} {@link ModifyLabelResponse} */
  ModifyLabel(data: ModifyLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLabelResponse>;
  /** 停止扫描 {@link StopJobRecordRequest} {@link StopJobRecordResponse} */
  StopJobRecord(data?: StopJobRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StopJobRecordResponse>;
}

export declare type Versions = ["2023-11-28"];

export default Ctem;
