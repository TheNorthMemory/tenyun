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

/** 待分析的句子对 */
declare interface SentencePair {
  /** 需要与目标句子计算相似度的源句子。（仅支持UTF-8格式，不超过500字符） */
  SourceText: string | null;
  /** 目标句子。（仅支持UTF-8格式，不超过500字符） */
  TargetText: string | null;
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

/** {@link Nlp NLP 技术} */
declare interface Nlp {
  (): Versions;
  /** 情感分析V2 {@link AnalyzeSentimentRequest} {@link AnalyzeSentimentResponse} */
  AnalyzeSentiment(data: AnalyzeSentimentRequest, config?: AxiosRequestConfig): AxiosPromise<AnalyzeSentimentResponse>;
  /** 文本分类V2 {@link ClassifyContentRequest} {@link ClassifyContentResponse} */
  ClassifyContent(data: ClassifyContentRequest, config?: AxiosRequestConfig): AxiosPromise<ClassifyContentResponse>;
  /** 对联生成 {@link ComposeCoupletRequest} {@link ComposeCoupletResponse} */
  ComposeCouplet(data: ComposeCoupletRequest, config?: AxiosRequestConfig): AxiosPromise<ComposeCoupletResponse>;
  /** 句子相似度V2 {@link EvaluateSentenceSimilarityRequest} {@link EvaluateSentenceSimilarityResponse} */
  EvaluateSentenceSimilarity(data: EvaluateSentenceSimilarityRequest, config?: AxiosRequestConfig): AxiosPromise<EvaluateSentenceSimilarityResponse>;
  /** 词法分析V2 {@link ParseWordsRequest} {@link ParseWordsResponse} */
  ParseWords(data: ParseWordsRequest, config?: AxiosRequestConfig): AxiosPromise<ParseWordsResponse>;
  /** 句子纠错 {@link SentenceCorrectionRequest} {@link SentenceCorrectionResponse} */
  SentenceCorrection(data: SentenceCorrectionRequest, config?: AxiosRequestConfig): AxiosPromise<SentenceCorrectionResponse>;
}

export declare type Versions = ["2019-04-08"];

export default Nlp;
