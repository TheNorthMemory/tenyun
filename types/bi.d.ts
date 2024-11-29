/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 申请Token延期 */
declare interface ApplyEmbedTokenInfo {
  /** 申请结果 */
  Result: boolean | null;
}

/** 列表查询返回的每条记录的操作属性 */
declare interface BaseStateAction {
  /** 编辑是否可见 */
  ShowEdit?: boolean | null;
  /** 编辑是否可点击 */
  IsEdit?: boolean | null;
  /** 编辑按钮的文本 */
  EditText?: string | null;
  /** 编辑不可用时的提示文本 */
  EditTips?: string | null;
  /** 删除是否可见 */
  ShowDel?: boolean | null;
  /** 删除是否可点击 */
  IsDel?: boolean | null;
  /** 删除按钮的文本 */
  DelText?: string | null;
  /** 删除不可用时的提示文本 */
  DelTips?: string | null;
  /** 复制是否可见 */
  ShowCopy?: boolean | null;
  /** 是否可见 */
  ShowView?: boolean | null;
  /** 是否可重命名 */
  ShowRename?: boolean | null;
}

/** 企业用户列表 */
declare interface CorpUserListData {
  /** 列表 */
  List: UserIdAndUserName[] | null;
  /** 总数 */
  Total: number;
  /** 页数 */
  TotalPages: number;
}

/** 数据 */
declare interface Data {
  /** 项目Id */
  Id: number;
}

/** 数据ID */
declare interface DataId {
  /** 数据id */
  Id: number | null;
}

/** 数据源详情 */
declare interface DatasourceInfo {
  /** 数据库ID */
  Id?: number;
  /** 数据库名称 */
  DbName?: string;
  /** 域类型，1、腾讯云，2、本地 */
  ServiceType?: string | null;
  /** 数据库别名 */
  SourceName?: string;
  /** 数据库驱动 */
  DbType?: string;
  /** HOST */
  DbHost?: string;
  /** 端口 */
  DbPort?: number;
  /** 用户名 */
  DbUser?: string;
  /** 数据库编码 */
  Charset?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 修改时间 */
  UpdatedAt?: string;
  /** 创建人 */
  CreatedUser?: string | null;
  /** catalog值 */
  Catalog?: string | null;
  /** 连接类型 */
  ConnectType?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 数据源描述 */
  Desc?: string | null;
  /** 数据源状态 */
  Status?: string | null;
  /** 来源平台 */
  SourcePlat?: string | null;
  /** 扩展参数 */
  ExtraParam?: string | null;
  /** 额外信息 */
  AddInfo?: string | null;
  /** 项目名字 */
  ProjectName?: string | null;
  /** 引擎类型 */
  EngineType?: string | null;
  /** 数据源负责人 */
  Manager?: string | null;
  /** 特定操作人员白名单 */
  OperatorWhitelist?: string | null;
  /** 数据源的vpc信息 */
  VpcId?: string | null;
  /** 数据源的uniqVpc信息 */
  UniqVpcId?: string | null;
  /** 数据源的地域信息 */
  RegionId?: string | null;
  /** 操作属性 */
  StateAction?: BaseStateAction | null;
  /** 更新人 */
  UpdatedUser?: string | null;
  /** 权限列表 */
  PermissionList?: PermissionGroup[] | null;
  /** 权限值列表 */
  AuthList?: string[] | null;
  /** 第三方数据源标识 */
  DataOrigin?: string | null;
  /** 第三方项目id */
  DataOriginProjectId?: string | null;
  /** 第三方数据源id */
  DataOriginDatasourceId?: string | null;
  /** 集群id */
  ClusterId?: string | null;
  /** 数据源名称 */
  DbTypeName?: string | null;
}

/** 数据源详情列表 */
declare interface DatasourceInfoData {
  /** 数据源详情列表 */
  List: DatasourceInfo[] | null;
  /** 总数 */
  Total?: number | null;
  /** 总页数 */
  TotalPages?: number | null;
}

/** 报表嵌出数据结构-强鉴权 */
declare interface EmbedTokenInfo {
  /** 信息标识 */
  Id?: number | null;
  /** 令牌 */
  BIToken?: string | null;
  /** 项目Id */
  ProjectId?: string | null;
  /** 创建人 */
  CreatedUser?: string | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 更新人 */
  UpdatedUser?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** 页面Id */
  PageId?: string | null;
  /** 备用 */
  ExtraParam?: string | null;
  /** 嵌出类型 */
  Scope?: string | null;
  /** 过期时间，分钟为单位，最大240 */
  ExpireTime?: number | null;
  /** 使用者企业Id(仅用于多用户) */
  UserCorpId?: string | null;
  /** 使用者Id(仅用于多用户) */
  UserId?: string | null;
  /** 访问次数限制，限制范围1-99999，为空则不设置访问次数限制 */
  TicketNum?: number | null;
  /** 全局参数 */
  GlobalParam?: string | null;
  /** embed表示页面看板嵌出，chatBIEmbed表示ChatBI嵌出 */
  Intention?: string | null;
  /** 100 无绑定用户200 单用户单token300 单用户 多token */
  TokenType?: number | null;
  /** token 数 */
  TokenNum?: number | null;
  /** 是否单用户多token */
  SingleUserMultiToken?: boolean | null;
}

/** 自定义错误信息对象 */
declare interface ErrorInfo {
  /** 错误说明字段 */
  ErrorTip?: string | null;
  /** 原始异常信息 */
  ErrorMessage?: string | null;
  /** 错误等级字段ERRORWARNINFO */
  ErrorLevel?: string | null;
  /** 指引文档链接 */
  DocLink?: string | null;
  /** 快速指引说明 */
  FAQ?: string | null;
  /** 预留字段1 */
  ReservedField?: string | null;
}

/** 仅包含id的对象 */
declare interface IdDTO {
  /** 请求id */
  Id: number | null;
  /** key */
  AccessKey?: string | null;
  /** id */
  ProjectId?: number | null;
  /** 事务id */
  TranId?: string | null;
  /** 事务状态 */
  TranStatus?: number | null;
}

/** 页面截图列表 */
declare interface PageScreenListVO {
  /** 图片导出类型。base64；url */
  PicType?: string | null;
  /** 图片列表 */
  List?: PageScreenVO[] | null;
  /** 异步事务id */
  TranId?: string | null;
  /** 事务状态1: 处理中; 2: 处理成功; 3 处理失败(错误内容见外层Msg) */
  TranStatus?: number | null;
}

/** 页面截图信息 */
declare interface PageScreenVO {
  /** 截图base64或 url */
  Content?: string | null;
  /** 组件Id */
  WidgetId?: string | null;
}

/** 商业版本权限单元 */
declare interface PermissionComponent {
  /** 权限值 */
  ModuleId?: string | null;
  /** 可见/可用 */
  IncludeType?: string | null;
  /** 目标升级版本 */
  UpgradeVersionType?: string | null;
  /** 补充信息 */
  Tips?: string | null;
  /** 补充信息的key值 */
  TipsKey?: string | null;
}

/** 商业化版本权限分组 */
declare interface PermissionGroup {
  /** 分组名 */
  ModuleGroup?: string | null;
  /** 权限列表 */
  Components?: PermissionComponent[] | null;
}

/** 项目信息描述 */
declare interface Project {
  /** 项目ID */
  Id: number;
  /** 项目Logo */
  Logo: string | null;
  /** 项目名称 */
  Name: string | null;
  /** logo底色 */
  ColorCode: string | null;
  /** 创建人 */
  CreatedUser: string | null;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 成员个数 */
  MemberCount: number | null;
  /** 页面个数 */
  PageCount: number | null;
  /** 最后修改报表、简报名称 */
  LastModifyName: string | null;
  /** "" */
  Source: string | null;
  /** "" */
  Apply: boolean | null;
  /** "" */
  UpdatedUser: string | null;
  /** "" */
  UpdatedAt: string | null;
  /** "" */
  CorpId: string | null;
  /** "" */
  Mark: string | null;
  /** "" */
  Seed: string | null;
  /** 项目内权限列表 */
  AuthList: string[] | null;
  /** 默认看板 */
  PanelScope?: string | null;
  /** 是否被托管 */
  IsExternalManage?: boolean | null;
  /** 托管平台名称 */
  ManagePlatform?: string | null;
  /** 定制化参数 */
  ConfigList?: ProjectConfigList[] | null;
}

/** 定制化查询 */
declare interface ProjectConfigList {
  /** 模块组 */
  ModuleGroup?: string | null;
  /** 内容 */
  Components?: ProjectConfigResult[] | null;
}

/** 定制化查询 */
declare interface ProjectConfigResult {
  /** 配置名称 */
  ModuleId?: string | null;
  /** 配置方式 */
  IncludeType?: string | null;
  /** 额外参数 */
  Params?: string | null;
}

/** 项目列表数据 */
declare interface ProjectListData {
  /** 数组 */
  List: Project[] | null;
  /** 总数 */
  Total: number | null;
  /** 1 */
  TotalPages: number | null;
}

/** 用户ID和用户名 */
declare interface UserIdAndUserName {
  /** 用户ID */
  UserId?: string;
  /** 用户名 */
  UserName?: string;
  /** 企业ID */
  CorpId?: string | null;
  /** 电子邮箱 */
  Email?: string | null;
  /** 最后一次登录时间 */
  LastLogin?: string | null;
  /** 停启用状态 */
  Status?: number | null;
  /** 首次登陆是否修改密码 */
  FirstModify?: number | null;
  /** 手机号码 */
  PhoneNumber?: string | null;
  /** 手机区号 */
  AreaCode?: string | null;
  /** 创建人 */
  CreatedUser?: string | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 更改人 */
  UpdatedUser?: string | null;
  /** 更改时间 */
  UpdatedAt?: string | null;
  /** 全局角色 */
  GlobalUserName?: string | null;
  /** 手机号 */
  Mobile?: string | null;
  /** 1 */
  AppId?: string | null;
  /** 1 */
  AppUserId?: string | null;
  /** 1 */
  AppUserAliasName?: string | null;
  /** 1 */
  AppUserName?: string | null;
  /** 1 */
  InValidateAppRange?: boolean | null;
}

/** 用户ID和用户名 */
declare interface UserInfo {
  /** 用户ID */
  UserId?: string;
  /** 用户名 */
  UserName?: string;
  /** 邮箱 */
  Email?: string | null;
  /** 手机号 */
  PhoneNumber?: string | null;
  /** 手机号区号 */
  AreaCode?: string | null;
  /** 企微账号id */
  AppUserId?: string | null;
  /** 企微账号名称 */
  AppUserName?: string | null;
}

/** 用户角色信息 */
declare interface UserRoleListData {
  /** 总数 */
  Total: number | null;
  /** 总页数 */
  TotalPages: number | null;
  /** 列表 */
  List: UserRoleListDataUserRoleInfo[] | null;
}

/** 用户角色列表角色信息 */
declare interface UserRoleListDataRoleInfo {
  /** 角色名字 */
  RoleName?: string | null;
  /** 角色ID */
  RoleId?: number | null;
  /** 项目ID */
  ProjectId?: number | null;
  /** 项目名字 */
  ProjectName?: string | null;
  /** 是否为全局角色（0 不是 1 是） */
  ScopeType?: number | null;
  /** 角色key */
  ModuleCollection?: string | null;
}

/** 用户角色信息 */
declare interface UserRoleListDataUserRoleInfo {
  /** 业务ID */
  Id?: number;
  /** 角色列表 */
  RoleList?: UserRoleListDataRoleInfo[] | null;
  /** 角色ID列表 */
  RoleIdList?: number[] | null;
  /** 用户ID */
  UserId?: string;
  /** 用户名 */
  UserName?: string;
  /** 企业ID */
  CorpId?: string;
  /** 邮箱 */
  Email?: string | null;
  /** 创建人 */
  CreatedUser?: string | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 更新人 */
  UpdatedUser?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** 最后一次登录时间 */
  LastLogin?: string | null;
  /** 账号状态 */
  Status?: number | null;
  /** 手机号码 */
  PhoneNumber?: string | null;
  /** 手机号区号 */
  AreaCode?: string | null;
  /** 是否为主账号 */
  RootAccount?: boolean | null;
  /** 是否为企业管理员 */
  CorpAdmin?: boolean | null;
  /** 企微用户id */
  AppUserId?: string | null;
  /** 昵称 */
  AppUserAliasName?: string | null;
  /** 应用用户名 */
  AppUserName?: string | null;
  /** 是否在可见范围内 */
  InValidateAppRange?: boolean | null;
  /** 用户openid */
  AppOpenUserId?: string | null;
}

/** 页面组件信息 */
declare interface WidgetListVO {
  /** uin */
  CorpId?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 页面id */
  PageId?: string | null;
  /** 组件数组 */
  WidgetList?: WidgetVO[] | null;
}

/** 组件信息 */
declare interface WidgetVO {
  /** 组件Id */
  WidgetId?: string | null;
  /** 组件name */
  WidgetName?: string | null;
}

declare interface ApplyEmbedIntervalRequest {
  /** 分享项目id，必选 */
  ProjectId?: number;
  /** 分享页面id，嵌出看板时此为空值0，ChatBI嵌出时不传 */
  PageId?: number;
  /** 需要申请延期的Token */
  BIToken?: string;
  /** 备用字段 */
  ExtraParam?: string;
  /** embed：页面/看板嵌出chatBIEmbed：ChatBI嵌出 */
  Intention?: string;
  /** panel, 看板；page，页面project，ChatBI嵌出时 */
  Scope?: string;
}

declare interface ApplyEmbedIntervalResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 额外参数 */
  Extra?: string | null;
  /** 结果数据 */
  Data?: ApplyEmbedTokenInfo | null;
  /** 结果描述 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDatasourceCloudRequest {
  /** 后端提供字典：域类型，1、腾讯云，2、本地 */
  ServiceType: string;
  /** 驱动 */
  DbType: string;
  /** 数据库编码 */
  Charset: string;
  /** 用户名 */
  DbUser: string;
  /** 密码 */
  DbPwd: string;
  /** 数据库名称 */
  DbName: string;
  /** 数据库别名 */
  SourceName: string;
  /** 项目ID */
  ProjectId: string;
  /** 公有云内网ip */
  Vip?: string;
  /** 公有云内网端口 */
  Vport?: string;
  /** vpc标识 */
  VpcId?: string;
  /** 统一vpc标识 */
  UniqVpcId?: string;
  /** 区域标识（gz,bj) */
  RegionId?: string;
  /** 扩展参数 */
  ExtraParam?: string;
  /** 实例Id */
  InstanceId?: string;
  /** 数据源产品名 */
  ProdDbName?: string;
  /** 第三方数据源标识 */
  DataOrigin?: string;
  /** 第三方项目id */
  DataOriginProjectId?: string;
  /** 第三方数据源id */
  DataOriginDatasourceId?: string;
  /** 集群id */
  ClusterId?: string;
}

declare interface CreateDatasourceCloudResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 成功无 */
  Data?: IdDTO | null;
  /** 额外信息 */
  Extra?: string | null;
  /** 提示 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDatasourceRequest {
  /** HOST */
  DbHost: string;
  /** 端口 */
  DbPort: number;
  /** 后端提供字典：域类型，1、腾讯云，2、本地 */
  ServiceType: string;
  /** 驱动 */
  DbType: string;
  /** 数据库编码 */
  Charset: string;
  /** 用户名 */
  DbUser: string;
  /** 密码 */
  DbPwd: string;
  /** 数据库名称 */
  DbName: string;
  /** 数据库别名 */
  SourceName: string;
  /** 项目id */
  ProjectId: number;
  /** catalog值 */
  Catalog?: string;
  /** 第三方数据源标识 */
  DataOrigin?: string;
  /** 第三方项目id */
  DataOriginProjectId?: string;
  /** 第三方数据源id */
  DataOriginDatasourceId?: string;
  /** 扩展参数 */
  ExtraParam?: string;
  /** 腾讯云私有网络统一标识 */
  UniqVpcId?: string;
  /** 私有网络ip */
  Vip?: string;
  /** 私有网络端口 */
  Vport?: string;
  /** 腾讯云私有网络标识 */
  VpcId?: string;
  /** 操作权限限制 */
  OperationAuthLimit?: string[];
}

declare interface CreateDatasourceResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 数据源id */
  Data?: IdDTO | null;
  /** 额外信息 */
  Extra?: string | null;
  /** 提示 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmbedTokenRequest {
  /** 分享项目id */
  ProjectId?: number;
  /** 分享页面id，嵌出看板时此为空值0，ChatBI嵌出时不传 */
  PageId?: number;
  /** embed表示页面看板嵌出，chatBIEmbed表示ChatBI嵌出 */
  Intention?: string;
  /** page表示嵌出页面，panel表示嵌出整个看板，ChatBI嵌出时使用project */
  Scope?: string;
  /** 过期时间。 单位：分钟 最大值：240。即，4小时 默认值：240 */
  ExpireTime?: string;
  /** 备用字段 */
  ExtraParam?: string;
  /** 使用者企业Id(仅用于多用户) */
  UserCorpId?: string;
  /** 使用者Id(仅用于多用户) */
  UserId?: string;
  /** 访问次数限制，限制范围1-99999，为空则不设置访问次数限制 */
  TicketNum?: number;
  /** 全局筛选参数 报表过滤条件的全局参数。 格式为JSON格式的字符串**目前仅支持字符类型页面参数绑定到全局参数**[ { "ParamKey": "name", //页面参数名称 "JoinType": "AND", // 连接方式,目前仅支持AND "WhereList": [ { "Operator": "-neq", // 操作符，参考以下说明 "Value": [ //操作值，单值数组只传一个值 "zZWJMD", "ZzVGHX", "湖南省", "河北省" ] } ] }, { "ParamKey": "genderParam", "JoinType": "AND", "WhereList": [ { "Operator": "-neq", "Value": [ "男" ] } ] }]Operator 目前支持-neq 不等于!=操作符-eq 等于=操作符-is in操作符 */
  GlobalParam?: string;
  /** 100 不绑定用户 200 单用户单token 300 单用户多token */
  TokenType?: number;
  /** 一次创建的token数 */
  TokenNum?: number;
}

declare interface CreateEmbedTokenResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 额外信息 */
  Extra?: string | null;
  /** 数据 */
  Data?: EmbedTokenInfo | null;
  /** 结果描述 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** 项目名称 */
  Name: string;
  /** logo底色 */
  ColorCode: string;
  /** 项目Logo */
  Logo?: string;
  /** 备注 */
  Mark?: string;
  /** 是否允许用户申请 */
  IsApply?: boolean;
  /** 默认看板 */
  DefaultPanelType?: number;
  /** 管理平台 */
  ManagePlatform?: string;
}

declare interface CreateProjectResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 额外数据 */
  Extra?: string;
  /** 数据 */
  Data?: Data;
  /** 返回信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserRoleProjectRequest {
  /** 项目ID */
  ProjectId?: number;
  /** 角色ID列表 */
  RoleIdList?: number[];
  /** 用户列表（废弃） */
  UserList?: UserIdAndUserName[];
  /** 用户列表（新） */
  UserInfoList?: UserInfo[];
}

declare interface CreateUserRoleProjectResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 数据 */
  Data?: DataId | null;
  /** 消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserRoleRequest {
  /** 角色ID列表 */
  RoleIdList?: number[];
  /** 用户列表（废弃） */
  UserList?: UserIdAndUserName[];
  /** 用户列表（新） */
  UserInfoList?: UserInfo[];
}

declare interface CreateUserRoleResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 数据 */
  Data?: DataId | null;
  /** 消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDatasourceRequest {
  /** 数据源id */
  Id: number;
  /** 项目id */
  ProjectId: number;
}

declare interface DeleteDatasourceResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 数据 */
  Data?: string | null;
  /** 扩展 */
  Extra?: string;
  /** 信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** 项目ID */
  Id: number;
  /** 随机数 */
  Seed?: string;
  /** 默认看板 */
  DefaultPanelType?: number;
}

declare interface DeleteProjectResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** ”“ */
  Extra?: string;
  /** "" */
  Data?: string | null;
  /** "" */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserRoleProjectRequest {
  /** 项目ID */
  ProjectId: number;
  /** 用户ID */
  UserId: string;
}

declare interface DeleteUserRoleProjectResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 数据 */
  Data?: string | null;
  /** 消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserRoleRequest {
  /** 用户ID */
  UserId: string;
}

declare interface DeleteUserRoleResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 数据 */
  Data?: string | null;
  /** 消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatasourceListRequest {
  /** 无 */
  ProjectId: number;
  /** 返回所有页面，默认false */
  AllPage?: boolean;
  /** 数据库名称检索 */
  DbName?: string;
  /** 无 */
  PageNo?: number;
  /** 无 */
  PageSize?: number;
  /** 搜索关键词 */
  Keyword?: string;
  /** 过滤无权限列表的参数（0 全量，1 使用权限，2 编辑权限） */
  PermissionType?: number;
}

declare interface DescribeDatasourceListResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 列表详情 */
  Data?: DatasourceInfoData | null;
  /** 信息 */
  Extra?: string;
  /** 信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePageWidgetListRequest {
  /** 项目id */
  ProjectId: string;
  /** 页面id */
  PageId: string;
}

declare interface DescribePageWidgetListResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展参数 */
  Extra?: string | null;
  /** 返回数据结果 */
  Data?: WidgetListVO | null;
  /** 返回消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectInfoRequest {
  /** 项目Id */
  Id: number;
  /** 默认看板 */
  DefaultPanelType?: number;
}

declare interface DescribeProjectInfoResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** "" */
  Extra?: string | null;
  /** "" */
  Msg?: string | null;
  /** 项目详情 */
  Data?: Project | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectListRequest {
  /** 页容，初版默认20，将来可能根据屏幕宽度动态变化 */
  PageSize?: number;
  /** 页标 */
  PageNo?: number;
  /** 检索模糊字段 */
  Keyword?: string;
  /** 是否全部展示，如果是ture，则忽略分页 */
  AllPage?: boolean;
  /** 角色信息 */
  ModuleCollection?: string;
}

declare interface DescribeProjectListResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 额外信息 */
  Extra?: string | null;
  /** 接口信息 */
  Msg?: string | null;
  /** 数据 */
  Data?: ProjectListData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserProjectListRequest {
  /** 项目ID */
  ProjectId?: number;
  /** 无 */
  AllPage?: boolean;
  /** 无 */
  PageNo?: number;
  /** 无 */
  PageSize?: number;
}

declare interface DescribeUserProjectListResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 数据 */
  Data?: CorpUserListData | null;
  /** 扩展 */
  Extra?: string | null;
  /** 消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserRoleListRequest {
  /** 页码 */
  PageNo: number;
  /** 页数 */
  PageSize: number;
  /** 全部页码 */
  AllPage?: boolean;
  /** 0 企业用户 1 访客 不填表示所有用户 */
  UserType?: string;
  /** 模糊搜索的关键字 */
  Keyword?: string;
  /** 项目id */
  ProjectId?: string;
  /** 是否只获取绑定企微应用的 */
  IsOnlyBindAppUser?: boolean;
}

declare interface DescribeUserRoleListResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 数据 */
  Data?: UserRoleListData | null;
  /** 消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserRoleProjectListRequest {
  /** 页码 */
  PageNo: number;
  /** 页数 */
  PageSize: number;
  /** 项目ID */
  ProjectId: number;
  /** 是否只获取绑定企微应用的 */
  IsOnlyBindAppUser?: boolean;
}

declare interface DescribeUserRoleProjectListResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 数据 */
  Data?: UserRoleListData | null;
  /** 消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportScreenPageRequest {
  /** 项目id */
  ProjectId: string;
  /** 页面id */
  PageId: string;
  /** 画布类型。栅格画布：GRID；自由画布：FREE */
  CanvasType?: string;
  /** 图片导出类型。base64；url（有效期：1天） */
  PicType?: string;
  /** 组件Ids。为空时，导出整个页面 */
  WidgetIds?: string[];
  /** 是否是异步请求 */
  AsyncRequest?: boolean;
  /** 事务id */
  TranId?: string;
}

declare interface ExportScreenPageResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展参数 */
  Extra?: string | null;
  /** 返回数据结果 */
  Data?: PageScreenListVO | null;
  /** 返回消息 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatasourceCloudRequest {
  /** 后端提供字典：域类型，1、腾讯云，2、本地 */
  ServiceType: string;
  /** 驱动 */
  DbType: string;
  /** 数据库编码 */
  Charset: string;
  /** 用户名 */
  DbUser: string;
  /** 密码 */
  DbPwd: string;
  /** 数据库名称 */
  DbName: string;
  /** 数据库别名 */
  SourceName: string;
  /** 项目ID */
  ProjectId: string;
  /** 住键 */
  Id: number;
  /** 公有云内网ip */
  Vip?: string;
  /** 公有云内网端口 */
  Vport?: string;
  /** vpc标识 */
  VpcId?: string;
  /** 统一vpc标识 */
  UniqVpcId?: string;
  /** 区域标识（gz,bj) */
  RegionId?: string;
  /** 扩展参数 */
  ExtraParam?: string;
  /** 实例id */
  InstanceId?: string;
  /** 数据源产品名 */
  ProdDbName?: string;
  /** 第三方数据源标识 */
  DataOrigin?: string;
  /** 第三方项目id */
  DataOriginProjectId?: string;
  /** 第三方数据源id */
  DataOriginDatasourceId?: string;
  /** 集群id */
  ClusterId?: string;
}

declare interface ModifyDatasourceCloudResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 成功无 */
  Data?: string | null;
  /** 额外信息 */
  Extra?: string | null;
  /** 提示 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatasourceRequest {
  /** HOST */
  DbHost: string;
  /** 端口 */
  DbPort: number;
  /** 后端提供字典：域类型，1、腾讯云，2、本地 */
  ServiceType: string;
  /** 驱动 */
  DbType: string;
  /** 数据库编码 */
  Charset: string;
  /** 用户名 */
  DbUser: string;
  /** 密码 */
  DbPwd: string;
  /** 数据库名称 */
  DbName: string;
  /** 数据库别名 */
  SourceName: string;
  /** 数据源id */
  Id: number;
  /** 项目ID */
  ProjectId: number;
  /** catalog值 */
  Catalog?: string;
  /** 第三方数据源标识 */
  DataOrigin?: string;
  /** 第三方项目id */
  DataOriginProjectId?: string;
  /** 第三方数据源id */
  DataOriginDatasourceId?: string;
  /** 扩展参数 */
  ExtraParam?: string;
  /** 腾讯云私有网络统一标识 */
  UniqVpcId?: string;
  /** 私有网络ip */
  Vip?: string;
  /** 私有网络端口 */
  Vport?: string;
  /** 腾讯云私有网络标识 */
  VpcId?: string;
}

declare interface ModifyDatasourceResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 无 */
  Data?: string | null;
  /** 额外信息 */
  Extra?: string | null;
  /** 提示 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProjectRequest {
  /** 项目Id */
  Id: number;
  /** 名字 */
  Name?: string;
  /** 颜色值 */
  ColorCode?: string;
  /** 图标 */
  Logo?: string;
  /** 备注 */
  Mark?: string;
  /** 可申请 */
  IsApply?: boolean;
  /** 种子 */
  Seed?: string;
  /** 默认看板 */
  DefaultPanelType?: number;
  /** 2 */
  PanelScope?: string;
  /** 项目管理平台 */
  ManagePlatform?: string;
}

declare interface ModifyProjectResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 额外信息 */
  Extra?: string | null;
  /** 返回数据 */
  Data?: string | null;
  /** 结果 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserRoleProjectRequest {
  /** 项目ID */
  ProjectId?: number;
  /** 用户ID */
  UserId?: string;
  /** 角色ID 列表 */
  RoleIdList?: number[];
  /** 邮箱 */
  Email?: string;
  /** 用户名 */
  UserName?: string;
  /** 企业微信应用用户id */
  AppUserId?: string;
}

declare interface ModifyUserRoleProjectResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 消息 */
  Msg?: string | null;
  /** 数据 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserRoleRequest {
  /** 用户ID */
  UserId?: string;
  /** 角色ID 列表 */
  RoleIdList?: number[];
  /** 邮箱 */
  Email?: string;
  /** 用户名 */
  UserName?: string;
  /** 手机号 */
  PhoneNumber?: string;
  /** 手机区号 */
  AreaCode?: string;
  /** 企业微信应用用户id */
  AppUserId?: string;
  /** 是否开启手机验证码登录（0 关闭，1 开启） */
  LoginSecurityStatus?: number;
}

declare interface ModifyUserRoleResponse {
  /** 自定义错误信息对象 */
  ErrorInfo?: ErrorInfo | null;
  /** 扩展 */
  Extra?: string | null;
  /** 消息 */
  Msg?: string | null;
  /** 数据 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bi 商业智能分析 BI} */
declare interface Bi {
  (): Versions;
  /** 申请延长Token可用时间接口 {@link ApplyEmbedIntervalRequest} {@link ApplyEmbedIntervalResponse} */
  ApplyEmbedInterval(data?: ApplyEmbedIntervalRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyEmbedIntervalResponse>;
  /** 创建数据源 {@link CreateDatasourceRequest} {@link CreateDatasourceResponse} */
  CreateDatasource(data: CreateDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatasourceResponse>;
  /** 创建云数据库 {@link CreateDatasourceCloudRequest} {@link CreateDatasourceCloudResponse} */
  CreateDatasourceCloud(data: CreateDatasourceCloudRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatasourceCloudResponse>;
  /** 创建嵌出报表Token {@link CreateEmbedTokenRequest} {@link CreateEmbedTokenResponse} */
  CreateEmbedToken(data?: CreateEmbedTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmbedTokenResponse>;
  /** 创建项目 {@link CreateProjectRequest} {@link CreateProjectResponse} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 创建用户角色 {@link CreateUserRoleRequest} {@link CreateUserRoleResponse} */
  CreateUserRole(data?: CreateUserRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserRoleResponse>;
  /** 项目内-创建用户角色 {@link CreateUserRoleProjectRequest} {@link CreateUserRoleProjectResponse} */
  CreateUserRoleProject(data?: CreateUserRoleProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserRoleProjectResponse>;
  /** 删除数据源 {@link DeleteDatasourceRequest} {@link DeleteDatasourceResponse} */
  DeleteDatasource(data: DeleteDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDatasourceResponse>;
  /** 删除项目 {@link DeleteProjectRequest} {@link DeleteProjectResponse} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** 删除用户角色 {@link DeleteUserRoleRequest} {@link DeleteUserRoleResponse} */
  DeleteUserRole(data: DeleteUserRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserRoleResponse>;
  /** 项目内-删除用户角色 {@link DeleteUserRoleProjectRequest} {@link DeleteUserRoleProjectResponse} */
  DeleteUserRoleProject(data: DeleteUserRoleProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserRoleProjectResponse>;
  /** 查询数据源列表 {@link DescribeDatasourceListRequest} {@link DescribeDatasourceListResponse} */
  DescribeDatasourceList(data: DescribeDatasourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasourceListResponse>;
  /** 查询页面组件信息 {@link DescribePageWidgetListRequest} {@link DescribePageWidgetListResponse} */
  DescribePageWidgetList(data: DescribePageWidgetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePageWidgetListResponse>;
  /** 项目详情 {@link DescribeProjectInfoRequest} {@link DescribeProjectInfoResponse} */
  DescribeProjectInfo(data: DescribeProjectInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectInfoResponse>;
  /** 项目列表数据接口 {@link DescribeProjectListRequest} {@link DescribeProjectListResponse} */
  DescribeProjectList(data?: DescribeProjectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectListResponse>;
  /** 项目内-用户接口 {@link DescribeUserProjectListRequest} {@link DescribeUserProjectListResponse} */
  DescribeUserProjectList(data?: DescribeUserProjectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserProjectListResponse>;
  /** 用户角色列表 {@link DescribeUserRoleListRequest} {@link DescribeUserRoleListResponse} */
  DescribeUserRoleList(data: DescribeUserRoleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserRoleListResponse>;
  /** 项目内-用户角色列表 {@link DescribeUserRoleProjectListRequest} {@link DescribeUserRoleProjectListResponse} */
  DescribeUserRoleProjectList(data: DescribeUserRoleProjectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserRoleProjectListResponse>;
  /** 分享页截图导出 {@link ExportScreenPageRequest} {@link ExportScreenPageResponse} */
  ExportScreenPage(data: ExportScreenPageRequest, config?: AxiosRequestConfig): AxiosPromise<ExportScreenPageResponse>;
  /** 更新数据源 {@link ModifyDatasourceRequest} {@link ModifyDatasourceResponse} */
  ModifyDatasource(data: ModifyDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatasourceResponse>;
  /** 更新云数据库 {@link ModifyDatasourceCloudRequest} {@link ModifyDatasourceCloudResponse} */
  ModifyDatasourceCloud(data: ModifyDatasourceCloudRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatasourceCloudResponse>;
  /** 修改项目 {@link ModifyProjectRequest} {@link ModifyProjectResponse} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** 修改用户角色信息 {@link ModifyUserRoleRequest} {@link ModifyUserRoleResponse} */
  ModifyUserRole(data?: ModifyUserRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserRoleResponse>;
  /** 项目-修改用户角色信息 {@link ModifyUserRoleProjectRequest} {@link ModifyUserRoleProjectResponse} */
  ModifyUserRoleProject(data?: ModifyUserRoleProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserRoleProjectResponse>;
}

export declare type Versions = ["2022-01-05"];

export default Bi;
