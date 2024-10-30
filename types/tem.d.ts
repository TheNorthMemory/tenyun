/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 弹性伸缩策略组合 */
declare interface Autoscaler {
  /** 弹性伸缩最小实例数 */
  MinReplicas: number;
  /** 弹性伸缩最大实例数 */
  MaxReplicas: number;
  /** 指标弹性伸缩策略(指标策略和定时策略必须填写一个) */
  HorizontalAutoscaler?: HorizontalAutoscaler[] | null;
  /** 定时弹性伸缩策略(指标策略和定时策略必须填写一个) */
  CronHorizontalAutoscaler?: CronHorizontalAutoscaler[] | null;
  /** 弹性伸缩ID */
  AutoscalerId?: string | null;
  /** 弹性伸缩名称 */
  AutoscalerName?: string | null;
  /** 弹性伸缩描述 */
  Description?: string | null;
  /** 创建日期 */
  CreateDate?: string | null;
  /** 修改时间 */
  ModifyDate?: string | null;
  /** 启用时间 */
  EnableDate?: string | null;
  /** 是否启用 */
  Enabled?: boolean | null;
}

/** 配置 */
declare interface ConfigData {
  /** 配置名称 */
  Name: string;
  /** 创建时间 */
  CreateTime: string;
  /** 关联的服务列表 */
  RelatedApplications: TemService[];
  /** 配置条目 */
  Data: Pair[];
}

/** Cos token */
declare interface CosToken {
  /** 唯一请求 ID */
  RequestId: string;
  /** 存储桶桶名 */
  Bucket: string;
  /** 存储桶所在区域 */
  Region: string;
  /** 临时密钥的SecretId */
  TmpSecretId: string;
  /** 临时密钥的SecretKey */
  TmpSecretKey: string;
  /** 临时密钥的 sessionToken */
  SessionToken: string;
  /** 临时密钥获取的开始时间 */
  StartTime: string;
  /** 临时密钥的 expiredTime */
  ExpiredTime: string;
  /** 包完整路径 */
  FullPath: string;
}

/** 定时伸缩策略 */
declare interface CronHorizontalAutoscaler {
  /** 定时伸缩策略名称 */
  Name?: string;
  /** 策略周期* * *，三个范围，第一个是天，第二个是月，第三个是周，中间用空格隔开例子：* * * （每天）* * 0-3 （每周日到周三）1,11,21 * *（每个月1号，11号，21号） */
  Period?: string;
  /** 定时伸缩策略明细 */
  Schedules?: CronHorizontalAutoscalerSchedule[];
  /** 是否启用 */
  Enabled?: boolean;
  /** 策略优先级，值越大优先级越高，0为最小值 */
  Priority?: number;
}

/** 定时伸缩策略明细 */
declare interface CronHorizontalAutoscalerSchedule {
  /** 触发事件，小时分钟，用:分割例如00:00（零点零分触发） */
  StartAt: string;
  /** 目标实例数（不大于50） */
  TargetReplicas?: number | null;
}

/** 分批发布单批次详情 */
declare interface DeployServiceBatchDetail {
  /** 旧实例列表 */
  OldPodList?: DeployServicePodDetail | null;
  /** 新实例列表 */
  NewPodList?: DeployServicePodDetail | null;
  /** 当前批次状态："WaitForTimeExceed", "WaitForResume", "Deploying", "Finish", "NotStart" */
  BatchStatus?: string | null;
  /** 该批次预计旧实例数量 */
  PodNum?: number | null;
  /** 批次id */
  BatchIndex?: number | null;
  /** 旧实例列表 */
  OldPods?: DeployServicePodDetail[] | null;
  /** 新实例列表 */
  NewPods?: DeployServicePodDetail[] | null;
  /** =0：手动确认批次；>0：下一批次开始时间戳 */
  NextBatchStartTime?: number | null;
}

/** 分批发布单批次详情 */
declare interface DeployServicePodDetail {
  /** pod Id */
  PodId?: string | null;
  /** pod状态 */
  PodStatus?: string[] | null;
  /** pod版本 */
  PodVersion?: string | null;
  /** pod创建时间 */
  CreateTime?: string | null;
  /** pod所在可用区 */
  Zone?: string | null;
  /** webshell地址 */
  Webshell?: string | null;
  /** 状态 */
  Status?: string | null;
}

/** 分批发布策略配置 */
declare interface DeployStrategyConf {
  /** 总分批数 */
  TotalBatchCount?: number;
  /** beta分批实例数 */
  BetaBatchNum?: number;
  /** 分批策略：0-全自动，1-全手动，2-beta分批，beta批一定是手动的，3-首次发布 */
  DeployStrategyType?: number;
  /** 每批暂停间隔 */
  BatchInterval?: number;
  /** 最小可用实例数 */
  MinAvailable?: number;
  /** 是否强制发布 */
  Force?: boolean;
}

/** 配置信息的分页列表 */
declare interface DescribeConfigDataListPage {
  /** 记录 */
  Records: ConfigData[];
  /** 分页游标，用以查询下一页 */
  ContinueToken: string | null;
  /** 剩余数目 */
  RemainingCount: number | null;
}

/** 版本pod列表 */
declare interface DescribeRunPodPage {
  /** 分页下标 */
  Offset: number;
  /** 单页条数 */
  Limit: number;
  /** 总数 */
  TotalCount: number;
  /** 请求id */
  RequestId: string;
  /** 条目 */
  PodList: RunVersionPod[];
}

/** eks service info */
declare interface EksService {
  /** service name */
  Name?: string;
  /** 可用端口 */
  Ports?: number[];
  /** yaml 内容 */
  Yaml?: string;
  /** 服务名 */
  ApplicationName?: string | null;
  /** 版本名 */
  VersionName?: string | null;
  /** 内网ip */
  ClusterIp?: string[] | null;
  /** 外网ip */
  ExternalIp?: string | null;
  /** 访问类型，可选值：- EXTERNAL（公网访问）- VPC（vpc内访问）- CLUSTER（集群内访问） */
  Type?: string | null;
  /** 子网ID，只在类型为vpc访问时才有值 */
  SubnetId?: string | null;
  /** 负载均衡ID，只在外网访问和vpc内访问才有值，默认自动创建 */
  LoadBalanceId?: string | null;
  /** 端口映射 */
  PortMappings?: PortMapping[] | null;
  /** 每种类型访问配置详情 */
  ServicePortMappingList?: ServicePortMapping[] | null;
  /** 刷新复写所有类型 */
  FlushAll?: boolean | null;
  /** 1: 下次部署自动注入注册中心信息；0：不注入 */
  EnableRegistryNextDeploy?: number | null;
  /** 返回应用id */
  ApplicationId?: string | null;
  /** 所有服务IP是否已经ready */
  AllIpDone?: boolean | null;
  /** clb 域名 */
  ExternalDomain?: string | null;
}

/** 开启prometheus监控配置 */
declare interface EnablePrometheusConf {
  /** 应用开放的监听端口 */
  Port?: number;
  /** 业务指标暴露的url path */
  Path?: string;
}

/** 弹性伸缩配置 */
declare interface EsInfo {
  /** 最小实例数 */
  MinAliveInstances: number;
  /** 最大实例数 */
  MaxAliveInstances: number;
  /** 弹性策略,1:cpu，2:内存 */
  EsStrategy: number;
  /** 弹性扩缩容条件值 */
  Threshold: number;
  /** 版本Id */
  VersionId?: string;
}

/** 健康检查配置 */
declare interface HealthCheckConfig {
  /** 支持的健康检查类型，如 HttpGet，TcpSocket，Exec */
  Type: string;
  /** 仅当健康检查类型为 HttpGet 时有效，表示协议类型，如 HTTP，HTTPS */
  Protocol?: string;
  /** 仅当健康检查类型为 HttpGet 时有效，表示请求路径 */
  Path?: string;
  /** 仅当健康检查类型为 Exec 时有效，表示执行的脚本内容 */
  Exec?: string;
  /** 仅当健康检查类型为 HttpGet\TcpSocket 时有效，表示请求路径 */
  Port?: number;
  /** 检查延迟开始时间，单位为秒，默认为 0 */
  InitialDelaySeconds?: number;
  /** 超时时间，单位为秒，默认为 1 */
  TimeoutSeconds?: number;
  /** 间隔时间，单位为秒，默认为 10 */
  PeriodSeconds?: number;
}

/** 弹性伸缩策略 */
declare interface HorizontalAutoscaler {
  /** 最小实例数（可以不传） */
  MinReplicas?: number;
  /** 最大实例数（可以不传） */
  MaxReplicas?: number;
  /** 指标度量CPU（CPU使用率，%）MEMORY（内存使用率，%）CPU_CORE_USED（CPU使用量，core）MEMORY_SIZE_USED(内存使用量，MiB)NETWORK_BANDWIDTH_RECEIVE(网络入带宽，MBps)NETWORK_BANDWIDTH_TRANSMIT(网络出带宽，MBps)NETWORK_TRAFFIC_RECEIVE(网络入流量，MiB/s)NETWORK_TRAFFIC_TRANSMIT(网络出流量，MiB/s)NETWORK_PACKETS_RECEIVE(网络入包量，Count/s)NETWORK_PACKETS_TRANSMIT(网络出包量，Count/s)FS_IOPS_WRITE(磁盘写次数，Count/s)FS_IOPS_READ(磁盘读次数，Count/s)FS_SIZE_WRITE(磁盘写大小，MiB/s)FS_SIZE_READ(磁盘读大小，MiB/s) */
  Metrics?: string;
  /** 阈值（整数） */
  Threshold?: number;
  /** 是否启用 */
  Enabled?: boolean;
  /** 阈值（小数，优先使用） */
  DoubleThreshold?: number | null;
}

/** Ingress 配置 */
declare interface IngressInfo {
  /** 环境ID */
  EnvironmentId: string | null;
  /** 环境namespace */
  ClusterNamespace: string;
  /** ip version */
  AddressIPVersion: string;
  /** ingress name */
  IngressName: string;
  /** rules 配置 */
  Rules: IngressRule[];
  /** clb ID */
  ClbId?: string | null;
  /** tls 配置 */
  Tls?: IngressTls[] | null;
  /** 环境集群ID */
  ClusterId?: string | null;
  /** clb ip */
  Vip?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 是否混合 https，默认 false，可选值 true 代表有 https 协议监听 */
  Mixed?: boolean;
  /** 重定向模式，可选值：- AUTO（自动重定向http到https）- NONE（不使用重定向） */
  RewriteType?: string | null;
  /** clb 域名 */
  Domain?: string | null;
}

/** ingress rule 配置 */
declare interface IngressRule {
  /** ingress rule value */
  Http: IngressRuleValue;
  /** host 地址 */
  Host?: string | null;
  /** 协议，选项为 http， https，默认为 http */
  Protocol?: string;
}

/** Ingress 规则 backend 配置 */
declare interface IngressRuleBackend {
  /** eks service 名 */
  ServiceName: string;
  /** eks service 端口 */
  ServicePort: number;
}

/** Ingress Rule Path 配置 */
declare interface IngressRulePath {
  /** path 信息 */
  Path: string;
  /** backend 配置 */
  Backend: IngressRuleBackend;
}

/** Ingress Rule Value 配置 */
declare interface IngressRuleValue {
  /** rule 整体配置 */
  Paths: IngressRulePath[];
}

/** ingress tls 配置 */
declare interface IngressTls {
  /** host 数组, 空数组表示全部域名的默认证书 */
  Hosts: string[];
  /** secret name，如使用证书，则填空字符串 */
  SecretName: string;
  /** SSL Certificate Id */
  CertificateId?: string;
}

/** 日志收集配置 */
declare interface LogConfig {
  /** 名称 */
  Name?: string;
  /** 收集类型，container_stdout 为标准输出；container_file 为文件； */
  InputType?: string;
  /** 日志集 ID */
  LogsetId?: string | null;
  /** 日志主题 ID */
  TopicId?: string | null;
  /** 日志提取模式，minimalist_log 为单行全文；multiline_log 为多行全文； fullregex_log 为单行正则； multiline_fullregex_log 为多行正则； json_log 为 json； */
  LogType?: string;
  /** 首行正则表达式，当 LogType 为多行全文、多行正则时生效 */
  BeginningRegex?: string | null;
  /** 收集文件目录，当 InputType=container_file 时生效 */
  LogPath?: string | null;
  /** 收集文件名模式，当 InputType=container_file 时生效 */
  FilePattern?: string | null;
  /** 创建时间 */
  CreateDate?: string | null;
  /** 更新时间 */
  ModifyDate?: string | null;
  /** 应用 ID */
  ApplicationId?: string | null;
  /** 应用名 */
  ApplicationName?: string | null;
  /** 导出规则 */
  ExtractRule?: LogConfigExtractRule | null;
}

/** 日志采集的导出规则配置 */
declare interface LogConfigExtractRule {
  /** 首行正则表达式 */
  BeginningRegex?: string | null;
  /** 提取结果 */
  Keys?: string[] | null;
  /** 过滤键 */
  FilterKeys?: string[] | null;
  /** 过滤值 */
  FilterRegex?: string[] | null;
  /** 日志正则表达式 */
  LogRegex?: string | null;
  /** 时间字段 */
  TimeKey?: string | null;
  /** 时间格式 */
  TimeFormat?: string | null;
  /** 是否上传解析失败日志 */
  UnMatchUpload?: string | null;
  /** 解析失败日志的键名称 */
  UnMatchedKey?: string | null;
  /** tracking */
  Backtracking?: string | null;
  /** 分隔符 */
  Delimiter?: string | null;
}

/** LogConfig 列表结果 */
declare interface LogConfigListPage {
  /** 记录 */
  Records: LogConfig[] | null;
  /** 翻页游标 */
  ContinueToken: string | null;
}

/** 日志输出配置 */
declare interface LogOutputConf {
  /** 日志消费端类型 */
  OutputType: string;
  /** cls日志集 */
  ClsLogsetName?: string;
  /** cls日志主题 */
  ClsLogTopicId?: string;
  /** cls日志集id */
  ClsLogsetId?: string;
  /** cls日志名称 */
  ClsLogTopicName?: string;
}

/** 挂载配置信息 */
declare interface MountedSettingConf {
  /** 配置名称 */
  ConfigDataName: string | null;
  /** 挂载路径 */
  MountedPath: string | null;
  /** 配置内容 */
  Data?: Pair[] | null;
  /** 加密配置名称 */
  SecretDataName?: string | null;
}

/** Namespace 基础信息 */
declare interface NamespaceInfo {
  /** ID 信息 */
  EnvironmentId: string;
  /** 名字（已弃用） */
  NamespaceName: string;
  /** 地域 */
  Region: string;
  /** vpc id */
  VpcId: string;
  /** subnet id 数组 */
  SubnetIds: string[];
  /** 描述 */
  Description: string;
  /** 创建时间 */
  CreatedDate: string;
  /** 环境名称 */
  EnvironmentName: string | null;
  /** APM 资源 ID */
  ApmInstanceId: string | null;
  /** 环境是否上锁，1为上锁，0则未上锁 */
  Locked: number | null;
  /** 标签 */
  Tags: Tag[] | null;
  /** 环境类型：test、pre、prod */
  EnvType: string | null;
}

/** 命名空间分页 */
declare interface NamespacePage {
  /** 分页内容 */
  Records: TemNamespaceInfo[];
  /** 总数 */
  Total: number;
  /** 条目数 */
  Size: number;
  /** 页数 */
  Pages: number;
  /** 当前条目 */
  Current: number | null;
}

/** 命名空间状态 */
declare interface NamespaceStatusInfo {
  /** 命名空间id */
  EnvironmentId: string;
  /** 命名空间名称 */
  EnvironmentName: string;
  /** TCB envId | EKS clusterId */
  ClusterId?: string;
  /** 环境状态 */
  ClusterStatus?: string;
  /** 环境启动状态（不在启动中为null） */
  EnvironmentStartingStatus?: TemEnvironmentStartingStatus | null;
  /** 环境停止状态（不在停止中为null） */
  EnvironmentStoppingStatus?: TemEnvironmentStoppingStatus | null;
}

/** node信息 */
declare interface NodeInfo {
  /** node名字 */
  Name: string;
  /** node可用区 */
  Zone: string | null;
  /** node子网ID */
  SubnetId: string | null;
  /** 可用IP数 */
  AvailableIpCount: string | null;
  /** cidr块 */
  Cidr: string | null;
}

/** 键值对 */
declare interface Pair {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
  /** 类型，default 为自定义，reserved 为系统变量，referenced 为引用配置项 */
  Type?: string | null;
  /** 配置名称 */
  Config?: string | null;
  /** 加密配置名称 */
  Secret?: string | null;
}

/** 服务端口映射 */
declare interface PortMapping {
  /** 端口 */
  Port: number;
  /** 映射端口 */
  TargetPort: number;
  /** 协议栈 TCP/UDP */
  Protocol: string;
  /** k8s service名称 */
  ServiceName?: string;
}

/** 查询过滤器 */
declare interface QueryFilter {
  /** 查询字段名称 */
  Name?: string;
  /** 查询字段值 */
  Value?: string[];
}

/** 应用实例 */
declare interface RunVersionPod {
  /** shell地址 */
  Webshell: string;
  /** pod的id */
  PodId: string;
  /** 状态 */
  Status: string;
  /** 创建时间 */
  CreateTime: string;
  /** 实例的ip */
  PodIp: string;
  /** 可用区 */
  Zone: string | null;
  /** 部署版本 */
  DeployVersion: string | null;
  /** 重启次数 */
  RestartCount: number | null;
  /** pod是否就绪 */
  Ready: boolean | null;
  /** 容器状态 */
  ContainerState: string | null;
  /** 实例所在节点信息 */
  NodeInfo: NodeInfo | null;
  /** 启动时间 */
  StartTime: string | null;
  /** 是否健康 */
  Unhealthy: boolean | null;
  /** 不健康时的提示信息 */
  UnhealthyWarningMsg: string | null;
  /** 版本ID */
  VersionId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
}

/** 服务分页 */
declare interface ServicePage {
  /** 条目 */
  Records: TemService[];
  /** 总数 */
  Total: number;
  /** 条目 */
  Size: number;
  /** 页数 */
  Pages: number;
  /** 当前条数 */
  Current?: number | null;
}

/** 端口映射详细信息结构体 */
declare interface ServicePortMapping {
  /** 服务类型：如：EXTERNAL，VPC，CLUSTER */
  Type?: string | null;
  /** 服务名称 */
  ServiceName?: string | null;
  /** 集群内访问vip */
  ClusterIp?: string | null;
  /** 集群外方位vip */
  ExternalIp?: string | null;
  /** 子网id */
  SubnetId?: string | null;
  /** vpc id */
  VpcId?: string | null;
  /** LoadBalance Id */
  LoadBalanceId?: string | null;
  /** yaml 内容 */
  Yaml?: string | null;
  /** 暴露端口列表 */
  Ports?: number[] | null;
  /** 端口映射数组 */
  PortMappingItemList?: ServicePortMappingItem[] | null;
  /** clb domain */
  ExternalDomain?: string | null;
}

/** 服务端口映射条目 */
declare interface ServicePortMappingItem {
  /** 应用访问端口 */
  Port?: number | null;
  /** 应用监听端口 */
  TargetPort?: number | null;
  /** 协议类型 */
  Protocol?: string | null;
}

/** 服务版本信息列表 */
declare interface ServiceVersionBrief {
  /** 版本名称 */
  VersionName: string;
  /** 状态 */
  Status: string;
  /** 是否启动弹性 -- 已废弃 */
  EnableEs: number;
  /** 当前实例 */
  CurrentInstances: number;
  /** version的id */
  VersionId: string;
  /** 日志输出配置 -- 已废弃 */
  LogOutputConf: LogOutputConf | null;
  /** 期望实例 */
  ExpectedInstances: number | null;
  /** 部署方式 */
  DeployMode: string | null;
  /** 建构任务ID */
  BuildTaskId: string | null;
  /** 环境ID */
  EnvironmentId: string | null;
  /** 环境name */
  EnvironmentName: string | null;
  /** 服务ID */
  ApplicationId: string | null;
  /** 服务name */
  ApplicationName: string | null;
  /** 是否正在发布中 */
  UnderDeploying: boolean | null;
  /** 分批次部署状态 */
  BatchDeployStatus: string | null;
  /** 可用区 */
  Zones: string[] | null;
  /** 节点信息 */
  NodeInfos: NodeInfo[] | null;
  /** 实例信息 */
  PodList: DescribeRunPodPage | null;
  /** 工作负载信息 */
  WorkloadInfo: WorkloadInfo | null;
  /** 创建日期 */
  CreateDate: string | null;
  /** 地域id */
  RegionId?: string | null;
}

/** 查询过滤器 */
declare interface SortType {
  /** 排序字段名称 */
  Key?: string;
  /** 0：升序，1：倒序 */
  Type?: number;
}

/** 存储卷配置 */
declare interface StorageConf {
  /** 存储卷名称 */
  StorageVolName: string;
  /** 存储卷路径 */
  StorageVolPath: string;
  /** 存储卷IP */
  StorageVolIp?: string | null;
}

/** 数据卷挂载信息 */
declare interface StorageMountConf {
  /** 数据卷名 */
  VolumeName: string;
  /** 数据卷绑定路径 */
  MountPath: string;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  TagKey?: string | null;
  /** 标签值 */
  TagValue?: string | null;
}

/** 分批发布详情 */
declare interface TemDeployApplicationDetailInfo {
  /** 分批发布策略 */
  DeployStrategyConf: DeployStrategyConf | null;
  /** 开始时间 */
  StartTime: string | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 当前状态 */
  Status: string | null;
  /** beta分批详情 */
  BetaBatchDetail: DeployServiceBatchDetail | null;
  /** 其他分批详情 */
  OtherBatchDetail: DeployServiceBatchDetail[] | null;
  /** 老版本pod列表 */
  OldVersionPodList: DescribeRunPodPage | null;
  /** 当前批次id */
  CurrentBatchIndex: number | null;
  /** 错误原因 */
  ErrorMessage: string | null;
  /** 当前批次状态 */
  CurrentBatchStatus: string | null;
  /** 新版本version */
  NewDeployVersion: string | null;
  /** 旧版本version */
  OldDeployVersion: string | null;
  /** 包名称 */
  NewVersionPackageInfo: string | null;
  /** 下一批次开始时间 */
  NextBatchStartTime: number | null;
}

/** 环境启动进程（只统计由环境启动操作触发的应用数量） */
declare interface TemEnvironmentStartingStatus {
  /** 需要启动的应用数量 */
  ApplicationNumNeedToStart?: number | null;
  /** 已经启动的应用数量 */
  StartedApplicationNum?: number | null;
  /** 启动失败的应用数量 */
  StartFailedApplicationNum?: number | null;
}

/** 环境停止进程（只统计由环境停止操作触发的应用数量） */
declare interface TemEnvironmentStoppingStatus {
  /** 需要停止的应用数量 */
  ApplicationNumNeedToStop?: number | null;
  /** 已经停止的应用数量 */
  StoppedApplicationNum?: number | null;
  /** 停止失败的应用数量 */
  StopFailedApplicationNum?: number | null;
}

/** 命名空间对象 */
declare interface TemNamespaceInfo {
  /** 环境id */
  EnvironmentId: string;
  /** 渠道 */
  Channel: string;
  /** 环境名称 */
  EnvironmentName: string;
  /** 区域名称 */
  Region: string;
  /** 环境描述 */
  Description: string | null;
  /** 状态,1:已销毁;0:正常 */
  Status: number;
  /** vpc网络 */
  Vpc: string;
  /** 创建时间 */
  CreateDate: string;
  /** 修改时间 */
  ModifyDate: string;
  /** 修改人 */
  Modifier: string;
  /** 创建人 */
  Creator: string;
  /** 应用数 */
  ApplicationNum: number;
  /** 运行实例数 */
  RunInstancesNum: number;
  /** 子网络 */
  SubnetId: string;
  /** 环境集群 status */
  ClusterStatus: string;
  /** 是否开启tsw */
  EnableTswTraceService: boolean;
  /** 环境锁，1为上锁，0则为上锁 */
  Locked: number;
  /** 用户AppId */
  AppId: string | null;
  /** 用户Uin */
  Uin: string | null;
  /** 用户SubAccountUin */
  SubAccountUin: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 标签 */
  Tags: Tag[] | null;
  /** 资源是否有权限 */
  HasAuthority: boolean | null;
  /** 环境类型: test、pre、prod */
  EnvType: string | null;
  /** 地域码 */
  RegionId: string | null;
}

/** 服务 */
declare interface TemService {
  /** 主键 */
  ApplicationId: string | null;
  /** 服务名 */
  ApplicationName: string | null;
  /** 描述 */
  Description: string | null;
  /** 命名空间id */
  EnvironmentId: string | null;
  /** 创建时间 */
  CreateDate: string | null;
  /** 修改时间 */
  ModifyDate: string | null;
  /** 修改人 */
  Modifier: string | null;
  /** 创建者 */
  Creator: string | null;
  /** tcr个人版or企业版 */
  RepoType: number | null;
  /** 企业版实例id */
  InstanceId: string | null;
  /** 镜像仓库名 */
  RepoName: string | null;
  /** 编程语言 */
  CodingLanguage: string | null;
  /** 部署方式 */
  DeployMode: string | null;
  /** 环境名称 */
  EnvironmentName: string | null;
  /** 服务当前运行环境的实例信息 */
  ActiveVersions: ServiceVersionBrief[] | null;
  /** 是否启用链路追踪 */
  EnableTracing: number | null;
  /** 标签 */
  Tags: Tag[] | null;
  /** 是否有资源权限 */
  HasAuthority: boolean | null;
}

/** 版本信息 */
declare interface TemServiceVersionInfo {
  /** 主键 */
  VersionId: string;
  /** 服务id */
  ApplicationId: string;
  /** 部署方式 */
  DeployMode: string;
  /** jdk版本 */
  JdkVersion: string;
  /** 描述 */
  Description: string;
  /** 部署版本 */
  DeployVersion: string;
  /** 发布方式 */
  PublishMode: string;
  /** 启动参数 */
  JvmOpts: string;
  /** 初始实例 */
  InitPodNum: number;
  /** cpu规格 */
  CpuSpec: number;
  /** 内存规格 */
  MemorySpec: number;
  /** 镜像路径 */
  ImgRepo: string;
  /** 镜像名称 */
  ImgName: string;
  /** 镜像版本 */
  ImgVersion: string;
  /** 弹性配置 */
  EsInfo: EsInfo | null;
  /** 环境配置 */
  EnvConf: Pair[];
  /** 存储配置 */
  StorageConfs: StorageConf[];
  /** 运行状态 */
  Status: string;
  /** 私有网络 */
  Vpc: string;
  /** 子网网络 */
  SubnetId: string;
  /** 创建时间 */
  CreateDate: string;
  /** 修改时间 */
  ModifyDate: string;
  /** 挂载配置 */
  StorageMountConfs: StorageMountConf[] | null;
  /** 版本名称 */
  VersionName: string | null;
  /** 日志输出配置 */
  LogOutputConf?: LogOutputConf | null;
  /** 服务名称 */
  ApplicationName?: string | null;
  /** 服务描述 */
  ApplicationDescription?: string | null;
  /** 环境名称 */
  EnvironmentName?: string | null;
  /** 环境ID */
  EnvironmentId?: string | null;
  /** 公网地址 */
  PublicDomain?: string | null;
  /** 是否开通公网访问 */
  EnablePublicAccess?: boolean | null;
  /** 现有的实例 */
  CurrentInstances?: number | null;
  /** 期望的实例 */
  ExpectedInstances?: number | null;
  /** 编程语言 */
  CodingLanguage?: string | null;
  /** 程序包名 */
  PkgName?: string | null;
  /** 是否启用弹性伸缩 */
  EsEnable?: number | null;
  /** 弹性策略 */
  EsStrategy?: number | null;
  /** 镜像tag */
  ImageTag?: string | null;
  /** 是否启用log */
  LogEnable?: number | null;
  /** 最小实例数 */
  MinAliveInstances?: string | null;
  /** 安全组 */
  SecurityGroupIds?: string[] | null;
  /** 镜像命令 */
  ImageCommand?: string | null;
  /** 镜像命令参数 */
  ImageArgs?: string[] | null;
  /** 是否使用默认注册中心配置 */
  UseRegistryDefaultConfig?: boolean | null;
  /** eks 访问设置 */
  Service?: EksService | null;
  /** 挂载配置信息 */
  SettingConfs?: MountedSettingConf[] | null;
  /** log path数组信息 */
  LogConfs?: string[] | null;
  /** 启动后立即执行的脚本 */
  PostStart?: string | null;
  /** 停止前执行的脚本 */
  PreStop?: string | null;
  /** 存活探针配置 */
  Liveness?: HealthCheckConfig | null;
  /** 就绪探针配置 */
  Readiness?: HealthCheckConfig | null;
  /** 弹性策略 */
  HorizontalAutoscaler?: HorizontalAutoscaler[] | null;
  /** 定时弹性策略 */
  CronHorizontalAutoscaler?: CronHorizontalAutoscaler[] | null;
  /** 应用实际可用区 */
  Zones?: string[] | null;
  /** 最新部署时间 */
  LastDeployDate?: string | null;
  /** 最新部署成功时间 */
  LastDeploySuccessDate?: string | null;
  /** 应用所在node信息 */
  NodeInfos?: NodeInfo[] | null;
  /** image类型 -0 为demo -1为正常image */
  ImageType?: number | null;
  /** 是否启用调用链组件 */
  EnableTracing?: number | null;
  /** 是否开启调用链上报，只有 EnableTracing=1 时生效（参数已弃用） */
  EnableTracingReport?: number | null;
  /** 镜像类型：0-个人镜像、1-企业镜像、2-公有镜像 */
  RepoType?: number | null;
  /** 分批发布子状态：batch_updating、batch_updating_waiting_confirm */
  BatchDeployStatus?: string | null;
  /** APM 资源 ID */
  ApmInstanceId?: string | null;
  /** 工作负载信息 */
  WorkloadInfo?: WorkloadInfo | null;
  /** 是否启用应用加速 */
  SpeedUp?: boolean | null;
  /** 启动检测探针配置 */
  StartupProbe?: HealthCheckConfig | null;
  /** 操作系统版本，可选参数：- ALPINE- CENTOS */
  OsFlavour?: string | null;
  /** 镜像仓库server */
  RepoServer?: string | null;
  /** 是否正在发布中 */
  UnderDeploying?: boolean | null;
  /** 监控业务指标监控 */
  EnablePrometheusConf?: EnablePrometheusConf | null;
  /** 是否为手动停止 */
  StoppedManually?: boolean | null;
  /** tcr实例ID */
  TcrInstanceId?: string | null;
  /** 1：开始自动metrics采集（open-telemetry）；0：关闭metrics采集； */
  EnableMetrics?: number | null;
  /** 用户AppId */
  AppId?: string | null;
  /** 用户SubAccountUin */
  SubAccountUin?: string | null;
  /** 用户Uin */
  Uin?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 应用分组ID */
  GroupId?: string | null;
  /** 是否启用注册中心 */
  EnableRegistry?: number | null;
  /** 弹性伸缩数组 */
  AutoscalerList?: Autoscaler[] | null;
  /** 修改人 */
  Modifier?: string | null;
  /** 创建人 */
  Creator?: string | null;
  /** 部署策略 */
  DeployStrategyConf?: DeployStrategyConf | null;
  /** 实例列表 */
  PodList?: DescribeRunPodPage | null;
  /** 发布时配置是否有修改 */
  ConfEdited?: boolean | null;
  /** 标签 */
  Tags?: Tag[] | null;
  /** 是否编码 */
  PreStopEncoded?: string | null;
  /** 是否编码 */
  PostStartEncoded?: string | null;
}

/** 创建应用，创建仓库参数 */
declare interface UseDefaultRepoParameters {
  /** 企业版实例名 */
  EnterpriseInstanceName?: string | null;
  /** 企业版收费类型 0 按量收费 1 包年包月 */
  EnterpriseInstanceChargeType?: number | null;
  /** 企业版规格：basic-基础班 ，standard-标准版，premium-高级版 */
  EnterpriseInstanceType?: string | null;
}

/** 工作负载详情 */
declare interface WorkloadInfo {
  /** 资源 ID */
  ClusterId: string | null;
  /** 应用名 */
  ApplicationName: string | null;
  /** 版本名称 */
  VersionName: string | null;
  /** Ready实例数 */
  ReadyReplicas: number | null;
  /** 实例数 */
  Replicas: number | null;
  /** Updated实例数 */
  UpdatedReplicas: number | null;
  /** UpdatedReady实例数 */
  UpdatedReadyReplicas: number | null;
  /** 更新版本 */
  UpdateRevision: string | null;
  /** 当前版本 */
  CurrentRevision: string | null;
}

declare interface CreateApplicationAutoscalerRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 弹性伸缩策略 */
  Autoscaler?: Autoscaler;
}

declare interface CreateApplicationAutoscalerResponse {
  /** 弹性伸缩策略组合ID */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationRequest {
  /** 应用名 */
  ApplicationName: string;
  /** 描述 */
  Description: string;
  /** 是否使用默认镜像服务 1-是，0-否 */
  UseDefaultImageService?: number;
  /** 如果是绑定仓库，绑定的仓库类型，0-个人版，1-企业版 */
  RepoType?: number;
  /** 企业版镜像服务的实例id */
  InstanceId?: string;
  /** 绑定镜像服务器地址 */
  RepoServer?: string;
  /** 绑定镜像仓库名 */
  RepoName?: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 应用所在子网 */
  SubnetList?: string[];
  /** 编程语言 - JAVA- OTHER */
  CodingLanguage?: string;
  /** 部署方式 - IMAGE- JAR- WAR */
  DeployMode?: string;
  /** 是否开启 Java 应用的 APM 自动上报功能，1 表示启用；0 表示关闭 */
  EnableTracing?: number;
  /** 使用默认镜像服务额外参数 */
  UseDefaultImageServiceParameters?: UseDefaultRepoParameters;
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreateApplicationResponse {
  /** 服务code */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationServiceRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 访问方式详情 */
  Service?: ServicePortMapping;
}

declare interface CreateApplicationServiceResponse {
  /** 是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigDataRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 配置信息 */
  Data?: Pair[];
}

declare interface CreateConfigDataResponse {
  /** 创建是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCosTokenRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 包名 */
  PkgName: string;
  /** optType 1上传 2查询 */
  OptType: number;
  /** 来源 channel */
  SourceChannel?: number;
  /** 充当deployVersion入参 */
  TimeVersion?: string;
}

declare interface CreateCosTokenResponse {
  /** 成功时为CosToken对象，失败为null */
  Result?: CosToken | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEnvironmentRequest {
  /** 环境名称 */
  EnvironmentName: string;
  /** 环境描述 */
  Description?: string;
  /** 私有网络名称 */
  Vpc?: string;
  /** 子网列表 */
  SubnetIds?: string[];
  /** K8s version */
  K8sVersion?: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 是否开启tsw服务 */
  EnableTswTraceService?: boolean;
  /** 标签 */
  Tags?: Tag[];
  /** 环境类型：test、pre、prod */
  EnvType?: string;
  /** 创建环境的region */
  CreateRegion?: string;
  /** 是否创建私有网络 */
  SetupVpc?: boolean;
  /** 是否创建 Prometheus 实例 */
  SetupPrometheus?: boolean;
  /** prometheus 实例 id */
  PrometheusId?: string;
  /** apm id */
  ApmId?: string;
}

declare interface CreateEnvironmentResponse {
  /** 成功时为环境ID，失败为null */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLogConfigRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 收集类型，container_stdout 为标准输出；container_file 为文件； */
  InputType: string;
  /** 应用 ID */
  ApplicationId?: string;
  /** 日志集 ID */
  LogsetId?: string;
  /** 日志主题 ID */
  TopicId?: string;
  /** 日志提取模式，minimalist_log 为单行全文；multiline_log 为多行全文；json_log 为 json格式；fullregex_log 为单行正则；multiline_fullregex_log 为多行正则 */
  LogType?: string;
  /** 首行正则表达式，当LogType=multiline_log 时生效 */
  BeginningRegex?: string;
  /** 收集文件目录，当 InputType=container_file 时生效 */
  LogPath?: string;
  /** 收集文件名模式，当 InputType=container_file 时生效 */
  FilePattern?: string;
  /** 导出规则 */
  ExtractRule?: LogConfigExtractRule;
}

declare interface CreateLogConfigResponse {
  /** 创建是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourceRequest {
  /** 环境 Id */
  EnvironmentId: string;
  /** 资源类型，目前支持文件系统：CFS；注册中心：TSE_SRE */
  ResourceType: string;
  /** 资源 Id */
  ResourceId?: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 资源来源，目前支持：existing，已有资源；creating，自动创建 */
  ResourceFrom?: string;
  /** 设置 resource 的额外配置 */
  ResourceConfig?: string;
}

declare interface CreateResourceResponse {
  /** 成功与否 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApplicationAutoscalerRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 弹性伸缩策略ID */
  AutoscalerId?: string;
}

declare interface DeleteApplicationAutoscalerResponse {
  /** 是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApplicationRequest {
  /** 服务Id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道(用户不需要关心此参数) */
  SourceChannel?: number;
  /** 当服务没有任何运行版本时，是否删除此服务 */
  DeleteApplicationIfNoRunningVersion?: boolean;
}

declare interface DeleteApplicationResponse {
  /** 返回结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApplicationServiceRequest {
  /** 服务id */
  ApplicationId?: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 环境ID */
  EnvironmentId?: string;
  /** 访问方式服务名 */
  ServiceName?: string;
}

declare interface DeleteApplicationServiceResponse {
  /** 是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIngressRequest {
  /** 环境ID */
  EnvironmentId: string;
  /** 环境 namespace */
  ClusterNamespace: string;
  /** ingress 规则名 */
  IngressName: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface DeleteIngressResponse {
  /** 是否删除成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployApplicationRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 初始化 pod 数 */
  InitPodNum: number;
  /** cpu规格 单位：核 */
  CpuSpec: number;
  /** 内存规格 单位：G */
  MemorySpec: number;
  /** 环境ID */
  EnvironmentId: string;
  /** 镜像仓库 */
  ImgRepo?: string;
  /** 版本描述信息 */
  VersionDesc?: string;
  /** 启动参数 */
  JvmOpts?: string;
  /** 弹性伸缩配置（已废弃，请使用HorizontalAutoscaler设置弹性策略） */
  EsInfo?: EsInfo;
  /** 环境变量配置 */
  EnvConf?: Pair[];
  /** 日志配置 */
  LogConfs?: string[];
  /** 数据卷配置 */
  StorageConfs?: StorageConf[];
  /** 数据卷挂载配置 */
  StorageMountConfs?: StorageMountConf[];
  /** 部署类型。- JAR：通过 jar 包部署- WAR：通过 war 包部署- IMAGE：通过镜像部署 */
  DeployMode?: string;
  /** 部署类型为 IMAGE 时，该参数表示镜像 tag。部署类型为 JAR/WAR 时，该参数表示包版本号。 */
  DeployVersion?: string;
  /** 传入内容为 /jar包名字 的形式。也就是在 jar包名字前增加一个/。如上传的 jar 包名字为 demo-1.0.0.jar，那么这里传入内容为：/demo-1.0.0.jar注：jar 包需要通过 tem 页面上传过，tem 后端才能拉到该 jar 包。 */
  PkgName?: string;
  /** JDK 版本。- KONA:8：使用 kona jdk 8。- OPEN:8：使用 open jdk 8。- KONA:11：使用 kona jdk 11。- OPEN:11：使用 open jdk 11。 */
  JdkVersion?: string;
  /** 安全组ID s */
  SecurityGroupIds?: string[];
  /** 日志输出配置 */
  LogOutputConf?: LogOutputConf;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 版本描述 */
  Description?: string;
  /** 镜像命令 */
  ImageCommand?: string;
  /** 镜像命令参数 */
  ImageArgs?: string[];
  /** 是否添加默认注册中心配置 */
  UseRegistryDefaultConfig?: boolean;
  /** 挂载配置信息 */
  SettingConfs?: MountedSettingConf[];
  /** 应用访问设置 */
  Service?: EksService;
  /** 要回滚到的历史版本id */
  VersionId?: string;
  /** 启动后执行的脚本 */
  PostStart?: string;
  /** 停止前执行的脚本 */
  PreStop?: string;
  /** 存活探针配置 */
  Liveness?: HealthCheckConfig;
  /** 就绪探针配置 */
  Readiness?: HealthCheckConfig;
  /** 分批发布策略配置 */
  DeployStrategyConf?: DeployStrategyConf;
  /** 弹性策略（已弃用，请使用弹性伸缩策略组合相关接口） */
  HorizontalAutoscaler?: HorizontalAutoscaler[];
  /** 定时弹性策略（已弃用，请使用弹性伸缩策略组合相关接口） */
  CronHorizontalAutoscaler?: CronHorizontalAutoscaler[];
  /** 是否启用log，1为启用，0为不启用 */
  LogEnable?: number;
  /** （除开镜像配置）配置是否修改 */
  ConfEdited?: boolean;
  /** 是否开启应用加速 */
  SpeedUp?: boolean;
  /** 启动探针配置 */
  StartupProbe?: HealthCheckConfig;
  /** 操作系统版本；当选择openjdk时，可选参数：- ALPINE- CENTOS当选择konajdk时，可选参数：- ALPINE- TENCENTOS */
  OsFlavour?: string;
  /** metrics业务指标监控配置 */
  EnablePrometheusConf?: EnablePrometheusConf;
  /** 1：开始自动apm采集（skywalking）；0：关闭apm采集； */
  EnableTracing?: number;
  /** 1：开始自动metrics采集（open-telemetry）；0：关闭metrics采集； */
  EnableMetrics?: number;
  /** 镜像部署时，选择的tcr实例id */
  TcrInstanceId?: string;
  /** 镜像部署时，选择的镜像服务器地址 */
  RepoServer?: string;
  /** 镜像部署时，仓库类型：0：个人仓库；1：企业版；2：公共仓库；3：tem托管仓库；4：demo仓库 */
  RepoType?: number;
  /** 启动后执行的脚本，base64 编码 */
  PostStartEncoded?: string;
  /** 停止前执行的脚本，base64 编码 */
  PreStopEncoded?: string;
}

declare interface DeployApplicationResponse {
  /** 版本ID（前端可忽略） */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationAutoscalerListRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface DescribeApplicationAutoscalerListResponse {
  /** 弹性伸缩策略组合 */
  Result?: Autoscaler[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationInfoRequest {
  /** 服务版本ID */
  ApplicationId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 环境ID */
  EnvironmentId?: string;
}

declare interface DescribeApplicationInfoResponse {
  /** 返回结果 */
  Result: TemServiceVersionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationPodsRequest {
  /** 环境id */
  EnvironmentId: string;
  /** 应用id */
  ApplicationId: string;
  /** 单页条数，默认值20 */
  Limit?: number;
  /** 分页下标，默认值0 */
  Offset?: number;
  /** 实例状态 - Running - Pending - Error */
  Status?: string;
  /** 实例名字 */
  PodName?: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface DescribeApplicationPodsResponse {
  /** 返回结果 */
  Result: DescribeRunPodPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationServiceListRequest {
  /** namespace id */
  EnvironmentId: string;
  /** 服务ID */
  ApplicationId: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface DescribeApplicationServiceListResponse {
  /** 应用 EKS Service 列表 */
  Result?: EksService;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationsRequest {
  /** 命名空间ID */
  EnvironmentId?: string;
  /** 分页Limit */
  Limit?: number;
  /** 分页offset */
  Offset?: number;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 服务id */
  ApplicationId?: string;
  /** 搜索关键字 */
  Keyword?: string;
  /** 查询过滤器 */
  Filters?: QueryFilter[];
  /** 排序字段 */
  SortInfo?: SortType;
}

declare interface DescribeApplicationsResponse {
  /** 返回结果 */
  Result: ServicePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationsStatusRequest {
  /** 来源渠道 */
  SourceChannel?: number;
  /** 环境ID */
  EnvironmentId?: string;
}

declare interface DescribeApplicationsStatusResponse {
  /** 返回结果 */
  Result?: ServiceVersionBrief[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigDataListRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 查询游标 */
  ContinueToken?: string;
  /** 分页 limit */
  Limit?: number;
}

declare interface DescribeConfigDataListResponse {
  /** 配置列表 */
  Result?: DescribeConfigDataListPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigDataRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface DescribeConfigDataResponse {
  /** 配置 */
  Result?: ConfigData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeployApplicationDetailRequest {
  /** 服务id */
  ApplicationId?: string;
  /** 环境id */
  EnvironmentId?: string;
  /** 版本部署id */
  VersionId?: string;
}

declare interface DescribeDeployApplicationDetailResponse {
  /** 分批发布结果详情 */
  Result: TemDeployApplicationDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentRequest {
  /** 命名空间id */
  EnvironmentId: string;
  /** 来源Channel */
  SourceChannel?: number;
}

declare interface DescribeEnvironmentResponse {
  /** 环境信息 */
  Result: NamespaceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentStatusRequest {
  /** 命名空间id */
  EnvironmentIds: string[];
  /** 来源Channel */
  SourceChannel?: number;
}

declare interface DescribeEnvironmentStatusResponse {
  /** 返回状态列表 */
  Result: NamespaceStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentsRequest {
  /** 分页limit */
  Limit?: number;
  /** 分页下标 */
  Offset?: number;
  /** 来源source */
  SourceChannel?: number;
  /** 查询过滤器 */
  Filters?: QueryFilter[];
  /** 排序字段 */
  SortInfo?: SortType;
  /** 环境id */
  EnvironmentId?: string;
}

declare interface DescribeEnvironmentsResponse {
  /** 返回结果 */
  Result: NamespacePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIngressRequest {
  /** 环境ID */
  EnvironmentId: string;
  /** 环境namespace */
  ClusterNamespace: string;
  /** ingress 规则名 */
  IngressName: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface DescribeIngressResponse {
  /** Ingress 规则配置 */
  Result: IngressInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIngressesRequest {
  /** 环境 id */
  EnvironmentId?: string;
  /** 环境 namespace */
  ClusterNamespace?: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** ingress 规则名列表 */
  IngressNames?: string[];
}

declare interface DescribeIngressesResponse {
  /** ingress 数组 */
  Result: IngressInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogConfigRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 应用 ID */
  ApplicationId?: string;
}

declare interface DescribeLogConfigResponse {
  /** 配置 */
  Result?: LogConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePagedLogConfigListRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 应用 ID */
  ApplicationId?: string;
  /** 应用名 */
  ApplicationName?: string;
  /** 规则名 */
  Name?: string;
  /** 分页大小，默认 20 */
  Limit?: number;
  /** 翻页游标 */
  ContinueToken?: string;
}

declare interface DescribePagedLogConfigListResponse {
  /** 日志收集配置列表 */
  Result: LogConfigListPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRelatedIngressesRequest {
  /** 环境 id */
  EnvironmentId?: string;
  /** 环境 namespace */
  ClusterNamespace?: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 应用 ID */
  ApplicationId?: string;
}

declare interface DescribeRelatedIngressesResponse {
  /** ingress 数组 */
  Result: IngressInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyConfigDataRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface DestroyConfigDataResponse {
  /** 返回结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyEnvironmentRequest {
  /** 命名空间ID */
  EnvironmentId: string;
  /** Namespace */
  SourceChannel?: number;
}

declare interface DestroyEnvironmentResponse {
  /** 返回结果 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyLogConfigRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 应用 ID */
  ApplicationId?: string;
}

declare interface DestroyLogConfigResponse {
  /** 返回结果 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableApplicationAutoscalerRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 弹性伸缩策略ID */
  AutoscalerId?: string;
}

declare interface DisableApplicationAutoscalerResponse {
  /** 是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableApplicationAutoscalerRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 弹性伸缩策略ID */
  AutoscalerId?: string;
}

declare interface EnableApplicationAutoscalerResponse {
  /** 是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateApplicationPackageDownloadUrlRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 包名 */
  PkgName: string;
  /** 需要下载的包版本 */
  DeployVersion: string;
  /** 来源 channel */
  SourceChannel?: number;
}

declare interface GenerateApplicationPackageDownloadUrlResponse {
  /** 包下载临时链接 */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationAutoscalerRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 弹性伸缩策略ID */
  AutoscalerId?: string;
  /** 弹性伸缩策略 */
  Autoscaler?: Autoscaler;
}

declare interface ModifyApplicationAutoscalerResponse {
  /** 是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationInfoRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 描述 */
  Description: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 是否开启调用链,（此参数已弃用） */
  EnableTracing?: number;
}

declare interface ModifyApplicationInfoResponse {
  /** 成功与否 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationReplicasRequest {
  /** 应用id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 实例数量 */
  Replicas: number;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface ModifyApplicationReplicasResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationServiceRequest {
  /** 服务id */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 全量访问方式设置 */
  Service?: EksService;
  /** 单条访问方式设置 */
  Data?: ServicePortMapping;
}

declare interface ModifyApplicationServiceResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConfigDataRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 配置信息 */
  Data?: Pair[];
}

declare interface ModifyConfigDataResponse {
  /** 编辑是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEnvironmentRequest {
  /** 环境id */
  EnvironmentId: string;
  /** 环境名称 */
  EnvironmentName?: string;
  /** 环境描述 */
  Description?: string;
  /** 私有网络名称 */
  Vpc?: string;
  /** 子网网络 */
  SubnetIds?: string[];
  /** 来源渠道 */
  SourceChannel?: number;
  /** 环境类型：test、pre、prod */
  EnvType?: string;
}

declare interface ModifyEnvironmentResponse {
  /** 成功时为环境ID，失败为null */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIngressRequest {
  /** Ingress 规则配置 */
  Ingress: IngressInfo;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface ModifyIngressResponse {
  /** 创建成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLogConfigRequest {
  /** 环境 ID */
  EnvironmentId: string;
  /** 配置名 */
  Name: string;
  /** 日志收集配置信息 */
  Data?: LogConfig;
  /** 应用 ID */
  ApplicationId?: string;
}

declare interface ModifyLogConfigResponse {
  /** 编辑是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartApplicationPodRequest {
  /** 环境id */
  EnvironmentId: string;
  /** 应用id */
  ApplicationId: string;
  /** 名字 */
  PodName: string;
  /** 单页条数 */
  Limit?: number;
  /** 分页下标 */
  Offset?: number;
  /** pod状态 */
  Status?: string;
  /** 来源渠道 */
  SourceChannel?: number;
}

declare interface RestartApplicationPodResponse {
  /** 返回结果 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartApplicationRequest {
  /** 服务id */
  ApplicationId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 环境ID/命名空间ID */
  EnvironmentId?: string;
}

declare interface RestartApplicationResponse {
  /** 返回结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeDeployApplicationRequest {
  /** 需要开始下一批次的服务id */
  ApplicationId?: string;
  /** 环境id */
  EnvironmentId?: string;
}

declare interface ResumeDeployApplicationResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevertDeployApplicationRequest {
  /** 需要回滚的服务id */
  ApplicationId?: string;
  /** 需要回滚的服务所在环境id */
  EnvironmentId?: string;
}

declare interface RevertDeployApplicationResponse {
  /** 是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollingUpdateApplicationByVersionRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 环境ID */
  EnvironmentId: string;
  /** 更新版本，IMAGE 部署为 tag 值；JAR/WAR 部署 为 Version */
  DeployVersion: string;
  /** JAR/WAR 包名，仅 JAR/WAR 部署时必填 */
  PackageName?: string;
  /** 请求来源平台，含 IntelliJ，Coding */
  From?: string;
  /** 部署策略，AUTO 为全自动；BETA 为小批量验证后自动；MANUAL 为全手动； */
  DeployStrategyType?: string;
  /** 发布批次数 */
  TotalBatchCount?: number;
  /** 批次间隔时间 */
  BatchInterval?: number;
  /** 小批量验证批次的实例数 */
  BetaBatchNum?: number;
  /** 发布过程中保障的最小可用实例数 */
  MinAvailable?: number;
  /** 是否强制发布 */
  Force?: boolean;
}

declare interface RollingUpdateApplicationByVersionResponse {
  /** 版本ID */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopApplicationRequest {
  /** 服务id */
  ApplicationId: string;
  /** 来源渠道 */
  SourceChannel?: number;
  /** 环境ID/命名空间ID */
  EnvironmentId?: string;
}

declare interface StopApplicationResponse {
  /** 返回结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20201221 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-12-21' } }

  /** Cos token */
  interface CosToken {
    /** 唯一请求 ID */
    RequestId: string;
    /** 存储桶桶名 */
    Bucket: string;
    /** 存储桶所在区域 */
    Region: string;
    /** 临时密钥的SecretId */
    TmpSecretId: string;
    /** 临时密钥的SecretKey */
    TmpSecretKey: string;
    /** 临时密钥的 sessionToken */
    SessionToken: string;
    /** 临时密钥获取的开始时间 */
    StartTime: string;
    /** 临时密钥的 expiredTime */
    ExpiredTime: string;
    /** 包完整路径 */
    FullPath: string;
  }

  /** 分批发布策略配置 */
  interface DeployStrategyConf {
    /** 总分批数 */
    TotalBatchCount?: number;
    /** beta分批实例数 */
    BetaBatchNum?: number;
    /** 分批策略：0-全自动，1-全手动，beta分批一定是手动的，这里的策略指定的是剩余批次 */
    DeployStrategyType?: number;
    /** 每批暂停间隔 */
    BatchInterval?: number;
  }

  /** 版本pod列表 */
  interface DescribeRunPodPage {
    /** 分页下标 */
    Offset: number;
    /** 单页条数 */
    Limit: number;
    /** 总数 */
    TotalCount: number;
    /** 请求id */
    RequestId: string;
    /** 条目 */
    PodList: RunVersionPod[];
  }

  /** eks service info */
  interface EksService {
    /** service name */
    Name?: string;
    /** 可用端口 */
    Ports?: number[];
    /** yaml 内容 */
    Yaml?: string;
    /** 服务名 */
    ServiceName?: string | null;
    /** 版本名 */
    VersionName?: string | null;
    /** 内网ip */
    ClusterIp?: string[] | null;
    /** 外网ip */
    ExternalIp?: string | null;
    /** 访问类型，可选值：- EXTERNAL（公网访问）- VPC（vpc内访问）- CLUSTER（集群内访问） */
    Type?: string | null;
    /** 子网ID，只在类型为vpc访问时才有值 */
    SubnetId?: string | null;
    /** 负载均衡ID，只在外网访问和vpc内访问才有值，默认自动创建 */
    LoadBalanceId?: string | null;
    /** 端口映射 */
    PortMappings?: PortMapping[] | null;
  }

  /** 弹性伸缩配置 */
  interface EsInfo {
    /** 最小实例数 */
    MinAliveInstances: number;
    /** 最大实例数 */
    MaxAliveInstances: number;
    /** 弹性策略,1:cpu，2:内存 */
    EsStrategy: number;
    /** 弹性扩缩容条件值 */
    Threshold: number;
    /** 版本Id */
    VersionId?: string;
  }

  /** 健康检查配置 */
  interface HealthCheckConfig {
    /** 支持的健康检查类型，如 HttpGet，TcpSocket，Exec */
    Type: string;
    /** 仅当健康检查类型为 HttpGet 时有效，表示协议类型，如 HTTP，HTTPS */
    Protocol?: string;
    /** 仅当健康检查类型为 HttpGet 时有效，表示请求路径 */
    Path?: string;
    /** 仅当健康检查类型为 Exec 时有效，表示执行的脚本内容 */
    Exec?: string;
    /** 仅当健康检查类型为 HttpGet\TcpSocket 时有效，表示请求路径 */
    Port?: number;
    /** 检查延迟开始时间，单位为秒，默认为 0 */
    InitialDelaySeconds?: number;
    /** 超时时间，单位为秒，默认为 1 */
    TimeoutSeconds?: number;
    /** 间隔时间，单位为秒，默认为 10 */
    PeriodSeconds?: number;
  }

  /** Ingress 配置 */
  interface IngressInfo {
    /** tem namespaceId */
    NamespaceId: string | null;
    /** eks namespace */
    EksNamespace: string;
    /** ip version */
    AddressIPVersion: string;
    /** ingress name */
    Name: string;
    /** rules 配置 */
    Rules: IngressRule[];
    /** clb ID */
    ClbId?: string | null;
    /** tls 配置 */
    Tls?: IngressTls[] | null;
    /** eks clusterId */
    ClusterId?: string | null;
    /** clb ip */
    Vip?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 是否混合 https，默认 false，可选值 true 代表有 https 协议监听 */
    Mixed?: boolean;
  }

  /** ingress rule 配置 */
  interface IngressRule {
    /** ingress rule value */
    Http: IngressRuleValue;
    /** host 地址 */
    Host?: string | null;
    /** 协议，选项为 http， https，默认为 http */
    Protocol?: string;
  }

  /** Ingress 规则 backend 配置 */
  interface IngressRuleBackend {
    /** eks service 名 */
    ServiceName: string;
    /** eks service 端口 */
    ServicePort: number;
  }

  /** Ingress Rule Path 配置 */
  interface IngressRulePath {
    /** path 信息 */
    Path: string;
    /** backend 配置 */
    Backend: IngressRuleBackend;
  }

  /** Ingress Rule Value 配置 */
  interface IngressRuleValue {
    /** rule 整体配置 */
    Paths: IngressRulePath[];
  }

  /** ingress tls 配置 */
  interface IngressTls {
    /** host 数组, 空数组表示全部域名的默认证书 */
    Hosts: string[];
    /** secret name，如使用证书，则填空字符串 */
    SecretName: string;
    /** SSL Certificate Id */
    CertificateId?: string;
  }

  /** 日志输出配置 */
  interface LogOutputConf {
    /** 日志消费端类型 */
    OutputType: string;
    /** cls日志集 */
    ClsLogsetName?: string;
    /** cls日志主题 */
    ClsLogTopicId?: string;
    /** cls日志集id */
    ClsLogsetId?: string;
    /** cls日志名称 */
    ClsLogTopicName?: string;
  }

  /** 挂载配置信息 */
  interface MountedSettingConf {
    /** 配置名称 */
    ConfigDataName: string;
    /** 挂载路径 */
    MountedPath: string;
    /** 配置内容 */
    Data?: Pair[];
  }

  /** 命名空间分页 */
  interface NamespacePage {
    /** 分页内容 */
    Records: TemNamespaceInfo[];
    /** 总数 */
    Total: number;
    /** 条目数 */
    Size: number;
    /** 页数 */
    Pages: number;
  }

  /** 键值对 */
  interface Pair {
    /** 建 */
    Key: string;
    /** 值 */
    Value: string;
  }

  /** 服务端口映射 */
  interface PortMapping {
    /** 端口 */
    Port: number;
    /** 映射端口 */
    TargetPort: number;
    /** 协议栈 TCP/UDP */
    Protocol: string;
  }

  /** 版本pod */
  interface RunVersionPod {
    /** shell地址 */
    Webshell: string;
    /** pod的id */
    PodId: string;
    /** 状态 */
    Status: string;
    /** 创建时间 */
    CreateTime: string;
    /** 实例的ip */
    PodIp: string;
    /** 可用区 */
    Zone: string | null;
    /** 部署版本 */
    DeployVersion: string | null;
    /** 重启次数 */
    RestartCount: number | null;
  }

  /** 存储卷配置 */
  interface StorageConf {
    /** 存储卷名称 */
    StorageVolName: string;
    /** 存储卷路径 */
    StorageVolPath: string;
    /** 存储卷IP */
    StorageVolIp?: string | null;
  }

  /** 数据卷挂载信息 */
  interface StorageMountConf {
    /** 数据卷名 */
    VolumeName: string;
    /** 数据卷绑定路径 */
    MountPath: string;
  }

  /** 命名空间对象 */
  interface TemNamespaceInfo {
    /** 命名空间id */
    NamespaceId: string;
    /** 渠道 */
    Channel: string;
    /** 命名空间名称 */
    NamespaceName: string;
    /** 区域名称 */
    Region: string;
    /** 命名空间描述 */
    Description: string | null;
    /** 状态,1:已销毁;0:正常 */
    Status: number;
    /** vpc网络 */
    Vpc: string;
    /** 创建时间 */
    CreateDate: string;
    /** 修改时间 */
    ModifyDate: string;
    /** 修改人 */
    Modifier: string;
    /** 创建人 */
    Creator: string;
    /** 服务数 */
    ServiceNum: number;
    /** 运行实例数 */
    RunInstancesNum: number;
    /** 子网络 */
    SubnetId: string;
    /** tcb环境状态 */
    TcbEnvStatus: string;
    /** eks cluster status */
    ClusterStatus: string;
    /** 是否开启tsw */
    EnableTswTraceService: boolean;
  }

  interface CreateCosTokenRequest {
    /** 服务ID */
    ServiceId: string;
    /** 服务版本ID */
    VersionId: string;
    /** 包名 */
    PkgName: string;
    /** optType 1上传 2查询 */
    OptType: number;
    /** 来源 channel */
    SourceChannel?: number;
  }

  interface CreateCosTokenResponse {
    /** 成功时为CosToken对象，失败为null */
    Result: CosToken | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCosTokenV2Request {
    /** 服务ID */
    ServiceId: string;
    /** 包名 */
    PkgName: string;
    /** optType 1上传 2查询 */
    OptType: number;
    /** 来源 channel */
    SourceChannel?: number;
    /** 充当deployVersion入参 */
    TimeVersion?: string;
  }

  interface CreateCosTokenV2Response {
    /** 成功时为CosToken对象，失败为null */
    Result: CosToken | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateNamespaceRequest {
    /** 命名空间名称 */
    NamespaceName: string;
    /** 私有网络名称 */
    Vpc: string;
    /** 子网列表 */
    SubnetIds: string[];
    /** 命名空间描述 */
    Description?: string;
    /** K8s version */
    K8sVersion?: string;
    /** 来源渠道 */
    SourceChannel?: number;
    /** 是否开启tsw服务 */
    EnableTswTraceService?: boolean;
  }

  interface CreateNamespaceResponse {
    /** 成功时为命名空间ID，失败为null */
    Result: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateResourceRequest {
    /** 命名空间 Id */
    NamespaceId: string;
    /** 资源类型，目前支持文件系统：CFS；日志服务：CLS；注册中心：TSE_SRE */
    ResourceType: string;
    /** 资源 Id */
    ResourceId: string;
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface CreateResourceResponse {
    /** 成功与否 */
    Result: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateServiceV2Request {
    /** 服务名 */
    ServiceName: string;
    /** 描述 */
    Description: string;
    /** 是否使用默认镜像服务 1-是，0-否 */
    UseDefaultImageService?: number;
    /** 如果是绑定仓库，绑定的仓库类型，0-个人版，1-企业版 */
    RepoType?: number;
    /** 企业版镜像服务的实例id */
    InstanceId?: string;
    /** 绑定镜像服务器地址 */
    RepoServer?: string;
    /** 绑定镜像仓库名 */
    RepoName?: string;
    /** 来源渠道 */
    SourceChannel?: number;
    /** 服务所在子网 */
    SubnetList?: string[];
    /** 编程语言 - JAVA- OTHER */
    CodingLanguage?: string;
    /** 部署方式 - IMAGE- JAR- WAR */
    DeployMode?: string;
  }

  interface CreateServiceV2Response {
    /** 服务code */
    Result: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteIngressRequest {
    /** tem NamespaceId */
    NamespaceId: string;
    /** eks namespace 名 */
    EksNamespace: string;
    /** ingress 规则名 */
    Name: string;
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface DeleteIngressResponse {
    /** 是否删除成功 */
    Result: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeployServiceV2Request {
    /** 服务ID */
    ServiceId: string;
    /** 容器端口 */
    ContainerPort: number;
    /** 初始化 pod 数 */
    InitPodNum: number;
    /** cpu规格 */
    CpuSpec: number;
    /** 内存规格 */
    MemorySpec: number;
    /** 环境ID */
    NamespaceId: string;
    /** 镜像仓库 */
    ImgRepo?: string;
    /** 版本描述信息 */
    VersionDesc?: string;
    /** 启动参数 */
    JvmOpts?: string;
    /** 弹性伸缩配置，不传默认不启用弹性伸缩配置 */
    EsInfo?: EsInfo;
    /** 环境变量配置 */
    EnvConf?: Pair[];
    /** 日志配置 */
    LogConfs?: string[];
    /** 数据卷配置 */
    StorageConfs?: StorageConf[];
    /** 数据卷挂载配置 */
    StorageMountConfs?: StorageMountConf[];
    /** 部署类型。- JAR：通过 jar 包部署- WAR：通过 war 包部署- IMAGE：通过镜像部署 */
    DeployMode?: string;
    /** 部署类型为 IMAGE 时，该参数表示镜像 tag。部署类型为 JAR/WAR 时，该参数表示包版本号。 */
    DeployVersion?: string;
    /** 包名。使用 JAR 包或者 WAR 包部署的时候必填。 */
    PkgName?: string;
    /** JDK 版本。- KONA：使用 kona jdk。- OPEN：使用 open jdk。 */
    JdkVersion?: string;
    /** 安全组ID s */
    SecurityGroupIds?: string[];
    /** 日志输出配置 */
    LogOutputConf?: LogOutputConf;
    /** 来源渠道 */
    SourceChannel?: number;
    /** 版本描述 */
    Description?: string;
    /** 镜像命令 */
    ImageCommand?: string;
    /** 镜像命令参数 */
    ImageArgs?: string[];
    /** 服务端口映射 */
    PortMappings?: PortMapping[];
    /** 是否添加默认注册中心配置 */
    UseRegistryDefaultConfig?: boolean;
    /** 挂载配置信息 */
    SettingConfs?: MountedSettingConf[];
    /** eks 访问设置 */
    EksService?: EksService;
    /** 要回滚到的历史版本id */
    VersionId?: string;
    /** 启动后执行的脚本 */
    PostStart?: string;
    /** 停止前执行的脚本 */
    PreStop?: string;
    /** 分批发布策略配置 */
    DeployStrategyConf?: DeployStrategyConf;
    /** 存活探针配置 */
    Liveness?: HealthCheckConfig;
    /** 就绪探针配置 */
    Readiness?: HealthCheckConfig;
  }

  interface DeployServiceV2Response {
    /** 版本ID（前端可忽略） */
    Result: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIngressRequest {
    /** tem namespaceId */
    NamespaceId: string;
    /** eks namespace 名 */
    EksNamespace: string;
    /** ingress 规则名 */
    Name: string;
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface DescribeIngressResponse {
    /** Ingress 规则配置 */
    Result: IngressInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIngressesRequest {
    /** namespace id */
    NamespaceId?: string;
    /** namespace */
    EksNamespace?: string;
    /** 来源渠道 */
    SourceChannel?: number;
    /** ingress 规则名列表 */
    Names?: string[];
  }

  interface DescribeIngressesResponse {
    /** ingress 数组 */
    Result: IngressInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNamespacesRequest {
    /** 分页limit */
    Limit?: number;
    /** 分页下标 */
    Offset?: number;
    /** 来源source */
    SourceChannel?: number;
  }

  interface DescribeNamespacesResponse {
    /** 返回结果 */
    Result: NamespacePage;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRelatedIngressesRequest {
    /** 环境 id */
    NamespaceId?: string;
    /** EKS namespace */
    EksNamespace?: string;
    /** 来源渠道 */
    SourceChannel?: number;
    /** 服务 ID */
    ServiceId?: string;
  }

  interface DescribeRelatedIngressesResponse {
    /** ingress 数组 */
    Result: IngressInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeServiceRunPodListV2Request {
    /** 环境id */
    NamespaceId: string;
    /** 服务名id */
    ServiceId: string;
    /** 单页条数，默认值20 */
    Limit?: number;
    /** 分页下标，默认值0 */
    Offset?: number;
    /** 实例状态 - Running - Pending - Error */
    Status?: string;
    /** 实例名字 */
    PodName?: string;
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface DescribeServiceRunPodListV2Response {
    /** 返回结果 */
    Result: DescribeRunPodPage;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GenerateDownloadUrlRequest {
    /** 服务ID */
    ServiceId: string;
    /** 包名 */
    PkgName: string;
    /** 需要下载的包版本 */
    DeployVersion: string;
    /** 来源 channel */
    SourceChannel?: number;
  }

  interface GenerateDownloadUrlResponse {
    /** 包下载临时链接 */
    Result: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyIngressRequest {
    /** Ingress 规则配置 */
    Ingress: IngressInfo;
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface ModifyIngressResponse {
    /** 创建成功 */
    Result: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyNamespaceRequest {
    /** 环境id */
    NamespaceId: string;
    /** 命名空间名称 */
    NamespaceName?: string;
    /** 命名空间描述 */
    Description?: string;
    /** 私有网络名称 */
    Vpc?: string;
    /** 子网网络 */
    SubnetIds?: string[];
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface ModifyNamespaceResponse {
    /** 成功时为命名空间ID，失败为null */
    Result: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyServiceInfoRequest {
    /** 服务ID */
    ServiceId: string;
    /** 描述 */
    Description: string;
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface ModifyServiceInfoResponse {
    /** 成功与否 */
    Result: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestartServiceRunPodRequest {
    /** 环境id */
    NamespaceId: string;
    /** 服务名id */
    ServiceId: string;
    /** 名字 */
    PodName: string;
    /** 单页条数 */
    Limit?: number;
    /** 分页下标 */
    Offset?: number;
    /** pod状态 */
    Status?: string;
    /** 来源渠道 */
    SourceChannel?: number;
  }

  interface RestartServiceRunPodResponse {
    /** 返回结果 */
    Result: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Tem 弹性微服务} */
declare interface Tem {
  (): Versions;
  /** 创建应用 {@link CreateApplicationRequest} {@link CreateApplicationResponse} */
  CreateApplication(data: CreateApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationResponse>;
  /** 创建弹性伸缩策略组合 {@link CreateApplicationAutoscalerRequest} {@link CreateApplicationAutoscalerResponse} */
  CreateApplicationAutoscaler(data: CreateApplicationAutoscalerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationAutoscalerResponse>;
  /** 新增访问方式 {@link CreateApplicationServiceRequest} {@link CreateApplicationServiceResponse} */
  CreateApplicationService(data: CreateApplicationServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationServiceResponse>;
  /** 创建配置 {@link CreateConfigDataRequest} {@link CreateConfigDataResponse} */
  CreateConfigData(data: CreateConfigDataRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigDataResponse>;
  /** 生成Cos临时密钥 {@link CreateCosTokenRequest} {@link CreateCosTokenResponse} */
  CreateCosToken(data: CreateCosTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosTokenResponse>;
  /** 创建环境 {@link CreateEnvironmentRequest} {@link CreateEnvironmentResponse} */
  CreateEnvironment(data: CreateEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvironmentResponse>;
  /** 创建日志收集配置 {@link CreateLogConfigRequest} {@link CreateLogConfigResponse} */
  CreateLogConfig(data: CreateLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLogConfigResponse>;
  /** 绑定云资源 {@link CreateResourceRequest} {@link CreateResourceResponse} */
  CreateResource(data: CreateResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceResponse>;
  /** 服务删除 {@link DeleteApplicationRequest} {@link DeleteApplicationResponse} */
  DeleteApplication(data: DeleteApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationResponse>;
  /** 删除应用弹性策略组合 {@link DeleteApplicationAutoscalerRequest} {@link DeleteApplicationAutoscalerResponse} */
  DeleteApplicationAutoscaler(data: DeleteApplicationAutoscalerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationAutoscalerResponse>;
  /** 删除一条访问方式 {@link DeleteApplicationServiceRequest} {@link DeleteApplicationServiceResponse} */
  DeleteApplicationService(data?: DeleteApplicationServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationServiceResponse>;
  /** 删除 Ingress 规则 {@link DeleteIngressRequest} {@link DeleteIngressResponse} */
  DeleteIngress(data: DeleteIngressRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIngressResponse>;
  /** 应用部署 {@link DeployApplicationRequest} {@link DeployApplicationResponse} */
  DeployApplication(data: DeployApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<DeployApplicationResponse>;
  /** 获取应用弹性策略组合 {@link DescribeApplicationAutoscalerListRequest} {@link DescribeApplicationAutoscalerListResponse} */
  DescribeApplicationAutoscalerList(data: DescribeApplicationAutoscalerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationAutoscalerListResponse>;
  /** 服务基本信息查看 {@link DescribeApplicationInfoRequest} {@link DescribeApplicationInfoResponse} */
  DescribeApplicationInfo(data: DescribeApplicationInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationInfoResponse>;
  /** 获取应用实例列表 {@link DescribeApplicationPodsRequest} {@link DescribeApplicationPodsResponse} */
  DescribeApplicationPods(data: DescribeApplicationPodsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationPodsResponse>;
  /** 查询应用访问方式列表 {@link DescribeApplicationServiceListRequest} {@link DescribeApplicationServiceListResponse} */
  DescribeApplicationServiceList(data: DescribeApplicationServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationServiceListResponse>;
  /** 获取运行服务列表 {@link DescribeApplicationsRequest} {@link DescribeApplicationsResponse} */
  DescribeApplications(data?: DescribeApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationsResponse>;
  /** 单环境下所有应用状态查看 {@link DescribeApplicationsStatusRequest} {@link DescribeApplicationsStatusResponse} */
  DescribeApplicationsStatus(data?: DescribeApplicationsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationsStatusResponse>;
  /** 查询配置详情 {@link DescribeConfigDataRequest} {@link DescribeConfigDataResponse} */
  DescribeConfigData(data: DescribeConfigDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigDataResponse>;
  /** 查询配置列表 {@link DescribeConfigDataListRequest} {@link DescribeConfigDataListResponse} */
  DescribeConfigDataList(data: DescribeConfigDataListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigDataListResponse>;
  /** 获取分批发布详情 {@link DescribeDeployApplicationDetailRequest} {@link DescribeDeployApplicationDetailResponse} */
  DescribeDeployApplicationDetail(data?: DescribeDeployApplicationDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeployApplicationDetailResponse>;
  /** 获取环境基础信息 {@link DescribeEnvironmentRequest} {@link DescribeEnvironmentResponse} */
  DescribeEnvironment(data: DescribeEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentResponse>;
  /** 获取环境状态 {@link DescribeEnvironmentStatusRequest} {@link DescribeEnvironmentStatusResponse} */
  DescribeEnvironmentStatus(data: DescribeEnvironmentStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentStatusResponse>;
  /** 获取环境列表 {@link DescribeEnvironmentsRequest} {@link DescribeEnvironmentsResponse} */
  DescribeEnvironments(data?: DescribeEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentsResponse>;
  /** 查询 Ingress 规则 {@link DescribeIngressRequest} {@link DescribeIngressResponse} */
  DescribeIngress(data: DescribeIngressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIngressResponse>;
  /** 查询 Ingress 规则列表 {@link DescribeIngressesRequest} {@link DescribeIngressesResponse} */
  DescribeIngresses(data?: DescribeIngressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIngressesResponse>;
  /** 查询日志收集配置详情 {@link DescribeLogConfigRequest} {@link DescribeLogConfigResponse} */
  DescribeLogConfig(data: DescribeLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogConfigResponse>;
  /** 查询分页的日志收集配置列表 {@link DescribePagedLogConfigListRequest} {@link DescribePagedLogConfigListResponse} */
  DescribePagedLogConfigList(data: DescribePagedLogConfigListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePagedLogConfigListResponse>;
  /** 查询应用关联的 Ingress 规则列表 {@link DescribeRelatedIngressesRequest} {@link DescribeRelatedIngressesResponse} */
  DescribeRelatedIngresses(data?: DescribeRelatedIngressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelatedIngressesResponse>;
  /** 销毁配置 {@link DestroyConfigDataRequest} {@link DestroyConfigDataResponse} */
  DestroyConfigData(data: DestroyConfigDataRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyConfigDataResponse>;
  /** 销毁环境 {@link DestroyEnvironmentRequest} {@link DestroyEnvironmentResponse} */
  DestroyEnvironment(data: DestroyEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyEnvironmentResponse>;
  /** 销毁日志收集配置 {@link DestroyLogConfigRequest} {@link DestroyLogConfigResponse} */
  DestroyLogConfig(data: DestroyLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyLogConfigResponse>;
  /** 关闭应用弹性策略组合 {@link DisableApplicationAutoscalerRequest} {@link DisableApplicationAutoscalerResponse} */
  DisableApplicationAutoscaler(data: DisableApplicationAutoscalerRequest, config?: AxiosRequestConfig): AxiosPromise<DisableApplicationAutoscalerResponse>;
  /** 启用应用弹性策略组合 {@link EnableApplicationAutoscalerRequest} {@link EnableApplicationAutoscalerResponse} */
  EnableApplicationAutoscaler(data: EnableApplicationAutoscalerRequest, config?: AxiosRequestConfig): AxiosPromise<EnableApplicationAutoscalerResponse>;
  /** 生成应用程序包预签名下载链接 {@link GenerateApplicationPackageDownloadUrlRequest} {@link GenerateApplicationPackageDownloadUrlResponse} */
  GenerateApplicationPackageDownloadUrl(data: GenerateApplicationPackageDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateApplicationPackageDownloadUrlResponse>;
  /** 修改弹性伸缩策略组合 {@link ModifyApplicationAutoscalerRequest} {@link ModifyApplicationAutoscalerResponse} */
  ModifyApplicationAutoscaler(data: ModifyApplicationAutoscalerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationAutoscalerResponse>;
  /** 修改应用基本信息 {@link ModifyApplicationInfoRequest} {@link ModifyApplicationInfoResponse} */
  ModifyApplicationInfo(data: ModifyApplicationInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationInfoResponse>;
  /** 修改应用实例数量 {@link ModifyApplicationReplicasRequest} {@link ModifyApplicationReplicasResponse} */
  ModifyApplicationReplicas(data: ModifyApplicationReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationReplicasResponse>;
  /** 修改服务访问方式列表 {@link ModifyApplicationServiceRequest} {@link ModifyApplicationServiceResponse} */
  ModifyApplicationService(data: ModifyApplicationServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationServiceResponse>;
  /** 编辑配置 {@link ModifyConfigDataRequest} {@link ModifyConfigDataResponse} */
  ModifyConfigData(data: ModifyConfigDataRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigDataResponse>;
  /** 编辑环境 {@link ModifyEnvironmentRequest} {@link ModifyEnvironmentResponse} */
  ModifyEnvironment(data: ModifyEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvironmentResponse>;
  /** 创建或者更新 Ingress 规则 {@link ModifyIngressRequest} {@link ModifyIngressResponse} */
  ModifyIngress(data: ModifyIngressRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIngressResponse>;
  /** 编辑日志收集配置 {@link ModifyLogConfigRequest} {@link ModifyLogConfigResponse} */
  ModifyLogConfig(data: ModifyLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogConfigResponse>;
  /** 服务重启 {@link RestartApplicationRequest} {@link RestartApplicationResponse} */
  RestartApplication(data: RestartApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<RestartApplicationResponse>;
  /** 重启应用实例 {@link RestartApplicationPodRequest} {@link RestartApplicationPodResponse} */
  RestartApplicationPod(data: RestartApplicationPodRequest, config?: AxiosRequestConfig): AxiosPromise<RestartApplicationPodResponse>;
  /** 开始下一批次发布 {@link ResumeDeployApplicationRequest} {@link ResumeDeployApplicationResponse} */
  ResumeDeployApplication(data?: ResumeDeployApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeDeployApplicationResponse>;
  /** 回滚分批发布 {@link RevertDeployApplicationRequest} {@link RevertDeployApplicationResponse} */
  RevertDeployApplication(data?: RevertDeployApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<RevertDeployApplicationResponse>;
  /** 更新应用部署版本 {@link RollingUpdateApplicationByVersionRequest} {@link RollingUpdateApplicationByVersionResponse} */
  RollingUpdateApplicationByVersion(data: RollingUpdateApplicationByVersionRequest, config?: AxiosRequestConfig): AxiosPromise<RollingUpdateApplicationByVersionResponse>;
  /** 服务停止 {@link StopApplicationRequest} {@link StopApplicationResponse} */
  StopApplication(data: StopApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<StopApplicationResponse>;
  /** 生成Cos临时秘钥 {@link V20201221.CreateCosTokenRequest} {@link V20201221.CreateCosTokenResponse} */
  CreateCosToken(data: V20201221.CreateCosTokenRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.CreateCosTokenResponse>;
  /** 生成Cos临时秘钥V2 {@link V20201221.CreateCosTokenV2Request} {@link V20201221.CreateCosTokenV2Response} */
  CreateCosTokenV2(data: V20201221.CreateCosTokenV2Request, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.CreateCosTokenV2Response>;
  /** 创建命名空间 {@link V20201221.CreateNamespaceRequest} {@link V20201221.CreateNamespaceResponse} */
  CreateNamespace(data: V20201221.CreateNamespaceRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.CreateNamespaceResponse>;
  /** 绑定云资源 {@link V20201221.CreateResourceRequest} {@link V20201221.CreateResourceResponse} */
  CreateResource(data: V20201221.CreateResourceRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.CreateResourceResponse>;
  /** 创建服务 {@link V20201221.CreateServiceV2Request} {@link V20201221.CreateServiceV2Response} */
  CreateServiceV2(data: V20201221.CreateServiceV2Request, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.CreateServiceV2Response>;
  /** 删除 Ingress 规则 {@link V20201221.DeleteIngressRequest} {@link V20201221.DeleteIngressResponse} */
  DeleteIngress(data: V20201221.DeleteIngressRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.DeleteIngressResponse>;
  /** 服务部署 {@link V20201221.DeployServiceV2Request} {@link V20201221.DeployServiceV2Response} */
  DeployServiceV2(data: V20201221.DeployServiceV2Request, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.DeployServiceV2Response>;
  /** 查询 Ingress 规则 {@link V20201221.DescribeIngressRequest} {@link V20201221.DescribeIngressResponse} */
  DescribeIngress(data: V20201221.DescribeIngressRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.DescribeIngressResponse>;
  /** 查询 Ingress 规则列表 {@link V20201221.DescribeIngressesRequest} {@link V20201221.DescribeIngressesResponse} */
  DescribeIngresses(data: V20201221.DescribeIngressesRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.DescribeIngressesResponse>;
  /** 获取租户命名空间列表 {@link V20201221.DescribeNamespacesRequest} {@link V20201221.DescribeNamespacesResponse} */
  DescribeNamespaces(data: V20201221.DescribeNamespacesRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.DescribeNamespacesResponse>;
  /** 查询服务关联的 Ingress 规则列表 {@link V20201221.DescribeRelatedIngressesRequest} {@link V20201221.DescribeRelatedIngressesResponse} */
  DescribeRelatedIngresses(data: V20201221.DescribeRelatedIngressesRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.DescribeRelatedIngressesResponse>;
  /** 获取服务下面运行pod列表 {@link V20201221.DescribeServiceRunPodListV2Request} {@link V20201221.DescribeServiceRunPodListV2Response} */
  DescribeServiceRunPodListV2(data: V20201221.DescribeServiceRunPodListV2Request, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.DescribeServiceRunPodListV2Response>;
  /** 生成包预签名下载链接 {@link V20201221.GenerateDownloadUrlRequest} {@link V20201221.GenerateDownloadUrlResponse} */
  GenerateDownloadUrl(data: V20201221.GenerateDownloadUrlRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.GenerateDownloadUrlResponse>;
  /** 创建或者更新 Ingress 规则 {@link V20201221.ModifyIngressRequest} {@link V20201221.ModifyIngressResponse} */
  ModifyIngress(data: V20201221.ModifyIngressRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.ModifyIngressResponse>;
  /** 编辑命名空间 {@link V20201221.ModifyNamespaceRequest} {@link V20201221.ModifyNamespaceResponse} */
  ModifyNamespace(data: V20201221.ModifyNamespaceRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.ModifyNamespaceResponse>;
  /** 修改服务基本信息 {@link V20201221.ModifyServiceInfoRequest} {@link V20201221.ModifyServiceInfoResponse} */
  ModifyServiceInfo(data: V20201221.ModifyServiceInfoRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.ModifyServiceInfoResponse>;
  /** 重启实例 {@link V20201221.RestartServiceRunPodRequest} {@link V20201221.RestartServiceRunPodResponse} */
  RestartServiceRunPod(data: V20201221.RestartServiceRunPodRequest, config: AxiosRequestConfig & V20201221.VersionHeader): AxiosPromise<V20201221.RestartServiceRunPodResponse>;
}

export declare type Versions = ["2021-07-01", "2020-12-21"];

export default Tem;
