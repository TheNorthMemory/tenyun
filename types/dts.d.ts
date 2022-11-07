/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 检查步骤 */
declare interface CheckStep {
  /** 步骤编号 */
  StepNo: number | null;
  /** 步骤Id， 如：ConnectDBCheck、VersionCheck、SrcPrivilegeCheck等，具体校验项和源目标实例相关 */
  StepId: string | null;
  /** 步骤名称 */
  StepName: string | null;
  /** 此检查步骤的结果，pass(校验通过)、failed(校验失败)、notStarted(校验还未开始进行)、blocked(检验阻塞)、warning(校验有告警，但仍通过) */
  StepStatus: string | null;
  /** 此检查步骤的错误消息 */
  StepMessage: string | null;
  /** 每个检查步骤里的具体检查项 */
  DetailCheckItems: DetailCheckItem[] | null;
  /** 是否已跳过 */
  HasSkipped: boolean | null;
}

/** 校验任务运行详情 */
declare interface CheckStepInfo {
  /** 任务开始时间 */
  StartAt: string | null;
  /** 任务结束时间 */
  EndAt: string | null;
  /** 任务步骤信息 */
  Progress: ProcessProgress | null;
}

/** 一致性校验摘要信息 */
declare interface CompareAbstractInfo {
  /** 对比结论: same,different */
  Conclusion: string | null;
  /** 任务状态: success,failed */
  Status: string | null;
  /** 总的表数量 */
  TotalTables: number | null;
  /** 已校验的表数量 */
  CheckedTables: number | null;
  /** 不一致的表数量 */
  DifferentTables: number | null;
  /** 跳过校验的表数量 */
  SkippedTables: number | null;
  /** 不一致的数据行数量 */
  DifferentRows: number | null;
}

/** 一致性校验详细信息 */
declare interface CompareDetailInfo {
  /** 数据不一致的表详情 */
  Difference: DifferenceDetail | null;
  /** 跳过校验的表详情 */
  Skipped: SkippedDetail | null;
}

/** 一致性对比对象配置 */
declare interface CompareObject {
  /** 迁移对象模式 all(所有迁移对象)，partial(部分对象迁移) */
  ObjectMode: string | null;
  /** 迁移对象库表配置 */
  ObjectItems?: CompareObjectItem[] | null;
}

/** 一致性校验库表对象 */
declare interface CompareObjectItem {
  /** 迁移的库 */
  DbName: string | null;
  /** 数据库选择模式: all 为当前对象下的所有对象,partial 为部分对象 */
  DbMode: string | null;
  /** 迁移的 schema */
  SchemaName?: string | null;
  /** 表选择模式: all 为当前对象下的所有表对象,partial 为部分表对象 */
  TableMode?: string | null;
  /** 用于一致性校验的表配置，当 TableMode 为 partial 时，需要填写 */
  Tables?: CompareTableItem[] | null;
  /** 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象 */
  ViewMode?: string | null;
  /** 用于一致性校验的视图配置，当 ViewMode 为 partial 时， 需要填写 */
  Views?: CompareViewItem[] | null;
}

/** 用于一致性校验的表配置 */
declare interface CompareTableItem {
  /** 表名称 */
  TableName?: string | null;
}

/** 数据一致性校验结果 */
declare interface CompareTaskInfo {
  /** 一致性校验任务Id */
  CompareTaskId: string | null;
  /** 一致性校验结果，包括：unstart(未启动)、running(校验中)、canceled(已终止)、failed(校验任务失败)、inconsistent(不一致)、consistent(一致)、notexist(不存在校验任务) */
  Status: string | null;
}

/** 一致性校验对象信息 */
declare interface CompareTaskItem {
  /** 迁移任务id */
  JobId: string | null;
  /** 对比任务 Id */
  CompareTaskId: string | null;
  /** 对比任务名称 */
  TaskName: string | null;
  /** 对比任务状态, 可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止 */
  Status: string | null;
  /** 对比任务配置 */
  Config: CompareObject | null;
  /** 对比任务校验详情 */
  CheckProcess: ProcessProgress | null;
  /** 对比任务运行详情 */
  CompareProcess: ProcessProgress | null;
  /** 对比结果, 可能的值：same - 一致；different - 不一致；skipAll - 跳过 */
  Conclusion: string | null;
  /** 任务创建时间 */
  CreatedAt: string | null;
  /** 任务启动时间 */
  StartedAt: string | null;
  /** 对比结束时间 */
  FinishedAt: string | null;
}

/** 用于一致性校验的视图配置 */
declare interface CompareViewItem {
  /** 视图名 */
  ViewName?: string | null;
}

/** 冲突处理里的详细描述 */
declare interface ConflictHandleOption {
  /** 条件覆盖的列 */
  ConditionColumn?: string | null;
  /** 条件覆盖操作 */
  ConditionOperator?: string | null;
  /** 条件覆盖优先级处理 */
  ConditionOrderInSrcAndDst?: string | null;
}

/** 数据一致性校验选项， 默认为不开启一致性校验 */
declare interface ConsistencyOption {
  /** 一致性检测类型: full(全量检测迁移对象)、noCheck(不检测)、notConfigured(未配置) */
  Mode?: string | null;
}

/** 实例信息 */
declare interface DBEndpointInfo {
  /** 实例所在地域 */
  Region: string | null;
  /** 实例网络接入类型，如：extranet(外网)、ipv6(公网ipv6)、cvm(云主机自建)、dcg(专线接入)、vpncloud(vpn接入的实例)、cdb(云数据库)、ccn(云联网)、intranet(自研上云)、vpc(私有网络)等，注意具体可选值依赖当前链路 */
  AccessType: string | null;
  /** 实例数据库类型，如：mysql,redis,mongodb,postgresql,mariadb,percona 等 */
  DatabaseType: string | null;
  /** 节点类型，为空或者"simple":表示普通节点，"cluster": 集群节点 */
  NodeType: string | null;
  /** 数据库信息 */
  Info: DBInfo[] | null;
  /** 实例服务提供商，如:"aliyun","others" */
  Supplier?: string | null;
  /** MongoDB可定义如下的参数: ['AuthDatabase':'admin', 'AuthFlag': "1",	'AuthMechanism':"SCRAM-SHA-1"] */
  ExtraAttr?: KeyValuePairOption[] | null;
}

/** 数据库信息 */
declare interface DBInfo {
  /** 表示节点角色，针对分布式数据库，如mongodb中的mongos节点 */
  Role?: string | null;
  /** 内核版本，针对mariadb的不同内核版本等 */
  DbKernel?: string | null;
  /** 实例的IP地址，对于公网、专线、VPN、云联网、自研上云、VPC等接入方式此项必填 */
  Host?: string | null;
  /** 实例的端口，对于公网、云主机自建、专线、VPN、云联网、自研上云、VPC等接入方式此项必填 */
  Port?: number | null;
  /** 实例的用户名 */
  User?: string | null;
  /** 实例的密码 */
  Password?: string | null;
  /** CVM实例短ID，格式如：ins-olgl39y8；与云服务器控制台页面显示的实例ID相同；如果接入类型为云主机自建的方式，此项必填 */
  CvmInstanceId?: string | null;
  /** VPN网关ID，格式如：vpngw-9ghexg7q；如果接入类型为vpncloud的方式，此项必填 */
  UniqVpnGwId?: string | null;
  /** 专线网关ID，格式如：dcg-0rxtqqxb；如果接入类型为专线接入的方式，此项必填 */
  UniqDcgId?: string | null;
  /** 数据库实例ID，格式如：cdb-powiqx8q；如果接入类型为云数据库的方式，此项必填 */
  InstanceId?: string | null;
  /** 云联网ID，如：ccn-afp6kltc */
  CcnGwId?: string | null;
  /** 私有网络ID，格式如：vpc-92jblxto；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填 */
  VpcId?: string | null;
  /** 私有网络下的子网ID，格式如：subnet-3paxmkdz；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填 */
  SubnetId?: string | null;
  /** 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6 */
  EngineVersion?: string | null;
  /** 实例所属账号 */
  Account?: string | null;
  /** 跨账号迁移时的角色,只允许[a-zA-Z0-9\-\_]+ */
  AccountRole?: string | null;
  /** 资源所属账号 为空或self(表示本账号内资源)、other(表示其他账户资源) */
  AccountMode?: string | null;
  /** 临时秘钥Id */
  TmpSecretId?: string | null;
  /** 临时秘钥Key */
  TmpSecretKey?: string | null;
  /** 临时Token */
  TmpToken?: string | null;
}

/** 迁移对象信息 */
declare interface DBItem {
  /** 需要迁移或同步的库名，当ObjectMode为partial时，此项必填 */
  DbName?: string | null;
  /** 迁移或同步后的库名，默认与源库相同 */
  NewDbName?: string | null;
  /** 迁移或同步的 schema */
  SchemaName?: string | null;
  /** 迁移或同步后的 schema name */
  NewSchemaName?: string | null;
  /** DB选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当ObjectMode为partial时，此项必填 */
  DBMode?: string | null;
  /** schema选择模式: all(为当前对象下的所有对象)，partial(部分对象) */
  SchemaMode?: string | null;
  /** 表选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当DBMode为partial时此项必填 */
  TableMode?: string | null;
  /** 表图对象集合，当 TableMode 为 partial 时，此项需要填写 */
  Tables?: TableItem[] | null;
  /** 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象 */
  ViewMode?: string | null;
  /** 视图对象集合，当 ViewMode 为 partial 时， 此项需要填写 */
  Views?: ViewItem[] | null;
  /** postgresql独有参数，角色选择模式: all 为当前对象下的所有角色对象,partial 为部分角色对象 */
  RoleMode?: string | null;
  /** postgresql独有参数，当 RoleMode 为 partial 时， 此项需要填写 */
  Roles?: RoleItem[] | null;
  /** 选择要同步的模式，partial为部分，all为整选 */
  FunctionMode?: string | null;
  /** 选择要同步的模式，partial为部分，all为整选 */
  TriggerMode?: string | null;
  /** 选择要同步的模式，partial为部分，all为整选 */
  EventMode?: string | null;
  /** 选择要同步的模式，partial为部分，all为整选 */
  ProcedureMode?: string | null;
  /** FunctionMode取值为partial时需要填写 */
  Functions?: string[] | null;
  /** ProcedureMode取值为partial时需要填写 */
  Procedures?: string[] | null;
  /** EventMode取值为partial时需要填写 */
  Events?: string[] | null;
  /** TriggerMode取值为partial时需要填写 */
  Triggers?: string[] | null;
}

/** 需要同步的库表对象 */
declare interface Database {
  /** 需要迁移或同步的库名，当ObjectMode为Partial时，此项必填 */
  DbName?: string | null;
  /** 迁移或同步后的库名，默认与源库相同 */
  NewDbName?: string | null;
  /** DB选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当Mode为Partial时，此项必填。注意，高级对象的同步不依赖此值。 */
  DbMode?: string | null;
  /** 迁移或同步的 schema */
  SchemaName?: string | null;
  /** 迁移或同步后的 schema name */
  NewSchemaName?: string | null;
  /** 表选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当DBMode为Partial时此项必填 */
  TableMode?: string | null;
  /** 表图对象集合，当 TableMode 为 Partial 时，此项需要填写 */
  Tables?: Table[] | null;
  /** 视图选择模式: All 为当前对象下的所有视图对象,Partial 为部分视图对象 */
  ViewMode?: string | null;
  /** 视图对象集合，当 ViewMode 为 Partial 时， 此项需要填写 */
  Views?: View[] | null;
  /** 选择要同步的模式，Partial为部分，all为整选 */
  FunctionMode?: string | null;
  /** FunctionMode取值为Partial时需要填写 */
  Functions?: string[] | null;
  /** 选择要同步的模式，Partial为部分，All为整选 */
  ProcedureMode?: string | null;
  /** ProcedureMode取值为Partial时需要填写 */
  Procedures?: string[] | null;
}

/** 迁移对象选项，需要告知迁移服务迁移哪些库表对象 */
declare interface DatabaseTableObject {
  /** 迁移对象类型 all(全实例)，partial(部分对象) */
  ObjectMode: string | null;
  /** 迁移对象，当 ObjectMode 为 partial 时，不为空 */
  Databases?: DBItem[] | null;
  /** 高级对象类型，如trigger、function、procedure、event */
  AdvancedObjects?: string[] | null;
}

/** 数据同步中的ddl同步处理 */
declare interface DdlOption {
  /** ddl类型，如database,table,view等 */
  DdlObject?: string | null;
  /** ddl具体值，如Create,Drop等 */
  DdlValue?: string[] | null;
}

/** 每个检查步骤里的具体检查项 */
declare interface DetailCheckItem {
  /** 检查项的名称，如：源实例权限检查 */
  CheckItemName: string | null;
  /** 检查项详细内容 */
  Description: string | null;
  /** pass(通过)，failed(失败), warning(校验有警告，但仍通过) */
  CheckResult: string | null;
  /** 检查项失败原因 */
  FailureReason: string | null;
  /** 解决方案 */
  Solution: string | null;
  /** 运行报错日志 */
  ErrorLog: string[] | null;
  /** 详细帮助的文档链接 */
  HelpDoc: string[] | null;
  /** 跳过风险文案 */
  SkipInfo: string | null;
}

/** 数据不一致的表详情 */
declare interface DifferenceDetail {
  /** 数据不一致的表数量 */
  TotalCount: number | null;
  /** 校验不一致的表详情 */
  Items: DifferenceItem[] | null;
}

/** 校验不一致的表详情 */
declare interface DifferenceItem {
  /** 数据库名 */
  Db: string | null;
  /** 表名 */
  Table: string | null;
  /** 分块号 */
  Chunk: number | null;
  /** 源库数值 */
  SrcItem: string | null;
  /** 目标库数值 */
  DstItem: string | null;
  /** 索引名称 */
  IndexName: string | null;
  /** 索引下边界 */
  LowerBoundary: string | null;
  /** 索引上边界 */
  UpperBoundary: string | null;
  /** 对比消耗时间,单位为 ms */
  CostTime: number | null;
  /** 完成时间 */
  FinishedAt: string | null;
}

/** 数据同步中的描述源端和目的端的信息 */
declare interface Endpoint {
  /** 地域英文名，如：ap-guangzhou */
  Region?: string | null;
  /** 数据库内核类型，tdsql中用于区分不同内核：percona,mariadb,mysql */
  DbKernel?: string | null;
  /** 数据库实例ID，格式如：cdb-powiqx8q */
  InstanceId?: string | null;
  /** 实例的IP地址，接入类型为非cdb时此项必填 */
  Ip?: string | null;
  /** 实例端口，接入类型为非cdb时此项必填 */
  Port?: number | null;
  /** 用户名，对于访问需要用户名密码认证的实例必填 */
  User?: string | null;
  /** 密码，对于访问需要用户名密码认证的实例必填 */
  Password?: string | null;
  /** 数据库名，数据库为cdwpg时，需要提供 */
  DbName?: string | null;
  /** 私有网络ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：vpc-92jblxto */
  VpcId?: string | null;
  /** 私有网络下的子网ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：subnet-3paxmkdz */
  SubnetId?: string | null;
  /** CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段 */
  CvmInstanceId?: string | null;
  /** 专线网关ID，对于专线接入类型此项必填，格式如：dcg-0rxtqqxb */
  UniqDcgId?: string | null;
  /** VPN网关ID，对于vpn接入类型此项必填，格式如：vpngw-9ghexg7q */
  UniqVpnGwId?: string | null;
  /** 云联网ID，对于云联网接入类型此项必填，如：ccn-afp6kltc */
  CcnId?: string | null;
  /** 云厂商类型，当实例为RDS实例时，填写为aliyun, 其他情况均填写others，默认为others */
  Supplier?: string | null;
  /** 数据库版本，当实例为RDS实例时才有效，其他实例忽略，格式如：5.6或者5.7，默认为5.6 */
  EngineVersion?: string | null;
  /** 资源所属账号 为空或self(表示本账号内资源)、other(表示跨账号资源) */
  AccountMode?: string | null;
  /** 实例所属账号，如果为跨账号实例此项必填 */
  Account?: string | null;
  /** 跨账号同步时的角色，只允许[a-zA-Z0-9\-\_]+，如果为跨账号实例此项必填 */
  AccountRole?: string | null;
  /** 临时秘钥Id，如果为跨账号实例此项必填 */
  TmpSecretId?: string | null;
  /** 临时秘钥Key，如果为跨账号实例此项必填 */
  TmpSecretKey?: string | null;
  /** 临时Token，如果为跨账号实例此项必填 */
  TmpToken?: string | null;
}

/** 任务错误信息 */
declare interface ErrorInfoItem {
  /** 错误码 */
  Code: string | null;
  /** 解决方案 */
  Solution: string | null;
  /** 错误日志信息 */
  ErrorLog: string | null;
  /** 文档提示 */
  HelpDoc: string | null;
}

/** 迁移任务列表 */
declare interface JobItem {
  /** 数据迁移任务ID */
  JobId: string | null;
  /** 数据迁移任务名称 */
  JobName: string | null;
  /** 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss */
  CreateTime: string | null;
  /** 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss */
  UpdateTime: string | null;
  /** 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss */
  StartTime: string | null;
  /** 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss */
  EndTime: string | null;
  /** 迁移任务错误信息 */
  BriefMsg: string | null;
  /** 任务状态，取值为：creating(创建中)、created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中) */
  Status: string | null;
  /** 任务运行模式，值包括：immediate(立即运行)，timed(定时运行) */
  RunMode: string | null;
  /** 期待启动时间，当RunMode取值为timed时，此值必填，形如：2022-07-11 16:20:49 */
  ExpectRunTime: string | null;
  /** 任务操作信息 */
  Action: MigrateAction | null;
  /** 迁移执行过程信息 */
  StepInfo: MigrateDetailInfo | null;
  /** 源实例信息 */
  SrcInfo: DBEndpointInfo | null;
  /** 目标端信息 */
  DstInfo: DBEndpointInfo | null;
  /** 数据一致性校验结果 */
  CompareTask: CompareTaskInfo | null;
  /** 计费状态信息 */
  TradeInfo: TradeInfo | null;
  /** 标签信息 */
  Tags: TagItem[] | null;
}

/** 存放配置时的额外信息 */
declare interface KeyValuePairOption {
  /** 选项key */
  Key?: string | null;
  /** 选项value */
  Value?: string | null;
}

/** 任务操作信息，包含迁移任务的所有操作列表，及迁移任务在当前状态下允许的操作列表 */
declare interface MigrateAction {
  /** 任务的所有操作列表 */
  AllAction: string[] | null;
  /** 任务在当前状态下允许的操作列表 */
  AllowedAction: string[] | null;
}

/** 查询迁移实例列表的实例对象 */
declare interface MigrateDBItem {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 实例Vip */
  Vip: string;
  /** 实例Vport */
  Vport: number;
  /** 是否可以作为迁移对象，1-可以，0-不可以 */
  Usable: number;
  /** 不可以作为迁移对象的原因 */
  Hint: string;
}

/** 迁移执行过程信息 */
declare interface MigrateDetailInfo {
  /** 总步骤数 */
  StepAll: number | null;
  /** 当前步骤 */
  StepNow: number | null;
  /** 主从差距，MB；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1 */
  MasterSlaveDistance: number | null;
  /** 主从差距，秒；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1 */
  SecondsBehindMaster: number | null;
  /** 步骤信息 */
  StepInfo: StepDetailInfo[] | null;
}

/** 迁移选项，描述任务如何执行迁移等一系列配置信息 */
declare interface MigrateOption {
  /** 迁移对象选项，需要告知迁移服务迁移哪些库表对象 */
  DatabaseTable: DatabaseTableObject | null;
  /** 迁移类型，full(全量迁移)，structure(结构迁移)，fullAndIncrement(全量加增量迁移)， 默认为fullAndIncrement */
  MigrateType?: string | null;
  /** 数据一致性校验选项， 默认为不开启一致性校验 */
  Consistency?: ConsistencyOption | null;
  /** 是否迁移账号，yes(迁移账号)，no(不迁移账号) */
  IsMigrateAccount?: boolean | null;
  /** 是否用源库Root账户覆盖目标库，值包括：false-不覆盖，true-覆盖，选择库表或者结构迁移时应该为false，注意只对旧版迁移有效 */
  IsOverrideRoot?: boolean | null;
  /** 是否在迁移时设置目标库只读(仅对mysql有效)，true(设置只读)、false(不设置只读，默认此值) */
  IsDstReadOnly?: boolean | null;
  /** 其他附加信息，对于特定库可设置额外参数，Redis可定义如下的参数: ["ClientOutputBufferHardLimit":512, 从机缓冲区的硬性容量限制(MB) "ClientOutputBufferSoftLimit":512, 从机缓冲区的软性容量限制(MB) "ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) "ReplBacklogSize":512, 环形缓冲区容量限制(MB) "ReplTimeout":120， 复制超时时间(秒) ] */
  ExtraAttr?: KeyValuePairOption[] | null;
}

/** 同步的数据库对对象描述 */
declare interface Objects {
  /** 迁移对象类型 Partial(部分对象) */
  Mode?: string | null;
  /** 同步对象，当 Mode 为 Partial 时，不为空 */
  Databases?: Database[] | null;
  /** 高级对象类型，如function、procedure，当需要同步高级对象时，初始化类型必须包含结构初始化类型，即Options.InitType字段值为Structure或Full */
  AdvancedObjects?: string[] | null;
}

/** 数据同步中的选项 */
declare interface Options {
  /** 同步初始化选项，Data(全量数据初始化)、Structure(结构初始化)、Full(全量数据且结构初始化，默认)、None(仅增量) */
  InitType?: string | null;
  /** 同名表的处理，ReportErrorAfterCheck(前置校验并报错，默认)、InitializeAfterDelete(删除并重新初始化)、ExecuteAfterIgnore(忽略并继续执行) */
  DealOfExistSameTable?: string | null;
  /** 冲突处理选项，ReportError(报错，默认为该值)、Ignore(忽略)、Cover(覆盖)、ConditionCover(条件覆盖) */
  ConflictHandleType?: string | null;
  /** 是否添加附加列 */
  AddAdditionalColumn?: boolean | null;
  /** 所要同步的DML和DDL的选项，Insert(插入操作)、Update(更新操作)、Delete(删除操作)、DDL(结构同步)， 不填（不选），PartialDDL(自定义,和DdlOptions一起起作用 ) */
  OpTypes?: string[] | null;
  /** 冲突处理的详细选项，如条件覆盖中的条件行和条件操作 */
  ConflictHandleOption?: ConflictHandleOption | null;
  /** DDL同步选项，具体描述要同步那些DDL */
  DdlOptions?: DdlOption[] | null;
}

/** 任务步骤信息 */
declare interface ProcessProgress {
  /** 步骤的状态， 包括：notStarted(未开始)、running(运行中)、success(成功)、failed(失败)等 */
  Status: string | null;
  /** 进度信息 */
  Percent: number | null;
  /** 总的步骤数 */
  StepAll: number | null;
  /** 当前进行的步骤 */
  StepNow: number | null;
  /** 当前步骤输出提示信息 */
  Message: string | null;
  /** 步骤信息 */
  Steps: StepDetailInfo[] | null;
}

/** 错误信息及告警信息对象 */
declare interface ProcessStepTip {
  /** 提示信息 */
  Message: string | null;
  /** 解决方案 */
  Solution: string | null;
  /** 文档提示 */
  HelpDoc: string | null;
}

/** 角色对象，postgresql独有参数 */
declare interface RoleItem {
  /** 角色名称 */
  RoleName?: string | null;
  /** 迁移后的角色名称 */
  NewRoleName?: string | null;
}

/** 跳过校验的表详情 */
declare interface SkippedDetail {
  /** 跳过的表数量 */
  TotalCount: number | null;
  /** 跳过校验的表详情 */
  Items: SkippedItem[] | null;
}

/** 跳过校验的表详情 */
declare interface SkippedItem {
  /** 数据库名 */
  Db: string | null;
  /** 表名 */
  Table: string | null;
  /** 未发起检查的原因 */
  Reason: string | null;
}

/** 步骤信息 */
declare interface StepDetailInfo {
  /** 步骤序列 */
  StepNo: number | null;
  /** 步骤展现名称 */
  StepName: string | null;
  /** 步骤英文标识 */
  StepId: string | null;
  /** 步骤状态:success(成功)、failed(失败)、running(执行中)、notStarted(未执行)、默认为notStarted */
  Status: string | null;
  /** 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 */
  StartTime: string | null;
  /** 步骤错误信息 */
  StepMessage: string | null;
  /** 执行进度 */
  Percent: number | null;
  /** 错误信息 */
  Errors: ProcessStepTip[] | null;
  /** 告警提示 */
  Warnings: ProcessStepTip[] | null;
}

/** 单个步骤的详细信息 */
declare interface StepInfo {
  /** 步骤编号 */
  StepNo?: number | null;
  /** 步骤名 */
  StepName?: string | null;
  /** 步骤标号 */
  StepId?: string | null;
  /** 当前状态，是否完成 */
  Status?: string | null;
  /** 步骤开始时间 */
  StartTime?: string | null;
  /** 错误信息 */
  Errors?: StepTip[] | null;
  /** 警告信息 */
  Warnings?: StepTip[] | null;
  /** 当前步骤进度 */
  Progress?: number | null;
}

/** 当前步骤错误信息或者警告信息 */
declare interface StepTip {
  /** 错误码 */
  Code?: string | null;
  /** 错误信息 */
  Message?: string | null;
  /** 解决方式 */
  Solution?: string | null;
  /** 帮助文档 */
  HelpDoc?: string | null;
}

/** 同步任务的步骤信息 */
declare interface SyncDetailInfo {
  /** 总步骤数 */
  StepAll: number | null;
  /** 当前步骤 */
  StepNow: number | null;
  /** 总体进度 */
  Progress: number | null;
  /** 当前步骤进度 */
  CurrentStepProgress: number | null;
  /** 同步两端数据量差距 */
  MasterSlaveDistance: number | null;
  /** 同步两端时间差距 */
  SecondsBehindMaster: number | null;
  /** 总体描述信息 */
  Message: string | null;
  /** 详细步骤信息 */
  StepInfos: StepInfo[] | null;
}

/** 同步任务信息 */
declare interface SyncJobInfo {
  /** 同步任务id */
  JobId: string | null;
  /** 同步任务名 */
  JobName: string | null;
  /** 付款方式 */
  PayMode: string | null;
  /** 运行模式 */
  RunMode: string | null;
  /** 期待运行时间 */
  ExpectRunTime: string | null;
  /** 支持的所有操作 */
  AllActions: string[] | null;
  /** 当前状态能进行的操作 */
  Actions: string[] | null;
  /** 同步选项 */
  Options: Options | null;
  /** 同步库表对象 */
  Objects: Objects | null;
  /** 任务规格 */
  Specification: string | null;
  /** 过期时间 */
  ExpireTime: string | null;
  /** 源端地域 */
  SrcRegion: string | null;
  /** 源端数据库类型 */
  SrcDatabaseType: string | null;
  /** 源端接入类型 */
  SrcAccessType: string | null;
  /** 源端信息 */
  SrcInfo: Endpoint | null;
  /** 目标端地域 */
  DstRegion: string | null;
  /** 目标端数据库类型 */
  DstDatabaseType: string | null;
  /** 目标端接入类型 */
  DstAccessType: string | null;
  /** 目标端信息 */
  DstInfo: Endpoint | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 开始时间 */
  StartTime: string | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 任务状态 */
  Status: string | null;
  /** 标签相关 */
  Tags: TagItem[] | null;
  /** 同步任务运行步骤信息 */
  Detail: SyncDetailInfo | null;
}

/** 数据同步库表信息描述 */
declare interface Table {
  /** 表名 */
  TableName?: string | null;
  /** 新表名 */
  NewTableName?: string | null;
  /** 过滤条件 */
  FilterCondition?: string | null;
}

/** 表图对象集合，当 TableMode 为 partial 时，此项需要填写 */
declare interface TableItem {
  /** 迁移的表名 */
  TableName?: string | null;
  /** 迁移后的表名，当TableEditMode为rename时此项必填 */
  NewTableName?: string | null;
  /** 迁移临时表，针对pt-osc等工具在迁移过程中产生的临时表同步，需要提前将可能的临时表配置在这里，当TableEditMode为pt时此项必填 */
  TmpTables?: string[] | null;
  /** 编辑表类型，rename(表映射)，pt(同步附加表) */
  TableEditMode?: string | null;
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
  TagKey?: string | null;
  /** 标签值 */
  TagValue?: string | null;
}

/** 计费状态信息 */
declare interface TradeInfo {
  /** 交易订单号 */
  DealName: string | null;
  /** 上一次交易订单号 */
  LastDealName: string | null;
  /** 实例规格，包括：micro、small、medium、large、xlarge、2xlarge等 */
  InstanceClass: string | null;
  /** 计费任务状态， normal(计费或待计费)、resizing(变配中)、reversing(冲正中，比较短暂的状态)、isolating(隔离中，比较短暂的状态)、isolated(已隔离)、offlining(下线中)、offlined(已下线)、notBilled(未计费) */
  TradeStatus: string | null;
  /** 到期时间，格式为"yyyy-mm-dd hh:mm:ss" */
  ExpireTime: string | null;
  /** 下线时间，格式为"yyyy-mm-dd hh:mm:ss" */
  OfflineTime: string | null;
  /** 隔离时间，格式为"yyyy-mm-dd hh:mm:ss" */
  IsolateTime: string | null;
  /** 下线原因 */
  OfflineReason: string | null;
  /** 隔离原因 */
  IsolateReason: string | null;
  /** 付费类型，包括：postpay(后付费)、prepay(预付费) */
  PayType: string | null;
  /** 任务计费类型，包括：billing(计费)、notBilling(不计费)、 promotions(促销活动中) */
  BillingType: string | null;
}

/** 数据同步view的描述 */
declare interface View {
  /** view名 */
  ViewName?: string | null;
  /** 新view名 */
  NewViewName?: string | null;
}

/** 视图对象 */
declare interface ViewItem {
  /** 视图名称 */
  ViewName?: string | null;
  /** 迁移后的视图名称 */
  NewViewName?: string | null;
}

declare interface CompleteMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
  /** 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync */
  CompleteMode?: string;
}

declare interface CompleteMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ConfigureSyncJobRequest {
  /** 同步实例id（即标识一个同步作业），形如sync-werwfs23 */
  JobId: string;
  /** 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)、noProxy,注意具体可选值依赖当前链路 */
  SrcAccessType: string;
  /** 源端信息 */
  SrcInfo: Endpoint;
  /** 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)、noProxy,注意具体可选值依赖当前链路 */
  DstAccessType: string;
  /** 目标端信息 */
  DstInfo: Endpoint;
  /** 同步任务选项 */
  Options: Options;
  /** 同步库表对象信息 */
  Objects: Objects;
  /** 同步任务名称 */
  JobName?: string;
  /** 运行模式，取值如：Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行) */
  RunMode?: string;
  /** 期待启动时间，当RunMode取值为Timed时，此值必填，形如："2006-01-02 15:04:05" */
  ExpectRunTime?: string;
}

declare interface ConfigureSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCheckSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface CreateCheckSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCompareTaskRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 数据对比任务名称，若为空则默认给CompareTaskId相同值 */
  TaskName?: string;
  /** 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)，custom(自定义模式) */
  ObjectMode?: string;
  /** 一致性对比对象配置 */
  Objects?: CompareObject;
}

declare interface CreateCompareTaskResponse {
  /** 数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMigrateCheckJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface CreateMigrateCheckJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMigrationServiceRequest {
  /** 源实例数据库类型，mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb */
  SrcDatabaseType: string;
  /** 目标实例数据库类型，mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb */
  DstDatabaseType: string;
  /** 源实例地域，如：ap-guangzhou */
  SrcRegion: string;
  /** 目标实例地域，如：ap-guangzhou。注意，目标地域必须和API请求地域保持一致。 */
  DstRegion: string;
  /** 实例规格，包括：micro、small、medium、large、xlarge、2xlarge */
  InstanceClass: string;
  /** 购买数量，范围为[1,15]，默认为1 */
  Count?: number;
  /** 迁移服务名称，最大长度128 */
  JobName?: string;
  /** 标签信息 */
  Tags?: TagItem[];
}

declare interface CreateMigrationServiceResponse {
  /** 下单成功随机生成的迁移服务id列表，形如：dts-c1f6rs21 */
  JobIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSyncJobRequest {
  /** 支付类型，PrePay：包年包月 PostPay：按时按量 */
  PayMode: string;
  /** 源端数据库类型,如mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等 */
  SrcDatabaseType: string;
  /** 源端数据库所在地域,如ap-guangzhou */
  SrcRegion: string;
  /** 目标端数据库类型,如mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等 */
  DstDatabaseType: string;
  /** 目标端数据库所在地域,如ap-guangzhou */
  DstRegion: string;
  /** 同步任务规格，Standard:标准版 */
  Specification?: string;
  /** 无 */
  Tags?: TagItem[];
  /** 同步任务数量 */
  Count?: number;
  /** 自动续费标识 */
  AutoRenew?: number;
  /** 同步链路规格 */
  InstanceClass?: string;
  /** 同步链路名称 */
  JobName?: string;
  /** 创建类似任务的现有任务Id */
  ExistedJobId?: string;
}

declare interface CreateSyncJobResponse {
  /** 同步任务ids */
  JobIds: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCompareTaskRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
}

declare interface DeleteCompareTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCheckSyncJobResultRequest {
  /** 同步任务id */
  JobId?: string;
}

declare interface DescribeCheckSyncJobResultResponse {
  /** 校验结果 */
  Status: string | null;
  /** 步骤总数 */
  StepCount: number | null;
  /** 当前所在步骤 */
  StepCur: number | null;
  /** 总体进度 */
  Progress: number | null;
  /** 步骤信息 */
  StepInfos: StepInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Abstract: CompareAbstractInfo | null;
  /** 一致性校验详细信息 */
  Detail: CompareDetailInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCompareTasksRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 分页设置，表示每页显示多少条任务，默认为 20 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeCompareTasksResponse {
  /** 数量 */
  TotalCount: number | null;
  /** 一致性校验列表 */
  Items: CompareTaskItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMigrateDBInstancesRequest {
  /** 数据库类型，如mysql */
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
  /** 临时秘钥Id，若为跨账号资源此项必填 */
  TmpSecretId?: string;
  /** 临时秘钥Key，若为跨账号资源此项必填 */
  TmpSecretKey?: string;
  /** 临时秘钥Token，若为跨账号资源此项必填 */
  TmpToken?: string;
}

declare interface DescribeMigrateDBInstancesResponse {
  /** 符合筛选条件的数量 */
  TotalCount: number | null;
  /** 实例列表 */
  Instances: MigrateDBItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMigrationCheckJobRequest {
  /** 任务id */
  JobId: string;
}

declare interface DescribeMigrationCheckJobResponse {
  /** 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功) */
  Status: string | null;
  /** 校验任务结果输出简要信息 */
  BriefMsg: string | null;
  /** 检查步骤 */
  StepInfo: CheckStep[] | null;
  /** 校验结果，如：checkPass(校验通过)、checkNotPass(校验未通过) */
  CheckFlag: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMigrationDetailRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface DescribeMigrationDetailResponse {
  /** 数据迁移任务ID */
  JobId: string | null;
  /** 数据迁移任务名称 */
  JobName: string | null;
  /** 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss */
  CreateTime: string | null;
  /** 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss */
  UpdateTime: string | null;
  /** 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss */
  StartTime: string | null;
  /** 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss */
  EndTime: string | null;
  /** 迁移任务简要错误信息 */
  BriefMsg: string | null;
  /** 任务状态，取值为：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中) */
  Status: string | null;
  /** 任务操作信息 */
  Action: MigrateAction | null;
  /** 迁移执行过程信息，在校验阶段显示校验过程步骤信息，在迁移阶段会显示迁移步骤信息 */
  StepInfo: MigrateDetailInfo | null;
  /** 源实例信息 */
  SrcInfo: DBEndpointInfo | null;
  /** 目标端信息 */
  DstInfo: DBEndpointInfo | null;
  /** 数据一致性校验结果 */
  CompareTask: CompareTaskInfo | null;
  /** 标签信息 */
  Tags: TagItem[] | null;
  /** 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行) */
  RunMode: string | null;
  /** 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05" */
  ExpectRunTime: string | null;
  /** 迁移选项，描述任务如何执行迁移等一系列配置信息 */
  MigrateOption: MigrateOption | null;
  /** 校验任务运行详情 */
  CheckStepInfo: CheckStepInfo | null;
  /** 描述计费相关的信息 */
  TradeInfo: TradeInfo | null;
  /** 任务错误信息 */
  ErrorInfo: ErrorInfoItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number | null;
  /** 迁移任务列表 */
  JobList: JobItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSyncJobsRequest {
  /** 同步任务id */
  JobId?: string;
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
}

declare interface DescribeSyncJobsResponse {
  /** 任务数目 */
  TotalCount: number | null;
  /** 任务详情数组 */
  JobList: SyncJobInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroyMigrateJobRequest {
  /** 任务id */
  JobId?: string;
}

declare interface DestroyMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroySyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface DestroySyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IsolateMigrateJobRequest {
  /** 任务id */
  JobId: string;
}

declare interface IsolateMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IsolateSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface IsolateSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCompareTaskRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
  /** 任务名称 */
  TaskName?: string;
  /** 数据对比对象模式，sameAsMigrate(全部迁移对象， **默认为此项配置**)，custom(自定义模式) */
  ObjectMode?: string;
  /** 对比对象，若CompareObjectMode取值为custom，则此项必填 */
  Objects?: CompareObject;
}

declare interface ModifyCompareTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMigrateJobSpecRequest {
  /** 任务id */
  JobId: string;
  /** 新实例规格大小，包括：micro、small、medium、large、xlarge、2xlarge */
  NewInstanceClass: string;
}

declare interface ModifyMigrateJobSpecResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMigrateNameRequest {
  /** 迁移任务id */
  JobId: string;
  /** 修改后的迁移任务名 */
  JobName: string;
}

declare interface ModifyMigrateNameResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMigrationJobRequest {
  /** 任务id */
  JobId: string;
  /** 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行) */
  RunMode: string;
  /** 迁移任务配置选项，描述任务如何执行迁移等一系列配置信息 */
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
}

declare interface ModifyMigrationJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RecoverMigrateJobRequest {
  /** 任务id */
  JobId: string;
}

declare interface RecoverMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RecoverSyncJobRequest {
  /** 同步实例id（即标识一个同步作业），形如sync-werwfs23 */
  JobId: string;
}

declare interface RecoverSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResizeSyncJobRequest {
  /** 同步任务id */
  JobId: string;
  /** 任务规格 */
  NewInstanceClass: string;
}

declare interface ResizeSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResumeMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
  /** 恢复任务的模式，目前的取值有：clearData 清空目标实例数据，overwrite 以覆盖写的方式执行任务，normal 跟正常流程一样，不做额外动作 */
  ResumeOption: string;
}

declare interface ResumeMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResumeSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface ResumeSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartCompareRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
}

declare interface StartCompareResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface StartMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartSyncJobRequest {
  /** 同步任务id */
  JobId?: string;
}

declare interface StartSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopCompareRequest {
  /** 迁移任务 Id */
  JobId: string;
  /** 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9 */
  CompareTaskId: string;
}

declare interface StopCompareResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface StopMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopSyncJobRequest {
  /** 同步任务id */
  JobId: string;
}

declare interface StopSyncJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20180330 {
  interface VersionHeader { headers: { 'X-TC-Version': '2018-03-30' } }

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
    ErrorLog: string;
    /** 报错对应的帮助文档Ur */
    HelpDoc: string;
  }

  /** 描述详细迁移过程 */
  interface MigrateDetailInfo {
    /** 总步骤数 */
    StepAll: number;
    /** 当前步骤 */
    StepNow: number;
    /** 总进度,如："10" */
    Progress: string;
    /** 当前步骤进度,如:"1" */
    CurrentStepProgress: string;
    /** 主从差距，MB；在增量同步阶段有效，目前支持产品为：redis和mysql */
    MasterSlaveDistance: number;
    /** 主从差距，秒；在增量同步阶段有效，目前支持产品为：mysql */
    SecondsBehindMaster: number;
    /** 步骤信息 */
    StepInfo: MigrateStepDetailInfo[];
  }

  /** 迁移任务详情 */
  interface MigrateJobInfo {
    /** 数据迁移任务ID */
    JobId: string;
    /** 数据迁移任务名称 */
    JobName: string;
    /** 迁移任务配置选项 */
    MigrateOption: MigrateOption;
    /** 源实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona */
    SrcDatabaseType: string;
    /** 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),cdb(腾讯云数据库实例),ccn(云联网实例) */
    SrcAccessType: string;
    /** 源实例信息，具体内容跟迁移任务类型相关 */
    SrcInfo: SrcInfo;
    /** 目标实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona */
    DstDatabaseType: string;
    /** 目标实例接入类型，目前支持：cdb(腾讯云数据库实例) */
    DstAccessType: string;
    /** 目标实例信息 */
    DstInfo: DstInfo;
    /** 需要迁移的源数据库表信息，如果需要迁移的是整个实例，该字段为[] */
    DatabaseInfo: string;
    /** 任务创建(提交)时间 */
    CreateTime: string;
    /** 任务开始执行时间 */
    StartTime: string;
    /** 任务执行结束时间 */
    EndTime: string;
    /** 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing） */
    Status: number;
    /** 任务详情 */
    Detail: MigrateDetailInfo;
    /** 任务错误信息提示，当任务发生错误时，不为null或者空值 */
    ErrorInfo: ErrorInfo[];
    /** 标签 */
    Tags: TagItem[] | null;
    /** 源实例为集群时且接入为非cdb时源实例信息 */
    SrcInfoMulti: SrcInfo[] | null;
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
    StepNo: number;
    /** 步骤展现名称 */
    StepName: string;
    /** 步骤英文标识 */
    StepId: string;
    /** 步骤状态:0-默认值,1-成功,2-失败,3-执行中,4-未执行 */
    Status: number;
    /** 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 */
    StartTime: string | null;
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
    CcnId?: string | null;
    /** 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6 */
    EngineVersion?: string;
  }

  /** 查询订阅配置的错误信息 */
  interface SubsErr {
    /** 错误信息 */
    Message: string | null;
  }

  /** 订阅实例信息 */
  interface SubscribeInfo {
    /** 数据订阅的实例ID */
    SubscribeId?: string;
    /** 数据订阅实例的名称 */
    SubscribeName?: string;
    /** 数据订阅实例绑定的通道ID */
    ChannelId?: string;
    /** 数据订阅绑定实例对应的产品名称 */
    Product?: string;
    /** 数据订阅实例绑定的数据库实例ID */
    InstanceId?: string;
    /** 数据订阅实例绑定的数据库实例状态 */
    InstanceStatus?: string;
    /** 数据订阅实例的配置状态，unconfigure - 未配置， configuring - 配置中，configured - 已配置 */
    SubsStatus?: string;
    /** 上次修改时间 */
    ModifyTime?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 隔离时间 */
    IsolateTime?: string;
    /** 到期时间 */
    ExpireTime?: string;
    /** 下线时间 */
    OfflineTime?: string;
    /** 最近一次修改的消费时间起点，如果从未修改则为零值 */
    ConsumeStartTime?: string;
    /** 数据订阅实例所属地域 */
    Region?: string;
    /** 计费方式，0 - 包年包月，1 - 按量计费 */
    PayType?: number;
    /** 数据订阅实例的Vip */
    Vip?: string;
    /** 数据订阅实例的Vport */
    Vport?: number;
    /** 数据订阅实例Vip所在VPC的唯一ID */
    UniqVpcId?: string;
    /** 数据订阅实例Vip所在子网的唯一ID */
    UniqSubnetId?: string;
    /** 数据订阅实例的状态，creating - 创建中，normal - 正常运行，isolating - 隔离中，isolated - 已隔离，offlining - 下线中，offline - 已下线 */
    Status?: string;
    /** SDK最后一条确认消息的时间戳，如果SDK一直消费，也可以作为SDK当前消费时间点 */
    SdkConsumedTime?: string;
    /** 标签 */
    Tags?: TagItem[] | null;
    /** 自动续费标识。0-不自动续费，1-自动续费 */
    AutoRenewFlag?: number | null;
    /** 订阅实例版本；txdts-旧版数据订阅,kafka-kafka版本数据订阅 */
    SubscribeVersion?: string | null;
  }

  /** 数据数据订阅的对象 */
  interface SubscribeObject {
    /** 数据订阅对象的类型，0-数据库，1-数据库内的表 */
    ObjectsType: number | null;
    /** 订阅数据库的名称 */
    DatabaseName: string | null;
    /** 订阅数据库中表名称数组 */
    TableNames?: string[] | null;
  }

  /** 数据订阅地域售卖信息 */
  interface SubscribeRegionConf {
    /** 地域名称，如广州 */
    RegionName: string | null;
    /** 地区标识，如ap-guangzhou */
    Region: string | null;
    /** 地域名称，如华南地区 */
    Area: string | null;
    /** 是否为默认地域，0 - 不是，1 - 是的 */
    IsDefaultRegion: number | null;
    /** 当前地域的售卖情况，1 - 正常， 2-灰度，3 - 停售 */
    Status: number | null;
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
    TagValue?: string | null;
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
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CompleteMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
    /** 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync */
    CompleteMode?: string;
  }

  interface CompleteMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateMigrateCheckJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface CreateMigrateCheckJobResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    JobId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    SubscribeIds: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface DeleteMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    TotalCount: number;
    /** 任务详情数组 */
    JobList: MigrateJobInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeRegionConfRequest {
  }

  interface DescribeRegionConfResponse {
    /** 可售卖地域的数量 */
    TotalCount?: number;
    /** 可售卖地域详情 */
    Items?: SubscribeRegionConf[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeSubscribeConfRequest {
    /** 订阅实例ID */
    SubscribeId: string;
  }

  interface DescribeSubscribeConfResponse {
    /** 订阅实例ID */
    SubscribeId: string;
    /** 订阅实例名称 */
    SubscribeName: string;
    /** 订阅通道 */
    ChannelId: string;
    /** 订阅数据库类型 */
    Product: string;
    /** 被订阅的实例 */
    InstanceId: string;
    /** 被订阅的实例的状态，可能的值有running,offline,isolate */
    InstanceStatus: string;
    /** 订阅实例状态，可能的值有unconfigure-未配置，configuring-配置中，configured-已配置 */
    SubsStatus: string;
    /** 订阅实例生命周期状态，可能的值有：normal-正常，isolating-隔离中，isolated-已隔离，offlining-下线中 */
    Status: string;
    /** 订阅实例创建时间 */
    CreateTime: string;
    /** 订阅实例被隔离时间 */
    IsolateTime: string;
    /** 订阅实例到期时间 */
    ExpireTime: string;
    /** 订阅实例下线时间 */
    OfflineTime: string;
    /** 订阅实例消费时间起点。 */
    ConsumeStartTime: string;
    /** 订阅实例计费类型，1-小时计费，0-包年包月 */
    PayType: number;
    /** 订阅通道Vip */
    Vip: string;
    /** 订阅通道Port */
    Vport: number;
    /** 订阅通道所在VpcId */
    UniqVpcId: string;
    /** 订阅通道所在SubnetId */
    UniqSubnetId: string;
    /** 当前SDK消费时间位点 */
    SdkConsumedTime: string;
    /** 订阅SDK IP地址 */
    SdkHost: string;
    /** 订阅对象类型0-全实例订阅，1-DDL数据订阅，2-DML结构订阅，3-DDL数据订阅+DML结构订阅 */
    SubscribeObjectType: number;
    /** 订阅对象，当SubscribeObjectType 为0时，此字段为空数组 */
    SubscribeObjects: SubscribeObject[];
    /** 修改时间 */
    ModifyTime: string;
    /** 地域 */
    Region: string;
    /** 订阅实例的标签 */
    Tags: TagItem[] | null;
    /** 自动续费标识,0-不自动续费，1-自动续费 */
    AutoRenewFlag: number | null;
    /** 数据订阅版本。老版订阅填txdts，kafka版填kafka */
    SubscribeVersion: string;
    /** 错误信息 */
    Errors: SubsErr[] | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    TotalCount: number;
    /** 数据订阅实例的信息列表 */
    Items: SubscribeInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface IsolateSubscribeRequest {
    /** 订阅实例ID */
    SubscribeId: string;
  }

  interface IsolateSubscribeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifySubscribeAutoRenewFlagRequest {
    /** 订阅实例ID，例如：subs-8uey736k */
    SubscribeId: string;
    /** 自动续费标识。1-自动续费，0-不自动续费 */
    AutoRenewFlag: number;
  }

  interface ModifySubscribeAutoRenewFlagResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifySubscribeConsumeTimeRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
    /** 消费时间起点，也即是指定订阅数据的时间起点，时间格式如：Y-m-d h:m:s，取值范围为过去24小时之内 */
    ConsumeStartTime: string;
  }

  interface ModifySubscribeConsumeTimeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifySubscribeNameRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
    /** 数据订阅实例的名称，长度限制为[1,60] */
    SubscribeName: string;
  }

  interface ModifySubscribeNameResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface OfflineIsolatedSubscribeRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
  }

  interface OfflineIsolatedSubscribeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ResetSubscribeRequest {
    /** 数据订阅实例的ID */
    SubscribeId: string;
  }

  interface ResetSubscribeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface StartMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface StartMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface StopMigrateJobRequest {
    /** 数据迁移任务ID */
    JobId: string;
  }

  interface StopMigrateJobResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** {@link Dts 数据传输服务} */
declare interface Dts {
  (): Versions;
  /** {@link CompleteMigrateJob 完成数据迁移任务}({@link CompleteMigrateJobRequest 请求参数}): {@link CompleteMigrateJobResponse 返回参数} */
  CompleteMigrateJob(data: CompleteMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteMigrateJobResponse>;
  /** {@link ConfigureSyncJob 配置同步任务}({@link ConfigureSyncJobRequest 请求参数}): {@link ConfigureSyncJobResponse 返回参数} */
  ConfigureSyncJob(data: ConfigureSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<ConfigureSyncJobResponse>;
  /** {@link CreateCheckSyncJob 校验同步任务}({@link CreateCheckSyncJobRequest 请求参数}): {@link CreateCheckSyncJobResponse 返回参数} */
  CreateCheckSyncJob(data: CreateCheckSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCheckSyncJobResponse>;
  /** {@link CreateCompareTask 创建一致性校验任务}({@link CreateCompareTaskRequest 请求参数}): {@link CreateCompareTaskResponse 返回参数} */
  CreateCompareTask(data: CreateCompareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCompareTaskResponse>;
  /** {@link CreateMigrateCheckJob 校验迁移任务}({@link CreateMigrateCheckJobRequest 请求参数}): {@link CreateMigrateCheckJobResponse 返回参数} */
  CreateMigrateCheckJob(data: CreateMigrateCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMigrateCheckJobResponse>;
  /** {@link CreateMigrationService 购买迁移服务}({@link CreateMigrationServiceRequest 请求参数}): {@link CreateMigrationServiceResponse 返回参数} */
  CreateMigrationService(data: CreateMigrationServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMigrationServiceResponse>;
  /** {@link CreateSyncJob 创建同步任务}({@link CreateSyncJobRequest 请求参数}): {@link CreateSyncJobResponse 返回参数} */
  CreateSyncJob(data: CreateSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSyncJobResponse>;
  /** {@link DeleteCompareTask 删除一致性校验任务}({@link DeleteCompareTaskRequest 请求参数}): {@link DeleteCompareTaskResponse 返回参数} */
  DeleteCompareTask(data: DeleteCompareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompareTaskResponse>;
  /** {@link DescribeCheckSyncJobResult 查询校验同步任务结果}({@link DescribeCheckSyncJobResultRequest 请求参数}): {@link DescribeCheckSyncJobResultResponse 返回参数} */
  DescribeCheckSyncJobResult(data?: DescribeCheckSyncJobResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckSyncJobResultResponse>;
  /** {@link DescribeCompareReport 查询一致性校验任务详情}({@link DescribeCompareReportRequest 请求参数}): {@link DescribeCompareReportResponse 返回参数} */
  DescribeCompareReport(data: DescribeCompareReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompareReportResponse>;
  /** {@link DescribeCompareTasks 查询一致性校验任务列表}({@link DescribeCompareTasksRequest 请求参数}): {@link DescribeCompareTasksResponse 返回参数} */
  DescribeCompareTasks(data: DescribeCompareTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompareTasksResponse>;
  /** {@link DescribeMigrateDBInstances 查询可迁移的实例列表}({@link DescribeMigrateDBInstancesRequest 请求参数}): {@link DescribeMigrateDBInstancesResponse 返回参数} */
  DescribeMigrateDBInstances(data: DescribeMigrateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrateDBInstancesResponse>;
  /** {@link DescribeMigrationCheckJob 查询迁移校验任务结果}({@link DescribeMigrationCheckJobRequest 请求参数}): {@link DescribeMigrationCheckJobResponse 返回参数} */
  DescribeMigrationCheckJob(data: DescribeMigrationCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationCheckJobResponse>;
  /** {@link DescribeMigrationDetail 查询某个数据迁移任务详情}({@link DescribeMigrationDetailRequest 请求参数}): {@link DescribeMigrationDetailResponse 返回参数} */
  DescribeMigrationDetail(data: DescribeMigrationDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationDetailResponse>;
  /** {@link DescribeMigrationJobs 查询数据迁移任务列表}({@link DescribeMigrationJobsRequest 请求参数}): {@link DescribeMigrationJobsResponse 返回参数} */
  DescribeMigrationJobs(data?: DescribeMigrationJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationJobsResponse>;
  /** {@link DescribeSyncJobs 查询同步任务信息}({@link DescribeSyncJobsRequest 请求参数}): {@link DescribeSyncJobsResponse 返回参数} */
  DescribeSyncJobs(data?: DescribeSyncJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSyncJobsResponse>;
  /** {@link DestroyMigrateJob 下线数据迁移任务}({@link DestroyMigrateJobRequest 请求参数}): {@link DestroyMigrateJobResponse 返回参数} */
  DestroyMigrateJob(data?: DestroyMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyMigrateJobResponse>;
  /** {@link DestroySyncJob 下线同步任务}({@link DestroySyncJobRequest 请求参数}): {@link DestroySyncJobResponse 返回参数} */
  DestroySyncJob(data: DestroySyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<DestroySyncJobResponse>;
  /** {@link IsolateMigrateJob 隔离数据迁移任务}({@link IsolateMigrateJobRequest 请求参数}): {@link IsolateMigrateJobResponse 返回参数} */
  IsolateMigrateJob(data: IsolateMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateMigrateJobResponse>;
  /** {@link IsolateSyncJob 销毁同步任务}({@link IsolateSyncJobRequest 请求参数}): {@link IsolateSyncJobResponse 返回参数} */
  IsolateSyncJob(data: IsolateSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateSyncJobResponse>;
  /** {@link ModifyCompareTask 修改一致性校验任务}({@link ModifyCompareTaskRequest 请求参数}): {@link ModifyCompareTaskResponse 返回参数} */
  ModifyCompareTask(data: ModifyCompareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompareTaskResponse>;
  /** {@link ModifyCompareTaskName 修改一致性校验任务名称}({@link ModifyCompareTaskNameRequest 请求参数}): {@link ModifyCompareTaskNameResponse 返回参数} */
  ModifyCompareTaskName(data: ModifyCompareTaskNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompareTaskNameResponse>;
  /** {@link ModifyMigrateJobSpec 调整实例规格}({@link ModifyMigrateJobSpecRequest 请求参数}): {@link ModifyMigrateJobSpecResponse 返回参数} */
  ModifyMigrateJobSpec(data: ModifyMigrateJobSpecRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrateJobSpecResponse>;
  /** {@link ModifyMigrateName 修改迁移名称}({@link ModifyMigrateNameRequest 请求参数}): {@link ModifyMigrateNameResponse 返回参数} */
  ModifyMigrateName(data: ModifyMigrateNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrateNameResponse>;
  /** {@link ModifyMigrationJob 配置迁移服务}({@link ModifyMigrationJobRequest 请求参数}): {@link ModifyMigrationJobResponse 返回参数} */
  ModifyMigrationJob(data: ModifyMigrationJobRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrationJobResponse>;
  /** {@link RecoverMigrateJob 解除隔离数据迁移任务}({@link RecoverMigrateJobRequest 请求参数}): {@link RecoverMigrateJobResponse 返回参数} */
  RecoverMigrateJob(data: RecoverMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverMigrateJobResponse>;
  /** {@link RecoverSyncJob 解除隔离同步任务}({@link RecoverSyncJobRequest 请求参数}): {@link RecoverSyncJobResponse 返回参数} */
  RecoverSyncJob(data: RecoverSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverSyncJobResponse>;
  /** {@link ResizeSyncJob 调整同步任务规格}({@link ResizeSyncJobRequest 请求参数}): {@link ResizeSyncJobResponse 返回参数} */
  ResizeSyncJob(data: ResizeSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeSyncJobResponse>;
  /** {@link ResumeMigrateJob 重试迁移任务}({@link ResumeMigrateJobRequest 请求参数}): {@link ResumeMigrateJobResponse 返回参数} */
  ResumeMigrateJob(data: ResumeMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeMigrateJobResponse>;
  /** {@link ResumeSyncJob 重试同步任务}({@link ResumeSyncJobRequest 请求参数}): {@link ResumeSyncJobResponse 返回参数} */
  ResumeSyncJob(data: ResumeSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeSyncJobResponse>;
  /** {@link StartCompare 启动一致性校验任务}({@link StartCompareRequest 请求参数}): {@link StartCompareResponse 返回参数} */
  StartCompare(data: StartCompareRequest, config?: AxiosRequestConfig): AxiosPromise<StartCompareResponse>;
  /** {@link StartMigrateJob 启动数据迁移任务}({@link StartMigrateJobRequest 请求参数}): {@link StartMigrateJobResponse 返回参数} */
  StartMigrateJob(data: StartMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartMigrateJobResponse>;
  /** {@link StartSyncJob 启动同步任务}({@link StartSyncJobRequest 请求参数}): {@link StartSyncJobResponse 返回参数} */
  StartSyncJob(data?: StartSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartSyncJobResponse>;
  /** {@link StopCompare 终止一致性校验任务}({@link StopCompareRequest 请求参数}): {@link StopCompareResponse 返回参数} */
  StopCompare(data: StopCompareRequest, config?: AxiosRequestConfig): AxiosPromise<StopCompareResponse>;
  /** {@link StopMigrateJob 停止数据迁移任务}({@link StopMigrateJobRequest 请求参数}): {@link StopMigrateJobResponse 返回参数} */
  StopMigrateJob(data: StopMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<StopMigrateJobResponse>;
  /** {@link StopSyncJob 终止同步任务}({@link StopSyncJobRequest 请求参数}): {@link StopSyncJobResponse 返回参数} */
  StopSyncJob(data: StopSyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<StopSyncJobResponse>;
  /** {@link V20180330.ActivateSubscribe 配置数据订阅通道}({@link V20180330.ActivateSubscribeRequest 请求参数}): {@link V20180330.ActivateSubscribeResponse 返回参数} */
  ActivateSubscribe(data: V20180330.ActivateSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ActivateSubscribeResponse>;
  /** {@link V20180330.CompleteMigrateJob 完成数据迁移任务}({@link V20180330.CompleteMigrateJobRequest 请求参数}): {@link V20180330.CompleteMigrateJobResponse 返回参数} */
  CompleteMigrateJob(data: V20180330.CompleteMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CompleteMigrateJobResponse>;
  /** {@link V20180330.CreateMigrateCheckJob 创建校验迁移任务}({@link V20180330.CreateMigrateCheckJobRequest 请求参数}): {@link V20180330.CreateMigrateCheckJobResponse 返回参数} */
  CreateMigrateCheckJob(data: V20180330.CreateMigrateCheckJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CreateMigrateCheckJobResponse>;
  /** {@link V20180330.CreateMigrateJob 创建数据迁移任务}({@link V20180330.CreateMigrateJobRequest 请求参数}): {@link V20180330.CreateMigrateJobResponse 返回参数} */
  CreateMigrateJob(data: V20180330.CreateMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CreateMigrateJobResponse>;
  /** {@link V20180330.CreateSubscribe 创建订阅对象}({@link V20180330.CreateSubscribeRequest 请求参数}): {@link V20180330.CreateSubscribeResponse 返回参数} */
  CreateSubscribe(data: V20180330.CreateSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.CreateSubscribeResponse>;
  /** {@link V20180330.DeleteMigrateJob 删除数据迁移任务}({@link V20180330.DeleteMigrateJobRequest 请求参数}): {@link V20180330.DeleteMigrateJobResponse 返回参数} */
  DeleteMigrateJob(data: V20180330.DeleteMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DeleteMigrateJobResponse>;
  /** {@link V20180330.DescribeAsyncRequestInfo 查询任务执行结果}({@link V20180330.DescribeAsyncRequestInfoRequest 请求参数}): {@link V20180330.DescribeAsyncRequestInfoResponse 返回参数} */
  DescribeAsyncRequestInfo(data: V20180330.DescribeAsyncRequestInfoRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeAsyncRequestInfoResponse>;
  /** {@link V20180330.DescribeMigrateCheckJob 获取迁移校验结果}({@link V20180330.DescribeMigrateCheckJobRequest 请求参数}): {@link V20180330.DescribeMigrateCheckJobResponse 返回参数} */
  DescribeMigrateCheckJob(data: V20180330.DescribeMigrateCheckJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeMigrateCheckJobResponse>;
  /** {@link V20180330.DescribeMigrateJobs 查询数据迁移任务}({@link V20180330.DescribeMigrateJobsRequest 请求参数}): {@link V20180330.DescribeMigrateJobsResponse 返回参数} */
  DescribeMigrateJobs(data: V20180330.DescribeMigrateJobsRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeMigrateJobsResponse>;
  /** {@link V20180330.DescribeRegionConf 查询可售卖订阅地域}({@link V20180330.DescribeRegionConfRequest 请求参数}): {@link V20180330.DescribeRegionConfResponse 返回参数} */
  DescribeRegionConf(data: V20180330.DescribeRegionConfRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeRegionConfResponse>;
  /** {@link V20180330.DescribeSubscribeConf 查询订阅实例配置}({@link V20180330.DescribeSubscribeConfRequest 请求参数}): {@link V20180330.DescribeSubscribeConfResponse 返回参数} */
  DescribeSubscribeConf(data: V20180330.DescribeSubscribeConfRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeSubscribeConfResponse>;
  /** {@link V20180330.DescribeSubscribes 获取数据订阅实例列表}({@link V20180330.DescribeSubscribesRequest 请求参数}): {@link V20180330.DescribeSubscribesResponse 返回参数} */
  DescribeSubscribes(data: V20180330.DescribeSubscribesRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.DescribeSubscribesResponse>;
  /** {@link V20180330.IsolateSubscribe 隔离订阅实例}({@link V20180330.IsolateSubscribeRequest 请求参数}): {@link V20180330.IsolateSubscribeResponse 返回参数} */
  IsolateSubscribe(data: V20180330.IsolateSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.IsolateSubscribeResponse>;
  /** {@link V20180330.ModifyMigrateJob 修改数据迁移任务}({@link V20180330.ModifyMigrateJobRequest 请求参数}): {@link V20180330.ModifyMigrateJobResponse 返回参数} */
  ModifyMigrateJob(data: V20180330.ModifyMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifyMigrateJobResponse>;
  /** {@link V20180330.ModifySubscribeAutoRenewFlag 修改订阅实例自动续费标识}({@link V20180330.ModifySubscribeAutoRenewFlagRequest 请求参数}): {@link V20180330.ModifySubscribeAutoRenewFlagResponse 返回参数} */
  ModifySubscribeAutoRenewFlag(data: V20180330.ModifySubscribeAutoRenewFlagRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeAutoRenewFlagResponse>;
  /** {@link V20180330.ModifySubscribeConsumeTime 修改数据订阅实例通道的消费时间点}({@link V20180330.ModifySubscribeConsumeTimeRequest 请求参数}): {@link V20180330.ModifySubscribeConsumeTimeResponse 返回参数} */
  ModifySubscribeConsumeTime(data: V20180330.ModifySubscribeConsumeTimeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeConsumeTimeResponse>;
  /** {@link V20180330.ModifySubscribeName 修改数据订阅实例的名称}({@link V20180330.ModifySubscribeNameRequest 请求参数}): {@link V20180330.ModifySubscribeNameResponse 返回参数} */
  ModifySubscribeName(data: V20180330.ModifySubscribeNameRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeNameResponse>;
  /** {@link V20180330.ModifySubscribeObjects 修改数据订阅通道的订阅规则}({@link V20180330.ModifySubscribeObjectsRequest 请求参数}): {@link V20180330.ModifySubscribeObjectsResponse 返回参数} */
  ModifySubscribeObjects(data: V20180330.ModifySubscribeObjectsRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeObjectsResponse>;
  /** {@link V20180330.ModifySubscribeVipVport 修改数据订阅实例的IP和端口号}({@link V20180330.ModifySubscribeVipVportRequest 请求参数}): {@link V20180330.ModifySubscribeVipVportResponse 返回参数} */
  ModifySubscribeVipVport(data: V20180330.ModifySubscribeVipVportRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ModifySubscribeVipVportResponse>;
  /** {@link V20180330.OfflineIsolatedSubscribe 下线已隔离的数据订阅实例}({@link V20180330.OfflineIsolatedSubscribeRequest 请求参数}): {@link V20180330.OfflineIsolatedSubscribeResponse 返回参数} */
  OfflineIsolatedSubscribe(data: V20180330.OfflineIsolatedSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.OfflineIsolatedSubscribeResponse>;
  /** {@link V20180330.ResetSubscribe 重置数据订阅实例}({@link V20180330.ResetSubscribeRequest 请求参数}): {@link V20180330.ResetSubscribeResponse 返回参数} */
  ResetSubscribe(data: V20180330.ResetSubscribeRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.ResetSubscribeResponse>;
  /** {@link V20180330.StartMigrateJob 启动数据迁移任务}({@link V20180330.StartMigrateJobRequest 请求参数}): {@link V20180330.StartMigrateJobResponse 返回参数} */
  StartMigrateJob(data: V20180330.StartMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.StartMigrateJobResponse>;
  /** {@link V20180330.StopMigrateJob 撤销数据迁移任务}({@link V20180330.StopMigrateJobRequest 请求参数}): {@link V20180330.StopMigrateJobResponse 返回参数} */
  StopMigrateJob(data: V20180330.StopMigrateJobRequest, config: AxiosRequestConfig & V20180330.VersionHeader): AxiosPromise<V20180330.StopMigrateJobResponse>;
}

export declare type Versions = ["2021-12-06", "2018-03-30"];

export default Dts;