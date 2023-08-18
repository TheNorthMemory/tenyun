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

/** 通过关键词生成的句子信息 */
declare interface KeywordSentence {
  /** 通过关键词生成的句子。 */
  TargetText?: string;
}

/** 待分析的句子对 */
declare interface SentencePair {
  /** 需要与目标句子计算相似度的源句子。（仅支持UTF-8格式，不超过500字符） */
  SourceText: string | null;
  /** 目标句子。（仅支持UTF-8格式，不超过500字符） */
  TargetText: string | null;
}

/** TextGenerationChoices */
declare interface TextGenerationChoices {
  /** 内容 */
  Message?: TextGenerationMessage | null;
}

/** TextGenerationMessage */
declare interface TextGenerationMessage {
  /** 角色支持 system, user, assistant。默认为user。 */
  Role?: string | null;
  /** 消息的内容。 */
  Content?: string | null;
}

/** TextGenerationUsage */
declare interface TextGenerationUsage {
  /** 输入tokens数量 */
  PromptTokens?: number;
  /** 输出tokens数量 */
  CompletionTokens?: number;
  /** 总token数量 */
  TotalTokens?: number;
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

declare interface ClassifyContentRequest {
  /** 待分类的文章的标题（仅支持UTF-8格式，不超过100字符）。 */
  Title: string;
  /** 待分类文章的内容, 每个元素对应一个段落。（仅支持UTF-8格式，文章内容长度总和不超过2000字符） */
  Content: string[];
}

declare interface ClassifyContentResponse {
  /** 一级分类。（请参见附录[三级分类体系表](https://cloud.tencent.com/document/product/271/94286)） */
  FirstClassification?: Category;
  /** 二级分类。（请参见附录[三级分类体系表](https://cloud.tencent.com/document/product/271/94286)） */
  SecondClassification?: Category;
  /** 三级分类。（请参见附录[三级分类体系表](https://cloud.tencent.com/document/product/271/94286)） */
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

declare interface EvaluateSentenceSimilarityRequest {
  /** 待分析的句子对数组。句子对应不超过1对，仅支持中文文本，原句子与目标句子均应不超过500字符。 */
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

declare interface ParseWordsRequest {
  /** 待分析的文本（支持中英文文本，不超过500字符） */
  Text: string;
}

declare interface ParseWordsResponse {
  /** 输入文本正则化的结果。（包括对英文文本中的开头和实体进行大写等） */
  NormalText?: string;
  /** 基础粒度分词和词性标注的结果。（请参见附录[词性表](https://cloud.tencent.com/document/product/271/36460)） */
  BasicParticiples?: BasicParticiple[];
  /** 复合粒度分词和词性标注的结果。（请参见附录[词性表](https://cloud.tencent.com/document/product/271/36460)） */
  CompoundParticiples?: CompoundParticiple[];
  /** 实体识别结果。（请参见附录[实体类型数据](https://cloud.tencent.com/document/product/271/90592)） */
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

declare interface SentenceCorrectionRequest {
  /** 待纠错的句子列表。可以以数组方式在一次请求中填写多个待纠错的句子。文本统一使用utf-8格式编码，每个中文句子的长度不超过150字符，每个英文句子的长度不超过100个单词，且数组长度需小于30，即句子总数需少于30句。 */
  TextList: string[];
}

declare interface SentenceCorrectionResponse {
  /** 纠错结果列表。（注意仅展示错误句子的纠错结果，若句子无错则不展示，若全部待纠错句子都被认为无错，则可能返回数组为空） */
  CorrectionList?: CorrectionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TestingTextGenerationRequest {
  /** 会话内容,按对话时间从旧到新在数组中排列。 */
  Messages: TextGenerationMessage[];
  /** 模型名称，当前固定为TestingModel */
  Model?: string;
  /** 会话id。 */
  QueryId?: string;
  /** 超参数temperature, 该参数用于控制生成文本中重复内容。取值区间为[0.0, 2.0], 非必要不建议使用, 不合理的取值会影响效果。默认为1.0。 */
  Temperature?: number;
  /** 超参数top_p, 该参数用于控制生成文本的多样性。较小的"top_p"值会限制模型的选择范围，使生成的文本更加一致和确定性。较大的"top_p"值会扩大选择范围，使生成的文本更加多样化和随机。取值区间为[0.0, 1.0], 非必要不建议使用, 不合理的取值会影响效果。默认值为1.0。 */
  TopP?: number;
  /** 超参数top_k,该参数用于控制生成文本的多样性和可控性，较小的"top_k"值会限制模型的选择范围，使生成的文本更加一致和确定性。较大的"top_k"值会扩大选择范围，使生成的文本更加多样化和随机。取值区间为[1, 100]，默认值 40。 */
  TopK?: number;
  /** 重复惩罚项,该参数用于用于控制生成文本中重复内容。建议范围[1.0, 1.05]非必要不建议使用, 不合理的取值会影响效果。默认为1。 */
  RepetitionPenalty?: number;
  /** 输出结果最大tokens数量。取值区间为(0, 1024]。默认值为768。 */
  OutputSeqLen?: number;
  /** 输入文本的最大 tokens 数量。取值区间为(0, 1024]。默认值为256。 */
  MaxInputSeqLen?: number;
}

declare interface TestingTextGenerationResponse {
  /** 结果 */
  Choices?: TextGenerationChoices[];
  /** unix时间戳的字符串 */
  Created?: number;
  /** 会话id */
  Id?: string;
  /** 模型名 */
  Model?: string;
  /** token数量 */
  Usage?: TextGenerationUsage;
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

/** {@link Nlp NLP 服务} */
declare interface Nlp {
  (): Versions;
  /** 情感分析V2 {@link AnalyzeSentimentRequest} {@link AnalyzeSentimentResponse} */
  AnalyzeSentiment(data: AnalyzeSentimentRequest, config?: AxiosRequestConfig): AxiosPromise<AnalyzeSentimentResponse>;
  /** 文本分类V2 {@link ClassifyContentRequest} {@link ClassifyContentResponse} */
  ClassifyContent(data: ClassifyContentRequest, config?: AxiosRequestConfig): AxiosPromise<ClassifyContentResponse>;
  /** 对联生成 {@link ComposeCoupletRequest} {@link ComposeCoupletResponse} */
  ComposeCouplet(data: ComposeCoupletRequest, config?: AxiosRequestConfig): AxiosPromise<ComposeCoupletResponse>;
  /** 诗词生成 {@link ComposePoetryRequest} {@link ComposePoetryResponse} */
  ComposePoetry(data: ComposePoetryRequest, config?: AxiosRequestConfig): AxiosPromise<ComposePoetryResponse>;
  /** 句子相似度V2 {@link EvaluateSentenceSimilarityRequest} {@link EvaluateSentenceSimilarityResponse} */
  EvaluateSentenceSimilarity(data: EvaluateSentenceSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<EvaluateSentenceSimilarityResponse>;
  /** 词相似度V2 {@link EvaluateWordSimilarityRequest} {@link EvaluateWordSimilarityResponse} */
  EvaluateWordSimilarity(data: EvaluateWordSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<EvaluateWordSimilarityResponse>;
  /** 句子生成 {@link GenerateKeywordSentenceRequest} {@link GenerateKeywordSentenceResponse} */
  GenerateKeywordSentence(data: GenerateKeywordSentenceRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateKeywordSentenceResponse>;
  /** 词法分析V2 {@link ParseWordsRequest} {@link ParseWordsResponse} */
  ParseWords(data: ParseWordsRequest, config?: AxiosRequestConfig): AxiosPromise<ParseWordsResponse>;
  /** 相似词召回 {@link RetrieveSimilarWordsRequest} {@link RetrieveSimilarWordsResponse} */
  RetrieveSimilarWords(data: RetrieveSimilarWordsRequest, config?: AxiosRequestConfig): AxiosPromise<RetrieveSimilarWordsResponse>;
  /** 句子纠错 {@link SentenceCorrectionRequest} {@link SentenceCorrectionResponse} */
  SentenceCorrection(data: SentenceCorrectionRequest, config?: AxiosRequestConfig): AxiosPromise<SentenceCorrectionResponse>;
  /** 文案创作（内测版） {@link TestingTextGenerationRequest} {@link TestingTextGenerationResponse} */
  TestingTextGeneration(data: TestingTextGenerationRequest, config?: AxiosRequestConfig): AxiosPromise<TestingTextGenerationResponse>;
  /** 文本润色 {@link TextEmbellishRequest} {@link TextEmbellishResponse} */
  TextEmbellish(data: TextEmbellishRequest, config?: AxiosRequestConfig): AxiosPromise<TextEmbellishResponse>;
  /** 文本补全 {@link TextWritingRequest} {@link TextWritingResponse} */
  TextWriting(data: TextWritingRequest, config?: AxiosRequestConfig): AxiosPromise<TextWritingResponse>;
}

export declare type Versions = ["2019-04-08"];

export default Nlp;
