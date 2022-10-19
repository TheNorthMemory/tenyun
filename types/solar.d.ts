/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 活动详情 */
declare interface ActivityInfo {
  /** 活动使用模板id */
  TemplateId: string | null;
  /** 活动标题 */
  ActivityTitle: string | null;
  /** 活动描述 */
  ActivityDesc: string | null;
  /** 活动封面地址 */
  ActivityCover: string | null;
  /** 活动类型 */
  ActivityType: string | null;
  /** 活动id */
  ActivityId: string | null;
  /** 活动模板自定义配置 */
  PersonalConfig: string | null;
}

/** 客户档案 */
declare interface CustomerInfo {
  /** 总活跃度 */
  Activity: number | null;
  /** 客户ID */
  AudienceUserId: string;
  /** 头像 */
  Avatar: string | null;
  /** 最近记录城市 */
  City: string | null;
  /** 最活跃时间 */
  LastActiveTime: string | null;
  /** 是否星标客户 */
  MarkFlag: string | null;
  /** 30天活跃度 */
  MonthActive: number | null;
  /** 30天推荐度 */
  MonthRecommend: number | null;
  /** 手机号 */
  Phone: string | null;
  /** 最近记录省份 */
  Province: string | null;
  /** 姓名 */
  RealName: string | null;
  /** 员工标识 0 未关联 1 已关联 */
  RelChannelFlag: number | null;
  /** 性别 1男 2女 */
  Sex: number | null;
  /** 传播力（好友数） */
  Spread: number | null;
  /** 7天活跃度 */
  WeekActive: number | null;
  /** 7天推荐度 */
  WeekRecommend: number | null;
  /** 微信城市 */
  WxCity: string | null;
  /** 微信国家或地区 */
  WxCountry: string | null;
  /** 微信呢称 */
  WxNickname: string | null;
  /** 微信省份 */
  WxProvince: string | null;
}

/** 可见范围过滤参数 */
declare interface Filters {
  /** 过滤类型, 0: 默认(可见部门+自创) 1: 自创 2: 指定部门(部门在可见范围内) */
  Type?: number;
  /** 指定部门Id, 类型2使用 */
  DeptIds?: string[];
  /** 用户Id列表 */
  UserIds?: string[];
}

/** 内容页结构 */
declare interface ProductInfo {
  /** 模板id */
  TemplateId: string | null;
  /** 模板主题 */
  ProductTitle: string | null;
  /** 模板描述 */
  ProductDesc: string | null;
  /** 模板封面地址 */
  ProductCover: string | null;
  /** 内容作品id */
  ProductId: string | null;
  /** 作品预览链接 */
  ProductUrl: string | null;
  /** 作品名称 */
  ProductName: string | null;
}

/** 项目基础信息 */
declare interface ProjectInfo {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 项目所属机构 */
  ProjectOrg: string;
  /** 项目预算 */
  ProjectBudget: number;
  /** 项目状态 */
  ProjectStatus: string;
  /** 项目创建时间 */
  CreateTime: string;
  /** 项目简介 */
  ProjectIntroduction: string;
  /** 项目所属机构Id */
  ProjectOrgId: string | null;
}

/** 项目奖品库存 */
declare interface ProjectStock {
  /** 奖品id */
  PrizeId: string;
  /** 奖品批次 */
  PrizeBat: number;
  /** 奖品名称 */
  PrizeName: string;
  /** 已分配奖品数量 */
  UsedStock: number;
  /** 该奖品剩余库存数量 */
  RemainStock: number;
  /** 奖品所在奖池index */
  PoolIdx: number;
  /** 奖品所在奖池名称 */
  PoolName: string;
}

/** 素材模板消息标题的样例列表 */
declare interface ResourceTemplateHeader {
  /** 模板预览区内容 */
  Content: string | null;
  /** 模板预览示例 */
  Example: string | null;
  /** 模板预览区域键数组 */
  KeyArray: string | null;
  /** 模板id */
  TemplateId: string;
  /** 模板标题 */
  Title: string | null;
}

/** 子项目信息 */
declare interface SubProjectInfo {
  /** 子项目id */
  SubProjectId: string;
  /** 子项目名称 */
  SubProjectName: string;
  /** 子项目状态 */
  SubProjectStatus: string;
}

declare interface CheckStaffChUserRequest {
  /** 员工ID */
  UserId: string[];
  /** 渠道状态：checkpass审核通过, checkreject审核拒绝, enableoperate启用, stopoperate停用 */
  OperateType: string;
}

declare interface CheckStaffChUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CopyActivityChannelRequest {
  /** 活动ID */
  ActivityId: string;
  /** 来源渠道ID */
  ChannelFrom: string;
  /** 目的渠道id */
  ChannelTo: string[];
}

declare interface CopyActivityChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** 项目名称 */
  ProjectName: string;
  /** 项目机构 */
  ProjectOrg: string;
  /** 项目预算 */
  ProjectBudget: string;
  /** 项目简介 */
  ProjectIntroduction: string;
  /** 所属部门ID */
  ProjectOrgId?: string;
}

declare interface CreateProjectResponse {
  /** 项目ID */
  ProjectId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSubProjectRequest {
  /** 所属项目id */
  ProjectId: string;
  /** 子项目名称 */
  SubProjectName: string;
}

declare interface CreateSubProjectResponse {
  /** 子项目id */
  SubProjectId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface DeleteProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomerRequest {
  /** 用户ID */
  UserId: string;
}

declare interface DescribeCustomerResponse {
  /** 地址列表 */
  AddressList?: string[] | null;
  /** 用户id */
  UserId?: string | null;
  /** 头像 */
  Avatar?: string | null;
  /** 生日 */
  Birthday?: string | null;
  /** 城市 */
  City?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 设备 */
  Device?: string | null;
  /** 行业 */
  Industrys?: string[] | null;
  /** 上次登录时间 */
  LastActiveTime?: string | null;
  /** 是否星标 1是 0否 */
  MarkFlag?: string | null;
  /** 手机型号 */
  Model?: string | null;
  /** 微信openid */
  OpenId?: string | null;
  /** 消费特点 */
  PayFeature?: string | null;
  /** 手机号 */
  Phone?: string | null;
  /** 手机号码列表 */
  PhoneList?: string | null;
  /** 最近记录省份 */
  Province?: string | null;
  /** 姓名 */
  RealName?: string | null;
  /** 员工标识 0：非员工 1：员工 */
  RelChannelFlag?: string | null;
  /** 备注 */
  Remark?: string | null;
  /** 性别 1男 2女 */
  Sex?: string | null;
  /** 最初来源 */
  SourceAudienceVo?: string | null;
  /** 关注公众号列表 */
  SubWechats?: string[] | null;
  /** 微信unionid */
  UnionId?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 用户类型 */
  UserTypes?: string[] | null;
  /** 城市 */
  WxCity?: string | null;
  /** 国家 */
  WxCountry?: string | null;
  /** 昵称 */
  WxNickname?: string | null;
  /** 省份 */
  WxProvince?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomersRequest {
  /** 查询类型，0.个人，1负责部门，2.指定部门 */
  QueryType: string;
  /** 分组ID */
  GroupId?: string;
  /** 是否星级标记 1是 0否 */
  MarkFlag?: number;
  /** 客户标签，多个标签用逗号隔开 */
  TagIds?: string;
  /** 员工标识筛选，0：非员工，1：员工 */
  RelChannelFlag?: string;
  /** 必须存在手机 1是 0否 */
  NeedPhoneFlag?: number;
  /** 省份 */
  Province?: string;
  /** 城市 */
  City?: string;
  /** 性别 1男 2女 */
  Sex?: string;
  /** 城市 */
  KeyWord?: string;
  /** 查询开始位置 */
  Offset?: number;
  /** 每页记录条数 */
  Limit?: number;
  /** 子项目ID */
  SubProjectId?: string;
}

declare interface DescribeCustomersResponse {
  /** 总记录条数 */
  TotalCount?: number;
  /** 数据列表 */
  UserList?: CustomerInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface DescribeProjectResponse {
  /** 项目id */
  ProjectId?: string;
  /** 项目名称 */
  ProjectName?: string;
  /** 项目预算 */
  ProjectBudget?: number;
  /** 项目机构 */
  ProjectOrg?: string;
  /** 项目简介 */
  ProjectIntroduction?: string;
  /** 子项目列表 */
  SubProjectList?: SubProjectInfo[];
  /** 项目状态 */
  ProjectStatus?: string;
  /** 项目机构Id */
  ProjectOrgId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectStockRequest {
  /** 子项目id */
  SubProjectId: string;
}

declare interface DescribeProjectStockResponse {
  /** 项目库存列表 */
  ProjectStocks?: ProjectStock[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectsRequest {
  /** 页码 */
  PageNo: number;
  /** 页面大小 */
  PageSize: number;
  /** 过滤规则 */
  SearchWord?: string;
  /** 部门范围过滤 */
  Filters?: Filters;
  /** 项目状态, 0:编辑中 1:运营中 2:已下线 3:已删除 4:审批中 */
  ProjectStatus?: number;
}

declare interface DescribeProjectsResponse {
  /** 项目列表 */
  ProjectList?: ProjectInfo[];
  /** 项目数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceTemplateHeadersRequest {
  /** 微信公众号appId */
  WxAppId?: string;
}

declare interface DescribeResourceTemplateHeadersResponse {
  /** 记录条数 */
  TotalCount?: number;
  /** 模板列表 */
  TmplList?: ResourceTemplateHeader[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubProjectRequest {
  /** 子项目id */
  SubProjectId: string;
}

declare interface DescribeSubProjectResponse {
  /** 作品信息 */
  ProductInfo?: ProductInfo | null;
  /** 活动信息 */
  ActivityInfo?: ActivityInfo | null;
  /** 分享标题 */
  ShareTitle?: string | null;
  /** 分享描述 */
  ShareDesc?: string | null;
  /** 分享图标 */
  ShareImg?: string | null;
  /** 是否已创建策略 */
  HasStrategy?: number | null;
  /** 子项目状态 */
  SubProjectStatus?: string | null;
  /** 分享公众号的appId */
  ShareAppId?: string | null;
  /** 分享公众号的wsId */
  ShareWsId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExpireFlowRequest {
  /** 工单ID */
  FlowId: string;
}

declare interface ExpireFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyProjectRequest {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 项目预算 */
  ProjectBudget: string;
  /** 项目机构 */
  ProjectOrg: string;
  /** 项目简介 */
  ProjectIntroduction: string;
  /** 项目机构Id */
  ProjectOrgId?: string;
}

declare interface ModifyProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OffLineProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface OffLineProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReplenishProjectStockRequest {
  /** 项目id */
  SubProjectId: string;
  /** 奖品id */
  PrizeId: string;
  /** 奖品数量 */
  PrizeNum: number;
  /** 奖池索引 */
  PoolIndex: number;
  /** 奖池名称 */
  PoolName?: string;
}

declare interface ReplenishProjectStockResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendWxTouchTaskRequest {
  /** 客户分组ID */
  GroupId: string;
  /** 去除今日已发送的客户 */
  DistinctFlag: boolean;
  /** 是否立马发送 */
  IsSendNow: boolean;
  /** 发送时间，一般为0 */
  SendDate: number;
  /** 任务名称 */
  TaskName: string;
  /** 微信触达类型，text, news, smallapp, tmplmsg */
  WxTouchType: string;
  /** 标题 */
  Title?: string;
  /** 文本内容 */
  Content?: string;
  /** 图文素材ID */
  NewsId?: string;
  /** 小程序卡片ID */
  SmallProgramId?: string;
  /** 模板消息ID */
  TemplateId?: string;
  /** 微信公众号appId */
  WxAppId?: string;
}

declare interface SendWxTouchTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 智汇零售 */
declare interface Solar {
  (): Versions;
  /** 员工渠道更改员工状态 */
  CheckStaffChUser(data: CheckStaffChUserRequest, config?: AxiosRequestConfig): AxiosPromise<CheckStaffChUserResponse>;
  /** 复制活动渠道的策略 */
  CopyActivityChannel(data: CopyActivityChannelRequest, config?: AxiosRequestConfig): AxiosPromise<CopyActivityChannelResponse>;
  /** 创建项目 */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 创建子项目 */
  CreateSubProject(data: CreateSubProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubProjectResponse>;
  /** 删除项目 */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** 客户档案查询客户详情 */
  DescribeCustomer(data: DescribeCustomerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomerResponse>;
  /** 查询客户档案列表 */
  DescribeCustomers(data: DescribeCustomersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomersResponse>;
  /** 项目详情展示 */
  DescribeProject(data: DescribeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectResponse>;
  /** 项目库存详情 */
  DescribeProjectStock(data: DescribeProjectStockRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectStockResponse>;
  /** 项目列表展示 */
  DescribeProjects(data: DescribeProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectsResponse>;
  /** 素材查询服务号模板标题的列表 */
  DescribeResourceTemplateHeaders(data: DescribeResourceTemplateHeadersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceTemplateHeadersResponse>;
  /** 子项目详情 */
  DescribeSubProject(data: DescribeSubProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubProjectResponse>;
  /** 工单失效接口 */
  ExpireFlow(data: ExpireFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ExpireFlowResponse>;
  /** 修改项目 */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** 下线项目 */
  OffLineProject(data: OffLineProjectRequest, config?: AxiosRequestConfig): AxiosPromise<OffLineProjectResponse>;
  /** 补充（子）项目库存 */
  ReplenishProjectStock(data: ReplenishProjectStockRequest, config?: AxiosRequestConfig): AxiosPromise<ReplenishProjectStockResponse>;
  /** 发送微信触达任务 */
  SendWxTouchTask(data: SendWxTouchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SendWxTouchTaskResponse>;
}

export declare type Versions = ["2018-10-11"];

export default Solar;
