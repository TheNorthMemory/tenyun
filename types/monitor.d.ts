/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 告警事件 */
declare interface AlarmEvent {
  /** 事件名 */
  EventName: string;
  /** 展示的事件名 */
  Description: string;
  /** 告警策略类型 */
  Namespace: string;
}

/** 通知模板ID及通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警 */
declare interface AlarmHierarchicalNotice {
  /** 通知模板ID */
  NoticeId?: string | null;
  /** 通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警 */
  Classification?: string[] | null;
}

/** 告警分级阈值配置 */
declare interface AlarmHierarchicalValue {
  /** 提醒等级阈值 */
  Remind?: string | null;
  /** 警告等级阈值 */
  Warn?: string | null;
  /** 严重等级阈值 */
  Serious?: string | null;
}

/** 告警历史数据 */
declare interface AlarmHistory {
  /** 告警历史Id */
  AlarmId: string;
  /** 监控类型 */
  MonitorType: string;
  /** 策略类型 */
  Namespace: string;
  /** 告警对象 */
  AlarmObject: string;
  /** 告警内容 */
  Content: string;
  /** 时间戳，首次出现时间 */
  FirstOccurTime: number;
  /** 时间戳，最后出现时间 */
  LastOccurTime: number;
  /** 告警状态，ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足 */
  AlarmStatus: string;
  /** 告警策略 Id */
  PolicyId: string;
  /** 策略名称 */
  PolicyName: string;
  /** 基础产品告警的告警对象所属网络 */
  VPC: string;
  /** 项目 Id */
  ProjectId: number;
  /** 项目名字 */
  ProjectName: string;
  /** 告警对象所属实例组 */
  InstanceGroup: InstanceGroups[];
  /** 接收人列表 */
  ReceiverUids: number[];
  /** 接收组列表 */
  ReceiverGroups: number[];
  /** 告警渠道列表 SMS=短信 EMAIL=邮件 CALL=电话 WECHAT=微信 */
  NoticeWays: string[];
  /** 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID */
  OriginId: string;
  /** 告警类型 */
  AlarmType: string;
  /** 事件Id */
  EventId: number;
  /** 地域 */
  Region: string;
  /** 策略是否存在 0=不存在 1=存在 */
  PolicyExists: number;
  /** 指标信息 */
  MetricsInfo: AlarmHistoryMetric[] | null;
  /** 告警实例的维度信息 */
  Dimensions: string | null;
}

/** 告警历史的指标信息 */
declare interface AlarmHistoryMetric {
  /** 云产品监控类型查询数据使用的命名空间 */
  QceNamespace: string;
  /** 指标名 */
  MetricName: string;
  /** 统计周期 */
  Period: number;
  /** 触发告警的数值 */
  Value: string;
  /** 指标的展示名 */
  Description: string;
}

/** 告警通知模板详情 */
declare interface AlarmNotice {
  /** 告警通知模板 ID */
  Id: string | null;
  /** 告警通知模板名称 */
  Name: string | null;
  /** 上次修改时间 */
  UpdatedAt: string | null;
  /** 上次修改人 */
  UpdatedBy: string | null;
  /** 告警通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=全部通知 */
  NoticeType: string | null;
  /** 用户通知列表 */
  UserNotices: UserNotice[] | null;
  /** 回调通知列表 */
  URLNotices: URLNotice[] | null;
  /** 是否是系统预设通知模板 0=否 1=是 */
  IsPreset: number | null;
  /** 通知语言 zh-CN=中文 en-US=英文 */
  NoticeLanguage: string | null;
  /** 告警通知模板绑定的告警策略ID列表 */
  PolicyIds: string[] | null;
  /** 后台 amp consumer id */
  AMPConsumerId: string | null;
  /** 推送cls渠道 */
  CLSNotices: CLSNotice[] | null;
  /** 通知模板绑定的标签 */
  Tags: Tag[] | null;
}

/** 告警策略详情 */
declare interface AlarmPolicy {
  /** 告警策略 ID */
  PolicyId: string | null;
  /** 告警策略名称 */
  PolicyName: string | null;
  /** 备注信息 */
  Remark: string | null;
  /** 监控类型 MT_QCE=云产品监控 */
  MonitorType: string | null;
  /** 启停状态 0=停用 1=启用 */
  Enable: number | null;
  /** 策略组绑定的实例数 */
  UseSum: number | null;
  /** 项目 Id -1=无项目 0=默认项目 */
  ProjectId: number | null;
  /** 项目名 */
  ProjectName: string | null;
  /** 告警策略类型 */
  Namespace: string | null;
  /** 触发条件模板 Id */
  ConditionTemplateId: string | null;
  /** 指标触发条件 */
  Condition: AlarmPolicyCondition | null;
  /** 事件触发条件 */
  EventCondition: AlarmPolicyEventCondition | null;
  /** 通知规则 id 列表 */
  NoticeIds: string[] | null;
  /** 通知规则 列表 */
  Notices: AlarmNotice[] | null;
  /** 触发任务列表 */
  TriggerTasks: AlarmPolicyTriggerTask[] | null;
  /** 模板策略组 */
  ConditionsTemp: ConditionsTemp | null;
  /** 最后编辑的用户uin */
  LastEditUin: string | null;
  /** 更新时间 */
  UpdateTime: number | null;
  /** 创建时间 */
  InsertTime: number | null;
  /** 地域 */
  Region: string[] | null;
  /** namespace显示名字 */
  NamespaceShowName: string | null;
  /** 是否默认策略，1是，0否 */
  IsDefault: number | null;
  /** 能否设置默认策略，1是，0否 */
  CanSetDefault: number | null;
  /** 实例分组ID */
  InstanceGroupId: number | null;
  /** 实例分组总实例数 */
  InstanceSum: number | null;
  /** 实例分组名称 */
  InstanceGroupName: string | null;
  /** 触发条件类型 STATIC=静态阈值 DYNAMIC=动态类型 */
  RuleType: string | null;
  /** 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID */
  OriginId: string | null;
  /** 标签 */
  TagInstances: TagInstance[] | null;
  /** 策略关联的过滤维度信息 */
  FilterDimensionsParam: string | null;
  /** 是否为一键告警策略 */
  IsOneClick: number | null;
  /** 一键告警策略是否开启 */
  OneClickStatus: number | null;
  /** 高级指标数量 */
  AdvancedMetricNumber: number | null;
  /** 策略是否是全部对象策略 */
  IsBindAll: number | null;
  /** 策略标签 */
  Tags: Tag[] | null;
}

/** 告警策略指标触发条件 */
declare interface AlarmPolicyCondition {
  /** 告警触发条件的判断方式. 0: 任意; 1: 全部; 2: 复合. 当取值为2的时候为复合告警，与参数 ComplexExpression 配合使用. */
  IsUnionRule: number | null;
  /** 告警触发条件列表 */
  Rules: AlarmPolicyRule[] | null;
  /** 复合告警触发条件的判断表达式，当 IsUnionRule 取值为2的时候有效. 其作用是描述多个触发条件需要满足表达式求值为True时才算是满足告警条件. */
  ComplexExpression?: string | null;
}

/** 告警策略事件触发条件 */
declare interface AlarmPolicyEventCondition {
  /** 告警触发条件列表 */
  Rules: AlarmPolicyRule[] | null;
}

/** 告警策略过滤条件 */
declare interface AlarmPolicyFilter {
  /** 过滤条件类型 DIMENSION=使用 Dimensions 做过滤 */
  Type: string | null;
  /** AlarmPolicyDimension 二维数组序列化后的json字符串，一维数组之间互为或关系，一维数组内的元素互为与关系 */
  Dimensions?: string | null;
}

/** 告警策略触发条件 */
declare interface AlarmPolicyRule {
  /** 指标名或事件名，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询 。 */
  MetricName?: string | null;
  /** 秒数 统计周期，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。 */
  Period?: number | null;
  /** 英文运算符intelligent=无阈值智能检测eq=等于ge=大于等于gt=大于le=小于等于lt=小于ne=不等于day_increase=天同比增长day_decrease=天同比下降day_wave=天同比波动week_increase=周同比增长week_decrease=周同比下降week_wave=周同比波动cycle_increase=环比增长cycle_decrease=环比下降cycle_wave=环比波动re=正则匹配支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。 */
  Operator?: string | null;
  /** 阈值，支持的范围可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。 */
  Value?: string | null;
  /** 周期数 持续通知周期 1=持续1个周期 2=持续2个周期...，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询 */
  ContinuePeriod?: number | null;
  /** 秒数 告警间隔 0=不重复 300=每5分钟告警一次 600=每10分钟告警一次 900=每15分钟告警一次 1800=每30分钟告警一次 3600=每1小时告警一次 7200=每2小时告警一次 10800=每3小时告警一次 21600=每6小时告警一次 43200=每12小时告警一次 86400=每1天告警一次 */
  NoticeFrequency?: number | null;
  /** 告警频率是否指数增长 0=否 1=是 */
  IsPowerNotice?: number | null;
  /** 对于单个触发规则的过滤条件 */
  Filter?: AlarmPolicyFilter | null;
  /** 指标展示名，用于出参 */
  Description?: string | null;
  /** 单位，用于出参 */
  Unit?: string | null;
  /** 触发条件类型 STATIC=静态阈值 DYNAMIC=动态阈值。创建或编辑策略时，如不填则默认为 STATIC。 */
  RuleType?: string | null;
  /** 是否为高级指标，0否，1是 */
  IsAdvanced?: number | null;
  /** 高级指标是否开通，0否，1是 */
  IsOpen?: number | null;
  /** 集成中心产品ID */
  ProductId?: string | null;
  /** 最大值 */
  ValueMax?: number | null;
  /** 最小值 */
  ValueMin?: number | null;
  /** 告警分级阈值配置 */
  HierarchicalValue?: AlarmHierarchicalValue | null;
}

/** 告警策略触发任务 */
declare interface AlarmPolicyTriggerTask {
  /** 触发任务类型 AS=弹性伸缩 */
  Type: string | null;
  /** 用 json 表示配置信息 {"Key1":"Value1","Key2":"Value2"} */
  TaskConfig: string | null;
}

/** 策略绑定实例维度信息 */
declare interface BindingPolicyObjectDimension {
  /** 地域名 */
  Region: string;
  /** 地域ID */
  RegionId?: number;
  /** 实例的维度信息，格式为{"unInstanceId":"ins-00jvv9mo"}。不同云产品的维度信息不同，详见[指标维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397) */
  Dimensions?: string;
  /** 事件维度信息 */
  EventDimensions?: string;
}

/** 告警通知中的推送CLS操作 */
declare interface CLSNotice {
  /** 地域 */
  Region: string;
  /** 日志集Id */
  LogSetId: string;
  /** 主题Id */
  TopicId: string;
  /** 启停状态，可不传，默认启用。0=停用，1=启用 */
  Enable?: number;
}

/** 统一的命名空间信息 */
declare interface CommonNamespace {
  /** 命名空间标示 */
  Id: string;
  /** 命名空间名称 */
  Name: string;
  /** 命名空间值 */
  Value: string;
  /** 产品名称 */
  ProductName: string;
  /** 配置信息 */
  Config: string;
  /** 支持地域列表 */
  AvailableRegions: string[];
  /** 排序Id */
  SortId: number;
  /** Dashboard中的唯一表示 */
  DashboardId: string;
}

/** 策略类型信息 */
declare interface CommonNamespaceNew {
  /** 命名空间标示 */
  Id: string;
  /** 命名空间名称 */
  Name: string;
  /** 监控类型 */
  MonitorType: string;
  /** 维度信息 */
  Dimensions: DimensionNew[];
}

/** 告警条件 */
declare interface Condition {
  /** 告警通知频率 */
  AlarmNotifyPeriod: number;
  /** 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警） */
  AlarmNotifyType: number;
  /** 检测方式 */
  CalcType: string | null;
  /** 检测值 */
  CalcValue: string | null;
  /** 持续时间，单位秒 */
  ContinueTime: string | null;
  /** 指标ID */
  MetricID: number;
  /** 指标展示名称（对外） */
  MetricDisplayName: string;
  /** 周期 */
  Period: number;
  /** 规则ID */
  RuleID: number;
  /** 指标单位 */
  Unit: string;
  /** 是否为高级指标，0：否；1：是 */
  IsAdvanced: number;
  /** 是否开通高级指标，0：否；1：是 */
  IsOpen: number;
  /** 产品ID */
  ProductId: string | null;
}

/** 告警条件模版 */
declare interface ConditionsTemp {
  /** 模版名称 */
  TemplateName: string | null;
  /** 指标触发条件 */
  Condition: AlarmPolicyCondition | null;
  /** 事件触发条件 */
  EventCondition: AlarmPolicyEventCondition | null;
}

/** 创建策略传入的阈值告警条件 */
declare interface CreatePolicyGroupCondition {
  /** 指标Id */
  MetricId: number;
  /** 告警发送收敛类型。0连续告警，1指数告警 */
  AlarmNotifyType: number;
  /** 告警发送周期单位秒。0 每隔triggerTime秒触发一次 */
  AlarmNotifyPeriod: number;
  /** 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等。如果指标有配置默认比较类型值可以不填。 */
  CalcType?: number;
  /** 比较的值，如果指标不必须CalcValue可不填 */
  CalcValue?: number;
  /** 数据聚合周期(单位秒)，若指标有默认值可不填 */
  CalcPeriod?: number;
  /** 持续几个检测周期触发规则会告警 */
  ContinuePeriod?: number;
  /** 如果通过模板创建，需要传入模板中该指标的对应RuleId */
  RuleId?: number;
}

/** 创建策略传入的事件告警条件 */
declare interface CreatePolicyGroupEventCondition {
  /** 告警事件的Id */
  EventId: number;
  /** 告警发送收敛类型。0连续告警，1指数告警 */
  AlarmNotifyType: number;
  /** 告警发送周期单位秒。0 每隔triggerTime秒触发一次 */
  AlarmNotifyPeriod: number;
  /** 如果通过模板创建，需要传入模板中该指标的对应RuleId */
  RuleId?: number;
}

/** 监控数据点 */
declare interface DataPoint {
  /** 实例对象维度组合 */
  Dimensions: Dimension[];
  /** 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了 */
  Timestamps: number[];
  /** 监控值数组，该数组和Timestamps一一对应 */
  Values: number[];
}

/** DescribeAccidentEventList接口的出参类型 */
declare interface DescribeAccidentEventListAlarms {
  /** 事件分类 */
  BusinessTypeDesc: string | null;
  /** 事件类型 */
  AccidentTypeDesc: string | null;
  /** 事件分类的ID，1表示服务问题，2表示其他订阅 */
  BusinessID: number | null;
  /** 事件状态的ID，0表示已恢复，1表示未恢复 */
  EventStatus: number | null;
  /** 影响的对象 */
  AffectResource: string | null;
  /** 事件的地域 */
  Region: string | null;
  /** 事件发生的时间 */
  OccurTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
}

/** DescribeBasicAlarmList返回的Alarms */
declare interface DescribeBasicAlarmListAlarms {
  /** 该条告警的ID */
  Id: number;
  /** 项目ID */
  ProjectId: number | null;
  /** 项目名称 */
  ProjectName: string | null;
  /** 告警状态ID，0表示未恢复；1表示已恢复；2,3,5表示数据不足；4表示已失效 */
  Status: number | null;
  /** 告警状态，ALARM表示未恢复；OK表示已恢复；NO_DATA表示数据不足；NO_CONF表示已失效 */
  AlarmStatus: string | null;
  /** 策略组ID */
  GroupId: number | null;
  /** 策略组名 */
  GroupName: string | null;
  /** 发生时间 */
  FirstOccurTime: string | null;
  /** 持续时间，单位s */
  Duration: number | null;
  /** 结束时间 */
  LastOccurTime: string | null;
  /** 告警内容 */
  Content: string | null;
  /** 告警对象 */
  ObjName: string | null;
  /** 告警对象ID */
  ObjId: string | null;
  /** 策略类型 */
  ViewName: string | null;
  /** VPC，只有CVM有 */
  Vpc: string | null;
  /** 指标ID */
  MetricId: number | null;
  /** 指标名 */
  MetricName: string | null;
  /** 告警类型，0表示指标告警，2表示产品事件告警，3表示平台事件告警 */
  AlarmType: number | null;
  /** 地域 */
  Region: string | null;
  /** 告警对象维度信息 */
  Dimensions: string | null;
  /** 通知方式 */
  NotifyWay: string[] | null;
  /** 所属实例组信息 */
  InstanceGroup: InstanceGroup[] | null;
}

/** DescribeBindingPolicyObjectList接口的Dimension */
declare interface DescribeBindingPolicyObjectListDimension {
  /** 地域id */
  RegionId: number;
  /** 地域简称 */
  Region: string;
  /** 维度组合json字符串 */
  Dimensions: string;
  /** 事件维度组合json字符串 */
  EventDimensions: string;
}

/** 查询策略绑定对象列表接口返回的对象实例信息 */
declare interface DescribeBindingPolicyObjectListInstance {
  /** 对象唯一id */
  UniqueId: string;
  /** 表示对象实例的维度集合，jsonObj字符串 */
  Dimensions: string;
  /** 对象是否被屏蔽，0表示未屏蔽，1表示被屏蔽 */
  IsShielded: number;
  /** 对象所在的地域 */
  Region: string;
}

/** DescribeBindingPolicyObjectList返回的是实例分组信息 */
declare interface DescribeBindingPolicyObjectListInstanceGroup {
  /** 实例分组id */
  InstanceGroupId: number;
  /** 告警策略类型名称 */
  ViewName: string;
  /** 最后编辑uin */
  LastEditUin: string;
  /** 实例分组名称 */
  GroupName: string;
  /** 实例数量 */
  InstanceSum: number;
  /** 更新时间 */
  UpdateTime: number;
  /** 创建时间 */
  InsertTime: number;
  /** 实例所在的地域集合 */
  Regions: string[] | null;
}

/** DescribePolicyConditionList策略条件 */
declare interface DescribePolicyConditionListCondition {
  /** 策略视图名称 */
  PolicyViewName: string;
  /** 事件告警条件 */
  EventMetrics: DescribePolicyConditionListEventMetric[] | null;
  /** 是否支持多地域 */
  IsSupportMultiRegion: boolean;
  /** 指标告警条件 */
  Metrics: DescribePolicyConditionListMetric[] | null;
  /** 策略类型名称 */
  Name: string;
  /** 排序id */
  SortId: number;
  /** 是否支持默认策略 */
  SupportDefault: boolean;
  /** 支持该策略类型的地域列表 */
  SupportRegions: string[] | null;
  /** 弃用信息 */
  DeprecatingInfo?: DescribePolicyConditionListResponseDeprecatingInfo | null;
}

/** DescribePolicyConditionList.ConfigManual */
declare interface DescribePolicyConditionListConfigManual {
  /** 检测方式 */
  CalcType: DescribePolicyConditionListConfigManualCalcType | null;
  /** 检测阈值 */
  CalcValue: DescribePolicyConditionListConfigManualCalcValue | null;
  /** 持续时间 */
  ContinueTime: DescribePolicyConditionListConfigManualContinueTime | null;
  /** 数据周期 */
  Period: DescribePolicyConditionListConfigManualPeriod | null;
  /** 持续周期个数 */
  PeriodNum: DescribePolicyConditionListConfigManualPeriodNum | null;
  /** 聚合方式 */
  StatType: DescribePolicyConditionListConfigManualStatType | null;
}

/** DescribePolicyConditionList.ConfigManual.CalcType */
declare interface DescribePolicyConditionListConfigManualCalcType {
  /** CalcType 取值 */
  Keys: number[] | null;
  /** 是否必须 */
  Need: boolean;
}

/** DescribePolicyConditionList.ConfigManual.CalcValue */
declare interface DescribePolicyConditionListConfigManualCalcValue {
  /** 默认值 */
  Default: string | null;
  /** 固定值 */
  Fixed: string | null;
  /** 最大值 */
  Max: string | null;
  /** 最小值 */
  Min: string | null;
  /** 是否必须 */
  Need: boolean;
}

/** DescribePolicyConditionList.ConfigManual.ContinueTime */
declare interface DescribePolicyConditionListConfigManualContinueTime {
  /** 默认持续时间，单位：秒 */
  Default: number | null;
  /** 可选持续时间，单位：秒 */
  Keys: number[] | null;
  /** 是否必须 */
  Need: boolean;
}

/** DescribePolicyConditionList.ConfigManual.Period */
declare interface DescribePolicyConditionListConfigManualPeriod {
  /** 默认周期，单位：秒 */
  Default: number | null;
  /** 可选周期，单位：秒 */
  Keys: number[] | null;
  /** 是否必须 */
  Need: boolean;
}

/** DescribePolicyConditionList.ConfigManual.PeriodNum */
declare interface DescribePolicyConditionListConfigManualPeriodNum {
  /** 默认周期数 */
  Default: number | null;
  /** 可选周期数 */
  Keys: number[] | null;
  /** 是否必须 */
  Need: boolean;
}

/** DescribePolicyConditionList.ConfigManual.StatType */
declare interface DescribePolicyConditionListConfigManualStatType {
  /** 数据聚合方式，周期5秒 */
  P5: string | null;
  /** 数据聚合方式，周期10秒 */
  P10: string | null;
  /** 数据聚合方式，周期1分钟 */
  P60: string | null;
  /** 数据聚合方式，周期5分钟 */
  P300: string | null;
  /** 数据聚合方式，周期10分钟 */
  P600: string | null;
  /** 数据聚合方式，周期30分钟 */
  P1800: string | null;
  /** 数据聚合方式，周期1小时 */
  P3600: string | null;
  /** 数据聚合方式，周期1天 */
  P86400: string | null;
}

/** DescribePolicyConditionList.EventMetric */
declare interface DescribePolicyConditionListEventMetric {
  /** 事件id */
  EventId: number;
  /** 事件名称 */
  EventShowName: string;
  /** 是否需要恢复 */
  NeedRecovered: boolean;
  /** 事件类型，预留字段，当前固定取值为2 */
  Type: number;
}

/** 指标告警配置 */
declare interface DescribePolicyConditionListMetric {
  /** 指标配置 */
  ConfigManual: DescribePolicyConditionListConfigManual | null;
  /** 指标id */
  MetricId: number;
  /** 指标名称 */
  MetricShowName: string;
  /** 指标单位 */
  MetricUnit: string;
}

/** DescribePolicyConditionListResponseDeprecatingInfo */
declare interface DescribePolicyConditionListResponseDeprecatingInfo {
  /** 是否隐藏 */
  Hidden?: boolean | null;
  /** 新视图名称 */
  NewViewNames?: string[] | null;
  /** 描述 */
  Description?: string | null;
}

/** 查询策略输出的用户回调信息 */
declare interface DescribePolicyGroupInfoCallback {
  /** 用户回调接口地址 */
  CallbackUrl: string;
  /** 用户回调接口状态，0表示未验证，1表示已验证，2表示存在url但没有通过验证 */
  ValidFlag: number;
  /** 用户回调接口验证码 */
  VerifyCode: string;
}

/** 查询策略输出的阈值告警条件 */
declare interface DescribePolicyGroupInfoCondition {
  /** 指标名称 */
  MetricShowName: string;
  /** 数据聚合周期(单位秒) */
  Period: number;
  /** 指标id */
  MetricId: number;
  /** 阈值规则id */
  RuleId: number;
  /** 指标单位 */
  Unit: string;
  /** 告警发送收敛类型。0连续告警，1指数告警 */
  AlarmNotifyType: number;
  /** 告警发送周期单位秒。0 每隔triggerTime秒触发一次 */
  AlarmNotifyPeriod: number;
  /** 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等，7表示日同比上涨，8表示日同比下降，9表示周同比上涨，10表示周同比下降，11表示周期环比上涨，12表示周期环比下降 */
  CalcType: number | null;
  /** 检测阈值 */
  CalcValue: string | null;
  /** 持续多长时间触发规则会告警(单位秒) */
  ContinueTime: number | null;
  /** 告警指标名 */
  MetricName: string | null;
}

/** 查询策略输出的模板策略组信息 */
declare interface DescribePolicyGroupInfoConditionTpl {
  /** 策略组id */
  GroupId: number;
  /** 策略组名称 */
  GroupName: string;
  /** 策略类型 */
  ViewName: string;
  /** 策略组说明 */
  Remark: string;
  /** 最后编辑的用户uin */
  LastEditUin: string;
  /** 更新时间 */
  UpdateTime: number | null;
  /** 创建时间 */
  InsertTime: number | null;
  /** 是否且规则 */
  IsUnionRule: number | null;
}

/** 查询策略输出的事件告警条件 */
declare interface DescribePolicyGroupInfoEventCondition {
  /** 事件id */
  EventId: number;
  /** 事件告警规则id */
  RuleId: number;
  /** 事件名称 */
  EventShowName: string;
  /** 告警发送周期单位秒。0 每隔triggerTime秒触发一次 */
  AlarmNotifyPeriod: number;
  /** 告警发送收敛类型。0连续告警，1指数告警 */
  AlarmNotifyType: number;
}

/** 查询策略输出的告警接收人信息 */
declare interface DescribePolicyGroupInfoReceiverInfo {
  /** 告警接收组id列表 */
  ReceiverGroupList: number[];
  /** 告警接收人id列表 */
  ReceiverUserList: number[];
  /** 告警时间段开始时间。范围[0,86400)，作为 UNIX 时间戳转成北京时间后去掉日期，例如7200表示"10:0:0" */
  StartTime: number;
  /** 告警时间段结束时间。含义同StartTime */
  EndTime: number;
  /** 接收类型。“group”(接收组)或“user”(接收人) */
  ReceiverType: string;
  /** 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT" */
  NotifyWay: string[];
  /** 电话告警接收者uid */
  UidList: number[] | null;
  /** 电话告警轮数 */
  RoundNumber: number;
  /** 电话告警每轮间隔（秒） */
  RoundInterval: number;
  /** 电话告警对个人间隔（秒） */
  PersonInterval: number;
  /** 是否需要电话告警触达提示。0不需要，1需要 */
  NeedSendNotice: number;
  /** 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知) */
  SendFor: string[];
  /** 恢复通知方式。可选"SMS" */
  RecoverNotify: string[];
  /** 告警发送语言 */
  ReceiveLanguage: string | null;
}

/** DescribePolicyGroupList.Group */
declare interface DescribePolicyGroupListGroup {
  /** 策略组id */
  GroupId: number;
  /** 策略组名称 */
  GroupName: string;
  /** 是否开启 */
  IsOpen: boolean;
  /** 策略视图名称 */
  ViewName: string;
  /** 最近编辑的用户uin */
  LastEditUin: string;
  /** 最后修改时间 */
  UpdateTime: number;
  /** 创建时间 */
  InsertTime: number;
  /** 策略组绑定的实例数 */
  UseSum: number;
  /** 策略组绑定的未屏蔽实例数 */
  NoShieldedSum: number;
  /** 是否为默认策略，0表示非默认策略，1表示默认策略 */
  IsDefault: number;
  /** 是否可以设置成默认策略 */
  CanSetDefault: boolean;
  /** 父策略组id */
  ParentGroupId: number;
  /** 策略组备注 */
  Remark: string;
  /** 策略组所属项目id */
  ProjectId: number;
  /** 阈值规则列表 */
  Conditions: DescribePolicyGroupInfoCondition[] | null;
  /** 产品事件规则列表 */
  EventConditions: DescribePolicyGroupInfoEventCondition[] | null;
  /** 用户接收人列表 */
  ReceiverInfos: DescribePolicyGroupInfoReceiverInfo[] | null;
  /** 模板策略组 */
  ConditionsTemp: DescribePolicyGroupInfoConditionTpl | null;
  /** 策略组绑定的实例组信息 */
  InstanceGroup: DescribePolicyGroupListGroupInstanceGroup | null;
  /** 且或规则标识, 0表示或规则(任意一条规则满足阈值条件就告警), 1表示且规则(所有规则都满足阈值条件才告警) */
  IsUnionRule: number | null;
}

/** DescribePolicyGroupList接口策略组绑定的实例分组信息 */
declare interface DescribePolicyGroupListGroupInstanceGroup {
  /** 实例分组名称id */
  InstanceGroupId: number;
  /** 策略类型视图名称 */
  ViewName: string;
  /** 最近编辑的用户uin */
  LastEditUin: string;
  /** 实例分组名称 */
  GroupName: string;
  /** 实例数量 */
  InstanceSum: number;
  /** 更新时间 */
  UpdateTime: number;
  /** 创建时间 */
  InsertTime: number;
}

/** DescribeProductEventList的入参Dimensions */
declare interface DescribeProductEventListDimensions {
  /** 维度名 */
  Name: string;
  /** 维度值 */
  Value: string;
}

/** DescribeProductEventList返回的Events */
declare interface DescribeProductEventListEvents {
  /** 事件ID */
  EventId: number | null;
  /** 事件中文名 */
  EventCName: string | null;
  /** 事件英文名 */
  EventEName: string | null;
  /** 事件简称 */
  EventName: string | null;
  /** 产品中文名 */
  ProductCName: string | null;
  /** 产品英文名 */
  ProductEName: string | null;
  /** 产品简称 */
  ProductName: string | null;
  /** 实例ID */
  InstanceId: string | null;
  /** 实例名称 */
  InstanceName: string | null;
  /** 项目ID */
  ProjectId: string | null;
  /** 地域 */
  Region: string | null;
  /** 状态 */
  Status: string | null;
  /** 是否支持告警 */
  SupportAlarm: number | null;
  /** 事件类型 */
  Type: string | null;
  /** 开始时间 */
  StartTime: number | null;
  /** 更新时间 */
  UpdateTime: number | null;
  /** 实例对象信息 */
  Dimensions: DescribeProductEventListEventsDimensions[] | null;
  /** 实例对象附加信息 */
  AdditionMsg: DescribeProductEventListEventsDimensions[] | null;
  /** 是否配置告警 */
  IsAlarmConfig: number | null;
  /** 策略信息 */
  GroupInfo: DescribeProductEventListEventsGroupInfo[] | null;
  /** 显示名称ViewName */
  ViewName: string | null;
}

/** DescribeProductEventList返回的Events的Dimensions */
declare interface DescribeProductEventListEventsDimensions {
  /** 维度名（英文） */
  Key: string | null;
  /** 维度名（中文） */
  Name: string | null;
  /** 维度值 */
  Value: string | null;
}

/** DescribeProductEventList返回的Events里的GroupInfo */
declare interface DescribeProductEventListEventsGroupInfo {
  /** 策略ID */
  GroupId: number | null;
  /** 策略名 */
  GroupName: string | null;
}

/** DescribeProductEventList返回的OverView对象 */
declare interface DescribeProductEventListOverView {
  /** 状态变更的事件数量 */
  StatusChangeAmount: number | null;
  /** 告警状态未配置的事件数量 */
  UnConfigAlarmAmount: number | null;
  /** 异常事件数量 */
  UnNormalEventAmount: number | null;
  /** 未恢复的事件数量 */
  UnRecoverAmount: number | null;
}

/** 实例对象的维度组合 */
declare interface Dimension {
  /** 实例维度名称 */
  Name: string;
  /** 实例维度值 */
  Value: string;
}

/** 策略类型的维度信息 */
declare interface DimensionNew {
  /** 维度 key 标示，后台英文名 */
  Key: string;
  /** 维度 key 名称，中英文前台展示名 */
  Name: string;
  /** 是否必选 */
  IsRequired: boolean;
  /** 支持的操作符列表 */
  Operators: Operator[];
  /** 是否支持多选 */
  IsMultiple: boolean;
  /** 创建后是否可以修改 */
  IsMutable: boolean;
  /** 是否展示给用户 */
  IsVisible: boolean;
  /** 能否用来过滤策略列表 */
  CanFilterPolicy: boolean;
  /** 能否用来过滤告警历史 */
  CanFilterHistory: boolean;
  /** 能否作为聚合维度 */
  CanGroupBy: boolean;
  /** 是否必须作为聚合维度 */
  MustGroupBy: boolean;
  /** 前端翻译要替换的 key */
  ShowValueReplace: string | null;
}

/** 维度信息 */
declare interface DimensionsDesc {
  /** 维度名数组 */
  Dimensions: string[];
}

/** 事件告警条件 */
declare interface EventCondition {
  /** 告警通知频率 */
  AlarmNotifyPeriod: string | null;
  /** 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警） */
  AlarmNotifyType: string | null;
  /** 事件ID */
  EventID: string;
  /** 事件展示名称（对外） */
  EventDisplayName: string;
  /** 规则ID */
  RuleID: string;
}

/** 查询过滤参数 */
declare interface Filter {
  /** 过滤方式（=, !=, in） */
  Type: string;
  /** 过滤维度名 */
  Key: string;
  /** 过滤值，in过滤方式用逗号分割多个值 */
  Value: string;
}

/** Grafana可视化服务 授权账户信息 */
declare interface GrafanaAccountInfo {
  /** 用户账号ID */
  UserId: string;
  /** 用户权限 */
  Role: GrafanaAccountRole[];
  /** 备注 */
  Notes: string;
  /** 创建时间 */
  CreateAt: string;
  /** 实例 ID */
  InstanceId: string | null;
  /** 用户主账号 UIN */
  Uin: string;
}

/** Grafana可视化服务 账号权限 */
declare interface GrafanaAccountRole {
  /** 组织 */
  Organization?: string;
  /** 权限 */
  Role?: string;
}

/** Grafana 告警渠道 */
declare interface GrafanaChannel {
  /** 渠道 ID */
  ChannelId: string;
  /** 渠道名 */
  ChannelName: string;
  /** 告警通道模板 ID 数组 */
  Receivers: string[];
  /** 创建时间 */
  CreatedAt: string;
  /** 更新时间 */
  UpdatedAt: string;
  /** 告警渠道的所有生效组织 */
  OrganizationIds: string[] | null;
}

/** 查询 Grafana 实例时的实例类型 */
declare interface GrafanaInstanceInfo {
  /** 实例名 */
  InstanceName: string;
  /** 实例 ID */
  InstanceId: string;
  /** 地域 */
  Region: string;
  /** VPC ID */
  VpcId: string;
  /** 子网 ID 数组 */
  SubnetIds: string[];
  /** Grafana 内网地址 */
  InternetUrl: string;
  /** Grafana 公网地址 */
  InternalUrl: string;
  /** 创建时间 */
  CreatedAt: string;
  /** 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:停机中； 6:已停机； 7: 已删除） */
  InstanceStatus: number;
  /** 实例的标签 */
  TagSpecification: PrometheusTag[];
  /** 实例的可用区 */
  Zone: string;
  /** 计费模式（1:包年包月） */
  InstanceChargeType: number;
  /** VPC 名称 */
  VpcName: string;
  /** 子网名称 */
  SubnetName: string;
  /** 地域 ID */
  RegionId: number;
  /** 可访问此实例的完整 URL */
  RootUrl: string;
  /** 是否开启 SSO */
  EnableSSO: boolean;
  /** 版本号 */
  Version: string;
  /** SSO登录时是否开启cam鉴权 */
  EnableSSOCamCheck: boolean;
}

/** Grafana 集成实例配置 */
declare interface GrafanaIntegrationConfig {
  /** 集成 ID */
  IntegrationId: string;
  /** 集成类型 */
  Kind: string;
  /** 集成内容 */
  Content: string;
  /** 集成描述 */
  Description: string;
  /** Grafana 跳转地址 */
  GrafanaURL: string | null;
}

/** Grafana 告警渠道 */
declare interface GrafanaNotificationChannel {
  /** 渠道 ID */
  ChannelId: string;
  /** 渠道名 */
  ChannelName: string;
  /** 告警通道模板 ID 数组 */
  Receivers: string[];
  /** 创建时间 */
  CreatedAt: string;
  /** 更新时间 */
  UpdatedAt: string;
  /** 默认生效组织，已废弃，请使用 OrganizationIds */
  OrgId: string;
  /** 额外生效组织，已废弃，请使用 OrganizationIds */
  ExtraOrgIds: string[] | null;
  /** 生效组织，已废弃，请使用 OrganizationIds */
  OrgIds: string[] | null;
  /** 告警渠道的所有生效组织 */
  OrganizationIds: string[] | null;
}

/** Grafana 插件 */
declare interface GrafanaPlugin {
  /** Grafana 插件 ID */
  PluginId: string;
  /** Grafana 插件版本 */
  Version: string | null;
}

/** 实例维度组合数组 */
declare interface Instance {
  /** 实例的维度组合 */
  Dimensions: Dimension[];
}

/** DescribeBasicAlarmList返回的Alarms里的InstanceGroup */
declare interface InstanceGroup {
  /** 实例组ID */
  InstanceGroupId: number | null;
  /** 实例组名 */
  InstanceGroupName: string | null;
}

/** 告警对象所属实例组 */
declare interface InstanceGroups {
  /** 实例组 Id */
  Id: number;
  /** 实例组名称 */
  Name: string;
}

/** export 集成配置 */
declare interface IntegrationConfiguration {
  /** 名字 */
  Name: string;
  /** 类型 */
  Kind: string;
  /** 内容 */
  Content: string;
  /** 状态 */
  Status: number;
  /** 实例类型 */
  Category: string;
  /** 实例描述 */
  InstanceDesc: string;
  /** dashboard 的 URL */
  GrafanaDashboardURL: string;
}

/** k8s中标签，一般以数组的方式存在 */
declare interface Label {
  /** map表中的Name */
  Name: string;
  /** map表中的Value */
  Value: string;
}

/** 日志告警请求信息 */
declare interface LogAlarmReq {
  /** apm实例id */
  InstanceId: string;
  /** 检索条件信息 */
  Filter: LogFilterInfo[];
  /** 告警合并开启/暂停 */
  AlarmMerge: string;
  /** 告警合并时间 */
  AlarmMergeTime: string;
}

/** 日志告警检索条件结构体 */
declare interface LogFilterInfo {
  /** 字段名 */
  Key: string;
  /** 比较符号 */
  Operator: string;
  /** 字段值 */
  Value: string;
}

/** Prometheus Agent 管理命令行 */
declare interface ManagementCommand {
  /** Agent 安装命令 */
  Install: string | null;
  /** Agent 重启命令 */
  Restart: string | null;
  /** Agent 停止命令 */
  Stop: string | null;
  /** Agent 状态检测命令 */
  StatusCheck: string | null;
  /** Agent 日志检测命令 */
  LogCheck: string | null;
}

/** 指标，可用于设置告警、查询数据 */
declare interface Metric {
  /** 告警策略类型 */
  Namespace: string;
  /** 指标名 */
  MetricName: string;
  /** 指标展示名 */
  Description: string;
  /** 最小值 */
  Min: number;
  /** 最大值 */
  Max: number;
  /** 维度列表 */
  Dimensions: string[];
  /** 单位 */
  Unit: string;
  /** 指标配置 */
  MetricConfig: MetricConfig | null;
  /** 是否为高级指标。1是 0否 */
  IsAdvanced: number | null;
  /** 高级指标是否开通。1是 0否 */
  IsOpen: number | null;
  /** 集成中心产品ID */
  ProductId: number | null;
}

/** 指标配置 */
declare interface MetricConfig {
  /** 允许使用的运算符 */
  Operator: string[];
  /** 允许配置的数据周期，以秒为单位 */
  Period: number[];
  /** 允许配置的持续周期个数 */
  ContinuePeriod: number[];
}

/** DescribeMetricData接口出参 */
declare interface MetricData {
  /** 指标名 */
  MetricName: string;
  /** 监控数据点 */
  Points: MetricDataPoint[];
}

/** DescribeMetricData出参 */
declare interface MetricDataPoint {
  /** 实例对象维度组合 */
  Dimensions: Dimension[];
  /** 数据点列表 */
  Values: Point[];
}

/** 指标名称和值的封装 */
declare interface MetricDatum {
  /** 指标名称 */
  MetricName: string;
  /** 指标的值 */
  Value: number;
}

/** 指标数据的解释 */
declare interface MetricObjectMeaning {
  /** 指标英文解释 */
  En: string;
  /** 指标中文解释 */
  Zh: string;
}

/** 对业务指标的单位及支持统计周期的描述 */
declare interface MetricSet {
  /** 命名空间，每个云产品会有一个命名空间 */
  Namespace: string;
  /** 指标名称 */
  MetricName: string;
  /** 指标使用的单位 */
  Unit: string;
  /** 指标使用的单位 */
  UnitCname: string;
  /** 指标支持的统计周期，单位是秒，如60、300 */
  Period: number[];
  /** 统计周期内指标方式 */
  Periods: PeriodsSt[];
  /** 统计指标含义解释 */
  Meaning: MetricObjectMeaning;
  /** 维度描述信息 */
  Dimensions: DimensionsDesc[];
  /** 指标中文名 */
  MetricCName: string | null;
  /** 指标英文名 */
  MetricEName: string | null;
}

/** DescribeMidDimensionValueList的查询条件 */
declare interface MidQueryCondition {
  /** 维度 */
  Key: string;
  /** 操作符，支持等于(eq)、不等于(ne)，以及in */
  Operator: string;
  /** 维度值，当Op是eq、ne时，只使用第一个元素 */
  Value: string[];
}

/** 修改告警策略组传入的指标阈值条件 */
declare interface ModifyPolicyGroupCondition {
  /** 指标id */
  MetricId: number;
  /** 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等 */
  CalcType: number;
  /** 检测阈值 */
  CalcValue: string;
  /** 检测指标的数据周期 */
  CalcPeriod: number;
  /** 持续周期个数 */
  ContinuePeriod: number;
  /** 告警发送收敛类型。0连续告警，1指数告警 */
  AlarmNotifyType: number;
  /** 告警发送周期单位秒。0 每隔triggerTime秒触发一次 */
  AlarmNotifyPeriod: number;
  /** 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改 */
  RuleId?: number;
}

/** 修改告警策略组传入的事件告警条件 */
declare interface ModifyPolicyGroupEventCondition {
  /** 事件id */
  EventId: number;
  /** 告警发送收敛类型。0连续告警，1指数告警 */
  AlarmNotifyType: number;
  /** 告警发送周期单位秒。0 每隔triggerTime秒触发一次 */
  AlarmNotifyPeriod: number;
  /** 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改 */
  RuleId?: number;
}

/** 监控类型详细信息 */
declare interface MonitorTypeInfo {
  /** 监控类型ID */
  Id: string;
  /** 监控类型 */
  Name: string;
  /** 排列顺序 */
  SortId: number;
}

/** 策略类型 */
declare interface MonitorTypeNamespace {
  /** 监控类型 */
  MonitorType: string;
  /** 策略类型值 */
  Namespace: string;
}

/** 通知模板与策略绑定关系 */
declare interface NoticeBindPolicys {
  /** 告警通知模板 ID */
  NoticeId?: string;
  /** 告警通知模板绑定的告警策略ID列表 */
  PolicyIds?: string[];
}

/** 维度支持的操作符信息 */
declare interface Operator {
  /** 运算符标识 */
  Id: string;
  /** 运算符展示名 */
  Name: string;
}

/** 周期内的统计方式 */
declare interface PeriodsSt {
  /** 周期 */
  Period: string;
  /** 统计方式 */
  StatType: string[];
}

/** 监控数据点 */
declare interface Point {
  /** 该监控数据点生成的时间点 */
  Timestamp: number;
  /** 监控数据点的值 */
  Value: number | null;
}

/** 策略组信息 */
declare interface PolicyGroup {
  /** 是否可设为默认告警策略 */
  CanSetDefault: boolean;
  /** 告警策略组ID */
  GroupID: number;
  /** 告警策略组名称 */
  GroupName: string;
  /** 创建时间 */
  InsertTime: number;
  /** 是否为默认告警策略 */
  IsDefault: number;
  /** 告警策略启用状态 */
  Enable: boolean;
  /** 最后修改人UIN */
  LastEditUin: number;
  /** 未屏蔽的实例数 */
  NoShieldedInstanceCount: number;
  /** 父策略组ID */
  ParentGroupID: number;
  /** 所属项目ID */
  ProjectID: number;
  /** 告警接收对象信息 */
  ReceiverInfos: PolicyGroupReceiverInfo[] | null;
  /** 备注信息 */
  Remark: string;
  /** 修改时间 */
  UpdateTime: number;
  /** 总绑定实例数 */
  TotalInstanceCount: number;
  /** 视图 */
  ViewName: string;
  /** 是否为与关系规则 */
  IsUnionRule: number;
}

/** 2018版策略模板列表接收人信息 */
declare interface PolicyGroupReceiverInfo {
  /** 有效时段结束时间 */
  EndTime: number;
  /** 是否需要发送通知 */
  NeedSendNotice: number;
  /** 告警接收渠道 */
  NotifyWay: string[] | null;
  /** 电话告警对个人间隔（秒） */
  PersonInterval: number;
  /** 消息接收组列表 */
  ReceiverGroupList: number[] | null;
  /** 接受者类型 */
  ReceiverType: string;
  /** 接收人列表。通过平台接口查询到的接收人id列表 */
  ReceiverUserList: number[] | null;
  /** 告警恢复通知方式 */
  RecoverNotify: string[] | null;
  /** 电话告警每轮间隔（秒） */
  RoundInterval: number;
  /** 电话告警轮数 */
  RoundNumber: number;
  /** 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知) */
  SendFor: string[] | null;
  /** 有效时段开始时间 */
  StartTime: number;
  /** 电话告警接收者uid */
  UIDList: number[] | null;
}

/** 策略标签 */
declare interface PolicyTag {
  /** 标签Key */
  Key: string;
  /** 标签Value */
  Value: string;
}

/** 云监控支持的产品简要信息 */
declare interface ProductSimple {
  /** 命名空间 */
  Namespace: string;
  /** 产品中文名称 */
  ProductName: string;
  /** 产品英文名称 */
  ProductEnName: string | null;
}

/** prometheus agent */
declare interface PrometheusAgent {
  /** Agent 名 */
  Name: string | null;
  /** Agent ID */
  AgentId: string;
  /** 实例 ID */
  InstanceId: string;
  /** Agent IP */
  Ipv4: string | null;
  /** 心跳时间 */
  HeartbeatTime: string | null;
  /** 最近一次错误 */
  LastError: string | null;
  /** Agent 版本 */
  AgentVersion: string | null;
  /** Agent 状态 */
  Status: number;
}

/** 托管Prometheus agent信息 */
declare interface PrometheusAgentInfo {
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** 备注 */
  Describe?: string;
}

/** 托管prometheus agent概览 */
declare interface PrometheusAgentOverview {
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** agent状态normal = 正常abnormal = 异常 */
  Status: string;
  /** 集群名称 */
  ClusterName: string;
  /** 额外labels本集群的所有指标都会带上这几个label */
  ExternalLabels: Label[] | null;
  /** 集群所在地域 */
  Region: string | null;
  /** 集群所在VPC ID */
  VpcId: string | null;
  /** 记录关联等操作的失败信息 */
  FailedReason: string | null;
  /** agent名称 */
  Name?: string | null;
}

/** 告警渠道使用自建alertmanager的配置 */
declare interface PrometheusAlertManagerConfig {
  /** alertmanager url */
  Url: string;
  /** alertmanager部署所在集群类型 */
  ClusterType?: string | null;
  /** alertmanager部署所在集群ID */
  ClusterId?: string | null;
}

/** 托管prometheus告警策略实例 */
declare interface PrometheusAlertPolicyItem {
  /** 策略名称 */
  Name: string;
  /** 规则列表 */
  Rules: PrometheusAlertRule[];
  /** 告警策略 id */
  Id?: string | null;
  /** 如果该告警来自模板下发，则TemplateId为模板id */
  TemplateId?: string | null;
  /** 告警渠道，模板中使用可能返回null */
  Notification?: PrometheusNotificationItem | null;
  /** 最后修改时间 */
  UpdatedAt?: string | null;
  /** 如果告警策略来源于用户集群CRD资源定义，则ClusterId为所属集群ID */
  ClusterId?: string | null;
}

/** Prometheus告警规则 */
declare interface PrometheusAlertRule {
  /** 规则名称 */
  Name: string;
  /** prometheus语句 */
  Rule: string;
  /** 额外标签 */
  Labels: Label[];
  /** 告警发送模板 */
  Template: string;
  /** 持续时间 */
  For: string;
  /** 该条规则的描述信息 */
  Describe?: string | null;
  /** 参考prometheus rule中的annotations */
  Annotations?: Label[] | null;
  /** 告警规则状态 */
  RuleState?: number | null;
}

/** 与云监控融合托管prometheus实例，关联集群基础信息 */
declare interface PrometheusClusterAgentBasic {
  /** 集群ID */
  Region: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群ID */
  ClusterId: string;
  /** 是否开启公网CLB */
  EnableExternal: boolean;
  /** 集群内部署组件的pod配置 */
  InClusterPodConfig?: PrometheusClusterAgentPodConfig;
  /** 该集群采集的所有指标都会带上这些labels */
  ExternalLabels?: Label[];
  /** 是否安装默认采集配置 */
  NotInstallBasicScrape?: boolean;
  /** 是否采集指标，true代表drop所有指标，false代表采集默认指标 */
  NotScrape?: boolean;
  /** 是否开启默认预聚合规则 */
  OpenDefaultRecord?: boolean | null;
}

/** 关联集群时在集群内部署组件的pod额外配置 */
declare interface PrometheusClusterAgentPodConfig {
  /** 是否使用HostNetWork */
  HostNet?: boolean;
  /** 指定pod运行节点 */
  NodeSelector?: Label[];
  /** 容忍污点 */
  Tolerations?: Toleration[];
}

/** prometheus配置 */
declare interface PrometheusConfigItem {
  /** 名称 */
  Name: string;
  /** 配置内容 */
  Config: string;
  /** 用于出参，如果该配置来至模板，则为模板id */
  TemplateId?: string | null;
}

/** 实例的授权信息 */
declare interface PrometheusInstanceGrantInfo {
  /** 是否有计费操作权限(1=有，2=无) */
  HasChargeOperation: number;
  /** 是否显示VPC信息的权限(1=有，2=无) */
  HasVpcDisplay: number;
  /** 是否可修改Grafana的状态(1=有，2=无) */
  HasGrafanaStatusChange: number;
  /** 是否有管理agent的权限(1=有，2=无) */
  HasAgentManage: number;
  /** 是否有管理TKE集成的权限(1=有，2=无) */
  HasTkeManage: number;
  /** 是否显示API等信息(1=有, 2=无) */
  HasApiOperation: number;
}

/** Prometheus用量信息 */
declare interface PrometheusInstanceTenantUsage {
  /** 实例ID */
  InstanceId: string | null;
  /** 计费周期 */
  CalcDate: string | null;
  /** 总用量 */
  Total: number | null;
  /** 基础指标用量 */
  Basic: number | null;
  /** 付费指标用量 */
  Fee: number | null;
}

/** Prometheus 服务响应体 */
declare interface PrometheusInstancesItem {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 实例计费模式。取值范围：2：包年包月3：按量 */
  InstanceChargeType: number;
  /** 地域 ID */
  RegionId: number;
  /** 可用区 */
  Zone: string;
  /** VPC ID */
  VpcId: string;
  /** 子网 ID */
  SubnetId: string;
  /** 存储周期 */
  DataRetentionTime: number | null;
  /** 实例业务状态。取值范围：1：正在创建2：运行中3：异常4：重建中5：销毁中6：已停服8：欠费停服中9：欠费已停服 */
  InstanceStatus: number;
  /** Grafana 面板 URL */
  GrafanaURL: string | null;
  /** 创建时间 */
  CreatedAt: string;
  /** 是否开启 Grafana0：不开启1：开启 */
  EnableGrafana: number;
  /** 实例IPV4地址 */
  IPv4Address: string | null;
  /** 实例关联的标签列表。 */
  TagSpecification: PrometheusTag[] | null;
  /** 购买的实例过期时间 */
  ExpireTime: string | null;
  /** 计费状态1：正常2：过期3：销毁4：分配中5：分配失败 */
  ChargeStatus: number | null;
  /** 规格名称 */
  SpecName: string | null;
  /** 自动续费标记0：不自动续费1：开启自动续费2：禁止自动续费-1：无效 */
  AutoRenewFlag: number | null;
  /** 是否快过期0：否1：快过期 */
  IsNearExpire: number | null;
  /** 数据写入需要的 Token */
  AuthToken: string | null;
  /** Prometheus Remote Write 的地址 */
  RemoteWrite: string | null;
  /** Prometheus HTTP Api 根地址 */
  ApiRootPath: string | null;
  /** Proxy 的地址 */
  ProxyAddress: string | null;
  /** Grafana 运行状态1：正在创建2：运行中3：异常4：重启中5：销毁中6：已停机7：已删除 */
  GrafanaStatus: number | null;
  /** Grafana IP 白名单列表，使用英文分号分隔 */
  GrafanaIpWhiteList: string | null;
  /** 实例的授权信息 */
  Grant: PrometheusInstanceGrantInfo | null;
  /** 绑定的 Grafana 实例 ID */
  GrafanaInstanceId: string | null;
  /** 告警规则限制 */
  AlertRuleLimit: number | null;
  /** 预聚合规则限制 */
  RecordingRuleLimit: number | null;
  /** 迁移状态，0-不在迁移中，1-迁移中、原实例，2-迁移中、目标实例 */
  MigrationType: number | null;
}

/** 托管prometheusV2实例概览 */
declare interface PrometheusInstancesOverview {
  /** 实例ID */
  InstanceId: string;
  /** 实例名 */
  InstanceName: string;
  /** VPC ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:销毁中； 6:已停机； 7: 已删除） */
  InstanceStatus: number;
  /** 计费状态（1:正常；2:过期; 3:销毁; 4:分配中; 5:分配失败） */
  ChargeStatus: number | null;
  /** 是否开启 Grafana（0:不开启，1:开启） */
  EnableGrafana: number;
  /** Grafana 面板 URL */
  GrafanaURL: string | null;
  /** 实例付费类型（1:试用版；2:预付费） */
  InstanceChargeType: number;
  /** 规格名称 */
  SpecName: string | null;
  /** 存储周期 */
  DataRetentionTime: number | null;
  /** 购买的实例过期时间 */
  ExpireTime: string | null;
  /** 自动续费标记(0:不自动续费；1:开启自动续费；2:禁止自动续费；-1:无效) */
  AutoRenewFlag: number | null;
  /** 绑定集群总数 */
  BoundTotal: number;
  /** 绑定集群正常状态总数 */
  BoundNormal: number;
}

/** prometheus一个job的targets */
declare interface PrometheusJobTargets {
}

/** 告警通知渠道配置 */
declare interface PrometheusNotificationItem {
  /** 是否启用 */
  Enabled: boolean;
  /** 通道类型，默认为amp，支持以下ampwebhookalertmanager */
  Type: string;
  /** 如果Type为webhook, 则该字段为必填项 */
  WebHook?: string | null;
  /** 如果Type为alertmanager, 则该字段为必填项 */
  AlertManager?: PrometheusAlertManagerConfig | null;
  /** 收敛时间 */
  RepeatInterval?: string;
  /** 生效起始时间 */
  TimeRangeStart?: string;
  /** 生效结束时间 */
  TimeRangeEnd?: string;
  /** 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。 */
  NotifyWay?: string[] | null;
  /** 告警接收组（用户组） */
  ReceiverGroups?: string[] | null;
  /** 电话告警顺序。注：NotifyWay选择CALL，采用该参数。 */
  PhoneNotifyOrder?: number[] | null;
  /** 电话告警次数。注：NotifyWay选择CALL，采用该参数。 */
  PhoneCircleTimes?: number | null;
  /** 电话告警轮内间隔。单位：秒注：NotifyWay选择CALL，采用该参数。 */
  PhoneInnerInterval?: number | null;
  /** 电话告警轮外间隔。单位：秒注：NotifyWay选择CALL，采用该参数。 */
  PhoneCircleInterval?: number | null;
  /** 电话告警触达通知注：NotifyWay选择CALL，采用该参数。 */
  PhoneArriveNotice?: boolean | null;
}

/** prometheus聚合规则实例详情，包含所属集群ID */
declare interface PrometheusRecordRuleYamlItem {
  /** 实例名称 */
  Name: string;
  /** 最近更新时间 */
  UpdateTime: string;
  /** Yaml内容 */
  TemplateId: string;
  /** 如果该聚合规则来至模板，则TemplateId为模板id */
  Content: string | null;
  /** 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID */
  ClusterId: string | null;
}

/** prometheus 报警规则 KV 参数 */
declare interface PrometheusRuleKV {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** prometheus 报警规则集 */
declare interface PrometheusRuleSet {
  /** 规则 ID */
  RuleId: string;
  /** 规则名称 */
  RuleName: string;
  /** 规则状态码 */
  RuleState: number;
  /** 规则类别 */
  Type: string | null;
  /** 规则标签列表 */
  Labels: PrometheusRuleKV[] | null;
  /** 规则注释列表 */
  Annotations: PrometheusRuleKV[] | null;
  /** 规则表达式 */
  Expr: string | null;
  /** 规则报警持续时间 */
  Duration: string | null;
  /** 报警接收组列表 */
  Receivers: string[] | null;
  /** 规则运行健康状态，取值如下：unknown 未知状态pending 加载中ok 运行正常err 运行错误 */
  Health: string;
  /** 规则创建时间 */
  CreatedAt: string | null;
  /** 规则更新时间 */
  UpdatedAt: string | null;
}

/** Prometheus 抓取任务 */
declare interface PrometheusScrapeJob {
  /** 任务名 */
  Name: string | null;
  /** Agent ID */
  AgentId: string;
  /** 任务 ID */
  JobId: string;
  /** 配置 */
  Config: string | null;
}

/** Prometheus 托管服务标签 */
declare interface PrometheusTag {
  /** 标签的健值 */
  Key: string;
  /** 标签对应的值 */
  Value: string | null;
}

/** 模板实例 */
declare interface PrometheusTemp {
  /** 模板名称 */
  Name: string;
  /** 模板维度，支持以下类型instance 实例级别cluster 集群级别 */
  Level: string;
  /** 模板描述 */
  Describe?: string | null;
  /** 当Level为instance时有效，模板中的聚合规则列表 */
  RecordRules?: PrometheusConfigItem[] | null;
  /** 当Level为cluster时有效，模板中的ServiceMonitor规则列表 */
  ServiceMonitors?: PrometheusConfigItem[] | null;
  /** 当Level为cluster时有效，模板中的PodMonitors规则列表 */
  PodMonitors?: PrometheusConfigItem[] | null;
  /** 当Level为cluster时有效，模板中的RawJobs规则列表 */
  RawJobs?: PrometheusConfigItem[] | null;
  /** 模板的ID, 用于出参 */
  TemplateId?: string | null;
  /** 最近更新时间，用于出参 */
  UpdateTime?: string | null;
  /** 当前版本，用于出参 */
  Version?: string | null;
  /** 是否系统提供的默认模板，用于出参 */
  IsDefault?: boolean | null;
  /** 当Level为instance时有效，模板中的告警配置列表 */
  AlertDetailRules?: PrometheusAlertPolicyItem[] | null;
  /** 关联实例数目 */
  TargetsTotal?: number | null;
}

/** 云原生Prometheus模板可修改项 */
declare interface PrometheusTempModify {
  /** 修改名称 */
  Name?: string;
  /** 修改描述 */
  Describe?: string | null;
  /** 当Level为cluster时有效，模板中的ServiceMonitor规则列表 */
  ServiceMonitors?: PrometheusConfigItem[] | null;
  /** 当Level为cluster时有效，模板中的PodMonitors规则列表 */
  PodMonitors?: PrometheusConfigItem[] | null;
  /** 当Level为cluster时有效，模板中的RawJobs规则列表 */
  RawJobs?: PrometheusConfigItem[] | null;
  /** 当Level为instance时有效，模板中的聚合规则列表 */
  RecordRules?: PrometheusConfigItem[] | null;
  /** 修改内容，只有当模板类型是Alert时生效 */
  AlertDetailRules?: PrometheusAlertPolicyItem[] | null;
}

/** 云原生Prometheus模板同步目标 */
declare interface PrometheusTemplateSyncTarget {
  /** 目标所在地域 */
  Region: string;
  /** 目标实例 */
  InstanceId: string;
  /** 集群id，只有当采集模板的Level为cluster的时候需要 */
  ClusterId?: string | null;
  /** 最后一次同步时间， 用于出参 */
  SyncTime?: string | null;
  /** 当前使用的模板版本，用于出参 */
  Version?: string | null;
  /** 集群类型，只有当采集模板的Level为cluster的时候需要 */
  ClusterType?: string | null;
  /** 用于出参，实例名称 */
  InstanceName?: string | null;
  /** 用于出参，集群名称 */
  ClusterName?: string | null;
}

/** PrometheusZoneItem 响应结构体内的地域信息 */
declare interface PrometheusZoneItem {
  /** 可用区 */
  Zone: string;
  /** 可用区 ID */
  ZoneId: number;
  /** 可用区状态( 0: 不可用；1: 可用) */
  ZoneState: number;
  /** 地域 ID */
  RegionId: number;
  /** 可用区名（目前为中文） */
  ZoneName: string;
}

/** 接收人信息 */
declare interface ReceiverInfo {
  /** 告警时间段开始时间。范围[0,86400)，作为 UNIX 时间戳转成北京时间后去掉日期，例如7200表示"10:0:0" */
  StartTime: number;
  /** 告警时间段结束时间。含义同StartTime */
  EndTime: number;
  /** 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT" */
  NotifyWay: string[];
  /** 接收人类型。“group” 或 “user” */
  ReceiverType: string;
  /** ReceiverId */
  Id?: number;
  /** 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知) */
  SendFor?: string[];
  /** 电话告警接收者 UID */
  UidList?: number[];
  /** 电话告警轮数 */
  RoundNumber?: number;
  /** 电话告警对个人间隔（秒） */
  PersonInterval?: number;
  /** 电话告警每轮间隔（秒） */
  RoundInterval?: number;
  /** 恢复通知方式。可选"SMS" */
  RecoverNotify?: string[];
  /** 是否需要电话告警触达提示。0不需要，1需要 */
  NeedSendNotice?: number;
  /** 接收组列表。通过平台接口查询到的接收组 ID 列表 */
  ReceiverGroupList?: number[];
  /** 接收人列表。通过平台接口查询到的接收人 ID 列表 */
  ReceiverUserList?: number[];
  /** 告警接收语言，枚举值（zh-CN，en-US） */
  ReceiveLanguage?: string;
}

/** Prometheus 聚合规则响应结构体内信息 */
declare interface RecordingRuleSet {
  /** 规则 ID */
  RuleId: string;
  /** 规则状态码 */
  RuleState: number;
  /** 分组名称 */
  Name: string;
  /** 规则内容组 */
  Group: string;
  /** 规则数量 */
  Total: number;
  /** 规则创建时间 */
  CreatedAt: string;
  /** 规则最近更新时间 */
  UpdatedAt: string;
  /** 规则名称 */
  RuleName: string | null;
}

/** Prometheus 服务发现信息 */
declare interface ServiceDiscoveryItem {
  /** 服务发现名称 */
  Name: string;
  /** 服务发现属于的 Namespace */
  Namespace: string;
  /** 服务发现类型: ServiceMonitor/PodMonitor */
  Kind: string;
  /** Namespace 选取方式 */
  NamespaceSelector: string | null;
  /** Label 选取方式 */
  Selector: string | null;
  /** Endpoints 信息（PodMonitor 不含该参数） */
  Endpoints: string;
  /** 服务发现对应的配置信息 */
  Yaml: string | null;
}

/** 标签 */
declare interface Tag {
  /** 标签key */
  Key: string;
  /** 标签value */
  Value: string;
}

/** 策略列表详情标签返回体 */
declare interface TagInstance {
  /** 标签Key */
  Key: string | null;
  /** 标签Value */
  Value: string | null;
  /** 实例个数 */
  InstanceSum: number | null;
  /** 产品类型，如：cvm */
  ServiceType: string | null;
  /** 地域ID */
  RegionId: number | null;
  /** 绑定状态，2：绑定成功，1：绑定中 */
  BindingStatus: number | null;
  /** 标签状态，2：标签存在，1：标签不存在 */
  TagStatus: number | null;
}

/** 任务步骤信息 */
declare interface TaskStepInfo {
  /** 步骤名称 */
  Step: string;
  /** 生命周期pending : 步骤未开始running: 步骤执行中success: 步骤成功完成failed: 步骤失败 */
  LifeState: string;
  /** 步骤开始时间 */
  StartAt: string | null;
  /** 步骤结束时间 */
  EndAt: string | null;
  /** 若步骤生命周期为failed,则此字段显示错误信息 */
  FailedMsg: string | null;
}

/** 模板列表 */
declare interface TemplateGroup {
  /** 指标告警规则 */
  Conditions: Condition[] | null;
  /** 事件告警规则 */
  EventConditions: EventCondition[] | null;
  /** 关联告警策略组 */
  PolicyGroups: PolicyGroup[] | null;
  /** 模板策略组ID */
  GroupID: number;
  /** 模板策略组名称 */
  GroupName: string;
  /** 创建时间 */
  InsertTime: number;
  /** 最后修改人UIN */
  LastEditUin: number;
  /** 备注 */
  Remark: string;
  /** 更新时间 */
  UpdateTime: number;
  /** 视图 */
  ViewName: string;
  /** 是否为与关系 */
  IsUnionRule: number;
}

/** kubernetes Taint */
declare interface Toleration {
  /** 容忍应用到的 taint key */
  Key?: string;
  /** 键与值的关系 */
  Operator?: string;
  /** 要匹配的污点效果 */
  Effect?: string;
}

/** 云监控告警通知模板 - 回调通知详情 */
declare interface URLNotice {
  /** 回调 url（限长256字符） */
  URL: string | null;
  /** 是否通过验证 0=否 1=是 */
  IsValid?: number | null;
  /** 验证码 */
  ValidationCode?: string | null;
  /** 通知开始时间 一天开始的秒数 */
  StartTime?: number | null;
  /** 通知结束时间 一天开始的秒数 */
  EndTime?: number | null;
  /** 通知周期 1-7表示周一到周日 */
  Weekday?: number[] | null;
}

/** 云监控告警通知模板 - 用户通知详情 */
declare interface UserNotice {
  /** 接收者类型 USER=用户 GROUP=用户组 */
  ReceiverType: string | null;
  /** 通知开始时间 00:00:00 开始的秒数（取值范围0-86399） */
  StartTime: number | null;
  /** 通知结束时间 00:00:00 开始的秒数（取值范围0-86399） */
  EndTime: number | null;
  /** 通知渠道列表 EMAIL=邮件 SMS=短信 CALL=电话 WECHAT=微信 RTX=企业微信 */
  NoticeWay: string[] | null;
  /** 用户 uid 列表 */
  UserIds?: number[] | null;
  /** 用户组 group id 列表 */
  GroupIds?: number[] | null;
  /** 电话轮询列表 */
  PhoneOrder?: number[] | null;
  /** 电话轮询次数 （取值范围1-5） */
  PhoneCircleTimes?: number | null;
  /** 单次轮询内拨打间隔 秒数 （取值范围60-900） */
  PhoneInnerInterval?: number | null;
  /** 两次轮询间隔 秒数（取值范围60-900） */
  PhoneCircleInterval?: number | null;
  /** 是否需要触达通知 0=否 1=是 */
  NeedPhoneArriveNotice?: number | null;
  /** 电话拨打类型 SYNC=同时拨打 CIRCLE=轮询拨打 不指定时默认是轮询 */
  PhoneCallType?: string | null;
  /** 通知周期 1-7表示周一到周日 */
  Weekday?: number[] | null;
}

declare interface BindPrometheusManagedGrafanaRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** Grafana 可视化服务实例 ID */
  GrafanaId: string;
}

declare interface BindPrometheusManagedGrafanaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindingPolicyObjectRequest {
  /** 必填。固定值"monitor" */
  Module: string;
  /** 策略组id，例如 4739573。逐渐弃用，建议使用 PolicyId 参数 */
  GroupId?: number;
  /** 告警策略ID，例如“policy-gh892hg0”。PolicyId 参数与 GroupId 参数至少要填一个，否则会报参数错误，建议使用该参数。若两者同时存在则以该参数为准 */
  PolicyId?: string;
  /** 实例分组ID */
  InstanceGroupId?: number;
  /** 需要绑定的对象维度信息 */
  Dimensions?: BindingPolicyObjectDimension[];
  /** 事件配置的告警 */
  EbSubject?: string;
  /** 是否配置了事件告警 */
  EbEventFlag?: number;
}

declare interface BindingPolicyObjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindingPolicyTagRequest {
  /** 固定取值 monitor */
  Module: string;
  /** 策略ID */
  PolicyId: string;
  /** 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID */
  GroupId: string;
  /** 产品类型 */
  ServiceType: string;
  /** 策略标签 */
  Tag?: PolicyTag;
  /** 实例分组ID */
  InstanceGroupId?: number;
  /** 批量绑定标签 */
  BatchTag?: PolicyTag[];
}

declare interface BindingPolicyTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckIsPrometheusNewUserRequest {
}

declare interface CheckIsPrometheusNewUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CleanGrafanaInstanceRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
}

declare interface CleanGrafanaInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlarmNoticeRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
  /** 通知模板名称 60字符以内 */
  Name: string;
  /** 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知 */
  NoticeType: string;
  /** 通知语言 zh-CN=中文 en-US=英文 */
  NoticeLanguage: string;
  /** 用户通知 最多5个 */
  UserNotices?: UserNotice[];
  /** 回调通知 最多3个 */
  URLNotices?: URLNotice[];
  /** 推送CLS日志服务的操作 最多1个 */
  CLSNotices?: CLSNotice[];
  /** 模板绑定的标签 */
  Tags?: Tag[];
}

declare interface CreateAlarmNoticeResponse {
  /** 告警通知模板ID */
  NoticeId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlarmPolicyRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略名称，不超过20字符 */
  PolicyName: string;
  /** 监控类型 MT_QCE=云产品监控 */
  MonitorType: string;
  /** 告警策略类型，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device */
  Namespace: string;
  /** 备注，不超过100字符，仅支持中英文、数字、下划线、- */
  Remark?: string;
  /** 是否启用 0=停用 1=启用，可不传 默认为1 */
  Enable?: number;
  /** 项目 Id，对于区分项目的产品必须传入非 -1 的值。 -1=无项目 0=默认项目，如不传 默认为 -1。支持的项目 Id 可以在控制台 [账号中心-项目管理](https://console.cloud.tencent.com/project) 中查看。 */
  ProjectId?: number;
  /** 触发条件模板 Id，该参数与 Condition 参数二选一。如果策略绑定触发条件模板，则传该参数；否则不传该参数，而是传 Condition 参数。触发条件模板 Id 可以从 [DescribeConditionsTemplateList](https://cloud.tencent.com/document/api/248/70250) 接口获取。 */
  ConditionTemplateId?: number;
  /** 指标触发条件，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。 */
  Condition?: AlarmPolicyCondition;
  /** 事件触发条件，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询。 */
  EventCondition?: AlarmPolicyEventCondition;
  /** 通知规则 Id 列表，由 [DescribeAlarmNotices](https://cloud.tencent.com/document/product/248/51280) 获得 */
  NoticeIds?: string[];
  /** 触发任务列表 */
  TriggerTasks?: AlarmPolicyTriggerTask[];
  /** 全局过滤条件 */
  Filter?: AlarmPolicyFilter;
  /** 聚合维度列表，指定按哪些维度 key 来做 group by */
  GroupBy?: string[];
  /** 模板绑定的标签 */
  Tags?: Tag[];
  /** 日志告警信息 */
  LogAlarmReqInfo?: LogAlarmReq;
  /** 告警分级通知规则配置 */
  HierarchicalNotices?: AlarmHierarchicalNotice[];
  /** 迁移策略专用字段，0-走鉴权逻辑，1-跳过鉴权逻辑 */
  MigrateFlag?: number;
  /** 事件配置的告警 */
  EbSubject?: string;
}

declare interface CreateAlarmPolicyResponse {
  /** 告警策略 ID */
  PolicyId?: string;
  /** 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID */
  OriginId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlertRuleRequest {
  /** Prometheus 实例 ID，例如：prom-abcd1234 */
  InstanceId: string;
  /** 规则名称 */
  RuleName: string;
  /** 规则表达式，可参考告警规则说明 */
  Expr: string;
  /** 告警通知模板 ID 列表 */
  Receivers: string[];
  /** 规则状态码，取值如下：2=RuleEnabled3=RuleDisabled */
  RuleState?: number;
  /** 规则报警持续时间 */
  Duration?: string;
  /** 标签列表 */
  Labels?: PrometheusRuleKV[];
  /** 注释列表。告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。 */
  Annotations?: PrometheusRuleKV[];
  /** 报警策略模板分类 */
  Type?: string;
}

declare interface CreateAlertRuleResponse {
  /** 规则 ID */
  RuleId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExporterIntegrationRequest {
  /** 实例 ID */
  InstanceId: string;
  /** 类型 */
  Kind: string;
  /** 集成配置 */
  Content: string;
  /** Kubernetes 集群类型，取值如下： 1= 容器集群(TKE) 2=弹性集群 3= Prometheus管理的弹性集群 */
  KubeType?: number;
  /** 集群 ID */
  ClusterId?: string;
}

declare interface CreateExporterIntegrationResponse {
  /** 返回创建成功的集成名称列表 */
  Names: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGrafanaInstanceRequest {
  /** 实例名 */
  InstanceName: string;
  /** VPC ID */
  VpcId: string;
  /** 子网 ID 数组 */
  SubnetIds: string[];
  /** 是否启用外网 */
  EnableInternet: boolean;
  /** Grafana 初始密码 */
  GrafanaInitPassword?: string;
  /** 标签 */
  TagSpecification?: PrometheusTag[];
}

declare interface CreateGrafanaInstanceResponse {
  /** 实例名 */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGrafanaIntegrationRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 集成类型，可在实例详情-云产品集成-集成列表查看。例如：tencent-cloud-prometheus */
  Kind: string;
  /** 集成配置 */
  Content: string;
}

declare interface CreateGrafanaIntegrationResponse {
  /** 集成 ID */
  IntegrationId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGrafanaNotificationChannelRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 告警通道名称，例如：test */
  ChannelName: string;
  /** 默认为1，已废弃，请使用 OrganizationIds */
  OrgId: number;
  /** 接受告警通道 ID 数组 */
  Receivers: string[];
  /** 额外组织 ID 数组，已废弃，请使用 OrganizationIds */
  ExtraOrgIds?: string[];
  /** 生效的所有组织 ID 数组，默认为 ["1"] */
  OrganizationIds?: string[];
}

declare interface CreateGrafanaNotificationChannelResponse {
  /** 通道 ID */
  ChannelId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePolicyGroupRequest {
  /** 组策略名称 */
  GroupName: string;
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略组所属视图的名称，若通过模板创建，可不传入 */
  ViewName?: string;
  /** 策略组所属项目Id，会进行鉴权操作 */
  ProjectId?: number;
  /** 模板策略组Id, 通过模板创建时才需要传 */
  ConditionTempGroupId?: number;
  /** 是否屏蔽策略组，0表示不屏蔽，1表示屏蔽。不填默认为0 */
  IsShielded?: number;
  /** 策略组的备注信息 */
  Remark?: string;
  /** 插入时间，戳格式为Unix时间戳，不填则按后台处理时间填充 */
  InsertTime?: number;
  /** 策略组中的阈值告警规则 */
  Conditions?: CreatePolicyGroupCondition[];
  /** 策略组中的事件告警规则 */
  EventConditions?: CreatePolicyGroupEventCondition[];
  /** 是否为后端调用。当且仅当值为1时，后台拉取策略模板中的规则填充入Conditions以及EventConditions字段 */
  BackEndCall?: number;
  /** 指标告警规则的且或关系，0表示或规则(满足任意规则就告警)，1表示且规则(满足所有规则才告警) */
  IsUnionRule?: number;
}

declare interface CreatePolicyGroupResponse {
  /** 创建成功的策略组Id */
  GroupId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusAgentRequest {
  /** 实例 ID */
  InstanceId: string;
  /** Agent 名称 */
  Name: string;
}

declare interface CreatePrometheusAgentResponse {
  /** 创建成功的 Agent Id */
  AgentId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警配置 */
  AlertRule: PrometheusAlertPolicyItem;
}

declare interface CreatePrometheusAlertPolicyResponse {
  /** 告警id */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusClusterAgentRequest {
  /** 实例ID */
  InstanceId: string;
  /** agent列表 */
  Agents: PrometheusClusterAgentBasic[];
}

declare interface CreatePrometheusClusterAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusConfigRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** ServiceMonitors配置 */
  ServiceMonitors?: PrometheusConfigItem[];
  /** PodMonitors配置 */
  PodMonitors?: PrometheusConfigItem[];
  /** prometheus原生Job配置 */
  RawJobs?: PrometheusConfigItem[];
}

declare interface CreatePrometheusConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusGlobalNotificationRequest {
  /** 实例ID */
  InstanceId: string;
  /** 告警通知渠道 */
  Notification: PrometheusNotificationItem;
}

declare interface CreatePrometheusGlobalNotificationResponse {
  /** 全局告警通知渠道ID */
  Id?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusMultiTenantInstancePostPayModeRequest {
  /** 实例名 */
  InstanceName: string;
  /** VPC ID */
  VpcId: string;
  /** 子网 ID */
  SubnetId: string;
  /** 数据存储时间（单位天），限制值为15，30，45之一 */
  DataRetentionTime: number;
  /** 可用区 */
  Zone: string;
  /** 实例的标签 */
  TagSpecification?: PrometheusTag[];
  /** 需要关联的 Grafana 实例 */
  GrafanaInstanceId?: string;
}

declare interface CreatePrometheusMultiTenantInstancePostPayModeResponse {
  /** 实例 ID */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusRecordRuleYamlRequest {
  /** 实例id */
  InstanceId: string;
  /** yaml的内容 */
  Content: string;
  /** 规则名称 */
  Name?: string;
}

declare interface CreatePrometheusRecordRuleYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusScrapeJobRequest {
  /** Prometheus 实例 ID，例如：prom-abcd1234 */
  InstanceId: string;
  /** Agent ID，例如：agent-abcd1234，可在控制台 Agent 管理中获取 */
  AgentId: string;
  /** 抓取任务配置，格式：job_name:xx */
  Config?: string;
}

declare interface CreatePrometheusScrapeJobResponse {
  /** 成功创建抓取任务 Id */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusTempRequest {
  /** 模板设置 */
  Template: PrometheusTemp;
}

declare interface CreatePrometheusTempResponse {
  /** 模板Id */
  TemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRecordingRuleRequest {
  /** 聚合规则名称 */
  Name: string;
  /** 聚合规则组内容，格式为 yaml */
  Group: string;
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 规则状态码，取值如下：1=RuleDeleted2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
  RuleState?: number;
}

declare interface CreateRecordingRuleResponse {
  /** 规则 ID */
  RuleId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSSOAccountRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 用户账号 ID ，例如：10000000 */
  UserId: string;
  /** 权限 */
  Role: GrafanaAccountRole[];
  /** 备注 */
  Notes?: string;
}

declare interface CreateSSOAccountResponse {
  /** 已添加的用户 UIN */
  UserId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServiceDiscoveryRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 类型为TKE：对应集成的腾讯云容器服务集群 ID */
  KubeClusterId: string;
  /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
  KubeType: number;
  /** 服务发现类型，取值如下： 1 = ServiceMonitor 2 = PodMonitor 3 = JobMonitor */
  Type: number;
  /** 服务发现配置信息 */
  Yaml: string;
}

declare interface CreateServiceDiscoveryResponse {
  /** 创建成功之后，返回对应服务发现信息 */
  ServiceDiscovery?: ServiceDiscoveryItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAlarmNoticesRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
  /** 告警通知模板id列表 */
  NoticeIds: string[];
  /** 通知模板与策略绑定关系 */
  NoticeBindPolicys?: NoticeBindPolicys[];
}

declare interface DeleteAlarmNoticesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAlarmPolicyRequest {
  /** 模块名，固定值 monitor */
  Module: string;
  /** 告警策略 ID 列表 */
  PolicyIds: string[];
}

declare interface DeleteAlarmPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAlertRulesRequest {
  /** 规则 ID 列表 */
  RuleIds: string[];
  /** Prometheus 实例 ID */
  InstanceId: string;
}

declare interface DeleteAlertRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteExporterIntegrationRequest {
  /** 实例 ID */
  InstanceId: string;
  /** 类型 */
  Kind: string;
  /** 名字 */
  Name: string;
  /** Kubernetes 集群类型，取值如下： 1= 容器集群(TKE) 2=弹性集群 3= Prometheus管理的弹性集群 */
  KubeType?: number;
  /** 集群 ID */
  ClusterId?: string;
}

declare interface DeleteExporterIntegrationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGrafanaInstanceRequest {
  /** 实例名数组 */
  InstanceIDs: string[];
}

declare interface DeleteGrafanaInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGrafanaIntegrationRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234 */
  IntegrationId: string;
}

declare interface DeleteGrafanaIntegrationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGrafanaNotificationChannelRequest {
  /** 通道 ID 数组。例如：nchannel-abcd1234 */
  ChannelIDs: string[];
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
}

declare interface DeleteGrafanaNotificationChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePolicyGroupRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略组id */
  GroupId: number[];
}

declare interface DeletePolicyGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警策略id列表 */
  AlertIds: string[];
  /** 告警策略名称 */
  Names?: string[];
}

declare interface DeletePrometheusAlertPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusClusterAgentRequest {
  /** agent列表 */
  Agents: PrometheusAgentInfo[];
  /** 实例id */
  InstanceId: string;
}

declare interface DeletePrometheusClusterAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusConfigRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** 要删除的ServiceMonitor名字列表 */
  ServiceMonitors?: string[];
  /** 要删除的PodMonitor名字列表 */
  PodMonitors?: string[];
  /** 要删除的RawJobs名字列表 */
  RawJobs?: string[];
}

declare interface DeletePrometheusConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusRecordRuleYamlRequest {
  /** 实例id */
  InstanceId: string;
  /** 聚合规则列表 */
  Names: string[];
}

declare interface DeletePrometheusRecordRuleYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusScrapeJobsRequest {
  /** 实例 ID */
  InstanceId: string;
  /** Agent ID */
  AgentId: string;
  /** 任务 ID 列表 */
  JobIds: string[];
}

declare interface DeletePrometheusScrapeJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusTempRequest {
  /** 模板id */
  TemplateId: string;
}

declare interface DeletePrometheusTempResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusTempSyncRequest {
  /** 模板id */
  TemplateId: string;
  /** 取消同步的对象列表 */
  Targets: PrometheusTemplateSyncTarget[];
}

declare interface DeletePrometheusTempSyncResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordingRulesRequest {
  /** 规则 ID 列表 */
  RuleIds: string[];
  /** Prometheus 实例 ID */
  InstanceId: string;
}

declare interface DeleteRecordingRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSSOAccountRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 用户账号 ID ，例如：10000000 */
  UserId: string;
}

declare interface DeleteSSOAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServiceDiscoveryRequest {
  /** Prometheus 实例 ID，例如：prom-sdfk2342a */
  InstanceId: string;
  /** 类型是 TKE，为对应的腾讯云容器服务集群 ID */
  KubeClusterId: string;
  /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
  KubeType: number;
  /** 服务发现类型，取值如下： 1 = ServiceMonitor 2 = PodMonitor 3 = PodMonitor */
  Type: number;
  /** 服务发现配置信息 */
  Yaml: string;
}

declare interface DeleteServiceDiscoveryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccidentEventListRequest {
  /** 接口模块名，当前接口取值monitor */
  Module: string;
  /** 起始时间，默认一天前的时间戳 */
  StartTime?: number;
  /** 结束时间，默认当前时间戳 */
  EndTime?: number;
  /** 分页参数，每页返回的数量，取值1~100，默认20 */
  Limit?: number;
  /** 分页参数，页偏移量，从0开始计数，默认0 */
  Offset?: number;
  /** 根据UpdateTime排序的规则，取值asc或desc */
  UpdateTimeOrder?: string;
  /** 根据OccurTime排序的规则，取值asc或desc（优先根据UpdateTimeOrder排序） */
  OccurTimeOrder?: string;
  /** 根据事件类型过滤，1表示服务问题，2表示其他订阅 */
  AccidentType?: number[];
  /** 根据事件过滤，1表示云服务器存储问题，2表示云服务器网络连接问题，3表示云服务器运行异常，202表示运营商网络抖动 */
  AccidentEvent?: number[];
  /** 根据事件状态过滤，0表示已恢复，1表示未恢复 */
  AccidentStatus?: number[];
  /** 根据事件地域过滤，gz表示广州，sh表示上海等 */
  AccidentRegion?: string[];
  /** 根据影响资源过滤，比如ins-19a06bka */
  AffectResource?: string;
}

declare interface DescribeAccidentEventListResponse {
  /** 平台事件列表 */
  Alarms?: DescribeAccidentEventListAlarms[] | null;
  /** 平台事件的总数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmEventsRequest {
  /** 模块名，固定值 monitor */
  Module: string;
  /** 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device */
  Namespace: string;
  /** 监控类型，如 MT_QCE。如果不填默认为 MT_QCE。 */
  MonitorType?: string;
}

declare interface DescribeAlarmEventsResponse {
  /** 告警事件列表 */
  Events: AlarmEvent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmHistoriesRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 页数，从 1 开始计数，默认 1 */
  PageNumber?: number;
  /** 每页的数量，取值1~100，默认20 */
  PageSize?: number;
  /** 默认按首次出现时间倒序排列 "ASC"=正序 "DESC"=逆序 */
  Order?: string;
  /** 起始时间，默认一天前的时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 晚于 `StartTime` 才可能被搜索到。 */
  StartTime?: number;
  /** 结束时间，默认当前时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 早于 `EndTime` 才可能被搜索到。 */
  EndTime?: number;
  /** 根据监控类型过滤，不选默认查所有类型。"MT_QCE"=云产品监控，支持的枚举值有："MT_QCE"=云产品监控；"MT_TAW"=应用性能观测；"MT_RUM"=前端性能监控；"MT_PROBE"=云拨测 */
  MonitorTypes?: string[];
  /** 根据告警对象过滤 字符串模糊搜索 */
  AlarmObject?: string;
  /** 根据告警状态过滤 ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足，不选默认查所有 */
  AlarmStatus?: string[];
  /** 根据项目ID过滤，-1=无项目 0=默认项目可在此页面查询 [项目管理](https://console.cloud.tencent.com/project) */
  ProjectIds?: number[];
  /** 根据实例组ID过滤 */
  InstanceGroupIds?: number[];
  /** 根据策略类型过滤，策略类型是监控类型之下的概念，在这里两者都需要传入，例如 `[{"MonitorType": "MT_QCE", "Namespace": "cvm_device"}]`可使用 [查询所有名字空间 DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 接口查询 */
  Namespaces?: MonitorTypeNamespace[];
  /** 根据指标名过滤 */
  MetricNames?: string[];
  /** 根据策略名称模糊搜索 */
  PolicyName?: string;
  /** 根据告警内容模糊搜索 */
  Content?: string;
  /** 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段 */
  ReceiverUids?: number[];
  /** 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段 */
  ReceiverGroups?: number[];
  /** 根据告警策略 Id 列表搜索 */
  PolicyIds?: string[];
}

declare interface DescribeAlarmHistoriesResponse {
  /** 总数 */
  TotalCount: number;
  /** 告警历史列表 */
  Histories: AlarmHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmMetricsRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 监控类型过滤 "MT_QCE"=云产品监控 */
  MonitorType: string;
  /** 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device */
  Namespace: string;
}

declare interface DescribeAlarmMetricsResponse {
  /** 告警指标列表 */
  Metrics?: Metric[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmNoticeCallbacksRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
}

declare interface DescribeAlarmNoticeCallbacksResponse {
  /** 告警回调通知 */
  URLNotices?: URLNotice[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmNoticeRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
  /** 告警通知模板 id */
  NoticeId: string;
}

declare interface DescribeAlarmNoticeResponse {
  /** 告警通知模板详细信息 */
  Notice: AlarmNotice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmNoticesRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
  /** 页码 最小为1 */
  PageNumber: number;
  /** 分页大小 1～200 */
  PageSize: number;
  /** 按更新时间排序方式 ASC=正序 DESC=倒序 */
  Order: string;
  /** 主账号 uid 用于创建预设通知 */
  OwnerUid?: number;
  /** 告警通知模板名称 用来模糊搜索 */
  Name?: string;
  /** 根据接收人过滤告警通知模板需要选定通知用户类型 USER=用户 GROUP=用户组 传空=不按接收人过滤 */
  ReceiverType?: string;
  /** 接收对象列表 */
  UserIds?: number[];
  /** 接收组列表 */
  GroupIds?: number[];
  /** 根据通知模板 id 过滤，空数组/不传则不过滤 */
  NoticeIds?: string[];
  /** 模板根据标签过滤 */
  Tags?: Tag[];
}

declare interface DescribeAlarmNoticesResponse {
  /** 告警通知模板总数 */
  TotalCount: number;
  /** 告警通知模板列表 */
  Notices: AlarmNotice[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmPoliciesRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 页数，从 1 开始计数，默认 1 */
  PageNumber?: number;
  /** 每页的数量，取值1~100，默认20 */
  PageSize?: number;
  /** 按策略名称模糊搜索 */
  PolicyName?: string;
  /** 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控 */
  MonitorTypes?: string[];
  /** 根据命名空间过滤，不同策略类型的值详见[策略类型列表](https://cloud.tencent.com/document/product/248/50397) */
  Namespaces?: string[];
  /** 告警对象列表，JSON 字符串。外层数组，对应多个实例，内层为对象的维度。例如“云服务器-基础监控”可写为：`[ {"Dimensions": {"unInstanceId": "ins-qr8d555g"}}, {"Dimensions": {"unInstanceId": "ins-qr8d555h"}} ]`具体也可以参考下方的示例 2。不同云产品参数示例详见 [维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)注意：如果NeedCorrespondence传入1，即需要返回策略与实例对应关系，请传入不多于20个告警对象维度，否则容易请求超时 */
  Dimensions?: string;
  /** 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段 */
  ReceiverUids?: number[];
  /** 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段 */
  ReceiverGroups?: number[];
  /** 根据默认策略筛选 不传展示全部策略 DEFAULT=展示默认策略 NOT_DEFAULT=展示非默认策略 */
  PolicyType?: string[];
  /** 排序字段，例如按照最后修改时间排序，Field: "UpdateTime" */
  Field?: string;
  /** 排序顺序：升序：ASC 降序：DESC */
  Order?: string;
  /** 策略所属项目的id数组，可在此页面查看[项目管理](https://console.cloud.tencent.com/project) */
  ProjectIds?: number[];
  /** 通知模版的id列表，可查询通知模版列表获取。可使用 [查询通知模板列表](https://cloud.tencent.com/document/product/248/51280) 接口查询。 */
  NoticeIds?: string[];
  /** 根据触发条件筛选 不传展示全部策略 STATIC=展示静态阈值策略 DYNAMIC=展示动态阈值策略 */
  RuleTypes?: string[];
  /** 告警启停筛选，[1]：启用 [0]：停止，全部[0, 1] */
  Enable?: number[];
  /** 传 1 查询未配置通知规则的告警策略；不传或传其他数值，查询所有策略。 */
  NotBindingNoticeRule?: number;
  /** 实例分组id */
  InstanceGroupId?: number;
  /** 是否需要策略与入参过滤维度参数的对应关系，1：是 0：否，默认为0 */
  NeedCorrespondence?: number;
  /** 按照触发任务（例如弹性伸缩）过滤策略。最多10个 */
  TriggerTasks?: AlarmPolicyTriggerTask[];
  /** 根据一键告警策略筛选 不传展示全部策略 ONECLICK=展示一键告警策略 NOT_ONECLICK=展示非一键告警策略 */
  OneClickPolicyType?: string[];
  /** 根据全部对象过滤，1代表需要过滤掉全部对象，0则无需过滤 */
  NotBindAll?: number;
  /** 根据实例对象过滤，1代表需要过滤掉有实例对象，0则无需过滤 */
  NotInstanceGroup?: number;
  /** 策略根据标签过滤 */
  Tags?: Tag[];
}

declare interface DescribeAlarmPoliciesResponse {
  /** 策略总数 */
  TotalCount: number;
  /** 策略数组 */
  Policies: AlarmPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmPolicyRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 告警策略ID */
  PolicyId: string;
}

declare interface DescribeAlarmPolicyResponse {
  /** 策略详情 */
  Policy: AlarmPolicy;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlertRulesRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 规则 ID */
  RuleId?: string;
  /** 规则状态码，取值如下：2=RuleEnabled3=RuleDisabled */
  RuleState?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 报警策略模板分类 */
  Type?: string;
}

declare interface DescribeAlertRulesResponse {
  /** 报警规则数量 */
  TotalCount: number;
  /** 报警规则详情 */
  AlertRuleSet: PrometheusRuleSet[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllNamespacesRequest {
  /** 根据使用场景过滤 目前仅有"ST_ALARM"=告警类型 */
  SceneType: string;
  /** 固定值，为"monitor" */
  Module: string;
  /** 根据监控类型过滤 不填默认查所有类型 "MT_QCE"=云产品监控 */
  MonitorTypes?: string[];
  /** 根据namespace的Id过滤 不填默认查询所有 */
  Ids?: string[];
}

declare interface DescribeAllNamespacesResponse {
  /** 云产品的告警策略类型，已废弃 */
  QceNamespaces: CommonNamespace;
  /** 其他告警策略类型，已废弃 */
  CustomNamespaces: CommonNamespace;
  /** 云产品的告警策略类型 */
  QceNamespacesNew: CommonNamespace[];
  /** 其他告警策略类型，暂不支持 */
  CustomNamespacesNew: CommonNamespace[];
  /** 通用告警策略类型(包括：应用性能监控，前端性能监控，云拨测) */
  CommonNamespaces: CommonNamespaceNew[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaseMetricsRequest {
  /** 业务命名空间，各个云产品的业务命名空间不同。如需获取业务命名空间，请前往各产品监控指标文档，例如云服务器的命名空间，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843) */
  Namespace: string;
  /** 指标名，各个云产品的指标名不同。如需获取指标名，请前往各产品监控指标文档，例如云服务器的指标名，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843) */
  MetricName?: string;
  /** 可选参数，按照维度过滤 */
  Dimensions?: string[];
}

declare interface DescribeBaseMetricsResponse {
  /** 查询得到的指标描述列表 */
  MetricSet: MetricSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBasicAlarmListRequest {
  /** 接口模块名，当前取值monitor */
  Module: string;
  /** 起始时间，默认一天前的时间戳 */
  StartTime?: number;
  /** 结束时间，默认当前时间戳 */
  EndTime?: number;
  /** 分页参数，每页返回的数量，取值1~100，默认20 */
  Limit?: number;
  /** 分页参数，页偏移量，从0开始计数，默认0 */
  Offset?: number;
  /** 根据发生时间排序，取值ASC或DESC */
  OccurTimeOrder?: string;
  /** 根据项目ID过滤 */
  ProjectIds?: number[];
  /** 根据策略类型过滤 */
  ViewNames?: string[];
  /** 根据告警状态过滤 */
  AlarmStatus?: number[];
  /** 根据告警对象过滤 */
  ObjLike?: string;
  /** 根据实例组ID过滤 */
  InstanceGroupIds?: number[];
  /** 根据指标名过滤 */
  MetricNames?: string[];
}

declare interface DescribeBasicAlarmListResponse {
  /** 告警列表 */
  Alarms: DescribeBasicAlarmListAlarms[] | null;
  /** 总数 */
  Total: number | null;
  /** 备注信息 */
  Warning: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBindingPolicyObjectListRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略组id，如果有形如 policy-xxxx 的 id，请填到 PolicyId 字段中，本字段填 0 */
  GroupId: number;
  /** 告警策略id，形如 policy-xxxx，如果填入，则GroupId可以填0 */
  PolicyId?: string;
  /** 每次返回的数量，取值1~100，默认20 */
  Limit?: number;
  /** 偏移量，从0开始计数，默认0。举例来说，参数 Offset=0&Limit=20 返回第 0 到 19 项，Offset=20&Limit=20 返回第 20 到 39 项，以此类推 */
  Offset?: number;
  /** 筛选对象的维度信息 */
  Dimensions?: DescribeBindingPolicyObjectListDimension[];
}

declare interface DescribeBindingPolicyObjectListResponse {
  /** 绑定的对象实例列表 */
  List: DescribeBindingPolicyObjectListInstance[] | null;
  /** 绑定的对象实例总数 */
  Total: number;
  /** 未屏蔽的对象实例数 */
  NoShieldedSum: number;
  /** 绑定的实例分组信息，没有绑定实例分组则为空 */
  InstanceGroup: DescribeBindingPolicyObjectListInstanceGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConditionsTemplateListRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 视图名，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device */
  ViewName?: string;
  /** 根据触发条件模板名称过滤查询 */
  GroupName?: string;
  /** 根据触发条件模板ID过滤查询 */
  GroupID?: string;
  /** 分页参数，每页返回的数量，取值1~100，默认20 */
  Limit?: number;
  /** 分页参数，页偏移量，从0开始计数，默认0 */
  Offset?: number;
  /** 指定按更新时间的排序方式，asc=升序, desc=降序 */
  UpdateTimeOrder?: string;
  /** 指定按绑定策略数目的排序方式，asc=升序, desc=降序 */
  PolicyCountOrder?: string;
}

declare interface DescribeConditionsTemplateListResponse {
  /** 模板总数 */
  Total: number;
  /** 模板列表 */
  TemplateGroupList: TemplateGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDNSConfigRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
}

declare interface DescribeDNSConfigResponse {
  /** DNS 服务器数组 */
  NameServers?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExporterIntegrationsRequest {
  /** 实例 ID */
  InstanceId: string;
  /** Kubernetes 集群类型，取值如下： 1= 容器集群(TKE) 2=弹性集群 3= Prometheus管理的弹性集群 */
  KubeType?: number;
  /** 集群 ID */
  ClusterId?: string;
  /** 类型 */
  Kind?: string;
  /** 名字 */
  Name?: string;
}

declare interface DescribeExporterIntegrationsResponse {
  /** 集成配置列表 */
  IntegrationSet: IntegrationConfiguration[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGrafanaChannelsRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** 偏移量 */
  Offset: number;
  /** 查询数量 */
  Limit: number;
  /** 告警通道名称，例如：test */
  ChannelName?: string;
  /** 告警通道 ID，例如：nchannel-abcd1234 */
  ChannelIds?: string[];
  /** 告警通道状态 */
  ChannelState?: number;
}

declare interface DescribeGrafanaChannelsResponse {
  /** 告警通道数组 */
  NotificationChannelSet: GrafanaChannel[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGrafanaConfigRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
}

declare interface DescribeGrafanaConfigResponse {
  /** JSON 编码后的字符串 */
  Config: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGrafanaEnvironmentsRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
}

declare interface DescribeGrafanaEnvironmentsResponse {
  /** 环境变量字符串 */
  Envs?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGrafanaInstancesRequest {
  /** 查询偏移量 */
  Offset: number;
  /** 查询数量 */
  Limit: number;
  /** Grafana 实例 ID 数组 */
  InstanceIds?: string[];
  /** Grafana 实例名，支持前缀模糊搜索 */
  InstanceName?: string;
  /** 查询状态 */
  InstanceStatus?: number[];
  /** 标签过滤数组 */
  TagFilters?: PrometheusTag[];
}

declare interface DescribeGrafanaInstancesResponse {
  /** 已废弃，请使用 Instances */
  InstanceSet: GrafanaInstanceInfo[];
  /** 符合查询条件的实例总数 */
  TotalCount: number;
  /** 实例列表 */
  Instances: GrafanaInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGrafanaIntegrationsRequest {
  /** 实例 ID */
  InstanceId: string;
  /** 集成 ID */
  IntegrationId?: string;
  /** 类型 */
  Kind?: string;
}

declare interface DescribeGrafanaIntegrationsResponse {
  /** 集成数组 */
  IntegrationSet: GrafanaIntegrationConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGrafanaNotificationChannelsRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** 偏移量 */
  Offset: number;
  /** 查询数量 */
  Limit: number;
  /** 告警通道名称，例如：test */
  ChannelName?: string;
  /** 告警通道 ID，例如：nchannel-abcd1234 */
  ChannelIDs?: string[];
  /** 告警通道状态 */
  ChannelState?: number;
}

declare interface DescribeGrafanaNotificationChannelsResponse {
  /** 告警通道数组 */
  NotificationChannelSet?: GrafanaNotificationChannel[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGrafanaWhiteListRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
}

declare interface DescribeGrafanaWhiteListResponse {
  /** 数组 */
  WhiteList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstalledPluginsRequest {
  /** Grafana 实例 ID，例如：grafana-kleu3gt0 */
  InstanceId: string;
  /** 按插件 ID 过滤，例如：grafana-piechart-panel，可通过接口 DescribeInstalledPlugins 查看已安装的插件 ID */
  PluginId?: string;
}

declare interface DescribeInstalledPluginsResponse {
  /** 插件列表 */
  PluginSet: GrafanaPlugin[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonitorTypesRequest {
  /** 模块名，固定值 monitor */
  Module: string;
}

declare interface DescribeMonitorTypesResponse {
  /** 监控类型，云产品监控为 MT_QCE */
  MonitorTypes?: string[];
  /** 监控类型详情 */
  MonitorTypeInfos?: MonitorTypeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginOverviewsRequest {
}

declare interface DescribePluginOverviewsResponse {
  /** 插件列表 */
  PluginSet: GrafanaPlugin[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyConditionListRequest {
  /** 固定值，为"monitor" */
  Module: string;
}

declare interface DescribePolicyConditionListResponse {
  /** 告警策略条件列表 */
  Conditions?: DescribePolicyConditionListCondition[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyGroupInfoRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略组id */
  GroupId: number;
}

declare interface DescribePolicyGroupInfoResponse {
  /** 策略组名称 */
  GroupName?: string;
  /** 策略组所属的项目id */
  ProjectId?: number;
  /** 是否为默认策略，0表示非默认策略，1表示默认策略 */
  IsDefault?: number;
  /** 策略类型 */
  ViewName?: string;
  /** 策略说明 */
  Remark?: string;
  /** 策略类型名称 */
  ShowName?: string;
  /** 最近编辑的用户uin */
  LastEditUin?: string;
  /** 最近编辑时间 */
  UpdateTime?: string;
  /** 该策略支持的地域 */
  Region?: string[];
  /** 策略类型的维度列表 */
  DimensionGroup?: string[];
  /** 阈值规则列表 */
  ConditionsConfig?: DescribePolicyGroupInfoCondition[] | null;
  /** 产品事件规则列表 */
  EventConfig?: DescribePolicyGroupInfoEventCondition[] | null;
  /** 用户接收人列表 */
  ReceiverInfos?: DescribePolicyGroupInfoReceiverInfo[] | null;
  /** 用户回调信息 */
  Callback?: DescribePolicyGroupInfoCallback | null;
  /** 模板策略组 */
  ConditionsTemp?: DescribePolicyGroupInfoConditionTpl | null;
  /** 是否可以设置成默认策略 */
  CanSetDefault?: boolean;
  /** 是否且规则 */
  IsUnionRule?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyGroupListRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 分页参数，每页返回的数量，取值1~100 */
  Limit: number;
  /** 分页参数，页偏移量，从0开始计数 */
  Offset: number;
  /** 按策略名搜索 */
  Like?: string;
  /** 实例分组id */
  InstanceGroupId?: number;
  /** 按更新时间排序, asc 或者 desc */
  UpdateTimeOrder?: string;
  /** 项目id列表 */
  ProjectIds?: number[];
  /** 告警策略类型列表 */
  ViewNames?: string[];
  /** 是否过滤无接收人策略组, 1表示过滤, 0表示不过滤 */
  FilterUnuseReceiver?: number;
  /** 过滤条件, 接收组列表 */
  Receivers?: string[];
  /** 过滤条件, 接收人列表 */
  ReceiverUserList?: string[];
  /** 维度组合字段(json字符串), 例如[[{"name":"unInstanceId","value":"ins-6e4b2aaa"}]] */
  Dimensions?: string;
  /** 模板策略组id, 多个id用逗号分隔 */
  ConditionTempGroupId?: string;
  /** 过滤条件, 接收人或者接收组, user表示接收人, group表示接收组 */
  ReceiverType?: string;
  /** 过滤条件，告警策略是否已启动或停止 */
  IsOpen?: boolean;
}

declare interface DescribePolicyGroupListResponse {
  /** 策略组列表 */
  GroupList: DescribePolicyGroupListGroup[] | null;
  /** 策略组总数 */
  Total: number;
  /** 备注信息 */
  Warning: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductEventListRequest {
  /** 接口模块名，固定值"monitor" */
  Module: string;
  /** 产品类型过滤，例如"cvm"表示云服务器 */
  ProductName?: string[];
  /** 事件名称过滤，例如"guest_reboot"表示机器重启 */
  EventName?: string[];
  /** 影响对象，例如"ins-19708ino" */
  InstanceId?: string[];
  /** 维度过滤，例如外网IP:10.0.0.1 */
  Dimensions?: DescribeProductEventListDimensions[];
  /** 产品事件地域过滤参数，例如gz，各地域缩写可参见[地域列表](https://cloud.tencent.com/document/product/248/50863) */
  RegionList?: string[];
  /** 事件类型过滤，取值范围["status_change","abnormal"]，分别表示状态变更、异常事件 */
  Type?: string[];
  /** 事件状态过滤，取值范围["recover","alarm","-"]，分别表示已恢复、未恢复、无状态 */
  Status?: string[];
  /** 项目ID过滤 */
  Project?: string[];
  /** 告警状态配置过滤，1表示已配置，0表示未配置 */
  IsAlarmConfig?: number;
  /** 按更新时间排序，ASC表示升序，DESC表示降序，默认DESC */
  TimeOrder?: string;
  /** 起始时间，默认一天前的时间戳 */
  StartTime?: number;
  /** 结束时间，默认当前时间戳 */
  EndTime?: number;
  /** 页偏移量，默认0 */
  Offset?: number;
  /** 每页返回的数量，默认20 */
  Limit?: number;
}

declare interface DescribeProductEventListResponse {
  /** 事件列表 */
  Events: DescribeProductEventListEvents[] | null;
  /** 事件统计 */
  OverView: DescribeProductEventListOverView;
  /** 事件总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductListRequest {
  /** 固定传值monitor */
  Module: string;
  /** 排序方式：DESC/ASC（区分大小写），默认值DESC */
  Order?: string;
  /** 分页查询的偏移量，默认值0 */
  Offset?: number;
  /** 分页查询的每页数据量，默认值20 */
  Limit?: number;
}

declare interface DescribeProductListResponse {
  /** 产品信息列表 */
  ProductList?: ProductSimple[] | null;
  /** 产品总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAgentInstancesRequest {
  /** 集群id可以是tke, eks, edge的集群id */
  ClusterId: string;
}

declare interface DescribePrometheusAgentInstancesResponse {
  /** 关联该集群的实例列表 */
  Instances?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAgentsRequest {
  /** 实例 ID */
  InstanceId: string;
  /** Agent 名称 */
  Name?: string;
  /** Agent ID 列表 */
  AgentIds?: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribePrometheusAgentsResponse {
  /** Agent 列表 */
  AgentSet: PrometheusAgent[] | null;
  /** Agent 总量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 分页 */
  Offset?: number;
  /** 分页 */
  Limit?: number;
  /** 过滤支持ID，Name */
  Filters?: Filter[];
}

declare interface DescribePrometheusAlertPolicyResponse {
  /** 告警详情 */
  AlertRules?: PrometheusAlertPolicyItem[] | null;
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusClusterAgentsRequest {
  /** 实例id */
  InstanceId: string;
  /** 用于分页 */
  Offset?: number;
  /** 用于分页 */
  Limit?: number;
}

declare interface DescribePrometheusClusterAgentsResponse {
  /** 被关联集群信息 */
  Agents?: PrometheusAgentOverview[];
  /** 被关联集群总量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusConfigRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群id */
  ClusterId: string;
  /** 集群类型 */
  ClusterType: string;
}

declare interface DescribePrometheusConfigResponse {
  /** 全局配置 */
  Config?: string;
  /** ServiceMonitor配置 */
  ServiceMonitors?: PrometheusConfigItem[];
  /** PodMonitor配置 */
  PodMonitors?: PrometheusConfigItem[];
  /** 原生Job */
  RawJobs?: PrometheusConfigItem[];
  /** Probes */
  Probes?: PrometheusConfigItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusGlobalConfigRequest {
  /** 实例级别抓取配置 */
  InstanceId: string;
  /** 是否禁用统计 */
  DisableStatistics?: boolean;
}

declare interface DescribePrometheusGlobalConfigResponse {
  /** 配置内容 */
  Config?: string;
  /** ServiceMonitors列表以及对应targets信息 */
  ServiceMonitors?: PrometheusConfigItem[] | null;
  /** PodMonitors列表以及对应targets信息 */
  PodMonitors?: PrometheusConfigItem[] | null;
  /** RawJobs列表以及对应targets信息 */
  RawJobs?: PrometheusConfigItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusGlobalNotificationRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribePrometheusGlobalNotificationResponse {
  /** 全局告警通知渠道 */
  Notification?: PrometheusNotificationItem | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusInstanceDetailRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribePrometheusInstanceDetailResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** VPC ID */
  VpcId?: string;
  /** 子网 ID */
  SubnetId?: string;
  /** 实例业务状态。取值范围：1：正在创建2：运行中3：异常4：重建中5：销毁中6：已停服8：欠费停服中9：欠费已停服 */
  InstanceStatus?: number;
  /** 计费状态1：正常2：过期3：销毁4：分配中5：分配失败 */
  ChargeStatus?: number | null;
  /** 是否开启 Grafana0：不开启1：开启 */
  EnableGrafana?: number;
  /** Grafana 面板 URL */
  GrafanaURL?: string | null;
  /** 实例计费模式。取值范围：2：包年包月3：按量 */
  InstanceChargeType?: number;
  /** 规格名称 */
  SpecName?: string | null;
  /** 存储周期 */
  DataRetentionTime?: number | null;
  /** 购买的实例过期时间 */
  ExpireTime?: string | null;
  /** 自动续费标记0：不自动续费1：开启自动续费2：禁止自动续费-1：无效 */
  AutoRenewFlag?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusInstanceInitStatusRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribePrometheusInstanceInitStatusResponse {
  /** 实例初始化状态，取值：uninitialized 未初始化 initializing 初始化中running 初始化完成，运行中 */
  Status?: string | null;
  /** 初始化任务步骤 */
  Steps?: TaskStepInfo[] | null;
  /** 实例eks集群ID */
  EksClusterId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusInstanceUsageRequest {
  /** 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。请求的实例的上限为100。 */
  InstanceIds: string[];
  /** 开始时间 */
  StartCalcDate: string;
  /** 结束时间 */
  EndCalcDate: string;
}

declare interface DescribePrometheusInstanceUsageResponse {
  /** 用量列表 */
  UsageSet: PrometheusInstanceTenantUsage[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusInstancesOverviewRequest {
  /** 用于分页 */
  Offset?: number;
  /** 用于分页 */
  Limit?: number;
  /** 过滤实例，目前支持：ID: 通过实例ID来过滤 Name: 通过实例名称来过滤 */
  Filters?: Filter[];
}

declare interface DescribePrometheusInstancesOverviewResponse {
  /** 实例列表 */
  Instances?: PrometheusInstancesOverview[];
  /** 实例总数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusInstancesRequest {
  /** 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。请求的实例的上限为100。 */
  InstanceIds?: string[];
  /** 按照【实例状态】进行过滤。1：正在创建2：运行中3：异常4：重建中5：销毁中6：已停服8：欠费停服中9：欠费已停服 */
  InstanceStatus?: number[];
  /** 按照【实例名称】进行过滤。 */
  InstanceName?: string;
  /** 按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。 */
  Zones?: string[];
  /** 按照【标签键值对】进行过滤。tag-key使用具体的标签键进行替换。 */
  TagFilters?: PrometheusTag[];
  /** 按照【实例的IPv4地址】进行过滤。 */
  IPv4Address?: string[];
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 按照【计费类型】进行过滤。2：包年包月3：按量 */
  InstanceChargeType?: number;
}

declare interface DescribePrometheusInstancesResponse {
  /** 实例详细信息列表。 */
  InstanceSet: PrometheusInstancesItem[] | null;
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusRecordRuleYamlRequest {
  /** 实例id */
  InstanceId: string;
  /** 分页 */
  Offset?: number;
  /** 分页 */
  Limit?: number;
  /** 过滤，当前支持Name = NameValues = 目标名称列表 */
  Filters?: Filter[];
}

declare interface DescribePrometheusRecordRuleYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusRecordRulesRequest {
  /** 实例id */
  InstanceId: string;
  /** 分页 */
  Offset?: number;
  /** 分页 */
  Limit?: number;
  /** 过滤 */
  Filters?: Filter[];
}

declare interface DescribePrometheusRecordRulesResponse {
  /** 聚合规则 */
  Records?: PrometheusRecordRuleYamlItem[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusScrapeJobsRequest {
  /** 实例 ID */
  InstanceId: string;
  /** Agent ID */
  AgentId: string;
  /** 任务名 */
  Name?: string;
  /** 任务 ID 列表 */
  JobIds?: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribePrometheusScrapeJobsResponse {
  /** 任务列表 */
  ScrapeJobSet?: PrometheusScrapeJob[] | null;
  /** 任务总量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTargetsTMPRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** 过滤条件，当前支持Name=stateValue=up, down, unknown */
  Filters?: Filter[];
}

declare interface DescribePrometheusTargetsTMPResponse {
  /** 所有Job的targets信息 */
  Jobs?: PrometheusJobTargets[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTempRequest {
  /** 模糊过滤条件，支持Level 按模板级别过滤Name 按名称过滤Describe 按描述过滤ID 按templateId过滤 */
  Filters?: Filter[];
  /** 分页偏移 */
  Offset?: number;
  /** 总数限制 */
  Limit?: number;
}

declare interface DescribePrometheusTempResponse {
  /** 模板列表 */
  Templates?: PrometheusTemp[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTempSyncRequest {
  /** 模板ID */
  TemplateId: string;
}

declare interface DescribePrometheusTempSyncResponse {
  /** 同步目标详情 */
  Targets?: PrometheusTemplateSyncTarget[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusZonesRequest {
  /** 地域 ID（RegionId 和 RegionName 只需要填一个） */
  RegionId?: number;
  /** 地域名（RegionId 和 RegionName 只需要填一个） */
  RegionName?: string;
}

declare interface DescribePrometheusZonesResponse {
  /** 区域列表 */
  ZoneSet?: PrometheusZoneItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordingRulesRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 规则 ID */
  RuleId?: string;
  /** 规则状态码，取值如下：1=RuleDeleted2=RuleEnabled3=RuleDisabled */
  RuleState?: number;
  /** 规则名称 */
  Name?: string;
}

declare interface DescribeRecordingRulesResponse {
  /** 规则组数量 */
  TotalCount: number;
  /** 规则组详情 */
  RecordingRuleSet: RecordingRuleSet[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSSOAccountRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 填写对应的账号 ID，将会按账号 ID 进行过滤，例如：10000 */
  UserId?: string;
}

declare interface DescribeSSOAccountResponse {
  /** 授权账号列表 */
  AccountSet: GrafanaAccountInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceDiscoveryRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 类型是 TKE，为对应的腾讯云容器服务集群 ID */
  KubeClusterId: string;
  /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
  KubeType: number;
}

declare interface DescribeServiceDiscoveryResponse {
  /** 返回服务发现列表信息 */
  ServiceDiscoverySet?: ServiceDiscoveryItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStatisticDataRequest {
  /** 所属模块，固定值，为monitor */
  Module: string;
  /** 命名空间，目前只支持QCE/TKE2 */
  Namespace: string;
  /** 指标名列表 */
  MetricNames: string[];
  /** 维度条件，操作符支持=、in */
  Conditions?: MidQueryCondition[];
  /** 统计粒度。默认取值为300，单位为s；可选的值为60、300、3600、86400受存储时长限制，统计粒度与统计的时间范围有关：60s：EndTime-StartTime<12小时，且StartTime距当前时间不能超过15天；300s：EndTime-StartTime<3天，且StartTime距当前时间不能超过31天；3600s：EndTime-StartTime<30天，且StartTime距当前时间不能超过93天；86400s：EndTime-StartTime<186天，且StartTime距当前时间不能超过186天。 */
  Period?: number;
  /** 起始时间，默认为当前时间，如2020-12-08T19:51:23+08:00 */
  StartTime?: string;
  /** 结束时间，默认为当前时间，如2020-12-08T19:51:23+08:00 */
  EndTime?: string;
  /** 按指定维度groupBy */
  GroupBys?: string[];
}

declare interface DescribeStatisticDataResponse {
  /** 统计周期 */
  Period?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 监控数据 */
  Data?: MetricData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyPrometheusInstanceRequest {
  /** 实例 ID，该实例必须先被 terminate */
  InstanceId: string;
}

declare interface DestroyPrometheusInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableGrafanaInternetRequest {
  /** Grafana 实例 ID，例如：grafana-kleu3gt0 */
  InstanceID: string;
  /** 开启或关闭公网访问，true为开启，false 为不开启 */
  EnableInternet: boolean;
}

declare interface EnableGrafanaInternetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableGrafanaSSORequest {
  /** 是否开启 SSO，true为开启，false 为不开启 */
  EnableSSO: boolean;
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
}

declare interface EnableGrafanaSSOResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableSSOCamCheckRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 是否开启 cam 鉴权，true为开启，false 为不开启 */
  EnableSSOCamCheck: boolean;
}

declare interface EnableSSOCamCheckResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetMonitorDataRequest {
  /** 命名空间，如QCE/CVM。各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档 */
  Namespace: string;
  /** 指标名称，如CPUUsage，仅支持单指标拉取。各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的指标英文名即为MetricName */
  MetricName: string;
  /** 实例对象的维度组合，格式为key-value键值对形式的集合。不同类型的实例字段完全不同，如CVM为[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]，Ckafka为[{"Name":"instanceId","Value":"ckafka-l49k54dd"}]，COS为[{"Name":"appid","Value":"1258344699"},{"Name":"bucket","Value":"rig-1258344699"}]。各个云产品的维度请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的维度列即为维度组合的key，value为key对应的值。单请求最多支持批量拉取10个实例的监控数据。 */
  Instances: Instance[];
  /** 监控统计周期，如60。默认为取值为300，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的统计周期列即为支持的统计周期。单请求的数据点数限制为1440个。 */
  Period?: number;
  /** 起始时间，如2018-09-22T19:51:23+08:00 */
  StartTime?: string;
  /** 结束时间，如2018-09-22T20:51:23+08:00，默认为当前时间。 EndTime不能小于StartTime */
  EndTime?: string;
}

declare interface GetMonitorDataResponse {
  /** 统计周期 */
  Period?: number;
  /** 指标名 */
  MetricName?: string;
  /** 数据点数组 */
  DataPoints?: DataPoint[];
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 返回信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPrometheusAgentManagementCommandRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** Prometheus Agent ID */
  AgentId: string;
}

declare interface GetPrometheusAgentManagementCommandResponse {
  /** Agent 管理命令 */
  Command?: ManagementCommand;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstallPluginsRequest {
  /** 插件信息 */
  Plugins: GrafanaPlugin[];
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
}

declare interface InstallPluginsResponse {
  /** 已安装插件 ID */
  PluginIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmNoticeRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
  /** 告警通知规则名称 60字符以内 */
  Name: string;
  /** 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知 */
  NoticeType: string;
  /** 通知语言 zh-CN=中文 en-US=英文 */
  NoticeLanguage: string;
  /** 告警通知模板 ID */
  NoticeId: string;
  /** 用户通知 最多5个 */
  UserNotices?: UserNotice[];
  /** 回调通知 最多3个 */
  URLNotices?: URLNotice[];
  /** 告警通知推送到CLS服务 最多1个 */
  CLSNotices?: CLSNotice[];
  /** 告警通知模板绑定的告警策略ID列表 */
  PolicyIds?: string[];
}

declare interface ModifyAlarmNoticeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmPolicyConditionRequest {
  /** 模块名，固定值 monitor */
  Module: string;
  /** 告警策略 ID */
  PolicyId: string;
  /** 触发条件模板 Id，可不传 */
  ConditionTemplateId?: number;
  /** 指标触发条件 */
  Condition?: AlarmPolicyCondition;
  /** 事件触发条件 */
  EventCondition?: AlarmPolicyEventCondition;
  /** 全局过滤条件 */
  Filter?: AlarmPolicyFilter;
  /** 聚合维度列表，指定按哪些维度 key 来做 group by */
  GroupBy?: string[];
  /** 日志告警创建请求参数信息 */
  LogAlarmReqInfo?: LogAlarmReq;
  /** 模版id，专供prom使用 */
  NoticeIds?: string[];
  /** 启停状态，0=停用，1=启用 */
  Enable?: number;
  /** 专供prom策略名称 */
  PolicyName?: string;
  /** 事件配置的告警 */
  EbSubject?: string;
}

declare interface ModifyAlarmPolicyConditionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmPolicyInfoRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
  /** 告警策略 ID */
  PolicyId: string;
  /** 要修改的字段 NAME=策略名称 REMARK=策略备注 */
  Key: string;
  /** 修改后的值 */
  Value: string;
}

declare interface ModifyAlarmPolicyInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmPolicyNoticeRequest {
  /** 模块名，这里填“monitor”。 */
  Module: string;
  /** 告警策略 ID，如果该参数与PolicyIds参数同时存在，则以PolicyIds为准。 */
  PolicyId?: string;
  /** 告警通知模板 ID 列表。 */
  NoticeIds?: string[];
  /** 告警策略ID数组，支持给多个告警策略批量绑定通知模板。最多30个。 */
  PolicyIds?: string[];
  /** 告警分级通知规则配置 */
  HierarchicalNotices?: AlarmHierarchicalNotice[];
}

declare interface ModifyAlarmPolicyNoticeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmPolicyStatusRequest {
  /** 模块名，固定值 monitor */
  Module: string;
  /** 告警策略 ID */
  PolicyId: string;
  /** 启停状态 0=停用 1=启用 */
  Enable: number;
}

declare interface ModifyAlarmPolicyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmPolicyTasksRequest {
  /** 模块名，这里填“monitor” */
  Module: string;
  /** 告警策略 ID */
  PolicyId: string;
  /** 告警策略触发任务列表，空数据代表解绑 */
  TriggerTasks?: AlarmPolicyTriggerTask[];
}

declare interface ModifyAlarmPolicyTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmReceiversRequest {
  /** 需要修改接收人的策略组Id */
  GroupId: number;
  /** 必填。固定为“monitor” */
  Module: string;
  /** 新接收人信息, 没有填写则删除所有接收人 */
  ReceiverInfos?: ReceiverInfo[];
}

declare interface ModifyAlarmReceiversResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGrafanaInstanceRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** Grafana 实例名称，例如：test */
  InstanceName: string;
}

declare interface ModifyGrafanaInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPolicyGroupRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略组id */
  GroupId: number;
  /** 告警类型 */
  ViewName: string;
  /** 策略组名称 */
  GroupName: string;
  /** 指标告警条件的且或关系，1表示且告警，所有指标告警条件都达到才告警，0表示或告警，任意指标告警条件达到都告警 */
  IsUnionRule: number;
  /** 指标告警条件规则，不填表示删除已有的所有指标告警条件规则 */
  Conditions?: ModifyPolicyGroupCondition[];
  /** 事件告警条件，不填表示删除已有的事件告警条件 */
  EventConditions?: ModifyPolicyGroupEventCondition[];
  /** 模板策略组id */
  ConditionTempGroupId?: number;
}

declare interface ModifyPolicyGroupResponse {
  /** 策略组id */
  GroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusAgentExternalLabelsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 集群ID */
  ClusterId: string;
  /** 新的external_labels */
  ExternalLabels: Label[];
}

declare interface ModifyPrometheusAgentExternalLabelsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警配置 */
  AlertRule: PrometheusAlertPolicyItem;
}

declare interface ModifyPrometheusAlertPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusConfigRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** ServiceMonitors配置 */
  ServiceMonitors?: PrometheusConfigItem[];
  /** PodMonitors配置 */
  PodMonitors?: PrometheusConfigItem[];
  /** prometheus原生Job配置 */
  RawJobs?: PrometheusConfigItem[];
}

declare interface ModifyPrometheusConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusGlobalNotificationRequest {
  /** 实例ID */
  InstanceId: string;
  /** 告警通知渠道 */
  Notification: PrometheusNotificationItem;
}

declare interface ModifyPrometheusGlobalNotificationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusInstanceAttributesRequest {
  /** 实例名称 */
  InstanceName: string;
  /** 实例 ID */
  InstanceId: string;
  /** 存储时长（取值为 15、30、45。此参数不适用于包年包月实例） */
  DataRetentionTime?: number;
}

declare interface ModifyPrometheusInstanceAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusRecordRuleYamlRequest {
  /** 实例id */
  InstanceId: string;
  /** 聚合实例名称 */
  Name: string;
  /** 新的内容 */
  Content: string;
}

declare interface ModifyPrometheusRecordRuleYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusTempRequest {
  /** 模板ID */
  TemplateId: string;
  /** 修改内容 */
  Template: PrometheusTempModify;
}

declare interface ModifyPrometheusTempResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PutMonitorDataRequest {
  /** 一组指标和数据 */
  Metrics: MetricDatum[];
  /** 上报时自行指定的 IP */
  AnnounceIp?: string;
  /** 上报时自行指定的时间戳 */
  AnnounceTimestamp?: number;
  /** 上报时自行指定的 IP 或 产品实例ID */
  AnnounceInstance?: string;
}

declare interface PutMonitorDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeGrafanaInstanceRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
}

declare interface ResumeGrafanaInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunPrometheusInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化 */
  SubnetId?: string;
}

declare interface RunPrometheusInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendCustomAlarmMsgRequest {
  /** 接口模块名，当前取值monitor */
  Module: string;
  /** 消息策略ID，在自定义消息页面配置 */
  PolicyId: string;
  /** 用户想要发送的自定义消息内容 */
  Msg: string;
}

declare interface SendCustomAlarmMsgResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetDefaultAlarmPolicyRequest {
  /** 模块名，固定值 monitor */
  Module: string;
  /** 告警策略 ID */
  PolicyId: string;
}

declare interface SetDefaultAlarmPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncPrometheusTempRequest {
  /** 实例id */
  TemplateId: string;
  /** 同步目标 */
  Targets: PrometheusTemplateSyncTarget[];
}

declare interface SyncPrometheusTempResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminatePrometheusInstancesRequest {
  /** 实例 ID 列表 */
  InstanceIds: string[];
}

declare interface TerminatePrometheusInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindingAllPolicyObjectRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0 */
  GroupId: number;
  /** 告警策略ID，使用此字段时 GroupId 会被忽略 */
  PolicyId?: string;
  /** 事件配置的告警 */
  EbSubject?: string;
  /** 是否配置了事件告警 */
  EbEventFlag?: number;
}

declare interface UnBindingAllPolicyObjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindingPolicyObjectRequest {
  /** 固定值，为"monitor" */
  Module: string;
  /** 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0 */
  GroupId: number;
  /** 待删除对象实例的唯一id列表，UniqueId从调用[获取已绑定对象列表接口](https://cloud.tencent.com/document/api/248/40570)的出参的List中得到 */
  UniqueId: string[];
  /** 实例分组id，如果按实例分组删除的话UniqueId参数是无效的 */
  InstanceGroupId?: number;
  /** 告警策略ID，使用此字段时 GroupId 会被忽略 */
  PolicyId?: string;
  /** 事件配置的告警 */
  EbSubject?: string;
  /** 是否配置了事件告警 */
  EbEventFlag?: number;
}

declare interface UnBindingPolicyObjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindPrometheusManagedGrafanaRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** Grafana 实例 ID */
  GrafanaId: string;
}

declare interface UnbindPrometheusManagedGrafanaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UninstallGrafanaDashboardRequest {
  /** 实例 ID */
  InstanceId: string;
  /** Prometheus 集成项 Code，删除对应的 Dashboard，Code 如下：spring_mvcmysqlgoredisjvmpgsqlmongokafkaesflinkblackboxconsulememcachedzktpsistioetcd */
  IntegrationCodes?: string[];
}

declare interface UninstallGrafanaDashboardResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UninstallGrafanaPluginsRequest {
  /** 插件 ID 数组，例如"PluginIds": [ "grafana-clock-panel" ]，可通过 DescribePluginOverviews 获取 PluginId */
  PluginIds: string[];
  /** Grafana 实例 ID，例如：grafana-abcdefg */
  InstanceId: string;
}

declare interface UninstallGrafanaPluginsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAlertRuleRequest {
  /** Prometheus 报警规则 ID */
  RuleId: string;
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 规则状态码，取值如下：1=RuleDeleted2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
  RuleState: number;
  /** 报警规则名称 */
  RuleName: string;
  /** 报警规则表达式 */
  Expr: string;
  /** 报警规则持续时间 */
  Duration: string;
  /** 报警规则接收组列表 */
  Receivers: string[];
  /** 报警规则标签列表 */
  Labels?: PrometheusRuleKV[];
  /** 报警规则注释列表。告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。 */
  Annotations?: PrometheusRuleKV[];
  /** 报警策略模板分类 */
  Type?: string;
}

declare interface UpdateAlertRuleResponse {
  /** 规则 ID */
  RuleId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAlertRuleStateRequest {
  /** 规则 ID 列表 */
  RuleIds: string[];
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 规则状态码，取值如下：2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
  RuleState: number;
}

declare interface UpdateAlertRuleStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDNSConfigRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** DNS 数组 */
  NameServers: string[];
}

declare interface UpdateDNSConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateExporterIntegrationRequest {
  /** 实例 ID */
  InstanceId: string;
  /** 类型 */
  Kind: string;
  /** 配置内容 */
  Content: string;
  /** Kubernetes 集群类型，取值如下： 1= 容器集群(TKE) 2=弹性集群 3= Prometheus管理的弹性集群 */
  KubeType?: number;
  /** 集群 ID */
  ClusterId?: string;
}

declare interface UpdateExporterIntegrationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGrafanaConfigRequest {
  /** 实例 ID */
  InstanceId: string;
  /** JSON 编码后的字符串 */
  Config: string;
}

declare interface UpdateGrafanaConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGrafanaEnvironmentsRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** 环境变量字符串 */
  Envs: string;
}

declare interface UpdateGrafanaEnvironmentsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGrafanaIntegrationRequest {
  /** 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234 */
  IntegrationId: string;
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** 集成类型，可在实例详情-云产品集成-集成列表查看。例如：tencent-cloud-prometheus */
  Kind: string;
  /** 集成内容 */
  Content: string;
}

declare interface UpdateGrafanaIntegrationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGrafanaNotificationChannelRequest {
  /** 通道 ID，例如：nchannel-abcd1234 */
  ChannelId: string;
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** 告警通道名称，例如：test */
  ChannelName: string;
  /** 接受告警通道 ID 数组 */
  Receivers: string[];
  /** 已废弃，请使用 OrganizationIds */
  ExtraOrgIds?: string[];
  /** 生效的组织 ID 数组 */
  OrganizationIds?: string[];
}

declare interface UpdateGrafanaNotificationChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGrafanaWhiteListRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 白名单数组，输入公网域名 IP ，例如：127.0.0.1，可通过接口 DescribeGrafanaWhiteList 查看 */
  Whitelist: string[];
}

declare interface UpdateGrafanaWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePrometheusAgentStatusRequest {
  /** Prometheus 实例 ID，例如：prom-abcd1234 */
  InstanceId: string;
  /** Agent ID 列表，例如：agent-abcd1234，可在控制台 Agent 管理中获取 */
  AgentIds: string[];
  /** 要更新的状态 1= 开启 2= 关闭 */
  Status: number;
}

declare interface UpdatePrometheusAgentStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePrometheusScrapeJobRequest {
  /** Prometheus 实例 ID，例如：prom-abcd1234 */
  InstanceId: string;
  /** Agent ID，例如：agent-abcd1234，可在控制台 Agent 管理中获取 */
  AgentId: string;
  /** 抓取任务 ID，例如：job-abcd1234，可在控制台 Agent 管理-抓取任务配置中获取 */
  JobId: string;
  /** 抓取任务配置，格式：job_name:xx */
  Config: string;
}

declare interface UpdatePrometheusScrapeJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRecordingRuleRequest {
  /** 聚合规则名称 */
  Name: string;
  /** 聚合规则组内容，格式为 yaml，通过 base64 进行编码。 */
  Group: string;
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** Prometheus 聚合规则 ID */
  RuleId: string;
  /** 规则状态码，取值如下：1=RuleDeleted2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
  RuleState?: number;
}

declare interface UpdateRecordingRuleResponse {
  /** 规则 ID */
  RuleId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateSSOAccountRequest {
  /** Grafana 实例 ID，例如：grafana-abcdefgh */
  InstanceId: string;
  /** 用户账号 ID ，例如：10000000 */
  UserId: string;
  /** 权限 */
  Role?: GrafanaAccountRole[];
  /** 备注 */
  Notes?: string;
}

declare interface UpdateSSOAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateServiceDiscoveryRequest {
  /** Prometheus 实例 ID */
  InstanceId: string;
  /** 类型是 TKE，为对应的腾讯云容器服务集群 ID */
  KubeClusterId: string;
  /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
  KubeType: number;
  /** 服务发现类型，取值如下： 1 = ServiceMonitor 2 = PodMonitor 3 = JobMonitor */
  Type: number;
  /** 服务发现配置信息 */
  Yaml: string;
}

declare interface UpdateServiceDiscoveryResponse {
  /** 更新成功之后，返回对应服务发现的信息 */
  ServiceDiscovery?: ServiceDiscoveryItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeGrafanaDashboardRequest {
  /** 实例 ID */
  InstanceId: string;
  /** Prometheus 集成项 Code，升级对应的 Dashboard，取值如下：spring_mvcmysqlgoredisjvmpgsqlmongokafkaesflinkblackboxconsulememcachedzktpsistioetcd */
  IntegrationCodes?: string[];
}

declare interface UpgradeGrafanaDashboardResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeGrafanaInstanceRequest {
  /** Grafana 实例 ID，例如：grafana-12345678 */
  InstanceId: string;
  /** 版本别名，例如：v7.4.2 */
  Alias: string;
}

declare interface UpgradeGrafanaInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Monitor 腾讯云可观测平台} */
declare interface Monitor {
  (): Versions;
  /** 绑定 Grafana 可视化服务实例 {@link BindPrometheusManagedGrafanaRequest} {@link BindPrometheusManagedGrafanaResponse} */
  BindPrometheusManagedGrafana(data: BindPrometheusManagedGrafanaRequest, config?: AxiosRequestConfig): AxiosPromise<BindPrometheusManagedGrafanaResponse>;
  /** 绑定策略对象 {@link BindingPolicyObjectRequest} {@link BindingPolicyObjectResponse} */
  BindingPolicyObject(data: BindingPolicyObjectRequest, config?: AxiosRequestConfig): AxiosPromise<BindingPolicyObjectResponse>;
  /** 策略绑定标签 {@link BindingPolicyTagRequest} {@link BindingPolicyTagResponse} */
  BindingPolicyTag(data: BindingPolicyTagRequest, config?: AxiosRequestConfig): AxiosPromise<BindingPolicyTagResponse>;
  /** 判断用户是否为云原生监控新用户 {@link CheckIsPrometheusNewUserRequest} {@link CheckIsPrometheusNewUserResponse} */
  CheckIsPrometheusNewUser(data?: CheckIsPrometheusNewUserRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIsPrometheusNewUserResponse>;
  /** 强制销毁 Grafana 实例 {@link CleanGrafanaInstanceRequest} {@link CleanGrafanaInstanceResponse} */
  CleanGrafanaInstance(data: CleanGrafanaInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CleanGrafanaInstanceResponse>;
  /** 创建通知模板 {@link CreateAlarmNoticeRequest} {@link CreateAlarmNoticeResponse} */
  CreateAlarmNotice(data: CreateAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlarmNoticeResponse>;
  /** 创建告警策略 {@link CreateAlarmPolicyRequest} {@link CreateAlarmPolicyResponse} */
  CreateAlarmPolicy(data: CreateAlarmPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlarmPolicyResponse>;
  /** 创建告警规则 {@link CreateAlertRuleRequest} {@link CreateAlertRuleResponse} */
  CreateAlertRule(data: CreateAlertRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAlertRuleResponse>;
  /** 创建 exporter 集成 {@link CreateExporterIntegrationRequest} {@link CreateExporterIntegrationResponse} */
  CreateExporterIntegration(data: CreateExporterIntegrationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExporterIntegrationResponse>;
  /** 创建 Grafana 实例 {@link CreateGrafanaInstanceRequest} {@link CreateGrafanaInstanceResponse} */
  CreateGrafanaInstance(data: CreateGrafanaInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGrafanaInstanceResponse>;
  /** 创建 Grafana 集成配置 {@link CreateGrafanaIntegrationRequest} {@link CreateGrafanaIntegrationResponse} */
  CreateGrafanaIntegration(data: CreateGrafanaIntegrationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGrafanaIntegrationResponse>;
  /** 创建 Grafana 告警通道 {@link CreateGrafanaNotificationChannelRequest} {@link CreateGrafanaNotificationChannelResponse} */
  CreateGrafanaNotificationChannel(data: CreateGrafanaNotificationChannelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGrafanaNotificationChannelResponse>;
  /** 增加策略组 {@link CreatePolicyGroupRequest} {@link CreatePolicyGroupResponse} */
  CreatePolicyGroup(data: CreatePolicyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePolicyGroupResponse>;
  /** 创建 Prometheus CVM Agent {@link CreatePrometheusAgentRequest} {@link CreatePrometheusAgentResponse} */
  CreatePrometheusAgent(data: CreatePrometheusAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusAgentResponse>;
  /** 创建告警策略 {@link CreatePrometheusAlertPolicyRequest} {@link CreatePrometheusAlertPolicyResponse} */
  CreatePrometheusAlertPolicy(data: CreatePrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusAlertPolicyResponse>;
  /** 2.0实例关联集群 {@link CreatePrometheusClusterAgentRequest} {@link CreatePrometheusClusterAgentResponse} */
  CreatePrometheusClusterAgent(data: CreatePrometheusClusterAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusClusterAgentResponse>;
  /** 创建prometheus配置 {@link CreatePrometheusConfigRequest} {@link CreatePrometheusConfigResponse} */
  CreatePrometheusConfig(data: CreatePrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusConfigResponse>;
  /** 创建全局告警通知渠道 {@link CreatePrometheusGlobalNotificationRequest} {@link CreatePrometheusGlobalNotificationResponse} */
  CreatePrometheusGlobalNotification(data: CreatePrometheusGlobalNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusGlobalNotificationResponse>;
  /** 创建按量 Prometheus 实例 {@link CreatePrometheusMultiTenantInstancePostPayModeRequest} {@link CreatePrometheusMultiTenantInstancePostPayModeResponse} */
  CreatePrometheusMultiTenantInstancePostPayMode(data: CreatePrometheusMultiTenantInstancePostPayModeRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusMultiTenantInstancePostPayModeResponse>;
  /** 以Yaml的方式创建聚合规则 {@link CreatePrometheusRecordRuleYamlRequest} {@link CreatePrometheusRecordRuleYamlResponse} */
  CreatePrometheusRecordRuleYaml(data: CreatePrometheusRecordRuleYamlRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusRecordRuleYamlResponse>;
  /** 创建 Prometheus 抓取任务 {@link CreatePrometheusScrapeJobRequest} {@link CreatePrometheusScrapeJobResponse} */
  CreatePrometheusScrapeJob(data: CreatePrometheusScrapeJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusScrapeJobResponse>;
  /** 新建模板 {@link CreatePrometheusTempRequest} {@link CreatePrometheusTempResponse} */
  CreatePrometheusTemp(data: CreatePrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusTempResponse>;
  /** 创建预聚合规则 {@link CreateRecordingRuleRequest} {@link CreateRecordingRuleResponse} */
  CreateRecordingRule(data: CreateRecordingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordingRuleResponse>;
  /** 授权腾讯云用户 {@link CreateSSOAccountRequest} {@link CreateSSOAccountResponse} */
  CreateSSOAccount(data: CreateSSOAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSSOAccountResponse>;
  /** 创建服务发现 {@link CreateServiceDiscoveryRequest} {@link CreateServiceDiscoveryResponse} */
  CreateServiceDiscovery(data: CreateServiceDiscoveryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceDiscoveryResponse>;
  /** 删除告警通知模板（批量） {@link DeleteAlarmNoticesRequest} {@link DeleteAlarmNoticesResponse} */
  DeleteAlarmNotices(data: DeleteAlarmNoticesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlarmNoticesResponse>;
  /** 删除告警策略 {@link DeleteAlarmPolicyRequest} {@link DeleteAlarmPolicyResponse} */
  DeleteAlarmPolicy(data: DeleteAlarmPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlarmPolicyResponse>;
  /** 删除报警规则 {@link DeleteAlertRulesRequest} {@link DeleteAlertRulesResponse} */
  DeleteAlertRules(data: DeleteAlertRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAlertRulesResponse>;
  /** 删除 exporter 集成 {@link DeleteExporterIntegrationRequest} {@link DeleteExporterIntegrationResponse} */
  DeleteExporterIntegration(data: DeleteExporterIntegrationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteExporterIntegrationResponse>;
  /** 删除 Grafana 实例 {@link DeleteGrafanaInstanceRequest} {@link DeleteGrafanaInstanceResponse} */
  DeleteGrafanaInstance(data: DeleteGrafanaInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGrafanaInstanceResponse>;
  /** 删除 Grafana 集成配置 {@link DeleteGrafanaIntegrationRequest} {@link DeleteGrafanaIntegrationResponse} */
  DeleteGrafanaIntegration(data: DeleteGrafanaIntegrationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGrafanaIntegrationResponse>;
  /** 删除 Grafana 告警通道 {@link DeleteGrafanaNotificationChannelRequest} {@link DeleteGrafanaNotificationChannelResponse} */
  DeleteGrafanaNotificationChannel(data: DeleteGrafanaNotificationChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGrafanaNotificationChannelResponse>;
  /** 删除告警策略组 {@link DeletePolicyGroupRequest} {@link DeletePolicyGroupResponse} */
  DeletePolicyGroup(data: DeletePolicyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePolicyGroupResponse>;
  /** 删除2.0实例告警策略 {@link DeletePrometheusAlertPolicyRequest} {@link DeletePrometheusAlertPolicyResponse} */
  DeletePrometheusAlertPolicy(data: DeletePrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusAlertPolicyResponse>;
  /** 解除TMP实例的集群关联 {@link DeletePrometheusClusterAgentRequest} {@link DeletePrometheusClusterAgentResponse} */
  DeletePrometheusClusterAgent(data: DeletePrometheusClusterAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusClusterAgentResponse>;
  /** 删除Prometheus配置 {@link DeletePrometheusConfigRequest} {@link DeletePrometheusConfigResponse} */
  DeletePrometheusConfig(data: DeletePrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusConfigResponse>;
  /** 删除聚合实例 {@link DeletePrometheusRecordRuleYamlRequest} {@link DeletePrometheusRecordRuleYamlResponse} */
  DeletePrometheusRecordRuleYaml(data: DeletePrometheusRecordRuleYamlRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusRecordRuleYamlResponse>;
  /** 删除 Prometheus 抓取任务 {@link DeletePrometheusScrapeJobsRequest} {@link DeletePrometheusScrapeJobsResponse} */
  DeletePrometheusScrapeJobs(data: DeletePrometheusScrapeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusScrapeJobsResponse>;
  /** 删除模板实例 {@link DeletePrometheusTempRequest} {@link DeletePrometheusTempResponse} */
  DeletePrometheusTemp(data: DeletePrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusTempResponse>;
  /** 解除模板同步 {@link DeletePrometheusTempSyncRequest} {@link DeletePrometheusTempSyncResponse} */
  DeletePrometheusTempSync(data: DeletePrometheusTempSyncRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusTempSyncResponse>;
  /** 删除预聚合规则 {@link DeleteRecordingRulesRequest} {@link DeleteRecordingRulesResponse} */
  DeleteRecordingRules(data: DeleteRecordingRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordingRulesResponse>;
  /** 删除授权用户 {@link DeleteSSOAccountRequest} {@link DeleteSSOAccountResponse} */
  DeleteSSOAccount(data: DeleteSSOAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSSOAccountResponse>;
  /** 删除服务发现 {@link DeleteServiceDiscoveryRequest} {@link DeleteServiceDiscoveryResponse} */
  DeleteServiceDiscovery(data: DeleteServiceDiscoveryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceDiscoveryResponse>;
  /** 获取平台事件列表 {@link DescribeAccidentEventListRequest} {@link DescribeAccidentEventListResponse} */
  DescribeAccidentEventList(data: DescribeAccidentEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccidentEventListResponse>;
  /** 查询告警事件列表 {@link DescribeAlarmEventsRequest} {@link DescribeAlarmEventsResponse} */
  DescribeAlarmEvents(data: DescribeAlarmEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmEventsResponse>;
  /** 查询告警历史 {@link DescribeAlarmHistoriesRequest} {@link DescribeAlarmHistoriesResponse} */
  DescribeAlarmHistories(data: DescribeAlarmHistoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmHistoriesResponse>;
  /** 查询告警指标列表 {@link DescribeAlarmMetricsRequest} {@link DescribeAlarmMetricsResponse} */
  DescribeAlarmMetrics(data: DescribeAlarmMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmMetricsResponse>;
  /** 查询单个通知模板的详情 {@link DescribeAlarmNoticeRequest} {@link DescribeAlarmNoticeResponse} */
  DescribeAlarmNotice(data: DescribeAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmNoticeResponse>;
  /** 查询账号下所有回调URL列表 {@link DescribeAlarmNoticeCallbacksRequest} {@link DescribeAlarmNoticeCallbacksResponse} */
  DescribeAlarmNoticeCallbacks(data: DescribeAlarmNoticeCallbacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmNoticeCallbacksResponse>;
  /** 查询通知模板列表 {@link DescribeAlarmNoticesRequest} {@link DescribeAlarmNoticesResponse} */
  DescribeAlarmNotices(data: DescribeAlarmNoticesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmNoticesResponse>;
  /** 查询告警策略列表（支持按实例等条件筛选） {@link DescribeAlarmPoliciesRequest} {@link DescribeAlarmPoliciesResponse} */
  DescribeAlarmPolicies(data: DescribeAlarmPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmPoliciesResponse>;
  /** 获取单个告警策略详情 {@link DescribeAlarmPolicyRequest} {@link DescribeAlarmPolicyResponse} */
  DescribeAlarmPolicy(data: DescribeAlarmPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmPolicyResponse>;
  /** 报警规则查询 {@link DescribeAlertRulesRequest} {@link DescribeAlertRulesResponse} */
  DescribeAlertRules(data: DescribeAlertRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlertRulesResponse>;
  /** 查询所有名字空间 {@link DescribeAllNamespacesRequest} {@link DescribeAllNamespacesResponse} */
  DescribeAllNamespaces(data: DescribeAllNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllNamespacesResponse>;
  /** 获取基础指标属性 {@link DescribeBaseMetricsRequest} {@link DescribeBaseMetricsResponse} */
  DescribeBaseMetrics(data: DescribeBaseMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaseMetricsResponse>;
  /** 获取基础告警列表 {@link DescribeBasicAlarmListRequest} {@link DescribeBasicAlarmListResponse} */
  DescribeBasicAlarmList(data: DescribeBasicAlarmListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBasicAlarmListResponse>;
  /** 获取已绑定对象列表 {@link DescribeBindingPolicyObjectListRequest} {@link DescribeBindingPolicyObjectListResponse} */
  DescribeBindingPolicyObjectList(data: DescribeBindingPolicyObjectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindingPolicyObjectListResponse>;
  /** 获取条件模板列表 {@link DescribeConditionsTemplateListRequest} {@link DescribeConditionsTemplateListResponse} */
  DescribeConditionsTemplateList(data: DescribeConditionsTemplateListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConditionsTemplateListResponse>;
  /** 列出 Grafana DNS 配置 {@link DescribeDNSConfigRequest} {@link DescribeDNSConfigResponse} */
  DescribeDNSConfig(data: DescribeDNSConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDNSConfigResponse>;
  /** 查询 exporter 集成列表 {@link DescribeExporterIntegrationsRequest} {@link DescribeExporterIntegrationsResponse} */
  DescribeExporterIntegrations(data: DescribeExporterIntegrationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExporterIntegrationsResponse>;
  /** 列出 Grafana 所有告警通道 {@link DescribeGrafanaChannelsRequest} {@link DescribeGrafanaChannelsResponse} */
  DescribeGrafanaChannels(data: DescribeGrafanaChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGrafanaChannelsResponse>;
  /** 列出 Grafana 的设置 {@link DescribeGrafanaConfigRequest} {@link DescribeGrafanaConfigResponse} */
  DescribeGrafanaConfig(data: DescribeGrafanaConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGrafanaConfigResponse>;
  /** 列出 Grafana 环境变量 {@link DescribeGrafanaEnvironmentsRequest} {@link DescribeGrafanaEnvironmentsResponse} */
  DescribeGrafanaEnvironments(data: DescribeGrafanaEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGrafanaEnvironmentsResponse>;
  /** 列出用户所有的 Grafana 服务 {@link DescribeGrafanaInstancesRequest} {@link DescribeGrafanaInstancesResponse} */
  DescribeGrafanaInstances(data: DescribeGrafanaInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGrafanaInstancesResponse>;
  /** 列出 Grafana 已安装的集成 {@link DescribeGrafanaIntegrationsRequest} {@link DescribeGrafanaIntegrationsResponse} */
  DescribeGrafanaIntegrations(data: DescribeGrafanaIntegrationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGrafanaIntegrationsResponse>;
  /** 列出 Grafana 告警通道 {@link DescribeGrafanaNotificationChannelsRequest} {@link DescribeGrafanaNotificationChannelsResponse} */
  DescribeGrafanaNotificationChannels(data: DescribeGrafanaNotificationChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGrafanaNotificationChannelsResponse>;
  /** 列出 Grafana 白名单 {@link DescribeGrafanaWhiteListRequest} {@link DescribeGrafanaWhiteListResponse} */
  DescribeGrafanaWhiteList(data: DescribeGrafanaWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGrafanaWhiteListResponse>;
  /** 列出实例已安装的插件 {@link DescribeInstalledPluginsRequest} {@link DescribeInstalledPluginsResponse} */
  DescribeInstalledPlugins(data: DescribeInstalledPluginsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstalledPluginsResponse>;
  /** 查询监控类型 {@link DescribeMonitorTypesRequest} {@link DescribeMonitorTypesResponse} */
  DescribeMonitorTypes(data: DescribeMonitorTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorTypesResponse>;
  /** 列出所有 Grafana 插件 {@link DescribePluginOverviewsRequest} {@link DescribePluginOverviewsResponse} */
  DescribePluginOverviews(data?: DescribePluginOverviewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginOverviewsResponse>;
  /** 获取基础告警策略条件 {@link DescribePolicyConditionListRequest} {@link DescribePolicyConditionListResponse} */
  DescribePolicyConditionList(data: DescribePolicyConditionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyConditionListResponse>;
  /** 获取基础策略组详情 {@link DescribePolicyGroupInfoRequest} {@link DescribePolicyGroupInfoResponse} */
  DescribePolicyGroupInfo(data: DescribePolicyGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyGroupInfoResponse>;
  /** 获取基础策略告警组列表 {@link DescribePolicyGroupListRequest} {@link DescribePolicyGroupListResponse} */
  DescribePolicyGroupList(data: DescribePolicyGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyGroupListResponse>;
  /** 获取产品事件列表 {@link DescribeProductEventListRequest} {@link DescribeProductEventListResponse} */
  DescribeProductEventList(data: DescribeProductEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductEventListResponse>;
  /** 查询云产品列表 {@link DescribeProductListRequest} {@link DescribeProductListResponse} */
  DescribeProductList(data: DescribeProductListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductListResponse>;
  /** 获取关联目标集群的实例列表 {@link DescribePrometheusAgentInstancesRequest} {@link DescribePrometheusAgentInstancesResponse} */
  DescribePrometheusAgentInstances(data: DescribePrometheusAgentInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAgentInstancesResponse>;
  /** 列出 Prometheus CVM Agent {@link DescribePrometheusAgentsRequest} {@link DescribePrometheusAgentsResponse} */
  DescribePrometheusAgents(data: DescribePrometheusAgentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAgentsResponse>;
  /** 获取2.0实例告警策略列表 {@link DescribePrometheusAlertPolicyRequest} {@link DescribePrometheusAlertPolicyResponse} */
  DescribePrometheusAlertPolicy(data: DescribePrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAlertPolicyResponse>;
  /** 获取TMP实例关联集群列表 {@link DescribePrometheusClusterAgentsRequest} {@link DescribePrometheusClusterAgentsResponse} */
  DescribePrometheusClusterAgents(data: DescribePrometheusClusterAgentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusClusterAgentsResponse>;
  /** 拉取Prometheus配置 {@link DescribePrometheusConfigRequest} {@link DescribePrometheusConfigResponse} */
  DescribePrometheusConfig(data: DescribePrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusConfigResponse>;
  /** 获得实例级别抓取配置 {@link DescribePrometheusGlobalConfigRequest} {@link DescribePrometheusGlobalConfigResponse} */
  DescribePrometheusGlobalConfig(data: DescribePrometheusGlobalConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusGlobalConfigResponse>;
  /** 查询全局告警通知渠道 {@link DescribePrometheusGlobalNotificationRequest} {@link DescribePrometheusGlobalNotificationResponse} */
  DescribePrometheusGlobalNotification(data: DescribePrometheusGlobalNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusGlobalNotificationResponse>;
  /** 获取TMP实例详情 {@link DescribePrometheusInstanceDetailRequest} {@link DescribePrometheusInstanceDetailResponse} */
  DescribePrometheusInstanceDetail(data: DescribePrometheusInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstanceDetailResponse>;
  /** 获取2.0实例初始化任务状态 {@link DescribePrometheusInstanceInitStatusRequest} {@link DescribePrometheusInstanceInitStatusResponse} */
  DescribePrometheusInstanceInitStatus(data: DescribePrometheusInstanceInitStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstanceInitStatusResponse>;
  /** 查询Prometheus按量实例用量 {@link DescribePrometheusInstanceUsageRequest} {@link DescribePrometheusInstanceUsageResponse} */
  DescribePrometheusInstanceUsage(data: DescribePrometheusInstanceUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstanceUsageResponse>;
  /** 查看 Prometheus 实例列表 {@link DescribePrometheusInstancesRequest} {@link DescribePrometheusInstancesResponse} */
  DescribePrometheusInstances(data?: DescribePrometheusInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstancesResponse>;
  /** 获取2.0实例列表 {@link DescribePrometheusInstancesOverviewRequest} {@link DescribePrometheusInstancesOverviewResponse} */
  DescribePrometheusInstancesOverview(data?: DescribePrometheusInstancesOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstancesOverviewResponse>;
  /** 拉取Prometheus聚合规则yaml列表 {@link DescribePrometheusRecordRuleYamlRequest} {@link DescribePrometheusRecordRuleYamlResponse} */
  DescribePrometheusRecordRuleYaml(data: DescribePrometheusRecordRuleYamlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusRecordRuleYamlResponse>;
  /** 获取聚合规则列表，包含关联集群内的资源 {@link DescribePrometheusRecordRulesRequest} {@link DescribePrometheusRecordRulesResponse} */
  DescribePrometheusRecordRules(data: DescribePrometheusRecordRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusRecordRulesResponse>;
  /** 列出 Prometheus 抓取任务 {@link DescribePrometheusScrapeJobsRequest} {@link DescribePrometheusScrapeJobsResponse} */
  DescribePrometheusScrapeJobs(data: DescribePrometheusScrapeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusScrapeJobsResponse>;
  /** 获取targets信息 {@link DescribePrometheusTargetsTMPRequest} {@link DescribePrometheusTargetsTMPResponse} */
  DescribePrometheusTargetsTMP(data: DescribePrometheusTargetsTMPRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTargetsTMPResponse>;
  /** 拉取模板列表 {@link DescribePrometheusTempRequest} {@link DescribePrometheusTempResponse} */
  DescribePrometheusTemp(data?: DescribePrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTempResponse>;
  /** 获取模板关联实例信息 {@link DescribePrometheusTempSyncRequest} {@link DescribePrometheusTempSyncResponse} */
  DescribePrometheusTempSync(data: DescribePrometheusTempSyncRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTempSyncResponse>;
  /** 列出 Prometheus 服务可用区 {@link DescribePrometheusZonesRequest} {@link DescribePrometheusZonesResponse} */
  DescribePrometheusZones(data?: DescribePrometheusZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusZonesResponse>;
  /** 查询预聚合规则 {@link DescribeRecordingRulesRequest} {@link DescribeRecordingRulesResponse} */
  DescribeRecordingRules(data: DescribeRecordingRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordingRulesResponse>;
  /** 列出授权账号 {@link DescribeSSOAccountRequest} {@link DescribeSSOAccountResponse} */
  DescribeSSOAccount(data: DescribeSSOAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSSOAccountResponse>;
  /** 列出服务发现列表 {@link DescribeServiceDiscoveryRequest} {@link DescribeServiceDiscoveryResponse} */
  DescribeServiceDiscovery(data: DescribeServiceDiscoveryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceDiscoveryResponse>;
  /** 根据维度条件查询监控数据 {@link DescribeStatisticDataRequest} {@link DescribeStatisticDataResponse} */
  DescribeStatisticData(data: DescribeStatisticDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStatisticDataResponse>;
  /** 强制释放 Prometheus 实例 {@link DestroyPrometheusInstanceRequest} {@link DestroyPrometheusInstanceResponse} */
  DestroyPrometheusInstance(data: DestroyPrometheusInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPrometheusInstanceResponse>;
  /** 设置 Grafana 公网访问 {@link EnableGrafanaInternetRequest} {@link EnableGrafanaInternetResponse} */
  EnableGrafanaInternet(data: EnableGrafanaInternetRequest, config?: AxiosRequestConfig): AxiosPromise<EnableGrafanaInternetResponse>;
  /** 设置 Grafana 单点登录 {@link EnableGrafanaSSORequest} {@link EnableGrafanaSSOResponse} */
  EnableGrafanaSSO(data: EnableGrafanaSSORequest, config?: AxiosRequestConfig): AxiosPromise<EnableGrafanaSSOResponse>;
  /** 设置SSO登录是否鉴权 {@link EnableSSOCamCheckRequest} {@link EnableSSOCamCheckResponse} */
  EnableSSOCamCheck(data: EnableSSOCamCheckRequest, config?: AxiosRequestConfig): AxiosPromise<EnableSSOCamCheckResponse>;
  /** 拉取指标监控数据 {@link GetMonitorDataRequest} {@link GetMonitorDataResponse} */
  GetMonitorData(data: GetMonitorDataRequest, config?: AxiosRequestConfig): AxiosPromise<GetMonitorDataResponse>;
  /** 获取 Prometheus Agent 管理相关的命令行 {@link GetPrometheusAgentManagementCommandRequest} {@link GetPrometheusAgentManagementCommandResponse} */
  GetPrometheusAgentManagementCommand(data: GetPrometheusAgentManagementCommandRequest, config?: AxiosRequestConfig): AxiosPromise<GetPrometheusAgentManagementCommandResponse>;
  /** 安装 Grafana Plugin {@link InstallPluginsRequest} {@link InstallPluginsResponse} */
  InstallPlugins(data: InstallPluginsRequest, config?: AxiosRequestConfig): AxiosPromise<InstallPluginsResponse>;
  /** 修改通知模板 {@link ModifyAlarmNoticeRequest} {@link ModifyAlarmNoticeResponse} */
  ModifyAlarmNotice(data: ModifyAlarmNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmNoticeResponse>;
  /** 修改告警策略触发条件 {@link ModifyAlarmPolicyConditionRequest} {@link ModifyAlarmPolicyConditionResponse} */
  ModifyAlarmPolicyCondition(data: ModifyAlarmPolicyConditionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmPolicyConditionResponse>;
  /** 修改告警策略基本信息 {@link ModifyAlarmPolicyInfoRequest} {@link ModifyAlarmPolicyInfoResponse} */
  ModifyAlarmPolicyInfo(data: ModifyAlarmPolicyInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmPolicyInfoResponse>;
  /** 修改告警策略绑定的告警通知模板 {@link ModifyAlarmPolicyNoticeRequest} {@link ModifyAlarmPolicyNoticeResponse} */
  ModifyAlarmPolicyNotice(data: ModifyAlarmPolicyNoticeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmPolicyNoticeResponse>;
  /** 启停告警策略 {@link ModifyAlarmPolicyStatusRequest} {@link ModifyAlarmPolicyStatusResponse} */
  ModifyAlarmPolicyStatus(data: ModifyAlarmPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmPolicyStatusResponse>;
  /** 修改告警策略的触发任务 {@link ModifyAlarmPolicyTasksRequest} {@link ModifyAlarmPolicyTasksResponse} */
  ModifyAlarmPolicyTasks(data: ModifyAlarmPolicyTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmPolicyTasksResponse>;
  /** 修改告警接收人 {@link ModifyAlarmReceiversRequest} {@link ModifyAlarmReceiversResponse} */
  ModifyAlarmReceivers(data: ModifyAlarmReceiversRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmReceiversResponse>;
  /** 修改 Grafana 实例属性 {@link ModifyGrafanaInstanceRequest} {@link ModifyGrafanaInstanceResponse} */
  ModifyGrafanaInstance(data: ModifyGrafanaInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGrafanaInstanceResponse>;
  /** 更新策略组 {@link ModifyPolicyGroupRequest} {@link ModifyPolicyGroupResponse} */
  ModifyPolicyGroup(data: ModifyPolicyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPolicyGroupResponse>;
  /** 修改被关联集群的external labels {@link ModifyPrometheusAgentExternalLabelsRequest} {@link ModifyPrometheusAgentExternalLabelsResponse} */
  ModifyPrometheusAgentExternalLabels(data: ModifyPrometheusAgentExternalLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusAgentExternalLabelsResponse>;
  /** 修改2.0实例告警策略 {@link ModifyPrometheusAlertPolicyRequest} {@link ModifyPrometheusAlertPolicyResponse} */
  ModifyPrometheusAlertPolicy(data: ModifyPrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusAlertPolicyResponse>;
  /** 修改prometheus配置 {@link ModifyPrometheusConfigRequest} {@link ModifyPrometheusConfigResponse} */
  ModifyPrometheusConfig(data: ModifyPrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusConfigResponse>;
  /** 修改全局告警通知渠道 {@link ModifyPrometheusGlobalNotificationRequest} {@link ModifyPrometheusGlobalNotificationResponse} */
  ModifyPrometheusGlobalNotification(data: ModifyPrometheusGlobalNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusGlobalNotificationResponse>;
  /** 修改 Prometheus 实例相关属性 {@link ModifyPrometheusInstanceAttributesRequest} {@link ModifyPrometheusInstanceAttributesResponse} */
  ModifyPrometheusInstanceAttributes(data: ModifyPrometheusInstanceAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusInstanceAttributesResponse>;
  /** 通过yaml的方式修改Prometheus聚合实例 {@link ModifyPrometheusRecordRuleYamlRequest} {@link ModifyPrometheusRecordRuleYamlResponse} */
  ModifyPrometheusRecordRuleYaml(data: ModifyPrometheusRecordRuleYamlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusRecordRuleYamlResponse>;
  /** 修改模板实例 {@link ModifyPrometheusTempRequest} {@link ModifyPrometheusTempResponse} */
  ModifyPrometheusTemp(data: ModifyPrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusTempResponse>;
  /** 自定义监控上报数据 {@link PutMonitorDataRequest} {@link PutMonitorDataResponse} */
  PutMonitorData(data: PutMonitorDataRequest, config?: AxiosRequestConfig): AxiosPromise<PutMonitorDataResponse>;
  /** 恢复 Grafana 实例 {@link ResumeGrafanaInstanceRequest} {@link ResumeGrafanaInstanceResponse} */
  ResumeGrafanaInstance(data: ResumeGrafanaInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeGrafanaInstanceResponse>;
  /** 初始化TMP实例 {@link RunPrometheusInstanceRequest} {@link RunPrometheusInstanceResponse} */
  RunPrometheusInstance(data: RunPrometheusInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RunPrometheusInstanceResponse>;
  /** 发送自定义消息告警 {@link SendCustomAlarmMsgRequest} {@link SendCustomAlarmMsgResponse} */
  SendCustomAlarmMsg(data: SendCustomAlarmMsgRequest, config?: AxiosRequestConfig): AxiosPromise<SendCustomAlarmMsgResponse>;
  /** 设为默认告警策略 {@link SetDefaultAlarmPolicyRequest} {@link SetDefaultAlarmPolicyResponse} */
  SetDefaultAlarmPolicy(data: SetDefaultAlarmPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<SetDefaultAlarmPolicyResponse>;
  /** 同步模板 {@link SyncPrometheusTempRequest} {@link SyncPrometheusTempResponse} */
  SyncPrometheusTemp(data: SyncPrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<SyncPrometheusTempResponse>;
  /** 销毁按量 Prometheus 实例 {@link TerminatePrometheusInstancesRequest} {@link TerminatePrometheusInstancesResponse} */
  TerminatePrometheusInstances(data: TerminatePrometheusInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminatePrometheusInstancesResponse>;
  /** 删除全部的关联对象 {@link UnBindingAllPolicyObjectRequest} {@link UnBindingAllPolicyObjectResponse} */
  UnBindingAllPolicyObject(data: UnBindingAllPolicyObjectRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindingAllPolicyObjectResponse>;
  /** 删除策略的关联对象 {@link UnBindingPolicyObjectRequest} {@link UnBindingPolicyObjectResponse} */
  UnBindingPolicyObject(data: UnBindingPolicyObjectRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindingPolicyObjectResponse>;
  /** 解除实例绑定的 Grafana 可视化实例 {@link UnbindPrometheusManagedGrafanaRequest} {@link UnbindPrometheusManagedGrafanaResponse} */
  UnbindPrometheusManagedGrafana(data: UnbindPrometheusManagedGrafanaRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindPrometheusManagedGrafanaResponse>;
  /** 删除 Grafana Dashboard {@link UninstallGrafanaDashboardRequest} {@link UninstallGrafanaDashboardResponse} */
  UninstallGrafanaDashboard(data: UninstallGrafanaDashboardRequest, config?: AxiosRequestConfig): AxiosPromise<UninstallGrafanaDashboardResponse>;
  /** 删除已安装的插件 {@link UninstallGrafanaPluginsRequest} {@link UninstallGrafanaPluginsResponse} */
  UninstallGrafanaPlugins(data: UninstallGrafanaPluginsRequest, config?: AxiosRequestConfig): AxiosPromise<UninstallGrafanaPluginsResponse>;
  /** 更新报警规则 {@link UpdateAlertRuleRequest} {@link UpdateAlertRuleResponse} */
  UpdateAlertRule(data: UpdateAlertRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAlertRuleResponse>;
  /** 更新报警策略状态 {@link UpdateAlertRuleStateRequest} {@link UpdateAlertRuleStateResponse} */
  UpdateAlertRuleState(data: UpdateAlertRuleStateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAlertRuleStateResponse>;
  /** 更新 Grafana 的 DNS 配置 {@link UpdateDNSConfigRequest} {@link UpdateDNSConfigResponse} */
  UpdateDNSConfig(data: UpdateDNSConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDNSConfigResponse>;
  /** 更新 exporter 集成配置 {@link UpdateExporterIntegrationRequest} {@link UpdateExporterIntegrationResponse} */
  UpdateExporterIntegration(data: UpdateExporterIntegrationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateExporterIntegrationResponse>;
  /** 更新 Grafana 配置 {@link UpdateGrafanaConfigRequest} {@link UpdateGrafanaConfigResponse} */
  UpdateGrafanaConfig(data: UpdateGrafanaConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGrafanaConfigResponse>;
  /** 更新 Grafana 环境变量 {@link UpdateGrafanaEnvironmentsRequest} {@link UpdateGrafanaEnvironmentsResponse} */
  UpdateGrafanaEnvironments(data: UpdateGrafanaEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGrafanaEnvironmentsResponse>;
  /** 更新 Grafana 集成配置 {@link UpdateGrafanaIntegrationRequest} {@link UpdateGrafanaIntegrationResponse} */
  UpdateGrafanaIntegration(data: UpdateGrafanaIntegrationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGrafanaIntegrationResponse>;
  /** 更新 Grafana 告警通道 {@link UpdateGrafanaNotificationChannelRequest} {@link UpdateGrafanaNotificationChannelResponse} */
  UpdateGrafanaNotificationChannel(data: UpdateGrafanaNotificationChannelRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGrafanaNotificationChannelResponse>;
  /** 更新 Grafana 白名单 {@link UpdateGrafanaWhiteListRequest} {@link UpdateGrafanaWhiteListResponse} */
  UpdateGrafanaWhiteList(data: UpdateGrafanaWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGrafanaWhiteListResponse>;
  /** 更新 Prometheus CVM Agent 状态 {@link UpdatePrometheusAgentStatusRequest} {@link UpdatePrometheusAgentStatusResponse} */
  UpdatePrometheusAgentStatus(data: UpdatePrometheusAgentStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePrometheusAgentStatusResponse>;
  /** 更新 Prometheus 抓取任务 {@link UpdatePrometheusScrapeJobRequest} {@link UpdatePrometheusScrapeJobResponse} */
  UpdatePrometheusScrapeJob(data: UpdatePrometheusScrapeJobRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePrometheusScrapeJobResponse>;
  /** 更新预聚合规则 {@link UpdateRecordingRuleRequest} {@link UpdateRecordingRuleResponse} */
  UpdateRecordingRule(data: UpdateRecordingRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRecordingRuleResponse>;
  /** 更新账号信息 {@link UpdateSSOAccountRequest} {@link UpdateSSOAccountResponse} */
  UpdateSSOAccount(data: UpdateSSOAccountRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSSOAccountResponse>;
  /** 更新服务发现 {@link UpdateServiceDiscoveryRequest} {@link UpdateServiceDiscoveryResponse} */
  UpdateServiceDiscovery(data: UpdateServiceDiscoveryRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateServiceDiscoveryResponse>;
  /** 升级 Grafana Dashboard {@link UpgradeGrafanaDashboardRequest} {@link UpgradeGrafanaDashboardResponse} */
  UpgradeGrafanaDashboard(data: UpgradeGrafanaDashboardRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeGrafanaDashboardResponse>;
  /** 升级 Grafana 实例 {@link UpgradeGrafanaInstanceRequest} {@link UpgradeGrafanaInstanceResponse} */
  UpgradeGrafanaInstance(data: UpgradeGrafanaInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeGrafanaInstanceResponse>;
}

export declare type Versions = ["2018-07-24"];

export default Monitor;
