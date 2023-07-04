/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 基础粒度分词和词性标注的结果 */
declare interface BasicParticiple {
  /** 基础词。 */
  Word?: string;
  /** 基础词在NormalText中的起始位置。 */
  BeginOffset?: number;
  /** 基础词的长度。 */
  Length?: number;
  /** 词性。 */
  Pos?: string;
}

/** 文本纠错结果 */
declare interface CCIToken {
  /** 错别字内容 */
  Word?: string;
  /** 错别字的起始位置，从0开始 */
  BeginOffset?: number;
  /** 错别字纠错结果 */
  CorrectWord?: string;
}

/** 分类详细信息 */
declare interface Category {
  /** 分类id。 */
  Id?: number | null;
  /** 分类英文名。 */
  Label?: string | null;
  /** 分类中文名。 */
  Name?: string | null;
  /** 分类置信度。 */
  Score?: number | null;
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

/** 复合粒度分词和词性标注的结果。 */
declare interface CompoundParticiple {
  /** 基础词。 */
  Word?: string;
  /** 基础词在NormalText中的起始位置。 */
  BeginOffset?: number;
  /** 基础词的长度。 */
  Length?: number;
  /** 词性。 */
  Pos?: string;
}

/** 纠错结果列表 */
declare interface CorrectionItem {
  /** 纠错句子的序号。 */
  Order?: number;
  /** 错误的起始位置，从0开始。 */
  BeginOffset?: number;
  /** 错误内容长度。 */
  Len?: number;
  /** 错误内容。 */
  Word?: string;
  /** 纠错结果，当为删除类错误时，结果为null。 */
  CorrectWord?: string[] | null;
  /** 纠错类型。0：替换；1：插入；2：删除。 */
  CorrectionType?: number;
  /** 纠错信息置信度。0：error；1：warning；error的置信度更高。（仅供参考） */
  Confidence?: number;
  /** 纠错信息中文描述。 */
  DescriptionZh?: string | null;
  /** 纠错信息英文描述。 */
  DescriptionEn?: string | null;
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

/** 文本润色结果 */
declare interface Embellish {
  /** 润色后的文本。 */
  Text?: string | null;
  /** 润色类型。类型如下：expansion：扩写rewriting：改写translation_m2a：从现代文改写为古文translation_a2m：从古文改写为现代文 */
  EmbellishType?: string | null;
}

/** 实体识别结果。 */
declare interface Entity {
  /** 基础词。 */
  Word?: string;
  /** 基础词在NormalText中的起始位置。 */
  BeginOffset?: number;
  /** 基础词的长度。 */
  Length?: number;
  /** 实体类型的标准名字。 */
  Type?: string;
  /** 类型名字的自然语言表达。（中文或英文） */
  Name?: string;
}

/** 关键词提取结果 */
declare interface Keyword {
  /** 权重 */
  Score?: number;
  /** 关键词 */
  Word?: string;
}

/** 通过关键词生成的句子信息 */
declare interface KeywordSentence {
  /** 通过关键词生成的句子。 */
  TargetText?: string;
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

/** 待分析的句子对 */
declare interface SentencePair {
  /** 需要与目标句子计算相似度的源句子。（仅支持UTF-8格式，不超过500字符） */
  SourceText: string | null;
  /** 目标句子。（仅支持UTF-8格式，不超过500字符） */
  TargetText: string | null;
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

/** 文本续写结果 */
declare interface Writing {
  /** 续写的文本。 */
  TargetText?: string;
  /** 续写的前缀。 */
  PrefixText?: string;
}

declare interface AnalyzeSentimentRequest {
  /** 待分析的文本（仅支持UTF-8格式，不超过200字）。 */
  Text: string;
}

declare interface AnalyzeSentimentResponse {
  /** 正面情感概率。 */
  Positive?: number;
  /** 中性情感概率。 */
  Neutral?: number;
  /** 负面情感概率。 */
  Negative?: number;
  /** 情感分类结果：positive：正面情感negative：负面情感neutral：中性、无情感 */
  Sentiment?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClassifyContentRequest {
  /** 待分类的文章的标题（仅支持UTF-8格式，不超过100字符）。 */
  Title: string;
  /** 待分类文章的内容, 每个元素对应一个段落。（仅支持UTF-8格式，文章内容长度总和不超过2000字符） */
  Content: string[];
}

declare interface ClassifyContentResponse {
  /** 一级分类。分类详情见附录-三级分类体系表。 */
  FirstClassification?: Category;
  /** 二级分类。分类详情见附录-三级分类体系表。 */
  SecondClassification?: Category;
  /** 三级分类。分类详情见附录-三级分类体系表。 */
  ThirdClassification?: Category | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ComposeCoupletRequest {
  /** 生成对联的关键词。长度需>=2，当长度>2时，自动截取前两个字作为关键字。内容需为常用汉字（不含有数字、英文、韩语、日语、符号等等其他）。 */
  Text: string;
  /** 返回的文本结果为繁体还是简体。0：简体；1：繁体。默认为0。 */
  TargetType?: number;
}

declare interface ComposeCoupletResponse {
  /** 横批。 */
  TopScroll?: string;
  /** 上联与下联。 */
  Content?: string[];
  /** 当对联随机生成时，展示随机生成原因。 */
  RandomCause?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ComposePoetryRequest {
  /** 生成诗词的关键词。 */
  Text: string;
  /** 生成诗词的类型。0：藏头或藏身；1：藏头；2：藏身。默认为0。 */
  PoetryType?: number;
  /** 诗的体裁。0：五言律诗或七言律诗；5：五言律诗；7：七言律诗。默认为0。 */
  Genre?: number;
}

declare interface ComposePoetryResponse {
  /** 诗题，即输入的生成诗词的关键词。 */
  Title?: string;
  /** 诗的内容。 */
  Content?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWordItemsRequest {
  /** 自定义词库ID。 */
  DictId: string;
  /** 待添加的词条集合。 */
  WordItems: WordItem[];
}

declare interface CreateWordItemsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDictRequest {
  /** 要删除的自定义词库ID。 */
  DictId: string;
}

declare interface DeleteDictResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWordItemsRequest {
  /** 自定义词库ID。 */
  DictId: string;
  /** 待删除的词条集合。 */
  WordItems: WordItem[];
}

declare interface DeleteWordItemsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DependencyParsingRequest {
  /** 待分析的文本（仅支持UTF-8格式，不超过200字） */
  Text: string;
}

declare interface DependencyParsingResponse {
  /** 句法依存分析结果，其中句法依存关系的类型包括：主谓关系，eg: 我送她一束花 (我 <-- 送)动宾关系，eg: 我送她一束花 (送 --> 花)间宾关系，eg: 我送她一束花 (送 --> 她)前置宾语，eg: 他什么书都读 (书 <-- 读)兼语，eg: 他请我吃饭 (请 --> 我)定中关系，eg: 红苹果 (红 <-- 苹果)状中结构，eg: 非常美丽 (非常 <-- 美丽)动补结构，eg: 做完了作业 (做 --> 完)并列关系，eg: 大山和大海 (大山 --> 大海)介宾关系，eg: 在贸易区内 (在 --> 内)左附加关系，eg: 大山和大海 (和 <-- 大海)右附加关系，eg: 孩子们 (孩子 --> 们)独立结构，eg: 两个单句在结构上彼此独立标点符号，eg: 。核心关系，eg: 整个句子的核心 */
  DpTokens?: DpToken[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EvaluateSentenceSimilarityRequest {
  /** 待分析的句子对数组。句子对应不超过1对，仅支持中文文本，原句子与目标句子均应不超过64字符。 */
  SentencePairList: SentencePair[];
}

declare interface EvaluateSentenceSimilarityResponse {
  /** 每个句子对的相似度分值。 */
  ScoreList?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EvaluateWordSimilarityRequest {
  /** 计算相似度的源词。（仅支持UTF-8格式，不超过10字符） */
  SourceWord: string;
  /** 计算相似度的目标词。（仅支持UTF-8格式，不超过10字符） */
  TargetWord: string;
}

declare interface EvaluateWordSimilarityResponse {
  /** 词相似度分值。 */
  Similarity?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateKeywordSentenceRequest {
  /** 生成句子的关键词，关键词个数需不超过4个，中文关键词长度应不超过10字符，英文关键词长度不超过3个单词。关键词中不可包含标点符号。 */
  WordList: string[];
  /** 返回生成句子的个数。数量需>=1且<=5。（注意实际结果可能小于指定个数） */
  Number: number;
  /** 指定生成句子的领域，支持领域如下：general：通用领域，支持中英文academic：学术领域，仅支持英文默认为general（通用领域）。 */
  Domain?: string;
}

declare interface GenerateKeywordSentenceResponse {
  /** 生成的句子列表。 */
  KeywordSentenceList?: KeywordSentence[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ParseWordsRequest {
  /** 待分析的文本（支持中英文文本，不超过500字符） */
  Text: string;
}

declare interface ParseWordsResponse {
  /** 输入文本正则化的结果。（包括对英文文本中的开头和实体进行大写等） */
  NormalText?: string;
  /** 基础粒度分词和词性标注的结果。（词性表请参见附录） */
  BasicParticiples?: BasicParticiple[];
  /** 复合粒度分词和词性标注的结果。（词性表请参见附录） */
  CompoundParticiples?: CompoundParticiple[];
  /** 实体识别结果。（实体类型数据请参见附录） */
  Entities?: Entity[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetrieveSimilarWordsRequest {
  /** 输入的词语。（仅支持UTF-8格式，不超过10字符） */
  Text: string;
  /** 召回的相似词个数，取值范围为1-20。 */
  Number: number;
}

declare interface RetrieveSimilarWordsResponse {
  /** 召回的相似词数组。 */
  WordList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SentenceCorrectionRequest {
  /** 待纠错的句子列表。可以以数组方式在一次请求中填写多个待纠错的句子。文本统一使用utf-8格式编码，每个中文句子的长度不超过150字符，每个英文句子的长度不超过100个单词，且数组长度需小于150，即句子总数需少于150句。 */
  TextList: string[];
}

declare interface SentenceCorrectionResponse {
  /** 纠错结果列表。（注意仅展示错误句子的纠错结果，若句子无错则不展示，若全部待纠错句子都被认为无错，则可能返回数组为空） */
  CorrectionList?: CorrectionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextEmbellishRequest {
  /** 待润色的文本。中文文本长度需<=50字符；英文文本长度需<=30个单词。 */
  Text: string;
  /** 待润色文本的语言类型，支持语言如下：zh：中文en：英文 */
  SourceLang: string;
  /** 返回润色结果的个数。数量需>=1且<=5。（注意实际结果可能小于指定个数） */
  Number: number;
  /** 控制润色类型，类型如下：both：同时返回改写和扩写expansion：扩写rewriting：改写m2a：从现代文改写为古文a2m：从古文改写为现代文默认为both。 */
  Style?: string;
}

declare interface TextEmbellishResponse {
  /** 润色结果列表。 */
  EmbellishList?: Embellish[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextWritingRequest {
  /** 待续写的句子，文本统一使用utf-8格式编码，长度不超过200字符。 */
  Text: string;
  /** 待续写文本的语言类型，支持语言如下：zh：中文en：英文 */
  SourceLang: string;
  /** 返回续写结果的个数。数量需>=1且<=5。（注意实际结果可能小于指定个数） */
  Number: number;
  /** 指定续写领域，支持领域如下：general：通用领域，支持中英文补全academic：学术领域，仅支持英文补全默认为general（通用领域）。 */
  Domain?: string;
  /** 指定续写风格，支持风格如下：science_fiction：科幻military_history：军事xuanhuan_wuxia：武侠urban_officialdom：职场默认为xuanhuan_wuxia（武侠）。 */
  Style?: string;
}

declare interface TextWritingResponse {
  /** 续写结果列表。 */
  WritingList?: Writing[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface WordEmbeddingRequest {
  /** 输入的词语（仅支持UTF-8格式，不超过20字） */
  Text: string;
}

declare interface WordEmbeddingResponse {
  /** 词向量数组 */
  Vector: number[];
  /** 词向量的维度 */
  Dimension: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Nlp NLP 服务} */
declare interface Nlp {
  (): Versions;
  /** 情感分析V2 {@link AnalyzeSentimentRequest} {@link AnalyzeSentimentResponse} */
  AnalyzeSentiment(data: AnalyzeSentimentRequest, config?: AxiosRequestConfig): AxiosPromise<AnalyzeSentimentResponse>;
  /** @deprecated 自动摘要 {@link AutoSummarizationRequest} {@link AutoSummarizationResponse} */
  AutoSummarization(data: AutoSummarizationRequest, config?: AxiosRequestConfig): AxiosPromise<AutoSummarizationResponse>;
  /** @deprecated 闲聊 {@link ChatBotRequest} {@link ChatBotResponse} */
  ChatBot(data: ChatBotRequest, config?: AxiosRequestConfig): AxiosPromise<ChatBotResponse>;
  /** 文本分类V2 {@link ClassifyContentRequest} {@link ClassifyContentResponse} */
  ClassifyContent(data: ClassifyContentRequest, config?: AxiosRequestConfig): AxiosPromise<ClassifyContentResponse>;
  /** 对联生成 {@link ComposeCoupletRequest} {@link ComposeCoupletResponse} */
  ComposeCouplet(data: ComposeCoupletRequest, config?: AxiosRequestConfig): AxiosPromise<ComposeCoupletResponse>;
  /** 诗词生成 {@link ComposePoetryRequest} {@link ComposePoetryResponse} */
  ComposePoetry(data: ComposePoetryRequest, config?: AxiosRequestConfig): AxiosPromise<ComposePoetryResponse>;
  /** @deprecated 创建自定义词库 {@link CreateDictRequest} {@link CreateDictResponse} */
  CreateDict(data: CreateDictRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDictResponse>;
  /** @deprecated 新增自定义词库词条 {@link CreateWordItemsRequest} {@link CreateWordItemsResponse} */
  CreateWordItems(data: CreateWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWordItemsResponse>;
  /** @deprecated 删除自定义词库 {@link DeleteDictRequest} {@link DeleteDictResponse} */
  DeleteDict(data: DeleteDictRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDictResponse>;
  /** @deprecated 删除词条 {@link DeleteWordItemsRequest} {@link DeleteWordItemsResponse} */
  DeleteWordItems(data: DeleteWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWordItemsResponse>;
  /** @deprecated 句法依存分析 {@link DependencyParsingRequest} {@link DependencyParsingResponse} */
  DependencyParsing(data: DependencyParsingRequest, config?: AxiosRequestConfig): AxiosPromise<DependencyParsingResponse>;
  /** @deprecated 查询词库信息 {@link DescribeDictRequest} {@link DescribeDictResponse} */
  DescribeDict(data?: DescribeDictRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDictResponse>;
  /** @deprecated 查询词库列表 {@link DescribeDictsRequest} {@link DescribeDictsResponse} */
  DescribeDicts(data?: DescribeDictsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDictsResponse>;
  /** @deprecated 查询指定词库的词条信息 {@link DescribeWordItemsRequest} {@link DescribeWordItemsResponse} */
  DescribeWordItems(data: DescribeWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWordItemsResponse>;
  /** 句子相似度V2 {@link EvaluateSentenceSimilarityRequest} {@link EvaluateSentenceSimilarityResponse} */
  EvaluateSentenceSimilarity(data: EvaluateSentenceSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<EvaluateSentenceSimilarityResponse>;
  /** 词相似度V2 {@link EvaluateWordSimilarityRequest} {@link EvaluateWordSimilarityResponse} */
  EvaluateWordSimilarity(data: EvaluateWordSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<EvaluateWordSimilarityResponse>;
  /** @deprecated 智能春联 {@link GenerateCoupletRequest} {@link GenerateCoupletResponse} */
  GenerateCouplet(data: GenerateCoupletRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateCoupletResponse>;
  /** 句子生成 {@link GenerateKeywordSentenceRequest} {@link GenerateKeywordSentenceResponse} */
  GenerateKeywordSentence(data: GenerateKeywordSentenceRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateKeywordSentenceResponse>;
  /** @deprecated 智能写诗 {@link GeneratePoetryRequest} {@link GeneratePoetryResponse} */
  GeneratePoetry(data: GeneratePoetryRequest, config?: AxiosRequestConfig): AxiosPromise<GeneratePoetryResponse>;
  /** @deprecated 关键词提取 {@link KeywordsExtractionRequest} {@link KeywordsExtractionResponse} */
  KeywordsExtraction(data: KeywordsExtractionRequest, config?: AxiosRequestConfig): AxiosPromise<KeywordsExtractionResponse>;
  /** @deprecated 词法分析 {@link LexicalAnalysisRequest} {@link LexicalAnalysisResponse} */
  LexicalAnalysis(data: LexicalAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<LexicalAnalysisResponse>;
  /** 词法分析V2 {@link ParseWordsRequest} {@link ParseWordsResponse} */
  ParseWords(data: ParseWordsRequest, config?: AxiosRequestConfig): AxiosPromise<ParseWordsResponse>;
  /** 相似词召回 {@link RetrieveSimilarWordsRequest} {@link RetrieveSimilarWordsResponse} */
  RetrieveSimilarWords(data: RetrieveSimilarWordsRequest, config?: AxiosRequestConfig): AxiosPromise<RetrieveSimilarWordsResponse>;
  /** @deprecated 检索词条 {@link SearchWordItemsRequest} {@link SearchWordItemsResponse} */
  SearchWordItems(data: SearchWordItemsRequest, config?: AxiosRequestConfig): AxiosPromise<SearchWordItemsResponse>;
  /** 句子纠错 {@link SentenceCorrectionRequest} {@link SentenceCorrectionResponse} */
  SentenceCorrection(data: SentenceCorrectionRequest, config?: AxiosRequestConfig): AxiosPromise<SentenceCorrectionResponse>;
  /** @deprecated 句向量 {@link SentenceEmbeddingRequest} {@link SentenceEmbeddingResponse} */
  SentenceEmbedding(data: SentenceEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<SentenceEmbeddingResponse>;
  /** @deprecated 情感分析 {@link SentimentAnalysisRequest} {@link SentimentAnalysisResponse} */
  SentimentAnalysis(data: SentimentAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<SentimentAnalysisResponse>;
  /** @deprecated 相似词 {@link SimilarWordsRequest} {@link SimilarWordsResponse} */
  SimilarWords(data: SimilarWordsRequest, config?: AxiosRequestConfig): AxiosPromise<SimilarWordsResponse>;
  /** @deprecated 文本分类 {@link TextClassificationRequest} {@link TextClassificationResponse} */
  TextClassification(data: TextClassificationRequest, config?: AxiosRequestConfig): AxiosPromise<TextClassificationResponse>;
  /** @deprecated 文本纠错 {@link TextCorrectionRequest} {@link TextCorrectionResponse} */
  TextCorrection(data: TextCorrectionRequest, config?: AxiosRequestConfig): AxiosPromise<TextCorrectionResponse>;
  /** @deprecated 文本纠错高级版 {@link TextCorrectionProRequest} {@link TextCorrectionProResponse} */
  TextCorrectionPro(data: TextCorrectionProRequest, config?: AxiosRequestConfig): AxiosPromise<TextCorrectionProResponse>;
  /** 文本润色 {@link TextEmbellishRequest} {@link TextEmbellishResponse} */
  TextEmbellish(data: TextEmbellishRequest, config?: AxiosRequestConfig): AxiosPromise<TextEmbellishResponse>;
  /** @deprecated 句子相似度 {@link TextSimilarityRequest} {@link TextSimilarityResponse} */
  TextSimilarity(data: TextSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<TextSimilarityResponse>;
  /** @deprecated 句子相似度高级版 {@link TextSimilarityProRequest} {@link TextSimilarityProResponse} */
  TextSimilarityPro(data: TextSimilarityProRequest, config?: AxiosRequestConfig): AxiosPromise<TextSimilarityProResponse>;
  /** 文本补全 {@link TextWritingRequest} {@link TextWritingResponse} */
  TextWriting(data: TextWritingRequest, config?: AxiosRequestConfig): AxiosPromise<TextWritingResponse>;
  /** @deprecated 修改自定义词库 {@link UpdateDictRequest} {@link UpdateDictResponse} */
  UpdateDict(data: UpdateDictRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDictResponse>;
  /** @deprecated 词向量 {@link WordEmbeddingRequest} {@link WordEmbeddingResponse} */
  WordEmbedding(data: WordEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<WordEmbeddingResponse>;
  /** @deprecated 词相似度 {@link WordSimilarityRequest} {@link WordSimilarityResponse} */
  WordSimilarity(data: WordSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<WordSimilarityResponse>;
}

export declare type Versions = ["2019-04-08"];

export default Nlp;
