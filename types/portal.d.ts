/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 搜索文档结果 */
declare interface SearchDocumentItem {
  /** 文档URL */
  Url?: string;
  /** 文档标题 */
  Title?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 文档片段 */
  Snippet?: string;
}

declare interface SearchDocumentsRequest {
  /** 搜索关键词 */
  Query: string;
  /** 页码取值范围：[1, 99] */
  Page: number;
  /** 每页条数取值范围：[1, 20] */
  PageSize: number;
  /** 产品名称 */
  ProductName?: string;
}

declare interface SearchDocumentsResponse {
  /** 总数 */
  Total?: number;
  /** 文档列表 */
  Documents?: SearchDocumentItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Portal 官网门户服务} */
declare interface Portal {
  (): Versions;
  /** 搜索文档 {@link SearchDocumentsRequest} {@link SearchDocumentsResponse} */
  SearchDocuments(data: SearchDocumentsRequest, config?: AxiosRequestConfig): AxiosPromise<SearchDocumentsResponse>;
}

export declare type Versions = ["2023-04-13"];

export default Portal;
