/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 思考事件过程信息 */
declare interface AgentProcedure {
  /** 索引 */
  Index?: number | null;
  /** 执行过程英语名 */
  Name?: string | null;
  /** 中文名, 用于展示 */
  Title?: string | null;
  /** 状态常量: 使用中: processing, 成功: success, 失败: failed */
  Status?: string | null;
  /** 图标 */
  Icon?: string | null;
  /** Agent调试信息 */
  Debugging?: AgentProcedureDebugging | null;
  /** 是否切换Agent，取值为"main"或者"workflow",不切换为空 */
  Switch?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 当前请求执行时间, 单位 ms */
  Elapsed?: number | null;
  /** 工作流节点名称 */
  NodeName?: string | null;
  /** 用于展示思考放在哪个回复气泡中 */
  ReplyIndex?: number | null;
}

/** Agent思考过程调试信息 */
declare interface AgentProcedureDebugging {
  /** 模型思考内容 */
  Content?: string | null;
  /** 展示的具体文本内容 */
  DisplayContent?: string | null;
  /** 展示类型 */
  DisplayType?: number | null;
  /** 搜索引擎展示的索引 */
  QuoteInfos?: QuoteInfo[] | null;
  /** 具体的参考来源 */
  References?: AgentReference[] | null;
}

/** Agent中的参考来源 */
declare interface AgentReference {
  /** 来源文档ID */
  DocId?: string | null;
  /** id */
  Id?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 类型 */
  Type?: number | null;
  /** 链接 */
  Url?: string | null;
  /** 文档业务ID */
  DocBizId?: string | null;
  /** 文档名称 */
  DocName?: string | null;
  /** 问答业务ID */
  QaBizId?: string | null;
  /** 搜索引擎索引 */
  Index?: number | null;
  /** 标题 */
  Title?: string | null;
}

/** Agent的思考过程 */
declare interface AgentThought {
  /** 会话 ID */
  SessionId?: string | null;
  /** 请求 ID */
  RequestId?: string | null;
  /** 对应哪条会话, 会话 ID, 用于回答的消息存储使用, 可提前生成, 保存消息时使用 */
  RecordId?: string | null;
  /** 当前请求执行时间, 单位 ms */
  Elapsed?: number | null;
  /** 当前是否为工作流 */
  IsWorkflow?: boolean | null;
  /** 如果当前是工作流，工作流名称 */
  WorkflowName?: string | null;
  /** 具体思考过程详情 */
  Procedures?: AgentProcedure[] | null;
  /** TraceId */
  TraceId?: string | null;
}

/** 自定义变量和标签关系数据 */
declare interface ApiVarAttrInfo {
  /** 自定义变量id */
  ApiVarId?: string | null;
  /** 标签id */
  AttrBizId?: string | null;
}

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
  /** 生成模型别名 */
  ModelAliasName?: string | null;
  /** 应用模式 standard:标准模式, agent: agent模式，single_workflow：单工作流模式 */
  Pattern?: string | null;
  /** 思考模型别名 */
  ThoughtModelAliasName?: string | null;
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
  /** token余量 */
  TokenBalance?: number | null;
  /** 是否使用上下文指代轮次 */
  IsUseContext?: boolean | null;
  /** 上下文记忆轮数 */
  HistoryLimit?: number | null;
  /** 使用类型 */
  UsageType?: string | null;
  /** 模型温度 */
  Temperature?: string | null;
  /** 模型TopP */
  TopP?: string | null;
  /** 模型资源状态 1：资源可用；2：资源已用尽 */
  ResourceStatus?: number | null;
}

/** 标签详情信息 */
declare interface AttrLabel {
  /** 标签来源 */
  Source?: number | null;
  /** 标签ID */
  AttrBizId?: string | null;
  /** 标签标识 */
  AttrKey?: string | null;
  /** 标签名称 */
  AttrName?: string | null;
  /** 标签值 */
  Labels?: Label[] | null;
}

/** 标签详情 */
declare interface AttrLabelDetail {
  /** 标签ID */
  AttrBizId?: string | null;
  /** 标签标识 */
  AttrKey?: string | null;
  /** 标签名称 */
  AttrName?: string | null;
  /** 标签值名称 */
  LabelNames?: string[] | null;
  /** 标签是否在更新中 */
  IsUpdating?: boolean | null;
  /** 状态 */
  Status?: number | null;
  /** 状态描述 */
  StatusDesc?: string | null;
}

/** 标签引用信息 */
declare interface AttrLabelRefer {
  /** 标签来源，1：标签 */
  Source?: number;
  /** 标签ID */
  AttributeBizId?: string;
  /** 标签值ID */
  LabelBizIds?: string[];
}

/** 导出知识标签过滤器 */
declare interface AttributeFilters {
  /** 检索，属性或标签名称 */
  Query?: string;
}

/** 标签值 */
declare interface AttributeLabel {
  /** 标准词ID */
  LabelBizId?: string | null;
  /** 标准词名称 */
  LabelName?: string | null;
  /** 同义词名称 */
  SimilarLabels?: string[] | null;
}

/** 应用基础配置 */
declare interface BaseConfig {
  /** 应用名称 */
  Name: string;
  /** 应用头像url，在CreateApp和ModifyApp中作为入参必填。作为入参传入说明：1. 传入的url图片限制为jpeg和png，大小限制为500KB，url链接需允许head请求。2. 如果用户没有对象存储，可使用“获取文件上传临时密钥”(DescribeStorageCredential)接口，获取cos临时密钥和上传路径，自行上传头像至cos中并获取访问链接。 */
  Avatar: string;
  /** 应用描述 */
  Desc?: string;
}

/** 调用类型 */
declare interface CallDetail {
  /** 关联ID */
  Id?: string | null;
  /** 调用时间 */
  CallTime?: string | null;
  /** 总token消耗 */
  TotalTokenUsage?: number | null;
  /** 输入token消耗 */
  InputTokenUsage?: number | null;
  /** 输出token消耗 */
  OutputTokenUsage?: number | null;
  /** 搜索服务调用次数 */
  SearchUsage?: number | null;
  /** 模型名称 */
  ModelName?: string | null;
  /** 调用类型 */
  CallType?: string | null;
  /** 账号 */
  UinAccount?: string | null;
  /** 应用名称 */
  AppName?: string | null;
  /** 总消耗页数 */
  PageUsage?: number | null;
  /** 筛选子场景 */
  SubScene?: string | null;
}

/** 分类信息 */
declare interface CateInfo {
  /** 分类ID */
  CateBizId?: string | null;
  /** 分类名称 */
  Name?: string | null;
  /** 分类下的Record（如文档、同义词等）数量 */
  Total?: number | null;
  /** 是否可新增 */
  CanAdd?: boolean | null;
  /** 是否可编辑 */
  CanEdit?: boolean | null;
  /** 是否可删除 */
  CanDelete?: boolean | null;
  /** 子分类 */
  Children?: CateInfo[] | null;
}

/** 标签提取配置 */
declare interface ClassifyConfig {
  /** 模型配置 */
  Model?: AppModel | null;
  /** 标签列表 */
  Labels?: ClassifyLabel[] | null;
  /** 欢迎语，200字符以内 */
  Greeting?: string | null;
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
  /** 文档信息 */
  FileInfos?: MsgFileInfo[] | null;
  /** 回复方式，15：澄清确认回复 */
  ReplyMethod?: number | null;
}

/** 坐标 */
declare interface Coord {
  /** 横坐标 */
  X?: number;
  /** 纵坐标 */
  Y?: number;
}

/** 创建智能文档解析任务的配置信息 */
declare interface CreateReconstructDocumentFlowConfig {
  /** Markdown文件中表格返回的形式0，表格以MD形式返回1，表格以HTML形式返回默认为1 */
  TableResultType?: string;
  /** 智能文档解析返回结果的格式0：只返回全文MD；1：只返回每一页的OCR原始Json；2：只返回每一页的MD，3：返回全文MD + 每一页的OCR原始Json；4：返回全文MD + 每一页的MD，默认值为3（返回全文MD + 每一页的OCR原始Json） */
  ResultType?: string;
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

/** 文档片段 */
declare interface DocSegment {
  /** 片段ID */
  Id?: string | null;
  /** 业务ID */
  BusinessId?: string | null;
  /** 文件类型(markdown,word,txt) */
  FileType?: string | null;
  /** 文档切片类型(segment-文档切片 table-表格) */
  SegmentType?: string | null;
  /** 标题 */
  Title?: string | null;
  /** 段落内容 */
  PageContent?: string | null;
  /** 段落原文 */
  OrgData?: string | null;
  /** 文章ID */
  DocId?: string | null;
  /** 文档业务ID */
  DocBizId?: string | null;
  /** 文档链接 */
  DocUrl?: string | null;
}

/** 文档元素字段 */
declare interface DocumentElement {
  /** 文档元素索引 */
  Index?: number | null;
  /** 元素类型，包括paragraph、table、formula、figure、title、header、footer、figure_text */
  Type?: string | null;
  /** 元素内容，当type为figure或formula(公式识别关闭)时该字段内容为图片的位置 */
  Text?: string | null;
  /** 元素坐标，左上角(x1, y1)，右上角(x2, y2)，右下角(x3, y3)，左下角(x4, y4) */
  Polygon?: Polygon | null;
  /** 元素层级 */
  Level?: number | null;
  /** 入参开启EnableInsetImage后返回，表示在InsetImagePackage中的内嵌图片名称 */
  InsetImageName?: string | null;
  /** 嵌套的文档元素信息，一般包含的是文档内嵌入图片的文字识别结果 */
  Elements?: DocumentElement[] | null;
}

/** 单页文档识别的内容 */
declare interface DocumentRecognizeInfo {
  /** 输入PDF文件的页码，从1开始。输入图片的话值始终为1 */
  PageNumber?: number | null;
  /** 旋转角度 */
  Angle?: number | null;
  /** AI算法识别处理后的图片高度 */
  Height?: number | null;
  /** AI算法识别处理后的图片宽度 */
  Width?: number | null;
  /** 图片的原始高度，输入PDF文件则表示单页PDF转图片之后的图片高度 */
  OriginHeight?: number | null;
  /** 图片的原始宽度，输入PDF文件则表示单页PDF转图片之后的图片宽度 */
  OriginWidth?: number | null;
  /** 文档元素信息 */
  Elements?: DocumentElement[] | null;
  /** 旋转角度 */
  RotatedAngle?: number | null;
}

/** 向量 */
declare interface EmbeddingObject {
  /** 向量 */
  Embedding?: number[];
}

/** 实时上传的文件信息 */
declare interface FileInfo {
  /** 文件名称 */
  FileName?: string | null;
  /** 文件大小 */
  FileSize?: string | null;
  /** 文件的URL地址，COS地址 */
  FileUrl?: string | null;
  /** 文件类型 */
  FileType?: string | null;
  /** 解析后返回的DocID */
  DocId?: string | null;
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
  /** 高亮起始位置 */
  StartPos?: string | null;
  /** 高亮结束位置 */
  EndPos?: string | null;
  /** 高亮子文本 */
  Text?: string | null;
}

/** 多轮历史信息 */
declare interface HistorySummary {
  /** 助手 */
  Assistant?: string | null;
  /** 用户 */
  User?: string | null;
}

/** 请求的API信息 */
declare interface InvokeAPI {
  /** 请求方法，如GET/POST等 */
  Method?: string | null;
  /** 请求地址 */
  Url?: string | null;
  /** header参数 */
  HeaderValues?: StrValue[] | null;
  /** 入参Query */
  QueryValues?: StrValue[] | null;
  /** Post请求的原始数据 */
  RequestPostBody?: string | null;
  /** 返回的原始数据 */
  ResponseBody?: string | null;
  /** 出参 */
  ResponseValues?: ValueInfo[] | null;
  /** 异常信息 */
  FailMessage?: string | null;
}

/** 知识库容量饼图详情 */
declare interface KnowledgeCapacityPieGraphDetail {
  /** 当前应用名称 */
  AppName?: string | null;
  /** 当前应用使用的字符数 */
  UsedCharSize?: string | null;
  /** 当前应用对于总用量的占比 */
  Proportion?: number | null;
}

/** 应用使用知识库容量详情 */
declare interface KnowledgeDetail {
  /** 应用名称 */
  AppName?: string | null;
  /** 已用字符数 */
  UsedCharSize?: string | null;
  /** 使用占比 */
  Proportion?: number | null;
  /** 超量字符数 */
  ExceedCharSize?: string | null;
}

/** 知识问答配置 */
declare interface KnowledgeQaConfig {
  /** 欢迎语，200字符以内 */
  Greeting?: string | null;
  /** 角色描述，300字符以内 */
  RoleDescription?: string | null;
  /** 生成模型配置 */
  Model?: AppModel | null;
  /** 知识搜索配置 */
  Search?: KnowledgeQaSearch[] | null;
  /** 知识管理输出配置 */
  Output?: KnowledgeQaOutput | null;
  /** 工作流程配置 */
  Workflow?: KnowledgeWorkflow | null;
  /** 检索范围 */
  SearchRange?: SearchRange | null;
  /** 应用模式，standard:标准模式, agent: agent模式，single_workflow：单工作流模式 */
  Pattern?: string | null;
  /** 检索策略 */
  SearchStrategy?: SearchStrategy | null;
  /** 单工作流ID，Pattern为single_workflow时传入 */
  SingleWorkflow?: KnowledgeQaSingleWorkflow | null;
  /** 应用关联插件 */
  Plugins?: KnowledgeQaPlugin[] | null;
  /** 思考模型配置 */
  ThoughtModel?: AppModel | null;
}

/** 应用管理输出配置 */
declare interface KnowledgeQaOutput {
  /** 输出方式 1：流式 2：非流式 */
  Method?: number | null;
  /** 通用模型回复 */
  UseGeneralKnowledge?: boolean | null;
  /** 未知回复语，300字符以内 */
  BareAnswer?: string | null;
  /** 是否展示问题澄清开关 */
  ShowQuestionClarify?: boolean | null;
  /** 是否打开问题澄清 */
  UseQuestionClarify?: boolean | null;
  /** 问题澄清关键词列表 */
  QuestionClarifyKeywords?: string[] | null;
  /** 是否打开推荐问题开关 */
  UseRecommended?: boolean | null;
}

/** 应用关联插件信息 */
declare interface KnowledgeQaPlugin {
  /** 插件ID */
  PluginId?: string | null;
  /** 插件名称 */
  PluginName?: string;
  /** 插件图标 */
  PluginIcon?: string;
  /** 工具ID */
  ToolId?: string;
  /** 工具名称 */
  ToolName?: string;
  /** 工具描述 */
  ToolDesc?: string;
  /** 工具输入参数 */
  Inputs?: PluginToolReqParam[];
  /** 插件是否和知识库绑定 */
  IsBindingKnowledge?: boolean;
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
  /** 检索置信度，针对文档和问答有效，最小0.01，最大0.99 */
  Confidence?: number | null;
  /** 资源状态 1：资源可用；2：资源已用尽 */
  ResourceStatus?: number | null;
}

/** 问答知识库单工作流模式下指定单工作流配置 */
declare interface KnowledgeQaSingleWorkflow {
  /** 工作流ID */
  WorkflowId?: string;
  /** 工作流名称 */
  WorkflowName?: string;
  /** 工作流描述 */
  WorkflowDesc?: string;
  /** 工作流状态，发布状态(UNPUBLISHED: 待发布 PUBLISHING: 发布中 PUBLISHED: 已发布 FAIL:发布失败) */
  Status?: string;
  /** 工作流是否启用 */
  IsEnable?: boolean;
}

/** 检索知识 */
declare interface KnowledgeSummary {
  /** 1是问答 2是文档片段 */
  Type?: number | null;
  /** 知识内容 */
  Content?: string | null;
}

/** 问答知识库工作流配置 */
declare interface KnowledgeWorkflow {
  /** 是否启用工作流 */
  IsEnabled?: boolean | null;
  /** 是否启用PDL */
  UsePdl?: boolean | null;
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
  /** 重命名的新文档名称，在重命名提交之后，文档发布之前都是这个名称 */
  NewName?: string;
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
  /** 是否允许重试，0：否，1：是 */
  IsAllowRetry?: boolean | null;
  /** 0:文档比对处理 1:文档生成问答 */
  Processing?: number[] | null;
  /** 文档创建落库时间 */
  CreateTime?: string | null;
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
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 属性标签适用范围 1：全部，2：按条件 */
  AttrRange?: number;
  /** 属性标签 */
  AttrLabels?: AttrLabel[];
  /** 相似问个数 */
  SimilarQuestionNum?: number;
  /** 返回问答关联的相似问,联动搜索,仅展示一条 */
  SimilarQuestionTips?: string;
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
  /** 资源状态 1：资源可用；2：资源已用尽 */
  ResourceStatus?: number | null;
  /** 提示词内容字符限制 */
  PromptWordsLimit?: string | null;
  /** 通过核心采样控制内容生成的多样性，较高的Top P值会导致生成更多样的内容 */
  TopP?: ModelParameter | null;
  /** 温度控制随机性 */
  Temperature?: ModelParameter | null;
  /** 最多能生成的token数量 */
  MaxTokens?: ModelParameter | null;
  /** 模型来源 Hunyuan：腾讯混元大模型,Industry：腾讯云行业大模型,Experience：新模型体验,Custom自定义模型 */
  Source?: string;
  /** 模型图标 */
  Icon?: string;
  /** 是否免费 */
  IsFree?: boolean;
  /** 模型对话框可输入的上限 */
  InputLenLimit?: number | null;
  /** 支持工作流的类型 0:模型不支持; 1: 模型支持工作流； 2： 模型支持效果不佳； */
  SupportWorkflowStatus?: number | null;
  /** 模型类别 generate：生成模型，thought：思考模型 */
  ModelCategory?: string;
}

/** 模型参数范围 */
declare interface ModelParameter {
  /** 默认值 */
  Default?: number | null;
  /** 最小值 */
  Min?: number | null;
  /** 最大值 */
  Max?: number | null;
}

/** 文档信息 */
declare interface MsgFileInfo {
  /** 文档名称 */
  FileName?: string | null;
  /** 文档大小 */
  FileSize?: string | null;
  /** 文档URL */
  FileUrl?: string | null;
  /** 文档类型 */
  FileType?: string | null;
  /** 文档ID */
  DocId?: string | null;
}

/** 消息详情 */
declare interface MsgRecord {
  /** 内容 */
  Content?: string;
  /** 当前记录所对应的 Session ID */
  SessionId?: string | null;
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
  /** 是否展示反馈按钮 */
  CanFeedback?: boolean | null;
  /** 记录类型 */
  Type?: number;
  /** 引用来源 */
  References?: MsgRecordReference[];
  /** 评价原因 */
  Reasons?: string[];
  /** 是否大模型 */
  IsLlmGenerated?: boolean;
  /** 图片链接，可公有读 */
  ImageUrls?: string[] | null;
  /** 当次 token 统计信息 */
  TokenStat?: TokenStat | null;
  /** 回复方式1:大模型直接回复;2:保守回复, 未知问题回复;3:拒答问题回复;4:敏感回复;5:问答对直接回复, 已采纳问答对优先回复;6:欢迎语回复;7:并发超限回复;8:全局干预知识;9:任务流程过程回复, 当历史记录中 task_flow.type = 0 时, 为大模型回复;10:任务流程答案回复;11:搜索引擎回复;12:知识润色后回复;13:图片理解回复;14:实时文档回复; */
  ReplyMethod?: number | null;
  /** 选项卡, 用于多轮对话 */
  OptionCards?: string[] | null;
  /** 任务信息 */
  TaskFlow?: TaskFlowInfo | null;
  /** 用户传入的文件信息 */
  FileInfos?: FileInfo[] | null;
  /** 参考来源引用位置信息 */
  QuoteInfos?: QuoteInfo[] | null;
  /** Agent的思考过程信息 */
  AgentThought?: AgentThought | null;
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

/** 插件参数请求结构 */
declare interface PluginToolReqParam {
  /** 参数名称 */
  Name?: string;
  /** 参数描述 */
  Desc?: string;
  /** 参数类型，0:string, 1:int, 2:float，3:bool 4:object 5:array_string, 6:array_int, 7:array_float, 8:array_bool, 9:array_object */
  Type?: number;
  /** 参数是否必填 */
  IsRequired?: boolean;
  /** 参数默认值 */
  DefaultValue?: string;
  /** 子参数,ParamType 是OBJECT 或 ARRAY<>类型有用 */
  SubParams?: PluginToolReqParam[];
}

/** 文本的坐标，以四个顶点坐标表示注意：此字段可能返回 null，表示取不到有效值 */
declare interface Polygon {
  /** 左上顶点坐标 */
  LeftTop?: Coord;
  /** 右上顶点坐标 */
  RightTop?: Coord;
  /** 右下顶点坐标 */
  RightBottom?: Coord;
  /** 左下顶点坐标 */
  LeftBottom?: Coord;
}

/** 执行过程信息记录 */
declare interface Procedure {
  /** 执行过程英语名 */
  Name?: string | null;
  /** 中文名, 用于展示 */
  Title?: string | null;
  /** 状态常量: 使用中: processing, 成功: success, 失败: failed */
  Status?: string | null;
  /** 消耗 token 数 */
  Count?: number | null;
  /** 调试信息 */
  Debugging?: ProcedureDebugging | null;
  /** 计费资源状态，1：可用，2：不可用 */
  ResourceStatus?: number | null;
}

/** 调试信息 */
declare interface ProcedureDebugging {
  /** 检索query */
  Content?: string | null;
  /** 系统prompt */
  System?: string | null;
  /** 多轮历史信息 */
  Histories?: HistorySummary[] | null;
  /** 检索知识 */
  Knowledge?: KnowledgeSummary[] | null;
  /** 任务流程 */
  TaskFlow?: TaskFlowSummary | null;
  /** 工作流调试信息 */
  WorkFlow?: WorkFlowSummary | null;
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
  /** 应用ID */
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
  /** 查询类型 filename 名称、 attribute 标签 */
  QueryType?: string;
}

/** 搜索引擎参考来源索引 */
declare interface QuoteInfo {
  /** 参考来源位置 */
  Position?: number | null;
  /** 参考来源索引顺序 */
  Index?: string | null;
}

/** 重排数据, 计算2段内容的关联性 */
declare interface ReRankDataObject {
  /** 第一段内容 */
  PromptA: string;
  /** 第二段内容 */
  PromptB: string;
}

/** ReconstructDocument配置选项 */
declare interface ReconstructDocumentConfig {
  /** 生成的Markdown中是否嵌入图片 */
  EnableInsetImage?: boolean;
}

/** 文档解析失败记录 */
declare interface ReconstructDocumentFailedPage {
  /** 失败页码 */
  PageNumber?: number | null;
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
  /** 页码信息 */
  PageInfos?: number[] | null;
  /** sheet信息 */
  SheetInfos?: string[] | null;
  /** 文档ID */
  DocBizId?: string | null;
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
  /** 来源1:文档生成，2：批量导入，3：手动添加 */
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

/** 节点信息 */
declare interface RunNodeInfo {
  /** 节点类型，0:未指定，1:开始节点，2:API节点，3:询问节点，4:答案节点 */
  NodeType?: number | null;
  /** 节点ID */
  NodeId?: string | null;
  /** 节点名称 */
  NodeName?: string | null;
  /** 请求的API */
  InvokeApi?: InvokeAPI | null;
  /** 当前节点的所有槽位的值，key：SlotID。没有值的时候也要返回空。 */
  SlotValues?: ValueInfo[] | null;
}

/** 检索范围配置 */
declare interface SearchRange {
  /** 检索条件and/or */
  Condition?: string | null;
  /** 自定义变量和标签关系数据 */
  ApiVarAttrInfos?: ApiVarAttrInfo[] | null;
}

/** 知识库检索策略 */
declare interface SearchStrategy {
  /** 检索策略类型 0:混合检索，1：语义检索 */
  StrategyType?: number | null;
  /** Excel检索增强开关 */
  TableEnhancement?: boolean | null;
}

/** 相似问信息 */
declare interface SimilarQuestion {
  /** 相似问ID */
  SimBizId?: string | null;
  /** 相似问内容 */
  Question?: string | null;
  /** 相似问审核状态，1审核失败 */
  AuditStatus?: number | null;
}

/** 相似问修改(更新)信息 */
declare interface SimilarQuestionModify {
  /** 需要添加的相似问(内容)列表 */
  AddQuestions?: string[];
  /** 需要更新的相似问列表 */
  UpdateQuestions?: SimilarQuestion[];
  /** 需要删除的相似问列表 */
  DeleteQuestions?: SimilarQuestion[];
}

/** 计费统计信息 */
declare interface Stat {
  /** X轴: 时间区域；根据查询条件的粒度返回“分/小时/日”三种区间范围 */
  X?: string | null;
  /** Y轴: 该时间区域内的统计值，如token消耗量，调用次数或使用量等信息 */
  Y?: number | null;
}

/** 大模型token统计信息 */
declare interface StatisticInfo {
  /** 模型名称 */
  ModelName?: string | null;
  /** 首Token耗时 */
  FirstTokenCost?: number | null;
  /** 总耗时 */
  TotalCost?: number | null;
  /** 输入Token数量 */
  InputTokens?: number | null;
  /** 输出Token数量 */
  OutputTokens?: number | null;
  /** 总Token数量 */
  TotalTokens?: number | null;
}

/** 字符串KV信息 */
declare interface StrValue {
  /** 名称 */
  Name?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 知识摘要应用配置 */
declare interface SummaryConfig {
  /** 模型配置 */
  Model?: AppModel | null;
  /** 知识摘要输出配置 */
  Output?: SummaryOutput | null;
  /** 欢迎语，200字符以内 */
  Greeting?: string | null;
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

/** 变量详情 */
declare interface TaskFLowVar {
  /** 变量ID */
  VarId?: string | null;
  /** 变量名称 */
  VarName?: string | null;
  /** 变量描述（默认为"-"） */
  VarDesc?: string;
  /** 变量类型 (STRING,INT,FLOAT,BOOL,OBJECT,ARRAY_STRING,ARRAY_INT,ARRAY_FLOAT,ARRAY_BOOL,ARRAY_OBJECT,FILE,DOCUMENT,IMAGE,AUDIO) */
  VarType?: string;
}

/** 任务流程信息 */
declare interface TaskFlowInfo {
  /** 任务流程ID */
  TaskFlowId?: string | null;
  /** 任务流程名称 */
  TaskFlowName?: string | null;
  /** Query 重写结果 */
  QueryRewrite?: string | null;
  /** 命中意图 */
  HitIntent?: string | null;
  /** 任务流程回复类型0: 任务流回复1: 任务流静默2: 任务流拉回话术3: 任务流自定义回复 */
  Type?: number | null;
}

/** 任务流程调试信息 */
declare interface TaskFlowSummary {
  /** 任务流程名 */
  IntentName?: string | null;
  /** 实体列表 */
  UpdatedSlotValues?: ValueInfo[] | null;
  /** 节点列表 */
  RunNodes?: RunNodeInfo[] | null;
  /** 意图判断 */
  Purposes?: string[] | null;
}

/** 任务参数 */
declare interface TaskParams {
  /** 下载地址,需要通过cos桶临时密钥去下载 */
  CosPath?: string | null;
}

/** 当前执行的 token 统计信息 */
declare interface TokenStat {
  /** 会话 ID */
  SessionId?: string | null;
  /** 请求 ID */
  RequestId?: string | null;
  /** 对应哪条会话, 会话 ID, 用于回答的消息存储使用, 可提前生成, 保存消息时使用 */
  RecordId?: string | null;
  /** token 已使用数 */
  UsedCount?: number | null;
  /** 免费 token 数 */
  FreeCount?: number | null;
  /** 订单总 token 数 */
  OrderCount?: number | null;
  /** 当前执行状态汇总, 常量: 使用中: processing, 成功: success, 失败: failed */
  StatusSummary?: string | null;
  /** 当前执行状态汇总后中文展示 */
  StatusSummaryTitle?: string | null;
  /** 当前请求执行时间, 单位 ms */
  Elapsed?: number | null;
  /** 当前请求消耗 token 数 */
  TokenCount?: number | null;
  /** 执行过程信息 */
  Procedures?: Procedure[] | null;
  /** 执行过程信息TraceId */
  TraceId?: string | null;
}

/** 不满意回复 */
declare interface UnsatisfiedReply {
  /** 不满意回复ID */
  ReplyBizId?: string | null;
  /** 消息记录ID */
  RecordBizId?: string | null;
  /** 用户问题 */
  Question?: string | null;
  /** 应用回复 */
  Answer?: string | null;
  /** 错误类型 */
  Reasons?: string[] | null;
}

/** 消耗量 */
declare interface Usage {
  /** 文档页数 */
  TotalPages?: number;
  /** 输入token数 */
  InputTokens?: number;
  /** 输出token数 */
  OutputTokens?: number;
  /** 总token数 */
  TotalTokens?: number;
}

/** 任务流程参数信息 */
declare interface ValueInfo {
  /** 值ID */
  Id?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 值类型：0:未知或者空, 1:string, 2:int, 3:float, 4:bool, 5:array(字符串数组), 6: object_array(结构体数组), 7: object(结构体) */
  ValueType?: number | null;
  /** string */
  ValueStr?: string | null;
  /** int（避免精度丢失使用字符串返回） */
  ValueInt?: string | null;
  /** float */
  ValueFloat?: number | null;
  /** bool */
  ValueBool?: boolean | null;
  /** array */
  ValueStrArray?: string[] | null;
}

/** 解析为 word 文档的结果 */
declare interface WordRecognizeInfo {
  /** 输入文件的页码数 */
  PageNumber?: number | null;
  /** word的base64 */
  WordBase64?: string | null;
}

/** 工作流程调试信息 */
declare interface WorkFlowSummary {
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 节点信息 */
  RunNodes?: WorkflowRunNodeInfo[] | null;
}

/** 工作流运行节点信息 */
declare interface WorkflowRunNodeInfo {
  /** 节点ID */
  NodeId?: string | null;
  /** 节点类型 */
  NodeType?: number | null;
  /** 节点名称 */
  NodeName?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 输入 */
  Input?: string | null;
  /** 输出 */
  Output?: string | null;
  /** 任务输出 */
  TaskOutput?: string | null;
  /** 错误信息 */
  FailMessage?: string | null;
  /** 花费时长 */
  CostMilliSeconds?: number | null;
  /** 大模型输出信息 */
  StatisticInfos?: StatisticInfo[] | null;
}

declare interface CheckAttributeLabelExistRequest {
  /** 应用ID */
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
  /** 应用ID */
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

declare interface ConvertDocumentRequest {
  /** 图片的 Url 地址。 支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。 支持的图片大小：所下载图片经 Base64 编码后不超过 8M。图片下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  FileUrl?: string;
  /** 图片的 Base64 值。 支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。 支持的图片大小：所下载图片经Base64编码后不超过 8M。图片下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  FileBase64?: string;
  /** 当传入文件是PDF类型（FileType=PDF）时，用来指定pdf识别的起始页码，识别的页码包含当前值。 */
  FileStartPageNumber?: number;
  /** 当传入文件是PDF类型（FileType=PDF）时，用来指定pdf识别的结束页码，识别的页码包含当前值。建议一次请求的页面不超过3页。 */
  FileEndPageNumber?: number;
}

declare interface ConvertDocumentResponse {
  /** 识别生成的word文件base64编码的字符串 */
  WordRecognizeInfo?: WordRecognizeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAppRequest {
  /** 应用类型；knowledge_qa-知识问答管理 */
  AppType: string;
  /** 应用基础配置 */
  BaseConfig: BaseConfig;
}

declare interface CreateAppResponse {
  /** 应用ID */
  AppBizId?: string | null;
  /** 判断账户应用列表权限是否是自定义的，用户交互提示 */
  IsCustomList?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAttributeLabelRequest {
  /** 应用ID */
  BotBizId: string;
  /** 标签名 */
  AttrName: string;
  /** 标签值 */
  Labels: AttributeLabel[];
  /** 标签标识（不生效，无需填写） 已作废 */
  AttrKey?: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface CreateAttributeLabelResponse {
  /** 标签ID */
  AttrBizId?: string;
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

declare interface CreateDocCateRequest {
  /** 应用ID */
  BotBizId: string;
  /** 父级业务ID */
  ParentBizId: string;
  /** 分类名称 */
  Name: string;
}

declare interface CreateDocCateResponse {
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

declare interface CreateQACateRequest {
  /** 应用ID */
  BotBizId: string;
  /** 父级业务ID，创建顶级分类时传字符串"0" */
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
  /** 应用ID */
  BotBizId: string;
  /** 问题 */
  Question: string;
  /** 答案 */
  Answer: string;
  /** 标签适用范围 1：全部，2：按条件 */
  AttrRange: number;
  /** 自定义参数 */
  CustomParam?: string;
  /** 标签引用 */
  AttrLabels?: AttrLabelRefer[];
  /** 文档ID */
  DocBizId?: string;
  /** 分类ID */
  CateBizId?: string;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 相似问内容 */
  SimilarQuestions?: string[];
  /** 问题描述 */
  QuestionDesc?: string;
}

declare interface CreateQAResponse {
  /** 问答ID */
  QaBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReconstructDocumentFlowRequest {
  /** 文件类型。支持的文件类型：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2。 */
  FileType?: string;
  /** 文件的 Base64 值。支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。支持的图片像素：单边介于20-10000px之间。文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。 */
  FileBase64?: string;
  /** 文件的Url地址。文件下载时间不超过15秒。支持的图片像素：单边介于20-10000px之间。文件存储于腾讯云的Url可保障更高的下载速度和稳定性，建议文件存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。所下载文件经 Base64 编码后不超过支持的文件大小： 文件类型 支持的文件大小 PDF 200M DOC 200M DOCX 200M PPT 200M PPTX 200M MD 10M TXT 10M XLS 20M XLSX 20M CSV 20M PNG 20M JPG 20M JPEG 20M BMP 20M GIF 20M WEBP 20M HEIC 20M EPS 20M ICNS 20M IM 20M PCX 20M PPM 20M TIFF 20M XBM 20M HEIF 20M JP2 20M */
  FileUrl?: string;
  /** 当传入文件类型为PDF、DOC、DOCX、PPT、PPTX，用来指定文件识别的起始页码，识别的页码包含当前值。默认为1，表示从文件的第1页开始识别。 */
  FileStartPageNumber?: number;
  /** 当传入文件类型为PDF、DOC、DOCX、PPT、PPTX，用来指定文件识别的结束页码，识别的页码包含当前值。默认为100，表示识别到文件的第100页。单次调用最多支持识别1000页内容，即FileEndPageNumber-FileStartPageNumber需要不大于1000。 */
  FileEndPageNumber?: number;
  /** 创建文档解析任务配置信息。 */
  Config?: CreateReconstructDocumentFlowConfig;
}

declare interface CreateReconstructDocumentFlowResponse {
  /** 任务唯一ID。30天内可以通过[GetReconstructDocumentResult](https://cloud.tencent.com/document/product/1759/107505)接口查询TaskId对应的处理结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRejectedQuestionRequest {
  /** 应用ID */
  BotBizId: string;
  /** 拒答问题 */
  Question: string;
  /** 拒答问题来源的数据源唯一id， - 拒答来源于不满意回复 2 - 拒答来源于手动添加 */
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

declare interface CreateVarRequest {
  /** 应用ID */
  AppBizId: string;
  /** 变量名称，不允许重复，最大支持50个字符 */
  VarName: string;
  /** 变量描述，最大支持120个字符 */
  VarDesc?: string;
  /** 变量类型定义，支持类型如下：(STRING,INT,FLOAT,BOOL,OBJECT,ARRAY_STRING,ARRAY_INT,ARRAY_FLOAT,ARRAY_BOOL,ARRAY_OBJECT,FILE,DOCUMENT,IMAGE,AUDIO);传输过程是json字符串，标签中仅支持"STRING"类型使用 */
  VarType?: string;
}

declare interface CreateVarResponse {
  /** 变量ID */
  VarId?: string;
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
  /** 应用ID */
  BotBizId: string;
  /** 标签ID */
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

declare interface DeleteDocCateRequest {
  /** 应用ID */
  BotBizId: string;
  /** 分类业务ID */
  CateBizId: string;
}

declare interface DeleteDocCateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDocRequest {
  /** 文档业务ID列表 */
  DocBizIds: string[];
  /** 应用ID */
  BotBizId: string;
}

declare interface DeleteDocResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQACateRequest {
  /** 应用ID */
  BotBizId: string;
  /** 分类业务ID */
  CateBizId: string;
}

declare interface DeleteQACateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQARequest {
  /** 应用ID */
  BotBizId: string;
  /** 问答ID */
  QaBizIds: string[];
}

declare interface DeleteQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRejectedQuestionRequest {
  /** 应用ID */
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
  /** 应用状态，1：未上线，2：运行中，3：停用 */
  AppStatus?: number;
  /** 状态说明 */
  AppStatusDesc?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttributeLabelRequest {
  /** 应用ID */
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

declare interface DescribeCallStatsGraphRequest {
  /** uin */
  UinAccount?: string[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 子业务类型 */
  SubBizType?: string;
  /** 模型标识 */
  ModelName?: string;
  /** 开始时间戳, 单位为秒 */
  StartTime?: string;
  /** 结束时间戳, 单位为秒 */
  EndTime?: string;
  /** 应用id列表 */
  AppBizIds?: string[];
  /** 筛选子场景(文档解析场景使用) */
  SubScenes?: string[];
}

declare interface DescribeCallStatsGraphResponse {
  /** 接口调用次数统计信息 */
  List?: Stat[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConcurrencyUsageGraphRequest {
  /** 模型标识 */
  ModelName: string;
  /** 开始时间戳, 单位为秒 */
  StartTime: string;
  /** 结束时间戳, 单位为秒 */
  EndTime: string;
  /** uin */
  UinAccount?: string[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 子业务类型 */
  SubBizType?: string;
  /** 应用id列表 */
  AppBizIds?: string[];
}

declare interface DescribeConcurrencyUsageGraphResponse {
  /** X轴: 时间区域；根据查询条件的粒度返回“分/小时/日”两种区间范围 */
  X?: string[];
  /** 可用并发y轴坐标 */
  AvailableY?: number[];
  /** 成功调用并发y轴坐标 */
  SuccessCallY?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConcurrencyUsageRequest {
  /** 模型标识 */
  ModelName: string;
  /** 开始时间戳, 单位为秒 */
  StartTime: string;
  /** 结束时间戳, 单位为秒 */
  EndTime: string;
  /** 应用id列表 */
  AppBizIds?: string[];
}

declare interface DescribeConcurrencyUsageResponse {
  /** 可用并发数上限 */
  AvailableConcurrency?: number;
  /** 并发峰值 */
  ConcurrencyPeak?: number;
  /** 超出可用并发数上限的次数 */
  ExceedUsageTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCorpRequest {
}

declare interface DescribeCorpResponse {
  /** 企业ID */
  CorpBizId?: string;
  /** 应用配额 */
  RobotQuota?: number;
  /** 企业全称 */
  FullName?: string;
  /** 是否试用 */
  IsTrial?: boolean;
  /** 是否试用过期 */
  IsTrialExpired?: boolean;
  /** 可用应用数量 */
  AvailableAppQuota?: number;
  /** 是否支持自定义模型配置 */
  IsSupportCustomModel?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocRequest {
  /** 应用ID */
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
  /** 文档状态： 1-未生成 2-生成中 3-生成成功 4-生成失败 5-删除中 6-删除成功 7-审核中 8-审核失败 9-审核成功 10-待发布 11-发布中 12-已发布 13-学习中 14-学习失败 15-更新中 16-更新失败 17-解析中 18-解析失败 19-导入失败 20-已过期 21-超量失效 22-超量失效恢复 */
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
  /** 标签适用范围 1：全部，2：按条件范围 */
  AttrRange?: number;
  /** 标签 */
  AttrLabels?: AttrLabel[];
  /** 分类ID */
  CateBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKnowledgeUsagePieGraphRequest {
  /** 应用ID数组 */
  AppBizIds?: string[];
}

declare interface DescribeKnowledgeUsagePieGraphResponse {
  /** 所有应用已用的字符总数 */
  AvailableCharSize?: string;
  /** 应用饼图详情列表 */
  List?: KnowledgeCapacityPieGraphDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKnowledgeUsageRequest {
}

declare interface DescribeKnowledgeUsageResponse {
  /** 可用字符数上限 */
  AvailableCharSize?: string;
  /** 超过可用字符数上限的字符数 */
  ExceedCharSize?: string;
  /** 知识库使用字符总数 */
  UsedCharSize?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQARequest {
  /** QA业务ID */
  QaBizId: string;
  /** 应用ID */
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
  /** 来源 1-文档生成问答对 2-批量导入问答对 3-单条手动录入问答对 */
  Source?: number;
  /** 来源描述 */
  SourceDesc?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 状态 1-未校验 2-未发布 3-发布中 4-已发布 5-发布失败 6-不采纳 7-审核中 8-审核失败 9-审核失败申诉后人工审核中 11-审核失败申诉后人工审核不通过 12-已过期 13-超量失效 14-超量失效恢复 19-学习中 20-学习失败 */
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
  /** 标签适用范围 */
  AttrRange?: number;
  /** 标签 */
  AttrLabels?: AttrLabel[];
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 相似问列表信息 */
  SimilarQuestions?: SimilarQuestion[];
  /** 问题和答案文本审核状态 1审核失败 */
  QaAuditStatus?: number;
  /** 答案中的图片审核状态 1审核失败 */
  PicAuditStatus?: number;
  /** 答案中的视频审核状态 1审核失败 */
  VideoAuditStatus?: number;
  /** 问题描述 */
  QuestionDesc?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReferRequest {
  /** 应用ID */
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
  /** 应用ID */
  BotBizId: string;
}

declare interface DescribeReleaseInfoResponse {
  /** 最后发布时间 */
  LastTime?: string;
  /** 发布状态 ， 1-待发布 , 2-发布中 , 3-发布成功 , 4-发布失败 , 5-审核中 , 6-审核成功 , 7-审核失败 , 8-发布成功回调处理中 , 9-发布暂停 , 10-申诉审核中 , 11-申诉审核通过 , 12-申诉审核不通过 */
  Status?: number;
  /** 是否编辑过, 当为true的时候表示可以发布 */
  IsUpdated?: boolean;
  /** 失败原因 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseRequest {
  /** 应用ID */
  BotBizId: string;
  /** 发布详情 */
  ReleaseBizId?: string;
}

declare interface DescribeReleaseResponse {
  /** 创建时间 */
  CreateTime?: string;
  /** 发布描述 */
  Description?: string;
  /** 发布状态(1待发布 2发布中 3发布成功 4发布失败 5发布中(审核中) 6发布中(审核完成) 7发布失败(审核失败) 9发布暂停) */
  Status?: number;
  /** 发布状态描述 */
  StatusDesc?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRobotBizIDByAppKeyRequest {
  /** 应用appkey */
  AppKey: string;
}

declare interface DescribeRobotBizIDByAppKeyResponse {
  /** 应用业务ID */
  BotBizId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSearchStatsGraphRequest {
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** uin列表 */
  UinAccount?: string[];
  /** 子业务类型 */
  SubBizType?: string;
  /** 模型标识 */
  ModelName?: string;
  /** 开始时间戳, 单位为秒 */
  StartTime?: string;
  /** 结束时间戳, 单位为秒 */
  EndTime?: string;
  /** 应用id列表 */
  AppBizIds?: string[];
}

declare interface DescribeSearchStatsGraphResponse {
  /** 统计结果 */
  List?: Stat[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSegmentsRequest {
  /** 应用ID */
  BotBizId: string;
  /** 文档片段ID */
  SegBizId?: string[];
}

declare interface DescribeSegmentsResponse {
  /** 片段列表 */
  List?: DocSegment[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStorageCredentialRequest {
  /** 应用ID，参数非必填不代表不需要填写，下面不同的参数组合会获取到不同的权限，具体请参考 https://cloud.tencent.com/document/product/1759/116238 */
  BotBizId?: string;
  /** 文件类型,正常的文件名类型后缀，例如 xlsx、pdf、 docx、png 等 */
  FileType?: string;
  /** IsPublic用于上传文件或图片时选择场景，当上传对话端图片时IsPublic为true，上传文件（包括文档库文件/图片等和对话端文件）时IsPublic为false */
  IsPublic?: boolean;
  /** 存储类型: offline:离线文件，realtime:实时文件；为空默认为offline */
  TypeKey?: string;
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
  /** 文件存储目录 */
  FilePath?: string;
  /** 存储类型 */
  Type?: string;
  /** 主号 */
  CorpUin?: string;
  /** 图片存储目录 */
  ImagePath?: string;
  /** 上传存储路径，到具体文件 */
  UploadPath?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTokenUsageGraphRequest {
  /** 腾讯云主账号 */
  UinAccount?: string[];
  /** 知识引擎子业务类型: FileParse(文档解析)、Embedding、Rewrite(多轮改写)、 Concurrency(并发)、KnowledgeSummary(知识总结) KnowledgeQA(知识问答)、KnowledgeCapacity(知识库容量)、SearchEngine(搜索引擎) */
  SubBizType?: string;
  /** 模型标识 */
  ModelName?: string;
  /** 开始时间戳, 单位为秒 */
  StartTime?: string;
  /** 结束时间戳, 单位为秒 */
  EndTime?: string;
  /** 应用id列表 */
  AppBizIds?: string[];
}

declare interface DescribeTokenUsageGraphResponse {
  /** Token消耗总量 */
  Total?: Stat[];
  /** 输入Token消耗量 */
  Input?: Stat[];
  /** 输出Token消耗量 */
  Output?: Stat[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTokenUsageRequest {
  /** 腾讯云主账号 */
  UinAccount?: string[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 知识引擎子业务类型: FileParse(文档解析)、Embedding、Rewrite(多轮改写)、 Concurrency(并发)、KnowledgeSummary(知识总结) KnowledgeQA(知识问答)、KnowledgeCapacity(知识库容量)、SearchEngine(搜索引擎) */
  SubBizType?: string;
  /** 模型标识 */
  ModelName?: string;
  /** 开始时间戳, 单位为秒(默认值0) */
  StartTime?: string;
  /** 结束时间戳, 单位为秒(默认值0， 必须大于开始时间戳) */
  EndTime?: string;
  /** 应用id列表 */
  AppBizIds?: string[];
  /** 筛选子场景(文档解析场景使用) */
  SubScenes?: string[];
}

declare interface DescribeTokenUsageResponse {
  /** 总token消耗量 */
  TotalTokenUsage?: number;
  /** 输入token消耗 */
  InputTokenUsage?: number;
  /** 输出token消耗 */
  OutputTokenUsage?: number;
  /** 接口调用次数 */
  ApiCallStats?: number;
  /** 搜索服务调用次数 */
  SearchUsage?: number;
  /** 文档解析消耗页数 */
  PageUsage?: number;
  /** 拆分token消耗量 */
  SplitTokenUsage?: number;
  /** Rag检索次数 */
  RagSearchUsage?: number;
  /** 联网搜索次数 */
  InternetSearchUsage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnsatisfiedReplyContextRequest {
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
  BotBizId: string;
  /** 文档ID */
  DocBizIds?: string[];
}

declare interface GenerateQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAnswerTypeDataCountRequest {
  /** 开始日期 */
  StartTime: number;
  /** 结束日期 */
  EndTime: number;
  /** 应用id */
  AppBizId?: string[];
  /** 消息来源(1、分享用户端 2、对话API 3、对话测试 4、应用评测) */
  Type?: number;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface GetAnswerTypeDataCountResponse {
  /** 总消息数 */
  Total?: number;
  /** 大模型直接回复总数 */
  ModelReplyCount?: number;
  /** 知识型回复总数 */
  KnowledgeCount?: number;
  /** 任务流回复总数 */
  TaskFlowCount?: number;
  /** 搜索引擎回复总数 */
  SearchEngineCount?: number;
  /** 图片理解回复总数 */
  ImageUnderstandingCount?: number;
  /** 拒答回复总数 */
  RejectCount?: number;
  /** 敏感回复总数 */
  SensitiveCount?: number;
  /** 并发超限回复总数 */
  ConcurrentLimitCount?: number;
  /** 未知问题回复总数 */
  UnknownIssuesCount?: number;
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
  /** 文档BizID */
  DocBizId: string;
  /** 应用ID */
  BotBizId: string;
  /** 存储类型: offline:离线文件，realtime:实时文件；为空默认为offline */
  TypeKey?: string;
}

declare interface GetDocPreviewResponse {
  /** 文件名, 发布端固定使用这个名称 */
  FileName?: string;
  /** 文件类型 */
  FileType?: string;
  /** cos路径 */
  CosUrl?: string;
  /** cos临时地址 */
  Url?: string;
  /** cos桶 */
  Bucket?: string;
  /** 存在文档重命名情况下的新名称, 评测端优先使用这个名称 */
  NewName?: string;
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
  /** 消耗量，返回TotalToken */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLikeDataCountRequest {
  /** 开始日期 */
  StartTime: number;
  /** 结束日期 */
  EndTime: number;
  /** 应用id */
  AppBizId?: string[];
  /** 消息来源(1、分享用户端 2、对话API) */
  Type?: number;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface GetLikeDataCountResponse {
  /** 可评价消息数 */
  Total?: number;
  /** 评价数 */
  AppraisalTotal?: number;
  /** 参评率 */
  ParticipationRate?: number;
  /** 点赞数 */
  LikeTotal?: number;
  /** 点赞率 */
  LikeRate?: number;
  /** 点踩数 */
  DislikeTotal?: number;
  /** 点踩率 */
  DislikeRate?: number;
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
  /** 应用AppKey, 当Type=5[API访客]时, 该字段必填 */
  BotAppKey?: string;
  /** 场景, 体验: 1; 正式: 2 */
  Scene?: number;
}

declare interface GetMsgRecordResponse {
  /** 会话记录 */
  Records?: MsgRecord[];
  /** session 清除关联上下文时间, 单位 ms */
  SessionDisassociatedTimestamp?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetReconstructDocumentResultRequest {
  /** 任务唯一Id。[CreateReconstructDocumentFlow](https://cloud.tencent.com/document/product/1759/107506) 返回的TaskId。 */
  TaskId: string;
}

declare interface GetReconstructDocumentResultResponse {
  /** 任务状态: Success->执行完成；Processing->执行中；Failed->执行失败；WaitExecute->等待执行。 */
  Status?: string;
  /** 本次文档解析的结果文件，存储在腾讯云COS的下载URL，下载URL的有效期为10分钟。 */
  DocumentRecognizeResultUrl?: string;
  /** 本次文档解析失败的页码信息。 */
  FailedPages?: ReconstructDocumentFailedPage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskStatusRequest {
  /** 任务ID */
  TaskId: string;
  /** 任务类型 */
  TaskType: string;
  /** 应用ID */
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

declare interface GetVarListRequest {
  /** 应用ID */
  AppBizId: string;
  /** 变量ID数组 */
  VarIds?: string[];
  /** 按变量名称关键词搜索 */
  Keyword?: string;
  /** 起始偏移量（默认0） */
  Offset?: number;
  /** 限定数量（默认15） */
  Limit?: number;
  /** 按变量类型过滤，默认查询所有类型(STRING,INT,FLOAT,BOOL,OBJECT,ARRAY_STRING,ARRAY_INT,ARRAY_FLOAT,ARRAY_BOOL,ARRAY_OBJECT,FILE,DOCUMENT,IMAGE,AUDIO) */
  VarType?: string;
}

declare interface GetVarListResponse {
  /** 变量总数 */
  Total?: number;
  /** 变量信息列表 */
  List?: TaskFLowVar[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWsTokenRequest {
  /** 接入类型，当前请填写5 */
  Type: number;
  /** 当Type=5时，必填；应用AppKey（应用发布后在应用页面[发布管理]-[调用信息]-[API管理]处获取） */
  BotAppKey?: string;
  /** 访客ID（外部输入，建议唯一，标识当前接入会话的用户） */
  VisitorBizId?: string;
  /** 知识标签，用于知识库中知识的检索过滤。该字段即将下线，请使用对话端接口中的 custom_variables 字段替代该字段。 */
  VisitorLabels?: GetWsTokenReq_Label[];
}

declare interface GetWsTokenResponse {
  /** token值（有效期60s，仅一次有效，多次校验会报错） */
  Token?: string;
  /** 余额; 余额大于 0 时表示有效 */
  Balance?: number | null;
  /** 对话窗输入字符限制 */
  InputLenLimit?: number;
  /** 应用模式，standard:标准模式, agent: agent模式，single_workflow：单工作流模式 */
  Pattern?: string;
  /** SingleWorkflow */
  SingleWorkflow?: KnowledgeQaSingleWorkflow;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GroupDocRequest {
  /** 应用ID */
  BotBizId: string;
  /** 操作对象的业务ID列表 */
  BizIds: string[];
  /** 分组 ID */
  CateBizId: string;
}

declare interface GroupDocResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GroupQARequest {
  /** 应用ID */
  BotBizId: string;
  /** QaBizID列表 */
  QaBizIds: string[];
  /** 分组 ID */
  CateBizId: string;
}

declare interface GroupQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IgnoreUnsatisfiedReplyRequest {
  /** 应用ID */
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
  /** 应用appKey */
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

declare interface ListAppKnowledgeDetailRequest {
  /** 页码 */
  PageNumber: number;
  /** 页面大小 */
  PageSize: number;
  /** 应用ID列表 */
  AppBizIds?: string[];
}

declare interface ListAppKnowledgeDetailResponse {
  /** 列表总数 */
  Total?: number;
  /** 应用使用知识库容量详情 */
  List?: KnowledgeDetail[];
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
  /** 应用ID */
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

declare interface ListDocCateRequest {
  /** 应用ID */
  BotBizId: string;
}

declare interface ListDocCateResponse {
  /** 列表 */
  List?: CateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDocRequest {
  /** 应用ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 查询内容 */
  Query?: string;
  /** 文档状态： 1-未生成 2-生成中 3-生成成功 4-生成失败 5-删除中 6-删除成功 7-审核中 8-审核失败 9-审核成功 10-待发布 11-发布中 12-已发布 13-学习中 14-学习失败 15-更新中 16-更新失败 17-解析中 18-解析失败 19-导入失败 20-已过期 21-超量失效 22-超量失效恢复 */
  Status?: number[];
  /** 查询类型 filename 文档、 attribute 标签 */
  QueryType?: string;
  /** 分类ID */
  CateBizId?: string;
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
  /** 应用模式 standard:标准模式, agent: agent模式，single_workflow：单工作流模式 */
  Pattern?: string;
  /** 模型类别 generate：生成模型，thought：思考模型 */
  ModelCategory?: string;
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
  /** 应用ID */
  BotBizId: string;
}

declare interface ListQACateResponse {
  /** 列表 */
  List?: QACate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListQARequest {
  /** 应用ID */
  BotBizId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页大小 */
  PageSize: number;
  /** 查询问题 */
  Query?: string;
  /** 校验状态(1未校验2采纳3不采纳) */
  AcceptStatus?: number[];
  /** 发布状态(2待发布 3发布中 4已发布 7审核中 8审核失败 9人工申述中 11人工申述失败 12已过期 13超量失效 14超量失效恢复) */
  ReleaseStatus?: number[];
  /** 文档ID */
  DocBizId?: string;
  /** 来源(1 文档生成 2 批量导入 3 手动添加) */
  Source?: number;
  /** 查询答案 */
  QueryAnswer?: string;
  /** 分类ID */
  CateBizId?: string;
  /** QA业务ID列表 */
  QaBizIds?: string[];
  /** 查询类型 filename 名称、 attribute 标签 */
  QueryType?: string;
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
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
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

declare interface ListUsageCallDetailRequest {
  /** 模型标识 */
  ModelName: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 页码 */
  PageNumber: number;
  /** 分页数量 */
  PageSize: number;
  /** uin列表 */
  UinAccount?: string[];
  /** 应用ID列表 */
  AppBizIds?: string[];
  /** 调用类型列表 */
  CallType?: string;
  /** 筛选子场景 */
  SubScenes?: string[];
}

declare interface ListUsageCallDetailResponse {
  /** 列表总数 */
  Total?: number;
  /** 列表 */
  List?: CallDetail[];
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
  /** 应用配置 */
  AppConfig: AppConfig;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
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
  /** 应用ID */
  BotBizId: string;
  /** 标签ID */
  AttributeBizId: string;
  /** 标签名称 */
  AttrName: string;
  /** 标签标识 （已作废） */
  AttrKey?: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 删除的标签值 */
  DeleteLabelBizIds?: string[];
  /** 新增或编辑的标签 */
  Labels?: AttributeLabel[];
}

declare interface ModifyAttributeLabelResponse {
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDocAttrRangeRequest {
  /** 应用ID */
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

declare interface ModifyDocCateRequest {
  /** 应用ID */
  BotBizId: string;
  /** 分类名称 */
  Name: string;
  /** 分类业务ID */
  CateBizId: string;
}

declare interface ModifyDocCateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDocRequest {
  /** 应用ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
  /** 是否引用链接 */
  IsRefer: boolean;
  /** 标签适用范围 1：全部，2：按条件 */
  AttrRange: number;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 关联的标签 */
  AttrLabels?: AttrLabelRefer[];
  /** 网页(或自定义链接)地址 */
  WebUrl?: string;
  /** 外部引用链接类型 0：系统链接 1：自定义链接值为1时，WebUrl 字段不能为空，否则不生效。 */
  ReferUrlType?: number;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 分类ID */
  CateBizId?: string;
}

declare interface ModifyDocResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQAAttrRangeRequest {
  /** 应用ID */
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
  /** 应用ID */
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
  /** 应用ID */
  BotBizId: string;
  /** 问答ID */
  QaBizId: string;
  /** 问题 */
  Question: string;
  /** 答案 */
  Answer: string;
  /** 自定义参数 */
  CustomParam?: string;
  /** 标签适用范围 1：全部，2：按条件 */
  AttrRange?: number;
  /** 标签引用 */
  AttrLabels?: AttrLabelRefer[];
  /** 文档ID */
  DocBizId?: string;
  /** 分类ID */
  CateBizId?: string;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 相似问修改信息(相似问没有修改则不传) */
  SimilarQuestionModify?: SimilarQuestionModify;
  /** 问题描述 */
  QuestionDesc?: string;
}

declare interface ModifyQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRejectedQuestionRequest {
  /** 应用ID */
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
  /** 消耗量，返回输入token数，输出token数以及总token数 */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RateMsgRecordRequest {
  /** 应用appKey */
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

declare interface ReconstructDocumentRequest {
  /** 文件的 Base64 值。 支持的文件格式：PNG、JPG、JPEG、PDF。 支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。 */
  FileBase64?: string;
  /** 文件的 Url 地址。 支持的文件格式：PNG、JPG、JPEG、PDF。 支持的文件大小：所下载文件经 Base64 编码后不超过 8M。文件下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 文件存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  FileUrl?: string;
  /** 当传入文件是PDF类型时，用来指定pdf识别的起始页码，识别的页码包含当前值。默认为1，表示从pdf文件的第1页开始识别。 */
  FileStartPageNumber?: number;
  /** 当传入文件是PDF类型时，用来指定pdf识别的结束页码，识别的页码包含当前值。默认为10，表示识别到pdf文件的第10页。单次调用最多支持识别10页内容，即FileEndPageNumber-FileStartPageNumber需要不大于10。 */
  FileEndPageNumber?: number;
  /** 配置选项，支持配置是否在生成的Markdown中是否嵌入图片 */
  Config?: ReconstructDocumentConfig;
}

declare interface ReconstructDocumentResponse {
  /** 识别生成的Markdown文件base64编码的字符串 */
  MarkdownBase64?: string | null;
  /** 输入文件中嵌入的图片放在一个文件夹中打包为.zip压缩文件，识别生成的Markdown文件通过路径关联插入本文件夹中的图片。 */
  InsetImagePackage?: string | null;
  /** 输入文件中嵌入的图片中文字内容的识别结果 */
  DocumentRecognizeInfo?: DocumentRecognizeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenameDocRequest {
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 应用ID */
  BotBizId?: string;
  /** 文档ID */
  DocBizId?: string;
  /** 新文档名，需要带上后缀 */
  NewName?: string;
}

declare interface RenameDocResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryDocAuditRequest {
  /** 应用ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
}

declare interface RetryDocAuditResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryDocParseRequest {
  /** 应用ID */
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

declare interface RunReRankRequest {
  /** 查询内容，必填 */
  Query?: string;
  /** 文档列表，必填，最多20个 */
  Docs?: string[];
  /** 模型名称, 非必填，默认: lke-reranker-base */
  Model?: string;
  /** 需要计算关联性的2段内容 */
  DataList?: ReRankDataObject[];
  /** 是否在线, 后台异步任务使用离线, 实时任务使用在线, 默认值: false */
  Online?: boolean;
}

declare interface RunReRankResponse {
  /** 相关性, 数值越大越相关 */
  ScoreList?: number[];
  /** 消耗量，仅返回TotalToken */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SaveDocRequest {
  /** 应用ID */
  BotBizId: string;
  /** 文件名 */
  FileName: string;
  /** 文件类型(md|txt|docx|pdf|xlsx) */
  FileType: string;
  /** 平台cos路径，与DescribeStorageCredential接口查询UploadPath参数保持一致 */
  CosUrl: string;
  /** ETag 全称为 Entity Tag，是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化 成功上传cos后，从返回头中获取 */
  ETag: string;
  /** cos_hash x-cos-hash-crc64ecma 头部中的 CRC64编码进行校验上传到云端的文件和本地文件的一致性 成功上传cos后，从返回头中获取 */
  CosHash: string;
  /** 文件大小 */
  Size: string;
  /** 标签适用范围，需要传参为1 */
  AttrRange?: number;
  /** 来源(0 源文件导入 1 网页导入) */
  Source?: number;
  /** 网页(或自定义链接)地址 */
  WebUrl?: string;
  /** 标签引用 */
  AttrLabels?: AttrLabelRefer[];
  /** 外部引用链接类型 0：系统链接 1：自定义链接值为1时，WebUrl 字段不能为空，否则不生效。 */
  ReferUrlType?: number;
  /** 有效开始时间，unix时间戳 */
  ExpireStart?: string;
  /** 有效结束时间，unix时间戳，0代表永久有效 */
  ExpireEnd?: string;
  /** 是否引用链接 */
  IsRefer?: boolean;
  /** 文档操作类型：1：批量导入（批量导入问答对）；2:文档导入（正常导入单个文档） 默认为1 请注意，opt=1的时候请从知识引擎页面下载excel模板 */
  Opt?: number;
  /** 分类ID */
  CateBizId?: string;
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
  /** 应用ID */
  BotBizId: string;
  /** 文档ID */
  DocBizId: string;
}

declare interface StopDocParseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadAttributeLabelRequest {
  /** 应用ID */
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
  /** 应用ID */
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
  /** 检查标签下的标签值是否存在 {@link CheckAttributeLabelExistRequest} {@link CheckAttributeLabelExistResponse} */
  CheckAttributeLabelExist(data: CheckAttributeLabelExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAttributeLabelExistResponse>;
  /** 检查标签引用 {@link CheckAttributeLabelReferRequest} {@link CheckAttributeLabelReferResponse} */
  CheckAttributeLabelRefer(data: CheckAttributeLabelReferRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAttributeLabelReferResponse>;
  /** @deprecated 文档转换 {@link ConvertDocumentRequest} {@link ConvertDocumentResponse} */
  ConvertDocument(data?: ConvertDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<ConvertDocumentResponse>;
  /** 创建应用 {@link CreateAppRequest} {@link CreateAppResponse} */
  CreateApp(data: CreateAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppResponse>;
  /** 创建标签 {@link CreateAttributeLabelRequest} {@link CreateAttributeLabelResponse} */
  CreateAttributeLabel(data: CreateAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAttributeLabelResponse>;
  /** 创建企业 {@link CreateCorpRequest} {@link CreateCorpResponse} */
  CreateCorp(data: CreateCorpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCorpResponse>;
  /** 创建Doc分类 {@link CreateDocCateRequest} {@link CreateDocCateResponse} */
  CreateDocCate(data: CreateDocCateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocCateResponse>;
  /** 录入问答 {@link CreateQARequest} {@link CreateQAResponse} */
  CreateQA(data: CreateQARequest, config?: AxiosRequestConfig): AxiosPromise<CreateQAResponse>;
  /** 创建QA分类 {@link CreateQACateRequest} {@link CreateQACateResponse} */
  CreateQACate(data: CreateQACateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQACateResponse>;
  /** 创建文档解析任务 {@link CreateReconstructDocumentFlowRequest} {@link CreateReconstructDocumentFlowResponse} */
  CreateReconstructDocumentFlow(data?: CreateReconstructDocumentFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReconstructDocumentFlowResponse>;
  /** 创建拒答问题 {@link CreateRejectedQuestionRequest} {@link CreateRejectedQuestionResponse} */
  CreateRejectedQuestion(data: CreateRejectedQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRejectedQuestionResponse>;
  /** 创建发布 {@link CreateReleaseRequest} {@link CreateReleaseResponse} */
  CreateRelease(data: CreateReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseResponse>;
  /** 创建变量 {@link CreateVarRequest} {@link CreateVarResponse} */
  CreateVar(data: CreateVarRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVarResponse>;
  /** 删除应用 {@link DeleteAppRequest} {@link DeleteAppResponse} */
  DeleteApp(data: DeleteAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAppResponse>;
  /** 删除标签 {@link DeleteAttributeLabelRequest} {@link DeleteAttributeLabelResponse} */
  DeleteAttributeLabel(data: DeleteAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttributeLabelResponse>;
  /** 删除文档 {@link DeleteDocRequest} {@link DeleteDocResponse} */
  DeleteDoc(data: DeleteDocRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDocResponse>;
  /** Doc分类删除 {@link DeleteDocCateRequest} {@link DeleteDocCateResponse} */
  DeleteDocCate(data: DeleteDocCateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDocCateResponse>;
  /** 删除问答 {@link DeleteQARequest} {@link DeleteQAResponse} */
  DeleteQA(data: DeleteQARequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQAResponse>;
  /** 分类删除 {@link DeleteQACateRequest} {@link DeleteQACateResponse} */
  DeleteQACate(data: DeleteQACateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQACateResponse>;
  /** 删除拒答问题 {@link DeleteRejectedQuestionRequest} {@link DeleteRejectedQuestionResponse} */
  DeleteRejectedQuestion(data: DeleteRejectedQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRejectedQuestionResponse>;
  /** 获取企业下应用详情 {@link DescribeAppRequest} {@link DescribeAppResponse} */
  DescribeApp(data: DescribeAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppResponse>;
  /** 查询标签详情 {@link DescribeAttributeLabelRequest} {@link DescribeAttributeLabelResponse} */
  DescribeAttributeLabel(data: DescribeAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttributeLabelResponse>;
  /** 接口调用折线图 {@link DescribeCallStatsGraphRequest} {@link DescribeCallStatsGraphResponse} */
  DescribeCallStatsGraph(data?: DescribeCallStatsGraphRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallStatsGraphResponse>;
  /** 并发调用 {@link DescribeConcurrencyUsageRequest} {@link DescribeConcurrencyUsageResponse} */
  DescribeConcurrencyUsage(data: DescribeConcurrencyUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConcurrencyUsageResponse>;
  /** 并发调用折线图 {@link DescribeConcurrencyUsageGraphRequest} {@link DescribeConcurrencyUsageGraphResponse} */
  DescribeConcurrencyUsageGraph(data: DescribeConcurrencyUsageGraphRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConcurrencyUsageGraphResponse>;
  /** 企业详情 {@link DescribeCorpRequest} {@link DescribeCorpResponse} */
  DescribeCorp(data?: DescribeCorpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCorpResponse>;
  /** 文档详情 {@link DescribeDocRequest} {@link DescribeDocResponse} */
  DescribeDoc(data: DescribeDocRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocResponse>;
  /** 查询知识库用量 {@link DescribeKnowledgeUsageRequest} {@link DescribeKnowledgeUsageResponse} */
  DescribeKnowledgeUsage(data?: DescribeKnowledgeUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKnowledgeUsageResponse>;
  /** 查询知识库容量饼图 {@link DescribeKnowledgeUsagePieGraphRequest} {@link DescribeKnowledgeUsagePieGraphResponse} */
  DescribeKnowledgeUsagePieGraph(data?: DescribeKnowledgeUsagePieGraphRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKnowledgeUsagePieGraphResponse>;
  /** 问答详情 {@link DescribeQARequest} {@link DescribeQAResponse} */
  DescribeQA(data: DescribeQARequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQAResponse>;
  /** 获取来源详情列表 {@link DescribeReferRequest} {@link DescribeReferResponse} */
  DescribeRefer(data: DescribeReferRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReferResponse>;
  /** 发布详情 {@link DescribeReleaseRequest} {@link DescribeReleaseResponse} */
  DescribeRelease(data: DescribeReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseResponse>;
  /** 拉取发布按钮状态、最后发布时间 {@link DescribeReleaseInfoRequest} {@link DescribeReleaseInfoResponse} */
  DescribeReleaseInfo(data: DescribeReleaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseInfoResponse>;
  /** 通过appKey获取应用业务ID {@link DescribeRobotBizIDByAppKeyRequest} {@link DescribeRobotBizIDByAppKeyResponse} */
  DescribeRobotBizIDByAppKey(data: DescribeRobotBizIDByAppKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRobotBizIDByAppKeyResponse>;
  /** 查询搜索服务调用折线图 {@link DescribeSearchStatsGraphRequest} {@link DescribeSearchStatsGraphResponse} */
  DescribeSearchStatsGraph(data?: DescribeSearchStatsGraphRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchStatsGraphResponse>;
  /** 获取片段详情 {@link DescribeSegmentsRequest} {@link DescribeSegmentsResponse} */
  DescribeSegments(data: DescribeSegmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSegmentsResponse>;
  /** 获取文件上传临时密钥 {@link DescribeStorageCredentialRequest} {@link DescribeStorageCredentialResponse} */
  DescribeStorageCredential(data?: DescribeStorageCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStorageCredentialResponse>;
  /** 接口调用token详情 {@link DescribeTokenUsageRequest} {@link DescribeTokenUsageResponse} */
  DescribeTokenUsage(data?: DescribeTokenUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTokenUsageResponse>;
  /** 接口调用token折线图 {@link DescribeTokenUsageGraphRequest} {@link DescribeTokenUsageGraphResponse} */
  DescribeTokenUsageGraph(data?: DescribeTokenUsageGraphRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTokenUsageGraphResponse>;
  /** 获取不满意回复上下文 {@link DescribeUnsatisfiedReplyContextRequest} {@link DescribeUnsatisfiedReplyContextResponse} */
  DescribeUnsatisfiedReplyContext(data: DescribeUnsatisfiedReplyContextRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnsatisfiedReplyContextResponse>;
  /** 导出标签 {@link ExportAttributeLabelRequest} {@link ExportAttributeLabelResponse} */
  ExportAttributeLabel(data: ExportAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ExportAttributeLabelResponse>;
  /** 导出QA列表 {@link ExportQAListRequest} {@link ExportQAListResponse} */
  ExportQAList(data: ExportQAListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportQAListResponse>;
  /** 导出不满意回复 {@link ExportUnsatisfiedReplyRequest} {@link ExportUnsatisfiedReplyResponse} */
  ExportUnsatisfiedReply(data: ExportUnsatisfiedReplyRequest, config?: AxiosRequestConfig): AxiosPromise<ExportUnsatisfiedReplyResponse>;
  /** 文档生成问答 {@link GenerateQARequest} {@link GenerateQAResponse} */
  GenerateQA(data: GenerateQARequest, config?: AxiosRequestConfig): AxiosPromise<GenerateQAResponse>;
  /** 回答类型数据统计 {@link GetAnswerTypeDataCountRequest} {@link GetAnswerTypeDataCountResponse} */
  GetAnswerTypeDataCount(data: GetAnswerTypeDataCountRequest, config?: AxiosRequestConfig): AxiosPromise<GetAnswerTypeDataCountResponse>;
  /** 获取知识问答个数 {@link GetAppKnowledgeCountRequest} {@link GetAppKnowledgeCountResponse} */
  GetAppKnowledgeCount(data: GetAppKnowledgeCountRequest, config?: AxiosRequestConfig): AxiosPromise<GetAppKnowledgeCountResponse>;
  /** 获取应用密钥 {@link GetAppSecretRequest} {@link GetAppSecretResponse} */
  GetAppSecret(data: GetAppSecretRequest, config?: AxiosRequestConfig): AxiosPromise<GetAppSecretResponse>;
  /** 获取文档预览信息 {@link GetDocPreviewRequest} {@link GetDocPreviewResponse} */
  GetDocPreview(data: GetDocPreviewRequest, config?: AxiosRequestConfig): AxiosPromise<GetDocPreviewResponse>;
  /** 获取特征向量 {@link GetEmbeddingRequest} {@link GetEmbeddingResponse} */
  GetEmbedding(data: GetEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<GetEmbeddingResponse>;
  /** 点踩点赞数据统计 {@link GetLikeDataCountRequest} {@link GetLikeDataCountResponse} */
  GetLikeDataCount(data: GetLikeDataCountRequest, config?: AxiosRequestConfig): AxiosPromise<GetLikeDataCountResponse>;
  /** 获取聊天历史请求 {@link GetMsgRecordRequest} {@link GetMsgRecordResponse} */
  GetMsgRecord(data: GetMsgRecordRequest, config?: AxiosRequestConfig): AxiosPromise<GetMsgRecordResponse>;
  /** 查询文档解析任务结果 {@link GetReconstructDocumentResultRequest} {@link GetReconstructDocumentResultResponse} */
  GetReconstructDocumentResult(data: GetReconstructDocumentResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetReconstructDocumentResultResponse>;
  /** 查询任务状态 {@link GetTaskStatusRequest} {@link GetTaskStatusResponse} */
  GetTaskStatus(data: GetTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskStatusResponse>;
  /** 获取变量列表 {@link GetVarListRequest} {@link GetVarListResponse} */
  GetVarList(data: GetVarListRequest, config?: AxiosRequestConfig): AxiosPromise<GetVarListResponse>;
  /** 获取ws token {@link GetWsTokenRequest} {@link GetWsTokenResponse} */
  GetWsToken(data: GetWsTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetWsTokenResponse>;
  /** Doc分组 {@link GroupDocRequest} {@link GroupDocResponse} */
  GroupDoc(data: GroupDocRequest, config?: AxiosRequestConfig): AxiosPromise<GroupDocResponse>;
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
  /** 列表查询知识库容量详情 {@link ListAppKnowledgeDetailRequest} {@link ListAppKnowledgeDetailResponse} */
  ListAppKnowledgeDetail(data: ListAppKnowledgeDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ListAppKnowledgeDetailResponse>;
  /** 查询标签列表 {@link ListAttributeLabelRequest} {@link ListAttributeLabelResponse} */
  ListAttributeLabel(data: ListAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ListAttributeLabelResponse>;
  /** 文档列表 {@link ListDocRequest} {@link ListDocResponse} */
  ListDoc(data: ListDocRequest, config?: AxiosRequestConfig): AxiosPromise<ListDocResponse>;
  /** 获取文档分类 {@link ListDocCateRequest} {@link ListDocCateResponse} */
  ListDocCate(data: ListDocCateRequest, config?: AxiosRequestConfig): AxiosPromise<ListDocCateResponse>;
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
  /** 列表查询单次调用明细 {@link ListUsageCallDetailRequest} {@link ListUsageCallDetailResponse} */
  ListUsageCallDetail(data: ListUsageCallDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ListUsageCallDetailResponse>;
  /** 修改应用请求结构体 {@link ModifyAppRequest} {@link ModifyAppResponse} */
  ModifyApp(data: ModifyAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppResponse>;
  /** 编辑标签 {@link ModifyAttributeLabelRequest} {@link ModifyAttributeLabelResponse} */
  ModifyAttributeLabel(data: ModifyAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAttributeLabelResponse>;
  /** 修改文档 {@link ModifyDocRequest} {@link ModifyDocResponse} */
  ModifyDoc(data: ModifyDocRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDocResponse>;
  /** 批量修改文档适用范围 {@link ModifyDocAttrRangeRequest} {@link ModifyDocAttrRangeResponse} */
  ModifyDocAttrRange(data: ModifyDocAttrRangeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDocAttrRangeResponse>;
  /** 修改Doc分类 {@link ModifyDocCateRequest} {@link ModifyDocCateResponse} */
  ModifyDocCate(data: ModifyDocCateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDocCateResponse>;
  /** 更新问答 {@link ModifyQARequest} {@link ModifyQAResponse} */
  ModifyQA(data: ModifyQARequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQAResponse>;
  /** 批量修改问答适用范围 {@link ModifyQAAttrRangeRequest} {@link ModifyQAAttrRangeResponse} */
  ModifyQAAttrRange(data: ModifyQAAttrRangeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQAAttrRangeResponse>;
  /** 更新QA分类 {@link ModifyQACateRequest} {@link ModifyQACateResponse} */
  ModifyQACate(data: ModifyQACateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQACateResponse>;
  /** 修改拒答问题 {@link ModifyRejectedQuestionRequest} {@link ModifyRejectedQuestionResponse} */
  ModifyRejectedQuestion(data: ModifyRejectedQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRejectedQuestionResponse>;
  /** 多轮改写 {@link QueryRewriteRequest} {@link QueryRewriteResponse} */
  QueryRewrite(data: QueryRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<QueryRewriteResponse>;
  /** 评价消息 {@link RateMsgRecordRequest} {@link RateMsgRecordResponse} */
  RateMsgRecord(data: RateMsgRecordRequest, config?: AxiosRequestConfig): AxiosPromise<RateMsgRecordResponse>;
  /** 文档解析 {@link ReconstructDocumentRequest} {@link ReconstructDocumentResponse} */
  ReconstructDocument(data?: ReconstructDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<ReconstructDocumentResponse>;
  /** 文档重命名 {@link RenameDocRequest} {@link RenameDocResponse} */
  RenameDoc(data?: RenameDocRequest, config?: AxiosRequestConfig): AxiosPromise<RenameDocResponse>;
  /** 文档审核重试 {@link RetryDocAuditRequest} {@link RetryDocAuditResponse} */
  RetryDocAudit(data: RetryDocAuditRequest, config?: AxiosRequestConfig): AxiosPromise<RetryDocAuditResponse>;
  /** 文档解析重试 {@link RetryDocParseRequest} {@link RetryDocParseResponse} */
  RetryDocParse(data: RetryDocParseRequest, config?: AxiosRequestConfig): AxiosPromise<RetryDocParseResponse>;
  /** 发布暂停后重试 {@link RetryReleaseRequest} {@link RetryReleaseResponse} */
  RetryRelease(data: RetryReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<RetryReleaseResponse>;
  /** 重排序（已下线） {@link RunReRankRequest} {@link RunReRankResponse} */
  RunReRank(data?: RunReRankRequest, config?: AxiosRequestConfig): AxiosPromise<RunReRankResponse>;
  /** 知识库文档问答保存 {@link SaveDocRequest} {@link SaveDocResponse} */
  SaveDoc(data: SaveDocRequest, config?: AxiosRequestConfig): AxiosPromise<SaveDocResponse>;
  /** 终止文档解析 {@link StopDocParseRequest} {@link StopDocParseResponse} */
  StopDocParse(data: StopDocParseRequest, config?: AxiosRequestConfig): AxiosPromise<StopDocParseResponse>;
  /** 上传导入标签 {@link UploadAttributeLabelRequest} {@link UploadAttributeLabelResponse} */
  UploadAttributeLabel(data: UploadAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<UploadAttributeLabelResponse>;
  /** 校验问答 {@link VerifyQARequest} {@link VerifyQAResponse} */
  VerifyQA(data: VerifyQARequest, config?: AxiosRequestConfig): AxiosPromise<VerifyQAResponse>;
}

export declare type Versions = ["2023-11-30"];

export default Lke;
