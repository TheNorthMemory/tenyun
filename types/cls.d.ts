/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 高级过滤规则 */
declare interface AdvanceFilterRuleInfo {
  /** 过滤字段 */
  Key: string | null;
  /** 过滤规则，0:等于，1:字段存在，2:字段不存在 */
  Rule: number | null;
  /** 过滤值 */
  Value?: string | null;
}

/** 告警多维分析一些配置信息 */
declare interface AlarmAnalysisConfig {
  /** 键。支持以下key：SyntaxRule：语法规则，value支持 0：Lucene语法；1： CQL语法。QueryIndex：执行语句序号。value支持 -1：自定义； 1：执行语句1； 2：执行语句2。CustomQuery：检索语句。 QueryIndex为-1时有效且必填，value示例： "* | select count(*) as count"。Fields：字段。value支持 __SOURCE__；__FILENAME__；__HOSTNAME__；__TIMESTAMP__；__INDEX_STATUS__；__PKG_LOGID__；__TOPIC__。Format：显示形式。value支持 1：每条日志一行；2：每条日志每个字段一行。Limit：最大日志条数。 value示例： 5。 */
  Key: string | null;
  /** 值。键对应值如下：SyntaxRule：语法规则，value支持 0：Lucene语法；1： CQL语法。QueryIndex：执行语句序号。value支持 -1：自定义； 1：执行语句1； 2：执行语句2。CustomQuery：检索语句。 QueryIndex为-1时有效且必填，value示例： "* | select count(*) as count"。Fields：字段。value支持 __SOURCE__；__FILENAME__；__HOSTNAME__；__TIMESTAMP__；__INDEX_STATUS__；__PKG_LOGID__；__TOPIC__。Format：显示形式。value支持 1：每条日志一行；2：每条日志每个字段一行。Limit：最大日志条数。 value示例： 5。 */
  Value: string | null;
}

/** 告警分类信息 */
declare interface AlarmClassification {
  /** 分类键 */
  Key: string;
  /** 分类值 */
  Value: string;
}

/** 告警策略描述 */
declare interface AlarmInfo {
  /** 告警策略名称。 */
  Name?: string;
  /** 监控对象列表。 */
  AlarmTargets?: AlarmTargetInfo[];
  /** 监控任务运行时间点。 */
  MonitorTime?: MonitorTime;
  /** 单触发条件。与MultiConditions参数互斥。 */
  Condition?: string;
  /** 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。 */
  TriggerCount?: number;
  /** 告警重复的周期。单位是min。取值范围是0~1440。 */
  AlarmPeriod?: number;
  /** 关联的告警通知模板列表。 */
  AlarmNoticeIds?: string[];
  /** 开启状态。 */
  Status?: boolean;
  /** 告警策略ID。 */
  AlarmId?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 最近更新时间。 */
  UpdateTime?: string;
  /** 自定义通知模板 */
  MessageTemplate?: string | null;
  /** 自定义回调模板 */
  CallBack?: CallBackInfo | null;
  /** 多维分析设置 */
  Analysis?: AnalysisDimensional[] | null;
  /** 分组触发状态。1：开启，0：关闭（默认） */
  GroupTriggerStatus?: boolean | null;
  /** 分组触发条件。 */
  GroupTriggerCondition?: string[] | null;
  /** 监控对象类型。0:执行语句共用监控对象;1:每个执行语句单独选择监控对象。 */
  MonitorObjectType?: number | null;
  /** 告警级别。0:警告(Warn);1:提醒(Info);2:紧急 (Critical)。 */
  AlarmLevel?: number | null;
  /** 多触发条件。与Condition互斥。 */
  MultiConditions?: MultiCondition[] | null;
}

/** 告警通知模板类型 */
declare interface AlarmNotice {
  /** 告警通知模板名称。 */
  Name?: string;
  /** 告警模板的类型。可选值： Trigger - 告警触发 Recovery - 告警恢复 All - 告警触发和告警恢复 */
  Type?: string;
  /** 告警通知模板接收者信息。 */
  NoticeReceivers?: NoticeReceiver[] | null;
  /** 告警通知模板回调信息。 */
  WebCallbacks?: WebCallback[] | null;
  /** 告警通知模板ID。 */
  AlarmNoticeId?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 最近更新时间。 */
  UpdateTime?: string | null;
  /** 通知规则。 */
  NoticeRules?: NoticeRule[] | null;
}

/** 告警屏蔽任务配置 */
declare interface AlarmShieldInfo {
  /** 通知渠道组Id */
  AlarmNoticeId?: string;
  /** 屏蔽规则id */
  TaskId?: string;
  /** 屏蔽开始时间（秒级时间戳）。 */
  StartTime?: number;
  /** 屏蔽结束时间（秒级时间戳）。 */
  EndTime?: number;
  /** 屏蔽类型。1：屏蔽所有通知，2：按照Rule参数屏蔽匹配规则的通知。 */
  Type?: number;
  /** 屏蔽规则，当Type为2时必填。规则填写方式详见[产品文档](https://cloud.tencent.com/document/product/614/103178)。 */
  Rule?: string | null;
  /** 屏蔽原因。 */
  Reason?: string;
  /** 规则创建来源。1. 控制台，2.api，3.告警通知 */
  Source?: number;
  /** 操作者。 */
  Operator?: string;
  /** 规则状态。0：暂未生效，1：生效中，2：已失效 */
  Status?: number;
  /** 规则创建时间。 */
  CreateTime?: number;
  /** 规则更新时间。 */
  UpdateTime?: number;
}

/** 告警对象 */
declare interface AlarmTarget {
  /** 日志主题ID。 */
  TopicId: string | null;
  /** 查询语句。 */
  Query: string | null;
  /** 告警对象序号；从1开始递增。 */
  Number: number | null;
  /** 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。 */
  StartTimeOffset: number | null;
  /** 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。 */
  EndTimeOffset: number | null;
  /** 日志集ID。 */
  LogsetId: string | null;
  /** 检索语法规则，默认值为0。0：Lucene语法，1：CQL语法。详细说明参见检索条件语法规则 */
  SyntaxRule?: number | null;
}

/** 告警对象 */
declare interface AlarmTargetInfo {
  /** 日志集ID。 */
  LogsetId?: string;
  /** 日志集名称。 */
  LogsetName?: string;
  /** 日志主题ID。 */
  TopicId?: string;
  /** 日志主题名称。 */
  TopicName?: string;
  /** 查询语句。 */
  Query?: string;
  /** 告警对象序号。 */
  Number?: number;
  /** 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。 */
  StartTimeOffset?: number;
  /** 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。 */
  EndTimeOffset?: number;
  /** 检索语法规则，默认值为0。0：Lucene语法，1：CQL语法。详细说明参见检索条件语法规则 */
  SyntaxRule?: number | null;
  /** 主题类型。0: 日志主题，1: 指标主题 */
  BizType?: number | null;
}

/** 告警通知渠道组详情 */
declare interface AlertHistoryNotice {
  /** 通知渠道组名称 */
  Name: string;
  /** 通知渠道组ID */
  AlarmNoticeId: string;
}

/** 告警历史详情 */
declare interface AlertHistoryRecord {
  /** 告警历史ID */
  RecordId: string;
  /** 告警策略ID */
  AlarmId: string;
  /** 告警策略名称 */
  AlarmName: string;
  /** 监控对象ID */
  TopicId: string;
  /** 监控对象名称 */
  TopicName: string;
  /** 监控对象所属地域 */
  Region: string;
  /** 触发条件 */
  Trigger: string;
  /** 持续周期，持续满足触发条件TriggerCount个周期后，再进行告警 */
  TriggerCount: number;
  /** 告警通知发送频率，单位为分钟 */
  AlarmPeriod: number;
  /** 通知渠道组 */
  Notices: AlertHistoryNotice[];
  /** 告警持续时间，单位为分钟 */
  Duration: number;
  /** 告警状态，0代表未恢复，1代表已恢复，2代表已失效 */
  Status: number;
  /** 告警发生时间，毫秒级Unix时间戳 */
  CreateTime: number;
  /** 告警分组触发时对应的分组信息 */
  GroupTriggerCondition?: GroupTriggerConditionInfo[] | null;
  /** 告警级别，0代表警告(Warn)，1代表提醒(Info)，2代表紧急 (Critical) */
  AlarmLevel?: number | null;
  /** 监控对象类型。0:执行语句共用监控对象; 1:每个执行语句单独选择监控对象。 */
  MonitorObjectType?: number | null;
}

/** 多维分析的分析维度 */
declare interface AnalysisDimensional {
  /** 分析名称 */
  Name: string | null;
  /** 分析类型：query，field ，original */
  Type: string | null;
  /** 分析内容 */
  Content: string | null;
  /** 多维分析配置。当Analysis的Type字段为query（自定义）时，支持{"Key": "SyntaxRule", // 语法规则"Value": "1" //0：Lucene语法 ，1： CQL语法}当Analysis的Type字段为field（top5）时, 支持 { "Key": "QueryIndex", "Value": "-1" // -1：自定义， 1：执行语句1， 2：执行语句2},{ "Key": "CustomQuery", //检索语句。 QueryIndex为-1时有效且必填 "Value": "* | select count(*) as count"},{ "Key": "SyntaxRule", // 查不到这个字段也是老语法（Lucene） "Value": "0"//0:Lucene, 1:CQL} 当Analysis的Type字段为original（原始日志）时, 支持{ "Key": "Fields", "Value": "__SOURCE__,__HOSTNAME__,__TIMESTAMP__,__PKG_LOGID__,__TAG__.pod_ip"}, { "Key": "QueryIndex", "Value": "-1" // -1：自定义， 1：执行语句1， 2：执行语句2},{ "Key": "CustomQuery", // //检索语句。 QueryIndex为-1时有效且必填 "Value": "* | select count(*) as count"},{ "Key": "Format", //显示形式。1：每条日志一行，2：每条日志每个字段一行 "Value": "2"},{ "Key": "Limit", //最大日志条数 "Value": "5"},{ "Key": "SyntaxRule", // 查不到这个字段也是老语法 "Value": "0"//0:Lucene, 1:CQL} */
  ConfigInfo?: AlarmAnalysisConfig[] | null;
}

/** 免鉴权信息 */
declare interface AnonymousInfo {
  /** 操作列表，支持trackLog(JS/HTTP上传日志 )和realtimeProducer(kafka协议上传日志) */
  Operations?: string[];
  /** 条件列表 */
  Conditions?: ConditionInfo[];
}

/** 回调配置 */
declare interface CallBackInfo {
  /** 回调时的Body。可将各类告警变量放在请求内容中，详见[帮助文档](https://cloud.tencent.com/document/product/614/74718)。如下示例：```{"TopicId": "{{ .QueryLog[0][0].topicId }}","key": "{{.Alarm}}","time": "{{ .QueryLog[0][0].time }}","log": "{{ .QueryLog[0][0].content.__CONTENT__ }}","namespace": "{{ .QueryLog[0][0].content.__TAG__.namespace }}"}``` */
  Body: string;
  /** 回调时的HTTP请求头部字段。例如：下面请求头部字段来告知服务器请求主体的内容类型为JSON。```"Content-Type: application/json"``` */
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

/** 采集配置信息 */
declare interface CollectConfig {
  /** 指定采集类型的采集配置名称信息。当CollectInfo中Type为0：表示元数据配置，name为元数据名称。目前支持"container_id"，"container_name"，"image_name"，"namespace"，"pod_uid"，"pod_name"，"pod_ip"。当CollectInfo中Type为1：指定pod label，name为指定pod label名称。 */
  Name: string;
}

/** 采集配置信息 */
declare interface CollectInfo {
  /** 采集类型，必填字段。0：元数据配置。1：指定Pod Label。 */
  Type: number | null;
  /** 指定采集类型的采集配置信息。当Type为0时，CollectConfigs不允许为空。当Type为1时，CollectConfigs为空时，表示选择所有Pod Label；否则CollectConfigs为指定Pod Label。 */
  CollectConfigs?: CollectConfig[] | null;
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

/** 免鉴权条件信息 */
declare interface ConditionInfo {
  /** 条件属性，目前只支持VpcID */
  Attributes?: string;
  /** 条件规则，1:等于，2:不等于 */
  Rule?: number;
  /** 对应条件属性的值 */
  ConditionValue?: string;
}

/** 特殊采集规则配置信息 */
declare interface ConfigExtraInfo {
  /** 采集规则扩展配置ID */
  ConfigExtraId?: string;
  /** 采集规则名称 */
  Name?: string;
  /** 日志主题ID */
  TopicId?: string;
  /** 类型：container_stdout、container_file、host_file */
  Type?: string;
  /** 节点文件配置信息 */
  HostFile?: HostFileInfo | null;
  /** 容器文件路径信息 */
  ContainerFile?: ContainerFileInfo | null;
  /** 容器标准输出信息 */
  ContainerStdout?: ContainerStdoutInfo | null;
  /** 日志格式化方式 */
  LogFormat?: string | null;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log */
  LogType?: string | null;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo | null;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[] | null;
  /** 更新时间 */
  UpdateTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 用户自定义解析字符串 */
  UserDefineRule?: string | null;
  /** 机器组ID */
  GroupId?: string;
  /** 自建采集配置标 */
  ConfigFlag?: string | null;
  /** 日志集ID */
  LogsetId?: string | null;
  /** 日志集name */
  LogsetName?: string | null;
  /** 日志主题name */
  TopicName?: string | null;
  /** 采集相关配置信息。详情见 CollectInfo复杂类型配置。 */
  CollectInfos?: CollectInfo[] | null;
  /** 高级采集配置。 Json字符串， Key/Value定义为如下：- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false样例：{"ClsAgentFileTimeout":0,"ClsAgentMaxDepth":10,"ClsAgentParseFailMerge":true} */
  AdvancedConfig?: string | null;
}

/** 采集规则配置信息 */
declare interface ConfigInfo {
  /** 采集规则配置ID */
  ConfigId?: string;
  /** 采集规则配置名称 */
  Name?: string | null;
  /** 日志格式化方式 */
  LogFormat?: string | null;
  /** 日志采集路径 */
  Path?: string | null;
  /** 采集的日志类型。- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）；- service_syslog代表：syslog 采集（详见[采集 Syslog](https://cloud.tencent.com/document/product/614/81454)）；- windows_event_log代表：Windows事件日志（详见[采集 Windows 事件日志](https://cloud.tencent.com/document/product/614/96678)）。 */
  LogType?: string | null;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo | null;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[] | null;
  /** 采集配置所属日志主题ID即TopicId */
  Output?: string;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 用户自定义解析字符串，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)。 */
  UserDefineRule?: string | null;
  /** 高级采集配置。 Json字符串， Key/Value定义为如下：- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false样例：`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`控制台默认占位值：`{\"ClsAgentDefault\":0}` */
  AdvancedConfig?: string | null;
}

/** 控制台分享配置 */
declare interface ConsoleSharingConfig {
  /** 分享链接名称 */
  Name: string;
  /** 仪表盘: 1; 检索页:2 */
  Type: number;
  /** 分享链接有效期，单位：毫秒，最长支持30天 */
  DurationMilliseconds: number;
  /** 允许访问的资源列表，目前仅支持一个Resource */
  Resources: string[];
  /** 分享链接域名，可选范围- 公网匿名分享：填写clsshare.com- datasight内网匿名分享(若开启)：datasight内网域名 */
  Domain?: string | null;
  /** 验证码 */
  VerifyCode?: string | null;
  /** 默认查询范围的开始时间点，支持绝对时间(13位Unix时间戳)或相对时间表达式 */
  StartTime?: string;
  /** 默认查询范围的结束时间点，支持绝对时间(13位Unix时间戳)或相对时间表达式。注意，结束时间点要大于开始时间点 */
  EndTime?: string;
  /** 仅当StartTime/EndTime为相对时间时使用，基于NowTime计算绝对时间，默认为创建时间 */
  NowTime?: number | null;
  /** 默认的检索分析语句，仅当Type为2时使用 */
  Params?: ConsoleSharingParam[] | null;
  /** 是否允许访问者自行修改检索分析时间范围。默认不锁定（false） */
  IsLockTimeRange?: boolean;
  /** 是否允许访问者自行修改日志检索语句。在检索页分享中表示检索语句锁定状态；在仪表盘中表示过滤变量锁定状态。默认不锁定（false） */
  IsLockQuery?: boolean;
  /** 检索页分享是否允许访问者下载日志，默认不允许（false） */
  IsSupportLogExport?: boolean | null;
}

/** 控制台分享链接params参数 */
declare interface ConsoleSharingParam {
  /** 名称 */
  Name?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 投递任务出入参 Content */
declare interface ConsumerContent {
  /** 是否投递 TAG 信息。当EnableTag为true时，表示投递TAG元信息。 */
  EnableTag: boolean | null;
  /** 需要投递的元数据列表，目前仅支持：\_\_SOURCE\_\_，\_\_FILENAME\_\_，\_\_TIMESTAMP\_\_，\_\_HOSTNAME\_\_和\_\_PKGID\_\_ */
  MetaFields: string[] | null;
  /** 当EnableTag为true时，必须填写TagJsonNotTiled字段。TagJsonNotTiled用于标识tag信息是否json平铺。TagJsonNotTiled为true时不平铺，示例：TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`不平铺：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`TagJsonNotTiled为false时平铺，示例：TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`平铺：`{"__TAG__.fieldA":200,"__TAG__.fieldB":"text"}` */
  TagJsonNotTiled?: boolean | null;
  /** 投递时间戳精度，可选项 [1：秒；2：毫秒] ，默认是1。 */
  TimestampAccuracy?: number | null;
  /** 投递Json格式。JsonType为0：和原始日志一致，不转义。示例：日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`投递到Ckafka：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`JsonType为1：转义。示例：日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`投递到Ckafka：`{"a":"aa","b":"{\"b1\":\"b1b1\", \"c1\":\"c1c1\"}"}` */
  JsonType?: number | null;
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
  /** 日志文件信息 */
  FilePaths?: FilePathInfo[];
  /** pod标签信息 */
  IncludeLabels?: string[] | null;
  /** 工作负载信息 */
  WorkLoad?: ContainerWorkLoadInfo | null;
  /** 需要排除的namespace可以多个，用分隔号分割,例如A,B */
  ExcludeNamespace?: string | null;
  /** 需要排除的pod标签信息 */
  ExcludeLabels?: string[] | null;
  /** metadata信息 */
  CustomLabels?: string[] | null;
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
  /** metadata信息 */
  CustomLabels?: string[] | null;
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
  Id?: string | null;
  /** 日志主题ID */
  TopicId?: string | null;
  /** 日志集ID */
  LogsetId?: string | null;
  /** COS导入任务名称 */
  Name?: string | null;
  /** COS存储桶 */
  Bucket?: string | null;
  /** COS存储桶所在地域 */
  BucketRegion?: string | null;
  /** COS文件所在文件夹的前缀 */
  Prefix?: string | null;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表单行全文；默认为minimalist_log */
  LogType?: string | null;
  /** 状态 status 0: 已创建, 1: 运行中, 2: 已停止, 3: 已完成, 4: 运行失败。 */
  Status?: number | null;
  /** 是否启用: 0： 未启用 ， 1：启用 */
  Enable?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 进度条百分值 */
  Progress?: number | null;
  /** supported: "", "gzip", "lzop", "snappy”; 默认空 */
  Compress?: string | null;
  /** 见： ExtractRuleInfo 结构描述 */
  ExtractRuleInfo?: ExtractRuleInfo | null;
  /** COS导入任务类型。1：一次性导入任务；2：持续性导入任务。 */
  TaskType?: number | null;
  /** 元数据。支持 bucket，object。 */
  Metadata?: string[] | null;
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

/** 仪表盘信息 */
declare interface DashboardInfo {
  /** 仪表盘id */
  DashboardId: string;
  /** 仪表盘名字 */
  DashboardName: string;
  /** 仪表盘数据 */
  Data: string | null;
  /** 创建仪表盘的时间 */
  CreateTime: string;
  /** AssumerUin非空则表示创建该日志主题的服务方Uin */
  AssumerUin: number | null;
  /** RoleName非空则表示创建该日志主题的服务方使用的角色 */
  RoleName: string | null;
  /** AssumerName非空则表示创建该日志主题的服务方名称 */
  AssumerName: string | null;
  /** 日志主题绑定的标签信息 */
  Tags: Tag[] | null;
  /** 仪表盘所在地域： 为了兼容老的地域。 */
  DashboardRegion: string | null;
  /** 修改仪表盘的时间 */
  UpdateTime: string | null;
  /** 仪表盘对应的topic相关信息 */
  DashboardTopicInfos: DashboardTopicInfo[] | null;
}

/** 仪表盘订阅通知方式 */
declare interface DashboardNoticeMode {
  /** 仪表盘通知方式。Uin：腾讯云用户Group：腾讯云用户组Email：自定义EmailWeCom: 企业微信回调 */
  ReceiverType: string;
  /** 知方式对应的值。 当ReceiverType不是 Wecom 时，Values必填。 */
  Values?: string[];
  /** 仪表盘通知渠道。 支持：["Email","Sms","WeChat","Phone"]。 当ReceiverType是 Email 或 Wecom 时，ReceiverChannels不能赋值。 */
  ReceiverChannels?: string[] | null;
  /** 回调Url。 当ReceiverType是 Wecom 时，Url必填。 当ReceiverType不是 Wecom 时，Url不能填写。 */
  Url?: string | null;
}

/** 仪表盘订阅相关数据 */
declare interface DashboardSubscribeData {
  /** 仪表盘订阅通知方式。 */
  NoticeModes: DashboardNoticeMode[];
  /** 仪表盘订阅时间，为空标识取仪表盘默认的时间。 */
  DashboardTime?: string[] | null;
  /** 仪表盘订阅模板变量。 */
  TemplateVariables?: DashboardTemplateVariable[] | null;
  /** 时区。参考：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#SHANGHAI */
  Timezone?: string | null;
  /** 语言。 zh 中文、en`英文。 */
  SubscribeLanguage?: string | null;
  /** 调用链接域名。http:// 或者 https:// 开头，不能/结尾 */
  JumpDomain?: string | null;
  /** 自定义跳转链接。 */
  JumpUrl?: string | null;
}

/** 仪表盘订阅模板变量 */
declare interface DashboardTemplateVariable {
  /** key的值 */
  Key: string;
  /** key对应的values取值values */
  Values: string[];
}

/** 仪表盘关联的topic信息 */
declare interface DashboardTopicInfo {
  /** 主题id */
  TopicId: string;
  /** topic所在的地域 */
  Region: string;
}

/** 数据加工的资源信息 */
declare interface DataTransformResouceInfo {
  /** 目标主题id */
  TopicId: string;
  /** 别名 */
  Alias: string;
}

/** 数据加工任务基本详情 */
declare interface DataTransformTaskInfo {
  /** 数据加工任务名称 */
  Name?: string;
  /** 数据加工任务id */
  TaskId?: string;
  /** 任务启用状态，默认为1，正常开启, 2关闭 */
  EnableFlag?: number;
  /** 加工任务类型，1： DSL， 2：SQL */
  Type?: number;
  /** 源日志主题 */
  SrcTopicId?: string;
  /** 当前加工任务状态（1准备中/2运行中/3停止中/4已停止） */
  Status?: number;
  /** 加工任务创建时间 */
  CreateTime?: string;
  /** 最近修改时间 */
  UpdateTime?: string;
  /** 最后启用时间，如果需要重建集群，修改该时间 */
  LastEnableTime?: string;
  /** 日志主题名称 */
  SrcTopicName?: string;
  /** 日志集id */
  LogsetId?: string;
  /** 加工任务目的topic_id以及别名 */
  DstResources?: DataTransformResouceInfo[];
  /** 加工逻辑函数。 */
  EtlContent?: string;
  /** 数据加工类型。0：标准加工任务；1：前置加工任务。 */
  DataTransformType?: number | null;
}

/** 键值索引自动配置，启用后自动将日志内的字段添加到键值索引中，包括日志中后续新增的字段。 */
declare interface DynamicIndex {
  /** 键值索引自动配置开关 */
  Status?: boolean | null;
}

/** Windows事件日志采集配置 */
declare interface EventLog {
  /** 事件通道，支持Application，Security，Setup，System，ALL */
  EventChannel: string;
  /** 时间类型，1:用户自定义，2:当前时间 */
  TimeType: number;
  /** 时间，用户选择自定义时间类型时，需要指定时间 */
  Timestamp?: number;
  /** 事件ID过滤列表 */
  EventIDs?: string[];
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
  TopicId?: string;
  /** 日志导出任务ID */
  ExportId?: string;
  /** 日志导出查询语句 */
  Query?: string;
  /** 日志导出文件名 */
  FileName?: string;
  /** 日志文件大小 */
  FileSize?: number;
  /** 日志导出时间排序 */
  Order?: string;
  /** 日志导出格式 */
  Format?: string;
  /** 日志导出数量 */
  Count?: number;
  /** 日志下载状态。Processing:导出正在进行中，Completed:导出完成，Failed:导出失败，Expired:日志导出已过期(三天有效期), Queuing 排队中 */
  Status?: string;
  /** 日志导出起始时间 */
  From?: number;
  /** 日志导出结束时间 */
  To?: number;
  /** 日志导出路径,有效期一个小时，请尽快使用该路径下载。 */
  CosPath?: string;
  /** 日志导出创建时间 */
  CreateTime?: string;
  /** 语法规则。 默认值为0。0：Lucene语法，1：CQL语法。 */
  SyntaxRule?: number;
  /** 导出字段 */
  DerivedFields?: string[] | null;
}

/** 日志提取规则 */
declare interface ExtractRuleInfo {
  /** 时间字段的key名字，TikeKey和TimeFormat必须成对出现 */
  TimeKey?: string | null;
  /** 时间字段的格式，参考c语言的strftime函数对于时间的格式说明输出参数 */
  TimeFormat?: string | null;
  /** 分隔符类型日志的分隔符，只有LogType为delimiter_log时有效 */
  Delimiter?: string | null;
  /** 整条日志匹配规则，只有LogType为fullregex_log时有效 */
  LogRegex?: string | null;
  /** 行首匹配规则，只有LogType为multiline_log或fullregex_log时有效 */
  BeginRegex?: string | null;
  /** 取的每个字段的key名字，为空的key代表丢弃这个字段，只有LogType为delimiter_log时有效，json_log的日志使用json本身的key。限制100个。 */
  Keys?: string[] | null;
  /** 日志过滤规则列表（旧版），需要过滤日志的key，及其对应的regex。 注意：2.9.3及以上版本LogListener ，建议使用AdvanceFilterRules配置日志过滤规则。 */
  FilterKeyRegex?: KeyRegexInfo[] | null;
  /** 解析失败日志是否上传，true表示上传，false表示不上传 */
  UnMatchUpLoadSwitch?: boolean | null;
  /** 失败日志的key，当UnMatchUpLoadSwitch为true时必填 */
  UnMatchLogKey?: string | null;
  /** 增量采集模式下的回溯数据量，默认：-1（全量采集）；其他非负数表示增量采集（从最新的位置，往前采集${Backtracking}字节（Byte）的日志）最大支持1073741824（1G）。注意：- COS导入不支持此字段。 */
  Backtracking?: number | null;
  /** 是否为Gbk编码。 0：否；1：是。注意- 目前取0值时，表示UTF-8编码- COS导入不支持此字段。 */
  IsGBK?: number | null;
  /** 是否为标准json。 0：否； 1：是。- 标准json指采集器使用业界标准开源解析器进行json解析，非标json指采集器使用CLS自研json解析器进行解析，两种解析器没有本质区别，建议客户使用标准json进行解析。 */
  JsonStandard?: number | null;
  /** syslog传输协议，取值为tcp或者udp，只有在LogType为service_syslog时生效，其余类型无需填写。注意：- 该字段适用于：创建采集规则配置、修改采集规则配置。- COS导入不支持此字段。 */
  Protocol?: string | null;
  /** syslog系统日志采集指定采集器监听的地址和端口 ，形式：[ip]:[port]，只有在LogType为service_syslog时生效，其余类型无需填写。注意：- 该字段适用于：创建采集规则配置、修改采集规则配置。- COS导入不支持此字段。 */
  Address?: string | null;
  /** rfc3164：指定系统日志采集使用RFC3164协议解析日志。rfc5424：指定系统日志采集使用RFC5424协议解析日志。auto：自动匹配rfc3164或者rfc5424其中一种协议。只有在LogType为service_syslog时生效，其余类型无需填写。注意：- 该字段适用于：创建采集规则配置、修改采集规则配置- COS导入不支持此字段。 */
  ParseProtocol?: string | null;
  /** 元数据类型。0: 不使用元数据信息；1:使用机器组元数据；2:使用用户自定义元数据；3:使用采集配置路径。注意：- COS导入不支持此字段。 */
  MetadataType?: number;
  /** 采集配置路径正则表达式。注意：- MetadataType为3时必填。- COS导入不支持此字段。 */
  PathRegex?: string | null;
  /** 用户自定义元数据信息。注意：- MetadataType为2时必填。- COS导入不支持此字段。 */
  MetaTags?: MetaTagInfo[];
  /** Windows事件日志采集规则，只有在LogType为windows_event_log时生效，其余类型无需填写。 */
  EventLogRules?: EventLog[];
  /** 日志过滤规则列表（新版）。注意：- 2.9.3以下版本LogListener不支持， 请使用FilterKeyRegex配置日志过滤规则。- 自建k8s采集配置（CreateConfigExtra、ModifyConfigExtra）不支持此字段。 */
  AdvanceFilterRules?: AdvanceFilterRuleInfo[] | null;
}

/** 文件路径信息 */
declare interface FilePathInfo {
  /** 文件路径 */
  Path?: string;
  /** 文件名称 */
  File?: string;
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
  /** 全文索引的分词符，其中的每个字符代表一个分词符；仅支持英文符号、\n\t\r及转义符\；注意：\n\t\r本身已被转义，直接使用双引号包裹即可作为入参，无需再次转义。使用API Explorer进行调试时请使用JSON参数输入方式，以避免\n\t\r被重复转义 */
  Tokenizer: string;
  /** 是否包含中文 */
  ContainZH?: boolean | null;
}

/** 分组触发条件 */
declare interface GroupTriggerConditionInfo {
  /** 分组触发字段名称 */
  Key: string;
  /** 分组触发字段值 */
  Value: string;
}

/** 日志内容高亮描述信息 */
declare interface HighLightItem {
  /** 高亮的日志Key */
  Key: string;
  /** 高亮的语法 */
  Values: string[];
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
  /** 投递Json格式，0：字符串方式投递；1:以结构化方式投递 */
  JsonType?: number | null;
}

/** kafka协议消费内容 */
declare interface KafkaConsumerContent {
  /** 消费数据格式。 0：原始内容；1：JSON。 */
  Format: number;
  /** 是否投递 TAG 信息Format为0时，此字段不需要赋值 */
  EnableTag: boolean;
  /** 元数据信息列表, 可选值为：\_\_SOURCE\_\_、\_\_FILENAME\_\_、\_\_TIMESTAMP\_\_、\_\_HOSTNAME\_\_、\_\_PKGID\_\_Format为0时，此字段不需要赋值 */
  MetaFields: string[];
  /** tag数据处理方式：1:不平铺（默认值）；2:平铺。不平铺示例：TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`不平铺：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`平铺示例：TAG信息：`{"__TAG__":{"fieldA":200,"fieldB":"text"}}`平铺：`{"__TAG__.fieldA":200,"__TAG__.fieldB":"text"}` */
  TagTransaction?: number | null;
  /** 消费数据Json格式：1：不转义（默认格式）2：转义投递Json格式。JsonType为1：和原始日志一致，不转义。示例：日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`投递到Ckafka：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`JsonType为2：转义。示例：日志原文：`{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`投递到Ckafka：`{"a":"aa","b":"{\"b1\":\"b1b1\", \"c1\":\"c1c1\"}"}` */
  JsonType?: number;
}

/** Kafka访问协议 */
declare interface KafkaProtocolInfo {
  /** 协议类型，支持的协议类型包括 plaintext、sasl_plaintext 或 sasl_ssl。建议使用 sasl_ssl，此协议会进行连接加密同时需要用户认证。入参必填 */
  Protocol?: string | null;
  /** 加密类型，支持 PLAIN、SCRAM-SHA-256 或 SCRAM-SHA-512。当Protocol为sasl_plaintext或sasl_ssl时必填 */
  Mechanism?: string | null;
  /** 用户名。当Protocol为sasl_plaintext或sasl_ssl时必填 */
  UserName?: string | null;
  /** 用户密码。当Protocol为sasl_plaintext或sasl_ssl时必填 */
  Password?: string | null;
}

/** Kafka导入配置信息 */
declare interface KafkaRechargeInfo {
  /** Kafka数据订阅配置的ID。 */
  Id?: string | null;
  /** 日志主题ID */
  TopicId?: string | null;
  /** Kafka导入任务名称 */
  Name?: string | null;
  /** 导入Kafka类型，0: 腾讯云CKafka，1: 用户自建Kafka */
  KafkaType?: number | null;
  /** 腾讯云CKafka实例ID，KafkaType为0时必填 */
  KafkaInstance?: string | null;
  /** 服务地址 */
  ServerAddr?: string | null;
  /** ServerAddr是否为加密连接 */
  IsEncryptionAddr?: boolean | null;
  /** 加密访问协议，IsEncryptionAddr参数为true时必填 */
  Protocol?: KafkaProtocolInfo;
  /** 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开 */
  UserKafkaTopics?: string | null;
  /** 用户Kafka消费组名称 */
  ConsumerGroupName?: string | null;
  /** 状态 ，1：运行中；2：暂停。 */
  Status?: number | null;
  /** 导入数据位置，-2:最早（默认），-1：最晚 */
  Offset?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 日志导入规则 */
  LogRechargeRule?: LogRechargeRuleInfo | null;
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
  Source?: string;
  /** 采集路径 */
  Filename?: string;
  /** 日志内容 */
  Content?: string;
  /** 日志包序号 */
  PkgId?: string;
  /** 日志包内一条日志的序号 */
  PkgLogId?: number;
  /** 日志时间戳 */
  BTime?: number;
  /** 日志来源主机名称 */
  HostName?: string | null;
  /** 原始日志(仅在日志创建索引异常时有值) */
  RawLog?: string | null;
  /** 日志创建索引异常原因(仅在日志创建索引异常时有值) */
  IndexStatus?: string | null;
  /** 日志内容的高亮描述信息 */
  HighLights?: HighLightItem[] | null;
}

/** 日志结果信息 */
declare interface LogInfo {
  /** 日志时间，单位ms */
  Time?: number;
  /** 日志主题ID */
  TopicId?: string;
  /** 日志主题名称 */
  TopicName?: string;
  /** 日志来源IP */
  Source?: string;
  /** 日志文件名称 */
  FileName?: string;
  /** 日志上报请求包的ID */
  PkgId?: string;
  /** 请求包内日志的ID */
  PkgLogId?: string;
  /** 日志内容的Json序列化字符串 */
  LogJson?: string | null;
  /** 日志来源主机名称 */
  HostName?: string | null;
  /** 原始日志(仅在日志创建索引异常时有值) */
  RawLog?: string | null;
  /** 日志创建索引异常原因(仅在日志创建索引异常时有值) */
  IndexStatus?: string | null;
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

/** 日志导入规则 */
declare interface LogRechargeRuleInfo {
  /** 导入类型，支持json_log：json格式日志，minimalist_log: 单行全文，fullregex_log: 单行完全正则 */
  RechargeType: string;
  /** 解析编码格式，0: UTF-8（默认值），1: GBK */
  EncodingFormat: number;
  /** 使用默认时间，true：开启（默认值）， flase：关闭 */
  DefaultTimeSwitch: boolean;
  /** 整条日志匹配规则，只有RechargeType为fullregex_log时有效 */
  LogRegex?: string | null;
  /** 解析失败日志是否上传，true表示上传，false表示不上传 */
  UnMatchLogSwitch?: boolean;
  /** 解析失败日志的键名称 */
  UnMatchLogKey?: string | null;
  /** 解析失败日志时间来源，0: 系统当前时间，1: Kafka消息时间戳 */
  UnMatchLogTimeSrc?: number | null;
  /** 默认时间来源，0: 系统当前时间，1: Kafka消息时间戳 */
  DefaultTimeSrc?: number | null;
  /** 时间字段 */
  TimeKey?: string | null;
  /** 时间提取正则表达式 */
  TimeRegex?: string | null;
  /** 时间字段格式 */
  TimeFormat?: string | null;
  /** 时间字段时区 */
  TimeZone?: string | null;
  /** 元数据信息，Kafka导入支持kafka_topic,kafka_partition,kafka_offset,kafka_timestamp */
  Metadata?: string[] | null;
  /** 日志Key列表，RechargeType为full_regex_log时必填 */
  Keys?: string[] | null;
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
  GroupId?: string;
  /** 机器组名称 */
  GroupName?: string;
  /** 机器组类型 */
  MachineGroupType?: MachineGroupTypeInfo;
  /** 创建时间 */
  CreateTime?: string;
  /** 机器组绑定的标签列表 */
  Tags?: Tag[] | null;
  /** 是否开启机器组自动更新 */
  AutoUpdate?: string | null;
  /** 升级开始时间，建议业务低峰期升级LogListener */
  UpdateStartTime?: string | null;
  /** 升级结束时间，建议业务低峰期升级LogListener */
  UpdateEndTime?: string | null;
  /** 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费 */
  ServiceLogging?: boolean | null;
  /** 机器组中机器离线定期清理时间 */
  DelayCleanupTime?: number | null;
  /** 机器组元数据信息列表 */
  MetaTags?: MetaTagInfo[];
  /** 操作系统类型，0: Linux，1: windows */
  OSType?: number;
}

/** 机器组类型描述 */
declare interface MachineGroupTypeInfo {
  /** 机器组类型。支持 ip 和 label。- ip：表示该机器组Values中存的是采集机器的ip地址- label：表示该机器组Values中存储的是机器的标签 */
  Type: string;
  /** 机器描述列表。 */
  Values?: string[];
}

/** 机器状态信息 */
declare interface MachineInfo {
  /** 机器的IP */
  Ip?: string;
  /** 机器实例ID */
  InstanceID?: string | null;
  /** 机器状态，0:异常，1:正常 */
  Status?: number;
  /** 机器离线时间，空为正常，异常返回具体时间 */
  OfflineTime?: string;
  /** 机器是否开启自动升级。0:关闭，1:开启 */
  AutoUpdate?: number;
  /** 机器当前版本号。 */
  Version?: string;
  /** 机器升级功能状态。 0：升级成功；1：升级中；-1：升级失败。 */
  UpdateStatus?: number;
  /** 机器升级结果标识。0：成功；1200：升级成功；其他值表示异常。 */
  ErrCode?: number;
  /** 机器升级结果信息。“ok”：成功；“update success”：升级成功；其他值为失败原因。 */
  ErrMsg?: string;
}

/** 元数据信息 */
declare interface MetaTagInfo {
  /** 元数据key */
  Key?: string;
  /** 元数据value */
  Value?: string;
}

/** 过滤器 */
declare interface MetricLabel {
  /** 指标名称 */
  Key: string | null;
  /** 指标内容 */
  Value: string | null;
}

/** 告警策略中监控任务的执行时间点 */
declare interface MonitorTime {
  /** 执行周期， 可选值：`Period`、`Fixed`、`Cron`。- Period：固定频率- Fixed：固定时间- Cron：Cron表达式 */
  Type: string;
  /** 执行的周期，或者定制执行的时间节点。单位为分钟，取值范围为1~1440。当type为`Period`,`Fixed`时，time字段生效。 */
  Time?: number;
}

/** 多触发条件。 */
declare interface MultiCondition {
  /** 触发条件。 */
  Condition?: string | null;
  /** 告警级别。0:警告(Warn); 1:提醒(Info); 2:紧急 (Critical)。 不填则默认为0。 */
  AlarmLevel?: number | null;
}

/** 多日志主题检索相关信息 */
declare interface MultiTopicSearchInformation {
  /** 要检索分析的日志主题ID */
  TopicId?: string;
  /** 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时 */
  Context?: string;
}

/** 告警通知接收者信息 */
declare interface NoticeReceiver {
  /** 接受者类型。可选值：- Uin - 用户ID- Group - 用户组ID暂不支持其余接收者类型。 */
  ReceiverType: string;
  /** 接收者。当ReceiverType为Uin时，ReceiverIds的值为用户uid。[子用户信息查询](https://cloud.tencent.com/document/api/598/53486)当ReceiverType为Group时，ReceiverIds的值为用户组id。[CAM用户组](https://cloud.tencent.com/document/product/598/14985) */
  ReceiverIds: number[];
  /** 通知接收渠道。- Email - 邮件- Sms - 短信- WeChat - 微信- Phone - 电话 */
  ReceiverChannels: string[];
  /** 允许接收信息的开始时间。格式：`15:04:05`，必填。 */
  StartTime?: string;
  /** 允许接收信息的结束时间。格式：`15:04:05`，必填。 */
  EndTime?: string;
  /** 位序。- 入参时无效。- 出参时有效。 */
  Index?: number;
}

/** 通知规则 */
declare interface NoticeRule {
  /** 告警通知模板接收者信息。 */
  NoticeReceivers?: NoticeReceiver[] | null;
  /** 告警通知模板回调信息。 */
  WebCallbacks?: WebCallback[] | null;
  /** 匹配规则 JSON串。**rule规则树格式为嵌套结构体JSON字符串**`{"Value":"AND","Type":"Operation","Children":[{"Value":"OR","Type":"Operation","Children":[{"Type":"Condition","Value":"Level","Children":[{"Value":"In","Type":"Compare"},{"Value":"[1,0]","Type":"Value"}]},{"Type":"Condition","Value":"Level","Children":[{"Value":"NotIn","Type":"Compare"},{"Value":"[2]","Type":"Value"}]}]}]}`**rule规则树限制规则如下**：- 顶层rule中Type可取值：`Condition`，`Operation`- Type为`Operation`的子节点支持的Type可取值：`Condition`，`Operation`- Type为`Condition`的子节点支持的Type可取值：`String`，`Compare`，`Array`，`TimeRange`，`Value`，`Key`- 其他Type无子节点- 当rule Type为`Operation`时，value可取值：`AND`，`OR`- 当rule Type为`Condition`时，value不可为空，子节点个数不能小于2 - 当子节点Type为 `Compare` 时，value可取值：`>`，`<`，`>=`，`<=`，`=`，`!=`，`Between`，`NotBetween`，`=~`，`!=~`，`In`，`NotIn` - value为`Between`，`NotBetween`时，下一个子节点value必须是长度为2的数组 - value为`=~`，`!=~`时，下一个子节点value必须是一个正则表达式 - value为`In`，`NotIn`时， 下一个子节点value必须是一个数组**业务参数含义**：- Type：Condition 表示是规则条件，Value：Level 表示告警等级 - 子节点Type支持`Compare`，Value支持`In`，`NotIn` - 下一个子节点value支持的值：0（警告），1（提醒），2 （紧急）以下示例表示：告警等级属于提醒`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Level\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[1]\",\"Type\":\"Value\"}]}]}`- Type：Condition 表示是规则条件，Value：NotifyType 表示通知类型 - 子节点Type支持`Compare`，Value支持`In`，`NotIn` - 下一个子节点value支持的值：1（告警通知），2 （恢复通知）以下示例表示：通知类型属于告警通知或通知类型不属于恢复通知`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"NotifyType\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[1]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"NotifyType\",\"Children\":[{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[2]\",\"Type\":\"Value\"}]}]}]}`- Type：Condition 表示是规则条件，Value：AlarmID 表示告警策略 - 子节点Type支持`Compare`，Value支持`In`，`NotIn` - 下一个子节点value支持的值：告警策略id数组以下示例表示：告警策略属于alarm-53af048c-254b-4c73-bb48-xxx,alarm-6dfa8bc5-08da-4d64-b6cb-xxx或告警策略不属于alarm-1036314c-1e49-4cee-a8fb-xxx`"{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"AlarmID\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"alarm-53af048c-254b-4c73-bb48-xxx\\\",\\\"alarm-6dfa8bc5-08da-4d64-b6cb-xxx\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"AlarmID\",\"Children\":[{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"alarm-1036314c-1e49-4cee-a8fb-xxx\\\"]\",\"Type\":\"Value\"}]}]}]}"`- Type：Condition 表示是规则条件，Value：AlarmName 表示告警策略名称 - 子节点Type支持`Compare`，Value支持`=~`，`!=~` - 下一个子节点value支持的值：必须是正则表达式以下示例表示：告警策略名称正则匹配^test$或告警策略名称正则不匹配^hahaha$`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"AlarmName\",\"Children\":[{\"Value\":\"=~\",\"Type\":\"Compare\"},{\"Value\":\"^test$\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"AlarmName\",\"Children\":[{\"Value\":\"!=~\",\"Type\":\"Compare\"},{\"Value\":\"^hahaha$\",\"Type\":\"Value\"}]}]}]}`- Type：Condition 表示是规则条件，Value：Label 表示告警分类字段 - 子节点Type支持`Compare`，Value支持`In`，`NotIn`，`=~`，`!=~` - 下一个子节点value支持的值：`In`，`NotIn` 时value是数组，`=~`，`!=~`时value是正则表达式以下示例表示：告警分类字段key1属于v1或告警分类字段key2不属于v2或告警分类字段key3正则匹配^test$或告警分类字段key4正则不匹配^hahaha$`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key1\",\"Type\":\"Key\"},{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"v1\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key2\",\"Type\":\"Key\"},{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"v2\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key3\",\"Type\":\"Key\"},{\"Value\":\"=~\",\"Type\":\"Compare\"},{\"Value\":\"^test$\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key4\",\"Type\":\"Key\"},{\"Value\":\"!=~\",\"Type\":\"Compare\"},{\"Value\":\"^hahaha$\",\"Type\":\"Value\"}]}]}]}`- Type：Condition 表示是规则条件，Value：NotifyTime 表示通知时间 - 子节点Type支持`Compare`，Value支持`Between `，`NotBetween ` - 下一个子节点value支持的值：长度为2，格式为`14:20:36`的字符串数组以下示例表示：通知时间在指定范围内14:18:36至14:33:36或通知时间不在指定范围内14:20:36至14:30:36`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"NotifyTime\",\"Children\":[{\"Value\":\"Between\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"14:18:36\\\",\\\"14:33:36\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"NotifyTime\",\"Children\":[{\"Value\":\"NotBetween\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"14:20:36\\\",\\\"14:30:36\\\"]\",\"Type\":\"Value\"}]}]}]}`- Type：Condition 表示是规则条件，Value：Duration 表示告警持续时间 - 子节点Type支持`Compare`，Value支持`>`，`<`，`>=`，`<=` - 下一个子节点value支持的值：整型值单位分钟以下示例表示：告警持续时间大于1分钟或告警持续时间大于等于2分钟或告警持续时间小于3分钟或告警持续时间小于等于4分钟`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\">\",\"Type\":\"Compare\"},{\"Value\":1,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\">=\",\"Type\":\"Compare\"},{\"Value\":2,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\"<\",\"Type\":\"Compare\"},{\"Value\":3,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\"<=\",\"Type\":\"Compare\"},{\"Value\":4,\"Type\":\"Value\"}]}]}]}` */
  Rule?: string | null;
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

/** 预览数据详情 */
declare interface PreviewLogStatistic {
  /** 日志内容 */
  LogContent: string;
  /** 行号。从0开始 */
  LineNum: number;
  /** 目标日志主题 */
  DstTopicId?: string;
  /** 失败错误信息， 空字符串""表示正常 */
  FailReason?: string;
  /** 日志时间，格式：`2024-05-07 17:13:17.105`- 入参时无效- 出参时有效，为日志中的时间格式 */
  Time?: string;
  /** 目标topic-name */
  DstTopicName?: string | null;
}

/** 索引规则，FullText、KeyValue、Tag参数必须输入一个有效参数 */
declare interface RuleInfo {
  /** 全文索引配置, 为空时代表未开启全文索引 */
  FullText?: FullTextInfo | null;
  /** 键值索引配置，为空时代表未开启键值索引 */
  KeyValue?: RuleKeyValueInfo | null;
  /** 元字段索引配置，为空时代表未开启元字段索引 */
  Tag?: RuleTagInfo | null;
  /** 键值索引自动配置，为空时代表未开启该功能。启用后自动将日志内的字段添加到键值索引中，包括日志中后续新增的字段。 */
  DynamicIndex?: DynamicIndex | null;
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

/** ScheduledSql的资源信息 */
declare interface ScheduledSqlResouceInfo {
  /** 目标主题id */
  TopicId: string;
  /** 主题的地域信息 */
  Region?: string;
  /** 主题类型：0为日志主题，1为指标主题 */
  BizType?: number;
  /** 指标名称。当BizType为1时，MetricName需要填写 */
  MetricName?: string;
  /** 指标名称BizType为1时，优先使用MetricNames字段多指标只能填充到MetricNames字段，单指标建议填充到MetricName字段 */
  MetricNames?: string[];
  /** 指标维度，不接受时间类型。 */
  MetricLabels?: string[];
  /** 指标时间戳，默认值为SQL查询时间范围的左侧时间点，您也可以指定其他字段（类型为uinx时间、TimeStamp，精度毫秒）为指标时间戳。 */
  CustomTime?: string;
  /** 除了MetricLabels，您还可以使用该参数，为指标补充静态的维度。维度名以字母或下划线开头，后面可以跟字母、数字或下划线，长度小于等于1024 字节 */
  CustomMetricLabels?: MetricLabel[];
}

/** ScheduledSql任务详情 */
declare interface ScheduledSqlTaskInfo {
  /** ScheduledSql任务id */
  TaskId?: string;
  /** ScheduledSql任务名称 */
  Name?: string;
  /** 源日志主题id */
  SrcTopicId?: string;
  /** 源日志主题名称 */
  SrcTopicName?: string;
  /** 定时SQL分析目标主题 */
  DstResource?: ScheduledSqlResouceInfo;
  /** 任务创建时间 */
  CreateTime?: string;
  /** 任务更新时间 */
  UpdateTime?: string;
  /** 任务状态，1:运行 2:停止 3:异常-找不到源日志主题 4:异常-找不到目标主题5: 访问权限问题 6:内部故障 7:其他故障 */
  Status?: number;
  /** 任务启用状态，1开启, 2关闭 */
  EnableFlag?: number;
  /** 查询语句 */
  ScheduledSqlContent?: string;
  /** 调度开始时间 */
  ProcessStartTime?: string;
  /** 调度类型，1:持续运行 2:指定时间范围 */
  ProcessType?: number;
  /** 调度结束时间，当process_type=2时为必传字段 */
  ProcessEndTime?: string;
  /** 调度周期(分钟) */
  ProcessPeriod?: number;
  /** 查询的时间窗口. @m-15m, @m，意为近15分钟 */
  ProcessTimeWindow?: string;
  /** 执行延迟(秒) */
  ProcessDelay?: number;
  /** 源topicId的地域信息 */
  SrcTopicRegion?: string;
  /** 语法规则，0：Lucene语法，1：CQL语法 */
  SyntaxRule?: number | null;
  /** 是否开启投递服务日志。1：关闭，2：开启。 */
  HasServicesLog?: number | null;
}

/** 多日志主题检索错误信息 */
declare interface SearchLogErrors {
  /** 日志主题ID */
  TopicId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 错误码 */
  ErrorCodeStr?: string | null;
}

/** 多日志主题检索topic信息 */
declare interface SearchLogInfos {
  /** 日志主题ID */
  TopicId?: string;
  /** 日志存储生命周期 */
  Period?: number;
  /** 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时 */
  Context?: string | null;
}

/** 多主题检索返回信息 */
declare interface SearchLogTopics {
  /** 多日志主题检索对应的错误信息 */
  Errors?: SearchLogErrors[] | null;
  /** 多日志主题检索各日志主题信息 */
  Infos?: SearchLogInfos[] | null;
}

/** 投递规则 */
declare interface ShipperInfo {
  /** 投递规则ID */
  ShipperId?: string;
  /** 日志主题ID */
  TopicId?: string;
  /** 投递的bucket地址 */
  Bucket?: string;
  /** 投递的前缀目录 */
  Prefix?: string;
  /** 投递规则的名字 */
  ShipperName?: string;
  /** 投递的时间间隔，单位 秒 */
  Interval?: number;
  /** 投递的文件的最大值，单位 MB */
  MaxSize?: number;
  /** 是否生效 */
  Status?: boolean;
  /** 投递日志的过滤规则 */
  FilterRules?: FilterRuleInfo[] | null;
  /** 投递日志的分区规则，支持strftime的时间格式表示 */
  Partition?: string;
  /** 投递日志的压缩配置 */
  Compress?: CompressInfo | null;
  /** 投递日志的内容格式配置 */
  Content?: ContentInfo | null;
  /** 投递日志的创建时间 */
  CreateTime?: string;
  /** 投递文件命名配置，0：随机数命名，1：投递时间命名，默认0（随机数命名） */
  FilenameMode?: number | null;
  /** 投递数据范围的开始时间点 */
  StartTime?: number | null;
  /** 投递数据范围的结束时间点 */
  EndTime?: number | null;
  /** 历史数据投递的进度（仅当用户选择的数据内中历史数据时才有效） */
  Progress?: number | null;
  /** 历史数据全部投递完成剩余的时间（仅当用户选择的数据中有历史数据时才有效） */
  RemainTime?: number | null;
  /** 历史任务状态：0：实时任务1：任务准备中2：任务运行中3：任务运行异常4：任务运行结束 */
  HistoryStatus?: number | null;
  /** cos桶类型 */
  StorageType?: string | null;
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

/** 日志主题扩展信息 */
declare interface TopicExtendInfo {
  /** 日志主题免鉴权配置信息 */
  AnonymousAccess?: AnonymousInfo | null;
}

/** 仪表盘 topic与地域信息 */
declare interface TopicIdAndRegion {
  /** 日志主题id */
  TopicId: string;
  /** 日志主题id所在的地域id。id,地域,简称信息如下：- 1, 广州,ap-guangzhou- 4, 上海,ap-shanghai- 5, 中国香港,ap-hongkong- 7, 上海金融,ap-shanghai-fsi- 8, 北京,ap-beijing- 9, 新加坡,ap-singapore- 11, 深圳金融,ap-shenzhen-fsi- 15, 硅谷,na-siliconvalley- 16, 成都,ap-chengdu- 17, 法兰克福,eu-frankfurt- 18, 首尔,ap-seoul- 19, 重庆,ap-chongqing- 21, 孟买,ap-mumbai- 22, 弗吉尼亚,na-ashburn- 23, 曼谷,ap-bangkok- 25, 东京,ap-tokyo- 33, 南京,ap-nanjing- 46, 北京金融,ap-beijing-fsi- 72, 雅加达,ap-jakarta- 74, 圣保罗,sa-saopaulo */
  RegionId: number;
}

/** 主题基本信息 */
declare interface TopicInfo {
  /** 日志集ID */
  LogsetId?: string;
  /** 主题ID */
  TopicId?: string;
  /** 主题名称 */
  TopicName?: string;
  /** 主题分区个数 */
  PartitionCount?: number;
  /** 主题是否开启索引（主题类型需为日志主题） */
  Index?: boolean;
  /** 云产品标识，主题由其它云产品创建时，该字段会显示云产品名称，例如CDN、TKE */
  AssumerName?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 主题是否开启采集，true：开启采集；false：关闭采集。创建日志主题时默认开启，可通过SDK调用ModifyTopic修改此字段。控制台目前不支持修改此参数。 */
  Status?: boolean;
  /** 主题绑定的标签信息 */
  Tags?: Tag[] | null;
  /** 该主题是否开启自动分裂 */
  AutoSplit?: boolean | null;
  /** 若开启自动分裂的话，该主题能够允许的最大分区数 */
  MaxSplitPartitions?: number | null;
  /** 主题的存储类型 */
  StorageType?: string | null;
  /** 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存 */
  Period?: number | null;
  /** 云产品二级标识，日志主题由其它云产品创建时，该字段会显示云产品名称及其日志类型的二级分类，例如TKE-Audit、TKE-Event。部分云产品仅有云产品标识(AssumerName)，无该字段。 */
  SubAssumerName?: string | null;
  /** 主题描述 */
  Describes?: string | null;
  /** 开启日志沉降，标准存储的生命周期， hotPeriod < Period。标准存储为 hotPeriod, 低频存储则为 Period-hotPeriod。（主题类型需为日志主题）HotPeriod=0为没有开启日志沉降。 */
  HotPeriod?: number | null;
  /** 主题类型。- 0: 日志主题 - 1: 指标主题 */
  BizType?: number | null;
  /** 免鉴权开关。 false：关闭； true：开启。开启后将支持指定操作匿名访问该日志主题。详情请参见[日志主题](https://cloud.tencent.com/document/product/614/41035)。 */
  IsWebTracking?: boolean | null;
  /** 日志主题扩展信息 */
  Extends?: TopicExtendInfo | null;
}

/** 需要开启键值索引的字段的索引描述信息 */
declare interface ValueInfo {
  /** 字段类型，目前支持的类型有：long、text、double */
  Type: string;
  /** 字段的分词符，其中的每个字符代表一个分词符；仅支持英文符号、\n\t\r及转义符\；long及double类型字段需为空；注意：\n\t\r本身已被转义，直接使用双引号包裹即可作为入参，无需再次转义。使用API Explorer进行调试时请使用JSON参数输入方式，以避免\n\t\r被重复转义 */
  Tokenizer?: string;
  /** 字段是否开启分析功能 */
  SqlFlag?: boolean;
  /** 是否包含中文，long及double类型字段需为false */
  ContainZH?: boolean | null;
}

/** 回调地址 */
declare interface WebCallback {
  /** 回调地址。最大支持1024个字节数。 */
  Url: string;
  /** 回调的类型。可选值：- WeCom- Http- DingTalk- Lark */
  CallbackType: string;
  /** 回调方法。可选值：- POST（默认值）- PUT注意：- 参数CallbackType为Http时为必选。 */
  Method?: string | null;
  /** 请求头。注意：该参数已废弃，请在创建告警策略接口CallBack参数中指定请求头。 */
  Headers?: string[] | null;
  /** 请求内容。注意：该参数已废弃，请在创建告警策略接口CallBack参数中指定请求内容。 */
  Body?: string | null;
  /** 序号。- 入参无效。- 出参有效。 */
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

declare interface CheckFunctionRequest {
  /** 用户输入的加工语句 */
  EtlContent: string;
  /** 加工任务目的topic_id以及别名 */
  DstResources?: DataTransformResouceInfo[];
  /** 数据加工目标主题的类型. 1 固定主题 2动态创建 */
  FuncType?: number;
}

declare interface CheckFunctionResponse {
  /** 失败错误码 */
  ErrorCode?: number;
  /** 失败错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckRechargeKafkaServerRequest {
  /** 导入Kafka类型，0: 腾讯云CKafka；1: 用户自建Kafka。 */
  KafkaType: number;
  /** 腾讯云CKafka实例ID。KafkaType为0时，KafkaInstance必填 */
  KafkaInstance?: string;
  /** 服务地址。KafkaType为1时，ServerAddr必填 */
  ServerAddr?: string;
  /** ServerAddr是否为加密连接，默认值false。当KafkaType为1用户自建kafka时生效。 */
  IsEncryptionAddr?: boolean;
  /** 加密访问协议。KafkaType参数为1并且IsEncryptionAddr参数为true时必填。 */
  Protocol?: KafkaProtocolInfo;
}

declare interface CheckRechargeKafkaServerResponse {
  /** Kafka集群可访问状态，0：可正常访问 ... */
  Status?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseKafkaConsumerRequest {
  /** 日志主题ID */
  FromTopicId: string;
}

declare interface CloseKafkaConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlarmNoticeRequest {
  /** 通知渠道组名称。 */
  Name: string;
  /** 通知类型。可选值：- Trigger - 告警触发- Recovery - 告警恢复- All - 告警触发和告警恢复 注意: - Type、NoticeReceivers和WebCallbacks是一组rule配置，其中Type必填，NoticeReceivers和WebCallbacks至少一个不为空；NoticeRules是另一组rule配置，其中rule不许为空- 2组rule配置互斥- rule配置 与 deliver配置（DeliverStatus与DeliverConfig）至少填写一组配置 */
  Type?: string;
  /** 通知接收对象。 注意: - Type、NoticeReceivers和WebCallbacks是一组rule配置，其中Type必填，NoticeReceivers和WebCallbacks至少一个不为空；NoticeRules是另一组rule配置，其中rule不许为空- 2组rule配置互斥- rule配置 与 deliver配置（DeliverStatus与DeliverConfig）至少填写一组配置 */
  NoticeReceivers?: NoticeReceiver[];
  /** 接口回调信息（包括企业微信）。 注意: - Type、NoticeReceivers和WebCallbacks是一组rule配置，其中Type必填，NoticeReceivers和WebCallbacks至少一个不为空；NoticeRules是另一组rule配置，其中rule不许为空- 2组rule配置互斥- rule配置 与 deliver配置（DeliverStatus与DeliverConfig）至少填写一组配置 */
  WebCallbacks?: WebCallback[];
  /** 通知规则。 注意: - Type、NoticeReceivers和WebCallbacks是一组rule配置，其中Type必填，NoticeReceivers和WebCallbacks至少一个不为空；NoticeRules是另一组rule配置，其中rule不许为空- 2组rule配置互斥- rule配置 与 deliver配置（DeliverStatus与DeliverConfig）至少填写一组配置 */
  NoticeRules?: NoticeRule[];
}

declare interface CreateAlarmNoticeResponse {
  /** 告警模板ID */
  AlarmNoticeId?: string;
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
  /** 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为2000。 */
  TriggerCount: number;
  /** 告警重复的周期，单位是分钟。取值范围是0~1440。 */
  AlarmPeriod: number;
  /** 关联的告警通知模板列表。 */
  AlarmNoticeIds: string[];
  /** 触发条件 注意: - Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。 */
  Condition?: string;
  /** 告警级别0:警告(Warn); 1:提醒(Info); 2:紧急 (Critical)。注意: - 不填则默认为0。- Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。 */
  AlarmLevel?: number;
  /** 多触发条件 注意: - Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。 */
  MultiConditions?: MultiCondition[];
  /** 是否开启告警策略。默认值为true */
  Status?: boolean;
  /** 该参数已废弃，请使用Status参数控制是否开启告警策略。 */
  Enable?: boolean;
  /** 用户自定义告警内容 */
  MessageTemplate?: string;
  /** 用户自定义回调 */
  CallBack?: CallBackInfo;
  /** 多维分析 */
  Analysis?: AnalysisDimensional[];
  /** 分组触发状态。默认值false */
  GroupTriggerStatus?: boolean;
  /** 分组触发条件。 */
  GroupTriggerCondition?: string[];
  /** 标签描述列表，通过指定该参数可以同时绑定标签到相应的告警策略。最大支持10个标签键值对，并且不能有重复的键值对。 */
  Tags?: Tag[];
  /** 监控对象类型。0:执行语句共用监控对象; 1:每个执行语句单独选择监控对象。 不填则默认为0。当值为1时，AlarmTargets元素个数不能超过10个，AlarmTargets中的Number必须是从1开始的连续正整数，不能重复。 */
  MonitorObjectType?: number;
  /** 告警附加分类信息列表。Classifications元素个数不能超过20个。Classifications元素的Key不能为空，不能重复，长度不能超过50个字符，符合正则 `^[a-z]([a-z0-9_]{0,49})$`。Classifications元素的Value长度不能超过200个字符。 */
  Classifications?: AlarmClassification[];
}

declare interface CreateAlarmResponse {
  /** 告警策略ID。 */
  AlarmId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlarmShieldRequest {
  /** 通知渠道组id。 */
  AlarmNoticeId: string;
  /** 屏蔽开始时间（秒级时间戳）。 */
  StartTime: number;
  /** 屏蔽结束时间（秒级时间戳）。 */
  EndTime: number;
  /** 屏蔽类型。1：屏蔽所有通知，2：按照Rule参数屏蔽匹配规则的通知。 */
  Type: number;
  /** 屏蔽原因。 */
  Reason: string;
  /** 屏蔽规则，当Type为2时必填。规则填写方式详见[产品文档](https://cloud.tencent.com/document/product/614/103178)。 */
  Rule?: string;
}

declare interface CreateAlarmShieldResponse {
  /** 屏蔽规则ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigExtraRequest {
  /** 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾 */
  Name: string;
  /** 日志主题id */
  TopicId: string;
  /** 日志源类型。支持 container_stdout：容器标准输出；container_file：容器文件路径；host_file：节点文件路径。 */
  Type: string;
  /** 采集的日志类型，默认为minimalist_log。支持以下类型：- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）。 */
  LogType: string;
  /** 采集配置标记。- 目前只支持label_k8s，用于标记自建k8s集群使用的采集配置 */
  ConfigFlag: string;
  /** 日志集id */
  LogsetId: string;
  /** 日志集name */
  LogsetName: string;
  /** 日志主题名称 */
  TopicName: string;
  /** 节点文件路径类型配置。 */
  HostFile?: HostFileInfo;
  /** 容器文件路径类型配置。 */
  ContainerFile?: ContainerFileInfo;
  /** 容器标准输出类型配置。 */
  ContainerStdout?: ContainerStdoutInfo;
  /** 日志格式化方式，用于容器采集场景。- stdout-docker-json：用于docker容器采集场景- stdout-containerd：用于containerd容器采集场景 */
  LogFormat?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 组合解析采集规则，用于复杂场景下的日志采集。- 取值参考：[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310) */
  UserDefineRule?: string;
  /** 绑定的机器组id */
  GroupId?: string;
  /** 绑定的机器组id列表 */
  GroupIds?: string[];
  /** 采集相关配置信息。详情见CollectInfo复杂类型配置。 */
  CollectInfos?: CollectInfo[];
  /** 高级采集配置。 Json字符串， Key/Value定义为如下：- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false- ClsAgentDefault(自定义默认值，无特殊含义，用于清空其他选项)，建议取值0 */
  AdvancedConfig?: string;
}

declare interface CreateConfigExtraResponse {
  /** 采集配置扩展信息ID */
  ConfigExtraId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigRequest {
  /** 采集配置名称 */
  Name: string;
  /** 采集配置所属日志主题ID即TopicId */
  Output: string;
  /** 日志采集路径，包含文件名，支持多个路径，多个路径之间英文逗号分隔，文件采集情况下必填 */
  Path?: string;
  /** 采集的日志类型，默认为minimalist_log。支持以下类型：- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）；- service_syslog代表：syslog 采集（详见[采集 Syslog](https://cloud.tencent.com/document/product/614/81454)）；- windows_event_log代表：Windows事件日志（详见[采集 Windows 事件日志](https://cloud.tencent.com/document/product/614/96678)）。 */
  LogType?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 用户自定义采集规则，Json格式序列化的字符串。当LogType为user_define_log时，必填。 */
  UserDefineRule?: string;
  /** 高级采集配置。 Json字符串， Key/Value定义为如下：- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false样例：`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`控制台默认占位值：`{\"ClsAgentDefault\":0}` */
  AdvancedConfig?: string;
}

declare interface CreateConfigResponse {
  /** 采集配置ID */
  ConfigId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsoleSharingRequest {
  /** 免密分享配置 */
  SharingConfig: ConsoleSharingConfig;
}

declare interface CreateConsoleSharingResponse {
  /** 免密分享链接 */
  SharingUrl?: string;
  /** 免密分享链接ID */
  SharingId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsumerRequest {
  /** 投递任务绑定的日志主题 ID */
  TopicId: string;
  /** 是否投递日志的元数据信息，默认为 true。当NeedContent为true时：字段Content有效。当NeedContent为false时：字段Content无效。 */
  NeedContent?: boolean;
  /** 如果需要投递元数据信息，元数据信息的描述 */
  Content?: ConsumerContent;
  /** CKafka的描述 */
  Ckafka?: Ckafka;
  /** 投递时压缩方式，取值0，2，3。[0：NONE；2：SNAPPY；3：LZ4] */
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
  /** COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。 */
  Bucket: string;
  /** COS存储桶所在地域，详见产品支持的[地域列表](https://cloud.tencent.com/document/product/436/6224)。 */
  BucketRegion: string;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表单行全文；默认为minimalist_log */
  LogType: string;
  /** COS文件所在文件夹的前缀。默认为空，投递存储桶下所有的文件。 */
  Prefix?: string;
  /** supported: "", "gzip", "lzop", "snappy"; 默认空 */
  Compress?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRuleInfo?: ExtractRuleInfo;
  /** COS导入任务类型。1：一次性导入任务；2：持续性导入任务。默认为1：一次性导入任务 */
  TaskType?: number;
  /** 元数据。 */
  Metadata?: string[];
}

declare interface CreateCosRechargeResponse {
  /** COS导入任务id */
  Id?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDashboardSubscribeRequest {
  /** 仪表盘订阅名称。 */
  Name: string;
  /** 仪表盘id。 */
  DashboardId: string;
  /** 订阅时间cron表达式，格式为：{秒数} {分钟} {小时} {日期} {月份} {星期}；（有效数据为：{分钟} {小时} {日期} {月份} {星期}）。{秒数} 取值范围： 0 ~ 59 {分钟} 取值范围： 0 ~ 59 {小时} 取值范围： 0 ~ 23 {日期} 取值范围： 1 ~ 31 AND (dayOfMonth最后一天： L) {月份} 取值范围： 1 ~ 12 {星期} 取值范围： 0 ~ 6 【0:星期日， 6星期六】 */
  Cron: string;
  /** 仪表盘订阅数据。 */
  SubscribeData: DashboardSubscribeData;
}

declare interface CreateDashboardSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataTransformRequest {
  /** 任务类型. 1: 指定主题；2:动态创建。详情请参考[创建加工任务文档](https://cloud.tencent.com/document/product/614/63940)。 */
  FuncType: number;
  /** 源日志主题 */
  SrcTopicId: string;
  /** 加工任务名称 */
  Name: string;
  /** 加工语句。 当FuncType为2时，EtlContent必须使用[log_auto_output](https://cloud.tencent.com/document/product/614/70733) 其他参考文档：- [创建加工任务](https://cloud.tencent.com/document/product/614/63940) - [函数总览](https://cloud.tencent.com/document/product/614/70395) */
  EtlContent: string;
  /** 加工类型。1：使用源日志主题中的随机数据，进行加工预览；2：使用用户自定义测试数据，进行加工预览；3：创建真实加工任务。 */
  TaskType: number;
  /** 加工任务目的topic_id以及别名,当FuncType=1时，该参数必填，当FuncType=2时，无需填写。 */
  DstResources?: DataTransformResouceInfo[];
  /** 任务启动状态. 默认为1:开启, 2:关闭 */
  EnableFlag?: number;
  /** 用于预览加工结果的测试数据 */
  PreviewLogStatistics?: PreviewLogStatistic[];
  /** 数据加工类型。0：标准加工任务； 1：前置加工任务。前置加工任务将采集的日志处理完成后，再写入日志主题。 */
  DataTransformType?: number;
}

declare interface CreateDataTransformResponse {
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeliverCloudFunctionRequest {
  /** 投递规则属于的 topic id */
  TopicId: string;
  /** 投递的云函数名字。仅支持[事件函数](https://cloud.tencent.com/document/product/583/9694) （[函数类型选型](https://cloud.tencent.com/document/product/583/73483)） */
  FunctionName: string;
  /** 命名空间 */
  Namespace: string;
  /** 函数版本 */
  Qualifier: string;
  /** 投递最长等待时间，单位：秒 */
  Timeout?: number;
  /** 投递最大消息数 */
  MaxMsgNum?: number;
}

declare interface CreateDeliverCloudFunctionResponse {
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
  /** 语法规则, 默认值为0。0：Lucene语法，1：CQL语法。 */
  SyntaxRule?: number;
  /** 导出字段 */
  DerivedFields?: string[];
}

declare interface CreateExportResponse {
  /** 日志导出ID。 */
  ExportId?: string;
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

declare interface CreateKafkaRechargeRequest {
  /** 导入CLS目标topic ID */
  TopicId: string;
  /** Kafka导入配置名称 */
  Name: string;
  /** 导入Kafka类型，0: 腾讯云CKafka，1: 用户自建Kafka */
  KafkaType: number;
  /** 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开 */
  UserKafkaTopics: string;
  /** 导入数据位置，-2:最早（默认），-1：最晚 */
  Offset: number;
  /** 日志导入规则。 */
  LogRechargeRule: LogRechargeRuleInfo;
  /** 腾讯云CKafka实例ID，KafkaType为0时必填。 */
  KafkaInstance?: string;
  /** 服务地址，KafkaType为1时必填。 */
  ServerAddr?: string;
  /** ServerAddr是否为加密连接，KafkaType为1时必填。 */
  IsEncryptionAddr?: boolean;
  /** 加密访问协议。KafkaType为1并且IsEncryptionAddr为true时Protocol必填。 */
  Protocol?: KafkaProtocolInfo;
  /** 用户Kafka消费组名称 */
  ConsumerGroupName?: string;
}

declare interface CreateKafkaRechargeResponse {
  /** Kafka导入配置ID */
  Id?: string;
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
  /** 创建机器组类型。取值如下：- Type：ip，Values中为ip字符串列表创建机器组- Type：label，Values中为标签字符串列表创建机器组 */
  MachineGroupType: MachineGroupTypeInfo;
  /** 标签描述列表，通过指定该参数可以同时绑定标签到相应的机器组。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。 */
  Tags?: Tag[];
  /** 是否开启机器组自动更新。默认false */
  AutoUpdate?: boolean;
  /** 升级开始时间，建议业务低峰期升级LogListener */
  UpdateStartTime?: string;
  /** 升级结束时间，建议业务低峰期升级LogListener */
  UpdateEndTime?: string;
  /** 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费。默认false */
  ServiceLogging?: boolean;
  /** 机器组中机器离线清理时间。单位：天 */
  DelayCleanupTime?: number;
  /** 机器组元数据信息列表 */
  MetaTags?: MetaTagInfo[];
  /** 系统类型，取值如下：- 0：Linux （默认值）- 1：Windows */
  OSType?: number;
}

declare interface CreateMachineGroupResponse {
  /** 机器组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScheduledSqlRequest {
  /** 源日志主题 */
  SrcTopicId: string;
  /** 任务名称 */
  Name: string;
  /** 任务启动状态. 1开启, 2关闭 */
  EnableFlag: number;
  /** 定时SQL分析目标日志主题 */
  DstResource: ScheduledSqlResouceInfo;
  /** 查询语句 */
  ScheduledSqlContent: string;
  /** 调度开始时间,Unix时间戳，单位ms */
  ProcessStartTime: number;
  /** 调度类型，1:持续运行 2:指定时间范围 */
  ProcessType: number;
  /** 调度周期(分钟) */
  ProcessPeriod: number;
  /** 单次查询的时间窗口,如果您的目标主题为指标主题，建议该参数的大小不超过30分钟，否则可能转指标失败。 */
  ProcessTimeWindow: string;
  /** 执行延迟(秒) */
  ProcessDelay: number;
  /** 源topicId的地域信息 */
  SrcTopicRegion: string;
  /** 调度结束时间，当ProcessType=2时为必传字段, Unix时间戳，单位ms */
  ProcessEndTime?: number;
  /** 查询语法规则。 默认值为0。0：Lucene语法，1：CQL语法 */
  SyntaxRule?: number;
}

declare interface CreateScheduledSqlResponse {
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateShipperRequest {
  /** 创建的投递规则所属的日志主题ID */
  TopicId: string;
  /** COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。 */
  Bucket: string;
  /** 投递规则投递的新的目录前缀。- 仅支持0-9A-Za-z-_/- 最大支持256个字符 */
  Prefix: string;
  /** 投递规则的名字 */
  ShipperName: string;
  /** 投递的时间间隔，单位 秒，默认300，范围 300-900 */
  Interval?: number;
  /** 投递的文件的最大值，单位 MB，默认256，范围 5-256 */
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
  /** 投递数据范围的开始时间点（秒级时间戳），不能超出日志主题的生命周期起点。如果用户不填写，默认为用户新建投递任务的时间。 */
  StartTime?: number;
  /** 投递数据范围的结束时间点（秒级时间戳），不能填写未来时间。如果用户不填写，默认为持续投递，即无限。 */
  EndTime?: number;
  /** cos桶存储类型。支持：STANDARD_IA、ARCHIVE、DEEP_ARCHIVE、STANDARD、MAZ_STANDARD、MAZ_STANDARD_IA、INTELLIGENT_TIERING。1. STANDARD_IA：低频存储；2. ARCHIVE：归档存储；3. DEEP_ARCHIVE：深度归档存储；4. STANDARD：标准存储；5. MAZ_STANDARD：标准存储（多 AZ）；6. MAZ_STANDARD_IA：低频存储（多 AZ）；7. INTELLIGENT_TIERING：智能分层存储。 */
  StorageType?: string;
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
  /** 生命周期，单位天，标准存储取值范围1\~3600，低频存储取值范围7\~3600天。取值为3640时代表永久保存。不传此值，默认获取该日志主题对应日志集的Period值（当获取失败时默认为30天）。 */
  Period?: number;
  /** 日志主题描述 */
  Describes?: string;
  /** 0：关闭日志沉降。非0：开启日志沉降后标准存储的天数，HotPeriod需要大于等于7，且小于Period。仅在StorageType为 hot 时生效。 */
  HotPeriod?: number;
  /** 免鉴权开关。 false：关闭； true：开启。默认为false。开启后将支持指定操作匿名访问该日志主题。详情请参见[日志主题](https://cloud.tencent.com/document/product/614/41035)。 */
  IsWebTracking?: boolean;
  /** 日志主题扩展信息 */
  Extends?: TopicExtendInfo;
}

declare interface CreateTopicResponse {
  /** 日志主题ID */
  TopicId?: string;
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

declare interface DeleteAlarmShieldRequest {
  /** 屏蔽规则id。 */
  TaskId: string;
  /** 通知渠道组id。 */
  AlarmNoticeId: string;
}

declare interface DeleteAlarmShieldResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigExtraRequest {
  /** 特殊采集规则扩展配置ID */
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

declare interface DeleteConsoleSharingRequest {
  /** 免密分享Id */
  SharingId: string;
}

declare interface DeleteConsoleSharingResponse {
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

declare interface DeleteDashboardSubscribeRequest {
  /** 仪表盘订阅记录id。 */
  Id: number;
}

declare interface DeleteDashboardSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDataTransformRequest {
  /** 数据加工任务id */
  TaskId: string;
}

declare interface DeleteDataTransformResponse {
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

declare interface DeleteKafkaRechargeRequest {
  /** Kafka导入配置ID */
  Id: string;
  /** 导入CLS目标topic ID */
  TopicId: string;
}

declare interface DeleteKafkaRechargeResponse {
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

declare interface DeleteScheduledSqlRequest {
  /** 任务ID */
  TaskId: string;
  /** 源日志主题ID */
  SrcTopicId: string;
}

declare interface DeleteScheduledSqlResponse {
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
  /** name按照【通知渠道组名称】进行过滤。类型：String必选：否 alarmNoticeId按照【通知渠道组ID】进行过滤。类型：String必选：否 uid按照【接收用户ID】进行过滤。类型：String必选：否 groupId按照【接收用户组ID】进行过滤。类型：String必选：否 deliverFlag按照【投递状态】进行过滤。类型：String必选：否可选值： "1":未启用, "2": 已启用, "3":投递异常每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
}

declare interface DescribeAlarmNoticesResponse {
  /** 告警通知模板列表。 */
  AlarmNotices?: AlarmNotice[] | null;
  /** 符合条件的告警通知模板总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmShieldsRequest {
  /** 通知渠道组id。 */
  AlarmNoticeId: string;
  /** - taskId:按照【规则id】进行过滤。类型：String 必选：否- status:按照【规则状态】进行过滤。类型：String。 支持 0:暂未生效，1:生效中，2:已失效。 必选：否每次请求的Filters的上限为10，Filter.Values的上限为100。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
}

declare interface DescribeAlarmShieldsResponse {
  /** 符合条件的规则总数目 */
  TotalCount?: number;
  /** 告警屏蔽规则详情 */
  AlarmShields?: AlarmShieldInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmsRequest {
  /** name- 按照【告警策略名称】进行过滤。- 类型：String- 必选：否alarmId- 按照【告警策略ID】进行过滤。- 类型：String- 必选：否topicId- 按照【监控对象的日志主题ID】进行过滤。- 类型：String- 必选：否enable- 按照【启用状态】进行过滤。- 类型：String- 备注：enable参数值范围: 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False。 其它值将返回参数错误信息.- 必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
}

declare interface DescribeAlarmsResponse {
  /** 告警策略列表。 */
  Alarms?: AlarmInfo[];
  /** 符合查询条件的告警策略数目。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlertRecordHistoryRequest {
  /** 查询时间范围启始时间，毫秒级unix时间戳 */
  From: number;
  /** 查询时间范围结束时间，毫秒级unix时间戳 */
  To: number;
  /** 分页的偏移量，默认值为0。 */
  Offset: number;
  /** 分页单页限制数目，最大值100。 */
  Limit: number;
  /** - alertId：按照告警策略ID进行过滤。类型：String 必选：否- topicId：按照监控对象ID进行过滤。类型：String 必选：否- status：按照告警状态进行过滤。类型：String 必选：否，0代表未恢复，1代表已恢复，2代表已失效- alarmLevel：按照告警等级进行过滤。类型：String 必选：否，0代表警告，1代表提醒，2代表紧急每次请求的Filters的上限为10，Filter.Values的上限为100。 */
  Filters?: Filter[];
}

declare interface DescribeAlertRecordHistoryResponse {
  /** 告警历史总数 */
  TotalCount?: number;
  /** 告警历史详情 */
  Records?: AlertHistoryRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigExtrasRequest {
  /** 过滤器，支持如下选项：name- 按照【特殊采集配置名称】进行模糊匹配过滤。- 类型：StringconfigExtraId- 按照【特殊采集配置ID】进行过滤。- 类型：StringtopicId- 按照【日志主题】进行过滤。- 类型：StringmachineGroupId- 按照【机器组ID】进行过滤。- 类型：String每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeConfigExtrasResponse {
  /** 采集配置列表 */
  Configs?: ConfigExtraInfo[] | null;
  /** 过滤到的总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigMachineGroupsRequest {
  /** 采集配置ID */
  ConfigId: string;
}

declare interface DescribeConfigMachineGroupsResponse {
  /** 采集规则配置绑定的机器组列表 */
  MachineGroups?: MachineGroupInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigsRequest {
  /** configName- 按照【采集配置名称】进行模糊匹配过滤。- 类型：String- 必选：否configId- 按照【采集配置ID】进行过滤。- 类型：String- 必选：否topicId- 按照【日志主题】进行过滤。- 类型：String- 必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeConfigsResponse {
  /** 采集配置列表 */
  Configs?: ConfigInfo[] | null;
  /** 过滤到的总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsoleSharingListRequest {
}

declare interface DescribeConsoleSharingListResponse {
  /** 分页的总数目 */
  TotalCount?: number;
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

declare interface DescribeDashboardSubscribesRequest {
  /** dashboardId：按照【仪表盘id】进行过滤。类型：String必选：否 每次请求的Filters的上限为10，Filter.Values的上限为100。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
}

declare interface DescribeDashboardSubscribesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDashboardsRequest {
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
  /** - dashboardId 按照【仪表盘id】进行过滤，类型：String， 必选：否。- dashboardName 按照【仪表盘名字】进行模糊搜索过滤，类型：String，必选：否。- dashboardRegion 按照【仪表盘地域】进行过滤，为了兼容老的仪表盘，通过云API创建的仪表盘没有地域属性，类型：String，必选：否。- tagKey 按照【标签键】进行过滤，类型：String，必选：否。- tag:tagKey 按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换，类型：String，必选：否，使用请参考[示例2](https://cloud.tencent.com/document/api/614/95636)。每次请求的Filters的上限为10，Filter.Values的上限为100。 */
  Filters?: Filter[];
  /** 按照topicId和regionId过滤。 */
  TopicIdRegionFilter?: TopicIdAndRegion[];
}

declare interface DescribeDashboardsResponse {
  /** 仪表盘的数量 */
  TotalCount?: number;
  /** 仪表盘详细明细 */
  DashboardInfos?: DashboardInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataTransformInfoRequest {
  /** - taskName按照【加工任务名称】进行过滤。类型：String必选：否- taskId按照【加工任务id】进行过滤。类型：String必选：否- topicId按照【源topicId】进行过滤。类型：String必选：否- status按照【 任务运行状态】进行过滤。 1：准备中，2：运行中，3：停止中，4：已停止类型：String必选：否- hasServiceLog按照【是否开启服务日志】进行过滤。 1：未开启，2：已开启类型：String必选：否- dstTopicType按照【目标topic类型】进行过滤。 1：固定，2：动态类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为100。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
  /** 默认值为2. 1: 获取单个任务的详细信息 2：获取任务列表 */
  Type?: number;
  /** Type为1， 此参数必填 */
  TaskId?: string;
}

declare interface DescribeDataTransformInfoResponse {
  /** 数据加工任务列表信息 */
  DataTransformTaskInfos?: DataTransformTaskInfo[];
  /** 任务总次数 */
  TotalCount?: number;
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

declare interface DescribeKafkaConsumerRequest {
  /** 日志主题ID */
  FromTopicId: string;
}

declare interface DescribeKafkaConsumerResponse {
  /** Kafka协议消费是否打开 */
  Status?: boolean;
  /** KafkaConsumer 消费时使用的Topic参数 */
  TopicID?: string;
  /** 压缩方式[0:NONE；2:SNAPPY；3:LZ4] */
  Compression?: number;
  /** kafka协议消费数据格式 */
  ConsumerContent?: KafkaConsumerContent;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKafkaRechargesRequest {
  /** 日志主题 ID */
  TopicId: string;
  /** 导入配置ID */
  Id?: string;
  /** 状态 status 1: 运行中, 2: 暂停... */
  Status?: number;
}

declare interface DescribeKafkaRechargesResponse {
  /** KafkaRechargeInfo 信息列表 */
  Infos?: KafkaRechargeInfo[];
  /** Kafka导入信息总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogContextRequest {
  /** 要查询的日志主题ID */
  TopicId: string;
  /** 日志时间, 即SearchLog接口返回信息中Results结构体中的Time，需按照 UTC+8 时区将该毫秒级Unix时间戳转换为 YYYY-mm-dd HH:MM:SS.FFF 格式的字符串。 */
  BTime: string;
  /** 日志包序号，即SearchLog接口返回信息中Results结构体中的PkgId。 */
  PkgId: string;
  /** 日志包内一条日志的序号，即SearchLog接口返回信息中Results结构中的PkgLogId。 */
  PkgLogId: number;
  /** 前${PrevLogs}条日志，默认值10。 */
  PrevLogs?: number;
  /** 后${NextLogs}条日志，默认值10。 */
  NextLogs?: number;
  /** 检索语句，对日志上下文进行过滤，最大长度为12KB语句由 [检索条件]构成，不支持SQL语句 */
  Query?: string;
  /** 上下文检索的开始时间，单位：毫秒级时间戳注意：- From为空时，表示上下文检索的开始时间不做限制- From和To非空时，From < To- 暂时仅支持上海 / 弗吉尼亚/ 新加坡地域 */
  From?: number;
  /** 上下文检索的结束时间，单位：毫秒级时间戳。注意：- To为空时，表示上下文检索的结束时间不做限制- From和To非空时，From < To- 暂时仅支持上海 / 弗吉尼亚/ 新加坡地域 */
  To?: number;
}

declare interface DescribeLogContextResponse {
  /** 日志上下文信息集合 */
  LogContextInfos?: LogContextInfo[];
  /** 上文日志是否已经返回完成（当PrevOver为false，表示有上文日志还未全部返回）。 */
  PrevOver?: boolean;
  /** 下文日志是否已经返回完成（当NextOver为false，表示有下文日志还未全部返回）。 */
  NextOver?: boolean;
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
  /** 检索语法规则，默认值为0。0：Lucene语法，1：CQL语法。详细说明参见检索条件语法规则 */
  SyntaxRule?: number;
}

declare interface DescribeLogHistogramResponse {
  /** 统计周期： 单位ms */
  Interval?: number;
  /** 命中关键字的日志总条数 */
  TotalCount?: number;
  /** 周期内统计结果详情 */
  HistogramInfos?: HistogramInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogsetsRequest {
  /** logsetName- 按照【日志集名称】进行过滤。- 类型：String- 必选：否logsetId- 按照【日志集ID】进行过滤。- 类型：String- 必选：否tagKey- 按照【标签键】进行过滤。- 类型：String- 必选：否tag:tagKey- 按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。- 类型：String- 必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeLogsetsResponse {
  /** 分页的总数目 */
  TotalCount?: number;
  /** 日志集列表 */
  Logsets?: LogsetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineGroupConfigsRequest {
  /** 机器组ID */
  GroupId: string;
}

declare interface DescribeMachineGroupConfigsResponse {
  /** 采集规则配置列表 */
  Configs?: ConfigInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineGroupsRequest {
  /** machineGroupName- 按照【机器组名称】进行过滤。- 类型：String- 必选：否machineGroupId- 按照【机器组ID】进行过滤。- 类型：String- 必选：否osType- 按照【操作系统类型】进行过滤。- 类型：Int- 必选：否tagKey- 按照【标签键】进行过滤。- 类型：String- 必选：否tag:tagKey- 按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。- 类型：String- 必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeMachineGroupsResponse {
  /** 机器组信息列表 */
  MachineGroups?: MachineGroupInfo[] | null;
  /** 分页的总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachinesRequest {
  /** 查询的机器组ID */
  GroupId: string;
  /** ip- 按照【ip】进行过滤。- 类型：String- 必选：否instance- 按照【instance】进行过滤。- 类型：String- 必选：否version- 按照【LogListener版本】进行过滤。- 类型：String- 必选：否status- 按照【状态】进行过滤。- 类型：String- 必选：否- 可选值：0：离线，1：正常offlineTime- 按照【机器离线时间】进行过滤。- 类型：String- 必选：否- - 可选值：0：无离线时间，12：12小时内，24：一天内，48：两天内，99：两天前每次请求的Filters的上限为10，Filter.Values的上限为100。 */
  Filters?: Filter[];
  /** 分页的偏移量。 */
  Offset?: number;
  /** 分页单页限制数目。最大支持100 */
  Limit?: number;
}

declare interface DescribeMachinesResponse {
  /** 机器状态信息组 */
  Machines?: MachineInfo[];
  /** 机器组是否开启自动升级功能。 0：未开启自动升级；1：开启了自动升级。 */
  AutoUpdate?: number;
  /** 机器组自动升级功能预设开始时间 */
  UpdateStartTime?: string;
  /** 机器组自动升级功能预设结束时间 */
  UpdateEndTime?: string;
  /** 当前用户可用最新的Loglistener版本 */
  LatestAgentVersion?: string;
  /** 是否开启服务日志 */
  ServiceLogging?: boolean;
  /** 总数目 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePartitionsRequest {
  /** 日志主题ID */
  TopicId: string;
}

declare interface DescribePartitionsResponse {
  /** 分区列表 */
  Partitions?: PartitionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScheduledSqlInfoRequest {
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
  /** 任务名称。 */
  Name?: string;
  /** 任务id。 */
  TaskId?: string;
  /** srcTopicName按照【源日志主题名称】进行过滤，模糊匹配。类型：String。必选：否dstTopicName按照【目标日志主题名称】进行过滤，模糊匹配。类型：String。必选：否srcTopicId按照【源日志主题ID】进行过滤。类型：String。必选：否dstTopicId按照【目标日志主题ID】进行过滤。类型：String。必选：否bizType按照【主题类型】进行过滤，0：日志主题；1：指标主题。类型：String。必选：否status按照【任务状态】进行过滤，1：运行；2：停止。类型：String。必选：否taskName按照【任务名称】进行过滤，模糊匹配。类型：String。必选：否taskId按照【任务ID】进行过滤，模糊匹配。类型：String。必选：否 */
  Filters?: Filter[];
}

declare interface DescribeScheduledSqlInfoResponse {
  /** ScheduledSQL任务列表信息 */
  ScheduledSqlTaskInfos?: ScheduledSqlTaskInfo[];
  /** 任务总次数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShipperTasksRequest {
  /** 投递规则ID */
  ShipperId: string;
  /** 查询的开始时间戳，支持最近3天的查询， 毫秒。StartTime必须小于EndTime */
  StartTime: number;
  /** 查询的结束时间戳， 毫秒。StartTime必须小于EndTime */
  EndTime: number;
}

declare interface DescribeShipperTasksResponse {
  /** 投递任务列表 */
  Tasks?: ShipperTaskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShippersRequest {
  /** - shipperName：按照【投递规则名称】进行过滤。类型：String。必选：否- shipperId：按照【投递规则ID】进行过滤。类型：String。必选：否- topicId：按照【日志主题】进行过滤。类型：String。必选：否每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页的限制数目，默认值为20，最大值100 */
  Limit?: number;
  /** 控制Filters相关字段是否为精确匹配。 0: 默认值，shipperName模糊匹配 1: shipperName 精确匹配 */
  PreciseSearch?: number;
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
  /** topicName 按照【日志主题名称】进行过滤，默认为模糊匹配，可使用 PreciseSearch 参数设置为精确匹配。类型：String。必选：否logsetName 按照【日志集名称】进行过滤，默认为模糊匹配，可使用 PreciseSearch 参数设置为精确匹配。类型：String。必选：否topicId 按照【日志主题ID】进行过滤。类型：String。必选：否logsetId 按照【日志集ID】进行过滤，可通过调用 DescribeLogsets 查询已创建的日志集列表或登录控制台进行查看；也可以调用 CreateLogset 创建新的日志集。类型：String。必选：否tagKey 按照【标签键】进行过滤。类型：String。必选：否tag:tagKey 按照【标签键值对】进行过滤。tagKey 使用具体的标签键进行替换，例如 tag:exampleKey。类型：String。必选：否storageType 按照【日志主题的存储类型】进行过滤。可选值 hot（标准存储），cold（低频存储）类型：String。必选：否注意：每次请求的 Filters 的上限为10，Filter.Values 的上限为100。 */
  Filters?: Filter[];
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100。 */
  Limit?: number;
  /** 控制Filters相关字段是否为精确匹配。0: 默认值，topicName 和 logsetName 模糊匹配1: topicName 精确匹配2: logsetName精确匹配3: topicName 和logsetName 都精确匹配 */
  PreciseSearch?: number;
  /** 主题类型0:日志主题，默认值1:指标主题 */
  BizType?: number;
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
  /** 要查询的执行详情的起始时间，Unix时间戳，单位ms。 */
  From: number;
  /** 要查询的执行详情的结束时间，Unix时间戳，单位ms。 */
  To: number;
  /** 查询过滤条件，例如：- 按告警策略ID查询：`alert_id:"alarm-0745ec00-e605-xxxx-b50b-54afe61fc971"`- 按监控对象ID查询：`monitored_object:"823d8bfa-76a7-xxxx-8399-8cda74d4009b" `- 按告警策略ID及监控对象ID查询：`alert_id:"alarm-0745ec00-e605-xxxx-b50b-54afe61fc971" AND monitored_object:"823d8bfa-76a7-xxxx-8399-8cda74d4009b"`- 按告警策略ID及监控对象ID查询支持SQL语句：`(alert_id:"alarm-5ce45495-09e8-4d58-xxxx-768134bf330c") AND (monitored_object:"3c514e84-6f1f-46ec-xxxx-05de6163f7fe") AND NOT condition_evaluate_result: "Skip" AND condition_evaluate_result:[* TO *] | SELECT count(*) as top50StatisticsTotalCount, count_if(condition_evaluate_result='ProcessError') as top50StatisticsFailureCount, count_if(notification_send_result!='NotSend') as top50NoticeTotalCount, count_if(notification_send_result='SendPartFail' or notification_send_result='SendFail') as top50NoticeFailureCount, alert_id, alert_name, monitored_object, topic_type, happen_threshold, alert_threshold, notify_template group by alert_id, alert_name, monitored_object,topic_type, happen_threshold, alert_threshold, notify_template order by top50StatisticsTotalCount desc limit 1` */
  Query: string;
  /** 单次查询返回的执行详情条数，最大值为1000 */
  Limit?: number;
  /** 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时。注意：* 透传该参数时，请勿修改除该参数外的其它参数* 仅当检索分析语句(Query)不包含SQL时有效，SQL获取后续结果参考SQL LIMIT语法 */
  Context?: string;
  /** 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc注意：* 仅当检索分析语句(Query)不包含SQL时有效* SQL结果排序方式参考SQL ORDER BY语法 */
  Sort?: string;
  /** true：代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效；false：代表使用老的检索结果返回方式，输出AnalysisResults和ColNames有效；两种返回方式在编码格式上有少量区别，建议使用true。 */
  UseNewAnalysis?: boolean;
}

declare interface GetAlarmLogResponse {
  /** 加载后续详情的Context */
  Context?: string;
  /** 指定时间范围内的告警执行详情是否完整返回 */
  ListOver?: boolean;
  /** 返回的结果是否为SQL分析结果 */
  Analysis?: boolean;
  /** 分析结果的列名，如果Query语句有SQL查询，则返回查询字段的列名；否则为空。 */
  ColNames?: string[] | null;
  /** 执行详情查询结果。当Query字段无SQL语句时，返回查询结果。当Query字段有SQL语句时，可能返回null。 */
  Results?: LogInfo[] | null;
  /** 执行详情统计分析结果。当Query字段有SQL语句时，返回SQL统计结果，否则可能返回null。 */
  AnalysisResults?: LogItems[] | null;
  /** 执行详情统计分析结果；UseNewAnalysis为true有效。 */
  AnalysisRecords?: string[] | null;
  /** 分析结果的列名， UseNewAnalysis为true有效 */
  Columns?: Column[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MergePartitionRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 合并的PartitionId（找到下一个分区InclusiveBeginKey与入参PartitionId对应的ExclusiveEndKey相等，且找到的分区必须是读写分区（Staus:readwrite），入参PartitionId与找到的PartitionId设置为只读分区（Status:readonly）,再新建一个新的读写分区） 。[获取分区列表](https://cloud.tencent.com/document/product/614/56469)1. 入参PartitionId只能是读写分区（Status的值有readonly，readwrite），且能找到入参PartitionId的下一个可读写分区（找到下一个分区InclusiveBeginKey与入参PartitionId对应的ExclusiveEndKey相等）；2. 入参PartitionId不能是最后一个分区（PartitionId的ExclusiveEndKey不能是ffffffffffffffffffffffffffffffff）；3. topic的分区数量是有限制的（默认50个），合并之后不能超过最大分区，否则不能合并。 */
  PartitionId: number;
}

declare interface MergePartitionResponse {
  /** 合并结果集 */
  Partitions?: PartitionInfo[];
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
  /** 通知规则。注意: - Type、NoticeReceivers和WebCallbacks是一组配置，NoticeRules是另一组配置，2组配置互斥。- 传其中一组数据，则另一组数据置空。 */
  NoticeRules?: NoticeRule[];
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
  /** 触发条件。注意: - Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。 */
  Condition?: string;
  /** 告警级别。0:警告(Warn);1:提醒(Info);2:紧急 (Critical)注意: - Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。 */
  AlarmLevel?: number;
  /** 多触发条件。 注意: - Condition和AlarmLevel是一组配置，MultiConditions是另一组配置，2组配置互斥。 */
  MultiConditions?: MultiCondition[];
  /** 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为2000。 */
  TriggerCount?: number;
  /** 告警重复的周期。单位是分钟。取值范围是0~1440。 */
  AlarmPeriod?: number;
  /** 关联的告警通知模板列表。 */
  AlarmNoticeIds?: string[];
  /** 监控对象列表。 */
  AlarmTargets?: AlarmTarget[];
  /** 是否开启告警策略。 */
  Status?: boolean;
  /** 该参数已废弃，请使用Status参数控制是否开启告警策略。 */
  Enable?: boolean;
  /** 用户自定义告警内容 */
  MessageTemplate?: string;
  /** 用户自定义回调 */
  CallBack?: CallBackInfo;
  /** 多维分析 */
  Analysis?: AnalysisDimensional[];
  /** 分组触发状态。true：开启，false：关闭（默认） */
  GroupTriggerStatus?: boolean;
  /** 分组触发条件。 */
  GroupTriggerCondition?: string[];
  /** 标签描述列表，通过指定该参数可以同时绑定标签到相应的告警策略。最大支持10个标签键值对，并且不能有重复的键值对。 */
  Tags?: Tag[];
  /** 监控对象类型。0:执行语句共用监控对象; 1:每个执行语句单独选择监控对象。 当值为1时，AlarmTargets元素个数不能超过10个，AlarmTargets中的Number必须是从1开始的连续正整数，不能重复。 */
  MonitorObjectType?: number;
  /** 告警附加分类信息列表。Classifications元素个数不能超过20个。Classifications元素的Key不能为空，不能重复，长度不能超过50个字符，符合正则 `^[a-z]([a-z0-9_]{0,49})$`。Classifications元素的Value长度不能超过200个字符。 */
  Classifications?: AlarmClassification[];
}

declare interface ModifyAlarmResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmShieldRequest {
  /** 屏蔽规则ID。 */
  TaskId: string;
  /** 通知渠道组id。 */
  AlarmNoticeId: string;
  /** 屏蔽开始时间（秒级时间戳）。 */
  StartTime?: number;
  /** 屏蔽结束时间（秒级时间戳）。 */
  EndTime?: number;
  /** 屏蔽类型。1：屏蔽所有通知，2：按照Rule参数屏蔽匹配规则的通知。 */
  Type?: number;
  /** 屏蔽规则，当Type为2时必填。规则填写方式详见[产品文档](https://cloud.tencent.com/document/product/614/103178)。 */
  Rule?: string;
  /** 屏蔽原因。 */
  Reason?: string;
  /** 规则状态。只有规则状态为生效中（status:1）时，才能将其修改为已失效（status:2）。 */
  Status?: number;
}

declare interface ModifyAlarmShieldResponse {
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
  /** 采集配置标记。- 目前只支持label_k8s，用于标记自建k8s集群使用的采集配置 */
  ContainerFile?: ContainerFileInfo;
  /** 容器标准输出信息 */
  ContainerStdout?: ContainerStdoutInfo;
  /** 采集的日志类型，默认为minimalist_log。支持以下类型：- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）。 */
  LogType?: string;
  /** 日志格式化方式，用于容器采集场景。- stdout-docker-json：用于docker容器采集场景- stdout-containerd：用于containerd容器采集场景 */
  LogFormat?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 组合解析采集规则，用于复杂场景下的日志采集。- 取值参考：[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310) */
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
  /** 高级采集配置。 Json字符串， Key/Value定义为如下：- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false- ClsAgentDefault(自定义默认值，无特殊含义，用于清空其他选项)，建议取值0 */
  AdvancedConfig?: string;
}

declare interface ModifyConfigExtraResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConfigRequest {
  /** 采集规则配置ID，通过[获取采集规则配置](https://cloud.tencent.com/document/product/614/58616)返回信息获取。 */
  ConfigId: string;
  /** 采集规则配置名称 */
  Name?: string;
  /** 日志采集路径，包含文件名 */
  Path?: string;
  /** 采集的日志类型。支持以下类型：- json_log代表：JSON-文件日志（详见[使用 JSON 提取模式采集日志](https://cloud.tencent.com/document/product/614/17419)）；- delimiter_log代表：分隔符-文件日志（详见[使用分隔符提取模式采集日志](https://cloud.tencent.com/document/product/614/17420)）；- minimalist_log代表：单行全文-文件日志（详见[使用单行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17421)）；- fullregex_log代表：单行完全正则-文件日志（详见[使用单行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52365)）；- multiline_log代表：多行全文-文件日志（详见[使用多行全文提取模式采集日志](https://cloud.tencent.com/document/product/614/17422)）；- multiline_fullregex_log代表：多行完全正则-文件日志（详见[使用多行-完全正则提取模式采集日志](https://cloud.tencent.com/document/product/614/52366)）；- user_define_log代表：组合解析（适用于多格式嵌套的日志，详见[使用组合解析提取模式采集日志](https://cloud.tencent.com/document/product/614/61310)）；- service_syslog代表：syslog 采集（详见[采集 Syslog](https://cloud.tencent.com/document/product/614/81454)）；- windows_event_log代表：Windows事件日志（详见[采集 Windows 事件日志](https://cloud.tencent.com/document/product/614/96678)）。 */
  LogType?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRule?: ExtractRuleInfo;
  /** 采集黑名单路径列表 */
  ExcludePaths?: ExcludePathInfo[];
  /** 采集配置关联的日志主题（TopicId） */
  Output?: string;
  /** 用户自定义解析字符串，Json格式序列化的字符串。 */
  UserDefineRule?: string;
  /** 高级采集配置。 Json字符串， Key/Value定义为如下：- ClsAgentFileTimeout(超时属性), 取值范围: 大于等于0的整数， 0为不超时- ClsAgentMaxDepth(最大目录深度)，取值范围: 大于等于0的整数- ClsAgentParseFailMerge(合并解析失败日志)，取值范围: true或false样例：`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}` */
  AdvancedConfig?: string;
}

declare interface ModifyConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConsoleSharingRequest {
  /** 免密分享链接Id */
  SharingId: string;
  /** 指定分享链接有效期，单位：毫秒，最长可设定有效期为30天 */
  DurationMilliseconds: number;
}

declare interface ModifyConsoleSharingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConsumerRequest {
  /** 投递任务绑定的日志主题 ID */
  TopicId: string;
  /** 投递任务是否生效，默认不生效 */
  Effective?: boolean;
  /** 是否投递日志的元数据信息，默认为 true。当NeedContent为true时：字段Content有效。当NeedContent为false时：字段Content无效。 */
  NeedContent?: boolean;
  /** 如果需要投递元数据信息，元数据信息的描述 */
  Content?: ConsumerContent;
  /** CKafka的描述 */
  Ckafka?: Ckafka;
  /** 投递时压缩方式，取值0，2，3。[0：NONE；2：SNAPPY；3：LZ4] */
  Compression?: number;
}

declare interface ModifyConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCosRechargeRequest {
  /** COS导入配置Id */
  Id: string;
  /** 日志主题Id */
  TopicId: string;
  /** COS导入任务名称 */
  Name?: string;
  /** 任务状态 0： 停用 ， 1：启用 */
  Enable?: number;
  /** COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。 */
  Bucket?: string;
  /** COS存储桶所在地域，详见产品支持的[地域列表](https://cloud.tencent.com/document/product/436/6224)。 */
  BucketRegion?: string;
  /** COS文件所在文件夹的前缀。为空串时投递存储桶下所有的文件。 */
  Prefix?: string;
  /** 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表单行全文； 默认为minimalist_log */
  LogType?: string;
  /** 解析格式。supported: "", "gzip", "lzop", "snappy"; 默认空 */
  Compress?: string;
  /** 提取规则，如果设置了ExtractRule，则必须设置LogType */
  ExtractRuleInfo?: ExtractRuleInfo;
  /** COS导入任务类型。1：一次性导入任务；2：持续性导入任务。 */
  TaskType?: number;
  /** 元数据。支持 bucket，object。 */
  Metadata?: string[];
}

declare interface ModifyCosRechargeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDashboardSubscribeRequest {
  /** 仪表盘订阅id。 */
  Id: number;
  /** 仪表盘id。 */
  DashboardId?: string;
  /** 仪表盘订阅名称。 */
  Name?: string;
  /** 订阅时间cron表达式，格式为：{秒数} {分钟} {小时} {日期} {月份} {星期}；（有效数据为：{分钟} {小时} {日期} {月份} {星期}）。 */
  Cron?: string;
  /** 仪表盘订阅数据。 */
  SubscribeData?: DashboardSubscribeData;
}

declare interface ModifyDashboardSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDataTransformRequest {
  /** 加工任务id */
  TaskId: string;
  /** 加工任务名称 */
  Name?: string;
  /** 加工语句。 当FuncType为2时，EtlContent必须使用[log_auto_output](https://cloud.tencent.com/document/product/614/70733) 其他参考文档：- [创建加工任务](https://cloud.tencent.com/document/product/614/63940) - [函数总览](https://cloud.tencent.com/document/product/614/70395) */
  EtlContent?: string;
  /** 任务启动状态. 默认为1，开启, 2关闭 */
  EnableFlag?: number;
  /** 加工任务目的topic_id以及别名 */
  DstResources?: DataTransformResouceInfo[];
  /** 是否开启投递服务日志。1关闭，2开启 */
  HasServicesLog?: number;
}

declare interface ModifyDataTransformResponse {
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

declare interface ModifyKafkaConsumerRequest {
  /** 日志主题ID */
  FromTopicId: string;
  /** 压缩方式[0:NONE；2:SNAPPY；3:LZ4] */
  Compression?: number;
  /** kafka协议消费数据格式 */
  ConsumerContent?: KafkaConsumerContent;
}

declare interface ModifyKafkaConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyKafkaRechargeRequest {
  /** Kafka导入配置ID */
  Id: string;
  /** 导入CLS目标topic ID */
  TopicId: string;
  /** Kafka导入配置名称 */
  Name?: string;
  /** 导入Kafka类型，0：腾讯云CKafka：1：用户自建Kafka。 */
  KafkaType?: number;
  /** 腾讯云CKafka实例ID，KafkaType为0时必填。 */
  KafkaInstance?: string;
  /** 服务地址，KafkaType为1时必填。 */
  ServerAddr?: string;
  /** ServerAddr是否为加密连接，KafkaType为1时必填。 */
  IsEncryptionAddr?: boolean;
  /** 加密访问协议，KafkaType参数为1并且IsEncryptionAddr参数为true时必填。 */
  Protocol?: KafkaProtocolInfo;
  /** 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开 */
  UserKafkaTopics?: string;
  /** 用户Kafka消费组名称 */
  ConsumerGroupName?: string;
  /** 日志导入规则 */
  LogRechargeRule?: LogRechargeRuleInfo;
  /** 导入控制，1：暂停；2：继续。 */
  StatusControl?: number;
}

declare interface ModifyKafkaRechargeResponse {
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
  /** 机器组类型。Type：ip，Values中为ip字符串列表机器组；Type：label，Values中为标签字符串列表机器组。 */
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
  /** 机器组中机器定期离线清理时间。单位：天 */
  DelayCleanupTime?: number;
  /** 机器组元数据信息列表 */
  MetaTags?: MetaTagInfo[];
}

declare interface ModifyMachineGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyScheduledSqlRequest {
  /** 任务ID */
  TaskId: string;
  /** 源日志主题 */
  SrcTopicId?: string;
  /** 任务启动状态. 1开启, 2关闭 */
  EnableFlag?: number;
  /** 定时SQL分析的目标日志主题 */
  DstResource?: ScheduledSqlResouceInfo;
  /** 查询语句 */
  ScheduledSqlContent?: string;
  /** 调度周期(分钟) */
  ProcessPeriod?: number;
  /** 单次查询的时间窗口. 例子中为近15分钟 */
  ProcessTimeWindow?: string;
  /** 执行延迟(秒) */
  ProcessDelay?: number;
  /** 源topicId的地域信息 */
  SrcTopicRegion?: string;
  /** 任务名称 */
  Name?: string;
  /** 语法规则。 默认值为0。 0：Lucene语法，1：CQL语法 */
  SyntaxRule?: number;
}

declare interface ModifyScheduledSqlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyShipperRequest {
  /** 投递规则ID */
  ShipperId: string;
  /** COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。 */
  Bucket?: string;
  /** 投递规则投递的新的目录前缀。- 仅支持0-9A-Za-z-_/- 最大支持256个字符 */
  Prefix?: string;
  /** 投递规则的开关状态。true：开启投递任务；false：关闭投递任务。 */
  Status?: boolean;
  /** 投递规则的名字 */
  ShipperName?: string;
  /** 投递的时间间隔，单位 秒，默认300，范围 300-900 */
  Interval?: number;
  /** 投递的文件的最大值，单位 MB，默认256，范围 5-256 */
  MaxSize?: number;
  /** 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递 */
  FilterRules?: FilterRuleInfo[];
  /** 投递日志的分区规则，支持strftime的时间格式表示 */
  Partition?: string;
  /** 投递日志的压缩配置 */
  Compress?: CompressInfo;
  /** 投递日志的内容格式配置 */
  Content?: ContentInfo;
  /** 投递文件命名配置，0：随机数命名，1：投递时间命名。 */
  FilenameMode?: number;
  /** cos桶存储类型。支持：STANDARD_IA、ARCHIVE、DEEP_ARCHIVE、STANDARD、MAZ_STANDARD、MAZ_STANDARD_IA、INTELLIGENT_TIERING。1. STANDARD_IA：低频存储；2. ARCHIVE：归档存储；3. DEEP_ARCHIVE：深度归档存储；4. STANDARD：标准存储；5. MAZ_STANDARD：标准存储（多 AZ）；6. MAZ_STANDARD_IA：低频存储（多 AZ）；7. INTELLIGENT_TIERING：智能分层存储。 */
  StorageType?: string;
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
  /** 主题是否开启采集，true：开启采集；false：关闭采集。控制台目前不支持修改此参数。 */
  Status?: boolean;
  /** 是否开启自动分裂 */
  AutoSplit?: boolean;
  /** 若开启最大分裂，该主题能够能够允许的最大分区数 */
  MaxSplitPartitions?: number;
  /** 生命周期，单位天，标准存储取值范围1\~3600，低频存储取值范围7\~3600。取值为3640时代表永久保存 */
  Period?: number;
  /** 日志主题描述 */
  Describes?: string;
  /** 0：关闭日志沉降。非0：开启日志沉降后标准存储的天数。HotPeriod需要大于等于7，且小于Period。仅在StorageType为 hot 时生效 */
  HotPeriod?: number;
  /** 免鉴权开关。 false：关闭； true：开启。开启后将支持指定操作匿名访问该日志主题。详情请参见[日志主题](https://cloud.tencent.com/document/product/614/41035)。 */
  IsWebTracking?: boolean;
  /** 日志主题扩展信息 */
  Extends?: TopicExtendInfo;
  /** 日志主题分区数量 */
  PartitionCount?: number;
}

declare interface ModifyTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenKafkaConsumerRequest {
  /** 日志主题ID */
  FromTopicId: string;
  /** 压缩方式[0:NONE；2:SNAPPY；3:LZ4]，默认：0 */
  Compression?: number;
  /** kafka协议消费数据格式 */
  ConsumerContent?: KafkaConsumerContent;
}

declare interface OpenKafkaConsumerResponse {
  /** KafkaConsumer 消费时使用的Topic参数 */
  TopicID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PreviewKafkaRechargeRequest {
  /** 预览类型，1：源数据预览；2：导出结果预览。 */
  PreviewType: number;
  /** 导入Kafka类型，0：腾讯云CKafka；1：用户自建Kafka。 */
  KafkaType: number;
  /** 用户需要导入的Kafka相关topic列表，多个topic之间使用半角逗号隔开。最多支持100个。 */
  UserKafkaTopics: string;
  /** 导入数据位置，-2：最早；-1：最晚。 */
  Offset: number;
  /** 腾讯云CKafka实例ID，当KafkaType为0时参数KafkaInstance有效且必填。 */
  KafkaInstance?: string;
  /** 服务地址。KafkaType为1时ServerAddr必填。 */
  ServerAddr?: string;
  /** ServerAddr是否为加密连接。KafkaType为1时有效。 */
  IsEncryptionAddr?: boolean;
  /** 加密访问协议。KafkaType为1并且IsEncryptionAddr为true时Protocol必填。 */
  Protocol?: KafkaProtocolInfo;
  /** 用户Kafka消费组 */
  ConsumerGroupName?: string;
  /** 日志导入规则 */
  LogRechargeRule?: LogRechargeRuleInfo;
}

declare interface PreviewKafkaRechargeResponse {
  /** 日志样例，PreviewType为2时返回 */
  LogSample?: string;
  /** 日志预览结果 */
  LogData?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMetricRequest {
  /** 查询语句，使用PromQL语法 */
  Query: string;
  /** 指标主题ID */
  TopicId: string;
  /** 查询时间，秒级Unix时间戳 */
  Time?: number;
}

declare interface QueryMetricResponse {
  /** 指标查询结果类型 */
  ResultType?: string;
  /** 指标查询结果 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryRangeMetricRequest {
  /** 指标主题ID */
  TopicId: string;
  /** 查询语句，使用PromQL语法 */
  Query: string;
  /** 查询起始时间，秒级Unix时间戳 */
  Start: number;
  /** 查询结束时间，秒级Unix时间戳 */
  End: number;
  /** 查询时间间隔，单位秒 */
  Step: number;
}

declare interface QueryRangeMetricResponse {
  /** 指标查询结果类型 */
  ResultType?: string;
  /** 指标查询结果 */
  Result?: string;
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

declare interface SearchCosRechargeInfoRequest {
  /** 日志主题 ID */
  TopicId: string;
  /** 日志集ID */
  LogsetId: string;
  /** 投递任务名称 */
  Name: string;
  /** COS存储桶，详见产品支持的[存储桶命名规范](https://cloud.tencent.com/document/product/436/13312)。 */
  Bucket: string;
  /** COS存储桶所在地域，详见产品支持的[地域列表](https://cloud.tencent.com/document/product/436/6224)。 */
  BucketRegion: string;
  /** COS文件所在文件夹的前缀。默认为空，投递存储桶下所有的文件。 */
  Prefix?: string;
  /** 压缩模式: "", "gzip", "lzop", "snappy"; 默认"" */
  Compress?: string;
}

declare interface SearchCosRechargeInfoResponse {
  /** 匹配到的存储桶下的某个文件的前几行数据 */
  Data?: string[] | null;
  /** 匹配到的存储桶下的文件个数 */
  Sum?: number;
  /** 当前预览文件路径 */
  Path?: string | null;
  /** 预览获取数据失败原因 */
  Msg?: string | null;
  /** 状态 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchDashboardSubscribeRequest {
  /** 仪表盘id。 */
  DashboardId: string;
  /** 仪表盘订阅数据。 */
  SubscribeData: DashboardSubscribeData;
  /** 仪表盘订阅Id。 */
  Id?: number;
  /** 仪表盘订阅名称。 */
  Name?: string;
}

declare interface SearchDashboardSubscribeResponse {
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
  /** 检索语法规则，默认值为0，推荐使用1 (CQL语法)。0：Lucene语法，1：CQL语法。详细说明参见检索条件语法规则 */
  SyntaxRule?: number;
  /** - 要检索分析的日志主题ID，仅能指定一个日志主题。- 如需同时检索多个日志主题，请使用Topics参数。- TopicId 和 Topics 不能同时使用，在一次请求中有且只能选择一个。 */
  TopicId?: string;
  /** - 要检索分析的日志主题列表，最大支持20个日志主题。- 检索单个日志主题时请使用TopicId。- TopicId 和 Topics 不能同时使用，在一次请求中有且只能选择一个。 */
  Topics?: MultiTopicSearchInformation[];
  /** 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc注意：* 仅当检索分析语句(Query)不包含SQL时有效* SQL结果排序方式参考SQL ORDER BY语法 */
  Sort?: string;
  /** 表示单次查询返回的原始日志条数，默认为100，最大值为1000。注意：* 仅当检索分析语句(Query)不包含SQL时有效* SQL结果条数指定方式参考SQL LIMIT语法可通过两种方式获取后续更多日志：* Context:透传上次接口返回的Context值，获取后续更多日志，总计最多可获取1万条原始日志* Offset:偏移量，表示从第几行开始返回原始日志，无日志条数限制 */
  Limit?: number;
  /** 查询原始日志的偏移量，表示从第几行开始返回原始日志，默认为0。 注意：* 仅当检索分析语句(Query)不包含SQL时有效* 不能与Context参数同时使用* 仅适用于单日志主题检索 */
  Offset?: number;
  /** 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时。注意：* 透传该参数时，请勿修改除该参数外的其它参数* 仅适用于单日志主题检索，检索多个日志主题时，请使用Topics中的Context* 仅当检索分析语句(Query)不包含SQL时有效，SQL获取后续结果参考SQL LIMIT语法 */
  Context?: string;
  /** 执行统计分析（Query中包含SQL）时，是否对原始日志先进行采样，再进行统计分析。0：自动采样;0～1：按指定采样率采样，例如0.02;1：不采样，即精确分析默认值为1 */
  SamplingRate?: number;
  /** 为true代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效为false时代表使用老的检索结果返回方式, 输出AnalysisResults和ColNames有效两种返回方式在编码格式上有少量区别，建议使用true */
  UseNewAnalysis?: boolean;
}

declare interface SearchLogResponse {
  /** 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时。注意：* 仅适用于单日志主题检索，检索多个日志主题时，请使用Topics中的Context */
  Context?: string;
  /** 符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志注意：仅当检索分析语句(Query)不包含SQL时有效 */
  ListOver?: boolean;
  /** 返回的是否为统计分析（即SQL）结果 */
  Analysis?: boolean;
  /** 匹配检索条件的原始日志 */
  Results?: LogInfo[] | null;
  /** 日志统计分析结果的列名当UseNewAnalysis为false时生效 */
  ColNames?: string[] | null;
  /** 日志统计分析结果当UseNewAnalysis为false时生效 */
  AnalysisResults?: LogItems[] | null;
  /** 日志统计分析结果当UseNewAnalysis为true时生效 */
  AnalysisRecords?: string[] | null;
  /** 日志统计分析结果的列属性当UseNewAnalysis为true时生效 */
  Columns?: Column[] | null;
  /** 本次统计分析使用的采样率 */
  SamplingRate?: number | null;
  /** 使用多日志主题检索时，各个日志主题的基本信息，例如报错信息。 */
  Topics?: SearchLogTopics | null;
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
  Partitions?: PartitionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadLogRequest {
  /** 主题id */
  TopicId: string;
  /** 该参数已废弃，请勿使用 */
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
  /** 语法校验接口 {@link CheckFunctionRequest} {@link CheckFunctionResponse} */
  CheckFunction(data: CheckFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CheckFunctionResponse>;
  /** Kafka服务集群连通性校验 {@link CheckRechargeKafkaServerRequest} {@link CheckRechargeKafkaServerResponse} */
  CheckRechargeKafkaServer(data: CheckRechargeKafkaServerRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRechargeKafkaServerResponse>;
  /** 关闭Kafka协议消费 {@link CloseKafkaConsumerRequest} {@link CloseKafkaConsumerResponse} */
  CloseKafkaConsumer(data: CloseKafkaConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<CloseKafkaConsumerResponse>;
  /** 创建告警策略 {@link CreateAlarmRequest} {@link CreateAlarmResponse} */
  CreateAlarm(data: CreateAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlarmResponse>;
  /** 创建通知渠道组 {@link CreateAlarmNoticeRequest} {@link CreateAlarmNoticeResponse} */
  CreateAlarmNotice(data: CreateAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlarmNoticeResponse>;
  /** 创建告警屏蔽规则 {@link CreateAlarmShieldRequest} {@link CreateAlarmShieldResponse} */
  CreateAlarmShield(data: CreateAlarmShieldRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlarmShieldResponse>;
  /** 创建采集规则配置 {@link CreateConfigRequest} {@link CreateConfigResponse} */
  CreateConfig(data: CreateConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigResponse>;
  /** 创建特殊采集配置任务 {@link CreateConfigExtraRequest} {@link CreateConfigExtraResponse} */
  CreateConfigExtra(data: CreateConfigExtraRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigExtraResponse>;
  /** 创建免密分享 {@link CreateConsoleSharingRequest} {@link CreateConsoleSharingResponse} */
  CreateConsoleSharing(data: CreateConsoleSharingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsoleSharingResponse>;
  /** 创建投递Ckafka任务 {@link CreateConsumerRequest} {@link CreateConsumerResponse} */
  CreateConsumer(data: CreateConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsumerResponse>;
  /** 创建cos导入任务 {@link CreateCosRechargeRequest} {@link CreateCosRechargeResponse} */
  CreateCosRecharge(data: CreateCosRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosRechargeResponse>;
  /** 创建仪表盘订阅 {@link CreateDashboardSubscribeRequest} {@link CreateDashboardSubscribeResponse} */
  CreateDashboardSubscribe(data: CreateDashboardSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDashboardSubscribeResponse>;
  /** 创建数据加工任务 {@link CreateDataTransformRequest} {@link CreateDataTransformResponse} */
  CreateDataTransform(data: CreateDataTransformRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataTransformResponse>;
  /** 创建投递SCF任务 {@link CreateDeliverCloudFunctionRequest} {@link CreateDeliverCloudFunctionResponse} */
  CreateDeliverCloudFunction(data: CreateDeliverCloudFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeliverCloudFunctionResponse>;
  /** 创建日志下载任务 {@link CreateExportRequest} {@link CreateExportResponse} */
  CreateExport(data: CreateExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExportResponse>;
  /** 创建索引 {@link CreateIndexRequest} {@link CreateIndexResponse} */
  CreateIndex(data: CreateIndexRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIndexResponse>;
  /** 创建Kafka数据订阅任务 {@link CreateKafkaRechargeRequest} {@link CreateKafkaRechargeResponse} */
  CreateKafkaRecharge(data: CreateKafkaRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKafkaRechargeResponse>;
  /** 创建日志集 {@link CreateLogsetRequest} {@link CreateLogsetResponse} */
  CreateLogset(data: CreateLogsetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLogsetResponse>;
  /** 创建机器组 {@link CreateMachineGroupRequest} {@link CreateMachineGroupResponse} */
  CreateMachineGroup(data: CreateMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMachineGroupResponse>;
  /** 创建定时SQL分析任务 {@link CreateScheduledSqlRequest} {@link CreateScheduledSqlResponse} */
  CreateScheduledSql(data: CreateScheduledSqlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScheduledSqlResponse>;
  /** 新建投递到COS的任务 {@link CreateShipperRequest} {@link CreateShipperResponse} */
  CreateShipper(data: CreateShipperRequest, config?: AxiosRequestConfig): AxiosPromise<CreateShipperResponse>;
  /** 创建日志主题 {@link CreateTopicRequest} {@link CreateTopicResponse} */
  CreateTopic(data: CreateTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicResponse>;
  /** 删除告警策略 {@link DeleteAlarmRequest} {@link DeleteAlarmResponse} */
  DeleteAlarm(data: DeleteAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlarmResponse>;
  /** 删除通知渠道组 {@link DeleteAlarmNoticeRequest} {@link DeleteAlarmNoticeResponse} */
  DeleteAlarmNotice(data: DeleteAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlarmNoticeResponse>;
  /** 删除告警屏蔽规则 {@link DeleteAlarmShieldRequest} {@link DeleteAlarmShieldResponse} */
  DeleteAlarmShield(data: DeleteAlarmShieldRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlarmShieldResponse>;
  /** 删除采集规则配置 {@link DeleteConfigRequest} {@link DeleteConfigResponse} */
  DeleteConfig(data: DeleteConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigResponse>;
  /** 删除特殊采集规则配置 {@link DeleteConfigExtraRequest} {@link DeleteConfigExtraResponse} */
  DeleteConfigExtra(data: DeleteConfigExtraRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigExtraResponse>;
  /** 删除应用到机器组的采集配置 {@link DeleteConfigFromMachineGroupRequest} {@link DeleteConfigFromMachineGroupResponse} */
  DeleteConfigFromMachineGroup(data: DeleteConfigFromMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigFromMachineGroupResponse>;
  /** 删除免密分享 {@link DeleteConsoleSharingRequest} {@link DeleteConsoleSharingResponse} */
  DeleteConsoleSharing(data: DeleteConsoleSharingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConsoleSharingResponse>;
  /** 删除投递配置 {@link DeleteConsumerRequest} {@link DeleteConsumerResponse} */
  DeleteConsumer(data: DeleteConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConsumerResponse>;
  /** 删除仪表盘订阅 {@link DeleteDashboardSubscribeRequest} {@link DeleteDashboardSubscribeResponse} */
  DeleteDashboardSubscribe(data: DeleteDashboardSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDashboardSubscribeResponse>;
  /** 删除数据加工任务 {@link DeleteDataTransformRequest} {@link DeleteDataTransformResponse} */
  DeleteDataTransform(data: DeleteDataTransformRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataTransformResponse>;
  /** 删除日志下载任务 {@link DeleteExportRequest} {@link DeleteExportResponse} */
  DeleteExport(data: DeleteExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteExportResponse>;
  /** 删除索引配置 {@link DeleteIndexRequest} {@link DeleteIndexResponse} */
  DeleteIndex(data: DeleteIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIndexResponse>;
  /** 删除Kafka数据订阅任务 {@link DeleteKafkaRechargeRequest} {@link DeleteKafkaRechargeResponse} */
  DeleteKafkaRecharge(data: DeleteKafkaRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteKafkaRechargeResponse>;
  /** 删除日志集 {@link DeleteLogsetRequest} {@link DeleteLogsetResponse} */
  DeleteLogset(data: DeleteLogsetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogsetResponse>;
  /** 删除机器组 {@link DeleteMachineGroupRequest} {@link DeleteMachineGroupResponse} */
  DeleteMachineGroup(data: DeleteMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineGroupResponse>;
  /** 删除机器组信息 {@link DeleteMachineGroupInfoRequest} {@link DeleteMachineGroupInfoResponse} */
  DeleteMachineGroupInfo(data: DeleteMachineGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineGroupInfoResponse>;
  /** 删除定时SQL分析任务 {@link DeleteScheduledSqlRequest} {@link DeleteScheduledSqlResponse} */
  DeleteScheduledSql(data: DeleteScheduledSqlRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScheduledSqlResponse>;
  /** 删除投递COS任务 {@link DeleteShipperRequest} {@link DeleteShipperResponse} */
  DeleteShipper(data: DeleteShipperRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShipperResponse>;
  /** 删除日志主题 {@link DeleteTopicRequest} {@link DeleteTopicResponse} */
  DeleteTopic(data: DeleteTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicResponse>;
  /** 获取通知渠道组列表 {@link DescribeAlarmNoticesRequest} {@link DescribeAlarmNoticesResponse} */
  DescribeAlarmNotices(data?: DescribeAlarmNoticesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmNoticesResponse>;
  /** 获取告警屏蔽配置规则 {@link DescribeAlarmShieldsRequest} {@link DescribeAlarmShieldsResponse} */
  DescribeAlarmShields(data: DescribeAlarmShieldsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmShieldsResponse>;
  /** 获取告警策略列表 {@link DescribeAlarmsRequest} {@link DescribeAlarmsResponse} */
  DescribeAlarms(data?: DescribeAlarmsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmsResponse>;
  /** 获取告警历史 {@link DescribeAlertRecordHistoryRequest} {@link DescribeAlertRecordHistoryResponse} */
  DescribeAlertRecordHistory(data: DescribeAlertRecordHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlertRecordHistoryResponse>;
  /** 获取特殊采集配置 {@link DescribeConfigExtrasRequest} {@link DescribeConfigExtrasResponse} */
  DescribeConfigExtras(data?: DescribeConfigExtrasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigExtrasResponse>;
  /** 获取采集规则配置所绑定的机器组 {@link DescribeConfigMachineGroupsRequest} {@link DescribeConfigMachineGroupsResponse} */
  DescribeConfigMachineGroups(data: DescribeConfigMachineGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigMachineGroupsResponse>;
  /** 获取采集规则配置 {@link DescribeConfigsRequest} {@link DescribeConfigsResponse} */
  DescribeConfigs(data?: DescribeConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigsResponse>;
  /** 获取免密分享列表 {@link DescribeConsoleSharingListRequest} {@link DescribeConsoleSharingListResponse} */
  DescribeConsoleSharingList(data?: DescribeConsoleSharingListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsoleSharingListResponse>;
  /** 获取投递配置 {@link DescribeConsumerRequest} {@link DescribeConsumerResponse} */
  DescribeConsumer(data: DescribeConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumerResponse>;
  /** 获取cos导入配置 {@link DescribeCosRechargesRequest} {@link DescribeCosRechargesResponse} */
  DescribeCosRecharges(data: DescribeCosRechargesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCosRechargesResponse>;
  /** 获取仪表盘订阅列表 {@link DescribeDashboardSubscribesRequest} {@link DescribeDashboardSubscribesResponse} */
  DescribeDashboardSubscribes(data?: DescribeDashboardSubscribesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDashboardSubscribesResponse>;
  /** 获取仪表盘 {@link DescribeDashboardsRequest} {@link DescribeDashboardsResponse} */
  DescribeDashboards(data?: DescribeDashboardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDashboardsResponse>;
  /** 获取数据加工任务列表基本信息 {@link DescribeDataTransformInfoRequest} {@link DescribeDataTransformInfoResponse} */
  DescribeDataTransformInfo(data?: DescribeDataTransformInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataTransformInfoResponse>;
  /** 获取日志下载任务列表 {@link DescribeExportsRequest} {@link DescribeExportsResponse} */
  DescribeExports(data: DescribeExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportsResponse>;
  /** 获取索引配置信息 {@link DescribeIndexRequest} {@link DescribeIndexResponse} */
  DescribeIndex(data: DescribeIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexResponse>;
  /** 获取Kafka协议消费信息 {@link DescribeKafkaConsumerRequest} {@link DescribeKafkaConsumerResponse} */
  DescribeKafkaConsumer(data: DescribeKafkaConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKafkaConsumerResponse>;
  /** 获取Kafka数据订阅任务列表 {@link DescribeKafkaRechargesRequest} {@link DescribeKafkaRechargesResponse} */
  DescribeKafkaRecharges(data: DescribeKafkaRechargesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKafkaRechargesResponse>;
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
  /** 获取定时SQL分析任务列表 {@link DescribeScheduledSqlInfoRequest} {@link DescribeScheduledSqlInfoResponse} */
  DescribeScheduledSqlInfo(data?: DescribeScheduledSqlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScheduledSqlInfoResponse>;
  /** 获取投递任务列表 {@link DescribeShipperTasksRequest} {@link DescribeShipperTasksResponse} */
  DescribeShipperTasks(data: DescribeShipperTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShipperTasksResponse>;
  /** 获取投递到COS的任务配置信息 {@link DescribeShippersRequest} {@link DescribeShippersResponse} */
  DescribeShippers(data?: DescribeShippersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShippersResponse>;
  /** 获取日志主题列表 {@link DescribeTopicsRequest} {@link DescribeTopicsResponse} */
  DescribeTopics(data?: DescribeTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicsResponse>;
  /** 获取告警策略执行详情 {@link GetAlarmLogRequest} {@link GetAlarmLogResponse} */
  GetAlarmLog(data: GetAlarmLogRequest, config?: AxiosRequestConfig): AxiosPromise<GetAlarmLogResponse>;
  /** 合并分区 {@link MergePartitionRequest} {@link MergePartitionResponse} */
  MergePartition(data: MergePartitionRequest, config?: AxiosRequestConfig): AxiosPromise<MergePartitionResponse>;
  /** 修改告警策略 {@link ModifyAlarmRequest} {@link ModifyAlarmResponse} */
  ModifyAlarm(data: ModifyAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmResponse>;
  /** 修改通知渠道组 {@link ModifyAlarmNoticeRequest} {@link ModifyAlarmNoticeResponse} */
  ModifyAlarmNotice(data: ModifyAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmNoticeResponse>;
  /** 修改告警屏蔽规则 {@link ModifyAlarmShieldRequest} {@link ModifyAlarmShieldResponse} */
  ModifyAlarmShield(data: ModifyAlarmShieldRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmShieldResponse>;
  /** 修改采集规则配置 {@link ModifyConfigRequest} {@link ModifyConfigResponse} */
  ModifyConfig(data: ModifyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigResponse>;
  /** 修改特殊采集配置任务 {@link ModifyConfigExtraRequest} {@link ModifyConfigExtraResponse} */
  ModifyConfigExtra(data: ModifyConfigExtraRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigExtraResponse>;
  /** 修改免密分享 {@link ModifyConsoleSharingRequest} {@link ModifyConsoleSharingResponse} */
  ModifyConsoleSharing(data: ModifyConsoleSharingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConsoleSharingResponse>;
  /** 修改投递Ckafka任务 {@link ModifyConsumerRequest} {@link ModifyConsumerResponse} */
  ModifyConsumer(data: ModifyConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConsumerResponse>;
  /** 修改cos导入任务 {@link ModifyCosRechargeRequest} {@link ModifyCosRechargeResponse} */
  ModifyCosRecharge(data: ModifyCosRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCosRechargeResponse>;
  /** 修改仪表盘订阅 {@link ModifyDashboardSubscribeRequest} {@link ModifyDashboardSubscribeResponse} */
  ModifyDashboardSubscribe(data: ModifyDashboardSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDashboardSubscribeResponse>;
  /** 修改数据加工任务 {@link ModifyDataTransformRequest} {@link ModifyDataTransformResponse} */
  ModifyDataTransform(data: ModifyDataTransformRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataTransformResponse>;
  /** 修改索引 {@link ModifyIndexRequest} {@link ModifyIndexResponse} */
  ModifyIndex(data: ModifyIndexRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIndexResponse>;
  /** 修改Kafka协议消费信息 {@link ModifyKafkaConsumerRequest} {@link ModifyKafkaConsumerResponse} */
  ModifyKafkaConsumer(data: ModifyKafkaConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyKafkaConsumerResponse>;
  /** 修改Kafka数据订阅任务 {@link ModifyKafkaRechargeRequest} {@link ModifyKafkaRechargeResponse} */
  ModifyKafkaRecharge(data: ModifyKafkaRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyKafkaRechargeResponse>;
  /** 修改日志集 {@link ModifyLogsetRequest} {@link ModifyLogsetResponse} */
  ModifyLogset(data: ModifyLogsetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLogsetResponse>;
  /** 修改机器组 {@link ModifyMachineGroupRequest} {@link ModifyMachineGroupResponse} */
  ModifyMachineGroup(data: ModifyMachineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMachineGroupResponse>;
  /** 修改定时SQL分析任务 {@link ModifyScheduledSqlRequest} {@link ModifyScheduledSqlResponse} */
  ModifyScheduledSql(data: ModifyScheduledSqlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyScheduledSqlResponse>;
  /** 修改投递COS任务 {@link ModifyShipperRequest} {@link ModifyShipperResponse} */
  ModifyShipper(data: ModifyShipperRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyShipperResponse>;
  /** 修改日志主题 {@link ModifyTopicRequest} {@link ModifyTopicResponse} */
  ModifyTopic(data: ModifyTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicResponse>;
  /** 打开Kafka协议消费 {@link OpenKafkaConsumerRequest} {@link OpenKafkaConsumerResponse} */
  OpenKafkaConsumer(data: OpenKafkaConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<OpenKafkaConsumerResponse>;
  /** Kafka数据订阅日志预览 {@link PreviewKafkaRechargeRequest} {@link PreviewKafkaRechargeResponse} */
  PreviewKafkaRecharge(data: PreviewKafkaRechargeRequest, config?: AxiosRequestConfig): AxiosPromise<PreviewKafkaRechargeResponse>;
  /** 指标查询（最新值查询） {@link QueryMetricRequest} {@link QueryMetricResponse} */
  QueryMetric(data: QueryMetricRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMetricResponse>;
  /** 指标查询（范围查询） {@link QueryRangeMetricRequest} {@link QueryRangeMetricResponse} */
  QueryRangeMetric(data: QueryRangeMetricRequest, config?: AxiosRequestConfig): AxiosPromise<QueryRangeMetricResponse>;
  /** 重试失败的投递任务 {@link RetryShipperTaskRequest} {@link RetryShipperTaskResponse} */
  RetryShipperTask(data: RetryShipperTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RetryShipperTaskResponse>;
  /** 预览cos导入信息 {@link SearchCosRechargeInfoRequest} {@link SearchCosRechargeInfoResponse} */
  SearchCosRechargeInfo(data: SearchCosRechargeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<SearchCosRechargeInfoResponse>;
  /** 预览仪表盘订阅 {@link SearchDashboardSubscribeRequest} {@link SearchDashboardSubscribeResponse} */
  SearchDashboardSubscribe(data: SearchDashboardSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<SearchDashboardSubscribeResponse>;
  /** 检索分析日志 {@link SearchLogRequest} {@link SearchLogResponse} */
  SearchLog(data: SearchLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchLogResponse>;
  /** 分裂主题分区 {@link SplitPartitionRequest} {@link SplitPartitionResponse} */
  SplitPartition(data: SplitPartitionRequest, config?: AxiosRequestConfig): AxiosPromise<SplitPartitionResponse>;
  /** 上传日志 {@link UploadLogRequest} {@link UploadLogResponse} */
  UploadLog(data: UploadLogRequest, config?: AxiosRequestConfig): AxiosPromise<UploadLogResponse>;
}

export declare type Versions = ["2020-10-16"];

export default Cls;
