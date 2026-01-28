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
  /** 词法分析V2 {@link ParseWordsRequest} {@link ParseWordsResponse} */
  ParseWords(data: ParseWordsRequest, config?: AxiosRequestConfig): AxiosPromise<ParseWordsResponse>;
  /** 句子纠错 {@link SentenceCorrectionRequest} {@link SentenceCorrectionResponse} */
  SentenceCorrection(data: SentenceCorrectionRequest, config?: AxiosRequestConfig): AxiosPromise<SentenceCorrectionResponse>;
}

export declare type Versions = ["2019-04-08"];

export default Nlp;
