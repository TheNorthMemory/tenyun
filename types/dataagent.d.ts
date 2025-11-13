/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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
  /** 新增的chunkid */
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
}

declare interface CreateDataAgentSessionResponse {
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
}

declare interface DeleteDataAgentSessionResponse {
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
}

declare interface GetSessionDetailsResponse {
  /** 记录总数 */
  RecordCount?: number;
  /** 当前在运行的record信息 */
  RunRecord?: string;
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
  /** 默认 1 表示第一页 */
  Page?: number;
  /** 默认 10 一页展示 10 条 */
  PageSize?: number;
}

declare interface QueryChunkListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopChatAIRequest {
}

declare interface StopChatAIResponse {
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
  /** 获取知识库列表 {@link GetKnowledgeBaseListRequest} {@link GetKnowledgeBaseListResponse} */
  GetKnowledgeBaseList(data: GetKnowledgeBaseListRequest, config?: AxiosRequestConfig): AxiosPromise<GetKnowledgeBaseListResponse>;
  /** 获取会话详情 {@link GetSessionDetailsRequest} {@link GetSessionDetailsResponse} */
  GetSessionDetails(data?: GetSessionDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<GetSessionDetailsResponse>;
  /** 编辑分片 {@link ModifyChunkRequest} {@link ModifyChunkResponse} */
  ModifyChunk(data: ModifyChunkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyChunkResponse>;
  /** 修改知识库 {@link ModifyKnowledgeBaseRequest} {@link ModifyKnowledgeBaseResponse} */
  ModifyKnowledgeBase(data: ModifyKnowledgeBaseRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyKnowledgeBaseResponse>;
  /** 文档切片查询 {@link QueryChunkListRequest} {@link QueryChunkListResponse} */
  QueryChunkList(data?: QueryChunkListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChunkListResponse>;
  /** 终止问答返回流 {@link StopChatAIRequest} {@link StopChatAIResponse} */
  StopChatAI(data?: StopChatAIRequest, config?: AxiosRequestConfig): AxiosPromise<StopChatAIResponse>;
}

export declare type Versions = ["2025-05-13"];

export default Dataagent;
