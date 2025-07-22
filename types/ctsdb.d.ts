/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 实例相关信息 */
declare interface Cluster {
  /** 用户APPID */
  AppID?: number | null;
  /** 实例id */
  ClusterID?: string | null;
  /** 账号id */
  AccountID?: string | null;
  /** 自定义实例名 */
  Name?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 可用区 */
  Zones?: string | null;
  /** 网络信息 */
  Networks?: Network[] | null;
  /** 实例规格 */
  Spec?: Spec | null;
  /** 实例状态：0：运行中,1：创建中 ,16：变配中,17：隔离中,18：待销毁,19：恢复中,20：关机 , 21：销毁中 ,22：已销毁 */
  Status?: number | null;
  /** 实例有效期 */
  Period?: Period | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 最后修改时间 */
  UpdatedAt?: string | null;
  /** 产品内部特性 */
  Tenant?: Tenant | null;
  /** 标签 */
  Tags?: Tag[] | null;
  /** 安全组信息 */
  Security?: string[] | null;
}

/** 数据库相关信息 */
declare interface Database {
  /** 实例ID */
  ClusterID?: string | null;
  /** 数据库名 */
  Name?: string | null;
  /** 降冷时间（天） */
  CoolDownInDays?: number | null;
  /** 数据保留时间（天） */
  RetentionInDays?: number | null;
  /** 备注 */
  Remark?: string | null;
  /** 状态：0: 资源初始化中， 1: 资源创建中， 2: 正常状态， 3: 资源删除中， 4: 资源已删除， 5: 资源禁用中， 6: 资源已禁用， 7: 资源异常，需要人工操作 */
  Status?: number | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 最后修改时间 */
  UpdatedAt?: string | null;
}

/** 查询过滤器 */
declare interface Filter {
  /** 过滤参数 */
  Name?: string;
  /** 过滤表达式 */
  Op?: string;
  /** 参与过滤的值 */
  Values?: string[];
}

/** 实例网络信息(influxdb) */
declare interface Network {
  /** vpc id */
  VpcId: string | null;
  /** vpc subnet id */
  SubnetId: string | null;
  /** vpc ip地址 */
  VIP?: string | null;
  /** vpc port地址 */
  Port?: number | null;
}

/** 排序参数，用于排序查询结果 */
declare interface Order {
  /** 排序字段 */
  Name?: string;
  /** 排序方式 */
  Type?: string;
}

/** 有效期 */
declare interface Period {
  /** 开始时间 */
  StartTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
}

/** 实例规格信息(influxdb) */
declare interface Spec {
  /** 1：包年包月、2：按小时计费 */
  PayMode: number | null;
  /** 请求单元，为0则表示走资源配置 */
  RequestUnit?: number | null;
  /** CPU 核数最大限制 */
  CpuLimit?: number | null;
  /** 内存 最大限制(Gi) */
  MemoryLimit?: number | null;
  /** 磁盘 最大限制(Gi) */
  DiskLimit?: number | null;
  /** 业务分片数 */
  Shards?: number | null;
  /** 业务节点数 */
  Replicas?: number | null;
}

/** 标签 */
declare interface Tag {
  /** 键 */
  Key?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 产品内部特性 */
declare interface Tenant {
  /** 密码是否已加密 */
  IsPasswordEncrypted?: boolean;
}

declare interface DescribeClustersRequest {
  /** 当前页数 */
  PageNumber: number;
  /** 单页大小 */
  PageSize: number;
  /** 查询参数：支持通过实例ID（cluster_id）和实例名称（name）进行过滤查询 */
  Filters?: Filter[];
  /** 排序参数：支持通过创建时间字段（created_at）进行排序，Type可指定为DESC（降序）或ASC（升序） */
  Orders?: Order[];
}

declare interface DescribeClustersResponse {
  /** 当前条件下的总记录数 */
  TotalCount?: number | null;
  /** 符合条件的实例列表 */
  Clusters?: Cluster[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabasesRequest {
  /** 数据库参数 */
  Database: Database;
  /** 分页大小 */
  PageSize?: number;
  /** 分页页面 */
  PageNumber?: number;
}

declare interface DescribeDatabasesResponse {
  /** 数据库列表 */
  Databases?: Database[];
  /** 数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ctsdb 时序数据库 CTSDB} */
declare interface Ctsdb {
  (): Versions;
  /** 查询实例列表 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查看数据库列表 {@link DescribeDatabasesRequest} {@link DescribeDatabasesResponse} */
  DescribeDatabases(data: DescribeDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabasesResponse>;
}

export declare type Versions = ["2023-02-02"];

export default Ctsdb;
