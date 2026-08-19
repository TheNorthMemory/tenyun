/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface SearchProRequest {
  /** 搜索词 */
  Query: string;
  /** 返回结果类型，不传默认为0。（仅标准版、尊享版支持该参数）枚举值：0： 公开网页信源结果（自然结果）1： 优质权威垂直信源结果（VR 卡）2： 混合结果（自然结果+VR卡） */
  Mode?: number;
  /** 指定网址搜索/过滤。（仅标准版、尊享版、旗舰版支持该参数）指定网址搜索：需要查询某个特定网址的内容时，传入"Site=qq.com"，实现只搜索qq.com的结果；每次搜索仅支持指定一个域名。指定网址过滤：需要排除某个特定网址的内容时，传入"Site=exclude:qq.com|sohu.com"，实现过滤qq.com和sohu.com的结果；每次搜索最多支持过滤五个域名。注意： 该参数与mode参数共同使用时，仅对公开网页信源结果（自然结果）生效，对优质权威垂直信源结果（VR卡）不生效。 */
  Site?: string;
  /** 控制返回结果条数，可取值：cnt=10/20/30/40/50。（仅尊享版、旗舰版支持该参数）枚举值：10： 返回10条结果20： 返回20条结果30： 返回30条结果40： 返回40条结果50： 返回50条结果 */
  Cnt?: number;
  /** 垂直领域搜索。（仅尊享版、旗舰版支持该参数）枚举值：gov： 政府news： 新闻acad： 学术finance： 财经 */
  Industry?: string;
  /** 搜索时效范围（仅标准版、尊享版、旗舰版支持该参数）d[N]：最近N天，N取值1-30整数。m[N]：最近N月，N取值1-12整数。y[N]：最近N年，N取值1-5整数。示例说明：d1/m1/y1：当天/当月/当年。例如，2026.6.15分别传参d1/m1/y1进行搜索，则搜索结果的时间范围分别为“2026.6.15”/“2026.6”/“2026”，以此类推。d/m/y：N值为空时，默认N=1，即等效入参d1/m1/y1。未传参时，默认不生效。d、m、y不支持组合使用。枚举值：d7： 最近七天m3： 最近三月y2： 最近两年d： 当天m： 当月y： 当年 */
  Freshness?: string;
  /** 返回附件子链信息（仅旗舰版支持该参数）附件子链信息包括"子链标题"和"子链URL"，单个doc最多返回10条子链信息。true：返回false：不返回未传参时默认不返回 */
  Deeplinks?: boolean;
}

declare interface SearchProResponse {
  /** 原始查询语 */
  Query?: string;
  /** 搜索结果页面详情，格式为json字符串。title：结果标题date：内容发布时间url：内容发布源urlpassage：标准摘要content：动态摘要（仅尊享版、旗舰版返回该字段）site：网站名称，部分不知名站点结果可能为空score：相关性得分，取值0～1，越靠近1表示越相关authority_level：权威度得分，取值0～5，数值越大表示越权威（仅旗舰版返回该字段）pics：图片列表，单个doc返回0～10条（仅标准版、尊享版、旗舰版返回该字段）caption：图片描述origin_url：源图url地favicon：网站图标链接，部分不知名站点结果可能为空deeplinks：附件子链信息，单个doc最多返回10条子链信息。（仅旗舰版返回该字段，通过Deeplinks入参控制）title：子链标题url：子链地址 */
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
