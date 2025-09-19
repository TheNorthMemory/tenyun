/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 返回的回复, 支持多个。 */
declare interface Choice {
  /** 返回的回复。 */
  Message?: OutputMessage;
}

/** 切片对象信息 */
declare interface Chunk {
  /** chunk索引。切片顺序 id。 */
  Index?: number;
  /** chunk内容。 */
  Content?: string;
}

/** 文档分片配置 */
declare interface ChunkConfig {
  /** 最大分片长度 */
  MaxChunkSize?: number;
  /** 分隔符列表 */
  Delimiters?: string[];
  /** 相邻切片重合字符数，需要小于分片长度 */
  ChunkOverlap?: number;
}

/** 文档切片异步任务 */
declare interface ChunkConfigAsync {
  /** 最大分片长度 */
  MaxChunkSize?: number;
}

/** 切片文档信息 */
declare interface ChunkDocument {
  /** 文件类型，支持 MD，TXT 格式。 */
  FileType?: string;
  /** 文本原文，使用字符串格式输入。 */
  FileContent?: string;
}

/** 文档信息 */
declare interface Document {
  /** 支持的文件类型：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2文档解析支持的文件大小：-PDF、DOC、DOCX、PPT、PPTX支持100M-MD、TXT、XLS、XLSX、CSV支特10M-其他支持20M文本切片支持的文件大小：-PDF最大300M-D0CX、D0C、PPT、PPTX最大200M-TXT、MD最大10M-其他最大20M */
  FileType: string;
  /** 文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，使用腾讯云COS 文件地址。 */
  FileUrl?: string;
  /** 文件的 base64 值，携带 MineType前缀信息。编码后的后的文件不超过 10M。支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过3秒。支持的图片像素：单边介于20-10000px之间。 */
  FileContent?: string;
  /** 文件名称，当使用 base64上传的时候使用。 */
  FileName?: string;
  /** 文档的起始页码 */
  FileStartPageNumber?: number;
  /** 文档的结束页码 */
  FileEndPageNumber?: number;
}

/** 文档切片用量 */
declare interface DocumentChunkUsage {
  /** 解析页面数量 */
  PageNumber?: number;
  /** 消耗 token数量 */
  TotalTokens?: number;
}

/** 文档解析配置 */
declare interface DocumentParseConfig {
  /** 0:图片以链接形式返回1:返回图片中提取的文本内容 */
  ImageResponseType?: number;
}

/** 向量内容 */
declare interface EmbeddingData {
  /** embedding 内容 */
  Embedding?: number[] | null;
  /** 索引序号 */
  Index?: number | null;
}

/** 会话内容，按对话时间从旧到新在数组中排列，长度受模型窗口大小限制。 */
declare interface Message {
  /** 角色，可选值包括 system、user、assistant、 tool。 */
  Role?: string;
  /** 具体文本内容 */
  Content?: string;
  /** 当role为tool时传入，标识具体的函数调用 */
  ToolCallId?: string;
  /** 模型生成的工具调用 */
  ToolCalls?: ToolCall[];
}

/** 联网搜索选项。 */
declare interface OnlineSearchOptions {
  /** 搜索引擎。支持 bing 和 sogou。 */
  Engine?: string;
}

/** 会话内容，按对话时间从旧到新在数组中排列，长度受模型窗口大小限制。 */
declare interface OutputMessage {
  /** 角色 */
  Role?: string;
  /** 文本内容 */
  Content?: string;
  /** 推理内容 */
  ReasoningContent?: string;
  /** 模型生成的工具调用 */
  ToolCalls?: ToolCall[];
}

/** 消耗页数 */
declare interface PageUsage {
  /** 消耗总页数 */
  TotalPages?: number;
}

/** 文档信息 */
declare interface ParseDocument {
  /** 支持的文件类型：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2文档解析支持的文件大小：-PDF、DOC、DOCX、PPT、PPTX支持100M-MD、TXT、XLS、XLSX、CSV支特10M-其他支持20M文本切片支持的文件大小：-PDF最大300M-D0CX、D0C、PPT、PPTX最大200M-TXT、MD最大10M-其他最大20M */
  FileType: string;
  /** 文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，使用腾讯云COS 文件地址。 */
  FileUrl?: string;
  /** 文件的 base64 值，携带 MineType前缀信息。编码后的后的文件不超过 10M。支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过3秒。支持的图片像素：单边介于20-10000px之间。文件的 FileUrl、FileContent必须提供一个，如果都提供只使用 FileUrl。 */
  FileContent?: string;
  /** 文档解析配置 */
  DocumentParseConfig?: DocumentParseConfig;
  /** 文档的起始页码 */
  FileStartPageNumber?: number;
  /** 文档的结束页码 */
  FileEndPageNumber?: number;
}

/** 输出结果 */
declare interface RerankResult {
  /** 对应的doc在输入候选doc数组中的位置索引值 */
  Index?: number | null;
  /** 相似度分数 */
  RelevanceScore?: number | null;
  /** doc原文内容 */
  Document?: string | null;
}

/** token使用量 */
declare interface TokenUsage {
  /** 表示prompt的tokens数，多次返回中保持不变 */
  PromptTokens?: number;
  /** 回答的token总数，在流式返回中，表示到目前为止所有completion的tokens总数，多次返回中持续累加 */
  CompletionTokens?: number;
  /** 表示prompt_tokens和completion_tokens之和 */
  TotalTokens?: number;
}

/** 用户指定模型使用的工具 */
declare interface Tool {
  /** 工具类型，当前只支持function */
  Type: string;
  /** 具体要调用的function */
  Function: ToolFunction;
}

/** 模型生成的工具调用 */
declare interface ToolCall {
  /** 工具调用id */
  Id?: string;
  /** 工具调用类型，当前只支持function */
  Type?: string;
  /** 具体的function调用 */
  Function?: ToolCallFunction;
  /** 索引值 */
  Index?: number;
}

/** 具体的function调用 */
declare interface ToolCallFunction {
  /** function名称 */
  Name?: string;
  /** function参数，一般为json字符串 */
  Arguments?: string;
}

/** function定义 */
declare interface ToolFunction {
  /** function名称，只能包含a-z，A-Z，0-9，_或- */
  Name: string;
  /** function参数，一般为json字符串 */
  Parameters: string;
  /** function的简单描述 */
  Description?: string;
}

/** token消耗总数 */
declare interface Usage {
  /** tokens总数 */
  TotalTokens?: number | null;
}

/** 搜索结果网页信息。 */
declare interface WebContent {
  /** 搜素问题 */
  Query?: string;
  /** 标题 */
  Title?: string;
  /** 链接 */
  Url?: string;
  /** 时间 */
  Time?: string;
  /** 网页内容 */
  Content?: string;
  /** 切片索引 */
  ChunkIndex?: string;
  /** 分数 */
  Score?: string;
}

declare interface ChatCompletionsRequest {
  /** 会话内容，按对话时间从旧到新在数组中排列，长度受模型窗口大小限制。 */
  Messages: Message[];
  /** 模型名称，可选模型列表：hunyuan-turbo，hunyuan-large，hunyuan-large-longcontext，hunyuan-standard，hunyuan-standard-256K，deepseek-r1，deepseek-v3，deepseek-r1-distill-qwen-32b。 */
  ModelName: string;
  /** 是否以流式接口的形式返回数据，默认true。 */
  Stream?: boolean;
  /** 取值区间为[0.0, 1.0], 非必要不建议使用, 不合理的取值会影响效果 。 */
  TopP?: number;
  /** 取值区间为[0.0, 2.0], 非必要不建议使用, 不合理的取值会影响效果 。 */
  Temperature?: number;
  /** 是否开启联网搜索。默认为 false。 */
  OnlineSearch?: boolean;
  /** 当 OnlineSearch 为 true 时，指定的搜索引擎，默认为 bing。 */
  OnlineSearchOptions?: OnlineSearchOptions;
  /** 可调用的工具列表，当前支持模型：hunyuan-turbo, deepseek-v3。 */
  Tools?: Tool[];
  /** 工具使用选项，可选值包括 none、auto、custom。说明：1. 仅对 hunyuan-turbo、deepseek-v3 模型生效。2. none：不调用工具；auto：模型自行选择生成回复或调用工具；custom：强制模型调用指定的工具。3. 未设置时，默认值为auto */
  ToolChoice?: string;
  /** 强制模型调用指定的工具，当参数ToolChoice为custom时，此参数为必填 */
  CustomTool?: Tool;
}

declare interface ChatCompletionsResponse {
  /** 此次请求的id */
  Id?: string;
  /** 回复内容 */
  Choices?: Choice[];
  /** token使用量 */
  Usage?: TokenUsage;
  /** 联网搜索结果。 */
  OnlineSearchContent?: WebContent[] | null;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface ChunkDocumentAsyncRequest {
  /** 文件信息。 */
  Document: Document;
  /** 模型名称，可选模型列表：doc-tree-chunk。 */
  ModelName: string;
  /** 文件切片配置。 */
  Config?: ChunkConfigAsync;
}

declare interface ChunkDocumentAsyncResponse {
  /** 任务 ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChunkDocumentRequest {
  /** 切片文件信息。 */
  Document: ChunkDocument;
  /** 模型名称，可选模型列表：doc-chunk。 */
  ModelName: string;
  /** 文件切片配置。 */
  Config?: ChunkConfig;
}

declare interface ChunkDocumentResponse {
  /** 无 */
  Chunks?: Chunk[];
  /** token消耗量 */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDocumentChunkResultRequest {
  /** 任务 ID */
  TaskId: string;
}

declare interface GetDocumentChunkResultResponse {
  /** 任务状态，-1：失败，0：运行中，1：成功。 */
  Status?: number;
  /** 切片结果文件。 */
  DocumentChunkResultUrl?: string;
  /** Token用量。 */
  Usage?: DocumentChunkUsage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDocumentParseResultRequest {
  /** 任务 Id */
  TaskId: string;
}

declare interface GetDocumentParseResultResponse {
  /** 任务状态，-1：失败，0：运行中，1：成功。 */
  Status?: number;
  /** 结果文件。 */
  DocumentParseResultUrl?: string;
  /** 失败的页码。 */
  FailedPages?: number[] | null;
  /** 消耗页数 */
  Usage?: PageUsage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTextEmbeddingRequest {
  /** 模型名称，可选模型列表：bge-base-zh-v1.5,conan-embedding-v1,bge-m3,KaLM-embedding-multilingual-mini-v1。 */
  ModelName: string;
  /** 需进行向量化的文本集。 */
  Texts: string[];
}

declare interface GetTextEmbeddingResponse {
  /** 结果集 */
  Data?: EmbeddingData[];
  /** 向量化消耗的token数量。 */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ParseDocumentAsyncRequest {
  /** 文件信息。 */
  Document: Document;
  /** 模型名称，可选模型列表：doc-llm。 */
  ModelName: string;
}

declare interface ParseDocumentAsyncResponse {
  /** 任务 id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ParseDocumentRequest {
  /** 文件信息 */
  Document: ParseDocument;
  /** 模型名称，doc-llm。 */
  ModelName: string;
}

declare interface ParseDocumentResponse {
  /** 进度：0-100。 */
  Progress?: string;
  /** 解析文件结果。 */
  DocumentParseResultUrl?: string;
  /** 失败页码。 */
  FailedPages?: number[];
  /** 消耗页数 */
  Usage?: PageUsage;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface RunRerankRequest {
  /** 模型名称，可选模型列表：bge-reranker-large，bge-reranker-v2-m3。 */
  ModelName: string;
  /** 查询文本。 */
  Query: string;
  /** 待排序的候选doc列表。 */
  Documents: string[];
  /** 排序返回的top文档数量, 如果没有指定则返回全部候选doc，如果指定的top_n值大于输入的候选doc数量，返回全部doc。 */
  TopN?: number;
  /** 返回的排序结果列表里面是否返回每一条document原文，默认值False。 */
  ReturnDocuments?: boolean;
}

declare interface RunRerankResponse {
  /** 输出结果集。 */
  Data?: RerankResult[];
  /** 消耗token数量。 */
  Usage?: Usage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20180416 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-04-16' } }

  /** cvm 自动扩盘参数 */
  interface AutoScaleDiskInfo {
    /** 节点类型 hotData,warmData */
    NodeType?: string | null;
    /** 0:百分比扩容;1:绝对值扩容 */
    ScaleType?: number | null;
    /** 触发阈值,单位%,例如80% */
    Threshold?: number | null;
    /** 触发持续时间,单位分钟,例如60 */
    Duration?: number | null;
    /** 每次扩容比例,单位%,例如20% */
    PercentSize?: number | null;
    /** 绝对值扩容,单位GB,例如100GB */
    FixSize?: number | null;
    /** 扩容上限,单位GB,例如500GB */
    MaxSize?: number | null;
  }

  /** 后备索引元数据字段 */
  interface BackingIndexMetaField {
    /** 后备索引名 */
    IndexName?: string | null;
    /** 后备索引状态 */
    IndexStatus?: string | null;
    /** 后备索引存储大小 */
    IndexStorage?: number | null;
    /** 后备索引当前生命周期 */
    IndexPhrase?: string | null;
    /** 后备索引创建时间 */
    IndexCreateTime?: string | null;
  }

  /** 集群维度视图数据 */
  interface ClusterView {
    /** 集群健康状态 */
    Health?: number;
    /** 集群是否可见 */
    Visible: number;
    /** 集群是否熔断 */
    Break: number;
    /** 平均磁盘使用率 */
    AvgDiskUsage: number;
    /** 平均内存使用率 */
    AvgMemUsage: number;
    /** 平均cpu使用率 */
    AvgCpuUsage: number;
    /** 集群总存储大小 */
    TotalDiskSize: number;
    /** 客户端请求节点 */
    TargetNodeTypes: string[];
    /** 在线节点数 */
    NodeNum: number;
    /** 总节点数 */
    TotalNodeNum: number;
    /** 数据节点数 */
    DataNodeNum: number;
    /** 索引数 */
    IndexNum: number;
    /** 文档数 */
    DocNum: number;
    /** 磁盘已使用字节数 */
    DiskUsedInBytes: number;
    /** 分片个数 */
    ShardNum: number;
    /** 主分片个数 */
    PrimaryShardNum: number;
    /** 迁移中的分片个数 */
    RelocatingShardNum: number;
    /** 初始化中的分片个数 */
    InitializingShardNum: number;
    /** 未分配的分片个数 */
    UnassignedShardNum: number;
    /** 企业版COS存储容量大小，单位GB */
    TotalCosStorage: number;
    /** 企业版集群可搜索快照cos存放的bucket名称 */
    SearchableSnapshotCosBucket: string | null;
    /** 企业版集群可搜索快照cos所属appid */
    SearchableSnapshotCosAppId: string | null;
  }

  /** 普通索引信息列表 */
  interface CommonIndexInfo {
    /** 普通索引名 */
    IndexName?: string | null;
    /** 分片状态 */
    IsShardComplete?: number | null;
  }

  /** ES cos自动备份信息 */
  interface CosBackup {
    /** 是否开启cos自动备份 */
    IsAutoBackup: boolean;
    /** 自动备份执行时间（精确到小时）, e.g. "22:00" */
    BackupTime: string;
    /** 0 腾讯云仓库; 1 客户仓库 */
    EsRepositoryType?: number;
    /** 客户快照仓库名称 */
    UserEsRepository?: string;
    /** 快照存储周期 单位天 */
    StorageDuration?: number;
    /** 自动备份频率单位小时 */
    AutoBackupInterval?: number;
  }

  /** 无 */
  interface CosSnapShotInfo {
    /** cos 桶名 */
    CosBucket?: string | null;
    /** base path */
    BasePath?: string | null;
    /** 快照名 */
    SnapshotName?: string | null;
    /** 状态 */
    State?: string | null;
    /** 快照版本 */
    Version?: string | null;
    /** 普通[{"DataStreamName":"ilm-history-5","Is索引信息列表 */
    CommonIndexArr?: CommonIndexInfo[] | null;
    /** 自治索引信息列表 */
    DataStreamArr?: DataStreamInfo[] | null;
  }

  /** 自治索引信息 */
  interface DataStreamInfo {
    /** 自治索引名 */
    DataStreamName?: string | null;
    /** 分片状态 */
    IsShardComplete?: number | null;
  }

  /** 插件信息 */
  interface DescribeInstancePluginInfo {
    /** 插件名 */
    PluginName?: string;
    /** 插件版本 */
    PluginVersion?: string;
    /** 插件描述 */
    PluginDesc?: string;
    /** 插件状态：-2 已卸载 -1 卸载中 0 安装中 1 已安装 */
    Status?: number;
    /** 插件是否可卸载 */
    Removable?: boolean;
    /** 0：系统插件 */
    PluginType?: number;
    /** 插件变更时间 */
    PluginUpdateTime?: string;
  }

  /** 数据接入信息 */
  interface DiData {
    /** 数据接入id */
    DiId?: string | null;
    /** 数据接入创建时间 */
    CreateTime?: string | null;
    /** 数据接入状态，0处理中，1正常，-2删除中，-3已删除 */
    Status?: number | null;
    /** cvm数据源信息 */
    DiDataSourceCvm?: DiDataSourceCvm | null;
    /** tke数据源信息 */
    DiDataSourceTke?: DiDataSourceTke | null;
    /** serverless目的端信息 */
    DiDataSinkServerless?: DiDataSinkServerless | null;
    /** 数据接入类型 */
    DiDataSourceType?: string | null;
  }

  /** 数据接入serverless目的端信息 */
  interface DiDataSinkServerless {
    /** serverless实例id */
    ServerlessId?: string | null;
  }

  /** 数据接入cvm数据源信息 */
  interface DiDataSourceCvm {
    /** vpc id */
    VpcId?: string | null;
    /** 采集路径列表 */
    LogPaths?: string[] | null;
    /** cvm实例信息列表 */
    CvmInstances?: DiDataSourceCvmInstance[] | null;
    /** 采集器id */
    CollectorId?: string | null;
  }

  /** 数据接入cvm实例信息 */
  interface DiDataSourceCvmInstance {
    /** cvm实例id */
    InstanceId?: string | null;
    /** vpc id */
    VpcId?: string | null;
    /** 子网id */
    SubnetId?: string | null;
    /** 错误信息 */
    ErrMsg?: string | null;
  }

  /** 数据接入tke数据源信息 */
  interface DiDataSourceTke {
    /** vpc id */
    VpcId?: string | null;
    /** tke实例id */
    TkeId?: string | null;
    /** 采集器id */
    CollectorId?: string | null;
    /** 采集源名称 */
    CollectorName?: string | null;
    /** 采集器类型 */
    CollectorType?: string | null;
    /** 采集器版本 */
    CollectorVersion?: string | null;
    /** tke包含的命名空间 */
    IncludeNamespaces?: string[] | null;
    /** tke不包含的命名空间 */
    ExcludeNamespaces?: string[] | null;
    /** tke pod标签名 */
    PodLabelKeys?: string[] | null;
    /** tke pod标签值 */
    PodLabelValues?: string[] | null;
    /** tke容器名称 */
    ContainerName?: string | null;
    /** tke采集器beat配置 */
    ConfigContent?: string | null;
    /** / */
    InputType?: string | null;
    /** TKE 日志采集路径 */
    InputPath?: string | null;
  }

  /** 数据接入cvm数据源 */
  interface DiSourceCvm {
    /** 数据源所属vpc id，创建后不允许修改 */
    VpcId?: string;
    /** cvm列表 */
    CvmIds?: string[];
    /** 采集路径列表，支持通配符 */
    LogPaths?: string[];
  }

  /** 数据接入tke数据源 */
  interface DiSourceTke {
    /** 数据源所属vpc id，创建后不允许修改 */
    VpcId?: string;
    /** tke实例id，创建后不允许修改 */
    TkeId?: string;
    /** tke包含的命名空间 */
    IncludeNamespaces?: string[];
    /** tke不包含的命名空间 */
    ExcludeNamespaces?: string[];
    /** tke容器名称 */
    ContainerName?: string;
    /** tke日志内容过滤 */
    LogFilters?: string;
    /** tke beats配置项 */
    ConfigContent?: string;
    /** tke pod标签 */
    PodLabel?: DiSourceTkePodLabel[];
    /** / */
    InputType?: string;
    /** tke 日志采集路径 */
    InputPath?: string;
  }

  /** tke pod标签 */
  interface DiSourceTkePodLabel {
    /** 标签key */
    Key?: string | null;
    /** 标签value */
    Value?: string | null;
  }

  /** 智能运维支持的诊断项和元信息 */
  interface DiagnoseJobMeta {
    /** 智能运维诊断项英文名 */
    JobName: string;
    /** 智能运维诊断项中文名 */
    JobZhName: string;
    /** 智能运维诊断项描述 */
    JobDescription: string;
  }

  /** 智能运维诊断项结果 */
  interface DiagnoseJobResult {
    /** 诊断项名 */
    JobName: string;
    /** 诊断项状态：-2失败，-1待重试，0运行中，1成功 */
    Status: number;
    /** 诊断项得分 */
    Score: number;
    /** 诊断摘要 */
    Summary: string;
    /** 诊断建议 */
    Advise: string;
    /** 诊断详情 */
    Detail: string;
    /** 诊断指标详情 */
    MetricDetails: MetricDetail[] | null;
    /** 诊断日志详情 */
    LogDetails: LogDetail[] | null;
    /** 诊断配置详情 */
    SettingDetails: SettingDetail[] | null;
  }

  /** 智能运维诊断结果 */
  interface DiagnoseResult {
    /** ES实例ID */
    InstanceId: string;
    /** 诊断报告ID */
    RequestId: string;
    /** 诊断触发时间 */
    CreateTime: string;
    /** 诊断是否完成 */
    Completed: boolean;
    /** 诊断总得分 */
    Score: number;
    /** 诊断类型，2 定时诊断，3 客户手动触发诊断 */
    JobType: number;
    /** 诊断参数，如诊断时间，诊断索引等 */
    JobParam: JobParam;
    /** 诊断项结果列表 */
    JobResults: DiagnoseJobResult[];
  }

  /** ik插件词典信息 */
  interface DictInfo {
    /** 词典键值 */
    Key: string;
    /** 词典名称 */
    Name: string;
    /** 词典大小，单位B */
    Size: number;
  }

  /** 智能运维指标维度 */
  interface Dimension {
    /** 智能运维指标维度Key */
    Key: string;
    /** 智能运维指标维度值 */
    Value: string;
  }

  /** 置放群组异步任务维护的时间段 */
  interface EnableScheduleOperationDuration {
    /** 支持开启异步任务的日期 */
    Periods?: string[] | null;
    /** 支持开启异步的开始时间 */
    TimeStart?: string | null;
    /** 支持开启异步的结束时间 */
    TimeEnd?: string | null;
    /** 支持开启异步的时区 */
    TimeZone?: string | null;
  }

  /** ES集群配置项 */
  interface EsAcl {
    /** kibana访问黑名单 */
    BlackIpList?: string[];
    /** kibana访问白名单 */
    WhiteIpList?: string[];
  }

  /** 配置组信息 */
  interface EsConfigSetInfo {
    /** 配置组类型，如ldap,ad等 */
    Type: string;
    /** "{\"order\":0,\"url\":\"ldap://10.0.1.72:389\",\"bind_dn\":\"cn=admin,dc=tencent,dc=com\",\"user_search.base_dn\":\"dc=tencent,dc=com\",\"user_search.filter\":\"(cn={0})\",\"group_search.base_dn\":\"dc=tencent,dc=com\"}" */
    EsConfig: string;
  }

  /** ES 词库信息 */
  interface EsDictionaryInfo {
    /** 启用词词典列表 */
    MainDict: DictInfo[];
    /** 停用词词典列表 */
    Stopwords: DictInfo[];
    /** QQ分词词典列表 */
    QQDict: DictInfo[];
    /** 同义词词典列表 */
    Synonym: DictInfo[];
    /** 更新词典类型 */
    UpdateType: string;
    /** ansj启用词词典列表 */
    AnsjMain?: DictInfo[] | null;
    /** ansj停用词词典列表 */
    AnsjStop?: DictInfo[] | null;
    /** ansj歧义词库列表 */
    AnsjAmbiguity?: DictInfo[] | null;
    /** ansj同义词词典列表 */
    AnsjSynonyms?: DictInfo[] | null;
  }

  /** ES公网访问控制信息 */
  interface EsPublicAcl {
    /** 访问黑名单 */
    BlackIpList?: string[];
    /** 访问白名单 */
    WhiteIpList?: string[];
  }

  /** 索引备份失败的数据结构 */
  interface Failures {
    /** 备份失败的索引名称 */
    Index?: string | null;
    /** 快照失败的分片号 */
    ShardId?: number | null;
    /** 快照失败的原因 */
    Reason?: string | null;
    /** 快照失败的状态 */
    Status?: string | null;
  }

  /** 节点Gpu信息 */
  interface GpuInfo {
    /** Gpu块数 */
    GpuCount?: number;
    /** Gpu类型 */
    GpuType?: string;
  }

  /** 索引元数据字段 */
  interface IndexMetaField {
    /** 索引类型 */
    IndexType?: string | null;
    /** 索引名 */
    IndexName?: string | null;
    /** 索引元数据JSON */
    IndexMetaJson?: string | null;
    /** 索引状态 */
    IndexStatus?: string | null;
    /** 索引存储大小，单位Byte */
    IndexStorage?: number | null;
    /** 索引创建时间 */
    IndexCreateTime?: string | null;
    /** 后备索引 */
    BackingIndices?: BackingIndexMetaField[] | null;
    /** 索引所属集群ID */
    ClusterId?: string | null;
    /** 索引所属集群名 */
    ClusterName?: string | null;
    /** 索引所属集群版本 */
    ClusterVersion?: string | null;
    /** 索引生命周期字段 */
    IndexPolicyField?: IndexPolicyField | null;
    /** 索引自治字段 */
    IndexOptionsField?: IndexOptionsField | null;
    /** 索引配置字段 */
    IndexSettingsField?: IndexSettingsField | null;
    /** 索引别名字段 */
    IndexAliasesField?: string[] | null;
    /** 索引所属集群APP ID */
    AppId?: number | null;
    /** 索引文档数 */
    IndexDocs?: number | null;
  }

  /** 索引自治字段 */
  interface IndexOptionsField {
    /** 过期时间 */
    ExpireMaxAge?: string | null;
    /** 过期大小 */
    ExpireMaxSize?: string | null;
    /** 滚动周期 */
    RolloverMaxAge?: string | null;
    /** 是否开启动态滚动 */
    RolloverDynamic?: string | null;
    /** 是否开启动态分片 */
    ShardNumDynamic?: string | null;
    /** 时间分区字段 */
    TimestampField?: string | null;
    /** 写入模式 */
    WriteMode?: string | null;
  }

  /** 索引生命周期字段 */
  interface IndexPolicyField {
    /** 是否开启warm阶段 */
    WarmEnable?: string | null;
    /** warm阶段转入时间 */
    WarmMinAge?: string | null;
    /** 是否开启cold阶段 */
    ColdEnable?: string | null;
    /** cold阶段转入时间 */
    ColdMinAge?: string | null;
    /** 是否开启frozen阶段 */
    FrozenEnable?: string | null;
    /** frozen阶段转入时间 */
    FrozenMinAge?: string | null;
    /** / */
    ColdAction?: string | null;
  }

  /** 索引配置字段 */
  interface IndexSettingsField {
    /** 索引主分片数 */
    NumberOfShards?: string | null;
    /** 索引副本分片数 */
    NumberOfReplicas?: string | null;
    /** 索引刷新频率 */
    RefreshInterval?: string | null;
  }

  /** 实例详细信息 */
  interface InstanceInfo {
    /** 实例ID */
    InstanceId?: string;
    /** 实例名称 */
    InstanceName?: string;
    /** 地域 */
    Region?: string;
    /** 可用区 */
    Zone?: string;
    /** 用户ID */
    AppId?: number;
    /** 用户UIN */
    Uin?: string;
    /** 实例所属VPC的UID */
    VpcUid?: string;
    /** 实例所属子网的UID */
    SubnetUid?: string;
    /** 实例状态，0:处理中,1:正常,-1:停止,-2:销毁中,-3:已销毁, -4:隔离中,2:创建集群时初始化中 */
    Status?: number;
    /** 自动续费标识。取值范围：RENEW_FLAG_AUTO：自动续费 RENEW_FLAG_MANUAL：不自动续费默认取值：RENEW_FLAG_DEFAULT：不自动续费若该参数指定为 RENEW_FLAG_AUTO，在账户余额充足的情况下，实例到期后将按月自动续费。 */
    RenewFlag?: string;
    /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。 */
    ChargeType?: string;
    /** 包年包月购买时长,单位:月 */
    ChargePeriod?: number;
    /** 节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    NodeType?: string;
    /** 节点个数 */
    NodeNum?: number;
    /** 节点CPU核数 */
    CpuNum?: number;
    /** 节点内存大小，单位GB */
    MemSize?: number;
    /** 节点磁盘类型 */
    DiskType?: string;
    /** 节点磁盘大小，单位GB */
    DiskSize?: number;
    /** ES域名 */
    EsDomain?: string;
    /** ES VIP */
    EsVip?: string;
    /** ES端口 */
    EsPort?: number;
    /** Kibana访问url */
    KibanaUrl?: string;
    /** ES版本号 */
    EsVersion?: string;
    /** ES配置项 */
    EsConfig?: string;
    /** Kibana访问控制配置 */
    EsAcl?: EsAcl;
    /** 实例创建时间 */
    CreateTime?: string;
    /** 实例最后修改操作时间 */
    UpdateTime?: string;
    /** 实例到期时间 */
    Deadline?: string;
    /** 实例类型（实例类型标识，当前只有1,2两种） */
    InstanceType?: number;
    /** Ik分词器配置 */
    IkConfig?: EsDictionaryInfo;
    /** 专用主节点配置 */
    MasterNodeInfo?: MasterNodeInfo;
    /** cos自动备份配置 */
    CosBackup?: CosBackup;
    /** 是否允许cos自动备份 */
    AllowCosBackup?: boolean;
    /** 实例拥有的标签列表 */
    TagList?: TagInfo[];
    /** License类型oss：开源版basic：基础版platinum：白金版默认值platinum */
    LicenseType?: string;
    /** 是否为冷热集群true: 冷热集群false: 非冷热集群 */
    EnableHotWarmMode?: boolean | null;
    /** 温节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    WarmNodeType?: string | null;
    /** 温节点个数 */
    WarmNodeNum?: number | null;
    /** 温节点CPU核数 */
    WarmCpuNum?: number | null;
    /** 温节点内存内存大小，单位GB */
    WarmMemSize?: number | null;
    /** 温节点磁盘类型 */
    WarmDiskType?: string | null;
    /** 温节点磁盘大小，单位GB */
    WarmDiskSize?: number | null;
    /** 集群节点信息列表 */
    NodeInfoList?: NodeInfo[] | null;
    /** Es公网地址 */
    EsPublicUrl?: string | null;
    /** 多可用区网络信息 */
    MultiZoneInfo?: ZoneDetail[] | null;
    /** 部署模式0：单可用区1：多可用区，北京、上海、上海金融、广州、南京、香港、新加坡、法兰克福（白名单控制） */
    DeployMode?: number | null;
    /** ES公网访问状态OPEN：开启CLOSE：关闭 */
    PublicAccess?: string | null;
    /** ES公网访问控制配置 */
    EsPublicAcl?: EsAcl;
    /** Kibana内网地址 */
    KibanaPrivateUrl?: string | null;
    /** Kibana公网访问状态OPEN：开启CLOSE：关闭 */
    KibanaPublicAccess?: string | null;
    /** Kibana内网访问状态OPEN：开启CLOSE：关闭 */
    KibanaPrivateAccess?: string | null;
    /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启 */
    SecurityType?: number | null;
    /** 场景化模板类型：0、不开启；1、通用场景；2、日志场景；3、搜索场景 */
    SceneType?: number | null;
    /** Kibana配置项 */
    KibanaConfig?: string | null;
    /** Kibana节点信息 */
    KibanaNodeInfo?: KibanaNodeInfo | null;
    /** 可视化节点配置 */
    WebNodeTypeInfo?: WebNodeTypeInfo | null;
    /** JDK类型，oracle或kona */
    Jdk?: string | null;
    /** 集群网络通讯协议 */
    Protocol?: string | null;
    /** 安全组id */
    SecurityGroups?: string[] | null;
    /** 冷节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    ColdNodeType?: string | null;
    /** 冷节点个数 */
    ColdNodeNum?: number | null;
    /** 冷节点CPU核数 */
    ColdCpuNum?: number | null;
    /** 冷节点内存大小，单位GB */
    ColdMemSize?: number | null;
    /** 冷节点磁盘类型 */
    ColdDiskType?: string | null;
    /** 冷节点磁盘大小，单位GB */
    ColdDiskSize?: number | null;
    /** 冻节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    FrozenNodeType?: string | null;
    /** 冻节点个数 */
    FrozenNodeNum?: number | null;
    /** 冻节点CPU核数 */
    FrozenCpuNum?: number | null;
    /** 冻节点内存大小，单位GB */
    FrozenMemSize?: number | null;
    /** 冻节点磁盘类型 */
    FrozenDiskType?: string | null;
    /** 冻节点磁盘大小，单位GB */
    FrozenDiskSize?: number | null;
    /** 集群健康状态 -1 未知；0 Green; 1 Yellow; 2 Red */
    HealthStatus?: number | null;
    /** https集群内网url */
    EsPrivateUrl?: string | null;
    /** https集群内网域名 */
    EsPrivateDomain?: string | null;
    /** 集群的配置组信息 */
    EsConfigSets?: EsConfigSetInfo[] | null;
    /** 集群可维护时间段 */
    OperationDuration?: OperationDuration | null;
    /** web节点列表 */
    OptionalWebServiceInfos?: OptionalWebServiceInfo[] | null;
    /** 自治索引开关 */
    AutoIndexEnabled?: boolean | null;
    /** 是否支持存储计算分离 */
    EnableHybridStorage?: boolean | null;
    /** 流程进度 */
    ProcessPercent?: number | null;
    /** Kibana的alerting外网告警策略OPEN：开启CLOSE：关闭 */
    KibanaAlteringPublicAccess?: string | null;
    /** 本月是否有内核可以更新：false-无，true-有 */
    HasKernelUpgrade?: boolean | null;
    /** cdcId，使用cdc子网时传递 */
    CdcId?: string | null;
    /** kibana内网vip */
    KibanaPrivateVip?: string | null;
    /** 自定义kibana内网url */
    CustomKibanaPrivateUrl?: string | null;
    /** 节点出站访问详细信息 */
    OutboundPublicAcls?: OutboundPublicAcl[] | null;
    /** 网络连接方案 */
    NetConnectScheme?: string | null;
    /** 置放群组相关参数 */
    DisasterRecoverGroupAffinity?: number | null;
    /** 子产品ID枚举值： 开源版："sp_es_io2"， 基础版："sp_es_basic"，白金版："sp_es_platinum"，企业版："sp_es_enterprise"，CDC白金版："sp_es_cdc_platinum"，日志增强版："sp_es_enlogging"，tsearch："sp_tsearch_io2"，logstash："sp_es_logstash" ，可以为空，为空的时候后台取LicenseType映射该字段 */
    SubProductCode?: string | null;
    /** 存算分离cos用量，单位M */
    CosBucketStorageSize?: number | null;
    /** 读写分离模式：0-不开启，1-本地读写分离，2-远端读写分离 */
    ReadWriteMode?: number | null;
    /** 是否有置放群组异步调度任务 */
    EnableScheduleRecoverGroup?: boolean | null;
    /** 异步调度任务的时间 */
    EnableScheduleOperationDuration?: EnableScheduleOperationDuration | null;
    /** 开启集群保护：OPEN-开启，CLOSE-关闭 */
    EnableDestroyProtection?: string | null;
    /** kibana内网访问地址 */
    ShowKibanaIpPort?: string;
    /** 是否为CDZLite可用区 */
    IsCdzLite?: boolean;
  }

  /** ES集群日志详细信息 */
  interface InstanceLog {
    /** 日志时间 */
    Time?: string;
    /** 日志级别 */
    Level?: string;
    /** 集群节点ip */
    Ip?: string;
    /** 日志内容 */
    Message?: string;
    /** 集群节点ID */
    NodeID?: string;
  }

  /** 节点IP、访问IP、访问时间 */
  interface IpTimePair {
    /** IP地址 */
    Ip?: string;
    /** 时间戳，毫秒 */
    Timestamp?: number;
    /** 集群节点IP */
    NodeIp?: string;
  }

  /** 智能运维诊断参数 */
  interface JobParam {
    /** 诊断项列表 */
    Jobs: string[] | null;
    /** 诊断索引 */
    Indices: string;
    /** 历史诊断时间 */
    Interval: number;
  }

  /** OperationDetail使用此结构的数组描述新旧配置 */
  interface KeyValue {
    /** 键 */
    Key?: string;
    /** 值 */
    Value?: string;
  }

  /** 实例Kibana节点相关信息 */
  interface KibanaNodeInfo {
    /** Kibana节点规格 */
    KibanaNodeType: string;
    /** Kibana节点个数 */
    KibanaNodeNum: number;
    /** Kibana节点CPU数 */
    KibanaNodeCpuNum: number;
    /** Kibana节点内存GB */
    KibanaNodeMemSize: number;
    /** Kibana节点磁盘类型 */
    KibanaNodeDiskType: string;
    /** Kibana节点磁盘大小 */
    KibanaNodeDiskSize: number;
  }

  /** kibana公网域名白名单参数 */
  interface KibanaPublicAcl {
    /** kibana访问白名单 */
    WhiteIpList?: string[];
  }

  /** Kibana视图数据 */
  interface KibanaView {
    /** Kibana节点IP */
    Ip?: string;
    /** 节点总磁盘大小 */
    DiskSize?: number;
    /** 磁盘使用率 */
    DiskUsage?: number;
    /** 节点内存大小 */
    MemSize?: number;
    /** 内存使用率 */
    MemUsage?: number;
    /** 节点cpu个数 */
    CpuNum?: number;
    /** cpu使用率 */
    CpuUsage?: number;
    /** 可用区 */
    Zone?: string;
    /** ts-0noqayxu-az6-hot-03222010-0 */
    NodeId?: string;
  }

  /** 节点本地盘信息 */
  interface LocalDiskInfo {
    /** 本地盘类型LOCAL_SATA：大数据型NVME_SSD：高IO型 */
    LocalDiskType: string;
    /** 本地盘单盘大小 */
    LocalDiskSize: number;
    /** 本地盘块数 */
    LocalDiskCount: number;
  }

  /** 智能运维日志详情 */
  interface LogDetail {
    /** 日志异常名 */
    Key: string;
    /** 日志异常处理建议 */
    Advise: string;
    /** 日志异常名出现次数 */
    Count: number;
  }

  /** Logstash绑定的ES集群信息 */
  interface LogstashBindedES {
    /** ES集群ID */
    ESInstanceId: string;
    /** ES集群用户名 */
    ESUserName: string;
    /** ES集群密码 */
    ESPassword: string;
  }

  /** Logstash扩展文件信息 */
  interface LogstashExtendedFile {
    /** 扩展文件名称 */
    Name: string;
    /** 扩展文件大小，单位B */
    Size: number;
  }

  /** Logstash实例详细信息 */
  interface LogstashInstanceInfo {
    /** 实例ID */
    InstanceId?: string;
    /** 实例名称 */
    InstanceName?: string;
    /** 地域 */
    Region?: string;
    /** 可用区 */
    Zone?: string;
    /** 用户ID */
    AppId?: number;
    /** 用户UIN */
    Uin?: string;
    /** 实例所属VPC的ID */
    VpcId?: string;
    /** 实例所属子网的ID */
    SubnetId?: string;
    /** 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁 */
    Status?: number;
    /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。 */
    ChargeType?: string;
    /** 包年包月购买时长,单位:月 */
    ChargePeriod?: number;
    /** 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费 NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费 DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费 默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
    RenewFlag?: string;
    /** 节点规格LOGSTASH.S1.SMALL2：1核2GLOGSTASH.S1.MEDIUM4：2核4GLOGSTASH.S1.MEDIUM8：2核8GLOGSTASH.S1.LARGE16：4核16GLOGSTASH.S1.2XLARGE32：8核32GLOGSTASH.S1.4XLARGE32：16核32GLOGSTASH.S1.4XLARGE64：16核64G */
    NodeType?: string;
    /** 节点个数 */
    NodeNum?: number;
    /** 节点磁盘类型 */
    DiskType?: string;
    /** 节点磁盘大小，单位GB */
    DiskSize?: number;
    /** Logstash版本号 */
    LogstashVersion?: string;
    /** License类型oss：开源版xpack：基础版默认值xpack */
    LicenseType?: string;
    /** 实例创建时间 */
    CreateTime?: string;
    /** 实例最后修改操作时间 */
    UpdateTime?: string;
    /** 实例到期时间 */
    Deadline?: string;
    /** 实例节点类型 */
    Nodes?: LogstashNodeInfo[];
    /** 实例绑定的ES集群ID */
    BindedESInstanceId?: string;
    /** 实例的YML配置 */
    YMLConfig?: string | null;
    /** 扩展文件列表 */
    ExtendedFiles?: LogstashExtendedFile[] | null;
    /** 可维护时间段 */
    OperationDuration?: OperationDuration | null;
    /** CPU数量 */
    CpuNum?: number | null;
    /** 实例标签信息 */
    TagList?: TagInfo[] | null;
    /** 内存大小 */
    MemSize?: number | null;
    /** 部署模式，0：单可用区、1：多可用区 */
    DeployMode?: number;
    /** 多可用区部署时可用区的详细信息 */
    MultiZoneInfo?: ZoneDetail[];
  }

  /** Logstash节点信息 */
  interface LogstashNodeInfo {
    /** 节点ID */
    NodeId?: string;
    /** 节点IP */
    Ip?: string;
    /** 节点端口 */
    Port?: number;
    /** 节点所在zone */
    Zone?: string;
  }

  /** Logstash管道信息 */
  interface LogstashPipeline {
    /** 管道ID */
    PipelineId?: string;
    /** 管道描述信息 */
    PipelineDesc?: string | null;
    /** 管道配置内容 */
    Config?: string;
    /** 管道的Worker数量 */
    Workers?: number | null;
    /** 管道批处理大小 */
    BatchSize?: number | null;
    /** 管道批处理延迟 */
    BatchDelay?: number | null;
    /** 管道缓冲队列类型 */
    QueueType?: string | null;
    /** 管道缓冲队列大小 */
    QueueMaxBytes?: string | null;
    /** 管道缓冲队列检查点写入数 */
    QueueCheckPointWrites?: number | null;
  }

  /** Logstash管道信息 */
  interface LogstashPipelineInfo {
    /** 管道ID */
    PipelineId?: string;
    /** 管道描述信息 */
    PipelineDesc?: string | null;
    /** 管道配置内容 */
    Config?: string;
    /** 管道状态 */
    Status?: number | null;
    /** 管道的Worker数量 */
    Workers?: number | null;
    /** 管道批处理大小 */
    BatchSize?: number | null;
    /** 管道批处理延迟 */
    BatchDelay?: number | null;
    /** 管道缓冲队列类型 */
    QueueType?: string | null;
    /** 管道缓冲队列大小 */
    QueueMaxBytes?: string | null;
    /** 管道缓冲队列检查点写入数 */
    QueueCheckPointWrites?: number | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
  }

  /** 实例专用主节点相关信息 */
  interface MasterNodeInfo {
    /** 是否启用了专用主节点 */
    EnableDedicatedMaster?: boolean;
    /** 专用主节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    MasterNodeType?: string;
    /** 专用主节点个数 */
    MasterNodeNum?: number;
    /** 专用主节点CPU核数 */
    MasterNodeCpuNum?: number;
    /** 专用主节点内存大小，单位GB */
    MasterNodeMemSize?: number;
    /** 专用主节点磁盘大小，单位GB */
    MasterNodeDiskSize?: number;
    /** 专用主节点磁盘类型 */
    MasterNodeDiskType?: string;
  }

  /** 智能运维指标 */
  interface Metric {
    /** 指标维度族 */
    Dimensions: Dimension[];
    /** 指标值 */
    Value: number;
  }

  /** 全部指标数据 */
  interface MetricAllData {
    /** 索引流量 */
    IndexTraffic?: number;
    /** 存储大小 */
    Storage?: number;
    /** 读请求次数 */
    ReadReqTimes?: number;
    /** 写请求次数 */
    WriteReqTimes?: number;
    /** 文档数量 */
    DocCount?: number;
  }

  /** 智能运维指标详情 */
  interface MetricDetail {
    /** 指标详情名 */
    Key: string;
    /** 指标详情值 */
    Metrics: Metric[];
  }

  /** 指标数据map */
  interface MetricMapByIndexId {
    /** 实例id */
    IndexId?: string;
    /** 指标数据 */
    MetricAllData?: MetricAllData;
  }

  /** 集群中一种节点类型（如热数据节点，冷数据节点，专用主节点等）的规格描述信息，包括节点类型，节点个数，节点规格，磁盘类型，磁盘大小等, Type不指定时默认为热数据节点；如果节点为master节点，则DiskType和DiskSize参数会被忽略（主节点无数据盘） */
  interface NodeInfo {
    /** 节点数量 */
    NodeNum: number;
    /** 节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    NodeType: string;
    /** 节点类型hotData: 热数据节点warmData: 冷数据节点dedicatedMaster: 专用主节点默认值为hotData */
    Type?: string;
    /** 节点磁盘类型CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高硬能云硬盘默认值CLOUD_SSD */
    DiskType?: string;
    /** 节点磁盘容量（单位GB） */
    DiskSize?: number;
    /** 节点本地盘信息 */
    LocalDiskInfo?: LocalDiskInfo | null;
    /** 节点磁盘块数 */
    DiskCount?: number;
    /** 节点磁盘是否加密 0: 不加密，1: 加密；默认不加密 */
    DiskEncrypt?: number;
    /** cpu数目 */
    CpuNum?: number | null;
    /** 内存大小，单位GB */
    MemSize?: number | null;
    /** / */
    DiskEnhance?: number | null;
    /** 节点Gpu信息 */
    GpuInfo?: GpuInfo | null;
  }

  /** 节点维度视图数据 */
  interface NodeView {
    /** 节点ID */
    NodeId?: string;
    /** 节点IP */
    NodeIp?: string;
    /** 节点是否可见 */
    Visible?: number;
    /** 是否熔断 */
    Break?: number;
    /** 节点总磁盘大小 */
    DiskSize?: number;
    /** 磁盘使用率 */
    DiskUsage?: number;
    /** 节点内存大小，单位GB */
    MemSize?: number;
    /** 内存使用率 */
    MemUsage?: number;
    /** 节点cpu个数 */
    CpuNum?: number;
    /** cpu使用率 */
    CpuUsage?: number;
    /** 可用区 */
    Zone?: string;
    /** 节点角色 */
    NodeRole?: string;
    /** 节点HTTP IP */
    NodeHttpIp?: string;
    /** JVM内存使用率 */
    JvmMemUsage?: number;
    /** 节点分片数 */
    ShardNum?: number;
    /** 节点上磁盘ID列表 */
    DiskIds?: string[];
    /** 是否为隐藏可用区 */
    Hidden?: boolean;
    /** 是否充当协调节点的角色 */
    IsCoordinationNode?: boolean;
    /** CVM运行状态 */
    CVMStatus?: string;
    /** cvm绑定的置放群组的id */
    CVMDisasterRecoverGroupId?: string | null;
    /** cvm绑定置放群组的状态。2: 已绑定；1: 绑定中；0: 未开启 */
    CVMDisasterRecoverGroupStatus?: number | null;
  }

  /** ES集群操作详细信息 */
  interface Operation {
    /** 操作唯一id */
    Id?: number;
    /** 操作开始时间 */
    StartTime?: string;
    /** 操作类型 */
    Type?: string;
    /** 操作详情 */
    Detail?: OperationDetail;
    /** 操作结果 */
    Result?: string;
    /** 流程任务信息 */
    Tasks?: TaskDetail[];
    /** 操作进度 */
    Progress?: number;
    /** 回滚标记， 0未回滚 ，1回滚中，2已回滚 */
    RollbackTag?: number;
    /** 操作者Uin */
    SubAccountUin?: string | null;
    /** 自动扩容标识：0-非自动，1-自动 */
    AutoScaleTag?: number;
  }

  /** 操作详情 */
  interface OperationDetail {
    /** 实例原始配置信息 */
    OldInfo: KeyValue[];
    /** 实例更新后配置信息 */
    NewInfo: KeyValue[];
  }

  /** 集群可运维时间 */
  interface OperationDuration {
    /** 维护周期，表示周一到周日，可取值[0, 6] */
    Periods: number[] | null;
    /** 维护开始时间 */
    TimeStart: string;
    /** 维护结束时间 */
    TimeEnd: string;
    /** 时区，以UTC形式表示 */
    TimeZone: string;
  }

  /** 集群可运维时间 */
  interface OperationDurationUpdated {
    /** 维护周期，表示周一到周日，可取值[0, 6] */
    Periods: number[];
    /** 维护开始时间 */
    TimeStart: string;
    /** 维护结束时间 */
    TimeEnd: string;
    /** 时区，以UTC形式表示 */
    TimeZone: string;
    /** ES集群ID数组 */
    MoreInstances?: string[];
  }

  /** 可选web组件信息 */
  interface OptionalWebServiceInfo {
    /** 类型 */
    Type?: string | null;
    /** 状态 */
    Status?: number | null;
    /** 公网url */
    PublicUrl?: string | null;
    /** 内网url */
    PrivateUrl?: string | null;
    /** 公网访问权限 */
    PublicAccess?: string | null;
    /** 内网访问权限 */
    PrivateAccess?: string | null;
    /** 版本号 */
    Version?: string | null;
    /** web服务内网vip */
    PrivateVip?: string | null;
    /** 自定义cerebro内网url */
    CustomPrivateUrl?: string | null;
  }

  /** 节点出站访问信息 */
  interface OutboundPublicAcl {
    /** 允许节点出站访问的节点类型 */
    NodeType: string | null;
    /** 允许节点出站访问的白名单 */
    WhiteHostList?: string[] | null;
  }

  /** 任务进度详情 */
  interface ProcessDetail {
    /** 已完成数量 */
    Completed?: number | null;
    /** 剩余数量 */
    Remain?: number | null;
    /** 总数量 */
    Total?: number | null;
    /** 任务类型：60：重启型任务70：分片迁移型任务80：节点变配任务 */
    TaskType?: number | null;
  }

  /** 创建serverless索引时创建数据接入 */
  interface ServerlessDi {
    /** 数据链路采集源类型，如cvm_collector、tke_collector */
    DiSourceType?: string;
    /** cvm数据源 */
    DiSourceCvm?: DiSourceCvm;
    /** tke数据源 */
    DiSourceTke?: DiSourceTke;
  }

  /** 索引元数据字段 */
  interface ServerlessIndexMetaField {
    /** 索引所属集群APP ID */
    AppId?: number | null;
    /** 索引名 */
    IndexName?: string | null;
    /** 索引元数据JSON */
    IndexMetaJson?: string | null;
    /** 索引文档数 */
    IndexDocs?: number | null;
    /** 索引存储大小，单位Byte */
    IndexStorage?: number | null;
    /** 索引创建时间 */
    IndexCreateTime?: string | null;
    /** 索引实例ID */
    InstanceId?: string | null;
    /** 索引自治字段 */
    IndexOptionsField?: ServerlessIndexOptionsField | null;
    /** 索引配置字段 */
    IndexSettingsField?: ServerlessIndexSettingsField | null;
    /** 索引所属连接相关信息 */
    IndexNetworkField?: ServerlessIndexNetworkField | null;
    /** Kibana公网域名 */
    KibanaUrl?: string | null;
    /** Kibana内网域名 */
    KibanaPrivateUrl?: string | null;
    /** 索引内网访问地址 */
    IndexAccessUrl?: string | null;
    /** 状态 */
    Status?: number | null;
    /** 索引空间ID */
    SpaceId?: string | null;
    /** 索引空间名 */
    SpaceName?: string | null;
    /** 存储类型 */
    StorageType?: number | null;
    /** 标签信息 */
    TagList?: TagInfo[];
    /** 索引流量，单位byte */
    IndexTraffic?: number | null;
  }

  /** Serverless实例，网络、索引、kibana等连接信息 */
  interface ServerlessIndexNetworkField {
    /** 地域 */
    Region?: string | null;
    /** 区域 */
    Zone?: string | null;
    /** vpc唯一ID */
    VpcUid?: string | null;
    /** 子网唯一ID */
    SubnetUid?: string | null;
    /** 用户名 */
    Username?: string | null;
    /** 密码 */
    Password?: string | null;
  }

  /** 索引自治字段 */
  interface ServerlessIndexOptionsField {
    /** 过期时间 */
    ExpireMaxAge?: string | null;
    /** 时间分区字段 */
    TimestampField?: string | null;
    /** 标准存储时长 */
    SinkCycleAge?: string | null;
    /** 标准存储时长 */
    StandardStorageAge?: string | null;
  }

  /** 索引配置字段 */
  interface ServerlessIndexSettingsField {
    /** 索引主分片数 */
    NumberOfShards?: string | null;
    /** 索引刷新频率 */
    RefreshInterval?: string | null;
    /** 自定义参数 */
    CustomSetting?: string;
  }

  /** Serverless索引空间信息 */
  interface ServerlessSpace {
    /** Serverless索引空间ID */
    SpaceId?: string;
    /** Serverless索引空间名 */
    SpaceName?: string;
    /** Serverless索引空间状态，0正常，-1已删除 */
    Status?: number;
    /** 创建日期 */
    CreateTime?: string;
    /** 空间内索引数量 */
    IndexCount?: number;
    /** kibana公网uri */
    KibanaUrl?: string | null;
    /** kibana内网url */
    KibanaPrivateUrl?: string | null;
    /** 空间内网访问地址 */
    IndexAccessUrl?: string | null;
    /** 空间白名单 */
    KibanaPublicAcl?: EsAcl | null;
    /** 空间检索分析域名 */
    KibanaEmbedUrl?: string | null;
    /** 数据联路 */
    DiDataList?: DiData | null;
    /** 空间vpc信息 */
    VpcInfo?: VpcInfo[] | null;
    /** 地域 */
    Region?: string | null;
    /** 可用区 */
    Zone?: string | null;
    /** kibana公网开关，0关闭，1开启 */
    EnableKibanaPublicAccess?: number | null;
    /** kibana内网开关，0关闭，1开启 */
    EnableKibanaPrivateAccess?: number | null;
    /** 空间所属appid */
    AppId?: number | null;
    /** //默认en， 可选zh-CN */
    KibanaLanguage?: string | null;
    /** 0 */
    ClusterType?: number | null;
    /** 空间标签信息 */
    TagList?: TagInfo[] | null;
  }

  /** ServerlessSpaceUser */
  interface ServerlessSpaceUser {
    /** 用户名 */
    Username?: string | null;
    /** 用户密码 */
    Password?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 用户状态 */
    Status?: number | null;
    /** 有权限的索引数组 */
    IndicesScope?: string[] | null;
    /** 权限类型 */
    PrivilegeType?: number | null;
  }

  /** 智能运维集群配置详情 */
  interface SettingDetail {
    /** 配置key */
    Key: string;
    /** 配置当前值 */
    Value: string;
    /** 配置处理建议 */
    Advise: string;
  }

  /** 集群快照数据结构 */
  interface Snapshots {
    /** 快照名称 */
    SnapshotName?: string | null;
    /** 快照Uuid */
    Uuid?: string | null;
    /** 仓库名称 */
    Repository?: string | null;
    /** 该快照所属集群的版本号 */
    Version?: string | null;
    /** 备份的索引列表 */
    Indices?: string[] | null;
    /** 备份的datastream列表 */
    DataStreams?: string[] | null;
    /** 备份的状态FAILED 备份失败IN_PROGRESS 备份执行中PARTIAL 备份部分成功，部分失败，备份失败的索引和原因会在Failures字段中展示SUCCESS 备份成功 */
    State?: string | null;
    /** 快照备份的开始时间 */
    StartTime?: string | null;
    /** 快照备份的结束时间 */
    EndTime?: string | null;
    /** 快照备份的耗时时间 */
    DurationInMillis?: number | null;
    /** 备份的总分片数 */
    TotalShards?: number | null;
    /** 备份失败的分片数量 */
    FailedShards?: number | null;
    /** 备份成功的分片数量 */
    SuccessfulShards?: number | null;
    /** 备份失败的索引分片和失败原因 */
    Failures?: Failures[] | null;
    /** 是否用户备份 */
    UserBackUp?: string | null;
  }

  /** 实例操作记录流程任务中的子任务信息（如升级检查任务中的各个检查项） */
  interface SubTaskDetail {
    /** 子任务名 */
    Name?: string;
    /** 子任务结果 */
    Result?: boolean;
    /** 子任务错误信息 */
    ErrMsg?: string;
    /** 子任务类型 */
    Type?: string;
    /** 子任务状态，0处理中 1成功 -1失败 */
    Status?: number;
    /** 升级检查失败的索引名 */
    FailedIndices?: string[];
    /** 子任务结束时间 */
    FinishTime?: string;
    /** 子任务等级，1警告 2失败 */
    Level?: number;
  }

  /** 实例标签信息 */
  interface TagInfo {
    /** 标签键 */
    TagKey: string;
    /** 标签值 */
    TagValue: string;
  }

  /** 实例操作记录中的流程任务信息 */
  interface TaskDetail {
    /** 任务名 */
    Name?: string;
    /** 任务进度 */
    Progress?: number;
    /** 任务完成时间 */
    FinishTime?: string;
    /** 子任务 */
    SubTasks?: SubTaskDetail[];
    /** 任务花费时间 */
    ElapsedTime?: number | null;
    /** 任务进度详情 */
    ProcessInfo?: ProcessDetail | null;
  }

  /** vpc信息 */
  interface VpcInfo {
    /** vpcId信息 */
    VpcId?: string | null;
    /** SubnetId信息 */
    SubnetId?: string | null;
    /** VpcUid信息 */
    VpcUid?: number | null;
    /** SubnetUid 信息 */
    SubnetUid?: number | null;
    /** 可用ip数量 */
    AvailableIpAddressCount?: number | null;
  }

  /** 可视化节点配置 */
  interface WebNodeTypeInfo {
    /** 可视化节点个数，固定为1 */
    NodeNum: number;
    /** 可视化节点规格 */
    NodeType: string;
  }

  /** 多可用区部署时可用区的详细信息 */
  interface ZoneDetail {
    /** 可用区 */
    Zone: string;
    /** 子网ID */
    SubnetId: string;
    /** 是否为隐藏可用区 */
    Hidden?: boolean;
  }

  interface CheckMigrateIndexMetaDataRequest {
    /** 索引 id */
    ServerlessId: string;
    /** 快照名 */
    Snapshot: string;
    /** Cos桶名 */
    CosBucket?: string;
    /** BasePath路径 */
    BasePath?: string;
    /** 云上集群名 */
    ClusterInstanceId?: string;
    /** 普通索引名列表 */
    CommonIndexArr?: string[];
    /** 自治索引名列表 */
    DataStreamArr?: string[];
  }

  interface CheckMigrateIndexMetaDataResponse {
    /** 不存在于目标索引时间字段相同的字段 */
    MappingTimeFieldCheckFailedIndexArr?: string[];
    /** @timestamp不为date类型，与目标索引时间字段冲突 */
    MappingTimeTypeCheckFailedIndexArr?: string[];
    /** 索引的创建时间不在 serverless的存储周期内 */
    SettingCheckFailedIndexArr?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterSnapshotRequest {
    /** 实例名称 */
    InstanceId: string;
    /** 快照名称 */
    SnapshotName: string;
    /** 索引名称 */
    Indices?: string;
  }

  interface CreateClusterSnapshotResponse {
    /** 实例名称 */
    InstanceId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCosMigrateToServerlessInstanceRequest {
    /** 快照名 */
    Snapshot: string;
    /** 索引 id */
    ServerlessId: string;
    /** cos 桶名 */
    CosBucket?: string;
    /** BasePath 路径 */
    BasePath?: string;
    /** 云上集群 id */
    ClusterInstanceId?: string;
    /** 待迁移普通索引名列表 */
    CommonIndexArr?: string[];
    /** 待迁移自治索引名列表 */
    DataStreamArr?: string[];
  }

  interface CreateCosMigrateToServerlessInstanceResponse {
    /** 迁移 taskid */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateIndexRequest {
    /** ES集群ID */
    InstanceId: string;
    /** 创建的索引类型。auto：自治索引；normal：普通索引 */
    IndexType: string;
    /** 创建的索引名 */
    IndexName: string;
    /** 【必填】创建的索引元数据JSON，如mappings、settings */
    IndexMetaJson: string;
    /** 集群访问用户名 */
    Username?: string;
    /** 集群访问密码 */
    Password?: string;
  }

  interface CreateIndexResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateInstanceRequest {
    /** 可用区 */
    Zone: string;
    /** 实例版本（支持"5.6.4"、"6.4.3"、"6.8.2"、"7.5.1"、"7.10.1"） */
    EsVersion: string;
    /** 私有网络ID */
    VpcId: string;
    /** 子网ID */
    SubnetId: string;
    /** 访问密码（密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号） */
    Password: string;
    /** 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_） */
    InstanceName?: string;
    /** 已废弃请使用NodeInfoList节点数量（2-50个） */
    NodeNum?: number;
    /** 计费类型PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值POSTPAID_BY_HOUR */
    ChargeType?: string;
    /** 包年包月购买时长（单位由参数TimeUnit决定） */
    ChargePeriod?: number;
    /** 自动续费标识RENEW_FLAG_AUTO：自动续费RENEW_FLAG_MANUAL：不自动续费，用户手动续费ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费 */
    RenewFlag?: string;
    /** 已废弃请使用NodeInfoList节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    NodeType?: string;
    /** 已废弃请使用NodeInfoList节点磁盘类型CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘 CLOUD_HSSD：增强型SSD云硬盘 CLOUD_BSSD：通用型SSD云硬盘默认值CLOUD_SSD */
    DiskType?: string;
    /** 已废弃请使用NodeInfoList节点磁盘容量（单位GB） */
    DiskSize?: number;
    /** 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”） */
    TimeUnit?: string;
    /** 是否自动使用代金券0：不自动使用1：自动使用默认值0 */
    AutoVoucher?: number;
    /** 代金券ID列表（目前仅支持指定一张代金券） */
    VoucherIds?: string[];
    /** 已废弃请使用NodeInfoList是否创建专用主节点true：开启专用主节点false：不开启专用主节点默认值false */
    EnableDedicatedMaster?: boolean;
    /** 已废弃请使用NodeInfoList专用主节点个数（只支持3个和5个，EnableDedicatedMaster为true时该值必传） */
    MasterNodeNum?: number;
    /** 已废弃请使用NodeInfoList专用主节点类型（EnableDedicatedMaster为true时必传）ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    MasterNodeType?: string;
    /** 已废弃请使用NodeInfoList专用主节点磁盘大小（单位GB，非必传，若传递则必须为50，暂不支持自定义） */
    MasterNodeDiskSize?: number;
    /** 集群配置文件中的ClusterName（系统默认配置为实例ID，暂不支持自定义） */
    ClusterNameInConf?: string;
    /** 集群部署方式0：单可用区部署1：多可用区部署，北京、上海、上海金融、广州、南京、香港、新加坡、法兰克福（白名单控制）默认为0 */
    DeployMode?: number;
    /** 多可用区部署时可用区的详细信息(DeployMode为1时必传) */
    MultiZoneInfo?: ZoneDetail[];
    /** License类型oss：开源版basic：基础版platinum：白金版默认值platinum */
    LicenseType?: string;
    /** 节点信息列表， 用于描述集群各类节点的规格信息如节点类型，节点个数，节点规格，磁盘类型，磁盘大小等 */
    NodeInfoList?: NodeInfo[];
    /** 节点标签信息列表 */
    TagList?: TagInfo[];
    /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启 */
    BasicSecurityType?: number;
    /** 场景化模板类型 0：不启用 1：通用 2：日志 3：搜索 */
    SceneType?: number;
    /** 可视化节点配置 */
    WebNodeTypeInfo?: WebNodeTypeInfo;
    /** 创建https集群，默认是http */
    Protocol?: string;
    /** 可维护时间段 */
    OperationDuration?: OperationDuration;
    /** 是否开启存算分离 */
    EnableHybridStorage?: boolean;
    /** 是否开启essd 增强型云盘 */
    DiskEnhance?: number;
    /** 是否开启智能巡检 */
    EnableDiagnose?: boolean;
    /** cdcId，使用cdc子网时传递 */
    CdcId?: string;
    /** 置放群组亲和度，范围[0,10]，0表示不开启 */
    DisasterRecoverGroupAffinity?: number;
    /** 子产品ID枚举值： 开源版："sp_es_io2"， 基础版："sp_es_basic"，白金版："sp_es_platinum"，企业版："sp_es_enterprise"，CDC白金版："sp_es_cdc_platinum"，日志增强版："sp_es_enlogging"，tsearch："sp_tsearch_io2"，logstash："sp_es_logstash" ，可以为空，为空的时候后台取LicenseType映射该字段 */
    SubProductCode?: string;
    /** 读写分离模式：0-不开启，1-本地读写分离，2-远端读写分离 */
    ReadWriteMode?: number;
    /** 置放群组是否开启异步任务 */
    EnableScheduleRecoverGroup?: boolean;
    /** 置放群组开启异步任务的可维护时间段 */
    EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
    /** 自动扩盘参数列表 */
    AutoScaleDiskInfoList?: AutoScaleDiskInfo[];
    /** 是否开启kibana公网访问，不传默认开启 */
    EnableKibanaPublicAccess?: string;
  }

  interface CreateInstanceResponse {
    /** 实例ID */
    InstanceId?: string;
    /** 订单号 */
    DealName?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateLogstashInstanceRequest {
    /** 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_） */
    InstanceName: string;
    /** 可用区 */
    Zone: string;
    /** 实例版本（支持"6.8.13"、"7.10.1"） */
    LogstashVersion: string;
    /** 私有网络ID */
    VpcId: string;
    /** 子网ID */
    SubnetId: string;
    /** 节点数量（2-50个） */
    NodeNum?: number;
    /** 计费类型PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值POSTPAID_BY_HOUR */
    ChargeType?: string;
    /** 包年包月购买时长（单位由参数TimeUnit决定） */
    ChargePeriod?: number;
    /** 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”） */
    TimeUnit?: string;
    /** 是否自动使用代金券0：不自动使用1：自动使用默认值0 */
    AutoVoucher?: number;
    /** 代金券ID列表（目前仅支持指定一张代金券） */
    VoucherIds?: string[];
    /** 自动续费标识RENEW_FLAG_AUTO：自动续费RENEW_FLAG_MANUAL：不自动续费，用户手动续费ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费 */
    RenewFlag?: string;
    /** 节点规格LOGSTASH.S1.SMALL2：1核2GLOGSTASH.S1.MEDIUM4：2核4GLOGSTASH.S1.MEDIUM8：2核8GLOGSTASH.S1.LARGE16：4核16GLOGSTASH.S1.2XLARGE32：8核32GLOGSTASH.S1.4XLARGE32：16核32GLOGSTASH.S1.4XLARGE64：16核64G */
    NodeType?: string;
    /** 节点磁盘类型CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高硬能云硬盘默认值CLOUD_SSD */
    DiskType?: string;
    /** 节点磁盘容量（单位GB） */
    DiskSize?: number;
    /** License类型oss：开源版xpack：xpack版默认值xpack */
    LicenseType?: string;
    /** 标签信息列表 */
    TagList?: TagInfo[];
    /** 可维护时间段 */
    OperationDuration?: OperationDuration;
    /** 多可用区部署时可用区的详细信息 */
    MultiZoneInfo?: ZoneDetail[];
    /** 部署模式，0：单可用区、1：多可用区 */
    DeployMode?: number;
  }

  interface CreateLogstashInstanceResponse {
    /** 实例ID */
    InstanceId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateServerlessInstanceRequest {
    /** 索引名，需以-AppId结尾 */
    IndexName: string;
    /** 可用区 */
    Zone?: string;
    /** 私有网络ID */
    VpcId?: string;
    /** 子网ID */
    SubnetId?: string;
    /** 创建的索引元数据JSON，如mappings、settings */
    IndexMetaJson?: string;
    /** 创建索引的空间ID */
    SpaceId?: string;
    /** 创建索引的用户名 */
    Username?: string;
    /** 创建索引的密码 */
    Password?: string;
    /** 创建数据接入 */
    ServerlessDi?: ServerlessDi;
    /** 是否自行添加白名单ip */
    AutoGetIp?: number;
    /** 标签信息 */
    TagList?: TagInfo[];
    /** kibana公网白名单 */
    KibanaWhiteIpList?: string[];
  }

  interface CreateServerlessInstanceResponse {
    /** 实例ID */
    InstanceId?: string;
    /** 订单号 */
    DealName?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateServerlessSpaceV2Request {
    /** vpc信息 */
    VpcInfo: VpcInfo[];
    /** 索引空间名 */
    SpaceName?: string;
    /** 空间名称 */
    Zone?: string;
    /** 白名单列表 */
    KibanaWhiteIpList?: string[];
    /** 空间id */
    ZoneId?: number;
    /** 标签信息 */
    TagList?: TagInfo[];
  }

  interface CreateServerlessSpaceV2Response {
    /** 空间ID */
    SpaceId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterSnapshotRequest {
    /** 集群实例Id，格式：es-xxxx */
    InstanceId: string;
    /** 快照仓库名称 */
    RepositoryName: string;
    /** 集群快照名称 */
    SnapshotName: string;
  }

  interface DeleteClusterSnapshotResponse {
    /** 集群id */
    InstanceId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteIndexRequest {
    /** ES集群ID */
    InstanceId: string;
    /** 删除的索引类型。auto：自治索引；normal：普通索引 */
    IndexType: string;
    /** 删除的索引名 */
    IndexName: string;
    /** 集群访问用户名 */
    Username?: string;
    /** 集群访问密码 */
    Password?: string;
    /** 后备索引名 */
    BackingIndexName?: string;
  }

  interface DeleteIndexResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteInstanceRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DeleteInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteLogstashInstanceRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DeleteLogstashInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteLogstashPipelinesRequest {
    /** 实例ID */
    InstanceId: string;
    /** 管道ID列表 */
    PipelineIds?: string[];
  }

  interface DeleteLogstashPipelinesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteServerlessInstanceRequest {
    /** serverless实例ID */
    InstanceId: string;
  }

  interface DeleteServerlessInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteServerlessSpaceUserRequest {
    /** 空间的ID */
    SpaceId: string;
    /** 创建索引的用户名 */
    Username: string;
  }

  interface DeleteServerlessSpaceUserResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterSnapshotRequest {
    /** 集群实例Id，格式：es-xxxx */
    InstanceId: string;
    /** 快照仓库名称 */
    RepositoryName?: string;
    /** 集群快照名称 */
    SnapshotName?: string;
  }

  interface DescribeClusterSnapshotResponse {
    /** 集群实例Id，格式：es-xxxx */
    InstanceId?: string;
    /** 快照备份详情列表 */
    Snapshots?: Snapshots[];
    /** 快照仓库名称 */
    RepositoryName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDiagnoseRequest {
    /** ES实例ID */
    InstanceId: string;
    /** 报告日期，格式20210301 */
    Date?: string;
    /** 报告返回份数 */
    Limit?: number;
  }

  interface DescribeDiagnoseResponse {
    /** 诊断报告个数 */
    Total?: number;
    /** 诊断报告列表 */
    DiagnoseResults?: DiagnoseResult[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIndexListRequest {
    /** 索引类型。auto：自治索引；normal：普通索引 */
    IndexType: string;
    /** ES集群ID */
    InstanceId?: string;
    /** 索引名，若填空则获取所有索引 */
    IndexName?: string;
    /** 集群访问用户名 */
    Username?: string;
    /** 集群访问密码 */
    Password?: string;
    /** 分页起始位置 */
    Offset?: number;
    /** 一页展示数量 */
    Limit?: number;
    /** 排序字段，支持索引名：IndexName、索引存储量：IndexStorage、索引创建时间：IndexCreateTime */
    OrderBy?: string;
    /** 过滤索引状态 */
    IndexStatusList?: string[];
    /** 排序顺序，支持asc、desc，默认为desc 数据格式"asc","desc" */
    Order?: string;
  }

  interface DescribeIndexListResponse {
    /** 索引元数据字段 */
    IndexMetaFields?: IndexMetaField[] | null;
    /** 查询总数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIndexMetaRequest {
    /** ES集群ID */
    InstanceId: string;
    /** 索引类型。auto：自治索引；normal：普通索引 */
    IndexType: string;
    /** 索引名，若填空则获取所有索引 */
    IndexName: string;
    /** 集群访问用户名 */
    Username?: string;
    /** 集群访问密码 */
    Password?: string;
  }

  interface DescribeIndexMetaResponse {
    /** 索引元数据字段 */
    IndexMetaField?: IndexMetaField | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceLogsRequest {
    /** 集群实例ID */
    InstanceId: string;
    /** 日志类型，默认值为11, 主日志2, 搜索慢日志3, 索引慢日志4, GC日志 */
    LogType?: number;
    /** 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等 */
    SearchKey?: string;
    /** 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
    StartTime?: string;
    /** 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
    EndTime?: string;
    /** 分页起始值, 默认值为0 */
    Offset?: number;
    /** 分页大小，默认值为100，最大值100 */
    Limit?: number;
    /** 时间排序方式，默认值为00, 降序1, 升序 */
    OrderByType?: number;
  }

  interface DescribeInstanceLogsResponse {
    /** 返回的日志条数 */
    TotalCount?: number;
    /** 日志详细信息列表 */
    InstanceLogList?: InstanceLog[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceOperationsRequest {
    /** 集群实例ID */
    InstanceId: string;
    /** 起始时间, e.g. "2019-03-07 16:30:39" */
    StartTime: string;
    /** 结束时间, e.g. "2019-03-30 20:18:03" */
    EndTime: string;
    /** 分页起始值 */
    Offset: number;
    /** 分页大小 */
    Limit: number;
  }

  interface DescribeInstanceOperationsResponse {
    /** 操作记录总数 */
    TotalCount?: number;
    /** 操作记录 */
    Operations?: Operation[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstancePluginListRequest {
    /** 实例ID */
    InstanceId: string;
    /** 分页起始值, 默认值0 */
    Offset?: number;
    /** 分页大小，默认值10 */
    Limit?: number;
    /** 排序字段1：插件名 pluginName */
    OrderBy?: string;
    /** 排序方式0：升序 asc1：降序 desc */
    OrderByType?: string;
    /** 0：系统插件 */
    PluginType?: number;
  }

  interface DescribeInstancePluginListResponse {
    /** 返回的插件个数 */
    TotalCount?: number;
    /** 插件信息列表 */
    PluginList?: DescribeInstancePluginInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstancesRequest {
    /** 集群实例所属可用区，不传则默认所有可用区 */
    Zone?: string;
    /** 集群实例ID列表 */
    InstanceIds?: string[];
    /** 集群实例名称列表 */
    InstanceNames?: string[];
    /** 分页起始值, 默认值0 */
    Offset?: number;
    /** 分页大小，默认值20 */
    Limit?: number;
    /** 排序字段1：实例ID2：实例名称3：可用区4：创建时间若orderByKey未传递则按创建时间降序排序 */
    OrderByKey?: number;
    /** 排序方式0：升序1：降序若传递了orderByKey未传递orderByType, 则默认升序 */
    OrderByType?: number;
    /** 节点标签信息列表 */
    TagList?: TagInfo[];
    /** 私有网络vip列表 */
    IpList?: string[];
    /** 可用区列表 */
    ZoneList?: string[];
    /** 健康状态筛列表:0表示绿色，1表示黄色，2表示红色,-1表示未知 */
    HealthStatus?: number[];
    /** Vpc列表 筛选项 */
    VpcIds?: string[];
    /** cdc集群id */
    CdcId?: string;
  }

  interface DescribeInstancesResponse {
    /** 返回的实例个数 */
    TotalCount?: number;
    /** 实例详细信息列表 */
    InstanceList?: InstanceInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLogstashInstanceLogsRequest {
    /** 实例ID */
    InstanceId: string;
    /** 日志类型，默认值为11, 主日志2, 慢日志3, GC日志 */
    LogType?: number;
    /** 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等 */
    SearchKey?: string;
    /** 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
    StartTime?: string;
    /** 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53 */
    EndTime?: string;
    /** 分页起始值, 默认值为0 */
    Offset?: number;
    /** 分页大小，默认值为100，最大值100 */
    Limit?: number;
    /** 时间排序方式，默认值为00, 降序1, 升序 */
    OrderByType?: number;
  }

  interface DescribeLogstashInstanceLogsResponse {
    /** 返回的日志条数 */
    TotalCount?: number;
    /** 日志详细信息列表 */
    InstanceLogList?: InstanceLog[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLogstashInstanceOperationsRequest {
    /** 实例ID */
    InstanceId: string;
    /** 起始时间, e.g. "2019-03-07 16:30:39" */
    StartTime?: string;
    /** 结束时间, e.g. "2019-03-30 20:18:03" */
    EndTime?: string;
    /** 分页起始值 */
    Offset?: number;
    /** 分页大小 */
    Limit?: number;
  }

  interface DescribeLogstashInstanceOperationsResponse {
    /** 操作记录总数 */
    TotalCount: number;
    /** 操作记录 */
    Operations: Operation[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLogstashInstancesRequest {
    /** 实例所属可用区，不传则默认所有可用区 */
    Zone?: string;
    /** 实例ID列表 */
    InstanceIds?: string[];
    /** 实例名称列表 */
    InstanceNames?: string[];
    /** 分页起始值, 默认值0 */
    Offset?: number;
    /** 分页大小，默认值20 */
    Limit?: number;
    /** 排序字段1：实例ID2：实例名称3：可用区4：创建时间若orderKey未传递则按创建时间降序排序 */
    OrderByKey?: number;
    /** 排序方式0：升序1：降序若传递了orderByKey未传递orderByType, 则默认升序 */
    OrderByType?: number;
    /** VpcId 筛选项 */
    VpcIds?: string[];
    /** 标签信息列表 */
    TagList?: TagInfo[];
  }

  interface DescribeLogstashInstancesResponse {
    /** 返回的实例个数 */
    TotalCount?: number;
    /** 实例详细信息列表 */
    InstanceList?: LogstashInstanceInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLogstashPipelinesRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DescribeLogstashPipelinesResponse {
    /** 管道总数 */
    TotalCount?: number;
    /** 管道列表 */
    LogstashPipelineList?: LogstashPipelineInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeServerlessInstancesRequest {
    /** 索引集群ID */
    InstanceIds?: string[];
    /** 索引名 */
    IndexNames?: string[];
    /** 分页起始位置 */
    Offset?: number;
    /** 一页展示数量 */
    Limit?: number;
    /** 排序字段，支持索引名：IndexName、索引存储量：IndexStorage、索引创建时间：IndexCreateTime */
    OrderBy?: string;
    /** 过滤索引状态 */
    IndexStatusList?: string[];
    /** 排序顺序，支持asc、desc，默认为desc */
    Order?: string;
    /** 索引空间ID列表 */
    SpaceIds?: string[];
    /** 数据链路数据源类型 */
    DiSourceTypes?: string[];
    /** 标签信息 */
    TagList?: TagInfo[];
  }

  interface DescribeServerlessInstancesResponse {
    /** 索引元数据字段 */
    IndexMetaFields?: ServerlessIndexMetaField[] | null;
    /** 查询总数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeServerlessMetricsRequest {
    /** space空间id */
    SpaceId?: string;
    /** index索引id */
    IndexId?: string;
    /** 指标类型，暂时只支持Storage(存储大小),AllMetric(所有存储指标：索引流量、存储大小、文档数量、读请求和写请求) */
    MetricType?: string[];
    /** 时间长度类型DurationType(1: 3小时, 2: 昨天1天,3: 今日0点到现在) */
    DurationType?: number;
    /** 索引数据 */
    BatchIndexList?: string[];
  }

  interface DescribeServerlessMetricsResponse {
    /** storage指标值，单位byte */
    Storage?: number;
    /** IndexTraffic指标值，单位byte */
    IndexTraffic?: number;
    /** 读请求数，单位次数 */
    ReadReqTimes?: number;
    /** 写请求数，单位次数 */
    WriteReqTimes?: number;
    /** 文档数量，单位个数 */
    DocCount?: number;
    /** 指标数据数据 */
    MetricMapList?: MetricMapByIndexId[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeServerlessSpaceUserRequest {
    /** 空间的ID */
    SpaceId: string;
    /** 游标 */
    Offset?: number;
    /** 页条数 */
    Limit?: number;
    /** 用户名列表过滤 */
    UserNames?: string[];
    /** 用户类型 */
    UserTypes?: number[];
    /** 权限类型 */
    PrivilegeTypes?: number[];
  }

  interface DescribeServerlessSpaceUserResponse {
    /** 用户数组 */
    ServerlessSpaceUsers?: ServerlessSpaceUser[];
    /** 用户总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeServerlessSpacesRequest {
    /** 过滤的空间ID */
    SpaceIds?: string[];
    /** 过滤的空间名 */
    SpaceNames?: string[];
    /** 排序顺序，支持升序asc、降序desc */
    Order?: string;
    /** 排序字段，支持空间创建时间SpaceCreateTime */
    OrderBy?: string;
    /** vpcId信息数组 */
    VpcIds?: string[];
    /** 分页起始 */
    Offset?: number;
    /** 分页条数 */
    Limit?: number;
    /** 标签信息 */
    TagList?: TagInfo[];
  }

  interface DescribeServerlessSpacesResponse {
    /** 查询总数 */
    TotalCount?: number | null;
    /** Serverless空间信息列表 */
    ServerlessSpaces?: ServerlessSpace[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSpaceKibanaToolsRequest {
    /** space的ID */
    SpaceId: string;
  }

  interface DescribeSpaceKibanaToolsResponse {
    /** 该token用于登录内嵌kibana */
    KibanaToken?: string;
    /** token的过期时间 */
    ExpireTime?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeUserCosSnapshotListRequest {
    /** cos桶名 */
    CosBucket?: string;
    /** bucket 桶下的备份路径 */
    BasePath?: string;
    /** 云上集群迁移集群名 */
    ClusterInstanceId?: string;
  }

  interface DescribeUserCosSnapshotListResponse {
    /** cos 快照信息列表 */
    CosSnapshotInfoList?: CosSnapShotInfo[];
    /** cos 快照数量 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeViewsRequest {
    /** 集群实例ID */
    InstanceId: string;
  }

  interface DescribeViewsResponse {
    /** 集群维度视图 */
    ClusterView?: ClusterView | null;
    /** 节点维度视图 */
    NodesView?: NodeView[] | null;
    /** Kibana维度视图 */
    KibanasView?: KibanaView[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DiagnoseInstanceRequest {
    /** ES实例ID */
    InstanceId: string;
    /** 需要触发的诊断项 */
    DiagnoseJobs?: string[];
    /** 需要诊断的索引，支持通配符 */
    DiagnoseIndices?: string;
  }

  interface DiagnoseInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ExportIpTraceLogRequest {
    /** ES集群ID */
    InstanceId: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 起始偏移量 */
    Offset?: number;
    /** 数据条数 */
    Limit?: number;
    /** 访问IP */
    RemoteIp?: string[];
    /** Request/Response 请求/返回, 非必填 */
    TraceType?: string[];
    /** Public/Private 公网访问/内网访问, 非必填 */
    NetType?: string[];
    /** POST/GET/PUT/DELETE/HEAD/OPTIONS/PATCH/CONNECT/TRACE/CONNECT等, 非必填 */
    ReqTypeOrRspStatus?: string[];
    /** 关键字模糊查询，支持Lucene Query String */
    SearchKey?: string;
    /** uri搜索 */
    Uri?: string;
    /** 集群节点IP */
    NodeIp?: string[];
  }

  interface ExportIpTraceLogResponse {
    /** IP时间列表 */
    IpTraceList?: IpTimePair[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetDiagnoseSettingsRequest {
    /** ES实例ID */
    InstanceId: string;
  }

  interface GetDiagnoseSettingsResponse {
    /** 智能运维诊断项和元信息 */
    DiagnoseJobMetas?: DiagnoseJobMeta[];
    /** 0：开启智能运维；-1：关闭智能运维 */
    Status?: number;
    /** 智能运维每天定时巡检时间 */
    CronTime?: string;
    /** 智能运维当天已手动触发诊断次数 */
    Count?: number;
    /** 智能运维每天最大可手动触发次数 */
    MaxCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetRequestTargetNodeTypesRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface GetRequestTargetNodeTypesResponse {
    /** 接收请求的目标节点类型列表 */
    TargetNodeTypes?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InquirePriceRenewInstanceRequest {
    /** 集群实例Id */
    InstanceId: string;
  }

  interface InquirePriceRenewInstanceResponse {
    /** 刊例价，即集群原始价格 */
    OriginalPrice?: number;
    /** 折后价 */
    DiscountPrice?: number;
    /** 折扣，如65折 */
    Discount?: number;
    /** 货币，如CNY代表人民币 */
    Currency?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InstallInstanceModelRequest {
    /** 实例ID */
    InstanceId: string;
    /** 客户上传到cos的模型地址，单次请求限制一个。cos文件为压缩文件，格式包括：zip、tgz和tar.gz */
    UsrCosModelUrlList?: string[];
    /** 客户指定安装的模型名称，可为空，默认为模型文件名 */
    ModelNames?: string[];
    /** 模型使用的任务类型，包括：fill_mask, ner, question_answering, text_classification, text_embedding, text_expansion, text_similarity和zero_shot_classification，默认为text_embedding */
    TaskTypes?: string[];
  }

  interface InstallInstanceModelResponse {
    /** 发起异步流程的flowId */
    FlowId?: string;
    /** 调用接口的错误信息 */
    ErrMsg?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyEsVipSecurityGroupRequest {
    /** es集群的实例id */
    InstanceId: string;
    /** 安全组id列表 */
    SecurityGroupIds?: string[];
  }

  interface ModifyEsVipSecurityGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestartInstanceRequest {
    /** 实例ID */
    InstanceId: string;
    /** 是否强制重启true：强制重启false：不强制重启默认false */
    ForceRestart?: boolean;
    /** 重启模式：0 滚动重启； 1 全量重启 */
    RestartMode?: number;
    /** 重启时选择是否升级内核patch版本 */
    UpgradeKernel?: boolean;
  }

  interface RestartInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestartKibanaRequest {
    /** ES实例ID */
    InstanceId: string;
  }

  interface RestartKibanaResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestartLogstashInstanceRequest {
    /** 实例ID */
    InstanceId: string;
    /** 重启类型，0全量重启，1滚动重启 */
    Type?: number;
  }

  interface RestartLogstashInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestartNodesRequest {
    /** 集群实例ID */
    InstanceId: string;
    /** 节点名称列表 */
    NodeNames: string[];
    /** 是否强制重启 */
    ForceRestart?: boolean;
    /** 可选重启模式"in-place","blue-green"，分别表示重启，蓝绿重启；默认值为"in-place" */
    RestartMode?: string;
    /** 节点状态，在蓝绿模式中使用；离线节点蓝绿有风险 */
    IsOffline?: boolean;
    /** cvm延迟上架时间 */
    CvmDelayOnlineTime?: number;
    /** 分片迁移并发数 */
    ShardAllocationConcurrents?: number;
    /** 分片迁移并发速度 */
    ShardAllocationBytes?: number;
    /** 是否开启置放群组异步任务 */
    EnableScheduleRecoverGroup?: boolean;
    /** 置放群组异步任务时间段 */
    EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
    /** 事件id列表 */
    EventTypeIds?: string[];
  }

  interface RestartNodesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestoreClusterSnapshotRequest {
    /** 集群实例Id，格式：es-xxxx */
    InstanceId: string;
    /** 仓库名称 */
    RepositoryName: string;
    /** 集群快照名称 */
    SnapshotName: string;
    /** 目标集群实例Id，格式：es-xxxx，如果是恢复到本地，则和InstanceId一致 */
    TargetInstanceId: string;
    /** elastic用户名对应的密码信息 */
    Password: string;
    /** 要在所有恢复的索引中添加或更改的设置的逗号分隔列表。使用此参数可以在恢复快照时覆盖索引设置。 */
    IndexSettings?: string;
    /** 不应从快照还原的以逗号分隔的索引设置列表。 */
    IncludeGlobalState?: string[];
    /** 需要恢复的索引名称，非必填，为空则表示恢复所有支持传多个索引名称 */
    Indices?: string;
    /** 如果为 false，则如果快照中包含的一个或多个索引没有所有主分片可用，则整个恢复操作将失败。默认为 false,如果为 true，则允许恢复具有不可用分片的索引的部分快照。只有成功包含在快照中的分片才会被恢复。所有丢失的碎片将被重新创建为空 */
    Partial?: string;
  }

  interface RestoreClusterSnapshotResponse {
    /** 集群实例id */
    InstanceId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SaveAndDeployLogstashPipelineRequest {
    /** 实例ID */
    InstanceId: string;
    /** 实例管道信息 */
    Pipeline: LogstashPipeline;
    /** 操作类型1：只保存2：保存并部署 */
    OpType?: number;
  }

  interface SaveAndDeployLogstashPipelineResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StartLogstashPipelinesRequest {
    /** 实例ID */
    InstanceId: string;
    /** 管道ID列表 */
    PipelineIds: string[];
  }

  interface StartLogstashPipelinesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StopLogstashPipelinesRequest {
    /** 实例ID */
    InstanceId: string;
    /** 管道ID列表 */
    PipelineIds: string[];
  }

  interface StopLogstashPipelinesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateDiagnoseSettingsRequest {
    /** ES实例ID */
    InstanceId: string;
    /** 0：开启智能运维；-1：关闭智能运维 */
    Status?: number;
    /** 智能运维每天定时巡检时间，时间格式为HH:00:00，例如15:00:00 */
    CronTime?: string;
  }

  interface UpdateDiagnoseSettingsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateDictionariesRequest {
    /** ES实例ID */
    InstanceId: string;
    /** 安装时填IK分词主词典COS地址，删除时填词典名如test.dic */
    IkMainDicts?: string[];
    /** 安装时填IK分词停用词词典COS地址，删除时填词典名如test.dic */
    IkStopwords?: string[];
    /** 安装时填同义词词典COS地址，删除时填词典名如test.dic */
    Synonym?: string[];
    /** 安装时填QQ分词词典COS地址，删除时填词典名如test.dic */
    QQDict?: string[];
    /** 0：安装；1：删除。默认值0 */
    UpdateType?: number;
    /** 是否强制重启集群。默认值false */
    ForceRestart?: boolean;
  }

  interface UpdateDictionariesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateIndexRequest {
    /** ES集群ID */
    InstanceId: string;
    /** 更新的索引类型。auto：自治索引；normal：普通索引 */
    IndexType: string;
    /** 更新的索引名 */
    IndexName: string;
    /** 更新的索引元数据JSON，如mappings、settings */
    UpdateMetaJson?: string;
    /** 集群访问用户名 */
    Username?: string;
    /** 集群访问密码 */
    Password?: string;
    /** 是否滚动后备索引 */
    RolloverBackingIndex?: boolean;
  }

  interface UpdateIndexResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateInstanceRequest {
    /** 实例ID */
    InstanceId: string;
    /** 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_） */
    InstanceName?: string;
    /** 已废弃请使用NodeInfoList节点个数（2-50个） */
    NodeNum?: number;
    /** ES配置项（JSON格式字符串） */
    EsConfig?: string;
    /** 默认用户elastic的密码（8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号） */
    Password?: string;
    /** 可视化组件（Kibana、Cerebro）的公网访问策略 */
    EsAcl?: EsAcl;
    /** 已废弃请使用NodeInfoList磁盘大小（单位GB） */
    DiskSize?: number;
    /** 已废弃请使用NodeInfoList节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    NodeType?: string;
    /** 已废弃请使用NodeInfoList专用主节点个数（只支持3个或5个） */
    MasterNodeNum?: number;
    /** 已废弃请使用NodeInfoList专用主节点规格ES.S1.SMALL2：1核2GES.S1.MEDIUM4：2核4GES.S1.MEDIUM8：2核8GES.S1.LARGE16：4核16GES.S1.2XLARGE32：8核32GES.S1.4XLARGE32：16核32GES.S1.4XLARGE64：16核64G */
    MasterNodeType?: string;
    /** 已废弃请使用NodeInfoList专用主节点磁盘大小（单位GB系统默认配置为50GB,暂不支持自定义） */
    MasterNodeDiskSize?: number;
    /** 更新配置时是否强制重启true强制重启false不强制重启当前仅更新EsConfig时需要设置，默认值为false */
    ForceRestart?: boolean;
    /** COS自动备份信息 */
    CosBackup?: CosBackup;
    /** 节点信息列表，可以只传递要更新的节点及其对应的规格信息。支持的操作包括修改一种节点的个数修改一种节点的节点规格及磁盘大小增加一种节点类型（需要同时指定该节点的类型，个数，规格，磁盘等信息）上述操作一次只能进行一种，且磁盘类型不支持修改 */
    NodeInfoList?: NodeInfo[];
    /** ES集群公网访问状态OPEN 开启CLOSE 关闭 */
    PublicAccess?: string;
    /** 公网访问控制列表 */
    EsPublicAcl?: EsPublicAcl;
    /** Kibana公网访问状态OPEN 开启CLOSE 关闭 */
    KibanaPublicAccess?: string;
    /** Kibana内网访问状态OPEN 开启CLOSE 关闭 */
    KibanaPrivateAccess?: string;
    /** ES 6.8及以上版本基础版开启或关闭用户认证 */
    BasicSecurityType?: number;
    /** Kibana内网端口 */
    KibanaPrivatePort?: number;
    /** 0: 蓝绿变更方式扩容，集群不重启 （默认） 1: 磁盘解挂载扩容，集群滚动重启 */
    ScaleType?: number;
    /** 多可用区部署 */
    MultiZoneInfo?: ZoneDetail[];
    /** 场景化模板类型 -1：不启用 1：通用 2：日志 3：搜索 */
    SceneType?: number;
    /** Kibana配置项（JSON格式字符串） */
    KibanaConfig?: string;
    /** 可视化节点配置 */
    WebNodeTypeInfo?: WebNodeTypeInfo;
    /** 切换到新网络架构 */
    SwitchPrivateLink?: string;
    /** 启用Cerebro */
    EnableCerebro?: boolean;
    /** Cerebro公网访问状态OPEN 开启CLOSE 关闭 */
    CerebroPublicAccess?: string;
    /** Cerebro内网访问状态OPEN 开启CLOSE 关闭 */
    CerebroPrivateAccess?: string;
    /** 新增或修改的配置组信息 */
    EsConfigSet?: EsConfigSetInfo;
    /** 可维护时间段 */
    OperationDuration?: OperationDurationUpdated;
    /** 是否开启Alerting 外网告警输出：OPEN 开启CLOSE 关闭 */
    KibanaAlteringPublicAccess?: string;
    /** kibana内网自定义域名 */
    KibanaPrivateDomain?: string;
    /** cerebro内网自定义域名 */
    CerebroPrivateDomain?: string;
    /** 变更为https集群，默认是http */
    Protocol?: string;
    /** 节点出站访问详细信息 */
    OutboundPublicAcls?: OutboundPublicAcl[];
    /** 节点出站访问操作OPEN 开启CLOSE 关闭 */
    OutboundPublicAccess?: string;
    /** cvm延迟上架参数 */
    CvmDelayOnlineTime?: number;
    /** 分片迁移并发数 */
    ShardAllocationConcurrents?: number;
    /** 分片迁移并发速度 */
    ShardAllocationBytes?: number;
    /** 读写分离模式：-1-不开启，1-本地读写分离，2-远端读写分离 */
    ReadWriteMode?: number;
    /** 是否开启置放群组异步任务 */
    EnableScheduleRecoverGroup?: boolean;
    /** 置放群组异步任务可维护时间段 */
    EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
    /** 开启集群保护：OPEN-开启，CLOSE-关闭 */
    EnableDestroyProtection?: string;
    /** 自动扩盘参数 */
    AutoScaleDiskInfoList?: AutoScaleDiskInfo[];
    /** 自动扩盘删除参数 */
    AutoScaleDiskDeleteNodeTypeList?: string[];
  }

  interface UpdateInstanceResponse {
    /** 订单号 */
    DealName?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateJdkRequest {
    /** ES实例ID */
    InstanceId: string;
    /** Jdk类型，支持kona和oracle */
    Jdk?: string;
    /** Gc类型，支持g1和cms */
    Gc?: string;
    /** 是否强制重启 */
    ForceRestart?: boolean;
  }

  interface UpdateJdkResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateLogstashInstanceRequest {
    /** 实例ID */
    InstanceId: string;
    /** 实例节点数量 */
    NodeNum?: number;
    /** 实例YML配置 */
    YMLConfig?: string;
    /** 实例绑定的ES集群信息 */
    BindedES?: LogstashBindedES;
    /** 实例名称 */
    InstanceName?: string;
    /** 扩展文件列表 */
    ExtendedFiles?: LogstashExtendedFile[];
    /** 实例规格 */
    NodeType?: string;
    /** 节点磁盘容量 */
    DiskSize?: number;
    /** 可维护时间段 */
    OperationDuration?: OperationDurationUpdated;
  }

  interface UpdateLogstashInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateLogstashPipelineDescRequest {
    /** 实例ID */
    InstanceId: string;
    /** 实例管道ID */
    PipelineId: string;
    /** 管道描述信息 */
    PipelineDesc: string;
  }

  interface UpdateLogstashPipelineDescResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdatePluginsRequest {
    /** 实例ID */
    InstanceId: string;
    /** 需要安装的插件名列表 */
    InstallPluginList?: string[];
    /** 需要卸载的插件名列表 */
    RemovePluginList?: string[];
    /** 是否强制重启，默认值false */
    ForceRestart?: boolean;
    /** 是否重新安装，默认值false */
    ForceUpdate?: boolean;
    /** 0：系统插件 */
    PluginType?: number;
  }

  interface UpdatePluginsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateRequestTargetNodeTypesRequest {
    /** 实例ID */
    InstanceId: string;
    /** 接收请求的目标节点类型列表 */
    TargetNodeTypes: string[];
  }

  interface UpdateRequestTargetNodeTypesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateServerlessInstanceRequest {
    /** Serveless实例ID */
    InstanceId: string;
    /** 更新的索引元数据JSON，如mappings、settings */
    UpdateMetaJson?: string;
    /** 实例访问密码 */
    Password?: string;
    /** 开启kibana内网访问，如OPEN、CLOSE */
    KibanaPrivateAccess?: string;
    /** 开启kibana外网访问，如OPEN、CLOSE */
    KibanaPublicAccess?: string;
    /** 访问控制列表 */
    KibanaPublicAcl?: KibanaPublicAcl;
  }

  interface UpdateServerlessInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateServerlessSpaceRequest {
    /** Serveless索引空间ID */
    SpaceId: string;
    /** Serveless索引空间名 */
    SpaceName?: string;
    /** kibana内网开关 */
    KibanaPrivateAccess?: string;
    /** kibana公网开关 */
    KibanaPublicAccess?: string;
    /** kibana公网白名单 */
    KibanaPublicAcl?: EsAcl;
  }

  interface UpdateServerlessSpaceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeInstanceRequest {
    /** 实例ID */
    InstanceId: string;
    /** 目标ES版本，支持：”6.4.3“, "6.8.2"，"7.5.1", "7.10.1", "7.14.2" */
    EsVersion: string;
    /** 是否只做升级检查，默认值为false */
    CheckOnly?: boolean;
    /** 目标商业特性版本：oss 开源版basic 基础版当前仅在5.6.4升级6.x版本时使用，默认值为basic */
    LicenseType?: string;
    /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启 */
    BasicSecurityType?: number;
    /** 升级方式：scale 蓝绿变更restart 滚动重启默认值为scale */
    UpgradeMode?: string;
    /** 升级版本前是否对集群进行备份，默认不备份 */
    CosBackup?: boolean;
    /** 滚动模式时，是否跳过检查，进行强制重启。默认值为false */
    SkipCheckForceRestart?: boolean;
    /** cvm延迟上架参数 */
    CvmDelayOnlineTime?: number;
    /** 分片迁移并发数 */
    ShardAllocationConcurrents?: number;
    /** 分片迁移并发速度 */
    ShardAllocationBytes?: number;
    /** 是否开启置放群组异步任务 */
    EnableScheduleRecoverGroup?: boolean;
    /** 置放群组异步任务时间段 */
    EnableScheduleOperationDuration?: EnableScheduleOperationDuration;
  }

  interface UpgradeInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeLicenseRequest {
    /** 实例ID */
    InstanceId: string;
    /** License类型oss：开源版basic：基础版platinum：白金版默认值platinum */
    LicenseType: string;
    /** 是否自动使用代金券0：不自动使用1：自动使用默认值0 */
    AutoVoucher?: number;
    /** 代金券ID列表（目前仅支持指定一张代金券） */
    VoucherIds?: string[];
    /** 6.8（及以上版本）基础版是否开启xpack security认证1：不开启2：开启不传参时会默认维持原状，传参时需注意只能由不开启变为开启，无法由开启变为不开启 */
    BasicSecurityType?: number;
    /** 是否强制重启true强制重启false不强制重启 默认值false */
    ForceRestart?: boolean;
  }

  interface UpgradeLicenseResponse {
    /** 订单号 */
    DealName?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Es Elasticsearch Service} */
declare interface Es {
  (): Versions;
  /** 大模型生成 {@link ChatCompletionsRequest} {@link ChatCompletionsResponse} */
  ChatCompletions(data: ChatCompletionsRequest, config?: AxiosRequestConfig): AxiosPromise<ChatCompletionsResponse>;
  /** 在线文本切片 {@link ChunkDocumentRequest} {@link ChunkDocumentResponse} */
  ChunkDocument(data: ChunkDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<ChunkDocumentResponse>;
  /** 文档切片（异步） {@link ChunkDocumentAsyncRequest} {@link ChunkDocumentAsyncResponse} */
  ChunkDocumentAsync(data: ChunkDocumentAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<ChunkDocumentAsyncResponse>;
  /** 获取文档切片结果 {@link GetDocumentChunkResultRequest} {@link GetDocumentChunkResultResponse} */
  GetDocumentChunkResult(data: GetDocumentChunkResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetDocumentChunkResultResponse>;
  /** 获取文档解析结果 {@link GetDocumentParseResultRequest} {@link GetDocumentParseResultResponse} */
  GetDocumentParseResult(data: GetDocumentParseResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetDocumentParseResultResponse>;
  /** 获取特征向量 {@link GetTextEmbeddingRequest} {@link GetTextEmbeddingResponse} */
  GetTextEmbedding(data: GetTextEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<GetTextEmbeddingResponse>;
  /** 实时文档解析 {@link ParseDocumentRequest} {@link ParseDocumentResponse} */
  ParseDocument(data: ParseDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<ParseDocumentResponse>;
  /** 文档解析（异步） {@link ParseDocumentAsyncRequest} {@link ParseDocumentAsyncResponse} */
  ParseDocumentAsync(data: ParseDocumentAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<ParseDocumentAsyncResponse>;
  /** 重排序 {@link RunRerankRequest} {@link RunRerankResponse} */
  RunRerank(data: RunRerankRequest, config?: AxiosRequestConfig): AxiosPromise<RunRerankResponse>;
  /** 检查cos迁移索引元数据 {@link V20180416.CheckMigrateIndexMetaDataRequest} {@link V20180416.CheckMigrateIndexMetaDataResponse} */
  CheckMigrateIndexMetaData(data: V20180416.CheckMigrateIndexMetaDataRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CheckMigrateIndexMetaDataResponse>;
  /** 创建集群快照 {@link V20180416.CreateClusterSnapshotRequest} {@link V20180416.CreateClusterSnapshotResponse} */
  CreateClusterSnapshot(data: V20180416.CreateClusterSnapshotRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CreateClusterSnapshotResponse>;
  /** cos迁移流程 {@link V20180416.CreateCosMigrateToServerlessInstanceRequest} {@link V20180416.CreateCosMigrateToServerlessInstanceResponse} */
  CreateCosMigrateToServerlessInstance(data: V20180416.CreateCosMigrateToServerlessInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CreateCosMigrateToServerlessInstanceResponse>;
  /** 创建索引 {@link V20180416.CreateIndexRequest} {@link V20180416.CreateIndexResponse} */
  CreateIndex(data: V20180416.CreateIndexRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CreateIndexResponse>;
  /** 创建ES集群实例 {@link V20180416.CreateInstanceRequest} {@link V20180416.CreateInstanceResponse} */
  CreateInstance(data: V20180416.CreateInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CreateInstanceResponse>;
  /** 创建Logstash实例 {@link V20180416.CreateLogstashInstanceRequest} {@link V20180416.CreateLogstashInstanceResponse} */
  CreateLogstashInstance(data: V20180416.CreateLogstashInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CreateLogstashInstanceResponse>;
  /** 创建Serverless索引 {@link V20180416.CreateServerlessInstanceRequest} {@link V20180416.CreateServerlessInstanceResponse} */
  CreateServerlessInstance(data: V20180416.CreateServerlessInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CreateServerlessInstanceResponse>;
  /** 创建Serverless索引项目空间(new) {@link V20180416.CreateServerlessSpaceV2Request} {@link V20180416.CreateServerlessSpaceV2Response} */
  CreateServerlessSpaceV2(data: V20180416.CreateServerlessSpaceV2Request, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.CreateServerlessSpaceV2Response>;
  /** 删除快照仓库里备份的快照 {@link V20180416.DeleteClusterSnapshotRequest} {@link V20180416.DeleteClusterSnapshotResponse} */
  DeleteClusterSnapshot(data: V20180416.DeleteClusterSnapshotRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DeleteClusterSnapshotResponse>;
  /** 删除索引 {@link V20180416.DeleteIndexRequest} {@link V20180416.DeleteIndexResponse} */
  DeleteIndex(data: V20180416.DeleteIndexRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DeleteIndexResponse>;
  /** 销毁ES集群实例 {@link V20180416.DeleteInstanceRequest} {@link V20180416.DeleteInstanceResponse} */
  DeleteInstance(data: V20180416.DeleteInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DeleteInstanceResponse>;
  /** 删除Logstash实例 {@link V20180416.DeleteLogstashInstanceRequest} {@link V20180416.DeleteLogstashInstanceResponse} */
  DeleteLogstashInstance(data: V20180416.DeleteLogstashInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DeleteLogstashInstanceResponse>;
  /** 删除Logstash管道 {@link V20180416.DeleteLogstashPipelinesRequest} {@link V20180416.DeleteLogstashPipelinesResponse} */
  DeleteLogstashPipelines(data: V20180416.DeleteLogstashPipelinesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DeleteLogstashPipelinesResponse>;
  /** 删除Serverless索引 {@link V20180416.DeleteServerlessInstanceRequest} {@link V20180416.DeleteServerlessInstanceResponse} */
  DeleteServerlessInstance(data: V20180416.DeleteServerlessInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DeleteServerlessInstanceResponse>;
  /** 删除Serverless空间子用户 {@link V20180416.DeleteServerlessSpaceUserRequest} {@link V20180416.DeleteServerlessSpaceUserResponse} */
  DeleteServerlessSpaceUser(data: V20180416.DeleteServerlessSpaceUserRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DeleteServerlessSpaceUserResponse>;
  /** 获取快照备份列表 {@link V20180416.DescribeClusterSnapshotRequest} {@link V20180416.DescribeClusterSnapshotResponse} */
  DescribeClusterSnapshot(data: V20180416.DescribeClusterSnapshotRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeClusterSnapshotResponse>;
  /** 查询智能运维诊断结果报告 {@link V20180416.DescribeDiagnoseRequest} {@link V20180416.DescribeDiagnoseResponse} */
  DescribeDiagnose(data: V20180416.DescribeDiagnoseRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeDiagnoseResponse>;
  /** 获取索引列表 {@link V20180416.DescribeIndexListRequest} {@link V20180416.DescribeIndexListResponse} */
  DescribeIndexList(data: V20180416.DescribeIndexListRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeIndexListResponse>;
  /** 获取索引元数据 {@link V20180416.DescribeIndexMetaRequest} {@link V20180416.DescribeIndexMetaResponse} */
  DescribeIndexMeta(data: V20180416.DescribeIndexMetaRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeIndexMetaResponse>;
  /** 查询ES集群日志 {@link V20180416.DescribeInstanceLogsRequest} {@link V20180416.DescribeInstanceLogsResponse} */
  DescribeInstanceLogs(data: V20180416.DescribeInstanceLogsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeInstanceLogsResponse>;
  /** 查询实例操作记录 {@link V20180416.DescribeInstanceOperationsRequest} {@link V20180416.DescribeInstanceOperationsResponse} */
  DescribeInstanceOperations(data: V20180416.DescribeInstanceOperationsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeInstanceOperationsResponse>;
  /** 查询实例插件列表 {@link V20180416.DescribeInstancePluginListRequest} {@link V20180416.DescribeInstancePluginListResponse} */
  DescribeInstancePluginList(data: V20180416.DescribeInstancePluginListRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeInstancePluginListResponse>;
  /** 查询ES集群实例 {@link V20180416.DescribeInstancesRequest} {@link V20180416.DescribeInstancesResponse} */
  DescribeInstances(data: V20180416.DescribeInstancesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeInstancesResponse>;
  /** 查询Logstash实例日志 {@link V20180416.DescribeLogstashInstanceLogsRequest} {@link V20180416.DescribeLogstashInstanceLogsResponse} */
  DescribeLogstashInstanceLogs(data: V20180416.DescribeLogstashInstanceLogsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeLogstashInstanceLogsResponse>;
  /** 查询Logstash实例操作记录 {@link V20180416.DescribeLogstashInstanceOperationsRequest} {@link V20180416.DescribeLogstashInstanceOperationsResponse} */
  DescribeLogstashInstanceOperations(data: V20180416.DescribeLogstashInstanceOperationsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeLogstashInstanceOperationsResponse>;
  /** 获取Logstash实例列表 {@link V20180416.DescribeLogstashInstancesRequest} {@link V20180416.DescribeLogstashInstancesResponse} */
  DescribeLogstashInstances(data: V20180416.DescribeLogstashInstancesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeLogstashInstancesResponse>;
  /** 获取Logstash实例管道列表 {@link V20180416.DescribeLogstashPipelinesRequest} {@link V20180416.DescribeLogstashPipelinesResponse} */
  DescribeLogstashPipelines(data: V20180416.DescribeLogstashPipelinesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeLogstashPipelinesResponse>;
  /** Serverless获取索引列表 {@link V20180416.DescribeServerlessInstancesRequest} {@link V20180416.DescribeServerlessInstancesResponse} */
  DescribeServerlessInstances(data: V20180416.DescribeServerlessInstancesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeServerlessInstancesResponse>;
  /** 获取实例对应的监控指标 {@link V20180416.DescribeServerlessMetricsRequest} {@link V20180416.DescribeServerlessMetricsResponse} */
  DescribeServerlessMetrics(data: V20180416.DescribeServerlessMetricsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeServerlessMetricsResponse>;
  /** 查看Serverless空间子用户 {@link V20180416.DescribeServerlessSpaceUserRequest} {@link V20180416.DescribeServerlessSpaceUserResponse} */
  DescribeServerlessSpaceUser(data: V20180416.DescribeServerlessSpaceUserRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeServerlessSpaceUserResponse>;
  /** 获取Serverless索引空间列表 {@link V20180416.DescribeServerlessSpacesRequest} {@link V20180416.DescribeServerlessSpacesResponse} */
  DescribeServerlessSpaces(data: V20180416.DescribeServerlessSpacesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeServerlessSpacesResponse>;
  /** space维度的kibana获取登录token {@link V20180416.DescribeSpaceKibanaToolsRequest} {@link V20180416.DescribeSpaceKibanaToolsResponse} */
  DescribeSpaceKibanaTools(data: V20180416.DescribeSpaceKibanaToolsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeSpaceKibanaToolsResponse>;
  /** 查询快照信息接口 {@link V20180416.DescribeUserCosSnapshotListRequest} {@link V20180416.DescribeUserCosSnapshotListResponse} */
  DescribeUserCosSnapshotList(data: V20180416.DescribeUserCosSnapshotListRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeUserCosSnapshotListResponse>;
  /** 查询集群视图 {@link V20180416.DescribeViewsRequest} {@link V20180416.DescribeViewsResponse} */
  DescribeViews(data: V20180416.DescribeViewsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DescribeViewsResponse>;
  /** 智能运维诊断集群 {@link V20180416.DiagnoseInstanceRequest} {@link V20180416.DiagnoseInstanceResponse} */
  DiagnoseInstance(data: V20180416.DiagnoseInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.DiagnoseInstanceResponse>;
  /** 导出IP溯源日志 {@link V20180416.ExportIpTraceLogRequest} {@link V20180416.ExportIpTraceLogResponse} */
  ExportIpTraceLog(data: V20180416.ExportIpTraceLogRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.ExportIpTraceLogResponse>;
  /** 查看智能运维配置 {@link V20180416.GetDiagnoseSettingsRequest} {@link V20180416.GetDiagnoseSettingsResponse} */
  GetDiagnoseSettings(data: V20180416.GetDiagnoseSettingsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.GetDiagnoseSettingsResponse>;
  /** 获取接收客户端请求的节点类型 {@link V20180416.GetRequestTargetNodeTypesRequest} {@link V20180416.GetRequestTargetNodeTypesResponse} */
  GetRequestTargetNodeTypes(data: V20180416.GetRequestTargetNodeTypesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.GetRequestTargetNodeTypesResponse>;
  /** 集群续费询价 {@link V20180416.InquirePriceRenewInstanceRequest} {@link V20180416.InquirePriceRenewInstanceResponse} */
  InquirePriceRenewInstance(data: V20180416.InquirePriceRenewInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.InquirePriceRenewInstanceResponse>;
  /** 安装ES集群模型 {@link V20180416.InstallInstanceModelRequest} {@link V20180416.InstallInstanceModelResponse} */
  InstallInstanceModel(data: V20180416.InstallInstanceModelRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.InstallInstanceModelResponse>;
  /** 修改集群VIP绑定的安全组 {@link V20180416.ModifyEsVipSecurityGroupRequest} {@link V20180416.ModifyEsVipSecurityGroupResponse} */
  ModifyEsVipSecurityGroup(data: V20180416.ModifyEsVipSecurityGroupRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.ModifyEsVipSecurityGroupResponse>;
  /** 重启ES集群实例 {@link V20180416.RestartInstanceRequest} {@link V20180416.RestartInstanceResponse} */
  RestartInstance(data: V20180416.RestartInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.RestartInstanceResponse>;
  /** 重启Kibana {@link V20180416.RestartKibanaRequest} {@link V20180416.RestartKibanaResponse} */
  RestartKibana(data: V20180416.RestartKibanaRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.RestartKibanaResponse>;
  /** 重启Logstash实例 {@link V20180416.RestartLogstashInstanceRequest} {@link V20180416.RestartLogstashInstanceResponse} */
  RestartLogstashInstance(data: V20180416.RestartLogstashInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.RestartLogstashInstanceResponse>;
  /** 重启集群节点 {@link V20180416.RestartNodesRequest} {@link V20180416.RestartNodesResponse} */
  RestartNodes(data: V20180416.RestartNodesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.RestartNodesResponse>;
  /** 快照备份恢复 {@link V20180416.RestoreClusterSnapshotRequest} {@link V20180416.RestoreClusterSnapshotResponse} */
  RestoreClusterSnapshot(data: V20180416.RestoreClusterSnapshotRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.RestoreClusterSnapshotResponse>;
  /** 保存并部署管道 {@link V20180416.SaveAndDeployLogstashPipelineRequest} {@link V20180416.SaveAndDeployLogstashPipelineResponse} */
  SaveAndDeployLogstashPipeline(data: V20180416.SaveAndDeployLogstashPipelineRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.SaveAndDeployLogstashPipelineResponse>;
  /** 启动Logstash管道 {@link V20180416.StartLogstashPipelinesRequest} {@link V20180416.StartLogstashPipelinesResponse} */
  StartLogstashPipelines(data: V20180416.StartLogstashPipelinesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.StartLogstashPipelinesResponse>;
  /** 停止Logstash管道 {@link V20180416.StopLogstashPipelinesRequest} {@link V20180416.StopLogstashPipelinesResponse} */
  StopLogstashPipelines(data: V20180416.StopLogstashPipelinesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.StopLogstashPipelinesResponse>;
  /** 更新智能运维配置 {@link V20180416.UpdateDiagnoseSettingsRequest} {@link V20180416.UpdateDiagnoseSettingsResponse} */
  UpdateDiagnoseSettings(data: V20180416.UpdateDiagnoseSettingsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateDiagnoseSettingsResponse>;
  /** 更新ES集群词典 {@link V20180416.UpdateDictionariesRequest} {@link V20180416.UpdateDictionariesResponse} */
  UpdateDictionaries(data: V20180416.UpdateDictionariesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateDictionariesResponse>;
  /** 更新索引 {@link V20180416.UpdateIndexRequest} {@link V20180416.UpdateIndexResponse} */
  UpdateIndex(data: V20180416.UpdateIndexRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateIndexResponse>;
  /** 更新ES集群实例 {@link V20180416.UpdateInstanceRequest} {@link V20180416.UpdateInstanceResponse} */
  UpdateInstance(data: V20180416.UpdateInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateInstanceResponse>;
  /** 更新实例Jdk配置 {@link V20180416.UpdateJdkRequest} {@link V20180416.UpdateJdkResponse} */
  UpdateJdk(data: V20180416.UpdateJdkRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateJdkResponse>;
  /** 更新Logstash实例 {@link V20180416.UpdateLogstashInstanceRequest} {@link V20180416.UpdateLogstashInstanceResponse} */
  UpdateLogstashInstance(data: V20180416.UpdateLogstashInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateLogstashInstanceResponse>;
  /** 更新管道描述 {@link V20180416.UpdateLogstashPipelineDescRequest} {@link V20180416.UpdateLogstashPipelineDescResponse} */
  UpdateLogstashPipelineDesc(data: V20180416.UpdateLogstashPipelineDescRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateLogstashPipelineDescResponse>;
  /** 变更插件列表 {@link V20180416.UpdatePluginsRequest} {@link V20180416.UpdatePluginsResponse} */
  UpdatePlugins(data: V20180416.UpdatePluginsRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdatePluginsResponse>;
  /** 更新接收客户端请求的节点类型 {@link V20180416.UpdateRequestTargetNodeTypesRequest} {@link V20180416.UpdateRequestTargetNodeTypesResponse} */
  UpdateRequestTargetNodeTypes(data: V20180416.UpdateRequestTargetNodeTypesRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateRequestTargetNodeTypesResponse>;
  /** 更新Serverless索引 {@link V20180416.UpdateServerlessInstanceRequest} {@link V20180416.UpdateServerlessInstanceResponse} */
  UpdateServerlessInstance(data: V20180416.UpdateServerlessInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateServerlessInstanceResponse>;
  /** 更新Serverless索引空间 {@link V20180416.UpdateServerlessSpaceRequest} {@link V20180416.UpdateServerlessSpaceResponse} */
  UpdateServerlessSpace(data: V20180416.UpdateServerlessSpaceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpdateServerlessSpaceResponse>;
  /** 升级ES集群版本 {@link V20180416.UpgradeInstanceRequest} {@link V20180416.UpgradeInstanceResponse} */
  UpgradeInstance(data: V20180416.UpgradeInstanceRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpgradeInstanceResponse>;
  /** 升级ES商业特性 {@link V20180416.UpgradeLicenseRequest} {@link V20180416.UpgradeLicenseResponse} */
  UpgradeLicense(data: V20180416.UpgradeLicenseRequest, config: AxiosRequestConfig & V20180416.VersionHeader): AxiosPromise<V20180416.UpgradeLicenseResponse>;
}

export declare type Versions = ["2025-01-01", "2018-04-16"];

export default Es;
