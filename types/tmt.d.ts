/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 段落文本框位置：x，y代表左上顶点，width和height代表宽高 */
declare interface BoundingBox {
  /** 左上顶点x坐标 */
  X?: number;
  /** 左上顶点y坐标 */
  Y?: number;
  /** 宽单位：px */
  Width?: number;
  /** 高单位：px */
  Height?: number;
}

/** 坐标详细信息 */
declare interface Coord {
  /** X坐标 */
  X?: number;
  /** Y坐标 */
  Y?: number;
}

/** 段落文本旋转信息 */
declare interface RotateParagraphRect {
  /** 段落文本坐标 */
  Coord?: Coord[];
  /** 旋转角度 */
  TiltAngle?: number;
  /** 段落文本信息是否有效 */
  Valid?: boolean;
}

/** 大模型图片翻译详情信息 */
declare interface TransDetail {
  /** 当前行的原文本 */
  SourceLineText?: string;
  /** 当前行的译文 */
  TargetLineText?: string;
  /** 段落文本框位置 */
  BoundingBox?: BoundingBox;
  /** 行数 */
  LinesCount?: number;
  /** 行高单位：px */
  LineHeight?: number;
  /** 正常段落spam_code字段为0；如果存在spam_code字段且值大于0（1: 命中垃圾检查；2: 命中安全策略；3: 其他。），则命中安全检查被过滤。 */
  SpamCode?: number;
  /** 段落文本旋转信息，只在valid为true时表示坐标有效 */
  RotateParagraphRect?: RotateParagraphRect;
}

declare interface ImageTranslateLLMRequest {
  /** 图片数据的Base64字符串，经Base64编码后不超过 9M，分辨率建议600*800以上，支持PNG、JPG、JPEG格式。 */
  Data: string;
  /** 目标语言，支持语言列表：中文：zh繁体（中国台湾）：zh-TW繁体（中国香港）：zh-HK英文：en日语：ja韩语：ko泰语：th越南语：vi俄语：ru德语：de法语：fr阿拉伯语：ar西班牙语：es意大利语：it印度尼西亚语：id马来西亚语：ms葡萄牙语：pt土耳其语：tr- */
  Target: string;
  /** 输入图 Url。 使用Url的时候，Data参数需要传入&quot;&quot;。 图片限制：小于 10MB，分辨率建议600*800以上，格式支持 jpg、jpeg、png。 */
  Url?: string;
}

declare interface ImageTranslateLLMResponse {
  /** 图片数据的Base64字符串，输出格式为JPG。 */
  Data?: string;
  /** 原文本主要源语言。 */
  Source?: string;
  /** 目标翻译语言。 */
  Target?: string;
  /** 图片中的全部原文本。 */
  SourceText?: string;
  /** 图片中全部译文。 */
  TargetText?: string;
  /** 逆时针图片角度，取值范围为0-359 */
  Angle?: number;
  /** 翻译详情信息 */
  TransDetails?: TransDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextTranslateRequest {
  /** 待翻译的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度需要低于6000字符。 */
  SourceText: string;
  /** 源语言，支持：zh：简体中文zh-TW：繁体中文en：英语ja：日语ko：韩语fr：法语es：西班牙语it：意大利语de：德语tr：土耳其语ru：俄语pt：葡萄牙语vi：越南语id：印尼语th：泰语ms：马来西亚语ar：阿拉伯语hi：印地语 */
  Source: string;
  /** 目标语言，各源语言的目标语言支持列表如下 zh（简体中文）：zh-TW（繁体中文）、en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）zh-TW（繁体中文）：zh（简体中文）、en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）en（英语）：zh（中文）、zh-TW（繁体中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）ja（日语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ko（韩语）ko（韩语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ja（日语）fr（法语）：zh（中文）、zh-TW（繁体中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）es（西班牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）it（意大利语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）de（德语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）tr（土耳其语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）ru（俄语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）pt（葡萄牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）vi（越南语）：zh（中文）、zh-TW（繁体中文）、en（英语）id（印尼语）：zh（中文）、zh-TW（繁体中文）、en（英语）th（泰语）：zh（中文）、zh-TW（繁体中文）、en（英语）ms（马来语）：zh（中文）、zh-TW（繁体中文）、en（英语）ar（阿拉伯语）：zh（中文）、zh-TW（繁体中文）、en（英语）hi（印地语）：en（英语） */
  Target: string;
  /** 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0 */
  ProjectId: number;
  /** 用来标记不希望被翻译的文本内容，如句子中的特殊符号、人名、地名等；每次请求只支持配置一个不被翻译的单词；仅支持配置人名、地名等名词，不要配置动词或短语，否则会影响翻译结果。 */
  UntranslatedText?: string;
  /** 需要使用的术语库列表，通过 术语库操作指南 自行创建术语库获取。 */
  TermRepoIDList?: string[];
  /** 需要使用的例句库列表，通过 例句库操作指南 自行创建例句库获取。 */
  SentRepoIDList?: string[];
}

declare interface TextTranslateResponse {
  /** 翻译后的文本 */
  TargetText?: string;
  /** 源语言，详见入参Source */
  Source?: string;
  /** 目标语言，详见入参Target */
  Target?: string;
  /** 本次翻译消耗的字符数 */
  UsedAmount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tmt 机器翻译} */
declare interface Tmt {
  (): Versions;
  /** 端到端图片翻译 {@link ImageTranslateLLMRequest} {@link ImageTranslateLLMResponse} */
  ImageTranslateLLM(data: ImageTranslateLLMRequest, config?: AxiosRequestConfig): AxiosPromise<ImageTranslateLLMResponse>;
  /** 文本翻译 {@link TextTranslateRequest} {@link TextTranslateResponse} */
  TextTranslate(data: TextTranslateRequest, config?: AxiosRequestConfig): AxiosPromise<TextTranslateResponse>;
}

export declare type Versions = ["2018-03-21"];

export default Tmt;
