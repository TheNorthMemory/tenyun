/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 互信主体主要信息 */
declare interface AuthNode {
  /** 互信主体关系ID */
  RelationId?: number;
  /** 互信主体名称 */
  AuthName?: string;
  /** 主体管理员 */
  Manager?: MemberMainInfo;
}

/** 野鹤实名互信申请证明文件 */
declare interface AuthRelationFile {
  /** 文件名。 */
  Name: string;
  /** 文件路径。 */
  Url: string;
}

/** 有效策略。 */
declare interface EffectivePolicy {
  /** 目标ID。 */
  TargetId?: number;
  /** 有效策略内容。 */
  PolicyContent?: string;
  /** 有效策略更新时间。 */
  LastUpdatedTimestamp?: number;
}

/** 用户组信息。 */
declare interface GroupInfo {
  /** 用户组的名称。 */
  GroupName?: string;
  /** 用户组的描述。 */
  Description?: string;
  /** 用户组的创建时间。 */
  CreateTime?: string;
  /** 用户组的类型 Manual：手动创建，Synchronized：外部导入。 */
  GroupType?: string;
  /** 用户组的修改时间。 */
  UpdateTime?: string;
  /** 用户组的 ID。 */
  GroupId?: string;
  /** 组员数量。 */
  MemberCount?: number;
  /** 如果有入参FilterUsers，用户在用户组返回true，否则返回false */
  IsSelected?: boolean;
}

/** 用户信息 */
declare interface GroupMembers {
  /** 查询username。 */
  UserName?: string;
  /** 用户的显示名称。 */
  DisplayName?: string;
  /** 用户的描述。 */
  Description?: string;
  /** 用户的电子邮箱。目录内必须唯一。 */
  Email?: string;
  /** 用户状态 Enabled：启用， Disabled：禁用。 */
  UserStatus?: string;
  /** 用户类型 Manual：手动创建，Synchronized：外部导入。 */
  UserType?: string;
  /** 用户 ID */
  UserId?: string;
  /** 用户加入用户组的时间 */
  JoinTime?: string;
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

/** 用户加入的用户组 */
declare interface JoinedGroups {
  /** 用户组的名称。 */
  GroupName?: string;
  /** 用户组的描述。 */
  Description?: string;
  /** 用户组 ID。 */
  GroupId?: string;
  /** 用户组的类型。取值：Manual：手动创建。Synchronized：外部同步。 */
  GroupType?: string;
  /** 加入用户组的时间 */
  JoinTime?: string;
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
  IdentityId?: number;
  /** 身份名称。 */
  IdentityAliasName?: string;
}

/** 成员主要信息 */
declare interface MemberMainInfo {
  /** 成员uin */
  MemberUin?: number;
  /** 成员名称 */
  MemberName?: string;
}

/** 部门主要信息 */
declare interface NodeMainInfo {
  /** 部门ID */
  NodeId: number | null;
  /** 部门名称 */
  NodeName: string | null;
}

/** 不允许删除的原因。 */
declare interface NotAllowReason {
  /** 是否创建的成员。true-是、false-否；成员不是创建的成员不允许删除 */
  IsCreateMember?: boolean;
  /** 成员删除许可。true-开启、false-关闭；成员删除许可关闭时不允许删除 */
  DeletionPermission?: boolean;
  /** 是否可信服务委派管理员。true-是、false-否；成员是可信服务委派管理员不允许删除 */
  IsAssignManager?: boolean;
  /** 是否主体管理员。true-是、false-否；成员是主体管理员不允许删除 */
  IsAuthManager?: boolean;
  /** 是否共享资源管理员。true-是、false-否；成员是共享资源管理员不允许删除 */
  IsShareManager?: boolean;
  /** 成员是否设置了操作审批。true-是、false-否；成员设置了操作审批时不允许删除 */
  OperateProcess?: boolean;
  /** 是否允许解除成员财务权限。true-是、false-否；成员不能解除财务权限时不允许删除 */
  BillingPermission?: boolean;
  /** 存在的资源列表。账号存在资源时不允许删除 */
  ExistResources?: string[];
  /** 检测失败的资源列表。账号有资源检测失败时不允许删除。 */
  DetectFailedResources?: string[];
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
  IdentityId?: number;
  /** 身份名称。 */
  IdentityAliasName?: string;
  /** 描述。 */
  Description?: string;
  /** 身份策略。 */
  IdentityPolicy?: IdentityPolicy[];
  /** 身份类型。 1-预设、 2-自定义 */
  IdentityType?: number;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 企业组织成员 */
declare interface OrgMember {
  /** 成员Uin */
  MemberUin?: number;
  /** 成员名 */
  Name?: string;
  /** 成员类型，邀请：Invite， 创建：Create */
  MemberType?: string;
  /** 关系策略类型 */
  OrgPolicyType?: string;
  /** 关系策略名 */
  OrgPolicyName?: string;
  /** 关系策略权限 */
  OrgPermission?: OrgPermission[];
  /** 所属节点ID */
  NodeId?: number;
  /** 所属节点名 */
  NodeName?: string;
  /** 备注 */
  Remark?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 是否允许成员退出。允许：Allow，不允许：Denied。 */
  IsAllowQuit?: string;
  /** 代付者Uin */
  PayUin?: string;
  /** 代付者名称 */
  PayName?: string;
  /** 管理身份 */
  OrgIdentity?: MemberIdentity[];
  /** 安全信息绑定状态 未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed */
  BindStatus?: string;
  /** 成员权限状态 已确认：Confirmed ，待确认：UnConfirmed */
  PermissionStatus?: string;
  /** 成员标签列表 */
  Tags?: Tag[];
  /** 腾讯云昵称 */
  NickName?: string;
}

/** 成员和子账号的授权关系 */
declare interface OrgMemberAuthAccount {
  /** 组织子账号Uin。 */
  OrgSubAccountUin?: number;
  /** 策略ID。 */
  PolicyId?: number;
  /** 策略名。 */
  PolicyName?: string;
  /** 身份ID。 */
  IdentityId?: number;
  /** 身份角色名。 */
  IdentityRoleName?: string;
  /** 身份角色别名。 */
  IdentityRoleAliasName?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
  /** 子账号名称 */
  OrgSubAccountName?: string;
}

/** 组织成员可授权的身份 */
declare interface OrgMemberAuthIdentity {
  /** 身份ID。 */
  IdentityId?: number;
  /** 身份的角色名。 */
  IdentityRoleName?: string;
  /** 身份的角色别名。 */
  IdentityRoleAliasName?: string;
  /** 身份描述。 */
  Description?: string;
  /** 首次配置成功的时间。 */
  CreateTime?: string;
  /** 最后一次配置成功的时间。 */
  UpdateTime?: string;
  /** 身份类型。取值： 1-预设身份 2-自定义身份 */
  IdentityType?: number;
  /** 配置状态。取值：1-配置完成 2-需重新配置 */
  Status?: number;
  /** 成员Uin。 */
  MemberUin?: number;
  /** 成员名称。 */
  MemberName?: string;
}

/** 组织成员财务信息。 */
declare interface OrgMemberFinancial {
  /** 成员Uin。 */
  MemberUin?: number;
  /** 成员名称。 */
  MemberName?: string;
  /** 消耗金额，单位：元。 */
  TotalCost?: number;
  /** 占比%。 */
  Ratio?: string;
}

/** 组织成员被授权的策略 */
declare interface OrgMemberPolicy {
  /** 策略ID。 */
  PolicyId?: number;
  /** 策略名。 */
  PolicyName?: string;
  /** 身份ID。 */
  IdentityId?: number;
  /** 身份角色名。 */
  IdentityRoleName?: string;
  /** 身份角色别名。 */
  IdentityRoleAliasName?: string;
  /** 描述。 */
  Description?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 企业组织单元 */
declare interface OrgNode {
  /** 组织节点ID */
  NodeId?: number;
  /** 名称 */
  Name?: string;
  /** 父节点ID */
  ParentNodeId?: number;
  /** 备注 */
  Remark?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 成员标签列表 */
  Tags?: Tag[];
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

/** 集团服务设置 */
declare interface OrganizationServiceAssign {
  /** 集团服务ID。 */
  ServiceId?: number;
  /** 集团服务产品名称。 */
  ProductName?: string;
  /** 是否支持委派。取值: 1-是 2-否 */
  IsAssign?: number;
  /** 集团服务描述。 */
  Description?: string;
  /** 当前委派管理员数。 */
  MemberNum?: string;
  /** 帮助文档。 */
  Document?: string;
  /** 集团服务产品控制台路径。 */
  ConsoleUrl?: string;
  /** 是否接入使用状态。取值: 1-是 2-否 */
  IsUsageStatus?: number;
  /** 委派管理员数量限制。 */
  CanAssignCount?: number;
  /** 集团服务产品标识。 */
  Product?: string;
  /** 是否支持集团服务授权。取值 1-是、2-否 */
  ServiceGrant?: number;
  /** 集团服务授权启用状态。ServiceGrant值为1时该字段有效 ，取值：Enabled-开启 Disabled-关闭 */
  GrantStatus?: string;
  /** 是否支持设置委派管理范围。取值: 1-是 2-否 */
  IsSetManagementScope?: number;
}

/** 集团服务委派成员信息 */
declare interface OrganizationServiceAssignMember {
  /** 集团服务ID。 */
  ServiceId?: number;
  /** 集团服务产品名称。 */
  ProductName?: string;
  /** 委派管理员Uin。 */
  MemberUin?: number;
  /** 委派管理员名称。 */
  MemberName?: string;
  /** 启用状态 。取值：0-服务无启用状态 1-已启用 2-未启用 */
  UsageStatus?: number;
  /** 委派时间。 */
  CreateTime?: string;
  /** 委派管理员管理范围。取值: 1-全部成员 2-部分成员 */
  ManagementScope?: number;
  /** 管理的成员Uin列表。ManagementScope值为2时该参数有效 */
  ManagementScopeMembers?: MemberMainInfo[];
  /** 管理的部门ID列表。ManagementScope值为2时该参数有效 */
  ManagementScopeNodes?: NodeMainInfo[];
}

/** 策略详情 */
declare interface PolicyDetail {
  /** 策略ID。 */
  PolicyId: number;
  /** 策略名称。 */
  PolicyName?: string | null;
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
  Resource?: string;
  /** 合规详情。 */
  ComplianceDetails?: TagComplianceDetails;
  /** 资源标签。 */
  Tags?: Tags[];
}

/** 授权成员账号信息 */
declare interface RoleAssignmentInfo {
  /** CAM 用户同步的身份 ID。取值：当PrincipalType取值为Group时，该值为CIC用户组 ID（g-********）。当PrincipalType取值为User时，该值为CIC用户 ID（u-********）。 */
  PrincipalId?: string;
  /** CAM 用户同步的身份类型。取值：User：表示该 CAM 用户同步的身份是CIC用户。Group：表示该 CAM 用户同步的身份是CIC用户组。 */
  PrincipalType?: string;
  /** 同步集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** 同步集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
}

/** 成员账号的授权详情 */
declare interface RoleAssignments {
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
  /** 权限配置名称。 */
  RoleConfigurationName?: string;
  /** 集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号。 */
  TargetType?: string;
  /** CAM 用户同步的身份 ID。取值： 当PrincipalType取值为Group时，该值为CIC 用户组 ID（g-********）。 当PrincipalType取值为User时，该值为CIC 用户 ID（u-********）。 */
  PrincipalId?: string;
  /** CAM 用户同步的身份类型。取值： User：表示该 CAM 用户同步的身份是CIC用户。 Group：表示该 CAM 用户同步的身份是CIC用户组。 */
  PrincipalType?: string;
  /** 用户名称或者用户组名称 */
  PrincipalName?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
  /** 集团账号目标账号的名称。 */
  TargetName?: string;
}

/** CIC权限配置 */
declare interface RoleConfiguration {
  /** 权限配置配置ID。 */
  RoleConfigurationId?: string;
  /** 权限配置配名称。 */
  RoleConfigurationName?: string;
  /** 权限配置的描述。 */
  Description?: string;
  /** 会话持续时间。CIC 用户使用访问配置访问成员账号时，会话最多保持的时间。单位：秒。 */
  SessionDuration?: number;
  /** 初始访问页面。CIC 用户使用访问配置访问成员账号时，初始访问的页面地址。 */
  RelayState?: string;
  /** 权限配置的创建时间。 */
  CreateTime?: string;
  /** 权限配置的更新时间。 */
  UpdateTime?: string;
  /** 如果有入参FilterTargets查询成员账号是否配置过权限，配置了返回true，否则返回false。 */
  IsSelected?: boolean;
}

/** 权限配置同步 */
declare interface RoleConfigurationProvisionings {
  /** Deployed: 部署成功 DeployedRequired：需要重新部署 DeployFailed：部署失败 */
  DeploymentStatus?: string;
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
  /** 权限配置名称。 */
  RoleConfigurationName?: string;
  /** 集团账号目标账号的UIN */
  TargetUin?: number;
  /** 集团账号目标账号的名称。 */
  TargetName?: string;
  /** 创建时间， */
  CreateTime?: string;
  /** 修改时间， */
  UpdateTime?: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
}

/** CIC的权限策略 */
declare interface RolePolicie {
  /** 策略ID。 */
  RolePolicyId?: number | null;
  /** 权限策略名称 */
  RolePolicyName?: string;
  /** 权限策略类型 */
  RolePolicyType?: string;
  /** 自定义策略内容。仅自定义策略返回该参数。 */
  RolePolicyDocument?: string;
  /** 权限策略被添加到权限配置的时间。 */
  AddTime?: string;
}

/** 同步部署角色任务状态信息。 */
declare interface RoleProvisioningsTask {
  /** 任务ID。 */
  TaskId?: string;
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
  /** 权限配置名称。 */
  RoleConfigurationName?: string;
  /** 授权的集团账号目标账号的UIN */
  TargetUin?: number;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string | null;
  /** 任务类型。 */
  TaskType?: string | null;
  /** 任务状态：InProgress: 进行中，Failed: 失败 3:Success: 成功 */
  TaskStatus?: string | null;
}

/** SAML 签名证书信息 */
declare interface SAMLIdPCertificate {
  /** 证书序列号。 */
  SerialNumber?: string;
  /** 证书颁发者。 */
  Issuer?: string;
  /** 证书版本。 */
  Version?: number;
  /** 证书ID。 */
  CertificateId?: string;
  /** PEM 格式的公钥证书（Base64 编码）。 */
  PublicKey?: string;
  /** 证书的签名算法。 */
  SignatureAlgorithm?: string;
  /** 证书的过期时间。 */
  NotAfter?: string;
  /** 证书的创建时间。 */
  NotBefore?: string;
  /** 证书的主体。 */
  Subject?: string;
  /** PEM 格式的 X509 证书。 */
  X509Certificate?: string;
}

/** saml 身份提供商配置信息。 */
declare interface SAMLIdentityProviderConfiguration {
  /** IdP 标识。 */
  EntityId?: string;
  /** SSO 登录的启用状态。取值： Enabled：启用。 Disabled（默认值）：禁用。 */
  SSOStatus?: string;
  /** IdP 元数据文档（Base64 编码）。 */
  EncodedMetadataDocument?: string;
  /** X509证书ID。 */
  CertificateIds?: string[];
  /** IdP 的登录地址。 */
  LoginUrl?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** SAML服务提供商信息 */
declare interface SAMLServiceProvider {
  /** https://tencentcloudsso.com/saml/sp/z-sjw8ensa** */
  EntityId?: string;
  /** 空间ID。 */
  ZoneId?: string;
  /** SP 元数据文档（Base64 编码）。 */
  EncodedMetadataDocument?: string;
  /** SP 的 ACS URL。 */
  AcsUrl?: string;
}

/** SCIM密钥 */
declare interface SCIMCredential {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId?: string;
  /** SCIM密钥状态，Enabled已开启，Disabled已关闭。 */
  Status?: string;
  /** SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。 */
  CredentialId?: string;
  /** SCIM密钥类型。 */
  CredentialType?: string;
  /** SCIM 密钥的创建时间。 */
  CreateTime?: string;
  /** SCIM 密钥的过期时间。 */
  ExpireTime?: string;
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

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

/** 标签合规信息 */
declare interface TagComplianceDetails {
  /** 合规状态。true-合规，false-不合规 */
  ComplianceStatus?: boolean;
  /** 值不合规的标签键列表。 */
  KeysWithNonCompliantValues?: string[];
  /** 键不合规的标签键列表。 */
  NonCompliantKeys?: string[];
}

/** 标签键值对 */
declare interface Tags {
  /** 标签键。 */
  TagKey?: string;
  /** 标签值。 */
  TagValue?: string;
}

/** 任务状态信息。 */
declare interface TaskInfo {
  /** 任务ID。 */
  TaskId?: string;
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
  /** 权限配置名称。 */
  RoleConfigurationName?: string;
  /** 授权的目标成员账号的UIN */
  TargetUin?: number;
  /** 同步的目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
  /** 用户授权的身份ID,如果是身份类型是CIC用户,则为用户ID; 如果是用户组，则为用户组ID; */
  PrincipalId?: string;
  /** 用户授权的身份类型, User代表CIC用户, Group代表CIC用户组 */
  PrincipalType?: string;
  /** 任务类型。 */
  TaskType?: string;
  /** InProgress：任务执行中。 Success：任务执行成功。 Failed：任务执行失败。 */
  Status?: string;
  /** 失败原因 */
  FailureReason?: string | null;
}

/** 任务状态信息。 */
declare interface TaskStatus {
  /** 任务状态。取值： InProgress：任务执行中。 Success：任务执行成功。 Failed：任务执行失败。 */
  Status?: string;
  /** 任务 ID。 */
  TaskId?: string;
  /** 任务类型。取值：ProvisionRoleConfiguration：部署权限配置。DeprovisionRoleConfiguration：解除权限配置部署。CreateRoleAssignment：在成员 账号上授权。DeleteRoleAssignment：移除 成员 账号上的授权。 */
  TaskType?: string;
  /** 任务失败原因。说明只有Status为Failed，才会显示该参数。 */
  FailureReason?: string;
}

/** 用户信息 */
declare interface UserInfo {
  /** 查询username。 */
  UserName?: string;
  /** 用户的名。 */
  FirstName?: string;
  /** 用户的姓。 */
  LastName?: string;
  /** 用户的显示名称。 */
  DisplayName?: string;
  /** 用户的描述。 */
  Description?: string;
  /** 用户的电子邮箱。目录内必须唯一。 */
  Email?: string;
  /** 用户状态 Enabled：启用， Disabled：禁用。 */
  UserStatus?: string;
  /** 用户类型 Manual：手动创建，Synchronized：外部导入。 */
  UserType?: string;
  /** 用户 ID */
  UserId?: string;
  /** 用户的创建时间 */
  CreateTime?: string;
  /** 用户的修改时间 */
  UpdateTime?: string;
  /** 是否选中 */
  IsSelected?: boolean;
}

/** 用户同步信息 */
declare interface UserProvisioning {
  /** CAM 用户同步的状态。取值：Enabled：CAM 用户同步已启用。Disabled：CAM 用户同步未启用。 */
  UserProvisioningId?: string;
  /** 描述。 */
  Description?: string;
  /** CAM 用户同步的状态。取值：Enabled：CAM 用户同步已启用。Disabled：CAM 用户同步未启用。 */
  Status?: string;
  /** CAM 用户同步的身份 ID。取值：当PrincipalType取值为Group时，该值为CIC用户组 ID（g-********）。当PrincipalType取值为User时，该值为CIC用户 ID（u-********）。 */
  PrincipalId?: string;
  /** CAM 用户同步的身份名称。取值：当PrincipalType取值为Group时，该值为CIC用户组名称。当PrincipalType取值为User时，该值为CIC用户名称。 */
  PrincipalName?: string;
  /** CAM 用户同步的身份类型。取值：User：表示该 CAM 用户同步的身份是CIC用户。Group：表示该 CAM 用户同步的身份是CIC用户组。 */
  PrincipalType?: string;
  /** 集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** 集团账号目标账号的名称。 */
  TargetName?: string;
  /** 冲突策略。当CIC 用户同步到 CAM 时，如果 CAM 中存在同名用户时的处理策略。取值： KeepBoth：两者都保留。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则对CIC 用户的用户名添加后缀_cic后尝试创建该用户名的 CAM 用户。 TakeOver：替换。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则直接将已经存在的 CAM 用户替换为CIC 同步用户。 */
  DuplicationStrategy?: string;
  /** 删除策略。删除 CAM 用户同步时，对已同步的 CAM 用户的处理策略。取值： Delete：删除。删除 CAM 用户同步时，会删除从CIC 已经同步到 CAM 中的 CAM 用户。 Keep：保留。删除 RAM 用户同步时，会保留从CIC 已经同步到 CAM 中的 CAM 用户。 */
  DeletionStrategy?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
}

/** 用户同步任务状态信息。 */
declare interface UserProvisioningsTask {
  /** 任务ID。 */
  TaskId?: string;
  /** 授权的集团账号目标账号的UIN */
  TargetUin?: number;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
  /** 任务类型。StartProvisioning：用户同步，DeleteProvisioning：删除用户同步 */
  TaskType?: string;
  /** 任务状态：InProgress: 进行中，Failed: 失败 3:Success: 成功 */
  TaskStatus?: string;
  /** 用户同步ID。 */
  UserProvisioningId?: string;
  /** CAM 用户同步的身份 ID。取值： 当PrincipalType取值为Group时，该值为CIC 用户组 ID（g-********）。 当PrincipalType取值为User时，该值为CIC 用户 ID（u-********）。 */
  PrincipalId?: string;
  /** CAM 用户同步的身份类型。取值： User：表示该 CAM 用户同步的身份是CIC 用户。 Group：表示该 CAM 用户同步的身份是CIC 用户组。 */
  PrincipalType?: string;
  /** 用户或者用户组名称。 */
  PrincipalName?: string;
  /** 冲突策略。KeepBoth:两者都保留;TakeOver:替换 */
  DuplicationStrategy?: string;
  /** 删除策略。Delete:删除;Keep:保留 */
  DeletionStrategy?: string;
}

/** CAM用户同步信息 */
declare interface UserSyncProvisioning {
  /** 描述。 */
  Description?: string;
  /** CAM 用户同步的身份 ID。取值：当PrincipalType取值为Group时，该值为CIC用户组 ID（g-********）。当PrincipalType取值为User时，该值为CIC用户 ID（u-********）。 */
  PrincipalId?: string;
  /** CAM 用户同步的身份类型。取值：User：表示该 CAM 用户同步的身份是CIC用户。Group：表示该 CAM 用户同步的身份是CIC用户组。 */
  PrincipalType?: string;
  /** 同步的集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** 冲突策略。当CIC 用户同步到 CAM 时，如果 CAM 中存在同名用户时的处理策略。取值： KeepBoth：两者都保留。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则对CIC 用户的用户名添加后缀_cic后尝试创建该用户名的 CAM 用户。 TakeOver：替换。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则直接将已经存在的 CAM 用户替换为CIC 同步用户。 */
  DuplicationStrategy?: string;
  /** 删除策略。删除 CAM 用户同步时，对已同步的 CAM 用户的处理策略。取值： Delete：删除。删除 CAM 用户同步时，会删除从CIC 已经同步到 CAM 中的 CAM 用户。 Keep：保留。删除 RAM 用户同步时，会保留从CIC 已经同步到 CAM 中的 CAM 用户。 */
  DeletionStrategy?: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
}

/** CIC的空间统计 */
declare interface ZoneStatistics {
  /** 用户配额。 */
  UserQuota?: number;
  /** 用户组配额。 */
  GroupQuota?: number;
  /** 权限配置配额。 */
  RoleConfigurationQuota?: number;
  /** 权限配置绑定的系统策略配额。 */
  SystemPolicyPerRoleConfigurationQuota?: number;
  /** 用户数。 */
  UserCount?: number;
  /** 用户组数。 */
  GroupCount?: number;
  /** 权限配置数 */
  RoleConfigurationCount?: number;
  /** 同步用户数。 */
  UserProvisioningCount?: number;
  /** 同步角色数。 */
  RoleConfigurationSyncCount?: number;
}

declare interface AcceptJoinShareUnitInvitationRequest {
  /** 共享单元ID。 */
  UnitId: string;
}

declare interface AcceptJoinShareUnitInvitationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddExternalSAMLIdPCertificateRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** PEM 格式的 X509 证书。 由 SAML 身份提供商提供。 */
  X509Certificate: string;
}

declare interface AddExternalSAMLIdPCertificateResponse {
  /** SAML 签名证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  /** 部门标签列表。最大10个 */
  Tags?: Tag[];
}

declare interface AddOrganizationNodeResponse {
  /** 节点ID。 */
  NodeId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddPermissionPolicyToRoleConfigurationRequest {
  /** 空间 ID */
  ZoneId: string;
  /** 权限配置 ID */
  RoleConfigurationId: string;
  /** 权限策略类型。取值： System：系统策略。复用 CAM 的系统策略。 Custom: 自定义策略。按照 CAM 权限策略语法和结构编写的自定义策略。 */
  RolePolicyType: string;
  /** 权限策略名称，长度最大为 20策略，每个策略长度最大32个字符。如果要添加系统策略，建议使用RolePolicies参数。自定义策略时，数组长度最大为1。 */
  RolePolicyNames?: string[];
  /** 添加的系统策略详情。 */
  RolePolicies?: PolicyDetail[];
  /** 自定义策略内容。长度：最大 4096 个字符。当RolePolicyType为Inline时，该参数必须配置。关于权限策略的语法和结构，请参见权限策略语法和结构。 */
  CustomPolicyDocument?: string;
  /** 自定义策略内容列表（跟RolePolicyNames一一对应） */
  CustomPolicyDocuments?: string[];
}

declare interface AddPermissionPolicyToRoleConfigurationResponse {
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

declare interface AddUserToGroupRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户组 ID。 */
  GroupId: string;
  /** 用户 ID。 */
  UserId: string;
}

declare interface AddUserToGroupResponse {
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

declare interface ClearExternalSAMLIdentityProviderRequest {
  /** 空间ID。 */
  ZoneId: string;
}

declare interface ClearExternalSAMLIdentityProviderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGroupRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户组的名称。 格式：允许英文字母、数字和特殊字符-。 长度：最大 128 个字符。 */
  GroupName: string;
  /** 用户组的描述。 长度：最大 1024 个字符。 */
  Description?: string;
  /** 用户组类型 Manual：手动创建，Synchronized：外部导入 */
  GroupType?: string;
}

declare interface CreateGroupResponse {
  /** 用户组信息。 */
  GroupInfo?: GroupInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrgServiceAssignRequest {
  /** 委派管理员Uin列表。 最大长度20个 */
  MemberUins: number[];
  /** 集团服务ID。和集团服务产品标识二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取 */
  ServiceId?: number;
  /** 集团服务产品标识。和集团服务ID二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取 */
  Product?: string;
  /** 委派管理员管理范围。 取值：1-全部成员 2-部分成员，默认值1 */
  ManagementScope?: number;
  /** 管理的成员Uin列表。ManagementScope为2时该参数有效 */
  ManagementScopeUins?: number[];
  /** 管理的部门ID列表。ManagementScope为2时该参数有效 */
  ManagementScopeNodeIds?: number[];
}

declare interface CreateOrgServiceAssignResponse {
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
  IdentityId?: number;
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
  PolicyId?: number;
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
  /** 成员标签列表。最大10个 */
  Tags?: Tag[];
}

declare interface CreateOrganizationMemberResponse {
  /** 成员Uin。 */
  Uin?: number;
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
  PolicyId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationRequest {
}

declare interface CreateOrganizationResponse {
  /** 企业组织ID */
  OrgId?: number;
  /** 创建者昵称 */
  NickName?: string;
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

declare interface CreateRoleAssignmentRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 授权成员账号信息，最多授权50条。 */
  RoleAssignmentInfo?: RoleAssignmentInfo[];
}

declare interface CreateRoleAssignmentResponse {
  /** 任务详情。 */
  Tasks?: TaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoleConfigurationRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 权限配置名称。格式：包含英文字母、数字或短划线（-）。 长度：最大 128 个字符。 */
  RoleConfigurationName: string;
  /** 权限配置的描述。 长度：最大 1024 个字符。 */
  Description?: string;
  /** 会话持续时间。 CIC用户使用权限配置访问集团账号目标账号时，会话最多保持的时间。 单位：秒。 取值范围：900 ~ 43200（15 分钟~12 小时）。 默认值：3600（1 小时）。 */
  SessionDuration?: number;
  /** 初始访问页面。 CIC用户使用权限配置访问集团账号目标账号时，初始访问的页面地址。 该页面必须是腾讯云控制台页面。默认为空，表示跳转到腾讯云控制台首页。 */
  RelayState?: string;
}

declare interface CreateRoleConfigurationResponse {
  /** 配置访问详情 */
  RoleConfigurationInfo?: RoleConfiguration;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSCIMCredentialRequest {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId: string;
}

declare interface CreateSCIMCredentialResponse {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母。 */
  ZoneId?: string;
  /** SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。 */
  CredentialId?: string;
  /** SCIM密钥类型。 */
  CredentialType?: string;
  /** SCIM 密钥的创建时间。 */
  CreateTime?: string;
  /** SCIM 密钥的过期时间。 */
  ExpireTime?: string;
  /** SCIM密钥状态，Enabled已开启，Disabled已关闭。 */
  CredentialStatus?: string;
  /** SCIM密钥。 */
  CredentialSecret?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户名称。空间内必须唯一。不支持修改。 格式：包含数字、英文字母和特殊符号+ = , . @ - _ 。 长度：最大 64 个字符 */
  UserName: string;
  /** 用户的姓。 长度：最大 64 个字符。 */
  FirstName?: string;
  /** 用户的名。 长度：最大 64 个字符。 */
  LastName?: string;
  /** 用户的显示名称。 长度：最大 256 个字符。 */
  DisplayName?: string;
  /** 用户的描述。 长度：最大 1024 个字符。 */
  Description?: string;
  /** 用户的电子邮箱。目录内必须唯一。 长度：最大 128 个字符。 */
  Email?: string;
  /** 用户的状态。取值： Enabled（默认值）：启用。 Disabled：禁用。 */
  UserStatus?: string;
  /** 用户类型 Manual：手动创建，Synchronized：外部导入 */
  UserType?: string;
}

declare interface CreateUserResponse {
  /** 用户详情 */
  UserInfo?: UserInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserSyncProvisioningRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** CAM用户同步信息。 */
  UserSyncProvisionings: UserSyncProvisioning[];
}

declare interface CreateUserSyncProvisioningResponse {
  /** 任务详细。 */
  Tasks?: UserProvisioningsTask[];
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

declare interface DeleteGroupRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户组的 ID。 */
  GroupId: string;
}

declare interface DeleteGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrgServiceAssignRequest {
  /** 委派管理员Uin。 */
  MemberUin: number;
  /** 集团服务ID。和集团服务产品标识二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取 */
  ServiceId?: number;
  /** 集团服务产品标识。和集团服务ID二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取 */
  Product?: string;
}

declare interface DeleteOrgServiceAssignResponse {
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

declare interface DeleteRoleAssignmentRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 权限配置ID。 */
  RoleConfigurationId: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType: string;
  /** 集团账号目标账号的UIN */
  TargetUin: number;
  /** CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。 */
  PrincipalType: string;
  /** 用户同步 ID。取值： 当PrincipalType取值为Group时，该值为用户组 ID（g-********）， 当PrincipalType取值为User时，该值为用户 ID（u-********）。 */
  PrincipalId: string;
  /** 当您移除一个集团账号目标账号上使用某权限配置的最后一个授权时，是否同时解除权限配置部署。取值： DeprovisionForLastRoleAssignmentOnAccount：解除权限配置部署。 None（默认值）：不解除权限配置部署。 */
  DeprovisionStrategy?: string;
}

declare interface DeleteRoleAssignmentResponse {
  /** 任务详情 */
  Task?: TaskInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRoleConfigurationRequest {
  /** 空间 ID */
  ZoneId: string;
  /** 权限配置 ID */
  RoleConfigurationId: string;
}

declare interface DeleteRoleConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSCIMCredentialRequest {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId: string;
  /** SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。 */
  CredentialId: string;
}

declare interface DeleteSCIMCredentialResponse {
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

declare interface DeleteUserRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户 ID。 */
  UserId: string;
}

declare interface DeleteUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserSyncProvisioningRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** 用户同步的ID。 */
  UserProvisioningId: string;
}

declare interface DeleteUserSyncProvisioningResponse {
  /** 任务详情。 */
  Tasks?: UserProvisioningsTask;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEffectivePolicyRequest {
  /** 账号uin或者节点id。 */
  TargetId: number;
}

declare interface DescribeEffectivePolicyResponse {
  /** 有效策略。 */
  EffectivePolicy?: EffectivePolicy;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIdentityCenterRequest {
}

declare interface DescribeIdentityCenterResponse {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId?: string;
  /** 空间名，必须全局唯一。包含小写字母、数字和短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。长度：2~64 个字符。 */
  ZoneName?: string;
  /** 服务开启状态，Disabled代表未开通，Enabled代表已开通 */
  ServiceStatus?: string;
  /** SCIM 同步状态。Enabled：启用。 Disabled：禁用。 */
  ScimSyncStatus?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
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
  Total?: number;
  /** 条目详情。 */
  Items?: AuthNode[];
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
  TotalCost?: number;
  /** 成员消耗详情。 */
  Items?: OrgMemberFinancial[];
  /** 总数目。 */
  Total?: number;
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
  Items?: OrgFinancialByMonth[];
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
  TotalCost?: number;
  /** 产品消耗详情。 */
  Items?: OrgProductFinancial[];
  /** 总数目。 */
  Total?: number;
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
  Items?: OrgMemberAuthAccount[];
  /** 总数目 */
  Total?: number;
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
  Items?: OrgMemberAuthIdentity[];
  /** 总数目。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationMemberEmailBindRequest {
  /** 成员Uin。 */
  MemberUin: number;
}

declare interface DescribeOrganizationMemberEmailBindResponse {
  /** 绑定ID。 */
  BindId?: number;
  /** 申请时间。 */
  ApplyTime?: string;
  /** 邮箱地址。 */
  Email?: string;
  /** 安全手机号。 */
  Phone?: string;
  /** 绑定状态。 未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed */
  BindStatus?: string;
  /** 绑定时间。 */
  BindTime?: string;
  /** 失败说明。 */
  Description?: string;
  /** 安全手机绑定状态 。 未绑定：0，已绑定：1 */
  PhoneBind?: number;
  /** 国际区号。 */
  CountryCode?: string;
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
  Items?: OrgMemberPolicy[];
  /** 总数目。 */
  Total?: number;
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
  /** 成员标签搜索列表，最大10个 */
  Tags?: Tag[];
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
  /** 部门标签搜索列表，最大10个 */
  Tags?: Tag[];
}

declare interface DescribeOrganizationNodesResponse {
  /** 总数。 */
  Total?: number;
  /** 列表详情。 */
  Items?: OrgNode[];
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
  OrgId?: number;
  /** 创建者UIN。 */
  HostUin?: number;
  /** 创建者昵称。 */
  NickName?: string;
  /** 企业组织类型。 */
  OrgType?: number;
  /** 是否组织管理员。是：true ，否：false */
  IsManager?: boolean;
  /** 策略类型。财务管理：Financial */
  OrgPolicyType?: string;
  /** 策略名。 */
  OrgPolicyName?: string;
  /** 成员财务权限列表。 */
  OrgPermission?: OrgPermission[];
  /** 组织根节点ID。 */
  RootNodeId?: number;
  /** 组织创建时间。 */
  CreateTime?: string;
  /** 成员加入时间。 */
  JoinTime?: string;
  /** 成员是否允许退出。允许：Allow，不允许：Denied */
  IsAllowQuit?: string;
  /** 代付者Uin。 */
  PayUin?: string;
  /** 代付者名称。 */
  PayName?: string;
  /** 是否可信服务管理员。是：true，否：false */
  IsAssignManager?: boolean;
  /** 是否实名主体管理员。是：true，否：false */
  IsAuthManager?: boolean;
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
  /** 策略Id。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取 */
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
  Items?: ShareArea[];
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
  Total?: number;
  /** 共享单元成员列表。 */
  Items?: ShareUnitMember[];
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
  Total?: number;
  /** 共享单元资源列表。 */
  Items?: ShareUnitResource[];
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
  Total?: number;
  /** 共享单元列表。 */
  Items?: ManagerShareUnit[];
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

declare interface DismantleRoleConfigurationRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 权限配置ID。 */
  RoleConfigurationId: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号。 */
  TargetType: string;
  /** 同步的集团账号目标账号的UIN。 */
  TargetUin: number;
}

declare interface DismantleRoleConfigurationResponse {
  /** 任务详情。 */
  Task?: RoleProvisioningsTask;
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

declare interface GetExternalSAMLIdentityProviderRequest {
  /** 空间ID。 */
  ZoneId: string;
}

declare interface GetExternalSAMLIdentityProviderResponse {
  /** saml 身份提供商配置信息。 */
  SAMLIdentityProviderConfiguration?: SAMLIdentityProviderConfiguration;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetGroupRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户组的 ID。 */
  GroupId: string;
}

declare interface GetGroupResponse {
  /** 用户组信息 */
  GroupInfo?: GroupInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetProvisioningTaskStatusRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** 任务ID。 */
  TaskId: string;
}

declare interface GetProvisioningTaskStatusResponse {
  /** 任务状态信息。 */
  TaskStatus?: TaskStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRoleConfigurationRequest {
  /** 空间 ID */
  ZoneId: string;
  /** 权限配置ID */
  RoleConfigurationId: string;
}

declare interface GetRoleConfigurationResponse {
  /** 权限配置详情 */
  RoleConfigurationInfo?: RoleConfiguration;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSCIMSynchronizationStatusRequest {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId: string;
}

declare interface GetSCIMSynchronizationStatusResponse {
  /** SCIM 同步状态。Enabled：启用。 Disabled：禁用。 */
  SCIMSynchronizationStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskStatusRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** 任务ID。 */
  TaskId: string;
}

declare interface GetTaskStatusResponse {
  /** 任务状态信息。 */
  TaskStatus?: TaskStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetUserRequest {
  /** 用户 ID。 */
  UserId: string;
  /** 空间 ID。 */
  ZoneId: string;
}

declare interface GetUserResponse {
  /** 用户信息。 */
  UserInfo?: UserInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetUserSyncProvisioningRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** CAM 用户同步的 ID。 */
  UserProvisioningId: string;
}

declare interface GetUserSyncProvisioningResponse {
  /** CAM 用户同步信息。 */
  UserProvisioning?: UserProvisioning;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetZoneSAMLServiceProviderInfoRequest {
  /** 空间ID。 */
  ZoneId: string;
}

declare interface GetZoneSAMLServiceProviderInfoResponse {
  /** saml服务提供商配置信息 */
  SAMLServiceProvider?: SAMLServiceProvider;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetZoneStatisticsRequest {
  /** 空间ID */
  ZoneId: string;
}

declare interface GetZoneStatisticsResponse {
  /** 空间的统计信息。 */
  ZoneStatistics?: ZoneStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InviteOrganizationMemberRequest {
  /** 被邀请账号Uin。 */
  MemberUin: number;
  /** 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:, */
  Name: string;
  /** 关系策略。取值：Financial */
  PolicyType: string;
  /** 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须 */
  PermissionIds: number[];
  /** 成员所属部门的节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取 */
  NodeId: number;
  /** 备注。 */
  Remark?: string;
  /** 是否允许成员退出。允许：Allow，不允许：Denied。 */
  IsAllowQuit?: string;
  /** 代付者Uin。成员代付费时需要 */
  PayUin?: string;
  /** 互信实名主体名称。 */
  RelationAuthName?: string;
  /** 互信主体证明文件列表。 */
  AuthFile?: AuthRelationFile[];
  /** 成员标签列表。最大10个 */
  Tags?: Tag[];
}

declare interface InviteOrganizationMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListExternalSAMLIdPCertificatesRequest {
  /** 空间ID。 */
  ZoneId: string;
}

declare interface ListExternalSAMLIdPCertificatesResponse {
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** SAML 签名证书列表 */
  SAMLIdPCertificates?: SAMLIdPCertificate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListGroupMembersRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户组ID。 */
  GroupId: string;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** 用户类型 Manual：手动创建，Synchronized：外部导入。 */
  UserType?: string;
}

declare interface ListGroupMembersResponse {
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** 用户组的用户列表 */
  GroupMembers?: GroupMembers[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListGroupsRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** 过滤条件。 格式： ，不区分大小写。目前，只支持GroupName，只支持eq（Equals）和sw（Start With）。 示例：Filter = "GroupName sw test"，表示查询名称以 test 开头的全部用户组。Filter = "GroupName eq testgroup"，表示查询名称为 testgroup 的用户组。 */
  Filter?: string;
  /** 用户组的类型 Manual：手动创建，Synchronized：外部导入。 */
  GroupType?: string;
  /** 筛选的用户，该用户关联的用户组会返回IsSelected=1 */
  FilterUsers?: string[];
  /** 排序的字段，目前只支持CreateTime，默认是CreateTime字段 */
  SortField?: string;
  /** 排序类型：Desc 倒序 Asc 正序，需要您和SortField一起设置 */
  SortType?: string;
  /** 翻页offset. 不要与NextToken同时使用，优先使用NextToken */
  Offset?: number;
}

declare interface ListGroupsResponse {
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 用户组列表。 */
  Groups?: GroupInfo[];
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListJoinedGroupsForUserRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户ID */
  UserId: string;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
}

declare interface ListJoinedGroupsForUserResponse {
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** 用户加入的用户组列表 */
  JoinedGroups?: JoinedGroups[];
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
  Items?: ResourceTagMapping[];
  /** 获取的下一页的Token值。 */
  PaginationToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOrgServiceAssignMemberRequest {
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset: number;
  /** 限制数目。取值范围：1~50，默认值：10 */
  Limit: number;
  /** 集团服务ID。和集团服务产品标识二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取 */
  ServiceId?: number;
  /** 集团服务产品标识。和集团服务ID二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取 */
  Product?: string;
}

declare interface ListOrgServiceAssignMemberResponse {
  /** 总数。 */
  Total?: number;
  /** 委派管理员列表。 */
  Items?: OrganizationServiceAssignMember[];
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
  Total?: number;
  /** 条目详情。 */
  Items?: OrgIdentity[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOrganizationServiceRequest {
  /** 偏移量。取值是limit的整数倍，默认值 : 0 */
  Offset: number;
  /** 限制数目。取值范围：1~50，默认值：10 */
  Limit: number;
  /** 名称搜索关键字。 */
  SearchKey?: string;
}

declare interface ListOrganizationServiceResponse {
  /** 总数。 */
  Total?: number;
  /** 集团服务列表。 */
  Items?: OrganizationServiceAssign[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListPermissionPoliciesInRoleConfigurationRequest {
  /** 空间 ID */
  ZoneId: string;
  /** 权限配置 ID */
  RoleConfigurationId: string;
  /** 权限策略类型。取值： System：系统策略。复用 CAM 的系统策略。 Custom: 自定义策略。按照 CAM 权限策略语法和结构编写的自定义策略。 */
  RolePolicyType?: string;
  /** 按策略名称搜索 */
  Filter?: string;
}

declare interface ListPermissionPoliciesInRoleConfigurationResponse {
  /** 权限策略总个数。 */
  TotalCounts?: number;
  /** 权限策略列表。 */
  RolePolicies?: RolePolicie[];
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
  List?: ListPoliciesForTarget[];
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
  List?: ListPolicyNode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRoleAssignmentsRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
  /** 同步的集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。 */
  PrincipalType?: string;
  /** 用户同步 ID。取值： 当PrincipalType取值为Group时，该值为用户组 ID（g-****)，当PrincipalType取值为User时，该值为用户 ID （u-****）。 */
  PrincipalId?: string;
  /** 查询条件，目前只支持权限配置名称查询。 */
  Filter?: string;
}

declare interface ListRoleAssignmentsResponse {
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** 集团账号目标账号的授权列表。 */
  RoleAssignments?: RoleAssignments[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRoleConfigurationProvisioningsRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
  /** 同步的集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** Deployed: 部署成功 DeployedRequired：需要重新部署 DeployFailed：部署失败 */
  DeploymentStatus?: string;
  /** 支持配置名称搜索。 */
  Filter?: string;
}

declare interface ListRoleConfigurationProvisioningsResponse {
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** 部成员账号列表。 */
  RoleConfigurationProvisionings?: RoleConfigurationProvisionings[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRoleConfigurationsRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** 过滤文本。不区分大小写。目前，支持 RoleConfigurationName和Description. 示例：Filter = "test"，表示查询名称或描述里包含 test 的权限配置。 */
  Filter?: string;
  /** 检索成员账号是否配置过权限，如果配置过返回IsSelected: true, 否则返回false。 */
  FilterTargets?: number[];
  /** 授权的用户UserId或者用户组的GroupId，必须和入参数FilterTargets一起设置 */
  PrincipalId?: string;
}

declare interface ListRoleConfigurationsResponse {
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 权限配置列表。 */
  RoleConfigurations?: RoleConfiguration[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSCIMCredentialsRequest {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId: string;
  /** SCIM密钥ID */
  CredentialId?: string;
}

declare interface ListSCIMCredentialsResponse {
  /** SCIM密钥数量。 */
  TotalCounts?: number;
  /** SCIM 密钥信息。 */
  SCIMCredentials?: SCIMCredential[];
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
  List?: ListTargetsForPolicyNode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTasksRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户同步 ID。取值： 当PrincipalType取值为Group时，该值为用户组 ID（g-****）， 当PrincipalType取值为User时，该值为用户 ID（u-****）。 */
  PrincipalId?: string;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。 */
  PrincipalType?: string;
  /** 同步的集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
  /** 权限配置ID。 */
  RoleConfigurationId?: string;
  /** InProgress：任务执行中。 Success：任务执行成功。 Failed：任务执行失败。 */
  Status?: string;
  /** 任务类型。 */
  TaskType?: string;
}

declare interface ListTasksResponse {
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** 任务详情 */
  Tasks?: TaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListUserSyncProvisioningsRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户同步 ID。取值： 当PrincipalType取值为Group时，该值为用户组 ID（g-********）。 当PrincipalType取值为User时，该值为用户 ID（u-********）。 */
  PrincipalId?: string;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。 */
  PrincipalType?: string;
  /** 集团账号目标账号的UIN。 */
  TargetUin?: number;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号 */
  TargetType?: string;
  /** 检测条件。 */
  Filter?: string;
}

declare interface ListUserSyncProvisioningsResponse {
  /** 查询返回结果下一页的令牌。 说明 只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
  /** CAM同步的用户列表。 */
  UserProvisionings?: UserProvisioning[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListUsersRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户状态 Enabled：启用， Disabled：禁用。 */
  UserStatus?: string;
  /** 用户类型 Manual：手动创建，Synchronized：外部导入。 */
  UserType?: string;
  /** 过滤条件。 目前仅支持用户名，邮箱，用户userId，描述 */
  Filter?: string;
  /** 每页的最大数据条数。 取值范围：1~100。 默认值：10。 */
  MaxResults?: number;
  /** 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。 当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法经过多次查询，直到IsTruncated为false时，表示全部数据查询完毕。 */
  NextToken?: string;
  /** 筛选的用户组，该用户组关联的子用户会返回IsSelected=1 */
  FilterGroups?: string[];
  /** 排序的字段，目前只支持CreateTime，默认是CreateTime字段 */
  SortField?: string;
  /** 排序类型：Desc 倒序 Asc 正序，需要您和SortField一起设置 */
  SortType?: string;
  /** 翻页offset. 不要与NextToken同时使用，优先使用NextToken */
  Offset?: number;
}

declare interface ListUsersResponse {
  /** 符合请求参数条件的数据总条数。 */
  TotalCounts?: number;
  /** 每页的最大数据条数。 */
  MaxResults?: number;
  /** 用户列表。 */
  Users?: UserInfo[];
  /** 查询返回结果下一页的令牌。只有IsTruncated为true时，才显示该参数。 */
  NextToken?: string;
  /** 返回结果是否被截断。取值： true：已截断。 false：未截断。 */
  IsTruncated?: boolean;
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

declare interface OpenIdentityCenterRequest {
  /** 空间名，必须全局唯一。包含小写字母、数字和短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。长度：2~64 个字符。 */
  ZoneName: string;
}

declare interface OpenIdentityCenterResponse {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ProvisionRoleConfigurationRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 权限配置ID。 */
  RoleConfigurationId: string;
  /** 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号。 */
  TargetType: string;
  /** 集团账号目标账号的UIN。 */
  TargetUin: number;
}

declare interface ProvisionRoleConfigurationResponse {
  /** 任务详情。 */
  Task?: RoleProvisioningsTask;
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

declare interface RejectJoinShareUnitInvitationRequest {
  /** 共享单元ID。 */
  UnitId: string;
}

declare interface RejectJoinShareUnitInvitationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveExternalSAMLIdPCertificateRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** PEM 格式的 X509 证书。 由 SAML 身份提供商提供。 */
  CertificateId: string;
}

declare interface RemoveExternalSAMLIdPCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemovePermissionPolicyFromRoleConfigurationRequest {
  /** 空间 ID */
  ZoneId: string;
  /** 权限配置 ID */
  RoleConfigurationId: string;
  /** 权限策略类型。取值： System：系统策略。复用 CAM 的系统策略。 Custom: 自定义策略。按照 CAM 权限策略语法和结构编写的自定义策略。 */
  RolePolicyType: string;
  /** 权限策略名称，长度最大为 32 个字符。 */
  RolePolicyName?: string;
  /** 策略ID。 */
  RolePolicyId?: number;
}

declare interface RemovePermissionPolicyFromRoleConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveUserFromGroupRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** 用户组ID。 */
  GroupId: string;
  /** 用户ID。 */
  UserId: string;
}

declare interface RemoveUserFromGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendOrgMemberAccountBindEmailRequest {
  /** 成员Uin。 */
  MemberUin: number;
  /** 绑定ID。可以通过[DescribeOrganizationMemberEmailBind](https://cloud.tencent.com/document/product/850/93332)获取 */
  BindId: number;
}

declare interface SendOrgMemberAccountBindEmailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetExternalSAMLIdentityProviderRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** IdP 元数据文档（Base64 编码）。 由支持 SAML 2.0 协议的 IdP 提供。 */
  EncodedMetadataDocument?: string;
  /** SSO 登录的启用状态。取值： Enabled：启用。 Disabled（默认值）：禁用。 */
  SSOStatus?: string;
  /** IdP 标识。 */
  EntityId?: string;
  /** IdP 的登录地址。 */
  LoginUrl?: string;
  /** PEM 格式的 X509 证书。指定该参数会替换所有已经存在的证书。 */
  X509Certificate?: string;
}

declare interface SetExternalSAMLIdentityProviderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCustomPolicyForRoleConfigurationRequest {
  /** 空间 ID */
  ZoneId: string;
  /** 权限配置 ID */
  RoleConfigurationId: string;
  /** 权限策略名称，长度最大为 32 个字符。 */
  CustomPolicyName: string;
  /** 自定义策略内容。长度：最大 4096 个字符。当RolePolicyType为Inline时，该参数必须配置。关于权限策略的语法和结构，请参见权限策略语法和结构。 */
  NewCustomPolicyDocument?: string;
}

declare interface UpdateCustomPolicyForRoleConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGroupRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户组ID。 */
  GroupId: string;
  /** 新的用户组名称。 */
  NewGroupName?: string;
  /** 新的用户组描述。 */
  NewDescription?: string;
}

declare interface UpdateGroupResponse {
  /** 用户组信息。 */
  GroupInfo?: GroupInfo;
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
  /** 是否同步组织成员名称到成员账号昵称。取值： 1-同步 0-不同步 */
  IsModifyNickName?: number;
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

declare interface UpdateRoleConfigurationRequest {
  /** 空间 ID */
  ZoneId: string;
  /** 权限配置 ID */
  RoleConfigurationId: string;
  /** 新的权限配置描述。 长度：最大 1024 个字符。 */
  NewDescription?: string;
  /** 新的会话持续时间。 CIC 用户使用权限配置访问集团账号目标账号时，会话最多保持的时间。 单位：秒。 取值范围：900-43200（15 分钟-12 小时）。 */
  NewSessionDuration?: number;
  /** 新的初始访问页面。 CIC 用户使用权限配置访问集团账号目标账号时，初始访问的页面地址。 该页面必须是腾讯云控制台页面。 */
  NewRelayState?: string;
}

declare interface UpdateRoleConfigurationResponse {
  /** 权限配置详情 */
  RoleConfigurationInfo?: RoleConfiguration;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateSCIMCredentialStatusRequest {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId: string;
  /** SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。 */
  CredentialId: string;
  /** SCIM密钥状态。Enabled：启用。 Disabled：禁用。 */
  NewStatus: string;
}

declare interface UpdateSCIMCredentialStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateSCIMSynchronizationStatusRequest {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId: string;
  /** SCIM 同步状态。Enabled：启用。Disabled：禁用。 */
  SCIMSynchronizationStatus: string;
}

declare interface UpdateSCIMSynchronizationStatusResponse {
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

declare interface UpdateUserRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户 ID。 */
  UserId: string;
  /** 用户的名。 */
  NewFirstName?: string;
  /** 用户的姓。 */
  NewLastName?: string;
  /** 用户的显示名称。 */
  NewDisplayName?: string;
  /** 用户的描述。 */
  NewDescription?: string;
  /** 用户的电子邮箱。 */
  NewEmail?: string;
}

declare interface UpdateUserResponse {
  /** 用户信息 */
  UserInfo?: UserInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateUserStatusRequest {
  /** 空间 ID。 */
  ZoneId: string;
  /** 用户 ID。 */
  UserId: string;
  /** 用户的状态。取值： Enabled：启用。 Disabled：禁用。 */
  NewUserStatus: string;
}

declare interface UpdateUserStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateUserSyncProvisioningRequest {
  /** 空间ID。 */
  ZoneId: string;
  /** 用户同步的iD */
  UserProvisioningId: string;
  /** 用户同步描述。 */
  NewDescription?: string;
  /** 冲突策略。当CIC 用户同步到 CAM 时，如果 CAM 中存在同名用户时的处理策略。取值： KeepBoth：两者都保留。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则对CIC 用户的用户名添加后缀_cic后尝试创建该用户名的 CAM 用户。 TakeOver：替换。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则直接将已经存在的 CAM 用户替换为CIC 同步用户。 */
  NewDuplicationStateful?: string;
  /** 删除策略。删除 CAM 用户同步时，对已同步的 CAM 用户的处理策略。取值： Delete：删除。删除 CAM 用户同步时，会删除从CIC 已经同步到 CAM 中的 CAM 用户。 Keep：保留。删除 RAM 用户同步时，会保留从CIC 已经同步到 CAM 中的 CAM 用户。 */
  NewDeletionStrategy?: string;
}

declare interface UpdateUserSyncProvisioningResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateZoneRequest {
  /** 空间ID。z-前缀开头，后面是12位随机数字/小写字母 */
  ZoneId: string;
  /** 空间名，必须全局唯一。包含小写字母、数字和短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。长度：2~64 个字符。 */
  NewZoneName: string;
}

declare interface UpdateZoneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20181225 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-12-25' } }

  /** 企业组织邀请 */
  interface OrgInvitation {
    /** 邀请ID */
    Id?: number;
    /** 被邀请UIN */
    Uin?: number;
    /** 创建者UIN */
    HostUin?: number;
    /** 创建者名称 */
    HostName?: string;
    /** 创建者邮箱 */
    HostMail?: string;
    /** 邀请状态。-1：已过期，0：正常，1：已接受，2：已失效，3：已取消 */
    Status?: number;
    /** 名称 */
    Name?: string;
    /** 备注 */
    Remark?: string;
    /** 企业组织类型 */
    OrgType?: number;
    /** 邀请时间 */
    InviteTime?: string;
    /** 过期时间 */
    ExpireTime?: string;
  }

  /** 企业组织成员 */
  interface OrgMember {
    /** UIN */
    Uin?: number;
    /** 名称 */
    Name?: string;
    /** 备注 */
    Remark?: string;
    /** 加入时间 */
    JoinTime?: string;
  }

  /** 企业组织单元 */
  interface OrgNode {
    /** 组织单元ID */
    NodeId?: number;
    /** 名称 */
    Name?: string;
    /** 父单元ID */
    ParentNodeId?: number;
    /** 成员数量 */
    MemberCount?: number;
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
    Nodes?: OrgNode[];
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
  /** 接受加入共享单元邀请 {@link AcceptJoinShareUnitInvitationRequest} {@link AcceptJoinShareUnitInvitationResponse} */
  AcceptJoinShareUnitInvitation(data: AcceptJoinShareUnitInvitationRequest, config?: AxiosRequestConfig): AxiosPromise<AcceptJoinShareUnitInvitationResponse>;
  /** 添加SAML签名证书 {@link AddExternalSAMLIdPCertificateRequest} {@link AddExternalSAMLIdPCertificateResponse} */
  AddExternalSAMLIdPCertificate(data: AddExternalSAMLIdPCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<AddExternalSAMLIdPCertificateResponse>;
  /** 添加组织成员邮箱 {@link AddOrganizationMemberEmailRequest} {@link AddOrganizationMemberEmailResponse} */
  AddOrganizationMemberEmail(data: AddOrganizationMemberEmailRequest, config?: AxiosRequestConfig): AxiosPromise<AddOrganizationMemberEmailResponse>;
  /** 添加企业组织节点 {@link AddOrganizationNodeRequest} {@link AddOrganizationNodeResponse} */
  AddOrganizationNode(data: AddOrganizationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<AddOrganizationNodeResponse>;
  /** 为权限配置添加策略 {@link AddPermissionPolicyToRoleConfigurationRequest} {@link AddPermissionPolicyToRoleConfigurationResponse} */
  AddPermissionPolicyToRoleConfiguration(data: AddPermissionPolicyToRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<AddPermissionPolicyToRoleConfigurationResponse>;
  /** 创建共享单元 {@link AddShareUnitRequest} {@link AddShareUnitResponse} */
  AddShareUnit(data: AddShareUnitRequest, config?: AxiosRequestConfig): AxiosPromise<AddShareUnitResponse>;
  /** 添加共享单元成员 {@link AddShareUnitMembersRequest} {@link AddShareUnitMembersResponse} */
  AddShareUnitMembers(data: AddShareUnitMembersRequest, config?: AxiosRequestConfig): AxiosPromise<AddShareUnitMembersResponse>;
  /** 添加共享单元资源 {@link AddShareUnitResourcesRequest} {@link AddShareUnitResourcesResponse} */
  AddShareUnitResources(data: AddShareUnitResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<AddShareUnitResourcesResponse>;
  /** 为用户组添加用户 {@link AddUserToGroupRequest} {@link AddUserToGroupResponse} */
  AddUserToGroup(data: AddUserToGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddUserToGroupResponse>;
  /** 绑定策略 {@link AttachPolicyRequest} {@link AttachPolicyResponse} */
  AttachPolicy(data: AttachPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachPolicyResponse>;
  /** 绑定组织成员和组织管理员子账号的授权关系 {@link BindOrganizationMemberAuthAccountRequest} {@link BindOrganizationMemberAuthAccountResponse} */
  BindOrganizationMemberAuthAccount(data: BindOrganizationMemberAuthAccountRequest, config?: AxiosRequestConfig): AxiosPromise<BindOrganizationMemberAuthAccountResponse>;
  /** 取消组织成员和组织管理员子账号的授权关系 {@link CancelOrganizationMemberAuthAccountRequest} {@link CancelOrganizationMemberAuthAccountResponse} */
  CancelOrganizationMemberAuthAccount(data: CancelOrganizationMemberAuthAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CancelOrganizationMemberAuthAccountResponse>;
  /** 成员账号删除检查 {@link CheckAccountDeleteRequest} {@link CheckAccountDeleteResponse} */
  CheckAccountDelete(data: CheckAccountDeleteRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAccountDeleteResponse>;
  /** 清空SAML身份提供商配置信息 {@link ClearExternalSAMLIdentityProviderRequest} {@link ClearExternalSAMLIdentityProviderResponse} */
  ClearExternalSAMLIdentityProvider(data: ClearExternalSAMLIdentityProviderRequest, config?: AxiosRequestConfig): AxiosPromise<ClearExternalSAMLIdentityProviderResponse>;
  /** 创建用户组 {@link CreateGroupRequest} {@link CreateGroupResponse} */
  CreateGroup(data: CreateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupResponse>;
  /** 添加集团服务委派管理员 {@link CreateOrgServiceAssignRequest} {@link CreateOrgServiceAssignResponse} */
  CreateOrgServiceAssign(data: CreateOrgServiceAssignRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrgServiceAssignResponse>;
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
  /** 在成员账号上授权 {@link CreateRoleAssignmentRequest} {@link CreateRoleAssignmentResponse} */
  CreateRoleAssignment(data: CreateRoleAssignmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleAssignmentResponse>;
  /** 创建权限配置 {@link CreateRoleConfigurationRequest} {@link CreateRoleConfigurationResponse} */
  CreateRoleConfiguration(data: CreateRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleConfigurationResponse>;
  /** 创建SCIM密钥 {@link CreateSCIMCredentialRequest} {@link CreateSCIMCredentialResponse} */
  CreateSCIMCredential(data: CreateSCIMCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSCIMCredentialResponse>;
  /** 创建用户 {@link CreateUserRequest} {@link CreateUserResponse} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** 创建CAM用户同步 {@link CreateUserSyncProvisioningRequest} {@link CreateUserSyncProvisioningResponse} */
  CreateUserSyncProvisioning(data: CreateUserSyncProvisioningRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserSyncProvisioningResponse>;
  /** 删除成员账号 {@link DeleteAccountRequest} {@link DeleteAccountResponse} */
  DeleteAccount(data: DeleteAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountResponse>;
  /** 删除用户组 {@link DeleteGroupRequest} {@link DeleteGroupResponse} */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 删除集团服务委派管理员 {@link DeleteOrgServiceAssignRequest} {@link DeleteOrgServiceAssignResponse} */
  DeleteOrgServiceAssign(data: DeleteOrgServiceAssignRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrgServiceAssignResponse>;
  /** 删除企业组织 {@link DeleteOrganizationRequest} {@link DeleteOrganizationResponse} */
  DeleteOrganization(data?: DeleteOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationResponse>;
  /** 删除组织身份 {@link DeleteOrganizationIdentityRequest} {@link DeleteOrganizationIdentityResponse} */
  DeleteOrganizationIdentity(data: DeleteOrganizationIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationIdentityResponse>;
  /** 删除组织成员访问授权 {@link DeleteOrganizationMemberAuthIdentityRequest} {@link DeleteOrganizationMemberAuthIdentityResponse} */
  DeleteOrganizationMemberAuthIdentity(data: DeleteOrganizationMemberAuthIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationMemberAuthIdentityResponse>;
  /** 批量移除企业组织成员 {@link DeleteOrganizationMembersRequest} {@link DeleteOrganizationMembersResponse} */
  DeleteOrganizationMembers(data: DeleteOrganizationMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationMembersResponse>;
  /** 删除组织成员访问策略 {@link DeleteOrganizationMembersPolicyRequest} {@link DeleteOrganizationMembersPolicyResponse} */
  DeleteOrganizationMembersPolicy(data: DeleteOrganizationMembersPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationMembersPolicyResponse>;
  /** 批量删除企业组织节点 {@link DeleteOrganizationNodesRequest} {@link DeleteOrganizationNodesResponse} */
  DeleteOrganizationNodes(data: DeleteOrganizationNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationNodesResponse>;
  /** 删除策略 {@link DeletePolicyRequest} {@link DeletePolicyResponse} */
  DeletePolicy(data: DeletePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePolicyResponse>;
  /** 移除成员账号上的授权 {@link DeleteRoleAssignmentRequest} {@link DeleteRoleAssignmentResponse} */
  DeleteRoleAssignment(data: DeleteRoleAssignmentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoleAssignmentResponse>;
  /** 删除权限配置信息 {@link DeleteRoleConfigurationRequest} {@link DeleteRoleConfigurationResponse} */
  DeleteRoleConfiguration(data: DeleteRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoleConfigurationResponse>;
  /** 删除SCIM密钥 {@link DeleteSCIMCredentialRequest} {@link DeleteSCIMCredentialResponse} */
  DeleteSCIMCredential(data: DeleteSCIMCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSCIMCredentialResponse>;
  /** 删除共享单元 {@link DeleteShareUnitRequest} {@link DeleteShareUnitResponse} */
  DeleteShareUnit(data: DeleteShareUnitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareUnitResponse>;
  /** 删除共享单元成员 {@link DeleteShareUnitMembersRequest} {@link DeleteShareUnitMembersResponse} */
  DeleteShareUnitMembers(data: DeleteShareUnitMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareUnitMembersResponse>;
  /** 删除共享单元资源 {@link DeleteShareUnitResourcesRequest} {@link DeleteShareUnitResourcesResponse} */
  DeleteShareUnitResources(data: DeleteShareUnitResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareUnitResourcesResponse>;
  /** 删除用户 {@link DeleteUserRequest} {@link DeleteUserResponse} */
  DeleteUser(data: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** 删除CAM用户同步 {@link DeleteUserSyncProvisioningRequest} {@link DeleteUserSyncProvisioningResponse} */
  DeleteUserSyncProvisioning(data: DeleteUserSyncProvisioningRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserSyncProvisioningResponse>;
  /** 查询目标关联的有效策略 {@link DescribeEffectivePolicyRequest} {@link DescribeEffectivePolicyResponse} */
  DescribeEffectivePolicy(data: DescribeEffectivePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEffectivePolicyResponse>;
  /** 获取集团账号身份中心服务信息 {@link DescribeIdentityCenterRequest} {@link DescribeIdentityCenterResponse} */
  DescribeIdentityCenter(data?: DescribeIdentityCenterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIdentityCenterResponse>;
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
  /** 解除权限配置部署 {@link DismantleRoleConfigurationRequest} {@link DismantleRoleConfigurationResponse} */
  DismantleRoleConfiguration(data: DismantleRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DismantleRoleConfigurationResponse>;
  /** 启用策略类型 {@link EnablePolicyTypeRequest} {@link EnablePolicyTypeResponse} */
  EnablePolicyType(data: EnablePolicyTypeRequest, config?: AxiosRequestConfig): AxiosPromise<EnablePolicyTypeResponse>;
  /** 查询SAML身份提供商配置信息 {@link GetExternalSAMLIdentityProviderRequest} {@link GetExternalSAMLIdentityProviderResponse} */
  GetExternalSAMLIdentityProvider(data: GetExternalSAMLIdentityProviderRequest, config?: AxiosRequestConfig): AxiosPromise<GetExternalSAMLIdentityProviderResponse>;
  /** 查询用户组信息 {@link GetGroupRequest} {@link GetGroupResponse} */
  GetGroup(data: GetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupResponse>;
  /** 查询用户同步异步任务的状态 {@link GetProvisioningTaskStatusRequest} {@link GetProvisioningTaskStatusResponse} */
  GetProvisioningTaskStatus(data: GetProvisioningTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetProvisioningTaskStatusResponse>;
  /** 查询权限配置信息 {@link GetRoleConfigurationRequest} {@link GetRoleConfigurationResponse} */
  GetRoleConfiguration(data: GetRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<GetRoleConfigurationResponse>;
  /** 查询SCIM同步的状态 {@link GetSCIMSynchronizationStatusRequest} {@link GetSCIMSynchronizationStatusResponse} */
  GetSCIMSynchronizationStatus(data: GetSCIMSynchronizationStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetSCIMSynchronizationStatusResponse>;
  /** 查询异步任务的状态 {@link GetTaskStatusRequest} {@link GetTaskStatusResponse} */
  GetTaskStatus(data: GetTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskStatusResponse>;
  /** 查询用户信息 {@link GetUserRequest} {@link GetUserResponse} */
  GetUser(data: GetUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserResponse>;
  /** 查询CAM用户同步 {@link GetUserSyncProvisioningRequest} {@link GetUserSyncProvisioningResponse} */
  GetUserSyncProvisioning(data: GetUserSyncProvisioningRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserSyncProvisioningResponse>;
  /** 查询SAML服务提供商信息 {@link GetZoneSAMLServiceProviderInfoRequest} {@link GetZoneSAMLServiceProviderInfoResponse} */
  GetZoneSAMLServiceProviderInfo(data: GetZoneSAMLServiceProviderInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetZoneSAMLServiceProviderInfoResponse>;
  /** 查询空间的统计信息 {@link GetZoneStatisticsRequest} {@link GetZoneStatisticsResponse} */
  GetZoneStatistics(data: GetZoneStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<GetZoneStatisticsResponse>;
  /** 邀请组织成员 {@link InviteOrganizationMemberRequest} {@link InviteOrganizationMemberResponse} */
  InviteOrganizationMember(data: InviteOrganizationMemberRequest, config?: AxiosRequestConfig): AxiosPromise<InviteOrganizationMemberResponse>;
  /** 查询SAML签名证书列表 {@link ListExternalSAMLIdPCertificatesRequest} {@link ListExternalSAMLIdPCertificatesResponse} */
  ListExternalSAMLIdPCertificates(data: ListExternalSAMLIdPCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<ListExternalSAMLIdPCertificatesResponse>;
  /** 查询用户组中的用户列表 {@link ListGroupMembersRequest} {@link ListGroupMembersResponse} */
  ListGroupMembers(data: ListGroupMembersRequest, config?: AxiosRequestConfig): AxiosPromise<ListGroupMembersResponse>;
  /** 查询用户组列表 {@link ListGroupsRequest} {@link ListGroupsResponse} */
  ListGroups(data: ListGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ListGroupsResponse>;
  /** 查询用户加入的用户组 {@link ListJoinedGroupsForUserRequest} {@link ListJoinedGroupsForUserResponse} */
  ListJoinedGroupsForUser(data: ListJoinedGroupsForUserRequest, config?: AxiosRequestConfig): AxiosPromise<ListJoinedGroupsForUserResponse>;
  /** 获取成员标签检测不合规资源列表 {@link ListNonCompliantResourceRequest} {@link ListNonCompliantResourceResponse} */
  ListNonCompliantResource(data: ListNonCompliantResourceRequest, config?: AxiosRequestConfig): AxiosPromise<ListNonCompliantResourceResponse>;
  /** 获取集团服务委派管理员列表 {@link ListOrgServiceAssignMemberRequest} {@link ListOrgServiceAssignMemberResponse} */
  ListOrgServiceAssignMember(data: ListOrgServiceAssignMemberRequest, config?: AxiosRequestConfig): AxiosPromise<ListOrgServiceAssignMemberResponse>;
  /** 获取组织成员访问身份列表 {@link ListOrganizationIdentityRequest} {@link ListOrganizationIdentityResponse} */
  ListOrganizationIdentity(data: ListOrganizationIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<ListOrganizationIdentityResponse>;
  /** 获取集团服务设置列表 {@link ListOrganizationServiceRequest} {@link ListOrganizationServiceResponse} */
  ListOrganizationService(data: ListOrganizationServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ListOrganizationServiceResponse>;
  /** 获取权限配置中的策略列表 {@link ListPermissionPoliciesInRoleConfigurationRequest} {@link ListPermissionPoliciesInRoleConfigurationResponse} */
  ListPermissionPoliciesInRoleConfiguration(data: ListPermissionPoliciesInRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<ListPermissionPoliciesInRoleConfigurationResponse>;
  /** 查看策略列表数据 {@link ListPoliciesRequest} {@link ListPoliciesResponse} */
  ListPolicies(data?: ListPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ListPoliciesResponse>;
  /** 查询目标关联的策略列表 {@link ListPoliciesForTargetRequest} {@link ListPoliciesForTargetResponse} */
  ListPoliciesForTarget(data: ListPoliciesForTargetRequest, config?: AxiosRequestConfig): AxiosPromise<ListPoliciesForTargetResponse>;
  /** 查询授权列表 {@link ListRoleAssignmentsRequest} {@link ListRoleAssignmentsResponse} */
  ListRoleAssignments(data: ListRoleAssignmentsRequest, config?: AxiosRequestConfig): AxiosPromise<ListRoleAssignmentsResponse>;
  /** 查询权限配置部署列表 {@link ListRoleConfigurationProvisioningsRequest} {@link ListRoleConfigurationProvisioningsResponse} */
  ListRoleConfigurationProvisionings(data: ListRoleConfigurationProvisioningsRequest, config?: AxiosRequestConfig): AxiosPromise<ListRoleConfigurationProvisioningsResponse>;
  /** 查询权限配置列表 {@link ListRoleConfigurationsRequest} {@link ListRoleConfigurationsResponse} */
  ListRoleConfigurations(data: ListRoleConfigurationsRequest, config?: AxiosRequestConfig): AxiosPromise<ListRoleConfigurationsResponse>;
  /** 查询SCIM密钥列表 {@link ListSCIMCredentialsRequest} {@link ListSCIMCredentialsResponse} */
  ListSCIMCredentials(data: ListSCIMCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<ListSCIMCredentialsResponse>;
  /** 查询某个指定策略关联的目标列表 {@link ListTargetsForPolicyRequest} {@link ListTargetsForPolicyResponse} */
  ListTargetsForPolicy(data: ListTargetsForPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ListTargetsForPolicyResponse>;
  /** 查询异步任务列表 {@link ListTasksRequest} {@link ListTasksResponse} */
  ListTasks(data: ListTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListTasksResponse>;
  /** 查询CAM用户同步列表 {@link ListUserSyncProvisioningsRequest} {@link ListUserSyncProvisioningsResponse} */
  ListUserSyncProvisionings(data: ListUserSyncProvisioningsRequest, config?: AxiosRequestConfig): AxiosPromise<ListUserSyncProvisioningsResponse>;
  /** 查询用户列表 {@link ListUsersRequest} {@link ListUsersResponse} */
  ListUsers(data: ListUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListUsersResponse>;
  /** 移动成员到指定企业组织节点 {@link MoveOrganizationNodeMembersRequest} {@link MoveOrganizationNodeMembersResponse} */
  MoveOrganizationNodeMembers(data: MoveOrganizationNodeMembersRequest, config?: AxiosRequestConfig): AxiosPromise<MoveOrganizationNodeMembersResponse>;
  /** 开通集团账号身份中心服务 {@link OpenIdentityCenterRequest} {@link OpenIdentityCenterResponse} */
  OpenIdentityCenter(data: OpenIdentityCenterRequest, config?: AxiosRequestConfig): AxiosPromise<OpenIdentityCenterResponse>;
  /** 将权限配置部署到成员账号上 {@link ProvisionRoleConfigurationRequest} {@link ProvisionRoleConfigurationResponse} */
  ProvisionRoleConfiguration(data: ProvisionRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<ProvisionRoleConfigurationResponse>;
  /** 退出企业组织 {@link QuitOrganizationRequest} {@link QuitOrganizationResponse} */
  QuitOrganization(data: QuitOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<QuitOrganizationResponse>;
  /** 拒绝加入共享单元邀请 {@link RejectJoinShareUnitInvitationRequest} {@link RejectJoinShareUnitInvitationResponse} */
  RejectJoinShareUnitInvitation(data: RejectJoinShareUnitInvitationRequest, config?: AxiosRequestConfig): AxiosPromise<RejectJoinShareUnitInvitationResponse>;
  /** 移除SAML签名证书 {@link RemoveExternalSAMLIdPCertificateRequest} {@link RemoveExternalSAMLIdPCertificateResponse} */
  RemoveExternalSAMLIdPCertificate(data: RemoveExternalSAMLIdPCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveExternalSAMLIdPCertificateResponse>;
  /** 为权限配置移除策略 {@link RemovePermissionPolicyFromRoleConfigurationRequest} {@link RemovePermissionPolicyFromRoleConfigurationResponse} */
  RemovePermissionPolicyFromRoleConfiguration(data: RemovePermissionPolicyFromRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<RemovePermissionPolicyFromRoleConfigurationResponse>;
  /** 从用户组中移除用户 {@link RemoveUserFromGroupRequest} {@link RemoveUserFromGroupResponse} */
  RemoveUserFromGroup(data: RemoveUserFromGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveUserFromGroupResponse>;
  /** 重新发送成员绑定邮箱激活邮件 {@link SendOrgMemberAccountBindEmailRequest} {@link SendOrgMemberAccountBindEmailResponse} */
  SendOrgMemberAccountBindEmail(data: SendOrgMemberAccountBindEmailRequest, config?: AxiosRequestConfig): AxiosPromise<SendOrgMemberAccountBindEmailResponse>;
  /** 配置SAML身份提供商信息 {@link SetExternalSAMLIdentityProviderRequest} {@link SetExternalSAMLIdentityProviderResponse} */
  SetExternalSAMLIdentityProvider(data: SetExternalSAMLIdentityProviderRequest, config?: AxiosRequestConfig): AxiosPromise<SetExternalSAMLIdentityProviderResponse>;
  /** 为权限配置修改自定义策略 {@link UpdateCustomPolicyForRoleConfigurationRequest} {@link UpdateCustomPolicyForRoleConfigurationResponse} */
  UpdateCustomPolicyForRoleConfiguration(data: UpdateCustomPolicyForRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCustomPolicyForRoleConfigurationResponse>;
  /** 修改用户组信息 {@link UpdateGroupRequest} {@link UpdateGroupResponse} */
  UpdateGroup(data: UpdateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGroupResponse>;
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
  /** 修改权限配置信息 {@link UpdateRoleConfigurationRequest} {@link UpdateRoleConfigurationResponse} */
  UpdateRoleConfiguration(data: UpdateRoleConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRoleConfigurationResponse>;
  /** 启用或禁用SCIM密钥 {@link UpdateSCIMCredentialStatusRequest} {@link UpdateSCIMCredentialStatusResponse} */
  UpdateSCIMCredentialStatus(data: UpdateSCIMCredentialStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSCIMCredentialStatusResponse>;
  /** 启用或禁用SCIM同步 {@link UpdateSCIMSynchronizationStatusRequest} {@link UpdateSCIMSynchronizationStatusResponse} */
  UpdateSCIMSynchronizationStatus(data: UpdateSCIMSynchronizationStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSCIMSynchronizationStatusResponse>;
  /** 更新共享单元 {@link UpdateShareUnitRequest} {@link UpdateShareUnitResponse} */
  UpdateShareUnit(data: UpdateShareUnitRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateShareUnitResponse>;
  /** 修改用户信息 {@link UpdateUserRequest} {@link UpdateUserResponse} */
  UpdateUser(data: UpdateUserRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserResponse>;
  /** 修改用户状态 {@link UpdateUserStatusRequest} {@link UpdateUserStatusResponse} */
  UpdateUserStatus(data: UpdateUserStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserStatusResponse>;
  /** 更新CAM用户同步 {@link UpdateUserSyncProvisioningRequest} {@link UpdateUserSyncProvisioningResponse} */
  UpdateUserSyncProvisioning(data: UpdateUserSyncProvisioningRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserSyncProvisioningResponse>;
  /** 修改空间名 {@link UpdateZoneRequest} {@link UpdateZoneResponse} */
  UpdateZone(data: UpdateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateZoneResponse>;
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
