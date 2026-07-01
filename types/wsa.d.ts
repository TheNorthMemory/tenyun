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
  /** cnt=10/20/30/40/50，最多可支持返回50条搜索结果，仅限尊享版使用 */
  Cnt?: number;
  /** Industry=gov/news/acad/finance，对应党政机关、权威媒体、学术（英文）、金融，仅限尊享版使用 */
  Industry?: string;
  /** 搜索实效范围（仅旗舰版参数）d[N]：最近N天，N取值1-30整数。m[N]：最近N月，N取值1-12整数。y[N]：最近N年，N取值1-5整数。示例说明：d1/m1/y1：当天/当月/当年。例如，2026.6.15分别传参d1/m1/y1进行搜索，则搜索结果的时间范围分别为“2026.6.15”/“2026.6”/“2026”，以此类推。d/m/y：N值为空时，默认N=1，即等效入参d1/m1/y1。未传参时，默认不生效。枚举值：d7： 最近七天m3： 最近三月y2： 最近两年d： 当天m： 当月y： 当年 */
  Freshness?: string;
  /** 返回子链信息（仅旗舰版参数）子链信息包括&quot;子链标题&quot;和&quot;子链URL&quot;，单个doc最多返回10条子链信息。true：返回false：不返回未传参时默认不返回 */
  Deeplinks?: boolean;
}

declare interface SearchProResponse {
  /** 原始查询语 */
  Query?: string;
  /** 搜索结果页面详情，格式为json字符串。title：结果标题date：内容发布时间url：内容发布源urlpassage：标准摘要content：动态摘要（仅尊享版、旗舰版返回该字段）site：网站名称，部分不知名站点结果可能为空score：相关性得分，取值0～1，越靠近1表示越相关images：图片列表（旗舰版无该出参）pics：图片列表，单个doc返回0～10条（仅旗舰版参数）caption：图片描述origin_url：源图url地favicon：网站图标链接，部分不知名站点结果可能为空deeplinks：子链信息，单个doc最多返回10条子链信息。（仅旗舰版参数，通过Deeplinks入参控制）title：子链标题url：子链地址 */
  Pages?: string[];
  /** 用户版本：standard/premium/lite/flagship（标准/尊享/轻量/旗舰） */
  Version?: string;
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
