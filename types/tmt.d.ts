/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 查询文件翻译任务 */
declare interface GetFileTranslateData {
  /** 任务ID */
  TaskId: string;
  /** 状态 */
  Status: string;
  /** 文件数据 */
  FileData: string | null;
  /** 错误提示 */
  Message: string | null;
  /** 翻译进度 */
  Progress: number | null;
}

/** 图片翻译结果 */
declare interface ImageRecord {
  /** 图片翻译结果 */
  Value: ItemValue[];
}

/** 翻译结果 */
declare interface ItemValue {
  /** 识别出的源文 */
  SourceText: string;
  /** 翻译后的译文 */
  TargetText: string;
  /** X坐标 */
  X: number;
  /** Y坐标 */
  Y: number;
  /** 宽度 */
  W: number;
  /** 高度 */
  H: number;
}

/** 文件翻译请求的返回数据 */
declare interface Task {
  /** 任务ID，可通过此ID在轮询接口获取识别状态与结果。注意：TaskId数据类型为字符串类型 */
  TaskId: string;
}

declare interface FileTranslateRequest {
  /** 源语言，支持zh:简体中文zh-HK：繁体中文zh-TW : 繁体中文zh-TR: 繁体中文en ：英语ar：阿拉伯语de：德语es：西班牙语fr：法语it：意大利语ja：日语pt：葡萄牙语ru：俄语ko：韩语km：高棉语lo：老挝语 */
  Source: string;
  /** 目标语言，各源语言的目标语言支持列表如下zh（简体中文）： en （英语）、 ar (阿拉伯语）、 de （德语）、 es（西班牙语） 、fr（法语）、 it（意大利语） 、 ja （日语）、 pt （葡萄牙语）、 ru（俄语）、 ko（韩语）、 km（高棉语）、 lo（老挝语）zh-HK（繁体中文） ：en （英语）、 ar (阿拉伯语）、 de （德语）、 es（西班牙语） 、fr（法语）、 it（意大利语） 、 ja （日语）、 pt （葡萄牙语）、 ru（俄语）、 ko（韩语）、 km（高棉语）、 lo（老挝语）zh-TW（繁体中文）：en （英语）、 ar (阿拉伯语）、 de （德语）、 es（西班牙语） 、fr（法语）、 it（意大利语） 、 ja （日语）、 pt （葡萄牙语）、 ru（俄语）、 ko（韩语）、 km（高棉语）、 lo（老挝语）zh-TR 繁体中文 : en （英语）、 ar (阿拉伯语）、 de （德语）、 es（西班牙语） 、fr（法语）、 it（意大利语） 、 ja （日语）、 pt （葡萄牙语）、 ru（俄语）、 ko（韩语）、 km（高棉语）、 lo（老挝语）en （英语） ：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、 zh-TR(繁体中文）、 ar (阿拉伯语）、 de （德语）、 es（西班牙语） 、fr（法语）、 it（意大利语） 、 ja （日语）、 pt （葡萄牙语）、 ru（俄语）、 ko（韩语）、 km（高棉语）、 lo（老挝语）ar（阿拉伯语） ：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）de（德语 ）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）es（西班牙语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）fr（法语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）it（意大利语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）ja（日语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）pt（葡萄牙语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）ru（俄语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）ko（韩语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）km（高棉语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文）lo（老挝语）：zh（简体中文）、zh-HK（繁体中文）、 zh-TW（繁体中文)、zh-TR(繁体中文） */
  Target: string;
  /** 文档类型：可支持以下几种(pdf,docx,pptx,xlsx,txt,xml,html,markdown,properties) */
  DocumentType: string;
  /** 数据来源，0：url，1：直接传文件编码后数据 */
  SourceType?: number;
  /** 需要翻译文件url，文件需小于100MB。 */
  Url?: string;
  /** 原始文档类型 */
  BasicDocumentType?: string;
  /** 回调url，文件大于10MB，建议采用回调方式；回调时，所有内容会放入 Body 中。 */
  CallbackUrl?: string;
  /** 文件数据，当SourceType 值为1时必须填写，为0可不写。要base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。数据要小于5MB。 */
  Data?: string;
}

declare interface FileTranslateResponse {
  /** 文件翻译的请求返回结果，包含结果查询需要的TaskId */
  Data?: Task;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFileTranslateRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface GetFileTranslateResponse {
  /** 任务id */
  Data?: GetFileTranslateData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageTranslateRequest {
  /** 唯一id，返回时原样返回 */
  SessionUuid: string;
  /** doc:文档扫描 */
  Scene: string;
  /** 图片数据的Base64字符串，图片大小上限为4M，建议对源图片进行一定程度压缩 */
  Data: string;
  /** 源语言，支持语言列表： auto：自动识别（识别为一种语言） zh：简体中文 zh-TW：繁体中文 en：英语 ja：日语 ko：韩语 ru：俄语 fr：法语 de：德语 it：意大利语 es：西班牙语 pt：葡萄牙语 ms：马来西亚语 th：泰语vi：越南语 */
  Source: string;
  /** 目标语言，各源语言的目标语言支持列表如下：zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）en（英语）：zh（中文）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）ja（日语）：zh（中文）、en（英语）、ko（韩语）ko（韩语）：zh（中文）、en（英语）、ja（日语）ru：俄语：zh（中文）、en（英语）fr：法语：zh（中文）、en（英语）de：德语：zh（中文）、en（英语）it：意大利语：zh（中文）、en（英语）es：西班牙语：zh（中文）、en（英语）pt：葡萄牙语：zh（中文）、en（英语）ms：马来西亚语：zh（中文）、en（英语）th：泰语：zh（中文）、en（英语）vi：越南语：zh（中文）、en（英语） */
  Target: string;
  /** 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0 */
  ProjectId: number;
}

declare interface ImageTranslateResponse {
  /** 请求的SessionUuid返回 */
  SessionUuid: string;
  /** 源语言 */
  Source: string;
  /** 目标语言 */
  Target: string;
  /** 图片翻译结果，翻译结果按识别的文本每一行独立翻译，后续会推出按段落划分并翻译的版本 */
  ImageRecord: ImageRecord;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LanguageDetectRequest {
  /** 待识别的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败。单次请求的文本长度需要低于2000。 */
  Text: string;
  /** 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0 */
  ProjectId: number;
}

declare interface LanguageDetectResponse {
  /** 识别出的语言种类，参考语言列表 zh : 中文 en : 英文 jp : 日语 kr : 韩语 de : 德语 fr : 法语 es : 西班牙文 it : 意大利文 tr : 土耳其文 ru : 俄文 pt : 葡萄牙文 vi : 越南文 id : 印度尼西亚文 ms : 马来西亚文 th : 泰文 */
  Lang?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SpeechTranslateRequest {
  /** 一段完整的语音对应一个SessionUuid */
  SessionUuid: string;
  /** 音频中的语言类型，支持语言列表 zh : 中文 en : 英文 */
  Source: string;
  /** 翻译目标语言类型，支持的语言列表 zh : 中文 en : 英文 */
  Target: string;
  /** pcm : 146 speex : 16779154 mp3 : 83886080 */
  AudioFormat: number;
  /** 语音分片的序号，从0开始 */
  Seq: number;
  /** 是否最后一片语音分片，0-否，1-是 */
  IsEnd: number;
  /** 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。 */
  Data: string;
  /** 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0 */
  ProjectId?: number;
  /** 识别模式，该参数已废弃 */
  Mode?: string;
  /** 该参数已废弃 */
  TransType?: number;
}

declare interface SpeechTranslateResponse {
  /** 请求的SessionUuid直接返回 */
  SessionUuid: string;
  /** 语音识别状态 1-进行中 0-完成 */
  RecognizeStatus: number;
  /** 识别出的原文 */
  SourceText: string;
  /** 翻译出的译文 */
  TargetText: string;
  /** 第几个语音分片 */
  Seq: number;
  /** 原语言 */
  Source: string;
  /** 目标语言 */
  Target: string;
  /** 当请求的Mode参数填写bvad是，启动VadSeq。此时Seq会被设置为后台vad（静音检测）后的新序号，而VadSeq代表客户端原始Seq值 */
  VadSeq: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextTranslateBatchRequest {
  /** 源语言，支持： auto：自动识别（识别为一种语言）zh：简体中文zh-TW：繁体中文en：英语ja：日语ko：韩语fr：法语es：西班牙语it：意大利语de：德语tr：土耳其语ru：俄语pt：葡萄牙语vi：越南语id：印尼语th：泰语ms：马来西亚语ar：阿拉伯语hi：印地语 */
  Source: string;
  /** 目标语言，各源语言的目标语言支持列表如下 zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）en（英语）：zh（中文）、zh-TW（繁体中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）ja（日语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ko（韩语）ko（韩语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ja（日语）fr（法语）：zh（中文）、zh-TW（繁体中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）es（西班牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）it（意大利语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）de（德语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）tr（土耳其语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）ru（俄语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）pt（葡萄牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）vi（越南语）：zh（中文）、zh-TW（繁体中文）、en（英语）id（印尼语）：zh（中文）、zh-TW（繁体中文）、en（英语）th（泰语）：zh（中文）、zh-TW（繁体中文）、en（英语）ms（马来语）：zh（中文）、zh-TW（繁体中文）、en（英语）ar（阿拉伯语）：en（英语）hi（印地语）：en（英语） */
  Target: string;
  /** 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0 */
  ProjectId: number;
  /** 待翻译的文本列表，批量接口可以以数组方式在一次请求中填写多个待翻译文本。文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度总和需要低于6000字符。 */
  SourceTextList: string[];
}

declare interface TextTranslateBatchResponse {
  /** 源语言，详见入参Source */
  Source?: string;
  /** 目标语言，详见入参Target */
  Target?: string;
  /** 翻译后的文本列表 */
  TargetTextList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextTranslateRequest {
  /** 待翻译的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度需要低于6000字符。 */
  SourceText: string;
  /** 源语言，支持：auto：自动识别（识别为一种语言）zh：简体中文zh-TW：繁体中文en：英语ja：日语ko：韩语fr：法语es：西班牙语it：意大利语de：德语tr：土耳其语ru：俄语pt：葡萄牙语vi：越南语id：印尼语th：泰语ms：马来西亚语ar：阿拉伯语hi：印地语 */
  Source: string;
  /** 目标语言，各源语言的目标语言支持列表如下 zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）en（英语）：zh（中文）、zh-TW（繁体中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）ja（日语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ko（韩语）ko（韩语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ja（日语）fr（法语）：zh（中文）、zh-TW（繁体中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）es（西班牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）it（意大利语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）de（德语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）tr（土耳其语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）ru（俄语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）pt（葡萄牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）vi（越南语）：zh（中文）、zh-TW（繁体中文）、en（英语）id（印尼语）：zh（中文）、zh-TW（繁体中文）、en（英语）th（泰语）：zh（中文）、zh-TW（繁体中文）、en（英语）ms（马来语）：zh（中文）、zh-TW（繁体中文）、en（英语）ar（阿拉伯语）：en（英语）hi（印地语）：en（英语） */
  Target: string;
  /** 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0 */
  ProjectId: number;
  /** 用来标记不希望被翻译的文本内容，如句子中的特殊符号、人名、地名等；每次请求只支持配置一个不被翻译的单词；仅支持配置人名、地名等名词，不要配置动词或短语，否则会影响翻译结果。 */
  UntranslatedText?: string;
}

declare interface TextTranslateResponse {
  /** 翻译后的文本 */
  TargetText?: string;
  /** 源语言，详见入参Source */
  Source?: string;
  /** 目标语言，详见入参Target */
  Target?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tmt 机器翻译} */
declare interface Tmt {
  (): Versions;
  /** 文件翻译请求 {@link FileTranslateRequest} {@link FileTranslateResponse} */
  FileTranslate(data: FileTranslateRequest, config?: AxiosRequestConfig): AxiosPromise<FileTranslateResponse>;
  /** 文件翻译结果查询 {@link GetFileTranslateRequest} {@link GetFileTranslateResponse} */
  GetFileTranslate(data: GetFileTranslateRequest, config?: AxiosRequestConfig): AxiosPromise<GetFileTranslateResponse>;
  /** 图片翻译 {@link ImageTranslateRequest} {@link ImageTranslateResponse} */
  ImageTranslate(data: ImageTranslateRequest, config?: AxiosRequestConfig): AxiosPromise<ImageTranslateResponse>;
  /** 语种识别 {@link LanguageDetectRequest} {@link LanguageDetectResponse} */
  LanguageDetect(data: LanguageDetectRequest, config?: AxiosRequestConfig): AxiosPromise<LanguageDetectResponse>;
  /** 语音翻译 {@link SpeechTranslateRequest} {@link SpeechTranslateResponse} */
  SpeechTranslate(data: SpeechTranslateRequest, config?: AxiosRequestConfig): AxiosPromise<SpeechTranslateResponse>;
  /** 文本翻译 {@link TextTranslateRequest} {@link TextTranslateResponse} */
  TextTranslate(data: TextTranslateRequest, config?: AxiosRequestConfig): AxiosPromise<TextTranslateResponse>;
  /** 批量文本翻译 {@link TextTranslateBatchRequest} {@link TextTranslateBatchResponse} */
  TextTranslateBatch(data: TextTranslateBatchRequest, config?: AxiosRequestConfig): AxiosPromise<TextTranslateBatchResponse>;
}

export declare type Versions = ["2018-03-21"];

export default Tmt;
