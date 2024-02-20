/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 内网接入信息 */
declare interface AccessVpc {
  /** Vpc的Id */
  VpcId: string;
  /** 子网Id */
  SubnetId: string;
  /** 内网接入状态 */
  Status: string;
  /** 内网接入Ip */
  AccessIp: string;
}

/** 自动删除策略信息 */
declare interface AutoDelStrategyInfo {
  /** 用户名 */
  Username: string;
  /** 仓库名 */
  RepoName: string;
  /** 类型 */
  Type: string;
  /** 策略值 */
  Value: number;
  /** Valid */
  Valid: number;
  /** 创建时间 */
  CreationTime: string;
}

/** 获取自动删除策略 */
declare interface AutoDelStrategyInfoResp {
  /** 总数目 */
  TotalCount: number;
  /** 自动删除策略列表 */
  StrategyInfo: AutoDelStrategyInfo[] | null;
}

/** 命名空间漏洞白名单列表 */
declare interface CVEWhitelistItem {
  /** 漏洞白名单 ID */
  CVEID?: string | null;
}

/** 自定义域名信息 */
declare interface CustomizedDomainInfo {
  /** 实例ID */
  RegistryId: string;
  /** 证书ID */
  CertId: string;
  /** 域名名称 */
  DomainName: string;
  /** 域名创建状态（SUCCESS, FAILURE, CREATING, DELETING） */
  Status: string;
}

/** 查询应用更新触发器触发日志返回值 */
declare interface DescribeApplicationTriggerLogPersonalResp {
  /** 返回总数 */
  TotalCount: number;
  /** 触发日志列表 */
  LogInfo: TriggerLogResp[] | null;
}

/** 拉取触发器列表返回值 */
declare interface DescribeApplicationTriggerPersonalResp {
  /** 返回条目总数 */
  TotalCount: number;
  /** 触发器列表 */
  TriggerInfo: TriggerResp[];
}

/** 复制镜像tag返回值 */
declare interface DupImageTagResp {
  /** 镜像Digest值 */
  Digest: string;
}

/** 用于获取收藏仓库的响应 */
declare interface FavorResp {
  /** 收藏仓库的总数 */
  TotalCount: number;
  /** 仓库信息数组 */
  RepoInfo: Favors[] | null;
}

/** 仓库收藏 */
declare interface Favors {
  /** 仓库名字 */
  RepoName: string;
  /** 仓库类型 */
  RepoType: string;
  /** Pull总共的次数 */
  PullCount: number | null;
  /** 仓库收藏次数 */
  FavorCount: number | null;
  /** 仓库是否公开 */
  Public: number | null;
  /** 是否为官方所有 */
  IsQcloudOfficial: boolean | null;
  /** 仓库Tag的数量 */
  TagCount: number | null;
  /** Logo */
  Logo: string | null;
  /** 地域 */
  Region: string;
  /** 地域的Id */
  RegionId: number;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** GC 执行信息 */
declare interface GCJobInfo {
  /** 作业 ID */
  ID: number;
  /** 作业状态 */
  JobStatus: string;
  /** 创建时间 */
  CreationTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 调度信息 */
  Schedule: Schedule;
}

/** Header KV */
declare interface Header {
  /** Header Key */
  Key: string;
  /** Header Values */
  Values: string[];
}

/** 镜像 tag 不可变规则 */
declare interface ImmutableTagRule {
  /** 仓库匹配规则 */
  RepositoryPattern: string;
  /** Tag 匹配规则 */
  TagPattern: string;
  /** repoMatches或repoExcludes */
  RepositoryDecoration: string;
  /** matches或excludes */
  TagDecoration: string;
  /** 禁用规则 */
  Disabled?: boolean;
  /** 规则 Id */
  RuleId?: number;
  /** 命名空间 */
  NsName?: string;
}

/** 通用参数字符串键值对 */
declare interface KeyValueString {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 共享镜像仓库用户配额 */
declare interface Limit {
  /** 用户名 */
  Username: string;
  /** 配额的类型 */
  Type: string;
  /** 配置的值 */
  Value: number;
}

/** 命名空间信息 */
declare interface NamespaceInfo {
  /** 命名空间 */
  Namespace: string;
  /** 创建时间 */
  CreationTime: string;
  /** 命名空间下仓库数量 */
  RepoCount: number;
}

/** 获取命名空间信息返回 */
declare interface NamespaceInfoResp {
  /** 命名空间数量 */
  NamespaceCount: number;
  /** 命名空间信息 */
  NamespaceInfo: NamespaceInfo[];
}

/** NamespaceIsExists返回类型 */
declare interface NamespaceIsExistsResp {
  /** 命名空间是否存在 */
  IsExist: boolean;
  /** 是否为保留命名空间 */
  IsPreserved: boolean;
}

/** 跨主账号实例同步参数 */
declare interface PeerReplicationOption {
  /** 待同步实例的uin */
  PeerRegistryUin: string;
  /** 待同步实例的访问永久Token */
  PeerRegistryToken: string;
  /** 是否开启跨主账号实例同步 */
  EnablePeerReplication: boolean;
}

/** 策略 */
declare interface Permission {
  /** 资源路径，目前仅支持Namespace */
  Resource: string | null;
  /** 动作，目前仅支持：tcr:PushRepository、tcr:PullRepository、tcr:CreateRepository、tcr:CreateHelmChart、tcr:DescribeHelmCharts */
  Actions: string[] | null;
}

/** 地域信息 */
declare interface Region {
  /** gz */
  Alias: string;
  /** 1 */
  RegionId: number;
  /** ap-guangzhou */
  RegionName: string;
  /** alluser */
  Status: string;
  /** remark */
  Remark: string;
  /** 创建时间 */
  CreatedAt: string;
  /** 更新时间 */
  UpdatedAt: string;
  /** id */
  Id: number;
}

/** 实例信息结构体 */
declare interface Registry {
  /** 实例ID */
  RegistryId: string;
  /** 实例名称 */
  RegistryName: string;
  /** 实例规格 */
  RegistryType: string;
  /** 实例状态 */
  Status: string;
  /** 实例的公共访问地址 */
  PublicDomain: string;
  /** 实例创建时间 */
  CreatedAt: string;
  /** 地域名称 */
  RegionName: string;
  /** 地域Id */
  RegionId: number;
  /** 是否支持匿名 */
  EnableAnonymous: boolean;
  /** Token有效时间 */
  TokenValidTime: number;
  /** 实例内部访问地址 */
  InternalEndpoint: string;
  /** 实例云标签 */
  TagSpecification: TagSpecification | null;
  /** 实例过期时间（预付费） */
  ExpiredAt: string | null;
  /** 实例付费类型，0表示后付费，1表示预付费 */
  PayMod: number | null;
  /** 预付费续费标识，0表示手动续费，1表示自动续费，2不续费并且不通知 */
  RenewFlag: number | null;
  /** 是否开启实例删除保护，false表示不开启 */
  DeletionProtection?: boolean;
}

/** 实例预付费模式 */
declare interface RegistryChargePrepaid {
  /** 购买实例的时长，单位：月 */
  Period: number;
  /** 自动续费标识，0：手动续费，1：自动续费，2：不续费并且不通知 */
  RenewFlag: number;
}

/** 实例创建过程 */
declare interface RegistryCondition {
  /** 实例创建过程类型 */
  Type: string;
  /** 实例创建过程状态 */
  Status: string;
  /** 转换到该过程的简明原因 */
  Reason: string | null;
}

/** 实例状态 */
declare interface RegistryStatus {
  /** 实例的Id */
  RegistryId: string;
  /** 实例的状态 */
  Status: string;
  /** 附加状态 */
  Conditions: RegistryCondition[] | null;
}

/** 同步规则过滤器 */
declare interface ReplicationFilter {
  /** 类型（name、tag和resource） */
  Type: string;
  /** 默认为空 */
  Value?: string;
}

/** 同步日志 */
declare interface ReplicationLog {
  /** 资源类型 */
  ResourceType: string | null;
  /** 源资源 */
  Source: string | null;
  /** 目的资源 */
  Destination: string | null;
  /** 同步状态 */
  Status: string | null;
  /** 开始时间 */
  StartTime: string | null;
  /** 结束时间 */
  EndTime: string | null;
}

/** 企业版复制实例 */
declare interface ReplicationRegistry {
  /** 主实例ID */
  RegistryId: string;
  /** 复制实例ID */
  ReplicationRegistryId: string;
  /** 复制实例的地域ID */
  ReplicationRegionId: number;
  /** 复制实例的地域名称 */
  ReplicationRegionName: string;
  /** 复制实例的状态 */
  Status: string;
  /** 创建时间 */
  CreatedAt: string;
}

/** 同步规则 */
declare interface ReplicationRule {
  /** 同步规则名称 */
  Name: string;
  /** 目标命名空间 */
  DestNamespace: string;
  /** 是否覆盖 */
  Override: boolean;
  /** 同步过滤条件 */
  Filters: ReplicationFilter[];
}

/** 仓库的信息 */
declare interface RepoInfo {
  /** 仓库名称 */
  RepoName: string;
  /** 仓库类型 */
  RepoType: string;
  /** Tag数量 */
  TagCount: number;
  /** 是否为公开 */
  Public: number;
  /** 是否为用户收藏 */
  IsUserFavor: boolean;
  /** 是否为腾讯云官方仓库 */
  IsQcloudOfficial: boolean;
  /** 被收藏的个数 */
  FavorCount: number;
  /** 拉取的数量 */
  PullCount: number;
  /** 描述 */
  Description: string;
  /** 仓库创建时间 */
  CreationTime: string;
  /** 仓库更新时间 */
  UpdateTime: string;
}

/** 仓库信息的返回信息 */
declare interface RepoInfoResp {
  /** 仓库总数 */
  TotalCount: number;
  /** 仓库信息列表 */
  RepoInfo: RepoInfo[];
  /** Server信息 */
  Server: string;
}

/** 仓库是否存在的返回值 */
declare interface RepoIsExistResp {
  /** 仓库是否存在 */
  IsExist: boolean;
}

/** 查询共享版仓库信息返回 */
declare interface RepositoryInfoResp {
  /** 镜像仓库名字 */
  RepoName: string;
  /** 镜像仓库类型 */
  RepoType: string;
  /** 镜像仓库服务地址 */
  Server: string;
  /** 创建时间 */
  CreationTime: string;
  /** 镜像仓库描述 */
  Description: string | null;
  /** 是否为公有镜像 */
  Public: number;
  /** 下载次数 */
  PullCount: number;
  /** 收藏次数 */
  FavorCount: number;
  /** 是否为用户收藏 */
  IsUserFavor: boolean;
  /** 是否为腾讯云官方镜像 */
  IsQcloudOfficial: boolean;
}

/** 用户配额返回值 */
declare interface RespLimit {
  /** 配额信息 */
  LimitInfo: Limit[];
}

/** 版本保留规则执行 */
declare interface RetentionExecution {
  /** 执行Id */
  ExecutionId: number;
  /** 所属规则id */
  RetentionId: number;
  /** 执行的开始时间 */
  StartTime: string;
  /** 执行的结束时间 */
  EndTime: string;
  /** 执行的状态，Failed, Succeed, Stopped, InProgress */
  Status: string;
}

/** 版本保留策略 */
declare interface RetentionPolicy {
  /** 版本保留策略Id */
  RetentionId: number;
  /** 命名空间的名称 */
  NamespaceName: string;
  /** 规则列表 */
  RetentionRuleList: RetentionRule[];
  /** 定期执行方式 */
  CronSetting: string;
  /** 是否启用规则 */
  Disabled: boolean;
  /** 基于当前时间根据cronSetting后下一次任务要执行的时间，仅做参考使用 */
  NextExecutionTime: string;
}

/** 版本保留规则 */
declare interface RetentionRule {
  /** 支持的策略，可选值为latestPushedK（保留最新推送多少个版本）nDaysSinceLastPush（保留近天内推送） */
  Key: string;
  /** 规则设置下的对应值 */
  Value: number;
}

/** 版本保留执行的规则 */
declare interface RetentionTask {
  /** 任务Id */
  TaskId: number;
  /** 所属的规则执行Id */
  ExecutionId: number;
  /** 任务开始时间 */
  StartTime: string;
  /** 任务结束时间 */
  EndTime: string;
  /** 任务的执行状态，Failed, Succeed, Stopped, InProgress */
  Status: string;
  /** 总tag数 */
  Total: number;
  /** 保留tag数 */
  Retained: number;
  /** 应用的仓库 */
  Repository: string;
}

/** 指定tag镜像内容相同的tag列表 */
declare interface SameImagesResp {
  /** tag列表 */
  SameImages: string[] | null;
}

/** 作业调度信息 */
declare interface Schedule {
  /** 类型：Hourly, Daily, Weekly, Custom, Manual, Dryrun, None */
  Type: string;
}

/** 获取满足输入搜索条件的用户镜像仓库 */
declare interface SearchUserRepositoryResp {
  /** 总个数 */
  TotalCount: number;
  /** 仓库列表 */
  RepoInfo: RepoInfo[];
  /** Server */
  Server: string;
  /** PrivilegeFiltered */
  PrivilegeFiltered: boolean;
}

/** 安全策略 */
declare interface SecurityPolicy {
  /** 策略索引 */
  PolicyIndex?: number;
  /** 备注 */
  Description?: string;
  /** 运行访问的公网IP地址端 */
  CidrBlock?: string;
  /** 安全策略的版本 */
  PolicyVersion?: string;
}

/** 服务级账号 */
declare interface ServiceAccount {
  /** 服务级账号名 */
  Name?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 是否禁用 */
  Disable?: boolean | null;
  /** 过期时间 */
  ExpiresAt?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 策略 */
  Permissions?: Permission[] | null;
}

/** 云标签Tag */
declare interface Tag {
  /** 云标签的key */
  Key: string | null;
  /** 云标签的值 */
  Value: string | null;
}

/** 镜像tag信息 */
declare interface TagInfo {
  /** Tag名称 */
  TagName: string;
  /** 制品的 ID */
  TagId: string;
  /** docker image 可以看到的id */
  ImageId: string;
  /** 大小 */
  Size: string;
  /** 制品的创建时间 */
  CreationTime: string;
  /** 制品创建至今时间长度 */
  DurationDays: string | null;
  /** 标注的制品作者 */
  Author: string;
  /** 标注的制品平台 */
  Architecture: string;
  /** 创建制品的 Docker 版本 */
  DockerVersion: string;
  /** 标注的制品操作系统 */
  OS: string;
  /** 制品大小 */
  SizeByte: number;
  /** 序号 */
  Id: number;
  /** 数据更新时间 */
  UpdateTime: string;
  /** 制品更新时间 */
  PushTime: string;
  /** 制品类型 */
  Kind: string;
}

/** Tag列表的返回值 */
declare interface TagInfoResp {
  /** Tag的总数 */
  TagCount: number;
  /** TagInfo列表 */
  TagInfo: TagInfo[];
  /** Server */
  Server: string;
  /** 仓库名称 */
  RepoName: string;
}

/** 云标签 */
declare interface TagSpecification {
  /** 默认值为instance */
  ResourceType: string | null;
  /** 云标签数组 */
  Tags: Tag[] | null;
}

/** 任务详情 */
declare interface TaskDetail {
  /** 任务 */
  TaskName: string;
  /** 任务UUID */
  TaskUUID: string;
  /** 任务状态 */
  TaskStatus: string;
  /** 任务的状态信息 */
  TaskMessage: string | null;
  /** 任务开始时间 */
  CreatedTime: string;
  /** 任务结束时间 */
  FinishedTime: string | null;
}

/** 镜像信息 */
declare interface TcrImageInfo {
  /** 哈希值 */
  Digest: string;
  /** 镜像体积（单位：字节） */
  Size: number;
  /** Tag名称 */
  ImageVersion: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 制品类型 */
  Kind: string | null;
  /** KMS 签名信息 */
  KmsSignature: string | null;
}

/** 实例登录令牌 */
declare interface TcrInstanceToken {
  /** 令牌ID */
  Id: string;
  /** 令牌描述 */
  Desc: string;
  /** 令牌所属实例ID */
  RegistryId: string;
  /** 令牌启用状态 */
  Enabled: boolean;
  /** 令牌创建时间 */
  CreatedAt: string;
  /** 令牌过期时间戳 */
  ExpiredAt: number;
}

/** Tcr 命名空间的描述 */
declare interface TcrNamespaceInfo {
  /** 命名空间名称 */
  Name: string;
  /** 创建时间 */
  CreationTime: string;
  /** 访问级别 */
  Public: boolean;
  /** 命名空间的Id */
  NamespaceId: number;
  /** 实例云标签 */
  TagSpecification: TagSpecification | null;
  /** 命名空间元数据 */
  Metadata: KeyValueString[] | null;
  /** 漏洞白名单列表 */
  CVEWhitelistItems?: CVEWhitelistItem[];
  /** 扫描级别，true为自动，false为手动 */
  AutoScan?: boolean;
  /** 安全阻断级别，true为开启，false为关闭 */
  PreventVUL?: boolean;
  /** 阻断漏洞等级，目前仅支持low、medium、high, 为""时表示没有设置 */
  Severity?: string;
}

/** Tcr镜像仓库信息 */
declare interface TcrRepositoryInfo {
  /** 仓库名称 */
  Name: string;
  /** 命名空间名称 */
  Namespace: string;
  /** 创建时间，格式"2006-01-02 15:04:05.999999999 -0700 MST" */
  CreationTime: string;
  /** 是否公开 */
  Public: boolean;
  /** 仓库详细描述 */
  Description: string | null;
  /** 简单描述 */
  BriefDescription: string | null;
  /** 更新时间，格式"2006-01-02 15:04:05.999999999 -0700 MST" */
  UpdateTime: string;
}

/** 触发器触发条件 */
declare interface TriggerInvokeCondition {
  /** 触发方式 */
  InvokeMethod: string;
  /** 触发表达式 */
  InvokeExpr: string | null;
}

/** 触发器触发参数 */
declare interface TriggerInvokePara {
  /** AppId */
  AppId: string | null;
  /** TKE集群ID */
  ClusterId: string | null;
  /** TKE集群命名空间 */
  Namespace: string | null;
  /** TKE集群工作负载名称 */
  ServiceName: string | null;
  /** TKE集群工作负载中容器名称 */
  ContainerName: string | null;
  /** TKE集群地域数字ID */
  ClusterRegion: number | null;
}

/** 触发器触发结果 */
declare interface TriggerInvokeResult {
  /** 请求TKE返回值 */
  ReturnCode: number | null;
  /** 请求TKE返回信息 */
  ReturnMsg: string | null;
}

/** 触发器日志 */
declare interface TriggerLogResp {
  /** 仓库名称 */
  RepoName: string | null;
  /** Tag名称 */
  TagName: string | null;
  /** 触发器名称 */
  TriggerName: string | null;
  /** 触发方式 */
  InvokeSource: string | null;
  /** 触发动作 */
  InvokeAction: string | null;
  /** 触发时间 */
  InvokeTime: string | null;
  /** 触发条件 */
  InvokeCondition: TriggerInvokeCondition | null;
  /** 触发参数 */
  InvokePara: TriggerInvokePara | null;
  /** 触发结果 */
  InvokeResult: TriggerInvokeResult | null;
}

/** 触发器返回值 */
declare interface TriggerResp {
  /** 触发器名称 */
  TriggerName: string | null;
  /** 触发来源 */
  InvokeSource: string | null;
  /** 触发动作 */
  InvokeAction: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 触发条件 */
  InvokeCondition: TriggerInvokeCondition | null;
  /** 触发器参数 */
  InvokePara: TriggerInvokePara | null;
}

/** vpc和domain信息 */
declare interface VpcAndDomainInfo {
  /** tcr实例id */
  InstanceId: string;
  /** 私有网络id */
  VpcId: string;
  /** tcr内网访问链路ip */
  EniLBIp: string;
  /** true：use instance name as subdomainfalse: use instancename+"-vpc" as subdomain */
  UsePublicDomain?: boolean;
  /** 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域 */
  RegionName?: string;
}

/** vpc私有域名解析状态 */
declare interface VpcPrivateDomainStatus {
  /** 地域 */
  Region: string | null;
  /** unique vpc id */
  VpcId: string | null;
  /** ENABLE代表已经开启，DISABLE代表未开启，ERROR代表查询出错 */
  Status: string | null;
}

/** 触发器目标 */
declare interface WebhookTarget {
  /** 目标地址 */
  Address: string;
  /** 自定义 Headers */
  Headers?: Header[];
}

/** Webhook 触发器 */
declare interface WebhookTrigger {
  /** 触发器名称 */
  Name: string;
  /** 触发器目标 */
  Targets: WebhookTarget[];
  /** 触发动作 */
  EventTypes: string[];
  /** 触发规则 */
  Condition: string;
  /** 启用触发器 */
  Enabled: boolean;
  /** 触发器Id */
  Id?: number;
  /** 触发器描述 */
  Description?: string;
  /** 触发器所属命名空间 Id */
  NamespaceId?: number;
}

/** 触发器日志 */
declare interface WebhookTriggerLog {
  /** 日志 Id */
  Id: number;
  /** 触发器 Id */
  TriggerId: number;
  /** 事件类型 */
  EventType: string;
  /** 通知类型 */
  NotifyType: string;
  /** 详情 */
  Detail: string;
  /** 创建时间 */
  CreationTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 状态 */
  Status: string;
}

declare interface BatchDeleteImagePersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** Tag列表 */
  Tags: string[];
}

declare interface BatchDeleteImagePersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteRepositoryPersonalRequest {
  /** 仓库名称数组 */
  RepoNames: string[];
}

declare interface BatchDeleteRepositoryPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckInstanceNameRequest {
  /** 待创建的实例名称 */
  RegistryName: string;
}

declare interface CheckInstanceNameResponse {
  /** 检查结果，true为合法，false为非法 */
  IsValidated?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckInstanceRequest {
  /** 待检测的实例Id */
  RegistryId: string;
}

declare interface CheckInstanceResponse {
  /** 检查结果，true为合法，false为非法 */
  IsValidated: boolean;
  /** 实例所在的RegionId */
  RegionId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationTriggerPersonalRequest {
  /** 触发器关联的镜像仓库，library/test格式 */
  RepoName: string;
  /** 触发器名称 */
  TriggerName: string;
  /** 触发方式，"all"全部触发，"taglist"指定tag触发，"regex"正则触发 */
  InvokeMethod: string;
  /** 应用所在TKE集群ID */
  ClusterId: string;
  /** 应用所在TKE集群命名空间 */
  Namespace: string;
  /** 应用所在TKE集群工作负载类型,支持Deployment、StatefulSet、DaemonSet、CronJob、Job。 */
  WorkloadType: string;
  /** 应用所在TKE集群工作负载名称 */
  WorkloadName: string;
  /** 应用所在TKE集群工作负载下容器名称 */
  ContainerName: string;
  /** 应用所在TKE集群地域 */
  ClusterRegion: number;
  /** 触发方式对应的表达式 */
  InvokeExpr?: string;
}

declare interface CreateApplicationTriggerPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImageAccelerationServiceRequest {
  /** 实例Id */
  RegistryId: string;
  /** 创建CFS的归属的VPCID */
  VpcId: string;
  /** 创建CFS的归属的子网ID */
  SubnetId: string;
  /** 创建CFS的存储类型，其中 SD 为标准型存储， HP为性能存储。 */
  StorageType: string;
  /** 权限组 ID */
  PGroupId: string;
  /** 可用区名称，例如ap-beijing-1，请参考 概览 文档中的地域与可用区列表 */
  Zone: string;
  /** 云标签描述 */
  TagSpecification?: TagSpecification;
}

declare interface CreateImageAccelerationServiceResponse {
  /** 实例Id */
  RegistryId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImmutableTagRulesRequest {
  /** 实例 Id */
  RegistryId: string;
  /** 命名空间 */
  NamespaceName: string;
  /** 规则 */
  Rule: ImmutableTagRule;
}

declare interface CreateImmutableTagRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceCustomizedDomainRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 自定义域名 */
  DomainName: string;
  /** 证书ID */
  CertificateId: string;
}

declare interface CreateInstanceCustomizedDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceRequest {
  /** 企业版实例名称 */
  RegistryName: string;
  /** 企业版实例类型（basic 基础版；standard 标准版；premium 高级版） */
  RegistryType: string;
  /** 云标签描述 */
  TagSpecification?: TagSpecification;
  /** 实例计费类型，0表示按量计费，1表示预付费，默认为按量计费 */
  RegistryChargeType?: number;
  /** 预付费自动续费标识和购买时长 */
  RegistryChargePrepaid?: RegistryChargePrepaid;
  /** 是否同步TCR云标签至生成的COS Bucket */
  SyncTag?: boolean;
  /** 是否开启Cos桶多AZ特性 */
  EnableCosMAZ?: boolean;
  /** 是否开启实例删除保护 */
  DeletionProtection?: boolean;
}

declare interface CreateInstanceResponse {
  /** 企业版实例Id */
  RegistryId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceTokenRequest {
  /** 实例Id */
  RegistryId: string;
  /** 访问凭证类型，longterm 为长期访问凭证，temp 为临时访问凭证，默认是临时访问凭证，有效期1小时 */
  TokenType?: string;
  /** 长期访问凭证描述信息 */
  Desc?: string;
}

declare interface CreateInstanceTokenResponse {
  /** 用户名 */
  Username: string | null;
  /** 访问凭证 */
  Token: string;
  /** 访问凭证过期时间戳，是一个时间戳数字，无单位 */
  ExpTime: number;
  /** 长期凭证的TokenId，短期凭证没有TokenId */
  TokenId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInternalEndpointDnsRequest {
  /** tcr实例id */
  InstanceId: string;
  /** 私有网络id */
  VpcId: string;
  /** tcr内网访问链路ip */
  EniLBIp: string;
  /** true：为默认域名，公网域名一致false: 使用vpc域名默认为vpc域名 */
  UsePublicDomain?: boolean;
  /** 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域 */
  RegionName?: string;
  /** 请求的地域ID，用于实例复制地域 */
  RegionId?: number;
}

declare interface CreateInternalEndpointDnsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMultipleSecurityPolicyRequest {
  /** 实例Id */
  RegistryId: string;
  /** 安全组策略 */
  SecurityGroupPolicySet: SecurityPolicy[];
}

declare interface CreateMultipleSecurityPolicyResponse {
  /** 实例Id */
  RegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNamespacePersonalRequest {
  /** 命名空间名称 */
  Namespace: string;
}

declare interface CreateNamespacePersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNamespaceRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间的名称（长度2-30个字符，只能包含小写字母、数字及分隔符("."、"_"、"-")，且不能以分隔符开头、结尾或连续） */
  NamespaceName: string;
  /** 是否公开，true为公开，fale为私有 */
  IsPublic: boolean;
  /** 云标签描述 */
  TagSpecification?: TagSpecification;
  /** 自动扫描级别，true为自动，false为手动 */
  IsAutoScan?: boolean;
  /** 安全阻断级别，true为自动，false为手动 */
  IsPreventVUL?: boolean;
  /** 阻断漏洞等级，目前仅支持low、medium、high */
  Severity?: string;
  /** 漏洞白名单列表 */
  CVEWhitelistItems?: CVEWhitelistItem[];
}

declare interface CreateNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReplicationInstanceRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 复制实例地域ID */
  ReplicationRegionId?: number;
  /** 复制实例地域名称 */
  ReplicationRegionName?: string;
  /** 是否同步TCR云标签至生成的COS Bucket */
  SyncTag?: boolean;
}

declare interface CreateReplicationInstanceResponse {
  /** 企业版复制实例Id */
  ReplicationRegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRepositoryPersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** 是否公共,1:公共,0:私有 */
  Public?: number;
  /** 仓库描述 */
  Description?: string;
}

declare interface CreateRepositoryPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRepositoryRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 仓库名称 */
  RepositoryName: string;
  /** 仓库简短描述 */
  BriefDescription?: string;
  /** 仓库详细描述 */
  Description?: string;
}

declare interface CreateRepositoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityPolicyRequest {
  /** 实例Id */
  RegistryId: string;
  /** 192.168.0.0/24 */
  CidrBlock: string;
  /** 备注 */
  Description: string;
}

declare interface CreateSecurityPolicyResponse {
  /** 实例Id */
  RegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServiceAccountRequest {
  /** 实例Id */
  RegistryId: string;
  /** 服务级账号名 */
  Name: string;
  /** 策略列表 */
  Permissions: Permission[];
  /** 服务级账号描述 */
  Description?: string;
  /** 有效期(单位：天)，从当前时间开始计算，优先级高于ExpiresAt */
  Duration?: number;
  /** 过期时间（时间戳，单位:毫秒） */
  ExpiresAt?: number;
  /** 是否禁用服务级账号 */
  Disable?: boolean;
}

declare interface CreateServiceAccountResponse {
  /** 服务级账号名（会自动加上前缀tcr$） */
  Name?: string;
  /** 服务级账号密码，仅展示一次，请注意留存 */
  Password?: string;
  /** 服务级账号失效时间（时间戳） */
  ExpiresAt?: number;
  /** 服务级账号创建时间 */
  CreateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSignaturePolicyRequest {
  /** 实例 Id */
  RegistryId: string;
  /** 策略名称 */
  Name: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** KMS 密钥 */
  KmsId: string;
  /** KMS 密钥所属地域 */
  KmsRegion: string;
  /** 用户自定义域名，为空时使用 TCR 实例默认域名生成签名 */
  Domain?: string;
  /** 禁用加签策略，默认为 false */
  Disabled?: boolean;
}

declare interface CreateSignaturePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSignatureRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 仓库名称 */
  RepositoryName: string;
  /** Tag名称 */
  ImageVersion: string;
}

declare interface CreateSignatureResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTagRetentionExecutionRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 版本保留规则Id */
  RetentionId: number;
  /** 是否模拟执行，默认值为false，即非模拟执行 */
  DryRun?: boolean;
}

declare interface CreateTagRetentionExecutionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTagRetentionRuleRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 命名空间的Id */
  NamespaceId: number;
  /** 保留策略 */
  RetentionRule: RetentionRule;
  /** 执行周期，当前只能选择： manual;daily;weekly;monthly */
  CronSetting: string;
  /** 是否禁用规则，默认值为false */
  Disabled?: boolean;
}

declare interface CreateTagRetentionRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserPersonalRequest {
  /** 用户密码，密码必须为8到16位 */
  Password: string;
}

declare interface CreateUserPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWebhookTriggerRequest {
  /** 实例 Id */
  RegistryId: string;
  /** 触发器参数 */
  Trigger: WebhookTrigger;
  /** 命名空间 */
  Namespace: string;
}

declare interface CreateWebhookTriggerResponse {
  /** 新建的触发器 */
  Trigger?: WebhookTrigger;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApplicationTriggerPersonalRequest {
  /** 触发器名称 */
  TriggerName: string;
}

declare interface DeleteApplicationTriggerPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImageAccelerateServiceRequest {
  /** 实例Id */
  RegistryId: string;
}

declare interface DeleteImageAccelerateServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImageLifecycleGlobalPersonalRequest {
}

declare interface DeleteImageLifecycleGlobalPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImagePersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** Tag名 */
  Tag: string;
}

declare interface DeleteImagePersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImageRequest {
  /** 实例Id */
  RegistryId: string;
  /** 镜像仓库名称 */
  RepositoryName: string;
  /** 镜像版本 */
  ImageVersion: string;
  /** 命名空间名称 */
  NamespaceName: string;
}

declare interface DeleteImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImmutableTagRulesRequest {
  /** 实例 Id */
  RegistryId: string;
  /** 命名空间 */
  NamespaceName: string;
  /** 规则 Id */
  RuleId: number;
}

declare interface DeleteImmutableTagRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceCustomizedDomainRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 自定义域名 */
  DomainName: string;
  /** 证书ID */
  CertificateId?: string;
}

declare interface DeleteInstanceCustomizedDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 实例id */
  RegistryId: string;
  /** 是否删除存储桶，默认为false */
  DeleteBucket?: boolean;
  /** 是否dryRun模式，缺省值：false */
  DryRun?: boolean;
}

declare interface DeleteInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceTokenRequest {
  /** 实例 ID */
  RegistryId: string;
  /** 访问凭证 ID */
  TokenId: string;
}

declare interface DeleteInstanceTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInternalEndpointDnsRequest {
  /** tcr实例id */
  InstanceId: string;
  /** 私有网络id */
  VpcId: string;
  /** tcr内网访问链路ip */
  EniLBIp: string;
  /** true：使用默认域名false: 使用带有vpc的域名 */
  UsePublicDomain?: boolean;
  /** 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域 */
  RegionName?: string;
}

declare interface DeleteInternalEndpointDnsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMultipleSecurityPolicyRequest {
  /** 实例Id */
  RegistryId: string;
  /** 安全组策略 */
  SecurityGroupPolicySet: SecurityPolicy[];
}

declare interface DeleteMultipleSecurityPolicyResponse {
  /** 实例Id */
  RegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNamespacePersonalRequest {
  /** 命名空间名称 */
  Namespace: string;
}

declare interface DeleteNamespacePersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNamespaceRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间的名称 */
  NamespaceName: string;
}

declare interface DeleteNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReplicationInstanceRequest {
  /** 实例id */
  RegistryId: string;
  /** 复制实例ID */
  ReplicationRegistryId: string;
  /** 复制实例地域Id */
  ReplicationRegionId: number;
}

declare interface DeleteReplicationInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRepositoryPersonalRequest {
  /** 仓库名称 */
  RepoName: string;
}

declare interface DeleteRepositoryPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRepositoryRequest {
  /** 实例Id */
  RegistryId: string;
  /** 命名空间的名称 */
  NamespaceName: string;
  /** 镜像仓库的名称 */
  RepositoryName: string;
}

declare interface DeleteRepositoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRepositoryTagsRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 仓库名称 */
  RepositoryName: string;
  /** Tag列表，单次请求Tag数量最大为20 */
  Tags: string[];
}

declare interface DeleteRepositoryTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityPolicyRequest {
  /** 实例Id */
  RegistryId: string;
  /** 白名单Id */
  PolicyIndex?: number;
  /** 白名单版本 */
  PolicyVersion?: string;
  /** 网段或IP(互斥) */
  CidrBlock?: string;
}

declare interface DeleteSecurityPolicyResponse {
  /** 实例Id */
  RegistryId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServiceAccountRequest {
  /** 实例Id */
  RegistryId: string;
  /** 服务级账号名 */
  Name: string;
}

declare interface DeleteServiceAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSignaturePolicyRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间的名称 */
  NamespaceName: string;
}

declare interface DeleteSignaturePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTagRetentionRuleRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 版本保留规则的Id */
  RetentionId: number;
}

declare interface DeleteTagRetentionRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWebhookTriggerRequest {
  /** 实例Id */
  RegistryId: string;
  /** 命名空间 */
  Namespace: string;
  /** 触发器 Id */
  Id: number;
}

declare interface DeleteWebhookTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationTriggerLogPersonalRequest {
  /** 仓库名称 */
  RepoName?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回最大数量，默认 20, 最大值 100 */
  Limit?: number;
  /** 升序或降序 */
  Order?: string;
  /** 按某列排序 */
  OrderBy?: string;
}

declare interface DescribeApplicationTriggerLogPersonalResponse {
  /** 触发日志返回值 */
  Data?: DescribeApplicationTriggerLogPersonalResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationTriggerPersonalRequest {
  /** 仓库名称 */
  RepoName?: string;
  /** 触发器名称 */
  TriggerName?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回最大数量，默认 20, 最大值 100 */
  Limit?: number;
}

declare interface DescribeApplicationTriggerPersonalResponse {
  /** 触发器列表返回值 */
  Data?: DescribeApplicationTriggerPersonalResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChartDownloadInfoRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间 */
  NamespaceName: string;
  /** Chart包的名称 */
  ChartName: string;
  /** Chart包的版本 */
  ChartVersion: string;
}

declare interface DescribeChartDownloadInfoResponse {
  /** 用于下载的url的预签名地址 */
  PreSignedDownloadURL: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExternalEndpointStatusRequest {
  /** 实例Id */
  RegistryId: string;
}

declare interface DescribeExternalEndpointStatusResponse {
  /** 开启公网访问状态，开启中（Opening）、已开启（Opened）、关闭（Closed） */
  Status: string;
  /** 原因 */
  Reason: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFavorRepositoryPersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** 分页Limit */
  Limit: number;
  /** Offset用于分页 */
  Offset: number;
}

declare interface DescribeFavorRepositoryPersonalResponse {
  /** 个人收藏仓库列表返回信息 */
  Data?: FavorResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGCJobsRequest {
  /** 实例 Id */
  RegistryId: string;
}

declare interface DescribeGCJobsResponse {
  /** GC Job 列表 */
  Jobs: GCJobInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageAccelerateServiceRequest {
  /** 实例Id */
  RegistryId: string;
}

declare interface DescribeImageAccelerateServiceResponse {
  /** 镜像加速状态 */
  Status?: string;
  /** CFS的VIP */
  CFSVIP?: string;
  /** 是否开通 */
  IsEnable?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageFilterPersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** Tag名 */
  Tag: string;
}

declare interface DescribeImageFilterPersonalResponse {
  /** 返回tag镜像内容相同的tag列表 */
  Data: SameImagesResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageLifecycleGlobalPersonalRequest {
}

declare interface DescribeImageLifecycleGlobalPersonalResponse {
  /** 全局自动删除策略信息 */
  Data?: AutoDelStrategyInfoResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageLifecyclePersonalRequest {
  /** 仓库名称 */
  RepoName: string;
}

declare interface DescribeImageLifecyclePersonalResponse {
  /** 自动删除策略信息 */
  Data?: AutoDelStrategyInfoResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageManifestsRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 镜像仓库名称 */
  RepositoryName: string;
  /** 镜像版本 */
  ImageVersion: string;
}

declare interface DescribeImageManifestsResponse {
  /** 镜像的Manifest信息 */
  Manifest?: string;
  /** 镜像的配置信息 */
  Config?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImagePersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回最大数量，默认 20, 最大值 100 */
  Limit?: number;
  /** tag名称，可根据输入搜索 */
  Tag?: string;
}

declare interface DescribeImagePersonalResponse {
  /** 镜像tag信息 */
  Data?: TagInfoResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImagesRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 镜像仓库名称 */
  RepositoryName: string;
  /** 指定镜像版本进行查找，当前为模糊搜索 */
  ImageVersion?: string;
  /** 每页个数，用于分页，默认20 */
  Limit?: number;
  /** 页数，默认值为1 */
  Offset?: number;
  /** 指定镜像 Digest 进行查找 */
  Digest?: string;
  /** 指定是否为精准匹配，true为精准匹配，不填为模糊匹配 */
  ExactMatch?: boolean;
}

declare interface DescribeImagesResponse {
  /** 容器镜像信息列表 */
  ImageInfoList: TcrImageInfo[];
  /** 容器镜像总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImmutableTagRulesRequest {
  /** 实例 Id */
  RegistryId: string;
}

declare interface DescribeImmutableTagRulesResponse {
  /** 规则列表 */
  Rules: ImmutableTagRule[] | null;
  /** 未创建规则的命名空间 */
  EmptyNs: string[] | null;
  /** 规则总量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceAllNamespacesRequest {
  /** 每页个数 */
  Limit?: number;
  /** 起始偏移位置 */
  Offset?: number;
}

declare interface DescribeInstanceAllNamespacesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceCustomizedDomainRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 分页Limit */
  Limit?: number;
  /** 分页Offset */
  Offset?: number;
}

declare interface DescribeInstanceCustomizedDomainResponse {
  /** 域名信息列表 */
  DomainInfoList: CustomizedDomainInfo[] | null;
  /** 总个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceStatusRequest {
  /** 实例ID的数组 */
  RegistryIds: string[];
}

declare interface DescribeInstanceStatusResponse {
  /** 实例的状态列表 */
  RegistryStatusSet?: RegistryStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceTokenRequest {
  /** 实例 ID */
  RegistryId: string;
  /** 分页单页数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeInstanceTokenResponse {
  /** 长期访问凭证总数 */
  TotalCount?: number;
  /** 长期访问凭证列表 */
  Tokens?: TcrInstanceToken[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 实例ID列表(为空时，表示获取账号下所有实例) */
  Registryids?: string[];
  /** 偏移量,默认0 */
  Offset?: number;
  /** 最大输出条数，默认20，最大为100 */
  Limit?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 获取所有地域的实例，默认为False */
  AllRegion?: boolean;
}

declare interface DescribeInstancesResponse {
  /** 总实例个数 */
  TotalCount?: number;
  /** 实例信息列表 */
  Registries?: Registry[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInternalEndpointDnsStatusRequest {
  /** vpc列表 */
  VpcSet: VpcAndDomainInfo[];
}

declare interface DescribeInternalEndpointDnsStatusResponse {
  /** vpc私有域名解析状态列表 */
  VpcSet: VpcPrivateDomainStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInternalEndpointsRequest {
  /** 实例Id */
  RegistryId: string;
}

declare interface DescribeInternalEndpointsResponse {
  /** 内网接入信息的列表 */
  AccessVpcSet: AccessVpc[] | null;
  /** 内网接入总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNamespacePersonalRequest {
  /** 命名空间，支持模糊查询 */
  Namespace: string;
  /** 单页数量 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
}

declare interface DescribeNamespacePersonalResponse {
  /** 用户命名空间返回信息 */
  Data?: NamespaceInfoResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNamespacesRequest {
  /** 实例Id */
  RegistryId: string;
  /** 指定命名空间，不填写默认查询所有命名空间 */
  NamespaceName?: string;
  /** 每页个数 */
  Limit?: number;
  /** 页面偏移（第几页） */
  Offset?: number;
  /** 列出所有命名空间 */
  All?: boolean;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 仅查询启用了 KMS 镜像签名的空间 */
  KmsSignPolicy?: boolean;
}

declare interface DescribeNamespacesResponse {
  /** 命名空间列表信息 */
  NamespaceList?: TcrNamespaceInfo[];
  /** 总个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 返回的总数 */
  TotalCount?: number;
  /** 地域信息列表 */
  Regions?: Region[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReplicationInstanceCreateTasksRequest {
  /** 同步实例Id，见实例返回列表中的同步实例ID */
  ReplicationRegistryId: string;
  /** 同步实例的地域ID，见实例返回列表中地域ID */
  ReplicationRegionId: number;
}

declare interface DescribeReplicationInstanceCreateTasksResponse {
  /** 任务详情 */
  TaskDetail: TaskDetail[];
  /** 整体任务状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReplicationInstanceSyncStatusRequest {
  /** 主实例Id */
  RegistryId: string;
  /** 复制实例Id */
  ReplicationRegistryId: string;
  /** 复制实例的地域Id */
  ReplicationRegionId?: number;
  /** 是否显示同步日志 */
  ShowReplicationLog?: boolean;
  /** 日志页号, 默认0 */
  Offset?: number;
  /** 最大输出条数，默认5，最大为20 */
  Limit?: number;
}

declare interface DescribeReplicationInstanceSyncStatusResponse {
  /** 同步状态 */
  ReplicationStatus: string;
  /** 同步完成时间 */
  ReplicationTime: string;
  /** 同步日志 */
  ReplicationLog: ReplicationLog | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReplicationInstancesRequest {
  /** 实例Id */
  RegistryId: string;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 最大输出条数，默认20，最大为100 */
  Limit?: number;
}

declare interface DescribeReplicationInstancesResponse {
  /** 总实例个数 */
  TotalCount: number;
  /** 同步实例列表 */
  ReplicationRegistries: ReplicationRegistry[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepositoriesRequest {
  /** 实例Id */
  RegistryId: string;
  /** 指定命名空间，不填写默认为查询所有命名空间下镜像仓库 */
  NamespaceName?: string;
  /** 指定镜像仓库，不填写默认查询指定命名空间下所有镜像仓库 */
  RepositoryName?: string;
  /** 页数，用于分页 */
  Offset?: number;
  /** 每页个数，用于分页 */
  Limit?: number;
  /** 基于字段排序，支持的值有-creation_time,-name, -update_time */
  SortBy?: string;
}

declare interface DescribeRepositoriesResponse {
  /** 仓库信息列表 */
  RepositoryList?: TcrRepositoryInfo[];
  /** 总个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepositoryFilterPersonalRequest {
  /** 搜索镜像名 */
  RepoName?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回最大数量，默认 20，最大100 */
  Limit?: number;
  /** 筛选条件：1表示public，0表示private */
  Public?: number;
  /** 命名空间 */
  Namespace?: string;
}

declare interface DescribeRepositoryFilterPersonalResponse {
  /** 仓库信息 */
  Data?: SearchUserRepositoryResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepositoryOwnerPersonalRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回最大数量，默认 20, 最大值 100 */
  Limit?: number;
  /** 仓库名称 */
  RepoName?: string;
}

declare interface DescribeRepositoryOwnerPersonalResponse {
  /** 仓库信息 */
  Data?: RepoInfoResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepositoryPersonalRequest {
  /** 仓库名字 */
  RepoName: string;
}

declare interface DescribeRepositoryPersonalResponse {
  /** 仓库信息 */
  Data?: RepositoryInfoResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityPoliciesRequest {
  /** 实例的Id */
  RegistryId: string;
}

declare interface DescribeSecurityPoliciesResponse {
  /** 实例安全策略组 */
  SecurityPolicySet: SecurityPolicy[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceAccountsRequest {
  /** 实例Id */
  RegistryId: string;
  /** 列出所有服务级账号 */
  All?: boolean;
  /** 是否填充权限信息 */
  EmbedPermission?: boolean;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 偏移量,默认0 */
  Offset?: number;
  /** 最大输出条数，默认20，最大为100（超出最大值，调整到最大值） */
  Limit?: number;
}

declare interface DescribeServiceAccountsResponse {
  /** 服务级账号列表 */
  ServiceAccounts?: ServiceAccount[] | null;
  /** 服务级账户数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagRetentionExecutionRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 规则Id */
  RetentionId: number;
  /** 分页PageSize */
  Limit?: number;
  /** 分页Page */
  Offset?: number;
}

declare interface DescribeTagRetentionExecutionResponse {
  /** 版本保留执行记录列表 */
  RetentionExecutionList: RetentionExecution[];
  /** 版本保留执行记录总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagRetentionExecutionTaskRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 规则Id */
  RetentionId: number;
  /** 规则执行Id */
  ExecutionId: number;
  /** 分页Page */
  Offset?: number;
  /** 分页PageSize */
  Limit?: number;
}

declare interface DescribeTagRetentionExecutionTaskResponse {
  /** 版本保留执行任务列表 */
  RetentionTaskList: RetentionTask[];
  /** 版本保留执行任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagRetentionRulesRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 命名空间的名称 */
  NamespaceName?: string;
  /** 分页PageSize */
  Limit?: number;
  /** 分页Page */
  Offset?: number;
}

declare interface DescribeTagRetentionRulesResponse {
  /** 版本保留策略列表 */
  RetentionPolicyList: RetentionPolicy[];
  /** 版本保留策略总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserQuotaPersonalRequest {
}

declare interface DescribeUserQuotaPersonalResponse {
  /** 配额返回信息 */
  Data?: RespLimit;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebhookTriggerLogRequest {
  /** 实例 Id */
  RegistryId: string;
  /** 命名空间 */
  Namespace: string;
  /** 触发器 Id */
  Id?: number;
  /** 分页单页数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeWebhookTriggerLogResponse {
  /** 总数 */
  TotalCount?: number;
  /** 日志列表 */
  Logs?: WebhookTriggerLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebhookTriggerRequest {
  /** 实例Id */
  RegistryId: string;
  /** 分页单页数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 命名空间 */
  Namespace?: string;
}

declare interface DescribeWebhookTriggerResponse {
  /** 触发器总数 */
  TotalCount: number;
  /** 触发器列表 */
  Triggers: WebhookTrigger[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadHelmChartRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** Helm chart名称 */
  ChartName: string;
  /** Helm chart版本 */
  ChartVersion: string;
}

declare interface DownloadHelmChartResponse {
  /** 临时token */
  TmpToken: string;
  /** 临时的secretId */
  TmpSecretId: string;
  /** 临时的secretKey */
  TmpSecretKey: string;
  /** 存储桶信息 */
  Bucket: string;
  /** 实例ID */
  Region: string;
  /** chart信息 */
  Path: string;
  /** 开始时间时间戳 */
  StartTime: number;
  /** token过期时间时间戳 */
  ExpiredTime: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DuplicateImagePersonalRequest {
  /** 源镜像名称，不包含domain。例如： tencentyun/foo:v1 */
  SrcImage: string;
  /** 目的镜像名称，不包含domain。例如： tencentyun/foo:latest */
  DestImage: string;
}

declare interface DuplicateImagePersonalResponse {
  /** 复制镜像返回值 */
  Data: DupImageTagResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DuplicateImageRequest {
  /** 实例id */
  RegistryId: string;
  /** 源命名空间名称 */
  SourceNamespace: string;
  /** 源镜像仓库名称 */
  SourceRepo: string;
  /** 源镜像tag或digest值，目前仅支持tag */
  SourceReference: string;
  /** 目标镜像版本 */
  DestinationTag: string;
  /** 目标命名空间，不填默认与源一致 */
  DestinationNamespace?: string;
  /** 目标镜像仓库，不填默认与源一致 */
  DestinationRepo?: string;
  /** 是否覆盖 */
  Override?: boolean;
}

declare interface DuplicateImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManageExternalEndpointRequest {
  /** 实例Id */
  RegistryId: string;
  /** 操作（Create/Delete） */
  Operation: string;
}

declare interface ManageExternalEndpointResponse {
  /** 实例Id */
  RegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManageImageLifecycleGlobalPersonalRequest {
  /** global_keep_last_days:全局保留最近几天的数据;global_keep_last_nums:全局保留最近多少个 */
  Type: string;
  /** 策略值 */
  Val: number;
}

declare interface ManageImageLifecycleGlobalPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManageInternalEndpointRequest {
  /** 实例Id */
  RegistryId: string;
  /** Create/Delete */
  Operation: string;
  /** 需要接入的用户vpcid */
  VpcId: string;
  /** 需要接入的用户子网id */
  SubnetId: string;
  /** 请求的地域ID，用于实例复制地域 */
  RegionId?: number;
  /** 请求的地域名称，用于实例复制地域 */
  RegionName?: string;
}

declare interface ManageInternalEndpointResponse {
  /** 实例Id */
  RegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManageReplicationRequest {
  /** 复制源实例ID */
  SourceRegistryId: string;
  /** 复制目标实例ID */
  DestinationRegistryId: string;
  /** 同步规则 */
  Rule: ReplicationRule;
  /** 规则描述 */
  Description?: string;
  /** 目标实例的地域ID，如广州是1 */
  DestinationRegionId?: number;
  /** 开启跨主账号实例同步配置项 */
  PeerReplicationOption?: PeerReplicationOption;
}

declare interface ManageReplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationTriggerPersonalRequest {
  /** 触发器关联的镜像仓库，library/test格式 */
  RepoName?: string;
  /** 触发器名称，必填参数 */
  TriggerName?: string;
  /** 触发方式，"all"全部触发，"taglist"指定tag触发，"regex"正则触发 */
  InvokeMethod?: string;
  /** 触发方式对应的表达式 */
  InvokeExpr?: string;
  /** 应用所在TKE集群ID */
  ClusterId?: string;
  /** 应用所在TKE集群命名空间 */
  Namespace?: string;
  /** 应用所在TKE集群工作负载类型,支持Deployment、StatefulSet、DaemonSet、CronJob、Job。 */
  WorkloadType?: string;
  /** 应用所在TKE集群工作负载名称 */
  WorkloadName?: string;
  /** 应用所在TKE集群工作负载下容器名称 */
  ContainerName?: string;
  /** 应用所在TKE集群地域数字ID，如1（广州）、16（成都） */
  ClusterRegion?: number;
  /** 新触发器名称 */
  NewTriggerName?: string;
}

declare interface ModifyApplicationTriggerPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyImmutableTagRulesRequest {
  /** 实例 Id */
  RegistryId: string;
  /** 命名空间 */
  NamespaceName: string;
  /** 规则 Id */
  RuleId: number;
  /** 规则 */
  Rule: ImmutableTagRule;
}

declare interface ModifyImmutableTagRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 实例ID */
  RegistryId: string;
  /** 实例的规格,基础版：basic标准版：standard高级版：premium */
  RegistryType?: string;
  /** 实例删除保护，false为关闭 */
  DeletionProtection?: boolean;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceTokenRequest {
  /** 实例长期访问凭证 ID */
  TokenId: string;
  /** 实例 ID */
  RegistryId: string;
  /** 启用或禁用实例长期访问凭证 */
  Enable?: boolean;
  /** 访问凭证描述 */
  Desc?: string;
  /** 1为修改描述 2为操作启动禁用，默认值为2 */
  ModifyFlag?: number;
}

declare interface ModifyInstanceTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNamespaceRequest {
  /** 实例Id */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 访问级别，True为公开，False为私有 */
  IsPublic?: boolean;
  /** 扫描级别，True为自动，False为手动 */
  IsAutoScan?: boolean;
  /** 阻断开关，True为开放，False为关闭 */
  IsPreventVUL?: boolean;
  /** 阻断漏洞等级，目前仅支持 low、medium、high */
  Severity?: string;
  /** 漏洞白名单列表 */
  CVEWhitelistItems?: CVEWhitelistItem[];
}

declare interface ModifyNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRepositoryAccessPersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** 默认值为0, 1公共，0私有 */
  Public: number;
}

declare interface ModifyRepositoryAccessPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRepositoryInfoPersonalRequest {
  /** 仓库名称 */
  RepoName: string;
  /** 仓库描述 */
  Description: string;
}

declare interface ModifyRepositoryInfoPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRepositoryRequest {
  /** 实例ID */
  RegistryId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 镜像仓库名称 */
  RepositoryName: string;
  /** 仓库简短描述 */
  BriefDescription: string;
  /** 仓库详细描述 */
  Description: string;
}

declare interface ModifyRepositoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityPolicyRequest {
  /** 实例的Id */
  RegistryId: string;
  /** PolicyId */
  PolicyIndex: number;
  /** 192.168.0.0/24 白名单Ip */
  CidrBlock: string;
  /** 备注 */
  Description: string;
}

declare interface ModifySecurityPolicyResponse {
  /** 实例Id */
  RegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServiceAccountPasswordRequest {
  /** 实例Id */
  RegistryId: string;
  /** 服务级账号名 */
  Name: string;
  /** 是否随机生成密码 */
  Random: boolean;
  /** 服务级账号密码，长度在8到20之间且需包含至少一个大写字符，一个小写字符和一个数字 */
  Password?: string;
}

declare interface ModifyServiceAccountPasswordResponse {
  /** 自定义用户密码，仅展示一次，请注意留存 */
  Password?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServiceAccountRequest {
  /** 实例Id */
  RegistryId: string;
  /** 服务级账号名 */
  Name: string;
  /** 服务级账号描述 */
  Description?: string;
  /** 有效期(单位：天)，从当前时间开始计算，优先级高于ExpiresAt */
  Duration?: number;
  /** 过期时间（时间戳，单位:毫秒） */
  ExpiresAt?: number;
  /** 是否禁用服务级账号 */
  Disable?: boolean;
  /** 策略列表 */
  Permissions?: Permission[];
}

declare interface ModifyServiceAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTagRetentionRuleRequest {
  /** 主实例iD */
  RegistryId: string;
  /** 命名空间的Id，必须填写原有的命名空间id */
  NamespaceId: number;
  /** 保留策略 */
  RetentionRule: RetentionRule;
  /** 执行周期，必须填写为原来的设置 */
  CronSetting: string;
  /** 规则Id */
  RetentionId: number;
  /** 是否禁用规则 */
  Disabled?: boolean;
}

declare interface ModifyTagRetentionRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserPasswordPersonalRequest {
  /** 更新后的密码 */
  Password: string;
}

declare interface ModifyUserPasswordPersonalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWebhookTriggerRequest {
  /** 实例Id */
  RegistryId: string;
  /** 触发器参数 */
  Trigger: WebhookTrigger;
  /** 命名空间 */
  Namespace: string;
}

declare interface ModifyWebhookTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewInstanceRequest {
  /** 实例Id */
  RegistryId: string;
  /** 预付费自动续费标识和购买时长,0：手动续费，1：自动续费，2：不续费并且不通知;单位为月 */
  RegistryChargePrepaid: RegistryChargePrepaid;
  /** 0 续费， 1按量转包年包月 */
  Flag: number;
}

declare interface RenewInstanceResponse {
  /** 企业版实例Id */
  RegistryId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ValidateNamespaceExistPersonalRequest {
  /** 命名空间名称 */
  Namespace: string;
}

declare interface ValidateNamespaceExistPersonalResponse {
  /** 验证命名空间是否存在返回信息 */
  Data: NamespaceIsExistsResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ValidateRepositoryExistPersonalRequest {
  /** 仓库名称 */
  RepoName: string;
}

declare interface ValidateRepositoryExistPersonalResponse {
  /** 验证个人版仓库是否存在返回信息 */
  Data: RepoIsExistResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcr 容器镜像服务} */
declare interface Tcr {
  (): Versions;
  /** 个人版镜像仓库批量删除Tag {@link BatchDeleteImagePersonalRequest} {@link BatchDeleteImagePersonalResponse} */
  BatchDeleteImagePersonal(data: BatchDeleteImagePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteImagePersonalResponse>;
  /** 批量删除个人版仓库 {@link BatchDeleteRepositoryPersonalRequest} {@link BatchDeleteRepositoryPersonalResponse} */
  BatchDeleteRepositoryPersonal(data: BatchDeleteRepositoryPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteRepositoryPersonalResponse>;
  /** 校验实例信息 {@link CheckInstanceRequest} {@link CheckInstanceResponse} */
  CheckInstance(data: CheckInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CheckInstanceResponse>;
  /** 检查待创建的实例名称是否符合规范 {@link CheckInstanceNameRequest} {@link CheckInstanceNameResponse} */
  CheckInstanceName(data: CheckInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<CheckInstanceNameResponse>;
  /** 创建应用更新触发器 {@link CreateApplicationTriggerPersonalRequest} {@link CreateApplicationTriggerPersonalResponse} */
  CreateApplicationTriggerPersonal(data: CreateApplicationTriggerPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationTriggerPersonalResponse>;
  /** 创建镜像加速服务 {@link CreateImageAccelerationServiceRequest} {@link CreateImageAccelerationServiceResponse} */
  CreateImageAccelerationService(data: CreateImageAccelerationServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageAccelerationServiceResponse>;
  /** 创建镜像不可变规则 {@link CreateImmutableTagRulesRequest} {@link CreateImmutableTagRulesResponse} */
  CreateImmutableTagRules(data: CreateImmutableTagRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImmutableTagRulesResponse>;
  /** 创建实例 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 创建自定义域名 {@link CreateInstanceCustomizedDomainRequest} {@link CreateInstanceCustomizedDomainResponse} */
  CreateInstanceCustomizedDomain(data: CreateInstanceCustomizedDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceCustomizedDomainResponse>;
  /** 创建实例访问凭证 {@link CreateInstanceTokenRequest} {@link CreateInstanceTokenResponse} */
  CreateInstanceToken(data: CreateInstanceTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceTokenResponse>;
  /** 创建私有域名解析 {@link CreateInternalEndpointDnsRequest} {@link CreateInternalEndpointDnsResponse} */
  CreateInternalEndpointDns(data: CreateInternalEndpointDnsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInternalEndpointDnsResponse>;
  /** 创建实例公网访问多白名单策略 {@link CreateMultipleSecurityPolicyRequest} {@link CreateMultipleSecurityPolicyResponse} */
  CreateMultipleSecurityPolicy(data: CreateMultipleSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMultipleSecurityPolicyResponse>;
  /** 创建命名空间 {@link CreateNamespaceRequest} {@link CreateNamespaceResponse} */
  CreateNamespace(data: CreateNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNamespaceResponse>;
  /** 创建个人版命名空间 {@link CreateNamespacePersonalRequest} {@link CreateNamespacePersonalResponse} */
  CreateNamespacePersonal(data: CreateNamespacePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNamespacePersonalResponse>;
  /** 创建从实例 {@link CreateReplicationInstanceRequest} {@link CreateReplicationInstanceResponse} */
  CreateReplicationInstance(data: CreateReplicationInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReplicationInstanceResponse>;
  /** 创建镜像仓库 {@link CreateRepositoryRequest} {@link CreateRepositoryResponse} */
  CreateRepository(data: CreateRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRepositoryResponse>;
  /** 创建个人版镜像仓库 {@link CreateRepositoryPersonalRequest} {@link CreateRepositoryPersonalResponse} */
  CreateRepositoryPersonal(data: CreateRepositoryPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRepositoryPersonalResponse>;
  /** 创建实例公网访问白名单策略 {@link CreateSecurityPolicyRequest} {@link CreateSecurityPolicyResponse} */
  CreateSecurityPolicy(data: CreateSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityPolicyResponse>;
  /** 创建服务级账号 {@link CreateServiceAccountRequest} {@link CreateServiceAccountResponse} */
  CreateServiceAccount(data: CreateServiceAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceAccountResponse>;
  /** 创建镜像签名 {@link CreateSignatureRequest} {@link CreateSignatureResponse} */
  CreateSignature(data: CreateSignatureRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSignatureResponse>;
  /** 创建签名策略 {@link CreateSignaturePolicyRequest} {@link CreateSignaturePolicyResponse} */
  CreateSignaturePolicy(data: CreateSignaturePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSignaturePolicyResponse>;
  /** 手动执行版本保留 {@link CreateTagRetentionExecutionRequest} {@link CreateTagRetentionExecutionResponse} */
  CreateTagRetentionExecution(data: CreateTagRetentionExecutionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTagRetentionExecutionResponse>;
  /** 创建版本保留规则 {@link CreateTagRetentionRuleRequest} {@link CreateTagRetentionRuleResponse} */
  CreateTagRetentionRule(data: CreateTagRetentionRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTagRetentionRuleResponse>;
  /** 创建个人用户 {@link CreateUserPersonalRequest} {@link CreateUserPersonalResponse} */
  CreateUserPersonal(data: CreateUserPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserPersonalResponse>;
  /** 创建触发器 {@link CreateWebhookTriggerRequest} {@link CreateWebhookTriggerResponse} */
  CreateWebhookTrigger(data: CreateWebhookTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWebhookTriggerResponse>;
  /** 删除应用更新触发器 {@link DeleteApplicationTriggerPersonalRequest} {@link DeleteApplicationTriggerPersonalResponse} */
  DeleteApplicationTriggerPersonal(data: DeleteApplicationTriggerPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationTriggerPersonalResponse>;
  /** 删除指定镜像 {@link DeleteImageRequest} {@link DeleteImageResponse} */
  DeleteImage(data: DeleteImageRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageResponse>;
  /** 删除镜像加速服务 {@link DeleteImageAccelerateServiceRequest} {@link DeleteImageAccelerateServiceResponse} */
  DeleteImageAccelerateService(data: DeleteImageAccelerateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageAccelerateServiceResponse>;
  /** 删除个人版全局镜像版本自动清理策略 {@link DeleteImageLifecycleGlobalPersonalRequest} {@link DeleteImageLifecycleGlobalPersonalResponse} */
  DeleteImageLifecycleGlobalPersonal(data?: DeleteImageLifecycleGlobalPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageLifecycleGlobalPersonalResponse>;
  /** 删除个人版仓库tag {@link DeleteImagePersonalRequest} {@link DeleteImagePersonalResponse} */
  DeleteImagePersonal(data: DeleteImagePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImagePersonalResponse>;
  /** 删除镜像不可变规则 {@link DeleteImmutableTagRulesRequest} {@link DeleteImmutableTagRulesResponse} */
  DeleteImmutableTagRules(data: DeleteImmutableTagRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImmutableTagRulesResponse>;
  /** 删除实例 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 删除自定义域名 {@link DeleteInstanceCustomizedDomainRequest} {@link DeleteInstanceCustomizedDomainResponse} */
  DeleteInstanceCustomizedDomain(data: DeleteInstanceCustomizedDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceCustomizedDomainResponse>;
  /** 删除长期访问凭证 {@link DeleteInstanceTokenRequest} {@link DeleteInstanceTokenResponse} */
  DeleteInstanceToken(data: DeleteInstanceTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceTokenResponse>;
  /** 删除私有域名解析 {@link DeleteInternalEndpointDnsRequest} {@link DeleteInternalEndpointDnsResponse} */
  DeleteInternalEndpointDns(data: DeleteInternalEndpointDnsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInternalEndpointDnsResponse>;
  /** 删除实例公网访问多白名单策略 {@link DeleteMultipleSecurityPolicyRequest} {@link DeleteMultipleSecurityPolicyResponse} */
  DeleteMultipleSecurityPolicy(data: DeleteMultipleSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMultipleSecurityPolicyResponse>;
  /** 删除命名空间 {@link DeleteNamespaceRequest} {@link DeleteNamespaceResponse} */
  DeleteNamespace(data: DeleteNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNamespaceResponse>;
  /** 删除个人版命名空间 {@link DeleteNamespacePersonalRequest} {@link DeleteNamespacePersonalResponse} */
  DeleteNamespacePersonal(data: DeleteNamespacePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNamespacePersonalResponse>;
  /** 删除从实例 {@link DeleteReplicationInstanceRequest} {@link DeleteReplicationInstanceResponse} */
  DeleteReplicationInstance(data: DeleteReplicationInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReplicationInstanceResponse>;
  /** 删除镜像仓库 {@link DeleteRepositoryRequest} {@link DeleteRepositoryResponse} */
  DeleteRepository(data: DeleteRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRepositoryResponse>;
  /** 删除个人版镜像仓库 {@link DeleteRepositoryPersonalRequest} {@link DeleteRepositoryPersonalResponse} */
  DeleteRepositoryPersonal(data: DeleteRepositoryPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRepositoryPersonalResponse>;
  /** 批量删除Repository Tag {@link DeleteRepositoryTagsRequest} {@link DeleteRepositoryTagsResponse} */
  DeleteRepositoryTags(data: DeleteRepositoryTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRepositoryTagsResponse>;
  /** 删除实例公网访问白名单策略 {@link DeleteSecurityPolicyRequest} {@link DeleteSecurityPolicyResponse} */
  DeleteSecurityPolicy(data: DeleteSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityPolicyResponse>;
  /** 删除服务级账号 {@link DeleteServiceAccountRequest} {@link DeleteServiceAccountResponse} */
  DeleteServiceAccount(data: DeleteServiceAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceAccountResponse>;
  /** 删除命名空间加签策略 {@link DeleteSignaturePolicyRequest} {@link DeleteSignaturePolicyResponse} */
  DeleteSignaturePolicy(data: DeleteSignaturePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSignaturePolicyResponse>;
  /** 删除版本保留规则 {@link DeleteTagRetentionRuleRequest} {@link DeleteTagRetentionRuleResponse} */
  DeleteTagRetentionRule(data: DeleteTagRetentionRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTagRetentionRuleResponse>;
  /** 删除触发器 {@link DeleteWebhookTriggerRequest} {@link DeleteWebhookTriggerResponse} */
  DeleteWebhookTrigger(data: DeleteWebhookTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWebhookTriggerResponse>;
  /** 查询应用更新触发器触发日志 {@link DescribeApplicationTriggerLogPersonalRequest} {@link DescribeApplicationTriggerLogPersonalResponse} */
  DescribeApplicationTriggerLogPersonal(data?: DescribeApplicationTriggerLogPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationTriggerLogPersonalResponse>;
  /** 查询应用更新触发器 {@link DescribeApplicationTriggerPersonalRequest} {@link DescribeApplicationTriggerPersonalResponse} */
  DescribeApplicationTriggerPersonal(data?: DescribeApplicationTriggerPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationTriggerPersonalResponse>;
  /** 查询Chart包下载信息 {@link DescribeChartDownloadInfoRequest} {@link DescribeChartDownloadInfoResponse} */
  DescribeChartDownloadInfo(data: DescribeChartDownloadInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChartDownloadInfoResponse>;
  /** 查询实例公网访问入口状态 {@link DescribeExternalEndpointStatusRequest} {@link DescribeExternalEndpointStatusResponse} */
  DescribeExternalEndpointStatus(data: DescribeExternalEndpointStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExternalEndpointStatusResponse>;
  /** 查询个人收藏仓库 {@link DescribeFavorRepositoryPersonalRequest} {@link DescribeFavorRepositoryPersonalResponse} */
  DescribeFavorRepositoryPersonal(data: DescribeFavorRepositoryPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFavorRepositoryPersonalResponse>;
  /** GC 历史 {@link DescribeGCJobsRequest} {@link DescribeGCJobsResponse} */
  DescribeGCJobs(data: DescribeGCJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGCJobsResponse>;
  /** 查询镜像加速服务状态 {@link DescribeImageAccelerateServiceRequest} {@link DescribeImageAccelerateServiceResponse} */
  DescribeImageAccelerateService(data: DescribeImageAccelerateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAccelerateServiceResponse>;
  /** 查询个人版中与指定tag镜像内容相同的tag列表 {@link DescribeImageFilterPersonalRequest} {@link DescribeImageFilterPersonalResponse} */
  DescribeImageFilterPersonal(data: DescribeImageFilterPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageFilterPersonalResponse>;
  /** 获取个人版全局镜像版本自动清理策略 {@link DescribeImageLifecycleGlobalPersonalRequest} {@link DescribeImageLifecycleGlobalPersonalResponse} */
  DescribeImageLifecycleGlobalPersonal(data?: DescribeImageLifecycleGlobalPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageLifecycleGlobalPersonalResponse>;
  /** 获取个人版仓库自动清理策略 {@link DescribeImageLifecyclePersonalRequest} {@link DescribeImageLifecyclePersonalResponse} */
  DescribeImageLifecyclePersonal(data: DescribeImageLifecyclePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageLifecyclePersonalResponse>;
  /** 查询容器镜像Manifest信息 {@link DescribeImageManifestsRequest} {@link DescribeImageManifestsResponse} */
  DescribeImageManifests(data: DescribeImageManifestsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageManifestsResponse>;
  /** 获取个人版镜像仓库tag列表 {@link DescribeImagePersonalRequest} {@link DescribeImagePersonalResponse} */
  DescribeImagePersonal(data: DescribeImagePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImagePersonalResponse>;
  /** 查询容器镜像信息 {@link DescribeImagesRequest} {@link DescribeImagesResponse} */
  DescribeImages(data: DescribeImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImagesResponse>;
  /** 列出镜像不可变规则 {@link DescribeImmutableTagRulesRequest} {@link DescribeImmutableTagRulesResponse} */
  DescribeImmutableTagRules(data: DescribeImmutableTagRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImmutableTagRulesResponse>;
  /** 查询所有实例命名空间 {@link DescribeInstanceAllNamespacesRequest} {@link DescribeInstanceAllNamespacesResponse} */
  DescribeInstanceAllNamespaces(data?: DescribeInstanceAllNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceAllNamespacesResponse>;
  /** 查询实例自定义域名列表 {@link DescribeInstanceCustomizedDomainRequest} {@link DescribeInstanceCustomizedDomainResponse} */
  DescribeInstanceCustomizedDomain(data: DescribeInstanceCustomizedDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceCustomizedDomainResponse>;
  /** 查询实例状态 {@link DescribeInstanceStatusRequest} {@link DescribeInstanceStatusResponse} */
  DescribeInstanceStatus(data: DescribeInstanceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceStatusResponse>;
  /** 查询长期访问凭证信息 {@link DescribeInstanceTokenRequest} {@link DescribeInstanceTokenResponse} */
  DescribeInstanceToken(data: DescribeInstanceTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTokenResponse>;
  /** 查询实例信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询私有域名解析状态 {@link DescribeInternalEndpointDnsStatusRequest} {@link DescribeInternalEndpointDnsStatusResponse} */
  DescribeInternalEndpointDnsStatus(data: DescribeInternalEndpointDnsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInternalEndpointDnsStatusResponse>;
  /** 查询实例内网访问VPC链接 {@link DescribeInternalEndpointsRequest} {@link DescribeInternalEndpointsResponse} */
  DescribeInternalEndpoints(data: DescribeInternalEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInternalEndpointsResponse>;
  /** 查询个人版命名空间信息 {@link DescribeNamespacePersonalRequest} {@link DescribeNamespacePersonalResponse} */
  DescribeNamespacePersonal(data: DescribeNamespacePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNamespacePersonalResponse>;
  /** 查询命名空间信息 {@link DescribeNamespacesRequest} {@link DescribeNamespacesResponse} */
  DescribeNamespaces(data: DescribeNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNamespacesResponse>;
  /** 列出TCR可用区域 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询创建从实例任务状态 {@link DescribeReplicationInstanceCreateTasksRequest} {@link DescribeReplicationInstanceCreateTasksResponse} */
  DescribeReplicationInstanceCreateTasks(data: DescribeReplicationInstanceCreateTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplicationInstanceCreateTasksResponse>;
  /** 查询从实例同步状态 {@link DescribeReplicationInstanceSyncStatusRequest} {@link DescribeReplicationInstanceSyncStatusResponse} */
  DescribeReplicationInstanceSyncStatus(data: DescribeReplicationInstanceSyncStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplicationInstanceSyncStatusResponse>;
  /** 查询从实例列表 {@link DescribeReplicationInstancesRequest} {@link DescribeReplicationInstancesResponse} */
  DescribeReplicationInstances(data: DescribeReplicationInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplicationInstancesResponse>;
  /** 查询镜像仓库信息 {@link DescribeRepositoriesRequest} {@link DescribeRepositoriesResponse} */
  DescribeRepositories(data: DescribeRepositoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoriesResponse>;
  /** 获取满足输入搜索条件的个人版镜像仓库 {@link DescribeRepositoryFilterPersonalRequest} {@link DescribeRepositoryFilterPersonalResponse} */
  DescribeRepositoryFilterPersonal(data?: DescribeRepositoryFilterPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoryFilterPersonalResponse>;
  /** 查询个人版所有仓库 {@link DescribeRepositoryOwnerPersonalRequest} {@link DescribeRepositoryOwnerPersonalResponse} */
  DescribeRepositoryOwnerPersonal(data?: DescribeRepositoryOwnerPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoryOwnerPersonalResponse>;
  /** 查询个人版仓库信息 {@link DescribeRepositoryPersonalRequest} {@link DescribeRepositoryPersonalResponse} */
  DescribeRepositoryPersonal(data: DescribeRepositoryPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoryPersonalResponse>;
  /** 查询实例公网访问白名单策略 {@link DescribeSecurityPoliciesRequest} {@link DescribeSecurityPoliciesResponse} */
  DescribeSecurityPolicies(data: DescribeSecurityPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityPoliciesResponse>;
  /** 查询服务级账号 {@link DescribeServiceAccountsRequest} {@link DescribeServiceAccountsResponse} */
  DescribeServiceAccounts(data: DescribeServiceAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceAccountsResponse>;
  /** 查询版本保留执行记录 {@link DescribeTagRetentionExecutionRequest} {@link DescribeTagRetentionExecutionResponse} */
  DescribeTagRetentionExecution(data: DescribeTagRetentionExecutionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagRetentionExecutionResponse>;
  /** 查询版本保留执行任务 {@link DescribeTagRetentionExecutionTaskRequest} {@link DescribeTagRetentionExecutionTaskResponse} */
  DescribeTagRetentionExecutionTask(data: DescribeTagRetentionExecutionTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagRetentionExecutionTaskResponse>;
  /** 查询版本保留规则 {@link DescribeTagRetentionRulesRequest} {@link DescribeTagRetentionRulesResponse} */
  DescribeTagRetentionRules(data: DescribeTagRetentionRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagRetentionRulesResponse>;
  /** 查询个人用户配额 {@link DescribeUserQuotaPersonalRequest} {@link DescribeUserQuotaPersonalResponse} */
  DescribeUserQuotaPersonal(data?: DescribeUserQuotaPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserQuotaPersonalResponse>;
  /** 查询触发器 {@link DescribeWebhookTriggerRequest} {@link DescribeWebhookTriggerResponse} */
  DescribeWebhookTrigger(data: DescribeWebhookTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebhookTriggerResponse>;
  /** 获取触发器日志 {@link DescribeWebhookTriggerLogRequest} {@link DescribeWebhookTriggerLogResponse} */
  DescribeWebhookTriggerLog(data: DescribeWebhookTriggerLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebhookTriggerLogResponse>;
  /** 下载Helm Chart {@link DownloadHelmChartRequest} {@link DownloadHelmChartResponse} */
  DownloadHelmChart(data: DownloadHelmChartRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadHelmChartResponse>;
  /** 复制企业版仓库镜像版本 {@link DuplicateImageRequest} {@link DuplicateImageResponse} */
  DuplicateImage(data: DuplicateImageRequest, config?: AxiosRequestConfig): AxiosPromise<DuplicateImageResponse>;
  /** 复制个人版仓库镜像版本 {@link DuplicateImagePersonalRequest} {@link DuplicateImagePersonalResponse} */
  DuplicateImagePersonal(data: DuplicateImagePersonalRequest, config?: AxiosRequestConfig): AxiosPromise<DuplicateImagePersonalResponse>;
  /** 管理实例公网访问 {@link ManageExternalEndpointRequest} {@link ManageExternalEndpointResponse} */
  ManageExternalEndpoint(data: ManageExternalEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<ManageExternalEndpointResponse>;
  /** 设置个人版全局镜像版本自动清理策略 {@link ManageImageLifecycleGlobalPersonalRequest} {@link ManageImageLifecycleGlobalPersonalResponse} */
  ManageImageLifecycleGlobalPersonal(data: ManageImageLifecycleGlobalPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<ManageImageLifecycleGlobalPersonalResponse>;
  /** 管理实例内网访问VPC链接 {@link ManageInternalEndpointRequest} {@link ManageInternalEndpointResponse} */
  ManageInternalEndpoint(data: ManageInternalEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<ManageInternalEndpointResponse>;
  /** 管理实例同步 {@link ManageReplicationRequest} {@link ManageReplicationResponse} */
  ManageReplication(data: ManageReplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ManageReplicationResponse>;
  /** 修改应用更新触发器 {@link ModifyApplicationTriggerPersonalRequest} {@link ModifyApplicationTriggerPersonalResponse} */
  ModifyApplicationTriggerPersonal(data?: ModifyApplicationTriggerPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationTriggerPersonalResponse>;
  /** 更新镜像不可变规则 {@link ModifyImmutableTagRulesRequest} {@link ModifyImmutableTagRulesResponse} */
  ModifyImmutableTagRules(data: ModifyImmutableTagRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImmutableTagRulesResponse>;
  /** 更新实例信息 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** 更新实例长期访问凭证 {@link ModifyInstanceTokenRequest} {@link ModifyInstanceTokenResponse} */
  ModifyInstanceToken(data: ModifyInstanceTokenRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceTokenResponse>;
  /** 更新命名空间信息 {@link ModifyNamespaceRequest} {@link ModifyNamespaceResponse} */
  ModifyNamespace(data: ModifyNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNamespaceResponse>;
  /** 更新镜像仓库信息 {@link ModifyRepositoryRequest} {@link ModifyRepositoryResponse} */
  ModifyRepository(data: ModifyRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRepositoryResponse>;
  /** 更新个人版仓库访问属性 {@link ModifyRepositoryAccessPersonalRequest} {@link ModifyRepositoryAccessPersonalResponse} */
  ModifyRepositoryAccessPersonal(data: ModifyRepositoryAccessPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRepositoryAccessPersonalResponse>;
  /** 更新个人版镜像仓库描述 {@link ModifyRepositoryInfoPersonalRequest} {@link ModifyRepositoryInfoPersonalResponse} */
  ModifyRepositoryInfoPersonal(data: ModifyRepositoryInfoPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRepositoryInfoPersonalResponse>;
  /** 更新实例公网访问白名单 {@link ModifySecurityPolicyRequest} {@link ModifySecurityPolicyResponse} */
  ModifySecurityPolicy(data: ModifySecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityPolicyResponse>;
  /** 更新服务级账号 {@link ModifyServiceAccountRequest} {@link ModifyServiceAccountResponse} */
  ModifyServiceAccount(data: ModifyServiceAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceAccountResponse>;
  /** 更新服务级账号密码 {@link ModifyServiceAccountPasswordRequest} {@link ModifyServiceAccountPasswordResponse} */
  ModifyServiceAccountPassword(data: ModifyServiceAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceAccountPasswordResponse>;
  /** 更新版本保留规则 {@link ModifyTagRetentionRuleRequest} {@link ModifyTagRetentionRuleResponse} */
  ModifyTagRetentionRule(data: ModifyTagRetentionRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTagRetentionRuleResponse>;
  /** 修改个人用户登录密码 {@link ModifyUserPasswordPersonalRequest} {@link ModifyUserPasswordPersonalResponse} */
  ModifyUserPasswordPersonal(data: ModifyUserPasswordPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserPasswordPersonalResponse>;
  /** 更新触发器 {@link ModifyWebhookTriggerRequest} {@link ModifyWebhookTriggerResponse} */
  ModifyWebhookTrigger(data: ModifyWebhookTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebhookTriggerResponse>;
  /** 续费实例 {@link RenewInstanceRequest} {@link RenewInstanceResponse} */
  RenewInstance(data: RenewInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewInstanceResponse>;
  /** 验证个人版命名空间是否存在 {@link ValidateNamespaceExistPersonalRequest} {@link ValidateNamespaceExistPersonalResponse} */
  ValidateNamespaceExistPersonal(data: ValidateNamespaceExistPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<ValidateNamespaceExistPersonalResponse>;
  /** 验证个人版仓库是否存在 {@link ValidateRepositoryExistPersonalRequest} {@link ValidateRepositoryExistPersonalResponse} */
  ValidateRepositoryExistPersonal(data: ValidateRepositoryExistPersonalRequest, config?: AxiosRequestConfig): AxiosPromise<ValidateRepositoryExistPersonalResponse>;
}

export declare type Versions = ["2019-09-24"];

export default Tcr;
