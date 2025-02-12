/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 属性信息 */
declare interface AttributeItem {
  /** 属性id */
  AttributeId?: string | null;
  /** 属性标识 */
  AttributeKey?: string | null;
  /** 属性名称 */
  AttributeName?: string | null;
  /** 标签名称 */
  Labels?: AttributeLabelItem[] | null;
}

/** 属性标签信息 */
declare interface AttributeLabelItem {
  /** 标签id */
  LabelId?: string | null;
  /** 标签名称，最大80个英文字符 */
  LabelName?: string | null;
}

/** 属性标签引用 */
declare interface AttributeLabelReferItem {
  /** 属性id */
  AttributeId?: string | null;
  /** 标签id */
  LabelIds?: string[] | null;
}

/** 消耗量 */
declare interface ChatUsage {
  /** 输入token数 */
  PromptTokens?: number;
  /** 输出token数 */
  CompletionTokens?: number;
  /** 总token数 */
  TotalTokens?: number;
}

/** 返回的回复, 支持多个 */
declare interface Choice {
  /** 结束标志位，可能为 stop、 sensitive或者tool_calls。stop 表示输出正常结束。sensitive 只在开启流式输出审核时会出现，表示安全审核未通过。tool_calls 标识函数调用。 */
  FinishReason?: string;
  /** 增量返回值，流式调用时使用该字段。 */
  Delta?: Delta;
  /** 返回值，非流式调用时使用该字段。 */
  Message?: Message;
  /** 索引值，流式调用时使用该字段。 */
  Index?: number;
}

/** 创建智能文档解析任务的配置信息 */
declare interface CreateReconstructDocumentFlowConfig {
  /** Markdown文件中表格返回的形式0，表格以MD形式返回1，表格以HTML形式返回默认为1 */
  TableResultType?: string;
  /** 智能文档解析返回结果的格式0：只返回全文MD；1：只返回每一页的OCR原始Json；2：只返回每一页的MD，3：返回全文MD + 每一页的OCR原始Json；4：返回全文MD + 每一页的MD，默认值为3（返回全文MD + 每一页的OCR原始Json） */
  ResultType?: string;
}

/** 创建智能文档拆分任务的配置信息 */
declare interface CreateSplitDocumentFlowConfig {
  /** Markdown文件中表格返回的形式0，表格以MD形式返回1，表格以HTML形式返回默认为 */
  TableResultType?: string;
  /** 智能文档解析返回结果的格式0：只返回全文MD；1：只返回每一页的OCR原始Json；2：只返回每一页的MD，3：返回全文MD + 每一页的OCR原始Json；4：返回全文MD + 每一页的MD，默认值为3（返回全文MD + 每一页的OCR原始Json） */
  ResultType?: string;
  /** 是否开启mllm */
  EnableMllm?: boolean;
  /** 最大分片长度 */
  MaxChunkSize?: number;
}

/** 返回的内容 */
declare interface Delta {
  /** 角色名称。 */
  Role?: string;
  /** 内容详情。 */
  Content?: string;
}

/** 离线文档列表回包 */
declare interface DocItem {
  /** 文档id */
  DocId?: string | null;
  /** 状态，- Uploading 上传中 - Auditing 审核中- Parsing 解析中 - ParseFailed 解析失败- Indexing 创建索引中 - IndexFailed 创建索引失败- Success 发布成功- Failed 失败 */
  Status?: string | null;
  /** 文件名 */
  FileName?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 属性标签 */
  AttributeLabels?: AttributeLabelReferItem[] | null;
}

/** 文档拆分任务的用量 */
declare interface DocumentUsage {
  /** 文档拆分任务的页数 */
  PageNumber?: number;
  /** 文档拆分任务消耗的总token数 */
  TotalToken?: number;
  /** 文档拆分任务消耗的总token数 */
  TotalTokens?: number;
}

/** 向量 */
declare interface EmbeddingObject {
  /** 向量 */
  Embedding?: number[];
}

/** 属性标签 */
declare interface LabelItem {
  /** 属性key */
  Name?: string;
  /** 标签值 */
  Values?: string[];
}

/** 会话内容 */
declare interface Message {
  /** 角色 */
  Role?: string;
  /** 内容 */
  Content?: string;
  /** 思维链内容。ReasoningConent参数仅支持出参，且只有deepseek-r1模型会返回。 */
  ReasoningContent?: string;
}

/** 问答对信息 */
declare interface QaItem {
  /** 问答id */
  QaId?: string | null;
  /** 问题 */
  Question?: string | null;
  /** 答案 */
  Answer?: string | null;
  /** 属性标签 */
  AttributeLabels?: AttributeLabelReferItem[] | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** 文档解析失败记录 */
declare interface ReconstructDocumentFailedPage {
  /** 失败页码 */
  PageNumber?: number | null;
}

/** ReconstructDocumentSSE 功能配置参数 */
declare interface ReconstructDocumentSSEConfig {
  /** Markdown文件中表格返回的形式0，表格以MD形式返回1，表格以HTML形式返回默认为0 */
  TableResultType?: string;
  /** Markdown文件中图片返回的形式0:markdown中图片以链接形式返回1:markdown中图片只返回图片中提取的文本内容默认是0 */
  MarkdownImageResponseType?: string;
  /** Markdown文件中是否包含页码信息 */
  ReturnPageFormat?: boolean;
  /** 自定义输出页码样式,{{p}}为页码占位符，开启ReturnPageFormat生效。未填默认样式:page {{p}} */
  PageFormat?: string;
}

/** 检索的结果 */
declare interface RetrievalRecord {
  /** 检索结果的元数据 */
  Metadata?: RetrievalRecordMetadata;
  /** 检索到的标题 */
  Title?: string;
  /** 检索到的内容 */
  Content?: string;
}

/** 检索结果的元数据 */
declare interface RetrievalRecordMetadata {
  /** 结果的类型。- `DOC`：文档- `QA`：问答对 */
  Type?: string;
  /** 检索结果的来源。- `SEMANTIC`：从语义检索中得到的结果- `FULL_TEXT`：从全文检索中得到的结果 */
  ResultSource?: string;
  /** 切片在文档中的页码，仅部分文档支持 */
  ChunkPageNumbers?: number[];
}

/** 检索参数设置 */
declare interface RetrievalSetting {
  /** 检索的类型，不填该参数则检索全部。- `DOC`：文档- `QA`：QA仅RetrieveKnowledge接口支持该参数 */
  Type?: string;
  /** 返回个数 */
  TopK?: number;
  /** 分数过滤 */
  ScoreThreshold?: number;
}

/** 分段配置 */
declare interface SegmentationConfig {
  /** 最大分片长度 */
  MaxChunkSize?: number;
}

/** 文档解析失败记录 */
declare interface SplitDocumentFailedPage {
  /** 失败页码 */
  PageNumber?: number | null;
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

declare interface ChatCompletionsRequest {
  /** 模型名称 */
  Model: string;
  /** 聊天上下文信息。说明：1. 长度最多为 40，按对话时间从旧到新在数组中排列。2. Message.Role 可选值：system、user、assistant。其中，system 角色可选，如存在则必须位于列表的最开始。user（tool） 和 assistant 需交替出现（一问一答），以 user 提问开始，user（tool）提问结束，其中tool可以连续出现多次，且 Content 不能为空。Role 的顺序示例：[system（可选） user assistant user（tool tool ...） assistant user（tool tool ...） ...]。 */
  Messages: Message[];
  /** 是否流式输出 */
  Stream?: boolean;
  /** 控制生成的随机性，较高的值会产生更多样化的输出。 */
  Temperature?: number;
  /** 最大生成的token数量 */
  MaxTokens?: number;
}

declare interface ChatCompletionsResponse {
  /** Unix 时间戳，单位为秒。 */
  Created?: number;
  /** Token 统计信息。按照总 Token 数量计费。 */
  Usage?: ChatUsage;
  /** 本次请求的 RequestId。 */
  Id?: string;
  /** 回复内容。 */
  Choices?: Choice[];
  /** 模型名称。 */
  Model?: string;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface CreateAttributeLabelRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 属性标识，最大40个英文字符，如style */
  AttributeKey: string;
  /** 属性名称，最大80个英文字符，如风格 */
  AttributeName: string;
  /** 属性标签信息 */
  Labels?: AttributeLabelItem[];
}

declare interface CreateAttributeLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKnowledgeBaseRequest {
}

declare interface CreateKnowledgeBaseResponse {
  /** 知识库ID */
  KnowledgeBaseId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateQARequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 问题，最大1000个英文字符 */
  Question: string;
  /** 答案，最大4000个英文字符 */
  Answer: string;
  /** 属性标签 */
  AttributeLabels?: AttributeLabelReferItem[];
}

declare interface CreateQAResponse {
  /** 问答对ID */
  QaId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReconstructDocumentFlowRequest {
  /** 文件类型。**支持的文件类型：**- `PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`、`HTML`、`EPUB`、`BMP`、`GIF`、`WEBP`、`HEIC`、`EPS`、`ICNS`、`IM`、`PCX`、`PPM`、`TIFF`、`XBM`、`HEIF`、`JP2`**支持的文件大小：** - `PDF` 最大500M - `DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M - `TXT`、`MD` 最大10M - 其他 最大20M */
  FileType: string;
  /** 文件的 URL 地址。文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749) */
  FileUrl?: string;
  /** 文件的 Base64 值。支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。支持的图片像素：单边介于20-10000px之间。文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。 */
  FileBase64?: string;
  /** 文档的起始页码。当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。 */
  FileStartPageNumber?: number;
  /** 文档的结束页码。当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。 */
  FileEndPageNumber?: number;
  /** 创建文档解析任务配置信息。 */
  Config?: CreateReconstructDocumentFlowConfig;
}

declare interface CreateReconstructDocumentFlowResponse {
  /** 任务唯一id。30天内可以通过GetReconstructDocumentResult接口查询TaskId对应的处理结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSplitDocumentFlowRequest {
  /** 文件类型。**支持的文件类型：**- `PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`、`HTML`、`EPUB`**支持的文件大小：** - `PDF` 最大500M - `DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M - `TXT`、`MD` 最大10M - 其他 最大20M */
  FileType: string;
  /** 文件的 URL 地址。文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749) */
  FileUrl: string;
  /** 文件名，可选。**需带文件类型后缀**，当文件名无法从传入的`FileUrl`获取时需要通过该字段来明确。 */
  FileName?: string;
  /** 文件的 Base64 值。支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。支持的图片像素：单边介于20-10000px之间。文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。 */
  FileBase64?: string;
  /** 文档的起始页码。当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。 */
  FileStartPageNumber?: number;
  /** 文档的结束页码。当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。 */
  FileEndPageNumber?: number;
  /** 文档拆分任务的配置信息。 */
  Config?: CreateSplitDocumentFlowConfig;
}

declare interface CreateSplitDocumentFlowResponse {
  /** 拆分任务唯一ID。30天内可以通过`GetSplitDocumentResult`接口查询TaskId对应的拆分结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAttributeLabelsRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 属性ID */
  AttributeIds: string[];
}

declare interface DeleteAttributeLabelsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDocsRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 文档ID列表。支持批量删除，数量不超过100 */
  DocIds: string[];
}

declare interface DeleteDocsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteKnowledgeBaseRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
}

declare interface DeleteKnowledgeBaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQAsRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 问答对ID列表。支持批量删除，数量不超过100 */
  QaIds: string[];
}

declare interface DeleteQAsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 文档ID */
  DocId: string;
}

declare interface DescribeDocResponse {
  /** 文档ID */
  DocId?: string;
  /** 状态，- Uploading 上传中 - Auditing 审核中- Parsing 解析中 - ParseFailed 解析失败- Indexing 创建索引中 - IndexFailed 创建索引失败- Success 发布成功- Failed 失败 */
  Status?: string;
  /** 文件名 */
  FileName?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 属性标签 */
  AttributeLabels?: AttributeLabelReferItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetEmbeddingRequest {
  /** 模型名称 */
  Model: string;
  /** 需要 embedding 的文本, 单条文本最大长度500个字符, 总条数最大7条 */
  Inputs: string[];
}

declare interface GetEmbeddingResponse {
  /** 特征 */
  Data?: EmbeddingObject[];
  /** 消耗量，返回TotalToken */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetReconstructDocumentResultRequest {
  /** 解析任务ID */
  TaskId: string;
}

declare interface GetReconstructDocumentResultResponse {
  /** 任务状态。- `Success`：执行完成- `Processing`：执行中- `Pause`: 暂停- `Failed`：执行失败- `WaitExecute`：等待执行 */
  Status?: string;
  /** 解析结果的临时下载地址。文件类型为zip压缩包，下载链接有效期30分钟 */
  DocumentRecognizeResultUrl?: string;
  /** 文档解析失败的页码 */
  FailedPages?: ReconstructDocumentFailedPage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSplitDocumentResultRequest {
  /** 拆分任务ID */
  TaskId: string;
}

declare interface GetSplitDocumentResultResponse {
  /** 任务状态。- `Success`：执行完成- `Processing`：执行中- `Pause`: 暂停- `Failed`：执行失败- `WaitExecute`：等待执行 */
  Status?: string;
  /** 拆分结果的临时下载地址。文件类型为zip压缩包，下载链接有效期30分钟。压缩包内包含\*.md、\*.jsonl、\*mllm.json以及images文件夹。> **jsonl** 结构说明：- `page_content`: 用于生成嵌入（embedding）库，以便于检索使用。该字段中的图片将使用占位符替换。- `org_data`: 表示与 page_content 对应的最小语义完整性块，用于问答模型的处理。- `big_data`: 表示与 page_content 对应的最大语义完整性块，也用于问答模型的处理。 */
  DocumentRecognizeResultUrl?: string;
  /** 文档拆分失败的页码 */
  FailedPages?: SplitDocumentFailedPage[];
  /** 文档拆分任务的用量 */
  Usage?: DocumentUsage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportQAsRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 文件名 */
  FileName: string;
  /** 文件的 Url 地址。文件存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 Url 速度和稳定性可能受一定影响。导入模板：https://cdn.xiaowei.qq.com/lke/assets//static/批量导入问答模板v6.xlsx */
  FileUrl: string;
  /** 文件类型，仅支持XLSX格式，请使用模板 */
  FileType?: string;
}

declare interface ImportQAsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAttributeLabelsRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 页码，默认1 */
  PageNumber?: number;
  /** 每页数目，最大50，默认20 */
  PageSize?: number;
}

declare interface ListAttributeLabelsResponse {
  /** 属性总数 */
  TotalCount?: number;
  /** 属性标签列表 */
  List?: AttributeItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDocsRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 页码，默认1 */
  PageNumber?: number;
  /** 每页数目，最大50，默认20 */
  PageSize?: number;
}

declare interface ListDocsResponse {
  /** 文档总数 */
  TotalCount?: number;
  /** 文档信息 */
  List?: DocItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListQAsRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 页码，默认1 */
  PageNumber?: number;
  /** 每页数目，最大50，默认20 */
  PageSize?: number;
}

declare interface ListQAsResponse {
  /** 问答对总数量 */
  TotalCount?: number;
  /** 问答对信息 */
  List?: QaItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAttributeLabelRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 属性ID */
  AttributeId: string;
  /** 属性标识，最大40个英文字符，如style */
  AttributeKey: string;
  /** 属性名称，最大80个英文字符，如风格 */
  AttributeName: string;
  /** 属性标签 */
  Labels?: AttributeLabelItem[];
}

declare interface ModifyAttributeLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQARequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 问答对ID */
  QaId: string;
  /** 问题，最大1000个英文字符 */
  Question: string;
  /** 答案，最大4000个英文字符 */
  Answer: string;
  /** 属性标签 */
  AttributeLabels?: AttributeLabelReferItem[];
}

declare interface ModifyQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryRewriteRequest {
  /** 需要改写的多轮历史会话，每轮历史对话需要包含user（问）和assistant（答）成对输入，由于模型字符限制，最多提供4轮对话。针对最后一轮对话进行改写 */
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

declare interface ReconstructDocumentSSERequest {
  /** 文件类型。**支持的文件类型**：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2**支持的文件大小**：- PDF、DOC、DOCX、PPT、PPTX 支持100M- MD、TXT 支持10M- 其他支持20M */
  FileType: string;
  /** 文件的 URL 地址。文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749) */
  FileUrl?: string;
  /** 文件的 Base64 值。支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。支持的图片像素：单边介于20-10000px之间。文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。 */
  FileBase64?: string;
  /** 文档的起始页码。当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。 */
  FileStartPageNumber?: number;
  /** 文档的结束页码。当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。 */
  FileEndPageNumber?: number;
  /** 文档解析配置信息 */
  Config?: ReconstructDocumentSSEConfig;
}

declare interface ReconstructDocumentSSEResponse {
  /** 任务ID。本次请求的唯一标识 */
  TaskId?: string;
  /** 响应类型。1：返回进度信息，2：返回解析结果 */
  ResponseType?: string;
  /** 进度。0~100 */
  Progress?: string;
  /** 进度信息。 */
  ProgressMessage?: string;
  /** 文档解析结果URL。存储在腾讯云cos，可以通过http请求下载，URL十分钟内有效。 */
  DocumentRecognizeResultUrl?: string;
  /** 文档解析失败的页码。 */
  FailedPages?: ReconstructDocumentFailedPage[];
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface RetrieveKnowledgeRequest {
  /** 知识库ID。 */
  KnowledgeBaseId: string;
  /** 用于检索的文本。 */
  Query: string;
  /** 检索方法，默认使用`HYBRID`混合检索。- `SEMANTIC`：语义检索- `FULL_TEXT`：全文检索- `HYBRID`：混合检索 */
  RetrievalMethod?: string;
  /** 检索设置。 */
  RetrievalSetting?: RetrievalSetting;
  /** 标签过滤。 */
  AttributeLabels?: LabelItem[];
}

declare interface RetrieveKnowledgeResponse {
  /** 检索结果 */
  Records?: RetrievalRecord[];
  /** 检索结果数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunRerankRequest {
  /** 查询内容 */
  Query: string;
  /** 文档列表，最多20个 */
  Docs: string[];
  /** 模型名称, 默认: lke-reranker-base */
  Model?: string;
}

declare interface RunRerankResponse {
  /** 相关性, 数值越大越相关 */
  ScoreList?: number[];
  /** 消耗量，仅返回TotalToken */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadDocRealtimeRequest {
}

declare interface UploadDocRealtimeResponse {
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface UploadDocRequest {
  /** 知识库ID */
  KnowledgeBaseId: string;
  /** 文件名，可选。**需带文件类型后缀**，当文件名无法从传入的`FileUrl`获取时需要通过该字段来明确。 */
  FileName: string;
  /** 文件类型。**支持的文件类型：**- `PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`**支持的文件大小：** - `PDF`、`DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M - `TXT`、`MD` 最大10M - 其他 最大20M */
  FileType: string;
  /** 文件的 URL 地址。文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749) */
  FileUrl: string;
  /** 属性标签引用 */
  AttributeLabel?: AttributeLabelReferItem[];
  /** 属性标签引用 */
  AttributeLabels?: AttributeLabelReferItem[];
  /** 分段信息 */
  Config?: SegmentationConfig;
}

declare interface UploadDocResponse {
  /** 文档ID */
  DocId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Lkeap 知识引擎原子能力} */
declare interface Lkeap {
  (): Versions;
  /** 对话 {@link ChatCompletionsRequest} {@link ChatCompletionsResponse} */
  ChatCompletions(data: ChatCompletionsRequest, config?: AxiosRequestConfig): AxiosPromise<ChatCompletionsResponse>;
  /** 创建属性标签 {@link CreateAttributeLabelRequest} {@link CreateAttributeLabelResponse} */
  CreateAttributeLabel(data: CreateAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAttributeLabelResponse>;
  /** 创建知识库 {@link CreateKnowledgeBaseRequest} {@link CreateKnowledgeBaseResponse} */
  CreateKnowledgeBase(data?: CreateKnowledgeBaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKnowledgeBaseResponse>;
  /** 创建问答对 {@link CreateQARequest} {@link CreateQAResponse} */
  CreateQA(data: CreateQARequest, config?: AxiosRequestConfig): AxiosPromise<CreateQAResponse>;
  /** 创建文档解析任务 {@link CreateReconstructDocumentFlowRequest} {@link CreateReconstructDocumentFlowResponse} */
  CreateReconstructDocumentFlow(data: CreateReconstructDocumentFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReconstructDocumentFlowResponse>;
  /** 创建文档拆分任务 {@link CreateSplitDocumentFlowRequest} {@link CreateSplitDocumentFlowResponse} */
  CreateSplitDocumentFlow(data: CreateSplitDocumentFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSplitDocumentFlowResponse>;
  /** 批量删除属性标签 {@link DeleteAttributeLabelsRequest} {@link DeleteAttributeLabelsResponse} */
  DeleteAttributeLabels(data: DeleteAttributeLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttributeLabelsResponse>;
  /** 删除文档 {@link DeleteDocsRequest} {@link DeleteDocsResponse} */
  DeleteDocs(data: DeleteDocsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDocsResponse>;
  /** 删除知识库 {@link DeleteKnowledgeBaseRequest} {@link DeleteKnowledgeBaseResponse} */
  DeleteKnowledgeBase(data: DeleteKnowledgeBaseRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteKnowledgeBaseResponse>;
  /** 删除问答对 {@link DeleteQAsRequest} {@link DeleteQAsResponse} */
  DeleteQAs(data: DeleteQAsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQAsResponse>;
  /** 查询文档详情 {@link DescribeDocRequest} {@link DescribeDocResponse} */
  DescribeDoc(data: DescribeDocRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocResponse>;
  /** 获取特征向量 {@link GetEmbeddingRequest} {@link GetEmbeddingResponse} */
  GetEmbedding(data: GetEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<GetEmbeddingResponse>;
  /** 查询文档解析任务结果 {@link GetReconstructDocumentResultRequest} {@link GetReconstructDocumentResultResponse} */
  GetReconstructDocumentResult(data: GetReconstructDocumentResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetReconstructDocumentResultResponse>;
  /** 查询文档拆分任务结果 {@link GetSplitDocumentResultRequest} {@link GetSplitDocumentResultResponse} */
  GetSplitDocumentResult(data: GetSplitDocumentResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetSplitDocumentResultResponse>;
  /** 批量导入问答对 {@link ImportQAsRequest} {@link ImportQAsResponse} */
  ImportQAs(data: ImportQAsRequest, config?: AxiosRequestConfig): AxiosPromise<ImportQAsResponse>;
  /** 获取属性标签列表 {@link ListAttributeLabelsRequest} {@link ListAttributeLabelsResponse} */
  ListAttributeLabels(data: ListAttributeLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAttributeLabelsResponse>;
  /** 获取文档列表 {@link ListDocsRequest} {@link ListDocsResponse} */
  ListDocs(data: ListDocsRequest, config?: AxiosRequestConfig): AxiosPromise<ListDocsResponse>;
  /** 获取问答对列表 {@link ListQAsRequest} {@link ListQAsResponse} */
  ListQAs(data: ListQAsRequest, config?: AxiosRequestConfig): AxiosPromise<ListQAsResponse>;
  /** 修改属性标签 {@link ModifyAttributeLabelRequest} {@link ModifyAttributeLabelResponse} */
  ModifyAttributeLabel(data: ModifyAttributeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAttributeLabelResponse>;
  /** 修改问答对 {@link ModifyQARequest} {@link ModifyQAResponse} */
  ModifyQA(data: ModifyQARequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQAResponse>;
  /** 多轮改写 {@link QueryRewriteRequest} {@link QueryRewriteResponse} */
  QueryRewrite(data: QueryRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<QueryRewriteResponse>;
  /** 实时文档解析 {@link ReconstructDocumentSSERequest} {@link ReconstructDocumentSSEResponse} */
  ReconstructDocumentSSE(data: ReconstructDocumentSSERequest, config?: AxiosRequestConfig): AxiosPromise<ReconstructDocumentSSEResponse>;
  /** 检索知识库内容 {@link RetrieveKnowledgeRequest} {@link RetrieveKnowledgeResponse} */
  RetrieveKnowledge(data: RetrieveKnowledgeRequest, config?: AxiosRequestConfig): AxiosPromise<RetrieveKnowledgeResponse>;
  /** 重排序 {@link RunRerankRequest} {@link RunRerankResponse} */
  RunRerank(data: RunRerankRequest, config?: AxiosRequestConfig): AxiosPromise<RunRerankResponse>;
  /** 上传文档 {@link UploadDocRequest} {@link UploadDocResponse} */
  UploadDoc(data: UploadDocRequest, config?: AxiosRequestConfig): AxiosPromise<UploadDocResponse>;
  /** 实时文档上传 {@link UploadDocRealtimeRequest} {@link UploadDocRealtimeResponse} */
  UploadDocRealtime(data?: UploadDocRealtimeRequest, config?: AxiosRequestConfig): AxiosPromise<UploadDocRealtimeResponse>;
}

export declare type Versions = ["2024-05-22"];

export default Lkeap;
