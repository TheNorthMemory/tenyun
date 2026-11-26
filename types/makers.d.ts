/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** COS 临时密钥 */
declare interface CosCredentials {
  /** 临时 SecretId */
  TmpSecretId?: string | null;
  /** 临时 SecretKey */
  TmpSecretKey?: string | null;
  /** 临时 Token */
  Token?: string | null;
}

/** 绑定自定义域名时的域名项 */
declare interface CustomDomainInput {
  /** 域名 */
  Domain: string;
  /** 证书 ID */
  CertificateId?: string;
  /** 校验状态。Verify、Pass、Fail */
  Status?: string;
  /** 是否不申请证书 */
  NoCertificate?: boolean;
}

/** 自定义域名 */
declare interface CustomDomainItem {
  /** 域名 */
  Domain?: string | null;
}

/** 部署记录 */
declare interface Deployment {
  /** 部署 ID */
  DeploymentId?: string | null;
  /** 项目 ID */
  ProjectId?: string | null;
  /** Success、Failed、Process、Invalid、Pending、Timeout、Cancelled */
  Status?: string | null;
  /** 部署被移除前的原始状态 */
  OriginalStatus?: string | null;
  /** 构建退出码，0 表示成功 */
  Code?: number | null;
  /** 构建耗时，单位毫秒 */
  BuildCost?: string | null;
  /** 触发来源。Github、ReDeploy、Api、Coding、Gitee、Upload、Gitlab */
  ViaMeta?: string | null;
  /** 环境 slug */
  Env?: string | null;
  /** 分支 */
  RepoBranch?: string | null;
  /** 提交哈希 */
  RepoCommitHash?: string | null;
  /** 提交说明 */
  RepoCommitMsg?: string | null;
  /** 本次部署的访问地址 */
  PreviewUrl?: string | null;
  /** 项目默认域名地址 */
  ProjectUrl?: string | null;
  /** 是否为当前生产版本 */
  UsedInProd?: boolean | null;
  /** 封面地址 */
  CoverUrl?: string | null;
  /** 路由配置，JSON 字符串 */
  MetaData?: string | null;
  /** 本次部署使用的仓库地址 */
  DplRepoUrl?: string | null;
  /** 创建时间 */
  CreatedOn?: string | null;
  /** 更新时间 */
  ModifiedOn?: string | null;
}

/** 部署列表过滤条件 */
declare interface DeploymentFilter {
  /** 过滤字段。ProjectId、DeploymentId、Name、Status、StartTime、EndTime、RepoBranch */
  Name: string;
  /** 过滤值 */
  Values: string[];
}

/** DNS 归属校验记录 */
declare interface DnsVerification {
  /** 记录类型，TXT */
  RecordType?: string | null;
  /** 主机记录 */
  Subdomain?: string | null;
  /** 记录值 */
  RecordValue?: string | null;
}

/** 环境变量。Env 缺省或空数组表示全局，写入时展开为项目当前全部环境 */
declare interface EnvVar {
  /** 变量名，最长 255 */
  Key: string | null;
  /** 变量值，最长 1000 */
  Value: string | null;
  /** 变量 ID。创建时不传 */
  Id?: number | null;
  /** 备注，最长 255 */
  Comment?: string | null;
  /** 生效环境 slug，例如 Production、Preview。同 Key 的多行环境不能重叠 */
  Env?: string[] | null;
}

/** 环境 */
declare interface Environment {
  /** 环境标识，创建后不可改 */
  Slug?: string | null;
  /** 环境名称 */
  Name?: string | null;
  /** Production、Preview、Custom */
  Type?: string | null;
  /** 关联分支，支持通配 */
  Branches?: string[] | null;
  /** 是否自动部署。Production 恒为 true */
  AutoDeploy?: boolean | null;
  /** 绑定的自定义域名 */
  CustomDomains?: string[] | null;
  /** 环境变量 */
  EnvVars?: EnvironmentEnvVar[] | null;
  /** 创建时间 */
  CreatedOn?: string | null;
  /** 更新时间 */
  ModifiedOn?: string | null;
}

/** 环境上的变量 */
declare interface EnvironmentEnvVar {
  /** 变量 ID */
  Id?: number | null;
  /** 变量名 */
  Key?: string | null;
  /** 变量值 */
  Value?: string | null;
  /** 备注 */
  Comment?: string | null;
  /** 生效环境 slug */
  Env?: string[] | null;
}

/** 文件归属校验信息 */
declare interface FileVerification {
  /** 校验文件路径 */
  Path?: string | null;
  /** 校验文件内容 */
  Content?: string | null;
}

/** 强制 HTTPS 跳转 */
declare interface ForceRedirectConfig {
  /** on 或 off */
  Switch?: string | null;
  /** 301、302、307、308 */
  RedirectStatusCode?: number | null;
}

/** HSTS 配置 */
declare interface HstsConfig {
  /** on 或 off */
  Switch?: string | null;
  /** 有效期，秒 */
  MaxAge?: number | null;
  /** on 或 off */
  IncludeSubDomains?: string | null;
  /** on 或 off */
  Preload?: string | null;
}

/** NS 归属校验信息。Makers 目前恒为 null */
declare interface NsVerification {
  /** NS 服务器 */
  NameServers?: string[] | null;
}

/** 域名归属校验信息 */
declare interface OwnershipVerification {
  /** DNS 校验 */
  DnsVerification?: DnsVerification | null;
  /** 文件校验 */
  FileVerification?: FileVerification | null;
  /** NS 校验 */
  NsVerification?: NsVerification | null;
}

/** 项目。字段与 DescribeProjects 的实际返回一致 */
declare interface Project {
  /** 项目 ID */
  ProjectId?: string | null;
  /** 项目名称 */
  Name?: string | null;
  /** 项目状态。Normal、Ban、Unlink、Process、Pending、Offline */
  Status?: string | null;
  /** 站点 ID */
  ZoneId?: string | null;
  /** 加速区域。mainland、overseas、global */
  Area?: string | null;
  /** 代码来源。Github、Gitee、Coding、Upload、Gitlab、Bitbucket、Cnb */
  Provider?: string | null;
  /** 创建来源。Template、Custom、CLI、Guest */
  Channel?: string | null;
  /** 预设域名 */
  PresetDomain?: string | null;
  /** 预设域名状态 */
  PresetDomainStatus?: string | null;
  /** 项目根目录 */
  RootDir?: string | null;
  /** 构建产物目录 */
  OutputDir?: string | null;
  /** 构建命令 */
  BuildCmd?: string | null;
  /** 安装命令 */
  InstallCmd?: string | null;
  /** 框架 */
  Framework?: string | null;
  /** Node.js 版本 */
  NodejsVersion?: string | null;
  /** 仓库地址 */
  RepoUrl?: string | null;
  /** 仓库所有者 */
  RepoOwner?: string | null;
  /** 仓库名称 */
  RepoName?: string | null;
  /** 生产分支 */
  RepoBranch?: string | null;
  /** 预览分支 */
  RepoPreBranches?: string[] | null;
  /** 部署地域 */
  Regions?: Regions | null;
  /** 环境变量 */
  EnvVars?: ProjectEnvVar[] | null;
  /** 自定义域名 */
  CustomDomains?: CustomDomainItem[] | null;
  /** 最近一次部署 */
  Deployment?: ProjectDeployment | null;
  /** 是否 Agent 项目。1 是，0 否 */
  IsAgent?: number | null;
  /** Agent 框架。非 Agent 项目为空 */
  AgentFramework?: string | null;
  /** 是否命中用户级泛域名。1 是，0 否 */
  IsTld?: number | null;
  /** 创建时间 */
  CreatedOn?: string | null;
  /** 更新时间 */
  ModifiedOn?: string | null;
  /** 构建规格客户契约枚举值：standard： 4C6G，默认档，所有套餐可用enhanced： 8C14G，专业版及以上可用；低配套餐声明时按 standard 处理并提示升级默认值：standard */
  BuildMachine?: string;
}

/** 项目最近一次部署 */
declare interface ProjectDeployment {
  /** 部署 ID */
  DeploymentId?: string | null;
  /** 项目 ID */
  ProjectId?: string | null;
  /** 部署状态 */
  Status?: string | null;
  /** 构建耗时，单位毫秒 */
  BuildCost?: string | null;
  /** 触发来源 */
  ViaMeta?: string | null;
  /** 环境 slug */
  Env?: string | null;
  /** 分支 */
  RepoBranch?: string | null;
  /** 提交哈希 */
  RepoCommitHash?: string | null;
  /** 提交说明 */
  RepoCommitMsg?: string | null;
  /** 预览地址 */
  PreviewUrl?: string | null;
  /** 封面地址 */
  CoverUrl?: string | null;
  /** 创建时间 */
  CreatedOn?: string | null;
  /** 更新时间 */
  ModifiedOn?: string | null;
  /** 本次部署使用的仓库地址 */
  DplRepoUrl?: string | null;
}

/** 项目列表里返回的环境变量，只有键和值 */
declare interface ProjectEnvVar {
  /** 变量名 */
  Key?: string | null;
  /** 变量值 */
  Value?: string | null;
}

/** 项目列表过滤条件。同一条件的 Values 之间为或 */
declare interface ProjectFilter {
  /** 过滤字段。ProjectId、Name、Status、Provider */
  Name: string;
  /** 过滤值 */
  Values: string[];
}

/** 项目部署地域 */
declare interface Regions {
  /** 中国大陆地域 */
  Mainland?: string[] | null;
  /** 海外地域 */
  Overseas?: string[] | null;
}

/** 开关配置 */
declare interface SwitchConfig {
  /** on 或 off */
  Switch?: string | null;
}

/** 站点下的自定义域名 */
declare interface ZoneDomain {
  /** Custom 或 Preset */
  Type?: string | null;
  /** 域名 */
  Domain?: string | null;
  /** 域名状态 */
  Status?: string | null;
  /** 绑定的环境 slug，默认 Production */
  Env?: string | null;
  /** 站点 ID */
  ZoneId?: string | null;
  /** 加速区域 */
  Area?: string | null;
  /** CNAME */
  Cname?: string | null;
  /** 主域名 */
  MainDomain?: string | null;
  /** IPv6 */
  Ipv6?: SwitchConfig | null;
  /** HTTP/2 */
  Http2?: SwitchConfig | null;
  /** OCSP */
  OcspStapling?: SwitchConfig | null;
  /** 强制 HTTPS */
  ForceRedirect?: ForceRedirectConfig | null;
  /** HSTS */
  Hsts?: HstsConfig | null;
  /** 归属校验 */
  OwnershipVerification?: OwnershipVerification | null;
}

declare interface BlockProjectRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 操作类型，目前支持 Ban表示封禁项目， Normal表示解封项目。枚举值：Ban： 表示封禁项目Normal： 表示解封项目 */
  Status: string;
}

declare interface BlockProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeploymentRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 触发来源。Github、ReDeploy、Api、Webhook、Upload、Coding、Gitee、Gitlab */
  ViaMeta: string;
  /** 环境 slug。Production、Preview 或自定义环境 */
  Env: string;
  /** 代码来源。上传制品传 Upload */
  Provider: string;
  /** 制品类型。Zip 或 Folder */
  DistType?: string;
  /** 已上传制品在临时桶中的对象路径 */
  TempBucketPath?: string;
  /** 构建分支 */
  RepoBranch?: string;
  /** 提交哈希 */
  RepoCommitHash?: string;
  /** 提交说明 */
  RepoCommitMsg?: string;
  /** 构建来源 */
  BuildFrom?: string;
  /** 模板 ID */
  TemplateId?: string;
  /** 构建规格。当前服务端仍从 edgeone.json 读取，此字段先保留 */
  CiSpec?: string;
}

declare interface CreateDeploymentResponse {
  /** 部署 ID */
  DeploymentId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目名称 */
  Name: string;
  /** 创建来源。Template、Custom、CLI、Guest */
  Channel: string;
  /** 代码来源。Upload、Github、Gitee、Gitlab、Coding */
  Provider?: string;
  /** 接入方标识 */
  Source?: string;
  /** 加速区域。mainland、overseas、global */
  Area?: string;
  /** Node.js 版本。14.21.3、16.20.2、18.20.4、20.18.0、22.11.0、22.17.1、22.21.1、24.5.0、24.11.0、24.18.0 */
  NodeJsVersion?: string;
  /** 项目根目录 */
  RootDir?: string;
  /** 构建产物目录 */
  OutputDir?: string;
  /** 构建命令 */
  BuildCmd?: string;
  /** 安装命令 */
  InstallCmd?: string;
  /** 框架 */
  Framework?: string;
  /** 模板 ID */
  TemplateId?: string;
  /** 仓库地址 */
  RepoUrl?: string;
  /** 仓库所有者 */
  RepoOwner?: string;
  /** 仓库名称 */
  RepoName?: string;
  /** 生产分支 */
  RepoBranch?: string;
  /** 初始环境变量 */
  EnvVars?: EnvVar[];
  /** Coding 命名空间。Provider 为 Coding 时使用 */
  Namespace?: string;
  /** Coding 项目 ID。Provider 为 Coding 时使用 */
  CodingProjectId?: number;
}

declare interface CreateProjectResponse {
  /** 项目 ID */
  ProjectId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateZoneCustomDomainRequest {
  /** 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 自定义域名 */
  Domain: string;
  /** 环境 slug。不传时由后端决定 */
  Env?: string;
}

declare interface CreateZoneCustomDomainResponse {
  /** 域名 */
  Domain?: string | null;
  /** 域名配置 ID */
  Id?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectCustomDomainsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 要解绑的域名 */
  CustomDomains: string[];
}

declare interface DeleteProjectCustomDomainsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectEnvsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 要删除的环境变量。传 Key（或 Id），Value 必填但不参与匹配 */
  EnvVars: EnvVar[];
}

declare interface DeleteProjectEnvsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
}

declare interface DeleteProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosTempTokenRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目名称。临时路径按它拼接 */
  ProjectName: string;
  /** 项目 ID。不传 ProjectName 时用来反查项目名 */
  ProjectId?: string;
}

declare interface DescribeCosTempTokenResponse {
  /** COS 桶 */
  Bucket?: string | null;
  /** COS 地域 */
  Region?: string | null;
  /** 上传路径，格式 appId/projectName/时间戳 */
  TargetPath?: string | null;
  /** 临时密钥过期时间，Unix 秒 */
  ExpiredTime?: number | null;
  /** 临时密钥过期时间，ISO 8601 */
  Expiration?: string | null;
  /** 临时密钥 */
  Credentials?: CosCredentials | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeploymentLogRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 部署 ID */
  DeploymentId: string;
}

declare interface DescribeDeploymentLogResponse {
  /** 构建日志地址 */
  LogUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeploymentsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 按部署 ID 查询 */
  DeploymentIds?: string[];
  /** 过滤条件 */
  Filters?: DeploymentFilter[];
  /** 偏移 */
  Offset?: number;
  /** 每页数量，最大 100 */
  Limit?: number;
  /** CreatedOn 或 ModifiedOn */
  OrderBy?: string;
  /** Asc 或 Desc */
  OrderType?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface DescribeDeploymentsResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 部署列表 */
  Deployments?: Deployment[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
}

declare interface DescribeEnvironmentsResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 环境列表 */
  Environments?: Environment[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectEnvsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 只返回该环境 slug 的变量 */
  Env?: string;
}

declare interface DescribeProjectEnvsResponse {
  /** 环境变量 */
  EnvVars?: EnvVar[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 页码偏移，从 0 开始。后端跳过 Offset * Limit 条 */
  Offset?: number;
  /** 每页数量，最大 100 */
  Limit?: number;
  /** 过滤条件。Name 取值 ProjectId、Name、Status、Provider */
  Filters?: ProjectFilter[];
  /** 按项目 ID 查询 */
  ProjectIds?: string[];
  /** 排序字段。CreatedOn、ModifiedOn。默认 CreatedOn */
  OrderBy?: string;
  /** 排序方向。Asc、Desc、ASC、DESC。默认 DESC */
  OrderType?: string;
  /** 来源。drop 时只返回 Upload 项目 */
  Source?: string;
  /** 按项目名称模糊搜索 */
  Query?: string;
}

declare interface DescribeProjectsResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 项目列表 */
  Projects?: Project[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZoneCustomDomainsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 只查询这些域名。不传则返回项目下的域名 */
  CustomDomains?: CustomDomainInput[];
}

declare interface DescribeZoneCustomDomainsResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 域名列表 */
  PagesDomains?: ZoneDomain[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProjectEnvsRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 要写入的环境变量 */
  EnvVars: EnvVar[];
}

declare interface ModifyProjectEnvsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProjectRequest {
  /** Makers 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 项目名称 */
  Name?: string;
  /** 项目根目录 */
  RootDir?: string;
  /** 构建产物目录 */
  OutputDir?: string;
  /** 构建命令 */
  BuildCmd?: string;
  /** 安装命令 */
  InstallCmd?: string;
  /** 框架 */
  Framework?: string;
  /** 封面地址 */
  CoverUrl?: string;
  /** Node.js 版本 */
  NodeJsVersion?: string;
}

declare interface ModifyProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyZoneCustomDomainEnvRequest {
  /** 站点 ID */
  ZoneId: string;
  /** 项目 ID */
  ProjectId: string;
  /** 域名 */
  Domain: string;
  /** 目标环境 slug */
  Env: string;
}

declare interface ModifyZoneCustomDomainEnvResponse {
  /** 域名 */
  Domain?: string | null;
  /** 切换后的环境 slug */
  Env?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Makers Web 与 Agent 开发部署平台 Makers} */
declare interface Makers {
  (): Versions;
  /** 封禁或解封项目 {@link BlockProjectRequest} {@link BlockProjectResponse} */
  BlockProject(data: BlockProjectRequest, config?: AxiosRequestConfig): AxiosPromise<BlockProjectResponse>;
  /** 创建部署 {@link CreateDeploymentRequest} {@link CreateDeploymentResponse} */
  CreateDeployment(data: CreateDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeploymentResponse>;
  /** 创建项目 {@link CreateProjectRequest} {@link CreateProjectResponse} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 绑定自定义域名 {@link CreateZoneCustomDomainRequest} {@link CreateZoneCustomDomainResponse} */
  CreateZoneCustomDomain(data: CreateZoneCustomDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateZoneCustomDomainResponse>;
  /** 删除项目 {@link DeleteProjectRequest} {@link DeleteProjectResponse} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** 删除项目自定义域名 {@link DeleteProjectCustomDomainsRequest} {@link DeleteProjectCustomDomainsResponse} */
  DeleteProjectCustomDomains(data: DeleteProjectCustomDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectCustomDomainsResponse>;
  /** 删除项目环境变量 {@link DeleteProjectEnvsRequest} {@link DeleteProjectEnvsResponse} */
  DeleteProjectEnvs(data: DeleteProjectEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectEnvsResponse>;
  /** 获取上传临时密钥 {@link DescribeCosTempTokenRequest} {@link DescribeCosTempTokenResponse} */
  DescribeCosTempToken(data: DescribeCosTempTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosTempTokenResponse>;
  /** 获取部署日志 {@link DescribeDeploymentLogRequest} {@link DescribeDeploymentLogResponse} */
  DescribeDeploymentLog(data: DescribeDeploymentLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeploymentLogResponse>;
  /** 获取部署记录列表 {@link DescribeDeploymentsRequest} {@link DescribeDeploymentsResponse} */
  DescribeDeployments(data: DescribeDeploymentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeploymentsResponse>;
  /** 查询环境列表 {@link DescribeEnvironmentsRequest} {@link DescribeEnvironmentsResponse} */
  DescribeEnvironments(data: DescribeEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentsResponse>;
  /** 获取项目环境变量 {@link DescribeProjectEnvsRequest} {@link DescribeProjectEnvsResponse} */
  DescribeProjectEnvs(data: DescribeProjectEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectEnvsResponse>;
  /** 获取用户项目列表 {@link DescribeProjectsRequest} {@link DescribeProjectsResponse} */
  DescribeProjects(data: DescribeProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectsResponse>;
  /** 查询自定义域名 {@link DescribeZoneCustomDomainsRequest} {@link DescribeZoneCustomDomainsResponse} */
  DescribeZoneCustomDomains(data: DescribeZoneCustomDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneCustomDomainsResponse>;
  /** 编辑项目基本信息 {@link ModifyProjectRequest} {@link ModifyProjectResponse} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** 编辑项目环境变量 {@link ModifyProjectEnvsRequest} {@link ModifyProjectEnvsResponse} */
  ModifyProjectEnvs(data: ModifyProjectEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectEnvsResponse>;
  /** 修改自定义域名环境 {@link ModifyZoneCustomDomainEnvRequest} {@link ModifyZoneCustomDomainEnvResponse} */
  ModifyZoneCustomDomainEnv(data: ModifyZoneCustomDomainEnvRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneCustomDomainEnvResponse>;
}

export declare type Versions = ["2026-11-13"];

export default Makers;
