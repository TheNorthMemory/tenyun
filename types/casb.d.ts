/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 策略迁移表信息筛选 */
declare interface CryptoCopyColumnPolicyTableFilter {
  /** 数据库名称 */
  DatabaseName: string;
  /** 表名称 */
  TableNameSet?: string[];
}

declare interface CopyCryptoColumnPolicyRequest {
  /** 实例Id */
  CasbId: string;
  /** 元数据id */
  MetaDataId: string;
  /** 目标实例Id 如果和实例Id相同则为同CasbId下的策略复制 */
  DstCasbId: string;
  /** 目标实例Id 如果和[元数据id]相同则为同元数据下的策略复制 */
  DstMetaDataId: string;
  /** 筛选来源数据库的表 */
  SrcTableFilter?: CryptoCopyColumnPolicyTableFilter[];
  /** 复制同元数据下的策略，需要填写目标数据库名 */
  DstDatabaseName?: string;
}

declare interface CopyCryptoColumnPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Casb 云访问安全代理} */
declare interface Casb {
  (): Versions;
  /** 复制字段策略 {@link CopyCryptoColumnPolicyRequest} {@link CopyCryptoColumnPolicyResponse} */
  CopyCryptoColumnPolicy(data: CopyCryptoColumnPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CopyCryptoColumnPolicyResponse>;
}

export declare type Versions = ["2020-05-07"];

export default Casb;
