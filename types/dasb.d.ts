/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 访问权限 */
declare interface Acl {
  /** 访问权限ID */
  Id: number;
  /** 访问权限名称 */
  Name: string;
  /** 是否开启磁盘映射 */
  AllowDiskRedirect: boolean;
  /** 是否开启剪贴板文件上行 */
  AllowClipFileUp: boolean;
  /** 是否开启剪贴板文件下行 */
  AllowClipFileDown: boolean;
  /** 是否开启剪贴板文本（目前含图片）上行 */
  AllowClipTextUp: boolean;
  /** 是否开启剪贴板文本（目前含图片）下行 */
  AllowClipTextDown: boolean;
  /** 是否开启文件传输上传 */
  AllowFileUp: boolean;
  /** 文件传输上传大小限制（预留参数，暂未启用） */
  MaxFileUpSize: number;
  /** 是否开启文件传输下载 */
  AllowFileDown: boolean;
  /** 文件传输下载大小限制（预留参数，暂未启用） */
  MaxFileDownSize: number;
  /** 是否允许任意账号登录 */
  AllowAnyAccount: boolean;
  /** 关联的用户列表 */
  UserSet: User[];
  /** 关联的用户组列表 */
  UserGroupSet: Group[];
  /** 关联的资产列表 */
  DeviceSet: Device[];
  /** 关联的资产组列表 */
  DeviceGroupSet: Group[];
  /** 关联的账号列表 */
  AccountSet: string[];
  /** 关联的高危命令模板列表 */
  CmdTemplateSet: CmdTemplate[];
  /** 是否开启 RDP 磁盘映射文件上传 */
  AllowDiskFileUp: boolean;
  /** 是否开启 RDP 磁盘映射文件下载 */
  AllowDiskFileDown: boolean;
  /** 是否开启 rz sz 文件上传 */
  AllowShellFileUp: boolean;
  /** 是否开启 rz sz 文件下载 */
  AllowShellFileDown: boolean;
  /** 是否开启 SFTP 文件删除 */
  AllowFileDel: boolean;
  /** 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"生效、失效时间不填则访问权限长期有效 */
  ValidateFrom: string;
  /** 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"生效、失效时间不填则访问权限长期有效 */
  ValidateTo: string;
  /** 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期 */
  Status: number;
  /** 所属部门的信息 */
  Department: Department | null;
}

/** 高危命令模板 */
declare interface CmdTemplate {
  /** 高危命令模板ID */
  Id: number;
  /** 高危命令模板名称 */
  Name: string;
  /** 命令列表，命令之间用换行符（"\n"）分隔 */
  CmdList: string;
}

/** 部门信息 */
declare interface Department {
  /** 部门ID */
  Id: string;
  /** 部门名称，1 - 256个字符 */
  Name: string;
  /** 部门管理员账号ID */
  Managers: string[] | null;
}

/** 资产信息 */
declare interface Device {
  /** 资产ID */
  Id: number;
  /** 实例ID，对应CVM、CDB等实例ID */
  InstanceId: string;
  /** 资产名 */
  Name: string;
  /** 公网IP */
  PublicIp: string;
  /** 内网IP */
  PrivateIp: string;
  /** 地域编码 */
  ApCode: string;
  /** 操作系统名称 */
  OsName: string;
  /** 资产类型 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer */
  Kind: number;
  /** 管理端口 */
  Port: number;
  /** 所属资产组列表 */
  GroupSet: Group[];
  /** 资产绑定的账号数 */
  AccountCount: number;
  /** VPC ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 堡垒机服务信息，注意没有绑定服务时为null */
  Resource: Resource | null;
  /** 资产所属部门 */
  Department: Department | null;
}

/** 组信息，用于用户组、主机组 */
declare interface Group {
  /** 组ID */
  Id: number;
  /** 组名称 */
  Name: string;
  /** 所属部门信息 */
  Department: Department | null;
}

/** 堡垒机服务信息 */
declare interface Resource {
  /** 服务实例ID，如bh-saas-s3ed4r5e */
  ResourceId: string;
  /** 地域编码 */
  ApCode: string;
  /** 服务实例规格信息 */
  SvArgs: string;
  /** VPC ID */
  VpcId: string;
  /** 服务规格对应的资产数 */
  Nodes: number;
  /** 自动续费标记，0 - 表示默认状态，1 - 表示自动续费，2 - 表示明确不自动续费 */
  RenewFlag: number;
  /** 过期时间 */
  ExpireTime: string;
  /** 资源状态，0 - 未初始化，1 - 正常，2 - 隔离，3 - 销毁，4 - 初始化失败，5 - 初始化中 */
  Status: number;
  /** 服务实例名，如T-Sec-堡垒机（SaaS型） */
  ResourceName: string;
  /** 定价模型ID */
  Pid: number;
  /** 资源创建时间 */
  CreateTime: string;
  /** 商品码, p_cds_dasb */
  ProductCode: string;
  /** 子商品码, sp_cds_dasb_bh_saas */
  SubProductCode: string;
  /** 可用区 */
  Zone: string;
  /** 是否过期，true-过期，false-未过期 */
  Expired: boolean;
  /** 是否开通，true-开通，false-未开通 */
  Deployed: boolean;
  /** 开通服务的 VPC 名称 */
  VpcName: string;
  /** 开通服务的 VPC 对应的网段 */
  VpcCidrBlock: string;
  /** 开通服务的子网ID */
  SubnetId: string;
  /** 开通服务的子网名称 */
  SubnetName: string;
  /** 开通服务的子网网段 */
  CidrBlock: string;
  /** 外部IP */
  PublicIpSet: string[];
  /** 内部IP */
  PrivateIpSet: string[];
  /** 服务开通的高级功能列表，如:[DB] */
  ModuleSet: string[];
  /** 已使用的授权点数 */
  UsedNodes: number;
  /** 扩展点数 */
  ExtendPoints: number;
  /** 带宽扩展包个数(4M) */
  PackageBandwidth: number;
  /** 授权点数扩展包个数(50点) */
  PackageNode: number;
}

/** 用户信息 */
declare interface User {
  /** 用户名, 3-20个字符 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符 */
  UserName: string;
  /** 用户姓名， 最大20个字符，不能包含空白字符 */
  RealName: string;
  /** 手机号码， 大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx" */
  Phone: string;
  /** 用户ID */
  Id?: number;
  /** 电子邮件 */
  Email?: string;
  /** 用户生效时间，如:"2021-09-22T00:00:00+00:00"生效、失效时间不填则用户长期有效 */
  ValidateFrom?: string;
  /** 用户失效时间，如:"2021-09-22T00:00:00+00:00"生效、失效时间不填则用户长期有效 */
  ValidateTo?: string;
  /** 所属用户组列表 */
  GroupSet?: Group[];
  /** 认证方式，0 - 本地，1 - LDAP，2 - OAuth */
  AuthType?: number;
  /** 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问 */
  ValidateTime?: string;
  /** 用户所属部门（用于出参） */
  Department?: Department | null;
  /** 用户所属部门（用于入参） */
  DepartmentId?: string | null;
}

declare interface AddDeviceGroupMembersRequest {
  /** 资产组ID */
  Id: number;
  /** 需要添加到资产组的资产ID集合 */
  MemberIdSet: number[];
}

declare interface AddDeviceGroupMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddUserGroupMembersRequest {
  /** 用户组ID */
  Id: number;
  /** 成员用户ID集合 */
  MemberIdSet: number[];
}

declare interface AddUserGroupMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BindDeviceResourceRequest {
  /** 资产ID集合 */
  DeviceIdSet: number[];
  /** 堡垒机服务ID */
  ResourceId: string;
}

declare interface BindDeviceResourceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAclRequest {
  /** 权限名称，最大32字符，不能包含空白字符 */
  Name: string;
  /** 是否开启磁盘映射 */
  AllowDiskRedirect: boolean;
  /** 是否允许任意账号登录 */
  AllowAnyAccount: boolean;
  /** 是否开启剪贴板文件上行 */
  AllowClipFileUp?: boolean;
  /** 是否开启剪贴板文件下行 */
  AllowClipFileDown?: boolean;
  /** 是否开启剪贴板文本（含图片）上行 */
  AllowClipTextUp?: boolean;
  /** 是否开启剪贴板文本（含图片）下行 */
  AllowClipTextDown?: boolean;
  /** 是否开启 SFTP 文件上传 */
  AllowFileUp?: boolean;
  /** 文件传输上传大小限制（预留参数，目前暂未使用） */
  MaxFileUpSize?: number;
  /** 是否开启 SFTP 文件下载 */
  AllowFileDown?: boolean;
  /** 文件传输下载大小限制（预留参数，目前暂未使用） */
  MaxFileDownSize?: number;
  /** 关联的用户ID集合 */
  UserIdSet?: number[];
  /** 关联的用户组ID */
  UserGroupIdSet?: number[];
  /** 关联的资产ID集合 */
  DeviceIdSet?: number[];
  /** 关联的资产组ID */
  DeviceGroupIdSet?: number[];
  /** 关联的账号 */
  AccountSet?: string[];
  /** 关联的高危命令模板ID */
  CmdTemplateIdSet?: number[];
  /** 是否开启rdp磁盘映射文件上传 */
  AllowDiskFileUp?: boolean;
  /** 是否开启rdp磁盘映射文件下载 */
  AllowDiskFileDown?: boolean;
  /** 是否开启rz sz文件上传 */
  AllowShellFileUp?: boolean;
  /** 是否开启rz sz文件下载 */
  AllowShellFileDown?: boolean;
  /** 是否开启 SFTP 文件删除 */
  AllowFileDel?: boolean;
  /** 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"生效、失效时间不填则访问权限长期有效 */
  ValidateFrom?: string;
  /** 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"生效、失效时间不填则访问权限长期有效 */
  ValidateTo?: string;
  /** 访问权限所属部门的ID */
  DepartmentId?: string;
}

declare interface CreateAclResponse {
  /** 新建成功的访问权限ID */
  Id: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDeviceGroupRequest {
  /** 资产组名，最大长度32字符 */
  Name: string;
  /** 资产组所属部门ID，如：1.2.3 */
  DepartmentId?: string;
}

declare interface CreateDeviceGroupResponse {
  /** 新建成功的资产组ID */
  Id: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserGroupRequest {
  /** 用户组名，最大长度32字符 */
  Name: string;
  /** 用户组所属部门的ID，如：1.2.3 */
  DepartmentId?: string;
}

declare interface CreateUserGroupResponse {
  /** 新建成功的用户组ID */
  Id: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserRequest {
  /** 用户名, 3-20个字符, 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符 */
  UserName: string;
  /** 用户姓名，最大长度20个字符，不能包含空白字符 */
  RealName: string;
  /** 大陆手机号直接填写，如果是其他国家、地区号码， 按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx" */
  Phone: string;
  /** 电子邮件 */
  Email?: string;
  /** 用户生效时间，如:"2021-09-22T00:00:00+00:00"生效、失效时间不填则用户长期有效 */
  ValidateFrom?: string;
  /** 用户失效时间，如:"2021-09-23T00:00:00+00:00"生效、失效时间不填则用户长期有效 */
  ValidateTo?: string;
  /** 所属用户组ID集合 */
  GroupIdSet?: number[];
  /** 认证方式，0 - 本地， 1 - LDAP， 2 - OAuth 不传则默认为0 */
  AuthType?: number;
  /** 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问 */
  ValidateTime?: string;
  /** 所属部门ID，如：“1.2.3” */
  DepartmentId?: string;
}

declare interface CreateUserResponse {
  /** 新建用户的ID */
  Id: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAclsRequest {
  /** 待删除的权限ID集合 */
  IdSet: number[];
}

declare interface DeleteAclsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDeviceGroupMembersRequest {
  /** 资产组ID */
  Id: number;
  /** 需要删除的资产ID集合 */
  MemberIdSet: number[];
}

declare interface DeleteDeviceGroupMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDeviceGroupsRequest {
  /** 待删除的资产组ID集合 */
  IdSet: number[];
}

declare interface DeleteDeviceGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUserGroupMembersRequest {
  /** 用户组ID */
  Id: number;
  /** 需删除的成员用户ID集合 */
  MemberIdSet: number[];
}

declare interface DeleteUserGroupMembersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUserGroupsRequest {
  /** 待删除的用户组ID集合 */
  IdSet: number[];
}

declare interface DeleteUserGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUsersRequest {
  /** 待删除的用户ID集合 */
  IdSet: number[];
}

declare interface DeleteUsersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAclsRequest {
  /** 访问权限ID集合 */
  IdSet?: number[];
  /** 访问权限名称，模糊查询，最长64字符 */
  Name?: string;
  /** 分页偏移位置 */
  Offset?: number;
  /** 每页条目数量，默认20，最大500 */
  Limit?: number;
  /** 是否根据Name进行精确查询，默认值false */
  Exact?: boolean;
  /** 有访问权限的用户ID集合 */
  AuthorizedUserIdSet?: number[];
  /** 有访问权限的资产ID集合 */
  AuthorizedDeviceIdSet?: number[];
  /** 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期 */
  Status?: number;
  /** 部门ID，用于过滤属于某个部门的访问权限 */
  DepartmentId?: string;
}

declare interface DescribeAclsResponse {
  /** 访问权限总数 */
  TotalCount: number;
  /** 访问权限列表 */
  AclSet: Acl[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDasbImageIdsRequest {
}

declare interface DescribeDasbImageIdsResponse {
  /** 基础镜像ID */
  BaseImageId?: string;
  /** AI镜像ID */
  AiImageId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceGroupMembersRequest {
  /** 资产组ID */
  Id: number;
  /** true - 查询已在该资产组的资产，false - 查询未在该资产组的资产 */
  Bound: boolean;
  /** 资产名或资产IP，模糊查询 */
  Name?: string;
  /** 分页偏移位置 */
  Offset?: number;
  /** 每页条目数，默认20, 最大500 */
  Limit?: number;
  /** 资产类型，1 - Linux，2 - Windows，3 - MySQL，4 - SQLServer */
  Kind?: number;
  /** 所属部门ID */
  DepartmentId?: string;
}

declare interface DescribeDeviceGroupMembersResponse {
  /** 资产组成员总数 */
  TotalCount: number;
  /** 资产组成员列表 */
  DeviceSet: Device[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeviceGroupsRequest {
  /** 资产组ID集合 */
  IdSet?: number[];
  /** 资产组名，最长64个字符，模糊查询 */
  Name?: string;
  /** 分页偏移位置 */
  Offset?: number;
  /** 每页条目数量，缺省20，最大500 */
  Limit?: number;
  /** 部门ID，用于过滤属于某个部门的资产组 */
  DepartmentId?: string;
}

declare interface DescribeDeviceGroupsResponse {
  /** 资产组总数 */
  TotalCount: number;
  /** 资产组列表 */
  GroupSet: Group[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDevicesRequest {
  /** 资产ID集合 */
  IdSet?: number[];
  /** 资产名或资产IP，模糊查询 */
  Name?: string;
  /** 暂未使用 */
  Ip?: string;
  /** 地域码集合 */
  ApCodeSet?: string[];
  /** 操作系统类型, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer */
  Kind?: number;
  /** 分页，偏移位置 */
  Offset?: number;
  /** 每页条目数量，默认20 */
  Limit?: number;
  /** 有该资产访问权限的用户ID集合 */
  AuthorizedUserIdSet?: number[];
  /** 过滤条件，资产绑定的堡垒机服务ID集合 */
  ResourceIdSet?: string[];
  /** 可提供按照多种类型过滤, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer */
  KindSet?: number[];
  /** 过滤条件，可按照部门ID进行过滤 */
  DepartmentId?: string;
}

declare interface DescribeDevicesResponse {
  /** 资产总数 */
  TotalCount: number;
  /** 资产信息列表 */
  DeviceSet: Device[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourcesRequest {
  /** 地域码, 如: ap-guangzhou */
  ApCode?: string;
  /** 按照堡垒机开通的 VPC 实例ID查询 */
  VpcId?: string;
  /** 资源ID集合，当传入ID集合时忽略 ApCode 和 VpcId */
  ResourceIds?: string[];
}

declare interface DescribeResourcesResponse {
  /** 堡垒机资源列表 */
  ResourceSet: Resource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserGroupMembersRequest {
  /** 用户组ID */
  Id: number;
  /** true - 查询已添加到该用户组的用户，false - 查询未添加到该用户组的用户 */
  Bound: boolean;
  /** 用户名或用户姓名，最长64个字符，模糊查询 */
  Name?: string;
  /** 分页偏移位置 */
  Offset?: number;
  /** 每页条目数量，默认20, 最大500 */
  Limit?: number;
  /** 所属部门ID */
  DepartmentId?: string;
}

declare interface DescribeUserGroupMembersResponse {
  /** 用户组成员总数 */
  TotalCount: number;
  /** 用户组成员列表 */
  UserSet: User[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserGroupsRequest {
  /** 用户组ID集合 */
  IdSet?: number[];
  /** 用户组名，模糊查询,长度：0-64字符 */
  Name?: string;
  /** 分页偏移位置 */
  Offset?: number;
  /** 每页条目数量，缺省20，最大500 */
  Limit?: number;
  /** 部门ID，用于过滤属于某个部门的用户组 */
  DepartmentId?: string;
}

declare interface DescribeUserGroupsResponse {
  /** 用户组总数 */
  TotalCount: number;
  /** 用户组列表 */
  GroupSet: Group[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUsersRequest {
  /** 如果IdSet不为空，则忽略其他参数 */
  IdSet?: number[];
  /** 模糊查询，IdSet、UserName、Phone为空时才生效，对用户名和姓名进行模糊查询 */
  Name?: string;
  /** 分页，偏移位置 */
  Offset?: number;
  /** 每页条目数量，默认20, 最大500 */
  Limit?: number;
  /** 精确查询，IdSet为空时才生效 */
  UserName?: string;
  /** 精确查询，IdSet、UserName为空时才生效。大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx" */
  Phone?: string;
  /** 查询具有指定资产ID访问权限的用户 */
  AuthorizedDeviceIdSet?: number[];
  /** 认证方式，0 - 本地, 1 - LDAP, 2 - OAuth, 不传为全部 */
  AuthTypeSet?: number[];
  /** 部门ID，用于过滤属于某个部门的用户 */
  DepartmentId?: string;
}

declare interface DescribeUsersResponse {
  /** 用户总数 */
  TotalCount: number;
  /** 用户列表 */
  UserSet: User[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAclRequest {
  /** 访问权限名称，最大32字符，不能包含空白字符 */
  Name: string;
  /** 是否开启磁盘映射 */
  AllowDiskRedirect: boolean;
  /** 是否允许任意账号登录 */
  AllowAnyAccount: boolean;
  /** 访问权限ID */
  Id: number;
  /** 是否开启剪贴板文件上行 */
  AllowClipFileUp?: boolean;
  /** 是否开启剪贴板文件下行 */
  AllowClipFileDown?: boolean;
  /** 是否开启剪贴板文本（含图片）上行 */
  AllowClipTextUp?: boolean;
  /** 是否开启剪贴板文本（含图片）下行 */
  AllowClipTextDown?: boolean;
  /** 是否开启文件传输上传 */
  AllowFileUp?: boolean;
  /** 文件传输上传大小限制（预留参数，目前暂未使用） */
  MaxFileUpSize?: number;
  /** 是否开启文件传输下载 */
  AllowFileDown?: boolean;
  /** 文件传输下载大小限制（预留参数，目前暂未使用） */
  MaxFileDownSize?: number;
  /** 关联的用户ID */
  UserIdSet?: number[];
  /** 关联的用户组ID */
  UserGroupIdSet?: number[];
  /** 关联的资产ID */
  DeviceIdSet?: number[];
  /** 关联的资产组ID */
  DeviceGroupIdSet?: number[];
  /** 关联的账号 */
  AccountSet?: string[];
  /** 关联的高危命令模板ID */
  CmdTemplateIdSet?: number[];
  /** 是否开启 RDP 磁盘映射文件上传 */
  AllowDiskFileUp?: boolean;
  /** 是否开启 RDP 磁盘映射文件下载 */
  AllowDiskFileDown?: boolean;
  /** 是否开启rz sz文件上传 */
  AllowShellFileUp?: boolean;
  /** 是否开启rz sz文件下载 */
  AllowShellFileDown?: boolean;
  /** 是否开启 SFTP 文件删除 */
  AllowFileDel?: boolean;
  /** 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"生效、失效时间不填则访问权限长期有效 */
  ValidateFrom?: string;
  /** 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"生效、失效时间不填则访问权限长期有效 */
  ValidateTo?: string;
  /** 权限所属部门的ID，如：1.2.3 */
  DepartmentId?: string;
}

declare interface ModifyAclResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyUserRequest {
  /** 用户ID */
  Id: number;
  /** 用户姓名，最大长度20个字符，不能包含空格 */
  RealName: string;
  /** 大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx" */
  Phone: string;
  /** 电子邮件 */
  Email: string;
  /** 用户生效时间，如:"2021-09-22T00:00:00+00:00"生效、失效时间不填则用户长期有效 */
  ValidateFrom?: string;
  /** 用户失效时间，如:"2021-09-23T00:00:00+00:00"生效、失效时间不填则用户长期有效 */
  ValidateTo?: string;
  /** 所属用户组ID集合 */
  GroupIdSet?: number[];
  /** 认证方式，0 - 本地，1 - LDAP，2 - OAuth 不传则默认为0 */
  AuthType?: number;
  /** 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问 */
  ValidateTime?: string;
  /** 用户所属部门的ID，如1.2.3 */
  DepartmentId?: string;
}

declare interface ModifyUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Dasb T-Sec-堡垒机（BH）} */
declare interface Dasb {
  (): Versions;
  /** {@link AddDeviceGroupMembers 添加资产组成员}({@link AddDeviceGroupMembersRequest 请求参数}): {@link AddDeviceGroupMembersResponse 返回参数} */
  AddDeviceGroupMembers(data: AddDeviceGroupMembersRequest, config?: AxiosRequestConfig): AxiosPromise<AddDeviceGroupMembersResponse>;
  /** {@link AddUserGroupMembers 添加用户组成员}({@link AddUserGroupMembersRequest 请求参数}): {@link AddUserGroupMembersResponse 返回参数} */
  AddUserGroupMembers(data: AddUserGroupMembersRequest, config?: AxiosRequestConfig): AxiosPromise<AddUserGroupMembersResponse>;
  /** {@link BindDeviceResource 修改资产绑定的堡垒机服务}({@link BindDeviceResourceRequest 请求参数}): {@link BindDeviceResourceResponse 返回参数} */
  BindDeviceResource(data: BindDeviceResourceRequest, config?: AxiosRequestConfig): AxiosPromise<BindDeviceResourceResponse>;
  /** {@link CreateAcl 新建访问权限}({@link CreateAclRequest 请求参数}): {@link CreateAclResponse 返回参数} */
  CreateAcl(data: CreateAclRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAclResponse>;
  /** {@link CreateDeviceGroup 新建资产组}({@link CreateDeviceGroupRequest 请求参数}): {@link CreateDeviceGroupResponse 返回参数} */
  CreateDeviceGroup(data: CreateDeviceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceGroupResponse>;
  /** {@link CreateUser 新建用户}({@link CreateUserRequest 请求参数}): {@link CreateUserResponse 返回参数} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** {@link CreateUserGroup 新建用户组}({@link CreateUserGroupRequest 请求参数}): {@link CreateUserGroupResponse 返回参数} */
  CreateUserGroup(data: CreateUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserGroupResponse>;
  /** {@link DeleteAcls 删除访问权限}({@link DeleteAclsRequest 请求参数}): {@link DeleteAclsResponse 返回参数} */
  DeleteAcls(data: DeleteAclsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAclsResponse>;
  /** {@link DeleteDeviceGroupMembers 删除资产组成员}({@link DeleteDeviceGroupMembersRequest 请求参数}): {@link DeleteDeviceGroupMembersResponse 返回参数} */
  DeleteDeviceGroupMembers(data: DeleteDeviceGroupMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceGroupMembersResponse>;
  /** {@link DeleteDeviceGroups 删除资产组}({@link DeleteDeviceGroupsRequest 请求参数}): {@link DeleteDeviceGroupsResponse 返回参数} */
  DeleteDeviceGroups(data: DeleteDeviceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceGroupsResponse>;
  /** {@link DeleteUserGroupMembers 删除用户组成员}({@link DeleteUserGroupMembersRequest 请求参数}): {@link DeleteUserGroupMembersResponse 返回参数} */
  DeleteUserGroupMembers(data: DeleteUserGroupMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserGroupMembersResponse>;
  /** {@link DeleteUserGroups 删除用户组}({@link DeleteUserGroupsRequest 请求参数}): {@link DeleteUserGroupsResponse 返回参数} */
  DeleteUserGroups(data: DeleteUserGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserGroupsResponse>;
  /** {@link DeleteUsers 删除用户}({@link DeleteUsersRequest 请求参数}): {@link DeleteUsersResponse 返回参数} */
  DeleteUsers(data: DeleteUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsersResponse>;
  /** {@link DescribeAcls 查询访问权限列表}({@link DescribeAclsRequest 请求参数}): {@link DescribeAclsResponse 返回参数} */
  DescribeAcls(data?: DescribeAclsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAclsResponse>;
  /** {@link DescribeDasbImageIds 数盾-DASB-获取镜像列表}({@link DescribeDasbImageIdsRequest 请求参数}): {@link DescribeDasbImageIdsResponse 返回参数} */
  DescribeDasbImageIds(data?: DescribeDasbImageIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDasbImageIdsResponse>;
  /** {@link DescribeDeviceGroupMembers 查询资产组成员列表}({@link DescribeDeviceGroupMembersRequest 请求参数}): {@link DescribeDeviceGroupMembersResponse 返回参数} */
  DescribeDeviceGroupMembers(data: DescribeDeviceGroupMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceGroupMembersResponse>;
  /** {@link DescribeDeviceGroups 查询资产组列表}({@link DescribeDeviceGroupsRequest 请求参数}): {@link DescribeDeviceGroupsResponse 返回参数} */
  DescribeDeviceGroups(data?: DescribeDeviceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceGroupsResponse>;
  /** {@link DescribeDevices 查询资产列表}({@link DescribeDevicesRequest 请求参数}): {@link DescribeDevicesResponse 返回参数} */
  DescribeDevices(data?: DescribeDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicesResponse>;
  /** {@link DescribeResources 查询堡垒机服务信息}({@link DescribeResourcesRequest 请求参数}): {@link DescribeResourcesResponse 返回参数} */
  DescribeResources(data?: DescribeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesResponse>;
  /** {@link DescribeUserGroupMembers 查询用户组成员列表}({@link DescribeUserGroupMembersRequest 请求参数}): {@link DescribeUserGroupMembersResponse 返回参数} */
  DescribeUserGroupMembers(data: DescribeUserGroupMembersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserGroupMembersResponse>;
  /** {@link DescribeUserGroups 查询用户组列表}({@link DescribeUserGroupsRequest 请求参数}): {@link DescribeUserGroupsResponse 返回参数} */
  DescribeUserGroups(data?: DescribeUserGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserGroupsResponse>;
  /** {@link DescribeUsers 查询用户列表}({@link DescribeUsersRequest 请求参数}): {@link DescribeUsersResponse 返回参数} */
  DescribeUsers(data?: DescribeUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersResponse>;
  /** {@link ModifyAcl 修改访问权限}({@link ModifyAclRequest 请求参数}): {@link ModifyAclResponse 返回参数} */
  ModifyAcl(data: ModifyAclRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAclResponse>;
  /** {@link ModifyUser 修改用户信息}({@link ModifyUserRequest 请求参数}): {@link ModifyUserResponse 返回参数} */
  ModifyUser(data: ModifyUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserResponse>;
}

export declare type Versions = ["2019-10-18"];

export default Dasb;
