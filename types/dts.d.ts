/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据库不一致的详情，mongodb业务用到 */
declare interface AdvancedObjectsItem {
  /** 对象类型,可能得值有：account,index,shardkey,schema */
  ObjectType?: string;
  /** 源端分块 */
  SrcChunk?: string;
  /** 目标端分块 */
  DstChunk?: string;
  /** 源端值 */
  SrcItem?: string;
  /** 目标端值 */
  DstItem?: string;
}

/** 检查步骤 */
declare interface CheckStep {
  /** 步骤编号 */
  StepNo?: number;
  /** 步骤Id， 如：ConnectDBCheck、VersionCheck、SrcPrivilegeCheck等，具体校验项和源目标实例相关 */
  StepId?: string;
  /** 步骤名称 */
  StepName?: string;
  /** 此检查步骤的结果，pass(校验通过)、failed(校验失败)、notStarted(校验还未开始进行)、blocked(检验阻塞)、warning(校验有告警，但仍通过) */
  StepStatus?: string;
  /** 此检查步骤的错误消息 */
  StepMessage?: string;
  /** 每个检查步骤里的具体检查项 */
  DetailCheckItems?: DetailCheckItem[];
  /** 是否已跳过 */
  HasSkipped?: boolean;
}

/** 校验任务运行详情 */
declare interface CheckStepInfo {
  /** 任务开始时间 */
  StartAt?: string;
  /** 任务结束时间 */
  EndAt?: string;
  /** 任务步骤信息 */
  Progress?: ProcessProgress;
}

/** 数据同步中的列信息 */
declare interface Column {
  /** 列名 */
  ColumnName?: string;
  /** 新列名 */
  NewColumnName?: string;
}

/** 一致性校验摘要信息 */
declare interface CompareAbstractInfo {
  /** 校验配置参数 */
  Options?: CompareOptions;
  /** 一致性校验对比对象 */
  Objects?: CompareObject;
  /** 对比结论: same,different */
  Conclusion?: string;
  /** 任务状态: success,failed */
  Status?: string;
  /** 总的表数量 */
  TotalTables?: number;
  /** 已校验的表数量 */
  CheckedTables?: number;
  /** 不一致的表数量 */
  DifferentTables?: number;
  /** 跳过校验的表数量 */
  SkippedTables?: number;
  /** 预估表总数 */
  NearlyTableCount?: number;
  /** 不一致的数据行数量 */
  DifferentRows?: number;
  /** 源库行数，当对比类型为**行数对比**时此项有意义 */
  SrcSampleRows?: number;
  /** 目标库行数，当对比类型为**行数对比**时此项有意义 */
  DstSampleRows?: number;
  /** 开始时间 */
  StartedAt?: string;
  /** 结束时间 */
  FinishedAt?: string;
}

/** 列选项 */
declare interface CompareColumnItem {
  /** 列名 */
  ColumnName?: string;
}

/** 一致性校验详细信息 */
declare interface CompareDetailInfo {
  /** 数据不一致的表详情 */
  Difference?: DifferenceDetail;
  /** 跳过校验的表详情 */
  Skipped?: SkippedDetail;
  /** 数据库不一致的详情，mongodb业务用到 */
  DifferenceAdvancedObjects?: DifferenceAdvancedObjectsDetail;
  /** 数据不一致的详情，mongodb业务用到 */
  DifferenceData?: DifferenceDataDetail;
  /** 数据行不一致的详情，mongodb业务用到 */
  DifferenceRow?: DifferenceRowDetail;
}

/** 一致性对比对象配置 */
declare interface CompareObject {
  /** 对象模式 整实例-all,部分对象-partial */
  ObjectMode: string;
  /** 对象列表 */
  ObjectItems?: CompareObjectItem[];
  /** 高级对象类型，目前只支持mongodb链路。如index(索引),shardkey(片键),schema(库表) */
  AdvancedObjects?: string[] | null;
}

/** 一致性校验库表对象 */
declare interface CompareObjectItem {
  /** 数据库名 */
  DbName: string;
  /** 数据库选择模式: all 为当前对象下的所有对象,partial 为部分对象 */
  DbMode: string;
  /** schema名称 */
  SchemaName?: string;
  /** 表选择模式: all 为当前对象下的所有表对象,partial 为部分表对象 */
  TableMode?: string;
  /** 用于一致性校验的表配置，当 TableMode 为 partial 时，需要填写 */
  Tables?: CompareTableItem[];
  /** 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象(一致性校验不校验视图，当前参数未启作用) */
  ViewMode?: string;
  /** 用于一致性校验的视图配置，当 ViewMode 为 partial 时， 需要填写(一致性校验不校验视图，当前参数未启作用) */
  Views?: CompareViewItem[] | null;
}

/** 一致性校验选项 */
declare interface CompareOptions {
  /** 对比方式：dataCheck(完整数据对比)、sampleDataCheck(抽样数据对比)、rowsCount(行数对比), 默认为dataCheck */
  Method?: string;
  /** 抽样比例;范围0,100。默认为100 */
  SampleRate?: number;
  /** 线程数，取值1-8，默认为1 */
  ThreadCount?: number;
}

/** 用于一致性校验的表配置 */
declare interface CompareTableItem {
  /** 表名称 */
  TableName?: string;
  /** column 模式，all 为全部，partial 表示部分(该参数仅对数据同步任务有效) */
  ColumnMode?: string;
  /** 当 ColumnMode 为 partial 时必填(该参数仅对数据同步任务有效) */
  Columns?: CompareColumnItem[];
}

/** 数据一致性校验结果 */
declare interface CompareTaskInfo {
  /** 一致性校验任务Id */
  CompareTaskId?: string;
  /** 一致性校验结果，包括：unstart(未启动)、running(校验中)、canceled(已终止)、failed(校验任务失败)、inconsistent(不一致)、consistent(一致)、notexist(不存在校验任务) */
  Status?: string;
}

/** 一致性校验对象信息 */
declare interface CompareTaskItem {
  /** 任务id */
  JobId?: string;
  /** 对比任务 Id */
  CompareTaskId?: string;
  /** 对比任务名称 */
  TaskName?: string;
  /** 对比任务状态, 可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止 */
  Status?: string;
  /** 对比任务配置 */
  Config?: CompareObject;
  /** 对比任务校验详情 */
  CheckProcess?: ProcessProgress;
  /** 对比任务运行详情 */
  CompareProcess?: ProcessProgress;
  /** 对比结果, 可能的值：same - 一致；different - 不一致；skipAll - 跳过 */
  Conclusion?: string;
  /** 任务创建时间 */
  CreatedAt?: string;
  /** 任务启动时间 */
  StartedAt?: string;
  /** 对比结束时间 */
  FinishedAt?: string;
  /** 对比类型，dataCheck(完整数据对比)、sampleDataCheck(抽样数据对比)、rowsCount(行数对比) */
  Method?: string;
  /** 对比配置信息 */
  Options?: CompareOptions;
  /** 一致性校验提示信息 */
  Message?: string;
}

/** 用于一致性校验的视图配置 */
declare interface CompareViewItem {
  /** 视图名 */
  ViewName?: string;
}

/** 冲突处理里的详细描述 */
declare interface ConflictHandleOption {
  /** 条件覆盖的列 */
  ConditionColumn?: string;
  /** 条件覆盖操作 */
  ConditionOperator?: string;
  /** 条件覆盖优先级处理 */
  ConditionOrderInSrcAndDst?: string;
}

/** 数据一致性校验选项， 默认为不开启一致性校验 */
declare interface ConsistencyOption {
  /** 一致性检测类型: full(全量检测迁移对象)、noCheck(不检测)、notConfigured(未配置) */
  Mode?: string;
}

/** 实例信息 */
declare interface DBEndpointInfo {
  /** 实例所在地域 */
  Region: string;
  /** 实例网络接入类型，如：extranet(外网)、ipv6(公网ipv6)、cvm(云主机自建)、dcg(专线接入)、vpncloud(vpn接入的实例)、cdb(云数据库)、ccn(云联网)、intranet(自研上云)、vpc(私有网络)等，注意具体可选值依赖当前链路 */
  AccessType: string;
  /** 实例数据库类型，如：mysql,redis,mongodb,postgresql,mariadb,percona 等 */
  DatabaseType: string;
  /** 节点类型，simple表示普通节点、cluster表示集群节点；对于mongo业务，取值为replicaset(mongodb副本集)、standalone(mongodb单节点)、cluster(mongodb集群)；对于redis实例，simple(单节点)、cluster-cache(直连集群)、cluster-proxy(代理集群)； */
  NodeType: string;
  /** 实例具体的连接信息，如ip、port、接入方式等 */
  Info: DBInfo[];
  /** 实例服务提供商，如:"aliyun","others" */
  Supplier?: string;
  /** 此参数为数组类型，可以传多个键值对结构对象。MongoDB可定义如下的参数：'AuthDatabase':'admin','AuthFlag': "1",'AuthMechanism':"SCRAM-SHA-1","fetchMethod":"oplog","connectMode":"srv","EncryptedConnProtocol":"mongo_atlas_ssl"；其中fetchMethod表示迁移方式，还可支持change_stream；EncryptedConnProtocol值为mongo_atlas_ssl表示使用atlas ssl连接方式。 */
  ExtraAttr?: KeyValuePairOption[];
  /** 数据库所属网络环境，AccessType为云联网(ccn)时必填， UserIDC表示用户IDC、TencentVPC表示腾讯云VPC； */
  DatabaseNetEnv?: string;
  /** tdsql连接方式：proxy-通过tdsql proxy主机访问各个set节点，注意只有在自研上云的网络环境下才能通过这种方式连接，Info中只需要提供proxy主机信息。set-直连set节点，如选择直连set方式，Info中需要正确填写proxy主机信息及所有set节点信息。源端是tdsqlmysql类型必填。 */
  ConnectType?: string;
  /** 云联网网关所属账号，如果云联网网关为其他账号资源需要填写 */
  CcnOwnerUin?: string;
}

/** 数据库信息 */
declare interface DBInfo {
  /** 表示节点角色，针对分布式数据库，如mongodb中的mongos节点。tdsqlmysql的可选项：proxy表示节点类型为主机，set表示节点类型为节点。proxy类型必须填在数组第一项。tdsqlmysql类型的源/目标配置必填。 */
  Role?: string;
  /** 内核版本，针对mariadb的不同内核版本等 */
  DbKernel?: string;
  /** 实例的IP地址，对于公网、专线、VPN、云联网、自研上云、VPC等接入方式此项必填 */
  Host?: string;
  /** 实例的端口，对于公网、云主机自建、专线、VPN、云联网、自研上云、VPC等接入方式此项必填 */
  Port?: number;
  /** 实例的用户名 */
  User?: string;
  /** 实例的密码 */
  Password?: string;
  /** CVM实例短ID，格式如：ins-olgl39y8；与云服务器控制台页面显示的实例ID相同；如果接入类型为云主机自建的方式，此项必填 */
  CvmInstanceId?: string;
  /** VPN网关ID，格式如：vpngw-9ghexg7q；如果接入类型为vpncloud的方式，此项必填 */
  UniqVpnGwId?: string;
  /** 专线网关ID，格式如：dcg-0rxtqqxb；如果接入类型为专线接入的方式，此项必填 */
  UniqDcgId?: string;
  /** 数据库实例ID，格式如：cdb-powiqx8q；如果接入类型为云数据库的方式，此项必填 */
  InstanceId?: string;
  /** 云联网ID，如：ccn-afp6kltc */
  CcnGwId?: string;
  /** 私有网络ID，格式如：vpc-92jblxto；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填 */
  VpcId?: string;
  /** 私有网络下的子网ID，格式如：subnet-3paxmkdz；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填 */
  SubnetId?: string;
  /** 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6 */
  EngineVersion?: string;
  /** 实例所属账号 */
  Account?: string;
  /** 跨账号迁移时的角色,只允许[a-zA-Z0-9\-\_]+ */
  AccountRole?: string;
  /** 资源所属账号 为空或self(表示本账号内资源)、other(表示其他账户资源) */
  AccountMode?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。 */
  TmpSecretId?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。 */
  TmpSecretKey?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。 */
  TmpToken?: string;
  /** 是否走加密传输、UnEncrypted表示不走加密传输，Encrypted表示走加密传输，默认UnEncrypted */
  EncryptConn?: string;
  /** tdsql的分片id。如节点类型为set必填。 */
  SetId?: string;
}

/** 迁移对象信息，在配置库表视图等对象信息时大小写敏感 */
declare interface DBItem {
  /** 需要迁移或同步的库名，当ObjectMode为partial时，此项必填 */
  DbName?: string;
  /** 迁移或同步后的库名，默认与源库相同 */
  NewDbName?: string;
  /** 迁移或同步的 schema */
  SchemaName?: string;
  /** 迁移或同步后的 schema name */
  NewSchemaName?: string;
  /** DB选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当ObjectMode为partial时，此项必填 */
  DBMode?: string;
  /** schema选择模式: all(为当前对象下的所有对象)，partial(部分对象) */
  SchemaMode?: string;
  /** 表选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当DBMode为partial时此项必填 */
  TableMode?: string;
  /** 表图对象集合，当 TableMode 为 partial 时，此项需要填写 */
  Tables?: TableItem[];
  /** 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象 */
  ViewMode?: string;
  /** 视图对象集合，当 ViewMode 为 partial 时， 此项需要填写 */
  Views?: ViewItem[];
  /** postgresql独有参数，角色选择模式: all 为当前对象下的所有角色对象,partial 为部分角色对象 */
  RoleMode?: string;
  /** postgresql独有参数，当 RoleMode 为 partial 时， 此项需要填写 */
  Roles?: RoleItem[];
  /** 选择要同步的模式，partial为部分，all为整选 */
  FunctionMode?: string;
  /** 选择要同步的模式，partial为部分，all为整选 */
  TriggerMode?: string;
  /** 选择要同步的模式，partial为部分，all为整选 */
  EventMode?: string;
  /** 选择要同步的模式，partial为部分，all为整选 */
  ProcedureMode?: string;
  /** FunctionMode取值为partial时需要填写 */
  Functions?: string[];
  /** ProcedureMode取值为partial时需要填写 */
  Procedures?: string[];
  /** EventMode取值为partial时需要填写 */
  Events?: string[];
  /** TriggerMode取值为partial时需要填写 */
  Triggers?: string[];
}

/** 需要同步的库表对象 */
declare interface Database {
  /** 需要迁移或同步的库名，当ObjectMode为Partial时，此项必填 */
  DbName?: string;
  /** 迁移或同步后的库名，默认与源库相同 */
  NewDbName?: string;
  /** DB选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当Mode为Partial时，此项必填。注意，高级对象的同步不依赖此值，如果整库同步此处应该为All。 */
  DbMode?: string;
  /** 迁移或同步的 schema */
  SchemaName?: string;
  /** 迁移或同步后的 schema name */
  NewSchemaName?: string;
  /** 表选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当DBMode为Partial时此项必填，如果整库同步此处应该为All。 */
  TableMode?: string;
  /** 表图对象集合，当 TableMode 为 Partial 时，此项需要填写 */
  Tables?: Table[];
  /** 视图选择模式: All 为当前对象下的所有视图对象,Partial 为部分视图对象，如果整库同步此处应该为All。 */
  ViewMode?: string;
  /** 视图对象集合，当 ViewMode 为 Partial 时， 此项需要填写 */
  Views?: View[];
  /** 选择要同步的模式，Partial为部分，All为整选，如果整库同步此处应该为All。 */
  FunctionMode?: string;
  /** FunctionMode取值为Partial时需要填写 */
  Functions?: string[];
  /** 选择要同步的模式，Partial为部分，All为整选，如果整库同步此处应该为All。 */
  ProcedureMode?: string;
  /** ProcedureMode取值为Partial时需要填写 */
  Procedures?: string[];
  /** 触发器迁移模式，All(为当前对象下的所有对象)，Partial(部分对象)，如果整库同步此处应该为All。数据同步暂不支持此高级对象。 */
  TriggerMode?: string;
  /** 当TriggerMode为partial，指定要迁移的触发器名称 */
  Triggers?: string[];
  /** 事件迁移模式，All(为当前对象下的所有对象)，Partial(部分对象)，如果整库同步此处应该为All。数据同步暂不支持此高级对象。 */
  EventMode?: string;
  /** 当EventMode为partial，指定要迁移的事件名称 */
  Events?: string[];
}

/** 迁移对象选项，需要告知迁移服务迁移哪些库表对象 */
declare interface DatabaseTableObject {
  /** 迁移对象类型 all(全实例)，partial(部分对象) */
  ObjectMode: string;
  /** 迁移对象，当 ObjectMode 为 partial 时，不为空 */
  Databases?: DBItem[];
  /** 高级对象类型，如trigger、function、procedure、event。注意：如果要迁移同步高级对象，此配置中应该包含对应的高级对象类型 */
  AdvancedObjects?: string[] | null;
}

/** 数据同步中的ddl同步处理 */
declare interface DdlOption {
  /** ddl类型，如Database,Table,View,Index等 */
  DdlObject?: string;
  /** ddl具体值，对于Database可取值[Create,Drop,Alter]对于Table可取值[Create,Drop,Alter,Truncate,Rename]对于View可取值[Create,Drop]对于Index可取值[Create,Drop] */
  DdlValue?: string[] | null;
}

/** 每个检查步骤里的具体检查项 */
declare interface DetailCheckItem {
  /** 检查项的名称，如：源实例权限检查 */
  CheckItemName?: string;
  /** 检查项详细内容 */
  Description?: string;
  /** pass(通过)，failed(失败), warning(校验有警告，但仍通过) */
  CheckResult?: string;
  /** 检查项失败原因 */
  FailureReason?: string;
  /** 解决方案 */
  Solution?: string;
  /** 运行报错日志 */
  ErrorLog?: string[];
  /** 详细帮助的文档链接 */
  HelpDoc?: string[];
  /** 跳过风险文案 */
  SkipInfo?: string;
}

/** 数据库不一致的详情，mongodb业务用到 */
declare interface DifferenceAdvancedObjectsDetail {
  /** 总数 */
  TotalCount?: number;
  /** 不一致详情 */
  Items?: AdvancedObjectsItem[] | null;
}

/** 数据不一致详情 */
declare interface DifferenceData {
  /** 数据库名 */
  Db?: string;
  /** 集合 */
  Table?: string;
  /** 源端ID */
  SrcChunk?: string;
  /** 目标端ID */
  DstChunk?: string;
  /** 源端值 */
  SrcItem?: string;
  /** 目标端值 */
  DstItem?: string;
  /** 更新时间 */
  UpdatedAt?: string;
}

/** mongodb数据不一致性详情 */
declare interface DifferenceDataDetail {
  /** 总数 */
  TotalCount?: number;
  /** mongo数据不一致详细列表 */
  Items?: DifferenceData[] | null;
}

/** 数据不一致的表详情 */
declare interface DifferenceDetail {
  /** 数据不一致的表数量 */
  TotalCount?: number;
  /** 校验不一致的表详情 */
  Items?: DifferenceItem[] | null;
}

/** 校验不一致的表详情 */
declare interface DifferenceItem {
  /** 数据库名 */
  Db?: string;
  /** schema */
  Schema?: string;
  /** 表名 */
  Table?: string;
  /** 分块号 */
  Chunk?: number;
  /** 源库数值 */
  SrcItem?: string;
  /** 目标库数值 */
  DstItem?: string;
  /** 索引名称 */
  IndexName?: string;
  /** 索引下边界 */
  LowerBoundary?: string;
  /** 索引上边界 */
  UpperBoundary?: string;
  /** 对比消耗时间,单位为 ms */
  CostTime?: number;
  /** 完成时间 */
  FinishedAt?: string;
}

/** mongodb行数校验不一致性详情结果 */
declare interface DifferenceRowDetail {
  /** 不一致总数 */
  TotalCount?: number;
  /** 不一致列表 */
  Items?: RowsCountDifference[] | null;
}

/** 订阅任务的kafka分区规则。符合库名和表名正则表达式的数据将按照RuleType计算该条数据将被投递的kafka分区。如果配置了多个规则，将按照配置的顺序，第一条命中的规则生效。 */
declare interface DistributeRule {
  /** 规则类型。非mongo产品的枚举值为: table-按表名分区，pk-按表名+主键分区，cols-按列名分区。mongo的枚举值为：collection-按集合名分区、collectionAndObjectId-按集合+主键分区。 */
  RuleType: string;
  /** 库名匹配规则，请填写正则表达式 */
  DbPattern: string;
  /** 表名匹配规则，如果 DatabaseType 为 mongodb，则匹配集合名 */
  TablePattern: string;
  /** 列名。如果 RuleType 为 cols，此项必填。订阅任务会用该列的值计算分区。mongo没有按列分区，因此也不用传这个字段。 */
  Columns?: string[];
}

/** 数据同步中的选项 */
declare interface DynamicOptions {
  /** 所要同步的DML和DDL的选项，Insert(插入操作)、Update(更新操作)、Delete(删除操作)、DDL(结构同步)，PartialDDL(自定义,和DdlOptions一起起作用 )；必填、dts会用该值覆盖原有的值 */
  OpTypes: string[];
  /** DDL同步选项，具体描述要同步哪些DDL; 当OpTypes取值PartialDDL时、字段不能为空；必填、dts会用该值覆盖原有的值 */
  DdlOptions: DdlOption[];
  /** 冲突处理选项，ReportError(报错)、Ignore(忽略)、Cover(覆盖)、ConditionCover(条件覆盖); 目前目标端为kafka的链路不支持修改该配置 */
  ConflictHandleType?: string;
  /** 冲突处理的详细选项，如条件覆盖中的条件行和条件操作；不能部分更新该选项的内部字段；有更新时、需要全量更新该字段 */
  ConflictHandleOption?: ConflictHandleOption;
  /** 同步到kafka链路的kafka配置 */
  KafkaOption?: KafkaOption;
  /** 同步到kafka链路是否过滤掉begin和commit消息。目前仅mysql2kafka链路支持 */
  FilterBeginCommit?: boolean;
  /** 同步到kafka链路是否过滤掉checkpoint消息。目前仅mysql2kafka链路支持 */
  FilterCheckpoint?: boolean;
  /** 同名表的处理，ReportErrorAfterCheck(前置校验并报错，默认)、ExecuteAfterIgnore(忽略并继续执行) */
  DealOfExistSameTable?: string;
  /** 仅增量任务重新设置指定位点 */
  StartPosition?: string;
}

/** 数据同步中的描述源端和目的端的信息 */
declare interface Endpoint {
  /** 地域英文名，如：ap-guangzhou */
  Region?: string;
  /** 节点类型，proxy表示节点类型为主机，set表示节点类型为节点。proxy类型必须填在数组第一项。tdsqlmysql类型的源/目标配置必填 */
  Role?: string;
  /** 数据库内核类型，tdsql中用于区分不同内核：percona,mariadb,mysql。注意TDSQL-C MySQL、TDSQL PostgreSQL无需填写此项值。 */
  DbKernel?: string;
  /** 数据库实例ID，格式如：cdb-powiqx8q */
  InstanceId?: string;
  /** 实例的IP地址，接入类型为非cdb时此项必填 */
  Ip?: string;
  /** 实例端口，接入类型为非cdb时此项必填 */
  Port?: number;
  /** 用户名，对于访问需要用户名密码认证的实例必填 */
  User?: string;
  /** 密码，对于访问需要用户名密码认证的实例必填 */
  Password?: string;
  /** 数据库名，数据库为cdwpg时，需要提供 */
  DbName?: string;
  /** 私有网络ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：vpc-92jblxto */
  VpcId?: string;
  /** 私有网络下的子网ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：subnet-3paxmkdz */
  SubnetId?: string;
  /** CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段 */
  CvmInstanceId?: string;
  /** 专线网关ID，对于专线接入类型此项必填，格式如：dcg-0rxtqqxb */
  UniqDcgId?: string;
  /** VPN网关ID，对于vpn接入类型此项必填，格式如：vpngw-9ghexg7q */
  UniqVpnGwId?: string;
  /** 云联网ID，对于云联网接入类型此项必填，如：ccn-afp6kltc */
  CcnId?: string;
  /** 云厂商类型，当实例为RDS实例时，填写为aliyun, 其他情况均填写others，默认为others */
  Supplier?: string;
  /** 数据库版本，当实例为RDS实例时才有效，其他实例忽略，格式如：5.6或者5.7，默认为5.6 */
  EngineVersion?: string;
  /** 实例所属账号，如果为跨账号实例此项必填 */
  Account?: string;
  /** 资源所属账号 为空或self(表示本账号内资源)、other(表示跨账号资源) */
  AccountMode?: string;
  /** 跨账号同步时的角色，只允许[a-zA-Z0-9\-\_]+，如果为跨账号实例此项必填 */
  AccountRole?: string;
  /** 外部角色id */
  RoleExternalId?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号同步文档(https://cloud.tencent.com/document/product/571/68729)第4节中关于角色的定义。 */
  TmpSecretId?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号同步文档(https://cloud.tencent.com/document/product/571/68729)第4节中关于角色的定义。 */
  TmpSecretKey?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号同步文档(https://cloud.tencent.com/document/product/571/68729)第4节中关于角色的定义。 */
  TmpToken?: string;
  /** 是否走加密传输、UnEncrypted表示不走加密传输，Encrypted表示走加密传输，默认UnEncrypted */
  EncryptConn?: string;
  /** 数据库所属网络环境，AccessType为云联网(ccn)时必填， UserIDC表示用户IDC、TencentVPC表示腾讯云VPC； */
  DatabaseNetEnv?: string;
  /** 数据库为跨账号云联网下的实例时、表示云联网所属主账号 */
  CcnOwnerUin?: string;
  /** 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的ID */
  ChildInstanceId?: string;
  /** 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的类型、例如：只读实例传ro、读写实例传rw */
  ChildInstanceType?: string;
  /** tdsql的分片id。如节点类型为set必填。 */
  SetId?: string;
}

/** 数据订阅的实例节点信息 */
declare interface EndpointItem {
  /** 源库所在地域。如果 AccessType 为 ccn，请填vpc所在地域，因为此时不知道源库在哪个地域。其他接入方式，请填订阅任务所在地域，因为确保订阅任务与源库在同一地域是最优的网络方案。 */
  DatabaseRegion: string;
  /** 用户名 */
  User: string;
  /** 密码。作为入参时必填，作为出参时为空。 */
  Password: string;
  /** 目标实例ID。如果 AccessType 为 cdb，此项必填。配置InstanceId时会查询并校验实例信息。mysql的查询接口经过了鉴权，请确保子用户有 cdb:DescribeDBInstances 的接口权限。 */
  InstanceId?: string;
  /** 云主机ID。如果 AccessType 为 cvm，此项必填。 */
  CvmInstanceId?: string;
  /** 专线网关ID。如果 AccessType 为 dcg，此项必填。 */
  UniqDcgId?: string;
  /** 云联网ID。如果 AccessType 为 ccn，此项必填。 */
  CcnId?: string;
  /** vpn网关ID。如果 AccessType 为 vpncloud，此项必填。 */
  UniqVpnGwId?: string;
  /** VpcID。如果 AccessType 为 dcg\ccn\vpncloud\vpc，此项必填。 */
  VpcId?: string;
  /** 子网ID。如果 AccessType 为 dcg\ccn\vpncloud\vpc，此项必填。 */
  SubnetId?: string;
  /** 数据库地址，支持域名与IP。如果 AccessType 为 dcg\ccn\vpncloud\vpc\extranet\intranet，此项必填。 */
  HostName?: string;
  /** 数据库端口。如果 AccessType 为 dcg\ccn\vpncloud\vpc\extranet\intranet\cvm，此项必填。 */
  Port?: number;
  /** 是否走加密传输，枚举值：UnEncrypted-不加密，Encrypted-加密。只有mysql支持，不填默认不加密，其他产品不填。 */
  EncryptConn?: string;
  /** 数据库网络环境。如果 AccessType 为 ccn 此项必填。枚举值：UserIDC-自建idc，TencentVPC-腾讯云，Aws-aws，AliYun-阿里云，Others-其他。 */
  DatabaseNetEnv?: string;
  /** 云联网网关所属的主账号uin、跨账号云联网需要。 */
  CcnOwnerUin?: string;
  /** 为业务添加的额外信息。参数名作key，参数值作value。 tdpg必填参数：PgDatabase-订阅的库名；mongo选填参数：InstanceType-实例类型：replicaset-副本集，cluster-分片集，主要用于控制台跳转到mongo实例页面，如不填不影响任务运行；全业务选填参数：EngineVersion-内核版本。 */
  ExtraAttr?: KeyValuePairOption[];
  /** 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的ID */
  ChildInstanceId?: string;
  /** 数据库为cynos、且是cynos集群内的一个子数据库实例时、该参数为该子实例的类型、例如：只读实例传ro、读写实例传rw */
  ChildInstanceType?: string;
}

/** 错误信息及其解决方案 */
declare interface ErrInfo {
  /** 错误原因 */
  Reason?: string;
  /** 错误信息 */
  Message?: string;
  /** 解决方案 */
  Solution?: string;
}

/** 任务错误信息 */
declare interface ErrorInfoItem {
  /** 错误码 */
  Code?: string;
  /** 解决方案 */
  Solution?: string;
  /** 错误日志信息 */
  ErrorLog?: string;
  /** 文档提示 */
  HelpDoc?: string;
}

/** kafka消费者组详情 */
declare interface GroupInfo {
  /** 消费者组账号 */
  Account?: string;
  /** 消费者组名称 */
  ConsumerGroupName?: string;
  /** 消费者组备注 */
  Description?: string;
  /** 消费组偏移量。该字段是为了兼容以前单Partition的情况，取值为最后一个分区的偏移量。各分区的偏移量详见StateOfPartition字段 */
  ConsumerGroupOffset?: number;
  /** 消费组未消费的数据量。该字段是为了兼容以前单Partition的情况，取值为最后一个分区未消费的数据量。各分区未消费数据量详见StateOfPartition字段 */
  ConsumerGroupLag?: number;
  /** 消费延迟(单位为秒) */
  Latency?: number;
  /** 各分区的消费状态 */
  StateOfPartition?: MonitorInfo[];
  /** 消费者组创建时间，格式为YYYY-MM-DD hh:mm:ss */
  CreatedAt?: string;
  /** 消费者组修改时间，格式为YYYY-MM-DD hh:mm:ss */
  UpdatedAt?: string;
  /** 消费者组状态，包括Dead、Empty、Stable等，只有Dead和Empty两种状态可以执行reset操作 */
  ConsumerGroupState?: string;
  /** 每个消费者正在消费的分区 */
  PartitionAssignment?: PartitionAssignment[];
}

/** 迁移任务列表 */
declare interface JobItem {
  /** 数据迁移任务ID */
  JobId?: string;
  /** 数据迁移任务名称 */
  JobName?: string;
  /** 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss */
  CreateTime?: string;
  /** 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss */
  UpdateTime?: string;
  /** 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss */
  StartTime?: string;
  /** 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss */
  EndTime?: string;
  /** 迁移任务错误信息 */
  BriefMsg?: string;
  /** 任务状态，取值为：creating(创建中)、created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)、pausing(暂停中)、manualPaused(已暂停) */
  Status?: string;
  /** 任务运行模式，值包括：immediate(立即运行)，timed(定时运行) */
  RunMode?: string;
  /** 期待启动时间，当RunMode取值为timed时，此值必填，形如：2022-07-11 16:20:49 */
  ExpectRunTime?: string;
  /** 任务操作信息 */
  Action?: MigrateAction;
  /** 迁移执行过程信息 */
  StepInfo?: MigrateDetailInfo;
  /** 源实例信息 */
  SrcInfo?: DBEndpointInfo;
  /** 目标端信息 */
  DstInfo?: DBEndpointInfo;
  /** 数据一致性校验结果 */
  CompareTask?: CompareTaskInfo;
  /** 计费状态信息 */
  TradeInfo?: TradeInfo;
  /** 标签信息 */
  Tags?: TagItem[];
  /** 自动重试时间段信息 */
  AutoRetryTimeRangeMinutes?: number;
  /** 全量导出可重入标识：enum::"yes"/"no"。yes表示当前任务可重入、no表示当前任务处于全量导出且不可重入阶段；如果在该值为no时重启任务导出流程不支持断点续传 */
  DumperResumeCtrl?: string;
}

/** 目标端为kafka时添加的同步选项字段 */
declare interface KafkaOption {
  /** 投递到kafka的数据类型，如Avro,Json,canal-pb,canal-json */
  DataType?: string;
  /** 同步topic策略，如Single（集中投递到单topic）,Multi (自定义topic名称) */
  TopicType?: string;
  /** 用于存储ddl的topic */
  DDLTopicName?: string;
  /** 单topic和自定义topic的描述 */
  TopicRules?: TopicRule[];
}

/** 存放配置时的额外信息 */
declare interface KeyValuePairOption {
  /** 选项key */
  Key?: string;
  /** 选项value */
  Value?: string;
}

/** 任务操作信息，包含迁移任务的所有操作列表，及迁移任务在当前状态下允许的操作列表 */
declare interface MigrateAction {
  /** 任务的所有操作列表 */
  AllAction?: string[];
  /** 任务在当前状态下允许的操作列表 */
  AllowedAction?: string[];
}

/** 查询迁移实例列表的实例对象 */
declare interface MigrateDBItem {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例Vip */
  Vip?: string;
  /** 实例Vport */
  Vport?: number;
  /** 是否可以作为迁移对象，1-可以，0-不可以 */
  Usable?: number;
  /** 不可以作为迁移对象的原因 */
  Hint?: string;
}

/** 迁移执行过程信息 */
declare interface MigrateDetailInfo {
  /** 总步骤数 */
  StepAll?: number;
  /** 当前步骤 */
  StepNow?: number;
  /** 主从差距，MB；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1 */
  MasterSlaveDistance?: number;
  /** 主从差距，秒；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1 */
  SecondsBehindMaster?: number;
  /** 步骤信息 */
  StepInfo?: StepDetailInfo[];
}

/** 迁移选项，描述任务如何执行迁移等一系列配置信息 */
declare interface MigrateOption {
  /** 迁移对象选项，需要告知迁移服务迁移哪些库表对象 */
  DatabaseTable: DatabaseTableObject;
  /** 迁移类型，full(全量迁移)，structure(结构迁移)，fullAndIncrement(全量加增量迁移)， 默认为fullAndIncrement;注意redis,keewidb产品只支持fullAndIncrement类型。 */
  MigrateType?: string;
  /** 数据一致性校验选项， 默认为不开启一致性校验 */
  Consistency?: ConsistencyOption;
  /** 是否迁移账号，true(迁移账号)，false(不迁移账号) */
  IsMigrateAccount?: boolean;
  /** 是否用源库Root账户覆盖目标库，值包括：false-不覆盖，true-覆盖，选择库表或者结构迁移时应该为false，注意只对旧版迁移有效 */
  IsOverrideRoot?: boolean;
  /** 是否在迁移时设置目标库只读(仅对mysql有效)，true(设置只读)、false(不设置只读，默认此值) */
  IsDstReadOnly?: boolean;
  /** 其他附加信息，对于特定库可设置额外参数，Redis可定义如下的参数: ["DstWriteMode":normal, 目标库写入模式,可取值clearData(清空目标实例数据)、overwrite(以覆盖写的方式执行任务)、normal(跟正常流程一样，不做额外动作) "IsDstReadOnly":true, 是否在迁移时设置目标库只读,true(设置只读)、false(不设置只读) "ClientOutputBufferHardLimit":512, 从机缓冲区的硬性容量限制(MB) "ClientOutputBufferSoftLimit":512, 从机缓冲区的软性容量限制(MB) "ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) "ReplBacklogSize":512, 环形缓冲区容量限制(MB) "ReplTimeout":120， 复制超时时间(秒) "IsExpireKey":"true",过期key自动淘汰] */
  ExtraAttr?: KeyValuePairOption[];
  /** pgsql迁移分类：logical(逻辑迁移)、physical(物理迁移) */
  MigrateWay?: string;
}

/** 数据数据订阅的对象，用于修改订阅对象接口。与SubscribeObject结构类似，只是类型和参数名不同。 */
declare interface ModifiedSubscribeObject {
  /** 订阅对象的类型，枚举值为：0-库，1-表(该值对于mongo任务来说，是集合) 。注意：mongo只支持全实例、单库或者单集合订阅，因此该字段不要与SubscribeObjectType冲突。如：SubscribeObjectType=4，表示mongo单库订阅，那么该字段应该传0。 */
  ObjectsType: number;
  /** 订阅数据库的名称 */
  DatabaseName: string;
  /** 订阅数据库中表(或集合)的名称。如果 ObjectsType 为 1，那么此字段为必填，且不为空； */
  TableNames?: string[];
}

/** kafka消费者组的分区详情 */
declare interface MonitorInfo {
  /** 当前分区的编号，从0开始 */
  PartitionNo?: number;
  /** 当前分区的偏移量 */
  ConsumerGroupOffset?: number;
  /** 当前分区未消费的数据量 */
  ConsumerGroupLag?: number;
  /** 当前分区的消费延迟(单位为秒) */
  Latency?: number;
}

/** 同步的数据库对对象描述 */
declare interface Objects {
  /** 同步对象类型 Partial(部分对象) */
  Mode?: string;
  /** 同步对象，当 Mode 为 Partial 时，不为空 */
  Databases?: Database[] | null;
  /** 高级对象类型，如function、procedure。注意：如果要迁移同步高级对象，此配置中应该包含对应的高级对象类型。当需要同步高级对象时，初始化类型必须包含结构初始化类型，即任务的Options.InitType字段值为Structure或Full */
  AdvancedObjects?: string[];
  /** OnlineDDL类型，冗余字段不做配置用途 */
  OnlineDDL?: OnlineDDL;
}

/** 数据订阅kafka分区中checkpoint信息 */
declare interface OffsetTimeMap {
  /** kafka分区编号 */
  PartitionNo?: number;
  /** kafka offset */
  Offset?: number;
}

/** OnlineDDL类型 */
declare interface OnlineDDL {
  /** 状态 */
  Status: string;
}

/** 数据同步中的选项 */
declare interface Options {
  /** 同步初始化选项，Data(全量数据初始化)、Structure(结构初始化)、Full(全量数据且结构初始化，默认)、None(仅增量) */
  InitType?: string;
  /** 同名表的处理，ReportErrorAfterCheck(前置校验并报错，默认)、ExecuteAfterIgnore(忽略并继续执行) */
  DealOfExistSameTable?: string;
  /** 冲突处理选项，ReportError(报错，默认为该值)、Ignore(忽略)、Cover(覆盖)、ConditionCover(条件覆盖) */
  ConflictHandleType?: string;
  /** 是否添加附加列 */
  AddAdditionalColumn?: boolean;
  /** 所要同步的DML和DDL的选项，Insert(插入操作)、Update(更新操作)、Delete(删除操作)、DDL(结构同步)， PartialDDL(自定义,和DdlOptions一起配合使用)。注意，这里至少需要包含DML中的一种。 */
  OpTypes?: string[] | null;
  /** 冲突处理的详细选项，如条件覆盖中的条件行和条件操作 */
  ConflictHandleOption?: ConflictHandleOption;
  /** DDL同步选项，具体描述要同步哪些DDL */
  DdlOptions?: DdlOption[] | null;
  /** kafka同步选项 */
  KafkaOption?: KafkaOption;
  /** 任务限速信息 */
  RateLimitOption?: RateLimitOption;
  /** 自动重试的时间窗口设置 */
  AutoRetryTimeRangeMinutes?: number;
  /** 同步到kafka链路指定位点。目前只支持时间格式：2023-12-20T19:24:23+08:00。如果没有指定位点，为空。 */
  StartPosition?: string;
  /** 同步到kafka链路是否过滤掉begin和commit消息。目前仅mysql2kafka链路支持 */
  FilterBeginCommit?: boolean;
  /** 同步到kafka链路是否过滤掉checkpoint消息。目前仅mysql2kafka链路支持 */
  FilterCheckpoint?: boolean;
}

/** 数据订阅中kafka消费者组的分区分配情况。该数据是实时查询的，如果需要最新数据，需重新掉接口查询。 */
declare interface PartitionAssignment {
  /** 消费者的clientId */
  ClientId: string;
  /** 该消费者正在消费的分区 */
  PartitionNo: number[] | null;
}

/** mongo输出聚合设置。输出默认 Change Event */
declare interface PipelineInfo {
  /** 聚合运算符：$addFields、$match、$project、$replaceRoot、$redact、$replaceWith、$set、$unset。其中 $replaceWith、$set、$unset 只有当订阅实例是4.2及以上版本可选。 */
  AggOp?: string;
  /** 聚合表达式。必须是json格式 */
  AggCmd?: string;
}

/** 任务步骤信息 */
declare interface ProcessProgress {
  /** 步骤的状态， 包括：notStarted(未开始)、running(运行中)、success(成功)、failed(失败)等 */
  Status?: string;
  /** 进度信息 */
  Percent?: number;
  /** 总的步骤数 */
  StepAll?: number;
  /** 当前进行的步骤 */
  StepNow?: number;
  /** 当前步骤输出提示信息 */
  Message?: string;
  /** 步骤信息 */
  Steps?: StepDetailInfo[];
}

/** 错误信息及告警信息对象 */
declare interface ProcessStepTip {
  /** 提示信息 */
  Message?: string;
  /** 解决方案 */
  Solution?: string;
  /** 文档提示 */
  HelpDoc?: string;
}

/** 迁移和同步任务限速的详细信息 */
declare interface RateLimitOption {
  /** 当前生效的全量导出线程数，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为16 */
  CurrentDumpThread: number;
  /** 默认的全量导出线程数，该字段仅在出参有意义 */
  DefaultDumpThread: number;
  /** 当前生效的全量导出Rps，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为50000000 */
  CurrentDumpRps: number;
  /** 默认的全量导出Rps，该字段仅在出参有意义 */
  DefaultDumpRps: number;
  /** 当前生效的全量导入线程数，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为16 */
  CurrentLoadThread: number;
  /** 默认的全量导入线程数，该字段仅在出参有意义 */
  DefaultLoadThread: number;
  /** 当前生效的全量导入Rps，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为50000000 */
  CurrentLoadRps: number;
  /** 默认的全量导入Rps，该字段仅在出参有意义 */
  DefaultLoadRps: number;
  /** 当前生效的增量导入线程数，配置任务时可调整该字段值，注意：如果不设置或设置为0则表示保持当前值，最大值为128 */
  CurrentSinkerThread: number;
  /** 默认的增量导入线程数，该字段仅在出参有意义 */
  DefaultSinkerThread: number;
  /** enum:"no"/"yes"、no表示用户未设置过限速、yes表示设置过限速，该字段仅在出参有意义 */
  HasUserSetRateLimit: string;
}

/** 角色对象，postgresql独有参数 */
declare interface RoleItem {
  /** 角色名称 */
  RoleName?: string;
  /** 迁移后的角色名称 */
  NewRoleName?: string;
}

/** mongodb行校验不一致详细信息 */
declare interface RowsCountDifference {
  /** 数据库名 */
  Db?: string;
  /** 集合 */
  Table?: string;
  /** 源端行数 */
  SrcCount?: number;
  /** 目标端行数 */
  DstCount?: number;
}

/** 跳过校验的表详情 */
declare interface SkippedDetail {
  /** 跳过的表数量 */
  TotalCount?: number;
  /** 跳过校验的表详情 */
  Items?: SkippedItem[];
}

/** 跳过校验的表详情 */
declare interface SkippedItem {
  /** 数据库名 */
  Db?: string;
  /** schema名 */
  Schema?: string;
  /** 表名 */
  Table?: string;
  /** 未发起检查的原因 */
  Reason?: string;
}

/** 步骤信息 */
declare interface StepDetailInfo {
  /** 步骤序列 */
  StepNo?: number;
  /** 步骤展现名称 */
  StepName?: string;
  /** 步骤英文标识 */
  StepId?: string;
  /** 步骤状态:success(成功)、failed(失败)、running(执行中)、notStarted(未执行)、默认为notStarted */
  Status?: string;
  /** 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 */
  StartTime?: string;
  /** 步骤错误信息 */
  StepMessage?: string;
  /** 执行进度 */
  Percent?: number;
  /** 错误信息 */
  Errors?: ProcessStepTip[];
  /** 告警提示 */
  Warnings?: ProcessStepTip[];
}

/** 单个步骤的详细信息 */
declare interface StepInfo {
  /** 步骤编号 */
  StepNo?: number;
  /** 步骤名 */
  StepName?: string;
  /** 步骤标号 */
  StepId?: string;
  /** 当前步骤状态,可能返回有 notStarted(未开始)、running(校验中)、failed(校验任务失败)、finished(完成)、skipped(跳过)、paused(暂停) */
  Status?: string;
  /** 步骤开始时间，可能为空 */
  StartTime?: string;
  /** 错误信息 */
  Errors?: StepTip[] | null;
  /** 警告信息 */
  Warnings?: StepTip[] | null;
  /** 当前步骤进度，范围为[0-100]，若为-1表示当前步骤不支持查看进度 */
  Progress?: number;
}

/** 当前步骤错误信息或者警告信息 */
declare interface StepTip {
  /** 错误码 */
  Code?: string;
  /** 错误信息 */
  Message?: string;
  /** 解决方式 */
  Solution?: string;
  /** 帮助文档 */
  HelpDoc?: string;
  /** 当前步骤跳过信息 */
  SkipInfo?: string;
}

/** 订阅报错信息 */
declare interface SubsErr {
  /** 报错信息 */
  Message?: string;
  /** 报错原因 */
  Reason?: string;
  /** 建议的修复方案 */
  Solution?: string;
}

/** 订阅校验任务的各步骤信息。 */
declare interface SubscribeCheckStepInfo {
  /** 步骤名称 */
  StepName?: string;
  /** 步骤Id */
  StepId?: string;
  /** 步骤编号，从 1 开始 */
  StepNo?: number;
  /** 当前步骤状态，可能值为 notStarted,running,finished,failed */
  Status?: string;
  /** 当前步骤进度 */
  Percent?: number;
  /** 错误提示 */
  Errors?: SubscribeCheckStepTip[];
  /** 告警提示 */
  Warnings?: SubscribeCheckStepTip[];
}

/** 订阅校验任务的提示信息 */
declare interface SubscribeCheckStepTip {
  /** 错误或告警的详细信息 */
  Message?: string;
  /** 帮助文档 */
  HelpDoc?: string;
}

/** 订阅实例信息 */
declare interface SubscribeInfo {
  /** 数据订阅的实例ID */
  SubscribeId?: string;
  /** 数据订阅实例的名称 */
  SubscribeName?: string;
  /** 订阅实例发送数据的kafka topic */
  Topic?: string;
  /** 订阅实例的类型，目前支持 cynosdbmysql,mariadb,mongodb,mysql,percona,tdpg,tdsqlpercona(tdsqlmysql) */
  Product?: string;
  /** 订阅的数据库实例ID（如果订阅的是云数据库）如果实例不是腾讯云上的，此值为空。 */
  InstanceId?: string;
  /** 云数据库状态：running 运行中，isolated 已隔离，offline 已下线。如果不是云上，此值为空 */
  InstanceStatus?: string;
  /** 数据订阅生命周期状态，可能的值为：正常 normal, 隔离中 isolating, 已隔离 isolated, 下线中 offlining, 按量转包年包月中 post2PrePayIng */
  Status?: string;
  /** 数据订阅状态，可能的值为：未启动 notStarted, 校验中 checking, 校验不通过 checkNotPass, 校验通过 checkPass, 启动中 starting, 运行中 running, 异常出错 error */
  SubsStatus?: string;
  /** 上次修改时间，时间格式如：Y-m-d h:m:s */
  ModifyTime?: string;
  /** 创建时间，时间格式如：Y-m-d h:m:s */
  CreateTime?: string;
  /** 隔离时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00 */
  IsolateTime?: string;
  /** 包年包月任务的到期时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00 */
  ExpireTime?: string;
  /** 下线时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00 */
  OfflineTime?: string;
  /** 计费方式，0 - 包年包月，1 - 按量计费 */
  PayType?: number;
  /** 自动续费标识。只有当 PayType=0，该值才有意义。枚举值：0-不自动续费，1-自动续费 */
  AutoRenewFlag?: number;
  /** 数据订阅实例所属地域 */
  Region?: string;
  /** 接入方式。枚举值：extranet(公网) vpncloud(vpn接入) dcg(专线接入) ccn(云联网) cdb(云数据库) cvm(云主机自建) intranet(自研上云) vpc(私有网络vpc) */
  AccessType?: string;
  /** 数据库节点信息 */
  Endpoints?: EndpointItem[];
  /** 数据订阅版本, 当前只支持 kafka 版本。 */
  SubscribeVersion?: string;
  /** 标签 */
  Tags?: TagItem[] | null;
  /** 任务报错信息，如果有的话。 */
  Errors?: SubsErr[] | null;
}

/** 订阅的kafka分区数和分区规则。mariadb，percona，tdsqlmysql，tdpg不支持自定义分区，所以DistributeRules和DefaultRuleType可以不填，但是NumberOfPartitions是必填。 */
declare interface SubscribeKafkaConfig {
  /** kafka分区数量，枚举值为1，4，8 */
  NumberOfPartitions: number;
  /** 分区规则。当NumberOfPartitions > 1时，该项必填。 */
  DistributeRules?: DistributeRule[];
  /** 默认分区策略。当NumberOfPartitions > 1时，该项必填。不满足DistributeRules中正则表达式的数据，将按照默认分区策略计算分区。非mongo产品的枚举值为: table-按表名分区，pk-按表名+主键分区。mongo的枚举值为：collection-按集合名分区。该字段与DistributeRules搭配使用，如果配置了该字段，视为配置了一条DistributeRules。 */
  DefaultRuleType?: string;
}

/** 订阅的数据库表信息，用于配置和查询订阅任务接口。 */
declare interface SubscribeObject {
  /** 订阅数据的类型，枚举值：database-数据库，table-数据库的表(如果 DatabaseType 为 mongodb，则表示集合) */
  ObjectType: string;
  /** 订阅的数据库名称 */
  Database: string;
  /** 订阅数据库中表的名称。如果 DatabaseType 为 mongodb，填集合名。mongodb只支持订阅单库或者单集合。 */
  Tables?: string[] | null;
}

/** 数据同步配置多节点数据库的节点信息。多节点数据库，如tdsqlmysql使用该结构；单节点数据库，如mysql使用Endpoint。 */
declare interface SyncDBEndpointInfos {
  /** 数据库所在地域 */
  Region: string;
  /** 实例网络接入类型，如：extranet(外网)、ipv6(公网ipv6)、cvm(云主机自建)、dcg(专线接入)、vpncloud(vpn接入的实例)、cdb(云数据库)、ccn(云联网)、intranet(自研上云)、vpc(私有网络)等，注意具体可选值依赖当前链路 */
  AccessType: string;
  /** 实例数据库类型，如：mysql,redis,mongodb,postgresql,mariadb,percona 等 */
  DatabaseType: string;
  /** 数据库信息。注意：如果数据库类型为tdsqlmysql，此处Endpoint数组的顺序应满足规则：proxy节点放在set节点之前。如果SrcConnectType选择proxy接入则只需要填写proxy节点即可。如果选择set接入，数组中第一个set节点必须是shardkey范围起始为0的分片 */
  Info: Endpoint[] | null;
}

/** 同步任务的步骤信息 */
declare interface SyncDetailInfo {
  /** 总步骤数 */
  StepAll?: number;
  /** 当前步骤 */
  StepNow?: number;
  /** 总体进度 */
  Progress?: number;
  /** 当前步骤进度，范围为[0-100]，若为-1表示当前步骤不支持查看进度 */
  CurrentStepProgress?: number;
  /** 同步两端数据量差距 */
  MasterSlaveDistance?: number;
  /** 同步两端时间差距 */
  SecondsBehindMaster?: number;
  /** 总体描述信息 */
  Message?: string;
  /** 详细步骤信息 */
  StepInfos?: StepInfo[] | null;
  /** 不能发起内置校验的原因 */
  CauseOfCompareDisable?: string;
  /** 任务的错误和解决方案信息 */
  ErrInfo?: ErrInfo;
}

/** 同步任务信息 */
declare interface SyncJobInfo {
  /** 同步任务id，如：sync-btso140 */
  JobId?: string;
  /** 同步任务名 */
  JobName?: string;
  /** 付款方式，PostPay(按量付费)、PrePay(包年包月) */
  PayMode?: string;
  /** 运行模式，Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行) */
  RunMode?: string;
  /** 期待运行时间，格式为 yyyy-mm-dd hh:mm:ss */
  ExpectRunTime?: string;
  /** 支持的所有操作 */
  AllActions?: string[];
  /** 当前状态能进行的操作 */
  Actions?: string[] | null;
  /** 同步选项 */
  Options?: Options;
  /** 同步库表对象 */
  Objects?: Objects;
  /** 任务规格 */
  Specification?: string;
  /** 过期时间，格式为 yyyy-mm-dd hh:mm:ss */
  ExpireTime?: string;
  /** 源端地域，如：ap-guangzhou等 */
  SrcRegion?: string;
  /** 源端数据库类型，mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等 */
  SrcDatabaseType?: string;
  /** 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云) */
  SrcAccessType?: string;
  /** 源端信息，单节点数据库使用 */
  SrcInfo?: Endpoint;
  /** 枚举值：cluster、single。源库为单节点数据库使用single，多节点使用cluster */
  SrcNodeType?: string;
  /** 源端信息，多节点数据库使用 */
  SrcInfos?: SyncDBEndpointInfos;
  /** 目标端地域，如：ap-guangzhou等 */
  DstRegion?: string;
  /** 目标端数据库类型，mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等 */
  DstDatabaseType?: string;
  /** 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云) */
  DstAccessType?: string;
  /** 目标端信息，单节点数据库使用 */
  DstInfo?: Endpoint;
  /** 枚举值：cluster、single。目标库为单节点数据库使用single，多节点使用cluster */
  DstNodeType?: string;
  /** 目标端信息，多节点数据库使用 */
  DstInfos?: SyncDBEndpointInfos;
  /** 创建时间，格式为 yyyy-mm-dd hh:mm:ss */
  CreateTime?: string;
  /** 开始时间，格式为 yyyy-mm-dd hh:mm:ss */
  StartTime?: string;
  /** 任务状态，UnInitialized(未初始化)、Initialized(已初始化)、Checking(校验中)、CheckPass(校验通过)、CheckNotPass(校验不通过)、ReadyRunning(准备运行)、Running(运行中)、Pausing(暂停中)、Paused(已暂停)、Stopping(停止中)、Stopped(已结束)、ResumableErr(任务错误)、Resuming(恢复中)、Failed(失败)、Released(已释放)、Resetting(重置中)、Unknown(未知) */
  Status?: string;
  /** 结束时间，格式为 yyyy-mm-dd hh:mm:ss */
  EndTime?: string;
  /** 标签相关信息 */
  Tags?: TagItem[];
  /** 同步任务运行步骤信息 */
  Detail?: SyncDetailInfo;
  /** 用于计费的状态，可能取值有：Normal(正常状态)、Resizing(变配中)、Renewing(续费中)、Isolating(隔离中)、Isolated(已隔离)、Offlining(下线中)、Offlined(已下线)、NotBilled(未计费)、Recovering(解隔离)、PostPay2Prepaying(按量计费转包年包月中)、PrePay2Postpaying(包年包月转按量计费中) */
  TradeStatus?: string;
  /** 同步链路规格，如micro,small,medium,large */
  InstanceClass?: string;
  /** 自动续费标识，当PayMode值为PrePay则此项配置有意义，取值为：1（表示自动续费）、0（不自动续费） */
  AutoRenew?: number;
  /** 下线时间，格式为 yyyy-mm-dd hh:mm:ss */
  OfflineTime?: string;
  /** 动态修改对象，修改任务的状态等 */
  OptObjStatus?: string;
  /** 自动重试时间段设置 */
  AutoRetryTimeRangeMinutes?: number;
  /** 全量导出可重入标识：enum::"yes"/"no"。yes表示当前任务可重入、no表示当前任务处于全量导出且不可重入阶段；如果在该值为no时重启任务导出流程不支持断点续传 */
  DumperResumeCtrl?: string;
}

/** 数据同步库表信息描述 */
declare interface Table {
  /** 表名 */
  TableName?: string;
  /** 新表名 */
  NewTableName?: string;
  /** 过滤条件 */
  FilterCondition?: string;
  /** 是否同步表中所有列，All：当前表下的所有列,Partial(ModifySyncJobConfig接口里的对应字段ColumnMode暂不支持Partial)：当前表下的部分列，通过填充Columns字段详细表信息 */
  ColumnMode?: string;
  /** 同步的列信息，当ColumnMode为Partial时，必填 */
  Columns?: Column[];
  /** 同步临时表，注意此配置与NewTableName互斥，只能使用其中一种。当配置的同步对象为表级别且TableEditMode为pt时此项有意义，针对pt-osc等工具在同步过程中产生的临时表进行同步，需要提前将可能的临时表配置在这里，否则不会同步任何临时表。示例，如要对t1进行pt-osc操作，此项配置应该为["\_t1\_new","\_t1\_old"]；如要对t1进行gh-ost操作，此项配置应该为["\_t1\_ghc","\_t1\_gho","\_t1\_del"]，pt-osc与gh-ost产生的临时表可同时配置。 */
  TmpTables?: string[];
  /** 编辑表类型，rename(表映射)，pt(同步附加表) */
  TableEditMode?: string;
}

/** 表对象集合，当 TableMode 为 partial 时，此项需要填写 */
declare interface TableItem {
  /** 迁移的表名，大小写敏感 */
  TableName?: string;
  /** 迁移后的表名，当TableEditMode为rename时此项必填，注意此配置与TmpTables互斥，只能使用其中一种 */
  NewTableName?: string;
  /** 迁移临时表，注意此配置与NewTableName互斥，只能使用其中一种。当配置的同步对象为表级别且TableEditMode为pt时此项有意义，针对pt-osc等工具在迁移过程中产生的临时表进行同步，需要提前将可能的临时表配置在这里，否则不会同步任何临时表。示例，如要对t1进行pt-osc操作，此项配置应该为["\_t1\_new","\_t1\_old"]；如要对t1进行gh-ost操作，此项配置应该为["\_t1\_ghc","\_t1\_gho","\_t1\_del"]，pt-osc与gh-ost产生的临时表可同时配置。 */
  TmpTables?: string[];
  /** 编辑表类型，rename(表映射)，pt(同步附加表) */
  TableEditMode?: string;
}

/** 标签过滤 */
declare interface TagFilter {
  /** 标签键值 */
  TagKey: string;
  /** 标签值 */
  TagValue?: string[];
}

/** 标签 */
declare interface TagItem {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 单topic和自定义topic的描述。投递到单topic时，该数组的最后一项会被视为默认分区策略，所有未匹配到的数据都会按该策略投递，默认策略只支持 投递至partition0、按表名、表名+主键三种。 */
declare interface TopicRule {
  /** topic名。单topic时，所有的TopicName必须相同 */
  TopicName?: string;
  /** topic分区策略，自定义topic时支持：Random（随机投递），集中投递到单Topic时支持：AllInPartitionZero（全部投递至partition0）、PartitionByTable(按表名分区)、PartitionByTableAndKey(按表名加主键分区)、PartitionByCols(按列分区) */
  PartitionType?: string;
  /** 库名匹配规则，如Regular（正则匹配）, Default(不符合匹配规则的剩余库)，数组中最后一项必须为‘Default’ */
  DbMatchMode?: string;
  /** 库名，DbMatchMode=Regular时生效 */
  DbName?: string;
  /** 表名匹配规则，如Regular（正则匹配）, Default(不符合匹配规则的剩余表)，数组中最后一项必须为‘Default’ */
  TableMatchMode?: string;
  /** 表名，仅TableMatchMode=Regular时生效 */
  TableName?: string;
  /** 按列分区时需要选择配置列名，可以选择多列 */
  Columns?: string[] | null;
}

/** 计费状态信息 */
declare interface TradeInfo {
  /** 交易订单号 */
  DealName?: string;
  /** 上一次交易订单号 */
  LastDealName?: string;
  /** 实例规格，包括：micro、small、medium、large、xlarge、2xlarge等 */
  InstanceClass?: string;
  /** 计费任务状态， normal(计费或待计费)、resizing(变配中)、reversing(冲正中，比较短暂的状态)、isolating(隔离中，比较短暂的状态)、isolated(已隔离)、offlining(下线中)、offlined(已下线)、notBilled(未计费) */
  TradeStatus?: string;
  /** 到期时间，格式为"yyyy-mm-dd hh:mm:ss" */
  ExpireTime?: string;
  /** 下线时间，格式为"yyyy-mm-dd hh:mm:ss" */
  OfflineTime?: string;
  /** 隔离时间，格式为"yyyy-mm-dd hh:mm:ss" */
  IsolateTime?: string;
  /** 下线原因 */
  OfflineReason?: string;
  /** 隔离原因 */
  IsolateReason?: string;
  /** 付费类型，包括：postpay(后付费)、prepay(预付费) */
  PayType?: string;
  /** 任务计费类型，包括：billing(计费)、notBilling(不计费)、 promotions(促销活动中) */
  BillingType?: string;
}

/** 数据同步view的描述 */
declare interface View {
  /** view名 */
  ViewName?: string;
  /** 预留字段、目前暂时不支持view的重命名 */
  NewViewName?: string;
}

/** 视图对象 */
declare interface ViewItem {
  /** 视图名称 */
  ViewName?: string;
  /** 迁移后的视图名称 */
  NewViewName?: string;
}

declare interface CompleteMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
  /** 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync */
  CompleteMode?: string;
}

declare interface CompleteMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConfigureSubscribeJobRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
  /** 数据订阅的类型，当 DatabaseType 不为 mongodb 时，枚举值为：all-全实例更新；dml-数据更新；ddl-结构更新；dmlAndDdl-数据更新+结构更新。当 DatabaseType 为 mongodb 时，枚举值为 all-全实例更新；database-订阅单库；collection-订阅单集合 */
  SubscribeMode: string;
  /** 源数据库接入类型，如：extranet(公网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、cdb(云数据库)、cvm(云服务器自建)、intranet(自研上云)、vpc(私有网络vpc)。注意具体可选值依赖当前链路支持能力 */
  AccessType: string;
  /** 数据库节点信息 */
  Endpoints: EndpointItem[];
  /** Kafka配置 */
  KafkaConfig: SubscribeKafkaConfig;
  /** 订阅的数据库表信息，当 SubscribeMode 不为 all和ddl 时，SubscribeObjects 为必选参数 */
  SubscribeObjects?: SubscribeObject[];
  /** 订阅数据格式，如：protobuf、json、avro。注意具体可选值依赖当前链路支持能力，数据格式详情参考官网的消费demo文档 */
  Protocol?: string;
  /** mongo选填参数：输出聚合设置。 */
  PipelineInfo?: PipelineInfo[];
  /** 为业务添加的额外信息。参数名作key，参数值作value。mysql选填参数：ProcessXA-是否处理XA事务，填true处理，不填或填其他值不处理。mongo选填参数：SubscribeType-订阅类型，目前只支持changeStream，不填也是默认changeStream。其他业务暂没有可选参数。 */
  ExtraAttr?: KeyValuePairOption[];
}

declare interface ConfigureSubscribeJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConfigureSyncJobRequest {
  /** 同步实例id（即标识一个同步作业），形如sync-werwfs23 */
  JobId: string;
  /** 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云),注意具体可选值依赖当前链路 */
  SrcAccessType: string;
  /** 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)、ckafka(CKafka实例),注意具体可选值依赖当前链路 */
  DstAccessType: string;
  /** 同步库表对象信息 */
  Objects: Objects;
  /** 同步任务名称 */
  JobName?: string;
  /** 枚举值是 liteMode 和 fullMode ，分别对应精简模式或正常模式 */
  JobMode?: string;
  /** 运行模式，取值如：Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行) */
  RunMode?: string;
  /** 期待启动时间，当RunMode取值为Timed时，此值必填，形如："2006-01-02 15:04:05" */
  ExpectRunTime?: string;
  /** 源端tdsql连接方式：proxy-通过tdsql proxy主机访问各个set节点，注意只有在自研上云的网络环境下才能通过这种方式连接，SrcInfos中只需要提供proxy主机信息。set-直连set节点，如选择直连set方式，需要正确填写proxy主机信息及所有set节点信息。源端是tdsqlmysql类型必填。 */
  SrcConnectType?: string;
  /** 源端信息，单机版类型数据库配置使用，且SrcNodeType传single。例如mysql、percona、mariadb等。 */
  SrcInfo?: Endpoint;
  /** 源端信息，分布式类型数据库配置使用，且SrcNodeType传cluster。例如分布式数据库tdsqlmysql等。 */
  SrcInfos?: SyncDBEndpointInfos;
  /** 枚举值：cluster、single。源库为单节点数据库使用single，多节点使用cluster */
  SrcNodeType?: string;
  /** 目标端信息，单机版类型数据库配置使用，且SrcNodeType传single。例如mysql、percona、mariadb等。 */
  DstInfo?: Endpoint;
  /** 目标端信息，分布式类型数据库配置使用，且SrcNodeType传cluster。例如分布式数据库tdsqlmysql等。 */
  DstInfos?: SyncDBEndpointInfos;
  /** 枚举值：cluster、single。目标库为单节点数据库使用single，多节点使用cluster */
  DstNodeType?: string;
  /** 同步任务选项；该字段下的RateLimitOption暂时无法生效、如果需要修改限速、可通过ModifySyncRateLimit接口完成限速 */
  Options?: Options;
  /** 自动重试的时间段、可设置5至720分钟、0表示不重试 */
  AutoRetryTimeRangeMinutes?: number;
}

declare interface ConfigureSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ContinueMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface ContinueMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ContinueSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface ContinueSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCheckSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface CreateCheckSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCompareTaskRequest {
  /** 任务 Id */
  JobId: string;
  /** 数据对比任务名称，若为空则默认给CompareTaskId相同值 */
  TaskName?: string;
  /** 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)，custom(自定义模式) */
  ObjectMode?: string;
  /** 数据对比对象，当ObjectMode为custom时，此项需要填写。 */
  Objects?: CompareObject;
  /** 一致性校验选项 */
  Options?: CompareOptions;
}

declare interface CreateCompareTaskResponse {
  /** 数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsumerGroupRequest {
  /** 订阅实例id */
  SubscribeId: string;
  /** 消费组名称，以数字、字母(大小写)或者_ - .开头，以数字、字母(大小写)结尾。实际生成的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName} */
  ConsumerGroupName: string;
  /** 账号名称。以数字、字母(大小写)或者_ - .开头，以数字、字母(大小写)结尾。实际生成的账户全称形如：account-#{SubscribeId}-#{AccountName} */
  AccountName: string;
  /** 消费组密码，长度必须大于3 */
  Password: string;
  /** 消费组备注 */
  Description?: string;
}

declare interface CreateConsumerGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMigrateCheckJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface CreateMigrateCheckJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMigrationServiceRequest {
  /** 源实例数据库类型，如mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb,cynosdbmysql */
  SrcDatabaseType: string;
  /** 目标实例数据库类型，如mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb,cynosdbmysql */
  DstDatabaseType: string;
  /** 源实例地域，如：ap-guangzhou */
  SrcRegion: string;
  /** 目标实例地域，如：ap-guangzhou。注意，目标地域必须和API请求地域保持一致。 */
  DstRegion: string;
  /** 实例规格，包括：small、medium、large、xlarge、2xlarge */
  InstanceClass: string;
  /** 购买数量，范围为[1,15]，默认为1 */
  Count?: number;
  /** 迁移服务名称，最大长度128 */
  JobName?: string;
  /** 标签信息 */
  Tags?: TagItem[];
}

declare interface CreateMigrationServiceResponse {
  /** 下单成功随机生成的迁移任务id列表，形如：dts-c1f6rs21 */
  JobIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateModifyCheckSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface CreateModifyCheckSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSubscribeCheckJobRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
}

declare interface CreateSubscribeCheckJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSubscribeRequest {
  /** 订阅的数据库类型，目前支持 cynosdbmysql(tdsql-c mysql版),mariadb,mongodb,mysql,percona,tdpg(tdsql postgresql版),tdsqlpercona(tdsql mysql版) */
  Product: string;
  /** 付费方式，枚举值：0-包年包月，1-按量计费 */
  PayType: number;
  /** 购买时长。当 payType 为包年包月时，该项需要填，单位为月，最小值为 1，最大值为 120。不填默认1 */
  Duration?: number;
  /** 是否自动续费。当 payType 为包年包月时，该项需要填。枚举值：0-不自动续费，1-自动续费。默认不自动续费。按量计费设置该标识无效。 */
  AutoRenew?: number;
  /** 购买数量,默认为1，最大为10 */
  Count?: number;
  /** 实例资源标签 */
  Tags?: TagItem[];
  /** 任务名，自定义 */
  Name?: string;
}

declare interface CreateSubscribeResponse {
  /** 数据订阅实例的ID数组 */
  SubscribeIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSyncJobRequest {
  /** 付款类型, 如：PrePay(表示包年包月)、PostPay(表示按时按量) */
  PayMode: string;
  /** 源端数据库类型,如mysql,mariadb,percona,postgresql,cynosdbmysql(表示TDSQL-C MySQL),tdpg(TDSQL PostgreSQL版),tdsqlmysql,tdstore(表示TDSQL TDStore版)等。 */
  SrcDatabaseType: string;
  /** 源端数据库所在地域,如ap-guangzhou */
  SrcRegion: string;
  /** 目标端数据库类型,如mysql,mariadb,percona,cynosdbmysql(表示TDSQL-C MySQL),tdpg(TDSQL PostgreSQL版),tdsqlmysql,kafka,tdstore(表示TDSQL TDStore版)等。 */
  DstDatabaseType: string;
  /** 目标端数据库所在地域,如ap-guangzhou */
  DstRegion: string;
  /** 同步任务规格，Standard:标准版 */
  Specification?: string;
  /** 购买时长（单位：月），当PayMode值为PrePay则此项配置有意义，默认为1月，取值范围为[1,100] */
  TimeSpan?: number;
  /** 标签信息 */
  Tags?: TagItem[];
  /** 一次购买的同步任务数量，取值范围为[1, 10]，默认为1 */
  Count?: number;
  /** 自动续费标识，当PayMode值为PrePay则此项配置有意义，取值为：1（表示自动续费）、0（不自动续费，默认为此值） */
  AutoRenew?: number;
  /** 同步链路规格，如micro,small,medium,large，默认为medium */
  InstanceClass?: string;
  /** 同步任务名称 */
  JobName?: string;
  /** 创建类似任务的现有任务Id */
  ExistedJobId?: string;
}

declare interface CreateSyncJobResponse {
  /** 同步任务ids */
  JobIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCompareTaskRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
}

declare interface DeleteCompareTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConsumerGroupRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
  /** 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName}。请务必保证消费组名称正确。 */
  ConsumerGroupName: string;
  /** 账号名称。实际的账户全称形如：account-#{SubscribeId}-#{AccountName}。请务必保证账户名称正确。 */
  AccountName: string;
}

declare interface DeleteConsumerGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCheckSyncJobResultRequest {
  /** 同步实例id（即标识一个同步作业），形如sync-werwfs23，此值必填 */
  JobId?: string;
}

declare interface DescribeCheckSyncJobResultResponse {
  /** 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功) */
  Status?: string;
  /** 步骤总数 */
  StepCount?: number;
  /** 当前所在步骤 */
  StepCur?: number;
  /** 总体进度，范围为[0,100] */
  Progress?: number;
  /** 步骤信息 */
  StepInfos?: StepInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompareReportRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 校验任务 Id */
  CompareTaskId: string;
  /** 校验不一致结果的 limit */
  DifferenceLimit?: number;
  /** 不一致的 Offset */
  DifferenceOffset?: number;
  /** 搜索条件，不一致的库名 */
  DifferenceDB?: string;
  /** 搜索条件，不一致的表名 */
  DifferenceTable?: string;
  /** 未校验的 Limit */
  SkippedLimit?: number;
  /** 未校验的 Offset */
  SkippedOffset?: number;
  /** 搜索条件，未校验的库名 */
  SkippedDB?: string;
  /** 搜索条件，未校验的表名 */
  SkippedTable?: string;
}

declare interface DescribeCompareReportResponse {
  /** 一致性校验摘要信息 */
  Abstract?: CompareAbstractInfo;
  /** 一致性校验详细信息 */
  Detail?: CompareDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompareTasksRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 分页设置，表示每页显示多少条任务，默认为 20 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 校验任务 ID */
  CompareTaskId?: string;
  /** 任务状态过滤，可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止 */
  Status?: string[];
}

declare interface DescribeCompareTasksResponse {
  /** 数量 */
  TotalCount?: number;
  /** 一致性校验列表 */
  Items?: CompareTaskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumerGroupsRequest {
  /** 订阅实例id */
  SubscribeId: string;
  /** 返回记录的起始偏移量。默认0 */
  Offset?: number;
  /** 单次返回的记录数量。默认10 */
  Limit?: number;
}

declare interface DescribeConsumerGroupsResponse {
  /** 指定实例下的消费者组总数 */
  TotalCount?: number;
  /** 消费者组列表 */
  Items?: GroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrateDBInstancesRequest {
  /** 数据库类型，如mysql,redis等 */
  DatabaseType: string;
  /** 实例作为迁移的源还是目标,src(表示源)，dst(表示目标) */
  MigrateRole?: string;
  /** 云数据库实例ID */
  InstanceId?: string;
  /** 云数据库名称 */
  InstanceName?: string;
  /** 返回数量限制 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 资源所属账号 为空值或self(表示本账号内资源)、other(表示其他账户资源) */
  AccountMode?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。 */
  TmpSecretId?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。 */
  TmpSecretKey?: string;
  /** 临时密钥Id，可通过申请扮演角色临时访问凭证获取临时密钥https://cloud.tencent.com/document/product/1312/48197，其中角色资源RoleArn的定义可参考DTS跨账号迁移文档(https://cloud.tencent.com/document/product/571/54117)第4节中关于角色的定义。 */
  TmpToken?: string;
}

declare interface DescribeMigrateDBInstancesResponse {
  /** 符合筛选条件的数量 */
  TotalCount?: number;
  /** 实例列表 */
  Instances?: MigrateDBItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationCheckJobRequest {
  /** 任务id */
  JobId: string;
}

declare interface DescribeMigrationCheckJobResponse {
  /** 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功) */
  Status?: string;
  /** 校验任务结果输出简要信息 */
  BriefMsg?: string;
  /** 检查步骤 */
  StepInfo?: CheckStep[];
  /** 校验结果，如：checkPass(校验通过)、checkNotPass(校验未通过) */
  CheckFlag?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationDetailRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface DescribeMigrationDetailResponse {
  /** 数据迁移任务ID */
  JobId?: string;
  /** 数据迁移任务名称 */
  JobName?: string;
  /** 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss */
  CreateTime?: string;
  /** 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss */
  UpdateTime?: string;
  /** 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss */
  StartTime?: string;
  /** 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss */
  EndTime?: string;
  /** 迁移任务简要错误信息 */
  BriefMsg?: string;
  /** 任务状态，取值为：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)、pausing(暂停中)、manualPaused(已暂停) */
  Status?: string;
  /** 任务操作信息 */
  Action?: MigrateAction;
  /** 迁移执行过程信息，在校验阶段显示校验过程步骤信息，在迁移阶段会显示迁移步骤信息 */
  StepInfo?: MigrateDetailInfo;
  /** 源实例信息 */
  SrcInfo?: DBEndpointInfo;
  /** 目标端信息 */
  DstInfo?: DBEndpointInfo;
  /** 数据一致性校验结果 */
  CompareTask?: CompareTaskInfo;
  /** 标签信息 */
  Tags?: TagItem[];
  /** 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行) */
  RunMode?: string;
  /** 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05" */
  ExpectRunTime?: string;
  /** 迁移选项，描述任务如何执行迁移等一系列配置信息 */
  MigrateOption?: MigrateOption;
  /** 校验任务运行详情 */
  CheckStepInfo?: CheckStepInfo;
  /** 描述计费相关的信息 */
  TradeInfo?: TradeInfo;
  /** 任务错误信息 */
  ErrorInfo?: ErrorInfoItem[];
  /** 全量导出可重入标识：enum::"yes"/"no"。yes表示当前任务可重入、no表示当前任务处于全量导出且不可重入阶段；如果在该值为no时重启任务导出流程不支持断点续传 */
  DumperResumeCtrl?: string;
  /** 任务的限速信息 */
  RateLimitOption?: RateLimitOption;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationJobsRequest {
  /** 数据迁移任务ID，如：dts-amm1jw5q */
  JobId?: string;
  /** 数据迁移任务名称 */
  JobName?: string;
  /** 数据迁移任务状态，可取值包括：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中) */
  Status?: string[];
  /** 源实例ID，格式如：cdb-c1nl9rpv */
  SrcInstanceId?: string;
  /** 源实例地域，如：ap-guangzhou */
  SrcRegion?: string;
  /** 源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql */
  SrcDatabaseType?: string[];
  /** 源实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例) */
  SrcAccessType?: string[];
  /** 目标实例ID，格式如：cdb-c1nl9rpv */
  DstInstanceId?: string;
  /** 目标实例地域，如：ap-guangzhou */
  DstRegion?: string;
  /** 目标源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql */
  DstDatabaseType?: string[];
  /** 目标实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例) */
  DstAccessType?: string[];
  /** 任务运行模式，值包括：immediate(立即运行)，timed(定时运行) */
  RunMode?: string;
  /** 排序方式，可能取值为asc、desc，默认按照创建时间倒序 */
  OrderSeq?: string;
  /** 返回实例数量，默认20，有效区间[1,100] */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 标签过滤 */
  TagFilters?: TagFilter[];
}

declare interface DescribeMigrationJobsResponse {
  /** 迁移任务数量 */
  TotalCount?: number;
  /** 迁移任务列表 */
  JobList?: JobItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModifyCheckSyncJobResultRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface DescribeModifyCheckSyncJobResultResponse {
  /** 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功) */
  Status?: string;
  /** 校验的步骤总数 */
  StepCount?: number;
  /** 当前所在步骤 */
  StepCur?: number;
  /** 总体进度，范围为[0,100] */
  Progress?: number;
  /** 步骤详细信息 */
  StepInfos?: StepInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOffsetByTimeRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
  /** 时间点，格式为：Y-m-d h:m:s。如果输入时间比当前时间晚的多，相当于查询最新offset；如果输入时间比当前时间早的多，相当于查询最老offset；如果输入空，默认0时间，等价于查询最老offset。 */
  Time: string;
}

declare interface DescribeOffsetByTimeResponse {
  /** 时间与Offset的对应 */
  Items?: OffsetTimeMap[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubscribeCheckJobRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
}

declare interface DescribeSubscribeCheckJobResponse {
  /** 订阅实例ID */
  SubscribeId?: string;
  /** 失败或者报错提示，成功则提示success。 */
  Message?: string;
  /** 任务运行状态，可能值为 running,failed,success */
  Status?: string;
  /** 当前总体进度，范围 0~100 */
  Progress?: number;
  /** 校验总步骤数 */
  StepAll?: number;
  /** 当前执行步骤 */
  StepNow?: number;
  /** 各个步骤运行状态 */
  Steps?: SubscribeCheckStepInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubscribeDetailRequest {
  /** 订阅实例ID */
  SubscribeId: string;
}

declare interface DescribeSubscribeDetailResponse {
  /** 数据订阅的ID，形如subs-b6x64o31tm */
  SubscribeId?: string;
  /** 数据订阅实例的名称 */
  SubscribeName?: string;
  /** 订阅的数据库类型，目前支持 cynosdbmysql(tdsql-c mysql版),mariadb,mongodb,mysql,percona,tdpg(tdsql postgresql版),tdsqlpercona(tdsql mysql版) */
  Product?: string;
  /** 订阅的云数据库实例ID，只有订阅云数据库该值才有意义 */
  InstanceId?: string;
  /** 订阅的云数据库实例状态，只有订阅云数据库该值才有意义。可能值为：running, isolated, offline */
  InstanceStatus?: string;
  /** 订阅任务计费状态，可能值为：正常normal, 隔离中isolating, 已隔离isolated, 下线中offlining, 按量转包年包月中 post2PrePayIng */
  Status?: string;
  /** 订阅任务状态，可能值为：未启动notStarted, 校验中checking, 校验不通过checkNotPass, 校验通过checkPass, 启动中starting, 运行中running, 异常出错error */
  SubsStatus?: string;
  /** 修改时间，时间格式如：Y-m-d h:m:s */
  ModifyTime?: string;
  /** 创建时间，时间格式如：Y-m-d h:m:s */
  CreateTime?: string;
  /** 隔离时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00 */
  IsolateTime?: string;
  /** 包年包月任务的到期时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00 */
  ExpireTime?: string;
  /** 下线时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00 */
  OfflineTime?: string;
  /** 付费方式，可能值为：0-包年包月，1-按量计费 */
  PayType?: number;
  /** 自动续费标识。只有当 PayType=0，该值才有意义。枚举值：0-不自动续费，1-自动续费 */
  AutoRenewFlag?: number;
  /** 任务所在地域 */
  Region?: string;
  /** Kafka topic */
  Topic?: string;
  /** Kafka服务Broker地址 */
  Broker?: string;
  /** 数据订阅的类型，当 Product 不为 mongodb 时，可能值为：all-全实例更新；dml-数据更新；ddl-结构更新；dmlAndDdl-数据更新+结构更新。当 Product 为 mongodb 时，可能值为 all-全实例更新；database-订阅单库；collection-订阅单集合 */
  SubscribeMode?: string;
  /** 订阅数据格式。如果为空则用的默认格式: mysql\cynosdbmysql\mariadb\percona\tdsqlpercona\tdpg是protobuf，mongo是json。当 DatabaseType 为 mysql和cynosdbmysql 时有三种可选协议：protobuf\avro\json。数据格式详情参考官网的消费demo文档 */
  Protocol?: string;
  /** 订阅的数据库表信息 */
  SubscribeObjects?: SubscribeObject[];
  /** kafka配置信息 */
  KafkaConfig?: SubscribeKafkaConfig;
  /** 订阅内置kafka的版本信息 */
  KafkaVersion?: string;
  /** 源数据库接入类型，如：extranet(公网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、cdb(云数据库)、cvm(云服务器自建)、intranet(自研上云)、vpc(私有网络vpc)。注意具体可选值依赖当前链路支持能力 */
  AccessType?: string;
  /** 接入类型信息 */
  Endpoints?: EndpointItem[];
  /** mongo输出聚合设置 */
  PipelineInfo?: PipelineInfo[];
  /** 标签 */
  Tags?: TagItem[];
  /** 订阅任务报错信息 */
  Errors?: SubsErr[] | null;
  /** 为业务添加的额外信息。参数名作key，参数值作value。mysql选填参数：ProcessXA-是否处理XA事务，为true处理，其他不处理。mongo选填参数：SubscribeType-订阅类型，目前只支持changeStream。 */
  ExtraAttr?: KeyValuePairOption[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubscribeJobsRequest {
  /** 订阅 ID 筛选，精确匹配 */
  SubscribeId?: string;
  /** 订阅 ID 筛选，精确匹配 */
  SubscribeIds?: string[];
  /** 订阅名称，前缀模糊匹配 */
  SubscribeName?: string;
  /** 订阅的云上数据库实例的 ID，精确匹配 */
  InstanceId?: string;
  /** 订阅的topicName */
  Topic?: string;
  /** 计费模式筛选，可能的值：0-包年包月，1-按量计费 */
  PayType?: number;
  /** 订阅的数据库产品，目前支持 cynosdbmysql,mariadb,mongodb,mysql,percona,tdpg,tdsqlpercona(tdsqlmysql) */
  Product?: string;
  /** 数据订阅生命周期状态，可能的值为：正常 normal, 隔离中 isolating, 已隔离 isolated, 下线中 offlining，按量转包年包月中 post2PrePayIng */
  Status?: string[];
  /** 数据订阅状态，可能的值为：未启动 notStarted, 校验中 checking, 校验不通过 checkNotPass, 校验通过 checkPass, 启动中 starting, 运行中 running, 异常出错 error */
  SubsStatus?: string[];
  /** 返回记录的起始偏移量。默认0 */
  Offset?: number;
  /** 单次返回的记录数量。默认20，最大100 */
  Limit?: number;
  /** 排序方向，可选的值为"DESC"和"ASC"，默认为"DESC"，按创建时间逆序排序 */
  OrderDirection?: string;
  /** tag 过滤条件，多个 TagFilter 之间关系为且 */
  TagFilters?: TagFilter[];
}

declare interface DescribeSubscribeJobsResponse {
  /** 符合查询条件的实例总数 */
  TotalCount?: number;
  /** 数据订阅实例的信息列表 */
  Items?: SubscribeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubscribeReturnableRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
}

declare interface DescribeSubscribeReturnableResponse {
  /** 实例是否支持退还/退货 */
  IsReturnable?: boolean;
  /** 不支持退还的原因 */
  ReturnFailMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSyncJobsRequest {
  /** 同步任务id，如sync-werwfs23 */
  JobId?: string;
  /** 同步任务id列表，如sync-werwfs23 */
  JobIds?: string[];
  /** 同步任务名 */
  JobName?: string;
  /** 排序字段，可以取值为CreateTime */
  Order?: string;
  /** 排序方式，升序为ASC，降序为DESC，默认为CreateTime降序 */
  OrderSeq?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回同步任务实例数量，默认20，有效区间[1,100] */
  Limit?: number;
  /** 状态集合，如Initialized,CheckPass,Running,ResumableErr,Stopped */
  Status?: string[];
  /** 运行模式，如Immediate:立即运行，Timed:定时运行 */
  RunMode?: string;
  /** 任务类型，如mysql2mysql：msyql同步到mysql */
  JobType?: string;
  /** 付费类型，PrePay：预付费，PostPay：后付费 */
  PayMode?: string;
  /** tag */
  TagFilters?: TagFilter[];
  /** 源端数据库连接信息，可以输入实例ID或者IP等 */
  SrcInfoPattern?: string;
  /** 目标端数据库连接信息，可以输入实例ID或者IP等 */
  DstInfoPattern?: string;
}

declare interface DescribeSyncJobsResponse {
  /** 任务数目 */
  TotalCount?: number;
  /** 任务详情数组 */
  JobList?: SyncJobInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyIsolatedSubscribeRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
}

declare interface DestroyIsolatedSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyMigrateJobRequest {
  /** 任务id */
  JobId?: string;
}

declare interface DestroyMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroySyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface DestroySyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateMigrateJobRequest {
  /** 任务id */
  JobId: string;
}

declare interface IsolateMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateSubscribeRequest {
  /** 订阅实例ID */
  SubscribeId: string;
}

declare interface IsolateSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface IsolateSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCompareTaskNameRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
  /** 一致性校验任务名称 */
  TaskName: string;
}

declare interface ModifyCompareTaskNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCompareTaskRequest {
  /** 任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
  /** 任务名称 */
  TaskName?: string;
  /** 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)、custom(自定义)，注意自定义对比对象必须是迁移对象的子集 */
  ObjectMode?: string;
  /** 对比对象，若CompareObjectMode取值为custom，则此项必填 */
  Objects?: CompareObject;
  /** 一致性校验选项 */
  Options?: CompareOptions;
}

declare interface ModifyCompareTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConsumerGroupDescriptionRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
  /** 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName}。请务必保证消费组名称正确。 */
  ConsumerGroupName: string;
  /** 账户名称。实际的账户全称形如：account-#{SubscribeId}-#{AccountName}。请务必保证账户名称正确。 */
  AccountName: string;
  /** 修改之后的消费组描述 */
  Description: string;
}

declare interface ModifyConsumerGroupDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConsumerGroupPasswordRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
  /** 账号名称。实际的账户全称形如：account-#{SubscribeId}-#{AccountName} */
  AccountName: string;
  /** 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName} */
  ConsumerGroupName: string;
  /** 新密码。字符长度不小于3，不大于32 */
  NewPassword: string;
}

declare interface ModifyConsumerGroupPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrateJobSpecRequest {
  /** 任务id */
  JobId: string;
  /** 新实例规格大小，包括：micro、small、medium、large、xlarge、2xlarge */
  NewInstanceClass: string;
}

declare interface ModifyMigrateJobSpecResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrateNameRequest {
  /** 迁移任务id */
  JobId: string;
  /** 修改后的迁移任务名 */
  JobName: string;
}

declare interface ModifyMigrateNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrateRateLimitRequest {
  /** 迁移任务ID */
  JobId: string;
  /** 迁移任务全量导出线程数、有效值为 1-16 */
  DumpThread?: number;
  /** 迁移全量导出的 Rps 限制、需要大于 0 */
  DumpRps?: number;
  /** 迁移任务全量导入线程数、有效值为 1-16 */
  LoadThread?: number;
  /** 迁移任务增量导入线程数、有效值为 1-128 */
  SinkerThread?: number;
  /** 全量导入Rps限制 */
  LoadRps?: number;
}

declare interface ModifyMigrateRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrateRuntimeAttributeRequest {
  /** 迁移任务id，如：dts-2rgv0f09 */
  JobId: string;
  /** 需要修改的属性，此结构设计为通用结构，用于屏蔽多个业务的定制属性。例如对于Redis:{ "Key": "DstWriteMode",	//目标库写入模式 "Value": "normal" //clearData(清空目标实例数据)、overwrite(以覆盖写的方式执行任务)、normal(跟正常流程一样，不做额外动作，默认为此值) },{ "Key": "IsDstReadOnly",	//是否在迁移时设置目标库只读 "Value": "true" //true(设置只读)、false(不设置只读) } */
  OtherOptions: KeyValuePairOption[];
}

declare interface ModifyMigrateRuntimeAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrationJobRequest {
  /** 任务id */
  JobId: string;
  /** 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行) */
  RunMode: string;
  /** 迁移任务配置选项，描述任务如何执行迁移等一系列配置信息；字段下的RateLimitOption不可配置、如果需要修改任务的限速信息、请在任务运行后通过ModifyMigrateRateLimit接口修改 */
  MigrateOption: MigrateOption;
  /** 源实例信息 */
  SrcInfo: DBEndpointInfo;
  /** 目标实例信息 */
  DstInfo: DBEndpointInfo;
  /** 迁移任务名称，最大长度128 */
  JobName?: string;
  /** 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05" */
  ExpectRunTime?: string;
  /** 标签信息 */
  Tags?: TagItem[];
  /** 自动重试的时间段、可设置5至720分钟、0表示不重试 */
  AutoRetryTimeRangeMinutes?: number;
}

declare interface ModifyMigrationJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySubscribeAutoRenewFlagRequest {
  /** 订阅实例ID */
  SubscribeId: string;
  /** 自动续费标识。1-自动续费，0-不自动续费 */
  AutoRenewFlag: number;
}

declare interface ModifySubscribeAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySubscribeNameRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
  /** 修改后的数据订阅实例的名称，长度限制为[1,60] */
  SubscribeName: string;
}

declare interface ModifySubscribeNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySubscribeObjectsRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
  /** 数据订阅的类型，非mongo任务的枚举值：0-全实例更新；1-数据更新；2-结构更新；3-数据更新+结构更新。mongo任务的枚举值：0-全实例更新；4-订阅单库；5-订阅单集合 */
  SubscribeObjectType: number;
  /** 修改后的订阅数据库表信息。会覆盖原来的订阅对象，所以除非 SubscribeObjectType = 0或2，否则改字段必填。 */
  Objects?: ModifiedSubscribeObject[];
  /** kafka分区策略。如果不填，默认不修改。如果填了，会覆盖原来的策略。 */
  DistributeRules?: DistributeRule[];
  /** 默认分区策略。不满足DistributeRules中正则表达式的数据，将按照默认分区策略计算分区。非mongo产品支持的默认策略: table-按表名分区，pk-按表名+主键分区。mongo的默认策略仅支持：collection-按集合名分区。该字段与DistributeRules搭配使用。如果配置了DistributeRules，该字段也必填。如果配置了该字段，视为配置了一条DistributeRules，原来的分区策略也会被覆盖。 */
  DefaultRuleType?: string;
  /** mongo输出聚合设置，mongo任务可选。如果不填，默认不修改。 */
  PipelineInfo?: PipelineInfo[];
}

declare interface ModifySubscribeObjectsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySyncJobConfigRequest {
  /** 同步任务id */
  JobId: string;
  /** 修改后的同步对象 */
  DynamicObjects?: Objects;
  /** 修改后的同步任务选项 */
  DynamicOptions?: DynamicOptions;
}

declare interface ModifySyncJobConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySyncRateLimitRequest {
  /** 迁移任务ID */
  JobId: string;
  /** 同步任务全量导出线程数、有效值为 1-16 */
  DumpThread?: number;
  /** 同步任务全量导出的 Rps 限制、需要大于 0 */
  DumpRps?: number;
  /** 同步任务全量导入线程数、有效值为 1-16 */
  LoadThread?: number;
  /** 同步任务增量导入线程数、有效值为 1-128 */
  SinkerThread?: number;
  /** 同步任务全量导入的Rps */
  LoadRps?: number;
}

declare interface ModifySyncRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PauseMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface PauseMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PauseSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface PauseSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverMigrateJobRequest {
  /** 任务id */
  JobId: string;
}

declare interface RecoverMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverSyncJobRequest {
  /** 同步实例id（即标识一个同步作业），形如sync-werwfs23 */
  JobId: string;
}

declare interface RecoverSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetConsumerGroupOffsetRequest {
  /** 订阅实例id */
  SubscribeId: string;
  /** 订阅的kafka topic */
  TopicName: string;
  /** 消费组名称。实际的消费组全称形如：consumer-grp-#{SubscribeId}-#{ConsumerGroupName} */
  ConsumerGroupName: string;
  /** 需要修改offset的分区编号 */
  PartitionNos: number[];
  /** 重置方式。枚举值为 earliest-从最开始位置开始消费；latest-从最新位置开始消费；datetime-从指定时间前最近的checkpoint开始消费 */
  ResetMode: string;
  /** 当 ResetMode 为 datetime 时，该项需要填，格式为：Y-m-d h:m:s。如果不填，默认用0时间，效果与earliest相同。 */
  ResetDatetime?: string;
}

declare interface ResetConsumerGroupOffsetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetSubscribeRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
}

declare interface ResetSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeSyncJobRequest {
  /** 同步任务id */
  JobId: string;
  /** 任务规格 */
  NewInstanceClass: string;
}

declare interface ResizeSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
  /** 恢复任务的模式，目前的取值有：clearData 清空目标实例数据，overwrite 以覆盖写的方式执行任务，normal 跟正常流程一样，不做额外动作；注意，clearData、overwrite仅对redis生效，normal仅针对非redis链路生效 */
  ResumeOption?: string;
}

declare interface ResumeMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeSubscribeRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
}

declare interface ResumeSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface ResumeSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SkipCheckItemRequest {
  /** 数据迁移任务ID */
  JobId: string;
  /** 需要跳过校验项的步骤id，需要通过DescribeMigrationCheckJob接口返回StepInfo[i].StepId字段获取，例如：["OptimizeCheck"] */
  StepIds: string[];
  /** 当出现外键依赖检查导致校验不通过时、可以通过该字段选择是否迁移外键依赖，当StepIds包含ConstraintCheck且该字段值为shield时表示不迁移外键依赖、当StepIds包含ConstraintCheck且值为migrate时表示迁移外键依赖 */
  ForeignKeyFlag?: string;
}

declare interface SkipCheckItemResponse {
  /** 跳过的提示信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SkipSyncCheckItemRequest {
  /** 任务id，如：sync-4ddgid2 */
  JobId: string;
  /** 需要跳过校验项的步骤id，需要通过`DescribeCheckSyncJobResult`接口返回StepInfos[i].StepId字段获取，例如：["OptimizeCheck"] */
  StepIds: string[];
}

declare interface SkipSyncCheckItemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartCompareRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
}

declare interface StartCompareResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface StartMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartModifySyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface StartModifySyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartSubscribeRequest {
  /** 数据订阅实例的 ID */
  SubscribeId: string;
}

declare interface StartSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartSyncJobRequest {
  /** 同步任务id */
  JobId?: string;
}

declare interface StartSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCompareRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
  /** 是否强制停止。如果填true，同步任务增量阶段会跳过一致性校验产生的binlog，达到快速恢复任务的效果 */
  ForceStop?: boolean;
}

declare interface StopCompareResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface StopMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface StopSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20180330 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-03-30' } }

  /** 抽样检验时的抽样参数 */
  interface ConsistencyParams {
    /** 数据内容检测参数。表中选出用来数据对比的行，占表的总行数的百分比。取值范围是整数[1-100] */
    SelectRowsPerTable: number;
    /** 数据内容检测参数。迁移库表中，要进行数据内容检测的表，占所有表的百分比。取值范围是整数[1-100] */
    TablesSelectAll: number;
    /** 数据数量检测，检测表行数是否一致。迁移库表中，要进行数据数量检测的表，占所有表的百分比。取值范围是整数[1-100] */
    TablesSelectCount: number;
  }

  /** 目的实例信息，具体内容跟迁移任务类型相关 */
  interface DstInfo {
    /** 目标实例地域，如ap-guangzhou */
    Region: string;
    /** 目标实例ID，如cdb-jd92ijd8 */
    InstanceId?: string;
    /** 目标实例vip。已废弃，无需填写 */
    Ip?: string;
    /** 目标实例vport。已废弃，无需填写 */
    Port?: number;
    /** 目前只对MySQL有效。当为整实例迁移时，1-只读，0-可读写。 */
    ReadOnly?: number;
    /** 目标数据库账号 */
    User?: string;
    /** 目标数据库密码 */
    Password?: string;
  }

  /** 迁移任务错误信息及提示 */
  interface ErrorInfo {
    /** 具体的报错日志, 包含错误码和错误信息 */
    ErrorLog?: string;
    /** 报错对应的帮助文档Ur */
    HelpDoc?: string;
  }

  /** 描述详细迁移过程 */
  interface MigrateDetailInfo {
    /** 总步骤数 */
    StepAll?: number;
    /** 当前步骤 */
    StepNow?: number;
    /** 总进度,如："10" */
    Progress?: string;
    /** 当前步骤进度,如:"1" */
    CurrentStepProgress?: string;
    /** 主从差距，MB；在增量同步阶段有效，目前支持产品为：redis和mysql */
    MasterSlaveDistance?: number;
    /** 主从差距，秒；在增量同步阶段有效，目前支持产品为：mysql */
    SecondsBehindMaster?: number;
    /** 步骤信息 */
    StepInfo?: MigrateStepDetailInfo[];
  }

  /** 迁移任务详情 */
  interface MigrateJobInfo {
    /** 数据迁移任务ID */
    JobId?: string;
    /** 数据迁移任务名称 */
    JobName?: string;
    /** 迁移任务配置选项 */
    MigrateOption?: MigrateOption;
    /** 源实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona */
    SrcDatabaseType?: string;
    /** 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),cdb(腾讯云数据库实例),ccn(云联网实例) */
    SrcAccessType?: string;
    /** 源实例信息，具体内容跟迁移任务类型相关 */
    SrcInfo?: SrcInfo;
    /** 目标实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona */
    DstDatabaseType?: string;
    /** 目标实例接入类型，目前支持：cdb(腾讯云数据库实例) */
    DstAccessType?: string;
    /** 目标实例信息 */
    DstInfo?: DstInfo;
    /** 需要迁移的源数据库表信息，如果需要迁移的是整个实例，该字段为[] */
    DatabaseInfo?: string;
    /** 任务创建(提交)时间 */
    CreateTime?: string;
    /** 任务开始执行时间 */
    StartTime?: string;
    /** 任务执行结束时间 */
    EndTime?: string;
    /** 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing）,23-未知状态（Unknown） */
    Status?: number;
    /** 任务详情 */
    Detail?: MigrateDetailInfo;
    /** 任务错误信息提示，当任务发生错误时，不为null或者空值 */
    ErrorInfo?: ErrorInfo[];
    /** 标签 */
    Tags?: TagItem[];
    /** 源实例为集群时且接入为非cdb时源实例信息 */
    SrcInfoMulti?: SrcInfo[] | null;
  }

  /** 迁移任务配置选项 */
  interface MigrateOption {
    /** 任务运行模式，值包括：1-立即执行，2-定时执行 */
    RunMode: number;
    /** 期望执行时间，当runMode=2时，该字段必填，时间格式：yyyy-mm-dd hh:mm:ss */
    ExpectTime?: string;
    /** 数据迁移类型，值包括：1-结构迁移,2-全量迁移,3-全量+增量迁移 */
    MigrateType?: number;
    /** 迁移对象，1-整个实例，2-指定库表 */
    MigrateObject?: number;
    /** 抽样数据一致性检测参数，1-未配置,2-全量检测,3-抽样检测, 4-仅校验不一致表,5-不检测 */
    ConsistencyType?: number;
    /** 是否用源库Root账户覆盖目标库，值包括：0-不覆盖，1-覆盖，选择库表或者结构迁移时应该为0 */
    IsOverrideRoot?: number;
    /** 不同数据库用到的额外参数.以JSON格式描述. Redis可定义如下的参数: { "ClientOutputBufferHardLimit":512, 从机缓冲区的硬性容量限制(MB) "ClientOutputBufferSoftLimit":512, 从机缓冲区的软性容量限制(MB) "ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) "ReplBacklogSize":512, 环形缓冲区容量限制(MB) "ReplTimeout":120， 复制超时时间(秒) }MongoDB可定义如下的参数: {	'SrcAuthDatabase':'admin', 'SrcAuthFlag': "1", 'SrcAuthMechanism':"SCRAM-SHA-1"}MySQL暂不支持额外参数设置。 */
    ExternParams?: string;
    /** 仅用于“抽样数据一致性检测”，ConsistencyType配置为抽样检测时，必选 */
    ConsistencyParams?: ConsistencyParams;
  }

  /** 迁移中的步骤信息 */
  interface MigrateStepDetailInfo {
    /** 步骤序列 */
    StepNo?: number;
    /** 步骤展现名称 */
    StepName?: string;
    /** 步骤英文标识 */
    StepId?: string;
    /** 步骤状态:0-默认值,1-成功,2-失败,3-执行中,4-未执行 */
    Status?: number;
    /** 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 */
    StartTime?: string;
  }

  /** 源实例信息 */
  interface SrcInfo {
    /** 阿里云AccessKey。源库是阿里云RDS5.6适用 */
    AccessKey?: string;
    /** 实例的IP地址 */
    Ip?: string;
    /** 实例的端口 */
    Port?: number;
    /** 实例的用户名 */
    User?: string;
    /** 实例的密码 */
    Password?: string;
    /** 阿里云RDS实例ID。源库是阿里云RDS5.6/5.6适用 */
    RdsInstanceId?: string;
    /** CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段 */
    CvmInstanceId?: string;
    /** 专线网关ID，格式如：dcg-0rxtqqxb */
    UniqDcgId?: string;
    /** 私有网络ID，格式如：vpc-92jblxto */
    VpcId?: string;
    /** 私有网络下的子网ID，格式如：subnet-3paxmkdz */
    SubnetId?: string;
    /** VPN网关ID，格式如：vpngw-9ghexg7q */
    UniqVpnGwId?: string;
    /** 数据库实例ID，格式如：cdb-powiqx8q */
    InstanceId?: string;
    /** 地域英文名，如：ap-guangzhou */
    Region?: string;
    /** 当实例为RDS实例时，填写为aliyun, 其他情况均填写others */
    Supplier?: string;
    /** 云联网ID，如：ccn-afp6kltc */
    CcnId?: string;
    /** 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6 */
    EngineVersion?: string;
  }

  /** 查询订阅配置的错误信息 */
  interface SubsErr {
    /** 错误信息 */
    Message?: string;
  }

  /** 订阅实例信息 */
  interface SubscribeInfo {
    /** 数据订阅的实例ID */
    SubscribeId?: string;
    /** 数据订阅实例的名称 */
    SubscribeName?: string;
    /** 数据订阅实例绑定的通道ID。kafka版订阅就是kafka topic */
    ChannelId?: string;
    /** 订阅实例的类型，目前支持 cynosdbmysql,mariadb,mongodb,mysql,percona,tdpg,tdsqlpercona(tdsqlmysql) */
    Product?: string;
    /** 数据订阅实例绑定的数据库实例ID */
    InstanceId?: string;
    /** 云数据库状态：running 运行中，isolated 已隔离，offline 已下线。如果不是云上，此值为空 */
    InstanceStatus?: string;
    /** 数据订阅状态，可能的值为：未启动 notStarted, 校验中 checking, 校验不通过 checkNotPass, 校验通过 checkPass, 启动中 starting, 运行中 running, 异常出错 error */
    SubsStatus?: string;
    /** 上次修改时间，时间格式如：Y-m-d h:m:s */
    ModifyTime?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 隔离时间，时间格式如：Y-m-d h:m:s */
    IsolateTime?: string;
    /** 包年包月任务的到期时间，时间格式如：Y-m-d h:m:s。默认：0000-00-00 00:00:00 */
    ExpireTime?: string;
    /** 下线时间 */
    OfflineTime?: string;
    /** 最近一次修改的消费时间起点，如果从未修改则为零值 */
    ConsumeStartTime?: string;
    /** 自动续费标识。只有当 PayType=0，该值才有意义。枚举值：0-不自动续费，1-自动续费 */
    AutoRenewFlag?: number;
    /** 数据订阅实例所属地域 */
    Region?: string;
    /** 计费方式，0 - 包年包月，1 - 按量计费 */
    PayType?: number;
    /** 旧版订阅通道的vip */
    Vip?: string;
    /** 数据订阅实例的Vport */
    Vport?: number;
    /** 数据订阅实例Vip所在VPC的唯一ID */
    UniqVpcId?: string;
    /** 数据订阅实例Vip所在子网的唯一ID */
    UniqSubnetId?: string;
    /** 数据订阅生命周期状态，可能的值为：正常 normal, 隔离中 isolating, 已隔离 isolated, 下线中 offlining, 按量转包年包月中 post2PrePayIng */
    Status?: string;
    /** SDK最后一条确认消息的时间戳，如果SDK一直消费，也可以作为SDK当前消费时间点 */
    SdkConsumedTime?: string;
    /** 标签 */
    Tags?: TagItem[] | null;
    /** 订阅实例版本；txdts-旧版数据订阅,kafka-kafka版本数据订阅 */
    SubscribeVersion?: string;
  }

  /** 数据订阅的对象 */
  interface SubscribeObject {
    /** 数据订阅对象的类型，0-数据库，1-数据库内的表 */
    ObjectsType: number;
    /** 订阅数据库的名称 */
    DatabaseName: string;
    /** 订阅数据库中表名称数组 */
    TableNames?: string[];
  }

  /** 标签过滤 */
  interface TagFilter {
    /** 标签键值 */
    TagKey: string;
    /** 标签值 */
    TagValue?: string[];
  }

  /** 标签 */
  interface TagItem {
    /** 标签键值 */
    TagKey: string;
    /** 标签值 */
    TagValue?: string;
  }

  interface ActivateSubscribeRequest {
    /** 订阅实例ID。 */
    SubscribeId: string;
    /** 数据库实例ID */
    InstanceId: string;
    /** 数据订阅类型0-全实例订阅，1数据订阅，2结构订阅，3数据订阅与结构订阅 */
    SubscribeObjectType: number;
    /** 订阅对象 */
    Objects?: SubscribeObject;
    /** 数据订阅服务所在子网。默认为数据库实例所在的子网内。 */
    UniqSubnetId?: string;
    /** 订阅服务端口；默认为7507 */
    Vport?: number;
  }

  interface ActivateSubscribeResponse {
    /** 配置数据订阅任务ID。 */
    AsyncRequestId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CompleteMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
    /** 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync */
    CompleteMode?: string;
  }

  interface CompleteMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateMigrateCheckJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface CreateMigrateCheckJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateMigrateJobRequest {
    /** 数据迁移任务名称 */
    JobName: string;
    /** 迁移任务配置选项 */
    MigrateOption: MigrateOption;
    /** 源实例数据库类型，目前支持：mysql，redis，mongodb，postgresql，mariadb，percona，sqlserver 不同地域数据库类型的具体支持情况，请参考控制台创建迁移页面。 */
    SrcDatabaseType: string;
    /** 源实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例),cdb(腾讯云数据库实例),ccn(云联网实例) */
    SrcAccessType: string;
    /** 源实例信息，具体内容跟迁移任务类型相关 */
    SrcInfo: SrcInfo;
    /** 目标实例数据库类型，目前支持：mysql，redis，mongodb，postgresql，mariadb，percona，sqlserver，cynosdbmysql。不同地域数据库类型的具体支持情况，请参考控制台创建迁移页面。 */
    DstDatabaseType: string;
    /** 目标实例接入类型，目前支持：cdb（腾讯云数据库实例） */
    DstAccessType: string;
    /** 目标实例信息 */
    DstInfo: DstInfo;
    /** 需要迁移的源数据库表信息，用json格式的字符串描述。当MigrateOption.MigrateObject配置为2（指定库表迁移）时必填。对于database-table两级结构的数据库：[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]对于database-schema-table三级结构：[{"Database":"db1","Schema":"s1","Table":["table1","table2"]},{"Database":"db1","Schema":"s2","Table":["table1","table2"]},{"Database":"db2","Schema":"s1","Table":["table1","table2"]},{"Database":"db3"},{"Database":"db4","Schema":"s1"}] */
    DatabaseInfo?: string;
    /** 迁移实例的tag */
    Tags?: TagItem[];
    /** 源实例类型: ""或者"simple":主从节点，"cluster": 集群节点 */
    SrcNodeType?: string;
    /** 源实例信息，具体内容跟迁移任务类型相关 */
    SrcInfoMulti?: SrcInfo[];
  }

  interface CreateMigrateJobResponse {
    /** 数据迁移任务ID */
    JobId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSubscribeRequest {
    /** 订阅的数据库类型，目前支持的有 mysql */
    Product: string;
    /** 实例付费类型，1小时计费，0包年包月 */
    PayType: number;
    /** 购买时长。PayType为0时必填。单位为月，最大支持120 */
    Duration?: number;
    /** 购买数量,默认为1，最大为10 */
    Count?: number;
    /** 是否自动续费，0表示不自动续费，1表示自动续费，默认为0。小时计费实例设置该标识无效。 */
    AutoRenew?: number;
    /** 实例资源标签 */
    Tags?: TagItem[];
    /** 用户自定义实例名 */
    Name?: string;
  }

  interface CreateSubscribeResponse {
    /** 数据订阅实例的ID数组 */
    SubscribeIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface DeleteMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAsyncRequestInfoRequest {
    /** 任务 ID */
    AsyncRequestId: string;
  }

  interface DescribeAsyncRequestInfoResponse {
    /** 任务执行结果信息 */
    Info?: string;
    /** 任务执行状态，可能的值有：success，failed，running */
    Status?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMigrateCheckJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface DescribeMigrateCheckJobResponse {
    /** 校验任务状态：unavailable(当前不可用), starting(开始中)，running(校验中)，finished(校验完成) */
    Status: string;
    /** 任务的错误码 */
    ErrorCode: number;
    /** 任务的错误信息 */
    ErrorMessage: string;
    /** Check任务总进度,如："30"表示30% */
    Progress: string;
    /** 校验是否通过,0-未通过，1-校验通过, 3-未校验 */
    CheckFlag: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMigrateJobsRequest {
    /** 数据迁移任务ID */
    JobId?: string;
    /** 数据迁移任务名称 */
    JobName?: string;
    /** 排序字段，可以取值为JobId、Status、JobName、MigrateType、RunMode、CreateTime */
    Order?: string;
    /** 排序方式，升序为ASC，降序为DESC */
    OrderSeq?: string;
    /** 偏移量，默认为0 */
    Offset?: number;
    /** 返回实例数量，默认20，有效区间[1,100] */
    Limit?: number;
    /** 标签过滤条件 */
    TagFilters?: TagFilter[];
  }

  interface DescribeMigrateJobsResponse {
    /** 任务数目 */
    TotalCount?: number;
    /** 任务详情数组 */
    JobList?: MigrateJobInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSubscribeConfRequest {
    /** 订阅实例ID */
    SubscribeId: string;
  }

  interface DescribeSubscribeConfResponse {
    /** 订阅实例ID */
    SubscribeId?: string;
    /** 订阅实例名称 */
    SubscribeName?: string;
    /** 订阅通道 */
    ChannelId?: string;
    /** 订阅数据库类型 */
    Product?: string;
    /** 被订阅的实例 */
    InstanceId?: string;
    /** 被订阅的实例的状态，可能的值有running,offline,isolate */
    InstanceStatus?: string;
    /** 订阅实例状态，可能的值有unconfigure-未配置，configuring-配置中，configured-已配置 */
    SubsStatus?: string;
    /** 订阅实例生命周期状态，可能的值有：normal-正常，isolating-隔离中，isolated-已隔离，offlining-下线中 */
    Status?: string;
    /** 订阅实例创建时间 */
    CreateTime?: string;
    /** 订阅实例被隔离时间 */
    IsolateTime?: string;
    /** 订阅实例到期时间 */
    ExpireTime?: string;
    /** 订阅实例下线时间 */
    OfflineTime?: string;
    /** 订阅实例消费时间起点。 */
    ConsumeStartTime?: string;
    /** 订阅实例计费类型，1-小时计费，0-包年包月 */
    PayType?: number;
    /** 订阅通道Vip */
    Vip?: string;
    /** 订阅通道Port */
    Vport?: number;
    /** 订阅通道所在VpcId */
    UniqVpcId?: string;
    /** 订阅通道所在SubnetId */
    UniqSubnetId?: string;
    /** 当前SDK消费时间位点 */
    SdkConsumedTime?: string;
    /** 订阅SDK IP地址 */
    SdkHost?: string;
    /** 订阅对象类型0-全实例订阅，1-DDL数据订阅，2-DML结构订阅，3-DDL数据订阅+DML结构订阅 */
    SubscribeObjectType?: number;
    /** 订阅对象，当SubscribeObjectType 为0时，此字段为空数组 */
    SubscribeObjects?: SubscribeObject[];
    /** 修改时间 */
    ModifyTime?: string;
    /** 地域 */
    Region?: string;
    /** 订阅实例的标签 */
    Tags?: TagItem[];
    /** 自动续费标识,0-不自动续费，1-自动续费 */
    AutoRenewFlag?: number;
    /** 数据订阅版本。老版订阅填txdts，kafka版填kafka */
    SubscribeVersion?: string;
    /** 错误信息 */
    Errors?: SubsErr[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSubscribesRequest {
    /** 数据订阅的实例ID */
    SubscribeId?: string;
    /** 数据订阅的实例名称 */
    SubscribeName?: string;
    /** 绑定数据库实例的ID */
    InstanceId?: string;
    /** 数据订阅实例的通道ID */
    ChannelId?: string;
    /** 计费模式筛选，可能的值：0-包年包月，1-按量计费 */
    PayType?: string;
    /** 订阅的数据库产品，如mysql */
    Product?: string;
    /** 数据订阅实例的状态，creating - 创建中，normal - 正常运行，isolating - 隔离中，isolated - 已隔离，offlining - 下线中 */
    Status?: string[];
    /** 数据订阅实例的配置状态，unconfigure - 未配置， configuring - 配置中，configured - 已配置 */
    SubsStatus?: string[];
    /** 返回记录的起始偏移量，默认为0。请输入非负整数 */
    Offset?: number;
    /** 单次返回的记录数量，默认20。请输入1到100的整数 */
    Limit?: number;
    /** 排序方向，可选的值为"DESC"和"ASC"，默认为"DESC"，按创建时间逆序排序 */
    OrderDirection?: string;
    /** 标签过滤条件 */
    TagFilters?: TagFilter[];
    /** 订阅实例版本;txdts-旧版数据订阅，kafka-kafka版本数据订阅 */
    SubscribeVersion?: string;
  }

  interface DescribeSubscribesResponse {
    /** 符合查询条件的实例总数 */
    TotalCount?: number;
    /** 数据订阅实例的信息列表 */
    Items?: SubscribeInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface IsolateSubscribeRequest {
    /** 订阅实例ID */
    SubscribeId: string;
  }

  interface IsolateSubscribeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyMigrateJobRequest {
    /** 待修改的数据迁移任务ID */
    JobId: string;
    /** 数据迁移任务名称 */
    JobName?: string;
    /** 迁移任务配置选项 */
    MigrateOption?: MigrateOption;
    /** 源实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例),cdb(云上CDB实例) */
    SrcAccessType?: string;
    /** 源实例信息，具体内容跟迁移任务类型相关 */
    SrcInfo?: SrcInfo;
    /** 目标实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例)，cdb(云上CDB实例). 目前只支持cdb. */
    DstAccessType?: string;
    /** 目标实例信息, 其中目标实例地域不允许修改. */
    DstInfo?: DstInfo;
    /** 当选择'指定库表'迁移的时候, 需要设置待迁移的源数据库表信息,用符合json数组格式的字符串描述, 如下所例。对于database-table两级结构的数据库：[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]对于database-schema-table三级结构：[{"Database":"db1","Schema":"s1","Table":["table1","table2"]},{"Database":"db1","Schema":"s2","Table":["table1","table2"]},{"Database":"db2","Schema":"s1","Table":["table1","table2"]},{"Database":"db3"},{"Database":"db4","Schema":"s1"}]如果是'整个实例'的迁移模式,不需设置该字段 */
    DatabaseInfo?: string;
    /** 源实例类型: ""或者"simple":主从节点，"cluster": 集群节点 */
    SrcNodeType?: string;
    /** 源实例信息，具体内容跟迁移任务类型相关 */
    SrcInfoMulti?: SrcInfo[];
  }

  interface ModifyMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySubscribeAutoRenewFlagRequest {
    /** 订阅实例ID，例如：subs-8uey736k */
    SubscribeId: string;
    /** 自动续费标识。1-自动续费，0-不自动续费 */
    AutoRenewFlag: number;
  }

  interface ModifySubscribeAutoRenewFlagResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySubscribeConsumeTimeRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
    /** 消费时间起点，也即是指定订阅数据的时间起点，时间格式如：Y-m-d h:m:s，取值范围为过去24小时之内 */
    ConsumeStartTime: string;
  }

  interface ModifySubscribeConsumeTimeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySubscribeNameRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
    /** 数据订阅实例的名称，长度限制为[1,60] */
    SubscribeName: string;
  }

  interface ModifySubscribeNameResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySubscribeObjectsRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
    /** 数据订阅的类型，可选的值有：0 - 全实例订阅；1 - 数据订阅；2 - 结构订阅；3 - 数据订阅+结构订阅 */
    SubscribeObjectType: number;
    /** 订阅的数据库表信息 */
    Objects?: SubscribeObject[];
  }

  interface ModifySubscribeObjectsResponse {
    /** 异步任务的ID */
    AsyncRequestId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySubscribeVipVportRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
    /** 指定目的子网，如果传此参数，DstIp必须在目的子网内 */
    DstUniqSubnetId?: string;
    /** 目标IP，与DstPort至少传一个 */
    DstIp?: string;
    /** 目标PORT，支持范围为：[1025-65535] */
    DstPort?: number;
  }

  interface ModifySubscribeVipVportResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface OfflineIsolatedSubscribeRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
  }

  interface OfflineIsolatedSubscribeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ResetSubscribeRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
  }

  interface ResetSubscribeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StartMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface StartMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StopMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface StopMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Dts 数据传输服务} */
declare interface Dts {
  (): Versions;
  /** 完成数据迁移任务 {@link CompleteMigrateJobRequest} {@link CompleteMigrateJobResponse} */
  CompleteMigrateJob(data: CompleteMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteMigrateJobResponse>;
  /** 配置订阅任务 {@link ConfigureSubscribeJobRequest} {@link ConfigureSubscribeJobResponse} */
  ConfigureSubscribeJob(data: ConfigureSubscribeJobRequest, config?: AxiosRequestConfig): AxiosPromise<ConfigureSubscribeJobResponse>;
  /** 配置同步任务 {@link ConfigureSyncJobRequest} {@link ConfigureSyncJobResponse} */
  ConfigureSyncJob(data: ConfigureSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<ConfigureSyncJobResponse>;
  /** 恢复暂停中的迁移任务 {@link ContinueMigrateJobRequest} {@link ContinueMigrateJobResponse} */
  ContinueMigrateJob(data: ContinueMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<ContinueMigrateJobResponse>;
  /** 恢复被暂停的同步任务 {@link ContinueSyncJobRequest} {@link ContinueSyncJobResponse} */
  ContinueSyncJob(data: ContinueSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<ContinueSyncJobResponse>;
  /** 校验同步任务 {@link CreateCheckSyncJobRequest} {@link CreateCheckSyncJobResponse} */
  CreateCheckSyncJob(data: CreateCheckSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCheckSyncJobResponse>;
  /** 创建一致性校验任务 {@link CreateCompareTaskRequest} {@link CreateCompareTaskResponse} */
  CreateCompareTask(data: CreateCompareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCompareTaskResponse>;
  /** 创建消费组 {@link CreateConsumerGroupRequest} {@link CreateConsumerGroupResponse} */
  CreateConsumerGroup(data: CreateConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsumerGroupResponse>;
  /** 校验迁移任务 {@link CreateMigrateCheckJobRequest} {@link CreateMigrateCheckJobResponse} */
  CreateMigrateCheckJob(data: CreateMigrateCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMigrateCheckJobResponse>;
  /** 购买迁移任务 {@link CreateMigrationServiceRequest} {@link CreateMigrationServiceResponse} */
  CreateMigrationService(data: CreateMigrationServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMigrationServiceResponse>;
  /** 创建修改同步配置的校验任务 {@link CreateModifyCheckSyncJobRequest} {@link CreateModifyCheckSyncJobResponse} */
  CreateModifyCheckSyncJob(data: CreateModifyCheckSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateModifyCheckSyncJobResponse>;
  /** 创建订阅任务 {@link CreateSubscribeRequest} {@link CreateSubscribeResponse} */
  CreateSubscribe(data: CreateSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubscribeResponse>;
  /** 校验订阅任务 {@link CreateSubscribeCheckJobRequest} {@link CreateSubscribeCheckJobResponse} */
  CreateSubscribeCheckJob(data: CreateSubscribeCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubscribeCheckJobResponse>;
  /** 创建同步任务 {@link CreateSyncJobRequest} {@link CreateSyncJobResponse} */
  CreateSyncJob(data: CreateSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSyncJobResponse>;
  /** 删除一致性校验任务 {@link DeleteCompareTaskRequest} {@link DeleteCompareTaskResponse} */
  DeleteCompareTask(data: DeleteCompareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompareTaskResponse>;
  /** 删除消费组 {@link DeleteConsumerGroupRequest} {@link DeleteConsumerGroupResponse} */
  DeleteConsumerGroup(data: DeleteConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConsumerGroupResponse>;
  /** 查询同步校验任务结果 {@link DescribeCheckSyncJobResultRequest} {@link DescribeCheckSyncJobResultResponse} */
  DescribeCheckSyncJobResult(data?: DescribeCheckSyncJobResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckSyncJobResultResponse>;
  /** 查询一致性校验任务详情 {@link DescribeCompareReportRequest} {@link DescribeCompareReportResponse} */
  DescribeCompareReport(data: DescribeCompareReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompareReportResponse>;
  /** 查询一致性校验任务列表 {@link DescribeCompareTasksRequest} {@link DescribeCompareTasksResponse} */
  DescribeCompareTasks(data: DescribeCompareTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompareTasksResponse>;
  /** 获取数据订阅的消费组详情 {@link DescribeConsumerGroupsRequest} {@link DescribeConsumerGroupsResponse} */
  DescribeConsumerGroups(data: DescribeConsumerGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerGroupsResponse>;
  /** 查询可迁移的实例列表 {@link DescribeMigrateDBInstancesRequest} {@link DescribeMigrateDBInstancesResponse} */
  DescribeMigrateDBInstances(data: DescribeMigrateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrateDBInstancesResponse>;
  /** 查询迁移校验任务结果 {@link DescribeMigrationCheckJobRequest} {@link DescribeMigrationCheckJobResponse} */
  DescribeMigrationCheckJob(data: DescribeMigrationCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationCheckJobResponse>;
  /** 查询某个迁移任务详情 {@link DescribeMigrationDetailRequest} {@link DescribeMigrationDetailResponse} */
  DescribeMigrationDetail(data: DescribeMigrationDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationDetailResponse>;
  /** 查询数据迁移任务列表 {@link DescribeMigrationJobsRequest} {@link DescribeMigrationJobsResponse} */
  DescribeMigrationJobs(data?: DescribeMigrationJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationJobsResponse>;
  /** 查询修改对象的校验任务的结果 {@link DescribeModifyCheckSyncJobResultRequest} {@link DescribeModifyCheckSyncJobResultResponse} */
  DescribeModifyCheckSyncJobResult(data: DescribeModifyCheckSyncJobResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModifyCheckSyncJobResultResponse>;
  /** 查询kafka offset {@link DescribeOffsetByTimeRequest} {@link DescribeOffsetByTimeResponse} */
  DescribeOffsetByTime(data: DescribeOffsetByTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOffsetByTimeResponse>;
  /** 查询订阅校验结果 {@link DescribeSubscribeCheckJobRequest} {@link DescribeSubscribeCheckJobResponse} */
  DescribeSubscribeCheckJob(data: DescribeSubscribeCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscribeCheckJobResponse>;
  /** 查询订阅任务详情 {@link DescribeSubscribeDetailRequest} {@link DescribeSubscribeDetailResponse} */
  DescribeSubscribeDetail(data: DescribeSubscribeDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscribeDetailResponse>;
  /** 获取数据订阅实例列表 {@link DescribeSubscribeJobsRequest} {@link DescribeSubscribeJobsResponse} */
  DescribeSubscribeJobs(data?: DescribeSubscribeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscribeJobsResponse>;
  /** 查询订阅实例是否可以退换 {@link DescribeSubscribeReturnableRequest} {@link DescribeSubscribeReturnableResponse} */
  DescribeSubscribeReturnable(data: DescribeSubscribeReturnableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscribeReturnableResponse>;
  /** 查询同步任务信息 {@link DescribeSyncJobsRequest} {@link DescribeSyncJobsResponse} */
  DescribeSyncJobs(data?: DescribeSyncJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSyncJobsResponse>;
  /** 下线已隔离的数据订阅任务 {@link DestroyIsolatedSubscribeRequest} {@link DestroyIsolatedSubscribeResponse} */
  DestroyIsolatedSubscribe(data: DestroyIsolatedSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyIsolatedSubscribeResponse>;
  /** 下线数据迁移任务 {@link DestroyMigrateJobRequest} {@link DestroyMigrateJobResponse} */
  DestroyMigrateJob(data?: DestroyMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyMigrateJobResponse>;
  /** 下线同步任务 {@link DestroySyncJobRequest} {@link DestroySyncJobResponse} */
  DestroySyncJob(data: DestroySyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<DestroySyncJobResponse>;
  /** 隔离数据迁移任务 {@link IsolateMigrateJobRequest} {@link IsolateMigrateJobResponse} */
  IsolateMigrateJob(data: IsolateMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateMigrateJobResponse>;
  /** 销毁订阅任务 {@link IsolateSubscribeRequest} {@link IsolateSubscribeResponse} */
  IsolateSubscribe(data: IsolateSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateSubscribeResponse>;
  /** 隔离同步任务 {@link IsolateSyncJobRequest} {@link IsolateSyncJobResponse} */
  IsolateSyncJob(data: IsolateSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateSyncJobResponse>;
  /** 修改一致性校验任务 {@link ModifyCompareTaskRequest} {@link ModifyCompareTaskResponse} */
  ModifyCompareTask(data: ModifyCompareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompareTaskResponse>;
  /** 修改一致性校验任务名称 {@link ModifyCompareTaskNameRequest} {@link ModifyCompareTaskNameResponse} */
  ModifyCompareTaskName(data: ModifyCompareTaskNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompareTaskNameResponse>;
  /** 修改消费组备注 {@link ModifyConsumerGroupDescriptionRequest} {@link ModifyConsumerGroupDescriptionResponse} */
  ModifyConsumerGroupDescription(data: ModifyConsumerGroupDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConsumerGroupDescriptionResponse>;
  /** 修改消费组密码 {@link ModifyConsumerGroupPasswordRequest} {@link ModifyConsumerGroupPasswordResponse} */
  ModifyConsumerGroupPassword(data: ModifyConsumerGroupPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConsumerGroupPasswordResponse>;
  /** 调整实例规格 {@link ModifyMigrateJobSpecRequest} {@link ModifyMigrateJobSpecResponse} */
  ModifyMigrateJobSpec(data: ModifyMigrateJobSpecRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrateJobSpecResponse>;
  /** 修改迁移名称 {@link ModifyMigrateNameRequest} {@link ModifyMigrateNameResponse} */
  ModifyMigrateName(data: ModifyMigrateNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrateNameResponse>;
  /** 修改迁移任务的传输速率 {@link ModifyMigrateRateLimitRequest} {@link ModifyMigrateRateLimitResponse} */
  ModifyMigrateRateLimit(data: ModifyMigrateRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrateRateLimitResponse>;
  /** 修改任务运行时属性 {@link ModifyMigrateRuntimeAttributeRequest} {@link ModifyMigrateRuntimeAttributeResponse} */
  ModifyMigrateRuntimeAttribute(data: ModifyMigrateRuntimeAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrateRuntimeAttributeResponse>;
  /** 配置迁移服务 {@link ModifyMigrationJobRequest} {@link ModifyMigrationJobResponse} */
  ModifyMigrationJob(data: ModifyMigrationJobRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrationJobResponse>;
  /** 修改订阅实例自动续费标识 {@link ModifySubscribeAutoRenewFlagRequest} {@link ModifySubscribeAutoRenewFlagResponse} */
  ModifySubscribeAutoRenewFlag(data: ModifySubscribeAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeAutoRenewFlagResponse>;
  /** 修改数据订阅实例的名称 {@link ModifySubscribeNameRequest} {@link ModifySubscribeNameResponse} */
  ModifySubscribeName(data: ModifySubscribeNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeNameResponse>;
  /** 修改订阅对象 {@link ModifySubscribeObjectsRequest} {@link ModifySubscribeObjectsResponse} */
  ModifySubscribeObjects(data: ModifySubscribeObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeObjectsResponse>;
  /** 修改同步任务配置 {@link ModifySyncJobConfigRequest} {@link ModifySyncJobConfigResponse} */
  ModifySyncJobConfig(data: ModifySyncJobConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySyncJobConfigResponse>;
  /** 修改同步任务的传输速率 {@link ModifySyncRateLimitRequest} {@link ModifySyncRateLimitResponse} */
  ModifySyncRateLimit(data: ModifySyncRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySyncRateLimitResponse>;
  /** 暂停迁移任务 {@link PauseMigrateJobRequest} {@link PauseMigrateJobResponse} */
  PauseMigrateJob(data: PauseMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<PauseMigrateJobResponse>;
  /** 暂停同步任务 {@link PauseSyncJobRequest} {@link PauseSyncJobResponse} */
  PauseSyncJob(data: PauseSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<PauseSyncJobResponse>;
  /** 解除隔离数据迁移任务 {@link RecoverMigrateJobRequest} {@link RecoverMigrateJobResponse} */
  RecoverMigrateJob(data: RecoverMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverMigrateJobResponse>;
  /** 解除隔离同步任务 {@link RecoverSyncJobRequest} {@link RecoverSyncJobResponse} */
  RecoverSyncJob(data: RecoverSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverSyncJobResponse>;
  /** 重置kafka offset {@link ResetConsumerGroupOffsetRequest} {@link ResetConsumerGroupOffsetResponse} */
  ResetConsumerGroupOffset(data: ResetConsumerGroupOffsetRequest, config?: AxiosRequestConfig): AxiosPromise<ResetConsumerGroupOffsetResponse>;
  /** 重置订阅任务 {@link ResetSubscribeRequest} {@link ResetSubscribeResponse} */
  ResetSubscribe(data: ResetSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<ResetSubscribeResponse>;
  /** 调整同步任务规格 {@link ResizeSyncJobRequest} {@link ResizeSyncJobResponse} */
  ResizeSyncJob(data: ResizeSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeSyncJobResponse>;
  /** 重试迁移任务 {@link ResumeMigrateJobRequest} {@link ResumeMigrateJobResponse} */
  ResumeMigrateJob(data: ResumeMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeMigrateJobResponse>;
  /** 重试订阅任务 {@link ResumeSubscribeRequest} {@link ResumeSubscribeResponse} */
  ResumeSubscribe(data: ResumeSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeSubscribeResponse>;
  /** 重试同步任务 {@link ResumeSyncJobRequest} {@link ResumeSyncJobResponse} */
  ResumeSyncJob(data: ResumeSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeSyncJobResponse>;
  /** 跳过迁移校验检查项 {@link SkipCheckItemRequest} {@link SkipCheckItemResponse} */
  SkipCheckItem(data: SkipCheckItemRequest, config?: AxiosRequestConfig): AxiosPromise<SkipCheckItemResponse>;
  /** 跳过同步校验检查项 {@link SkipSyncCheckItemRequest} {@link SkipSyncCheckItemResponse} */
  SkipSyncCheckItem(data: SkipSyncCheckItemRequest, config?: AxiosRequestConfig): AxiosPromise<SkipSyncCheckItemResponse>;
  /** 启动一致性校验任务 {@link StartCompareRequest} {@link StartCompareResponse} */
  StartCompare(data: StartCompareRequest, config?: AxiosRequestConfig): AxiosPromise<StartCompareResponse>;
  /** 启动数据迁移任务 {@link StartMigrateJobRequest} {@link StartMigrateJobResponse} */
  StartMigrateJob(data: StartMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartMigrateJobResponse>;
  /** 开始修改配置流程 {@link StartModifySyncJobRequest} {@link StartModifySyncJobResponse} */
  StartModifySyncJob(data: StartModifySyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartModifySyncJobResponse>;
  /** 启动订阅任务 {@link StartSubscribeRequest} {@link StartSubscribeResponse} */
  StartSubscribe(data: StartSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<StartSubscribeResponse>;
  /** 启动同步任务 {@link StartSyncJobRequest} {@link StartSyncJobResponse} */
  StartSyncJob(data?: StartSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartSyncJobResponse>;
  /** 终止一致性校验任务 {@link StopCompareRequest} {@link StopCompareResponse} */
  StopCompare(data: StopCompareRequest, config?: AxiosRequestConfig): AxiosPromise<StopCompareResponse>;
  /** 终止数据迁移任务 {@link StopMigrateJobRequest} {@link StopMigrateJobResponse} */
  StopMigrateJob(data: StopMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<StopMigrateJobResponse>;
  /** 结束同步任务 {@link StopSyncJobRequest} {@link StopSyncJobResponse} */
  StopSyncJob(data: StopSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<StopSyncJobResponse>;
  /** 配置数据订阅通道 {@link V20180330.ActivateSubscribeRequest} {@link V20180330.ActivateSubscribeResponse} */
  ActivateSubscribe(data: V20180330.ActivateSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ActivateSubscribeResponse>;
  /** 完成数据迁移任务 {@link V20180330.CompleteMigrateJobRequest} {@link V20180330.CompleteMigrateJobResponse} */
  CompleteMigrateJob(data: V20180330.CompleteMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CompleteMigrateJobResponse>;
  /** 创建校验迁移任务 {@link V20180330.CreateMigrateCheckJobRequest} {@link V20180330.CreateMigrateCheckJobResponse} */
  CreateMigrateCheckJob(data: V20180330.CreateMigrateCheckJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CreateMigrateCheckJobResponse>;
  /** 创建数据迁移任务 {@link V20180330.CreateMigrateJobRequest} {@link V20180330.CreateMigrateJobResponse} */
  CreateMigrateJob(data: V20180330.CreateMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CreateMigrateJobResponse>;
  /** 创建订阅对象 {@link V20180330.CreateSubscribeRequest} {@link V20180330.CreateSubscribeResponse} */
  CreateSubscribe(data: V20180330.CreateSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CreateSubscribeResponse>;
  /** 删除数据迁移任务 {@link V20180330.DeleteMigrateJobRequest} {@link V20180330.DeleteMigrateJobResponse} */
  DeleteMigrateJob(data: V20180330.DeleteMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DeleteMigrateJobResponse>;
  /** 查询任务执行结果 {@link V20180330.DescribeAsyncRequestInfoRequest} {@link V20180330.DescribeAsyncRequestInfoResponse} */
  DescribeAsyncRequestInfo(data: V20180330.DescribeAsyncRequestInfoRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeAsyncRequestInfoResponse>;
  /** 获取迁移校验结果 {@link V20180330.DescribeMigrateCheckJobRequest} {@link V20180330.DescribeMigrateCheckJobResponse} */
  DescribeMigrateCheckJob(data: V20180330.DescribeMigrateCheckJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeMigrateCheckJobResponse>;
  /** 查询数据迁移任务 {@link V20180330.DescribeMigrateJobsRequest} {@link V20180330.DescribeMigrateJobsResponse} */
  DescribeMigrateJobs(data: V20180330.DescribeMigrateJobsRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeMigrateJobsResponse>;
  /** 查询订阅实例配置 {@link V20180330.DescribeSubscribeConfRequest} {@link V20180330.DescribeSubscribeConfResponse} */
  DescribeSubscribeConf(data: V20180330.DescribeSubscribeConfRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeSubscribeConfResponse>;
  /** 获取数据订阅实例列表 {@link V20180330.DescribeSubscribesRequest} {@link V20180330.DescribeSubscribesResponse} */
  DescribeSubscribes(data: V20180330.DescribeSubscribesRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeSubscribesResponse>;
  /** 隔离订阅实例 {@link V20180330.IsolateSubscribeRequest} {@link V20180330.IsolateSubscribeResponse} */
  IsolateSubscribe(data: V20180330.IsolateSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.IsolateSubscribeResponse>;
  /** 修改数据迁移任务 {@link V20180330.ModifyMigrateJobRequest} {@link V20180330.ModifyMigrateJobResponse} */
  ModifyMigrateJob(data: V20180330.ModifyMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifyMigrateJobResponse>;
  /** 修改订阅实例自动续费标识 {@link V20180330.ModifySubscribeAutoRenewFlagRequest} {@link V20180330.ModifySubscribeAutoRenewFlagResponse} */
  ModifySubscribeAutoRenewFlag(data: V20180330.ModifySubscribeAutoRenewFlagRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeAutoRenewFlagResponse>;
  /** 修改数据订阅实例通道的消费时间点 {@link V20180330.ModifySubscribeConsumeTimeRequest} {@link V20180330.ModifySubscribeConsumeTimeResponse} */
  ModifySubscribeConsumeTime(data: V20180330.ModifySubscribeConsumeTimeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeConsumeTimeResponse>;
  /** 修改数据订阅实例的名称 {@link V20180330.ModifySubscribeNameRequest} {@link V20180330.ModifySubscribeNameResponse} */
  ModifySubscribeName(data: V20180330.ModifySubscribeNameRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeNameResponse>;
  /** 修改数据订阅通道的订阅规则 {@link V20180330.ModifySubscribeObjectsRequest} {@link V20180330.ModifySubscribeObjectsResponse} */
  ModifySubscribeObjects(data: V20180330.ModifySubscribeObjectsRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeObjectsResponse>;
  /** 修改数据订阅实例的IP和端口号 {@link V20180330.ModifySubscribeVipVportRequest} {@link V20180330.ModifySubscribeVipVportResponse} */
  ModifySubscribeVipVport(data: V20180330.ModifySubscribeVipVportRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeVipVportResponse>;
  /** 下线已隔离的数据订阅实例 {@link V20180330.OfflineIsolatedSubscribeRequest} {@link V20180330.OfflineIsolatedSubscribeResponse} */
  OfflineIsolatedSubscribe(data: V20180330.OfflineIsolatedSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.OfflineIsolatedSubscribeResponse>;
  /** 重置数据订阅实例 {@link V20180330.ResetSubscribeRequest} {@link V20180330.ResetSubscribeResponse} */
  ResetSubscribe(data: V20180330.ResetSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ResetSubscribeResponse>;
  /** 启动数据迁移任务 {@link V20180330.StartMigrateJobRequest} {@link V20180330.StartMigrateJobResponse} */
  StartMigrateJob(data: V20180330.StartMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.StartMigrateJobResponse>;
  /** 撤销数据迁移任务 {@link V20180330.StopMigrateJobRequest} {@link V20180330.StopMigrateJobResponse} */
  StopMigrateJob(data: V20180330.StopMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.StopMigrateJobResponse>;
}

export declare type Versions = ["2021-12-06", "2018-03-30"];

export default Dts;
