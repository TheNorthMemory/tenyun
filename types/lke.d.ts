/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用配置 */
declare interface AppConfig {
  /** 知识问答管理应用配置 */
  KnowledgeQa?: KnowledgeQaConfig | null;
  /** 知识摘要应用配置 */
  Summary?: SummaryConfig | null;
  /** 标签提取应用配置 */
  Classify?: ClassifyConfig | null;
}

/** 应用详情 */
declare interface AppInfo {
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType?: string | null;
  /** 应用类型描述 */
  AppTypeDesc?: string | null;
  /** 应用ID */
  AppBizId?: string | null;
  /** 应用名称 */
  Name?: string | null;
  /** 应用头像 */
  Avatar?: string | null;
  /** 应用描述 */
  Desc?: string | null;
  /** 应用状态，1：未上线，2：运行中，3：停用 */
  AppStatus?: number | null;
  /** 状态说明 */
  AppStatusDesc?: string | null;
  /** 修改时间 */
  UpdateTime?: string | null;
  /** 最后修改人 */
  Operator?: string | null;
  /** 模型名称 */
  ModelName?: string | null;
  /** 模型别名 */
  ModelAliasName?: string | null;
}

/** 应用模型配置 */
declare interface AppModel {
  /** 模型名称 */
  Name?: string | null;
  /** 模型描述 */
  Desc?: string | null;
  /** 上下文指代轮次 */
  ContextLimit?: number | null;
  /** 模型别名 */
  AliasName?: string | null;
}

/** 属性标签详情信息 */
declare interface AttrLabel {
  /** 属性标签来源 */
  Source?: number | null;
  /** 属性ID */
  AttrBizId?: string | null;
  /** 属性标识 */
  AttrKey?: string | null;
  /** 属性名称 */
  AttrName?: string | null;
  /** 标签ID */
  Labels?: Label[] | null;
}

/** 属性标签详情 */
declare interface AttrLabelDetail {
  /** 属性ID */
  AttrBizId?: string | null;
  /** 属性标识 */
  AttrKey?: string | null;
  /** 属性名称 */
  AttrName?: string | null;
  /** 标签名称 */
  LabelNames?: string[] | null;
  /** 属性标签是否在更新中 */
  IsUpdating?: boolean | null;
}

/** 属性标签引用信息 */
declare interface AttrLabelRefer {
  /** 属性标签来源，1：属性标签 */
  Source?: number;
  /** 属性ID */
  AttributeBizId?: string;
  /** 标签ID */
  LabelBizIds?: string[];
}

/** 导出知识标签过滤器 */
declare interface AttributeFilters {
  /** 检索，属性或标签名称 */
  Query?: string;
}

/** 属性标签 */
declare interface AttributeLabel {
  /** 标签ID */
  LabelBizId?: string | null;
  /** 标签名称 */
  LabelName?: string | null;
  /** 相似标签名称 */
  SimilarLabels?: string[] | null;
}

/** 应用基础配置 */
declare interface BaseConfig {
  /** 应用名称 */
  Name: string;
  /** 机器人头像 */
  Avatar: string;
  /** 机器人描述 */
  Desc?: string;
}

/** 标签提取配置 */
declare interface ClassifyConfig {
  /** 模型配置 */
  Model?: AppModel | null;
  /** 标签列表 */
  Labels?: ClassifyLabel[] | null;
}

/** 标签信息 */
declare interface ClassifyLabel {
  /** 标签名称 */
  Name?: string | null;
  /** 标签描述 */
  Description?: string | null;
  /** 标签取值范围 */
  Values?: string[] | null;
}

/** 获取不满意回复上下文响 */
declare interface Context {
  /** 消息记录ID信息 */
  RecordBizId?: string | null;
  /** 是否为用户 */
  IsVisitor?: boolean | null;
  /** 昵称 */
  NickName?: string | null;
  /** 头像 */
  Avatar?: string | null;
  /** 消息内容 */
  Content?: string | null;
}

/** 临时密钥结构 */
declare interface Credentials {
  /** token */
  Token?: string | null;
  /** 临时证书密钥ID */
  TmpSecretId?: string | null;
  /** 临时证书密钥Key */
  TmpSecretKey?: string | null;
}

/** 向量 */
declare interface EmbeddingObject {
  /** 向量 */
  Embedding?: number[];
}

/** 不满意回复检索过滤 */
declare interface Filters {
  /** 检索，用户问题或答案 */
  Query?: string;
  /** 错误类型检索 */
  Reasons?: string[];
}

/** 获取ws token label */
declare interface GetWsTokenReq_Label {
  /** 标签名 */
  Name?: string;
  /** 标签值 */
  Values?: string[];
}

/** 分片高亮内容 */
declare interface Highlight {
  /** 高亮启始位置 */
  StartPos?: string | null;
  /** 高亮结束位置 */
  EndPos?: string | null;
  /** 高亮子文本 */
  Text?: string | null;
}

/** 知识问答配置 */
declare interface KnowledgeQaConfig {
  /** 欢迎语，200字符以内 */
  Greeting?: string | null;
  /** 角色描述，300字符以内 */
  RoleDescription?: string | null;
  /** 模型配置 */
  Model?: AppModel | null;
  /** 知识搜索配置 */
  Search?: KnowledgeQaSearch[] | null;
  /** 知识管理输出配置 */
  Output?: KnowledgeQaOutput | null;
}

/** 应用管理输出配置 */
declare interface KnowledgeQaOutput {
  /** 输出方式 1：流式 2：非流式 */
  Method?: number | null;
  /** 通用模型回复 */
  UseGeneralKnowledge?: boolean | null;
  /** 未知回复语，300字符以内 */
  BareAnswer?: string | null;
}

/** 检索配置 */
declare interface KnowledgeQaSearch {
  /** 知识来源 doc：文档，qa：问答 taskflow：业务流程，search：搜索增强 */
  Type?: string | null;
  /** 问答-回复灵活度 1：已采纳答案直接回复 2：已采纳润色后回复 */
  ReplyFlexibility?: number | null;
  /** 搜索增强-搜索引擎状态 */
  UseSearchEngine?: boolean | null;
  /** 是否显示搜索引擎检索状态 */
  ShowSearchEngine?: boolean | null;
  /** 知识来源，是否选择 */
  IsEnabled?: boolean | null;
  /** 问答最大召回数量, 默认2，限制5 */
  QaTopN?: number | null;
  /** 文档最大召回数量, 默认3，限制5 */
  DocTopN?: number | null;
}

/** 标签ID */
declare interface Label {
  /** 标签ID */
  LabelBizId?: string | null;
  /** 标签名称 */
  LabelName?: string | null;
}

/** 应用类型详情 */
declare interface ListAppCategoryRspOption {
  /** 类型名称 */
  Text?: string | null;
  /** 类型值 */
  Value?: string | null;
  /** 类型log */
  Logo?: string | null;
}

/** 文档列表详情描述 */
declare interface ListDocItem {
  /** 文档ID */
  DocBizId?: string | null;
  /** 文件名称 */
  FileName?: string | null;
  /** 文件类型 */
  FileType?: string | null;
  /** cos路径 */
  CosUrl?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 文档状态 */
  Status?: number | null;
  /** 文档状态描述 */
  StatusDesc?: string | null;
  /** 原因 */
  Reason?: string | null;
  /** 答案中是否引用 */
  IsRefer?: boolean | null;
  /** 问答对数量 */
  QaNum?: number | null;
  /** 是否已删除 */
  IsDeleted?: boolean | null;
  /** 文档来源 */
  Source?: number | null;
  /** 文档来源描述 */
  SourceDesc?: string | null;
  /** 是否允许重新生成 */
  IsAllowRestart?: boolean | null;
  /** qa是否已删除 */
  IsDeletedQa?: boolean | null;
  /** 问答是否生成中 */
  IsCreatingQa?: boolean | null;
  /** 是否允许删除 */
  IsAllowDelete?: boolean | null;
  /** 是否允许操作引用开关 */
  IsAllowRefer?: boolean | null;
  /** 问答是否生成过 */
  IsCreatedQa?: boolean | null;
  /** 文档字符量 */
  DocCharSize?: string | null;
  /** 属性标签适用范围 */
  AttrRange?: number | null;
  /** 属性标签 */
  AttrLabels?: AttrLabel[] | null;
  /** 是否允许编辑 */
  IsAllowEdit?: boolean | null;
  /** 外部引用链接类型 0：系统链接 1：自定义链接值为1时，WebUrl 字段不能为空，否则不生效。 */
  ReferUrlType?: number | null;
  /** 网页(或自定义链接)地址 */
  WebUrl?: string | null;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string | null;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string | null;
}

/** 问答详情数据 */
declare interface ListQaItem {
  /** 问答ID */
  QaBizId?: string;
  /** 问题 */
  Question?: string;
  /** 答案 */
  Answer?: string;
  /** 来源 */
  Source?: number;
  /** 来源描述 */
  SourceDesc?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 状态 */
  Status?: number;
  /** 状态描述 */
  StatusDesc?: string;
  /** 文档ID */
  DocBizId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 是否允许编辑 */
  IsAllowEdit?: boolean;
  /** 是否允许删除 */
  IsAllowDelete?: boolean;
  /** 是否允许校验 */
  IsAllowAccept?: boolean;
  /** 文档名称 */
  FileName?: string;
  /** 文档类型 */
  FileType?: string;
  /** 问答字符数 */
  QaCharSize?: string;
}

/** 发布列表详情 */
declare interface ListReleaseItem {
  /** 版本ID */
  ReleaseBizId?: string;
  /** 发布人 */
  Operator?: string;
  /** 发布描述 */
  Desc?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 发布状态 */
  Status?: number;
  /** 发布状态描述 */
  StatusDesc?: string;
  /** 失败原因 */
  Reason?: string;
  /** 发布成功数 */
  SuccessCount?: number;
  /** 发布失败数 */
  FailCount?: number;
}

/** 一条message代表一条对话记录role表示角色 user或者assistantcontent表示对话内容 */
declare interface Message {
  /** role表示角色 user标识用户提问，assistant标识返回的答案 */
  Role: string | null;
  /** 对话内容 */
  Content: string | null;
}

/** 模型信息 */
declare interface ModelInfo {
  /** 模型名称 */
  ModelName?: string | null;
  /** 模型描述 */
  ModelDesc?: string | null;
  /** 模型名称 */
  AliasName?: string | null;
}

/** 消息详情 */
declare interface MsgRecord {
  /** 内容 */
  Content?: string;
  /** 记录ID */
  RecordId?: string;
  /** 关联记录ID */
  RelatedRecordId?: string;
  /** 是否来自自己 */
  IsFromSelf?: boolean;
  /** 发送者名称 */
  FromName?: string;
  /** 发送者头像 */
  FromAvatar?: string;
  /** 时间戳 */
  Timestamp?: string;
  /** 是否已读 */
  HasRead?: boolean;
  /** 评价 */
  Score?: number;
  /** 是否评分 */
  CanRating?: boolean;
  /** 记录类型 */
  Type?: number;
  /** 引用来源 */
  References?: MsgRecordReference[];
  /** 评价原因 */
  Reasons?: string[];
  /** 是否大模型 */
  IsLlmGenerated?: boolean;
}

/** 聊天详情Refer */
declare interface MsgRecordReference {
  /** id */
  Id?: string;
  /** 链接 */
  Url?: string;
  /** 类型 */
  Type?: number;
  /** 名称 */
  Name?: string;
  /** 来源文档ID */
  DocId?: string;
}

/** 下拉框选项 */
declare interface Option {
  /** 文本 */
  Text?: string | null;
  /** 值 */
  Value?: string | null;
  /** 文件字符数 */
  CharSize?: string | null;
  /** 文件类型 */
  FileType?: string | null;
}

/** 获取QA分类分组 */
declare interface QACate {
  /** QA分类的业务ID */
  CateBizId?: string | null;
  /** 分类名称 */
  Name?: string | null;
  /** 分类下QA数量 */
  Total?: number | null;
  /** 是否可新增 */
  CanAdd?: boolean | null;
  /** 是否可编辑 */
  CanEdit?: boolean | null;
  /** 是否可删除 */
  CanDelete?: boolean | null;
  /** 子分类 */
  Children?: QACate[] | null;
}

/** 问答列表 */
declare interface QAList {
  /** 问答ID */
  QaBizId: string;
  /** 是否采纳 */
  IsAccepted?: boolean;
  /** 分类ID */
  CateBizId?: string;
  /** 问题 */
  Question?: string;
  /** 答案 */
  Answer?: string;
}

/** QA查询参数 */
declare interface QAQuery {
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 机器人ID */
  BotBizId: string;
  /** 查询内容 */
  Query?: string;
  /** 分类ID */
  CateBizId?: string;
  /** 校验状态 */
  AcceptStatus?: number[];
  /** 发布状态 */
  ReleaseStatus?: number[];
  /** 文档ID */
  DocBizId?: string;
  /** QAID */
  QaBizId?: string;
  /** 来源 */
  Source?: number;
  /** 查询答案 */
  QueryAnswer?: string;
}

/** 引用来源详情 */
declare interface ReferDetail {
  /** 引用ID */
  ReferBizId?: string | null;
  /** 文档类型 (1 QA, 2 文档段) */
  DocType?: number | null;
  /** 文档名称 */
  DocName?: string | null;
  /** 分片内容 */
  PageContent?: string | null;
  /** 问题 */
  Question?: string | null;
  /** 答案 */
  Answer?: string | null;
  /** 置信度 */
  Confidence?: number | null;
  /** 标记 */
  Mark?: number | null;
  /** 分片高亮内容 */
  Highlights?: Highlight[] | null;
  /** 原始内容 */
  OrgData?: string | null;
}

/** 发布拒答 */
declare interface RejectedQuestion {
  /** 拒答问题ID */
  RejectedBizId?: string | null;
  /** 被拒答的问题 */
  Question?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 状态描述 */
  StatusDesc?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 是否允许编辑 */
  IsAllowEdit?: boolean | null;
  /** 是否允许删除 */
  IsAllowDelete?: boolean | null;
}

/** 发布配置项 */
declare interface ReleaseConfigs {
  /** 配置项描述 */
  ConfigItem?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 状态 */
  Action?: number | null;
  /** 变更后的内容 */
  Value?: string | null;
  /** 变更前的内容 */
  LastValue?: string | null;
  /** 变更内容(优先级展示content内容,content为空取value内容) */
  Content?: string | null;
  /** 失败原因 */
  Message?: string | null;
}

/** 发布文档详情 */
declare interface ReleaseDoc {
  /** 文件名 */
  FileName?: string;
  /** 文件类型 */
  FileType?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 状态 */
  Action?: number;
  /** 状态描述 */
  ActionDesc?: string;
  /** 失败原因 */
  Message?: string;
  /** 文档业务ID */
  DocBizId?: string;
}

/** 发布问答 */
declare interface ReleaseQA {
  /** 问题 */
  Question?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 状态 */
  Action?: number;
  /** 状态描述 */
  ActionDesc?: string;
  /** 来源 */
  Source?: number;
  /** 来源描述 */
  SourceDesc?: string;
  /** 文件名字 */
  FileName?: string;
  /** 文档类型 */
  FileType?: string;
  /** 失败原因 */
  Message?: string;
  /** 发布状态 */
  ReleaseStatus?: number;
  /** QAID */
  QaBizId?: string;
  /** 文档业务ID */
  DocBizId?: string;
}

/** 发布拒答 */
declare interface ReleaseRejectedQuestion {
  /** 问题 */
  Question?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 状态 */
  Action?: number | null;
  /** 状态描述 */
  ActionDesc?: string | null;
  /** 失败原因 */
  Message?: string | null;
}

/** 知识摘要应用配置 */
declare interface SummaryConfig {
  /** 模型配置 */
  Model?: AppModel | null;
  /** 知识摘要输出配置 */
  Output?: SummaryOutput | null;
}

/** 知识摘要输出配置 */
declare interface SummaryOutput {
  /** 输出方式 1：流式 2：非流式 */
  Method?: number | null;
  /** 输出要求 1：文本总结 2：自定义要求 */
  Requirement?: number | null;
  /** 自定义要求指令 */
  RequireCommand?: string | null;
}

/** 任务参数 */
declare interface TaskParams {
  /** 下载地址,需要通过cos桶临时密钥去下载 */
  CosPath?: string | null;
}

/** 不满意回复 */
declare interface UnsatisfiedReply {
  /** 不满意回复ID */
  ReplyBizId?: string | null;
  /** 消息记录ID */
  RecordBizId?: string | null;
  /** 用户问题 */
  Question?: string | null;
  /** 机器人回复 */
  Answer?: string | null;
  /** 错误类型 */
  Reasons?: string[] | null;
}

declare interface CheckAttributeLabelExistRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 属性名称 */
  LabelName: string;
  /** 属性ID */
  AttributeBizId: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 滚动加载，最后一个属性标签ID */
  LastLabelBizId?: string;
}

declare interface CheckAttributeLabelExistResponse {
  /** 是否存在 */
  IsExist?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckAttributeLabelReferRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 属性标签 */
  LabelBizId?: string;
  /** 属性ID */
  AttributeBizId?: string[];
}

declare interface CheckAttributeLabelReferResponse {
  /** 是否引用 */
  IsRefer?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAppRequest {
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType: string;
  /** 应用基础配置 */
  BaseConfig: BaseConfig;
}

declare interface CreateAppResponse {
  /** 应用ID */
  AppBizId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAttributeLabelRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 属性标识 */
  AttrKey: string;
  /** 属性名称 */
  AttrName: string;
  /** 属性标签 */
  Labels: AttributeLabel[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface CreateAttributeLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCorpRequest {
  /** 企业全称 */
  FullName: string;
  /** 联系人名称 */
  ContactName: string;
  /** 联系人邮箱 */
  Email?: string;
  /** 联系人手机号 */
  Telephone?: string;
}

declare interface CreateCorpResponse {
  /** 企业ID */
  CorpBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateQACateRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 父级业务ID */
  ParentBizId: string;
  /** 分类名称 */
  Name: string;
}

declare interface CreateQACateResponse {
  /** 是否可新增 */
  CanAdd?: boolean;
  /** 是否可编辑 */
  CanEdit?: boolean;
  /** 是否可删除 */
  CanDelete?: boolean;
  /** 分类业务ID */
  CateBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateQARequest {
  /** 机器人ID */
  BotBizId: string;
  /** 问题 */
  Question: string;
  /** 答案 */
  Answer: string;
  /** 属性标签适用范围 1：全部，2：按条件 */
  AttrRange: number;
  /** 自定义参数 */
  CustomParam?: string;
  /** 属性标签引用 */
  AttrLabels?: AttrLabelRefer[];
  /** 文档ID */
  DocBizId?: string;
  /** 分类ID */
  CateBizId?: string;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
}

declare interface CreateQAResponse {
  /** 问答ID */
  QaBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRejectedQuestionRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 拒答问题 */
  Question: string;
  /** 拒答问题来源的数据源唯一id，取值1，2 */
  BusinessSource: number;
  /** 拒答问题来源的数据源唯一id */
  BusinessId?: string;
}

declare interface CreateRejectedQuestionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReleaseRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 发布描述 */
  Desc?: string;
}

declare interface CreateReleaseResponse {
  /** 发布ID */
  ReleaseBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAppRequest {
  /** 应用ID */
  AppBizId: string;
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType: string;
}

declare interface DeleteAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAttributeLabelRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 属性ID */
  AttributeBizIds: string[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface DeleteAttributeLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDocRequest {
  /** 文档业务ID列表 */
  DocBizIds: string[];
  /** 机器人ID */
  BotBizId: string;
}

declare interface DeleteDocResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQACateRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 分类业务ID */
  CateBizId: string;
}

declare interface DeleteQACateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQARequest {
  /** 机器人ID */
  BotBizId: string;
  /** 问答ID */
  QaBizIds: string[];
}

declare interface DeleteQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRejectedQuestionRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 拒答问题来源的数据源唯一id */
  RejectedBizIds: string[];
}

declare interface DeleteRejectedQuestionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppRequest {
  /** 应用ID */
  AppBizId: string;
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType?: string;
  /** 是否发布后的配置 */
  IsRelease?: boolean;
}

declare interface DescribeAppResponse {
  /** 应用 ID */
  AppBizId?: string;
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType?: string;
  /** 应用类型说明 */
  AppTypeDesc?: string;
  /** 应用类型说明 */
  BaseConfig?: BaseConfig;
  /** 应用配置 */
  AppConfig?: AppConfig;
  /** 头像是否在申诉中 */
  AvatarInAppeal?: boolean;
  /** 角色描述是否在申诉中 */
  RoleInAppeal?: boolean;
  /** 名称是否在申诉中 */
  NameInAppeal?: boolean;
  /** 欢迎语是否在申诉中 */
  GreetingInAppeal?: boolean;
  /** 未知问题回复语是否在申诉中 */
  BareAnswerInAppeal?: boolean;
  /** 应用appKey */
  AppKey?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttributeLabelRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 属性ID */
  AttributeBizId: string;
  /** 每次加载的数量 */
  Limit: number;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 查询标签或相似标签 */
  Query?: string;
  /** 滚动加载游标的标签ID */
  LastLabelBizId?: string;
}

declare interface DescribeAttributeLabelResponse {
  /** 属性ID */
  AttributeBizId?: string;
  /** 属性标识 */
  AttrKey?: string;
  /** 属性名称 */
  AttrName?: string;
  /** 标签数量 */
  LabelNumber?: string;
  /** 标签名称 */
  Labels?: AttributeLabel[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCorpRequest {
}

declare interface DescribeCorpResponse {
  /** 企业ID */
  CorpBizId?: string;
  /** 机器人配额 */
  RobotQuota?: number;
  /** 企业全称 */
  FullName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
}

declare interface DescribeDocResponse {
  /** 文档ID */
  DocBizId?: string;
  /** 文件名称 */
  FileName?: string;
  /** 文件类型 */
  FileType?: string;
  /** cos路径 */
  CosUrl?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 文档状态(5审核通过 7审核中 8审核不通过 9审核通过 10待发布 11发布中 12发布成功 13学习中 14学习失败) */
  Status?: number;
  /** 文档状态描述 */
  StatusDesc?: string;
  /** 生成失败原因 */
  Reason?: string;
  /** 答案中是否引用 */
  IsRefer?: boolean;
  /** 问答对数量 */
  QaNum?: number;
  /** 是否删除 */
  IsDeleted?: boolean;
  /** 文档来源 */
  Source?: number;
  /** 文档来源描述 */
  SourceDesc?: string;
  /** 是否允许重新生成 */
  IsAllowRestart?: boolean;
  /** qa是否已删除 */
  IsDeletedQa?: boolean;
  /** 问答是否生成中 */
  IsCreatingQa?: boolean;
  /** 是否允许删除 */
  IsAllowDelete?: boolean;
  /** 是否允许操作引用开关 */
  IsAllowRefer?: boolean;
  /** 是否生成过问答 */
  IsCreatedQa?: boolean;
  /** 文档字符量 */
  DocCharSize?: string;
  /** 是否允许编辑 */
  IsAllowEdit?: boolean;
  /** 属性标签适用范围 1：全部，2：按条件范围 */
  AttrRange?: number;
  /** 属性标签 */
  AttrLabels?: AttrLabel[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQARequest {
  /** QA业务ID */
  QaBizId: string;
  /** 机器人ID */
  BotBizId: string;
}

declare interface DescribeQAResponse {
  /** QA业务ID */
  QaBizId?: string;
  /** 问题 */
  Question?: string;
  /** 答案 */
  Answer?: string;
  /** 自定义参数 */
  CustomParam?: string;
  /** 来源 */
  Source?: number;
  /** 来源描述 */
  SourceDesc?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 状态 */
  Status?: number;
  /** 状态描述 */
  StatusDesc?: string;
  /** 分类ID */
  CateBizId?: string;
  /** 是否允许校验 */
  IsAllowAccept?: boolean;
  /** 是否允许删除 */
  IsAllowDelete?: boolean;
  /** 是否允许编辑 */
  IsAllowEdit?: boolean;
  /** 文档id */
  DocBizId?: string;
  /** 文档名称 */
  FileName?: string;
  /** 文档类型 */
  FileType?: string;
  /** 分片ID */
  SegmentBizId?: string;
  /** 分片内容 */
  PageContent?: string;
  /** 分片高亮内容 */
  Highlights?: Highlight[];
  /** 分片内容 */
  OrgData?: string;
  /** 属性标签适用范围 */
  AttrRange?: number;
  /** 属性标签 */
  AttrLabels?: AttrLabel[];
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReferRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 引用ID */
  ReferBizIds: string[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface DescribeReferResponse {
  /** 引用列表 */
  List?: ReferDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseInfoRequest {
  /** 机器人ID */
  BotBizId: string;
}

declare interface DescribeReleaseInfoResponse {
  /** 最后发布时间 */
  LastTime?: string;
  /** 发布状态 */
  Status?: number;
  /** 是否编辑过 */
  IsUpdated?: boolean;
  /** 失败原因 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 发布详情 */
  ReleaseBizId?: string;
}

declare interface DescribeReleaseResponse {
  /** 创建时间 */
  CreateTime?: string;
  /** 发布描述 */
  Description?: string;
  /** 发布状态(1待发布 2发布中 3发布成功 4发布失败 5发布中 6发布中 7发布失败 9发布暂停) */
  Status?: number;
  /** 发布状态描述 */
  StatusDesc?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRobotBizIDByAppKeyRequest {
  /** 机器人appkey */
  AppKey: string;
}

declare interface DescribeRobotBizIDByAppKeyResponse {
  /** 机器人业务ID */
  BotBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStorageCredentialRequest {
  /** 机器人ID */
  BotBizId: string;
}

declare interface DescribeStorageCredentialResponse {
  /** 密钥信息 */
  Credentials?: Credentials;
  /** 失效时间 */
  ExpiredTime?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 对象存储桶 */
  Bucket?: string;
  /** 对象存储可用区 */
  Region?: string;
  /** 目录 */
  FilePath?: string;
  /** 存储类型 */
  Type?: string;
  /** 主号 */
  CorpUin?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnsatisfiedReplyContextRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 回复ID */
  ReplyBizId: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface DescribeUnsatisfiedReplyContextResponse {
  /** 不满意回复上下文 */
  List?: Context[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportAttributeLabelRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 属性ID */
  AttributeBizIds?: string[];
  /** 根据筛选数据导出 */
  Filters?: AttributeFilters;
}

declare interface ExportAttributeLabelResponse {
  /** 导出任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportQAListRequest {
  /** 机器人ID */
  BotBizId: string;
  /** QA业务ID */
  QaBizIds: string[];
  /** 查询参数 */
  Filters?: QAQuery;
}

declare interface ExportQAListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportUnsatisfiedReplyRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 勾选导出ID列表 */
  ReplyBizIds: string[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 检索过滤器 */
  Filters?: Filters;
}

declare interface ExportUnsatisfiedReplyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateQARequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档ID */
  DocBizIds?: string[];
}

declare interface GenerateQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAppKnowledgeCountRequest {
  /** 类型：doc-文档；qa-问答对 */
  Type: string;
  /** 应用ID */
  AppBizId: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface GetAppKnowledgeCountResponse {
  /** 总数 */
  Total?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAppSecretRequest {
  /** 应用ID */
  AppBizId: string;
}

declare interface GetAppSecretResponse {
  /** 应用密钥 */
  AppKey?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 是否发布 */
  IsRelease?: boolean;
  /** 是否有查看权限 */
  HasPermission?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDocPreviewRequest {
  /** 文档业务ID */
  DocBizId: string;
  /** 机器人ID */
  BotBizId: string;
}

declare interface GetDocPreviewResponse {
  /** 文件名 */
  FileName?: string;
  /** 文件类型 */
  FileType?: string;
  /** cos路径 */
  CosUrl?: string;
  /** cos临时地址 */
  Url?: string;
  /** cos桶 */
  Bucket?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetEmbeddingRequest {
  /** 模型名称 */
  Model: string;
  /** 需要 embedding 的文本, 单条文本最大长度500个字符, 总条数最大7条 */
  Inputs: string[];
  /** 是否在线, 后台异步任务使用离线, 实时任务使用在线, 默认值: false */
  Online?: boolean;
}

declare interface GetEmbeddingResponse {
  /** 特征 */
  Data?: EmbeddingObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetMsgRecordRequest {
  /** 类型 */
  Type: number;
  /** 数量 */
  Count: number;
  /** 会话sessionid */
  SessionId: string;
  /** 最后一条记录ID */
  LastRecordId?: string;
  /** 机器人AppKey */
  BotAppKey?: string;
}

declare interface GetMsgRecordResponse {
  /** 会话记录 */
  Records?: MsgRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskStatusRequest {
  /** 任务ID */
  TaskId: string;
  /** 任务类型 */
  TaskType: string;
  /** 机器人ID */
  BotBizId: string;
}

declare interface GetTaskStatusResponse {
  /** 任务ID */
  TaskId?: string;
  /** 任务类型 */
  TaskType?: string;
  /** 任务状态 */
  Status?: string | null;
  /** 任务消息 */
  Message?: string | null;
  /** 任务参数 */
  Params?: TaskParams | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWsTokenRequest {
  /** 接入类型 */
  Type: number;
  /** 机器人AppKey */
  BotAppKey?: string;
  /** 坐席ID */
  VisitorBizId?: string;
  /** 坐席标签 */
  VisitorLabels?: GetWsTokenReq_Label[];
}

declare interface GetWsTokenResponse {
  /** token值 */
  Token?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GroupQARequest {
  /** 机器人ID */
  BotBizId: string;
  /** QA业务ID列表 */
  QaBizIds: string[];
  /** 分组 ID */
  CateBizId: string;
}

declare interface GroupQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IgnoreUnsatisfiedReplyRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 不满意回复ID */
  ReplyBizIds: string[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface IgnoreUnsatisfiedReplyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsTransferIntentRequest {
  /** 内容 */
  Content: string;
  /** 机器人appKey */
  BotAppKey: string;
}

declare interface IsTransferIntentResponse {
  /** 是否意图转人工 */
  Hit?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAppCategoryRequest {
}

declare interface ListAppCategoryResponse {
  /** 应用类型列表 */
  List?: ListAppCategoryRspOption[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAppRequest {
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType?: string;
  /** 每页数目，整型 */
  PageSize?: number;
  /** 页码，整型 */
  PageNumber?: number;
  /** 关键词：应用/修改人 */
  Keyword?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface ListAppResponse {
  /** 数量 */
  Total?: string;
  /** 标签列表 */
  List?: AppInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAttributeLabelRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 查询内容 */
  Query?: string;
}

declare interface ListAttributeLabelResponse {
  /** 总数 */
  Total?: string;
  /** 列表 */
  List?: AttrLabelDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDocRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 查询内容 */
  Query?: string;
  /** 文档状态： 7 审核中、8 审核失败、10 待发布、11 发布中、12 已发布、13 学习中、14 学习失败 20 已过期 */
  Status?: number[];
}

declare interface ListDocResponse {
  /** 文档数量 */
  Total?: string;
  /** 文档列表 */
  List?: ListDocItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListModelRequest {
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface ListModelResponse {
  /** 模型列表 */
  List?: ModelInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListQACateRequest {
  /** 机器人ID */
  BotBizId: string;
}

declare interface ListQACateResponse {
  /** 列表 */
  List?: QACate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListQARequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页大小 */
  PageSize: number;
  /** 查询问题 */
  Query?: string;
  /** 校验状态(1未校验2采纳3不采纳) */
  AcceptStatus?: number[];
  /** 发布状态(2待发布 3发布中 4已发布 7审核中 8审核失败 9人工申述中 11人工申述失败) */
  ReleaseStatus?: number[];
  /** 文档ID */
  DocBizId?: string;
  /** 来源(1 文档生成 2 批量导入 3 手动添加) */
  Source?: number;
  /** 查询答案 */
  QueryAnswer?: string;
  /** QA业务ID列表 */
  QaBizIds?: string[];
}

declare interface ListQAResponse {
  /** 问答数量 */
  Total?: string;
  /** 待校验问答数量 */
  WaitVerifyTotal?: string;
  /** 未采纳问答数量 */
  NotAcceptedTotal?: string;
  /** 已采纳问答数量 */
  AcceptedTotal?: string;
  /** 页码 */
  PageNumber?: number;
  /** 问答详情 */
  List?: ListQaItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRejectedQuestionPreviewRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 查询内容 */
  Query?: string;
  /** 发布单ID */
  ReleaseBizId?: string;
  /** 状态(1新增2更新3删除) */
  Actions?: number[];
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface ListRejectedQuestionPreviewResponse {
  /** 文档数量 */
  Total?: string;
  /** 文档列表 */
  List?: ReleaseRejectedQuestion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRejectedQuestionRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 查询内容 */
  Query?: string;
}

declare interface ListRejectedQuestionResponse {
  /** 总数 */
  Total?: string;
  /** 拒答问题列表 */
  List?: RejectedQuestion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListReleaseConfigPreviewRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 查询内容 */
  Query?: string;
  /** 发布单ID */
  ReleaseBizId?: string;
  /** 状态(1新增2更新3删除) */
  Actions?: number[];
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 发布状态 */
  ReleaseStatus?: number[];
}

declare interface ListReleaseConfigPreviewResponse {
  /** 数量 */
  Total?: string;
  /** 配置项列表 */
  List?: ReleaseConfigs[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListReleaseDocPreviewRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 查询内容 */
  Query?: string;
  /** 发布业务ID */
  ReleaseBizId?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 状态(1新增2修改3删除) */
  Actions?: number[];
}

declare interface ListReleaseDocPreviewResponse {
  /** 文档数量 */
  Total?: string;
  /** 文档列表 */
  List?: ReleaseDoc[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListReleaseQAPreviewRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 查询内容 */
  Query?: string;
  /** 发布单ID */
  ReleaseBizId?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 状态(1新增2修改3删除) */
  Actions?: number[];
  /** 发布状态(4发布成功5发布失败) */
  ReleaseStatus?: number[];
}

declare interface ListReleaseQAPreviewResponse {
  /** 文档数量 */
  Total?: string;
  /** 文档列表 */
  List?: ReleaseQA[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListReleaseRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
}

declare interface ListReleaseResponse {
  /** 发布列表数量 */
  Total?: string;
  /** 发布列表 */
  List?: ListReleaseItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSelectDocRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档名称 */
  FileName?: string;
  /** 文档状态： 7 审核中、8 审核失败、10 待发布、11 发布中、12 已发布、13 学习中、14 学习失败 20 已过期 */
  Status?: number[];
}

declare interface ListSelectDocResponse {
  /** 下拉框内容 */
  List?: Option[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListUnsatisfiedReplyRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 分页数量 */
  PageSize: number;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 用户请求(问题或答案) */
  Query?: string;
  /** 错误类型检索 */
  Reasons?: string[];
}

declare interface ListUnsatisfiedReplyResponse {
  /** 总数 */
  Total?: string;
  /** 不满意回复列表 */
  List?: UnsatisfiedReply[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAppRequest {
  /** 应用 ID */
  AppBizId: string;
  /** 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取 */
  AppType: string;
  /** 应用基础配置 */
  BaseConfig: BaseConfig;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 应用配置 */
  AppConfig?: AppConfig;
}

declare interface ModifyAppResponse {
  /** 应用App */
  AppBizId?: string | null;
  /** 更新时间 */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAttributeLabelRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 属性ID */
  AttributeBizId: string;
  /** 属性标识 */
  AttrKey: string;
  /** 属性名称 */
  AttrName: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 删除的属性标签 */
  DeleteLabelBizIds?: string[];
  /** 新增或编辑的属性标签 */
  Labels?: AttributeLabel[];
}

declare interface ModifyAttributeLabelResponse {
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDocAttrRangeRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档ID */
  DocBizIds: string[];
  /** 属性标签适用范围 1：全部，2：按条件 */
  AttrRange: number;
  /** 属性标签引用 */
  AttrLabels: AttrLabelRefer[];
}

declare interface ModifyDocAttrRangeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDocRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
  /** 是否引用链接 */
  IsRefer: boolean;
  /** 属性标签适用范围 1：全部，2：按条件 */
  AttrRange: number;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 适用范围，关联的属性标签 */
  AttrLabels?: AttrLabelRefer[];
  /** 网页(或自定义链接)地址 */
  WebUrl?: string;
  /** 外部引用链接类型 0：系统链接 1：自定义链接值为1时，WebUrl 字段不能为空，否则不生效。 */
  ReferUrlType?: number;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
}

declare interface ModifyDocResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQAAttrRangeRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 问答ID */
  QaBizIds: string[];
  /** 属性标签适用范围 1：全部，2：按条件 */
  AttrRange: number;
  /** 属性标签引用 */
  AttrLabels: AttrLabelRefer[];
}

declare interface ModifyQAAttrRangeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQACateRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 分类名称 */
  Name: string;
  /** 分类业务ID */
  CateBizId: string;
}

declare interface ModifyQACateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQARequest {
  /** 机器人ID */
  BotBizId: string;
  /** 问答ID */
  QaBizId: string;
  /** 问题 */
  Question: string;
  /** 答案 */
  Answer: string;
  /** 自定义参数 */
  CustomParam?: string;
  /** 属性标签适用范围 1：全部，2：按条件 */
  AttrRange?: number;
  /** 属性标签引用 */
  AttrLabels?: AttrLabelRefer[];
  /** 文档ID */
  DocBizId?: string;
  /** 分类ID */
  CateBizId?: string;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
}

declare interface ModifyQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRejectedQuestionRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 拒答问题 */
  Question: string;
  /** 拒答问题来源的数据源唯一id */
  RejectedBizId: string;
}

declare interface ModifyRejectedQuestionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ParseDocRequest {
  /** 文件名称(需要包括文件后缀, 最大长度1024字节) */
  Name: string;
  /** 文件下载链接 (支持的文件类型: docx, txt, markdown, pdf) */
  Url: string;
  /** 任务ID, 用于幂等去重, 业务自行定义(最大长度64字节) */
  TaskId: string;
  /** 切分策略 */
  Policy?: string;
  /** 默认值: split */
  Operate?: string;
}

declare interface ParseDocResponse {
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryParseDocResultRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface QueryParseDocResultResponse {
  /** 等待 / 执行中 / 成功 / 失败 */
  Status?: string;
  /** 解析后的文件内容 */
  Name?: string;
  /** 文件下载地址 */
  Url?: string;
  /** 解析失败原因 */
  Reason?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryRewriteRequest {
  /** 需要改写的问题 */
  Question: string;
  /** 需要改写的多轮历史会话 */
  Messages: Message[];
  /** 模型名称 */
  Model?: string;
}

declare interface QueryRewriteResponse {
  /** 改写结果 */
  Content?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RateMsgRecordRequest {
  /** 机器人appKey */
  BotAppKey: string;
  /** 消息ID */
  RecordId: string;
  /** 1点赞2点踩 */
  Score: number;
  /** 原因 */
  Reasons?: string[];
}

declare interface RateMsgRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetSessionRequest {
  /** 会话ID */
  SessionId: string;
}

declare interface ResetSessionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryDocAuditRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
}

declare interface RetryDocAuditResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryDocParseRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
}

declare interface RetryDocParseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryReleaseRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 发布业务ID */
  ReleaseBizId: string;
}

declare interface RetryReleaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SaveDocRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文件名 */
  FileName: string;
  /** 文件类型(md|txt|docx|pdf|xlsx) */
  FileType: string;
  /** cos路径 */
  CosUrl: string;
  /** ETag 全称为 Entity Tag，是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化 */
  ETag: string;
  /** cos_hash x-cos-hash-crc64ecma 头部中的 CRC64编码进行校验上传到云端的文件和本地文件的一致性 */
  CosHash: string;
  /** 文件大小 */
  Size: string;
  /** 属性标签适用范围 1：全部，2：按条件范围 */
  AttrRange: number;
  /** 来源(0 源文件导入 1 网页导入) */
  Source?: number;
  /** 网页(或自定义链接)地址 */
  WebUrl?: string;
  /** 属性标签引用 */
  AttrLabels?: AttrLabelRefer[];
  /** 外部引用链接类型 0：系统链接 1：自定义链接值为1时，WebUrl 字段不能为空，否则不生效。 */
  ReferUrlType?: number;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 是否引用链接 */
  IsRefer?: boolean;
  /** 文档操作类型：1：批量导入；2:文档导入 */
  Opt?: number;
}

declare interface SaveDocResponse {
  /** 文档ID */
  DocBizId?: string;
  /** 导入错误信息 */
  ErrorMsg?: string;
  /** 错误链接 */
  ErrorLink?: string;
  /** 错误链接文本 */
  ErrorLinkText?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopDocParseRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
}

declare interface StopDocParseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadAttributeLabelRequest {
  /** 机器人ID */
  BotBizId: string;
  /** 文件名 */
  FileName: string;
  /** cos路径 */
  CosUrl: string;
  /** x-cos-hash-crc64ecma 头部中的 CRC64编码进行校验上传到云端的文件和本地文件的一致性 */
  CosHash: string;
  /** 文件大小 */
  Size: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface UploadAttributeLabelResponse {
  /** 导入错误 */
  ErrorMsg?: string;
  /** 错误链接 */
  ErrorLink?: string;
  /** 错误链接文本 */
  ErrorLinkText?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyQARequest {
  /** 问答列表 */
  List: QAList[];
  /** 机器人ID */
  BotBizId: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface VerifyQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Lke 大模型知识引擎} */
declare interface Lke {
  (): Versions;
  /** 检查属性下的标签名是否存在 {@link CheckAttributeLabelExistRequest} {@link CheckAttributeLabelExistResponse} */
  CheckAttributeLabelExist(data: CheckAttributeLabelExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAttributeLabelExistResponse>;
  /** 检查属性标签引用 {@link CheckAttributeLabelReferRequest} {@link CheckAttributeLabelReferResponse} */
  CheckAttributeLabelRefer(data: CheckAttributeLabelReferRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAttributeLabelReferResponse>;
  /** 创建应用 {@link CreateAppRequest} {@link CreateAppResponse} */
  CreateApp(data: CreateAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppResponse>;
  /** 创建属性 {@link CreateAttributeLabelRequest} {@link CreateAttributeLabelResponse} */
  CreateAttributeLabel(data: CreateAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAttributeLabelResponse>;
  /** 创建企业 {@link CreateCorpRequest} {@link CreateCorpResponse} */
  CreateCorp(data: CreateCorpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCorpResponse>;
  /** 录入问答 {@link CreateQARequest} {@link CreateQAResponse} */
  CreateQA(data: CreateQARequest, config?: AxiosRequestConfig): AxiosPromise<CreateQAResponse>;
  /** 创建QA分类 {@link CreateQACateRequest} {@link CreateQACateResponse} */
  CreateQACate(data: CreateQACateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQACateResponse>;
  /** 创建拒答问题 {@link CreateRejectedQuestionRequest} {@link CreateRejectedQuestionResponse} */
  CreateRejectedQuestion(data: CreateRejectedQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRejectedQuestionResponse>;
  /** 创建发布 {@link CreateReleaseRequest} {@link CreateReleaseResponse} */
  CreateRelease(data: CreateReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseResponse>;
  /** 删除应用 {@link DeleteAppRequest} {@link DeleteAppResponse} */
  DeleteApp(data: DeleteAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAppResponse>;
  /** 删除属性标签 {@link DeleteAttributeLabelRequest} {@link DeleteAttributeLabelResponse} */
  DeleteAttributeLabel(data: DeleteAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttributeLabelResponse>;
  /** 删除文档 {@link DeleteDocRequest} {@link DeleteDocResponse} */
  DeleteDoc(data: DeleteDocRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDocResponse>;
  /** 删除问答 {@link DeleteQARequest} {@link DeleteQAResponse} */
  DeleteQA(data: DeleteQARequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQAResponse>;
  /** 分类删除 {@link DeleteQACateRequest} {@link DeleteQACateResponse} */
  DeleteQACate(data: DeleteQACateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQACateResponse>;
  /** 删除拒答问题 {@link DeleteRejectedQuestionRequest} {@link DeleteRejectedQuestionResponse} */
  DeleteRejectedQuestion(data: DeleteRejectedQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRejectedQuestionResponse>;
  /** 获取企业下应用详情 {@link DescribeAppRequest} {@link DescribeAppResponse} */
  DescribeApp(data: DescribeAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppResponse>;
  /** 查询属性标签详情 {@link DescribeAttributeLabelRequest} {@link DescribeAttributeLabelResponse} */
  DescribeAttributeLabel(data: DescribeAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttributeLabelResponse>;
  /** 企业详情 {@link DescribeCorpRequest} {@link DescribeCorpResponse} */
  DescribeCorp(data?: DescribeCorpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCorpResponse>;
  /** 文档详情 {@link DescribeDocRequest} {@link DescribeDocResponse} */
  DescribeDoc(data: DescribeDocRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocResponse>;
  /** 问答详情 {@link DescribeQARequest} {@link DescribeQAResponse} */
  DescribeQA(data: DescribeQARequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQAResponse>;
  /** 获取来源详情列表 {@link DescribeReferRequest} {@link DescribeReferResponse} */
  DescribeRefer(data: DescribeReferRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReferResponse>;
  /** 发布详情 {@link DescribeReleaseRequest} {@link DescribeReleaseResponse} */
  DescribeRelease(data: DescribeReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseResponse>;
  /** 拉取发布按钮状态、最后发布时间 {@link DescribeReleaseInfoRequest} {@link DescribeReleaseInfoResponse} */
  DescribeReleaseInfo(data: DescribeReleaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseInfoResponse>;
  /** 通过appKey获取机器人业务ID {@link DescribeRobotBizIDByAppKeyRequest} {@link DescribeRobotBizIDByAppKeyResponse} */
  DescribeRobotBizIDByAppKey(data: DescribeRobotBizIDByAppKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRobotBizIDByAppKeyResponse>;
  /** 获取文件上传临时密钥 {@link DescribeStorageCredentialRequest} {@link DescribeStorageCredentialResponse} */
  DescribeStorageCredential(data: DescribeStorageCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStorageCredentialResponse>;
  /** 获取不满意回复上下文 {@link DescribeUnsatisfiedReplyContextRequest} {@link DescribeUnsatisfiedReplyContextResponse} */
  DescribeUnsatisfiedReplyContext(data: DescribeUnsatisfiedReplyContextRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnsatisfiedReplyContextResponse>;
  /** 导出属性标签 {@link ExportAttributeLabelRequest} {@link ExportAttributeLabelResponse} */
  ExportAttributeLabel(data: ExportAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAttributeLabelResponse>;
  /** 导出QA列表 {@link ExportQAListRequest} {@link ExportQAListResponse} */
  ExportQAList(data: ExportQAListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportQAListResponse>;
  /** 导出不满意回复 {@link ExportUnsatisfiedReplyRequest} {@link ExportUnsatisfiedReplyResponse} */
  ExportUnsatisfiedReply(data: ExportUnsatisfiedReplyRequest, config?: AxiosRequestConfig): AxiosPromise<ExportUnsatisfiedReplyResponse>;
  /** 文档生成问答 {@link GenerateQARequest} {@link GenerateQAResponse} */
  GenerateQA(data: GenerateQARequest, config?: AxiosRequestConfig): AxiosPromise<GenerateQAResponse>;
  /** 获取知识问答个数 {@link GetAppKnowledgeCountRequest} {@link GetAppKnowledgeCountResponse} */
  GetAppKnowledgeCount(data: GetAppKnowledgeCountRequest, config?: AxiosRequestConfig): AxiosPromise<GetAppKnowledgeCountResponse>;
  /** 获取应用密钥 {@link GetAppSecretRequest} {@link GetAppSecretResponse} */
  GetAppSecret(data: GetAppSecretRequest, config?: AxiosRequestConfig): AxiosPromise<GetAppSecretResponse>;
  /** 获取文档预览信息 {@link GetDocPreviewRequest} {@link GetDocPreviewResponse} */
  GetDocPreview(data: GetDocPreviewRequest, config?: AxiosRequestConfig): AxiosPromise<GetDocPreviewResponse>;
  /** 获取特征向量 {@link GetEmbeddingRequest} {@link GetEmbeddingResponse} */
  GetEmbedding(data: GetEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<GetEmbeddingResponse>;
  /** 获取聊天历史请求 {@link GetMsgRecordRequest} {@link GetMsgRecordResponse} */
  GetMsgRecord(data: GetMsgRecordRequest, config?: AxiosRequestConfig): AxiosPromise<GetMsgRecordResponse>;
  /** 查询任务状态 {@link GetTaskStatusRequest} {@link GetTaskStatusResponse} */
  GetTaskStatus(data: GetTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskStatusResponse>;
  /** 获取ws token {@link GetWsTokenRequest} {@link GetWsTokenResponse} */
  GetWsToken(data: GetWsTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetWsTokenResponse>;
  /** QA分组 {@link GroupQARequest} {@link GroupQAResponse} */
  GroupQA(data: GroupQARequest, config?: AxiosRequestConfig): AxiosPromise<GroupQAResponse>;
  /** 忽略不满意回复 {@link IgnoreUnsatisfiedReplyRequest} {@link IgnoreUnsatisfiedReplyResponse} */
  IgnoreUnsatisfiedReply(data: IgnoreUnsatisfiedReplyRequest, config?: AxiosRequestConfig): AxiosPromise<IgnoreUnsatisfiedReplyResponse>;
  /** 是否意图转人工 {@link IsTransferIntentRequest} {@link IsTransferIntentResponse} */
  IsTransferIntent(data: IsTransferIntentRequest, config?: AxiosRequestConfig): AxiosPromise<IsTransferIntentResponse>;
  /** 获取企业下应用列表 {@link ListAppRequest} {@link ListAppResponse} */
  ListApp(data?: ListAppRequest, config?: AxiosRequestConfig): AxiosPromise<ListAppResponse>;
  /** 应用类型列表 {@link ListAppCategoryRequest} {@link ListAppCategoryResponse} */
  ListAppCategory(data?: ListAppCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<ListAppCategoryResponse>;
  /** 查询属性标签列表 {@link ListAttributeLabelRequest} {@link ListAttributeLabelResponse} */
  ListAttributeLabel(data: ListAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ListAttributeLabelResponse>;
  /** 文档列表 {@link ListDocRequest} {@link ListDocResponse} */
  ListDoc(data: ListDocRequest, config?: AxiosRequestConfig): AxiosPromise<ListDocResponse>;
  /** 获取模型列表 {@link ListModelRequest} {@link ListModelResponse} */
  ListModel(data: ListModelRequest, config?: AxiosRequestConfig): AxiosPromise<ListModelResponse>;
  /** 问答列表 {@link ListQARequest} {@link ListQAResponse} */
  ListQA(data: ListQARequest, config?: AxiosRequestConfig): AxiosPromise<ListQAResponse>;
  /** 获取QA分类 {@link ListQACateRequest} {@link ListQACateResponse} */
  ListQACate(data: ListQACateRequest, config?: AxiosRequestConfig): AxiosPromise<ListQACateResponse>;
  /** 获取拒答问题 {@link ListRejectedQuestionRequest} {@link ListRejectedQuestionResponse} */
  ListRejectedQuestion(data: ListRejectedQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<ListRejectedQuestionResponse>;
  /** 发布拒答问题预览 {@link ListRejectedQuestionPreviewRequest} {@link ListRejectedQuestionPreviewResponse} */
  ListRejectedQuestionPreview(data: ListRejectedQuestionPreviewRequest, config?: AxiosRequestConfig): AxiosPromise<ListRejectedQuestionPreviewResponse>;
  /** 发布列表 {@link ListReleaseRequest} {@link ListReleaseResponse} */
  ListRelease(data: ListReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<ListReleaseResponse>;
  /** 发布配置项预览 {@link ListReleaseConfigPreviewRequest} {@link ListReleaseConfigPreviewResponse} */
  ListReleaseConfigPreview(data: ListReleaseConfigPreviewRequest, config?: AxiosRequestConfig): AxiosPromise<ListReleaseConfigPreviewResponse>;
  /** 发布文档预览 {@link ListReleaseDocPreviewRequest} {@link ListReleaseDocPreviewResponse} */
  ListReleaseDocPreview(data: ListReleaseDocPreviewRequest, config?: AxiosRequestConfig): AxiosPromise<ListReleaseDocPreviewResponse>;
  /** 发布问答预览 {@link ListReleaseQAPreviewRequest} {@link ListReleaseQAPreviewResponse} */
  ListReleaseQAPreview(data: ListReleaseQAPreviewRequest, config?: AxiosRequestConfig): AxiosPromise<ListReleaseQAPreviewResponse>;
  /** 获取文档下拉列表 {@link ListSelectDocRequest} {@link ListSelectDocResponse} */
  ListSelectDoc(data: ListSelectDocRequest, config?: AxiosRequestConfig): AxiosPromise<ListSelectDocResponse>;
  /** 查询不满意回复列表 {@link ListUnsatisfiedReplyRequest} {@link ListUnsatisfiedReplyResponse} */
  ListUnsatisfiedReply(data: ListUnsatisfiedReplyRequest, config?: AxiosRequestConfig): AxiosPromise<ListUnsatisfiedReplyResponse>;
  /** 修改应用请求结构体 {@link ModifyAppRequest} {@link ModifyAppResponse} */
  ModifyApp(data: ModifyAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppResponse>;
  /** 编辑属性标签 {@link ModifyAttributeLabelRequest} {@link ModifyAttributeLabelResponse} */
  ModifyAttributeLabel(data: ModifyAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAttributeLabelResponse>;
  /** 修改文档 {@link ModifyDocRequest} {@link ModifyDocResponse} */
  ModifyDoc(data: ModifyDocRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDocResponse>;
  /** 批量修改文档适用范围 {@link ModifyDocAttrRangeRequest} {@link ModifyDocAttrRangeResponse} */
  ModifyDocAttrRange(data: ModifyDocAttrRangeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDocAttrRangeResponse>;
  /** 更新问答 {@link ModifyQARequest} {@link ModifyQAResponse} */
  ModifyQA(data: ModifyQARequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQAResponse>;
  /** 批量修改问答适用范围 {@link ModifyQAAttrRangeRequest} {@link ModifyQAAttrRangeResponse} */
  ModifyQAAttrRange(data: ModifyQAAttrRangeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQAAttrRangeResponse>;
  /** 更新QA分类 {@link ModifyQACateRequest} {@link ModifyQACateResponse} */
  ModifyQACate(data: ModifyQACateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQACateResponse>;
  /** 修改拒答问题 {@link ModifyRejectedQuestionRequest} {@link ModifyRejectedQuestionResponse} */
  ModifyRejectedQuestion(data: ModifyRejectedQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRejectedQuestionResponse>;
  /** 文档解析 {@link ParseDocRequest} {@link ParseDocResponse} */
  ParseDoc(data: ParseDocRequest, config?: AxiosRequestConfig): AxiosPromise<ParseDocResponse>;
  /** 查询文档解析结果 {@link QueryParseDocResultRequest} {@link QueryParseDocResultResponse} */
  QueryParseDocResult(data: QueryParseDocResultRequest, config?: AxiosRequestConfig): AxiosPromise<QueryParseDocResultResponse>;
  /** 多轮改写 {@link QueryRewriteRequest} {@link QueryRewriteResponse} */
  QueryRewrite(data: QueryRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<QueryRewriteResponse>;
  /** 评价消息 {@link RateMsgRecordRequest} {@link RateMsgRecordResponse} */
  RateMsgRecord(data: RateMsgRecordRequest, config?: AxiosRequestConfig): AxiosPromise<RateMsgRecordResponse>;
  /** 重置会话 {@link ResetSessionRequest} {@link ResetSessionResponse} */
  ResetSession(data: ResetSessionRequest, config?: AxiosRequestConfig): AxiosPromise<ResetSessionResponse>;
  /** 文档审核重试 {@link RetryDocAuditRequest} {@link RetryDocAuditResponse} */
  RetryDocAudit(data: RetryDocAuditRequest, config?: AxiosRequestConfig): AxiosPromise<RetryDocAuditResponse>;
  /** 文档解析重试 {@link RetryDocParseRequest} {@link RetryDocParseResponse} */
  RetryDocParse(data: RetryDocParseRequest, config?: AxiosRequestConfig): AxiosPromise<RetryDocParseResponse>;
  /** 发布暂停后重试 {@link RetryReleaseRequest} {@link RetryReleaseResponse} */
  RetryRelease(data: RetryReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<RetryReleaseResponse>;
  /** 保存文档 {@link SaveDocRequest} {@link SaveDocResponse} */
  SaveDoc(data: SaveDocRequest, config?: AxiosRequestConfig): AxiosPromise<SaveDocResponse>;
  /** 终止文档解析 {@link StopDocParseRequest} {@link StopDocParseResponse} */
  StopDocParse(data: StopDocParseRequest, config?: AxiosRequestConfig): AxiosPromise<StopDocParseResponse>;
  /** 上传导入属性标签 {@link UploadAttributeLabelRequest} {@link UploadAttributeLabelResponse} */
  UploadAttributeLabel(data: UploadAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<UploadAttributeLabelResponse>;
  /** 校验问答 {@link VerifyQARequest} {@link VerifyQAResponse} */
  VerifyQA(data: VerifyQARequest, config?: AxiosRequestConfig): AxiosPromise<VerifyQAResponse>;
}

export declare type Versions = ["2023-11-30"];

export default Lke;
