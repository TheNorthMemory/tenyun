/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 人员属性 */
declare interface UserAttribute {
  /** 属性键名 */
  Key: string;
  /** 属性值 */
  Value: number[];
}

declare interface CreateRoleUserRequest {
  /** 角色体系ID */
  RoleSystemId: number;
  /** 人员ID */
  UserId: string;
  /** 人员名称 */
  Username: string;
  /** 是否启用 */
  Enabled: number;
  /** 手机号 */
  Phone?: string;
  /** 属性列表 */
  Attributes?: UserAttribute[];
}

declare interface CreateRoleUserResponse {
  /** 人员ID */
  UserId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Evt 事件中心} */
declare interface Evt {
  (): Versions;
  /** 创建人员 {@link CreateRoleUserRequest} {@link CreateRoleUserResponse} */
  CreateRoleUser(data: CreateRoleUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleUserResponse>;
}

export declare type Versions = ["2025-02-17"];

export default Evt;
