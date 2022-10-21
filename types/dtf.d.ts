/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 分页主事务 */
declare interface PagedTransaction {
  /** 总条数，特定在该接口中总是会返回null */
  TotalCount: number | null;
  /** 主事务分组列表 */
  Content: Transaction[];
}

/** 主事务 */
declare interface Transaction {
  /** 主事务ID */
  TransactionId?: number | null;
  /** 主事务开始时间戳，UTC，精确到毫秒 */
  TransactionBegin?: number | null;
  /** 主事务结束时间戳，UTC，精确到毫秒 */
  TransactionEnd?: number | null;
  /** 主事务提交时间戳，UTC，精确到毫秒 */
  TransactionCommit?: number | null;
  /** 主事务回滚时间戳，UTC，精确到毫秒 */
  TransactionRollback?: number | null;
  /** 主事务异常停止时间戳，UTC，精确到毫秒 */
  TransactionError?: number | null;
  /** 主事务超时时长，单位毫秒 */
  Timeout?: number | null;
  /** 主事务状态：0:Trying, 1:Confirming, 2: Confirmed, 3:Canceling, 4: Canceled */
  Status?: number | null;
  /** 主事务结束标识：0:运行中, 1: 已结束 */
  EndFlag?: number | null;
  /** 主事务超时标识：0:运行中, 1: 已超时 */
  TimeoutFlag?: number | null;
  /** 异常信息 */
  Comment?: string | null;
  /** 事务分组ID */
  GroupId?: string | null;
  /** 主事务来源服务标识 */
  Server?: string | null;
  /** 分支事务数量 */
  BranchQuantity?: number | null;
  /** 重试标识：true：可以重试；false：不可重试 */
  RetryFlag?: boolean | null;
}

declare interface DescribeTransactionsRequest {
  /** 事务分组ID */
  GroupId: string;
  /** 事务开始时间查询起始时间戳，UTC，精确到毫秒 */
  TransactionBeginFrom?: number;
  /** 事务开始时间查询截止时间戳，UTC，精确到毫秒 */
  TransactionBeginTo?: number;
  /** 仅查询异常状态的事务，true：仅查询异常，false或不传入：查询所有 */
  SearchError?: boolean;
  /** 主事务ID，不传入时查询全量，高优先级 */
  TransactionId?: number;
  /** 主事务ID列表，不传入时查询全量，低优先级 */
  TransactionIdList?: number[];
  /** 每页数量 */
  Limit?: number;
  /** 起始偏移量 */
  Offset?: number;
}

declare interface DescribeTransactionsResponse {
  /** 主事务分页列表 */
  Result: PagedTransaction;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [分布式事务](https://cloud.tencent.com/document/product/1224) */
declare interface Dtf {
  (): Versions;
  /** 查询主事务列表 */
  DescribeTransactions(data: DescribeTransactionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTransactionsResponse>;
}

export declare type Versions = ["2020-05-06"];

export default Dtf;
