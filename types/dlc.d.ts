/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 引擎的访问信息 */
declare interface AccessInfo {
  /** 访问引擎的方法 */
  AccessType?: string | null;
  /** 访问引擎的url，内部的部分参数需要根据实际情况替换 */
  AccessConnectionInfos?: string[] | null;
}

/** 洞察分析结果返回体 */
declare interface AnalysisTaskResults {
  /** 任务Id */
  Id?: string;
  /** 任务创建时间，毫秒时间戳 */
  InstanceStartTime?: number;
  /** 任务结束时间，毫秒时间戳 */
  InstanceCompleteTime?: number | null;
  /** 任务状态：0 初始化， 1 执行中， 2 执行成功，3 数据写入中，4 排队中。-1 执行失败，-3 已取消。 */
  State?: number;
  /** 任务SQL语句 */
  SQL?: string;
  /** 计算资源名字 */
  DataEngineName?: string | null;
  /** 单位毫秒，引擎内执行耗时 */
  JobTimeSum?: number | null;
  /** 单位秒，CU资源消耗 */
  TaskTimeSum?: number | null;
  /** 数据扫描总行数 */
  InputRecordsSum?: number | null;
  /** 数据扫描总 bytes */
  InputBytesSum?: number | null;
  /** 输出总行数 */
  OutputRecordsSum?: number | null;
  /** 输出总 bytes */
  OutputBytesSum?: number | null;
  /** shuffle read 总 bytes */
  ShuffleReadBytesSum?: number | null;
  /** shuffle read 总行数 */
  ShuffleReadRecordsSum?: number | null;
  /** 洞察结果类型分类，一个 json 数组，有如下几种类型：SPARK-StageScheduleDelay（资源抢占）, SPARK-ShuffleFailure（Shuffle异常）, SPARK-SlowTask（慢task）, SPARK-DataSkew（数据倾斜）, SPARK-InsufficientResource（磁盘或内存不足） */
  AnalysisStatus?: string | null;
}

/** 元数据基本对象 */
declare interface Asset {
  /** 主键 */
  Id?: number | null;
  /** 名称 */
  Name?: string | null;
  /** 对象GUID值 */
  Guid?: string | null;
  /** 数据目录 */
  Catalog?: string | null;
  /** 描述信息 */
  Description?: string;
  /** 对象owner */
  Owner?: string;
  /** 对象owner账户 */
  OwnerAccount?: string;
  /** 权限 */
  PermValues?: KVPair[];
  /** 附加属性 */
  Params?: KVPair[];
  /** 附加业务属性 */
  BizParams?: KVPair[];
  /** 数据版本 */
  DataVersion?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifiedTime?: string;
  /** 数据源主键 */
  DatasourceId?: number;
}

/** spark session batch SQL的消耗信息 */
declare interface BatchSQLCostInfo {
  /** 任务id */
  BatchId?: string | null;
  /** 引擎名称 */
  DataEngineName?: string | null;
  /** 引擎id */
  DataEngineId?: string | null;
  /** 本次消耗，单位cu */
  Cost?: number | null;
  /** 时间开销，秒 */
  TimeCost?: number | null;
  /** 操作者 */
  Operator?: string | null;
}

/** SparkSQL批任务信息 */
declare interface BatchSqlTask {
  /** SQL子任务唯一标识 */
  TaskId?: string | null;
  /** 运行SQL */
  ExecuteSQL?: string | null;
  /** 任务信息，成功则返回：Task Success!，失败则返回异常信息 */
  Message?: string | null;
}

/** chdfs产品vpc信息 */
declare interface CHDFSProductVpcInfo {
  /** vpc id */
  VpcId?: string | null;
  /** vpc名称 */
  VpcName?: string | null;
  /** vpc子网信息列表 */
  VpcCidrBlock?: VpcCidrBlock[] | null;
  /** 规则Id */
  RuleId?: number | null;
  /** 权限组Id */
  AccessGroupId?: string | null;
}

/** CSV类型数据格式 */
declare interface CSV {
  /** 压缩格式，["Snappy", "Gzip", "None"选一]。 */
  CodeCompress?: string;
  /** CSV序列化及反序列化数据结构。 */
  CSVSerde?: CSVSerde;
  /** 标题行，默认为0。 */
  HeadLines?: number | null;
  /** 格式，默认值为CSV */
  Format?: string | null;
}

/** CSV序列化及反序列化数据结构 */
declare interface CSVSerde {
  /** CSV序列化转义符，默认为"\\"，最长8个字符，如 Escape: "/\" */
  Escape?: string;
  /** CSV序列化字段域符，默认为"'"，最长8个字符, 如 Quote: "\"" */
  Quote?: string;
  /** CSV序列化分隔符，默认为"\t"，最长8个字符, 如 Separator: "\t" */
  Separator?: string;
}

/** 数据表列信息。 */
declare interface Column {
  /** 列名称，不区分大小写，最大支持25个字符。 */
  Name: string;
  /** string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array|map|struct|uniontype */
  Type: string;
  /** 对该类的注释。 */
  Comment?: string | null;
  /** 表示整个 numeric 的长度 */
  Precision?: number | null;
  /** 表示小数部分的长度 */
  Scale?: number | null;
  /** 是否为null */
  Nullable?: string | null;
  /** 字段位置，小的在前 */
  Position?: number | null;
  /** 字段创建时间 */
  CreateTime?: string | null;
  /** 字段修改时间 */
  ModifiedTime?: string | null;
  /** 是否为分区字段 */
  IsPartition?: boolean | null;
  /** 数据脱敏策略信息 */
  DataMaskStrategyInfo?: DataMaskStrategyInfo | null;
}

/** 任务公共指标 */
declare interface CommonMetrics {
  /** 创建任务时长，单位：ms */
  CreateTaskTime?: number | null;
  /** 预处理总时长，单位：ms */
  ProcessTime?: number | null;
  /** 排队时长，单位：ms */
  QueueTime?: number | null;
  /** 执行时长，单位：ms */
  ExecutionTime?: number | null;
  /** 是否命中结果缓存 */
  IsResultCacheHit?: boolean | null;
  /** 匹配物化视图数据量 */
  MatchedMVBytes?: number | null;
  /** 匹配物化视图列表 */
  MatchedMVs?: string | null;
  /** 结果数据量，单位：byte */
  AffectedBytes?: string | null;
  /** 结果行数 */
  AffectedRows?: number | null;
  /** 扫描数据量，单位：byte */
  ProcessedBytes?: number | null;
  /** 扫描行数 */
  ProcessedRows?: number | null;
}

/** cos权限描述 */
declare interface CosPermission {
  /** cos路径 */
  CosPath?: string | null;
  /** 权限【"read","write"】 */
  Permissions?: string[] | null;
}

/** 定时启停策略信息 */
declare interface CrontabResumeSuspendStrategy {
  /** 定时拉起时间：如：周一&周三8点 */
  ResumeTime?: string;
  /** 定时挂起时间：如：周一&周三20点 */
  SuspendTime?: string;
  /** 挂起配置：0（默认）：等待任务结束后挂起、1：强制挂起 */
  SuspendStrategy?: number;
}

/** DLC 数据目录访问权限 */
declare interface DLCCatalogAccess {
  /** VPCID */
  VpcId: string | null;
  /** 产品类型 */
  Product: string | null;
  /** 描述信息 */
  Description?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
}

/** 迁移列对象 */
declare interface DMSColumn {
  /** 名称 */
  Name?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 排序 */
  Position?: number | null;
  /** 附加参数 */
  Params?: KVPair[] | null;
  /** 业务参数 */
  BizParams?: KVPair[] | null;
  /** 是否分区 */
  IsPartition?: boolean | null;
}

/** 列排序对象 */
declare interface DMSColumnOrder {
  /** 列名 */
  Col?: string | null;
  /** 排序 */
  Order?: number | null;
}

/** 迁移元数据分区对象 */
declare interface DMSPartition {
  /** 数据库名称 */
  DatabaseName?: string;
  /** 数据目录名称 */
  SchemaName?: string;
  /** 表名称 */
  TableName?: string;
  /** 数据版本 */
  DataVersion?: number;
  /** 分区名称 */
  Name?: string;
  /** 值列表 */
  Values?: string[];
  /** 存储大小 */
  StorageSize?: number;
  /** 记录数量 */
  RecordCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifiedTime?: string;
  /** 最后访问时间 */
  LastAccessTime?: string;
  /** 附件属性 */
  Params?: KVPair[];
  /** 存储对象 */
  Sds?: DMSSds;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

/** 元数据存储描述属性 */
declare interface DMSSds {
  /** 存储地址 */
  Location?: string | null;
  /** 输入格式 */
  InputFormat?: string | null;
  /** 输出格式 */
  OutputFormat?: string | null;
  /** bucket数量 */
  NumBuckets?: number | null;
  /** 是是否压缩 */
  Compressed?: boolean | null;
  /** 是否有子目录 */
  StoredAsSubDirectories?: boolean | null;
  /** 序列化lib */
  SerdeLib?: string | null;
  /** 序列化名称 */
  SerdeName?: string | null;
  /** 桶名称 */
  BucketCols?: string[] | null;
  /** 序列化参数 */
  SerdeParams?: KVPair[] | null;
  /** 附加参数 */
  Params?: KVPair[] | null;
  /** 列排序(Expired) */
  SortCols?: DMSColumnOrder | null;
  /** 列 */
  Cols?: DMSColumn[] | null;
  /** 列排序字段 */
  SortColumns?: DMSColumnOrder[] | null;
}

/** DMSTable基本信息 */
declare interface DMSTable {
  /** 视图文本 */
  ViewOriginalText?: string | null;
  /** 视图文本 */
  ViewExpandedText?: string | null;
  /** hive维护版本 */
  Retention?: number | null;
  /** 存储对象 */
  Sds?: DMSSds | null;
  /** 分区列 */
  PartitionKeys?: DMSColumn[] | null;
  /** 分区 */
  Partitions?: DMSPartition[] | null;
  /** 表类型 */
  Type?: string | null;
  /** 数据库名称 */
  DbName?: string | null;
  /** Schema名称 */
  SchemaName?: string | null;
  /** 存储大小 */
  StorageSize?: number | null;
  /** 记录数量 */
  RecordCount?: number | null;
  /** 生命周期 */
  LifeTime?: number | null;
  /** 最后访问时间 */
  LastAccessTime?: string | null;
  /** 数据更新时间 */
  DataUpdateTime?: string | null;
  /** 结构更新时间 */
  StructUpdateTime?: string | null;
  /** 列 */
  Columns?: DMSColumn[] | null;
  /** 表名 */
  Name?: string | null;
}

/** DMSTable信息 */
declare interface DMSTableInfo {
  /** DMS表信息 */
  Table: DMSTable | null;
  /** 基础对象信息 */
  Asset: Asset | null;
}

/** DataEngine基本信息 */
declare interface DataEngineBasicInfo {
  /** DataEngine名称 */
  DataEngineName?: string;
  /** 数据引擎状态 -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中 */
  State?: number;
  /** 创建时间 */
  CreateTime?: number;
  /** 更新时间 */
  UpdateTime?: number;
  /** 返回信息 */
  Message?: string;
  /** 引擎id */
  DataEngineId?: string;
  /** 引擎类型，有效值：PrestoSQL/SparkSQL/SparkBatch */
  DataEngineType?: string;
  /** 用户ID */
  AppId?: number;
  /** 账号ID */
  UserUin?: string;
}

/** 引擎配置信息 */
declare interface DataEngineConfigInstanceInfo {
  /** 引擎ID */
  DataEngineId?: string | null;
  /** 用户自定义配置项集合 */
  DataEngineConfigPairs?: DataEngineConfigPair[];
  /** 作业集群资源参数配置模板 */
  SessionResourceTemplate?: SessionResourceTemplate;
}

/** 引擎配置 */
declare interface DataEngineConfigPair {
  /** 配置项 */
  ConfigItem: string;
  /** 配置值 */
  ConfigValue: string;
}

/** 集群大版本镜像信息。 */
declare interface DataEngineImageVersion {
  /** 镜像大版本ID */
  ImageVersionId: string;
  /** 镜像大版本名称 */
  ImageVersion: string;
  /** 镜像大版本描述 */
  Description: string | null;
  /** 是否为公共版本：1：公共；2：私有 */
  IsPublic: number;
  /** 集群类型：SparkSQL/PrestoSQL/SparkBatch */
  EngineType: string;
  /** 版本状态：1：初始化；2：上线；3：下线 */
  IsSharedEngine: number;
  /** 版本状态：1：初始化；2：上线；3：下线 */
  State: number;
  /** 插入时间 */
  InsertTime: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** DataEngine详细信息 */
declare interface DataEngineInfo {
  /** DataEngine名称 */
  DataEngineName: string;
  /** 引擎类型 spark/presto */
  EngineType: string;
  /** 集群资源类型 spark_private/presto_private/presto_cu/spark_cu */
  ClusterType: string;
  /** 引用ID */
  QuotaId?: string;
  /** 数据引擎状态 -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中 */
  State?: number;
  /** 创建时间 */
  CreateTime?: number;
  /** 更新时间 */
  UpdateTime?: number;
  /** 集群规格 */
  Size?: number | null;
  /** 计费模式 0共享模式 1按量计费 2包年包月 */
  Mode?: number;
  /** 最小集群数 */
  MinClusters?: number | null;
  /** 最大集群数 */
  MaxClusters?: number | null;
  /** 是否自动恢复 */
  AutoResume?: boolean | null;
  /** 自动恢复时间 */
  SpendAfter?: number | null;
  /** 集群网段 */
  CidrBlock?: string | null;
  /** 是否为默认引擎 */
  DefaultDataEngine?: boolean | null;
  /** 返回信息 */
  Message?: string | null;
  /** 引擎id */
  DataEngineId?: string;
  /** 操作者 */
  SubAccountUin?: string;
  /** 到期时间 */
  ExpireTime?: string;
  /** 隔离时间 */
  IsolatedTime?: string;
  /** 冲正时间 */
  ReversalTime?: string;
  /** 用户名称 */
  UserAlias?: string | null;
  /** 标签对集合 */
  TagList?: TagInfo[] | null;
  /** 引擎拥有的权限 */
  Permissions?: string[] | null;
  /** 是否自定挂起集群：false（默认）：不自动挂起、true：自动挂起 */
  AutoSuspend?: boolean | null;
  /** 定时启停集群策略：0（默认）：关闭定时策略、1：开启定时策略（注：定时启停策略与自动挂起策略互斥） */
  CrontabResumeSuspend?: number | null;
  /** 定时启停策略，复杂类型：包含启停时间、挂起集群策略 */
  CrontabResumeSuspendStrategy?: CrontabResumeSuspendStrategy | null;
  /** 引擎执行任务类型，有效值：SQL/BATCH */
  EngineExecType?: string | null;
  /** 自动续费标志，0，初始状态，默认不自动续费，若用户有预付费不停服特权，自动续费。1：自动续费。2：明确不自动续费 */
  RenewFlag?: number | null;
  /** 集群自动挂起时间 */
  AutoSuspendTime?: number | null;
  /** 网络连接配置 */
  NetworkConnectionSet?: NetworkConnection[] | null;
  /** ui的跳转地址 */
  UiURL?: string | null;
  /** 引擎的资源类型 */
  ResourceType?: string | null;
  /** 集群镜像版本ID */
  ImageVersionId?: string | null;
  /** 集群镜像小版本ID */
  ChildImageVersionId?: string | null;
  /** 集群镜像版本名字 */
  ImageVersionName?: string | null;
  /** 是否开启备集群 */
  StartStandbyCluster?: boolean | null;
  /** spark jar 包年包月集群是否开启弹性 */
  ElasticSwitch?: boolean | null;
  /** spark jar 包年包月集群弹性上限 */
  ElasticLimit?: number | null;
  /** 是否为默认引擎 */
  DefaultHouse?: boolean | null;
  /** 单个集群任务最大并发数 */
  MaxConcurrency?: number | null;
  /** 任务排队上限时间 */
  TolerableQueueTime?: number | null;
  /** 用户appid */
  UserAppId?: number | null;
  /** 用户uin */
  UserUin?: string | null;
  /** SessionResourceTemplate */
  SessionResourceTemplate?: SessionResourceTemplate | null;
  /** 自动授权开关 */
  AutoAuthorization?: boolean | null;
  /** 引擎版本，支持Native/SuperSQL */
  EngineGeneration?: string | null;
  /** 引擎详细类型，支持：SparkSQL/SparkBatch/PrestoSQL/Kyuubi */
  EngineTypeDetail?: string | null;
  /** 引擎网络ID */
  EngineNetworkId?: string | null;
  /** 标准引擎关联的资源组个数 */
  EngineResourceGroupCount?: number | null;
  /** 引擎当前使用量（Cu） */
  EngineResourceUsedCU?: number | null;
  /** 引擎的访问信息 */
  AccessInfos?: AccessInfo[] | null;
  /** 引擎所在网络名称 */
  EngineNetworkName?: string | null;
  /** 是否使用预留池 */
  IsPoolMode?: string | null;
  /** 是否支持AI，false: 不支持；true：支持 */
  IsSupportAI?: boolean | null;
  /** 网关id */
  GatewayId?: string | null;
  /** 网关状态 */
  GatewayState?: number | null;
  /** 是否能执行AI任务 */
  IsAIGateway?: boolean | null;
  /** 1:AI引擎，0:非AI引擎 */
  IsAIEngine?: number | null;
}

/** 引擎规格详情 */
declare interface DataEngineScaleInfo {
  /** 引擎ID */
  DataEngineId?: string;
  /** 引擎名称 */
  DataEngineName?: string;
  /** 引擎规格详情 */
  ScaleDetail?: DataEngineScaleInfoDetail[];
}

/** 引擎规格详情 */
declare interface DataEngineScaleInfoDetail {
  /** 统计开始时间，格式为：yyyy-MM-dd HH:mm:ss */
  StartTime?: string;
  /** 统计结束时间，格式为：yyyy-MM-dd HH:mm:ss */
  EndTime?: string;
  /** 当前统计时间段，引擎规格 */
  CU?: number;
}

/** 数据表数据格式。 */
declare interface DataFormat {
  /** 文本格式，TextFile。 */
  TextFile?: TextFile | null;
  /** 文本格式，CSV。 */
  CSV?: CSV | null;
  /** 文本格式，Json。 */
  Json?: Other | null;
  /** Parquet格式 */
  Parquet?: Other | null;
  /** ORC格式 */
  ORC?: Other | null;
  /** AVRO格式 */
  AVRO?: Other | null;
}

/** 数据治理规则 */
declare interface DataGovernPolicy {
  /** 治理规则类型，Customize: 自定义；Intelligence: 智能治理 */
  RuleType?: string | null;
  /** 治理引擎 */
  GovernEngine?: string | null;
}

/** 数据脱敏策略信息 */
declare interface DataMaskStrategyInfo {
  /** 策略名称 */
  StrategyName?: string | null;
  /** MASK_SHOW_FIRST_4; MASK_SHOW_LAST_4;MASK_HASH; MASK_DATE_SHOW_YEAR; MASK_NULL; MASK_DEFAULT 等 */
  StrategyType?: string | null;
  /** 策略描述 */
  StrategyDesc?: string | null;
  /** 用户组策略列表 */
  Groups?: GroupInfo[] | null;
  /** 用户子账号uin列表，按;拼接 */
  Users?: string | null;
  /** 策略Id */
  StrategyId?: string | null;
}

/** 数据源详细信息 */
declare interface DataSourceInfo {
  /** 数据源实例的唯一ID */
  InstanceId?: string | null;
  /** 数据源的名称 */
  InstanceName?: string | null;
  /** 数据源的JDBC访问链接 */
  JdbcUrl?: string | null;
  /** 用于访问数据源的用户名 */
  User?: string | null;
  /** 数据源访问密码，需要base64编码 */
  Password?: string | null;
  /** 数据源的VPC和子网信息 */
  Location?: DatasourceConnectionLocation | null;
  /** 默认数据库名 */
  DbName?: string | null;
}

/** 数据库对象 */
declare interface DatabaseInfo {
  /** 数据库名称，长度0~128，支持数字、字母下划线，不允许数字大头，统一转换为小写。 */
  DatabaseName: string;
  /** 数据库描述信息，长度 0~500。 */
  Comment?: string | null;
  /** 数据库属性列表。 */
  Properties?: Property[] | null;
  /** 数据库cos路径 */
  Location?: string | null;
}

/** 数据库对象 */
declare interface DatabaseResponseInfo {
  /** 数据库名称。 */
  DatabaseName?: string;
  /** 数据库描述信息，长度 0~256。 */
  Comment?: string | null;
  /** 允许针对数据库的属性元数据信息进行指定。 */
  Properties?: Property[] | null;
  /** 数据库创建时间戳，单位：s。 */
  CreateTime?: string | null;
  /** 数据库更新时间戳，单位：s。 */
  ModifiedTime?: string | null;
  /** cos存储路径 */
  Location?: string | null;
  /** 建库用户昵称 */
  UserAlias?: string | null;
  /** 建库用户ID */
  UserSubUin?: string | null;
  /** 数据治理配置项 */
  GovernPolicy?: DataGovernPolicy | null;
  /** 数据库ID（无效字段） */
  DatabaseId?: string | null;
}

/** 数据源属性 */
declare interface DatasourceConnectionConfig {
  /** Mysql数据源连接的属性 */
  Mysql?: MysqlInfo | null;
  /** Hive数据源连接的属性 */
  Hive?: HiveInfo | null;
  /** Kafka数据源连接的属性 */
  Kafka?: KafkaInfo | null;
  /** 其他数据源连接的属性 */
  OtherDatasourceConnection?: OtherDatasourceConnection | null;
  /** PostgreSQL数据源连接的属性 */
  PostgreSql?: DataSourceInfo | null;
  /** SQLServer数据源连接的属性 */
  SqlServer?: DataSourceInfo | null;
  /** ClickHouse数据源连接的属性 */
  ClickHouse?: DataSourceInfo | null;
  /** Elasticsearch数据源连接的属性 */
  Elasticsearch?: ElasticsearchInfo | null;
  /** TDSQL-PostgreSQL数据源连接的属性 */
  TDSQLPostgreSql?: DataSourceInfo | null;
  /** Doris数据源连接的属性 */
  TCHouseD?: TCHouseD | null;
}

/** 数据源信息 */
declare interface DatasourceConnectionInfo {
  /** 数据源数字Id */
  Id: number;
  /** 数据源字符串Id */
  DatasourceConnectionId: string;
  /** 数据源名称 */
  DatasourceConnectionName: string;
  /** 数据源描述 */
  DatasourceConnectionDesc: string;
  /** 数据源类型，支持DataLakeCatalog、IcebergCatalog、Result、Mysql、HiveCos、HiveHdfs */
  DatasourceConnectionType: string;
  /** 数据源属性 */
  DatasourceConnectionConfig: DatasourceConnectionConfig | null;
  /** 数据源状态：0（初始化）、1（成功）、-1（已删除）、-2（失败）、-3（删除中） */
  State: number;
  /** 地域 */
  Region: string;
  /** 用户AppId */
  AppId: string;
  /** 数据源创建时间 */
  CreateTime: string;
  /** 数据源最近一次更新时间 */
  UpdateTime: string;
  /** 数据源同步失败原因 */
  Message: string;
  /** 数据源绑定的计算引擎信息 */
  DataEngines?: DataEngineInfo[] | null;
  /** 创建人 */
  UserAlias?: string | null;
  /** 网络配置列表 */
  NetworkConnectionSet?: NetworkConnection[] | null;
  /** 连通性状态：0（未测试，默认）、1（正常）、2（失败） */
  ConnectivityState?: number | null;
  /** 连通性测试提示信息 */
  ConnectivityTips?: string | null;
}

/** 数据源连接的网络信息 */
declare interface DatasourceConnectionLocation {
  /** 数据连接所在Vpc实例Id，如“vpc-azd4dt1c”。 */
  VpcId: string;
  /** Vpc的IPv4 CIDR */
  VpcCidrBlock: string;
  /** 数据连接所在子网的实例Id，如“subnet-bthucmmy” */
  SubnetId: string;
  /** Subnet的IPv4 CIDR */
  SubnetCidrBlock: string;
}

/** Elasticsearch数据源的详细信息 */
declare interface ElasticsearchInfo {
  /** 数据源ID */
  InstanceId?: string | null;
  /** 数据源名称 */
  InstanceName?: string | null;
  /** 用户名 */
  User?: string | null;
  /** 密码，需要base64编码 */
  Password?: string | null;
  /** 数据源的VPC和子网信息 */
  Location?: DatasourceConnectionLocation | null;
  /** 默认数据库名称 */
  DbName?: string | null;
  /** 访问Elasticsearch的ip、端口信息 */
  ServiceInfo?: IpPortPair[] | null;
}

/** SQL语句对象 */
declare interface Execution {
  /** 自动生成SQL语句。 */
  SQL: string;
}

/** FavorInfo */
declare interface FavorInfo {
  /** 优先事项 */
  Priority?: number | null;
  /** Catalog名称 */
  Catalog?: string | null;
  /** DataBase名称 */
  DataBase?: string | null;
  /** Table名称 */
  Table?: string | null;
}

/** 查询列表过滤条件参数 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑或（OR）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** 数据脱敏用户组信息 */
declare interface GroupInfo {
  /** 用户组ID */
  WorkGroupId?: number | null;
  /** 策略类型 */
  StrategyType?: string | null;
}

/** hive类型数据源的信息 */
declare interface HiveInfo {
  /** hive metastore的地址 */
  MetaStoreUrl: string;
  /** hive数据源类型，代表数据储存的位置，COS或者HDFS */
  Type: string;
  /** 数据源所在的私有网络信息 */
  Location: DatasourceConnectionLocation;
  /** 如果类型为HDFS，需要传一个用户名 */
  User?: string;
  /** 如果类型为HDFS，需要选择是否高可用 */
  HighAvailability?: boolean;
  /** 如果类型为COS，需要填写COS桶连接 */
  BucketUrl?: string;
  /** json字符串。如果类型为HDFS，需要填写该字段 */
  HdfsProperties?: string;
  /** Hive的元数据库信息 */
  Mysql?: MysqlInfo | null;
  /** emr集群Id */
  InstanceId?: string | null;
  /** emr集群名称 */
  InstanceName?: string | null;
  /** EMR集群中hive组件的版本号 */
  HiveVersion?: string | null;
  /** Kerberos详细信息 */
  KerberosInfo?: KerberosInfo | null;
  /** 是否开启Kerberos */
  KerberosEnable?: boolean | null;
}

/** 集群事件日志 */
declare interface HouseEventsInfo {
  /** 事件时间 */
  Time?: string[] | null;
  /** 事件类型 */
  EventsAction?: string[] | null;
  /** 集群信息 */
  ClusterInfo?: string[] | null;
}

/** ip端口对信息 */
declare interface IpPortPair {
  /** ip信息 */
  Ip?: string | null;
  /** 端口信息 */
  Port?: number | null;
}

/** 日志详情 */
declare interface JobLogResult {
  /** 日志时间戳，毫秒 */
  Time?: number | null;
  /** 日志topic id */
  TopicId?: string | null;
  /** 日志topic name */
  TopicName?: string | null;
  /** 日志内容，json字符串 */
  LogJson?: string | null;
  /** 日志ID */
  PkgLogId?: string | null;
}

/** 配置格式 */
declare interface KVPair {
  /** 配置的key值 */
  Key: string;
  /** 配置的value值 */
  Value: string;
}

/** Kafka连接信息 */
declare interface KafkaInfo {
  /** kakfa实例Id */
  InstanceId: string;
  /** kakfa数据源的网络信息 */
  Location: DatasourceConnectionLocation;
}

/** Kerberos详细信息 */
declare interface KerberosInfo {
  /** Krb5Conf文件值 */
  Krb5Conf?: string;
  /** KeyTab文件值 */
  KeyTab?: string;
  /** 服务主体 */
  ServicePrincipal?: string;
}

/** LakeFileSystem使用的临时token */
declare interface LakeFileSystemToken {
  /** Token使用的临时密钥的ID */
  SecretId?: string;
  /** Token使用的临时密钥 */
  SecretKey?: string;
  /** Token信息 */
  Token?: string;
  /** 过期时间 */
  ExpiredTime?: number;
  /** 颁布时间 */
  IssueTime?: number;
}

/** 描述DLC托管存储基本信息 */
declare interface LakeFsInfo {
  /** 托管存储名称 */
  Name?: string;
  /** 托管存储类型 */
  Type?: string;
  /** 容量 */
  SpaceUsedSize?: number;
  /** 创建时候的时间戳 */
  CreateTimeStamp?: number;
  /** 是否是用户默认桶，0：默认桶，1：非默认桶 */
  DefaultBucket?: number | null;
  /** 托管存储short name */
  ShortName?: string | null;
  /** 桶描述信息 */
  Description?: string | null;
  /** 托管桶状态，当前取值为：creating、bind、readOnly、isolate */
  Status?: string | null;
}

/** 元数据加锁内容 */
declare interface LockComponentInfo {
  /** 数据库名称 */
  DbName: string;
  /** 表名称 */
  TableName?: string;
  /** 分区 */
  Partition?: string;
  /** 锁类型：SHARED_READ、SHARED_WRITE、EXCLUSIVE */
  LockType?: string;
  /** 锁级别：DB、TABLE、PARTITION */
  LockLevel?: string;
  /** 锁操作：SELECT,INSERT,UPDATE,DELETE,UNSET,NO_TXN */
  DataOperationType?: string;
  /** 是否保持Acid */
  IsAcid?: boolean;
  /** 是否动态分区写 */
  IsDynamicPartitionWrite?: boolean;
}

/** 绑定融合桶信息 */
declare interface MountPointAssociates {
  /** 桶Id */
  BucketId?: string | null;
  /** vpcId */
  VpcId?: string | null;
  /** 子网地址 */
  VpcCidrBlock?: string | null;
  /** 权限组Id */
  AccessGroupId?: string | null;
  /** 权限规则Id */
  AccessRuleId?: number | null;
}

/** Mysql类型数据源信息 */
declare interface MysqlInfo {
  /** 连接mysql的jdbc url */
  JdbcUrl: string;
  /** 用户名 */
  User: string;
  /** mysql密码 */
  Password: string;
  /** mysql数据源的网络信息 */
  Location: DatasourceConnectionLocation;
  /** 数据库名称 */
  DbName?: string;
  /** 数据库实例ID，和数据库侧保持一致 */
  InstanceId?: string | null;
  /** 数据库实例名称，和数据库侧保持一致 */
  InstanceName?: string | null;
}

/** 网络配置 */
declare interface NetworkConnection {
  /** 网络配置id */
  Id?: number | null;
  /** 网络配置唯一标志符 */
  AssociateId?: string | null;
  /** 计算引擎id */
  HouseId?: string | null;
  /** 数据源id(已废弃) */
  DatasourceConnectionId?: string | null;
  /** 网络配置状态（0-初始化，1-正常） */
  State?: number | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 修改时间 */
  UpdateTime?: number | null;
  /** 创建用户Appid */
  Appid?: number | null;
  /** 计算引擎名称 */
  HouseName?: string | null;
  /** 网络配置名称 */
  DatasourceConnectionName?: string | null;
  /** 网络配置类型 */
  NetworkConnectionType?: number | null;
  /** 创建用户uin */
  Uin?: string | null;
  /** 创建用户SubAccountUin */
  SubAccountUin?: string | null;
  /** 网络配置描述 */
  NetworkConnectionDesc?: string | null;
  /** 数据源vpcid */
  DatasourceConnectionVpcId?: string | null;
  /** 数据源SubnetId */
  DatasourceConnectionSubnetId?: string | null;
  /** 数据源SubnetId */
  DatasourceConnectionCidrBlock?: string | null;
  /** 数据源SubnetCidrBlock */
  DatasourceConnectionSubnetCidrBlock?: string | null;
}

/** Notebook Session详细信息。 */
declare interface NotebookSessionInfo {
  /** Session名称 */
  Name?: string;
  /** 类型，当前支持：spark、pyspark、sparkr、sql */
  Kind?: string;
  /** DLC Spark作业引擎名称 */
  DataEngineName?: string;
  /** Session相关配置，当前支持：eni、roleArn以及用户指定的配置 */
  Arguments?: KVPair[] | null;
  /** 运行程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentFiles?: string[] | null;
  /** 依赖的jar程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentJars?: string[] | null;
  /** 依赖的python程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentPython?: string[] | null;
  /** 依赖的pyspark虚拟环境地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramArchives?: string[] | null;
  /** 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  DriverSize?: string | null;
  /** 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  ExecutorSize?: string | null;
  /** 指定的Executor数量，默认为1 */
  ExecutorNumbers?: number | null;
  /** 代理用户，默认为root */
  ProxyUser?: string | null;
  /** 指定的Session超时时间，单位秒，默认3600秒 */
  TimeoutInSecond?: number | null;
  /** Spark任务返回的AppId */
  SparkAppId?: string | null;
  /** Session唯一标识 */
  SessionId?: string;
  /** Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止） */
  State?: string;
  /** Session创建时间 */
  CreateTime?: string;
  /** 其它信息 */
  AppInfo?: KVPair[] | null;
  /** Spark ui地址 */
  SparkUiUrl?: string | null;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers */
  ExecutorMaxNumbers?: number | null;
  /** session类型，group：资源组下session independent：独立资源session， 不依赖资源组 */
  SessionType?: string | null;
  /** 引擎id */
  DataEngineId?: string | null;
  /** 资源组id */
  ResourceGroupId?: string | null;
  /** 资源组名称 */
  ResourceGroupName?: string | null;
  /** session，pod大小 */
  PodSize?: number | null;
  /** pod数量 */
  PodNumbers?: number | null;
}

/** 按批提交Statement运行SQL任务。 */
declare interface NotebookSessionStatementBatchInformation {
  /** 任务详情列表 */
  NotebookSessionStatementBatch?: NotebookSessionStatementInfo[] | null;
  /** 当前批任务是否运行完成 */
  IsAvailable?: boolean | null;
  /** Session唯一标识 */
  SessionId?: string | null;
  /** Batch唯一标识 */
  BatchId?: string | null;
}

/** NotebookSessionStatement详情。 */
declare interface NotebookSessionStatementInfo {
  /** 完成时间戳 */
  Completed?: number;
  /** 开始时间戳 */
  Started?: number;
  /** 完成进度，百分制 */
  Progress?: number;
  /** Session Statement唯一标识 */
  StatementId?: string;
  /** Session Statement状态，包含：waiting（排队中）、running（运行中）、available（正常）、error（异常）、cancelling（取消中）、cancelled（已取消） */
  State?: string;
  /** Statement输出信息 */
  OutPut?: StatementOutput | null;
  /** 批任务id */
  BatchId?: string | null;
  /** 运行语句 */
  Code?: string;
  /** 任务ID */
  TaskId?: string;
}

/** notebook session列表信息。 */
declare interface NotebookSessions {
  /** 类型，当前支持：spark、pyspark、sparkr、sql */
  Kind?: string;
  /** Session唯一标识 */
  SessionId?: string;
  /** 代理用户，默认为root */
  ProxyUser?: string | null;
  /** Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止） */
  State?: string;
  /** Spark任务返回的AppId */
  SparkAppId?: string | null;
  /** Session名称 */
  Name?: string;
  /** Session创建时间 */
  CreateTime?: string;
  /** 引擎名称 */
  DataEngineName?: string;
  /** 最新的运行时间 */
  LastRunningTime?: string | null;
  /** 创建者 */
  Creator?: string;
  /** spark ui地址 */
  SparkUiUrl?: string | null;
  /** session类型，group：资源组session independent：独立资源session，不依赖资源组 */
  SessionType?: string | null;
  /** 引擎id */
  DataEngineId?: string | null;
  /** 资源组id */
  ResourceGroupId?: string | null;
  /** 资源组名字 */
  ResourceGroupName?: string | null;
}

/** 开通了第三方访问的用户信息 */
declare interface OpendThirdAccessUserInfo {
  /** id信息 */
  Id?: number | null;
  /** 用户主UIN */
  Uin?: string | null;
  /** 用户AppId */
  AppId?: string | null;
  /** 开通时间 */
  CreateTime?: string | null;
}

/** 数据格式其它类型。 */
declare interface Other {
  /** 枚举类型，默认值为Json，可选值为[Json, Parquet, ORC, AVRD]之一。 */
  Format?: string;
}

/** 非DLC产品CHDFS绑定 */
declare interface OtherCHDFSBinding {
  /** 产品名称 */
  ProductName?: string | null;
  /** 用户名称（该字段已废弃） */
  SuperUser?: string[] | null;
  /** vpc配置信息 */
  VpcInfo?: CHDFSProductVpcInfo[] | null;
  /** 是否与该桶绑定（该字段已废弃） */
  IsBind?: boolean | null;
}

/** 其他数据源 */
declare interface OtherDatasourceConnection {
  /** 网络参数 */
  Location: DatasourceConnectionLocation;
}

/** 数据表分块信息。 */
declare interface Partition {
  /** 分区列名。 */
  Name?: string;
  /** 分区类型。 */
  Type?: string;
  /** 对分区的描述。 */
  Comment?: string;
  /** 隐式分区转换策略 */
  Transform?: string | null;
  /** 转换策略参数 */
  TransformArgs?: string[] | null;
  /** 创建时间 */
  CreateTime?: number | null;
}

/** 权限对象 */
declare interface Policy {
  /** 需要授权的数据库名，填*代表当前Catalog下所有数据库。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定数据库。 */
  Database: string;
  /** 需要授权的数据源名称，管理员级别下只支持填*（代表该级别全部资源）；数据源级别和数据库级别鉴权的情况下，只支持填COSDataCatalog或者*；在数据表级别鉴权下可以填写用户自定义数据源。不填情况下默认为DataLakeCatalog。注意：如果是对用户自定义数据源进行鉴权，DLC能够管理的权限是用户接入数据源的时候提供的账户的子集。 */
  Catalog: string;
  /** 需要授权的表名，填*代表当前Database下所有表。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定数据表。 */
  Table: string;
  /** 授权的权限操作，对于不同级别的鉴权提供不同操作。管理员权限：ALL，不填默认为ALL；数据连接级鉴权：CREATE；数据库级别鉴权：ALL、CREATE、ALTER、DROP；数据表权限：ALL、SELECT、INSERT、ALTER、DELETE、DROP、UPDATE。注意：在数据表权限下，指定的数据源不为COSDataCatalog的时候，只支持SELECT操作。 */
  Operation: string;
  /** 授权类型，现在支持八种授权类型：ADMIN:管理员级别鉴权 DATASOURCE：数据连接级别鉴权 DATABASE：数据库级别鉴权 TABLE：表级别鉴权 VIEW：视图级别鉴权 FUNCTION：函数级别鉴权 COLUMN：列级别鉴权 ENGINE：数据引擎鉴权。不填默认为管理员级别鉴权。 */
  PolicyType?: string;
  /** 需要授权的函数名，填*代表当前Catalog下所有函数。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定函数。 */
  Function?: string | null;
  /** 需要授权的视图，填*代表当前Database下所有视图。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定视图。 */
  View?: string | null;
  /** 需要授权的列，填*代表当前所有列。当授权类型为管理员级别时，只允许填“*” */
  Column?: string | null;
  /** 需要授权的数据引擎，填*代表当前所有引擎。当授权类型为管理员级别时，只允许填“*” */
  DataEngine?: string | null;
  /** 用户是否可以进行二次授权。当为true的时候，被授权的用户可以将本次获取的权限再次授权给其他子用户。默认为false */
  ReAuth?: boolean | null;
  /** 权限来源，入参不填。USER：权限来自用户本身；WORKGROUP：权限来自绑定的工作组 */
  Source?: string | null;
  /** 授权模式，入参不填。COMMON：普通模式；SENIOR：高级模式。 */
  Mode?: string | null;
  /** 操作者，入参不填。 */
  Operator?: string | null;
  /** 权限创建的时间，入参不填 */
  CreateTime?: string | null;
  /** 权限所属工作组的ID，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。 */
  SourceId?: number | null;
  /** 权限所属工作组的名称，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。 */
  SourceName?: string | null;
  /** 策略ID */
  Id?: number | null;
  /** 引擎类型 */
  EngineGeneration?: string;
}

/** 策略集合 */
declare interface Policys {
  /** 策略集合 */
  PolicySet: Policy[] | null;
  /** 策略总数 */
  TotalCount: number | null;
}

/** Presto监控指标 */
declare interface PrestoMonitorMetrics {
  /** Alluxio本地缓存命中率 */
  LocalCacheHitRate?: number | null;
  /** Fragment缓存命中率 */
  FragmentCacheHitRate?: number | null;
}

/** 数据库和数据表属性信息 */
declare interface Property {
  /** 属性key名称。 */
  Key: string;
  /** 属性key对应的value。 */
  Value: string;
}

/** python-spark镜像信息。 */
declare interface PythonSparkImage {
  /** spark镜像唯一id */
  SparkImageId?: string;
  /** 集群小版本镜像id */
  ChildImageVersionId?: string;
  /** spark镜像名称 */
  SparkImageVersion?: string;
  /** spark镜像描述信息 */
  Description?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** ResourceInfo */
declare interface ResourceInfo {
  /** 归属类型 */
  AttributionType?: string | null;
  /** 资源类型 */
  ResourceType?: string | null;
  /** 引擎名称 */
  Name?: string | null;
  /** 如资源类型为spark-sql 取值为Name, 如为spark-batch 取值为session app_name */
  Instance?: string | null;
  /** 亲和性 */
  Favor?: FavorInfo[] | null;
  /** 状态 */
  Status?: number | null;
  /** 标准引擎资源组信息 */
  ResourceGroupName?: string | null;
}

/** SQL查询任务 */
declare interface SQLTask {
  /** base64加密后的SQL语句 */
  SQL: string;
  /** 任务的配置信息 */
  Config?: KVPair[];
}

/** script实例。 */
declare interface Script {
  /** 脚本Id，长度36字节。 */
  ScriptId?: string | null;
  /** 脚本名称，长度0-25。 */
  ScriptName?: string | null;
  /** 脚本描述，长度0-50。 */
  ScriptDesc?: string | null;
  /** 默认关联数据库。 */
  DatabaseName?: string | null;
  /** SQL描述，长度0-10000。 */
  SQLStatement?: string | null;
  /** 更新时间戳， 单位：ms。 */
  UpdateTime?: number | null;
}

/** Spark批作业集群Session资源配置模板； */
declare interface SessionResourceTemplate {
  /** driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge */
  DriverSize?: string | null;
  /** executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge */
  ExecutorSize?: string | null;
  /** 指定executor数量，最小值为1，最大值小于集群规格 */
  ExecutorNums?: number | null;
  /** 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums） */
  ExecutorMaxNumbers?: number | null;
}

/** 混合表中，change表的数据保存时间，单位为天 */
declare interface SmartOptimizerChangeTablePolicy {
  /** change表的数据保存时间，单位为天 */
  DataRetentionTime?: number | null;
}

/** SmartOptimizerIndexPolicy */
declare interface SmartOptimizerIndexPolicy {
  /** 开启索引 */
  IndexEnable?: string | null;
}

/** SmartOptimizerLifecyclePolicy */
declare interface SmartOptimizerLifecyclePolicy {
  /** 生命周期启用 */
  LifecycleEnable?: string | null;
  /** 过期时间 */
  Expiration?: number | null;
  /** 是否删表 */
  DropTable?: boolean | null;
  /** 过期字段 */
  ExpiredField?: string | null;
  /** 过期字段格式 */
  ExpiredFieldFormat?: string | null;
}

/** SmartOptimizerPolicy */
declare interface SmartOptimizerPolicy {
  /** 是否继承 */
  Inherit?: string | null;
  /** ResourceInfo */
  Resources?: ResourceInfo[] | null;
  /** SmartOptimizerWrittenPolicy */
  Written?: SmartOptimizerWrittenPolicy | null;
  /** SmartOptimizerLifecyclePolicy */
  Lifecycle?: SmartOptimizerLifecyclePolicy | null;
  /** SmartOptimizerIndexPolicy */
  Index?: SmartOptimizerIndexPolicy | null;
  /** SmartOptimizerChangeTablePolicy */
  ChangeTable?: SmartOptimizerChangeTablePolicy | null;
}

/** SmartOptimizerWrittenPolicy */
declare interface SmartOptimizerWrittenPolicy {
  /** none/enable/disable/default */
  WrittenEnable?: string | null;
}

/** SmartPolicyRequest */
declare interface SmartPolicy {
  /** 基础信息 */
  BaseInfo?: SmartPolicyBaseInfo | null;
  /** 策略描述 */
  Policy?: SmartOptimizerPolicy | null;
}

/** SmartPolicyBaseInfo */
declare interface SmartPolicyBaseInfo {
  /** 用户uin */
  Uin: string | null;
  /** Catalog/Database/Table */
  PolicyType?: string | null;
  /** Catalog名称 */
  Catalog?: string | null;
  /** 数据库名称 */
  Database?: string | null;
  /** 表名称 */
  Table?: string | null;
  /** 用户appid */
  AppId?: string | null;
}

/** spark作业详情。 */
declare interface SparkJobInfo {
  /** spark作业ID */
  JobId?: string;
  /** spark作业名 */
  JobName?: string;
  /** spark作业类型，可去1或者2，1表示batch作业， 2表示streaming作业 */
  JobType?: number;
  /** 引擎名 */
  DataEngine?: string;
  /** 该字段已下线，请使用字段Datasource */
  Eni?: string;
  /** 程序包是否本地上传，cos或者lakefs */
  IsLocal?: string;
  /** 程序包路径 */
  JobFile?: string;
  /** 角色ID */
  RoleArn?: number;
  /** spark作业运行主类 */
  MainClass?: string;
  /** 命令行参数，spark作业命令行参数，空格分隔 */
  CmdArgs?: string;
  /** spark原生配置，换行符分隔 */
  JobConf?: string;
  /** 依赖jars是否本地上传，cos或者lakefs */
  IsLocalJars?: string;
  /** spark作业依赖jars，逗号分隔 */
  JobJars?: string;
  /** 依赖文件是否本地上传，cos或者lakefs */
  IsLocalFiles?: string;
  /** spark作业依赖文件，逗号分隔 */
  JobFiles?: string;
  /** spark作业driver资源大小 */
  JobDriverSize?: string;
  /** spark作业executor资源大小 */
  JobExecutorSize?: string;
  /** spark作业executor个数 */
  JobExecutorNums?: number;
  /** spark流任务最大重试次数 */
  JobMaxAttempts?: number;
  /** spark作业创建者 */
  JobCreator?: string;
  /** spark作业创建时间 */
  JobCreateTime?: number;
  /** spark作业更新时间 */
  JobUpdateTime?: number;
  /** spark作业最近任务ID */
  CurrentTaskId?: string;
  /** spark作业最近运行状态，初始化：0，运行中：1，成功：2，数据写入中： 3， 排队中： 4， 失败： -1， 已删除： -3，已过期： -5 */
  JobStatus?: number;
  /** spark流作业统计 */
  StreamingStat?: StreamingStatistics | null;
  /** 数据源名 */
  DataSource?: string | null;
  /** pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalPythonFiles?: string | null;
  /** 注：该返回值已废弃 */
  AppPythonFiles?: string | null;
  /** archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalArchives?: string | null;
  /** archives：依赖资源 */
  JobArchives?: string | null;
  /** Spark Image 版本 */
  SparkImage?: string | null;
  /** pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔 */
  JobPythonFiles?: string | null;
  /** 当前job正在运行或准备运行的任务个数 */
  TaskNum?: number | null;
  /** 引擎状态：-100（默认：未知状态），-2~11：引擎正常状态； */
  DataEngineStatus?: number | null;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于JobExecutorNums */
  JobExecutorMaxNumbers?: number | null;
  /** 镜像版本 */
  SparkImageVersion?: string | null;
  /** 查询脚本关联id */
  SessionId?: string | null;
  /** spark_emr_livy */
  DataEngineClusterType?: string | null;
  /** Spark 3.2-EMR */
  DataEngineImageVersion?: string | null;
  /** 任务资源配置是否继承集群模板，0（默认）不继承，1：继承 */
  IsInherit?: number | null;
  /** 是否使用session脚本的sql运行任务：false：否，true：是 */
  IsSessionStarted?: boolean | null;
  /** 引擎详细类型：SparkSQL、PrestoSQL、SparkBatch、StandardSpark、StandardPresto */
  EngineTypeDetail?: string | null;
}

/** Spark监控数据 */
declare interface SparkMonitorMetrics {
  /** shuffle写溢出到COS数据量，单位：byte */
  ShuffleWriteBytesCos?: number | null;
  /** shuffle写数据量，单位：byte */
  ShuffleWriteBytesTotal?: number | null;
}

/** SparkSQL批任务运行日志 */
declare interface SparkSessionBatchLog {
  /** 日志步骤：BEG/CS/DS/DSS/DSF/FINF/RTO/CANCEL/CT/DT/DTS/DTF/FINT/EXCE */
  Step?: string | null;
  /** 时间 */
  Time?: string | null;
  /** 日志提示 */
  Message?: string | null;
  /** 日志操作 */
  Operate?: SparkSessionBatchLogOperate[] | null;
}

/** SparkSQL批任务日志操作信息。 */
declare interface SparkSessionBatchLogOperate {
  /** 操作提示 */
  Text?: string | null;
  /** 操作类型：COPY、LOG、UI、RESULT、List、TAB */
  Operate?: string | null;
  /** 补充信息：如：taskid、sessionid、sparkui等 */
  Supplement?: KVPair[] | null;
}

/** statement信息 */
declare interface StatementInformation {
  /** SQL任务唯一ID */
  TaskId?: string;
  /** SQL内容 */
  SQL?: string;
}

/** notebook session statement输出信息。 */
declare interface StatementOutput {
  /** 执行总数 */
  ExecutionCount?: number;
  /** Statement数据 */
  Data?: KVPair[] | null;
  /** Statement状态:ok,error */
  Status?: string;
  /** 错误名称 */
  ErrorName?: string;
  /** 错误类型 */
  ErrorValue?: string | null;
  /** 错误堆栈信息 */
  ErrorMessage?: string[] | null;
  /** SQL类型任务结果返回 */
  SQLResult?: string;
}

/** spark流任务统计信息 */
declare interface StreamingStatistics {
  /** 任务开始时间 */
  StartTime: string;
  /** 数据接收器数 */
  Receivers: number;
  /** 运行中的接收器数 */
  NumActiveReceivers: number;
  /** 不活跃的接收器数 */
  NumInactiveReceivers: number;
  /** 运行中的批数 */
  NumActiveBatches: number;
  /** 待处理的批数 */
  NumRetainedCompletedBatches: number;
  /** 已完成的批数 */
  NumTotalCompletedBatches: number;
  /** 平均输入速率 */
  AverageInputRate: number;
  /** 平均等待时长 */
  AverageSchedulingDelay: number;
  /** 平均处理时长 */
  AverageProcessingTime: number;
  /** 平均延时 */
  AverageTotalDelay: number;
}

/** Doirs数据源详细信息 */
declare interface TCHouseD {
  /** 数据源实例的唯一ID */
  InstanceId?: string | null;
  /** 数据源名称 */
  InstanceName?: string | null;
  /** 数据源的JDBC */
  JdbcUrl?: string | null;
  /** 用于访问数据源的用户 */
  User?: string | null;
  /** 数据源访问密码，需要base64编码 */
  Password?: string | null;
  /** 数据源的VPC和子网信息 */
  Location?: DatasourceConnectionLocation | null;
  /** 默认数据库名 */
  DbName?: string | null;
  /** 访问信息 */
  AccessInfo?: string | null;
}

/** 表字段描述信息 */
declare interface TColumn {
  /** 字段名称 */
  Name: string | null;
  /** 字段类型 */
  Type: string | null;
  /** 字段描述 */
  Comment?: string | null;
  /** 字段默认值 */
  Default?: string | null;
  /** 字段是否是非空 */
  NotNull?: boolean | null;
  /** 表示整个 numeric 的长度,取值1-38 */
  Precision?: number | null;
  /** 表示小数部分的长度Scale小于Precision */
  Scale?: number | null;
  /** 字段位置，小的在前 */
  Position?: number | null;
  /** 是否为分区字段 */
  IsPartition?: boolean | null;
}

/** 表分区字段信息 */
declare interface TPartition {
  /** 字段名称 */
  Name: string;
  /** 字段类型 */
  Type?: string;
  /** 字段描述 */
  Comment?: string;
  /** 分区类型（已废弃） */
  PartitionType?: string;
  /** 分区格式（已废弃） */
  PartitionFormat?: string;
  /** 分区分隔数（已废弃） */
  PartitionDot?: number;
  /** 分区转换策略 */
  Transform?: string;
  /** 策略参数 */
  TransformArgs?: string[];
}

/** 数据表配置信息 */
declare interface TableBaseInfo {
  /** 该数据表所属数据库名字 */
  DatabaseName: string;
  /** 数据表名字 */
  TableName: string;
  /** 该数据表所属数据源名字 */
  DatasourceConnectionName?: string | null;
  /** 该数据表备注 */
  TableComment?: string | null;
  /** 具体类型，表or视图 */
  Type?: string | null;
  /** 数据格式类型，hive，iceberg等 */
  TableFormat?: string | null;
  /** 建表用户昵称 */
  UserAlias?: string | null;
  /** 建表用户ID */
  UserSubUin?: string | null;
  /** 数据治理配置项 */
  GovernPolicy?: DataGovernPolicy | null;
  /** 库数据治理是否关闭，关闭：true，开启：false */
  DbGovernPolicyIsDisable?: string | null;
  /** 智能数据治理配置项 */
  SmartPolicy?: SmartPolicy | null;
  /** T-ICEBERG表的主键 */
  PrimaryKeys?: string[] | null;
}

/** 返回数据表的相关信息。 */
declare interface TableInfo {
  /** 数据表配置信息。 */
  TableBaseInfo: TableBaseInfo;
  /** 数据表格式。每次入参可选如下其一的KV结构，[TextFile，CSV，Json, Parquet, ORC, AVRD]。 */
  DataFormat: DataFormat;
  /** 数据表列信息。 */
  Columns: Column[];
  /** 数据表分块信息。 */
  Partitions: Partition[];
  /** 数据存储路径。当前仅支持cos路径，格式如下：cosn://bucket-name/filepath。 */
  Location: string;
}

/** 查询表信息对象 */
declare interface TableResponseInfo {
  /** 数据表基本信息。 */
  TableBaseInfo?: TableBaseInfo;
  /** 数据表列信息。 */
  Columns?: Column[] | null;
  /** 数据表分块信息。 */
  Partitions?: Partition[] | null;
  /** 数据存储路径。 */
  Location?: string | null;
  /** 数据表属性信息。 */
  Properties?: Property[] | null;
  /** 数据表更新时间, 单位: ms。 */
  ModifiedTime?: string | null;
  /** 数据表创建时间,单位: ms。 */
  CreateTime?: string | null;
  /** 数据格式。 */
  InputFormat?: string | null;
  /** 数据表存储大小（单位：Byte） */
  StorageSize?: number | null;
  /** 数据表行数 */
  RecordCount?: number | null;
  /** xxxx */
  MapMaterializedViewName?: string | null;
  /** 访问热点 */
  HeatValue?: number | null;
  /** InputFormat的缩写 */
  InputFormatShort?: string;
}

/** 标签对信息 */
declare interface TagInfo {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 任务类型，任务如SQL查询等。 */
declare interface Task {
  /** SQL查询任务 */
  SQLTask?: SQLTask;
  /** Spark SQL查询任务 */
  SparkSQLTask?: SQLTask;
}

/** 任务实例。 */
declare interface TaskResponseInfo {
  /** 任务所属Database的名称。 */
  DatabaseName?: string;
  /** 任务数据量。 */
  DataAmount?: number;
  /** 任务Id。 */
  Id?: string;
  /** 计算耗时，单位： ms */
  UsedTime?: number;
  /** 任务输出路径。 */
  OutputPath?: string;
  /** 任务创建时间。 */
  CreateTime?: string;
  /** 任务状态：0 初始化， 1 执行中， 2 执行成功，3 数据写入中，4 排队中。-1 执行失败，-3 已取消。 */
  State?: number;
  /** 任务SQL类型，DDL|DML等 */
  SQLType?: string;
  /** 任务SQL语句 */
  SQL?: string;
  /** 结果是否过期。 */
  ResultExpired?: boolean;
  /** 数据影响统计信息。 */
  RowAffectInfo?: string;
  /** 任务结果数据表。 */
  DataSet?: string | null;
  /** 失败信息, 例如：errorMessage。该字段已废弃。 */
  Error?: string;
  /** 任务执行进度num/100(%) */
  Percentage?: number;
  /** 任务执行输出信息。 */
  OutputMessage?: string;
  /** 执行SQL的引擎类型 */
  TaskType?: string;
  /** 任务进度明细 */
  ProgressDetail?: string | null;
  /** 任务结束时间 */
  UpdateTime?: string | null;
  /** 计算资源id */
  DataEngineId?: string | null;
  /** 执行sql的子uin */
  OperateUin?: string | null;
  /** 计算资源名字 */
  DataEngineName?: string | null;
  /** 导入类型是本地导入还是cos */
  InputType?: string | null;
  /** 导入配置 */
  InputConf?: string | null;
  /** 数据条数 */
  DataNumber?: number | null;
  /** 查询数据能不能下载 */
  CanDownload?: boolean | null;
  /** 用户别名 */
  UserAlias?: string | null;
  /** spark应用作业名 */
  SparkJobName?: string | null;
  /** spark应用作业Id */
  SparkJobId?: string | null;
  /** spark应用入口jar文件 */
  SparkJobFile?: string | null;
  /** spark ui url */
  UiUrl?: string | null;
  /** 任务耗时，单位： ms */
  TotalTime?: number | null;
  /** spark app job执行task的程序入口参数 */
  CmdArgs?: string | null;
  /** 集群镜像大版本名称 */
  ImageVersion?: string | null;
  /** driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge */
  DriverSize?: string | null;
  /** executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge */
  ExecutorSize?: string | null;
  /** 指定executor数量，最小值为1，最大值小于集群规格 */
  ExecutorNums?: number | null;
  /** 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums） */
  ExecutorMaxNumbers?: number | null;
  /** 任务公共指标数据 */
  CommonMetrics?: CommonMetrics | null;
  /** spark任务指标数据 */
  SparkMonitorMetrics?: SparkMonitorMetrics | null;
  /** presto任务指标数据 */
  PrestoMonitorMetrics?: PrestoMonitorMetrics | null;
  /** 结果文件格式：默认为csv */
  ResultFormat?: string | null;
  /** 引擎类型，SparkSQL：SparkSQL 引擎；SparkBatch：Spark作业引擎；PrestoSQL：Presto引擎 */
  EngineTypeDetail?: string | null;
  /** spark引擎资源组名称 */
  ResourceGroupName?: string | null;
}

/** 任务结果信息。 */
declare interface TaskResultInfo {
  /** 任务唯一ID */
  TaskId?: string;
  /** 数据源名称，当前任务执行时候选中的默认数据源 */
  DatasourceConnectionName?: string;
  /** 数据库名称，当前任务执行时候选中的默认数据库 */
  DatabaseName?: string;
  /** 当前执行的SQL，一个任务包含一个SQL */
  SQL?: string;
  /** 执行任务的类型，现在分为DDL、DML、DQL */
  SQLType?: string;
  /** 任务当前的状态，0：初始化 1：任务运行中 2：任务执行成功 3：数据写入中 4：排队中 -1：任务执行失败 -3：用户手动终止 。只有任务执行成功的情况下，才会返回任务执行的结果 */
  State?: number;
  /** 扫描的数据量，单位byte */
  DataAmount?: number;
  /** 计算耗时，单位： ms */
  UsedTime?: number;
  /** 任务结果输出的COS桶地址 */
  OutputPath?: string;
  /** 任务创建时间，时间戳 */
  CreateTime?: string;
  /** 任务执行信息，成功时返回success，失败时返回失败原因 */
  OutputMessage?: string;
  /** 被影响的行数 */
  RowAffectInfo?: string;
  /** 结果的schema信息 */
  ResultSchema?: Column[] | null;
  /** 结果信息，反转义后，外层数组的每个元素为一行数据 */
  ResultSet?: string;
  /** 分页信息，如果没有更多结果数据，nextToken为空 */
  NextToken?: string;
  /** 任务执行进度num/100(%) */
  Percentage?: number;
  /** 任务进度明细 */
  ProgressDetail?: string;
  /** 控制台展示格式。table：表格展示 text：文本展示 */
  DisplayFormat?: string;
  /** 任务耗时，单位： ms */
  TotalTime?: number;
  /** 获取结果消耗的时间 */
  QueryResultTime?: number;
}

/** 批量顺序执行任务集合 */
declare interface TasksInfo {
  /** 任务类型，SQLTask：SQL查询任务。SparkSQLTask：Spark SQL查询任务 */
  TaskType: string;
  /** 容错策略。Proceed：前面任务出错/取消后继续执行后面的任务。Terminate：前面的任务出错/取消之后终止后面任务的执行，后面的任务全部标记为已取消。 */
  FailureTolerance: string;
  /** base64加密后的SQL语句，用";"号分隔每个SQL语句，一次最多提交50个任务。严格按照前后顺序执行 */
  SQL: string;
  /** 任务的配置信息，当前仅支持SparkSQLTask任务。 */
  Config?: KVPair[];
  /** 任务的用户自定义参数信息 */
  Params?: KVPair[];
}

/** 任务概览 */
declare interface TasksOverview {
  /** 正在排队的任务个数 */
  TaskQueuedCount: number;
  /** 初始化的任务个数 */
  TaskInitCount: number;
  /** 正在执行的任务个数 */
  TaskRunningCount: number;
  /** 当前时间范围的总任务个数 */
  TotalTaskCount: number;
}

/** 文本格式 */
declare interface TextFile {
  /** 文本类型，本参数取值为TextFile。 */
  Format?: string;
  /** 处理文本用的正则表达式。 */
  Regex?: string | null;
}

/** 用户详细信息 */
declare interface UserDetailInfo {
  /** 用户Id */
  UserId?: string | null;
  /** 返回的信息类型，Group：返回的当前用户的工作组信息；DataAuth：返回的当前用户的数据权限信息；EngineAuth：返回的当前用户的引擎权限信息 */
  Type?: string | null;
  /** 用户类型：ADMIN：管理员 COMMON：一般用户 */
  UserType?: string | null;
  /** 用户描述信息 */
  UserDescription?: string | null;
  /** 数据权限信息集合 */
  DataPolicyInfo?: Policys | null;
  /** 引擎权限集合 */
  EnginePolicyInfo?: Policys | null;
  /** 绑定到该用户的工作组集合信息 */
  WorkGroupInfo?: WorkGroups | null;
  /** 用户别名 */
  UserAlias?: string | null;
  /** 行过滤集合 */
  RowFilterInfo?: Policys | null;
  /** 账号类型 */
  AccountType?: string | null;
}

/** 绑定到同一个工作组的用户Id的集合 */
declare interface UserIdSetOfWorkGroupId {
  /** 工作组Id */
  WorkGroupId: number;
  /** 用户Id集合，和CAM侧Uin匹配 */
  UserIds: string[];
}

/** 授权用户信息 */
declare interface UserInfo {
  /** 用户Id，和子用户uin相同 */
  UserId: string;
  /** 用户描述信息，方便区分不同用户 */
  UserDescription: string | null;
  /** 单独给用户绑定的权限集合 */
  PolicySet: Policy[] | null;
  /** 当前用户的创建者 */
  Creator: string;
  /** 创建时间，格式如2021-07-28 16:19:32 */
  CreateTime: string;
  /** 关联的工作组集合 */
  WorkGroupSet: WorkGroupMessage[] | null;
  /** 是否是主账号 */
  IsOwner: boolean | null;
  /** 用户类型。ADMIN：管理员 COMMON：普通用户。 */
  UserType: string | null;
  /** 用户别名 */
  UserAlias: string | null;
}

/** 用户部分信息 */
declare interface UserMessage {
  /** 用户Id，和CAM侧子用户Uin匹配 */
  UserId: string;
  /** 用户描述 */
  UserDescription: string | null;
  /** 当前用户的创建者 */
  Creator: string;
  /** 当前用户的创建时间，形如2021-07-28 16:19:32 */
  CreateTime: string;
  /** 用户别名 */
  UserAlias: string;
}

/** 用户角色 */
declare interface UserRole {
  /** 角色ID */
  RoleId?: number;
  /** 用户app ID */
  AppId?: string;
  /** 用户ID */
  Uin?: string;
  /** 角色权限 */
  Arn?: string;
  /** 最近修改时间戳 */
  ModifyTime?: number;
  /** 角色描述信息 */
  Desc?: string;
  /** 角色名称 */
  RoleName?: string | null;
  /** 创建者UIN */
  Creator?: string | null;
  /** cos授权路径列表 */
  CosPermissionList?: CosPermission[] | null;
  /** cam策略json */
  PermissionJson?: string | null;
}

/** 用户信息集合 */
declare interface Users {
  /** 用户信息集合 */
  UserSet: UserMessage[] | null;
  /** 用户总数 */
  TotalCount: number | null;
}

/** 视图基本配置信息 */
declare interface ViewBaseInfo {
  /** 该视图所属数据库名字 */
  DatabaseName: string;
  /** 视图名称 */
  ViewName: string;
  /** 视图创建人昵称 */
  UserAlias?: string;
  /** 视图创建人ID */
  UserSubUin?: string;
}

/** 查询视图信息对象 */
declare interface ViewResponseInfo {
  /** 视图基本信息。 */
  ViewBaseInfo?: ViewBaseInfo;
  /** 视图列信息。 */
  Columns?: Column[] | null;
  /** 视图属性信息。 */
  Properties?: Property[] | null;
  /** 视图创建时间。 */
  CreateTime?: string;
  /** 视图更新时间。 */
  ModifiedTime?: string;
}

/** VPC子网信息 */
declare interface VpcCidrBlock {
  /** 子网Id */
  CidrId?: string | null;
  /** 子网网段 */
  CidrAddr?: string | null;
}

/** vpc信息 */
declare interface VpcInfo {
  /** vpc Id */
  VpcId?: string | null;
  /** vpc子网 */
  VpcCidrBlock?: string | null;
  /** 规则Id */
  RuleId?: number | null;
  /** 权限组Id */
  AccessGroupId?: string | null;
}

/** 工作组详细信息 */
declare interface WorkGroupDetailInfo {
  /** 工作组Id */
  WorkGroupId?: number | null;
  /** 工作组名称 */
  WorkGroupName?: string | null;
  /** 包含的信息类型。User：用户信息；DataAuth：数据权限；EngineAuth:引擎权限 */
  Type?: string | null;
  /** 工作组上绑定的用户集合 */
  UserInfo?: Users | null;
  /** 数据权限集合 */
  DataPolicyInfo?: Policys | null;
  /** 引擎权限集合 */
  EnginePolicyInfo?: Policys | null;
  /** 工作组描述信息 */
  WorkGroupDescription?: string | null;
  /** 行过滤信息集合 */
  RowFilterInfo?: Policys | null;
  /** 数据目录权限集 */
  CatalogPolicyInfo?: Policy | null;
}

/** 同一个用户绑定的工作组集合 */
declare interface WorkGroupIdSetOfUserId {
  /** 用户Id，和CAM侧Uin匹配 */
  UserId: string;
  /** 工作组Id集合 */
  WorkGroupIds: number[];
}

/** 工作组信息 */
declare interface WorkGroupInfo {
  /** 查询到的工作组唯一Id */
  WorkGroupId?: number;
  /** 工作组名称 */
  WorkGroupName?: string;
  /** 工作组描述 */
  WorkGroupDescription?: string | null;
  /** 工作组关联的用户数量 */
  UserNum?: number;
  /** 工作组关联的用户集合 */
  UserSet?: UserMessage[] | null;
  /** 工作组绑定的权限集合 */
  PolicySet?: Policy[] | null;
  /** 工作组的创建人 */
  Creator?: string;
  /** 工作组的创建时间，形如2021-07-28 16:19:32 */
  CreateTime?: string;
}

/** 工作组部分信息 */
declare interface WorkGroupMessage {
  /** 工作组唯一Id */
  WorkGroupId?: number;
  /** 工作组名称 */
  WorkGroupName?: string;
  /** 工作组描述 */
  WorkGroupDescription?: string | null;
  /** 创建者 */
  Creator?: string;
  /** 工作组创建的时间，形如2021-07-28 16:19:32 */
  CreateTime?: string;
}

/** 工作组集合 */
declare interface WorkGroups {
  /** 工作组信息集合 */
  WorkGroupSet: WorkGroupMessage[] | null;
  /** 工作组总数 */
  TotalCount: number | null;
}

declare interface AddDMSPartitionsRequest {
  /** 分区 */
  Partitions?: DMSPartition[];
}

declare interface AddDMSPartitionsResponse {
  /** 成功数量 */
  Total?: number;
  /** 分区值 */
  Partitions?: DMSPartition[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddOptimizerEnginesRequest {
}

declare interface AddOptimizerEnginesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddUsersToWorkGroupRequest {
  /** 要操作的工作组和用户信息 */
  AddInfo: UserIdSetOfWorkGroupId;
}

declare interface AddUsersToWorkGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AlterDMSDatabaseRequest {
  /** 当前名称 */
  CurrentName?: string;
  /** schema名称 */
  SchemaName?: string;
  /** 路径 */
  Location?: string;
  /** 基础对象 */
  Asset?: Asset;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface AlterDMSDatabaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AlterDMSPartitionRequest {
  /** 当前名称，变更前db名称 */
  CurrentDbName: string;
  /** 当前名称，变更前table名称 */
  CurrentTableName: string;
  /** 当前名称，变更前Part名称 */
  CurrentValues: string;
  /** 分区 */
  Partition?: DMSPartition;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface AlterDMSPartitionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AlterDMSTableRequest {
  /** 当前名称 */
  CurrentName: string;
  /** 当前数据库名称 */
  CurrentDbName: string;
  /** 基础对象 */
  Asset?: Asset;
  /** 表类型 */
  Type?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 存储大小 */
  StorageSize?: number;
  /** 记录数量 */
  RecordCount?: number;
  /** 生命周期 */
  LifeTime?: number;
  /** 数据更新时间 */
  DataUpdateTime?: string;
  /** 结构更新时间 */
  StructUpdateTime?: string;
  /** 最后访问时间 */
  LastAccessTime?: string;
  /** 存储对象 */
  Sds?: DMSSds;
  /** 列 */
  Columns?: DMSColumn[];
  /** 分区键值 */
  PartitionKeys?: DMSColumn[];
  /** 视图文本 */
  ViewOriginalText?: string;
  /** 视图文本 */
  ViewExpandedText?: string;
  /** 分区 */
  Partitions?: DMSPartition[];
  /** 当前表名 */
  Name?: string;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface AlterDMSTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignMangedTablePropertiesRequest {
  /** 表基本信息 */
  TableBaseInfo: TableBaseInfo;
  /** 表字段信息 */
  Columns: TColumn[];
  /** 表分区信息 */
  Partitions?: TPartition[];
  /** 表属性信息 */
  Properties?: Property[];
  /** V2 upsert表 upsert键 */
  UpsertKeys?: string[];
}

declare interface AssignMangedTablePropertiesResponse {
  /** 分配的原生表表属性 */
  Properties?: Property[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachUserPolicyRequest {
  /** 用户Id，和子用户uin相同，需要先使用CreateUser接口创建用户。可以使用DescribeUsers接口查看。 */
  UserId: string;
  /** 鉴权策略集合 */
  PolicySet?: Policy[];
}

declare interface AttachUserPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachWorkGroupPolicyRequest {
  /** 工作组Id */
  WorkGroupId: number;
  /** 要绑定的策略集合 */
  PolicySet?: Policy[];
}

declare interface AttachWorkGroupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindWorkGroupsToUserRequest {
  /** 绑定的用户和工作组信息 */
  AddInfo: WorkGroupIdSetOfUserId;
}

declare interface BindWorkGroupsToUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelNotebookSessionStatementBatchRequest {
  /** Session唯一标识 */
  SessionId: string;
  /** 批任务唯一标识 */
  BatchId: string;
}

declare interface CancelNotebookSessionStatementBatchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelNotebookSessionStatementRequest {
  /** Session唯一标识 */
  SessionId: string;
  /** Session Statement唯一标识 */
  StatementId: string;
}

declare interface CancelNotebookSessionStatementResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelSparkSessionBatchSQLRequest {
  /** 批任务唯一标识 */
  BatchId: string;
  /** 用户自定义主键，若不为空，则使用该值进行查询 */
  CustomKey?: string;
}

declare interface CancelSparkSessionBatchSQLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelTaskRequest {
  /** 任务Id，全局唯一 */
  TaskId: string;
}

declare interface CancelTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckDataEngineConfigPairsValidityRequest {
  /** 引擎小版本ID */
  ChildImageVersionId?: string;
  /** 用户自定义参数 */
  DataEngineConfigPairs?: DataEngineConfigPair[];
  /** 引擎大版本ID，存在小版本ID时仅需传入小版本ID，不存在时会获取当前大版本下最新的小版本ID。 */
  ImageVersionId?: string;
}

declare interface CheckDataEngineConfigPairsValidityResponse {
  /** 参数有效性：ture:有效，false:至少存在一个无效参数； */
  IsAvailable?: boolean;
  /** 无效参数集合 */
  UnavailableConfig?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckDataEngineImageCanBeRollbackRequest {
  /** 引擎唯一id */
  DataEngineId: string;
}

declare interface CheckDataEngineImageCanBeRollbackResponse {
  /** 回滚后日志记录id */
  ToRecordId?: string;
  /** 回滚前日志记录id */
  FromRecordId?: string;
  /** 是否能够回滚 */
  IsRollback?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckDataEngineImageCanBeUpgradeRequest {
  /** 集群id */
  DataEngineId: string;
}

declare interface CheckDataEngineImageCanBeUpgradeResponse {
  /** 当前大版本下，可升级的集群镜像小版本id */
  ChildImageVersionId?: string;
  /** 是否能够升级 */
  IsUpgrade?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckLockMetaDataRequest {
  /** 锁ID */
  LockId: number;
  /** 数据源名称 */
  DatasourceConnectionName?: string;
  /** 事务ID */
  TxnId?: number;
  /** 过期时间ms */
  ElapsedMs?: number;
}

declare interface CheckLockMetaDataResponse {
  /** 锁ID */
  LockId?: number;
  /** 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED */
  LockState?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCHDFSBindingProductRequest {
  /** 需要绑定的元数据加速桶名 */
  MountPoint: string;
  /** 桶的类型，分为cos和lakefs */
  BucketType: string;
  /** 产品名称 */
  ProductName: string;
  /** 引擎名称，ProductName选择DLC产品时，必传此参数。其他产品可不传 */
  EngineName?: string;
  /** vpc信息，产品名称为other时必传此参数 */
  VpcInfo?: VpcInfo[];
}

declare interface CreateCHDFSBindingProductResponse {
  /** 绑定信息 */
  MountPointAssociates?: MountPointAssociates[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDMSDatabaseRequest {
  /** 基础元数据对象 */
  Asset?: Asset;
  /** Schema目录 */
  SchemaName?: string;
  /** Db存储路径 */
  Location?: string;
  /** 数据库名称 */
  Name?: string;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface CreateDMSDatabaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDMSTableRequest {
  /** 基础对象 */
  Asset?: Asset;
  /** 表类型：EXTERNAL_TABLE, VIRTUAL_VIEW, MATERIALIZED_VIEW */
  Type?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 存储大小 */
  StorageSize?: number;
  /** 记录数量 */
  RecordCount?: number;
  /** 生命周期 */
  LifeTime?: number;
  /** 数据更新时间 */
  DataUpdateTime?: string;
  /** 结构更新时间 */
  StructUpdateTime?: string;
  /** 最后访问时间 */
  LastAccessTime?: string;
  /** 存储对象 */
  Sds?: DMSSds;
  /** 列 */
  Columns?: DMSColumn[];
  /** 分区键值 */
  PartitionKeys?: DMSColumn[];
  /** 视图文本 */
  ViewOriginalText?: string;
  /** 视图文本 */
  ViewExpandedText?: string;
  /** 分区 */
  Partitions?: DMSPartition[];
  /** 表名称 */
  Name?: string;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface CreateDMSTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataEngineRequest {
  /** 引擎类型spark/presto */
  EngineType: string;
  /** 虚拟集群名称 */
  DataEngineName: string;
  /** 集群类型 spark_private/presto_private/presto_cu/spark_cu */
  ClusterType: string;
  /** 计费模式 0=共享模式 1=按量计费 2=包年包月 */
  Mode: number;
  /** 是否自动启动集群 */
  AutoResume: boolean;
  /** 最小资源 */
  MinClusters?: number;
  /** 最大资源 */
  MaxClusters?: number;
  /** 是否为默认虚拟集群 */
  DefaultDataEngine?: boolean;
  /** VPC网段 */
  CidrBlock?: string;
  /** 描述信息 */
  Message?: string;
  /** 集群规模 */
  Size?: number;
  /** 计费类型，后付费：0，预付费：1。当前只支持后付费，不填默认为后付费。 */
  PayMode?: number;
  /** 资源使用时长，后付费：固定填3600，预付费：最少填1，代表购买资源一个月，最长不超过120。默认1 */
  TimeSpan?: number;
  /** 资源使用时长的单位，后付费：s，预付费：m。默认为s */
  TimeUnit?: string;
  /** 资源的自动续费标志。后付费无需续费，固定填0；预付费下：0表示手动续费、1代表自动续费、2代表不续费，在0下如果是大客户，会自动帮大客户续费。默认为0 */
  AutoRenew?: number;
  /** 创建资源的时候需要绑定的标签信息 */
  Tags?: TagInfo[];
  /** 是否自定挂起集群：false（默认）：不自动挂起、true：自动挂起 */
  AutoSuspend?: boolean;
  /** 定时启停集群策略：0（默认）：关闭定时策略、1：开启定时策略（注：定时启停策略与自动挂起策略互斥） */
  CrontabResumeSuspend?: number;
  /** 定时启停策略，复杂类型：包含启停时间、挂起集群策略 */
  CrontabResumeSuspendStrategy?: CrontabResumeSuspendStrategy;
  /** 引擎执行任务类型，有效值：SQL/BATCH，默认为SQL */
  EngineExecType?: string;
  /** 单个集群最大并发任务数，默认5 */
  MaxConcurrency?: number;
  /** 可容忍的排队时间，默认0。当任务排队的时间超过可容忍的时间时可能会触发扩容。如果该参数为0，则表示一旦有任务排队就可能立即触发扩容。 */
  TolerableQueueTime?: number;
  /** 集群自动挂起时间，默认10分钟 */
  AutoSuspendTime?: number;
  /** 资源类型。Standard_CU：标准型；Memory_CU：内存型 */
  ResourceType?: string;
  /** 集群高级配置 */
  DataEngineConfigPairs?: DataEngineConfigPair[];
  /** 集群镜像版本名字。如SuperSQL-P 1.1;SuperSQL-S 3.2等,不传，默认创建最新镜像版本的集群 */
  ImageVersionName?: string;
  /** 主集群名称，创建容灾集群时指定 */
  MainClusterName?: string;
  /** spark jar 包年包月集群是否开启弹性 */
  ElasticSwitch?: boolean;
  /** spark jar 包年包月集群弹性上限 */
  ElasticLimit?: number;
  /** spark作业集群session资源配置模板 */
  SessionResourceTemplate?: SessionResourceTemplate;
  /** 自动授权 */
  AutoAuthorization?: boolean;
  /** 引擎网络ID */
  EngineNetworkId?: string;
  /** 引擎世代，SuperSQL：代表supersql引擎，Native：代表标准引擎。默认值为SuperSQL */
  EngineGeneration?: string;
}

declare interface CreateDataEngineResponse {
  /** 虚拟引擎id */
  DataEngineId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDatabaseRequest {
  /** 数据库基础信息 */
  DatabaseInfo: DatabaseInfo;
  /** 数据源名称，默认为DataLakeCatalog */
  DatasourceConnectionName?: string;
}

declare interface CreateDatabaseResponse {
  /** 生成的建库执行语句对象。 */
  Execution?: Execution;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExportTaskRequest {
  /** 数据来源，lakefsStorage、taskResult */
  InputType: string;
  /** 导出任务输入配置 */
  InputConf: KVPair[];
  /** 导出任务输出配置 */
  OutputConf: KVPair[];
  /** 目标数据源的类型，目前支持导出到cos */
  OutputType?: string;
}

declare interface CreateExportTaskResponse {
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImportTaskRequest {
  /** 数据来源，cos */
  InputType: string;
  /** 输入配置 */
  InputConf: KVPair[];
  /** 输出配置 */
  OutputConf: KVPair[];
  /** 目标数据源的类型，目前支持导入到托管存储，即lakefsStorage */
  OutputType?: string;
}

declare interface CreateImportTaskResponse {
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInternalTableRequest {
  /** 表基本信息 */
  TableBaseInfo: TableBaseInfo;
  /** 表字段信息 */
  Columns: TColumn[];
  /** 表分区信息 */
  Partitions?: TPartition[];
  /** 表属性信息 */
  Properties?: Property[];
}

declare interface CreateInternalTableResponse {
  /** 创建托管存储内表sql语句描述 */
  Execution?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNotebookSessionRequest {
  /** Session名称 */
  Name: string;
  /** 类型，当前支持：spark、pyspark、sparkr、sql */
  Kind: string;
  /** DLC Spark作业引擎名称 */
  DataEngineName: string;
  /** session文件地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentFiles?: string[];
  /** 依赖的jar程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentJars?: string[];
  /** 依赖的python程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentPython?: string[];
  /** 依赖的pyspark虚拟环境地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramArchives?: string[];
  /** 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  DriverSize?: string;
  /** 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  ExecutorSize?: string;
  /** 指定的Executor数量，默认为1 */
  ExecutorNumbers?: number;
  /** Session相关配置，当前支持：1. dlc.eni: 用户配置的eni网关信息，可以通过该字段设置；2. dlc.role.arn: 用户配置的roleArn鉴权策略配置信息，可以通过该字段设置；3. dlc.sql.set.config: 用户配置的集群配置信息，可以通过该字段设置； */
  Arguments?: KVPair[];
  /** 代理用户，默认为root */
  ProxyUser?: string;
  /** 指定的Session超时时间，单位秒，默认3600秒 */
  TimeoutInSecond?: number;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers */
  ExecutorMaxNumbers?: number;
  /** 指定spark版本名称，当前任务使用该spark镜像运行 */
  SparkImage?: string;
  /** 是否继承集群的资源类配置：0：自定义（默认），1：继承集群； */
  IsInherit?: number;
}

declare interface CreateNotebookSessionResponse {
  /** Session唯一标识 */
  SessionId?: string;
  /** Spark任务返回的AppId */
  SparkAppId?: string | null;
  /** Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止） */
  State?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNotebookSessionStatementRequest {
  /** Session唯一标识 */
  SessionId: string;
  /** 执行的代码 */
  Code: string;
  /** 类型，当前支持：spark、pyspark、sparkr、sql */
  Kind: string;
}

declare interface CreateNotebookSessionStatementResponse {
  /** Session Statement详情 */
  NotebookSessionStatement?: NotebookSessionStatementInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNotebookSessionStatementSupportBatchSQLRequest {
  /** Session唯一标识 */
  SessionId: string;
  /** 执行的代码 */
  Code: string;
  /** 类型，当前支持：sql */
  Kind: string;
  /** 是否保存运行结果 */
  SaveResult: boolean;
}

declare interface CreateNotebookSessionStatementSupportBatchSQLResponse {
  /** Session Statement详情 */
  NotebookSessionStatementBatches?: NotebookSessionStatementBatchInformation;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResultDownloadRequest {
  /** 查询结果任务Id */
  TaskId: string;
  /** 下载格式 */
  Format: string;
  /** 是否重新生成下载文件，仅当之前任务状态为 timeout | error 时有效 */
  Force?: boolean;
}

declare interface CreateResultDownloadResponse {
  /** 下载任务Id */
  DownloadId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScriptRequest {
  /** 脚本名称，最大不能超过255个字符。 */
  ScriptName: string;
  /** base64编码后的sql语句 */
  SQLStatement: string;
  /** 脚本描述， 不能超过50个字符 */
  ScriptDesc?: string;
  /** 数据库名称 */
  DatabaseName?: string;
}

declare interface CreateScriptResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSparkAppRequest {
  /** spark作业名 */
  AppName: string;
  /** spark作业类型，1代表spark jar作业，2代表spark streaming作业 */
  AppType: number;
  /** 执行spark作业的数据引擎名称 */
  DataEngine: string;
  /** spark作业程序包文件路径 */
  AppFile: string;
  /** 数据访问策略，CAM Role arn，控制台通过数据作业—>作业配置获取，SDK通过DescribeUserRoles接口获取对应的值； */
  RoleArn: number;
  /** 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  AppDriverSize: string;
  /** 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  AppExecutorSize: string;
  /** spark作业executor个数 */
  AppExecutorNums: number;
  /** 该字段已下线，请使用字段Datasource */
  Eni?: string;
  /** spark作业程序包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocal?: string;
  /** spark作业主类 */
  MainClass?: string;
  /** spark配置，以换行符分隔 */
  AppConf?: string;
  /** spark 作业依赖jar包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalJars?: string;
  /** spark 作业依赖jar包（--jars），以逗号分隔 */
  AppJars?: string;
  /** spark作业依赖文件资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalFiles?: string;
  /** spark作业依赖文件资源（--files）（非jar、zip），以逗号分隔 */
  AppFiles?: string;
  /** spark作业程序入参，空格分割 */
  CmdArgs?: string;
  /** 最大重试次数，只对spark流任务生效 */
  MaxRetries?: number;
  /** 数据源名称 */
  DataSource?: string;
  /** pyspark：依赖上传方式，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalPythonFiles?: string;
  /** pyspark作业依赖python资源（--py-files），支持py/zip/egg等归档格式，多文件以逗号分隔 */
  AppPythonFiles?: string;
  /** spark作业依赖archives资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalArchives?: string;
  /** spark作业依赖archives资源（--archives），支持tar.gz/tgz/tar等归档格式，以逗号分隔 */
  AppArchives?: string;
  /** Spark Image 版本号 */
  SparkImage?: string;
  /** Spark Image 版本名称 */
  SparkImageVersion?: string;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums */
  AppExecutorMaxNumbers?: number;
  /** 关联dlc查询脚本id */
  SessionId?: string;
  /** 任务资源配置是否继承集群模板，0（默认）不继承，1：继承 */
  IsInherit?: number;
  /** 是否使用session脚本的sql运行任务：false：否，true：是 */
  IsSessionStarted?: boolean;
}

declare interface CreateSparkAppResponse {
  /** App唯一标识 */
  SparkAppId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSparkAppTaskRequest {
  /** spark作业名 */
  JobName: string;
  /** spark作业程序入参，以空格分隔；一般用于周期性调用使用 */
  CmdArgs?: string;
  /** 任务来源信息 */
  SourceInfo?: KVPair[];
}

declare interface CreateSparkAppTaskResponse {
  /** 批Id */
  BatchId?: string;
  /** 任务Id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSparkSessionBatchSQLRequest {
  /** DLC Spark作业引擎名称 */
  DataEngineName: string;
  /** 运行sql，需要base64编码。 */
  ExecuteSQL: string;
  /** 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  DriverSize?: string;
  /** 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  ExecutorSize?: string;
  /** 指定的Executor数量，默认为1 */
  ExecutorNumbers?: number;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers */
  ExecutorMaxNumbers?: number;
  /** 指定的Session超时时间，单位秒，默认3600秒 */
  TimeoutInSecond?: number;
  /** Session唯一标识，当指定sessionid，则使用该session运行任务。 */
  SessionId?: string;
  /** 指定要创建的session名称 */
  SessionName?: string;
  /** Session相关配置，当前支持：1.dlc.eni：用户配置的eni网关信息，可以用过该字段设置；2.dlc.role.arn：用户配置的roleArn鉴权策略配置信息，可以用过该字段设置；3.dlc.sql.set.config：用户配置的集群配置信息，可以用过该字段设置； */
  Arguments?: KVPair[];
  /** 是否继承集群的资源类配置：0：不继承（默认），1：继承集群； */
  IsInherit?: number;
  /** 用户自定义主键，需唯一 */
  CustomKey?: string;
  /** 任务来源信息 */
  SourceInfo?: KVPair[];
}

declare interface CreateSparkSessionBatchSQLResponse {
  /** 批任务唯一标识 */
  BatchId?: string;
  /** Statement任务列表信息 */
  Statements?: StatementInformation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStoreLocationRequest {
  /** 计算结果存储cos路径，如：cosn://bucketname/ */
  StoreLocation: string;
}

declare interface CreateStoreLocationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTableRequest {
  /** 数据表配置信息 */
  TableInfo: TableInfo;
}

declare interface CreateTableResponse {
  /** 生成的建表执行语句对象。 */
  Execution?: Execution;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskRequest {
  /** 计算任务，该参数中包含任务类型及其相关配置信息 */
  Task: Task;
  /** 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。 */
  DatabaseName?: string;
  /** 默认数据源名称。 */
  DatasourceConnectionName?: string;
  /** 数据引擎名称，不填提交到默认集群 */
  DataEngineName?: string;
  /** 标准spark执行任务resourceGroupName */
  ResourceGroupName?: string;
  /** 任务来源信息 */
  SourceInfo?: KVPair[];
}

declare interface CreateTaskResponse {
  /** 任务ID */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTasksInOrderRequest {
  /** 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库。 */
  DatabaseName: string;
  /** SQL任务信息 */
  Tasks: TasksInfo;
  /** 数据源名称，默认为COSDataCatalog */
  DatasourceConnectionName?: string;
}

declare interface CreateTasksInOrderResponse {
  /** 本批次提交的任务的批次Id */
  BatchId: string;
  /** 任务Id集合，按照执行顺序排列 */
  TaskIdSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTasksRequest {
  /** 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。 */
  DatabaseName: string;
  /** SQL任务信息 */
  Tasks: TasksInfo;
  /** 数据源名称，默认为DataLakeCatalog */
  DatasourceConnectionName?: string;
  /** 计算引擎名称，不填任务提交到默认集群 */
  DataEngineName?: string;
  /** spark集群资源组名称 */
  ResourceGroupName?: string;
  /** 是否使用multi- statement方式运行一批次任务，true: 是，false: 否 */
  IsMultiStatement?: boolean;
  /** 任务来源信息 */
  SourceInfo?: KVPair[];
}

declare interface CreateTasksResponse {
  /** 本批次提交的任务的批次Id */
  BatchId?: string;
  /** 任务Id集合，按照执行顺序排列 */
  TaskIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserRequest {
  /** 需要授权的子用户uin，可以通过腾讯云控制台右上角 → “账号信息” → “账号ID进行查看”。 */
  UserId: string;
  /** 用户描述信息，方便区分不同用户 */
  UserDescription?: string;
  /** 绑定到用户的权限集合 */
  PolicySet?: Policy[];
  /** 用户类型。ADMIN：管理员 COMMON：一般用户。当用户类型为管理员的时候，不能设置权限集合和绑定的工作组集合，管理员默认拥有所有权限。该参数不填默认为COMMON */
  UserType?: string;
  /** 绑定到用户的工作组ID集合。 */
  WorkGroupIds?: number[];
  /** 用户别名，字符长度小50 */
  UserAlias?: string;
}

declare interface CreateUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkGroupRequest {
  /** 工作组名称 */
  WorkGroupName: string;
  /** 工作组描述 */
  WorkGroupDescription?: string;
  /** 工作组绑定的鉴权策略集合 */
  PolicySet?: Policy[];
  /** 需要绑定到工作组的用户Id集合 */
  UserIds?: string[];
}

declare interface CreateWorkGroupResponse {
  /** 工作组Id，全局唯一 */
  WorkGroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCHDFSBindingProductRequest {
  /** 需要解绑的元数据加速桶名 */
  MountPoint: string;
  /** 桶的类型，分为cos和lakefs */
  BucketType: string;
  /** 产品名称 */
  ProductName: string;
  /** 引擎名称，ProductName选择DLC产品时，必传此参数。其他产品可不传 */
  EngineName?: string;
  /** vpc信息，ProductName选择other时，必传此参数 */
  VpcInfo?: VpcInfo[];
}

declare interface DeleteCHDFSBindingProductResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDataEngineRequest {
  /** 删除虚拟集群的名称数组 */
  DataEngineNames: string[];
}

declare interface DeleteDataEngineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNotebookSessionRequest {
  /** Session唯一标识 */
  SessionId: string;
}

declare interface DeleteNotebookSessionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScriptRequest {
  /** 脚本id，其可以通过DescribeScripts接口提取 */
  ScriptIds: string[];
}

declare interface DeleteScriptResponse {
  /** 删除的脚本数量 */
  ScriptsAffected: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSparkAppRequest {
  /** spark作业名 */
  AppName: string;
}

declare interface DeleteSparkAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTableRequest {
  /** 表基本信息 */
  TableBaseInfo: TableBaseInfo;
}

declare interface DeleteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteThirdPartyAccessUserRequest {
}

declare interface DeleteThirdPartyAccessUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserRequest {
  /** 需要删除的用户的Id */
  UserIds: string[];
}

declare interface DeleteUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUsersFromWorkGroupRequest {
  /** 要删除的用户信息 */
  AddInfo: UserIdSetOfWorkGroupId;
}

declare interface DeleteUsersFromWorkGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkGroupRequest {
  /** 要删除的工作组Id集合 */
  WorkGroupIds: number[];
}

declare interface DeleteWorkGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAdvancedStoreLocationRequest {
}

declare interface DescribeAdvancedStoreLocationResponse {
  /** 是否启用高级设置：0-否，1-是 */
  Enable: number;
  /** 查询结果保存cos路径 */
  StoreLocation: string;
  /** 是否有托管存储权限 */
  HasLakeFs: boolean;
  /** 托管存储状态，HasLakeFs等于true时，该值才有意义 */
  LakeFsStatus: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDLCCatalogAccessRequest {
  /** 显示条数 */
  Limit?: number;
  /** 记录数量 */
  Offset?: number;
  /** 过滤条件 */
  Filter?: Filter;
}

declare interface DescribeDLCCatalogAccessResponse {
  /** 总数 */
  TotalCount?: number;
  /** DLCCatalog授权列表 */
  Rows?: DLCCatalogAccess[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDMSDatabaseRequest {
  /** 数据库名称 */
  Name?: string;
  /** schema名称 */
  SchemaName?: string;
  /** 匹配规则，只支持填* */
  Pattern?: string;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface DescribeDMSDatabaseResponse {
  /** 数据库名称 */
  Name?: string | null;
  /** schema名称 */
  SchemaName?: string | null;
  /** 存储地址 */
  Location?: string | null;
  /** 数据对象 */
  Asset?: Asset | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDMSPartitionsRequest {
  /** 数据库名 */
  DatabaseName: string;
  /** 表名称 */
  TableName: string;
  /** schema名称 */
  SchemaName?: string;
  /** 名称 */
  Name?: string;
  /** 单个分区名称，精准匹配 */
  Values?: string[];
  /** 多个分区名称，精准匹配 */
  PartitionNames?: string[];
  /** 多个分区字段的匹配，模糊匹配 */
  PartValues?: string[];
  /** 过滤SQL */
  Filter?: string;
  /** 最大分区数量 */
  MaxParts?: number;
  /** 翻页跳过数量 */
  Offset?: number;
  /** 页面数量 */
  Limit?: number;
  /** 表达式 */
  Expression?: string;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface DescribeDMSPartitionsResponse {
  /** 分区信息 */
  Partitions?: DMSPartition[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDMSTableRequest {
  /** 数据库名称 */
  DbName?: string;
  /** 数据库schema名称 */
  SchemaName?: string;
  /** 表名称 */
  Name?: string;
  /** catalog类型 */
  Catalog?: string;
  /** 查询关键词 */
  Keyword?: string;
  /** 查询模式，只支持填* */
  Pattern?: string;
  /** 表类型 */
  Type?: string;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface DescribeDMSTableResponse {
  /** 基础对象 */
  Asset?: Asset | null;
  /** 视图文本 */
  ViewOriginalText?: string | null;
  /** 视图文本 */
  ViewExpandedText?: string | null;
  /** hive维护版本 */
  Retention?: number | null;
  /** 存储对象 */
  Sds?: DMSSds | null;
  /** 分区列 */
  PartitionKeys?: DMSColumn[] | null;
  /** 分区 */
  Partitions?: DMSPartition[] | null;
  /** 表类型 */
  Type?: string | null;
  /** 数据库名称 */
  DbName?: string | null;
  /** Schame名称 */
  SchemaName?: string | null;
  /** 存储大小 */
  StorageSize?: number | null;
  /** 记录数量 */
  RecordCount?: number | null;
  /** 生命周期 */
  LifeTime?: number | null;
  /** 最后访问时间 */
  LastAccessTime?: string | null;
  /** 数据更新时间 */
  DataUpdateTime?: string | null;
  /** 结构更新时间 */
  StructUpdateTime?: string | null;
  /** 列 */
  Columns?: DMSColumn[] | null;
  /** 表名称 */
  Name?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDMSTablesRequest {
  /** 数据库名称 */
  DbName?: string;
  /** 数据库schema名称 */
  SchemaName?: string;
  /** 表名称 */
  Name?: string;
  /** catalog类型 */
  Catalog?: string;
  /** 查询关键词 */
  Keyword?: string;
  /** 查询模式，只支持填* */
  Pattern?: string;
  /** 表类型 */
  Type?: string;
  /** 筛选参数：更新开始时间 */
  StartTime?: string;
  /** 筛选参数：更新结束时间 */
  EndTime?: string;
  /** 分页参数 */
  Limit?: number;
  /** 分页参数 */
  Offset?: number;
  /** 排序字段：create_time：创建时间 */
  Sort?: string;
  /** 排序字段：true：升序（默认），false：降序 */
  Asc?: boolean;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface DescribeDMSTablesResponse {
  /** DMS元数据列表信息 */
  TableList?: DMSTableInfo[] | null;
  /** 统计值 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEngineEventsRequest {
  /** 虚拟集群名称 */
  DataEngineName: string;
  /** 返回数量，默认为10，最大为100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 资源组id */
  SessionId?: string;
}

declare interface DescribeDataEngineEventsResponse {
  /** 事件详细信息 */
  Events?: HouseEventsInfo[] | null;
  /** 分页号 */
  Page?: number | null;
  /** 分页大小 */
  Size?: number | null;
  /** 总页数 */
  TotalPages?: number | null;
  /** 总条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEngineImageVersionsRequest {
  /** 引擎类型：SparkSQL、PrestoSQL、SparkBatch、StandardSpark、StandardPresto */
  EngineType: string;
  /** 排序字段: InsertTime（插入时间，默认），UpdateTime（更新时间） */
  Sort?: string;
  /** 排序方式：false（降序，默认），true（升序） */
  Asc?: boolean;
}

declare interface DescribeDataEngineImageVersionsResponse {
  /** 集群大版本镜像信息列表 */
  ImageParentVersions?: DataEngineImageVersion[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEnginePythonSparkImagesRequest {
  /** 集群镜像小版本ID */
  ChildImageVersionId: string;
}

declare interface DescribeDataEnginePythonSparkImagesResponse {
  /** PYSPARK镜像信息列表 */
  PythonSparkImages?: PythonSparkImage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEngineRequest {
  /** House名称 */
  DataEngineName: string;
}

declare interface DescribeDataEngineResponse {
  /** 数据引擎详细信息 */
  DataEngine?: DataEngineInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEnginesRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤类型，支持如下的过滤类型，传参Name应为以下其中一个, data-engine-name - String（数据引擎名称）：engine-type - String（引擎类型：spark：spark 引擎，presto：presto引擎），state - String (数据引擎状态 -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中) ， mode - String（计费模式 0共享模式 1按量计费 2包年包月） ， create-time - String（创建时间，10位时间戳） message - String （描述信息），cluster-type - String (集群资源类型 spark_private/presto_private/presto_cu/spark_cu/kyuubi_cu)，engine-id - String（数据引擎ID），key-word - String（数据引擎名称或集群资源类型或描述信息模糊搜索），engine-exec-type - String（引擎执行任务类型，SQL/BATCH），engine-network-id - String（引擎网络Id） */
  Filters?: Filter[];
  /** 排序字段，支持如下字段类型，create-time */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为asc。 */
  Sorting?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 已废弃，请使用DatasourceConnectionNameSet */
  DatasourceConnectionName?: string;
  /** 是否不返回共享引擎，true不返回共享引擎，false可以返回共享引擎 */
  ExcludePublicEngine?: boolean;
  /** 参数应该为引擎权限类型，有效类型："USE", "MODIFY", "OPERATE", "MONITOR", "DELETE" */
  AccessTypes?: string[];
  /** 引擎执行任务类型，有效值：SQL/BATCH，默认为SQL */
  EngineExecType?: string;
  /** 引擎类型，有效值：spark/presto/kyuubi，为空时默认获取非kyuubi引擎（网关引擎） */
  EngineType?: string;
  /** 网络配置列表，若传入该参数，则返回网络配置关联的计算引擎 */
  DatasourceConnectionNameSet?: string[];
  /** 引擎版本，有效值：Native/SuperSQL，为空时默认获取SuperSQL引擎 */
  EngineGeneration?: string;
  /** 引擎类型，支持：SparkSQL、SparkBatch、PrestoSQL、Kyuubi */
  EngineTypeDetail?: string;
}

declare interface DescribeDataEnginesResponse {
  /** 数据引擎列表 */
  DataEngines?: DataEngineInfo[] | null;
  /** 总条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEnginesScaleDetailRequest {
  /** 引擎名称列表 */
  DataEngineNames?: string[];
  /** 开始时间，时间格式：yyyy-MM-dd HH:mm:ss，最长查询一个月内的记录 */
  StartTime?: string;
  /** 结束时间，时间格式：yyyy-MM-dd HH:mm:ss，最长查询一个月内的记录 */
  EndTime?: string;
}

declare interface DescribeDataEnginesScaleDetailResponse {
  /** 引擎规格统计详细信息 */
  Scales?: DataEngineScaleInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 数据偏移量，从0开始，默认为0。 */
  Offset?: number;
  /** 模糊匹配，库名关键字。 */
  KeyWord?: string;
  /** 数据源唯名称，该名称可以通过DescribeDatasourceConnection接口查询到。默认为DataLakeCatalog */
  DatasourceConnectionName?: string;
  /** 排序字段，CreateTime：创建时间，Name：数据库名称 */
  Sort?: string;
  /** 排序类型：false：降序（默认）、true：升序 */
  Asc?: boolean;
}

declare interface DescribeDatabasesResponse {
  /** 数据库对象列表。 */
  DatabaseList?: DatabaseResponseInfo[];
  /** 实例总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatasourceConnectionRequest {
  /** 连接ID列表，指定要查询的连接ID */
  DatasourceConnectionIds?: string[];
  /** 过滤条件，当前支持的过滤键为：DatasourceConnectionName（数据源连接名）。DatasourceConnectionType （数据源连接连接类型） */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认20，最大值100 */
  Limit?: number;
  /** 排序字段，支持如下字段类型，create-time（默认，创建时间）、update-time（更新时间） */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为desc */
  Sorting?: string;
  /** 筛选字段：起始时间 */
  StartTime?: string;
  /** 筛选字段：截止时间 */
  EndTime?: string;
  /** 连接名称列表，指定要查询的连接名称 */
  DatasourceConnectionNames?: string[];
  /** 连接类型，支持Mysql/HiveCos/Kafka/DataLakeCatalog */
  DatasourceConnectionTypes?: string[];
  /** 返回指定hive版本的数据源，该参数指定后，会过滤掉该参数指定版本以外的hive数据源，非hive数据源正常返回 */
  HiveVersion?: string[];
}

declare interface DescribeDatasourceConnectionResponse {
  /** 数据连接总数 */
  TotalCount?: number;
  /** 数据连接对象集合 */
  ConnectionSet?: DatasourceConnectionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEngineUsageInfoRequest {
  /** 数据引擎ID */
  DataEngineId: string;
}

declare interface DescribeEngineUsageInfoResponse {
  /** 集群总规格 */
  Total?: number;
  /** 已占用集群规格 */
  Used?: number;
  /** 剩余集群规格 */
  Available?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeForbiddenTableProRequest {
}

declare interface DescribeForbiddenTableProResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLakeFsDirSummaryRequest {
}

declare interface DescribeLakeFsDirSummaryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLakeFsInfoRequest {
}

declare interface DescribeLakeFsInfoResponse {
  /** 托管存储信息 */
  LakeFsInfos?: LakeFsInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLakeFsTaskResultRequest {
  /** 需要访问的任务结果路径 */
  FsPath: string;
}

declare interface DescribeLakeFsTaskResultResponse {
  /** 路径的访问实例 */
  AccessToken?: LakeFileSystemToken;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookSessionLogRequest {
  /** Session唯一标识 */
  SessionId: string;
  /** 分页参数，默认200 */
  Limit?: number;
  /** 分页参数，默认0 */
  Offset?: number;
}

declare interface DescribeNotebookSessionLogResponse {
  /** 日志信息，默认获取最新的200条 */
  Logs?: string[];
  /** 分页参数，默认200 */
  Limit?: number;
  /** 分页参数，默认0 */
  Offset?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookSessionRequest {
  /** Session唯一标识 */
  SessionId: string;
}

declare interface DescribeNotebookSessionResponse {
  /** Session详情信息 */
  Session?: NotebookSessionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookSessionStatementRequest {
  /** Session唯一标识 */
  SessionId: string;
  /** Session Statement唯一标识 */
  StatementId: string;
  /** 任务唯一标识 */
  TaskId?: string;
}

declare interface DescribeNotebookSessionStatementResponse {
  /** Session Statement详情 */
  NotebookSessionStatement?: NotebookSessionStatementInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookSessionStatementSqlResultRequest {
  /** 任务唯一ID */
  TaskId: string;
  /** 返回结果的最大行数，范围0~1000，默认为1000. */
  MaxResults?: number;
  /** 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回MaxResults字段设置的数据量。 */
  NextToken?: string;
  /** 批次Id */
  BatchId?: string;
  /** 返回结果集中字段值长度截取，如果超过该长度则截取到该长度 */
  DataFieldCutLen?: number;
}

declare interface DescribeNotebookSessionStatementSqlResultResponse {
  /** 任务Id */
  TaskId?: string;
  /** 结果数据 */
  ResultSet?: string;
  /** schema */
  ResultSchema?: Column[];
  /** 分页信息 */
  NextToken?: string | null;
  /** 存储结果地址 */
  OutputPath?: string | null;
  /** 引擎计算耗时 */
  UseTime?: number | null;
  /** 结果条数 */
  AffectRows?: number | null;
  /** 数据扫描量 */
  DataAmount?: number | null;
  /** spark ui地址 */
  UiUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookSessionStatementsRequest {
  /** Session唯一标识 */
  SessionId: string;
  /** 批任务id */
  BatchId: string;
}

declare interface DescribeNotebookSessionStatementsResponse {
  /** Session Statement详情 */
  NotebookSessionStatements?: NotebookSessionStatementBatchInformation;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookSessionsRequest {
  /** DLC Spark作业引擎名称 */
  DataEngineName: string;
  /** Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止） */
  State?: string[];
  /** 排序字段（默认按创建时间） */
  SortFields?: string[];
  /** 排序字段：true：升序、false：降序（默认） */
  Asc?: boolean;
  /** 分页参数，默认10 */
  Limit?: number;
  /** 分页参数，默认0 */
  Offset?: number;
  /** 过滤类型，支持如下的过滤类型，传参Name应为以下其中一个, engine-generation - String（引擎时代： supersql：supersql引擎，native：标准引擎）：notebook-keyword - String（数据引擎名称或sessionid或sessionname的模糊搜索） */
  Filters?: Filter[];
}

declare interface DescribeNotebookSessionsResponse {
  /** session总数量 */
  TotalElements?: number;
  /** 总页数 */
  TotalPages?: number;
  /** 当前页码 */
  Page?: number;
  /** 当前页数量 */
  Size?: number;
  /** session列表信息 */
  Sessions?: NotebookSessions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOtherCHDFSBindingListRequest {
  /** 桶名 */
  BucketId: string;
}

declare interface DescribeOtherCHDFSBindingListResponse {
  /** 非DLC 产品绑定列表 */
  OtherCHDFSBindingList?: OtherCHDFSBinding[];
  /** 总记录数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResultDownloadRequest {
  /** 查询任务Id */
  DownloadId: string;
}

declare interface DescribeResultDownloadResponse {
  /** 下载文件路径 */
  Path?: string | null;
  /** 任务状态 init | queue | format | compress | success| timeout | error */
  Status?: string;
  /** 任务异常原因 */
  Reason?: string | null;
  /** 临时SecretId */
  SecretId?: string | null;
  /** 临时SecretKey */
  SecretKey?: string | null;
  /** 临时Token */
  Token?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScriptsRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 按字段排序，支持如下字段类型，update-time */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序，默认asc */
  Sorting?: string;
  /** 过滤条件，如下支持的过滤类型，传参Name应为其一script-id - String - （过滤条件）script-id取值形如：157de0d1-26b4-4df2-a2d0-b64afc406c25。script-name-keyword - String - （过滤条件）数据表名称,形如：script-test。 */
  Filters?: Filter[];
}

declare interface DescribeScriptsResponse {
  /** Script列表 */
  Scripts?: Script[] | null;
  /** 实例总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkAppJobRequest {
  /** spark作业Id，与JobName同时存在时，JobName无效，JobId与JobName至少存在一个 */
  JobId?: string;
  /** spark作业名 */
  JobName?: string;
}

declare interface DescribeSparkAppJobResponse {
  /** spark作业详情 */
  Job?: SparkJobInfo | null;
  /** 查询的spark作业是否存在 */
  IsExists?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkAppJobsRequest {
  /** 返回结果按照该字段排序 */
  SortBy?: string;
  /** 正序或者倒序，例如：desc */
  Sorting?: string;
  /** 过滤条件，如下支持的过滤类型，传参Name应为其一:spark-job-name（作业名称），spark-job-id（作业id），spark-app-type（作业类型，1：批任务，2：流任务，4：SQL作业），user-name（创建人），key-word（作业名称或ID关键词模糊搜索） */
  Filters?: Filter[];
  /** 更新时间起始点，支持格式：yyyy-MM-dd HH:mm:ss */
  StartTime?: string;
  /** 更新时间截止点，支持格式：yyyy-MM-dd HH:mm:ss */
  EndTime?: string;
  /** 查询列表偏移量, 默认值0 */
  Offset?: number;
  /** 查询列表限制数量, 默认值100 */
  Limit?: number;
}

declare interface DescribeSparkAppJobsResponse {
  /** spark作业列表详情 */
  SparkAppJobs?: SparkJobInfo[];
  /** spark作业总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkAppTasksRequest {
  /** spark作业Id */
  JobId: string;
  /** 分页查询偏移量 */
  Offset?: number;
  /** 分页查询Limit */
  Limit?: number;
  /** 执行实例id */
  TaskId?: string;
  /** 更新时间起始点，支持格式：yyyy-MM-dd HH:mm:ss */
  StartTime?: string;
  /** 更新时间截止点，支持格式：yyyy-MM-dd HH:mm:ss */
  EndTime?: string;
  /** 按照该参数过滤,支持task-state */
  Filters?: Filter[];
}

declare interface DescribeSparkAppTasksResponse {
  /** 任务结果（该字段已废弃） */
  Tasks?: TaskResponseInfo | null;
  /** 任务总数 */
  TotalCount?: number;
  /** 任务结果列表 */
  SparkAppTasks?: TaskResponseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkSessionBatchSQLCostRequest {
  /** SparkSQL唯一标识 */
  BatchIds?: string[];
}

declare interface DescribeSparkSessionBatchSQLCostResponse {
  /** 任务消耗 */
  CostInfo?: BatchSQLCostInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkSessionBatchSQLRequest {
  /** SparkSQL唯一标识 */
  BatchId: string;
  /** 用户自定义主键, 若不为空，则按照该值查询 */
  CustomKey?: string;
}

declare interface DescribeSparkSessionBatchSQLResponse {
  /** 状态：0：运行中、1：成功、2：失败、3：取消、4：超时； */
  State?: number;
  /** SQL子任务列表，仅展示运行完成的子任务，若某个任务运行失败，后续其它子任务不返回 */
  Tasks?: BatchSqlTask[] | null;
  /** 非sql运行的异常事件信息，包含资源创建失败、调度异常，JOB超时等，正常运行下该Event值为空 */
  Event?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkSessionBatchSqlLogRequest {
  /** SparkSQL唯一标识 */
  BatchId: string;
  /** 用户自定义主键，若不为空，则按照该值进行查询 */
  CustomKey?: string;
}

declare interface DescribeSparkSessionBatchSqlLogResponse {
  /** 状态：0：运行中、1：成功、2：失败、3：取消、4：超时； */
  State?: number;
  /** 日志信息列表 */
  LogSet?: SparkSessionBatchLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStoreLocationRequest {
}

declare interface DescribeStoreLocationResponse {
  /** 返回用户设置的结果存储位置路径，如果未设置则返回空字符串："" */
  StoreLocation: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubUserAccessPolicyRequest {
}

declare interface DescribeSubUserAccessPolicyResponse {
  /** 子用户访问策略 */
  PolicyDocument?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableRequest {
  /** 查询对象表名称 */
  TableName: string;
  /** 查询表所在的数据库名称。 */
  DatabaseName: string;
  /** 查询表所在的数据源名称 */
  DatasourceConnectionName?: string;
}

declare interface DescribeTableResponse {
  /** 数据表对象 */
  Table?: TableResponseInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesNameRequest {
  /** 列出该数据库下所属数据表。 */
  DatabaseName: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 数据偏移量，从0开始，默认为0。 */
  Offset?: number;
  /** 过滤条件，如下支持的过滤类型，传参Name应为其一table-name - String - （过滤条件）数据表名称,形如：table-001。table-id - String - （过滤条件）table id形如：12342。 */
  Filters?: Filter[];
  /** 指定查询的数据源名称，默认为DataLakeCatalog */
  DatasourceConnectionName?: string;
  /** 起始时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS */
  StartTime?: string;
  /** 终止时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS */
  EndTime?: string;
  /** 排序字段，支持：CreateTime（创建时间）、UpdateTime（更新时间）、StorageSize（存储空间）、RecordCount（行数）、Name（表名称）（不传则默认按name升序） */
  Sort?: string;
  /** 排序字段，false：降序（默认）；true：升序 */
  Asc?: boolean;
  /** table type，表类型查询,可用值:EXTERNAL_TABLE,INDEX_TABLE,MANAGED_TABLE,MATERIALIZED_VIEW,TABLE,VIEW,VIRTUAL_VIEW */
  TableType?: string;
  /** 筛选字段-表格式：不传（默认）为查全部；LAKEFS：托管表；ICEBERG：非托管iceberg表；HIVE：非托管hive表；OTHER：非托管其它； */
  TableFormat?: string;
}

declare interface DescribeTablesNameResponse {
  /** 数据表名称对象列表。 */
  TableNameList?: string[];
  /** 实例总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesRequest {
  /** 列出该数据库下所属数据表。 */
  DatabaseName: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 数据偏移量，从0开始，默认为0。 */
  Offset?: number;
  /** 过滤条件，如下支持的过滤类型，传参Name应为其一table-name - String - （过滤条件）数据表名称,形如：table-001。table-id - String - （过滤条件）table id形如：12342。 */
  Filters?: Filter[];
  /** 指定查询的数据源名称，默认为DataLakeCatalog */
  DatasourceConnectionName?: string;
  /** 起始时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS */
  StartTime?: string;
  /** 终止时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS */
  EndTime?: string;
  /** 排序字段，支持：CreateTime（创建时间）、UpdateTime（更新时间）、StorageSize（存储空间）、RecordCount（行数）、Name（表名称）（不传则默认按name升序） */
  Sort?: string;
  /** 排序字段，false：降序（默认）；true：升序 */
  Asc?: boolean;
  /** table type，表类型查询,可用值:EXTERNAL_TABLE,INDEX_TABLE,MANAGED_TABLE,MATERIALIZED_VIEW,TABLE,VIEW,VIRTUAL_VIEW */
  TableType?: string;
  /** 筛选字段-表格式：不传（默认）为查全部；LAKEFS：托管表；ICEBERG：非托管iceberg表；HIVE：非托管hive表；OTHER：非托管其它； */
  TableFormat?: string;
}

declare interface DescribeTablesResponse {
  /** 数据表对象列表。 */
  TableList?: TableResponseInfo[];
  /** 实例总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskLogRequest {
  /** 列表返回的Id */
  TaskId: string;
  /** 开始运行时间，unix时间戳（毫秒） */
  StartTime: number;
  /** 结束运行时间，unix时间戳（毫秒） */
  EndTime: number;
  /** 分页大小，最大1000，配合Context一起使用 */
  Limit: number;
  /** 下一次分页参数，第一次传空。透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时。 */
  Context: string;
  /** 是否升序排列，true:升序排序，false:倒序，默认false，倒序排列 */
  Asc?: boolean;
  /** 预览日志的通用过滤条件 */
  Filters?: Filter[];
  /** SparkSQL任务唯一ID */
  BatchId?: string;
}

declare interface DescribeTaskLogResponse {
  /** 下一次分页参数 */
  Context?: string | null;
  /** 是否获取完结 */
  ListOver?: boolean | null;
  /** 日志详情 */
  Results?: JobLogResult[] | null;
  /** 日志url */
  LogUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskResultRequest {
  /** 任务唯一ID，仅支持30天内的任务 */
  TaskId: string;
  /** 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回MaxResults字段设置的数据量。 */
  NextToken?: string;
  /** 返回结果的最大行数，范围0~1000，默认为1000. */
  MaxResults?: number;
  /** 是否转化数据类型 */
  IsTransformDataType?: boolean;
  /** 返回结果集中字段长度截取，如果字段值长度超过该长度则截取到该长度 */
  DataFieldCutLen?: number;
}

declare interface DescribeTaskResultResponse {
  /** 查询的任务信息，返回为空表示输入任务ID对应的任务不存在。只有当任务状态为成功（2）的时候，才会返回任务的结果。 */
  TaskInfo?: TaskResultInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksAnalysisRequest {
  /** 数据引擎名称，用于筛选 */
  DataEngineName?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个: task-id - String - （任务ID准确过滤）task-id 取值形如：e386471f-139a-4e59-877f-50ece8135b99。task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)，rule-id - String - （洞察类型）取值范围 SPARK-StageScheduleDelay（资源抢占）, SPARK-ShuffleFailure（Shuffle异常）, SPARK-SlowTask（慢task）, SPARK-DataSkew（数据倾斜）, SPARK-InsufficientResource（磁盘或内存不足） */
  Filters?: Filter[];
  /** 排序字段，支持如下字段类型，instance-start-time (任务开始时间）,job-time-sum （单位毫秒，引擎内执行耗时）,task-time-sum （CU资源消耗，单位秒）,input-bytes-sum（数据扫描总大小，单位bytes）,shuffle-read-bytes-sum（数据shuffle总大小，单位bytes） */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为asc。 */
  Sorting?: string;
  /** 任务开始时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近30天数据查询。默认为当前时刻 */
  StartTime?: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近30天数据查询。默认为当前时刻 */
  EndTime?: string;
}

declare interface DescribeTasksAnalysisResponse {
  /** 洞察结果分页列表 */
  TaskList?: AnalysisTaskResults[];
  /** 洞察结果总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksCostInfoRequest {
  /** 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。task-operator- string （子uin过滤） */
  Filters?: Filter[];
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻 */
  StartTime?: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻 */
  EndTime?: string;
  /** 数据引擎名称，用于筛选 */
  DataEngineName?: string;
  /** 下一页的标识 */
  SearchAfter?: string;
  /** 每页的大小 */
  PageSize?: number;
}

declare interface DescribeTasksCostInfoResponse {
  /** 下一页的标识 */
  SearchAfter?: string | null;
  /** 返回的数据，字符串类型的二维数组，首行为列中文名称 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksOverviewRequest {
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 筛选条件 */
  Filters?: Filter[];
  /** 引擎名 */
  DataEngineName?: string;
  /** DataEngine-dm8bjs29 */
  HouseIds?: string[];
}

declare interface DescribeTasksOverviewResponse {
  /** 各类任务个数大于0 */
  TasksOverview?: TasksOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。task-operator- string （子uin过滤）task-kind - string （任务类型过滤） */
  Filters?: Filter[];
  /** 排序字段，支持如下字段类型，create-time（创建时间，默认）、update-time（更新时间） */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为asc。 */
  Sorting?: string;
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻 */
  StartTime?: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻 */
  EndTime?: string;
  /** 数据引擎名称，用于筛选 */
  DataEngineName?: string;
  /** spark引擎资源组名称 */
  ResourceGroupName?: string;
}

declare interface DescribeTasksResponse {
  /** 任务对象列表。 */
  TaskList?: TaskResponseInfo[];
  /** 实例总数。 */
  TotalCount?: number;
  /** 任务概览信息 */
  TasksOverview?: TasksOverview | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeThirdPartyAccessUserRequest {
}

declare interface DescribeThirdPartyAccessUserResponse {
  /** 用户信息 */
  UserInfo?: OpendThirdAccessUserInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUpdatableDataEnginesRequest {
  /** 引擎配置操作命令，UpdateSparkSQLLakefsPath 更新托管表路径，UpdateSparkSQLResultPath 更新结果桶路径 */
  DataEngineConfigCommand: string;
  /** 是否使用托管存储作为结果存储 */
  UseLakeFs?: boolean;
  /** 用户自定义结果存储路径 */
  CustomResultPath?: string;
}

declare interface DescribeUpdatableDataEnginesResponse {
  /** 集群基础信息 */
  DataEngineBasicInfos?: DataEngineBasicInfo[];
  /** 集群个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserDataEngineConfigRequest {
  /** 排序方式，desc表示倒序，asc表示正序 */
  Sorting?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序字段，支持如下字段类型，create-time */
  SortBy?: string;
  /** 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,每种过滤参数支持的过滤值不超过5个。app-id - String - （appid过滤）engine-id - String - （引擎ID过滤） */
  Filters?: Filter[];
}

declare interface DescribeUserDataEngineConfigResponse {
  /** 用户引擎自定义配置项列表。 */
  DataEngineConfigInstanceInfos?: DataEngineConfigInstanceInfo[] | null;
  /** 配置项总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserInfoRequest {
  /** 用户Id */
  UserId?: string;
  /** 必传字段，查询的信息类型，Group：工作组 DataAuth：数据权限 EngineAuth:引擎权限 RowFilter：行级别权限 */
  Type?: string;
  /** 查询的过滤条件。当Type为Group时，支持Key为workgroup-name的模糊搜索；当Type为DataAuth时，支持key：policy-type：权限类型。policy-source：数据来源。data-name：库表的模糊搜索。当Type为EngineAuth时，支持key：policy-type：权限类型。policy-source：数据来源。engine-name：库表的模糊搜索。 */
  Filters?: Filter[];
  /** 排序字段。当Type为Group时，支持create-time、group-name当Type为DataAuth时，支持create-time当Type为EngineAuth时，支持create-time */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为asc */
  Sorting?: string;
  /** 返回数量，默认20，最大值100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
}

declare interface DescribeUserInfoResponse {
  /** 用户详细信息 */
  UserInfo?: UserDetailInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserRolesRequest {
  /** 列举的数量限制 */
  Limit: number;
  /** 列举的偏移位置 */
  Offset: number;
  /** 按照arn模糊列举 */
  Fuzzy?: string;
  /** 返回结果按照该字段排序 */
  SortBy?: string;
  /** 正序或者倒序，例如：desc */
  Sorting?: string;
}

declare interface DescribeUserRolesResponse {
  /** 符合列举条件的总数量 */
  Total?: number;
  /** 用户角色信息 */
  UserRoles?: UserRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserTypeRequest {
  /** 用户ID（UIN），如果不填默认为调用方的子UIN */
  UserId?: string;
}

declare interface DescribeUserTypeResponse {
  /** 用户类型。ADMIN：管理员 COMMON：普通用户 */
  UserType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsersRequest {
  /** 指定查询的子用户uin，用户需要通过CreateUser接口创建。 */
  UserId?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认20，最大值100 */
  Limit?: number;
  /** 排序字段，支持如下字段类型，create-time */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为asc */
  Sorting?: string;
  /** 过滤条件，支持如下字段类型，user-type：根据用户类型过滤。user-keyword：根据用户名称过滤 */
  Filters?: Filter[];
}

declare interface DescribeUsersResponse {
  /** 查询到的用户总数 */
  TotalCount: number;
  /** 查询到的授权用户信息集合 */
  UserSet: UserInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeViewsRequest {
  /** 列出该数据库下所属数据表。 */
  DatabaseName: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 数据偏移量，从0开始，默认为0。 */
  Offset?: number;
  /** 过滤条件，如下支持的过滤类型，传参Name应为其一view-name - String - （过滤条件）数据表名称,形如：view-001。view-id - String - （过滤条件）view id形如：12342。 */
  Filters?: Filter[];
  /** 数据库所属的数据源名称 */
  DatasourceConnectionName?: string;
  /** 排序字段 */
  Sort?: string;
  /** 排序规则，true:升序；false:降序 */
  Asc?: boolean;
  /** 按视图更新时间筛选，开始时间，如2021-11-11 00:00:00 */
  StartTime?: string;
  /** 按视图更新时间筛选，结束时间，如2021-11-12 00:00:00 */
  EndTime?: string;
}

declare interface DescribeViewsResponse {
  /** 视图对象列表。 */
  ViewList?: ViewResponseInfo[];
  /** 实例总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkGroupInfoRequest {
  /** 工作组Id */
  WorkGroupId?: number;
  /** 查询信息类型：User：用户信息 DataAuth：数据权限 EngineAuth：引擎权限 */
  Type?: string;
  /** 查询的过滤条件。当Type为User时，支持Key为user-name的模糊搜索；当Type为DataAuth时，支持key：policy-type：权限类型。policy-source：数据来源。data-name：库表的模糊搜索。当Type为EngineAuth时，支持key：policy-type：权限类型。policy-source：数据来源。engine-name：库表的模糊搜索。 */
  Filters?: Filter[];
  /** 排序字段。当Type为User时，支持create-time、user-name当Type为DataAuth时，支持create-time当Type为EngineAuth时，支持create-time */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为asc */
  Sorting?: string;
  /** 返回数量，默认20，最大值100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
}

declare interface DescribeWorkGroupInfoResponse {
  /** 工作组详细信息 */
  WorkGroupInfo?: WorkGroupDetailInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkGroupsRequest {
  /** 查询的工作组Id，不填或填0表示不过滤。 */
  WorkGroupId?: number;
  /** 过滤条件，当前仅支持按照工作组名称进行模糊搜索。Key为workgroup-name */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认20，最大值100 */
  Limit?: number;
  /** 排序字段，支持如下字段类型，create-time */
  SortBy?: string;
  /** 排序方式，desc表示正序，asc表示反序， 默认为asc */
  Sorting?: string;
}

declare interface DescribeWorkGroupsResponse {
  /** 工作组总数 */
  TotalCount: number;
  /** 工作组信息集合 */
  WorkGroupSet: WorkGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachUserPolicyRequest {
  /** 用户Id，和CAM侧Uin匹配 */
  UserId: string;
  /** 解绑的权限集合 */
  PolicySet?: Policy[];
}

declare interface DetachUserPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachWorkGroupPolicyRequest {
  /** 工作组Id */
  WorkGroupId: number;
  /** 解绑的权限集合 */
  PolicySet?: Policy[];
}

declare interface DetachWorkGroupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DropDMSDatabaseRequest {
  /** 数据库名称 */
  Name: string;
  /** 是否删除数据 */
  DeleteData?: boolean;
  /** 是否级联删除 */
  Cascade?: boolean;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface DropDMSDatabaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DropDMSPartitionsRequest {
  /** 数据库名称 */
  DatabaseName?: string;
  /** 数据库Schema名称 */
  SchemaName?: string;
  /** 数据表名称 */
  TableName?: string;
  /** 分区名称 */
  Name?: string;
  /** 单个分区名称 */
  Values?: string[];
  /** 是否删除分区数据 */
  DeleteData?: boolean;
  /** 数据源连接名 */
  DatasourceConnectionName?: string;
}

declare interface DropDMSPartitionsResponse {
  /** 状态 */
  Status?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DropDMSTableRequest {
  /** 数据库名称 */
  DbName?: string;
  /** 表名称 */
  Name?: string;
  /** 是否删除数据 */
  DeleteData?: boolean;
  /** 环境属性 */
  EnvProps?: KVPair;
  /** 数据目录信息 */
  DatasourceConnectionName?: string;
}

declare interface DropDMSTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateCreateMangedTableSqlRequest {
  /** 表基本信息 */
  TableBaseInfo: TableBaseInfo;
  /** 表字段信息 */
  Columns: TColumn[];
  /** 表分区信息 */
  Partitions?: TPartition[];
  /** 表属性信息 */
  Properties?: Property[];
  /** V2 upsert表 upsert键 */
  UpsertKeys?: string[];
}

declare interface GenerateCreateMangedTableSqlResponse {
  /** 创建托管存储内表sql语句描述 */
  Execution?: Execution;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetOptimizerPolicyRequest {
  /** 策略描述 */
  SmartPolicy: SmartPolicy;
}

declare interface GetOptimizerPolicyResponse {
  /** 智能优化策略 */
  SmartOptimizerPolicy?: SmartOptimizerPolicy;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GrantDLCCatalogAccessRequest {
  /** 授权VpcId */
  VpcId: string;
  /** 产品(EMR|DLC|Doris|Inlong|Wedata) */
  Product: string;
  /** 描述 */
  Description?: string;
  /** VPC所属账号UIN */
  VpcUin?: string;
  /** VPC所属账号AppId */
  VpcAppId?: number;
}

declare interface GrantDLCCatalogAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTaskJobLogDetailRequest {
  /** 列表返回的Id */
  TaskId: string;
  /** 开始运行时间，unix时间戳（毫秒） */
  StartTime: number;
  /** 结束运行时间，unix时间戳（毫秒） */
  EndTime: number;
  /** 分页大小，最大1000，配合Context一起使用 */
  Limit: number;
  /** 下一次分页参数，第一次传空 */
  Context: string;
  /** 最近1000条日志是否升序排列，true:升序排序，false:倒序，默认false，倒序排列 */
  Asc?: boolean;
  /** 预览日志的通用过滤条件 */
  Filters?: Filter[];
  /** SparkSQL任务唯一ID */
  BatchId?: string;
}

declare interface ListTaskJobLogDetailResponse {
  /** 下一次分页参数 */
  Context?: string | null;
  /** 是否获取完结 */
  ListOver?: boolean | null;
  /** 日志详情 */
  Results?: JobLogResult[] | null;
  /** 日志url */
  LogUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTaskJobLogNameRequest {
  /** 查询的taskId */
  TaskId: string;
  /** SparkSQL批任务唯一ID */
  BatchId?: string;
}

declare interface ListTaskJobLogNameResponse {
  /** 日志名称列表 */
  Names?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LockMetaDataRequest {
  /** 加锁内容 */
  LockComponentList: LockComponentInfo[];
  /** 数据源名称 */
  DatasourceConnectionName?: string;
  /** 事务id */
  TxnId?: number;
  /** 客户端信息 */
  AgentInfo?: string;
  /** 主机名 */
  Hostname?: string;
}

declare interface LockMetaDataResponse {
  /** 锁id */
  LockId?: number;
  /** 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED */
  LockState?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAdvancedStoreLocationRequest {
  /** 查询结果保存cos路径 */
  StoreLocation: string;
  /** 是否启用高级设置：0-否，1-是 */
  Enable: number;
}

declare interface ModifyAdvancedStoreLocationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDataEngineDescriptionRequest {
  /** 要修改的引擎的名称 */
  DataEngineName: string;
  /** 引擎的描述信息，最大长度为250 */
  Message: string;
}

declare interface ModifyDataEngineDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGovernEventRuleRequest {
}

declare interface ModifyGovernEventRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySparkAppBatchRequest {
  /** 需要批量修改的Spark作业任务ID列表 */
  SparkAppId: string[];
  /** 引擎ID */
  DataEngine?: string;
  /** driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge */
  AppDriverSize?: string;
  /** executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge */
  AppExecutorSize?: string;
  /** 指定executor数量，最小值为1，最大值小于集群规格 */
  AppExecutorNums?: number;
  /** 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums） */
  AppExecutorMaxNumbers?: number;
  /** 任务资源配置是否继承集群模板，0（默认）不继承，1：继承 */
  IsInherit?: number;
}

declare interface ModifySparkAppBatchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySparkAppRequest {
  /** spark作业名 */
  AppName: string;
  /** spark作业类型，1代表spark jar作业，2代表spark streaming作业 */
  AppType: number;
  /** 执行spark作业的数据引擎名称 */
  DataEngine: string;
  /** spark作业程序包文件路径 */
  AppFile: string;
  /** 数据访问策略，CAM Role arn */
  RoleArn: number;
  /** 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  AppDriverSize: string;
  /** 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  AppExecutorSize: string;
  /** spark作业executor个数 */
  AppExecutorNums: number;
  /** spark作业Id */
  SparkAppId: string;
  /** 该字段已下线，请使用字段Datasource */
  Eni?: string;
  /** spark作业程序包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocal?: string;
  /** spark作业主类 */
  MainClass?: string;
  /** spark配置，以换行符分隔 */
  AppConf?: string;
  /** spark 作业依赖jar包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalJars?: string;
  /** spark 作业依赖jar包（--jars），以逗号分隔 */
  AppJars?: string;
  /** spark作业依赖文件资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalFiles?: string;
  /** spark作业依赖文件资源（--files）（非jar、zip），以逗号分隔 */
  AppFiles?: string;
  /** pyspark：依赖上传方式，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalPythonFiles?: string;
  /** pyspark作业依赖python资源（--py-files），支持py/zip/egg等归档格式，多文件以逗号分隔 */
  AppPythonFiles?: string;
  /** spark作业程序入参 */
  CmdArgs?: string;
  /** 最大重试次数，只对spark流任务生效 */
  MaxRetries?: number;
  /** 数据源名 */
  DataSource?: string;
  /** spark作业依赖archives资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用） */
  IsLocalArchives?: string;
  /** spark作业依赖archives资源（--archives），支持tar.gz/tgz/tar等归档格式，以逗号分隔 */
  AppArchives?: string;
  /** Spark Image 版本号 */
  SparkImage?: string;
  /** Spark Image 版本名称 */
  SparkImageVersion?: string;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums */
  AppExecutorMaxNumbers?: number;
  /** 关联dlc查询脚本 */
  SessionId?: string;
  /** 任务资源配置是否继承集群配置模板：0（默认）不继承、1：继承 */
  IsInherit?: number;
  /** 是否使用session脚本的sql运行任务：false：否，true：是 */
  IsSessionStarted?: boolean;
}

declare interface ModifySparkAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserRequest {
  /** 用户Id，和CAM侧Uin匹配 */
  UserId: string;
  /** 用户描述 */
  UserDescription: string;
}

declare interface ModifyUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserTypeRequest {
  /** 用户ID */
  UserId: string;
  /** 用户要修改到的类型，ADMIN：管理员，COMMON：一般用户。 */
  UserType: string;
}

declare interface ModifyUserTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWorkGroupRequest {
  /** 工作组Id */
  WorkGroupId: number;
  /** 工作组描述，最大字符数限制50 */
  WorkGroupDescription: string;
}

declare interface ModifyWorkGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryInternalTableWarehouseRequest {
  /** 库名 */
  DatabaseName: string;
  /** 表名 */
  TableName: string;
}

declare interface QueryInternalTableWarehouseResponse {
  /** warehouse路径 */
  WarehousePath: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryResultRequest {
  /** 任务ID */
  TaskId: string;
  /** lastReadFile为上一次读取的文件，lastReadOffset为上一次读取到的位置 */
  NextToken?: string;
}

declare interface QueryResultResponse {
  /** 任务Id */
  TaskId?: string;
  /** 结果数据 */
  ResultSet?: string;
  /** schema */
  ResultSchema?: Column[];
  /** 分页信息 */
  NextToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryTaskCostDetailRequest {
  /** 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。task-operator- string （子uin过滤） */
  Filters?: Filter[];
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻 */
  StartTime?: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻 */
  EndTime?: string;
  /** 数据引擎名称，用于筛选 */
  DataEngineName?: string;
  /** 下一页的标识 */
  SearchAfter?: string;
  /** 每页的大小 */
  PageSize?: number;
}

declare interface QueryTaskCostDetailResponse {
  /** 下一页的标识 */
  SearchAfter?: string | null;
  /** 返回的数据 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterThirdPartyAccessUserRequest {
}

declare interface RegisterThirdPartyAccessUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDataEngineRequest {
  /** CU队列名称 */
  DataEngineName: string;
  /** 续费时长，单位月，最少续费1一个月 */
  TimeSpan: number;
  /** 付费类型，默认为1，预付费 */
  PayMode?: number;
  /** 单位，默认m，仅能填m */
  TimeUnit?: string;
  /** 自动续费标志，0，初始状态，默认不自动续费，若用户有预付费不停服特权，自动续费。1：自动续费。2：明确不自动续费。不传该参数默认为0 */
  RenewFlag?: number;
}

declare interface RenewDataEngineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportHeartbeatMetaDataRequest {
  /** 数据源名称 */
  DatasourceConnectionName?: string;
  /** 锁ID */
  LockId?: number;
  /** 事务ID */
  TxnId?: number;
}

declare interface ReportHeartbeatMetaDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDataEngineRequest {
  /** 引擎ID */
  DataEngineId: string;
  /** 是否强制重启，忽略任务 */
  ForcedOperation?: boolean;
}

declare interface RestartDataEngineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevokeDLCCatalogAccessRequest {
  /** VpcID */
  VpcId: string;
}

declare interface RevokeDLCCatalogAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackDataEngineImageRequest {
  /** 引擎ID */
  DataEngineId: string;
  /** 检查是否能回滚的接口返回的FromRecordId参数 */
  FromRecordId?: string;
  /** 检查是否能回滚的接口返回的ToRecordId参数 */
  ToRecordId?: string;
}

declare interface RollbackDataEngineImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SuspendResumeDataEngineRequest {
  /** 虚拟集群名称 */
  DataEngineName: string;
  /** 操作类型 suspend/resume */
  Operate: string;
}

declare interface SuspendResumeDataEngineResponse {
  /** 虚拟集群详细信息 */
  DataEngineName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchDataEngineImageRequest {
  /** 引擎ID */
  DataEngineId: string;
  /** 新镜像版本ID */
  NewImageVersionId: string;
}

declare interface SwitchDataEngineImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchDataEngineRequest {
  /** 主集群名称 */
  DataEngineName: string;
  /** 是否开启备集群 */
  StartStandbyCluster: boolean;
}

declare interface SwitchDataEngineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindWorkGroupsFromUserRequest {
  /** 解绑的工作组Id和用户Id的关联关系 */
  AddInfo: WorkGroupIdSetOfUserId;
}

declare interface UnbindWorkGroupsFromUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnlockMetaDataRequest {
  /** 锁ID */
  LockId: number;
  /** 数据源名称 */
  DatasourceConnectionName?: string;
}

declare interface UnlockMetaDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDataEngineConfigRequest {
  /** 引擎ID */
  DataEngineIds: string[];
  /** 引擎配置命令，支持UpdateSparkSQLLakefsPath（更新原生表配置）、UpdateSparkSQLResultPath（更新结果路径配置） */
  DataEngineConfigCommand: string;
  /** 是否使用lakefs作为结果存储 */
  UseLakeFs?: boolean;
  /** 用户自定义结果路径 */
  CustomResultPath?: string;
}

declare interface UpdateDataEngineConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDataEngineRequest {
  /** 资源大小 */
  Size: number;
  /** 最小资源 */
  MinClusters: number;
  /** 最大资源 */
  MaxClusters: number;
  /** 开启自动刷新：true：开启、false（默认）：关闭 */
  AutoResume: boolean;
  /** 数据引擎名称 */
  DataEngineName: string;
  /** 相关信息 */
  Message: string;
  /** 是否自定挂起集群：false（默认）：不自动挂起、true：自动挂起 */
  AutoSuspend?: boolean;
  /** 定时启停集群策略：0（默认）：关闭定时策略、1：开启定时策略（注：定时启停策略与自动挂起策略互斥） */
  CrontabResumeSuspend?: number;
  /** 定时启停策略，复杂类型：包含启停时间、挂起集群策略 */
  CrontabResumeSuspendStrategy?: CrontabResumeSuspendStrategy;
  /** 单个集群最大并发任务数，默认5 */
  MaxConcurrency?: number;
  /** 可容忍的排队时间，默认0。当任务排队的时间超过可容忍的时间时可能会触发扩容。如果该参数为0，则表示一旦有任务排队就可能立即触发扩容。 */
  TolerableQueueTime?: number;
  /** 集群自动挂起时间 */
  AutoSuspendTime?: number;
  /** spark jar 包年包月集群是否开启弹性 */
  ElasticSwitch?: boolean;
  /** spark jar 包年包月集群弹性上限 */
  ElasticLimit?: number;
  /** Spark批作业集群Session资源配置模板 */
  SessionResourceTemplate?: SessionResourceTemplate;
}

declare interface UpdateDataEngineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRowFilterRequest {
  /** 行过滤策略的id，此值可以通过DescribeUserInfo或者DescribeWorkGroupInfo接口获取 */
  PolicyId: number;
  /** 新的过滤策略。 */
  Policy: Policy;
}

declare interface UpdateRowFilterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateUserDataEngineConfigRequest {
  /** 引擎ID */
  DataEngineId: string;
  /** 用户自定义引擎配置项集合。该参数需要传用户需要添加的全部配置项，例如，已有配置项k1:v1，添加k2:v2，需要传[k1:v1,k2:v2]。 */
  DataEngineConfigPairs?: DataEngineConfigPair[];
  /** 作业引擎资源配置模板 */
  SessionResourceTemplate?: SessionResourceTemplate;
}

declare interface UpdateUserDataEngineConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDataEngineImageRequest {
  /** 引擎ID */
  DataEngineId: string;
}

declare interface UpgradeDataEngineImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dlc 数据湖计算 DLC} */
declare interface Dlc {
  (): Versions;
  /** DMS元数据新增分区 {@link AddDMSPartitionsRequest} {@link AddDMSPartitionsResponse} */
  AddDMSPartitions(data?: AddDMSPartitionsRequest, config?: AxiosRequestConfig): AxiosPromise<AddDMSPartitionsResponse>;
  /** 添加数据优化资源 {@link AddOptimizerEnginesRequest} {@link AddOptimizerEnginesResponse} */
  AddOptimizerEngines(data?: AddOptimizerEnginesRequest, config?: AxiosRequestConfig): AxiosPromise<AddOptimizerEnginesResponse>;
  /** 添加用户到工作组 {@link AddUsersToWorkGroupRequest} {@link AddUsersToWorkGroupResponse} */
  AddUsersToWorkGroup(data: AddUsersToWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddUsersToWorkGroupResponse>;
  /** DMS元数据更新库 {@link AlterDMSDatabaseRequest} {@link AlterDMSDatabaseResponse} */
  AlterDMSDatabase(data?: AlterDMSDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<AlterDMSDatabaseResponse>;
  /** DMS元数据更新分区 {@link AlterDMSPartitionRequest} {@link AlterDMSPartitionResponse} */
  AlterDMSPartition(data: AlterDMSPartitionRequest, config?: AxiosRequestConfig): AxiosPromise<AlterDMSPartitionResponse>;
  /** DMS元数据更新表 {@link AlterDMSTableRequest} {@link AlterDMSTableResponse} */
  AlterDMSTable(data: AlterDMSTableRequest, config?: AxiosRequestConfig): AxiosPromise<AlterDMSTableResponse>;
  /** 分配原生表表属性 {@link AssignMangedTablePropertiesRequest} {@link AssignMangedTablePropertiesResponse} */
  AssignMangedTableProperties(data: AssignMangedTablePropertiesRequest, config?: AxiosRequestConfig): AxiosPromise<AssignMangedTablePropertiesResponse>;
  /** 绑定鉴权策略到用户 {@link AttachUserPolicyRequest} {@link AttachUserPolicyResponse} */
  AttachUserPolicy(data: AttachUserPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachUserPolicyResponse>;
  /** 绑定鉴权策略到工作组 {@link AttachWorkGroupPolicyRequest} {@link AttachWorkGroupPolicyResponse} */
  AttachWorkGroupPolicy(data: AttachWorkGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachWorkGroupPolicyResponse>;
  /** 绑定工作组到用户 {@link BindWorkGroupsToUserRequest} {@link BindWorkGroupsToUserResponse} */
  BindWorkGroupsToUser(data: BindWorkGroupsToUserRequest, config?: AxiosRequestConfig): AxiosPromise<BindWorkGroupsToUserResponse>;
  /** 取消session中执行的任务 {@link CancelNotebookSessionStatementRequest} {@link CancelNotebookSessionStatementResponse} */
  CancelNotebookSessionStatement(data: CancelNotebookSessionStatementRequest, config?: AxiosRequestConfig): AxiosPromise<CancelNotebookSessionStatementResponse>;
  /** 批量取消Session 中执行的任务 {@link CancelNotebookSessionStatementBatchRequest} {@link CancelNotebookSessionStatementBatchResponse} */
  CancelNotebookSessionStatementBatch(data: CancelNotebookSessionStatementBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CancelNotebookSessionStatementBatchResponse>;
  /** 取消Spark SQL批任务 {@link CancelSparkSessionBatchSQLRequest} {@link CancelSparkSessionBatchSQLResponse} */
  CancelSparkSessionBatchSQL(data: CancelSparkSessionBatchSQLRequest, config?: AxiosRequestConfig): AxiosPromise<CancelSparkSessionBatchSQLResponse>;
  /** 取消任务 {@link CancelTaskRequest} {@link CancelTaskResponse} */
  CancelTask(data: CancelTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelTaskResponse>;
  /** 检查引擎用户自定义参数的有效性 {@link CheckDataEngineConfigPairsValidityRequest} {@link CheckDataEngineConfigPairsValidityResponse} */
  CheckDataEngineConfigPairsValidity(data?: CheckDataEngineConfigPairsValidityRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDataEngineConfigPairsValidityResponse>;
  /** 查看集群是否能回滚 {@link CheckDataEngineImageCanBeRollbackRequest} {@link CheckDataEngineImageCanBeRollbackResponse} */
  CheckDataEngineImageCanBeRollback(data: CheckDataEngineImageCanBeRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDataEngineImageCanBeRollbackResponse>;
  /** 查看集群镜像是否能够升级 {@link CheckDataEngineImageCanBeUpgradeRequest} {@link CheckDataEngineImageCanBeUpgradeResponse} */
  CheckDataEngineImageCanBeUpgrade(data: CheckDataEngineImageCanBeUpgradeRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDataEngineImageCanBeUpgradeResponse>;
  /** 元数据锁检查 {@link CheckLockMetaDataRequest} {@link CheckLockMetaDataResponse} */
  CheckLockMetaData(data: CheckLockMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<CheckLockMetaDataResponse>;
  /** 创建元数据加速桶和产品绑定关系 {@link CreateCHDFSBindingProductRequest} {@link CreateCHDFSBindingProductResponse} */
  CreateCHDFSBindingProduct(data: CreateCHDFSBindingProductRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCHDFSBindingProductResponse>;
  /** DMS元数据创建库 {@link CreateDMSDatabaseRequest} {@link CreateDMSDatabaseResponse} */
  CreateDMSDatabase(data?: CreateDMSDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDMSDatabaseResponse>;
  /** DMS元数据创建表 {@link CreateDMSTableRequest} {@link CreateDMSTableResponse} */
  CreateDMSTable(data?: CreateDMSTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDMSTableResponse>;
  /** 创建数据引擎. {@link CreateDataEngineRequest} {@link CreateDataEngineResponse} */
  CreateDataEngine(data: CreateDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataEngineResponse>;
  /** 生成建库SQL语句 {@link CreateDatabaseRequest} {@link CreateDatabaseResponse} */
  CreateDatabase(data: CreateDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatabaseResponse>;
  /** 创建导出任务 {@link CreateExportTaskRequest} {@link CreateExportTaskResponse} */
  CreateExportTask(data: CreateExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExportTaskResponse>;
  /** 创建导入任务 {@link CreateImportTaskRequest} {@link CreateImportTaskResponse} */
  CreateImportTask(data: CreateImportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImportTaskResponse>;
  /** 创建托管存储内表 {@link CreateInternalTableRequest} {@link CreateInternalTableResponse} */
  CreateInternalTable(data: CreateInternalTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInternalTableResponse>;
  /** 创建交互式session（notebook） {@link CreateNotebookSessionRequest} {@link CreateNotebookSessionResponse} */
  CreateNotebookSession(data: CreateNotebookSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookSessionResponse>;
  /** 在session中执行代码片段 {@link CreateNotebookSessionStatementRequest} {@link CreateNotebookSessionStatementResponse} */
  CreateNotebookSessionStatement(data: CreateNotebookSessionStatementRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookSessionStatementResponse>;
  /** 创建交互式session并执行SQL任务 {@link CreateNotebookSessionStatementSupportBatchSQLRequest} {@link CreateNotebookSessionStatementSupportBatchSQLResponse} */
  CreateNotebookSessionStatementSupportBatchSQL(data: CreateNotebookSessionStatementSupportBatchSQLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookSessionStatementSupportBatchSQLResponse>;
  /** 创建查询结果下载任务 {@link CreateResultDownloadRequest} {@link CreateResultDownloadResponse} */
  CreateResultDownload(data: CreateResultDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResultDownloadResponse>;
  /** 创建sql脚本 {@link CreateScriptRequest} {@link CreateScriptResponse} */
  CreateScript(data: CreateScriptRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScriptResponse>;
  /** 创建spark作业 {@link CreateSparkAppRequest} {@link CreateSparkAppResponse} */
  CreateSparkApp(data: CreateSparkAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSparkAppResponse>;
  /** 启动Spark作业 {@link CreateSparkAppTaskRequest} {@link CreateSparkAppTaskResponse} */
  CreateSparkAppTask(data: CreateSparkAppTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSparkAppTaskResponse>;
  /** 创建并执行Spark SQL批任务 {@link CreateSparkSessionBatchSQLRequest} {@link CreateSparkSessionBatchSQLResponse} */
  CreateSparkSessionBatchSQL(data: CreateSparkSessionBatchSQLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSparkSessionBatchSQLResponse>;
  /** 修改结果存储位置 {@link CreateStoreLocationRequest} {@link CreateStoreLocationResponse} */
  CreateStoreLocation(data: CreateStoreLocationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStoreLocationResponse>;
  /** 生成建表SQL {@link CreateTableRequest} {@link CreateTableResponse} */
  CreateTable(data: CreateTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTableResponse>;
  /** 创建并执行SQL任务 {@link CreateTaskRequest} {@link CreateTaskResponse} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** 批量创建并执行SQL任务 {@link CreateTasksRequest} {@link CreateTasksResponse} */
  CreateTasks(data: CreateTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTasksResponse>;
  /** 按顺序创建任务 {@link CreateTasksInOrderRequest} {@link CreateTasksInOrderResponse} */
  CreateTasksInOrder(data: CreateTasksInOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTasksInOrderResponse>;
  /** 创建用户 {@link CreateUserRequest} {@link CreateUserResponse} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** 创建工作组 {@link CreateWorkGroupRequest} {@link CreateWorkGroupResponse} */
  CreateWorkGroup(data: CreateWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkGroupResponse>;
  /** 删除元数据加速桶和产品绑定关系 {@link DeleteCHDFSBindingProductRequest} {@link DeleteCHDFSBindingProductResponse} */
  DeleteCHDFSBindingProduct(data: DeleteCHDFSBindingProductRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCHDFSBindingProductResponse>;
  /** 删除数据引擎 {@link DeleteDataEngineRequest} {@link DeleteDataEngineResponse} */
  DeleteDataEngine(data: DeleteDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataEngineResponse>;
  /** 删除交互式session（notebook） {@link DeleteNotebookSessionRequest} {@link DeleteNotebookSessionResponse} */
  DeleteNotebookSession(data: DeleteNotebookSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNotebookSessionResponse>;
  /** 删除sql脚本 {@link DeleteScriptRequest} {@link DeleteScriptResponse} */
  DeleteScript(data: DeleteScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScriptResponse>;
  /** 删除spark作业 {@link DeleteSparkAppRequest} {@link DeleteSparkAppResponse} */
  DeleteSparkApp(data: DeleteSparkAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSparkAppResponse>;
  /** 删除表 {@link DeleteTableRequest} {@link DeleteTableResponse} */
  DeleteTable(data: DeleteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableResponse>;
  /** 移除第三方平台访问用户 {@link DeleteThirdPartyAccessUserRequest} {@link DeleteThirdPartyAccessUserResponse} */
  DeleteThirdPartyAccessUser(data?: DeleteThirdPartyAccessUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteThirdPartyAccessUserResponse>;
  /** 删除用户 {@link DeleteUserRequest} {@link DeleteUserResponse} */
  DeleteUser(data: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** 从工作组中删除用户 {@link DeleteUsersFromWorkGroupRequest} {@link DeleteUsersFromWorkGroupResponse} */
  DeleteUsersFromWorkGroup(data: DeleteUsersFromWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsersFromWorkGroupResponse>;
  /** 删除工作组 {@link DeleteWorkGroupRequest} {@link DeleteWorkGroupResponse} */
  DeleteWorkGroup(data: DeleteWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkGroupResponse>;
  /** 查询高级设置 {@link DescribeAdvancedStoreLocationRequest} {@link DescribeAdvancedStoreLocationResponse} */
  DescribeAdvancedStoreLocation(data?: DescribeAdvancedStoreLocationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAdvancedStoreLocationResponse>;
  /** 查询DLCCatalog访问权限 {@link DescribeDLCCatalogAccessRequest} {@link DescribeDLCCatalogAccessResponse} */
  DescribeDLCCatalogAccess(data?: DescribeDLCCatalogAccessRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDLCCatalogAccessResponse>;
  /** DMS元数据获取库 {@link DescribeDMSDatabaseRequest} {@link DescribeDMSDatabaseResponse} */
  DescribeDMSDatabase(data?: DescribeDMSDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSDatabaseResponse>;
  /** DMS元数据获取分区 {@link DescribeDMSPartitionsRequest} {@link DescribeDMSPartitionsResponse} */
  DescribeDMSPartitions(data: DescribeDMSPartitionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSPartitionsResponse>;
  /** DMS元数据获取表 {@link DescribeDMSTableRequest} {@link DescribeDMSTableResponse} */
  DescribeDMSTable(data?: DescribeDMSTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSTableResponse>;
  /** DMS元数据获取表列表 {@link DescribeDMSTablesRequest} {@link DescribeDMSTablesResponse} */
  DescribeDMSTables(data?: DescribeDMSTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSTablesResponse>;
  /** 获取数据引擎详细信息 {@link DescribeDataEngineRequest} {@link DescribeDataEngineResponse} */
  DescribeDataEngine(data: DescribeDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEngineResponse>;
  /** 查询扩缩容日志 {@link DescribeDataEngineEventsRequest} {@link DescribeDataEngineEventsResponse} */
  DescribeDataEngineEvents(data: DescribeDataEngineEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEngineEventsResponse>;
  /** 获取独享集群大版本镜像列表 {@link DescribeDataEngineImageVersionsRequest} {@link DescribeDataEngineImageVersionsResponse} */
  DescribeDataEngineImageVersions(data: DescribeDataEngineImageVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEngineImageVersionsResponse>;
  /** 获取PYSPARK镜像列表 {@link DescribeDataEnginePythonSparkImagesRequest} {@link DescribeDataEnginePythonSparkImagesResponse} */
  DescribeDataEnginePythonSparkImages(data: DescribeDataEnginePythonSparkImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEnginePythonSparkImagesResponse>;
  /** 查询DataEngines列表 {@link DescribeDataEnginesRequest} {@link DescribeDataEnginesResponse} */
  DescribeDataEngines(data?: DescribeDataEnginesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEnginesResponse>;
  /** 查看引擎的规格明细 {@link DescribeDataEnginesScaleDetailRequest} {@link DescribeDataEnginesScaleDetailResponse} */
  DescribeDataEnginesScaleDetail(data?: DescribeDataEnginesScaleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEnginesScaleDetailResponse>;
  /** 查询数据库列表 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data?: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** 查询数据源信息 {@link DescribeDatasourceConnectionRequest} {@link DescribeDatasourceConnectionResponse} */
  DescribeDatasourceConnection(data?: DescribeDatasourceConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasourceConnectionResponse>;
  /** 查询数据引擎资源使用情况 {@link DescribeEngineUsageInfoRequest} {@link DescribeEngineUsageInfoResponse} */
  DescribeEngineUsageInfo(data: DescribeEngineUsageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEngineUsageInfoResponse>;
  /** 查询被禁用的表属性列表（新） {@link DescribeForbiddenTableProRequest} {@link DescribeForbiddenTableProResponse} */
  DescribeForbiddenTablePro(data?: DescribeForbiddenTableProRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeForbiddenTableProResponse>;
  /** 查询托管存储指定目录的Summary {@link DescribeLakeFsDirSummaryRequest} {@link DescribeLakeFsDirSummaryResponse} */
  DescribeLakeFsDirSummary(data?: DescribeLakeFsDirSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLakeFsDirSummaryResponse>;
  /** 查询用户的托管存储信息 {@link DescribeLakeFsInfoRequest} {@link DescribeLakeFsInfoResponse} */
  DescribeLakeFsInfo(data?: DescribeLakeFsInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLakeFsInfoResponse>;
  /** 获取LakeFs上task执行结果访问信息 {@link DescribeLakeFsTaskResultRequest} {@link DescribeLakeFsTaskResultResponse} */
  DescribeLakeFsTaskResult(data: DescribeLakeFsTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLakeFsTaskResultResponse>;
  /** 查询交互式 session详情信息 {@link DescribeNotebookSessionRequest} {@link DescribeNotebookSessionResponse} */
  DescribeNotebookSession(data: DescribeNotebookSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionResponse>;
  /** 查询交互式 session日志 {@link DescribeNotebookSessionLogRequest} {@link DescribeNotebookSessionLogResponse} */
  DescribeNotebookSessionLog(data: DescribeNotebookSessionLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionLogResponse>;
  /** 查询session 中执行任务的详情 {@link DescribeNotebookSessionStatementRequest} {@link DescribeNotebookSessionStatementResponse} */
  DescribeNotebookSessionStatement(data: DescribeNotebookSessionStatementRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionStatementResponse>;
  /** 获取statement运行结果（作用于：Spark交互式SQL任务、Notebook任务）。 {@link DescribeNotebookSessionStatementSqlResultRequest} {@link DescribeNotebookSessionStatementSqlResultResponse} */
  DescribeNotebookSessionStatementSqlResult(data: DescribeNotebookSessionStatementSqlResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionStatementSqlResultResponse>;
  /** 查询Session中执行的任务列表 {@link DescribeNotebookSessionStatementsRequest} {@link DescribeNotebookSessionStatementsResponse} */
  DescribeNotebookSessionStatements(data: DescribeNotebookSessionStatementsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionStatementsResponse>;
  /** 查询交互式 session列表 {@link DescribeNotebookSessionsRequest} {@link DescribeNotebookSessionsResponse} */
  DescribeNotebookSessions(data: DescribeNotebookSessionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionsResponse>;
  /** 查询其他产品元数据加速桶绑定列表 {@link DescribeOtherCHDFSBindingListRequest} {@link DescribeOtherCHDFSBindingListResponse} */
  DescribeOtherCHDFSBindingList(data: DescribeOtherCHDFSBindingListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOtherCHDFSBindingListResponse>;
  /** 查询结果下载任务 {@link DescribeResultDownloadRequest} {@link DescribeResultDownloadResponse} */
  DescribeResultDownload(data: DescribeResultDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResultDownloadResponse>;
  /** 查询SQL脚本列表 {@link DescribeScriptsRequest} {@link DescribeScriptsResponse} */
  DescribeScripts(data?: DescribeScriptsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScriptsResponse>;
  /** 查询spark作业信息 {@link DescribeSparkAppJobRequest} {@link DescribeSparkAppJobResponse} */
  DescribeSparkAppJob(data?: DescribeSparkAppJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkAppJobResponse>;
  /** 查询spark作业列表 {@link DescribeSparkAppJobsRequest} {@link DescribeSparkAppJobsResponse} */
  DescribeSparkAppJobs(data?: DescribeSparkAppJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkAppJobsResponse>;
  /** 查询spark应用的运行任务实例列表 {@link DescribeSparkAppTasksRequest} {@link DescribeSparkAppTasksResponse} */
  DescribeSparkAppTasks(data: DescribeSparkAppTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkAppTasksResponse>;
  /** 获取Spark SQL批任务运行状态 {@link DescribeSparkSessionBatchSQLRequest} {@link DescribeSparkSessionBatchSQLResponse} */
  DescribeSparkSessionBatchSQL(data: DescribeSparkSessionBatchSQLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkSessionBatchSQLResponse>;
  /** 获取Spark SQL批任务消耗 {@link DescribeSparkSessionBatchSQLCostRequest} {@link DescribeSparkSessionBatchSQLCostResponse} */
  DescribeSparkSessionBatchSQLCost(data?: DescribeSparkSessionBatchSQLCostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkSessionBatchSQLCostResponse>;
  /** 查询Spark SQL批任务日志 {@link DescribeSparkSessionBatchSqlLogRequest} {@link DescribeSparkSessionBatchSqlLogResponse} */
  DescribeSparkSessionBatchSqlLog(data: DescribeSparkSessionBatchSqlLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkSessionBatchSqlLogResponse>;
  /** 查询结果存储位置 {@link DescribeStoreLocationRequest} {@link DescribeStoreLocationResponse} */
  DescribeStoreLocation(data?: DescribeStoreLocationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStoreLocationResponse>;
  /** 查询子用户访问策略 {@link DescribeSubUserAccessPolicyRequest} {@link DescribeSubUserAccessPolicyResponse} */
  DescribeSubUserAccessPolicy(data?: DescribeSubUserAccessPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubUserAccessPolicyResponse>;
  /** 查询表详情 {@link DescribeTableRequest} {@link DescribeTableResponse} */
  DescribeTable(data: DescribeTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableResponse>;
  /** 查询数据表列表 {@link DescribeTablesRequest} {@link DescribeTablesResponse} */
  DescribeTables(data: DescribeTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesResponse>;
  /** 查询数据表名称列表 {@link DescribeTablesNameRequest} {@link DescribeTablesNameResponse} */
  DescribeTablesName(data: DescribeTablesNameRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesNameResponse>;
  /** 查询任务日志 {@link DescribeTaskLogRequest} {@link DescribeTaskLogResponse} */
  DescribeTaskLog(data: DescribeTaskLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogResponse>;
  /** 查询任务结果(用于: SparkSQL、PrestoSQL) {@link DescribeTaskResultRequest} {@link DescribeTaskResultResponse} */
  DescribeTaskResult(data: DescribeTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultResponse>;
  /** 查询任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data?: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 洞察分析列表 {@link DescribeTasksAnalysisRequest} {@link DescribeTasksAnalysisResponse} */
  DescribeTasksAnalysis(data?: DescribeTasksAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksAnalysisResponse>;
  /** 查询任务消耗 {@link DescribeTasksCostInfoRequest} {@link DescribeTasksCostInfoResponse} */
  DescribeTasksCostInfo(data?: DescribeTasksCostInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksCostInfoResponse>;
  /** 查看任务概览页 {@link DescribeTasksOverviewRequest} {@link DescribeTasksOverviewResponse} */
  DescribeTasksOverview(data?: DescribeTasksOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksOverviewResponse>;
  /** 查询开通的第三方平台访问用户信息 {@link DescribeThirdPartyAccessUserRequest} {@link DescribeThirdPartyAccessUserResponse} */
  DescribeThirdPartyAccessUser(data?: DescribeThirdPartyAccessUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeThirdPartyAccessUserResponse>;
  /** 查询可更新配置的引擎列表 {@link DescribeUpdatableDataEnginesRequest} {@link DescribeUpdatableDataEnginesResponse} */
  DescribeUpdatableDataEngines(data: DescribeUpdatableDataEnginesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUpdatableDataEnginesResponse>;
  /** 查询用户自定义引擎参数 {@link DescribeUserDataEngineConfigRequest} {@link DescribeUserDataEngineConfigResponse} */
  DescribeUserDataEngineConfig(data?: DescribeUserDataEngineConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDataEngineConfigResponse>;
  /** 获取用户详细信息 {@link DescribeUserInfoRequest} {@link DescribeUserInfoResponse} */
  DescribeUserInfo(data?: DescribeUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserInfoResponse>;
  /** 列举用户角色信息 {@link DescribeUserRolesRequest} {@link DescribeUserRolesResponse} */
  DescribeUserRoles(data: DescribeUserRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserRolesResponse>;
  /** 获取用户类型 {@link DescribeUserTypeRequest} {@link DescribeUserTypeResponse} */
  DescribeUserType(data?: DescribeUserTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserTypeResponse>;
  /** 获取用户列表信息 {@link DescribeUsersRequest} {@link DescribeUsersResponse} */
  DescribeUsers(data?: DescribeUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersResponse>;
  /** 查询视图列表 {@link DescribeViewsRequest} {@link DescribeViewsResponse} */
  DescribeViews(data: DescribeViewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeViewsResponse>;
  /** 获取工作组详细信息 {@link DescribeWorkGroupInfoRequest} {@link DescribeWorkGroupInfoResponse} */
  DescribeWorkGroupInfo(data?: DescribeWorkGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkGroupInfoResponse>;
  /** 获取工作组列表 {@link DescribeWorkGroupsRequest} {@link DescribeWorkGroupsResponse} */
  DescribeWorkGroups(data?: DescribeWorkGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkGroupsResponse>;
  /** 解绑用户鉴权策略 {@link DetachUserPolicyRequest} {@link DetachUserPolicyResponse} */
  DetachUserPolicy(data: DetachUserPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DetachUserPolicyResponse>;
  /** 解绑工作组鉴权策略 {@link DetachWorkGroupPolicyRequest} {@link DetachWorkGroupPolicyResponse} */
  DetachWorkGroupPolicy(data: DetachWorkGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DetachWorkGroupPolicyResponse>;
  /** DMS元数据删除库 {@link DropDMSDatabaseRequest} {@link DropDMSDatabaseResponse} */
  DropDMSDatabase(data: DropDMSDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<DropDMSDatabaseResponse>;
  /** DMS元数据删除分区 {@link DropDMSPartitionsRequest} {@link DropDMSPartitionsResponse} */
  DropDMSPartitions(data?: DropDMSPartitionsRequest, config?: AxiosRequestConfig): AxiosPromise<DropDMSPartitionsResponse>;
  /** DMS元数据删除表 {@link DropDMSTableRequest} {@link DropDMSTableResponse} */
  DropDMSTable(data?: DropDMSTableRequest, config?: AxiosRequestConfig): AxiosPromise<DropDMSTableResponse>;
  /** 生成创建托管表语句 {@link GenerateCreateMangedTableSqlRequest} {@link GenerateCreateMangedTableSqlResponse} */
  GenerateCreateMangedTableSql(data: GenerateCreateMangedTableSqlRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateCreateMangedTableSqlResponse>;
  /** 获取策略 {@link GetOptimizerPolicyRequest} {@link GetOptimizerPolicyResponse} */
  GetOptimizerPolicy(data: GetOptimizerPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<GetOptimizerPolicyResponse>;
  /** 授权DLCCatalog访问权限 {@link GrantDLCCatalogAccessRequest} {@link GrantDLCCatalogAccessResponse} */
  GrantDLCCatalogAccess(data: GrantDLCCatalogAccessRequest, config?: AxiosRequestConfig): AxiosPromise<GrantDLCCatalogAccessResponse>;
  /** 查询日志详情 {@link ListTaskJobLogDetailRequest} {@link ListTaskJobLogDetailResponse} */
  ListTaskJobLogDetail(data: ListTaskJobLogDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ListTaskJobLogDetailResponse>;
  /** 日志名称列表 {@link ListTaskJobLogNameRequest} {@link ListTaskJobLogNameResponse} */
  ListTaskJobLogName(data: ListTaskJobLogNameRequest, config?: AxiosRequestConfig): AxiosPromise<ListTaskJobLogNameResponse>;
  /** 元数据锁 {@link LockMetaDataRequest} {@link LockMetaDataResponse} */
  LockMetaData(data: LockMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<LockMetaDataResponse>;
  /** 修改高级设置 {@link ModifyAdvancedStoreLocationRequest} {@link ModifyAdvancedStoreLocationResponse} */
  ModifyAdvancedStoreLocation(data: ModifyAdvancedStoreLocationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAdvancedStoreLocationResponse>;
  /** 修改引擎描述信息 {@link ModifyDataEngineDescriptionRequest} {@link ModifyDataEngineDescriptionResponse} */
  ModifyDataEngineDescription(data: ModifyDataEngineDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataEngineDescriptionResponse>;
  /** 修改数据治理事件阈值 {@link ModifyGovernEventRuleRequest} {@link ModifyGovernEventRuleResponse} */
  ModifyGovernEventRule(data?: ModifyGovernEventRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGovernEventRuleResponse>;
  /** 更新spark作业 {@link ModifySparkAppRequest} {@link ModifySparkAppResponse} */
  ModifySparkApp(data: ModifySparkAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySparkAppResponse>;
  /** 批量修改Spark作业参数配置 {@link ModifySparkAppBatchRequest} {@link ModifySparkAppBatchResponse} */
  ModifySparkAppBatch(data: ModifySparkAppBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySparkAppBatchResponse>;
  /** 修改用户信息 {@link ModifyUserRequest} {@link ModifyUserResponse} */
  ModifyUser(data: ModifyUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserResponse>;
  /** 修改用户类型 {@link ModifyUserTypeRequest} {@link ModifyUserTypeResponse} */
  ModifyUserType(data: ModifyUserTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserTypeResponse>;
  /** 修改工作组信息 {@link ModifyWorkGroupRequest} {@link ModifyWorkGroupResponse} */
  ModifyWorkGroup(data: ModifyWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkGroupResponse>;
  /** 获取原生表warehouse路径 {@link QueryInternalTableWarehouseRequest} {@link QueryInternalTableWarehouseResponse} */
  QueryInternalTableWarehouse(data: QueryInternalTableWarehouseRequest, config?: AxiosRequestConfig): AxiosPromise<QueryInternalTableWarehouseResponse>;
  /** 获取任务结果查询 {@link QueryResultRequest} {@link QueryResultResponse} */
  QueryResult(data: QueryResultRequest, config?: AxiosRequestConfig): AxiosPromise<QueryResultResponse>;
  /** 查询任务消耗明细 {@link QueryTaskCostDetailRequest} {@link QueryTaskCostDetailResponse} */
  QueryTaskCostDetail(data?: QueryTaskCostDetailRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTaskCostDetailResponse>;
  /** 注册第三方平台访问用户 {@link RegisterThirdPartyAccessUserRequest} {@link RegisterThirdPartyAccessUserResponse} */
  RegisterThirdPartyAccessUser(data?: RegisterThirdPartyAccessUserRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterThirdPartyAccessUserResponse>;
  /** 续费包年包月数据引擎 {@link RenewDataEngineRequest} {@link RenewDataEngineResponse} */
  RenewDataEngine(data: RenewDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDataEngineResponse>;
  /** 上报元数据心跳 {@link ReportHeartbeatMetaDataRequest} {@link ReportHeartbeatMetaDataResponse} */
  ReportHeartbeatMetaData(data?: ReportHeartbeatMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<ReportHeartbeatMetaDataResponse>;
  /** 重启引擎 {@link RestartDataEngineRequest} {@link RestartDataEngineResponse} */
  RestartDataEngine(data: RestartDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDataEngineResponse>;
  /** 撤销DLCCatalog访问权限 {@link RevokeDLCCatalogAccessRequest} {@link RevokeDLCCatalogAccessResponse} */
  RevokeDLCCatalogAccess(data: RevokeDLCCatalogAccessRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeDLCCatalogAccessResponse>;
  /** 回滚引擎镜像版本 {@link RollbackDataEngineImageRequest} {@link RollbackDataEngineImageResponse} */
  RollbackDataEngineImage(data: RollbackDataEngineImageRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackDataEngineImageResponse>;
  /** 挂起或启动数据引擎 {@link SuspendResumeDataEngineRequest} {@link SuspendResumeDataEngineResponse} */
  SuspendResumeDataEngine(data: SuspendResumeDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<SuspendResumeDataEngineResponse>;
  /** 切换主备集群 {@link SwitchDataEngineRequest} {@link SwitchDataEngineResponse} */
  SwitchDataEngine(data: SwitchDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDataEngineResponse>;
  /** 切换引擎镜像版本 {@link SwitchDataEngineImageRequest} {@link SwitchDataEngineImageResponse} */
  SwitchDataEngineImage(data: SwitchDataEngineImageRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDataEngineImageResponse>;
  /** 解绑用户上的用户组 {@link UnbindWorkGroupsFromUserRequest} {@link UnbindWorkGroupsFromUserResponse} */
  UnbindWorkGroupsFromUser(data: UnbindWorkGroupsFromUserRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindWorkGroupsFromUserResponse>;
  /** 元数据解锁 {@link UnlockMetaDataRequest} {@link UnlockMetaDataResponse} */
  UnlockMetaData(data: UnlockMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockMetaDataResponse>;
  /** 更新数据引擎配置 {@link UpdateDataEngineRequest} {@link UpdateDataEngineResponse} */
  UpdateDataEngine(data: UpdateDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDataEngineResponse>;
  /** 修改引擎配置 {@link UpdateDataEngineConfigRequest} {@link UpdateDataEngineConfigResponse} */
  UpdateDataEngineConfig(data: UpdateDataEngineConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDataEngineConfigResponse>;
  /** 更新行过滤规则 {@link UpdateRowFilterRequest} {@link UpdateRowFilterResponse} */
  UpdateRowFilter(data: UpdateRowFilterRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRowFilterResponse>;
  /** 修改用户引擎自定义配置 {@link UpdateUserDataEngineConfigRequest} {@link UpdateUserDataEngineConfigResponse} */
  UpdateUserDataEngineConfig(data: UpdateUserDataEngineConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserDataEngineConfigResponse>;
  /** 升级引擎镜像 {@link UpgradeDataEngineImageRequest} {@link UpgradeDataEngineImageResponse} */
  UpgradeDataEngineImage(data: UpgradeDataEngineImageRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDataEngineImageResponse>;
}

export declare type Versions = ["2021-01-25"];

export default Dlc;
