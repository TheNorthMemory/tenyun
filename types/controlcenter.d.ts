/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号工厂基线项 */
declare interface AccountFactoryItem {
  /** 账号工厂基线项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 基线项名称，功能项名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。 */
  Name?: string;
  /** 基线项英文名称，基线项名字唯一，仅支持英文字母、数字、空格、符号@、＆_[]-的组合，1-64个英文字符。 */
  NameEn?: string;
  /** 基线项权重，数值小权重越高，取值范围大于等于0。 */
  Weight?: number;
  /** 基线项是否必填，1必填，0非必填 */
  Required?: number;
  /** 基线项依赖项，N的取值范围与该基线项依赖的其它基线项个数有关。 */
  DependsOn?: DependsOnItem[];
  /** 基线描述，长度为2~256个英文或中文字符，默认值为空。 */
  Description?: string;
  /** 基线项英文描述，长度为2~1024个英文字符，默认值为空。 */
  DescriptionEn?: string;
  /** 基线分类，长度为2~32个英文或中文字符，不能为空。 */
  Classify?: string;
  /** 基线英文分类，长度为2~64个英文字符，不能为空。 */
  ClassifyEn?: string;
}

/** 账号工厂基线配置项 */
declare interface BaselineConfigItem {
  /** 账号工厂基线项唯一标识,只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 账号工厂基线项配置，不同基线项配置参数不同。 */
  Configuration?: string;
}

/** 账号工厂基线信息 */
declare interface BaselineInfoItem {
  /** 账号工厂基线项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 账号工厂基线项配置，不同的基线项配置参数不同。 */
  Configuration?: string;
  /** 基线应用的账号数量。 */
  ApplyCount?: number;
}

/** 基线项部署任务信息列表 */
declare interface BaselineStepTaskInfo {
  /** 任务唯一Id，只能包含英文字母、数字，是16个字符的随机字符串。 */
  TaskId?: string;
  /** 基线功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 被应用基线项的成员账号uin */
  MemberUin?: number;
  /** 基线项应用的状态,Running表示基线项应用中,Success表示基线项应用成功,Failed表示基线项应用失败,Pending表示基线项待应用,Skipped表示基线项被跳过 */
  Status?: string;
  /** 错误码 */
  ErrCode?: string;
  /** 错误信息 */
  ErrMessage?: string;
  /** 基线项部署输出 */
  Output?: string;
  /** 创建时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  CreateTime?: string;
  /** 更新时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  UpdateTime?: string;
}

/** 依赖项 */
declare interface DependsOnItem {
  /** 依赖项类型，只有LandingZoneSetUp或AccountFactorySetUp。LandingZoneSetUp表示landingZone的依赖项；AccountFactorySetUp表示账号工厂的依赖项 */
  Type?: string;
  /** 功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
}

declare interface BatchApplyAccountBaselinesRequest {
  /** 成员账号uin，也是被应用基线的账号uin。 */
  MemberUinList: number[];
  /** 基线项配置信息列表。 */
  BaselineConfigItems: BaselineConfigItem[];
}

declare interface BatchApplyAccountBaselinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAccountFactoryBaselineRequest {
}

declare interface GetAccountFactoryBaselineResponse {
  /** 资源所属主账号uin。 */
  OwnerUin?: number;
  /** 基线项名称，基线项名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。 */
  Name?: string;
  /** 基线项配置列表。 */
  BaselineConfigItems?: BaselineInfoItem[];
  /** 创建时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  CreateTime?: string;
  /** 更新时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAccountFactoryBaselineItemsRequest {
  /** 返回记录最大数目,取值范围0~200。 */
  Limit: number;
  /** 偏移量，取值范围大于等于0。 */
  Offset: number;
}

declare interface ListAccountFactoryBaselineItemsResponse {
  /** 账号工厂基线列表。 */
  BaselineItems?: AccountFactoryItem[];
  /** 总数。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDeployStepTasksRequest {
  /** 功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier: string;
  /** 返回记录最大数目,取值范围0~200。 */
  Limit: number;
  /** 偏移量，取值范围大于等于0。 */
  Offset: number;
}

declare interface ListDeployStepTasksResponse {
  /** 账号工厂基线功能项应用信息列表。 */
  BaselineDeployStepTaskList?: BaselineStepTaskInfo[];
  /** 总数。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAccountFactoryBaselineRequest {
  /** 基线名称，基线名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。 */
  Name: string;
  /** 基线配置，覆盖更新。可以通过controlcenter:GetAccountFactoryBaseline查询现有基线配置。可以通过controlcenter:ListAccountFactoryBaselineItems查询支持的基线列表。 */
  BaselineConfigItems?: BaselineConfigItem[];
}

declare interface UpdateAccountFactoryBaselineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Controlcenter 控制中心} */
declare interface Controlcenter {
  (): Versions;
  /** 批量对存量账号应用基线 {@link BatchApplyAccountBaselinesRequest} {@link BatchApplyAccountBaselinesResponse} */
  BatchApplyAccountBaselines(data: BatchApplyAccountBaselinesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchApplyAccountBaselinesResponse>;
  /** 获取用户基线配置数据 {@link GetAccountFactoryBaselineRequest} {@link GetAccountFactoryBaselineResponse} */
  GetAccountFactoryBaseline(data?: GetAccountFactoryBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<GetAccountFactoryBaselineResponse>;
  /** 获取账号工厂系统基线项 {@link ListAccountFactoryBaselineItemsRequest} {@link ListAccountFactoryBaselineItemsResponse} */
  ListAccountFactoryBaselineItems(data: ListAccountFactoryBaselineItemsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAccountFactoryBaselineItemsResponse>;
  /** 获取某个基线项历史应用信息 {@link ListDeployStepTasksRequest} {@link ListDeployStepTasksResponse} */
  ListDeployStepTasks(data: ListDeployStepTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListDeployStepTasksResponse>;
  /** 更新用户基线项配置 {@link UpdateAccountFactoryBaselineRequest} {@link UpdateAccountFactoryBaselineResponse} */
  UpdateAccountFactoryBaseline(data: UpdateAccountFactoryBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccountFactoryBaselineResponse>;
}

export declare type Versions = ["2023-01-10"];

export default Controlcenter;
