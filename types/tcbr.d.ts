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

/** 在线版本信息 */
declare interface OnlineVersionInfo {
  /** 版本名 */
  VersionName?: string;
  /** 镜像url */
  ImageUrl?: string;
  /** 流量 */
  FlowRatio?: string;
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
}

declare interface CreateCloudRunServerResponse {
  /** 一键部署任务Id，微信云托管，暂时用不到 */
  TaskId?: number;
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
  /** 查询云托管环境列表 {@link DescribeCloudRunEnvsRequest} {@link DescribeCloudRunEnvsResponse} */
  DescribeCloudRunEnvs(data?: DescribeCloudRunEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunEnvsResponse>;
  /** 查询云托管服务详情 {@link DescribeCloudRunServerDetailRequest} {@link DescribeCloudRunServerDetailResponse} */
  DescribeCloudRunServerDetail(data: DescribeCloudRunServerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunServerDetailResponse>;
  /** 查询云托管服务列表 {@link DescribeCloudRunServersRequest} {@link DescribeCloudRunServersResponse} */
  DescribeCloudRunServers(data: DescribeCloudRunServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRunServersResponse>;
  /** 查询环境基础信息 {@link DescribeEnvBaseInfoRequest} {@link DescribeEnvBaseInfoResponse} */
  DescribeEnvBaseInfo(data: DescribeEnvBaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvBaseInfoResponse>;
  /** 查询服务管理任务信息 {@link DescribeServerManageTaskRequest} {@link DescribeServerManageTaskResponse} */
  DescribeServerManageTask(data: DescribeServerManageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerManageTaskResponse>;
  /** 操作发布单 {@link OperateServerManageRequest} {@link OperateServerManageResponse} */
  OperateServerManage(data: OperateServerManageRequest, config?: AxiosRequestConfig): AxiosPromise<OperateServerManageResponse>;
  /** 灰度发布 {@link ReleaseGrayRequest} {@link ReleaseGrayResponse} */
  ReleaseGray(data: ReleaseGrayRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseGrayResponse>;
  /** 更新云托管服务 {@link UpdateCloudRunServerRequest} {@link UpdateCloudRunServerResponse} */
  UpdateCloudRunServer(data: UpdateCloudRunServerRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCloudRunServerResponse>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudRunServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudRunVersions(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
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
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SearchClsLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
}

export declare type Versions = ["2022-02-17"];

export default Tcbr;
