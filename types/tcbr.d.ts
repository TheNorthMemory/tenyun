/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** BuildPacks信息 */
declare interface BuildPacksInfo {
  /** 基础镜像 */
  BaseImage: string;
  /** 启动命令 */
  EntryPoint: string;
  /** 语言 */
  RepoLanguage: string;
  /** 上传文件名 */
  UploadFilename: string;
  /** 语言版本 */
  LanguageVersion?: string;
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

/** 创建 vpc 信息 */
declare interface CreateVpcInfo {
  /** vpc id */
  VpcId: string;
  /** 1 新建 2 指定 */
  CreateType: number;
  /** 子网ID列表 */
  SubnetIds?: string[];
}

/** 数据库资源信息 */
declare interface DatabasesInfo {
  /** 数据库唯一标识 */
  InstanceId: string;
  /** 状态。包含以下取值：INITIALIZING：资源初始化中RUNNING：运行中，可正常使用的状态UNUSABLE：禁用，不可用OVERDUE：资源过期 */
  Status: string;
  /** 所属地域。当前支持ap-shanghai */
  Region: string;
}

/** 部署参数 */
declare interface DeployParam {
  /** 部署类型：package/image/repository/pipeline/jar/war */
  DeployType: string;
  /** 部署类型为image时传入 */
  ImageUrl?: string;
  /** 部署类型为package时传入 */
  PackageName?: string;
  /** 部署类型为package时传入 */
  PackageVersion?: string;
  /** 部署备注 */
  DeployRemark?: string;
  /** 代码仓库信息 */
  RepoInfo?: RepositoryInfo;
  /** 无Dockerfile时填写 */
  BuildPacks?: BuildPacksInfo;
  /** 发布类型 GRAY | FULL */
  ReleaseType?: string;
}

/** 云托管实例的部署记录, 包括扩缩容状态和流量分配情况 */
declare interface DeployRecord {
  /** 部署Id */
  DeployId?: string;
  /** 部署开始时间 */
  DeployTime?: string;
  /** 状态：running/deploying/deploy_failed */
  Status?: string;
  /** 部署运行Id 用户查询部署日志 */
  RunId?: string;
  /** 构建Id */
  BuildId?: number;
  /** 流量比例 */
  FlowRatio?: number;
  /** 镜像url */
  ImageUrl?: string | null;
  /** 缩容状态 缩容为 zero 否则为空 */
  ScaleStatus?: string;
  /** 是否分配流量 */
  HasTraffic?: boolean;
  /** 流量分配方式, FLOW: 百分比分配; URL_PARAMS: 匹配 query 参数; HEADERS: 匹配请求 Header */
  TrafficType?: string;
  /** 当前版本是否在发布中 */
  IsReleasing?: boolean;
}

/** 服务配置入参 */
declare interface DiffConfigItem {
  /** 配置项 KeyMinNum 最小副本数MaxNum 最大副本数PolicyDetails 扩缩容策略AccessTypes 访问类型TimerScale 定时扩缩容InternalAccess 内网访问OperationMode 运行模式 noScale | condScale | alwaysScale | custom ｜ manualScaleSessionAffinity 会话亲和性 open | closeCpuSpecs cpu 规格MemSpecs mem规格EnvParam 环境变量LogPath 日志采集路径Port 端口Dockerfile dockerfile 文件名BuildDir 目标目录Tag 服务标签LogType 日志类型 none | default | custom LogSetId 日志集IdLogTopicId 日志主题IDLogParseType 日志解析类型 json ｜ lineEntryPoint entrypoint 命令Cmd cmd命令VpcConf 网络信息 */
  Key: string;
  /** 字符串类型配置项值InternalAccess、OperationMode、SessionAffinity、EnvParam、LogPath、Dockerfile、BuildDir、Tag、LogType、LogSetId、LogTopicId、LogParseType */
  Value?: string;
  /** int 类型配置项值MinNum、MaxNum、Port */
  IntValue?: number;
  /** bool 类型配置项值 */
  BoolValue?: boolean;
  /** 浮点型配置项值CpuSpecs、MemSpecs */
  FloatValue?: number;
  /** 字符串数组配置项值AccessTypes，EntryPoint，Cmd */
  ArrayValue?: string[];
  /** 扩缩容策略配置项值 */
  PolicyDetails?: HpaPolicy[];
  /** 定时扩缩容配置项值 */
  TimerScale?: TimerScale[];
  /** 配置内网访问时网络信息 */
  VpcConf?: VpcConf;
  /** 存储配置信息 */
  VolumesConf?: VolumeConf[];
}

/** 环境基础信息 */
declare interface EnvBaseInfo {
  /** 环境Id */
  EnvId?: string;
  /** 套餐类型：Trial ｜ Standard ｜ Professional ｜ Enterprise */
  PackageType?: string;
  /** VPC Id */
  VpcId?: string;
  /** 环境创建时间 */
  CreateTime?: string;
  /** 环境别名 */
  Alias?: string;
  /** 环境状态 */
  Status?: string;
  /** 环境地域 */
  Region?: string;
  /** 环境类型 tcbr ｜ run */
  EnvType?: string;
  /** 子网id */
  SubnetIds?: string;
  /** 回收标志，为空则表示正常，recycle表示已回收 */
  Recycle?: string;
}

/** 环境信息 */
declare interface EnvInfo {
  /** 账户下该环境唯一标识 */
  EnvId?: string;
  /** 环境来源。包含以下取值：miniapp：微信小程序qcloud ：腾讯云 */
  Source?: string;
  /** 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符 */
  Alias?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后修改时间 */
  UpdateTime?: string;
  /** 环境状态。包含以下取值：NORMAL：正常可用UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中 */
  Status?: string;
  /** 是否到期自动降为免费版 */
  IsAutoDegrade?: boolean;
  /** 环境渠道 */
  EnvChannel?: string;
  /** 支付方式。包含以下取值： prepayment：预付费 postpaid：后付费 */
  PayMode?: string;
  /** 是否为默认环境 */
  IsDefault?: boolean;
  /** 环境所属地域 */
  Region?: string;
  /** 环境类型：baas, run, hosting, weda,tcbr */
  EnvType?: string;
  /** 数据库列表 */
  Databases?: DatabasesInfo[];
  /** 存储列表 */
  Storages?: StorageInfo[];
  /** 函数列表 */
  Functions?: FunctionInfo[];
  /** 云日志服务列表 */
  LogServices?: LogServiceInfo[];
  /** 静态资源信息 */
  StaticStorages?: StaticStorageInfo[];
  /** 环境标签列表 */
  Tags?: Tag[];
  /** 自定义日志服务 */
  CustomLogServices?: ClsInfo[];
  /** tcb产品套餐ID，参考DescribePackages接口的返回值。 */
  PackageId?: string;
  /** 套餐中文名称，参考DescribePackages接口的返回值。 */
  PackageName?: string;
}

/** 删除失败版本信息 */
declare interface FailDeleteVersions {
  /** 删除失败版本信息 */
  Version: SimpleVersion;
  /** 删除失败错误码 */
  ErrorCode: number;
  /** 删除失败错误信息 */
  ErrorMsg: string;
  /** 删除操作 RequestId */
  RequestId: string;
}

/** 函数的信息 */
declare interface FunctionInfo {
  /** 命名空间 */
  Namespace: string;
  /** 所属地域。当前支持ap-shanghai */
  Region: string;
}

/** 扩缩容入参 */
declare interface HpaPolicy {
  /** 扩缩容类型 */
  PolicyType: string;
  /** 扩缩容阈值 */
  PolicyThreshold: number;
}

/** CLS日志单条信息 */
declare interface LogObject {
  /** 日志属于的 topic ID */
  TopicId?: string | null;
  /** 日志主题的名字 */
  TopicName?: string | null;
  /** 日志时间 */
  Timestamp?: string | null;
  /** 日志内容 */
  Content?: string | null;
  /** 采集路径 */
  FileName?: string | null;
  /** 日志来源设备 */
  Source?: string | null;
  /** 日志唯一标识 */
  PkgLogId?: string;
}

/** CLS日志结果 */
declare interface LogResObject {
  /** 获取更多检索结果的游标 */
  Context: string | null;
  /** 搜索结果是否已经全部返回 */
  ListOver: boolean | null;
  /** 日志内容信息 */
  Results: LogObject[] | null;
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
}

/** 通用Key Value */
declare interface ObjectKV {
  /** 键值对Key */
  Key: string;
  /** 键值对Value */
  Value: string;
}

/** 通用键值权重对 */
declare interface ObjectKVPriority {
  /** 键值对Key */
  Key: string;
  /** 键值对Value */
  Value: string;
  /** 键值对权重 */
  Priority: number;
}

/** 在线版本信息 */
declare interface OnlineVersionInfo {
  /** 版本名 */
  VersionName?: string;
  /** 镜像url */
  ImageUrl?: string;
  /** 流量 */
  FlowRatio?: string;
}

/** 发布单信息 */
declare interface ReleaseOrderInfo {
  /** 发布单Id */
  Id: number;
  /** 服务名 */
  ServerName: string;
  /** 当前版本 */
  CurrentVersion: VersionInfo;
  /** 发布版本 */
  ReleaseVersion: VersionInfo;
  /** 灰度状态 */
  GrayStatus: string;
  /** 发布状态 */
  ReleaseStatus: string;
  /** 流量值 */
  TrafficTypeValues: ObjectKV[];
  /** 流量类型 */
  TrafficType: string;
  /** 百分比 */
  FlowRatio: number;
  /** 创建时间 */
  CreateTime: string;
  /** 是否发布中 */
  IsReleasing: boolean;
}

/** 代码仓库信息 */
declare interface RepositoryInfo {
  /** git source */
  Source: string;
  /** 仓库名 */
  Repo: string;
  /** 分支名 */
  Branch: string;
}

/** 服务基础配置信息 */
declare interface ServerBaseConfig {
  /** 环境 Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 是否开启公网访问 */
  OpenAccessTypes: string[];
  /** Cpu 规格 */
  Cpu: number;
  /** Mem 规格 */
  Mem: number;
  /** 最小副本数 */
  MinNum: number;
  /** 最大副本数 */
  MaxNum: number;
  /** 扩缩容配置 */
  PolicyDetails: HpaPolicy[];
  /** 日志采集路径 */
  CustomLogs: string;
  /** 环境变量 */
  EnvParams: string;
  /** 延迟检测时间 */
  InitialDelaySeconds: number;
  /** 创建时间 */
  CreateTime: string;
  /** 服务端口 */
  Port: number;
  /** 是否有Dockerfile */
  HasDockerfile: boolean;
  /** Dockerfile 文件名 */
  Dockerfile: string;
  /** 构建目录 */
  BuildDir: string;
  /** 日志类型: none | default | custom */
  LogType?: string;
  /** cls setId */
  LogSetId?: string;
  /** cls 主题id */
  LogTopicId?: string;
  /** 解析类型：json ｜ line */
  LogParseType?: string;
  /** 服务标签, function: 函数托管 */
  Tag?: string;
  /** 内网访问开关 close | open */
  InternalAccess?: string;
  /** 内网域名 */
  InternalDomain?: string;
  /** 运行模式 */
  OperationMode?: string;
  /** 定时扩缩容配置 */
  TimerScale?: TimerScale[];
  /** Dockerfile EntryPoint 参数 */
  EntryPoint?: string[];
  /** Dockerfile Cmd 参数 */
  Cmd?: string[];
  /** 会话亲和性开关 */
  SessionAffinity?: string | null;
  /** Vpc 配置参数 */
  VpcConf?: VpcConf;
  /** 存储配置信息 */
  VolumesConf?: VolumeConf[];
  /** 关联镜像密钥 */
  LinkImageRegistry?: string;
}

/** 服务基本信息 */
declare interface ServerBaseInfo {
  /** 服务名 */
  ServerName?: string;
  /** 默认服务域名 */
  DefaultDomainName?: string;
  /** 自定义域名 */
  CustomDomainName?: string;
  /** 服务状态：running/deploying/deploy_failed */
  Status?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 公网访问类型 */
  AccessTypes?: string[];
  /** 展示自定义域名 */
  CustomDomainNames?: string[];
  /** 服务类型: function 云函数2.0；container 容器服务 */
  ServerType?: string;
  /** 流量类型，目前只有 FLOW */
  TrafficType?: string;
  /** 创建时间 */
  CreateTime?: string;
}

/** 服务管理任务信息 */
declare interface ServerManageTaskInfo {
  /** 任务Id */
  Id?: number;
  /** 环境Id */
  EnvId?: string;
  /** 服务名 */
  ServerName?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 变更类型 */
  ChangeType?: string;
  /** 发布类型 */
  ReleaseType?: string;
  /** 部署类型 */
  DeployType?: string;
  /** 上一个版本名 */
  PreVersionName?: string;
  /** 版本名 */
  VersionName?: string;
  /** 流水线Id */
  PipelineId?: number;
  /** 流水线任务Id */
  PipelineTaskId?: number;
  /** 发布单Id */
  ReleaseId?: number;
  /** 状态 */
  Status?: string;
  /** 步骤信息 */
  Steps?: TaskStepInfo[];
  /** 失败原因 */
  FailReason?: string;
  /** 操作标识 */
  OperatorRemark?: string;
}

/** 删除版本时需要的简化信息 */
declare interface SimpleVersion {
  /** 要删除版本的环境 Id */
  EnvId: string;
  /** 要删除版本的服务名 */
  ServerName: string;
  /** 要删除版本的版本名 */
  VersionName: string;
}

/** 静态CDN资源信息 */
declare interface StaticStorageInfo {
  /** 静态CDN域名 */
  StaticDomain: string;
  /** 静态CDN默认文件夹，当前为根目录 */
  DefaultDirName: string;
  /** 资源状态(process/online/offline/init) */
  Status: string;
  /** cos所属区域 */
  Region: string;
  /** bucket信息 */
  Bucket: string;
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

/** 删除成功的版本信息 */
declare interface SuccessDeleteVersions {
  /** 版本简化信息 */
  Version: SimpleVersion;
  /** 删除版本的 RequestId */
  RequestId: string;
  /** 删除版本结果 */
  Result: string;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 任务步骤信息 */
declare interface TaskStepInfo {
  /** 步骤名 */
  Name?: string;
  /** 未启动："todo"运行中："running"失败："failed"成功结束："finished" */
  Status?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 消耗时间：秒 */
  CostTime?: number;
  /** 失败原因 */
  FailReason?: string;
}

/** 定时扩缩容配置 */
declare interface TimerScale {
  /** 循环类型 */
  CycleType?: string;
  /** 循环起始 */
  StartDate?: string;
  /** 循环结束 */
  EndDate?: string;
  /** 起始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 副本个数 */
  ReplicaNum?: number;
}

/** 版本流量信息 */
declare interface VersionFlowInfo {
  /** 版本名 */
  VersionName: string;
  /** 是否默认版本 */
  IsDefaultPriority: boolean;
  /** 流量比例 */
  FlowRatio?: number;
  /** 测试KV值 */
  UrlParam?: ObjectKV;
  /** 权重 */
  Priority?: number;
}

/** 版本信息 */
declare interface VersionInfo {
  /** 版本名 */
  VersionName?: string;
  /** 流量比例 */
  FlowRatio?: number;
  /** 版本状态 */
  Status?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  UpdatedTime?: string;
  /** 构建Id */
  BuildId?: number;
  /** 上传方式 */
  UploadType?: string;
  /** 操作标识 */
  Remark?: string;
  /** 测试参数 */
  UrlParam?: ObjectKV;
  /** 权重 */
  Priority?: number;
  /** 是否默认 */
  IsDefaultPriority?: boolean;
  /** 流量参数 */
  FlowParams?: ObjectKVPriority[];
  /** 最小副本数 */
  MinReplicas?: number;
  /** 最大副本数 */
  MaxReplicas?: number;
  /** 操作Id */
  RunId?: string;
  /** 百分比 */
  Percent?: number;
  /** 当前副本数 */
  CurrentReplicas?: number;
  /** 架构类型 */
  Architecture?: string;
}

/** 版本Pod实例信息 */
declare interface VersionPodInstance {
  /** 实例webshell链接 */
  Webshell?: string;
  /** 实例Id */
  PodId?: string;
  /** 实例状态 */
  Status?: string;
  /** 创建时间 */
  CreateTime?: string;
}

/** 存储配置 */
declare interface VolumeConf {
  /** 存储类型 */
  Type?: string;
  /** 对象存储桶名称 */
  BucketName?: string;
  /** 存储连接地址 */
  Endpoint?: string;
  /** 存储连接用户密码 */
  KeyID?: string;
  /** 存储挂载目的目录 */
  DstPath?: string;
  /** 存储挂载源目录 */
  SrcPath?: string;
}

/** 云托管服务 Vpc 配置 */
declare interface VpcConf {
  /** vpc id */
  VpcId?: string;
  /** vpc 网段 */
  VpcCIDR?: string;
  /** subnet id */
  SubnetId?: string;
  /** subnet 网段 */
  SubnetCIDR?: string;
}

declare interface CreateCloudRunEnvRequest {
  /** Trial,Standard,Professional,Enterprise */
  PackageType: string;
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
  /** 请求key 用于防重 */
  ReqKey?: string;
  /** 来源：wechat | cloud | weda */
  Source?: string;
  /** 渠道：wechat | cloud | weda */
  Channel?: string;
  /** 环境ID 云开发平台必填 */
  EnvId?: string;
}

declare interface CreateCloudRunEnvResponse {
  /** 环境Id */
  EnvId?: string;
  /** 后付费订单号 */
  TranId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudRunServerRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 部署信息 */
  DeployInfo: DeployParam;
  /** 服务配置信息(已废弃) */
  ServerConfig?: ServerBaseConfig;
  /** 服务配置信息 */
  Items?: DiffConfigItem[];
  /** vpc 信息 */
  VpcInfo?: CreateVpcInfo;
}

declare interface CreateCloudRunServerResponse {
  /** 一键部署任务Id，微信云托管，暂时用不到 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudRunServerRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 操作人信息 */
  OperatorRemark?: string;
}

declare interface DeleteCloudRunServerResponse {
  /** 删除结果：success / failed */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudRunVersionsRequest {
  /** 环境 Id */
  EnvId: string;
  /** 是否删除服务，只有最后一个版本的时候才生效 */
  IsDeleteServer: boolean;
  /** 只有删除服务的时候，才生效 */
  IsDeleteImage: boolean;
  /** 删除版本的信息 */
  SimpleVersions: SimpleVersion[];
  /** 操作备注 */
  OperatorRemark?: string;
}

declare interface DeleteCloudRunVersionsResponse {
  /** succ | fail | partial */
  Result?: string;
  /** 删除失败的版本列表 */
  FailVersions?: FailDeleteVersions[];
  /** 删除成功的版本列表 */
  SuccessVersions?: SuccessDeleteVersions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudRunDeployRecordRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
}

declare interface DescribeCloudRunDeployRecordResponse {
  /** 部署列表 */
  DeployRecords?: DeployRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudRunEnvsRequest {
  /** 环境ID，如果传了这个参数则只返回该环境的相关信息 */
  EnvId?: string;
  /** 指定Channels字段为可见渠道列表或不可见渠道列表如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"] */
  IsVisible?: boolean;
  /** 渠道列表，代表可见或不可见渠道由IsVisible参数指定 */
  Channels?: string[];
}

declare interface DescribeCloudRunEnvsResponse {
  /** 环境信息列表 */
  EnvList?: EnvInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudRunPodListRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 版本名 */
  VersionName?: string;
  /** 默认为10， 最大为50不传或传0时 取默认10大于50时取50 */
  PageSize?: number;
  /** 不传或传0时 会默认为1 */
  PageNum?: number;
}

declare interface DescribeCloudRunPodListResponse {
  /** pod实例列表 */
  PodList?: VersionPodInstance[];
  /** pod总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudRunProcessLogRequest {
  /** 环境 Id */
  EnvId: string;
  /** 操作 Id */
  RunId: string;
}

declare interface DescribeCloudRunProcessLogResponse {
  /** 运行日志列表 */
  Logs?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudRunServerDetailRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
}

declare interface DescribeCloudRunServerDetailResponse {
  /** 服务基本信息 */
  BaseInfo?: ServerBaseInfo;
  /** 服务配置信息 */
  ServerConfig?: ServerBaseConfig;
  /** 在线版本信息 */
  OnlineVersionInfos?: OnlineVersionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudRunServersRequest {
  /** 环境Id */
  EnvId: string;
  /** 默认为9， 最大为30不传或传0时 取默认9大于30时取30 */
  PageSize?: number;
  /** 不传或传0时 会默认为1 */
  PageNum?: number;
  /** 服务名 */
  ServerName?: string;
  /** 服务类型：function | container */
  ServerType?: string;
  /** vpcId */
  VpcId?: string;
}

declare interface DescribeCloudRunServersResponse {
  /** 服务列表 */
  ServerList?: ServerBaseInfo[];
  /** 服务总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvBaseInfoRequest {
  /** 环境 Id */
  EnvId: string;
}

declare interface DescribeEnvBaseInfoResponse {
  /** 环境基础信息 */
  EnvBaseInfo?: EnvBaseInfo;
  /** 是否存在 */
  IsExist?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseOrderRequest {
  /** 环境 Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 发布单状态 */
  Status?: string;
}

declare interface DescribeReleaseOrderResponse {
  /** 是否存在 */
  IsExist?: boolean;
  /** 发布单信息 */
  ReleaseOrderInfo?: ReleaseOrderInfo;
  /** 上一次成功发布时间 */
  LastReleasedSuccessTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerManageTaskRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 任务Id */
  TaskId: number;
  /** 操作标识 */
  OperatorRemark?: string;
}

declare interface DescribeServerManageTaskResponse {
  /** 是否存在 */
  IsExist?: boolean;
  /** 任务信息 */
  Task?: ServerManageTaskInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVersionDetailRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 版本名 */
  VersionName: string;
  /** channel */
  Channel?: string;
}

declare interface DescribeVersionDetailResponse {
  /** 版本名 */
  Name?: string;
  /** 端口号 */
  Port?: number;
  /** cpu 规格 */
  Cpu?: number;
  /** mem 规格 */
  Mem?: number;
  /** 最小副本数 */
  MinNum?: number;
  /** 最大副本数 */
  MaxNum?: number;
  /** 扩缩容策略 */
  PolicyDetails?: HpaPolicy[];
  /** Dockerfile path */
  Dockerfile?: string;
  /** 目标目录 */
  BuildDir?: string;
  /** 环境变量 */
  EnvParams?: string;
  /** 状态 */
  Status?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  UpdatedTime?: string;
  /** 日志采集路径 */
  LogPath?: string;
  /** entryPoint */
  EntryPoint?: string | null;
  /** Cmd */
  Cmd?: string | null;
  /** vpc conf */
  VpcConf?: VpcConf | null;
  /** volume conf */
  VolumesConf?: VolumeConf[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OperateServerManageRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 任报Id */
  TaskId: number;
  /** 操作类型:cancel | go_back | done */
  OperateType: string;
  /** 操作标识 */
  OperatorRemark?: string;
}

declare interface OperateServerManageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseGrayRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 灰度类型 */
  GrayType: string;
  /** 流量类型 */
  TrafficType: string;
  /** 流量策略 */
  VersionFlowItems?: VersionFlowInfo[];
  /** 操作标识 */
  OperatorRemark?: string;
  /** 流量比例 */
  GrayFlowRatio?: number;
}

declare interface ReleaseGrayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchClsLogRequest {
  /** 环境Id */
  EnvId: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
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
  /** 日志类型 */
  LogType?: number;
}

declare interface SearchClsLogResponse {
  /** 日志内容结果 */
  LogResults?: LogResObject;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitServerRollbackRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 当前版本 */
  CurrentVersionName: string;
  /** 回滚版本 */
  RollbackVersionName: string;
  /** 操作标识 */
  OperatorRemark?: string;
}

declare interface SubmitServerRollbackResponse {
  /** 任务Id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCloudRunServerRequest {
  /** 环境Id */
  EnvId: string;
  /** 服务名 */
  ServerName: string;
  /** 部署信息 */
  DeployInfo: DeployParam;
  /** 服务配置信息(已废弃) */
  ServerConfig?: ServerBaseConfig;
  /** 业务类型，默认tcr */
  Business?: string;
  /** 服务配置信息 */
  Items?: DiffConfigItem[];
}

declare interface UpdateCloudRunServerResponse {
  /** 环境Id */
  EnvId?: string;
  /** 一键部署任务Id，暂时用不到 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcbr 云托管 CloudBase Run} */
declare interface Tcbr {
  (): Versions;
  /** 创建环境 {@link CreateCloudRunEnvRequest} {@link CreateCloudRunEnvResponse} */
  CreateCloudRunEnv(data: CreateCloudRunEnvRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudRunEnvResponse>;
  /** 创建云托管服务 {@link CreateCloudRunServerRequest} {@link CreateCloudRunServerResponse} */
  CreateCloudRunServer(data: CreateCloudRunServerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudRunServerResponse>;
  /** 删除云托管服务 {@link DeleteCloudRunServerRequest} {@link DeleteCloudRunServerResponse} */
  DeleteCloudRunServer(data: DeleteCloudRunServerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudRunServerResponse>;
  /** 批量删除版本 {@link DeleteCloudRunVersionsRequest} {@link DeleteCloudRunVersionsResponse} */
  DeleteCloudRunVersions(data: DeleteCloudRunVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudRunVersionsResponse>;
  /** 查询云托管部署记录 {@link DescribeCloudRunDeployRecordRequest} {@link DescribeCloudRunDeployRecordResponse} */
  DescribeCloudRunDeployRecord(data: DescribeCloudRunDeployRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunDeployRecordResponse>;
  /** 查询云托管环境列表 {@link DescribeCloudRunEnvsRequest} {@link DescribeCloudRunEnvsResponse} */
  DescribeCloudRunEnvs(data?: DescribeCloudRunEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunEnvsResponse>;
  /** 查询云托管Pod实例列表接口 {@link DescribeCloudRunPodListRequest} {@link DescribeCloudRunPodListResponse} */
  DescribeCloudRunPodList(data: DescribeCloudRunPodListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunPodListResponse>;
  /** 查询运行日志 {@link DescribeCloudRunProcessLogRequest} {@link DescribeCloudRunProcessLogResponse} */
  DescribeCloudRunProcessLog(data: DescribeCloudRunProcessLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunProcessLogResponse>;
  /** 查询云托管服务详情 {@link DescribeCloudRunServerDetailRequest} {@link DescribeCloudRunServerDetailResponse} */
  DescribeCloudRunServerDetail(data: DescribeCloudRunServerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunServerDetailResponse>;
  /** 查询云托管服务列表 {@link DescribeCloudRunServersRequest} {@link DescribeCloudRunServersResponse} */
  DescribeCloudRunServers(data: DescribeCloudRunServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunServersResponse>;
  /** 查询环境基础信息 {@link DescribeEnvBaseInfoRequest} {@link DescribeEnvBaseInfoResponse} */
  DescribeEnvBaseInfo(data: DescribeEnvBaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvBaseInfoResponse>;
  /** 查询发布单 {@link DescribeReleaseOrderRequest} {@link DescribeReleaseOrderResponse} */
  DescribeReleaseOrder(data: DescribeReleaseOrderRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseOrderResponse>;
  /** 查询服务管理任务信息 {@link DescribeServerManageTaskRequest} {@link DescribeServerManageTaskResponse} */
  DescribeServerManageTask(data: DescribeServerManageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerManageTaskResponse>;
  /** 查询版本详情 {@link DescribeVersionDetailRequest} {@link DescribeVersionDetailResponse} */
  DescribeVersionDetail(data: DescribeVersionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVersionDetailResponse>;
  /** 操作发布单 {@link OperateServerManageRequest} {@link OperateServerManageResponse} */
  OperateServerManage(data: OperateServerManageRequest, config?: AxiosRequestConfig): AxiosPromise<OperateServerManageResponse>;
  /** 灰度发布 {@link ReleaseGrayRequest} {@link ReleaseGrayResponse} */
  ReleaseGray(data: ReleaseGrayRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseGrayResponse>;
  /** 查询日志cls日志信息 {@link SearchClsLogRequest} {@link SearchClsLogResponse} */
  SearchClsLog(data: SearchClsLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClsLogResponse>;
  /** 回滚版本 {@link SubmitServerRollbackRequest} {@link SubmitServerRollbackResponse} */
  SubmitServerRollback(data: SubmitServerRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitServerRollbackResponse>;
  /** 更新云托管服务 {@link UpdateCloudRunServerRequest} {@link UpdateCloudRunServerResponse} */
  UpdateCloudRunServer(data: UpdateCloudRunServerRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCloudRunServerResponse>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeArchitectureType(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudRunPeeringConnectionQuota(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStableIP(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RecoverEnv(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
}

export declare type Versions = ["2022-02-17"];

export default Tcbr;
