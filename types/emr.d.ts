/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 资源描述 */
declare interface AllNodeResourceSpec {
  /** 描述Master节点资源 */
  MasterResourceSpec?: NodeResourceSpec | null;
  /** 描述Core节点资源 */
  CoreResourceSpec?: NodeResourceSpec | null;
  /** 描述Taskr节点资源 */
  TaskResourceSpec?: NodeResourceSpec | null;
  /** 描述Common节点资源 */
  CommonResourceSpec?: NodeResourceSpec | null;
  /** Master节点数量 */
  MasterCount?: number;
  /** Corer节点数量 */
  CoreCount?: number;
  /** Task节点数量 */
  TaskCount?: number;
  /** Common节点数量 */
  CommonCount?: number;
}

/** yarn application 统计信息 */
declare interface ApplicationStatics {
  /** 队列名 */
  Queue: string;
  /** 用户名 */
  User: string;
  /** 作业类型 */
  ApplicationType: string;
  /** SumMemorySeconds含义 */
  SumMemorySeconds: number;
  /** SumVCoreSeconds含义 */
  SumVCoreSeconds: number;
  /** SumHDFSBytesWritten（带单位） */
  SumHDFSBytesWritten: string;
  /** SumHDFSBytesRead（待单位） */
  SumHDFSBytesRead: string;
  /** 作业数 */
  CountApps: number;
}

/** 通用的参数 */
declare interface Arg {
  /** key */
  Key?: string;
  /** 值列表 */
  Values?: string[] | null;
}

/** 自动伸缩组高级设置 */
declare interface AutoScaleGroupAdvanceAttrs {
  /** 计算资源高级设置 */
  ComputeResourceAdvanceParams?: ComputeResourceAdvanceParams;
}

/** 弹性扩缩容记录 */
declare interface AutoScaleRecord {
  /** 扩缩容规则名。 */
  StrategyName?: string;
  /** "SCALE_OUT"和"SCALE_IN"，分别表示扩容和缩容。 */
  ScaleAction?: string;
  /** 取值为"SUCCESS","FAILED","PART_SUCCESS","IN_PROCESS"，分别表示成功、失败、部分成功和流程中。 */
  ActionStatus?: string;
  /** 流程触发时间。 */
  ActionTime?: string;
  /** 扩缩容相关描述信息。 */
  ScaleInfo?: string;
  /** 只在ScaleAction为SCALE_OUT时有效。 */
  ExpectScaleNum?: number;
  /** 流程结束时间。 */
  EndTime?: string;
  /** 策略类型，按负载或者按时间，1表示负载伸缩，2表示时间伸缩 */
  StrategyType?: number;
  /** 扩容时所使用规格信息。 */
  SpecInfo?: string;
  /** 补偿扩容，0表示不开启，1表示开启 */
  CompensateFlag?: number;
  /** 补偿次数 */
  CompensateCount?: number;
  /** 重试次数 */
  RetryCount?: number;
  /** 重试信息 */
  RetryInfo?: string;
  /** 重试英文描述 */
  RetryEnReason?: string;
  /** 重试描述 */
  RetryReason?: string;
}

/** 弹性扩缩容规格配置 */
declare interface AutoScaleResourceConf {
  /** 配置ID。 */
  Id?: number;
  /** 集群实例ID。 */
  ClusterId?: number;
  /** 自动扩缩容保留最小实例数。 */
  ScaleLowerBound?: number;
  /** 自动扩缩容最大实例数。 */
  ScaleUpperBound?: number;
  /** 扩容规则类型，1为按负载指标扩容规则，2为按时间扩容规则 */
  StrategyType?: number;
  /** 下次可扩容时间。 */
  NextTimeCanScale?: number;
  /** 优雅缩容开关 */
  GraceDownFlag?: boolean;
  /** "CVM"表示规格全部使用CVM相关类型，"POD"表示规格使用容器相关类型,默认为"CVM"。 */
  HardwareType?: string;
  /** "POSTPAY"表示只使用按量计费，"SPOT_FIRST"表示竞价实例优先，只有HardwareType为"HOST"时支持竞价实例优先，"POD"只支持纯按量计费。 */
  PayMode?: string;
  /** 竞价实例优先的场景下，按量计费资源数量的最低百分比，整数 */
  PostPayPercentMin?: number;
  /** 预设资源类型为HOST时，支持勾选“资源不足时切换POD”；支持取消勾选；0表示默认不勾选（0），1表示勾选 */
  ChangeToPod?: number;
  /** 伸缩组名 */
  GroupName?: string;
  /** 标签 */
  YarnNodeLabel?: string;
  /** 伸缩组状态 */
  GroupStatus?: number;
  /** 并行伸缩 0关闭；1开启 */
  Parallel?: number;
  /** 是否支持MNode */
  EnableMNode?: number;
  /** 伸缩组更多设置 */
  ExtraAdvanceAttrs?: AutoScaleGroupAdvanceAttrs;
}

/** 引导脚本 */
declare interface BootstrapAction {
  /** 脚本位置，支持cos上的文件，且只支持https协议。 */
  Path: string;
  /** 执行时间。resourceAfter 表示在机器资源申请成功后执行。clusterBefore 表示在集群初始化前执行。clusterAfter 表示在集群初始化后执行。 */
  WhenRun: string;
  /** 脚本参数 */
  Args?: string[];
}

/** CBS实例信息 */
declare interface CBSInstance {
  /** 云硬盘ID */
  DiskId?: string;
  /** 云硬盘类型 */
  DiskUsage?: string;
  /** 云硬盘名称 */
  DiskName?: string;
  /** 云硬盘大小 */
  DiskSize?: number;
  /** 云盘介质类型 */
  DiskType?: string;
  /** 是否跟随实例删除 */
  DeleteWithInstance?: boolean;
  /** 云硬盘收费类型 */
  DiskChargeType?: string;
  /** 云硬盘运行状态 */
  DiskState?: string;
  /** 是否自动续费 */
  RenewFlag?: string;
  /** 到期时间 */
  DeadlineTime?: string;
  /** 云盘是否挂载到云主机上 */
  Attached?: boolean;
  /** 当前时间距离盘到期的天数 */
  DifferDaysOfDeadline?: number;
  /** 该云盘当前被挂载到的CVM实例InstanceId */
  InstanceIdList?: string[] | null;
  /** 云硬盘挂载的云主机ID */
  InstanceId?: string;
  /** 云盘是否为共享型云盘。 */
  Shareable?: boolean;
  /** emr节点ID */
  EmrResourceId?: string;
  /** 包销到期时间 */
  UnderwriteExpiredTime?: string;
}

/** 容器集群Pod服务CLB设置 */
declare interface CLBSetting {
  /** CLB类型，PUBLIC_IP表示支持公网CLB和INTERNAL_IP表示支持内网CLB字段 */
  CLBType?: string;
  /** Vpc和子网信息设置 */
  VPCSettings?: VPCSettings | null;
}

/** COS 相关配置 */
declare interface COSSettings {
  /** COS SecretId */
  CosSecretId: string;
  /** COS SecrectKey */
  CosSecretKey: string;
  /** 日志存储在COS上的路径 */
  LogOnCosPath?: string;
}

/** 资源调度-容量调度器的全局设置 */
declare interface CapacityGlobalConfig {
  /** 是否开启了标签调度 */
  EnableLabel?: boolean;
  /** 如果开启了标签调度，标签信息存放的路径 */
  LabelDir?: string | null;
  /** 是否覆盖用户指定队列，为true表示覆盖。 */
  QueueMappingOverride?: boolean | null;
  /** 高级设置 */
  DefaultSettings?: DefaultSetting[] | null;
}

/** 出参 */
declare interface CdbInfo {
  /** 数据库实例 */
  InstanceName?: string;
  /** 数据库IP */
  Ip?: string;
  /** 数据库端口 */
  Port?: number;
  /** 数据库内存规格 */
  MemSize?: number;
  /** 数据库磁盘规格 */
  Volume?: number;
  /** 服务标识 */
  Service?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 申请时间 */
  ApplyTime?: string;
  /** 付费类型 */
  PayType?: number;
  /** 过期标识 */
  ExpireFlag?: boolean;
  /** 数据库状态 */
  Status?: number;
  /** 续费标识 */
  IsAutoRenew?: number;
  /** 数据库字符串 */
  SerialNo?: string;
  /** ZoneId */
  ZoneId?: number;
  /** RegionId */
  RegionId?: number;
}

/** 容器集群Pod请求资源信息 */
declare interface CloudResource {
  /** 组件角色名 */
  ComponentName: string;
  /** pod请求数量 */
  PodNumber: number;
  /** Cpu请求数量最大值 */
  LimitCpu: number;
  /** 内存请求数量最大值 */
  LimitMemory: number;
  /** 服务名称，如HIVE */
  Service?: string;
  /** 数据卷目录设置 */
  VolumeDir?: VolumeSetting | null;
  /** 组件外部访问设置 */
  ExternalAccess?: ExternalAccess | null;
  /** 节点亲和性设置 */
  Affinity?: NodeAffinity | null;
  /** 所选数据盘信息 */
  Disks?: Disk[] | null;
}

/** 当前集群共用组件与集群对应关系 */
declare interface ClusterExternalServiceInfo {
  /** 依赖关系，0:被其他集群依赖，1:依赖其他集群 */
  DependType?: number;
  /** 共用组件 */
  Service?: string;
  /** 共用集群 */
  ClusterId?: string;
  /** 共用集群状态 */
  ClusterStatus?: number;
}

/** 集群id与流程id的mapping */
declare interface ClusterIDToFlowID {
  /** 集群id */
  ClusterId?: string;
  /** 流程id */
  FlowId?: number;
}

/** 集群实例信息 */
declare interface ClusterInstancesInfo {
  /** ID号 */
  Id?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 标题 */
  Ftitle?: string | null;
  /** 集群名 */
  ClusterName?: string;
  /** 地域ID */
  RegionId?: number;
  /** 地区ID */
  ZoneId?: number;
  /** 用户APPID */
  AppId?: number;
  /** 用户UIN */
  Uin?: string;
  /** 项目Id */
  ProjectId?: number;
  /** 集群VPCID */
  VpcId?: number;
  /** 子网ID */
  SubnetId?: number;
  /** 实例的状态码。取值范围：2：表示集群运行中。3：表示集群创建中。4：表示集群扩容中。5：表示集群增加router节点中。6：表示集群安装组件中。7：表示集群执行命令中。8：表示重启服务中。9：表示进入维护中。10：表示服务暂停中。11：表示退出维护中。12：表示退出暂停中。13：表示配置下发中。14：表示销毁集群中。15：表示销毁core节点中。16：销毁task节点中。17：表示销毁router节点中。18：表示更改webproxy密码中。19：表示集群隔离中。20：表示集群冲正中。21：表示集群回收中。22：表示变配等待中。23：表示集群已隔离。24：表示缩容节点中。33：表示集群等待退费中。34：表示集群已退费。301：表示创建失败。302：表示扩容失败。 */
  Status?: number;
  /** 添加时间 */
  AddTime?: string;
  /** 已经运行时间 */
  RunTime?: string;
  /** 集群产品配置信息 */
  Config?: EmrProductConfigOutter | null;
  /** 主节点外网IP */
  MasterIp?: string;
  /** EMR版本 */
  EmrVersion?: string;
  /** 收费类型 */
  ChargeType?: number;
  /** 交易版本 */
  TradeVersion?: number;
  /** 资源订单ID */
  ResourceOrderId?: number;
  /** 是否计费集群 */
  IsTradeCluster?: number;
  /** 集群错误状态告警信息 */
  AlarmInfo?: string;
  /** 是否采用新架构 */
  IsWoodpeckerCluster?: number;
  /** 元数据库信息 */
  MetaDb?: string;
  /** 标签信息 */
  Tags?: Tag[] | null;
  /** Hive元数据信息 */
  HiveMetaDb?: string;
  /** 集群类型:EMR,CLICKHOUSE,DRUID */
  ServiceClass?: string;
  /** 集群所有节点的别名序列化 */
  AliasInfo?: string;
  /** 集群版本Id */
  ProductId?: number;
  /** 地区ID */
  Zone?: string;
  /** 场景名称 */
  SceneName?: string;
  /** 场景化集群类型 */
  SceneServiceClass?: string;
  /** 场景化EMR版本 */
  SceneEmrVersion?: string;
  /** 场景化集群类型 */
  DisplayName?: string;
  /** vpc name */
  VpcName?: string;
  /** subnet name */
  SubnetName?: string;
  /** 集群依赖关系 */
  ClusterExternalServiceInfo?: ClusterExternalServiceInfo[] | null;
  /** 集群vpcid 字符串类型 */
  UniqVpcId?: string;
  /** 子网id 字符串类型 */
  UniqSubnetId?: string;
  /** 节点信息 */
  TopologyInfoList?: TopologyInfo[] | null;
  /** 是否是跨AZ集群 */
  IsMultiZoneCluster?: boolean;
  /** 是否开通异常节点自动补偿 */
  IsCvmReplace?: boolean;
  /** 标题 */
  ClusterTitle?: string;
  /** 集群产品配置信息 */
  ConfigDetail?: EmrProductConfigDetail | null;
  /** 集群绑定的文件系统数 */
  BindFileSystemNum?: number;
  /** rss集群的绑定列表 */
  ClusterRelationInfoList?: ClusterRelationMeta[] | null;
  /** Redis信息 */
  RedisId?: string;
}

/** 集群间绑定使用信息 */
declare interface ClusterRelationMeta {
  /** 集群类型 */
  ClusterType?: string;
  /** 集群id列表 */
  ClusterIdList?: string[] | null;
}

/** 集群配置。 */
declare interface ClusterSetting {
  /** 付费方式。PREPAID 包年包月。POSTPAID_BY_HOUR 按量计费，默认方式。 */
  InstanceChargeType: string;
  /** 是否为HA集群。 */
  SupportHA: boolean;
  /** 集群所使用的安全组，目前仅支持一个。 */
  SecurityGroupIds: string[];
  /** 实例位置。 */
  Placement: Placement;
  /** 实例所在VPC。 */
  VPCSettings: VPCSettings;
  /** 实例登录配置。 */
  LoginSettings: LoginSettings;
  /** 实例标签，示例：["{\"TagKey\":\"test-tag1\",\"TagValue\":\"001\"}","{\"TagKey\":\"test-tag2\",\"TagValue\":\"002\"}"]。 */
  TagSpecification: string[];
  /** 元数据库配置。 */
  MetaDB: MetaDbInfo;
  /** 实例硬件配置。 */
  ResourceSpec: JobFlowResourceSpec;
  /** 是否申请公网IP，默认为false。 */
  PublicIpAssigned?: boolean;
  /** 包年包月配置，只对包年包月集群生效。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 集群置放群组。 */
  DisasterRecoverGroupIds?: string;
  /** 是否使用cbs加密。 */
  CbsEncryptFlag?: boolean;
  /** 是否使用远程登录，默认为false。 */
  RemoteTcpDefaultPort?: boolean;
}

/** 操作的进程范围 */
declare interface ComponentBasicRestartInfo {
  /** 进程名，必填，如NameNode */
  ComponentName?: string;
  /** 操作的IP列表 */
  IpList?: string[] | null;
}

/** 计算资源高级设置 */
declare interface ComputeResourceAdvanceParams {
  /** 节点Label数组 */
  Labels?: TkeLabel[];
  /** 节点污点 */
  Taints?: Taint[];
  /** base64 编码的用户脚本，在初始化节点之前执行 */
  PreStartUserScript?: string;
  /** base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看 */
  UserScript?: string;
}

/** 资源调度 - 队列修改信息 */
declare interface ConfigModifyInfoV2 {
  /** 操作类型，可选值：- 0：新建队列- 1：编辑-全量覆盖- 2：新建子队列- 3：删除- 4：克隆，与新建子队列的行为一样，特别的对于`fair`，可以复制子队列到新建队列- 6：编辑-增量更新 */
  OpType: number;
  /** 队列名称，不支持修改。 */
  Name?: string;
  /** 新建队列 传root的MyId；新建子队列 传 选中队列的 myId；克隆 要传 选中队列 parentId */
  ParentId?: string;
  /** 编辑、删除 传选中队列的 myId。克隆只有在调度器是`fair`时才需要传，用来复制子队列到新队列。 */
  MyId?: string;
  /** 基础配置信息。key的取值与**DescribeYarnQueue**返回的字段一致。###### 公平调度器key的取值信息如下：- type，父队列，取值为 **parent** 或 **null**- aclSubmitApps，提交访问控制，取值为**AclForYarnQueue类型的json串**或**null**- aclAdministerApps，管理访问控制，取值为**AclForYarnQueue类型的json串**或**null**- minSharePreemptionTimeout，最小共享优先权超时时间，取值为**数字字符串**或**null**- fairSharePreemptionTimeout，公平份额抢占超时时间，取值为**数字字符串**或**null**- fairSharePreemptionThreshold，公平份额抢占阈值，取值为**数字字符串**或**null**，其中数字的范围是（0，1]- allowPreemptionFrom，抢占模式，取值为**布尔字符串**或**null**- schedulingPolicy，调度策略，取值为**drf**、**fair**、**fifo**或**null**```type AclForYarnQueue struct {	User *string `json:"user"` //用户名	Group *string `json:"group"`//组名}```###### 容量调度器key的取值信息如下：- state，队列状态，取值为**STOPPED**或**RUNNING**- default-node-label-expression，默认标签表达式，取值为**标签**或**null**- acl_submit_applications，提交访问控制，取值为**AclForYarnQueue类型的json串**或**null**- acl_administer_queue，管理访问控制，取值为**AclForYarnQueue类型的json串**或**null**- maximum-allocation-mb，分配Container最大内存数量，取值为**数字字符串**或**null**- maximum-allocation-vcores，Container最大vCore数量，取值为**数字字符串**或**null**```type AclForYarnQueue struct {	User *string `json:"user"` //用户名	Group *string `json:"group"`//组名}``` */
  BasicParams?: ItemSeq | null;
  /** 配置集信息，取值见该复杂类型的参数说明。配置集是计划模式在队列中表现，表示的是不同时间段不同的配置值，所有队列的配置集名称都一样，对于单个队列，每个配置集中的标签与参数都一样，只是参数值不同。 */
  ConfigSetParams?: ConfigSetInfo[] | null;
  /** 容量调度专用，`OpType`为`6`时才生效，表示要删除这个队列中的哪些标签。优先级高于ConfigSetParams中的LabelParams。 */
  DeleteLables?: string[] | null;
}

/** 资源调度-配置集信息 */
declare interface ConfigSetInfo {
  /** 配置集名称 */
  ConfigSet: string;
  /** 容量调度器会使用，里面设置了标签相关的配置。key的取值与**DescribeYarnQueue**返回的字段一致。key的取值信息如下：- labelName，标签名称，标签管理里的标签。- capacity，容量，取值为**数字字符串**- maximum-capacity，最大容量，取值为**数字字符串** */
  LabelParams?: ItemSeq[] | null;
  /** 设置配置集相关的参数。key的取值与**DescribeYarnQueue**返回的字段一致。###### 公平调度器key的取值信息如下：- minResources，最大资源量，取值为**YarnResource类型的json串**或**null**- maxResources，最大资源量，取值为**YarnResource类型的json串**或**null**- maxChildResources，能够分配给为未声明子队列的最大资源量，取值为**数字字符串**或**null**- maxRunningApps，最高可同时处于运行的App数量，取值为**数字字符串**或**null**- weight，权重，取值为**数字字符串**或**null**- maxAMShare，App Master最大份额，取值为**数字字符串**或**null**，其中数字的范围是[0，1]或-1```type YarnResource struct {	Vcores *int `json:"vcores"`	Memory *int `json:"memory"`	Type *string `json:"type"` // 取值为`percent`或`null`当值为`percent`时，表示使用的百分比，否则就是使用的绝对数值。只有maxResources、maxChildResources才可以取值为`percent`}```###### 容量调度器key的取值信息如下：- minimum-user-limit-percent，用户最小容量，取值为**YarnResource类型的json串**或**null**，其中数字的范围是[0，100]- user-limit-factor，用户资源因子，取值为**YarnResource类型的json串**或**null**- maximum-applications，最大应用数Max-Applications，取值为**数字字符串**或**null**，其中数字为正整数- maximum-am-resource-percent，最大AM比例，取值为**数字字符串**或**null**，其中数字的范围是[0，1]或-1- default-application-priority，资源池优先级，取值为**数字字符串**或**null**，其中数字为正整数 */
  BasicParams?: Item[] | null;
}

/** 自定义配置参数 */
declare interface Configuration {
  /** 配置文件名，支持SPARK、HIVE、HDFS、YARN的部分配置文件自定义。 */
  Classification: string;
  /** 配置参数通过KV的形式传入，部分文件支持自定义，可以通过特殊的键"content"传入所有内容。 */
  Properties: string;
}

/** 配置项（配置管理页） */
declare interface ConfigurationItem {
  /** 配置项名称 */
  Name: string;
  /** 配置项值 */
  Value: string;
  /** 所在的配置文件名 */
  InFile?: string;
}

/** 用户Hive-MetaDB信息 */
declare interface CustomMetaDBInfo {
  /** 自定义MetaDB的JDBC连接，示例: jdbc:mysql://10.10.10.10:3306/dbname */
  MetaDataJdbcUrl?: string;
  /** 自定义MetaDB用户名 */
  MetaDataUser?: string;
  /** 自定义MetaDB密码 */
  MetaDataPass?: string;
  /** hive共享元数据库类型。取值范围：EMR_DEFAULT_META：表示集群默认创建EMR_EXIST_META：表示集群使用指定EMR-MetaDB。USER_CUSTOM_META：表示集群使用自定义MetaDB。 */
  MetaType?: string;
  /** EMR-MetaDB实例 */
  UnifyMetaInstanceId?: string;
}

/** 用户自建Hive-MetaDB信息 */
declare interface CustomMetaInfo {
  /** 自定义MetaDB的JDBC连接，请以 jdbc:mysql:// 开头 */
  MetaDataJdbcUrl?: string;
  /** 自定义MetaDB用户名 */
  MetaDataUser?: string;
  /** 自定义MetaDB密码 */
  MetaDataPass?: string;
}

/** 共用自建组件参数 */
declare interface CustomServiceDefine {
  /** 自定义参数key */
  Name?: string;
  /** 自定义参数value */
  Value?: string;
}

/** DAG信息 */
declare interface DAGInfo {
  /** 查询ID */
  ID?: string;
  /** DAG类型，目前只支持starrocks */
  Type?: string;
  /** 返回的DAG的JSON字符串 */
  Content?: string;
}

/** 弹性扩缩容按天重复任务描述 */
declare interface DayRepeatStrategy {
  /** 重复任务执行的具体时刻，例如"01:02:00" */
  ExecuteAtTimeOfDay: string;
  /** 每隔Step天执行一次 */
  Step: number;
}

/** 资源调度的默认设置 */
declare interface DefaultSetting {
  /** 名称，作为入参的key */
  Name?: string;
  /** 描述 */
  Desc?: string;
  /** 提示 */
  Prompt?: string;
  /** key，用于展示，该配置对应与配置文件中的配置项 */
  Key?: string;
  /** Name对应的值 */
  Value?: string;
}

/** 共用组件信息 */
declare interface DependService {
  /** 共用组件名 */
  ServiceName: string;
  /** 共用组件集群 */
  InstanceId: string;
}

/** 节点规格 */
declare interface DescribeNodeSpec {
  /** 节点类型 */
  NodeType: string;
  /** 节点类型名称 */
  NodeName: string;
  /** Types数组 */
  Types?: NodeSpecType[] | null;
  /** 云托管节点机型规格列表 */
  CmnTypes?: NodeSpecType[] | null;
}

/** DescribeResourceConfig接口出参 */
declare interface DescribeResourceConfig {
  /** 规格管理类型 */
  ResourceType?: string;
  /** 规格管理数据 */
  ResourceData?: NodeResource[];
}

/** 动态生成的变更详情 */
declare interface DiffDetail {
  /** tab页的头 */
  Name?: string;
  /** 变化项的个数 */
  Count?: number;
  /** 要渲染的明细数据 */
  Rows?: DiffDetailItem[] | null;
  /** 要渲染的头部信息 */
  Header?: DiffHeader[] | null;
}

/** 动态生成的变更详情条目 */
declare interface DiffDetailItem {
  /** 属性 */
  Attribute?: string;
  /** 当前生效 */
  InEffect?: string;
  /** 待生效 */
  PendingEffectiveness?: string;
  /** 操作 */
  Operation?: string;
  /** 队列 */
  Queue?: string;
  /** 配置集 */
  ConfigSet?: string;
  /** 标签 */
  LabelName?: string;
  /** 当前所在位置 */
  InEffectIndex?: string;
  /** 待生效的位置 */
  PendingEffectIndex?: string;
  /** 计划模式名称 */
  PlanName?: string;
  /** 标签 */
  Label?: string;
  /** 放置规则 */
  RuleName?: string;
  /** 用户名 */
  UserName?: string;
}

/** 动态生成的变更详情 */
declare interface DiffHeader {
  /** 名称 */
  Name?: string;
  /** ID，前端会使用 */
  Id?: string;
}

/** 磁盘信息 */
declare interface Disk {
  /** 数据盘类型，创建EMR容器集群实例可选 SSD云盘: CLOUD_SSD高效云盘: CLOUD_PREMIUM */
  DiskType?: string;
  /** 单块大小GB */
  DiskCapacity?: number;
  /** 数据盘数量 */
  DiskNumber?: number;
}

/** 磁盘组。 */
declare interface DiskGroup {
  /** 磁盘规格。 */
  Spec: DiskSpec;
  /** 同类型磁盘数量。 */
  Count: number;
}

/** 磁盘描述。 */
declare interface DiskSpec {
  /** 磁盘类型。LOCAL_BASIC 本地盘。CLOUD_BASIC 云硬盘。LOCAL_SSD 本地SSD。CLOUD_SSD 云SSD。CLOUD_PREMIUM 高效云盘。CLOUD_HSSD 增强型云SSD。 */
  DiskType: string;
  /** 磁盘大小，单位GB。 */
  DiskSize: number;
}

/** 节点磁盘信息 */
declare interface DiskSpecInfo {
  /** 磁盘数量 */
  Count: number;
  /** 系统盘类型 取值范围：CLOUD_SSD：表示云SSD。CLOUD_PREMIUM：表示高效云盘。CLOUD_BASIC：表示云硬盘。LOCAL_BASIC：表示本地盘。LOCAL_SSD：表示本地SSD。数据盘类型 取值范围：CLOUD_SSD：表示云SSD。CLOUD_PREMIUM：表示高效云盘。CLOUD_BASIC：表示云硬盘。LOCAL_BASIC：表示本地盘。LOCAL_SSD：表示本地SSD。CLOUD_HSSD：表示增强型SSD云硬盘。CLOUD_THROUGHPUT：表示吞吐型云硬盘。CLOUD_TSSD：表示极速型SSD云硬盘。CLOUD_BIGDATA：表示大数据型云硬盘。CLOUD_HIGHIO：表示高IO型云硬盘。CLOUD_BSSD：表示通用型SSD云硬盘。REMOTE_SSD：表示远端SSD盘。 */
  DiskType: string;
  /** 数据容量，单位为GB */
  DiskSize: number;
  /** 额外性能 */
  ExtraPerformance?: number;
}

/** 采样序列 */
declare interface Dps {
  /** 时间戳 */
  Timestamp?: string;
  /** 采样值 */
  Value?: string;
}

/** POD浮动规格 */
declare interface DynamicPodSpec {
  /** 需求最小cpu核数 */
  RequestCpu?: number;
  /** 需求最大cpu核数 */
  LimitCpu?: number;
  /** 需求最小memory，单位MB */
  RequestMemory?: number;
  /** 需求最大memory，单位MB */
  LimitMemory?: number;
}

/** 集群列表返回示例 */
declare interface EmrListInstance {
  /** 集群ID */
  ClusterId?: string;
  /** 常见状态描述：集群生产中,集群运行中,集群创建中,集群已关闭,集群已删除 */
  StatusDesc?: string;
  /** 集群名字 */
  ClusterName?: string;
  /** 集群地域 */
  ZoneId?: number;
  /** 用户APPID */
  AppId?: number;
  /** 创建时间 */
  AddTime?: string;
  /** 运行时间 */
  RunTime?: string;
  /** 集群IP */
  MasterIp?: string;
  /** 集群版本 */
  EmrVersion?: string;
  /** 集群计费类型 */
  ChargeType?: number;
  /** emr ID */
  Id?: number;
  /** 产品ID */
  ProductId?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 区域 */
  RegionId?: number;
  /** 子网ID */
  SubnetId?: number;
  /** 网络ID */
  VpcId?: number;
  /** 地区 */
  Zone?: string;
  /** 状态码, 取值为-2(集群已删除), -1(集群已关闭), 0(集群生产中), 2(集群运行中), 3(集群创建中) */
  Status?: number;
  /** 实例标签 */
  Tags?: Tag[] | null;
  /** 告警信息 */
  AlarmInfo?: string;
  /** 是否是woodpecker集群 */
  IsWoodpeckerCluster?: number;
  /** Vpc中文 */
  VpcName?: string;
  /** 子网中文 */
  SubnetName?: string;
  /** 字符串VpcId */
  UniqVpcId?: string;
  /** 字符串子网 */
  UniqSubnetId?: string;
  /** 集群类型 */
  ClusterClass?: string;
  /** 是否为跨AZ集群 */
  IsMultiZoneCluster?: boolean;
  /** 是否手戳集群 */
  IsHandsCluster?: boolean;
  /** 体外客户端组件信息 */
  OutSideSoftInfo?: SoftDependInfo[] | null;
  /** 当前集群的应用场景是否支持体外客户端 */
  IsSupportOutsideCluster?: boolean;
  /** 是否专有集群场景集群 */
  IsDedicatedCluster?: boolean;
  /** 集群支持克隆 */
  IsSupportClone?: boolean;
}

/** Emr询价描述 */
declare interface EmrPrice {
  /** 刊例价格 */
  OriginalCost?: string;
  /** 折扣价格 */
  DiscountCost?: string;
  /** 单位 */
  Unit?: string;
  /** 询价配置 */
  PriceSpec?: PriceResource | null;
  /** 是否支持竞价实例 */
  SupportSpotPaid?: boolean;
}

/** EMR产品配置 */
declare interface EmrProductConfigDetail {
  /** 软件信息 */
  SoftInfo?: string[] | null;
  /** Master节点个数 */
  MasterNodeSize?: number;
  /** Core节点个数 */
  CoreNodeSize?: number;
  /** Task节点个数 */
  TaskNodeSize?: number;
  /** Common节点个数 */
  ComNodeSize?: number;
  /** Master节点资源 */
  MasterResource?: ResourceDetail | null;
  /** Core节点资源 */
  CoreResource?: ResourceDetail | null;
  /** Task节点资源 */
  TaskResource?: ResourceDetail | null;
  /** Common节点资源 */
  ComResource?: ResourceDetail | null;
  /** 是否使用COS */
  OnCos?: boolean;
  /** 收费类型 */
  ChargeType?: number;
  /** Router节点个数 */
  RouterNodeSize?: number;
  /** 是否支持HA */
  SupportHA?: boolean;
  /** 是否支持安全模式 */
  SecurityOn?: boolean;
  /** 安全组名称 */
  SecurityGroup?: string;
  /** 是否开启Cbs加密 */
  CbsEncrypt?: number;
  /** 自定义应用角色。 */
  ApplicationRole?: string;
  /** 安全组 */
  SecurityGroups?: string[] | null;
  /** SSH密钥Id */
  PublicKeyId?: string;
}

/** EMR产品配置 */
declare interface EmrProductConfigOutter {
  /** 软件信息 */
  SoftInfo?: string[] | null;
  /** Master节点个数 */
  MasterNodeSize?: number | null;
  /** Core节点个数 */
  CoreNodeSize?: number | null;
  /** Task节点个数 */
  TaskNodeSize?: number | null;
  /** Common节点个数 */
  ComNodeSize?: number | null;
  /** Master节点资源 */
  MasterResource?: OutterResource | null;
  /** Core节点资源 */
  CoreResource?: OutterResource | null;
  /** Task节点资源 */
  TaskResource?: OutterResource | null;
  /** Common节点资源 */
  ComResource?: OutterResource | null;
  /** 是否使用COS */
  OnCos?: boolean | null;
  /** 收费类型 */
  ChargeType?: number | null;
  /** Router节点个数 */
  RouterNodeSize?: number | null;
  /** 是否支持HA */
  SupportHA?: boolean | null;
  /** 是否支持安全模式 */
  SecurityOn?: boolean | null;
  /** 集群初始安全组id */
  SecurityGroup?: string | null;
  /** 是否开启Cbs加密 */
  CbsEncrypt?: number | null;
  /** 自定义应用角色。 */
  ApplicationRole?: string | null;
  /** 安全组id */
  SecurityGroups?: string[] | null;
  /** SSH密钥Id */
  PublicKeyId?: string | null;
}

/** 执行动作。 */
declare interface Execution {
  /** 任务类型，目前支持以下类型。1. “MR”，将通过hadoop jar的方式提交。2. "HIVE"，将通过hive -f的方式提交。3. "SPARK"，将通过spark-submit的方式提交。 */
  JobType: string;
  /** 任务参数，提供除提交指令以外的参数。 */
  Args: string[];
}

/** 容器集群外部访问设置 */
declare interface ExternalAccess {
  /** 外部访问类型，当前仅支持CLB字段 */
  Type?: string;
  /** CLB设置信息 */
  CLBServer?: CLBSetting | null;
}

/** 共用组件信息 */
declare interface ExternalService {
  /** 共用组件类型，EMR/CUSTOM */
  ShareType: string;
  /** 共用组件名 */
  Service: string;
  /** 共用组件集群 */
  InstanceId: string;
  /** 自定义参数集合 */
  CustomServiceDefineList: CustomServiceDefine[];
}

/** 资源调度-公平调度器的全局配置 */
declare interface FairGlobalConfig {
  /** 对应与页面的程序上限 */
  UserMaxAppsDefault?: number | null;
}

/** 键值对过滤器，用于条件过滤查询. */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name?: string;
  /** 字段的过滤值。 */
  Values?: string[];
}

/** Emr集群列表实例自定义查询过滤 */
declare interface Filters {
  /** 字段名称 */
  Name: string;
  /** 过滤字段值 */
  Values: string[];
}

/** 流程额外信息 */
declare interface FlowExtraDetail {
  /** 额外信息Title */
  Title?: string;
  /** 额外信息 */
  Detail?: FlowParamsDesc[] | null;
}

/** FlowParam流程参数 */
declare interface FlowParam {
  /** 流程参数keyTraceId：通过TraceId查询FlowId： 通过FlowId查询 */
  FKey: string;
  /** 参数value */
  FValue: string;
}

/** 任务参数描述 */
declare interface FlowParamsDesc {
  /** 参数key */
  PKey?: string;
  /** 参数value */
  PValue?: string;
}

/** 集群所有伸缩组全局参数信息 */
declare interface GroupGlobalConfs {
  /** 伸缩组信息 */
  GroupGlobalConf?: AutoScaleResourceConf | null;
  /** 当前伸缩组扩容出来的节点数量。 */
  CurrentNodes?: number;
  /** 当前伸缩组扩容出来的后付费节点数量。 */
  CurrentPostPaidNodes?: number;
  /** 当前伸缩组扩容出来的竞价实例节点数量。 */
  CurrentSpotPaidNodes?: number;
}

/** 用户组信息 */
declare interface GroupInfo {
  /** 组名 */
  GroupName?: string;
  /** 备注 */
  Description?: string;
  /** 用户列表 */
  Users?: string[];
}

/** 用户组信息 */
declare interface GroupInfos {
  /** 用户组名称 */
  GroupName?: string;
  /** 用户名称列表 */
  Users?: string[];
  /** 备注 */
  Description?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 用户组类型 */
  GroupType?: number;
  /** 用户组类型描述 */
  GroupTypeDesc?: string;
}

/** 进程健康状态 */
declare interface HealthStatus {
  /** 运行正常 */
  Code: number;
  /** 运行正常 */
  Text: string;
  /** 运行正常 */
  Desc: string;
}

/** Hive查询详情 */
declare interface HiveQuery {
  /** 查询语句 */
  Statement?: string;
  /** 执行时长 */
  Duration?: string;
  /** 开始时间毫秒 */
  StartTime?: number;
  /** 结束时间毫秒 */
  EndTime?: number;
  /** 状态 */
  State?: string;
  /** 用户 */
  User?: string;
  /** appId列表 */
  JobIds?: string[] | null;
  /** 执行引擎 */
  ExecutionEngine?: string;
  /** 查询ID */
  Id?: string;
}

/** 主机路径 */
declare interface HostPathVolumeSource {
  /** 主机路径 */
  Path?: string;
  /** 主机路径类型，当前默认DirectoryOrCreate */
  Type?: string;
}

/** Pod HostPath挂载方式描述 */
declare interface HostVolumeContext {
  /** Pod挂载宿主机的目录。资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用 */
  VolumePath: string;
}

/** Impala查询详情 */
declare interface ImpalaQuery {
  /** 执行语句 */
  Statement?: string;
  /** 查询ID */
  Id?: string;
  /** 开始时间 */
  StartTime?: number;
  /** 运行时间 */
  Duration?: string;
  /** 结束时间 */
  EndTime?: number;
  /** 执行状态 */
  State?: string;
  /** 获取行数 */
  RowsFetched?: number;
  /** 用户 */
  User?: string;
  /** 默认DB */
  DefaultDB?: string;
  /** 执行的Coordinator节点 */
  Coordinator?: string;
  /** 单节点内存峰值 */
  MaxNodePeakMemoryUsage?: string;
  /** 查询类型 */
  QueryType?: string;
  /** 扫描的HDFS行数 */
  ScanHDFSRows?: number;
  /** 扫描的Kudu行数 */
  ScanKUDURows?: number;
  /** 扫描的总行数 */
  ScanRowsTotal?: number;
  /** 读取的总字节数 */
  TotalBytesRead?: number;
  /** 发送的总字节数 */
  TotalBytesSent?: number;
  /** CPU总时间 */
  TotalCpuTime?: number;
  /** 内部数据发送总量(Bytes) */
  TotalInnerBytesSent?: number;
  /** 内部扫描数据发送总量(Bytes) */
  TotalScanBytesSent?: number;
  /** 预估单节点内存 */
  EstimatedPerHostMemBytes?: number;
  /** 从缓存中获取的数据行数 */
  NumRowsFetchedFromCache?: number;
  /** 会话ID */
  SessionId?: string;
  /** 单节点内存峰值和(Bytes) */
  PerNodePeakMemoryBytesSum?: number;
  /** 后端个数 */
  BackendsCount?: number;
  /** fragment数 */
  FragmentInstancesCount?: number;
  /** 剩余未完成Fragment数 */
  RemainingFragmentCount?: number;
}

/** 洞察结果项 */
declare interface InsightResult {
  /** 当Type为HIVE时，是Hive查询ID，当Type为MAPREDUCE，SPARK，TEZ时则是YarnAppID */
  ID?: string;
  /** 洞察应用的类型，HIVE,SPARK,MAPREDUCE,TEZ */
  Type?: string;
  /** 洞察规则IDHIVE-ScanManyMeta:元数据扫描过多HIVE-ScanManyPartition:大表扫描HIVE-SlowCompile:编译耗时过长HIVE-UnSuitableConfig:不合理参数MAPREDUCE-MapperDataSkew:Map数据倾斜MAPREDUCE-MapperMemWaste:MapMemory资源浪费MAPREDUCE-MapperSlowTask:Map慢TaskMAPREDUCE-MapperTaskGC:MapperTaskGCMAPREDUCE-MemExceeded:峰值内存超限MAPREDUCE-ReducerDataSkew:Reduce数据倾斜MAPREDUCE-ReducerMemWaste:ReduceMemory资源浪费MAPREDUCE-ReducerSlowTask:Reduce慢TaskMAPREDUCE-ReducerTaskGC:ReducerTaskGCMAPREDUCE-SchedulingDelay:调度延迟SPARK-CpuWaste:CPU资源浪费SPARK-DataSkew:数据倾斜SPARK-ExecutorGC:ExecutorGCSPARK-MemExceeded:峰值内存超限SPARK-MemWaste:Memory资源浪费SPARK-ScheduleOverhead:ScheduleOverheadSPARK-ScheduleSkew:调度倾斜SPARK-SlowTask:慢TaskTEZ-DataSkew:数据倾斜TEZ-MapperDataSkew:Map数据倾斜TEZ-ReducerDataSkew:Reduce数据倾斜TEZ-TezMemWaste:Memory资源浪费TEZ-TezSlowTask:慢TaskTEZ-TezTaskGC:TasksGC */
  RuleID?: string;
  /** 洞察规则名字，可参考RuleID的说明 */
  RuleName?: string;
  /** 洞察规则解释 */
  RuleExplain?: string;
  /** 详情 */
  Detail?: string;
  /** 建议信息 */
  Suggestion?: string;
  /** 洞察异常衡量值，同类型的洞察项越大越严重，不同类型的洞察项无对比意义 */
  Value?: number;
  /** 调度任务执行ID */
  ScheduleTaskExecID?: string;
  /** 调度流，DAG */
  ScheduleFlowName?: string;
  /** 调度flow中的某个task节点 */
  ScheduleTaskName?: string;
  /** Yarn任务的部分核心配置 */
  JobConf?: string;
  /** 洞察结构化信息 */
  Context?: string | null;
}

/** 设置巡检任务配置 */
declare interface InspectionTaskSettings {
  /** 巡检任务的唯一标记 */
  TaskType: string;
  /** 巡检任务组名称 */
  Group?: string;
  /** 巡检任务名称 */
  Name?: string;
  /** 巡检任务参数设置 */
  TaskSettings?: TaskSettings[];
  /** 是否选中，”true“ ”false“ */
  Selected?: string;
  /** 是否开启监控 */
  Enable?: string;
  /** 事件Json模板 */
  SettingsJson?: string;
}

/** 实例预付费参数，只有在付费类型为PREPAID时生效。 */
declare interface InstanceChargePrepaid {
  /** 包年包月时间，默认为1，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 24, 36, 48, 60。 */
  Period: number;
  /** 是否自动续费，默认为否。true：是false：否 */
  RenewFlag: boolean;
}

/** 代表一个kv结构 */
declare interface Item {
  /** 健值 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 键值对组成的列表 */
declare interface ItemSeq {
  /** 标签名称 */
  Items: Item[] | null;
}

/** 机器资源描述。 */
declare interface JobFlowResource {
  /** 机器类型描述。 */
  Spec: string;
  /** 机器类型描述，可参考CVM的该含义。 */
  InstanceType: string;
  /** 标签KV对。 */
  Tags: Tag[];
  /** 磁盘描述列表。 */
  DiskGroups: DiskGroup[];
}

/** 流程作业资源描述 */
declare interface JobFlowResourceSpec {
  /** 主节点数量。 */
  MasterCount: number;
  /** 主节点配置。 */
  MasterResourceSpec: JobFlowResource;
  /** Core节点数量 */
  CoreCount: number;
  /** Core节点配置。 */
  CoreResourceSpec: JobFlowResource;
  /** Task节点数量。 */
  TaskCount?: number;
  /** Common节点数量。 */
  CommonCount?: number;
  /** Task节点配置。 */
  TaskResourceSpec?: JobFlowResource;
  /** Common节点配置。 */
  CommonResourceSpec?: JobFlowResource;
}

/** 任务步骤结果描述 */
declare interface JobResult {
  /** 任务步骤名称。 */
  Name: string;
  /** 任务步骤失败时的处理策略，可以为以下值："CONTINUE"，跳过当前失败步骤，继续后续步骤。“TERMINATE_CLUSTER”，终止当前及后续步骤，并销毁集群。“CANCEL_AND_WAIT”，取消当前步骤并阻塞等待处理。 */
  ActionOnFailure: string;
  /** 当前步骤的状态，可以为以下值：“JobFlowStepStatusInit”，初始化状态，等待执行。“JobFlowStepStatusRunning”，任务步骤正在执行。“JobFlowStepStatusFailed”，任务步骤执行失败。“JobFlowStepStatusSucceed”，任务步骤执行成功。 */
  JobState: string;
  /** YARN任务ID */
  ApplicationId?: string;
}

/** 键值对，主要用来做Filter */
declare interface KeyValue {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** Kyuubi查询信息 */
declare interface KyuubiQueryInfo {
  /** 提交IP */
  ClientIP?: string;
  /** 执行时长 */
  Duration?: number;
  /** 结束时间 */
  EndTime?: number;
  /** Engine Id */
  EngineID?: string;
  /** 计算引擎 */
  EngineType?: string;
  /** ID */
  Id?: string;
  /** Session Id */
  SessionID?: string;
  /** 开始时间 */
  BeginTime?: number;
  /** 执行状态 */
  ExecutionState?: string;
  /** 执行语句 */
  ExecutionStatement?: string;
  /** Statement Id */
  StatementID?: string;
  /** 提交用户 */
  User?: string;
}

/** 自动扩缩容基于负载指标的规则 */
declare interface LoadAutoScaleStrategy {
  /** 规则ID。 */
  StrategyId?: number;
  /** 规则名称。 */
  StrategyName?: string;
  /** 规则生效冷却时间。 */
  CalmDownTime?: number;
  /** 扩缩容动作，1表示扩容，2表示缩容。 */
  ScaleAction?: number;
  /** 每次规则生效时的扩缩容数量。 */
  ScaleNum?: number;
  /** 指标处理方法，1表示MAX，2表示MIN，3表示AVG。 */
  ProcessMethod?: number;
  /** 规则优先级，添加时无效，默认为自增。 */
  Priority?: number;
  /** 规则状态，1表示启动，3表示禁用。 */
  StrategyStatus?: number;
  /** 规则扩容指定 yarn node label */
  YarnNodeLabel?: string;
  /** 规则生效的有效时间 */
  PeriodValid?: string;
  /** 优雅缩容开关 */
  GraceDownFlag?: boolean;
  /** 优雅缩容等待时间 */
  GraceDownTime?: number;
  /** 绑定标签列表 */
  Tags?: Tag[] | null;
  /** 预设配置组 */
  ConfigGroupAssigned?: string;
  /** 扩容资源计算方法，"DEFAULT","INSTANCE", "CPU", "MEMORYGB"。"DEFAULT"表示默认方式，与"INSTANCE"意义相同。"INSTANCE"表示按照节点计算，默认方式。"CPU"表示按照机器的核数计算。"MEMORYGB"表示按照机器内存数计算。 */
  MeasureMethod?: string;
  /** 节点部署服务列表，例如["HDFS-3.1.2","YARN-3.1.2"]。 */
  SoftDeployDesc?: string[] | null;
  /** 启动进程列表，例如["NodeManager"]。 */
  ServiceNodeDesc?: string;
  /** 启动进程列表。 */
  ServiceNodeInfo?: number[] | null;
  /** 节点部署服务列表。部署服务仅填写HDFS、YARN。[组件名对应的映射关系表](https://cloud.tencent.com/document/product/589/98760) */
  SoftDeployInfo?: number[] | null;
  /** 多指标触发条件 */
  LoadMetricsConditions?: LoadMetricsConditions | null;
  /** 伸缩组Id */
  GroupId?: number;
  /** soft例如yarn */
  Soft?: string;
}

/** 负载指标条件 */
declare interface LoadMetricsCondition {
  /** 规则统计周期，提供1min,3min,5min。 */
  StatisticPeriod?: number;
  /** 触发次数，当连续触发超过TriggerThreshold次后才开始扩缩容。 */
  TriggerThreshold?: number;
  /** 扩缩容负载指标。 */
  LoadMetrics?: string;
  /** 规则元数据记录ID。 */
  MetricId?: number;
  /** 触发条件 */
  Conditions?: TriggerCondition[] | null;
}

/** 负载指标 */
declare interface LoadMetricsConditions {
  /** 触发规则条件 */
  LoadMetrics?: LoadMetricsCondition[] | null;
  /** 0:所有条件满足1：满足任意一个 */
  Match?: number;
}

/** 登录设置 */
declare interface LoginSettings {
  /** 实例登录密码，8-16个字符，包含大写字母、小写字母、数字和特殊字符四种，特殊符号仅支持!@%^*，密码第一位不能为特殊字符 */
  Password?: string;
  /** 密钥ID。关联密钥后，就可以通过对应的私钥来访问实例；PublicKeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取 */
  PublicKeyId?: string;
}

/** 元数据库信息 */
declare interface MetaDbInfo {
  /** 元数据类型。 */
  MetaType: string;
  /** 统一元数据库实例ID。 */
  UnifyMetaInstanceId: string;
  /** 自建元数据库信息。 */
  MetaDBInfo: CustomMetaInfo;
}

/** 指标tag */
declare interface MetricTags {
  /** 指标单位 */
  Unit?: string;
  /** 指标Type */
  Type?: string;
}

/** 强制修改标签 */
declare interface ModifyResourceTags {
  /** 集群id 或者 cvm id */
  ResourceId: string;
  /** 资源6段式表达式 */
  Resource: string;
  /** 资源前缀 */
  ResourcePrefix: string;
  /** ap-beijing */
  ResourceRegion: string;
  /** emr */
  ServiceType: string;
  /** 删除的标签列表 */
  DeleteTags?: Tag[];
  /** 添加的标签列表 */
  AddTags?: Tag[];
  /** 修改的标签列表 */
  ModifyTags?: Tag[];
}

/** 定时伸缩每月重复任务策略 */
declare interface MonthRepeatStrategy {
  /** 重复任务执行的具体时刻，例如"01:02:00" */
  ExecuteAtTimeOfDay: string;
  /** 每月中的天数时间段描述，长度只能为2，例如[2,10]表示每月2-10号。 */
  DaysOfMonthRange: number[] | null;
}

/** 多云盘参数 */
declare interface MultiDisk {
  /** 云盘类型CLOUD_SSD：表示云SSD。CLOUD_PREMIUM：表示高效云盘。CLOUD_HSSD：表示增强型SSD云硬盘。 */
  DiskType?: string;
  /** 云盘大小 */
  Volume?: number;
  /** 该类型云盘个数 */
  Count?: number;
}

/** 多云盘参数 */
declare interface MultiDiskMC {
  /** 该类型云盘个数 */
  Count: number;
  /** 磁盘类型1 :本地盘2 :云硬盘3 : 本地SSD4 : 云SSD5 : 高效云盘6 : 增强型SSD云硬盘11 : 吞吐型云硬盘12 : 极速型SSD云硬盘13 : 通用型SSD云硬盘14 : 大数据型云硬盘15 : 高IO型云硬盘16 : 远端SSD盘 */
  Type?: number;
  /** 磁盘大小 */
  Size?: string;
  /** 云盘大小,单位b */
  Volume?: number;
}

/** 各个可用区的参数信息 */
declare interface MultiZoneSetting {
  /** "master"、"standby"、"third-party" */
  ZoneTag?: string;
  /** 无 */
  VPCSettings?: VPCSettings;
  /** 无 */
  Placement?: Placement;
  /** 无 */
  ResourceSpec?: NewResourceSpec;
}

/** 资源描述 */
declare interface NewResourceSpec {
  /** 描述Master节点资源 */
  MasterResourceSpec?: Resource;
  /** 描述Core节点资源 */
  CoreResourceSpec?: Resource;
  /** 描述Task节点资源 */
  TaskResourceSpec?: Resource;
  /** Master节点数量 */
  MasterCount?: number;
  /** Core节点数量 */
  CoreCount?: number;
  /** Task节点数量 */
  TaskCount?: number;
  /** 描述Common节点资源 */
  CommonResourceSpec?: Resource;
  /** Common节点数量 */
  CommonCount?: number;
}

/** 节点亲和性设置 */
declare interface NodeAffinity {
  /** 节点亲和性-强制调度设置 */
  RequiredDuringSchedulingIgnoredDuringExecution?: NodeSelector | null;
  /** 节点亲和性-容忍调度 */
  PreferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[] | null;
}

/** 用于创建集群价格清单 节点价格详情 */
declare interface NodeDetailPriceResult {
  /** 节点类型 master core task common router mysql */
  NodeType?: string;
  /** 节点组成部分价格详情 */
  PartDetailPrice?: PartDetailPriceItem[];
}

/** 节点硬件信息 */
declare interface NodeHardwareInfo {
  /** 用户APPID */
  AppId?: number;
  /** 序列号 */
  SerialNo?: string;
  /** 机器实例ID */
  OrderNo?: string;
  /** master节点绑定外网IP */
  WanIp?: string;
  /** 节点类型。0:common节点；1:master节点；2:core节点；3:task节点 */
  Flag?: number;
  /** 节点规格 */
  Spec?: string;
  /** 节点核数 */
  CpuNum?: number;
  /** 节点内存,单位b */
  MemSize?: number;
  /** 节点内存描述，单位GB */
  MemDesc?: string;
  /** 节点所在region */
  RegionId?: number;
  /** 节点所在Zone */
  ZoneId?: number;
  /** 申请时间 */
  ApplyTime?: string;
  /** 释放时间 */
  FreeTime?: string;
  /** 硬盘大小 */
  DiskSize?: string;
  /** 节点描述 */
  NameTag?: string;
  /** 节点部署服务 */
  Services?: string;
  /** 磁盘类型，1 :本地盘 2 :云硬盘 3 : 本地SSD 4 : 云SSD 5 : 高效云盘 6 : 增强型SSD云硬盘 11 : 吞吐型云硬盘 12 : 极速型SSD云硬盘 13 : 通用型SSD云硬盘 14 : 大数据型云硬盘 15 : 高IO型云硬盘 16 : 远端SSD盘 */
  StorageType?: number;
  /** 系统盘大小，单位GB */
  RootSize?: number;
  /** 付费类型，0：按量计费；1：包年包月 */
  ChargeType?: number;
  /** 数据库IP */
  CdbIp?: string;
  /** 数据库端口 */
  CdbPort?: number;
  /** 硬盘容量,单位b */
  HwDiskSize?: number;
  /** 硬盘容量描述 */
  HwDiskSizeDesc?: string;
  /** 内存容量，单位b */
  HwMemSize?: number;
  /** 内存容量描述 */
  HwMemSizeDesc?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 节点资源ID */
  EmrResourceId?: string;
  /** 续费标志 */
  IsAutoRenew?: number;
  /** 设备标识 */
  DeviceClass?: string;
  /** 支持变配 */
  Mutable?: number;
  /** 多云盘 */
  MCMultiDisk?: MultiDiskMC[] | null;
  /** 数据库信息 */
  CdbNodeInfo?: CdbInfo | null;
  /** 内网IP */
  Ip?: string;
  /** 此节点是否可销毁，1可销毁，0不可销毁 */
  Destroyable?: number;
  /** 节点绑定的标签 */
  Tags?: Tag[] | null;
  /** 是否是自动扩缩容节点，0为普通节点，1为自动扩缩容节点。 */
  AutoFlag?: number;
  /** 资源类型, host/pod */
  HardwareResourceType?: string;
  /** 是否浮动规格，1是，0否 */
  IsDynamicSpec?: number;
  /** 浮动规格值json字符串 */
  DynamicPodSpec?: string;
  /** 是否支持变更计费类型 1是，0否 */
  SupportModifyPayMode?: number;
  /** 系统盘类型，1 :本地盘 2 :云硬盘 3 : 本地SSD 4 : 云SSD 5 : 高效云盘 6 : 增强型SSD云硬盘 11 : 吞吐型云硬盘 12 : 极速型SSD云硬盘 13 : 通用型SSD云硬盘 14 : 大数据型云硬盘 15 : 高IO型云硬盘 16 : 远端SSD盘 */
  RootStorageType?: number;
  /** 可用区信息 */
  Zone?: string;
  /** 子网 */
  SubnetInfo?: SubnetInfo | null;
  /** 客户端 */
  Clients?: string;
  /** 系统当前时间 */
  CurrentTime?: string;
  /** 是否用于联邦 ,1是，0否 */
  IsFederation?: number;
  /** 设备名称 */
  DeviceName?: string;
  /** 服务 */
  ServiceClient?: string;
  /** 该实例是否开启实例保护，true为开启 false为关闭 */
  DisableApiTermination?: boolean;
  /** 0表示老计费，1表示新计费 */
  TradeVersion?: number;
  /** 各组件状态，Zookeeper:STARTED,ResourceManager:STARTED，STARTED已启动，STOPED已停止 */
  ServicesStatus?: string;
  /** 备注 */
  Remark?: string;
  /** 共享集群id */
  SharedClusterId?: string;
  /** 共享集群id描述 */
  SharedClusterIdDesc?: string;
  /** 是否是定时销毁资源 */
  TimingResource?: boolean;
  /** 资源类型（HardwareResourceType）为pod时，对应的TKE集群id */
  TkeClusterId?: string;
  /** 新挂磁盘时可支持配置的服务名称列表 */
  ConfigurableServices?: string[];
  /** 节点标注信息，目前只提供给tf平台使用 */
  NodeMark?: string;
  /** 包销资源是否支持设置自动续费 */
  UnderwriteSetAutoRenew?: boolean;
  /** Gpu信息 */
  GpuDesc?: string;
}

/** 节点标记信息 */
declare interface NodeMark {
  /** 节点类型：master,core,task,router */
  NodeType?: string;
  /** 节点标记信息，目前只提供给tf平台使用，作为入参区分同类型节点信息 */
  NodeNames?: string[];
  /** 可用区名称 */
  Zone?: string;
}

/** 节点续费询价明细 */
declare interface NodeRenewPriceDetail {
  /** 计费类型，包月为1、包销为3 */
  ChargeType?: number;
  /** emr资源id */
  EmrResourceId?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 节点内网ip */
  Ip?: string;
  /** 当前到期时间 */
  ExpireTime?: string;
  /** 原价 */
  OriginalCost?: number;
  /** 折扣价 */
  DiscountCost?: number;
  /** 节点子项续费询价明细列表 */
  RenewPriceDetails?: RenewPriceDetail[];
}

/** 规格管理，规格类型描述 */
declare interface NodeResource {
  /** 配置Id */
  ResourceConfigId?: number;
  /** Resource */
  Resource?: Resource | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 是否默认配置,DEFAULT,BACKUP */
  IsDefault?: string;
  /** 该类型剩余 */
  MaxResourceNum?: number;
  /** 支持的包销时长 */
  PrepaidUnderwritePeriods?: number[] | null;
}

/** 资源详情 */
declare interface NodeResourceSpec {
  /** 规格类型，如S2.MEDIUM8 */
  InstanceType: string;
  /** 系统盘，系统盘个数不超过1块 */
  SystemDisk: DiskSpecInfo[] | null;
  /** 需要绑定的标签列表 */
  Tags?: Tag[] | null;
  /** 云数据盘，云数据盘总个数不超过15块 */
  DataDisk?: DiskSpecInfo[] | null;
  /** 本地数据盘 */
  LocalDataDisk?: DiskSpecInfo[] | null;
}

/** Pod强制调度节点选择条件 */
declare interface NodeSelector {
  /** Pod强制调度节点选择条件 */
  NodeSelectorTerms?: NodeSelectorTerm[] | null;
}

/** Pod节点选择项 */
declare interface NodeSelectorRequirement {
  /** 节点选择项Key值 */
  Key?: string;
  /** 节点选择项Operator值，支持In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  Operator?: string;
  /** 节点选择项Values值 */
  Values?: string[] | null;
}

/** Pod节点选择项集合 */
declare interface NodeSelectorTerm {
  /** 节点选择项表达式集合 */
  MatchExpressions?: NodeSelectorRequirement[] | null;
}

/** 节点磁盘类型 */
declare interface NodeSpecDisk {
  /** 数量 */
  Count?: number;
  /** 名字 */
  Name?: string;
  /** 磁盘类型 */
  DiskType?: string;
  /** 指定磁盘大小 */
  DefaultDiskSize?: number;
}

/** 节点磁盘类型 */
declare interface NodeSpecDiskV2 {
  /** 数量 */
  Count?: number;
  /** 名字 */
  Name?: string;
  /** 磁盘类型 */
  DiskType?: string;
  /** 指定磁盘大小 */
  DefaultDiskSize?: number;
}

/** 节点机型列族 */
declare interface NodeSpecFamily {
  /** 机型 */
  InstanceFamily: string;
  /** 机型名称 */
  FamilyName: string;
  /** 排序 */
  Order?: number;
  /** InstanceType的列表 */
  InstanceTypes?: NodeSpecInstanceType[] | null;
}

/** 节点规格类型 */
declare interface NodeSpecInstanceType {
  /** 规格 */
  InstanceType: string;
  /** 4 */
  Cpu: number;
  /** 8，单位G */
  Memory: number;
  /** 排序，越小排的越前 */
  Order?: number;
  /** 数量 */
  Num?: number;
  /** 售罄原因 */
  SellOutReason?: string;
  /** 系统盘 */
  SystemDisk?: NodeSpecDisk[] | null;
  /** 数据盘 */
  DataDisk?: NodeSpecDisk[] | null;
  /** 本地数据盘 */
  LocalDataDisk?: NodeSpecDisk[] | null;
  /** 售罄原因 */
  SoldOutReason?: string;
  /** 机型类别 */
  InstanceFamily?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 类别 */
  Type?: string;
  /** 类别名称 */
  TypeName?: string;
  /** 类别分类 */
  FamilyName?: string;
  /** cpu类型 */
  CpuType?: string;
  /** 售罄 RunOut、库存少 Less、充足 Enough */
  Remark?: string;
  /** 原价 */
  OriginPrice?: number;
  /** 包销计费机型支持的购买时长 */
  PrepaidUnderwritePeriods?: number[] | null;
  /** GPU信息 */
  GpuDesc?: string;
}

/** 节点机型类型 */
declare interface NodeSpecType {
  /** 机型序列 */
  Type: string;
  /** 机型序列名字 */
  TypeName: string;
  /** 排序 */
  Order?: number;
  /** InstanceFamily数组 */
  InstanceFamilies?: NodeSpecFamily[] | null;
}

/** 弹性扩缩容执行一次规则上下文 */
declare interface NotRepeatStrategy {
  /** 该次任务执行的具体完整时间，格式为"2020-07-13 00:00:00" */
  ExecuteAt: string;
}

/** 操作范围 */
declare interface OpScope {
  /** 操作范围，要操作的服务信息 */
  ServiceInfoList?: ServiceBasicRestartInfo[] | null;
}

/** 描述排序，用于排序. */
declare interface Order {
  /** 排序字段。 */
  Name?: string;
  /** Desc or Asc。 */
  Direction?: string;
}

/** 资源详情 */
declare interface OutterResource {
  /** 规格 */
  Spec: string | null;
  /** 规格名 */
  SpecName: string | null;
  /** 硬盘类型 */
  StorageType: number | null;
  /** 硬盘类型 */
  DiskType: string | null;
  /** 系统盘大小 */
  RootSize: number | null;
  /** 内存大小 */
  MemSize: number | null;
  /** CPU个数 */
  Cpu: number | null;
  /** 硬盘大小 */
  DiskSize: number | null;
  /** 规格 */
  InstanceType: string | null;
}

/** 概览数据 */
declare interface OverviewMetricData {
  /** 指标名 */
  Metric?: string;
  /** 第一个数据时间戳 */
  First?: number;
  /** 最后一个数据时间戳 */
  Last?: number;
  /** 采样点时间间隔 */
  Interval?: number;
  /** 采样点数据 */
  DataPoints?: string[] | null;
  /** 指标tags */
  Tags?: MetricTags | null;
}

/** Hbase的TableMetric Overview返回 */
declare interface OverviewRow {
  /** 表名字 */
  Table?: string;
  /** 读请求次数 */
  ReadRequestCount?: number;
  /** 写请求次数 */
  WriteRequestCount?: number;
  /** 当前memstore的size */
  MemstoreSize?: number;
  /** 当前region中StroreFile的size */
  StoreFileSize?: number;
  /** regions，点击可跳转 */
  Operation?: string;
  /** StoreFile数量 */
  StoreFileNum?: number;
}

/** 用于创建集群价格清单-节点组成部分价格 */
declare interface PartDetailPriceItem {
  /** 类型包括：节点->node、系统盘->rootDisk、云数据盘->dataDisk、metaDB */
  InstanceType?: string;
  /** 单价（原价） */
  Price?: number;
  /** 单价（折扣价） */
  RealCost?: number;
  /** 总价（折扣价） */
  RealTotalCost?: number;
  /** 折扣 */
  Policy?: number;
  /** 数量 */
  GoodsNum?: number;
}

/** Serverless HBase包年包月时间 */
declare interface Period {
  /** 时间跨度 */
  TimeSpan: number;
  /** 时间单位，"m"代表月。 */
  TimeUnit?: string;
}

/** Pod PVC存储方式描述 */
declare interface PersistentVolumeContext {
  /** 磁盘大小，单位为GB。 */
  DiskSize?: number;
  /** 磁盘类型。CLOUD_PREMIUM;CLOUD_SSD */
  DiskType?: string;
  /** 磁盘数量 */
  DiskNum?: number;
  /** 云盘额外性能 */
  ExtraPerformance?: number;
}

/** 描述集群实例位置信息 */
declare interface Placement {
  /** 实例所属的可用区，例如ap-guangzhou-1。该参数也可以通过调用[DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 实例所属项目ID。该参数可以通过调用[DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。 */
  ProjectId?: number;
}

/** POD自定义权限和自定义参数 */
declare interface PodNewParameter {
  /** TKE或EKS集群ID */
  InstanceId: string;
  /** 自定义权限如：{ "apiVersion": "v1", "clusters": [ { "cluster": { "certificate-authority-data": "xxxxxx==", "server": "https://xxxxx.com" }, "name": "cls-xxxxx" } ], "contexts": [ { "context": { "cluster": "cls-xxxxx", "user": "100014xxxxx" }, "name": "cls-a44yhcxxxxxxxxxx" } ], "current-context": "cls-a4xxxx-context-default", "kind": "Config", "preferences": {}, "users": [ { "name": "100014xxxxx", "user": { "client-certificate-data": "xxxxxx", "client-key-data": "xxxxxx" } } ]} */
  Config: string;
  /** 自定义参数如：{ "apiVersion": "apps/v1", "kind": "Deployment", "metadata": { "name": "test-deployment", "labels": { "app": "test" } }, "spec": { "replicas": 3, "selector": { "matchLabels": { "app": "test-app" } }, "template": { "metadata": { "annotations": { "your-organization.com/department-v1": "test-example-v1", "your-organization.com/department-v2": "test-example-v2" }, "labels": { "app": "test-app", "environment": "production" } }, "spec": { "nodeSelector": { "your-organization/node-test": "test-node" }, "containers": [ { "name": "nginx", "image": "nginx:1.14.2", "ports": [ { "containerPort": 80 } ] } ], "affinity": { "nodeAffinity": { "requiredDuringSchedulingIgnoredDuringExecution": { "nodeSelectorTerms": [ { "matchExpressions": [ { "key": "disk-type", "operator": "In", "values": [ "ssd", "sas" ] }, { "key": "cpu-num", "operator": "Gt", "values": [ "6" ] } ] } ] } } } } } } } */
  Parameter: string;
}

/** 扩容容器资源时的资源描述 */
declare interface PodNewSpec {
  /** 外部资源提供者的标识符，例如"cls-a1cd23fa"。 */
  ResourceProviderIdentifier: string;
  /** 外部资源提供者类型，例如"tke",当前仅支持"tke"。 */
  ResourceProviderType: string;
  /** 资源的用途，即节点类型，当前仅支持"TASK"。 */
  NodeFlag: string;
  /** CPU核数。 */
  Cpu: number;
  /** 内存大小，单位为GB。 */
  Memory: number;
  /** Eks集群-CPU类型，当前支持"intel"和"amd" */
  CpuType?: string;
  /** Pod节点数据目录挂载信息。 */
  PodVolumes?: PodVolume[];
  /** 是否浮动规格，默认否true：代表是false：代表否 */
  EnableDynamicSpecFlag?: boolean;
  /** 浮动规格 */
  DynamicPodSpec?: DynamicPodSpec | null;
  /** 代表vpc网络唯一id */
  VpcId?: string;
  /** 代表vpc子网唯一id */
  SubnetId?: string;
  /** pod name */
  PodName?: string;
}

/** POD自定义权限和自定义参数 */
declare interface PodParameter {
  /** TKE或EKS集群ID */
  ClusterId: string;
  /** 自定义权限如：{ "apiVersion": "v1", "clusters": [ { "cluster": { "certificate-authority-data": "xxxxxx==", "server": "https://xxxxx.com" }, "name": "cls-xxxxx" } ], "contexts": [ { "context": { "cluster": "cls-xxxxx", "user": "100014xxxxx" }, "name": "cls-a44yhcxxxxxxxxxx" } ], "current-context": "cls-a4xxxx-context-default", "kind": "Config", "preferences": {}, "users": [ { "name": "100014xxxxx", "user": { "client-certificate-data": "xxxxxx", "client-key-data": "xxxxxx" } } ]} */
  Config: string;
  /** 自定义参数如：{ "apiVersion": "apps/v1", "kind": "Deployment", "metadata": { "name": "test-deployment", "labels": { "app": "test" } }, "spec": { "replicas": 3, "selector": { "matchLabels": { "app": "test-app" } }, "template": { "metadata": { "annotations": { "your-organization.com/department-v1": "test-example-v1", "your-organization.com/department-v2": "test-example-v2" }, "labels": { "app": "test-app", "environment": "production" } }, "spec": { "nodeSelector": { "your-organization/node-test": "test-node" }, "containers": [ { "name": "nginx", "image": "nginx:1.14.2", "ports": [ { "containerPort": 80 } ] } ], "affinity": { "nodeAffinity": { "requiredDuringSchedulingIgnoredDuringExecution": { "nodeSelectorTerms": [ { "matchExpressions": [ { "key": "disk-type", "operator": "In", "values": [ "ssd", "sas" ] }, { "key": "cpu-num", "operator": "Gt", "values": [ "6" ] } ] } ] } } } } } } } */
  Parameter: string;
}

/** Pod资源售卖规格 */
declare interface PodSaleSpec {
  /** 可售卖的资源规格，仅为以下值:"TASK","CORE","MASTER","ROUTER"。 */
  NodeType: string;
  /** Cpu核数。 */
  Cpu: number;
  /** 内存数量，单位为GB。 */
  Memory: number;
  /** 该规格资源可申请的最大数量。 */
  Number: number;
}

/** 扩容容器资源时的资源描述 */
declare interface PodSpec {
  /** 外部资源提供者的标识符，例如"cls-a1cd23fa"。 */
  ResourceProviderIdentifier: string;
  /** 外部资源提供者类型，例如"tke",当前仅支持"tke"。 */
  ResourceProviderType: string;
  /** 资源的用途，即节点类型，当前仅支持"TASK"。 */
  NodeType: string;
  /** CPU核数。 */
  Cpu: number;
  /** 内存大小，单位为GB。 */
  Memory: number;
  /** 资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用。弃用 */
  DataVolumes?: string[];
  /** Eks集群-CPU类型，当前支持"intel"和"amd" */
  CpuType?: string;
  /** Pod节点数据目录挂载信息。 */
  PodVolumes?: PodVolume[];
  /** 是否浮动规格，1是，0否 */
  IsDynamicSpec?: number;
  /** 浮动规格 */
  DynamicPodSpec?: DynamicPodSpec | null;
  /** 代表vpc网络唯一id */
  VpcId?: string;
  /** 代表vpc子网唯一id */
  SubnetId?: string;
  /** pod name */
  PodName?: string;
}

/** Pod相关信息 */
declare interface PodSpecInfo {
  /** 使用Pod资源扩容时，指定的Pod规格以及来源等信息 */
  PodSpec?: PodNewSpec;
  /** POD自定义权限和自定义参数 */
  PodParameter?: PodNewParameter;
}

/** 单个pod状态 */
declare interface PodState {
  /** pod的名称 */
  Name: string;
  /** pod uuid */
  Uuid: string;
  /** pod的状态 */
  State: string;
  /** pod处于该状态原因 */
  Reason: string;
  /** pod所属集群 */
  OwnerCluster: string;
  /** pod内存大小 */
  Memory: number;
}

/** Pod的存储设备描述信息。 */
declare interface PodVolume {
  /** 存储类型，可为"pvc"，"hostpath"。 */
  VolumeType: string;
  /** 当VolumeType为"pvc"时，该字段生效。 */
  PVCVolume?: PersistentVolumeContext | null;
  /** 当VolumeType为"hostpath"时，该字段生效。 */
  HostVolume?: HostVolumeContext | null;
}

/** 预执行脚本配置 */
declare interface PreExecuteFileSettings {
  /** 脚本在COS上路径，已废弃 */
  Path?: string;
  /** 执行脚本参数 */
  Args?: string[];
  /** COS的Bucket名称，已废弃 */
  Bucket?: string;
  /** COS的Region名称，已废弃 */
  Region?: string;
  /** COS的Domain数据，已废弃 */
  Domain?: string;
  /** 执行顺序 */
  RunOrder?: number;
  /** resourceAfter 或 clusterAfter */
  WhenRun?: string;
  /** 脚本文件名，已废弃 */
  CosFileName?: string;
  /** 脚本的cos地址 */
  CosFileURI?: string;
  /** cos的SecretId */
  CosSecretId?: string;
  /** Cos的SecretKey */
  CosSecretKey?: string;
  /** cos的appid，已废弃 */
  AppId?: string;
  /** 备注 */
  Remark?: string;
}

/** Serverless HBase 预付费设置 */
declare interface PrePaySetting {
  /** 时间 */
  Period: Period | null;
  /** 自动续费标记，0：表示通知即将过期，但不自动续费 1：表示通知即将过期，而且自动续费 2：表示不通知即将过期，也不自动续费 */
  AutoRenewFlag: number;
}

/** Pod容忍调度节点选择项 */
declare interface PreferredSchedulingTerm {
  /** 权重，范围1-100 */
  Weight?: number;
  /** 节点选择表达式 */
  Preference?: NodeSelectorTerm | null;
}

/** 价格详情 */
declare interface PriceDetail {
  /** 节点ID */
  ResourceId?: string;
  /** 价格计算公式 */
  Formula?: string;
  /** 原价 */
  OriginalCost?: number;
  /** 折扣价 */
  DiscountCost?: number;
}

/** 询价资源 */
declare interface PriceResource {
  /** 需要的规格 */
  Spec?: string;
  /** 硬盘类型 */
  StorageType?: number;
  /** 硬盘类型 */
  DiskType?: string;
  /** 系统盘大小 */
  RootSize?: number;
  /** 内存大小 */
  MemSize?: number;
  /** 核心数量 */
  Cpu?: number;
  /** 硬盘大小 */
  DiskSize?: number;
  /** 云盘列表 */
  MultiDisks?: MultiDisk[] | null;
  /** 磁盘数量 */
  DiskCnt?: number;
  /** 规格 */
  InstanceType?: string;
  /** 标签 */
  Tags?: Tag[] | null;
  /** 磁盘数量 */
  DiskNum?: number;
  /** 本地盘的数量 */
  LocalDiskNum?: number;
  /** GPU信息 */
  GpuDesc?: string;
}

/** 询价结果 */
declare interface PriceResult {
  /** 原价 */
  OriginalCost?: number;
  /** 折扣价 */
  DiscountCost?: number;
}

/** 获取CVM配额 */
declare interface QuotaEntity {
  /** 已使用配额 */
  UsedQuota?: number;
  /** 剩余配额 */
  RemainingQuota?: number;
  /** 总配额 */
  TotalQuota?: number;
  /** 可用区 */
  Zone?: string;
}

/** 集群续费实例信息 */
declare interface RenewInstancesInfo {
  /** 节点资源ID */
  EmrResourceId?: string;
  /** 节点类型。0:common节点；1:master节点；2:core节点；3:task节点 */
  Flag?: number;
  /** 内网IP */
  Ip?: string;
  /** 节点内存描述 */
  MemDesc?: string;
  /** 节点核数 */
  CpuNum?: number;
  /** 硬盘大小 */
  DiskSize?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 节点规格 */
  Spec?: string;
  /** 磁盘类型 */
  StorageType?: number;
  /** 系统盘大小 */
  RootSize?: number;
  /** 系统盘类型 */
  RootStorageType?: number;
  /** 数据盘信息 */
  MCMultiDisk?: MultiDiskMC[] | null;
}

/** 节点子项续费询价明细 */
declare interface RenewPriceDetail {
  /** 计费项名称 */
  BillingName?: string;
  /** 折扣 */
  Policy?: number;
  /** 数量 */
  Quantity?: number;
  /** 原价 */
  OriginalCost?: number;
  /** 折扣价 */
  DiscountCost?: number;
}

/** 定时伸缩任务策略 */
declare interface RepeatStrategy {
  /** 取值范围"DAY","DOW","DOM","NONE"，分别表示按天重复、按周重复、按月重复和一次执行。必须填写 */
  RepeatType: string;
  /** 按天重复规则，当RepeatType为"DAY"时有效 */
  DayRepeat?: DayRepeatStrategy | null;
  /** 按周重复规则，当RepeatType为"DOW"时有效 */
  WeekRepeat?: WeekRepeatStrategy | null;
  /** 按月重复规则，当RepeatType为"DOM"时有效 */
  MonthRepeat?: MonthRepeatStrategy | null;
  /** 一次执行规则，当RepeatType为"NONE"时有效 */
  NotRepeat?: NotRepeatStrategy | null;
  /** 规则过期时间，超过该时间后，规则将自动置为暂停状态，形式为"2020-07-23 00:00:00"。必须填写 */
  Expire?: string;
  /** 周期性规则开始时间 */
  StartTime?: string;
}

/** 资源详情 */
declare interface Resource {
  /** 节点规格描述，如CVM.SA2。 */
  Spec: string;
  /** 取值范围:"LOCAL_SSD" 3 //本地SSD "CLOUD_SSD" 4 //云SSD "CLOUD_PREMIUM" 5 //高效云盘"CLOUD_HSSD" 6 //增强型SSD云硬盘 "CLOUD_THROUGHPUT" 11//吞吐型云硬盘 "CLOUD_TSSD" 12 //极速型SSD云硬盘 "CLOUD_BSSD" 13 //通用型SSD云硬盘 "CLOUD_BIGDATA" 14 //大数据型云硬盘"CLOUD_HIGHIO" 15 //高IO型云硬盘 该类型字段为无效字段，实际系统盘类型会根据数据盘类型和节点类型判断，如果节点支持所选的数据盘类型，系统盘类型会跟数据盘保持一致，建议使用CreateCluster接口 */
  StorageType: number;
  /** 数据盘类型 取值范围：CLOUD_SSD：表示云SSD。CLOUD_PREMIUM：表示高效云盘。CLOUD_BASIC：表示云硬盘。LOCAL_BASIC：表示本地盘。LOCAL_SSD：表示本地SSD。CLOUD_HSSD：表示增强型SSD云硬盘。CLOUD_THROUGHPUT：表示吞吐型云硬盘。CLOUD_TSSD：表示极速型SSD云硬盘。CLOUD_BIGDATA：表示大数据型云硬盘。CLOUD_HIGHIO：表示高IO型云硬盘。CLOUD_BSSD：表示通用型SSD云硬盘。REMOTE_SSD：表示远端SSD盘。 */
  DiskType: string;
  /** 内存容量,单位为M */
  MemSize: number;
  /** CPU核数 */
  Cpu: number;
  /** 数据盘容量 */
  DiskSize: number;
  /** 系统盘容量 */
  RootSize?: number;
  /** 云盘列表，当数据盘为一块云盘时，直接使用DiskType和DiskSize参数，超出部分使用MultiDisks */
  MultiDisks?: MultiDisk[] | null;
  /** 需要绑定的标签列表 */
  Tags?: Tag[] | null;
  /** 规格类型，如S2.MEDIUM8 */
  InstanceType?: string;
  /** 本地盘数量，该字段已废弃 */
  LocalDiskNum?: number;
  /** 本地盘数量，如2 */
  DiskNum?: number;
  /** GPU信息 */
  GpuDesc?: string;
}

/** 资源详情 */
declare interface ResourceDetail {
  /** 规格 */
  Spec?: string;
  /** 规格名 */
  SpecName?: string;
  /** 硬盘类型 */
  StorageType?: number;
  /** 硬盘类型 */
  DiskType?: string;
  /** 系统盘大小 */
  RootSize?: number;
  /** 内存大小 */
  MemSize?: number;
  /** CPU个数 */
  Cpu?: number;
  /** 硬盘大小 */
  DiskSize?: number;
  /** 规格 */
  InstanceType?: string;
}

/** 组件重启策略 */
declare interface RestartPolicy {
  /** 重启策略名。 */
  Name?: string;
  /** 策略展示名称。 */
  DisplayName?: string;
  /** 策略描述。 */
  Describe?: string;
  /** 批量重启节点数可选范围。 */
  BatchSizeRange?: number[];
  /** 是否是默认策略。 */
  IsDefault?: string;
}

/** 用户组的输出结果 */
declare interface ResultItem {
  /** 此处为用户组名 */
  Item?: string;
  /** 创建用户组是否成功 */
  Result?: boolean;
  /** 若是创建失败, 提供失败原因 */
  Reason?: string;
}

/** Serverless Instance */
declare interface SLInstance {
  /** EMR Instance Id */
  InstanceId?: string;
  /** EMR Numeric Instance Id */
  ClusterId?: number;
  /** Instance Name */
  InstanceName?: string;
  /** Region id */
  RegionId?: number;
  /** Zone Name */
  Zone?: string;
  /** Pay Mode */
  PayMode?: number;
  /** Disk Type */
  DiskType?: string;
  /** Disk Size */
  DiskSize?: number;
  /** Node Type */
  NodeType?: string;
  /** Node Number */
  NodeNum?: number;
  /** Expire Time */
  ExpireTime?: string;
  /** Isolate Time */
  IsolateTime?: string;
  /** Create Time */
  CreateTime?: string;
  /** Auto Renew Flag */
  AutoRenewFlag?: number;
  /** EMR Numeric Instance Status */
  Status?: number;
  /** Zone Setting */
  ZoneSettings?: ZoneSetting[];
  /** Bound Tags */
  Tags?: Tag[];
  /** Deploy Role */
  DeployRole?: string;
}

/** Serverless HBase实例信息 */
declare interface SLInstanceInfo {
  /** 集群实例字符串ID */
  ClusterId?: string;
  /** 集群实例数字ID */
  Id?: number;
  /** 状态描述 */
  StatusDesc?: string;
  /** 健康状态 */
  HealthStatus?: string;
  /** 实例名称 */
  ClusterName?: string;
  /** 地域ID */
  RegionId?: number;
  /** 主可用区ID */
  ZoneId?: number;
  /** 主可用区 */
  Zone?: string;
  /** 用户APPID */
  AppId?: number;
  /** 主可用区私有网络ID */
  VpcId?: number;
  /** 主可用区子网ID */
  SubnetId?: number;
  /** 状态码 */
  Status?: number;
  /** 创建时间 */
  AddTime?: string;
  /** 集群计费类型。0表示按量计费，1表示包年包月 */
  PayMode?: number;
  /** 多可用区信息 */
  ZoneSettings?: ZoneSetting[] | null;
  /** 实例标签 */
  Tags?: Tag[] | null;
  /** 自动续费标记， 0：表示通知即将过期，但不自动续费 1：表示通知即将过期，而且自动续费 2：表示不通知即将过期，也不自动续费，若业务无续费概念，设置为0 */
  AutoRenewFlag?: number;
  /** 隔离时间，未隔离返回0000-00-00 00:00:00。 */
  IsolateTime?: string;
  /** 过期时间，后付费返回0000-00-00 00:00:00 */
  ExpireTime?: string;
  /** 主备部署角色 */
  DeployRole?: string;
}

/** 扩容节点类型以及数量 */
declare interface ScaleOutNodeConfig {
  /** 扩容节点类型取值范围： MASTER TASK CORE ROUTER */
  NodeFlag: string;
  /** 扩容节点数量 */
  NodeCount: number;
}

/** 扩容指定配置组 */
declare interface ScaleOutServiceConfGroupsInfo {
  /** 组件版本名称 如 HDFS-2.8.5 */
  ServiceComponentName?: string;
  /** 配置组名 如hdfs-core-defaultGroup ConfGroupName参数传入 代表配置组维度 ConfGroupName参数不传 默认 代表集群维度 */
  ConfGroupName?: string;
}

/** 集群应用场景以及支持部署组件信息 */
declare interface SceneSoftwareConfig {
  /** 部署的组件列表。不同的EMR产品版本ProductVersion 对应不同可选组件列表，不同产品版本可选组件列表查询：[组件版本](https://cloud.tencent.com/document/product/589/20279) ；填写实例值：hive、flink。 */
  Software: string[];
  /** 默认Hadoop-Default,[场景查询](https://cloud.tencent.com/document/product/589/14624)场景化取值范围：Hadoop-KuduHadoop-ZookeeperHadoop-PrestoHadoop-HbaseHadoop-Default */
  SceneName?: string;
}

/** 调度任务详情 */
declare interface SchedulerTaskDetail {
  /** 步骤 */
  Step?: string;
  /** 进度 */
  Progress?: string;
  /** 失败信息 */
  FailReason?: string;
  /** 用来获取详情的id */
  JobId?: number;
}

/** yarn资源调度历史 */
declare interface SchedulerTaskInfo {
  /** 调度器类型 */
  SchedulerName?: string;
  /** 操作类型 */
  OperatorName?: string;
  /** 开始时间 */
  CreateTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 状态 */
  State?: number;
  /** 详情 */
  Details?: SchedulerTaskDetail[] | null;
}

/** 添加引导操作 */
declare interface ScriptBootstrapActionConfig {
  /** 脚本的cos地址，参照格式：https://beijing-111111.cos.ap-beijing.myqcloud.com/data/test.sh查询cos存储桶列表：[存储桶列表](https://console.cloud.tencent.com/cos/bucket) */
  CosFileURI: string;
  /** 引导脚步执行时机范围resourceAfter：节点初始化后clusterAfter：集群启动后clusterBefore：集群启动前 */
  ExecutionMoment: string;
  /** 执行脚本参数，参数格式请遵循标准Shell规范 */
  Args?: string[];
  /** 脚本文件名 */
  CosFileName?: string;
  /** 备注 */
  Remark?: string;
}

/** 搜索字段 */
declare interface SearchItem {
  /** 支持搜索的类型 */
  SearchType: string;
  /** 支持搜索的值 */
  SearchValue: string;
}

/** 操作的服务范围 */
declare interface ServiceBasicRestartInfo {
  /** 服务名，必填，如HDFS */
  ServiceName?: string;
  /** 如果没传，则表示所有进程 */
  ComponentInfoList?: ComponentBasicRestartInfo[];
}

/** 服务进程信息 */
declare interface ServiceNodeDetailInfo {
  /** 进程所在节点IP */
  Ip?: string;
  /** 进程类型 */
  NodeType?: number;
  /** 进程名称 */
  NodeName?: string;
  /** 服务组件状态 */
  ServiceStatus?: number;
  /** 进程监控状态 */
  MonitorStatus?: number;
  /** 服务组件状态 */
  Status?: number;
  /** 进程端口信息 */
  PortsInfo?: string;
  /** 最近重启时间 */
  LastRestartTime?: string;
  /** 节点类型 */
  Flag?: number;
  /** 配置组ID */
  ConfGroupId?: number;
  /** 配置组名称 */
  ConfGroupName?: string;
  /** 节点是否需要重启 */
  ConfStatus?: number;
  /** 进程探测信息 */
  ServiceDetectionInfo?: ServiceProcessFunctionInfo[] | null;
  /** 节点类型 */
  NodeFlagFilter?: string;
  /** 进程健康状态 */
  HealthStatus?: HealthStatus | null;
  /** 角色是否支持监控 */
  IsSupportRoleMonitor?: boolean;
  /** 暂停策略 */
  StopPolicies?: RestartPolicy[] | null;
  /** 测试环境api强校验，现网没有，emrcc接口返回有。不加会报错 */
  HAState?: string;
  /** NameService名称 */
  NameService?: string;
  /** 是否支持联邦 */
  IsFederation?: boolean;
  /** datanode是否是维护状态 */
  DataNodeMaintenanceState?: number;
}

/** 进程检测信息 */
declare interface ServiceProcessFunctionInfo {
  /** 探测告警级别 */
  DetectAlert?: string;
  /** 探测功能描述 */
  DetetcFunctionKey?: string | null;
  /** 探测功能结果 */
  DetetcFunctionValue?: string | null;
  /** 探测结果 */
  DetetcTime?: string | null;
  /** 探测功能描述 */
  DetectFunctionKey?: string;
  /** 探测功能结果 */
  DetectFunctionValue?: string;
  /** 探测结果 */
  DetectTime?: string;
}

/** 节点信息 */
declare interface ShortNodeInfo {
  /** 节点类型，Master/Core/Task/Router/Common */
  NodeType?: string;
  /** 节点数量 */
  NodeSize?: number;
}

/** 体外客户端组件依赖信息 */
declare interface SoftDependInfo {
  /** 组件名称 */
  SoftName: string;
  /** 是否必选 */
  Required: boolean;
}

/** spark任务列表 */
declare interface SparkApplicationsList {
  /** 应用id */
  ID?: string;
  /** 应用名称 */
  Name?: string;
  /** 用户 */
  User?: string;
  /** 起始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 持续时间 */
  Duration?: number;
  /** 状态 */
  State?: string;
  /** 类型 */
  ApplicationType?: string;
  /** 核数*秒 */
  CoreSeconds?: number;
  /** 内存MB*秒 */
  MemorySeconds?: string;
  /** 洞察结果 */
  Insight?: string;
}

/** spark查询详情 */
declare interface SparkQuery {
  /** 执行语句 */
  Statement?: string;
  /** 执行时长（单位毫秒） */
  Duration?: number;
  /** 执行状态 */
  Status?: string;
  /** 查询ID */
  Id?: string;
  /** 扫描分区数 */
  ScanPartitionNum?: number;
  /** 扫描总行数 */
  ScanRowNum?: number;
  /** 扫描总文件数 */
  ScanFileNum?: number;
  /** 查询扫描总数据量(单位B) */
  ScanTotalData?: number;
  /** 应用ID */
  ApplicationId?: string[] | null;
  /** 输出总行数 */
  OutputRowNum?: number;
  /** 输出总文件数 */
  OutputFileNum?: number;
  /** 输出分区数 */
  OutputPartitionNum?: number;
  /** 输出总数据量（单位B） */
  OutputTotalData?: number;
  /** 开始时间 */
  BeginTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

/** 任务步骤详情 */
declare interface StageInfoDetail {
  /** 步骤 */
  Stage?: string;
  /** 步骤名 */
  Name?: string;
  /** 是否展示 */
  IsShow?: boolean;
  /** 是否子流程 */
  IsSubFlow?: boolean;
  /** 子流程标签 */
  SubFlowFlag?: string;
  /** 步骤运行状态：0:未开始 1:进行中 2:已完成 3:部分完成 -1:失败 */
  Status?: number;
  /** 步骤运行状态描述 */
  Desc?: string;
  /** 运行进度 */
  Progress?: number;
  /** 开始时间 */
  Starttime?: string | null;
  /** 结束时间 */
  Endtime?: string | null;
  /** 是否有详情信息 */
  HadWoodDetail?: boolean;
  /** Wood子流程Id */
  WoodJobId?: number;
  /** 多语言版本Key */
  LanguageKey?: string;
  /** 如果stage失败，失败原因 */
  FailedReason?: string;
  /** 步骤耗时 */
  TimeConsuming?: string;
  /** id，前端用 */
  Id?: number;
}

/** StarRocks 查询信息 */
declare interface StarRocksQueryInfo {
  /** 提交IP */
  ClientIP?: string;
  /** CPU总时间(ns) */
  CPUCost?: number;
  /** 默认DB */
  DefaultDB?: string;
  /** 结束时间 */
  EndTime?: number;
  /** 执行IP */
  ExecutionIP?: string;
  /** 查询ID */
  QueryID?: string;
  /** 查询类型 */
  QueryType?: string;
  /** 消耗总内存(bytes) */
  MemCost?: number;
  /** plan阶段CPU占用(ns) */
  PlanCpuCosts?: number;
  /** plan阶段内存占用(bytes) */
  PlanMemCosts?: number;
  /** 执行时长 */
  QueryTime?: number;
  /** 资源组 */
  ResourceGroup?: string;
  /** 获取行数 */
  ReturnRows?: number;
  /** 扫描数据量(bytes) */
  ScanBytes?: number;
  /** 扫描行数 */
  ScanRows?: number;
  /** 开始时间 */
  BeginTime?: number;
  /** 执行状态 */
  ExecutionState?: string;
  /** 执行语句 */
  ExecutionStatement?: string;
  /** 用户 */
  User?: string;
}

/** 执行步骤 */
declare interface Step {
  /** 执行步骤名称。 */
  Name: string;
  /** 执行动作。 */
  ExecutionStep: Execution;
  /** 执行失败策略。1. TERMINATE_CLUSTER 执行失败时退出并销毁集群。2. CONTINUE 执行失败时跳过并执行后续步骤。 */
  ActionOnFailure: string;
  /** 指定执行Step时的用户名，非必须，默认为hadoop。 */
  User?: string;
}

/** 停止服务时的参数 */
declare interface StopParams {
  /** 安全模式：safe默认模式：default */
  StopPolicy?: string;
  /** 线程数 */
  ThreadCount?: number;
}

/** HDFS文件存储详情 */
declare interface StorageSummaryDistribution {
  /** 数据项 */
  MetricItem?: string;
  /** 数据项描述 */
  MetricName?: string;
  /** 采样值 */
  Dps?: Dps[] | null;
}

/** 重启/停止/启动服务/监控的配置 */
declare interface StrategyConfig {
  /** 0:关闭滚动重启1:开启滚动启动 */
  RollingRestartSwitch?: number;
  /** 滚动重启每批次的重启数量，最大重启台数为 99999 台 */
  BatchSize?: number;
  /** 滚动重启每批停止等待时间 ,最大间隔为 5 分钟 单位是秒 */
  TimeWait?: number;
  /** 操作失败处理策略，0:失败阻塞, 1:失败自动跳过 */
  DealOnFail?: number;
  /** 指令需要指定的参数 */
  Args?: Arg[] | null;
}

/** 子网信息 */
declare interface SubnetInfo {
  /** 子网信息（名字） */
  SubnetName?: string;
  /** 子网信息（ID） */
  SubnetId?: string;
}

/** 表格schema信息 */
declare interface TableSchemaItem {
  /** 列标识 */
  Name?: string;
  /** 是否可按该列排序 */
  Sortable?: boolean;
  /** 是否可筛选 */
  WithFilter?: boolean;
  /** 筛选的候选集 */
  Candidates?: string[] | null;
  /** 是否可点击 */
  Clickable?: boolean;
  /** 展示的名字 */
  Title?: string;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** Kubernetes Taint */
declare interface Taint {
  /** Taint Key */
  Key?: string;
  /** Taint Value */
  Value?: string;
  /** Taint Effect */
  Effect?: string;
}

/** 巡检任务参数 */
declare interface TaskSettings {
  /** 参数名称 */
  Name?: string;
  /** 参数值 */
  Value?: string;
  /** 参数唯一标记 */
  Key?: string;
  /** 是否可编辑，”true" "false" */
  Editable?: string;
}

/** 时间扩缩容规则 */
declare interface TimeAutoScaleStrategy {
  /** 策略名字，集群内唯一。 */
  StrategyName: string;
  /** 策略触发后的冷却时间，该段时间内，将不能触发弹性扩缩容。 */
  IntervalTime: number;
  /** 扩缩容动作，1表示扩容，2表示缩容。 */
  ScaleAction: number;
  /** 扩缩容数量。 */
  ScaleNum: number;
  /** 规则状态，1表示有效，2表示无效，3表示暂停。必须填写 */
  StrategyStatus: number;
  /** 规则优先级，越小越高。 */
  Priority: number;
  /** 当多条规则同时触发，其中某些未真正执行时，在该时间范围内，将会重试。 */
  RetryValidTime: number;
  /** 时间扩缩容重复策略 */
  RepeatStrategy: RepeatStrategy | null;
  /** 策略唯一ID。 */
  StrategyId?: number;
  /** 优雅缩容开关 */
  GraceDownFlag?: boolean;
  /** 优雅缩容等待时间 */
  GraceDownTime?: number;
  /** 绑定标签列表 */
  Tags?: Tag[] | null;
  /** 预设配置组 */
  ConfigGroupAssigned?: string;
  /** 扩容资源计算方法，"DEFAULT","INSTANCE", "CPU", "MEMORYGB"。"DEFAULT"表示默认方式，与"INSTANCE"意义相同。"INSTANCE"表示按照节点计算，默认方式。"CPU"表示按照机器的核数计算。"MEMORYGB"表示按照机器内存数计算。 */
  MeasureMethod?: string;
  /** 销毁策略, "DEFAULT",默认销毁策略，由缩容规则触发缩容，"TIMING"表示定时销毁 */
  TerminatePolicy?: string;
  /** 最长使用时间， 秒数，最短1小时，最长24小时 */
  MaxUse?: number;
  /** 节点部署服务列表。部署服务仅填写HDFS、YARN。[组件名对应的映射关系表](https://cloud.tencent.com/document/product/589/98760) */
  SoftDeployInfo?: number[] | null;
  /** 启动进程列表。 */
  ServiceNodeInfo?: number[] | null;
  /** 补偿扩容，0表示不开启，1表示开启 */
  CompensateFlag?: number;
  /** 伸缩组id */
  GroupId?: number;
  /** 优雅缩容业务pod标签，当node不存在上述pod或超过优雅缩容时间时，缩容节点 */
  GraceDownLabel?: TkeLabel[];
}

/** Kubernetes Label */
declare interface TkeLabel {
  /** Label Name */
  Name?: string;
  /** Label Value */
  Value?: string;
}

/** 集群节点拓扑信息 */
declare interface TopologyInfo {
  /** 可用区ID */
  ZoneId?: number;
  /** 可用区信息 */
  Zone?: string;
  /** 子网信息 */
  SubnetInfoList?: SubnetInfo[] | null;
  /** 节点信息 */
  NodeInfoList?: ShortNodeInfo[] | null;
}

/** 规则触发条件 */
declare interface TriggerCondition {
  /** 条件比较方法，1表示大于，2表示小于，3表示大于等于，4表示小于等于。 */
  CompareMethod: number;
  /** 条件阈值。 */
  Threshold?: number;
}

/** trino 查询信息 */
declare interface TrinoQueryInfo {
  /** catalog */
  Catalog?: string;
  /** 提交IP */
  ClientIpAddr?: string;
  /** 切片数 */
  CompletedSplits?: string;
  /** CPU时间 */
  CpuTime?: number;
  /** 累计内存 */
  CumulativeMemory?: number;
  /** 执行时长 */
  DurationMillis?: number;
  /** 结束时间 (s) */
  EndTime?: number;
  /** 查询ID */
  Id?: string;
  /** 内部传输量 */
  InternalNetworkBytes?: number;
  /** 输出字节数 */
  OutputBytes?: number;
  /** 峰值内存量 */
  PeakUserMemoryBytes?: number;
  /** 物理输入量 */
  PhysicalInputBytes?: number;
  /** 处理输入量 */
  ProcessedInputBytes?: number;
  /** 编译时长 */
  SqlCompileTime?: number;
  /** 开始时间 (s) */
  StartTime?: number;
  /** 执行状态 */
  State?: string;
  /** 执行语句 */
  Statement?: string;
  /** 提交用户 */
  User?: string;
  /** 写入字节数 */
  WrittenBytes?: number;
}

/** 变配资源规格 */
declare interface UpdateInstanceSettings {
  /** 内存容量，单位为G */
  Memory: number;
  /** CPU核数 */
  CPUCores: number;
  /** 机器资源ID（EMR测资源标识） */
  ResourceId: string;
  /** 变配机器规格 */
  InstanceType?: string;
}

/** 容器集群用户组信息 */
declare interface UserAndGroup {
  /** 用户名 */
  UserName: string;
  /** 用户组 */
  UserGroup: string;
}

/** 添加的用户信息列表 */
declare interface UserInfoForUserManager {
  /** 用户名 */
  UserName: string;
  /** 用户所属的组 */
  UserGroup: string;
  /** 密码 */
  PassWord: string;
  /** 备注 */
  ReMark?: string;
  /** 用户副组 */
  Groups?: string[];
}

/** 用户管理列表过滤器 */
declare interface UserManagerFilter {
  /** 用户名 */
  UserName?: string;
  /** 用户来源 */
  UserType?: string;
  /** 组名 */
  Groups?: string;
}

/** 用户管理中用户的简要信息 */
declare interface UserManagerUserBriefInfo {
  /** 用户名 */
  UserName?: string;
  /** 用户所属的组 */
  UserGroup?: string;
  /** Manager表示管理员、NormalUser表示普通用户 */
  UserType?: string;
  /** 用户创建时间 */
  CreateTime?: string;
  /** 是否可以下载用户对应的keytab文件，对开启kerberos的集群才有意义 */
  SupportDownLoadKeyTab?: boolean;
  /** keytab文件的下载地址 */
  DownLoadKeyTabUrl?: string;
}

/** VPC 参数 */
declare interface VPCSettings {
  /** VPC ID */
  VpcId: string;
  /** Subnet ID */
  SubnetId: string;
}

/** VPC 参数 */
declare interface VirtualPrivateCloud {
  /** VPC ID */
  VpcId: string;
  /** Subnet ID */
  SubnetId: string;
}

/** 数据卷目录设置 */
declare interface VolumeSetting {
  /** 数据卷类型HOST_PATH表示支持本机路径NEW_PVC表示新建PVC组件角色支持的数据卷类型可参考 EMR on TKE 集群部署说明：[部署说明](https://cloud.tencent.com/document/product/589/94254) */
  VolumeType?: string;
  /** 主机路径信息 */
  HostPath?: HostPathVolumeSource | null;
}

/** 定时扩容每周重复任务策略 */
declare interface WeekRepeatStrategy {
  /** 重复任务执行的具体时刻，例如"01:02:00" */
  ExecuteAtTimeOfDay: string;
  /** 每周几的数字描述，例如，[1,3,4]表示每周周一、周三、周四。 */
  DaysOfWeek: number[] | null;
}

/** Yarn 运行的Application信息 */
declare interface YarnApplication {
  /** 应用ID */
  Id?: string;
  /** 用户 */
  User?: string;
  /** 应用名 */
  Name?: string;
  /** 队列 */
  Queue?: string;
  /** 应用类型 */
  ApplicationType?: string;
  /** 运行时间 */
  ElapsedTime?: string;
  /** 状态 */
  State?: string;
  /** 最终状态 */
  FinalStatus?: string;
  /** 进度 */
  Progress?: number;
  /** 开始时间毫秒 */
  StartedTime?: number;
  /** 结束时间毫秒 */
  FinishedTime?: number;
  /** 申请内存MB */
  AllocatedMB?: number;
  /** 申请VCores */
  AllocatedVCores?: number;
  /** 运行的Containers数 */
  RunningContainers?: number;
  /** 内存MB*时间秒 */
  MemorySeconds?: number;
  /** VCores*时间秒 */
  VCoreSeconds?: number;
  /** 队列资源占比 */
  QueueUsagePercentage?: number;
  /** 集群资源占比 */
  ClusterUsagePercentage?: number;
  /** 预占用的内存 */
  PreemptedResourceMB?: number;
  /** 预占用的VCore */
  PreemptedResourceVCores?: number;
  /** 预占的非应用程序主节点容器数量 */
  NumNonAMContainerPreempted?: number;
  /** AM预占用的容器数量 */
  NumAMContainerPreempted?: number;
  /** Map总数 */
  MapsTotal?: number;
  /** 完成的Map数 */
  MapsCompleted?: number;
  /** Reduce总数 */
  ReducesTotal?: number;
  /** 完成的Reduce数 */
  ReducesCompleted?: number;
  /** 平均Map时间 */
  AvgMapTime?: number;
  /** 平均Reduce时间 */
  AvgReduceTime?: number;
  /** 平均Shuffle时间毫秒 */
  AvgShuffleTime?: number;
  /** 平均Merge时间毫秒 */
  AvgMergeTime?: number;
  /** 失败的Reduce执行次数 */
  FailedReduceAttempts?: number;
  /** Kill的Reduce执行次数 */
  KilledReduceAttempts?: number;
  /** 成功的Reduce执行次数 */
  SuccessfulReduceAttempts?: number;
  /** 失败的Map执行次数 */
  FailedMapAttempts?: number;
  /** Kill的Map执行次数 */
  KilledMapAttempts?: number;
  /** 成功的Map执行次数 */
  SuccessfulMapAttempts?: number;
  /** GC毫秒 */
  GcTimeMillis?: number;
  /** Map使用的VCore毫秒 */
  VCoreMillisMaps?: number;
  /** Map使用的内存毫秒 */
  MbMillisMaps?: number;
  /** Reduce使用的VCore毫秒 */
  VCoreMillisReduces?: number;
  /** Reduce使用的内存毫秒 */
  MbMillisReduces?: number;
  /** 启动Map的总数 */
  TotalLaunchedMaps?: number;
  /** 启动Reduce的总数 */
  TotalLaunchedReduces?: number;
  /** Map输入记录数 */
  MapInputRecords?: number;
  /** Map输出记录数 */
  MapOutputRecords?: number;
  /** Reduce输入记录数 */
  ReduceInputRecords?: number;
  /** Reduce输出记录数 */
  ReduceOutputRecords?: number;
  /** HDFS写入字节数 */
  HDFSBytesWritten?: number;
  /** HDFS读取字节数 */
  HDFSBytesRead?: number;
}

/** 用于创建集群价格清单 不同可用区下价格详情 */
declare interface ZoneDetailPriceResult {
  /** 可用区Id */
  ZoneId?: string;
  /** 不同节点的价格详情 */
  NodeDetailPrice?: NodeDetailPriceResult[];
}

/** 可用区配置信息 */
declare interface ZoneResourceConfiguration {
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。 */
  VirtualPrivateCloud?: VirtualPrivateCloud | null;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement?: Placement | null;
  /** 所有节点资源的规格 */
  AllNodeResourceSpec?: AllNodeResourceSpec | null;
  /** 如果是单可用区，ZoneTag可以不用填， 如果是双AZ部署，第一个可用区ZoneTag选择master，第二个可用区ZoneTag选择standby，如果是三AZ部署，第一个可用区ZoneTag选择master，第二个可用区ZoneTag选择standby，第三个可用区ZoneTag选择third-party，取值范围： master standby third-party */
  ZoneTag?: string;
}

/** 可用区配置描述。 */
declare interface ZoneSetting {
  /** 可用区名称 */
  Zone: string;
  /** 可用区VPC和子网 */
  VPCSettings: VPCSettings;
  /** 可用区节点数量 */
  NodeNum: number;
}

declare interface AddMetricScaleStrategyRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 1表示按负载规则扩缩容，2表示按时间规则扩缩容。必须填写，并且和下面的规则策略匹配 */
  StrategyType: number;
  /** 按负载扩容的规则。 */
  LoadAutoScaleStrategy?: LoadAutoScaleStrategy;
  /** 按时间扩缩容的规则。 */
  TimeAutoScaleStrategy?: TimeAutoScaleStrategy;
}

declare interface AddMetricScaleStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddNodeResourceConfigRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 节点类型 CORE TASK ROUTER */
  ResourceType: string;
  /** 资源详情 */
  ResourceConfig: Resource;
  /** 付费模式 */
  PayMode: number;
  /** 是否默认配置,DEFAULT,BACKUP,不填默认不是默认配置 */
  IsDefault?: string;
  /** 地域ID */
  ZoneId?: number;
  /** 添加多个规格时，第1个规格详情在ResourceConfig参数，第2-n个在MultipleResourceConfig参数 */
  MultipleResourceConfig?: Resource[];
  /** 类型为ComputeResource和EMR以及默认，默认为EMR */
  ResourceBaseType?: string;
  /** 计算资源id */
  ComputeResourceId?: string;
  /** 硬件类型 */
  HardwareResourceType?: string;
}

declare interface AddNodeResourceConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddUsersForUserManagerRequest {
  /** 集群字符串ID */
  InstanceId: string;
  /** 用户信息列表 */
  UserManagerUserList: UserInfoForUserManager[];
}

declare interface AddUsersForUserManagerResponse {
  /** 添加成功的用户列表 */
  SuccessUserList?: string[] | null;
  /** 添加失败的用户列表 */
  FailedUserList?: string[] | null;
  /** 流程id。大于0表示启动了流程；等于0表示没有启动流程 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachDisksRequest {
  /** EMR集群实例ID */
  InstanceId: string;
  /** 需要挂载的云盘ID */
  DiskIds?: string[];
  /** 挂载模式，取值范围：AUTO_RENEW：自动续费ALIGN_DEADLINE：自动对其到期时间 */
  AlignType?: string;
  /** 需要挂载的cvm节点id列表 */
  CvmInstanceIds?: string[];
  /** 是否是新购云盘进行挂载 */
  CreateDisk?: boolean;
  /** 新购云盘规格 */
  DiskSpec?: NodeSpecDiskV2;
  /** 可选参数，不传该参数则仅执行挂载操作。传入True时，会在挂载成功后将云硬盘设置为随云主机销毁模式，仅对按量计费云硬盘有效。 */
  DeleteWithInstance?: boolean;
  /** 新挂磁盘时可支持配置的服务名称列表 */
  SelectiveConfServices?: string[];
  /** 磁盘计费类型（1包月、3包销） */
  ChargeType?: number;
  /** 磁盘包销购买时长（仅支持12、24、36、48、60） */
  UnderWriteDuration?: number;
}

declare interface AttachDisksResponse {
  /** 流程id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConvertPreToPostClusterRequest {
  /** 集群实例ID。 */
  InstanceId: string;
  /** 5min内不可重入标识，订单标识 */
  ClientToken?: string;
}

declare interface ConvertPreToPostClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudInstanceRequest {
  /** 实例名称。长度限制为6-36个字符。只允许包含中文、字母、数字、-、_。 */
  InstanceName: string;
  /** 容器集群类型，取值范围EMR容器集群实例: EMR-TKE */
  ClusterClass: string;
  /** 部署的组件列表，不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）对应不同可选组件列表，不同产品版本可选组件列表查询：[组件版本](https://cloud.tencent.com/document/product/589/20279) ； */
  Software: string[];
  /** 容器平台类型，取值范围EMR容器集群实例: tke */
  PlatFormType: string;
  /** cos存储桶 */
  CosBucket: string;
  /** 容器集群id */
  EksClusterId?: string;
  /** 产品Id，不同产品ID表示不同的EMR产品版本。取值范围：60:表示EMR-TKE-V1.1.055:表示EMR-TKE-V1.0.152:表示EMR-TKE-V1.0.0 */
  ProductId?: number;
  /** 客户端token，唯一随机标识，时效5分钟，需要调用者指定 防止客户端重新创建资源，小于等于64个字符，例如 a9a90aa6----fae36063280示例值：a9a90aa6----fae36063280 */
  ClientToken?: string;
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。 */
  VPCSettings?: VPCSettings;
  /** 所有组件角色及其对应的Pod资源请求信息 */
  CloudResources?: CloudResource[];
  /** 安全组Id，为空默认创建新的安全组 */
  SgId?: string;
  /** 元数据库信息MetaDB信息，当MetaType选择EMR_NEW_META时，MetaDataJdbcUrl MetaDataUser MetaDataPass UnifyMetaInstanceId不用填当MetaType选择EMR_EXIT_META时，填写UnifyMetaInstanceId当MetaType选择USER_CUSTOM_META时，填写MetaDataJdbcUrl MetaDataUser MetaDataPass */
  MetaDBInfo?: CustomMetaDBInfo;
  /** 标签信息 */
  Tags?: Tag[];
  /** 登陆密码，LoginSettings中的Password字段 */
  LoginSettings?: LoginSettings;
  /** 共享服务信息 */
  ExternalService?: ExternalService[];
  /** 可用区id */
  ZoneId?: number;
}

declare interface CreateCloudInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** EMR产品版本名称如EMR-V2.3.0 表示2.3.0版本的EMR， 当前支持产品版本名称查询：[产品版本名称](https://cloud.tencent.com/document/product/589/66338) */
  ProductVersion: string;
  /** 是否开启节点高可用。取值范围：true：表示开启节点高可用。false：表示不开启节点高可用。 */
  EnableSupportHAFlag: boolean;
  /** 实例名称。长度限制为6-36个字符。只允许包含中文、字母、数字、-、_。 */
  InstanceName: string;
  /** 实例计费模式。取值范围：PREPAID：预付费，即包年包月。POSTPAID_BY_HOUR：按小时后付费。 */
  InstanceChargeType: string;
  /** 实例登录设置。通过该参数可以设置所购买节点的登录方式密码或者密钥。设置密钥时，密码仅用于组件原生WebUI快捷入口登录。未设置密钥时，密码用于登录所购节点以及组件原生WebUI快捷入口登录。 */
  LoginSettings: LoginSettings;
  /** 集群应用场景以及支持部署组件配置 */
  SceneSoftwareConfig: SceneSoftwareConfig;
  /** 即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 实例所属安全组的ID，形如sg-xxxxxxxx。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的SecurityGroupId字段来获取。 */
  SecurityGroupIds?: string[];
  /** [引导操作](https://cloud.tencent.com/document/product/589/35656)脚本设置。 */
  ScriptBootstrapActionConfig?: ScriptBootstrapActionConfig[];
  /** 唯一随机标识，时效性为5分钟，需要调用者指定 防止客户端重复创建资源，例如 a9a90aa6-****-****-****-fae360632808 */
  ClientToken?: string;
  /** 是否开启集群Master节点公网。取值范围：NEED_MASTER_WAN：表示开启集群Master节点公网。NOT_NEED_MASTER_WAN：表示不开启。默认开启集群Master节点公网。 */
  NeedMasterWan?: string;
  /** 是否开启外网远程登录。（在SecurityGroupId不为空时，该参数无效）不填默认为不开启 取值范围：true：表示开启false：表示不开启 */
  EnableRemoteLoginFlag?: boolean;
  /** 是否开启Kerberos认证。默认不开启 取值范围：true：表示开启false：表示不开启 */
  EnableKerberosFlag?: boolean;
  /** [自定义软件配置](https://cloud.tencent.com/document/product/589/35655?from_cn_redirect=1) */
  CustomConf?: string;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的实例。 */
  Tags?: Tag[];
  /** 分散置放群组ID列表，当前只支持指定一个。该参数可以通过调用 [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/product/213/17810)的返回值中的DisasterRecoverGroupId字段来获取。 */
  DisasterRecoverGroupIds?: string[];
  /** 是否开启集群维度CBS加密。默认不加密 取值范围：true：表示加密false：表示不加密 */
  EnableCbsEncryptFlag?: boolean;
  /** MetaDB信息，当MetaType选择EMR_NEW_META时，MetaDataJdbcUrl MetaDataUser MetaDataPass UnifyMetaInstanceId不用填当MetaType选择EMR_EXIT_META时，填写UnifyMetaInstanceId当MetaType选择USER_CUSTOM_META时，填写MetaDataJdbcUrl MetaDataUser MetaDataPass */
  MetaDBInfo?: CustomMetaDBInfo;
  /** 共享组件信息 */
  DependService?: DependService[];
  /** 节点资源的规格，有几个可用区，就填几个，按顺序第一个为主可用区，第二个为备可用区，第三个为仲裁可用区。如果没有开启跨AZ，则长度为1即可。 */
  ZoneResourceConfiguration?: ZoneResourceConfiguration[];
  /** cos桶路径，创建StarRocks存算分离集群时用到 */
  CosBucket?: string;
  /** 节点标识信息，目前只提供给tf平台使用 */
  NodeMarks?: NodeMark[];
  /** clb id */
  LoadBalancerId?: string;
}

declare interface CreateClusterResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGroupsSTDRequest {
  /** 集群名称 */
  InstanceId: string;
  /** 批量用户组信息 */
  Groups: GroupInfo[];
}

declare interface CreateGroupsSTDResponse {
  /** 每个用户组的输出结果 */
  Data?: ResultItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceRequest {
  /** 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：51:表示STARROCKS-V1.4.054:表示STARROCKS-V2.0.027:表示KAFKA-V1.0.050:表示KAFKA-V2.0.016:表示EMR-V2.3.020:表示EMR-V2.5.030:表示EMR-V2.6.038:表示EMR-V2.7.025:表示EMR-V3.1.033:表示EMR-V3.2.134:表示EMR-V3.3.037:表示EMR-V3.4.044:表示EMR-V3.5.053:表示EMR-V3.6.0 */
  ProductId: number;
  /** 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）对应不同可选组件列表，不同产品版本可选组件列表查询：[组件版本](https://cloud.tencent.com/document/product/589/20279) ；填写实例值：hive、flink。 */
  Software: string[];
  /** 是否开启节点高可用。取值范围：0：表示不开启节点高可用。1：表示开启节点高可用。 */
  SupportHA: number;
  /** 实例名称。长度限制为6-36个字符。只允许包含中文、字母、数字、-、_。 */
  InstanceName: string;
  /** 实例计费模式。取值范围：0：表示按量计费。1：表示包年包月。 */
  PayMode: number;
  /** 购买实例的时长。结合TimeUnit一起使用。TimeUnit为s时，该参数只能填写3600，表示按量计费实例。TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月 */
  TimeSpan: number;
  /** 购买实例的时间单位。取值范围：s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。 */
  TimeUnit: string;
  /** 实例登录设置。通过该参数可以设置所购买节点的登录方式密码或者密钥。设置密钥时，密码仅用于组件原生WebUI快捷入口登录。未设置密钥时，密码用于登录所购节点以及组件原生WebUI快捷入口登录。 */
  LoginSettings: LoginSettings;
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。 */
  VPCSettings?: VPCSettings;
  /** 节点资源的规格。 */
  ResourceSpec?: NewResourceSpec;
  /** 开启COS访问需要设置的参数。 */
  COSSettings?: COSSettings;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement?: Placement;
  /** 实例所属安全组的ID，形如sg-xxxxxxxx。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的SecurityGroupId字段来获取。 */
  SgId?: string;
  /** [引导操作](https://cloud.tencent.com/document/product/589/35656)脚本设置。 */
  PreExecutedFileSettings?: PreExecuteFileSettings[];
  /** 包年包月实例是否自动续费。取值范围：0：表示不自动续费。1：表示自动续费。 */
  AutoRenew?: number;
  /** 唯一随机标识，时效5分钟，需要调用者指定 防止客户端重新创建资源，例如 a9a90aa6-****-****-****-fae36063280 */
  ClientToken?: string;
  /** 是否开启集群Master节点公网。取值范围：NEED_MASTER_WAN：表示开启集群Master节点公网。NOT_NEED_MASTER_WAN：表示不开启。默认开启集群Master节点公网。 */
  NeedMasterWan?: string;
  /** 是否需要开启外网远程登录，即22号端口。在SgId不为空时，该参数无效。 */
  RemoteLoginAtCreate?: number;
  /** 是否开启安全集群。0表示不开启，非0表示开启。 */
  CheckSecurity?: number;
  /** 访问外部文件系统。 */
  ExtendFsField?: string;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的实例。 */
  Tags?: Tag[];
  /** 分散置放群组ID列表，当前只支持指定一个。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/product/213/15486 ) 的返回值中的SecurityGroupId字段来获取。 */
  DisasterRecoverGroupIds?: string[];
  /** 集群维度CBS加密盘，默认0表示不加密，1表示加密 */
  CbsEncrypt?: number;
  /** hive共享元数据库类型。取值范围：EMR_DEFAULT_META：表示集群默认创建EMR_EXIST_META：表示集群使用指定EMR-MetaDB。USER_CUSTOM_META：表示集群使用自定义MetaDB。 */
  MetaType?: string;
  /** EMR-MetaDB实例 */
  UnifyMetaInstanceId?: string;
  /** 自定义MetaDB信息 */
  MetaDBInfo?: CustomMetaInfo;
  /** 自定义应用角色。 */
  ApplicationRole?: string;
  /** 场景化取值：Hadoop-KuduHadoop-ZookeeperHadoop-PrestoHadoop-Hbase */
  SceneName?: string;
  /** 共享组件信息 */
  ExternalService?: ExternalService[];
  /** 如果为0，则MultiZone、MultiDeployStrategy、MultiZoneSettings是disable的状态，如果为1，则废弃ResourceSpec，使用MultiZoneSettings。 */
  VersionID?: number;
  /** true表示开启跨AZ部署；仅为新建集群时的用户参数，后续不支持调整。 */
  MultiZone?: boolean;
  /** 节点资源的规格，有几个可用区，就填几个，按顺序第一个为主可用区，第二个为备可用区，第三个为仲裁可用区。如果没有开启跨AZ，则长度为1即可。 */
  MultiZoneSettings?: MultiZoneSetting[];
  /** cos桶路径，创建StarRocks存算分离集群时用到 */
  CosBucket?: string;
  /** 节点标识信息，目前只提供给tf平台使用 */
  NodeMarks?: NodeMark[];
  /** CLB id */
  LoadBalancerId?: string;
}

declare interface CreateInstanceResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSLInstanceRequest {
  /** 实例名称。 */
  InstanceName: string;
  /** 实例计费模式，0表示后付费，即按量计费，1表示预付费，即包年包月。 */
  PayMode: number;
  /** 实例存储类型，CLOUD_HSSD表示性能云存储， CLOUD_BSSD表示标准云存储。 */
  DiskType: string;
  /** 实例单节点磁盘容量，单位GB，单节点磁盘容量需大于等于100，小于等于250*CPU核心数，容量调整步长为100。 */
  DiskSize: number;
  /** 实例节点规格，可填写4C16G、8C32G、16C64G、32C128G，不区分大小写。 */
  NodeType: string;
  /** 实例可用区详细配置，当前支持多可用区，可用区数量只能为1或3，包含区域名称，VPC信息、节点数量，其中所有区域节点总数需大于等于3，小于等于50。 */
  ZoneSettings: ZoneSetting[];
  /** 实例要绑定的标签列表。 */
  Tags?: Tag[];
  /** 预付费参数 */
  PrePaySetting?: PrePaySetting;
  /** 唯一随机标识，时效性为5分钟，需要调用者指定 防止客户端重复创建资源，例如 a9a90aa6-****-****-****-fae360632808 */
  ClientToken?: string;
  /** 部署模式 */
  DeploymentMode?: string;
}

declare interface CreateSLInstanceResponse {
  /** 实例唯一标识符（字符串表示） */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAutoScaleStrategyRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 自动扩缩容规则类型，1表示按照负载指标扩缩容，2表示按照时间规则扩缩容。 */
  StrategyType: number;
  /** 规则ID。 */
  StrategyId: number;
  /** 伸缩组Id */
  GroupId?: number;
}

declare interface DeleteAutoScaleStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGroupsSTDRequest {
  /** 集群名称 */
  InstanceId: string;
  /** 用户组名称数组 */
  GroupNames: string[];
}

declare interface DeleteGroupsSTDResponse {
  /** 删除返回结果 */
  Data?: ResultItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNodeResourceConfigRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 节点配置Id */
  ResourceConfigId: number;
  /** 节点类型 CORE TASK ROUTER */
  ResourceType?: string;
  /** 类型为ComputeResource和EMR以及默认，默认为EMR */
  ResourceBaseType?: string;
  /** 计算资源id */
  ComputeResourceId?: string;
}

declare interface DeleteNodeResourceConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserManagerUserListRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 集群用户名列表 */
  UserNameList?: string[];
  /** tke/eks集群id，容器集群传 */
  TkeClusterId?: string;
  /** 默认空，容器版传"native" */
  DisplayStrategy?: string;
  /** 用户组 */
  UserGroupList?: UserAndGroup[];
  /** 是否删除家目录，只针对cvm集群 */
  DeleteHomeDir?: boolean;
}

declare interface DeleteUserManagerUserListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployYarnConfRequest {
  /** emr集群的英文id */
  InstanceId: string;
}

declare interface DeployYarnConfResponse {
  /** 启动流程后的流程ID，可以使用[DescribeClusterFlowStatusDetail](https://cloud.tencent.com/document/product/589/107224)接口来获取流程状态 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScaleGroupGlobalConfRequest {
  /** 实例ID。 */
  InstanceId: string;
}

declare interface DescribeAutoScaleGroupGlobalConfResponse {
  /** 集群所有伸缩组全局信息 */
  GroupGlobalConfs?: GroupGlobalConfs[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScaleRecordsRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 记录过滤参数，目前仅能为“StartTime”,“EndTime”和“StrategyName”、ActionStatus、ScaleAction。StartTime和EndTime支持2006-01-02 15:04:05 或者2006/01/02 15:04:05的时间格式ActionStatus：0:INITED,1:SUCCESS, 2:FAILED,3:LIMITED_SUCCESSED,4:IN_PROCESS,5:IN_RETRYScaleAction：1:扩容 2:缩容 */
  Filters?: KeyValue[];
  /** 分页参数。 */
  Offset?: number;
  /** 分页参数。最大支持100 */
  Limit?: number;
  /** 表示是自动(0)还是托管伸缩(1) */
  RecordSource?: number;
  /** 是否升序，1:升序，0:降序 */
  Asc?: number;
}

declare interface DescribeAutoScaleRecordsResponse {
  /** 总扩缩容记录数。 */
  TotalCount?: number;
  /** 记录列表。 */
  RecordList?: AutoScaleRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScaleStrategiesRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 伸缩组id */
  GroupId?: number;
}

declare interface DescribeAutoScaleStrategiesResponse {
  /** 按负载伸缩规则 */
  LoadAutoScaleStrategies?: LoadAutoScaleStrategy[] | null;
  /** 按时间伸缩规则 */
  TimeBasedAutoScaleStrategies?: TimeAutoScaleStrategy[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterFlowStatusDetailRequest {
  /** EMR实例ID */
  InstanceId: string;
  /** 流程相关参数 */
  FlowParam: FlowParam;
  /** 是否返回任务额外信息默认: false */
  NeedExtraDetail?: boolean;
}

declare interface DescribeClusterFlowStatusDetailResponse {
  /** 任务步骤详情 */
  StageDetails?: StageInfoDetail[] | null;
  /** 任务参数 */
  FlowDesc?: FlowParamsDesc[] | null;
  /** 任务名称 */
  FlowName?: string;
  /** 总任务流程进度：例如：0.8 */
  FlowTotalProgress?: number;
  /** 定义流程总状态：0:初始化，1:运行中，2:完成，3:完成（存在跳过步骤），-1:失败，-3:阻塞， */
  FlowTotalStatus?: number;
  /** 流程额外信息NeedExtraDetail为true时返回 */
  FlowExtraDetail?: FlowExtraDetail[] | null;
  /** 流程描述 */
  FlowInfo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterNodesRequest {
  /** 集群实例ID,实例ID形如: emr-xxxxxxxx */
  InstanceId: string;
  /** 节点标识，取值为：all：表示获取全部类型节点，cdb信息除外。master：表示获取master节点信息。core：表示获取core节点信息。task：表示获取task节点信息。common：表示获取common节点信息。router：表示获取router节点信息。db：表示获取正常状态的cdb信息。recyle：表示获取回收站隔离中的节点信息，包括cdb信息。renew：表示获取所有待续费的节点信息，包括cdb信息，自动续费节点不会返回。注意：现在只支持以上取值，输入其他值会导致错误。 */
  NodeFlag: string;
  /** 导出全部节点信息csv时是否携带cdb信息 */
  ExportDb?: boolean;
  /** 页编号，默认值为0，表示第一页。 */
  Offset?: number;
  /** 每页返回数量，默认值为100，最大值为100。如果offset和limit都不填，或者都填0，则返回全部数据 */
  Limit?: number;
  /** 资源类型:支持all/host/pod，默认为all */
  HardwareResourceType?: string;
  /** 支持搜索的字段 */
  SearchFields?: SearchItem[];
  /** 排序字段 */
  OrderField?: string;
  /** 是否升序，1:升序，0:降序 */
  Asc?: number;
}

declare interface DescribeClusterNodesResponse {
  /** 查询到的节点总数 */
  TotalCnt?: number;
  /** 节点详细信息列表 */
  NodeList?: NodeHardwareInfo[] | null;
  /** 用户所有的标签键列表 */
  TagKeys?: string[] | null;
  /** 资源类型列表 */
  HardwareResourceTypeList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCvmQuotaRequest {
  /** EMR集群ID */
  ClusterId: string;
  /** 区ID */
  ZoneId?: number;
}

declare interface DescribeCvmQuotaResponse {
  /** 后付费配额列表 */
  PostPaidQuotaSet?: QuotaEntity[] | null;
  /** 竞价实例配额列表 */
  SpotPaidQuotaSet?: QuotaEntity[] | null;
  /** eks配额 */
  EksQuotaSet?: PodSaleSpec[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDAGInfoRequest {
  /** 集群ID */
  InstanceID: string;
  /** DAG类型，目前只支持STARROCKS */
  Type: string;
  /** 查询ID列表,最大长度为1 */
  IDList: string[];
}

declare interface DescribeDAGInfoResponse {
  /** 总数，分页查询时使用 */
  TotalCount?: number;
  /** Starrocks 查询信息列表 */
  DAGInfoList?: DAGInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEmrApplicationStaticsRequest {
  /** 集群id */
  InstanceId: string;
  /** 起始时间，时间戳（秒） */
  StartTime?: number;
  /** 结束时间，时间戳（秒） */
  EndTime?: number;
  /** 过滤的队列名 */
  Queues?: string[];
  /** 过滤的用户名 */
  Users?: string[];
  /** 过滤的作业类型 */
  ApplicationTypes?: string[];
  /** 分组字段，可选：queue, user, applicationType */
  GroupBy?: string[];
  /** 排序字段，可选：sumMemorySeconds, sumVCoreSeconds, sumHDFSBytesWritten, sumHDFSBytesRead */
  OrderBy?: string;
  /** 是否顺序排序，0-逆序，1-正序 */
  IsAsc?: number;
  /** 页号 */
  Offset?: number;
  /** 页容量，范围为[10,100] */
  Limit?: number;
}

declare interface DescribeEmrApplicationStaticsResponse {
  /** 作业统计信息 */
  Statics?: ApplicationStatics[];
  /** 总数 */
  TotalCount?: number;
  /** 可选择的队列名 */
  Queues?: string[];
  /** 可选择的用户名 */
  Users?: string[];
  /** 可选择的作业类型 */
  ApplicationTypes?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEmrOverviewMetricsRequest {
  /** 结束时间 */
  End: number;
  /** 指标名，NODE.CPU：节点平均CPU利用率和总核数；NODE.CPU.SLHBASE：Serverless实例平均CPU利用率和总核数；HDFS.NN.CAPACITY：存储使用率和总量 */
  Metric: string;
  /** 集群id */
  InstanceId: string;
  /** 粒度 30s-max 1m-max 1h-max等 */
  Downsample: string;
  /** 起始时间，画饼状图时不传 */
  Start?: number;
  /** 聚合方法，扩展用，这里目前不用传 */
  Aggregator?: string;
  /** 指标要查询的具体type 如："{"type":"CapacityTotal|CapacityRemaining"}" */
  Tags?: string;
}

declare interface DescribeEmrOverviewMetricsResponse {
  /** 指标数据明细 */
  Result?: OverviewMetricData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGlobalConfigRequest {
  /** emr集群的英文id */
  InstanceId: string;
}

declare interface DescribeGlobalConfigResponse {
  /** 是否开启了资源调度功能 */
  EnableResourceSchedule?: boolean;
  /** 当前生效的资源调度器 */
  ActiveScheduler?: string;
  /** 公平调度器的信息 */
  CapacityGlobalConfig?: CapacityGlobalConfig | null;
  /** 容量调度器的信息 */
  FairGlobalConfig?: FairGlobalConfig | null;
  /** 最新的资源调度器 */
  Scheduler?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupsSTDRequest {
  /** 集群名称 */
  InstanceId: string;
  /** 描述键值对过滤器，用于条件过滤查询 */
  Filters?: Filter[];
  /** 描述排序，用于排序 */
  OrderFields?: Order;
  /** 返回数量 */
  Limit?: number;
  /** 分页参数 */
  Offset?: number;
}

declare interface DescribeGroupsSTDResponse {
  /** 用户组信息 */
  Data?: GroupInfos[];
  /** 符合条件的用户组数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHBaseTableOverviewRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分页查询编号偏移量，从0开始 */
  Offset: number;
  /** 分页查询时的分页大小，最小1，最大100 */
  Limit: number;
  /** 表名称，模糊匹配 */
  Table?: string;
  /** 排序的字段，有默认值 */
  OrderField?: string;
  /** 默认为降序，asc代表升序，desc代表降序 */
  OrderType?: string;
}

declare interface DescribeHBaseTableOverviewResponse {
  /** 概览数据数组 */
  TableMonitorList?: OverviewRow[];
  /** 概览数据数组长度 */
  TotalCount?: number;
  /** 表schema信息 */
  SchemaList?: TableSchemaItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHDFSStorageInfoRequest {
  /** 集群id */
  InstanceId: string;
  /** 获取查询信息开始时间 (s) */
  StartTime: number;
  /** 获取查询信息结束时间 (s) */
  EndTime: number;
}

declare interface DescribeHDFSStorageInfoResponse {
  /** 采样时间 */
  SampleTime?: number;
  /** hdfs存储详情 */
  StorageSummaryDistribution?: StorageSummaryDistribution[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHiveQueriesRequest {
  /** 集群ID */
  InstanceId: string;
  /** 起始时间秒 */
  StartTime: number;
  /** 结束时间秒，EndTime-StartTime不得超过1天秒数86400 */
  EndTime: number;
  /** 分页起始偏移，从0开始 */
  Offset: number;
  /** 分页大小，合法范围[1,100] */
  Limit: number;
  /** 执行状态,ERROR等 */
  State?: string[];
  /** 结束时间大于的时间点 */
  EndTimeGte?: number;
  /** 结束时间小于时间点 */
  EndTimeLte?: number;
}

declare interface DescribeHiveQueriesResponse {
  /** 总条数 */
  Total?: number;
  /** 结果列表 */
  Results?: HiveQuery[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImpalaQueriesRequest {
  /** 集群ID */
  InstanceId: string;
  /** 起始时间秒 */
  StartTime: number;
  /** 结束时间秒，EndTime-StartTime不得超过1天秒数86400 */
  EndTime: number;
  /** 分页起始偏移，从0开始 */
  Offset: number;
  /** 分页大小，合法范围[1,100] */
  Limit: number;
  /** 执行状态，CREATED、INITIALIZED、COMPILED、RUNNING、FINISHED、EXCEPTION */
  State?: string[];
  /** 结束时间大于的时间点 */
  EndTimeGte?: number;
  /** 结束时间小于的时间点 */
  EndTimeLte?: number;
}

declare interface DescribeImpalaQueriesResponse {
  /** 总数 */
  Total?: number;
  /** 结果列表 */
  Results?: ImpalaQuery[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInsightListRequest {
  /** 集群ID */
  InstanceId: string;
  /** 获取的洞察结果开始时间，此时间针对对App或者Hive查询的开始时间的过滤 */
  StartTime: number;
  /** 获取的洞察结果结束时间，此时间针对对App或者Hive查询的开始时间的过滤 */
  EndTime: number;
  /** 分页查询时的分页大小，最小1，最大100 */
  PageSize: number;
  /** 分页查询时的页号，从1开始 */
  Page: number;
  /** 查询类型,支持HIVE,SPARK,DLC_SPARK,SPARK_SQL,SCHEDULE,MAPREDUCE,TRINO等类型,默认查询全部 */
  Type?: string;
}

declare interface DescribeInsightListResponse {
  /** 总数，分页查询时使用 */
  TotalCount?: number;
  /** 洞察结果数组 */
  ResultList?: InsightResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInspectionTaskResultRequest {
  /** 实例ID */
  InstanceId: string;
  /** 类型 */
  Type?: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 分页大小 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeInspectionTaskResultResponse {
  /** 巡检任务记录，base64编码 */
  InspectionResultInfo?: string;
  /** 记录总数 */
  Total?: number;
  /** 类别信息，base64编码，{"FixedTime": "定时", "RealTime": "及时"} */
  TypeInfo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRenewNodesRequest {
  /** 集群实例ID,实例ID形如: emr-xxxxxxxx */
  InstanceId: string;
}

declare interface DescribeInstanceRenewNodesResponse {
  /** 查询到的节点总数 */
  TotalCnt?: number;
  /** 节点详细信息列表 */
  NodeList?: RenewInstancesInfo[] | null;
  /** 用户所有的标签键列表 */
  MetaInfo?: string[] | null;
  /** 集群依赖的Redis实例Id */
  RedisInfo?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesListRequest {
  /** 集群筛选策略。取值范围：clusterList：表示查询除了已销毁集群之外的集群列表。monitorManage：表示查询除了已销毁、创建中以及创建失败的集群之外的集群列表。cloudHardwareManage/componentManage：目前这两个取值为预留取值，暂时和monitorManage表示同样的含义。 */
  DisplayStrategy: string;
  /** 页编号，默认值为0，表示第一页。 */
  Offset?: number;
  /** 每页返回数量，默认值为100，最大值为100。如果limit和offset都为0，则查询全部记录； */
  Limit?: number;
  /** 排序字段。取值范围：clusterId：表示按照实例ID排序。addTime：表示按照实例创建时间排序。status：表示按照实例的状态码排序。 */
  OrderField?: string;
  /** 按照OrderField升序或者降序进行排序。取值范围：0：表示升序。1：表示降序。默认值为0。 */
  Asc?: number;
  /** 自定义查询过滤器。示例：根据ClusterId过滤实例：[{"Name":"ClusterId","Values":["emr-xxxxxxxx"]}]根据clusterName过滤实例：[{"Name": "ClusterName","Values": ["cluster_name"]}]根据ClusterStatus过滤实例：[{"Name": "ClusterStatus","Values": ["2"]}] */
  Filters?: Filters[];
}

declare interface DescribeInstancesListResponse {
  /** 符合条件的实例总数。 */
  TotalCnt?: number;
  /** 集群实例列表 */
  InstancesList?: EmrListInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 集群筛选策略。取值范围：clusterList：表示查询除了已销毁集群之外的集群列表。monitorManage：表示查询除了已销毁、创建中以及创建失败的集群之外的集群列表。cloudHardwareManage/componentManage：目前这两个取值为预留取值，暂时和monitorManage表示同样的含义。 */
  DisplayStrategy: string;
  /** 按照一个或者多个实例ID查询。实例ID形如: emr-xxxxxxxx 。(此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的 Ids.N 一节)。如果不填写实例ID，返回该APPID下所有实例列表。 */
  InstanceIds?: string[];
  /** 页编号，默认值为0，表示第一页。 */
  Offset?: number;
  /** 每页返回数量，默认值为100，最大值为100。 */
  Limit?: number;
  /** 建议必填-1，表示拉取所有项目下的集群。不填默认值为0，表示拉取默认项目下的集群。实例所属项目ID。该参数可以通过调用 [DescribeProjects](https://cloud.tencent.com/document/product/651/78725) 的返回值中的 projectId 字段来获取。 */
  ProjectId?: number;
  /** 排序字段。取值范围：clusterId：表示按照实例ID排序。addTime：表示按照实例创建时间排序。status：表示按照实例的状态码排序。 */
  OrderField?: string;
  /** 按照OrderField升序或者降序进行排序。取值范围：0：表示降序。1：表示升序。默认值为0。 */
  Asc?: number;
}

declare interface DescribeInstancesResponse {
  /** 符合条件的实例总数。 */
  TotalCnt?: number;
  /** EMR实例详细信息列表。 */
  ClusterList?: ClusterInstancesInfo[] | null;
  /** 实例关联的标签键列表。 */
  TagKeys?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobFlowRequest {
  /** 流程任务Id，RunJobFlow接口返回的值。 */
  JobFlowId: number;
}

declare interface DescribeJobFlowResponse {
  /** 流程任务状态，可以为以下值：JobFlowInit，流程任务初始化。JobFlowResourceApplied，资源申请中，通常为JobFlow需要新建集群时的状态。JobFlowResourceReady，执行流程任务的资源就绪。JobFlowStepsRunning，流程任务步骤已提交。JobFlowStepsComplete，流程任务步骤已完成。JobFlowTerminating，流程任务所需资源销毁中。JobFlowFinish，流程任务已完成。 */
  State: string;
  /** 流程任务步骤结果。 */
  Details: JobResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKyuubiQueryInfoRequest {
  /** 集群ID */
  InstanceId: string;
  /** 获取查询信息开始时间 (s) */
  StartTime: number;
  /** 获取查询信息结束时间 (s) */
  EndTime: number;
  /** 分页查询时的分页大小，最小1，最大100 */
  PageSize: number;
  /** 分页查询时的页号，从1开始 */
  Page: number;
}

declare interface DescribeKyuubiQueryInfoResponse {
  /** 总数，分页查询时使用 */
  TotalCount?: number;
  /** Kyuubi查询信息列表 */
  KyuubiQueryInfoList?: KyuubiQueryInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodeDataDisksRequest {
  /** EMR集群实例ID */
  InstanceId: string;
  /** 节点CVM实例Id列表 */
  CvmInstanceIds: string[];
  /** 查询云盘的过滤条件 */
  Filters?: Filters[];
  /** 模糊搜索 */
  InnerSearch?: string;
  /** 每页返回数量，默认值为100，最大值为100。 */
  Limit?: number;
  /** 数据偏移值 */
  Offset?: number;
}

declare interface DescribeNodeDataDisksResponse {
  /** 总数量 */
  TotalCount?: number;
  /** 云盘列表 */
  CBSList?: CBSInstance[] | null;
  /** 云盘最大容量 */
  MaxSize?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodeResourceConfigFastRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 节点类型 CORE TASK ROUTER ALL */
  ResourceType: string;
  /** 计费类型 */
  PayMode: number;
  /** 可用区ID */
  ZoneId?: number;
  /** 类型为ComputeResource和EMR以及默认，默认为EMR */
  ResourceBaseType?: string;
  /** 计算资源id */
  ComputeResourceId?: string;
  /** 硬件类型 */
  HardwareResourceType?: string;
}

declare interface DescribeNodeResourceConfigFastResponse {
  /** DescribeResourceConfig接口返回值 */
  Data?: DescribeResourceConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodeSpecRequest {
  /** 可用区Id，可以通过https://document.capi.woa.com/document/api/1605/76892查询相关信息 */
  ZoneId: number;
  /** 0,按量，1包年包月，99按量+包年包月，错填将不会展示费用信息 */
  CvmPayMode: number;
  /** 节点类型,Master,Core,Task,Router,All */
  NodeType: string;
  /** 0:旧计费页面,1:新计费页面。 错填，默认为旧计费 */
  TradeType: number;
  /** 产品Id，不填为0，则表示所有productId，前台使用必填44	EMR	V3.5.043	EMR	V3.4.0.tlinux42	EMR	V2.7.0.tlinux41	DRUID	V1.1.067	STARROCKS	V2.2.045	DRUID	V1.1.0.tlinux40	EMRCLOUD	v3.2.047	EMR	V4.0.048	STARROCKS	V1.2.049	STARROCKS	V1.3.050	KAFKA	V2.0.051	STARROCKS	V1.4.052	EMR-TKE	V1.0.053	EMR	V3.6.054	STARROCKS	V2.0.055	EMR-TKE	V1.0.156	EMR-TKE	DLCV1.0.057	EMR	V2.8.058	EMR	V3.6.159	SERVERLESS	V1.0.060	EMR-TKE	V1.1.062	STARROCKS	V2.1.163	STARROCKS	V2.1.1.tlinux64	EMR-TKE	TCCV1.0.065	EMR-TKE-AI	V1.0.066	RSS	V1.0.024	EMR	TianQiong-V1.0.03	EMR	V2.0.1.tlinux4	EMR	V2.1.07	EMR	V3.0.08	EMR	V3.0.0.tlinux9	EMR	V2.2.011	CLICKHOUSE	V1.0.012	CLICKHOUSE	V1.0.0.tlinux16	EMR	V2.3.017	CLICKHOUSE	V1.1.018	CLICKHOUSE	V1.1.0.tlinux19	EMR	V2.4.020	EMR	V2.5.021	USERCUSTOM	V1.0.022	CLICKHOUSE	V1.2.039	STARROCKS	V1.1.025	EMR	V3.1.026	DORIS	V1.0.027	KAFKA	V1.0.028	EMR	V3.2.029	EMR	V2.5.130	EMR	V2.6.032	DORIS	V1.1.033	EMR	V3.2.134	EMR	V3.3.035	DORIS	V1.2.036	STARROCKS	V1.0.037	EMR	V3.4.038	EMR	V2.7.0 */
  ProductId: number;
  /** 场景名 */
  SceneName: string;
  /** 类型为ComputeResource和EMR以及默认，默认为EMR */
  ResourceBaseType?: string;
  /** 计算资源id */
  ComputeResourceId?: string;
}

declare interface DescribeNodeSpecResponse {
  /** 节点规格类型 */
  NodeSpecs?: DescribeNodeSpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceScheduleDiffDetailRequest {
  /** emr集群的英文id */
  InstanceId: string;
  /** 查询的变更明细对应的调度器，可选值为fair、capacity。如果不传或者传空会使用最新的调度器 */
  Scheduler?: string;
}

declare interface DescribeResourceScheduleDiffDetailResponse {
  /** 变化项的明细 */
  Details?: DiffDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceScheduleRequest {
  /** emr集群的英文id */
  InstanceId: string;
}

declare interface DescribeResourceScheduleResponse {
  /** 资源调度功能是否开启 */
  OpenSwitch?: boolean;
  /** 正在使用的资源调度器 */
  Scheduler?: string;
  /** 公平调度器的信息 */
  FSInfo?: string;
  /** 容量调度器的信息 */
  CSInfo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSLInstanceListRequest {
  /** 实例筛选策略。取值范围：clusterList：表示查询除了已销毁实例之外的实例列表。monitorManage：表示查询除了已销毁、创建中以及创建失败的实例之外的实例列表。 */
  DisplayStrategy: string;
  /** 页编号，默认值为0，表示第一页。 */
  Offset?: number;
  /** 每页返回数量，默认值为10，最大值为100。 */
  Limit?: number;
  /** 排序字段。取值范围：clusterId：表示按照实例ID排序。addTime：表示按照实例创建时间排序。status：表示按照实例的状态码排序。 */
  OrderField?: string;
  /** 按照OrderField升序或者降序进行排序。取值范围：0：表示升序。1：表示降序。默认值为0。 */
  Asc?: number;
  /** 自定义查询过滤器。示例：根据ClusterId过滤实例：[{"Name":"ClusterId","Values":["emr-xxxxxxxx"]}]根据clusterName过滤实例：[{"Name": "ClusterName","Values": ["cluster_name"]}]根据ClusterStatus过滤实例：[{"Name": "ClusterStatus","Values": ["2"]}] */
  Filters?: Filters[];
}

declare interface DescribeSLInstanceListResponse {
  /** 符合条件的实例总数。 */
  TotalCnt?: number;
  /** 实例信息列表，如果进行了分页，只显示当前分页的示例信息列表。 */
  InstancesList?: SLInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSLInstanceRequest {
  /** 实例唯一标识符（字符串表示） */
  InstanceId: string;
}

declare interface DescribeSLInstanceResponse {
  /** 实例字符串标识。 */
  InstanceId?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 实例计费模式。0表示后付费，即按量计费，1表示预付费，即包年包月。 */
  PayMode?: number;
  /** 实例存储类型。 */
  DiskType?: string;
  /** 实例单节点磁盘容量，单位GB。 */
  DiskSize?: number;
  /** 实例节点规格。 */
  NodeType?: string;
  /** 实例可用区详细配置，包含可用区名称，VPC信息、节点数量。 */
  ZoneSettings?: ZoneSetting[];
  /** 实例绑定的标签列表。 */
  Tags?: Tag[] | null;
  /** 实例数字标识。 */
  ClusterId?: number;
  /** 实例区域ID。 */
  RegionId?: number;
  /** 实例主可用区。 */
  Zone?: string;
  /** 实例过期时间，后付费返回0000-00-00 00:00:00 */
  ExpireTime?: string;
  /** 实例隔离时间，未隔离返回0000-00-00 00:00:00。 */
  IsolateTime?: string;
  /** 实例创建时间。 */
  CreateTime?: string;
  /** 实例状态码，-2: "TERMINATED", 2: "RUNNING", 14: "TERMINATING", 19: "ISOLATING", 22: "ADJUSTING", 201: "ISOLATED"。 */
  Status?: number;
  /** 自动续费标记， 0：表示通知即将过期，但不自动续费 1：表示通知即将过期，而且自动续费 2：表示不通知即将过期，也不自动续费，若业务无续费概念为0 */
  AutoRenewFlag?: number;
  /** 实例节点总数。 */
  NodeNum?: number;
  /** Serverless Instance infomation */
  SLInstance?: SLInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceConfGroupInfosRequest {
  /** 集群id */
  InstanceId: string;
  /** 组件名 */
  ServiceName: string;
  /** 配置组名称 */
  ConfGroupName: string;
  /** 页码，从1开始 */
  PageNo: number;
  /** 页大小 */
  PageSize: number;
}

declare interface DescribeServiceConfGroupInfosResponse {
  /** 列表大小 */
  TotalCount?: number;
  /** 配置项key value列表 */
  ConfItemKVList?: ConfigurationItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceNodeInfosRequest {
  /** 实例ID */
  InstanceId: string;
  /** 页码 */
  Offset?: number;
  /** 页大小 */
  Limit?: number;
  /** 搜索字段 */
  SearchText?: string;
  /** '配置状态，-2：配置失败，-1:配置过期，1：已同步', -99 '全部' */
  ConfStatus?: number;
  /** 过滤条件：维护状态0代表所有状态1代表正常模式2代表维护模式 */
  MaintainStateId?: number;
  /** 过滤条件：操作状态0代表所有状态1代表已启动2代表已停止 */
  OperatorStateId?: number;
  /** 过滤条件：健康状态"0"代表不可用"1"代表良好"-2"代表未知"-99"代表所有"-3"代表存在隐患"-4"代表未探测 */
  HealthStateId?: string;
  /** 服务组件名称，都是大写例如YARN */
  ServiceName?: string;
  /** 节点名称master,core,task,common,router */
  NodeTypeName?: string;
  /** 过滤条件：dn是否处于维护状态0代表所有状态1代表处于维护状态 */
  DataNodeMaintenanceId?: number;
  /** 支持搜索的字段，目前支持 SearchType	：ipv4 */
  SearchFields?: SearchItem[];
}

declare interface DescribeServiceNodeInfosResponse {
  /** 总数量 */
  TotalCnt?: number;
  /** 进程信息 */
  ServiceNodeList?: ServiceNodeDetailInfo[] | null;
  /** 集群所有节点的别名序列化 */
  AliasInfo?: string;
  /** 支持的FlagNode列表 */
  SupportNodeFlagFilterList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkApplicationsRequest {
  /** 集群id */
  InstanceId: string;
  /** 查询开始时间 */
  StartTime: number;
  /** 查询结束时间 */
  EndTime: number;
  /** 每一页条数 */
  PageSize: number;
  /** 第几页 */
  Page: number;
}

declare interface DescribeSparkApplicationsResponse {
  /** 返回数量 */
  TotalCount?: number;
  /** spark应用列表 */
  ResultList?: SparkApplicationsList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkQueriesRequest {
  /** 集群ID */
  InstanceId: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 分页起始偏移，从0开始 */
  Offset: number;
  /** 分页大小，合法范围[1,100] */
  Limit: number;
  /** 执行状态:RUNNING,COMPLETED,FAILED */
  Status?: string[];
}

declare interface DescribeSparkQueriesResponse {
  /** 总数 */
  Total?: number;
  /** 结果列表 */
  Results?: SparkQuery[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStarRocksQueryInfoRequest {
  /** 集群ID */
  InstanceId: string;
  /** 获取查询信息开始时间 (s) */
  StartTime: number;
  /** 获取查询信息结束时间 (s) */
  EndTime: number;
  /** 分页查询时的分页大小，最小1，最大100 */
  PageSize: number;
  /** 分页查询时的页号，从1开始 */
  Page: number;
}

declare interface DescribeStarRocksQueryInfoResponse {
  /** 总数，分页查询时使用 */
  TotalCount?: number;
  /** Starrocks 查询信息列表 */
  StarRocksQueryInfoList?: StarRocksQueryInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrinoQueryInfoRequest {
  /** 集群ID */
  InstanceId: string;
  /** 获取查询信息开始时间 (s) */
  StartTime: number;
  /** 获取查询信息结束时间 (s) */
  EndTime: number;
  /** 分页查询时的分页大小，最小1，最大100 */
  PageSize: number;
  /** 分页查询时的页号，从1开始 */
  Page: number;
}

declare interface DescribeTrinoQueryInfoResponse {
  /** 总数，分页查询时使用 */
  TotalCount?: number;
  /** 查询结果数组 */
  QueryInfoList?: TrinoQueryInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsersForUserManagerRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 页码 */
  PageNo: number;
  /** 分页的大小。默认查询全部；PageNo和PageSize不合理的设置，都是查询全部 */
  PageSize: number;
  /** 查询用户列表过滤器 */
  UserManagerFilter?: UserManagerFilter;
  /** 是否需要keytab文件的信息，仅对开启kerberos的集群有效，默认为false */
  NeedKeytabInfo?: boolean;
}

declare interface DescribeUsersForUserManagerResponse {
  /** 总数 */
  TotalCnt?: number;
  /** 用户信息列表 */
  UserManagerUserList?: UserManagerUserBriefInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeYarnApplicationsRequest {
  /** 集群ID */
  InstanceId: string;
  /** 起始时间秒 */
  StartTime: number;
  /** 结束时间秒，EndTime-StartTime不得超过1天秒数86400 */
  EndTime: number;
  /** 分页偏移量，Offset=0表示第一页；如果limit=100，Offset=1，则表示第二页，数据第101条开始查询，返回100条数据；如果limit=100，Offset=2，则表示第三页，数据第201条开始查询，返回100条数据。依次类推 */
  Offset: number;
  /** 分页大小，合法范围[1,100] */
  Limit: number;
}

declare interface DescribeYarnApplicationsResponse {
  /** 总数 */
  Total?: number;
  /** 结果列表 */
  Results?: YarnApplication[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeYarnQueueRequest {
  /** 集群Id */
  InstanceId: string;
  /** 调度器，可选值：1. capacity2. fair */
  Scheduler: string;
}

declare interface DescribeYarnQueueResponse {
  /** 队列信息。是一个对象转成的json字符串，对应的golang结构体如下所示，例如`QueueWithConfigSetForFairScheduler`的第一个字段`Name`：```Name string `json:"name"` //队列名称```- `Name`：字段名- `string`：字段类型- `json:"name"`：表示在序列化和反序列化`json`时，对应的`json key`，下面以`json key`来指代- `//`：后面的注释内容对应页面上看到的名称字段类型以`*`开头的表示取值可能为json规范下的null，不同的语言需要使用能表达null的类型来接收，例如java的包装类型；字段类型以`[]`开头的表示是数组类型；`json key`在调用`ModifyYarnQueueV2 `接口也会使用。- 公平调度器```type QueueWithConfigSetForFairScheduler struct {	Name string `json:"name"` //队列名称	MyId string `json:"myId"` // 队列id，用于编辑、删除、克隆时使用	ParentId string `json:"parentId"` // 父队列Id	Type *string `json:"type"` // 队列归属。parent或空，当确定某个队列是父队列，且没有子队列时，才可以设置，通常用来支持放置策略nestedUserQueue	AclSubmitApps *AclForYarnQueue `json:"aclSubmitApps"` // 提交访问控制	AclAdministerApps *AclForYarnQueue `json:"aclAdministerApps"` // 管理访问控制	MinSharePreemptionTimeout *int `json:"minSharePreemptionTimeout"` // 最小共享优先权超时时间	FairSharePreemptionTimeout *int `json:"fairSharePreemptionTimeout"` // 公平份额抢占超时时间	FairSharePreemptionThreshold *float32 `json:"fairSharePreemptionThreshold"` // 公平份额抢占阈值。取值 （0，1]	AllowPreemptionFrom *bool `json:"allowPreemptionFrom"` // 抢占模式	SchedulingPolicy *string `json:"schedulingPolicy"` // 调度策略，取值有drf、fair、fifo	IsDefault *bool `json:"isDefault"` // 是否是root.default队列	IsRoot *bool `json:"isRoot"` // 是否是root队列	ConfigSets []ConfigSetForFairScheduler `json:"configSets"` // 配置集设置	Children []QueueWithConfigSetForFairScheduler `json:"queues"` // 子队列信息。递归}type AclForYarnQueue struct {	User *string `json:"user"` //用户名	Group *string `json:"group"`//组名}type ConfigSetForFairScheduler struct {	Name string `json:"name"` // 配置集名称	MinResources *YarnResource `json:"minResources"` // 最小资源量	MaxResources *YarnResource `json:"maxResources"` // 最大资源量	MaxChildResources *YarnResource `json:"maxChildResources"` // 能够分配给为未声明子队列的最大资源量	MaxRunningApps *int `json:"maxRunningApps"` // 最高可同时处于运行的App数量	Weight *float32 `json:"weight"` // 权重	MaxAMShare *float32 `json:"maxAMShare"` // App Master最大份额}type YarnResource struct {	Vcores *int `json:"vcores"`	Memory *int `json:"memory"`	Type *string `json:"type"` // 当值为`percent`时，表示使用的百分比，否则就是使用的绝对数值}```- 容量调度器```type QueueForCapacitySchedulerV3 struct {	Name string `json:"name"` // 队列名称	MyId string `json:"myId"` // 队列id，用于编辑、删除、克隆时使用	ParentId string `json:"parentId"` // 父队列Id	Configs []ConfigForCapacityV3 `json:"configs"` //配置集设置	State *string `json:"state"` // 资源池状态	DefaultNodeLabelExpression *string `json:"default-node-label-expression"` // 默认标签表达式	AclSubmitApps *AclForYarnQueue `json:"acl_submit_applications"` // 提交访问控制	AclAdminQueue *AclForYarnQueue `json:"acl_administer_queue"` //管理访问控制	MaxAllocationMB *int32 `json:"maximum-allocation-mb"` // 分配Container最大内存数量	MaxAllocationVcores *int32 `json:"maximum-allocation-vcores"` // Container最大vCore数量	IsDefault *bool `json:"isDefault"`// 是否是root.default队列	IsRoot *bool `json:"isRoot"` // 是否是root队列	Queues []*QueueForCapacitySchedulerV3 `json:"queues"`//子队列信息。递归}type ConfigForCapacityV3 struct {	Name string `json:"configName"` // 配置集名称	Labels []CapacityLabel `json:"labels"` // 标签信息	MinUserLimitPercent *int32 `json:"minimum-user-limit-percent"` // 用户最小容量	UserLimitFactor *float32 `json:"user-limit-factor" valid:"rangeExcludeLeft(0|)"` // 用户资源因子	MaxApps *int32 `json:"maximum-applications" valid:"rangeExcludeLeft(0|)"` // 最大应用数Max-Applications	MaxAmPercent *float32 `json:"maximum-am-resource-percent"` // 最大AM比例	DefaultApplicationPriority *int32 `json:"default-application-priority"` // 资源池优先级}type CapacityLabel struct {	Name string `json:"labelName"`	Capacity *float32 `json:"capacity"` // 容量	MaxCapacity *float32 `json:"maximum-capacity"` //最大容量}type AclForYarnQueue struct {	User *string `json:"user"` //用户名	Group *string `json:"group"`//组名}``` */
  Queue?: string;
  /** 版本 */
  Version?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeYarnScheduleHistoryRequest {
  /** 集群id */
  InstanceId: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 页码 */
  Limit?: number;
  /** 页大小 */
  Offset?: number;
  /** 调度器类型 可选值为“ALL”，"Capacity Scheduler", "Fair Scheduler" */
  SchedulerType?: string;
  /** 任务类型0:等待执行，1:执行中，2：完成，-1:失败 ，-99:全部 */
  TaskState?: number;
}

declare interface DescribeYarnScheduleHistoryResponse {
  /** 任务详情 */
  Tasks?: SchedulerTaskInfo[] | null;
  /** 任务详情总数 */
  Total?: number;
  /** 调度类型筛选列表 */
  SchedulerNameList?: string[] | null;
  /** 状态筛选列表 */
  StateList?: number[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRenewEmrRequest {
  /** 实例续费的时长。需要结合TimeUnit一起使用。1表示续费一个月 */
  TimeSpan: number;
  /** 待续费集群ID列表。 */
  InstanceId: string;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement: Placement;
  /** 实例计费模式。此处只支持取值为1，表示包年包月。 */
  PayMode: number;
  /** 实例续费的时间单位。取值范围：m：表示月份。 */
  TimeUnit?: string;
  /** 货币种类。取值范围：CNY：表示人民币。 */
  Currency?: string;
}

declare interface InquirePriceRenewEmrResponse {
  /** 原价，单位为元。 */
  OriginalCost?: number;
  /** 折扣价，单位为元。 */
  DiscountCost?: number;
  /** 实例续费的时间单位。取值范围：m：表示月份。 */
  TimeUnit?: string;
  /** 实例续费的时长。 */
  TimeSpan?: number;
  /** 节点续费询价明细列表 */
  NodeRenewPriceDetails?: NodeRenewPriceDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateInstanceRequest {
  /** 购买实例的时间单位。取值范围：s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。 */
  TimeUnit: string;
  /** 购买实例的时长。结合TimeUnit一起使用。TimeUnit为s时，该参数只能填写3600，表示按量计费实例。TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月 */
  TimeSpan: number;
  /** 货币种类。取值范围：CNY：表示人民币。 */
  Currency: string;
  /** 实例计费模式。取值范围：0：表示按量计费。1：表示包年包月。 */
  PayMode: number;
  /** 是否开启节点高可用。取值范围：0：表示不开启节点高可用。1：表示开启节点高可用。 */
  SupportHA: number;
  /** 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）需要选择不同的必选组件：ProductId为2(EMR-V2.0.1)的时候，必选组件包括：hdfs-2.7.3,yarn-2.7.3,zookeeper-3.4.9,knox-1.2.0ProductId为16(EMR-V2.3.0)的时候，必选组件包括：hdfs-2.8.5,yarn-2.8.5,zookeeper-3.5.5,knox-1.2.0ProductId为20(EMR-V2.5.0)的时候，必选组件包括：hdfs-2.8.5,yarn-2.8.5,zookeeper-3.6.1,knox-1.2.0ProductId为30(EMR-V2.6.0)的时候，必选组件包括：hdfs-2.8.5,yarn-2.8.5,zookeeper-3.6.1,openldap-2.4.44,knox-1.2.0ProductId为38(EMR-V2.7.0)的时候，必选组件包括：hdfs-2.8.5,yarn-2.8.5,zookeeper-3.6.3,openldap-2.4.44,knox-1.6.1ProductId为57(EMR-V2.8.0)的时候，必选组件包括：hdfs-2.8.5,yarn-2.8.5,zookeeper-3.6.3,openldap-2.4.44,knox-1.6.1ProductId为7(EMR-V3.0.0)的时候，必选组件包括：hdfs-3.1.2,yarn-3.1.2,zookeeper-3.4.9,knox-1.2.0ProductId为25(EMR-V3.1.0)的时候，必选组件包括：hdfs-3.1.2,yarn-3.1.2,zookeeper-3.6.1,knox-1.2.0ProductId为31(EMR-V3.1.1)的时候，必选组件包括：hdfs-3.1.2,yarn-3.1.2,zookeeper-3.6.1,knox-1.2.0ProductId为28(EMR-V3.2.0)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.1,knox-1.2.0ProductId为33(EMR-V3.2.1)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.1,openldap-2.4.44,knox-1.2.0ProductId为34(EMR-V3.3.0)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.1,openldap-2.4.44,knox-1.2.0ProductId为37(EMR-V3.4.0)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.3,openldap-2.4.44,knox-1.6.1ProductId为44(EMR-V3.5.0)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.3,openldap-2.4.44,knox-1.6.1ProductId为53(EMR-V3.6.0)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.3,openldap-2.4.44,knox-1.6.1ProductId为58(EMR-V3.6.1)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.3,openldap-2.4.46,knox-1.6.1ProductId为47(EMR-V4.0.0)的时候，必选组件包括：hdfs-3.2.2,yarn-3.2.2,zookeeper-3.6.3,openldap-2.4.44,knox-1.6.1 */
  Software: string[];
  /** 询价的节点规格。 */
  ResourceSpec?: NewResourceSpec;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement?: Placement;
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。 */
  VPCSettings?: VPCSettings;
  /** hive共享元数据库类型。取值范围：EMR_NEW_META：表示集群默认创建EMR_EXIT_METE：表示集群使用指定EMR-MetaDB。USER_CUSTOM_META：表示集群使用自定义MetaDB。 */
  MetaType?: string;
  /** EMR-MetaDB实例 */
  UnifyMetaInstanceId?: string;
  /** 自定义MetaDB信息 */
  MetaDBInfo?: CustomMetaInfo;
  /** 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：2：表示EMR-V2.0.116：表示EMR-V2.3.020：表示EMR-V2.5.030：表示EMR-V2.6.038：表示EMR-V2.7.057：表示EMR-V2.8.07：表示EMR-V3.0.025：表示EMR-V3.1.031：表示EMR-V3.1.128：表示EMR-V3.2.033：表示EMR-V3.2.134：表示EMR-V3.3.037：表示EMR-V3.4.044：表示EMR-V3.5.053：表示EMR-V3.6.058：表示EMR-V3.6.147：表示EMR-V4.0.0 */
  ProductId?: number;
  /** 场景化取值：Hadoop-Kudu，Hadoop-Zookeeper，Hadoop-Presto，Hadoop-Hbase */
  SceneName?: string;
  /** 共用组件信息 */
  ExternalService?: ExternalService[];
  /** 当前默认值为0，跨AZ特性支持后为1 */
  VersionID?: number;
  /** 可用区的规格信息 */
  MultiZoneSettings?: MultiZoneSetting[];
}

declare interface InquiryPriceCreateInstanceResponse {
  /** 原价，单位为元。 */
  OriginalCost?: number;
  /** 折扣价，单位为元。 */
  DiscountCost?: number;
  /** 购买实例的时间单位。取值范围：s：表示秒。m：表示月份。 */
  TimeUnit?: string;
  /** 购买实例的时长。 */
  TimeSpan?: number;
  /** 价格清单 */
  PriceList?: ZoneDetailPriceResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewInstanceRequest {
  /** 实例续费的时长。需要结合TimeUnit一起使用。1表示续费一个月 */
  TimeSpan: number;
  /** 实例计费模式。此处只支持取值为1，表示包年包月。 */
  PayMode: number;
  /** 待续费节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr)查询。 */
  ResourceIds?: string[];
  /** 实例续费的时间单位。取值范围：m：表示月份。 */
  TimeUnit?: string;
  /** 货币种类。取值范围：CNY：表示人民币。 */
  Currency?: string;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement?: Placement;
  /** 是否按量转包年包月。0：否，1：是。 */
  ModifyPayMode?: number;
  /** 是否需要每个节点续费价格 */
  NeedDetail?: boolean;
  /** 集群id，如果需要集群所有包年包月节点续费信息，可以填写该参数 */
  InstanceId?: string;
}

declare interface InquiryPriceRenewInstanceResponse {
  /** 原价，单位为元。 */
  OriginalCost?: number;
  /** 折扣价，单位为元。 */
  DiscountCost?: number;
  /** 实例续费的时间单位。取值范围：m：表示月份。 */
  TimeUnit?: string;
  /** 实例续费的时长。 */
  TimeSpan?: number;
  /** 价格详情 */
  PriceDetail?: PriceDetail[] | null;
  /** 节点续费询价明细列表 */
  NodeRenewPriceDetails?: NodeRenewPriceDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceScaleOutInstanceRequest {
  /** 扩容的时间单位。取值范围：s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。 */
  TimeUnit: string;
  /** 扩容的时长。结合TimeUnit一起使用。TimeUnit为s时，该参数只能填写3600，表示按量计费实例。TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月 */
  TimeSpan: number;
  /** 实例所属的可用区ID，例如100003。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/213/15707) 的返回值中的ZoneId字段来获取。 */
  ZoneId: number;
  /** 实例计费模式。取值范围：0：表示按量计费。1：表示包年包月。 */
  PayMode: number;
  /** 实例ID。 */
  InstanceId: string;
  /** 扩容的Core节点数量。 */
  CoreCount: number;
  /** 扩容的Task节点数量。 */
  TaskCount: number;
  /** 货币种类。取值范围：CNY：表示人民币。 */
  Currency: string;
  /** 扩容的Router节点数量。 */
  RouterCount?: number;
  /** 扩容的Master节点数量。 */
  MasterCount?: number;
  /** 类型为ComputeResource和EMR以及默认，默认为EMR */
  ResourceBaseType?: string;
  /** 计算资源id */
  ComputeResourceId?: string;
  /** 扩容资源类型 */
  HardwareResourceType?: string;
}

declare interface InquiryPriceScaleOutInstanceResponse {
  /** 原价，单位为元。 */
  OriginalCost?: string;
  /** 折扣价，单位为元。 */
  DiscountCost?: string;
  /** 扩容的时间单位。取值范围：s：表示秒。m：表示月份。 */
  Unit?: string;
  /** 询价的节点规格。 */
  PriceSpec?: PriceResource | null;
  /** 对应入参MultipleResources中多个规格的询价结果，其它出参返回的是第一个规格的询价结果 */
  MultipleEmrPrice?: EmrPrice[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceUpdateInstanceRequest {
  /** 变配的时间单位。取值范围：s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。 */
  TimeUnit: string;
  /** 变配的时长。结合TimeUnit一起使用。TimeUnit为s时，该参数只能填写3600，表示按量计费实例。TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月 */
  TimeSpan: number;
  /** 实例计费模式。取值范围：0：表示按量计费。1：表示包年包月。 */
  PayMode: number;
  /** 节点变配的目标配置。 */
  UpdateSpec?: UpdateInstanceSettings;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement?: Placement;
  /** 货币种类。取值范围：CNY：表示人民币。 */
  Currency?: string;
  /** 批量变配资源ID列表 */
  ResourceIdList?: string[];
}

declare interface InquiryPriceUpdateInstanceResponse {
  /** 原价，单位为元。 */
  OriginalCost?: number;
  /** 折扣价，单位为元。 */
  DiscountCost?: number;
  /** 变配的时间单位。取值范围：s：表示秒。m：表示月份。 */
  TimeUnit?: string;
  /** 变配的时长。 */
  TimeSpan?: number;
  /** 价格详情 */
  PriceDetail?: PriceDetail[] | null;
  /** 新配置价格 */
  NewConfigPrice?: PriceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoRenewFlagRequest {
  /** 集群ID */
  InstanceId: string;
  /** 实例ID */
  ResourceIds: string[];
  /** NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费 NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费 DISABLE_NOTIFY_AND_MANUAL_RENEW：表示不通知即将过期，也不自动续费。 */
  RenewFlag: string;
  /** 计算资源id */
  ComputeResourceId?: string;
}

declare interface ModifyAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoScaleStrategyRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 自动扩缩容规则类型，1表示按负载指标扩缩容，2表示按时间扩缩容。 */
  StrategyType: number;
  /** 按负载扩缩容的指标。 */
  LoadAutoScaleStrategies?: LoadAutoScaleStrategy[];
  /** 按时间扩缩容的规则。 */
  TimeAutoScaleStrategies?: TimeAutoScaleStrategy[];
  /** 伸缩组Id */
  GroupId?: number;
}

declare interface ModifyAutoScaleStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGlobalConfigRequest {
  /** emr集群的英文id */
  InstanceId: string;
  /** 修改的配置列表。其中Key的取值与`DescribeGlobalConfig`接口的出参一一对应，不区分大小写（如果报错找不到Key，以出参为准），分别为：1. 开启或关闭资源调度：enableResourceSchedule；在关闭时会有一个同步的选项，Key为sync，取值为true或false。2. 调度器类型：scheduler。2. 开启或关闭标签：enableLabel，取值为true或false。2. 标签目录：labelDir。3. 是否覆盖用户指定队列：queueMappingOverride，取值为true、false。4. 程序上限：userMaxAppsDefault。5. 动态配置项：`DescribeGlobalConfig`接口返回的DefaultSettings中的Name字段。Value的取值都是字符串，对于**是否覆盖用户指定队列**、**程序上限**，json规范中的null表示清空该配置的值。支持修改单个配置项的值。对于**动态配置项**则需要全量传递以进行覆盖。 */
  Items: Item[];
}

declare interface ModifyGlobalConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInspectionSettingsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 巡检类型，FixedTime/RealTime */
  Type: string;
  /** 任务配置 */
  Settings: InspectionTaskSettings[];
  /** 开始时间戳 */
  StartTime?: number;
  /** 结束时间戳 */
  EndTime?: number;
  /** 巡检周期，eg EveryDay EveryWeek EveryMonth */
  Strategy?: string;
  /** 每天的开始的时间 */
  Clock?: string;
  /** 每周的周几 */
  DayOfWeek?: string;
  /** 每月的第几号 */
  DayOfMonth?: string;
  /** 巡检作业Id */
  JobId?: string;
}

declare interface ModifyInspectionSettingsResponse {
  /** 返回值描述 */
  Info?: string;
  /** 返回成功修改的巡检任务Id */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceBasicRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 用来标注修改计算资源 */
  ResourceBaseType?: string;
  /** 需要修改的计算资源id，与ResourceBaseType 配合使用 */
  ComputeResourceId?: string;
}

declare interface ModifyInstanceBasicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPodNumRequest {
  /** 集群Id */
  InstanceId: string;
  /** 服务编号 */
  ServiceGroup: number;
  /** 角色编号 */
  ServiceType?: number;
  /** 期望Pod数量 */
  PodNum?: number;
}

declare interface ModifyPodNumResponse {
  /** 集群Id */
  InstanceId?: string;
  /** 流程Id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourcePoolsRequest {
  /** emr集群id */
  InstanceId: string;
  /** 取值范围：fair:代表公平调度标识capacity:代表容量调度标识 */
  Key: string;
}

declare interface ModifyResourcePoolsResponse {
  /** false表示不是草稿，提交刷新请求成功 */
  IsDraft?: boolean;
  /** 扩展字段，暂时没用 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 计费类型 */
  PayMode: number;
  /** 变配CPU */
  NewCpu: number;
  /** 变配内存 */
  NewMem: number;
  /** Token */
  ClientToken?: string;
  /** 变配机器规格 */
  InstanceType?: string;
  /** 节点ID列表 */
  ResourceIdList?: string[];
}

declare interface ModifyResourceResponse {
  /** 流程traceId */
  TraceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourceScheduleConfigRequest {
  /** emr集群的英文id */
  InstanceId: string;
  /** 业务标识，fair表示编辑公平的配置项，fairPlan表示编辑执行计划，capacity表示编辑容量的配置项 */
  Key: string;
  /** 修改后的模块消息 */
  Value: string;
}

declare interface ModifyResourceScheduleConfigResponse {
  /** true为草稿，表示还没有刷新资源池 */
  IsDraft?: boolean;
  /** 校验错误信息，如果不为空，则说明校验失败，配置没有成功 */
  ErrorMsg?: string;
  /** 返回数据 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourceSchedulerRequest {
  /** emr集群的英文id */
  InstanceId: string;
  /** 老的调度器:fair */
  OldValue: string;
  /** 新的调度器:capacity */
  NewValue: string;
}

declare interface ModifyResourceSchedulerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourcesTagsRequest {
  /** 标签类型，取值Cluster或者Node */
  ModifyType: string;
  /** 标签信息 */
  ModifyResourceTagsInfoList: ModifyResourceTags[];
}

declare interface ModifyResourcesTagsResponse {
  /** 成功的资源id列表 */
  SuccessList?: string[] | null;
  /** 失败的资源id列表 */
  FailList?: string[] | null;
  /** 部分成功的资源id列表 */
  PartSuccessList?: string[] | null;
  /** 集群id与流程id的映射列表 */
  ClusterToFlowIdList?: ClusterIDToFlowID[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySLInstanceBasicRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 实例名称 */
  ClusterName: string;
}

declare interface ModifySLInstanceBasicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySLInstanceRequest {
  /** 实例唯一标识符（字符串表示）。 */
  InstanceId: string;
  /** 需要变更的区域名称。 */
  Zone: string;
  /** 该区域变配后的目标节点数量，所有区域节点总数应大于等于3，小于等于50。 */
  NodeNum: number;
  /** 唯一随机标识，时效性为5分钟，需要调用者指定 防止客户端重复创建资源，例如 a9a90aa6-****-****-****-fae360632808 */
  ClientToken?: string;
}

declare interface ModifySLInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserGroupRequest {
  /** 用户信息列表 */
  Users: string[];
  /** 用户主组，cvm集群为必填参数，tke集群选填 */
  UserGroup?: string;
  /** 用户副组 */
  Groups?: string[];
  /** 备注 */
  Remark?: string;
}

declare interface ModifyUserGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserManagerPwdRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 用户名 */
  UserName: string;
  /** 密码 */
  PassWord: string;
}

declare interface ModifyUserManagerPwdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUsersOfGroupSTDRequest {
  /** 集群名称 */
  InstanceId: string;
  /** 用户组名 */
  Group: string;
  /** 用户列表 */
  Users?: string[];
  /** 用户组描述 */
  Description?: string;
  /** 枚举类, ADD, DELETE, SYNC枚举类说明:- ADD: 新增的批量用户, 多次新增相同的用户不会报错- DELETE: 从用户组里删除的批量用户, 删除不存在的用户不会报错- SYNC: 用于同步整个用户组, 当列表为空时代表清空整个用户组默认为SYNC */
  OperateAction?: string;
}

declare interface ModifyUsersOfGroupSTDResponse {
  /** 是否修改成功 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyYarnDeployRequest {
  /** 集群id */
  InstanceId: string;
  /** 切换后的调度器，可选值为fair、capacity */
  NewScheduler: string;
  /** 现在使用的调度器，可选值为fair、capacity */
  OldScheduler?: string;
}

declare interface ModifyYarnDeployResponse {
  /** 为false不点亮部署生效、重置 */
  IsDraft?: boolean;
  /** 错误信息，预留 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyYarnQueueV2Request {
  /** 集群Id */
  InstanceId: string;
  /** 调度器类型。可选值：1. capacity2. fair */
  Scheduler: string;
  /** 资源池数据 */
  ConfigModifyInfoList: ConfigModifyInfoV2[];
}

declare interface ModifyYarnQueueV2Response {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetYarnConfigRequest {
  /** emr集群的英文id */
  InstanceId: string;
  /** 要重置的配置别名，可选值：- capacityLabel：重置标签管理的配置- fair：重置公平调度的配置- capacity：重置容量调度的配置 */
  Key?: string;
}

declare interface ResetYarnConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeDataDisksRequest {
  /** EMR集群实例ID */
  InstanceId: string;
  /** 需要扩充的容量值，容量值需要大于原容量，并且为10的整数倍 */
  DiskSize: number;
  /** 需要扩容的节点ID列表 */
  CvmInstanceIds: string[];
  /** 需要扩容的云盘ID */
  DiskIds?: string[];
  /** 是否扩容全部云硬盘 */
  ResizeAll?: boolean;
}

declare interface ResizeDataDisksResponse {
  /** 流程Id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunJobFlowRequest {
  /** 作业名称。 */
  Name: string;
  /** 是否新创建集群。true，新创建集群，则使用Instance中的参数进行集群创建。false，使用已有集群，则通过InstanceId传入。 */
  CreateCluster: boolean;
  /** 作业流程执行步骤。 */
  Steps: Step[];
  /** 作业流程正常完成时，集群的处理方式，可选择:Terminate 销毁集群。Reserve 保留集群。 */
  InstancePolicy: string;
  /** 只有CreateCluster为true时生效，目前只支持EMR版本，例如EMR-2.2.0，不支持ClickHouse和Druid版本。 */
  ProductVersion?: string;
  /** 只在CreateCluster为true时生效。true 表示安装kerberos，false表示不安装kerberos。 */
  SecurityClusterFlag?: boolean;
  /** 只在CreateCluster为true时生效。新建集群时，要安装的软件列表。 */
  Software?: string[];
  /** 引导脚本。 */
  BootstrapActions?: BootstrapAction[];
  /** 指定配置创建集群。 */
  Configurations?: Configuration[];
  /** 作业日志保存地址。 */
  LogUri?: string;
  /** 只在CreateCluster为false时生效。 */
  InstanceId?: string;
  /** 自定义应用角色，大数据应用访问外部服务时使用的角色，默认为"EME_QCSRole"。 */
  ApplicationRole?: string;
  /** 重入标签，用来可重入检查，防止在一段时间内，创建相同的流程作业。 */
  ClientToken?: string;
  /** 只在CreateCluster为true时生效，使用该配置创建集群。 */
  Instance?: ClusterSetting;
}

declare interface RunJobFlowResponse {
  /** 作业流程ID。 */
  JobFlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutClusterRequest {
  /** 节点计费模式。取值范围：PREPAID：预付费，即包年包月。POSTPAID_BY_HOUR：按小时后付费。SPOTPAID：竞价付费（仅支持TASK节点）。 */
  InstanceChargeType: string;
  /** 集群实例ID。 */
  InstanceId: string;
  /** 扩容节点类型以及数量 */
  ScaleOutNodeConfig: ScaleOutNodeConfig;
  /** 唯一随机标识，时效5分钟，需要调用者指定 防止客户端重新创建资源，例如 a9a90aa6-****-****-****-fae36063280 */
  ClientToken?: string;
  /** 即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** [引导操作](https://cloud.tencent.com/document/product/589/35656)脚本设置。 */
  ScriptBootstrapActionConfig?: ScriptBootstrapActionConfig[];
  /** 扩容部署服务，新增节点将默认继承当前节点类型中所部署服务，部署服务含默认可选服务，该参数仅支持可选服务填写，如：存量task节点已部署HDFS、YARN、impala；使用api扩容task节不部署impala时，部署服务仅填写HDFS、YARN。[组件名对应的映射关系表](https://cloud.tencent.com/document/product/589/98760)。 */
  SoftDeployInfo?: number[];
  /** 部署进程，默认部署扩容服务的全部进程，支持修改部署进程，如：当前task节点部署服务为：HDFS、YARN、impala，默认部署服务为：DataNode,NodeManager,ImpalaServer，若用户需修改部署进程信息，部署进程：	DataNode,NodeManager,ImpalaServerCoordinator或DataNode,NodeManager,ImpalaServerExecutor。[进程名对应的映射关系表](https://cloud.tencent.com/document/product/589/98760)。 */
  ServiceNodeInfo?: number[];
  /** 分散置放群组ID列表，当前只支持指定一个。该参数可以通过调用 [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/product/213/17810)的返回值中的DisasterRecoverGroupId字段来获取。 */
  DisasterRecoverGroupIds?: string[];
  /** 扩容节点绑定标签列表。 */
  Tags?: Tag[];
  /** 扩容所选资源类型，可选范围为"HOST","POD","MNode"，HOST为普通的CVM资源，POD为TKE集群或EKS集群提供的资源,MNode为全托管资源类型 */
  HardwareSourceType?: string;
  /** Pod相关资源信息 */
  PodSpecInfo?: PodSpecInfo;
  /** 使用clickhouse集群扩容时，选择的机器分组名称 */
  ClickHouseClusterName?: string;
  /** 使用clickhouse集群扩容时，选择的机器分组类型。new为新增，old为选择旧分组 */
  ClickHouseClusterType?: string;
  /** 扩容指定 Yarn Node Label */
  YarnNodeLabel?: string;
  /** 扩容后是否启动服务，默认取值否true：是false：否 */
  EnableStartServiceFlag?: boolean;
  /** 规格设置 */
  ResourceSpec?: NodeResourceSpec;
  /** 实例所属的可用区，例如ap-guangzhou-1。该参数也可以通过调用[DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。 */
  Zone?: string;
  /** 子网，默认是集群创建时的子网 */
  SubnetId?: string;
  /** 扩容指定配置组 */
  ScaleOutServiceConfGroupsInfo?: ScaleOutServiceConfGroupsInfo[];
  /** 节点标记信息，当前只提供给tf平台使用 */
  NodeMarks?: NodeMark;
}

declare interface ScaleOutClusterResponse {
  /** 实例ID。 */
  InstanceId?: string;
  /** 客户端Token。 */
  ClientToken?: string;
  /** 扩容流程ID。 */
  FlowId?: number;
  /** 查询流程状态，流程额外信息 */
  TraceId?: string;
  /** 订单号。 */
  DealNames?: string[] | null;
  /** 大订单号。 */
  BillId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutInstanceRequest {
  /** 扩容的时间单位。取值范围：s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。 */
  TimeUnit: string;
  /** 扩容的时长。结合TimeUnit一起使用。TimeUnit为s时，该参数只能填写3600，表示按量计费实例。TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月 */
  TimeSpan: number;
  /** 实例ID。 */
  InstanceId: string;
  /** 实例计费模式。取值范围：0：表示按量计费。1：表示包年包月。 */
  PayMode: number;
  /** 唯一随机标识，时效5分钟，需要调用者指定 防止客户端重新创建资源，例如 a9a90aa6-****-****-****-fae36063280 */
  ClientToken?: string;
  /** 引导操作脚本设置。 */
  PreExecutedFileSettings?: PreExecuteFileSettings[];
  /** 扩容的Task节点数量。 */
  TaskCount?: number;
  /** 扩容的Core节点数量。 */
  CoreCount?: number;
  /** 扩容时不需要安装的进程。 */
  UnNecessaryNodeList?: number[];
  /** 扩容的Router节点数量。 */
  RouterCount?: number;
  /** 部署的服务。SoftDeployInfo和ServiceNodeInfo是同组参数，和UnNecessaryNodeList参数互斥。建议使用SoftDeployInfo和ServiceNodeInfo组合。 */
  SoftDeployInfo?: number[];
  /** 启动的进程。 */
  ServiceNodeInfo?: number[];
  /** 分散置放群组ID列表，当前仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[];
  /** 扩容节点绑定标签列表。 */
  Tags?: Tag[];
  /** 扩容所选资源类型，可选范围为"HOST","POD","MNode"，HOST为普通的CVM资源，POD为TKE集群或EKS集群提供的资源,MNode为全托管资源类型 */
  HardwareResourceType?: string;
  /** 使用Pod资源扩容时，指定的Pod规格以及来源等信息 */
  PodSpec?: PodSpec;
  /** 使用clickhouse集群扩容时，选择的机器分组名称 */
  ClickHouseClusterName?: string;
  /** 使用clickhouse集群扩容时，选择的机器分组类型。new为新增，old为选择旧分组 */
  ClickHouseClusterType?: string;
  /** 规则扩容指定 yarn node label */
  YarnNodeLabel?: string;
  /** POD自定义权限和自定义参数 */
  PodParameter?: PodParameter;
  /** 扩容的Master节点的数量。使用clickhouse集群扩容时，该参数不生效。使用kafka集群扩容时，该参数不生效。当HardwareResourceType=POD时，该参数不生效。 */
  MasterCount?: number;
  /** 扩容后是否启动服务，true：启动，false：不启动 */
  StartServiceAfterScaleOut?: string;
  /** 可用区，默认是集群的主可用区 */
  ZoneId?: number;
  /** 子网，默认是集群创建时的子网 */
  SubnetId?: string;
  /** 预设配置组 */
  ScaleOutServiceConfAssign?: string;
  /** 0表示关闭自动续费，1表示开启自动续费 */
  AutoRenew?: number;
  /** 类型为ComputeResource和EMR以及默认，默认为EMR,类型为EMR时,InstanceId生效,类型为ComputeResource时,使用ComputeResourceId标识 */
  ResourceBaseType?: string;
  /** 计算资源id */
  ComputeResourceId?: string;
  /** 计算资源高级设置 */
  ComputeResourceAdvanceParams?: ComputeResourceAdvanceParams;
  /** 节点标记信息，目前只提供tf平台使用 */
  NodeMarks?: NodeMark;
}

declare interface ScaleOutInstanceResponse {
  /** 实例ID。 */
  InstanceId?: string;
  /** 订单号。 */
  DealNames?: string[] | null;
  /** 客户端Token。 */
  ClientToken?: string;
  /** 扩容流程ID。 */
  FlowId?: number;
  /** 大订单号。 */
  BillId?: string;
  /** 扩容TraceId */
  TraceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetNodeResourceConfigDefaultRequest {
  /** 集群实例Id */
  InstanceId: string;
  /** 配置Id */
  ResourceConfigId: number;
  /** 规格节点类型 CORE TASK ROUTER */
  ResourceType?: string;
  /** 类型为ComputeResource和EMR以及默认，默认为EMR */
  ResourceBaseType?: string;
  /** 计算资源id */
  ComputeResourceId?: string;
  /** 硬件类型 */
  HardwareResourceType?: string;
}

declare interface SetNodeResourceConfigDefaultResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartStopServiceOrMonitorRequest {
  /** 集群ID */
  InstanceId: string;
  /** 操作类型，当前支持StartService：启动服务StopService：停止服务StartMonitor：退出维护StopMonitor：进入维护RestartService：重启服务 如果操作类型选择重启服务 StrategyConfig操作策略则是必填项 */
  OpType: string;
  /** 操作范围 */
  OpScope: OpScope;
  /** 操作策略 */
  StrategyConfig?: StrategyConfig;
  /** 暂停服务时用的参数 */
  StopParams?: StopParams;
  /** 当OpType为StopMonitor才有用，true表示进入维护模式但是仍然监控进程但是不拉起进程 */
  KeepMonitorButNotRecoverProcess?: boolean;
}

declare interface StartStopServiceOrMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncPodStateRequest {
  /** EmrService中pod状态信息 */
  Message: PodState;
}

declare interface SyncPodStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateClusterNodesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 销毁资源列表 */
  CvmInstanceIds: string[];
  /** 销毁节点类型取值范围： MASTER TASK CORE ROUTER */
  NodeFlag: string;
  /** 优雅缩容开关 true:开启 false:不开启 */
  GraceDownFlag?: boolean;
  /** 优雅缩容等待时间,时间范围60到1800 单位秒 */
  GraceDownTime?: number;
}

declare interface TerminateClusterNodesResponse {
  /** 缩容流程ID。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateInstanceRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 销毁节点ID。该参数为预留参数，用户无需配置。 */
  ResourceIds?: string[];
  /** 类型为ComputeResource和EMR以及默认，默认为EMR,类型为EMR时,InstanceId生效,类型为ComputeResource时,使用ComputeResourceId标识 */
  ResourceBaseType?: string;
  /** 计算资源ID */
  ComputeResourceId?: string;
}

declare interface TerminateInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateSLInstanceRequest {
  /** 实例唯一标识符（字符串表示） */
  InstanceId: string;
}

declare interface TerminateSLInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateTasksRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 待销毁节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr)查询。 */
  ResourceIds: string[];
}

declare interface TerminateTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Emr 弹性 MapReduce} */
declare interface Emr {
  (): Versions;
  /** 新增自动扩缩容规则 {@link AddMetricScaleStrategyRequest} {@link AddMetricScaleStrategyResponse} */
  AddMetricScaleStrategy(data: AddMetricScaleStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<AddMetricScaleStrategyResponse>;
  /** 增加节点规格配置 {@link AddNodeResourceConfigRequest} {@link AddNodeResourceConfigResponse} */
  AddNodeResourceConfig(data: AddNodeResourceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<AddNodeResourceConfigResponse>;
  /** 新增用户列表 {@link AddUsersForUserManagerRequest} {@link AddUsersForUserManagerResponse} */
  AddUsersForUserManager(data: AddUsersForUserManagerRequest, config?: AxiosRequestConfig): AxiosPromise<AddUsersForUserManagerResponse>;
  /** 云盘挂载 {@link AttachDisksRequest} {@link AttachDisksResponse} */
  AttachDisks(data: AttachDisksRequest, config?: AxiosRequestConfig): AxiosPromise<AttachDisksResponse>;
  /** 包月转按量集群 {@link ConvertPreToPostClusterRequest} {@link ConvertPreToPostClusterResponse} */
  ConvertPreToPostCluster(data: ConvertPreToPostClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ConvertPreToPostClusterResponse>;
  /** 创建EMR容器集群实例 {@link CreateCloudInstanceRequest} {@link CreateCloudInstanceResponse} */
  CreateCloudInstance(data: CreateCloudInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudInstanceResponse>;
  /** 创建EMR集群实例(新) {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 用户管理-批量创建用户组 {@link CreateGroupsSTDRequest} {@link CreateGroupsSTDResponse} */
  CreateGroupsSTD(data: CreateGroupsSTDRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupsSTDResponse>;
  /** 创建EMR实例(旧) {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** Serverless HBase创建实例 {@link CreateSLInstanceRequest} {@link CreateSLInstanceResponse} */
  CreateSLInstance(data: CreateSLInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSLInstanceResponse>;
  /** 删除自动扩缩容规则 {@link DeleteAutoScaleStrategyRequest} {@link DeleteAutoScaleStrategyResponse} */
  DeleteAutoScaleStrategy(data: DeleteAutoScaleStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAutoScaleStrategyResponse>;
  /** 用户管理-批量删除用户组 {@link DeleteGroupsSTDRequest} {@link DeleteGroupsSTDResponse} */
  DeleteGroupsSTD(data: DeleteGroupsSTDRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupsSTDResponse>;
  /** 删除节点规格配置 {@link DeleteNodeResourceConfigRequest} {@link DeleteNodeResourceConfigResponse} */
  DeleteNodeResourceConfig(data: DeleteNodeResourceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNodeResourceConfigResponse>;
  /** 删除用户列表 {@link DeleteUserManagerUserListRequest} {@link DeleteUserManagerUserListResponse} */
  DeleteUserManagerUserList(data: DeleteUserManagerUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserManagerUserListResponse>;
  /** yarn资源调度-部署生效 {@link DeployYarnConfRequest} {@link DeployYarnConfResponse} */
  DeployYarnConf(data: DeployYarnConfRequest, config?: AxiosRequestConfig): AxiosPromise<DeployYarnConfResponse>;
  /** 获取伸缩组全局配置 {@link DescribeAutoScaleGroupGlobalConfRequest} {@link DescribeAutoScaleGroupGlobalConfResponse} */
  DescribeAutoScaleGroupGlobalConf(data: DescribeAutoScaleGroupGlobalConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScaleGroupGlobalConfResponse>;
  /** 获取自动扩缩容记录 {@link DescribeAutoScaleRecordsRequest} {@link DescribeAutoScaleRecordsResponse} */
  DescribeAutoScaleRecords(data: DescribeAutoScaleRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScaleRecordsResponse>;
  /** 获取自动扩缩容规则 {@link DescribeAutoScaleStrategiesRequest} {@link DescribeAutoScaleStrategiesResponse} */
  DescribeAutoScaleStrategies(data: DescribeAutoScaleStrategiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScaleStrategiesResponse>;
  /** 查询EMR集群任务运行详情状态 {@link DescribeClusterFlowStatusDetailRequest} {@link DescribeClusterFlowStatusDetailResponse} */
  DescribeClusterFlowStatusDetail(data: DescribeClusterFlowStatusDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterFlowStatusDetailResponse>;
  /** 查询集群节点信息 {@link DescribeClusterNodesRequest} {@link DescribeClusterNodesResponse} */
  DescribeClusterNodes(data: DescribeClusterNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNodesResponse>;
  /** 查询账户的CVM配额 {@link DescribeCvmQuotaRequest} {@link DescribeCvmQuotaResponse} */
  DescribeCvmQuota(data: DescribeCvmQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCvmQuotaResponse>;
  /** 查询DAG信息 {@link DescribeDAGInfoRequest} {@link DescribeDAGInfoResponse} */
  DescribeDAGInfo(data: DescribeDAGInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDAGInfoResponse>;
  /** 查询YARN的任务统计信息 {@link DescribeEmrApplicationStaticsRequest} {@link DescribeEmrApplicationStaticsResponse} */
  DescribeEmrApplicationStatics(data: DescribeEmrApplicationStaticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmrApplicationStaticsResponse>;
  /** 查询监控概览页指标数据 {@link DescribeEmrOverviewMetricsRequest} {@link DescribeEmrOverviewMetricsResponse} */
  DescribeEmrOverviewMetrics(data: DescribeEmrOverviewMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmrOverviewMetricsResponse>;
  /** 查询YARN资源调度的全局配置 {@link DescribeGlobalConfigRequest} {@link DescribeGlobalConfigResponse} */
  DescribeGlobalConfig(data: DescribeGlobalConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGlobalConfigResponse>;
  /** 用户管理-查询用户组 {@link DescribeGroupsSTDRequest} {@link DescribeGroupsSTDResponse} */
  DescribeGroupsSTD(data: DescribeGroupsSTDRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupsSTDResponse>;
  /** 获取Hbase表级监控数据概览 {@link DescribeHBaseTableOverviewRequest} {@link DescribeHBaseTableOverviewResponse} */
  DescribeHBaseTableOverview(data: DescribeHBaseTableOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHBaseTableOverviewResponse>;
  /** 查询HDFS存储文件数量 {@link DescribeHDFSStorageInfoRequest} {@link DescribeHDFSStorageInfoResponse} */
  DescribeHDFSStorageInfo(data: DescribeHDFSStorageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHDFSStorageInfoResponse>;
  /** 获取hive查询信息 {@link DescribeHiveQueriesRequest} {@link DescribeHiveQueriesResponse} */
  DescribeHiveQueries(data: DescribeHiveQueriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHiveQueriesResponse>;
  /** 获取Impala查询列表 {@link DescribeImpalaQueriesRequest} {@link DescribeImpalaQueriesResponse} */
  DescribeImpalaQueries(data: DescribeImpalaQueriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImpalaQueriesResponse>;
  /** 获取洞察结果 {@link DescribeInsightListRequest} {@link DescribeInsightListResponse} */
  DescribeInsightList(data: DescribeInsightListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInsightListResponse>;
  /** 获取巡检任务结果列表 {@link DescribeInspectionTaskResultRequest} {@link DescribeInspectionTaskResultResponse} */
  DescribeInspectionTaskResult(data: DescribeInspectionTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInspectionTaskResultResponse>;
  /** 查询待续费节点信息 {@link DescribeInstanceRenewNodesRequest} {@link DescribeInstanceRenewNodesResponse} */
  DescribeInstanceRenewNodes(data: DescribeInstanceRenewNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceRenewNodesResponse>;
  /** 查询集群实例信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询集群列表 {@link DescribeInstancesListRequest} {@link DescribeInstancesListResponse} */
  DescribeInstancesList(data: DescribeInstancesListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesListResponse>;
  /** 查询流程作业状态 {@link DescribeJobFlowRequest} {@link DescribeJobFlowResponse} */
  DescribeJobFlow(data: DescribeJobFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobFlowResponse>;
  /** 查询Kyuubi查询信息 {@link DescribeKyuubiQueryInfoRequest} {@link DescribeKyuubiQueryInfoResponse} */
  DescribeKyuubiQueryInfo(data: DescribeKyuubiQueryInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKyuubiQueryInfoResponse>;
  /** 查询节点数据盘信息 {@link DescribeNodeDataDisksRequest} {@link DescribeNodeDataDisksResponse} */
  DescribeNodeDataDisks(data: DescribeNodeDataDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeDataDisksResponse>;
  /** 快速获取节点规格配置 {@link DescribeNodeResourceConfigFastRequest} {@link DescribeNodeResourceConfigFastResponse} */
  DescribeNodeResourceConfigFast(data: DescribeNodeResourceConfigFastRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeResourceConfigFastResponse>;
  /** 查询节点规格 {@link DescribeNodeSpecRequest} {@link DescribeNodeSpecResponse} */
  DescribeNodeSpec(data: DescribeNodeSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeSpecResponse>;
  /** 查询YARN资源调度数据信息（旧） {@link DescribeResourceScheduleRequest} {@link DescribeResourceScheduleResponse} */
  DescribeResourceSchedule(data: DescribeResourceScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceScheduleResponse>;
  /** YARN资源调度-变更详情 {@link DescribeResourceScheduleDiffDetailRequest} {@link DescribeResourceScheduleDiffDetailResponse} */
  DescribeResourceScheduleDiffDetail(data: DescribeResourceScheduleDiffDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceScheduleDiffDetailResponse>;
  /** Serverless HBase查询实例信息 {@link DescribeSLInstanceRequest} {@link DescribeSLInstanceResponse} */
  DescribeSLInstance(data: DescribeSLInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSLInstanceResponse>;
  /** Serverless HBase查询实例列表 {@link DescribeSLInstanceListRequest} {@link DescribeSLInstanceListResponse} */
  DescribeSLInstanceList(data: DescribeSLInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSLInstanceListResponse>;
  /** 描述服务配置组信息 {@link DescribeServiceConfGroupInfosRequest} {@link DescribeServiceConfGroupInfosResponse} */
  DescribeServiceConfGroupInfos(data: DescribeServiceConfGroupInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceConfGroupInfosResponse>;
  /** 查询服务进程信息 {@link DescribeServiceNodeInfosRequest} {@link DescribeServiceNodeInfosResponse} */
  DescribeServiceNodeInfos(data: DescribeServiceNodeInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceNodeInfosResponse>;
  /** 获取Spark任务列表 {@link DescribeSparkApplicationsRequest} {@link DescribeSparkApplicationsResponse} */
  DescribeSparkApplications(data: DescribeSparkApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkApplicationsResponse>;
  /** 查询Spark查询列表 {@link DescribeSparkQueriesRequest} {@link DescribeSparkQueriesResponse} */
  DescribeSparkQueries(data: DescribeSparkQueriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkQueriesResponse>;
  /** 查询StarRocks查询信息 {@link DescribeStarRocksQueryInfoRequest} {@link DescribeStarRocksQueryInfoResponse} */
  DescribeStarRocksQueryInfo(data: DescribeStarRocksQueryInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStarRocksQueryInfoResponse>;
  /** 查询Trino(PrestoSQL)查询信息 {@link DescribeTrinoQueryInfoRequest} {@link DescribeTrinoQueryInfoResponse} */
  DescribeTrinoQueryInfo(data: DescribeTrinoQueryInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrinoQueryInfoResponse>;
  /** 查询用户列表 {@link DescribeUsersForUserManagerRequest} {@link DescribeUsersForUserManagerResponse} */
  DescribeUsersForUserManager(data: DescribeUsersForUserManagerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersForUserManagerResponse>;
  /** 获取Yarn的任务信息 {@link DescribeYarnApplicationsRequest} {@link DescribeYarnApplicationsResponse} */
  DescribeYarnApplications(data: DescribeYarnApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeYarnApplicationsResponse>;
  /** 获取资源调度中的队列信息 {@link DescribeYarnQueueRequest} {@link DescribeYarnQueueResponse} */
  DescribeYarnQueue(data: DescribeYarnQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeYarnQueueResponse>;
  /** yarn资源调度-调度历史（旧） {@link DescribeYarnScheduleHistoryRequest} {@link DescribeYarnScheduleHistoryResponse} */
  DescribeYarnScheduleHistory(data: DescribeYarnScheduleHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeYarnScheduleHistoryResponse>;
  /** 集群续费询价 {@link InquirePriceRenewEmrRequest} {@link InquirePriceRenewEmrResponse} */
  InquirePriceRenewEmr(data: InquirePriceRenewEmrRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRenewEmrResponse>;
  /** 创建实例询价 {@link InquiryPriceCreateInstanceRequest} {@link InquiryPriceCreateInstanceResponse} */
  InquiryPriceCreateInstance(data: InquiryPriceCreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateInstanceResponse>;
  /** 续费询价 {@link InquiryPriceRenewInstanceRequest} {@link InquiryPriceRenewInstanceResponse} */
  InquiryPriceRenewInstance(data: InquiryPriceRenewInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewInstanceResponse>;
  /** 扩容询价 {@link InquiryPriceScaleOutInstanceRequest} {@link InquiryPriceScaleOutInstanceResponse} */
  InquiryPriceScaleOutInstance(data: InquiryPriceScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceScaleOutInstanceResponse>;
  /** 变配询价 {@link InquiryPriceUpdateInstanceRequest} {@link InquiryPriceUpdateInstanceResponse} */
  InquiryPriceUpdateInstance(data: InquiryPriceUpdateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceUpdateInstanceResponse>;
  /** 开启关闭自动续费接口 {@link ModifyAutoRenewFlagRequest} {@link ModifyAutoRenewFlagResponse} */
  ModifyAutoRenewFlag(data: ModifyAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoRenewFlagResponse>;
  /** 修改自动扩缩容规则 {@link ModifyAutoScaleStrategyRequest} {@link ModifyAutoScaleStrategyResponse} */
  ModifyAutoScaleStrategy(data: ModifyAutoScaleStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoScaleStrategyResponse>;
  /** 修改YARN资源调度的全局配置 {@link ModifyGlobalConfigRequest} {@link ModifyGlobalConfigResponse} */
  ModifyGlobalConfig(data: ModifyGlobalConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGlobalConfigResponse>;
  /** 设置巡检任务配置 {@link ModifyInspectionSettingsRequest} {@link ModifyInspectionSettingsResponse} */
  ModifyInspectionSettings(data: ModifyInspectionSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInspectionSettingsResponse>;
  /** 修改集群名称 {@link ModifyInstanceBasicRequest} {@link ModifyInstanceBasicResponse} */
  ModifyInstanceBasic(data: ModifyInstanceBasicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceBasicResponse>;
  /** 调整Pod数量 {@link ModifyPodNumRequest} {@link ModifyPodNumResponse} */
  ModifyPodNum(data: ModifyPodNumRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPodNumResponse>;
  /** 变配实例 {@link ModifyResourceRequest} {@link ModifyResourceResponse} */
  ModifyResource(data: ModifyResourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceResponse>;
  /** @deprecated 刷新YARN的动态资源池（旧） {@link ModifyResourcePoolsRequest} {@link ModifyResourcePoolsResponse} */
  ModifyResourcePools(data: ModifyResourcePoolsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourcePoolsResponse>;
  /** @deprecated 修改YARN资源调度的资源配置（旧） {@link ModifyResourceScheduleConfigRequest} {@link ModifyResourceScheduleConfigResponse} */
  ModifyResourceScheduleConfig(data: ModifyResourceScheduleConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceScheduleConfigResponse>;
  /** 修改YARN的资源调度器（旧） {@link ModifyResourceSchedulerRequest} {@link ModifyResourceSchedulerResponse} */
  ModifyResourceScheduler(data: ModifyResourceSchedulerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceSchedulerResponse>;
  /** 强制修改标签 {@link ModifyResourcesTagsRequest} {@link ModifyResourcesTagsResponse} */
  ModifyResourcesTags(data: ModifyResourcesTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourcesTagsResponse>;
  /** Serverless HBase变配实例 {@link ModifySLInstanceRequest} {@link ModifySLInstanceResponse} */
  ModifySLInstance(data: ModifySLInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySLInstanceResponse>;
  /** Serverless HBase修改实例名称 {@link ModifySLInstanceBasicRequest} {@link ModifySLInstanceBasicResponse} */
  ModifySLInstanceBasic(data: ModifySLInstanceBasicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySLInstanceBasicResponse>;
  /** 用户管理-修改用户组 {@link ModifyUserGroupRequest} {@link ModifyUserGroupResponse} */
  ModifyUserGroup(data: ModifyUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserGroupResponse>;
  /** 修改用户密码（用户管理） {@link ModifyUserManagerPwdRequest} {@link ModifyUserManagerPwdResponse} */
  ModifyUserManagerPwd(data: ModifyUserManagerPwdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserManagerPwdResponse>;
  /** 用户管理-变更用户组用户信息 {@link ModifyUsersOfGroupSTDRequest} {@link ModifyUsersOfGroupSTDResponse} */
  ModifyUsersOfGroupSTD(data: ModifyUsersOfGroupSTDRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUsersOfGroupSTDResponse>;
  /** @deprecated 部署生效（旧） {@link ModifyYarnDeployRequest} {@link ModifyYarnDeployResponse} */
  ModifyYarnDeploy(data: ModifyYarnDeployRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyYarnDeployResponse>;
  /** 修改yarn资源调度的队列信息 {@link ModifyYarnQueueV2Request} {@link ModifyYarnQueueV2Response} */
  ModifyYarnQueueV2(data: ModifyYarnQueueV2Request, config?: AxiosRequestConfig): AxiosPromise<ModifyYarnQueueV2Response>;
  /** yarn资源调度-重置 {@link ResetYarnConfigRequest} {@link ResetYarnConfigResponse} */
  ResetYarnConfig(data: ResetYarnConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ResetYarnConfigResponse>;
  /** 云数据盘扩容 {@link ResizeDataDisksRequest} {@link ResizeDataDisksResponse} */
  ResizeDataDisks(data: ResizeDataDisksRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeDataDisksResponse>;
  /** 创建流程作业 {@link RunJobFlowRequest} {@link RunJobFlowResponse} */
  RunJobFlow(data: RunJobFlowRequest, config?: AxiosRequestConfig): AxiosPromise<RunJobFlowResponse>;
  /** 扩容集群节点(新) {@link ScaleOutClusterRequest} {@link ScaleOutClusterResponse} */
  ScaleOutCluster(data: ScaleOutClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutClusterResponse>;
  /** 实例扩容(旧) {@link ScaleOutInstanceRequest} {@link ScaleOutInstanceResponse} */
  ScaleOutInstance(data: ScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstanceResponse>;
  /** 设置节点规格配置默认属性 {@link SetNodeResourceConfigDefaultRequest} {@link SetNodeResourceConfigDefaultResponse} */
  SetNodeResourceConfigDefault(data: SetNodeResourceConfigDefaultRequest, config?: AxiosRequestConfig): AxiosPromise<SetNodeResourceConfigDefaultResponse>;
  /** 执行服务操作 {@link StartStopServiceOrMonitorRequest} {@link StartStopServiceOrMonitorResponse} */
  StartStopServiceOrMonitor(data: StartStopServiceOrMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<StartStopServiceOrMonitorResponse>;
  /** EMR同步POD状态 {@link SyncPodStateRequest} {@link SyncPodStateResponse} */
  SyncPodState(data: SyncPodStateRequest, config?: AxiosRequestConfig): AxiosPromise<SyncPodStateResponse>;
  /** 销毁集群节点(新) {@link TerminateClusterNodesRequest} {@link TerminateClusterNodesResponse} */
  TerminateClusterNodes(data: TerminateClusterNodesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateClusterNodesResponse>;
  /** 销毁EMR实例 {@link TerminateInstanceRequest} {@link TerminateInstanceResponse} */
  TerminateInstance(data: TerminateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstanceResponse>;
  /** Serverless HBase销毁实例 {@link TerminateSLInstanceRequest} {@link TerminateSLInstanceResponse} */
  TerminateSLInstance(data: TerminateSLInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateSLInstanceResponse>;
  /** 缩容Task节点(旧) {@link TerminateTasksRequest} {@link TerminateTasksResponse} */
  TerminateTasks(data: TerminateTasksRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateTasksResponse>;
}

export declare type Versions = ["2019-01-03"];

export default Emr;
