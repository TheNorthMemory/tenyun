/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 备份列对象 */
declare interface BackupColumnItem {
  /** 列名。 */
  ColumnName?: string;
  /** 重命名后的列名。 */
  NewColumnName?: string;
}

/** 备份源实例详情 */
declare interface BackupEndpoint {
  /** 数据库类型。目前支持的值["mysql", "mariadb", "percona"]。注意，该值必须和备份计划的类型一致。 */
  DatabaseType: string;
  /** 实例接入类型，支持的值包括："extranet" - 外网;"cvm" - cvm自建实例;"dcg" - 专线接入;"vpncloud" - 云vpn接入;"cdb" - 腾讯云数据库实例;"ccn" - 云联网接入。 */
  AccessType: string;
  /** 用户名。 */
  UserName: string;
  /** 登录密码。 */
  Password: string;
  /** 接入地域。 */
  Region: string;
  /** 服务提供商，支持的值包括["aliyun", "aws", "others"]。 */
  Supplier: string;
  /** 实例 Ip。 */
  Ip?: string;
  /** 实例端口号。 */
  Port?: number;
  /** 云数据库实例ID，格式如：cdb-qcloudtest。 */
  InstanceId?: string;
  /** CVM 实例ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要填写该字段。 */
  CvmInstanceId?: string;
  /** 专线网关ID，格式如：dcg-0rxtqqxb。 */
  UniqDcgId?: string;
  /** VPN网关ID，格式如：vpngw-9ghexg7q。 */
  UniqVpnGwId?: string;
  /** 私有网络ID，格式如：vpc-92jblxto。 */
  VpcId?: string;
  /** 子网ID，格式如：subnet-3paxmkdz。 */
  SubnetId?: string;
  /** 云联网ID，如：ccn-afp6kltc。 */
  CcnId?: string;
  /** 数据库版本，当实例为 RDS 或 AWS 实例时才有效，格式如：5.6或者5.7，默认为5.6。 */
  EngineVersion?: string;
  /** mariadb三引擎版本。 */
  DBKernel?: string;
}

/** 增量备份文件信息 */
declare interface BackupFile {
  /** 文件名。 */
  FileName?: string;
  /** 备份集 ID。 */
  BackupSetId?: string;
  /** 文件状态。取值：- notReady：未就绪- backuping：备份中- finished：备份完成- failed：备份失败 */
  Status?: string;
  /** 源库连接信息。云数据库实例为实例 ID，其余为 ip:port。 */
  SourceInfo?: string;
  /** 开始时间。格式为 YYYY-MM-DD hh:mm:ss。 */
  StartTime?: string;
  /** 结束时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未结束时返回 0000-00-00 00:00:00。 */
  EndTime?: string;
  /** 过期时间。格式为 YYYY-MM-DD hh:mm:ss。 */
  ExpireTime?: string;
  /** 文件大小，单位：字节。 */
  BackupSize?: number;
  /** 备份方式。取值：logical（逻辑备份）。 */
  BackupMethod?: string;
  /** 存储类型。取值：DBSStorage（内置存储）。 */
  StorageType?: string;
  /** 存储策略类型。取值：- standard：标准存储- tiered：分级存储 */
  RetentionType?: string;
  /** 备份集存储详情。 */
  ResourceDetail?: ResourceDetail;
  /** 备份池。 */
  BackupPool?: string;
  /** 当前状态下允许的操作。取值：download。 */
  AllowedActions?: string[];
  /** 支持的全部操作。 */
  AllActions?: string[];
  /** 文件最后修改时间。格式为 YYYY-MM-DD hh:mm:ss。 */
  LastModified?: string;
}

/** 备份对象 */
declare interface BackupObject {
  /** 备份对象类型，可能的取值为:"all" - 整实例;"partial" - 部分对象。 */
  ObjectMode: string;
  /** 备份对象详情，当 ObjectMode 为 partial, 即选择部分对象备份时，该字段不能为空。 */
  ObjectItems?: BackupObjectItem[] | null;
}

/** 备份对象详情 */
declare interface BackupObjectItem {
  /** 库名。 */
  DBName?: string;
  /** 重命名后的库名。 */
  NewDBName?: string;
  /** schema 名。 */
  SchemaName?: string;
  /** 重命名后的 schema 名。 */
  NewSchemaName?: string;
  /** 库选择模式，可能的取值为："all" - 当前对象下的所有对象;"partial" - 当前对象下的部分对象。 */
  DbMode?: string;
  /** 表选择模式，可能的取值为:"all" - 当前对象下的所有对象;"partial" - 当前对象下的部分对象。 */
  TableMode?: string;
  /** 表对象详情。当 TableMode 为 partial，即选择部分表备份时，此参数需要填写。 */
  Tables?: BackupTableItem[] | null;
}

/** 备份周期描述 */
declare interface BackupPeriod {
  /** 全量备份频率。目前仅支持"Weekly" - 每星期 */
  PeriodType: string;
  /** 全量备份周期。取值范围为：["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]。 */
  Day: string[];
}

/** 备份周期描述 */
declare interface BackupPeriodItem {
  /** 全量备份频率。目前仅支持"Weekly" - 每星期 */
  PeriodType: string | null;
  /** 全量备份周期。取值范围为：["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]。 */
  Day: string[] | null;
}

/** 备份计划信息 */
declare interface BackupPlanInfo {
  /** 地域信息。 */
  Region: string;
  /** 备份计划 ID。 */
  BackupPlanId: string;
  /** 备份计划名称。 */
  BackupPlanName: string;
  /** 备份计划状态。可能的取值为："notStarted" - 未启动;"checking" - 校验中;"checkPass" - 校验通过;"checkNotPass" - 校验未通过;"running" - 运行中;"fullBacking" - 全量备份中;"isolating" - 隔离中;"isolated" - 已隔离;"offlining" - 下线中;"offlined" - 已下线;"paused" - 已暂停。 */
  Status: string;
  /** 数据库类型。 */
  DatabaseType: string;
  /** 访问类型。可能的取值为："extranet" - 外网;"cvm" - cvm 自建实例;"dcg" - 专线接入;"vpncloud" - 云vpn接入;"cdb" - 腾讯云数据库实例;"ccn" - 云联网。 */
  AccessType: string;
  /** 源实例信息。 */
  SourceInfo: string[];
  /** 创建时间。 */
  CreateTime: string;
  /** 到期时间。 */
  ExpireTime: string;
  /** 下线时间。 */
  OfflineTime: string;
  /** 实例规格类型。可能的取值为：["micro", "small", "medium", "large", "xlarge"]。 */
  InstanceClass: string;
  /** 备份方式。可能的取值为："logical" - 逻辑备份;"physical" - 物理备份。 */
  BackupMethod: string;
  /** 标签信息。 */
  Tags: Tag[] | null;
  /** 自动续费标记。可能的取值为：0 - 未开启自动续费;1 - 已开启自动续费;2 - 已关闭自动续费。 */
  AutoRenewFlag: number;
  /** 是否开启增量备份标记。 */
  EnableIncrement: boolean;
  /** 付费类型。可能的取值为："prePay" - 预付费类型;"postPay" - 后付费类型。 */
  PayType: string;
  /** 源端信息 */
  SetSourceInfo?: string[] | null;
}

/** 备份计划付费信息 */
declare interface BackupPlanPayInfo {
  /** 实例规格。 */
  InstanceClass?: string;
  /** 付费方式。取值：- postPay：后付费- prePay：预付费 */
  PayType?: string;
  /** 免费额度，单位：字节。取值为 -1 表示不限量。 */
  FreeSpace?: number;
  /** 本月计费空间，单位：字节。 */
  TotalChargeSpace?: number;
  /** 全量计费空间，单位：字节。 */
  FullChargeSpace?: number;
  /** 增量计费空间，单位：字节。 */
  IncrementChargeSpace?: number;
  /** 本月全量备份集大小，单位：字节。 */
  FullBackupSetSize?: number;
  /** 本月增量备份集大小，单位：字节。 */
  IncrementBackupSetSize?: number;
  /** 创建时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00。 */
  CreateTime?: string;
  /** 统计周期，格式为“开始时间 - 结束时间”。 */
  TimeRange?: string;
}

/** 备份进度信息 */
declare interface BackupProgress {
  /** 全量备份状态。 */
  FullBackupStatus?: string;
  /** 增量备份状态。 */
  IncrementBackupStatus?: string;
  /** 上次备份执行时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过备份时为空字符串。 */
  LastBackupTime?: string;
  /** 下次备份执行时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未确定时为空字符串。 */
  NextBackupTime?: string;
  /** 上次恢复时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过恢复时为空字符串。 */
  LastRestoreTime?: string;
  /** 上次恢复任务状态。 */
  LastRestoreStatus?: string;
  /** 当前备份作业状态。 */
  CurrentBackupJobStatus?: string;
}

/** 备份集加密信息 */
declare interface BackupSetOption {
  /** 存储加密方式。取值："UnEncrypted" - 非加密存储;"SSE-COS" - 内置加密存储;"SSE-KMS" - KMS 加密存储。 */
  Encryption?: string;
}

/** 备份策略 */
declare interface BackupStrategy {
  /** 全量备份开始时间。周期性的全量备份将在当天该时间开始。 */
  BackupStartTime: string;
  /** 存储策略。 */
  StorageStrategy: StorageStrategy;
  /** 备份周期。 */
  BackupPeriod: BackupPeriod;
  /** 备份方法。目前仅支持 "logical" - 逻辑备份。 */
  BackupMethod?: string;
  /** 备份周期。支持的值包括："period" - 周期性备份；"single" - 单次备份。默认值为"period"。 */
  StrategyType?: string;
  /** 是否开启增量备份。可能的取值为["true", "false"]。默认值为"true"。 */
  EnableIncrement?: boolean;
}

/** 备份策略 */
declare interface BackupStrategyItem {
  /** 全量备份开始时间。周期性的全量备份将在当天该时间开始，格式：HH:mm（24 小时制），如 02:00。 */
  BackupStartTime: string | null;
  /** 存储策略。 */
  StorageStrategy: StorageStrategyItem | null;
  /** 备份周期。 */
  BackupPeriod: BackupPeriodItem | null;
  /** 备份方法。目前仅支持 "logical" - 逻辑备份。 */
  BackupMethod?: string | null;
  /** 备份周期。支持的值包括："period" - 周期性备份；"single" - 单次备份。默认值为"period"。 */
  StrategyType?: string;
  /** 是否开启增量备份。可能的取值为["true", "false"]。默认值为"true"。 */
  EnableIncrement?: boolean | null;
}

/** 备份表对象 */
declare interface BackupTableItem {
  /** 表名。 */
  TableName?: string;
  /** 重命名后的表名。 */
  NewTableName?: string;
  /** 列对象。 */
  Columns?: BackupColumnItem[] | null;
}

/** 连通性检测结果 */
declare interface ConnectTestResult {
  /** 任务 ID */
  TaskId?: number;
  /** 任务状态 */
  Status?: string;
  /** 是否通过。0 表示未通过，1 表示通过。 */
  IsPass?: number;
  /** 源端地址 */
  Addr?: string;
  /** 源地址转换IP */
  SNatIp?: string | null;
  /** 检测结果集 */
  TestItems?: TestItem[];
}

/** 备份源实例详情 */
declare interface Endpoint {
  /** 节点角色。取值："master" - 主节点;"slave" - 从节点。 */
  Role?: string;
  /** 数据库类型。目前支持的值["mysql", "mariadb", "percona"]。注意，该值必须和备份计划的类型一致。 */
  DatabaseType?: string;
  /** 实例接入类型，支持的值包括："extranet" - 外网;"cvm" - cvm自建实例;"dcg" - 专线接入;"vpncloud" - 云vpn接入;"cdb" - 腾讯云数据库实例;"ccn" - 云联网接入。 */
  AccessType?: string;
  /** 实例 Ip。 */
  Ip?: string;
  /** 实例端口号。 */
  Port?: number;
  /** 用户名。 */
  UserName?: string;
  /** 登录密码。 */
  Password?: string;
  /** 云数据库实例ID，格式如：cdb-qcloudtest。 */
  InstanceId?: string;
  /** CVM 实例ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要填写该字段。 */
  CvmInstanceId?: string;
  /** 专线网关ID，格式如：dcg-0rxtqqxb。 */
  UniqDcgId?: string;
  /** VPN网关ID，格式如：vpngw-9ghexg7q。 */
  UniqVpnGwId?: string;
  /** 私有网络ID，格式如：vpc-92jblxto。 */
  VpcId?: string;
  /** 子网ID，格式如：subnet-3paxmkdz。 */
  SubnetId?: string;
  /** 云联网ID，如：ccn-afp6kltc。 */
  CcnId?: string;
  /** 接入地域。 */
  Region?: string;
  /** 服务提供商，支持的值包括["aliyun", "aws", "others"]。 */
  Supplier?: string;
  /** 数据库版本，当实例为 RDS 或 AWS 实例时才有效，格式如：5.6或者5.7，默认为5.6。 */
  EngineVersion?: string;
  /** mariadb三引擎版本。 */
  DBKernel?: string;
}

/** 错误异常信息 */
declare interface ErrorInfo {
  /** 错误类型。 */
  ErrorType?: string;
  /** 错误信息。 */
  ErrorMsg?: string;
}

/** 全量备份错误信息 */
declare interface FullBackupErrorMessage {
  /** 错误标题。 */
  Title?: string;
  /** 错误详情。 */
  Message?: string;
}

/** 全量备份进度 */
declare interface FullBackupProgress {
  /** 结构备份进度，取值范围为 0 - 100，单位：百分比。 */
  SchemaProgress?: number;
  /** 数据备份进度，取值范围为 0 - 100，单位：百分比。 */
  DataProgress?: number;
}

/** 全量备份集详情 */
declare interface FullBackupSetDetail {
  /** 备份集 ID。 */
  BackupSetId?: string;
  /** 源实例信息。 */
  SourceInfo?: string;
  /** 备份集状态。可能的取值为："running" - 运行中;"finished" - 已完成;"failed" - 已失败;"stopped" - 已终止。 */
  Status?: string;
  /** 创建时间。格式为 YYYY-MM-DD hh:mm:ss。 */
  StartTime?: string;
  /** 结束时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未结束时返回 0000-00-00 00:00:00。 */
  EndTime?: string;
  /** 过期时间。格式为 YYYY-MM-DD hh:mm:ss。 */
  ExpireTime?: string;
  /** 备份集大小，单位为 Bytes。 */
  BackupSize?: number;
  /** 备份方式。可能的取值为："logical" - 逻辑备份；"physical" - 物理备份。 */
  BackupMethod?: string;
  /** 存储类型。目前仅支持 "DBSStorage"，即 DBS 内置存储。 */
  StorageType?: string;
  /** 备份池类型。目前仅支持 "DefaultPool"，即默认存储池。 */
  BackupPool?: string;
  /** 备份集存储类型。支持的取值范围为："standard" - 标准存储；"tiered" - 分级存储。 */
  RetentionType?: string;
  /** 备份集存储状态详情。 */
  ResourceDetail?: ResourceDetail;
  /** 备份源实例信息。 */
  SourceEndpoint?: Endpoint;
  /** 备份对象。 */
  BackupObject?: BackupObject;
  /** 备份进度。 */
  Progress?: FullBackupProgress;
  /** 备份错误信息。备份失败时有值。 */
  ErrorMessage?: FullBackupErrorMessage;
  /** 备份集加密信息。 */
  BackupSetOption?: BackupSetOption;
}

/** 增量备份集信息 */
declare interface IncrementBackup {
  /** 备份集 ID。 */
  BackupSetId?: string;
  /** 源实例信息。 */
  SourceInfo?: string;
  /** 备份集状态。可能的取值为："running" - 运行中;"finished" - 已完成;"failed" - 已失败;"stopped" - 已终止。 */
  Status?: string;
  /** 开始时间。格式为 YYYY-MM-DD hh:mm:ss。 */
  StartTime?: string;
  /** 结束时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未结束时返回 0000-00-00 00:00:00。 */
  EndTime?: string;
  /** 过期时间。格式为 YYYY-MM-DD hh:mm:ss，备份集尚未生成过期时间时返回空字符串。 */
  ExpireTime?: string;
  /** 备份集文件个数。 */
  FileCount?: number;
  /** 备份方式。可能的取值为："logical" - 逻辑备份；"physical" - 物理备份。 */
  BackupMethod?: string;
  /** 存储类型。目前仅支持 "DBSStorage"，即 DBS 内置存储。 */
  StorageType?: string;
  /** 备份池类型。目前仅支持 "DefaultPool"，即默认存储池。 */
  BackupPool?: string;
  /** 备份集存储类型。支持的取值范围为："standard" - 标准存储；"tiered" - 分级存储。 */
  RetentionType?: string;
  /** 备份集存储状态详情。 */
  ResourceDetail?: ResourceItemDetail;
}

/** 备份集状态详情 */
declare interface ResourceDetail {
  /** 当前存储状态。可能的取值为："standard" - 标准存储；"lowFrequency" - 低频存储；"archive" - 归档存储；"deepArchive" - 深度归档存储； */
  TieredType?: string;
  /** 存储时长。备份集已保留的时长，单位为小时。 */
  StayTime?: number;
}

/** 备份集状态详情 */
declare interface ResourceItemDetail {
  /** 当前存储状态。可能的取值为："standard" - 标准存储；"lowFrequency" - 低频存储；"archive" - 归档存储；"deepArchive" - 深度归档存储； */
  TieredType?: string;
  /** 存储时长。备份集已保留的时长，单位为小时。 */
  StayTime?: number;
}

/** 可恢复时间范围 */
declare interface RestoreRange {
  /** 可恢复起始时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，无可恢复时间范围时为空字符串。 */
  StartTime?: string;
  /** 可恢复结束时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，无可恢复时间范围时为空字符串。 */
  EndTime?: string;
}

/** 备份存储策略。 */
declare interface StorageStrategy {
  /** 存储类型。目前仅支持 "system" - DBS 内置存储。默认值为 "system"。 */
  StorageType?: string;
  /** 加密方式。可能的取值为："UnEncrypted" - 非加密存储;"SSE-COS" - 内置加密存储;当该参数用作入参时，默认值为 "UnEncrypted"。 */
  Encryption?: string;
  /** 日志保留时间，单位为天。取值范围为[7, 3650]，默认值为 30。 */
  BackupRetentionPeriod?: number;
}

/** 备份存储策略。 */
declare interface StorageStrategyItem {
  /** 存储类型。目前仅支持 "system" - DBS 内置存储。默认值为 "system"。 */
  StorageType?: string | null;
  /** 加密方式。可能的取值为："UnEncrypted" - 非加密存储;"SSE-COS" - 内置加密存储;当该参数用作入参时，默认值为 "UnEncrypted"。 */
  Encryption?: string | null;
  /** 日志保留时间，单位为天。取值范围为[7, 3650]，默认值为 30。 */
  BackupRetentionPeriod?: number | null;
  /** 全量备份存储策略。 */
  FullStorageStrategy?: StorageStrategySingle | null;
  /** 增量备份存储策略。 */
  IncStorageStrategy?: StorageStrategySingle | null;
}

/** 存储策略 */
declare interface StorageStrategySingle {
  /** 存储策略类型。取值：- standard：标准存储- tiered：分级存储 */
  RetentionType?: string | null;
  /** 备份保留天数，取值范围为 7 - 3650。 */
  RetentionPeriod?: number | null;
  /** 分级存储策略。RetentionType 为 tiered 时有效。 */
  TieredStrategy?: StorageTieredStrategy | null;
}

/** 分级存储策略 */
declare interface StorageTieredStrategy {
  /** 低频存储 */
  DayToLowFrequency?: number | null;
  /** 归档存储 */
  DayToArchive?: number | null;
  /** 深度归档存储 */
  DayToDeepArchive?: number | null;
}

/** 标签信息 */
declare interface Tag {
  /** 标签键。 */
  TagKey: string;
  /** 标签值。 */
  TagValue: string;
}

/** 标签过滤条件 */
declare interface TagFilter {
  /** 标签键。 */
  TagKey: string;
  /** 标签值。 */
  TagValue: string[];
}

/** 标签信息 */
declare interface TagInfo {
  /** 标签键。 */
  TagKey: string;
  /** 标签值。 */
  TagValue: string;
}

/** 检测步骤详情 */
declare interface TestItem {
  /** 检测步骤名称 */
  TestName?: string;
  /** 错误码 */
  Code?: number;
  /** 错误信息 */
  Message?: string;
}

declare interface ConfigureBackupPlanRequest {
  /** 备份计划 ID。 */
  BackupPlanId: string;
  /** 备份计划名称。支持数字、英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@,且长度不能超过60。 */
  BackupPlanName?: string;
  /** 全量备份并发数上限。 */
  UpperParallel?: number;
  /** 备份源实例信息。 */
  SourceEndPoint?: BackupEndpoint;
  /** 备份对象信息。 */
  BackupObject?: BackupObject;
  /** 备份策略。 */
  BackupStrategy?: BackupStrategy;
  /** 加密信息。当需要使用SSE-KMS需要传入该值，你可以通过 KMS 的 GenerateDataKey 接口生成。 */
  PlainText?: string;
}

declare interface ConfigureBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupPlanRequest {
  /** 源端数据库类型。当前支持值为: ["mysql","cynosdbmysql","percona","mariadb","tdsqlmysql"]。 */
  DatabaseType: string;
  /** 备份方式。当前仅支持"logical"，即逻辑备份。 */
  BackupMethod?: string;
  /** 规格。当前支持值为: ["micro","small","medium","large","xlarge"]。默认为"small"。 */
  InstanceClass?: string;
  /** 购买时长，单位为月，默认值为1。 */
  Period?: number;
  /** 计费模式。当前仅支持"prepay"，即包年包月。 */
  PayType?: string;
  /** 购买数量。取值范围为[1, 10]，默认值为1。 */
  Count?: number;
  /** 自动续费标识。1 - 开启自动续费；0 - 不开启自动续费。 */
  AutoRenew?: number;
  /** 标签值。 */
  Tags?: Tag[];
}

declare interface CreateBackupPlanResponse {
  /** 订单参数。 */
  OrderId?: string;
  /** 备份计划 ID 列表。单次最多返回 10 个。 */
  BackupPlanIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConnectTestJobRequest {
  /** 备份源实例信息。 */
  Endpoint?: BackupEndpoint;
}

declare interface CreateConnectTestJobResponse {
  /** 连通性任务 ID。 */
  ConnTaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupPlanRequest {
  /** 备份计划 ID。可通过 DescribeBackupPlans 接口获取。 */
  BackupPlanId: string;
}

declare interface DeleteBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupCheckJobRequest {
  /** 备份计划 ID。 */
  BackupPlanId: string;
}

declare interface DescribeBackupCheckJobResponse {
  /** 校验任务状态。可能的取值为："finished" - 已完成; "running" - 进行中。 */
  Status?: string;
  /** 任务进度。取值范围为[0, 100]，表示任务完成的百分比。例如：30表示任务完成30%。 */
  Progress?: number;
  /** 校验是否通过标记。可能的取值为："1" - 校验通过;"0" - 校验未通过。 */
  CheckFlag?: number;
  /** 错误信息。 */
  ErrMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupPlanDetailRequest {
  /** 备份计划 ID。可通过 DescribeBackupPlans 接口获取。 */
  BackupPlanId: string;
}

declare interface DescribeBackupPlanDetailResponse {
  /** 地域。 */
  Region?: string;
  /** 备份计划 ID。 */
  BackupPlanId?: string;
  /** 备份计划名称。 */
  BackupPlanName?: string;
  /** 备份计划状态。取值：creating：创建中notStarted：未启动notConfigured：未配置checkNotPass：校验未通过checkPass：校验通过checking：校验中readyRun：待运行running：运行中fullBacking：全量备份中paused：已暂停isolating：隔离中isolated：已隔离offlining：下线中offlined：已下线completed：已完成 */
  Status?: string;
  /** 源库连接信息列表。 */
  SourceEndPoint?: Endpoint[] | null;
  /** 备份对象信息。 */
  BackupObject?: BackupObject;
  /** 备份策略。 */
  BackupStrategy?: BackupStrategyItem | null;
  /** 备份进度信息。 */
  Progress?: BackupProgress;
  /** 错误异常信息。 */
  ErrorInfo?: ErrorInfo;
  /** 创建时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00。 */
  CreateTime?: string;
  /** 到期时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，后付费计划无到期时间时为空字符串。 */
  ExpireTime?: string;
  /** 下线时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未下线时为空字符串。 */
  OfflineTime?: string;
  /** 自动续费标识。取值：0：不自动续费1：自动续费 */
  AutoRenewFlag?: number;
  /** 主节点连接信息。云数据库实例为实例 ID，云服务器自建为实例 ID:端口，其余为 ip:port。 */
  SourceInfo?: string[];
  /** 从节点连接信息，格式同 SourceInfo。 */
  SetSourceInfo?: string[];
  /** 标签信息列表。未绑定标签时返回 null。 */
  Tags?: TagInfo[] | null;
  /** 上次备份作业时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过备份作业时为空字符串。 */
  LastBackupJobTime?: string;
  /** 上次全量备份作业状态。 */
  LastFullBackupJobStatus?: string;
  /** 上次增量备份作业状态。 */
  LastIncBackupJobStatus?: string;
  /** 下次备份作业时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未确定时为空字符串。 */
  NextBackupJobTime?: string;
  /** 上次恢复作业时间。格式为 YYYY-MM-DD HH:mm:ss，如 2024-01-01 00:00:00，尚未执行过恢复作业时为空字符串。 */
  LastRestoreJobTime?: string;
  /** 上次恢复作业状态。 */
  LastRestoreJobStatus?: string;
  /** 付费信息。 */
  PayInfo?: BackupPlanPayInfo;
  /** 全量备份并行数上限。 */
  UpperParallel?: number;
  /** 带宽上限，单位：MB/s。 */
  UpperBandwidth?: number;
  /** 当前状态下允许的操作。 */
  AllowedActions?: string[] | null;
  /** 可恢复时间范围。 */
  RestoreRange?: RestoreRange;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupPlansRequest {
  /** 过滤条件，备份计划 ID。 */
  BackupPlanId?: string;
  /** 过滤条件，备份计划状态。 */
  Status?: string[];
  /** 过滤条件，数据库类型。 */
  DatabaseType?: string[];
  /** 过滤条件，接入访问类型。 */
  AccessType?: string[];
  /** 过滤条件，备份计划名称。 */
  BackupPlanName?: string;
  /** 过滤条件，标签键值。 */
  TagFilters?: TagFilter[];
  /** 分页参数。取值范围为(0, 100]，默认值为20。 */
  Limit?: number;
  /** 分页参数。默认值为0。 */
  Offset?: number;
}

declare interface DescribeBackupPlansResponse {
  /** 备份计划数量。 */
  TotalCount?: number;
  /** 备份计划详情。 */
  Items?: BackupPlanInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConnectTestResultRequest {
  /** 连通性检测任务 ID。 */
  TaskIds?: number[];
}

declare interface DescribeConnectTestResultResponse {
  /** 任务总数。 */
  TotalCount?: number;
  /** 检测结果详情。 */
  Items?: ConnectTestResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFullBackupSetDetailRequest {
  /** 全量备份集 ID。可通过 DescribeFullBackupSets 接口获取。 */
  BackupSetId: string;
}

declare interface DescribeFullBackupSetDetailResponse {
  /** 全量备份集详情。 */
  BackupSet?: FullBackupSetDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIncrementBackupSetFilesRequest {
  /** 增量备份集 ID。可通过 DescribeIncrementBackupSets 接口获取。 */
  BackupSetId: string;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 10。 */
  Limit?: number;
}

declare interface DescribeIncrementBackupSetFilesResponse {
  /** 文件总数。 */
  TotalCount?: number;
  /** 增量备份文件列表。 */
  BackupFiles?: BackupFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIncrementBackupSetsRequest {
  /** 备份计划 ID。 */
  BackupPlanId: string;
  /** 过滤条件，备份集 ID。 */
  BackupSetId?: string;
  /** 分页参数。取值范围为(0, 100]，默认值为20。 */
  Limit?: number;
  /** 分页参数。默认值为0。 */
  Offset?: number;
}

declare interface DescribeIncrementBackupSetsResponse {
  /** 增量备份集数量。 */
  TotalCount?: number;
  /** 增量备份集信息。 */
  Items?: IncrementBackup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyBackupPlanByUserRequest {
  /** 备份计划 ID。可通过 DescribeBackupPlans 接口获取。 */
  BackupPlanId: string;
}

declare interface DestroyBackupPlanByUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupPlanSourceInfoRequest {
  /** 备份计划 ID。 */
  BackupPlanId: string;
  /** 新的备份源实例信息。 */
  SourceEndPoint: BackupEndpoint;
  /** 新的备份名称。 */
  BackupPlanName?: string;
  /** 新的备份对象信息。 */
  BackupObject?: BackupObject;
  /** 是否立即启动新的备份任务。支持的取值为：1 - 立即启动；0 - 按备份策略配置的时间启动。 */
  BackupNow?: number;
}

declare interface ModifyBackupPlanSourceInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeBackupPlanRequest {
  /** 备份计划 ID。可通过 DescribeBackupPlans 接口获取。 */
  BackupPlanId: string;
  /** 恢复后是否立即发起一次备份。取值：- 0：不立即备份，默认值- 1：立即备份 */
  BackupNow?: number;
}

declare interface ResumeBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartBackupCheckJobRequest {
  /** 备份计划 ID。 */
  BackupPlanId: string;
}

declare interface StartBackupCheckJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartBackupPlanRequest {
  /** 备份计划 ID。 */
  BackupPlanId: string;
}

declare interface StartBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopBackupPlanRequest {
  /** 备份计划 ID。可通过 DescribeBackupPlans 接口获取。 */
  BackupPlanId: string;
}

declare interface StopBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dbs 数据库备份服务} */
declare interface Dbs {
  (): Versions;
  /** 配置备份计划 {@link ConfigureBackupPlanRequest} {@link ConfigureBackupPlanResponse} */
  ConfigureBackupPlan(data: ConfigureBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ConfigureBackupPlanResponse>;
  /** 创建备份计划 {@link CreateBackupPlanRequest} {@link CreateBackupPlanResponse} */
  CreateBackupPlan(data: CreateBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupPlanResponse>;
  /** 创建连通性测试任务 {@link CreateConnectTestJobRequest} {@link CreateConnectTestJobResponse} */
  CreateConnectTestJob(data?: CreateConnectTestJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConnectTestJobResponse>;
  /** 删除备份计划 {@link DeleteBackupPlanRequest} {@link DeleteBackupPlanResponse} */
  DeleteBackupPlan(data: DeleteBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupPlanResponse>;
  /** 查询备份计划预校验结果 {@link DescribeBackupCheckJobRequest} {@link DescribeBackupCheckJobResponse} */
  DescribeBackupCheckJob(data: DescribeBackupCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupCheckJobResponse>;
  /** 查询备份计划详情 {@link DescribeBackupPlanDetailRequest} {@link DescribeBackupPlanDetailResponse} */
  DescribeBackupPlanDetail(data: DescribeBackupPlanDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupPlanDetailResponse>;
  /** 查询备份计划列表 {@link DescribeBackupPlansRequest} {@link DescribeBackupPlansResponse} */
  DescribeBackupPlans(data?: DescribeBackupPlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupPlansResponse>;
  /** 查询连通性检测任务结果 {@link DescribeConnectTestResultRequest} {@link DescribeConnectTestResultResponse} */
  DescribeConnectTestResult(data?: DescribeConnectTestResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConnectTestResultResponse>;
  /** 查询全量备份集详情 {@link DescribeFullBackupSetDetailRequest} {@link DescribeFullBackupSetDetailResponse} */
  DescribeFullBackupSetDetail(data: DescribeFullBackupSetDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFullBackupSetDetailResponse>;
  /** 查询增量备份集文件 {@link DescribeIncrementBackupSetFilesRequest} {@link DescribeIncrementBackupSetFilesResponse} */
  DescribeIncrementBackupSetFiles(data: DescribeIncrementBackupSetFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIncrementBackupSetFilesResponse>;
  /** 查询增量备份集列表 {@link DescribeIncrementBackupSetsRequest} {@link DescribeIncrementBackupSetsResponse} */
  DescribeIncrementBackupSets(data: DescribeIncrementBackupSetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIncrementBackupSetsResponse>;
  /** 立即下线备份计划 {@link DestroyBackupPlanByUserRequest} {@link DestroyBackupPlanByUserResponse} */
  DestroyBackupPlanByUser(data: DestroyBackupPlanByUserRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyBackupPlanByUserResponse>;
  /** 修改备份计划源端信息 {@link ModifyBackupPlanSourceInfoRequest} {@link ModifyBackupPlanSourceInfoResponse} */
  ModifyBackupPlanSourceInfo(data: ModifyBackupPlanSourceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupPlanSourceInfoResponse>;
  /** 恢复备份计划 {@link ResumeBackupPlanRequest} {@link ResumeBackupPlanResponse} */
  ResumeBackupPlan(data: ResumeBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeBackupPlanResponse>;
  /** 创建备份计划预校验任务 {@link StartBackupCheckJobRequest} {@link StartBackupCheckJobResponse} */
  StartBackupCheckJob(data: StartBackupCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartBackupCheckJobResponse>;
  /** 启动备份计划 {@link StartBackupPlanRequest} {@link StartBackupPlanResponse} */
  StartBackupPlan(data: StartBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<StartBackupPlanResponse>;
  /** 暂停备份计划 {@link StopBackupPlanRequest} {@link StopBackupPlanResponse} */
  StopBackupPlan(data: StopBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<StopBackupPlanResponse>;
}

export declare type Versions = ["2021-11-08"];

export default Dbs;
