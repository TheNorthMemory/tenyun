/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 失败详情 */
declare interface ErrorDetails {
  /** 用户信息 */
  UserId: string | null;
  /** 失败原因 */
  Error: string;
}

/** 导出属性映射 */
declare interface ExportPropertyMap {
  /** 用户属性code */
  UserPropertyCode: string;
  /** 用户属性映射名称 */
  ColumnName: string;
}

/** 失败的用户 */
declare interface FailedUsers {
  /** 失败用户标识 */
  FailedUserIdentification: string | null;
  /** 导入的用户失败原因 */
  FailedReason: string | null;
}

/** 查询条件 */
declare interface Filter {
  /** key值 */
  Key?: string;
  /** value值 */
  Values?: string[];
  /** 逻辑值 */
  Logic?: boolean;
}

/** 导入用户信息1、UserName，PhoneNumber ，Email ，WechatOpenId ，WechatUnionId ，AlipayUserId ，QqOpenId ，QqUnionId 八个属性中，导入时必须包含其中一个属性并遵守初始化自定义属性的正则表达式规则。UserName，PhoneNumber，Email的正则表达式在控制台的自定义属性中可以查询到。2、对于密码的导入，导入的密码支持明文导入，MD5密文导入，SHA1密文导入，BCRYPT密文导入 ，这个需要在PasswordEncryptTypeEnum 字段中指定。3、IdentityVerified，IdentityVerificationMethod 支持导入，IdentityVerified 为true，IdentityVerificationMethod必传；IdentityVerificationMethod 为nameAndIdCard，Name,ResidentIdentityCard必传IdentityVerificationMethod 为nameIdCardAndPhone，Name,PhoneNumber,ResidentIdentityCard必传; */
declare interface ImportUser {
  /** 用户名 */
  UserName?: string;
  /** 手机号 */
  PhoneNumber?: string;
  /** 邮箱 */
  Email?: string;
  /** 身份证号 */
  ResidentIdentityCard?: string;
  /** 昵称 */
  Nickname?: string;
  /** 地址 */
  Address?: string;
  /** 用户组ID */
  UserGroup?: string[];
  /** QQ qqOpenId */
  QqOpenId?: string;
  /** QQ qqUnionId */
  QqUnionId?: string;
  /** 微信wechatOpenId */
  WechatOpenId?: string;
  /** 微信wechatUnionId */
  WechatUnionId?: string;
  /** 支付宝alipayUserId */
  AlipayUserId?: string;
  /** 描述 */
  Description?: string;
  /** 生日 */
  Birthdate?: string;
  /** 姓名 */
  Name?: string;
  /** 坐标 */
  Locale?: string;
  /** 性别（MALE;FEMALE;UNKNOWN） */
  Gender?: string;
  /** 实名核验方式 */
  IdentityVerificationMethod?: string;
  /** 是否已实名核验 */
  IdentityVerified?: boolean;
  /** 工作 */
  Job?: string;
  /** 国家 */
  Nationality?: string;
  /** 时区 */
  Zone?: string;
  /** 密码密文 */
  Password?: string;
  /** 自定义属性 */
  CustomizationAttributes?: MemberMap[];
  /** 密码盐 */
  Salt?: Salt;
  /** 密码加密方式（SHA1;BCRYPT） */
  PasswordEncryptTypeEnum?: string;
  /** 索引字段1 */
  IndexedAttribute1?: string;
  /** 索引字段2 */
  IndexedAttribute2?: string;
  /** 索引字段3 */
  IndexedAttribute3?: string;
  /** 索引字段4 */
  IndexedAttribute4?: string;
  /** 索引字段5 */
  IndexedAttribute5?: string;
}

/** 任务详情 */
declare interface Job {
  /** 任务ID */
  Id: string;
  /** 任务状态 **PENDING** 待执行 **PROCESSING** 执行中 **COMPLETED** 完成 **FAILED** 失败 */
  Status: string;
  /** 任务类型 **IMPORT_USER** 用户导入 **EXPORT_USER** 用户导出 */
  Type: string;
  /** 任务创建时间 */
  CreatedDate: number;
  /** 任务的数据类型 **NDJSON** New-line Delimited JSON **CSV** Comma-Separated Values */
  Format: string | null;
  /** 任务结果下载地址 */
  Location: string | null;
  /** 失败详情 */
  ErrorDetails: ErrorDetails[] | null;
  /** 失败的用户 */
  FailedUsers: FailedUsers[] | null;
}

/** 日志详情 */
declare interface LogMessage {
  /** 日志标识 */
  LogId: string;
  /** 租户ID */
  TenantId: string | null;
  /** 用户池ID */
  UserStoreId: string | null;
  /** 事件编码 */
  EventCode: string | null;
  /** 事件发生时间戳，单位：毫秒 */
  EventDate: number | null;
  /** 描述 */
  Description: string | null;
  /** 事件参与者 **TENANT** 租户 **USER** 用户 */
  Participant: string | null;
  /** 应用clientId */
  ApplicationClientId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 认证源ID */
  AuthSourceId: string | null;
  /** 认证源名称 */
  AuthSourceName: string | null;
  /** 认证源类型 */
  AuthSourceType: string | null;
  /** 认证源类别 */
  AuthSourceCategory: string | null;
  /** IP地址 */
  Ip: string | null;
  /** 用户代理 */
  UserAgent: string | null;
  /** 用户ID */
  UserId: string | null;
  /** 详情 */
  Detail: string | null;
}

/** Map数据类型 */
declare interface MemberMap {
  /** 健 */
  Name: string;
  /** 值 */
  Value: string;
  /** 类型 */
  Type?: string | null;
}

/** 分页对象 */
declare interface Pageable {
  /** 每页数量 */
  PageSize: number;
  /** 当前页码 */
  PageNumber: number;
}

/** 查询用户信息条件 */
declare interface QueryUserFilter {
  /** 属性key */
  PropertyKey?: string;
  /** 属性value */
  PropertyValue?: string;
  /** 逻辑值，等于true，不等于false */
  Logic?: boolean;
  /** 操作逻辑符（支持> < = >= <= != between） */
  OperateLogic?: string;
}

/** 密码盐 */
declare interface Salt {
  /** 盐值 */
  SaltValue?: string;
  /** 盐值位置 */
  SaltLocation?: SaltLocation;
}

/** 盐位 */
declare interface SaltLocation {
  /** 密码加盐的类型（HEAD，TAIL，OTHER） */
  SaltLocationTypeEnum?: string;
  /** 加盐规则 */
  SaltLocationRule?: SaltLocationRule;
}

/** 盐位规则 */
declare interface SaltLocationRule {
  /** 表达式 */
  Regex?: string;
}

/** 查询用户排序 */
declare interface Sort {
  /** 排序字段的key，参考自定义属性 */
  PropertyKey?: string;
  /** 升序或者降序，ASC/DESC */
  Order?: string;
}

/** 用户信息 */
declare interface User {
  /** 用户ID */
  UserId: string;
  /** 用户名 */
  UserName: string | null;
  /** 手机号 */
  PhoneNumber: string | null;
  /** 邮箱 */
  Email: string | null;
  /** 上次登录时间 */
  LastSignOn: number | null;
  /** 创建时间 */
  CreatedDate: number;
  /** 状态 */
  Status: string;
  /** 用户来源 */
  UserDataSourceEnum: string;
  /** 昵称 */
  Nickname: string | null;
  /** 地址 */
  Address: string | null;
  /** 生日 */
  Birthdate: number | null;
  /** 用户组ID */
  UserGroups: string[] | null;
  /** 上次修改时间 */
  LastModifiedDate: number | null;
  /** 自定义属性 */
  CustomAttributes: MemberMap[] | null;
  /** 身份证号 */
  ResidentIdentityCard: string | null;
  /** QQ的OpenId */
  QqOpenId: string | null;
  /** QQ的UnionId */
  QqUnionId: string | null;
  /** 微信的WechatOpenId */
  WechatOpenId: string | null;
  /** 微信的WechatUnionId */
  WechatUnionId: string | null;
  /** 支付宝的AlipayUserId */
  AlipayUserId: string | null;
  /** 描述 */
  Description: string | null;
  /** 姓名 */
  Name: string | null;
  /** 坐标 */
  Locale: string | null;
  /** 性别 */
  Gender: string | null;
  /** 实名核验方式 */
  IdentityVerificationMethod: string | null;
  /** 是否已经实名核验 */
  IdentityVerified: boolean | null;
  /** 工作 */
  Job: string | null;
  /** 国家 */
  Nationality: string | null;
  /** 是否主账号（进行过账号融合后，主账号为true，从账号为false） */
  Primary: boolean | null;
  /** 时区 */
  Zone: string | null;
  /** 是否已经首次登录 */
  AlreadyFirstLogin: boolean | null;
  /** 租户id */
  TenantId: string | null;
  /** 用户目录id */
  UserStoreId: string | null;
  /** 版本 */
  Version: number | null;
  /** 锁定类型（分为管理员锁定，和登录策略锁定） */
  LockType: string | null;
  /** 锁定时间点 */
  LockTime: number | null;
  /** 索引字段1 */
  IndexedAttribute1: string | null;
  /** 索引字段2 */
  IndexedAttribute2: string | null;
  /** 索引字段3 */
  IndexedAttribute3: string | null;
  /** 索引字段4 */
  IndexedAttribute4: string | null;
  /** 索引字段5 */
  IndexedAttribute5: string | null;
}

declare interface CreateApiImportUserJobRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 导入的用户数据 */
  DataFlowUserCreateList: ImportUser[];
}

declare interface CreateApiImportUserJobResponse {
  /** 数据流任务 */
  Job: Job;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFileExportUserJobRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 导出的数据类型 **NDJSON** New-line Delimited JSON **CSV** Comma-Separated Values */
  Format?: string;
  /** Key可选值为condition、userGroupId **condition** Values = 查询条件，用户ID，用户名称，手机或邮箱 **userGroupId** Values = 用户组ID */
  Filters?: Filter[];
  /** 导出用户包含的属性和映射名称，为空时包含所有的属性 */
  ExportPropertyMaps?: ExportPropertyMap[];
}

declare interface CreateFileExportUserJobResponse {
  /** 数据流任务 */
  Job: Job;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 手机号码 */
  PhoneNumber: string;
  /** 邮箱 */
  Email: string;
  /** 密码 */
  Password: string;
  /** 用户名 */
  UserName: string;
  /** 昵称 */
  Nickname?: string;
  /** 地址 */
  Address?: string;
  /** 用户组ID */
  UserGroup?: string[];
  /** 生日 */
  Birthdate?: number;
  /** 自定义属性 */
  CustomizationAttributes?: MemberMap[];
  /** 索引字段1 */
  IndexedAttribute1?: string;
  /** 索引字段2 */
  IndexedAttribute2?: string;
  /** 索引字段3 */
  IndexedAttribute3?: string;
  /** 索引字段4 */
  IndexedAttribute4?: string;
  /** 索引字段5 */
  IndexedAttribute5?: string;
}

declare interface CreateUserResponse {
  /** 创建的用户信息 */
  User: User | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteUsersRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 用户ID数组 */
  UserIds: string[];
}

declare interface DeleteUsersResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserByIdRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 用户ID */
  UserId: string;
  /** 返回信息是否为原文 **false** 默认，返回信息为脱敏信息 **true** 返回用户信息原文 */
  Original?: boolean;
}

declare interface DescribeUserByIdResponse {
  /** 用户信息 */
  User: User | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 分页数据 */
  Pageable: Pageable;
  /** 查询条件，根据propertycode和propertykey */
  Filters?: QueryUserFilter[];
  /** 是否返回明文 */
  Original?: boolean;
  /** 排序设置 */
  Sort?: Sort;
}

declare interface DescribeUserResponse {
  /** 总条数 */
  Total: number | null;
  /** 分页对象 */
  Pageable: Pageable | null;
  /** 用户列表 */
  Content: User[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LinkAccountRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 主用户ID */
  PrimaryUserId: string;
  /** 从用户ID */
  SecondaryUserId: string;
  /** 融合属性 **PHONENUMBER** 手机号码 **EMAIL** 邮箱 */
  UserLinkedOnAttribute: string;
}

declare interface LinkAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListJobsRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 任务ID列表，为空时返回全部任务 */
  JobIds?: string[];
}

declare interface ListJobsResponse {
  /** 任务列表 */
  JobSet: Job[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListLogMessageByConditionRequest {
  /** 用户池ID */
  UserStoreId: string;
  /** 分页数据 */
  Pageable: Pageable;
  /** 开始时间，时间戳精确到毫秒 */
  StartTime: number;
  /** Key可选值为events **events** Values为["SIGNUP", "USER_UPDATE", "USER_DELETE", "USER_CREATE", "ACCOUNT_LINKING"] 中的一个或多个 */
  Filters?: Filter[];
}

declare interface ListLogMessageByConditionResponse {
  /** 总条数 */
  Total: number;
  /** 分页对象 */
  Pageable: Pageable;
  /** 日志列表 */
  Content: LogMessage[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUserByPropertyRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 查询的属性 **phoneNumber** 手机号码 **email** 邮箱 */
  PropertyCode: string;
  /** 属性值 */
  PropertyValue: string;
  /** 返回信息是否为原文 */
  Original?: boolean;
}

declare interface ListUserByPropertyResponse {
  /** 用户列表 */
  Users: User[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListUserRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 分页数据 */
  Pageable: Pageable;
  /** Key可选值为condition、userGroupId **condition** Values = 查询条件，用户ID，用户名称，手机或邮箱 **userGroupId** Values = 用户组ID */
  Filters?: Filter[];
  /** 返回信息是否为原文 */
  Original?: boolean;
}

declare interface ListUserResponse {
  /** 总条数 */
  Total: number | null;
  /** 分页对象 */
  Pageable: Pageable | null;
  /** 用户列表 */
  Content: User[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetPasswordRequest {
  /** 用户ID */
  UserId: string;
  /** 用户目录ID */
  UserStoreId: string;
}

declare interface ResetPasswordResponse {
  /** 重置后的用户密码 */
  Password: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetPasswordRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 用户ID */
  UserId: string;
  /** 密码 */
  Password: string;
}

declare interface SetPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateUserRequest {
  /** 用户ID */
  UserId: string;
  /** 用户目录ID */
  UserStoreId: string;
  /** 用户名称 */
  UserName?: string;
  /** 手机号码 */
  PhoneNumber?: string;
  /** 邮箱 */
  Email?: string;
  /** 昵称 */
  Nickname?: string;
  /** 地址 */
  Address?: string;
  /** 用户组 */
  UserGroup?: string[];
  /** 生日 */
  Birthdate?: number;
  /** 自定义属性 */
  CustomizationAttributes?: MemberMap[];
  /** 索引字段1 */
  IndexedAttribute1?: string;
  /** 索引字段2 */
  IndexedAttribute2?: string;
  /** 索引字段3 */
  IndexedAttribute3?: string;
  /** 索引字段4 */
  IndexedAttribute4?: string;
  /** 索引字段5 */
  IndexedAttribute5?: string;
}

declare interface UpdateUserResponse {
  /** 更新之后的用户信息 */
  User: User | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateUserStatusRequest {
  /** 用户目录ID */
  UserStoreId: string;
  /** 用户ID */
  UserId: string;
  /** 用户状态 **NORMAL** 正常 **LOCK** 锁定 **FREEZE** 冻结 */
  Status: string;
}

declare interface UpdateUserStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [账号风控平台](https://cloud.tencent.com/document/product/1441) */
declare interface Ciam {
  (): Versions;
  /** 新建接口导入用户任务 */
  CreateApiImportUserJob(data: CreateApiImportUserJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApiImportUserJobResponse>;
  /** 新建文件导出用户任务 */
  CreateFileExportUserJob(data: CreateFileExportUserJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileExportUserJobResponse>;
  /** 创建用户 */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** 批量删除用户 */
  DeleteUsers(data: DeleteUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsersResponse>;
  /** 查询用户信息 */
  DescribeUser(data: DescribeUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserResponse>;
  /** 根据ID查询用户信息 */
  DescribeUserById(data: DescribeUserByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserByIdResponse>;
  /** 账号融合 */
  LinkAccount(data: LinkAccountRequest, config?: AxiosRequestConfig): AxiosPromise<LinkAccountResponse>;
  /** 查询任务详情 */
  ListJobs(data: ListJobsRequest, config?: AxiosRequestConfig): AxiosPromise<ListJobsResponse>;
  /** 查询日志信息 */
  ListLogMessageByCondition(data: ListLogMessageByConditionRequest, config?: AxiosRequestConfig): AxiosPromise<ListLogMessageByConditionResponse>;
  /** 查询用户列表 */
  ListUser(data: ListUserRequest, config?: AxiosRequestConfig): AxiosPromise<ListUserResponse>;
  /** 根据属性查询用户列表 */
  ListUserByProperty(data: ListUserByPropertyRequest, config?: AxiosRequestConfig): AxiosPromise<ListUserByPropertyResponse>;
  /** 重置用户密码 */
  ResetPassword(data: ResetPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetPasswordResponse>;
  /** 设置用户密码 */
  SetPassword(data: SetPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<SetPasswordResponse>;
  /** 更新用户 */
  UpdateUser(data: UpdateUserRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserResponse>;
  /** 更新用户状态 */
  UpdateUserStatus(data: UpdateUserStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserStatusResponse>;
}

export declare type Versions = ["2022-03-31"];

export default Ciam;
