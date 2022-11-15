/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 认证主体主要信息 */
declare interface AuthNode {
  /** 主体关系ID */
  RelationId: number | null;
  /** 主体名称 */
  AuthName: string | null;
}

/** 组织身份策略 */
declare interface IdentityPolicy {
  /** 策略ID */
  PolicyId: number;
  /** 策略名称 */
  PolicyName: string;
}

/** 成员管理身份 */
declare interface MemberIdentity {
  /** 身份ID。 */
  IdentityId: number | null;
  /** 身份名称。 */
  IdentityAliasName: string | null;
}

/** 组织身份 */
declare interface OrgIdentity {
  /** 身份ID。 */
  IdentityId: number | null;
  /** 身份名称。 */
  IdentityAliasName: string | null;
  /** 描述。 */
  Description: string | null;
  /** 身份策略。 */
  IdentityPolicy: IdentityPolicy[] | null;
  /** 身份类型。 1-预设、 2-自定义 */
  IdentityType: number | null;
  /** 更新时间。 */
  UpdateTime: string | null;
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

/** 组织成员可授权的身份 */
declare interface OrgMemberAuthIdentity {
  /** 身份ID。 */
  IdentityId: number | null;
  /** 身份角色名。 */
  IdentityRoleName: string | null;
  /** 身份角色别名。 */
  IdentityRoleAliasName: string | null;
  /** 描述 */
  Description: string | null;
  /** 创建时间。 */
  CreateTime: string | null;
  /** 更新时间。 */
  UpdateTime: string | null;
}

/** 组织成员被授权的策略 */
declare interface OrgMemberPolicy {
  /** 策略ID。 */
  PolicyId: number | null;
  /** 策略名。 */
  PolicyName: string | null;
  /** 身份ID。 */
  IdentityId: number | null;
  /** 身份角色名。 */
  IdentityRoleName: string | null;
  /** 身份角色别名。 */
  IdentityRoleAliasName: string | null;
  /** 描述。 */
  Description: string | null;
  /** 创建时间。 */
  CreateTime: string | null;
  /** 更新时间。 */
  UpdateTime: string | null;
}

/** 企业组织单元 */
declare interface OrgNode {
  /** 组织节点ID */
  NodeId: number | null;
  /** 名称 */
  Name: string | null;
  /** 父节点ID */
  ParentNodeId: number | null;
  /** 备注 */
  Remark: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
}

/** 关系策略权限 */
declare interface OrgPermission {
  /** 权限Id */
  Id: number;
  /** 权限名 */
  Name: string;
}

declare interface AddOrganizationNodeRequest {
  /** 父节点ID。可以调用DescribeOrganizationNodes获取 */
  ParentNodeId: number;
  /** 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]- */
  Name: string;
  /** 备注。 */
  Remark?: string;
}

declare interface AddOrganizationNodeResponse {
  /** 节点ID。 */
  NodeId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BindOrganizationMemberAuthAccountRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略ID。可以调用DescribeOrganizationMemberPolicies获取 */
  PolicyId: number;
  /** 组织管理员子账号Uin列表。最大5个 */
  OrgSubAccountUins: number[];
}

declare interface BindOrganizationMemberAuthAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOrganizationMemberPolicyRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略名。最大长度为128个字符，支持英文字母、数字、符号+=,.@_- */
  PolicyName: string;
  /** 成员访问身份ID。可以调用DescribeOrganizationMemberAuthIdentities获取 */
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
  /** 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:, */
  Name: string;
  /** 关系策略。取值：Financial */
  PolicyType: string;
  /** 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须 */
  PermissionIds: number[];
  /** 成员所属部门的节点ID。可以调用DescribeOrganizationNodes获取 */
  NodeId: number;
  /** 账号名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:, */
  AccountName: string;
  /** 备注。 */
  Remark?: string;
  /** 成员创建记录ID。创建异常重试时需要 */
  RecordId?: number;
  /** 代付者Uin。成员代付费时需要 */
  PayUin?: string;
  /** 成员访问身份ID列表。可以调用ListOrganizationIdentity获取，1默认支持 */
  IdentityRoleID?: number[];
  /** 认证主体关系ID。给不同主体创建成员时需要，可以调用DescribeOrganizationAuthNode获取 */
  AuthRelationId?: number;
}

declare interface CreateOrganizationMemberResponse {
  /** 成员Uin。 */
  Uin: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteOrganizationMembersRequest {
  /** 被删除成员的UIN列表。 */
  MemberUin: number[];
}

declare interface DeleteOrganizationMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteOrganizationNodesRequest {
  /** 节点ID列表。 */
  NodeId: number[];
}

declare interface DeleteOrganizationNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationAuthNodeRequest {
  /** 偏移量。 */
  Offset: number;
  /** 限制数目。最大50 */
  Limit: number;
}

declare interface DescribeOrganizationAuthNodeResponse {
  /** 总数。 */
  Total: number | null;
  /** 条目详情。 */
  Items: AuthNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMemberAuthIdentitiesRequest {
  /** 偏移量。 */
  Offset: number;
  /** 限制数目。最大50 */
  Limit: number;
  /** 组织成员Uin。 */
  MemberUin: number;
}

declare interface DescribeOrganizationMemberAuthIdentitiesResponse {
  /** 列表。 */
  Items: OrgMemberAuthIdentity[] | null;
  /** 总数目。 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMemberPoliciesRequest {
  /** 偏移量。 */
  Offset: number;
  /** 限制数目。最大50 */
  Limit: number;
  /** 成员Uin。 */
  MemberUin: number;
  /** 搜索关键字。可用于策略名或描述搜索 */
  SearchKey?: string;
}

declare interface DescribeOrganizationMemberPoliciesResponse {
  /** 列表。 */
  Items: OrgMemberPolicy[] | null;
  /** 总数目。 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMembersRequest {
  /** 偏移量。 */
  Offset: number;
  /** 限制数目。最大50 */
  Limit: number;
  /** 国际站：en，国内站：zh */
  Lang?: string;
  /** 成员名称或者成员ID搜索。 */
  SearchKey?: string;
  /** 主体名称搜索。 */
  AuthName?: string;
  /** 可信服务产品简称。可信服务管理员查询时必须指定 */
  Product?: string;
}

declare interface DescribeOrganizationMembersResponse {
  /** 成员列表。 */
  Items: OrgMember[];
  /** 总数目。 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationNodesRequest {
  /** 限制数目。最大50 */
  Limit: number;
  /** 偏移量。 */
  Offset: number;
}

declare interface DescribeOrganizationNodesResponse {
  /** 总数。 */
  Total: number | null;
  /** 列表详情。 */
  Items: OrgNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationRequest {
  /** 国际站：en，国内站：zh */
  Lang?: string;
  /** 可信服务产品简称。查询是否该可信服务管理员时必须指定 */
  Product?: string;
}

declare interface DescribeOrganizationResponse {
  /** 企业组织ID。 */
  OrgId: number | null;
  /** 创建者UIN。 */
  HostUin: number | null;
  /** 创建者昵称。 */
  NickName: string | null;
  /** 企业组织类型。 */
  OrgType: number | null;
  /** 是否组织管理员。是：true ，否：false */
  IsManager: boolean | null;
  /** 策略类型。财务管理：Financial */
  OrgPolicyType: string | null;
  /** 策略名。 */
  OrgPolicyName: string | null;
  /** 成员财务权限列表。 */
  OrgPermission: OrgPermission[] | null;
  /** 组织根节点ID。 */
  RootNodeId: number | null;
  /** 组织创建时间。 */
  CreateTime: string | null;
  /** 成员加入时间。 */
  JoinTime: string | null;
  /** 成员是否允许退出。允许：Allow，不允许：Denied */
  IsAllowQuit: string | null;
  /** 代付者Uin。 */
  PayUin: string | null;
  /** 代付者名称。 */
  PayName: string | null;
  /** 是否可信服务管理员。是：true，否：false */
  IsAssignManager: boolean | null;
  /** 是否实名主体管理员。是：true，否：false */
  IsAuthManager: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListOrganizationIdentityRequest {
  /** 偏移量。 */
  Offset: number;
  /** 限制数目。最大50 */
  Limit: number;
  /** 名称搜索关键字。 */
  SearchKey?: string;
  /** 身份ID搜索。 */
  IdentityId?: number;
}

declare interface ListOrganizationIdentityResponse {
  /** 总数。 */
  Total: number | null;
  /** 条目详情。 */
  Items: OrgIdentity[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MoveOrganizationNodeMembersRequest {
  /** 组织节点ID。 */
  NodeId: number;
  /** 成员UIN列表。 */
  MemberUin: number[];
}

declare interface MoveOrganizationNodeMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateOrganizationNodeRequest {
  /** 节点ID。 */
  NodeId: number;
  /** 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]- */
  Name?: string;
  /** 备注。 */
  Remark?: string;
}

declare interface UpdateOrganizationNodeResponse {
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

/** {@link Organization 集团账号管理} */
declare interface Organization {
  (): Versions;
  /** {@link AddOrganizationNode 添加企业组织节点}({@link AddOrganizationNodeRequest 请求参数}): {@link AddOrganizationNodeResponse 返回参数} */
  AddOrganizationNode(data: AddOrganizationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<AddOrganizationNodeResponse>;
  /** {@link BindOrganizationMemberAuthAccount 绑定组织成员和组织管理员子账号的授权关系}({@link BindOrganizationMemberAuthAccountRequest 请求参数}): {@link BindOrganizationMemberAuthAccountResponse 返回参数} */
  BindOrganizationMemberAuthAccount(data: BindOrganizationMemberAuthAccountRequest, config?: AxiosRequestConfig): AxiosPromise<BindOrganizationMemberAuthAccountResponse>;
  /** {@link CreateOrganizationMember 创建组织成员}({@link CreateOrganizationMemberRequest 请求参数}): {@link CreateOrganizationMemberResponse 返回参数} */
  CreateOrganizationMember(data: CreateOrganizationMemberRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMemberResponse>;
  /** {@link CreateOrganizationMemberPolicy 创建组织成员访问授权策略}({@link CreateOrganizationMemberPolicyRequest 请求参数}): {@link CreateOrganizationMemberPolicyResponse 返回参数} */
  CreateOrganizationMemberPolicy(data: CreateOrganizationMemberPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMemberPolicyResponse>;
  /** {@link DeleteOrganizationMembers 批量删除企业组织成员}({@link DeleteOrganizationMembersRequest 请求参数}): {@link DeleteOrganizationMembersResponse 返回参数} */
  DeleteOrganizationMembers(data: DeleteOrganizationMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationMembersResponse>;
  /** {@link DeleteOrganizationNodes 批量删除企业组织节点}({@link DeleteOrganizationNodesRequest 请求参数}): {@link DeleteOrganizationNodesResponse 返回参数} */
  DeleteOrganizationNodes(data: DeleteOrganizationNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationNodesResponse>;
  /** {@link DescribeOrganization 获取企业组织信息}({@link DescribeOrganizationRequest 请求参数}): {@link DescribeOrganizationResponse 返回参数} */
  DescribeOrganization(data?: DescribeOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationResponse>;
  /** {@link DescribeOrganizationAuthNode 获取可创建组织成员的认证主体关系列表}({@link DescribeOrganizationAuthNodeRequest 请求参数}): {@link DescribeOrganizationAuthNodeResponse 返回参数} */
  DescribeOrganizationAuthNode(data: DescribeOrganizationAuthNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationAuthNodeResponse>;
  /** {@link DescribeOrganizationMemberAuthIdentities 获取组织成员可被管理的身份列表}({@link DescribeOrganizationMemberAuthIdentitiesRequest 请求参数}): {@link DescribeOrganizationMemberAuthIdentitiesResponse 返回参数} */
  DescribeOrganizationMemberAuthIdentities(data: DescribeOrganizationMemberAuthIdentitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMemberAuthIdentitiesResponse>;
  /** {@link DescribeOrganizationMemberPolicies 获取组织成员的授权策略列表}({@link DescribeOrganizationMemberPoliciesRequest 请求参数}): {@link DescribeOrganizationMemberPoliciesResponse 返回参数} */
  DescribeOrganizationMemberPolicies(data: DescribeOrganizationMemberPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMemberPoliciesResponse>;
  /** {@link DescribeOrganizationMembers 获取企业组织成员列表}({@link DescribeOrganizationMembersRequest 请求参数}): {@link DescribeOrganizationMembersResponse 返回参数} */
  DescribeOrganizationMembers(data: DescribeOrganizationMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMembersResponse>;
  /** {@link DescribeOrganizationNodes 获取组织节点列表}({@link DescribeOrganizationNodesRequest 请求参数}): {@link DescribeOrganizationNodesResponse 返回参数} */
  DescribeOrganizationNodes(data: DescribeOrganizationNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationNodesResponse>;
  /** {@link ListOrganizationIdentity 获取组织成员访问身份列表}({@link ListOrganizationIdentityRequest 请求参数}): {@link ListOrganizationIdentityResponse 返回参数} */
  ListOrganizationIdentity(data: ListOrganizationIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<ListOrganizationIdentityResponse>;
  /** {@link MoveOrganizationNodeMembers 移动成员到指定企业组织节点}({@link MoveOrganizationNodeMembersRequest 请求参数}): {@link MoveOrganizationNodeMembersResponse 返回参数} */
  MoveOrganizationNodeMembers(data: MoveOrganizationNodeMembersRequest, config?: AxiosRequestConfig): AxiosPromise<MoveOrganizationNodeMembersResponse>;
  /** {@link UpdateOrganizationNode 更新企业组织节点}({@link UpdateOrganizationNodeRequest 请求参数}): {@link UpdateOrganizationNodeResponse 返回参数} */
  UpdateOrganizationNode(data: UpdateOrganizationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOrganizationNodeResponse>;
  /** {@link V20181225.AcceptOrganizationInvitation 接受加入企业组织邀请}({@link V20181225.AcceptOrganizationInvitationRequest 请求参数}): {@link V20181225.AcceptOrganizationInvitationResponse 返回参数} */
  AcceptOrganizationInvitation(data: V20181225.AcceptOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.AcceptOrganizationInvitationResponse>;
  /** {@link V20181225.AddOrganizationNode 添加企业组织单元}({@link V20181225.AddOrganizationNodeRequest 请求参数}): {@link V20181225.AddOrganizationNodeResponse 返回参数} */
  AddOrganizationNode(data: V20181225.AddOrganizationNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.AddOrganizationNodeResponse>;
  /** {@link V20181225.CancelOrganizationInvitation 取消企业组织邀请}({@link V20181225.CancelOrganizationInvitationRequest 请求参数}): {@link V20181225.CancelOrganizationInvitationResponse 返回参数} */
  CancelOrganizationInvitation(data: V20181225.CancelOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.CancelOrganizationInvitationResponse>;
  /** {@link V20181225.CreateOrganization 创建企业组织}({@link V20181225.CreateOrganizationRequest 请求参数}): {@link V20181225.CreateOrganizationResponse 返回参数} */
  CreateOrganization(data: V20181225.CreateOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.CreateOrganizationResponse>;
  /** {@link V20181225.DeleteOrganization 删除企业组织}({@link V20181225.DeleteOrganizationRequest 请求参数}): {@link V20181225.DeleteOrganizationResponse 返回参数} */
  DeleteOrganization(data: V20181225.DeleteOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationResponse>;
  /** {@link V20181225.DeleteOrganizationMemberFromNode 删除企业组织成员}({@link V20181225.DeleteOrganizationMemberFromNodeRequest 请求参数}): {@link V20181225.DeleteOrganizationMemberFromNodeResponse 返回参数} */
  DeleteOrganizationMemberFromNode(data: V20181225.DeleteOrganizationMemberFromNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationMemberFromNodeResponse>;
  /** {@link V20181225.DeleteOrganizationMembers 批量删除企业组织成员}({@link V20181225.DeleteOrganizationMembersRequest 请求参数}): {@link V20181225.DeleteOrganizationMembersResponse 返回参数} */
  DeleteOrganizationMembers(data: V20181225.DeleteOrganizationMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationMembersResponse>;
  /** {@link V20181225.DeleteOrganizationNodes 批量删除企业组织单元}({@link V20181225.DeleteOrganizationNodesRequest 请求参数}): {@link V20181225.DeleteOrganizationNodesResponse 返回参数} */
  DeleteOrganizationNodes(data: V20181225.DeleteOrganizationNodesRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationNodesResponse>;
  /** {@link V20181225.DenyOrganizationInvitation 拒绝企业组织邀请}({@link V20181225.DenyOrganizationInvitationRequest 请求参数}): {@link V20181225.DenyOrganizationInvitationResponse 返回参数} */
  DenyOrganizationInvitation(data: V20181225.DenyOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DenyOrganizationInvitationResponse>;
  /** {@link V20181225.GetOrganization 获取企业组织信息}({@link V20181225.GetOrganizationRequest 请求参数}): {@link V20181225.GetOrganizationResponse 返回参数} */
  GetOrganization(data: V20181225.GetOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.GetOrganizationResponse>;
  /** {@link V20181225.GetOrganizationMember 获取企业组织成员}({@link V20181225.GetOrganizationMemberRequest 请求参数}): {@link V20181225.GetOrganizationMemberResponse 返回参数} */
  GetOrganizationMember(data: V20181225.GetOrganizationMemberRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.GetOrganizationMemberResponse>;
  /** {@link V20181225.ListOrganizationInvitations 获取邀请信息列表}({@link V20181225.ListOrganizationInvitationsRequest 请求参数}): {@link V20181225.ListOrganizationInvitationsResponse 返回参数} */
  ListOrganizationInvitations(data: V20181225.ListOrganizationInvitationsRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationInvitationsResponse>;
  /** {@link V20181225.ListOrganizationMembers 获取企业组织成员列表}({@link V20181225.ListOrganizationMembersRequest 请求参数}): {@link V20181225.ListOrganizationMembersResponse 返回参数} */
  ListOrganizationMembers(data: V20181225.ListOrganizationMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationMembersResponse>;
  /** {@link V20181225.ListOrganizationNodeMembers 获取企业组织单元成员列表}({@link V20181225.ListOrganizationNodeMembersRequest 请求参数}): {@link V20181225.ListOrganizationNodeMembersResponse 返回参数} */
  ListOrganizationNodeMembers(data: V20181225.ListOrganizationNodeMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationNodeMembersResponse>;
  /** {@link V20181225.ListOrganizationNodes 获取企业组织单元列表}({@link V20181225.ListOrganizationNodesRequest 请求参数}): {@link V20181225.ListOrganizationNodesResponse 返回参数} */
  ListOrganizationNodes(data: V20181225.ListOrganizationNodesRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationNodesResponse>;
  /** {@link V20181225.MoveOrganizationMembersToNode 移动成员到指定企业组织单元}({@link V20181225.MoveOrganizationMembersToNodeRequest 请求参数}): {@link V20181225.MoveOrganizationMembersToNodeResponse 返回参数} */
  MoveOrganizationMembersToNode(data: V20181225.MoveOrganizationMembersToNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.MoveOrganizationMembersToNodeResponse>;
  /** {@link V20181225.QuitOrganization 退出企业组织}({@link V20181225.QuitOrganizationRequest 请求参数}): {@link V20181225.QuitOrganizationResponse 返回参数} */
  QuitOrganization(data: V20181225.QuitOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.QuitOrganizationResponse>;
  /** {@link V20181225.SendOrganizationInvitation 发送企业组织邀请}({@link V20181225.SendOrganizationInvitationRequest 请求参数}): {@link V20181225.SendOrganizationInvitationResponse 返回参数} */
  SendOrganizationInvitation(data: V20181225.SendOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.SendOrganizationInvitationResponse>;
  /** {@link V20181225.UpdateOrganizationMember 更新企业成员信息}({@link V20181225.UpdateOrganizationMemberRequest 请求参数}): {@link V20181225.UpdateOrganizationMemberResponse 返回参数} */
  UpdateOrganizationMember(data: V20181225.UpdateOrganizationMemberRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.UpdateOrganizationMemberResponse>;
  /** {@link V20181225.UpdateOrganizationNode 更新企业组织单元}({@link V20181225.UpdateOrganizationNodeRequest 请求参数}): {@link V20181225.UpdateOrganizationNodeResponse 返回参数} */
  UpdateOrganizationNode(data: V20181225.UpdateOrganizationNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.UpdateOrganizationNodeResponse>;
}

export declare type Versions = ["2021-03-31", "2018-12-25"];

export default Organization;
