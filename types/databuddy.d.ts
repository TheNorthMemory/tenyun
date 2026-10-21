/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 添加控制台用户响应 */
declare interface AddConsoleUsersRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 高级依赖配置 */
declare interface AdvancedDependencyConfig {
  /** 逻辑运算符号OR / AND */
  Operator?: string | null;
  /** 任务运行条件规则列表 */
  Conditions?: TaskRunConditionRule[] | null;
}

/** 高级运行参数（工作流高级运行时用户填入的参数） */
declare interface AdvancedParameter {
  /** 参数名 */
  ParamKey?: string | null;
  /** 参数值 */
  ParamValue?: string | null;
}

/** 告警配置 */
declare interface AlarmBrief {
  /** 告警 ID，创建时无需传入，由服务端生成 */
  AlarmId?: string | null;
  /** 告警的监控对象类型，如工作流、任务等，当前支持 1. WORKFLOW 2. TASK */
  AlarmMonitorType?: string | null;
  /** 告警组，最多 50 个 */
  AlarmGroups?: AlarmGroup[] | null;
  /** 被跳过时免打扰，默认值 false */
  DoNotDisturbWhenSkipped?: boolean | null;
  /** 被手动终止时免打扰，默认值 false */
  DoNotDisturbWhenManuallyTerminated?: boolean | null;
  /** 最后一次重试前免打扰，默认值 false */
  DoNotDisturbUntilTheLastRetry?: boolean | null;
}

/** 告警组 */
declare interface AlarmGroup {
  /** 通知渠道ID，可通过基础平台通知渠道相关接口获取 */
  ChannelId?: string | null;
  /** 通知渠道名称，可以是用户组名称或邮箱地址 */
  ChannelName?: string | null;
  /** 是否启用邮件渠道，默认值：false */
  IsEmailChannel?: boolean | null;
  /** 告警条件列表。取值：START：启动SUCCESS：成功FAILURE：失败MONITOR_INDICATOR_ALARM：监控指标告警 */
  AlarmConditions?: string[] | null;
  /** 通知渠道类型。取值：0 未指定，1 Email，2 Webhook，3 Teams，4 Slack */
  ChannelType?: number | null;
}

/** 批量异步操作的逐项结果 */
declare interface AsyncActionRsp {
  /** 多个操作项的结果列表 */
  ActionResults?: RunActionBrief[] | null;
}

/** OneFlow 透传的 Workspace 异步文件操作信息；作业状态由 Workspace 持久化和维护 */
declare interface AsyncOperation {
  /** 是否异步执行；ZIP 解压创建时为 true */
  IsAsync: boolean | null;
  /** Workspace 持久化的异步作业 ID，用于查询作业进度 */
  JobId: string | null;
  /** 调用方生成的提交幂等与链路追踪标识 */
  OperationId: string | null;
  /** 异步作业状态：0-未指定，1-已受理，2-解压中，3-回调处理中，4-成功，5-部分失败，6-失败 */
  Status: number | null;
}

/** 审计信息 */
declare interface Audit {
  /** 创建者。注意：此字段可能返回null，表示取不到有效值 */
  Creator?: string | null;
  /** 创建时间戳 */
  CreatedAt?: string | null;
  /** 最后修改者。注意：此字段可能返回null，表示取不到有效值 */
  LastModifier?: string | null;
  /** 最后修改时间戳 */
  LastModifiedAt?: string | null;
  /** 创建者名称 */
  CreatorName?: string | null;
  /** 最后修改者名称 */
  LastModifierName?: string | null;
}

/** 分桶分区策略 */
declare interface BucketPartitioning {
  /** 分桶字段 */
  FiledNames: string[];
  /** 分桶数 */
  NumBuckets: string;
}

/** 数据目录实体结构 */
declare interface Catalog {
  /** 数据目录唯一id */
  Id?: string | null;
  /** 数据目录名称 */
  Name?: string | null;
  /** 数据目录类型 */
  Type?: string | null;
  /** 数据目录描述信息 */
  Comment?: string | null;
  /** 状态信息：注册中0，待测试1，连接成功2，连接失败3，删除中4，已删除5 */
  Status?: string | null;
  /** 数据目录属性 */
  Properties?: KVPair[] | null;
  /** 操作人 */
  Operator?: string | null;
  /** 责任人信息 */
  MetaOwner?: MetaOwner | null;
  /** 审计信息 */
  Audit?: Audit;
  /** 资产全局唯一ID */
  AssetGuid?: string;
  /** 当前workspace权限级别，取值对应PermissionLevel，0-无权限，1-只读，2-读写 */
  CurrentWorkspacePermissionLevel?: number;
  /** tccatalog属性中的tccatalog.identifier */
  Identifier?: string;
  /** 当前用户对该实体的权限信息 */
  PermissionDetail?: PermissionDetail;
  /** 是否为外部数据目录（基于数据源连接创建的Catalog，如MYSQL、EMR_HIVE、TCHOUSE_D、POSTGRESQL、DLC等）。true:外部目录, false:内置目录（TABLE/MODEL/VOLUME） */
  IsExternal?: boolean;
  /** 标签信息列表。注意：仅当请求中 FetchTags=true 时返回，默认不返回 */
  Tags?: CommonTagInfo[] | null;
  /** 数据目录来源 */
  CatalogSource?: string | null;
  /** 连接侧数据目录名或数据库名（仅分析版三段式数据源有值，二段式数据源为空字符串）。Doris/StarRocks/TChouse-D 等 MySQL 内核三段式数据源：external catalog 名称；PostgreSQL/Tencent PG/GaussDB/Hologres 等 PG 内核三段式数据源：databaseName；MySQL 等二段式数据源：空字符串。注意：此字段仅分析版（CatalogSource=CONNECTION）有效，专业版（METALAKE）不填充。 */
  ConnectionCatalogName?: string | null;
}

/** 字段信息 */
declare interface ColumnInfo {
  /** 字段名称 */
  Name: string;
  /** 字段类型 */
  Type: string;
  /** 字段描述 */
  Comment?: string;
  /** 字段设置 */
  FieldSetting?: string;
  /** 是否为主键 */
  IsPrimaryKey?: boolean;
  /** 字段策略 */
  DataMaskStrategyInfo?: DataMaskStrategyInfo;
  /** 字段级标签列表，仅当请求中FetchOption.FetchTags=true时返回，默认不返回 */
  Tags?: CommonTagInfo[] | null;
  /** 字段关联的字典维度信息，仅当请求中FetchOption.FetchDictDimensions=true时返回，默认不返回；若该字段未关联任何字典维度则为空 */
  DictDimension?: DictDimensionInfo | null;
}

/** 通用错误信息 */
declare interface CommonFailItem {
  /** uin或者groupId */
  Item?: string;
  /** 错误信息 */
  FailReason?: string;
}

/** 通用标签信息（用于查询展示场景），适用于表标签、字段标签等各类资产标签的轻量展示，供GetTable等接口返回使用 */
declare interface CommonTagInfo {
  /** 标签ID */
  LabelId?: string;
  /** 标签名称 */
  LabelName?: string;
  /** 标签值ID，属性标签（LabelType=3）可为0 */
  LabelValueId?: string | null;
  /** 标签值，脱敏标签（LabelType=4）时可为空 */
  LabelValue?: string | null;
  /** 标签类型，取值参考LabelType枚举定义：1-治理标签，2-自定义标签，3-属性标签，4-脱敏标签 */
  Type?: number;
  /** 标签是否已删除。true表示该LabelId在meta_biz_label中查不到记录，标签已被物理删除；false（默认）表示标签仍存在 */
  Deleted?: boolean;
}

/** 控制台用户组信息（对外标准版，与内部 UserGroupRoleInfo 解耦） */
declare interface ConsoleGroupInfo {
  /** 用户组 ID */
  GroupId?: string;
  /** 用户组名称 */
  GroupName?: string;
  /** 角色列表 */
  Roles?: RoleBasicInfo[] | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 用户组下用户数量 */
  UserCount?: number;
  /** 用户组类型。取值为枚举数值的字符串形式："0"=控制台系统类型（包含全部user）、"1"=控制台自定义类型、"2"=工作空间系统类型、"3"=工作空间自定义类型 */
  GroupType?: string;
}

/** 控制台用户组成员信息（对外标准版，与内部 GroupUserInfo 解耦） */
declare interface ConsoleGroupUserInfo {
  /** 用户 UIN */
  UserUin?: string;
  /** 用户名 */
  UserName?: string;
  /** 昵称 */
  Nickname?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 控制台角色信息（对外标准版，与内部 Role 解耦） */
declare interface ConsoleRoleInfo {
  /** 角色基本信息 */
  BasicInfo?: RoleBasicInfo | null;
  /** 角色元信息 */
  MetaData?: RoleMetaData | null;
  /** 角色权限 */
  Permissions?: RolePermission[] | null;
}

/** 控制台用户信息（规范化，与内部 UserDetailInfo 解耦） */
declare interface ConsoleUserInfo {
  /** 用户 UIN */
  UserUin?: string;
  /** 用户名 */
  UserName?: string;
  /** 昵称 */
  Nickname?: string;
  /** 角色列表 */
  Roles?: RoleBasicInfo[] | null;
  /** 用户来源，group：用户组、user:用户 */
  UserSource?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 是否主账号 */
  IsOwner?: boolean;
  /** 0: 普通用户 1: entraId用户 */
  UserTag?: number;
  /** 是否具有 admin 权限的子账号 */
  IsAdmin?: boolean;
}

/** 创建数据目录的响应 */
declare interface CreateCatalogRsp {
  /** 新创建的数据目录的id */
  CatalogId?: string | null;
}

/** 创建控制台用户组响应 */
declare interface CreateConsoleGroupRsp {
  /** 创建成功的用户组 ID */
  GroupId?: string;
}

/** 创建文件夹回包 */
declare interface CreateFolderRsp {
  /** 文件夹 ID */
  FolderId?: string;
}

/** 创建schema的响应 */
declare interface CreateSchemaRsp {
  /** schema信息 */
  Schema?: Schema | null;
}

/** CreateWorkflowRsp */
declare interface CreateWorkflowRsp {
  /** 工作流ID */
  WorkflowId?: string | null;
}

/** 创建工作空间角色结果 */
declare interface CreateWorkspaceRoleResult {
  /** 角色id */
  RoleId?: string;
  /** 创建工作空间角色是否成功 */
  Status?: boolean | null;
}

/** 创建工作空间响应 */
declare interface CreateWorkspaceRsp {
  /** 创建成功的工作空间ID */
  WorkspaceId?: string;
}

/** 用户组脱敏规则，描述某个用户组对应的脱敏方法 */
declare interface DataMaskGroup {
  /** 工作组 ID，对应 WeData 用户组 ID，必填，字符串类型。示例值："17738042827013749" */
  GroupId: string;
  /** 脱敏方法（策略类型），必填，直接透传给 DLC。合法值：MASK_SHOW_FIRST_4（保留前四个字符）、MASK_SHOW_LAST_4（保留后四个字符）、MASK_HASH（哈希脱敏）、MASK_DATE_SHOW_YEAR（日期脱敏保留年份）、MASK_NULL（置为 NULL）、MASK_DEFAULT（默认值脱敏） */
  StrategyType: string;
  /** 用户组名称 */
  GroupName?: string;
}

/** 脱敏策略绑定的敏感标签（精简视图）。相比通用 CommonTagInfo，仅保留策略视角下必要的三字段，避免序列化冗余。Type 固定为 4（DESENSITIZATION_LABEL 脱敏标签） */
declare interface DataMaskLabelInfo {
  /** 敏感标签 ID，对应 catalog-manager meta_biz_label.id */
  LabelId?: string;
  /** 敏感标签名称，对应 catalog-manager meta_biz_label.name */
  LabelName?: string;
  /** 标签类型，固定值 4（DESENSITIZATION_LABEL 脱敏标签）。参考 enum LabelType：1=业务标签、2=技术标签、3=分类标签、4=脱敏标签 */
  Type?: number;
}

/** 创建脱敏策略时的策略信息 */
declare interface DataMaskStrategyInfo {
  /** 策略名称，必填，长度 1~128 字符，同一项目下唯一 */
  StrategyName: string | null;
  /** 用户组脱敏规则列表，必填，至少包含一条规则。每条规则描述某个用户组对应的脱敏方法 */
  Groups: DataMaskGroup[] | null;
  /** 策略类型，必填，直接透传给 DLC。合法值：MASK_SHOW_FIRST_4（保留前四个字符）、MASK_SHOW_LAST_4（保留后四个字符）、MASK_HASH（哈希脱敏）、MASK_DATE_SHOW_YEAR（日期脱敏保留年份）、MASK_NULL（置为 NULL）、MASK_DEFAULT（默认值脱敏） */
  StrategyType?: string | null;
  /** 策略描述，可选，最大 512 字符 */
  StrategyDesc?: string | null;
  /** 策略ID */
  StrategyId?: string;
  /** 该脱敏策略当前绑定的敏感标签列表。使用场景：表详情弹窗回显“此策略关联了哪些敏感标签”，前端可 hover 展示。数据源：catalog-manager 域 meta_label_mask_policy_rel JOIN meta_biz_label，按 policy_id 反查。未关联任何敏感标签时为空数组。前置条件：仅当所在 ColumnInfo.DataMaskStrategyInfo 非空时才有查询意义。 */
  Labels?: DataMaskLabelInfo[] | null;
}

/** 删除数据目录描述的响应 */
declare interface DeleteCatalogRsp {
  /** 操作结果 */
  Result?: boolean | null;
}

/** 删除控制台用户组响应 */
declare interface DeleteConsoleGroupsRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 文件删除结果 */
declare interface DeleteFileResult {
  /** 被删除的文件 ID */
  FileId?: string | null;
  /** 删除是否成功 */
  Status?: boolean | null;
}

/** 删除文件夹回包 */
declare interface DeleteFolderRsp {
  /** 删除文件夹状态 */
  Status?: boolean;
}

/** 删除Schema的响应 */
declare interface DeleteSchemaRsp {
  /** 操作结果 */
  Result?: boolean | null;
}

/** 删除table的响应 */
declare interface DeleteTableRsp {
  /** 操作结果 */
  Result?: boolean | null;
}

/** DeleteWorkflowRsp */
declare interface DeleteWorkflowRsp {
  /** 删除状态，true 表示成功 */
  Status?: boolean | null;
}

/** 删除工作空间角色结果 */
declare interface DeleteWorkspaceRoleResult {
  /** 删除工作空间角色是否成功 */
  Status?: boolean;
}

/** 删除工作空间响应 */
declare interface DeleteWorkspaceRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 任务依赖简要信息 */
declare interface DependOnBrief {
  /** 任务ID，可通过 ListWorkflowTasks 获取 */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
}

/** 字段关联的字典维度信息，仅返回类型为DICT（字典维度）的维度关联 */
declare interface DictDimensionInfo {
  /** 关联的标准字典代码ID */
  DictCodeId?: string;
  /** 字典项列表（key-value映射） */
  DictItems?: DictItem[] | null;
}

/** 字典项（key-value映射） */
declare interface DictItem {
  /** 字典键 */
  Key?: string;
  /** 字典值 */
  Value?: string;
}

/** catalog特征表详情 */
declare interface FeatureTableDetail {
  /** 特征表主键字段列表 */
  PrimaryKeys?: string[];
  /** 特征表时间戳字段名称 */
  TimestampField?: string;
  /** 在线特征表对应的来源表名称（离线表） */
  SourceTableName?: string;
  /** 在线特征表关联的工作流ID */
  WorkflowId?: string;
  /** 离线特征表对应生成的在线特征表名称 */
  OnlineTableName?: string;
}

/** 数据获取选项，用于get/list请求中控制响应返回哪些额外内容 */
declare interface FetchOption {
  /** 是否在响应中返回权限列表，默认false */
  FetchPermissions?: boolean;
  /** 是否获取特征表详情，当AssetType为TABLE时有效 */
  FetchFeatureTableDetail?: boolean;
  /** 按权限过滤，传入权限列表，仅返回当前用户拥有指定权限的实体。例如传入["SELECT_TABLE"]则仅返回当前用户有SELECT_TABLE权限的实体。只对list接口生效，为空时不进行权限过滤 */
  FilterPermissions?: string[];
  /** 是否在响应中返回负责人信息。不传或为true时返回负责人信息（默认返回），显式传false时不返回 */
  FetchOwners?: boolean;
  /** 是否将用户Uin转换为用户名(userName)。影响范围：Audit中的CreatorName/LastModifierName、MetaOwner中的OwnerName。不传或为true时执行转换（默认转换），显式传false时不转换 */
  FetchUserInfo?: boolean;
  /** 是否返回字段脱敏策略信息，默认不返回，传true则会查询表字段对应的字段脱敏策略信息 */
  FetchMask?: boolean;
  /** 是否返回标签信息，默认不返回。传true时，GetTable/ListTables/GetCatalog/ListCatalogs/GetSchema/ListSchemas/GetView/ListViews/GetFunction/ListFunctions/GetVolume/ListVolumes/GetModel/ListModels等接口会在对应实体中返回标签（Tags）字段 */
  FetchTags?: boolean;
  /** 是否返回字段关联的字典维度信息，默认不传，不返回 */
  FetchDimensions?: boolean;
}

/** 文件运行配置 */
declare interface FileConfig {
  /** 高级运行参数，变量替换用，map-json String,String */
  Params?: string | null;
  /** 执行资源 ID。来源：ListComputeResources 接口返回的 ResourceId */
  ResourceId?: string | null;
  /** 默认 catalog */
  DefaultCatalog?: string | null;
  /** 默认 schema */
  DefaultSchema?: string | null;
  /** 高级配置，JSON 字符串 */
  AdvanceConfig?: string | null;
  /** 扩展参数，JSON 字符串 */
  ExtraParams?: string | null;
  /** Notebook 交互控件定义，JSON 字符串 */
  Widgets?: string | null;
  /** 各单元格输出配置。仅 Get 出参返回，入参忽略 */
  OutputConf?: FileOutputConf[];
  /** SQL脚本语法标记 */
  SqlSyntax?: string | null;
  /** 平台集群id */
  ClusterId?: string | null;
  /** 默认 Catalog 的来源类型，用于区分默认 Catalog 属于哪一套 Catalog 体系，可选。长度上限 32。取值：METALAKE - TC Catalog（元数据湖 Catalog）；SETATS - Setats Catalog。空值/非法值时后端读取兜底为 METALAKE。 */
  DefaultCatalogSource?: string | null;
}

/** 文件详情 */
declare interface FileInfo {
  /** 主账号 AppId */
  AppId?: string | null;
  /** 工作空间 ID */
  WorkspaceId?: string | null;
  /** 文件 ID */
  FileId?: string | null;
  /** 文件名，含后缀 */
  FileName?: string | null;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string | null;
  /** 文件在工作空间中的完整路径，以 / 开头，如 /etl/daily/demo.ipynb */
  Path?: string | null;
  /** 文件运行配置 */
  FileConfig?: FileConfig;
  /** 绑定的 BundleId */
  BundleId?: string | null;
  /** 绑定的 BundleInfo，JSON 字符串 */
  BundleInfo?: string | null;
  /** 文件状态。active=正常，deleted=已删除 */
  Status?: string | null;
  /** 文件负责人用户名 */
  OwnerUserName?: string | null;
  /** 创建人子账号 Uin */
  CreateUserUin?: string | null;
  /** 最近更新人子账号 Uin */
  UpdateUserUin?: string | null;
  /** 创建时间，毫秒级时间戳 */
  CreateTime?: string | null;
  /** 最近更新时间，毫秒级时间戳 */
  UpdateTime?: string | null;
  /** 文件存储信息。仅当请求 IncludeContent=true 时返回内容 */
  Storage?: FileStorage;
  /** 当前调用方对该文件的权限点列表 */
  Permissions?: string | null;
  /** 是否已发布 */
  ReleaseStatus?: boolean | null;
  /** 资源模式。1=分布式，2=单节点 */
  ResourceMode?: number | null;
  /** ZIP 异步创建时透传 Workspace 作业信息；普通同步创建或其他复用该返回结构的接口不设置该字段 */
  AsyncOperation?: AsyncOperation | null;
  /** 脚本版本ID */
  VersionId?: string | null;
}

/** 文件元数据 */
declare interface FileMeta {
  /** 文件id */
  FileId?: string;
  /** 文件/文件夹名称 */
  FileName?: string;
  /** 文件类型 */
  FileType?: string;
  /** 创建时间，毫秒秒级时间戳参数格式：时间戳 */
  CreateTime?: string;
  /** 更新时间参数格式：时间戳字符串 */
  UpdateTime?: string;
  /** acl权限类型 */
  AllowActions?: string[];
  /** 是否收藏 */
  IsFavorite?: boolean;
  /** 文件path */
  PathName?: string;
  /** 是否系统创建 */
  IsSystemGenerated?: boolean;
}

/** 文件节点 */
declare interface FileNode {
  /** 当前节点 */
  Node?: FileMeta;
  /** 父节点 */
  Parent?: FileMeta;
  /** 创建人 */
  Creator?: UserInfo;
  /** 拥有者 */
  Owner?: UserInfo;
  /** 节点类型 */
  NodeType?: string;
  /** 原始路径 */
  OriginPath?: string;
  /** 回收时间 */
  DeleteTime?: string;
  /** 文件git配置 */
  GitConfig?: GitRepoConfig | null;
}

/** Notebook/Python单元格输出配置 */
declare interface FileOutputConf {
  /** 单元格 ID */
  CellId?: string | null;
  /** Dashboard 图表配置，JSON 字符串 */
  DashboardConf?: string | null;
  /** 执行结果文件的预签名下载链接 */
  OutputPath?: string | null;
}

/** 文件存储 */
declare interface FileStorage {
  /** 存储类型 */
  StorageType?: number;
  /** 存储路径 */
  StoragePath?: string;
  /** 文件内容 */
  Content?: string;
}

/** 文件夹定位器 */
declare interface FolderLocator {
  /** 节点id */
  FolderId?: string;
  /** 节点path */
  PathName?: string;
}

/** 获取数据目录详情的响应 */
declare interface GetCatalogRsp {
  /** catalog详情 */
  Catalog?: Catalog | null;
}

/** 获取文件夹回包 */
declare interface GetFolderRsp {
  /** 文件夹信息 */
  Folder?: FileNode;
}

/** 获取schema详情的响应 */
declare interface GetSchemaRsp {
  /** schema详情 */
  Schema?: Schema | null;
}

/** 获取table详情的响应 */
declare interface GetTableRsp {
  /** table详情 */
  Table?: TableInfo | null;
}

/** 批量获取表元数据响应 */
declare interface GetTablesRsp {
  /** 表信息列表。注意：仅返回当前workspace有权限的catalog下的表，无权限的表会被静默跳过 */
  Items?: TableInfo[] | null;
}

/** GetWorkflowRsp */
declare interface GetWorkflowRsp {
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 工作流基本信息 */
  BaseInfo?: WorkflowBaseInfoDetail | null;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[] | null;
  /** 工作流参数列表 参数名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=> */
  ParamList?: ParamInfo[] | null;
  /** 标签 标签名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=> */
  LabelList?: LabelBrief[] | null;
  /** 工作流告警配置 */
  Alarm?: AlarmBrief | null;
  /** 监控指标配置 */
  MonitorMetric?: MonitorMetricBrief | null;
  /** 工作流高级设置 */
  AdvanceConfig?: WorkflowAdvanceConfig | null;
  /** 工作流任务列表 */
  TaskList?: WorkflowTask[] | null;
  /** 工作流绑定的 Bundle唯一标识，未绑定时为空 */
  BundleId?: string | null;
  /** Bundle信息 */
  BundleInfo?: string | null;
  /** Git配置ID */
  GitConfigId?: string | null;
  /** Git分支信息 */
  GitBranch?: string | null;
}

/** 查询工作流运行详情响应。 */
declare interface GetWorkflowRunRsp {
  /** 工作流运行信息 */
  WorkflowRun?: WorkflowRun | null;
}

/** GetWorkflowTaskRunRsp */
declare interface GetWorkflowTaskRunRsp {
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务运行ID */
  WorkflowTaskRunId?: string | null;
  /** 运行状态。取值参考工作流任务运行状态枚举，如 Pending / Running / Succeeded / Failed / Killed */
  RunState?: string | null;
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
  /** 任务版本ID */
  TaskVersionId?: string | null;
  /** 触发类型枚举值：Scheduler： 调度触发Manual： 手动触发 */
  TriggerType?: string | null;
  /** 所属资源组ID */
  ResourceGroupId?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 运行用户UIN */
  RunUserUin?: string | null;
  /** 运行用户名称 */
  RunUserName?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 执行平台执行ID */
  JobId?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
  /** 依赖任务完成时间，单位：毫秒时间戳 */
  DependenceFinishedTime?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 等待时长（依赖就绪到开始运行的等待耗时），单位：秒 */
  WaitTime?: string | null;
  /** 下发执行平台时间，单位：毫秒时间戳 */
  IssueTime?: string | null;
  /** 时区 */
  TimeZone?: string | null;
  /** 依赖上游任务ID列表。保留字段，暂时返回为[]保留字段，暂时返回为[] */
  DependOnList?: string[] | null;
  /** 运行参数 */
  RunParams?: string | null;
  /** 任务扩展信息，包含脚本路径 */
  TaskTypeExtensions?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 重试次数 */
  RetryTimes?: number | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 重跑次数 */
  RerunTimes?: number | null;
  /** 是否最新一次运行 */
  IsLatestRun?: boolean | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 错误消息 */
  ErrorMessage?: string | null;
  /** 运行结果 */
  RunResult?: string | null;
  /** 内嵌工作流任务运行详情（仅限 FOR_EACH 任务，其他任务类型不返回该字段） */
  InnerWorkflowTaskRun?: InnerWorkflowTaskRun | null;
  /** 计划调度时间参数格式：毫秒时间戳（UTC） */
  ScheduledTime?: string | null;
}

/** 查询工作空间详情响应 */
declare interface GetWorkspaceRsp {
  /** 工作空间详情 */
  WorkspaceInfo?: WorkspaceInfo;
}

/** git配置 */
declare interface GitRepoConfig {
  /** 检出规则 */
  SparseCheckout?: SparseCheckoutConfig | null;
  /** Git 仓库地址 */
  RepoUrl?: string;
  /** 分支名 */
  Branch?: string;
  /** 关联的 gitAuth 配置名称 */
  AuthConfigName?: string;
}

/** 用户组用户信息 */
declare interface GroupUserInfo {
  /** 用户UIN */
  UserUin?: string;
  /** 用户名 */
  UserName?: string;
  /** 昵称 */
  Nickname?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 索引结构 */
declare interface Index {
  /** 字段键值类型 */
  Type?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 字段名称 */
  FieldNames?: string[] | null;
  /** 字段键值类型 */
  IndexType?: string | null;
}

/** 内嵌工作流任务简要信息（目前只有 FOR_EACH 工作流任务该字段才有值） */
declare interface InnerWorkflowTaskBrief {
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
}

/** 内嵌工作流任务运行详情（仅限 FOR_EACH 任务） */
declare interface InnerWorkflowTaskRun {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 迭代运行列表 */
  Items?: InnerWorkflowTaskRunIteration[] | null;
  /** 迭代次数 */
  IterationCount?: number | null;
  /** 失败次数 */
  FailureCount?: number | null;
  /** 成功次数 */
  SuccessCount?: number | null;
  /** 内嵌工作流ID，可通过 ListWorkflows 获取 */
  InnerWorkflowId?: string | null;
  /** 内嵌任务ID，可通过 ListWorkflowTasks 获取 */
  InnerTaskId?: string | null;
  /** 内嵌任务运行状态数量统计（实例业务枚举键值对列表） */
  InnerTaskRunBizEnumInfos?: ScheduleBizEnumBrief[] | null;
}

/** 内嵌工作流单次迭代运行信息 */
declare interface InnerWorkflowTaskRunIteration {
  /** 内嵌工作流运行ID */
  WorkflowRunId?: string | null;
  /** 迭代序号 */
  IterationIndex?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行状态（参考工作流运行状态枚举） */
  RunState?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 运行参数 */
  WorkflowParams?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 内嵌工作流内部的任务运行 */
  InnerTaskRun?: InnerWorkflowTaskRunIterationBrief | null;
}

/** 内嵌工作流迭代中的任务运行简要信息 */
declare interface InnerWorkflowTaskRunIterationBrief {
  /** 任务运行ID */
  WorkflowTaskRunId?: string | null;
  /** 迭代序号 */
  IterationIndex?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行状态 */
  RunState?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 运行参数 */
  TaskParams?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
}

/** 内嵌工作流任务运行列表选项（仅限 FOR_EACH 任务使用） */
declare interface InnerWorkflowTaskRunListOption {
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number | null;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number | null;
  /** 迭代运行状态，精确匹配。非必填，多选（多个值之间为 OR 关系）。可填 SUCCESS / FAILED 等，具体参考本接口出参 InnerWorkflowTaskRunIteration.RunState 字段返回值。 */
  RunStates?: string[] | null;
}

/** 扩展信息键值对 */
declare interface KVPair {
  /** 键 */
  Key?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 标签信息 */
declare interface LabelBrief {
  /** 标签名称 */
  LabelKey?: string | null;
  /** 标签值 */
  LabelValue?: string | null;
  /** 标签名称ID，可通过标签相关接口获取 */
  LabelKeyId?: string | null;
  /** 标签值ID，可通过标签相关接口获取 */
  LabelValueId?: string | null;
}

/** 获取数据目录列表响应 */
declare interface ListCatalogsRsp {
  /** 数据目录列表 */
  Items?: Catalog[] | null;
  /** 下页分页token */
  NextPageToken?: string | null;
}

/** 查询控制台用户组成员列表响应 */
declare interface ListConsoleGroupUsersRsp {
  /** 用户组成员列表 */
  Items?: ConsoleGroupUserInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询控制台用户组列表响应 */
declare interface ListConsoleGroupsRsp {
  /** 用户组列表 */
  Items?: ConsoleGroupInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询控制台角色列表响应 */
declare interface ListConsoleRolesRsp {
  /** 角色列表 */
  Items?: ConsoleRoleInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询控制台用户列表响应 */
declare interface ListConsoleUsersRsp {
  /** 用户列表 */
  Items?: ConsoleUserInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询文件信息结果 */
declare interface ListFilesRsp {
  /** 文件/文件夹节点列表 */
  Items?: FileNode[];
  /** 当前页码 */
  PageNumber?: number;
  /** 每页条数 */
  PageSize?: number;
  /** 总条数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 列表分区 */
declare interface ListPartition {
  /** 分区名 */
  Name: string;
  /** 分区列表 */
  List: Literal[];
  /** 属性 */
  Properties?: KVPair[];
}

/** 列表分区策略 */
declare interface ListPartitioning {
  /** 分区字段 */
  FiledNames: string[];
  /** 分区 */
  Assignments: ListPartition[];
}

/** 获取schema列表响应 */
declare interface ListSchemasRsp {
  /** schema列表 */
  Items?: Schema[] | null;
  /** 下页分页token */
  NextPageToken?: string | null;
}

/** 获取table列表响应 */
declare interface ListTablesRsp {
  /** tabl列表 */
  Items?: TableInfo[] | null;
  /** 下页分页token */
  NextPageToken?: string | null;
}

/** ListWorkflowRunsRsp */
declare interface ListWorkflowRunsRsp {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 工作流运行列表 */
  Items?: WorkflowRun[] | null;
  /** 工作流运行状态数量统计。统计口径为当前筛选条件下的全量数据，不受 PageNumber / PageSize 影响 */
  BizStateEnumInfos?: ScheduleBizEnumBrief[] | null;
  /** 工作流运行错误码数量统计。统计口径为当前筛选条件下的全量数据，不受 PageNumber / PageSize 影响 */
  BizErrorCodeEnumInfos?: ScheduleBizEnumBrief[] | null;
}

/** 查询工作流任务运行列表响应。 */
declare interface ListWorkflowTaskRunsRsp {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 任务运行历史列表 */
  Items?: WorkflowTaskRun[] | null;
}

/** ListWorkflowsRsp */
declare interface ListWorkflowsRsp {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 工作流列表 */
  Items?: WorkflowBrief[] | null;
}

/** 查询工作空间用户组用户列表响应 */
declare interface ListWorkspaceGroupUsersRsp {
  /** 用户列表 */
  Items?: GroupUserInfo[];
  /** 当前页码默认值：1 */
  PageNumber?: number;
  /** 每页大小默认值：10 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询工作空间用户组列表响应 */
declare interface ListWorkspaceGroupsRsp {
  /** 用户组列表 */
  Items?: WorkspaceGroupInfo[];
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询工作空间用户列表响应 */
declare interface ListWorkspaceUsersRsp {
  /** 用户列表 */
  Items?: WorkspaceUserInfo[];
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
  /** 扩展信息（连续翻页场景由服务端返回，下次翻页请求原样带上） */
  ExtendInfo?: string;
}

/** 查询工作空间列表响应 */
declare interface ListWorkspacesRsp {
  /** 工作空间列表 */
  Items?: WorkspaceInfo[];
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
  /** 是否控制台管理员 */
  IsConsoleAdmin?: boolean;
}

/** 数值 */
declare interface Literal {
  /** 数值 */
  Value: string;
  /** 类型 */
  DataType: string;
}

/** 元数据责任人信息数据结构 */
declare interface MetaOwner {
  /** 元数据名称（全名）:catalog.schema.table */
  FullName?: string | null;
  /** 所有者类型:User */
  OwnerType?: string | null;
  /** 所有者:唯一标识(uin) */
  Owner?: string | null;
  /** 所有者名称 */
  OwnerName?: string | null;
}

/** 监控指标配置 */
declare interface MonitorMetricBrief {
  /** 监控指标 ID，创建时无需传入，由服务端生成 */
  MonitorMetricId?: string | null;
  /** 告警的监控对象类型，如工作流、任务等，当前支持 1. WORKFLOW 2. TASK */
  AlarmMonitorType?: string | null;
  /** 监控指标列表 */
  Metrics?: MonitorMetricItem[] | null;
}

/** 单个监控指标 */
declare interface MonitorMetricItem {
  /** 监控指标类型,有三种类型：1. RUN_DURATION（运行时长）2. WAIT_DURATION（等待时长）3. COMPLETION_TIME（完成时间） */
  MetricType?: string | null;
  /** 警告阈值，单位为毫秒级别，对于COMPLETION_TIME:从当日时间点00:00起算 */
  WarningThreshold?: string | null;
  /** 超时阈值，单位为毫秒级别，对于COMPLETION_TIME:从当日时间点00:00起算 */
  TimeoutThreshold?: string | null;
}

/** 排序字段 */
declare interface OrderBy {
  /** 排序方向，Asc（升序）或 Desc（降序），大小写不敏感 */
  Direction?: string;
  /** 排序字段名 */
  Name?: string;
}

/** 参数键值对 */
declare interface ParamInfo {
  /** 参数ID，创建时无需传入，由服务端生成 */
  ParamId?: string | null;
  /** 参数名 */
  ParamKey?: string | null;
  /** 参数值 */
  ParamValue?: string | null;
}

/** 分区结构 */
declare interface Partitioning {
  /** 转换策略 */
  Strategy?: string;
  /** 分桶策略参数 */
  NumBuckets?: number;
  /** 字段名称 */
  FieldNames?: string[];
  /** 策略参数 */
  Width?: number;
  /** 字段名称 */
  FieldName?: string[];
  /** 按年分区策略 */
  YearPartitioning?: SingleFieldPartitioning;
  /** 按月分区策略 */
  MonthPartitioning?: SingleFieldPartitioning;
  /** 按天分区策略 */
  DayPartitioning?: SingleFieldPartitioning;
  /** 按小时分区策略 */
  HourPartitioning?: SingleFieldPartitioning;
  /** 按字段分区策略 */
  IdentityPartitioning?: SingleFieldPartitioning;
  /** 列表分区策略 */
  ListPartitioning?: ListPartitioning;
  /** 范围分区策略 */
  RangePartitioning?: RangePartitioning;
  /** 分桶分区策略 */
  BucketPartitioning?: BucketPartitioning;
  /** 截断分区策略 */
  TruncatePartitioning?: TruncatePartitioning;
}

/** 实体权限信息，用于在get/list接口中返回当前用户对实体的权限列表 */
declare interface PermissionDetail {
  /** 当前用户对该实体拥有的权限列表 */
  Permissions?: string[];
  /** catalog在工作空间上的权限信息（可选）。取值：WORKSPACE_READONLY（只读）或WORKSPACE_READWRITE（读写） */
  CatalogWorkspacePrivilege?: string;
  /** deny权限总列表（用户deny ∪ 角色deny ∪ 继承deny，已去重，已从Permissions中排除） */
  DenyPrivilegeList?: string[];
}

/** 通用bool返回 */
declare interface PlatformStatusRsp {
  /** 通用返回 */
  Status?: boolean | null;
}

/** 范围分区 */
declare interface RangePartition {
  /** 分区名 */
  Name: string;
  /** 下界 */
  Lower: Literal;
  /** 上界 */
  Upper: Literal;
  /** 属性 */
  Properties?: KVPair[];
}

/** 范围分区策略 */
declare interface RangePartitioning {
  /** 分区字段 */
  FieldName: string;
  /** 分区 */
  Assignments: RangePartition[];
}

/** 批量移除控制台用户响应 */
declare interface RemoveConsoleUsersRsp {
  /** 请求已完成处理；即使部分失败也为 true，逐个结果以 SuccessUins/FailItems 为准 */
  Status?: boolean;
  /** 删除成功的用户 UIN 列表 */
  SuccessUins?: string[];
  /** 失败项列表（Item 为用户 UIN，FailReason 为失败原因） */
  FailItems?: CommonFailItem[];
}

/** 资源组信息 */
declare interface ResourceGroupInfo {
  /** 资源组ID */
  ResourceGroupId?: string | null;
  /** 资源组名称 */
  ResourceGroupName?: string | null;
  /** 资源组状态参数格式：0 // 未指定 1 // 待创建 2 // 创建中 3 // 运行中 4 // 已停止 5 // 停止中 6 // 启动中 7 // 更新中 8 // 删除中 9 // 已删除 10 // 用户主动启动 / 自动启动（有任务提交且自动启停开启） 11 // 可用: 仅存在于数据计算型 12 // 不可用: 仅存在于数据计算型 13 // 失败 */
  ResourceGroupStatus?: string | null;
}

/** 角色基础信息 */
declare interface RoleBasicInfo {
  /** 角色ID，可通过 ListWorkspaceRoles / ListConsoleRoles 接口获取；创建/更新角色时无需填写（由系统自动生成，创建成功后从响应 Data.RoleId 获取） */
  Id?: string;
  /** 角色名称 */
  Name?: string;
  /** 角色描述 */
  Description?: string;
  /** 显示名称 */
  DisplayName?: string;
  /** 角色类型：workspace=工作空间系统角色，workspace_custom=工作空间自定义角色，console=控制台角色；查询时返回，创建时无需填写（系统固定创建自定义角色） */
  RoleType?: string;
  /** 角色来源（查询侧字段，创建时无需填写）：0=未指定，1=用户直绑，2=用户组继承，3=两者都有 */
  Source?: number;
  /** 继承来源的用户组名称列表（查询侧字段，创建时无需填写），Source=1 时为空 */
  GroupNames?: string[];
}

/** 角色元数据 */
declare interface RoleMetaData {
  /** 创建者 */
  Creator?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新者 */
  Updater?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 角色权限 */
declare interface RolePermission {
  /** 模块ID，须为当前租户已开通的功能模块（叶子节点）的模块ID（层级编码字符串，如 101=快速开始、109=工作流、116101103=工作空间管理_角色权限），非法值返回 InvalidParameterValue。模块清单获取方式：调用 ListWorkspaceModules 接口查询工作空间模块列表，取返回 Items[].ModuleId 字段（IsLeaf 为 true 的叶子节点）；也可通过控制台「工作空间设置-角色权限」页面查看 */
  ModuleId?: string;
  /** 模块访问权限，单值：R=只读，RW=读写，RWD=读写删除，N=无权限 */
  Permissions?: string;
}

/** 单个操作项的执行结果。 由 RunWorkflow / RerunWorkflowRun / KillWorkflowRun 共用： RunWorkflow—— WorkflowId / WorkflowName 有值，WorkflowRunId 为空 RerunWorkflowRun —— WorkflowId / WorkflowName / WorkflowRunId 均有值 KillWorkflowRun —— WorkflowId / WorkflowName / WorkflowRunId 均有值 */
declare interface RunActionBrief {
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 操作动作ID，用于追踪具体的执行动作 */
  RunActionId?: string | null;
  /** 失败错误信息，操作失败时返回具体的错误描述 */
  ErrorMessage?: string | null;
  /** 操作状态，true 表示成功，false 表示失败 */
  OpStatus?: boolean | null;
  /** 工作流运行ID。重跑 / 终止场景返回被操作的运行ID；运行工作流场景为空 */
  WorkflowRunId?: string | null;
}

/** 枚举项统计（如运行状态、错误码的数量分布） */
declare interface ScheduleBizEnumBrief {
  /** 枚举标签键 */
  LabelKey?: string | null;
  /** 枚举标签值 */
  LabelValue?: string | null;
  /** 枚举项统计数量 */
  Count?: number | null;
}

/** 计划调度时间配置 */
declare interface ScheduledTimeConfig {
  /** 调度时区，IANA 时区 ID */
  ScheduledTimeZone?: string | null;
  /** 调度生效开始时间参数格式：毫秒时间戳（UTC） */
  StartTime?: string | null;
  /** 调度生效结束时间参数格式：毫秒时间戳（UTC） */
  EndTime?: string | null;
  /** 周期类型枚举值：DAY_CYCLE： 天HOUR_CYCLE： 小时MINUTE_CYCLE： 分钟WEEK_CYCLE： 周 */
  CycleType?: string | null;
  /** 周期步长 */
  CycleNum?: number | null;
}

/** Schema信息 */
declare interface Schema {
  /** schema名称 */
  Name: string;
  /** 描述。注意：此字段可能返回null，表示取不到有效值 */
  Comment?: string;
  /** 属性。注意：此字段可能返回null，表示取不到有效值 */
  Properties?: KVPair[];
  /** 审计信息。注意：此字段可能返回null，表示取不到有效值 */
  Audit?: Audit;
  /** owner信息 */
  MetaOwner?: MetaOwner;
  /** 资产全局唯一ID，通过WedataAssetUIDUtils.generateUID生成 */
  AssetGuid?: string;
  /** 当前用户对该schema的权限信息。注意：此字段可能返回null，请求中未开启FetchPermissions时不返回 */
  PermissionDetail?: PermissionDetail;
  /** 标签信息列表。注意：此字段可能返回null，请求中未开启FetchTags时不返回 */
  Tags?: CommonTagInfo[] | null;
}

/** 单字段分区 */
declare interface SingleFieldPartitioning {
  /** 分区字段 */
  FieldName: string;
}

/** git检出规则 */
declare interface SparseCheckoutConfig {
  /** 是否启用稀疏检出 */
  Enabled?: boolean | null;
  /** 是否使用 cone 模式（推荐 true，按目录匹配更高效） */
  ConeMode?: boolean | null;
  /** 稀疏检出路径列表（如 ["src/module-a/", "docs/"]） */
  Patterns?: string[] | null;
}

/** 用户基础展示信息 */
declare interface StandardUserInfo {
  /** 用户UIN */
  UserUin?: string;
  /** 用户名 */
  UserName?: string;
  /** 昵称 */
  Nickname?: string;
  /** 0: 普通用户 1: entraId用户 */
  UserTag?: string;
}

/** 启动计算资源返回结果 */
declare interface StartComputeRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 停止计算资源返回结果 */
declare interface StopComputeRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 表信息 */
declare interface TableInfo {
  /** 表名称 */
  Name?: string | null;
  /** 描述 */
  Comment?: string | null;
  /** 字段信息 */
  Columns?: ColumnInfo[] | null;
  /** 属性值 */
  Properties?: KVPair[] | null;
  /** 分区 */
  Partitioning?: Partitioning[] | null;
  /** 索引 */
  Indexes?: Index[] | null;
  /** 编辑者 */
  Audit?: Audit | null;
  /** 表版本 */
  TableFormat?: string | null;
  /** owner信息 */
  MetaOwner?: MetaOwner | null;
  /** 资产全局唯一ID */
  AssetGuid?: string;
  /** 总文件数 */
  FilesCount?: string | null;
  /** 总数据量大小 */
  FilesSize?: string | null;
  /** 表类型- Managed 内部- External 外部 */
  TableType?: string | null;
  /** 特征表类型：Online-在线表 Offline-离线表 空字符串-非特征表 */
  FeatureTableType?: string;
  /** 特征表详细信息，仅当FeatureTableType不为空时有值 */
  FeatureTableDetail?: FeatureTableDetail;
  /** 当前用户对该实体的权限信息 */
  PermissionDetail?: PermissionDetail;
  /** 表级标签列表，仅当请求中FetchOption.FetchTags=true时返回，默认不返回 */
  Tags?: CommonTagInfo[] | null;
}

/** 标签值信息 */
declare interface TagValueInfo {
  /** 标签值ID。ID 模式写接口（UpdateWorkspaceUsersTags / UpdateWorkspaceGroupsTags）中必填，可通过 ListTags 接口出参 Items[].TagValues[].TagValueId 获取，也可通过 CreateTagValues 创建后获取；按名称模式接口（AttachWorkspaceUserTags / DetachWorkspaceUserTags）中无需传入；查询接口出参中回填。ID 不存在或已删除时接口报错 TagValueNotExist */
  TagValueId?: string;
  /** 标签值内容。按名称模式接口（AttachWorkspaceUserTags / DetachWorkspaceUserTags）中必填；ID 模式写接口（UpdateWorkspaceUsersTags / UpdateWorkspaceGroupsTags）中无需传入，服务端忽略；查询接口出参中回填 */
  TagValue?: string;
  /** 标签来源，枚举值：0=未指定 1=用户直绑 2=用户组继承 3=两者都有。仅查询接口出参中返回；所有写接口均无需传入，服务端忽略 */
  Source?: number;
  /** 继承来源的用户组名称列表（标签来源 Source=1 用户直绑时为空）。仅查询接口出参中返回；所有写接口均无需传入，服务端忽略 */
  GroupNames?: string[];
}

/** 任务重试策略 */
declare interface TaskRetryStrategy {
  /** 最多重试次数，默认3 */
  MaxRetryTimes?: number | null;
  /** 重试之间等待时间，默认5 */
  RetryBetweenWaitTime?: number | null;
  /** 重试之间等待时间单位毫秒：MILLISECOND秒：SECOND分钟（默认）：MINUTE小时：HOUR */
  RetryBetweenWaitTimeUnit?: string | null;
  /** 任务运行失败时重试开关，默认为true */
  TaskRunFailureRetrySwitch?: boolean | null;
  /** 任务运行超时时重试开关，默认为false */
  TaskRunTimeoutRetrySwitch?: boolean | null;
}

/** 任务运行条件规则 */
declare interface TaskRunConditionRule {
  /** 上游任务ID */
  UpstreamTaskId?: string | null;
  /** 上游任务名称 */
  UpstreamTaskName?: string | null;
  /** 任务可运行条件支持的状态值： - SUCCESS: 成功 - FAILED: 失败 - UPSTREAM_FAILED: 上游失败 - EXCLUDED: 排除运行 */
  AllowedStates?: string[] | null;
}

/** 任务调度参数（运行/重跑工作流时的自定义参数） */
declare interface TaskSchedulingParameterBrief {
  /** 参数名 */
  ParamKey?: string | null;
  /** 参数值 */
  ParamValue?: string | null;
}

/** ### `TaskTypePropertyList` 中 `TaskTypeProperty` 针对不同任务类型需要填写不同的 key 和 value；### 1. NOTEBOOK 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ------------ | ----------------- | ---------------------------------- | ----------------------- || Source | 来源 | 只支持填2或5,来源 2:GIT, 5:工作空间 | 是 || NotebookPath | Notebook 相对路径 | Source为5时，需从（ListFiles）获取 | Source 为 2、5 时，必填 |### 2. DATA_INTEGRATION 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || --------------------- | -------------------- | --------------------------------------- | -------- || Source | 来源 | 必填:4,表示来源为COS | 是 || TemplatePath | 数据接入任务配置路径 | 需从（ListBatchIngestionTasks）接口获取 | 是 || DataIntegrationTaskId | 数据接入任务ID | 需从（ListBatchIngestionTasks）接口获取 | 是 |### 3. RUN_WORKFLOW 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ---------- | ---------- | ----------------------------- | -------- || WorkflowId | 选择工作流 | 需从（ListWorkflows）接口获取 | 是 |### 4. SQL 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || --------------- | ----------- | --------------------------------------------- | -------------------- || Source | 来源 | 只支持填2或5,来源 2:GIT, 5:工作空间 | 是 || SqlPath | SQL脚本路径 | SQL脚本路径 | Source 为 2 时，必填 || CodeFileName | 文件名称 | Source为5时，需从（ListReleasedQueries）接口获取 | 否 || CodeFileId | 文件ID | Source为5时，需从（ListReleasedQueries）接口获取 | Source 为 5 时，必填 || CodeFileVersion | 文件版本 | Source为5时，需从（ListReleasedQueries）接口获取 | 否 |### 5. PYTHON 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ---------- | -------------- | -------------------------------------- | -------- || Source | 来源 | 只支持填2或5,来源 2:GIT, 5:工作空间 | 是 || SourcePath | Python脚本路径 | Source为5时，需从（ListFiles）接口获取 | 是 |### 6. DATA_QUALITY（质量监控）任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || -------------- | ---------------- | --------------------------------------------- | -------- || Source | 来源 | 必填:4,表示来源为COS | 是 || TemplatePath | 质量监控配置路径 | 需从（ListDataQualityTaskSummaries）接口获取 | 是 || SourceUniqueId | 质量监控ID | 需从（ListDataQualityTaskSummaries）接口获取 | 是 || ExecutionType | 执行类型 | 必填:SQL | 是 || AfterAspect | 质量任务后置切面 | 需从（ListDataQualityTaskSummaries）接口获取 | 否 || BeforeAspect | 质量任务前置切面 | 需从（ListDataQualityTaskSummaries）接口获取 | 否 |### 7. IF_ELSE 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ---------- | -------- | --------------- | -------- || Conditions | 条件列表 | IF-ELSE条件配置 | 是 |### 8. FOR_EACH 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || -------------- | ------------ | ---------------------------------- | -------- || MaxConcurrency | 最大并发数 | 最大并发数，默认为1 | 是 || MaxIterations | 最大迭代次数 | 最大迭代次数，默认1000 | 是 || LoopDataArray | 循环参数 | JSON格式的数组，或 {{}} 包裹的变量 | 是 |### 9. RAY_JOB（Ray作业）任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || -------------- | -------------------- | ---------------------------------- | -------- || RunMode | 运行方式 | 运行方式，取值：SERVERLESS（按需拉起集群）/ DEDICATED（提交到指定集群）。默认 DEDICATED | 是 || Entrypoint | 入口指令 | 入口指令 | 是 || JobConfig | 任务配置 | 如存储配置 + 计算环境。传值请参考前端页面保存Ray作业任务时调用UpdateWorkflow。Image请调用DLC接口ListImages接口Url字段获取 | RunMode 为 SERVERLESS 时，必填 || ClusterId | Ray 集群 | 需从所选计算资源下已配置的 Ray 集群（引擎）列表中选择，可通过计算资源相关接口获取 | RunMode 为 DEDICATED 时，必填 || Source | 任务来源 | 任务来源，取值：1（本地文件）/ 5（工作空间） | 是 || JobPackage | 任务来源文件地址 | 任务来源路径：Source 为 1 时存本地上传文件的 COS 地址（支持 .zip / .py 文件）；Source 为 5 时存所选工作空间文件/文件夹路径 | 是 || JobPackageName | 任务来源本地文件名 | 任务来源本地文件名 | Source 为 1 时，必填 || CodeFileId | 代码文件ID | Source 为 5 时，需从工作空间文件选择组件获取所选文件/文件夹对应的ID | Source 为 5 时，必填 || WorkspaceEntryType | 工作空间入口类型 | Source 为 5 时，所选工作空间条目的类型：FILE（文件）/ FOLDER（文件夹），由前端选择器随选择目标自动写入 | Source 为 5 时，必填 |### RuntimePropertyList任务运行参数列表，用于配置任务运行时的计算资源，与 TaskTypePropertyList（任务扩展属性）区分：TaskTypePropertyList 承载任务自身的业务配置（如脚本来源、路径等），RuntimePropertyList 承载任务运行时的资源配置（如资源模式、CU规格、Executor数量等）。主要适用于需要配置计算资源的任务类型（如 NOTEBOOK、PYTHON）。具体可填写的属性键以任务类型属性配置为准，可通过 ListWorkflowTaskTypeProperties 接口获取（propertyType 为 RUNTIME 的属性项）。常见运行参数键说明：| 属性键 | 属性名称 | 描述 | 必填性（联动条件满足时） | 默认值 || ---------- | -------------- | ---------------------------------- | -------- | -------- || ResourceMode | 资源模式 | 1：分布式；2：单节点 | 是 | 1 || ConfigType | 配置类型 | DEFAULT：默认配置；CUSTOM：自定义配置 | 是 | DEFAULT || ExecutorAllocation | Executor分配模式 | DYNAMIC：动态分配；FIXED：固定分配 | 是（分布式且自定义配置时） | DYNAMIC || ExecutorMinNum | Executor最小个数 | 正整数 | 是（动态分配时） | 1 || ExecutorMaxNum | Executor最大个数 | 正整数 | 是（动态分配时） | 1 || ExecutorFixedNum | Executor固定个数 | 正整数 | 否（固定分配时） | - || ExecutorCU | Executor资源规格 | small / medium / large / xlarge / 4xlarge | 否（分布式且自定义配置时） | - || DriverCU | Driver资源规格 | small / medium / large / xlarge / 4xlarge | 否（分布式且自定义配置时 或者单节点时） | - || ExecutorGPU | Executor GPU数量 | 0表示不使用GPU | 否（分布式且自定义配置时） | - || DriverGPU | Driver GPU数量 | 0表示不使用GPU | 否（分布式且自定义配置时） | - || Style | 配置样式 | UI / JSON | 是（自定义配置时） | UI |补充说明：1. "必填性"指属性配置中的必填标记，仅当属性联动条件（如 ResourceMode=1 且 ConfigType=CUSTOM）满足时才触发必填校验；2. ConfigType 为 DEFAULT（默认配置）时，需调用 ListComputeResourceOptions 接口获取所选计算资源的默认规格值，并将其填充到运行参数（ExecutorCU、DriverCU、ExecutorMinNum、ExecutorMaxNum 等）后传入；ConfigType 为 CUSTOM（自定义配置）时，运行参数由调用方自行指定； */
declare interface TaskType {
  /** 任务类型：SQL：用于执行SQL查询和数据处理操作；DATA_INTEGRATION：用于离线数据接入操作；NOTEBOOK：用于运行Notebook脚本；RUN_WORKFLOW：用于执行嵌套工作流；PYTHON：用于运行Python脚本；RAY_JOB：用于运行Ray作业；DATA_QUALITY：用于数据质量监控；IF_ELSE：用于条件分支判断；FOR_EACH：用于循环遍历执行； */
  TaskTypeName?: string | null;
  /** Notebook 类型扩展信息 */
  Notebook?: TaskTypeNotebookExt | null;
  /** 任务扩展属性列表，具体填写参考TaskType.TaskPropertyList描述 */
  TaskTypePropertyList?: TaskTypeProperty[] | null;
  /** 运行时属性列表，具体填写参考TaskType.RuntimePropertyList描述 */
  RuntimePropertyList?: TaskTypeProperty[] | null;
}

/** （本对象在TaskType内已废弃，统一使用TaskType.TaskTypePropertyList）Notebook 类型任务扩展 */
declare interface TaskTypeNotebookExt {
  /** 脚本来源。取值：SCRIPT_SOURCE_LOCAL（本地）/ SCRIPT_SOURCE_GIT（Git 仓库）/SCRIPT_SOURCE_CFS（CFS 文件系统）/ SCRIPT_SOURCE_COS（COS 对象存储）/SCRIPT_SOURCE_WORKSPACE（工作空间） */
  Source?: string | null;
  /** 前端显示使用，对执行平台无意义 */
  DisplayPath?: string | null;
  /** Notebook 相对路径 */
  NotebookPath?: string | null;
  /** Notebook 绝对路径 */
  NotebookAbsolutePath?: string | null;
}

/** 任务类型属性键值对 */
declare interface TaskTypeProperty {
  /** 属性键名。用于TaskType内的入参时，若不传或为空，该属性项被服务端静默忽略（不报错），等同于该属性未配置。合法 PropertyKey 清单请参考TaskType中描述。 */
  PropertyKey?: string | null;
  /** 属性值 */
  PropertyValue?: string | null;
}

/** 截断分区策略 */
declare interface TruncatePartitioning {
  /** 字段名 */
  FiledName: string;
  /** 截取长度 */
  Width: string;
}

/** UnbindWorkflowBundleRsp */
declare interface UnbindWorkflowBundleRsp {
  /** 操作状态，true 表示成功 */
  Status?: boolean | null;
}

/** 修改控制台用户组响应 */
declare interface UpdateConsoleGroupRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 修改控制台用户响应 */
declare interface UpdateConsoleUsersRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 更新文件夹回包 */
declare interface UpdateFolderRsp {
  /** 更新文件夹结果，true为成功 */
  Status?: boolean;
}

/** UpdateWorkflowRsp */
declare interface UpdateWorkflowRsp {
  /** 更新状态，true 表示成功 */
  Status?: boolean | null;
}

/** 更新工作空间角色结果 */
declare interface UpdateWorkspaceRoleResult {
  /** 更新工作空间角色是否成功 */
  Status?: boolean;
}

/** 修改工作空间响应 */
declare interface UpdateWorkspaceRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 用户基本信息 */
declare interface UserInfo {
  /** uin */
  UserUin?: string;
  /** 子用户名称 */
  UserName?: string;
  /** 子用户昵称 */
  Nickname?: string;
  /** 0: 普通用户 1: entraId用户 */
  UserTag?: string;
}

/** 用户/用户组标签维度信息（用户管理域独立结构，与通用 TagInfo 解耦，仅供用户/用户组标签接口使用） */
declare interface UserTagInfo {
  /** 标签维度ID。ID 模式写接口（UpdateWorkspaceUsersTags / UpdateWorkspaceGroupsTags）中必填，可通过 ListTags 接口出参 Items[].TagId 获取，也可通过 CreateTags 创建后获取；按名称模式接口（AttachWorkspaceUserTags / DetachWorkspaceUserTags）中无需传入；查询接口出参中回填。ID 不存在或已删除时接口报错 TagNotExist */
  TagId?: string;
  /** 标签名称。按名称模式接口（AttachWorkspaceUserTags / DetachWorkspaceUserTags）中必填；ID 模式写接口（UpdateWorkspaceUsersTags / UpdateWorkspaceGroupsTags）中无需传入，服务端忽略；查询接口出参中回填 */
  TagName?: string;
  /** 该标签维度下绑定的标签值集合，元素结构见 TagValueInfo。ID 模式写接口中元素 TagValueId 必填；按名称模式接口中元素 TagValue 必填；查询接口出参中回填 */
  Values?: TagValueInfo[];
}

/** 工作流完整配置 */
declare interface Workflow {
  /** 工作空间ID，可通过 ListWorkspaces 获取 */
  WorkspaceId?: string | null;
  /** 工作流基本信息 */
  BaseInfo?: WorkflowBaseInfo | null;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[] | null;
  /** 工作流参数列表 参数名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=> 最长128个字符 */
  ParamList?: ParamInfo[] | null;
  /** 标签 标签名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=>'，最长128个字符 */
  LabelList?: LabelBrief[] | null;
  /** 工作流告警配置 */
  Alarm?: AlarmBrief | null;
  /** 监控指标配置 */
  MonitorMetric?: MonitorMetricBrief | null;
  /** 工作流高级设置 */
  AdvanceConfig?: WorkflowAdvanceConfig | null;
  /** 工作流任务列表 */
  TaskList?: WorkflowTask[] | null;
  /** BundleId，可通过 Bundle 相关接口获取 */
  BundleId?: string | null;
  /** Bundle信息 */
  BundleInfo?: string | null;
  /** GIT配置ID，对应GetWorkspaceConfig接口中的ConfigKey - */
  GitConfigId?: string | null;
  /** Git分支信息 */
  GitBranch?: string | null;
}

/** 工作流高级设置 */
declare interface WorkflowAdvanceConfig {
  /** 排队模式，ON（默认）, OFF */
  QueuingMode?: string | null;
  /** 默认值为1QueuingMode为ON时，MaxConcurrentNum 设置才生效；只能输入大于0的整数，输入非法值自动转换为1 */
  MaxConcurrentNum?: number | null;
}

/** 工作流基本信息（入参用） */
declare interface WorkflowBaseInfo {
  /** 工作流名称，长度不超过 1024 */
  WorkflowName?: string | null;
  /** 工作流ID，创建时无需传入，由服务端生成 */
  WorkflowId?: string | null;
  /** 工作流运行人UIN */
  RunUserUin?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 工作流负责人用户名 */
  OwnerUserName?: string | null;
  /** 创建人UIN。系统生成字段，仅出参返回，入参无需传入（传入不生效，服务端忽略且不报错） */
  CreateUserUin?: string | null;
}

/** 工作流基本信息（出参用，含系统生成字段与负责人展示信息） */
declare interface WorkflowBaseInfoDetail {
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 工作流运行人UIN */
  RunUserUin?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 工作流负责人用户名 */
  OwnerUserName?: string | null;
  /** 工作流负责人UIN */
  OwnerUserUin?: string | null;
  /** 工作流负责人展示名 */
  OwnerDisplayName?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
}

/** 工作流列表项 */
declare interface WorkflowBrief {
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 工作流负责人用户名 */
  OwnerUserName?: string | null;
  /** 工作流负责人UIN */
  OwnerUserUin?: string | null;
  /** 工作流负责人展示名 */
  OwnerDisplayName?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
  /** 标签列表 */
  LabelList?: LabelBrief[] | null;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[] | null;
  /** 工作流运行人UIN */
  RunUserUin?: string | null;
  /** 工作流运行人用户名 */
  RunUserName?: string | null;
  /** 工作流任务节点列表 */
  TaskList?: WorkflowTaskNodeBrief[] | null;
  /** 工作流运行情况列表 */
  WorkflowRunList?: WorkflowRunBrief[] | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 授权权限类型PERMISSION_TYPE_UNSPECIFIED：未指定权限MANAGE : 管理权限：包含所有操作权限RUN : 运行权限：可执行实体VIEW : 查看权限：可查看实体内容 */
  Permission?: string | null;
  /** 工作流绑定的 Bundle 唯一标识，未绑定时为空 */
  BundleId?: string | null;
  /** Bundle信息 */
  BundleInfo?: string | null;
  /** Git配置ID */
  GitConfigId?: string | null;
  /** Git分支信息 */
  GitBranch?: string | null;
}

/** 工作流运行信息 */
declare interface WorkflowRun {
  /** 主账号ID */
  AppId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 触发方式，Scheduler、ManualTrigger、Event (参考SchedulerTriggerType) */
  TriggerType?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** pending 状态开始时间，单位：毫秒时间戳 */
  PendingStartTime?: string | null;
  /** queue 状态开始时间，单位：毫秒时间戳 */
  QueueStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 终态时间，运行进入终态时都有值，单位：毫秒时间戳 */
  EndTime?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 并发排队花费时间，单位：秒 */
  QueueCostTime?: string | null;
  /** 等待资源花费时间，单位：秒 */
  PendingCostTime?: string | null;
  /** 运行状态。CREATE("初始化"), QUEUED("等待中"), PENDING("准备中"), RUNNING("运行中"), SKIPPED("跳过运行"), SUCCESS("成功"), FAILED("失败"), TERMINATING("终止中"), TERMINATED("终止"), CANCELLED("被手动终止")等 */
  RunState?: string | null;
  /** 计算资源（任务的资源组ID集合） */
  ResourceGroupIds?: string[] | null;
  /** 运行用户UIN */
  RunUserUin?: string | null;
  /** 运行用户名称 */
  RunUserName?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 运行参数 */
  WorkflowParams?: string | null;
  /** 工作流版本ID */
  WorkflowVersionId?: string | null;
  /** 当前工作流是否支持重跑 */
  SupportRerun?: boolean | null;
  /** 工作流运行创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 重跑次数 */
  RerunTimes?: number | null;
  /** 运行的任务范围，任务ID列表 */
  SelectedTaskIds?: string[] | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 标签列表 */
  LabelList?: LabelBrief[] | null;
  /** 父工作流运行ID 【由嵌套工作流触发独有】 */
  ParentWorkflowRunId?: string | null;
  /** 父工作流任务运行ID 【由嵌套工作流触发独有】 */
  ParentWorkflowTaskRunId?: string | null;
  /** 父工作流任务运行名称 【由嵌套工作流触发独有】 */
  ParentWorkflowTaskRunName?: string | null;
  /** 授权权限类型PERMISSION_TYPE_UNSPECIFIED：未指定权限MANAGE : 管理权限：包含所有操作权限RUN : 运行权限：可执行实体VIEW : 查看权限：可查看实体内容 */
  Permission?: string | null;
  /** 工作流高级运行时用户填入的参数 */
  AdvancedParameters?: AdvancedParameter[] | null;
  /** 计划调度时间参数格式：毫秒时间戳（UTC） */
  ScheduledTime?: string | null;
}

/** 工作流列表项的运行情况 */
declare interface WorkflowRunBrief {
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行状态。CREATE("初始化"), QUEUED("等待中"), PENDING("准备中"), RUNNING("运行中"), SKIPPED("跳过运行"), SUCCESS("成功"), FAILED("失败"), TERMINATING("终止中"), TERMINATED("终止"), CANCELLED("被手动终止")等 */
  RunState?: string | null;
  /** 运行错误码 */
  ErrorCodeString?: string | null;
}

/** 工作流任务信息。 注意：本结构同时用于入参（CreateWorkflow / UpdateWorkflow）与出参（GetWorkflow）， 其中 CreateTime / UpdateTime / CreateUserUin 为系统生成字段，仅在出参中有值， 入参传值不生效（服务端忽略且不报错）。 */
declare interface WorkflowTask {
  /** 任务参数 */
  ParamList?: ParamInfo[] | null;
  /** 任务依赖 */
  DependOnList?: DependOnBrief[] | null;
  /** 任务ID，创建时无需传入，由服务端生成 */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务类型 */
  TaskType?: TaskType | null;
  /** 资源组ID，可通过资源组相关接口获取 */
  ResourceGroupId?: string | null;
  /** 任务描述 */
  Description?: string | null;
  /** 任务告警 */
  Alarm?: AlarmBrief | null;
  /** 监控指标 */
  MonitorMetric?: MonitorMetricBrief | null;
  /** 任务重试策略 */
  TaskRetryStrategy?: TaskRetryStrategy | null;
  /** 任依赖运行条件ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败ALL_FAILED: 全部失败：所有上游依赖任务都失败ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行ADVANCED:运行条件为高级模式时配置 */
  DependOnRunCondition?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 任务高级运行参数，当DependOnRunCondition为ADVANCED时配置 */
  AdvancedDependencyConfig?: AdvancedDependencyConfig | null;
  /** 内嵌任务（FOR_EACH任务的子任务） */
  InnerTask?: WorkflowTask | null;
  /** 创建时间，单位：毫秒时间戳。系统生成字段，仅出参返回，入参无需传入（传入不生效，服务端忽略且不报错） */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳。系统生成字段，仅出参返回，入参无需传入（传入不生效，服务端忽略且不报错） */
  UpdateTime?: string | null;
  /** 创建人UIN。系统生成字段，仅出参返回，入参无需传入（传入不生效，服务端忽略且不报错） */
  CreateUserUin?: string | null;
}

/** 工作流列表项中的工作流任务节点简要信息 */
declare interface WorkflowTaskNodeBrief {
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
  /** 任务依赖列表 */
  DependOnList?: DependOnBrief[] | null;
  /** 任务资源组ID */
  ResourceGroupId?: string | null;
  /** 任务资源组名称 */
  ResourceGroupName?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 任务重试策略 */
  TaskRetryStrategy?: TaskRetryStrategy | null;
  /** 任务依赖运行条件ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败ALL_FAILED: 全部失败：所有上游依赖任务都失败ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行ADVANCED:运行条件为高级模式时配置 */
  DependOnRunCondition?: string | null;
  /** 高级依赖配置 */
  AdvancedDependencyConfig?: AdvancedDependencyConfig | null;
  /** 内嵌工作流任务节点 */
  InnerTask?: WorkflowTaskNodeBrief | null;
}

/** 工作流任务运行信息 */
declare interface WorkflowTaskRun {
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务运行ID */
  WorkflowTaskRunId?: string | null;
  /** 运行状态。如CREATE("初始化"), QUEUED("等待中"), PENDING("准备中"), RUNNING("运行中"), SKIPPED("跳过运行"), SUCCESS("成功"), FAILED("失败"), TERMINATING("终止中"), TERMINATED("终止"), CANCELLED("被手动终止")等 */
  RunState?: string | null;
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
  /** 任务版本ID */
  TaskVersionId?: string | null;
  /** 触发类型枚举值：Manual： 手动触发Scheduler： 调度触发 */
  TriggerType?: string | null;
  /** 所属资源组ID */
  ResourceGroupId?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 运行用户UIN */
  RunUserUin?: string | null;
  /** 运行用户名称 */
  RunUserName?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 执行平台执行ID */
  JobId?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
  /** 依赖任务完成时间，单位：毫秒时间戳 */
  DependenceFinishedTime?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 等待时长（依赖就绪到开始运行的等待耗时），单位：秒 */
  WaitTime?: string | null;
  /** 下发执行平台时间，单位：毫秒时间戳 */
  IssueTime?: string | null;
  /** 时区 */
  TimeZone?: string | null;
  /** 依赖上游任务ID列表。保留字段，暂时返回为[]保留字段，暂时返回为[] */
  DependOnList?: string[] | null;
  /** 运行参数 */
  RunParams?: string | null;
  /** 任务扩展信息，包含脚本路径 */
  TaskTypeExtensions?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 重试次数，为 0 则表示首次运行 */
  RetryTimes?: number | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 重跑次数 */
  RerunTimes?: number | null;
  /** 是否最新一次运行 */
  IsLatestRun?: boolean | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 运行结果 */
  RunResult?: string | null;
  /** 任务依赖运行条件ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败ALL_FAILED: 全部失败：所有上游依赖任务都失败ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行ADVANCED:运行条件为高级模式时配置 */
  DependOnRunCondition?: string | null;
  /** 高级依赖配置 */
  AdvancedDependencyConfig?: AdvancedDependencyConfig | null;
  /** 内嵌工作流任务信息 */
  InnerTask?: InnerWorkflowTaskBrief | null;
  /** 计划调度时间参数格式：毫秒时间戳，UTC */
  ScheduledTime?: string | null;
}

/** 工作流调度高级配置。 */
declare interface WorkflowTriggerAdvancedConfiguration {
  /** <p>该工作流下的所有任务重试模式，仅当TriggerMode为CONTINUE_RUN时有效。枚举值：onFailure： 失败时自动重试never： 从不重试 */
  TaskRetryMode?: string | null;
}

/** 工作流调度配置。 */
declare interface WorkflowTriggerConfiguration {
  /** 调度配置ID，创建时无需传入，由服务端生成 */
  TriggerId?: string | null;
  /** 调度状态 启动：START，暂停：PAUSE */
  SchedulerStatus?: string | null;
  /** 触发方式，定时触发：TIME_TRIGGER持续运行：CONTINUE_RUN注意：TIME_TRIGGER 模式下，SchedulerStatus、SchedulerTimeZone、StartTime、EndTime、ConfigMode、CycleType、CrontabExpression 必填；CONTINUE_RUN 模式下，AdvancedConfig必填； */
  TriggerMode?: string | null;
  /** 调度时区 */
  SchedulerTimeZone?: string | null;
  /** 调度生效时间，单位：毫秒时间戳。必须小于 EndTime */
  StartTime?: string | null;
  /** 调度结束时间，单位：毫秒时间戳。必须大于 StartTime */
  EndTime?: string | null;
  /** 配置方式，常规：COMMON，CRON表达式：CRON_EXPRESSION */
  ConfigMode?: string | null;
  /** 周期类型：支持的类型为 ONEOFF_CYCLE: 一次性 YEAR_CYCLE: 年 MONTH_CYCLE: 月 WEEK_CYCLE: 周 DAY_CYCLE: 天HOUR_CYCLE: 小时 MINUTE_CYCLE: 分钟 CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** cron表达式 */
  CrontabExpression?: string | null;
  /** Json格式，对账使用 */
  ExtraInfo?: string | null;
  /** 高级配置 */
  AdvancedConfig?: WorkflowTriggerAdvancedConfiguration | null;
}

/** 工作空间用户组信息 */
declare interface WorkspaceGroupInfo {
  /** 用户组ID */
  GroupId?: string;
  /** 用户组名称 */
  GroupName?: string;
  /** 角色列表 */
  Roles?: RoleBasicInfo[];
  /** 创建时间，毫秒时间戳 */
  CreateTime?: string;
  /** 更新时间，毫秒时间戳 */
  UpdateTime?: string;
  /** 用户组下用户数量 */
  UserCount?: number;
  /** 用户组类型。取值为枚举数值的字符串形式："0"=控制台系统类型（包含全部user）、"1"=控制台自定义类型、"2"=工作空间系统类型（包含工作空间全部user）、"3"=工作空间自定义类型 */
  GroupType?: string;
  /** 该组直接绑定的标签（不含继承） */
  Tags?: UserTagInfo[];
}

/** 工作空间信息 */
declare interface WorkspaceInfo {
  /** 工作空间ID */
  WorkspaceId?: string;
  /** 工作空间名称 */
  WorkspaceName?: string;
  /** 工作空间描述 */
  Description?: string;
  /** 工作空间地域（如 ap-guangzhou） */
  WorkspaceRegion?: string;
  /** 工作空间状态：0=未指定 1=创建中 2=创建失败 3=正常运行中 4=已删除 */
  Status?: number;
  /** 失败原因（Status=2 创建失败时有值） */
  ErrorReason?: string;
  /** 创建者信息 */
  Creator?: StandardUserInfo;
  /** 创建时间，毫秒时间戳 */
  CreateTime?: string;
  /** 更新时间，毫秒时间戳 */
  UpdateTime?: string;
  /** 当前用户是否拥有该工作空间的访问权限 */
  HasAccess?: boolean;
}

/** 工作空间用户信息 */
declare interface WorkspaceUserInfo {
  /** 用户UIN */
  UserUin?: string;
  /** 用户名 */
  UserName?: string;
  /** 昵称 */
  Nickname?: string;
  /** 角色列表 */
  Roles?: RoleBasicInfo[];
  /** 用户来源，group：用户组、user：用户 */
  UserSource?: string;
  /** 创建时间，毫秒时间戳 */
  CreateTime?: string;
  /** 更新时间，毫秒时间戳 */
  UpdateTime?: string;
  /** 是否主账号 */
  IsOwner?: boolean;
  /** 0: 普通用户 1: entraId用户 */
  UserTag?: number;
  /** 是否具有 admin 权限的子账号 */
  IsAdmin?: boolean;
  /** 合并后标签（用户直绑 + 用户组继承） */
  Tags?: UserTagInfo[];
}

declare interface AddConsoleUsersRequest {
  /** 用户 UIN 列表，单次最多100个 */
  UserUins: string[];
  /** 角色 ID 列表枚举值：2001： 控制台管理员2002： 控制台成员可通过 ListConsoleRoles 接口获取 */
  RoleIds: string[];
}

declare interface AddConsoleUsersResponse {
  /** 返回结果 */
  Data?: AddConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddWorkspaceGroupsRequest {
  /** 用户组ID，可通过 ListConsoleGroups 接口获取 */
  GroupIds: string[];
  /** 工作空间ID */
  WorkspaceId: string;
  /** 角色ID，可通过 ListWorkspaceRoles 接口获取 */
  RoleIds: string[];
}

declare interface AddWorkspaceGroupsResponse {
  /** 添加结果 */
  Data?: PlatformStatusRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddWorkspaceUsersRequest {
  /** 用户ID */
  UserUins: string[];
  /** 工作空间ID */
  WorkspaceId: string;
  /** 角色ID，可通过 ListWorkspaceRoles 接口获取 */
  RoleIds: string[];
}

declare interface AddWorkspaceUsersResponse {
  /** 结果 */
  Data?: PlatformStatusRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCatalogRequest {
  /** catalog名称 */
  Name: string;
  /** catalog类型, 可选值TABLE、MODEL、VOLUME */
  Type: string;
  /** 工作空间唯一id */
  WorkspaceId: string;
  /** 描述 */
  Comment?: string;
  /** connection 的 ID */
  ConnectionId?: string;
  /** 数据目录来源，可选（融合版新增字段），取值参考 CatalogSourceEnum：METALAKE（专业版）/ CONNECTION（分析版），不传时默认按 METALAKE 处理 */
  CatalogSource?: string;
  /** 连接侧数据目录名或数据库名，三段式数据源必填，二段式数据源（如 MySQL）不填。Doris/StarRocks/TChouse-D 等 MySQL 内核三段式数据源填写 external catalog 名称；PostgreSQL/Tencent PG/GaussDB/Hologres 等 PG 内核三段式数据源填写 databaseName；MySQL 等二段式数据源不填。 */
  ConnectionCatalogName?: string;
}

declare interface CreateCatalogResponse {
  /** 创建catalog响应 */
  Data?: CreateCatalogRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsoleGroupRequest {
  /** 用户组名称 */
  GroupName: string;
  /** 用户组别名 */
  GroupNickname?: string;
  /** 用户组描述 */
  Description?: string;
}

declare interface CreateConsoleGroupResponse {
  /** 返回结果 */
  Data?: CreateConsoleGroupRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件名，含后缀，最长 255 字节。不能以 . 或 .. 开头/结尾，不能含空格与控制字符 */
  FileName: string;
  /** 父文件夹路径，以 / 开头、末尾不带 /，根目录传 /。来源：ListFiles 接口返回的 Path */
  ParentFolderPath?: string;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
  /** 文件运行配置 */
  FileConfig?: FileConfig;
  /** 绑定的 BundleId。来源：ListBundles 接口返回的 BundleId */
  BundleId?: string;
  /** 绑定的 BundleInfo，JSON 字符串 */
  BundleInfo?: string;
  /** 文件初始内容。不传则按FileType 生成默认内容 */
  Storage?: FileStorage;
  /** 是否将 Storage 中的 ZIP 文件异步解压创建，默认 false。true 时异步作业由 Workspace 负责全生命周期，响应仅通过 AsyncOperation 返回作业信息（FileId 为空）；作业进度查询由基础平台 WS 接口实现，不在本协议中定义。 */
  ExtractArchive?: boolean;
}

declare interface CreateFileResponse {
  /** 返回结果 */
  Data?: FileInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFolderRequest {
  /** 工作空间名称 */
  WorkspaceId: string;
  /** 文件夹名称 */
  FolderName: string;
  /** 文件夹类型枚举值：FOLDER： 文件夹GIT_FOLDER： git文件夹 */
  FolderType: string;
  /** 父节点 */
  ParentFolder?: FolderLocator;
  /** git配置，FolderType=GIT_FOLDER 时必填 */
  GitConfig?: GitRepoConfig;
}

declare interface CreateFolderResponse {
  /** 创建文件夹结果 */
  Data?: CreateFolderRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSchemaRequest {
  /** catalog名称 */
  CatalogName: string;
  /** schema名称 */
  Name: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 描述 */
  Comment?: string;
  /** 数据源连接ID，可选（融合版新增字段）。分析版catalog不支持创建schema，传入非空时服务端返回ANA_CATALOG_NOT_SUPPORTED错误 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface CreateSchemaResponse {
  /** schema信息 */
  Data?: CreateSchemaRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流基本信息。必填，其中 WorkflowName 必填且工作空间内唯一 */
  BaseInfo: WorkflowBaseInfo;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[];
  /** 工作流参数列表 */
  ParamList?: ParamInfo[];
  /** 标签列表 */
  LabelList?: LabelBrief[];
  /** 工作流告警配置 */
  Alarm?: AlarmBrief;
  /** 监控指标配置。若告警条件中选择了监控告警，则本字段必填 */
  MonitorMetric?: MonitorMetricBrief;
  /** 工作流高级设置 */
  AdvanceConfig?: WorkflowAdvanceConfig;
  /** 工作流任务列表 */
  TaskList?: WorkflowTask[];
  /** BundleId，可通过 Bundle 相关接口获取 */
  BundleId?: string;
  /** Bundle信息 */
  BundleInfo?: string;
  /** Git配置ID，可通过 Git 配置相关接口获取 */
  GitConfigId?: string;
  /** Git分支信息 */
  GitBranch?: string;
}

declare interface CreateWorkflowResponse {
  /** 创建工作流响应内容 */
  Data?: CreateWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkspaceRequest {
  /** 工作空间名称，max_len=128 */
  WorkspaceName: string;
  /** 工作空间地域（如 ap-guangzhou），max_len=64 */
  WorkspaceRegion: string;
  /** 工作空间描述，max_len=300 */
  Description?: string;
}

declare interface CreateWorkspaceResponse {
  /** 创建成功的工作空间ID */
  Data?: CreateWorkspaceRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkspaceRoleRequest {
  /** 工作空间id */
  WorkspaceId: string;
  /** 角色基础信息 */
  BasicInfo: RoleBasicInfo;
  /** 角色权限 */
  Permissions?: RolePermission[];
}

declare interface CreateWorkspaceRoleResponse {
  /** 创建工作空间角色返回 */
  Data?: CreateWorkspaceRoleResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCatalogRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 数据源连接ID，可选（融合版新增字段）。非空→走分析版路径，空/缺省→走专业版TcLake路径 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface DeleteCatalogResponse {
  /** 操作结果 */
  Data?: DeleteCatalogRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConsoleGroupsRequest {
  /** 要删除的用户组 ID 列表，单次最多100个；可通过 ListConsoleGroups 接口获取 */
  GroupIds: string[];
}

declare interface DeleteConsoleGroupsResponse {
  /** 返回结果 */
  Data?: DeleteConsoleGroupsRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件 ID。来源：CreateFile / ListFiles / GetFile 接口返回的 FileId */
  FileId: string;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
}

declare interface DeleteFileResponse {
  /** 返回结果 */
  Data?: DeleteFileResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFolderRequest {
  /** 工作空间id */
  WorkspaceId: string;
  /** 待删除的文件夹 */
  Folder: FolderLocator;
  /** 软删除还是从回收站硬删除枚举值：false： 软删除到回收站true： 从回收站硬删除 */
  ForceDelete?: boolean;
}

declare interface DeleteFolderResponse {
  /** 删除文件夹结果 */
  Data?: DeleteFolderRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSchemaRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 数据库名 */
  SchemaName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 数据源连接ID，可选（融合版新增字段）。分析版catalog不支持删除schema，传入非空时服务端返回ANA_CATALOG_NOT_SUPPORTED错误 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface DeleteSchemaResponse {
  /** 操作结果 */
  Data?: DeleteSchemaRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTableRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 数据库名 */
  SchemaName: string;
  /** 表名 */
  TableName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId?: string;
  /** 数据源连接ID，可选（融合版新增字段）。分析版catalog不支持删除表，传入非空时服务端返回ANA_CATALOG_NOT_SUPPORTED错误 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface DeleteTableResponse {
  /** 操作结果 */
  Data?: DeleteTableRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 待删除的工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
}

declare interface DeleteWorkflowResponse {
  /** 删除工作流响应内容 */
  Data?: DeleteWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkspaceRequest {
  /** 工作空间ID */
  WorkspaceId: string;
}

declare interface DeleteWorkspaceResponse {
  /** 操作结果 */
  Data?: DeleteWorkspaceRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkspaceRoleRequest {
  /** 工作空间ID */
  WorkspaceId: string;
  /** 角色ID，可通过 ListWorkspaceRoles 接口获取 */
  RoleId: string;
}

declare interface DeleteWorkspaceRoleResponse {
  /** 删除工作空间角色结果 */
  Data?: DeleteWorkspaceRoleResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCatalogRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 数据目录id */
  CatalogId?: string;
  /** 数据获取选项，可选，控制是否返回权限信息及按权限过滤 */
  FetchOption?: FetchOption;
  /** 数据源连接ID，可选（融合版新增字段）。非空→走分析版路径，空/缺省→走专业版TcLake路径 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface GetCatalogResponse {
  /** catalog详情 */
  Data?: GetCatalogRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件 ID。来源：CreateFile / ListFiles 接口返回的 FileId。与 FilePath 二选一 */
  FileId?: string;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
  /** 是否返回文件内容。true 时 Storage.Content 返回 base64 内容，默认 false */
  IncludeContent?: boolean;
  /** 文件版本 ID。来源：ListFileVersions 接口返回的 VersionId。不传则读取最新版本 */
  VersionId?: string;
  /** 文件完整路径，以 / 开头，如 /etl/daily/demo.ipynb。与 FileId 二选一 */
  FilePath?: string;
}

declare interface GetFileResponse {
  /** 返回结果 */
  Data?: FileInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFolderRequest {
  /** 工作空间id */
  WorkspaceId: string;
  /** 文件夹定位 */
  Folder: FolderLocator;
}

declare interface GetFolderResponse {
  /** 文件夹详情结果 */
  Data?: GetFolderRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSchemaRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 数据库名 */
  SchemaName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 数据获取选项，可选，控制是否返回权限信息及按权限过滤 */
  FetchOption?: FetchOption;
  /** 数据源连接ID，可选（融合版新增字段）。非空→走分析版路径，空/缺省→走专业版TcLake路径 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface GetSchemaResponse {
  /** schema详情 */
  Data?: GetSchemaRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTableRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 数据库名 */
  SchemaName: string;
  /** 表名 */
  TableName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 数据获取选项，可选，控制是否返回权限信息及按权限过滤 */
  FetchOption?: FetchOption;
  /** 数据源连接ID，可选（融合版新增字段）。非空→走分析版路径，空/缺省→走专业版TcLake路径 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface GetTableResponse {
  /** 表信息 */
  Data?: GetTableRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTablesRequest {
  /** 调用时所在workspace唯一id，必填 */
  WorkspaceId: string;
  /** 表的全名列表，格式为 catalogName.schemaName.tableName，必填，至少1条，最大20条 */
  FullNames: string[];
  /** 数据获取选项，可选，控制是否返回权限信息及按权限过滤 */
  FetchOption?: FetchOption;
  /** 数据源连接ID，可选（融合版新增字段）。非空→走分析版路径，要求所有FullNames属于同一catalog（分析版额外约束）；空/缺省→走专业版TcLake路径 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface GetTablesResponse {
  /** 返回结果 */
  Data?: GetTablesRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
}

declare interface GetWorkflowResponse {
  /** 获取工作流详细信息响应内容 */
  Data?: GetWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkflowRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流运行ID，可通过 ListWorkflowRuns 获取。必填 */
  WorkflowRunId: string;
}

declare interface GetWorkflowRunResponse {
  /** 查询工作流运行详情响应内容 */
  Data?: GetWorkflowRunRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkflowTaskRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 任务运行ID，可通过 ListWorkflowTaskRuns 获取。必填 */
  WorkflowTaskRunId: string;
  /** 内嵌工作流任务运行列表选项（仅限 FOR_EACH 任务使用）。非必填 */
  InnerWorkflowTaskRunListOption?: InnerWorkflowTaskRunListOption;
}

declare interface GetWorkflowTaskRunResponse {
  /** 查询任务运行详情响应内容 */
  Data?: GetWorkflowTaskRunRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkspaceRequest {
  /** 工作空间ID */
  WorkspaceId: string;
}

declare interface GetWorkspaceResponse {
  /** 工作空间详情 */
  Data?: GetWorkspaceRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillWorkflowRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 待终止的工作流运行ID列表，可通过 ListWorkflowRuns 获取 */
  WorkflowRunIds?: string[];
  /** 是否终止该工作流下所有未进入终态的运行。非必填，默认 false */
  KillAllRuns?: boolean;
  /** 是否只终止处于等待中（Pending）状态的运行。非必填，默认 false */
  OnlyKillPendingRuns?: boolean;
}

declare interface KillWorkflowRunResponse {
  /** 终止工作流的运行响应内容 */
  Data?: AsyncActionRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListCatalogsRequest {
  /** 工作空间唯一id */
  WorkspaceId: string;
  /** 最大结果条数 */
  MaxResults?: number;
  /** 分页token */
  PageToken?: string;
  /** catalog类型，可填：TABLE、MODEL、VOLUME */
  Types?: string[];
  /** 是否只返回当前工作空间有权限的，false时会额外返回当前用户有权限管理的catalog */
  CurrentWorkspaceOnly?: boolean;
  /** 数据获取选项，可选，控制是否返回权限信息及按权限过滤 */
  FetchOption?: FetchOption;
  /** 数据目录来源筛选（融合版新增字段），取值参考 CatalogSourceEnum。空数组或不传→只查tclake；["METALAKE"]→只查tclake；["CONNECTION"]→只查分析版ana_catalog；["METALAKE","CONNECTION"]→合并返回 */
  CatalogSources?: string[];
}

declare interface ListCatalogsResponse {
  /** 操作结果 */
  Data?: ListCatalogsRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleGroupUsersRequest {
  /** 用户组 ID，可通过 ListConsoleGroups 接口获取 */
  GroupId: string;
  /** 用户名称或 UIN 模糊匹配 */
  UserKeyword?: string;
  /** 通过 UIN 批量查询用户信息 */
  UserUins?: string[];
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'Desc'}, {Name: 'UserName', Direction: 'Asc'}]，默认按创建时间降序 */
  OrderBys?: OrderBy[];
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大100 */
  PageSize?: number;
}

declare interface ListConsoleGroupUsersResponse {
  /** 返回结果 */
  Data?: ListConsoleGroupUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleGroupsRequest {
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大100 */
  PageSize?: number;
  /** 通过用户组ID批量查询；用户组ID可通过 ListConsoleGroups 接口获取 */
  GroupIds?: string[];
  /** 用户组名称模糊匹配 */
  GroupKeyword?: string;
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'Desc'}, {Name: 'UserName', Direction: 'Asc'}]，默认按创建时间降序 */
  OrderBys?: OrderBy[];
}

declare interface ListConsoleGroupsResponse {
  /** 返回结果 */
  Data?: ListConsoleGroupsRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleRolesRequest {
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大100 */
  PageSize?: number;
  /** 角色名称或描述模糊匹配 */
  RoleKeyword?: string;
}

declare interface ListConsoleRolesResponse {
  /** 返回结果 */
  Data?: ListConsoleRolesRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleUsersRequest {
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大100 */
  PageSize?: number;
  /** 用户名称与 UIN 模糊匹配 */
  UserKeyword?: string;
  /** 用于过滤角色关联的用户枚举值：2001： 控制台管理员2002： 控制台成员可通过 ListConsoleRoles 接口获取 */
  RoleIds?: string[];
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'Desc'}, {Name: 'UserName', Direction: 'Asc'}]，默认按创建时间降序 */
  OrderBys?: OrderBy[];
}

declare interface ListConsoleUsersResponse {
  /** 控制台用户列表 */
  Data?: ListConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListFilesRequest {
  /** 工作空间id */
  WorkspaceId: string;
  /** 父目录，不填默认查询根节点 */
  Parent?: FolderLocator;
  /** 按文件类型过滤 */
  FileTypes?: string[];
  /** 文件名模糊匹配 */
  NameKeyword?: string;
  /** 按所有者UIN过滤，多值为或关系 */
  OwnerUserUins?: string[];
  /** 是否只列出文件夹，默认 false */
  OnlyFolder?: boolean;
  /** 排序字段列表，如创建时间 [{Name: 'CreateTime', Direction: 'DESC'}]，文件名称 [{Name: 'Name', Direction: 'ASC'}] */
  OrderBys?: OrderBy[];
  /** 页码，默认1，最小值1 */
  PageNumber?: number;
  /** 每页条数，默认10，最小值10，最大值100取值范围：[10, 100] */
  PageSize?: number;
}

declare interface ListFilesResponse {
  /** 文件列表结果 */
  Data?: ListFilesRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSchemasRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 最大结果条数 */
  MaxResults?: number;
  /** 分页token */
  PageToken?: string;
  /** 数据获取选项，可选，控制是否返回权限信息及按权限过滤 */
  FetchOption?: FetchOption;
  /** 数据源连接ID，可选（融合版新增字段）。非空→走分析版路径，空/缺省→走专业版TcLake路径 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface ListSchemasResponse {
  /** 操作结果 */
  Data?: ListSchemasRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTablesRequest {
  /** 数据目录名 */
  CatalogName: string;
  /** 数据库名 */
  SchemaName: string;
  /** 调用时所在workspace唯一id */
  WorkspaceId: string;
  /** 最大结果条数 */
  MaxResults?: number;
  /** 分页token */
  PageToken?: string;
  /** 数据获取选项，可选，控制是否返回权限信息及按权限过滤 */
  FetchOption?: FetchOption;
  /** 数据源连接ID，可选（融合版新增字段）。非空→走分析版路径，空/缺省→走专业版TcLake路径 */
  ConnectionId?: string;
  /** 数据目录来源，可选（Setats融合新增字段）。取值：METALAKE（专业版tclake）/ CONNECTION（分析版Linked Catalog）/ SETATS（Setats元数据）。路由优先级：显式非空CatalogSource > 非空ConnectionId（视为CONNECTION）> 默认METALAKE；CatalogSource非空时ConnectionId将被忽略。 */
  CatalogSource?: string;
}

declare interface ListTablesResponse {
  /** 操作结果 */
  Data?: ListTablesRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowRunsRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number;
  /** 工作流ID，精确匹配。非必填，单值取值参考：ListWorkflows 返回值 Data */
  WorkflowId?: string;
  /** 工作流名称关键字，对 WorkflowName 做模糊匹配。非必填，单值 */
  WorkflowNameKeyword?: string;
  /** 运行创建时间下界，范围匹配（CreateTime >= 本值），单位：毫秒时间戳。非必填，单值，对应出参 WorkflowRun.CreateTime */
  CreateStartTime?: string;
  /** 运行创建时间上界，范围匹配（CreateTime <= 本值），单位：毫秒时间戳。非必填，单值，对应出参 WorkflowRun.CreateTime */
  CreateEndTime?: string;
  /** 运行状态，精确匹配。非必填，多选（多个值之间为 OR 关系）。运行状态。CREATE("初始化"), QUEUED("等待中"), PENDING("准备中"), RUNNING("运行中"), SKIPPED("跳过运行"), SUCCESS("成功"), FAILED("失败"), TERMINATING("终止中"), TERMINATED("终止"), CANCELLED("被手动终止")等 */
  RunStates?: string[];
  /** 错误码，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  ErrorCodeStrings?: string[];
  /** 运行人UIN，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  RunUserUins?: string[];
  /** 标签名称ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelKeyIds?: string[];
  /** 标签值ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelValueIds?: string[];
  /** 排序条件，多个之间按数组顺序表示优先级。非必填，默认按 CreateTime Desc。可排序字段白名单：CreateTime、EndTime、RunCostTime */
  OrderBys?: OrderBy[];
}

declare interface ListWorkflowRunsResponse {
  /** 工作流运行列表响应内容 */
  Data?: ListWorkflowRunsRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowTaskRunsRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 任务ID，可通过 ListWorkflowTasks 获取。非必填，精确匹配。与 WorkflowRunId 至少传一个：仅传 TaskId 时查询该任务的全部运行历史。 */
  TaskId?: string;
  /** 工作流运行ID，可通过 ListWorkflowRuns 获取。非必填，精确匹配。与 TaskId 至少传一个：仅传 WorkflowRunId 时查询该次工作流运行下的全部任务运行。 */
  WorkflowRunId?: string;
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number;
}

declare interface ListWorkflowTaskRunsResponse {
  /** 查询工作流任务历史运行列表响应内容 */
  Data?: ListWorkflowTaskRunsRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowsRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number;
  /** 工作流名称关键字，对 WorkflowName 做模糊匹配。非必填，单值 */
  WorkflowNameKeyword?: string;
  /** 工作流名称，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  WorkflowNames?: string[];
  /** 工作流ID，精确匹配。非必填，多选（多个值之间为 OR 关系）取值参考：ListWorkflows 返回值 Data */
  WorkflowIds?: string[];
  /** 工作流运行人UIN，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  RunUserUins?: string[];
  /** 标签名称ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelKeyIds?: string[];
  /** 标签值ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelValueIds?: string[];
  /** 快速筛选类型。非必填，单值，当前仅支持 MY_FAVORITE（我收藏的） */
  QuickSelectionType?: string;
  /** 排序条件，多个之间按数组顺序表示优先级。非必填。可排序字段白名单：CreateTime */
  OrderBys?: OrderBy[];
}

declare interface ListWorkflowsResponse {
  /** 查询工作流列表响应内容 */
  Data?: ListWorkflowsRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkspaceGroupUsersRequest {
  /** 工作空间id */
  WorkspaceId: string;
  /** 用户组ID，可通过 ListWorkspaceGroups 接口获取 */
  GroupId: string;
  /** 关键字，支持按用户名模糊搜索 */
  NameKeywords?: string;
  /** 用户UIN列表，按UIN精确筛选 */
  UserUins?: string[];
  /** "OrderBys": [{"Name": "CreateTime", "Direction": "DESC" }] */
  OrderBys?: OrderBy[];
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小取值范围：[1, 100]默认值：10 */
  PageSize?: number;
}

declare interface ListWorkspaceGroupUsersResponse {
  /** 返回结果 */
  Data?: ListWorkspaceGroupUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkspaceGroupsRequest {
  /** 工作空间ID */
  WorkspaceId: string;
  /** 通过用户组ID批量查询；用户组ID可通过 ListWorkspaceGroups 接口获取 */
  GroupIds?: string[];
  /** 用户组名称模糊匹配 */
  GroupKeyword?: string;
  /** 用于过滤角色关联的用户组；可通过 ListWorkspaceRoles 接口获取 */
  RoleIds?: string[];
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'Desc'}]；传入单个即单字段排序，默认按创建时间降序 */
  OrderBys?: OrderBy[];
  /** 页码，从1开始，默认1；小于1时按1处理 */
  PageNumber?: number;
  /** 每页大小，默认10，取值范围为 [1,100]，越界时自动收敛到边界值 */
  PageSize?: number;
  /** 用户组类型筛选。取值为枚举数值的字符串形式："0"=控制台系统类型（包含全部user）、"1"=控制台自定义类型、"2"=工作空间系统类型（包含工作空间全部user）、"3"=工作空间自定义类型 */
  GroupType?: string;
}

declare interface ListWorkspaceGroupsResponse {
  /** 工作空间用户组列表 */
  Data?: ListWorkspaceGroupsRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkspaceUsersRequest {
  /** 工作空间ID */
  WorkspaceId: string;
  /** 用户名称或 UIN 模糊匹配 */
  UserKeyword?: string;
  /** 角色ID列表，过滤角色关联的用户；可通过 ListWorkspaceRoles 接口获取 */
  RoleIds?: string[];
  /** 用户UIN列表，按UIN精确筛选 */
  UserUins?: string[];
  /** 排序字段列表，如 [{Name: CreateTime, Direction: DESC}]；传入单个即单字段排序，默认按创建时间降序 */
  OrderBys?: OrderBy[];
  /** 页码，默认1，从1开始；小于1时按1处理 */
  PageNumber?: number;
  /** 每页条数，默认10，取值范围为 [1,100]，越界时自动收敛到边界值 */
  PageSize?: number;
  /** 扩展信息（首次请求为空，翻页请求带响应中的ExtendInfo。连续翻页且item涉及权限过滤等场景，用于定位下次offset） */
  ExtendInfo?: string;
}

declare interface ListWorkspaceUsersResponse {
  /** 查询工作空间用户列表响应 */
  Data?: ListWorkspaceUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkspacesRequest {
  /** 工作空间ID精确匹配 */
  WorkspaceId?: string;
  /** 工作空间名称模糊匹配 */
  WorkspaceKeyword?: string;
  /** 工作空间状态过滤（多选）：0=未指定 1=创建中 2=创建失败 3=正常运行中 4=已删除 */
  StatusList?: number[];
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'Desc'}]；传入单个即单字段排序，默认按创建时间降序 */
  OrderBys?: OrderBy[];
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大100 */
  PageSize?: number;
  /** 工作空间地域过滤（多选），如 ap-guangzhou */
  WorkspaceRegion?: string[];
  /** 创建者UIN过滤（多选） */
  Creator?: string[];
}

declare interface ListWorkspacesResponse {
  /** 工作空间列表 */
  Data?: ListWorkspacesRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveConsoleUsersRequest {
  /** 必填，待移除的用户 UIN 列表，单次最多10个 */
  UserUins: string[];
}

declare interface RemoveConsoleUsersResponse {
  /** 批量移除控制台用户结果 */
  Data?: RemoveConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveWorkspaceGroupsRequest {
  /** 用户组ID列表，可通过 ListWorkspaceGroups 接口获取 */
  GroupIds: string[];
  /** 工作空间ID */
  WorkspaceId: string;
}

declare interface RemoveWorkspaceGroupsResponse {
  /** 移除工作空间用户组是否成功 */
  Data?: PlatformStatusRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RerunWorkflowRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 工作流运行ID，可通过 ListWorkflowRuns 获取。必填 */
  WorkflowRunId: string;
  /** 运行类型。必填。取值：1 普通运行，2 高级运行 */
  RunType: number;
  /** 运行类型为高级运行时填写的自定义运行参数 */
  AdvancedParams?: TaskSchedulingParameterBrief[];
  /** 本次需要重跑指定的任务ID集合，可通过 ListWorkflowTasks 获取，不传默认重跑该工作流下所有任务 */
  TaskIds?: string[];
  /** 计划调度时间列表配置 */
  ScheduledTimeConfig?: ScheduledTimeConfig;
}

declare interface RerunWorkflowRunResponse {
  /** 重跑工作流响应内容 */
  Data?: AsyncActionRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 运行类型。必填。取值：1 普通运行，2 高级运行 */
  RunType: number;
  /** 运行类型为高级运行时填写的自定义运行参数 */
  AdvancedParams?: TaskSchedulingParameterBrief[];
  /** 本次需要运行指定的任务ID集合，可通过 ListWorkflowTasks 获取，不传默认运行该工作流下所有任务 */
  TaskIds?: string[];
  /** 幂等令牌。非必填，相同令牌的重复请求只会触发一次运行 */
  IdempotencyToken?: string;
  /** 计划调度时间列表配置 */
  ScheduledTimeConfig?: ScheduledTimeConfig;
}

declare interface RunWorkflowResponse {
  /** 运行工作流响应内容 */
  Data?: AsyncActionRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartComputeRequest {
  /** 工作空间 ID */
  WorkspaceId: string;
  /** 计算资源 ID，可通过 ListComputes 接口获取（返回字段 Items[].BasicInfo.ResourceId）。替代已废弃的 ResourceId；过渡期 ComputeResourceId 与 ResourceId 至少传一个，同时传时必须一致 */
  ComputeResourceId?: string;
  /** [已废弃，请使用 ComputeResourceId] 计算资源 ID，可通过 ListComputes 接口获取（返回字段 Items[].BasicInfo.ResourceId） */
  ResourceId?: string;
}

declare interface StartComputeResponse {
  /** 启动计算资源返回结果 */
  Data?: StartComputeRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopComputeRequest {
  /** 工作空间 ID */
  WorkspaceId: string;
  /** 计算资源 ID，可通过 ListComputes 接口获取（返回字段 Items[].BasicInfo.ResourceId）。替代已废弃的 ResourceId；过渡期 ComputeResourceId 与 ResourceId 至少传一个，同时传时必须一致 */
  ComputeResourceId?: string;
  /** [已废弃，请使用 ComputeResourceId] 计算资源 ID，可通过 ListComputes 接口获取（返回字段 Items[].BasicInfo.ResourceId） */
  ResourceId?: string;
}

declare interface StopComputeResponse {
  /** 停止计算资源返回结果 */
  Data?: StopComputeRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindWorkflowBundleRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
}

declare interface UnbindWorkflowBundleResponse {
  /** 解绑工作流Bundle信息响应内容 */
  Data?: UnbindWorkflowBundleRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConsoleGroupRequest {
  /** 用户组 ID，可通过 ListConsoleGroups 接口获取 */
  GroupId: string;
  /** 修改标识：USER_GROUP_OPER_TYPE_ADD_USER(1)=添加成员、USER_GROUP_OPER_TYPE_DELETE_USER(2)=删除成员、USER_GROUP_OPER_TYPE_BASIC_INFO(3)=基础信息（别名和描述） */
  OperType: number;
  /** 用户组名称 */
  GroupName?: string;
  /** 用户组别名 */
  GroupNickname?: string;
  /** 用户组描述 */
  Description?: string;
  /** 成员 UIN 列表（OperType 为添加/删除成员时使用），单次最多100个 */
  UserUins?: string[];
}

declare interface UpdateConsoleGroupResponse {
  /** 返回结果 */
  Data?: UpdateConsoleGroupRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConsoleUsersRequest {
  /** 用户 UIN 列表，单次最多100个 */
  UserUins: string[];
  /** 角色 ID 列表枚举值：2001： 控制台管理员2002： 控制台成员可通过 ListConsoleRoles 接口获取 */
  RoleIds: string[];
}

declare interface UpdateConsoleUsersResponse {
  /** 返回结果 */
  Data?: UpdateConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件 ID。来源：CreateFile / ListFiles / GetFile 接口返回的 FileId */
  FileId: string;
  /** 文件运行配置。不传则不更新配置 */
  FileConfig?: FileConfig;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
  /** 绑定的 BundleId。来源：ListBundles 接口返回的 BundleId */
  BundleId?: string;
  /** 绑定的 BundleInfo，JSON 字符串 */
  BundleInfo?: string;
  /** 文件内容。不传则不更新内容 */
  Storage?: FileStorage;
  /** 目标文件名，非空且与当前文件名不同时执行 rename 动作。长度不超过 SCRIPT_NAME_MAX_LENGTH，禁止以 . 或 .. 开头/结尾，禁止空格、双点、控制字符及 Linux 保留名（参考 docs/linux_filename_rules.md）。与 ExtensionType 一起校验后缀合法性 */
  FileName?: string;
  /** 目标父目录路径，非空时执行 move 动作。根目录传 /；与 FileName 可同时出现，语义为「移动+重命名」。与 CreateFile 的 ParentFolderPath 保持一致 */
  ParentFolderPath?: string;
  /** 目标父目录的 FileType。取值：FOLDER、GIT_FOLDER。仅当 ParentFolderPath 非空时使用；缺省时按解析出的父目录实际类型处理 */
  TargetFileType?: string;
  /** 动作类型（选填，默认取值1，未来版本会强制校验）。取值：1 = UPDATE_CONTENT（仅更新 FileConfig / Storage / Bundle*，禁止传 FileName / ParentFolderPath / TargetFileType）；2 = RENAME（仅重命名，必须传 FileName，禁止传 ParentFolderPath / FileConfig / Storage / Bundle*）；3 = MOVE（仅移动，必须传 ParentFolderPath，禁止传 FileName / FileConfig / Storage / Bundle*）。参数互斥校验失败会返回 ParamIllegal 错误 */
  UpdateAction?: number;
}

declare interface UpdateFileResponse {
  /** 返回结果 */
  Data?: FileInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFolderRequest {
  /** 工作空间ID */
  WorkspaceId: string;
  /** 待更新文件夹 */
  Folder?: FolderLocator;
  /** 操作类型枚举值：1： 重命名2： 移动 */
  OperationType?: string;
  /** 重命名后的文件名，OperationType = 1时生效 */
  FolderName?: string;
  /** 移动的目的文件夹，OperationType = 2时生效 */
  TargetParent?: FolderLocator;
}

declare interface UpdateFolderResponse {
  /** 更新文件夹结果 */
  Data?: UpdateFolderRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 待更新的工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 需要清空的字段名列表，用于将指定字段重置为空 */
  FieldToRemoveList?: string[];
  /** 更新后的工作流配置，仅传入需要变更的部分即可 */
  NewSetting?: Workflow;
}

declare interface UpdateWorkflowResponse {
  /** 更新工作流响应内容 */
  Data?: UpdateWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkspaceGroupsRolesRequest {
  /** 用户组ID，可通过 ListWorkspaceGroups 接口获取 */
  GroupIds: string[];
  /** 工作空间ID */
  WorkspaceId: string;
  /** 角色ID，可通过 ListWorkspaceRoles 接口获取 */
  RoleIds: string[];
}

declare interface UpdateWorkspaceGroupsRolesResponse {
  /** 修改工作空间用户组角色是否成功 */
  Data?: PlatformStatusRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkspaceRequest {
  /** 工作空间ID */
  WorkspaceId: string;
  /** 工作空间名称，max_len=128 */
  WorkspaceName: string;
  /** 工作空间描述，max_len=300 */
  Description?: string;
}

declare interface UpdateWorkspaceResponse {
  /** 操作结果 */
  Data?: UpdateWorkspaceRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkspaceRoleRequest {
  /** 工作空间ID */
  WorkspaceId: string;
  /** 角色信息 */
  BasicInfo: RoleBasicInfo;
  /** 功能点权限 */
  Permissions?: RolePermission[];
}

declare interface UpdateWorkspaceRoleResponse {
  /** 更新工作空间角色结果 */
  Data?: UpdateWorkspaceRoleResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkspaceUsersRolesRequest {
  /** 用户ID */
  UserUins: string[];
  /** 工作空间ID */
  WorkspaceId: string;
  /** 角色ID，可通过 ListWorkspaceRoles 接口获取 */
  RoleIds: string[];
}

declare interface UpdateWorkspaceUsersRolesResponse {
  /** 结果 */
  Data?: PlatformStatusRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Databuddy 大数据智能体工作台DataBuddy} */
declare interface Databuddy {
  (): Versions;
  /** 添加控制台用户 {@link AddConsoleUsersRequest} {@link AddConsoleUsersResponse} */
  AddConsoleUsers(data: AddConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<AddConsoleUsersResponse>;
  /** 添加工作空间用户组 {@link AddWorkspaceGroupsRequest} {@link AddWorkspaceGroupsResponse} */
  AddWorkspaceGroups(data: AddWorkspaceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AddWorkspaceGroupsResponse>;
  /** 添加工作空间用户 {@link AddWorkspaceUsersRequest} {@link AddWorkspaceUsersResponse} */
  AddWorkspaceUsers(data: AddWorkspaceUsersRequest, config?: AxiosRequestConfig): AxiosPromise<AddWorkspaceUsersResponse>;
  /** 创建数据目录 {@link CreateCatalogRequest} {@link CreateCatalogResponse} */
  CreateCatalog(data: CreateCatalogRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCatalogResponse>;
  /** 创建控制台用户组 {@link CreateConsoleGroupRequest} {@link CreateConsoleGroupResponse} */
  CreateConsoleGroup(data: CreateConsoleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsoleGroupResponse>;
  /** 创建代码文件 {@link CreateFileRequest} {@link CreateFileResponse} */
  CreateFile(data: CreateFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileResponse>;
  /** 创建文件夹 {@link CreateFolderRequest} {@link CreateFolderResponse} */
  CreateFolder(data: CreateFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFolderResponse>;
  /** 创建Schema {@link CreateSchemaRequest} {@link CreateSchemaResponse} */
  CreateSchema(data: CreateSchemaRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSchemaResponse>;
  /** 创建工作流 {@link CreateWorkflowRequest} {@link CreateWorkflowResponse} */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** 创建工作空间 {@link CreateWorkspaceRequest} {@link CreateWorkspaceResponse} */
  CreateWorkspace(data: CreateWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceResponse>;
  /** 创建工作空间角色 {@link CreateWorkspaceRoleRequest} {@link CreateWorkspaceRoleResponse} */
  CreateWorkspaceRole(data: CreateWorkspaceRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceRoleResponse>;
  /** 删除catalog {@link DeleteCatalogRequest} {@link DeleteCatalogResponse} */
  DeleteCatalog(data: DeleteCatalogRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCatalogResponse>;
  /** 删除控制台用户组 {@link DeleteConsoleGroupsRequest} {@link DeleteConsoleGroupsResponse} */
  DeleteConsoleGroups(data: DeleteConsoleGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConsoleGroupsResponse>;
  /** 删除代码文件 {@link DeleteFileRequest} {@link DeleteFileResponse} */
  DeleteFile(data: DeleteFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileResponse>;
  /** 删除文件夹 {@link DeleteFolderRequest} {@link DeleteFolderResponse} */
  DeleteFolder(data: DeleteFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFolderResponse>;
  /** 删除schema {@link DeleteSchemaRequest} {@link DeleteSchemaResponse} */
  DeleteSchema(data: DeleteSchemaRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSchemaResponse>;
  /** 删除table {@link DeleteTableRequest} {@link DeleteTableResponse} */
  DeleteTable(data: DeleteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableResponse>;
  /** 删除工作流 {@link DeleteWorkflowRequest} {@link DeleteWorkflowResponse} */
  DeleteWorkflow(data: DeleteWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowResponse>;
  /** 删除工作空间 {@link DeleteWorkspaceRequest} {@link DeleteWorkspaceResponse} */
  DeleteWorkspace(data: DeleteWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkspaceResponse>;
  /** 删除工作空间角色 {@link DeleteWorkspaceRoleRequest} {@link DeleteWorkspaceRoleResponse} */
  DeleteWorkspaceRole(data: DeleteWorkspaceRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkspaceRoleResponse>;
  /** 查询catalog详情 {@link GetCatalogRequest} {@link GetCatalogResponse} */
  GetCatalog(data: GetCatalogRequest, config?: AxiosRequestConfig): AxiosPromise<GetCatalogResponse>;
  /** 获取代码文件详情 {@link GetFileRequest} {@link GetFileResponse} */
  GetFile(data: GetFileRequest, config?: AxiosRequestConfig): AxiosPromise<GetFileResponse>;
  /** 获取文件夹详情 {@link GetFolderRequest} {@link GetFolderResponse} */
  GetFolder(data: GetFolderRequest, config?: AxiosRequestConfig): AxiosPromise<GetFolderResponse>;
  /** 查询schema详情 {@link GetSchemaRequest} {@link GetSchemaResponse} */
  GetSchema(data: GetSchemaRequest, config?: AxiosRequestConfig): AxiosPromise<GetSchemaResponse>;
  /** 查询table详情 {@link GetTableRequest} {@link GetTableResponse} */
  GetTable(data: GetTableRequest, config?: AxiosRequestConfig): AxiosPromise<GetTableResponse>;
  /** 批量获取表的元数据 {@link GetTablesRequest} {@link GetTablesResponse} */
  GetTables(data: GetTablesRequest, config?: AxiosRequestConfig): AxiosPromise<GetTablesResponse>;
  /** 获取工作流详细信息 {@link GetWorkflowRequest} {@link GetWorkflowResponse} */
  GetWorkflow(data: GetWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkflowResponse>;
  /** 查询工作流运行详情 {@link GetWorkflowRunRequest} {@link GetWorkflowRunResponse} */
  GetWorkflowRun(data: GetWorkflowRunRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkflowRunResponse>;
  /** 查询任务运行详情 {@link GetWorkflowTaskRunRequest} {@link GetWorkflowTaskRunResponse} */
  GetWorkflowTaskRun(data: GetWorkflowTaskRunRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkflowTaskRunResponse>;
  /** 查询工作空间详情 {@link GetWorkspaceRequest} {@link GetWorkspaceResponse} */
  GetWorkspace(data: GetWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkspaceResponse>;
  /** 终止工作流的运行 {@link KillWorkflowRunRequest} {@link KillWorkflowRunResponse} */
  KillWorkflowRun(data: KillWorkflowRunRequest, config?: AxiosRequestConfig): AxiosPromise<KillWorkflowRunResponse>;
  /** 获取数据目录列表 {@link ListCatalogsRequest} {@link ListCatalogsResponse} */
  ListCatalogs(data: ListCatalogsRequest, config?: AxiosRequestConfig): AxiosPromise<ListCatalogsResponse>;
  /** 查询控制台用户组成员列表 {@link ListConsoleGroupUsersRequest} {@link ListConsoleGroupUsersResponse} */
  ListConsoleGroupUsers(data: ListConsoleGroupUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleGroupUsersResponse>;
  /** 查询控制台用户组列表 {@link ListConsoleGroupsRequest} {@link ListConsoleGroupsResponse} */
  ListConsoleGroups(data?: ListConsoleGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleGroupsResponse>;
  /** 查询控制台角色列表 {@link ListConsoleRolesRequest} {@link ListConsoleRolesResponse} */
  ListConsoleRoles(data?: ListConsoleRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleRolesResponse>;
  /** 查询控制台用户列表 {@link ListConsoleUsersRequest} {@link ListConsoleUsersResponse} */
  ListConsoleUsers(data?: ListConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleUsersResponse>;
  /** 获取文件夹和文件列表 {@link ListFilesRequest} {@link ListFilesResponse} */
  ListFiles(data: ListFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ListFilesResponse>;
  /** 查询schema列表 {@link ListSchemasRequest} {@link ListSchemasResponse} */
  ListSchemas(data: ListSchemasRequest, config?: AxiosRequestConfig): AxiosPromise<ListSchemasResponse>;
  /** 查询table列表 {@link ListTablesRequest} {@link ListTablesResponse} */
  ListTables(data: ListTablesRequest, config?: AxiosRequestConfig): AxiosPromise<ListTablesResponse>;
  /** 工作流运行列表 {@link ListWorkflowRunsRequest} {@link ListWorkflowRunsResponse} */
  ListWorkflowRuns(data: ListWorkflowRunsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowRunsResponse>;
  /** 查询工作流任务历史运行列表 {@link ListWorkflowTaskRunsRequest} {@link ListWorkflowTaskRunsResponse} */
  ListWorkflowTaskRuns(data: ListWorkflowTaskRunsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowTaskRunsResponse>;
  /** 查询工作流列表 {@link ListWorkflowsRequest} {@link ListWorkflowsResponse} */
  ListWorkflows(data: ListWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowsResponse>;
  /** 查询工作空间用户组用户列表 {@link ListWorkspaceGroupUsersRequest} {@link ListWorkspaceGroupUsersResponse} */
  ListWorkspaceGroupUsers(data: ListWorkspaceGroupUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkspaceGroupUsersResponse>;
  /** 查询工作空间用户组列表 {@link ListWorkspaceGroupsRequest} {@link ListWorkspaceGroupsResponse} */
  ListWorkspaceGroups(data: ListWorkspaceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkspaceGroupsResponse>;
  /** 查询工作空间用户列表 {@link ListWorkspaceUsersRequest} {@link ListWorkspaceUsersResponse} */
  ListWorkspaceUsers(data: ListWorkspaceUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkspaceUsersResponse>;
  /** 查询工作空间列表 {@link ListWorkspacesRequest} {@link ListWorkspacesResponse} */
  ListWorkspaces(data?: ListWorkspacesRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkspacesResponse>;
  /** 批量移除控制台用户 {@link RemoveConsoleUsersRequest} {@link RemoveConsoleUsersResponse} */
  RemoveConsoleUsers(data: RemoveConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveConsoleUsersResponse>;
  /** 移除工作空间用户组 {@link RemoveWorkspaceGroupsRequest} {@link RemoveWorkspaceGroupsResponse} */
  RemoveWorkspaceGroups(data: RemoveWorkspaceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveWorkspaceGroupsResponse>;
  /** 重跑工作流 {@link RerunWorkflowRunRequest} {@link RerunWorkflowRunResponse} */
  RerunWorkflowRun(data: RerunWorkflowRunRequest, config?: AxiosRequestConfig): AxiosPromise<RerunWorkflowRunResponse>;
  /** 运行工作流 {@link RunWorkflowRequest} {@link RunWorkflowResponse} */
  RunWorkflow(data: RunWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<RunWorkflowResponse>;
  /** 启动计算资源 {@link StartComputeRequest} {@link StartComputeResponse} */
  StartCompute(data: StartComputeRequest, config?: AxiosRequestConfig): AxiosPromise<StartComputeResponse>;
  /** 停止计算资源 {@link StopComputeRequest} {@link StopComputeResponse} */
  StopCompute(data: StopComputeRequest, config?: AxiosRequestConfig): AxiosPromise<StopComputeResponse>;
  /** 解绑工作流Bundle信息 {@link UnbindWorkflowBundleRequest} {@link UnbindWorkflowBundleResponse} */
  UnbindWorkflowBundle(data: UnbindWorkflowBundleRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindWorkflowBundleResponse>;
  /** 修改控制台用户组 {@link UpdateConsoleGroupRequest} {@link UpdateConsoleGroupResponse} */
  UpdateConsoleGroup(data: UpdateConsoleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConsoleGroupResponse>;
  /** 修改控制台用户角色 {@link UpdateConsoleUsersRequest} {@link UpdateConsoleUsersResponse} */
  UpdateConsoleUsers(data: UpdateConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConsoleUsersResponse>;
  /** 更新代码文件 {@link UpdateFileRequest} {@link UpdateFileResponse} */
  UpdateFile(data: UpdateFileRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFileResponse>;
  /** 更新文件夹（支持文件夹重命名、移动文件夹） {@link UpdateFolderRequest} {@link UpdateFolderResponse} */
  UpdateFolder(data: UpdateFolderRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFolderResponse>;
  /** 更新工作流 {@link UpdateWorkflowRequest} {@link UpdateWorkflowResponse} */
  UpdateWorkflow(data: UpdateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkflowResponse>;
  /** 修改工作空间 {@link UpdateWorkspaceRequest} {@link UpdateWorkspaceResponse} */
  UpdateWorkspace(data: UpdateWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkspaceResponse>;
  /** 更新工作空间用户组角色 {@link UpdateWorkspaceGroupsRolesRequest} {@link UpdateWorkspaceGroupsRolesResponse} */
  UpdateWorkspaceGroupsRoles(data: UpdateWorkspaceGroupsRolesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkspaceGroupsRolesResponse>;
  /** 更新工作空间角色 {@link UpdateWorkspaceRoleRequest} {@link UpdateWorkspaceRoleResponse} */
  UpdateWorkspaceRole(data: UpdateWorkspaceRoleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkspaceRoleResponse>;
  /** 修改工作空间用户角色 {@link UpdateWorkspaceUsersRolesRequest} {@link UpdateWorkspaceUsersRolesResponse} */
  UpdateWorkspaceUsersRoles(data: UpdateWorkspaceUsersRolesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkspaceUsersRolesResponse>;
}

export declare type Versions = ["2026-07-15"];

export default Databuddy;
