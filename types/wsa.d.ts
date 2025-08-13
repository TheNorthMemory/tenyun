/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface SearchProRequest {
  /** 搜索词 */
  Query: string;
  /** 返回结果类型，0-自然检索结果(默认)，1-多模态VR结果，2-混合结果（多模态VR结果+自然检索结果） */
  Mode?: number;
  /** 指定域名站内搜索（用于过滤自然检索结果）注意： mode=1模式下，参数无效；mode=0模式下，对所有结果生效；mode=2模式下，对输出的自然结果生效 */
  Site?: string;
  /** 起始时间（用于过滤自然检索结果），精确到秒时间戳格式注意： mode=1模式下，参数无效；mode=0模式下，对所有结果生效；mode=2模式下，对输出的自然结果生效 */
  FromTime?: number;
  /** 结束时间（用于过滤自然检索结果），精确到秒时间戳格式注意：mode=1模式下，参数无效；mode=0模式下，对所有结果生效；mode=2模式下，对输出的自然结果生效 */
  ToTime?: number;
  /** cnt=10/20/30/40/50，最多可支持返回50条搜索结果，**仅限尊享版使用** */
  Cnt?: number;
  /** Industry=gov/news/acad，对应党政机关、新闻、学术，**仅限尊享版使用** */
  Industry?: string;
}

declare interface SearchProResponse {
  /** 原始查询语 */
  Query?: string;
  /** 搜索结果页面详情，格式为json字符串。title：结果标题date：内容发布时间url：内容发布源urlpassage：标准摘要content：动态摘要 （尊享版字段）site：网站名称，部分不知名站点结果可能为空score：相关性得分，取值0～1，越靠近1表示越相关images：图片列表favicon：网站图标链接，部分不知名站点结果可能为空 */
  Pages?: string[];
  /** 提示信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Wsa 联网搜索API} */
declare interface Wsa {
  (): Versions;
  /** 联网搜索API {@link SearchProRequest} {@link SearchProResponse} */
  SearchPro(data: SearchProRequest, config?: AxiosRequestConfig): AxiosPromise<SearchProResponse>;
}

export declare type Versions = ["2025-05-08"];

export default Wsa;
