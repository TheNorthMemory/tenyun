/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 合规详情 */
declare interface Annotation {
  /** 资源当前实际配置。长度为0~256位字符，即资源不合规配置 */
  Configuration: string | null;
  /** 资源期望配置。长度为0~256位字符，即资源合规配置 */
  DesiredValue: string | null;
  /** 资源当前配置和期望配置之间的比较运算符。长度为0~16位字符，自定义规则上报评估结果此字段可能为空 */
  Operator?: string;
  /** 当前配置在资源属性结构体中的JSON路径。长度为0~256位字符，自定义规则上报评估结果此字段可能为空 */
  Property?: string;
}

/** 规则详情 */
declare interface ConfigRule {
  /** 规则标识 */
  Identifier?: string | null;
  /** 规则名 */
  RuleName?: string | null;
  /** 规则参数 */
  InputParameter?: InputParameter[] | null;
  /** 规则触发条件 */
  SourceCondition?: SourceConditionForManage[] | null;
  /** 规则支持的资源类型，规则仅对指定资源类型的资源生效。 */
  ResourceType?: string[] | null;
  /** 规则所属标签 */
  Labels?: string[] | null;
  /** 规则风险等级1:低风险2:中风险3:高风险 */
  RiskLevel?: number | null;
  /** 规则对应的函数 */
  ServiceFunction?: string | null;
  /** 创建时间格式：YYYY-MM-DD h:i:s */
  CreateTime?: string | null;
  /** 规则描述 */
  Description?: string | null;
  /** ACTIVE：启用NO_ACTIVE：停止 */
  Status?: string | null;
  /** 合规： 'COMPLIANT'不合规： 'NON_COMPLIANT'无法应用规则： 'NOT_APPLICABLE' */
  ComplianceResult?: string | null;
  /** ["",""] */
  Annotation?: Annotation | null;
  /** 规则评估时间格式：YYYY-MM-DD h:i:s */
  ConfigRuleInvokedTime?: string | null;
  /** 规则ID */
  ConfigRuleId?: string | null;
  /** CUSTOMIZE：自定义规则、SYSTEM：托管规则 */
  IdentifierType?: string | null;
  /** 合规包ID */
  CompliancePackId?: string | null;
  /** 触发类型ScheduledNotification：周期触发、ConfigurationItemChangeNotification：变更触发 */
  TriggerType?: TriggerType[] | null;
  /** 参数详情 */
  ManageInputParameter?: InputParameterForManage[] | null;
  /** 合规包名称 */
  CompliancePackName?: string | null;
  /** 关联地域 */
  RegionsScope?: string[] | null;
  /** 关联标签 */
  TagsScope?: Tag[] | null;
  /** 规则对指定资源ID无效，即不对该资源执行评估。 */
  ExcludeResourceIdsScope?: string[] | null;
  /** 账号组ID */
  AccountGroupId?: string | null;
  /** 账号组名称 */
  AccountGroupName?: string | null;
  /** 规则所属用户ID */
  RuleOwnerId?: number | null;
  /** 预设规则支持的触发方式ScheduledNotification：周期触发ConfigurationItemChangeNotification：变更触发 */
  ManageTriggerType?: string[];
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
  Value?: string | null;
}

/** 规则入参 */
declare interface InputParameterForManage {
  /** 值类型。数值：Integer， 字符串：String */
  ValueType?: string | null;
  /** 参数Key */
  ParameterKey?: string | null;
  /** 参数类型。必填类型：Require，可选类型：Optional。 */
  Type?: string | null;
  /** 默认值 */
  DefaultValue?: string | null;
  /** 描述 */
  Description?: string | null;
}

/** 资源列列表信息 */
declare interface ResourceListInfo {
  /** 资源类型 */
  ResourceType: string;
  /** 资源名称 */
  ResourceName: string;
  /** 资源ID */
  ResourceId: string;
  /** 地域 */
  ResourceRegion: string | null;
  /** 资源状态 */
  ResourceStatus: string | null;
  /** 1 :已删除 2：未删除 */
  ResourceDelete: number | null;
  /** 资源创建时间 */
  ResourceCreateTime: string | null;
  /** 标签信息 */
  Tags: Tag[] | null;
  /** 可用区 */
  ResourceZone: string | null;
  /** 合规状态 */
  ComplianceResult: string | null;
}

/** 管理端规则条件 */
declare interface SourceConditionForManage {
  /** 条件为空，合规：COMPLIANT，不合规：NON_COMPLIANT，无法应用：NOT_APPLICABLE */
  EmptyAs?: string | null;
  /** 配置路径 */
  SelectPath?: string | null;
  /** 操作运算符 */
  Operator?: string | null;
  /** 是否必须 */
  Required?: boolean | null;
  /** 期望值 */
  DesiredValue?: string | null;
}

/** 标签 */
declare interface Tag {
  /** 标签key */
  TagKey?: string | null;
  /** 标签value */
  TagValue?: string | null;
}

/** 规则支持触发类型 */
declare interface TriggerType {
  /** 触发类型 */
  MessageType: string;
  /** 触发时间周期 */
  MaximumExecutionFrequency?: string | null;
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
  ResourceId?: string | null;
  /** 资源类型 */
  ResourceType?: string | null;
  /** 资源名 */
  ResourceName?: string | null;
  /** 资源地域 */
  ResourceRegion?: string | null;
  /** 资源可用区 */
  ResourceZone?: string | null;
  /** 资源配置 */
  Configuration?: string | null;
  /** 资源创建时间 */
  ResourceCreateTime?: string | null;
  /** 资源标签 */
  Tags?: Tag[] | null;
  /** 资源更新时间 */
  UpdateTime?: string | null;
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

/** {@link Config 配置审计} */
declare interface Config {
  (): Versions;
  /** 资源详情 {@link DescribeDiscoveredResourceRequest} {@link DescribeDiscoveredResourceResponse} */
  DescribeDiscoveredResource(data: DescribeDiscoveredResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiscoveredResourceResponse>;
  /** 账号组获取规则列表 {@link ListAggregateConfigRulesRequest} {@link ListAggregateConfigRulesResponse} */
  ListAggregateConfigRules(data: ListAggregateConfigRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAggregateConfigRulesResponse>;
  /** 获取规则列表 {@link ListConfigRulesRequest} {@link ListConfigRulesResponse} */
  ListConfigRules(data: ListConfigRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ListConfigRulesResponse>;
  /** 获取资源列表 {@link ListDiscoveredResourcesRequest} {@link ListDiscoveredResourcesResponse} */
  ListDiscoveredResources(data: ListDiscoveredResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDiscoveredResourcesResponse>;
  /** 上报自定义规则评估结果 {@link PutEvaluationsRequest} {@link PutEvaluationsResponse} */
  PutEvaluations(data: PutEvaluationsRequest, config?: AxiosRequestConfig): AxiosPromise<PutEvaluationsResponse>;
}

export declare type Versions = ["2022-08-02"];

export default Config;
