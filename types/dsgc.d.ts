/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 云上资源元数据 */
declare interface DspaCloudResourceMeta {
  /** 用户资源ID。 */
  ResourceId: string;
  /** 资源名称。 */
  ResourceName: string;
  /** 资源VIP。 */
  ResourceVip: string;
  /** 资源端口。 */
  ResourceVPort: number;
  /** 资源被创建时间。 */
  ResourceCreateTime: string;
  /** 用户资源VPC ID 字符串。 */
  ResourceUniqueVpcId: string;
  /** 用户资源Subnet ID 字符串。 */
  ResourceUniqueSubnetId: string;
}

declare interface CreateDSPADbMetaResourcesRequest {
  /** DSPA实例ID。 */
  DspaId: string;
  /** 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版） */
  MetaType: string;
  /** 资源所处地域。 */
  ResourceRegion: string;
  /** 用来标记本次更新是否已经是最后一次，可选值：continue（后续还需要更新）、finished（本次是最后一次更新）。 */
  UpdateStatus: string;
  /** 本次更新的ID号，用来标记一次完整的更新过程。 */
  UpdateId: string;
  /** 云上资源列表。 */
  Items: DspaCloudResourceMeta[];
}

declare interface CreateDSPADbMetaResourcesResponse {
  /** 本次更新的ID号，用来标记一次完整的更新过程。 */
  UpdateId?: string;
  /** 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版） */
  MetaType?: string;
  /** DSPA实例ID。 */
  DspaId?: string;
  /** 资源所处地域。 */
  ResourceRegion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dsgc 数据安全中心} */
declare interface Dsgc {
  (): Versions;
  /** 添加用户云上数据库资源 {@link CreateDSPADbMetaResourcesRequest} {@link CreateDSPADbMetaResourcesResponse} */
  CreateDSPADbMetaResources(data: CreateDSPADbMetaResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDSPADbMetaResourcesResponse>;
}

export declare type Versions = ["2019-07-23"];

export default Dsgc;
