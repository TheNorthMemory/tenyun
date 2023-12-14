/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** - [ ] 过滤条件Name - String - 是否必填：否 - 操作符: ilike - 排序支持：否- 根据分组名称进行查询。分页参数PageNum 从1开始，小于等于0时使用默认参数。PageSize 最大值5000，最好不超过100。 */
declare interface Condition {
  /** Filters 条件过滤 */
  Filters?: Filter[] | null;
  /** FilterGroups 条件过滤组 */
  FilterGroups?: FilterGroup[] | null;
  /** Sort 排序字段 */
  Sort?: Sort | null;
  /** PageSize 每页获取数(只支持32位) */
  PageSize?: number | null;
  /** PageNum 获取第几页(只支持32位) */
  PageNum?: number | null;
}

/** 分页的data数据 */
declare interface DescribeDevicesPageRsp {
  /** 数据分页信息 */
  Paging?: Paging | null;
}

/** Filters 条件过滤 */
declare interface Filter {
  /** 过滤字段 */
  Field?: string | null;
  /** 过滤方式 eq:等于,net:不等于,like,nlike,gt:大于,lt:小于,egt:大于等于,elt:小于等于 */
  Operator?: string | null;
  /** 过滤条件 */
  Values?: string[] | null;
}

/** FilterGroups 条件过滤组 */
declare interface FilterGroup {
  /** Filters 条件过滤 */
  Filters?: Filter[] | null;
}

/** 数据分页信息 */
declare interface Paging {
  /** 每页条数(只支持32位) */
  PageSize?: number | null;
  /** 页码(只支持32位) */
  PageNum?: number | null;
  /** 总页数(只支持32位) */
  PageCount?: number | null;
  /** 记录总数 */
  Total?: number | null;
}

/** Sort 排序字段 */
declare interface Sort {
  /** 排序字段 */
  Field?: string | null;
  /** 排序方式 */
  Order?: string | null;
}

declare interface DescribeDevicesRequest {
  /** 过滤条件Ip - String - 是否必填：否 - 操作符: eq - 排序支持：否- 按照Ip进行过滤。MacAddr - String - 是否必填：否 - 操作符: eq - 排序支持：否- 按照mac地址进行过滤。IoaUserName - String - 是否必填：否 - 操作符: eq - 排序支持：否- 按照ioa用户名进行过滤。分页参数PageNum 从1开始，小于等于0时使用默认参数。PageSize 最大值5000，最好不超过100。 */
  Condition?: Condition;
  /** 私有化默认分组id-名称-操作系统1	全网终端	Win2	未分组终端	Win30000000	服务器	Win40000101	全网终端	Linux40000102	未分组终端	Linux40000103	服务器	Linux40000201	全网终端	macOS40000202	未分组终端	macOS40000203	服务器	macOS40000401	全网终端	Android40000402	未分组终端	Android40000501	全网终端	iOS40000502	未分组终端	iOS */
  GroupId?: number;
  /** 系统类型（0: win，1：linux，2: mac，3: win_srv，4：android，5：ios 默认值0） */
  OsType?: number;
  /** 在线状态 2 在线 0，1 离线 */
  OnlineStatus?: number;
  /** 过滤条件--兼容旧接口,参数同Condition */
  Filters?: Filter[];
  /** 排序字段--兼容旧接口,参数同Condition */
  Sort?: Sort;
  /** 获取第几页--兼容旧接口,参数同Condition(只支持32位) */
  PageNum?: number;
  /** 每页获取数--兼容旧接口,参数同Condition(只支持32位) */
  PageSize?: number;
  /** 授权状态 4未授权 5已授权 */
  Status?: number;
}

declare interface DescribeDevicesResponse {
  /** 分页的data数据 */
  Data?: DescribeDevicesPageRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ioa iOA 零信任安全管理系统} */
declare interface Ioa {
  (): Versions;
  /** 查询设备列表详情 {@link DescribeDevicesRequest} {@link DescribeDevicesResponse} */
  DescribeDevices(data?: DescribeDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicesResponse>;
}

export declare type Versions = ["2022-06-01"];

export default Ioa;
