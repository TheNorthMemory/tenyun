/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 互信主体主要信息 */
declare interface AuthNode {
  /** 互信主体关系ID */
  RelationId: number | null;
  /** 互信主体名称 */
  AuthName: string | null;
  /** 主体管理员 */
  Manager: MemberMainInfo | null;
}

/** 有效策略。 */
declare interface EffectivePolicy {
  /** 目标ID。 */
  TargetId: number;
  /** 有效策略内容。 */
  PolicyContent: string;
  /** 有效策略更新时间。 */
  LastUpdatedTimestamp: number;
}

/** 组织身份策略 */
declare interface IdentityPolicy {
  /** CAM预设策略ID。PolicyType 为预设策略时有效且必选 */
  PolicyId?: number;
  /** CAM预设策略名称。PolicyType 为预设策略时有效且必选 */
  PolicyName?: string;
  /** 策略类型。取值 1-自定义策略 2-预设策略；默认值2 */
  PolicyType?: number | null;
  /** 自定义策略内容，遵循CAM策略语法。PolicyType 为自定义策略时有效且必选 */
  PolicyDocument?: string | null;
}

/** 查询目标关联的SCP策略列表 */
declare interface ListPoliciesForTarget {
  /** 策略Id */
  StrategyId: number;
  /** 策略名称 */
  StrategyName: string;
  /** 备注信息 */
  Remark: string | null;
  /** 关联的账号或节点 */
  Uin: number;
  /** 关联类型 1-节点 2-用户 */
  Type: number;
  /** 策略创建时间 */
  AddTime: string | null;
  /** 策略更新时间 */
  UpdateTime: string | null;
  /** 部门名称 */
  Name: string | null;
  /** 策略绑定时间 */
  AttachTime: string | null;
}

/** 企业组织策略列表 */
declare interface ListPolicyNode {
  /** 策略创建时间 */
  AddTime: string | null;
  /** 策略绑定次数 */
  AttachedTimes: number | null;
  /** 策略描述信息 */
  Description: string | null;
  /** 策略名称 */
  PolicyName: string;
  /** 策略Id */
  PolicyId: number;
  /** 策略更新时间 */
  UpdateTime: string | null;
  /** 策略类型 1-自定义 2-预设 */
  Type: number;
}

/** 查询某个指定SCP策略关联的目标列表 */
declare interface ListTargetsForPolicyNode {
  /** scp账号uin或节点Id */
  Uin: number;
  /** 关联类型 1-节点关联 2-用户关联 */
  RelatedType: number;
  /** 账号或者节点名称 */
  Name: string | null;
  /** 绑定时间 */
  AddTime: string;
}

/** 我的共享单元列表详情 */
declare interface ManagerShareUnit {
  /** 共享单元ID。 */
  UnitId?: string;
  /** 共享单元名称。 */
  Name?: string;
  /** 共享单元管理员Uin。 */
  Uin?: number;
  /** 共享单元管理员OwnerUin。 */
  OwnerUin?: number;
  /** 共享单元地域。 */
  Area?: string;
  /** 描述。 */
  Description?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 共享单元资源数。 */
  ShareResourceNum?: number | null;
  /** 共享单元成员数。 */
  ShareMemberNum?: number | null;
  /** 共享范围。取值：1-仅允许集团组织内共享 2-允许共享给任意账号 */
  ShareScope?: number | null;
}

/** 成员管理身份 */
declare interface MemberIdentity {
  /** 身份ID。 */
  IdentityId: number | null;
  /** 身份名称。 */
  IdentityAliasName: string | null;
}

/** 成员主要信息 */
declare interface MemberMainInfo {
  /** 成员uin */
  MemberUin: number | null;
  /** 成员名称j */
  MemberName: string | null;
}

/** 不允许删除的原因。 */
declare interface NotAllowReason {
  /** 是否创建的成员。true-是、false-否；成员不是创建的成员不允许删除 */
  IsCreateMember?: boolean | null;
  /** 成员删除许可。true-开启、false-关闭；成员删除许可关闭时不允许删除 */
  DeletionPermission?: boolean | null;
  /** 是否可信服务委派管理员。true-是、false-否；成员是可信服务委派管理员不允许删除 */
  IsAssignManager?: boolean | null;
  /** 是否主体管理员。true-是、false-否；成员是主体管理员不允许删除 */
  IsAuthManager?: boolean | null;
  /** 是否共享资源管理员。true-是、false-否；成员是共享资源管理员不允许删除 */
  IsShareManager?: boolean | null;
  /** 成员是否设置了操作审批。true-是、false-否；成员设置了操作审批时不允许删除 */
  OperateProcess?: boolean | null;
  /** 是否允许解除成员财务权限。true-是、false-否；成员不能解除财务权限时不允许删除 */
  BillingPermission?: boolean | null;
  /** 存在的资源列表。账号存在资源时不允许删除 */
  ExistResources?: string[] | null;
  /** 检测失败的资源列表。账号有资源检测失败时不允许删除。 */
  DetectFailedResources?: string[] | null;
}

/** 按月获取组织财务信息 */
declare interface OrgFinancialByMonth {
  /** 记录ID。 */
  Id: number | null;
  /** 月份，格式：yyyy-mm，示例：2021-01。 */
  Month: string | null;
  /** 消耗金额，单元：元。 */
  TotalCost: number | null;
  /** 比上月增长率%。正数增长，负数下降，空值无法统计。 */
  GrowthRate?: string | null;
}

/** 组织身份 */
declare interface OrgIdentity {
  /** 身份ID。 */
  IdentityId?: number | null;
  /** 身份名称。 */
  IdentityAliasName?: string | null;
  /** 描述。 */
  Description?: string | null;
  /** 身份策略。 */
  IdentityPolicy?: IdentityPolicy[] | null;
  /** 身份类型。 1-预设、 2-自定义 */
  IdentityType?: number | null;
  /** 更新时间。 */
  UpdateTime?: string | null;
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

/** 成员和子账号的授权关系 */
declare interface OrgMemberAuthAccount {
  /** 组织子账号Uin。 */
  OrgSubAccountUin: number | null;
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
  /** 创建时间。 */
  CreateTime: string | null;
  /** 更新时间。 */
  UpdateTime: string | null;
  /** 子账号名称 */
  OrgSubAccountName: string | null;
}

/** 组织成员可授权的身份 */
declare interface OrgMemberAuthIdentity {
  /** 身份ID。 */
  IdentityId?: number | null;
  /** 身份的角色名。 */
  IdentityRoleName?: string | null;
  /** 身份的角色别名。 */
  IdentityRoleAliasName?: string | null;
  /** 身份描述。 */
  Description?: string | null;
  /** 首次配置成功的时间。 */
  CreateTime?: string | null;
  /** 最后一次配置成功的时间。 */
  UpdateTime?: string | null;
  /** 身份类型。取值： 1-预设身份 2-自定义身份 */
  IdentityType?: number | null;
  /** 配置状态。取值：1-配置完成 2-需重新配置 */
  Status?: number | null;
  /** 成员Uin。 */
  MemberUin?: number | null;
  /** 成员名称。 */
  MemberName?: string | null;
}

/** 组织成员财务信息。 */
declare interface OrgMemberFinancial {
  /** 成员Uin。 */
  MemberUin: number | null;
  /** 成员名称。 */
  MemberName: string | null;
  /** 消耗金额，单位：元。 */
  TotalCost: number | null;
  /** 占比%。 */
  Ratio?: string | null;
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

/** 组织产品财务信息 */
declare interface OrgProductFinancial {
  /** 产品Code。 */
  ProductName: string | null;
  /** 产品名。 */
  ProductCode: string | null;
  /** 产品消耗，单位：元。 */
  TotalCost: number | null;
  /** 占比%。 */
  Ratio?: string | null;
}

/** 产品资源 */
declare interface ProductResource {
  /** 产品资源ID。 */
  ProductResourceId: string;
  /** 资源六段式最后一节 */
  ResourceGrantLast?: string;
}

/** 资源及关联的标签 */
declare interface ResourceTagMapping {
  /** 资源六段式。腾讯云使用资源六段式描述一个资源。例如：qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。 */
  Resource: string | null;
  /** 合规详情。 */
  ComplianceDetails: TagComplianceDetails | null;
  /** 资源标签。 */
  Tags: Tags[] | null;
}

/** 共享地域 */
declare interface ShareArea {
  /** 地域名称。 */
  Name?: string;
  /** 地域标识。 */
  Area?: string;
  /** 地域ID。 */
  AreaId?: number;
}

/** 共享成员信息 */
declare interface ShareMember {
  /** 共享成员Uin。 */
  ShareMemberUin: number;
}

/** 共享资源 */
declare interface ShareResource {
  /** 共享资源ID。 */
  ResourceId?: string;
  /** 产品资源ID。 */
  ProductResourceId?: string | null;
}

/** 共享单元成员 */
declare interface ShareUnitMember {
  /** 共享成员Uin。 */
  ShareMemberUin?: number;
  /** 创建时间。 */
  CreateTime?: string | null;
}

/** 共享单元资源 */
declare interface ShareUnitResource {
  /** 共享资源ID。 */
  ResourceId?: string;
  /** 共享资源类型。 */
  Type?: string;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 产品资源ID。 */
  ProductResourceId?: string;
  /** 共享单元成员数。 */
  SharedMemberNum?: number | null;
  /** 使用中共享单元成员数。 */
  SharedMemberUseNum?: number | null;
  /** 共享管理员OwnerUin。 */
  ShareManagerUin?: number | null;
}

/** 标签合规信息 */
declare interface TagComplianceDetails {
  /** 合规状态。true-合规，false-不合规 */
  ComplianceStatus: boolean | null;
  /** 值不合规的标签键列表。 */
  KeysWithNonCompliantValues: string[] | null;
  /** 键不合规的标签键列表。 */
  NonCompliantKeys: string[] | null;
}

/** 标签键值对 */
declare interface Tags {
  /** 标签键。 */
  TagKey: string | null;
  /** 标签值。 */
  TagValue: string | null;
}

declare interface AddOrganizationMemberEmailRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 邮箱地址。 */
  Email: string;
  /** 国际区号。 */
  CountryCode: string;
  /** 手机号。 */
  Phone: string;
}

declare interface AddOrganizationMemberEmailResponse {
  /** 绑定Id */
  BindId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddOrganizationNodeRequest {
  /** 父节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取 */
  ParentNodeId: number;
  /** 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]- */
  Name: string;
  /** 备注。 */
  Remark?: string;
}

declare interface AddOrganizationNodeResponse {
  /** 节点ID。 */
  NodeId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddShareUnitMembersRequest {
  /** 共享单元ID。 */
  UnitId: string;
  /** 共享单元地域。 */
  Area: string;
  /** 共享成员列表。最大10个。 */
  Members: ShareMember[];
}

declare interface AddShareUnitMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddShareUnitRequest {
  /** 共享单元名称。仅支持大小写字母、数字、-、以及_的组合，3-128个字符。 */
  Name: string;
  /** 共享单元地域。可通过接口[DescribeShareAreas](https://cloud.tencent.com/document/product/850/103050)获取支持共享的地域。 */
  Area: string;
  /** 共享单元描述。最大128个字符。 */
  Description?: string;
  /** 共享范围。取值：1-仅允许集团组织内共享 2-允许共享给任意账号，默认值：1 */
  ShareScope?: number;
}

declare interface AddShareUnitResourcesRequest {
  /** 共享单元ID。 */
  UnitId: string;
  /** 共享单元地域。 */
  Area: string;
  /** 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489) */
  Type: string;
  /** 共享资源列表。最大10个。 */
  Resources: ProductResource[];
}

declare interface AddShareUnitResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddShareUnitResponse {
  /** 共享单元ID。 */
  UnitId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachPolicyRequest {
  /** 绑定策略目标ID。成员Uin或部门ID */
  TargetId: number;
  /** 目标类型。取值范围：NODE-部门、MEMBER-成员 */
  TargetType: string;
  /** 策略ID。 */
  PolicyId: number;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  Type?: string;
}

declare interface AttachPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindOrganizationMemberAuthAccountRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略ID。可以调用[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取 */
  PolicyId: number;
  /** 组织管理员子账号Uin列表。最大5个 */
  OrgSubAccountUins: number[];
}

declare interface BindOrganizationMemberAuthAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelOrganizationMemberAuthAccountRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取 */
  PolicyId: number;
  /** 组织子账号Uin。 */
  OrgSubAccountUin: number;
}

declare interface CancelOrganizationMemberAuthAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckAccountDeleteRequest {
  /** 成员Uin。 */
  MemberUin: number;
}

declare interface CheckAccountDeleteResponse {
  /** 成员是否允许删除。 true-是、false-否 */
  AllowDelete?: boolean;
  /** 不允许删除原因。 */
  NotAllowReason?: NotAllowReason;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationIdentityRequest {
  /** 身份名称 */
  IdentityAliasName: string;
  /** 身份策略 */
  IdentityPolicy: IdentityPolicy[];
  /** 身份描述 */
  Description?: string;
}

declare interface CreateOrganizationIdentityResponse {
  /** 身份ID */
  IdentityId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationMemberAuthIdentityRequest {
  /** 成员Uin列表。最多10个 */
  MemberUins: number[];
  /** 身份Id列表。最多5个，可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取 */
  IdentityIds: number[];
}

declare interface CreateOrganizationMemberAuthIdentityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationMemberPolicyRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略名。最大长度为128个字符，支持英文字母、数字、符号+=,.@_- */
  PolicyName: string;
  /** 成员访问身份ID。可以调用[DescribeOrganizationMemberAuthIdentities](https://cloud.tencent.com/document/product/850/82936)获取 */
  IdentityId: number;
  /** 描述。 */
  Description?: string;
}

declare interface CreateOrganizationMemberPolicyResponse {
  /** 策略ID。 */
  PolicyId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationMemberRequest {
  /** 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:, */
  Name: string;
  /** 关系策略。取值：Financial */
  PolicyType: string;
  /** 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须 */
  PermissionIds: number[];
  /** 成员所属部门的节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取 */
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
  Uin?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationMembersPolicyRequest {
  /** 成员Uin列表。最多10个 */
  MemberUins: number[];
  /** 策略名。长度1～128个字符，支持英文字母、数字、符号+=,.@_- */
  PolicyName: string;
  /** 成员访问身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取 */
  IdentityId: number;
  /** 策略描述。最大长度为128个字符 */
  Description?: string;
}

declare interface CreateOrganizationMembersPolicyResponse {
  /** 策略ID。 */
  PolicyId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationRequest {
}

declare interface CreateOrganizationResponse {
  /** 企业组织ID */
  OrgId: number;
  /** 创建者昵称 */
  NickName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePolicyRequest {
  /** 策略名。长度为1~128个字符，可以包含汉字、英文字母、数字和下划线（_） */
  Name: string;
  /** 策略内容。参考CAM策略语法 */
  Content: string;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  Type: string;
  /** 策略描述。 */
  Description?: string;
}

declare interface CreatePolicyResponse {
  /** 策略ID */
  PolicyId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccountRequest {
  /** 成员Uin。 */
  MemberUin: number;
}

declare interface DeleteAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationIdentityRequest {
  /** 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取 */
  IdentityId: number;
}

declare interface DeleteOrganizationIdentityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationMemberAuthIdentityRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取 */
  IdentityId: number;
}

declare interface DeleteOrganizationMemberAuthIdentityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationMembersPolicyRequest {
  /** 访问策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取 */
  PolicyId: number;
}

declare interface DeleteOrganizationMembersPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationMembersRequest {
  /** 被删除成员的Uin列表。 */
  MemberUin: number[];
}

declare interface DeleteOrganizationMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationNodesRequest {
  /** 节点ID列表。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取 */
  NodeId: number[];
}

declare interface DeleteOrganizationNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationRequest {
}

declare interface DeleteOrganizationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePolicyRequest {
  /** 需要删除的策略ID。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取 */
  PolicyId: number;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  Type?: string;
}

declare interface DeletePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteShareUnitMembersRequest {
  /** 共享单元ID。 */
  UnitId: string;
  /** 共享单元地域。 */
  Area: string;
  /** 成员列表。 */
  Members: ShareMember[];
}

declare interface DeleteShareUnitMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteShareUnitRequest {
  /** 共享单元ID。 */
  UnitId: string;
}

declare interface DeleteShareUnitResourcesRequest {
  /** 共享单元ID。 */
  UnitId: string;
  /** 共享单元地域。 */
  Area: string;
  /** 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489) */
  Type: string;
  /** 共享资源列表。最大10个。 */
  Resources: ShareResource[];
}

declare interface DeleteShareUnitResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteShareUnitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEffectivePolicyRequest {
  /** 账号uin或者节点id。 */
  TargetId: number;
}

declare interface DescribeEffectivePolicyResponse {
  /** 有效策略。 */
  EffectivePolicy?: EffectivePolicy | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationAuthNodeRequest {
  /** 偏移量。取值是limit的整数倍。默认值 : 0。 */
  Offset: number;
  /** 限制数目。取值范围：1~50。默认值：10。 */
  Limit: number;
  /** 互信主体名称。 */
  AuthName?: string;
}

declare interface DescribeOrganizationAuthNodeResponse {
  /** 总数。 */
  Total?: number | null;
  /** 条目详情。 */
  Items?: AuthNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationFinancialByMemberRequest {
  /** 查询开始月份。格式：yyyy-mm，例如：2021-01。 */
  Month: string;
  /** 限制数目。取值范围：1~50，默认值：10 */
  Limit?: number;
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset?: number;
  /** 查询结束月份。格式：yyyy-mm，例如：2021-01,默认值为查询开始月份。 */
  EndMonth?: string;
  /** 查询成员列表。 最大100个 */
  MemberUins?: number[];
  /** 查询产品列表。 最大100个 */
  ProductCodes?: string[];
}

declare interface DescribeOrganizationFinancialByMemberResponse {
  /** 当月总消耗。 */
  TotalCost?: number | null;
  /** 成员消耗详情。 */
  Items?: OrgMemberFinancial[] | null;
  /** 总数目。 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationFinancialByMonthRequest {
  /** 查询月数。取值范围：1~6，默认值：6 */
  Limit?: number;
  /** 查询结束月份。格式：yyyy-mm，例如：2021-01 */
  EndMonth?: string;
  /** 查询成员列表。 最大100个 */
  MemberUins?: number[];
  /** 查询产品列表。 最大100个 */
  ProductCodes?: string[];
}

declare interface DescribeOrganizationFinancialByMonthResponse {
  /** 产品消耗详情。 */
  Items?: OrgFinancialByMonth[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationFinancialByProductRequest {
  /** 查询开始月份。格式：yyyy-mm，例如：2021-01 */
  Month: string;
  /** 限制数目。取值范围：1~50，默认值：10 */
  Limit?: number;
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset?: number;
  /** 查询结束月份。格式：yyyy-mm，例如：2021-01,默认值为查询开始月份 */
  EndMonth?: string;
  /** 查询成员列表。 最大100个 */
  MemberUins?: number[];
  /** 查询产品列表。 最大100个 */
  ProductCodes?: string[];
}

declare interface DescribeOrganizationFinancialByProductResponse {
  /** 当月总消耗。 */
  TotalCost?: number | null;
  /** 产品消耗详情。 */
  Items?: OrgProductFinancial[] | null;
  /** 总数目。 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMemberAuthAccountsRequest {
  /** 偏移量。取值是limit的整数倍。默认值 : 0。 */
  Offset: number;
  /** 限制数目。取值范围：1~50。默认值：10。 */
  Limit: number;
  /** 成员Uin。 */
  MemberUin: number;
  /** 策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取 */
  PolicyId: number;
}

declare interface DescribeOrganizationMemberAuthAccountsResponse {
  /** 列表 */
  Items?: OrgMemberAuthAccount[] | null;
  /** 总数目 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMemberAuthIdentitiesRequest {
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset: number;
  /** 限制数目。取值范围：1~50，默认值：10 */
  Limit: number;
  /** 组织成员Uin。入参MemberUin与IdentityId至少填写一个 */
  MemberUin?: number;
  /** 身份ID。入参MemberUin与IdentityId至少填写一个, 可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取 */
  IdentityId?: number;
}

declare interface DescribeOrganizationMemberAuthIdentitiesResponse {
  /** 授权身份列表。 */
  Items?: OrgMemberAuthIdentity[] | null;
  /** 总数目。 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMemberEmailBindRequest {
  /** 成员Uin。 */
  MemberUin: number;
}

declare interface DescribeOrganizationMemberEmailBindResponse {
  /** 绑定ID。 */
  BindId?: number | null;
  /** 申请时间。 */
  ApplyTime?: string | null;
  /** 邮箱地址。 */
  Email?: string | null;
  /** 安全手机号。 */
  Phone?: string | null;
  /** 绑定状态。 未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed */
  BindStatus?: string | null;
  /** 绑定时间。 */
  BindTime?: string | null;
  /** 失败说明。 */
  Description?: string | null;
  /** 安全手机绑定状态 。 未绑定：0，已绑定：1 */
  PhoneBind?: number | null;
  /** 国际区号。 */
  CountryCode?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMemberPoliciesRequest {
  /** 偏移量。取值是limit的整数倍。默认值 : 0。 */
  Offset: number;
  /** 限制数目。取值范围：1~50。默认值：10。 */
  Limit: number;
  /** 成员Uin。 */
  MemberUin: number;
  /** 搜索关键字。可用于策略名或描述搜索 */
  SearchKey?: string;
}

declare interface DescribeOrganizationMemberPoliciesResponse {
  /** 列表。 */
  Items?: OrgMemberPolicy[] | null;
  /** 总数目。 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMembersRequest {
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset: number;
  /** 限制数目。取值范围：1~50，默认值：10 */
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
  Items?: OrgMember[];
  /** 总数目。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationNodesRequest {
  /** 限制数目。最大50 */
  Limit: number;
  /** 偏移量。取值是limit的整数倍。默认值 : 0。 */
  Offset: number;
}

declare interface DescribeOrganizationNodesResponse {
  /** 总数。 */
  Total?: number | null;
  /** 列表详情。 */
  Items?: OrgNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  OrgId?: number | null;
  /** 创建者UIN。 */
  HostUin?: number | null;
  /** 创建者昵称。 */
  NickName?: string | null;
  /** 企业组织类型。 */
  OrgType?: number | null;
  /** 是否组织管理员。是：true ，否：false */
  IsManager?: boolean | null;
  /** 策略类型。财务管理：Financial */
  OrgPolicyType?: string | null;
  /** 策略名。 */
  OrgPolicyName?: string | null;
  /** 成员财务权限列表。 */
  OrgPermission?: OrgPermission[] | null;
  /** 组织根节点ID。 */
  RootNodeId?: number | null;
  /** 组织创建时间。 */
  CreateTime?: string | null;
  /** 成员加入时间。 */
  JoinTime?: string | null;
  /** 成员是否允许退出。允许：Allow，不允许：Denied */
  IsAllowQuit?: string | null;
  /** 代付者Uin。 */
  PayUin?: string | null;
  /** 代付者名称。 */
  PayName?: string | null;
  /** 是否可信服务管理员。是：true，否：false */
  IsAssignManager?: boolean | null;
  /** 是否实名主体管理员。是：true，否：false */
  IsAuthManager?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyConfigRequest {
  /** 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取 */
  OrganizationId: number;
  /** 策略类型。默认值0，取值范围：0-服务控制策略、1-标签策略 */
  Type?: number;
}

declare interface DescribePolicyConfigResponse {
  /** 开启状态。0-未开启、1-开启 */
  Status?: number;
  /** 策略类型。SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  Type?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyRequest {
  /** 策略Id。 */
  PolicyId: number;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  PolicyType?: string;
}

declare interface DescribePolicyResponse {
  /** 策略Id。 */
  PolicyId?: number;
  /** 策略名称。 */
  PolicyName?: string | null;
  /** 策略类型。1-自定义 2-预设策略 */
  Type?: number;
  /** 策略描述。 */
  Description?: string | null;
  /** 策略文档。 */
  PolicyDocument?: string | null;
  /** 策略更新时间。 */
  UpdateTime?: string | null;
  /** 策略创建时间。 */
  AddTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShareAreasRequest {
  /** 国际站：en，国内站：zh */
  Lang?: string;
}

declare interface DescribeShareAreasResponse {
  /** 详情 */
  Items?: ShareArea[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShareUnitMembersRequest {
  /** 共享单元ID。 */
  UnitId: string;
  /** 共享单元地域。 */
  Area: string;
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset: number;
  /** 限制数目。取值范围：1~50。 */
  Limit: number;
  /** 搜索关键字。支持成员Uin搜索。 */
  SearchKey?: string;
}

declare interface DescribeShareUnitMembersResponse {
  /** 总数目。 */
  Total?: number | null;
  /** 共享单元成员列表。 */
  Items?: ShareUnitMember[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShareUnitResourcesRequest {
  /** 共享单元ID。 */
  UnitId: string;
  /** 共享单元地域。 */
  Area: string;
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset: number;
  /** 限制数目。取值范围：1~50。 */
  Limit: number;
  /** 搜索关键字。支持产品资源ID搜索。 */
  SearchKey?: string;
  /** 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489) */
  Type?: string;
}

declare interface DescribeShareUnitResourcesResponse {
  /** 总数目。 */
  Total?: number | null;
  /** 共享单元资源列表。 */
  Items?: ShareUnitResource[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeShareUnitsRequest {
  /** 共享单元地域。可通过接口[DescribeShareAreas](https://cloud.tencent.com/document/product/850/103050)获取支持共享的地域。 */
  Area: string;
  /** 偏移量。取值是limit的整数倍。默认值 : 0。 */
  Offset: number;
  /** 限制数目。取值范围：1~50。 */
  Limit: number;
  /** 搜索关键字。支持UnitId和Name搜索。 */
  SearchKey?: string;
}

declare interface DescribeShareUnitsResponse {
  /** 总数目。 */
  Total?: number | null;
  /** 共享单元列表。 */
  Items?: ManagerShareUnit[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachPolicyRequest {
  /** 解绑策略目标ID。成员Uin或部门ID */
  TargetId: number;
  /** 目标类型。取值范围：NODE-部门、MEMBER-成员 */
  TargetType: string;
  /** 策略ID。 */
  PolicyId: number;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  Type?: string;
}

declare interface DetachPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisablePolicyTypeRequest {
  /** 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取 */
  OrganizationId: number;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  PolicyType: string;
}

declare interface DisablePolicyTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnablePolicyTypeRequest {
  /** 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取 */
  OrganizationId: number;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  PolicyType: string;
}

declare interface EnablePolicyTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListNonCompliantResourceRequest {
  /** 限制数目。取值范围：1~50。 */
  MaxResults: number;
  /** 成员Uin。 */
  MemberUin: number;
  /** 从上一页的响应中获取的下一页的Token值。如果是第一次请求，设置为空。 */
  PaginationToken?: string;
  /** 标签键。 */
  TagKey?: string;
}

declare interface ListNonCompliantResourceResponse {
  /** 资源及标签合规信息。 */
  Items?: ResourceTagMapping[] | null;
  /** 获取的下一页的Token值。 */
  PaginationToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOrganizationIdentityRequest {
  /** 偏移量。取值是limit的整数倍。默认值 : 0。 */
  Offset: number;
  /** 限制数目。取值范围：1~50。默认值：10。 */
  Limit: number;
  /** 名称搜索关键字。 */
  SearchKey?: string;
  /** 身份ID。可以通过身份ID搜索 */
  IdentityId?: number;
  /** 身份类型。取值范围 1-预设, 2-自定义 */
  IdentityType?: number;
}

declare interface ListOrganizationIdentityResponse {
  /** 总数。 */
  Total?: number | null;
  /** 条目详情。 */
  Items?: OrgIdentity[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListPoliciesForTargetRequest {
  /** 账号uin或者节点id。 */
  TargetId: number;
  /** 每页数量。默认值是 20，必须大于 0 且小于或等于 200 */
  Rp?: number;
  /** 页码。默认值是 1，从 1开始，不能大于 200 */
  Page?: number;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  PolicyType?: string;
  /** 搜索关键字。按照策略名称搜索 */
  Keyword?: string;
}

declare interface ListPoliciesForTargetResponse {
  /** 总数。 */
  TotalNum?: number;
  /** 目标关联的策略列表。 */
  List?: ListPoliciesForTarget[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListPoliciesRequest {
  /** 每页数量。默认值是 20，必须大于 0 且小于或等于 200 */
  Rp?: number;
  /** 页码。默认值是 1，从 1开始，不能大于 200 */
  Page?: number;
  /** 查询范围。取值范围： All-获取所有策略、QCS-只获取预设策略、Local-只获取自定义策略，默认值：All */
  Scope?: string;
  /** 搜索关键字。按照策略名搜索 */
  Keyword?: string;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  PolicyType?: string;
}

declare interface ListPoliciesResponse {
  /** 策略总数 */
  TotalNum?: number;
  /** 策略列表数据 */
  List?: ListPolicyNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTargetsForPolicyRequest {
  /** 策略Id。 */
  PolicyId: number;
  /** 每页数量。默认值是 20，必须大于 0 且小于或等于 200 */
  Rp?: number;
  /** 页码。默认值是 1，从 1开始，不能大于 200 */
  Page?: number;
  /** 策略类型。取值范围：All-全部、User-用户、Node-节点 */
  TargetType?: string;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  PolicyType?: string;
  /** 按照多个策略id搜索，空格隔开。 */
  Keyword?: string;
}

declare interface ListTargetsForPolicyResponse {
  /** 总数。 */
  TotalNum?: number;
  /** 指定SCP策略关联目标列表。 */
  List?: ListTargetsForPolicyNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MoveOrganizationNodeMembersRequest {
  /** 组织节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取 */
  NodeId: number;
  /** 成员Uin列表。 */
  MemberUin: number[];
}

declare interface MoveOrganizationNodeMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QuitOrganizationRequest {
  /** 企业组织ID */
  OrgId: number;
}

declare interface QuitOrganizationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOrganizationIdentityRequest {
  /** 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取 */
  IdentityId: number;
  /** 身份描述。 */
  Description: string;
  /** 身份策略。 */
  IdentityPolicy: IdentityPolicy[];
}

declare interface UpdateOrganizationIdentityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOrganizationMemberEmailBindRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 绑定ID。可以通过[DescribeOrganizationMemberEmailBind](https://cloud.tencent.com/document/product/850/93332)获取 */
  BindId: number;
  /** 邮箱地址。 */
  Email: string;
  /** 国际区号。 */
  CountryCode: string;
  /** 手机号。 */
  Phone: string;
}

declare interface UpdateOrganizationMemberEmailBindResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOrganizationMemberRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:, */
  Name?: string;
  /** 备注。最大长度为40个字符 */
  Remark?: string;
  /** 关系策略类型。PolicyType不为空，PermissionIds不能为空。取值：Financial */
  PolicyType?: string;
  /** 成员财务权限ID列表。PermissionIds不为空，PolicyType不能为空。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费、8-成本分析，如果有值，1、2 默认必须 */
  PermissionIds?: number[];
  /** 是否允许成员退出组织。取值：Allow-允许、Denied-不允许 */
  IsAllowQuit?: string;
  /** 代付者Uin。成员财务权限有代付费时需要，取值为成员对应主体的主体管理员Uin */
  PayUin?: string;
}

declare interface UpdateOrganizationMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOrganizationNodeRequest {
  /** 节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取 */
  NodeId: number;
  /** 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]- */
  Name?: string;
  /** 备注。 */
  Remark?: string;
}

declare interface UpdateOrganizationNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePolicyRequest {
  /** 需要编辑的策略ID。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取 */
  PolicyId: number;
  /** 策略描述。 */
  Description?: string;
  /** 策略内容。参考CAM策略语法 */
  Content?: string;
  /** 策略名。长度为1~128个字符，可以包含汉字、英文字母、数字和下划线（_） */
  Name?: string;
  /** 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略 */
  Type?: string;
}

declare interface UpdatePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateShareUnitRequest {
  /** 共享单元ID。 */
  UnitId: string;
  /** 共享单元名称。仅支持大小写字母、数字、-、以及_的组合，3-128个字符。 */
  Name?: string;
  /** 共享单元描述。最大128个字符。 */
  Description?: string;
  /** 共享范围。取值：1-仅允许集团组织内共享 2-允许共享给任意账号，默认值：1 */
  ShareScope?: number;
}

declare interface UpdateShareUnitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20181225 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-12-25' } }

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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CancelOrganizationInvitationRequest {
    /** 邀请ID */
    Id: number;
  }

  interface CancelOrganizationInvitationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteOrganizationMemberFromNodeRequest {
    /** 被删除成员UIN */
    MemberUin: number;
    /** 组织单元ID */
    NodeId: number;
  }

  interface DeleteOrganizationMemberFromNodeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteOrganizationMembersRequest {
    /** 被删除成员的UIN列表 */
    Uins: number[];
  }

  interface DeleteOrganizationMembersResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteOrganizationNodesRequest {
    /** 组织单元ID列表 */
    NodeIds: number[];
  }

  interface DeleteOrganizationNodesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteOrganizationRequest {
  }

  interface DeleteOrganizationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DenyOrganizationInvitationRequest {
    /** 邀请ID */
    Id: number;
  }

  interface DenyOrganizationInvitationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ListOrganizationNodesRequest {
  }

  interface ListOrganizationNodesResponse {
    /** 企业组织单元列表 */
    Nodes: OrgNode[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface MoveOrganizationMembersToNodeRequest {
    /** 组织单元ID */
    NodeId: number;
    /** 成员UIN列表 */
    Uins: number[];
  }

  interface MoveOrganizationMembersToNodeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface QuitOrganizationRequest {
    /** 企业组织ID */
    OrgId: number;
  }

  interface QuitOrganizationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Organization 集团账号管理} */
declare interface Organization {
  (): Versions;
  /** 添加组织成员邮箱 {@link AddOrganizationMemberEmailRequest} {@link AddOrganizationMemberEmailResponse} */
  AddOrganizationMemberEmail(data: AddOrganizationMemberEmailRequest, config?: AxiosRequestConfig): AxiosPromise<AddOrganizationMemberEmailResponse>;
  /** 添加企业组织节点 {@link AddOrganizationNodeRequest} {@link AddOrganizationNodeResponse} */
  AddOrganizationNode(data: AddOrganizationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<AddOrganizationNodeResponse>;
  /** 创建共享单元 {@link AddShareUnitRequest} {@link AddShareUnitResponse} */
  AddShareUnit(data: AddShareUnitRequest, config?: AxiosRequestConfig): AxiosPromise<AddShareUnitResponse>;
  /** 添加共享单元成员 {@link AddShareUnitMembersRequest} {@link AddShareUnitMembersResponse} */
  AddShareUnitMembers(data: AddShareUnitMembersRequest, config?: AxiosRequestConfig): AxiosPromise<AddShareUnitMembersResponse>;
  /** 添加共享单元资源 {@link AddShareUnitResourcesRequest} {@link AddShareUnitResourcesResponse} */
  AddShareUnitResources(data: AddShareUnitResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<AddShareUnitResourcesResponse>;
  /** 绑定策略 {@link AttachPolicyRequest} {@link AttachPolicyResponse} */
  AttachPolicy(data: AttachPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachPolicyResponse>;
  /** 绑定组织成员和组织管理员子账号的授权关系 {@link BindOrganizationMemberAuthAccountRequest} {@link BindOrganizationMemberAuthAccountResponse} */
  BindOrganizationMemberAuthAccount(data: BindOrganizationMemberAuthAccountRequest, config?: AxiosRequestConfig): AxiosPromise<BindOrganizationMemberAuthAccountResponse>;
  /** 取消组织成员和组织管理员子账号的授权关系 {@link CancelOrganizationMemberAuthAccountRequest} {@link CancelOrganizationMemberAuthAccountResponse} */
  CancelOrganizationMemberAuthAccount(data: CancelOrganizationMemberAuthAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CancelOrganizationMemberAuthAccountResponse>;
  /** 成员账号删除检查 {@link CheckAccountDeleteRequest} {@link CheckAccountDeleteResponse} */
  CheckAccountDelete(data: CheckAccountDeleteRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAccountDeleteResponse>;
  /** 创建企业组织 {@link CreateOrganizationRequest} {@link CreateOrganizationResponse} */
  CreateOrganization(data?: CreateOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationResponse>;
  /** 添加组织身份 {@link CreateOrganizationIdentityRequest} {@link CreateOrganizationIdentityResponse} */
  CreateOrganizationIdentity(data: CreateOrganizationIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationIdentityResponse>;
  /** 创建组织成员 {@link CreateOrganizationMemberRequest} {@link CreateOrganizationMemberResponse} */
  CreateOrganizationMember(data: CreateOrganizationMemberRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMemberResponse>;
  /** 添加组织成员访问授权 {@link CreateOrganizationMemberAuthIdentityRequest} {@link CreateOrganizationMemberAuthIdentityResponse} */
  CreateOrganizationMemberAuthIdentity(data: CreateOrganizationMemberAuthIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMemberAuthIdentityResponse>;
  /** 创建组织成员访问授权策略 {@link CreateOrganizationMemberPolicyRequest} {@link CreateOrganizationMemberPolicyResponse} */
  CreateOrganizationMemberPolicy(data: CreateOrganizationMemberPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMemberPolicyResponse>;
  /** 创建组织成员访问策略 {@link CreateOrganizationMembersPolicyRequest} {@link CreateOrganizationMembersPolicyResponse} */
  CreateOrganizationMembersPolicy(data: CreateOrganizationMembersPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationMembersPolicyResponse>;
  /** 创建策略 {@link CreatePolicyRequest} {@link CreatePolicyResponse} */
  CreatePolicy(data: CreatePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePolicyResponse>;
  /** 删除成员账号 {@link DeleteAccountRequest} {@link DeleteAccountResponse} */
  DeleteAccount(data: DeleteAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountResponse>;
  /** 删除企业组织 {@link DeleteOrganizationRequest} {@link DeleteOrganizationResponse} */
  DeleteOrganization(data?: DeleteOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationResponse>;
  /** 删除组织身份 {@link DeleteOrganizationIdentityRequest} {@link DeleteOrganizationIdentityResponse} */
  DeleteOrganizationIdentity(data: DeleteOrganizationIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationIdentityResponse>;
  /** 删除组织成员访问授权 {@link DeleteOrganizationMemberAuthIdentityRequest} {@link DeleteOrganizationMemberAuthIdentityResponse} */
  DeleteOrganizationMemberAuthIdentity(data: DeleteOrganizationMemberAuthIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationMemberAuthIdentityResponse>;
  /** 批量删除企业组织成员 {@link DeleteOrganizationMembersRequest} {@link DeleteOrganizationMembersResponse} */
  DeleteOrganizationMembers(data: DeleteOrganizationMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationMembersResponse>;
  /** 删除组织成员访问策略 {@link DeleteOrganizationMembersPolicyRequest} {@link DeleteOrganizationMembersPolicyResponse} */
  DeleteOrganizationMembersPolicy(data: DeleteOrganizationMembersPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationMembersPolicyResponse>;
  /** 批量删除企业组织节点 {@link DeleteOrganizationNodesRequest} {@link DeleteOrganizationNodesResponse} */
  DeleteOrganizationNodes(data: DeleteOrganizationNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationNodesResponse>;
  /** 删除策略 {@link DeletePolicyRequest} {@link DeletePolicyResponse} */
  DeletePolicy(data: DeletePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePolicyResponse>;
  /** 删除共享单元 {@link DeleteShareUnitRequest} {@link DeleteShareUnitResponse} */
  DeleteShareUnit(data: DeleteShareUnitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareUnitResponse>;
  /** 删除共享单元成员 {@link DeleteShareUnitMembersRequest} {@link DeleteShareUnitMembersResponse} */
  DeleteShareUnitMembers(data: DeleteShareUnitMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareUnitMembersResponse>;
  /** 删除共享单元资源 {@link DeleteShareUnitResourcesRequest} {@link DeleteShareUnitResourcesResponse} */
  DeleteShareUnitResources(data: DeleteShareUnitResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareUnitResourcesResponse>;
  /** 查询目标关联的有效策略 {@link DescribeEffectivePolicyRequest} {@link DescribeEffectivePolicyResponse} */
  DescribeEffectivePolicy(data: DescribeEffectivePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEffectivePolicyResponse>;
  /** 获取企业组织信息 {@link DescribeOrganizationRequest} {@link DescribeOrganizationResponse} */
  DescribeOrganization(data?: DescribeOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationResponse>;
  /** 获取已设置管理员的互信主体关系列表 {@link DescribeOrganizationAuthNodeRequest} {@link DescribeOrganizationAuthNodeResponse} */
  DescribeOrganizationAuthNode(data: DescribeOrganizationAuthNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationAuthNodeResponse>;
  /** 以成员维度获取组织财务信息 {@link DescribeOrganizationFinancialByMemberRequest} {@link DescribeOrganizationFinancialByMemberResponse} */
  DescribeOrganizationFinancialByMember(data: DescribeOrganizationFinancialByMemberRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationFinancialByMemberResponse>;
  /** 以月维度获取组织财务信息趋势 {@link DescribeOrganizationFinancialByMonthRequest} {@link DescribeOrganizationFinancialByMonthResponse} */
  DescribeOrganizationFinancialByMonth(data?: DescribeOrganizationFinancialByMonthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationFinancialByMonthResponse>;
  /** 以产品维度获取组织财务信息 {@link DescribeOrganizationFinancialByProductRequest} {@link DescribeOrganizationFinancialByProductResponse} */
  DescribeOrganizationFinancialByProduct(data: DescribeOrganizationFinancialByProductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationFinancialByProductResponse>;
  /** 获取组织成员被绑定授权关系的子账号列表 {@link DescribeOrganizationMemberAuthAccountsRequest} {@link DescribeOrganizationMemberAuthAccountsResponse} */
  DescribeOrganizationMemberAuthAccounts(data: DescribeOrganizationMemberAuthAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMemberAuthAccountsResponse>;
  /** 获取组织成员访问授权列表 {@link DescribeOrganizationMemberAuthIdentitiesRequest} {@link DescribeOrganizationMemberAuthIdentitiesResponse} */
  DescribeOrganizationMemberAuthIdentities(data: DescribeOrganizationMemberAuthIdentitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMemberAuthIdentitiesResponse>;
  /** 查询成员邮箱绑定详细信息 {@link DescribeOrganizationMemberEmailBindRequest} {@link DescribeOrganizationMemberEmailBindResponse} */
  DescribeOrganizationMemberEmailBind(data: DescribeOrganizationMemberEmailBindRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMemberEmailBindResponse>;
  /** 获取组织成员的授权策略列表 {@link DescribeOrganizationMemberPoliciesRequest} {@link DescribeOrganizationMemberPoliciesResponse} */
  DescribeOrganizationMemberPolicies(data: DescribeOrganizationMemberPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMemberPoliciesResponse>;
  /** 获取企业组织成员列表 {@link DescribeOrganizationMembersRequest} {@link DescribeOrganizationMembersResponse} */
  DescribeOrganizationMembers(data: DescribeOrganizationMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationMembersResponse>;
  /** 获取组织节点列表 {@link DescribeOrganizationNodesRequest} {@link DescribeOrganizationNodesResponse} */
  DescribeOrganizationNodes(data: DescribeOrganizationNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationNodesResponse>;
  /** 查看策略详情 {@link DescribePolicyRequest} {@link DescribePolicyResponse} */
  DescribePolicy(data: DescribePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyResponse>;
  /** 查看企业组织策略配置 {@link DescribePolicyConfigRequest} {@link DescribePolicyConfigResponse} */
  DescribePolicyConfig(data: DescribePolicyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyConfigResponse>;
  /** 获取可共享地域列表 {@link DescribeShareAreasRequest} {@link DescribeShareAreasResponse} */
  DescribeShareAreas(data?: DescribeShareAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShareAreasResponse>;
  /** 获取共享单元成员列表 {@link DescribeShareUnitMembersRequest} {@link DescribeShareUnitMembersResponse} */
  DescribeShareUnitMembers(data: DescribeShareUnitMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShareUnitMembersResponse>;
  /** 获取共享单元资源列表 {@link DescribeShareUnitResourcesRequest} {@link DescribeShareUnitResourcesResponse} */
  DescribeShareUnitResources(data: DescribeShareUnitResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShareUnitResourcesResponse>;
  /** 获取共享单元列表 {@link DescribeShareUnitsRequest} {@link DescribeShareUnitsResponse} */
  DescribeShareUnits(data: DescribeShareUnitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShareUnitsResponse>;
  /** 解绑策略 {@link DetachPolicyRequest} {@link DetachPolicyResponse} */
  DetachPolicy(data: DetachPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DetachPolicyResponse>;
  /** 禁用策略类型 {@link DisablePolicyTypeRequest} {@link DisablePolicyTypeResponse} */
  DisablePolicyType(data: DisablePolicyTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DisablePolicyTypeResponse>;
  /** 启用策略类型 {@link EnablePolicyTypeRequest} {@link EnablePolicyTypeResponse} */
  EnablePolicyType(data: EnablePolicyTypeRequest, config?: AxiosRequestConfig): AxiosPromise<EnablePolicyTypeResponse>;
  /** 获取成员标签检测不合规资源列表 {@link ListNonCompliantResourceRequest} {@link ListNonCompliantResourceResponse} */
  ListNonCompliantResource(data: ListNonCompliantResourceRequest, config?: AxiosRequestConfig): AxiosPromise<ListNonCompliantResourceResponse>;
  /** 获取组织成员访问身份列表 {@link ListOrganizationIdentityRequest} {@link ListOrganizationIdentityResponse} */
  ListOrganizationIdentity(data: ListOrganizationIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<ListOrganizationIdentityResponse>;
  /** 查看策略列表数据 {@link ListPoliciesRequest} {@link ListPoliciesResponse} */
  ListPolicies(data?: ListPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ListPoliciesResponse>;
  /** 查询目标关联的策略列表 {@link ListPoliciesForTargetRequest} {@link ListPoliciesForTargetResponse} */
  ListPoliciesForTarget(data: ListPoliciesForTargetRequest, config?: AxiosRequestConfig): AxiosPromise<ListPoliciesForTargetResponse>;
  /** 查询某个指定策略关联的目标列表 {@link ListTargetsForPolicyRequest} {@link ListTargetsForPolicyResponse} */
  ListTargetsForPolicy(data: ListTargetsForPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ListTargetsForPolicyResponse>;
  /** 移动成员到指定企业组织节点 {@link MoveOrganizationNodeMembersRequest} {@link MoveOrganizationNodeMembersResponse} */
  MoveOrganizationNodeMembers(data: MoveOrganizationNodeMembersRequest, config?: AxiosRequestConfig): AxiosPromise<MoveOrganizationNodeMembersResponse>;
  /** 退出企业组织 {@link QuitOrganizationRequest} {@link QuitOrganizationResponse} */
  QuitOrganization(data: QuitOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<QuitOrganizationResponse>;
  /** 更新组织身份 {@link UpdateOrganizationIdentityRequest} {@link UpdateOrganizationIdentityResponse} */
  UpdateOrganizationIdentity(data: UpdateOrganizationIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOrganizationIdentityResponse>;
  /** 更新组织成员信息 {@link UpdateOrganizationMemberRequest} {@link UpdateOrganizationMemberResponse} */
  UpdateOrganizationMember(data: UpdateOrganizationMemberRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOrganizationMemberResponse>;
  /** 修改绑定成员邮箱 {@link UpdateOrganizationMemberEmailBindRequest} {@link UpdateOrganizationMemberEmailBindResponse} */
  UpdateOrganizationMemberEmailBind(data: UpdateOrganizationMemberEmailBindRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOrganizationMemberEmailBindResponse>;
  /** 更新企业组织节点 {@link UpdateOrganizationNodeRequest} {@link UpdateOrganizationNodeResponse} */
  UpdateOrganizationNode(data: UpdateOrganizationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOrganizationNodeResponse>;
  /** 编辑策略 {@link UpdatePolicyRequest} {@link UpdatePolicyResponse} */
  UpdatePolicy(data: UpdatePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePolicyResponse>;
  /** 更新共享单元 {@link UpdateShareUnitRequest} {@link UpdateShareUnitResponse} */
  UpdateShareUnit(data: UpdateShareUnitRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateShareUnitResponse>;
  /** 接受加入企业组织邀请 {@link V20181225.AcceptOrganizationInvitationRequest} {@link V20181225.AcceptOrganizationInvitationResponse} */
  AcceptOrganizationInvitation(data: V20181225.AcceptOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.AcceptOrganizationInvitationResponse>;
  /** 添加企业组织单元 {@link V20181225.AddOrganizationNodeRequest} {@link V20181225.AddOrganizationNodeResponse} */
  AddOrganizationNode(data: V20181225.AddOrganizationNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.AddOrganizationNodeResponse>;
  /** 取消企业组织邀请 {@link V20181225.CancelOrganizationInvitationRequest} {@link V20181225.CancelOrganizationInvitationResponse} */
  CancelOrganizationInvitation(data: V20181225.CancelOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.CancelOrganizationInvitationResponse>;
  /** 创建企业组织 {@link V20181225.CreateOrganizationRequest} {@link V20181225.CreateOrganizationResponse} */
  CreateOrganization(data: V20181225.CreateOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.CreateOrganizationResponse>;
  /** 删除企业组织 {@link V20181225.DeleteOrganizationRequest} {@link V20181225.DeleteOrganizationResponse} */
  DeleteOrganization(data: V20181225.DeleteOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationResponse>;
  /** 删除企业组织成员 {@link V20181225.DeleteOrganizationMemberFromNodeRequest} {@link V20181225.DeleteOrganizationMemberFromNodeResponse} */
  DeleteOrganizationMemberFromNode(data: V20181225.DeleteOrganizationMemberFromNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationMemberFromNodeResponse>;
  /** 批量删除企业组织成员 {@link V20181225.DeleteOrganizationMembersRequest} {@link V20181225.DeleteOrganizationMembersResponse} */
  DeleteOrganizationMembers(data: V20181225.DeleteOrganizationMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationMembersResponse>;
  /** 批量删除企业组织单元 {@link V20181225.DeleteOrganizationNodesRequest} {@link V20181225.DeleteOrganizationNodesResponse} */
  DeleteOrganizationNodes(data: V20181225.DeleteOrganizationNodesRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DeleteOrganizationNodesResponse>;
  /** 拒绝企业组织邀请 {@link V20181225.DenyOrganizationInvitationRequest} {@link V20181225.DenyOrganizationInvitationResponse} */
  DenyOrganizationInvitation(data: V20181225.DenyOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.DenyOrganizationInvitationResponse>;
  /** 获取企业组织信息 {@link V20181225.GetOrganizationRequest} {@link V20181225.GetOrganizationResponse} */
  GetOrganization(data: V20181225.GetOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.GetOrganizationResponse>;
  /** 获取企业组织成员 {@link V20181225.GetOrganizationMemberRequest} {@link V20181225.GetOrganizationMemberResponse} */
  GetOrganizationMember(data: V20181225.GetOrganizationMemberRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.GetOrganizationMemberResponse>;
  /** 获取邀请信息列表 {@link V20181225.ListOrganizationInvitationsRequest} {@link V20181225.ListOrganizationInvitationsResponse} */
  ListOrganizationInvitations(data: V20181225.ListOrganizationInvitationsRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationInvitationsResponse>;
  /** 获取企业组织成员列表 {@link V20181225.ListOrganizationMembersRequest} {@link V20181225.ListOrganizationMembersResponse} */
  ListOrganizationMembers(data: V20181225.ListOrganizationMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationMembersResponse>;
  /** 获取企业组织单元成员列表 {@link V20181225.ListOrganizationNodeMembersRequest} {@link V20181225.ListOrganizationNodeMembersResponse} */
  ListOrganizationNodeMembers(data: V20181225.ListOrganizationNodeMembersRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationNodeMembersResponse>;
  /** 获取企业组织单元列表 {@link V20181225.ListOrganizationNodesRequest} {@link V20181225.ListOrganizationNodesResponse} */
  ListOrganizationNodes(data: V20181225.ListOrganizationNodesRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.ListOrganizationNodesResponse>;
  /** 移动成员到指定企业组织单元 {@link V20181225.MoveOrganizationMembersToNodeRequest} {@link V20181225.MoveOrganizationMembersToNodeResponse} */
  MoveOrganizationMembersToNode(data: V20181225.MoveOrganizationMembersToNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.MoveOrganizationMembersToNodeResponse>;
  /** 退出企业组织 {@link V20181225.QuitOrganizationRequest} {@link V20181225.QuitOrganizationResponse} */
  QuitOrganization(data: V20181225.QuitOrganizationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.QuitOrganizationResponse>;
  /** 发送企业组织邀请 {@link V20181225.SendOrganizationInvitationRequest} {@link V20181225.SendOrganizationInvitationResponse} */
  SendOrganizationInvitation(data: V20181225.SendOrganizationInvitationRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.SendOrganizationInvitationResponse>;
  /** 更新企业成员信息 {@link V20181225.UpdateOrganizationMemberRequest} {@link V20181225.UpdateOrganizationMemberResponse} */
  UpdateOrganizationMember(data: V20181225.UpdateOrganizationMemberRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.UpdateOrganizationMemberResponse>;
  /** 更新企业组织单元 {@link V20181225.UpdateOrganizationNodeRequest} {@link V20181225.UpdateOrganizationNodeResponse} */
  UpdateOrganizationNode(data: V20181225.UpdateOrganizationNodeRequest, config: AxiosRequestConfig & V20181225.VersionHeader): AxiosPromise<V20181225.UpdateOrganizationNodeResponse>;
}

export declare type Versions = ["2021-03-31", "2018-12-25"];

export default Organization;
