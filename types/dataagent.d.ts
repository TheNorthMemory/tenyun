/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 文件分片 */
declare interface Chunk {
  /** 切片ID */
  Id?: string;
  /** 切片内容 */
  Content?: string;
  /** 切片的字数 */
  Size?: number;
  /** 切片概要 */
  Summary?: string;
}

/** 知识库文档表列信息 */
declare interface ColumnInfo {
  /** 列名称 */
  Name?: string;
  /** 列类型：int, bigint, double, date, datetime, string，decimal */
  Type?: string;
  /** 列名称描述 */
  Description?: string;
  /** 列索引 */
  Index?: number;
  /** 原始字段名称 */
  OriginalName?: string;
}

/** cos 文件信息 */
declare interface CosFileInfo {
  /** 文件名称，包含后缀 */
  FileName?: string;
  /** 文件类型，"PDF", "DOC", "DOCX", "XLS", "XLSX", "PPT", "PPTX", "MD", "TXT", "PNG", "JPG", "JPEG", "CSV" */
  FileType?: string;
  /** 用户文件的cosurl */
  UserCosUrl?: string;
}

/** 知识库文件信息 */
declare interface FileInfo {
  /** 文件名称 */
  FileName: string;
  /** 文件大小，字节 */
  FileSize: number;
  /** 文件类型,0=文本,1=表格，默认0 */
  Type: number;
  /** 文件ID */
  FileId: string;
  /** 状态，0：数据处理中 1：可用 -1：错误 */
  Status?: number;
  /** 操作者 */
  CreateUser?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 分片策略 */
  ChunkConfig?: KnowledgeTaskConfig;
  /** 文件来源0=unknow,1=user_cos,2=local */
  Source?: number;
  /** 文件url */
  FileUrl?: string;
  /** 是否官方示例，0=否，1=是 */
  IsShowCase?: number;
  /** 文档摘要 */
  DocumentSummary?: string;
}

/** 知识库信息 */
declare interface KnowledgeBase {
  /** 知识库id */
  KnowledgeBaseId?: string;
  /** 知识库名称 */
  KnowledgeBaseName?: string;
  /** 知识库描述 */
  KnowledgeBaseDesc?: string;
  /** 创建者subuin */
  Creator?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 文件数量 */
  FileNum?: number;
  /** 知识库关联的数据库列表，目前是只绑定一个数据源，数组预留拓展 */
  DatasourceIds?: string[];
}

/** 任务配置 */
declare interface KnowledgeTaskConfig {
  /** 切片类型 0:自定义切片，1：智能切片 */
  ChunkType?: number;
  /** /智能切片：最小值 1000，默认 4800 自定义切片：正整数即可,默认值 1000 */
  MaxChunkSize?: number;
  /** 切片分隔符,自定义切片使用：默认值为：["\n\n", "\n", "。", "！", "？", "，", ""] */
  Delimiters?: string[] | null;
  /** 自定义切片使用:默认0 可重叠字符长度 */
  ChunkOverlap?: number;
  /** 表格类文档解析 */
  Columns?: ColumnInfo[];
  /** 带检索的索引列表 */
  Indexes?: number[];
  /** 0：不生成文档摘要，1：生成文档概要。默认0，当取1时，GenParaSummary必须也为1 */
  GenDocSummary?: number;
  /** 0：不生成段落摘要，1：生成段落概要。默认0 */
  GenParaSummary?: number;
}

/** 问答结构 */
declare interface Record {
  /** 问题内容 */
  Question: string;
  /** 回答内容 */
  Answer?: string;
  /** 思考内容 */
  Think?: string;
  /** 任务列表 */
  TaskList?: Task[];
  /** 记录创建时间 */
  CreateTime?: string;
  /** 记录更新时间 */
  UpdateTime?: string;
  /** 记录id */
  RecordId?: string;
  /** 总结内容 */
  FinalSummary?: string;
  /** 会话ID */
  SessionId?: string;
  /** 1=赞，2=踩，0=无反馈 */
  Feedback?: number;
  /** 数据库信息 */
  DbInfo?: string;
  /** 错误信息 */
  ErrorContext?: string;
  /** TaskList的string字符串 */
  TaskListStr?: string;
  /** 知识库id列表 */
  KnowledgeBaseIds?: string[];
  /** 上下文 */
  Context?: string;
}

/** 步骤扩展结构 */
declare interface StepExpand {
  /** 标题 */
  Title?: string;
  /** 状态 */
  Status?: string;
  /** cellid数组 */
  CellIds?: string[];
}

/** 任务步骤 */
declare interface StepInfo {
  /** 步骤id */
  Id: number;
  /** 步骤名称 */
  Name: string;
  /** 步骤状态 */
  Status: string;
  /** 类型(text/expand) */
  Type: string;
  /** 总结 */
  Summary?: string;
  /** 步骤扩展结构 */
  Expand?: StepExpand;
  /** 描述 */
  Desc?: string;
}

/** 任务信息 */
declare interface Task {
  /** 任务ID */
  Id?: number;
  /** 任务名称 */
  Name?: string;
  /** 任务状态 */
  Status?: string;
  /** 任务步骤列表 */
  StepInfoList?: StepInfo[];
}

/** 上传任务 */
declare interface UploadJob {
  /** id */
  Id?: number;
  /** 任务id */
  JobId?: string;
  /** 实例id */
  InstanceId?: string;
  /** 知识库id */
  KnowledgeBaseId?: string;
  /** uin */
  Uin?: string;
  /** subuin */
  SubUin?: string;
  /** Pending、FileUploading、FileParsing、Success、Failed */
  Status?: string;
  /** 任务创建时间 */
  CreateTime?: string;
  /** 任务更新时间 */
  UpdateTime?: string;
  /** 错误信息 */
  Message?: string;
}

declare interface AddChunkRequest {
  /** 实例ID */
  InstanceId: string;
  /** 文件ID */
  FileId: string;
  /** 新增chunk的后面一个ChunkID。如果是空就是插到队尾。插入位置的下一个 chunkId。如果插到最前面，传入原切片的第一个。 */
  BeforeChunkId?: string;
  /** 显式指定的位置,实际的位置。从 0 开始计算。0 代表插到最前面，chunk total 代表插到最后面。 */
  InsertPos?: number;
  /** chunk内容 */
  Content?: string;
  /** 新 Chunk 插入到目标 Chunk ​之后的位置。插入位置的上一个 chunkId */
  AfterChunkId?: string;
}

declare interface AddChunkResponse {
  /** 新增的ChunkId */
  ChunkId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChatAIRequest {
  /** 会话ID */
  SessionId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 问题内容 */
  Question?: string;
  /** 上下文 */
  Context?: string;
  /** 模型 */
  Model?: string;
  /** 是否深度思考 */
  DeepThinking?: boolean;
  /** 数据源id */
  DataSourceIds?: string[];
  /** agent类型 */
  AgentType?: string;
  /** 需要重新生成答案的记录ID */
  OldRecordId?: string;
  /** 知识库id列表 */
  KnowledgeBaseIds?: string[];
}

declare interface ChatAIResponse {
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface CreateDataAgentSessionRequest {
  /** 实例ID */
  InstanceId?: string;
}

declare interface CreateDataAgentSessionResponse {
  /** 会话 */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteChunkRequest {
  /** 实例ID */
  InstanceId: string;
  /** 文件ID */
  FileId: string;
  /** 切片ID */
  ChunkIds: string[];
}

declare interface DeleteChunkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDataAgentSessionRequest {
  /** 实例ID */
  InstanceId?: string;
  /** 会话ID */
  SessionId?: string;
}

declare interface DeleteDataAgentSessionResponse {
  /** 删除的会话ID */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetJobsByKnowledgeBaseIdRequest {
  /** 实例ID */
  InstanceId?: string;
  /** 知识库id */
  KnowledgeBaseId?: string;
}

declare interface GetJobsByKnowledgeBaseIdResponse {
  /** 任务列表详情 */
  Jobs?: UploadJob[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetKnowledgeBaseFileListRequest {
  /** 实例id */
  InstanceId: string;
  /** 默认 1 表示第一页，可以不填 */
  Page?: number;
  /** 默认 10 一页展示 10 条，可以不填 */
  PageSize?: number;
  /** 知识库id */
  KnowledgeBaseId?: string;
}

declare interface GetKnowledgeBaseFileListResponse {
  /** 文件信息列表 */
  FileList?: FileInfo[];
  /** 文件信息总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetKnowledgeBaseListRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface GetKnowledgeBaseListResponse {
  /** 用户实例所有知识库列表 */
  KnowledgeBaseList?: KnowledgeBase[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSessionDetailsRequest {
  /** 实例ID */
  InstanceId?: string;
  /** 会话ID */
  SessionId?: string;
}

declare interface GetSessionDetailsResponse {
  /** 会话记录详情 */
  RecordList?: Record[];
  /** 记录总数 */
  RecordCount?: number;
  /** 当前在运行的record信息 */
  RunRecord?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetUploadJobDetailsRequest {
  /** 实例ID */
  InstanceId?: string;
  /** 任务id */
  JobId?: string;
}

declare interface GetUploadJobDetailsResponse {
  /** 任务详情 */
  Job?: UploadJob;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyChunkRequest {
  /** 实例ID */
  InstanceId: string;
  /** 文件ID */
  FileId: string;
  /** 切片ID */
  ChunkId?: string;
  /** 编辑后的文本 */
  Content?: string;
}

declare interface ModifyChunkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyKnowledgeBaseRequest {
  /** 实例id */
  InstanceId: string;
  /** 操作类型：Create，Update，Delete */
  OperateType: string;
  /** 知识库id，update和delete时必填 */
  KnowledgeBaseId?: string;
  /** 知识库名称，create和update时必填。只允许字母、数字、汉字、下划线 */
  KnowledgeBaseName?: string;
  /** 知识库描述，create和update时必填 */
  KnowledgeBaseDesc?: string;
}

declare interface ModifyKnowledgeBaseResponse {
  /** 知识库id */
  KnowledgeBaseId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChunkListRequest {
  /** 表示第一页 */
  Page?: number;
  /** 默认一页展示 10 条 */
  PageSize?: number;
}

declare interface QueryChunkListResponse {
  /** 总数 */
  Total?: number;
  /** 分片信息 */
  Chunks?: Chunk[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopChatAIRequest {
  /** 会话ID */
  SessionId?: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface StopChatAIResponse {
  /** 会话 */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadAndCommitFileRequest {
  /** 实例id */
  InstanceId?: string;
  /** 上传文件列表 */
  CosFiles?: CosFileInfo[];
  /** 知识库id */
  KnowledgeBaseId?: string;
}

declare interface UploadAndCommitFileResponse {
  /** 上传任务 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dataagent 腾讯云数据分析智能体} */
declare interface Dataagent {
  (): Versions;
  /** 添加文档切片 {@link AddChunkRequest} {@link AddChunkResponse} */
  AddChunk(data: AddChunkRequest, config?: AxiosRequestConfig): AxiosPromise<AddChunkResponse>;
  /** DataAgent问答 {@link ChatAIRequest} {@link ChatAIResponse} */
  ChatAI(data?: ChatAIRequest, config?: AxiosRequestConfig): AxiosPromise<ChatAIResponse>;
  /** 生成DataAgent SessionID {@link CreateDataAgentSessionRequest} {@link CreateDataAgentSessionResponse} */
  CreateDataAgentSession(data?: CreateDataAgentSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataAgentSessionResponse>;
  /** 删除文档切片 {@link DeleteChunkRequest} {@link DeleteChunkResponse} */
  DeleteChunk(data: DeleteChunkRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteChunkResponse>;
  /** 删除会话 {@link DeleteDataAgentSessionRequest} {@link DeleteDataAgentSessionResponse} */
  DeleteDataAgentSession(data?: DeleteDataAgentSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataAgentSessionResponse>;
  /** 根据知识库id查询上传job列表 {@link GetJobsByKnowledgeBaseIdRequest} {@link GetJobsByKnowledgeBaseIdResponse} */
  GetJobsByKnowledgeBaseId(data?: GetJobsByKnowledgeBaseIdRequest, config?: AxiosRequestConfig): AxiosPromise<GetJobsByKnowledgeBaseIdResponse>;
  /** 获取知识库文件列表 {@link GetKnowledgeBaseFileListRequest} {@link GetKnowledgeBaseFileListResponse} */
  GetKnowledgeBaseFileList(data: GetKnowledgeBaseFileListRequest, config?: AxiosRequestConfig): AxiosPromise<GetKnowledgeBaseFileListResponse>;
  /** 获取知识库列表 {@link GetKnowledgeBaseListRequest} {@link GetKnowledgeBaseListResponse} */
  GetKnowledgeBaseList(data: GetKnowledgeBaseListRequest, config?: AxiosRequestConfig): AxiosPromise<GetKnowledgeBaseListResponse>;
  /** 获取会话详情 {@link GetSessionDetailsRequest} {@link GetSessionDetailsResponse} */
  GetSessionDetails(data?: GetSessionDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<GetSessionDetailsResponse>;
  /** 查询上传任务详情 {@link GetUploadJobDetailsRequest} {@link GetUploadJobDetailsResponse} */
  GetUploadJobDetails(data?: GetUploadJobDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<GetUploadJobDetailsResponse>;
  /** 编辑分片 {@link ModifyChunkRequest} {@link ModifyChunkResponse} */
  ModifyChunk(data: ModifyChunkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyChunkResponse>;
  /** 修改知识库 {@link ModifyKnowledgeBaseRequest} {@link ModifyKnowledgeBaseResponse} */
  ModifyKnowledgeBase(data: ModifyKnowledgeBaseRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyKnowledgeBaseResponse>;
  /** 文档切片查询 {@link QueryChunkListRequest} {@link QueryChunkListResponse} */
  QueryChunkList(data?: QueryChunkListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChunkListResponse>;
  /** 终止问答返回流 {@link StopChatAIRequest} {@link StopChatAIResponse} */
  StopChatAI(data?: StopChatAIRequest, config?: AxiosRequestConfig): AxiosPromise<StopChatAIResponse>;
  /** cos上传提交文件 {@link UploadAndCommitFileRequest} {@link UploadAndCommitFileResponse} */
  UploadAndCommitFile(data?: UploadAndCommitFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadAndCommitFileResponse>;
}

export declare type Versions = ["2025-05-13"];

export default Dataagent;
