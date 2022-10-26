/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 访问密钥列表 */
declare interface AccessKey {
  /** 访问密钥标识 */
  AccessKeyId: string;
  /** 密钥状态，激活（Active）或未激活（Inactive） */
  Status: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 策略关联的实体信息 */
declare interface AttachEntityOfPolicy {
  /** 实体ID */
  Id: string;
  /** 实体名称 */
  Name: string | null;
  /** 实体Uin */
  Uin: number | null;
  /** 关联类型。1 用户关联 ； 2 用户组关联 */
  RelatedType: number;
  /** 策略关联时间 */
  AttachmentTime: string | null;
}

/** 关联策略信息 */
declare interface AttachPolicyInfo {
  /** 策略id */
  PolicyId: number;
  /** 策略名称 */
  PolicyName: string | null;
  /** 创建时间 */
  AddTime: string | null;
  /** 创建来源，1 通过控制台创建, 2 通过策略语法创建。 */
  CreateMode: number | null;
  /** 取值为user和QCS */
  PolicyType: string | null;
  /** 策略备注 */
  Remark: string | null;
  /** 策略关联操作者主帐号 */
  OperateOwnerUin: string | null;
  /** 策略关联操作者ID，如果UinType为0表示子帐号Uin，如果UinType为1表示角色ID */
  OperateUin: string | null;
  /** UinType为0表示OperateUin字段是子帐号Uin，如果UinType为1表示OperateUin字段是角色ID */
  OperateUinType: number | null;
  /** 是否已下线 */
  Deactived: number | null;
  /** 已下线的产品列表 */
  DeactivedDetail: string[] | null;
}

/** 角色关联的策略信息 */
declare interface AttachedPolicyOfRole {
  /** 策略ID */
  PolicyId: number;
  /** 策略名称 */
  PolicyName: string;
  /** 绑定时间 */
  AddTime: string;
  /** 策略类型，User表示自定义策略，QCS表示预设策略 */
  PolicyType: string | null;
  /** 策略创建方式，1表示按产品功能或项目权限创建，其他表示按策略语法创建 */
  CreateMode: number;
  /** 是否已下线(0:否 1:是) */
  Deactived: number | null;
  /** 已下线的产品列表 */
  DeactivedDetail: string[] | null;
  /** 策略描述 */
  Description: string | null;
}

/** 用户关联的策略详情 */
declare interface AttachedUserPolicy {
  /** 策略ID */
  PolicyId: string;
  /** 策略名 */
  PolicyName: string;
  /** 策略描述 */
  Description: string;
  /** 创建时间 */
  AddTime: string;
  /** 策略类型(1表示自定义策略，2表示预设策略) */
  StrategyType: string;
  /** 创建模式(1表示按产品或项目权限创建的策略，其他表示策略语法创建的策略) */
  CreateMode: string;
  /** 随组关联信息 */
  Groups: AttachedUserPolicyGroupInfo[] | null;
  /** 是否已下线(0:否 1:是) */
  Deactived: number | null;
  /** 已下线的产品列表 */
  DeactivedDetail: string[] | null;
}

/** 用户关联策略(随组关联)信息 */
declare interface AttachedUserPolicyGroupInfo {
  /** 分组ID */
  GroupId: number;
  /** 分组名称 */
  GroupName: string;
}

/** 子用户和用户组关联信息 */
declare interface GroupIdOfUidInfo {
  /** 用户组 ID */
  GroupId: number;
  /** 子用户 UID */
  Uid?: number;
  /** 子用户 Uin，Uid和Uin至少有一个必填 */
  Uin?: number;
}

/** 用户组信息 */
declare interface GroupInfo {
  /** 用户组 ID。 */
  GroupId: number;
  /** 用户组名称。 */
  GroupName: string;
  /** 用户组创建时间。 */
  CreateTime: string;
  /** 用户组描述。 */
  Remark: string;
}

/** 用户组用户信息 */
declare interface GroupMemberInfo {
  /** 子用户 Uid。 */
  Uid: number;
  /** 子用户 Uin。 */
  Uin: number;
  /** 子用户名称。 */
  Name: string;
  /** 手机号。 */
  PhoneNum: string;
  /** 手机区域代码。 */
  CountryCode: string;
  /** 是否已验证手机。0-未验证 1-验证 */
  PhoneFlag: number;
  /** 邮箱地址。 */
  Email: string;
  /** 是否已验证邮箱。0-未验证 1-验证 */
  EmailFlag: number;
  /** 用户类型。1-全局协作者 2-项目协作者 3-消息接收者 */
  UserType: number;
  /** 创建时间。 */
  CreateTime: string;
  /** 是否为主消息接收人。0-否 1-是 */
  IsReceiverOwner: number;
}

/** ListGrantServiceAccessAction节点 */
declare interface ListGrantServiceAccessActionNode {
  /** 接口名 */
  Name: string;
  /** 接口描述 */
  Description: string;
}

/** 用于ListPoliciesGrantingServiceAccess接口的List节点 */
declare interface ListGrantServiceAccessNode {
  /** 服务 */
  Service: ListGrantServiceAccessService;
  /** 接口信息 */
  Action: ListGrantServiceAccessActionNode[];
  /** 授权的策略 */
  Policy: ListGrantServiceAccessPolicy[];
}

/** 用于ListPoliciesGrantingServiceAccess接口的Policy节点 */
declare interface ListGrantServiceAccessPolicy {
  /** 策略ID */
  PolicyId: string;
  /** 策略名 */
  PolicyName: string;
  /** 策略类型: Custom自定义策略，Presetting预设策略 */
  PolicyType: string;
  /** 策略描述 */
  PolicyDescription: string;
}

/** 用于ListPoliciesGrantingServiceAccess接口的Service节点 */
declare interface ListGrantServiceAccessService {
  /** 服务 */
  ServiceType: string;
  /** 服务名 */
  ServiceName: string;
}

/** 登录和敏感操作flag */
declare interface LoginActionFlag {
  /** 手机 */
  Phone?: number;
  /** 硬token */
  Token?: number;
  /** 软token */
  Stoken?: number;
  /** 微信 */
  Wechat?: number;
  /** 自定义 */
  Custom?: number;
}

/** 登录和敏感操作flag */
declare interface LoginActionFlagIntl {
  /** 手机 */
  Phone?: number;
  /** 硬token */
  Token?: number;
  /** 软token */
  Stoken?: number;
  /** 微信 */
  Wechat?: number;
  /** 自定义 */
  Custom?: number;
  /** 邮件 */
  Mail?: number;
}

/** 登录和敏感操作flag */
declare interface LoginActionMfaFlag {
  /** 手机 */
  Phone?: number;
  /** 软token */
  Stoken?: number;
  /** 微信 */
  Wechat?: number;
}

/** 异地登录设置 */
declare interface OffsiteFlag {
  /** 验证标识 */
  VerifyFlag?: number;
  /** 手机通知 */
  NotifyPhone?: number;
  /** 邮箱通知 */
  NotifyEmail?: number;
  /** 微信通知 */
  NotifyWechat?: number;
  /** 提示 */
  Tips?: number;
}

/** 策略版本详情 */
declare interface PolicyVersionDetail {
  /** 策略版本号 */
  VersionId: number | null;
  /** 策略版本创建时间 */
  CreateDate: string | null;
  /** 是否是正在生效的版本。0表示不是，1表示是 */
  IsDefaultVersion: number | null;
  /** 策略语法文本 */
  Document: string | null;
}

/** 策略版本列表元素结构 */
declare interface PolicyVersionItem {
  /** 策略版本号 */
  VersionId: number | null;
  /** 策略版本创建时间 */
  CreateDate: string | null;
  /** 是否是正在生效的版本。0表示不是，1表示是 */
  IsDefaultVersion: number | null;
}

/** 角色详细信息 */
declare interface RoleInfo {
  /** 角色ID */
  RoleId: string;
  /** 角色名称 */
  RoleName: string;
  /** 角色的策略文档 */
  PolicyDocument: string;
  /** 角色描述 */
  Description: string;
  /** 角色的创建时间 */
  AddTime: string;
  /** 角色的最近一次时间 */
  UpdateTime: string;
  /** 角色是否允许登录 */
  ConsoleLogin: number;
  /** 角色类型，取user、system或service_linked */
  RoleType: string | null;
  /** 有效时间 */
  SessionDuration: number | null;
  /** 服务相关角色删除TaskId */
  DeletionTaskId: string | null;
  /** 标签 */
  Tags: RoleTags[] | null;
}

/** 角色标签类型 */
declare interface RoleTags {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** SAML身份提供商 */
declare interface SAMLProviderInfo {
  /** SAML身份提供商名称 */
  Name: string;
  /** SAML身份提供商描述 */
  Description: string;
  /** SAML身份提供商创建时间 */
  CreateTime: string;
  /** SAML身份提供商上次修改时间 */
  ModifyTime: string;
}

/** 密钥最后使用时间 */
declare interface SecretIdLastUsed {
  /** 密钥ID */
  SecretId: string;
  /** 最后访问日期(有1天延迟) */
  LastUsedDate: string | null;
}

/** 策略信息 */
declare interface StrategyInfo {
  /** 策略ID。 */
  PolicyId: number;
  /** 策略名称。 */
  PolicyName: string;
  /** 策略创建时间。 */
  AddTime: string | null;
  /** 策略类型。1 表示自定义策略，2 表示预设策略。 */
  Type: number;
  /** 策略描述。 */
  Description: string | null;
  /** 创建来源，1 通过控制台创建, 2 通过策略语法创建。 */
  CreateMode: number;
  /** 关联的用户数 */
  Attachments: number;
  /** 策略关联的产品 */
  ServiceType: string | null;
  /** 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略 */
  IsAttached: number | null;
  /** 是否已下线 */
  Deactived: number | null;
  /** 已下线产品列表 */
  DeactivedDetail: string[] | null;
  /** 是否是服务相关角色策略 */
  IsServiceLinkedPolicy: number | null;
  /** 关联策略实体数 */
  AttachEntityCount: number | null;
  /** 关联权限边界实体数 */
  AttachEntityBoundaryCount: number | null;
  /** 最后编辑时间 */
  UpdateTime: string | null;
}

/** 子用户信息 */
declare interface SubAccountInfo {
  /** 子用户用户 ID */
  Uin: number;
  /** 子用户用户名 */
  Name: string;
  /** 子用户 UID */
  Uid: number;
  /** 子用户备注 */
  Remark: string;
  /** 子用户能否登录控制台 */
  ConsoleLogin: number;
  /** 手机号 */
  PhoneNum: string;
  /** 区号 */
  CountryCode: string;
  /** 邮箱 */
  Email: string;
  /** 创建时间 */
  CreateTime: string | null;
  /** 昵称 */
  NickName: string | null;
}

/** 子用户信息 */
declare interface SubAccountUser {
  /** 子用户用户 ID */
  Uin: number;
  /** 子用户用户名 */
  Name: string;
  /** 子用户 UID，UID是用户作为消息接收人时的唯一标识，和 UIN 一样可以唯一标识一个用户，可通过接口https://cloud.tencent.com/document/api/598/53486 获取 */
  Uid: number;
  /** 子用户备注 */
  Remark: string;
  /** 创建时间 */
  CreateTime: string | null;
  /** 用户类型(2:子用户;3:企业微信子用户;4:协作者;5:消息接收人) */
  UserType: number;
  /** 最近登录IP */
  LastLoginIp: string;
  /** 最近登录时间 */
  LastLoginTime: string | null;
}

/** 企业微信子用户 */
declare interface WeChatWorkSubAccount {
  /** 子用户用户 ID */
  Uin: number;
  /** 子用户用户名 */
  Name: string;
  /** 子用户 UID */
  Uid: number;
  /** 备注 */
  Remark: string;
  /** 子用户能否登录控制台 */
  ConsoleLogin: number;
  /** 手机号 */
  PhoneNum: string;
  /** 区号 */
  CountryCode: string;
  /** 邮箱 */
  Email: string;
  /** 企业微信UserId */
  WeChatWorkUserId: string | null;
  /** 创建时间 */
  CreateTime: string | null;
}

declare interface AddUserRequest {
  /** 子用户用户名 */
  Name: string;
  /** 子用户备注 */
  Remark?: string;
  /** 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。 */
  ConsoleLogin?: number;
  /** 是否生成子用户密钥。传0不生成子用户密钥，传1生成子用户密钥。 */
  UseApi?: number;
  /** 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。 */
  Password?: string;
  /** 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。 */
  NeedResetPassword?: number;
  /** 手机号 */
  PhoneNum?: string;
  /** 区号 */
  CountryCode?: string;
  /** 邮箱 */
  Email?: string;
}

declare interface AddUserResponse {
  /** 子用户 UIN */
  Uin: number;
  /** 子用户用户名 */
  Name: string;
  /** 如果输入参数组合为自动生成随机密码，则返回生成的密码 */
  Password: string;
  /** 子用户密钥 ID */
  SecretId: string;
  /** 子用户密钥 Key */
  SecretKey: string;
  /** 子用户 UID */
  Uid: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddUserToGroupRequest {
  /** 添加的子用户 UIN/UID 和用户组 ID 关联关系 */
  Info: GroupIdOfUidInfo[];
}

declare interface AddUserToGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AttachGroupPolicyRequest {
  /** 策略 id */
  PolicyId: number;
  /** 用户组 id */
  AttachGroupId: number;
}

declare interface AttachGroupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AttachRolePolicyRequest {
  /** 策略ID，入参PolicyId与PolicyName二选一 */
  PolicyId?: number;
  /** 角色ID，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一 */
  AttachRoleId?: string;
  /** 角色名称，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一 */
  AttachRoleName?: string;
  /** 策略名，入参PolicyId与PolicyName二选一 */
  PolicyName?: string;
}

declare interface AttachRolePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AttachUserPolicyRequest {
  /** 策略 id */
  PolicyId: number;
  /** 子账号 uin */
  AttachUin: number;
}

declare interface AttachUserPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ConsumeCustomMFATokenRequest {
  /** 自定义多因子验证Token */
  MFAToken: string;
}

declare interface ConsumeCustomMFATokenResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateGroupRequest {
  /** 用户组名 */
  GroupName: string;
  /** 用户组描述 */
  Remark?: string;
}

declare interface CreateGroupResponse {
  /** 用户组 ID */
  GroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOIDCConfigRequest {
  /** 身份提供商URL */
  IdentityUrl: string;
  /** 签名公钥，需要base64 */
  IdentityKey: string;
  /** 客户端ID */
  ClientId: string[];
  /** 名称 */
  Name: string;
  /** 描述 */
  Description?: string;
}

declare interface CreateOIDCConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreatePolicyRequest {
  /** 策略名 */
  PolicyName: string;
  /** 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo */
  PolicyDocument: string;
  /** 策略描述 */
  Description?: string;
}

declare interface CreatePolicyResponse {
  /** 新增策略ID */
  PolicyId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreatePolicyVersionRequest {
  /** 策略ID */
  PolicyId: number;
  /** 策略文本信息 */
  PolicyDocument: string;
  /** 是否设置为当前策略的版本 */
  SetAsDefault: boolean;
}

declare interface CreatePolicyVersionResponse {
  /** 策略版本号 */
  VersionId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRoleRequest {
  /** 角色名称 */
  RoleName: string;
  /** 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo */
  PolicyDocument: string;
  /** 角色描述 */
  Description?: string;
  /** 是否允许登录 1 为允许 0 为不允许 */
  ConsoleLogin?: number;
  /** 申请角色临时密钥的最长有效期限制(范围：0~43200) */
  SessionDuration?: number;
  /** 角色绑定标签 */
  Tags?: RoleTags[];
}

declare interface CreateRoleResponse {
  /** 角色ID */
  RoleId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSAMLProviderRequest {
  /** SAML身份提供商名称 */
  Name: string;
  /** SAML身份提供商描述 */
  Description: string;
  /** SAML身份提供商Base64编码的元数据文档 */
  SAMLMetadataDocument: string;
}

declare interface CreateSAMLProviderResponse {
  /** SAML身份提供商资源描述符 */
  ProviderArn: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateServiceLinkedRoleRequest {
  /** 授权服务，附加了此角色的腾讯云服务主体。 */
  QCSServiceName: string[];
  /** 自定义后缀，根据您提供的字符串，与服务提供的前缀组合在一起以形成完整的角色名称。 */
  CustomSuffix?: string;
  /** 角色说明。 */
  Description?: string;
  /** 角色绑定标签。 */
  Tags?: RoleTags[];
}

declare interface CreateServiceLinkedRoleResponse {
  /** 角色ID */
  RoleId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserOIDCConfigRequest {
  /** 身份提供商URL。OpenID Connect身份提供商标识。对应企业IdP提供的Openid-configuration中"issuer"字段的值。 */
  IdentityUrl: string;
  /** 签名公钥，需要base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的帐号安全，建议您定期轮换签名公钥。 */
  IdentityKey: string;
  /** 客户端ID，在OpenID Connect身份提供商注册的客户端ID。 */
  ClientId: string;
  /** 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值。 */
  AuthorizationEndpoint: string;
  /** 授权请求Response type，固定值id_token */
  ResponseType: string;
  /** 授权请求Response mode。授权请求返回模式，form_post和fragment两种可选模式，推荐选择form_post模式。 */
  ResponseMode: string;
  /** 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段 */
  MappingFiled: string;
  /** 授权请求Scope。openid; email;profile。授权请求信息范围。默认必选openid。 */
  Scope?: string[];
  /** 描述 */
  Description?: string;
}

declare interface CreateUserOIDCConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserSAMLConfigRequest {
  /** SAML元数据文档，需要base64 encode */
  SAMLMetadataDocument: string;
}

declare interface CreateUserSAMLConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteGroupRequest {
  /** 用户组 ID */
  GroupId: number;
}

declare interface DeleteGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteOIDCConfigRequest {
  /** OIDC身份提供商名称 */
  Name: string;
}

declare interface DeleteOIDCConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePolicyRequest {
  /** 数组，数组成员是策略 id，支持批量删除策略 */
  PolicyId: number[];
}

declare interface DeletePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePolicyVersionRequest {
  /** 策略ID */
  PolicyId: number;
  /** 策略版本号 */
  VersionId: number[];
}

declare interface DeletePolicyVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRolePermissionsBoundaryRequest {
  /** 角色ID（与角色名至少填一个） */
  RoleId?: string;
  /** 角色名（与角色ID至少填一个） */
  RoleName?: string;
}

declare interface DeleteRolePermissionsBoundaryResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRoleRequest {
  /** 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleId?: string;
  /** 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleName?: string;
}

declare interface DeleteRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSAMLProviderRequest {
  /** SAML身份提供商名称 */
  Name: string;
}

declare interface DeleteSAMLProviderResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteServiceLinkedRoleRequest {
  /** 要删除的服务相关角色的名称。 */
  RoleName: string;
}

declare interface DeleteServiceLinkedRoleResponse {
  /** 删除任务ID，可用于检查删除服务相关角色状态。 */
  DeletionTaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUserPermissionsBoundaryRequest {
  /** 子账号Uin */
  TargetUin: number;
}

declare interface DeleteUserPermissionsBoundaryResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUserRequest {
  /** 子用户用户名 */
  Name: string;
  /** 是否强制删除该子用户，默认入参为0。0：若该用户存在未删除API密钥，则不删除用户；1：若该用户存在未删除API密钥，则先删除密钥后删除用户。删除密钥需要您拥有cam:DeleteApiKey权限，您将可以删除该用户下启用或禁用状态的所有密钥，无权限则删除密钥和用户失败 */
  Force?: number;
}

declare interface DeleteUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOIDCConfigRequest {
  /** 名称 */
  Name: string;
}

declare interface DescribeOIDCConfigResponse {
  /** 身份提供商类型 11角色身份提供商 */
  ProviderType: number;
  /** 身份提供商URL */
  IdentityUrl: string;
  /** 签名公钥 */
  IdentityKey: string;
  /** 客户端id */
  ClientId: string[];
  /** 状态：0:未设置，11:已开启，2:已禁用 */
  Status: number;
  /** 描述 */
  Description: string;
  /** 名称 */
  Name: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRoleListRequest {
  /** 页码，从1开始 */
  Page: number;
  /** 每页行数，不能大于200 */
  Rp: number;
  /** 标签筛选 */
  Tags?: RoleTags[];
}

declare interface DescribeRoleListResponse {
  /** 角色详情列表。 */
  List: RoleInfo[] | null;
  /** 角色总数 */
  TotalNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSafeAuthFlagCollRequest {
  /** 子账号 */
  SubUin: number;
}

declare interface DescribeSafeAuthFlagCollResponse {
  /** 登录保护设置 */
  LoginFlag?: LoginActionFlag;
  /** 敏感操作保护设置 */
  ActionFlag?: LoginActionFlag;
  /** 异地登录保护设置 */
  OffsiteFlag?: OffsiteFlag;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSafeAuthFlagIntlRequest {
}

declare interface DescribeSafeAuthFlagIntlResponse {
  /** 登录保护设置 */
  LoginFlag: LoginActionFlagIntl;
  /** 敏感操作保护设置 */
  ActionFlag: LoginActionFlagIntl;
  /** 异地登录保护设置 */
  OffsiteFlag: OffsiteFlag;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSafeAuthFlagRequest {
}

declare interface DescribeSafeAuthFlagResponse {
  /** 登录保护设置 */
  LoginFlag: LoginActionFlag;
  /** 敏感操作保护设置 */
  ActionFlag: LoginActionFlag;
  /** 异地登录保护设置 */
  OffsiteFlag: OffsiteFlag;
  /** 1: 提示7天信任设备 0: 不提示 */
  PromptTrust: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubAccountsRequest {
  /** 子用户UIN列表，最多支持50个UIN */
  FilterSubAccountUin: number[];
}

declare interface DescribeSubAccountsResponse {
  /** 子用户列表 */
  SubAccounts: SubAccountUser[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserOIDCConfigRequest {
}

declare interface DescribeUserOIDCConfigResponse {
  /** 身份提供商类型。 12：用户OIDC身份提供商 */
  ProviderType: number;
  /** 身份提供商URL */
  IdentityUrl: string;
  /** 签名公钥 */
  IdentityKey: string;
  /** 客户端id */
  ClientId: string;
  /** 状态：0:未设置，11:已开启，2:已禁用 */
  Status: number;
  /** 授权请求Endpoint */
  AuthorizationEndpoint: string;
  /** 授权请求Scope */
  Scope: string[];
  /** 授权请求Response type */
  ResponseType: string;
  /** 授权请求Response mode */
  ResponseMode: string;
  /** 映射字段名称 */
  MappingFiled: string;
  /** 描述 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserSAMLConfigRequest {
}

declare interface DescribeUserSAMLConfigResponse {
  /** SAML元数据文档 */
  SAMLMetadata: string;
  /** 状态：0:未设置，1:已开启，2:已禁用 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachGroupPolicyRequest {
  /** 策略 id */
  PolicyId: number;
  /** 用户组 id */
  DetachGroupId: number;
}

declare interface DetachGroupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachRolePolicyRequest {
  /** 策略ID，入参PolicyId与PolicyName二选一 */
  PolicyId?: number;
  /** 角色ID，用于指定角色，入参 DetachRoleId 与 DetachRoleName 二选一 */
  DetachRoleId?: string;
  /** 角色名称，用于指定角色，入参 DetachRoleId 与 DetachRoleName 二选一 */
  DetachRoleName?: string;
  /** 策略名，入参PolicyId与PolicyName二选一 */
  PolicyName?: string;
}

declare interface DetachRolePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachUserPolicyRequest {
  /** 策略 id */
  PolicyId: number;
  /** 子账号 uin */
  DetachUin: number;
}

declare interface DetachUserPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableUserSSORequest {
}

declare interface DisableUserSSOResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetAccountSummaryRequest {
}

declare interface GetAccountSummaryResponse {
  /** 策略数 */
  Policies: number;
  /** 角色数 */
  Roles: number;
  /** 身份提供商数 */
  Idps: number;
  /** 子账户数 */
  User: number;
  /** 分组数 */
  Group: number;
  /** 分组用户总数 */
  Member: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetCustomMFATokenInfoRequest {
  /** 自定义多因子验证Token */
  MFAToken: string;
}

declare interface GetCustomMFATokenInfoResponse {
  /** 自定义多因子验证Token对应的帐号Id */
  Uin?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetGroupRequest {
  /** 用户组 ID */
  GroupId: number;
}

declare interface GetGroupResponse {
  /** 用户组 ID */
  GroupId?: number;
  /** 用户组名称 */
  GroupName?: string;
  /** 用户组成员数量 */
  GroupNum?: number;
  /** 用户组描述 */
  Remark?: string;
  /** 用户组创建时间 */
  CreateTime?: string;
  /** 用户组成员信息 */
  UserInfo?: GroupMemberInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetPolicyRequest {
  /** 策略Id */
  PolicyId: number;
}

declare interface GetPolicyResponse {
  /** 策略名 */
  PolicyName?: string | null;
  /** 策略描述 */
  Description?: string | null;
  /** 1 表示自定义策略，2 表示预设策略 */
  Type?: number | null;
  /** 创建时间 */
  AddTime?: string | null;
  /** 最近更新时间 */
  UpdateTime?: string | null;
  /** 策略文档 */
  PolicyDocument?: string | null;
  /** 备注 */
  PresetAlias?: string | null;
  /** 是否服务相关策略 */
  IsServiceLinkedRolePolicy?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetPolicyVersionRequest {
  /** 策略ID */
  PolicyId: number;
  /** 策略版本号，可由ListPolicyVersions获取 */
  VersionId: number;
}

declare interface GetPolicyVersionResponse {
  /** 策略版本详情 */
  PolicyVersion: PolicyVersionDetail | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRolePermissionBoundaryRequest {
  /** 角色ID */
  RoleId: string;
}

declare interface GetRolePermissionBoundaryResponse {
  /** 策略ID */
  PolicyId?: number | null;
  /** 策略名 */
  PolicyName?: string | null;
  /** 策略语法 */
  PolicyDocument?: string | null;
  /** 策略类型：1.自定义策略，2.预设策略 */
  PolicyType?: number | null;
  /** 创建方式：1.按产品功能或项目权限创建，2.按策略语法创建，3.按策略生成器创建，4.按标签授权创建，5.按权限边界规则创建 */
  CreateMode?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRoleRequest {
  /** 角色 ID，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleId?: string;
  /** 角色名，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleName?: string;
}

declare interface GetRoleResponse {
  /** 角色详情 */
  RoleInfo: RoleInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetSAMLProviderRequest {
  /** SAML身份提供商名称 */
  Name: string;
}

declare interface GetSAMLProviderResponse {
  /** SAML身份提供商名称 */
  Name: string;
  /** SAML身份提供商描述 */
  Description: string;
  /** SAML身份提供商创建时间 */
  CreateTime: string;
  /** SAML身份提供商上次修改时间 */
  ModifyTime: string;
  /** SAML身份提供商元数据文档 */
  SAMLMetadata: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetSecurityLastUsedRequest {
  /** 查询密钥ID列表。最多支持10个。 */
  SecretIdList: string[];
}

declare interface GetSecurityLastUsedResponse {
  /** 密钥ID最近访问列表 */
  SecretIdLastUsedRows: SecretIdLastUsed[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetServiceLinkedRoleDeletionStatusRequest {
  /** 删除任务ID */
  DeletionTaskId: string;
}

declare interface GetServiceLinkedRoleDeletionStatusResponse {
  /** 状态：NOT_STARTED，IN_PROGRESS，SUCCEEDED，FAILED */
  Status?: string;
  /** 失败原因 */
  Reason?: string;
  /** 服务类型 */
  ServiceType?: string | null;
  /** 服务名称 */
  ServiceName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUserAppIdRequest {
}

declare interface GetUserAppIdResponse {
  /** 当前账号Uin */
  Uin?: string;
  /** 当前账号OwnerUin */
  OwnerUin?: string;
  /** 当前账号AppId */
  AppId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUserPermissionBoundaryRequest {
  /** 子账号Uin */
  TargetUin: number;
}

declare interface GetUserPermissionBoundaryResponse {
  /** 策略ID */
  PolicyId?: number | null;
  /** 策略名 */
  PolicyName?: string | null;
  /** 策略语法 */
  PolicyDocument?: string | null;
  /** 策略类型：1.自定义策略，2.预设策略 */
  PolicyType?: number | null;
  /** 创建方式：1.按产品功能或项目权限创建，2.按策略语法创建，3.按策略生成器创建，4.按标签授权创建，5.按权限边界规则创建 */
  CreateMode?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUserRequest {
  /** 子用户用户名 */
  Name: string;
}

declare interface GetUserResponse {
  /** 子用户用户 UIN */
  Uin: number;
  /** 子用户用户名 */
  Name: string;
  /** 子用户 UID */
  Uid: number;
  /** 子用户备注 */
  Remark: string | null;
  /** 子用户能否登录控制台 0-无法登录控制台，1-可以登录控制台 */
  ConsoleLogin: number;
  /** 手机号 */
  PhoneNum: string;
  /** 区号 */
  CountryCode: string;
  /** 邮箱 */
  Email: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAccessKeysRequest {
  /** 指定用户Uin，不填默认列出当前用户访问密钥 */
  TargetUin?: number;
}

declare interface ListAccessKeysResponse {
  /** 访问密钥列表 */
  AccessKeys: AccessKey[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAttachedGroupPoliciesRequest {
  /** 用户组ID */
  TargetGroupId: number;
  /** 页码，默认值是 1，从 1 开始 */
  Page?: number;
  /** 每页大小，默认值是 20 */
  Rp?: number;
  /** 搜索关键字 */
  Keyword?: string;
}

declare interface ListAttachedGroupPoliciesResponse {
  /** 策略总数 */
  TotalNum: number;
  /** 策略列表 */
  List: AttachPolicyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAttachedRolePoliciesRequest {
  /** 页码，从 1 开始 */
  Page: number;
  /** 每页行数，不能大于200 */
  Rp: number;
  /** 角色 ID。用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleId?: string;
  /** 角色名。用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleName?: string;
  /** 按策略类型过滤，User表示仅查询自定义策略，QCS表示仅查询预设策略 */
  PolicyType?: string;
  /** 搜索关键字 */
  Keyword?: string;
}

declare interface ListAttachedRolePoliciesResponse {
  /** 角色关联的策略列表 */
  List: AttachedPolicyOfRole[];
  /** 角色关联的策略总数 */
  TotalNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAttachedUserAllPoliciesRequest {
  /** 目标用户ID */
  TargetUin: number;
  /** 每页数量，必须大于 0 且小于或等于 200 */
  Rp: number;
  /** 页码，从 1开始，不能大于 200 */
  Page: number;
  /** 0:返回直接关联和随组关联策略，1:只返回直接关联策略，2:只返回随组关联策略 */
  AttachType: number;
  /** 策略类型 */
  StrategyType?: number;
  /** 搜索关键字 */
  Keyword?: string;
}

declare interface ListAttachedUserAllPoliciesResponse {
  /** 策略列表数据 */
  PolicyList: AttachedUserPolicy[];
  /** 策略总数 */
  TotalNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAttachedUserPoliciesRequest {
  /** 子账号 uin */
  TargetUin: number;
  /** 页码，默认值是 1，从 1 开始 */
  Page?: number;
  /** 每页大小，默认值是 20 */
  Rp?: number;
}

declare interface ListAttachedUserPoliciesResponse {
  /** 策略总数 */
  TotalNum: number;
  /** 策略列表 */
  List: AttachPolicyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListCollaboratorsRequest {
  /** 分页条数，缺省为20 */
  Limit?: number;
  /** 分页起始值，缺省为0 */
  Offset?: number;
}

declare interface ListCollaboratorsResponse {
  /** 总数 */
  TotalNum: number;
  /** 协作者信息 */
  Data: SubAccountInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListEntitiesForPolicyRequest {
  /** 策略 id */
  PolicyId: number;
  /** 页码，默认值是 1，从 1 开始 */
  Page?: number;
  /** 每页大小，默认值是 20 */
  Rp?: number;
  /** 可取值 'All'、'User'、'Group' 和 'Role'，'All' 表示获取所有实体类型，'User' 表示只获取子账号，'Group' 表示只获取用户组，'Role' 表示只获取角色，默认取 'All' */
  EntityFilter?: string;
}

declare interface ListEntitiesForPolicyResponse {
  /** 实体总数 */
  TotalNum: number | null;
  /** 实体列表 */
  List: AttachEntityOfPolicy[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListGroupsForUserRequest {
  /** 子用户 UID */
  Uid?: number;
  /** 每页数量。默认为20。 */
  Rp?: number;
  /** 页码。默认为1。 */
  Page?: number;
  /** 子账号UIN */
  SubUin?: number;
}

declare interface ListGroupsForUserResponse {
  /** 子用户加入的用户组总数 */
  TotalNum?: number;
  /** 用户组信息 */
  GroupInfo?: GroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListGroupsRequest {
  /** 页码。默认为1。 */
  Page?: number;
  /** 每页数量。默认为20。 */
  Rp?: number;
  /** 按用户组名称匹配。 */
  Keyword?: string;
}

declare interface ListGroupsResponse {
  /** 用户组总数。 */
  TotalNum?: number;
  /** 用户组数组信息。 */
  GroupInfo?: GroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListPoliciesGrantingServiceAccessRequest {
  /** 子账号uin，与RoleId、GroupId三选一必传 */
  TargetUin?: number;
  /** 角色ID，与TargetUin、GroupId三选一必传 */
  RoleId?: number;
  /** 用户组ID，与TargetUin、RoleId三选一必传 */
  GroupId?: number;
  /** 服务名，查看服务授权接口详情时需传该字段 */
  ServiceType?: string;
}

declare interface ListPoliciesGrantingServiceAccessResponse {
  /** 列表 */
  List: ListGrantServiceAccessNode[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListPoliciesRequest {
  /** 每页数量，默认值是 20，必须大于 0 且小于或等于 200 */
  Rp?: number;
  /** 页码，默认值是 1，从 1开始，不能大于 200 */
  Page?: number;
  /** 可取值 'All'、'QCS' 和 'Local'，'All' 获取所有策略，'QCS' 只获取预设策略，'Local' 只获取自定义策略，默认取 'All' */
  Scope?: string;
  /** 按策略名匹配 */
  Keyword?: string;
}

declare interface ListPoliciesResponse {
  /** 策略总数 */
  TotalNum?: number;
  /** 策略数组，数组每个成员包括 policyId、policyName、addTime、type、description、 createMode 字段。其中： policyId：策略 id policyName：策略名addTime：策略创建时间type：1 表示自定义策略，2 表示预设策略 description：策略描述 createMode：1 表示按业务权限创建的策略，其他值表示可以查看策略语法和通过策略语法更新策略Attachments: 关联的用户数ServiceType: 策略关联的产品IsAttached: 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略 */
  List?: StrategyInfo[];
  /** 保留字段 */
  ServiceTypeList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListPolicyVersionsRequest {
  /** 策略ID */
  PolicyId: number;
}

declare interface ListPolicyVersionsResponse {
  /** 策略版本列表 */
  Versions?: PolicyVersionItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListSAMLProvidersRequest {
}

declare interface ListSAMLProvidersResponse {
  /** SAML身份提供商总数 */
  TotalCount?: number;
  /** SAML身份提供商列表 */
  SAMLProviderSet?: SAMLProviderInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUsersForGroupRequest {
  /** 用户组 ID。 */
  GroupId: number;
  /** 页码。默认为1。 */
  Page?: number;
  /** 每页数量。默认为20。 */
  Rp?: number;
}

declare interface ListUsersForGroupResponse {
  /** 用户组关联的用户总数。 */
  TotalNum?: number;
  /** 子用户信息。 */
  UserInfo?: GroupMemberInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUsersRequest {
}

declare interface ListUsersResponse {
  /** 子用户信息 */
  Data: SubAccountInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListWeChatWorkSubAccountsRequest {
  /** 偏移量 */
  Offset: number;
  /** 限制数目 */
  Limit: number;
}

declare interface ListWeChatWorkSubAccountsResponse {
  /** 企业微信子用户列表。 */
  Data?: WeChatWorkSubAccount[];
  /** 总数目。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PutRolePermissionsBoundaryRequest {
  /** 策略ID */
  PolicyId: number;
  /** 角色ID（与角色名至少填一个） */
  RoleId?: string;
  /** 角色名（与角色ID至少填一个） */
  RoleName?: string;
}

declare interface PutRolePermissionsBoundaryResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PutUserPermissionsBoundaryRequest {
  /** 子账号Uin */
  TargetUin: number;
  /** 策略ID */
  PolicyId: number;
}

declare interface PutUserPermissionsBoundaryResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveUserFromGroupRequest {
  /** 要删除的用户 UIN/UID和用户组 ID对应数组 */
  Info: GroupIdOfUidInfo[];
}

declare interface RemoveUserFromGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetDefaultPolicyVersionRequest {
  /** 策略ID */
  PolicyId: number;
  /** 策略版本号，可由ListPolicyVersions获取 */
  VersionId: number;
}

declare interface SetDefaultPolicyVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetMfaFlagRequest {
  /** 设置用户的uin */
  OpUin?: number;
  /** 登录保护设置 */
  LoginFlag?: LoginActionMfaFlag;
  /** 操作保护设置 */
  ActionFlag?: LoginActionMfaFlag;
}

declare interface SetMfaFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TagRoleRequest {
  /** 标签 */
  Tags: RoleTags[];
  /** 角色名，与角色ID至少输入一个 */
  RoleName?: string;
  /** 角色ID，与角色名至少输入一个 */
  RoleId?: string;
}

declare interface TagRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UntagRoleRequest {
  /** 标签键 */
  TagKeys: string[];
  /** 角色名，与角色ID至少输入一个 */
  RoleName?: string;
  /** 角色ID，与角色名至少输入一个 */
  RoleId?: string;
}

declare interface UntagRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAssumeRolePolicyRequest {
  /** 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo */
  PolicyDocument: string;
  /** 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleId?: string;
  /** 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleName?: string;
}

declare interface UpdateAssumeRolePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateGroupRequest {
  /** 用户组 ID */
  GroupId: number;
  /** 用户组名 */
  GroupName?: string;
  /** 用户组描述 */
  Remark?: string;
}

declare interface UpdateGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateOIDCConfigRequest {
  /** 身份提供商URL */
  IdentityUrl: string;
  /** 签名公钥，需要base64 */
  IdentityKey: string;
  /** 客户端ID */
  ClientId: string[];
  /** 名称 */
  Name: string;
  /** 描述 */
  Description?: string;
}

declare interface UpdateOIDCConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdatePolicyRequest {
  /** 策略ID，与PolicyName二选一必填 */
  PolicyId?: number;
  /** 策略名，与PolicyId二选一必填 */
  PolicyName?: string;
  /** 策略描述 */
  Description?: string;
  /** 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo */
  PolicyDocument?: string;
  /** 预设策略备注 */
  Alias?: string;
}

declare interface UpdatePolicyResponse {
  /** 策略id，入参是PolicyName时，才会返回 */
  PolicyId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateRoleConsoleLoginRequest {
  /** 是否可登录，可登录：1，不可登录：0 */
  ConsoleLogin: number;
  /** 角色ID，入参 RoleId 与 RoleName 二选一 */
  RoleId?: number;
  /** 角色名，入参 RoleId 与 RoleName 二选一 */
  RoleName?: string;
}

declare interface UpdateRoleConsoleLoginResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateRoleDescriptionRequest {
  /** 角色描述 */
  Description: string;
  /** 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleId?: string;
  /** 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一 */
  RoleName?: string;
}

declare interface UpdateRoleDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateSAMLProviderRequest {
  /** SAML身份提供商名称 */
  Name: string;
  /** SAML身份提供商描述 */
  Description?: string;
  /** SAML身份提供商Base64编码的元数据文档 */
  SAMLMetadataDocument?: string;
}

declare interface UpdateSAMLProviderResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateUserOIDCConfigRequest {
  /** 身份提供商URL。OpenID Connect身份提供商标识。对应企业IdP提供的Openid-configuration中"issuer"字段的值。 */
  IdentityUrl: string;
  /** 签名公钥，需要base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的帐号安全，建议您定期轮换签名公钥。 */
  IdentityKey: string;
  /** 客户端ID，在OpenID Connect身份提供商注册的客户端ID。 */
  ClientId: string;
  /** 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值。 */
  AuthorizationEndpoint: string;
  /** 授权请求Response type，固定值id_token。 */
  ResponseType: string;
  /** 授权请求Response mode。授权请求返回模式，form_post和fragment两种可选模式，推荐选择form_post模式。 */
  ResponseMode: string;
  /** 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段 */
  MappingFiled: string;
  /** 授权请求Scope。openid; email;profile。授权请求信息范围。默认必选openid。 */
  Scope?: string[];
  /** 描述 */
  Description?: string;
}

declare interface UpdateUserOIDCConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateUserRequest {
  /** 子用户用户名 */
  Name: string;
  /** 子用户备注 */
  Remark?: string;
  /** 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。 */
  ConsoleLogin?: number;
  /** 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。 */
  Password?: string;
  /** 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。 */
  NeedResetPassword?: number;
  /** 手机号 */
  PhoneNum?: string;
  /** 区号 */
  CountryCode?: string;
  /** 邮箱 */
  Email?: string;
}

declare interface UpdateUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateUserSAMLConfigRequest {
  /** 修改的操作类型:enable:启用,disable:禁用,updateSAML:修改元数据文档 */
  Operate: string;
  /** 元数据文档，需要base64 encode，仅当Operate为updateSAML时需要此参数 */
  SAMLMetadataDocument?: string;
}

declare interface UpdateUserSAMLConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [访问管理](https://cloud.tencent.com/document/product/598) */
declare interface Cam {
  (): Versions;
  /** 添加子用户 */
  AddUser(data: AddUserRequest, config?: AxiosRequestConfig): AxiosPromise<AddUserResponse>;
  /** 用户加入到用户组 */
  AddUserToGroup(data: AddUserToGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddUserToGroupResponse>;
  /** 绑定策略到用户组 */
  AttachGroupPolicy(data: AttachGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachGroupPolicyResponse>;
  /** 绑定权限策略到角色 */
  AttachRolePolicy(data?: AttachRolePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachRolePolicyResponse>;
  /** 绑定策略到用户 */
  AttachUserPolicy(data: AttachUserPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<AttachUserPolicyResponse>;
  /** 验证自定义多因子Token */
  ConsumeCustomMFAToken(data: ConsumeCustomMFATokenRequest, config?: AxiosRequestConfig): AxiosPromise<ConsumeCustomMFATokenResponse>;
  /** 创建用户组 */
  CreateGroup(data: CreateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupResponse>;
  /** 创建角色OIDC配置 */
  CreateOIDCConfig(data: CreateOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOIDCConfigResponse>;
  /** 创建策略 */
  CreatePolicy(data: CreatePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePolicyResponse>;
  /** 新增策略版本接口 */
  CreatePolicyVersion(data: CreatePolicyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePolicyVersionResponse>;
  /** 创建角色 */
  CreateRole(data: CreateRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoleResponse>;
  /** 创建SAML身份提供商 */
  CreateSAMLProvider(data: CreateSAMLProviderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSAMLProviderResponse>;
  /** 创建服务相关角色 */
  CreateServiceLinkedRole(data: CreateServiceLinkedRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceLinkedRoleResponse>;
  /** 创建用户OIDC配置 */
  CreateUserOIDCConfig(data: CreateUserOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserOIDCConfigResponse>;
  /** 创建用户SAML配置 */
  CreateUserSAMLConfig(data: CreateUserSAMLConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserSAMLConfigResponse>;
  /** 删除用户组 */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 删除OIDC身份提供商 */
  DeleteOIDCConfig(data: DeleteOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOIDCConfigResponse>;
  /** 删除策略 */
  DeletePolicy(data: DeletePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePolicyResponse>;
  /** 删除策略的策略版本 */
  DeletePolicyVersion(data: DeletePolicyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePolicyVersionResponse>;
  /** 删除角色 */
  DeleteRole(data?: DeleteRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoleResponse>;
  /** 删除角色权限边界 */
  DeleteRolePermissionsBoundary(data?: DeleteRolePermissionsBoundaryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRolePermissionsBoundaryResponse>;
  /** 删除SAML身份提供商 */
  DeleteSAMLProvider(data: DeleteSAMLProviderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSAMLProviderResponse>;
  /** 删除服务相关角色 */
  DeleteServiceLinkedRole(data: DeleteServiceLinkedRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceLinkedRoleResponse>;
  /** 删除子用户 */
  DeleteUser(data: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** 删除用户权限边界 */
  DeleteUserPermissionsBoundary(data: DeleteUserPermissionsBoundaryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserPermissionsBoundaryResponse>;
  /** 查询角色OIDC配置 */
  DescribeOIDCConfig(data: DescribeOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOIDCConfigResponse>;
  /** 获取角色列表 */
  DescribeRoleList(data: DescribeRoleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoleListResponse>;
  /** 查询用户安全设置 */
  DescribeSafeAuthFlag(data?: DescribeSafeAuthFlagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSafeAuthFlagResponse>;
  /** 查询安全设置 */
  DescribeSafeAuthFlagColl(data: DescribeSafeAuthFlagCollRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSafeAuthFlagCollResponse>;
  /** 查询安全设置(国际站) */
  DescribeSafeAuthFlagIntl(data?: DescribeSafeAuthFlagIntlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSafeAuthFlagIntlResponse>;
  /** 通过子用户UIN列表查询子用户 */
  DescribeSubAccounts(data: DescribeSubAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubAccountsResponse>;
  /** 查询用户OIDC配置 */
  DescribeUserOIDCConfig(data?: DescribeUserOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserOIDCConfigResponse>;
  /** 查询用户SAML配置 */
  DescribeUserSAMLConfig(data?: DescribeUserSAMLConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserSAMLConfigResponse>;
  /** 解除绑定到用户组的策略 */
  DetachGroupPolicy(data: DetachGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DetachGroupPolicyResponse>;
  /** 解绑角色的策略 */
  DetachRolePolicy(data?: DetachRolePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DetachRolePolicyResponse>;
  /** 解除绑定到用户的策略 */
  DetachUserPolicy(data: DetachUserPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DetachUserPolicyResponse>;
  /** 禁用用户SSO */
  DisableUserSSO(data?: DisableUserSSORequest, config?: AxiosRequestConfig): AxiosPromise<DisableUserSSOResponse>;
  /** 查询账户摘要 */
  GetAccountSummary(data?: GetAccountSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<GetAccountSummaryResponse>;
  /** 获取自定义多因子Token关联信息 */
  GetCustomMFATokenInfo(data: GetCustomMFATokenInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetCustomMFATokenInfoResponse>;
  /** 查询用户组详情 */
  GetGroup(data: GetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupResponse>;
  /** 查看策略详情 */
  GetPolicy(data: GetPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<GetPolicyResponse>;
  /** 查询策略版本详情 */
  GetPolicyVersion(data: GetPolicyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<GetPolicyVersionResponse>;
  /** 获取角色详情 */
  GetRole(data?: GetRoleRequest, config?: AxiosRequestConfig): AxiosPromise<GetRoleResponse>;
  /** 获取角色权限边界 */
  GetRolePermissionBoundary(data: GetRolePermissionBoundaryRequest, config?: AxiosRequestConfig): AxiosPromise<GetRolePermissionBoundaryResponse>;
  /** 查询SAML身份提供商详情 */
  GetSAMLProvider(data: GetSAMLProviderRequest, config?: AxiosRequestConfig): AxiosPromise<GetSAMLProviderResponse>;
  /** 获取密钥最近使用情况 */
  GetSecurityLastUsed(data: GetSecurityLastUsedRequest, config?: AxiosRequestConfig): AxiosPromise<GetSecurityLastUsedResponse>;
  /** 获取服务相关角色删除状态 */
  GetServiceLinkedRoleDeletionStatus(data: GetServiceLinkedRoleDeletionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetServiceLinkedRoleDeletionStatusResponse>;
  /** 查询子用户 */
  GetUser(data: GetUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserResponse>;
  /** 获取用户AppId */
  GetUserAppId(data?: GetUserAppIdRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserAppIdResponse>;
  /** 获取用户权限边界 */
  GetUserPermissionBoundary(data: GetUserPermissionBoundaryRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserPermissionBoundaryResponse>;
  /** 列出访问密钥 */
  ListAccessKeys(data?: ListAccessKeysRequest, config?: AxiosRequestConfig): AxiosPromise<ListAccessKeysResponse>;
  /** 查询用户组关联的策略列表 */
  ListAttachedGroupPolicies(data: ListAttachedGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAttachedGroupPoliciesResponse>;
  /** 获取角色绑定的策略列表 */
  ListAttachedRolePolicies(data: ListAttachedRolePoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAttachedRolePoliciesResponse>;
  /** 列出用户关联的策略（包括随组关联） */
  ListAttachedUserAllPolicies(data: ListAttachedUserAllPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAttachedUserAllPoliciesResponse>;
  /** 查询子账号关联的策略列表 */
  ListAttachedUserPolicies(data: ListAttachedUserPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAttachedUserPoliciesResponse>;
  /** 获取协作者列表 */
  ListCollaborators(data?: ListCollaboratorsRequest, config?: AxiosRequestConfig): AxiosPromise<ListCollaboratorsResponse>;
  /** 查询策略关联的实体列表 */
  ListEntitiesForPolicy(data: ListEntitiesForPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ListEntitiesForPolicyResponse>;
  /** 查询用户组列表 */
  ListGroups(data?: ListGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ListGroupsResponse>;
  /** 列出用户关联的用户组 */
  ListGroupsForUser(data?: ListGroupsForUserRequest, config?: AxiosRequestConfig): AxiosPromise<ListGroupsForUserResponse>;
  /** 查询策略列表 */
  ListPolicies(data?: ListPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ListPoliciesResponse>;
  /** 获取所有已授权服务 */
  ListPoliciesGrantingServiceAccess(data?: ListPoliciesGrantingServiceAccessRequest, config?: AxiosRequestConfig): AxiosPromise<ListPoliciesGrantingServiceAccessResponse>;
  /** 获取策略版本列表 */
  ListPolicyVersions(data: ListPolicyVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<ListPolicyVersionsResponse>;
  /** 查询SAML身份提供商列表 */
  ListSAMLProviders(data?: ListSAMLProvidersRequest, config?: AxiosRequestConfig): AxiosPromise<ListSAMLProvidersResponse>;
  /** 拉取子用户 */
  ListUsers(data?: ListUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListUsersResponse>;
  /** 查询用户组关联的用户列表 */
  ListUsersForGroup(data: ListUsersForGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ListUsersForGroupResponse>;
  /** 获取企业微信子用户列表 */
  ListWeChatWorkSubAccounts(data: ListWeChatWorkSubAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWeChatWorkSubAccountsResponse>;
  /** 设置角色权限边界 */
  PutRolePermissionsBoundary(data: PutRolePermissionsBoundaryRequest, config?: AxiosRequestConfig): AxiosPromise<PutRolePermissionsBoundaryResponse>;
  /** 设置用户权限边界 */
  PutUserPermissionsBoundary(data: PutUserPermissionsBoundaryRequest, config?: AxiosRequestConfig): AxiosPromise<PutUserPermissionsBoundaryResponse>;
  /** 从用户组删除用户 */
  RemoveUserFromGroup(data: RemoveUserFromGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveUserFromGroupResponse>;
  /** 设置生效的策略版本 */
  SetDefaultPolicyVersion(data: SetDefaultPolicyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<SetDefaultPolicyVersionResponse>;
  /** 设置子用户的登录保护和敏感操作校验方式 */
  SetMfaFlag(data?: SetMfaFlagRequest, config?: AxiosRequestConfig): AxiosPromise<SetMfaFlagResponse>;
  /** 角色绑定标签 */
  TagRole(data: TagRoleRequest, config?: AxiosRequestConfig): AxiosPromise<TagRoleResponse>;
  /** 角色解绑标签 */
  UntagRole(data: UntagRoleRequest, config?: AxiosRequestConfig): AxiosPromise<UntagRoleResponse>;
  /** 修改角色信任策略 */
  UpdateAssumeRolePolicy(data: UpdateAssumeRolePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAssumeRolePolicyResponse>;
  /** 更新用户组 */
  UpdateGroup(data: UpdateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGroupResponse>;
  /** 修改角色OIDC配置 */
  UpdateOIDCConfig(data: UpdateOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOIDCConfigResponse>;
  /** 更新策略信息 */
  UpdatePolicy(data?: UpdatePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePolicyResponse>;
  /** 修改角色是否可登录 */
  UpdateRoleConsoleLogin(data: UpdateRoleConsoleLoginRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRoleConsoleLoginResponse>;
  /** 修改角色描述信息 */
  UpdateRoleDescription(data: UpdateRoleDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRoleDescriptionResponse>;
  /** 更新SAML身份提供商信息 */
  UpdateSAMLProvider(data: UpdateSAMLProviderRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSAMLProviderResponse>;
  /** 更新子用户 */
  UpdateUser(data: UpdateUserRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserResponse>;
  /** 修改用户OIDC配置 */
  UpdateUserOIDCConfig(data: UpdateUserOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserOIDCConfigResponse>;
  /** 修改用户SAML配置 */
  UpdateUserSAMLConfig(data: UpdateUserSAMLConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserSAMLConfigResponse>;
}

export declare type Versions = ["2019-01-16"];

export default Cam;
