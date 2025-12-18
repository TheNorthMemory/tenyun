/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 安装应用，任务详情 */
declare interface AppJobInfo {
  /** 状态 */
  Status: number | null;
  /** 当前步骤 */
  Step: number | null;
  /** 任务id */
  Id: number | null;
  /** 任务总共步骤数 */
  TotalStep: number | null;
  /** 当前步骤详情 */
  StepDesc: string;
  /** 错误信息 */
  ErrMsg: string;
}

/** 数据源详情列表 */
declare interface DataSourceDetail {
  /** 数据源 ID */
  Id?: string;
  /** 数据源名称 */
  Title?: string;
  /** 数据源标识 */
  Name?: string;
  /** 数据源类型 */
  Type?: string;
  /** 数据源描述 */
  Description?: string | null;
  /** 数据源配置 */
  Schema?: string;
  /** cms 项目状态, 0: 重新获取详情信息，1： 不需要重新获取详情信息 */
  CmsProject?: string;
  /** 当前为环境 id */
  PkgId?: string;
  /** schema 版本信息 */
  SchemaVersion?: string | null;
  /** 创建者用户 ID */
  CreatorId?: string;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** 环境 id */
  EnvId?: string;
  /** 版本 */
  DataSourceVersion?: string | null;
  /** 所属应用数组 */
  AppUsageList?: DataSourceLinkApp[] | null;
  /** 发布时间 */
  PublishedAt?: string;
  /** 子数据源ids */
  ChildDataSourceIds?: string[] | null;
  /** 数据源发布信息 */
  Fun?: string | null;
  /** 云函数状态 1 Active 2 Creating 3 Updating 4 Deleting 9 Deleted 11 CreatFailed 12 UpdateFailed 13 DeleteFailed 21 UpdateTimeOut */
  ScfStatus?: number;
  /** 自定义方法 */
  Methods?: string;
  /** 子数据源名数组 */
  ChildDataSourceNames?: string[] | null;
  /** 是否旧数据源 1 新 0 旧 */
  IsNewDataSource?: number;
  /** 数据源视图id */
  ViewId?: string | null;
  /** 数据源属性配置 */
  Configuration?: string | null;
  /** 外部数据源模板code */
  TemplateCode?: string | null;
  /** 外部数据源模板来源 0 空模板 1 腾讯文档 2 腾讯会议 3 企业微信 4 微信电商 */
  Source?: number | null;
  /** 发布版本 */
  PublishVersion?: string | null;
  /** 发布视图id */
  PublishViewId?: string | null;
  /** 数据源子类型 "database" 标准模型 "custom-database" 自定义模型 "system" 系统模型 "connector" 连接器 "custom-connector" 自定义连接器 "hidden" 隐藏数据源 */
  SubType?: string;
  /** 授权状态 0 授权无效 1 授权有效 */
  AuthStatus?: number | null;
  /** 数据源授权信息 */
  AuthInfo?: TicketAuthInfo | null;
  /** 1发布0未发布 */
  PublishStatus?: number;
  /** 更新版本 */
  UpdateVersion?: number;
  /** 模型关联关系字段列表 */
  RelationFieldList?: RelationField[] | null;
  /** db实例类型 */
  DbInstanceType?: string | null;
  /** 体验环境db表名 */
  PreviewTableName?: string | null;
  /** 正式环境db表名 */
  PublishedTableName?: string | null;
  /** DB来源类型 */
  DbSourceType?: string | null;
  /** 模型预览状态开关 */
  StagingSwitch?: boolean;
}

/** 数据详情列表 */
declare interface DataSourceDetailItems {
  /** 数据详情列表 */
  Rows?: DataSourceDetail[];
  /** 数据源列表总个数 */
  Count?: number;
}

/** 数据源关联App信息 */
declare interface DataSourceLinkApp {
  /** 应用Id */
  Id?: string;
  /** 应用名称 */
  Title?: string;
  /** 是否编辑状态使用 */
  EditStatusUse?: number;
  /** 是否预览状态使用 */
  PreviewStatusUse?: number;
  /** 是否正式状态使用 */
  OnlineStatusUse?: number;
  /** 数据源ID */
  DataSourceId?: string;
}

/** 数据源模糊查询参数 */
declare interface DataSourceQueryOption {
  /** 数据源标识模糊匹配 */
  LikeName?: string;
  /** 数据源名称模糊匹配 */
  LikeTitle?: string;
}

/** 删除文档出参 */
declare interface DeleteKnowledgeDocumentSetRsp {
  /** 删除文档数量。 */
  AffectedCount?: number;
}

/** 上传知识库文档返回结果 */
declare interface DescribeKnowledgeDocumentSetDetailRsp {
  /** 获取的数量。 */
  Count?: number;
  /** 文档信息 */
  DocumentSet?: KnowledgeDocumentSet;
}

/** 删除文档出参 */
declare interface DescribeKnowledgeDocumentSetListRsp {
  /** 文件集 */
  DocumentSets?: QureyKnowledgeDocumentSet[];
  /** 条数 */
  Count?: number;
}

/** 删除文档时查询入参 */
declare interface DocumentQuery {
  /** 文件ids */
  DocumentSetId?: string[];
  /** 文件名集合 */
  DocumentSetName?: string[];
  /** 使用创建 CollectionView 指定的 Filter 索引的字段设置查询过滤表达式 */
  Filter?: string;
}

/** 文档信息 */
declare interface KnowledgeDocumentSet {
  /** 文档id */
  DocumentSetId?: string;
  /** 文档名 */
  DocumentSetName?: string;
  /** 文件完整内容。 */
  Text?: string;
  /** 文件内容前 200个字符。 */
  TextPrefix?: string;
  /** 文件详情 */
  DocumentSetInfo?: KnowledgeDocumentSetInfo;
  /** 文件拆分信息 */
  SplitterPreprocess?: KnowledgeSplitterPreprocess;
  /** 未使用 */
  Name?: string;
  /** 文档标题 */
  FileTitle?: string;
  /** 文档元信息，必须为jsonstring */
  FileMetaData?: string;
  /** 作者 */
  Author?: string;
  /** 上传文件状态 */
  DocStatus?: string;
  /** 文件上传失败的具体原因 */
  ErrMsg?: string;
  /** Cos存储文件ID */
  FileId?: string;
}

/** 文档信息 */
declare interface KnowledgeDocumentSetInfo {
  /** 文件的字符数。 */
  TextLength?: number;
  /** 文件的字节数。 */
  ByteLength?: number;
  /** 文件被预处理、Embedding 向量化的进度。 */
  IndexedProgress?: number;
  /** 文件预处理、Embedding 向量化的状态。New：等待解析。Loading：文件解析中。Failure：文件解析、写入出错。Ready：文件解析、写入完成。 */
  IndexedStatus?: string;
  /** 文件创建时间。 */
  CreateTime?: string;
  /** 文件最后更新时间。 */
  LastUpdateTime?: string;
  /** 文件关键字。 */
  Keywords?: string;
}

/** 知识库信息 */
declare interface KnowledgeSet {
  /** 知识库标识 */
  Name?: string;
  /** 知识库名称 */
  Title?: string;
  /** 描述 */
  Desc?: string;
  /** 状态，NOT_ENABLED未启用ENABLED 已启用 */
  Active?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 知识库的meta信息 */
  Meta?: string;
  /** 知识库容量,单位字节 */
  TotalSize?: string;
}

/** 查询知识库列表返回 */
declare interface KnowledgeSetRsp {
  /** 总数 */
  Total?: number;
  /** 知识库列表 */
  KnowledgeSets?: KnowledgeSet[];
}

/** 文件拆分信息 */
declare interface KnowledgeSplitterPreprocess {
  /** 在对文件拆分时，配置是否将 Title 追加到切分后的段落后面一并 Embedding。取值如下所示：false：不追加。true：将段落 Title 追加到切分后的段落。 */
  AppendTitleToChunk?: boolean;
  /** 在对文件拆分时，配置是否将关键字 keywords 追加到切分后的段落一并 Embedding。取值如下所示：false：不追加。true：将全文的 keywords 追加到切分后的段落。 */
  AppendKeywordsToChunk?: boolean;
}

/** 组织架构返回参数 */
declare interface OrgResp {
  /** 部门id */
  OrgId: string;
  /** 部门名称 */
  OrgName: string;
  /** 部门标识 */
  OrgIdentity: string;
  /** 部门层级 */
  Level: string;
  /** 主键字段 */
  PrimaryColumn: string;
}

/** 查询条件 */
declare interface PageQuery {
  /** 文件id数组，表示要查询的文件的所有 ID，支持批量查询，数组元素范围[1,20]。 */
  DocumentSetId?: string[];
  /** 表示要查询的文档名称，支持批量查询，数组元素范围[1,20]。 */
  DocumentSetName?: string[];
  /** 取值范围：[1,16384] */
  Limit?: number;
  /** 设置分页偏移量，用于控制分页查询返回结果的起始位置，方便用户对数据进行分页展示和浏览。取值：为 limit 整数倍。计算公式：offset=limit*(page-1)。例如：当 limit = 10，page = 2 时，分页偏移量 offset = 10 * (2 - 1) = 10，表示从查询结果的第 11 条记录开始返回数据。 */
  Offset?: number;
  /** 设置后，其他字段为空值 */
  OutputFields?: string[];
  /** 使用创建 CollectionView 指定的 Filter 索引的字段设置查询过滤表达式。 */
  Filter?: string;
}

/** 搜索数据的集合 */
declare interface QureyKnowledgeDocumentSet {
  /** 文件id */
  DocumentSetId?: string;
  /** 文件名 */
  DocumentSetName?: string;
  /** 文件内容前 200个字符。 */
  TextPrefix?: string;
  /** 文件拆分信息 */
  SplitterPreprocess?: KnowledgeSplitterPreprocess;
  /** 文件详情 */
  DocumentSetInfo?: QureyKnowledgeDocumentSetInfo;
  /** 文件标题 */
  FileTitle?: string;
  /** 文件元信息，必须为jsonstring */
  FileMetaData?: string;
  /** name */
  Name?: string;
  /** 作者 */
  Author?: string;
  /** 文档上传状态 */
  DocStatus?: string;
  /** 上传文件失败时具体的错误消息 */
  ErrMsg?: string;
  /** Cos存储文件ID */
  FileId?: string;
}

/** 查询文件集合信息详情 */
declare interface QureyKnowledgeDocumentSetInfo {
  /** 文件的字符数。 */
  TextLength?: number;
  /** 文件的字节数。 */
  ByteLength?: number;
  /** 文件被预处理、Embedding 向量化的进度。 */
  IndexedProgress?: number;
  /** 文件预处理、Embedding 向量化的状态。New：等待解析。Loading：文件解析中。Failure：文件解析、写入出错。Ready：文件解析、写入完成。 */
  IndexedStatus?: string;
  /** 错误信息 */
  IndexedErrorMsg?: string;
  /** 文件创建时间。 */
  CreateTime?: string;
  /** 文件最后更新时间。 */
  LastUpdateTime?: string;
  /** 文件关键字。 */
  Keywords?: string;
}

/** 数据源关联的的信息 */
declare interface RelationField {
  /** 关联关系字段 */
  Field?: string;
  /** 关联关系格式 */
  Format?: string;
  /** 关联数据源名称 */
  RelateDataSourceName?: string;
}

/** 权限组 */
declare interface RoleGroup {
  /** 权限组id */
  Id: number | null;
  /** 权限组名称 */
  Name: string;
  /** 权限组标识 */
  GroupIdentity: string;
  /** 权限组描述 */
  GroupDesc: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 角色数组 */
  RoleList: WedaRole[] | null;
}

/** 角色分页 */
declare interface RoleListPage {
  /** 角色列表 */
  RoleList: WedaRole[];
  /** 总数 */
  Total: number;
}

/** 知识库搜索文档信息 */
declare interface SearchDocInfo {
  /** 知识库名称 */
  CollectionViewName?: string;
  /** 文档Id */
  DocSetId?: string;
  /** 文档Name */
  DocSetName?: string;
  /** 文档类型 */
  DocType?: string;
  /** 文档标题 */
  FileTitle?: string;
  /** 文档元信息 */
  FileMetaData?: string;
  /** 文档描述 */
  DocDesc?: string;
  /** 文档大小 */
  FileSize?: number;
  /** Cos存储文件ID */
  FileId?: string;
}

/** 知识库文档搜索结果 */
declare interface SearchDocRsp {
  /** 文档基本信息 */
  DocInfos?: SearchDocInfo[];
  /** 文档总数 */
  Total?: number;
}

/** 数据源授权信息 */
declare interface TicketAuthInfo {
  /** 授权用户 */
  AuthUser?: string;
}

/** 上传知识库文档返回结果 */
declare interface UploadKnowledgeDocumentSetRsp {
  /** 给文件分配的 ID 信息。 */
  DocumentSetId?: string;
  /** 文件名 */
  DocumentSetName?: string;
  /** 文件标题 */
  FileTitle?: string;
  /** 文件元信息，为jsonstring */
  FileMetaData?: string;
  /** Cos存储文件ID */
  FileId?: string;
}

/** 低码应用详情 */
declare interface Weapp {
  /** 应用id */
  Id?: string;
  /** 应用所属者 */
  Owner?: string | null;
  /** 标识 */
  Name?: string;
  /** 描述 */
  Description?: string | null;
  /** 应用名称 */
  Title?: string;
  /** 环境信息 */
  Env?: string | null;
  /** 状态.0:已经安装3:安装中4:安装失败 */
  Status?: number;
  /** 环境信息 */
  EnvId?: string;
  /** 环境地域 */
  EnvRegion?: string;
  /** 资源包 */
  PkgId?: string;
  /** 应用信息是否安装到cms */
  CmsProject?: number | null;
  /** 渠道 */
  Channel?: string | null;
  /** 模板id */
  TemplateId?: string | null;
  /** 过期时间 */
  ExpireTime?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 来源 */
  Source?: string | null;
  /** 是否计费应用 */
  IsFree?: boolean;
  /** 应用内容类型 */
  ContentType?: string | null;
  /** 应用类型，是否为B端应用 */
  AppType?: number | null;
  /** 关联B端一样id */
  AttachAppId?: string | null;
  /** 应用类型，是否为企业应用 */
  EType?: number | null;
  /** 企业应用数据 */
  EData?: string | null;
  /** 最新一次小程序构建id */
  LastMpCiId?: string | null;
  /** 最新一次小程序状态 */
  LastMpCiStatus?: string | null;
  /** 最新一次web构建id */
  LastWebCiId?: string | null;
  /** 最新一次web状态 */
  LastWebCiStatus?: string | null;
  /** 最新部署时间 */
  LastDeployTime?: string | null;
  /** 安装任务id */
  FlowId?: number | null;
  /** 任务详情 */
  JobInfo?: AppJobInfo | null;
  /** 应用端 */
  Platform?: string | null;
  /** 最新一次web构建模式 */
  LastWebCiMode?: number | null;
  /** 最新一次小程序构建模式 */
  LastMpCiMode?: number | null;
  /** 应用场景化入口类型 */
  SceneType?: string | null;
  /** client_Id */
  ClientId?: string | null;
  /** 图标地址 */
  IconUrl?: string | null;
  /** 页面图标地址 */
  FaviconUrl?: string | null;
  /** 图标背景色 */
  BackgroundColor?: string | null;
  /** 应用是否收藏 */
  Favorite?: boolean;
  /** 发布平台：web、mp、pc、adminPortal、xPagePC、cloudAdmin */
  PublishPlatform?: string;
}

/** weda角色 */
declare interface WedaRole {
  /** 角色名称 */
  Name: string;
  /** 角色标识 */
  RoleIdentity: string;
  /** 角色id */
  Id: number;
  /** 父角色id */
  ParentRoleId: number;
  /** 子角色id */
  ChildRoleId: number;
  /** 环境标识 */
  EnvIdentity: string;
  /** 是否已发布 */
  IsReleased: boolean | null;
}

/** weda用户 */
declare interface WedaUser {
  /** 腾讯云主账号uin */
  Uin?: number;
  /** 名字 */
  Name?: string;
  /** 环境 */
  Env?: number;
  /** 类型 */
  Type?: number;
  /** 昵称 */
  NickName?: string;
  /** 邮箱 */
  Email?: string;
  /** 手机号 */
  Phone?: string;
  /** 项目id */
  ProjectId?: number;
  /** 用户uuid */
  Uuid?: string;
  /** 渠道，1:自建；2:企业微信导入 */
  Source?: number;
  /** 微信openid */
  OpenId?: string | null;
  /** 关联角色 */
  RelatedRoles?: WedaRole[] | null;
  /** 企业微信userid */
  WechatUserId?: string | null;
  /** 内部用户类型 */
  InternalUserType?: number | null;
  /** 微搭用户id */
  UserId?: number;
  /** 所属部门名称 */
  OrgName?: string;
  /** 用户schema */
  UserSchema?: string | null;
  /** 用户扩展信息 */
  UserExtend?: string | null;
  /** 用户是否授权License */
  IsLicensed?: boolean | null;
  /** 权限组数组 */
  RelatedRoleGroups?: RoleGroup[] | null;
  /** 兼岗部门 */
  Orgs?: OrgResp[] | null;
  /** 主岗部门 */
  MainOrg?: OrgResp[] | null;
  /** 直属上级 */
  ParentUserId?: number | null;
  /** 主列字段 */
  PrimaryColumn?: string | null;
  /** 用户头像 */
  AvatarUrl?: string | null;
  /** 最后登录时间 */
  LastLoginTime?: string;
}

declare interface CheckDeployAppRequest {
  /** 环境ID */
  EnvId: string;
  /** 应用id */
  Id: string;
  /** 构建 Id */
  BuildId: string;
}

declare interface CheckDeployAppResponse {
  /** 状态：success、building、reviewFail、releaseSuccess、underReview */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKnowledgeSetRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识 */
  Name: string;
  /** 知识库名称 */
  Title: string;
  /** 描述 */
  Desc?: string;
  /** 知识库的meta信息 */
  Meta?: string;
}

declare interface CreateKnowledgeSetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAppBindWxAppRequest {
  /** 应用id */
  WeappId: string;
}

declare interface DeleteAppBindWxAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteKnowledgeDocumentSetRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识 */
  CollectionView: string;
  /** 删除时制定的条件 */
  Query?: DocumentQuery;
}

declare interface DeleteKnowledgeDocumentSetResponse {
  /** 新增文件返回信息 */
  Data?: DeleteKnowledgeDocumentSetRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteKnowledgeSetRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识 */
  Name: string;
}

declare interface DeleteKnowledgeSetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployAppRequest {
  /** 环境ID */
  EnvId: string;
  /** 应用id */
  Id: string;
  /** 发布体验preview/正式upload */
  Mode?: string;
  /** 构建类型：mp、pc、web、adminPortal */
  BuildType?: string;
  /** 子包数组 */
  SubAppIds?: string[];
}

declare interface DeployAppResponse {
  /** 构建id */
  BuildId?: string;
  /** 发布错误code */
  DeployErrCode?: number;
  /** 发布错误信息 */
  DeployErrMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppsRequest {
  /** 分页每页个数 */
  Limit: number;
  /** 分页Offset */
  Offset: number;
  /** 环境id */
  EnvId?: string;
  /** 搜索关键词 */
  Keyword?: string;
  /** 应用id */
  AppIds?: string[];
  /** 来源类型 */
  Channel?: string;
  /** 1-自定义应用；2-模型应用 */
  Type?: number;
  /** 应用是否收藏 */
  Favorite?: boolean;
}

declare interface DescribeAppsResponse {
  /** 应用列表 */
  Weapps?: Weapp[] | null;
  /** 应用个数 */
  Count?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataSourceListRequest {
  /** 每页条数 */
  PageSize: number;
  /** 页码 */
  PageIndex: number;
  /** 环境 id */
  EnvId: string;
  /** 应用id数组 */
  Appids?: string[];
  /** 数据源id数组 */
  DataSourceIds?: string[];
  /** 数据源名称数组 */
  DataSourceNames?: string[];
  /** 数据源类型 database-自建数据源；cloud-integration-自定义数据源 */
  DataSourceType?: string;
  /** 数据源模糊查询参数 */
  QueryOption?: DataSourceQueryOption;
  /** 数据源视图Id数组 */
  ViewIds?: string[];
  /** 查询未关联应用的数据源，0:未关联，该参数配合 AppIds 参数一块使用 */
  AppLinkStatus?: number;
  /** 查询应用绑定数据源: 0: 否,1: 是 */
  QueryBindToApp?: number;
  /** 查询连接器 0 数据模型 1 连接器 2 自定义连接器 */
  QueryConnector?: number;
  /** 废弃中 */
  NotQuerySubTypeList?: string[];
  /** 查询channelList */
  ChannelList?: string[];
  /** 是否查询数据源关联关系 */
  QueryDataSourceRelationList?: boolean;
  /** db实例类型 */
  DbInstanceType?: string;
  /** 数据库表名列表 */
  DatabaseTableNames?: string[];
  /** 是否查询系统模型，默认为true，需要显示设置为False才能过滤系统模型 */
  QuerySystemModel?: boolean;
}

declare interface DescribeDataSourceListResponse {
  /** data 数据 */
  Data?: DataSourceDetailItems;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKnowledgeDocumentSetDetailRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识 */
  CollectionView: string;
  /** 文件名 */
  DocumentSetName?: string;
  /** 文件id */
  DocumentSetId?: string;
}

declare interface DescribeKnowledgeDocumentSetDetailResponse {
  /** 新增文件返回信息 */
  Data?: DescribeKnowledgeDocumentSetDetailRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKnowledgeDocumentSetListRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识 */
  CollectionView: string;
  /** 查询条件 */
  Query?: PageQuery;
}

declare interface DescribeKnowledgeDocumentSetListResponse {
  /** 新增文件返回信息 */
  Data?: DescribeKnowledgeDocumentSetListRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKnowledgeSetListRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识，精准查询 */
  Name?: string;
  /** 知识库名称，精准查询 */
  Title?: string;
  /** 分页起始位 */
  Offset?: number;
  /** 查询条数 */
  Limit?: number;
  /** NoPage标识不分页 */
  QueryMode?: string;
}

declare interface DescribeKnowledgeSetListResponse {
  /** 知识库列表 */
  Data?: KnowledgeSetRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRelatedUsersRequest {
  /** 角色id */
  RoleId: number;
  /** 环境id */
  EnvId: string;
  /** 页码 */
  PageNo: number;
  /** 页面含量 */
  PageSize: number;
  /** 环境类型 */
  EnvType?: string;
}

declare interface DescribeRelatedUsersResponse {
  /** 关联的用户列表 */
  Data?: WedaUser[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceRoleListRequest {
  /** 资源id */
  ResourceId: string;
  /** 资源类型 */
  ResourceType: string;
  /** 预览：pre；非预览：prod */
  EnvType: string;
  /** 环境id */
  EnvId: string;
  /** 子资源类型 */
  SubType?: string;
  /** 页码 */
  PageNo?: number;
  /** 分页大小 */
  PageSize?: number;
}

declare interface DescribeResourceRoleListResponse {
  /** 角色列表 */
  Data?: RoleListPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PutWxAppIdToWeAppRequest {
  /** 应用ID */
  WeAppId: string;
  /** 微信AppId */
  WxAppId: string;
}

declare interface PutWxAppIdToWeAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchDocListRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库名称 */
  CollectionView?: string;
  /** 搜索模式 */
  SearchKey?: string;
  /** 搜索值 */
  SearchValue?: string;
  /** 页码 */
  PageNo?: number;
  /** 页大小 */
  PageSize?: number;
}

declare interface SearchDocListResponse {
  /** 知识库文档搜索数据 */
  Data?: SearchDocRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateKnowledgeSetRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识 */
  Name: string;
  /** 知识库名称 */
  Title?: string;
  /** 描述 */
  Desc?: string;
  /** 状态;ENABLED启用；NOT_ENABLED不启用 */
  Active?: string;
  /** 知识库的meta信息 */
  Meta?: string;
}

declare interface UpdateKnowledgeSetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadKnowledgeDocumentSetRequest {
  /** 环境ID */
  EnvId: string;
  /** 知识库标识 */
  CollectionView: string;
  /** 状态;ENABLED启用；NOT_ENABLED不启用 */
  FileName: string;
  /** 腾讯云文件存储位置的可读地址 */
  CosUrl: string;
  /** 文件类型，例如: .docx, .md */
  DocumentType?: string;
  /** 对文件的描述 */
  DocumentDesc?: string;
  /** 文件标题 */
  FileTitle?: string;
  /** 文件元信息，为jsonstring */
  FileMetaData?: string;
  /** 文件id */
  DocumentSetId?: string;
  /** 使用 regex 分割文档 */
  Delimiter?: string;
  /** Cos存储文件ID */
  FileId?: string;
}

declare interface UploadKnowledgeDocumentSetResponse {
  /** 新增文件返回信息 */
  Data?: UploadKnowledgeDocumentSetRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Lowcode 云开发低码} */
declare interface Lowcode {
  (): Versions;
  /** 检查应用发布状态 {@link CheckDeployAppRequest} {@link CheckDeployAppResponse} */
  CheckDeployApp(data: CheckDeployAppRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDeployAppResponse>;
  /** 创建知识库 {@link CreateKnowledgeSetRequest} {@link CreateKnowledgeSetResponse} */
  CreateKnowledgeSet(data: CreateKnowledgeSetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKnowledgeSetResponse>;
  /** 删除应用绑定小程序 {@link DeleteAppBindWxAppRequest} {@link DeleteAppBindWxAppResponse} */
  DeleteAppBindWxApp(data: DeleteAppBindWxAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAppBindWxAppResponse>;
  /** 删除知识库下文档 {@link DeleteKnowledgeDocumentSetRequest} {@link DeleteKnowledgeDocumentSetResponse} */
  DeleteKnowledgeDocumentSet(data: DeleteKnowledgeDocumentSetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteKnowledgeDocumentSetResponse>;
  /** 删除知识库 {@link DeleteKnowledgeSetRequest} {@link DeleteKnowledgeSetResponse} */
  DeleteKnowledgeSet(data: DeleteKnowledgeSetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteKnowledgeSetResponse>;
  /** 发布应用 {@link DeployAppRequest} {@link DeployAppResponse} */
  DeployApp(data: DeployAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeployAppResponse>;
  /** 获取应用列表 {@link DescribeAppsRequest} {@link DescribeAppsResponse} */
  DescribeApps(data: DescribeAppsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppsResponse>;
  /** 获取数据源详情列表 {@link DescribeDataSourceListRequest} {@link DescribeDataSourceListResponse} */
  DescribeDataSourceList(data: DescribeDataSourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceListResponse>;
  /** 获取知识库下文档详情 {@link DescribeKnowledgeDocumentSetDetailRequest} {@link DescribeKnowledgeDocumentSetDetailResponse} */
  DescribeKnowledgeDocumentSetDetail(data: DescribeKnowledgeDocumentSetDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKnowledgeDocumentSetDetailResponse>;
  /** 用于精确查找与查询条件完全匹配知识库下文件集合 {@link DescribeKnowledgeDocumentSetListRequest} {@link DescribeKnowledgeDocumentSetListResponse} */
  DescribeKnowledgeDocumentSetList(data: DescribeKnowledgeDocumentSetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKnowledgeDocumentSetListResponse>;
  /** 查询环境下的知识库列表 {@link DescribeKnowledgeSetListRequest} {@link DescribeKnowledgeSetListResponse} */
  DescribeKnowledgeSetList(data: DescribeKnowledgeSetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKnowledgeSetListResponse>;
  /** 角色关联的用户列表 {@link DescribeRelatedUsersRequest} {@link DescribeRelatedUsersResponse} */
  DescribeRelatedUsers(data: DescribeRelatedUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelatedUsersResponse>;
  /** 查询资源关联的角色列表 {@link DescribeResourceRoleListRequest} {@link DescribeResourceRoleListResponse} */
  DescribeResourceRoleList(data: DescribeResourceRoleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceRoleListResponse>;
  /** 应用绑定微信ID {@link PutWxAppIdToWeAppRequest} {@link PutWxAppIdToWeAppResponse} */
  PutWxAppIdToWeApp(data: PutWxAppIdToWeAppRequest, config?: AxiosRequestConfig): AxiosPromise<PutWxAppIdToWeAppResponse>;
  /** 知识库搜索文档接口 {@link SearchDocListRequest} {@link SearchDocListResponse} */
  SearchDocList(data: SearchDocListRequest, config?: AxiosRequestConfig): AxiosPromise<SearchDocListResponse>;
  /** 更新知识库 {@link UpdateKnowledgeSetRequest} {@link UpdateKnowledgeSetResponse} */
  UpdateKnowledgeSet(data: UpdateKnowledgeSetRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateKnowledgeSetResponse>;
  /** 上传知识库文档 {@link UploadKnowledgeDocumentSetRequest} {@link UploadKnowledgeDocumentSetResponse} */
  UploadKnowledgeDocumentSet(data: UploadKnowledgeDocumentSetRequest, config?: AxiosRequestConfig): AxiosPromise<UploadKnowledgeDocumentSetResponse>;
}

export declare type Versions = ["2021-01-08"];

export default Lowcode;
