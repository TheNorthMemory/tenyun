/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 查询账号组信息列表。 */
declare interface AccountGroupInfo {
  /** 账号组ID。 */
  AccountGroupId?: string;
  /** 账号组名。 */
  GroupName: string;
  /** 备注。 */
  Description: string;
  /** 创建时间。 */
  CreatedDate: string;
}

/** 账号组查询参数 */
declare interface AccountGroupSearchCriteria {
  /** 关键字 */
  Keyword?: string;
}

/** 查询账号信息列表。 */
declare interface AppAccountInfo {
  /** 账号ID。 */
  AccountId: string;
  /** 账号名。 */
  AccountName: string | null;
  /** 用户信息列表。 */
  UserList: LinkUserInfo[] | null;
  /** 描述。 */
  Description: string | null;
  /** 创建时间。 */
  CreatedDate: string | null;
}

/** 账号查询参数 */
declare interface AppAccountSearchCriteria {
  /** 关键字 */
  Keyword?: string;
}

/** 应用信息列表。 */
declare interface ApplicationAuthorizationInfo {
  /** 用户在被授权应用下对应的账号列表 */
  ApplicationAccounts: string[] | null;
  /** 应用ID，是应用的全局唯一标识。 */
  ApplicationId: string | null;
  /** 展示用户所在的用户组、机构节点拥有该应用的访问权限的ID信息列表。 */
  InheritedForm: InheritedForm | null;
  /** 应用名称。 */
  ApplicationName: string | null;
  /** 应用创建时间。 */
  CreatedDate: string | null;
}

/** 应用属性搜索条件。 */
declare interface ApplicationInfoSearchCriteria {
  /** 应用匹配搜索关键字，匹配范围包括：应用名称、应用ID。 */
  Keyword?: string;
  /** 应用类型。ApplicationType的取值范围有：OAUTH2、JWT、CAS、SAML2、FORM、OIDC、APIGW。 */
  ApplicationType?: string;
}

/** 应用信息列表。 */
declare interface ApplicationInformation {
  /** 应用ID，是应用的全局唯一标识。 */
  ApplicationId: string;
  /** 应用展示名称，长度限制：64个字符。 默认与应用名字相同。 */
  DisplayName: string | null;
  /** 应用创建时间，符合 ISO8601 标准。 */
  CreatedDate: string | null;
  /** 上次更新时间，符合 ISO8601 标准。 */
  LastModifiedDate: string | null;
  /** 应用状态。 */
  AppStatus: boolean | null;
  /** 应用图标。 */
  Icon: string | null;
  /** 应用类型。 */
  ApplicationType: string | null;
  /** 客户端id。 */
  ClientId: string | null;
}

/** 返回的授权关系信息。 */
declare interface AuthorizationInfo {
  /** 应用唯一ID。 */
  AppId: string;
  /** 应用名称。 */
  AppName: string;
  /** 类型名称。 */
  EntityName: string;
  /** 类型唯一ID。 */
  EntityId: string;
  /** 上次更新时间，符合 ISO8601 标准。 */
  LastModifiedDate: string;
  /** 授权类型唯一ID。 */
  AuthorizationId: string;
}

/** 用户属性搜索条件。 */
declare interface AuthorizationInfoSearchCriteria {
  /** 名称匹配搜索，当查询类型为用户时，匹配范围包括：用户名称、应用名称；当查询类型为用户组时，匹配范围包括：用户组名称、应用名称；当查询类型为组织机构时，匹配范围包括：组织机构名称、应用名称。 */
  Keyword?: string;
}

/** 授权资源详情 */
declare interface AuthorizationResourceEntityInfo {
  /** 授权关系的唯一ID */
  ResourceId: string | null;
  /** 资源授权类型 */
  ResourceType: string | null;
  /** 授权的资源 */
  Resource: string | null;
  /** 资源名称 */
  ResourceName: string | null;
}

/** 返回符合条件的用户数据列表 */
declare interface AuthorizationUserResouceInfo {
  /** 资源ID */
  ResourceId: string | null;
  /** 资源类型 */
  ResourceType: string | null;
  /** 授权资源 */
  Resource: string | null;
  /** 继承关系 */
  InheritedForm: InheritedForm | null;
  /** 应用账户 */
  ApplicationAccounts: string[] | null;
  /** 资源名称 */
  ResourceName: string | null;
}

/** 应用信息列表。 */
declare interface InheritedForm {
  /** 用户所在的用户组ID列表。 */
  UserGroupIds: string[] | null;
  /** 用户所在的机构节点ID列表。 */
  OrgNodeIds: string[] | null;
}

/** 账号关联的用户信息 */
declare interface LinkUserInfo {
  /** 用户ID，是用户全局唯一标识，长度限制：64个字符。 */
  UserId: string | null;
  /** 用户名称。 */
  UserName: string | null;
}

/** 展示机构下用户的属性搜索条件。 */
declare interface ListUsersInOrgNodeSearchCriteria {
  /** 用户名，长度限制：64个字符。 */
  UserName?: string;
  /** 用户手机号。 */
  Phone?: string;
  /** 用户邮箱。 */
  Email?: string;
  /** 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。 */
  Status?: string;
  /** 用户创建时间，遵循 ISO 8601 标准。 */
  CreationTime?: string;
  /** 用户上次更新时间。 */
  LastUpdateTime?: string;
  /** 名称匹配搜索，匹配范围包括：用户名称、用户手机号。 */
  Keyword?: string;
}

/** 当前机构节点下的子节点列表 */
declare interface OrgNodeChildInfo {
  /** 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。 */
  DisplayName: string | null;
  /** 机构节点最后修改时间，符合 ISO8601 标准。 */
  LastModifiedDate: string | null;
  /** 用户自定义可选填的机构节点对外ID。 */
  CustomizedOrgNodeId: string | null;
  /** 当前机构节点的父节点ID。 */
  ParentOrgNodeId: string | null;
  /** 机构节点ID，是机构节点的全局唯一标识。 */
  OrgNodeId: string | null;
  /** 数据来源。 */
  DataSource: string | null;
  /** 机构节点创建时间，符合 ISO8601 标准。 */
  CreatedDate: string | null;
  /** 机构节点描述。 */
  Description: string | null;
}

/** 机构子节点下的用户信息列表 */
declare interface OrgNodeChildUserInfo {
  /** 机构ID，是机构节点全局唯一标识，长度限制：64个字符。 */
  OrgNodeId: string | null;
  /** 用户信息列表。 */
  UserInfo: UserInfo[] | null;
  /** 当前机构节点下的用户总数。 */
  TotalUserNum: number | null;
  /** 组织机构ID路径。 */
  OrgNodeIdPath: string | null;
  /** 组织机构名称路径。 */
  OrgNodeNamePath: string | null;
}

/** 排序条件。 */
declare interface SortCondition {
  /** 排序属性。 */
  SortKey: string;
  /** 排序顺序，ASC为正向排序，DESC为反向排序。 */
  SortOrder: string;
}

/** 三方账号信息。 */
declare interface ThirdPartyAccountInfo {
  /** 第三方账号代码。"2"代表企业微信。 */
  AccountCode: string | null;
  /** 账号对应的用户名。 */
  AccountName: string | null;
}

/** 返回的用户组列表。 */
declare interface UserGroupInfo {
  /** 昵称，长度限制：64个字符。 默认与用户名相同。 */
  DisplayName: string | null;
  /** 用户组ID，是用户组全局唯一标识，长度限制：64个字符。 */
  UserGroupId: string | null;
  /** 用户组备注。 */
  Description: string | null;
  /** 创建时间。 */
  CreatedDate: string | null;
}

/** 用户组属性搜索条件。 */
declare interface UserGroupInfoSearchCriteria {
  /** 名称匹配搜索，匹配范围包括：用户组名称、用户组ID。 */
  Keyword?: string;
}

/** 返回的用户组列表。 */
declare interface UserGroupInformation {
  /** 用户组ID。 */
  UserGroupId: string;
  /** 用户组名称。 */
  UserGroupName: string;
  /** 上次更新时间，符合 ISO8601 标准。 */
  LastModifiedDate: string | null;
}

/** 获取用户所在的用户组列表功能中用户组属性搜索条件。 */
declare interface UserGroupInformationSearchCriteria {
  /** 名称匹配搜索，匹配范围包括：用户组名称。 */
  Keyword?: string;
}

/** 用户信息列表。 */
declare interface UserInfo {
  /** 用户ID，是用户全局唯一标识，长度限制：64个字符。 */
  UserId: string | null;
  /** 昵称，长度限制：64个字符。 默认与用户名相同。 */
  DisplayName: string | null;
  /** 用户名称。 */
  UserName: string | null;
  /** 用户手机号。 */
  Phone: string | null;
  /** 邮箱地址。 */
  Email: string | null;
  /** 用户状态。 */
  Status: string | null;
  /** 数据来源。 */
  DataSource: string | null;
}

/** 用户信息列表。 */
declare interface UserInformation {
  /** 用户名，长度限制：32个字符。 */
  UserName: string | null;
  /** 用户状态。 */
  Status: string | null;
  /** 昵称，长度限制：64个字符。 默认与用户名相同。 */
  DisplayName: string | null;
  /** 用户备注，长度限制：512个字符。 */
  Description: string | null;
  /** 用户上次更新时间，遵循 ISO 8601 标准。 */
  LastUpdateTime: string | null;
  /** 用户创建时间，遵循 ISO 8601 标准。 */
  CreationTime: string | null;
  /** 用户所属主组织机构的路径ID。 */
  OrgPath: string | null;
  /** 带国家号的用户手机号，例如+86-00000000000。 */
  Phone: string | null;
  /** 用户所属用户组ID列表。 */
  SubjectGroups: string[] | null;
  /** 用户邮箱。 */
  Email: string | null;
  /** 用户上次登录时间，遵循 ISO 8601 标准。 */
  LastLoginTime: string | null;
  /** 用户ID，是用户全局唯一标识，长度限制：64个字符。 */
  UserId: string | null;
}

/** 用户属性搜索条件。 */
declare interface UserSearchCriteria {
  /** 用户名，长度限制：64个字符。 */
  UserName?: string;
  /** 用户手机号。 */
  Phone?: string;
  /** 用户邮箱。 */
  Email?: string;
  /** 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。 */
  Status?: string;
  /** 用户创建时间，遵循 ISO 8601 标准。 */
  CreationTime?: string;
  /** 用户上次更新时间区间。 */
  LastUpdateTime?: string;
  /** 名称匹配搜索，匹配范围包括：用户名称、用户ID。 */
  Keyword?: string;
}

declare interface AddAccountToAccountGroupRequest {
  /** 账号组ID */
  AccountGroupId: string;
  /** 加入账号组的账号ID列表。 */
  AccountIds?: string[];
}

declare interface AddAccountToAccountGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddUserToUserGroupRequest {
  /** 加入用户组的用户ID列表。 */
  UserIds: string[];
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string;
}

declare interface AddUserToUserGroupResponse {
  /** 未成功加入用户组的用户ID列表信息。 */
  FailedItems: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAccountGroupRequest {
  /** 应用ID。 */
  ApplicationId: string;
  /** 账号组名。 */
  GroupName: string;
  /** 描述。 */
  Description?: string;
}

declare interface CreateAccountGroupResponse {
  /** 账号组ID。 */
  AccountGroupId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAppAccountRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 账号名称 */
  AccountName: string;
  /** 账号密码 */
  Password?: string;
  /** 描述 */
  Description?: string;
}

declare interface CreateAppAccountResponse {
  /** 账号ID */
  AccountId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOrgNodeRequest {
  /** 机构节点名称，长度限制：64个字符。 */
  DisplayName: string;
  /** 父机构节点ID，如果为空则默认创建在机构根节点下。 */
  ParentOrgNodeId?: string;
  /** 机构节点描述。 */
  Description?: string;
  /** 机构代码。如果为空，则默认生成机构代码。如果为非空，则校验机构代码的唯一性。 */
  CustomizedOrgNodeId?: string;
}

declare interface CreateOrgNodeResponse {
  /** 机构节点ID，是机构节点的全局唯一标识。 */
  OrgNodeId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserGroupRequest {
  /** 用户组昵称，长度限制：64个字符。 DisplayName是唯一的。 */
  DisplayName: string;
  /** 用户组备注，长度限制：512个字符。 */
  Description?: string;
}

declare interface CreateUserGroupResponse {
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserRequest {
  /** 用户名，长度限制：64个字符。 */
  UserName: string;
  /** 用户密码， 需要符合密码策略的配置。 */
  Password: string;
  /** 昵称，长度限制：64个字符。 默认与用户名相同。 */
  DisplayName?: string;
  /** 用户备注，长度限制：512个字符。 */
  Description?: string;
  /** 用户所属用户组ID列表。 */
  UserGroupIds?: string[];
  /** 用户手机号。例如：+86-1xxxxxxxxxx。 */
  Phone?: string;
  /** 用户所属的主组织机构唯一ID。如果为空，默认为在根节点下创建用户。 */
  OrgNodeId?: string;
  /** 用户过期时间，遵循 ISO 8601 标准。 */
  ExpirationTime?: string;
  /** 用户邮箱。 */
  Email?: string;
  /** 密码是否需要重置，为空默认为false不需要重置密码。 */
  PwdNeedReset?: boolean;
  /** 用户所属的次要组织机构ID列表。 */
  SecondaryOrgNodeIdList?: string[];
}

declare interface CreateUserResponse {
  /** 返回的新创建的用户ID，是该用户的全局唯一标识。 */
  UserId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAccountGroupRequest {
  /** 账号组ID数组。 */
  AccountGroupIdList: string[];
}

declare interface DeleteAccountGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAppAccountRequest {
  /** 账号ID数组。 */
  AccountIdList: string[];
}

declare interface DeleteAppAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteOrgNodeRequest {
  /** 机构节点ID，是机构节点的全局唯一标识。 */
  OrgNodeId: string;
}

declare interface DeleteOrgNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUserGroupRequest {
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string;
}

declare interface DeleteUserGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUserRequest {
  /** 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。 */
  UserName?: string;
  /** 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。 */
  UserId?: string;
}

declare interface DeleteUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUsersRequest {
  /** 被删除用户的ID列表。DeleteIdList 和 DeleteNameList 需至少一个不为空；都不为空时优先使用 DeleteNameList。 */
  DeleteIdList?: string[];
  /** 被删除用户的名称列表。DeleteIdList 和 DeleteNameList 需至少一个不为空；都不为空时优先使用 DeleteNameList。 */
  DeleteNameList?: string[];
}

declare interface DeleteUsersResponse {
  /** 未被成功删除的用户信息。当业务参数为DeleteIdList时，本字段将返回未成功删除的用户ID列表。当业务参数为DeleteNameList时，本字段将返回未成功删除的用户名称列表。 */
  FailedItems: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountGroupRequest {
  /** 应用ID。 */
  ApplicationId: string;
  /** 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配。如果该字段为空，则默认查全量表。 */
  SearchCondition?: AccountGroupSearchCriteria;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeAccountGroupResponse {
  /** 返回查询的总记录数。 */
  TotalCount: number | null;
  /** 应用ID。 */
  ApplicationId: string | null;
  /** 返回符合条件的数据列表。 */
  AccountGroupList: AccountGroupInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAppAccountRequest {
  /** 应用ID。 */
  ApplicationId: string;
  /** 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配。如果该字段为空，则默认查全量表。 */
  SearchCondition?: AppAccountSearchCriteria;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeAppAccountResponse {
  /** 返回查询的总记录数。 */
  TotalCount: number | null;
  /** 应用ID。 */
  ApplicationId: string | null;
  /** 返回符合条件的数据列表。 */
  AppAccountList: AppAccountInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeApplicationRequest {
  /** 应用id，是应用的全局唯一标识，与ClientId参数不能同时为空。 */
  ApplicationId?: string;
  /** 客户端id，与ApplicationId参数不能同时为空。 */
  ClientId?: string;
}

declare interface DescribeApplicationResponse {
  /** 密钥id。 */
  KeyId: string | null;
  /** 应用展示名称，长度限制：64个字符。 默认与应用名字相同。 */
  DisplayName: string | null;
  /** 应用最后修改时间，符合 ISO8601 标准。 */
  LastModifiedDate: string | null;
  /** 客户端id。 */
  ClientId: string | null;
  /** 应用类型，即创建应用时所选择的应用模板类型。 */
  ApplicationType: string | null;
  /** 应用创建时间，符合 ISO8601 标准。 */
  CreatedDate: string | null;
  /** 应用id，是应用的全局唯一标识。 */
  ApplicationId: string | null;
  /** 令牌有效时间，单位为秒。 */
  TokenExpired: number | null;
  /** 客户端secret。 */
  ClientSecret: string | null;
  /** 公钥信息。 */
  PublicKey: string | null;
  /** 授权地址。 */
  AuthorizeUrl: string | null;
  /** 应用图标图片访问地址。 */
  IconUrl: string | null;
  /** 安全等级。 */
  SecureLevel: string | null;
  /** 应用状态。 */
  AppStatus: boolean | null;
  /** 描述。 */
  Description: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrgNodeRequest {
  /** 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点信息。 */
  OrgNodeId?: string;
  /** 是否读取其子节点信息。当其为空或false时，默认仅读取当前机构节点信息。当其为true时，读取本机构节点以及其第一层子节点信息。 */
  IncludeOrgNodeChildInfo?: boolean;
}

declare interface DescribeOrgNodeResponse {
  /** 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。 */
  DisplayName: string | null;
  /** 机构节点最后修改时间，符合 ISO8601 标准。 */
  LastModifiedDate: string | null;
  /** 机构节点外部ID。 */
  CustomizedOrgNodeId: string | null;
  /** 当前机构节点的父节点ID。 */
  ParentOrgNodeId: string | null;
  /** 机构节点ID，是机构节点的全局唯一标识。 */
  OrgNodeId: string | null;
  /** 数据来源。 */
  DataSource: string | null;
  /** 机构节点创建时间，符合 ISO8601 标准。 */
  CreatedDate: string | null;
  /** 当前机构节点下的子节点列表。 */
  OrgNodeChildInfo: OrgNodeChildInfo[] | null;
  /** 机构节点描述。 */
  Description: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrgResourcesAuthorizationRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 机构ID */
  OrgNodeId: string;
}

declare interface DescribeOrgResourcesAuthorizationResponse {
  /** 应用ID */
  ApplicationId: string;
  /** 授权机构ID */
  OrgNodeId: string | null;
  /** 机构名称 */
  OrgNodeName: string | null;
  /** 机构目录 */
  OrgNodePath: string | null;
  /** 资源列表 */
  AuthorizationOrgResourceList: AuthorizationResourceEntityInfo[] | null;
  /** 资源数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePublicKeyRequest {
  /** 应用ID，是应用的全局唯一标识。 */
  ApplicationId: string;
}

declare interface DescribePublicKeyResponse {
  /** jwt验证签名所用的公钥信息。 */
  PublicKey: string | null;
  /** jwt的密钥id。 */
  KeyId: string | null;
  /** 应用ID，是应用的全局唯一标识。 */
  ApplicationId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserGroupRequest {
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string;
}

declare interface DescribeUserGroupResourcesAuthorizationRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 用户组ID */
  UserGroupId: string;
}

declare interface DescribeUserGroupResourcesAuthorizationResponse {
  /** 应用ID */
  ApplicationId: string | null;
  /** 用户组ID */
  UserGroupId: string | null;
  /** 用户组名称 */
  UserGroupName: string | null;
  /** 资源列表 */
  AuthorizationUserGroupResourceList: AuthorizationResourceEntityInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserGroupResponse {
  /** 用户组昵称，长度限制：64个字符。 DisplayName不唯一。 */
  DisplayName: string | null;
  /** 用户组备注，长度限制：512个字符。 */
  Description: string | null;
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserInfoRequest {
  /** 用户名，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。 */
  UserName?: string;
  /** 用户 id，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。 */
  UserId?: string;
}

declare interface DescribeUserInfoResponse {
  /** 用户名。 */
  UserName: string | null;
  /** 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。 */
  Status: string | null;
  /** 昵称。 */
  DisplayName: string | null;
  /** 用户备注。 */
  Description: string | null;
  /** 用户所属用户组 id 列表。 */
  UserGroupIds: string[] | null;
  /** 用户 id，长度限制：64个字符。 */
  UserId: string | null;
  /** 用户邮箱。 */
  Email: string | null;
  /** 用户手机号。 */
  Phone: string | null;
  /** 用户所属的主组织机构唯一ID。 */
  OrgNodeId: string | null;
  /** 数据来源。 */
  DataSource: string | null;
  /** 用户过期时间，遵循 ISO 8601 标准。 */
  ExpirationTime: string | null;
  /** 用户激活时间，遵循 ISO 8601 标准。 */
  ActivationTime: string | null;
  /** 当前用户的密码是否需要重置，该字段为false表示不需要重置密码。 */
  PwdNeedReset: boolean | null;
  /** 用户所属的次要组织机构ID列表。 */
  SecondaryOrgNodeIdList: string[] | null;
  /** 是否管理员标志，0为否、1为是。 */
  AdminFlag: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserResourcesAuthorizationRequest {
  /** 应用ID。 */
  ApplicationId: string;
  /** 用户ID。UserName 和 UserId 需至少一个不为空；都不为空时优先使用 UserName。 */
  UserId?: string;
  /** 用户名。UserName 和 UserId 需至少一个不为空；都不为空时优先使用 UserName。 */
  UserName?: string;
  /** 查询范围是否包括用户关联的用户组、组织机构的应用访问权限。默认为不查询 ，传false表示不查询该范围，传true查询该范围。 */
  IncludeInheritedAuthorizations?: boolean;
}

declare interface DescribeUserResourcesAuthorizationResponse {
  /** 应用的唯一ID。 */
  ApplicationId: string;
  /** 应用账户。 */
  ApplicationAccounts: string[] | null;
  /** 授权用户的唯一ID。 */
  UserId: string | null;
  /** 授权的用户名。 */
  UserName: string | null;
  /** 返回的资源列表。 */
  AuthorizationUserResourceList: AuthorizationUserResouceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserThirdPartyAccountInfoRequest {
  /** 用户名。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。 */
  UserName?: string;
  /** 用户 ID。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。 */
  UserId?: string;
}

declare interface DescribeUserThirdPartyAccountInfoResponse {
  /** 用户 id。 */
  UserId: string;
  /** 用户名。 */
  UserName: string;
  /** 三方账号的绑定情况。 */
  ThirdPartyAccounts: ThirdPartyAccountInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAccountInAccountGroupRequest {
  /** 账号组ID。 */
  AccountGroupId: string;
  /** 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。 */
  SearchCondition?: AccountGroupSearchCriteria;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface ListAccountInAccountGroupResponse {
  /** 查询返回的相关账号列表。 */
  AccountList: AppAccountInfo[] | null;
  /** 返回查询账号的总数量。 */
  TotalCount: number | null;
  /** 账号组ID。 */
  AccountGroupId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListApplicationAuthorizationsRequest {
  /** 查询类型，包含用户（User）、用户组（UserGroup）、组织机构（OrgNode）。 */
  EntityType: string;
  /** 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。如果该字段为空，则默认查全量表。 */
  SearchCondition?: AuthorizationInfoSearchCriteria;
  /** 排序条件集合。可排序的属性支持：上次修改时间（lastModifiedDate）。如果该字段为空，则默认按照应用名称正向排序。 */
  Sort?: SortCondition;
  /** 分页偏移量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。 */
  Offset?: number;
  /** 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。 */
  Limit?: number;
}

declare interface ListApplicationAuthorizationsResponse {
  /** 返回的应用授权信息列表。 */
  AuthorizationInfoList: AuthorizationInfo[] | null;
  /** 返回的应用信息总数。 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListApplicationsRequest {
  /** 模糊匹配搜索条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。模糊匹配搜索功能与精准匹配查询不会同时生效，如果SearchCondition与ApplicationIdList均不为空，则默认以ApplicationIdList进行精准查询。如果SearchCondition字段与ApplicationIdList字段均为空，则默认返回全部的应用信息。 */
  SearchCondition?: ApplicationInfoSearchCriteria;
  /** 排序条件集合。可排序的属性支持：应用名字（DisplayName）、创建时间（CreatedDate）、上次修改时间（LastModifiedDate）。如果该字段为空，则默认按照应用名字正向排序。 */
  Sort?: SortCondition;
  /** 排序条件集合。可排序的属性支持：应用名字（DisplayName）、创建时间（CreatedDate）、上次修改时间（LastModifiedDate）。如果该字段为空，则默认按照应用名字正向排序。 */
  Offset?: number;
  /** 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。 */
  Limit?: number;
  /** 应用ID列表，通过应用ID列表精准匹配对应的应用信息。模糊匹配搜索功能与精准匹配查询不会同时生效，如果SearchCondition与ApplicationIdList均不为空，则默认以ApplicationIdList进行精准查询。如果SearchCondition字段与ApplicationIdList字段均为空，则默认返回全部的应用信息。 */
  ApplicationIdList?: string[];
}

declare interface ListApplicationsResponse {
  /** 返回的应用信息总数。 */
  TotalCount: number | null;
  /** 返回的应用信息列表。 */
  ApplicationInfoList: ApplicationInformation[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAuthorizedApplicationsToOrgNodeRequest {
  /** 机构节点 Id 。 */
  OrgNodeId: string;
}

declare interface ListAuthorizedApplicationsToOrgNodeResponse {
  /** 机构节点拥有访问权限的应用 id 列表。 */
  ApplicationIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAuthorizedApplicationsToUserGroupRequest {
  /** 用户组 Id 。 */
  UserGroupId: string;
}

declare interface ListAuthorizedApplicationsToUserGroupResponse {
  /** 用户组拥有访问权限的应用 id 列表。 */
  ApplicationIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAuthorizedApplicationsToUserRequest {
  /** 用户 ID。 */
  UserId: string;
  /** 查询范围是否包括用户关联的用户组、组织机构的应用访问权限。默认为不查询 。传false表示不查询该范围，传true表示应用查询该范围。 */
  IncludeInheritedAuthorizations?: boolean;
}

declare interface ListAuthorizedApplicationsToUserResponse {
  /** 用户拥有访问权限的应用信息列表。 */
  ApplicationAuthorizationInfo: ApplicationAuthorizationInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUserGroupsOfUserRequest {
  /** 用户ID，是用户的全局唯一标识。 */
  UserId: string;
  /** 模糊查询条件，支持匹配用户组名称（DisplayName）。如果该字段为空，则默认展示该用户所有的用户组。 */
  SearchCondition?: UserGroupInformationSearchCriteria;
  /** 排序条件集合。可排序的属性支持：用户组名称（DisplayName）、用户组ID（UserGroupId）、创建时间（CreatedDate）。如果该字段为空，则默认按照用户组名称正向排序。 */
  Sort?: SortCondition;
  /** 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户组。 */
  Offset?: number;
  /** 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户组。 */
  Limit?: number;
}

declare interface ListUserGroupsOfUserResponse {
  /** 用户所属的用户组ID列表。 */
  UserGroupIds: string[] | null;
  /** 用户ID，是用户的全局唯一标识。 */
  UserId: string | null;
  /** 用户所属的用户组信息列表。 */
  UserGroupInfoList: UserGroupInfo[] | null;
  /** 返回的用户组信息总数。 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUserGroupsRequest {
  /** 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。如果该字段为空，则默认查全量表。 */
  SearchCondition?: UserGroupInfoSearchCriteria;
  /** 排序条件集合。可排序的属性支持：用户组名称（DisplayName）、用户组ID（UserGroupId）、上次更新时间（LastModifiedDate）。如果该字段为空，则默认按照用户组名称正向排序。 */
  Sort?: SortCondition;
  /** 分页偏移量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。 */
  Offset?: number;
  /** 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。 */
  Limit?: number;
}

declare interface ListUserGroupsResponse {
  /** 返回的用户组列表。 */
  UserGroupList: UserGroupInformation[] | null;
  /** 返回的用户组信息总数。 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUsersInOrgNodeRequest {
  /** 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点下用户信息。 */
  OrgNodeId?: string;
  /** 是否读取其子节点信息。当其为空或false时，默认仅读取当前机构节点信息。当其为true时，读取本机构节点以及其第一层子节点信息。 */
  IncludeOrgNodeChildInfo?: boolean;
  /** 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,*]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。 */
  SearchCondition?: ListUsersInOrgNodeSearchCriteria;
  /** 排序条件集合。可排序的属性支持：用户名字（UserName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreatedDate）、上次更新时间（LastModifiedDate）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。 */
  Sort?: SortCondition;
  /** 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。 */
  Offset?: number;
  /** 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。 */
  Limit?: number;
}

declare interface ListUsersInOrgNodeResponse {
  /** 机构子节点下的用户信息列表。 */
  OrgNodeChildUserInfo: OrgNodeChildUserInfo[] | null;
  /** 机构ID，是机构节点全局唯一标识，长度限制：64个字符。 */
  OrgNodeId: string | null;
  /** 用户信息列表。 */
  UserInfo: UserInfo[] | null;
  /** 当前机构节点下的用户总数。 */
  TotalUserNum: number | null;
  /** 组织机构ID路径。 */
  OrgNodeIdPath: string | null;
  /** 组织机构名称路径。 */
  OrgNodeNamePath: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUsersInUserGroupRequest {
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string;
  /** 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。 */
  SearchCondition?: UserSearchCriteria;
  /** 排序条件集合。可排序的属性支持：用户名字（UserName）、用户昵称（DisplayName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreatedDate）、上次更新时间（LastModifiedDate）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。 */
  Sort?: SortCondition;
  /** 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。 */
  Offset?: number;
  /** 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。 */
  Limit?: number;
}

declare interface ListUsersInUserGroupResponse {
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string | null;
  /** 返回的用户信息列表。 */
  UserInfo: UserInfo[] | null;
  /** 返回的用户信息总数。 */
  TotalNum: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUsersRequest {
  /** 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,*]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。 */
  SearchCondition?: UserSearchCriteria;
  /** 指定期望返回的用户属性，默认返回所有用户内置属性。内置用户属性包括：用户UUID（UserId）、用户昵称（DisplayName）、用户名字（UserName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、用户组（SubjectGroups）机构路径（OrgPath）、备注（Description）、创建时间 （CreationTime）、上次修改时间（LastUpdateTime）、上次登录时间（LastLoginTime）。 */
  ExpectedFields?: string[];
  /** 排序条件集合。可排序的属性支持：用户名字（UserName）、用户昵称（DisplayName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreationTime）、上次修改时间（LastUpdateTime）、上次登录时间（LastLoginTime）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。 */
  Sort?: SortCondition;
  /** 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多1000个用户。 */
  Offset?: number;
  /** 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多1000个用户。 */
  Limit?: number;
  /** 是否查看搜索结果的总数，默认该选项为false不查看。 */
  IncludeTotal?: boolean;
}

declare interface ListUsersResponse {
  /** 查询返回的相关用户列表。 */
  UserList: UserInformation[] | null;
  /** 返回查询用户的总数量，仅当入参IncludeTotal等于true时返回。 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAccountGroupRequest {
  /** 账号组ID。 */
  AccountGroupId: string;
  /** 账号组名。未传入该参数时，表示不进行修改。 */
  GroupName?: string;
  /** 描述，未传入该参数时，表示不进行修改。 */
  Description?: string;
}

declare interface ModifyAccountGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAppAccountRequest {
  /** 账号ID。 */
  AccountId: string;
  /** 账号名称。未传入该参数时，表示不进行修改。 */
  AccountName?: string;
  /** 账号密码。未传入该参数时，表示不进行修改。 */
  Password?: string;
  /** 描述，未传入该参数时，表示不进行修改。 */
  Description?: string;
}

declare interface ModifyAppAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyApplicationRequest {
  /** 应用ID，是应用的全局唯一标识。 */
  ApplicationId: string;
  /** 安全级别。 */
  SecureLevel?: string;
  /** 应用展示名称，长度限制：32个字符。 默认与应用名字相同。 */
  DisplayName?: string;
  /** 应用状态，true表示启用，false表示禁用。 */
  AppStatus?: boolean;
  /** 应用图标图片访问地址。 */
  IconUrl?: string;
  /** 描述。长度不超过128。 */
  Description?: string;
}

declare interface ModifyApplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyUserInfoRequest {
  /** 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。 */
  UserName?: string;
  /** 昵称，长度限制：64个字符。 默认与用户名相同。 */
  DisplayName?: string;
  /** 用户备注，长度限制：512个字符。 */
  Description?: string;
  /** 用户所属用户组ID列表。 */
  UserGroupIds?: string[];
  /** 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。 */
  UserId?: string;
  /** 用户手机号。 */
  Phone?: string;
  /** 用户过期时间，遵循 ISO 8601 标准。 */
  ExpirationTime?: string;
  /** 用户密码， 需要符合密码策略的配置。 */
  Password?: string;
  /** 用户邮箱。 */
  Email?: string;
  /** 密码是否需要重置，为空默认为false不需要重置密码。 */
  PwdNeedReset?: boolean;
  /** 用户所属的主组织机构唯一ID。如果为空，默认为在根节点下创建用户。 */
  OrgNodeId?: string;
  /** 用户所属的次要组织机构ID列表。 */
  SecondaryOrgNodeIdList?: string[];
}

declare interface ModifyUserInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveAccountFromAccountGroupRequest {
  /** 账号组ID */
  AccountGroupId: string;
  /** 需要移除账号ID列表。 */
  AccountIds?: string[];
}

declare interface RemoveAccountFromAccountGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveUserFromUserGroupRequest {
  /** 要加入用户组的用户ID列表。 */
  UserIds: string[];
  /** 用户组ID，是用户组的全局唯一标识。 */
  UserGroupId: string;
}

declare interface RemoveUserFromUserGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateOrgNodeRequest {
  /** 机构节点ID，是机构节点的全局唯一标识。 */
  OrgNodeId: string;
  /** 机构节点名称，长度限制：64个字符。 */
  DisplayName: string;
  /** 机构节点描述。 */
  Description?: string;
  /** 机构代码。如果非空则校验此ID的唯一性。 */
  CustomizedOrgNodeId?: string;
}

declare interface UpdateOrgNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Eiam 数字身份管控平台（员工版）} */
declare interface Eiam {
  (): Versions;
  /** {@link AddAccountToAccountGroup 账号组添加账号}({@link AddAccountToAccountGroupRequest 请求参数}): {@link AddAccountToAccountGroupResponse 返回参数} */
  AddAccountToAccountGroup(data: AddAccountToAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddAccountToAccountGroupResponse>;
  /** {@link AddUserToUserGroup 加入用户到用户组}({@link AddUserToUserGroupRequest 请求参数}): {@link AddUserToUserGroupResponse 返回参数} */
  AddUserToUserGroup(data: AddUserToUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddUserToUserGroupResponse>;
  /** {@link CreateAccountGroup 创建账号组}({@link CreateAccountGroupRequest 请求参数}): {@link CreateAccountGroupResponse 返回参数} */
  CreateAccountGroup(data: CreateAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountGroupResponse>;
  /** {@link CreateAppAccount 创建应用账号}({@link CreateAppAccountRequest 请求参数}): {@link CreateAppAccountResponse 返回参数} */
  CreateAppAccount(data: CreateAppAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppAccountResponse>;
  /** {@link CreateOrgNode 新建机构节点}({@link CreateOrgNodeRequest 请求参数}): {@link CreateOrgNodeResponse 返回参数} */
  CreateOrgNode(data: CreateOrgNodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrgNodeResponse>;
  /** {@link CreateUser 新建用户}({@link CreateUserRequest 请求参数}): {@link CreateUserResponse 返回参数} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** {@link CreateUserGroup 新建用户组}({@link CreateUserGroupRequest 请求参数}): {@link CreateUserGroupResponse 返回参数} */
  CreateUserGroup(data: CreateUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserGroupResponse>;
  /** {@link DeleteAccountGroup 删除账号组}({@link DeleteAccountGroupRequest 请求参数}): {@link DeleteAccountGroupResponse 返回参数} */
  DeleteAccountGroup(data: DeleteAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountGroupResponse>;
  /** {@link DeleteAppAccount 删除应用账号}({@link DeleteAppAccountRequest 请求参数}): {@link DeleteAppAccountResponse 返回参数} */
  DeleteAppAccount(data: DeleteAppAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAppAccountResponse>;
  /** {@link DeleteOrgNode 删除机构节点}({@link DeleteOrgNodeRequest 请求参数}): {@link DeleteOrgNodeResponse 返回参数} */
  DeleteOrgNode(data: DeleteOrgNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrgNodeResponse>;
  /** {@link DeleteUser 删除用户}({@link DeleteUserRequest 请求参数}): {@link DeleteUserResponse 返回参数} */
  DeleteUser(data?: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** {@link DeleteUserGroup 删除用户组}({@link DeleteUserGroupRequest 请求参数}): {@link DeleteUserGroupResponse 返回参数} */
  DeleteUserGroup(data: DeleteUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserGroupResponse>;
  /** {@link DeleteUsers 批量删除用户}({@link DeleteUsersRequest 请求参数}): {@link DeleteUsersResponse 返回参数} */
  DeleteUsers(data?: DeleteUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsersResponse>;
  /** {@link DescribeAccountGroup 查询账号组列表}({@link DescribeAccountGroupRequest 请求参数}): {@link DescribeAccountGroupResponse 返回参数} */
  DescribeAccountGroup(data: DescribeAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountGroupResponse>;
  /** {@link DescribeAppAccount 查询应用账号列表}({@link DescribeAppAccountRequest 请求参数}): {@link DescribeAppAccountResponse 返回参数} */
  DescribeAppAccount(data: DescribeAppAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppAccountResponse>;
  /** {@link DescribeApplication 获取应用信息}({@link DescribeApplicationRequest 请求参数}): {@link DescribeApplicationResponse 返回参数} */
  DescribeApplication(data?: DescribeApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationResponse>;
  /** {@link DescribeOrgNode 读取机构节点信息}({@link DescribeOrgNodeRequest 请求参数}): {@link DescribeOrgNodeResponse 返回参数} */
  DescribeOrgNode(data?: DescribeOrgNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrgNodeResponse>;
  /** {@link DescribeOrgResourcesAuthorization 查询指定机构下的资源授权列表}({@link DescribeOrgResourcesAuthorizationRequest 请求参数}): {@link DescribeOrgResourcesAuthorizationResponse 返回参数} */
  DescribeOrgResourcesAuthorization(data: DescribeOrgResourcesAuthorizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrgResourcesAuthorizationResponse>;
  /** {@link DescribePublicKey 获取JWT公钥信息}({@link DescribePublicKeyRequest 请求参数}): {@link DescribePublicKeyResponse 返回参数} */
  DescribePublicKey(data: DescribePublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicKeyResponse>;
  /** {@link DescribeUserGroup 获取用户组信息}({@link DescribeUserGroupRequest 请求参数}): {@link DescribeUserGroupResponse 返回参数} */
  DescribeUserGroup(data: DescribeUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserGroupResponse>;
  /** {@link DescribeUserGroupResourcesAuthorization 查询指定用户组下的资源授权列表}({@link DescribeUserGroupResourcesAuthorizationRequest 请求参数}): {@link DescribeUserGroupResourcesAuthorizationResponse 返回参数} */
  DescribeUserGroupResourcesAuthorization(data: DescribeUserGroupResourcesAuthorizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserGroupResourcesAuthorizationResponse>;
  /** {@link DescribeUserInfo 获取用户信息}({@link DescribeUserInfoRequest 请求参数}): {@link DescribeUserInfoResponse 返回参数} */
  DescribeUserInfo(data?: DescribeUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserInfoResponse>;
  /** {@link DescribeUserResourcesAuthorization 查询指定用户下的资源授权列表}({@link DescribeUserResourcesAuthorizationRequest 请求参数}): {@link DescribeUserResourcesAuthorizationResponse 返回参数} */
  DescribeUserResourcesAuthorization(data: DescribeUserResourcesAuthorizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserResourcesAuthorizationResponse>;
  /** {@link DescribeUserThirdPartyAccountInfo 获取用户的第三方账号绑定信息}({@link DescribeUserThirdPartyAccountInfoRequest 请求参数}): {@link DescribeUserThirdPartyAccountInfoResponse 返回参数} */
  DescribeUserThirdPartyAccountInfo(data?: DescribeUserThirdPartyAccountInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserThirdPartyAccountInfoResponse>;
  /** {@link ListAccountInAccountGroup 获取账号组中的账号列表}({@link ListAccountInAccountGroupRequest 请求参数}): {@link ListAccountInAccountGroupResponse 返回参数} */
  ListAccountInAccountGroup(data: ListAccountInAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ListAccountInAccountGroupResponse>;
  /** {@link ListApplicationAuthorizations 应用授权关系列表信息}({@link ListApplicationAuthorizationsRequest 请求参数}): {@link ListApplicationAuthorizationsResponse 返回参数} */
  ListApplicationAuthorizations(data: ListApplicationAuthorizationsRequest, config?: AxiosRequestConfig): AxiosPromise<ListApplicationAuthorizationsResponse>;
  /** {@link ListApplications 获取应用列表信息}({@link ListApplicationsRequest 请求参数}): {@link ListApplicationsResponse 返回参数} */
  ListApplications(data?: ListApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<ListApplicationsResponse>;
  /** {@link ListAuthorizedApplicationsToOrgNode 获取机构节点被授权访问的应用列表}({@link ListAuthorizedApplicationsToOrgNodeRequest 请求参数}): {@link ListAuthorizedApplicationsToOrgNodeResponse 返回参数} */
  ListAuthorizedApplicationsToOrgNode(data: ListAuthorizedApplicationsToOrgNodeRequest, config?: AxiosRequestConfig): AxiosPromise<ListAuthorizedApplicationsToOrgNodeResponse>;
  /** {@link ListAuthorizedApplicationsToUser 获取用户被授权访问的应用列表}({@link ListAuthorizedApplicationsToUserRequest 请求参数}): {@link ListAuthorizedApplicationsToUserResponse 返回参数} */
  ListAuthorizedApplicationsToUser(data: ListAuthorizedApplicationsToUserRequest, config?: AxiosRequestConfig): AxiosPromise<ListAuthorizedApplicationsToUserResponse>;
  /** {@link ListAuthorizedApplicationsToUserGroup 获取用户组被授权访问的应用列表}({@link ListAuthorizedApplicationsToUserGroupRequest 请求参数}): {@link ListAuthorizedApplicationsToUserGroupResponse 返回参数} */
  ListAuthorizedApplicationsToUserGroup(data: ListAuthorizedApplicationsToUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ListAuthorizedApplicationsToUserGroupResponse>;
  /** {@link ListUserGroups 获取用户组列表信息}({@link ListUserGroupsRequest 请求参数}): {@link ListUserGroupsResponse 返回参数} */
  ListUserGroups(data?: ListUserGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ListUserGroupsResponse>;
  /** {@link ListUserGroupsOfUser 获取用户所在的用户组列表}({@link ListUserGroupsOfUserRequest 请求参数}): {@link ListUserGroupsOfUserResponse 返回参数} */
  ListUserGroupsOfUser(data: ListUserGroupsOfUserRequest, config?: AxiosRequestConfig): AxiosPromise<ListUserGroupsOfUserResponse>;
  /** {@link ListUsers 获取用户列表信息}({@link ListUsersRequest 请求参数}): {@link ListUsersResponse 返回参数} */
  ListUsers(data?: ListUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListUsersResponse>;
  /** {@link ListUsersInOrgNode 读取节点下用户}({@link ListUsersInOrgNodeRequest 请求参数}): {@link ListUsersInOrgNodeResponse 返回参数} */
  ListUsersInOrgNode(data?: ListUsersInOrgNodeRequest, config?: AxiosRequestConfig): AxiosPromise<ListUsersInOrgNodeResponse>;
  /** {@link ListUsersInUserGroup 获取用户组中的用户列表}({@link ListUsersInUserGroupRequest 请求参数}): {@link ListUsersInUserGroupResponse 返回参数} */
  ListUsersInUserGroup(data: ListUsersInUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ListUsersInUserGroupResponse>;
  /** {@link ModifyAccountGroup 修改账号组}({@link ModifyAccountGroupRequest 请求参数}): {@link ModifyAccountGroupResponse 返回参数} */
  ModifyAccountGroup(data: ModifyAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountGroupResponse>;
  /** {@link ModifyAppAccount 修改应用账号}({@link ModifyAppAccountRequest 请求参数}): {@link ModifyAppAccountResponse 返回参数} */
  ModifyAppAccount(data: ModifyAppAccountRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppAccountResponse>;
  /** {@link ModifyApplication 更新应用}({@link ModifyApplicationRequest 请求参数}): {@link ModifyApplicationResponse 返回参数} */
  ModifyApplication(data: ModifyApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationResponse>;
  /** {@link ModifyUserInfo 修改用户}({@link ModifyUserInfoRequest 请求参数}): {@link ModifyUserInfoResponse 返回参数} */
  ModifyUserInfo(data?: ModifyUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserInfoResponse>;
  /** {@link RemoveAccountFromAccountGroup 从账号组中移除账号}({@link RemoveAccountFromAccountGroupRequest 请求参数}): {@link RemoveAccountFromAccountGroupResponse 返回参数} */
  RemoveAccountFromAccountGroup(data: RemoveAccountFromAccountGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveAccountFromAccountGroupResponse>;
  /** {@link RemoveUserFromUserGroup 从用户组中移除用户}({@link RemoveUserFromUserGroupRequest 请求参数}): {@link RemoveUserFromUserGroupResponse 返回参数} */
  RemoveUserFromUserGroup(data: RemoveUserFromUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveUserFromUserGroupResponse>;
  /** {@link UpdateOrgNode 更新机构节点}({@link UpdateOrgNodeRequest 请求参数}): {@link UpdateOrgNodeResponse 返回参数} */
  UpdateOrgNode(data: UpdateOrgNodeRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOrgNodeResponse>;
}

export declare type Versions = ["2021-04-20"];

export default Eiam;
