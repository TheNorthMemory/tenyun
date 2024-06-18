/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 审批申请单 */
declare interface Application {
  /** 审批单号 */
  ApplicationId: string;
  /** 申请类型 */
  ApplicationType: number;
  /** 集群Id */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 表格组名称 */
  TableGroupName: string | null;
  /** 表格名称 */
  TableName: string;
  /** 申请人 */
  Applicant: string;
  /** 建单时间 */
  CreatedTime: string;
  /** 处理状态 -1 撤回 0-待审核 1-已经审核并提交任务 2-已驳回 */
  ApplicationStatus: number;
  /** 表格组Id */
  TableGroupId: string;
  /** 已提交的任务Id，未提交申请为0 */
  TaskId: string;
  /** 腾讯云上table的唯一键 */
  TableInstanceId: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 审批人 */
  ExecuteUser: string | null;
  /** 执行状态 */
  ExecuteStatus: string | null;
  /** 该申请单是否可以被当前用户审批 */
  CanCensor: boolean | null;
  /** 该申请单是否可以被当前用户撤回 */
  CanWithdrawal: boolean | null;
}

/** 更新申请单结果 */
declare interface ApplyResult {
  /** 申请单id */
  ApplicationId: string;
  /** 申请类型 */
  ApplicationType: number;
  /** 处理状态 0-待审核 1-已经审核并提交任务 2-已驳回 */
  ApplicationStatus: number | null;
  /** 已提交的任务Id */
  TaskId: string | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
}

/** 申请单id及其状态 */
declare interface ApplyStatus {
  /** 集群id-申请单id */
  ApplicationId: string;
  /** 处理状态-1-撤回 1-通过 2-驳回，非0状态的申请单不可改变状态。 */
  ApplicationStatus: number;
  /** 申请单类型 */
  ApplicationType: number;
  /** 集群Id */
  ClusterId: string;
}

/** 备份保留策略详情集群策略： ClueterId=集群Id， TableGroupId=-1, TableName="-1"集群+表格组策略： ClueterId=集群Id， TableGroupId=表格组Id, TableName="-1"集群+表格组+表格策略： ClueterId=集群Id， TableGroupId=表格组Id, TableName="表格名"FileTag=0 txh引擎文件， =1 ulog流水文件， 当要设置为=1时， 这两项不可变 TableGroupId=-1和TableName="-1"ExpireDay为大于等于1，小于999的整形数字OperType=0 代表动作为新增， =1 代表动作为删除， =2 代表动作为修改， 其中0和2可以混用，后端实现兼容 */
declare interface BackupExpireRuleInfo {
  /** 所属表格组ID */
  TableGroupId: string;
  /** 表名称 */
  TableName: string;
  /** 文件标签，见上面描述 */
  FileTag: number;
  /** 淘汰天数，见上面描述 */
  ExpireDay: number;
  /** 操作类型，见上面描述 */
  OperType: number;
}

/** 备份记录作为出参时，每个字段都会填充作为入参时， 原封不动将每个字段填回结构体， 注意只有FIleTag=OSDATA才可以调用此接口 */
declare interface BackupRecords {
  /** 表格组ID */
  ZoneId: number;
  /** 表名称 */
  TableName: string;
  /** 备份源 */
  BackupType: string;
  /** 文件标签：TCAPLUS_FULL或OSDATA */
  FileTag: string;
  /** 分片数量 */
  ShardCount: number;
  /** 备份批次日期 */
  BackupBatchTime: string;
  /** 备份文件汇总大小 */
  BackupFileSize: number;
  /** 备份成功率 */
  BackupSuccRate: string;
  /** 备份文件过期时间 */
  BackupExpireTime: string;
  /** 业务ID */
  AppId: number;
}

/** 集群详细信息 */
declare interface ClusterInfo {
  /** 集群名称 */
  ClusterName: string;
  /** 集群ID */
  ClusterId: string;
  /** 集群所在地域 */
  Region: string;
  /** 集群数据描述语言类型，如：`PROTO`,`TDR` */
  IdlType: string;
  /** 网络类型 */
  NetworkType: string;
  /** 集群关联的用户私有网络实例ID */
  VpcId: string;
  /** 集群关联的用户子网实例ID */
  SubnetId: string;
  /** 创建时间 */
  CreatedTime: string;
  /** 集群密码 */
  Password: string;
  /** 密码状态 */
  PasswordStatus: string;
  /** TcaplusDB SDK连接参数，接入ID */
  ApiAccessId: string;
  /** TcaplusDB SDK连接参数，接入地址 */
  ApiAccessIp: string;
  /** TcaplusDB SDK连接参数，接入端口 */
  ApiAccessPort: number;
  /** 如果PasswordStatus是unmodifiable说明有旧密码还未过期，此字段将显示旧密码过期的时间，否则为空 */
  OldPasswordExpireTime: string | null;
  /** TcaplusDB SDK连接参数，接入ipv6地址 */
  ApiAccessIpv6: string | null;
  /** 集群类型，0,1:共享集群; 2:独立集群 */
  ClusterType: number | null;
  /** 集群状态, 0：表示正常运行中，1：表示冻结隔离一般欠费进入此状态，2：表示待回收，一般用户主动触发删除进入这个状态，3：待释放，进入这个状态，表示可以释放此表占用的资源了，4：变更中 */
  ClusterStatus: number | null;
  /** 读CU */
  ReadCapacityUnit: number | null;
  /** 写CU */
  WriteCapacityUnit: number | null;
  /** 磁盘容量 */
  DiskVolume: number | null;
  /** 独占server机器信息 */
  ServerList: ServerDetailInfo[] | null;
  /** 独占proxy机器信息 */
  ProxyList: ProxyDetailInfo[] | null;
  /** 是否开启审核 0-不开启 1-开启 */
  Censorship: number;
  /** 审批人uin列表 */
  DbaUins: string[] | null;
  /** 是否开启了数据订阅 */
  DataFlowStatus: number | null;
  /** 数据订阅的kafka信息 */
  KafkaInfo: KafkaInfo | null;
  /** 集群Txh备份文件多少天后过期删除 */
  TxhBackupExpireDay: number | null;
  /** 集群Ulog备份文件多少天后过期删除 */
  UlogBackupExpireDay: number | null;
  /** 集群Ulog备份文件过期策略是否为只读， 0： UlogBackupExpire是只读，不可修改， 1： UlogBackupExpire可以修改（当前业务存在Svrid第二段等于clusterid的机器） */
  IsReadOnlyUlogBackupExpireDay: number | null;
  /** restproxy状态 */
  RestProxyStatus: number | null;
}

/** 比较表格的Meta信息 */
declare interface CompareTablesInfo {
  /** 源表格的集群id */
  SrcTableClusterId: string | null;
  /** 源表格的表格组id */
  SrcTableGroupId: string | null;
  /** 源表格的表名 */
  SrcTableName: string | null;
  /** 目标表格的集群id */
  DstTableClusterId: string | null;
  /** 目标表格的表格组id */
  DstTableGroupId: string | null;
  /** 目标表格的表名 */
  DstTableName: string | null;
  /** 源表格的实例id */
  SrcTableInstanceId: string | null;
  /** 目标表格的实例id */
  DstTableInstanceId: string | null;
}

/** 描述每个实例（应用，大区或表）处理过程中可能出现的错误详情。 */
declare interface ErrorInfo {
  /** 错误码 */
  Code: string;
  /** 错误信息 */
  Message: string;
}

/** 表格字段信息列表 */
declare interface FieldInfo {
  /** 表格字段名称 */
  FieldName: string;
  /** 字段是否是主键字段 */
  IsPrimaryKey: string;
  /** 字段类型 */
  FieldType?: string;
  /** 字段长度 */
  FieldSize?: number;
}

/** 过滤条件 */
declare interface Filter {
  /** 过滤字段名 */
  Name: string;
  /** 过滤字段值 */
  Value?: string;
  /** 过滤字段值 */
  Values?: string[];
}

/** 表定义描述文件详情，包含文件内容 */
declare interface IdlFileInfo {
  /** 文件名称，不包含扩展名 */
  FileName: string;
  /** 数据描述语言（IDL）类型 */
  FileType: string;
  /** 文件扩展名 */
  FileExtType: string;
  /** 文件大小（Bytes） */
  FileSize: number;
  /** 文件ID，对于已上传的文件有意义 */
  FileId?: number | null;
  /** 文件内容，对于本次新上传的文件有意义 */
  FileContent?: string | null;
}

/** 表定义描述文件详情，不包含文件内容 */
declare interface IdlFileInfoWithoutContent {
  /** 文件名称，不包含扩展名 */
  FileName: string | null;
  /** 数据描述语言（IDL）类型 */
  FileType: string | null;
  /** 文件扩展名 */
  FileExtType: string | null;
  /** 文件大小（Bytes） */
  FileSize: number | null;
  /** 文件ID */
  FileId: number | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
}

/** ckafka地址信息 */
declare interface KafkaInfo {
  /** Kafka address */
  Address: string | null;
  /** Kafka topic */
  Topic: string | null;
  /** kafka username */
  User: string | null;
  /** kafka password */
  Password: string | null;
  /** ckafka实例 */
  Instance: string | null;
  /** 是否走VPC */
  IsVpc: number | null;
}

/** 部分key导入快照数据时所需要的key文件 */
declare interface KeyFile {
  /** key文件名称 */
  FileName: string;
  /** key文件扩展名 */
  FileExtType: string;
  /** key文件内容 */
  FileContent: string;
  /** key文件大小 */
  FileSize?: number;
}

/** 机器类型和数量 */
declare interface MachineInfo {
  /** 机器类型 */
  MachineType: string;
  /** 机器数量 */
  MachineNum: number;
}

/** 合服结果 */
declare interface MergeTableResult {
  /** 任务Id */
  TaskId: string | null;
  /** 成功时此字段返回 null，表示取不到有效值。 */
  Error: ErrorInfo | null;
  /** 对比的表格信息 */
  Table: CompareTablesInfo;
  /** 申请单Id */
  ApplicationId: string | null;
}

/** 合服请求入参 */
declare interface MergeTablesInfo {
  /** 合服的表格信息 */
  MergeTables: CompareTablesInfo;
  /** 是否检查索引 */
  CheckIndex: boolean;
}

/** 从IDL表描述文件中解析出来的表信息 */
declare interface ParsedTableInfoNew {
  /** 表格描述语言类型：`PROTO`或`TDR` */
  TableIdlType: string | null;
  /** 表格实例ID */
  TableInstanceId: string | null;
  /** 表格名称 */
  TableName: string | null;
  /** 表格数据结构类型：`GENERIC`或`LIST` */
  TableType: string | null;
  /** 主键字段信息 */
  KeyFields: string | null;
  /** 原主键字段信息，改表校验时有效 */
  OldKeyFields: string | null;
  /** 非主键字段信息 */
  ValueFields: string | null;
  /** 原非主键字段信息，改表校验时有效 */
  OldValueFields: string | null;
  /** 所属表格组ID */
  TableGroupId: string | null;
  /** 主键字段总大小 */
  SumKeyFieldSize: number | null;
  /** 非主键字段总大小 */
  SumValueFieldSize: number | null;
  /** 索引键集合 */
  IndexKeySet: string | null;
  /** 分表因子集合 */
  ShardingKeySet: string | null;
  /** TDR版本号 */
  TdrVersion: number | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
  /** LIST类型表格元素个数 */
  ListElementNum: number | null;
  /** SORTLIST类型表格排序字段个数 */
  SortFieldNum: number | null;
  /** SORTLIST类型表格排序顺序 */
  SortRule: number | null;
}

/** center资源池中的机器信息 */
declare interface PoolInfo {
  /** 唯一id */
  PoolUid: number;
  /** 是否支持ipv6 */
  Ipv6Enable: number;
  /** 剩余可用app */
  AvailableAppCount: number;
  /** svr机器列表 */
  ServerList: ServerMachineInfo[];
  /** proxy机器列表 */
  ProxyList: ProxyMachineInfo[];
}

/** 独占的proxy详细信息 */
declare interface ProxyDetailInfo {
  /** proxy的唯一id */
  ProxyUid: string;
  /** 机器类型 */
  MachineType: string;
  /** 请求包速度 */
  ProcessSpeed: number;
  /** 请求包时延 */
  AverageProcessDelay: number;
  /** 慢处理包速度 */
  SlowProcessSpeed: number;
  /** 版本 */
  Version: string | null;
}

/** proxy机器信息 */
declare interface ProxyMachineInfo {
  /** 唯一id */
  ProxyUid: string;
  /** 机器类型 */
  MachineType: string;
  /** 可分配proxy资源数 */
  AvailableCount: number;
}

/** TcaplusDB服务地域信息详情 */
declare interface RegionInfo {
  /** 地域Ap-Code */
  RegionName: string;
  /** 地域缩写 */
  RegionAbbr: string;
  /** 地域ID */
  RegionId: number;
  /** 是否支持ipv6，0:不支持，1:支持 */
  Ipv6Enable: number;
}

/** 被选中的表信息 */
declare interface SelectedTableInfoNew {
  /** 表所属表格组ID */
  TableGroupId: string;
  /** 表格名称 */
  TableName: string;
  /** 表实例ID */
  TableInstanceId?: string;
  /** 表格描述语言类型：`PROTO`或`TDR` */
  TableIdlType?: string;
  /** 表格数据结构类型：`GENERIC`或`LIST` */
  TableType?: string;
  /** LIST表元素个数 */
  ListElementNum?: number;
  /** 表格预留容量（GB） */
  ReservedVolume?: number;
  /** 表格预留读CU */
  ReservedReadQps?: number;
  /** 表格预留写CU */
  ReservedWriteQps?: number;
  /** 表格备注信息 */
  Memo?: string;
  /** Key回档文件名，回档专用 */
  FileName?: string;
  /** Key回档文件扩展名，回档专用 */
  FileExtType?: string;
  /** Key回档文件大小，回档专用 */
  FileSize?: number;
  /** Key回档文件内容，回档专用 */
  FileContent?: string;
}

/** 附带被选中字段信息的表格列表 */
declare interface SelectedTableWithField {
  /** 表所属表格组ID */
  TableGroupId: string;
  /** 表格名称 */
  TableName: string;
  /** 表实例ID */
  TableInstanceId?: string;
  /** 表格描述语言类型：`PROTO`或`TDR` */
  TableIdlType?: string;
  /** 表格数据结构类型：`GENERIC`或`LIST` */
  TableType?: string;
  /** 待创建索引、缓写、数据订阅的字段列表 */
  SelectedFields?: FieldInfo[];
  /** 索引分片数 */
  ShardNum?: number;
  /** ckafka实例信息 */
  KafkaInfo?: KafkaInfo;
}

/** server独占机器的详细信息 */
declare interface ServerDetailInfo {
  /** svr唯一id */
  ServerUid: string;
  /** 机器类型 */
  MachineType: string;
  /** 内存占用量 */
  MemoryRate: number;
  /** 磁盘占用量 */
  DiskRate: number;
  /** 读次数 */
  ReadNum: number;
  /** 写次数 */
  WriteNum: number;
  /** 版本 */
  Version: string | null;
}

/** svr的机器列表ServerList */
declare interface ServerMachineInfo {
  /** 机器唯一id */
  ServerUid: string;
  /** 机器类型 */
  MachineType: string;
}

/** 快照列表 */
declare interface SnapshotInfo {
  /** 所属表格组ID */
  TableGroupId: string;
  /** 表名称 */
  TableName: string;
  /** 快照名称 */
  SnapshotName: string;
  /** 快照时间点 */
  SnapshotTime: string;
  /** 快照过期时间点 */
  SnapshotDeadTime: string;
}

/** 新的快照过期时间 */
declare interface SnapshotInfoNew {
  /** 所属表格组ID */
  TableGroupId: string;
  /** 表名称 */
  TableName: string;
  /** 快照名称 */
  SnapshotName: string;
  /** 快照过期时间点 */
  SnapshotDeadTime?: string;
}

/** 创建快照结果 */
declare interface SnapshotResult {
  /** 表格所属表格组ID */
  TableGroupId: string | null;
  /** 表格名称 */
  TableName: string | null;
  /** 任务ID，对于创建单任务的接口有效 */
  TaskId: string | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
  /** 快照名称 */
  SnapshotName: string | null;
  /** 快照的时间点 */
  SnapshotTime: string | null;
  /** 快照的过期时间点 */
  SnapshotDeadTime: string | null;
  /** 快照创建时间点 */
  SnapshotCreateTime: string | null;
  /** 快照大小 */
  SnapshotSize: number | null;
  /** 快照状态，0 生成中 1 正常 2 删除中 3 已失效 4 回档使用中 */
  SnapshotStatus: number | null;
  /** 申请单ID */
  ApplicationId?: string | null;
}

/** 缓写表字段名称的映射 */
declare interface SyncTableField {
  /** TcaplusDB表字段名称 */
  SourceName: string;
  /** 目标缓写表的字段名称 */
  TargetName: string;
}

/** TcaplusDB的缓写表信息 */
declare interface SyncTableInfo {
  /** 目标缓写表的分表数目 */
  TargetTableSplitNum: number;
  /** 目标缓写表名前缀 */
  TargetTableNamePrefix: string[];
  /** 缓写数据库实例ID */
  TargetSyncDBInstanceId: string;
  /** 缓写表所在数据库名称 */
  TargetDatabaseName: string;
  /** 缓写状态，0：创建中，1：进行中，2：关闭，-1：被删除 */
  Status: number;
  /** 表格所在集群ID */
  ClusterId: string;
  /** 表格所在表格组ID */
  TableGroupId: number;
  /** 表格名称 */
  TableName: string;
  /** 表格ID */
  TableId: string;
  /** TcaplusDB表主键字段到目标缓写表字段的映射 */
  KeyFieldMapping: SyncTableField[];
  /** TcaplusDB表字段到目标缓写表字段的映射 */
  ValueFieldMapping: SyncTableField[];
}

/** 表格组详细信息 */
declare interface TableGroupInfo {
  /** 表格组ID */
  TableGroupId: string;
  /** 表格组名称 */
  TableGroupName: string;
  /** 表格组创建时间 */
  CreatedTime: string;
  /** 表格组包含的表格数量 */
  TableCount: number;
  /** 表格组包含的表格存储总量（MB） */
  TotalSize: number;
  /** 表格Txh备份文件多少天后过期删除 */
  TxhBackupExpireDay: number | null;
  /** 是否开启mysql负载均衡,0未开启 1开启中 2已开启 */
  EnableMysql: number;
  /** mysql负载均衡vip */
  MysqlConnIp: string | null;
  /** mysql负载均衡vport */
  MysqlConnPort: number | null;
}

/** 表格详情信息 */
declare interface TableInfoNew {
  /** 表格名称 */
  TableName: string | null;
  /** 表格实例ID */
  TableInstanceId: string | null;
  /** 表格数据结构类型，如：`GENERIC`或`LIST` */
  TableType: string | null;
  /** 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR` */
  TableIdlType: string | null;
  /** 表格所属集群ID */
  ClusterId: string | null;
  /** 表格所属集群名称 */
  ClusterName: string | null;
  /** 表格所属表格组ID */
  TableGroupId: string | null;
  /** 表格所属表格组名称 */
  TableGroupName: string | null;
  /** 表格主键字段结构json字符串 */
  KeyStruct: string | null;
  /** 表格非主键字段结构json字符串 */
  ValueStruct: string | null;
  /** 表格分表因子集合，对PROTO类型表格有效 */
  ShardingKeySet: string | null;
  /** 表格索引键字段集合，对PROTO类型表格有效 */
  IndexStruct: string | null;
  /** LIST类型表格元素个数 */
  ListElementNum: number | null;
  /** 表格所关联IDL文件信息列表 */
  IdlFiles: IdlFileInfo[] | null;
  /** 表格预留容量（GB） */
  ReservedVolume: number | null;
  /** 表格预留读CU */
  ReservedReadQps: number | null;
  /** 表格预留写CU */
  ReservedWriteQps: number | null;
  /** 表格实际数据量大小（MB） */
  TableSize: number | null;
  /** 表格状态 */
  Status: string | null;
  /** 表格创建时间 */
  CreatedTime: string | null;
  /** 表格最后一次修改时间 */
  UpdatedTime: string | null;
  /** 表格备注信息 */
  Memo: string | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
  /** TcaplusDB SDK数据访问接入ID */
  ApiAccessId: string | null;
  /** SORTLIST类型表格排序字段个数 */
  SortFieldNum: number | null;
  /** SORTLIST类型表格排序顺序 */
  SortRule: number | null;
  /** 表格分布式索引/缓写、kafka数据订阅信息 */
  DbClusterInfoStruct: string | null;
  /** 表格Txh备份文件多少天后过期删除 */
  TxhBackupExpireDay: number | null;
  /** 表格的缓写信息 */
  SyncTableInfo: SyncTableInfo | null;
}

/** 表处理结果信息 */
declare interface TableResultNew {
  /** 表格实例ID，形如：tcaplus-3be64cbb */
  TableInstanceId: string | null;
  /** 任务ID，对于创建单任务的接口有效 */
  TaskId: string | null;
  /** 表格名称 */
  TableName: string | null;
  /** 表格数据结构类型，如：`GENERIC`或`LIST` */
  TableType: string | null;
  /** 表数据描述语言（IDL）类型，如：`PROTO`或`TDR` */
  TableIdlType: string | null;
  /** 表格所属表格组ID */
  TableGroupId: string | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
  /** 任务ID列表，对于创建多任务的接口有效 */
  TaskIds: string[] | null;
  /** 腾讯云申请审核单Id */
  ApplicationId: string | null;
}

/** 表格回档结果信息 */
declare interface TableRollbackResultNew {
  /** 表格实例ID，形如：tcaplus-3be64cbb */
  TableInstanceId: string | null;
  /** 任务ID，对于创建单任务的接口有效 */
  TaskId: string | null;
  /** 表格名称 */
  TableName: string | null;
  /** 表格数据结构类型，如：`GENERIC`或`LIST` */
  TableType: string | null;
  /** 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR` */
  TableIdlType: string | null;
  /** 表格所属表格组ID */
  TableGroupId: string | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
  /** 任务ID列表，对于创建多任务的接口有效 */
  TaskIds: string[] | null;
  /** 上传的key文件ID */
  FileId: string | null;
  /** 校验成功Key数量 */
  SuccKeyNum: number | null;
  /** Key文件中包含总的Key数量 */
  TotalKeyNum: number | null;
}

/** 标签信息单元 */
declare interface TagInfoUnit {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue?: string | null;
}

/** 集群的标签信息 */
declare interface TagsInfoOfCluster {
  /** 集群ID */
  ClusterId: string | null;
  /** 标签信息 */
  Tags: TagInfoUnit[] | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
}

/** 表格标签信息 */
declare interface TagsInfoOfTable {
  /** 表格实例ID */
  TableInstanceId: string | null;
  /** 表格名称 */
  TableName: string | null;
  /** 表格组ID */
  TableGroupId: string | null;
  /** 标签信息 */
  Tags: TagInfoUnit[] | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
}

/** 表格组标签信息 */
declare interface TagsInfoOfTableGroup {
  /** 集群ID */
  ClusterId: string | null;
  /** 表格组ID */
  TableGroupId: string | null;
  /** 标签信息 */
  Tags: TagInfoUnit[] | null;
  /** 错误信息 */
  Error: ErrorInfo | null;
}

/** 任务信息详情 */
declare interface TaskInfoNew {
  /** 任务ID */
  TaskId: string;
  /** 任务类型 */
  TaskType: string;
  /** 任务所关联的TcaplusDB内部事务ID */
  TransId: string;
  /** 任务所属集群ID */
  ClusterId: string;
  /** 任务所属集群名称 */
  ClusterName: string;
  /** 任务进度 */
  Progress: number;
  /** 任务创建时间 */
  StartTime: string;
  /** 任务最后更新时间 */
  UpdateTime: string;
  /** 操作者 */
  Operator: string;
  /** 任务详情 */
  Content: string;
  /** 表格组ID */
  TableGroupId?: string | null;
  /** 表格组名称 */
  TableGroupName?: string | null;
  /** 表名称 */
  TableName?: string | null;
}

declare interface ClearTablesRequest {
  /** 表所属集群实例ID */
  ClusterId: string;
  /** 待清理表信息列表 */
  SelectedTables: SelectedTableInfoNew[];
}

declare interface ClearTablesResponse {
  /** 清除表结果数量 */
  TotalCount?: number;
  /** 清除表结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CompareIdlFilesRequest {
  /** 待修改表格所在集群ID */
  ClusterId: string;
  /** 待修改表格列表 */
  SelectedTables: SelectedTableInfoNew[];
  /** 选中的已上传IDL文件列表，与NewIdlFiles必选其一 */
  ExistingIdlFiles?: IdlFileInfo[];
  /** 本次上传IDL文件列表，与ExistingIdlFiles必选其一 */
  NewIdlFiles?: IdlFileInfo[];
}

declare interface CompareIdlFilesResponse {
  /** 本次上传校验所有的IDL文件信息列表 */
  IdlFiles?: IdlFileInfo[];
  /** 本次校验合法的表格数量 */
  TotalCount?: number;
  /** 读取IDL描述文件后,根据用户指示的所选中表格解析校验结果 */
  TableInfos?: ParsedTableInfoNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupRequest {
  /** 待创建备份表所属集群ID */
  ClusterId: string;
  /** 待创建备份表信息列表 */
  SelectedTables: SelectedTableInfoNew[];
  /** 备注信息 */
  Remark?: string;
}

declare interface CreateBackupResponse {
  /** 创建的备份任务ID列表 */
  TaskIds: string[] | null;
  /** 创建的备份申请ID列表 */
  ApplicationIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** 集群数据描述语言类型，如：`PROTO`，`TDR`或`MIX` */
  IdlType: string;
  /** 集群名称，可使用中文或英文字符，最大长度32个字符 */
  ClusterName: string;
  /** 集群所绑定的私有网络实例ID，形如：vpc-f49l6u0z */
  VpcId: string;
  /** 集群所绑定的子网实例ID，形如：subnet-pxir56ns */
  SubnetId: string;
  /** 集群访问密码，必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母 */
  Password: string;
  /** 集群标签列表 */
  ResourceTags?: TagInfoUnit[];
  /** 集群是否开启IPv6功能 */
  Ipv6Enable?: number;
  /** 独占集群占用的svr机器 */
  ServerList?: MachineInfo[];
  /** 独占集群占用的proxy机器 */
  ProxyList?: MachineInfo[];
  /** 集群类型1共享2独占 */
  ClusterType?: number;
  /** 密码认证类型，0 静态认证， 1 签名认证 */
  AuthType?: number;
}

declare interface CreateClusterResponse {
  /** 集群ID */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSnapshotsRequest {
  /** 表格所属集群id */
  ClusterId: string;
  /** 快照列表 */
  SelectedTables: SnapshotInfo[];
}

declare interface CreateSnapshotsResponse {
  /** 批量创建的快照数量 */
  TotalCount: number;
  /** 批量创建的快照结果列表 */
  TableResults: SnapshotResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTableGroupRequest {
  /** 表格组所属集群ID */
  ClusterId: string;
  /** 表格组名称，可以采用中文、英文或数字字符，最大长度32个字符 */
  TableGroupName: string;
  /** 表格组ID，可以由用户指定，但在同一个集群内不能重复，如果不指定则采用自增的模式 */
  TableGroupId?: string;
  /** 表格组标签列表 */
  ResourceTags?: TagInfoUnit[];
}

declare interface CreateTableGroupResponse {
  /** 创建成功的表格组ID */
  TableGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTablesRequest {
  /** 待创建表格所属集群ID */
  ClusterId: string;
  /** 用户选定的建表格IDL文件列表 */
  IdlFiles: IdlFileInfo[];
  /** 待创建表格信息列表 */
  SelectedTables: SelectedTableInfoNew[];
  /** 表格标签列表 */
  ResourceTags?: TagInfoUnit[];
}

declare interface CreateTablesResponse {
  /** 批量创建表格结果数量 */
  TotalCount?: number;
  /** 批量创建表格结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupRecordsRequest {
  /** 待删除备份记录的所在集群ID */
  ClusterId: string;
  /** 待删除备份记录的详情 */
  BackupRecords: BackupRecords[];
}

declare interface DeleteBackupRecordsResponse {
  /** TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务 */
  TaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 待删除的集群ID */
  ClusterId: string;
}

declare interface DeleteClusterResponse {
  /** 删除集群生成的任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIdlFilesRequest {
  /** IDL所属集群ID */
  ClusterId: string;
  /** 待删除的IDL文件信息列表 */
  IdlFiles: IdlFileInfo[];
}

declare interface DeleteIdlFilesResponse {
  /** 结果记录数量 */
  TotalCount?: number;
  /** 删除结果 */
  IdlFileInfos?: IdlFileInfoWithoutContent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSnapshotsRequest {
  /** 表格所属集群id */
  ClusterId: string;
  /** 删除的快照列表 */
  SelectedTables: SnapshotInfoNew[];
}

declare interface DeleteSnapshotsResponse {
  /** 批量删除的快照数量 */
  TotalCount: number;
  /** 批量删除的快照结果 */
  TableResults: SnapshotResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTableDataFlowRequest {
  /** 表格所属集群实例ID */
  ClusterId: string;
  /** 待删除分布式索引的表格列表 */
  SelectedTables: SelectedTableInfoNew[];
}

declare interface DeleteTableDataFlowResponse {
  /** 删除表格分布式索引结果数量 */
  TotalCount?: number;
  /** 删除表格分布式索引结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTableGroupRequest {
  /** 表格组所属的集群ID */
  ClusterId: string;
  /** 表格组ID */
  TableGroupId: string;
}

declare interface DeleteTableGroupResponse {
  /** 删除表格组所创建的任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTableIndexRequest {
  /** 表格所属集群实例ID */
  ClusterId: string;
  /** 待删除分布式索引的表格列表 */
  SelectedTables: SelectedTableInfoNew[];
}

declare interface DeleteTableIndexResponse {
  /** 删除表格分布式索引结果数量 */
  TotalCount?: number;
  /** 删除表格分布式索引结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTablesRequest {
  /** 待删除表所在集群ID */
  ClusterId: string;
  /** 待删除表信息列表 */
  SelectedTables: SelectedTableInfoNew[];
}

declare interface DeleteTablesResponse {
  /** 删除表结果数量 */
  TotalCount?: number;
  /** 删除表结果详情列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationsRequest {
  /** 集群ID，用于获取指定集群的单据 */
  ClusterId?: string;
  /** 分页，限制当前返回多少条记录，大于等于10 */
  Limit?: number;
  /** 分页，从多少条数据开始返回 */
  Offset?: number;
  /** 申请单状态，用于过滤，0-待审核 1-已经审核并提交任务 2-已驳回 */
  CensorStatus?: number;
  /** 表格组id，用于过滤 */
  TableGroupId?: string;
  /** 表格名，用于过滤 */
  TableName?: string;
  /** 申请人uin，用于过滤 */
  Applicant?: string;
  /** 申请类型，用于过滤，0加表 1删除表 2清理表 3修改表 4表重建 5存储层扩缩容 6接入层扩缩容 7复制表数据 8key回档 */
  ApplyType?: number;
}

declare interface DescribeApplicationsResponse {
  /** 申请单列表 */
  Applications: Application[];
  /** 申请单个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupRecordsRequest {
  /** 集群ID，用于获取指定集群的单据 */
  ClusterId?: string;
  /** 分页 */
  Limit?: number;
  /** 分页 */
  Offset?: number;
  /** 表格组id，用于过滤 */
  TableGroupId?: string;
  /** 表格名，用于过滤 */
  TableName?: string;
}

declare interface DescribeBackupRecordsResponse {
  /** 备份记录详情 */
  BackupRecords: BackupRecords[];
  /** 返回记录条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterTagsRequest {
  /** 集群ID列表 */
  ClusterIds: string[];
}

declare interface DescribeClusterTagsResponse {
  /** 集群标签信息列表 */
  Rows?: TagsInfoOfCluster[] | null;
  /** 返回结果个数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 指定查询的集群ID列表 */
  ClusterIds?: string[];
  /** 查询过滤条件 */
  Filters?: Filter[];
  /** 查询列表偏移量 */
  Offset?: number;
  /** 查询列表返回记录数，默认值20 */
  Limit?: number;
  /** 是否启用Ipv6 */
  Ipv6Enable?: number;
}

declare interface DescribeClustersResponse {
  /** 集群实例数 */
  TotalCount?: number;
  /** 集群实例列表 */
  Clusters?: ClusterInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIdlFileInfosRequest {
  /** 文件所属集群ID */
  ClusterId: string;
  /** 文件所属表格组ID */
  TableGroupIds?: string[];
  /** 指定文件ID列表 */
  IdlFileIds?: string[];
  /** 查询列表偏移量 */
  Offset?: number;
  /** 查询列表返回记录数 */
  Limit?: number;
}

declare interface DescribeIdlFileInfosResponse {
  /** 文件数量 */
  TotalCount?: number;
  /** 文件详情列表 */
  IdlFileInfos?: IdlFileInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineRequest {
  /** 不为0，表示查询支持ipv6的机器 */
  Ipv6Enable?: number;
}

declare interface DescribeMachineResponse {
  /** 独占机器资源列表 */
  PoolList?: PoolInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 可用区详情结果数量 */
  TotalCount?: number;
  /** 可用区详情结果列表 */
  RegionInfos?: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotsRequest {
  /** 表格所属集群id */
  ClusterId: string;
  /** 所属表格组ID */
  TableGroupId?: string;
  /** 表名称 */
  TableName?: string;
  /** 快照名称 */
  SnapshotName?: string;
  /** 批量拉取快照的表格列表 */
  SelectedTables?: SelectedTableInfoNew[];
}

declare interface DescribeSnapshotsResponse {
  /** 快照数量 */
  TotalCount: number;
  /** 快照结果列表 */
  TableResults: SnapshotResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableGroupTagsRequest {
  /** 待查询标签表格组所属集群ID */
  ClusterId: string;
  /** 待查询标签表格组ID列表 */
  TableGroupIds: string[];
}

declare interface DescribeTableGroupTagsResponse {
  /** 表格组标签信息列表 */
  Rows?: TagsInfoOfTableGroup[] | null;
  /** 返回结果个数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableGroupsRequest {
  /** 表格组所属集群ID */
  ClusterId: string;
  /** 表格组ID列表 */
  TableGroupIds?: string[];
  /** 过滤条件，本接口支持：TableGroupName，TableGroupId */
  Filters?: Filter[];
  /** 查询列表偏移量 */
  Offset?: number;
  /** 查询列表返回记录数 */
  Limit?: number;
}

declare interface DescribeTableGroupsResponse {
  /** 表格组数量 */
  TotalCount?: number;
  /** 表格组信息列表 */
  TableGroups?: TableGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableTagsRequest {
  /** 表格所属集群ID */
  ClusterId: string;
  /** 表格列表 */
  SelectedTables: SelectedTableInfoNew[];
}

declare interface DescribeTableTagsResponse {
  /** 返回结果总数 */
  TotalCount?: number;
  /** 表格标签信息列表 */
  Rows?: TagsInfoOfTable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesInRecycleRequest {
  /** 待查询表格所属集群ID */
  ClusterId?: string;
  /** 待查询表格所属表格组ID列表 */
  TableGroupIds?: string[];
  /** 过滤条件，本接口支持：TableName，TableInstanceId */
  Filters?: Filter[];
  /** 查询结果偏移量 */
  Offset?: number;
  /** 查询结果返回记录数量 */
  Limit?: number;
}

declare interface DescribeTablesInRecycleResponse {
  /** 表格数量 */
  TotalCount?: number;
  /** 表格详情结果列表 */
  TableInfos?: TableInfoNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesRequest {
  /** 待查询表格所属集群ID */
  ClusterId?: string;
  /** 待查询表格所属表格组ID列表 */
  TableGroupIds?: string[];
  /** 待查询表格信息列表，用户不用关注，过滤请使用filter */
  SelectedTables?: SelectedTableInfoNew[];
  /** 过滤条件，本接口支持：TableName，TableInstanceId */
  Filters?: Filter[];
  /** 查询结果偏移量 */
  Offset?: number;
  /** 查询结果返回记录数量 */
  Limit?: number;
}

declare interface DescribeTablesResponse {
  /** 表格数量 */
  TotalCount?: number;
  /** 表格详情结果列表 */
  TableInfos?: TableInfoNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 需要查询任务所属的集群ID列表 */
  ClusterIds?: string[];
  /** 需要查询的任务ID列表 */
  TaskIds?: string[];
  /** 过滤条件，本接口支持：Content，TaskType, Operator, Time */
  Filters?: Filter[];
  /** 查询列表偏移量 */
  Offset?: number;
  /** 查询列表返回记录数 */
  Limit?: number;
}

declare interface DescribeTasksResponse {
  /** 任务数量 */
  TotalCount?: number;
  /** 查询到的任务详情列表 */
  TaskInfos?: TaskInfoNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUinInWhitelistRequest {
}

declare interface DescribeUinInWhitelistResponse {
  /** 查询结果：`FALSE` 否；`TRUE` 是 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableRestProxyRequest {
  /** 对应appid */
  ClusterId: string;
}

declare interface DisableRestProxyResponse {
  /** RestProxy的状态，0为关闭，1为开启中，2为开启，3为关闭中 */
  RestProxyStatus?: number;
  /** TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableRestProxyRequest {
  /** 集群 ID。 */
  ClusterId: string;
}

declare interface EnableRestProxyResponse {
  /** RestProxy的状态，0为关闭，1为开启中，2为开启，3为关闭中 */
  RestProxyStatus?: number;
  /** TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportSnapshotsRequest {
  /** 表格所属的集群id */
  ClusterId: string;
  /** 用于导入的快照信息 */
  Snapshots: SnapshotInfo;
  /** 是否导入部分记录，TRUE表示导入部分记录，FALSE表示全表导入 */
  ImportSpecialKey: string;
  /** 是否导入到当前表，TRUE表示导入到当前表，FALSE表示导入到新表 */
  ImportOriginTable: string;
  /** 部分记录的key文件 */
  KeyFile?: KeyFile;
  /** 如果导入到新表，此为新表所属的表格组id */
  NewTableGroupId?: string;
  /** 如果导入到新表，此为新表的表名，系统会以该名称自动创建一张结构相同的空表 */
  NewTableName?: string;
}

declare interface ImportSnapshotsResponse {
  /** TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务 */
  TaskId?: string | null;
  /** ApplicationId由 AppInstanceId-applicationId 组成，以区分不同集群的申请 */
  ApplicationId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MergeTablesDataRequest {
  /** 选取的表格 */
  SelectedTables: MergeTablesInfo[];
  /** true只做对比，false既对比又执行 */
  IsOnlyCompare: boolean;
}

declare interface MergeTablesDataResponse {
  /** 合服结果集 */
  Results?: MergeTableResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCensorshipRequest {
  /** 集群id */
  ClusterId: string;
  /** 集群是否开启审核 0-关闭 1-开启 */
  Censorship: number;
  /** 审批人uin列表 */
  Uins?: string[];
}

declare interface ModifyCensorshipResponse {
  /** 集群id */
  ClusterId: string;
  /** 已加入审批人的uin */
  Uins: string[] | null;
  /** 集群是否开启审核 0-关闭 1-开启 */
  Censorship: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterMachineRequest {
  /** 集群id */
  ClusterId: string;
  /** svr占用的机器 */
  ServerList: MachineInfo[];
  /** proxy占用的机器 */
  ProxyList: MachineInfo[];
  /** 集群类型1共享集群2独占集群 */
  ClusterType: number;
}

declare interface ModifyClusterMachineResponse {
  /** 集群id */
  ClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterNameRequest {
  /** 需要修改名称的集群ID */
  ClusterId: string;
  /** 需要修改的集群名称，可使用中文或英文字符，最大长度32个字符 */
  ClusterName: string;
}

declare interface ModifyClusterNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterPasswordRequest {
  /** 需要修改密码的集群ID */
  ClusterId: string;
  /** 集群旧密码 */
  OldPassword: string;
  /** 集群旧密码预期失效时间 */
  OldPasswordExpireTime: string;
  /** 集群新密码，密码必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母 */
  NewPassword: string;
  /** 更新模式： `1` 更新密码；`2` 更新旧密码失效时间，默认为`1` 模式 */
  Mode?: string;
}

declare interface ModifyClusterPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterTagsRequest {
  /** 待修改标签的集群ID */
  ClusterId: string;
  /** 待增加或修改的标签列表 */
  ReplaceTags?: TagInfoUnit[];
  /** 待删除的标签 */
  DeleteTags?: TagInfoUnit[];
}

declare interface ModifyClusterTagsResponse {
  /** 任务ID */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySnapshotsRequest {
  /** 表格所属集群id */
  ClusterId: string;
  /** 快照列表 */
  SelectedTables: SnapshotInfoNew[];
}

declare interface ModifySnapshotsResponse {
  /** 批量修改的快照数量 */
  TotalCount: number;
  /** 批量修改的快照结果列表 */
  TableResults: SnapshotResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTableGroupNameRequest {
  /** 表格组所属的集群ID */
  ClusterId: string;
  /** 待修改名称的表格组ID */
  TableGroupId: string;
  /** 新的表格组名称，可以使用中英文字符和符号 */
  TableGroupName: string;
}

declare interface ModifyTableGroupNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTableGroupTagsRequest {
  /** 待修改标签表格组所属集群ID */
  ClusterId: string;
  /** 待修改标签表格组ID */
  TableGroupId: string;
  /** 待增加或修改的标签列表 */
  ReplaceTags?: TagInfoUnit[];
  /** 待删除的标签 */
  DeleteTags?: TagInfoUnit[];
}

declare interface ModifyTableGroupTagsResponse {
  /** 任务ID */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTableMemosRequest {
  /** 表所属集群实例ID */
  ClusterId: string;
  /** 选定表详情列表 */
  TableMemos: SelectedTableInfoNew[];
}

declare interface ModifyTableMemosResponse {
  /** 表备注修改结果数量 */
  TotalCount?: number;
  /** 表备注修改结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTableQuotasRequest {
  /** 带扩缩容表所属集群ID */
  ClusterId: string;
  /** 已选中待修改的表配额列表 */
  TableQuotas: SelectedTableInfoNew[];
}

declare interface ModifyTableQuotasResponse {
  /** 扩缩容结果数量 */
  TotalCount?: number;
  /** 扩缩容结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTableTagsRequest {
  /** 待修改标签表格所属集群ID */
  ClusterId: string;
  /** 待修改标签表格列表 */
  SelectedTables: SelectedTableInfoNew[];
  /** 待增加或修改的标签列表 */
  ReplaceTags?: TagInfoUnit[];
  /** 待删除的标签列表 */
  DeleteTags?: TagInfoUnit[];
}

declare interface ModifyTableTagsResponse {
  /** 返回结果总数 */
  TotalCount?: number;
  /** 返回结果 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTablesRequest {
  /** 待修改表格所在集群ID */
  ClusterId: string;
  /** 选中的改表IDL文件 */
  IdlFiles: IdlFileInfo[];
  /** 待改表格列表 */
  SelectedTables: SelectedTableInfoNew[];
}

declare interface ModifyTablesResponse {
  /** 修改表结果数量 */
  TotalCount?: number;
  /** 修改表结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverRecycleTablesRequest {
  /** 表所在集群ID */
  ClusterId: string;
  /** 待恢复表信息 */
  SelectedTables: SelectedTableInfoNew[];
}

declare interface RecoverRecycleTablesResponse {
  /** 恢复表结果数量 */
  TotalCount?: number;
  /** 恢复表信息列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackTablesRequest {
  /** 待回档表格所在集群ID */
  ClusterId: string;
  /** 待回档表格列表 */
  SelectedTables: SelectedTableInfoNew[];
  /** 待回档时间 */
  RollbackTime: string;
  /** 回档模式，支持：`KEYS` */
  Mode?: string;
}

declare interface RollbackTablesResponse {
  /** 表格回档任务结果数量 */
  TotalCount?: number;
  /** 表格回档任务结果列表 */
  TableResults?: TableRollbackResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetBackupExpireRuleRequest {
  /** 表所属集群实例ID */
  ClusterId: string;
  /** 淘汰策略数组 */
  BackupExpireRules: BackupExpireRuleInfo[];
}

declare interface SetBackupExpireRuleResponse {
  /** TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务 */
  TaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetTableDataFlowRequest {
  /** 表所属集群实例ID */
  ClusterId: string;
  /** 待创建分布式索引表格列表 */
  SelectedTables: SelectedTableWithField[];
}

declare interface SetTableDataFlowResponse {
  /** 表格数据订阅创建结果数量 */
  TotalCount?: number;
  /** 表格数据订阅创建结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetTableIndexRequest {
  /** 表所属集群实例ID */
  ClusterId: string;
  /** 待创建分布式索引表格列表 */
  SelectedTables: SelectedTableWithField[];
}

declare interface SetTableIndexResponse {
  /** 表格分布式索引创建结果数量 */
  TotalCount?: number;
  /** 表格分布式索引创建结果列表 */
  TableResults?: TableResultNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateApplyRequest {
  /** 申请单状态 */
  ApplyStatus: ApplyStatus[];
}

declare interface UpdateApplyResponse {
  /** 已更新的申请单列表 */
  ApplyResults?: ApplyResult[] | null;
  /** 更新数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyIdlFilesRequest {
  /** 待创建表格的集群ID */
  ClusterId: string;
  /** 待创建表格的表格组ID */
  TableGroupId?: string;
  /** 曾经上传过的IDL文件信息列表，与NewIdlFiles至少有一者 */
  ExistingIdlFiles?: IdlFileInfo[];
  /** 待上传的IDL文件信息列表，与ExistingIdlFiles至少有一者 */
  NewIdlFiles?: IdlFileInfo[];
}

declare interface VerifyIdlFilesResponse {
  /** 本次上传校验所有的IDL文件信息列表 */
  IdlFiles?: IdlFileInfo[];
  /** 读取IDL描述文件后解析出的合法表数量，不包含已经创建的表 */
  TotalCount?: number;
  /** 读取IDL描述文件后解析出的合法表列表，不包含已经创建的表 */
  TableInfos?: ParsedTableInfoNew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcaplusdb 游戏数据库 TcaplusDB} */
declare interface Tcaplusdb {
  (): Versions;
  /** 清除表数据 {@link ClearTablesRequest} {@link ClearTablesResponse} */
  ClearTables(data: ClearTablesRequest, config?: AxiosRequestConfig): AxiosPromise<ClearTablesResponse>;
  /** 上传并校验改表文件 {@link CompareIdlFilesRequest} {@link CompareIdlFilesResponse} */
  CompareIdlFiles(data: CompareIdlFilesRequest, config?: AxiosRequestConfig): AxiosPromise<CompareIdlFilesResponse>;
  /** 创建备份 {@link CreateBackupRequest} {@link CreateBackupResponse} */
  CreateBackup(data: CreateBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupResponse>;
  /** 创建集群 {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 创建表格快照 {@link CreateSnapshotsRequest} {@link CreateSnapshotsResponse} */
  CreateSnapshots(data: CreateSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotsResponse>;
  /** 新建表格组 {@link CreateTableGroupRequest} {@link CreateTableGroupResponse} */
  CreateTableGroup(data: CreateTableGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTableGroupResponse>;
  /** 批量创建表 {@link CreateTablesRequest} {@link CreateTablesResponse} */
  CreateTables(data: CreateTablesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTablesResponse>;
  /** 删除手工备份 {@link DeleteBackupRecordsRequest} {@link DeleteBackupRecordsResponse} */
  DeleteBackupRecords(data: DeleteBackupRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupRecordsResponse>;
  /** 删除集群 {@link DeleteClusterRequest} {@link DeleteClusterResponse} */
  DeleteCluster(data: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
  /** 删除IDL描述文件 {@link DeleteIdlFilesRequest} {@link DeleteIdlFilesResponse} */
  DeleteIdlFiles(data: DeleteIdlFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIdlFilesResponse>;
  /** 删除表格快照 {@link DeleteSnapshotsRequest} {@link DeleteSnapshotsResponse} */
  DeleteSnapshots(data: DeleteSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotsResponse>;
  /** 删除表格的数据订阅 {@link DeleteTableDataFlowRequest} {@link DeleteTableDataFlowResponse} */
  DeleteTableDataFlow(data: DeleteTableDataFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableDataFlowResponse>;
  /** 删除表格组 {@link DeleteTableGroupRequest} {@link DeleteTableGroupResponse} */
  DeleteTableGroup(data: DeleteTableGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableGroupResponse>;
  /** 删除表格的分布式索引 {@link DeleteTableIndexRequest} {@link DeleteTableIndexResponse} */
  DeleteTableIndex(data: DeleteTableIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableIndexResponse>;
  /** 删除表 {@link DeleteTablesRequest} {@link DeleteTablesResponse} */
  DeleteTables(data: DeleteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTablesResponse>;
  /** 获取审批管理的申请单 {@link DescribeApplicationsRequest} {@link DescribeApplicationsResponse} */
  DescribeApplications(data?: DescribeApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationsResponse>;
  /** 查询备份记录 {@link DescribeBackupRecordsRequest} {@link DescribeBackupRecordsResponse} */
  DescribeBackupRecords(data?: DescribeBackupRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupRecordsResponse>;
  /** 获取集群关联的标签列表 {@link DescribeClusterTagsRequest} {@link DescribeClusterTagsResponse} */
  DescribeClusterTags(data: DescribeClusterTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterTagsResponse>;
  /** 查询集群信息列表 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查询表描述文件详情 {@link DescribeIdlFileInfosRequest} {@link DescribeIdlFileInfosResponse} */
  DescribeIdlFileInfos(data: DescribeIdlFileInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIdlFileInfosResponse>;
  /** 查询独占集群剩余机器 {@link DescribeMachineRequest} {@link DescribeMachineResponse} */
  DescribeMachine(data?: DescribeMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineResponse>;
  /** 查询地域列表 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询快照列表 {@link DescribeSnapshotsRequest} {@link DescribeSnapshotsResponse} */
  DescribeSnapshots(data: DescribeSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotsResponse>;
  /** 获取表格组关联的标签列表 {@link DescribeTableGroupTagsRequest} {@link DescribeTableGroupTagsResponse} */
  DescribeTableGroupTags(data: DescribeTableGroupTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableGroupTagsResponse>;
  /** 查询表格组列表 {@link DescribeTableGroupsRequest} {@link DescribeTableGroupsResponse} */
  DescribeTableGroups(data: DescribeTableGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableGroupsResponse>;
  /** 获取表格标签 {@link DescribeTableTagsRequest} {@link DescribeTableTagsResponse} */
  DescribeTableTags(data: DescribeTableTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableTagsResponse>;
  /** 查询表详情 {@link DescribeTablesRequest} {@link DescribeTablesResponse} */
  DescribeTables(data?: DescribeTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesResponse>;
  /** 查询回收站中的表详情 {@link DescribeTablesInRecycleRequest} {@link DescribeTablesInRecycleResponse} */
  DescribeTablesInRecycle(data?: DescribeTablesInRecycleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesInRecycleResponse>;
  /** 查询任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data?: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 查询本用户是否在白名单中 {@link DescribeUinInWhitelistRequest} {@link DescribeUinInWhitelistResponse} */
  DescribeUinInWhitelist(data?: DescribeUinInWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUinInWhitelistResponse>;
  /** 关闭restful api {@link DisableRestProxyRequest} {@link DisableRestProxyResponse} */
  DisableRestProxy(data: DisableRestProxyRequest, config?: AxiosRequestConfig): AxiosPromise<DisableRestProxyResponse>;
  /** 开启restful api {@link EnableRestProxyRequest} {@link EnableRestProxyResponse} */
  EnableRestProxy(data: EnableRestProxyRequest, config?: AxiosRequestConfig): AxiosPromise<EnableRestProxyResponse>;
  /** 导入快照数据 {@link ImportSnapshotsRequest} {@link ImportSnapshotsResponse} */
  ImportSnapshots(data: ImportSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<ImportSnapshotsResponse>;
  /** 合服 {@link MergeTablesDataRequest} {@link MergeTablesDataResponse} */
  MergeTablesData(data: MergeTablesDataRequest, config?: AxiosRequestConfig): AxiosPromise<MergeTablesDataResponse>;
  /** 修改集群审批状态 {@link ModifyCensorshipRequest} {@link ModifyCensorshipResponse} */
  ModifyCensorship(data: ModifyCensorshipRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCensorshipResponse>;
  /** 修改独占集群机器 {@link ModifyClusterMachineRequest} {@link ModifyClusterMachineResponse} */
  ModifyClusterMachine(data: ModifyClusterMachineRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterMachineResponse>;
  /** 修改集群名称 {@link ModifyClusterNameRequest} {@link ModifyClusterNameResponse} */
  ModifyClusterName(data: ModifyClusterNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterNameResponse>;
  /** 修改集群密码 {@link ModifyClusterPasswordRequest} {@link ModifyClusterPasswordResponse} */
  ModifyClusterPassword(data: ModifyClusterPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterPasswordResponse>;
  /** 修改集群标签 {@link ModifyClusterTagsRequest} {@link ModifyClusterTagsResponse} */
  ModifyClusterTags(data: ModifyClusterTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterTagsResponse>;
  /** 修改表格快照 {@link ModifySnapshotsRequest} {@link ModifySnapshotsResponse} */
  ModifySnapshots(data: ModifySnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotsResponse>;
  /** 修改表格组名称 {@link ModifyTableGroupNameRequest} {@link ModifyTableGroupNameResponse} */
  ModifyTableGroupName(data: ModifyTableGroupNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTableGroupNameResponse>;
  /** 修改表格组标签 {@link ModifyTableGroupTagsRequest} {@link ModifyTableGroupTagsResponse} */
  ModifyTableGroupTags(data: ModifyTableGroupTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTableGroupTagsResponse>;
  /** 修改表备注信息 {@link ModifyTableMemosRequest} {@link ModifyTableMemosResponse} */
  ModifyTableMemos(data: ModifyTableMemosRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTableMemosResponse>;
  /** 表扩缩容 {@link ModifyTableQuotasRequest} {@link ModifyTableQuotasResponse} */
  ModifyTableQuotas(data: ModifyTableQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTableQuotasResponse>;
  /** 修改表格标签 {@link ModifyTableTagsRequest} {@link ModifyTableTagsResponse} */
  ModifyTableTags(data: ModifyTableTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTableTagsResponse>;
  /** 批量修改表结构 {@link ModifyTablesRequest} {@link ModifyTablesResponse} */
  ModifyTables(data: ModifyTablesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTablesResponse>;
  /** 恢复回收站中的表 {@link RecoverRecycleTablesRequest} {@link RecoverRecycleTablesResponse} */
  RecoverRecycleTables(data: RecoverRecycleTablesRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverRecycleTablesResponse>;
  /** 表格数据回档 {@link RollbackTablesRequest} {@link RollbackTablesResponse} */
  RollbackTables(data: RollbackTablesRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackTablesResponse>;
  /** 新增、删除、修改备份过期策略 {@link SetBackupExpireRuleRequest} {@link SetBackupExpireRuleResponse} */
  SetBackupExpireRule(data: SetBackupExpireRuleRequest, config?: AxiosRequestConfig): AxiosPromise<SetBackupExpireRuleResponse>;
  /** 新增、修改表格数据订阅 {@link SetTableDataFlowRequest} {@link SetTableDataFlowResponse} */
  SetTableDataFlow(data: SetTableDataFlowRequest, config?: AxiosRequestConfig): AxiosPromise<SetTableDataFlowResponse>;
  /** 设置表格分布式索引 {@link SetTableIndexRequest} {@link SetTableIndexResponse} */
  SetTableIndex(data: SetTableIndexRequest, config?: AxiosRequestConfig): AxiosPromise<SetTableIndexResponse>;
  /** 更新申请单状态 {@link UpdateApplyRequest} {@link UpdateApplyResponse} */
  UpdateApply(data: UpdateApplyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateApplyResponse>;
  /** 上传并校验创建表格文件 {@link VerifyIdlFilesRequest} {@link VerifyIdlFilesResponse} */
  VerifyIdlFiles(data: VerifyIdlFilesRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyIdlFilesResponse>;
}

export declare type Versions = ["2019-08-23"];

export default Tcaplusdb;
