/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 告警多维分析一些配置信息 */
declare interface AlarmAnalysisConfig {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 告警策略描述 */
declare interface AlarmInfo {
  /** 告警策略名称。 */
  Name: string;
  /** 监控对象列表。 */
  AlarmTargets: AlarmTargetInfo[];
  /** 监控任务运行时间点。 */
  MonitorTime: MonitorTime;
  /** 触发条件。 */
  Condition: string;
  /** 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。 */
  TriggerCount: number;
  /** 告警重复的周期。单位是min。取值范围是0~1440。 */
  AlarmPeriod: number;
  /** 关联的告警通知模板列表。 */
  AlarmNoticeIds: string[];
  /** 开启状态。 */
  Status: boolean;
  /** 告警策略ID。 */
  AlarmId: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 最近更新时间。 */
  UpdateTime: string;
  /** 自定义通知模板 */
  MessageTemplate: string | null;
  /** 自定义回调模板 */
  CallBack: CallBackInfo | null;
  /** 多维分析设置 */
  Analysis: AnalysisDimensional[] | null;
}

/** 告警通知模板类型 */
declare interface AlarmNotice {
  /** 告警通知模板名称。 */
  Name: string;
  /** 告警模板的类型。可选值： Trigger - 告警触发 Recovery - 告警恢复 All - 告警触发和告警恢复 */
  Type: string;
  /** 告警通知模板接收者信息。 */
  NoticeReceivers: NoticeReceiver[] | null;
  /** 告警通知模板回调信息。 */
  WebCallbacks: WebCallback[] | null;
  /** 告警通知模板ID。 */
  AlarmNoticeId: string | null;
  /** 创建时间。 */
  CreateTime: string | null;
  /** 最近更新时间。 */
  UpdateTime: string | null;
}

/** 告警对象 */
declare interface AlarmTarget {
  /** 日志主题ID。 */
  TopicId: string;
  /** 查询语句。 */
  Query: string;
  /** 告警对象序号；从1开始递增。 */
  Number: number;
  /** 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。 */
  StartTimeOffset: number;
  /** 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。 */
  EndTimeOffset: number;
  /** 日志集ID。 */
  LogsetId: string;
}

/** 告警对象 */
declare interface AlarmTargetInfo {
  /** 日志集ID。 */
  LogsetId: string;
  /** 日志集名称。 */
  LogsetName: string;
  /** 日志主题ID。 */
  TopicId: string;
  /** 日志主题名称。 */
  TopicName: string;
  /** 查询语句。 */
  Query: string;
  /** 告警对象序号。 */
  Number: number;
  /** 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。 */
  StartTimeOffset: number;
  /** 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。 */
  EndTimeOffset: number;
}

/** 多维分析的分析维度 */
declare interface AnalysisDimensional {
  /** 分析名称 */
  Name: string;
  /** 分析类型：query，field ，original */
  Type: string;
  /** 分析内容 */
  Content: string;
  /** 配置 */
  ConfigInfo?: AlarmAnalysisConfig[];
}

/** 回调配置 */
declare interface CallBackInfo {
  /** 回调时的Body */
  Body: string;
  /** 回调时的Headers */
  Headers?: string[] | null;
}

/** CKafka的描述-需要投递到的kafka信息 */
declare interface Ckafka {
  /** Ckafka 的 Vip */
  Vip: string;
  /** Ckafka 的 Vport */
  Vport: string;
  /** Ckafka 的 InstanceId */
  InstanceId: string;
  /** Ckafka 的 InstanceName */
  InstanceName: string;
  /** Ckafka 的 TopicId */
  TopicId: string;
  /** Ckafka 的 TopicName */
  TopicName: string;
}

/** 日志分析的列属性 */
declare interface Column {
  /** 列的名字 */
  Name?: string;
  /** 列的属性 */
  Type?: string;
}

/** 投递日志的压缩配置 */
declare interface CompressInfo {
  /** 压缩格式，支持gzip、lzop、snappy和none不压缩 */
  Format: string;
}

/** 特殊采集规则配置信息 */
declare interface ConfigExtraInfo {
  /** 采集规则扩展配置ID */
  ConfigExtraId: string;
  /** 采集规则名称 */
  Name: string;
  /** 日志主题ID */
  TopicId: string;
  /** 类型：container_stdout、container_file、host_file */
  Type: string;
  /** 节点文件配置信息 */
  HostFile: HostFileInfo | null;
  /** 容器文件路径信息 */
  ContainerFile: ContainerFileInfo | null;
  /** 容器标准输出信息 */
  ContainerStdout: ContainerStdoutInfo | null;
  /** 日志格式化方式 */
  LogFormat: string | null;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log */
  LogType: string | null;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule: ExtractRuleInfo | null;
  /** 采集黑名单路径列表 */
  ExcludePaths: ExcludePathInfo[] | null;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 用户自定义解析字符串 */
  UserDefineRule: string | null;
  /** 机器组ID */
  GroupId: string;
  /** 自建采集配置标 */
  ConfigFlag: string | null;
  /** 日志集ID */
  LogsetId: string | null;
  /** 日志集name */
  LogsetName: string | null;
  /** 日志主题name */
  TopicName: string | null;
}

/** 采集规则配置信息 */
declare interface ConfigInfo {
  /** 采集规则配置ID */
  ConfigId: string;
  /** 采集规则配置名称 */
  Name: string | null;
  /** 日志格式化方式 */
  LogFormat: string | null;
  /** 日志采集路径 */
  Path: string | null;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log */
  LogType: string | null;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule: ExtractRuleInfo | null;
  /** 采集黑名单路径列表 */
  ExcludePaths: ExcludePathInfo[] | null;
  /** 采集配置所属日志主题ID即TopicId */
  Output: string;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 用户自定义解析字符串 */
  UserDefineRule: string | null;
}

/** 投递任务出入参 Content */
declare interface ConsumerContent {
  /** 是否投递 TAG 信息 */
  EnableTag: boolean | null;
  /** 需要投递的元数据列表，目前仅支持：\_\_SOURCE\_\_，\_\_FILENAME\_\_，\_\_TIMESTAMP\_\_，\_\_HOSTNAME\_\_和\_\_PKGID\_\_ */
  MetaFields: string[] | null;
  /** 当EnableTag为true时，必须填写TagJsonNotTiled字段，TagJsonNotTiled用于标识tag信息是否json平铺，TagJsonNotTiled为true时不平铺，false时平铺 */
  TagJsonNotTiled?: boolean | null;
  /** 投递时间戳精度，可选项 [1:秒；2:毫秒] ，默认是秒 */
  TimestampAccuracy?: number | null;
}

/** 自建k8s-容器文件路径信息 */
declare interface ContainerFileInfo {
  /** namespace可以多个，用分隔号分割,例如A,B */
  Namespace: string;
  /** 容器名称 */
  Container: string;
  /** 日志文件夹 */
  LogPath: string;
  /** 日志名称 */
  FilePattern: string;
  /** pod标签信息 */
  IncludeLabels?: string[] | null;
  /** 工作负载信息 */
  WorkLoad?: ContainerWorkLoadInfo | null;
  /** 需要排除的namespace可以多个，用分隔号分割,例如A,B */
  ExcludeNamespace?: string | null;
  /** 需要排除的pod标签信息 */
  ExcludeLabels?: string[] | null;
}

/** 自建k8s-容器标准输出信息 */
declare interface ContainerStdoutInfo {
  /** 是否所有容器 */
  AllContainers: boolean;
  /** container为空表所有的，不为空采集指定的容器 */
  Container?: string | null;
  /** namespace可以多个，用分隔号分割,例如A,B；为空或者没有这个字段，表示所有namespace */
  Namespace?: string | null;
  /** pod标签信息 */
  IncludeLabels?: string[] | null;
  /** 工作负载信息 */
  WorkLoads?: ContainerWorkLoadInfo[] | null;
  /** 需要排除的namespace可以多个，用分隔号分割,例如A,B */
  ExcludeNamespace?: string | null;
  /** 需要排除的pod标签信息 */
  ExcludeLabels?: string[] | null;
}

/** 自建k8s-工作负载信息 */
declare interface ContainerWorkLoadInfo {
  /** 工作负载的类型 */
  Kind: string;
  /** 工作负载的名称 */
  Name: string;
  /** 容器名 */
  Container?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
}

/** 投递日志的内容格式配置 */
declare interface ContentInfo {
  /** 内容格式，支持json、csv */
  Format: string;
  /** csv格式内容描述 */
  Csv?: CsvInfo | null;
  /** json格式内容描述 */
  Json?: JsonInfo | null;
  /** parquet格式内容描述 */
  Parquet?: ParquetInfo | null;
}

/** cos导入配置信息 */
declare interface CosRechargeInfo {
  /** COS导入配置ID */
  Id: string | null;
  /** 日志主题ID */
  TopicId: string | null;
  /** 日志集ID */
  LogsetId: string | null;
  /** cos导入任务名称 */
  Name: string | null;
  /** cos存储桶 */
  Bucket: string | null;
  /** cos存储桶地域 */
  BucketRegion: string | null;
  /** cos存储桶前缀地址 */
  Prefix: string | null;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志；默认为minimalist_log */
  LogType: string | null;
  /** 状态 status 0: 已创建, 1: 运行中, 2: 已停止, 3: 已完成, 4: 运行失败。 */
  Status: number | null;
  /** 是否启用: 0： 未启用 ， 1：启用 */
  Enable: number | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 进度条百分值 */
  Progress: number | null;
  /** supported: "", "gzip", "lzop", "snappy”; 默认空 */
  Compress: string | null;
  /** 见： ExtractRuleInfo 结构描述 */
  ExtractRuleInfo: ExtractRuleInfo | null;
}

/** csv内容描述 */
declare interface CsvInfo {
  /** csv首行是否打印key */
  PrintKey: boolean;
  /** 每列key的名字 */
  Keys: string[] | null;
  /** 各字段间的分隔符 */
  Delimiter: string;
  /** 若字段内容中包含分隔符，则使用该转义符包裹改字段，只能填写单引号、双引号、空字符串 */
  EscapeChar: string;
  /** 对于上面指定的不存在字段使用该内容填充 */
  NonExistingField: string;
}

/** 黑名单path信息 */
declare interface ExcludePathInfo {
  /** 类型，选填File或Path */
  Type: string;
  /** Type对应的具体内容 */
  Value: string;
}

/** 日志导出信息 */
declare interface ExportInfo {
  /** 日志主题ID */
  TopicId: string;
  /** 日志导出任务ID */
  ExportId: string;
  /** 日志导出查询语句 */
  Query: string;
  /** 日志导出文件名 */
  FileName: string;
  /** 日志文件大小 */
  FileSize: number;
  /** 日志导出时间排序 */
  Order: string;
  /** 日志导出格式 */
  Format: string;
  /** 日志导出数量 */
  Count: number;
  /** 日志下载状态。Processing:导出正在进行中，Completed:导出完成，Failed:导出失败，Expired:日志导出已过期(三天有效期), Queuing 排队中 */
  Status: string;
  /** 日志导出起始时间 */
  From: number;
  /** 日志导出结束时间 */
  To: number;
  /** 日志导出路径 */
  CosPath: string;
  /** 日志导出创建时间 */
  CreateTime: string;
}

/** 日志提取规则 */
declare interface ExtractRuleInfo {
  /** 时间字段的key名字，time_key和time_format必须成对出现 */
  TimeKey?: string | null;
  /** 时间字段的格式，参考c语言的strftime函数对于时间的格式说明输出参数 */
  TimeFormat?: string | null;
  /** 分隔符类型日志的分隔符，只有log_type为delimiter_log时有效 */
  Delimiter?: string | null;
  /** 整条日志匹配规则，只有log_type为fullregex_log时有效 */
  LogRegex?: string | null;
  /** 行首匹配规则，只有log_type为multiline_log或fullregex_log时有效 */
  BeginRegex?: string | null;
  /** 取的每个字段的key名字，为空的key代表丢弃这个字段，只有log_type为delimiter_log时有效，json_log的日志使用json本身的key */
  Keys?: string[] | null;
  /** 需要过滤日志的key，及其对应的regex */
  FilterKeyRegex?: KeyRegexInfo[] | null;
  /** 解析失败日志是否上传，true表示上传，false表示不上传 */
  UnMatchUpLoadSwitch?: boolean | null;
  /** 失败日志的key */
  UnMatchLogKey?: string | null;
  /** 增量采集模式下的回溯数据量，默认-1（全量采集） */
  Backtracking?: number | null;
  /** 是否为Gbk编码. 0: 否, 1: 是 */
  IsGBK?: number | null;
  /** 是否为标准json. 0: 否, 1: 是 */
  JsonStandard?: number | null;
  /** syslog传输协议，取值为tcp或者udp。该字段适用于：创建采集规则配置、修改采集规则配置 */
  Protocol?: string | null;
  /** syslog系统日志采集指定采集器监听的地址和端口 ，形式：[ip]:[port]。举例：127.0.0.1:9000该字段适用于：创建采集规则配置、修改采集规则配置 */
  Address?: string | null;
  /** rfc3164：指定系统日志采集使用RFC3164协议解析日志。rfc5424：指定系统日志采集使用RFC5424协议解析日志。auto：自动匹配rfc3164或者rfc5424其中一种协议该字段适用于：创建采集规则配置、修改采集规则配置 */
  ParseProtocol?: string | null;
}

/** 过滤器 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Key: string;
  /** 需要过滤的值。 */
  Values: string[];
}

/** 投递日志的过滤规则 */
declare interface FilterRuleInfo {
  /** 过滤规则Key */
  Key: string;
  /** 过滤规则 */
  Regex: string;
  /** 过滤规则Value */
  Value: string;
}

/** 全文索引配置 */
declare interface FullTextInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean;
  /** 全文索引的分词符，其中的每个字符代表一个分词符；仅支持英文符号、\n\t\r及转义符\；注意：\n\t\r本身已被转义，直接使用双引号包裹即可作为入参，无需再次转义 */
  Tokenizer: string;
  /** 是否包含中文 */
  ContainZH?: boolean | null;
}

/** 直方图详细信息 */
declare interface HistogramInfo {
  /** 统计周期内的日志条数 */
  Count: number;
  /** 按 period 取整后的 unix timestamp： 单位毫秒 */
  BTime: number;
}

/** 自建k8s-节点文件配置信息 */
declare interface HostFileInfo {
  /** 日志文件夹 */
  LogPath: string;
  /** 日志文件名 */
  FilePattern: string;
  /** metadata信息 */
  CustomLabels?: string[] | null;
}

/** JSON类型描述 */
declare interface JsonInfo {
  /** 启用标志 */
  EnableTag: boolean;
  /** 元数据信息列表, 可选值为 __SOURCE__、__FILENAME__、__TIMESTAMP__、__HOSTNAME__。 */
  MetaFields: string[] | null;
}

/** 需要过滤日志的key，及其对应的regex */
declare interface KeyRegexInfo {
  /** 需要过滤日志的key */
  Key: string;
  /** key对应的过滤规则regex */
  Regex: string;
}

/** 键值或者元字段索引的字段信息 */
declare interface KeyValueInfo {
  /** 需要配置键值或者元字段索引的字段名称，仅支持字母、数字、下划线和-./@，且不能以下划线开头注意：1，元字段（tag）的Key无需额外添加`__TAG__.`前缀，与上传日志时对应的字段Key一致即可，腾讯云控制台展示时将自动添加`__TAG__.`前缀2，键值索引（KeyValue）及元字段索引（Tag）中的Key总数不能超过3003，Key的层级不能超过10层，例如a.b.c.d.e.f.g.h.j.k4，不允许同时包含json父子级字段，例如a及a.b */
  Key: string;
  /** 字段的索引描述信息 */
  Value: ValueInfo;
}

/** 日志上下文信息 */
declare interface LogContextInfo {
  /** 日志来源设备 */
  Source: string;
  /** 采集路径 */
  Filename: string;
  /** 日志内容 */
  Content: string;
  /** 日志包序号 */
  PkgId: string;
  /** 日志包内一条日志的序号 */
  PkgLogId: number;
  /** 日志时间戳 */
  BTime: number;
  /** 日志来源主机名称 */
  HostName: string | null;
}

/** 日志结果信息 */
declare interface LogInfo {
  /** 日志时间，单位ms */
  Time: number;
  /** 日志主题ID */
  TopicId: string;
  /** 日志主题名称 */
  TopicName: string;
  /** 日志来源IP */
  Source: string;
  /** 日志文件名称 */
  FileName: string;
  /** 日志上报请求包的ID */
  PkgId: string;
  /** 请求包内日志的ID */
  PkgLogId: string;
  /** 日志内容的Json序列化字符串 */
  LogJson: string | null;
  /** 日志来源主机名称 */
  HostName: string | null;
}

/** 日志中的KV对 */
declare interface LogItem {
  /** 日志Key */
  Key: string;
  /** 日志Value */
  Value: string;
}

/** LogItem的数组 */
declare interface LogItems {
  /** 分析结果返回的KV数据对 */
  Data: LogItem[];
}

/** 日志集相关信息 */
declare interface LogsetInfo {
  /** 日志集ID */
  LogsetId: string;
  /** 日志集名称 */
  LogsetName: string;
  /** 创建时间 */
  CreateTime: string;
  /** 云产品标识，日志集由其它云产品创建时，该字段会显示云产品名称，例如CDN、TKE */
  AssumerName: string | null;
  /** 日志集绑定的标签 */
  Tags: Tag[] | null;
  /** 日志集下日志主题的数目 */
  TopicCount: number;
  /** 若AssumerName非空，则表示创建该日志集的服务方角色 */
  RoleName: string;
}

/** 机器组信息 */
declare interface MachineGroupInfo {
  /** 机器组ID */
  GroupId: string;
  /** 机器组名称 */
  GroupName: string;
  /** 机器组类型 */
  MachineGroupType: MachineGroupTypeInfo;
  /** 创建时间 */
  CreateTime: string;
  /** 机器组绑定的标签列表 */
  Tags: Tag[] | null;
  /** 是否开启机器组自动更新 */
  AutoUpdate: string | null;
  /** 升级开始时间，建议业务低峰期升级LogListener */
  UpdateStartTime: string | null;
  /** 升级结束时间，建议业务低峰期升级LogListener */
  UpdateEndTime: string | null;
  /** 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费 */
  ServiceLogging: boolean | null;
}

/** 机器组类型描述 */
declare interface MachineGroupTypeInfo {
  /** 机器组类型，ip表示该机器组Values中存的是采集机器的IP地址，label表示该机器组Values中存储的是机器的标签 */
  Type: string;
  /** 机器描述列表 */
  Values: string[];
}

/** 机器状态信息 */
declare interface MachineInfo {
  /** 机器的IP */
  Ip: string;
  /** 机器状态，0:异常，1:正常 */
  Status: number;
  /** 机器离线时间，空为正常，异常返回具体时间 */
  OfflineTime: string;
  /** 机器是否开启自动升级。0:关闭，1:开启 */
  AutoUpdate: number;
  /** 机器当前版本号。 */
  Version: string;
  /** 机器升级功能状态。 */
  UpdateStatus: number;
  /** 机器升级结果标识。 */
  ErrCode: number;
  /** 机器升级结果信息。 */
  ErrMsg: string;
}

/** 告警策略中监控任务的执行时间点 */
declare interface MonitorTime {
  /** 可选值： Period - 周期执行 Fixed - 定期执行 */
  Type: string;
  /** 执行的周期，或者定制执行的时间节点。单位为分钟，取值范围为1~1440。 */
  Time: number;
}

/** 告警通知接收者信息 */
declare interface NoticeReceiver {
  /** 接受者类型。可选值： Uin - 用户ID Group - 用户组ID暂不支持其余接收者类型。 */
  ReceiverType: string;
  /** 接收者。 */
  ReceiverIds: number[];
  /** 通知接收渠道。 Email - 邮件 Sms - 短信 WeChat - 微信 Phone - 电话 */
  ReceiverChannels: string[];
  /** 允许接收信息的开始时间。 */
  StartTime?: string;
  /** 允许接收信息的结束时间。 */
  EndTime?: string;
  /** 位序 */
  Index?: number;
}

/** Parquet内容 */
declare interface ParquetInfo {
  /** ParquetKeyInfo数组 */
  ParquetKeyInfo: ParquetKeyInfo[];
}

/** Parquet内容描述 */
declare interface ParquetKeyInfo {
  /** 键值名称 */
  KeyName: string;
  /** 数据类型，目前支持6种类型：string、boolean、int32、int64、float、double */
  KeyType: string;
  /** 解析失败赋值信息 */
  KeyNonExistingField: string | null;
}

/** 日志主题分区信息 */
declare interface PartitionInfo {
  /** 分区ID */
  PartitionId: number;
  /** 分区的状态（readwrite或者是readonly） */
  Status: string;
  /** 分区哈希键起始key */
  InclusiveBeginKey: string;
  /** 分区哈希键结束key */
  ExclusiveEndKey: string;
  /** 分区创建时间 */
  CreateTime: string;
  /** 只读分区数据停止写入时间 */
  LastWriteTime: string | null;
}

/** 索引规则，FullText、KeyValue、Tag参数必须输入一个有效参数 */
declare interface RuleInfo {
  /** 全文索引配置, 如果为空时代表未开启全文索引 */
  FullText?: FullTextInfo | null;
  /** 键值索引配置，如果为空时代表未开启键值索引 */
  KeyValue?: RuleKeyValueInfo | null;
  /** 元字段索引配置，如果为空时代表未开启元字段索引 */
  Tag?: RuleTagInfo | null;
}

/** 键值索引配置 */
declare interface RuleKeyValueInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean;
  /** 需要建立索引的键值对信息 */
  KeyValues?: KeyValueInfo[];
}

/** 元字段索引配置 */
declare interface RuleTagInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean;
  /** 元字段索引配置中的字段信息 */
  KeyValues: KeyValueInfo[];
}

/** 投递规则 */
declare interface ShipperInfo {
  /** 投递规则ID */
  ShipperId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 投递的bucket地址 */
  Bucket: string;
  /** 投递的前缀目录 */
  Prefix: string;
  /** 投递规则的名字 */
  ShipperName: string;
  /** 投递的时间间隔，单位 秒 */
  Interval: number;
  /** 投递的文件的最大值，单位 MB */
  MaxSize: number;
  /** 是否生效 */
  Status: boolean;
  /** 投递日志的过滤规则 */
  FilterRules: FilterRuleInfo[] | null;
  /** 投递日志的分区规则，支持strftime的时间格式表示 */
  Partition: string;
  /** 投递日志的压缩配置 */
  Compress: CompressInfo | null;
  /** 投递日志的内容格式配置 */
  Content: ContentInfo | null;
  /** 投递日志的创建时间 */
  CreateTime: string;
  /** 投递文件命名配置，0：随机数命名，1：投递时间命名，默认0（随机数命名） */
  FilenameMode: number | null;
}

/** 投递任务信息 */
declare interface ShipperTaskInfo {
  /** 投递任务ID */
  TaskId: string;
  /** 投递信息ID */
  ShipperId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 本批投递的日志的开始时间戳，毫秒 */
  RangeStart: number;
  /** 本批投递的日志的结束时间戳， 毫秒 */
  RangeEnd: number;
  /** 本次投递任务的开始时间戳， 毫秒 */
  StartTime: number;
  /** 本次投递任务的结束时间戳， 毫秒 */
  EndTime: number;
  /** 本次投递的结果，"success","running","failed" */
  Status: string;
  /** 结果的详细信息 */
  Message: string;
}

/** 创建资源实例时同时绑定的标签对说明 */
declare interface Tag {
  /** 标签键 */
  Key: string | null;
  /** 标签值 */
  Value: string | null;
}

/** 日志主题信息 */
declare interface TopicInfo {
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 日志主题名称 */
  TopicName: string;
  /** 主题分区个数 */
  PartitionCount: number;
  /** 是否开启索引 */
  Index: boolean;
  /** 云产品标识，日志主题由其它云产品创建时，该字段会显示云产品名称，例如CDN、TKE */
  AssumerName: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 日主主题是否开启采集 */
  Status: boolean;
  /** 日志主题绑定的标签信息 */
  Tags: Tag[] | null;
  /** 该主题是否开启自动分裂 */
  AutoSplit: boolean | null;
  /** 若开启自动分裂的话，该主题能够允许的最大分区数 */
  MaxSplitPartitions: number | null;
  /** 日主题的存储类型 */
  StorageType: string | null;
  /** 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存 */
  Period: number | null;
  /** 云产品二级标识，日志主题由其它云产品创建时，该字段会显示云产品名称及其日志类型的二级分类，例如TKE-Audit、TKE-Event。部分云产品仅有云产品标识(AssumerName)，无该字段。 */
  SubAssumerName: string | null;
  /** 日志主题描述 */
  Describes: string | null;
  /** 开启日志沉降，热存储的生命周期， hotPeriod < Period。热存储为 hotPeriod, 冷存储则为 Period-hotPeriod。 */
  HotPeriod: number | null;
}

/** 需要开启键值索引的字段的索引描述信息 */
declare interface ValueInfo {
  /** 字段类型，目前支持的类型有：long、text、double */
  Type: string;
  /** 字段的分词符，其中的每个字符代表一个分词符；仅支持英文符号、\n\t\r及转义符\；long及double类型字段需为空；注意：\n\t\r本身已被转义，直接使用双引号包裹即可作为入参，无需再次转义 */
  Tokenizer?: string;
  /** 字段是否开启分析功能 */
  SqlFlag?: boolean;
  /** 是否包含中文，long及double类型字段需为false */
  ContainZH?: boolean | null;
}

/** 回调地址 */
declare interface WebCallback {
  /** 回调地址。 */
  Url: string;
  /** 回调的类型。可选值： WeCom Http */
  CallbackType: string;
  /** 回调方法。可选值： POST PUT默认值为POST。CallbackType为Http时为必选。 */
  Method?: string | null;
  /** 请求头。注意：该参数已废弃，请在创建告警策略接口CallBack参数中指定请求头。 */
  Headers?: string[] | null;
  /** 请求内容。注意：该参数已废弃，请在创建告警策略接口CallBack参数中指定请求内容。 */
  Body?: string | null;
  /** 序号 */
  Index?: number;
}

declare interface AddMachineGroupInfoRequest {
  /** 机器组ID */
  GroupId: string;
  /** 机器组类型目前type支持 ip 和 label */
  MachineGroupType: MachineGroupTypeInfo;
}

declare interface AddMachineGroupInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyConfigToMachineGroupRequest {
  /** 采集配置ID */
  ConfigId: string;
  /** 机器组ID */
  GroupId: string;
}

declare interface ApplyConfigToMachineGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseKafkaConsumerRequest {
  /** CLS对应的topic标识 */
  FromTopicId: string;
}

declare interface CloseKafkaConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlarmNoticeRequest {
  /** 通知渠道组名称。 */
  Name: string;
  /** 通知类型。可选值： Trigger - 告警触发 Recovery - 告警恢复 All - 告警触发和告警恢复 */
  Type: string;
  /** 通知接收对象。 */
  NoticeReceivers?: NoticeReceiver[];
  /** 接口回调信息（包括企业微信）。 */
  WebCallbacks?: WebCallback[];
}

declare interface CreateAlarmNoticeResponse {
  /** 告警模板ID */
  AlarmNoticeId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlarmRequest {
  /** 告警策略名称 */
  Name: string;
  /** 监控对象列表。 */
  AlarmTargets: AlarmTarget[];
  /** 监控任务运行时间点。 */
  MonitorTime: MonitorTime;
  /** 触发条件。 */
  Condition: string;
  /** 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。 */
  TriggerCount: number;
  /** 告警重复的周期。单位是分钟。取值范围是0~1440。 */
  AlarmPeriod: number;
  /** 关联的告警通知模板列表。 */
  AlarmNoticeIds: string[];
  /** 是否开启告警策略。默认值为true */
  Status?: boolean;
  /** 用户自定义告警内容 */
  MessageTemplate?: string;
  /** 用户自定义回调 */
  CallBack?: CallBackInfo;
  /** 多维分析 */
  Analysis?: AnalysisDimensional[];
}

declare interface CreateAlarmResponse {
  /** 告警策略ID。 */
  AlarmId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigExtraRequest {
  /** 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾 */
  Name: string;
  /** 日志主题id */
  TopicId: string;
  /** 类型：container_stdout、container_file、host_file */
  Type: string;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log */
  LogType: string;
  /** 采集配置标 */
  ConfigFlag: string;
  /** 日志集id */
  LogsetId: string;
  /** 日志集name */
  LogsetName: string;
  /** 日志主题名称 */
  TopicName: string;
  /** 节点文件配置信息 */
  HostFile?: HostFileInfo;
  /** 容器文件路径信息 */
  ContainerFile?: ContainerFileInfo;
  /** 容器标准输出信息 */
  ContainerStdout?: ContainerStdoutInfo;
  /** 日志格式化方式 */
  LogFormat?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 用户自定义采集规则，Json格式序列化的字符串 */
  UserDefineRule?: string;
  /** 绑定的机器组id */
  GroupId?: string;
  /** 绑定的机器组id列表 */
  GroupIds?: string[];
}

declare interface CreateConfigExtraResponse {
  /** 采集配置扩展信息ID */
  ConfigExtraId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigRequest {
  /** 采集配置名称 */
  Name: string;
  /** 采集配置所属日志主题ID即TopicId */
  Output: string;
  /** 日志采集路径,包含文件名 */
  Path?: string;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log */
  LogType?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 用户自定义采集规则，Json格式序列化的字符串 */
  UserDefineRule?: string;
}

declare interface CreateConfigResponse {
  /** 采集配置ID */
  ConfigId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsumerRequest {
  /** 投递任务绑定的日志主题 ID */
  TopicId: string;
  /** 是否投递日志的元数据信息，默认为 true */
  NeedContent?: boolean;
  /** 如果需要投递元数据信息，元数据信息的描述 */
  Content?: ConsumerContent;
  /** CKafka的描述 */
  Ckafka?: Ckafka;
  /** 投递时压缩方式，取值0，2，3。[0:NONE；2:SNAPPY；3:LZ4] */
  Compression?: number;
}

declare interface CreateConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCosRechargeRequest {
  /** 日志主题 ID */
  TopicId: string;
  /** 日志集ID */
  LogsetId: string;
  /** 投递任务名称 */
  Name: string;
  /** COS存储桶 */
  Bucket: string;
  /** COS存储桶所在地域 */
  BucketRegion: string;
  /** COS文件所在文件夹的前缀 */
  Prefix: string;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表单行全文；默认为minimalist_log */
  LogType: string;
  /** supported: "", "gzip", "lzop", "snappy”; 默认空 */
  Compress?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRuleInfo?: ExtractRuleInfo;
}

declare interface CreateCosRechargeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExportRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 日志导出数量, 最大值5000万 */
  Count: number;
  /** 日志导出检索语句，不支持[SQL语句] */
  Query: string;
  /** 日志导出起始时间，毫秒时间戳 */
  From: number;
  /** 日志导出结束时间，毫秒时间戳 */
  To: number;
  /** 日志导出时间排序。desc，asc，默认为desc */
  Order?: string;
  /** 日志导出数据格式。json，csv，默认为json */
  Format?: string;
}

declare interface CreateExportResponse {
  /** 日志导出ID。 */
  ExportId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIndexRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 索引规则 */
  Rule: RuleInfo;
  /** 是否生效，默认为true */
  Status?: boolean;
  /** 内置保留字段（`__FILENAME__`，`__HOSTNAME__`及`__SOURCE__`）是否包含至全文索引，默认为false，推荐设置为true* false:不包含* true:包含 */
  IncludeInternalFields?: boolean;
  /** 元数据字段（前缀为`__TAG__`的字段）是否包含至全文索引，默认为0，推荐设置为1* 0:仅包含开启键值索引的元数据字段* 1:包含所有元数据字段* 2:不包含任何元数据字段 */
  MetadataFlag?: number;
}

declare interface CreateIndexResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLogsetRequest {
  /** 日志集名字，不能重名 */
  LogsetName: string;
  /** 标签描述列表。最大支持10个标签键值对，并且不能有重复的键值对 */
  Tags?: Tag[];
}

declare interface CreateLogsetResponse {
  /** 日志集ID */
  LogsetId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMachineGroupRequest {
  /** 机器组名字，不能重复 */
  GroupName: string;
  /** 创建机器组类型，Type为ip，Values中为Ip字符串列表创建机器组，Type为label， Values中为标签字符串列表创建机器组 */
  MachineGroupType: MachineGroupTypeInfo;
  /** 标签描述列表，通过指定该参数可以同时绑定标签到相应的机器组。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。 */
  Tags?: Tag[];
  /** 是否开启机器组自动更新 */
  AutoUpdate?: boolean;
  /** 升级开始时间，建议业务低峰期升级LogListener */
  UpdateStartTime?: string;
  /** 升级结束时间，建议业务低峰期升级LogListener */
  UpdateEndTime?: string;
  /** 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费 */
  ServiceLogging?: boolean;
}

declare interface CreateMachineGroupResponse {
  /** 机器组ID */
  GroupId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateShipperRequest {
  /** 创建的投递规则所属的日志主题ID */
  TopicId: string;
  /** 创建的投递规则投递的bucket */
  Bucket: string;
  /** 创建的投递规则投递目录的前缀 */
  Prefix: string;
  /** 投递规则的名字 */
  ShipperName: string;
  /** 投递的时间间隔，单位 秒，默认300，范围 300-900 */
  Interval?: number;
  /** 投递的文件的最大值，单位 MB，默认256，范围 100-256 */
  MaxSize?: number;
  /** 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递 */
  FilterRules?: FilterRuleInfo[];
  /** 投递日志的分区规则，支持strftime的时间格式表示 */
  Partition?: string;
  /** 投递日志的压缩配置 */
  Compress?: CompressInfo;
  /** 投递日志的内容格式配置 */
  Content?: ContentInfo;
  /** 投递文件命名配置，0：随机数命名，1：投递时间命名，默认0（随机数命名） */
  FilenameMode?: number;
}

declare interface CreateShipperResponse {
  /** 投递任务ID */
  ShipperId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRequest {
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题名称 */
  TopicName: string;
  /** 日志主题分区个数。默认创建1个，最大支持创建10个分区。 */
  PartitionCount?: number;
  /** 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。 */
  Tags?: Tag[];
  /** 是否开启自动分裂，默认值为true */
  AutoSplit?: boolean;
  /** 开启自动分裂后，每个主题能够允许的最大分区数，默认值为50 */
  MaxSplitPartitions?: number;
  /** 日志主题的存储类型，可选值 hot（标准存储），cold（低频存储）；默认为hot。 */
  StorageType?: string;
  /** 生命周期，单位天，标准存储取值范围1\~3600，低频存储取值范围7\~3600天。取值为3640时代表永久保存 */
  Period?: number;
}

declare interface CreateTopicResponse {
  /** 日志主题ID */
  TopicId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAlarmNoticeRequest {
  /** 通知渠道组ID */
  AlarmNoticeId: string;
}

declare interface DeleteAlarmNoticeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAlarmRequest {
  /** 告警策略ID。 */
  AlarmId: string;
}

declare interface DeleteAlarmResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigExtraRequest {
  /** 采集规则扩展配置ID */
  ConfigExtraId: string;
}

declare interface DeleteConfigExtraResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigFromMachineGroupRequest {
  /** 机器组ID */
  GroupId: string;
  /** 采集配置ID */
  ConfigId: string;
}

declare interface DeleteConfigFromMachineGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigRequest {
  /** 采集规则配置ID */
  ConfigId: string;
}

declare interface DeleteConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConsumerRequest {
  /** 投递任务绑定的日志主题 ID */
  TopicId: string;
}

declare interface DeleteConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteExportRequest {
  /** 日志导出ID */
  ExportId: string;
}

declare interface DeleteExportResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIndexRequest {
  /** 日志主题ID */
  TopicId: string;
}

declare interface DeleteIndexResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLogsetRequest {
  /** 日志集ID */
  LogsetId: string;
}

declare interface DeleteLogsetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMachineGroupInfoRequest {
  /** 机器组ID */
  GroupId: string;
  /** 机器组类型目前type支持 ip 和 label */
  MachineGroupType: MachineGroupTypeInfo;
}

declare interface DeleteMachineGroupInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMachineGroupRequest {
  /** 机器组ID */
  GroupId: string;
}

declare interface DeleteMachineGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteShipperRequest {
  /** 投递规则ID */
  ShipperId: string;
}

declare interface DeleteShipperResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicRequest {
  /** 日志主题ID */
  TopicId: string;
}

declare interface DeleteTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmNoticesRequest {
  /** name按照【通知渠道组名称】进行过滤。类型：String必选：否 alarmNoticeId按照【通知渠道组ID】进行过滤。类型：String必选：否 uid按照【接收用户ID】进行过滤。类型：String必选：否 groupId按照【接收用户组ID】进行过滤。类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
}

declare interface DescribeAlarmNoticesResponse {
  /** 告警通知模板列表。 */
  AlarmNotices: AlarmNotice[] | null;
  /** 符合条件的告警通知模板总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmsRequest {
  /** name按照【告警策略名称】进行过滤。类型：String必选：否 alarmId按照【告警策略ID】进行过滤。类型：String必选：否 topicId按照【监控对象的日志主题ID】进行过滤。类型：String必选：否 enable按照【启用状态】进行过滤。类型：String备注：enable参数值范围: 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False。 其它值将返回参数错误信息.必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
}

declare interface DescribeAlarmsResponse {
  /** 告警策略列表。 */
  Alarms: AlarmInfo[];
  /** 符合查询条件的告警策略数目。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigExtrasRequest {
  /** 支持的key： topicId,name, configExtraId, machineGroupId */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeConfigExtrasResponse {
  /** 采集配置列表 */
  Configs: ConfigExtraInfo[] | null;
  /** 过滤到的总数目 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigMachineGroupsRequest {
  /** 采集配置ID */
  ConfigId: string;
}

declare interface DescribeConfigMachineGroupsResponse {
  /** 采集规则配置绑定的机器组列表 */
  MachineGroups: MachineGroupInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigsRequest {
  /** configName按照【采集配置名称】进行模糊匹配过滤。类型：String必选：否 configId按照【采集配置ID】进行过滤。类型：String必选：否 topicId按照【日志主题】进行过滤。类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeConfigsResponse {
  /** 采集配置列表 */
  Configs: ConfigInfo[] | null;
  /** 过滤到的总数目 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumerRequest {
  /** 投递任务绑定的日志主题 ID */
  TopicId: string;
}

declare interface DescribeConsumerResponse {
  /** 投递任务是否生效 */
  Effective: boolean;
  /** 是否投递日志的元数据信息 */
  NeedContent: boolean;
  /** 如果需要投递元数据信息，元数据信息的描述 */
  Content: ConsumerContent | null;
  /** CKafka的描述 */
  Ckafka: Ckafka;
  /** 压缩方式[0:NONE；2:SNAPPY；3:LZ4] */
  Compression: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCosRechargesRequest {
  /** 日志主题 ID */
  TopicId: string;
  /** 状态 status 0: 已创建, 1: 运行中, 2: 已停止, 3: 已完成, 4: 运行失败。 */
  Status?: number;
  /** 是否启用: 0： 未启用 ， 1：启用 */
  Enable?: number;
}

declare interface DescribeCosRechargesResponse {
  /** 见: CosRechargeInfo 结构描述 */
  Data?: CosRechargeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExportsRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeExportsResponse {
  /** 日志导出列表 */
  Exports: ExportInfo[];
  /** 总数目 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIndexRequest {
  /** 日志主题ID */
  TopicId: string;
}

declare interface DescribeIndexResponse {
  /** 日志主题ID */
  TopicId: string;
  /** 是否生效 */
  Status: boolean;
  /** 索引配置信息 */
  Rule: RuleInfo | null;
  /** 索引修改时间，初始值为索引创建时间。 */
  ModifyTime: string;
  /** 内置保留字段（`__FILENAME__`，`__HOSTNAME__`及`__SOURCE__`）是否包含至全文索引* false:不包含* true:包含 */
  IncludeInternalFields: boolean | null;
  /** 元数据字段（前缀为`__TAG__`的字段）是否包含至全文索引* 0:仅包含开启键值索引的元数据字段* 1:包含所有元数据字段* 2:不包含任何元数据字段 */
  MetadataFlag: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogContextRequest {
  /** 要查询的日志主题ID */
  TopicId: string;
  /** 日志时间, 格式: YYYY-mm-dd HH:MM:SS.FFF */
  BTime: string;
  /** 日志包序号 */
  PkgId: string;
  /** 日志包内一条日志的序号 */
  PkgLogId: number;
  /** 上文日志条数, 默认值10 */
  PrevLogs?: number;
  /** 下文日志条数, 默认值10 */
  NextLogs?: number;
}

declare interface DescribeLogContextResponse {
  /** 日志上下文信息集合 */
  LogContextInfos: LogContextInfo[];
  /** 上文日志是否已经返回 */
  PrevOver: boolean;
  /** 下文日志是否已经返回 */
  NextOver: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogHistogramRequest {
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 查询语句 */
  Query: string;
  /** 要查询的日志主题ID */
  TopicId?: string;
  /** 时间间隔: 单位ms 限制性条件：(To-From) / interval <= 200 */
  Interval?: number;
}

declare interface DescribeLogHistogramResponse {
  /** 统计周期： 单位ms */
  Interval: number;
  /** 命中关键字的日志总条数 */
  TotalCount: number;
  /** 周期内统计结果详情 */
  HistogramInfos: HistogramInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogsetsRequest {
  /** logsetName按照【日志集名称】进行过滤。类型：String必选：否 logsetId按照【日志集ID】进行过滤。类型：String必选：否 tagKey按照【标签键】进行过滤。类型：String必选：否 tag:tagKey按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeLogsetsResponse {
  /** 分页的总数目 */
  TotalCount: number;
  /** 日志集列表 */
  Logsets: LogsetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineGroupConfigsRequest {
  /** 机器组ID */
  GroupId: string;
}

declare interface DescribeMachineGroupConfigsResponse {
  /** 采集规则配置列表 */
  Configs: ConfigInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineGroupsRequest {
  /** machineGroupName按照【机器组名称】进行过滤。类型：String必选：否 machineGroupId按照【机器组ID】进行过滤。类型：String必选：否 tagKey按照【标签键】进行过滤。类型：String必选：否 tag:tagKey按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeMachineGroupsResponse {
  /** 机器组信息列表 */
  MachineGroups: MachineGroupInfo[] | null;
  /** 分页的总数目 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachinesRequest {
  /** 查询的机器组ID */
  GroupId: string;
}

declare interface DescribeMachinesResponse {
  /** 机器状态信息组 */
  Machines: MachineInfo[];
  /** 机器组是否开启自动升级功能 */
  AutoUpdate: number;
  /** 机器组自动升级功能预设开始时间 */
  UpdateStartTime: string;
  /** 机器组自动升级功能预设结束时间 */
  UpdateEndTime: string;
  /** 当前用户可用最新的Loglistener版本 */
  LatestAgentVersion: string;
  /** 是否开启服务日志 */
  ServiceLogging: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePartitionsRequest {
  /** 日志主题ID */
  TopicId: string;
}

declare interface DescribePartitionsResponse {
  /** 分区列表 */
  Partitions: PartitionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShipperTasksRequest {
  /** 投递规则ID */
  ShipperId: string;
  /** 查询的开始时间戳，支持最近3天的查询， 毫秒 */
  StartTime: number;
  /** 查询的结束时间戳， 毫秒 */
  EndTime: number;
}

declare interface DescribeShipperTasksResponse {
  /** 投递任务列表 */
  Tasks: ShipperTaskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShippersRequest {
  /** shipperName按照【投递规则名称】进行过滤。类型：String必选：否 shipperId按照【投递规则ID】进行过滤。类型：String必选：否 topicId按照【日志主题】进行过滤。类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeShippersResponse {
  /** 投递规则列表 */
  Shippers?: ShipperInfo[] | null;
  /** 本次查询获取到的总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicsRequest {
  /** topicName按照【日志主题名称】进行过滤。类型：String必选：否 logsetName按照【日志集名称】进行过滤。类型：String必选：否 topicId按照【日志主题ID】进行过滤。类型：String必选：否 logsetId按照【日志集ID】进行过滤，可通过调用DescribeLogsets查询已创建的日志集列表或登录控制台进行查看；也可以调用CreateLogset创建新的日志集。类型：String必选：否 tagKey按照【标签键】进行过滤。类型：String必选：否 tag:tagKey按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换，例如tag:exampleKey。类型：String必选：否 storageType按照【日志主题的存储类型】进行过滤。可选值 hot（标准存储），cold（低频存储）类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为100。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
}

declare interface DescribeTopicsResponse {
  /** 日志主题列表 */
  Topics?: TopicInfo[];
  /** 总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAlarmLogRequest {
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 查询语句，语句长度最大为1024 */
  Query: string;
  /** 单次查询返回的日志条数，最大值为1000 */
  Limit?: number;
  /** 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容 */
  Context?: string;
  /** 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc */
  Sort?: string;
  /** 为true代表使用新检索,响应参数AnalysisRecords和Columns有效， 为false时代表使用老检索方式, AnalysisResults和ColNames有效 */
  UseNewAnalysis?: boolean;
}

declare interface GetAlarmLogResponse {
  /** 加载后续内容的Context */
  Context?: string;
  /** 日志查询结果是否全部返回 */
  ListOver?: boolean;
  /** 返回的是否为分析结果 */
  Analysis?: boolean;
  /** 如果Analysis为True，则返回分析结果的列名，否则为空 */
  ColNames?: string[] | null;
  /** 日志查询结果；当Analysis为True时，可能返回为null */
  Results?: LogInfo[] | null;
  /** 日志分析结果；当Analysis为False时，可能返回为null */
  AnalysisResults?: LogItems[] | null;
  /** 新的日志分析结果; UseNewAnalysis为true有效 */
  AnalysisRecords?: string[] | null;
  /** 日志分析的列属性; UseNewAnalysis为true有效 */
  Columns?: Column[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MergePartitionRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 合并的PartitionId */
  PartitionId: number;
}

declare interface MergePartitionResponse {
  /** 合并结果集 */
  Partitions: PartitionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmNoticeRequest {
  /** 通知渠道组ID。 */
  AlarmNoticeId: string;
  /** 通知渠道组名称。 */
  Name?: string;
  /** 通知类型。可选值： Trigger - 告警触发 Recovery - 告警恢复 All - 告警触发和告警恢复 */
  Type?: string;
  /** 通知接收对象。 */
  NoticeReceivers?: NoticeReceiver[];
  /** 接口回调信息（包括企业微信）。 */
  WebCallbacks?: WebCallback[];
}

declare interface ModifyAlarmNoticeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmRequest {
  /** 告警策略ID。 */
  AlarmId: string;
  /** 告警策略名称 */
  Name?: string;
  /** 监控任务运行时间点。 */
  MonitorTime?: MonitorTime;
  /** 触发条件。 */
  Condition?: string;
  /** 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。 */
  TriggerCount?: number;
  /** 告警重复的周期。单位是分钟。取值范围是0~1440。 */
  AlarmPeriod?: number;
  /** 关联的告警通知模板列表。 */
  AlarmNoticeIds?: string[];
  /** 监控对象列表。 */
  AlarmTargets?: AlarmTarget[];
  /** 是否开启告警策略。 */
  Status?: boolean;
  /** 用户自定义告警内容 */
  MessageTemplate?: string;
  /** 用户自定义回调 */
  CallBack?: CallBackInfo;
  /** 多维分析 */
  Analysis?: AnalysisDimensional[];
}

declare interface ModifyAlarmResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConfigExtraRequest {
  /** 采集配置扩展信息id */
  ConfigExtraId: string;
  /** 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾 */
  Name?: string;
  /** 日志主题id */
  TopicId?: string;
  /** 节点文件配置信息 */
  HostFile?: HostFileInfo;
  /** 容器文件路径信息 */
  ContainerFile?: ContainerFileInfo;
  /** 容器标准输出信息 */
  ContainerStdout?: ContainerStdoutInfo;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log */
  LogType?: string;
  /** 日志格式化方式 */
  LogFormat?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 用户自定义采集规则，Json格式序列化的字符串 */
  UserDefineRule?: string;
  /** 类型：container_stdout、container_file、host_file */
  Type?: string;
  /** 机器组ID */
  GroupId?: string;
  /** 自建采集配置标 */
  ConfigFlag?: string;
  /** 日志集ID */
  LogsetId?: string;
  /** 日志集name */
  LogsetName?: string;
  /** 日志主题name */
  TopicName?: string;
}

declare interface ModifyConfigExtraResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConfigRequest {
  /** 采集规则配置ID */
  ConfigId: string;
  /** 采集规则配置名称 */
  Name?: string;
  /** 日志采集路径，包含文件名 */
  Path?: string;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log */
  LogType?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 采集配置关联的日志主题（TopicId） */
  Output?: string;
  /** 用户自定义解析字符串，Json格式序列化的字符串 */
  UserDefineRule?: string;
}

declare interface ModifyConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConsumerRequest {
  /** 投递任务绑定的日志主题 ID */
  TopicId: string;
  /** 投递任务是否生效，默认不生效 */
  Effective?: boolean;
  /** 是否投递日志的元数据信息，默认为 false */
  NeedContent?: boolean;
  /** 如果需要投递元数据信息，元数据信息的描述 */
  Content?: ConsumerContent;
  /** CKafka的描述 */
  Ckafka?: Ckafka;
  /** 投递时压缩方式，取值0，2，3。[0:NONE；2:SNAPPY；3:LZ4] */
  Compression?: number;
}

declare interface ModifyConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCosRechargeRequest {
  /** COS导入配置ID */
  Id: string;
  /** 日志主题Id */
  TopicId: string;
  /** COS导入任务名称 */
  Name?: string;
  /** 是否启用: 0： 未启用 ， 1：启用 */
  Enable?: number;
}

declare interface ModifyCosRechargeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIndexRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 默认不生效 */
  Status?: boolean;
  /** 索引规则 */
  Rule?: RuleInfo;
  /** 内置保留字段（`__FILENAME__`，`__HOSTNAME__`及`__SOURCE__`）是否包含至全文索引，默认为false，推荐设置为true* false:不包含* true:包含 */
  IncludeInternalFields?: boolean;
  /** 元数据字段（前缀为`__TAG__`的字段）是否包含至全文索引，默认为0，推荐设置为1* 0:仅包含开启键值索引的元数据字段* 1:包含所有元数据字段* 2:不包含任何元数据字段 */
  MetadataFlag?: number;
}

declare interface ModifyIndexResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLogsetRequest {
  /** 日志集ID */
  LogsetId: string;
  /** 日志集名称 */
  LogsetName?: string;
  /** 日志集的绑定的标签键值对。最大支持10个标签键值对，同一个资源只能同时绑定一个标签键。 */
  Tags?: Tag[];
}

declare interface ModifyLogsetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMachineGroupRequest {
  /** 机器组ID */
  GroupId: string;
  /** 机器组名称 */
  GroupName?: string;
  /** 机器组类型 */
  MachineGroupType?: MachineGroupTypeInfo;
  /** 标签列表 */
  Tags?: Tag[];
  /** 是否开启机器组自动更新 */
  AutoUpdate?: boolean;
  /** 升级开始时间，建议业务低峰期升级LogListener */
  UpdateStartTime?: string;
  /** 升级结束时间，建议业务低峰期升级LogListener */
  UpdateEndTime?: string;
  /** 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费 */
  ServiceLogging?: boolean;
}

declare interface ModifyMachineGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyShipperRequest {
  /** 投递规则ID */
  ShipperId: string;
  /** 投递规则投递的新的bucket */
  Bucket?: string;
  /** 投递规则投递的新的目录前缀 */
  Prefix?: string;
  /** 投递规则的开关状态 */
  Status?: boolean;
  /** 投递规则的名字 */
  ShipperName?: string;
  /** 投递的时间间隔，单位 秒，默认300，范围 300-900 */
  Interval?: number;
  /** 投递的文件的最大值，单位 MB，默认256，范围 100-256 */
  MaxSize?: number;
  /** 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递 */
  FilterRules?: FilterRuleInfo[];
  /** 投递日志的分区规则，支持strftime的时间格式表示 */
  Partition?: string;
  /** 投递日志的压缩配置 */
  Compress?: CompressInfo;
  /** 投递日志的内容格式配置 */
  Content?: ContentInfo;
  /** 投递文件命名配置，0：随机数命名，1：投递时间命名，默认0（随机数命名） */
  FilenameMode?: number;
}

declare interface ModifyShipperResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 日志主题名称 */
  TopicName?: string;
  /** 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，并且不能有重复的键值对。 */
  Tags?: Tag[];
  /** 该日志主题是否开始采集 */
  Status?: boolean;
  /** 是否开启自动分裂 */
  AutoSplit?: boolean;
  /** 若开启最大分裂，该主题能够能够允许的最大分区数 */
  MaxSplitPartitions?: number;
  /** 生命周期，单位天，标准存储取值范围1\~3600，低频存储取值范围7\~3600。取值为3640时代表永久保存 */
  Period?: number;
}

declare interface ModifyTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenKafkaConsumerRequest {
  /** CLS控制台创建的TopicId */
  FromTopicId: string;
  /** 压缩方式[0:NONE；2:SNAPPY；3:LZ4] */
  Compression?: number;
}

declare interface OpenKafkaConsumerResponse {
  /** 待消费TopicId */
  TopicID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryShipperTaskRequest {
  /** 投递规则ID */
  ShipperId: string;
  /** 投递任务ID */
  TaskId: string;
}

declare interface RetryShipperTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchLogRequest {
  /** 要检索分析的日志的起始时间，Unix时间戳（毫秒） */
  From: number;
  /** 要检索分析的日志的结束时间，Unix时间戳（毫秒） */
  To: number;
  /** 检索分析语句，最大长度为12KB语句由 [检索条件] | [SQL语句]构成，无需对日志进行统计分析时，可省略其中的管道符 | 及SQL语句使用*或空字符串可查询所有日志 */
  Query: string;
  /** 要检索分析的日志主题ID */
  TopicId?: string;
  /** 表示单次查询返回的原始日志条数，最大值为1000，获取后续日志需使用Context参数注意：* 仅当检索分析语句(Query)不包含SQL时有效* SQL结果条数指定方式参考SQL LIMIT语法 */
  Limit?: number;
  /** 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时注意：* 透传该参数时，请勿修改除该参数外的其它参数* 仅当检索分析语句(Query)不包含SQL时有效* SQL获取后续结果参考SQL LIMIT语法 */
  Context?: string;
  /** 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc注意：* 仅当检索分析语句(Query)不包含SQL时有效* SQL结果排序方式参考SQL ORDER BY语法 */
  Sort?: string;
  /** 为true代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效为false时代表使用老的检索结果返回方式, 输出AnalysisResults和ColNames有效两种返回方式在编码格式上有少量区别，建议使用true */
  UseNewAnalysis?: boolean;
  /** 执行统计分析（Query中包含SQL）时，是否对原始日志先进行采样，再进行统计分析。0：自动采样;0～1：按指定采样率采样，例如0.02;1：不采样，即精确分析默认值为1 */
  SamplingRate?: number;
}

declare interface SearchLogResponse {
  /** 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时 */
  Context: string;
  /** 符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志注意：仅当检索分析语句(Query)不包含SQL时有效 */
  ListOver: boolean;
  /** 返回的是否为统计分析（即SQL）结果 */
  Analysis: boolean;
  /** 匹配检索条件的原始日志 */
  Results: LogInfo[] | null;
  /** 日志统计分析结果的列名当UseNewAnalysis为false时生效 */
  ColNames: string[] | null;
  /** 日志统计分析结果当UseNewAnalysis为false时生效 */
  AnalysisResults: LogItems[] | null;
  /** 日志统计分析结果当UseNewAnalysis为true时生效 */
  AnalysisRecords: string[] | null;
  /** 日志统计分析结果的列属性当UseNewAnalysis为true时生效 */
  Columns: Column[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SplitPartitionRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 待分裂分区ID */
  PartitionId: number;
  /** 分区切分的哈希key的位置，只在Number=2时有意义 */
  SplitKey?: string;
  /** 分区分裂个数(可选)，默认等于2 */
  Number?: number;
}

declare interface SplitPartitionResponse {
  /** 分裂结果集 */
  Partitions: PartitionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadLogRequest {
  /** 主题id */
  TopicId: string;
  /** 根据 hashkey 写入相应范围的主题分区 */
  HashKey?: string;
  /** 压缩方法 */
  CompressType?: string;
}

declare interface UploadLogResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cls 日志服务} */
declare interface Cls {
  (): Versions;
  /** 添加机器组信息 {@link AddMachineGroupInfoRequest} {@link AddMachineGroupInfoResponse} */
  AddMachineGroupInfo(data: AddMachineGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddMachineGroupInfoResponse>;
  /** 应用采集配置到指定机器组 {@link ApplyConfigToMachineGroupRequest} {@link ApplyConfigToMachineGroupResponse} */
  ApplyConfigToMachineGroup(data: ApplyConfigToMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyConfigToMachineGroupResponse>;
  /** 关闭Kafka协议消费 {@link CloseKafkaConsumerRequest} {@link CloseKafkaConsumerResponse} */
  CloseKafkaConsumer(data: CloseKafkaConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<CloseKafkaConsumerResponse>;
  /** 创建告警策略 {@link CreateAlarmRequest} {@link CreateAlarmResponse} */
  CreateAlarm(data: CreateAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlarmResponse>;
  /** 创建通知渠道组 {@link CreateAlarmNoticeRequest} {@link CreateAlarmNoticeResponse} */
  CreateAlarmNotice(data: CreateAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlarmNoticeResponse>;
  /** 创建采集规则配置 {@link CreateConfigRequest} {@link CreateConfigResponse} */
  CreateConfig(data: CreateConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigResponse>;
  /** 创建特殊采集配置任务 {@link CreateConfigExtraRequest} {@link CreateConfigExtraResponse} */
  CreateConfigExtra(data: CreateConfigExtraRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigExtraResponse>;
  /** 创建投递任务 {@link CreateConsumerRequest} {@link CreateConsumerResponse} */
  CreateConsumer(data: CreateConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsumerResponse>;
  /** 创建cos导入任务 {@link CreateCosRechargeRequest} {@link CreateCosRechargeResponse} */
  CreateCosRecharge(data: CreateCosRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosRechargeResponse>;
  /** 创建日志下载任务 {@link CreateExportRequest} {@link CreateExportResponse} */
  CreateExport(data: CreateExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExportResponse>;
  /** 创建索引 {@link CreateIndexRequest} {@link CreateIndexResponse} */
  CreateIndex(data: CreateIndexRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIndexResponse>;
  /** 创建日志集 {@link CreateLogsetRequest} {@link CreateLogsetResponse} */
  CreateLogset(data: CreateLogsetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLogsetResponse>;
  /** 创建机器组 {@link CreateMachineGroupRequest} {@link CreateMachineGroupResponse} */
  CreateMachineGroup(data: CreateMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMachineGroupResponse>;
  /** 新建投递到COS的任务 {@link CreateShipperRequest} {@link CreateShipperResponse} */
  CreateShipper(data: CreateShipperRequest, config?: AxiosRequestConfig): AxiosPromise<CreateShipperResponse>;
  /** 创建日志主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 删除告警策略 {@link DeleteAlarmRequest} {@link DeleteAlarmResponse} */
  DeleteAlarm(data: DeleteAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlarmResponse>;
  /** 删除通知渠道组 {@link DeleteAlarmNoticeRequest} {@link DeleteAlarmNoticeResponse} */
  DeleteAlarmNotice(data: DeleteAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlarmNoticeResponse>;
  /** 删除采集规则配置 {@link DeleteConfigRequest} {@link DeleteConfigResponse} */
  DeleteConfig(data: DeleteConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigResponse>;
  /** 删除特殊采集规则配置 {@link DeleteConfigExtraRequest} {@link DeleteConfigExtraResponse} */
  DeleteConfigExtra(data: DeleteConfigExtraRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigExtraResponse>;
  /** 删除应用到机器组的采集配置 {@link DeleteConfigFromMachineGroupRequest} {@link DeleteConfigFromMachineGroupResponse} */
  DeleteConfigFromMachineGroup(data: DeleteConfigFromMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigFromMachineGroupResponse>;
  /** 删除投递配置 {@link DeleteConsumerRequest} {@link DeleteConsumerResponse} */
  DeleteConsumer(data: DeleteConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConsumerResponse>;
  /** 删除日志下载任务 {@link DeleteExportRequest} {@link DeleteExportResponse} */
  DeleteExport(data: DeleteExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteExportResponse>;
  /** 删除索引配置 {@link DeleteIndexRequest} {@link DeleteIndexResponse} */
  DeleteIndex(data: DeleteIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIndexResponse>;
  /** 删除日志集 {@link DeleteLogsetRequest} {@link DeleteLogsetResponse} */
  DeleteLogset(data: DeleteLogsetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogsetResponse>;
  /** 删除机器组 {@link DeleteMachineGroupRequest} {@link DeleteMachineGroupResponse} */
  DeleteMachineGroup(data: DeleteMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineGroupResponse>;
  /** 删除机器组信息 {@link DeleteMachineGroupInfoRequest} {@link DeleteMachineGroupInfoResponse} */
  DeleteMachineGroupInfo(data: DeleteMachineGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineGroupInfoResponse>;
  /** 删除投递规则 {@link DeleteShipperRequest} {@link DeleteShipperResponse} */
  DeleteShipper(data: DeleteShipperRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShipperResponse>;
  /** 删除日志主题 {@link DeleteTopicRequest} {@link DeleteTopicResponse} */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** 获取通知渠道组列表 {@link DescribeAlarmNoticesRequest} {@link DescribeAlarmNoticesResponse} */
  DescribeAlarmNotices(data?: DescribeAlarmNoticesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmNoticesResponse>;
  /** 获取告警策略列表 {@link DescribeAlarmsRequest} {@link DescribeAlarmsResponse} */
  DescribeAlarms(data?: DescribeAlarmsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmsResponse>;
  /** 获取特殊采集配置 {@link DescribeConfigExtrasRequest} {@link DescribeConfigExtrasResponse} */
  DescribeConfigExtras(data?: DescribeConfigExtrasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigExtrasResponse>;
  /** 获取采集规则配置所绑定的机器组 {@link DescribeConfigMachineGroupsRequest} {@link DescribeConfigMachineGroupsResponse} */
  DescribeConfigMachineGroups(data: DescribeConfigMachineGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigMachineGroupsResponse>;
  /** 获取采集规则配置 {@link DescribeConfigsRequest} {@link DescribeConfigsResponse} */
  DescribeConfigs(data?: DescribeConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigsResponse>;
  /** 获取投递配置 {@link DescribeConsumerRequest} {@link DescribeConsumerResponse} */
  DescribeConsumer(data: DescribeConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerResponse>;
  /** 获取cos导入配置 {@link DescribeCosRechargesRequest} {@link DescribeCosRechargesResponse} */
  DescribeCosRecharges(data: DescribeCosRechargesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosRechargesResponse>;
  /** 获取日志下载任务列表 {@link DescribeExportsRequest} {@link DescribeExportsResponse} */
  DescribeExports(data: DescribeExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportsResponse>;
  /** 获取索引配置信息 {@link DescribeIndexRequest} {@link DescribeIndexResponse} */
  DescribeIndex(data: DescribeIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexResponse>;
  /** 上下文检索 {@link DescribeLogContextRequest} {@link DescribeLogContextResponse} */
  DescribeLogContext(data: DescribeLogContextRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogContextResponse>;
  /** 获取日志数量直方图 {@link DescribeLogHistogramRequest} {@link DescribeLogHistogramResponse} */
  DescribeLogHistogram(data: DescribeLogHistogramRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogHistogramResponse>;
  /** 获取日志集列表 {@link DescribeLogsetsRequest} {@link DescribeLogsetsResponse} */
  DescribeLogsets(data?: DescribeLogsetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogsetsResponse>;
  /** 获取机器组绑定的采集规则配置 {@link DescribeMachineGroupConfigsRequest} {@link DescribeMachineGroupConfigsResponse} */
  DescribeMachineGroupConfigs(data: DescribeMachineGroupConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineGroupConfigsResponse>;
  /** 获取机器组列表 {@link DescribeMachineGroupsRequest} {@link DescribeMachineGroupsResponse} */
  DescribeMachineGroups(data?: DescribeMachineGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineGroupsResponse>;
  /** 获取机器状态 {@link DescribeMachinesRequest} {@link DescribeMachinesResponse} */
  DescribeMachines(data: DescribeMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachinesResponse>;
  /** 获取分区列表 {@link DescribePartitionsRequest} {@link DescribePartitionsResponse} */
  DescribePartitions(data: DescribePartitionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePartitionsResponse>;
  /** 获取投递任务列表 {@link DescribeShipperTasksRequest} {@link DescribeShipperTasksResponse} */
  DescribeShipperTasks(data: DescribeShipperTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShipperTasksResponse>;
  /** 获取投递到COS的任务配置信息 {@link DescribeShippersRequest} {@link DescribeShippersResponse} */
  DescribeShippers(data?: DescribeShippersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShippersResponse>;
  /** 获取日志主题列表 {@link DescribeTopicsRequest} {@link DescribeTopicsResponse} */
  DescribeTopics(data?: DescribeTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicsResponse>;
  /** 获取告警任务历史记录 {@link GetAlarmLogRequest} {@link GetAlarmLogResponse} */
  GetAlarmLog(data: GetAlarmLogRequest, config?: AxiosRequestConfig): AxiosPromise<GetAlarmLogResponse>;
  /** 合并分区 {@link MergePartitionRequest} {@link MergePartitionResponse} */
  MergePartition(data: MergePartitionRequest, config?: AxiosRequestConfig): AxiosPromise<MergePartitionResponse>;
  /** 修改告警策略 {@link ModifyAlarmRequest} {@link ModifyAlarmResponse} */
  ModifyAlarm(data: ModifyAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmResponse>;
  /** 修改通知渠道组 {@link ModifyAlarmNoticeRequest} {@link ModifyAlarmNoticeResponse} */
  ModifyAlarmNotice(data: ModifyAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmNoticeResponse>;
  /** 修改采集规则配置 {@link ModifyConfigRequest} {@link ModifyConfigResponse} */
  ModifyConfig(data: ModifyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigResponse>;
  /** 修改特殊采集配置任务 {@link ModifyConfigExtraRequest} {@link ModifyConfigExtraResponse} */
  ModifyConfigExtra(data: ModifyConfigExtraRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigExtraResponse>;
  /** 修改投递任务 {@link ModifyConsumerRequest} {@link ModifyConsumerResponse} */
  ModifyConsumer(data: ModifyConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConsumerResponse>;
  /** 修改cos导入任务 {@link ModifyCosRechargeRequest} {@link ModifyCosRechargeResponse} */
  ModifyCosRecharge(data: ModifyCosRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosRechargeResponse>;
  /** 修改索引 {@link ModifyIndexRequest} {@link ModifyIndexResponse} */
  ModifyIndex(data: ModifyIndexRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIndexResponse>;
  /** 修改日志集 {@link ModifyLogsetRequest} {@link ModifyLogsetResponse} */
  ModifyLogset(data: ModifyLogsetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogsetResponse>;
  /** 修改机器组 {@link ModifyMachineGroupRequest} {@link ModifyMachineGroupResponse} */
  ModifyMachineGroup(data: ModifyMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachineGroupResponse>;
  /** 修改投递规则 {@link ModifyShipperRequest} {@link ModifyShipperResponse} */
  ModifyShipper(data: ModifyShipperRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyShipperResponse>;
  /** 修改日志主题 {@link ModifyTopicRequest} {@link ModifyTopicResponse} */
  ModifyTopic(data: ModifyTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicResponse>;
  /** 打开Kafka协议消费 {@link OpenKafkaConsumerRequest} {@link OpenKafkaConsumerResponse} */
  OpenKafkaConsumer(data: OpenKafkaConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<OpenKafkaConsumerResponse>;
  /** 重试失败的投递任务 {@link RetryShipperTaskRequest} {@link RetryShipperTaskResponse} */
  RetryShipperTask(data: RetryShipperTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RetryShipperTaskResponse>;
  /** 检索分析日志 {@link SearchLogRequest} {@link SearchLogResponse} */
  SearchLog(data: SearchLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchLogResponse>;
  /** 分裂主题分区 {@link SplitPartitionRequest} {@link SplitPartitionResponse} */
  SplitPartition(data: SplitPartitionRequest, config?: AxiosRequestConfig): AxiosPromise<SplitPartitionResponse>;
  /** 上传日志 {@link UploadLogRequest} {@link UploadLogResponse} */
  UploadLog(data: UploadLogRequest, config?: AxiosRequestConfig): AxiosPromise<UploadLogResponse>;
}

export declare type Versions = ["2020-10-16"];

export default Cls;
