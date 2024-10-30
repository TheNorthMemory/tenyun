/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 后备索引元数据字段 */
declare interface BackingIndexMetaField {
  /** 后备索引名 */
  IndexName: string | null;
  /** 后备索引状态 */
  IndexStatus: string | null;
  /** 后备索引存储大小 */
  IndexStorage: number | null;
  /** 后备索引当前生命周期 */
  IndexPhrase: string | null;
  /** 后备索引创建时间 */
  IndexCreateTime: string | null;
}

/** 集群维度视图数据 */
declare interface ClusterView {
  /** 集群健康状态 */
  Health?: number;
  /** 集群是否可见 */
  Visible: number;
  /** 集群是否熔断 */
  Break: number;
  /** 平均磁盘使用率 */
  AvgDiskUsage: number;
  /** 平均内存使用率 */
  AvgMemUsage: number;
  /** 平均cpu使用率 */
  AvgCpuUsage: number;
  /** 集群总存储大小 */
  TotalDiskSize: number;
  /** 客户端请求节点 */
  TargetNodeTypes: string[];
  /** 在线节点数 */
  NodeNum: number;
  /** 总节点数 */
  TotalNodeNum: number;
  /** 数据节点数 */
  DataNodeNum: number;
  /** 索引数 */
  IndexNum: number;
  /** 文档数 */
  DocNum: number;
  /** 磁盘已使用字节数 */
  DiskUsedInBytes: number;
  /** 分片个数 */
  ShardNum: number;
  /** 主分片个数 */
  PrimaryShardNum: number;
  /** 迁移中的分片个数 */
  RelocatingShardNum: number;
  /** 初始化中的分片个数 */
  InitializingShardNum: number;
  /** 未分配的分片个数 */
  UnassignedShardNum: number;
  /** 企业版COS存储容量大小，单位GB */
  TotalCosStorage: number;
  /** 企业版集群可搜索快照cos存放的bucket名称 */
  SearchableSnapshotCosBucket: string | null;
  /** 企业版集群可搜索快照cos所属appid */
  SearchableSnapshotCosAppId: string | null;
}

/** 普通索引信息列表 */
declare interface CommonIndexInfo {
  /** 普通索引名 */
  IndexName?: string | null;
  /** 分片状态 */
  IsShardComplete?: number | null;
}

/** ES cos自动备份信息 */
declare interface CosBackup {
  /** 是否开启cos自动备份 */
  IsAutoBackup: boolean;
  /** 自动备份执行时间（精确到小时）, e.g. "22:00" */
  BackupTime: string;
}

/** 无 */
declare interface CosSnapShotInfo {
  /** cos 桶名 */
  CosBucket?: string | null;
  /** base path */
  BasePath?: string | null;
  /** 快照名 */
  SnapshotName?: string | null;
  /** 状态 */
  State?: string | null;
  /** 快照版本 */
  Version?: string | null;
  /** 普通索引信息列表 */
  CommonIndexArr?: CommonIndexInfo[] | null;
  /** 自治索引信息列表 */
  DataStreamArr?: DataStreamInfo[] | null;
}

/** 自治索引信息 */
declare interface DataStreamInfo {
  /** 自治索引名 */
  DataStreamName?: string | null;
  /** 分片状态 */
  IsShardComplete?: number | null;
}

/** 插件信息 */
declare interface DescribeInstancePluginInfo {
  /** 插件名 */
  PluginName: string;
  /** 插件版本 */
  PluginVersion: string;
  /** 插件描述 */
  PluginDesc: string;
  /** 插件状态：-2 已卸载 -1 卸载中 0 安装中 1 已安装 */
  Status: number;
  /** 插件是否可卸载 */
  Removable: boolean;
  /** 0：系统插件 */
  PluginType: number;
  /** 插件变更时间 */
  PluginUpdateTime: string;
}

/** 数据接入信息 */
declare interface DiData {
  /** 数据接入id */
  DiId?: string | null;
  /** 数据接入创建时间 */
  CreateTime?: string | null;
  /** 数据接入状态，0处理中，1正常，-2删除中，-3已删除 */
  Status?: number | null;
  /** cvm数据源信息 */
  DiDataSourceCvm?: DiDataSourceCvm | null;
  /** tke数据源信息 */
  DiDataSourceTke?: DiDataSourceTke | null;
  /** serverless目的端信息 */
  DiDataSinkServerless?: DiDataSinkServerless | null;
  /** 数据接入类型 */
  DiDataSourceType?: string | null;
}

/** 数据接入serverless目的端信息 */
declare interface DiDataSinkServerless {
  /** serverless实例id */
  ServerlessId?: string | null;
}

/** 数据接入cvm数据源信息 */
declare interface DiDataSourceCvm {
  /** vpc id */
  VpcId?: string | null;
  /** 采集路径列表 */
  LogPaths?: string[] | null;
  /** cvm实例信息列表 */
  CvmInstances?: DiDataSourceCvmInstance[] | null;
  /** 采集器id */
  CollectorId?: string | null;
}

/** 数据接入cvm实例信息 */
declare interface DiDataSourceCvmInstance {
  /** cvm实例id */
  InstanceId?: string | null;
  /** vpc id */
  VpcId?: string | null;
  /** 子网id */
  SubnetId?: string | null;
  /** 错误信息 */
  ErrMsg?: string | null;
}

/** 数据接入tke数据源信息 */
declare interface DiDataSourceTke {
  /** vpc id */
  VpcId?: string | null;
  /** tke实例id */
  TkeId?: string | null;
  /** 采集器id */
  CollectorId?: string | null;
  /** 采集源名称 */
  CollectorName?: string | null;
  /** 采集器类型 */
  CollectorType?: string | null;
  /** 采集器版本 */
  CollectorVersion?: string | null;
  /** tke包含的命名空间 */
  IncludeNamespaces?: string[] | null;
  /** tke不包含的命名空间 */
  ExcludeNamespaces?: string[] | null;
  /** tke pod标签名 */
  PodLabelKeys?: string[] | null;
  /** tke pod标签值 */
  PodLabelValues?: string[] | null;
  /** tke容器名称 */
  ContainerName?: string | null;
  /** tke采集器beat配置 */
  ConfigContent?: string | null;
  /** / */
  InputType?: string | null;
  /** TKE 日志采集路径 */
  InputPath?: string | null;
}

/** 数据接入cvm数据源 */
declare interface DiSourceCvm {
  /** 数据源所属vpc id，创建后不允许修改 */
  VpcId?: string;
  /** cvm列表 */
  CvmIds?: string[];
  /** 采集路径列表，支持通配符 */
  LogPaths?: string[];
}

/** 数据接入tke数据源 */
declare interface DiSourceTke {
  /** 数据源所属vpc id，创建后不允许修改 */
  VpcId?: string;
  /** tke实例id，创建后不允许修改 */
  TkeId?: string;
  /** tke包含的命名空间 */
  IncludeNamespaces?: string[];
  /** tke不包含的命名空间 */
  ExcludeNamespaces?: string[];
  /** tke容器名称 */
  ContainerName?: string;
  /** tke日志内容过滤 */
  LogFilters?: string;
  /** tke beats配置项 */
  ConfigContent?: string;
  /** tke pod标签 */
  PodLabel?: DiSourceTkePodLabel[];
  /** / */
  InputType?: string;
  /** tke 日志采集路径 */
  InputPath?: string;
}

/** tke pod标签 */
declare interface DiSourceTkePodLabel {
  /** 标签key */
  Key?: string | null;
  /** 标签value */
  Value?: string | null;
}

/** 智能运维支持的诊断项和元信息 */
declare interface DiagnoseJobMeta {
  /** 智能运维诊断项英文名 */
  JobName: string;
  /** 智能运维诊断项中文名 */
  JobZhName: string;
  /** 智能运维诊断项描述 */
  JobDescription: string;
}

/** 智能运维诊断项结果 */
declare interface DiagnoseJobResult {
  /** 诊断项名 */
  JobName: string;
  /** 诊断项状态：-2失败，-1待重试，0运行中，1成功 */
  Status: number;
  /** 诊断项得分 */
  Score: number;
  /** 诊断摘要 */
  Summary: string;
  /** 诊断建议 */
  Advise: string;
  /** 诊断详情 */
  Detail: string;
  /** 诊断指标详情 */
  MetricDetails: MetricDetail[] | null;
  /** 诊断日志详情 */
  LogDetails: LogDetail[] | null;
  /** 诊断配置详情 */
  SettingDetails: SettingDetail[] | null;
}

/** 智能运维诊断结果 */
declare interface DiagnoseResult {
  /** ES实例ID */
  InstanceId: string;
  /** 诊断报告ID */
  RequestId: string;
  /** 诊断触发时间 */
  CreateTime: string;
  /** 诊断是否完成 */
  Completed: boolean;
  /** 诊断总得分 */
  Score: number;
  /** 诊断类型，2 定时诊断，3 客户手动触发诊断 */
  JobType: number;
  /** 诊断参数，如诊断时间，诊断索引等 */
  JobParam: JobParam;
  /** 诊断项结果列表 */
  JobResults: DiagnoseJobResult[];
}

/** ik插件词典信息 */
declare interface DictInfo {
  /** 词典键值 */
  Key: string;
  /** 词典名称 */
  Name: string;
  /** 词典大小，单位B */
  Size: number;
}

/** 智能运维指标维度 */
declare interface Dimension {
  /** 智能运维指标维度Key */
  Key: string;
  /** 智能运维指标维度值 */
  Value: string;
}

/** 置放群组异步任务维护的时间段 */
declare interface EnableScheduleOperationDuration {
  /** 支持开启异步任务的日期 */
  Periods?: string[] | null;
  /** 支持开启异步的开始时间 */
  TimeStart?: string | null;
  /** 支持开启异步的结束时间 */
  TimeEnd?: string | null;
  /** 支持开启异步的时区 */
  TimeZone?: string | null;
}

/** ES集群配置项 */
declare interface EsAcl {
  /** kibana访问黑名单 */
  BlackIpList?: string[];
  /** kibana访问白名单 */
  WhiteIpList?: string[];
}

/** 配置组信息 */
declare interface EsConfigSetInfo {
  /** 配置组类型，如ldap,ad等 */
  Type: string;
  /** "{\"order\":0,\"url\":\"ldap://10.0.1.72:389\",\"bind_dn\":\"cn=admin,dc=tencent,dc=com\",\"user_search.base_dn\":\"dc=tencent,dc=com\",\"user_search.filter\":\"(cn={0})\",\"group_search.base_dn\":\"dc=tencent,dc=com\"}" */
  EsConfig: string;
}

/** ES 词库信息 */
declare interface EsDictionaryInfo {
  /** 启用词词典列表 */
  MainDict: DictInfo[];
  /** 停用词词典列表 */
  Stopwords: DictInfo[];
  /** QQ分词词典列表 */
  QQDict: DictInfo[];
  /** 同义词词典列表 */
  Synonym: DictInfo[];
  /** 更新词典类型 */
  UpdateType: string;
}

/** ES公网访问控制信息 */
declare interface EsPublicAcl {
  /** 访问黑名单 */
  BlackIpList?: string[];
  /** 访问白名单 */
  WhiteIpList?: string[];
}

/** 索引备份失败的数据结构 */
declare interface Failures {
  /** 备份失败的索引名称 */
  Index?: string | null;
  /** 快照失败的分片号 */
  ShardId?: number | null;
  /** 快照失败的原因 */
  Reason?: string | null;
  /** 快照失败的状态 */
  Status?: string | null;
}

/** 索引元数据字段 */
declare interface IndexMetaField {
  /** 索引类型 */
  IndexType?: string | null;
  /** 索引名 */
  IndexName?: string | null;
  /** 索引元数据JSON */
  IndexMetaJson?: string | null;
  /** 索引状态 */
  IndexStatus?: string | null;
  /** 索引存储大小，单位Byte */
  IndexStorage?: number | null;
  /** 索引创建时间 */
  IndexCreateTime?: string | null;
  /** 后备索引 */
  BackingIndices?: BackingIndexMetaField[] | null;
  /** 索引所属集群ID */
  ClusterId?: string | null;
  /** 索引所属集群名 */
  ClusterName?: string | null;
  /** 索引所属集群版本 */
  ClusterVersion?: string | null;
  /** 索引生命周期字段 */
  IndexPolicyField?: IndexPolicyField | null;
  /** 索引自治字段 */
  IndexOptionsField?: IndexOptionsField | null;
  /** 索引配置字段 */
  IndexSettingsField?: IndexSettingsField | null;
  /** 索引所属集群APP ID */
  AppId?: number | null;
  /** 索引文档数 */
  IndexDocs?: number | null;
}

/** 索引自治字段 */
declare interface IndexOptionsField {
  /** 过期时间 */
  ExpireMaxAge?: string | null;
  /** 过期大小 */
  ExpireMaxSize?: string | null;
  /** 滚动周期 */
  RolloverMaxAge?: string | null;
  /** 是否开启动态滚动 */
  RolloverDynamic?: string | null;
  /** 是否开启动态分片 */
  ShardNumDynamic?: string | null;
  /** 时间分区字段 */
  TimestampField?: string | null;
  /** 写入模式 */
  WriteMode?: string | null;
}

/** 索引生命周期字段 */
declare interface IndexPolicyField {
  /** 是否开启warm阶段 */
  WarmEnable?: string | null;
  /** warm阶段转入时间 */
  WarmMinAge?: string | null;
  /** 是否开启cold阶段 */
  ColdEnable?: string | null;
  /** cold阶段转入时间 */
  ColdMinAge?: string | null;
  /** 是否开启frozen阶段 */
  FrozenEnable?: string | null;
  /** frozen阶段转入时间 */
  FrozenMinAge?: string | null;
  /** / */
  ColdAction?: string | null;
}

/** 索引配置字段 */
declare interface IndexSettingsField {
  /** 索引主分片数 */
  NumberOfShards?: string | null;
  /** 索引副本分片数 */
  NumberOfReplicas?: string | null;
  /** 索引刷新频率 */
  RefreshInterval?: string | null;
}

/** 实例详细信息 */
declare interface InstanceInfo {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 用户ID */
  AppId?: number;
  /** 用户UIN */
  Uin?: string;
  /** 实例所属VPC的UID */
  VpcUid?: string;
  /** 实例所属子网的UID */
  SubnetUid?: string;
  /** 实例状态，0:处理中,1:正常,-1:停止,-2:销毁中,-3:已销毁, -4:隔离中,2:创建集群时初始化中 */
  Status?: number;
  /** 自动续费标识。取值范围：RENEW_FLAG_AUTO：自动续费 RENEW_FLAG_MANUAL：不自动续费默认取值：RENEW_FLAG_DEFAULT：不自动续费若该参数指定为 RENEW_FLAG_AUTO，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string;
  /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。 */
  ChargeType?: string;
  /** 包年包月购买时长,单位:月 */
  ChargePeriod?: number;
  /** 节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  NodeType?: string;
  /** 节点个数 */
  NodeNum?: number;
  /** 节点CPU核数 */
  CpuNum?: number;
  /** 节点内存大小，单位GB */
  MemSize?: number;
  /** 节点磁盘类型 */
  DiskType?: string;
  /** 节点磁盘大小，单位GB */
  DiskSize?: number;
  /** ES域名 */
  EsDomain?: string;
  /** ES VIP */
  EsVip?: string;
  /** ES端口 */
  EsPort?: number;
  /** Kibana访问url */
  KibanaUrl?: string;
  /** ES版本号 */
  EsVersion?: string;
  /** ES配置项 */
  EsConfig?: string;
  /** Kibana访问控制配置 */
  EsAcl?: EsAcl;
  /** 实例创建时间 */
  CreateTime?: string;
  /** 实例最后修改操作时间 */
  UpdateTime?: string;
  /** 实例到期时间 */
  Deadline?: string;
  /** 实例类型（实例类型标识，当前只有1,2两种） */
  InstanceType?: number;
  /** Ik分词器配置 */
  IkConfig?: EsDictionaryInfo;
  /** 专用主节点配置 */
  MasterNodeInfo?: MasterNodeInfo;
  /** cos自动备份配置 */
  CosBackup?: CosBackup;
  /** 是否允许cos自动备份 */
  AllowCosBackup?: boolean;
  /** 实例拥有的标签列表 */
  TagList?: TagInfo[];
  /** License类型oss：开源版basic：基础版platinum：白金版默认值platinum */
  LicenseType?: string;
  /** 是否为冷热集群true: 冷热集群false: 非冷热集群 */
  EnableHotWarmMode?: boolean | null;
  /** 温节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  WarmNodeType?: string | null;
  /** 温节点个数 */
  WarmNodeNum?: number | null;
  /** 温节点CPU核数 */
  WarmCpuNum?: number | null;
  /** 温节点内存内存大小，单位GB */
  WarmMemSize?: number | null;
  /** 温节点磁盘类型 */
  WarmDiskType?: string | null;
  /** 温节点磁盘大小，单位GB */
  WarmDiskSize?: number | null;
  /** 集群节点信息列表 */
  NodeInfoList?: NodeInfo[] | null;
  /** Es公网地址 */
  EsPublicUrl?: string | null;
  /** 多可用区网络信息 */
  MultiZoneInfo?: ZoneDetail[] | null;
  /** 部署模式0：单可用区1：多可用区，北京、上海、上海金融、广州、南京、香港、新加坡、法兰克福（白名单控制） */
  DeployMode?: number | null;
  /** ES公网访问状态OPEN：开启CLOSE：关闭 */
  PublicAccess?: string | null;
  /** ES公网访问控制配置 */
  EsPublicAcl?: EsAcl;
  /** Kibana内网地址 */
  KibanaPrivateUrl?: string | null;
  /** Kibana公网访问状态OPEN：开启CLOSE：关闭 */
  KibanaPublicAccess?: string | null;
  /** Kibana内网访问状态OPEN：开启CLOSE：关闭 */
  KibanaPrivateAccess?: string | null;
  /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启 */
  SecurityType?: number | null;
  /** 场景化模板类型：0、不开启；1、通用场景；2、日志场景；3、搜索场景 */
  SceneType?: number | null;
  /** Kibana配置项 */
  KibanaConfig?: string | null;
  /** Kibana节点信息 */
  KibanaNodeInfo?: KibanaNodeInfo | null;
  /** 可视化节点配置 */
  WebNodeTypeInfo?: WebNodeTypeInfo | null;
  /** JDK类型，oracle或kona */
  Jdk?: string | null;
  /** 集群网络通讯协议 */
  Protocol?: string | null;
  /** 安全组id */
  SecurityGroups?: string[] | null;
  /** 冷节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  ColdNodeType?: string | null;
  /** 冷节点个数 */
  ColdNodeNum?: number | null;
  /** 冷节点CPU核数 */
  ColdCpuNum?: number | null;
  /** 冷节点内存大小，单位GB */
  ColdMemSize?: number | null;
  /** 冷节点磁盘类型 */
  ColdDiskType?: string | null;
  /** 冷节点磁盘大小，单位GB */
  ColdDiskSize?: number | null;
  /** 冻节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  FrozenNodeType?: string | null;
  /** 冻节点个数 */
  FrozenNodeNum?: number | null;
  /** 冻节点CPU核数 */
  FrozenCpuNum?: number | null;
  /** 冻节点内存大小，单位GB */
  FrozenMemSize?: number | null;
  /** 冻节点磁盘类型 */
  FrozenDiskType?: string | null;
  /** 冻节点磁盘大小，单位GB */
  FrozenDiskSize?: number | null;
  /** 集群健康状态 -1 未知；0 Green; 1 Yellow; 2 Red */
  HealthStatus?: number | null;
  /** https集群内网url */
  EsPrivateUrl?: string | null;
  /** https集群内网域名 */
  EsPrivateDomain?: string | null;
  /** 集群的配置组信息 */
  EsConfigSets?: EsConfigSetInfo[] | null;
  /** 集群可维护时间段 */
  OperationDuration?: OperationDuration | null;
  /** web节点列表 */
  OptionalWebServiceInfos?: OptionalWebServiceInfo[] | null;
  /** 自治索引开关 */
  AutoIndexEnabled?: boolean | null;
  /** 是否支持存储计算分离 */
  EnableHybridStorage?: boolean | null;
  /** 流程进度 */
  ProcessPercent?: number | null;
  /** Kibana的alerting外网告警策略OPEN：开启CLOSE：关闭 */
  KibanaAlteringPublicAccess?: string | null;
  /** 本月是否有内核可以更新：false-无，true-有 */
  HasKernelUpgrade?: boolean | null;
  /** cdcId，使用cdc子网时传递 */
  CdcId?: string | null;
  /** kibana内网vip */
  KibanaPrivateVip?: string | null;
  /** 自定义kibana内网url */
  CustomKibanaPrivateUrl?: string | null;
  /** 节点出站访问详细信息 */
  OutboundPublicAcls?: OutboundPublicAcl[] | null;
  /** 网络连接方案 */
  NetConnectScheme?: string | null;
  /** 置放群组相关参数 */
  DisasterRecoverGroupAffinity?: number | null;
  /** 子产品ID枚举值： 开源版："sp_es_io2"， 基础版："sp_es_basic"，白金版："sp_es_platinum"，企业版："sp_es_enterprise"，CDC白金版："sp_es_cdc_platinum"，日志增强版："sp_es_enlogging"，tsearch："sp_tsearch_io2"，logstash："sp_es_logstash" ，可以为空，为空的时候后台取LicenseType映射该字段 */
  SubProductCode?: string | null;
  /** 存算分离cos用量，单位M */
  CosBucketStorageSize?: number | null;
  /** 读写分离模式：0-不开启，1-本地读写分离，2-远端读写分离 */
  ReadWriteMode?: number | null;
}

/** ES集群日志详细信息 */
declare interface InstanceLog {
  /** 日志时间 */
  Time: string;
  /** 日志级别 */
  Level: string;
  /** 集群节点ip */
  Ip: string;
  /** 日志内容 */
  Message: string;
  /** 集群节点ID */
  NodeID?: string;
}

/** 智能运维诊断参数 */
declare interface JobParam {
  /** 诊断项列表 */
  Jobs: string[] | null;
  /** 诊断索引 */
  Indices: string;
  /** 历史诊断时间 */
  Interval: number;
}

/** OperationDetail使用此结构的数组描述新旧配置 */
declare interface KeyValue {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 实例Kibana节点相关信息 */
declare interface KibanaNodeInfo {
  /** Kibana节点规格 */
  KibanaNodeType: string;
  /** Kibana节点个数 */
  KibanaNodeNum: number;
  /** Kibana节点CPU数 */
  KibanaNodeCpuNum: number;
  /** Kibana节点内存GB */
  KibanaNodeMemSize: number;
  /** Kibana节点磁盘类型 */
  KibanaNodeDiskType: string;
  /** Kibana节点磁盘大小 */
  KibanaNodeDiskSize: number;
}

/** kibana公网域名白名单参数 */
declare interface KibanaPublicAcl {
  /** kibana访问白名单 */
  WhiteIpList?: string[];
}

/** Kibana视图数据 */
declare interface KibanaView {
  /** Kibana节点IP */
  Ip: string;
  /** 节点总磁盘大小 */
  DiskSize: number;
  /** 磁盘使用率 */
  DiskUsage: number;
  /** 节点内存大小 */
  MemSize: number;
  /** 内存使用率 */
  MemUsage: number;
  /** 节点cpu个数 */
  CpuNum: number;
  /** cpu使用率 */
  CpuUsage: number;
  /** 可用区 */
  Zone: string;
  /** ts-0noqayxu-az6-hot-03222010-0 */
  NodeId?: string;
}

/** 节点本地盘信息 */
declare interface LocalDiskInfo {
  /** 本地盘类型LOCAL_SATA：大数据型NVME_SSD：高IO型 */
  LocalDiskType: string;
  /** 本地盘单盘大小 */
  LocalDiskSize: number;
  /** 本地盘块数 */
  LocalDiskCount: number;
}

/** 智能运维日志详情 */
declare interface LogDetail {
  /** 日志异常名 */
  Key: string;
  /** 日志异常处理建议 */
  Advise: string;
  /** 日志异常名出现次数 */
  Count: number;
}

/** Logstash绑定的ES集群信息 */
declare interface LogstashBindedES {
  /** ES集群ID */
  ESInstanceId: string;
  /** ES集群用户名 */
  ESUserName: string;
  /** ES集群密码 */
  ESPassword: string;
}

/** Logstash扩展文件信息 */
declare interface LogstashExtendedFile {
  /** 扩展文件名称 */
  Name: string;
  /** 扩展文件大小，单位B */
  Size: number;
}

/** Logstash实例详细信息 */
declare interface LogstashInstanceInfo {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** 用户ID */
  AppId: number;
  /** 用户UIN */
  Uin: string;
  /** 实例所属VPC的ID */
  VpcId: string;
  /** 实例所属子网的ID */
  SubnetId: string;
  /** 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁 */
  Status: number;
  /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。 */
  ChargeType: string;
  /** 包年包月购买时长,单位:月 */
  ChargePeriod: number;
  /** 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费 NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费 DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费 默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag: string;
  /** 节点规格LOGSTASH.S1.SMALL2：1核2GLOGSTASH.S1.MEDIUM4：2核4GLOGSTASH.S1.MEDIUM8：2核8GLOGSTASH.S1.LARGE16：4核16GLOGSTASH.S1.2XLARGE32：8核32GLOGSTASH.S1.4XLARGE32：16核32GLOGSTASH.S1.4XLARGE64：16核64G */
  NodeType: string;
  /** 节点个数 */
  NodeNum: number;
  /** 节点磁盘类型 */
  DiskType: string;
  /** 节点磁盘大小，单位GB */
  DiskSize: number;
  /** Logstash版本号 */
  LogstashVersion: string;
  /** License类型oss：开源版xpack：基础版默认值xpack */
  LicenseType: string;
  /** 实例创建时间 */
  CreateTime: string;
  /** 实例最后修改操作时间 */
  UpdateTime: string;
  /** 实例到期时间 */
  Deadline: string;
  /** 实例节点类型 */
  Nodes: LogstashNodeInfo[];
  /** 实例绑定的ES集群ID */
  BindedESInstanceId: string;
  /** 实例的YML配置 */
  YMLConfig: string | null;
  /** 扩展文件列表 */
  ExtendedFiles: LogstashExtendedFile[] | null;
  /** 可维护时间段 */
  OperationDuration: OperationDuration | null;
  /** CPU数量 */
  CpuNum: number | null;
  /** 实例标签信息 */
  TagList: TagInfo[] | null;
  /** 内存大小 */
  MemSize: number | null;
}

/** Logstash节点信息 */
declare interface LogstashNodeInfo {
  /** 节点ID */
  NodeId: string;
  /** 节点IP */
  Ip: string;
  /** 节点端口 */
  Port: number;
}

/** Logstash管道信息 */
declare interface LogstashPipeline {
  /** 管道ID */
  PipelineId: string;
  /** 管道描述信息 */
  PipelineDesc: string | null;
  /** 管道配置内容 */
  Config: string;
  /** 管道的Worker数量 */
  Workers: number | null;
  /** 管道批处理大小 */
  BatchSize: number | null;
  /** 管道批处理延迟 */
  BatchDelay: number | null;
  /** 管道缓冲队列类型 */
  QueueType: string | null;
  /** 管道缓冲队列大小 */
  QueueMaxBytes: string | null;
  /** 管道缓冲队列检查点写入数 */
  QueueCheckPointWrites: number | null;
}

/** Logstash管道信息 */
declare interface LogstashPipelineInfo {
  /** 管道ID */
  PipelineId: string;
  /** 管道描述信息 */
  PipelineDesc: string | null;
  /** 管道配置内容 */
  Config: string;
  /** 管道状态 */
  Status: number | null;
  /** 管道的Worker数量 */
  Workers: number | null;
  /** 管道批处理大小 */
  BatchSize: number | null;
  /** 管道批处理延迟 */
  BatchDelay: number | null;
  /** 管道缓冲队列类型 */
  QueueType: string | null;
  /** 管道缓冲队列大小 */
  QueueMaxBytes: string | null;
  /** 管道缓冲队列检查点写入数 */
  QueueCheckPointWrites: number | null;
}

/** 实例专用主节点相关信息 */
declare interface MasterNodeInfo {
  /** 是否启用了专用主节点 */
  EnableDedicatedMaster: boolean;
  /** 专用主节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  MasterNodeType: string;
  /** 专用主节点个数 */
  MasterNodeNum: number;
  /** 专用主节点CPU核数 */
  MasterNodeCpuNum: number;
  /** 专用主节点内存大小，单位GB */
  MasterNodeMemSize: number;
  /** 专用主节点磁盘大小，单位GB */
  MasterNodeDiskSize: number;
  /** 专用主节点磁盘类型 */
  MasterNodeDiskType: string;
}

/** 智能运维指标 */
declare interface Metric {
  /** 指标维度族 */
  Dimensions: Dimension[];
  /** 指标值 */
  Value: number;
}

/** 全部指标数据 */
declare interface MetricAllData {
  /** 索引流量 */
  IndexTraffic?: number;
  /** 存储大小 */
  Storage?: number;
  /** 读请求次数 */
  ReadReqTimes?: number;
  /** 写请求次数 */
  WriteReqTimes?: number;
  /** 文档数量 */
  DocCount?: number;
}

/** 智能运维指标详情 */
declare interface MetricDetail {
  /** 指标详情名 */
  Key: string;
  /** 指标详情值 */
  Metrics: Metric[];
}

/** 指标数据map */
declare interface MetricMapByIndexId {
  /** 实例id */
  IndexId?: string;
  /** 指标数据 */
  MetricAllData?: MetricAllData;
}

/** 集群中一种节点类型（如热数据节点，冷数据节点，专用主节点等）的规格描述信息，包括节点类型，节点个数，节点规格，磁盘类型，磁盘大小等, Type不指定时默认为热数据节点；如果节点为master节点，则DiskType和DiskSize参数会被忽略（主节点无数据盘） */
declare interface NodeInfo {
  /** 节点数量 */
  NodeNum: number;
  /** 节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  NodeType: string;
  /** 节点类型hotData: 热数据节点warmData: 冷数据节点dedicatedMaster: 专用主节点默认值为hotData */
  Type?: string;
  /** 节点磁盘类型CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高硬能云硬盘默认值CLOUD_SSD */
  DiskType?: string;
  /** 节点磁盘容量（单位GB） */
  DiskSize?: number;
  /** 节点本地盘信息 */
  LocalDiskInfo?: LocalDiskInfo | null;
  /** 节点磁盘块数 */
  DiskCount?: number;
  /** 节点磁盘是否加密 0: 不加密，1: 加密；默认不加密 */
  DiskEncrypt?: number;
  /** cpu数目 */
  CpuNum?: number | null;
  /** 内存大小，单位GB */
  MemSize?: number | null;
  /** / */
  DiskEnhance?: number | null;
}

/** 节点维度视图数据 */
declare interface NodeView {
  /** 节点ID */
  NodeId?: string;
  /** 节点IP */
  NodeIp?: string;
  /** 节点是否可见 */
  Visible?: number;
  /** 是否熔断 */
  Break?: number;
  /** 节点总磁盘大小 */
  DiskSize?: number;
  /** 磁盘使用率 */
  DiskUsage?: number;
  /** 节点内存大小，单位GB */
  MemSize?: number;
  /** 内存使用率 */
  MemUsage?: number;
  /** 节点cpu个数 */
  CpuNum?: number;
  /** cpu使用率 */
  CpuUsage?: number;
  /** 可用区 */
  Zone?: string;
  /** 节点角色 */
  NodeRole?: string;
  /** 节点HTTP IP */
  NodeHttpIp?: string;
  /** JVM内存使用率 */
  JvmMemUsage?: number;
  /** 节点分片数 */
  ShardNum?: number;
  /** 节点上磁盘ID列表 */
  DiskIds?: string[];
  /** 是否为隐藏可用区 */
  Hidden?: boolean;
  /** 是否充当协调节点的角色 */
  IsCoordinationNode?: boolean;
  /** CVM运行状态 */
  CVMStatus?: string;
  /** cvm绑定的置放群组的id */
  CVMDisasterRecoverGroupId?: string | null;
  /** cvm绑定置放群组的状态。2: 已绑定；1: 绑定中；0: 未开启 */
  CVMDisasterRecoverGroupStatus?: number | null;
}

/** ES集群操作详细信息 */
declare interface Operation {
  /** 操作唯一id */
  Id: number;
  /** 操作开始时间 */
  StartTime: string;
  /** 操作类型 */
  Type: string;
  /** 操作详情 */
  Detail: OperationDetail;
  /** 操作结果 */
  Result: string;
  /** 流程任务信息 */
  Tasks: TaskDetail[];
  /** 操作进度 */
  Progress: number;
  /** 操作者Uin */
  SubAccountUin?: string | null;
}

/** 操作详情 */
declare interface OperationDetail {
  /** 实例原始配置信息 */
  OldInfo: KeyValue[];
  /** 实例更新后配置信息 */
  NewInfo: KeyValue[];
}

/** 集群可运维时间 */
declare interface OperationDuration {
  /** 维护周期，表示周一到周日，可取值[0, 6] */
  Periods: number[] | null;
  /** 维护开始时间 */
  TimeStart: string;
  /** 维护结束时间 */
  TimeEnd: string;
  /** 时区，以UTC形式表示 */
  TimeZone: string;
}

/** 集群可运维时间 */
declare interface OperationDurationUpdated {
  /** 维护周期，表示周一到周日，可取值[0, 6] */
  Periods: number[];
  /** 维护开始时间 */
  TimeStart: string;
  /** 维护结束时间 */
  TimeEnd: string;
  /** 时区，以UTC形式表示 */
  TimeZone: string;
  /** ES集群ID数组 */
  MoreInstances?: string[];
}

/** 可选web组件信息 */
declare interface OptionalWebServiceInfo {
  /** 类型 */
  Type?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 公网url */
  PublicUrl?: string | null;
  /** 内网url */
  PrivateUrl?: string | null;
  /** 公网访问权限 */
  PublicAccess?: string | null;
  /** 内网访问权限 */
  PrivateAccess?: string | null;
  /** 版本号 */
  Version?: string | null;
  /** web服务内网vip */
  PrivateVip?: string | null;
  /** 自定义cerebro内网url */
  CustomPrivateUrl?: string | null;
}

/** 节点出站访问信息 */
declare interface OutboundPublicAcl {
  /** 允许节点出站访问的节点类型 */
  NodeType: string | null;
  /** 允许节点出站访问的白名单 */
  WhiteHostList?: string[] | null;
}

/** 任务进度详情 */
declare interface ProcessDetail {
  /** 已完成数量 */
  Completed?: number | null;
  /** 剩余数量 */
  Remain?: number | null;
  /** 总数量 */
  Total?: number | null;
  /** 任务类型：60：重启型任务70：分片迁移型任务80：节点变配任务 */
  TaskType?: number | null;
}

/** 创建serverless索引时创建数据接入 */
declare interface ServerlessDi {
  /** 数据链路采集源类型，如cvm_collector、tke_collector */
  DiSourceType?: string;
  /** cvm数据源 */
  DiSourceCvm?: DiSourceCvm;
  /** tke数据源 */
  DiSourceTke?: DiSourceTke;
}

/** 索引元数据字段 */
declare interface ServerlessIndexMetaField {
  /** 索引所属集群APP ID */
  AppId?: number | null;
  /** 索引名 */
  IndexName?: string | null;
  /** 索引文档数 */
  IndexDocs?: number | null;
  /** 索引存储大小，单位Byte */
  IndexStorage?: number | null;
  /** 索引创建时间 */
  IndexCreateTime?: string | null;
  /** 索引实例ID */
  InstanceId?: string | null;
  /** 索引自治字段 */
  IndexOptionsField?: ServerlessIndexOptionsField | null;
  /** 索引配置字段 */
  IndexSettingsField?: ServerlessIndexSettingsField | null;
  /** 索引所属连接相关信息 */
  IndexNetworkField?: ServerlessIndexNetworkField | null;
  /** Kibana公网域名 */
  KibanaUrl?: string | null;
  /** Kibana内网域名 */
  KibanaPrivateUrl?: string | null;
  /** 索引内网访问地址 */
  IndexAccessUrl?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 索引空间ID */
  SpaceId?: string | null;
  /** 索引空间名 */
  SpaceName?: string | null;
  /** 存储类型 */
  StorageType?: number | null;
  /** 标签信息 */
  TagList?: TagInfo[];
  /** 3782478.47 */
  IndexTraffic?: number | null;
}

/** Serverless实例，网络、索引、kibana等连接信息 */
declare interface ServerlessIndexNetworkField {
  /** 地域 */
  Region: string | null;
  /** 区域 */
  Zone: string | null;
  /** vpc唯一ID */
  VpcUid: string | null;
  /** 子网唯一ID */
  SubnetUid: string | null;
  /** 用户名 */
  Username: string | null;
  /** 密码 */
  Password: string | null;
}

/** 索引自治字段 */
declare interface ServerlessIndexOptionsField {
  /** 过期时间 */
  ExpireMaxAge?: string | null;
  /** 时间分区字段 */
  TimestampField?: string | null;
  /** 标准存储时长 */
  SinkCycleAge?: string | null;
}

/** 索引配置字段 */
declare interface ServerlessIndexSettingsField {
  /** 索引主分片数 */
  NumberOfShards?: string | null;
  /** 索引刷新频率 */
  RefreshInterval?: string | null;
}

/** Serverless索引空间信息 */
declare interface ServerlessSpace {
  /** Serverless索引空间ID */
  SpaceId?: string;
  /** Serverless索引空间名 */
  SpaceName?: string;
  /** Serverless索引空间状态，0正常，-1已删除 */
  Status?: number;
  /** 创建日期 */
  CreateTime?: string;
  /** 空间内索引数量 */
  IndexCount?: number;
  /** kibana公网uri */
  KibanaUrl?: string | null;
  /** kibana内网url */
  KibanaPrivateUrl?: string | null;
  /** 空间内网访问地址 */
  IndexAccessUrl?: string | null;
  /** 空间白名单 */
  KibanaPublicAcl?: EsAcl | null;
  /** 空间检索分析域名 */
  KibanaEmbedUrl?: string | null;
  /** 数据联路 */
  DiDataList?: DiData | null;
  /** 空间vpc信息 */
  VpcInfo?: VpcInfo[] | null;
  /** 地域 */
  Region?: string | null;
  /** 可用区 */
  Zone?: string | null;
  /** kibana公网开关，0关闭，1开启 */
  EnableKibanaPublicAccess?: number | null;
  /** kibana内网开关，0关闭，1开启 */
  EnableKibanaPrivateAccess?: number | null;
  /** 空间所属appid */
  AppId?: number | null;
  /** //默认en， 可选zh-CN */
  KibanaLanguage?: string | null;
  /** 0 */
  ClusterType?: number | null;
  /** key:value */
  TagList?: TagInfo[] | null;
}

/** ServerlessSpaceUser */
declare interface ServerlessSpaceUser {
  /** 用户名 */
  Username?: string | null;
  /** 用户密码 */
  Password?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 用户状态 */
  Status?: number | null;
  /** 有权限的索引数组 */
  IndicesScope?: string[] | null;
  /** 权限类型 */
  PrivilegeType?: number | null;
}

/** 智能运维集群配置详情 */
declare interface SettingDetail {
  /** 配置key */
  Key: string;
  /** 配置当前值 */
  Value: string;
  /** 配置处理建议 */
  Advise: string;
}

/** 集群快照数据结构 */
declare interface Snapshots {
  /** 快照名称 */
  SnapshotName?: string | null;
  /** 快照Uuid */
  Uuid?: string | null;
  /** 该快照所属集群的版本号 */
  Version?: string | null;
  /** 备份的索引列表 */
  Indices?: string[] | null;
  /** 备份的datastream列表 */
  DataStreams?: string[] | null;
  /** 备份的状态FAILED 备份失败IN_PROGRESS 备份执行中PARTIAL 备份部分成功，部分失败，备份失败的索引和原因会在Failures字段中展示SUCCESS 备份成功 */
  State?: string | null;
  /** 快照备份的开始时间 */
  StartTime?: string | null;
  /** 快照备份的结束时间 */
  EndTime?: string | null;
  /** 快照备份的耗时时间 */
  DurationInMillis?: number | null;
  /** 备份的总分片数 */
  TotalShards?: number | null;
  /** 备份失败的分片数量 */
  FailedShards?: number | null;
  /** 备份成功的分片数量 */
  SuccessfulShards?: number | null;
  /** 备份失败的索引分片和失败原因 */
  Failures?: Failures[] | null;
}

/** 实例操作记录流程任务中的子任务信息（如升级检查任务中的各个检查项） */
declare interface SubTaskDetail {
  /** 子任务名 */
  Name: string;
  /** 子任务结果 */
  Result: boolean;
  /** 子任务错误信息 */
  ErrMsg: string;
  /** 子任务类型 */
  Type: string;
  /** 子任务状态，0处理中 1成功 -1失败 */
  Status: number;
  /** 升级检查失败的索引名 */
  FailedIndices: string[];
  /** 子任务结束时间 */
  FinishTime: string;
  /** 子任务等级，1警告 2失败 */
  Level: number;
}

/** 实例标签信息 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 实例操作记录中的流程任务信息 */
declare interface TaskDetail {
  /** 任务名 */
  Name: string;
  /** 任务进度 */
  Progress: number;
  /** 任务完成时间 */
  FinishTime: string;
  /** 子任务 */
  SubTasks: SubTaskDetail[];
  /** 任务花费时间 */
  ElapsedTime: number | null;
  /** 任务进度详情 */
  ProcessInfo?: ProcessDetail | null;
}

/** vpc信息 */
declare interface VpcInfo {
  /** vpcId信息 */
  VpcId?: string | null;
  /** SubnetId信息 */
  SubnetId?: string | null;
  /** VpcUid信息 */
  VpcUid?: number | null;
  /** SubnetUid 信息 */
  SubnetUid?: number | null;
  /** 可用ip数量 */
  AvailableIpAddressCount?: number | null;
}

/** 可视化节点配置 */
declare interface WebNodeTypeInfo {
  /** 可视化节点个数，固定为1 */
  NodeNum: number;
  /** 可视化节点规格 */
  NodeType: string;
}

/** 多可用区部署时可用区的详细信息 */
declare interface ZoneDetail {
  /** 可用区 */
  Zone: string;
  /** 子网ID */
  SubnetId: string;
}

declare interface CheckMigrateIndexMetaDataRequest {
  /** 索引 id */
  ServerlessId: string;
  /** 快照名 */
  Snapshot: string;
  /** Cos桶名 */
  CosBucket?: string;
  /** BasePath路径 */
  BasePath?: string;
  /** 云上集群名 */
  ClusterInstanceId?: string;
  /** 普通索引名列表 */
  CommonIndexArr?: string[];
  /** 自治索引名列表 */
  DataStreamArr?: string[];
}

declare interface CheckMigrateIndexMetaDataResponse {
  /** 不存在于目标索引时间字段相同的字段 */
  MappingTimeFieldCheckFailedIndexArr?: string[];
  /** @timestamp不为date类型，与目标索引时间字段冲突 */
  MappingTimeTypeCheckFailedIndexArr?: string[];
  /** 索引的创建时间不在 serverless的存储周期内 */
  SettingCheckFailedIndexArr?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterSnapshotRequest {
  /** 实例名称 */
  InstanceId: string;
  /** 快照名称 */
  SnapshotName: string;
  /** 索引名称 */
  Indices?: string;
}

declare interface CreateClusterSnapshotResponse {
  /** 实例名称 */
  InstanceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCosMigrateToServerlessInstanceRequest {
  /** 快照名 */
  Snapshot: string;
  /** 索引 id */
  ServerlessId: string;
  /** cos 桶名 */
  CosBucket?: string;
  /** BasePath 路径 */
  BasePath?: string;
  /** 云上集群 id */
  ClusterInstanceId?: string;
  /** 待迁移普通索引名列表 */
  CommonIndexArr?: string[];
  /** 待迁移自治索引名列表 */
  DataStreamArr?: string[];
}

declare interface CreateCosMigrateToServerlessInstanceResponse {
  /** 迁移 taskid */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIndexRequest {
  /** ES集群ID */
  InstanceId: string;
  /** 创建的索引类型。auto：自治索引；normal：普通索引 */
  IndexType: string;
  /** 创建的索引名 */
  IndexName: string;
  /** 【必填】创建的索引元数据JSON，如mappings、settings */
  IndexMetaJson: string;
  /** 集群访问用户名 */
  Username?: string;
  /** 集群访问密码 */
  Password?: string;
}

declare interface CreateIndexResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceRequest {
  /** 可用区 */
  Zone: string;
  /** 实例版本（支持"5.6.4"、"6.4.3"、"6.8.2"、"7.5.1"、"7.10.1"） */
  EsVersion: string;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 访问密码（密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号） */
  Password: string;
  /** 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_） */
  InstanceName?: string;
  /** 已废弃请使用NodeInfoList节点数量（2-50个） */
  NodeNum?: number;
  /** 计费类型PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值POSTPAID_BY_HOUR */
  ChargeType?: string;
  /** 包年包月购买时长（单位由参数TimeUnit决定） */
  ChargePeriod?: number;
  /** 自动续费标识RENEW_FLAG_AUTO：自动续费RENEW_FLAG_MANUAL：不自动续费，用户手动续费ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费 */
  RenewFlag?: string;
  /** 已废弃请使用NodeInfoList节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  NodeType?: string;
  /** 已废弃请使用NodeInfoList节点磁盘类型CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘 CLOUD_HSSD：增强型SSD云硬盘 CLOUD_BSSD：通用型SSD云硬盘默认值CLOUD_SSD */
  DiskType?: string;
  /** 已废弃请使用NodeInfoList节点磁盘容量（单位GB） */
  DiskSize?: number;
  /** 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”） */
  TimeUnit?: string;
  /** 是否自动使用代金券0：不自动使用1：自动使用默认值0 */
  AutoVoucher?: number;
  /** 代金券ID列表（目前仅支持指定一张代金券） */
  VoucherIds?: string[];
  /** 已废弃请使用NodeInfoList是否创建专用主节点true：开启专用主节点false：不开启专用主节点默认值false */
  EnableDedicatedMaster?: boolean;
  /** 已废弃请使用NodeInfoList专用主节点个数（只支持3个和5个，EnableDedicatedMaster为true时该值必传） */
  MasterNodeNum?: number;
  /** 已废弃请使用NodeInfoList专用主节点类型（EnableDedicatedMaster为true时必传）ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  MasterNodeType?: string;
  /** 已废弃请使用NodeInfoList专用主节点磁盘大小（单位GB，非必传，若传递则必须为50，暂不支持自定义） */
  MasterNodeDiskSize?: number;
  /** 集群配置文件中的ClusterName（系统默认配置为实例ID，暂不支持自定义） */
  ClusterNameInConf?: string;
  /** 集群部署方式0：单可用区部署1：多可用区部署，北京、上海、上海金融、广州、南京、香港、新加坡、法兰克福（白名单控制）默认为0 */
  DeployMode?: number;
  /** 多可用区部署时可用区的详细信息(DeployMode为1时必传) */
  MultiZoneInfo?: ZoneDetail[];
  /** License类型oss：开源版basic：基础版platinum：白金版默认值platinum */
  LicenseType?: string;
  /** 节点信息列表， 用于描述集群各类节点的规格信息如节点类型，节点个数，节点规格，磁盘类型，磁盘大小等 */
  NodeInfoList?: NodeInfo[];
  /** 节点标签信息列表 */
  TagList?: TagInfo[];
  /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启 */
  BasicSecurityType?: number;
  /** 场景化模板类型 0：不启用 1：通用 2：日志 3：搜索 */
  SceneType?: number;
  /** 可视化节点配置 */
  WebNodeTypeInfo?: WebNodeTypeInfo;
  /** 创建https集群，默认是http */
  Protocol?: string;
  /** 可维护时间段 */
  OperationDuration?: OperationDuration;
  /** 是否开启存算分离 */
  EnableHybridStorage?: boolean;
  /** 是否开启essd 增强型云盘 */
  DiskEnhance?: number;
  /** 是否开启智能巡检 */
  EnableDiagnose?: boolean;
  /** cdcId，使用cdc子网时传递 */
  CdcId?: string;
  /** 置放群组亲和度，范围[0,10]，0表示不开启 */
  DisasterRecoverGroupAffinity?: number;
  /** 子产品ID枚举值： 开源版："sp_es_io2"， 基础版："sp_es_basic"，白金版："sp_es_platinum"，企业版："sp_es_enterprise"，CDC白金版："sp_es_cdc_platinum"，日志增强版："sp_es_enlogging"，tsearch："sp_tsearch_io2"，logstash："sp_es_logstash" ，可以为空，为空的时候后台取LicenseType映射该字段 */
  SubProductCode?: string;
  /** 读写分离模式：0-不开启，1-本地读写分离，2-远端读写分离 */
  ReadWriteMode?: number;
  /** 置放群组是否开启异步任务 */
  EnableScheduleRecoverGroup?: boolean;
  /** 置放群组开启异步任务的可维护时间段 */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
}

declare interface CreateInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 订单号 */
  DealName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLogstashInstanceRequest {
  /** 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_） */
  InstanceName: string;
  /** 可用区 */
  Zone: string;
  /** 实例版本（支持"6.8.13"、"7.10.1"） */
  LogstashVersion: string;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 节点数量（2-50个） */
  NodeNum?: number;
  /** 计费类型PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值POSTPAID_BY_HOUR */
  ChargeType?: string;
  /** 包年包月购买时长（单位由参数TimeUnit决定） */
  ChargePeriod?: number;
  /** 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”） */
  TimeUnit?: string;
  /** 是否自动使用代金券0：不自动使用1：自动使用默认值0 */
  AutoVoucher?: number;
  /** 代金券ID列表（目前仅支持指定一张代金券） */
  VoucherIds?: string[];
  /** 自动续费标识RENEW_FLAG_AUTO：自动续费RENEW_FLAG_MANUAL：不自动续费，用户手动续费ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费 */
  RenewFlag?: string;
  /** 节点规格LOGSTASH.S1.SMALL2：1核2GLOGSTASH.S1.MEDIUM4：2核4GLOGSTASH.S1.MEDIUM8：2核8GLOGSTASH.S1.LARGE16：4核16GLOGSTASH.S1.2XLARGE32：8核32GLOGSTASH.S1.4XLARGE32：16核32GLOGSTASH.S1.4XLARGE64：16核64G */
  NodeType?: string;
  /** 节点磁盘类型CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高硬能云硬盘默认值CLOUD_SSD */
  DiskType?: string;
  /** 节点磁盘容量（单位GB） */
  DiskSize?: number;
  /** License类型oss：开源版xpack：xpack版默认值xpack */
  LicenseType?: string;
  /** 标签信息列表 */
  TagList?: TagInfo[];
  /** 可维护时间段 */
  OperationDuration?: OperationDuration;
}

declare interface CreateLogstashInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServerlessInstanceRequest {
  /** 索引名，需以-AppId结尾 */
  IndexName: string;
  /** 可用区 */
  Zone?: string;
  /** 私有网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 创建的索引元数据JSON，如mappings、settings */
  IndexMetaJson?: string;
  /** 创建索引的空间ID */
  SpaceId?: string;
  /** 创建索引的用户名 */
  Username?: string;
  /** 创建索引的密码 */
  Password?: string;
  /** 创建数据接入 */
  ServerlessDi?: ServerlessDi;
  /** 是否自行添加白名单ip */
  AutoGetIp?: number;
  /** 标签信息 */
  TagList?: TagInfo[];
  /** kibana公网白名单 */
  KibanaWhiteIpList?: string[];
}

declare interface CreateServerlessInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 订单号 */
  DealName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServerlessSpaceV2Request {
  /** vpc信息 */
  VpcInfo: VpcInfo[];
  /** 索引空间名 */
  SpaceName?: string;
  /** 空间名称 */
  Zone?: string;
  /** 白名单列表 */
  KibanaWhiteIpList?: string[];
  /** 空间id */
  ZoneId?: number;
  /** 标签信息 */
  TagList?: TagInfo[];
}

declare interface CreateServerlessSpaceV2Response {
  /** 空间ID */
  SpaceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterSnapshotRequest {
  /** 集群实例Id，格式：es-xxxx */
  InstanceId: string;
  /** 快照仓库名称 */
  RepositoryName: string;
  /** 集群快照名称 */
  SnapshotName: string;
}

declare interface DeleteClusterSnapshotResponse {
  /** 集群id */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIndexRequest {
  /** ES集群ID */
  InstanceId: string;
  /** 删除的索引类型。auto：自治索引；normal：普通索引 */
  IndexType: string;
  /** 删除的索引名 */
  IndexName: string;
  /** 集群访问用户名 */
  Username?: string;
  /** 集群访问密码 */
  Password?: string;
  /** 后备索引名 */
  BackingIndexName?: string;
}

declare interface DeleteIndexResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DeleteInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLogstashInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DeleteLogstashInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLogstashPipelinesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 管道ID列表 */
  PipelineIds?: string[];
}

declare interface DeleteLogstashPipelinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServerlessInstanceRequest {
  /** serverless实例ID */
  InstanceId: string;
}

declare interface DeleteServerlessInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServerlessSpaceUserRequest {
  /** 空间的ID */
  SpaceId: string;
  /** 创建索引的用户名 */
  Username: string;
}

declare interface DeleteServerlessSpaceUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterSnapshotRequest {
  /** 集群实例Id，格式：es-xxxx */
  InstanceId: string;
  /** 快照仓库名称 */
  RepositoryName?: string;
  /** 集群快照名称 */
  SnapshotName?: string;
}

declare interface DescribeClusterSnapshotResponse {
  /** 集群实例Id，格式：es-xxxx */
  InstanceId?: string;
  /** 快照备份详情列表 */
  Snapshots?: Snapshots[];
  /** 快照仓库名称 */
  RepositoryName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiagnoseRequest {
  /** ES实例ID */
  InstanceId: string;
  /** 报告日期，格式20210301 */
  Date?: string;
  /** 报告返回份数 */
  Limit?: number;
}

declare interface DescribeDiagnoseResponse {
  /** 诊断报告个数 */
  Total?: number;
  /** 诊断报告列表 */
  DiagnoseResults?: DiagnoseResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIndexListRequest {
  /** 索引类型。auto：自治索引；normal：普通索引 */
  IndexType: string;
  /** ES集群ID */
  InstanceId?: string;
  /** 索引名，若填空则获取所有索引 */
  IndexName?: string;
  /** 集群访问用户名 */
  Username?: string;
  /** 集群访问密码 */
  Password?: string;
  /** 分页起始位置 */
  Offset?: number;
  /** 一页展示数量 */
  Limit?: number;
  /** 排序字段，支持索引名：IndexName、索引存储量：IndexStorage、索引创建时间：IndexCreateTime */
  OrderBy?: string;
  /** 过滤索引状态 */
  IndexStatusList?: string[];
  /** 排序顺序，支持asc、desc，默认为desc 数据格式"asc","desc" */
  Order?: string;
}

declare interface DescribeIndexListResponse {
  /** 索引元数据字段 */
  IndexMetaFields?: IndexMetaField[] | null;
  /** 查询总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIndexMetaRequest {
  /** ES集群ID */
  InstanceId: string;
  /** 索引类型。auto：自治索引；normal：普通索引 */
  IndexType: string;
  /** 索引名，若填空则获取所有索引 */
  IndexName: string;
  /** 集群访问用户名 */
  Username?: string;
  /** 集群访问密码 */
  Password?: string;
}

declare interface DescribeIndexMetaResponse {
  /** 索引元数据字段 */
  IndexMetaField?: IndexMetaField | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceLogsRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 日志类型，默认值为11, 主日志2, 搜索慢日志3, 索引慢日志4, GC日志 */
  LogType?: number;
  /** 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等 */
  SearchKey?: string;
  /** 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
  StartTime?: string;
  /** 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
  EndTime?: string;
  /** 分页起始值, 默认值为0 */
  Offset?: number;
  /** 分页大小，默认值为100，最大值100 */
  Limit?: number;
  /** 时间排序方式，默认值为00, 降序1, 升序 */
  OrderByType?: number;
}

declare interface DescribeInstanceLogsResponse {
  /** 返回的日志条数 */
  TotalCount?: number;
  /** 日志详细信息列表 */
  InstanceLogList?: InstanceLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceOperationsRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 起始时间, e.g. "2019-03-07 16:30:39" */
  StartTime: string;
  /** 结束时间, e.g. "2019-03-30 20:18:03" */
  EndTime: string;
  /** 分页起始值 */
  Offset: number;
  /** 分页大小 */
  Limit: number;
}

declare interface DescribeInstanceOperationsResponse {
  /** 操作记录总数 */
  TotalCount?: number;
  /** 操作记录 */
  Operations?: Operation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancePluginListRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分页起始值, 默认值0 */
  Offset?: number;
  /** 分页大小，默认值10 */
  Limit?: number;
  /** 排序字段1：插件名 pluginName */
  OrderBy?: string;
  /** 排序方式0：升序 asc1：降序 desc */
  OrderByType?: string;
  /** 0：系统插件 */
  PluginType?: number;
}

declare interface DescribeInstancePluginListResponse {
  /** 返回的插件个数 */
  TotalCount?: number;
  /** 插件信息列表 */
  PluginList?: DescribeInstancePluginInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 集群实例所属可用区，不传则默认所有可用区 */
  Zone?: string;
  /** 集群实例ID列表 */
  InstanceIds?: string[];
  /** 集群实例名称列表 */
  InstanceNames?: string[];
  /** 分页起始值, 默认值0 */
  Offset?: number;
  /** 分页大小，默认值20 */
  Limit?: number;
  /** 排序字段1：实例ID2：实例名称3：可用区4：创建时间若orderByKey未传递则按创建时间降序排序 */
  OrderByKey?: number;
  /** 排序方式0：升序1：降序若传递了orderByKey未传递orderByType, 则默认升序 */
  OrderByType?: number;
  /** 节点标签信息列表 */
  TagList?: TagInfo[];
  /** 私有网络vip列表 */
  IpList?: string[];
  /** 可用区列表 */
  ZoneList?: string[];
  /** 健康状态筛列表:0表示绿色，1表示黄色，2表示红色,-1表示未知 */
  HealthStatus?: number[];
  /** Vpc列表 筛选项 */
  VpcIds?: string[];
  /** cdc集群id */
  CdcId?: string;
}

declare interface DescribeInstancesResponse {
  /** 返回的实例个数 */
  TotalCount?: number;
  /** 实例详细信息列表 */
  InstanceList?: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogstashInstanceLogsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 日志类型，默认值为11, 主日志2, 慢日志3, GC日志 */
  LogType?: number;
  /** 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等 */
  SearchKey?: string;
  /** 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
  StartTime?: string;
  /** 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
  EndTime?: string;
  /** 分页起始值, 默认值为0 */
  Offset?: number;
  /** 分页大小，默认值为100，最大值100 */
  Limit?: number;
  /** 时间排序方式，默认值为00, 降序1, 升序 */
  OrderByType?: number;
}

declare interface DescribeLogstashInstanceLogsResponse {
  /** 返回的日志条数 */
  TotalCount?: number;
  /** 日志详细信息列表 */
  InstanceLogList?: InstanceLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogstashInstanceOperationsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 起始时间, e.g. "2019-03-07 16:30:39" */
  StartTime?: string;
  /** 结束时间, e.g. "2019-03-30 20:18:03" */
  EndTime?: string;
  /** 分页起始值 */
  Offset?: number;
  /** 分页大小 */
  Limit?: number;
}

declare interface DescribeLogstashInstanceOperationsResponse {
  /** 操作记录总数 */
  TotalCount: number;
  /** 操作记录 */
  Operations: Operation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogstashInstancesRequest {
  /** 实例所属可用区，不传则默认所有可用区 */
  Zone?: string;
  /** 实例ID列表 */
  InstanceIds?: string[];
  /** 实例名称列表 */
  InstanceNames?: string[];
  /** 分页起始值, 默认值0 */
  Offset?: number;
  /** 分页大小，默认值20 */
  Limit?: number;
  /** 排序字段1：实例ID2：实例名称3：可用区4：创建时间若orderKey未传递则按创建时间降序排序 */
  OrderByKey?: number;
  /** 排序方式0：升序1：降序若传递了orderByKey未传递orderByType, 则默认升序 */
  OrderByType?: number;
  /** VpcId 筛选项 */
  VpcIds?: string[];
  /** 标签信息列表 */
  TagList?: TagInfo[];
}

declare interface DescribeLogstashInstancesResponse {
  /** 返回的实例个数 */
  TotalCount: number;
  /** 实例详细信息列表 */
  InstanceList: LogstashInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogstashPipelinesRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeLogstashPipelinesResponse {
  /** 管道总数 */
  TotalCount: number;
  /** 管道列表 */
  LogstashPipelineList: LogstashPipelineInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerlessInstancesRequest {
  /** 索引集群ID */
  InstanceIds?: string[];
  /** 索引名 */
  IndexNames?: string[];
  /** 分页起始位置 */
  Offset?: number;
  /** 一页展示数量 */
  Limit?: number;
  /** 排序字段，支持索引名：IndexName、索引存储量：IndexStorage、索引创建时间：IndexCreateTime */
  OrderBy?: string;
  /** 过滤索引状态 */
  IndexStatusList?: string[];
  /** 排序顺序，支持asc、desc，默认为desc */
  Order?: string;
  /** 索引空间ID列表 */
  SpaceIds?: string[];
  /** 数据链路数据源类型 */
  DiSourceTypes?: string[];
  /** 标签信息 */
  TagList?: TagInfo[];
}

declare interface DescribeServerlessInstancesResponse {
  /** 索引元数据字段 */
  IndexMetaFields?: ServerlessIndexMetaField[] | null;
  /** 查询总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerlessMetricsRequest {
  /** space空间id */
  SpaceId?: string;
  /** index索引id */
  IndexId?: string;
  /** 指标类型，暂时只支持Storage(存储大小),AllMetric(所有存储指标：索引流量、存储大小、文档数量、读请求和写请求) */
  MetricType?: string[];
  /** 时间长度类型DurationType(1: 3小时, 2: 昨天1天,3: 今日0点到现在) */
  DurationType?: number;
  /** 索引数据 */
  BatchIndexList?: string[];
}

declare interface DescribeServerlessMetricsResponse {
  /** storage指标值，单位byte */
  Storage?: number;
  /** IndexTraffic指标值，单位byte */
  IndexTraffic?: number;
  /** 读请求数，单位次数 */
  ReadReqTimes?: number;
  /** 写请求数，单位次数 */
  WriteReqTimes?: number;
  /** 文档数量，单位个数 */
  DocCount?: number;
  /** 指标数据数据 */
  MetricMapList?: MetricMapByIndexId[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerlessSpaceUserRequest {
  /** 空间的ID */
  SpaceId: string;
  /** 游标 */
  Offset?: number;
  /** 页条数 */
  Limit?: number;
  /** 用户名列表过滤 */
  UserNames?: string[];
  /** 用户类型 */
  UserTypes?: number[];
  /** 权限类型 */
  PrivilegeTypes?: number[];
}

declare interface DescribeServerlessSpaceUserResponse {
  /** 用户数组 */
  ServerlessSpaceUsers?: ServerlessSpaceUser[];
  /** 用户总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerlessSpacesRequest {
  /** 过滤的空间ID */
  SpaceIds?: string[];
  /** 过滤的空间名 */
  SpaceNames?: string[];
  /** 排序顺序，支持升序asc、降序desc */
  Order?: string;
  /** 排序字段，支持空间创建时间SpaceCreateTime */
  OrderBy?: string;
  /** vpcId信息数组 */
  VpcIds?: string[];
  /** 分页起始 */
  Offset?: number;
  /** 分页条数 */
  Limit?: number;
  /** 标签信息 */
  TagList?: TagInfo[];
}

declare interface DescribeServerlessSpacesResponse {
  /** 查询总数 */
  TotalCount?: number | null;
  /** Serverless空间信息列表 */
  ServerlessSpaces?: ServerlessSpace[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceKibanaToolsRequest {
  /** space的ID */
  SpaceId: string;
}

declare interface DescribeSpaceKibanaToolsResponse {
  /** 该token用于登录内嵌kibana */
  KibanaToken?: string;
  /** token的过期时间 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCosSnapshotListRequest {
  /** cos桶名 */
  CosBucket?: string;
  /** bucket 桶下的备份路径 */
  BasePath?: string;
  /** 云上集群迁移集群名 */
  ClusterInstanceId?: string;
}

declare interface DescribeUserCosSnapshotListResponse {
  /** cos 快照信息列表 */
  CosSnapshotInfoList?: CosSnapShotInfo[];
  /** cos 快照数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeViewsRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeViewsResponse {
  /** 集群维度视图 */
  ClusterView?: ClusterView | null;
  /** 节点维度视图 */
  NodesView?: NodeView[] | null;
  /** Kibana维度视图 */
  KibanasView?: KibanaView[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DiagnoseInstanceRequest {
  /** ES实例ID */
  InstanceId: string;
  /** 需要触发的诊断项 */
  DiagnoseJobs?: string[];
  /** 需要诊断的索引，支持通配符 */
  DiagnoseIndices?: string;
}

declare interface DiagnoseInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDiagnoseSettingsRequest {
  /** ES实例ID */
  InstanceId: string;
}

declare interface GetDiagnoseSettingsResponse {
  /** 智能运维诊断项和元信息 */
  DiagnoseJobMetas?: DiagnoseJobMeta[];
  /** 0：开启智能运维；-1：关闭智能运维 */
  Status?: number;
  /** 智能运维每天定时巡检时间 */
  CronTime?: string;
  /** 智能运维当天已手动触发诊断次数 */
  Count?: number;
  /** 智能运维每天最大可手动触发次数 */
  MaxCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRequestTargetNodeTypesRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface GetRequestTargetNodeTypesResponse {
  /** 接收请求的目标节点类型列表 */
  TargetNodeTypes?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRenewInstanceRequest {
  /** 集群实例Id */
  InstanceId: string;
}

declare interface InquirePriceRenewInstanceResponse {
  /** 刊例价，即集群原始价格 */
  OriginalPrice?: number;
  /** 折后价 */
  DiscountPrice?: number;
  /** 折扣，如65折 */
  Discount?: number;
  /** 货币，如CNY代表人民币 */
  Currency?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstallInstanceModelRequest {
  /** 实例ID */
  InstanceId: string;
  /** 客户上传到cos的模型地址，单次请求限制一个。cos文件为压缩文件，格式包括：zip、tgz和tar.gz */
  UsrCosModelUrlList?: string[];
}

declare interface InstallInstanceModelResponse {
  /** 发起异步流程的flowId */
  FlowId?: string;
  /** 调用接口的错误信息 */
  ErrMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEsVipSecurityGroupRequest {
  /** es集群的实例id */
  InstanceId: string;
  /** 安全组id列表 */
  SecurityGroupIds?: string[];
}

declare interface ModifyEsVipSecurityGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 是否强制重启true：强制重启false：不强制重启默认false */
  ForceRestart?: boolean;
  /** 重启模式：0 滚动重启； 1 全量重启 */
  RestartMode?: number;
  /** 重启时选择是否升级内核patch版本 */
  UpgradeKernel?: boolean;
}

declare interface RestartInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartKibanaRequest {
  /** ES实例ID */
  InstanceId: string;
}

declare interface RestartKibanaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartLogstashInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 重启类型，0全量重启，1滚动重启 */
  Type?: number;
}

declare interface RestartLogstashInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartNodesRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 节点名称列表 */
  NodeNames: string[];
  /** 是否强制重启 */
  ForceRestart?: boolean;
  /** 可选重启模式"in-place","blue-green"，分别表示重启，蓝绿重启；默认值为"in-place" */
  RestartMode?: string;
  /** 节点状态，在蓝绿模式中使用；离线节点蓝绿有风险 */
  IsOffline?: boolean;
  /** cvm延迟上架时间 */
  CvmDelayOnlineTime?: number;
  /** 分片迁移并发数 */
  ShardAllocationConcurrents?: number;
  /** 分片迁移并发速度 */
  ShardAllocationBytes?: number;
  /** 是否开启置放群组异步任务 */
  EnableScheduleRecoverGroup?: boolean;
  /** 置放群组异步任务时间段 */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
}

declare interface RestartNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestoreClusterSnapshotRequest {
  /** 集群实例Id，格式：es-xxxx */
  InstanceId: string;
  /** 仓库名称 */
  RepositoryName: string;
  /** 集群快照名称 */
  SnapshotName: string;
  /** 目标集群实例Id，格式：es-xxxx，如果是恢复到本地，则和InstanceId一致 */
  TargetInstanceId: string;
  /** elastic用户名对应的密码信息 */
  Password?: string;
  /** 要在所有恢复的索引中添加或更改的设置的逗号分隔列表。使用此参数可以在恢复快照时覆盖索引设置。 */
  IndexSettings?: string;
  /** 不应从快照还原的以逗号分隔的索引设置列表。 */
  IncludeGlobalState?: string[];
  /** 需要恢复的索引名称，非必填，为空则表示恢复所有支持传多个索引名称 */
  Indices?: string;
  /** 如果为 false，则如果快照中包含的一个或多个索引没有所有主分片可用，则整个恢复操作将失败。默认为 false,如果为 true，则允许恢复具有不可用分片的索引的部分快照。只有成功包含在快照中的分片才会被恢复。所有丢失的碎片将被重新创建为空 */
  Partial?: string;
}

declare interface RestoreClusterSnapshotResponse {
  /** 集群实例id */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SaveAndDeployLogstashPipelineRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例管道信息 */
  Pipeline: LogstashPipeline;
  /** 操作类型1：只保存2：保存并部署 */
  OpType?: number;
}

declare interface SaveAndDeployLogstashPipelineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartLogstashPipelinesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 管道ID列表 */
  PipelineIds: string[];
}

declare interface StartLogstashPipelinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopLogstashPipelinesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 管道ID列表 */
  PipelineIds: string[];
}

declare interface StopLogstashPipelinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDiagnoseSettingsRequest {
  /** ES实例ID */
  InstanceId: string;
  /** 0：开启智能运维；-1：关闭智能运维 */
  Status?: number;
  /** 智能运维每天定时巡检时间，时间格式为HH:00:00，例如15:00:00 */
  CronTime?: string;
}

declare interface UpdateDiagnoseSettingsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDictionariesRequest {
  /** ES实例ID */
  InstanceId: string;
  /** 安装时填IK分词主词典COS地址，删除时填词典名如test.dic */
  IkMainDicts?: string[];
  /** 安装时填IK分词停用词词典COS地址，删除时填词典名如test.dic */
  IkStopwords?: string[];
  /** 安装时填同义词词典COS地址，删除时填词典名如test.dic */
  Synonym?: string[];
  /** 安装时填QQ分词词典COS地址，删除时填词典名如test.dic */
  QQDict?: string[];
  /** 0：安装；1：删除。默认值0 */
  UpdateType?: number;
  /** 是否强制重启集群。默认值false */
  ForceRestart?: boolean;
}

declare interface UpdateDictionariesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateIndexRequest {
  /** ES集群ID */
  InstanceId: string;
  /** 更新的索引类型。auto：自治索引；normal：普通索引 */
  IndexType: string;
  /** 更新的索引名 */
  IndexName: string;
  /** 更新的索引元数据JSON，如mappings、settings */
  UpdateMetaJson?: string;
  /** 集群访问用户名 */
  Username?: string;
  /** 集群访问密码 */
  Password?: string;
  /** 是否滚动后备索引 */
  RolloverBackingIndex?: boolean;
}

declare interface UpdateIndexResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_） */
  InstanceName?: string;
  /** 已废弃请使用NodeInfoList节点个数（2-50个） */
  NodeNum?: number;
  /** ES配置项（JSON格式字符串） */
  EsConfig?: string;
  /** 默认用户elastic的密码（8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号） */
  Password?: string;
  /** 可视化组件（Kibana、Cerebro）的公网访问策略 */
  EsAcl?: EsAcl;
  /** 已废弃请使用NodeInfoList磁盘大小（单位GB） */
  DiskSize?: number;
  /** 已废弃请使用NodeInfoList节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  NodeType?: string;
  /** 已废弃请使用NodeInfoList专用主节点个数（只支持3个或5个） */
  MasterNodeNum?: number;
  /** 已废弃请使用NodeInfoList专用主节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
  MasterNodeType?: string;
  /** 已废弃请使用NodeInfoList专用主节点磁盘大小（单位GB系统默认配置为50GB,暂不支持自定义） */
  MasterNodeDiskSize?: number;
  /** 更新配置时是否强制重启true强制重启false不强制重启当前仅更新EsConfig时需要设置，默认值为false */
  ForceRestart?: boolean;
  /** COS自动备份信息 */
  CosBackup?: CosBackup;
  /** 节点信息列表，可以只传递要更新的节点及其对应的规格信息。支持的操作包括修改一种节点的个数修改一种节点的节点规格及磁盘大小增加一种节点类型（需要同时指定该节点的类型，个数，规格，磁盘等信息）上述操作一次只能进行一种，且磁盘类型不支持修改 */
  NodeInfoList?: NodeInfo[];
  /** ES集群公网访问状态OPEN 开启CLOSE 关闭 */
  PublicAccess?: string;
  /** 公网访问控制列表 */
  EsPublicAcl?: EsPublicAcl;
  /** Kibana公网访问状态OPEN 开启CLOSE 关闭 */
  KibanaPublicAccess?: string;
  /** Kibana内网访问状态OPEN 开启CLOSE 关闭 */
  KibanaPrivateAccess?: string;
  /** ES 6.8及以上版本基础版开启或关闭用户认证 */
  BasicSecurityType?: number;
  /** Kibana内网端口 */
  KibanaPrivatePort?: number;
  /** 0: 蓝绿变更方式扩容，集群不重启 （默认） 1: 磁盘解挂载扩容，集群滚动重启 */
  ScaleType?: number;
  /** 多可用区部署 */
  MultiZoneInfo?: ZoneDetail[];
  /** 场景化模板类型 -1：不启用 1：通用 2：日志 3：搜索 */
  SceneType?: number;
  /** Kibana配置项（JSON格式字符串） */
  KibanaConfig?: string;
  /** 可视化节点配置 */
  WebNodeTypeInfo?: WebNodeTypeInfo;
  /** 切换到新网络架构 */
  SwitchPrivateLink?: string;
  /** 启用Cerebro */
  EnableCerebro?: boolean;
  /** Cerebro公网访问状态OPEN 开启CLOSE 关闭 */
  CerebroPublicAccess?: string;
  /** Cerebro内网访问状态OPEN 开启CLOSE 关闭 */
  CerebroPrivateAccess?: string;
  /** 新增或修改的配置组信息 */
  EsConfigSet?: EsConfigSetInfo;
  /** 可维护时间段 */
  OperationDuration?: OperationDurationUpdated;
  /** 是否开启Alerting 外网告警输出：OPEN 开启CLOSE 关闭 */
  KibanaAlteringPublicAccess?: string;
  /** kibana内网自定义域名 */
  KibanaPrivateDomain?: string;
  /** cerebro内网自定义域名 */
  CerebroPrivateDomain?: string;
  /** 变更为https集群，默认是http */
  Protocol?: string;
  /** 节点出站访问详细信息 */
  OutboundPublicAcls?: OutboundPublicAcl[];
  /** 节点出站访问操作OPEN 开启CLOSE 关闭 */
  OutboundPublicAccess?: string;
  /** cvm延迟上架参数 */
  CvmDelayOnlineTime?: number;
  /** 分片迁移并发数 */
  ShardAllocationConcurrents?: number;
  /** 分片迁移并发速度 */
  ShardAllocationBytes?: number;
  /** 读写分离模式：-1-不开启，1-本地读写分离，2-远端读写分离 */
  ReadWriteMode?: number;
  /** 是否开启置放群组异步任务 */
  EnableScheduleRecoverGroup?: boolean;
  /** 置放群组异步任务可维护时间段 */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
}

declare interface UpdateInstanceResponse {
  /** 订单号 */
  DealName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateJdkRequest {
  /** ES实例ID */
  InstanceId: string;
  /** Jdk类型，支持kona和oracle */
  Jdk?: string;
  /** Gc类型，支持g1和cms */
  Gc?: string;
  /** 是否强制重启 */
  ForceRestart?: boolean;
}

declare interface UpdateJdkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateLogstashInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例节点数量 */
  NodeNum?: number;
  /** 实例YML配置 */
  YMLConfig?: string;
  /** 实例绑定的ES集群信息 */
  BindedES?: LogstashBindedES;
  /** 实例名称 */
  InstanceName?: string;
  /** 扩展文件列表 */
  ExtendedFiles?: LogstashExtendedFile[];
  /** 实例规格 */
  NodeType?: string;
  /** 节点磁盘容量 */
  DiskSize?: number;
  /** 可维护时间段 */
  OperationDuration?: OperationDurationUpdated;
}

declare interface UpdateLogstashInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateLogstashPipelineDescRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例管道ID */
  PipelineId: string;
  /** 管道描述信息 */
  PipelineDesc: string;
}

declare interface UpdateLogstashPipelineDescResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePluginsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 需要安装的插件名列表 */
  InstallPluginList?: string[];
  /** 需要卸载的插件名列表 */
  RemovePluginList?: string[];
  /** 是否强制重启，默认值false */
  ForceRestart?: boolean;
  /** 是否重新安装，默认值false */
  ForceUpdate?: boolean;
  /** 0：系统插件 */
  PluginType?: number;
}

declare interface UpdatePluginsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRequestTargetNodeTypesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 接收请求的目标节点类型列表 */
  TargetNodeTypes: string[];
}

declare interface UpdateRequestTargetNodeTypesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateServerlessInstanceRequest {
  /** Serveless实例ID */
  InstanceId: string;
  /** 更新的索引元数据JSON，如mappings、settings */
  UpdateMetaJson?: string;
  /** 实例访问密码 */
  Password?: string;
  /** 开启kibana内网访问，如OPEN、CLOSE */
  KibanaPrivateAccess?: string;
  /** 开启kibana外网访问，如OPEN、CLOSE */
  KibanaPublicAccess?: string;
  /** 访问控制列表 */
  KibanaPublicAcl?: KibanaPublicAcl;
}

declare interface UpdateServerlessInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateServerlessSpaceRequest {
  /** Serveless索引空间ID */
  SpaceId: string;
  /** Serveless索引空间名 */
  SpaceName?: string;
  /** kibana内网开关 */
  KibanaPrivateAccess?: string;
  /** kibana公网开关 */
  KibanaPublicAccess?: string;
  /** kibana公网白名单 */
  KibanaPublicAcl?: EsAcl;
}

declare interface UpdateServerlessSpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 目标ES版本，支持：”6.4.3“, "6.8.2"，"7.5.1", "7.10.1", "7.14.2" */
  EsVersion: string;
  /** 是否只做升级检查，默认值为false */
  CheckOnly?: boolean;
  /** 目标商业特性版本：oss 开源版basic 基础版当前仅在5.6.4升级6.x版本时使用，默认值为basic */
  LicenseType?: string;
  /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启 */
  BasicSecurityType?: number;
  /** 升级方式：scale 蓝绿变更restart 滚动重启默认值为scale */
  UpgradeMode?: string;
  /** 升级版本前是否对集群进行备份，默认不备份 */
  CosBackup?: boolean;
  /** 滚动模式时，是否跳过检查，进行强制重启。默认值为false */
  SkipCheckForceRestart?: boolean;
  /** cvm延迟上架参数 */
  CvmDelayOnlineTime?: number;
  /** 分片迁移并发数 */
  ShardAllocationConcurrents?: number;
  /** 分片迁移并发速度 */
  ShardAllocationBytes?: number;
  /** 是否开启置放群组异步任务 */
  EnableScheduleRecoverGroup?: boolean;
  /** 置放群组异步任务时间段 */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
}

declare interface UpgradeInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeLicenseRequest {
  /** 实例ID */
  InstanceId: string;
  /** License类型oss：开源版basic：基础版platinum：白金版默认值platinum */
  LicenseType: string;
  /** 是否自动使用代金券0：不自动使用1：自动使用默认值0 */
  AutoVoucher?: number;
  /** 代金券ID列表（目前仅支持指定一张代金券） */
  VoucherIds?: string[];
  /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启不传参时会默认维持原状，传参时需注意只能由不开启变为开启，无法由开启变为不开启 */
  BasicSecurityType?: number;
  /** 是否强制重启true强制重启false不强制重启 默认值false */
  ForceRestart?: boolean;
}

declare interface UpgradeLicenseResponse {
  /** 订单号 */
  DealName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Es Elasticsearch Service} */
declare interface Es {
  (): Versions;
  /** 检查cos迁移索引元数据 {@link CheckMigrateIndexMetaDataRequest} {@link CheckMigrateIndexMetaDataResponse} */
  CheckMigrateIndexMetaData(data: CheckMigrateIndexMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<CheckMigrateIndexMetaDataResponse>;
  /** 创建集群快照 {@link CreateClusterSnapshotRequest} {@link CreateClusterSnapshotResponse} */
  CreateClusterSnapshot(data: CreateClusterSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterSnapshotResponse>;
  /** cos迁移流程 {@link CreateCosMigrateToServerlessInstanceRequest} {@link CreateCosMigrateToServerlessInstanceResponse} */
  CreateCosMigrateToServerlessInstance(data: CreateCosMigrateToServerlessInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosMigrateToServerlessInstanceResponse>;
  /** 创建索引 {@link CreateIndexRequest} {@link CreateIndexResponse} */
  CreateIndex(data: CreateIndexRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIndexResponse>;
  /** 创建ES集群实例 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 创建Logstash实例 {@link CreateLogstashInstanceRequest} {@link CreateLogstashInstanceResponse} */
  CreateLogstashInstance(data: CreateLogstashInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLogstashInstanceResponse>;
  /** 创建Serverless索引 {@link CreateServerlessInstanceRequest} {@link CreateServerlessInstanceResponse} */
  CreateServerlessInstance(data: CreateServerlessInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServerlessInstanceResponse>;
  /** 创建Serverless索引项目空间(new) {@link CreateServerlessSpaceV2Request} {@link CreateServerlessSpaceV2Response} */
  CreateServerlessSpaceV2(data: CreateServerlessSpaceV2Request, config?: AxiosRequestConfig): AxiosPromise<CreateServerlessSpaceV2Response>;
  /** 删除快照仓库里备份的快照 {@link DeleteClusterSnapshotRequest} {@link DeleteClusterSnapshotResponse} */
  DeleteClusterSnapshot(data: DeleteClusterSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterSnapshotResponse>;
  /** 删除索引 {@link DeleteIndexRequest} {@link DeleteIndexResponse} */
  DeleteIndex(data: DeleteIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIndexResponse>;
  /** 销毁ES集群实例 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 删除Logstash实例 {@link DeleteLogstashInstanceRequest} {@link DeleteLogstashInstanceResponse} */
  DeleteLogstashInstance(data: DeleteLogstashInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogstashInstanceResponse>;
  /** 删除Logstash管道 {@link DeleteLogstashPipelinesRequest} {@link DeleteLogstashPipelinesResponse} */
  DeleteLogstashPipelines(data: DeleteLogstashPipelinesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogstashPipelinesResponse>;
  /** 删除Serverless索引 {@link DeleteServerlessInstanceRequest} {@link DeleteServerlessInstanceResponse} */
  DeleteServerlessInstance(data: DeleteServerlessInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServerlessInstanceResponse>;
  /** 删除Serverless空间子用户 {@link DeleteServerlessSpaceUserRequest} {@link DeleteServerlessSpaceUserResponse} */
  DeleteServerlessSpaceUser(data: DeleteServerlessSpaceUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServerlessSpaceUserResponse>;
  /** 获取快照备份列表 {@link DescribeClusterSnapshotRequest} {@link DescribeClusterSnapshotResponse} */
  DescribeClusterSnapshot(data: DescribeClusterSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterSnapshotResponse>;
  /** 查询智能运维诊断结果报告 {@link DescribeDiagnoseRequest} {@link DescribeDiagnoseResponse} */
  DescribeDiagnose(data: DescribeDiagnoseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiagnoseResponse>;
  /** 获取索引列表 {@link DescribeIndexListRequest} {@link DescribeIndexListResponse} */
  DescribeIndexList(data: DescribeIndexListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexListResponse>;
  /** 获取索引元数据 {@link DescribeIndexMetaRequest} {@link DescribeIndexMetaResponse} */
  DescribeIndexMeta(data: DescribeIndexMetaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexMetaResponse>;
  /** 查询ES集群日志 {@link DescribeInstanceLogsRequest} {@link DescribeInstanceLogsResponse} */
  DescribeInstanceLogs(data: DescribeInstanceLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogsResponse>;
  /** 查询实例操作记录 {@link DescribeInstanceOperationsRequest} {@link DescribeInstanceOperationsResponse} */
  DescribeInstanceOperations(data: DescribeInstanceOperationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceOperationsResponse>;
  /** 查询实例插件列表 {@link DescribeInstancePluginListRequest} {@link DescribeInstancePluginListResponse} */
  DescribeInstancePluginList(data: DescribeInstancePluginListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancePluginListResponse>;
  /** 查询ES集群实例 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询Logstash实例日志 {@link DescribeLogstashInstanceLogsRequest} {@link DescribeLogstashInstanceLogsResponse} */
  DescribeLogstashInstanceLogs(data: DescribeLogstashInstanceLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogstashInstanceLogsResponse>;
  /** 查询Logstash实例操作记录 {@link DescribeLogstashInstanceOperationsRequest} {@link DescribeLogstashInstanceOperationsResponse} */
  DescribeLogstashInstanceOperations(data: DescribeLogstashInstanceOperationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogstashInstanceOperationsResponse>;
  /** 获取Logstash实例列表 {@link DescribeLogstashInstancesRequest} {@link DescribeLogstashInstancesResponse} */
  DescribeLogstashInstances(data?: DescribeLogstashInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogstashInstancesResponse>;
  /** 获取Logstash实例管道列表 {@link DescribeLogstashPipelinesRequest} {@link DescribeLogstashPipelinesResponse} */
  DescribeLogstashPipelines(data: DescribeLogstashPipelinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogstashPipelinesResponse>;
  /** Serverless获取索引列表 {@link DescribeServerlessInstancesRequest} {@link DescribeServerlessInstancesResponse} */
  DescribeServerlessInstances(data?: DescribeServerlessInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerlessInstancesResponse>;
  /** 获取实例对应的监控指标 {@link DescribeServerlessMetricsRequest} {@link DescribeServerlessMetricsResponse} */
  DescribeServerlessMetrics(data?: DescribeServerlessMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerlessMetricsResponse>;
  /** 查看Serverless空间子用户 {@link DescribeServerlessSpaceUserRequest} {@link DescribeServerlessSpaceUserResponse} */
  DescribeServerlessSpaceUser(data: DescribeServerlessSpaceUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerlessSpaceUserResponse>;
  /** 获取Serverless索引空间列表 {@link DescribeServerlessSpacesRequest} {@link DescribeServerlessSpacesResponse} */
  DescribeServerlessSpaces(data?: DescribeServerlessSpacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerlessSpacesResponse>;
  /** space维度的kibana获取登录token {@link DescribeSpaceKibanaToolsRequest} {@link DescribeSpaceKibanaToolsResponse} */
  DescribeSpaceKibanaTools(data: DescribeSpaceKibanaToolsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceKibanaToolsResponse>;
  /** 查询快照信息接口 {@link DescribeUserCosSnapshotListRequest} {@link DescribeUserCosSnapshotListResponse} */
  DescribeUserCosSnapshotList(data?: DescribeUserCosSnapshotListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCosSnapshotListResponse>;
  /** 查询集群视图 {@link DescribeViewsRequest} {@link DescribeViewsResponse} */
  DescribeViews(data: DescribeViewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeViewsResponse>;
  /** 智能运维诊断集群 {@link DiagnoseInstanceRequest} {@link DiagnoseInstanceResponse} */
  DiagnoseInstance(data: DiagnoseInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DiagnoseInstanceResponse>;
  /** 查看智能运维配置 {@link GetDiagnoseSettingsRequest} {@link GetDiagnoseSettingsResponse} */
  GetDiagnoseSettings(data: GetDiagnoseSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<GetDiagnoseSettingsResponse>;
  /** 获取接收客户端请求的节点类型 {@link GetRequestTargetNodeTypesRequest} {@link GetRequestTargetNodeTypesResponse} */
  GetRequestTargetNodeTypes(data: GetRequestTargetNodeTypesRequest, config?: AxiosRequestConfig): AxiosPromise<GetRequestTargetNodeTypesResponse>;
  /** 集群续费询价 {@link InquirePriceRenewInstanceRequest} {@link InquirePriceRenewInstanceResponse} */
  InquirePriceRenewInstance(data: InquirePriceRenewInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRenewInstanceResponse>;
  /** 安装ES集群模型 {@link InstallInstanceModelRequest} {@link InstallInstanceModelResponse} */
  InstallInstanceModel(data: InstallInstanceModelRequest, config?: AxiosRequestConfig): AxiosPromise<InstallInstanceModelResponse>;
  /** 修改集群VIP绑定的安全组 {@link ModifyEsVipSecurityGroupRequest} {@link ModifyEsVipSecurityGroupResponse} */
  ModifyEsVipSecurityGroup(data: ModifyEsVipSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEsVipSecurityGroupResponse>;
  /** 重启ES集群实例 {@link RestartInstanceRequest} {@link RestartInstanceResponse} */
  RestartInstance(data: RestartInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartInstanceResponse>;
  /** 重启Kibana {@link RestartKibanaRequest} {@link RestartKibanaResponse} */
  RestartKibana(data: RestartKibanaRequest, config?: AxiosRequestConfig): AxiosPromise<RestartKibanaResponse>;
  /** 重启Logstash实例 {@link RestartLogstashInstanceRequest} {@link RestartLogstashInstanceResponse} */
  RestartLogstashInstance(data: RestartLogstashInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartLogstashInstanceResponse>;
  /** 重启集群节点 {@link RestartNodesRequest} {@link RestartNodesResponse} */
  RestartNodes(data: RestartNodesRequest, config?: AxiosRequestConfig): AxiosPromise<RestartNodesResponse>;
  /** 快照备份恢复 {@link RestoreClusterSnapshotRequest} {@link RestoreClusterSnapshotResponse} */
  RestoreClusterSnapshot(data: RestoreClusterSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<RestoreClusterSnapshotResponse>;
  /** 保存并部署管道 {@link SaveAndDeployLogstashPipelineRequest} {@link SaveAndDeployLogstashPipelineResponse} */
  SaveAndDeployLogstashPipeline(data: SaveAndDeployLogstashPipelineRequest, config?: AxiosRequestConfig): AxiosPromise<SaveAndDeployLogstashPipelineResponse>;
  /** 启动Logstash管道 {@link StartLogstashPipelinesRequest} {@link StartLogstashPipelinesResponse} */
  StartLogstashPipelines(data: StartLogstashPipelinesRequest, config?: AxiosRequestConfig): AxiosPromise<StartLogstashPipelinesResponse>;
  /** 停止Logstash管道 {@link StopLogstashPipelinesRequest} {@link StopLogstashPipelinesResponse} */
  StopLogstashPipelines(data: StopLogstashPipelinesRequest, config?: AxiosRequestConfig): AxiosPromise<StopLogstashPipelinesResponse>;
  /** 更新智能运维配置 {@link UpdateDiagnoseSettingsRequest} {@link UpdateDiagnoseSettingsResponse} */
  UpdateDiagnoseSettings(data: UpdateDiagnoseSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDiagnoseSettingsResponse>;
  /** 更新ES集群词典 {@link UpdateDictionariesRequest} {@link UpdateDictionariesResponse} */
  UpdateDictionaries(data: UpdateDictionariesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDictionariesResponse>;
  /** 更新索引 {@link UpdateIndexRequest} {@link UpdateIndexResponse} */
  UpdateIndex(data: UpdateIndexRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateIndexResponse>;
  /** 更新ES集群实例 {@link UpdateInstanceRequest} {@link UpdateInstanceResponse} */
  UpdateInstance(data: UpdateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateInstanceResponse>;
  /** 更新实例Jdk配置 {@link UpdateJdkRequest} {@link UpdateJdkResponse} */
  UpdateJdk(data: UpdateJdkRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateJdkResponse>;
  /** 更新Logstash实例 {@link UpdateLogstashInstanceRequest} {@link UpdateLogstashInstanceResponse} */
  UpdateLogstashInstance(data: UpdateLogstashInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateLogstashInstanceResponse>;
  /** 更新管道描述 {@link UpdateLogstashPipelineDescRequest} {@link UpdateLogstashPipelineDescResponse} */
  UpdateLogstashPipelineDesc(data: UpdateLogstashPipelineDescRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateLogstashPipelineDescResponse>;
  /** 变更插件列表 {@link UpdatePluginsRequest} {@link UpdatePluginsResponse} */
  UpdatePlugins(data: UpdatePluginsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePluginsResponse>;
  /** 更新接收客户端请求的节点类型 {@link UpdateRequestTargetNodeTypesRequest} {@link UpdateRequestTargetNodeTypesResponse} */
  UpdateRequestTargetNodeTypes(data: UpdateRequestTargetNodeTypesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRequestTargetNodeTypesResponse>;
  /** 更新Serverless索引 {@link UpdateServerlessInstanceRequest} {@link UpdateServerlessInstanceResponse} */
  UpdateServerlessInstance(data: UpdateServerlessInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateServerlessInstanceResponse>;
  /** 更新Serverless索引空间 {@link UpdateServerlessSpaceRequest} {@link UpdateServerlessSpaceResponse} */
  UpdateServerlessSpace(data: UpdateServerlessSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateServerlessSpaceResponse>;
  /** 升级ES集群版本 {@link UpgradeInstanceRequest} {@link UpgradeInstanceResponse} */
  UpgradeInstance(data: UpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceResponse>;
  /** 升级ES商业特性 {@link UpgradeLicenseRequest} {@link UpgradeLicenseResponse} */
  UpgradeLicense(data: UpgradeLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeLicenseResponse>;
}

export declare type Versions = ["2018-04-16"];

export default Es;
