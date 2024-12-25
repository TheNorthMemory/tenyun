/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AKSK泄漏信息 */
declare interface AKSKLeak {
  /** AK编码 */
  AK?: string;
  /** SK编码 */
  SK?: string;
  /** URL编码 */
  URL?: string;
}

/** 账户风险 */
declare interface AccountRisk {
  /** id（可不参考） */
  Id?: string;
  /** 风险账户 */
  RiskAccount?: string;
}

/** DSPA评估控制项 */
declare interface AssessmentControlItem {
  /** 评估项Id */
  ItemId?: string;
  /** 评估项名称 */
  ItemName?: string;
  /** 评估项描述 */
  Description?: string;
  /** 评估项来源，内置/用户自定，取值（system，user） */
  Source?: string;
  /** 评估项类型，问卷/自动化，取值（questionnaire，auto） */
  ItemType?: string;
  /** 评估项子类型，单选/多选/时间/文本/AKSK等，取值（singlechoice，multichoice，date，text，AKSK……等） */
  ItemSubType?: string;
  /** 评估项创建时间 */
  CreatedTime?: string;
  /** 评估项启用状态，启用/未启用，取值draft / launched */
  Status?: string;
  /** 评估项关联的模板数量 */
  TemplateCount?: number;
}

/** DSPA评估风险项 */
declare interface AssessmentRisk {
  /** 风险项Id */
  RiskId?: string;
  /** 风险项描述 */
  RiskDescription?: string;
  /** 评估模板Id */
  TemplateId?: string;
  /** 评估模板名称 */
  TemplateName?: string;
  /** 评估项Id */
  ControlItemId?: string;
  /** 评估项名称 */
  ControlItemName?: string;
  /** 评估描述 */
  ControlItemDesc?: string;
  /** 风险等级，取值（high，medium，low） */
  RiskLevel?: string;
  /** 风险缓解措施 */
  RiskMitigation?: string;
  /** 风险处理状态。(waiting待处理, processing处理中, finished已处理) */
  Status?: string;
  /** 风险生成时间 */
  CreatedTime?: string;
  /** 风险负责人 */
  RiskOwner?: string;
  /** 风险涉及资产 */
  RelatedAsset?: string;
  /** 风险涉及资产id */
  DataSourceId?: string;
  /** 风险涉及资产名称 */
  DataSourceName?: string;
  /** 资产名称 */
  AssetName?: string;
  /** 建议使用安全产品 */
  SecurityProduct?: SecurityProduct[];
  /** 风险类型 */
  RiskType?: string;
  /** 风险面 */
  RiskSide?: string;
  /** 数据源类型 */
  DataSourceType?: string;
}

/** 风险项列表详细数据 */
declare interface AssessmentRiskItem {
  /** 脆弱项id */
  Id?: number;
  /** 名称 */
  RiskName?: string;
  /** 脆弱性级别 */
  Level?: string;
  /** 说明 */
  Description?: string;
  /** 风险类型 */
  RiskType?: string;
  /** 关联模板个数 */
  ReferTemplateCount?: number;
  /** 支持的数据源 */
  SupportDataSource?: string[];
  /** 风险面 */
  RiskSide?: string;
  /** 关联模板列表 */
  ReferTemplateList?: TemplateInfo[];
}

/** DSPA评估任务 */
declare interface AssessmentTask {
  /** 评估任务Id */
  TaskId: string;
  /** 评估任务的自增ID */
  TaskUid: number;
  /** 评估任务名称 */
  TaskName: string;
  /** 业务名称 */
  BusinessName: string;
  /** 业务所属部门 */
  BusinessDept: string;
  /** 业务负责人 */
  BusinessOwner: string;
  /** 评估模板Id */
  TemplateId: string;
  /** 评估模板名称 */
  TemplateName: string;
  /** 分类分级模板Id */
  ComplianceGroupId: number;
  /** 分类分级模板名称 */
  ComplianceGroupName: string;
  /** 评估项数量 */
  ControlItemCount: number;
  /** 风险项数量（仅状态为finished的风险项不计入总数，其余状态均算入该数量） */
  RiskCount: number;
  /** 评估任务完成时间 */
  FinishedTime: string;
  /** 评估任务发起时间 */
  CreatedTime: string;
  /** 评估状态。(waiting待评估，processing评估中, , finished已评估, failed评估失败) */
  Status: string;
  /** 待处理各等级风险项信息 */
  RiskCountInfoList: RiskCountInfo[];
  /** 数据源信息 */
  DiscoveryCondition: DiscoveryCondition;
  /** 评估任务失败信息 */
  ErrorInfo: string;
  /** 模板主键id */
  TemplateUid: number;
  /** 进度百分比 */
  ProgressPercent: number;
}

/** DSPA评估模板 */
declare interface AssessmentTemplate {
  /** id */
  Id?: number;
  /** 评估模板Id */
  TemplateId?: string;
  /** 评估模板名称 */
  TemplateName?: string;
  /** 描述信息 */
  Description?: string;
  /** 模板来源，内置/用户自定，取值（system，user） */
  Source?: string;
  /** 模板类型，自动化/半自动化/问卷，取值（auto，semi-auto，law）等 */
  UseType?: string;
  /** 评估模板创建时间 */
  CreatedTime?: string;
  /** 模板关联的评估项数量 */
  ControlItemCount?: number;
  /** 模板已启用的评估项数量 */
  AppliedItemCount?: number;
  /** 模板启用状态，草稿/已启用，取值draft / launched */
  Status?: string;
  /** 支持的数据源类型 */
  SupportDataSource?: string[];
  /** 是否包含攻击面风险 */
  IsASMTemplate?: boolean;
  /** 合规组id */
  IdentifyComplianceId?: number;
}

/** 数据资产报告-cos的资产详情 */
declare interface AssetCosDetail {
  /** 桶的名 */
  Bucket?: string;
  /** 数据源类型 */
  DataType?: string;
  /** 文件的个数 */
  FileNums?: number;
  /** 敏感的文件个数 */
  SensitiveFileNums?: number;
  /** 敏感分布 */
  DistributionData?: Note[];
  /** cos文件的敏感数据个数 */
  MatchedNum?: number;
}

/** RDB敏感资产详情列表 */
declare interface AssetDBDetail {
  /** 数据源id */
  DataSourceId?: string;
  /** 数据库名称 */
  DdName?: string;
  /** 数据库类型 */
  DataType?: string;
  /** 表的数量 */
  TableNums?: number;
  /** 敏感表数量 */
  SensitiveTableNums?: number;
  /** 字段的数量 */
  FieldNums?: number;
  /** 敏感字段的数量 */
  SensitiveFieldNums?: number;
  /** 敏感数据分布 */
  DistributionData?: Note[];
}

/** 数据资产报告页面-用户查询入参 */
declare interface AssetList {
  /** 数据源类型 */
  DataSourceType: string;
  /** 数据源信息 */
  DataSourceInfo: DataSourceInfo[];
}

/** COS敏感数据识别规则 */
declare interface COSDataRule {
  /** 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一.默认值为or */
  Operator?: string;
  /** 规则内容 */
  Contents?: DataContent[];
}

/** COS数据源实例信息 */
declare interface COSInstance {
  /** 数据源Id */
  DataSourceId: string;
  /** 桶名 */
  BucketName: string;
  /** 资源所在地域 */
  ResourceRegion: string;
}

/** 分类规则信息 */
declare interface CategoryRule {
  /** 分类id */
  CategoryId?: number;
  /** 规则id */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 级别id */
  LevelId?: number;
  /** 级别名称 */
  LevelName?: string;
  /** 分类规则绑定关系id */
  Id?: number;
  /** 别名ID */
  AliasRuleId?: number;
  /** 别名规则名称 */
  AliasRuleName?: string;
  /** 各类分类分级规则数量 */
  RuleEffectItems?: RuleEffectItem[];
  /** 规则状态 */
  RuleStatus?: number;
}

/** 分类规则统计信息 */
declare interface CategoryRuleStatistic {
  /** 分类id */
  CategoryId?: number;
  /** 规则数量 */
  RuleCount?: number;
  /** 分类名称 */
  CategoryName?: string;
}

/** 云数据库资源项 */
declare interface CloudResourceItem {
  /** 资源所处地域。 */
  Region: string;
  /** 云上资源列表。 */
  Items: DspaCloudResourceMeta[];
}

/** 模板详情 */
declare interface ComplianceGroupDetail {
  /** 模板id */
  Id?: number;
  /** 模板名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 模板类型 */
  ComplianceGroupType?: number;
  /** 模板分级方案id */
  LevelGroupId?: number;
  /** 模板分级方案名称 */
  LevelGroupName?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  ModifyTime?: string;
  /** 是否开启别名 */
  IsAlias?: boolean;
}

/** 合规组中规则信息：包括规则ID，数据分类ID, 数据分级标识ID */
declare interface ComplianceGroupRuleIdInfo {
  /** 敏感数据识别规则ID */
  RuleId: number;
  /** 敏感数据分类ID */
  CategoryId: number;
  /** 敏感数据分级标识ID, 系统支持高、中、低三级，也支持自定义分级 */
  LevelId: number;
}

/** 数据资产报告-cos的敏感资产报告详情 */
declare interface CosAsset {
  /** 桶的个数 */
  BucketNums?: number;
  /** 敏感桶的个数 */
  SensitiveBucketNums?: number;
  /** 文件个数 */
  FileNums?: number;
  /** 敏感文件的个数 */
  SensitiveFileNums?: number;
}

/** cos桶资源项 */
declare interface CosBucketItem {
  /** 资源所处地域。 */
  Region: string;
  /** COS桶列表。 */
  Buckets: string[];
}

/** COS资源的桶信息 */
declare interface CosResourceItem {
  /** cos数据源ID。 */
  ResourceId: string;
  /** 桶所在地域。 */
  ResourceRegion: string;
  /** 桶名称。 */
  ResourceName: string;
}

/** cos批量操作返回结果结构体 */
declare interface CosTaskResult {
  /** 结果类型。 */
  Result?: string;
  /** 结果描述。 */
  ResultDescription?: string;
  /** 错误信息描述。 */
  ErrDescription?: ErrDescription;
  /** 资源ID。 */
  ResourceId?: string;
}

/** 合规组分类关联规则信息 */
declare interface CreateComplianceRules {
  /** 规则id */
  RuleId: number;
  /** 级别id */
  LevelId: number;
}

/** 绑定的实例信息 */
declare interface DBInstanceInfo {
  /** 数据源id */
  ResourceId?: string;
  /** 数据源绑定的db信息 */
  DbInfos?: DbInfo[];
}

/** 数据库信息 */
declare interface DBStatements {
  /** 数据库名称 */
  DBName: string;
  /** 数据库Schema */
  DBSchema: string;
}

/** COS元数据信息 */
declare interface DSPACosMetaDataInfo {
  /** COS桶名 */
  Bucket?: string;
  /** COS桶创建时间 */
  CreateTime?: string;
  /** 1 -- 有效，0 -- 无效，资源可能已被删除。 */
  Valid?: number;
  /** DSPA为COS资源生成的资源ID */
  ResourceId?: string;
  /** COS资源所处的地域 */
  ResourceRegion?: string;
  /** COS桶绑定状态 */
  BindStatus?: string;
  /** COS桶存储量 */
  Storage?: number;
  /** 治理授权状态，0:关闭 1：开启 */
  GovernAuthStatus?: number;
}

/** DSPA数据源的数据库信息 */
declare interface DSPADataSourceDbInfo {
  /** 数据库名称 */
  DbName?: string;
}

/** 元数据类型 */
declare interface DSPAMetaType {
  /** 元数据类型 */
  MetaType?: string;
  /** 支持的此元数据类型的地域列表 */
  Regions?: string[];
  /** 此元数据类型支持的授权类型：account -- 账户名密码授权，账户的最高只读权限需要由用户自行赋予；automatic -- 一键授权，由DSPA自动生成账户名密码并自动在实例中给账户名赋予最高只读权限；如果此列表为空，表明此类资源不支持以上的授权机制，无法通过后台进行授权。 */
  SupportedAuthTypes?: string[];
}

/** DSPA分类分级任务扫描的表信息 */
declare interface DSPATableInfo {
  /** 表名 */
  TableName?: string;
}

/** 敏感数据分类 */
declare interface DataCategory {
  /** 分类ID */
  CategoryId: number;
  /** 敏感数据分类名称 */
  Name: string;
  /** 敏感数据分类来源，取值：0 内置, 1 自定义 */
  Source: number;
  /** 关联模板数量 */
  RelateComplianceCount: number;
}

/** 扫描规则内容 */
declare interface DataContent {
  /** 规则内容，可以是正则规则，关键词，忽略词扥 */
  RuleContent: string;
  /** 是否区分大小写false: 不区分大小写true:区分大小写 */
  IsIgnoreCase?: boolean;
}

/** 敏感数据识别规则 */
declare interface DataRule {
  /** 规则类型；取值：keyword 关键字, regex 正则 */
  RuleType: string;
  /** 内容 */
  RuleContent: string;
  /** 该字段是针对规则类型RuleType为keyword类型时的一个扩展属性 */
  ExtendParameters?: DatagovRuleExtendParameter[];
}

/** 敏感数据识别规则集 */
declare interface DataRules {
  /** 操作符；只能取and, or的其中一种 */
  Operator: string;
  /** 规则 */
  Contents: DataRule[];
}

/** dsgc-资产梳理报表-数据源信息 */
declare interface DataSourceInfo {
  /** 数据源ID */
  DataSourceId: string;
  /** 针对rbd-就是绑定的db_name */
  BindList?: string[];
}

/** 敏感数据识别规则扩展参数 */
declare interface DatagovRuleExtendParameter {
  /** 扩展参数名称，目前支持如下两个扩展属性名称：IsFullWordMatch，表示是否全文匹配，该Name对应的Value可取值为"true"或"false":，默认值为"false"，IsIgnoreCase，表示是否忽略大小写，该Name对应的Value可取值为"true"或"false"，默认值为"true" */
  Name?: string;
  /** 扩展参数值 */
  Value?: string;
}

/** 查询绑定的db信息 */
declare interface DbInfo {
  /** 数据库名称 */
  DbName?: string;
  /** 绑定的状态 */
  ValidStatus?: string;
  /** 绑定的类型 */
  BindType?: string;
}

/** 数据库实例的DB绑定关系状态信息。 */
declare interface DbRelationStatusItem {
  /** DB名称。 */
  DbName?: string;
  /** DB绑定状态。 */
  BindStatus?: string;
  /** DB有效性状态。 */
  ValidStatus?: string;
}

/** 数据库DB资源项 */
declare interface DbResourceItem {
  /** DB名称。 */
  DbName: string;
}

/** database批量操作返回结果结构体 */
declare interface DbTaskResult {
  /** 结果类型。 */
  Result?: string;
  /** 结果描述。 */
  ResultDescription?: string;
  /** 错误信息描述。 */
  ErrDescription?: ErrDescription;
  /** 资源ID。 */
  ResourceId?: string;
  /** database名称。 */
  DbName?: string;
}

/** DSPA敏感数据扫描数据源条件 */
declare interface DiscoveryCondition {
  /** RDB实例列表 */
  RDBInstances?: RDBInstance[];
  /** COS实例列表 */
  COSInstances?: COSInstance[];
  /** Mongo实例列表 */
  NOSQLInstances?: NOSQLInstance[];
  /** ES实例列表 */
  ESInstances?: ESInstance[];
}

/** 描述键值对过滤器，用于条件过滤查询 */
declare interface DspaAssessmentFilter {
  /** 过滤类型。 */
  Name: string;
  /** 过滤类型的值。 */
  Values: string[];
}

/** COS对象存储敏感数据资产统计 */
declare interface DspaCOSDataAssetCount {
  /** 数组资产类型，0代表关系型数据库资产，1代表对象存储COS资产 */
  DataAssetType?: number;
  /** 已扫描的存储桶的个数 */
  TotalBucketCnt?: number;
  /** 对象总数 */
  TotalObjectCnt?: number;
  /** 敏感数据类型个数 */
  SensitiveCategoryCnt?: number;
  /** 敏感数据条数 */
  SensitiveDataCnt?: number;
  /** 敏感等级分布 */
  SensitiveLevel?: SensitiveLevel[];
  /** 敏感存储桶个数 */
  SensitiveBucketCnt?: number;
  /** 敏感对象个数 */
  SensitiveObjectCnt?: number;
  /** 数据分类分布 */
  CategoryDistributed?: DspaDataCategoryDistributed[];
}

/** COS对象存储数据资产详情 */
declare interface DspaCOSDataAssetDetail {
  /** 对象桶 */
  BucketName?: string;
  /** 对象名称 */
  FileName?: string;
  /** 规则名称 */
  RuleName?: string;
  /** 出现次数 */
  SensitiveDataCount?: number;
  /** 敏感数据分类 */
  CategoryName?: string;
  /** 敏感等级 */
  LevelRiskName?: string;
  /** KMS加密 */
  KMSEncrypted?: boolean;
  /** 文件类型 */
  FileType?: string;
  /** 文件大小 */
  FileSize?: string;
  /** 敏感数据分级分数 */
  LevelRiskScore?: number;
  /** 数据源ID */
  DataSourceId?: string;
  /** 规则id */
  RuleId?: number;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 分类ID */
  CategoryId?: number;
  /** 分级ID */
  LevelId?: number;
  /** 文件扫描结果ID */
  FileResultId?: number;
  /** 数据源名称 */
  DataSourceName?: string;
  /** 分类路径 */
  CategoryFullPath?: string;
  /** 0-系统识别1-人工识别 */
  IdentifyType?: number;
  /** 0-系统识别1-人工识别 */
  CheckStatus?: number;
}

/** COS敏感数据扫描任务相关信息 */
declare interface DspaCOSDiscoveryTask {
  /** 任务名称 */
  Name?: string;
  /** 任务描述 */
  Description?: string;
  /** 执行周期，0单次 1每天 2每周 3每月 */
  Period?: number;
  /** 执行计划，0立即 1定时 */
  Plan?: number;
  /** 任务开关；1 打开，0 关闭 */
  Enable?: number;
  /** 数据源对象信息 */
  DataSourceInfo?: DspaCOSDiscoveryTaskDataSourceInfo;
  /** 通用规则集开关，0 关闭，1 启用 */
  GeneralRuleSetEnable?: number;
  /** 任务最新的一次执行结果信息，该字段用于查询任务列表接口 */
  Result?: ScanTaskResult;
  /** 定时开始时间 */
  TimingStartTime?: string;
  /** 关联分类模板是否更新 */
  ComplianceUpdate?: boolean;
}

/** 扫描任务元数据信息 */
declare interface DspaCOSDiscoveryTaskDataSourceInfo {
  /** 数据源ID */
  DataSourceId?: string;
  /** 代理地址 */
  ProxyAddress?: string[];
  /** 数据源名称 */
  DataSourceName?: string;
  /** 扫描任务条件 */
  Condition?: DspaDiscoveryTaskCOSCondition;
  /** 资源所在地域 */
  ResourceRegion?: string;
}

/** COS敏感数据扫描任务相关信息 */
declare interface DspaCOSDiscoveryTaskDetail {
  /** 任务名称 */
  Name?: string;
  /** 任务描述 */
  Description?: string;
  /** 执行周期，0单次 1每天 2每周 3每月 */
  Period?: number;
  /** 执行计划，0立即 1定时 */
  Plan?: number;
  /** 任务开关；1 打开，0 关闭 */
  Enable?: number;
  /** 数据源对象信息 */
  DataSourceInfo?: DspaCOSDiscoveryTaskDataSourceInfo;
  /** 通用规则集开关，0 关闭，1 启用 */
  GeneralRuleSetEnable?: number;
  /** 当创建任务时，用户打开了通用规则集开关，则该字段就会保存默认合规组信息 */
  DefaultComplianceInfo?: ScanTaskComplianceInfo[];
  /** 该任务中用户选择的合规组信息列表 */
  CustomComplianceInfo?: ScanTaskComplianceInfo[];
  /** 定时开始时间 */
  TimingStartTime?: string;
}

/** COS扫描任务结果，按照数据库级别展示 */
declare interface DspaCOSDiscoveryTaskResult {
  /** 扫描bucket结果ID */
  BucketResultId?: number;
  /** 任务ID */
  TaskId?: number;
  /** 任务名称 */
  TaskName?: string;
  /** 扫描任务最新一次扫描结果ID */
  ResultId?: number;
  /** 数据源ID */
  DataSourceId?: string;
  /** 桶名称 */
  BucketName?: string;
  /** 总文件数 */
  TotalFiles?: number;
  /** 被识别出的敏感数据数 */
  SensitiveDataNums?: number;
  /** Bucket扫描的结束时间，格式如：2006-01-02 15:04:05 */
  EndTime?: string;
  /** 数据源名称 */
  DataSourceName?: string;
  /** Bucket扫描状态，0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败 */
  Status?: number;
  /** Bucket扫描结果错误信息 */
  ErrorInfo?: string;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 是否超额 */
  OverSize?: string;
}

/** 云上资源元数据 */
declare interface DspaCloudResourceMeta {
  /** 用户资源ID。 */
  ResourceId: string;
  /** 资源名称。 */
  ResourceName: string;
  /** 资源VIP。 */
  ResourceVip: string;
  /** 资源端口。 */
  ResourceVPort: number;
  /** 资源被创建时间。 */
  ResourceCreateTime: string;
  /** 用户资源VPC ID 字符串。 */
  ResourceUniqueVpcId: string;
  /** 用户资源Subnet ID 字符串。 */
  ResourceUniqueSubnetId: string;
}

/** DSPA数据分类分布 */
declare interface DspaDataCategoryDistributed {
  /** 数据分类ID */
  CategoryId?: number;
  /** 数据分类名称 */
  CategoryName?: string;
  /** 数据分类统计个数 */
  Count?: number;
  /** 分类路径 */
  CategoryFullPath?: string;
}

/** 过滤内容 */
declare interface DspaDataSourceMngFilter {
  /** 过滤类型。 */
  Name: string;
  /** 过滤类型的值。 */
  Values: string[];
}

/** COS敏感数据识别规则 */
declare interface DspaDiscoveryCOSDataRule {
  /** 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一.默认值为or */
  Operator?: string;
  /** 规则内容 */
  Contents?: DspaDiscoveryDataContent[];
}

/** 分类分级任务COS识别规则 */
declare interface DspaDiscoveryCOSRules {
  /** 规则状态；0 不启用, 1 启用 */
  Status?: number;
  /** regex规则内容 */
  RegexRule?: DspaDiscoveryCOSDataRule;
  /** 关键词规则内容组，最大支持5个关键词。 */
  KeywordRule?: DspaDiscoveryCOSDataRule;
  /** 忽略词规则内容组，最大支持5个忽略词。 */
  IgnoreStringRule?: DspaDiscoveryCOSDataRule;
  /** 最大匹配距离，默认值为100。上限为500. */
  MaxMatch?: number;
}

/** COS扫描任务结果详情 */
declare interface DspaDiscoveryCOSTaskResultDetail {
  /** 任务ID */
  TaskId?: number;
  /** 扫描File结果详情ID */
  FileResultId?: number;
  /** 所属桶名 */
  BucketName?: string;
  /** 所属文件名 */
  FileName?: string;
  /** 敏感数据分类ID */
  CategoryId?: number;
  /** 敏感数据分类名称 */
  CategoryName?: string;
  /** 敏感数据分级ID */
  LevelId?: number;
  /** 敏感数据分级名称 */
  LevelName?: string;
  /** KMS加密，true or false */
  KMSEncrypted?: boolean;
  /** 规则名称 */
  RuleName?: string;
  /** 规则ID */
  RuleId?: number;
  /** 敏感数据分级分数 */
  LevelRiskScore?: number;
  /** 文件大小，单位为KB */
  FileSize?: number;
  /** 文件类型，如csv，txt */
  FileType?: string;
  /** 敏感数据出现次数 */
  SensitiveDataCount?: number;
  /** 分类树路径 */
  CategoryFullPath?: string[];
  /** 分类树路径 */
  CategoryArr?: string[];
  /** 合规组ID */
  ComplianceId?: number;
  /** 结果id */
  ResultId?: number;
}

/** 合规组 */
declare interface DspaDiscoveryComplianceGroup {
  /** 合规组ID */
  ComplianceGroupId?: number;
  /** 合规组名称 */
  Name?: string;
  /** 合规组描述信息 */
  Description?: string;
  /** 合规组类型；0 默认合规组，1 系统合规组（除默认合规组外）, 2 自定义合规组 */
  ComplianceGroupType?: number;
  /** 合规组对应的规则项 */
  ComplianceGroupRules?: DspaDiscoveryComplianceGroupRuleInfo[];
  /** 合规组对应的分级组ID */
  LevelGroupId?: number;
}

/** 合规组信息 */
declare interface DspaDiscoveryComplianceGroupInfo {
  /** 合规组ID */
  ComplianceGroupId?: number;
  /** 合规组名称 */
  Name?: string;
  /** 合规组描述信息 */
  Description?: string;
  /** 合规组类型；0 默认合规组，1 系统合规组（除默认合规组外）, 2 自定义合规组 */
  ComplianceGroupType?: number;
  /** 合规组对应的规则项 */
  ComplianceGroupRules?: DspaDiscoveryComplianceGroupRule[];
  /** 合规组对应的分级组ID */
  LevelGroupId?: number;
  /** 是否禁止使用（true，禁止使用，false，可以使用） */
  Disabled?: boolean;
  /** 是否别名 */
  IsAlias?: boolean;
  /** 1代表模版开启，0代表模版关闭 */
  Status?: number;
  /** 模版最后修改时间 */
  ModifyTime?: string;
}

/** 合规组中规则信息，用于合规组列表中规则信息展示 */
declare interface DspaDiscoveryComplianceGroupRule {
  /** 敏感数据识别规则ID */
  RuleId?: number;
  /** 敏感数据识别规则名称 */
  RuleName?: string;
  /** 敏感数据分类ID */
  CategoryId?: number;
  /** 敏感数据分级ID, 目前只支持高、中、低三级 */
  LevelId?: number;
  /** 合规组对应的分类信息 */
  CategoryName?: string;
  /** 分级名称 */
  LevelRiskName?: string;
}

/** 合规组中规则信息，用于合规组列表中规则信息展示 */
declare interface DspaDiscoveryComplianceGroupRuleInfo {
  /** 敏感数据识别规则ID */
  RuleId?: number;
  /** 敏感数据识别规则名称 */
  RuleName?: string;
  /** 敏感数据分类ID */
  CategoryId?: number;
  /** 敏感数据分级ID, 目前只支持高、中、低三级 */
  LevelId?: number;
}

/** 扫描规则内容 */
declare interface DspaDiscoveryDataContent {
  /** 规则内容，可以是正则规则，关键词，忽略词扥 */
  RuleContent?: string;
  /** 是否区分大小写false: 不区分大小写true:区分大小写 */
  IsIgnoreCase?: boolean;
}

/** 敏感数据识别规则 */
declare interface DspaDiscoveryDataRule {
  /** 规则类型；取值：keyword 关键字, regex 正则 */
  RuleType: string;
  /** 内容 */
  RuleContent: string;
  /** 该字段是针对规则类型RuleType为keyword类型时的一个扩展属性 */
  ExtendParameters?: DatagovRuleExtendParameter[];
}

/** 敏感数据识别规则集 */
declare interface DspaDiscoveryDataRules {
  /** 操作符；只能取and, or的其中一种 */
  Operator: string;
  /** 规则 */
  Contents: DspaDiscoveryDataRule[];
}

/** 敏感数据分级信息 */
declare interface DspaDiscoveryLevelDetail {
  /** 分级组名称，唯一性约束，最多60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  LevelGroupName?: string;
  /** 分级组来源，0为内置，1为自定义 */
  Source?: number;
  /** 分级组描述，最多1024字符 */
  LevelGroupDesc?: string;
  /** 具体分级标识详情 */
  LevelDetail?: LevelItem[];
  /** 引用合规组次数 */
  RefComplianceCnt?: number;
  /** 引用合规组 */
  RefCompliance?: DspaDiscoveryComplianceGroup[];
  /** 分级组ID */
  LevelGroupId?: number;
}

/** 分类分级任务RDB数据规则 */
declare interface DspaDiscoveryRDBRules {
  /** 规则状态；0 不启用, 1 启用 */
  Status: number;
  /** 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一 */
  MatchOperator: string;
  /** 字段名包含规则，最大支持选择9项 */
  MetaRule: DspaDiscoveryDataRules;
  /** 内容包含规则，最大支持选择9项 */
  ContentRule: DspaDiscoveryDataRules;
}

/** 敏感数据扫描任务识别规则详情 */
declare interface DspaDiscoveryRuleDetail {
  /** 规则ID */
  RuleId?: number;
  /** 规则名称 */
  Name?: string;
  /** 规则描述 */
  Description?: string;
  /** 规则来源，取值：0 内置, 1 自定义 */
  Source?: number;
  /** RDB规则详情 */
  RDBRules?: DspaDiscoveryRDBRules;
  /** COS规则详情 */
  COSRules?: DspaDiscoveryCOSRules;
  /** 0关闭，1开启 */
  Status?: number;
}

/** 描述对象存储类敏感识别扫描人元数据条件。 */
declare interface DspaDiscoveryTaskCOSCondition {
  /** 数据桶名称 */
  Bucket?: string;
  /** 文件类型 */
  FileTypes?: string[];
  /** 文件大小上限，单位为KB，如1000, 目前单个文件最大只支持1GB（1048576KB） */
  FileSizeLimit?: number;
}

/** 扫描任务数据源信息 */
declare interface DspaDiscoveryTaskDataSource {
  /** 数据源ID */
  DataSourceId?: string;
  /** 用于传入的数据源的条件，可以选择多个数据库，数据库之间通过逗号分隔，如果为空，默认是全部数据库 */
  Condition?: string;
  /** 代理地址 */
  ProxyAddress?: string[];
  /** 数据源名称 */
  DataSourceName?: string;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 数据源类型 */
  DataSourceType?: string;
}

/** 扫描任务结果，按照数据库级别展示 */
declare interface DspaDiscoveryTaskDbResult {
  /** 扫描数据库结果ID */
  DbResultId?: number;
  /** 任务ID */
  TaskId?: number;
  /** 任务名称 */
  TaskName?: string;
  /** 扫描任务最新一次扫描结果ID */
  ResultId?: number;
  /** 数据源ID */
  DataSourceId?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 总表数 */
  TotalTables?: number;
  /** 敏感表数 */
  SensitiveTables?: number;
  /** DB扫描的结束时间，格式如：2006-01-02 15:04:05 */
  EndTime?: string;
  /** 数据源名称 */
  DataSourceName?: string;
  /** DB扫描状态，0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败 */
  Status?: number;
  /** DB扫描结果错误信息 */
  ErrorInfo?: string;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 敏感字段数 */
  SensitiveField?: number;
  /** 总的字段数 */
  TotalField?: number;
}

/** 敏感数据扫描任务相关信息 */
declare interface DspaDiscoveryTaskDetail {
  /** 任务名称 */
  Name?: string;
  /** 任务描述 */
  Description?: string;
  /** 执行周期，0单次 1每天 2每周 3每月 */
  Period?: number;
  /** 执行计划，0立即 1定时 */
  Plan?: number;
  /** 任务开关；1 打开，0 关闭 */
  Enable?: number;
  /** 元数据对象信息 */
  DataSourceInfo?: DspaDiscoveryTaskDataSource;
  /** 通用规则集开关，0 关闭，1 启用 */
  GeneralRuleSetEnable?: number;
  /** 当创建任务时，用户打开了通用规则集开关，则该字段就会保存默认合规组信息 */
  DefaultComplianceInfo?: ScanTaskComplianceInfo[];
  /** 该任务中用户选择的合规组信息列表 */
  CustomComplianceInfo?: ScanTaskComplianceInfo[];
  /** 定时开始时间 */
  TimingStartTime?: string;
}

/** 扫描任务结果详情 */
declare interface DspaDiscoveryTaskResultDetail {
  /** 任务ID */
  TaskId?: number;
  /** 扫描结果详情ID */
  FieldResultId?: number;
  /** 所属数据表名 */
  TableName?: string;
  /** 字段名 */
  FieldName?: string;
  /** 敏感数据分类ID */
  CategoryId?: number;
  /** 敏感数据分类名称 */
  CategoryName?: string;
  /** 敏感数据分级ID */
  LevelId?: number;
  /** 敏感数据分级名称 */
  LevelName?: string;
  /** 规则名称 */
  RuleName?: string;
  /** 规则ID */
  RuleId?: number;
  /** 敏感数据分级分数 */
  LevelRiskScore?: number;
  /** 保护措施 */
  SafeGuard?: DspaSafeGuard;
  /** 分类路径 */
  CategoryFullPath?: string;
  /** 模式名 */
  SchemaName?: string;
}

/** 数据样本 */
declare interface DspaFieldResultDataSample {
  /** 数据样本 */
  DataSample?: string;
}

/** Dspa实例信息 */
declare interface DspaInstance {
  /** DSPA实例ID。 */
  DspaId?: string;
  /** DSPA实例名称。 */
  DspaName?: string;
  /** DSPA实例描述信息。 */
  DspaDescription?: string;
  /** DSPA实例已授权的数据库实例数量。 */
  DBAuthCount?: number;
  /** DSPA实例已绑定的cos桶数量。 */
  CosBindCount?: number;
  /** DSPA实例版本。 */
  InstanceVersion?: string;
  /** DSPA实例状态。 */
  Status?: string;
  /** 实例过期时间戳。 */
  ExpiredAt?: number;
  /** 账户APPID。 */
  AppId?: number;
  /** 体验版本信息。 */
  TrialVersion?: string;
  /** 体验版本过期时间戳。 */
  TrialEndAt?: number;
  /** DB已购配额。 */
  DbTotalQuota?: number;
  /** COS已购配额。 */
  CosTotalQuota?: number;
  /** COS配额单位，例如:TB。 */
  CosQuotaUnit?: string;
  /** 0: 默认状态(用户未设置)1: 开启自动续费2: 明确不自动续费 */
  RenewFlag?: number;
  /** 实例渠道 */
  Channel?: string;
  /** 已授权的实例数量 */
  InsAuthCount?: number;
  /** 已购买的实例数量 */
  InsTotalQuota?: number;
}

/** RDB关系型数据库敏感数据资产统计 */
declare interface DspaRDBDataAssetCount {
  /** 数组资产类型，0代表关系型数据库资产，1代表对象存储COS资产 */
  DataAssetType?: number;
  /** 已扫描的数据库的个数 */
  TotalDbCnt?: number;
  /** 数据库表的个数 */
  TotalTableCnt?: number;
  /** 敏感数据类型个数 */
  SensitiveCategoryCnt?: number;
  /** 敏感字段的个数 */
  SensitiveFieldCnt?: number;
  /** 敏感等级分布 */
  SensitiveLevel?: SensitiveLevel[];
  /** 敏感数据库的个数 */
  SensitiveDbCnt?: number;
  /** 敏感数据库表的个数 */
  SensitiveTableCnt?: number;
  /** 扫描字段的个数 */
  TotalFieldCnt?: number;
  /** 数据分类分布 */
  CategoryDistributed?: DspaDataCategoryDistributed[];
}

/** 关系型数据库资产详情 */
declare interface DspaRDBDataAssetDetail {
  /** 数据源ID */
  DataSourceId?: string;
  /** 数据库类型 */
  DbType?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 数据库表名称 */
  TableName?: string;
  /** 数据库表字段名称 */
  FieldName?: string;
  /** 规则名称 */
  RuleName?: string;
  /** 数据分类 */
  CategoryName?: string;
  /** 敏感等级 */
  LevelRiskName?: string;
  /** 分级风险分数，1-10，最小值为1，最大值为10 */
  LevelRiskScore?: number;
  /** 可信分 */
  TrustedScore?: string;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 字段扫描结果ID */
  FieldResultId?: string;
  /** 规则ID */
  RuleId?: number;
  /** 分级ID */
  LevelId?: number;
  /** 分类ID */
  CategoryId?: number;
  /** 数据源名称 */
  DataSourceName?: string;
  /** 保护措施 */
  SafeGuard?: DspaSafeGuard;
  /** 分类路径 */
  CategoryFullPath?: string;
  /** 0.系统识别，1人工打标 */
  IdentifyType?: number;
  /** 0未核查 1已核查 */
  CheckStatus?: number;
  /** 0非敏感，1敏感 */
  IsSensitiveData?: number;
  /** 模式名 */
  SchemaName?: string;
}

/** 资源账户信息 */
declare interface DspaResourceAccount {
  /** 资源ID。 */
  ResourceId: string;
  /** 用户名。 */
  UserName: string;
  /** 密码。 */
  Password: string;
}

/** 分类分级扫描结果字段的保护措施 */
declare interface DspaSafeGuard {
  /** 加密状态，可取值如下：UNSET 未设置DISABLE 规则设置未启用ENABLE 规则设置并启用 */
  Encrypt?: string;
  /** 脱敏状态，可取值如下：UNSET 未设置DISABLE 规则设置未启用ENABLE 规则设置并启用 */
  Desensitization?: string;
}

/** 任务执行结果描述。 */
declare interface DspaTaskResult {
  /** 任务结果。 */
  Result?: string;
  /** 结果描述。 */
  ResultDescription?: string;
  /** 资源ID。 */
  ResourceId?: string;
  /** 资源类型。 */
  MetaType?: string;
}

/** DSPA用户资源元信息 */
declare interface DspaUserResourceMeta {
  /** 用户资源ID。 */
  ResourceId: string;
  /** 资源名称。 */
  ResourceName: string;
  /** 资源VIP。 */
  ResourceVip: string;
  /** 资源端口。 */
  ResourceVPort: number;
  /** 资源被创建时间。 */
  ResourceCreateTime: string;
  /** 用户资源VPC ID 字符串。 */
  ResourceUniqueVpcId: string;
  /** 用户资源Subnet ID 字符串。 */
  ResourceUniqueSubnetId: string;
  /** 用户资源类型信息。 */
  MetaType?: string;
  /** 资源所处地域。 */
  ResourceRegion?: string;
  /** 资源被同步时间。 */
  ResourceSyncTime?: string;
  /** 资源被授权状态。 */
  AuthStatus?: string;
  /** 资源创建类型，cloud-云原生资源，build-用户自建资源。 */
  BuildType?: string;
  /** 主实例ID。 */
  MasterInsId?: string;
  /** 用户资源VPC ID 整数。 */
  ResourceVpcId?: number;
  /** 用户资源Subnet ID 整数。 */
  ResourceSubnetId?: number;
  /** 协议类型。 */
  Protocol?: string;
  /** 资源版本号。 */
  ResourceVersion?: string;
  /** 授权方式 */
  ResourceAuthType?: string;
  /** 授权账号名 */
  ResourceAuthAccount?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 实例值 */
  InstanceValue?: string;
  /** //治理授权状态（0：关闭 1：开启） */
  GovernAuthStatus?: number;
  /** 授权范围：all - 授权整个数据源 manual:手动指定数据源 */
  AuthRange?: string;
}

/** es的资产统计结果 */
declare interface ESAsset {
  /** 索引总数量 */
  IndexNums?: number;
  /** 敏感索引的数量 */
  SensitiveIndexNums?: number;
  /** 字段数量 */
  FieldNums?: number;
  /** 敏感的字段数量 */
  SensitiveFieldNums?: number;
}

/** es敏感资产详情列表 */
declare interface ESAssetDBDetail {
  /** 数据源id */
  DataSourceId?: string;
  /** 索引名称 */
  IndexName?: string;
  /** 数据库类型 */
  DataType?: string;
  /** 字段的数量 */
  FieldNums?: number;
  /** 敏感字段的数量 */
  SensitiveFieldNums?: number;
  /** 敏感数据分布 */
  DistributionData?: Note[];
}

/** ES的概览页统计数据 */
declare interface ESDataAssetCountDto {
  /** es */
  DataAssetType?: number;
  /** 敏感索引个数 */
  SensitiveIndexCnt?: number;
  /** 总的索引个数 */
  TotalIndexCnt?: number;
  /** 敏感字段个数 */
  SensitiveFieldCnt?: number;
  /** 总的字段个数 */
  TotalFieldCnt?: number;
  /** 敏感分类的个数 */
  SensitiveCategoryCnt?: number;
  /** 敏感分级的分布 */
  SensitiveLevel?: SensitiveLevel[];
  /** 敏感分类的分布 */
  CategoryDistributed?: DspaDataCategoryDistributed[];
}

/** ES的概览页资产详情 */
declare interface ESDataAssetDetail {
  /** id */
  FieldResultId?: number;
  /** 数据源id */
  DataSourceId?: string;
  /** 数据源名称 */
  DataSourceName?: string;
  /** 类型 */
  DataSourceType?: string;
  /** 地域信息 */
  ResourceRegion?: string;
  /** 索引名称 */
  IndexName?: string;
  /** 字段名称 */
  FieldName?: string;
  /** 分类id */
  CategoryId?: number;
  /** 分类名称 */
  CategoryName?: string;
  /** 分类路径数组 */
  CategoryArr?: string[];
  /** 等级id */
  LevelId?: number;
  /** 分级名称 */
  LevelRiskName?: string;
  /** 分级分数 */
  LevelRiskScore?: number;
  /** 可信分 */
  TrustedScore?: number;
  /** 规则id */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 0系统识别，1人工打标 */
  IdentifyType?: number;
  /** 0未核查，1已核查 */
  CheckStatus?: number;
}

/** 创建评估任务的ES详情 */
declare interface ESInstance {
  /** 数据源id */
  DataSourceId: string;
  /** 数据源类型 */
  DataSourceType: string;
  /** 地域 */
  ResourceRegion: string;
  /** 扫描任务ID */
  DiscoveryTaskId?: number;
  /** 扫描任务实例ID */
  DiscoveryTaskInstanceID?: number;
}

/** ES扫描任务结果详情 */
declare interface ESTaskResultDetail {
  /** id */
  Id?: number;
  /** 任务id */
  TaskId?: number;
  /** 字段名称 */
  FieldName?: string;
  /** 规则id */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 分类id */
  CategoryId?: number;
  /** 分类名称 */
  CategoryName?: string;
  /** 多级分类的路径 */
  CategoryArr?: string[];
  /** 分级id */
  LevelId?: number;
  /** 分级名称 */
  LevelName?: string;
  /** 分级分数 */
  LevelRiskScore?: number;
}

/** 错误信息描述 */
declare interface ErrDescription {
  /** 错误码。 */
  ErrCode?: string;
  /** 具体错误信息。 */
  ErrMessage?: string;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 高风险资产详情信息 */
declare interface HighRiskAssetsDetail {
  /** 实例id */
  InstanceId?: string;
  /** 数据源类型 */
  DataSourceType?: string;
  /** 数据源名称 */
  DataSourceName?: string;
  /** 资产对象名称 */
  AssetsName?: string;
  /** 高风险个数 */
  HighRiskCount?: number;
  /** 风险类型 */
  RiskType?: string;
  /** 总的风险个数 */
  TotalRiskCount?: number;
  /** 风险面 */
  RiskSide?: string;
  /** 地域 */
  ResourceRegion?: string;
}

/** 某个分级单个信息 */
declare interface ItemLevel {
  /** 分级标识名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  LevelRiskName: string;
  /** 分级标识对应的风险分数值，1-10，最小为1，最大为10 */
  LevelRiskScore: number;
}

/** 分级单项信息 */
declare interface LevelItem {
  /** 分级ID */
  LevelId: number;
  /** 分级组ID */
  LevelGroupId: number;
  /** 分级标识名称，支持内置分级，内置分级取值：高，中，低，也可以自定义 */
  LevelRiskName: string;
  /** 分级风险分数，1-10，最小值为1，最大值为10 */
  LevelRiskScore: number;
}

/** mongo的资产统计结果 */
declare interface MongoAsset {
  /** DB总数量 */
  DbNums?: number;
  /** 敏感DB数量 */
  SensitiveDbNums?: number;
  /** 集合数量 */
  ColNums?: number;
  /** 敏感集合的数量 */
  SensitiveColNums?: number;
  /** 字段数量 */
  FieldNums?: number;
  /** 敏感的字段数量 */
  SensitiveFieldNums?: number;
}

/** mongo敏感资产详情列表 */
declare interface MongoAssetDBDetail {
  /** 数据源id */
  DataSourceId?: string;
  /** 数据库名称 */
  DdName?: string;
  /** 数据库类型 */
  DataType?: string;
  /** 集合的数量 */
  ColNums?: number;
  /** 敏感集合数量 */
  SensitiveColNums?: number;
  /** 字段的数量 */
  FieldNums?: number;
  /** 敏感字段的数量 */
  SensitiveFieldNums?: number;
  /** 敏感数据分布 */
  DistributionData?: Note[];
}

/** NOSQL类型的数据源实例 */
declare interface NOSQLInstance {
  /** 数据源id */
  DataSourceId: string;
  /** cdb, dcdb, mariadb, postgres, cynosdbpg, cynosdbmysql, cos, mysql_like_proto, postgre_like_proto,mongodb */
  DataSourceType: string;
  /** 资源所在地域 */
  ResourceRegion: string;
  /** 根据实例创建的敏感数据识别扫描任务Id */
  DiscoveryTaskId?: number;
  /** 敏感数据识别任务实例id */
  DiscoveryTaskInstanceID?: number;
}

/** 数据资产报告-各种key-value的展示数据结构 */
declare interface Note {
  /** 通用key，例如分类名称 */
  Key?: string;
  /** 通用value，例如分类个数 */
  Value?: number;
}

/** 权限风险详情 */
declare interface PrivilegeRisk {
  /** 账户名 */
  AccountName?: string[];
  /** 表名称 */
  TableName?: string;
  /** 说明 */
  Description?: string;
}

/** 处理历史 */
declare interface ProcessHistory {
  /** 处理时间 */
  Time?: string;
  /** 状态 */
  Status?: number;
  /** 处理人 */
  Handler?: string;
  /** 备注 */
  Note?: string;
}

/** rdb的资产统计结果 */
declare interface RDBAsset {
  /** DB总数量 */
  DbNums?: number;
  /** 敏感DB数量 */
  SensitiveDbNums?: number;
  /** 表数量 */
  TableNums?: number;
  /** 敏感表的数量 */
  SensitiveTableNums?: number;
  /** 字段数量 */
  FieldNums?: number;
  /** 敏感的字段数量 */
  SensitiveFieldNums?: number;
}

/** RDB实例信息 */
declare interface RDBInstance {
  /** 数据源Id */
  DataSourceId: string;
  /** cdb, dcdb, mariadb, postgres, cynosdbpg, cynosdbmysql, cos, mysql_like_proto, postgre_like_proto */
  DataSourceType: string;
  /** 资源所在地域 */
  ResourceRegion: string;
  /** 若未来扩展到DBName粒度，可采用 */
  DBs?: DBStatements[];
}

/** 报表信息 */
declare interface ReportInfo {
  /** 任务id */
  Id?: number;
  /** 报告名称 */
  ReportName?: string;
  /** 报告类型（AssetSorting:资产梳理） */
  ReportType?: string;
  /** 报告周期（0单次 1每天 2每周 3每月） */
  ReportPeriod?: number;
  /** 执行计划 （0:单次报告 1:定时报告） */
  ReportPlan?: number;
  /** 报告导出状态（Success 成功, Failed 失败, InProgress 进行中） */
  ReportStatus?: string;
  /** 任务下次启动时间 */
  TimingStartTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 完成时间 */
  FinishedTime?: string;
  /** 子账号uin */
  SubUin?: string;
  /** 失败信息 */
  FailedMessage?: string;
  /** 是否启用（0：否 1：是） */
  Enable?: number;
  /** 识别模板名称 */
  ComplianceName?: string;
  /** 进度百分比 */
  ProgressPercent?: number;
  /** 报告模版名称 */
  ReportTemplateName?: string;
}

/** 待处理风险项数量信息 */
declare interface RiskCountInfo {
  /** 风险等级 */
  RiskLevel: string;
  /** 该等级风险项数量 */
  Count: number;
  /** 风险等级名称 */
  RiskLevelName: string;
}

/** 风险趋势项 */
declare interface RiskDealedTrendItem {
  /** 日期 */
  Date?: string;
  /** 未解决数量 */
  Unhandled?: number;
  /** 已解决数量 */
  Handled?: number;
  /** 新发现 */
  NewDiscoveryHandled?: number;
}

/** 风险TOP5统计项 */
declare interface RiskItem {
  /** 名称 */
  ItemName: string;
  /** 风险数量 */
  RiskNum: number;
}

/** 最新的风险详情信息数据 */
declare interface RiskItemInfo {
  /** 最新风险项id */
  Id?: number;
  /** 数据源id */
  DataSourceId?: string;
  /** 数据源名称 */
  DataSourceName?: string;
  /** 数据源类型 */
  DataSourceType?: string;
  /** 资源地域 */
  ResourceRegion?: string;
  /** 资产名称 */
  AssetName?: string;
  /** 风险类型 */
  RiskType?: string;
  /** 风险项 */
  RiskName?: string;
  /** 风险级别 */
  RiskLevel?: string;
  /** 风险描述 */
  RiskDescription?: string;
  /** 建议措施 */
  SuggestAction?: string;
  /** 安全产品（可能有多个） */
  SecurityProduct?: SecurityProduct[];
  /** 状态(waiting:待处理，processing:处理中，finished:已处理，ignored:已忽略) */
  Status?: number;
  /** 扫描时间 */
  ScanTime?: string;
  /** 最后处置时间 */
  LastProcessTime?: string;
  /** 分类分级合规组Id */
  IdentifyComplianceId?: number;
  /** 类型 */
  ItemSubType?: string;
  /** 风险面 */
  RiskSide?: string;
  /** API安全风险链接 */
  APIRiskLinkURL?: string;
  /** 备注 */
  Remark?: string;
}

/** 风险级别详情的矩阵 */
declare interface RiskLevelMatrix {
  /** 存储id */
  Id?: number;
  /** 分类分级levelID */
  SensitiveLevelId?: number;
  /** 分类分级名称 */
  SensitiveLevelName?: string;
  /** 漏洞级别 */
  VulnerabilityLevel?: string;
  /** 风险级别 */
  RiskLevel?: string;
}

/** 风险等级列表 */
declare interface RiskLevelRisk {
  /** 风险id */
  Id?: number;
  /** 风险等级列表 */
  RiskLevelName?: string;
  /** 风险级别描述 */
  RiskLevelDescription?: string;
  /** 引用的分类分级模板 */
  IdentifyComplianceName?: string;
  /** 类型，区分自定义还是系统内置 */
  Type?: string;
}

/** 风险级别趋势项 */
declare interface RiskLevelTrendItem {
  /** 日期 */
  Date: string;
  /** 高风险数量 */
  High: number;
  /** 中风险数量 */
  Medium: number;
  /** 低风险数量 */
  Low: number;
  /** 总数 */
  Total: number;
}

/** 用于生成默认的风险级别矩阵 */
declare interface RiskMatrixLevel {
  /** 名称 */
  Name?: string;
  /** 就是id */
  Id?: number;
  /** 分数 */
  Score?: number;
}

/** 风险面的分布 */
declare interface RiskSideDistributed {
  /** 风险面 */
  AssessmentRiskSide?: Note;
  /** 风险类型 */
  AssessmentRisk?: Note[];
}

/** 数据资产报告-rdb的敏感数据规则分布 */
declare interface RuleDistribution {
  /** 规则id */
  RuleId?: number;
  /** 规则名称 */
  RuleName?: string;
  /** 分级id */
  LevelId?: number;
  /** 分级名称 */
  LevelName?: string;
  /** 规则数量 */
  RuleCnt?: number;
}

/** 分类分级规则数量 */
declare interface RuleEffectItem {
  /** 规则描述 */
  Name?: string;
  /** 规则值 */
  Value?: number;
}

/** 敏感识别任务COS识别规则 */
declare interface ScanTaskCOSRules {
  /** regex规则内容 */
  RegexRule: COSDataRule;
  /** 规则状态；0 不启用, 1 启用 */
  Status?: number;
  /** 关键词规则内容组，最大支持5个关键词。 */
  KeywordRule?: COSDataRule;
  /** 忽略词规则内容组，最大支持5个忽略词。 */
  IgnoreStringRule?: COSDataRule;
  /** 最大匹配距离，默认值为100。上限为500. */
  MaxMatch?: number;
}

/** 扫描任务选择的合规组信息 */
declare interface ScanTaskComplianceInfo {
  /** 合规组ID */
  ComplianceGroupId: number;
  /** 合规组名称 */
  ComplianceGroupName: string;
}

/** 敏感识别任务RDB数据规则 */
declare interface ScanTaskRDBRules {
  /** 规则状态；0 不启用, 1 启用 */
  Status: number;
  /** 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一 */
  MatchOperator: string;
  /** 字段名包含规则，最大支持选择9项 */
  MetaRule: DataRules;
  /** 内容包含规则，最大支持选择9项 */
  ContentRule: DataRules;
}

/** 扫描任务结果信息 */
declare interface ScanTaskResult {
  /** 任务最新一次运行结果ID */
  Id?: number;
  /** 任务扫描结束的时间，格式如：2021-12-12 12:12:12 */
  EndTime?: string;
  /** 任务状态，-1待触发 0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败 */
  Status?: number;
  /** 扫描任务结果展示，如果扫描失败，则显示失败原因 */
  Result?: string;
  /** 结果描述 */
  ResultDescription?: string;
  /** 结果建议 */
  Suggestion?: string;
}

/** 建议使用的安全产品 */
declare interface SecurityProduct {
  /** 产品名称 */
  ProductName?: string;
  /** 产品链接 */
  ReferUrl?: string;
}

/** 敏感等级分布 */
declare interface SensitiveLevel {
  /** 分级标识ID */
  LevelId: number;
  /** 分级标识统计 */
  LevelCnt: number;
  /** 分级标识名称 */
  LevelRiskName: string;
  /** 分级标识分数 */
  LevelRiskScore: number;
}

/** 生成的建议的风险等级矩阵 */
declare interface SuggestRiskLevelMatrix {
  /** 矩阵 */
  RiskLevelMatrix?: SuggestRiskLevelMatrixItem[];
}

/** 建议生成的二位矩阵的第二层 */
declare interface SuggestRiskLevelMatrixItem {
  /** 分类分级等级 */
  SensitiveLevel?: RiskMatrixLevel;
  /** 脆弱项等级 */
  VulnerabilityLevel?: RiskMatrixLevel;
  /** 风险名 */
  RiskName?: string;
  /** 分数 */
  RiskScore?: number;
}

/** 评估模板的详情数据 */
declare interface TemplateInfo {
  /** 模板id */
  TemplateId: number;
  /** 模板名称 */
  TemplateName: string;
}

/** 数据资产报告-涉敏top的资产 */
declare interface TopAsset {
  /** 分级名称 */
  LevelName?: string;
  /** top数据信息 */
  TopStat?: TopAssetStat[];
}

/** 设敏top资产的信息 */
declare interface TopAssetStat {
  /** 数据源id */
  DataSourceId?: string;
  /** db_name */
  SubData?: string;
  /** 敏感个数 */
  SensitiveCnt?: number;
}

declare interface AuthorizeDSPAMetaResourcesRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 授权方式，可选：automatic(一键自动授权) 、 account(指定用户名授权)。 */
  AuthType: string;
  /** 资源类型。 */
  MetaType: string;
  /** 资源所处地域。 */
  ResourceRegion: string;
  /** 用户授权的账户信息，如果是一键自动授权模式，则不需要填写账户名与密码。 */
  ResourcesAccount: DspaResourceAccount[];
  /** 创建默认主模板扫描任务 */
  CreateDefaultTask?: boolean;
  /** 授权范围（all:授权整个数据源 manual:手动指定数据库） */
  AuthRange?: string;
}

declare interface AuthorizeDSPAMetaResourcesResponse {
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 授权结果。 */
  Results?: DspaTaskResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindDSPAResourceCosBucketsRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 绑定的COS桶信息。 */
  BindCosResourceItems?: CosResourceItem[];
  /** 解绑的COS桶信息。 */
  UnbindCosResourceItems?: CosResourceItem[];
}

declare interface BindDSPAResourceCosBucketsResponse {
  /** 绑定结果数组 */
  CosTaskResults?: CosTaskResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindDSPAResourceDatabasesRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 数据库实例ID。 */
  ResourceId: string;
  /** 数据库实例类型。 */
  MetaType: string;
  /** 绑定DB列表。 */
  BindDbItems?: DbResourceItem[];
  /** 解绑DB列表。 */
  UnbindDbItems?: DbResourceItem[];
}

declare interface BindDSPAResourceDatabasesResponse {
  /** 绑定结果数组 */
  DbTaskResults?: DbTaskResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyDSPATemplateRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  TemplateId: number;
}

declare interface CopyDSPATemplateResponse {
  /** 模板id */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetSortingReportRetryTaskRequest {
  /** 任务id */
  ReportTaskId: number;
  /** dspa实例id */
  DspaId: string;
}

declare interface CreateAssetSortingReportRetryTaskResponse {
  /** 任务id */
  ReportTaskId?: number;
  /** 提示信息 */
  Remark?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetSortingReportTaskRequest {
  /** dspa实例id */
  DspaId: string;
  /** 识别模板id */
  ComplianceId: number;
  /** 选中资产列表 */
  AssetList: AssetList[];
}

declare interface CreateAssetSortingReportTaskResponse {
  /** 报表任务id */
  ReportTaskId?: number;
  /** 提示信息 */
  Remark?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClassificationRuleRequest {
}

declare interface CreateClassificationRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPAAssessmentRiskLevelRequest {
  /** dspa实例id */
  DspaId: string;
  /** 风险等级名称 */
  RiskLevelName: string;
  /** 识别模板 */
  IdentifyComplianceId: number;
  /** 风险等级矩阵 */
  RiskLevelRule: RiskLevelMatrix[];
  /** 风险等级的描述 */
  RiskLevelDescription?: string;
}

declare interface CreateDSPAAssessmentRiskLevelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPAAssessmentRiskTemplateRequest {
  /** dspa实例id */
  DspaId: string;
  /** 模板名称 */
  TemplateName: string;
  /** 风险等级id */
  RiskLevelId: number;
  /** 风险id列表 */
  RiskIdList: number[];
  /** 模板描述 */
  TemplateDescription?: string;
}

declare interface CreateDSPAAssessmentRiskTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPAAssessmentTaskRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 评估任务名称。1-20个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字 */
  Name: string;
  /** 评估模板Id，格式“template-xxxxxxxx” */
  TemplateId: string;
  /** 评估业务名称。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字 */
  BusinessName?: string;
  /** 业务所属部门。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字 */
  BusinessDept?: string;
  /** 业务负责人。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字 */
  BusinessOwner?: string;
  /** 分类分级模板Id */
  ComplianceId?: number;
  /** 敏感数据扫描数据源条件。 */
  DiscoveryCondition?: DiscoveryCondition;
  /** 说明 */
  Description?: string;
}

declare interface CreateDSPAAssessmentTaskResponse {
  /** 评估任务Id，格式“task-xxxxxxxx” */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPACOSDiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
  /** 数据源ID */
  DataSourceId: string;
  /** 任务开关，0 关闭，1 启用 */
  Enable: number;
  /** 桶名 */
  Bucket: string;
  /** 执行计划， 0立即 1定时，选择“立即”时，扫描周期只能选择单次。 */
  Plan: number;
  /** 扫描周期，0单次 1每天 2每周 3每月 */
  Period: number;
  /** 待扫描文件类型，用逗号隔开，格式如：[".txt", ".csv", ".log", ".xml",".html", ".json"]。 */
  FileTypes: string[];
  /** 文件大小上限，单位为KB，如1000, 目前单个文件最大只支持100MB（102400KB） */
  FileSizeLimit: number;
  /** 资源所在地域 */
  ResourceRegion: string;
  /** 任务描述，最大长度为1024个字符 */
  Description?: string;
  /** 通用规则集开关，0 关闭，1 启用 */
  GeneralRuleSetEnable?: number;
  /** 合规组ID列表，最多支持添加5个 */
  ComplianceGroupIds?: number[];
  /** 任务定时启动时间，格式如：2006-01-02 15:04:05当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。 */
  TimingStartTime?: string;
}

declare interface CreateDSPACOSDiscoveryTaskResponse {
  /** 任务ID */
  TaskId?: number;
  /** 扫描结果ID */
  ResultId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPACategoryRelationRequest {
  /** dspa实例id */
  DspaId: string;
  /** 分类id */
  CategoryId: number;
  /** 父级分类id（无父级分类传-1） */
  ParentCategoryId: number;
  /** 分类模板id */
  ComplianceId: number;
}

declare interface CreateDSPACategoryRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPACategoryRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 敏感数据分类名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
}

declare interface CreateDSPACategoryResponse {
  /** 敏感数据分类ID */
  CategoryId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPAComplianceGroupRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
  /** 合规组描述，最大长度为1024个字符 */
  Description?: string;
  /** 合规组规则配置（参数已废弃，请传空数组） */
  ComplianceGroupRules?: ComplianceGroupRuleIdInfo[];
  /** 分级组ID，默认值为1，新增参数，可选 */
  LevelGroupId?: number;
  /** 1代表模版开启，0代表模版关闭 */
  Status?: number;
  /** 该complianceId的开启状态将被关闭 */
  CloseComplianceId?: number;
}

declare interface CreateDSPAComplianceGroupResponse {
  /** 合规组ID */
  ComplianceGroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPAComplianceRulesRequest {
  /** dspa实例id */
  DspaId: string;
  /** 分类id */
  CategoryId: number;
  /** 合规组模板id */
  ComplianceId: number;
  /** 规则列表 */
  Rules: CreateComplianceRules[];
}

declare interface CreateDSPAComplianceRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPACosMetaResourcesRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 资源所处地域。 */
  ResourceRegion?: string;
  /** COS桶列表 */
  Buckets?: string[];
  /** 必填，COS资源列表 */
  CosBucketItems?: CosBucketItem[];
}

declare interface CreateDSPACosMetaResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPADbMetaResourcesRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版） */
  MetaType: string;
  /** 资源所处地域。 */
  ResourceRegion?: string;
  /** 用来标记本次更新是否已经是最后一次，可选值：continue（后续还需要更新）、finished（本次是最后一次更新）。 */
  UpdateStatus?: string;
  /** 本次更新的ID号，用来标记一次完整的更新过程。 */
  UpdateId?: string;
  /** 云上资源列表。 */
  Items?: DspaCloudResourceMeta[];
  /** 必填，云数据库资源列表。 */
  CloudResourceItems?: CloudResourceItem[];
}

declare interface CreateDSPADbMetaResourcesResponse {
  /** 本次更新的ID号，用来标记一次完整的更新过程。 */
  UpdateId?: string;
  /** 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版） */
  MetaType?: string;
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 资源所处地域。 */
  ResourceRegion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPADiscoveryRuleRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 规则名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
  /** 规则描述，最大长度为1024个字符 */
  Description?: string;
  /** RDB类敏感数据识别规则 */
  RDBRules?: DspaDiscoveryRDBRules;
  /** COS类敏感数据识别规则 */
  COSRules?: DspaDiscoveryCOSRules;
  /** 规则状态；0 不启用, 1 启用 */
  Status?: number;
}

declare interface CreateDSPADiscoveryRuleResponse {
  /** 规则ID */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPADiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
  /** 数据源ID */
  DataSourceId: string;
  /** 任务开关，0 关闭，1 启用 */
  Enable: number;
  /** 执行计划， 0立即 1定时，选择“立即”时，扫描周期只能选择单次 */
  Plan: number;
  /** 扫描周期，0单次 1每天 2每周 3每月 */
  Period: number;
  /** 资源所在地域 */
  ResourceRegion: string;
  /** 数据源类型，可取值如下：cdb 表示云数据库 MySQL,dcdb 表示TDSQL MySQL版,mariadb 表示云数据库 MariaDB,postgres 表示云数据库 PostgreSQL,cynosdbpg 表示TDSQL-C PostgreSQL版,cynosdbmysql 表示TDSQL-C MySQL版,selfbuilt-db 表示自建数据库 */
  DataSourceType: string;
  /** 通用规则集开关，0 关闭，1 启用 */
  GeneralRuleSetEnable?: number;
  /** 任务描述，最大长度为1024个字符 */
  Description?: string;
  /** 用于传入的数据源的条件，目前只支持数据库，所以目前表示数据库的名称，选择多个数据库，之间通过逗号分隔，若不选，则默认选择全部数据库 */
  Condition?: string;
  /** 合规组ID列表，最多支持添加5个 */
  ComplianceGroupIds?: number[];
  /** 任务定时启动时间，格式如：2006-01-02 15:04:05当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。 */
  TimingStartTime?: string;
  /** random-随机，asc生序，desc降序 */
  Order?: string;
  /** 抽样的条数，范围30-1000 */
  Rows?: number;
  /** 抽样的排序字段 */
  GlobalOrderField?: string;
}

declare interface CreateDSPADiscoveryTaskResponse {
  /** 任务ID */
  TaskId?: number;
  /** 扫描结果ID */
  ResultId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPALevelGroupRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 分级组名称，唯一性约束，最多60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
  /** 分级标识配置 */
  ItemLevels: ItemLevel[];
  /** 分级组描述，最多1024字符 */
  Description?: string;
}

declare interface CreateDSPALevelGroupResponse {
  /** 分级组ID */
  LevelGroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPAMetaResourcesRequest {
  /** 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版） */
  MetaType: string;
  /** 资源所处地域。 */
  ResourceRegion: string;
  /** DSPA实例ID。 */
  DspaId: string;
  /** 用来标记本次更新是否已经是最后一次，可选值：continue（后续还需要更新）、finished（本次是最后一次更新）。 */
  UpdateStatus: string;
  /** 本次更新的ID号，用来标记一次完整的更新过程。 */
  UpdateId: string;
  /** 资源列表。 */
  Items: DspaUserResourceMeta[];
}

declare interface CreateDSPAMetaResourcesResponse {
  /** 本次更新的ID号，用来标记一次完整的更新过程。 */
  UpdateId?: string;
  /** 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版） */
  MetaType?: string;
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 资源所处地域。 */
  ResourceRegion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDSPASelfBuildMetaResourceRequest {
  /** Dspa实例ID。 */
  DspaId: string;
  /** 自建数据库类型。目前支持的自建数据库类型按照协议进行区分，支持两种开源数据库协议：mysql_like_proto -- Mysql协议类关系型数据库，postgre_like_proto -- Postgre协议类关系型数据库。其他闭源协议的数据库如SqlServer、Oracle等暂不支持。 */
  MetaType: string;
  /** 资源所处地域。 */
  ResourceRegion: string;
  /** 自建云资源ID。 */
  ResourceId: string;
  /** 自建云资源的VPC ID。 */
  ResourceUniqueVpcId: string;
  /** 自建云资源的Subnet ID。 */
  ResourceUniqueSubnetId: string;
  /** 自建云资源所处的服务类型，可选：cvm - 通过云服务器直接访问。clb - 通过LB的方式进行访问。 */
  ResourceAccessType: string;
  /** 可用于访问自建云资源的IP。emr的连接不需要使用该字段 */
  ResourceVip: string;
  /** 可用于访问自建云资源的端口。emr的连接不需要使用该字段 */
  ResourceVPort: number;
  /** 账户名。如果emr_hive的连接方式为“LDAP”，则复用该字段 */
  UserName: string;
  /** 账户密码。如果emr_hive的连接方式为“LDAP”，则复用该字段 */
  Password: string;
  /** 资源名称，1-60个字符。 */
  ResourceName?: string;
  /** 实例类型databsesidserviceName */
  InstanceType?: string;
  /** 实例值 */
  InstanceValue?: string;
  /** 授权范围（all:授权整个数据源 manual:手动指定数据库） */
  AuthRange?: string;
}

declare interface CreateDSPASelfBuildMetaResourceResponse {
  /** 连通性测试情况，success表示可正常访问，failed表示无法访问。 */
  ConnectivityStatus?: string;
  /** 连通性描述字段，如果连通性测试失败，这里会返回无法访问的相关信息说明。 */
  ConnectivityDescription?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIdentifyRuleAnotherNameRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  ComplianceId: number;
  /** 规则绑定的分类id */
  CategoryId: number;
  /** 规则id */
  RuleId: number;
  /** 规则名称 */
  RuleName: string;
  /** 规则别名 */
  AnotherName: string;
  /** 别名规则id */
  AliasRuleId?: number;
  /** 别名规则名称 */
  AliasRuleName?: string;
}

declare interface CreateIdentifyRuleAnotherNameResponse {
  /** 创建的别名规则id */
  AliasRuleId?: number;
  /** 别名规则名称 */
  AliasRuleName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNewClassificationRequest {
}

declare interface CreateNewClassificationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrCopyStandardRequest {
}

declare interface CreateOrCopyStandardResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DecribeSuggestRiskLevelMatrixRequest {
  /** dspaId */
  DspaId: string;
  /** 分类分级等级列表 */
  SensitiveLevelList: RiskMatrixLevel[];
  /** 脆弱项等级列表 */
  VulnerabilityLevelList: RiskMatrixLevel[];
}

declare interface DecribeSuggestRiskLevelMatrixResponse {
  /** 矩阵 */
  SuggestRiskLevelMatrix?: SuggestRiskLevelMatrix[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCosMetaResourceRequest {
  /** 实例Id。 */
  DspaId: string;
  /** 资源所处地域。 */
  ResourceRegion: string;
  /** 资源实例ID。 */
  ResourceIds?: string[];
}

declare interface DeleteCosMetaResourceResponse {
  /** 结果集合。 */
  Results?: DspaTaskResult[];
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDSPAAssessmentTaskRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 评估任务Id，格式“task-xxxxxxxx” */
  TaskId: string;
}

declare interface DeleteDSPAAssessmentTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDSPACOSDiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
}

declare interface DeleteDSPACOSDiscoveryTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDSPACOSDiscoveryTaskResultRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 扫描bucket结果ID */
  BucketResultId: number;
}

declare interface DeleteDSPACOSDiscoveryTaskResultResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDSPADiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
  /** 数据源类型 */
  DataSourceType?: string;
}

declare interface DeleteDSPADiscoveryTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDSPADiscoveryTaskResultRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 扫描数据库结果ID */
  DbResultId: number;
}

declare interface DeleteDSPADiscoveryTaskResultResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDSPAMetaResourceRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 用户云资源ID。 */
  ResourceIDs: string[];
}

declare interface DeleteDSPAMetaResourceResponse {
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 删除结果。 */
  Results?: DspaTaskResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetDetailDataExportResultRequest {
  /** 导出任务id */
  ExportTaskId: number;
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
}

declare interface DescribeAssetDetailDataExportResultResponse {
  /** 导出结果 */
  ExportResult?: string;
  /** 导出文件地址 */
  ExportFileUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetOverviewRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 查询的资产信息列表 */
  AssetList: AssetList[];
}

declare interface DescribeAssetOverviewResponse {
  /** 数据库实例id */
  DBInstanceNums?: number;
  /** 数据库个数 */
  DBNums?: number;
  /** 表的个数 */
  TableNums?: number;
  /** 字段个数 */
  FieldNums?: number;
  /** 数据库实例的分布情况 */
  DBInstanceDistribution?: Note[];
  /** db分布情况 */
  DBDistribution?: Note[];
  /** cos桶的数量 */
  BucketNums?: number;
  /** 文件个数 */
  FileNums?: number;
  /** 用于对用户进行提示信息 */
  Remark?: string;
  /** es实例数量 */
  EsInstanceNums?: number;
  /** es索引数量 */
  EsIndexNums?: number;
  /** es字段数量 */
  EsFieldNums?: number;
  /** mongo实例数量 */
  MongoInstanceNums?: number;
  /** mongo数据库数量 */
  MongoDbNums?: number;
  /** mongo集合数量 */
  MongoColNums?: number;
  /** mongo字段数量 */
  MongoFieldNums?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBindDBListRequest {
  /** dspa实例id */
  DspaId: string;
  /** 数据源类型 */
  DataSourceType?: string;
  /** 数据源ID */
  DataSourceId?: string;
}

declare interface DescribeBindDBListResponse {
  /** 绑定的DB列表（已废弃） */
  BindDBList?: string[];
  /** 绑定信息 */
  BindList?: DBInstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCOSAssetSensitiveDistributionRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 查询的资产列表 */
  AssetList: AssetList[];
}

declare interface DescribeCOSAssetSensitiveDistributionResponse {
  /** cos的涉敏资产 */
  CosAsset?: CosAsset;
  /** 涉敏top */
  TopAsset?: TopAsset[];
  /** cos资产详情列表 */
  CosDetail?: AssetCosDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassificationInfoRequest {
}

declare interface DescribeClassificationInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassificationRuleCountRequest {
}

declare interface DescribeClassificationRuleCountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentHighRiskTop10OverviewRequest {
  /** dspa实例Id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
  /** 过滤条件， rdb（数据库）cos（对象存储）不传就是全部 */
  Filter?: string;
}

declare interface DescribeDSPAAssessmentHighRiskTop10OverviewResponse {
  /** 含高风险资产TOP10的列表数据 */
  AssetsList?: HighRiskAssetsDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentLatestRiskDetailInfoRequest {
  /** dspa实例Id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
  /** 风险id */
  RiskId: number;
}

declare interface DescribeDSPAAssessmentLatestRiskDetailInfoResponse {
  /** 数据源id */
  DataSourceId?: string;
  /** 数据源name */
  DataSourceName?: string;
  /** 资产对象名称 */
  AssetName?: string;
  /** 风险评估模板id */
  AssessmentTemplateId?: number;
  /** 分类分级的模板id */
  IdentifyTemplateId?: number;
  /** 风险类型 */
  RiskType?: string;
  /** 风险项 */
  RiskName?: string;
  /** 风险的描述 */
  RiskDescription?: string;
  /** 风险的级别 */
  RiskLevel?: string;
  /** 处置的建议 */
  SuggestAction?: string;
  /** 处置状态 */
  Status?: number;
  /** 备注 */
  Remark?: string;
  /** 安全产品 */
  SecurityProduct?: SecurityProduct[];
  /** 风险归属 */
  RiskDimension?: string;
  /** 关联数据库（如果风险归属是instance） */
  RelationAsset?: string[];
  /** 风险账号详情 */
  AccountRiskDetail?: AccountRisk[];
  /** 权限风险详情 */
  PrivilegeRiskDetail?: PrivilegeRisk[];
  /** 策略风险的cos风险文件列表 */
  PolicyRiskCosFileList?: string[];
  /** AKSK泄漏列表 */
  AKSKLeak?: AKSKLeak[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentLatestRiskListRequest {
  /** dspa实例Id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
  /** 限制条数 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: string;
  /** 资产名称，数据源id */
  DataSourceId?: string;
  /** 风险类型 */
  RiskType?: string;
  /** 风险项 */
  ControlItemId?: string;
  /** 风险状态 */
  Status?: number;
  /** 扫描开始时间 */
  BeginTime?: string;
  /** 扫描结束时间 */
  EndTime?: string;
  /** 风险等级筛选 */
  RiskLevel?: string;
  /** 风险面筛选 */
  RiskSide?: string[];
  /** ASC 正序，DESC倒叙 */
  TimeSort?: string;
}

declare interface DescribeDSPAAssessmentLatestRiskListResponse {
  /** 最新风险详情列表 */
  LatestRiskList?: RiskItemInfo[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest {
  /** dspa实例id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
}

declare interface DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse {
  /** 待处理的风险数 */
  NewDiscoveredRiskCount?: number;
  /** 受影响的资产数 */
  AffectedAssetCount?: number;
  /** 周同比 */
  WeekRatio?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentPendingRiskOverviewRequest {
  /** dspa实例id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
}

declare interface DescribeDSPAAssessmentPendingRiskOverviewResponse {
  /** 待处理的风险数 */
  PendingRiskCount?: number;
  /** 受影响的资产数 */
  AffectedAssetCount?: number;
  /** 周同比 */
  WeekRatio?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentProcessingRiskOverviewRequest {
  /** dspa实例id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
}

declare interface DescribeDSPAAssessmentProcessingRiskOverviewResponse {
  /** 待处理的风险数 */
  ProcessingRiskCount?: number;
  /** 受影响的资产数 */
  AffectedAssetCount?: number;
  /** 周同比 */
  WeekRatio?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskAmountOverviewRequest {
  /** dspa实例id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
}

declare interface DescribeDSPAAssessmentRiskAmountOverviewResponse {
  /** 风险总数 */
  TotalRiskCount?: number;
  /** 受影响的资产数 */
  TotalAffectedAssetCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskDatasourceTop5Request {
  /** dspa实例id */
  DspaId: string;
}

declare interface DescribeDSPAAssessmentRiskDatasourceTop5Response {
  /** 风险值 */
  Items?: RiskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskDealedOverviewRequest {
  /** dspa实例id */
  DspaId: string;
}

declare interface DescribeDSPAAssessmentRiskDealedOverviewResponse {
  /** 遗留待处理风险总数 */
  TotalCount: number;
  /** 昨日完成风险处置数 */
  YesterdayDealedCount: number;
  /** 遗留待处理风险数周同比 */
  UnDealedRiskWeekRatio: number;
  /** 遗留待处理风险数日环比 */
  UnDealedRiskDayRatio: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskDealedTrendRequest {
  /** dspa实例id */
  DspaId: string;
  /** 开始日期 */
  StartTime: string;
  /** 结束日期 */
  EndTime: string;
  /** 评估模板id */
  TemplateId?: string;
}

declare interface DescribeDSPAAssessmentRiskDealedTrendResponse {
  /** 趋势统计结果 */
  Items?: RiskDealedTrendItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskDistributionOverviewRequest {
  /** dspa实例Id */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
  /** 风险资产分布的过滤条件（rdb，cos，不传就筛选全部） */
  Filter?: string;
}

declare interface DescribeDSPAAssessmentRiskDistributionOverviewResponse {
  /** 风险类型分布 */
  RiskTypeDistribution?: Note[];
  /** 风险详情分布 */
  RiskDetailDistribution?: Note[];
  /** 风险资产详情 */
  RiskAssetsDistribution?: Note[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskItemTop5Request {
  /** dspa实例id */
  DspaId: string;
}

declare interface DescribeDSPAAssessmentRiskItemTop5Response {
  /** 风险结果 */
  Items?: RiskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskLevelDetailRequest {
  /** dspa实例id */
  DspaId: string;
  /** 风险级别id */
  RiskLevelId: number;
}

declare interface DescribeDSPAAssessmentRiskLevelDetailResponse {
  /** 风险级别名称 */
  RiskLevelName?: string;
  /** 风险级别描述 */
  RiskLevelDescription?: string;
  /** 分类分级id */
  IdentifyComplianceId?: number;
  /** 分类分级模板名称 */
  IdentifyComplianceName?: string;
  /** 风险数据 */
  RiskLevelMatrix?: RiskLevelMatrix[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskLevelListRequest {
  /** dspa实例id */
  DspaId: string;
  /** 限制条数 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
}

declare interface DescribeDSPAAssessmentRiskLevelListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 风险等级列表 */
  RiskLevelList?: RiskLevelRisk[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskLevelTrendRequest {
  /** dspa实例id */
  DspaId: string;
  /** 开始日期 */
  StartTime: string;
  /** 结束时日期 */
  EndTime: string;
  /** 评估模板id */
  TemplateId?: string;
}

declare interface DescribeDSPAAssessmentRiskLevelTrendResponse {
  /** 结果集 */
  Items?: RiskLevelTrendItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskOverviewRequest {
  /** dspa实例id */
  DspaId: string;
}

declare interface DescribeDSPAAssessmentRiskOverviewResponse {
  /** 风险总数 */
  TotalCount: number;
  /** 高危风险数 */
  HighRiskCount: number;
  /** 周同比 */
  HighRiskWeekRatio: number;
  /** 高危风险数日环比 */
  HighRiskDayRatio: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskProcessHistoryRequest {
  /** dspa实例id */
  DspaId: string;
  /** 风险id */
  RiskId: number;
}

declare interface DescribeDSPAAssessmentRiskProcessHistoryResponse {
  /** 处理的历史 */
  ProcessHistory?: ProcessHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskSideDistributedRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
}

declare interface DescribeDSPAAssessmentRiskSideDistributedResponse {
  /** 风险面的分布 */
  RiskSideDistributed?: RiskSideDistributed[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskSideListRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 评估模板id */
  TemplateId: number;
}

declare interface DescribeDSPAAssessmentRiskSideListResponse {
  /** 风险面列表 */
  RiskSideItmeList?: Note[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskTemplateDetailRequest {
  /** dspa实例id */
  DspaId: string;
  /** 模板id */
  TemplateId: number;
  /** 限制条数 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
}

declare interface DescribeDSPAAssessmentRiskTemplateDetailResponse {
  /** 模板id */
  TemplateId?: number;
  /** 模板名称 */
  TemplateName?: string;
  /** 模板的描述 */
  TemplateDescription?: string;
  /** 风险等级 */
  RiskLevelId?: number;
  /** 风险等级名称 */
  RiskLevelName?: string;
  /** 脆弱项配置列表 */
  RiskItemList?: AssessmentRiskItem[];
  /** 脆弱项配置条数 */
  TotalCount?: number;
  /** 被任务引用次数 */
  TaskCitations?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRiskTemplateVulnerableListRequest {
  /** dspa实例id */
  DspaId: string;
  /** 限制条数 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 风险类型 */
  RiskType?: string;
  /** 风险名称 */
  RiskName?: string;
  /** 风险面 */
  RiskSide?: string;
}

declare interface DescribeDSPAAssessmentRiskTemplateVulnerableListResponse {
  /** 脆弱项列表 */
  RiskItemList?: AssessmentRiskItem[];
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentRisksRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 评估任务Id，格式“task-xxxxxxxx” */
  TaskId: string;
  /** 偏移量。默认为0 */
  Offset?: number;
  /** 结果集个数限制。默认为20，最大值为100 */
  Limit?: number;
  /** 过滤项。支持模糊搜索：ControlItemName。支持过滤：RiskLevel：风险等级（high，medium，low）Status：风险处理状态(waiting待处理, processing处理中, stopped处理暂停, finished已处理, failed处理失败) */
  Filters?: DspaAssessmentFilter[];
}

declare interface DescribeDSPAAssessmentRisksResponse {
  /** 符合条件的评估风险项数目 */
  TotalCount?: number;
  /** 评估风险项列表 */
  Items?: AssessmentRisk[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentTasksRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 偏移量。默认为0 */
  Offset?: number;
  /** 结果集个数限制。默认为20，最大值为100 */
  Limit?: number;
  /** 过滤项。支持模糊搜索：TaskId，TaskName支持过滤：BusinessName：业务名称BusinessDept：业务部门名称TemplateName：评估模板名称Status：评估状态 (waiting待评估，processing评估中, , finished已评估, failed评估失败) */
  Filters?: DspaAssessmentFilter[];
}

declare interface DescribeDSPAAssessmentTasksResponse {
  /** 符合条件的评估任务数目 */
  TotalCount?: number;
  /** 评估任务列表 */
  Items?: AssessmentTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentTemplateControlItemsRequest {
  /** DSPA实例Id。格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 评估模板Id。格式“template-xxxxxxxx” */
  TemplateId: string;
  /** 偏移量。默认为0 */
  Offset?: number;
  /** 结果集个数限制。默认为20，最大值为100 */
  Limit?: number;
  /** 过滤项。支持模糊搜索：ItemId，ItemName支持过滤：Source：评估项来源，system / userItemType：评估项类型，questionnaire / autoItemSubType：评估项子类型Status：评估项启用状态，draft / launched */
  Filters?: DspaAssessmentFilter[];
}

declare interface DescribeDSPAAssessmentTemplateControlItemsResponse {
  /** 符合条件的评估项数目 */
  TotalCount?: number;
  /** 模板关联的评估项列表 */
  Items?: AssessmentControlItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAAssessmentTemplatesRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 偏移量。默认为0 */
  Offset?: number;
  /** 结果集个数限制。默认为20，最大值为100 */
  Limit?: number;
  /** 过滤项。支持模糊搜索：（TemplateId，TemplateName）支持过滤：Source：模板来源，system / userUseType：模板类型，auto，semi-auto，law等Status：模板启用状态，draft / launched，ComplianceId：关联的分类分级模板id */
  Filters?: DspaAssessmentFilter[];
}

declare interface DescribeDSPAAssessmentTemplatesResponse {
  /** 符合条件的模板数目 */
  TotalCount?: number;
  /** 模板列表。 */
  Items?: AssessmentTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSDataAssetBucketsRequest {
  /** DSPA实例Id */
  DspaId: string;
  /** 合规组Id */
  ComplianceId: number;
}

declare interface DescribeDSPACOSDataAssetBucketsResponse {
  /** COS对象存储敏感数据资产已扫描的桶集合。 */
  Buckets?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSDataAssetByComplianceIdRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  ComplianceId: number;
}

declare interface DescribeDSPACOSDataAssetByComplianceIdResponse {
  /** 符合条件的COS存储对象的敏感数据资产统计记录 */
  Stats?: DspaCOSDataAssetCount;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSDataAssetDetailRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  ComplianceId: number;
}

declare interface DescribeDSPACOSDataAssetDetailResponse {
  /** COS对象存储敏感数据资产详情列表 */
  Details?: DspaCOSDataAssetDetail[];
  /** 符合条件的COS对象存储敏感数据资产数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSDiscoveryTaskDetailRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeDSPACOSDiscoveryTaskDetailResponse {
  /** 任务详情 */
  Task?: DspaCOSDiscoveryTaskDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSDiscoveryTaskFilesRequest {
  /** DSPA实例Id */
  DspaId: string;
  /** 扫描任务ID */
  TaskId: number;
  /** 扫描Bucket任务结果ID */
  BucketResultId: number;
}

declare interface DescribeDSPACOSDiscoveryTaskFilesResponse {
  /** 文件列表 */
  Files?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSDiscoveryTaskResultRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 偏移量，默认值为0 */
  Offset?: number;
  /** 返回数量，默认值为20，最大值为100 */
  Limit?: number;
  /** Array of Filter	此参数对外不可见。过滤数组。支持的Name：BucketName 对象桶名TaskID 任务ID，TaskName 任务名，DataSourceId：数据源ID，ResourceRegion：资源所在地域每项过滤条件最多支持5个。 */
  Filters?: Filter[];
}

declare interface DescribeDSPACOSDiscoveryTaskResultResponse {
  /** 扫描任务结果项 */
  Items?: DspaCOSDiscoveryTaskResult[];
  /** 符合条件的数据结果数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSDiscoveryTasksRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId?: number;
  /** 任务名称 */
  Name?: string;
  /** 任务扫描结果状态，可供选择的状态值有：-1待触发 0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败 */
  StatusList?: number[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回结果集数量，默认值是10000，最大值为10000，根据该资源的个数限制条件，该资源的个数不会超过10000，所以如果不输入该字段，默认获取全量数据 */
  Limit?: number;
}

declare interface DescribeDSPACOSDiscoveryTasksResponse {
  /** 任务列表 */
  Items?: DspaCOSDiscoveryTask[];
  /** 符合条件的任务列表数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACOSTaskResultDetailRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
  /** 扫描Bucket结果ID */
  BucketResultId: number;
  /** 合规组ID */
  ComplianceId: number;
  /** 文件名 */
  FileName?: string;
  /** 敏感数据分类ID */
  CategoryId?: number;
  /** 敏感数据分级ID */
  LevelId?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认值为20，最大值为100 */
  Limit?: number;
  /** 扫描桶名称。 */
  BucketName?: string;
  /** 多级分类的分类ID集合 */
  CategoryIdList?: number[];
}

declare interface DescribeDSPACOSTaskResultDetailResponse {
  /** 扫描结果详情列表 */
  Items?: DspaDiscoveryCOSTaskResultDetail[];
  /** 符合条件的详情数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACategoriesRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 数据分类ID */
  CategoryId?: number;
  /** 敏感数据分类名称 */
  Name?: string;
  /** 偏移量，默认值为0 */
  Offset?: number;
  /** 返回结果集数量，默认值是10000，最大值为10000，根据该资源的个数限制条件，该资源的个数不会超过10000，所以如果不输入该字段，默认获取全量数据 */
  Limit?: number;
}

declare interface DescribeDSPACategoriesResponse {
  /** 敏感数据分类列表 */
  Items?: DataCategory[];
  /** 符合条件的敏感数据分类数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACategoryRuleStatisticRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组模板id */
  ComplianceId: number;
}

declare interface DescribeDSPACategoryRuleStatisticResponse {
  /** 分类规则统计信息 */
  StatisticSet?: CategoryRuleStatistic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACategoryRulesRequest {
  /** dspa实例id */
  DspaId: string;
  /** 分类id */
  CategoryId: number;
  /** 合规组模板id */
  ComplianceId: number;
}

declare interface DescribeDSPACategoryRulesResponse {
  /** 分类规则信息 */
  CategoryRules?: CategoryRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACategoryTreeRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
}

declare interface DescribeDSPACategoryTreeResponse {
  /** 分类树json */
  ResultJson?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPACategoryTreeWithRulesRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组模板id */
  ComplianceId: number;
  /** 分类id */
  CategoryId?: number;
}

declare interface DescribeDSPACategoryTreeWithRulesResponse {
  /** 分类树json */
  ResultJson?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAComplianceGroupDetailRequest {
  /** dspa实例id */
  DspaId: string;
  /** 模板id */
  ComplianceId: number;
}

declare interface DescribeDSPAComplianceGroupDetailResponse {
  /** 模板详情 */
  Detail?: ComplianceGroupDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAComplianceGroupsRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  ComplianceGroupId?: number;
  /** 合规组名称 */
  Name?: string;
  /** 偏移量，默认值为0 */
  Offset?: number;
  /** 返回结果集数量，默认值是10000，最大值为10000，根据该资源的个数限制条件，该资源的个数不会超过10000，所以如果不输入该字段，默认获取全量数据 */
  Limit?: number;
  /** 合规组类型可选值：0 默认合规组, 1 系统合规组, 2 自定义合规组 */
  ComplianceGroupTypeList?: number[];
  /** 是否仅显示已开启模版 */
  IsFilterCloseComplianceGroup?: boolean;
}

declare interface DescribeDSPAComplianceGroupsResponse {
  /** 合规组列表 */
  Items?: DspaDiscoveryComplianceGroupInfo[];
  /** 符合条件的合规组列表数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAComplianceUpdateNotificationRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组分类模板id */
  ComplianceId: number;
}

declare interface DescribeDSPAComplianceUpdateNotificationResponse {
  /** 模板是否更新 */
  IsUpdated?: boolean;
  /** 任务名称集合 */
  TaskNameSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPADataSourceDbInfoRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 数据源ID */
  DataSourceId: string;
  /** 数据源类型 */
  DataSourceType?: string;
}

declare interface DescribeDSPADataSourceDbInfoResponse {
  /** 数据库信息列表 */
  Items?: DSPADataSourceDbInfo[];
  /** 数据源id */
  DataSourceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPADiscoveryRulesRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回上限，默认值10， 最大值10000。 */
  Limit?: number;
  /** 规则ID */
  RuleId?: number;
  /** 规则名称 */
  Name?: string;
  /** 是否需要过滤别名 */
  FilterRuleSource?: boolean;
}

declare interface DescribeDSPADiscoveryRulesResponse {
  /** 规则ID */
  TotalCount?: number;
  /** 规则集合 */
  Items?: DspaDiscoveryRuleDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPADiscoveryServiceStatusRequest {
  /** DSPA实例ID */
  DspaId: string;
}

declare interface DescribeDSPADiscoveryServiceStatusResponse {
  /** 分类分级服务是否开通，true 表示已开通，false表示未开通 */
  ServiceEnabled: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPADiscoveryTaskDetailRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeDSPADiscoveryTaskDetailResponse {
  /** 任务详情 */
  Task?: DspaDiscoveryTaskDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPADiscoveryTaskResultDetailRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
  /** 扫描数据库结果ID */
  DbResultId: number;
  /** 合规组ID */
  ComplianceId: number;
  /** 数据库名 */
  DbName: string;
  /** 所属数据表名 */
  TableName?: string;
  /** 敏感数据分类ID */
  CategoryId?: number;
  /** 敏感数据分级ID */
  LevelId?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认值为20，最大值为100 */
  Limit?: number;
  /** 多级分类的分类ID集合 */
  CategoryIdList?: number[];
}

declare interface DescribeDSPADiscoveryTaskResultDetailResponse {
  /** 扫描结果详情列表 */
  Items?: DspaDiscoveryTaskResultDetail[];
  /** 符合条件的扫描结果详情记录数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPADiscoveryTaskResultRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 数据源类型，可取值如下：cdb 表示云数据库 MySQL,dcdb 表示TDSQL MySQL版,mariadb 表示云数据库 MariaDB,postgres 表示云数据库 PostgreSQL,cynosdbpg 表示TDSQL-C PostgreSQL版,cynosdbmysql 表示TDSQL-C MySQL版,selfbuilt-db 表示自建数据库 */
  DataSourceType: string;
  /** 任务ID */
  TaskId?: number;
  /** 任务名称 */
  TaskName?: string;
  /** 数据源ID */
  DataSourceId?: string;
  /** 数据库名称 */
  DbName?: string;
  /** 偏移量，默认值为0 */
  Offset?: number;
  /** 返回数量，默认值为20，最大值为100 */
  Limit?: number;
  /** 资源所在地域 */
  ResourceRegion?: string;
}

declare interface DescribeDSPADiscoveryTaskResultResponse {
  /** 扫描任务结果项 */
  Items?: DspaDiscoveryTaskDbResult[];
  /** 符合条件的扫描任务结果记录数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPADiscoveryTaskTablesRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
  /** 数据库扫描结果ID */
  DbResultId: number;
  /** db名称 */
  DbName?: string;
}

declare interface DescribeDSPADiscoveryTaskTablesResponse {
  /** 分类分级扫描表集合 */
  Items?: DSPATableInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAESDataAssetByComplianceIdRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 云上还是自建 */
  BuildType?: string;
  /** 数据源类型 */
  DataSourceType?: string;
}

declare interface DescribeDSPAESDataAssetByComplianceIdResponse {
  /** 概览统计结果 */
  Stats?: ESDataAssetCountDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAESDataAssetDetailRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 偏移量 */
  Offset: number;
  /** 限制条目数 */
  Limit: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 可信分排序，ASC升序DESC降序 */
  CreditScore?: string;
}

declare interface DescribeDSPAESDataAssetDetailResponse {
  /** 总的个数 */
  TotalCount?: number;
  /** 概览详情列表 */
  Details?: ESDataAssetDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAESDataSampleRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 字段扫描结果ID */
  FieldResultId: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeDSPAESDataSampleResponse {
  /** 数据样本列表，最多10条数据 */
  Items?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPAESDiscoveryTaskResultDetailRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
  /** 合规组ID */
  ComplianceId: number;
  /** 偏移量，默认为0 */
  Offset: number;
  /** 返回数量，默认值为20，最大值为100 */
  Limit: number;
  /** 多级分类的分类ID集合 */
  CategoryIdList?: number[];
  /** 敏感数据分级ID */
  LevelId?: number;
  /** 数据库名称 */
  DbName?: string;
}

declare interface DescribeDSPAESDiscoveryTaskResultDetailResponse {
  /** ES扫描结果详情列表 */
  Items?: ESTaskResultDetail[];
  /** 符合条件的扫描结果详情记录数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPALevelDetailRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 过滤数组。支持的Name：ComplianceId 合规组IDLevelGroupId 敏感分级组ID */
  Filters?: Filter[];
}

declare interface DescribeDSPALevelDetailResponse {
  /** 符合条件的敏感数据分级标识记录 */
  Items?: LevelItem[];
  /** 符合条件的敏感数据分级标识记录数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPALevelGroupsRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 分级组名称 */
  Name?: string;
}

declare interface DescribeDSPALevelGroupsResponse {
  /** 符合条件的敏感数据分级标识记录 */
  Items?: DspaDiscoveryLevelDetail[];
  /** 符合条件的敏感数据分级标识记录数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPARDBDataAssetByComplianceIdRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  ComplianceId: number;
  /** 数据源类型，不填默认过滤非自建的所有关系型数据源类型，填selfbuilt-db只过滤自建类型 */
  DataSourceType?: string;
  /** 自建还是云上 */
  BuildType?: string;
}

declare interface DescribeDSPARDBDataAssetByComplianceIdResponse {
  /** 符合条件的RDB关系数据库敏感数据资产统计记录 */
  Stats?: DspaRDBDataAssetCount;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPARDBDataAssetDetailRequest {
  /** DSPA实例Id */
  DspaId: string;
  /** 合规组Id */
  ComplianceId: number;
  /** 过滤数组。支持的Name：DataSourceID 数据源IDDbName 数据库名称CategoryID 敏感数据分类IDRuleID 规则IDLevelID 敏感分级IDResourceRegion 资源所在地域SensitiveField 过滤敏感字段，可选值为1，或者无此SensitiveField字段DataSourceType 数据源类型，不填默认过滤非自建的所有关系型数据源类型，填selfbuilt-db只过滤自建类型注意：每个name默认支持最多5个values。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 可信分排序，ASC-升序DESC降序 */
  CreditScore?: string;
}

declare interface DescribeDSPARDBDataAssetDetailResponse {
  /** RDB关系数据库敏感数据资产详情列表 */
  Details?: DspaRDBDataAssetDetail[];
  /** 符合条件的RDB关系数据库敏感数据资产数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPASupportedMetasRequest {
  /** 元数据类型 */
  MetaTypes?: string[];
}

declare interface DescribeDSPASupportedMetasResponse {
  /** 支持的元数据类型 */
  Metas?: DSPAMetaType[];
  /** 最大支持每批次同步数量 */
  MaxDBInstanceLimit?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDSPATaskResultDataSampleRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 字段扫描结果ID */
  FieldResultId: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeDSPATaskResultDataSampleResponse {
  /** 数据样本列表，最多10条数据 */
  Items?: DspaFieldResultDataSample[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeESAssetSensitiveDistributionRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 查询的资产信息列表 */
  AssetList: AssetList[];
}

declare interface DescribeESAssetSensitiveDistributionResponse {
  /** ES的资产统计数据 */
  ESAsset?: ESAsset;
  /** 涉敏top数据 */
  TopAsset?: TopAsset[];
  /** ES的详情列表 */
  ESDetail?: ESAssetDBDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExportTaskResultRequest {
  /** dspa实例id */
  DspaId: string;
  /** 导出任务id */
  ExportTaskId: number;
}

declare interface DescribeExportTaskResultResponse {
  /** 导出任务结果 */
  ExportResult?: string;
  /** 导出文件地址 */
  ExportFileUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLeafClassificationRequest {
}

declare interface DescribeLeafClassificationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMongoAssetSensitiveDistributionRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 查询的资产信息列表 */
  AssetList: AssetList[];
}

declare interface DescribeMongoAssetSensitiveDistributionResponse {
  /** mongo的资产统计数据 */
  MongoAsset?: MongoAsset;
  /** 涉敏top数据 */
  TopAsset?: TopAsset[];
  /** mongo的详情列表 */
  MongoDetail?: MongoAssetDBDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRDBAssetSensitiveDistributionRequest {
  /** dspa实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 查询的资产信息列表 */
  AssetList: AssetList[];
}

declare interface DescribeRDBAssetSensitiveDistributionResponse {
  /** rdb的资产统计数据 */
  RDBAsset?: RDBAsset;
  /** 涉敏top数据 */
  TopAsset?: TopAsset[];
  /** rdb的详情列表 */
  RDBDetail?: AssetDBDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportTaskDownloadUrlRequest {
  /** 任务id */
  ReportTaskId: number;
  /** dspa实例id */
  DspaId: string;
  /** 是否同时下载敏感资产详情报告 */
  IsWithSensitiveDetailReport?: boolean;
}

declare interface DescribeReportTaskDownloadUrlResponse {
  /** 下载链接集合 */
  DownloadUrlSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportTasksRequest {
  /** dspa实例id */
  DspaId: string;
  /** 分页大小 */
  Limit: number;
  /** 分页偏移量 */
  Offset: number;
  /** 报表名称 */
  ReportName?: string;
}

declare interface DescribeReportTasksResponse {
  /** 总数 */
  TotalCount?: number;
  /** 报表信息 */
  ItemSet?: ReportInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleDetailRequest {
}

declare interface DescribeRuleDetailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleListRequest {
}

declare interface DescribeRuleListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSensitiveCOSDataDistributionRequest {
  /** dspa实例id */
  DspaId: string;
  /** 2331 */
  ComplianceId: number;
  /** 查询的资产信息列表 */
  AssetList: AssetList[];
}

declare interface DescribeSensitiveCOSDataDistributionResponse {
  /** 分级分布 */
  LevelDistribution?: Note[];
  /** 分类分布 */
  CategoryDistribution?: Note[];
  /** 规则分布详情 */
  RuleDistribution?: RuleDistribution[];
  /** 计算占比 */
  SensitiveDataNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSensitiveRDBDataDistributionRequest {
  /** dspa-实例id */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 查询的资产信息列表 */
  AssetList: AssetList[];
}

declare interface DescribeSensitiveRDBDataDistributionResponse {
  /** 分级分布 */
  LevelDistribution?: Note[];
  /** 分类分布 */
  CategoryDistribution?: Note[];
  /** 敏感规则分布详情列表 */
  RuleDistribution?: RuleDistribution[];
  /** 计算占比字段 */
  SensitiveDataNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableDSPAMetaResourceAuthRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 资源类型。 */
  MetaType: string;
  /** 资源所处地域。 */
  ResourceRegion: string;
  /** 用户云资源ID列表。 */
  ResourceIDs: string[];
}

declare interface DisableDSPAMetaResourceAuthResponse {
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 授权结果。 */
  Results?: DspaTaskResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableDSPADiscoveryRuleRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 规则ID */
  RuleId: number;
  /** 开关ScanRule */
  Enable: boolean;
}

declare interface EnableDSPADiscoveryRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableTrialVersionRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 体验版本名称。 */
  TrialVersion: string;
}

declare interface EnableTrialVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAssetDetailDataRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 合规组id */
  ComplianceId: number;
  /** 资产类型（rdb,cvm_db,cos） */
  MetaDataType: string;
  /** 过滤数组。支持的Name：DataSourceID 数据源IDDbName 数据库名称CategoryID 敏感数据分类IDRuleID 规则IDLevelID 敏感分级IDResourceRegion 资源所在地域DataSourceType 数据源类型，不填默认过滤非自建的所有关系型数据源类型，填selfbuilt-db只过滤自建类型注意：每个name默认支持最多5个values。 */
  Filters?: Filter[];
  /** casbId */
  CasbId?: string;
}

declare interface ExportAssetDetailDataResponse {
  /** 导出任务id */
  ExportTaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetResourceConnectionStatusRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 资源类型。 */
  MetaType: string;
  /** 资源所处地域。 */
  ResourceRegion: string;
  /** 资源列表中展示的资源ID。 */
  ResourceId: string;
}

declare interface GetResourceConnectionStatusResponse {
  /** 连接状态，success -- 连接成功，failed -- 连接失败 */
  ConnectionStatus?: string;
  /** 连接状态的描述信息。 */
  ConnectionDesc?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTrialVersionRequest {
  /** DSPA实例ID。 */
  DspaId: string;
}

declare interface GetTrialVersionResponse {
  /** 体验版本名称。 */
  TrialVersion?: string;
  /** 版本体验结束时间戳。 */
  TrialEndAt?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetUserQuotaInfoRequest {
  /** DSPA实例ID。 */
  DspaId: string;
}

declare interface GetUserQuotaInfoResponse {
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 用户购买的DB配额。 */
  DbTotalQuota?: number;
  /** 用户购买的COS存储量配额。 */
  CosTotalQuota?: number;
  /** 用户可用的DB配额。 */
  DbRemainQuota?: number;
  /** 用户可用的COS存储量配额。 */
  CosRemainQuota?: number;
  /** COS存储量单位，例如TB。 */
  CosQuotaUnit?: string;
  /** db月解绑次数 */
  DBUnbindNum?: number;
  /** cos月解绑次数 */
  COSUnbindNum?: number;
  /** 用户购买的实例配额。 */
  InsTotalQuota?: number;
  /** 用户可用的实例配额。 */
  InsRemainQuota?: number;
  /** 用户购买的版本 */
  Version?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDSPAClustersRequest {
  /** 分页步长，默认为100。 */
  Limit?: number;
  /** 分页偏移量，默认为0。 */
  Offset?: number;
  /** 过滤项。支持的过滤项包括：DspaId、Status、Version、DspaName、Channel。DspaId和DspaName支持模糊搜索。Status支持的可选值：enabled、disabled。Version支持的可选值：trial、official。Channel支持的可选值：sp_cds_dsgc_pre（代表dsgc实例）、sp_cds_dsgc_wedata_dc（代表wedata实例） */
  Filters?: DspaDataSourceMngFilter[];
  /** 展示模式。目前只有两个值的处理逻辑：空值：需要查询每个实例的配额信息，因为是串行查询，所以速度很慢，limit最大为100"simple"：不需要查询每个实例的配额信息，速度快，limit最大为1000 */
  ListMode?: string;
}

declare interface ListDSPAClustersResponse {
  /** 资源总数。 */
  TotalCount?: number;
  /** 资源列表。 */
  InstanceList?: DspaInstance[];
  /** 是否被拒绝访问所有dspa实例资源。 */
  DenyAll?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDSPACosMetaResourcesRequest {
  /** 实例Id */
  DspaId: string;
  /** 过滤数组。支持的Name：Bucket - 桶名，支持模糊匹配ResoureRegion - 资源所处地域，需要填写完整地域名称，不支持模糊匹配。Valid -- 资源是否有效，"1" 表示有效，"0"表示无效。 */
  Filters?: DspaDataSourceMngFilter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为100。 */
  Limit?: number;
  /** 资源绑定状态过滤，默认为全部 */
  BindType?: string;
}

declare interface ListDSPACosMetaResourcesResponse {
  /** 符合条件的COS元数据数量。 */
  TotalCount?: number;
  /** COS元数据信息 */
  Items?: DSPACosMetaDataInfo[];
  /** DSPA实例ID */
  DspaId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDSPAMetaResourcesRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 过滤项。可过滤值包括：ResoureRegion - 资源所处地域，需要填写完整地域名称，不支持模糊匹配。AuthStatus - authorized（已授权）、unauthorized（未授权）、deleted（资源已被删除），不支持模糊匹配，需要填写完整。BuildType - cloud（云原生资源）、build（用户自建资源），不支持模糊匹配，需要填写完整。MetaType - cdb（云数据Mysql）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbmysql（TDSQL-C MySQL版）、cos（对象存储）、mysql_like_proto（自建型Mysql协议类关系型数据库）、postgre_like_proto（自建型Postgre协议类关系型数据库）。ResourceId - 资源ID，支持模糊搜索。CvmID - 自建资源对应CvmId，如：ins-xxxxxxxx。该字段用于casb调用dsgc接口时，根据cvmId和vport确定具体的自建实例 */
  Filters?: DspaDataSourceMngFilter[];
  /** 分页步长，默认为100。 */
  Limit?: number;
  /** 分页偏移量，默认为0。 */
  Offset?: number;
  /** 资源绑定状态过滤，默认为全部 */
  BindType?: string;
}

declare interface ListDSPAMetaResourcesResponse {
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 用户资源列表。 */
  Resources?: DspaUserResourceMeta[];
  /** 资源总量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClassificationRuleRequest {
}

declare interface ModifyClassificationRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClassificationRuleStateRequest {
}

declare interface ModifyClassificationRuleStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPAAssessmentRiskLatestRequest {
  /** dspa实例id */
  DspaId: string;
  /** 风险状态（waiting:待处理，processing:处理中，finished:已处理，ignored:已忽略） */
  Status: string;
  /** 最新风险项Id */
  RiskLatestTableId?: number;
  /** 备注 */
  Note?: string;
  /** 处置人 */
  ProcessPeople?: string;
  /** 批量处理的列表 */
  BathRiskIdList?: number[];
}

declare interface ModifyDSPAAssessmentRiskLatestResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPAAssessmentRiskLevelRequest {
  /** dspa实例id */
  DspaId: string;
  /** 风险等级名称 */
  RiskLevelName: string;
  /** 风险的描述 */
  RiskLevelDescription: string;
  /** 风险id */
  RiskId: number;
  /** 需要修改的风险列表 */
  ModifyRiskItem?: RiskLevelMatrix[];
}

declare interface ModifyDSPAAssessmentRiskLevelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPAAssessmentRiskRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 评估任务Id，格式“task-xxxxxxxx” */
  TaskId: string;
  /** 风险项Id，格式“risk-xxxxxxxx” */
  RiskId: string;
  /** 风险项状态。（waiting:待处理，processing:处理中，finished:已处理） */
  Status: string;
}

declare interface ModifyDSPAAssessmentRiskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPAAssessmentRiskTemplateRequest {
  /** dspa实例id */
  DspaId: string;
  /** 模板名称 */
  TemplateName: string;
  /** 模板id */
  TemplateId: number;
  /** 修改的风险等级id */
  RiskLevelId: number;
  /** 模板的描述 */
  TemplateDescription?: string;
  /** 脆弱项列表 */
  RiskIdList?: number[];
}

declare interface ModifyDSPAAssessmentRiskTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPACOSDiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
  /** 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name?: string;
  /** 任务描述，最大长度为1024个字符 */
  Description?: string;
  /** 任务开关，0 关闭，1 启用 */
  Enable?: number;
  /** 通用规则集开关；0 关闭，1 启用 */
  GeneralRuleSetEnable?: number;
  /** 合规组ID列表，最多支持添加5个 */
  ComplianceGroupIds?: number[];
  /** 执行计划； 0立即 1定时，选择“立即”时，扫描周期只能选择单次 */
  Plan?: number;
  /** 扫描周期；0单次 1每天 2每周 3每月 */
  Period?: number;
  /** 任务定时启动时间，格式：2006-01-02 15:04:05当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。 */
  TimingStartTime?: string;
  /** 待扫描文件类型，用逗号隔开，格式如：[".txt", ".csv", ".log", ".xml",".html", ".json"]。 */
  FileTypes?: string[];
  /** 文件大小上限，单位为KB，如1000, 目前单个文件最大只支持100MB（102400KB） */
  FileSizeLimit?: number;
  /** 资源所在地域 */
  ResourceRegion?: string;
}

declare interface ModifyDSPACOSDiscoveryTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPACOSTaskResultRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  ComplianceId: number;
  /** 文件扫描结果ID */
  FileResultId: number;
  /** 是否设置为非敏感文件 */
  IsSetNonSensitiveFile?: boolean;
  /** 文件名 */
  FileName?: string;
  /** 桶名 */
  BucketName?: string;
  /** 数据源id */
  DataSourceId?: string;
}

declare interface ModifyDSPACOSTaskResultResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPACategoryRelationRequest {
  /** dspa实例id */
  DspaId: string;
  /** 当前分类id */
  CategoryId: number;
  /** 合并到的分类id */
  MergedCategoryId: number;
  /** 合规组模板id */
  ComplianceId: number;
}

declare interface ModifyDSPACategoryRelationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPACategoryRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 数据分类ID */
  CategoryId: number;
  /** 敏感数据分类名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
}

declare interface ModifyDSPACategoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPAClusterInfoRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** DSPA实例名。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字。 */
  DspaName?: string;
  /** DSPA实例描述信息。最长1024个字符。 */
  DspaDescription?: string;
}

declare interface ModifyDSPAClusterInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPAComplianceGroupRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 合规组ID */
  ComplianceGroupId: number;
  /** 合规组名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name?: string;
  /** 合规组描述，最大长度为1024个字符 */
  Description?: string;
  /** 合规组规则配置（参数已废弃，请传空数组） */
  ComplianceGroupRules?: ComplianceGroupRuleIdInfo[];
  /** 分级组ID，新增参数，可选参数，默认值为1 */
  LevelGroupId?: number;
  /** 是否开启别名 */
  RuleAlias?: boolean;
}

declare interface ModifyDSPAComplianceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPADiscoveryRuleRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 规则名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name: string;
  /** 规则ID */
  RuleId: number;
  /** 规则描述，最大长度为1024个字符 */
  Description?: string;
  /** RDB类敏感数据识别规则 */
  RDBRules?: ScanTaskRDBRules;
  /** COS类敏感数据识别规则 */
  COSRules?: ScanTaskCOSRules;
  /** 规则状态 */
  Status?: number;
}

declare interface ModifyDSPADiscoveryRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPADiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
  /** 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复 */
  Name?: string;
  /** 任务描述，最大长度为1024个字符 */
  Description?: string;
  /** 任务开关，0 关闭，1 启用 */
  Enable?: number;
  /** 数据源ID */
  DataSourceId?: string;
  /** 用于传入的数据源的条件，目前只支持数据库，所以目前表示数据库的名称，最多添加5个数据库，之间通过逗号分隔 */
  Condition?: string;
  /** 通用规则集开关；0 关闭，1 启用 */
  GeneralRuleSetEnable?: number;
  /** 合规组ID列表，最多支持添加5个 */
  ComplianceGroupIds?: number[];
  /** 执行计划； 0立即 1定时，选择“立即”时，扫描周期只能选择单次 */
  Plan?: number;
  /** 扫描周期；0单次 1每天 2每周 3每月 */
  Period?: number;
  /** 任务定时启动时间，格式：2006-01-02 15:04:05当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。 */
  TimingStartTime?: string;
  /** 资源所在地域 */
  ResourceRegion?: string;
  /** 数据源类型，可取值如下：cdb 表示云数据库 MySQL,dcdb 表示TDSQL MySQL版,mariadb 表示云数据库 MariaDB,postgres 表示云数据库 PostgreSQL,cynosdbpg 表示TDSQL-C PostgreSQL版,cynosdbmysql 表示TDSQL-C MySQL版,selfbuilt-db 表示自建数据库 */
  DataSourceType?: string;
}

declare interface ModifyDSPADiscoveryTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPAESTaskResultRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 字段扫描结果ID */
  FieldResultId: number;
  /** 合规组ID */
  ComplianceId: number;
  /** 是否设置为非敏感字段 */
  IsSetNonSensitiveField?: boolean;
  /** 调整后新的规则ID */
  DestRuleId?: number;
  /** 调整后新的分类ID */
  DestCategoryId?: number;
  /** 调整后新的分级ID */
  DestLevelId?: number;
  /** 调整前的规则id（系统识别的id） */
  SrcRuleId?: number;
  /** 调整前的规则id（系统识别的id） */
  SrcCategoryId?: number;
  /** 调整前的等级id */
  SrcLevelId?: number;
  /** 0系统识别，1人工打标 */
  IdentifyType?: number;
}

declare interface ModifyDSPAESTaskResultResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDSPATaskResultRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 字段扫描结果ID */
  FieldResultId: number;
  /** 合规组ID */
  ComplianceId: number;
  /** 是否设置为非敏感字段 */
  IsSetNonSensitiveField?: boolean;
  /** 调整后新的规则ID */
  DestRuleId?: number;
  /** 调整后新的分类ID */
  DestCategoryId?: number;
  /** 调整后新的分级ID */
  DestLevelId?: number;
  /** 调整前的规则ID */
  SrcRuleId?: number;
  /** 调整之前的分类id */
  SrcCategoryId?: number;
  /** 调整之前的分级id */
  SrcLevelId?: number;
  /** 识别方式0-系统识别，1-人工打标 */
  IdentifyType?: number;
}

declare interface ModifyDSPATaskResultResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLevelInfoRequest {
}

declare interface ModifyLevelInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLevelNameRequest {
}

declare interface ModifyLevelNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLevelStateRequest {
}

declare interface ModifyLevelStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMergeClassificationRequest {
}

declare interface ModifyMergeClassificationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNewClassificationRequest {
}

declare interface ModifyNewClassificationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStandardInfoRequest {
}

declare interface ModifyStandardInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryDSPAMetaResourceDbListRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 数据库实例ID。 */
  ResourceId: string;
  /** 数据库实例所在地域。 */
  ResourceRegion: string;
  /** 数据库实例类型。 */
  MetaType: string;
}

declare interface QueryDSPAMetaResourceDbListResponse {
  /** 数据库实例DB列表的查询结果。 */
  DbRelationStatusItems?: DbRelationStatusItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryResourceDbBindStatusRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 资源ID。 */
  ResourceId: string;
  /** 资源所在地域。 */
  ResourceRegion: string;
  /** 资源类型。 */
  MetaType: string;
}

declare interface QueryResourceDbBindStatusResponse {
  /** 绑定DB数量。 */
  BindDbNums?: number;
  /** 未绑定DB数量。 */
  UnbindDbNums?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDSPAAssessmentTaskRequest {
  /** DSPA实例Id，格式“dspa-xxxxxxxx” */
  DspaId: string;
  /** 评估任务Id，格式“task-xxxxxxxx” */
  TaskId: string;
}

declare interface RestartDSPAAssessmentTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartDSPADiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
}

declare interface StartDSPADiscoveryTaskResponse {
  /** 任务扫描结果ID */
  ResultId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopDSPADiscoveryTaskRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 任务ID */
  TaskId: number;
}

declare interface StopDSPADiscoveryTaskResponse {
  /** 任务扫描结果ID */
  ResultId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDSPASelfBuildResourceRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 云资源名称，如果是通过CVM访问则填写CVM的资源ID，如果是通过LB访问则填写LB的资源ID。 */
  ResourceId: string;
  /** 资源绑定的端口，为0则表示不更新。 */
  ResourceVPort: number;
  /** 账户名，为空则表示不更新。UserName和Password必须同时填写或同时为空。 */
  UserName: string;
  /** 账户密码，为空则表示不更新。UserName和Password必须同时填写或同时为空。 */
  Password: string;
  /** 授权范围：all 授权全部 manual：手动指定 */
  AuthRange?: string;
}

declare interface UpdateDSPASelfBuildResourceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyDSPACOSRuleRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 待验证COS规则 */
  COSRules: ScanTaskCOSRules;
  /** 待验证数据 */
  Data: string;
}

declare interface VerifyDSPACOSRuleResponse {
  /** 验证结果Success 验证成功Failed 验证失败 */
  VerifyResult?: string;
  /** 验证结果详情 */
  DetailInfo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyDSPADiscoveryRuleRequest {
  /** DSPA实例ID */
  DspaId: string;
  /** 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一 */
  MatchOperator: string;
  /** 字段名包含规则，最大支持选择9项 */
  MetaRule?: DataRules;
  /** 内容包含规则，最大支持选择9项 */
  ContentRule?: DataRules;
  /** 验证规则字段名，最大长度为1024个字符 */
  VerifyMeta?: string;
  /** 验证规则数据内容，最大长度为1024个字符 */
  VerifyContent?: string;
}

declare interface VerifyDSPADiscoveryRuleResponse {
  /** 验证结果Success 验证成功Failed 验证失败 */
  VerifyResult?: string;
  /** 验证结果详情 */
  DetailInfo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dsgc 数据安全治理中心} */
declare interface Dsgc {
  (): Versions;
  /** 授权用户云资源 {@link AuthorizeDSPAMetaResourcesRequest} {@link AuthorizeDSPAMetaResourcesResponse} */
  AuthorizeDSPAMetaResources(data: AuthorizeDSPAMetaResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<AuthorizeDSPAMetaResourcesResponse>;
  /** 绑定或解绑COS桶 {@link BindDSPAResourceCosBucketsRequest} {@link BindDSPAResourceCosBucketsResponse} */
  BindDSPAResourceCosBuckets(data: BindDSPAResourceCosBucketsRequest, config?: AxiosRequestConfig): AxiosPromise<BindDSPAResourceCosBucketsResponse>;
  /** 绑定或解绑数据库实例DB {@link BindDSPAResourceDatabasesRequest} {@link BindDSPAResourceDatabasesResponse} */
  BindDSPAResourceDatabases(data: BindDSPAResourceDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<BindDSPAResourceDatabasesResponse>;
  /** 复制合规组模板 {@link CopyDSPATemplateRequest} {@link CopyDSPATemplateResponse} */
  CopyDSPATemplate(data: CopyDSPATemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CopyDSPATemplateResponse>;
  /** 创建资产梳理报表导出重试任务 {@link CreateAssetSortingReportRetryTaskRequest} {@link CreateAssetSortingReportRetryTaskResponse} */
  CreateAssetSortingReportRetryTask(data: CreateAssetSortingReportRetryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetSortingReportRetryTaskResponse>;
  /** 创建资产梳理报告任务 {@link CreateAssetSortingReportTaskRequest} {@link CreateAssetSortingReportTaskResponse} */
  CreateAssetSortingReportTask(data: CreateAssetSortingReportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetSortingReportTaskResponse>;
  /** 创建识别规则 {@link CreateClassificationRuleRequest} {@link CreateClassificationRuleResponse} */
  CreateClassificationRule(data?: CreateClassificationRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClassificationRuleResponse>;
  /** 创建风险等级 {@link CreateDSPAAssessmentRiskLevelRequest} {@link CreateDSPAAssessmentRiskLevelResponse} */
  CreateDSPAAssessmentRiskLevel(data: CreateDSPAAssessmentRiskLevelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPAAssessmentRiskLevelResponse>;
  /** 创建评估模板 {@link CreateDSPAAssessmentRiskTemplateRequest} {@link CreateDSPAAssessmentRiskTemplateResponse} */
  CreateDSPAAssessmentRiskTemplate(data: CreateDSPAAssessmentRiskTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPAAssessmentRiskTemplateResponse>;
  /** 新建DSPA评估任务 {@link CreateDSPAAssessmentTaskRequest} {@link CreateDSPAAssessmentTaskResponse} */
  CreateDSPAAssessmentTask(data: CreateDSPAAssessmentTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPAAssessmentTaskResponse>;
  /** 新增COS分类分级发现任务 {@link CreateDSPACOSDiscoveryTaskRequest} {@link CreateDSPACOSDiscoveryTaskResponse} */
  CreateDSPACOSDiscoveryTask(data: CreateDSPACOSDiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPACOSDiscoveryTaskResponse>;
  /** 新增分类 {@link CreateDSPACategoryRequest} {@link CreateDSPACategoryResponse} */
  CreateDSPACategory(data: CreateDSPACategoryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPACategoryResponse>;
  /** 创建分类关联关系 {@link CreateDSPACategoryRelationRequest} {@link CreateDSPACategoryRelationResponse} */
  CreateDSPACategoryRelation(data: CreateDSPACategoryRelationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPACategoryRelationResponse>;
  /** 新增分类分级模板 {@link CreateDSPAComplianceGroupRequest} {@link CreateDSPAComplianceGroupResponse} */
  CreateDSPAComplianceGroup(data: CreateDSPAComplianceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPAComplianceGroupResponse>;
  /** 创建合规组分类规则关联关系 {@link CreateDSPAComplianceRulesRequest} {@link CreateDSPAComplianceRulesResponse} */
  CreateDSPAComplianceRules(data: CreateDSPAComplianceRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPAComplianceRulesResponse>;
  /** 添加用户COS元数据 {@link CreateDSPACosMetaResourcesRequest} {@link CreateDSPACosMetaResourcesResponse} */
  CreateDSPACosMetaResources(data: CreateDSPACosMetaResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPACosMetaResourcesResponse>;
  /** 添加用户云上数据库资源 {@link CreateDSPADbMetaResourcesRequest} {@link CreateDSPADbMetaResourcesResponse} */
  CreateDSPADbMetaResources(data: CreateDSPADbMetaResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPADbMetaResourcesResponse>;
  /** 新增分类分级发现规则 {@link CreateDSPADiscoveryRuleRequest} {@link CreateDSPADiscoveryRuleResponse} */
  CreateDSPADiscoveryRule(data: CreateDSPADiscoveryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPADiscoveryRuleResponse>;
  /** 新增分类分级识别任务 {@link CreateDSPADiscoveryTaskRequest} {@link CreateDSPADiscoveryTaskResponse} */
  CreateDSPADiscoveryTask(data: CreateDSPADiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPADiscoveryTaskResponse>;
  /** 新增分级 {@link CreateDSPALevelGroupRequest} {@link CreateDSPALevelGroupResponse} */
  CreateDSPALevelGroup(data: CreateDSPALevelGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPALevelGroupResponse>;
  /** 添加用户云资源 {@link CreateDSPAMetaResourcesRequest} {@link CreateDSPAMetaResourcesResponse} */
  CreateDSPAMetaResources(data: CreateDSPAMetaResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPAMetaResourcesResponse>;
  /** 新建用户自建云资源 {@link CreateDSPASelfBuildMetaResourceRequest} {@link CreateDSPASelfBuildMetaResourceResponse} */
  CreateDSPASelfBuildMetaResource(data: CreateDSPASelfBuildMetaResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPASelfBuildMetaResourceResponse>;
  /** 创建规则别名 {@link CreateIdentifyRuleAnotherNameRequest} {@link CreateIdentifyRuleAnotherNameResponse} */
  CreateIdentifyRuleAnotherName(data: CreateIdentifyRuleAnotherNameRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIdentifyRuleAnotherNameResponse>;
  /** 创建新分类 {@link CreateNewClassificationRequest} {@link CreateNewClassificationResponse} */
  CreateNewClassification(data?: CreateNewClassificationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNewClassificationResponse>;
  /** 创建或复制分级分类模板 {@link CreateOrCopyStandardRequest} {@link CreateOrCopyStandardResponse} */
  CreateOrCopyStandard(data?: CreateOrCopyStandardRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrCopyStandardResponse>;
  /** 查询建议的默认风险等级矩阵 {@link DecribeSuggestRiskLevelMatrixRequest} {@link DecribeSuggestRiskLevelMatrixResponse} */
  DecribeSuggestRiskLevelMatrix(data: DecribeSuggestRiskLevelMatrixRequest, config?: AxiosRequestConfig): AxiosPromise<DecribeSuggestRiskLevelMatrixResponse>;
  /** 删除用户COS元数据信息 {@link DeleteCosMetaResourceRequest} {@link DeleteCosMetaResourceResponse} */
  DeleteCosMetaResource(data: DeleteCosMetaResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCosMetaResourceResponse>;
  /** 删除DSPA评估任务 {@link DeleteDSPAAssessmentTaskRequest} {@link DeleteDSPAAssessmentTaskResponse} */
  DeleteDSPAAssessmentTask(data: DeleteDSPAAssessmentTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDSPAAssessmentTaskResponse>;
  /** 删除COS分类分级发现任务 {@link DeleteDSPACOSDiscoveryTaskRequest} {@link DeleteDSPACOSDiscoveryTaskResponse} */
  DeleteDSPACOSDiscoveryTask(data: DeleteDSPACOSDiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDSPACOSDiscoveryTaskResponse>;
  /** 删除COS分类分级任务执行结果 {@link DeleteDSPACOSDiscoveryTaskResultRequest} {@link DeleteDSPACOSDiscoveryTaskResultResponse} */
  DeleteDSPACOSDiscoveryTaskResult(data: DeleteDSPACOSDiscoveryTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDSPACOSDiscoveryTaskResultResponse>;
  /** 删除分类分级任务 {@link DeleteDSPADiscoveryTaskRequest} {@link DeleteDSPADiscoveryTaskResponse} */
  DeleteDSPADiscoveryTask(data: DeleteDSPADiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDSPADiscoveryTaskResponse>;
  /** 删除分类分级任务结果 {@link DeleteDSPADiscoveryTaskResultRequest} {@link DeleteDSPADiscoveryTaskResultResponse} */
  DeleteDSPADiscoveryTaskResult(data: DeleteDSPADiscoveryTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDSPADiscoveryTaskResultResponse>;
  /** 删除用户云资源 {@link DeleteDSPAMetaResourceRequest} {@link DeleteDSPAMetaResourceResponse} */
  DeleteDSPAMetaResource(data: DeleteDSPAMetaResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDSPAMetaResourceResponse>;
  /** 查询敏感数据导出结果 {@link DescribeAssetDetailDataExportResultRequest} {@link DescribeAssetDetailDataExportResultResponse} */
  DescribeAssetDetailDataExportResult(data: DescribeAssetDetailDataExportResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDetailDataExportResultResponse>;
  /** 数据资产报告-查询数据资产概览接口 {@link DescribeAssetOverviewRequest} {@link DescribeAssetOverviewResponse} */
  DescribeAssetOverview(data: DescribeAssetOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetOverviewResponse>;
  /** 查询DB实例 绑定的DB列表 {@link DescribeBindDBListRequest} {@link DescribeBindDBListResponse} */
  DescribeBindDBList(data: DescribeBindDBListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindDBListResponse>;
  /** 查询cos资产分布详情 {@link DescribeCOSAssetSensitiveDistributionRequest} {@link DescribeCOSAssetSensitiveDistributionResponse} */
  DescribeCOSAssetSensitiveDistribution(data: DescribeCOSAssetSensitiveDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCOSAssetSensitiveDistributionResponse>;
  /** 查询分类信息 {@link DescribeClassificationInfoRequest} {@link DescribeClassificationInfoResponse} */
  DescribeClassificationInfo(data?: DescribeClassificationInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassificationInfoResponse>;
  /** 查询标准下所有分类的识别规则数量(不算子分类下的识别规则) {@link DescribeClassificationRuleCountRequest} {@link DescribeClassificationRuleCountResponse} */
  DescribeClassificationRuleCount(data?: DescribeClassificationRuleCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassificationRuleCountResponse>;
  /** 查询高风险资产top10 {@link DescribeDSPAAssessmentHighRiskTop10OverviewRequest} {@link DescribeDSPAAssessmentHighRiskTop10OverviewResponse} */
  DescribeDSPAAssessmentHighRiskTop10Overview(data: DescribeDSPAAssessmentHighRiskTop10OverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentHighRiskTop10OverviewResponse>;
  /** 查询最新风险项详情数据 {@link DescribeDSPAAssessmentLatestRiskDetailInfoRequest} {@link DescribeDSPAAssessmentLatestRiskDetailInfoResponse} */
  DescribeDSPAAssessmentLatestRiskDetailInfo(data: DescribeDSPAAssessmentLatestRiskDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentLatestRiskDetailInfoResponse>;
  /** 查询最新风险详情列表数据 {@link DescribeDSPAAssessmentLatestRiskListRequest} {@link DescribeDSPAAssessmentLatestRiskListResponse} */
  DescribeDSPAAssessmentLatestRiskList(data: DescribeDSPAAssessmentLatestRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentLatestRiskListResponse>;
  /** 查询新发现的风险统计 {@link DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest} {@link DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse} */
  DescribeDSPAAssessmentNewDiscoveredRiskOverview(data: DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse>;
  /** 查询待处理风险统计 {@link DescribeDSPAAssessmentPendingRiskOverviewRequest} {@link DescribeDSPAAssessmentPendingRiskOverviewResponse} */
  DescribeDSPAAssessmentPendingRiskOverview(data: DescribeDSPAAssessmentPendingRiskOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentPendingRiskOverviewResponse>;
  /** 查询处理中风险统计 {@link DescribeDSPAAssessmentProcessingRiskOverviewRequest} {@link DescribeDSPAAssessmentProcessingRiskOverviewResponse} */
  DescribeDSPAAssessmentProcessingRiskOverview(data: DescribeDSPAAssessmentProcessingRiskOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentProcessingRiskOverviewResponse>;
  /** 风险数量和受影响资产数概览统计 {@link DescribeDSPAAssessmentRiskAmountOverviewRequest} {@link DescribeDSPAAssessmentRiskAmountOverviewResponse} */
  DescribeDSPAAssessmentRiskAmountOverview(data: DescribeDSPAAssessmentRiskAmountOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskAmountOverviewResponse>;
  /** 受影响资产TOP5统计 {@link DescribeDSPAAssessmentRiskDatasourceTop5Request} {@link DescribeDSPAAssessmentRiskDatasourceTop5Response} */
  DescribeDSPAAssessmentRiskDatasourceTop5(data: DescribeDSPAAssessmentRiskDatasourceTop5Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskDatasourceTop5Response>;
  /** 遗留待处理概览统计 {@link DescribeDSPAAssessmentRiskDealedOverviewRequest} {@link DescribeDSPAAssessmentRiskDealedOverviewResponse} */
  DescribeDSPAAssessmentRiskDealedOverview(data: DescribeDSPAAssessmentRiskDealedOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskDealedOverviewResponse>;
  /** 风险项处理趋势统计 {@link DescribeDSPAAssessmentRiskDealedTrendRequest} {@link DescribeDSPAAssessmentRiskDealedTrendResponse} */
  DescribeDSPAAssessmentRiskDealedTrend(data: DescribeDSPAAssessmentRiskDealedTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskDealedTrendResponse>;
  /** 查询风险分布数据 {@link DescribeDSPAAssessmentRiskDistributionOverviewRequest} {@link DescribeDSPAAssessmentRiskDistributionOverviewResponse} */
  DescribeDSPAAssessmentRiskDistributionOverview(data: DescribeDSPAAssessmentRiskDistributionOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskDistributionOverviewResponse>;
  /** 风险分类TOP5统计 {@link DescribeDSPAAssessmentRiskItemTop5Request} {@link DescribeDSPAAssessmentRiskItemTop5Response} */
  DescribeDSPAAssessmentRiskItemTop5(data: DescribeDSPAAssessmentRiskItemTop5Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskItemTop5Response>;
  /** 查询风险等级的详情数据 {@link DescribeDSPAAssessmentRiskLevelDetailRequest} {@link DescribeDSPAAssessmentRiskLevelDetailResponse} */
  DescribeDSPAAssessmentRiskLevelDetail(data: DescribeDSPAAssessmentRiskLevelDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskLevelDetailResponse>;
  /** 查询风险等级的列表 {@link DescribeDSPAAssessmentRiskLevelListRequest} {@link DescribeDSPAAssessmentRiskLevelListResponse} */
  DescribeDSPAAssessmentRiskLevelList(data: DescribeDSPAAssessmentRiskLevelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskLevelListResponse>;
  /** 风险级别趋势统计 {@link DescribeDSPAAssessmentRiskLevelTrendRequest} {@link DescribeDSPAAssessmentRiskLevelTrendResponse} */
  DescribeDSPAAssessmentRiskLevelTrend(data: DescribeDSPAAssessmentRiskLevelTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskLevelTrendResponse>;
  /** 风险数量概览统计 {@link DescribeDSPAAssessmentRiskOverviewRequest} {@link DescribeDSPAAssessmentRiskOverviewResponse} */
  DescribeDSPAAssessmentRiskOverview(data: DescribeDSPAAssessmentRiskOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskOverviewResponse>;
  /** 查询风险的处理历史 {@link DescribeDSPAAssessmentRiskProcessHistoryRequest} {@link DescribeDSPAAssessmentRiskProcessHistoryResponse} */
  DescribeDSPAAssessmentRiskProcessHistory(data: DescribeDSPAAssessmentRiskProcessHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskProcessHistoryResponse>;
  /** 查询风险评估风险面的分布 {@link DescribeDSPAAssessmentRiskSideDistributedRequest} {@link DescribeDSPAAssessmentRiskSideDistributedResponse} */
  DescribeDSPAAssessmentRiskSideDistributed(data: DescribeDSPAAssessmentRiskSideDistributedRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskSideDistributedResponse>;
  /** 查询风险评估风险面的列表 {@link DescribeDSPAAssessmentRiskSideListRequest} {@link DescribeDSPAAssessmentRiskSideListResponse} */
  DescribeDSPAAssessmentRiskSideList(data: DescribeDSPAAssessmentRiskSideListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskSideListResponse>;
  /** 查看评估模板详情 {@link DescribeDSPAAssessmentRiskTemplateDetailRequest} {@link DescribeDSPAAssessmentRiskTemplateDetailResponse} */
  DescribeDSPAAssessmentRiskTemplateDetail(data: DescribeDSPAAssessmentRiskTemplateDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskTemplateDetailResponse>;
  /** 查询风险中的脆弱项配置 {@link DescribeDSPAAssessmentRiskTemplateVulnerableListRequest} {@link DescribeDSPAAssessmentRiskTemplateVulnerableListResponse} */
  DescribeDSPAAssessmentRiskTemplateVulnerableList(data: DescribeDSPAAssessmentRiskTemplateVulnerableListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRiskTemplateVulnerableListResponse>;
  /** 获取DSPA评估风险项列表 {@link DescribeDSPAAssessmentRisksRequest} {@link DescribeDSPAAssessmentRisksResponse} */
  DescribeDSPAAssessmentRisks(data: DescribeDSPAAssessmentRisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentRisksResponse>;
  /** 获取DSPA评估任务列表 {@link DescribeDSPAAssessmentTasksRequest} {@link DescribeDSPAAssessmentTasksResponse} */
  DescribeDSPAAssessmentTasks(data: DescribeDSPAAssessmentTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentTasksResponse>;
  /** 获取DSPA评估模板关联控制项列表 {@link DescribeDSPAAssessmentTemplateControlItemsRequest} {@link DescribeDSPAAssessmentTemplateControlItemsResponse} */
  DescribeDSPAAssessmentTemplateControlItems(data: DescribeDSPAAssessmentTemplateControlItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentTemplateControlItemsResponse>;
  /** 获取DSPA评估模板列表 {@link DescribeDSPAAssessmentTemplatesRequest} {@link DescribeDSPAAssessmentTemplatesResponse} */
  DescribeDSPAAssessmentTemplates(data: DescribeDSPAAssessmentTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAAssessmentTemplatesResponse>;
  /** 获取COS敏感数据资产桶列表 {@link DescribeDSPACOSDataAssetBucketsRequest} {@link DescribeDSPACOSDataAssetBucketsResponse} */
  DescribeDSPACOSDataAssetBuckets(data: DescribeDSPACOSDataAssetBucketsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSDataAssetBucketsResponse>;
  /** 获取COS单个模板下的敏感数据资产 {@link DescribeDSPACOSDataAssetByComplianceIdRequest} {@link DescribeDSPACOSDataAssetByComplianceIdResponse} */
  DescribeDSPACOSDataAssetByComplianceId(data: DescribeDSPACOSDataAssetByComplianceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSDataAssetByComplianceIdResponse>;
  /** 获取COS分类分级数据资产详情 {@link DescribeDSPACOSDataAssetDetailRequest} {@link DescribeDSPACOSDataAssetDetailResponse} */
  DescribeDSPACOSDataAssetDetail(data: DescribeDSPACOSDataAssetDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSDataAssetDetailResponse>;
  /** 获取COS分类分级任务详情信息 {@link DescribeDSPACOSDiscoveryTaskDetailRequest} {@link DescribeDSPACOSDiscoveryTaskDetailResponse} */
  DescribeDSPACOSDiscoveryTaskDetail(data: DescribeDSPACOSDiscoveryTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSDiscoveryTaskDetailResponse>;
  /** 获取COS分类分级发现任务结果详情文件列表 {@link DescribeDSPACOSDiscoveryTaskFilesRequest} {@link DescribeDSPACOSDiscoveryTaskFilesResponse} */
  DescribeDSPACOSDiscoveryTaskFiles(data: DescribeDSPACOSDiscoveryTaskFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSDiscoveryTaskFilesResponse>;
  /** 获取COS分类分级任务执行结果 {@link DescribeDSPACOSDiscoveryTaskResultRequest} {@link DescribeDSPACOSDiscoveryTaskResultResponse} */
  DescribeDSPACOSDiscoveryTaskResult(data: DescribeDSPACOSDiscoveryTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSDiscoveryTaskResultResponse>;
  /** 获取COS分类分级任务信息列表 {@link DescribeDSPACOSDiscoveryTasksRequest} {@link DescribeDSPACOSDiscoveryTasksResponse} */
  DescribeDSPACOSDiscoveryTasks(data: DescribeDSPACOSDiscoveryTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSDiscoveryTasksResponse>;
  /** 获取COS分类分级任务结果详情 {@link DescribeDSPACOSTaskResultDetailRequest} {@link DescribeDSPACOSTaskResultDetailResponse} */
  DescribeDSPACOSTaskResultDetail(data: DescribeDSPACOSTaskResultDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACOSTaskResultDetailResponse>;
  /** 获取分类列表 {@link DescribeDSPACategoriesRequest} {@link DescribeDSPACategoriesResponse} */
  DescribeDSPACategories(data: DescribeDSPACategoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACategoriesResponse>;
  /** 获取分类规则统计信息 {@link DescribeDSPACategoryRuleStatisticRequest} {@link DescribeDSPACategoryRuleStatisticResponse} */
  DescribeDSPACategoryRuleStatistic(data: DescribeDSPACategoryRuleStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACategoryRuleStatisticResponse>;
  /** 获取合规组分类规则信息 {@link DescribeDSPACategoryRulesRequest} {@link DescribeDSPACategoryRulesResponse} */
  DescribeDSPACategoryRules(data: DescribeDSPACategoryRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACategoryRulesResponse>;
  /** 获取分类树信息 {@link DescribeDSPACategoryTreeRequest} {@link DescribeDSPACategoryTreeResponse} */
  DescribeDSPACategoryTree(data: DescribeDSPACategoryTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACategoryTreeResponse>;
  /** 获取分类规则树信息 {@link DescribeDSPACategoryTreeWithRulesRequest} {@link DescribeDSPACategoryTreeWithRulesResponse} */
  DescribeDSPACategoryTreeWithRules(data: DescribeDSPACategoryTreeWithRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPACategoryTreeWithRulesResponse>;
  /** 获取模板详情信息 {@link DescribeDSPAComplianceGroupDetailRequest} {@link DescribeDSPAComplianceGroupDetailResponse} */
  DescribeDSPAComplianceGroupDetail(data: DescribeDSPAComplianceGroupDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAComplianceGroupDetailResponse>;
  /** 获取分类分级模板列表 {@link DescribeDSPAComplianceGroupsRequest} {@link DescribeDSPAComplianceGroupsResponse} */
  DescribeDSPAComplianceGroups(data: DescribeDSPAComplianceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAComplianceGroupsResponse>;
  /** 获取模板更新提示信息 {@link DescribeDSPAComplianceUpdateNotificationRequest} {@link DescribeDSPAComplianceUpdateNotificationResponse} */
  DescribeDSPAComplianceUpdateNotification(data: DescribeDSPAComplianceUpdateNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAComplianceUpdateNotificationResponse>;
  /** 获取数据源的数据库信息 {@link DescribeDSPADataSourceDbInfoRequest} {@link DescribeDSPADataSourceDbInfoResponse} */
  DescribeDSPADataSourceDbInfo(data: DescribeDSPADataSourceDbInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPADataSourceDbInfoResponse>;
  /** 获取分类分级规则信息列表 {@link DescribeDSPADiscoveryRulesRequest} {@link DescribeDSPADiscoveryRulesResponse} */
  DescribeDSPADiscoveryRules(data: DescribeDSPADiscoveryRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPADiscoveryRulesResponse>;
  /** 获取分类分级服务的状态 {@link DescribeDSPADiscoveryServiceStatusRequest} {@link DescribeDSPADiscoveryServiceStatusResponse} */
  DescribeDSPADiscoveryServiceStatus(data: DescribeDSPADiscoveryServiceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPADiscoveryServiceStatusResponse>;
  /** 获取分类分级任务详情信息 {@link DescribeDSPADiscoveryTaskDetailRequest} {@link DescribeDSPADiscoveryTaskDetailResponse} */
  DescribeDSPADiscoveryTaskDetail(data: DescribeDSPADiscoveryTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPADiscoveryTaskDetailResponse>;
  /** 获取分类分级任务执行结果 {@link DescribeDSPADiscoveryTaskResultRequest} {@link DescribeDSPADiscoveryTaskResultResponse} */
  DescribeDSPADiscoveryTaskResult(data: DescribeDSPADiscoveryTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPADiscoveryTaskResultResponse>;
  /** 获取分类分级发现任务结果详情 {@link DescribeDSPADiscoveryTaskResultDetailRequest} {@link DescribeDSPADiscoveryTaskResultDetailResponse} */
  DescribeDSPADiscoveryTaskResultDetail(data: DescribeDSPADiscoveryTaskResultDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPADiscoveryTaskResultDetailResponse>;
  /** 获取分级分级扫描的表集合 {@link DescribeDSPADiscoveryTaskTablesRequest} {@link DescribeDSPADiscoveryTaskTablesResponse} */
  DescribeDSPADiscoveryTaskTables(data: DescribeDSPADiscoveryTaskTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPADiscoveryTaskTablesResponse>;
  /** 查询ES的资产概览统计数据 {@link DescribeDSPAESDataAssetByComplianceIdRequest} {@link DescribeDSPAESDataAssetByComplianceIdResponse} */
  DescribeDSPAESDataAssetByComplianceId(data: DescribeDSPAESDataAssetByComplianceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAESDataAssetByComplianceIdResponse>;
  /** 查询ES的资产概览统计列表数据 {@link DescribeDSPAESDataAssetDetailRequest} {@link DescribeDSPAESDataAssetDetailResponse} */
  DescribeDSPAESDataAssetDetail(data: DescribeDSPAESDataAssetDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAESDataAssetDetailResponse>;
  /** 获取ES扫描结果数据样本 {@link DescribeDSPAESDataSampleRequest} {@link DescribeDSPAESDataSampleResponse} */
  DescribeDSPAESDataSample(data: DescribeDSPAESDataSampleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAESDataSampleResponse>;
  /** 获取ES的分类分级发现任务结果详情 {@link DescribeDSPAESDiscoveryTaskResultDetailRequest} {@link DescribeDSPAESDiscoveryTaskResultDetailResponse} */
  DescribeDSPAESDiscoveryTaskResultDetail(data: DescribeDSPAESDiscoveryTaskResultDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPAESDiscoveryTaskResultDetailResponse>;
  /** 获取分级详情 {@link DescribeDSPALevelDetailRequest} {@link DescribeDSPALevelDetailResponse} */
  DescribeDSPALevelDetail(data: DescribeDSPALevelDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPALevelDetailResponse>;
  /** 获取分级列表 {@link DescribeDSPALevelGroupsRequest} {@link DescribeDSPALevelGroupsResponse} */
  DescribeDSPALevelGroups(data: DescribeDSPALevelGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPALevelGroupsResponse>;
  /** 获取单个合规组下的RDB关系数据库分类分级数据资产 {@link DescribeDSPARDBDataAssetByComplianceIdRequest} {@link DescribeDSPARDBDataAssetByComplianceIdResponse} */
  DescribeDSPARDBDataAssetByComplianceId(data: DescribeDSPARDBDataAssetByComplianceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPARDBDataAssetByComplianceIdResponse>;
  /** 获取RDB关系数据库分类分级资产详情 {@link DescribeDSPARDBDataAssetDetailRequest} {@link DescribeDSPARDBDataAssetDetailResponse} */
  DescribeDSPARDBDataAssetDetail(data: DescribeDSPARDBDataAssetDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPARDBDataAssetDetailResponse>;
  /** 拉取DSPA支持的Meta元数据类型 {@link DescribeDSPASupportedMetasRequest} {@link DescribeDSPASupportedMetasResponse} */
  DescribeDSPASupportedMetas(data?: DescribeDSPASupportedMetasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPASupportedMetasResponse>;
  /** 获取扫描结果数据样本 {@link DescribeDSPATaskResultDataSampleRequest} {@link DescribeDSPATaskResultDataSampleResponse} */
  DescribeDSPATaskResultDataSample(data: DescribeDSPATaskResultDataSampleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDSPATaskResultDataSampleResponse>;
  /** 查询es的敏感资产分布 {@link DescribeESAssetSensitiveDistributionRequest} {@link DescribeESAssetSensitiveDistributionResponse} */
  DescribeESAssetSensitiveDistribution(data: DescribeESAssetSensitiveDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeESAssetSensitiveDistributionResponse>;
  /** 获取导出任务结果 {@link DescribeExportTaskResultRequest} {@link DescribeExportTaskResultResponse} */
  DescribeExportTaskResult(data: DescribeExportTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportTaskResultResponse>;
  /** 查询标准下所有叶子节点分类 {@link DescribeLeafClassificationRequest} {@link DescribeLeafClassificationResponse} */
  DescribeLeafClassification(data?: DescribeLeafClassificationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLeafClassificationResponse>;
  /** 查询mongo的敏感资产分布 {@link DescribeMongoAssetSensitiveDistributionRequest} {@link DescribeMongoAssetSensitiveDistributionResponse} */
  DescribeMongoAssetSensitiveDistribution(data: DescribeMongoAssetSensitiveDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMongoAssetSensitiveDistributionResponse>;
  /** 查询关系型数据库的敏感资产分布 {@link DescribeRDBAssetSensitiveDistributionRequest} {@link DescribeRDBAssetSensitiveDistributionResponse} */
  DescribeRDBAssetSensitiveDistribution(data: DescribeRDBAssetSensitiveDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRDBAssetSensitiveDistributionResponse>;
  /** 获取报表下载链接 {@link DescribeReportTaskDownloadUrlRequest} {@link DescribeReportTaskDownloadUrlResponse} */
  DescribeReportTaskDownloadUrl(data: DescribeReportTaskDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportTaskDownloadUrlResponse>;
  /** 获取资产报表任务列表 {@link DescribeReportTasksRequest} {@link DescribeReportTasksResponse} */
  DescribeReportTasks(data: DescribeReportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportTasksResponse>;
  /** 查询分类规则详情 {@link DescribeRuleDetailRequest} {@link DescribeRuleDetailResponse} */
  DescribeRuleDetail(data?: DescribeRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleDetailResponse>;
  /** 查询分类下规则列表 {@link DescribeRuleListRequest} {@link DescribeRuleListResponse} */
  DescribeRuleList(data?: DescribeRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleListResponse>;
  /** 查询cos敏感数据分布 {@link DescribeSensitiveCOSDataDistributionRequest} {@link DescribeSensitiveCOSDataDistributionResponse} */
  DescribeSensitiveCOSDataDistribution(data: DescribeSensitiveCOSDataDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSensitiveCOSDataDistributionResponse>;
  /** 查询rdb的敏感数据分布详情 {@link DescribeSensitiveRDBDataDistributionRequest} {@link DescribeSensitiveRDBDataDistributionResponse} */
  DescribeSensitiveRDBDataDistribution(data: DescribeSensitiveRDBDataDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSensitiveRDBDataDistributionResponse>;
  /** 取消用户云资源授权 {@link DisableDSPAMetaResourceAuthRequest} {@link DisableDSPAMetaResourceAuthResponse} */
  DisableDSPAMetaResourceAuth(data: DisableDSPAMetaResourceAuthRequest, config?: AxiosRequestConfig): AxiosPromise<DisableDSPAMetaResourceAuthResponse>;
  /** 打开或关闭分类分级规则 {@link EnableDSPADiscoveryRuleRequest} {@link EnableDSPADiscoveryRuleResponse} */
  EnableDSPADiscoveryRule(data: EnableDSPADiscoveryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<EnableDSPADiscoveryRuleResponse>;
  /** 启用版本体验 {@link EnableTrialVersionRequest} {@link EnableTrialVersionResponse} */
  EnableTrialVersion(data: EnableTrialVersionRequest, config?: AxiosRequestConfig): AxiosPromise<EnableTrialVersionResponse>;
  /** 敏感数据导出 {@link ExportAssetDetailDataRequest} {@link ExportAssetDetailDataResponse} */
  ExportAssetDetailData(data: ExportAssetDetailDataRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAssetDetailDataResponse>;
  /** 获取授权资源的连接状态 {@link GetResourceConnectionStatusRequest} {@link GetResourceConnectionStatusResponse} */
  GetResourceConnectionStatus(data: GetResourceConnectionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetResourceConnectionStatusResponse>;
  /** 获取体验版本信息 {@link GetTrialVersionRequest} {@link GetTrialVersionResponse} */
  GetTrialVersion(data: GetTrialVersionRequest, config?: AxiosRequestConfig): AxiosPromise<GetTrialVersionResponse>;
  /** 获取用户购买配额信息 {@link GetUserQuotaInfoRequest} {@link GetUserQuotaInfoResponse} */
  GetUserQuotaInfo(data: GetUserQuotaInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserQuotaInfoResponse>;
  /** 拉取DSPA集群列表 {@link ListDSPAClustersRequest} {@link ListDSPAClustersResponse} */
  ListDSPAClusters(data?: ListDSPAClustersRequest, config?: AxiosRequestConfig): AxiosPromise<ListDSPAClustersResponse>;
  /** 拉取用户COS元数据信息 {@link ListDSPACosMetaResourcesRequest} {@link ListDSPACosMetaResourcesResponse} */
  ListDSPACosMetaResources(data: ListDSPACosMetaResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDSPACosMetaResourcesResponse>;
  /** 拉取用户云资源 {@link ListDSPAMetaResourcesRequest} {@link ListDSPAMetaResourcesResponse} */
  ListDSPAMetaResources(data: ListDSPAMetaResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDSPAMetaResourcesResponse>;
  /** 编辑识别规则 {@link ModifyClassificationRuleRequest} {@link ModifyClassificationRuleResponse} */
  ModifyClassificationRule(data?: ModifyClassificationRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClassificationRuleResponse>;
  /** 修改识别规则状态 {@link ModifyClassificationRuleStateRequest} {@link ModifyClassificationRuleStateResponse} */
  ModifyClassificationRuleState(data?: ModifyClassificationRuleStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClassificationRuleStateResponse>;
  /** 修改DSPA评估风险项 {@link ModifyDSPAAssessmentRiskRequest} {@link ModifyDSPAAssessmentRiskResponse} */
  ModifyDSPAAssessmentRisk(data: ModifyDSPAAssessmentRiskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPAAssessmentRiskResponse>;
  /** 修改最新评估风险项状态 {@link ModifyDSPAAssessmentRiskLatestRequest} {@link ModifyDSPAAssessmentRiskLatestResponse} */
  ModifyDSPAAssessmentRiskLatest(data: ModifyDSPAAssessmentRiskLatestRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPAAssessmentRiskLatestResponse>;
  /** 修改风险等级的详情数据 {@link ModifyDSPAAssessmentRiskLevelRequest} {@link ModifyDSPAAssessmentRiskLevelResponse} */
  ModifyDSPAAssessmentRiskLevel(data: ModifyDSPAAssessmentRiskLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPAAssessmentRiskLevelResponse>;
  /** 修改风险模板页面 {@link ModifyDSPAAssessmentRiskTemplateRequest} {@link ModifyDSPAAssessmentRiskTemplateResponse} */
  ModifyDSPAAssessmentRiskTemplate(data: ModifyDSPAAssessmentRiskTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPAAssessmentRiskTemplateResponse>;
  /** 修改COS分类分级任务信息 {@link ModifyDSPACOSDiscoveryTaskRequest} {@link ModifyDSPACOSDiscoveryTaskResponse} */
  ModifyDSPACOSDiscoveryTask(data: ModifyDSPACOSDiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPACOSDiscoveryTaskResponse>;
  /** 调整COS任务扫描结果 {@link ModifyDSPACOSTaskResultRequest} {@link ModifyDSPACOSTaskResultResponse} */
  ModifyDSPACOSTaskResult(data: ModifyDSPACOSTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPACOSTaskResultResponse>;
  /** 修改DSPA分类 {@link ModifyDSPACategoryRequest} {@link ModifyDSPACategoryResponse} */
  ModifyDSPACategory(data: ModifyDSPACategoryRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPACategoryResponse>;
  /** 修改分类分级关系 {@link ModifyDSPACategoryRelationRequest} {@link ModifyDSPACategoryRelationResponse} */
  ModifyDSPACategoryRelation(data: ModifyDSPACategoryRelationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPACategoryRelationResponse>;
  /** 修改DSPA集群信息 {@link ModifyDSPAClusterInfoRequest} {@link ModifyDSPAClusterInfoResponse} */
  ModifyDSPAClusterInfo(data: ModifyDSPAClusterInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPAClusterInfoResponse>;
  /** 修改分类分级模板 {@link ModifyDSPAComplianceGroupRequest} {@link ModifyDSPAComplianceGroupResponse} */
  ModifyDSPAComplianceGroup(data: ModifyDSPAComplianceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPAComplianceGroupResponse>;
  /** 修改分类分级规则信息 {@link ModifyDSPADiscoveryRuleRequest} {@link ModifyDSPADiscoveryRuleResponse} */
  ModifyDSPADiscoveryRule(data: ModifyDSPADiscoveryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPADiscoveryRuleResponse>;
  /** 修改分类分级任务信息 {@link ModifyDSPADiscoveryTaskRequest} {@link ModifyDSPADiscoveryTaskResponse} */
  ModifyDSPADiscoveryTask(data: ModifyDSPADiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPADiscoveryTaskResponse>;
  /** 调整ES任务扫描结果 {@link ModifyDSPAESTaskResultRequest} {@link ModifyDSPAESTaskResultResponse} */
  ModifyDSPAESTaskResult(data: ModifyDSPAESTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPAESTaskResultResponse>;
  /** 调整任务扫描结果 {@link ModifyDSPATaskResultRequest} {@link ModifyDSPATaskResultResponse} */
  ModifyDSPATaskResult(data: ModifyDSPATaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDSPATaskResultResponse>;
  /** 修改敏感级别信息 {@link ModifyLevelInfoRequest} {@link ModifyLevelInfoResponse} */
  ModifyLevelInfo(data?: ModifyLevelInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLevelInfoResponse>;
  /** 修改级别名称 {@link ModifyLevelNameRequest} {@link ModifyLevelNameResponse} */
  ModifyLevelName(data?: ModifyLevelNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLevelNameResponse>;
  /** 修改级别状态 {@link ModifyLevelStateRequest} {@link ModifyLevelStateResponse} */
  ModifyLevelState(data?: ModifyLevelStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLevelStateResponse>;
  /** 一个分类合并到另一个分类中（分类拖拽功能） {@link ModifyMergeClassificationRequest} {@link ModifyMergeClassificationResponse} */
  ModifyMergeClassification(data?: ModifyMergeClassificationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMergeClassificationResponse>;
  /** 修改分类信息 {@link ModifyNewClassificationRequest} {@link ModifyNewClassificationResponse} */
  ModifyNewClassification(data?: ModifyNewClassificationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNewClassificationResponse>;
  /** 修改分级分类模板信息 {@link ModifyStandardInfoRequest} {@link ModifyStandardInfoResponse} */
  ModifyStandardInfo(data?: ModifyStandardInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStandardInfoResponse>;
  /** 查询数据库资源实例的DB列表 {@link QueryDSPAMetaResourceDbListRequest} {@link QueryDSPAMetaResourceDbListResponse} */
  QueryDSPAMetaResourceDbList(data: QueryDSPAMetaResourceDbListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDSPAMetaResourceDbListResponse>;
  /** 获取资源绑定DB状态 {@link QueryResourceDbBindStatusRequest} {@link QueryResourceDbBindStatusResponse} */
  QueryResourceDbBindStatus(data: QueryResourceDbBindStatusRequest, config?: AxiosRequestConfig): AxiosPromise<QueryResourceDbBindStatusResponse>;
  /** 重新启动DSPA评估任务 {@link RestartDSPAAssessmentTaskRequest} {@link RestartDSPAAssessmentTaskResponse} */
  RestartDSPAAssessmentTask(data: RestartDSPAAssessmentTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDSPAAssessmentTaskResponse>;
  /** 启动分类分级任务 {@link StartDSPADiscoveryTaskRequest} {@link StartDSPADiscoveryTaskResponse} */
  StartDSPADiscoveryTask(data: StartDSPADiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StartDSPADiscoveryTaskResponse>;
  /** 停止正在执行的分类分级任务 {@link StopDSPADiscoveryTaskRequest} {@link StopDSPADiscoveryTaskResponse} */
  StopDSPADiscoveryTask(data: StopDSPADiscoveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopDSPADiscoveryTaskResponse>;
  /** 更新自建资源基础信息 {@link UpdateDSPASelfBuildResourceRequest} {@link UpdateDSPASelfBuildResourceResponse} */
  UpdateDSPASelfBuildResource(data: UpdateDSPASelfBuildResourceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDSPASelfBuildResourceResponse>;
  /** 验证COS分类分级规则 {@link VerifyDSPACOSRuleRequest} {@link VerifyDSPACOSRuleResponse} */
  VerifyDSPACOSRule(data: VerifyDSPACOSRuleRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyDSPACOSRuleResponse>;
  /** 验证分类分级发现规则 {@link VerifyDSPADiscoveryRuleRequest} {@link VerifyDSPADiscoveryRuleResponse} */
  VerifyDSPADiscoveryRule(data: VerifyDSPADiscoveryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyDSPADiscoveryRuleResponse>;
}

export declare type Versions = ["2019-07-23"];

export default Dsgc;
