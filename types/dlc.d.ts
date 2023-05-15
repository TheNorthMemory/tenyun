/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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
  /** 列类型，支持如下类型定义:string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array|map|struct|uniontype。 */
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
}

/** 定时启停策略信息 */
declare interface CrontabResumeSuspendStrategy {
  /** 定时拉起时间：如：周一8点 */
  ResumeTime?: string | null;
  /** 定时挂起时间：如：周一20点 */
  SuspendTime?: string | null;
  /** 挂起配置：0（默认）：等待任务结束后挂起、1：强制挂起 */
  SuspendStrategy?: number | null;
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

/** 引擎配置 */
declare interface DataEngineConfigPair {
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
}

/** 数据表数据格式。 */
declare interface DataFormat {
  /** 文本格式，TextFile。 */
  TextFile: TextFile | null;
  /** 文本格式，CSV。 */
  CSV: CSV | null;
  /** 文本格式，Json。 */
  Json: Other | null;
  /** Parquet格式 */
  Parquet: Other | null;
  /** ORC格式 */
  ORC: Other | null;
  /** AVRO格式 */
  AVRO: Other | null;
}

/** 数据治理规则 */
declare interface DataGovernPolicy {
  /** 治理规则类型，Customize: 自定义；Intelligence: 智能治理 */
  RuleType?: string | null;
  /** 治理引擎 */
  GovernEngine?: string | null;
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
  DatabaseName: string;
  /** 数据库描述信息，长度 0~256。 */
  Comment?: string | null;
  /** 允许针对数据库的属性元数据信息进行指定。 */
  Properties?: Property[] | null;
  /** 数据库创建时间戳，单位：s。 */
  CreateTime?: string | null;
  /** 数据库更新时间戳，单位：s。 */
  ModifiedTime?: string | null;
  /** cos存储路径 */
  Location: string | null;
  /** 建库用户昵称 */
  UserAlias: string | null;
  /** 建库用户ID */
  UserSubUin: string | null;
  /** 数据治理配置项 */
  GovernPolicy: DataGovernPolicy | null;
  /** 数据库ID */
  DatabaseId: string | null;
}

/** SQL语句对象 */
declare interface Execution {
  /** 自动生成SQL语句。 */
  SQL: string;
}

/** 查询列表过滤条件参数 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑或（OR）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** 日志详情 */
declare interface JobLogResult {
  /** 日志时间戳，毫秒 */
  Time: number | null;
  /** 日志topic id */
  TopicId: string | null;
  /** 日志topic name */
  TopicName: string | null;
  /** 日志内容，json字符串 */
  LogJson: string | null;
  /** 日志ID */
  PkgLogId?: string | null;
}

/** 配置格式 */
declare interface KVPair {
  /** 配置的key值 */
  Key: string | null;
  /** 配置的value值 */
  Value: string | null;
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
  Name: string;
  /** 类型，当前支持：spark、pyspark、sparkr、sql */
  Kind: string;
  /** DLC Spark作业引擎名称 */
  DataEngineName: string;
  /** Session相关配置，当前支持：eni、roleArn以及用户指定的配置 */
  Arguments: KVPair[] | null;
  /** 运行程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentFiles: string[] | null;
  /** 依赖的jar程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentJars: string[] | null;
  /** 依赖的python程序地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramDependentPython: string[] | null;
  /** 依赖的pyspark虚拟环境地址，当前支持：cosn://和lakefs://两种路径 */
  ProgramArchives: string[] | null;
  /** 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  DriverSize: string | null;
  /** 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu） */
  ExecutorSize: string | null;
  /** 指定的Executor数量，默认为1 */
  ExecutorNumbers: number | null;
  /** 代理用户，默认为root */
  ProxyUser: string | null;
  /** 指定的Session超时时间，单位秒，默认3600秒 */
  TimeoutInSecond: number | null;
  /** Spark任务返回的AppId */
  SparkAppId: string | null;
  /** Session唯一标识 */
  SessionId: string;
  /** Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止） */
  State: string;
  /** Session创建时间 */
  CreateTime: string;
  /** 其它信息 */
  AppInfo: KVPair[] | null;
  /** Spark ui地址 */
  SparkUiUrl: string | null;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers */
  ExecutorMaxNumbers?: number | null;
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
  Completed: number | null;
  /** 开始时间戳 */
  Started: number | null;
  /** 完成进度，百分制 */
  Progress: number | null;
  /** Session Statement唯一标识 */
  StatementId: string;
  /** Session Statement状态，包含：waiting（排队中）、running（运行中）、available（正常）、error（异常）、cancelling（取消中）、cancelled（已取消） */
  State: string;
  /** Statement输出信息 */
  OutPut: StatementOutput | null;
  /** 批任务id */
  BatchId?: string | null;
  /** 运行语句 */
  Code?: string | null;
  /** 任务ID */
  TaskId?: string | null;
}

/** notebook session列表信息。 */
declare interface NotebookSessions {
  /** 类型，当前支持：spark、pyspark、sparkr、sql */
  Kind: string;
  /** Session唯一标识 */
  SessionId: string;
  /** 代理用户，默认为root */
  ProxyUser: string | null;
  /** Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止） */
  State: string;
  /** Spark任务返回的AppId */
  SparkAppId: string | null;
  /** Session名称 */
  Name: string;
  /** Session创建时间 */
  CreateTime: string;
  /** 引擎名称 */
  DataEngineName: string;
  /** 最新的运行时间 */
  LastRunningTime: string | null;
  /** 创建者 */
  Creator: string;
  /** spark ui地址 */
  SparkUiUrl: string | null;
}

/** 数据格式其它类型。 */
declare interface Other {
  /** 枚举类型，默认值为Json，可选值为[Json, Parquet, ORC, AVRD]之一。 */
  Format: string;
}

/** 数据表分块信息。 */
declare interface Partition {
  /** 分区列名。 */
  Name: string;
  /** 分区类型。 */
  Type: string;
  /** 对分区的描述。 */
  Comment: string;
  /** 隐式分区转换策略 */
  Transform: string | null;
  /** 转换策略参数 */
  TransformArgs: string[] | null;
  /** 创建时间 */
  CreateTime: number | null;
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
}

/** 数据库和数据表属性信息 */
declare interface Property {
  /** 属性key名称。 */
  Key: string;
  /** 属性key对应的value。 */
  Value: string;
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
  ScriptId: string | null;
  /** 脚本名称，长度0-25。 */
  ScriptName: string | null;
  /** 脚本描述，长度0-50。 */
  ScriptDesc: string | null;
  /** 默认关联数据库。 */
  DatabaseName: string | null;
  /** SQL描述，长度0-10000。 */
  SQLStatement: string | null;
  /** 更新时间戳， 单位：ms。 */
  UpdateTime: number | null;
}

/** spark作业详情。 */
declare interface SparkJobInfo {
  /** spark作业ID */
  JobId: string;
  /** spark作业名 */
  JobName: string;
  /** spark作业类型，可去1或者2，1表示batch作业， 2表示streaming作业 */
  JobType: number;
  /** 引擎名 */
  DataEngine: string;
  /** 该字段已下线，请使用字段Datasource */
  Eni: string;
  /** 程序包是否本地上传，cos或者lakefs */
  IsLocal: string;
  /** 程序包路径 */
  JobFile: string;
  /** 角色ID */
  RoleArn: number;
  /** spark作业运行主类 */
  MainClass: string;
  /** 命令行参数，spark作业命令行参数，空格分隔 */
  CmdArgs: string;
  /** spark原生配置，换行符分隔 */
  JobConf: string;
  /** 依赖jars是否本地上传，cos或者lakefs */
  IsLocalJars: string;
  /** spark作业依赖jars，逗号分隔 */
  JobJars: string;
  /** 依赖文件是否本地上传，cos或者lakefs */
  IsLocalFiles: string;
  /** spark作业依赖文件，逗号分隔 */
  JobFiles: string;
  /** spark作业driver资源大小 */
  JobDriverSize: string;
  /** spark作业executor资源大小 */
  JobExecutorSize: string;
  /** spark作业executor个数 */
  JobExecutorNums: number;
  /** spark流任务最大重试次数 */
  JobMaxAttempts: number;
  /** spark作业创建者 */
  JobCreator: string;
  /** spark作业创建时间 */
  JobCreateTime: number;
  /** spark作业更新时间 */
  JobUpdateTime: number;
  /** spark作业最近任务ID */
  CurrentTaskId: string;
  /** spark作业最近运行状态 */
  JobStatus: number;
  /** spark流作业统计 */
  StreamingStat: StreamingStatistics | null;
  /** 数据源名 */
  DataSource: string | null;
  /** pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalPythonFiles: string | null;
  /** 注：该返回值已废弃 */
  AppPythonFiles: string | null;
  /** archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalArchives: string | null;
  /** archives：依赖资源 */
  JobArchives: string | null;
  /** Spark Image 版本 */
  SparkImage: string | null;
  /** pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔 */
  JobPythonFiles: string | null;
  /** 当前job正在运行或准备运行的任务个数 */
  TaskNum: number | null;
  /** 引擎状态：-100（默认：未知状态），-2~11：引擎正常状态； */
  DataEngineStatus: number | null;
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
}

/** notebook session statement输出信息。 */
declare interface StatementOutput {
  /** 执行总数 */
  ExecutionCount: number | null;
  /** Statement数据 */
  Data: KVPair[] | null;
  /** Statement状态:ok,error */
  Status: string | null;
  /** 错误名称 */
  ErrorName: string | null;
  /** 错误类型 */
  ErrorValue: string | null;
  /** 错误堆栈信息 */
  ErrorMessage: string[] | null;
  /** SQL类型任务结果返回 */
  SQLResult?: string | null;
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

/** 表字段描述信息 */
declare interface TColumn {
  /** 字段名称 */
  Name: string;
  /** 字段类型 */
  Type: string;
  /** 字段描述 */
  Comment?: string;
  /** 字段默认值 */
  Default?: string;
  /** 字段是否是非空 */
  NotNull?: boolean;
}

/** 表分区字段信息 */
declare interface TPartition {
  /** 字段名称 */
  Name: string;
  /** 字段类型 */
  Type?: string;
  /** 字段描述 */
  Comment?: string;
  /** 分区类型 */
  PartitionType?: string;
  /** 分区格式 */
  PartitionFormat?: string;
  /** 分区分隔数 */
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
  TableBaseInfo: TableBaseInfo;
  /** 数据表列信息。 */
  Columns: Column[] | null;
  /** 数据表分块信息。 */
  Partitions: Partition[] | null;
  /** 数据存储路径。 */
  Location: string | null;
  /** 数据表属性信息。 */
  Properties: Property[] | null;
  /** 数据表更新时间, 单位: ms。 */
  ModifiedTime: string | null;
  /** 数据表创建时间,单位: ms。 */
  CreateTime: string | null;
  /** 数据格式。 */
  InputFormat: string | null;
  /** 数据表存储大小（单位：Byte） */
  StorageSize: number | null;
  /** 数据表行数 */
  RecordCount: number | null;
}

/** 标签对信息 */
declare interface TagInfo {
  /** 标签键 */
  TagKey?: string | null;
  /** 标签值 */
  TagValue?: string | null;
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
  DatabaseName: string;
  /** 任务数据量。 */
  DataAmount: number;
  /** 任务Id。 */
  Id: string;
  /** 计算耗时，单位： ms */
  UsedTime: number;
  /** 任务输出路径。 */
  OutputPath: string;
  /** 任务创建时间。 */
  CreateTime: string;
  /** 任务状态：0 初始化， 1 执行中， 2 执行成功，-1 执行失败，-3 已取消。 */
  State: number;
  /** 任务SQL类型，DDL|DML等 */
  SQLType: string;
  /** 任务SQL语句 */
  SQL: string;
  /** 结果是否过期。 */
  ResultExpired: boolean;
  /** 数据影响统计信息。 */
  RowAffectInfo: string;
  /** 任务结果数据表。 */
  DataSet: string | null;
  /** 失败信息, 例如：errorMessage。该字段已废弃。 */
  Error: string;
  /** 任务执行进度num/100(%) */
  Percentage: number;
  /** 任务执行输出信息。 */
  OutputMessage: string;
  /** 执行SQL的引擎类型 */
  TaskType: string;
  /** 任务进度明细 */
  ProgressDetail: string | null;
  /** 任务结束时间 */
  UpdateTime: string | null;
  /** 计算资源id */
  DataEngineId: string | null;
  /** 执行sql的子uin */
  OperateUin: string | null;
  /** 计算资源名字 */
  DataEngineName: string | null;
  /** 导入类型是本地导入还是cos */
  InputType: string | null;
  /** 导入配置 */
  InputConf: string | null;
  /** 数据条数 */
  DataNumber: number | null;
  /** 查询数据能不能下载 */
  CanDownload: boolean | null;
  /** 用户别名 */
  UserAlias: string | null;
  /** spark应用作业名 */
  SparkJobName: string | null;
  /** spark应用作业Id */
  SparkJobId: string | null;
  /** spark应用入口jar文件 */
  SparkJobFile: string | null;
  /** spark ui url */
  UiUrl: string | null;
  /** 任务耗时，单位： ms */
  TotalTime: number | null;
  /** spark app job执行task的程序入口参数 */
  CmdArgs: string | null;
}

/** 任务结果信息。 */
declare interface TaskResultInfo {
  /** 任务唯一ID */
  TaskId: string;
  /** 数据源名称，当前任务执行时候选中的默认数据源 */
  DatasourceConnectionName: string | null;
  /** 数据库名称，当前任务执行时候选中的默认数据库 */
  DatabaseName: string | null;
  /** 当前执行的SQL，一个任务包含一个SQL */
  SQL: string;
  /** 执行任务的类型，现在分为DDL、DML、DQL */
  SQLType: string;
  /** 任务当前的状态，0：初始化 1：任务运行中 2：任务执行成功 -1：任务执行失败 -3：用户手动终止。只有任务执行成功的情况下，才会返回任务执行的结果 */
  State: number;
  /** 扫描的数据量，单位byte */
  DataAmount: number;
  /** 计算耗时，单位： ms */
  UsedTime: number;
  /** 任务结果输出的COS桶地址 */
  OutputPath: string;
  /** 任务创建时间，时间戳 */
  CreateTime: string;
  /** 任务执行信息，成功时返回success，失败时返回失败原因 */
  OutputMessage: string;
  /** 被影响的行数 */
  RowAffectInfo: string;
  /** 结果的schema信息 */
  ResultSchema: Column[] | null;
  /** 结果信息，反转义后，外层数组的每个元素为一行数据 */
  ResultSet: string | null;
  /** 分页信息，如果没有更多结果数据，nextToken为空 */
  NextToken: string;
  /** 任务执行进度num/100(%) */
  Percentage: number;
  /** 任务进度明细 */
  ProgressDetail: string;
  /** 控制台展示格式。table：表格展示 text：文本展示 */
  DisplayFormat: string;
  /** 任务耗时，单位： ms */
  TotalTime: number;
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
  Format: string;
  /** 处理文本用的正则表达式。 */
  Regex: string | null;
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
  ViewBaseInfo: ViewBaseInfo;
  /** 视图列信息。 */
  Columns: Column[] | null;
  /** 视图属性信息。 */
  Properties: Property[] | null;
  /** 视图创建时间。 */
  CreateTime: string;
  /** 视图更新时间。 */
  ModifiedTime: string;
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
  WorkGroupId: number;
  /** 工作组名称 */
  WorkGroupName: string;
  /** 工作组描述 */
  WorkGroupDescription: string | null;
  /** 工作组关联的用户数量 */
  UserNum: number;
  /** 工作组关联的用户集合 */
  UserSet: UserMessage[] | null;
  /** 工作组绑定的权限集合 */
  PolicySet: Policy[] | null;
  /** 工作组的创建人 */
  Creator: string;
  /** 工作组的创建时间，形如2021-07-28 16:19:32 */
  CreateTime: string;
}

/** 工作组部分信息 */
declare interface WorkGroupMessage {
  /** 工作组唯一Id */
  WorkGroupId: number;
  /** 工作组名称 */
  WorkGroupName: string;
  /** 工作组描述 */
  WorkGroupDescription: string | null;
  /** 创建者 */
  Creator: string;
  /** 工作组创建的时间，形如2021-07-28 16:19:32 */
  CreateTime: string;
}

declare interface AddDMSPartitionsRequest {
  /** 分区 */
  Partitions?: DMSPartition[];
}

declare interface AddDMSPartitionsResponse {
  /** 成功数量 */
  Total: number;
  /** 分区值 */
  Partitions: DMSPartition[];
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
}

declare interface AlterDMSTableResponse {
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

declare interface CancelTaskRequest {
  /** 任务Id，全局唯一 */
  TaskId: string;
}

declare interface CancelTaskResponse {
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
  LockId: number;
  /** 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED */
  LockState: string;
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
}

declare interface CreateDMSDatabaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDMSTableRequest {
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
  /** 表名称 */
  Name?: string;
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
  /** 是否为默虚拟集群 */
  DefaultDataEngine?: boolean;
  /** VPC网段 */
  CidrBlock?: string;
  /** 描述信息 */
  Message?: string;
  /** 集群规模 */
  Size?: number;
  /** 计费类型，后付费：0，预付费：1。当前只支持后付费，不填默认为后付费。 */
  PayMode?: number;
  /** 资源使用时长，后付费：固定填3600，预付费：最少填1，代表购买资源一个月，最长不超过120。默认3600 */
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
  /** 引擎执行任务类型，默认为SQL */
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
  /** 主集群名称 */
  MainClusterName?: string;
  /** spark jar 包年包月集群是否开启弹性 */
  ElasticSwitch?: boolean;
  /** spark jar 包年包月集群弹性上限 */
  ElasticLimit?: number;
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
  Execution: Execution;
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
  Execution: string;
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
  /** Session相关配置，当前支持：dlc.eni、dlc.role.arn、dlc.sql.set.config以及用户指定的配置，注：roleArn必填； */
  Arguments?: KVPair[];
  /** 代理用户，默认为root */
  ProxyUser?: string;
  /** 指定的Session超时时间，单位秒，默认3600秒 */
  TimeoutInSecond?: number;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers */
  ExecutorMaxNumbers?: number;
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
  /** 类型，当前支持：spark、pyspark、sparkr、sql */
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
  /** 是否重新生成下载文件，仅当之前任务为 Timout | Error 时有效 */
  Force?: boolean;
}

declare interface CreateResultDownloadResponse {
  /** 下载任务Id */
  DownloadId: string;
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
  /** spark应用名 */
  AppName: string;
  /** 1代表spark jar应用，2代表spark streaming应用 */
  AppType: number;
  /** 执行spark作业的数据引擎 */
  DataEngine: string;
  /** spark应用的执行入口 */
  AppFile: string;
  /** 执行spark作业的角色ID */
  RoleArn: number;
  /** spark作业driver资源规格大小, 可取small,medium,large,xlarge */
  AppDriverSize: string;
  /** spark作业executor资源规格大小, 可取small,medium,large,xlarge */
  AppExecutorSize: string;
  /** spark作业executor个数 */
  AppExecutorNums: number;
  /** 该字段已下线，请使用字段Datasource */
  Eni?: string;
  /** 是否本地上传，可去cos,lakefs */
  IsLocal?: string;
  /** spark jar作业时的主类 */
  MainClass?: string;
  /** spark配置，以换行符分隔 */
  AppConf?: string;
  /** 是否本地上传，包含cos,lakefs */
  IsLocalJars?: string;
  /** spark jar作业依赖jars，以逗号分隔 */
  AppJars?: string;
  /** 是否本地上传，包含cos,lakefs */
  IsLocalFiles?: string;
  /** spark作业依赖资源，以逗号分隔 */
  AppFiles?: string;
  /** spark作业命令行参数 */
  CmdArgs?: string;
  /** 只对spark流任务生效 */
  MaxRetries?: number;
  /** 数据源名 */
  DataSource?: string;
  /** pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalPythonFiles?: string;
  /** pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔 */
  AppPythonFiles?: string;
  /** archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalArchives?: string;
  /** archives：依赖资源 */
  AppArchives?: string;
  /** Spark Image 版本 */
  SparkImage?: string;
  /** Spark Image 版本名称 */
  SparkImageVersion?: string;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums */
  AppExecutorMaxNumbers?: number;
  /** 关联dlc查询脚本id */
  SessionId?: string;
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
  /** spark作业的命令行参数，以空格分隔；一般用于周期性调用使用 */
  CmdArgs?: string;
}

declare interface CreateSparkAppTaskResponse {
  /** 批Id */
  BatchId: string;
  /** 任务Id */
  TaskId: string;
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
  Execution: Execution;
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
}

declare interface CreateTaskResponse {
  /** 任务ID */
  TaskId: string | null;
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
}

declare interface CreateTasksResponse {
  /** 本批次提交的任务的批次Id */
  BatchId: string;
  /** 任务Id集合，按照执行顺序排列 */
  TaskIdSet: string[];
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
  WorkGroupId: number;
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
  /** spark应用名 */
  AppName: string;
}

declare interface DeleteSparkAppResponse {
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

declare interface DescribeDMSDatabaseRequest {
  /** 数据库名称 */
  Name?: string;
  /** schema名称 */
  SchemaName?: string;
  /** 匹配规则 */
  Pattern?: string;
}

declare interface DescribeDMSDatabaseResponse {
  /** 数据库名称 */
  Name: string | null;
  /** schema名称 */
  SchemaName: string | null;
  /** 存储地址 */
  Location: string | null;
  /** 数据对象 */
  Asset: Asset | null;
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
}

declare interface DescribeDMSPartitionsResponse {
  /** 分区信息 */
  Partitions: DMSPartition[];
  /** 总数 */
  Total: number;
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
  /** 数据目录 */
  Catalog?: string;
  /** 查询关键词 */
  Keyword?: string;
  /** 查询模式 */
  Pattern?: string;
  /** 表类型 */
  Type?: string;
}

declare interface DescribeDMSTableResponse {
  /** 基础对象 */
  Asset: Asset | null;
  /** 视图文本 */
  ViewOriginalText: string | null;
  /** 视图文本 */
  ViewExpandedText: string | null;
  /** hive维护版本 */
  Retention: number | null;
  /** 存储对象 */
  Sds: DMSSds | null;
  /** 分区列 */
  PartitionKeys: DMSColumn[] | null;
  /** 分区 */
  Partitions: DMSPartition[] | null;
  /** 表类型 */
  Type: string | null;
  /** 数据库名称 */
  DbName: string | null;
  /** Schame名称 */
  SchemaName: string | null;
  /** 存储大小 */
  StorageSize: number | null;
  /** 记录数量 */
  RecordCount: number | null;
  /** 生命周期 */
  LifeTime: number | null;
  /** 最后访问时间 */
  LastAccessTime: string | null;
  /** 数据更新时间 */
  DataUpdateTime: string | null;
  /** 结构更新时间 */
  StructUpdateTime: string | null;
  /** 列 */
  Columns: DMSColumn[] | null;
  /** 表名称 */
  Name: string | null;
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
  /** 数据目录 */
  Catalog?: string;
  /** 查询关键词 */
  Keyword?: string;
  /** 查询模式 */
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
}

declare interface DescribeDMSTablesResponse {
  /** DMS元数据列表信息 */
  TableList: DMSTableInfo[] | null;
  /** 统计值 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEnginesRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 滤类型，传参Name应为以下其中一个,data-engine-name - String engine-type - Stringstate - String mode - String create-time - String message - String */
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
  /** 引擎执行任务类型，有效值：SQL/BATCH */
  EngineExecType?: string;
  /** 引擎类型，有效值：spark/presto */
  EngineType?: string;
  /** 网络配置列表，若传入该参数，则返回网络配置关联的计算引擎 */
  DatasourceConnectionNameSet?: string[];
}

declare interface DescribeDataEnginesResponse {
  /** 数据引擎列表 */
  DataEngines?: DataEngineInfo[] | null;
  /** 总条数 */
  TotalCount?: number | null;
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
  /** 排序字段，当前版本仅支持按库名排序 */
  Sort?: string;
  /** 排序类型：false：降序（默认）、true：升序 */
  Asc?: boolean;
}

declare interface DescribeDatabasesResponse {
  /** 数据库对象列表。 */
  DatabaseList: DatabaseResponseInfo[];
  /** 实例总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEngineUsageInfoRequest {
  /** House Id */
  DataEngineId: string;
}

declare interface DescribeEngineUsageInfoResponse {
  /** 集群总规格 */
  Total: number;
  /** 已占用集群规格 */
  Used: number;
  /** 剩余集群规格 */
  Available: number;
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
  Logs: string[];
  /** 分页参数，默认200 */
  Limit: number;
  /** 分页参数，默认0 */
  Offset: number;
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
  /** 分页字段 */
  Limit?: number;
  /** 分页字段 */
  Offset?: number;
}

declare interface DescribeNotebookSessionsResponse {
  /** session总数量 */
  TotalElements: number;
  /** 总页数 */
  TotalPages: number;
  /** 当前页码 */
  Page: number;
  /** 当前页数量 */
  Size: number;
  /** session列表信息 */
  Sessions: NotebookSessions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResultDownloadRequest {
  /** 查询任务Id */
  DownloadId: string;
}

declare interface DescribeResultDownloadResponse {
  /** 下载文件路径 */
  Path: string | null;
  /** 任务状态 init | queue | format | compress | success| timeout | error */
  Status: string;
  /** 任务异常原因 */
  Reason: string | null;
  /** 临时AK */
  SecretId: string | null;
  /** 临时SK */
  SecretKey: string | null;
  /** 临时Token */
  Token: string | null;
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
  Scripts: Script[] | null;
  /** 实例总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSparkAppJobRequest {
  /** spark作业Id，与JobName同时存在时，JobName无效 */
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
  /** 按照该参数过滤,支持spark-job-name */
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
  /** 更新时间起始点 */
  StartTime?: string;
  /** 更新时间截止点 */
  EndTime?: string;
  /** 按照该参数过滤,支持task-state */
  Filters?: Filter[];
}

declare interface DescribeSparkAppTasksResponse {
  /** 任务结果（该字段已废弃） */
  Tasks: TaskResponseInfo | null;
  /** 任务总数 */
  TotalCount: number;
  /** 任务结果列表 */
  SparkAppTasks: TaskResponseInfo[] | null;
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
  Table: TableResponseInfo;
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
  /** 起始时间：用于对更新时间的筛选 */
  StartTime?: string;
  /** 终止时间：用于对更新时间的筛选 */
  EndTime?: string;
  /** 排序字段，支持：CreateTime、UpdateTime、StorageSize、RecordCount、Name（不传则默认按name升序） */
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
  TableList: TableResponseInfo[];
  /** 实例总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskResultRequest {
  /** 任务唯一ID */
  TaskId: string;
  /** 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回MaxResults字段设置的数据量。 */
  NextToken?: string;
  /** 返回结果的最大行数，范围0~1000，默认为1000. */
  MaxResults?: number;
}

declare interface DescribeTaskResultResponse {
  /** 查询的任务信息，返回为空表示输入任务ID对应的任务不存在。只有当任务状态为成功（2）的时候，才会返回任务的结果。 */
  TaskInfo: TaskResultInfo | null;
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
  /** 支持计算资源名字筛选 */
  DataEngineName?: string;
}

declare interface DescribeTasksResponse {
  /** 任务对象列表。 */
  TaskList: TaskResponseInfo[];
  /** 实例总数。 */
  TotalCount: number;
  /** 任务概览信息 */
  TasksOverview: TasksOverview | null;
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
  ViewList: ViewResponseInfo[];
  /** 实例总数。 */
  TotalCount: number;
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
}

declare interface DropDMSPartitionsResponse {
  /** 状态 */
  Status: boolean;
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
  LockId: number;
  /** 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED */
  LockState: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGovernEventRuleRequest {
}

declare interface ModifyGovernEventRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySparkAppRequest {
  /** spark应用名 */
  AppName: string;
  /** 1代表spark jar应用，2代表spark streaming应用 */
  AppType: number;
  /** 执行spark作业的数据引擎 */
  DataEngine: string;
  /** spark应用的执行入口 */
  AppFile: string;
  /** 执行spark作业的角色ID */
  RoleArn: number;
  /** spark作业driver资源规格大小, 可取small,medium,large,xlarge */
  AppDriverSize: string;
  /** spark作业executor资源规格大小, 可取small,medium,large,xlarge */
  AppExecutorSize: string;
  /** spark作业executor个数 */
  AppExecutorNums: number;
  /** spark应用Id */
  SparkAppId: string;
  /** 该字段已下线，请使用字段Datasource */
  Eni?: string;
  /** 是否本地上传，可取cos,lakefs */
  IsLocal?: string;
  /** spark jar作业时的主类 */
  MainClass?: string;
  /** spark配置，以换行符分隔 */
  AppConf?: string;
  /** jar资源依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalJars?: string;
  /** spark jar作业依赖jars，以逗号分隔 */
  AppJars?: string;
  /** file资源依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalFiles?: string;
  /** spark作业依赖资源，以逗号分隔 */
  AppFiles?: string;
  /** pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalPythonFiles?: string;
  /** pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔 */
  AppPythonFiles?: string;
  /** spark作业命令行参数 */
  CmdArgs?: string;
  /** 只对spark流任务生效 */
  MaxRetries?: number;
  /** 数据源名 */
  DataSource?: string;
  /** archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用） */
  IsLocalArchives?: string;
  /** archives：依赖资源 */
  AppArchives?: string;
  /** Spark Image 版本 */
  SparkImage?: string;
  /** Spark Image 版本名称 */
  SparkImageVersion?: string;
  /** 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums */
  AppExecutorMaxNumbers?: number;
  /** 关联dlc查询脚本 */
  SessionId?: string;
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

declare interface ModifyWorkGroupRequest {
  /** 工作组Id */
  WorkGroupId: number;
  /** 工作组描述 */
  WorkGroupDescription: string;
}

declare interface ModifyWorkGroupResponse {
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

declare interface SuspendResumeDataEngineRequest {
  /** 虚拟集群名称 */
  DataEngineName: string;
  /** 操作类型 suspend/resume */
  Operate: string;
}

declare interface SuspendResumeDataEngineResponse {
  /** 虚拟集群详细信息 */
  DataEngineName: string;
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

/** {@link Dlc 数据湖计算 DLC} */
declare interface Dlc {
  (): Versions;
  /** DMS元数据新增分区 {@link AddDMSPartitionsRequest} {@link AddDMSPartitionsResponse} */
  AddDMSPartitions(data?: AddDMSPartitionsRequest, config?: AxiosRequestConfig): AxiosPromise<AddDMSPartitionsResponse>;
  /** 添加用户到工作组 {@link AddUsersToWorkGroupRequest} {@link AddUsersToWorkGroupResponse} */
  AddUsersToWorkGroup(data: AddUsersToWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddUsersToWorkGroupResponse>;
  /** DMS元数据更新库 {@link AlterDMSDatabaseRequest} {@link AlterDMSDatabaseResponse} */
  AlterDMSDatabase(data?: AlterDMSDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<AlterDMSDatabaseResponse>;
  /** DMS元数据更新分区 {@link AlterDMSPartitionRequest} {@link AlterDMSPartitionResponse} */
  AlterDMSPartition(data: AlterDMSPartitionRequest, config?: AxiosRequestConfig): AxiosPromise<AlterDMSPartitionResponse>;
  /** DMS元数据更新表 {@link AlterDMSTableRequest} {@link AlterDMSTableResponse} */
  AlterDMSTable(data: AlterDMSTableRequest, config?: AxiosRequestConfig): AxiosPromise<AlterDMSTableResponse>;
  /** 绑定鉴权策略到用户 {@link AttachUserPolicyRequest} {@link AttachUserPolicyResponse} */
  AttachUserPolicy(data: AttachUserPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachUserPolicyResponse>;
  /** 绑定鉴权策略到工作组 {@link AttachWorkGroupPolicyRequest} {@link AttachWorkGroupPolicyResponse} */
  AttachWorkGroupPolicy(data: AttachWorkGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachWorkGroupPolicyResponse>;
  /** 绑定工作组到用户 {@link BindWorkGroupsToUserRequest} {@link BindWorkGroupsToUserResponse} */
  BindWorkGroupsToUser(data: BindWorkGroupsToUserRequest, config?: AxiosRequestConfig): AxiosPromise<BindWorkGroupsToUserResponse>;
  /** 取消session statement {@link CancelNotebookSessionStatementRequest} {@link CancelNotebookSessionStatementResponse} */
  CancelNotebookSessionStatement(data: CancelNotebookSessionStatementRequest, config?: AxiosRequestConfig): AxiosPromise<CancelNotebookSessionStatementResponse>;
  /** 按批取消Session statement. {@link CancelNotebookSessionStatementBatchRequest} {@link CancelNotebookSessionStatementBatchResponse} */
  CancelNotebookSessionStatementBatch(data: CancelNotebookSessionStatementBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CancelNotebookSessionStatementBatchResponse>;
  /** 取消任务执行 {@link CancelTaskRequest} {@link CancelTaskResponse} */
  CancelTask(data: CancelTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelTaskResponse>;
  /** 元数据锁检查 {@link CheckLockMetaDataRequest} {@link CheckLockMetaDataResponse} */
  CheckLockMetaData(data: CheckLockMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<CheckLockMetaDataResponse>;
  /** DMS元数据创建库 {@link CreateDMSDatabaseRequest} {@link CreateDMSDatabaseResponse} */
  CreateDMSDatabase(data?: CreateDMSDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDMSDatabaseResponse>;
  /** DMS元数据创建表 {@link CreateDMSTableRequest} {@link CreateDMSTableResponse} */
  CreateDMSTable(data?: CreateDMSTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDMSTableResponse>;
  /** 数据引擎创建 {@link CreateDataEngineRequest} {@link CreateDataEngineResponse} */
  CreateDataEngine(data: CreateDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataEngineResponse>;
  /** 生成建库SQL语句 {@link CreateDatabaseRequest} {@link CreateDatabaseResponse} */
  CreateDatabase(data: CreateDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatabaseResponse>;
  /** 创建导出任务 {@link CreateExportTaskRequest} {@link CreateExportTaskResponse} */
  CreateExportTask(data: CreateExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExportTaskResponse>;
  /** 创建导入任务 {@link CreateImportTaskRequest} {@link CreateImportTaskResponse} */
  CreateImportTask(data: CreateImportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImportTaskResponse>;
  /** 创建托管存储内表 {@link CreateInternalTableRequest} {@link CreateInternalTableResponse} */
  CreateInternalTable(data: CreateInternalTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInternalTableResponse>;
  /** 创建notebook livy session {@link CreateNotebookSessionRequest} {@link CreateNotebookSessionResponse} */
  CreateNotebookSession(data: CreateNotebookSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookSessionResponse>;
  /** 创建session statement {@link CreateNotebookSessionStatementRequest} {@link CreateNotebookSessionStatementResponse} */
  CreateNotebookSessionStatement(data: CreateNotebookSessionStatementRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookSessionStatementResponse>;
  /** 创建Statement批量运行SQL任务 {@link CreateNotebookSessionStatementSupportBatchSQLRequest} {@link CreateNotebookSessionStatementSupportBatchSQLResponse} */
  CreateNotebookSessionStatementSupportBatchSQL(data: CreateNotebookSessionStatementSupportBatchSQLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookSessionStatementSupportBatchSQLResponse>;
  /** 创建查询结果下载任务 {@link CreateResultDownloadRequest} {@link CreateResultDownloadResponse} */
  CreateResultDownload(data: CreateResultDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResultDownloadResponse>;
  /** 创建sql脚本 {@link CreateScriptRequest} {@link CreateScriptResponse} */
  CreateScript(data: CreateScriptRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScriptResponse>;
  /** 创建spark应用 {@link CreateSparkAppRequest} {@link CreateSparkAppResponse} */
  CreateSparkApp(data: CreateSparkAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSparkAppResponse>;
  /** 创建spark任务 {@link CreateSparkAppTaskRequest} {@link CreateSparkAppTaskResponse} */
  CreateSparkAppTask(data: CreateSparkAppTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSparkAppTaskResponse>;
  /** 修改结果存储位置 {@link CreateStoreLocationRequest} {@link CreateStoreLocationResponse} */
  CreateStoreLocation(data: CreateStoreLocationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStoreLocationResponse>;
  /** 生成建表SQL {@link CreateTableRequest} {@link CreateTableResponse} */
  CreateTable(data: CreateTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTableResponse>;
  /** 任务创建 {@link CreateTaskRequest} {@link CreateTaskResponse} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** 批量创建任务 {@link CreateTasksRequest} {@link CreateTasksResponse} */
  CreateTasks(data: CreateTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTasksResponse>;
  /** 按顺序创建任务 {@link CreateTasksInOrderRequest} {@link CreateTasksInOrderResponse} */
  CreateTasksInOrder(data: CreateTasksInOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTasksInOrderResponse>;
  /** 创建用户 {@link CreateUserRequest} {@link CreateUserResponse} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** 创建工作组 {@link CreateWorkGroupRequest} {@link CreateWorkGroupResponse} */
  CreateWorkGroup(data: CreateWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkGroupResponse>;
  /** 删除notebook livy session {@link DeleteNotebookSessionRequest} {@link DeleteNotebookSessionResponse} */
  DeleteNotebookSession(data: DeleteNotebookSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNotebookSessionResponse>;
  /** 删除sql脚本 {@link DeleteScriptRequest} {@link DeleteScriptResponse} */
  DeleteScript(data: DeleteScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScriptResponse>;
  /** 删除spark应用 {@link DeleteSparkAppRequest} {@link DeleteSparkAppResponse} */
  DeleteSparkApp(data: DeleteSparkAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSparkAppResponse>;
  /** 删除用户 {@link DeleteUserRequest} {@link DeleteUserResponse} */
  DeleteUser(data: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** 从工作组中删除用户 {@link DeleteUsersFromWorkGroupRequest} {@link DeleteUsersFromWorkGroupResponse} */
  DeleteUsersFromWorkGroup(data: DeleteUsersFromWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsersFromWorkGroupResponse>;
  /** 删除工作组 {@link DeleteWorkGroupRequest} {@link DeleteWorkGroupResponse} */
  DeleteWorkGroup(data: DeleteWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkGroupResponse>;
  /** DMS元数据获取库 {@link DescribeDMSDatabaseRequest} {@link DescribeDMSDatabaseResponse} */
  DescribeDMSDatabase(data?: DescribeDMSDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSDatabaseResponse>;
  /** DMS元数据获取分区 {@link DescribeDMSPartitionsRequest} {@link DescribeDMSPartitionsResponse} */
  DescribeDMSPartitions(data: DescribeDMSPartitionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSPartitionsResponse>;
  /** DMS元数据获取表 {@link DescribeDMSTableRequest} {@link DescribeDMSTableResponse} */
  DescribeDMSTable(data?: DescribeDMSTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSTableResponse>;
  /** DMS元数据获取表列表 {@link DescribeDMSTablesRequest} {@link DescribeDMSTablesResponse} */
  DescribeDMSTables(data?: DescribeDMSTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDMSTablesResponse>;
  /** 获取DataEngines列表 {@link DescribeDataEnginesRequest} {@link DescribeDataEnginesResponse} */
  DescribeDataEngines(data?: DescribeDataEnginesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEnginesResponse>;
  /** 查询数据库列表 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data?: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** 获取数据引擎资源使用情况 {@link DescribeEngineUsageInfoRequest} {@link DescribeEngineUsageInfoResponse} */
  DescribeEngineUsageInfo(data: DescribeEngineUsageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEngineUsageInfoResponse>;
  /** 获取被禁用的表属性列表（新） {@link DescribeForbiddenTableProRequest} {@link DescribeForbiddenTableProResponse} */
  DescribeForbiddenTablePro(data?: DescribeForbiddenTableProRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeForbiddenTableProResponse>;
  /** 查询托管存储指定目录的Summary {@link DescribeLakeFsDirSummaryRequest} {@link DescribeLakeFsDirSummaryResponse} */
  DescribeLakeFsDirSummary(data?: DescribeLakeFsDirSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLakeFsDirSummaryResponse>;
  /** 查询用户的托管存储信息 {@link DescribeLakeFsInfoRequest} {@link DescribeLakeFsInfoResponse} */
  DescribeLakeFsInfo(data?: DescribeLakeFsInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLakeFsInfoResponse>;
  /** 获取notebook livy session详情信息 {@link DescribeNotebookSessionRequest} {@link DescribeNotebookSessionResponse} */
  DescribeNotebookSession(data: DescribeNotebookSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionResponse>;
  /** 获取notebook livy session日志 {@link DescribeNotebookSessionLogRequest} {@link DescribeNotebookSessionLogResponse} */
  DescribeNotebookSessionLog(data: DescribeNotebookSessionLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionLogResponse>;
  /** 获取session statement信息 {@link DescribeNotebookSessionStatementRequest} {@link DescribeNotebookSessionStatementResponse} */
  DescribeNotebookSessionStatement(data: DescribeNotebookSessionStatementRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionStatementResponse>;
  /** 获取statement运行结果。 {@link DescribeNotebookSessionStatementSqlResultRequest} {@link DescribeNotebookSessionStatementSqlResultResponse} */
  DescribeNotebookSessionStatementSqlResult(data: DescribeNotebookSessionStatementSqlResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionStatementSqlResultResponse>;
  /** 获取Session Statement列表 {@link DescribeNotebookSessionStatementsRequest} {@link DescribeNotebookSessionStatementsResponse} */
  DescribeNotebookSessionStatements(data: DescribeNotebookSessionStatementsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionStatementsResponse>;
  /** 获取notebook livy session列表 {@link DescribeNotebookSessionsRequest} {@link DescribeNotebookSessionsResponse} */
  DescribeNotebookSessions(data: DescribeNotebookSessionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookSessionsResponse>;
  /** 查询结果下载任务 {@link DescribeResultDownloadRequest} {@link DescribeResultDownloadResponse} */
  DescribeResultDownload(data: DescribeResultDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResultDownloadResponse>;
  /** 查询script列表 {@link DescribeScriptsRequest} {@link DescribeScriptsResponse} */
  DescribeScripts(data?: DescribeScriptsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScriptsResponse>;
  /** 查询具体的spark应用 {@link DescribeSparkAppJobRequest} {@link DescribeSparkAppJobResponse} */
  DescribeSparkAppJob(data?: DescribeSparkAppJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkAppJobResponse>;
  /** 获取spark应用列表 {@link DescribeSparkAppJobsRequest} {@link DescribeSparkAppJobsResponse} */
  DescribeSparkAppJobs(data?: DescribeSparkAppJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkAppJobsResponse>;
  /** 查询spark应用的运行任务实例列表 {@link DescribeSparkAppTasksRequest} {@link DescribeSparkAppTasksResponse} */
  DescribeSparkAppTasks(data: DescribeSparkAppTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSparkAppTasksResponse>;
  /** 查询结果存储位置 {@link DescribeStoreLocationRequest} {@link DescribeStoreLocationResponse} */
  DescribeStoreLocation(data?: DescribeStoreLocationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStoreLocationResponse>;
  /** 查询表详情 {@link DescribeTableRequest} {@link DescribeTableResponse} */
  DescribeTable(data: DescribeTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableResponse>;
  /** 查询数据表列表 {@link DescribeTablesRequest} {@link DescribeTablesResponse} */
  DescribeTables(data: DescribeTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesResponse>;
  /** 查询任务结果 {@link DescribeTaskResultRequest} {@link DescribeTaskResultResponse} */
  DescribeTaskResult(data: DescribeTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultResponse>;
  /** 查询任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data?: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 获取用户列表信息 {@link DescribeUsersRequest} {@link DescribeUsersResponse} */
  DescribeUsers(data?: DescribeUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersResponse>;
  /** 查询视图列表 {@link DescribeViewsRequest} {@link DescribeViewsResponse} */
  DescribeViews(data: DescribeViewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeViewsResponse>;
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
  /** 日志列表 {@link ListTaskJobLogDetailRequest} {@link ListTaskJobLogDetailResponse} */
  ListTaskJobLogDetail(data: ListTaskJobLogDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ListTaskJobLogDetailResponse>;
  /** 元数据锁 {@link LockMetaDataRequest} {@link LockMetaDataResponse} */
  LockMetaData(data: LockMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<LockMetaDataResponse>;
  /** 修改数据治理事件阈值 {@link ModifyGovernEventRuleRequest} {@link ModifyGovernEventRuleResponse} */
  ModifyGovernEventRule(data?: ModifyGovernEventRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGovernEventRuleResponse>;
  /** 更新spark应用 {@link ModifySparkAppRequest} {@link ModifySparkAppResponse} */
  ModifySparkApp(data: ModifySparkAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySparkAppResponse>;
  /** 修改用户信息 {@link ModifyUserRequest} {@link ModifyUserResponse} */
  ModifyUser(data: ModifyUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserResponse>;
  /** 修改工作组信息 {@link ModifyWorkGroupRequest} {@link ModifyWorkGroupResponse} */
  ModifyWorkGroup(data: ModifyWorkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkGroupResponse>;
  /** 上报元数据心跳 {@link ReportHeartbeatMetaDataRequest} {@link ReportHeartbeatMetaDataResponse} */
  ReportHeartbeatMetaData(data?: ReportHeartbeatMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<ReportHeartbeatMetaDataResponse>;
  /** 暂停或恢复数据引擎 {@link SuspendResumeDataEngineRequest} {@link SuspendResumeDataEngineResponse} */
  SuspendResumeDataEngine(data: SuspendResumeDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<SuspendResumeDataEngineResponse>;
  /** 切换主备集群 {@link SwitchDataEngineRequest} {@link SwitchDataEngineResponse} */
  SwitchDataEngine(data: SwitchDataEngineRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDataEngineResponse>;
  /** 解绑用户上的用户组 {@link UnbindWorkGroupsFromUserRequest} {@link UnbindWorkGroupsFromUserResponse} */
  UnbindWorkGroupsFromUser(data: UnbindWorkGroupsFromUserRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindWorkGroupsFromUserResponse>;
  /** 元数据解锁 {@link UnlockMetaDataRequest} {@link UnlockMetaDataResponse} */
  UnlockMetaData(data: UnlockMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockMetaDataResponse>;
  /** 更新行过滤规则 {@link UpdateRowFilterRequest} {@link UpdateRowFilterResponse} */
  UpdateRowFilter(data: UpdateRowFilterRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRowFilterResponse>;
}

export declare type Versions = ["2021-01-25"];

export default Dlc;
