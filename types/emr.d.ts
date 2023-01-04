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
  MasterCount?: number | null;
  /** Corer节点数量 */
  CoreCount?: number | null;
  /** Task节点数量 */
  TaskCount?: number | null;
  /** Common节点数量 */
  CommonCount?: number | null;
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

/** 引导脚本 */
declare interface BootstrapAction {
  /** 脚本位置，支持cos上的文件，且只支持https协议。 */
  Path: string;
  /** 执行时间。resourceAfter 表示在机器资源申请成功后执行。clusterBefore 表示在集群初始化前执行。clusterAfter 表示在集群初始化后执行。 */
  WhenRun: string;
  /** 脚本参数 */
  Args?: string[];
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

/** 出参 */
declare interface CdbInfo {
  /** 数据库实例 */
  InstanceName: string | null;
  /** 数据库IP */
  Ip: string | null;
  /** 数据库端口 */
  Port: number | null;
  /** 数据库内存规格 */
  MemSize: number | null;
  /** 数据库磁盘规格 */
  Volume: number | null;
  /** 服务标识 */
  Service: string | null;
  /** 过期时间 */
  ExpireTime: string | null;
  /** 申请时间 */
  ApplyTime: string | null;
  /** 付费类型 */
  PayType: number | null;
  /** 过期标识 */
  ExpireFlag: boolean | null;
  /** 数据库状态 */
  Status: number | null;
  /** 续费标识 */
  IsAutoRenew: number | null;
  /** 数据库字符串 */
  SerialNo: string | null;
  /** ZoneId */
  ZoneId: number | null;
  /** RegionId */
  RegionId: number | null;
}

/** 当前集群共用组件与集群对应关系 */
declare interface ClusterExternalServiceInfo {
  /** 依赖关系，0:被其他集群依赖，1:依赖其他集群 */
  DependType: number | null;
  /** 共用组件 */
  Service: string | null;
  /** 共用集群 */
  ClusterId: string | null;
  /** 共用集群状态 */
  ClusterStatus: number | null;
}

/** 集群实例信息 */
declare interface ClusterInstancesInfo {
  /** ID号 */
  Id: number | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 标题 */
  Ftitle: string | null;
  /** 集群名 */
  ClusterName: string | null;
  /** 地域ID */
  RegionId: number | null;
  /** 地区ID */
  ZoneId: number | null;
  /** 用户APPID */
  AppId: number | null;
  /** 用户UIN */
  Uin: string | null;
  /** 项目Id */
  ProjectId: number | null;
  /** 集群VPCID */
  VpcId: number | null;
  /** 子网ID */
  SubnetId: number | null;
  /** 实例的状态码。取值范围：2：表示集群运行中。3：表示集群创建中。4：表示集群扩容中。5：表示集群增加router节点中。6：表示集群安装组件中。7：表示集群执行命令中。8：表示重启服务中。9：表示进入维护中。10：表示服务暂停中。11：表示退出维护中。12：表示退出暂停中。13：表示配置下发中。14：表示销毁集群中。15：表示销毁core节点中。16：销毁task节点中。17：表示销毁router节点中。18：表示更改webproxy密码中。19：表示集群隔离中。20：表示集群冲正中。21：表示集群回收中。22：表示变配等待中。23：表示集群已隔离。24：表示缩容节点中。33：表示集群等待退费中。34：表示集群已退费。301：表示创建失败。302：表示扩容失败。 */
  Status: number | null;
  /** 添加时间 */
  AddTime: string | null;
  /** 已经运行时间 */
  RunTime: string | null;
  /** 集群产品配置信息 */
  Config: EmrProductConfigOutter | null;
  /** 主节点外网IP */
  MasterIp: string | null;
  /** EMR版本 */
  EmrVersion: string | null;
  /** 收费类型 */
  ChargeType: number | null;
  /** 交易版本 */
  TradeVersion: number | null;
  /** 资源订单ID */
  ResourceOrderId: number | null;
  /** 是否计费集群 */
  IsTradeCluster: number | null;
  /** 集群错误状态告警信息 */
  AlarmInfo: string | null;
  /** 是否采用新架构 */
  IsWoodpeckerCluster: number | null;
  /** 元数据库信息 */
  MetaDb: string | null;
  /** 标签信息 */
  Tags: Tag[] | null;
  /** Hive元数据信息 */
  HiveMetaDb: string | null;
  /** 集群类型:EMR,CLICKHOUSE,DRUID */
  ServiceClass: string | null;
  /** 集群所有节点的别名序列化 */
  AliasInfo: string | null;
  /** 集群版本Id */
  ProductId: number | null;
  /** 地区ID */
  Zone: string | null;
  /** 场景名称 */
  SceneName: string | null;
  /** 场景化集群类型 */
  SceneServiceClass: string | null;
  /** 场景化EMR版本 */
  SceneEmrVersion: string | null;
  /** 场景化集群类型 */
  DisplayName: string | null;
  /** vpc name */
  VpcName: string | null;
  /** subnet name */
  SubnetName: string | null;
  /** 集群依赖关系 */
  ClusterExternalServiceInfo: ClusterExternalServiceInfo[] | null;
  /** 集群vpcid 字符串类型 */
  UniqVpcId: string | null;
  /** 子网id 字符串类型 */
  UniqSubnetId: string | null;
  /** 节点信息 */
  TopologyInfoList: TopologyInfo[] | null;
  /** 是否是跨AZ集群 */
  IsMultiZoneCluster: boolean | null;
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

/** 自定义配置参数 */
declare interface Configuration {
  /** 配置文件名，支持SPARK、HIVE、HDFS、YARN的部分配置文件自定义。 */
  Classification: string;
  /** 配置参数通过KV的形式传入，部分文件支持自定义，可以通过特殊的键"content"传入所有内容。 */
  Properties: string;
}

/** 用户Hive-MetaDB信息 */
declare interface CustomMetaDBInfo {
  /** 自定义MetaDB的JDBC连接，示例: jdbc:mysql://10.10.10.10:3306/dbname */
  MetaDataJdbcUrl?: string;
  /** 自定义MetaDB用户名 */
  MetaDataUser?: string;
  /** 自定义MetaDB密码 */
  MetaDataPass?: string;
  /** hive共享元数据库类型。取值范围：EMR_NEW_META：表示集群默认创建EMR_EXIT_META：表示集群使用指定EMR-MetaDB。USER_CUSTOM_META：表示集群使用自定义MetaDB。 */
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

/** 共用组件信息 */
declare interface DependService {
  /** 共用组件名 */
  ServiceName: string;
  /** 共用组件集群 */
  InstanceId: string;
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
  Count: number | null;
  /** 系统盘类型 取值范围：CLOUD_SSD：表示云SSD。CLOUD_PREMIUM：表示高效云盘。CLOUD_BASIC：表示云硬盘。LOCAL_BASIC：表示本地盘。LOCAL_SSD：表示本地SSD。数据盘类型 取值范围：CLOUD_SSD：表示云SSD。CLOUD_PREMIUM：表示高效云盘。CLOUD_BASIC：表示云硬盘。LOCAL_BASIC：表示本地盘。LOCAL_SSD：表示本地SSD。CLOUD_HSSD：表示增强型SSD云硬盘。CLOUD_THROUGHPUT：表示吞吐型云硬盘。CLOUD_TSSD：表示极速型SSD云硬盘。 */
  DiskType: string | null;
  /** 数据容量，单位为GB */
  DiskSize: number | null;
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
  ClusterId: string;
  /** 状态描述 */
  StatusDesc: string | null;
  /** 集群名字 */
  ClusterName: string;
  /** 集群地域 */
  ZoneId: number;
  /** 用户APPID */
  AppId: number;
  /** 创建时间 */
  AddTime: string;
  /** 运行时间 */
  RunTime: string;
  /** 集群IP */
  MasterIp: string;
  /** 集群版本 */
  EmrVersion: string;
  /** 集群计费类型 */
  ChargeType: number;
  /** emr ID */
  Id: number;
  /** 产品ID */
  ProductId: number | null;
  /** 项目ID */
  ProjectId: number | null;
  /** 区域 */
  RegionId: number | null;
  /** 子网ID */
  SubnetId: number | null;
  /** 网络ID */
  VpcId: number | null;
  /** 地区 */
  Zone: string | null;
  /** 状态码 */
  Status: number | null;
  /** 实例标签 */
  Tags: Tag[] | null;
  /** 告警信息 */
  AlarmInfo: string | null;
  /** 是否是woodpecker集群 */
  IsWoodpeckerCluster: number | null;
  /** Vpc中文 */
  VpcName: string | null;
  /** 子网中文 */
  SubnetName: string | null;
  /** 字符串VpcId */
  UniqVpcId: string | null;
  /** 字符串子网 */
  UniqSubnetId: string | null;
  /** 集群类型 */
  ClusterClass: string | null;
  /** 是否为跨AZ集群 */
  IsMultiZoneCluster: boolean | null;
  /** 是否手戳集群 */
  IsHandsCluster: boolean | null;
  /** 体外客户端组件信息 */
  OutSideSoftInfo: SoftDependInfo[] | null;
}

/** Emr询价描述 */
declare interface EmrPrice {
  /** 刊例价格 */
  OriginalCost: string | null;
  /** 折扣价格 */
  DiscountCost: string | null;
  /** 单位 */
  Unit: string | null;
  /** 询价配置 */
  PriceSpec: PriceResource | null;
  /** 是否支持竞价实例 */
  SupportSpotPaid: boolean | null;
}

/** EMR产品配置 */
declare interface EmrProductConfigOutter {
  /** 软件信息 */
  SoftInfo: string[] | null;
  /** Master节点个数 */
  MasterNodeSize: number | null;
  /** Core节点个数 */
  CoreNodeSize: number | null;
  /** Task节点个数 */
  TaskNodeSize: number | null;
  /** Common节点个数 */
  ComNodeSize: number | null;
  /** Master节点资源 */
  MasterResource: OutterResource | null;
  /** Core节点资源 */
  CoreResource: OutterResource | null;
  /** Task节点资源 */
  TaskResource: OutterResource | null;
  /** Common节点资源 */
  ComResource: OutterResource | null;
  /** 是否使用COS */
  OnCos: boolean | null;
  /** 收费类型 */
  ChargeType: number | null;
  /** Router节点个数 */
  RouterNodeSize: number | null;
  /** 是否支持HA */
  SupportHA: boolean | null;
  /** 是否支持安全模式 */
  SecurityOn: boolean | null;
  /** 安全组名称 */
  SecurityGroup: string | null;
  /** 是否开启Cbs加密 */
  CbsEncrypt: number | null;
  /** 自定义应用角色。 */
  ApplicationRole: string | null;
  /** 安全组 */
  SecurityGroups: string[] | null;
  /** SSH密钥Id */
  PublicKeyId: string | null;
}

/** 执行动作。 */
declare interface Execution {
  /** 任务类型，目前支持以下类型。1. “MR”，将通过hadoop jar的方式提交。2. "HIVE"，将通过hive -f的方式提交。3. "SPARK"，将通过spark-submit的方式提交。 */
  JobType: string;
  /** 任务参数，提供除提交指令以外的参数。 */
  Args: string[];
}

/** 共用组件信息 */
declare interface ExternalService {
  /** 共用组件类型，EMR/CUSTOM */
  ShareType: string;
  /** 自定义参数集合 */
  CustomServiceDefineList: CustomServiceDefine[];
  /** 共用组件名 */
  Service: string;
  /** 共用组件集群 */
  InstanceId: string;
}

/** Emr集群列表实例自定义查询过滤 */
declare interface Filters {
  /** 字段名称 */
  Name: string;
  /** 过滤字段值 */
  Values: string[];
}

/** Pod HostPath挂载方式描述 */
declare interface HostVolumeContext {
  /** Pod挂载宿主机的目录。资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用 */
  VolumePath: string | null;
}

/** 实例预付费参数，只有在付费类型为PREPAID时生效。 */
declare interface InstanceChargePrepaid {
  /** 包年包月时间，默认为1，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 24, 36, 48, 60。 */
  Period: number;
  /** 是否自动续费，默认为否。true：是false：否 */
  RenewFlag: boolean;
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
  Name: string | null;
  /** 任务步骤失败时的处理策略，可以为以下值："CONTINUE"，跳过当前失败步骤，继续后续步骤。“TERMINATE_CLUSTER”，终止当前及后续步骤，并销毁集群。“CANCEL_AND_WAIT”，取消当前步骤并阻塞等待处理。 */
  ActionOnFailure: string | null;
  /** 当前步骤的状态，可以为以下值：“JobFlowStepStatusInit”，初始化状态，等待执行。“JobFlowStepStatusRunning”，任务步骤正在执行。“JobFlowStepStatusFailed”，任务步骤执行失败。“JobFlowStepStatusSucceed”，任务步骤执行成功。 */
  JobState: string | null;
  /** YARN任务ID */
  ApplicationId?: string | null;
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
  Count: number | null;
  /** 磁盘类型 */
  Type?: number | null;
  /** 云盘大小 */
  Volume?: number | null;
}

/** 各个可用区的参数信息 */
declare interface MultiZoneSetting {
  /** "master"、"standby"、"third-party" */
  ZoneTag?: string | null;
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

/** 用于创建集群价格清单 节点价格详情 */
declare interface NodeDetailPriceResult {
  /** 节点类型 master core task common router mysql */
  NodeType: string | null;
  /** 节点组成部分价格详情 */
  PartDetailPrice: PartDetailPriceItem[];
}

/** 节点硬件信息 */
declare interface NodeHardwareInfo {
  /** 用户APPID */
  AppId?: number | null;
  /** 序列号 */
  SerialNo?: string | null;
  /** 机器实例ID */
  OrderNo?: string | null;
  /** master节点绑定外网IP */
  WanIp?: string | null;
  /** 节点类型。0:common节点；1:master节点；2:core节点；3:task节点 */
  Flag?: number | null;
  /** 节点规格 */
  Spec?: string | null;
  /** 节点核数 */
  CpuNum?: number | null;
  /** 节点内存 */
  MemSize?: number | null;
  /** 节点内存描述 */
  MemDesc?: string | null;
  /** 节点所在region */
  RegionId?: number | null;
  /** 节点所在Zone */
  ZoneId?: number | null;
  /** 申请时间 */
  ApplyTime?: string | null;
  /** 释放时间 */
  FreeTime?: string | null;
  /** 硬盘大小 */
  DiskSize?: string | null;
  /** 节点描述 */
  NameTag?: string | null;
  /** 节点部署服务 */
  Services?: string | null;
  /** 磁盘类型 */
  StorageType?: number | null;
  /** 系统盘大小 */
  RootSize?: number | null;
  /** 付费类型 */
  ChargeType?: number | null;
  /** 数据库IP */
  CdbIp?: string | null;
  /** 数据库端口 */
  CdbPort?: number | null;
  /** 硬盘容量 */
  HwDiskSize?: number | null;
  /** 硬盘容量描述 */
  HwDiskSizeDesc?: string | null;
  /** 内存容量 */
  HwMemSize?: number | null;
  /** 内存容量描述 */
  HwMemSizeDesc?: string | null;
  /** 过期时间 */
  ExpireTime?: string | null;
  /** 节点资源ID */
  EmrResourceId?: string | null;
  /** 续费标志 */
  IsAutoRenew?: number | null;
  /** 设备标识 */
  DeviceClass?: string | null;
  /** 支持变配 */
  Mutable?: number | null;
  /** 多云盘 */
  MCMultiDisk?: MultiDiskMC[] | null;
  /** 数据库信息 */
  CdbNodeInfo?: CdbInfo | null;
  /** 内网IP */
  Ip?: string | null;
  /** 此节点是否可销毁，1可销毁，0不可销毁 */
  Destroyable?: number | null;
  /** 节点绑定的标签 */
  Tags?: Tag[] | null;
  /** 是否是自动扩缩容节点，0为普通节点，1为自动扩缩容节点。 */
  AutoFlag?: number | null;
  /** 资源类型, host/pod */
  HardwareResourceType?: string | null;
  /** 是否浮动规格，1是，0否 */
  IsDynamicSpec?: number | null;
  /** 浮动规格值json字符串 */
  DynamicPodSpec?: string | null;
  /** 是否支持变更计费类型 1是，0否 */
  SupportModifyPayMode?: number | null;
  /** 系统盘类型 */
  RootStorageType?: number | null;
  /** 可用区信息 */
  Zone?: string | null;
  /** 子网 */
  SubnetInfo?: SubnetInfo | null;
  /** 客户端 */
  Clients?: string | null;
  /** 系统当前时间 */
  CurrentTime?: string | null;
  /** 是否用于联邦 ,1是，0否 */
  IsFederation?: number | null;
  /** 设备名称 */
  DeviceName?: string | null;
  /** 服务 */
  ServiceClient?: string | null;
  /** 该实例是否开启实例保护，true为开启 false为关闭 */
  DisableApiTermination?: boolean | null;
  /** 0表示老计费，1表示新计费 */
  TradeVersion?: number | null;
}

/** 资源详情 */
declare interface NodeResourceSpec {
  /** 规格类型，如S2.MEDIUM8 */
  InstanceType: string | null;
  /** 系统盘，系统盘个数不超过1块 */
  SystemDisk: DiskSpecInfo[] | null;
  /** 需要绑定的标签列表 */
  Tags?: Tag[] | null;
  /** 云数据盘，云数据盘总个数不超过15块 */
  DataDisk?: DiskSpecInfo[] | null;
  /** 本地数据盘 */
  LocalDataDisk?: DiskSpecInfo[] | null;
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

/** 用于创建集群价格清单-节点组成部分价格 */
declare interface PartDetailPriceItem {
  /** 类型包括：节点->node、系统盘->rootDisk、云数据盘->dataDisk、metaDB */
  InstanceType: string | null;
  /** 单价（原价） */
  Price: number | null;
  /** 单价（折扣价） */
  RealCost: number | null;
  /** 总价（折扣价） */
  RealTotalCost: number | null;
  /** 折扣 */
  Policy: number | null;
  /** 数量 */
  GoodsNum: number | null;
}

/** Pod PVC存储方式描述 */
declare interface PersistentVolumeContext {
  /** 磁盘大小，单位为GB。 */
  DiskSize?: number | null;
  /** 磁盘类型。CLOUD_PREMIUM;CLOUD_SSD */
  DiskType?: string | null;
  /** 磁盘数量 */
  DiskNum?: number | null;
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
  VpcId?: string | null;
  /** 代表vpc子网唯一id */
  SubnetId?: string | null;
  /** pod name */
  PodName?: string | null;
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
  VpcId?: string | null;
  /** 代表vpc子网唯一id */
  SubnetId?: string | null;
  /** pod name */
  PodName?: string | null;
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
  VolumeType: string | null;
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
}

/** 价格详情 */
declare interface PriceDetail {
  /** 节点ID */
  ResourceId: string;
  /** 价格计算公式 */
  Formula: string;
  /** 原价 */
  OriginalCost: number;
  /** 折扣价 */
  DiscountCost: number;
}

/** 询价资源 */
declare interface PriceResource {
  /** 需要的规格 */
  Spec: string | null;
  /** 硬盘类型 */
  StorageType: number | null;
  /** 硬盘类型 */
  DiskType: string | null;
  /** 系统盘大小 */
  RootSize: number | null;
  /** 内存大小 */
  MemSize: number | null;
  /** 核心数量 */
  Cpu: number | null;
  /** 硬盘大小 */
  DiskSize: number | null;
  /** 云盘列表 */
  MultiDisks: MultiDisk[] | null;
  /** 磁盘数量 */
  DiskCnt: number | null;
  /** 规格 */
  InstanceType: string | null;
  /** 标签 */
  Tags: Tag[] | null;
  /** 磁盘数量 */
  DiskNum: number | null;
  /** 本地盘的数量 */
  LocalDiskNum: number | null;
}

/** 获取CVM配额 */
declare interface QuotaEntity {
  /** 已使用配额 */
  UsedQuota: number | null;
  /** 剩余配额 */
  RemainingQuota: number | null;
  /** 总配额 */
  TotalQuota: number | null;
  /** 可用区 */
  Zone: string | null;
}

/** 集群续费实例信息 */
declare interface RenewInstancesInfo {
  /** 节点资源ID */
  EmrResourceId: string;
  /** 节点类型。0:common节点；1:master节点；2:core节点；3:task节点 */
  Flag: number;
  /** 内网IP */
  Ip: string;
  /** 节点内存描述 */
  MemDesc: string;
  /** 节点核数 */
  CpuNum: number;
  /** 硬盘大小 */
  DiskSize: string;
  /** 过期时间 */
  ExpireTime: string;
  /** 节点规格 */
  Spec: string;
  /** 磁盘类型 */
  StorageType: number;
}

/** 资源详情 */
declare interface Resource {
  /** 节点规格描述，如CVM.SA2。 */
  Spec: string | null;
  /** 存储类型取值范围：4：表示云SSD。5：表示高效云盘。6：表示增强型SSD云硬盘。11：表示吞吐型云硬盘。12：表示极速型SSD云硬盘。 */
  StorageType: number | null;
  /** 磁盘类型取值范围：CLOUD_SSD：表示云SSD。CLOUD_PREMIUM：表示高效云盘。CLOUD_BASIC：表示云硬盘。 */
  DiskType: string | null;
  /** 内存容量,单位为M */
  MemSize: number | null;
  /** CPU核数 */
  Cpu: number | null;
  /** 数据盘容量 */
  DiskSize: number | null;
  /** 系统盘容量 */
  RootSize?: number | null;
  /** 云盘列表，当数据盘为一块云盘时，直接使用DiskType和DiskSize参数，超出部分使用MultiDisks */
  MultiDisks?: MultiDisk[] | null;
  /** 需要绑定的标签列表 */
  Tags?: Tag[] | null;
  /** 规格类型，如S2.MEDIUM8 */
  InstanceType?: string | null;
  /** 本地盘数量，该字段已废弃 */
  LocalDiskNum?: number | null;
  /** 本地盘数量，如2 */
  DiskNum?: number | null;
}

/** 扩容节点类型以及数量 */
declare interface ScaleOutNodeConfig {
  /** 扩容节点类型取值范围： MASTER TASK CORE ROUTER */
  NodeFlag: string;
  /** 扩容节点数量 */
  NodeCount: number;
}

/** 集群应用场景以及支持部署组件信息 */
declare interface SceneSoftwareConfig {
  /** 部署的组件列表。不同的EMR产品版本ProductVersion 对应不同可选组件列表，不同产品版本可选组件列表查询：[组件版本](https://cloud.tencent.com/document/product/589/20279) ；填写实例值：hive、flink。 */
  Software: string[];
  /** 默认Hadoop-Default,[场景查询](https://cloud.tencent.com/document/product/589/14624)场景化取值范围：Hadoop-KuduHadoop-ZookeeperHadoop-PrestoHadoop-HbaseHadoop-Default */
  SceneName?: string;
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
}

/** 搜索字段 */
declare interface SearchItem {
  /** 支持搜索的类型 */
  SearchType: string;
  /** 支持搜索的值 */
  SearchValue: string;
}

/** 节点信息 */
declare interface ShortNodeInfo {
  /** 节点类型，Master/Core/Task/Router/Common */
  NodeType?: string | null;
  /** 节点数量 */
  NodeSize?: number | null;
}

/** 体外客户端组件依赖信息 */
declare interface SoftDependInfo {
  /** 组件名称 */
  SoftName: string;
  /** 是否必选 */
  Required: boolean;
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

/** 子网信息 */
declare interface SubnetInfo {
  /** 子网信息（名字） */
  SubnetName?: string | null;
  /** 子网信息（ID） */
  SubnetId?: string | null;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 集群节点拓扑信息 */
declare interface TopologyInfo {
  /** 可用区ID */
  ZoneId?: number | null;
  /** 可用区信息 */
  Zone?: string | null;
  /** 子网信息 */
  SubnetInfoList?: SubnetInfo[] | null;
  /** 节点信息 */
  NodeInfoList?: ShortNodeInfo[] | null;
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
}

/** 用户管理列表过滤器 */
declare interface UserManagerFilter {
  /** 用户名 */
  UserName?: string | null;
}

/** 用户管理中用户的简要信息 */
declare interface UserManagerUserBriefInfo {
  /** 用户名 */
  UserName: string;
  /** 用户所属的组 */
  UserGroup: string;
  /** Manager表示管理员、NormalUser表示普通用户 */
  UserType: string;
  /** 用户创建时间 */
  CreateTime: string | null;
  /** 是否可以下载用户对应的keytab文件，对开启kerberos的集群才有意义 */
  SupportDownLoadKeyTab: boolean;
  /** keytab文件的下载地址 */
  DownLoadKeyTabUrl: string | null;
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

/** 用于创建集群价格清单 不同可用区下价格详情 */
declare interface ZoneDetailPriceResult {
  /** 可用区Id */
  ZoneId: string | null;
  /** 不同节点的价格详情 */
  NodeDetailPrice: NodeDetailPriceResult[];
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
  ZoneTag?: string | null;
}

declare interface AddUsersForUserManagerRequest {
  /** 集群字符串ID */
  InstanceId: string;
  /** 用户信息列表 */
  UserManagerUserList: UserInfoForUserManager[];
}

declare interface AddUsersForUserManagerResponse {
  /** 添加成功的用户列表 */
  SuccessUserList: string[] | null;
  /** 添加失败的用户列表 */
  FailedUserList: string[] | null;
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
  /** 唯一随机标识，时效性为5分钟，需要调用者指定 防止客户端重复创建资源，例如 a9a90aa6-751a-41b6-aad6-fae360632808 */
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
}

declare interface CreateClusterResponse {
  /** 实例ID */
  InstanceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceRequest {
  /** 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：16：表示EMR-V2.3.0。20：表示EMR-V2.5.0。25：表示EMR-V3.1.0。27：表示KAFKA-V1.0.0。30：表示EMR-V2.6.0。33 : 表示EMR-V3.2.1。34 : 表示EMR-V3.3.0。36 : 表示STARROCKS-V1.0.0。37 : 表示EMR-V3.4.0。38 : 表示EMR-V2.7.0。39 : 表示STARROCKS-V1.1.0。41 : 表示DRUID-V1.1.0。 */
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
  /** 客户端Token。 */
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
  /** hive共享元数据库类型。取值范围：EMR_NEW_META：表示集群默认创建EMR_EXIT_META：表示集群使用指定EMR-MetaDB。USER_CUSTOM_META：表示集群使用自定义MetaDB。 */
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
}

declare interface CreateInstanceResponse {
  /** 实例ID */
  InstanceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserManagerUserListRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 集群用户名列表 */
  UserNameList: string[];
}

declare interface DeleteUserManagerUserListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterNodesRequest {
  /** 集群实例ID,实例ID形如: emr-xxxxxxxx */
  InstanceId: string;
  /** 节点标识，取值为：all：表示获取全部类型节点，cdb信息除外。master：表示获取master节点信息。core：表示获取core节点信息。task：表示获取task节点信息。common：表示获取common节点信息。router：表示获取router节点信息。db：表示获取正常状态的cdb信息。recyle：表示获取回收站隔离中的节点信息，包括cdb信息。renew：表示获取所有待续费的节点信息，包括cdb信息，自动续费节点不会返回。注意：现在只支持以上取值，输入其他值会导致错误。 */
  NodeFlag: string;
  /** 页编号，默认值为0，表示第一页。 */
  Offset?: number;
  /** 每页返回数量，默认值为100，最大值为100。 */
  Limit?: number;
  /** 资源类型:支持all/host/pod，默认为all */
  HardwareResourceType?: string;
  /** 支持搜索的字段 */
  SearchFields?: SearchItem[];
  /** 无 */
  OrderField?: string;
  /** 无 */
  Asc?: number;
}

declare interface DescribeClusterNodesResponse {
  /** 查询到的节点总数 */
  TotalCnt: number;
  /** 节点详细信息列表 */
  NodeList: NodeHardwareInfo[] | null;
  /** 用户所有的标签键列表 */
  TagKeys: string[] | null;
  /** 资源类型列表 */
  HardwareResourceTypeList: string[] | null;
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
  PostPaidQuotaSet: QuotaEntity[] | null;
  /** 竞价实例配额列表 */
  SpotPaidQuotaSet: QuotaEntity[] | null;
  /** eks配额 */
  EksQuotaSet: PodSaleSpec[] | null;
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
  /** 页容量 */
  Limit?: number;
}

declare interface DescribeEmrApplicationStaticsResponse {
  /** 作业统计信息 */
  Statics: ApplicationStatics[];
  /** 总数 */
  TotalCount: number;
  /** 可选择的队列名 */
  Queues: string[];
  /** 可选择的用户名 */
  Users: string[];
  /** 可选择的作业类型 */
  ApplicationTypes: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRenewNodesRequest {
  /** 集群实例ID,实例ID形如: emr-xxxxxxxx */
  InstanceId: string;
}

declare interface DescribeInstanceRenewNodesResponse {
  /** 查询到的节点总数 */
  TotalCnt: number;
  /** 节点详细信息列表 */
  NodeList: RenewInstancesInfo[] | null;
  /** 用户所有的标签键列表 */
  MetaInfo: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesListRequest {
  /** 集群筛选策略。取值范围：clusterList：表示查询除了已销毁集群之外的集群列表。monitorManage：表示查询除了已销毁、创建中以及创建失败的集群之外的集群列表。cloudHardwareManage/componentManage：目前这两个取值为预留取值，暂时和monitorManage表示同样的含义。 */
  DisplayStrategy: string;
  /** 页编号，默认值为0，表示第一页。 */
  Offset?: number;
  /** 每页返回数量，默认值为10，最大值为100。 */
  Limit?: number;
  /** 排序字段。取值范围：clusterId：表示按照实例ID排序。addTime：表示按照实例创建时间排序。status：表示按照实例的状态码排序。 */
  OrderField?: string;
  /** 按照OrderField升序或者降序进行排序。取值范围：0：表示降序。1：表示升序。默认值为0。 */
  Asc?: number;
  /** 自定义查询 */
  Filters?: Filters[];
}

declare interface DescribeInstancesListResponse {
  /** 符合条件的实例总数。 */
  TotalCnt: number;
  /** 集群实例列表 */
  InstancesList: EmrListInstance[];
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
  /** 每页返回数量，默认值为10，最大值为100。 */
  Limit?: number;
  /** 建议必填-1，表示拉取所有项目下的集群。不填默认值为0，表示拉取默认项目下的集群。实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的 projectId 字段来获取。 */
  ProjectId?: number;
  /** 排序字段。取值范围：clusterId：表示按照实例ID排序。addTime：表示按照实例创建时间排序。status：表示按照实例的状态码排序。 */
  OrderField?: string;
  /** 按照OrderField升序或者降序进行排序。取值范围：0：表示降序。1：表示升序。默认值为0。 */
  Asc?: number;
}

declare interface DescribeInstancesResponse {
  /** 符合条件的实例总数。 */
  TotalCnt: number;
  /** EMR实例详细信息列表。 */
  ClusterList: ClusterInstancesInfo[] | null;
  /** 实例关联的标签键列表。 */
  TagKeys: string[] | null;
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

declare interface DescribeResourceScheduleRequest {
  /** emr集群的英文id */
  InstanceId: string;
}

declare interface DescribeResourceScheduleResponse {
  /** 资源调度功能是否开启 */
  OpenSwitch: boolean;
  /** 正在使用的资源调度器 */
  Scheduler: string;
  /** 公平调度器的信息 */
  FSInfo: string;
  /** 容量调度器的信息 */
  CSInfo: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsersForUserManagerRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 页码 */
  PageNo: number;
  /** 分页的大小 */
  PageSize: number;
  /** 查询用户列表过滤器 */
  UserManagerFilter?: UserManagerFilter;
  /** 是否需要keytab文件的信息，仅对开启kerberos的集群有效，默认为false */
  NeedKeytabInfo?: boolean;
}

declare interface DescribeUsersForUserManagerResponse {
  /** 总数 */
  TotalCnt: number;
  /** 用户信息列表 */
  UserManagerUserList: UserManagerUserBriefInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRenewEmrRequest {
  /** 实例续费的时长。需要结合TimeUnit一起使用。1表示续费1一个月 */
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
  OriginalCost: number | null;
  /** 折扣价，单位为元。 */
  DiscountCost: number | null;
  /** 实例续费的时间单位。取值范围：m：表示月份。 */
  TimeUnit: string | null;
  /** 实例续费的时长。 */
  TimeSpan: number | null;
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
  /** 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）需要选择不同的必选组件：ProductId为1的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9ProductId为2的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9ProductId为4的时候，必选组件包括：hadoop-2.8.4、knox-1.2.0、zookeeper-3.4.9ProductId为7的时候，必选组件包括：hadoop-3.1.2、knox-1.2.0、zookeeper-3.4.9 */
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
  /** 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：1：表示EMR-V1.3.1。2：表示EMR-V2.0.1。4：表示EMR-V2.1.0。7：表示EMR-V3.0.0。 */
  ProductId?: number;
  /** 场景化取值：Hadoop-KuduHadoop-ZookeeperHadoop-PrestoHadoop-Hbase */
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
  OriginalCost: number | null;
  /** 折扣价，单位为元。 */
  DiscountCost: number | null;
  /** 购买实例的时间单位。取值范围：s：表示秒。m：表示月份。 */
  TimeUnit: string | null;
  /** 购买实例的时长。 */
  TimeSpan: number | null;
  /** 价格清单 */
  PriceList: ZoneDetailPriceResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewInstanceRequest {
  /** 实例续费的时长。需要结合TimeUnit一起使用。1表示续费1一个月 */
  TimeSpan: number;
  /** 待续费节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。 */
  ResourceIds: string[];
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement: Placement;
  /** 实例计费模式。此处只支持取值为1，表示包年包月。 */
  PayMode: number;
  /** 实例续费的时间单位。取值范围：m：表示月份。 */
  TimeUnit?: string;
  /** 货币种类。取值范围：CNY：表示人民币。 */
  Currency?: string;
  /** 是否按量转包年包月。0：否，1：是。 */
  ModifyPayMode?: number;
}

declare interface InquiryPriceRenewInstanceResponse {
  /** 原价，单位为元。 */
  OriginalCost: number | null;
  /** 折扣价，单位为元。 */
  DiscountCost: number | null;
  /** 实例续费的时间单位。取值范围：m：表示月份。 */
  TimeUnit: string | null;
  /** 实例续费的时长。 */
  TimeSpan: number | null;
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
}

declare interface InquiryPriceScaleOutInstanceResponse {
  /** 原价，单位为元。 */
  OriginalCost: string | null;
  /** 折扣价，单位为元。 */
  DiscountCost: string | null;
  /** 扩容的时间单位。取值范围：s：表示秒。m：表示月份。 */
  Unit: string | null;
  /** 询价的节点规格。 */
  PriceSpec: PriceResource | null;
  /** 对应入参MultipleResources中多个规格的询价结果，其它出参返回的是第一个规格的询价结果 */
  MultipleEmrPrice: EmrPrice[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceUpdateInstanceRequest {
  /** 变配的时间单位。取值范围：s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。 */
  TimeUnit: string;
  /** 变配的时长。结合TimeUnit一起使用。TimeUnit为s时，该参数只能填写3600，表示按量计费实例。TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月 */
  TimeSpan: number;
  /** 节点变配的目标配置。 */
  UpdateSpec: UpdateInstanceSettings;
  /** 实例计费模式。取值范围：0：表示按量计费。1：表示包年包月。 */
  PayMode: number;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement: Placement;
  /** 货币种类。取值范围：CNY：表示人民币。 */
  Currency?: string;
  /** 批量变配资源ID列表 */
  ResourceIdList?: string[];
}

declare interface InquiryPriceUpdateInstanceResponse {
  /** 原价，单位为元。 */
  OriginalCost: number | null;
  /** 折扣价，单位为元。 */
  DiscountCost: number | null;
  /** 变配的时间单位。取值范围：s：表示秒。m：表示月份。 */
  TimeUnit: string | null;
  /** 变配的时长。 */
  TimeSpan: number | null;
  /** 价格详情 */
  PriceDetail: PriceDetail[] | null;
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
  IsDraft: boolean;
  /** 扩展字段，暂时没用 */
  ErrorMsg: string | null;
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
  IsDraft: boolean;
  /** 校验错误信息，如果不为空，则说明校验失败，配置没有成功 */
  ErrorMsg: string | null;
  /** 返回数据 */
  Data: string | null;
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
  JobFlowId: number;
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
  /** 唯一随机标识，时效5分钟，需要调用者指定 防止客户端重新创建资源，例如 a9a90aa6-751a-41b6-aad6-fae36063280 */
  ClientToken?: string;
  /** 即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** [引导操作](https://cloud.tencent.com/document/product/589/35656)脚本设置。 */
  ScriptBootstrapActionConfig?: ScriptBootstrapActionConfig[];
  /** 扩容部署服务，新增节点将默认继承当前节点类型中所部署服务，部署服务含默认可选服务，该参数仅支持可选服务填写，如：存量task节点已部署HDFS、YARN、impala；使用api扩容task节不部署impala时，此参数仅填写HDFS、YARN */
  SoftDeployInfo?: number[];
  /** 部署进程，默认部署扩容服务的全部进程，支持修改部署进程，如：当前task节点部署服务为：HDFS、YARN、impala，默认部署服务为：DataNode,NodeManager,ImpalaServer，若用户需修改部署进程信息，此参数信息可填写：	DataNode,NodeManager,ImpalaServerCoordinator或DataNode,NodeManager,ImpalaServerExecutor */
  ServiceNodeInfo?: number[];
  /** 分散置放群组ID列表，当前只支持指定一个。该参数可以通过调用 [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/product/213/17810)的返回值中的DisasterRecoverGroupId字段来获取。 */
  DisasterRecoverGroupIds?: string[];
  /** 扩容节点绑定标签列表。 */
  Tags?: Tag[];
  /** 扩容所选资源类型，可选范围为"host","pod"，host为普通的CVM资源，Pod为TKE集群或EKS集群提供的资源 */
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
}

declare interface ScaleOutClusterResponse {
  /** 实例ID。 */
  InstanceId: string;
  /** 客户端Token。 */
  ClientToken: string | null;
  /** 扩容流程ID。 */
  FlowId: number | null;
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
  /** 客户端Token。 */
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
  /** 扩容所选资源类型，可选范围为"host","pod"，host为普通的CVM资源，Pod为TKE集群或EKS集群提供的资源 */
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
}

declare interface ScaleOutInstanceResponse {
  /** 实例ID。 */
  InstanceId: string;
  /** 订单号。 */
  DealNames: string[] | null;
  /** 客户端Token。 */
  ClientToken: string | null;
  /** 扩容流程ID。 */
  FlowId: number | null;
  /** 大订单号。 */
  BillId: string | null;
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

declare interface TerminateInstanceRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 销毁节点ID。该参数为预留参数，用户无需配置。 */
  ResourceIds?: string[];
}

declare interface TerminateInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateTasksRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 待销毁节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。 */
  ResourceIds: string[];
}

declare interface TerminateTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Emr 弹性 MapReduce} */
declare interface Emr {
  (): Versions;
  /** 新增用户列表 {@link AddUsersForUserManagerRequest} {@link AddUsersForUserManagerResponse} */
  AddUsersForUserManager(data: AddUsersForUserManagerRequest, config?: AxiosRequestConfig): AxiosPromise<AddUsersForUserManagerResponse>;
  /** 创建EMR集群实例 {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 创建EMR实例 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 删除用户列表 {@link DeleteUserManagerUserListRequest} {@link DeleteUserManagerUserListResponse} */
  DeleteUserManagerUserList(data: DeleteUserManagerUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserManagerUserListResponse>;
  /** 查询集群节点信息 {@link DescribeClusterNodesRequest} {@link DescribeClusterNodesResponse} */
  DescribeClusterNodes(data: DescribeClusterNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNodesResponse>;
  /** 查询账户的CVM配额 {@link DescribeCvmQuotaRequest} {@link DescribeCvmQuotaResponse} */
  DescribeCvmQuota(data: DescribeCvmQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCvmQuotaResponse>;
  /** 查询YARN的任务统计信息 {@link DescribeEmrApplicationStaticsRequest} {@link DescribeEmrApplicationStaticsResponse} */
  DescribeEmrApplicationStatics(data: DescribeEmrApplicationStaticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmrApplicationStaticsResponse>;
  /** 查询待续费节点信息 {@link DescribeInstanceRenewNodesRequest} {@link DescribeInstanceRenewNodesResponse} */
  DescribeInstanceRenewNodes(data: DescribeInstanceRenewNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceRenewNodesResponse>;
  /** 查询集群实例信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询集群列表 {@link DescribeInstancesListRequest} {@link DescribeInstancesListResponse} */
  DescribeInstancesList(data: DescribeInstancesListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesListResponse>;
  /** 查询流程作业状态 {@link DescribeJobFlowRequest} {@link DescribeJobFlowResponse} */
  DescribeJobFlow(data: DescribeJobFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobFlowResponse>;
  /** 查询YARN资源调度数据信息 {@link DescribeResourceScheduleRequest} {@link DescribeResourceScheduleResponse} */
  DescribeResourceSchedule(data: DescribeResourceScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceScheduleResponse>;
  /** 查询用户列表 {@link DescribeUsersForUserManagerRequest} {@link DescribeUsersForUserManagerResponse} */
  DescribeUsersForUserManager(data: DescribeUsersForUserManagerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersForUserManagerResponse>;
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
  /** 刷新YARN的动态资源池 {@link ModifyResourcePoolsRequest} {@link ModifyResourcePoolsResponse} */
  ModifyResourcePools(data: ModifyResourcePoolsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourcePoolsResponse>;
  /** 修改YARN资源调度的资源配置 {@link ModifyResourceScheduleConfigRequest} {@link ModifyResourceScheduleConfigResponse} */
  ModifyResourceScheduleConfig(data: ModifyResourceScheduleConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceScheduleConfigResponse>;
  /** 修改YARN的资源调度器 {@link ModifyResourceSchedulerRequest} {@link ModifyResourceSchedulerResponse} */
  ModifyResourceScheduler(data: ModifyResourceSchedulerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceSchedulerResponse>;
  /** 创建流程作业 {@link RunJobFlowRequest} {@link RunJobFlowResponse} */
  RunJobFlow(data: RunJobFlowRequest, config?: AxiosRequestConfig): AxiosPromise<RunJobFlowResponse>;
  /** 扩容集群节点 {@link ScaleOutClusterRequest} {@link ScaleOutClusterResponse} */
  ScaleOutCluster(data: ScaleOutClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutClusterResponse>;
  /** 实例扩容 {@link ScaleOutInstanceRequest} {@link ScaleOutInstanceResponse} */
  ScaleOutInstance(data: ScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstanceResponse>;
  /** EMR同步POD状态 {@link SyncPodStateRequest} {@link SyncPodStateResponse} */
  SyncPodState(data: SyncPodStateRequest, config?: AxiosRequestConfig): AxiosPromise<SyncPodStateResponse>;
  /** 销毁EMR实例 {@link TerminateInstanceRequest} {@link TerminateInstanceResponse} */
  TerminateInstance(data: TerminateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstanceResponse>;
  /** 缩容Task节点 {@link TerminateTasksRequest} {@link TerminateTasksResponse} */
  TerminateTasks(data: TerminateTasksRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateTasksResponse>;
}

export declare type Versions = ["2019-01-03"];

export default Emr;
