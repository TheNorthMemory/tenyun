/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 人员属性 */
declare interface UserAttribute {
  /** 自定义角色体系中用户属性的ID属性键名 */
  Key: string;
  /** 自定义角色体系中的用户属性值，只支持传入对应用户属性支持的角色ID属性值 */
  Value: number[];
}

declare interface CompleteApprovalRequest {
  /** 审批单号 */
  ApprovalId: string;
  /** 审批节点 */
  NodeId: string;
  /** 审批结果，1通过2拒绝 */
  Result: number;
  /** 审批意见 */
  Opinion?: string;
  /** 审批人的身份认证Token，通过自定义角色体系回调接口分发token信息 */
  UserToken?: string;
}

declare interface CompleteApprovalResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoleUserRequest {
  /** 自定义角色体系的ID角色体系ID */
  RoleSystemId: number;
  /** 要添加的自定义用户ID，建议与腾讯云-子用户的用户名称保持一致人员ID */
  UserId: string;
  /** 自定义用户的名称人员名称 */
  Username: string;
  /** 是否启用当前用户枚举值： 1： 启用 2： 禁用是否启用 */
  Enabled: number;
  /** 自定义用户的手机号手机号 */
  Phone?: string;
  /** 自定义用户的身份属性列表属性列表 */
  Attributes?: UserAttribute[];
  /** 自定义用户与腾讯云-子用户关联，如果不传默认按照子用户名称进行匹配 */
  TencentUin?: number;
}

declare interface CreateRoleUserResponse {
  /** 人员ID */
  UserId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRoleUserRequest {
  /** 自定义角色体系的ID */
  RoleSystemId?: number;
  /** 需要删除的自定义用户ID */
  UserId?: string;
}

declare interface DeleteRoleUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Evt 事件中心} */
declare interface Evt {
  (): Versions;
  /** 执行审批 {@link CompleteApprovalRequest} {@link CompleteApprovalResponse} */
  CompleteApproval(data: CompleteApprovalRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteApprovalResponse>;
  /** 创建人员 {@link CreateRoleUserRequest} {@link CreateRoleUserResponse} */
  CreateRoleUser(data: CreateRoleUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleUserResponse>;
  /** 删除自定义角色的用户 {@link DeleteRoleUserRequest} {@link DeleteRoleUserResponse} */
  DeleteRoleUser(data?: DeleteRoleUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoleUserResponse>;
}

export declare type Versions = ["2025-02-17"];

export default Evt;
