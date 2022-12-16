/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 文本纠错结果 */
declare interface CCIToken {
  /** 错别字内容 */
  Word?: string;
  /** 错别字的起始位置，从0开始 */
  BeginOffset?: number;
  /** 错别字纠错结果 */
  CorrectWord?: string;
}

/** 文本分类结果 */
declare interface ClassificationResult {
  /** 一级分类名称 */
  FirstClassName?: string;
  /** 二级分类名称 */
  SecondClassName?: string;
  /** 一级分类概率 */
  FirstClassProbability?: number | null;
  /** 二级分类概率 */
  SecondClassProbability?: number | null;
  /** 三级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档 */
  ThirdClassName?: string | null;
  /** 三级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档 */
  ThirdClassProbability?: number | null;
  /** 四级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档 */
  FourthClassName?: string | null;
  /** 四级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档 */
  FourthClassProbability?: number | null;
  /** 五级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档 */
  FifthClassName?: string | null;
  /** 五级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档 */
  FifthClassProbability?: number | null;
}

/** 自定义词库信息 */
declare interface DictInfo {
  /** 自定义词库名称。 */
  Name: string;
  /** 自定义词库ID。 */
  Id: string;
  /** 自定义词库描述信息。 */
  Description?: string | null;
  /** 自定义词库修改时间，形式为:yyyy-mm-dd hh:mm:ss。 */
  UpdateTime?: string | null;
  /** 自定义词库创建时间，形式为:yyyy-mm-dd hh:mm:ss。 */
  CreateTime?: string | null;
}

/** 句法依存分析结果，包括基础词，基础词的序号，当前词父节点的序号，句法依存关系的类型 */
declare interface DpToken {
  /** 句法依存关系的类型 */
  Relation?: string | null;
  /** 当前词父节点的序号 */
  HeadId?: number | null;
  /** 基础词 */
  Word?: string | null;
  /** 基础词的序号 */
  Id?: number | null;
}

/** 关键词提取结果 */
declare interface Keyword {
  /** 权重 */
  Score?: number;
  /** 关键词 */
  Word?: string;
}

/** 命名实体识别结果 */
declare interface NerToken {
  /** 基础词 */
  Word: string;
  /** 长度 */
  Length: number;
  /** 起始位置 */
  BeginOffset: number;
  /** 命名实体类型 */
  Type: string;
}

/** 分词&词性标注结果 */
declare interface PosToken {
  /** 基础词 */
  Word: string;
  /** 长度 */
  Length: number;
  /** 起始位置 */
  BeginOffset: number;
  /** 词性 */
  Pos: string;
}

/** 词条搜索的结果，主要描述该词条是否存在以及相关的词性。 */
declare interface SearchResult {
  /** 被搜索的词条文本。 */
  Text: string;
  /** 0表示词条不存在，1表示存在。 */
  IsExist: number;
  /** 匹配到的词条文本。 */
  MatchText: string | null;
  /** 词条的词性。 */
  Pos?: string | null;
}

/** 文本相似度 */
declare interface Similarity {
  /** 目标文本句子 */
  Text: string;
  /** 相似度分数 */
  Score: number;
}

/** 词条信息。 */
declare interface WordItem {
  /** 词条文本内容。 */
  Text: string;
  /** 词条创建时间。 */
  CreateTime?: string;
  /** 词条的词性。 */
  Pos?: string | null;
}

declare interface AutoSummarizationRequest {
  /** 待处理的文本（仅支持UTF-8格式，不超过2000字） */
  Text: string;
  /** 指定摘要的长度上限（默认值为200）注：为保证摘要的可读性，最终生成的摘要长度会低于指定的长度上限。 */
  Length?: number;
}

declare interface AutoSummarizationResponse {
  /** 文本摘要结果 */
  Summary: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChatBotRequest {
  /** 用户请求的query */
  Query: string;
  /** 服务的id, 主要用于儿童闲聊接口，比如手Q的openid */
  OpenId?: string;
  /** 0: 通用闲聊, 1:儿童闲聊, 默认是通用闲聊 */
  Flag?: number;
}

declare interface ChatBotResponse {
  /** 闲聊回复 */
  Reply: string;
  /** 对于当前输出回复的自信度 */
  Confidence: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDictRequest {
  /** 自定义词库名称，不超过20字。 */
  Name: string;
  /** 自定义词库描述，不超过100字。 */
  Description?: string;
}

declare interface CreateDictResponse {
  /** 创建的自定义词库ID。 */
  DictId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateWordItemsRequest {
  /** 自定义词库ID。 */
  DictId: string;
  /** 待添加的词条集合。 */
  WordItems: WordItem[];
}

declare interface CreateWordItemsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDictRequest {
  /** 要删除的自定义词库ID。 */
  DictId: string;
}

declare interface DeleteDictResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteWordItemsRequest {
  /** 自定义词库ID。 */
  DictId: string;
  /** 待删除的词条集合。 */
  WordItems: WordItem[];
}

declare interface DeleteWordItemsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DependencyParsingRequest {
  /** 待分析的文本（仅支持UTF-8格式，不超过200字） */
  Text: string;
}

declare interface DependencyParsingResponse {
  /** 句法依存分析结果，其中句法依存关系的类型包括：主谓关系，eg: 我送她一束花 (我 <-- 送)动宾关系，eg: 我送她一束花 (送 --> 花)间宾关系，eg: 我送她一束花 (送 --> 她)前置宾语，eg: 他什么书都读 (书 <-- 读)兼语，eg: 他请我吃饭 (请 --> 我)定中关系，eg: 红苹果 (红 <-- 苹果)状中结构，eg: 非常美丽 (非常 <-- 美丽)动补结构，eg: 做完了作业 (做 --> 完)并列关系，eg: 大山和大海 (大山 --> 大海)介宾关系，eg: 在贸易区内 (在 --> 内)左附加关系，eg: 大山和大海 (和 <-- 大海)右附加关系，eg: 孩子们 (孩子 --> 们)独立结构，eg: 两个单句在结构上彼此独立标点符号，eg: 。核心关系，eg: 整个句子的核心 */
  DpTokens?: DpToken[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDictRequest {
  /** 自定义词库ID。 */
  DictId?: string;
  /** 自定义词库名称，模糊搜索。 */
  Name?: string;
}

declare interface DescribeDictResponse {
  /** 查询到的词库信息列表。 */
  Dicts?: DictInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDictsRequest {
  /** 每页数据量，范围为1~100，默认为10。 */
  Limit?: number;
  /** 分页偏移量，从0开始，默认为0。 */
  Offset?: number;
}

declare interface DescribeDictsResponse {
  /** 记录总条数。 */
  TotalCount?: number;
  /** 自定义词库信息列表。 */
  Dicts?: DictInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWordItemsRequest {
  /** 自定义词库ID。 */
  DictId: string;
  /** 分页偏移量，从0开始，默认为0。 */
  Offset?: number;
  /** 每页数据量，范围为1~100，默认为10。 */
  Limit?: number;
  /** 待检索的词条文本，支持模糊匹配。 */
  Text?: string;
}

declare interface DescribeWordItemsResponse {
  /** 词条记录总条数。 */
  TotalCount?: number;
  /** 词条信息列表。 */
  WordItems?: WordItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GenerateCoupletRequest {
  /** 生成对联的关键词。长度需>=2，当长度>2时，自动截取前两个字作为关键字。内容需为常用汉字（不含有数字、英文、韩语、日语、符号等等其他）。 */
  Text: string;
  /** 返回的文本结果为繁体还是简体。0：简体；1：繁体。默认为0。 */
  TargetType?: number;
}

declare interface GenerateCoupletResponse {
  /** 横批。 */
  TopScroll: string;
  /** 上联与下联。 */
  Content: string[];
  /** 当对联随机生成时，展示随机生成原因。 */
  RandomCause: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GeneratePoetryRequest {
  /** 生成诗词的关键词。 */
  Text: string;
  /** 生成诗词的类型。0：藏头或藏身；1：藏头；2：藏身。默认为0。 */
  PoetryType?: number;
  /** 诗的体裁。0：五言律诗或七言律诗；5：五言律诗；7：七言律诗。默认为0。 */
  Genre?: number;
}

declare interface GeneratePoetryResponse {
  /** 诗题，即输入的生成诗词的关键词。 */
  Title: string;
  /** 诗的内容。 */
  Content: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface KeywordsExtractionRequest {
  /** 待处理的文本（仅支持UTF-8格式，不超过10000字符） */
  Text: string;
  /** 指定关键词个数上限（默认值为5） */
  Num?: number;
}

declare interface KeywordsExtractionResponse {
  /** 关键词提取结果 */
  Keywords: Keyword[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LexicalAnalysisRequest {
  /** 待分析的文本（仅支持UTF-8格式，不超过500字） */
  Text: string;
  /** 指定要加载的自定义词库ID。 */
  DictId?: string;
  /** 词法分析模式（默认取2值）：1、高精度（混合粒度分词能力）；2、高性能（单粒度分词能力）； */
  Flag?: number;
}

declare interface LexicalAnalysisResponse {
  /** 命名实体识别结果。取值范围：PER：表示人名，如刘德华、贝克汉姆LOC：表示地名，如北京、华山ORG：表示机构团体名，如腾讯、最高人民法院、人大附中PRODUCTION：表示产品名，如QQ、微信、iPhone */
  NerTokens?: NerToken[] | null;
  /** 分词&词性标注结果（词性表请参见附录） */
  PosTokens?: PosToken[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchWordItemsRequest {
  /** 自定义词库ID。 */
  DictId: string;
  /** 待检索的词条集合。 */
  WordItems: WordItem[];
}

declare interface SearchWordItemsResponse {
  /** 词条检索结果集合。 */
  Results: SearchResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SentenceEmbeddingRequest {
  /** 输入的文本（仅支持UTF-8格式，不超过500字） */
  Text: string;
}

declare interface SentenceEmbeddingResponse {
  /** 句向量数组 */
  Vector?: number[];
  /** 句向量的维度 */
  Dimension?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SentimentAnalysisRequest {
  /** 待分析的文本（仅支持UTF-8格式，不超过200字） */
  Text: string;
  /** 待分析文本所属的类型，仅当输入参数Mode取值为2class时有效（默认取4值）：1、商品评论类2、社交类3、美食酒店类4、通用领域类 */
  Flag?: number;
  /** 情感分类模式选项，可取2class或3class（默认值为2class）1、2class：返回正负面二分类情感结果2、3class：返回正负面及中性三分类情感结果 */
  Mode?: string;
}

declare interface SentimentAnalysisResponse {
  /** 正面情感概率 */
  Positive: number;
  /** 中性情感概率，当输入参数Mode取值为3class时有效，否则值为空 */
  Neutral: number | null;
  /** 负面情感概率 */
  Negative: number;
  /** 情感分类结果：1、positive，表示正面情感2、negative，表示负面情感3、neutral，表示中性、无情感 */
  Sentiment: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SimilarWordsRequest {
  /** 输入的词语（仅支持UTF-8格式，不超过20字） */
  Text: string;
  /** 相似词个数；取值范围：1-200，默认为10； */
  WordNumber?: number;
}

declare interface SimilarWordsResponse {
  /** 相似词数组 */
  SimilarWords?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TextClassificationRequest {
  /** 待分类的文本（仅支持UTF-8格式，不超过10000字） */
  Text: string;
  /** 领域分类体系（默认取1值）：1、通用领域，二分类2、新闻领域，五分类。类别数据不一定全部返回，详情见类目映射表（注意：目前五分类已下线不可用） */
  Flag?: number;
}

declare interface TextClassificationResponse {
  /** 文本分类结果（文本分类映射表请参见附录） */
  Classes: ClassificationResult[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TextCorrectionProRequest {
  /** 待纠错的文本（仅支持UTF-8格式，不超过128字符） */
  Text: string;
}

declare interface TextCorrectionProResponse {
  /** 纠错详情 */
  CCITokens: CCIToken[] | null;
  /** 纠错后的文本 */
  ResultText: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TextCorrectionRequest {
  /** 待纠错的文本（仅支持UTF-8格式，不超过2000字符） */
  Text: string;
}

declare interface TextCorrectionResponse {
  /** 纠错详情 */
  CCITokens: CCIToken[] | null;
  /** 纠错后的文本 */
  ResultText: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TextSimilarityProRequest {
  /** 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过128字符） */
  SrcText: string;
  /** 目标句子（仅支持UTF-8格式，不超过128字符） */
  TargetText: string[];
}

declare interface TextSimilarityProResponse {
  /** 每个目标句子与源句子的相似度分值，按照分值降序排列 */
  Similarity: Similarity[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TextSimilarityRequest {
  /** 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过500字符） */
  SrcText: string;
  /** 目标句子（以句子数量为单位消耗资源包） */
  TargetText: string[];
}

declare interface TextSimilarityResponse {
  /** 每个目标句子与源句子的相似度分值，按照分值降序排列 */
  Similarity: Similarity[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateDictRequest {
  /** 自定义词库ID。 */
  DictId: string;
  /** 词库描述，不超过100字。 */
  Description?: string;
  /** 词库名称，不超过20字。 */
  Name?: string;
}

declare interface UpdateDictResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface WordEmbeddingRequest {
  /** 输入的词语（仅支持UTF-8格式，不超过20字） */
  Text: string;
}

declare interface WordEmbeddingResponse {
  /** 词向量数组 */
  Vector?: number[];
  /** 词向量的维度 */
  Dimension?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface WordSimilarityRequest {
  /** 计算相似度的源词（仅支持UTF-8格式，不超过20字） */
  SrcWord: string;
  /** 计算相似度的目标词（仅支持UTF-8格式，不超过20字） */
  TargetWord: string;
}

declare interface WordSimilarityResponse {
  /** 两个词语的相似度 */
  Similarity?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Nlp 自然语言处理} */
declare interface Nlp {
  (): Versions;
  /** {@link AutoSummarization 自动摘要}({@link AutoSummarizationRequest 请求参数}): {@link AutoSummarizationResponse 返回参数} */
  AutoSummarization(data: AutoSummarizationRequest, config?: AxiosRequestConfig): AxiosPromise<AutoSummarizationResponse>;
  /** {@link ChatBot 闲聊}({@link ChatBotRequest 请求参数}): {@link ChatBotResponse 返回参数} */
  ChatBot(data: ChatBotRequest, config?: AxiosRequestConfig): AxiosPromise<ChatBotResponse>;
  /** {@link CreateDict 创建自定义词库}({@link CreateDictRequest 请求参数}): {@link CreateDictResponse 返回参数} */
  CreateDict(data: CreateDictRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDictResponse>;
  /** {@link CreateWordItems 新增自定义词库词条}({@link CreateWordItemsRequest 请求参数}): {@link CreateWordItemsResponse 返回参数} */
  CreateWordItems(data: CreateWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWordItemsResponse>;
  /** {@link DeleteDict 删除自定义词库}({@link DeleteDictRequest 请求参数}): {@link DeleteDictResponse 返回参数} */
  DeleteDict(data: DeleteDictRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDictResponse>;
  /** {@link DeleteWordItems 删除词条}({@link DeleteWordItemsRequest 请求参数}): {@link DeleteWordItemsResponse 返回参数} */
  DeleteWordItems(data: DeleteWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWordItemsResponse>;
  /** {@link DependencyParsing 句法依存分析}({@link DependencyParsingRequest 请求参数}): {@link DependencyParsingResponse 返回参数} */
  DependencyParsing(data: DependencyParsingRequest, config?: AxiosRequestConfig): AxiosPromise<DependencyParsingResponse>;
  /** {@link DescribeDict 查询词库信息}({@link DescribeDictRequest 请求参数}): {@link DescribeDictResponse 返回参数} */
  DescribeDict(data?: DescribeDictRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDictResponse>;
  /** {@link DescribeDicts 查询词库列表}({@link DescribeDictsRequest 请求参数}): {@link DescribeDictsResponse 返回参数} */
  DescribeDicts(data?: DescribeDictsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDictsResponse>;
  /** {@link DescribeWordItems 查询指定词库的词条信息}({@link DescribeWordItemsRequest 请求参数}): {@link DescribeWordItemsResponse 返回参数} */
  DescribeWordItems(data: DescribeWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWordItemsResponse>;
  /** {@link GenerateCouplet 智能春联}({@link GenerateCoupletRequest 请求参数}): {@link GenerateCoupletResponse 返回参数} */
  GenerateCouplet(data: GenerateCoupletRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateCoupletResponse>;
  /** {@link GeneratePoetry 智能写诗}({@link GeneratePoetryRequest 请求参数}): {@link GeneratePoetryResponse 返回参数} */
  GeneratePoetry(data: GeneratePoetryRequest, config?: AxiosRequestConfig): AxiosPromise<GeneratePoetryResponse>;
  /** {@link KeywordsExtraction 关键词提取}({@link KeywordsExtractionRequest 请求参数}): {@link KeywordsExtractionResponse 返回参数} */
  KeywordsExtraction(data: KeywordsExtractionRequest, config?: AxiosRequestConfig): AxiosPromise<KeywordsExtractionResponse>;
  /** {@link LexicalAnalysis 词法分析}({@link LexicalAnalysisRequest 请求参数}): {@link LexicalAnalysisResponse 返回参数} */
  LexicalAnalysis(data: LexicalAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<LexicalAnalysisResponse>;
  /** {@link SearchWordItems 检索词条}({@link SearchWordItemsRequest 请求参数}): {@link SearchWordItemsResponse 返回参数} */
  SearchWordItems(data: SearchWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<SearchWordItemsResponse>;
  /** {@link SentenceEmbedding 句向量}({@link SentenceEmbeddingRequest 请求参数}): {@link SentenceEmbeddingResponse 返回参数} */
  SentenceEmbedding(data: SentenceEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<SentenceEmbeddingResponse>;
  /** {@link SentimentAnalysis 情感分析}({@link SentimentAnalysisRequest 请求参数}): {@link SentimentAnalysisResponse 返回参数} */
  SentimentAnalysis(data: SentimentAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<SentimentAnalysisResponse>;
  /** {@link SimilarWords 相似词}({@link SimilarWordsRequest 请求参数}): {@link SimilarWordsResponse 返回参数} */
  SimilarWords(data: SimilarWordsRequest, config?: AxiosRequestConfig): AxiosPromise<SimilarWordsResponse>;
  /** {@link TextClassification 文本分类}({@link TextClassificationRequest 请求参数}): {@link TextClassificationResponse 返回参数} */
  TextClassification(data: TextClassificationRequest, config?: AxiosRequestConfig): AxiosPromise<TextClassificationResponse>;
  /** {@link TextCorrection 文本纠错}({@link TextCorrectionRequest 请求参数}): {@link TextCorrectionResponse 返回参数} */
  TextCorrection(data: TextCorrectionRequest, config?: AxiosRequestConfig): AxiosPromise<TextCorrectionResponse>;
  /** {@link TextCorrectionPro 文本纠错高级版}({@link TextCorrectionProRequest 请求参数}): {@link TextCorrectionProResponse 返回参数} */
  TextCorrectionPro(data: TextCorrectionProRequest, config?: AxiosRequestConfig): AxiosPromise<TextCorrectionProResponse>;
  /** {@link TextSimilarity 句子相似度}({@link TextSimilarityRequest 请求参数}): {@link TextSimilarityResponse 返回参数} */
  TextSimilarity(data: TextSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<TextSimilarityResponse>;
  /** {@link TextSimilarityPro 句子相似度高级版}({@link TextSimilarityProRequest 请求参数}): {@link TextSimilarityProResponse 返回参数} */
  TextSimilarityPro(data: TextSimilarityProRequest, config?: AxiosRequestConfig): AxiosPromise<TextSimilarityProResponse>;
  /** {@link UpdateDict 修改自定义词库}({@link UpdateDictRequest 请求参数}): {@link UpdateDictResponse 返回参数} */
  UpdateDict(data: UpdateDictRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDictResponse>;
  /** {@link WordEmbedding 词向量}({@link WordEmbeddingRequest 请求参数}): {@link WordEmbeddingResponse 返回参数} */
  WordEmbedding(data: WordEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<WordEmbeddingResponse>;
  /** {@link WordSimilarity 词相似度}({@link WordSimilarityRequest 请求参数}): {@link WordSimilarityResponse 返回参数} */
  WordSimilarity(data: WordSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<WordSimilarityResponse>;
}

export declare type Versions = ["2019-04-08"];

export default Nlp;
