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
  /** 输入图 Url。 使用Url的时候，Data参数需要传入""。 图片限制：小于 10MB，分辨率建议600*800以上，格式支持 jpg、jpeg、png。 */
  Url?: string;
  /** 调用模式。枚举值：0： 端到端图片翻译大模型pro版1： 端到端图片翻译大模型lite版默认值：0 */
  Mode?: number;
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

/** {@link Tmt 机器翻译} */
declare interface Tmt {
  (): Versions;
  /** 端到端图片翻译 {@link ImageTranslateLLMRequest} {@link ImageTranslateLLMResponse} */
  ImageTranslateLLM(data: ImageTranslateLLMRequest, config?: AxiosRequestConfig): AxiosPromise<ImageTranslateLLMResponse>;
}

export declare type Versions = ["2018-03-21"];

export default Tmt;
