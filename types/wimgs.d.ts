/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface SearchByTextRequest {
  /** 查询词 */
  Query: string;
}

declare interface SearchByTextResponse {
  /** 原始查询词 */
  Query?: string;
  /** 搜索结果图片列表，格式为json字符串。- thumbnailUrl：缩略图地址。- thumbnailWidth：缩略图宽度。- thumbnailHeight：缩略图高度。- origPicUrl：原图地址。- origPicWidth：原图宽度。- siteUrl：站点地址，原图来源网页URL。- siteName：站点名称。- title：标题，原图标题或原图来源网页标题。- date：内容发布时间。 */
  Images?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Wimgs 联网图像搜索} */
declare interface Wimgs {
  (): Versions;
  /** 文搜图 {@link SearchByTextRequest} {@link SearchByTextResponse} */
  SearchByText(data: SearchByTextRequest, config?: AxiosRequestConfig): AxiosPromise<SearchByTextResponse>;
}

export declare type Versions = ["2025-11-06"];

export default Wimgs;
