/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 监控数据点 */
declare interface DataPoint {
  /** 实例对象维度组合 */
  Dimensions?: Dimension[];
  /** 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了 */
  Timestamps?: number[];
  /** 监控值数组，该数组和Timestamps一一对应 */
  Values?: number[];
}

/** 实例对象的维度组合 */
declare interface Dimension {
  /** 实例维度名称 */
  Name: string | null;
  /** 实例维度值 */
  Value: string | null;
}

/** 计算算子 */
declare interface Expr {
  /** 算子名称 */
  Function?: string;
  /** 算子入参值 */
  N?: number;
}

/** 实例维度组合数组 */
declare interface Instance {
  /** 实例的维度组合 */
  Dimensions: Dimension[] | null;
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
  /** 计算算子 */
  Expr?: Expr;
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

declare namespace V20180724 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-07-24' } }

  /** 策略过滤条件 */
  interface AlarmConditionFilter {
    /** 类型 */
    Type?: string | null;
    /** 表达式 */
    Expression?: string | null;
    /** 过滤条件 */
    Dimensions?: string | null;
  }

  /** 告警事件 */
  interface AlarmEvent {
    /** 事件名 */
    EventName: string;
    /** 展示的事件名 */
    Description: string;
    /** 告警策略类型 */
    Namespace: string;
  }

  /** 聚合条件 */
  interface AlarmGroupByItem {
    /** Item Id */
    Id?: string | null;
    /** 名称 */
    Name?: string | null;
  }

  /** 通知模板ID及通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警 */
  interface AlarmHierarchicalNotice {
    /** 通知模板ID */
    NoticeId?: string | null;
    /** 通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警 */
    Classification?: string[] | null;
    /** 模板对应的策略id */
    PolicyId?: string | null;
  }

  /** 告警分级阈值配置 */
  interface AlarmHierarchicalValue {
    /** 提醒等级阈值 */
    Remind?: string | null;
    /** 警告等级阈值 */
    Warn?: string | null;
    /** 严重等级阈值 */
    Serious?: string | null;
  }

  /** 告警历史数据 */
  interface AlarmHistory {
    /** 告警历史Id */
    AlarmId?: string;
    /** 监控类型 */
    MonitorType?: string;
    /** 策略类型 */
    Namespace?: string;
    /** 告警对象 */
    AlarmObject?: string;
    /** 告警内容 */
    Content?: string;
    /** 时间戳，首次出现时间 */
    FirstOccurTime?: number;
    /** 时间戳，最后出现时间 */
    LastOccurTime?: number;
    /** 告警状态，ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足 */
    AlarmStatus?: string;
    /** 告警策略 Id */
    PolicyId?: string;
    /** 策略名称 */
    PolicyName?: string;
    /** 基础产品告警的告警对象所属网络 */
    VPC?: string;
    /** 项目 Id */
    ProjectId?: number;
    /** 项目名字 */
    ProjectName?: string;
    /** 告警对象所属实例组 */
    InstanceGroup?: InstanceGroups[];
    /** 接收人列表 */
    ReceiverUids?: number[];
    /** 接收组列表 */
    ReceiverGroups?: number[];
    /** 告警渠道列表 SMS=短信 EMAIL=邮件 CALL=电话 WECHAT=微信 */
    NoticeWays?: string[];
    /** 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID */
    OriginId?: string;
    /** 告警类型 */
    AlarmType?: string;
    /** 事件Id */
    EventId?: number;
    /** 地域 */
    Region?: string;
    /** 策略是否存在 0=不存在 1=存在 */
    PolicyExists?: number;
    /** 指标信息 */
    MetricsInfo?: AlarmHistoryMetric[] | null;
    /** 告警实例的维度信息 */
    Dimensions?: string | null;
    /** 告警等级 */
    AlarmLevel?: string | null;
    /** 是否有配置告警屏蔽规则 */
    ShieldFlag?: number | null;
    /** 屏蔽类型（英文） */
    AlarmShieldingType?: string | null;
    /** 屏蔽时间（英文） */
    AlarmShieldingTime?: string | null;
    /** 屏蔽类型（中文） */
    AlarmShieldingShowType?: string | null;
    /** 屏蔽时间（中文） */
    AlarmShieldingShowTime?: string | null;
    /** 屏蔽原因 */
    AlarmShieldReason?: string | null;
    /** 告警实例的维度信息 */
    InternalDimensions?: string | null;
    /** 指标名称 */
    MetricName?: string | null;
    /** 策略是否有权限 */
    PolicyPermissions?: number | null;
  }

  /** 告警历史的指标信息 */
  interface AlarmHistoryMetric {
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
  interface AlarmNotice {
    /** 告警通知模板 ID */
    Id?: string | null;
    /** 告警通知模板名称 */
    Name?: string | null;
    /** 上次修改时间 */
    UpdatedAt?: string | null;
    /** 上次修改人 */
    UpdatedBy?: string | null;
    /** 告警通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=全部通知 */
    NoticeType?: string | null;
    /** 用户通知列表 */
    UserNotices?: UserNotice[] | null;
    /** 回调通知列表 */
    URLNotices?: URLNotice[] | null;
    /** 是否是系统预设通知模板 0=否 1=是 */
    IsPreset?: number | null;
    /** 通知语言 zh-CN=中文 en-US=英文 */
    NoticeLanguage?: string | null;
    /** 告警通知模板绑定的告警策略ID列表 */
    PolicyIds?: string[] | null;
    /** 后台 amp consumer id */
    AMPConsumerId?: string | null;
    /** 推送cls渠道 */
    CLSNotices?: CLSNotice[] | null;
    /** 通知模板绑定的标签 */
    Tags?: Tag[] | null;
  }

  /** 告警策略详情 */
  interface AlarmPolicy {
    /** 告警策略 ID */
    PolicyId?: string | null;
    /** 告警策略名称 */
    PolicyName?: string | null;
    /** 备注信息 */
    Remark?: string | null;
    /** 监控类型 MT_QCE=云产品监控 */
    MonitorType?: string | null;
    /** 启停状态 0=停用 1=启用 */
    Enable?: number | null;
    /** 策略组绑定的实例数 */
    UseSum?: number | null;
    /** 项目 Id -1=无项目 0=默认项目 */
    ProjectId?: number | null;
    /** 项目名 */
    ProjectName?: string | null;
    /** 告警策略类型 */
    Namespace?: string | null;
    /** 触发条件模板 Id */
    ConditionTemplateId?: string | null;
    /** 指标触发条件 */
    Condition?: AlarmPolicyCondition | null;
    /** 事件触发条件 */
    EventCondition?: AlarmPolicyEventCondition | null;
    /** 通知规则 id 列表 */
    NoticeIds?: string[] | null;
    /** 通知规则 列表 */
    Notices?: AlarmNotice[] | null;
    /** 触发任务列表 */
    TriggerTasks?: AlarmPolicyTriggerTask[] | null;
    /** 模板策略组 */
    ConditionsTemp?: ConditionsTemp | null;
    /** 最后编辑的用户uin */
    LastEditUin?: string | null;
    /** 更新时间 */
    UpdateTime?: number | null;
    /** 创建时间 */
    InsertTime?: number | null;
    /** 地域 */
    Region?: string[] | null;
    /** namespace显示名字 */
    NamespaceShowName?: string | null;
    /** 是否默认策略，1是，0否 */
    IsDefault?: number | null;
    /** 能否设置默认策略，1是，0否 */
    CanSetDefault?: number | null;
    /** 实例分组ID */
    InstanceGroupId?: number | null;
    /** 实例分组总实例数 */
    InstanceSum?: number | null;
    /** 实例分组名称 */
    InstanceGroupName?: string | null;
    /** 触发条件类型 STATIC=静态阈值 DYNAMIC=动态类型 */
    RuleType?: string | null;
    /** 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID */
    OriginId?: string | null;
    /** 标签 */
    TagInstances?: TagInstance[] | null;
    /** 过滤条件 */
    Filter?: AlarmConditionFilter | null;
    /** 聚合条件 */
    GroupBy?: AlarmGroupByItem[] | null;
    /** 策略关联的过滤维度信息 */
    FilterDimensionsParam?: string | null;
    /** 是否为一键告警策略 */
    IsOneClick?: number | null;
    /** 一键告警策略是否开启 */
    OneClickStatus?: number | null;
    /** 高级指标数量 */
    AdvancedMetricNumber?: number | null;
    /** 策略是否是全部对象策略 */
    IsBindAll?: number | null;
    /** 策略标签 */
    Tags?: Tag[] | null;
    /** 是否支持告警标签 */
    IsSupportAlarmTag?: number | null;
    /** 多标签交/并集关系 */
    TagOperation?: string | null;
    /** 通知模板绑定内容模板信息 */
    NoticeTmplBindInfos?: NoticeContentTmplBindInfo[];
    /** 模板通知的等级 */
    HierarchicalNotices?: AlarmHierarchicalNotice[] | null;
    /** 通知模板绑定内容模板信息，同NoticeTmplBindInfos */
    NoticeContentTmplBindInfos?: NoticeContentTmplBindInfo[] | null;
    /** 预设配置id */
    PredefinedConfigID?: string | null;
  }

  /** 告警策略指标触发条件 */
  interface AlarmPolicyCondition {
    /** 告警触发条件的判断方式. 0: 任意; 1: 全部; 2: 复合. 当取值为2的时候为复合告警，与参数 ComplexExpression 配合使用. */
    IsUnionRule: number | null;
    /** 告警触发条件列表 */
    Rules: AlarmPolicyRule[] | null;
    /** 复合告警触发条件的判断表达式，当 IsUnionRule 取值为2的时候有效. 其作用是描述多个触发条件需要满足表达式求值为True时才算是满足告警条件. */
    ComplexExpression?: string | null;
  }

  /** 告警策略事件触发条件 */
  interface AlarmPolicyEventCondition {
    /** 告警触发条件列表 */
    Rules: AlarmPolicyRule[] | null;
  }

  /** 告警策略过滤条件 */
  interface AlarmPolicyFilter {
    /** 过滤条件类型 DIMENSION=使用 Dimensions 做过滤 */
    Type: string | null;
    /** AlarmPolicyDimension 二维数组序列化后的json字符串，一维数组之间互为或关系，一维数组内的元素互为与关系 */
    Dimensions?: string | null;
  }

  /** 告警策略触发条件 */
  interface AlarmPolicyRule {
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
    /** 是否延迟指标 */
    IsLatenessMetric?: number | null;
  }

  /** 告警策略触发任务 */
  interface AlarmPolicyTriggerTask {
    /** 触发任务类型 AS=弹性伸缩 */
    Type: string | null;
    /** 用 json 表示配置信息 {"Key1":"Value1","Key2":"Value2"} */
    TaskConfig: string | null;
  }

  /** url鉴权 */
  interface BasicAuth {
    /** 用户名 */
    UserName?: string | null;
    /** 密码 */
    Password?: string | null;
  }

  /** 策略绑定实例维度信息 */
  interface BindingPolicyObjectDimension {
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
  interface CLSNotice {
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
  interface CommonNamespace {
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
  interface CommonNamespaceNew {
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
  interface Condition {
    /** 告警通知频率 */
    AlarmNotifyPeriod?: number;
    /** 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警） */
    AlarmNotifyType?: number;
    /** 检测方式 */
    CalcType?: string | null;
    /** 检测值 */
    CalcValue?: string | null;
    /** 持续时间，单位秒 */
    ContinueTime?: string | null;
    /** 指标ID */
    MetricID?: number;
    /** 指标展示名称（对外） */
    MetricDisplayName?: string;
    /** 周期 */
    Period?: number;
    /** 规则ID */
    RuleID?: number;
    /** 指标单位 */
    Unit?: string;
    /** 是否为高级指标，0：否；1：是 */
    IsAdvanced?: number;
    /** 是否开通高级指标，0：否；1：是 */
    IsOpen?: number;
    /** 产品ID */
    ProductId?: string | null;
    /** 告警分级阈值配置 */
    HierarchicalValue?: AlarmHierarchicalValue | null;
    /** 指标类型，用于区分动态指标 */
    RuleType?: string | null;
  }

  /** 告警条件模板 */
  interface ConditionsTemp {
    /** 模板名称 */
    TemplateName: string | null;
    /** 指标触发条件 */
    Condition: AlarmPolicyCondition | null;
    /** 事件触发条件 */
    EventCondition: AlarmPolicyEventCondition | null;
  }

  /** 创建策略传入的阈值告警条件 */
  interface CreatePolicyGroupCondition {
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
  interface CreatePolicyGroupEventCondition {
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
  interface DataPoint {
    /** 实例对象维度组合 */
    Dimensions?: Dimension[];
    /** 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了 */
    Timestamps?: number[];
    /** 监控值数组，该数组和Timestamps一一对应 */
    Values?: number[];
    /** 监控值数组，该数组和Timestamps一一对应 */
    MaxValues?: number[] | null;
    /** 监控值数组，该数组和Timestamps一一对应 */
    MinValues?: number[] | null;
    /** 监控值数组，该数组和Timestamps一一对应 */
    AvgValues?: number[] | null;
  }

  /** DescribeAccidentEventList接口的出参类型 */
  interface DescribeAccidentEventListAlarms {
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

  /** DescribeAlarmSmsQuota接口的配额信息 */
  interface DescribeAlarmSmsQuotaQuota {
    /** 配额类型 */
    Type: string;
    /** 配额名称 */
    Name: string;
    /** 免费配额剩余量 */
    FreeLeft: number;
    /** 付费配额剩余量 */
    PurchaseLeft: number;
    /** 已使用量 */
    Used: number;
  }

  /** DescribeBasicAlarmList返回的Alarms */
  interface DescribeBasicAlarmListAlarms {
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
  interface DescribeBindingPolicyObjectListDimension {
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
  interface DescribeBindingPolicyObjectListInstance {
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
  interface DescribeBindingPolicyObjectListInstanceGroup {
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
  interface DescribePolicyConditionListCondition {
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
  interface DescribePolicyConditionListConfigManual {
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
  interface DescribePolicyConditionListConfigManualCalcType {
    /** CalcType 取值 */
    Keys: number[] | null;
    /** 是否必须 */
    Need: boolean;
  }

  /** DescribePolicyConditionList.ConfigManual.CalcValue */
  interface DescribePolicyConditionListConfigManualCalcValue {
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
  interface DescribePolicyConditionListConfigManualContinueTime {
    /** 默认持续时间，单位：秒 */
    Default: number | null;
    /** 可选持续时间，单位：秒 */
    Keys: number[] | null;
    /** 是否必须 */
    Need: boolean;
  }

  /** DescribePolicyConditionList.ConfigManual.Period */
  interface DescribePolicyConditionListConfigManualPeriod {
    /** 默认周期，单位：秒 */
    Default: number | null;
    /** 可选周期，单位：秒 */
    Keys: number[] | null;
    /** 是否必须 */
    Need: boolean;
  }

  /** DescribePolicyConditionList.ConfigManual.PeriodNum */
  interface DescribePolicyConditionListConfigManualPeriodNum {
    /** 默认周期数 */
    Default: number | null;
    /** 可选周期数 */
    Keys: number[] | null;
    /** 是否必须 */
    Need: boolean;
  }

  /** DescribePolicyConditionList.ConfigManual.StatType */
  interface DescribePolicyConditionListConfigManualStatType {
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
  interface DescribePolicyConditionListEventMetric {
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
  interface DescribePolicyConditionListMetric {
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
  interface DescribePolicyConditionListResponseDeprecatingInfo {
    /** 是否隐藏 */
    Hidden?: boolean | null;
    /** 新视图名称 */
    NewViewNames?: string[] | null;
    /** 描述 */
    Description?: string | null;
  }

  /** 查询策略输出的用户回调信息 */
  interface DescribePolicyGroupInfoCallback {
    /** 用户回调接口地址 */
    CallbackUrl: string;
    /** 用户回调接口状态，0表示未验证，1表示已验证，2表示存在url但没有通过验证 */
    ValidFlag: number;
    /** 用户回调接口验证码 */
    VerifyCode: string;
  }

  /** 查询策略输出的阈值告警条件 */
  interface DescribePolicyGroupInfoCondition {
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
  interface DescribePolicyGroupInfoConditionTpl {
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
  interface DescribePolicyGroupInfoEventCondition {
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
  interface DescribePolicyGroupInfoReceiverInfo {
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
  interface DescribePolicyGroupListGroup {
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
  interface DescribePolicyGroupListGroupInstanceGroup {
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
  interface DescribeProductEventListDimensions {
    /** 维度名 */
    Name: string;
    /** 维度值 */
    Value: string;
  }

  /** DescribeProductEventList返回的Events */
  interface DescribeProductEventListEvents {
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
  interface DescribeProductEventListEventsDimensions {
    /** 维度名（英文） */
    Key: string | null;
    /** 维度名（中文） */
    Name: string | null;
    /** 维度值 */
    Value: string | null;
  }

  /** DescribeProductEventList返回的Events里的GroupInfo */
  interface DescribeProductEventListEventsGroupInfo {
    /** 策略ID */
    GroupId: number | null;
    /** 策略名 */
    GroupName: string | null;
  }

  /** DescribeProductEventList返回的OverView对象 */
  interface DescribeProductEventListOverView {
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
  interface Dimension {
    /** 实例维度名称 */
    Name: string | null;
    /** 实例维度值 */
    Value: string | null;
  }

  /** 策略类型的维度信息 */
  interface DimensionNew {
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
  interface DimensionsDesc {
    /** 维度名数组 */
    Dimensions: string[];
  }

  /** 事件告警条件 */
  interface EventCondition {
    /** 告警通知频率 */
    AlarmNotifyPeriod?: string | null;
    /** 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警） */
    AlarmNotifyType?: string | null;
    /** 事件ID */
    EventID?: string;
    /** 事件展示名称（对外） */
    EventDisplayName?: string;
    /** 规则ID */
    RuleID?: string;
    /** 指标名 */
    MetricName?: string | null;
  }

  /** 查询过滤参数 */
  interface Filter {
    /** 过滤方式（=, !=, in） */
    Type?: string;
    /** 过滤维度名 */
    Key?: string;
    /** 过滤值，in过滤方式用逗号分割多个值 */
    Value?: string;
    /** 过滤条件名称 */
    Name?: string;
    /** 过滤条件取值范围 */
    Values?: string[];
  }

  /** Grafana可视化服务 授权账户信息 */
  interface GrafanaAccountInfo {
    /** 用户账号ID */
    UserId?: string;
    /** 用户权限 */
    Role?: GrafanaAccountRole[];
    /** 备注 */
    Notes?: string;
    /** 创建时间 */
    CreateAt?: string;
    /** 实例 ID */
    InstanceId?: string | null;
    /** 用户主账号 UIN */
    Uin?: string;
  }

  /** Grafana可视化服务 账号权限 */
  interface GrafanaAccountRole {
    /** 组织 */
    Organization?: string;
    /** 权限(Admin、Editor、Viewer) */
    Role?: string;
  }

  /** Grafana 告警渠道 */
  interface GrafanaChannel {
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
  interface GrafanaInstanceInfo {
    /** 实例名 */
    InstanceName?: string;
    /** 实例 ID */
    InstanceId?: string;
    /** 地域 */
    Region?: string;
    /** VPC ID */
    VpcId?: string;
    /** 子网 ID 数组 */
    SubnetIds?: string[];
    /** Grafana 公网地址 */
    InternetUrl?: string;
    /** Grafana 内网地址 */
    InternalUrl?: string;
    /** 创建时间 */
    CreatedAt?: string;
    /** 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:停机中； 6:已停机； 7: 已删除） */
    InstanceStatus?: number;
    /** 实例的标签 */
    TagSpecification?: PrometheusTag[];
    /** 实例的可用区 */
    Zone?: string;
    /** 计费模式（1:包年包月） */
    InstanceChargeType?: number;
    /** VPC 名称 */
    VpcName?: string;
    /** 子网名称 */
    SubnetName?: string;
    /** 地域 ID */
    RegionId?: number;
    /** 可访问此实例的完整 URL */
    RootUrl?: string;
    /** 是否开启 SSO */
    EnableSSO?: boolean;
    /** 版本号 */
    Version?: string;
    /** SSO登录时是否开启cam鉴权 */
    EnableSSOCamCheck?: boolean;
  }

  /** Grafana 集成实例配置 */
  interface GrafanaIntegrationConfig {
    /** 集成 ID */
    IntegrationId?: string;
    /** 集成类型 */
    Kind?: string;
    /** 集成内容 */
    Content?: string;
    /** 集成描述 */
    Description?: string;
    /** Grafana 跳转地址(目前未使用，默认为空) */
    GrafanaURL?: string | null;
  }

  /** Grafana 告警渠道 */
  interface GrafanaNotificationChannel {
    /** 渠道 ID */
    ChannelId?: string;
    /** 渠道名 */
    ChannelName?: string;
    /** 告警通道模板 ID 数组 */
    Receivers?: string[];
    /** 创建时间 */
    CreatedAt?: string;
    /** 更新时间 */
    UpdatedAt?: string;
    /** 默认生效组织，已废弃，请使用 OrganizationIds */
    OrgId?: string;
    /** 额外生效组织，已废弃，请使用 OrganizationIds */
    ExtraOrgIds?: string[] | null;
    /** 生效组织，已废弃，请使用 OrganizationIds */
    OrgIds?: string[] | null;
    /** 告警渠道的所有生效组织 */
    OrganizationIds?: string[] | null;
  }

  /** Grafana 插件 */
  interface GrafanaPlugin {
    /** Grafana 插件 ID */
    PluginId: string;
    /** Grafana 插件版本 */
    Version: string | null;
  }

  /** 实例维度组合数组 */
  interface Instance {
    /** 实例的维度组合 */
    Dimensions: Dimension[];
  }

  /** DescribeBasicAlarmList返回的Alarms里的InstanceGroup */
  interface InstanceGroup {
    /** 实例组ID */
    InstanceGroupId: number | null;
    /** 实例组名 */
    InstanceGroupName: string | null;
  }

  /** 告警对象所属实例组 */
  interface InstanceGroups {
    /** 实例组 Id */
    Id: number;
    /** 实例组名称 */
    Name: string;
  }

  /** export 集成配置 */
  interface IntegrationConfiguration {
    /** 名字 */
    Name?: string;
    /** 类型 */
    Kind?: string;
    /** 内容 */
    Content?: string;
    /** 状态 */
    Status?: number;
    /** 实例类型 */
    Category?: string;
    /** 实例描述 */
    InstanceDesc?: string;
    /** dashboard 的 URL */
    GrafanaDashboardURL?: string;
  }

  /** prometheus集成指标详情 */
  interface IntegrationMetric {
    /** 指标名 */
    MetricName?: string;
    /** 指标名称 */
    Name?: string;
    /** 统计类型 */
    MetricType?: string;
    /** 单位 */
    Unit?: string;
    /** 指标详细描述 */
    Description?: string;
  }

  /** prometheus集成分组指标 */
  interface IntegrationMetricGroup {
    /** 分组标识 */
    Group?: string;
    /** 指标详情 */
    Metrics?: IntegrationMetric[];
    /** 分组名称 */
    GroupName?: string;
  }

  /** k8s中标签，一般以数组的方式存在 */
  interface Label {
    /** map表中的Name */
    Name: string;
    /** map表中的Value */
    Value: string;
  }

  /** 日志告警请求信息 */
  interface LogAlarmReq {
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
  interface LogFilterInfo {
    /** 字段名 */
    Key: string;
    /** 比较符号 */
    Operator: string;
    /** 字段值 */
    Value: string;
  }

  /** Prometheus Agent 管理命令行 */
  interface ManagementCommand {
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
  interface Metric {
    /** 告警策略类型 */
    Namespace?: string;
    /** 指标名 */
    MetricName?: string;
    /** 指标展示名 */
    Description?: string;
    /** 最小值 */
    Min?: number;
    /** 最大值 */
    Max?: number;
    /** 维度列表 */
    Dimensions?: string[];
    /** 单位 */
    Unit?: string;
    /** 指标配置 */
    MetricConfig?: MetricConfig | null;
    /** 是否为高级指标。1是 0否 */
    IsAdvanced?: number | null;
    /** 高级指标是否开通。1是 0否 */
    IsOpen?: number | null;
    /** 集成中心产品ID */
    ProductId?: number | null;
    /** 匹配运算符 */
    Operators?: Operator[] | null;
    /** 指标触发 */
    Periods?: number[] | null;
    /** 是否延迟指标 */
    IsLatenessMetric?: number | null;
  }

  /** 指标配置 */
  interface MetricConfig {
    /** 允许使用的运算符 */
    Operator: string[];
    /** 允许配置的数据周期，以秒为单位 */
    Period: number[];
    /** 允许配置的持续周期个数 */
    ContinuePeriod: number[];
  }

  /** DescribeMetricData接口出参 */
  interface MetricData {
    /** 指标名 */
    MetricName: string;
    /** 监控数据点 */
    Points: MetricDataPoint[];
  }

  /** DescribeMetricData出参 */
  interface MetricDataPoint {
    /** 实例对象维度组合 */
    Dimensions: Dimension[];
    /** 数据点列表 */
    Values: Point[];
  }

  /** 指标数据的解释 */
  interface MetricObjectMeaning {
    /** 指标英文解释 */
    En: string;
    /** 指标中文解释 */
    Zh: string;
  }

  /** 对业务指标的单位及支持统计周期的描述 */
  interface MetricSet {
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
  interface MidQueryCondition {
    /** 维度 */
    Key: string;
    /** 操作符，支持等于(eq)、不等于(ne)，以及in */
    Operator: string;
    /** 维度值，当Op是eq、ne时，只使用第一个元素 */
    Value: string[];
  }

  /** ModifyConditionsTemplateRequestCondition，Condition入参字段值 */
  interface ModifyConditionsTemplateRequestCondition {
    /** 统计周期 */
    CalcPeriod: string;
    /** 统计方式 */
    CalcType: string;
    /** 持续周期 */
    ContinuePeriod: string;
    /** 指标ID */
    MetricID: number;
    /** 统计值 */
    CalcValue: string;
    /** 告警通知周期 */
    AlarmNotifyPeriod?: string;
    /** 告警通知方式 */
    AlarmNotifyType?: number;
    /** 规则ID */
    RuleID?: number;
  }

  /** ModifyConditionsTemplateRequestEventCondition */
  interface ModifyConditionsTemplateRequestEventCondition {
    /** 告警通知周期 */
    AlarmNotifyPeriod: string;
    /** 告警通知方式 */
    AlarmNotifyType: string;
    /** 事件ID */
    EventID: string;
    /** 规则ID */
    RuleID?: number;
  }

  /** 修改告警策略组传入的指标阈值条件 */
  interface ModifyPolicyGroupCondition {
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
  interface ModifyPolicyGroupEventCondition {
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
  interface MonitorTypeInfo {
    /** 监控类型ID */
    Id: string;
    /** 监控类型 */
    Name: string;
    /** 排列顺序 */
    SortId: number;
  }

  /** 策略类型 */
  interface MonitorTypeNamespace {
    /** 监控类型 */
    MonitorType: string;
    /** 策略类型值 */
    Namespace: string;
  }

  /** 通知模板与策略绑定关系 */
  interface NoticeBindPolicys {
    /** 告警通知模板 ID */
    NoticeId?: string;
    /** 告警通知模板绑定的告警策略ID列表 */
    PolicyIds?: string[];
  }

  /** 通知内容模板绑定信息 */
  interface NoticeContentTmplBindInfo {
    /** 通知内容模板ID */
    ContentTmplID?: string;
    /** 通知模板ID */
    NoticeID?: string;
  }

  /** 维度支持的操作符信息 */
  interface Operator {
    /** 运算符标识 */
    Id: string;
    /** 运算符展示名 */
    Name: string;
  }

  /** 周期内的统计方式 */
  interface PeriodsSt {
    /** 周期 */
    Period: string;
    /** 统计方式 */
    StatType: string[];
  }

  /** 监控数据点 */
  interface Point {
    /** 该监控数据点生成的时间点 */
    Timestamp: number;
    /** 监控数据点的值 */
    Value: number | null;
  }

  /** 策略组信息 */
  interface PolicyGroup {
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
  interface PolicyGroupReceiverInfo {
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
  interface PolicyTag {
    /** 标签Key */
    Key: string;
    /** 标签Value */
    Value: string;
  }

  /** 云产品监控支持的产品简要信息 */
  interface ProductSimple {
    /** 命名空间 */
    Namespace: string;
    /** 产品中文名称 */
    ProductName: string;
    /** 产品英文名称 */
    ProductEnName: string | null;
  }

  /** prometheus agent */
  interface PrometheusAgent {
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
  interface PrometheusAgentInfo {
    /** 集群类型。可填入tke、eks、tkeedge、tdcc，分别代表标准集群、弹性集群、边缘集群、注册集群 */
    ClusterType: string;
    /** 集成容器服务中关联的集群ID */
    ClusterId: string;
    /** 该参数未使用，不需要填写 */
    Describe?: string;
  }

  /** 托管prometheus agent概览 */
  interface PrometheusAgentOverview {
    /** 集群类型 */
    ClusterType?: string;
    /** 集群id */
    ClusterId?: string;
    /** agent状态normal = 正常abnormal = 异常 */
    Status?: string;
    /** 集群名称 */
    ClusterName?: string;
    /** 额外labels本集群的所有指标都会带上这几个label */
    ExternalLabels?: Label[] | null;
    /** 集群所在地域 */
    Region?: string | null;
    /** 集群所在VPC ID */
    VpcId?: string | null;
    /** 记录关联等操作的失败信息 */
    FailedReason?: string | null;
    /** agent名称 */
    Name?: string | null;
    /** 是否已开启公网访问，true 开启，false 未开启 */
    EnableExternal?: boolean | null;
    /** 采集agent期望pod数 */
    DesiredAgentNum?: number | null;
    /** 采集agent已正常启动pod数 */
    ReadyAgentNum?: number | null;
  }

  /** Prometheus自定义告警通知时间段 */
  interface PrometheusAlertAllowTimeRange {
    /** 从0点开始的秒数 */
    Start?: string | null;
    /** 从0点开始的秒数 */
    End?: string | null;
  }

  /** Prometheus告警自定义通知模板 */
  interface PrometheusAlertCustomReceiver {
    /** 自定义通知类型alertmanager -- vpc内自建alertmanagerwebhook -- vpc内webhook地址 */
    Type?: string | null;
    /** alertmanager/webhook地址。（prometheus实例同vpc内ip） */
    Url?: string | null;
    /** 允许发送告警的时间范围 */
    AllowedTimeRanges?: PrometheusAlertAllowTimeRange[] | null;
    /** alertmanager所在的内网集群ID */
    ClusterId?: string | null;
    /** alertmanager所在的内网集群类型(tke/eks/tdcc) */
    ClusterType?: string | null;
  }

  /** 告警分组内告警规则信息 */
  interface PrometheusAlertGroupRuleSet {
    /** 告警规则名称，同一告警分组下不允许重名 */
    RuleName?: string | null;
    /** 标签列表 */
    Labels?: PrometheusRuleKV[] | null;
    /** 注释列表告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。 */
    Annotations?: PrometheusRuleKV[] | null;
    /** 规则报警持续时间 */
    Duration?: string | null;
    /** 规则表达式，可参考告警规则说明 */
    Expr?: string | null;
    /** 告警规则状态:2-启用3-禁用为空默认启用 */
    State?: number | null;
  }

  /** Prometheus告警规则分组信息 */
  interface PrometheusAlertGroupSet {
    /** 告警分组ID，满足正则表达式`alert-[a-z0-9]{8}` */
    GroupId?: string | null;
    /** 告警分组名称 */
    GroupName?: string | null;
    /** 云监控告警模板ID ，返回告警模板转换后的notice ID。 */
    AMPReceivers?: string[] | null;
    /** 自定义告警模板 */
    CustomReceiver?: PrometheusAlertCustomReceiver | null;
    /** 告警通知间隔 */
    RepeatInterval?: string | null;
    /** 若告警分组通过模板创建，则返回模板ID */
    TemplateId?: string | null;
    /** 分组内告警规则详情 */
    Rules?: PrometheusAlertGroupRuleSet[] | null;
    /** 分组创建时间 */
    CreatedAt?: string | null;
    /** 分组更新时间 */
    UpdatedAt?: string | null;
  }

  /** 告警渠道使用自建alertmanager的配置 */
  interface PrometheusAlertManagerConfig {
    /** alertmanager url */
    Url: string;
    /** alertmanager部署所在集群类型 */
    ClusterType?: string | null;
    /** alertmanager部署所在集群ID */
    ClusterId?: string | null;
  }

  /** 托管prometheus告警策略实例 */
  interface PrometheusAlertPolicyItem {
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
  interface PrometheusAlertRule {
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

  /** 与腾讯云可观测平台融合托管 Prometheus 实例，关联集群基础信息 */
  interface PrometheusClusterAgentBasic {
    /** 地域 */
    Region: string;
    /** 集群类型。可填入tke、eks、tkeedge、tdcc，分别代表标准集群、弹性集群、边缘集群、注册集群 */
    ClusterType: string;
    /** 集群 ID */
    ClusterId: string;
    /** 是否开启公网 CLB */
    EnableExternal: boolean;
    /** 集群内部署组件的pod 配置 */
    InClusterPodConfig?: PrometheusClusterAgentPodConfig;
    /** 该集群采集的所有指标都会带上这些labels */
    ExternalLabels?: Label[];
    /** 是否安装默认采集 exporter 和采集配置 */
    NotInstallBasicScrape?: boolean;
    /** 是否安装采集配置，true 只安装采集 exporter 不会安装采集配置，false 会同时安装采集配置 */
    NotScrape?: boolean;
    /** 是否丢弃所有指标，true 代表丢弃所有指标，false 代表采集默认指标 */
    DropAll?: boolean;
    /** 是否开启默认预聚合规则 */
    OpenDefaultRecord?: boolean;
  }

  /** 关联集群时在集群内部署组件的pod额外配置 */
  interface PrometheusClusterAgentPodConfig {
    /** 是否使用HostNetWork */
    HostNet?: boolean;
    /** 指定pod运行节点 */
    NodeSelector?: Label[];
    /** 容忍污点 */
    Tolerations?: Toleration[];
  }

  /** prometheus配置 */
  interface PrometheusConfigItem {
    /** 名称 */
    Name: string;
    /** 配置内容 */
    Config: string;
    /** 用于出参，如果该配置来至模板，则为模板id */
    TemplateId?: string | null;
    /** 目标数 */
    Targets?: Targets | null;
  }

  /** 实例的授权信息 */
  interface PrometheusInstanceGrantInfo {
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
  interface PrometheusInstanceTenantUsage {
    /** 实例ID */
    InstanceId?: string | null;
    /** 计费周期 */
    CalcDate?: string | null;
    /** 总用量 */
    Total?: number | null;
    /** 基础指标用量 */
    Basic?: number | null;
    /** 付费指标用量 */
    Fee?: number | null;
  }

  /** Prometheus 服务响应体 */
  interface PrometheusInstancesItem {
    /** 实例ID。 */
    InstanceId?: string;
    /** 实例名称。 */
    InstanceName?: string;
    /** 实例计费模式。取值范围：2：包年包月3：按量 */
    InstanceChargeType?: number;
    /** 地域 ID */
    RegionId?: number;
    /** 可用区 */
    Zone?: string;
    /** VPC ID */
    VpcId?: string;
    /** 子网 ID */
    SubnetId?: string;
    /** 存储周期 */
    DataRetentionTime?: number | null;
    /** 实例业务状态。取值范围：1：正在创建2：运行中3：异常4：重建中5：销毁中6：已停服8：欠费停服中9：欠费已停服 */
    InstanceStatus?: number;
    /** Grafana 面板 URL */
    GrafanaURL?: string | null;
    /** 创建时间 */
    CreatedAt?: string;
    /** 是否开启 Grafana0：不开启1：开启 */
    EnableGrafana?: number;
    /** 实例IPV4地址 */
    IPv4Address?: string | null;
    /** 实例关联的标签列表。 */
    TagSpecification?: PrometheusTag[] | null;
    /** 购买的实例过期时间 */
    ExpireTime?: string | null;
    /** 计费状态1：正常2：过期3：销毁4：分配中5：分配失败 */
    ChargeStatus?: number | null;
    /** 规格名称 */
    SpecName?: string | null;
    /** 自动续费标记0：不自动续费1：开启自动续费2：禁止自动续费-1：无效 */
    AutoRenewFlag?: number | null;
    /** 是否快过期0：否1：快过期 */
    IsNearExpire?: number | null;
    /** 数据写入需要的 Token */
    AuthToken?: string | null;
    /** Prometheus Remote Write 的地址 */
    RemoteWrite?: string | null;
    /** Prometheus HTTP Api 根地址 */
    ApiRootPath?: string | null;
    /** Proxy 的地址 */
    ProxyAddress?: string | null;
    /** Grafana 运行状态1：正在创建2：运行中3：异常4：重启中5：销毁中6：已停机7：已删除 */
    GrafanaStatus?: number | null;
    /** Grafana IP 白名单列表，使用英文分号分隔 */
    GrafanaIpWhiteList?: string | null;
    /** 实例的授权信息 */
    Grant?: PrometheusInstanceGrantInfo | null;
    /** 绑定的 Grafana 实例 ID */
    GrafanaInstanceId?: string | null;
    /** 告警规则限制 */
    AlertRuleLimit?: number | null;
    /** 预聚合规则限制 */
    RecordingRuleLimit?: number | null;
    /** 迁移状态，0-不在迁移中，1-迁移中、原实例，2-迁移中、目标实例 */
    MigrationType?: number | null;
  }

  /** 托管prometheusV2实例概览 */
  interface PrometheusInstancesOverview {
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
    /** 资源包状态，0-无可用资源包，1-有可用资源包 */
    ResourcePackageStatus?: number | null;
    /** 资源包规格名称 */
    ResourcePackageSpecName?: string | null;
  }

  /** prometheus一个job的targets */
  interface PrometheusJobTargets {
    /** 该Job的targets列表 */
    Targets?: PrometheusTarget[];
    /** job的名称 */
    JobName?: string;
    /** targets总数 */
    Total?: number;
    /** 健康的target总数 */
    Up?: number;
  }

  /** 告警通知渠道配置 */
  interface PrometheusNotificationItem {
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
  interface PrometheusRecordRuleYamlItem {
    /** 实例名称 */
    Name?: string;
    /** 最近更新时间 */
    UpdateTime?: string;
    /** 如果该聚合规则来至模板，则TemplateId为模板id */
    TemplateId?: string;
    /** Yaml内容 */
    Content?: string | null;
    /** 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID */
    ClusterId?: string | null;
    /** 状态 */
    Status?: number | null;
    /** id */
    Id?: string | null;
    /** 规则数量 */
    Count?: number | null;
  }

  /** DescribePrometheusRegions 响应结构体 */
  interface PrometheusRegionItem {
    /** 区域 */
    Region?: string;
    /** 区域 ID */
    RegionId?: number;
    /** 区域状态( 0: 不可用；1: 可用) */
    RegionState?: number;
    /** 区域名(中文) */
    RegionName?: string;
    /** 区域名(英文缩写) */
    RegionShortName?: string;
    /** 区域所在大区名 */
    Area?: string;
    /** 1-仅支持预付费，2-仅支持后付费，3-支持两种计费模式实例 */
    RegionPayMode?: number;
  }

  /** prometheus 报警规则 KV 参数 */
  interface PrometheusRuleKV {
    /** 键 */
    Key: string;
    /** 值 */
    Value: string;
  }

  /** prometheus 报警规则集 */
  interface PrometheusRuleSet {
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
  interface PrometheusScrapeJob {
    /** 任务名 */
    Name?: string | null;
    /** Agent ID */
    AgentId?: string;
    /** 任务 ID */
    JobId?: string;
    /** 配置 */
    Config?: string | null;
  }

  /** Prometheus 托管服务标签 */
  interface PrometheusTag {
    /** 标签的健值 */
    Key: string;
    /** 标签对应的值 */
    Value: string | null;
  }

  /** prometheus一个抓取目标的信息 */
  interface PrometheusTarget {
    /** 抓取目标的URL */
    Url?: string;
    /** target当前状态,当前支持up = 健康down = 不健康unknown = 未知 */
    State?: string;
  }

  /** 模板实例 */
  interface PrometheusTemp {
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
  interface PrometheusTempModify {
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
  interface PrometheusTemplateSyncTarget {
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
  interface PrometheusZoneItem {
    /** 可用区 */
    Zone?: string;
    /** 可用区 ID */
    ZoneId?: number;
    /** 可用区状态( 0: 不可用；1: 可用) */
    ZoneState?: number;
    /** 地域 ID */
    RegionId?: number;
    /** 可用区名（目前为中文） */
    ZoneName?: string;
    /** 可用区资源状态(0:资源不足，不可使用；1:资源足够) */
    ZoneResourceState?: number | null;
  }

  /** 接收人信息 */
  interface ReceiverInfo {
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
  interface RecordingRuleSet {
    /** 规则 ID */
    RuleId?: string;
    /** 规则状态码 */
    RuleState?: number;
    /** 分组名称 */
    Name?: string;
    /** 规则内容组 */
    Group?: string;
    /** 规则数量 */
    Total?: number;
    /** 规则创建时间 */
    CreatedAt?: string;
    /** 规则最近更新时间 */
    UpdatedAt?: string;
    /** 规则名称 */
    RuleName?: string | null;
  }

  /** 多写配置 */
  interface RemoteWrite {
    /** 多写url */
    URL: string;
    /** RelabelConfig */
    URLRelabelConfig?: string | null;
    /** 鉴权 */
    BasicAuth?: BasicAuth | null;
    /** 最大block */
    MaxBlockSize?: string | null;
    /** Label */
    Label?: string | null;
    /** HTTP 额外添加的头 */
    Headers?: RemoteWriteHeader[] | null;
  }

  /** Remote Write 协议额外添加的 HTTP 头 */
  interface RemoteWriteHeader {
    /** HTTP 头的键 */
    Key: string | null;
    /** HTTP 头的值 */
    Value?: string | null;
  }

  /** Prometheus 服务发现信息 */
  interface ServiceDiscoveryItem {
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

  /** 单个有序数据点 */
  interface SingleOrderedDataPoint {
    /** 实例对象维度组合 */
    Dimensions?: Dimension[] | null;
    /** 监控数据值 */
    Value?: number | null;
    /** 监控数据时间戳 */
    Timestamp?: number | null;
    /** 排序序号 */
    Order?: number | null;
  }

  /** 标签 */
  interface Tag {
    /** 标签key */
    Key: string;
    /** 标签value */
    Value: string;
  }

  /** 策略列表详情标签返回体 */
  interface TagInstance {
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

  /** 抓取目标数 */
  interface Targets {
    /** 总数 */
    Total?: number | null;
    /** 在线数 */
    Up?: number | null;
    /** 不在线数 */
    Down?: number | null;
    /** 未知状态数 */
    Unknown?: number | null;
  }

  /** 任务步骤信息 */
  interface TaskStepInfo {
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
  interface TemplateGroup {
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
  interface Toleration {
    /** 容忍应用到的 taint key */
    Key?: string;
    /** 键与值的关系 */
    Operator?: string;
    /** 要匹配的污点效果 */
    Effect?: string;
  }

  /** 告警通知模板 - 回调通知详情 */
  interface URLNotice {
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
    /** 组名 */
    GroupMembers?: string | null;
  }

  /** 告警通知模板 - 用户通知详情 */
  interface UserNotice {
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
    /** 值班表id列表 */
    OnCallFormIDs?: string[] | null;
    /** 电话按键确认 */
    VoiceConfirmKey?: string | null;
  }

  interface BindPrometheusManagedGrafanaRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** Grafana 可视化服务实例 ID */
    GrafanaId: string;
  }

  interface BindPrometheusManagedGrafanaResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BindingPolicyObjectRequest {
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

  interface BindingPolicyObjectResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BindingPolicyTagRequest {
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
    /** 是否同步eb */
    EbEventFlag?: number;
    /** 事件配置的告警 */
    EbSubject?: string;
    /** 标识标签取交/并集关系 */
    TagOperation?: string;
  }

  interface BindingPolicyTagResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CleanGrafanaInstanceRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
  }

  interface CleanGrafanaInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAlarmNoticeRequest {
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
    /** 回调通知 最多6个 */
    URLNotices?: URLNotice[];
    /** 推送CLS日志服务的操作 最多1个 */
    CLSNotices?: CLSNotice[];
    /** 模板绑定的标签 */
    Tags?: Tag[];
  }

  interface CreateAlarmNoticeResponse {
    /** 告警通知模板ID */
    NoticeId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAlarmPolicyRequest {
    /** 固定值，为"monitor" */
    Module: string;
    /** 策略名称，不超过60字符 */
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
    /** 附加告警内容 */
    AdditionalAlarmContent?: string;
    /** 通知模板绑定信息 */
    NoticeContentTmplBindInfos?: NoticeContentTmplBindInfo[];
  }

  interface CreateAlarmPolicyResponse {
    /** 告警策略 ID */
    PolicyId?: string;
    /** 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID */
    OriginId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAlarmShieldRequest {
    /** 模块名，这里填“monitor” */
    Module: string;
    /** 屏蔽策略名称 */
    Name: string;
    /** 监控类型 */
    MonitorType: string;
    /** 命名空间即策略类型 */
    NameSpace: string;
    /** 屏蔽时间类型 FOREVER_SHIELD:永久屏蔽 PERIOD_SHIELD:绝对时间范围屏蔽 LOOP_SHIELD:相对时间范围屏蔽 */
    ShieldTimeType: string;
    /** 屏蔽对象 */
    ShieldObject?: string[];
    /** 屏蔽指标 为空则为全部指标 */
    ShieldMetric?: string[];
    /** 开始时间 相对时间范围:36000 绝对时间范围:1648742400 缺省:0 */
    StartTime?: number;
    /** 结束时间 相对时间范围:72000 绝对时间范围:1649088000 缺省:0 */
    EndTime?: number;
    /** 循环开始日期 2022/04/01 缺省:0 */
    LoopStartDate?: number;
    /** 循环结束日期 2022/04/05 缺省:0 */
    LoopEndDate?: number;
    /** 需要屏蔽的策略ID */
    ShieldPolicyId?: string;
    /** 需要屏蔽的告警等级，取值范围Warn,Remind,Serious */
    ShieldAlarmLevel?: string[];
    /** 屏蔽类型，为OBJNAME是老版本实例名屏蔽，为POLICY是新版本维度匹配 */
    VersionTag?: string;
    /** 屏蔽规则的描述 */
    Description?: string;
    /** 时区，东八区+8，西八区减8，以此类推 */
    TimeZone?: number;
    /** 屏蔽事件 为空则为全部指标 */
    ShieldEvent?: string[];
    /** 是否对指标屏蔽 1=是 0=否 */
    ShieldMetricFlag?: number;
    /** 是否对事件屏蔽 1=是 0=否 */
    ShieldEventFlag?: number;
  }

  interface CreateAlarmShieldResponse {
    /** 屏蔽规则的Id */
    ShieldId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAlertRuleRequest {
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

  interface CreateAlertRuleResponse {
    /** 规则 ID */
    RuleId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateConditionsTemplateRequest {
    /** 固定值，monitor */
    Module: string;
    /** 视图名 */
    ViewName: string;
    /** 组名 */
    GroupName: string;
    /** 是否为与关系 */
    IsUnionRule?: number;
    /** 备注 */
    Remark?: string;
    /** 父ID */
    ParentGroupID?: number;
    /** 是否屏蔽 */
    IsShielded?: number;
    /** 复合告警表达式 */
    ComplexExpression?: string;
    /** 指标告警条件 */
    Conditions?: ModifyConditionsTemplateRequestCondition[];
    /** 事件告警条件 */
    EventConditions?: ModifyConditionsTemplateRequestEventCondition[];
  }

  interface CreateConditionsTemplateResponse {
    /** 模板策略组ID */
    GroupID?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateExporterIntegrationRequest {
    /** 实例 ID */
    InstanceId: string;
    /** 类型(可通过 DescribePrometheusIntegrations 接口获取，取每一项中的 ExporterType 字段) */
    Kind: string;
    /** 集成配置 */
    Content: string;
    /** Kubernetes 集群类型，可不填，取值如下： 1= 容器集群(TKE) 2=弹性集群(EKS) 3= Prometheus管理的弹性集群(MEKS) */
    KubeType?: number;
    /** 集群 ID，可不填 */
    ClusterId?: string;
  }

  interface CreateExporterIntegrationResponse {
    /** 返回创建成功的集成名称列表 */
    Names?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateGrafanaInstanceRequest {
    /** 实例名 */
    InstanceName: string;
    /** VPC ID (私有网络 ID) */
    VpcId: string;
    /** 子网 ID 数组(VPC ID下的子网 ID，只取第一个) */
    SubnetIds: string[];
    /** 是否启用外网 */
    EnableInternet: boolean;
    /** Grafana 初始密码(国际站用户必填，国内站用户可不填，不填时会生成随机密码并给主账号发送通知) */
    GrafanaInitPassword?: string;
    /** 标签 */
    TagSpecification?: PrometheusTag[];
    /** 是否自动选择代金券，默认为 false */
    AutoVoucher?: boolean;
  }

  interface CreateGrafanaInstanceResponse {
    /** 实例名 */
    InstanceId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateGrafanaIntegrationRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 集成类型(接口DescribeGrafanaIntegrationOverviews返回的集成信息中的Code字段) */
    Kind: string;
    /** 集成配置 */
    Content: string;
  }

  interface CreateGrafanaIntegrationResponse {
    /** 集成 ID */
    IntegrationId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateGrafanaNotificationChannelRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 告警通道名称，例如：test */
    ChannelName: string;
    /** 接受告警通道 ID 数组，值为告警管理/基础配置/通知模板中的模板 ID */
    Receivers: string[];
    /** 默认为1，建议使用 OrganizationIds */
    OrgId?: number;
    /** 额外组织 ID 数组，已废弃，请使用 OrganizationIds */
    ExtraOrgIds?: string[];
    /** 生效的所有组织 ID 数组，默认为 ["1"] */
    OrganizationIds?: string[];
  }

  interface CreateGrafanaNotificationChannelResponse {
    /** 通道 ID */
    ChannelId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePolicyGroupRequest {
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

  interface CreatePolicyGroupResponse {
    /** 创建成功的策略组Id */
    GroupId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusAgentRequest {
    /** 实例 ID */
    InstanceId: string;
    /** Agent 名称 */
    Name: string;
  }

  interface CreatePrometheusAgentResponse {
    /** 创建成功的 Agent Id */
    AgentId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusAlertGroupRequest {
    /** prometheus实例ID */
    InstanceId?: string;
    /** 告警分组名称，不能与其他告警分组重名 */
    GroupName?: string;
    /** 告警分组状态：2 -- 启用3 -- 禁用不为空时会覆盖 `Rules`字段下所有告警规则状态 */
    GroupState?: number;
    /** 云监控告警通知模板ID列表，形如Consumer-xxxx或notice-xxxx */
    AMPReceivers?: string[];
    /** 自定义告警通知模板 */
    CustomReceiver?: PrometheusAlertCustomReceiver;
    /** 告警通知周期（收敛时间），为空默认1h */
    RepeatInterval?: string;
    /** 要创建的告警规则列表 */
    Rules?: PrometheusAlertGroupRuleSet[];
  }

  interface CreatePrometheusAlertGroupResponse {
    /** 创建的告警分组ID，满足正则表达式`alert-[a-z0-9]{8}` */
    GroupId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusAlertPolicyRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警配置 */
    AlertRule: PrometheusAlertPolicyItem;
  }

  interface CreatePrometheusAlertPolicyResponse {
    /** 告警id */
    Id?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusClusterAgentRequest {
    /** 实例ID */
    InstanceId: string;
    /** agent列表 */
    Agents: PrometheusClusterAgentBasic[];
  }

  interface CreatePrometheusClusterAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusConfigRequest {
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

  interface CreatePrometheusConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusGlobalNotificationRequest {
    /** 实例ID(可通过 DescribePrometheusInstances 接口获取) */
    InstanceId: string;
    /** 告警通知渠道 */
    Notification: PrometheusNotificationItem;
  }

  interface CreatePrometheusGlobalNotificationResponse {
    /** 全局告警通知渠道ID */
    Id?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusMultiTenantInstancePostPayModeRequest {
    /** 实例名 */
    InstanceName: string;
    /** VPC ID(可通过 vpc:DescribeVpcs 接口获取，与实例同地域) */
    VpcId: string;
    /** 子网 ID(可通过 vpc:DescribeSubnets 接口获取) */
    SubnetId: string;
    /** 数据存储时间（单位天），限制值为15, 30, 45, 90, 180, 365, 730之一 */
    DataRetentionTime: number;
    /** 可用区(与子网同可用区) */
    Zone: string;
    /** 实例的标签 */
    TagSpecification?: PrometheusTag[];
    /** 需要关联的 Grafana 实例 */
    GrafanaInstanceId?: string;
  }

  interface CreatePrometheusMultiTenantInstancePostPayModeResponse {
    /** 实例 ID */
    InstanceId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusRecordRuleYamlRequest {
    /** 实例id */
    InstanceId: string;
    /** yaml的内容 */
    Content: string;
    /** 规则名称 */
    Name?: string;
  }

  interface CreatePrometheusRecordRuleYamlResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusScrapeJobRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** Agent ID(可通过DescribePrometheusAgents 接口获取) */
    AgentId: string;
    /** 抓取任务配置 */
    Config?: string;
  }

  interface CreatePrometheusScrapeJobResponse {
    /** 成功创建抓取任务 Id */
    JobId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusTempRequest {
    /** 模板设置 */
    Template: PrometheusTemp;
  }

  interface CreatePrometheusTempResponse {
    /** 模板Id */
    TemplateId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateRecordingRuleRequest {
    /** 聚合规则名称 */
    Name: string;
    /** 聚合规则组内容，格式为 yaml，通过 base64 进行编码。 */
    Group: string;
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 规则状态码，取值如下：1=RuleDeleted2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
    RuleState?: number;
  }

  interface CreateRecordingRuleResponse {
    /** 规则 ID */
    RuleId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSSOAccountRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 用户账号 ID ，例如：10000000 */
    UserId: string;
    /** 权限(只取数组中的第一个，其中 Organization 暂未使用，可不填) */
    Role: GrafanaAccountRole[];
    /** 备注 */
    Notes?: string;
  }

  interface CreateSSOAccountResponse {
    /** 已添加的用户 UIN */
    UserId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateServiceDiscoveryRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 类型为TKE：对应集成的腾讯云容器服务集群 ID */
    KubeClusterId: string;
    /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
    KubeType: number;
    /** 服务发现类型，取值如下： 1 = ServiceMonitor 2 = PodMonitor 3 = JobMonitor */
    Type: number;
    /** 服务发现配置信息，YAML 格式，[具体YAML参数内容请参考](https://cloud.tencent.com/document/product/1416/55995) */
    Yaml: string;
  }

  interface CreateServiceDiscoveryResponse {
    /** 创建成功之后，返回对应服务发现信息 */
    ServiceDiscovery?: ServiceDiscoveryItem;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAlarmNoticesRequest {
    /** 模块名，这里填“monitor” */
    Module: string;
    /** 告警通知模板id列表 */
    NoticeIds: string[];
    /** 通知模板与策略绑定关系 */
    NoticeBindPolicys?: NoticeBindPolicys[];
  }

  interface DeleteAlarmNoticesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAlarmPolicyRequest {
    /** 模块名，固定值 monitor */
    Module: string;
    /** 告警策略 ID 列表 */
    PolicyIds: string[];
    /** prom的实例id */
    PromInsIds?: string[];
  }

  interface DeleteAlarmPolicyResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAlertRulesRequest {
    /** 规则 ID 列表 */
    RuleIds: string[];
    /** Prometheus 实例 ID */
    InstanceId: string;
  }

  interface DeleteAlertRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteExporterIntegrationRequest {
    /** 实例 ID */
    InstanceId: string;
    /** 类型(可通过 DescribeExporterIntegrations获取) */
    Kind: string;
    /** 名字 */
    Name: string;
    /** Kubernetes 集群类型，取值如下： 1= 容器集群(TKE) 2=弹性集群(EKS) 3= Prometheus管理的弹性集群(MEKS) */
    KubeType?: number;
    /** 集群 ID，可不填 */
    ClusterId?: string;
  }

  interface DeleteExporterIntegrationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteGrafanaInstanceRequest {
    /** 实例ID数组 */
    InstanceIDs: string[];
  }

  interface DeleteGrafanaInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteGrafanaIntegrationRequest {
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
    /** 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234 */
    IntegrationId: string;
  }

  interface DeleteGrafanaIntegrationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteGrafanaNotificationChannelRequest {
    /** 通道 ID 数组。例如：nchannel-abcd1234，通过 DescribeGrafanaChannels 获取 */
    ChannelIDs: string[];
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
  }

  interface DeleteGrafanaNotificationChannelResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePolicyGroupRequest {
    /** 固定值，为"monitor" */
    Module: string;
    /** 策略组id,即1.0的告警策略id,可以从策略详情获取 */
    GroupId: number[];
  }

  interface DeletePolicyGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusAlertGroupsRequest {
    /** prometheus实例id */
    InstanceId?: string;
    /** 需要删除的告警分组ID，形如alert-xxxxx */
    GroupIds?: string[];
  }

  interface DeletePrometheusAlertGroupsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusAlertPolicyRequest {
    /** 实例ID(可通过 DescribePrometheusInstances 接口获取) */
    InstanceId: string;
    /** 告警策略ID列表(可通过 DescribePrometheusAlertPolicy 接口获取) */
    AlertIds: string[];
    /** 告警策略名称(可通过 DescribePrometheusAlertPolicy 接口获取)，名称完全相同的告警策略才会删除 */
    Names?: string[];
  }

  interface DeletePrometheusAlertPolicyResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusClusterAgentRequest {
    /** agent列表 */
    Agents: PrometheusAgentInfo[];
    /** 实例id */
    InstanceId: string;
  }

  interface DeletePrometheusClusterAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusConfigRequest {
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

  interface DeletePrometheusConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusRecordRuleYamlRequest {
    /** 实例id */
    InstanceId: string;
    /** 聚合规则列表 */
    Names: string[];
  }

  interface DeletePrometheusRecordRuleYamlResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusScrapeJobsRequest {
    /** 实例 ID */
    InstanceId: string;
    /** Agent ID(可通过 DescribePrometheusAgents 接口获取) */
    AgentId: string;
    /** 任务 ID 列表(可通过 DescribePrometheusScrapeJobs 接口获取) */
    JobIds: string[];
  }

  interface DeletePrometheusScrapeJobsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusTempRequest {
    /** 模板id */
    TemplateId: string;
  }

  interface DeletePrometheusTempResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusTempSyncRequest {
    /** 模板id */
    TemplateId: string;
    /** 取消同步的对象列表 */
    Targets: PrometheusTemplateSyncTarget[];
  }

  interface DeletePrometheusTempSyncResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteRecordingRulesRequest {
    /** 规则 ID 列表(规则 ID 可通过 DescribeRecordingRules 接口获取) */
    RuleIds: string[];
    /** Prometheus 实例 ID */
    InstanceId: string;
  }

  interface DeleteRecordingRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteSSOAccountRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 用户账号 ID ，例如：10000000 */
    UserId: string;
  }

  interface DeleteSSOAccountResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteServiceDiscoveryRequest {
    /** Prometheus 实例 ID，例如：prom-sdfk2342a */
    InstanceId: string;
    /** 类型是 TKE，为对应的腾讯云容器服务集群 ID */
    KubeClusterId: string;
    /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
    KubeType: number;
    /** 服务发现类型，取值如下： 1 = ServiceMonitor 2 = PodMonitor 3 = PodMonitor */
    Type: number;
    /** 服务发现配置信息，YAML 格式，[具体YAML参数内容请参考](https://cloud.tencent.com/document/product/1416/55995) */
    Yaml: string;
  }

  interface DeleteServiceDiscoveryResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAccidentEventListRequest {
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

  interface DescribeAccidentEventListResponse {
    /** 平台事件列表 */
    Alarms?: DescribeAccidentEventListAlarms[] | null;
    /** 平台事件的总数 */
    Total?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmEventsRequest {
    /** 模块名，固定值 monitor */
    Module: string;
    /** 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device */
    Namespace: string;
    /** 监控类型，如 MT_QCE。如果不填默认为 MT_QCE。 */
    MonitorType?: string;
  }

  interface DescribeAlarmEventsResponse {
    /** 告警事件列表 */
    Events: AlarmEvent[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmHistoriesRequest {
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
    /** 根据监控类型过滤，不选默认查所有类型。"MT_QCE"=云产品监控，支持的枚举值有："MT_QCE"=云产品监控；"MT_TAW"=应用性能监控；"MT_RUM"=前端性能监控；"MT_PROBE"=云拨测，"MT_TRTC"=实时音视频，"MT_RUMAPP"=终端性能监控 */
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
    /** 根据策略名称模糊搜索,不支持大小写区分 */
    PolicyName?: string;
    /** 根据告警内容模糊搜索 */
    Content?: string;
    /** 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段 */
    ReceiverUids?: number[];
    /** 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段 */
    ReceiverGroups?: number[];
    /** 根据告警策略 Id 列表搜索 */
    PolicyIds?: string[];
    /** 告警等级,取值范围：Remind、Serious、Warn */
    AlarmLevels?: string[];
    /** 收敛历史的唯一id */
    ConvergenceHistoryIDs?: string[];
    /** 告警类型 */
    AlarmTypes?: string[];
  }

  interface DescribeAlarmHistoriesResponse {
    /** 总数 */
    TotalCount?: number;
    /** 告警历史列表 */
    Histories?: AlarmHistory[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmMetricsRequest {
    /** 固定值，为"monitor" */
    Module: string;
    /** 监控类型过滤 "MT_QCE"=云产品监控 */
    MonitorType: string;
    /** 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device */
    Namespace: string;
  }

  interface DescribeAlarmMetricsResponse {
    /** 告警指标列表 */
    Metrics?: Metric[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmNoticeCallbacksRequest {
    /** 模块名，这里填“monitor” */
    Module: string;
  }

  interface DescribeAlarmNoticeCallbacksResponse {
    /** 告警回调通知 */
    URLNotices?: URLNotice[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmNoticeRequest {
    /** 模块名，这里填“monitor” */
    Module: string;
    /** 告警通知模板 id */
    NoticeId: string;
  }

  interface DescribeAlarmNoticeResponse {
    /** 告警通知模板详细信息 */
    Notice: AlarmNotice;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmNoticesRequest {
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
    /** 值班列表 */
    OnCallFormIDs?: string[];
  }

  interface DescribeAlarmNoticesResponse {
    /** 告警通知模板总数 */
    TotalCount?: number;
    /** 告警通知模板列表 */
    Notices?: AlarmNotice[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmPoliciesRequest {
    /** 固定值，为"monitor" */
    Module: string;
    /** 页数，从 1 开始计数，默认 1 */
    PageNumber?: number;
    /** 每页的数量，取值1~100，默认20 */
    PageSize?: number;
    /** 按策略名称模糊搜索 */
    PolicyName?: string;
    /** 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控,当Dimension不为空时，该项为必填项 */
    MonitorTypes?: string[];
    /** 根据命名空间过滤，不同策略类型的值详见[策略类型列表](https://cloud.tencent.com/document/product/248/50397)当Dimension不为空时，该项为必填项 */
    Namespaces?: string[];
    /** 告警对象列表，JSON 字符串。外层数组，对应多个实例，内层为对象的维度。例如“云服务器-基础监控”可写为：`[[{"name":"unInstanceId","value":"ins-qr888845g"}]]`具体也可以参考下方的示例 2。不同云产品参数示例详见 [维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)注意：如果NeedCorrespondence传入1，即需要返回策略与实例对应关系，请传入不多于20个告警对象维度，否则容易请求超时 */
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
    /** 通知模板的id列表，可查询通知模板列表获取。可使用 [查询通知模板列表](https://cloud.tencent.com/document/product/248/51280) 接口查询。 */
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
    /** 返回结果过滤掉绑定全部对象的策略，1代表需要过滤，0则无需过滤 */
    NotBindAll?: number;
    /** 返回结果过滤掉关联实例为实例分组的策略，1代表需要过滤，0则无需过滤 */
    NotInstanceGroup?: number;
    /** 策略根据标签过滤 */
    Tags?: Tag[];
    /** prom实例id，自定义指标策略时会用到 */
    PromInsId?: string;
    /** 根据排班表搜索 */
    ReceiverOnCallFormIDs?: string[];
    /** 通知内容模板ID筛选 */
    NoticeContentTmplIDs?: string[];
    /** 是否为预设策略，1是，0否 */
    IsPredefined?: number;
  }

  interface DescribeAlarmPoliciesResponse {
    /** 策略总数 */
    TotalCount?: number;
    /** 策略数组 */
    Policies?: AlarmPolicy[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmPolicyRequest {
    /** 固定值，为"monitor" */
    Module: string;
    /** 告警策略ID */
    PolicyId: string;
  }

  interface DescribeAlarmPolicyResponse {
    /** 策略详情 */
    Policy: AlarmPolicy;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmSmsQuotaRequest {
    /** 固定值，为"monitor" */
    Module: string;
  }

  interface DescribeAlarmSmsQuotaResponse {
    /** 配额总数 */
    Total?: number;
    /** 总使用量 */
    Used?: number;
    /** 短信配额信息列表 */
    QuotaList?: DescribeAlarmSmsQuotaQuota[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlertRulesRequest {
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

  interface DescribeAlertRulesResponse {
    /** 报警规则数量 */
    TotalCount: number;
    /** 报警规则详情 */
    AlertRuleSet: PrometheusRuleSet[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAllNamespacesRequest {
    /** 根据使用场景过滤 目前仅有"ST_ALARM"=告警类型 */
    SceneType: string;
    /** 固定值，为"monitor" */
    Module: string;
    /** 根据监控类型过滤 不填默认查所有类型 "MT_QCE"=云产品监控 */
    MonitorTypes?: string[];
    /** 根据namespace的Id过滤 不填默认查询所有 */
    Ids?: string[];
  }

  interface DescribeAllNamespacesResponse {
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

  interface DescribeBaseMetricsRequest {
    /** 业务命名空间，各个云产品的业务命名空间不同。如需获取业务命名空间，请前往各产品监控指标文档，例如云服务器的命名空间，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843) */
    Namespace: string;
    /** 指标名，各个云产品的指标名不同。如需获取指标名，请前往各产品监控指标文档，例如云服务器的指标名，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843) */
    MetricName?: string;
    /** 可选参数，按照维度过滤 */
    Dimensions?: string[];
  }

  interface DescribeBaseMetricsResponse {
    /** 查询得到的指标描述列表 */
    MetricSet?: MetricSet[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBasicAlarmListRequest {
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

  interface DescribeBasicAlarmListResponse {
    /** 告警列表 */
    Alarms?: DescribeBasicAlarmListAlarms[] | null;
    /** 总数 */
    Total?: number | null;
    /** 备注信息 */
    Warning?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBindingPolicyObjectListRequest {
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

  interface DescribeBindingPolicyObjectListResponse {
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

  interface DescribeClusterAgentCreatingProgressRequest {
  }

  interface DescribeClusterAgentCreatingProgressResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeConditionsTemplateListRequest {
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

  interface DescribeConditionsTemplateListResponse {
    /** 模板总数 */
    Total?: number;
    /** 模板列表 */
    TemplateGroupList?: TemplateGroup[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDNSConfigRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
  }

  interface DescribeDNSConfigResponse {
    /** DNS 服务器数组 */
    NameServers?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeExporterIntegrationsRequest {
    /** 实例 ID */
    InstanceId: string;
    /** Kubernetes 集群类型，可不填。取值如下： 1= 容器集群(TKE) 2=弹性集群(EKS) 3= Prometheus管理的弹性集群(MEKS) */
    KubeType?: number;
    /** 集群 ID，可不填 */
    ClusterId?: string;
    /** 类型(不填返回全部集成。可通过 DescribePrometheusIntegrations 接口获取，取每一项中的 ExporterType 字段) */
    Kind?: string;
    /** 名字 */
    Name?: string;
  }

  interface DescribeExporterIntegrationsResponse {
    /** 集成配置列表 */
    IntegrationSet?: IntegrationConfiguration[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeGrafanaChannelsRequest {
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
    /** 告警通道状态(不用填写，目前只有可用和删除状态，默认只能查询可用的告警通道) */
    ChannelState?: number;
  }

  interface DescribeGrafanaChannelsResponse {
    /** 告警通道数组 */
    NotificationChannelSet?: GrafanaChannel[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeGrafanaConfigRequest {
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
  }

  interface DescribeGrafanaConfigResponse {
    /** JSON 编码后的字符串 */
    Config: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeGrafanaEnvironmentsRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
  }

  interface DescribeGrafanaEnvironmentsResponse {
    /** 环境变量字符串 */
    Envs?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeGrafanaInstancesRequest {
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

  interface DescribeGrafanaInstancesResponse {
    /** 已废弃，请使用 Instances */
    InstanceSet?: GrafanaInstanceInfo[];
    /** 符合查询条件的实例总数 */
    TotalCount?: number;
    /** 实例列表 */
    Instances?: GrafanaInstanceInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeGrafanaIntegrationsRequest {
    /** 实例 ID */
    InstanceId: string;
    /** 集成 ID */
    IntegrationId?: string;
    /** 类型 */
    Kind?: string;
  }

  interface DescribeGrafanaIntegrationsResponse {
    /** 集成数组 */
    IntegrationSet: GrafanaIntegrationConfig[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeGrafanaNotificationChannelsRequest {
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

  interface DescribeGrafanaNotificationChannelsResponse {
    /** 告警通道数组 */
    NotificationChannelSet?: GrafanaNotificationChannel[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeGrafanaWhiteListRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
  }

  interface DescribeGrafanaWhiteListResponse {
    /** 数组 */
    WhiteList?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstalledPluginsRequest {
    /** Grafana 实例 ID，例如：grafana-kleu3gt0 */
    InstanceId: string;
    /** 按插件 ID 过滤，例如：grafana-piechart-panel，可通过接口 DescribeInstalledPlugins 查看已安装的插件 ID */
    PluginId?: string;
  }

  interface DescribeInstalledPluginsResponse {
    /** 插件列表 */
    PluginSet: GrafanaPlugin[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMonitorResourceInfoRequest {
  }

  interface DescribeMonitorResourceInfoResponse {
    /** 电话告警数量 */
    PhoneAlarmNumber: number;
    /** 高级指标数量 */
    AdvancedMetricNumber: number;
    /** API调用量 */
    APIUsageNumber: number;
    /** 告警短信数量 */
    AlarmSMSNumber: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMonitorTypesRequest {
    /** 模块名，固定值 monitor */
    Module: string;
  }

  interface DescribeMonitorTypesResponse {
    /** 监控类型，云产品监控为 MT_QCE */
    MonitorTypes?: string[];
    /** 监控类型详情 */
    MonitorTypeInfos?: MonitorTypeInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePhoneAlarmFlowTotalCountRequest {
    /** 默认monitor */
    Module: string;
    /** unix时间戳，单位：s */
    QueryTime: number;
  }

  interface DescribePhoneAlarmFlowTotalCountResponse {
    /** 电话流水总数 */
    Count: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePluginOverviewsRequest {
  }

  interface DescribePluginOverviewsResponse {
    /** 插件列表 */
    PluginSet?: GrafanaPlugin[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePolicyConditionListRequest {
    /** 固定值，为"monitor" */
    Module: string;
  }

  interface DescribePolicyConditionListResponse {
    /** 告警策略条件列表 */
    Conditions?: DescribePolicyConditionListCondition[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePolicyGroupInfoRequest {
    /** 固定值，为"monitor" */
    Module: string;
    /** 策略组id */
    GroupId: number;
  }

  interface DescribePolicyGroupInfoResponse {
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

  interface DescribePolicyGroupListRequest {
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

  interface DescribePolicyGroupListResponse {
    /** 策略组列表 */
    GroupList?: DescribePolicyGroupListGroup[] | null;
    /** 策略组总数 */
    Total?: number;
    /** 备注信息 */
    Warning?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeProductEventListRequest {
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

  interface DescribeProductEventListResponse {
    /** 事件列表 */
    Events: DescribeProductEventListEvents[] | null;
    /** 事件统计 */
    OverView: DescribeProductEventListOverView;
    /** 事件总数 */
    Total: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeProductListRequest {
    /** 固定传值monitor */
    Module: string;
    /** 排序方式：DESC/ASC（区分大小写），默认值DESC */
    Order?: string;
    /** 分页查询的偏移量，默认值0 */
    Offset?: number;
    /** 分页查询的每页数据量，默认值20 */
    Limit?: number;
  }

  interface DescribeProductListResponse {
    /** 产品信息列表 */
    ProductList?: ProductSimple[] | null;
    /** 产品总数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAgentInstancesRequest {
    /** 集群id可以是tke, eks, edge的集群id */
    ClusterId: string;
  }

  interface DescribePrometheusAgentInstancesResponse {
    /** 关联该集群的实例列表 */
    Instances?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAgentsRequest {
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

  interface DescribePrometheusAgentsResponse {
    /** Agent 列表 */
    AgentSet?: PrometheusAgent[] | null;
    /** Agent 总量 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAlertGroupsRequest {
    /** Prometheus 实例 ID */
    InstanceId?: string;
    /** 返回数量，默认为 20，最大值为 100 */
    Limit?: number;
    /** 偏移量，默认为 0 */
    Offset?: number;
    /** 告警分组ID，形如alert-xxxx。查询给定ID的告警分组 */
    GroupId?: string;
    /** 告警分组名称。查询名称中包含给定字符串的告警分组 */
    GroupName?: string;
  }

  interface DescribePrometheusAlertGroupsResponse {
    /** 告警分组信息 */
    AlertGroupSet?: PrometheusAlertGroupSet[] | null;
    /** 告警分组总数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAlertPolicyRequest {
    /** 实例ID */
    InstanceId: string;
    /** 分页偏移量，默认为0。 示例值：1 */
    Offset?: number;
    /** 分页返回数量，默认为20，最大值为100 */
    Limit?: number;
    /** 仅支持按Name, Values字段过滤:- Name = Name 按照给定的告警规则名称列表匹配- Name = ID 按照给定的告警规则ID列表匹配 */
    Filters?: Filter[];
  }

  interface DescribePrometheusAlertPolicyResponse {
    /** 告警详情 */
    AlertRules?: PrometheusAlertPolicyItem[] | null;
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusClusterAgentsRequest {
    /** 实例id */
    InstanceId: string;
    /** 偏移量，默认为0。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。 */
    Limit?: number;
    /** 用于通过集群id过滤被绑定集群 */
    ClusterIds?: string[];
    /** 用于通过集群类型过滤被绑定集群 */
    ClusterTypes?: string[];
    /** 用于通过名称搜索被绑定集群 */
    ClusterName?: string;
  }

  interface DescribePrometheusClusterAgentsResponse {
    /** 被关联集群信息 */
    Agents?: PrometheusAgentOverview[];
    /** 被关联集群总量 */
    Total?: number;
    /** 是否为首次绑定，如果是首次绑定则需要安装预聚合规则 */
    IsFirstBind?: boolean;
    /** 实例组件是否需要更新镜像版本 */
    ImageNeedUpdate?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusConfigRequest {
    /** 实例id */
    InstanceId: string;
    /** 集群id */
    ClusterId: string;
    /** 集群类型 */
    ClusterType: string;
  }

  interface DescribePrometheusConfigResponse {
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
    /** 实例组件是否需要升级 */
    ImageNeedUpdate?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusGlobalConfigRequest {
    /** 实例级别抓取配置 */
    InstanceId: string;
    /** 是否禁用统计 */
    DisableStatistics?: boolean;
  }

  interface DescribePrometheusGlobalConfigResponse {
    /** 配置内容 */
    Config?: string;
    /** ServiceMonitors列表以及对应targets信息 */
    ServiceMonitors?: PrometheusConfigItem[] | null;
    /** PodMonitors列表以及对应targets信息 */
    PodMonitors?: PrometheusConfigItem[] | null;
    /** RawJobs列表以及对应targets信息 */
    RawJobs?: PrometheusConfigItem[] | null;
    /** Probes列表以及对应targets信息 */
    Probes?: PrometheusConfigItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusGlobalNotificationRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DescribePrometheusGlobalNotificationResponse {
    /** 全局告警通知渠道 */
    Notification?: PrometheusNotificationItem | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusInstanceDetailRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DescribePrometheusInstanceDetailResponse {
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

  interface DescribePrometheusInstanceInitStatusRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DescribePrometheusInstanceInitStatusResponse {
    /** 实例初始化状态，取值：uninitialized 未初始化 initializing 初始化中running 初始化完成，运行中 */
    Status?: string | null;
    /** 初始化任务步骤 */
    Steps?: TaskStepInfo[] | null;
    /** 实例eks集群ID */
    EksClusterId?: string | null;
    /** eks集群内pod的安全组 */
    SecurityGroupId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusInstanceUsageRequest {
    /** 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。 */
    InstanceIds: string[];
    /** 开始时间 */
    StartCalcDate: string;
    /** 结束时间 */
    EndCalcDate: string;
  }

  interface DescribePrometheusInstanceUsageResponse {
    /** 用量列表 */
    UsageSet?: PrometheusInstanceTenantUsage[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusInstancesOverviewRequest {
    /** 分页偏移量，默认为0 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100 */
    Limit?: number;
    /** 过滤实例，目前支持：ID: 通过实例ID来过滤 Name: 通过实例名称来过滤 */
    Filters?: Filter[];
  }

  interface DescribePrometheusInstancesOverviewResponse {
    /** 实例列表 */
    Instances?: PrometheusInstancesOverview[];
    /** 实例总数 */
    Total?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusInstancesRequest {
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

  interface DescribePrometheusInstancesResponse {
    /** 实例详细信息列表。 */
    InstanceSet?: PrometheusInstancesItem[] | null;
    /** 符合条件的实例数量。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusIntegrationMetricsRequest {
    /** 集成类型标识。取值参考DescribePrometheusIntegrations接口返回中IntegrationSet[i].Code参数 */
    IntegrationCode: string;
  }

  interface DescribePrometheusIntegrationMetricsResponse {
    /** 集成指标详情分组 */
    IntegrationMetricSet?: IntegrationMetricGroup[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusRecordRulesRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 偏移量，默认为0。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。 */
    Limit?: number;
    /** 仅支持按Name, Values字段过滤。 */
    Filters?: Filter[];
  }

  interface DescribePrometheusRecordRulesResponse {
    /** 聚合规则 */
    Records?: PrometheusRecordRuleYamlItem[];
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusRegionsRequest {
    /** 1-预付费，2-后付费，3-全地域（不填默认全地域） */
    PayMode?: number;
  }

  interface DescribePrometheusRegionsResponse {
    /** 区域列表 */
    RegionSet: PrometheusRegionItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusScrapeJobsRequest {
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

  interface DescribePrometheusScrapeJobsResponse {
    /** 任务列表 */
    ScrapeJobSet?: PrometheusScrapeJob[] | null;
    /** 任务总量 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTargetsTMPRequest {
    /** 实例id */
    InstanceId: string;
    /** 集成容器服务填绑定的集群id；集成中心填 non-cluster */
    ClusterId: string;
    /** 集群类型(可不填) */
    ClusterType?: string;
    /** 过滤条件，支持Name=ServiceMonitor/PodMonitor/Probe/RawJob/Job, Value为采集配置名称；Name=Health, Value=up, down, unknown；Name=EndPoint, Value为EndPoint地址 */
    Filters?: Filter[];
    /** targets分页偏移量，默认为0 */
    Offset?: number;
    /** targets返回数量，默认为20，最大值200 */
    Limit?: number;
  }

  interface DescribePrometheusTargetsTMPResponse {
    /** 所有Job的targets信息 */
    Jobs?: PrometheusJobTargets[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTempRequest {
    /** 仅支持按Name, Values字段过滤:* Name = Name 按照给定的模板名称列表匹配* Name = ID 按照给定的模板ID列表匹配* Name = Describe 按照给定的模板描述列表匹配* Name = Level 按照给定的模板维度(instance, cluster)列表匹配 */
    Filters?: Filter[];
    /** 分页偏移量，默认为0 */
    Offset?: number;
    /** 分页返回数量，默认为20，最大值为100 */
    Limit?: number;
  }

  interface DescribePrometheusTempResponse {
    /** 模板列表 */
    Templates?: PrometheusTemp[];
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTempSyncRequest {
    /** 模板ID */
    TemplateId: string;
  }

  interface DescribePrometheusTempSyncResponse {
    /** 同步目标详情 */
    Targets?: PrometheusTemplateSyncTarget[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusZonesRequest {
    /** 地域 ID（RegionId 和 RegionName 只需要填一个） */
    RegionId?: number;
    /** 地域名（RegionId 和 RegionName 只需要填一个） */
    RegionName?: string;
  }

  interface DescribePrometheusZonesResponse {
    /** 区域列表 */
    ZoneSet?: PrometheusZoneItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRecordingRulesRequest {
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

  interface DescribeRecordingRulesResponse {
    /** 规则组数量 */
    TotalCount?: number;
    /** 规则组详情 */
    RecordingRuleSet?: RecordingRuleSet[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRemoteURLsRequest {
    /** 实例ID */
    InstanceId: string;
    /** url数组 */
    RemoteURLs?: string[];
  }

  interface DescribeRemoteURLsResponse {
    /** 多写配置 */
    RemoteWrites?: RemoteWrite[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSSOAccountRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 填写对应的账号 ID，将会按账号 ID 进行过滤，例如：10000 */
    UserId?: string;
  }

  interface DescribeSSOAccountResponse {
    /** 授权账号列表 */
    AccountSet: GrafanaAccountInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeServiceDiscoveryRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 类型是 TKE，为对应的腾讯云容器服务集群 ID */
    KubeClusterId: string;
    /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
    KubeType: number;
  }

  interface DescribeServiceDiscoveryResponse {
    /** 返回服务发现列表信息 */
    ServiceDiscoverySet?: ServiceDiscoveryItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStatisticDataRequest {
    /** 所属模块，固定值，为monitor */
    Module: string;
    /** 命名空间，目前支持QCE/TKE2(Conditions必填),QCE/KEEWIDB,QCE/CAMP */
    Namespace: string;
    /** 指标名列表，相关指标信息可参考对应 [云产品指标文档](https://cloud.tencent.com/document/product/248/62458) */
    MetricNames: string[];
    /** 维度条件，操作符支持=、in，详情请参考对应 [指标维度信息](https://cloud.tencent.com/document/product/248/53821) */
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

  interface DescribeStatisticDataResponse {
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

  interface DestroyPrometheusInstanceRequest {
    /** 实例 ID，该实例必须先被 terminate */
    InstanceId: string;
  }

  interface DestroyPrometheusInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableGrafanaInternetRequest {
    /** Grafana 实例 ID，例如：grafana-kleu3gt0 */
    InstanceID: string;
    /** 开启或关闭公网访问，true为开启，false 为不开启 */
    EnableInternet: boolean;
  }

  interface EnableGrafanaInternetResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableGrafanaSSORequest {
    /** 是否开启 SSO，true为开启，false 为不开启 */
    EnableSSO: boolean;
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
  }

  interface EnableGrafanaSSOResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableSSOCamCheckRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 是否开启 cam 鉴权，true为开启，false 为不开启 */
    EnableSSOCamCheck: boolean;
  }

  interface EnableSSOCamCheckResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetMonitorDataRequest {
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
    /** 返回多种统计方式数据。avg, max, min (1,2,4)可以自由组合 */
    SpecifyStatistics?: number;
  }

  interface GetMonitorDataResponse {
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

  interface GetPrometheusAgentManagementCommandRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** Prometheus Agent ID */
    AgentId: string;
  }

  interface GetPrometheusAgentManagementCommandResponse {
    /** Agent 管理命令 */
    Command?: ManagementCommand;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetTopNMonitorDataRequest {
    /** topN */
    N: number;
    /** 起始时间 */
    StartTime: string;
    /** 截止时间 */
    EndTime: string;
    /** 实例对象的维度组合，格式为key-value键值对形式的集合。不同类型的实例字段完全不同，如CVM为[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]，Ckafka为[{"Name":"instanceId","Value":"ckafka-l49k54dd"}]，COS为[{"Name":"appid","Value":"1258344699"},{"Name":"bucket","Value":"rig-1258344699"}]。各个云产品的维度请参阅各个产品监控指标文档，对应的维度列即为维度组合的key，value为key对应的值。单请求最多支持批量拉取50个实例的监控数据。 */
    Instances: Instance[];
    /** 指标名称，如Bwpresourcebandwidthin，仅支持单指标拉取。各个云产品的详细指标说明请参阅各个产品监控指标文档，对应的指标英文名即为MetricName */
    MetricName: string;
    /** 命名空间，如QCE/CVM。各个云产品的详细命名空间说明请参阅各个产品监控指标文档 */
    Namespace: string;
    /** 监控统计周期，如60。默认为取值为60，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品监控指标文档，对应的统计周期列即为支持的统计周期。 */
    Period?: number;
  }

  interface GetTopNMonitorDataResponse {
    /** 指标名 */
    MetricName?: string;
    /** 统计周期 */
    Period?: number;
    /** topN */
    N?: number;
    /** 排序的监控数据 */
    OrderedDataPoints?: SingleOrderedDataPoint[];
    /** 返回信息 */
    Msg?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InstallPluginsRequest {
    /** 插件信息(可通过 DescribePluginOverviews 接口获取) */
    Plugins: GrafanaPlugin[];
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
  }

  interface InstallPluginsResponse {
    /** 已安装插件 ID */
    PluginIds?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAlarmNoticeRequest {
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
    /** 回调通知 最多6个 */
    URLNotices?: URLNotice[];
    /** 告警通知推送到CLS服务 最多1个 */
    CLSNotices?: CLSNotice[];
    /** 告警通知模板绑定的告警策略ID列表 */
    PolicyIds?: string[];
  }

  interface ModifyAlarmNoticeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAlarmPolicyConditionRequest {
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
    /** 模板id，专供prom使用 */
    NoticeIds?: string[];
    /** 启停状态，0=停用，1=启用 */
    Enable?: number;
    /** 专供prom策略名称 */
    PolicyName?: string;
    /** 事件配置的告警 */
    EbSubject?: string;
  }

  interface ModifyAlarmPolicyConditionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAlarmPolicyInfoRequest {
    /** 模块名，这里填“monitor” */
    Module: string;
    /** 告警策略 ID */
    PolicyId: string;
    /** 要修改的字段 NAME=策略名称 REMARK=策略备注 */
    Key: string;
    /** 修改后的值 */
    Value: string;
  }

  interface ModifyAlarmPolicyInfoResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAlarmPolicyNoticeRequest {
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
    /** 通知内容模板绑定信息 */
    NoticeContentTmplBindInfos?: NoticeContentTmplBindInfo[];
  }

  interface ModifyAlarmPolicyNoticeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAlarmPolicyStatusRequest {
    /** 模块名，固定值 monitor */
    Module: string;
    /** 告警策略 ID */
    PolicyId: string;
    /** 启停状态 0=停用 1=启用 */
    Enable: number;
  }

  interface ModifyAlarmPolicyStatusResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAlarmPolicyTasksRequest {
    /** 模块名，这里填“monitor” */
    Module: string;
    /** 告警策略 ID */
    PolicyId: string;
    /** 告警策略触发任务列表，空数据代表解绑 */
    TriggerTasks?: AlarmPolicyTriggerTask[];
  }

  interface ModifyAlarmPolicyTasksResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAlarmReceiversRequest {
    /** 需要修改接收人的策略组Id */
    GroupId: number;
    /** 必填。固定为“monitor” */
    Module: string;
    /** 新接收人信息, 没有填写则删除所有接收人 */
    ReceiverInfos?: ReceiverInfo[];
  }

  interface ModifyAlarmReceiversResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyGrafanaInstanceRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** Grafana 实例名称，例如：test */
    InstanceName: string;
  }

  interface ModifyGrafanaInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPolicyGroupRequest {
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

  interface ModifyPolicyGroupResponse {
    /** 策略组id */
    GroupId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusAgentExternalLabelsRequest {
    /** 实例ID */
    InstanceId: string;
    /** 集群ID */
    ClusterId: string;
    /** 新的external_labels */
    ExternalLabels: Label[];
  }

  interface ModifyPrometheusAgentExternalLabelsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusAlertPolicyRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 告警配置，[具体参考](https://cloud.tencent.com/document/api/248/30354) */
    AlertRule: PrometheusAlertPolicyItem;
  }

  interface ModifyPrometheusAlertPolicyResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusConfigRequest {
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
    /** 0: 更新实例组件镜像版本；1: 不更新实例组件镜像版本 */
    UpdateImage?: number;
  }

  interface ModifyPrometheusConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusGlobalNotificationRequest {
    /** 实例ID */
    InstanceId: string;
    /** 告警通知渠道 */
    Notification: PrometheusNotificationItem;
  }

  interface ModifyPrometheusGlobalNotificationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusInstanceAttributesRequest {
    /** 实例 ID */
    InstanceId: string;
    /** 实例名称 */
    InstanceName?: string;
    /** 数据存储时间（单位天），限制值为15, 30, 45, 90, 180, 365, 730之一 */
    DataRetentionTime?: number;
  }

  interface ModifyPrometheusInstanceAttributesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusRecordRuleYamlRequest {
    /** 实例id */
    InstanceId: string;
    /** 聚合实例名称 */
    Name: string;
    /** 新的内容 */
    Content: string;
  }

  interface ModifyPrometheusRecordRuleYamlResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusTempRequest {
    /** 模板ID */
    TemplateId: string;
    /** 修改内容 */
    Template: PrometheusTempModify;
  }

  interface ModifyPrometheusTempResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRemoteURLsRequest {
    /** 实例ID */
    InstanceId: string;
    /** 多写配置 */
    RemoteWrites?: RemoteWrite[];
  }

  interface ModifyRemoteURLsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ResumeGrafanaInstanceRequest {
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
  }

  interface ResumeGrafanaInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RunPrometheusInstanceRequest {
    /** 实例ID */
    InstanceId: string;
    /** 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化 */
    SubnetId?: string;
  }

  interface RunPrometheusInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetDefaultAlarmPolicyRequest {
    /** 模块名，固定值 monitor */
    Module: string;
    /** 告警策略 ID */
    PolicyId: string;
  }

  interface SetDefaultAlarmPolicyResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SyncPrometheusTempRequest {
    /** 实例id */
    TemplateId: string;
    /** 同步目标 */
    Targets: PrometheusTemplateSyncTarget[];
  }

  interface SyncPrometheusTempResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TerminatePrometheusInstancesRequest {
    /** 实例 ID 列表 */
    InstanceIds: string[];
  }

  interface TerminatePrometheusInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UnBindingAllPolicyObjectRequest {
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

  interface UnBindingAllPolicyObjectResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UnBindingPolicyObjectRequest {
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

  interface UnBindingPolicyObjectResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UnbindPrometheusManagedGrafanaRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** Grafana 实例 ID */
    GrafanaId: string;
  }

  interface UnbindPrometheusManagedGrafanaResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UninstallGrafanaDashboardRequest {
    /** 实例 ID */
    InstanceId: string;
    /** Prometheus 集成项 Code，删除对应的 Dashboard，Code 如下：spring_mvcmysqlgoredisjvmpgsqlmongokafkaesflinkblackboxconsulememcachedzktpsistioetcd */
    IntegrationCodes?: string[];
  }

  interface UninstallGrafanaDashboardResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UninstallGrafanaPluginsRequest {
    /** 插件 ID 数组，例如"PluginIds": [ "grafana-clock-panel" ]，可通过 DescribePluginOverviews 获取 PluginId */
    PluginIds: string[];
    /** Grafana 实例 ID，例如：grafana-abcdefg */
    InstanceId: string;
  }

  interface UninstallGrafanaPluginsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateAlertRuleRequest {
    /** Prometheus 高警规则 ID */
    RuleId: string;
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 规则状态码，取值如下：1=RuleDeleted2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
    RuleState: number;
    /** 告警规则名称 */
    RuleName: string;
    /** 告警规则表达式 */
    Expr: string;
    /** 告警规则持续时间 */
    Duration: string;
    /** 告警规则接收组列表(当前规则绑定的接收组列表可通过 DescribeAlertRules 接口获取；用户已有的接收组列表可通过 DescribeAlarmNotices 接口获取) */
    Receivers: string[];
    /** 报警规则标签列表 */
    Labels?: PrometheusRuleKV[];
    /** 报警规则注释列表。告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。 */
    Annotations?: PrometheusRuleKV[];
    /** 报警策略模板分类(自定义，可不填) */
    Type?: string;
  }

  interface UpdateAlertRuleResponse {
    /** 规则 ID */
    RuleId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateAlertRuleStateRequest {
    /** 规则 ID 列表 */
    RuleIds: string[];
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 规则状态码，取值如下：2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
    RuleState: number;
  }

  interface UpdateAlertRuleStateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateDNSConfigRequest {
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
    /** DNS 数组 */
    NameServers: string[];
  }

  interface UpdateDNSConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateExporterIntegrationRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 类型(可通过 DescribeExporterIntegrations 获取对应集成的 Kind) */
    Kind: string;
    /** 配置内容(可通过 DescribeExporterIntegrations 接口获取对应集成的 Content，并在此基础上做修改) */
    Content: string;
    /** Kubernetes 集群类型，可不填。取值如下： 1= 容器集群(TKE) 2=弹性集群(EKS) 3= Prometheus管理的弹性集群(MEKS) */
    KubeType?: number;
    /** 集群 ID，可不填 */
    ClusterId?: string;
  }

  interface UpdateExporterIntegrationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateGrafanaConfigRequest {
    /** 实例 ID */
    InstanceId: string;
    /** JSON 编码后的字符串，如 "{"server":{"root_url":"http://custom.domain"}}" */
    Config: string;
  }

  interface UpdateGrafanaConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateGrafanaEnvironmentsRequest {
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
    /** JSON 序列化后的环境变量字符串，如 "{\"key1\":\"key2\"}" */
    Envs: string;
  }

  interface UpdateGrafanaEnvironmentsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateGrafanaIntegrationRequest {
    /** 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234 */
    IntegrationId: string;
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
    /** 集成类型，可在实例详情-云产品集成-集成列表查看。例如：tencent-cloud-prometheus */
    Kind: string;
    /** 集成内容，请查看示例 */
    Content: string;
  }

  interface UpdateGrafanaIntegrationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateGrafanaNotificationChannelRequest {
    /** 通道 ID，例如：nchannel-abcd1234 */
    ChannelId: string;
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
    /** 接受告警通道 ID 数组 */
    Receivers: string[];
    /** 告警通道名称，已废弃，名称不可修改。 */
    ChannelName?: string;
    /** 已废弃，请使用 OrganizationIds */
    ExtraOrgIds?: string[];
    /** 生效的组织 ID 数组 */
    OrganizationIds?: string[];
  }

  interface UpdateGrafanaNotificationChannelResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateGrafanaWhiteListRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 白名单数组，输入白名单 IP 或 CIDR，如：127.0.0.1或127.0.0.1/24如有多个 IP 可换行输入 */
    Whitelist: string[];
  }

  interface UpdateGrafanaWhiteListResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdatePrometheusAgentStatusRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** Agent ID 列表，例如：agent-abcd1234，可在控制台 Agent 管理中获取 */
    AgentIds: string[];
    /** 要更新的状态 1= 开启 2= 关闭 */
    Status: number;
  }

  interface UpdatePrometheusAgentStatusResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdatePrometheusAlertGroupRequest {
    /** prometheus实例ID */
    InstanceId?: string;
    /** 告警分组ID，形如alert-xxxx */
    GroupId?: string;
    /** 告警分组名称，不能与其他告警分组重名 */
    GroupName?: string;
    /** 告警分组状态：2 -- 启用3 -- 禁用不为空时会覆盖 `Rules`字段下所有告警规则状态 */
    GroupState?: number;
    /** 云监控告警通知模板ID列表，形如Consumer-xxxx或notice-xxxx */
    AMPReceivers?: string[];
    /** 自定义告警通知模板 */
    CustomReceiver?: PrometheusAlertCustomReceiver;
    /** 告警通知周期（收敛时间），为空默认1h */
    RepeatInterval?: string;
    /** 要创建的告警规则列表 */
    Rules?: PrometheusAlertGroupRuleSet[];
  }

  interface UpdatePrometheusAlertGroupResponse {
    /** 更新的告警分组ID，满足正则表达式`alert-[a-z0-9]{8}` */
    GroupId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdatePrometheusAlertGroupStateRequest {
    /** Prometheus 实例 ID */
    InstanceId?: string;
    /** 告警分组ID列表，形如alert-xxxx */
    GroupIds?: string[];
    /** 告警分组状态2 -- 启用3 -- 禁用 */
    GroupState?: number;
  }

  interface UpdatePrometheusAlertGroupStateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdatePrometheusScrapeJobRequest {
    /** Prometheus 实例 ID(可通过 DescribePrometheusInstances 接口获取) */
    InstanceId: string;
    /** Agent ID(可通过DescribePrometheusAgents 接口获取) */
    AgentId: string;
    /** 抓取任务 ID(可通过 DescribePrometheusScrapeJobs 接口获取) */
    JobId: string;
    /** 抓取任务配置 */
    Config: string;
  }

  interface UpdatePrometheusScrapeJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateRecordingRuleRequest {
    /** 聚合规则名称 */
    Name: string;
    /** 聚合规则组内容，格式为 yaml，通过 base64 进行编码。 */
    Group: string;
    /** Prometheus 实例 ID(可通过 DescribePrometheusInstances 接口获取) */
    InstanceId: string;
    /** Prometheus 聚合规则 ID(可通过 DescribeRecordingRules 接口获取) */
    RuleId: string;
    /** 规则状态码，取值如下：1=RuleDeleted2=RuleEnabled3=RuleDisabled默认状态码为 2 启用。 */
    RuleState?: number;
  }

  interface UpdateRecordingRuleResponse {
    /** 规则 ID */
    RuleId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateSSOAccountRequest {
    /** Grafana 实例 ID，例如：grafana-abcdefgh */
    InstanceId: string;
    /** 用户账号 ID ，例如：10000000 */
    UserId: string;
    /** 权限 */
    Role?: GrafanaAccountRole[];
    /** 备注 */
    Notes?: string;
  }

  interface UpdateSSOAccountResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateServiceDiscoveryRequest {
    /** Prometheus 实例 ID */
    InstanceId: string;
    /** 类型是 TKE，为对应的腾讯云容器服务集群 ID */
    KubeClusterId: string;
    /** 用户 Kubernetes 集群类型： 1 = 容器服务集群(TKE) */
    KubeType: number;
    /** 服务发现类型，取值如下： 1 = ServiceMonitor 2 = PodMonitor 3 = JobMonitor */
    Type: number;
    /** 服务发现配置信息，YAML 格式，[具体YAML参数内容请参考](https://cloud.tencent.com/document/product/1416/55995) */
    Yaml: string;
  }

  interface UpdateServiceDiscoveryResponse {
    /** 更新成功之后，返回对应服务发现的信息 */
    ServiceDiscovery?: ServiceDiscoveryItem;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeGrafanaDashboardRequest {
    /** 实例 ID */
    InstanceId: string;
    /** Prometheus 集成项 Code，升级对应的 Dashboard，取值如下：qcloudcvm_process_exportercvm_node_exportercvmtpsnginx-ingressnvidia-gpucdwchemrapacherocketmqrabbitmqspring_mvcmysqlmssqlgoredisjvmpgsqlcephdockernginxoracledbmongokafkaesflinkblackboxconsulememcachedzktpsistioetcdptskong */
    IntegrationCodes?: string[];
  }

  interface UpgradeGrafanaDashboardResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeGrafanaInstanceRequest {
    /** Grafana 实例 ID，例如：grafana-12345678 */
    InstanceId: string;
    /** 版本别名，目前固定为 v9.1.5 */
    Alias: string;
  }

  interface UpgradeGrafanaInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Monitor 腾讯云可观测平台} */
declare interface Monitor {
  (): Versions;
  /** 拉取指标监控数据 {@link GetMonitorDataRequest} {@link GetMonitorDataResponse} */
  GetMonitorData(data: GetMonitorDataRequest, config?: AxiosRequestConfig): AxiosPromise<GetMonitorDataResponse>;
  /** 绑定 Grafana 可视化实例 {@link V20180724.BindPrometheusManagedGrafanaRequest} {@link V20180724.BindPrometheusManagedGrafanaResponse} */
  BindPrometheusManagedGrafana(data: V20180724.BindPrometheusManagedGrafanaRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.BindPrometheusManagedGrafanaResponse>;
  /** 绑定策略对象 {@link V20180724.BindingPolicyObjectRequest} {@link V20180724.BindingPolicyObjectResponse} */
  BindingPolicyObject(data: V20180724.BindingPolicyObjectRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.BindingPolicyObjectResponse>;
  /** 策略绑定标签 {@link V20180724.BindingPolicyTagRequest} {@link V20180724.BindingPolicyTagResponse} */
  BindingPolicyTag(data: V20180724.BindingPolicyTagRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.BindingPolicyTagResponse>;
  /** 强制销毁 Grafana 实例 {@link V20180724.CleanGrafanaInstanceRequest} {@link V20180724.CleanGrafanaInstanceResponse} */
  CleanGrafanaInstance(data: V20180724.CleanGrafanaInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CleanGrafanaInstanceResponse>;
  /** 创建通知模板 {@link V20180724.CreateAlarmNoticeRequest} {@link V20180724.CreateAlarmNoticeResponse} */
  CreateAlarmNotice(data: V20180724.CreateAlarmNoticeRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateAlarmNoticeResponse>;
  /** 创建腾讯云可观测平台告警策略 {@link V20180724.CreateAlarmPolicyRequest} {@link V20180724.CreateAlarmPolicyResponse} */
  CreateAlarmPolicy(data: V20180724.CreateAlarmPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateAlarmPolicyResponse>;
  /** 创建告警屏蔽规则 {@link V20180724.CreateAlarmShieldRequest} {@link V20180724.CreateAlarmShieldResponse} */
  CreateAlarmShield(data: V20180724.CreateAlarmShieldRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateAlarmShieldResponse>;
  /** 创建告警规则 {@link V20180724.CreateAlertRuleRequest} {@link V20180724.CreateAlertRuleResponse} */
  CreateAlertRule(data: V20180724.CreateAlertRuleRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateAlertRuleResponse>;
  /** 创建告警条件模板 {@link V20180724.CreateConditionsTemplateRequest} {@link V20180724.CreateConditionsTemplateResponse} */
  CreateConditionsTemplate(data: V20180724.CreateConditionsTemplateRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateConditionsTemplateResponse>;
  /** 创建 exporter 集成 {@link V20180724.CreateExporterIntegrationRequest} {@link V20180724.CreateExporterIntegrationResponse} */
  CreateExporterIntegration(data: V20180724.CreateExporterIntegrationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateExporterIntegrationResponse>;
  /** 创建 Grafana 实例 {@link V20180724.CreateGrafanaInstanceRequest} {@link V20180724.CreateGrafanaInstanceResponse} */
  CreateGrafanaInstance(data: V20180724.CreateGrafanaInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateGrafanaInstanceResponse>;
  /** 创建 Grafana 集成配置 {@link V20180724.CreateGrafanaIntegrationRequest} {@link V20180724.CreateGrafanaIntegrationResponse} */
  CreateGrafanaIntegration(data: V20180724.CreateGrafanaIntegrationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateGrafanaIntegrationResponse>;
  /** 创建 Grafana 告警通道 {@link V20180724.CreateGrafanaNotificationChannelRequest} {@link V20180724.CreateGrafanaNotificationChannelResponse} */
  CreateGrafanaNotificationChannel(data: V20180724.CreateGrafanaNotificationChannelRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateGrafanaNotificationChannelResponse>;
  /** 增加策略组 {@link V20180724.CreatePolicyGroupRequest} {@link V20180724.CreatePolicyGroupResponse} */
  CreatePolicyGroup(data: V20180724.CreatePolicyGroupRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePolicyGroupResponse>;
  /** 创建 Prometheus CVM Agent {@link V20180724.CreatePrometheusAgentRequest} {@link V20180724.CreatePrometheusAgentResponse} */
  CreatePrometheusAgent(data: V20180724.CreatePrometheusAgentRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusAgentResponse>;
  /** 创建Prometheus告警规则分组 {@link V20180724.CreatePrometheusAlertGroupRequest} {@link V20180724.CreatePrometheusAlertGroupResponse} */
  CreatePrometheusAlertGroup(data: V20180724.CreatePrometheusAlertGroupRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusAlertGroupResponse>;
  /** 创建Prometheus告警策略 {@link V20180724.CreatePrometheusAlertPolicyRequest} {@link V20180724.CreatePrometheusAlertPolicyResponse} */
  CreatePrometheusAlertPolicy(data: V20180724.CreatePrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusAlertPolicyResponse>;
  /** 2.0实例关联集群 {@link V20180724.CreatePrometheusClusterAgentRequest} {@link V20180724.CreatePrometheusClusterAgentResponse} */
  CreatePrometheusClusterAgent(data: V20180724.CreatePrometheusClusterAgentRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusClusterAgentResponse>;
  /** 创建prometheus配置 {@link V20180724.CreatePrometheusConfigRequest} {@link V20180724.CreatePrometheusConfigResponse} */
  CreatePrometheusConfig(data: V20180724.CreatePrometheusConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusConfigResponse>;
  /** 创建全局告警通知渠道 {@link V20180724.CreatePrometheusGlobalNotificationRequest} {@link V20180724.CreatePrometheusGlobalNotificationResponse} */
  CreatePrometheusGlobalNotification(data: V20180724.CreatePrometheusGlobalNotificationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusGlobalNotificationResponse>;
  /** 创建按量 Prometheus 实例 {@link V20180724.CreatePrometheusMultiTenantInstancePostPayModeRequest} {@link V20180724.CreatePrometheusMultiTenantInstancePostPayModeResponse} */
  CreatePrometheusMultiTenantInstancePostPayMode(data: V20180724.CreatePrometheusMultiTenantInstancePostPayModeRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusMultiTenantInstancePostPayModeResponse>;
  /** 以Yaml的方式创建聚合规则 {@link V20180724.CreatePrometheusRecordRuleYamlRequest} {@link V20180724.CreatePrometheusRecordRuleYamlResponse} */
  CreatePrometheusRecordRuleYaml(data: V20180724.CreatePrometheusRecordRuleYamlRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusRecordRuleYamlResponse>;
  /** 创建 Prometheus 抓取任务 {@link V20180724.CreatePrometheusScrapeJobRequest} {@link V20180724.CreatePrometheusScrapeJobResponse} */
  CreatePrometheusScrapeJob(data: V20180724.CreatePrometheusScrapeJobRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusScrapeJobResponse>;
  /** 新建模板 {@link V20180724.CreatePrometheusTempRequest} {@link V20180724.CreatePrometheusTempResponse} */
  CreatePrometheusTemp(data: V20180724.CreatePrometheusTempRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreatePrometheusTempResponse>;
  /** 创建预聚合规则 {@link V20180724.CreateRecordingRuleRequest} {@link V20180724.CreateRecordingRuleResponse} */
  CreateRecordingRule(data: V20180724.CreateRecordingRuleRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateRecordingRuleResponse>;
  /** 授权腾讯云用户 {@link V20180724.CreateSSOAccountRequest} {@link V20180724.CreateSSOAccountResponse} */
  CreateSSOAccount(data: V20180724.CreateSSOAccountRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateSSOAccountResponse>;
  /** 创建服务发现 {@link V20180724.CreateServiceDiscoveryRequest} {@link V20180724.CreateServiceDiscoveryResponse} */
  CreateServiceDiscovery(data: V20180724.CreateServiceDiscoveryRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.CreateServiceDiscoveryResponse>;
  /** 删除告警通知模板（批量） {@link V20180724.DeleteAlarmNoticesRequest} {@link V20180724.DeleteAlarmNoticesResponse} */
  DeleteAlarmNotices(data: V20180724.DeleteAlarmNoticesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteAlarmNoticesResponse>;
  /** 删除告警策略 {@link V20180724.DeleteAlarmPolicyRequest} {@link V20180724.DeleteAlarmPolicyResponse} */
  DeleteAlarmPolicy(data: V20180724.DeleteAlarmPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteAlarmPolicyResponse>;
  /** 删除报警规则 {@link V20180724.DeleteAlertRulesRequest} {@link V20180724.DeleteAlertRulesResponse} */
  DeleteAlertRules(data: V20180724.DeleteAlertRulesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteAlertRulesResponse>;
  /** 删除 exporter 集成 {@link V20180724.DeleteExporterIntegrationRequest} {@link V20180724.DeleteExporterIntegrationResponse} */
  DeleteExporterIntegration(data: V20180724.DeleteExporterIntegrationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteExporterIntegrationResponse>;
  /** 删除 Grafana 实例 {@link V20180724.DeleteGrafanaInstanceRequest} {@link V20180724.DeleteGrafanaInstanceResponse} */
  DeleteGrafanaInstance(data: V20180724.DeleteGrafanaInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteGrafanaInstanceResponse>;
  /** 删除 Grafana 集成配置 {@link V20180724.DeleteGrafanaIntegrationRequest} {@link V20180724.DeleteGrafanaIntegrationResponse} */
  DeleteGrafanaIntegration(data: V20180724.DeleteGrafanaIntegrationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteGrafanaIntegrationResponse>;
  /** 删除 Grafana 告警通道 {@link V20180724.DeleteGrafanaNotificationChannelRequest} {@link V20180724.DeleteGrafanaNotificationChannelResponse} */
  DeleteGrafanaNotificationChannel(data: V20180724.DeleteGrafanaNotificationChannelRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteGrafanaNotificationChannelResponse>;
  /** 删除告警策略组 {@link V20180724.DeletePolicyGroupRequest} {@link V20180724.DeletePolicyGroupResponse} */
  DeletePolicyGroup(data: V20180724.DeletePolicyGroupRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePolicyGroupResponse>;
  /** 删除Prometheus告警规则分组 {@link V20180724.DeletePrometheusAlertGroupsRequest} {@link V20180724.DeletePrometheusAlertGroupsResponse} */
  DeletePrometheusAlertGroups(data: V20180724.DeletePrometheusAlertGroupsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusAlertGroupsResponse>;
  /** 删除2.0实例告警策略 {@link V20180724.DeletePrometheusAlertPolicyRequest} {@link V20180724.DeletePrometheusAlertPolicyResponse} */
  DeletePrometheusAlertPolicy(data: V20180724.DeletePrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusAlertPolicyResponse>;
  /** 解除TMP实例的集群关联 {@link V20180724.DeletePrometheusClusterAgentRequest} {@link V20180724.DeletePrometheusClusterAgentResponse} */
  DeletePrometheusClusterAgent(data: V20180724.DeletePrometheusClusterAgentRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusClusterAgentResponse>;
  /** 删除Prometheus配置 {@link V20180724.DeletePrometheusConfigRequest} {@link V20180724.DeletePrometheusConfigResponse} */
  DeletePrometheusConfig(data: V20180724.DeletePrometheusConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusConfigResponse>;
  /** 删除聚合实例 {@link V20180724.DeletePrometheusRecordRuleYamlRequest} {@link V20180724.DeletePrometheusRecordRuleYamlResponse} */
  DeletePrometheusRecordRuleYaml(data: V20180724.DeletePrometheusRecordRuleYamlRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusRecordRuleYamlResponse>;
  /** 删除 Prometheus 抓取任务 {@link V20180724.DeletePrometheusScrapeJobsRequest} {@link V20180724.DeletePrometheusScrapeJobsResponse} */
  DeletePrometheusScrapeJobs(data: V20180724.DeletePrometheusScrapeJobsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusScrapeJobsResponse>;
  /** 删除模板实例 {@link V20180724.DeletePrometheusTempRequest} {@link V20180724.DeletePrometheusTempResponse} */
  DeletePrometheusTemp(data: V20180724.DeletePrometheusTempRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusTempResponse>;
  /** 解除模板同步 {@link V20180724.DeletePrometheusTempSyncRequest} {@link V20180724.DeletePrometheusTempSyncResponse} */
  DeletePrometheusTempSync(data: V20180724.DeletePrometheusTempSyncRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeletePrometheusTempSyncResponse>;
  /** 删除预聚合规则 {@link V20180724.DeleteRecordingRulesRequest} {@link V20180724.DeleteRecordingRulesResponse} */
  DeleteRecordingRules(data: V20180724.DeleteRecordingRulesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteRecordingRulesResponse>;
  /** 删除授权用户 {@link V20180724.DeleteSSOAccountRequest} {@link V20180724.DeleteSSOAccountResponse} */
  DeleteSSOAccount(data: V20180724.DeleteSSOAccountRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteSSOAccountResponse>;
  /** 删除服务发现 {@link V20180724.DeleteServiceDiscoveryRequest} {@link V20180724.DeleteServiceDiscoveryResponse} */
  DeleteServiceDiscovery(data: V20180724.DeleteServiceDiscoveryRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DeleteServiceDiscoveryResponse>;
  /** 获取平台事件列表 {@link V20180724.DescribeAccidentEventListRequest} {@link V20180724.DescribeAccidentEventListResponse} */
  DescribeAccidentEventList(data: V20180724.DescribeAccidentEventListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAccidentEventListResponse>;
  /** 查询告警事件列表 {@link V20180724.DescribeAlarmEventsRequest} {@link V20180724.DescribeAlarmEventsResponse} */
  DescribeAlarmEvents(data: V20180724.DescribeAlarmEventsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmEventsResponse>;
  /** 查询告警历史 {@link V20180724.DescribeAlarmHistoriesRequest} {@link V20180724.DescribeAlarmHistoriesResponse} */
  DescribeAlarmHistories(data: V20180724.DescribeAlarmHistoriesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmHistoriesResponse>;
  /** 查询告警指标列表 {@link V20180724.DescribeAlarmMetricsRequest} {@link V20180724.DescribeAlarmMetricsResponse} */
  DescribeAlarmMetrics(data: V20180724.DescribeAlarmMetricsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmMetricsResponse>;
  /** 查询单个通知模板的详情 {@link V20180724.DescribeAlarmNoticeRequest} {@link V20180724.DescribeAlarmNoticeResponse} */
  DescribeAlarmNotice(data: V20180724.DescribeAlarmNoticeRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmNoticeResponse>;
  /** 查询账号下所有回调URL列表 {@link V20180724.DescribeAlarmNoticeCallbacksRequest} {@link V20180724.DescribeAlarmNoticeCallbacksResponse} */
  DescribeAlarmNoticeCallbacks(data: V20180724.DescribeAlarmNoticeCallbacksRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmNoticeCallbacksResponse>;
  /** 查询通知模板列表 {@link V20180724.DescribeAlarmNoticesRequest} {@link V20180724.DescribeAlarmNoticesResponse} */
  DescribeAlarmNotices(data: V20180724.DescribeAlarmNoticesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmNoticesResponse>;
  /** 查询告警策略列表（支持按实例等条件筛选） {@link V20180724.DescribeAlarmPoliciesRequest} {@link V20180724.DescribeAlarmPoliciesResponse} */
  DescribeAlarmPolicies(data: V20180724.DescribeAlarmPoliciesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmPoliciesResponse>;
  /** 获取单个告警策略详情 {@link V20180724.DescribeAlarmPolicyRequest} {@link V20180724.DescribeAlarmPolicyResponse} */
  DescribeAlarmPolicy(data: V20180724.DescribeAlarmPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmPolicyResponse>;
  /** 获取告警短信配额 {@link V20180724.DescribeAlarmSmsQuotaRequest} {@link V20180724.DescribeAlarmSmsQuotaResponse} */
  DescribeAlarmSmsQuota(data: V20180724.DescribeAlarmSmsQuotaRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlarmSmsQuotaResponse>;
  /** 报警规则查询 {@link V20180724.DescribeAlertRulesRequest} {@link V20180724.DescribeAlertRulesResponse} */
  DescribeAlertRules(data: V20180724.DescribeAlertRulesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAlertRulesResponse>;
  /** 查询所有名字空间 {@link V20180724.DescribeAllNamespacesRequest} {@link V20180724.DescribeAllNamespacesResponse} */
  DescribeAllNamespaces(data: V20180724.DescribeAllNamespacesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeAllNamespacesResponse>;
  /** 获取基础指标属性 {@link V20180724.DescribeBaseMetricsRequest} {@link V20180724.DescribeBaseMetricsResponse} */
  DescribeBaseMetrics(data: V20180724.DescribeBaseMetricsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeBaseMetricsResponse>;
  /** 获取基础告警列表 {@link V20180724.DescribeBasicAlarmListRequest} {@link V20180724.DescribeBasicAlarmListResponse} */
  DescribeBasicAlarmList(data: V20180724.DescribeBasicAlarmListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeBasicAlarmListResponse>;
  /** 获取已绑定对象列表 {@link V20180724.DescribeBindingPolicyObjectListRequest} {@link V20180724.DescribeBindingPolicyObjectListResponse} */
  DescribeBindingPolicyObjectList(data: V20180724.DescribeBindingPolicyObjectListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeBindingPolicyObjectListResponse>;
  /** 获取集群绑定进度 {@link V20180724.DescribeClusterAgentCreatingProgressRequest} {@link V20180724.DescribeClusterAgentCreatingProgressResponse} */
  DescribeClusterAgentCreatingProgress(data: V20180724.DescribeClusterAgentCreatingProgressRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeClusterAgentCreatingProgressResponse>;
  /** 获取条件模板列表 {@link V20180724.DescribeConditionsTemplateListRequest} {@link V20180724.DescribeConditionsTemplateListResponse} */
  DescribeConditionsTemplateList(data: V20180724.DescribeConditionsTemplateListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeConditionsTemplateListResponse>;
  /** 列出 Grafana DNS 配置 {@link V20180724.DescribeDNSConfigRequest} {@link V20180724.DescribeDNSConfigResponse} */
  DescribeDNSConfig(data: V20180724.DescribeDNSConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeDNSConfigResponse>;
  /** 查询 exporter 集成列表 {@link V20180724.DescribeExporterIntegrationsRequest} {@link V20180724.DescribeExporterIntegrationsResponse} */
  DescribeExporterIntegrations(data: V20180724.DescribeExporterIntegrationsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeExporterIntegrationsResponse>;
  /** 列出 Grafana 所有告警通道 {@link V20180724.DescribeGrafanaChannelsRequest} {@link V20180724.DescribeGrafanaChannelsResponse} */
  DescribeGrafanaChannels(data: V20180724.DescribeGrafanaChannelsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeGrafanaChannelsResponse>;
  /** 列出 Grafana 的设置 {@link V20180724.DescribeGrafanaConfigRequest} {@link V20180724.DescribeGrafanaConfigResponse} */
  DescribeGrafanaConfig(data: V20180724.DescribeGrafanaConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeGrafanaConfigResponse>;
  /** 列出 Grafana 环境变量 {@link V20180724.DescribeGrafanaEnvironmentsRequest} {@link V20180724.DescribeGrafanaEnvironmentsResponse} */
  DescribeGrafanaEnvironments(data: V20180724.DescribeGrafanaEnvironmentsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeGrafanaEnvironmentsResponse>;
  /** 列出用户所有的 Grafana 服务 {@link V20180724.DescribeGrafanaInstancesRequest} {@link V20180724.DescribeGrafanaInstancesResponse} */
  DescribeGrafanaInstances(data: V20180724.DescribeGrafanaInstancesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeGrafanaInstancesResponse>;
  /** 列出 Grafana 已安装的集成 {@link V20180724.DescribeGrafanaIntegrationsRequest} {@link V20180724.DescribeGrafanaIntegrationsResponse} */
  DescribeGrafanaIntegrations(data: V20180724.DescribeGrafanaIntegrationsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeGrafanaIntegrationsResponse>;
  /** 列出 Grafana 告警通道 {@link V20180724.DescribeGrafanaNotificationChannelsRequest} {@link V20180724.DescribeGrafanaNotificationChannelsResponse} */
  DescribeGrafanaNotificationChannels(data: V20180724.DescribeGrafanaNotificationChannelsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeGrafanaNotificationChannelsResponse>;
  /** 列出 Grafana 白名单 {@link V20180724.DescribeGrafanaWhiteListRequest} {@link V20180724.DescribeGrafanaWhiteListResponse} */
  DescribeGrafanaWhiteList(data: V20180724.DescribeGrafanaWhiteListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeGrafanaWhiteListResponse>;
  /** 列出实例已安装的插件 {@link V20180724.DescribeInstalledPluginsRequest} {@link V20180724.DescribeInstalledPluginsResponse} */
  DescribeInstalledPlugins(data: V20180724.DescribeInstalledPluginsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeInstalledPluginsResponse>;
  /** 资源消耗页概览接口 {@link V20180724.DescribeMonitorResourceInfoRequest} {@link V20180724.DescribeMonitorResourceInfoResponse} */
  DescribeMonitorResourceInfo(data: V20180724.DescribeMonitorResourceInfoRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeMonitorResourceInfoResponse>;
  /** 查询监控类型 {@link V20180724.DescribeMonitorTypesRequest} {@link V20180724.DescribeMonitorTypesResponse} */
  DescribeMonitorTypes(data: V20180724.DescribeMonitorTypesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeMonitorTypesResponse>;
  /** 查询周期内电话流水总数 {@link V20180724.DescribePhoneAlarmFlowTotalCountRequest} {@link V20180724.DescribePhoneAlarmFlowTotalCountResponse} */
  DescribePhoneAlarmFlowTotalCount(data: V20180724.DescribePhoneAlarmFlowTotalCountRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePhoneAlarmFlowTotalCountResponse>;
  /** 列出所有 Grafana 插件 {@link V20180724.DescribePluginOverviewsRequest} {@link V20180724.DescribePluginOverviewsResponse} */
  DescribePluginOverviews(data: V20180724.DescribePluginOverviewsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePluginOverviewsResponse>;
  /** 获取基础告警策略条件 {@link V20180724.DescribePolicyConditionListRequest} {@link V20180724.DescribePolicyConditionListResponse} */
  DescribePolicyConditionList(data: V20180724.DescribePolicyConditionListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePolicyConditionListResponse>;
  /** 获取基础策略组详情 {@link V20180724.DescribePolicyGroupInfoRequest} {@link V20180724.DescribePolicyGroupInfoResponse} */
  DescribePolicyGroupInfo(data: V20180724.DescribePolicyGroupInfoRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePolicyGroupInfoResponse>;
  /** 获取基础策略告警组列表 {@link V20180724.DescribePolicyGroupListRequest} {@link V20180724.DescribePolicyGroupListResponse} */
  DescribePolicyGroupList(data: V20180724.DescribePolicyGroupListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePolicyGroupListResponse>;
  /** 获取产品事件列表 {@link V20180724.DescribeProductEventListRequest} {@link V20180724.DescribeProductEventListResponse} */
  DescribeProductEventList(data: V20180724.DescribeProductEventListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeProductEventListResponse>;
  /** 查询云产品列表 {@link V20180724.DescribeProductListRequest} {@link V20180724.DescribeProductListResponse} */
  DescribeProductList(data: V20180724.DescribeProductListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeProductListResponse>;
  /** 获取关联目标集群的实例列表 {@link V20180724.DescribePrometheusAgentInstancesRequest} {@link V20180724.DescribePrometheusAgentInstancesResponse} */
  DescribePrometheusAgentInstances(data: V20180724.DescribePrometheusAgentInstancesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusAgentInstancesResponse>;
  /** 列出 Prometheus CVM Agent {@link V20180724.DescribePrometheusAgentsRequest} {@link V20180724.DescribePrometheusAgentsResponse} */
  DescribePrometheusAgents(data: V20180724.DescribePrometheusAgentsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusAgentsResponse>;
  /** 列出Prometheus告警分组 {@link V20180724.DescribePrometheusAlertGroupsRequest} {@link V20180724.DescribePrometheusAlertGroupsResponse} */
  DescribePrometheusAlertGroups(data: V20180724.DescribePrometheusAlertGroupsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusAlertGroupsResponse>;
  /** 获取2.0实例告警策略列表 {@link V20180724.DescribePrometheusAlertPolicyRequest} {@link V20180724.DescribePrometheusAlertPolicyResponse} */
  DescribePrometheusAlertPolicy(data: V20180724.DescribePrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusAlertPolicyResponse>;
  /** 获取TMP实例关联集群列表 {@link V20180724.DescribePrometheusClusterAgentsRequest} {@link V20180724.DescribePrometheusClusterAgentsResponse} */
  DescribePrometheusClusterAgents(data: V20180724.DescribePrometheusClusterAgentsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusClusterAgentsResponse>;
  /** 拉取Prometheus配置 {@link V20180724.DescribePrometheusConfigRequest} {@link V20180724.DescribePrometheusConfigResponse} */
  DescribePrometheusConfig(data: V20180724.DescribePrometheusConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusConfigResponse>;
  /** 获得实例级别抓取配置 {@link V20180724.DescribePrometheusGlobalConfigRequest} {@link V20180724.DescribePrometheusGlobalConfigResponse} */
  DescribePrometheusGlobalConfig(data: V20180724.DescribePrometheusGlobalConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusGlobalConfigResponse>;
  /** 查询全局告警通知渠道 {@link V20180724.DescribePrometheusGlobalNotificationRequest} {@link V20180724.DescribePrometheusGlobalNotificationResponse} */
  DescribePrometheusGlobalNotification(data: V20180724.DescribePrometheusGlobalNotificationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusGlobalNotificationResponse>;
  /** 获取TMP实例详情 {@link V20180724.DescribePrometheusInstanceDetailRequest} {@link V20180724.DescribePrometheusInstanceDetailResponse} */
  DescribePrometheusInstanceDetail(data: V20180724.DescribePrometheusInstanceDetailRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusInstanceDetailResponse>;
  /** 获取2.0实例初始化任务状态 {@link V20180724.DescribePrometheusInstanceInitStatusRequest} {@link V20180724.DescribePrometheusInstanceInitStatusResponse} */
  DescribePrometheusInstanceInitStatus(data: V20180724.DescribePrometheusInstanceInitStatusRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusInstanceInitStatusResponse>;
  /** 查询Prometheus按量实例用量 {@link V20180724.DescribePrometheusInstanceUsageRequest} {@link V20180724.DescribePrometheusInstanceUsageResponse} */
  DescribePrometheusInstanceUsage(data: V20180724.DescribePrometheusInstanceUsageRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusInstanceUsageResponse>;
  /** 查看 Prometheus 实例列表 {@link V20180724.DescribePrometheusInstancesRequest} {@link V20180724.DescribePrometheusInstancesResponse} */
  DescribePrometheusInstances(data: V20180724.DescribePrometheusInstancesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusInstancesResponse>;
  /** 获取2.0实例列表 {@link V20180724.DescribePrometheusInstancesOverviewRequest} {@link V20180724.DescribePrometheusInstancesOverviewResponse} */
  DescribePrometheusInstancesOverview(data: V20180724.DescribePrometheusInstancesOverviewRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusInstancesOverviewResponse>;
  /** 获取prometheus集成指标 {@link V20180724.DescribePrometheusIntegrationMetricsRequest} {@link V20180724.DescribePrometheusIntegrationMetricsResponse} */
  DescribePrometheusIntegrationMetrics(data: V20180724.DescribePrometheusIntegrationMetricsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusIntegrationMetricsResponse>;
  /** 获取聚合规则列表，包含关联集群内的资源 {@link V20180724.DescribePrometheusRecordRulesRequest} {@link V20180724.DescribePrometheusRecordRulesResponse} */
  DescribePrometheusRecordRules(data: V20180724.DescribePrometheusRecordRulesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusRecordRulesResponse>;
  /** 列出 Prometheus 服务所有可用的地域 {@link V20180724.DescribePrometheusRegionsRequest} {@link V20180724.DescribePrometheusRegionsResponse} */
  DescribePrometheusRegions(data: V20180724.DescribePrometheusRegionsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusRegionsResponse>;
  /** 列出 Prometheus 抓取任务 {@link V20180724.DescribePrometheusScrapeJobsRequest} {@link V20180724.DescribePrometheusScrapeJobsResponse} */
  DescribePrometheusScrapeJobs(data: V20180724.DescribePrometheusScrapeJobsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusScrapeJobsResponse>;
  /** 获取targets信息 {@link V20180724.DescribePrometheusTargetsTMPRequest} {@link V20180724.DescribePrometheusTargetsTMPResponse} */
  DescribePrometheusTargetsTMP(data: V20180724.DescribePrometheusTargetsTMPRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusTargetsTMPResponse>;
  /** 拉取模板列表 {@link V20180724.DescribePrometheusTempRequest} {@link V20180724.DescribePrometheusTempResponse} */
  DescribePrometheusTemp(data: V20180724.DescribePrometheusTempRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusTempResponse>;
  /** 获取模板关联实例信息 {@link V20180724.DescribePrometheusTempSyncRequest} {@link V20180724.DescribePrometheusTempSyncResponse} */
  DescribePrometheusTempSync(data: V20180724.DescribePrometheusTempSyncRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusTempSyncResponse>;
  /** 列出 Prometheus 服务可用区 {@link V20180724.DescribePrometheusZonesRequest} {@link V20180724.DescribePrometheusZonesResponse} */
  DescribePrometheusZones(data: V20180724.DescribePrometheusZonesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribePrometheusZonesResponse>;
  /** 查询预聚合规则 {@link V20180724.DescribeRecordingRulesRequest} {@link V20180724.DescribeRecordingRulesResponse} */
  DescribeRecordingRules(data: V20180724.DescribeRecordingRulesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeRecordingRulesResponse>;
  /** 获取多写配置详情 {@link V20180724.DescribeRemoteURLsRequest} {@link V20180724.DescribeRemoteURLsResponse} */
  DescribeRemoteURLs(data: V20180724.DescribeRemoteURLsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeRemoteURLsResponse>;
  /** 列出授权账号 {@link V20180724.DescribeSSOAccountRequest} {@link V20180724.DescribeSSOAccountResponse} */
  DescribeSSOAccount(data: V20180724.DescribeSSOAccountRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeSSOAccountResponse>;
  /** 列出服务发现列表 {@link V20180724.DescribeServiceDiscoveryRequest} {@link V20180724.DescribeServiceDiscoveryResponse} */
  DescribeServiceDiscovery(data: V20180724.DescribeServiceDiscoveryRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeServiceDiscoveryResponse>;
  /** 根据维度条件查询监控数据 {@link V20180724.DescribeStatisticDataRequest} {@link V20180724.DescribeStatisticDataResponse} */
  DescribeStatisticData(data: V20180724.DescribeStatisticDataRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DescribeStatisticDataResponse>;
  /** 强制释放 Prometheus 实例 {@link V20180724.DestroyPrometheusInstanceRequest} {@link V20180724.DestroyPrometheusInstanceResponse} */
  DestroyPrometheusInstance(data: V20180724.DestroyPrometheusInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.DestroyPrometheusInstanceResponse>;
  /** 设置 Grafana 公网访问 {@link V20180724.EnableGrafanaInternetRequest} {@link V20180724.EnableGrafanaInternetResponse} */
  EnableGrafanaInternet(data: V20180724.EnableGrafanaInternetRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.EnableGrafanaInternetResponse>;
  /** 设置 Grafana 单点登录 {@link V20180724.EnableGrafanaSSORequest} {@link V20180724.EnableGrafanaSSOResponse} */
  EnableGrafanaSSO(data: V20180724.EnableGrafanaSSORequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.EnableGrafanaSSOResponse>;
  /** 设置SSO登录是否鉴权 {@link V20180724.EnableSSOCamCheckRequest} {@link V20180724.EnableSSOCamCheckResponse} */
  EnableSSOCamCheck(data: V20180724.EnableSSOCamCheckRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.EnableSSOCamCheckResponse>;
  /** 拉取指标监控数据 {@link V20180724.GetMonitorDataRequest} {@link V20180724.GetMonitorDataResponse} */
  GetMonitorData(data: V20180724.GetMonitorDataRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.GetMonitorDataResponse>;
  /** 获取 Prometheus Agent 管理相关的命令行 {@link V20180724.GetPrometheusAgentManagementCommandRequest} {@link V20180724.GetPrometheusAgentManagementCommandResponse} */
  GetPrometheusAgentManagementCommand(data: V20180724.GetPrometheusAgentManagementCommandRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.GetPrometheusAgentManagementCommandResponse>;
  /** 获取TopN监控数据 {@link V20180724.GetTopNMonitorDataRequest} {@link V20180724.GetTopNMonitorDataResponse} */
  GetTopNMonitorData(data: V20180724.GetTopNMonitorDataRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.GetTopNMonitorDataResponse>;
  /** 安装 Grafana Plugin {@link V20180724.InstallPluginsRequest} {@link V20180724.InstallPluginsResponse} */
  InstallPlugins(data: V20180724.InstallPluginsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.InstallPluginsResponse>;
  /** 修改通知模板 {@link V20180724.ModifyAlarmNoticeRequest} {@link V20180724.ModifyAlarmNoticeResponse} */
  ModifyAlarmNotice(data: V20180724.ModifyAlarmNoticeRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyAlarmNoticeResponse>;
  /** 修改告警策略触发条件 {@link V20180724.ModifyAlarmPolicyConditionRequest} {@link V20180724.ModifyAlarmPolicyConditionResponse} */
  ModifyAlarmPolicyCondition(data: V20180724.ModifyAlarmPolicyConditionRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyAlarmPolicyConditionResponse>;
  /** 修改告警策略基本信息 {@link V20180724.ModifyAlarmPolicyInfoRequest} {@link V20180724.ModifyAlarmPolicyInfoResponse} */
  ModifyAlarmPolicyInfo(data: V20180724.ModifyAlarmPolicyInfoRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyAlarmPolicyInfoResponse>;
  /** 修改告警策略绑定的告警通知模板 {@link V20180724.ModifyAlarmPolicyNoticeRequest} {@link V20180724.ModifyAlarmPolicyNoticeResponse} */
  ModifyAlarmPolicyNotice(data: V20180724.ModifyAlarmPolicyNoticeRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyAlarmPolicyNoticeResponse>;
  /** 启停告警策略 {@link V20180724.ModifyAlarmPolicyStatusRequest} {@link V20180724.ModifyAlarmPolicyStatusResponse} */
  ModifyAlarmPolicyStatus(data: V20180724.ModifyAlarmPolicyStatusRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyAlarmPolicyStatusResponse>;
  /** 修改告警策略的触发任务 {@link V20180724.ModifyAlarmPolicyTasksRequest} {@link V20180724.ModifyAlarmPolicyTasksResponse} */
  ModifyAlarmPolicyTasks(data: V20180724.ModifyAlarmPolicyTasksRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyAlarmPolicyTasksResponse>;
  /** 修改告警接收人 {@link V20180724.ModifyAlarmReceiversRequest} {@link V20180724.ModifyAlarmReceiversResponse} */
  ModifyAlarmReceivers(data: V20180724.ModifyAlarmReceiversRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyAlarmReceiversResponse>;
  /** 修改 Grafana 实例属性 {@link V20180724.ModifyGrafanaInstanceRequest} {@link V20180724.ModifyGrafanaInstanceResponse} */
  ModifyGrafanaInstance(data: V20180724.ModifyGrafanaInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyGrafanaInstanceResponse>;
  /** 更新策略组 {@link V20180724.ModifyPolicyGroupRequest} {@link V20180724.ModifyPolicyGroupResponse} */
  ModifyPolicyGroup(data: V20180724.ModifyPolicyGroupRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPolicyGroupResponse>;
  /** 修改被关联集群的external labels {@link V20180724.ModifyPrometheusAgentExternalLabelsRequest} {@link V20180724.ModifyPrometheusAgentExternalLabelsResponse} */
  ModifyPrometheusAgentExternalLabels(data: V20180724.ModifyPrometheusAgentExternalLabelsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPrometheusAgentExternalLabelsResponse>;
  /** 修改2.0实例告警策略 {@link V20180724.ModifyPrometheusAlertPolicyRequest} {@link V20180724.ModifyPrometheusAlertPolicyResponse} */
  ModifyPrometheusAlertPolicy(data: V20180724.ModifyPrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPrometheusAlertPolicyResponse>;
  /** 修改prometheus配置 {@link V20180724.ModifyPrometheusConfigRequest} {@link V20180724.ModifyPrometheusConfigResponse} */
  ModifyPrometheusConfig(data: V20180724.ModifyPrometheusConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPrometheusConfigResponse>;
  /** 修改全局告警通知渠道 {@link V20180724.ModifyPrometheusGlobalNotificationRequest} {@link V20180724.ModifyPrometheusGlobalNotificationResponse} */
  ModifyPrometheusGlobalNotification(data: V20180724.ModifyPrometheusGlobalNotificationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPrometheusGlobalNotificationResponse>;
  /** 修改 Prometheus 实例相关属性 {@link V20180724.ModifyPrometheusInstanceAttributesRequest} {@link V20180724.ModifyPrometheusInstanceAttributesResponse} */
  ModifyPrometheusInstanceAttributes(data: V20180724.ModifyPrometheusInstanceAttributesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPrometheusInstanceAttributesResponse>;
  /** 通过yaml的方式修改Prometheus聚合实例 {@link V20180724.ModifyPrometheusRecordRuleYamlRequest} {@link V20180724.ModifyPrometheusRecordRuleYamlResponse} */
  ModifyPrometheusRecordRuleYaml(data: V20180724.ModifyPrometheusRecordRuleYamlRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPrometheusRecordRuleYamlResponse>;
  /** 修改模板实例 {@link V20180724.ModifyPrometheusTempRequest} {@link V20180724.ModifyPrometheusTempResponse} */
  ModifyPrometheusTemp(data: V20180724.ModifyPrometheusTempRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyPrometheusTempResponse>;
  /** 修改多写配置 {@link V20180724.ModifyRemoteURLsRequest} {@link V20180724.ModifyRemoteURLsResponse} */
  ModifyRemoteURLs(data: V20180724.ModifyRemoteURLsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ModifyRemoteURLsResponse>;
  /** 恢复 Grafana 实例 {@link V20180724.ResumeGrafanaInstanceRequest} {@link V20180724.ResumeGrafanaInstanceResponse} */
  ResumeGrafanaInstance(data: V20180724.ResumeGrafanaInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.ResumeGrafanaInstanceResponse>;
  /** 初始化TMP实例 {@link V20180724.RunPrometheusInstanceRequest} {@link V20180724.RunPrometheusInstanceResponse} */
  RunPrometheusInstance(data: V20180724.RunPrometheusInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.RunPrometheusInstanceResponse>;
  /** 设为默认告警策略 {@link V20180724.SetDefaultAlarmPolicyRequest} {@link V20180724.SetDefaultAlarmPolicyResponse} */
  SetDefaultAlarmPolicy(data: V20180724.SetDefaultAlarmPolicyRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.SetDefaultAlarmPolicyResponse>;
  /** 同步模板 {@link V20180724.SyncPrometheusTempRequest} {@link V20180724.SyncPrometheusTempResponse} */
  SyncPrometheusTemp(data: V20180724.SyncPrometheusTempRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.SyncPrometheusTempResponse>;
  /** 销毁按量 Prometheus 实例 {@link V20180724.TerminatePrometheusInstancesRequest} {@link V20180724.TerminatePrometheusInstancesResponse} */
  TerminatePrometheusInstances(data: V20180724.TerminatePrometheusInstancesRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.TerminatePrometheusInstancesResponse>;
  /** 删除全部的关联对象 {@link V20180724.UnBindingAllPolicyObjectRequest} {@link V20180724.UnBindingAllPolicyObjectResponse} */
  UnBindingAllPolicyObject(data: V20180724.UnBindingAllPolicyObjectRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UnBindingAllPolicyObjectResponse>;
  /** 删除策略的关联对象 {@link V20180724.UnBindingPolicyObjectRequest} {@link V20180724.UnBindingPolicyObjectResponse} */
  UnBindingPolicyObject(data: V20180724.UnBindingPolicyObjectRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UnBindingPolicyObjectResponse>;
  /** 解除实例绑定的 Grafana 可视化实例 {@link V20180724.UnbindPrometheusManagedGrafanaRequest} {@link V20180724.UnbindPrometheusManagedGrafanaResponse} */
  UnbindPrometheusManagedGrafana(data: V20180724.UnbindPrometheusManagedGrafanaRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UnbindPrometheusManagedGrafanaResponse>;
  /** 删除 Grafana Dashboard {@link V20180724.UninstallGrafanaDashboardRequest} {@link V20180724.UninstallGrafanaDashboardResponse} */
  UninstallGrafanaDashboard(data: V20180724.UninstallGrafanaDashboardRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UninstallGrafanaDashboardResponse>;
  /** 删除已安装的插件 {@link V20180724.UninstallGrafanaPluginsRequest} {@link V20180724.UninstallGrafanaPluginsResponse} */
  UninstallGrafanaPlugins(data: V20180724.UninstallGrafanaPluginsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UninstallGrafanaPluginsResponse>;
  /** 更新告警规则 {@link V20180724.UpdateAlertRuleRequest} {@link V20180724.UpdateAlertRuleResponse} */
  UpdateAlertRule(data: V20180724.UpdateAlertRuleRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateAlertRuleResponse>;
  /** 更新报警策略状态 {@link V20180724.UpdateAlertRuleStateRequest} {@link V20180724.UpdateAlertRuleStateResponse} */
  UpdateAlertRuleState(data: V20180724.UpdateAlertRuleStateRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateAlertRuleStateResponse>;
  /** 更新 Grafana 的 DNS 配置 {@link V20180724.UpdateDNSConfigRequest} {@link V20180724.UpdateDNSConfigResponse} */
  UpdateDNSConfig(data: V20180724.UpdateDNSConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateDNSConfigResponse>;
  /** 更新 exporter 集成配置 {@link V20180724.UpdateExporterIntegrationRequest} {@link V20180724.UpdateExporterIntegrationResponse} */
  UpdateExporterIntegration(data: V20180724.UpdateExporterIntegrationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateExporterIntegrationResponse>;
  /** 更新 Grafana 配置 {@link V20180724.UpdateGrafanaConfigRequest} {@link V20180724.UpdateGrafanaConfigResponse} */
  UpdateGrafanaConfig(data: V20180724.UpdateGrafanaConfigRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateGrafanaConfigResponse>;
  /** 更新 Grafana 环境变量 {@link V20180724.UpdateGrafanaEnvironmentsRequest} {@link V20180724.UpdateGrafanaEnvironmentsResponse} */
  UpdateGrafanaEnvironments(data: V20180724.UpdateGrafanaEnvironmentsRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateGrafanaEnvironmentsResponse>;
  /** 更新 Grafana 集成配置 {@link V20180724.UpdateGrafanaIntegrationRequest} {@link V20180724.UpdateGrafanaIntegrationResponse} */
  UpdateGrafanaIntegration(data: V20180724.UpdateGrafanaIntegrationRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateGrafanaIntegrationResponse>;
  /** 更新 Grafana 告警通道 {@link V20180724.UpdateGrafanaNotificationChannelRequest} {@link V20180724.UpdateGrafanaNotificationChannelResponse} */
  UpdateGrafanaNotificationChannel(data: V20180724.UpdateGrafanaNotificationChannelRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateGrafanaNotificationChannelResponse>;
  /** 更新 Grafana 白名单 {@link V20180724.UpdateGrafanaWhiteListRequest} {@link V20180724.UpdateGrafanaWhiteListResponse} */
  UpdateGrafanaWhiteList(data: V20180724.UpdateGrafanaWhiteListRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateGrafanaWhiteListResponse>;
  /** 更新 Prometheus CVM Agent 状态 {@link V20180724.UpdatePrometheusAgentStatusRequest} {@link V20180724.UpdatePrometheusAgentStatusResponse} */
  UpdatePrometheusAgentStatus(data: V20180724.UpdatePrometheusAgentStatusRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdatePrometheusAgentStatusResponse>;
  /** 更新Prometheus告警规则分组 {@link V20180724.UpdatePrometheusAlertGroupRequest} {@link V20180724.UpdatePrometheusAlertGroupResponse} */
  UpdatePrometheusAlertGroup(data: V20180724.UpdatePrometheusAlertGroupRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdatePrometheusAlertGroupResponse>;
  /** 更新Prometheus告警分组状态 {@link V20180724.UpdatePrometheusAlertGroupStateRequest} {@link V20180724.UpdatePrometheusAlertGroupStateResponse} */
  UpdatePrometheusAlertGroupState(data: V20180724.UpdatePrometheusAlertGroupStateRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdatePrometheusAlertGroupStateResponse>;
  /** 更新 Prometheus Agent 抓取任务 {@link V20180724.UpdatePrometheusScrapeJobRequest} {@link V20180724.UpdatePrometheusScrapeJobResponse} */
  UpdatePrometheusScrapeJob(data: V20180724.UpdatePrometheusScrapeJobRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdatePrometheusScrapeJobResponse>;
  /** 更新预聚合规则 {@link V20180724.UpdateRecordingRuleRequest} {@link V20180724.UpdateRecordingRuleResponse} */
  UpdateRecordingRule(data: V20180724.UpdateRecordingRuleRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateRecordingRuleResponse>;
  /** 更新账号信息 {@link V20180724.UpdateSSOAccountRequest} {@link V20180724.UpdateSSOAccountResponse} */
  UpdateSSOAccount(data: V20180724.UpdateSSOAccountRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateSSOAccountResponse>;
  /** 更新服务发现 {@link V20180724.UpdateServiceDiscoveryRequest} {@link V20180724.UpdateServiceDiscoveryResponse} */
  UpdateServiceDiscovery(data: V20180724.UpdateServiceDiscoveryRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpdateServiceDiscoveryResponse>;
  /** 升级 Grafana Dashboard {@link V20180724.UpgradeGrafanaDashboardRequest} {@link V20180724.UpgradeGrafanaDashboardResponse} */
  UpgradeGrafanaDashboard(data: V20180724.UpgradeGrafanaDashboardRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpgradeGrafanaDashboardResponse>;
  /** 升级 Grafana 实例 {@link V20180724.UpgradeGrafanaInstanceRequest} {@link V20180724.UpgradeGrafanaInstanceResponse} */
  UpgradeGrafanaInstance(data: V20180724.UpgradeGrafanaInstanceRequest, config: AxiosRequestConfig & V20180724.VersionHeader): AxiosPromise<V20180724.UpgradeGrafanaInstanceResponse>;
}

export declare type Versions = ["2023-06-16", "2018-07-24"];

export default Monitor;
