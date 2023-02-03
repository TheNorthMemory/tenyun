/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 活动信息 */
declare interface ActivityInfoItem {
  /** 活动id */
  ActivityId: number;
  /** 记录插入时间 */
  CreateTime: string;
  /** 记录最后一次变更时间 */
  UpdateTime: string;
  /** 活动开始时间 */
  StartTime: string;
  /** 活动结束时间 */
  ExpireTime: string;
  /** 自定义备注信息 */
  Tag: string;
}

/** 活动详情 */
declare interface ActivityRecordItem {
  /** 用户uin */
  Uin: string | null;
  /** 活动id */
  ActivityId: number | null;
  /** 自定义状态码 */
  Status: number | null;
  /** 自定义子状态码 */
  SubStatus: string | null;
  /** 整型子状态码 */
  SubStatusInt: number | null;
  /** 是否软删除 */
  IsDeleted: boolean | null;
}

/** 合法域名 */
declare interface AuthDomain {
  /** 域名ID */
  Id: string;
  /** 域名 */
  Domain: string;
  /** 域名类型。包含以下取值：SYSTEMUSER */
  Type: string;
  /** 状态。包含以下取值：ENABLEDISABLE */
  Status: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** 新套餐套餐详情 */
declare interface BaasPackageInfo {
  /** DAU产品套餐ID */
  PackageName: string | null;
  /** DAU套餐中文名称 */
  PackageTitle: string | null;
  /** 套餐分组 */
  GroupName: string | null;
  /** 套餐分组中文名 */
  GroupTitle: string | null;
  /** json格式化计费标签，例如：{"pid":2, "cids":{"create": 2, "renew": 2, "modify": 2}, "productCode":"p_tcb_mp", "subProductCode":"sp_tcb_mp_cloudbase_dau"} */
  BillTags: string | null;
  /** json格式化用户资源限制，例如：{"Qps":1000,"InvokeNum":{"TimeUnit":"m", "Unit":"万次", "MaxSize": 100},"Capacity":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "Cdn":{"Flux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "BackFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}},"Scf":{"Concurrency":1000,"OutFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100},"MemoryUse":{"TimeUnit":"m", "Unit":"WGBS", "MaxSize": 100000}}} */
  ResourceLimit: string | null;
  /** json格式化高级限制，例如：{"CMSEnable":false,"ProvisionedConcurrencyMem":512000, "PictureProcessing":false, "SecurityAudit":false, "RealTimePush":false, "TemplateMessageBatchPush":false, "Payment":false} */
  AdvanceLimit: string | null;
  /** 套餐描述 */
  PackageDescription: string | null;
  /** 是否对外展示 */
  IsExternal: boolean | null;
}

/** 网关服务信息 */
declare interface BackendServiceInfo {
  /** 服务名称 */
  ServiceName: string;
  /** 服务状态 */
  Status: string;
}

/** cloudrun安全特性能力 */
declare interface CloudBaseCapabilities {
  /** 启用安全能力项列表 */
  Add?: string[] | null;
  /** 禁用安全能力向列表 */
  Drop?: string[] | null;
}

/** 代码仓库里 Repo的信息描述 */
declare interface CloudBaseCodeRepoDetail {
  /** repo的名字 */
  Name?: CloudBaseCodeRepoName;
  /** repo的url */
  Url?: string;
}

/** 代码仓库 repo的名字 */
declare interface CloudBaseCodeRepoName {
  /** repo的名字 */
  Name?: string | null;
  /** repo的完整全名 */
  FullName?: string | null;
}

/** es信息 */
declare interface CloudBaseEsInfo {
  /** es的id */
  Id?: number | null;
  /** secret名字 */
  SecretName?: string | null;
  /** ip地址 */
  Ip?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 索引 */
  Index?: string | null;
  /** 用户名 */
  Account?: string | null;
  /** 密码 */
  Password?: string | null;
}

/** 云开发项目版本 */
declare interface CloudBaseProjectVersion {
  /** 项目名 */
  Name: string;
  /** SAM json */
  Sam: string | null;
  /** 来源类型 */
  Source: CodeSource | null;
  /** 创建时间, unix时间戳 */
  CreateTime: number | null;
  /** 更新时间 ,unix时间戳 */
  UpdateTime: number | null;
  /** 项目状态, 枚举值: "creatingEnv"-创建环境中	"createEnvFail"-创建环境失败	"building"-构建中	"buildFail"-构建失败	"deploying"-部署中 "deployFail"-部署失败 "success"-部署成功 */
  Status: string | null;
  /** 环境变量 */
  Parameters: KVPair[] | null;
  /** 项目类型, 枚举值:"framework-oneclick" 控制台一键部署"framework-local-oneclick" cli本地一键部署"qci-extension-cicd" 内网coding ci cd */
  Type: string | null;
  /** ci的id */
  CIId: string | null;
  /** cd的id */
  CDId: string | null;
  /** 环境id */
  EnvId: string | null;
  /** 版本号 */
  VersionNum: number | null;
  /** 错误原因 */
  FailReason: string | null;
  /** rc.json内容 */
  RcJson: string | null;
  /** 插件配置内容 */
  AddonConfig: string | null;
  /** 标签 */
  Tags: string[] | null;
  /** 网络配置 */
  NetworkConfig: string | null;
  /** 扩展id */
  ExtensionId: string | null;
  /** 错误类型 */
  FailType: string | null;
  /** 私有仓库地址 */
  RepoUrl: string | null;
  /** 是否私有仓库代码变更触发自动部署 */
  AutoDeployOnCodeChange: boolean | null;
  /** ci部署进度（%） */
  BuildPercent: number | null;
}

/** emptydir 数据卷详细信息 */
declare interface CloudBaseRunEmptyDirVolumeSource {
  /** 启用emptydir数据卷 */
  EnableEmptyDirVolume?: boolean;
  /** "","Memory","HugePages" */
  Medium?: string;
  /** emptydir数据卷大小 */
  SizeLimit?: string;
}

/** 独立网关云托管服务配置信息 */
declare interface CloudBaseRunForGatewayConf {
  /** 是否缩容到0 */
  IsZero: boolean;
  /** 按百分比灰度的权重 */
  Weight: number;
  /** 按请求/header参数的灰度Key */
  GrayKey: string;
  /** 按请求/header参数的灰度Value */
  GrayValue: string;
  /** 是否为默认版本(按请求/header参数) */
  IsDefault: boolean;
  /** 访问权限，对应二进制分多段，vpc内网｜公网｜oa */
  AccessType: number;
  /** 访问的URL（域名＋路径）列表 */
  URLs: string[];
  /** 环境ID */
  EnvId?: string;
  /** 服务名称 */
  ServerName?: string;
  /** 版本名称 */
  VersionName?: string;
  /** 灰度类型：FLOW(权重), URL_PARAMS/HEAD_PARAMS */
  GrayType?: string;
  /** CLB的IP:Port */
  LbAddr?: string;
  /** 0:http访问服务配置信息, 1: 服务域名 */
  ConfigType?: number;
}

/** CloudBaseRun 镜像信息 */
declare interface CloudBaseRunImageInfo {
  /** 镜像仓库名称 */
  RepositoryName: string;
  /** 是否公有 */
  IsPublic: boolean;
  /** 镜像tag名称 */
  TagName: string;
  /** 镜像server */
  ServerAddr: string;
  /** 镜像拉取地址 */
  ImageUrl: string;
}

/** ImageSecretInfo的信息 */
declare interface CloudBaseRunImageSecretInfo {
  /** 镜像地址 */
  RegistryServer?: string;
  /** 用户名 */
  UserName?: string;
  /** 仓库密码 */
  Password?: string;
  /** 邮箱 */
  Email?: string;
}

/** KV参数的优先级 */
declare interface CloudBaseRunKVPriority {
  /** 参数的Key */
  Key: string | null;
  /** 参数的Value */
  Value: string | null;
  /** 优先级 */
  Priority: number | null;
}

/** nfs挂载资源 */
declare interface CloudBaseRunNfsVolumeSource {
  /** NFS挂载Server */
  Server?: string;
  /** Server路径 */
  Path?: string;
  /** 是否只读 */
  ReadOnly?: boolean;
  /** secret名称 */
  SecretName?: string;
  /** 临时目录 */
  EnableEmptyDirVolume?: boolean;
}

/** 版本的列表 */
declare interface CloudBaseRunServerVersionItem {
  /** 版本名称 */
  VersionName: string;
  /** 状态 */
  Status: string | null;
  /** 流量占比 */
  FlowRatio: number;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 更新时间 */
  UpdatedTime: string | null;
  /** 构建ID */
  BuildId: number | null;
  /** 构建方式 */
  UploadType: string | null;
  /** 备注 */
  Remark: string | null;
  /** url中的参数路径 */
  UrlParam: ObjectKV | null;
  /** 优先级（数值越小，优先级越高） */
  Priority: number | null;
  /** 是否是默认兜底版本 */
  IsDefaultPriority: boolean | null;
  /** KV Params */
  FlowParams: CloudBaseRunKVPriority[] | null;
  /** 最小副本数 */
  MinReplicas: number | null;
  /** 最大副本数 */
  MaxReplicas: number | null;
  /** 操作记录id */
  RunId: string | null;
  /** 进度 */
  Percent: number | null;
  /** 当前副本数 */
  CurrentReplicas: number | null;
  /** Monolithic，Microservice */
  Architecture: string | null;
}

/** 主机路径挂载参数 */
declare interface CloudBaseRunServiceVolumeHostPath {
}

/** 对标 EKS VolumeMount */
declare interface CloudBaseRunServiceVolumeMount {
  /** Volume 名称 */
  Name?: string;
  /** 挂载路径 */
  MountPath?: string;
  /** 是否只读 */
  ReadOnly?: boolean;
  /** 子路径 */
  SubPath?: string;
  /** 传播挂载方式 */
  MountPropagation?: string;
}

/** CloudBaseRun 的 Side 描述定义 */
declare interface CloudBaseRunSideSpec {
  /** 容器镜像 */
  ContainerImage?: string | null;
  /** 容器端口 */
  ContainerPort?: number | null;
  /** 容器的名称 */
  ContainerName?: string | null;
  /** kv的json字符串 */
  EnvVar?: string | null;
  /** InitialDelaySeconds 延迟多长时间启动健康检查 */
  InitialDelaySeconds?: number | null;
  /** CPU大小 */
  Cpu?: number | null;
  /** 内存大小（单位：M） */
  Mem?: number | null;
  /** 安全特性 */
  Security?: CloudBaseSecurityContext | null;
  /** 挂载信息 */
  VolumeMountInfos?: CloudBaseRunVolumeMount[] | null;
}

/** 版本流量占比 */
declare interface CloudBaseRunVersionFlowItem {
  /** 版本名称 */
  VersionName: string | null;
  /** 流量占比 */
  FlowRatio?: number | null;
  /** 流量参数键值对（URL参数/HEADERS参数） */
  UrlParam?: ObjectKV | null;
  /** 优先级 */
  Priority?: number | null;
  /** 是否是默认兜底版本 */
  IsDefaultPriority?: boolean | null;
}

/** cfs挂载点 */
declare interface CloudBaseRunVolumeMount {
  /** 资源名 */
  Name?: string;
  /** 挂载路径 */
  MountPath?: string;
  /** 是否只读 */
  ReadOnly?: boolean;
  /** Nfs挂载信息 */
  NfsVolumes?: CloudBaseRunNfsVolumeSource[];
}

/** vpc信息 */
declare interface CloudBaseRunVpcInfo {
  /** vpc的id */
  VpcId?: string | null;
  /** 子网id */
  SubnetIds?: string[] | null;
  /** 创建类型(0=继承; 1=新建; 2=指定) */
  CreateType?: number | null;
}

/** 子网信息 */
declare interface CloudBaseRunVpcSubnet {
  /** 子网id */
  Id: string | null;
  /** 子网的ipv4 */
  Cidr: string | null;
  /** 可用区 */
  Zone: string | null;
  /** 类型 */
  Type: string | null;
  /** subnet类型 */
  Target: string | null;
  /** 地域 */
  Region: string | null;
  /** 名字 */
  Name: string | null;
}

/** cloudrun安全特性 */
declare interface CloudBaseSecurityContext {
  /** 安全特性 */
  Capabilities?: CloudBaseCapabilities | null;
}

/** CloudRunServiceSimpleVersionSnapshot 信息 */
declare interface CloudRunServiceSimpleVersionSnapshot {
  /** 版本名 */
  VersionName?: string | null;
  /** 版本备注 */
  Remark?: string | null;
  /** cpu规格 */
  Cpu?: number | null;
  /** 内存规格 */
  Mem?: number | null;
  /** 最小副本数 */
  MinNum?: number | null;
  /** 最大副本数 */
  MaxNum?: number | null;
  /** 镜像url */
  ImageUrl?: string | null;
  /** 扩容策略 */
  PolicyType?: string | null;
  /** 策略阈值 */
  PolicyThreshold?: number | null;
  /** 环境参数 */
  EnvParams?: string | null;
  /** 容器端口 */
  ContainerPort?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 更新类型 */
  UploadType?: string | null;
  /** dockerfile路径 */
  DockerfilePath?: string | null;
  /** 构建路径 */
  BuildDir?: string | null;
  /** repo类型 */
  RepoType?: string | null;
  /** 仓库 */
  Repo?: string | null;
  /** 分支 */
  Branch?: string | null;
  /** 环境id */
  EnvId?: string | null;
  /** 服务名 */
  ServerName?: string | null;
  /** package名字 */
  PackageName?: string | null;
  /** package版本 */
  PackageVersion?: string | null;
  /** 自定义log路径 */
  CustomLogs?: string | null;
  /** 延时健康检查时间 */
  InitialDelaySeconds?: number | null;
  /** snapshot名 */
  SnapshotName?: string | null;
  /** 镜像信息 */
  ImageInfo?: CloudBaseRunImageInfo | null;
  /** 代码仓库信息 */
  CodeDetail?: CloudBaseCodeRepoDetail | null;
  /** 状态 */
  Status?: string | null;
}

/** 服务的volume */
declare interface CloudRunServiceVolume {
  /** 名称 */
  Name?: string | null;
  /** NFS的挂载方式 */
  NFS?: CloudBaseRunNfsVolumeSource | null;
  /** secret名称 */
  SecretName?: string | null;
  /** 是否开启临时目录逐步废弃，请使用 EmptyDir */
  EnableEmptyDirVolume?: boolean | null;
  /** emptydir数据卷详细信息 */
  EmptyDir?: CloudBaseRunEmptyDirVolumeSource | null;
  /** 主机路径挂载信息 */
  HostPath?: CloudBaseRunServiceVolumeHostPath | null;
}

/** cls日志信息 */
declare interface ClsInfo {
  /** cls所属地域 */
  ClsRegion: string;
  /** cls日志集ID */
  ClsLogsetId: string;
  /** cls日志主题ID */
  ClsTopicId: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 云开发项目来源 */
declare interface CodeSource {
  /** 类型, 可能的枚举: "coding","package","package_url","github","gitlab","gitee","rawcode" */
  Type?: string | null;
  /** 下载链接 */
  Url?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 工作目录 */
  WorkDir?: string | null;
  /** code包名, type为coding的时候需要填写 */
  CodingPackageName?: string | null;
  /** coding版本名, type为coding的时候需要填写 */
  CodingPackageVersion?: string | null;
  /** 源码 */
  RawCode?: string | null;
  /** 代码分支 */
  Branch?: string | null;
  /** coding项目ID，type为coding时需要填写 */
  ProjectId?: number | null;
  /** coding项目 */
  ProjectName?: string | null;
}

/** 数据库资源信息 */
declare interface DatabasesInfo {
  /** 数据库唯一标识 */
  InstanceId: string;
  /** 状态。包含以下取值：INITIALIZING：资源初始化中RUNNING：运行中，可正常使用的状态UNUSABLE：禁用，不可用OVERDUE：资源过期 */
  Status: string;
  /** 所属地域。当前支持ap-shanghai */
  Region: string;
  /** 更新时间 */
  UpdateTime: string | null;
}

/** 终端用户信息 */
declare interface EndUserInfo {
  /** 用户唯一ID */
  UUId: string;
  /** 微信ID */
  WXOpenId: string;
  /** qq ID */
  QQOpenId: string;
  /** 手机号 */
  Phone: string;
  /** 邮箱 */
  Email: string;
  /** 昵称 */
  NickName: string;
  /** 性别 */
  Gender: string;
  /** 头像地址 */
  AvatarUrl: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 是否为匿名用户 */
  IsAnonymous: boolean;
  /** 是否禁用账户 */
  IsDisabled: boolean;
  /** 是否设置过密码 */
  HasPassword: boolean;
  /** 用户名 */
  UserName: string;
}

/** 环境计费信息 */
declare interface EnvBillingInfoItem {
  /** 环境ID */
  EnvId: string;
  /** tcb产品套餐ID，参考DescribePackages接口的返回值。 */
  PackageId: string;
  /** 自动续费标记 */
  IsAutoRenew: boolean;
  /** 状态。包含以下取值： 空字符串：初始化中 NORMAL：正常 ISOLATE：隔离 */
  Status: string;
  /** 支付方式。包含以下取值： PREPAYMENT：预付费 POSTPAID：后付费 */
  PayMode: string;
  /** 隔离时间，最近一次隔离的时间 */
  IsolatedTime: string;
  /** 过期时间，套餐即将到期的时间 */
  ExpireTime: string;
  /** 创建时间，第一次接入计费方案的时间。 */
  CreateTime: string;
  /** 更新时间，计费信息最近一次更新的时间。 */
  UpdateTime: string;
  /** true表示从未升级过付费版。 */
  IsAlwaysFree: boolean;
  /** 付费渠道。 miniapp：小程序 qcloud：腾讯云 */
  PaymentChannel: string | null;
  /** 最新的订单信息 */
  OrderInfo: OrderInfo | null;
  /** 免费配额信息。 */
  FreeQuota: string | null;
  /** 是否开启 `超过套餐额度部分转按量付费` */
  EnableOverrun: boolean | null;
  /** 环境套餐类型 */
  ExtPackageType: string | null;
}

/** 环境信息 */
declare interface EnvInfo {
  /** 账户下该环境唯一标识 */
  EnvId: string;
  /** 环境来源。包含以下取值：miniapp：微信小程序qcloud ：腾讯云 */
  Source: string;
  /** 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符 */
  Alias: string;
  /** 创建时间 */
  CreateTime: string;
  /** 最后修改时间 */
  UpdateTime: string;
  /** 环境状态。包含以下取值：NORMAL：正常可用UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中 */
  Status: string;
  /** 数据库列表 */
  Databases: DatabasesInfo[];
  /** 存储列表 */
  Storages: StorageInfo[];
  /** 函数列表 */
  Functions: FunctionInfo[];
  /** tcb产品套餐ID，参考DescribePackages接口的返回值。 */
  PackageId: string | null;
  /** 套餐中文名称，参考DescribePackages接口的返回值。 */
  PackageName: string | null;
  /** 云日志服务列表 */
  LogServices: LogServiceInfo[] | null;
  /** 静态资源信息 */
  StaticStorages: StaticStorageInfo[] | null;
  /** 是否到期自动降为免费版 */
  IsAutoDegrade: boolean | null;
  /** 环境渠道 */
  EnvChannel: string | null;
  /** 支付方式。包含以下取值： prepayment：预付费 postpaid：后付费 */
  PayMode: string | null;
  /** 是否为默认环境 */
  IsDefault: boolean | null;
  /** 环境所属地域 */
  Region: string | null;
  /** 环境标签列表 */
  Tags: Tag[] | null;
  /** 自定义日志服务 */
  CustomLogServices: ClsInfo[] | null;
  /** 环境类型：baas, run, hoting, weda */
  EnvType: string | null;
  /** 是否是dau新套餐 */
  IsDauPackage: boolean | null;
  /** 套餐类型:空\baas\tcbr */
  PackageType: string | null;
}

/** 扩展文件 */
declare interface ExtensionFile {
  /** 文件类型。枚举值FUNCTION：函数代码STATIC：静态托管代码SMS：短信文件 */
  FileType: string;
  /** 文件名，长度不超过24 */
  FileName: string;
}

/** 扩展文件信息 */
declare interface ExtensionFileInfo {
  /** 模板里使用的地址 */
  CodeUri: string;
  /** 上传文件的临时地址，含签名 */
  UploadUrl: string;
  /** 自定义密钥。如果为空，则表示不需要加密 */
  CustomKey: string;
  /** 文件大小限制，单位M，客户端上传前需要主动检查文件大小，超过限制的文件会被删除。 */
  MaxSize: number;
}

/** 后付费资源免费量信息 */
declare interface FreequotaInfo {
  /** 资源类型COSCDNFLEXDBSCF */
  ResourceType: string;
  /** 资源指标名称 */
  ResourceMetric: string;
  /** 资源指标免费量 */
  FreeQuota: number;
  /** 指标单位 */
  MetricUnit: string;
  /** 免费量抵扣周期sum-month:以月为单位抵扣sum-day:以天为单位抵扣totalize:总容量抵扣 */
  DeductType: string | null;
  /** 免费量类型basic:通用量抵扣 */
  FreeQuotaType: string | null;
}

/** 函数的信息 */
declare interface FunctionInfo {
  /** 命名空间 */
  Namespace: string;
  /** 所属地域。当前支持ap-shanghai */
  Region: string;
}

/** 扩缩容策略 */
declare interface HpaPolicy {
  /** 策略类型 */
  PolicyType?: string | null;
  /** 策略阈值 */
  PolicyThreshold?: number | null;
}

/** 键值对 */
declare interface KVPair {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** CLS日志单条信息 */
declare interface LogObject {
  /** 日志属于的 topic ID */
  TopicId: string;
  /** 日志主题的名字 */
  TopicName: string;
  /** 日志时间 */
  Timestamp: string;
  /** 日志内容 */
  Content: string;
  /** 采集路径 */
  FileName: string;
  /** 日志来源设备 */
  Source: string;
}

/** CLS日志结果 */
declare interface LogResObject {
  /** 获取更多检索结果的游标 */
  Context: string;
  /** 搜索结果是否已经全部返回 */
  ListOver: boolean;
  /** 日志内容信息 */
  Results: LogObject[];
}

/** 云日志服务相关信息 */
declare interface LogServiceInfo {
  /** log名 */
  LogsetName: string;
  /** log-id */
  LogsetId: string;
  /** topic名 */
  TopicName: string;
  /** topic-id */
  TopicId: string;
  /** cls日志所属地域 */
  Region: string;
  /** topic保存时长 默认7天 */
  Period: number | null;
}

/** 终端用户登录新增统计 */
declare interface LoginStatistic {
  /** 统计类型 新增NEWUSER 和登录 LOGIN */
  StatisticalType?: string | null;
  /** 统计周期：日DAY，周WEEK，月MONTH */
  StatisticalCycle?: string | null;
  /** 统计总量 */
  Count?: number | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** Key-Value类型，模拟的 object 类型 */
declare interface ObjectKV {
  /** object 的 key */
  Key: string;
  /** object key 对应的 value */
  Value: string;
}

/** 一键部署步骤信息 */
declare interface OneClickTaskStepInfo {
  /** 未启动："todo"运行中："running"失败："failed"成功结束："finished" */
  Status: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 耗时：秒 */
  CostTime: number;
  /** 失败原因 */
  FailReason: string;
  /** 步骤名 */
  Name: string;
}

/** 订单信息 */
declare interface OrderInfo {
  /** 订单号 */
  TranId: string;
  /** 订单要切换的套餐ID */
  PackageId: string;
  /** 订单类型1 购买2 续费3 变配 */
  TranType: string;
  /** 订单状态。1未支付2 支付中3 发货中4 发货成功5 发货失败6 已退款7 已取消100 已删除 */
  TranStatus: string;
  /** 订单更新时间 */
  UpdateTime: string;
  /** 订单创建时间 */
  CreateTime: string;
  /** 付费模式.prepayment 预付费postpaid 后付费 */
  PayMode: string;
  /** 订单绑定的扩展ID */
  ExtensionId: string | null;
  /** 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化) */
  ResourceReady: string | null;
  /** 安装标记。建议使用方统一转大小写之后再判断。QuickStart：快速启动来源Activity：活动来源 */
  Flag: string | null;
  /** 下单时的参数 */
  ReqBody: string;
}

/** 后付费免费额度 */
declare interface PackageFreeQuotaInfo {
  /** 资源类型COSCDNFLEXDBSCF */
  ResourceType: string | null;
  /** 资源指标名称 */
  ResourceMetric: string | null;
  /** 资源指标免费量 */
  FreeQuota: number | null;
  /** 指标单位 */
  MetricUnit: string | null;
  /** 免费量抵扣周期sum-month:以月为单位抵扣sum-day:以天为单位抵扣totalize:总容量抵扣 */
  DeductType: string | null;
  /** 免费量类型basic:通用量抵扣 */
  FreeQuotaType: string | null;
}

/** 终端用户平台统计信息 */
declare interface PlatformStatistic {
  /** 终端用户从属平台 */
  Platform?: string | null;
  /** 平台终端用户数 */
  Count?: number | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** 后付费计费详情 */
declare interface PostPaidEnvDeductInfo {
  /** 资源方 */
  ResourceType: string | null;
  /** 指标名 */
  MetricName: string | null;
  /** 按量计费详情 */
  ResQuota: number | null;
  /** 资源包抵扣详情 */
  PkgQuota: number | null;
  /** 免费额度抵扣详情 */
  FreeQuota: number | null;
  /** 环境id */
  EnvId: string | null;
}

/** 按量付费免费配额信息 */
declare interface PostpayEnvQuota {
  /** 资源类型 */
  ResourceType: string;
  /** 指标名 */
  MetricName: string;
  /** 配额值 */
  Value: number;
  /** 配额生效时间为空表示没有时间限制 */
  StartTime: string;
  /** 配额失效时间为空表示没有时间限制 */
  EndTime: string;
}

/** 短信免费量 */
declare interface SmsFreeQuota {
  /** 免费量总条数 */
  FreeQuota: number | null;
  /** 共计已使用总条数 */
  TotalUsedQuota: number | null;
  /** 免费周期起点，0000-00-00 00:00:00 形式 */
  CycleStart: string | null;
  /** 免费周期终点，0000-00-00 00:00:00 形式 */
  CycleEnd: string | null;
  /** 今天已使用总条数 */
  TodayUsedQuota: number | null;
}

/** 1分钱计费详情 */
declare interface SpecialCostItem {
  /** 上报日期 */
  ReportDate: string | null;
  /** 腾讯云uin */
  Uin: string | null;
  /** 资源id:环境id */
  EnvId: string | null;
  /** 上报任务状态 */
  Status: string | null;
}

/** 独立网关信息 */
declare interface StandaloneGatewayInfo {
  /** 独立网关名称 */
  GatewayName: string;
  /** CPU核心数 */
  CPU: number;
  /** 内存大小，单位MB */
  Mem: number;
  /** 套餐包版本名称 */
  PackageVersion: string;
  /** 网关别名 */
  GatewayAlias: string;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID列表 */
  SubnetIds: string[];
  /** 网关描述 */
  GatewayDesc: string;
  /** 网关状态 */
  GateWayStatus: string;
  /** 服务信息 */
  ServiceInfo: BackendServiceInfo;
  /** 公网CLBIP */
  PublicClbIp: string;
  /** 内网CLBIP */
  InternalClbIp: string;
}

/** 小租户网关套餐配置 */
declare interface StandaloneGatewayPackageInfo {
  /** CPU核心数 */
  CPU: number;
  /** 内存大小，单位MB */
  Mem: number;
  /** 套餐包版本名称 */
  PackageVersion: string;
}

/** 静态CDN资源信息 */
declare interface StaticStorageInfo {
  /** 静态CDN域名 */
  StaticDomain: string | null;
  /** 静态CDN默认文件夹，当前为根目录 */
  DefaultDirName: string | null;
  /** 资源状态(process/online/offline/init) */
  Status: string | null;
  /** cos所属区域 */
  Region: string | null;
  /** bucket信息 */
  Bucket: string | null;
}

/** StorageInfo 资源信息 */
declare interface StorageInfo {
  /** 资源所属地域。当前支持ap-shanghai */
  Region: string;
  /** 桶名，存储资源的唯一标识 */
  Bucket: string;
  /** cdn 域名 */
  CdnDomain: string;
  /** 资源所属用户的腾讯云appId */
  AppId: string;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** tke集群信息 */
declare interface TkeClusterInfo {
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群的vpcId */
  VpcId?: string | null;
  /** 版本内网CLB所在子网Id */
  VersionClbSubnetId?: string | null;
}

declare interface BindEnvGatewayRequest {
  /** 子环境id */
  SubEnvId: string;
}

declare interface BindEnvGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckTcbServiceRequest {
}

declare interface CheckTcbServiceResponse {
  /** true表示已开通 */
  Initialized?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CommonServiceAPIRequest {
  /** Service名，需要转发访问的接口名 */
  Service: string;
  /** 需要转发的云API参数，要转成JSON格式 */
  JSONData?: string;
  /** 指定角色 */
  ApiRole?: string;
}

declare interface CommonServiceAPIResponse {
  /** json格式response */
  JSONResp: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndDeployCloudBaseProjectRequest {
  /** 项目名 */
  Name: string;
  /** 来源 */
  Source: CodeSource;
  /** 环境id */
  EnvId?: string;
  /** 项目类型, 枚举值为: framework-oneclick,qci-extension-cicd */
  Type?: string;
  /** 环境变量 */
  Parameters?: KVPair[];
  /** 环境别名。要以a-z开头，不能包含a-zA-z0-9-以外的字符 */
  EnvAlias?: string;
  /** rc.json的内容 */
  RcJson?: string;
  /** 插件配置内容 */
  AddonConfig?: string;
  /** 标签 */
  Tags?: string[];
  /** 网络配置 */
  NetworkConfig?: string;
  /** 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。 */
  FreeQuota?: string;
  /** 是否代码变更触发自动部署 */
  AutoDeployOnCodeChange?: boolean;
  /** 私有仓库地址 */
  RepoUrl?: string;
}

declare interface CreateAndDeployCloudBaseProjectResponse {
  /** 环境Id */
  EnvId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuthDomainRequest {
  /** 环境ID */
  EnvId: string;
  /** 安全域名 */
  Domains: string[];
}

declare interface CreateAuthDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudBaseRunResourceRequest {
  /** 环境ID */
  EnvId: string;
  /** vpc的ID */
  VpcId?: string;
  /** 子网ID列表，当VpcId不为空，SubnetIds也不能为空 */
  SubnetIds?: string[];
}

declare interface CreateCloudBaseRunResourceResponse {
  /** 返回集群创建是否成功 succ为成功。并且中间无err */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudBaseRunServerVersionRequest {
  /** 环境ID */
  EnvId: string;
  /** 枚举（package/repository/image/jar/war) */
  UploadType: string;
  /** 流量占比 */
  FlowRatio: number;
  /** Cpu的大小，单位：核 */
  Cpu: number;
  /** Mem的大小，单位：G */
  Mem: number;
  /** 最小副本数，最小值：0 */
  MinNum: number;
  /** 副本最大数，最大值：50 */
  MaxNum: number;
  /** 策略类型(枚举值：比如cpu) */
  PolicyType: string;
  /** 策略阈值 */
  PolicyThreshold: number;
  /** 服务端口 */
  ContainerPort: number;
  /** 服务名称 */
  ServerName: string;
  /** repository的类型(coding/gitlab/github/coding) */
  RepositoryType?: string;
  /** Dockerfile地址 */
  DockerfilePath?: string;
  /** 构建目录 */
  BuildDir?: string;
  /** 环境变量 */
  EnvParams?: string;
  /** repository地址 */
  Repository?: string;
  /** 分支 */
  Branch?: string;
  /** 版本备注 */
  VersionRemark?: string;
  /** 代码包名字 */
  PackageName?: string;
  /** 代码包的版本 */
  PackageVersion?: string;
  /** Image的详情 */
  ImageInfo?: CloudBaseRunImageInfo;
  /** Github等拉取代码的详情 */
  CodeDetail?: CloudBaseCodeRepoDetail;
  /** 私有镜像秘钥信息 */
  ImageSecretInfo?: CloudBaseRunImageSecretInfo;
  /** 私有镜像 认证名称 */
  ImagePullSecret?: string;
  /** 用户自定义采集日志路径 */
  CustomLogs?: string;
  /** 延迟多长时间开始健康检查（单位s） */
  InitialDelaySeconds?: number;
  /** cfs挂载信息 */
  MountVolumeInfo?: CloudBaseRunVolumeMount[];
  /** 4 代表只能微信链路访问 */
  AccessType?: number;
  /** es信息 */
  EsInfo?: CloudBaseEsInfo;
  /** 是否使用统一域名 */
  EnableUnion?: boolean;
  /** 操作备注 */
  OperatorRemark?: string;
  /** 服务路径 */
  ServerPath?: string;
  /** 镜像复用的key */
  ImageReuseKey?: string;
  /** 容器的描述文件 */
  SidecarSpecs?: CloudBaseRunSideSpec[];
  /** 安全特性 */
  Security?: CloudBaseSecurityContext;
  /** 服务磁盘挂载 */
  ServiceVolumes?: CloudRunServiceVolume[];
  /** 是否创建JnsGw 0未传默认创建 1创建 2不创建 */
  IsCreateJnsGw?: number;
  /** 数据卷挂载参数 */
  ServiceVolumeMounts?: CloudBaseRunServiceVolumeMount[];
  /** 是否有Dockerfile：0-default has, 1-has, 2-has not */
  HasDockerfile?: number;
  /** 基础镜像 */
  BaseImage?: string;
  /** 容器启动入口命令 */
  EntryPoint?: string;
  /** 仓库语言 */
  RepoLanguage?: string;
  /** 用户实际上传文件名（仅UploadType为jar/war时必填） */
  UploadFilename?: string;
  /** 自动扩缩容策略组 */
  PolicyDetail?: HpaPolicy[];
}

declare interface CreateCloudBaseRunServerVersionResponse {
  /** 状态(creating/succ) */
  Result: string | null;
  /** 版本名称（只有Result为succ的时候，才会返回VersionName) */
  VersionName: string | null;
  /** 操作记录id */
  RunId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHostingDomainRequest {
  /** 环境ID */
  EnvId: string;
  /** 域名 */
  Domain: string;
  /** 证书ID */
  CertId: string;
}

declare interface CreateHostingDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePostpayPackageRequest {
  /** 环境ID，需要系统自动创建环境时，此字段不传 */
  EnvId?: string;
  /** 微信 AppId，微信必传 */
  WxAppId?: string;
  /** 付费来源miniappqcloud */
  Source?: string;
  /** 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。 */
  FreeQuota?: string;
  /** 环境创建来源，取值：miniappqcloud用法同CreateEnv接口的Source参数和 Channel 参数同时传，或者同时不传；EnvId 为空时必传。 */
  EnvSource?: string;
  /** 环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符 */
  Alias?: string;
  /** 如果envsource为miniapp, channel可以为ide或api;如果envsource为qcloud, channel可以为qc_console,cocos, qq, cloudgame,dcloud,serverless_framework和 EnvSource 参数同时传，或者同时不传；EnvId 为空时必传。 */
  Channel?: string;
  /** 扩展ID */
  ExtensionId?: string;
  /** 订单标记。建议使用方统一转大小写之后再判断。QuickStart：快速启动来源Activity：活动来源 */
  Flag?: string;
}

declare interface CreatePostpayPackageResponse {
  /** 后付费订单号 */
  TranId: string;
  /** 环境ID */
  EnvId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStandaloneGatewayRequest {
  /** 环境ID */
  EnvId: string;
  /** 网关名 */
  GatewayAlias: string;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetIds: string[];
  /** 网关描述 */
  GatewayDesc: string;
  /** 网关套餐版本 */
  PackageVersion: string;
}

declare interface CreateStandaloneGatewayResponse {
  /** 网关名称 */
  GatewayName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStaticStoreRequest {
  /** 环境ID */
  EnvId: string;
  /** 是否启用统一域名 */
  EnableUnion?: boolean;
}

declare interface CreateStaticStoreResponse {
  /** 创建静态资源结果(succ/fail) */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWxCloudBaseRunEnvRequest {
  /** wx应用Id */
  WxAppId: string;
  /** 环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符 */
  Alias?: string;
  /** 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。 */
  FreeQuota?: string;
  /** 订单标记。建议使用方统一转大小写之后再判断。QuickStart：快速启动来源Activity：活动来源 */
  Flag?: string;
  /** 私有网络Id */
  VpcId?: string;
  /** 子网列表 */
  SubNetIds?: string[];
  /** 是否打开云调用 */
  IsOpenCloudInvoke?: boolean;
}

declare interface CreateWxCloudBaseRunEnvResponse {
  /** 环境Id */
  EnvId: string;
  /** 后付费订单号 */
  TranId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWxCloudBaseRunServerDBClusterRequest {
  /** 账户密码 */
  AccountPassword: string;
  /** 环境ID */
  EnvId: string;
  /** 微信appid */
  WxAppId?: string;
  /** mysql内核版本，支持5.7,8.0 */
  DbVersion?: string;
  /** 0: 非大小写敏感1: 大小写敏感默认 0 */
  LowerCaseTableName?: string;
}

declare interface CreateWxCloudBaseRunServerDBClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudBaseProjectLatestVersionRequest {
  /** 环境id */
  EnvId: string;
  /** 项目名 */
  ProjectName: string;
  /** 是否保留资源 */
  KeepResource?: boolean;
}

declare interface DeleteCloudBaseProjectLatestVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudBaseRunServerVersionRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称 */
  ServerName: string;
  /** 版本名称 */
  VersionName: string;
  /** 是否删除服务，只有最后一个版本的时候，才生效。 */
  IsDeleteServer?: boolean;
  /** 只有删除服务的时候，才会起作用 */
  IsDeleteImage?: boolean;
  /** 操作备注 */
  OperatorRemark?: string;
}

declare interface DeleteCloudBaseRunServerVersionResponse {
  /** 返回结果，succ为成功 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEndUserRequest {
  /** 环境ID */
  EnvId: string;
  /** 用户列表，每一项都是uuid */
  UserList: string[];
}

declare interface DeleteEndUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWxGatewayRouteRequest {
  /** 环境id */
  EnvId: string;
  /** 服务名称 */
  GatewayRouteName: string;
}

declare interface DeleteWxGatewayRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActivityInfoRequest {
  /** 活动id列表 */
  ActivityIdList?: number[];
}

declare interface DescribeActivityInfoResponse {
  /** 活动详情 */
  ActivityInfoList: ActivityInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActivityRecordRequest {
  /** 渠道加密token */
  ChannelToken: string;
  /** 渠道来源，每个来源对应不同secretKey */
  Channel: string;
  /** 活动id列表 */
  ActivityIdList?: number[];
  /** 过滤状态码，已废弃 */
  Status?: number;
  /** 状态码过滤数组，空数组时不过滤 */
  Statuses?: number[];
  /** 根据是否软删除进行过滤，[0]未删除, [1] 删除，不传不过滤 */
  IsDeletedList?: number[];
}

declare interface DescribeActivityRecordResponse {
  /** 活动记录详情 */
  ActivityRecords: ActivityRecordItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthDomainsRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeAuthDomainsResponse {
  /** 安全域名列表列表 */
  Domains?: AuthDomain[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaasPackageListRequest {
  /** tcb产品套餐ID，不填拉取全量package信息。 */
  PackageName?: string;
  /** 环境ID */
  EnvId?: string;
  /** 套餐归属方，填写后只返回对应的套餐 包含miniapp与qcloud两种 默认为miniapp */
  Source?: string;
  /** 套餐归属环境渠道 */
  EnvChannel?: string;
  /** 拉取套餐用途：1）new 新购2）modify变配3）renew续费 */
  TargetAction?: string;
  /** 预留字段，同一商品会对应多个类型套餐，对指标有不同侧重。计算型calculation流量型flux容量型capactiy */
  GroupName?: string;
  /** 类型分组过滤。默认为["default"] */
  PackageTypeList?: string[];
  /** 付费渠道，与回包billTags中的计费参数相关，不填返回默认值。 */
  PaymentChannel?: string;
}

declare interface DescribeBaasPackageListResponse {
  /** 套餐列表 */
  PackageList: BaasPackageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseBuildServiceRequest {
  /** 环境id */
  EnvId: string;
  /** 服务名 */
  ServiceName: string;
  /** build类型,枚举值有: cloudbaserun, framework-ci */
  CIBusiness?: string;
  /** 服务版本 */
  ServiceVersion?: string;
  /** 文件后缀 */
  Suffix?: string;
}

declare interface DescribeCloudBaseBuildServiceResponse {
  /** 上传url */
  UploadUrl: string;
  /** 上传heder */
  UploadHeaders: KVPair[];
  /** 包名 */
  PackageName: string;
  /** 包版本 */
  PackageVersion: string;
  /** 下载链接 */
  DownloadUrl: string | null;
  /** 下载Httpheader */
  DownloadHeaders: KVPair[] | null;
  /** 下载链接是否过期 */
  OutDate: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseProjectLatestVersionListRequest {
  /** 偏移量 */
  Offset: number;
  /** 个数 */
  PageSize: number;
  /** 环境id, 非必填 */
  EnvId?: string;
  /** 项目名称, 非必填 */
  ProjectName?: string;
  /** 项目类型: framework-oneclick,qci-extension-cicd */
  ProjectType?: string;
  /** 标签 */
  Tags?: string[];
  /** ci的id */
  CiId?: string;
}

declare interface DescribeCloudBaseProjectLatestVersionListResponse {
  /** 项目列表 */
  ProjectList: CloudBaseProjectVersion[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseProjectVersionListRequest {
  /** 环境id */
  EnvId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 页大小 */
  PageSize?: number;
  /** 第几页,从0开始 */
  PageNum?: number;
  /** 起始时间 2021-03-27 12:00:00 */
  StartTime?: string;
  /** 终止时间 2021-03-27 12:00:00 */
  EndTime?: string;
}

declare interface DescribeCloudBaseProjectVersionListResponse {
  /** 版本列表 */
  ProjectVersions: CloudBaseProjectVersion[] | null;
  /** 总个数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunAllVpcsRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeCloudBaseRunAllVpcsResponse {
  /** 所有vpcid */
  Vpcs: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunConfForGateWayRequest {
  /** 环境ID */
  EnvID: string;
  /** vpc信息 */
  VpcID?: string;
}

declare interface DescribeCloudBaseRunConfForGateWayResponse {
  /** 最近更新时间 */
  LastUpTime: string | null;
  /** 配置信息 */
  Data: CloudBaseRunForGatewayConf[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunOneClickTaskExternalRequest {
  /** 外部任务Id 最长64字节 */
  ExternalId: string;
}

declare interface DescribeCloudBaseRunOneClickTaskExternalResponse {
  /** 外部任务Id */
  ExternalId: string;
  /** 弃用 */
  EnvId: string;
  /** 用户uin */
  UserUin: string;
  /** 服务名 */
  ServerName: string;
  /** 版本名 */
  VersionName: string;
  /** 创建时间 */
  CreateTime: string;
  /** 当前阶段微信云托管环境创建阶段：envStage存储资源创建阶段：storageStage服务创建阶段：serverStage */
  Stage: string;
  /** 状态runningstoppedfailedfinished */
  Status: string;
  /** 失败原因 */
  FailReason: string;
  /** 用户envId */
  UserEnvId: string;
  /** 创建时间 */
  StartTime: string;
  /** 步骤信息 */
  Steps: OneClickTaskStepInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunOperationTypesRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称，精确匹配 */
  ServerName?: string;
}

declare interface DescribeCloudBaseRunOperationTypesResponse {
  /** 操作类型 */
  Action: string[] | null;
  /** 服务名列表 */
  ServerName: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunPodListRequest {
  /** 环境id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 版本名 */
  VersionName: string;
  /** 分页限制 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 容器状态 */
  Status?: string;
  /** 容器名 */
  PodName?: string;
}

declare interface DescribeCloudBaseRunPodListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunResourceForExtendRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeCloudBaseRunResourceForExtendResponse {
  /** 集群状态(creating/succ) */
  ClusterStatus?: string | null;
  /** 虚拟集群ID */
  VirtualClusterId?: string | null;
  /** vpc id信息 */
  VpcId?: string | null;
  /** 地域信息 */
  Region?: string | null;
  /** 子网信息 */
  SubnetIds?: CloudBaseRunVpcSubnet[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunResourceRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeCloudBaseRunResourceResponse {
  /** 集群状态(creating/succ) */
  ClusterStatus?: string | null;
  /** 虚拟集群ID */
  VirtualClusterId?: string | null;
  /** vpc id信息 */
  VpcId?: string | null;
  /** 地域信息 */
  Region?: string | null;
  /** 子网信息 */
  SubnetIds?: CloudBaseRunVpcSubnet[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunServerDomainNameRequest {
  /** 服务名 */
  ServerName: string;
  /** 环境Id */
  UserEnvId: string;
  /** 用户Uin */
  UserUin: string;
  /** 外部Id */
  ExternalId: string;
}

declare interface DescribeCloudBaseRunServerDomainNameResponse {
  /** 公网服务域名 */
  PublicDomain: string;
  /** 内部服务域名 */
  InternalDomain: string;
  /** 弃用 */
  DomainName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunServerRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称 */
  ServerName: string;
  /** 分页偏移 */
  Offset: number;
  /** 分页数量 */
  Limit: number;
  /** 版本名字（精确匹配） */
  VersionName?: string;
}

declare interface DescribeCloudBaseRunServerResponse {
  /** 个数 */
  TotalCount: number | null;
  /** 版本列表 */
  VersionItems: CloudBaseRunServerVersionItem[] | null;
  /** 服务名称 */
  ServerName: string | null;
  /** 是否对于外网开放 */
  IsPublic: boolean | null;
  /** 镜像仓库 */
  ImageRepo: string | null;
  /** 流量配置的类型（FLOW,URL_PARAMS) */
  TrafficType: string | null;
  /** 服务创建类型，默认为空，一键部署为oneclick */
  SourceType: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunServerVersionRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称 */
  ServerName: string;
  /** 版本名称 */
  VersionName: string;
}

declare interface DescribeCloudBaseRunServerVersionResponse {
  /** 版本名称 */
  VersionName: string;
  /** 备注 */
  Remark: string | null;
  /** Dockefile的路径 */
  DockerfilePath: string | null;
  /** DockerBuild的目录 */
  BuildDir: string | null;
  /** 请使用CPUSize */
  Cpu: number;
  /** 请使用MemSize */
  Mem: number;
  /** 副本最小值 */
  MinNum: number;
  /** 副本最大值 */
  MaxNum: number;
  /** 策略类型 */
  PolicyType: string;
  /** 策略阈值 */
  PolicyThreshold: number;
  /** 环境变量 */
  EnvParams: string | null;
  /** 创建时间 */
  CreatedTime: string;
  /** 更新时间 */
  UpdatedTime: string;
  /** 版本的IP */
  VersionIP: string | null;
  /** 版本的端口号 */
  VersionPort: number | null;
  /** 版本状态 */
  Status: string | null;
  /** 代码包的名字 */
  PackageName: string | null;
  /** 代码版本的名字 */
  PackageVersion: string | null;
  /** 枚举（package/repository/image) */
  UploadType: string | null;
  /** Repo的类型(gitlab/github/coding) */
  RepoType: string | null;
  /** 地址 */
  Repo: string | null;
  /** 分支 */
  Branch: string | null;
  /** 服务名字 */
  ServerName: string | null;
  /** 是否对于外网开放 */
  IsPublic: boolean | null;
  /** vpc id */
  VpcId: string | null;
  /** 子网实例id */
  SubnetIds: string[] | null;
  /** 日志采集路径 */
  CustomLogs: string | null;
  /** 监听端口 */
  ContainerPort: number | null;
  /** 延迟多长时间开始健康检查（单位s） */
  InitialDelaySeconds: number | null;
  /** 镜像地址 */
  ImageUrl: string | null;
  /** CPU 大小 */
  CpuSize: number | null;
  /** MEM 大小 */
  MemSize: number | null;
  /** 是否有Dockerfile：0-default has, 1-has, 2-has not */
  HasDockerfile: number | null;
  /** 基础镜像 */
  BaseImage: string | null;
  /** 容器启动入口命令 */
  EntryPoint: string | null;
  /** 仓库语言 */
  RepoLanguage: string | null;
  /** 自动扩缩容策略组 */
  PolicyDetail: HpaPolicy[] | null;
  /** Tke集群信息 */
  TkeClusterInfo: TkeClusterInfo | null;
  /** 版本工作负载类型；deployment/deamonset */
  TkeWorkloadType: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunVersionRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称 */
  ServerName: string;
  /** 版本名称 */
  VersionName: string;
}

declare interface DescribeCloudBaseRunVersionResponse {
  /** 版本名称 */
  VersionName?: string;
  /** 备注 */
  Remark?: string | null;
  /** Dockefile的路径 */
  DockerfilePath?: string | null;
  /** DockerBuild的目录 */
  BuildDir?: string | null;
  /** 副本最小值 */
  MinNum?: number;
  /** 副本最大值 */
  MaxNum?: number;
  /** 策略类型 */
  PolicyType?: string;
  /** 策略阈值 */
  PolicyThreshold?: number;
  /** 环境变量 */
  EnvParams?: string | null;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  UpdatedTime?: string;
  /** 版本的IP */
  VersionIP?: string | null;
  /** 版本的端口号 */
  VersionPort?: number | null;
  /** 版本状态 */
  Status?: string | null;
  /** 代码包的名字 */
  PackageName?: string | null;
  /** 代码版本的名字 */
  PackageVersion?: string | null;
  /** 枚举（package/repository/image) */
  UploadType?: string | null;
  /** Repo的类型(coding/gitlab/github/coding) */
  RepoType?: string | null;
  /** 地址 */
  Repo?: string | null;
  /** 分支 */
  Branch?: string | null;
  /** 服务名字 */
  ServerName?: string | null;
  /** 是否对于外网开放 */
  IsPublic?: boolean | null;
  /** vpc id */
  VpcId?: string | null;
  /** 子网实例id */
  SubnetIds?: string[] | null;
  /** 日志采集路径 */
  CustomLogs?: string | null;
  /** 监听端口 */
  ContainerPort?: number | null;
  /** 延迟多长时间开始健康检查（单位s） */
  InitialDelaySeconds?: number | null;
  /** 镜像地址 */
  ImageUrl?: string | null;
  /** CPU 大小 */
  CpuSize?: number | null;
  /** MEM 大小 */
  MemSize?: number | null;
  /** 扩缩容策略详情 */
  PolicyDetail?: HpaPolicy[] | null;
  /** Cpu的Request值 */
  Cpu?: number | null;
  /** Mem的Request值 */
  Mem?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunVersionRsByConditionRequest {
}

declare interface DescribeCloudBaseRunVersionRsByConditionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunVersionSnapshotRequest {
  /** 服务名 */
  ServerName: string;
  /** 版本名 */
  VersionName: string;
  /** 环境id */
  EnvId: string;
  /** 版本历史名 */
  SnapshotName?: string;
  /** 偏移量。默认0 */
  Offset?: number;
  /** 限制大小。默认10，最大20 */
  Limit?: number;
}

declare interface DescribeCloudBaseRunVersionSnapshotResponse {
  /** 版本历史 */
  Snapshots: CloudRunServiceSimpleVersionSnapshot[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCurveDataRequest {
  /** 环境ID */
  EnvId: string;
  /** 指标名: StorageRead: 存储读请求次数 StorageWrite: 存储写请求次数 StorageCdnOriginFlux: CDN回源流量, 单位字节 CDNFlux: CDN回源流量, 单位字节 FunctionInvocation: 云函数调用次数 FunctionGBs: 云函数资源使用量, 单位Mb*Ms FunctionFlux: 云函数流量, 单位千字节(KB) FunctionError: 云函数调用错误次数 FunctionDuration: 云函数运行时间, 单位毫秒 DbRead: 数据库读请求数 DbWrite: 数据库写请求数 DbCostTime10ms: 数据库耗时在10ms~50ms请求数 DbCostTime50ms: 数据库耗时在50ms~100ms请求数 DbCostTime100ms: 数据库耗时在100ms以上请求数 TkeCpuRatio: 容器CPU占用率 TkeMemRatio: 容器内存占用率 TkeCpuUsed: 容器CPU使用量 TkeMemUsed: 容器内存使用量 TkeInvokeNum: 调用量 */
  MetricName: string;
  /** 开始时间，如2018-08-24 10:50:00, 开始时间需要早于结束时间至少五分钟(原因是因为目前统计粒度最小是5分钟). */
  StartTime: string;
  /** 结束时间，如2018-08-24 10:50:00, 结束时间需要晚于开始时间至少五分钟(原因是因为目前统计粒度最小是5分钟).. */
  EndTime: string;
  /** 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocation, FunctionGBs, FunctionFlux, FunctionError, FunctionDuration)、容器托管（服务名称）, 如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传.如果想查询数据库某个集合相关信息，传入集合名称 */
  ResourceID?: string;
}

declare interface DescribeCurveDataResponse {
  /** 开始时间, 会根据数据的统计周期进行取整. */
  StartTime: string;
  /** 结束时间, 会根据数据的统计周期进行取整. */
  EndTime: string;
  /** 指标名. */
  MetricName: string;
  /** 统计周期(单位秒), 当时间区间为1天内, 统计周期为5分钟; 当时间区间选择为1天以上, 15天以下, 统计周期为1小时; 当时间区间选择为15天以上, 180天以下, 统计周期为1天. */
  Period: number;
  /** 有效的监控数据, 每个有效监控数据的上报时间可以从时间数组中的对应位置上获取到. */
  Values: number[];
  /** 时间数据, 标识监控数据Values中的点是哪个时间段上报的. */
  Time: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseACLRequest {
  /** 环境ID */
  EnvId: string;
  /** 集合名称 */
  CollectionName: string;
}

declare interface DescribeDatabaseACLResponse {
  /** 权限标签。包含以下取值： READONLY：所有用户可读，仅创建者和管理员可写 PRIVATE：仅创建者及管理员可读写 ADMINWRITE：所有用户可读，仅管理员可写 ADMINONLY：仅管理员可读写 */
  AclTag?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDownloadFileRequest {
  /** 代码uri，格式如：extension://abcdefhhxxx.zip，对应 DescribeExtensionUploadInfo 接口的返回值 */
  CodeUri: string;
}

declare interface DescribeDownloadFileResponse {
  /** 文件路径，该字段已废弃 */
  FilePath: string | null;
  /** 加密key，用于计算下载加密文件的header。参考SSE-C https://cloud.tencent.com/document/product/436/7728 */
  CustomKey: string | null;
  /** 下载链接 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEndUserLoginStatisticRequest {
  /** 环境id */
  EnvId: string;
  /** 终端用户来源 qcloud miniapp */
  Source?: string;
}

declare interface DescribeEndUserLoginStatisticResponse {
  /** 环境终端用户新增与登录统计 */
  LoginStatistics?: LoginStatistic[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEndUserStatisticRequest {
  /** 环境id */
  EnvId: string;
}

declare interface DescribeEndUserStatisticResponse {
  /** 终端用户各平台统计 */
  PlatformStatistics?: PlatformStatistic[] | null;
  /** 终端用户总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEndUsersRequest {
  /** 开发者的环境ID */
  EnvId: string;
  /** 可选参数，偏移量，默认 0 */
  Offset?: number;
  /** 可选参数，拉取数量，默认 20 */
  Limit?: number;
  /** 按照 uuid 列表过滤，最大个数为100 */
  UUIds?: string[];
}

declare interface DescribeEndUsersResponse {
  /** 用户总数 */
  Total?: number;
  /** 用户列表 */
  Users?: EndUserInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvDealRegionRequest {
  /** 环境ID */
  EnvId: string;
  /** 订单类型：ENV_PREPAY_MINIAPP= 预付费环境(微信小程序)ENV_PREPAY_CLOUD= 预付费环境(腾讯云)ENV_POSTPAY = 后付费环境HOSTING_PREPAY = 预付费静态托管PACKAGE=套餐包 */
  DealType: string;
  /** 下单类型：CREATE = 新购RENEW = 续费MODIFY = 套餐调整(升级/降级)REFUND = 退费 */
  DealAction: string;
  /** 下单地域：ap-guangzhou = 广州地域ap-shanghai = 上海地域ap-beijing = 北京地域 */
  DealRegion: string;
}

declare interface DescribeEnvDealRegionResponse {
  /** 下单region */
  Region: string;
  /** 下单zone */
  Zone: string;
  /** 下单regionId */
  RegionId: number;
  /** 下单zoneId */
  ZoneId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvFreeQuotaRequest {
  /** 环境ID */
  EnvId: string;
  /** 资源类型：可选值：CDN, COS, FLEXDB, HOSTING, SCF不传则返回全部资源指标 */
  ResourceTypes?: string[];
}

declare interface DescribeEnvFreeQuotaResponse {
  /** 免费抵扣配额详情 */
  QuotaItems?: PostpayEnvQuota[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvLimitRequest {
}

declare interface DescribeEnvLimitResponse {
  /** 环境总数上限 */
  MaxEnvNum: number;
  /** 目前环境总数 */
  CurrentEnvNum: number;
  /** 免费环境数量上限 */
  MaxFreeEnvNum: number;
  /** 目前免费环境数量 */
  CurrentFreeEnvNum: number;
  /** 总计允许销毁环境次数上限 */
  MaxDeleteTotal: number;
  /** 目前已销毁环境次数 */
  CurrentDeleteTotal: number;
  /** 每月允许销毁环境次数上限 */
  MaxDeleteMonthly: number;
  /** 本月已销毁环境次数 */
  CurrentDeleteMonthly: number;
  /** 微信网关体验版可购买月份数 */
  MaxFreeTrialNum: number;
  /** 微信网关体验版已购买月份数 */
  CurrentFreeTrialNum: number;
  /** 转支付限额总数 */
  ChangePayTotal: number;
  /** 当前已用转支付次数 */
  CurrentChangePayTotal: number;
  /** 转支付每月限额 */
  ChangePayMonthly: number;
  /** 本月已用转支付额度 */
  CurrentChangePayMonthly: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvPostpaidDeductRequest {
  /** 资源方列表 */
  ResourceTypes: string[];
  /** 环境id */
  EnvId?: string;
  /** 查询开始时间 */
  StartTime?: string;
  /** 查询结束时间 */
  EndTime?: string;
}

declare interface DescribeEnvPostpaidDeductResponse {
  /** 指标抵扣详情列表 */
  PostPaidEnvDeductInfoList: PostPaidEnvDeductInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvsRequest {
  /** 环境ID，如果传了这个参数则只返回该环境的相关信息 */
  EnvId?: string;
  /** 指定Channels字段为可见渠道列表或不可见渠道列表如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"] */
  IsVisible?: boolean;
  /** 渠道列表，代表可见或不可见渠道由IsVisible参数指定 */
  Channels?: string[];
}

declare interface DescribeEnvsResponse {
  /** 环境信息列表 */
  EnvList?: EnvInfo[];
  /** 环境个数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtensionUploadInfoRequest {
  /** 待上传的文件 */
  ExtensionFiles: ExtensionFile[];
}

declare interface DescribeExtensionUploadInfoResponse {
  /** 待上传文件的信息数组 */
  FilesData: ExtensionFileInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtraPkgBillingInfoRequest {
  /** 已购买增值包的环境ID */
  EnvId?: string;
}

declare interface DescribeExtraPkgBillingInfoResponse {
  /** 增值包计费信息列表 */
  EnvInfoList?: EnvBillingInfoItem[];
  /** 增值包数目 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostingDomainTaskRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeHostingDomainTaskResponse {
  /** todo/doing/done/error */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePostpayFreeQuotasRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribePostpayFreeQuotasResponse {
  /** 免费量资源信息列表 */
  FreequotaInfoList?: FreequotaInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePostpayPackageFreeQuotasRequest {
  /** 环境ID */
  EnvId?: string;
  /** 免费额度类型标识 */
  FreeQuotaType?: string;
}

declare interface DescribePostpayPackageFreeQuotasResponse {
  /** 免费量资源信息列表 */
  PackageFreeQuotaInfos?: PackageFreeQuotaInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuotaDataRequest {
  /** 环境ID */
  EnvId: string;
  /** 指标名: StorageSizepkg: 当月存储空间容量, 单位MB StorageReadpkg: 当月存储读请求次数 StorageWritepkg: 当月存储写请求次数 StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 StorageReadpkgDay: 当日存储读请求次数 StorageWritepkgDay: 当日写请求次数 CDNFluxpkg: 当月CDN流量, 单位为字节 CDNFluxpkgDay: 当日CDN流量, 单位为字节 FunctionInvocationpkg: 当月云函数调用次数 FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) FunctionInvocationpkgDay: 当日云函数调用次数 FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) DbSizepkg: 当月数据库容量大小, 单位MB DbReadpkg: 当日数据库读请求数 DbWritepkg: 当日数据库写请求数 StaticFsFluxPkgDay: 当日静态托管流量 StaticFsFluxPkg: 当月静态托管流量 StaticFsSizePkg: 当月静态托管容量 TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核*秒 TkeCpuUsedPkgDay: 当天容器托管CPU使用量，单位核*秒 TkeMemUsedPkg: 当月容器托管内存使用量，单位MB*秒 TkeMemUsedPkgDay: 当天容器托管内存使用量，单位MB*秒 CodingBuildTimePkgDay: 当天容器托管构建时间使用量，单位毫秒 TkeHttpServiceNatPkgDay: 当天容器托管流量使用量，单位B */
  MetricName: string;
  /** 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。 */
  ResourceID?: string;
}

declare interface DescribeQuotaDataResponse {
  /** 指标名 */
  MetricName?: string;
  /** 指标的值 */
  Value?: number;
  /** 指标的附加值信息 */
  SubValue?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmsQuotasRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeSmsQuotasResponse {
  /** 短信免费量信息列表 */
  SmsFreeQuotaList?: SmsFreeQuota[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpecialCostItemsRequest {
  /** 环境id */
  EnvId?: string;
  /** 查询开始时间 */
  StartTime?: string;
  /** 查询结束时间 */
  EndTime?: string;
}

declare interface DescribeSpecialCostItemsResponse {
  /** 1分钱抵扣详情 */
  SpecialCostItems: SpecialCostItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStandaloneGatewayPackageRequest {
  /** 环境ID */
  EnvId?: string;
  /** 套餐版本，包含starter、basic、advanced、enterprise */
  PackageVersion?: string;
}

declare interface DescribeStandaloneGatewayPackageResponse {
  /** 总数 */
  Total: number;
  /** 套餐详情 */
  StandaloneGatewayPackageList: StandaloneGatewayPackageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStandaloneGatewayRequest {
  /** 环境ID */
  EnvId: string;
  /** 网关名称 */
  GatewayName?: string;
  /** 网关别名 */
  GatewayAlias?: string;
}

declare interface DescribeStandaloneGatewayResponse {
  /** 独立网关信息列表 */
  StandaloneGatewayList: StandaloneGatewayInfo[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserActivityInfoRequest {
  /** 活动id */
  ActivityId: number;
  /** 渠道加密token */
  ChannelToken?: string;
  /** 渠道来源，每个来源对应不同secretKey */
  Channel?: string;
  /** 团id, 1元钱裂变中活动团id不为空时根据团id来查询记录，为空时查询uin最新记录 */
  GroupId?: string;
}

declare interface DescribeUserActivityInfoResponse {
  /** 自定义标记，1元钱裂变需求中即代指`团id` */
  Tag: string;
  /** 自定义备注，1元钱裂变需求中返回`团列表`，uin列表通过","拼接 */
  Notes: string;
  /** 活动剩余时间，单位为s.1元钱裂变需求中即为 time(活动过期时间)-Now()), 过期后为0，即返回必为自然数 */
  ActivityTimeLeft: number;
  /** 拼团剩余时间，单位为s.1元钱裂变需求中即为time(成团时间)+24H-Now()，过期后为0，即返回必为自然数 */
  GroupTimeLeft: number;
  /** 昵称列表,通过","拼接， 1元钱裂变活动中与Notes中uin一一对应 */
  NickNameList: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWxCloudBaseRunEnvsRequest {
  /** wx应用Id */
  WxAppId?: string;
  /** 是否查询全地域 */
  AllRegions?: boolean;
}

declare interface DescribeWxCloudBaseRunEnvsResponse {
  /** env列表 */
  EnvList: EnvInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWxCloudBaseRunSubNetsRequest {
  /** VPC id */
  VpcId: string;
  /** 查询个数限制，不填或小于等于0，等于不限制 */
  Limit?: number;
}

declare interface DescribeWxCloudBaseRunSubNetsResponse {
  /** 子网Id列表 */
  SubNetIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyEnvRequest {
  /** 环境Id */
  EnvId: string;
  /** 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除 */
  IsForce?: boolean;
  /** 是否绕过资源检查，资源包等额外资源，默认为false，如果为true，则不检查资源是否有数据，直接删除。 */
  BypassCheck?: boolean;
}

declare interface DestroyEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyStandaloneGatewayRequest {
  /** 环境ID */
  EnvId: string;
  /** 网名名称 */
  GatewayName: string;
  /** 是否强制释放 */
  IsForce: boolean;
}

declare interface DestroyStandaloneGatewayResponse {
  /** 删除独立网关状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyStaticStoreRequest {
  /** 环境ID */
  EnvId: string;
  /** cdn域名 */
  CdnDomain?: string;
}

declare interface DestroyStaticStoreResponse {
  /** 条件任务结果(succ/fail) */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EstablishCloudBaseRunServerRequest {
  /** 环境id */
  EnvId: string;
  /** 服务名称 */
  ServiceName: string;
  /** 是否开通外网访问 */
  IsPublic: boolean;
  /** 镜像仓库 */
  ImageRepo?: string;
  /** 服务描述 */
  Remark?: string;
  /** es信息 */
  EsInfo?: CloudBaseEsInfo;
  /** 日志类型; es/cls */
  LogType?: string;
  /** 操作备注 */
  OperatorRemark?: string;
  /** 来源方（默认值：qcloud，微信侧来源miniapp) */
  Source?: string;
  /** vpc信息 */
  VpcInfo?: CloudBaseRunVpcInfo;
  /** 0/1=允许公网访问;2=关闭公网访问 */
  PublicAccess?: number;
  /** OA PUBLIC MINIAPP VPC */
  OpenAccessTypes?: string[];
  /** 是否创建Path 0未传默认创建 1创建 2不创建 */
  IsCreatePath?: number;
  /** 指定创建路径（如不存在，则创建。存在，则忽略） */
  ServerPath?: string;
}

declare interface EstablishCloudBaseRunServerResponse {
  /** 创建服务是否成功 */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EstablishWxGatewayRouteRequest {
  /** 网关id */
  GatewayId: string;
  /** 服务名称 */
  GatewayRouteName: string;
  /** 服务地址 */
  GatewayRouteAddr: string;
  /** 协议类型 http/https */
  GatewayRouteProtocol: string;
  /** 服务描述 */
  GatewayRouteDesc?: string;
}

declare interface EstablishWxGatewayRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreezeCloudBaseRunServersRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名列表 */
  ServerNameList: string[];
}

declare interface FreezeCloudBaseRunServersResponse {
  /** 批量状态状态成功：succ失败：fail部分：partial（部分成功、部分失败） */
  Result: string | null;
  /** 冻结失败服务列表 */
  FailServerList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudBaseRunServerFlowConfRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称 */
  ServerName: string;
  /** 流量占比 */
  VersionFlowItems?: CloudBaseRunVersionFlowItem[];
  /** 流量类型（URL_PARAMS / FLOW / HEADERS) */
  TrafficType?: string;
  /** 操作备注 */
  OperatorRemark?: string;
}

declare interface ModifyCloudBaseRunServerFlowConfResponse {
  /** 返回结果，succ代表成功 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudBaseRunServerVersionRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称 */
  ServerName: string;
  /** 版本名称 */
  VersionName: string;
  /** 环境变量 */
  EnvParams?: string;
  /** 最小副本数 */
  MinNum?: string;
  /** 最大副本数 */
  MaxNum?: string;
  /** 端口 */
  ContainerPort?: string;
  /** 备注 */
  Remark?: string;
  /** 日志采集路径 */
  CustomLogs?: string;
  /** 是否重设备注 */
  IsResetRemark?: boolean;
  /** 修改基础信息 */
  BasicModify?: boolean;
  /** 操作备注 */
  OperatorRemark?: string;
}

declare interface ModifyCloudBaseRunServerVersionResponse {
  /** 返回结果（succ为成功） */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClsTopicRequest {
  /** 环境ID */
  EnvId: string;
  /** 日志生命周期，单位天，可取值范围1~3600，取值为3640时代表永久保存 */
  Period?: number;
}

declare interface ModifyClsTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatabaseACLRequest {
  /** 环境ID */
  EnvId: string;
  /** 集合名称 */
  CollectionName: string;
  /** 权限标签。包含以下取值： READONLY：所有用户可读，仅创建者和管理员可写 PRIVATE：仅创建者及管理员可读写 ADMINWRITE：所有用户可读，仅管理员可写 ADMINONLY：仅管理员可读写 */
  AclTag: string;
}

declare interface ModifyDatabaseACLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEndUserRequest {
  /** 环境ID */
  EnvId: string;
  /** C端用户端的唯一ID */
  UUId: string;
  /** 帐号的状态ENABLEDISABLE */
  Status?: string;
}

declare interface ModifyEndUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEnvRequest {
  /** 环境ID */
  EnvId: string;
  /** 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符 */
  Alias?: string;
}

declare interface ModifyEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReinstateEnvRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface ReinstateEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceActivityRecordRequest {
  /** 活动id */
  ActivityId: number;
  /** 状态码 */
  Status: number;
  /** 自定义子状态 */
  SubStatus?: string;
  /** 鉴权token */
  ChannelToken?: string;
  /** 渠道名，不同渠道对应不同secretKey */
  Channel?: string;
}

declare interface ReplaceActivityRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollUpdateCloudBaseRunServerVersionRequest {
  /** 环境ID */
  EnvId: string;
  /** 要替换的版本名称，可以为latest */
  VersionName: string;
  /** 枚举（package/repository/image) */
  UploadType?: string;
  /** repository的类型(coding/gitlab/github) */
  RepositoryType?: string;
  /** 流量占比 */
  FlowRatio?: number;
  /** dockerfile地址 */
  DockerfilePath?: string;
  /** 构建目录 */
  BuildDir?: string;
  /** Cpu的大小，单位：核 */
  Cpu?: string;
  /** Mem的大小，单位：G */
  Mem?: string;
  /** 最小副本数，最小值：0 */
  MinNum?: string;
  /** 最大副本数 */
  MaxNum?: string;
  /** 策略类型 */
  PolicyType?: string;
  /** 策略阈值 */
  PolicyThreshold?: string;
  /** 环境变量 */
  EnvParams?: string;
  /** 容器端口 */
  ContainerPort?: number;
  /** 服务名称 */
  ServerName?: string;
  /** repository地址 */
  Repository?: string;
  /** 分支 */
  Branch?: string;
  /** 版本备注 */
  VersionRemark?: string;
  /** 代码包名字 */
  PackageName?: string;
  /** 代码包版本 */
  PackageVersion?: string;
  /** Image的详情 */
  ImageInfo?: CloudBaseRunImageInfo;
  /** Github等拉取代码的详情 */
  CodeDetail?: CloudBaseCodeRepoDetail;
  /** 是否回放流量 */
  IsRebuild?: boolean;
  /** 延迟多长时间开始健康检查（单位s） */
  InitialDelaySeconds?: number;
  /** cfs挂载信息 */
  MountVolumeInfo?: CloudBaseRunVolumeMount[];
  /** 是否回滚 */
  Rollback?: boolean;
  /** 版本历史名 */
  SnapshotName?: string;
  /** 自定义采集路径 */
  CustomLogs?: string;
  /** 是否启用统一域名 */
  EnableUnion?: boolean;
  /** 操作备注 */
  OperatorRemark?: string;
  /** 服务路径（只会第一次生效） */
  ServerPath?: string;
  /** 是否更新Cls */
  IsUpdateCls?: boolean;
  /** 自动扩缩容策略组 */
  PolicyDetail?: HpaPolicy[];
}

declare interface RollUpdateCloudBaseRunServerVersionResponse {
  /** succ为成功 */
  Result: string;
  /** 滚动更新的VersionName */
  VersionName: string | null;
  /** 操作记录id */
  RunId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchClsLogRequest {
  /** 环境唯一ID */
  EnvId: string;
  /** 查询起始时间条件 */
  StartTime: string;
  /** 查询结束时间条件 */
  EndTime: string;
  /** 查询语句，详情参考 https://cloud.tencent.com/document/product/614/47044 */
  QueryString: string;
  /** 单次要返回的日志条数，单次返回的最大条数为100 */
  Limit: number;
  /** 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围 */
  Context?: string;
  /** 按时间排序 asc（升序）或者 desc（降序），默认为 desc */
  Sort?: string;
  /** 是否使用Lucene语法，默认为false */
  UseLucene?: boolean;
}

declare interface SearchClsLogResponse {
  /** 日志内容结果 */
  LogResults?: LogResObject;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TurnOffStandaloneGatewayRequest {
  /** 环境ID */
  EnvId: string;
  /** 网关名称 */
  GatewayName: string;
  /** 服务名称列表 */
  ServiceNameList: string[];
}

declare interface TurnOffStandaloneGatewayResponse {
  /** 关闭独立网关状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TurnOnStandaloneGatewayRequest {
  /** 环境ID */
  EnvId: string;
  /** 网关名称 */
  GatewayName: string;
  /** 服务名称列表 */
  ServiceNameList: string[];
}

declare interface TurnOnStandaloneGatewayResponse {
  /** 小租户网关开启状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnfreezeCloudBaseRunServersRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称列表 */
  ServerNameList: string[];
}

declare interface UnfreezeCloudBaseRunServersResponse {
  /** 批量执行结果成功：succ失败：fail部分：partial（部分成功、部分失败） */
  Result: string | null;
  /** 解冻失败列表 */
  FailServerList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcb 云开发 CloudBase} */
declare interface Tcb {
  (): Versions;
  /** 绑定环境网关 {@link BindEnvGatewayRequest} {@link BindEnvGatewayResponse} */
  BindEnvGateway(data: BindEnvGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<BindEnvGatewayResponse>;
  /** 检查是否开通Tcb服务 {@link CheckTcbServiceRequest} {@link CheckTcbServiceResponse} */
  CheckTcbService(data?: CheckTcbServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CheckTcbServiceResponse>;
  /** TCB云API统一入口 {@link CommonServiceAPIRequest} {@link CommonServiceAPIResponse} */
  CommonServiceAPI(data: CommonServiceAPIRequest, config?: AxiosRequestConfig): AxiosPromise<CommonServiceAPIResponse>;
  /** 创建云开发项目 {@link CreateAndDeployCloudBaseProjectRequest} {@link CreateAndDeployCloudBaseProjectResponse} */
  CreateAndDeployCloudBaseProject(data: CreateAndDeployCloudBaseProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndDeployCloudBaseProjectResponse>;
  /** 增加安全域名 {@link CreateAuthDomainRequest} {@link CreateAuthDomainResponse} */
  CreateAuthDomain(data: CreateAuthDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuthDomainResponse>;
  /** 开通容器托管的资源 {@link CreateCloudBaseRunResourceRequest} {@link CreateCloudBaseRunResourceResponse} */
  CreateCloudBaseRunResource(data: CreateCloudBaseRunResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudBaseRunResourceResponse>;
  /** 创建服务版本 {@link CreateCloudBaseRunServerVersionRequest} {@link CreateCloudBaseRunServerVersionResponse} */
  CreateCloudBaseRunServerVersion(data: CreateCloudBaseRunServerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudBaseRunServerVersionResponse>;
  /** 创建托管域名 {@link CreateHostingDomainRequest} {@link CreateHostingDomainResponse} */
  CreateHostingDomain(data: CreateHostingDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostingDomainResponse>;
  /** 开通后付费资源 {@link CreatePostpayPackageRequest} {@link CreatePostpayPackageResponse} */
  CreatePostpayPackage(data?: CreatePostpayPackageRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePostpayPackageResponse>;
  /** 创建独立网关 {@link CreateStandaloneGatewayRequest} {@link CreateStandaloneGatewayResponse} */
  CreateStandaloneGateway(data: CreateStandaloneGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStandaloneGatewayResponse>;
  /** 创建静态托管资源 {@link CreateStaticStoreRequest} {@link CreateStaticStoreResponse} */
  CreateStaticStore(data: CreateStaticStoreRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStaticStoreResponse>;
  /** 创建微信云托管 {@link CreateWxCloudBaseRunEnvRequest} {@link CreateWxCloudBaseRunEnvResponse} */
  CreateWxCloudBaseRunEnv(data: CreateWxCloudBaseRunEnvRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWxCloudBaseRunEnvResponse>;
  /** 开通微信云托管MySQL数据库服务 {@link CreateWxCloudBaseRunServerDBClusterRequest} {@link CreateWxCloudBaseRunServerDBClusterResponse} */
  CreateWxCloudBaseRunServerDBCluster(data: CreateWxCloudBaseRunServerDBClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWxCloudBaseRunServerDBClusterResponse>;
  /** 删除云项目 {@link DeleteCloudBaseProjectLatestVersionRequest} {@link DeleteCloudBaseProjectLatestVersionResponse} */
  DeleteCloudBaseProjectLatestVersion(data: DeleteCloudBaseProjectLatestVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudBaseProjectLatestVersionResponse>;
  /** 删除服务版本 {@link DeleteCloudBaseRunServerVersionRequest} {@link DeleteCloudBaseRunServerVersionResponse} */
  DeleteCloudBaseRunServerVersion(data: DeleteCloudBaseRunServerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudBaseRunServerVersionResponse>;
  /** 删除终端用户 {@link DeleteEndUserRequest} {@link DeleteEndUserResponse} */
  DeleteEndUser(data: DeleteEndUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEndUserResponse>;
  /** 删除安全网关路由 {@link DeleteWxGatewayRouteRequest} {@link DeleteWxGatewayRouteResponse} */
  DeleteWxGatewayRoute(data: DeleteWxGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWxGatewayRouteResponse>;
  /** 查询活动信息 {@link DescribeActivityInfoRequest} {@link DescribeActivityInfoResponse} */
  DescribeActivityInfo(data?: DescribeActivityInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActivityInfoResponse>;
  /** 查询活动记录信息 {@link DescribeActivityRecordRequest} {@link DescribeActivityRecordResponse} */
  DescribeActivityRecord(data: DescribeActivityRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActivityRecordResponse>;
  /** 获取安全域名列表 {@link DescribeAuthDomainsRequest} {@link DescribeAuthDomainsResponse} */
  DescribeAuthDomains(data: DescribeAuthDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthDomainsResponse>;
  /** 获取新套餐 {@link DescribeBaasPackageListRequest} {@link DescribeBaasPackageListResponse} */
  DescribeBaasPackageList(data?: DescribeBaasPackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaasPackageListResponse>;
  /** 获取云托管代码上传和下载url {@link DescribeCloudBaseBuildServiceRequest} {@link DescribeCloudBaseBuildServiceResponse} */
  DescribeCloudBaseBuildService(data: DescribeCloudBaseBuildServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseBuildServiceResponse>;
  /** 获取云开发项目列表 {@link DescribeCloudBaseProjectLatestVersionListRequest} {@link DescribeCloudBaseProjectLatestVersionListResponse} */
  DescribeCloudBaseProjectLatestVersionList(data: DescribeCloudBaseProjectLatestVersionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseProjectLatestVersionListResponse>;
  /** 云项目部署版本列表 {@link DescribeCloudBaseProjectVersionListRequest} {@link DescribeCloudBaseProjectVersionListResponse} */
  DescribeCloudBaseProjectVersionList(data: DescribeCloudBaseProjectVersionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseProjectVersionListResponse>;
  /** 查看环境下的所有vpc {@link DescribeCloudBaseRunAllVpcsRequest} {@link DescribeCloudBaseRunAllVpcsResponse} */
  DescribeCloudBaseRunAllVpcs(data: DescribeCloudBaseRunAllVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunAllVpcsResponse>;
  /** 独立网关云托管服务配置 {@link DescribeCloudBaseRunConfForGateWayRequest} {@link DescribeCloudBaseRunConfForGateWayResponse} */
  DescribeCloudBaseRunConfForGateWay(data: DescribeCloudBaseRunConfForGateWayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunConfForGateWayResponse>;
  /** 查询一键部署任务 {@link DescribeCloudBaseRunOneClickTaskExternalRequest} {@link DescribeCloudBaseRunOneClickTaskExternalResponse} */
  DescribeCloudBaseRunOneClickTaskExternal(data: DescribeCloudBaseRunOneClickTaskExternalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunOneClickTaskExternalResponse>;
  /** 查询操作类型接口 {@link DescribeCloudBaseRunOperationTypesRequest} {@link DescribeCloudBaseRunOperationTypesResponse} */
  DescribeCloudBaseRunOperationTypes(data: DescribeCloudBaseRunOperationTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunOperationTypesResponse>;
  /** 查询云应用服务版本容器列表 {@link DescribeCloudBaseRunPodListRequest} {@link DescribeCloudBaseRunPodListResponse} */
  DescribeCloudBaseRunPodList(data: DescribeCloudBaseRunPodListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunPodListResponse>;
  /** 查看容器托管的资源状态 {@link DescribeCloudBaseRunResourceRequest} {@link DescribeCloudBaseRunResourceResponse} */
  DescribeCloudBaseRunResource(data: DescribeCloudBaseRunResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunResourceResponse>;
  /** 查看容器托管的资源状态扩展使用 {@link DescribeCloudBaseRunResourceForExtendRequest} {@link DescribeCloudBaseRunResourceForExtendResponse} */
  DescribeCloudBaseRunResourceForExtend(data: DescribeCloudBaseRunResourceForExtendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunResourceForExtendResponse>;
  /** 查询单个服务的详情 {@link DescribeCloudBaseRunServerRequest} {@link DescribeCloudBaseRunServerResponse} */
  DescribeCloudBaseRunServer(data: DescribeCloudBaseRunServerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunServerResponse>;
  /** 查询微信云托管服务域名 {@link DescribeCloudBaseRunServerDomainNameRequest} {@link DescribeCloudBaseRunServerDomainNameResponse} */
  DescribeCloudBaseRunServerDomainName(data: DescribeCloudBaseRunServerDomainNameRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunServerDomainNameResponse>;
  /** 查询服务版本的详情 {@link DescribeCloudBaseRunServerVersionRequest} {@link DescribeCloudBaseRunServerVersionResponse} */
  DescribeCloudBaseRunServerVersion(data: DescribeCloudBaseRunServerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunServerVersionResponse>;
  /** 查询服务版本详情 {@link DescribeCloudBaseRunVersionRequest} {@link DescribeCloudBaseRunVersionResponse} */
  DescribeCloudBaseRunVersion(data: DescribeCloudBaseRunVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunVersionResponse>;
  /** 获取云托管详情 {@link DescribeCloudBaseRunVersionRsByConditionRequest} {@link DescribeCloudBaseRunVersionRsByConditionResponse} */
  DescribeCloudBaseRunVersionRsByCondition(data?: DescribeCloudBaseRunVersionRsByConditionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunVersionRsByConditionResponse>;
  /** 查询版本历史 {@link DescribeCloudBaseRunVersionSnapshotRequest} {@link DescribeCloudBaseRunVersionSnapshotResponse} */
  DescribeCloudBaseRunVersionSnapshot(data: DescribeCloudBaseRunVersionSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunVersionSnapshotResponse>;
  /** 查询环境的监控曲线数据 {@link DescribeCurveDataRequest} {@link DescribeCurveDataResponse} */
  DescribeCurveData(data: DescribeCurveDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCurveDataResponse>;
  /** 获取数据库权限 {@link DescribeDatabaseACLRequest} {@link DescribeDatabaseACLResponse} */
  DescribeDatabaseACL(data: DescribeDatabaseACLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseACLResponse>;
  /** 获取下载文件信息 {@link DescribeDownloadFileRequest} {@link DescribeDownloadFileResponse} */
  DescribeDownloadFile(data: DescribeDownloadFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDownloadFileResponse>;
  /** 获取终端用户新增与登录信息 {@link DescribeEndUserLoginStatisticRequest} {@link DescribeEndUserLoginStatisticResponse} */
  DescribeEndUserLoginStatistic(data: DescribeEndUserLoginStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEndUserLoginStatisticResponse>;
  /** 获取终端用户分布 {@link DescribeEndUserStatisticRequest} {@link DescribeEndUserStatisticResponse} */
  DescribeEndUserStatistic(data: DescribeEndUserStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEndUserStatisticResponse>;
  /** 获取终端用户列表 {@link DescribeEndUsersRequest} {@link DescribeEndUsersResponse} */
  DescribeEndUsers(data: DescribeEndUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEndUsersResponse>;
  /** 获取环境下单地域 {@link DescribeEnvDealRegionRequest} {@link DescribeEnvDealRegionResponse} */
  DescribeEnvDealRegion(data: DescribeEnvDealRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvDealRegionResponse>;
  /** 查询后付费免费配额信息 {@link DescribeEnvFreeQuotaRequest} {@link DescribeEnvFreeQuotaResponse} */
  DescribeEnvFreeQuota(data: DescribeEnvFreeQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvFreeQuotaResponse>;
  /** 查询环境个数上限接口 {@link DescribeEnvLimitRequest} {@link DescribeEnvLimitResponse} */
  DescribeEnvLimit(data?: DescribeEnvLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvLimitResponse>;
  /** 查询环境后付费计费详情 {@link DescribeEnvPostpaidDeductRequest} {@link DescribeEnvPostpaidDeductResponse} */
  DescribeEnvPostpaidDeduct(data: DescribeEnvPostpaidDeductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvPostpaidDeductResponse>;
  /** 获取环境列表 {@link DescribeEnvsRequest} {@link DescribeEnvsResponse} */
  DescribeEnvs(data?: DescribeEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvsResponse>;
  /** 描述扩展上传文件信息 {@link DescribeExtensionUploadInfoRequest} {@link DescribeExtensionUploadInfoResponse} */
  DescribeExtensionUploadInfo(data: DescribeExtensionUploadInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtensionUploadInfoResponse>;
  /** 获取增值包计费相关信息 {@link DescribeExtraPkgBillingInfoRequest} {@link DescribeExtraPkgBillingInfoResponse} */
  DescribeExtraPkgBillingInfo(data?: DescribeExtraPkgBillingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtraPkgBillingInfoResponse>;
  /** 查询静态托管域名任务状态 {@link DescribeHostingDomainTaskRequest} {@link DescribeHostingDomainTaskResponse} */
  DescribeHostingDomainTask(data: DescribeHostingDomainTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostingDomainTaskResponse>;
  /** 查询后付费资源免费量 {@link DescribePostpayFreeQuotasRequest} {@link DescribePostpayFreeQuotasResponse} */
  DescribePostpayFreeQuotas(data: DescribePostpayFreeQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePostpayFreeQuotasResponse>;
  /** 获取后付费免费额度 {@link DescribePostpayPackageFreeQuotasRequest} {@link DescribePostpayPackageFreeQuotasResponse} */
  DescribePostpayPackageFreeQuotas(data?: DescribePostpayPackageFreeQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePostpayPackageFreeQuotasResponse>;
  /** 查询环境的配额使用量 {@link DescribeQuotaDataRequest} {@link DescribeQuotaDataResponse} */
  DescribeQuotaData(data: DescribeQuotaDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuotaDataResponse>;
  /** 查询后付费短信资源量 {@link DescribeSmsQuotasRequest} {@link DescribeSmsQuotasResponse} */
  DescribeSmsQuotas(data: DescribeSmsQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmsQuotasResponse>;
  /** 查询环境1分钱抵扣信息 {@link DescribeSpecialCostItemsRequest} {@link DescribeSpecialCostItemsResponse} */
  DescribeSpecialCostItems(data?: DescribeSpecialCostItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecialCostItemsResponse>;
  /** 查询小租户网关信息 {@link DescribeStandaloneGatewayRequest} {@link DescribeStandaloneGatewayResponse} */
  DescribeStandaloneGateway(data: DescribeStandaloneGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStandaloneGatewayResponse>;
  /** 查询小租户网关套餐信息 {@link DescribeStandaloneGatewayPackageRequest} {@link DescribeStandaloneGatewayPackageResponse} */
  DescribeStandaloneGatewayPackage(data?: DescribeStandaloneGatewayPackageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStandaloneGatewayPackageResponse>;
  /** 查询用户活动信息 {@link DescribeUserActivityInfoRequest} {@link DescribeUserActivityInfoResponse} */
  DescribeUserActivityInfo(data: DescribeUserActivityInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserActivityInfoResponse>;
  /** 查询微信云托管环境信息 {@link DescribeWxCloudBaseRunEnvsRequest} {@link DescribeWxCloudBaseRunEnvsResponse} */
  DescribeWxCloudBaseRunEnvs(data?: DescribeWxCloudBaseRunEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWxCloudBaseRunEnvsResponse>;
  /** 查询微信云托管子网 {@link DescribeWxCloudBaseRunSubNetsRequest} {@link DescribeWxCloudBaseRunSubNetsResponse} */
  DescribeWxCloudBaseRunSubNets(data: DescribeWxCloudBaseRunSubNetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWxCloudBaseRunSubNetsResponse>;
  /** 销毁环境 {@link DestroyEnvRequest} {@link DestroyEnvResponse} */
  DestroyEnv(data: DestroyEnvRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyEnvResponse>;
  /** 销毁小租户网关 {@link DestroyStandaloneGatewayRequest} {@link DestroyStandaloneGatewayResponse} */
  DestroyStandaloneGateway(data: DestroyStandaloneGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyStandaloneGatewayResponse>;
  /** 销毁静态资源 {@link DestroyStaticStoreRequest} {@link DestroyStaticStoreResponse} */
  DestroyStaticStore(data: DestroyStaticStoreRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyStaticStoreResponse>;
  /** 创建云应用服务 {@link EstablishCloudBaseRunServerRequest} {@link EstablishCloudBaseRunServerResponse} */
  EstablishCloudBaseRunServer(data: EstablishCloudBaseRunServerRequest, config?: AxiosRequestConfig): AxiosPromise<EstablishCloudBaseRunServerResponse>;
  /** 创建或修改安全网关路由 {@link EstablishWxGatewayRouteRequest} {@link EstablishWxGatewayRouteResponse} */
  EstablishWxGatewayRoute(data: EstablishWxGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<EstablishWxGatewayRouteResponse>;
  /** 批量冻结 {@link FreezeCloudBaseRunServersRequest} {@link FreezeCloudBaseRunServersResponse} */
  FreezeCloudBaseRunServers(data: FreezeCloudBaseRunServersRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeCloudBaseRunServersResponse>;
  /** 修改容器内的版本流量配置 {@link ModifyCloudBaseRunServerFlowConfRequest} {@link ModifyCloudBaseRunServerFlowConfResponse} */
  ModifyCloudBaseRunServerFlowConf(data: ModifyCloudBaseRunServerFlowConfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudBaseRunServerFlowConfResponse>;
  /** 修改服务版本信息 {@link ModifyCloudBaseRunServerVersionRequest} {@link ModifyCloudBaseRunServerVersionResponse} */
  ModifyCloudBaseRunServerVersion(data: ModifyCloudBaseRunServerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudBaseRunServerVersionResponse>;
  /** 修改日志主题 {@link ModifyClsTopicRequest} {@link ModifyClsTopicResponse} */
  ModifyClsTopic(data: ModifyClsTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClsTopicResponse>;
  /** 修改数据库权限 {@link ModifyDatabaseACLRequest} {@link ModifyDatabaseACLResponse} */
  ModifyDatabaseACL(data: ModifyDatabaseACLRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatabaseACLResponse>;
  /** 管理终端用户 {@link ModifyEndUserRequest} {@link ModifyEndUserResponse} */
  ModifyEndUser(data: ModifyEndUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEndUserResponse>;
  /** 更新环境信息 {@link ModifyEnvRequest} {@link ModifyEnvResponse} */
  ModifyEnv(data: ModifyEnvRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvResponse>;
  /** 恢复环境，解除隔离状态 {@link ReinstateEnvRequest} {@link ReinstateEnvResponse} */
  ReinstateEnv(data: ReinstateEnvRequest, config?: AxiosRequestConfig): AxiosPromise<ReinstateEnvResponse>;
  /** 更新活动详情 {@link ReplaceActivityRecordRequest} {@link ReplaceActivityRecordResponse} */
  ReplaceActivityRecord(data: ReplaceActivityRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceActivityRecordResponse>;
  /** 滚动更新服务版本 {@link RollUpdateCloudBaseRunServerVersionRequest} {@link RollUpdateCloudBaseRunServerVersionResponse} */
  RollUpdateCloudBaseRunServerVersion(data: RollUpdateCloudBaseRunServerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<RollUpdateCloudBaseRunServerVersionResponse>;
  /** 搜索CLS日志 {@link SearchClsLogRequest} {@link SearchClsLogResponse} */
  SearchClsLog(data: SearchClsLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClsLogResponse>;
  /** 关闭小租户网关 {@link TurnOffStandaloneGatewayRequest} {@link TurnOffStandaloneGatewayResponse} */
  TurnOffStandaloneGateway(data: TurnOffStandaloneGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<TurnOffStandaloneGatewayResponse>;
  /** 开启小租户网关 {@link TurnOnStandaloneGatewayRequest} {@link TurnOnStandaloneGatewayResponse} */
  TurnOnStandaloneGateway(data: TurnOnStandaloneGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<TurnOnStandaloneGatewayResponse>;
  /** 批量解冻服务 {@link UnfreezeCloudBaseRunServersRequest} {@link UnfreezeCloudBaseRunServersResponse} */
  UnfreezeCloudBaseRunServers(data: UnfreezeCloudBaseRunServersRequest, config?: AxiosRequestConfig): AxiosPromise<UnfreezeCloudBaseRunServersResponse>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  AddCustomDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ApplyVoucher(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CancelDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CancelWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CheckEnvId(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CheckEnvPackageModify(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CheckQualification(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CloseWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CloudBaseRunPipelineOperation(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateActivityDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCloudBaseRunResAuth(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCopyRepoTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateEnv(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateEnvAndResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateInstallExtensionTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateInvoice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateLoginConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateUninstallExtensionTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateUpgradeExtensionTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunDBAccount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunPipeline(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxRunPackageDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DatabaseMigrateExport(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DatabaseMigrateImport(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DatabaseMigrateQueryInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunImageRepo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunServerVersionBatch(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCustomDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteOauthRecord(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteVoucherApplication(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteWxCloudBaseRunDBAccount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteWxCloudBaseRunPipeline(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteWxCloudBaseRunServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeployCloudBaseRunOnOneClick(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeployWxCloudBaseRunOnOneClick(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeAccountInfoByPlatformId(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeActivityGoods(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeAmountAfterDeduction(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeAuthentification(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeBillingInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeBuild(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeBuildInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCDNChainTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCerts(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeChangePay(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseCodeBranch(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseCodeRepos(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseGWAPI(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBaseImages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildStages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildStepLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildSteps(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunContainerSpec(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunCynosdbMonitorData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunImages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunOperationDetails(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunProcessLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunResAuth(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunServers(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunServiceDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunVersionException(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCommits(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCustomDomains(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeDauData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeDbDistribution(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeDeployOnOneClickTasks(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeEnvAccountCircle(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeEnvPostpayPackage(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeEnvResourceException(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionInstalled(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionTaskStatus(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionTemplates(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionUpgrade(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensions(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeIntranetAccessInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceAmount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceDetail(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceList(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceSubject(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeLastReleaseType(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeLoginConfigs(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeNextExpireTime(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeOauthRecords(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeOneClickTaskLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePackages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePayInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePipelineReleaseLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePostpayPackageList(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePostpayQuotaLimit(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeQcloudScene(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeRepos(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeResourceLimit(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeResourceRecoverJob(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeRestoreHistory(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSafeRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSecurityRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeServerManageTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeServiceBaseConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeServiceEndpoints(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSmsAttrInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSmsRecords(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStatData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStaticStore(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStorageACL(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStorageACLTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStorageSafeRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeTcbBalance(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeTemplateTypes(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeTopology(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeUsers(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVoucherApplication(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVoucherPlanAvailable(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVouchersInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVouchersInfoByDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunDBAccounts(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunDBClusterDetail(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunDBParams(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunFreeQuota(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunPipelineTasks(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunPipelines(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxRunPackageGoods(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  EditCustomDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  EnableIntranetAccess(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  EstablishCloudBaseRunServerWx(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  GetRecommendedCname(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  InqueryPackagePrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  InqueryPostpayPrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  InqueryPrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyCloudBaseRunServiceDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifySafeRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifySecurityRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyStorageACL(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyStorageSafeRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxCloudBaseRunDBAccount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxCloudBaseRunDBParam(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxCloudBaseRunDBServerlessStrategy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxEnvExtraAttribute(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  OnlineHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  OperateServerManage(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  QueryActivityPrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  QueryDeals(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  QueryWxEnvExtraAttribute(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RefundPostpaidPackage(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ReleaseWxCloudBaseRunVersion(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ReleaseWxCloudBaseRunVersionForGray(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ResetWxCloudBaseRunDBPassword(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ResourceRecover(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RestartCloudBaseRunOneClickTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RestartOneClickTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RestartServerDeployTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ResumeCloudBaseRunTdsql(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RevokeInvoice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SetInvoiceSubject(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  StopOneClickTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SubmitServerConfigChange(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SubmitServerRelease(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SubmitServerRollback(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SwitchCloudRunCynosdbWan(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateLoginConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdatePostpayQuotaLimit(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdatePostpayQuotaLimitStatus(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateScfConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateServerBaseConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UploadCert(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
}

export declare type Versions = ["2018-06-08"];

export default Tcb;
