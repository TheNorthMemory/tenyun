/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 评估结果 */
declare interface AggregateEvaluationResult {
  /** 资源id */
  ResourceId: string;
  /** 资源类型 */
  ResourceType: string;
  /** 资源地域 */
  ResourceRegion: string;
  /** 资源名称 */
  ResourceName: string;
  /** 规则id */
  ConfigRuleId: string;
  /** 规则名称 */
  ConfigRuleName: string;
  /** 合规包id */
  CompliancePackId: string | null;
  /** 风险等级 */
  RiskLevel: number;
  /** 评估结果 */
  Annotation: Annotation | null;
  /** 合规类型 */
  ComplianceType: string | null;
  /** 规则发起类型 */
  InvokingEventMessageType: string;
  /** 评估发起时间 */
  ConfigRuleInvokedTime: string;
  /** 评估实际时间 */
  ResultRecordedTime: string;
  /** 资源所属用户ID */
  ResourceOwnerId: number | null;
  /** 资源所属用户名称 */
  ResourceOwnerName?: string | null;
}

/** 资源列列表信息 */
declare interface AggregateResourceInfo {
  /** 资源类型 */
  ResourceType?: string;
  /** 资源名称 */
  ResourceName?: string;
  /** 资源ID */
  ResourceId?: string;
  /** 地域 */
  ResourceRegion?: string;
  /** 资源状态 */
  ResourceStatus?: string;
  /** 是否删除 1:已删除 0:未删除 */
  ResourceDelete?: number;
  /** 资源创建时间 */
  ResourceCreateTime?: string;
  /** 标签信息 */
  Tags?: Tag[];
  /** 可用区 */
  ResourceZone?: string;
  /** 合规状态 */
  ComplianceResult?: string;
  /** 资源所属用户ID */
  ResourceOwnerId?: number;
  /** 用户昵称 */
  ResourceOwnerName?: string;
}

/** 用户组列表信息 */
declare interface Aggregator {
  /** 账号组名称 */
  Name: string;
  /** 账号组描述 */
  Description: string;
  /** 创建者用户ID */
  OwnerUin: number;
  /** 创建时间 */
  CreateTime: string;
  /** 账号组成员数量 */
  AccountCount: number;
  /** RD:全局账号组 */
  Type: string;
  /** 账号组ID */
  AccountGroupId: string;
  /** 账号组状态 */
  AggregatorStatus?: number;
  /** 账号组名称 */
  MemberName?: string | null;
}

/** 成员信息 */
declare interface AggregatorAccount {
  /** 成员ID */
  MemberUin: number;
  /** 成员名称 */
  MemberName: string | null;
}

/** 合规详情 */
declare interface Annotation {
  /** 资源当前实际配置。长度为0~256位字符，即资源不合规配置 */
  Configuration: string;
  /** 资源期望配置。长度为0~256位字符，即资源合规配置 */
  DesiredValue: string;
  /** 资源当前配置和期望配置之间的比较运算符。长度为0~16位字符，自定义规则上报评估结果此字段可能为空 */
  Operator?: string;
  /** 当前配置在资源属性结构体中的JSON路径。长度为0~256位字符，自定义规则上报评估结果此字段可能为空 */
  Property?: string;
}

/** 合规包规则信息 */
declare interface ComplianceConfigRule {
  /** 规则名称 */
  RuleName: string | null;
  /** 风险等级 */
  RiskLevel: number | null;
  /** 规则状态 */
  Status: string | null;
  /** 规则ID */
  ConfigRuleId: string | null;
  /** 评估结果合规： 'COMPLIANT'不合规： 'NON_COMPLIANT' */
  ComplianceResult: string | null;
  /** 关键字 */
  Labels: string[] | null;
  /** 入参 */
  InputParameter: InputParameter[] | null;
  /** 参数格式 */
  SourceCondition: SourceConditionForManage[] | null;
  /** 规则标识 */
  Identifier: string | null;
  /** 创建方式 user、compliancePack、system */
  CreateByType: string | null;
  /** 规则描述 */
  Description: string | null;
  /** 参数描述 */
  ManageInputParameter: InputParameterForManage[] | null;
}

/** 合规包规则信息 */
declare interface CompliancePackRule {
  /** 规则名称 */
  RuleName: string;
  /** 风险等级 */
  RiskLevel: number;
  /** 入参 */
  InputParameter: InputParameter[];
  /** 规则身份标识 */
  Identifier?: string;
  /** 描述 */
  Description?: string | null;
  /** 预设规则身份标识 */
  ManagedRuleIdentifier?: string | null;
  /** 规则ID */
  ConfigRuleId?: string;
  /** 合规包ID */
  CompliancePackId?: string | null;
}

/** 管理端系统合规包规则 */
declare interface CompliancePackRuleForManage {
  /** 规则唯一身份标识 */
  Identifier?: string | null;
  /** 规则名称 */
  RuleName?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 风险等级1：高风险 2：中风险 3：低风险 */
  RiskLevel?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 合规包规则 */
  CompliancePackRules?: CompliancePackRules[];
  /** 规则编号信息 */
  Control?: Control[];
  /** 资源类型 */
  ResourceTypes?: string[];
}

/** 合规包规则信息 */
declare interface CompliancePackRules {
  /** 规则标识 */
  Identifier: string;
  /** 规则编号信息 */
  Control?: Control[];
  /** 资源类型 */
  ResourceTypes?: string[];
}

/** 用户合规包信息 */
declare interface ConfigCompliancePack {
  /** 合规包状态 */
  Status: string;
  /** 合规包ID */
  CompliancePackId: string;
  /** 描述 */
  Description: string | null;
  /** 合规包名称 */
  CompliancePackName: string;
  /** 风险等级 */
  RiskLevel: number;
  /** 评估结果 */
  ComplianceResult: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 不合规规则名 */
  NoCompliantNames: string[] | null;
  /** 合规包规则数 */
  RuleCount: number | null;
}

/** 资源类型信息 */
declare interface ConfigResource {
  /** 产品 */
  Product: string | null;
  /** 产品名 */
  ProductName: string | null;
  /** 资源类型 */
  ResourceType: string | null;
  /** 资源类型名 */
  ResourceTypeName: string | null;
}

/** 规则详情 */
declare interface ConfigRule {
  /** 规则标识 */
  Identifier?: string;
  /** 规则名 */
  RuleName?: string;
  /** 规则参数 */
  InputParameter?: InputParameter[];
  /** 规则触发条件 */
  SourceCondition?: SourceConditionForManage[];
  /** 规则支持的资源类型，规则仅对指定资源类型的资源生效。 */
  ResourceType?: string[];
  /** 规则所属标签 */
  Labels?: string[];
  /** 规则风险等级1:低风险2:中风险3:高风险 */
  RiskLevel?: number;
  /** 规则对应的函数 */
  ServiceFunction?: string;
  /** 创建时间格式：YYYY-MM-DD h:i:s */
  CreateTime?: string;
  /** 规则描述 */
  Description?: string;
  /** ACTIVE：启用NO_ACTIVE：停止 */
  Status?: string;
  /** 合规： 'COMPLIANT'不合规： 'NON_COMPLIANT'无法应用规则： 'NOT_APPLICABLE' */
  ComplianceResult?: string;
  /** ["",""] */
  Annotation?: Annotation;
  /** 规则评估时间格式：YYYY-MM-DD h:i:s */
  ConfigRuleInvokedTime?: string;
  /** 规则ID */
  ConfigRuleId?: string;
  /** CUSTOMIZE：自定义规则、SYSTEM：托管规则 */
  IdentifierType?: string;
  /** 合规包ID */
  CompliancePackId?: string;
  /** 触发类型ScheduledNotification：周期触发、ConfigurationItemChangeNotification：变更触发 */
  TriggerType?: TriggerType[];
  /** 参数详情 */
  ManageInputParameter?: InputParameterForManage[];
  /** 合规包名称 */
  CompliancePackName?: string;
  /** 关联地域 */
  RegionsScope?: string[];
  /** 关联标签 */
  TagsScope?: Tag[];
  /** 规则对指定资源ID无效，即不对该资源执行评估。 */
  ExcludeResourceIdsScope?: string[];
  /** 账号组ID */
  AccountGroupId?: string;
  /** 账号组名称 */
  AccountGroupName?: string;
  /** 规则所属用户ID */
  RuleOwnerId?: number;
  /** 预设规则支持的触发方式ScheduledNotification：周期触发ConfigurationItemChangeNotification：变更触发 */
  ManageTriggerType?: string[];
}

/** 规则编号信息 */
declare interface Control {
  /** 规则编号 */
  Id?: string;
  /** 编号描述 */
  Description?: string;
}

/** 自定义规则评估结果 */
declare interface Evaluation {
  /** 已评估资源ID。长度为0~256个字符 */
  ComplianceResourceId: string | null;
  /** 已评估资源类型。支持:QCS::CVM::Instance、 QCS::CBS::Disk、QCS::VPC::Vpc、QCS::VPC::Subnet、QCS::VPC::SecurityGroup、 QCS::CAM::User、QCS::CAM::Group、QCS::CAM::Policy、QCS::CAM::Role、QCS::COS::Bucket */
  ComplianceResourceType: string | null;
  /** 已评估资源地域。长度为0~32个字符 */
  ComplianceRegion: string | null;
  /** 合规类型。取值：COMPLIANT：合规、NON_COMPLIANT：不合规 */
  ComplianceType: string | null;
  /** 不合规资源的补充信息。 */
  Annotation?: Annotation | null;
}

/** 评估结果 */
declare interface EvaluationResult {
  /** 资源id */
  ResourceId: string | null;
  /** 资源类型 */
  ResourceType: string | null;
  /** 资源地域 */
  ResourceRegion: string | null;
  /** 资源名称 */
  ResourceName: string | null;
  /** 规则id */
  ConfigRuleId: string | null;
  /** 规则名称 */
  ConfigRuleName: string | null;
  /** 合规包id */
  CompliancePackId: string | null;
  /** 风险等级 */
  RiskLevel: number | null;
  /** 评估结果 */
  Annotation: Annotation | null;
  /** 合规类型 */
  ComplianceType: string | null;
  /** 规则发起类型 */
  InvokingEventMessageType: string | null;
  /** 评估发起时间 */
  ConfigRuleInvokedTime: string | null;
  /** 评估实际时间 */
  ResultRecordedTime: string | null;
}

/** 资源列表筛选 */
declare interface Filter {
  /** 查询字段名称 资源名称：resourceName 资源ID：resourceId 资源类型：resourceType 资源地域：resourceRegion 删除状态：resourceDelete 0未删除，1已删除 resourceRegionAndZone地域/可用区 */
  Name?: string;
  /** 查询字段值 */
  Values?: string[];
}

/** 参数值 */
declare interface InputParameter {
  /** 参数名 */
  ParameterKey: string;
  /** 参数类型。必填类型：Require，可选类型：Optional。 */
  Type?: string;
  /** 参数值 */
  Value?: string;
}

/** 规则入参 */
declare interface InputParameterForManage {
  /** 值类型。数值：Integer， 字符串：String */
  ValueType?: string;
  /** 参数Key */
  ParameterKey?: string;
  /** 参数类型。必填类型：Require，可选类型：Optional。 */
  Type?: string;
  /** 默认值 */
  DefaultValue?: string;
  /** 描述 */
  Description?: string;
}

/** 修复设置 */
declare interface Remediation {
  /** 修正模板 ID。 */
  RemediationTemplateId?: string;
  /** 修正设置 ID。 */
  RemediationId?: string;
  /** 执行修正的模板来源 */
  RemediationSourceType?: string;
  /** 修正类型。取值：SCF：函数计算（自定义修正）。 */
  RemediationType?: string;
  /** 账号ID */
  OwnerUin?: string;
  /** 修正执行方式。取值：MANUAL_EXECUTION：手动执行。 */
  InvokeType?: string;
  /** 规则 ID。 */
  RuleId?: string;
}

/** 修正记录 */
declare interface RemediationExecutions {
  /** 修正状态 1：运行中 2：成功 3：失败 */
  ExecutionStatus?: number;
  /** 资源类型 */
  ExecutionResourceType?: string;
  /** 修复时间 */
  ExecutionCreateDate?: string;
  /** 错误信息 */
  ExecutionStatusMessage?: string;
  /** 资源ID */
  ExecutionResourceIds?: string;
}

/** 资源列列表信息 */
declare interface ResourceListInfo {
  /** 资源类型 */
  ResourceType?: string;
  /** 资源名称 */
  ResourceName?: string;
  /** 资源ID */
  ResourceId?: string;
  /** 地域 */
  ResourceRegion?: string;
  /** 资源状态 */
  ResourceStatus?: string;
  /** 1 :已删除 2：未删除 */
  ResourceDelete?: number;
  /** 资源创建时间 */
  ResourceCreateTime?: string;
  /** 标签信息 */
  Tags?: Tag[];
  /** 可用区 */
  ResourceZone?: string;
  /** 合规状态 */
  ComplianceResult?: string;
}

/** 管理端规则条件 */
declare interface SourceConditionForManage {
  /** 条件为空，合规：COMPLIANT，不合规：NON_COMPLIANT，无法应用：NOT_APPLICABLE */
  EmptyAs?: string;
  /** 配置路径 */
  SelectPath?: string;
  /** 操作运算符 */
  Operator?: string;
  /** 是否必须 */
  Required?: boolean;
  /** 期望值 */
  DesiredValue?: string;
}

/** 系统合规包信息 */
declare interface SystemCompliancePack {
  /** 合规包ID */
  CompliancePackId: string;
  /** 名称 */
  CompliancePackName: string;
  /** 描述 */
  Description: string | null;
  /** 合规包风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel: number;
  /** 合规包规则信息 */
  ConfigRules: CompliancePackRuleForManage[] | null;
}

/** 管理端规则详情 */
declare interface SystemConfigRule {
  /** 规则标识 */
  Identifier: string | null;
  /** 规则名 */
  RuleName: string | null;
  /** 规则参数 */
  InputParameter: InputParameterForManage[] | null;
  /** 规则触发条件 */
  SourceCondition: SourceConditionForManage[] | null;
  /** 支持的资源类型 */
  ResourceType: string[] | null;
  /** 标签 */
  Label: string[] | null;
  /** 风险等级，1，2，3 */
  RiskLevel: number | null;
  /** 对应的函数 */
  ServiceFunction: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 触发类型 */
  TriggerType: string[] | null;
  /** 描述 */
  Description: string | null;
  /** 使用次数 */
  ReferenceCount: number | null;
  /** 规则类型 */
  IdentifierType: string;
}

/** 标签 */
declare interface Tag {
  /** 标签key */
  TagKey?: string;
  /** 标签value */
  TagValue?: string;
}

/** 规则支持触发类型 */
declare interface TriggerType {
  /** 触发类型 */
  MessageType: string;
  /** 触发时间周期 */
  MaximumExecutionFrequency?: string;
}

/** 资源类型 */
declare interface UserConfigResource {
  /** 产品 */
  Product: string | null;
  /** 产品名 */
  ProductName: string | null;
  /** 资源类型 */
  ResourceType: string | null;
  /** 资源类型名 */
  ResourceTypeName: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
}

declare interface AddAggregateCompliancePackRequest {
  /** 合规包规则 */
  ConfigRules: CompliancePackRule[];
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel: number;
  /** 合规包名称 */
  CompliancePackName: string;
  /** 账号组ID */
  AccountGroupId: string;
  /** 描述 */
  Description?: string;
}

declare interface AddAggregateCompliancePackResponse {
  /** 合规包Id */
  CompliancePackId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddAggregateConfigRuleRequest {
  /** 规则模板标识，预设规则模板为Identifier, 自定义规则为云函数arn（region:functionName） */
  Identifier: string;
  /** 规则模板类型，SYSTEM, CUSTOMIZE */
  IdentifierType: string;
  /** 规则名称 */
  RuleName: string;
  /** 规则支持的资源 */
  ResourceType: string[];
  /** 触发类型，最多支持两种 */
  TriggerType: TriggerType[];
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel: number;
  /** 账号组Id */
  AccountGroupId: string;
  /** 入参 */
  InputParameter?: InputParameter[];
  /** 描述 */
  Description?: string;
  /** 关联地域 */
  RegionScope?: string[];
  /** 关联标签 */
  TagsScope?: Tag[];
  /** 排除的资源ID */
  ExcludeResourceIdsScope?: string[];
}

declare interface AddAggregateConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCompliancePackRequest {
  /** 合规包规则 */
  ConfigRules: CompliancePackRule[];
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel: number;
  /** 合规包名称 */
  CompliancePackName: string;
  /** 描述 */
  Description?: string;
}

declare interface AddCompliancePackResponse {
  /** 合规包Id */
  CompliancePackId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddConfigRuleRequest {
  /** 规则模板标识，预设规则模板为Identifier, 自定义规则为云函数arn（region:functionName） */
  Identifier: string;
  /** 规则模板类型，SYSTEM, CUSTOMIZE */
  IdentifierType: string;
  /** 规则名称 */
  RuleName: string;
  /** 规则支持的资源 */
  ResourceType: string[];
  /** 触发类型，最多支持两种 */
  TriggerType: TriggerType[];
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel: number;
  /** 入参 */
  InputParameter?: InputParameter[];
  /** 规则描述。长度范围0~1024字符 */
  Description?: string;
  /** 规则评估地域范围，规则仅对指定地域中的资源生效。支持的地域范围config:ListResourceRegions返回的地域 */
  RegionsScope?: string[];
  /** 规则评估标签范围，规则仅对绑定指定标签的资源生效。 */
  TagsScope?: Tag[];
  /** 规则对指定资源ID无效，即不对该资源执行评估。 */
  ExcludeResourceIdsScope?: string[];
}

declare interface AddConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseAggregateConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
  /** 账号组Id */
  AccountGroupId: string;
}

declare interface CloseAggregateConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseConfigRecorderRequest {
}

declare interface CloseConfigRecorderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
}

declare interface CloseConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAggregatorRequest {
  /** 账号组名称 */
  Name: string;
  /** 账号组描述 */
  Description: string;
  /** 账号组类型 枚举值：RD： 全局账号组CUSTOM： 自定义账号组 */
  Type: string;
  /** 账号组成员信息列表，最多100个 */
  AggregatorAccounts?: AggregatorAccount[];
}

declare interface CreateAggregatorResponse {
  /** 账号组Id */
  AccountGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRemediationRequest {
  /** 规则 ID */
  RuleId: string;
  /** 修正类型取值： SCF：云函数（自定义修正）。 */
  RemediationType: string;
  /** 修正模板 ID */
  RemediationTemplateId: string;
  /** 修正执行方式。取值： MANUAL_EXECUTION：手动执行 */
  InvokeType: string;
  /** 执行修正的模板来源CUSTOM：自定义模板。 */
  SourceType?: string;
}

declare interface CreateRemediationResponse {
  /** 修正设置Id */
  RemediationId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAggregateCompliancePackRequest {
  /** 合规包ID */
  CompliancePackId: string;
  /** 账号组ID */
  AccountGroupId: string;
}

declare interface DeleteAggregateCompliancePackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAggregateConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
  /** 账号组ID */
  AccountGroupId: string;
}

declare interface DeleteAggregateConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCompliancePackRequest {
  /** 合规包ID */
  CompliancePackId: string;
}

declare interface DeleteCompliancePackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
}

declare interface DeleteConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRemediationsRequest {
  /** 修正设置ID */
  RemediationIds: string[];
}

declare interface DeleteRemediationsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAggregateCompliancePackRequest {
  /** 账号组ID */
  AccountGroupId: string;
  /** 合规包ID */
  CompliancePackId?: string;
}

declare interface DescribeAggregateCompliancePackResponse {
  /** 合规包名称 */
  CompliancePackName: string;
  /** 描述 */
  Description: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 风险等级 */
  RiskLevel: number;
  /** 合规包规则 */
  ConfigRules: ComplianceConfigRule[] | null;
  /** 合规包id */
  CompliancePackId: string;
  /** 合规包状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAggregateConfigDeliverRequest {
  /** 账号组ID */
  AccountGroupId: string;
}

declare interface DescribeAggregateConfigDeliverResponse {
  /** 投递名称 */
  DeliverName?: string | null;
  /** 资源六段式 */
  TargetArn?: string | null;
  /** 投递状态 DeliverStatus：0 关闭 1 开启 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 日志前缀 */
  DeliverPrefix?: string | null;
  /** 投递类型 */
  DeliverType?: string | null;
  /** 支持跨账号投递的成员账号uin，只能是委派管理员。默认为0，即投递到管理员账号下 */
  DeliverUin?: number | null;
  /** 1：配置变更 2： 资源列表 3：全部 */
  DeliverContentType?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAggregateConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
  /** 账号组 */
  AccountGroupId: string;
}

declare interface DescribeAggregateConfigRuleResponse {
  /** 规则详情 */
  ConfigRule?: ConfigRule;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAggregateDiscoveredResourceRequest {
  /** 资源ID */
  ResourceId: string;
  /** 资源类型 */
  ResourceType: string;
  /** 资源地域 */
  ResourceRegion: string;
  /** 账号组ID */
  AccountGroupId: string;
  /** 资源所属用户ID */
  ResourceOwnerId: number;
}

declare interface DescribeAggregateDiscoveredResourceResponse {
  /** 资源Id */
  ResourceId?: string;
  /** 资源类型 */
  ResourceType?: string;
  /** 资源名 */
  ResourceName?: string;
  /** 资源地域 */
  ResourceRegion?: string;
  /** 资源可用区 */
  ResourceZone?: string;
  /** 资源配置 */
  Configuration?: string;
  /** 资源创建时间 */
  ResourceCreateTime?: string;
  /** 资源标签 */
  Tags?: Tag[];
  /** 资源更新时间 */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAggregatorRequest {
  /** 账号组ID */
  AccountGroupId: string;
  /** 账号组创建者ID */
  OwnerUin: number;
}

declare interface DescribeAggregatorResponse {
  /** 账号组名称 */
  Name?: string;
  /** 账号组描述 */
  Description?: string;
  /** 账号组类型 */
  Type?: string;
  /** 成员信息 */
  AggregatorAccounts?: AggregatorAccount[] | null;
  /** 创建状态 */
  AggregatorStatus?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompliancePackRequest {
  /** 合规包ID */
  CompliancePackId?: string;
}

declare interface DescribeCompliancePackResponse {
  /** 合规包名称 */
  CompliancePackName: string;
  /** 描述 */
  Description: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 风险等级 */
  RiskLevel: number;
  /** 合规包规则 */
  ConfigRules: ComplianceConfigRule[] | null;
  /** 合规包id */
  CompliancePackId: string;
  /** 合规包状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigDeliverRequest {
}

declare interface DescribeConfigDeliverResponse {
  /** 投递名称 */
  DeliverName?: string | null;
  /** 资源六段式 */
  TargetArn?: string | null;
  /** 投递状态 DeliverStatus：0 关闭 1 开启 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 日志前缀 */
  DeliverPrefix?: string | null;
  /** 投递类型 */
  DeliverType?: string | null;
  /** 1：配置变更 2： 资源列表 3：全部 */
  DeliverContentType?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigRecorderRequest {
}

declare interface DescribeConfigRecorderResponse {
  /** 用户监控资源列表 */
  Items?: UserConfigResource[] | null;
  /** 0 关闭1 打开 */
  Status?: number;
  /** 当日快照次数 */
  TriggerCount?: number | null;
  /** 当日打开监控次数 */
  OpenCount?: number | null;
  /** 当日修改监控范围次数 */
  UpdateCount?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
}

declare interface DescribeConfigRuleResponse {
  /** 规则详情 */
  ConfigRule: ConfigRule;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiscoveredResourceRequest {
  /** 资源ID */
  ResourceId: string;
  /** 资源类型 */
  ResourceType: string;
  /** 资源地域 */
  ResourceRegion: string;
}

declare interface DescribeDiscoveredResourceResponse {
  /** 资源Id */
  ResourceId?: string;
  /** 资源类型 */
  ResourceType?: string;
  /** 资源名 */
  ResourceName?: string;
  /** 资源地域 */
  ResourceRegion?: string;
  /** 资源可用区 */
  ResourceZone?: string;
  /** 资源配置 */
  Configuration?: string;
  /** 资源创建时间 */
  ResourceCreateTime?: string;
  /** 资源标签 */
  Tags?: Tag[];
  /** 资源更新时间 */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSystemCompliancePackRequest {
  /** 合规包ID */
  CompliancePackId: string;
}

declare interface DescribeSystemCompliancePackResponse {
  /** 合规包ID */
  CompliancePackId?: string;
  /** 合规包名称 */
  CompliancePackName?: string;
  /** 合规包描述 */
  Description?: string;
  /** 风险等级 */
  RiskLevel?: number;
  /** 合规包规则列表 */
  ConfigRules?: CompliancePackRuleForManage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSystemRuleRequest {
  /** 规则唯一标识 */
  Identifier?: string;
}

declare interface DescribeSystemRuleResponse {
  /** 详情 */
  SystemConfigRule: SystemConfigRule;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachAggregateConfigRuleToCompliancePackRequest {
  /** 合规包ID */
  CompliancePackId: string;
  /** 规则ID */
  ConfigRuleId: string;
  /** 账号组ID */
  AccountGroupId: string;
}

declare interface DetachAggregateConfigRuleToCompliancePackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachConfigRuleToCompliancePackRequest {
  /** 合规包ID */
  CompliancePackId: string;
  /** 规则ID */
  ConfigRuleId: string;
}

declare interface DetachConfigRuleToCompliancePackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAggregateCompliancePacksRequest {
  /** 数量 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 账号组ID */
  AccountGroupId: string;
  /** 合规包名称 */
  CompliancePackName?: string;
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel?: number[];
  /** 合规包状态 ACTIVE、NO_ACTIVE */
  Status?: string;
  /** 评估状态合规： &#39;COMPLIANT&#39;不合规： &#39;NON_COMPLIANT&#39; */
  ComplianceResult?: string[];
  /** 排序类型, 倒序：desc，顺序：asc */
  OrderType?: string;
  /** 包含合规包结果定义枚举值：NO： 不包含默认值：空此字段为新增，因此不传或者传了YES都会默认返回包含合规结果数据，其他枚举值后面视情况丰富 */
  IncludeCompliancePackRuleResult?: string;
}

declare interface ListAggregateCompliancePacksResponse {
  /** 总数 */
  Total?: number;
  /** 详情 */
  Items?: ConfigCompliancePack[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAggregateConfigRuleEvaluationResultsRequest {
  /** 规则ID */
  ConfigRuleId: string;
  /** 偏移量 */
  Limit: number;
  /** 当前页 */
  Offset: number;
  /** 账号组ID */
  AccountGroupId: string;
  /** 类型 */
  ResourceType?: string[];
  /** 评估结果 COMPLIANT：合规 NON_COMPLIANT：不合规 */
  ComplianceType?: string[];
  /** 资源所属用户ID */
  ResourceOwnerId?: number;
  /** 筛选的资源拥有者uin集合 */
  ResourceOwnerIds?: number[];
}

declare interface ListAggregateConfigRuleEvaluationResultsResponse {
  /** 总数 */
  Total?: number;
  /** 详情 */
  Items?: AggregateEvaluationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAggregateConfigRulesRequest {
  /** 每页限制 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 账号组ID */
  AccountGroupId: string;
  /** 排序类型, 倒序：desc，顺序：asc */
  OrderType?: string;
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel?: number[];
  /** 规则状态 */
  State?: string;
  /** 评估结果 */
  ComplianceResult?: string[];
  /** 规则名 */
  RuleName?: string;
  /** 规则所属账号ID */
  RuleOwnerId?: number;
}

declare interface ListAggregateConfigRulesResponse {
  /** 总数 */
  Total?: number;
  /** 详情 */
  Items?: ConfigRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAggregateDiscoveredResourcesRequest {
  /** 每页显示数量 */
  MaxResults: number;
  /** 账号组ID */
  AccountGroupId: string;
  /** resourceName：资源名 resourceId ：资源ID resourceType：资源类型 */
  Filters?: Filter[];
  /** 标签 */
  Tags?: Tag[];
  /** 下一页token */
  NextToken?: string;
  /** 排序方式 asc、desc */
  OrderType?: string;
}

declare interface ListAggregateDiscoveredResourcesResponse {
  /** 详情 */
  Items?: AggregateResourceInfo[];
  /** 下一页 */
  NextToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAggregatorsRequest {
  /** 每页显示数量 */
  Limit: number;
  /** 起始 */
  Offset: number;
}

declare interface ListAggregatorsResponse {
  /** 总数 */
  Total?: number;
  /** 账号组列表 */
  Items?: Aggregator[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListCompliancePacksRequest {
  /** 数量 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 合规包名称 */
  CompliancePackName?: string;
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel?: number[];
  /** 合规包状态 ACTIVE、NO_ACTIVE */
  Status?: string;
  /** 评估状态合规： 'COMPLIANT'不合规： 'NON_COMPLIANT' */
  ComplianceResult?: string[];
  /** 排序类型, 倒序：desc，顺序：asc */
  OrderType?: string;
}

declare interface ListCompliancePacksResponse {
  /** 总数 */
  Total: number;
  /** 详情 */
  Items: ConfigCompliancePack[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConfigRuleEvaluationResultsRequest {
  /** 规则ID */
  ConfigRuleId: string;
  /** 偏移量 */
  Limit: number;
  /** 当前页 */
  Offset: number;
  /** 类型 */
  ResourceType?: string[];
  /** 评估结果 COMPLIANT：合规 NON_COMPLIANT：不合规 */
  ComplianceType?: string[];
}

declare interface ListConfigRuleEvaluationResultsResponse {
  /** 总数 */
  Total: number;
  /** 详情 */
  Items: EvaluationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConfigRulesRequest {
  /** 每页数量。取值范围：1~200 */
  Limit: number;
  /** 偏移量。取值范围：最小值为0 */
  Offset: number;
  /** 排序类型(规则名称)。倒序：desc，顺序：asc */
  OrderType?: string;
  /** 风险等级。1：高风险，2：中风险，3：低风险。 */
  RiskLevel?: number[];
  /** 规则状态。ACTIVE：启用UN_ACTIVE：停用 */
  State?: string;
  /** 评估结果。COMPLIANT：合规NON_COMPLIANT：不合规 */
  ComplianceResult?: string[];
  /** 规则名 */
  RuleName?: string;
}

declare interface ListConfigRulesResponse {
  /** 总数 */
  Total?: number;
  /** 详情 */
  Items?: ConfigRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDiscoveredResourcesRequest {
  /** 每页显示数量 */
  MaxResults: number;
  /** resourceName：资源名 resourceId ：资源ID */
  Filters?: Filter[];
  /** 标签 */
  Tags?: Tag[];
  /** 下一页token */
  NextToken?: string;
  /** 排序方式 asc、desc */
  OrderType?: string;
}

declare interface ListDiscoveredResourcesResponse {
  /** 详情 */
  Items?: ResourceListInfo[];
  /** 下一页 */
  NextToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRemediationExecutionsRequest {
  /** 规则 ID */
  RuleId: string;
  /** 分页条数。默认20， 取值1~200 */
  Limit?: number;
  /** 分页偏移量。 */
  Offset?: number;
  /** 修正状态 1：运行中 2：成功 3：失败 */
  ExecutionStatus?: number;
}

declare interface ListRemediationExecutionsResponse {
  /** 总数 */
  Total?: number;
  /** 修复记录 */
  RemediationExecutions?: RemediationExecutions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRemediationsRequest {
  /** 分页条数。默认20， 取值1~200 */
  Limit?: number;
  /** 规则ID */
  RuleIds?: string[];
}

declare interface ListRemediationsResponse {
  /** 总数 */
  Total?: number;
  /** 修正设置 */
  Remediations?: Remediation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListResourceTypesRequest {
}

declare interface ListResourceTypesResponse {
  /** 详情 */
  Items: ConfigResource[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSystemCompliancePacksRequest {
  /** 每页限制 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
}

declare interface ListSystemCompliancePacksResponse {
  /** 总数 */
  Total: number;
  /** 详情 */
  Items: SystemCompliancePack[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSystemRulesRequest {
  /** 每页数量 */
  Limit: number;
  /** 当前页 */
  Offset: number;
  /** 搜索关键字。支持标识/名称/标签/描述搜索 */
  Keyword?: string;
  /** 风险等级 */
  RiskLevel?: number;
}

declare interface ListSystemRulesResponse {
  /** 总数 */
  Total: number | null;
  /** 详情 */
  Items: SystemConfigRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenAggregateConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
  /** 账号组ID */
  AccountGroupId: string;
}

declare interface OpenAggregateConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenConfigRecorderRequest {
}

declare interface OpenConfigRecorderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenConfigRuleRequest {
  /** 规则ID */
  RuleId: string;
}

declare interface OpenConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PutEvaluationsRequest {
  /** 回调令牌。从自定义规则所选的scf云函数入参中取参数ResultToken值云函数入参说明 */
  ResultToken: string;
  /** 自定义规则评估结果信息。 */
  Evaluations: Evaluation[];
}

declare interface PutEvaluationsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartAggregateConfigRuleEvaluationRequest {
  /** 手动触发：MANUAL 周期触发：SCHEDULE */
  TriggerType: string;
  /** 账号组ID */
  AccountGroupId: string;
  /** 规则ID */
  RuleId?: string;
  /** 合规包ID */
  CompliancePackId?: string;
}

declare interface StartAggregateConfigRuleEvaluationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartConfigRuleEvaluationRequest {
  /** 规则ID */
  RuleId?: string;
  /** 合规包ID */
  CompliancePackId?: string;
}

declare interface StartConfigRuleEvaluationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartRemediationRequest {
  /** 规则 ID */
  RuleId: string;
}

declare interface StartRemediationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAggregateCompliancePackRequest {
  /** 合规包名称 */
  CompliancePackName: string;
  /** 风险等级 */
  RiskLevel: number;
  /** 合规包ID */
  CompliancePackId: string;
  /** 合规包规则 */
  ConfigRules: CompliancePackRule[];
  /** 账号组ID */
  AccountGroupId: string;
  /** 描述 */
  Description?: string;
}

declare interface UpdateAggregateCompliancePackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAggregateCompliancePackStatusRequest {
  /** 合规包ID */
  CompliancePackId: string;
  /** ACTIVE：启用UN_ACTIVE ：停用 */
  Status: string;
  /** 账号组ID */
  AccountGroupId: string;
}

declare interface UpdateAggregateCompliancePackStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAggregateConfigDeliverRequest {
  /** 0 关闭 1 开启 */
  Status: number;
  /** 账号组ID */
  AccountGroupId: string;
  /** 投递服务名称 */
  DeliverName?: string;
  /** 资源六段式 COS：qcs::cos:$region:$account:prefix/$appid/$BucketNameCLS:qcs::cls:$region:$account:cls/topicId */
  TargetArn?: string;
  /** 资源前缀 */
  DeliverPrefix?: string;
  /** 投递类型 COS CLS */
  DeliverType?: string;
  /** 支持跨账号投递的成员账号uin，只能是委派管理员。默认为0，即投递到管理员账号下 */
  DeliverUin?: number;
  /** 1：配置变更 2： 资源列表 3：全选 */
  DeliverContentType?: number;
}

declare interface UpdateAggregateConfigDeliverResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAggregateConfigRuleRequest {
  /** 触发类型，最多支持两种 */
  TriggerType: TriggerType[];
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel: number;
  /** 规则ID */
  RuleId: string;
  /** 账号组ID */
  AccountGroupId: string;
  /** 规则名称 */
  RuleName?: string;
  /** 入参 */
  InputParameter?: InputParameter[];
  /** 描述 */
  Description?: string;
  /** 关联地域 */
  RegionScope?: string[];
  /** 关联标签 */
  TagsScope?: Tag[];
  /** 排除的资源ID */
  ExcludeResourceIdsScope?: string[];
}

declare interface UpdateAggregateConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCompliancePackRequest {
  /** 合规包名称 */
  CompliancePackName: string;
  /** 风险等级 */
  RiskLevel: number;
  /** 合规包ID */
  CompliancePackId: string;
  /** 合规包规则 */
  ConfigRules: CompliancePackRule[];
  /** 描述 */
  Description?: string;
}

declare interface UpdateCompliancePackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCompliancePackStatusRequest {
  /** 合规包ID */
  CompliancePackId: string;
  /** ACTIVE：启用UN_ACTIVE ：停用 */
  Status: string;
}

declare interface UpdateCompliancePackStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConfigDeliverRequest {
  /** 0 关闭 1 开启 */
  Status: number;
  /** 投递服务名称 */
  DeliverName?: string;
  /** 资源六段式 COS：qcs::cos:$region:$account:prefix/$appid/$BucketNameCLS:qcs::cls:$region:$account:cls/topicId */
  TargetArn?: string;
  /** clonfig_fix */
  DeliverPrefix?: string;
  /** 投递类型 */
  DeliverType?: string;
  /** 1：配置变更 2： 资源列表 3：全选 */
  DeliverContentType?: number;
}

declare interface UpdateConfigDeliverResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConfigRecorderRequest {
  /** 资源类型列表 */
  ResourceTypes?: string[];
}

declare interface UpdateConfigRecorderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConfigRuleRequest {
  /** 触发类型，最多支持两种 */
  TriggerType: TriggerType[];
  /** 风险等级1：高风险。2：中风险。3：低风险。 */
  RiskLevel: number;
  /** 规则ID */
  RuleId: string;
  /** 规则名称 */
  RuleName?: string;
  /** 入参 */
  InputParameter?: InputParameter[];
  /** 描述 */
  Description?: string;
  /** 规则评估地域范围，规则仅对指定地域中的资源生效。支持的地域范围config:ListResourceRegions返回的地域 */
  RegionsScope?: string[];
  /** 规则评估标签范围，规则仅对绑定指定标签的资源生效。 */
  TagsScope?: Tag[];
  /** 规则对指定资源ID无效，即不对该资源执行评估。 */
  ExcludeResourceIdsScope?: string[];
}

declare interface UpdateConfigRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRemediationRequest {
  /** 修正设置 ID */
  RemediationId: string;
  /** 修正类型。取值： SCF：函数计算（自定义修正）。 */
  RemediationType?: string;
  /** 修正模板 ID */
  RemediationTemplateId?: string;
  /** 修正执行方式。取值： NON_EXECUTION：不执行。 AUTO_EXECUTION：自动执行。 MANUAL_EXECUTION：手动执行。 NOT_CONFIG：未设置。 */
  InvokeType?: string;
  /** 执行修正来源 */
  SourceType?: string;
}

declare interface UpdateRemediationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Config 配置审计} */
declare interface Config {
  (): Versions;
  /** 账号组新建合规包 {@link AddAggregateCompliancePackRequest} {@link AddAggregateCompliancePackResponse} */
  AddAggregateCompliancePack(data: AddAggregateCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<AddAggregateCompliancePackResponse>;
  /** 账号组新建规则 {@link AddAggregateConfigRuleRequest} {@link AddAggregateConfigRuleResponse} */
  AddAggregateConfigRule(data: AddAggregateConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddAggregateConfigRuleResponse>;
  /** 新建合规包 {@link AddCompliancePackRequest} {@link AddCompliancePackResponse} */
  AddCompliancePack(data: AddCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<AddCompliancePackResponse>;
  /** 新建规则 {@link AddConfigRuleRequest} {@link AddConfigRuleResponse} */
  AddConfigRule(data: AddConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddConfigRuleResponse>;
  /** 账号组关闭规则 {@link CloseAggregateConfigRuleRequest} {@link CloseAggregateConfigRuleResponse} */
  CloseAggregateConfigRule(data: CloseAggregateConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CloseAggregateConfigRuleResponse>;
  /** 关闭监控 {@link CloseConfigRecorderRequest} {@link CloseConfigRecorderResponse} */
  CloseConfigRecorder(data?: CloseConfigRecorderRequest, config?: AxiosRequestConfig): AxiosPromise<CloseConfigRecorderResponse>;
  /** 关闭规则 {@link CloseConfigRuleRequest} {@link CloseConfigRuleResponse} */
  CloseConfigRule(data: CloseConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CloseConfigRuleResponse>;
  /** 新建账号组 {@link CreateAggregatorRequest} {@link CreateAggregatorResponse} */
  CreateAggregator(data: CreateAggregatorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAggregatorResponse>;
  /** 新建修正设置 {@link CreateRemediationRequest} {@link CreateRemediationResponse} */
  CreateRemediation(data: CreateRemediationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRemediationResponse>;
  /** 账号组删除合规包 {@link DeleteAggregateCompliancePackRequest} {@link DeleteAggregateCompliancePackResponse} */
  DeleteAggregateCompliancePack(data: DeleteAggregateCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAggregateCompliancePackResponse>;
  /** 账号组删除规则 {@link DeleteAggregateConfigRuleRequest} {@link DeleteAggregateConfigRuleResponse} */
  DeleteAggregateConfigRule(data: DeleteAggregateConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAggregateConfigRuleResponse>;
  /** 删除合规包 {@link DeleteCompliancePackRequest} {@link DeleteCompliancePackResponse} */
  DeleteCompliancePack(data: DeleteCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompliancePackResponse>;
  /** 删除规则 {@link DeleteConfigRuleRequest} {@link DeleteConfigRuleResponse} */
  DeleteConfigRule(data: DeleteConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigRuleResponse>;
  /** 删除修正设置 {@link DeleteRemediationsRequest} {@link DeleteRemediationsResponse} */
  DeleteRemediations(data: DeleteRemediationsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRemediationsResponse>;
  /** 账号组合规包详情 {@link DescribeAggregateCompliancePackRequest} {@link DescribeAggregateCompliancePackResponse} */
  DescribeAggregateCompliancePack(data: DescribeAggregateCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAggregateCompliancePackResponse>;
  /** 账号组获取投递设置详情 {@link DescribeAggregateConfigDeliverRequest} {@link DescribeAggregateConfigDeliverResponse} */
  DescribeAggregateConfigDeliver(data: DescribeAggregateConfigDeliverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAggregateConfigDeliverResponse>;
  /** 账号组获取规则详情 {@link DescribeAggregateConfigRuleRequest} {@link DescribeAggregateConfigRuleResponse} */
  DescribeAggregateConfigRule(data: DescribeAggregateConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAggregateConfigRuleResponse>;
  /** 账号组资源详情 {@link DescribeAggregateDiscoveredResourceRequest} {@link DescribeAggregateDiscoveredResourceResponse} */
  DescribeAggregateDiscoveredResource(data: DescribeAggregateDiscoveredResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAggregateDiscoveredResourceResponse>;
  /** 账号组详情 {@link DescribeAggregatorRequest} {@link DescribeAggregatorResponse} */
  DescribeAggregator(data: DescribeAggregatorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAggregatorResponse>;
  /** 合规包详情 {@link DescribeCompliancePackRequest} {@link DescribeCompliancePackResponse} */
  DescribeCompliancePack(data?: DescribeCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePackResponse>;
  /** 获取投递设置详情 {@link DescribeConfigDeliverRequest} {@link DescribeConfigDeliverResponse} */
  DescribeConfigDeliver(data?: DescribeConfigDeliverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigDeliverResponse>;
  /** 获取监控详情 {@link DescribeConfigRecorderRequest} {@link DescribeConfigRecorderResponse} */
  DescribeConfigRecorder(data?: DescribeConfigRecorderRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigRecorderResponse>;
  /** 获取规则详情 {@link DescribeConfigRuleRequest} {@link DescribeConfigRuleResponse} */
  DescribeConfigRule(data: DescribeConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigRuleResponse>;
  /** 资源详情 {@link DescribeDiscoveredResourceRequest} {@link DescribeDiscoveredResourceResponse} */
  DescribeDiscoveredResource(data: DescribeDiscoveredResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiscoveredResourceResponse>;
  /** 获取系统合规包详情 {@link DescribeSystemCompliancePackRequest} {@link DescribeSystemCompliancePackResponse} */
  DescribeSystemCompliancePack(data: DescribeSystemCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemCompliancePackResponse>;
  /** 预设规则详情 {@link DescribeSystemRuleRequest} {@link DescribeSystemRuleResponse} */
  DescribeSystemRule(data?: DescribeSystemRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemRuleResponse>;
  /** 账号组合规包移除规则 {@link DetachAggregateConfigRuleToCompliancePackRequest} {@link DetachAggregateConfigRuleToCompliancePackResponse} */
  DetachAggregateConfigRuleToCompliancePack(data: DetachAggregateConfigRuleToCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<DetachAggregateConfigRuleToCompliancePackResponse>;
  /** 合规包移除规则 {@link DetachConfigRuleToCompliancePackRequest} {@link DetachConfigRuleToCompliancePackResponse} */
  DetachConfigRuleToCompliancePack(data: DetachConfigRuleToCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<DetachConfigRuleToCompliancePackResponse>;
  /** 账号组获取合规包列表 {@link ListAggregateCompliancePacksRequest} {@link ListAggregateCompliancePacksResponse} */
  ListAggregateCompliancePacks(data: ListAggregateCompliancePacksRequest, config?: AxiosRequestConfig): AxiosPromise<ListAggregateCompliancePacksResponse>;
  /** 账号组获取评估结果（规则维度） {@link ListAggregateConfigRuleEvaluationResultsRequest} {@link ListAggregateConfigRuleEvaluationResultsResponse} */
  ListAggregateConfigRuleEvaluationResults(data: ListAggregateConfigRuleEvaluationResultsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAggregateConfigRuleEvaluationResultsResponse>;
  /** 账号组获取规则列表 {@link ListAggregateConfigRulesRequest} {@link ListAggregateConfigRulesResponse} */
  ListAggregateConfigRules(data: ListAggregateConfigRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAggregateConfigRulesResponse>;
  /** 账号组获取资源列表 {@link ListAggregateDiscoveredResourcesRequest} {@link ListAggregateDiscoveredResourcesResponse} */
  ListAggregateDiscoveredResources(data: ListAggregateDiscoveredResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAggregateDiscoveredResourcesResponse>;
  /** 账号组列表 {@link ListAggregatorsRequest} {@link ListAggregatorsResponse} */
  ListAggregators(data: ListAggregatorsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAggregatorsResponse>;
  /** 获取合规包列表 {@link ListCompliancePacksRequest} {@link ListCompliancePacksResponse} */
  ListCompliancePacks(data: ListCompliancePacksRequest, config?: AxiosRequestConfig): AxiosPromise<ListCompliancePacksResponse>;
  /** 获取评估结果（规则维度） {@link ListConfigRuleEvaluationResultsRequest} {@link ListConfigRuleEvaluationResultsResponse} */
  ListConfigRuleEvaluationResults(data: ListConfigRuleEvaluationResultsRequest, config?: AxiosRequestConfig): AxiosPromise<ListConfigRuleEvaluationResultsResponse>;
  /** 获取规则列表 {@link ListConfigRulesRequest} {@link ListConfigRulesResponse} */
  ListConfigRules(data: ListConfigRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ListConfigRulesResponse>;
  /** 获取资源列表 {@link ListDiscoveredResourcesRequest} {@link ListDiscoveredResourcesResponse} */
  ListDiscoveredResources(data: ListDiscoveredResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDiscoveredResourcesResponse>;
  /** 查询修正执行记录 {@link ListRemediationExecutionsRequest} {@link ListRemediationExecutionsResponse} */
  ListRemediationExecutions(data: ListRemediationExecutionsRequest, config?: AxiosRequestConfig): AxiosPromise<ListRemediationExecutionsResponse>;
  /** 修正设置列表 {@link ListRemediationsRequest} {@link ListRemediationsResponse} */
  ListRemediations(data?: ListRemediationsRequest, config?: AxiosRequestConfig): AxiosPromise<ListRemediationsResponse>;
  /** 获取资源类型列表 {@link ListResourceTypesRequest} {@link ListResourceTypesResponse} */
  ListResourceTypes(data?: ListResourceTypesRequest, config?: AxiosRequestConfig): AxiosPromise<ListResourceTypesResponse>;
  /** 获取系统合规包列表 {@link ListSystemCompliancePacksRequest} {@link ListSystemCompliancePacksResponse} */
  ListSystemCompliancePacks(data: ListSystemCompliancePacksRequest, config?: AxiosRequestConfig): AxiosPromise<ListSystemCompliancePacksResponse>;
  /** 获取预设规则列表 {@link ListSystemRulesRequest} {@link ListSystemRulesResponse} */
  ListSystemRules(data: ListSystemRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ListSystemRulesResponse>;
  /** 账号组开启规则 {@link OpenAggregateConfigRuleRequest} {@link OpenAggregateConfigRuleResponse} */
  OpenAggregateConfigRule(data: OpenAggregateConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<OpenAggregateConfigRuleResponse>;
  /** 开启监控 {@link OpenConfigRecorderRequest} {@link OpenConfigRecorderResponse} */
  OpenConfigRecorder(data?: OpenConfigRecorderRequest, config?: AxiosRequestConfig): AxiosPromise<OpenConfigRecorderResponse>;
  /** 开启规则 {@link OpenConfigRuleRequest} {@link OpenConfigRuleResponse} */
  OpenConfigRule(data: OpenConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<OpenConfigRuleResponse>;
  /** 上报自定义规则评估结果 {@link PutEvaluationsRequest} {@link PutEvaluationsResponse} */
  PutEvaluations(data: PutEvaluationsRequest, config?: AxiosRequestConfig): AxiosPromise<PutEvaluationsResponse>;
  /** 账号组触发评估 {@link StartAggregateConfigRuleEvaluationRequest} {@link StartAggregateConfigRuleEvaluationResponse} */
  StartAggregateConfigRuleEvaluation(data: StartAggregateConfigRuleEvaluationRequest, config?: AxiosRequestConfig): AxiosPromise<StartAggregateConfigRuleEvaluationResponse>;
  /** 触发评估 {@link StartConfigRuleEvaluationRequest} {@link StartConfigRuleEvaluationResponse} */
  StartConfigRuleEvaluation(data?: StartConfigRuleEvaluationRequest, config?: AxiosRequestConfig): AxiosPromise<StartConfigRuleEvaluationResponse>;
  /** 手动执行修正 {@link StartRemediationRequest} {@link StartRemediationResponse} */
  StartRemediation(data: StartRemediationRequest, config?: AxiosRequestConfig): AxiosPromise<StartRemediationResponse>;
  /** 账号组编辑合规包 {@link UpdateAggregateCompliancePackRequest} {@link UpdateAggregateCompliancePackResponse} */
  UpdateAggregateCompliancePack(data: UpdateAggregateCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAggregateCompliancePackResponse>;
  /** 账号组修改合规包状态 {@link UpdateAggregateCompliancePackStatusRequest} {@link UpdateAggregateCompliancePackStatusResponse} */
  UpdateAggregateCompliancePackStatus(data: UpdateAggregateCompliancePackStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAggregateCompliancePackStatusResponse>;
  /** 账号组编辑投递设置 {@link UpdateAggregateConfigDeliverRequest} {@link UpdateAggregateConfigDeliverResponse} */
  UpdateAggregateConfigDeliver(data: UpdateAggregateConfigDeliverRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAggregateConfigDeliverResponse>;
  /** 账号组编辑规则 {@link UpdateAggregateConfigRuleRequest} {@link UpdateAggregateConfigRuleResponse} */
  UpdateAggregateConfigRule(data: UpdateAggregateConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAggregateConfigRuleResponse>;
  /** 编辑合规包 {@link UpdateCompliancePackRequest} {@link UpdateCompliancePackResponse} */
  UpdateCompliancePack(data: UpdateCompliancePackRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCompliancePackResponse>;
  /** 修改合规包状态 {@link UpdateCompliancePackStatusRequest} {@link UpdateCompliancePackStatusResponse} */
  UpdateCompliancePackStatus(data: UpdateCompliancePackStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCompliancePackStatusResponse>;
  /** 编辑投递设置 {@link UpdateConfigDeliverRequest} {@link UpdateConfigDeliverResponse} */
  UpdateConfigDeliver(data: UpdateConfigDeliverRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConfigDeliverResponse>;
  /** 编辑监控范围 {@link UpdateConfigRecorderRequest} {@link UpdateConfigRecorderResponse} */
  UpdateConfigRecorder(data?: UpdateConfigRecorderRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConfigRecorderResponse>;
  /** 编辑规则 {@link UpdateConfigRuleRequest} {@link UpdateConfigRuleResponse} */
  UpdateConfigRule(data: UpdateConfigRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConfigRuleResponse>;
  /** 编辑修正设置 {@link UpdateRemediationRequest} {@link UpdateRemediationResponse} */
  UpdateRemediation(data: UpdateRemediationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRemediationResponse>;
}

export declare type Versions = ["2022-08-02"];

export default Config;
