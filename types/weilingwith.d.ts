/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 部门用户 */
declare interface SsoTeamUser {
  /** 用户ID */
  UserId?: string | null;
  /** 用户名称 */
  RealName?: string | null;
  /** 用户类型 */
  UserType?: string | null;
  /** 所属租户ID */
  TenantId?: string | null;
  /** 邮箱 */
  Email?: string | null;
  /** 电话 */
  Phone?: string | null;
  /** 用户状态 */
  Status?: number | null;
  /** 创建时间 */
  CreateAt?: number | null;
  /** 部门ID */
  DepartmentId?: string | null;
  /** 部门名称 */
  DepartmentName?: string | null;
  /** 是否关联权限 */
  LinkFilter?: number | null;
}

/** 空间用户结果 */
declare interface SsoTeamUserResult {
  /** 总数 */
  Total?: number | null;
  /** 部门用户列表 */
  Users?: SsoTeamUser[] | null;
}

declare interface DescribeApplicationListRequest {
}

declare interface DescribeApplicationListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeApplicationTokenRequest {
}

declare interface DescribeEdgeApplicationTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInterfaceListRequest {
}

declare interface DescribeInterfaceListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceListRequest {
}

declare interface DescribeWorkspaceListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceUserListRequest {
  /** 翻页页码 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** 工作空间ID */
  WorkspaceId: string;
  /** token */
  ApplicationToken: string;
  /** 租户ID */
  TenantId?: string;
  /** 更新时间戳，单位秒 */
  UpdateAt?: number;
}

declare interface DescribeWorkspaceUserListResponse {
  /** 返回数据 */
  Result?: SsoTeamUserResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Weilingwith 微瓴同业开放平台} */
declare interface Weilingwith {
  (): Versions;
  /** 查询应用列表 {@link DescribeApplicationListRequest} {@link DescribeApplicationListResponse} */
  DescribeApplicationList(data?: DescribeApplicationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationListResponse>;
  /** 查询边缘应用凭证 {@link DescribeEdgeApplicationTokenRequest} {@link DescribeEdgeApplicationTokenResponse} */
  DescribeEdgeApplicationToken(data?: DescribeEdgeApplicationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeApplicationTokenResponse>;
  /** 查询接口列表 {@link DescribeInterfaceListRequest} {@link DescribeInterfaceListResponse} */
  DescribeInterfaceList(data?: DescribeInterfaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInterfaceListResponse>;
  /** 获取租户下的空间列表 {@link DescribeWorkspaceListRequest} {@link DescribeWorkspaceListResponse} */
  DescribeWorkspaceList(data?: DescribeWorkspaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceListResponse>;
  /** 查询项目空间人员列表 {@link DescribeWorkspaceUserListRequest} {@link DescribeWorkspaceUserListResponse} */
  DescribeWorkspaceUserList(data: DescribeWorkspaceUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceUserListResponse>;
}

export declare type Versions = ["2023-04-27"];

export default Weilingwith;
