/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用包名信息 */
declare interface AppInfo {
  /** 应用Id */
  Id?: number;
  /** 用户appid */
  AppId?: string;
  /** 应用名称 */
  AppName?: string;
  /** Ios 包名 */
  BundleId?: string | null;
  /** Andorid 包名 */
  PackageName?: string | null;
  /** 应用详情 */
  AppType?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** Mac 进程名 */
  MacBundleId?: string | null;
  /** windows 进程名 */
  WinProcessName?: string | null;
  /** 允许的web域名列表 */
  DomainList?: string[] | null;
}

/** 视立方license用户 应用结构 */
declare interface ApplicationInfo {
  /** 应用名称 */
  AppName?: string;
  /** Ios应用的唯一标识 */
  BundleId?: string | null;
  /** 应用类型，formal： 正式应用，test：测试应用 */
  AppType?: string;
  /** license数组 */
  Licenses?: License[] | null;
  /** license 秘钥 */
  LicenseKey?: string;
  /** 安卓应用的唯一标识 */
  PackageName?: string | null;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 用户应用Id */
  ApplicationId?: number;
  /** 视立方下载license的url */
  LicenseUrl?: string;
  /** 优图美视信息列表 */
  XMagics?: XMagicInfo[] | null;
  /** Mac 进程名 */
  MacBundleId?: string | null;
  /** windows 进程名 */
  WinProcessName?: string | null;
  /** web端Domain列表 */
  DomainList?: string[] | null;
  /** 账号AppId */
  AppId?: string;
}

/** 功能描述模型 */
declare interface Feature {
  /** 索引 */
  Id?: number;
  /** 功能ID */
  FeatureId?: number;
  /** 功能名称 */
  Name?: string;
  /** 功能类型 */
  Type?: string;
  /** 是否可以申请试用 */
  Trial?: boolean;
  /** 可以试用的次数 */
  TrialCount?: number;
  /** 可以试用的时长，单位天 */
  Duration?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
}

/** 视立方应用license */
declare interface License {
  /** license类型 */
  Type?: string;
  /** 老系统迁移备注 */
  Remark?: string | null;
  /** license生效时间 */
  StartTime?: string;
  /** license失效时间 */
  EndTime?: string;
  /** license对应的功能Id */
  FeatureId?: number;
  /** license是测试：test还是正式：formal */
  LicenseType?: string;
  /** 测试license 是否可以续期 */
  Renewal?: boolean;
  /** license索引 */
  LicenseId?: number;
  /** license名称 */
  Name?: string;
  /** 测试license 是否升级 */
  Update?: boolean;
  /** 兼容老的licenseUrl */
  OldLicenseUrl?: string | null;
  /** 视立方url分组 */
  Group?: number | null;
  /** 过期：true ，未过期：其它 */
  Expired?: boolean;
  /** 返回还有多少秒过期，过期返回0 */
  RestTime?: number | null;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 计费资源相关信息 */
  Resource?: RenewResource | null;
  /** 是否为马甲包 */
  IsVest?: boolean;
}

/** license 资源信息 */
declare interface LicenseResourceInfo {
  /** 授权功能Id */
  Id?: number;
  /** 用户appid */
  AppId?: string;
  /** 有效期时长 */
  Duration?: string | null;
  /** 功能Id */
  FeatureId?: number;
  /** 此license资源的开始生效时间 */
  StartTime?: string;
  /** 此license资源的生效结束时间 */
  EndTime?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 此资源是否可用于续期和更新有效期 */
  IsUse?: boolean;
  /** 此资源的状态 */
  Status?: number;
  /** 销毁时间 */
  IsolatedTimestamp?: string | null;
  /** 功能模块名称 */
  Name?: string;
  /** 功能模块类型 */
  Type?: string;
  /** 资源包信息 */
  Package?: Package | null;
  /** 应用信息 */
  Application?: AppInfo | null;
  /** 资源Id */
  ResourceId?: string;
  /** 自动续费状态 */
  AutoRenewFlag?: number;
}

/** license 资源信息 */
declare interface LicenseResourceSimpleInfo {
  /** 授权功能Id */
  Id?: number;
  /** 用户appid */
  AppId?: string;
  /** 有效期时长 */
  Duration?: string | null;
  /** 功能Id */
  FeatureId?: number;
  /** 此license资源的开始生效时间 */
  StartTime?: string;
  /** 此license资源的生效结束时间 */
  EndTime?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 此资源是否可用于续期和更新有效期 */
  IsUse?: boolean;
  /** 此资源的状态 */
  Status?: number;
  /** 销毁时间 */
  IsolatedTimestamp?: string | null;
  /** 功能模块名称 */
  Name?: string;
  /** 功能模块类型 */
  Type?: string;
  /** 资源包信息 */
  Package?: Package | null;
  /** 资源id */
  ResourceId?: string;
  /** 自动续费状态 */
  AutoRenewFlag?: number;
}

/** 视立方产品概览页新闻动态 */
declare interface NewsInfo {
  /** 新闻Id */
  Id?: number;
}

/** 资源包结构 */
declare interface Package {
  /** 资源包Id */
  Id?: number;
  /** 资源包资源Id */
  BizResourceId?: string;
  /** 站点 中国站还是国际站 */
  Site?: string;
  /** 资源包开始生效时间 */
  StartTime?: string;
  /** 资源包过期时间 */
  EndTime?: string;
  /** 资源包退费时间 */
  RefundTime?: string | null;
  /** 资源包名称 */
  Name?: string;
  /** 资源包类型ID,对应点播：PackageId 对应直播：TypeId */
  Type?: string;
}

/** 自动续期资源info */
declare interface RenewResource {
  /** 资源Id */
  ResourceId?: string;
  /** 自动续期标记，0：默认，1：自动续期，2：不续期 */
  AutoRenewFlag?: number;
  /** 资源冻结时间 */
  IsolatedTimestamp?: string | null;
  /** 资源销毁状态 */
  Refund?: boolean | null;
  /** 子产品码 */
  SubProductCode?: string;
  /** 资源到期时间 */
  EndTime?: string;
}

/** 视频功能描述模型 */
declare interface VideoFeature {
  /** 索引 */
  Id?: number;
  /** 功能ID */
  FeatureId?: number;
  /** 功能名称 */
  Name?: string;
  /** 功能类型 */
  Type?: string;
  /** 是否可以申请试用 */
  Trial?: boolean;
  /** 可以试用的次数 */
  TrialCount?: number | null;
  /** 可以试用的时长，单位天 */
  Duration?: number | null;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 功能所属业务方 */
  BizType?: string;
  /** 平台类型 */
  Platform?: string;
}

/** 优图的的功能，Trial 为true的可以开通测试 */
declare interface XMagicFeature {
  /** 功能名称 */
  Name?: string;
  /** 可以申请的次数 */
  TrialCount?: number | null;
  /** 每次申请的时长单位：天 */
  Duration?: number | null;
  /** 功能类别 */
  Plan?: string;
  /** single: 原子能力,combined:套餐 */
  XMagicType?: string;
  /** 此功能是否支持开通测试 */
  Trial?: boolean;
  /** 功能所属业务方 */
  BizType?: string;
}

/** 查询返回的优图信息 */
declare interface XMagicInfo {
  /** 优图Id */
  Id?: number;
  /** 用户公司名称 */
  CompanyName?: string | null;
  /** https://cos.xxx */
  CompanyPermit?: string | null;
  /** 用户公司行业类型 */
  CompanyType?: string | null;
  /** 优图套餐类型 */
  Plan?: string;
  /** 测试版还是正式版 test | formal */
  LicenseType?: string;
  /** 0: 预申请，需要补充申请信息 1: 审批通过，xmagic已签发，正在生效中 2: 提交完申请资料后待运营审核状态 3: 申请被驳回，需要重新修改申请资料 4: 应用包名被修改后触发xmagic审批，当前xmagic已暂停生效 5: 应用修改包名后，审批未通过状态，可以重新修改应用PB，状态会回到4 */
  Status?: number;
  /** 测试license是否已经升级 */
  Update?: boolean | null;
  /** 优图生效开始时间 Status为1的时候 */
  StartTime?: string | null;
  /** 优图生效结束时间 Status为1的时候 */
  EndTime?: string | null;
  /** 续期次数， LicenseType=test时有此字段 */
  RenewalCount?: number | null;
  /** 历次审批的回复 */
  Reply?: string[];
  /** 创建时间 */
  CreatedAt?: string;
  /** 修改时间 */
  UpdatedAt?: string;
  /** 用户更新信息的时间 */
  UpdateTime?: string;
  /** 是否过期 */
  Expired?: boolean | null;
  /** 返回还剩多少秒过期，过期后返回0 */
  RestTime?: number | null;
  /** single: 原子能力,combined:套餐 */
  XMagicType?: string;
  /** 优图模块名称，自动中英文 */
  Name?: string;
  /** 优图资源信息 */
  Resource?: RenewResource | null;
  /** 是否是马甲包 */
  IsVest?: boolean;
}

/** 优图美视资源包 */
declare interface XMagicResource {
  /** 资源Id */
  Id?: number;
  /** 用户appid */
  AppId?: string;
  /** 套餐类别 */
  Plan?: string;
  /** 单位：年 */
  Duration?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 资源是否已使用 */
  XMagic?: boolean | null;
  /** 资源开始生效时间 */
  StartTime?: string;
  /** 资源结束生效时间 */
  EndTime?: string;
  /** 资源包是否过期 */
  Expired?: boolean;
  /** 功能模块名称 */
  Name?: string;
  /** single: 原子能力,combined:套餐 */
  XMagicType?: string;
  /** xmagic:优图， avatar：虚拟人 */
  BizType?: string;
  /** 资源Id */
  ResourceId?: string;
  /** 资源是否可以使用 */
  IsUse?: boolean;
}

/** 优图美视资源包 */
declare interface XMagicResourceSimpleInfo {
  /** 资源Id */
  Id?: number;
  /** 用户appid */
  AppId?: string;
  /** 套餐类别 */
  Plan?: string;
  /** 单位：年 */
  Duration?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 资源开始生效时间 */
  StartTime?: string;
  /** 资源结束生效时间 */
  EndTime?: string;
  /** 应用信息 */
  Application?: AppInfo | null;
  /** 开通的优图功能信息 */
  XMagic?: XMagicSimpleInfo | null;
  /** 优图资源状态 */
  Status?: number;
  /** 操作日期记录 */
  Operation?: string[] | null;
  /** 是否可以使用 */
  IsUse?: boolean;
  /** single: 原子能力,combined:套餐 */
  XMagicType?: string;
  /** 功能模块名称 */
  Name?: string;
  /** 资源所属业务方 xmagic：优图，avatar：虚拟形象 */
  BizType?: string;
  /** 资源id */
  ResourceId?: string;
  /** 资源自动续费状态 */
  AutoRenewFlag?: number;
}

/** 优图简单信息 */
declare interface XMagicSimpleInfo {
  /** XMagic 的Id */
  Id: number;
  /** XMagic 状态 */
  Status: number;
}

/** 可以开通测试的功能 */
declare interface XMagicTrial {
  /** 功能名称 */
  Name?: string;
  /** 可以申请的次数 */
  TrialCount?: number;
  /** 每次申请的时长单位：天 */
  Duration?: number;
  /** 功能类别 */
  Plan?: string;
  /** single: 原子能力,combined:套餐 */
  XMagicType?: string;
  /** vod：点播 live：直播 */
  BizType?: string;
}

declare interface CreateActivityLicenseRequest {
  /** 活动Id */
  Activity: string;
}

declare interface CreateActivityLicenseResponse {
  /** 用户appid */
  AppId?: string;
  /** app名称 */
  AppName?: string;
  /** ios包名 */
  BundleId?: string;
  /** 安卓包名 */
  PackageName?: string;
  /** 有效时长 */
  Duration?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** license秘钥 */
  LicenseKey?: string;
  /** license 授权文件下载链接 */
  LicenseUrl?: string;
  /** license剩余天数，最后一天以及过期显示0 */
  ResidueDay?: number;
  /** license剩余秒数 */
  Residue?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationAndBindLicenseRequest {
  /** 应用名 */
  AppName: string;
  /** 应用ID */
  BundleId?: string;
  /** 包名 */
  PackageName?: string;
  /** 资源包ID */
  ResourceIds?: string[];
  /** 营业执照 */
  CompanyPermit?: string;
  /** 公司类型 */
  CompanyType?: string;
  /** 公司名称 */
  CompanyName?: string;
  /** 优图资源id列表 */
  XMagicResourceIds?: string[];
  /** Mac 进程名 */
  MacBundleId?: string;
  /** Windows 进程名 */
  WinProcessName?: string;
  /** 要开通的域名列表 */
  DomainList?: string[];
  /** 要开通的端，web/mobile/pc */
  Platform?: string;
}

declare interface CreateApplicationAndBindLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationAndVideoRequest {
  /** 应用名称 */
  AppName: string;
  /** Ios 包名 */
  BundleId?: string;
  /** Android 包名 */
  PackageName?: string;
}

declare interface CreateApplicationAndVideoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationAndWebPlayerLicenseRequest {
  /** 应用名称 */
  AppName: string;
  /** 域名列表 */
  DomainList: string[];
}

declare interface CreateApplicationAndWebPlayerLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLicenseRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 资源包ID */
  ResourceIds: string[];
  /** url地址分组 */
  Group?: number;
}

declare interface CreateLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTestXMagicRequest {
  /** 将腾讯特效创建到哪个应用下 */
  ApplicationId: number;
  /** 营业执照 */
  CompanyPermit?: string;
  /** 公司类型 */
  CompanyType?: string;
  /** 公司名称 */
  CompanyName?: string;
  /** 测试套餐名称 */
  PlanList?: string[];
}

declare interface CreateTestXMagicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTrialApplicationAndLicenseRequest {
  /** 应用名 */
  AppName: string;
  /** 应用ID */
  BundleId?: string;
  /** 包名 */
  PackageName?: string;
  /** 功能 id 数组 */
  FeatureIds?: number[];
  /** 是否要开通优图功能 */
  XMagic?: boolean;
  /** 营业执照 */
  CompanyPermit?: string;
  /** 公司类型 */
  CompanyType?: string;
  /** 公司名称 */
  CompanyName?: string;
  /** 要开通的测试功能名称，基础套餐只能有一个 */
  PlanList?: string[];
  /** Mac 进程名 */
  MacBundleId?: string;
  /** Windows 进程名 */
  WinProcessName?: string;
  /** 要创建到哪个平台，web、mobile、pc，默认mobile */
  Platform?: string;
  /** 授权域名列表 */
  DomainList?: string[];
}

declare interface CreateTrialApplicationAndLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTrialLicenseRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 功能 ID 数组 */
  FeatureIds: number[];
  /** Url分组 */
  Group?: number;
}

declare interface CreateTrialLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateXMagicRequest {
  /** 应用ApplicationId */
  ApplicationId: number;
  /** 营业执照 */
  CompanyPermit?: string;
  /** 公司类型 */
  CompanyType?: string;
  /** 公司名称 */
  CompanyName?: string;
  /** 优图资源id列表 */
  XMagicResourceIds?: string[];
}

declare interface CreateXMagicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFeatureListRequest {
}

declare interface DescribeFeatureListResponse {
  /** 功能列表 */
  FeatureList?: VideoFeature[];
  /** 优图功能列表 */
  XMagicFeatureList?: XMagicFeature[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLicenseListRequest {
}

declare interface DescribeLicenseListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNewsRequest {
  /** 页码，从0开始 */
  PageNumber: number;
  /** 每页数据量 */
  PageSize: number;
}

declare interface DescribeNewsResponse {
  /** 产品动态详情列表 */
  NewsList?: NewsInfo[];
  /** 总数据量 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSTSRequest {
}

declare interface DescribeSTSResponse {
  /** 桶名称 */
  Bucket?: string;
  /** 地区 */
  Region?: string;
  /** 开始生效时间 */
  StartTime?: number;
  /** 临时token过期时间 */
  ExpiredTime?: number;
  /** 临时token */
  SessionToken?: string;
  /** 临时SecretId */
  TmpSecretId?: string;
  /** 临时秘钥 */
  TmpSecretKey?: string;
  /** 上传的根路径，底下可以多层 */
  Path?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrialFeatureRequest {
}

declare interface DescribeTrialFeatureResponse {
  /** 功能列表 */
  FeatureList?: Feature[];
  /** 可以开通的优图测试功能 */
  XMagicTrial?: XMagicTrial | null;
  /** 可以开通的优图测试功能列表 */
  XMagicTrialList?: XMagicTrial[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserConfigRequest {
}

declare interface DescribeUserConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVcubeApplicationAndLicenseRequest {
  /** 查询对应业务方的license，直播:live 点播：vod */
  BizType?: string;
  /** 应用类型测试：test，正式：formal */
  AppType?: string;
  /** 应用名称，模糊查询 */
  AppName?: string;
  /** Ios包名，模糊查询 */
  BundleId?: string;
  /** Android 包名，模糊查询 */
  PackageName?: string;
  /** 平台信息，pc 或者 mobile */
  Platform?: string;
  /** Mac 进程名 */
  MacBundleId?: string;
  /** Windows 进程名 */
  WinProcessName?: string;
}

declare interface DescribeVcubeApplicationAndLicenseResponse {
  /** 应用license列表 */
  ApplicationInfoList?: ApplicationInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVcubeApplicationAndPlayListRequest {
  /** 查询对应业务方的license，直播:live 点播：vod */
  BizType?: string;
  /** 应用类型测试：test，正式：formal */
  AppType?: string;
  /** 应用名称，模糊查询 */
  AppName?: string;
  /** Ios包名，模糊查询 */
  BundleId?: string;
  /** Android 包名，模糊查询 */
  PackageName?: string;
  /** 平台信息，pc 或者 mobile */
  Platform?: string;
  /** Mac 进程名 */
  MacBundleId?: string;
  /** Windows 进程名 */
  WinProcessName?: string;
}

declare interface DescribeVcubeApplicationAndPlayListResponse {
  /** 应用license列表 */
  ApplicationInfoList?: ApplicationInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVcubeApplicationAndXMagicListRequest {
  /** 查询对应业务方的license，直播:live 点播：vod */
  BizType?: string;
  /** 应用类型测试：test，正式：formal */
  AppType?: string;
  /** 应用名称，模糊查询 */
  AppName?: string;
  /** Ios包名，模糊查询 */
  BundleId?: string;
  /** Android 包名，模糊查询 */
  PackageName?: string;
  /** 平台信息，pc 或者 mobile */
  Platform?: string;
  /** Mac 进程名 */
  MacBundleId?: string;
  /** Windows 进程名 */
  WinProcessName?: string;
}

declare interface DescribeVcubeApplicationAndXMagicListResponse {
  /** 应用license列表 */
  ApplicationInfoList?: ApplicationInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVcubeResourcesListRequest {
  /** 查询资源页码 */
  PageNumber: number;
  /** 每页的数据量 */
  PageSize: number;
  /** 应用名称，模块查询 */
  AppName?: string;
  /** 资源Id，资源包id或者license资源id */
  ResourceId?: string;
  /** 资源Id、应用名称、包名 */
  Word?: string;
  /** 查询资源所属平台，web、mobile */
  Platform?: string;
}

declare interface DescribeVcubeResourcesListResponse {
  /** 资源列表 */
  ResourceList?: LicenseResourceInfo[];
  /** 总数据量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVcubeResourcesRequest {
  /** 查找那个平台的资源 */
  Platform?: string;
}

declare interface DescribeVcubeResourcesResponse {
  /** 资源列表 */
  ResourceList?: LicenseResourceSimpleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeXMagicResourceListRequest {
  /** 分页页码 第一页是0 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 关联的应用名称 */
  AppName?: string;
  /** 优图资源Id */
  ResourceId?: string;
  /** 查询关键字，资源Id、应用名称、包名 */
  Word?: string;
  /** 平台信息，pc 或者 mobile */
  Platform?: string;
  /** 所属业务，xmagic：优图， avatar：虚拟人，不传查全部 */
  BizType?: string;
}

declare interface DescribeXMagicResourceListResponse {
  /** 优图资源包信息 */
  Resources?: XMagicResourceSimpleInfo[];
  /** 资源数量 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeXMagicResourceRequest {
  /** 分页页码 第一页是0 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
}

declare interface DescribeXMagicResourceResponse {
  /** 优图资源包信息 */
  Resources?: XMagicResource[];
  /** 资源数量 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationRequest {
  /** 应用ID */
  ApplicationId: number;
  /** 应用名 */
  AppName?: string;
  /** 应用ID */
  BundleId?: string;
  /** 包名 */
  PackageName?: string;
  /** Windows 进程名 */
  WinProcessName?: string;
  /** Mac 进程名 */
  MacBundleId?: string;
  /** 要追加的web域名列表 */
  DomainList?: string[];
}

declare interface ModifyApplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFormalApplicationRequest {
  /** 应用Id */
  ApplicationId: number;
  /** 应用名称 */
  AppName?: string;
  /** Ios 包名称 */
  BundleId?: string;
  /** Android 包名称 */
  PackageName?: string;
}

declare interface ModifyFormalApplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLicenseRequest {
  /** License 功能模块 Id */
  LicenseId: string;
  /** 资源包 Id */
  ResourceId: string;
}

declare interface ModifyLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPresetApplicationRequest {
  /** 应用Id */
  ApplicationId: number;
  /** 您的app名称 */
  AppName?: string;
  /** ios包名 */
  BundleId?: string;
  /** 安卓包名 */
  PackageName?: string;
}

declare interface ModifyPresetApplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTrialLicenseRequest {
  /** 授权ID */
  LicenseId: string;
}

declare interface ModifyTrialLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyXMagicRequest {
  /** 资源Id */
  ResourceId: string;
  /** 优图licenseId */
  XMagicId: string;
}

declare interface ModifyXMagicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewLicenseRequest {
  /** License 功能模块 Id */
  LicenseId: string;
  /** 资源包 Id */
  ResourceId: string;
}

declare interface RenewLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewTestXMagicRequest {
  /** 优图美视Id */
  XMagicId: number;
}

declare interface RenewTestXMagicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewVideoRequest {
  /** 要续期的视频播放license Id */
  LicenseId: number;
}

declare interface RenewVideoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTestXMagicRequest {
  /** 优图美视功能Id */
  XMagicId: number;
  /** XMagic套餐包Id */
  ResourceId: string;
}

declare interface UpdateTestXMagicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTrialLicenseRequest {
  /** 执照ID */
  LicenseId: string;
  /** 资源包ID */
  ResourceId: string;
}

declare interface UpdateTrialLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateXMagicRequest {
  /** 要修改的XMagic Id */
  XMagicId: number;
  /** 资源id */
  XMagicResourceId?: string;
  /** 营业执照地址 */
  CompanyPermit?: string;
  /** 公司类型 */
  CompanyType?: string;
  /** 公司名称 */
  CompanyName?: string;
}

declare interface UpdateXMagicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vcube 音视频终端引擎} */
declare interface Vcube {
  (): Versions;
  /** 创建活动license {@link CreateActivityLicenseRequest} {@link CreateActivityLicenseResponse} */
  CreateActivityLicense(data: CreateActivityLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateActivityLicenseResponse>;
  /** 创建应用并绑定license或者XMagic {@link CreateApplicationAndBindLicenseRequest} {@link CreateApplicationAndBindLicenseResponse} */
  CreateApplicationAndBindLicense(data: CreateApplicationAndBindLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationAndBindLicenseResponse>;
  /** 创建视频播放license {@link CreateApplicationAndVideoRequest} {@link CreateApplicationAndVideoResponse} */
  CreateApplicationAndVideo(data: CreateApplicationAndVideoRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationAndVideoResponse>;
  /** 创建播放器web基础版 {@link CreateApplicationAndWebPlayerLicenseRequest} {@link CreateApplicationAndWebPlayerLicenseResponse} */
  CreateApplicationAndWebPlayerLicense(data: CreateApplicationAndWebPlayerLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationAndWebPlayerLicenseResponse>;
  /** 绑定license {@link CreateLicenseRequest} {@link CreateLicenseResponse} */
  CreateLicense(data: CreateLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLicenseResponse>;
  /** 创建测试版腾讯特效 {@link CreateTestXMagicRequest} {@link CreateTestXMagicResponse} */
  CreateTestXMagic(data: CreateTestXMagicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTestXMagicResponse>;
  /** 创建测试应用并开通测试 license {@link CreateTrialApplicationAndLicenseRequest} {@link CreateTrialApplicationAndLicenseResponse} */
  CreateTrialApplicationAndLicense(data: CreateTrialApplicationAndLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTrialApplicationAndLicenseResponse>;
  /** 开通测试license {@link CreateTrialLicenseRequest} {@link CreateTrialLicenseResponse} */
  CreateTrialLicense(data: CreateTrialLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTrialLicenseResponse>;
  /** 创建Xmagic {@link CreateXMagicRequest} {@link CreateXMagicResponse} */
  CreateXMagic(data: CreateXMagicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateXMagicResponse>;
  /** 查询功能列表 {@link DescribeFeatureListRequest} {@link DescribeFeatureListResponse} */
  DescribeFeatureList(data?: DescribeFeatureListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFeatureListResponse>;
  /** 查询临期License列表 {@link DescribeLicenseListRequest} {@link DescribeLicenseListResponse} */
  DescribeLicenseList(data?: DescribeLicenseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseListResponse>;
  /** 查询产品动态 {@link DescribeNewsRequest} {@link DescribeNewsResponse} */
  DescribeNews(data: DescribeNewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewsResponse>;
  /** 查询cos临时秘钥 {@link DescribeSTSRequest} {@link DescribeSTSResponse} */
  DescribeSTS(data?: DescribeSTSRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSTSResponse>;
  /** 查询测试应用可以开通的功能 {@link DescribeTrialFeatureRequest} {@link DescribeTrialFeatureResponse} */
  DescribeTrialFeature(data?: DescribeTrialFeatureRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrialFeatureResponse>;
  /** 查询用户配置 {@link DescribeUserConfigRequest} {@link DescribeUserConfigResponse} */
  DescribeUserConfig(data?: DescribeUserConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserConfigResponse>;
  /** 查询视立方应用及其license {@link DescribeVcubeApplicationAndLicenseRequest} {@link DescribeVcubeApplicationAndLicenseResponse} */
  DescribeVcubeApplicationAndLicense(data?: DescribeVcubeApplicationAndLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVcubeApplicationAndLicenseResponse>;
  /** 查询视立方应用及播放类license {@link DescribeVcubeApplicationAndPlayListRequest} {@link DescribeVcubeApplicationAndPlayListResponse} */
  DescribeVcubeApplicationAndPlayList(data?: DescribeVcubeApplicationAndPlayListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVcubeApplicationAndPlayListResponse>;
  /** 查询视立方应用及优图license {@link DescribeVcubeApplicationAndXMagicListRequest} {@link DescribeVcubeApplicationAndXMagicListResponse} */
  DescribeVcubeApplicationAndXMagicList(data?: DescribeVcubeApplicationAndXMagicListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVcubeApplicationAndXMagicListResponse>;
  /** 查询视立方 license 资源 {@link DescribeVcubeResourcesRequest} {@link DescribeVcubeResourcesResponse} */
  DescribeVcubeResources(data?: DescribeVcubeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVcubeResourcesResponse>;
  /** 查询视立方 license 资源列表 {@link DescribeVcubeResourcesListRequest} {@link DescribeVcubeResourcesListResponse} */
  DescribeVcubeResourcesList(data: DescribeVcubeResourcesListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVcubeResourcesListResponse>;
  /** 查询优图美视资源包 {@link DescribeXMagicResourceRequest} {@link DescribeXMagicResourceResponse} */
  DescribeXMagicResource(data: DescribeXMagicResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeXMagicResourceResponse>;
  /** 查询优图美视资源包列表 {@link DescribeXMagicResourceListRequest} {@link DescribeXMagicResourceListResponse} */
  DescribeXMagicResourceList(data: DescribeXMagicResourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeXMagicResourceListResponse>;
  /** 更改应用名称 {@link ModifyApplicationRequest} {@link ModifyApplicationResponse} */
  ModifyApplication(data: ModifyApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationResponse>;
  /** 修改正式应用包名 {@link ModifyFormalApplicationRequest} {@link ModifyFormalApplicationResponse} */
  ModifyFormalApplication(data: ModifyFormalApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFormalApplicationResponse>;
  /** license变配 {@link ModifyLicenseRequest} {@link ModifyLicenseResponse} */
  ModifyLicense(data: ModifyLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLicenseResponse>;
  /** 修改内置应用 {@link ModifyPresetApplicationRequest} {@link ModifyPresetApplicationResponse} */
  ModifyPresetApplication(data: ModifyPresetApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPresetApplicationResponse>;
  /** 续期测试license {@link ModifyTrialLicenseRequest} {@link ModifyTrialLicenseResponse} */
  ModifyTrialLicense(data: ModifyTrialLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTrialLicenseResponse>;
  /** 更新变配腾讯特效资源 {@link ModifyXMagicRequest} {@link ModifyXMagicResponse} */
  ModifyXMagic(data: ModifyXMagicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyXMagicResponse>;
  /** license续期 {@link RenewLicenseRequest} {@link RenewLicenseResponse} */
  RenewLicense(data: RenewLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<RenewLicenseResponse>;
  /** 续期测试版优图美视 {@link RenewTestXMagicRequest} {@link RenewTestXMagicResponse} */
  RenewTestXMagic(data: RenewTestXMagicRequest, config?: AxiosRequestConfig): AxiosPromise<RenewTestXMagicResponse>;
  /** 续期视频播放license {@link RenewVideoRequest} {@link RenewVideoResponse} */
  RenewVideo(data: RenewVideoRequest, config?: AxiosRequestConfig): AxiosPromise<RenewVideoResponse>;
  /** 升级到正式版 {@link UpdateTestXMagicRequest} {@link UpdateTestXMagicResponse} */
  UpdateTestXMagic(data: UpdateTestXMagicRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTestXMagicResponse>;
  /** 测试 license 升级为正式 license {@link UpdateTrialLicenseRequest} {@link UpdateTrialLicenseResponse} */
  UpdateTrialLicense(data: UpdateTrialLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTrialLicenseResponse>;
  /** 更新优图申请信息 {@link UpdateXMagicRequest} {@link UpdateXMagicResponse} */
  UpdateXMagic(data: UpdateXMagicRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateXMagicResponse>;
}

export declare type Versions = ["2022-04-10"];

export default Vcube;
