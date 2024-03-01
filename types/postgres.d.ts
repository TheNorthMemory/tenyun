/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账户信息 */
declare interface AccountInfo {
  /** 实例ID，形如postgres-lnp6j617 */
  DBInstanceId: string;
  /** 帐号 */
  UserName: string;
  /** 帐号备注 */
  Remark: string;
  /** 帐号状态。 1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中 */
  Status: number;
  /** 帐号创建时间 */
  CreateTime: string;
  /** 帐号最后一次更新时间 */
  UpdateTime: string;
}

/** 慢查询分析接口返回的分析详情，按照参数抽象之后进行分类 */
declare interface AnalysisItems {
  /** 慢SQL查询的数据库名 */
  DatabaseName: string;
  /** 慢SQL执行的用户名 */
  UserName: string;
  /** 抽象参数之后的慢SQL */
  NormalQuery: string;
  /** 慢SQL执行的客户端地址 */
  ClientAddr: string;
  /** 在选定时间范围内慢SQL语句执行的次数 */
  CallNum: number;
  /** 在选定时间范围内，慢SQL语句执行的次数占所有慢SQL的比例（小数返回） */
  CallPercent: number;
  /** 在选定时间范围内，慢SQL执行的总时间 */
  CostTime: number;
  /** 在选定时间范围内，慢SQL语句执行的总时间占所有慢SQL的比例（小数返回） */
  CostPercent: number;
  /** 在选定时间范围内，慢SQL语句执行的耗时最短的时间（单位：ms） */
  MinCostTime: number;
  /** 在选定时间范围内，慢SQL语句执行的耗时最长的时间（单位：ms） */
  MaxCostTime: number;
  /** 在选定时间范围内，慢SQL语句执行的耗时平均时间（单位：ms） */
  AvgCostTime: number;
  /** 在选定时间范围内，慢SQL第一条开始执行的时间戳 */
  FirstTime: string;
  /** 在选定时间范围内，慢SQL最后一条开始执行的时间戳 */
  LastTime: string;
}

/** 备份下载限制信息 */
declare interface BackupDownloadRestriction {
  /** 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。 */
  RestrictionType?: string;
  /** vpc限制效力，ALLOW 允许；DENY 拒绝。 */
  VpcRestrictionEffect?: string;
  /** 允许或拒绝下载备份文件的vpcId列表。 */
  VpcIdSet?: string[];
  /** ip限制效力，ALLOW 允许；DENY 拒绝。 */
  IpRestrictionEffect?: string;
  /** 允许或拒绝下载备份文件的ip列表。 */
  IpSet?: string[];
}

/** 备份计划 */
declare interface BackupPlan {
  /** 备份周期 */
  BackupPeriod: string;
  /** 基础备份保留时长 */
  BaseBackupRetentionPeriod: number;
  /** 开始备份的最早时间 */
  MinBackupStartTime: string;
  /** 开始备份的最晚时间 */
  MaxBackupStartTime: string;
}

/** 实例备份统计项 */
declare interface BackupSummary {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 实例日志备份数量。 */
  LogBackupCount: number;
  /** 实例日志备份大小。 */
  LogBackupSize: number;
  /** 手动创建的实例基础备份数量。 */
  ManualBaseBackupCount: number;
  /** 手动创建的实例基础备份大小。 */
  ManualBaseBackupSize: number;
  /** 自动创建的实例基础备份数量。 */
  AutoBaseBackupCount: number;
  /** 自动创建的实例基础备份大小。 */
  AutoBaseBackupSize: number;
  /** 总备份数量 */
  TotalBackupCount: number;
  /** 总备份大小 */
  TotalBackupSize: number;
}

/** 数据库基础备份信息 */
declare interface BaseBackup {
  /** 实例ID。 */
  DBInstanceId?: string;
  /** 备份文件唯一标识。 */
  Id?: string;
  /** 备份文件名称。 */
  Name?: string;
  /** 备份方式：物理备份、逻辑备份。 */
  BackupMethod?: string;
  /** 备份模式：自动备份、手动备份。 */
  BackupMode?: string;
  /** 备份任务状态。 */
  State?: string;
  /** 备份集大小，单位bytes。 */
  Size?: number;
  /** 备份的开始时间。 */
  StartTime?: string;
  /** 备份的结束时间。 */
  FinishTime?: string;
  /** 备份的过期时间。 */
  ExpireTime?: string;
}

/** 数据库实例规格 */
declare interface ClassInfo {
  /** 规格ID */
  SpecCode: string;
  /** CPU核数 */
  CPU: number;
  /** 内存大小，单位：MB */
  Memory: number;
  /** 该规格所支持最大存储容量，单位：GB */
  MaxStorage: number;
  /** 该规格所支持最小存储容量，单位：GB */
  MinStorage: number;
  /** 该规格的预估QPS */
  QPS: number;
}

/** 数据库备份信息 */
declare interface DBBackup {
  /** 备份文件唯一标识 */
  Id: number;
  /** 文件生成的开始时间 */
  StartTime: string;
  /** 文件生成的结束时间 */
  EndTime: string;
  /** 文件大小(K) */
  Size: number;
  /** 策略（0-实例备份；1-多库备份） */
  Strategy: number;
  /** 类型（0-定时） */
  Way: number;
  /** 备份方式（1-完整） */
  Type: number;
  /** 状态（1-创建中；2-成功；3-失败） */
  Status: number;
  /** DB列表 */
  DbList: string[];
  /** 内网下载地址 */
  InternalAddr: string;
  /** 外网下载地址 */
  ExternalAddr: string;
  /** 备份集ID */
  SetId: string | null;
}

/** 描述实例的详细信息 */
declare interface DBInstance {
  /** 实例所属地域，如: ap-guangzhou，对应RegionSet的Region字段。 */
  Region?: string;
  /** 实例所属可用区， 如：ap-guangzhou-3，对应ZoneSet的Zone字段。 */
  Zone?: string;
  /** 私有网络ID，形如vpc-xxxxxxxx。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcEx](https://cloud.tencent.com/document/api/215/1372) ，从接口返回中的unVpcId字段获取。 */
  VpcId?: string;
  /** 私有网络子网ID，形如subnet-xxxxxxxx。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。 */
  SubnetId?: string;
  /** 实例ID。 */
  DBInstanceId?: string;
  /** 实例名称。 */
  DBInstanceName?: string;
  /** 实例状态，分别为：applying（申请中）、init(待初始化)、initing(初始化中)、running(运行中)、limited run（受限运行）、isolating（隔离中）、isolated（已隔离）、recycling（回收中）、recycled（已回收）、job running（任务执行中）、offline（下线）、migrating（迁移中）、expanding（扩容中）、waitSwitch（等待切换）、switching（切换中）、readonly（只读）、restarting（重启中）、network changing（网络变更中）、upgrading（内核版本升级中）、audit-switching（审计状态变更中）、primary-switching（主备切换中） */
  DBInstanceStatus?: string;
  /** 实例分配的内存大小，单位：GB */
  DBInstanceMemory?: number;
  /** 实例分配的存储空间大小，单位：GB */
  DBInstanceStorage?: number;
  /** 实例分配的CPU数量，单位：个 */
  DBInstanceCpu?: number;
  /** 售卖规格ID */
  DBInstanceClass?: string;
  /** PostgreSQL大版本号，版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取，目前支持10，11，12，13，14，15这几个大版本。 */
  DBMajorVersion?: string | null;
  /** PostgreSQL社区大版本+小版本号，如12.4，版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。 */
  DBVersion?: string;
  /** PostgreSQL内核版本号，如v12.7_r1.8，版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。 */
  DBKernelVersion?: string | null;
  /** 实例类型，类型有：primary：主实例readonly：只读实例guard：灾备实例temp：临时实例 */
  DBInstanceType?: string;
  /** 实例版本，目前只支持standard（双机高可用版, 一主一从）。 */
  DBInstanceVersion?: string;
  /** 实例字符集，目前只支持： UTF8 LATIN1 */
  DBCharset?: string;
  /** 实例创建时间。 */
  CreateTime?: string;
  /** 实例执行最后一次更新的时间。 */
  UpdateTime?: string;
  /** 实例到期时间。 */
  ExpireTime?: string;
  /** 实例隔离时间。 */
  IsolatedTime?: string;
  /** 计费模式：prepaid：包年包月,预付费postpaid：按量计费，后付费 */
  PayType?: string;
  /** 是否自动续费：0：手动续费1：自动续费默认值：0 */
  AutoRenew?: number;
  /** 实例网络连接信息。 */
  DBInstanceNetInfo?: DBInstanceNetInfo[];
  /** 机器类型。 */
  Type?: string;
  /** 用户的AppId。 */
  AppId?: number;
  /** 实例的Uid。 */
  Uid?: number;
  /** 项目ID。 */
  ProjectId?: number;
  /** 实例绑定的标签信息。 */
  TagList?: Tag[] | null;
  /** 主实例信息，仅在实例为只读实例时返回。 */
  MasterDBInstanceId?: string | null;
  /** 只读实例数量。 */
  ReadOnlyInstanceNum?: number | null;
  /** 只读实例在只读组中的状态。 */
  StatusInReadonlyGroup?: string | null;
  /** 下线时间。 */
  OfflineTime?: string | null;
  /** 实例的节点信息。 */
  DBNodeSet?: DBNode[] | null;
  /** 实例是否支持TDE数据加密：0：不支持1：支持默认值：0TDE数据加密可参考[数据透明加密概述](https://cloud.tencent.com/document/product/409/71748) */
  IsSupportTDE?: number | null;
  /** 数据库引擎，支持：postgresql：云数据库PostgreSQLmssql_compatible：MSSQL兼容-云数据库PostgreSQL默认值：postgresql */
  DBEngine?: string | null;
  /** 数据库引擎的配置信息，配置格式如下：{"$key1":"$value1", "$key2":"$value2"}各引擎支持如下：mssql_compatible引擎：migrationMode：数据库模式，可选参数，可取值：single-db（单数据库模式），multi-db（多数据库模式）。默认为single-db。defaultLocale：排序区域规则，可选参数，在初始化后不可修改，默认为en_US，可选值如下："af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN"。serverCollationName：排序规则名称，可选参数，在初始化后不可修改，默认为sql_latin1_general_cp1_ci_as，可选值如下："bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as"。 */
  DBEngineConfig?: string | null;
  /** 实例网络信息列表（此字段已废弃） */
  NetworkAccessList?: NetworkAccess[] | null;
  /** 实例是否支持Ipv6：0：否1：是默认值：0 */
  SupportIpv6?: number;
}

/** 描述实例的网络连接信息。 */
declare interface DBInstanceNetInfo {
  /** DNS域名 */
  Address: string;
  /** IP地址 */
  Ip: string;
  /** 连接Port地址 */
  Port: number;
  /** 网络类型，1、inner（基础网络内网地址）；2、private（私有网络内网地址）；3、public（基础网络或私有网络的外网地址）； */
  NetType: string;
  /** 网络连接状态，1、initing（未开通）；2、opened（已开通）；3、closed（已关闭）；4、opening（开通中）；5、closing（关闭中）； */
  Status: string;
  /** 私有网络ID */
  VpcId: string | null;
  /** 子网ID */
  SubnetId: string | null;
  /** 连接数据库的协议类型，当前支持：postgresql、mssql（MSSQL兼容语法） */
  ProtocolType: string | null;
}

/** 描述实例节点信息，包括节点类型、节点所在可用区。 */
declare interface DBNode {
  /** 节点类型，值可以为：Primary，代表主节点；Standby，代表备节点。 */
  Role: string;
  /** 节点所在可用区，例如 ap-guangzhou-1。 */
  Zone: string;
}

/** 慢SQL 统计分析接口返回详情 */
declare interface Detail {
  /** 输入时间范围内所有慢sql执行的总时间，单位毫秒（ms） */
  TotalTime: number;
  /** 输入时间范围内所有慢sql总条数 */
  TotalCallNum: number;
  /** 慢SQL统计分析列表 */
  AnalysisItems: AnalysisItems[] | null;
}

/** 慢SQL耗时分段分析 */
declare interface DurationAnalysis {
  /** 慢SQL耗时，时段 */
  TimeSegment: string;
  /** 对应时段区间慢SQL 条数 */
  Count: number;
}

/** KMS密钥信息 */
declare interface EncryptionKey {
  /** KMS实例加密的KeyId。 */
  KeyId: string | null;
  /** KMS实例加密Key的别名。 */
  KeyAlias: string | null;
  /** 实例加密密钥DEK的密文。 */
  DEKCipherTextBlob: string | null;
  /** 密钥是否启用，1-启用， 0-未启用。 */
  IsEnabled: number | null;
  /** KMS密钥所在地域。 */
  KeyRegion: string | null;
  /** DEK密钥创建时间。 */
  CreateTime: string | null;
}

/** 错误日志详情 */
declare interface ErrLogDetail {
  /** 用户名 */
  UserName: string;
  /** 数据库名字 */
  Database: string;
  /** 错误发生时间 */
  ErrTime: string;
  /** 错误消息 */
  ErrMsg: string;
}

/** 参数修改事件信息 */
declare interface EventInfo {
  /** 参数名 */
  ParamName: string | null;
  /** 原参数值 */
  OldValue: string | null;
  /** 本次修改期望参数值 */
  NewValue: string | null;
  /** 后台参数修改开始时间 */
  ModifyTime: string | null;
  /** 后台参数生效开始时间 */
  EffectiveTime: string | null;
  /** 修改状态 */
  State: string | null;
  /** 操作者（一般为用户sub UIN） */
  Operator: string | null;
  /** 时间日志。 */
  EventLog: string | null;
}

/** 修改参数条目，以参数为维度 */
declare interface EventItem {
  /** 参数名 */
  ParamName: string | null;
  /** 修改事件数 */
  EventCount: number | null;
  /** 修改时间详情 */
  EventDetail: EventInfo[] | null;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称等* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 过滤键的名称。 */
  Name?: string;
  /** 一个或者多个过滤值。 */
  Values?: string[];
}

/** 数据库日志备份信息 */
declare interface LogBackup {
  /** 实例ID。 */
  DBInstanceId?: string;
  /** 备份文件唯一标识。 */
  Id?: string;
  /** 备份文件名称。 */
  Name?: string;
  /** 备份方式：物理备份、逻辑备份。 */
  BackupMethod?: string;
  /** 备份模式：自动备份、手动备份。 */
  BackupMode?: string;
  /** 备份任务状态。 */
  State?: string;
  /** 备份集大小，单位bytes。 */
  Size?: number;
  /** 备份的开始时间。 */
  StartTime?: string;
  /** 备份的结束时间。 */
  FinishTime?: string;
  /** 备份的过期时间。 */
  ExpireTime?: string;
}

/** 网络相关信息。（该数据结构已废弃，网络相关信息使用DBInstanceNetInfo） */
declare interface NetworkAccess {
  /** 网络资源id，实例id或RO组id */
  ResourceId: string | null;
  /** 资源类型，1-实例 2-RO组 */
  ResourceType: number | null;
  /** 私有网络ID */
  VpcId: string | null;
  /** IPV4地址 */
  Vip: string | null;
  /** IPV6地址 */
  Vip6: string | null;
  /** 访问端口 */
  Vport: number | null;
  /** 子网ID */
  SubnetId: string | null;
  /** 网络状态，1-申请中，2-使用中，3-删除中，4-已删除 */
  VpcStatus: number | null;
}

/** 单条SlowQuery信息 */
declare interface NormalQueryItem {
  /** 用户名 */
  UserName: string;
  /** 调用次数 */
  Calls: number;
  /** 粒度点 */
  CallsGrids: number[];
  /** 花费总时间 */
  CostTime: number;
  /** 影响的行数 */
  Rows: number;
  /** 花费最小时间 */
  MinCostTime: number;
  /** 花费最大时间 */
  MaxCostTime: number;
  /** 最早一条慢SQL时间 */
  FirstTime: string;
  /** 最晚一条慢SQL时间 */
  LastTime: string;
  /** 读共享内存块数 */
  SharedReadBlks: number;
  /** 写共享内存块数 */
  SharedWriteBlks: number;
  /** 读io总耗时 */
  ReadCostTime: number;
  /** 写io总耗时 */
  WriteCostTime: number;
  /** 数据库名字 */
  DatabaseName: string;
  /** 脱敏后的慢SQL */
  NormalQuery: string;
}

/** 批量修改参数 */
declare interface ParamEntry {
  /** 参数名 */
  Name: string;
  /** 修改参数值。入参均以字符串形式传递，例如：小数”0.1“、整数”1000“、枚举”replica“ */
  ExpectedValue: string;
}

/** 参数详情 */
declare interface ParamInfo {
  /** 参数ID */
  ID: number | null;
  /** 参数名 */
  Name: string | null;
  /** 参数值类型：integer（整型）、real（浮点型）、bool（布尔型）、enum（枚举类型）、mutil_enum（枚举类型、支持多选）。当参数类型为integer（整型）、real（浮点型）时，参数的取值范围根据返回值的Max、Min确定； 当参数类型为bool（布尔型）时，参数设置值取值范围是true | false； 当参数类型为enum（枚举类型）、mutil_enum（多枚举类型）时，参数的取值范围由返回值中的EnumValue确定。 */
  ParamValueType: string | null;
  /** 参数值 单位。参数没有单位时，该字段返回空 */
  Unit: string | null;
  /** 参数默认值。以字符串形式返回 */
  DefaultValue: string | null;
  /** 参数当前运行值。以字符串形式返回 */
  CurrentValue: string | null;
  /** 数值类型（integer、real）参数，取值下界 */
  Max: number | null;
  /** 枚举类型参数，取值范围 */
  EnumValue: string[] | null;
  /** 数值类型（integer、real）参数，取值上界 */
  Min: number | null;
  /** 参数中文描述 */
  ParamDescriptionCH: string | null;
  /** 参数英文描述 */
  ParamDescriptionEN: string | null;
  /** 参数修改，是否重启生效。（true为需要，false为不需要） */
  NeedReboot: boolean | null;
  /** 参数中文分类 */
  ClassificationCN: string | null;
  /** 参数英文分类 */
  ClassificationEN: string | null;
  /** 是否和规格相关。（true为相关，false为不想关） */
  SpecRelated: boolean | null;
  /** 是否为重点参数。（true为重点参数，修改是需要重点关注，可能会影响实例性能） */
  Advanced: boolean | null;
  /** 参数最后一次修改时间 */
  LastModifyTime: string | null;
  /** 参数存在主备制约，0：无主备制约关系，1:备机参数值需比主机大，2:主机参数值需比备机大 */
  StandbyRelated: number | null;
  /** 参数版本关联信息，存储具体内核版本下的具体参数信息 */
  VersionRelationSet: ParamVersionRelation[] | null;
  /** 参数规格关联信息，存储具体规格下具体的参数信息 */
  SpecRelationSet: ParamSpecRelation[] | null;
}

/** 描述各规格下的参数信息 */
declare interface ParamSpecRelation {
  /** 参数名称 */
  Name: string | null;
  /** 参数信息所属规格 */
  Memory: string | null;
  /** 参数在该规格下的默认值 */
  Value: string | null;
  /** 参数值单位。参数没有单位时，该字段返回空 */
  Unit: string | null;
  /** 数值类型（integer、real）参数，取值上界 */
  Max: number | null;
  /** 数值类型（integer、real）参数，取值下界 */
  Min: number | null;
  /** 枚举类型参数，取值范围 */
  EnumValue: string[] | null;
}

/** 描述各版本下的参数信息 */
declare interface ParamVersionRelation {
  /** 参数名称 */
  Name: string | null;
  /** 参数信息所属内核版本 */
  DBKernelVersion: string | null;
  /** 参数在该版本该规格下的默认值 */
  Value: string | null;
  /** 参数值单位。参数没有单位时，该字段返回空 */
  Unit: string | null;
  /** 数值类型（integer、real）参数，取值上界 */
  Max: number | null;
  /** 数值类型（integer、real）参数，取值下界 */
  Min: number | null;
  /** 枚举类型参数，取值范围 */
  EnumValue: string[] | null;
}

/** 参数模板的基本信息 */
declare interface ParameterTemplate {
  /** 参数模板ID */
  TemplateId: string;
  /** 参数模板名称 */
  TemplateName: string;
  /** 参数模板适用的数据库版本 */
  DBMajorVersion: string;
  /** 参数模板适用的数据库引擎 */
  DBEngine: string;
  /** 参数模板描述 */
  TemplateDescription: string;
}

/** 订单详情 */
declare interface PgDeal {
  /** 订单名 */
  DealName: string;
  /** 所属用户 */
  OwnerUin: string;
  /** 订单涉及多少个实例 */
  Count: number;
  /** 付费模式。1-预付费；0-后付费 */
  PayMode: number;
  /** 异步任务流程ID */
  FlowId: number;
  /** 实例ID数组 */
  DBInstanceIdSet: string[];
}

/** 安全组规则信息 */
declare interface PolicyRule {
  /** 策略，ACCEPT 或者 DROP */
  Action?: string;
  /** 来源或目的 IP 或 IP 段，例如172.16.0.0/12 */
  CidrIp?: string;
  /** 端口 */
  PortRange?: string;
  /** 网络协议，支持 UDP、TCP 等 */
  IpProtocol?: string;
  /** 规则描述 */
  Description?: string;
}

/** 慢SQL查询接口返回 慢SQL列表详情 */
declare interface RawSlowQuery {
  /** 慢SQL 语句 */
  RawQuery: string;
  /** 慢SQL 查询的数据库 */
  DatabaseName: string;
  /** 慢SQL执行 耗时 */
  Duration: number;
  /** 执行慢SQL的客户端 */
  ClientAddr: string;
  /** 执行慢SQL的用户名 */
  UserName: string;
  /** 慢SQL执行的开始时间 */
  SessionStartTime: string;
}

/** 只读组信息 */
declare interface ReadOnlyGroup {
  /** 只读组标识 */
  ReadOnlyGroupId: string | null;
  /** 只读组名字 */
  ReadOnlyGroupName: string | null;
  /** 项目id */
  ProjectId: number | null;
  /** 主实例id */
  MasterDBInstanceId: string | null;
  /** 最小保留实例数 */
  MinDelayEliminateReserve: number | null;
  /** 延迟空间大小阈值 */
  MaxReplayLatency: number;
  /** 延迟大小开关 */
  ReplayLatencyEliminate: number;
  /** 延迟时间大小阈值 */
  MaxReplayLag: number;
  /** 延迟时间开关 */
  ReplayLagEliminate: number;
  /** 虚拟网络id */
  VpcId: string;
  /** 子网id */
  SubnetId: string | null;
  /** 地域id */
  Region: string;
  /** 地区id */
  Zone: string;
  /** 状态 */
  Status: string;
  /** 实例详细信息 */
  ReadOnlyDBInstanceList: DBInstance[];
  /** 自动负载均衡开关 */
  Rebalance: number;
  /** 网络信息 */
  DBInstanceNetInfo: DBInstanceNetInfo[];
  /** 只读组网络信息列表（此字段已废弃） */
  NetworkAccessList: NetworkAccess[] | null;
}

/** 描述地域的编码和状态等信息 */
declare interface RegionInfo {
  /** 该地域对应的英文名称 */
  Region: string;
  /** 该地域对应的中文名称 */
  RegionName: string;
  /** 该地域对应的数字编号 */
  RegionId: number;
  /** 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用 */
  RegionState: string;
  /** 该地域是否支持国际站售卖，0：不支持，1：支持 */
  SupportInternational: number | null;
}

/** 安全组信息 */
declare interface SecurityGroup {
  /** 项目Id */
  ProjectId: number;
  /** 创建时间 */
  CreateTime: string;
  /** 入站规则 */
  Inbound: PolicyRule[];
  /** 出站规则 */
  Outbound: PolicyRule[];
  /** 安全组ID */
  SecurityGroupId: string;
  /** 安全组名称 */
  SecurityGroupName: string;
  /** 安全组备注 */
  SecurityGroupDescription: string;
}

/** serverless账号描述 */
declare interface ServerlessDBAccount {
  /** 用户名 */
  DBUser: string | null;
  /** 密码 */
  DBPassword: string | null;
  /** 连接数限制 */
  DBConnLimit: number | null;
}

/** serverless实例描述 */
declare interface ServerlessDBInstance {
  /** 实例id，唯一标识符 */
  DBInstanceId?: string | null;
  /** 实例名称 */
  DBInstanceName?: string | null;
  /** 实例状态 */
  DBInstanceStatus?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 可用区 */
  Zone?: string | null;
  /** 项目id */
  ProjectId?: number | null;
  /** 私有网络Id */
  VpcId?: string | null;
  /** 子网id */
  SubnetId?: string | null;
  /** 字符集 */
  DBCharset?: string | null;
  /** 数据库版本 */
  DBVersion?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 实例网络信息 */
  DBInstanceNetInfo?: ServerlessDBInstanceNetInfo[] | null;
  /** 实例账户信息 */
  DBAccountSet?: ServerlessDBAccount[] | null;
  /** 实例下的db信息 */
  DBDatabaseList?: string[] | null;
  /** 实例绑定的标签数组 */
  TagList?: Tag[] | null;
  /** 数据库内核版本 */
  DBKernelVersion?: string | null;
  /** 数据库主要版本 */
  DBMajorVersion?: string | null;
}

/** serverless实例网络信息描述 */
declare interface ServerlessDBInstanceNetInfo {
  /** 地址 */
  Address: string | null;
  /** ip地址 */
  Ip: string | null;
  /** 端口号 */
  Port: number | null;
  /** 状态 */
  Status: string | null;
  /** 网络类型 */
  NetType: string | null;
}

/** 慢查询详情 */
declare interface SlowlogDetail {
  /** 花费总时间 */
  TotalTime: number;
  /** 调用总次数 */
  TotalCalls: number;
  /** 脱敏后的慢SQL列表 */
  NormalQueries: NormalQueryItem[];
}

/** 描述某个地域下某个可用区的可售卖规格详细信息。 */
declare interface SpecInfo {
  /** 地域英文编码，对应RegionSet的Region字段 */
  Region: string;
  /** 区域英文编码，对应ZoneSet的Zone字段 */
  Zone: string;
  /** 规格详细信息列表 */
  SpecItemInfoList: SpecItemInfo[];
  /** 支持KMS的地域 */
  SupportKMSRegions: string[] | null;
}

/** 描述一种规格的信息 */
declare interface SpecItemInfo {
  /** 规格ID */
  SpecCode: string;
  /** PostgreSQL的版本编号 */
  Version: string;
  /** 内核编号对应的完整版本名称 */
  VersionName: string;
  /** CPU核数 */
  Cpu: number;
  /** 内存大小，单位：MB */
  Memory: number;
  /** 该规格所支持最大存储容量，单位：GB */
  MaxStorage: number;
  /** 该规格所支持最小存储容量，单位：GB */
  MinStorage: number;
  /** 该规格的预估QPS */
  Qps: number;
  /** 【该字段废弃】 */
  Pid: number;
  /** 机器类型 */
  Type: string;
  /** PostgreSQL的主要版本编号 */
  MajorVersion: string | null;
  /** PostgreSQL的内核版本编号 */
  KernelVersion: string | null;
  /** 是否支持TDE数据加密功能，0-不支持，1-支持 */
  IsSupportTDE: number | null;
}

/** 实例绑定的标签信息，包含标签键TagKey和标签值TagValue */
declare interface Tag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 数据库版本号信息 */
declare interface Version {
  /** 数据库引擎，支持：1、postgresql（云数据库PostgreSQL）；2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）； */
  DBEngine: string;
  /** 数据库版本，例如：12.4 */
  DBVersion: string;
  /** 数据库主要版本，例如：12 */
  DBMajorVersion: string;
  /** 数据库内核版本，例如：v12.4_r1.3 */
  DBKernelVersion: string;
  /** 数据库内核支持的特性列表。例如，TDE：支持数据加密。 */
  SupportedFeatureNames: string[];
  /** 数据库版本状态，包括：AVAILABLE：可用；DEPRECATED：已弃用。 */
  Status: string;
  /** 该数据库版本（DBKernelVersion）可以升级到的版本号列表。 */
  AvailableUpgradeTarget: string[];
}

/** 数据库Xlog信息 */
declare interface Xlog {
  /** 备份文件唯一标识 */
  Id: number;
  /** 文件生成的开始时间 */
  StartTime: string;
  /** 文件生成的结束时间 */
  EndTime: string;
  /** 内网下载地址 */
  InternalAddr: string;
  /** 外网下载地址 */
  ExternalAddr: string;
  /** 备份文件大小 */
  Size: number;
}

/** 描述可用区的编码和状态信息 */
declare interface ZoneInfo {
  /** 该可用区的英文名称 */
  Zone: string;
  /** 该可用区的中文名称 */
  ZoneName: string;
  /** 该可用区对应的数字编号 */
  ZoneId: number;
  /** 可用状态包含，UNAVAILABLE：不可用。AVAILABLE：可用。SELLOUT：售罄。SUPPORTMODIFYONLY：支持变配。 */
  ZoneState: string;
  /** 该可用区是否支持Ipv6 */
  ZoneSupportIpv6: number;
  /** 该可用区对应的备可用区集合 */
  StandbyZoneSet: string[] | null;
}

declare interface AddDBInstanceToReadOnlyGroupRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 只读组ID */
  ReadOnlyGroupId: string;
}

declare interface AddDBInstanceToReadOnlyGroupResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloneDBInstanceRequest {
  /** 克隆的源实例ID。 */
  DBInstanceId: string;
  /** 售卖规格码。该参数可以通过调用[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)的返回值中的SpecCode字段来获取。 */
  SpecCode: string;
  /** 实例容量大小，单位：GB。 */
  Storage: number;
  /** 购买时长，单位：月。预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36后付费：只支持1 */
  Period: number;
  /** 续费标记：0：手动续费1：自动续费默认值：0 */
  AutoRenewFlag: number;
  /** 私有网络ID，形如vpc-xxxxxxxx。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcEx](https://cloud.tencent.com/document/api/215/1372) ，从接口返回中的unVpcId字段获取。 */
  VpcId: string;
  /** 私有网络子网ID，形如subnet-xxxxxxxx。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。 */
  SubnetId: string;
  /** 新购的实例名称，仅支持长度小于60的中文/英文/数字/"_"/"-"，不指定实例名称则默认显示"未命名"。 */
  Name?: string;
  /** 实例计费类型，目前支持：PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：后付费，即按量计费默认值：PREPAID */
  InstanceChargeType?: string;
  /** 实例所属安全组，该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 项目ID。 */
  ProjectId?: number;
  /** 实例需要绑定的Tag信息，默认为空；可以通过调用 [DescribeTags](https://cloud.tencent.com/document/api/651/35316) 返回值中的 Tags 字段来获取。 */
  TagList?: Tag[];
  /** 实例节点部署信息，支持多可用区部署时需要指定每个节点的部署可用区信息。可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。 */
  DBNodeSet?: DBNode[];
  /** 是否自动使用代金券：0：否1：是默认值：0 */
  AutoVoucher?: number;
  /** 代金券ID列表。 */
  VoucherIds?: string;
  /** 活动ID。 */
  ActivityId?: number;
  /** 基础备份集ID。 */
  BackupSetId?: string;
  /** 恢复时间点。 */
  RecoveryTargetTime?: string;
  /** 主从同步方式，支持： Semi-sync：半同步Async：异步主实例默认值：Semi-sync只读实例默认值：Async */
  SyncMode?: string;
}

declare interface CloneDBInstanceResponse {
  /** 订单号。 */
  DealName?: string | null;
  /** 订单流水号。 */
  BillId?: string | null;
  /** 克隆出的新实例ID，当前只支持后付费返回该值。 */
  DBInstanceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseDBExtranetAccessRequest {
  /** 实例ID，形如postgres-6r233v55 */
  DBInstanceId: string;
  /** 是否关闭Ipv6外网，1：是，0：否 */
  IsIpv6?: number;
}

declare interface CloseDBExtranetAccessResponse {
  /** 异步任务流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseServerlessDBExtranetAccessRequest {
  /** 实例唯一标识符 */
  DBInstanceId?: string;
  /** 实例名称 */
  DBInstanceName?: string;
}

declare interface CloseServerlessDBExtranetAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBaseBackupRequest {
  /** 实例ID。 */
  DBInstanceId: string;
}

declare interface CreateBaseBackupResponse {
  /** 基础备份集ID */
  BaseBackupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstanceNetworkAccessRequest {
  /** 实例ID，形如：postgres-6bwgamo3。 */
  DBInstanceId: string;
  /** 私有网络统一 ID。 */
  VpcId: string;
  /** 子网ID。 */
  SubnetId: string;
  /** 是否指定分配vip true-指定分配 false-自动分配。 */
  IsAssignVip: boolean;
  /** 目标VIP地址。 */
  Vip?: string;
}

declare interface CreateDBInstanceNetworkAccessResponse {
  /** 流程ID。 */
  FlowId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBInstancesRequest {
  /** 售卖规格ID。该参数可以通过调用DescribeClasses的返回值中的SpecCode字段来获取。 */
  SpecCode: string;
  /** 实例容量大小，单位：GB。 */
  Storage: number;
  /** 一次性购买的实例数量。取值1-100 */
  InstanceCount: number;
  /** 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。 */
  Period: number;
  /** 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 项目ID。 */
  ProjectId?: number;
  /** PostgreSQL社区大版本+小版本号。一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新小版本号。 */
  DBVersion?: string;
  /** 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。默认值：PREPAID。 */
  InstanceChargeType?: string;
  /** 是否自动使用代金券。1（是），0（否），默认不使用。 */
  AutoVoucher?: number;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 私有网络ID。 */
  VpcId?: string;
  /** 私有网络子网ID。 */
  SubnetId?: string;
  /** 续费标记：0-正常续费（默认）；1-自动续费； */
  AutoRenewFlag?: number;
  /** 活动ID */
  ActivityId?: number;
  /** 实例名(后续支持) */
  Name?: string;
  /** 是否需要支持Ipv6，1：是，0：否 */
  NeedSupportIpv6?: number;
  /** 实例需要绑定的Tag信息，默认为空 */
  TagList?: Tag[];
  /** 安全组id */
  SecurityGroupIds?: string[];
  /** PostgreSQL大版本号（该参数当前必传），版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。目前支持10，11，12，13，14，15这几个大版本，详情见[内核版本概述](https://cloud.tencent.com/document/product/409/67018)。输入该参数时，会基于此大版本号创建对应的最新小版本的最新内核版本号实例。 */
  DBMajorVersion?: string;
  /** PostgreSQL内核版本号。一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新内核版本号。 */
  DBKernelVersion?: string;
}

declare interface CreateDBInstancesResponse {
  /** 订单号列表。每个实例对应一个订单号。 */
  DealNames?: string[];
  /** 冻结流水号 */
  BillId?: string;
  /** 创建成功的实例ID集合，只在后付费情景下有返回值 */
  DBInstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstancesRequest {
  /** 实例所属主可用区， 如：ap-guangzhou-3；若需要支持多可用区，在DBNodeSet.N字段中进行添加主可用区和备可用区信息；可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 售卖规格码。该参数可以通过调用[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)的返回值中的SpecCode字段来获取。 */
  SpecCode: string;
  /** 实例容量大小，单位：GB。 */
  Storage: number;
  /** 购买实例数量，取值范围：[1-10]。一次性购买支持最大数量10个，若超过该数量，可进行多次调用进行购买。 */
  InstanceCount: number;
  /** 购买时长，单位：月。预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36后付费：只支持1 */
  Period: number;
  /** 实例字符集，目前只支持： UTF8 LATIN1 */
  Charset: string;
  /** 实例根账号用户名，具体规范如下：用户名需要1-16个字符，只能由字母、数字或下划线组成不能为postgres不能由数字和pg_开头所有规则均不区分大小写 */
  AdminName: string;
  /** 实例根账号用户名对应的密码，长度8 ~ 32位，推荐使用12位以上的密码;不能以" / "开头;必须包含以下四项，字符种类:小写字母： [a ~ z]大写字母：[A ～ Z]数字：0 - 9特殊字符：()`~!@#$%^&*-+=_|{}[]:;'<>,.?/ */
  AdminPassword: string;
  /** PostgreSQL大版本号（该参数当前必传），版本信息可从[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)获取。目前支持10，11，12，13，14，15这几个大版本，详情见[内核版本概述](https://cloud.tencent.com/document/product/409/67018)。输入该参数时，会基于此大版本号创建对应的最新小版本的最新内核版本号实例。 */
  DBMajorVersion?: string;
  /** PostgreSQL社区大版本+小版本号。一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新小版本号。 */
  DBVersion?: string;
  /** PostgreSQL内核版本号。一般场景不推荐传入该参数。如需指定，只能传当前大版本号下最新内核版本号。 */
  DBKernelVersion?: string;
  /** 实例计费类型，目前支持：PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：后付费，即按量计费默认值：PREPAID */
  InstanceChargeType?: string;
  /** 私有网络ID，形如vpc-xxxxxxxx（该参数当前必传）。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcEx](https://cloud.tencent.com/document/api/215/1372) ，从接口返回中的unVpcId字段获取。 */
  VpcId?: string;
  /** 私有网络子网ID，形如subnet-xxxxxxxx（该参数当前必传）。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。 */
  SubnetId?: string;
  /** 实例节点部署信息，支持多可用区部署时需要指定每个节点的部署可用区信息。可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。 */
  DBNodeSet?: DBNode[];
  /** 续费标记：0：手动续费1：自动续费默认值：0 */
  AutoRenewFlag?: number;
  /** 是否自动使用代金券：0：否1：是默认值：0 */
  AutoVoucher?: number;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 项目ID。 */
  ProjectId?: number;
  /** 活动ID。 */
  ActivityId?: number;
  /** 实例名称，仅支持长度小于60的中文/英文/数字/"_"/"-"，不指定实例名称则默认显示"未命名"。 */
  Name?: string;
  /** 实例需要绑定的Tag信息，默认为空；可以通过调用 [DescribeTags](https://cloud.tencent.com/document/api/651/35316) 返回值中的 Tags 字段来获取。 */
  TagList?: Tag[];
  /** 实例所属安全组，该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 是否需要支持数据透明加密：0：否1：是默认值：0参考[数据透明加密概述](https://cloud.tencent.com/document/product/409/71748) */
  NeedSupportTDE?: number;
  /** 自定义密钥的KeyId，若选择自定义密匙加密，则需要传入自定义密匙的KeyId，KeyId是CMK的唯一标识。KeyId创建获取相关参考[开启透明数据加密](https://cloud.tencent.com/document/product/409/71749) */
  KMSKeyId?: string;
  /** 使用KMS服务的地域，KMSRegion为空默认使用本地域的KMS，本地域不支持的情况下需自选其他KMS支持的地域。KMSRegion相关介绍参考[开启透明数据加密](https://cloud.tencent.com/document/product/409/71749) */
  KMSRegion?: string;
  /** 数据库引擎，支持：postgresql：云数据库PostgreSQLmssql_compatible：MSSQL兼容-云数据库PostgreSQL默认值：postgresql */
  DBEngine?: string;
  /** 数据库引擎的配置信息，配置格式如下：{"$key1":"$value1", "$key2":"$value2"}各引擎支持如下：mssql_compatible引擎：migrationMode：数据库模式，可选参数，可取值：single-db（单数据库模式），multi-db（多数据库模式）。默认为single-db。defaultLocale：排序区域规则，可选参数，在初始化后不可修改，默认为en_US，可选值如下："af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN"。serverCollationName：排序规则名称，可选参数，在初始化后不可修改，默认为sql_latin1_general_cp1_ci_as，可选值如下："bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as"。 */
  DBEngineConfig?: string;
  /** 主从同步方式，支持： Semi-sync：半同步Async：异步主实例默认值：Semi-sync只读实例默认值：Async */
  SyncMode?: string;
  /** 是否需要支持Ipv6：0：否1：是默认值：0 */
  NeedSupportIpv6?: number;
}

declare interface CreateInstancesResponse {
  /** 订单号列表。每个实例对应一个订单号。 */
  DealNames?: string[];
  /** 冻结流水号。 */
  BillId?: string;
  /** 创建成功的实例ID集合，只在后付费情景下有返回值。 */
  DBInstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateParameterTemplateRequest {
  /** 模板名称，长度为1～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@ */
  TemplateName: string;
  /** 数据库大版本号，例如：11，12，13 */
  DBMajorVersion: string;
  /** 数据库引擎，例如：postgresql，mssql_compatible */
  DBEngine: string;
  /** 参数模板描述，长度为0～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@ */
  TemplateDescription?: string;
}

declare interface CreateParameterTemplateResponse {
  /** 参数模板ID，用于唯一确认参数模板 */
  TemplateId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReadOnlyDBInstanceRequest {
  /** 实例所属主可用区， 如：ap-guangzhou-3；可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 只读实例的主实例ID。 */
  MasterDBInstanceId: string;
  /** 售卖规格码。该参数可以通过调用[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)的返回值中的SpecCode字段来获取。 */
  SpecCode: string;
  /** 实例容量大小，单位：GB。 */
  Storage: number;
  /** 购买实例数量，取值范围：[1-10]。一次性购买支持最大数量10个，若超过该数量，可进行多次调用进行购买。 */
  InstanceCount: number;
  /** 购买时长，单位：月。预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36后付费：只支持1 */
  Period: number;
  /** 私有网络ID，形如vpc-xxxxxxxx。有效的VpcId可通过登录控制台查询；也可以调用接口 [DescribeVpcEx](https://cloud.tencent.com/document/api/215/1372) ，从接口返回中的unVpcId字段获取。 */
  VpcId?: string;
  /** 私有网络子网ID，形如subnet-xxxxxxxx。有效的私有网络子网ID可通过登录控制台查询；也可以调用接口 [DescribeSubnets ](https://cloud.tencent.com/document/api/215/15784)，从接口返回中的unSubnetId字段获取。 */
  SubnetId?: string;
  /** 实例计费类型，目前支持：PREPAID：预付费，即包年包月。POSTPAID_BY_HOUR：后付费，即按量计费。默认值：PREPAID。如果主实例为后付费，只读实例必须也为后付费。 */
  InstanceChargeType?: string;
  /** 是否自动使用代金券：0：否1：是默认值：0 */
  AutoVoucher?: number;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 续费标记：0：手动续费1：自动续费默认值：0 */
  AutoRenewFlag?: number;
  /** 项目ID。 */
  ProjectId?: number;
  /** 优惠活动ID */
  ActivityId?: number;
  /** 只读组ID。 */
  ReadOnlyGroupId?: string;
  /** 实例需要绑定的Tag信息，默认为空；可以通过调用 [DescribeTags](https://cloud.tencent.com/document/api/651/35316) 返回值中的 Tags 字段来获取。 */
  TagList?: Tag;
  /** 实例所属安全组，该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 是否需要支持Ipv6：0：否1：是默认值：0 */
  NeedSupportIpv6?: number;
  /** 实例名(后续支持) */
  Name?: string;
  /** 【废弃】不再需要指定，内核版本号与主实例保持一致 */
  DBVersion?: string;
}

declare interface CreateReadOnlyDBInstanceResponse {
  /** 订单号列表。每个实例对应一个订单号 */
  DealNames?: string[];
  /** 冻结流水号 */
  BillId?: string;
  /** 创建成功的实例ID集合，只在后付费情景下有返回值 */
  DBInstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReadOnlyGroupNetworkAccessRequest {
  /** RO组ID，形如：pgro-4t9c6g7k。 */
  ReadOnlyGroupId: string;
  /** 私有网络统一 ID。 */
  VpcId: string;
  /** 子网ID。 */
  SubnetId: string;
  /** 是否指定分配vip true-指定分配 false-自动分配。 */
  IsAssignVip: boolean;
  /** 目标VIP地址。 */
  Vip?: string;
}

declare interface CreateReadOnlyGroupNetworkAccessResponse {
  /** 流程ID。 */
  FlowId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReadOnlyGroupRequest {
  /** 主实例ID */
  MasterDBInstanceId: string;
  /** 只读组名称 */
  Name: string;
  /** 项目ID */
  ProjectId?: number;
  /** 私有网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 延迟时间大小开关：0关、1开 */
  ReplayLagEliminate?: number;
  /** 延迟空间大小开关： 0关、1开 */
  ReplayLatencyEliminate?: number;
  /** 延迟时间大小阈值，单位ms */
  MaxReplayLag?: number;
  /** 延迟空间大小阈值，单位MB */
  MaxReplayLatency?: number;
  /** 延迟剔除最小保留实例数 */
  MinDelayEliminateReserve?: number;
  /** 安全组id */
  SecurityGroupIds?: string[];
}

declare interface CreateReadOnlyGroupResponse {
  /** 只读组ID */
  ReadOnlyGroupId: string;
  /** 流程ID */
  FlowId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServerlessDBInstanceRequest {
  /** 可用区ID。公测阶段仅支持ap-shanghai-2、ap-beijing-1,ap-guangzhou-2. */
  Zone: string;
  /** DB实例名称，同一个账号下该值必须唯一。 */
  DBInstanceName: string;
  /** PostgreSQL内核版本，目前只支持：10.4。 */
  DBVersion: string;
  /** PostgreSQL数据库字符集，目前支持UTF8。 */
  DBCharset: string;
  /** 项目ID。 */
  ProjectId?: number;
  /** 私有网络ID。 */
  VpcId?: string;
  /** 私有网络子网ID。 */
  SubnetId?: string;
  /** 实例需要绑定的标签数组信息 */
  TagList?: Tag[];
}

declare interface CreateServerlessDBInstanceResponse {
  /** 实例ID，该ID全局唯一，如：postgres-xxxxx */
  DBInstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaseBackupRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 基础备份ID。 */
  BaseBackupId: string;
}

declare interface DeleteBaseBackupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDBInstanceNetworkAccessRequest {
  /** 实例ID，形如：postgres-6bwgamo3。 */
  DBInstanceId: string;
  /** 私有网络统一 ID，若是基础网络则传"0"。 */
  VpcId: string;
  /** 子网ID，若是基础网络则传"0"。 */
  SubnetId: string;
  /** 目标VIP地址。 */
  Vip: string;
}

declare interface DeleteDBInstanceNetworkAccessResponse {
  /** 流程ID。 */
  FlowId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLogBackupRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 日志备份ID。 */
  LogBackupId: string;
}

declare interface DeleteLogBackupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteParameterTemplateRequest {
  /** 参数模板ID，用于唯一确认待操作的参数模板 */
  TemplateId: string;
}

declare interface DeleteParameterTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReadOnlyGroupNetworkAccessRequest {
  /** RO组ID，形如：pgro-4t9c6g7k。 */
  ReadOnlyGroupId: string;
  /** 私有网络统一 ID，若是基础网络则传"0"。 */
  VpcId: string;
  /** 子网ID，若是基础网络则传"0"。 */
  SubnetId: string;
  /** 目标VIP地址。 */
  Vip: string;
}

declare interface DeleteReadOnlyGroupNetworkAccessResponse {
  /** 流程ID。 */
  FlowId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReadOnlyGroupRequest {
  /** 待删除只读组ID */
  ReadOnlyGroupId: string;
}

declare interface DeleteReadOnlyGroupResponse {
  /** 流程ID */
  FlowId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServerlessDBInstanceRequest {
  /** DB实例名称，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。 */
  DBInstanceName?: string;
  /** DB实例ID，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。 */
  DBInstanceId?: string;
}

declare interface DeleteServerlessDBInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 实例ID，形如postgres-6fego161 */
  DBInstanceId: string;
  /** 分页返回，每页最大返回数目，默认10，取值范围为1-100 */
  Limit?: number;
  /** 数据偏移量，从0开始。 */
  Offset?: number;
  /** 返回数据按照创建时间或者用户名排序。取值只能为createTime或者name。createTime-按照创建时间排序；name-按照用户名排序 */
  OrderBy?: string;
  /** 返回结果是升序还是降序。取值只能为desc或者asc。desc-降序；asc-升序 */
  OrderByType?: string;
}

declare interface DescribeAccountsResponse {
  /** 本次调用接口共返回了多少条数据。 */
  TotalCount?: number;
  /** 帐号列表详细信息。 */
  Details?: AccountInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAvailableRecoveryTimeRequest {
  /** 实例ID */
  DBInstanceId: string;
}

declare interface DescribeAvailableRecoveryTimeResponse {
  /** 可恢复的最早时间，时区为东八区（UTC+8）。 */
  RecoveryBeginTime?: string;
  /** 可恢复的最晚时间，时区为东八区（UTC+8）。 */
  RecoveryEndTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadRestrictionRequest {
}

declare interface DescribeBackupDownloadRestrictionResponse {
  /** 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。 */
  RestrictionType?: string;
  /** vpc限制效力，ALLOW 允许；DENY 拒绝。 */
  VpcRestrictionEffect?: string | null;
  /** 允许或拒绝下载备份文件的vpcId列表。 */
  VpcIdSet?: string[] | null;
  /** ip限制效力，ALLOW 允许；DENY 拒绝。 */
  IpRestrictionEffect?: string | null;
  /** 允许或拒绝下载备份文件的ip列表。 */
  IpSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadURLRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 备份类型，目前支持：LogBackup，BaseBackup。 */
  BackupType: string;
  /** 备份的唯一ID。 */
  BackupId: string;
  /** 链接的有效时间，默认为12小时。 */
  URLExpireTime?: number;
  /** 备份下载限制 */
  BackupDownloadRestriction?: BackupDownloadRestriction;
}

declare interface DescribeBackupDownloadURLResponse {
  /** 备份的下载地址。 */
  BackupDownloadURL?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupOverviewRequest {
}

declare interface DescribeBackupOverviewResponse {
  /** 总免费空间大小，单位byte。 */
  TotalFreeSize: number;
  /** 已使用免费空间大小，单位byte。 */
  UsedFreeSize: number;
  /** 已使用收费空间大小，单位byte。 */
  UsedBillingSize: number;
  /** 日志备份数量。 */
  LogBackupCount: number;
  /** 日志备份大小，单位byte。 */
  LogBackupSize: number;
  /** 手动创建的基础备份数量。 */
  ManualBaseBackupCount: number;
  /** 手动创建的基础备份大小，单位byte。 */
  ManualBaseBackupSize: number;
  /** 自动创建的基础备份数量。 */
  AutoBaseBackupCount: number;
  /** 自动创建的基础备份大小，单位byte。 */
  AutoBaseBackupSize: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupPlansRequest {
  /** 实例ID */
  DBInstanceId: string;
}

declare interface DescribeBackupPlansResponse {
  /** 实例的备份计划集 */
  Plans: BackupPlan[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupSummariesRequest {
  /** 每页显示数量，取值范围为1-100，默认为返回10条。 */
  Limit?: number;
  /** 数据偏移量，从0开始。 */
  Offset?: number;
  /** 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：db-instance-id：按照实例ID过滤，类型为string。db-instance-name：按照实例名过滤，类型为string。db-instance-ip：按照实例私有网络IP地址过滤，类型为string。 */
  Filters?: Filter[];
  /** 排序字段，支持TotalBackupSize,LogBackupSize,ManualBaseBackupSize,AutoBaseBackupSize。 */
  OrderBy?: string;
  /** 排序方式，包括升序：asc，降序：desc。 */
  OrderByType?: string;
}

declare interface DescribeBackupSummariesResponse {
  /** 备份统计信息列表。 */
  BackupSummarySet: BackupSummary[];
  /** 查询到的所有备份信息数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaseBackupsRequest {
  /** 备份的最小结束时间，形如2018-01-01 00:00:00。默认为7天前。 */
  MinFinishTime?: string;
  /** 备份的最大结束时间，形如2018-01-01 00:00:00。默认为当前时间。 */
  MaxFinishTime?: string;
  /** 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：db-instance-id：按照实例ID过滤，类型为string。db-instance-name：按照实例名过滤，类型为string。db-instance-ip：按照实例私有网络IP地址过滤，类型为string。base-backup-id：按照备份集ID过滤，类型为string。 */
  Filters?: Filter[];
  /** 每页显示数量，取值范围为1-100，默认为返回10条。 */
  Limit?: number;
  /** 数据偏移量，从0开始。 */
  Offset?: number;
  /** 排序字段，支持StartTime,FinishTime,Size。 */
  OrderBy?: string;
  /** 排序方式，包括升序：asc，降序：desc。 */
  OrderByType?: string;
}

declare interface DescribeBaseBackupsResponse {
  /** 查询到的基础备份数量。 */
  TotalCount?: number;
  /** 基础备份详细信息列表。 */
  BaseBackupSet?: BaseBackup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassesRequest {
  /** 可用区ID。可以通过接口DescribeZones获取。 */
  Zone: string;
  /** 数据库引擎，支持：1、postgresql（云数据库PostgreSQL）；2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）； */
  DBEngine: string;
  /** 数据库主版本号。例如12，13，可以通过接口DescribeDBVersions获取。 */
  DBMajorVersion: string;
}

declare interface DescribeClassesResponse {
  /** 数据库规格列表 */
  ClassInfoSet?: ClassInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloneDBInstanceSpecRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 基础备份集ID，此入参和RecoveryTargetTime必须选择一个传入。如与RecoveryTargetTime参数同时设置，则以此参数为准。 */
  BackupSetId?: string;
  /** 恢复目标时间，此入参和BackupSetId必须选择一个传入。时区以东八区（UTC+8）为准。 */
  RecoveryTargetTime?: string;
}

declare interface DescribeCloneDBInstanceSpecResponse {
  /** 可购买的最小规格码。 */
  MinSpecCode?: string;
  /** 可购买的最小磁盘容量，单位GB。 */
  MinStorage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBBackupsRequest {
  /** 实例ID，形如postgres-4wdeb0zv。 */
  DBInstanceId: string;
  /** 备份方式（1-全量）。目前只支持全量，取值为1。 */
  Type: number;
  /** 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前 */
  StartTime: string;
  /** 查询结束时间，形如2018-06-10 17:06:38 */
  EndTime: string;
  /** 备份列表分页返回，每页返回数量，默认为 20，最小为1，最大值为 100。（当该参数不传或者传0时按默认值处理） */
  Limit?: number;
  /** 返回结果中的第几页，从第0页开始。默认为0。 */
  Offset?: number;
}

declare interface DescribeDBBackupsResponse {
  /** 返回备份列表中备份文件的个数 */
  TotalCount?: number;
  /** 备份列表 */
  BackupList?: DBBackup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBErrlogsRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 查询起始时间，形如2018-01-01 00:00:00。日志保留时间默认为7天，起始时间不能超出保留时间范围。 */
  StartTime: string;
  /** 查询结束时间，形如2018-01-01 00:00:00。 */
  EndTime: string;
  /** 数据库名字。 */
  DatabaseName?: string;
  /** 搜索关键字。 */
  SearchKeys?: string[];
  /** 每页显示数量，取值范围为1-100。默认值为50。 */
  Limit?: number;
  /** 数据偏移量，从0开始。默认值为0。 */
  Offset?: number;
}

declare interface DescribeDBErrlogsResponse {
  /** 查询到的日志数量，最大值为10000条。 */
  TotalCount?: number;
  /** 错误日志详细信息集合。 */
  Details?: ErrLogDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceAttributeRequest {
  /** 实例ID */
  DBInstanceId: string;
}

declare interface DescribeDBInstanceAttributeResponse {
  /** 实例详细信息。 */
  DBInstance: DBInstance;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceHAConfigRequest {
  /** 实例ID */
  DBInstanceId: string;
}

declare interface DescribeDBInstanceHAConfigResponse {
  /** 主从同步方式：Semi-sync：半同步Async：异步 */
  SyncMode?: string;
  /** 高可用备机最大延迟数据量。备节点延迟数据量小于等于该值，且备节点延迟时间小于等于MaxStandbyLag时，可以切换为主节点。单位：byte参数范围：[1073741824, 322122547200] */
  MaxStandbyLatency?: number;
  /** 高可用备机最大延迟时间。备节点延迟时间小于等于该值，且备节点延迟数据量小于等于MaxStandbyLatency时，可以切换为主节点。单位：s参数范围：[5, 10] */
  MaxStandbyLag?: number;
  /** 同步备机最大延迟数据量。备机延迟数据量小于等于该值，且该备机延迟时间小于等于MaxSyncStandbyLag时，则该备机采用同步复制；否则，采用异步复制。该参数值针对SyncMode设置为Semi-sync的实例有效。异步实例该字段返回null。半同步实例禁止退化为异步复制时，该字段返回null。 */
  MaxSyncStandbyLatency?: number | null;
  /** 同步备机最大延迟时间。备机延迟时间小于等于该值，且该备机延迟数据量小于等于MaxSyncStandbyLatency时，则该备机采用同步复制；否则，采用异步复制。该参数值针对SyncMode设置为Semi-sync的实例有效。异步实例不返回该字段。半同步实例禁止退化为异步复制时，不返回该字段。 */
  MaxSyncStandbyLag?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceParametersRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 查询指定参数详情。ParamName为空或不传，默认返回全部参数列表 */
  ParamName?: string;
}

declare interface DescribeDBInstanceParametersResponse {
  /** 参数列表总数 */
  TotalCount?: number;
  /** 参数列表返回详情 */
  Detail?: ParamInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstanceSecurityGroupsRequest {
  /** 实例ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果都传，忽略ReadOnlyGroupId */
  DBInstanceId?: string;
  /** 只读组ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果要查询只读组关联的安全组，只传ReadOnlyGroupId */
  ReadOnlyGroupId?: string;
}

declare interface DescribeDBInstanceSecurityGroupsResponse {
  /** 安全组信息数组 */
  SecurityGroupSet?: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：db-instance-id：按照实例ID过滤，类型为stringdb-instance-name：按照实例名过滤，类型为stringdb-project-id：按照项目ID过滤，类型为integerdb-pay-mode：按照付费模式过滤，类型为stringdb-tag-key：按照标签键过滤，类型为string */
  Filters?: Filter[];
  /** 每页显示数量，取值范围为1-100，默认为返回10条。 */
  Limit?: number;
  /** 数据偏移量，从0开始。 */
  Offset?: number;
  /** 排序指标，如实例名、创建时间等，支持DBInstanceId,CreateTime,Name,EndTime */
  OrderBy?: string;
  /** 排序方式，包括升序：asc、降序：desc。 */
  OrderByType?: string;
}

declare interface DescribeDBInstancesResponse {
  /** 查询到的实例数量。 */
  TotalCount: number;
  /** 实例详细信息集合。 */
  DBInstanceSet: DBInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSlowlogsRequest {
  /** 实例ID，形如postgres-lnp6j617 */
  DBInstanceId: string;
  /** 查询起始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前 */
  StartTime: string;
  /** 查询结束时间，形如2018-06-10 17:06:38 */
  EndTime: string;
  /** 数据库名字 */
  DatabaseName?: string;
  /** 按照何种指标排序，取值为sum_calls或者sum_cost_time。sum_calls-总调用次数；sum_cost_time-总的花费时间 */
  OrderBy?: string;
  /** 排序规则。desc-降序；asc-升序 */
  OrderByType?: string;
  /** 分页返回结果，每页最大返回数量，取值为1-100，默认20 */
  Limit?: number;
  /** 分页返回结果，返回结果的第几页，从0开始计数 */
  Offset?: number;
}

declare interface DescribeDBSlowlogsResponse {
  /** 本次返回多少条数据 */
  TotalCount?: number;
  /** 慢查询日志详情 */
  Detail?: SlowlogDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBVersionsRequest {
}

declare interface DescribeDBVersionsResponse {
  /** 数据库版本号信息列表 */
  VersionSet?: Version[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBXlogsRequest {
  /** 实例ID，形如postgres-4wdeb0zv。 */
  DBInstanceId: string;
  /** 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前 */
  StartTime: string;
  /** 查询结束时间，形如2018-06-10 17:06:38 */
  EndTime: string;
  /** 分页返回，表示返回第几页的条目。从第0页开始计数。 */
  Offset?: number;
  /** 分页返回，表示每页有多少条目。取值为1-100。 */
  Limit?: number;
}

declare interface DescribeDBXlogsResponse {
  /** 表示此次返回结果有多少条数据。 */
  TotalCount?: number;
  /** Xlog列表 */
  XlogList?: Xlog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesRequest {
  /** 实例ID */
  DBInstanceId: string;
}

declare interface DescribeDatabasesResponse {
  /** 数据库信息 */
  Items?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDefaultParametersRequest {
  /** 数据库版本，大版本号，例如11，12，13 */
  DBMajorVersion: string;
  /** 数据库引擎，例如：postgresql,mssql_compatible */
  DBEngine: string;
}

declare interface DescribeDefaultParametersResponse {
  /** 参数个数 */
  TotalCount: number;
  /** 参数信息 */
  ParamInfoSet: ParamInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEncryptionKeysRequest {
  /** 实例ID。 */
  DBInstanceId: string;
}

declare interface DescribeEncryptionKeysResponse {
  /** 实例密钥信息列表。 */
  EncryptionKeys?: EncryptionKey[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogBackupsRequest {
  /** 备份的最小结束时间，形如2018-01-01 00:00:00。默认为7天前。 */
  MinFinishTime?: string;
  /** 备份的最大结束时间，形如2018-01-01 00:00:00。默认为当前时间。 */
  MaxFinishTime?: string;
  /** 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：db-instance-id：按照实例ID过滤，类型为string。db-instance-name：按照实例名过滤，类型为string。db-instance-ip：按照实例私有网络IP地址过滤，类型为string。 */
  Filters?: Filter[];
  /** 每页显示数量，取值范围为1-100，默认为返回10条。 */
  Limit?: number;
  /** 数据偏移量，从0开始。 */
  Offset?: number;
  /** 排序字段，支持StartTime,FinishTime,Size。 */
  OrderBy?: string;
  /** 排序方式，包括升序：asc，降序：desc。 */
  OrderByType?: string;
}

declare interface DescribeLogBackupsResponse {
  /** 查询到的日志备份数量。 */
  TotalCount?: number;
  /** 日志备份详细信息列表。 */
  LogBackupSet?: LogBackup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrdersRequest {
  /** 订单名集合 */
  DealNames: string[];
}

declare interface DescribeOrdersResponse {
  /** 订单数量 */
  TotalCount?: number;
  /** 订单数组 */
  Deals?: PgDeal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParameterTemplateAttributesRequest {
  /** 参数模板ID */
  TemplateId: string;
}

declare interface DescribeParameterTemplateAttributesResponse {
  /** 参数模板ID */
  TemplateId: string | null;
  /** 参数模板包含的参数个数 */
  TotalCount: number | null;
  /** 参数模板包含的参数信息 */
  ParamInfoSet: ParamInfo[] | null;
  /** 参数模板名称 */
  TemplateName: string | null;
  /** 参数模板适用的数据库版本 */
  DBMajorVersion: string | null;
  /** 参数模板适用的数据库引擎 */
  DBEngine: string | null;
  /** 参数模板描述 */
  TemplateDescription: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParameterTemplatesRequest {
  /** 过滤条件，目前支持的过滤条件有：TemplateName, TemplateId，DBMajorVersion，DBEngine */
  Filters?: Filter[];
  /** 每页显示数量，[0，100]，默认 20 */
  Limit?: number;
  /** 数据偏移量 */
  Offset?: number;
  /** 排序指标，枚举值，支持：CreateTime，TemplateName，DBMajorVersion */
  OrderBy?: string;
  /** 排序方式，枚举值，支持：asc（升序） ，desc（降序） */
  OrderByType?: string;
}

declare interface DescribeParameterTemplatesResponse {
  /** 符合查询条件的参数模板总数 */
  TotalCount: number;
  /** 参数模板列表 */
  ParameterTemplateSet: ParameterTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParamsEventRequest {
  /** 实例DB ID */
  DBInstanceId: string;
}

declare interface DescribeParamsEventResponse {
  /** 参数修改事件总数，以参数为统计粒度 */
  TotalCount?: number;
  /** 实例参数修改事件详情 */
  EventItems?: EventItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductConfigRequest {
  /** 可用区名称 */
  Zone?: string;
  /** 数据库引擎，支持：1、postgresql（云数据库PostgreSQL）；2、mssql_compatible（MSSQL兼容-云数据库PostgreSQL）；如不指定默认使用postgresql。 */
  DBEngine?: string;
}

declare interface DescribeProductConfigResponse {
  /** 售卖规格列表。 */
  SpecInfoList?: SpecInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReadOnlyGroupsRequest {
  /** 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：db-master-instance-id：按照主实例过滤，类型为string。read-only-group-id：按照只读组ID过滤，类型为string。 */
  Filters?: Filter[];
  /** 查询每一页的条数，默认为10 */
  PageSize?: number;
  /** 查询的页码，默认为1 */
  PageNumber?: number;
  /** 查询排序依据，目前支持:ROGroupId,CreateTime,Name */
  OrderBy?: string;
  /** 查询排序依据类型，目前支持:desc,asc */
  OrderByType?: string;
}

declare interface DescribeReadOnlyGroupsResponse {
  /** 只读组列表 */
  ReadOnlyGroupList?: ReadOnlyGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 返回的结果数量。 */
  TotalCount: number;
  /** 地域信息集合。 */
  RegionSet: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerlessDBInstancesRequest {
  /** 查询条件 */
  Filter?: Filter[];
  /** 查询个数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 排序指标，目前支持实例创建时间CreateTime */
  OrderBy?: string;
  /** 排序方式，包括升序、降序 */
  OrderByType?: string;
}

declare interface DescribeServerlessDBInstancesResponse {
  /** 查询结果数 */
  TotalCount: number;
  /** 查询结果 */
  DBInstanceSet: ServerlessDBInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowQueryAnalysisRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。 */
  StartTime: string;
  /** 查询结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。 */
  EndTime: string;
  /** 根据数据库名进行筛选，可以为空。 */
  DatabaseName?: string;
  /** 排序维度。 可选参数，取值范围[CallNum,CostTime,AvgCostTime]。默认CallNum。 */
  OrderBy?: string;
  /** 排序类型。升序asc、降序desc。默认desc。 */
  OrderByType?: string;
  /** 分页大小。取值范围[1,100]。默认50。 */
  Limit?: number;
  /** 分页偏移。取值范围[0,INF)。默认0。 */
  Offset?: number;
}

declare interface DescribeSlowQueryAnalysisResponse {
  /** 查询总条数。 */
  TotalCount: number;
  /** 慢SQL统计分析接口返回详情。 */
  Detail: Detail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowQueryListRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。 */
  StartTime: string;
  /** 查询结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。 */
  EndTime: string;
  /** 根据数据库名进行筛选，可以为空。 */
  DatabaseName?: string;
  /** 排序类型。升序asc、降序desc。默认为desc。 */
  OrderByType?: string;
  /** 排序维度。 可选参数，取值范围[SessionStartTime,Duration]，默认为SessionStartTime。 */
  OrderBy?: string;
  /** 分页大小。取值范围[1,100],默认为20。 */
  Limit?: number;
  /** 分页偏移。取值范围[0,INF)，默认为0。 */
  Offset?: number;
}

declare interface DescribeSlowQueryListResponse {
  /** 选定时间范围内慢SQL总条数。 */
  TotalCount: number;
  /** 指定时间范围内，慢SQL耗时分段分析。 */
  DurationAnalysis: DurationAnalysis[] | null;
  /** 指定时间范围内 慢SQL流水。 */
  RawSlowQueryList: RawSlowQuery[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
}

declare interface DescribeZonesResponse {
  /** 返回的结果数量。 */
  TotalCount: number;
  /** 可用区信息集合。 */
  ZoneSet: ZoneInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyDBInstanceRequest {
  /** 待下线实例ID */
  DBInstanceId: string;
}

declare interface DestroyDBInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisIsolateDBInstancesRequest {
  /** 实例ID列表。注意：当前已不支持同时解隔离多个实例，这里只能传入单个实例ID。 */
  DBInstanceIdSet: string[];
  /** 购买时长，单位：月。预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36后付费：只支持1 */
  Period?: number;
  /** 是否使用代金券：true：使用false：不使用默认值：false */
  AutoVoucher?: boolean;
  /** 代金券id列表。 */
  VoucherIds?: string[];
}

declare interface DisIsolateDBInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InitDBInstancesRequest {
  /** 实例ID集合。 */
  DBInstanceIdSet: string[];
  /** 实例根账号用户名。 */
  AdminName: string;
  /** 实例根账号用户名对应的密码。 */
  AdminPassword: string;
  /** 实例字符集，目前只支持：UTF8、LATIN1。 */
  Charset: string;
}

declare interface InitDBInstancesResponse {
  /** 实例ID集合。 */
  DBInstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateDBInstancesRequest {
  /** 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 规格ID。该参数可以通过调用DescribeClasses接口的返回值中的SpecCode字段来获取。 */
  SpecCode: string;
  /** 存储容量大小，单位：GB。 */
  Storage: number;
  /** 实例数量。目前最大数量不超过100，如需一次性创建更多实例，请联系客服支持。 */
  InstanceCount: number;
  /** 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。 */
  Period: number;
  /** 【弃字段，不再生效】，计费ID。该参数可以通过调用DescribeProductConfig接口的返回值中的Pid字段来获取。 */
  Pid?: number;
  /** 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。 */
  InstanceChargeType?: string;
  /** 实例类型，默认primary，支持如下：primary（双机高可用（一主一从））readonly（只读实例） */
  InstanceType?: string;
  /** DB引擎，默认postgresql，支持如下：postgresql（云数据库PostgreSQL）mssql_compatible（MSSQL兼容-云数据库PostgreSQL） */
  DBEngine?: string;
}

declare interface InquiryPriceCreateDBInstancesResponse {
  /** 刊例价，单位：分 */
  OriginalPrice?: number;
  /** 折后实际付款金额，单位：分 */
  Price?: number;
  /** 币种。例如，CNY：人民币。 */
  Currency?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewDBInstanceRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 续费周期，按月计算，最大不超过48 */
  Period: number;
}

declare interface InquiryPriceRenewDBInstanceResponse {
  /** 刊例价，单位为分。如24650表示246.5元 */
  OriginalPrice: number;
  /** 折后实际付款金额，单位为分。如24650表示246.5元 */
  Price: number;
  /** 币种。例如，CNY：人民币。 */
  Currency: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceUpgradeDBInstanceRequest {
  /** 实例的磁盘大小，单位GB */
  Storage: number;
  /** 实例的内存大小，单位GB */
  Memory: number;
  /** 实例ID，形如postgres-hez4fh0v */
  DBInstanceId: string;
  /** 【废弃参数，不再生效】，实例计费类型。 */
  InstanceChargeType?: string;
  /** 实例的Cpu大小，单位Core */
  Cpu?: number;
}

declare interface InquiryPriceUpgradeDBInstanceResponse {
  /** 刊例价费用 */
  OriginalPrice?: number;
  /** 折后实际付款金额 */
  Price?: number;
  /** 币种。例如，CNY：人民币。 */
  Currency?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDBInstancesRequest {
  /** 实例ID集合。注意：当前已不支持同时隔离多个实例，这里只能传入单个实例ID。 */
  DBInstanceIdSet: string[];
}

declare interface IsolateDBInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountRemarkRequest {
  /** 实例ID，形如postgres-4wdeb0zv */
  DBInstanceId: string;
  /** 实例用户名 */
  UserName: string;
  /** 用户UserName对应的新备注 */
  Remark: string;
}

declare interface ModifyAccountRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupDownloadRestrictionRequest {
  /** 备份文件下载限制类型，NONE 无限制，内外网都可以下载；INTRANET 只允许内网下载；CUSTOMIZE 自定义限制下载的vpc或ip。 */
  RestrictionType: string;
  /** vpc限制效力，ALLOW 允许；DENY 拒绝。 */
  VpcRestrictionEffect?: string;
  /** 允许或拒绝下载备份文件的vpcId列表。 */
  VpcIdSet?: string[];
  /** ip限制效力，ALLOW 允许；DENY 拒绝。 */
  IpRestrictionEffect?: string;
  /** 允许或拒绝下载备份文件的ip列表。 */
  IpSet?: string[];
}

declare interface ModifyBackupDownloadRestrictionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupPlanRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 实例最早开始备份时间 */
  MinBackupStartTime?: string;
  /** 实例最晚开始备份时间 */
  MaxBackupStartTime?: string;
  /** 实例备份保留时长，取值范围为7-1830，单位是天 */
  BaseBackupRetentionPeriod?: number;
  /** 实例备份周期，按照星期维度，格式为小写星期英文单词 */
  BackupPeriod?: string[];
  /** 实例日志备份保留时长，取值范围为7-1830，单位是天 */
  LogBackupRetentionPeriod?: number;
}

declare interface ModifyBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaseBackupExpireTimeRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 基础备份ID。 */
  BaseBackupId: string;
  /** 新过期时间。 */
  NewExpireTime: string;
}

declare interface ModifyBaseBackupExpireTimeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceChargeTypeRequest {
  /** 实例ID，形如postgres-6fego161 */
  DBInstanceId: string;
  /** 实例计费类型，目前支持：PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：后付费，即按量计费默认值：PREPAID */
  InstanceChargeType: string;
  /** 购买时长，单位：月。预付费：支持1,2,3,4,5,6,7,8,9,10,11,12,24,36后付费：只支持1 */
  Period: number;
  /** 续费标记：0：手动续费1：自动续费默认值：0 */
  AutoRenewFlag?: number;
  /** 是否自动使用代金券：0：否1：是默认值：0 */
  AutoVoucher?: number;
}

declare interface ModifyDBInstanceChargeTypeResponse {
  /** 订单名 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceDeploymentRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 实例节点部署信息，支持多可用区部署时需要指定每个节点的部署可用区信息。可用区信息可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/409/16769) 接口的返回值中的Zone字段来获取。 */
  DBNodeSet: DBNode[];
  /** 指定实例配置完成变更后的切换时间。0：立即切换 1：指定时间切换2：维护时间窗口内切换默认值：0 */
  SwitchTag: number;
  /** 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。 */
  SwitchStartTime?: string;
  /** 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。 */
  SwitchEndTime?: string;
}

declare interface ModifyDBInstanceDeploymentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceHAConfigRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 主从同步方式：Semi-sync：半同步Async：异步 */
  SyncMode: string;
  /** 高可用备机最大延迟数据量。备节点延迟数据量小于等于该值，且备节点延迟时间小于等于MaxStandbyLag时，可以切换为主节点。单位：byte参数范围：[1073741824, 322122547200] */
  MaxStandbyLatency: number;
  /** 高可用备机最大延迟时间。备节点延迟时间小于等于该值，且备节点延迟数据量小于等于MaxStandbyLatency时，可以切换为主节点。单位：s参数范围：[5, 10] */
  MaxStandbyLag: number;
  /** 同步备机最大延迟数据量。备机延迟数据量小于等于该值，且该备机延迟时间小于等于MaxSyncStandbyLag时，则该备机采用同步复制；否则，采用异步复制。该参数值针对SyncMode设置为Semi-sync的实例有效。半同步实例禁止退化为异步复制时，不设置MaxSyncStandbyLatency、MaxSyncStandbyLag。半同步实例允许退化异步复制时，PostgreSQL 9版本的实例须设置MaxSyncStandbyLatency且不设置MaxSyncStandbyLag，PostgreSQL 10及以上版本的实例须设置MaxSyncStandbyLatency、MaxSyncStandbyLag。 */
  MaxSyncStandbyLatency?: number;
  /** 同步备机最大延迟时间。备机延迟时间小于等于该值，且该备机延迟数据量小于等于MaxSyncStandbyLatency时，则该备机采用同步复制；否则，采用异步复制。该参数值针对SyncMode设置为Semi-sync的实例有效。半同步实例禁止退化为异步复制时，不设置MaxSyncStandbyLatency、MaxSyncStandbyLag。半同步实例允许退化异步复制时，PostgreSQL 9版本的实例须设置MaxSyncStandbyLatency且不设置MaxSyncStandbyLag，PostgreSQL 10及以上版本的实例须设置MaxSyncStandbyLatency、MaxSyncStandbyLag， */
  MaxSyncStandbyLag?: number;
}

declare interface ModifyDBInstanceHAConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceNameRequest {
  /** 数据库实例ID，形如postgres-6fego161 */
  DBInstanceId: string;
  /** 实例名称，仅支持长度小于60的中文/英文/数字/"_"/"-"，不指定实例名称则默认显示"未命名"。 */
  InstanceName: string;
}

declare interface ModifyDBInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceParametersRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 待修改参数及期望值 */
  ParamList: ParamEntry[];
}

declare interface ModifyDBInstanceParametersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceReadOnlyGroupRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 当前实例所在只读组ID */
  ReadOnlyGroupId: string;
  /** 实例修改的目标只读组ID */
  NewReadOnlyGroupId: string;
}

declare interface ModifyDBInstanceReadOnlyGroupResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 实例或只读组要绑定的安全组列表。安全组信息可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来查询。 */
  SecurityGroupIdSet: string[];
  /** 实例ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果都传，忽略ReadOnlyGroupId */
  DBInstanceId?: string;
  /** 只读组ID，DBInstanceId和ReadOnlyGroupId至少传一个；如果要修改只读组关联的安全组，只传ReadOnlyGroupId */
  ReadOnlyGroupId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSpecRequest {
  /** 实例ID，形如：postgres-6bwgamo3。 */
  DBInstanceId: string;
  /** 修改后的实例内存大小，单位GiB。 */
  Memory: number;
  /** 修改后的实例磁盘大小，单位GiB。 */
  Storage: number;
  /** 是否自动使用代金券：0：否1：是默认值：0 */
  AutoVoucher?: number;
  /** 代金券ID列表，目前仅支持指定一张代金券。 */
  VoucherIds?: string[];
  /** 活动ID。 */
  ActivityId?: number;
  /** 指定实例配置完成变更后的切换时间。0：立即切换 1：指定时间切换2：维护时间窗口内切换默认值：0 */
  SwitchTag?: number;
  /** 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。 */
  SwitchStartTime?: string;
  /** 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。 */
  SwitchEndTime?: string;
  /** 修改后的实例CPU大小，单位Core。 */
  Cpu?: number;
}

declare interface ModifyDBInstanceSpecResponse {
  /** 订单号。 */
  DealName?: string;
  /** 冻结流水号。 */
  BillId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstancesProjectRequest {
  /** 实例ID集合。注意：当前已不支持同时操作多个实例，这里只能传入单个实例ID。 */
  DBInstanceIdSet: string[];
  /** 所属新项目的ID */
  ProjectId: string;
}

declare interface ModifyDBInstancesProjectResponse {
  /** 转移项目成功的实例个数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyParameterTemplateRequest {
  /** 参数模板ID，用于唯一确认参数模板，不可修改 */
  TemplateId: string;
  /** 参数模板名称，长度为1～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@ 注：若该字段为空 ，则保持原参数模板名称 */
  TemplateName?: string;
  /** 参数模板描述，长度为0～60个字符，仅支持数字,英文大小写字母、中文以及特殊字符_-./()（）[]+=：:@ 注：若不传入该参数，则保持原参数模板描述 */
  TemplateDescription?: string;
  /** 需要修改或添加的参数集合，注：同一参数不能同时出现在修改添加集合和删除集合中 */
  ModifyParamEntrySet?: ParamEntry[];
  /** 需要从模板中删除的参数集合，注：同一参数不能同时出现在修改添加集合和删除集合中 */
  DeleteParamSet?: string[];
}

declare interface ModifyParameterTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyReadOnlyGroupConfigRequest {
  /** 只读组ID */
  ReadOnlyGroupId: string;
  /** 只读组名称 */
  ReadOnlyGroupName?: string;
  /** 延迟时间配置开关：0关、1开 */
  ReplayLagEliminate?: number;
  /** 延迟日志大小配置开关：0关、1开 */
  ReplayLatencyEliminate?: number;
  /** 延迟日志大小阈值，单位MB */
  MaxReplayLatency?: number;
  /** 延迟时间大小阈值，单位ms */
  MaxReplayLag?: number;
  /** 自动负载均衡开关：0关、1开 */
  Rebalance?: number;
  /** 延迟剔除最小保留实例数 */
  MinDelayEliminateReserve?: number;
}

declare interface ModifyReadOnlyGroupConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySwitchTimePeriodRequest {
  /** 处于等待切换状态中的实例ID */
  DBInstanceId: string;
  /** 入参取值为 0 ，代表立即切换。 */
  SwitchTag: number;
}

declare interface ModifySwitchTimePeriodResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenDBExtranetAccessRequest {
  /** 实例ID，形如postgres-hez4fh0v */
  DBInstanceId: string;
  /** 是否开通Ipv6外网，1：是，0：否 */
  IsIpv6?: number;
}

declare interface OpenDBExtranetAccessResponse {
  /** 异步任务流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenServerlessDBExtranetAccessRequest {
  /** 实例的唯一标识符 */
  DBInstanceId?: string;
  /** 实例名称 */
  DBInstanceName?: string;
}

declare interface OpenServerlessDBExtranetAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebalanceReadOnlyGroupRequest {
  /** 只读组ID */
  ReadOnlyGroupId: string;
}

declare interface RebalanceReadOnlyGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveDBInstanceFromReadOnlyGroupRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 只读组ID */
  ReadOnlyGroupId: string;
}

declare interface RemoveDBInstanceFromReadOnlyGroupResponse {
  /** 流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewInstanceRequest {
  /** 实例ID，形如postgres-6fego161 */
  DBInstanceId: string;
  /** 续费多少个月 */
  Period: number;
  /** 是否自动使用代金券,1是,0否，默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID列表，目前仅支持指定一张代金券 */
  VoucherIds?: string[];
}

declare interface RenewInstanceResponse {
  /** 订单名 */
  DealName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 实例ID，形如postgres-4wdeb0zv */
  DBInstanceId: string;
  /** 实例账户名 */
  UserName: string;
  /** UserName账户对应的新密码 */
  Password: string;
}

declare interface ResetAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDBInstanceRequest {
  /** 实例ID，形如postgres-6r233v55 */
  DBInstanceId: string;
}

declare interface RestartDBInstanceResponse {
  /** 异步流程ID */
  FlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetAutoRenewFlagRequest {
  /** 实例ID集合。注意：当前已不支持同时操作多个实例，这里只能传入单个实例ID。 */
  DBInstanceIdSet: string[];
  /** 续费标记。0-正常续费；1-自动续费；2-到期不续费 */
  AutoRenewFlag: number;
}

declare interface SetAutoRenewFlagResponse {
  /** 设置成功的实例个数 */
  Count: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchDBInstancePrimaryRequest {
  /** 实例ID */
  DBInstanceId: string;
  /** 是否强制切换。强制切换时只要备节点可访问，无论主备延迟多大都会发起切换。只有SwitchTag为0时，才可使用立即切换。默认：false */
  Force?: boolean;
  /** 指定实例配置完成变更后的切换时间。0：立即切换 1：指定时间切换2：维护时间窗口内切换默认值：0 */
  SwitchTag?: number;
  /** 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。 */
  SwitchStartTime?: string;
  /** 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。SwitchStartTime和SwitchEndTime时间窗口不能小于30分钟。 */
  SwitchEndTime?: string;
}

declare interface SwitchDBInstancePrimaryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDBInstanceKernelVersionRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 升级的目标内核版本号。可以通过接口[DescribeDBVersions](https://cloud.tencent.com/document/api/409/89018)的返回字段AvailableUpgradeTarget获取。 */
  TargetDBKernelVersion: string;
  /** 指定实例升级内核版本号完成后的切换时间。可选值:0：立即切换1：指定时间切换2：维护时间窗口内切换默认值：0 */
  SwitchTag?: number;
  /** 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。 */
  SwitchStartTime?: string;
  /** 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。SwitchStartTime和SwitchEndTime时间窗口不能小于30分钟。 */
  SwitchEndTime?: string;
  /** 是否对本次升级实例内核版本号操作执行预检查。true：执行预检查操作，不升级内核版本号。检查项目包含请求参数、内核版本号兼容性、实例参数等。false：发送正常请求（默认值），通过检查后直接升级内核版本号。默认值：false */
  DryRun?: boolean;
}

declare interface UpgradeDBInstanceKernelVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDBInstanceMajorVersionRequest {
  /** 实例ID。 */
  DBInstanceId: string;
  /** 目标内核版本号，可以通过API DescribeDBVersions获取可以升级的目标内核版本号。 */
  TargetDBKernelVersion: string;
  /** 是否为校验模式，若UpgradeCheck为True，表示仅进行内核版本兼容性检查，不会进行实质性的升级操作，对原实例无影响。检查结果可以通过升级日志查看。 */
  UpgradeCheck?: boolean;
  /** 升级前备份选项。True，表示升级前需要创建全量备份，False，表示升级前不需要创建全量备份。当实例已有备份集可以恢复到升级前的状态时，可选择False，否则需要指定为True。UpgradeCheck为True时，此参数无效。 */
  BackupBeforeUpgrade?: boolean;
  /** 统计信息收集选项，对主例运行 ANALYZE 以在升级后更新系统统计信息。可选值包括，0：不需要收集统计信息；1：实例恢复写之前收集统计信息；3：实例恢复写之后收集统计信息。UpgradeCheck为True时，此参数无效。 */
  StatisticsRefreshOption?: number;
  /** 插件升级选项，pg_upgrade不会升级任何插件，需要在升级完成后在创建过插件的库上执行"ALTER EXTENSION UPDATE"。发起升级实例大版本时可以指定在实例恢复写前/后是否需要升级任务自动升级插件版本。可选值包括：0：不需要自动升级插件；1：恢复写之前升级插件；2：恢复写之后升级插件。UpgradeCheck为True时，此参数无效。 */
  ExtensionUpgradeOption?: number;
  /** 升级时间选项，升级过程中会有一段时间实例只读，并会有一次秒级闪断，发起升级时需要选择这段影响的时间窗。可选值包括：0：自动执行，不需要指定时间窗；1：指定本次升级任务的时间窗，通过参数UpgradeTimeBegin和UpgradeTimeEnd设置；2：在实例运维时间窗内执行。UpgradeCheck为True时，此参数无效。 */
  UpgradeTimeOption?: number;
  /** 升级时间窗开始时间，时间格式：HH:MM:SS，例如：01:00:00。当UpgradeTimeOption为1时，该参数有效。UpgradeCheck为True时，此参数无效。 */
  UpgradeTimeBegin?: string;
  /** 升级时间窗截止时间，时间格式：HH:MM:SS，例如：02:00:00。当UpgradeTimeOption为1时，该参数有效。UpgradeCheck为True时，此参数无效。 */
  UpgradeTimeEnd?: string;
}

declare interface UpgradeDBInstanceMajorVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeDBInstanceRequest {
  /** 升级后的实例内存大小，单位GB */
  Memory: number;
  /** 升级后的实例磁盘大小，单位GB */
  Storage: number;
  /** 实例ID，形如postgres-lnp6j617 */
  DBInstanceId: string;
  /** 是否自动使用代金券,1是,0否，默认不使用 */
  AutoVoucher?: number;
  /** 代金券ID列表，目前仅支持指定一张代金券 */
  VoucherIds?: string[];
  /** 活动ID */
  ActivityId?: number;
  /** 指定实例配置完成变更后的切换时间，默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。 */
  SwitchTag?: number;
  /** 切换开始时间 */
  SwitchStartTime?: string;
  /** 切换截止时间 */
  SwitchEndTime?: string;
}

declare interface UpgradeDBInstanceResponse {
  /** 交易名字。 */
  DealName?: string;
  /** 冻结流水号 */
  BillId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Postgres 云数据库 PostgreSQL} */
declare interface Postgres {
  (): Versions;
  /** 添加只读实例到只读组 {@link AddDBInstanceToReadOnlyGroupRequest} {@link AddDBInstanceToReadOnlyGroupResponse} */
  AddDBInstanceToReadOnlyGroup(data: AddDBInstanceToReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddDBInstanceToReadOnlyGroupResponse>;
  /** 克隆实例 {@link CloneDBInstanceRequest} {@link CloneDBInstanceResponse} */
  CloneDBInstance(data: CloneDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CloneDBInstanceResponse>;
  /** 关闭实例公网地址 {@link CloseDBExtranetAccessRequest} {@link CloseDBExtranetAccessResponse} */
  CloseDBExtranetAccess(data: CloseDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<CloseDBExtranetAccessResponse>;
  /** 关闭serverlessDB实例公网地址 {@link CloseServerlessDBExtranetAccessRequest} {@link CloseServerlessDBExtranetAccessResponse} */
  CloseServerlessDBExtranetAccess(data?: CloseServerlessDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<CloseServerlessDBExtranetAccessResponse>;
  /** 创建实例基础备份 {@link CreateBaseBackupRequest} {@link CreateBaseBackupResponse} */
  CreateBaseBackup(data: CreateBaseBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaseBackupResponse>;
  /** 创建实例网络 {@link CreateDBInstanceNetworkAccessRequest} {@link CreateDBInstanceNetworkAccessResponse} */
  CreateDBInstanceNetworkAccess(data: CreateDBInstanceNetworkAccessRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstanceNetworkAccessResponse>;
  /** 创建实例（废弃） {@link CreateDBInstancesRequest} {@link CreateDBInstancesResponse} */
  CreateDBInstances(data: CreateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBInstancesResponse>;
  /** 创建实例 {@link CreateInstancesRequest} {@link CreateInstancesResponse} */
  CreateInstances(data: CreateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancesResponse>;
  /** 创建参数模板 {@link CreateParameterTemplateRequest} {@link CreateParameterTemplateResponse} */
  CreateParameterTemplate(data: CreateParameterTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateParameterTemplateResponse>;
  /** 创建只读实例 {@link CreateReadOnlyDBInstanceRequest} {@link CreateReadOnlyDBInstanceResponse} */
  CreateReadOnlyDBInstance(data: CreateReadOnlyDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReadOnlyDBInstanceResponse>;
  /** 创建只读组 {@link CreateReadOnlyGroupRequest} {@link CreateReadOnlyGroupResponse} */
  CreateReadOnlyGroup(data: CreateReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReadOnlyGroupResponse>;
  /** 创建RO组网络 {@link CreateReadOnlyGroupNetworkAccessRequest} {@link CreateReadOnlyGroupNetworkAccessResponse} */
  CreateReadOnlyGroupNetworkAccess(data: CreateReadOnlyGroupNetworkAccessRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReadOnlyGroupNetworkAccessResponse>;
  /** 创建ServerlessDB实例 {@link CreateServerlessDBInstanceRequest} {@link CreateServerlessDBInstanceResponse} */
  CreateServerlessDBInstance(data: CreateServerlessDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServerlessDBInstanceResponse>;
  /** 删除实例基础备份 {@link DeleteBaseBackupRequest} {@link DeleteBaseBackupResponse} */
  DeleteBaseBackup(data: DeleteBaseBackupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaseBackupResponse>;
  /** 删除实例网络 {@link DeleteDBInstanceNetworkAccessRequest} {@link DeleteDBInstanceNetworkAccessResponse} */
  DeleteDBInstanceNetworkAccess(data: DeleteDBInstanceNetworkAccessRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDBInstanceNetworkAccessResponse>;
  /** 删除实例日志备份 {@link DeleteLogBackupRequest} {@link DeleteLogBackupResponse} */
  DeleteLogBackup(data: DeleteLogBackupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogBackupResponse>;
  /** 删除参数模板 {@link DeleteParameterTemplateRequest} {@link DeleteParameterTemplateResponse} */
  DeleteParameterTemplate(data: DeleteParameterTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteParameterTemplateResponse>;
  /** 删除只读组 {@link DeleteReadOnlyGroupRequest} {@link DeleteReadOnlyGroupResponse} */
  DeleteReadOnlyGroup(data: DeleteReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReadOnlyGroupResponse>;
  /** 删除RO组网络 {@link DeleteReadOnlyGroupNetworkAccessRequest} {@link DeleteReadOnlyGroupNetworkAccessResponse} */
  DeleteReadOnlyGroupNetworkAccess(data: DeleteReadOnlyGroupNetworkAccessRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReadOnlyGroupNetworkAccessResponse>;
  /** 删除ServerlessDB实例 {@link DeleteServerlessDBInstanceRequest} {@link DeleteServerlessDBInstanceResponse} */
  DeleteServerlessDBInstance(data?: DeleteServerlessDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServerlessDBInstanceResponse>;
  /** 查询实例的数据库账号列表 {@link DescribeAccountsRequest} {@link DescribeAccountsResponse} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** 查询实例可恢复的时间范围 {@link DescribeAvailableRecoveryTimeRequest} {@link DescribeAvailableRecoveryTimeResponse} */
  DescribeAvailableRecoveryTime(data: DescribeAvailableRecoveryTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableRecoveryTimeResponse>;
  /** 查询备份文件下载限制 {@link DescribeBackupDownloadRestrictionRequest} {@link DescribeBackupDownloadRestrictionResponse} */
  DescribeBackupDownloadRestriction(data?: DescribeBackupDownloadRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadRestrictionResponse>;
  /** 查询备份集的下载地址 {@link DescribeBackupDownloadURLRequest} {@link DescribeBackupDownloadURLResponse} */
  DescribeBackupDownloadURL(data: DescribeBackupDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadURLResponse>;
  /** 查询备份概览 {@link DescribeBackupOverviewRequest} {@link DescribeBackupOverviewResponse} */
  DescribeBackupOverview(data?: DescribeBackupOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupOverviewResponse>;
  /** 查询备份计划 {@link DescribeBackupPlansRequest} {@link DescribeBackupPlansResponse} */
  DescribeBackupPlans(data: DescribeBackupPlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupPlansResponse>;
  /** 查询备份统计信息 {@link DescribeBackupSummariesRequest} {@link DescribeBackupSummariesResponse} */
  DescribeBackupSummaries(data?: DescribeBackupSummariesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupSummariesResponse>;
  /** 查询基础备份列表 {@link DescribeBaseBackupsRequest} {@link DescribeBaseBackupsResponse} */
  DescribeBaseBackups(data?: DescribeBaseBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaseBackupsResponse>;
  /** 查询售卖规格 {@link DescribeClassesRequest} {@link DescribeClassesResponse} */
  DescribeClasses(data: DescribeClassesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassesResponse>;
  /** 查询克隆实例可购买的规格 {@link DescribeCloneDBInstanceSpecRequest} {@link DescribeCloneDBInstanceSpecResponse} */
  DescribeCloneDBInstanceSpec(data: DescribeCloneDBInstanceSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloneDBInstanceSpecResponse>;
  /** 查询实例备份列表（废弃） {@link DescribeDBBackupsRequest} {@link DescribeDBBackupsResponse} */
  DescribeDBBackups(data: DescribeDBBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBBackupsResponse>;
  /** 查询错误日志 {@link DescribeDBErrlogsRequest} {@link DescribeDBErrlogsResponse} */
  DescribeDBErrlogs(data: DescribeDBErrlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBErrlogsResponse>;
  /** 查询实例详情 {@link DescribeDBInstanceAttributeRequest} {@link DescribeDBInstanceAttributeResponse} */
  DescribeDBInstanceAttribute(data: DescribeDBInstanceAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceAttributeResponse>;
  /** 查询实例HA配置 {@link DescribeDBInstanceHAConfigRequest} {@link DescribeDBInstanceHAConfigResponse} */
  DescribeDBInstanceHAConfig(data: DescribeDBInstanceHAConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceHAConfigResponse>;
  /** 查询实例参数 {@link DescribeDBInstanceParametersRequest} {@link DescribeDBInstanceParametersResponse} */
  DescribeDBInstanceParameters(data: DescribeDBInstanceParametersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceParametersResponse>;
  /** 查询实例安全组 {@link DescribeDBInstanceSecurityGroupsRequest} {@link DescribeDBInstanceSecurityGroupsResponse} */
  DescribeDBInstanceSecurityGroups(data?: DescribeDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstanceSecurityGroupsResponse>;
  /** 查询实例列表 {@link DescribeDBInstancesRequest} {@link DescribeDBInstancesResponse} */
  DescribeDBInstances(data?: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** 获取慢查询日志 （废弃） {@link DescribeDBSlowlogsRequest} {@link DescribeDBSlowlogsResponse} */
  DescribeDBSlowlogs(data: DescribeDBSlowlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSlowlogsResponse>;
  /** 查询支持的数据库版本 {@link DescribeDBVersionsRequest} {@link DescribeDBVersionsResponse} */
  DescribeDBVersions(data?: DescribeDBVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBVersionsResponse>;
  /** 获取实例Xlog列表（废弃） {@link DescribeDBXlogsRequest} {@link DescribeDBXlogsResponse} */
  DescribeDBXlogs(data: DescribeDBXlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBXlogsResponse>;
  /** 查询实例的数据库列表 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
  /** 查询默认参数列表 {@link DescribeDefaultParametersRequest} {@link DescribeDefaultParametersResponse} */
  DescribeDefaultParameters(data: DescribeDefaultParametersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultParametersResponse>;
  /** 查询实例密钥信息列表 {@link DescribeEncryptionKeysRequest} {@link DescribeEncryptionKeysResponse} */
  DescribeEncryptionKeys(data: DescribeEncryptionKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEncryptionKeysResponse>;
  /** 查询日志备份列表 {@link DescribeLogBackupsRequest} {@link DescribeLogBackupsResponse} */
  DescribeLogBackups(data?: DescribeLogBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogBackupsResponse>;
  /** 查询订单信息 {@link DescribeOrdersRequest} {@link DescribeOrdersResponse} */
  DescribeOrders(data: DescribeOrdersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrdersResponse>;
  /** 查询参数模板详情 {@link DescribeParameterTemplateAttributesRequest} {@link DescribeParameterTemplateAttributesResponse} */
  DescribeParameterTemplateAttributes(data: DescribeParameterTemplateAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParameterTemplateAttributesResponse>;
  /** 查询参数模板列表 {@link DescribeParameterTemplatesRequest} {@link DescribeParameterTemplatesResponse} */
  DescribeParameterTemplates(data?: DescribeParameterTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParameterTemplatesResponse>;
  /** 查询参数修改事件 {@link DescribeParamsEventRequest} {@link DescribeParamsEventResponse} */
  DescribeParamsEvent(data: DescribeParamsEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamsEventResponse>;
  /** 查询售卖规格配置（废弃） {@link DescribeProductConfigRequest} {@link DescribeProductConfigResponse} */
  DescribeProductConfig(data?: DescribeProductConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductConfigResponse>;
  /** 查询只读组列表 {@link DescribeReadOnlyGroupsRequest} {@link DescribeReadOnlyGroupsResponse} */
  DescribeReadOnlyGroups(data?: DescribeReadOnlyGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReadOnlyGroupsResponse>;
  /** 查询售卖地域 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询ServerlessDB实例列表 {@link DescribeServerlessDBInstancesRequest} {@link DescribeServerlessDBInstancesResponse} */
  DescribeServerlessDBInstances(data?: DescribeServerlessDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerlessDBInstancesResponse>;
  /** 获取慢查询统计分析列表 {@link DescribeSlowQueryAnalysisRequest} {@link DescribeSlowQueryAnalysisResponse} */
  DescribeSlowQueryAnalysis(data: DescribeSlowQueryAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowQueryAnalysisResponse>;
  /** 获取慢查询列表 {@link DescribeSlowQueryListRequest} {@link DescribeSlowQueryListResponse} */
  DescribeSlowQueryList(data: DescribeSlowQueryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowQueryListResponse>;
  /** 查询售卖可用区 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 销毁实例 {@link DestroyDBInstanceRequest} {@link DestroyDBInstanceResponse} */
  DestroyDBInstance(data: DestroyDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyDBInstanceResponse>;
  /** 解隔离实例 {@link DisIsolateDBInstancesRequest} {@link DisIsolateDBInstancesResponse} */
  DisIsolateDBInstances(data: DisIsolateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DisIsolateDBInstancesResponse>;
  /** 初始化实例（废弃） {@link InitDBInstancesRequest} {@link InitDBInstancesResponse} */
  InitDBInstances(data: InitDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InitDBInstancesResponse>;
  /** 查询实例创建售卖价格 {@link InquiryPriceCreateDBInstancesRequest} {@link InquiryPriceCreateDBInstancesResponse} */
  InquiryPriceCreateDBInstances(data: InquiryPriceCreateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateDBInstancesResponse>;
  /** 查询实例续费价格 {@link InquiryPriceRenewDBInstanceRequest} {@link InquiryPriceRenewDBInstanceResponse} */
  InquiryPriceRenewDBInstance(data: InquiryPriceRenewDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewDBInstanceResponse>;
  /** 查询升级实例价格 {@link InquiryPriceUpgradeDBInstanceRequest} {@link InquiryPriceUpgradeDBInstanceResponse} */
  InquiryPriceUpgradeDBInstance(data: InquiryPriceUpgradeDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceUpgradeDBInstanceResponse>;
  /** 隔离实例 {@link IsolateDBInstancesRequest} {@link IsolateDBInstancesResponse} */
  IsolateDBInstances(data: IsolateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBInstancesResponse>;
  /** 修改帐号备注 {@link ModifyAccountRemarkRequest} {@link ModifyAccountRemarkResponse} */
  ModifyAccountRemark(data: ModifyAccountRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountRemarkResponse>;
  /** 修改备份文件下载限制 {@link ModifyBackupDownloadRestrictionRequest} {@link ModifyBackupDownloadRestrictionResponse} */
  ModifyBackupDownloadRestriction(data: ModifyBackupDownloadRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupDownloadRestrictionResponse>;
  /** 修改备份计划 {@link ModifyBackupPlanRequest} {@link ModifyBackupPlanResponse} */
  ModifyBackupPlan(data: ModifyBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupPlanResponse>;
  /** 修改基础备份过期时间 {@link ModifyBaseBackupExpireTimeRequest} {@link ModifyBaseBackupExpireTimeResponse} */
  ModifyBaseBackupExpireTime(data: ModifyBaseBackupExpireTimeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaseBackupExpireTimeResponse>;
  /** 修改实例计费类型 {@link ModifyDBInstanceChargeTypeRequest} {@link ModifyDBInstanceChargeTypeResponse} */
  ModifyDBInstanceChargeType(data: ModifyDBInstanceChargeTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceChargeTypeResponse>;
  /** 修改实例部署方式 {@link ModifyDBInstanceDeploymentRequest} {@link ModifyDBInstanceDeploymentResponse} */
  ModifyDBInstanceDeployment(data: ModifyDBInstanceDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceDeploymentResponse>;
  /** 修改实例HA配置信息 {@link ModifyDBInstanceHAConfigRequest} {@link ModifyDBInstanceHAConfigResponse} */
  ModifyDBInstanceHAConfig(data: ModifyDBInstanceHAConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceHAConfigResponse>;
  /** 修改实例名字 {@link ModifyDBInstanceNameRequest} {@link ModifyDBInstanceNameResponse} */
  ModifyDBInstanceName(data: ModifyDBInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceNameResponse>;
  /** 修改实例参数 {@link ModifyDBInstanceParametersRequest} {@link ModifyDBInstanceParametersResponse} */
  ModifyDBInstanceParameters(data: ModifyDBInstanceParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceParametersResponse>;
  /** 修改实例所属的只读组 {@link ModifyDBInstanceReadOnlyGroupRequest} {@link ModifyDBInstanceReadOnlyGroupResponse} */
  ModifyDBInstanceReadOnlyGroup(data: ModifyDBInstanceReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceReadOnlyGroupResponse>;
  /** 修改实例的安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改实例规格 {@link ModifyDBInstanceSpecRequest} {@link ModifyDBInstanceSpecResponse} */
  ModifyDBInstanceSpec(data: ModifyDBInstanceSpecRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSpecResponse>;
  /** 修改实例所属项目 {@link ModifyDBInstancesProjectRequest} {@link ModifyDBInstancesProjectResponse} */
  ModifyDBInstancesProject(data: ModifyDBInstancesProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstancesProjectResponse>;
  /** 修改参数模板 {@link ModifyParameterTemplateRequest} {@link ModifyParameterTemplateResponse} */
  ModifyParameterTemplate(data: ModifyParameterTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyParameterTemplateResponse>;
  /** 修改只读组配置 {@link ModifyReadOnlyGroupConfigRequest} {@link ModifyReadOnlyGroupConfigResponse} */
  ModifyReadOnlyGroupConfig(data: ModifyReadOnlyGroupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReadOnlyGroupConfigResponse>;
  /** 修改变更配置切换时间 {@link ModifySwitchTimePeriodRequest} {@link ModifySwitchTimePeriodResponse} */
  ModifySwitchTimePeriod(data: ModifySwitchTimePeriodRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySwitchTimePeriodResponse>;
  /** 开通实例公网地址 {@link OpenDBExtranetAccessRequest} {@link OpenDBExtranetAccessResponse} */
  OpenDBExtranetAccess(data: OpenDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<OpenDBExtranetAccessResponse>;
  /** 开通serverlessDB实例公网地址 {@link OpenServerlessDBExtranetAccessRequest} {@link OpenServerlessDBExtranetAccessResponse} */
  OpenServerlessDBExtranetAccess(data?: OpenServerlessDBExtranetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<OpenServerlessDBExtranetAccessResponse>;
  /** 均衡只读组内实例的负载 {@link RebalanceReadOnlyGroupRequest} {@link RebalanceReadOnlyGroupResponse} */
  RebalanceReadOnlyGroup(data: RebalanceReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RebalanceReadOnlyGroupResponse>;
  /** 将只读实例从只读组中移除 {@link RemoveDBInstanceFromReadOnlyGroupRequest} {@link RemoveDBInstanceFromReadOnlyGroupResponse} */
  RemoveDBInstanceFromReadOnlyGroup(data: RemoveDBInstanceFromReadOnlyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveDBInstanceFromReadOnlyGroupResponse>;
  /** 续费实例 {@link RenewInstanceRequest} {@link RenewInstanceResponse} */
  RenewInstance(data: RenewInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RenewInstanceResponse>;
  /** 重置账户密码 {@link ResetAccountPasswordRequest} {@link ResetAccountPasswordResponse} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** 重启实例 {@link RestartDBInstanceRequest} {@link RestartDBInstanceResponse} */
  RestartDBInstance(data: RestartDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDBInstanceResponse>;
  /** 设置自动续费 {@link SetAutoRenewFlagRequest} {@link SetAutoRenewFlagResponse} */
  SetAutoRenewFlag(data: SetAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<SetAutoRenewFlagResponse>;
  /** 切换实例主备关系 {@link SwitchDBInstancePrimaryRequest} {@link SwitchDBInstancePrimaryResponse} */
  SwitchDBInstancePrimary(data: SwitchDBInstancePrimaryRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDBInstancePrimaryResponse>;
  /** 升级实例配置（废弃） {@link UpgradeDBInstanceRequest} {@link UpgradeDBInstanceResponse} */
  UpgradeDBInstance(data: UpgradeDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDBInstanceResponse>;
  /** 升级实例内核版本号 {@link UpgradeDBInstanceKernelVersionRequest} {@link UpgradeDBInstanceKernelVersionResponse} */
  UpgradeDBInstanceKernelVersion(data: UpgradeDBInstanceKernelVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDBInstanceKernelVersionResponse>;
  /** 升级实例内核大版本 {@link UpgradeDBInstanceMajorVersionRequest} {@link UpgradeDBInstanceMajorVersionResponse} */
  UpgradeDBInstanceMajorVersion(data: UpgradeDBInstanceMajorVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeDBInstanceMajorVersionResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Postgres;
