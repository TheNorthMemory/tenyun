/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateBlockNodeRecordsRequest {
  /** 盘查组id，可在“盘查组概览”功能中获取。 */
  GroupId: string;
  /** 节点id，可在“数据接入管理”中获取。 */
  NodeId: string;
  /** 节点数据json，具体demo请参考输入示例，其中key为数据接入管理中节点内创建的属性变量名，value为期望的推送值。 */
  Records: string;
}

declare interface CreateBlockNodeRecordsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Tan 碳引擎} */
declare interface Tan {
  (): Versions;
  /** {@link CreateBlockNodeRecords 推送节点数据}({@link CreateBlockNodeRecordsRequest 请求参数}): {@link CreateBlockNodeRecordsResponse 返回参数} */
  CreateBlockNodeRecords(data: CreateBlockNodeRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBlockNodeRecordsResponse>;
}

export declare type Versions = ["2022-04-20"];

export default Tan;
