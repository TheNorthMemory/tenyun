/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 成员管理身份 */
declare interface MemberIdentity {
  /** 身份ID。 */
  IdentityId: number | null;
  /** 身份名称。 */
  IdentityAliasName: string | null;
}

/** 企业组织成员 */
declare interface OrgMember {
  /** 成员Uin */
  MemberUin: number | null;
  /** 成员名 */
  Name: string | null;
  /** 成员类型，邀请：Invite， 创建：Create */
  MemberType: string | null;
  /** 关系策略类型 */
  OrgPolicyType: string | null;
  /** 关系策略名 */
  OrgPolicyName: string | null;
  /** 关系策略权限 */
  OrgPermission: OrgPermission[] | null;
  /** 所属节点ID */
  NodeId: number | null;
  /** 所属节点名 */
  NodeName: string | null;
  /** 备注 */
  Remark: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 是否允许成员退出。允许：Allow，不允许：Denied。 */
  IsAllowQuit: string | null;
  /** 代付者Uin */
  PayUin: string | null;
  /** 代付者名称 */
  PayName: string | null;
  /** 管理身份 */
  OrgIdentity: MemberIdentity[] | null;
  /** 安全信息绑定状态 未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed */
  BindStatus: string | null;
  /** 成员权限状态 已确认：Confirmed ，待确认：UnConfirmed */
  PermissionStatus: string | null;
}

/** 关系策略权限 */
declare interface OrgPermission {
  /** 权限Id */
  Id: number;
  /** 权限名 */
  Name: string;
}

declare interface BindOrganizationMemberAuthAccountRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略ID。 */
  PolicyId: number;
  /** 组织子账号Uin。 */
  OrgSubAccountUins: number[];
}

declare interface BindOrganizationMemberAuthAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOrganizationMemberPolicyRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略名。 */
  PolicyName: string;
  /** 身份ID。 */
  IdentityId: number;
  /** 描述。 */
  Description?: string;
}

declare interface CreateOrganizationMemberPolicyResponse {
  /** 策略ID。 */
  PolicyId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOrganizationMemberRequest {
  /** 名称 */
  Name: string;
  /** 关系策略 取值：Financial */
  PolicyType: string;
  /** 关系权限 取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票 ，1、2 默认必须 */
  PermissionIds: number[];
  /** 成员所属部门的节点ID */
  NodeId: number;
  /** 账号名 */
  AccountName: string;
  /** 备注 */
  Remark?: string;
  /** 重试创建传记录ID */
  RecordId?: number;
  /** 代付者Uin */
  PayUin?: string;
  /** 管理身份 */
  IdentityRoleID?: number[];
}

declare interface CreateOrganizationMemberResponse {
  /** 成员Uin */
  Uin: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMembersRequest {
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
  /** 国际站：en，国内站：zh */
  Lang?: string;
  /** 成员名或者成员ID搜索 */
  SearchKey?: string;
  /** 主体名称 */
  AuthName?: string;
  /** 集团服务（服务管理员查询时，必须指定） */
  Product?: string;
}

declare interface DescribeOrganizationMembersResponse {
  /** 成员列表 */
  Items: OrgMember[];
  /** 总数目 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationRequest {
  /** 国际站：en，国内站：zh */
  Lang?: string;
  /** 产品简称（查询是否集团服务委派管理员必填） */
  Product?: string;
}

declare interface DescribeOrganizationResponse {
  /** 企业组织ID */
  OrgId: number | null;
  /** 创建者UIN */
  HostUin: number | null;
  /** 创建者昵称 */
  NickName: string | null;
  /** 企业组织类型 */
  OrgType: number | null;
  /** 组织管理员：true，组织成员：false */
  IsManager: boolean | null;
  /** 策略类型 */
  OrgPolicyType: string | null;
  /** 策略名 */
  OrgPolicyName: string | null;
  /** 策略权限 */
  OrgPermission: OrgPermission[] | null;
  /** 根节点ID */
  RootNodeId: number | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 成员加入时间 */
  JoinTime: string | null;
  /** 是否允许退出。允许：Allow，不允许：Denied。 */
  IsAllowQuit: string | null;
  /** 代付者Uin */
  PayUin: string | null;
  /** 代付者名称 */
  PayName: string | null;
  /** 是否集团服务委派管理员 true-是、false-否 */
  IsAssignManager: boolean | null;
  /** 是否主体管理员 true-是、false-否 */
  IsAuthManager: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20181225 {
  interface VersionHeader { headers: { 'X-TC-Version': '2018-12-25' } }

  /** 企业组织邀请 */
  interface OrgInvitation {
    /** 邀请ID */
    Id: number;
    /** 被邀请UIN */
    Uin: number;
    /** 创建者UIN */
    HostUin: number;
    /** 创建者名称 */
    HostName: string;
    /** 创建者邮箱 */
    HostMail: string;
    /** 邀请状态。-1：已过期，0：正常，1：已接受，2：已失效，3：已取消 */
    Status: number;
    /** 名称 */
    Name: string;
    /** 备注 */
    Remark: string;
    /** 企业组织类型 */
    OrgType: number;
    /** 邀请时间 */
    InviteTime: string;
    /** 过期时间 */
    ExpireTime: string;
  }

  /** 企业组织成员 */
  interface OrgMember {
    /** UIN */
    Uin: number;
    /** 名称 */
    Name: string;
    /** 备注 */
    Remark: string;
    /** 加入时间 */
    JoinTime: string;
  }

  /** 企业组织单元 */
  interface OrgNode {
    /** 组织单元ID */
    NodeId: number;
    /** 名称 */
    Name: string;
    /** 父单元ID */
    ParentNodeId: number;
    /** 成员数量 */
    MemberCount: number;
  }

  interface AcceptOrganizationInvitationRequest {
    /** 邀请ID */
    Id: number;
  }

  interface AcceptOrganizationInvitationResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface AddOrganizationNodeRequest {
    /** 父组织单元ID */
    ParentNodeId: number;
    /** 组织单元名字 */
    Name: string;
  }

  interface AddOrganizationNodeResponse {
    /** 组织单元ID */
    NodeId?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CancelOrganizationInvitationRequest {
    /** 邀请ID */
    Id: number;
  }

  interface CancelOrganizationInvitationResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateOrganizationRequest {
    /** 组织类型（目前固定为1） */
    OrgType: number;
  }

  interface CreateOrganizationResponse {
    /** 企业组织ID */
    OrgId?: number;
    /** 创建者昵称 */
    Nickname?: string;
    /** 创建者邮箱 */
    Mail?: string;
    /** 组织类型 */
    OrgType?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteOrganizationMemberFromNodeRequest {
    /** 被删除成员UIN */
    MemberUin: number;
    /** 组织单元ID */
    NodeId: number;
  }

  interface DeleteOrganizationMemberFromNodeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteOrganizationMembersRequest {
    /** 被删除成员的UIN列表 */
    Uins: number[];
  }

  interface DeleteOrganizationMembersResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteOrganizationNodesRequest {
    /** 组织单元ID列表 */
    NodeIds: number[];
  }

  interface DeleteOrganizationNodesResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteOrganizationRequest {
  }

  interface DeleteOrganizationResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DenyOrganizationInvitationRequest {
    /** 邀请ID */
    Id: number;
  }

  interface DenyOrganizationInvitationResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetOrganizationMemberRequest {
    /** 组织成员UIN */
    MemberUin: number;
  }

  interface GetOrganizationMemberResponse {
    /** 组织成员UIN */
    Uin?: number;
    /** 组织成员名称 */
    Name?: string;
    /** 备注 */
    Remark?: string;
    /** 加入时间 */
    JoinTime?: string;
    /** 组织单元ID */
    NodeId?: number;
    /** 组织单元名称 */
    NodeName?: string;
    /** 父组织单元ID */
    ParentNodeId?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetOrganizationRequest {
  }

  interface GetOrganizationResponse {
    /** 企业组织ID */
    OrgId?: number;
    /** 创建者UIN */
    HostUin?: number;
    /** 创建者昵称 */
    Nickname?: string;
    /** 创建者邮箱 */
    Mail?: string;
    /** 企业组织类型 */
    OrgType?: number;
    /** 是否为空 */
    IsEmpty?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ListOrganizationInvitationsRequest {
    /** 是否被邀请。1：被邀请，0：发出的邀请 */
    Invited: number;
    /** 偏移量 */
    Offset?: number;
    /** 限制数目 */
    Limit?: number;
  }

  interface ListOrganizationInvitationsResponse {
    /** 邀请信息列表 */
    Invitations?: OrgInvitation[];
    /** 总数目 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ListOrganizationMembersRequest {
    /** 偏移量 */
    Offset?: number;
    /** 限制数目 */
    Limit?: number;
  }

  interface ListOrganizationMembersResponse {
    /** 成员列表 */
    Members?: OrgMember[];
    /** 总数目 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ListOrganizationNodeMembersRequest {
    /** 企业组织单元ID */
    NodeId: number;
    /** 偏移量 */
    Offset?: number;
    /** 限制数目 */
    Limit?: number;
  }

  interface ListOrganizationNodeMembersResponse {
    /** 总数目 */
    TotalCount?: number;
    /** 成员列表 */
    Members?: OrgMember[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ListOrganizationNodesRequest {
  }

  interface ListOrganizationNodesResponse {
    /** 企业组织单元列表 */
    Nodes: OrgNode[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface MoveOrganizationMembersToNodeRequest {
    /** 组织单元ID */
    NodeId: number;
    /** 成员UIN列表 */
    Uins: number[];
  }

  interface MoveOrganizationMembersToNodeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface QuitOrganizationRequest {
    /** 企业组织ID */
    OrgId: number;
  }

  interface QuitOrganizationResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SendOrganizationInvitationRequest {
    /** 被邀请账户UIN */
    InviteUin: number;
    /** 名称 */
    Name: string;
    /** 备注 */
    Remark: string;
  }

  interface SendOrganizationInvitationResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UpdateOrganizationMemberRequest {
    /** 成员UIN */
    MemberUin: number;
    /** 名称 */
    Name?: string;
    /** 备注 */
    Remark?: string;
  }

  interface UpdateOrganizationMemberResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UpdateOrganizationNodeRequest {
    /** 企业组织单元ID */
    NodeId: number;
    /** 名称 */
    Name?: string;
    /** 父单元ID */
    ParentNodeId?: number;
  }

  interface UpdateOrganizationNodeResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** [企业组织](https://cloud.tencent.com/document/product/850) */
declare interface Organization {
  (): Versions;
  /** 绑定组织成员和子账号的授权关系 */
  BindOrganizationMemberAuthAccount(data: BindOrganizationMemberAuthAccountRequest, config?: AxiosRequestConfig): AxiosPromise<BindOrganizationMemberAuthAccountResponse>;
  /** 创建组织成员 */
  CreateOrganizationMember(data: CreateOrganizationMemberRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMemberResponse>;
  /** 创建组织成员的授权策略 */
  CreateOrganizationMemberPolicy(data: CreateOrganizationMemberPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMemberPolicyResponse>;
  /** 获取企业组织信息 */
  DescribeOrganization(data: DescribeOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationResponse>;
  /** 获取企业组织成员列表 */
  DescribeOrganizationMembers(data: DescribeOrganizationMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMembersResponse>;
  /** 接受加入企业组织邀请 */
  AcceptOrganizationInvitation(data: V20181225.AcceptOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.AcceptOrganizationInvitationResponse>;
  /** 添加企业组织单元 */
  AddOrganizationNode(data: V20181225.AddOrganizationNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.AddOrganizationNodeResponse>;
  /** 取消企业组织邀请 */
  CancelOrganizationInvitation(data: V20181225.CancelOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.CancelOrganizationInvitationResponse>;
  /** 创建企业组织 */
  CreateOrganization(data: V20181225.CreateOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.CreateOrganizationResponse>;
  /** 删除企业组织 */
  DeleteOrganization(data: V20181225.DeleteOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationResponse>;
  /** 删除企业组织成员 */
  DeleteOrganizationMemberFromNode(data: V20181225.DeleteOrganizationMemberFromNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationMemberFromNodeResponse>;
  /** 批量删除企业组织成员 */
  DeleteOrganizationMembers(data: V20181225.DeleteOrganizationMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationMembersResponse>;
  /** 批量删除企业组织单元 */
  DeleteOrganizationNodes(data: V20181225.DeleteOrganizationNodesRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationNodesResponse>;
  /** 拒绝企业组织邀请 */
  DenyOrganizationInvitation(data: V20181225.DenyOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DenyOrganizationInvitationResponse>;
  /** 获取企业组织信息 */
  GetOrganization(data: V20181225.GetOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.GetOrganizationResponse>;
  /** 获取企业组织成员 */
  GetOrganizationMember(data: V20181225.GetOrganizationMemberRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.GetOrganizationMemberResponse>;
  /** 获取邀请信息列表 */
  ListOrganizationInvitations(data: V20181225.ListOrganizationInvitationsRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationInvitationsResponse>;
  /** 获取企业组织成员列表 */
  ListOrganizationMembers(data: V20181225.ListOrganizationMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationMembersResponse>;
  /** 获取企业组织单元成员列表 */
  ListOrganizationNodeMembers(data: V20181225.ListOrganizationNodeMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationNodeMembersResponse>;
  /** 获取企业组织单元列表 */
  ListOrganizationNodes(data: V20181225.ListOrganizationNodesRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationNodesResponse>;
  /** 移动成员到指定企业组织单元 */
  MoveOrganizationMembersToNode(data: V20181225.MoveOrganizationMembersToNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.MoveOrganizationMembersToNodeResponse>;
  /** 退出企业组织 */
  QuitOrganization(data: V20181225.QuitOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.QuitOrganizationResponse>;
  /** 发送企业组织邀请 */
  SendOrganizationInvitation(data: V20181225.SendOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.SendOrganizationInvitationResponse>;
  /** 更新企业成员信息 */
  UpdateOrganizationMember(data: V20181225.UpdateOrganizationMemberRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.UpdateOrganizationMemberResponse>;
  /** 更新企业组织单元 */
  UpdateOrganizationNode(data: V20181225.UpdateOrganizationNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.UpdateOrganizationNodeResponse>;
}

export declare type Versions = ["2021-03-31", "2018-12-25"];

export default Organization;
