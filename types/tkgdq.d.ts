/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 返回的实体关系查询结果详细内容 */
declare interface EntityRelationContent {
  /** 实体关系查询返回关系的object */
  Object?: EntityRelationObject[];
  /** 实体关系查询返回关系的subject */
  Subject?: EntityRelationSubject[];
  /** 实体关系查询返回的关系名称 */
  Relation?: string;
}

/** 实体关系查询返回的Object类型 */
declare interface EntityRelationObject {
  /** object对应id */
  Id?: string[];
  /** object对应name */
  Name?: string[];
  /** object对应popular值 */
  Popular?: number[];
}

/** 实体关系查询返回Subject */
declare interface EntityRelationSubject {
  /** Subject对应id */
  Id?: string[];
  /** Subject对应name */
  Name?: string[];
  /** Subject对应popular */
  Popular?: number[];
}

/** 三元组查询返回的元记录 */
declare interface TripleContent {
  /** 实体id */
  Id?: string;
  /** 实体名称 */
  Name?: string;
  /** 实体order */
  Order?: number;
  /** 实体流行度 */
  Popular?: number;
}

declare interface DescribeEntityRequest {
  /** 实体名称 */
  EntityName: string;
}

declare interface DescribeEntityResponse {
  /** 返回查询实体相关信息 */
  Content?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRelationRequest {
  /** 输入第一个实体 */
  LeftEntityName: string;
  /** 输入第二个实体 */
  RightEntityName: string;
}

declare interface DescribeRelationResponse {
  /** 返回查询实体间的关系 */
  Content?: EntityRelationContent[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTripleRequest {
  /** 三元组查询条件 */
  TripleCondition: string;
}

declare interface DescribeTripleResponse {
  /** 返回三元组信息 */
  Content?: TripleContent[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Tkgdq 腾讯知识图谱数据查询} */
declare interface Tkgdq {
  (): Versions;
  /** {@link DescribeEntity 实体信息查询}({@link DescribeEntityRequest 请求参数}): {@link DescribeEntityResponse 返回参数} */
  DescribeEntity(data: DescribeEntityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEntityResponse>;
  /** {@link DescribeRelation 实体关系查询}({@link DescribeRelationRequest 请求参数}): {@link DescribeRelationResponse 返回参数} */
  DescribeRelation(data: DescribeRelationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelationResponse>;
  /** {@link DescribeTriple 三元组查询}({@link DescribeTripleRequest 请求参数}): {@link DescribeTripleResponse 返回参数} */
  DescribeTriple(data: DescribeTripleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTripleResponse>;
}

export declare type Versions = ["2019-04-11"];

export default Tkgdq;
