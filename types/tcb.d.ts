/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 合法域名 */
declare interface AuthDomain {
  /** 域名ID */
  Id?: string;
  /** 域名 */
  Domain?: string;
  /** 域名类型。包含以下取值：SYSTEMUSER */
  Type?: string;
  /** 状态。包含以下取值：ENABLEDISABLE */
  Status?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 云开发新套餐详情 */
declare interface BaasPackageInfo {
  /** DAU产品套餐ID */
  PackageName?: string;
  /** DAU套餐中文名称 */
  PackageTitle?: string;
  /** 套餐分组 */
  GroupName?: string;
  /** 套餐分组中文名 */
  GroupTitle?: string;
  /** json格式化计费标签，例如：{"pid":2, "cids":{"create": 2, "renew": 2, "modify": 2}, "productCode":"p_tcb_mp", "subProductCode":"sp_tcb_mp_cloudbase_dau"} */
  BillTags?: string;
  /** json格式化用户资源限制，例如：{"Qps":1000,"InvokeNum":{"TimeUnit":"m", "Unit":"万次", "MaxSize": 100},"Capacity":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "Cdn":{"Flux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "BackFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}},"Scf":{"Concurrency":1000,"OutFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100},"MemoryUse":{"TimeUnit":"m", "Unit":"WGBS", "MaxSize": 100000}}} */
  ResourceLimit?: string;
  /** json格式化高级限制，例如：{"CMSEnable":false,"ProvisionedConcurrencyMem":512000, "PictureProcessing":false, "SecurityAudit":false, "RealTimePush":false, "TemplateMessageBatchPush":false, "Payment":false} */
  AdvanceLimit?: string;
  /** 套餐描述 */
  PackageDescription?: string;
  /** 是否对外展示 */
  IsExternal?: boolean;
}

/** http访问服务客户端限频 */
declare interface CloudBaseClientQPSPolicy {
  /** UserID 或 ClientIP 或 None，如果为 None 代表不限制 */
  LimitBy?: string;
  /** 限制值 */
  LimitValue?: number;
}

/** tcb 网关API */
declare interface CloudBaseGWAPI {
  /** 服务ID */
  ServiceId?: string;
  /** API ID */
  APIId?: string;
  /** API Path */
  Path?: string;
  /** API 类型 */
  Type?: number;
  /** API 名 */
  Name?: string;
  /** API创建时间 */
  CreateTime?: number;
  /** 自定义值通用字段：Type为1时，该值为空。Type为2时，该值为容器的代理IP:PORT数组。 */
  Custom?: string;
  /** 表示是否开启认证 */
  EnableAuth?: boolean | null;
  /** 云开发环境ID */
  EnvId?: string | null;
  /** 访问类型（该参数暂不对外暴露） */
  AccessType?: number | null;
  /** 统一发布状态 */
  UnionStatus?: number | null;
  /** 域名（*表示所有域名） */
  Domain?: string | null;
  /** 是否有路径冲突 */
  ConflictFlag?: boolean | null;
  /** 域名状态 */
  DomainStatus?: number | null;
  /** 是否开启路径透传，默认true表示短路径，即不开启(已弃用) */
  IsShortPath?: boolean | null;
  /** 路径透传，默认0关闭，1开启，2关闭 */
  PathTransmission?: number | null;
  /** 跨域校验，默认0开启，1开启，2关闭 */
  EnableCheckAcrossDomain?: number | null;
  /** 静态托管文件目录 */
  StaticFileDirectory?: string | null;
  /** QPS策略 */
  QPSPolicy?: CloudBaseGWAPIQPSPolicy;
}

/** http访问服务路由qps策略 */
declare interface CloudBaseGWAPIQPSPolicy {
  /** qps限额总量 */
  QPSTotal?: number;
  /** 客户端限频，如果不限制，LimitBy=None */
  QPSPerClient?: CloudBaseClientQPSPolicy;
}

/** 网关服务 */
declare interface CloudBaseGWService {
  /** 服务ID */
  ServiceId?: string;
  /** 服务域名 */
  Domain?: string;
  /** 开启时间 */
  OpenTime?: number;
  /** 绑定状态，1 绑定中；2绑定失败；3绑定成功 */
  Status?: number | null;
  /** 是否被抢占, 被抢占表示域名被其他环境绑定了，需要解绑或者重新绑定。 */
  IsPreempted?: boolean | null;
  /** 是否开启多地域 */
  EnableRegion?: boolean | null;
  /** cdn CName地址 */
  Cname?: string | null;
  /** 统一域名状态 */
  UnionStatus?: number | null;
  /** CName状态 */
  CnameStatus?: number | null;
  /** 证书Id */
  CertId?: string | null;
  /** 是否强制https */
  ForceHttps?: boolean | null;
  /** icp黑名单封禁状态，0-未封禁，1-封禁 */
  IcpForbidStatus?: number | null;
  /** 自定义路由规则 */
  CustomRoutingRules?: string | null;
  /** 绑定类型，1绑定cdn，2源站，4自定义 */
  BindFlag?: number;
  /** TcbIngress源站cname */
  OriginCname?: string;
  /** 自定义cname */
  CustomCname?: string;
}

/** http service选项 */
declare interface CloudBaseOption {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** cls日志信息 */
declare interface ClsInfo {
  /** cls所属地域 */
  ClsRegion: string;
  /** cls日志集ID */
  ClsLogsetId: string;
  /** cls日志主题ID */
  ClsTopicId: string;
  /** 创建时间 */
  CreateTime: string;
}

/** TDSQL-C数据库详情 */
declare interface ClusterDetail {
  /** 是否开启公网访问 */
  IsOpenPubNetAccess?: boolean;
  /** 最大算力 */
  MaxCpu?: number | null;
  /** 最小算力 */
  MinCpu?: number | null;
  /** TDSQL-C集群状态 */
  Status?: string | null;
  /** 存储用量（单位：MB） */
  UsedStorage?: number | null;
  /** 最大存储量（单位：GB） */
  StorageLimit?: number | null;
  /** 数据库类型 */
  DbType?: string;
  /** 数据库类型 */
  DbVersion?: string;
  /** 公网访问状态；open开启，opening开启中，closed关闭，closing关闭中 */
  WanStatus?: string;
  /** 数据库集群状态 */
  ClusterStatus?: string | null;
  /** serverless状态 */
  ServerlessStatus?: string;
}

/** 本类型用于UpdateTable接口中描述待创建索引信息 */
declare interface CreateIndex {
  /** 索引名称 */
  IndexName?: string;
  /** 索引结构 */
  MgoKeySchema?: MgoKeySchema;
}

/** 开通Mysql 结果 */
declare interface CreateMySQLResult {
  /** 任务ID */
  TaskId?: string;
}

/** 创建用户返回结果 */
declare interface CreateUserResp {
  /** 用户ID */
  Uid?: string;
}

/** 数据库资源信息 */
declare interface DatabasesInfo {
  /** 数据库唯一标识 */
  InstanceId?: string;
  /** 状态。包含以下取值：INITIALIZING：资源初始化中RUNNING：运行中，可正常使用的状态UNUSABLE：禁用，不可用OVERDUE：资源过期 */
  Status?: string;
  /** 所属地域。当前支持ap-shanghai */
  Region?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 数据库连接器实例信息 */
declare interface DbInstance {
  /** 云开发环境ID */
  EnvId?: string;
  /** MySQL 连接器实例 ID；`"default"` 或为空表示使用 TCB 环境的默认连接器 */
  InstanceId?: string;
  /** 数据库名；为空时使用连接器配置的默认数据库名 */
  Schema?: string;
}

/** 删除tcb用户返回值 */
declare interface DeleteUsersResp {
  /** 成功个数 */
  SuccessCount?: number;
  /** 失败个数 */
  FailedCount?: number;
}

/** 查询开通Mysql结果 */
declare interface DescribeCreateMySQLResult {
  /** 状态 notexist | init | doing | success | fail */
  Status?: string;
  /** 失败原因 */
  FailReason?: string | null;
  /** 是否已被冻结（只在 Status=success时有效） */
  FreezeStatus?: boolean;
}

/** 查询用户返回结果 */
declare interface DescribeUserListResp {
  /** 用户总数 */
  Total?: number;
  /** 用户列表 */
  UserList?: User[];
}

/** 销毁 Mysql 结果 */
declare interface DestroyMySQLResult {
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 任务ID */
  TaskId?: string;
  /** 任务名 */
  TaskName?: string;
}

/** 本类型用于UpdateTable接口中描述待删除索引信息 */
declare interface DropIndex {
  /** 索引名称 */
  IndexName?: string;
}

/** 邮箱登录配置 */
declare interface EmailProviderConfig {
  /** smtp配置 */
  SmtpConfig?: EmailSmtpConfig;
  /** 可选：TRUE，FALSE，如果On为TRUE，则表示采用默认代发。 */
  On?: string;
}

/** 邮箱smtp配置 */
declare interface EmailSmtpConfig {
  /** 邮件发送者的邮箱地址，即收件人看到的发件人地址。需为有效的邮箱格式，且须与 SMTP 服务器的授权账号一致，否则可能被邮件服务商拒绝发送。例如：abc@example.com */
  SenderAddress?: string;
  /** SMTP 邮件服务器的域名或 IP 地址，用于建立邮件发送连接。不同邮件服务商的 SMTP 地址不同，例如 QQ 邮箱为 smtp.qq.com，Gmail 为 smtp.gmail.com，请以实际服务商提供的地址为准。 */
  ServerHost?: string;
  /** SMTP 邮件服务器的端口号，需与所选安全模式（SecurityMode）匹配。常用端口：465（SSL 加密）、587（STARTTLS 加密）、25（无加密，不推荐）。建议优先使用 465 或 587 以保障传输安全。 */
  ServerPort?: number;
  /** SMTP 服务器的登录账号，通常为发件人的完整邮箱地址。部分邮件服务商支持使用独立的 SMTP 授权账号，请以实际服务商的要求为准。 */
  AccountUsername?: string;
  /** SMTP 服务器的登录密码。注意：部分邮件服务商（如 QQ 邮箱、163 邮箱）不支持直接使用账号登录密码，需在邮箱设置中开启 SMTP 服务并生成专用的授权码，请以实际服务商的要求为准。 */
  AccountPassword?: string;
  /** SMTP 连接的加密模式，用于保障邮件传输安全。可选值：AUTO（自动选择，优先使用安全连接）、SSL（全程 SSL/TLS 加密，通常配合端口 465 使用）、STARTSSL（通过 STARTTLS 命令升级为加密连接，通常配合端口 587 使用）、NO_SSL（不使用加密，仅建议在内网或测试环境中使用）。推荐使用 AUTO 或 SSL 以确保传输安全。 */
  SecurityMode?: string;
}

/** 环境计费信息 */
declare interface EnvBillingInfoItem {
  /** 环境ID */
  EnvId?: string;
  /** tcb产品套餐ID，参考DescribePackages接口的返回值。 */
  PackageId?: string;
  /** 自动续费标记 */
  IsAutoRenew?: boolean;
  /** 状态。包含以下取值： 空字符串：初始化中 NORMAL：正常 ISOLATE：隔离 */
  Status?: string;
  /** 支付方式。包含以下取值： PREPAYMENT：预付费 POSTPAID：后付费 */
  PayMode?: string;
  /** 隔离时间，最近一次隔离的时间 */
  IsolatedTime?: string;
  /** 过期时间，套餐即将到期的时间 */
  ExpireTime?: string;
  /** 创建时间，第一次接入计费方案的时间。 */
  CreateTime?: string;
  /** 更新时间，计费信息最近一次更新的时间。 */
  UpdateTime?: string;
  /** true表示从未升级过付费版。 */
  IsAlwaysFree?: boolean;
  /** 付费渠道。 miniapp：小程序 qcloud：腾讯云 */
  PaymentChannel?: string;
  /** 最新的订单信息 */
  OrderInfo?: OrderInfo;
  /** 免费配额信息。 */
  FreeQuota?: string;
  /** 是否开启 `超过套餐额度部分转按量付费` */
  EnableOverrun?: boolean;
  /** 环境套餐类型 */
  ExtPackageType?: string;
  /** 是否付费期环境，可取值：yes/no。 */
  EnvCharged?: string;
  /** 是否已激活，可取值：yes/no。 */
  EnvActivated?: string;
}

/** 环境信息 */
declare interface EnvInfo {
  /** 账户下该环境唯一标识 */
  EnvId?: string;
  /** 环境来源。包含以下取值：miniapp：微信小程序qcloud ：腾讯云 */
  Source?: string;
  /** 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符 */
  Alias?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后修改时间 */
  UpdateTime?: string;
  /** 环境状态。包含以下取值：NORMAL：正常可用UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中 */
  Status?: string;
  /** 数据库列表 */
  Databases?: DatabasesInfo[];
  /** 存储列表 */
  Storages?: StorageInfo[];
  /** 函数列表 */
  Functions?: FunctionInfo[];
  /** tcb产品套餐ID，参考DescribePackages接口的返回值。 */
  PackageId?: string;
  /** 套餐中文名称，参考DescribePackages接口的返回值。 */
  PackageName?: string;
  /** 云日志服务列表 */
  LogServices?: LogServiceInfo[];
  /** 静态资源信息 */
  StaticStorages?: StaticStorageInfo[];
  /** 是否到期自动降为免费版 */
  IsAutoDegrade?: boolean;
  /** 环境渠道 */
  EnvChannel?: string;
  /** 支付方式。包含以下取值： prepayment：预付费 postpaid：后付费 */
  PayMode?: string;
  /** 是否为默认环境 */
  IsDefault?: boolean;
  /** 环境所属地域 */
  Region?: string;
  /** 环境标签列表 */
  Tags?: Tag[];
  /** 自定义日志服务 */
  CustomLogServices?: ClsInfo[];
  /** 环境类型：baas, run, hoting, weda */
  EnvType?: string;
  /** 是否是dau新套餐 */
  IsDauPackage?: boolean;
  /** 套餐类型:空\baas\tcbr */
  PackageType?: string;
  /** 架构类型 */
  ArchitectureType?: string;
  /** 回收标志，默认为空 */
  Recycle?: string;
}

/** 函数的信息 */
declare interface FunctionInfo {
  /** 命名空间 */
  Namespace?: string;
  /** 所属地域。当前支持ap-shanghai */
  Region?: string;
}

/** 扩缩容策略 */
declare interface HpaPolicy {
  /** 策略类型 */
  PolicyType?: string;
  /** 策略阈值 */
  PolicyThreshold?: number;
}

/** 索引命中信息 */
declare interface IndexAccesses {
  /** 索引命中次数 */
  Ops?: number | null;
  /** 命中次数从何时开始计数 */
  Since?: string | null;
}

/** 索引信息 */
declare interface IndexInfo {
  /** 索引名称 */
  Name?: string | null;
  /** 索引大小，单位: 字节 */
  Size?: number | null;
  /** 索引键值 */
  Keys?: Indexkey[] | null;
  /** 索引使用信息 */
  Accesses?: IndexAccesses | null;
  /** 是否为唯一索引 */
  Unique?: boolean | null;
}

/** 索引的key值 */
declare interface Indexkey {
  /** 键名 */
  Name?: string;
  /** 方向：specify 1 for ascending or -1 for descending */
  Direction?: string;
}

/** 键值对 */
declare interface KVPair {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 可以为每种语言配置一个字符串。比如：name，中文展示为：名字，英文展示为 name，韩文展示为：이름 */
declare interface LocalizedMessage {
  /** 默认展示的文本 */
  Message: string;
  /** 针对每种语言展示的文字 */
  Localized?: MessageLocalized[];
}

/** CLS日志单条信息 */
declare interface LogObject {
  /** 日志属于的 topic ID */
  TopicId?: string;
  /** 日志主题的名字 */
  TopicName?: string;
  /** 日志时间 */
  Timestamp?: string;
  /** 日志内容 */
  Content?: string;
  /** 采集路径 */
  FileName?: string;
  /** 日志来源设备 */
  Source?: string;
}

/** CLS日志结果 */
declare interface LogResObject {
  /** 获取更多检索结果的游标 */
  Context?: string;
  /** 搜索结果是否已经全部返回 */
  ListOver?: boolean;
  /** 日志内容信息 */
  Results?: LogObject[];
  /** 日志聚合结果 */
  AnalysisRecords?: string[];
}

/** 云日志服务相关信息 */
declare interface LogServiceInfo {
  /** log名 */
  LogsetName?: string;
  /** log-id */
  LogsetId?: string;
  /** topic名 */
  TopicName?: string;
  /** topic-id */
  TopicId?: string;
  /** cls日志所属地域 */
  Region?: string;
  /** topic保存时长 默认7天 */
  Period?: number;
}

/** 多因子认证登录配置，用于管理 MFA（Multi-Factor Authentication）相关设置。包括 MFA 总开关、短信验证、邮箱验证、强制绑定手机号、TOTP 动态验证码等认证方式的独立开关配置。当 MFA 总开关（On）开启时，用户在登录后需完成额外的身份验证步骤。各子开关可独立控制具体的验证方式。不传则不修改当前配置。 */
declare interface MFALoginConfig {
  /** MFA 多因子认证开关。取值范围：TRUE：开启 MFA 多因子认证FALSE：关闭 MFA 多因子认证不传则不修改当前配置。 */
  On?: string | null;
  /** 短信验证开关，控制是否在 MFA 流程中启用短信验证码校验。取值范围：TRUE：开启短信验证FALSE：关闭短信验证不传则不修改当前配置。 */
  Sms?: string | null;
  /** 邮箱验证开关，控制是否在 MFA 流程中启用邮箱验证码校验。取值范围：TRUE：开启邮箱验证FALSE：关闭邮箱验证不传则不修改当前配置。 */
  Email?: string | null;
  /** 强制绑定手机号开关，控制用户在完成 MFA 认证前是否必须绑定手机号。取值范围：TRUE：要求绑定手机号FALSE：不要求绑定手机号不传则不修改当前配置。 */
  RequiredBindPhone?: string | null;
}

/** 多语言文字，在 Locale 中 展示的 Message */
declare interface MessageLocalized {
  /** 字符串 */
  Message: string;
  /** 在该语言中 */
  Locale: string;
}

/** 待执行命令 */
declare interface MgoCommandParam {
  /** 表名 */
  TableName: string;
  /** 操作类型，可选类型为：UPDATE/QUERY/INSERT/DELETE/COMMAND，本操作必须按实际填写，监控会依赖该字段统计本次操作的类型，并实时减少用户配额，如果填写错误会误扣用户请求配额 */
  CommandType: string;
  /** 待执行命令 */
  Command: string;
}

/** 本类型用于UpdateTable接口中描述待创建索引信息 */
declare interface MgoIndexKeys {
  /** 无 */
  Name?: string;
  /** 无 */
  Direction?: string;
}

/** 本类型用于接口中描述待创建索引结构 */
declare interface MgoKeySchema {
  /** 索引字段 */
  MgoIndexKeys?: MgoIndexKeys[];
  /** 是否唯一索引 */
  MgoIsUnique?: boolean;
  /** 是否稀疏索引 */
  MgoIsSparse?: boolean;
}

/** 修改用户返回值 */
declare interface ModifyUserResp {
  /** 是否成功 */
  Success?: boolean;
}

/** MongoDB连接器配置 */
declare interface MongoConnector {
  /** 连接器实例ID */
  InstanceId?: string;
  /** MongoDB数据库名 */
  DatabaseName?: string;
}

/** MySql 集群详情 */
declare interface MySQLClusterDetail {
  /** 集群ID */
  DbClusterId?: string;
  /** 网络详情 */
  NetInfo?: MySQLNetDetail;
  /** 数据库详情 */
  DbInfo?: ClusterDetail;
}

/** TDSQL-C网络信息类型 */
declare interface MySQLNetDetail {
  /** 内网地址 */
  PrivateNetAddress?: string | null;
  /** 外网地址 */
  PubNetAddress?: string | null;
  /** 网络信息（VPCID/SubnetID） */
  Net?: string | null;
  /** 是否开通公网 */
  PubNetAccessEnabled?: boolean;
  /** vpc id */
  VpcId?: string;
  /** vpc name */
  VpcName?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 子网名 */
  SubnetName?: string;
}

/** MySql 任务状态 */
declare interface MySQLTaskStatus {
  /** SUCCESS | FAILED | PENDING */
  Status?: string;
  /** 状态描述 */
  StatusDesc?: string;
}

/** 订单信息 */
declare interface OrderInfo {
  /** 订单号 */
  TranId?: string;
  /** 订单要切换的套餐ID */
  PackageId?: string;
  /** 订单类型1 购买2 续费3 变配 */
  TranType?: string;
  /** 订单状态。1未支付2 支付中3 发货中4 发货成功5 发货失败6 已退款7 已取消100 已删除 */
  TranStatus?: string;
  /** 订单更新时间 */
  UpdateTime?: string;
  /** 订单创建时间 */
  CreateTime?: string;
  /** 付费模式.prepayment 预付费postpaid 后付费 */
  PayMode?: string;
  /** 订单绑定的扩展ID */
  ExtensionId?: string;
  /** 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化) */
  ResourceReady?: string;
  /** 安装标记。建议使用方统一转大小写之后再判断。QuickStart：快速启动来源Activity：活动来源 */
  Flag?: string;
  /** 下单时的参数 */
  ReqBody?: string;
}

/** 分页信息 */
declare interface Pager {
  /** 分页偏移量 */
  Offset?: number | null;
  /** 每页返回记录数 */
  Limit?: number | null;
  /** 文档集合总数 */
  Total?: number | null;
}

/** 登录配置中密码更新配置策略，用于管理使用用户名密码登录方式时，密码的过期策略和更新策略。例如，首次登录需要更新密码、定期过期密码等策略。 */
declare interface PasswordUpdateLoginConfig {
  /** 首次登录强制修改密码开关。开启后，用户首次登录时将强制要求修改密码。 */
  FirstLoginUpdate?: boolean | null;
  /** 定期强制修改密码开关。开启后，用户需按照 PeriodValue 和 PeriodType 指定的周期定期修改密码，超过周期未修改将在登录时强制要求修改。 */
  PeriodUpdate?: boolean | null;
  /** 定期修改密码的周期数值，与 PeriodType 配合使用。例如 PeriodValue 为 6，PeriodType 为 MONTH，表示每 6 个月需修改一次密码。当 PeriodUpdate 为 true 时必填。 */
  PeriodValue?: number | null;
  /** 定期修改密码的周期时间单位，与 PeriodValue 配合使用。取值范围：WEEK：周MONTH：月YEAR：年当 PeriodUpdate 为 true 时必填。 */
  PeriodType?: string | null;
}

/** FlexDB数据库权限信息 */
declare interface PermissionInfo {
  /** "READONLY", //公有读，私有写。所有用户可读，仅创建者及管理员可写 "PRIVATE", //私有读写，仅创建者及管理员可读写 "ADMINWRITE", //所有用户可读，仅管理员可写 "ADMINONLY", //仅管理员可操作 "CUSTOM", // 安全规则 */
  AclTag: string;
  /** 云开发环境ID */
  EnvId: string;
  /** 自定义规则 */
  Rule?: string;
}

/** 身份源配置信息。描述云开发环境下用户登录身份源的完整配置，定义了用户通过何种方式进入系统并完成身份认证。支持多种类型：包括标准协议身份源（OAuth 2.0、OIDC、SAML 2.0）、内置身份源（邮箱登录、自定义登录）以及通过插件机制扩展的身份源（如 CAS）。每个身份源包含认证配置、启用状态、用户自动注册策略、信息透传模式等核心属性，是登录认证流程的核心数据结构。 */
declare interface Provider {
  /** 身份源的唯一标识符，用于在系统内区分不同的身份源。格式要求：2~32 位，仅支持小写英文字母和数字，不可包含空格或特殊字符。创建后不可修改 */
  Id: string;
  /** 身份源的安全认证配置，包含与第三方平台对接所需的核心参数，如 ClientId、ClientSecret、授权端点、Token 端点、回调地址、Scope 等。不同 ProviderType 对应不同的配置项。CUSTOM 类型无需手动配置（系统自动填充），OIDC 类型会根据 Issuer 自动补全端点信息，SAML 类型需提供 SamlMetadata（最大 10KB） */
  Config: ProviderConfig;
  /** 身份源的显示名称，支持国际化多语言配置。用户在登录页面看到的身份源名称将使用该字段，建议根据实际业务场景填写易于识别的名称。未传入时默认使用 Id 值作为显示名称 */
  Name?: LocalizedMessage;
  /** 身份源图标的访问地址，将展示在登录页的身份源按钮上。建议使用 64×64 像素的 SVG 格式图片以保证清晰度，支持 HTTP/HTTPS 公网可访问的图片链接 */
  Picture?: string | null;
  /** 身份源对应的官方主页地址。该信息将在用户查看自己的第三方账号绑定列表时展示，帮助用户识别已绑定的身份源来源。例如 GitHub 身份源可填写：https://github.com */
  Homepage?: string | null;
  /** 身份源协议类型，决定该身份源使用何种认证协议与第三方平台对接。可选值：OAUTH（标准 OAuth 2.0 协议）、OIDC（OpenID Connect 协议）、SAML（SAML 2.0 协议）、CUSTOM（自定义登录，使用 RSA 密钥对签名验证）、EMAIL（邮箱登录，需配合 EmailConfig 使用） */
  ProviderType?: string | null;
  /** 控制第三方身份源登录时是否自动注册系统用户。可选值：TRUE（始终自动注册，无论第三方返回的用户信息是否包含手机号或邮箱）、FALSE（不自动注册，需用户手动绑定）、UNSPECIFIED（默认行为：仅当第三方身份源返回的用户信息中包含手机号或邮箱时才自动注册，否则登录完成后要求用户绑定手机号方可继续使用）。注意：企业微信类型（WX_WORK_AGENT/WX_WORK_INTERNAL/WX_WORK_THIRD_PARTY/WX_WORK_THIRD_PARTY_ASSOCIATION）和微信小程序类型（WX_MICRO_APP/WX_QRCODE_MICRO_APP/WX_OPEN）在 UNSPECIFIED 时会自动设为 TRUE。当 TransparentMode 为 TRUE 时，该字段将被强制设为 FALSE */
  AutoSignUpWithProviderUser?: string | null;
  /** 身份源的启用状态。可选值：TRUE（启用，用户可通过该身份源登录）、FALSE（禁用，已有绑定关系不受影响）。未传入时默认为 TRUE（启用） */
  On?: string | null;
  /** 身份源的详细描述信息，支持国际化多语言配置。可用于向用户说明该身份源的用途或使用场景。 */
  Description?: LocalizedMessage | null;
  /** 是否开启信息透传模式。可选值：TRUE（仅登录模式：平台不持久化存储用户数据，仅将第三方身份源返回的用户信息透传给业务方，适用于不希望平台留存用户数据的场景）、FALSE（登录且注册模式：平台正常注册并存储用户信息，默认值）。注意：开启透传模式时，AutoSignUpWithProviderUser 将被强制设为 FALSE；若 ReuseUserId 为 UNSPECIFIED，将被自动设为 TRUE。 */
  TransparentMode?: string | null;
  /** 是否直接复用第三方身份源返回的用户标识（如 OpenID、UnionID 等）作为平台用户 ID。可选值：TRUE（开启，平台用户 ID 将直接使用第三方身份源返回的用户标识，适用于已有用户体系迁移场景）、FALSE（关闭，由平台生成独立用户 ID）。注意：开启后需确保第三方用户标识的全局唯一性，避免 ID 冲突。当 TransparentMode 为 TRUE 且该字段为 UNSPECIFIED 时，将被自动设为 TRUE */
  ReuseUserId?: string | null;
  /** 邮箱身份源的专项配置，仅当 ProviderType 为 EMAIL 时有效且必填。包含邮件服务商、发件人地址、SMTP 配置等参数，用于支持通过邮箱验证码方式进行身份认证。支持两种模式：自有 SMTP 服务器（需填写完整的 SMTP 配置）和平台代发（EmailConfig.On 设为 TRUE 时由平台随机分配 SMTP 服务器） */
  EmailConfig?: EmailProviderConfig | null;
  /** 是否开启邮箱自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE）。开启后，若第三方身份源返回的邮箱与系统中已有用户的邮箱一致，则自动将该第三方账号与已有用户关联绑定并完成登录，无需用户手动绑定 */
  AutoSignInWhenEmailMatch?: string | null;
  /** 是否开启手机号自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认行为等同于 TRUE，即默认开启）。开启后，若第三方身份源返回的手机号与系统中已有用户的手机号一致，则自动将该第三方账号与已有用户关联绑定并完成登录，无需用户手动绑定 */
  AutoSignInWhenPhoneNumberMatch?: string | null;
}

/** 身份认证源协议连接配置。包含 OAuth 2.0 / OIDC 协议端点（授权端点、令牌端点、用户信息端点、JWKS 端点等）、客户端凭证（ClientId、ClientSecret）、SAML 元数据、请求与响应参数的字段映射等配置信息。OIDC 类型的认证源字段定义参考 https://openid.net/specs/openid-connect-discovery-1_0.html 规范。 */
declare interface ProviderConfig {
  /** 身份提供方的唯一标识符（Issuer URL），用于验证 ID Token 中的 iss 字段。仅当 ProviderType 为 OIDC 时需要填写，值通常为第三方 OIDC 服务的根地址，例如：https://accounts.google.com。填写后平台将自动通过 /.well-known/openid-configuration 发现并填充 AuthorizationEndpoint、TokenEndpoint、UserinfoEndpoint、JwksUri 等端点地址。详情参考 OpenID Connect Discovery 标准。 */
  Issuer?: string | null;
  /** 第三方身份提供方的 JSON Web Key Set 地址，用于获取公钥以验证 ID Token 签名。仅当 ProviderType 为 OIDC 时需要填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OpenID Connect Discovery 标准。 */
  JwksUri?: string | null;
  /** 在第三方身份提供方注册的应用客户端 ID，用于标识当前接入应用。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，可在对应平台的开发者控制台中获取。详情参考 OAuth 2.0 标准。 */
  ClientId?: string | null;
  /** 在第三方身份提供方注册的应用客户端密钥，与 ClientId 配合使用，用于在 Token 端点进行身份验证。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，请妥善保管，避免泄露。详情参考 OAuth 2.0 标准。 */
  ClientSecret?: string | null;
  /** OAuth 授权完成后第三方平台回调的地址，需与在第三方平台注册的回调地址完全一致，否则授权将失败。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，并需在对应平台的开发者控制台中配置该地址为合法回调地址。详情参考 OAuth 2.0 标准。 */
  RedirectUri?: string | null;
  /** 向第三方身份提供方申请的权限范围，多个 scope 之间用空格分隔。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，OIDC 场景下通常至少包含 openid，如需获取用户邮箱或手机号可追加 email、phone 等。若已填写 Issuer 且未指定 Scope，将自动使用 OpenID Connect Discovery 返回的 scopes_supported。详情参考 OAuth 2.0 标准。 */
  Scope?: string | null;
  /** 第三方身份提供方的授权端点地址，用于发起 OAuth/OIDC 授权请求，引导用户跳转至第三方登录页面。当 ProviderType 为 OIDC 或 OAUTH 时必须填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OAuth 2.0 / OIDC 标准。 */
  AuthorizationEndpoint?: string | null;
  /** 第三方身份提供方的 Token 端点地址，用于通过授权码（code）换取 Access Token 和 ID Token。当 ProviderType 为 OIDC 或 OAUTH 时必须填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OAuth 2.0 / OIDC 标准。 */
  TokenEndpoint?: string | null;
  /** 第三方身份提供方的用户信息端点地址，用于通过 Access Token 获取用户的基本信息（如昵称、头像、邮箱等）。当 ProviderType 为 OIDC 或 OAUTH 且需要获取用户详细信息时填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OIDC 标准。 */
  UserinfoEndpoint?: string | null;
  /** OAuth/OIDC 授权请求的响应类型，决定授权端点返回的内容。可选值：code（授权码模式，推荐）、token（隐式模式，直接返回 Access Token）、id_token（直接返回 ID Token）。当 ProviderType 为 OIDC 时默认使用 id_token，其他类型默认使用 code。当 ProviderType 为 OIDC 或 OAUTH 时可选填写。详情参考 OAuth 2.0 / OIDC 标准。 */
  ResponseType?: string | null;
  /** 第三方身份提供方的单点退出端点地址。配置后，用户退出当前应用时将被跳转至该地址，使第三方 IDP 的登录态也一并失效，实现单点退出（SLO）。适用于 OIDC、OAUTH、SAML 等所有支持单点退出的身份源类型。不填则退出时仅清除本平台登录态。 */
  SignoutEndpoint?: string | null;
  /** Token 端点的客户端身份验证方式，决定请求 Token 时如何传递 ClientId 和 ClientSecret。可选值：CLIENT_SECRET_POST（将凭证放在请求 Body 中传递）、CLIENT_SECRET_BASIC（将凭证通过 HTTP Basic Auth Header 传递）。当 ProviderType 为 OIDC 或 OAUTH 时可选填写，默认使用 CLIENT_SECRET_POST。详情参考 OIDC 标准。 */
  TokenEndpointAuthMethod?: string | null;
  /** SAML 身份提供方的 Metadata XML 内容，包含 IDP 的实体 ID、SSO 端点地址、签名证书等关键信息，平台将据此完成 SAML 协议的对接配置。仅当 ProviderType 为 SAML 时可填写，通常可从第三方 IDP 的管理控制台中下载获取。详情参考 SAML 2.0 标准。 */
  SamlMetadata?: string;
  /** 请求参数映射配置，用于处理非标准 OAuth 协议的参数转换。默认情况下平台严格遵循 OAuth 2.0 标准进行参数传递，若对接的第三方平台（如微信、企业微信等）使用了非标准的参数名称或传参方式，可通过该字段配置自定义的参数映射规则，以确保请求参数与第三方平台的要求一致。 */
  RequestParametersMap?: ProviderRequestParametersMap | null;
  /** 响应参数映射配置，用于处理非标准 OAuth 协议的响应参数转换。默认情况下平台严格遵循 OAuth 2.0 标准解析响应参数，若对接的第三方平台（如微信、企业微信等）返回了非标准的字段名称或数据结构，可通过该字段配置自定义的响应参数映射规则，将第三方返回的字段映射为平台标准字段。 */
  ResponseParametersMap?: ProviderResponseParametersMap | null;
}

/** 三方认证入参映射。如果您的对接方不标准，则可以使用这个参数。默认情况下，该参数可以为空。比如：github,google,apple 接入，这些参数为空，但是国内的腾讯，新浪等则需要配置该参数。原因主要是：腾讯等公司在实现oauth时，未能完全遵循oauth标准。 */
declare interface ProviderRequestParametersMap {
  /** OAuth 标准协议中的 client_id。不同第三方平台的字段名称可能不同，例如微信平台对应 appid、新浪微博对应 app_id。 */
  ClientId?: string;
  /** OAuth 标准协议中的 client_secret，用于身份认证源的密钥鉴权。请妥善保管，避免泄露。 */
  ClientSecret?: string;
  /** OAuth 标准协议中的 redirect_uri，即授权回调地址。用户完成第三方认证后将重定向至该地址。 */
  RedirectUri?: string;
  /** 身份源注册用户时自动绑定的角色 ID。配置后，通过该身份源注册的新用户将自动关联指定角色。 */
  RegisterUserRoleId?: string;
  /** 身份源注册用户时是否自动授予许可证。取值范围：TRUE：自动授权许可证FALSE：不自动授权（默认值） */
  RegisterUserAutoLicense?: string;
  /** OAuth 获取 Token 时认证信息的请求位置。取值范围：URL：将认证信息放在请求 URL 参数中Headers：将认证信息放在请求 Header 中Body：将认证信息放在请求 Body 中 */
  AuthPosition?: string;
  /** OAuth 授权模式匹配的参数字段名。用于指定获取 Token 请求中 grant_type 参数对应的字段名称。 */
  GrantType?: string;
  /** OAuth 授权模式类型。用于指定 grant_type 的值，例如 client_credentials 表示客户端凭证模式。 */
  ClientCredentials?: string;
  /** OAuth 返回中 access_token 的映射字段名。若第三方平台返回的 Token 字段名不是标准的 access_token，可通过此字段指定实际字段名。 */
  AccessToken?: string;
  /** OAuth 返回中 Token 有效期的映射字段名。若第三方平台返回的有效期字段名不是标准的 expires_in，可通过此字段指定实际字段名。 */
  ExpiresIn?: string;
  /** 身份源注册用户时的用户类型。取值范围：externalUser：外部用户internalUser：内部用户默认值为 externalUser。 */
  RegisterUserType?: string;
}

/** 三方认证出参映射。如果您的对接方不标准，则可以使用这个参数。默认情况下，该参数可以为空。比如：microsoft, github,google,apple 接入，这些参数为空，但是国内的腾讯，新浪等则需要配置该参数。原因主要是：腾讯等公司在实现oauth时，未能完全遵循oauth标准。 */
declare interface ProviderResponseParametersMap {
  /** 用户唯一标识（sub）的映射字段名。对应 OIDC 标准中的 sub 字段，值为第三方平台返回的用户信息 JSON 中表示用户 ID 的字段路径。例如github平台填sub。 */
  Sub?: string | null;
  /** 用户名称（name）的映射字段名。对应 OIDC 标准中的 name 字段，值为第三方平台返回的用户信息 JSON 中表示用户昵称或姓名的字段路径。例如github平台填 name。 */
  Name?: string | null;
  /** 用户头像（picture）的映射字段名。对应 OIDC 标准中的 picture 字段，值为第三方平台返回的用户信息 JSON 中表示用户头像 URL 的字段路径。需要公网可访问的url。 */
  Picture?: string | null;
  /** 用户登录名（username）的映射字段名。对应 OIDC 标准中的 preferred_username 字段，值为第三方平台返回的用户信息 JSON 中表示用户唯一登录名的字段, 例如可使用sub或email等唯一值的字段。 */
  Username?: string | null;
  /** 用户邮箱（email）的映射字段名。对应 OIDC 标准中的 email 字段，值为第三方平台返回的用户信息 JSON 中表示用户邮箱地址的字段。 */
  Email?: string | null;
  /** 用户手机号（phone_number）的映射字段名。对应 OIDC 标准中的 phone_number 字段，值为第三方平台返回的用户信息 JSON 中表示用户手机号的字段。 */
  PhoneNumber?: string | null;
  /** 用户角色/分组（groups）的映射字段名。对应 OIDC 标准中的 groups 字段，值为第三方平台返回的用户信息 JSON 中表示用户所属角色或分组的字段路径。支持字符串数组类型的返回值。 */
  Groups?: string | null;
}

/** 静态CDN资源信息 */
declare interface StaticStorageInfo {
  /** 静态CDN域名 */
  StaticDomain?: string;
  /** 静态CDN默认文件夹，当前为根目录 */
  DefaultDirName?: string;
  /** 资源状态(process/online/offline/init) */
  Status?: string;
  /** cos所属区域 */
  Region?: string;
  /** bucket信息 */
  Bucket?: string;
}

/** 静态托管资源信息 */
declare interface StaticStoreInfo {
  /** 环境ID */
  EnvId?: string | null;
  /** 静态域名 */
  CdnDomain?: string | null;
  /** COS桶 */
  Bucket?: string | null;
  /** cos区域 */
  Regoin?: string | null;
  /** 资源状态:init(初始化)/process(处理中)/online(上线)/destroying(销毁中)/offline(下线)) */
  Status?: string | null;
  /** 地域 */
  Region?: string | null;
}

/** StorageInfo 资源信息 */
declare interface StorageInfo {
  /** 资源所属地域。当前支持ap-shanghai */
  Region?: string;
  /** 桶名，存储资源的唯一标识 */
  Bucket?: string;
  /** cdn 域名 */
  CdnDomain?: string;
  /** 资源所属用户的腾讯云appId */
  AppId?: string;
}

/** 表信息 */
declare interface TableInfo {
  /** 表名 */
  TableName?: string | null;
  /** 表中文档数量 */
  Count?: number | null;
  /** 表的大小（即表中文档总大小），单位：字节 */
  Size?: number | null;
  /** 索引数量 */
  IndexCount?: number | null;
  /** 索引占用空间，单位：字节 */
  IndexSize?: number | null;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** tke集群信息 */
declare interface TkeClusterInfo {
  /** 集群ID */
  ClusterId?: string;
  /** 集群的vpcId */
  VpcId?: string;
  /** 版本内网CLB所在子网Id */
  VersionClbSubnetId?: string;
}

/** 用户信息 */
declare interface User {
  /** 用户ID */
  Uid?: string;
  /** 用户名 */
  Name?: string;
  /** 用户类型：internalUser-内部用户、externalUser-外部用户 */
  Type?: string;
  /** 用户状态：ACTIVE（激活）、BLOCKED（冻结） */
  UserStatus?: string;
  /** 用户昵称 */
  NickName?: string;
  /** 手机号 */
  Phone?: string;
  /** 邮箱 */
  Email?: string;
  /** 头像链接 */
  AvatarUrl?: string;
  /** 用户描述 */
  Description?: string;
}

/** 虚拟主机价格 */
declare interface VMPrice {
  /** 价格货币单位。取值范围CNY:人民币。USD:美元。 */
  Currency?: string;
  /** 原始价格 */
  OriginalPrice?: number;
  /** 折扣率 */
  Discount?: number;
  /** 折扣后的价格 */
  DiscountPrice?: number;
  /** 折扣前每天资源点 */
  OriginalCredits?: number;
  /** 折扣后每天所需资源点 */
  DiscountCredits?: number;
}

/** VM规格 */
declare interface VMSpec {
  /** LightHouse=轻量云服务器CVM=云服务器 */
  Type?: string;
  /** 轻量云服务器规格。当Type=LightHouse时有效 */
  LightHouseSpec?: VMSpecLightHouse;
  /** 价格信息 */
  Price?: VMPrice;
}

/** vm规格 */
declare interface VMSpecLightHouse {
  /** LH主机的BundleId */
  BundleId?: string;
  /** 主机配置详情json */
  BundleConfig?: string;
}

/** 登录短信验证码发送配置。用于管理登录时使用的短信验证码发送的通道相关设置，目前提供云开发默认短信包和客户自定义短信包，推荐使用云开发默认短信包。如果使用自定义APIs发送短信，方法命名规则方法名称：发送验证码方法标识：SendVerificationCode入参Mobile：字符串（手机号，如：“+86 + 手机号”）VerificationCode：字符串（验证码，如：“123456”）返回值ErrorCode：int（0 表示成功，非 0 表示失败）ErrorMessage：字符串（ErrorCode 非 0 时，返回错误信息） */
declare interface VerificationConfig {
  /** 短信验证码发送通道类型。取值范围：default：使用默认云开发短信包发送短信。apis：使用云开发自定义 APIs 作为短信发送通道，需配合 Name 和 Method 参数使用。不传则不修改当前配置。 */
  Type?: string | null;
  /** 自定义 APIs 数据源唯一标识，当 Type 为 apis 时必填。用于定位微搭 APIs 中对应的数据源。 */
  Name?: string | null;
  /** 自定义 APIs 方法名，当 Type 为 apis 时必填。指定微搭 APIs 中用于发送验证码的方法。 */
  Method?: string | null;
  /** 单个手机号每日短信发送上限。默认值为 30，传 -1 表示不限制，如果设置为不限制，需要注意恶意攻击，导致短信套餐用量计费问题。仅支持正整数或 -1。不传则不修改当前配置。 */
  SmsDayLimit?: number | null;
}

/** 云主机实例 */
declare interface VmInstance {
  /** 实例id */
  InstanceId?: string;
  /** 实例状态 */
  Status?: string;
  /** 实例地域 */
  Region?: string;
}

declare interface AddProviderRequest {
  /** 云开发环境 ID，用于唯一标识当前操作所属的云开发环境。 */
  EnvId: string;
  /** 身份源的显示名称，支持国际化多语言配置。用户在登录页面看到的身份源名称将使用该字段，建议根据实际业务场景填写易于识别的名称，例如：企业微信、GitHub 等。 */
  Name: LocalizedMessage;
  /** 身份源协议类型，决定该身份源使用何种认证协议与第三方平台对接。可选值：OAUTH：标准 OAuth 2.0 协议OIDC：OpenID Connect 协议SAML：SAML 2.0 协议WX_MICRO_APP：微信小程序登录WX_QRCODE_MICRO_APP：微信小程序扫码登录WX_CLOUDBASE_MICRO_APP：云开发托管小程序登录WX_MP：微信公众号网页授权登录WX_OPEN：微信开放平台扫码登录WX_WORK_INTERNAL：企业微信自建应用登录WX_WORK_AGENT：企业微信代开发应用登录WX_WORK_THIRD_PARTY：企业微信第三方应用登录WX_WORK_THIRD_PARTY_ASSOCIATION：企业微信第三方应用关联登录CUSTOM：自定义登录EMAIL：邮箱登录 */
  ProviderType: string;
  /** 身份源的唯一标识符，用于在系统内区分不同的身份源。格式要求：2~32 位，仅支持小写英文字母和数字，不可包含空格或特殊字符。若不填写，系统将自动生成。例如：github、google。 */
  Id?: string;
  /** 身份源图标的访问地址，将展示在登录页的身份源按钮上。建议使用 64×64 像素的 SVG 格式图片以保证清晰度，支持 HTTP/HTTPS 公网可访问的图片链接。 */
  Picture?: string;
  /** 身份源对应的官方主页地址。该信息将在用户查看自己的第三方账号绑定列表时展示，帮助用户识别已绑定的身份源来源。例如 GitHub 身份源可填写：https://github.com。 */
  Homepage?: string;
  /** 身份认证源协议连接配置，包含与第三方平台对接所需的核心参数，如 ClientId、ClientSecret、授权端点、Token 端点、回调地址、Scope、SAML Metadata、请求和响应参数映射等。不同 ProviderType 对应不同的配置项要求。 */
  Config?: ProviderConfig;
  /** 是否开启透传登录模式。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE，企业微信代开发应用 WX_WORK_AGENT 类型默认为 TRUE）。开启后，平台不会持久化存储用户数据，仅将第三方身份源返回的用户信息透传给业务方，适用于不希望平台留存用户数据的场景。注意：开启透传模式时，ReuseUserId 将自动设为 TRUE，AutoSignUpWithProviderUser 将自动设为 FALSE。 */
  TransparentMode?: string;
  /** 身份源的详细描述信息，支持国际化多语言配置。可用于向用户说明该身份源的用途或使用场景，例如：谷歌授权登录。 */
  Description?: LocalizedMessage;
  /** 是否直接复用第三方身份源的用户 ID 作为平台的用户 ID。可选值：TRUE（直接复用，适用于已有用户体系迁移场景）、FALSE（不复用，由平台生成独立用户 ID）、UNSPECIFIED（默认为 FALSE，但当 TransparentMode 为 TRUE 时自动设为 TRUE）。注意：开启后需确保第三方用户 ID 的唯一性，避免 ID 冲突。 */
  ReuseUserId?: string;
  /** 身份源的启用状态。可选值：TRUE（启用，用户可通过该身份源登录）、FALSE（禁用，登录入口将被隐藏，已有绑定关系不受影响）、UNSPECIFIED（默认为 TRUE）。 */
  On?: string;
  /** 是否开启邮箱自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE）。开启后，若第三方身份源返回的邮箱与系统中已有用户的邮箱一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。 */
  AutoSignInWhenEmailMatch?: string;
  /** 是否开启手机号自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认行为等同 TRUE）。开启后，若第三方身份源返回的手机号与系统中已有用户的手机号一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。注意：该字段默认行为（UNSPECIFIED）与 AutoSignInWhenEmailMatch 不同，手机号匹配在未显式关闭时默认生效。 */
  AutoSignInWhenPhoneNumberMatch?: string;
}

declare interface AddProviderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindCloudBaseAccessDomainRequest {
  /** 服务Id，目前是指环境Id */
  ServiceId: string;
  /** 自定义域名 */
  Domain: string;
  /** 腾讯云证书Id */
  CertId?: string;
  /** 默认1，1 绑定默认Cdn，2 绑定TcbIngress（不经过cdn），4 绑定自定义cdn */
  BindFlag?: number;
  /** 自定义cdn cname域名 */
  CustomCname?: string;
}

declare interface BindCloudBaseAccessDomainResponse {
  /** 服务Id，目前是指环境Id */
  ServiceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindCloudBaseGWDomainRequest {
  /** 服务ID */
  ServiceId: string;
  /** 服务域名 */
  Domain: string;
  /** 证书ID */
  CertId?: string;
  /** 是否启用多地域 */
  EnableRegion?: boolean;
}

declare interface BindCloudBaseGWDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckTcbServiceRequest {
}

declare interface CheckTcbServiceResponse {
  /** true表示已开通 */
  Initialized?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuthDomainRequest {
  /** 环境ID */
  EnvId: string;
  /** 安全域名 */
  Domains: string[];
}

declare interface CreateAuthDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBillDealRequest {
  /** 当前下单的操作类型，可取[purchase,renew,modify]三种值，分别代表新购，续费，变配。 */
  DealType: string;
  /** 购买的产品类型，可取[tcb-baas,tcb-promotion,tcb-package], 分别代表baas套餐、大促包、资源包 */
  ProductType: string;
  /** 目标下单产品/套餐Id。对于云开发环境套餐，可通过 DescribeBaasPackageList 接口获取，对应其出参的PackageName */
  PackageId: string;
  /** 默认只下单不支付，为ture则下单并支付。如果需要下单并支付，请确保账户下有足够的余额，否则会导致下单失败。 */
  CreateAndPay?: boolean;
  /** 购买时长，与TimeUnit字段搭配使用。 */
  TimeSpan?: number;
  /** 购买时长单位,按各产品规则可选d(天),m(月),y(年),p(一次性)。对于 云开发环境的 新购和续费，目前仅支持 按月购买（即 TimeUnit=m）。 */
  TimeUnit?: string;
  /** 资源唯一标识。在云开发环境 续费和变配 场景下必传，取值为环境ID。 */
  ResourceId?: string;
  /** 来源可选[qcloud,miniapp]，默认qcloud。miniapp表示微信云开发，主要适用于[小程序云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/billing/price.html)。 */
  Source?: string;
  /** 环境别名，用于新购云开发环境时，给云开发环境起别名。仅当 新购云开发环境（DealType=purchase 并且 ProductType=tcb-baas ）时有效。### 格式要求- 可选字符： 小写字母(a~z)、数字、减号(-)- 不能以 减号(-) 开头或结尾- 不能有连个连续的 减号(-)- 长度不超过20位 */
  Alias?: string;
  /** 环境id，当购买资源包和大促包时（ProductType取值为tcb-promotion 或 tcb-package）必传，表示资源包在哪个环境下生效。 */
  EnvId?: string;
  /** 开启超限按量。开启后，当 套餐内的资源点 和 资源包 都用尽后，会自动按量计费。详见 [计费说明](https://cloud.tencent.com/document/product/876/127357)。 */
  EnableExcess?: boolean;
  /** 变配目标套餐id，对于云开发环境变配场景下必传。对于云开发环境套餐，可通过 DescribeBaasPackageList 接口获取，对应其出参的PackageName */
  ModifyPackageId?: string;
  /** jsonstr附加信息 */
  Extension?: string;
  /** 是否自动选择代金券支付。 */
  AutoVoucher?: boolean;
  /** 资源类型。代表新购环境（DealType=purchase 并且 ProductType=tcb-baas ）时需要发货哪些资源。可取值：flexdb, cos, cdn, scf */
  ResourceTypes?: string[];
  /** 环境标签。 代表新购环境（DealType=purchase 并且 ProductType=tcb-baas ）时需要打的标签。 */
  EnvTags?: Tag[];
}

declare interface CreateBillDealResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudBaseGWAPIRequest {
  /** Service ID */
  ServiceId: string;
  /** API Path */
  Path: string;
  /** API类型（1表示云函数，2表示容器） */
  Type: number;
  /** API Name */
  Name: string;
  /** APIId，如果非空，表示修改绑定Path */
  APIId?: string;
  /** 自定义值通用字段（当Type为容器时必填） */
  Custom?: string;
  /** 认证开关 1为开启 2为关闭 */
  AuthSwitch?: number;
  /** 是否开启多地域 */
  EnableRegion?: boolean;
  /** 是否启用统一域名 */
  EnableUnion?: boolean;
  /** 域名 */
  Domain?: string;
  /** 访问类型："OA", "PUBLIC", "MINIAPP", "VPC" （不传默认PUBLIC+MINIAPP+VPC） */
  AccessTypes?: string[];
  /** 是否开启路径透传，默认true表示短路径，即不开启路径透传(已弃用) */
  IsShortPath?: boolean;
  /** 路径透传，默认0关闭，1开启，2关闭 */
  PathTransmission?: number;
  /** 跨域校验，默认0开启，1开启，2关闭 */
  EnableCheckAcrossDomain?: number;
  /** 静态托管资源目录 */
  StaticFileDirectory?: string;
}

declare interface CreateCloudBaseGWAPIResponse {
  /** API ID */
  APIId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEnvRequest {
  /** 环境别名。### 格式要求- 可选字符： 小写字母(a~z)、数字、减号(-)- 不能以 减号(-) 开头或结尾- 不能有连个连续的 减号(-)- 长度不超过20位示例值：cloud */
  Alias: string;
  /** 云开发环境套餐Id。对于云开发环境套餐，可通过 [DescribeBaasPackageList](https://cloud.tencent.com/document/product/876/78167) 接口获取，对应其出参的PackageName。 */
  PackageId: string;
  /** 资源类型。代表新购环境时需要发货哪些资源。可取值以及含义：- flexdb : 表示文档型数据库- storage : 表示云存储- function : 表示云函数**该字段不可为空** */
  Resources: string[];
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24。默认值为1，即1个月。 */
  Period?: number;
  /** 是否自动选择代金券支付。 */
  AutoVoucher?: boolean;
  /** 环境标签。可取值通过接口 [tag:DescribeTags](https://cloud.tencent.com/document/product/651/35316) 可获取到。不传或为空则默认不打任何标签。 */
  Tags?: Tag[];
  /** 自动续费标识。取值范围：- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费（需要手动续费，可通过接口 [RenewEnv](https://cloud.tencent.com/document/product/876/128590) 来续费）默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW（即：自动续费），在账户余额充足的情况下，实例到期后将按月自动续费；但如果账户余额不足，将无法自动续费。请留意腾讯云短信和邮件通知。 */
  RenewFlag?: string;
}

declare interface CreateEnvResourceRequest {
  /** 环境ID */
  EnvId: string;
  /** 资源类型。代表本次开通哪些资源。 可取值以及含义： - log : 表示日志资源，当前仅支持 log（日志资源类型），后续版本可能扩展，该数组不能为空，且每个元素必须为合法的资源类型值 */
  Resources: string[];
}

declare interface CreateEnvResourceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEnvResponse {
  /** 自动生成的环境ID */
  EnvId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHostingDomainRequest {
  /** 环境ID */
  EnvId: string;
  /** 域名 */
  Domain: string;
  /** 证书ID */
  CertId: string;
}

declare interface CreateHostingDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMySQLRequest {
  /** 云开发环境ID */
  EnvId: string;
  /** Db类型: MYSQL */
  DbInstanceType: string;
  /** mysql版本 */
  MysqlVersion?: string;
  /** vpc Id */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 0 区分表名大小写；1 不区分表名大小写(默认) */
  LowerCaseTableNames?: string;
}

declare interface CreateMySQLResponse {
  /** 开通结果 */
  Data?: CreateMySQLResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStaticStoreRequest {
  /** 环境ID */
  EnvId: string;
  /** 是否启用统一域名 */
  EnableUnion?: boolean;
}

declare interface CreateStaticStoreResponse {
  /** 创建静态资源结果(succ/fail) */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTableRequest {
  /** 数据表名；长度不超过96个字符，可以为英文字母、数字、下划线(_)和短横线(-)的组合，且不能以下划线开头 */
  TableName: string;
  /** FlexDB实例ID，如：tnt-nl7hjzasw */
  Tag?: string;
  /** FlexDB数据库权限信息 */
  PermissionInfo?: PermissionInfo;
  /** 云开发环境ID */
  EnvId?: string;
  /** MongoDB连接器配置 */
  MongoConnector?: MongoConnector;
}

declare interface CreateTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserRequest {
  /** 环境id */
  EnvId: string;
  /** 用户名，用户名规则：1. 长度1-64字符 2. 只能包含大小写英文字母、数字和符号 . _ - 3. 只能以字母或数字开头 4. 不能重复 */
  Name: string;
  /** 用户ID，最多64字符，如不传则系统自动生成 */
  Uid?: string;
  /** 用户类型：internalUser-内部用户、externalUser-外部用户，默认internalUser（内部用户） */
  Type?: string;
  /** 密码，传入Uid时密码可不传。密码规则：1. 长度8-32字符（推荐12位以上） 2. 不能以特殊字符开头 3. 至少包含以下四项中的三项：小写字母a-z、大写字母A-Z、数字0-9、特殊字符()!@#$%^&*\|?><_- */
  Password?: string;
  /** 用户状态：ACTIVE（激活）、BLOCKED（冻结），默认激活 */
  UserStatus?: string;
  /** 用户昵称，长度2-64字符 */
  NickName?: string;
  /** 手机号，不能重复 */
  Phone?: string;
  /** 邮箱地址，不能重复 */
  Email?: string;
  /** 头像链接，可访问的公网URL */
  AvatarUrl?: string;
  /** 用户描述，最多200字符 */
  Description?: string;
}

declare interface CreateUserResponse {
  /** 结果返回 */
  Data?: CreateUserResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuthDomainRequest {
  /** 开发者的环境ID */
  EnvId: string;
  /** 域名ID列表，支持批量传递 */
  DomainIds: string[];
}

declare interface DeleteAuthDomainResponse {
  /** 删除的域名个数 */
  Deleted?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudBaseGWAPIRequest {
  /** 服务ID */
  ServiceId: string;
  /** API Path */
  Path?: string;
  /** API ID */
  APIId?: string;
  /** API类型 */
  Type?: number;
  /** API Name */
  Name?: string;
  /** 自定义值字段（Type为2时，传递容器服务名表示需要删除JNSGW） */
  Custom?: string;
  /** 域名 */
  Domain?: string;
}

declare interface DeleteCloudBaseGWAPIResponse {
  /** 最终删除API个数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudBaseGWDomainRequest {
  /** 服务ID */
  ServiceId: string;
  /** 服务域名 */
  Domain: string;
}

declare interface DeleteCloudBaseGWDomainResponse {
  /** 删除个数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProviderRequest {
  /** 环境ID */
  EnvId: string;
  /** 认证源ID，比如：github, 格式必须为：2-32位小写英文字符串或数字 */
  Id: string;
}

declare interface DeleteProviderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTableRequest {
  /** 待删除的表名 */
  TableName: string;
  /** FlexDB实例ID */
  Tag?: string;
  /** 云开发环境ID */
  EnvId?: string;
  /** MongoDB连接器配置 */
  MongoConnector?: MongoConnector;
}

declare interface DeleteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUsersRequest {
  /** 环境id */
  EnvId: string;
  /** tcb用户id列表, 一次最多支持删除100个 */
  Uids: string[];
}

declare interface DeleteUsersResponse {
  /** 删除用户结果 */
  Data?: DeleteUsersResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVmInstanceRequest {
  /** 服务器实例id */
  InstanceId: string;
  /** 环境id */
  EnvId: string;
}

declare interface DeleteVmInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthDomainsRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeAuthDomainsResponse {
  /** 安全域名列表 */
  Domains?: AuthDomain[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaasPackageListRequest {
  /** tcb产品套餐ID，不填拉取全量package信息。 */
  PackageName?: string;
  /** 环境ID */
  EnvId?: string;
  /** 套餐归属方，填写后只返回对应的套餐 包含miniapp与qcloud两种 默认为miniapp */
  Source?: string;
  /** 套餐归属环境渠道 */
  EnvChannel?: string;
  /** 拉取套餐用途：1）new 新购2）modify变配3）renew续费 */
  TargetAction?: string;
  /** 预留字段，同一商品会对应多个类型套餐，对指标有不同侧重。计算型calculation流量型flux容量型capactiy */
  GroupName?: string;
  /** 类型分组过滤。默认为["default"] */
  PackageTypeList?: string[];
  /** 付费渠道，与回包billTags中的计费参数相关，不填返回默认值。 */
  PaymentChannel?: string;
}

declare interface DescribeBaasPackageListResponse {
  /** 套餐列表 */
  PackageList?: BaasPackageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillingInfoRequest {
  /** 环境ID */
  EnvId?: string;
}

declare interface DescribeBillingInfoResponse {
  /** 环境计费信息列表 */
  EnvBillingInfoList?: EnvBillingInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClientRequest {
  /** 环境ID */
  EnvId: string;
  /** 客户端的唯一标识符（Client ID），在 OAuth/OIDC 授权流程中作为 client_id 参数使用，创建后不可修改，一般使用环境id */
  Id: string;
}

declare interface DescribeClientResponse {
  /** 客户端的唯一标识符（Client ID），在 OAuth/OIDC 授权流程中作为 client_id 参数使用。创建时仅可传入环境 ID 或留空：传入环境 ID 时将直接使用该值作为客户端 ID（一个环境仅允许一个）；留空时由系统自动生成与环境 ID 关联的唯一 ID。创建后不可修改。 */
  Id?: string;
  /** 客户端的创建时间，格式遵循 ISO 8601 标准（如：2024-01-01T00:00:00Z），由系统自动生成，不可手动修改。 */
  CreatedAt?: string | null;
  /** 客户端信息的最后修改时间，格式遵循 ISO 8601 标准（如：2024-01-01T00:00:00Z），每次更新应用配置时由系统自动更新。 */
  UpdatedAt?: string | null;
  /** Refresh Token 的有效期，单位为秒。超过该时间后 Refresh Token 将失效，用户需重新登录。取值范围：最小 1800 秒（30 分钟），最大 2592000 秒（30 天），超出上限将自动截断为 30 天。若不设置则默认为 30 天。当该值小于等于 7200 秒时，系统会自动将 AccessTokenExpiresIn 调整为 RefreshTokenExpiresIn - 660 秒。 */
  RefreshTokenExpiresIn?: number | null;
  /** Access Token 的有效期，单位为秒。超过该时间后 Access Token 将失效，需通过 Refresh Token 换取新的 Access Token。若不设置则默认为 7200 秒（2 小时）。设置值小于 1800 秒时将被忽略，使用系统默认值。 */
  AccessTokenExpiresIn?: number | null;
  /** 单个用户在该客户端下允许同时登录的最大会话数量。取值范围：-1 至 50。-1 表示不限制设备数量；0 或不填默认按 User-Agent 区分设备（相同 User-Agent 共享一个会话，不同 User-Agent 各独立一个会话）；1 表示单设备登录，新登录将踢出旧会话；大于 1 时按真实设备 ID 限制，超出限制后最早登录的会话将被自动踢出。 */
  MaxDevice?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseBuildServiceRequest {
  /** 环境id */
  EnvId: string;
  /** 服务名 */
  ServiceName: string;
  /** build类型,枚举值有: cloudbaserun, framework-ci */
  CIBusiness?: string;
  /** 服务版本 */
  ServiceVersion?: string;
  /** 文件后缀 */
  Suffix?: string;
}

declare interface DescribeCloudBaseBuildServiceResponse {
  /** 上传url */
  UploadUrl?: string;
  /** 上传header */
  UploadHeaders?: KVPair[];
  /** 包名 */
  PackageName?: string;
  /** 包版本 */
  PackageVersion?: string;
  /** 下载链接 */
  DownloadUrl?: string;
  /** 下载Httpheader */
  DownloadHeaders?: KVPair[];
  /** 下载链接是否过期 */
  OutDate?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseGWAPIRequest {
  /** 服务ID */
  ServiceId?: string;
  /** API域名 */
  Domain?: string;
  /** API Path */
  Path?: string;
  /** API ID */
  APIId?: string;
  /** API类型，1为云函数，2为容器 */
  Type?: number;
  /** API名，Type为1时为云函数名，Type为2时为容器服务名 */
  Name?: string;
  /** 查询的分页参数，用于设置查询的偏移位置，0表示从头开始 */
  Offset?: number;
  /** 查询的分页参数，用于表示每次查询的最大返回数据量 */
  Limit?: number;
  /** 是否启用多地域 */
  EnableRegion?: boolean;
  /** 是否使用统一域名 */
  EnableUnion?: boolean;
}

declare interface DescribeCloudBaseGWAPIResponse {
  /** API列表 */
  APISet?: CloudBaseGWAPI[] | null;
  /** 是否开启http调用 */
  EnableService?: boolean;
  /** 查询结果的数据总量 */
  Total?: number | null;
  /** 查询的分页参数 */
  Offset?: number | null;
  /** 查询的分页参数 */
  Limit?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseGWServiceRequest {
  /** 服务ID */
  ServiceId?: string;
  /** 服务域名 */
  Domain?: string;
  /** 是否启用多地域 */
  EnableRegion?: boolean;
  /** 是否启用统一域名 */
  EnableUnion?: boolean;
}

declare interface DescribeCloudBaseGWServiceResponse {
  /** 服务列表 */
  ServiceSet?: CloudBaseGWService[] | null;
  /** 是否开启服务 */
  EnableService?: boolean;
  /** 默认域名信息 */
  DefaultDomain?: string | null;
  /** 是否开启CDN迁移 */
  EnableUnion?: boolean | null;
  /** 是否开启跨域校验，默认开启 true */
  EnableCheckAcrossDomain?: boolean | null;
  /** 自定义路由规则 */
  CustomRoutingRules?: string | null;
  /** 默认域名绑定类型，1绑定TCB-CDN，2绑定tcbingres（不经过cdn） */
  AccessFlag?: number;
  /** 云接入源站域名 */
  OriginDomain?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudBaseRunServerVersionRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务名称 */
  ServerName: string;
  /** 版本名称 */
  VersionName: string;
}

declare interface DescribeCloudBaseRunServerVersionResponse {
  /** 版本名称 */
  VersionName?: string;
  /** 备注 */
  Remark?: string;
  /** Dockerfile的路径 */
  DockerfilePath?: string;
  /** DockerBuild的目录 */
  BuildDir?: string;
  /** 请使用CPUSize */
  Cpu?: number;
  /** 请使用MemSize */
  Mem?: number;
  /** 副本最小值 */
  MinNum?: number;
  /** 副本最大值 */
  MaxNum?: number;
  /** 策略类型 */
  PolicyType?: string;
  /** 策略阈值 */
  PolicyThreshold?: number;
  /** 环境变量 */
  EnvParams?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  UpdatedTime?: string;
  /** 版本的IP */
  VersionIP?: string;
  /** 版本的端口号 */
  VersionPort?: number;
  /** 版本状态 */
  Status?: string;
  /** 代码包的名字 */
  PackageName?: string;
  /** 代码版本的名字 */
  PackageVersion?: string;
  /** 枚举（package/repository/image) */
  UploadType?: string;
  /** Repo的类型(gitlab/github/coding) */
  RepoType?: string;
  /** 地址 */
  Repo?: string;
  /** 分支 */
  Branch?: string;
  /** 服务名字 */
  ServerName?: string;
  /** 是否对于外网开放 */
  IsPublic?: boolean;
  /** vpc id */
  VpcId?: string;
  /** 子网实例id */
  SubnetIds?: string[] | null;
  /** 日志采集路径 */
  CustomLogs?: string;
  /** 监听端口 */
  ContainerPort?: number;
  /** 延迟多长时间开始健康检查（单位s） */
  InitialDelaySeconds?: number;
  /** 镜像地址 */
  ImageUrl?: string;
  /** CPU 大小 */
  CpuSize?: number;
  /** MEM 大小 */
  MemSize?: number;
  /** 是否有Dockerfile：0-default has, 1-has, 2-has not */
  HasDockerfile?: number;
  /** 基础镜像 */
  BaseImage?: string;
  /** 容器启动入口命令 */
  EntryPoint?: string;
  /** 仓库语言 */
  RepoLanguage?: string;
  /** 自动扩缩容策略组 */
  PolicyDetail?: HpaPolicy[] | null;
  /** Tke集群信息 */
  TkeClusterInfo?: TkeClusterInfo | null;
  /** 版本工作负载类型；deployment/deamonset */
  TkeWorkloadType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCreateMySQLResultRequest {
  /** 云开发环境ID */
  EnvId: string;
  /** OpenMysql 返回任务 Id */
  TaskId?: string;
}

declare interface DescribeCreateMySQLResultResponse {
  /** 查询开通结果 */
  Data?: DescribeCreateMySQLResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCurveDataRequest {
  /** 环境ID */
  EnvId: string;
  /** 文档型数据库相关指标 DbRead: 数据库读请求数 DbWrite: 数据库写请求数 DbCostTime10ms: 数据库耗时在10ms-50ms请求数 DbCostTime50ms: 数据库耗时在50ms-100ms请求数 DbCostTime100ms: 数据库耗时在100ms以上请求数 DbSizepkg: 数据库容量，单位MB SQL型数据库相关指标 MysqlStorageUsage: 关系型数据库容量，单位MB MysqlCCU: CCU MysqlCpuUsageRate:CPU利用率 MysqlDbConnections:数据库连接数 MysqlMemoryUse: 内存使用量，单位MB MysqlSlowQueries:慢查询数 MysqlTps: 提交数 MysqlQps: QPS 云函数相关指标 FunctionCU: 资源用量 FunctionInvocation: 调用次数 FunctionFlux: 外网出流量, 单位千字节(KB) FunctionThrottle: 受限次数 FunctionConcurrentExecutions: 并发执行个数 FunctionTimeout: 函数执行超时次数 FunctionGBs: 资源用量, 单位Mb*Ms FunctionError: 云错误次数 FunctionDuration: 运行时间, 单位毫秒 FunctionConcurrencyMemoryMB: 并发执行内存量 FunctionMemOverFlow：内存超限次数 FunctionIdleProvisioned: 预置并发闲置量 FunctionProvisionedConcurrency: 预置并发个数 云托管相关指标TkeRspTimeService ： 响应时间，单位毫秒TkeCpuUsedService ： CPU使用量TkeMemUsedService ： 内存使用量TkeQPSService ： QPSTkePodNumService ： 实例个数TkeHttpServiceNatPkg ： 外网出流量，单位byteTkeCUUsedService ： 内存使用量(CU单位)TkeInvokeNumService ： 调用量TkeHttpErrorService ： 错误响应（404、500等）静态网站托管相关指标StaticFsFluxPkg：流量，单位byteStaticFsSizePkg：存储容量，单位MB身份认证相关指标AuthInvocationNumPkg：调用次数API调用相关指标GwCloudDevelopmentSecureCallsInvocation：云开发API调用次数GwWXInvocation：小程序API调用次数HTTP网关相关指标GwCloudDevelopmentStandardCallsInvocation：HTTP调用次数大模型相关指标AIPromptTokenNumPkg：输入TokenAICompletionTokenNumPkg：输出TokenAITotalTokenNumPkg：总Token知识库相关指标KnowledgeBaseCapacity：容量，单位bytes用户登录相关指标DayActiveLoginAnonymousUser：匿名用户登陆日活DayActiveLoginAllUser ： 全部用户登陆日活DayActiveLoginExternalUser ： 外部用户登陆日活DayActiveLoginInternalUser ： 内部用户登陆日活 */
  MetricName: string;
  /** 开始时间，如2018-08-24 10:50:00, 开始时间需要早于结束时间至少五分钟(原因是因为目前统计粒度最小是5分钟) */
  StartTime: string;
  /** 结束时间，如2018-08-24 10:50:00, 结束时间需要晚于开始时间至少五分钟(原因是因为目前统计粒度最小是5分钟) */
  EndTime: string;
  /** 资源ID, 目前仅对文档型数据库、云函数、云托管相关的指标有意义。如果想查询某个具体云函数/具体数据库集合的指标，则需传入对应的云函数名称/集合名称；如果只想查询整个namespace的指标, 则留空或不传。云托管相关指标的查询，必须传入云托管服务名称。 */
  ResourceID?: string;
  /** 微信AppId，微信必传 */
  WxAppId?: string;
  /** 子资源信息。查询云托管相关指标的具体版本的监控数据，需传入。 */
  SubresourceID?: string;
  /** 网关路由 */
  ThirdResource?: string;
  /** 统计周期(单位秒)，非必传，传入时仅支持传入300，3600，86400。不传采用默认以下默认规则：当时间区间为1天内, 统计周期为300；当时间区间选择为1天以上, 15天以下, 统计周期为3600； 当时间区间选择为15天以上, 180天以下, 统计周期为86400。如果传入period，需遵循以下规则。EndTime-StartTime的时间范围不超过1 天，Period可以取300或3600；EndTime-StartTime的时间范围满足超过1天且不超过3 天，Period可以取300或3600或86400；EndTime-StartTime的时间范围超过3天时，Period可以取3600或86400。 */
  Period?: number;
}

declare interface DescribeCurveDataResponse {
  /** 开始时间, 会根据数据的统计周期进行取整 */
  StartTime?: string;
  /** 结束时间, 会根据数据的统计周期进行取整 */
  EndTime?: string;
  /** 指标名 */
  MetricName?: string;
  /** 统计周期(单位秒), 当时间区间为1天内, 统计周期为5分钟; 当时间区间选择为1天以上, 15天以下, 统计周期为1小时; 当时间区间选择为15天以上, 180天以下, 统计周期为1天 */
  Period?: number;
  /** 有效的监控数据, 每个有效监控数据的上报时间可以从时间数组中的对应位置上获取到 */
  Values?: number[];
  /** 各数据点的时间戳数组（Unix 时间戳，秒级），与 ⁠Values⁠ 一一对应 */
  Time?: number[];
  /** 有效的监控数据, 每个有效监控数据的上报时间可以从时间数组中的对应位置上获取到 */
  NewValues?: number[];
  /** 聚合方式， ⁠"last"⁠ 表示取时间段内最后一个值，“max”表示取时间段内最大值，“avg”表示取时间段内的平均值 */
  Statistics?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseACLRequest {
  /** 环境ID */
  EnvId: string;
  /** 集合名称 */
  CollectionName: string;
}

declare interface DescribeDatabaseACLResponse {
  /** 权限标签。包含以下取值： READONLY：所有用户可读，仅创建者和管理员可写 PRIVATE：仅创建者及管理员可读写 ADMINWRITE：所有用户可读，仅管理员可写 ADMINONLY：仅管理员可读写 */
  AclTag?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvAccountCircleRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeEnvAccountCircleResponse {
  /** 环境计费周期开始时间 */
  StartTime?: string;
  /** 环境计费周期结束时间 */
  EndTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvLimitRequest {
}

declare interface DescribeEnvLimitResponse {
  /** 环境总数上限 */
  MaxEnvNum?: number;
  /** 目前环境总数 */
  CurrentEnvNum?: number;
  /** 免费环境数量上限 */
  MaxFreeEnvNum?: number;
  /** 目前免费环境数量 */
  CurrentFreeEnvNum?: number;
  /** 总计允许销毁环境次数上限 */
  MaxDeleteTotal?: number;
  /** 目前已销毁环境次数 */
  CurrentDeleteTotal?: number;
  /** 每月允许销毁环境次数上限 */
  MaxDeleteMonthly?: number;
  /** 本月已销毁环境次数 */
  CurrentDeleteMonthly?: number;
  /** 微信网关体验版可购买月份数 */
  MaxFreeTrialNum?: number;
  /** 微信网关体验版已购买月份数 */
  CurrentFreeTrialNum?: number;
  /** 转支付限额总数 */
  ChangePayTotal?: number;
  /** 当前已用转支付次数 */
  CurrentChangePayTotal?: number;
  /** 转支付每月限额 */
  ChangePayMonthly?: number;
  /** 本月已用转支付额度 */
  CurrentChangePayMonthly?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvsRequest {
  /** 环境ID，如果传了这个参数则只返回该环境的相关信息 */
  EnvId?: string;
  /** 指定Channels字段为可见渠道列表或不可见渠道列表如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"] */
  IsVisible?: boolean;
  /** 渠道列表，代表可见或不可见渠道由IsVisible参数指定 */
  Channels?: string[];
  /** 分页参数，单页限制个数 */
  Limit?: number;
  /** 分页参数，偏移量 */
  Offset?: number;
}

declare interface DescribeEnvsResponse {
  /** 环境信息列表 */
  EnvList?: EnvInfo[];
  /** 环境个数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostingDomainTaskRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeHostingDomainTaskResponse {
  /** todo/doing/done/error */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoginConfigRequest {
  /** 环境id */
  EnvId: string;
}

declare interface DescribeLoginConfigResponse {
  /** 是否开启邮箱登录方式。true 表示已开启，允许用户使用邮箱和密码进行登录；false 表示已关闭。 */
  EmailLogin?: boolean;
  /** 是否开启匿名登录方式。true 表示已开启，允许用户无需注册即可以匿名身份登录；false 表示已关闭。 */
  AnonymousLogin?: boolean;
  /** 是否开启用户名密码登录方式。true 表示已开启，允许用户使用用户名和密码进行登录；false 表示已关闭。 */
  UserNameLogin?: boolean;
  /** 短信验证码发送配置，包含短信发送通道类型、自定义 APIs 数据源、调用方法及每日发送限额等信息。 */
  SmsVerificationConfig?: VerificationConfig;
  /** 是否开启手机号短信登录方式。true 表示已开启，允许用户使用手机号和短信验证码进行登录和注册；false 表示已关闭。 */
  PhoneNumberLogin?: boolean;
  /** MFA 多因子认证登录配置，包含 MFA 开关及各验证方式（短信、邮箱、TOTP、强制绑定手机号）的启用状态。 */
  MfaConfig?: MFALoginConfig | null;
  /** 密码修改策略配置，包含首次登录强制修改密码开关及定期修改密码策略（周期和时间单位）。 */
  PwdUpdateStrategy?: PasswordUpdateLoginConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMySQLClusterDetailRequest {
  /** 云开发环境ID */
  EnvId: string;
}

declare interface DescribeMySQLClusterDetailResponse {
  /** 集群详情 */
  Data?: MySQLClusterDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMySQLTaskStatusRequest {
  /** 云开发环境ID */
  EnvId: string;
  /** 任务Id */
  TaskId?: string;
  /** 任务名 */
  TaskName?: string;
}

declare interface DescribeMySQLTaskStatusResponse {
  /** 任务状态 */
  Data?: MySQLTaskStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuotaDataRequest {
  /** 环境ID */
  EnvId: string;
  /** 指标名: StorageSizepkg: 当月存储空间容量, 单位MB StorageReadpkg: 当月存储读请求次数 StorageWritepkg: 当月存储写请求次数 StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 StorageReadpkgDay: 当日存储读请求次数 StorageWritepkgDay: 当日写请求次数 CDNFluxpkg: 当月CDN流量, 单位为字节 CDNFluxpkgDay: 当日CDN流量, 单位为字节 FunctionInvocationpkg: 当月云函数调用次数 FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) FunctionInvocationpkgDay: 当日云函数调用次数 FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) DbSizepkg: 当月数据库容量大小, 单位MB DbReadpkg: 当日数据库读请求数 DbWritepkg: 当日数据库写请求数 StaticFsFluxPkgDay: 当日静态托管流量 StaticFsFluxPkg: 当月静态托管流量 StaticFsSizePkg: 当月静态托管容量 TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核*秒 TkeCpuUsedPkgDay: 当天容器托管CPU使用量，单位核*秒 TkeMemUsedPkg: 当月容器托管内存使用量，单位MB*秒 TkeMemUsedPkgDay: 当天容器托管内存使用量，单位MB*秒 CodingBuildTimePkgDay: 当天容器托管构建时间使用量，单位毫秒 TkeHttpServiceNatPkgDay: 当天容器托管流量使用量，单位B CynosdbCcupkg: 当月微信云托管MySQL CCU使用量，单位个 （需要除以1000） CynosdbStoragepkg: 当月微信云托管MySQL 存储使用量，单位MB （需要除以1000） CynosdbCcupkgDay: 当天微信云托管MySQL 存储使用量，单位个 （需要除以1000） CynosdbStoragepkgDay: 当天微信云托管MySQL 存储使用量，单位MB （需要除以1000） */
  MetricName: string;
  /** 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。 */
  ResourceID?: string;
}

declare interface DescribeQuotaDataResponse {
  /** 指标名 */
  MetricName?: string;
  /** 指标的值 */
  Value?: number;
  /** 指标的附加值信息 */
  SubValue?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSafeRuleRequest {
  /** 环境ID */
  EnvId: string;
  /** 集合名称 */
  CollectionName: string;
  /** 微信AppId，微信必传 */
  WxAppId?: string;
}

declare interface DescribeSafeRuleResponse {
  /** 规则内容 */
  Rule?: string | null;
  /** 权限标签。包含以下取值： READONLY：所有用户可读，仅创建者和管理员可写 PRIVATE：仅创建者及管理员可读写 ADMINWRITE：所有用户可读，仅管理员可写 ADMINONLY：仅管理员可读写 CUSTOM：自定义安全规则 */
  AclTag?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStaticStoreRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface DescribeStaticStoreResponse {
  /** 静态托管资源信息 */
  Data?: StaticStoreInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableRequest {
  /** 表名 */
  TableName: string;
  /** FlecDB实例ID */
  Tag?: string;
  /** 云开发环境ID */
  EnvId?: string;
  /** MongoDB连接器配置 */
  MongoConnector?: MongoConnector;
}

declare interface DescribeTableResponse {
  /** 索引相关信息 */
  Indexes?: IndexInfo[];
  /** 索引个数 */
  IndexNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesRequest {
  /** 分页条件 */
  MgoLimit: number;
  /** 实例ID */
  Tag?: string;
  /** 分页条件 */
  MgoOffset?: number;
  /** 环境id */
  EnvId?: string;
  /** MongoConnector */
  MongoConnector?: MongoConnector;
  /** 指定表名过滤，为空时返回所有表 */
  TableNames?: string[];
}

declare interface DescribeTablesResponse {
  /** 表信息 */
  Tables?: TableInfo[] | null;
  /** 分页信息 */
  Pager?: Pager | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserListRequest {
  /** 环境id */
  EnvId: string;
  /** 页码，从1开始，默认1 */
  PageNo?: number;
  /** 每页数量，默认20，最大100 */
  PageSize?: number;
  /** 用户名，模糊查询 */
  Name?: string;
  /** 用户昵称，模糊查询 */
  NickName?: string;
  /** 手机号，模糊查询 */
  Phone?: string;
  /** 邮箱，模糊查询 */
  Email?: string;
}

declare interface DescribeUserListResponse {
  /** 结果返回 */
  Data?: DescribeUserListResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVmInstancesRequest {
  /** 环境ID */
  EnvId: string;
  /** 服务器类型： LightHouse = 轻量云服务器 CVM = 云服务器 */
  Type: string;
}

declare interface DescribeVmInstancesResponse {
  /** 主机实例列表 */
  InstanceList?: VmInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVmSpecRequest {
  /** 类型：LightHouse = 轻量云服务器CVM = 云服务器 */
  Type?: string;
}

declare interface DescribeVmSpecResponse {
  /** 规格列表 */
  SpecList?: VMSpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyEnvRequest {
  /** 环境Id */
  EnvId: string;
  /** 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除 */
  IsForce?: boolean;
  /** 是否绕过资源检查，资源包等额外资源，默认为false，如果为true，则不检查资源是否有数据，直接删除。 */
  BypassCheck?: boolean;
}

declare interface DestroyEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyMySQLRequest {
  /** 云开发环境ID */
  EnvId: string;
}

declare interface DestroyMySQLResponse {
  /** 销毁结果 */
  Data?: DestroyMySQLResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyStaticStoreRequest {
  /** 环境ID */
  EnvId: string;
  /** cdn域名 */
  CdnDomain?: string;
}

declare interface DestroyStaticStoreResponse {
  /** 条件任务结果(succ/fail) */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EditAuthConfigRequest {
  /** 环境id */
  EnvId: string;
  /** 手机号登录配置 "TRUE", "FALSE", "LOGIN_ONLY" */
  PhoneNumberLogin?: string;
  /** 匿名登录配置 "TRUE", "FALSE" */
  AnonymousLogin?: string;
  /** 用户名密码登录配置 "TRUE", "FALSE" */
  UsernameLogin?: string;
}

declare interface EditAuthConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetProvidersRequest {
  /** 环境 ID，用于指定需要查询配置第三方身份源的云开发环境。 */
  EnvId: string;
}

declare interface GetProvidersResponse {
  /** 总数 */
  Total?: number | null;
  /** 三方认证源列表 */
  Data?: Provider[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquireVmPriceRequest {
  /** 服务器类型：LightHouse = 轻量云服务器CVM = 云服务器 */
  Type: string;
  /** 轻量云服务器套餐ID。当Type=LightHouse时必传 */
  LightHouseBundleId?: string;
  /** 轻量云服务器镜像ID。当Type=LightHouse时必传 */
  LightHouseBlueprintId?: string;
}

declare interface InquireVmPriceResponse {
  /** 价格货币单位。取值范围CNY:人民币。USD:美元。 */
  Currency?: string;
  /** 原价（主机原始每月价格） */
  OriginalPrice?: number;
  /** 折扣率 */
  Discount?: number;
  /** 折扣后每月价格 */
  DiscountPrice?: number;
  /** 折扣前每天资源点 */
  OriginalCredits?: number;
  /** 折扣后每天资源点 */
  DiscountCredits?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTablesRequest {
  /** 每页返回数量（0-1000) */
  MgoLimit: number;
  /** FlexDB实例ID */
  Tag?: string;
  /** 分页偏移量 */
  MgoOffset?: number;
  /** 过滤标签数组，用于过滤表名，可选值如：HIDDEN、WEDA、WEDA_SYSTEM */
  Filters?: string[];
  /** 模糊搜索查询值 */
  SearchValue?: string;
  /** 是否展示隐藏表 */
  ShowHidden?: boolean;
  /** 云开发环境ID */
  EnvId?: string;
  /** mongo连接器信息 */
  MongoConnector?: MongoConnector;
}

declare interface ListTablesResponse {
  /** 表信息 */
  Tables?: TableInfo[] | null;
  /** 分页信息 */
  Pager?: Pager | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClientRequest {
  /** 客户端所属的云开发环境 ID，用于标识该应用归属的云开发环境。不同环境之间的应用数据相互隔离。 */
  EnvId: string;
  /** 需要修改的客户端唯一标识符（Client ID），在 OAuth/OIDC 授权流程中作为 client_id 参数使用。该字段为定位参数，仅用于指定目标客户端，不可修改。 */
  Id: string;
  /** Refresh Token 的有效期，单位为秒。超过该时间后 Refresh Token 将失效，用户需重新登录。取值范围：1800~2592000（即 30 分钟至 30 天），超出上限将被截断为 2592000。默认值为 2592000（即 30 天）。注意：当该值 ≤ 7200 时，AccessTokenExpiresIn 将被自动设为该值减去 660 秒。 */
  RefreshTokenExpiresIn?: number;
  /** 单个用户在该应用下允许同时登录的最大会话数量。取值范围：-1~50。特殊值说明：-1 表示不限制设备数；0 表示按客户端 User-Agent 区分设备（相同 User-Agent 视为同一设备）；1~50 为精确的最大会话数限制，超出限制后最早登录的会话将被自动踢出。不传则保持原有配置不变。 */
  MaxDevice?: number;
  /** Access Token 的有效期，单位为秒。超过该时间后 Access Token 将失效，需使用 Refresh Token 重新换取。最小有效值为 1800 秒（小于 1800 将被忽略，使用默认值），默认值为 7200（即 2 小时）。该值应小于 RefreshTokenExpiresIn。 */
  AccessTokenExpiresIn?: number;
}

declare interface ModifyClientResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudBaseGWAPIRequest {
  /** Service ID */
  ServiceId: string;
  /** API ID */
  APIId: string;
  /** 选项列表，key取值：domain, path。 */
  Options: CloudBaseOption[];
}

declare interface ModifyCloudBaseGWAPIResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClsTopicRequest {
  /** 环境ID */
  EnvId: string;
  /** 日志生命周期，单位天，可取值范围1~3600，取值为3640时代表永久保存 */
  Period?: number;
}

declare interface ModifyClsTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDatabaseACLRequest {
  /** 环境ID */
  EnvId: string;
  /** 集合名称 */
  CollectionName: string;
  /** 权限标签。包含以下取值： READONLY：所有用户可读，仅创建者和管理员可写 PRIVATE：仅创建者及管理员可读写 ADMINWRITE：所有用户可读，仅管理员可写 ADMINONLY：仅管理员可读写 */
  AclTag: string;
}

declare interface ModifyDatabaseACLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEnvPlanRequest {
  /** 所需变更套餐的环境ID */
  EnvId: string;
  /** 目标套餐Id。对于云开发环境套餐，可通过 [DescribeBaasPackageList](https://cloud.tencent.com/document/product/876/78167) 接口获取，对应其出参的PackageName */
  PackageId: string;
  /** 是否自动选择代金券支付。 */
  AutoVoucher?: boolean;
}

declare interface ModifyEnvPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEnvRequest {
  /** 环境ID */
  EnvId: string;
  /** 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符 */
  Alias?: string;
}

declare interface ModifyEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoginConfigRequest {
  /** 环境 ID，用于指定需要修改登录策略的云开发环境。 */
  EnvId: string;
  /** 手机号短信登录开关。设置为 true 开启手机号短信登录，允许用户使用手机号和短信验证码进行登录和注册；设置为 false 关闭手机号短信登录。 */
  PhoneNumberLogin: boolean;
  /** 邮箱登录开关。设置为 true 开启邮箱登录，允许用户使用邮箱和密码进行登录和注册；设置为 false 关闭邮箱登录。 */
  EmailLogin: boolean;
  /** 用户名密码登录开关。设置为 true 开启用户名密码登录，允许用户使用用户名和密码进行登录和注册；设置为 false 关闭用户名密码登录。 */
  UserNameLogin: boolean;
  /** 匿名登录开关。设置为 true 开启匿名登录，允许用户无需注册即可以匿名身份访问应用；设置为 false 关闭匿名登录。 */
  AnonymousLogin: boolean;
  /** 短信验证码发送配置，用于设置短信验证码的发送通道类型和日发送限额。不传则不修改当前配置。 */
  SmsVerificationConfig?: VerificationConfig;
  /** MFA 多因子认证登录配置，用于设置多因子认证开关及验证方式（短信、邮箱、TOTP、强制绑定手机号）。不传则不修改当前配置。 */
  MfaConfig?: MFALoginConfig;
  /** 密码更新策略配置，用于设置首次登录强制修改密码和定期强制修改密码策略。不传则不修改当前配置。 */
  PwdUpdateStrategy?: PasswordUpdateLoginConfig;
}

declare interface ModifyLoginConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProviderRequest {
  /** 云开发环境 ID，用于唯一标识当前操作所属的云开发环境。 */
  EnvId: string;
  /** 身份源的唯一标识符，用于指定需要修改的目标身份源。格式要求：2~32 位，仅支持小写英文字母和数字，不可包含空格或特殊字符。例如：github、google。 */
  Id: string;
  /** 身份源的显示名称，支持国际化多语言配置。用户在登录页面看到的身份源名称将使用该字段，建议根据实际业务场景填写易于识别的名称，例如：GitHub、Google 等。 */
  Name?: LocalizedMessage;
  /** 身份源图标的访问地址，将展示在登录页的身份源按钮上。建议使用 64×64 像素的 SVG 格式图片以保证清晰度，支持 HTTP/HTTPS 公网可访问的图片链接。 */
  Picture?: string;
  /** 身份源对应的官方主页地址。该信息将在用户查看自己的第三方账号绑定列表时展示，帮助用户识别已绑定的身份源来源。例如 GitHub 身份源可填写：https://github.com。 */
  Homepage?: string;
  /** 身份源协议类型，决定该身份源使用何种认证协议与第三方平台对接。可选值：OAUTH：标准 OAuth 2.0 协议OIDC：OpenID Connect 协议SAML：SAML 2.0 协议WX_MICRO_APP：微信小程序登录WX_QRCODE_MICRO_APP：微信小程序扫码登录WX_CLOUDBASE_MICRO_APP：云开发托管小程序登录WX_MP：微信公众号网页授权登录WX_OPEN：微信开放平台扫码登录WX_WORK_INTERNAL：企业微信自建应用登录WX_WORK_AGENT：企业微信代开发应用登录WX_WORK_THIRD_PARTY：企业微信第三方应用登录WX_WORK_THIRD_PARTY_ASSOCIATION：企业微信第三方应用关联登录CUSTOM：自定义登录EMAIL：邮箱登录 */
  ProviderType?: string;
  /** 身份认证源协议连接配置，包含与第三方平台对接所需的核心参数，如 ClientId、ClientSecret、授权端点、Token 端点、回调地址、Scope、SAML Metadata、请求和响应参数映射等。不同 ProviderType 对应不同的配置项要求。注意：CUSTOM 和 EMAIL 类型的身份源，其存储后端类型（StorageDb）不可修改。 */
  Config?: ProviderConfig;
  /** 是否开启透传登录模式。可选值：TRUE（开启）、FALSE（关闭，默认值）。开启后，平台不会持久化存储用户数据，仅将第三方身份源返回的用户信息透传给业务方，适用于不希望平台留存用户数据的场景。注意：开启透传模式时，ReuseUserId 将被强制设为 TRUE，AutoSignUpWithProviderUser 将被强制设为 FALSE。 */
  TransparentMode?: string;
  /** 身份源的启用状态。可选值：TRUE（启用，用户可通过该身份源登录）、FALSE（禁用，登录入口将被隐藏，已有绑定关系不受影响）、UNSPECIFIED（默认为 TRUE）。 */
  On?: string;
  /** 身份源的详细描述信息，支持国际化多语言配置。可用于向用户说明该身份源的用途或使用场景，例如：谷歌授权登录。 */
  Description?: LocalizedMessage;
  /** 是否直接复用第三方身份源的用户 ID 作为平台用户 ID。可选值：TRUE（开启，返回的用户 ID 将直接使用第三方身份源的用户 ID，适用于已有用户体系迁移场景）、FALSE（关闭，由平台生成独立用户 ID）、UNSPECIFIED（默认为 FALSE，但当 TransparentMode 为 TRUE 时将被强制设为 TRUE）。注意：开启后需确保第三方用户 ID 的全局唯一性，避免 ID 冲突。 */
  ReuseUserId?: string;
  /** 邮箱身份源的专项配置，包含邮件服务商、发件人地址、SMTP 配置等参数，用于支持通过邮箱验证码或邮箱密码方式进行身份认证。仅当身份源 ID 为 email 时有效。若该身份源不存在，系统将自动创建一个默认关闭的邮箱身份源。 */
  EmailConfig?: EmailProviderConfig;
  /** 是否开启邮箱自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE）。开启后，若第三方身份源返回的邮箱与系统中已有用户的邮箱一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。 */
  AutoSignInWhenEmailMatch?: string;
  /** 是否开启手机号自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认行为等同 TRUE）。开启后，若第三方身份源返回的手机号与系统中已有用户的手机号一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。注意：该字段默认行为（UNSPECIFIED）与 AutoSignInWhenEmailMatch 不同，手机号匹配在未显式关闭时默认生效。 */
  AutoSignInWhenPhoneNumberMatch?: string;
}

declare interface ModifyProviderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySafeRuleRequest {
  /** 环境ID */
  EnvId: string;
  /** 集合名称 */
  CollectionName: string;
  /** 权限标签。包含以下取值： READONLY：所有用户可读，仅创建者和管理员可写 PRIVATE：仅创建者及管理员可读写 ADMINWRITE：所有用户可读，仅管理员可写 ADMINONLY：仅管理员可读写 CUSTOM：自定义安全规则 */
  AclTag: string;
  /** 安全规则内容。当 AclTag=CUSTOM 时，此参数必填。详情参考：[文档型数据库安全规则](https://docs.cloudbase.net/database/security-rules) */
  Rule?: string;
}

declare interface ModifySafeRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserRequest {
  /** 环境id */
  EnvId: string;
  /** 用户Id, 不做修改 */
  Uid: string;
  /** 用户名，用户名规则：1. 长度1-64字符 2. 只能包含大小写英文字母、数字和符号 . _ - 3. 只能以字母或数字开头 4. 不能重复，不传该字段或传空字符不修改 */
  Name?: string;
  /** 用户类型：0-内部用户、1-外部用户，默认0（内部用户），不传该字段或传空字符串不修改 */
  Type?: string;
  /** 密码，传入Uid时密码可不传。密码规则：1. 长度8-32字符（推荐12位以上） 2. 不能以特殊字符开头 3. 至少包含以下四项中的三项：小写字母a-z、大写字母A-Z、数字0-9、特殊字符()!@#$%^&*\|?><_-，不传该字段或传空字符串不修改 */
  Password?: string;
  /** 用户状态：ACTIVE（激活）、BLOCKED（冻结），默认冻结，不传该字段或传空字符串不修改 */
  UserStatus?: string;
  /** 用户昵称，长度2-64字符，不传该字段不修改，传空字符修改为空 */
  NickName?: string;
  /** 手机号，11位数字，不传该字段不修改，传空字符串修改为空 */
  Phone?: string;
  /** 邮箱地址，不传该字段不修改，传空字符修改为空 */
  Email?: string;
  /** 头像链接，可访问的公网URL，不传该字段不修改，传空字符串修改为空 */
  AvatarUrl?: string;
  /** 用户描述，最多200字符，不传该字段不修改，传空字符修改为空 */
  Description?: string;
}

declare interface ModifyUserResponse {
  /** 修改用户返回值 */
  Data?: ModifyUserResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReinstateEnvRequest {
  /** 环境ID */
  EnvId: string;
}

declare interface ReinstateEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewEnvRequest {
  /** 环境ID */
  EnvId: string;
  /** 续费周期，单位：月。默认值为 1，即续费1个月。 */
  Period?: number;
  /** 是否自动选择代金券支付。 */
  AutoVoucher?: boolean;
}

declare interface RenewEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunCommandsRequest {
  /** 待执行命令 */
  MgoCommands: MgoCommandParam[];
  /** 实例ID */
  Tag?: string;
  /** 环境id */
  EnvId?: string;
  /** Mongo连接器实例信息 */
  MongoConnector?: MongoConnector;
}

declare interface RunCommandsResponse {
  /** 返回结果，返回结果为一个json字符串 */
  Data?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunSqlRequest {
  /** 要执行的SQL语句 */
  Sql: string;
  /** 云开发环境ID */
  EnvId: string;
  /** 数据库连接器实例信息 */
  DbInstance?: DbInstance;
  /** 是否只读；当 `true` 时仅允许以 `SELECT/WITH/SHOW/DESCRIBE/DESC/EXPLAIN` 开头的 SQL */
  ReadOnly?: boolean;
}

declare interface RunSqlResponse {
  /** 查询结果行，每个元素为 JSON 字符串 */
  Items?: string[];
  /** 列元数据信息，每个元素为 JSON 字符串，字段包含 `name/databaseType/nullable/length/precision/scale` */
  Infos?: string[];
  /** 受影响的行数（INSERT/UPDATE/DELETE 等语句） */
  RowsAffected?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchClsLogRequest {
  /** 环境唯一ID */
  EnvId: string;
  /** 查询起始时间条件 */
  StartTime: string;
  /** 查询结束时间条件 */
  EndTime: string;
  /** 查询语句， 例如查询云函数：(src:app OR src:system) AND log:\"START RequestId*\"， 聚合云函数请求状态：* | select request_id, max(status_code) as status where ((request_id='44738f94-16dd-11f1-****' AND retry_num=0) AND retry_num=0)) AND status_code!=202 group by request_id, retry_num 查询云数据库[文档型]：module:database， 查询云数据库[文档型]事件：module:database AND eventType:(MongoSlowQuery)，MongoSlowQuery为文档型数据库慢查询事件 查询云数据库[SQL型]：module:rdb， 查询云数据库[SQL型]事件：module:rdb AND eventType:(MysqlFreeze OR MysqlRecover OR MysqlSlowQuery)，MysqlFreeze为mysql数据库冻结事件、MysqlRecover为mysql数据库恢复事件、MysqlSlowQuery为mysql数据库慢查询事件 查询审批流：module:workflow， 查询模型：module:model， 查询用户权限：module:auth， 查询大模型：module:llm AND logType:llm-tracelog 查询网关服务调用：logType:accesslog 查询应用发布/删除事件：module:app AND eventType:(AppProdPub OR AppProdDel)，AppProdPub为应用发布事件，AppProdDel为应用删除事件 以上仅为示例语句，实际使用时请根据具体日志内容进行调整，查询语句需严格遵循CLS（Cloud Log Service）语法规范 详细的语法规则请参考官方档：https://cloud.tencent.com/document/product/614/47044 */
  QueryString: string;
  /** 单次要返回的日志条数，单次返回的最大条数为100 */
  Limit: number;
  /** 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围 */
  Context?: string;
  /** 按时间排序 asc（升序）或者 desc（降序），默认为 desc */
  Sort?: string;
  /** 是否使用Lucene语法，默认为false */
  UseLucene?: boolean;
}

declare interface SearchClsLogResponse {
  /** 日志内容结果 */
  LogResults?: LogResObject;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTableRequest {
  /** 表名 */
  TableName: string;
  /** FlexDB实例ID */
  Tag?: string;
  /** 待删除索引信息 */
  DropIndexes?: DropIndex[];
  /** 待创建索引信息 */
  CreateIndexes?: CreateIndex[];
  /** 云开发环境ID */
  EnvId?: string;
  /** MongoDB连接器配置 */
  MongoConnector?: MongoConnector;
}

declare interface UpdateTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcb 云开发 CloudBase} */
declare interface Tcb {
  (): Versions;
  /** 添加第三方认证源 {@link AddProviderRequest} {@link AddProviderResponse} */
  AddProvider(data: AddProviderRequest, config?: AxiosRequestConfig): AxiosPromise<AddProviderResponse>;
  /** 绑定云开发自定义域名 {@link BindCloudBaseAccessDomainRequest} {@link BindCloudBaseAccessDomainResponse} */
  BindCloudBaseAccessDomain(data: BindCloudBaseAccessDomainRequest, config?: AxiosRequestConfig): AxiosPromise<BindCloudBaseAccessDomainResponse>;
  /** 绑定自定义域名 {@link BindCloudBaseGWDomainRequest} {@link BindCloudBaseGWDomainResponse} */
  BindCloudBaseGWDomain(data: BindCloudBaseGWDomainRequest, config?: AxiosRequestConfig): AxiosPromise<BindCloudBaseGWDomainResponse>;
  /** 检查是否开通Tcb服务 {@link CheckTcbServiceRequest} {@link CheckTcbServiceResponse} */
  CheckTcbService(data?: CheckTcbServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CheckTcbServiceResponse>;
  /** 增加安全域名 {@link CreateAuthDomainRequest} {@link CreateAuthDomainResponse} */
  CreateAuthDomain(data: CreateAuthDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuthDomainResponse>;
  /** 创建计费订单 {@link CreateBillDealRequest} {@link CreateBillDealResponse} */
  CreateBillDeal(data: CreateBillDealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBillDealResponse>;
  /** 创建云开发网关API {@link CreateCloudBaseGWAPIRequest} {@link CreateCloudBaseGWAPIResponse} */
  CreateCloudBaseGWAPI(data: CreateCloudBaseGWAPIRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudBaseGWAPIResponse>;
  /** 创建环境 {@link CreateEnvRequest} {@link CreateEnvResponse} */
  CreateEnv(data: CreateEnvRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvResponse>;
  /** 创建环境相关资源 {@link CreateEnvResourceRequest} {@link CreateEnvResourceResponse} */
  CreateEnvResource(data: CreateEnvResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvResourceResponse>;
  /** 创建托管域名 {@link CreateHostingDomainRequest} {@link CreateHostingDomainResponse} */
  CreateHostingDomain(data: CreateHostingDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostingDomainResponse>;
  /** 开通 MySql {@link CreateMySQLRequest} {@link CreateMySQLResponse} */
  CreateMySQL(data: CreateMySQLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMySQLResponse>;
  /** 创建静态托管资源 {@link CreateStaticStoreRequest} {@link CreateStaticStoreResponse} */
  CreateStaticStore(data: CreateStaticStoreRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStaticStoreResponse>;
  /** 创建文档型数据库表 {@link CreateTableRequest} {@link CreateTableResponse} */
  CreateTable(data: CreateTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTableResponse>;
  /** 创建tcb用户 {@link CreateUserRequest} {@link CreateUserResponse} */
  CreateUser(data: CreateUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserResponse>;
  /** 删除合法域名 {@link DeleteAuthDomainRequest} {@link DeleteAuthDomainResponse} */
  DeleteAuthDomain(data: DeleteAuthDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuthDomainResponse>;
  /** 删除网关API {@link DeleteCloudBaseGWAPIRequest} {@link DeleteCloudBaseGWAPIResponse} */
  DeleteCloudBaseGWAPI(data: DeleteCloudBaseGWAPIRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudBaseGWAPIResponse>;
  /** 删除网关域名 {@link DeleteCloudBaseGWDomainRequest} {@link DeleteCloudBaseGWDomainResponse} */
  DeleteCloudBaseGWDomain(data: DeleteCloudBaseGWDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudBaseGWDomainResponse>;
  /** 删除第三方认证源 {@link DeleteProviderRequest} {@link DeleteProviderResponse} */
  DeleteProvider(data: DeleteProviderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProviderResponse>;
  /** 删除文档型数据库表 {@link DeleteTableRequest} {@link DeleteTableResponse} */
  DeleteTable(data: DeleteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableResponse>;
  /** 删除tcb用户 {@link DeleteUsersRequest} {@link DeleteUsersResponse} */
  DeleteUsers(data: DeleteUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsersResponse>;
  /** 销毁服务器实例 {@link DeleteVmInstanceRequest} {@link DeleteVmInstanceResponse} */
  DeleteVmInstance(data: DeleteVmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVmInstanceResponse>;
  /** 获取安全域名列表 {@link DescribeAuthDomainsRequest} {@link DescribeAuthDomainsResponse} */
  DescribeAuthDomains(data: DescribeAuthDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthDomainsResponse>;
  /** 获取新套餐 {@link DescribeBaasPackageListRequest} {@link DescribeBaasPackageListResponse} */
  DescribeBaasPackageList(data?: DescribeBaasPackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaasPackageListResponse>;
  /** 获取计费相关信息 {@link DescribeBillingInfoRequest} {@link DescribeBillingInfoResponse} */
  DescribeBillingInfo(data?: DescribeBillingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingInfoResponse>;
  /** 查询应用客户端详情 {@link DescribeClientRequest} {@link DescribeClientResponse} */
  DescribeClient(data: DescribeClientRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClientResponse>;
  /** 获取云托管代码上传和下载url {@link DescribeCloudBaseBuildServiceRequest} {@link DescribeCloudBaseBuildServiceResponse} */
  DescribeCloudBaseBuildService(data: DescribeCloudBaseBuildServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseBuildServiceResponse>;
  /** 获取网关API列表 {@link DescribeCloudBaseGWAPIRequest} {@link DescribeCloudBaseGWAPIResponse} */
  DescribeCloudBaseGWAPI(data?: DescribeCloudBaseGWAPIRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseGWAPIResponse>;
  /** 获取网关服务 {@link DescribeCloudBaseGWServiceRequest} {@link DescribeCloudBaseGWServiceResponse} */
  DescribeCloudBaseGWService(data?: DescribeCloudBaseGWServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseGWServiceResponse>;
  /** 查询云托管服务版本的详情 {@link DescribeCloudBaseRunServerVersionRequest} {@link DescribeCloudBaseRunServerVersionResponse} */
  DescribeCloudBaseRunServerVersion(data: DescribeCloudBaseRunServerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudBaseRunServerVersionResponse>;
  /** 开通 MySql 结果查询 {@link DescribeCreateMySQLResultRequest} {@link DescribeCreateMySQLResultResponse} */
  DescribeCreateMySQLResult(data: DescribeCreateMySQLResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCreateMySQLResultResponse>;
  /** 查询环境监控曲线 {@link DescribeCurveDataRequest} {@link DescribeCurveDataResponse} */
  DescribeCurveData(data: DescribeCurveDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCurveDataResponse>;
  /** 获取文档型数据库权限 {@link DescribeDatabaseACLRequest} {@link DescribeDatabaseACLResponse} */
  DescribeDatabaseACL(data: DescribeDatabaseACLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseACLResponse>;
  /** 查询环境当前计费周期 {@link DescribeEnvAccountCircleRequest} {@link DescribeEnvAccountCircleResponse} */
  DescribeEnvAccountCircle(data: DescribeEnvAccountCircleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvAccountCircleResponse>;
  /** 查询环境个数上限接口 {@link DescribeEnvLimitRequest} {@link DescribeEnvLimitResponse} */
  DescribeEnvLimit(data?: DescribeEnvLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvLimitResponse>;
  /** 获取环境列表 {@link DescribeEnvsRequest} {@link DescribeEnvsResponse} */
  DescribeEnvs(data?: DescribeEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvsResponse>;
  /** 查询静态托管域名任务状态 {@link DescribeHostingDomainTaskRequest} {@link DescribeHostingDomainTaskResponse} */
  DescribeHostingDomainTask(data: DescribeHostingDomainTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostingDomainTaskResponse>;
  /** 获取登录策略 {@link DescribeLoginConfigRequest} {@link DescribeLoginConfigResponse} */
  DescribeLoginConfig(data: DescribeLoginConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoginConfigResponse>;
  /** 查询Mysql集群信息 {@link DescribeMySQLClusterDetailRequest} {@link DescribeMySQLClusterDetailResponse} */
  DescribeMySQLClusterDetail(data: DescribeMySQLClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMySQLClusterDetailResponse>;
  /** 销毁Mysql结果查询 {@link DescribeMySQLTaskStatusRequest} {@link DescribeMySQLTaskStatusResponse} */
  DescribeMySQLTaskStatus(data: DescribeMySQLTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMySQLTaskStatusResponse>;
  /** 查询环境的配额使用量 {@link DescribeQuotaDataRequest} {@link DescribeQuotaDataResponse} */
  DescribeQuotaData(data: DescribeQuotaDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuotaDataResponse>;
  /** 查询数据库安全规则 {@link DescribeSafeRuleRequest} {@link DescribeSafeRuleResponse} */
  DescribeSafeRule(data: DescribeSafeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSafeRuleResponse>;
  /** 查看静态托管资源信息 {@link DescribeStaticStoreRequest} {@link DescribeStaticStoreResponse} */
  DescribeStaticStore(data: DescribeStaticStoreRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStaticStoreResponse>;
  /** 查询文档型数据库表信息 {@link DescribeTableRequest} {@link DescribeTableResponse} */
  DescribeTable(data: DescribeTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableResponse>;
  /** 查询文档型数据库所有表信息 {@link DescribeTablesRequest} {@link DescribeTablesResponse} */
  DescribeTables(data: DescribeTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesResponse>;
  /** 查询tcb用户列表 {@link DescribeUserListRequest} {@link DescribeUserListResponse} */
  DescribeUserList(data: DescribeUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserListResponse>;
  /** 查询环境下的服务器实例 {@link DescribeVmInstancesRequest} {@link DescribeVmInstancesResponse} */
  DescribeVmInstances(data: DescribeVmInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVmInstancesResponse>;
  /** 获取VM规格 {@link DescribeVmSpecRequest} {@link DescribeVmSpecResponse} */
  DescribeVmSpec(data?: DescribeVmSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVmSpecResponse>;
  /** 销毁环境 {@link DestroyEnvRequest} {@link DestroyEnvResponse} */
  DestroyEnv(data: DestroyEnvRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyEnvResponse>;
  /** 销毁MySql {@link DestroyMySQLRequest} {@link DestroyMySQLResponse} */
  DestroyMySQL(data: DestroyMySQLRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyMySQLResponse>;
  /** 销毁静态托管资源 {@link DestroyStaticStoreRequest} {@link DestroyStaticStoreResponse} */
  DestroyStaticStore(data: DestroyStaticStoreRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyStaticStoreResponse>;
  /** 编辑登录配置 {@link EditAuthConfigRequest} {@link EditAuthConfigResponse} */
  EditAuthConfig(data: EditAuthConfigRequest, config?: AxiosRequestConfig): AxiosPromise<EditAuthConfigResponse>;
  /** 获取三方认证源列表 {@link GetProvidersRequest} {@link GetProvidersResponse} */
  GetProviders(data: GetProvidersRequest, config?: AxiosRequestConfig): AxiosPromise<GetProvidersResponse>;
  /** 查询云服务器价格 {@link InquireVmPriceRequest} {@link InquireVmPriceResponse} */
  InquireVmPrice(data: InquireVmPriceRequest, config?: AxiosRequestConfig): AxiosPromise<InquireVmPriceResponse>;
  /** 查询文档型数据库所有表 {@link ListTablesRequest} {@link ListTablesResponse} */
  ListTables(data: ListTablesRequest, config?: AxiosRequestConfig): AxiosPromise<ListTablesResponse>;
  /** 修改应用客户端 {@link ModifyClientRequest} {@link ModifyClientResponse} */
  ModifyClient(data: ModifyClientRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClientResponse>;
  /** 修改云开发网关API {@link ModifyCloudBaseGWAPIRequest} {@link ModifyCloudBaseGWAPIResponse} */
  ModifyCloudBaseGWAPI(data: ModifyCloudBaseGWAPIRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudBaseGWAPIResponse>;
  /** 修改日志主题 {@link ModifyClsTopicRequest} {@link ModifyClsTopicResponse} */
  ModifyClsTopic(data: ModifyClsTopicRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClsTopicResponse>;
  /** 修改文档型数据库权限 {@link ModifyDatabaseACLRequest} {@link ModifyDatabaseACLResponse} */
  ModifyDatabaseACL(data: ModifyDatabaseACLRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDatabaseACLResponse>;
  /** 更新环境信息 {@link ModifyEnvRequest} {@link ModifyEnvResponse} */
  ModifyEnv(data: ModifyEnvRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvResponse>;
  /** 更新云开发环境套餐 {@link ModifyEnvPlanRequest} {@link ModifyEnvPlanResponse} */
  ModifyEnvPlan(data: ModifyEnvPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEnvPlanResponse>;
  /** 修改登录策略 {@link ModifyLoginConfigRequest} {@link ModifyLoginConfigResponse} */
  ModifyLoginConfig(data: ModifyLoginConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoginConfigResponse>;
  /** 修改第三方认证源 {@link ModifyProviderRequest} {@link ModifyProviderResponse} */
  ModifyProvider(data: ModifyProviderRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProviderResponse>;
  /** 设置数据库安全规则 {@link ModifySafeRuleRequest} {@link ModifySafeRuleResponse} */
  ModifySafeRule(data: ModifySafeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySafeRuleResponse>;
  /** 更新tcb用户 {@link ModifyUserRequest} {@link ModifyUserResponse} */
  ModifyUser(data: ModifyUserRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserResponse>;
  /** 恢复环境，解除隔离状态 {@link ReinstateEnvRequest} {@link ReinstateEnvResponse} */
  ReinstateEnv(data: ReinstateEnvRequest, config?: AxiosRequestConfig): AxiosPromise<ReinstateEnvResponse>;
  /** 续费云开发环境 {@link RenewEnvRequest} {@link RenewEnvResponse} */
  RenewEnv(data: RenewEnvRequest, config?: AxiosRequestConfig): AxiosPromise<RenewEnvResponse>;
  /** 执行文档型数据库命令 {@link RunCommandsRequest} {@link RunCommandsResponse} */
  RunCommands(data: RunCommandsRequest, config?: AxiosRequestConfig): AxiosPromise<RunCommandsResponse>;
  /** 执行MySQL语句 {@link RunSqlRequest} {@link RunSqlResponse} */
  RunSql(data: RunSqlRequest, config?: AxiosRequestConfig): AxiosPromise<RunSqlResponse>;
  /** 搜索CLS日志 {@link SearchClsLogRequest} {@link SearchClsLogResponse} */
  SearchClsLog(data: SearchClsLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClsLogResponse>;
  /** 修改文档型数据库表索引信息 {@link UpdateTableRequest} {@link UpdateTableResponse} */
  UpdateTable(data: UpdateTableRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTableResponse>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  AddCustomDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ApplyVoucher(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CancelDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CancelWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CheckEnvId(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CheckEnvPackageModify(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CheckQualification(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CloseWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CloudBaseRunPipelineOperation(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CommonServiceAPI(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateActivityDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCloudBaseRunResAuth(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCloudBaseRunResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCloudBaseRunServerVersion(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateCopyRepoTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateEnvAndResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateInstallExtensionTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateInvoice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateLoginConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreatePostpayPackage(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateUninstallExtensionTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateUpgradeExtensionTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunDBAccount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunEnv(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunPipeline(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxCloudBaseRunServerDBCluster(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateWxRunPackageDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DatabaseMigrateExport(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DatabaseMigrateImport(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DatabaseMigrateQueryInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunImageRepo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunServerVersion(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudBaseRunServerVersionBatch(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteCustomDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteOauthRecord(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteVoucherApplication(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteWxCloudBaseRunDBAccount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteWxCloudBaseRunPipeline(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteWxCloudBaseRunServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeployCloudBaseRunOnOneClick(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeployWxCloudBaseRunOnOneClick(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeAccountInfoByPlatformId(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeActivityGoods(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeAmountAfterDeduction(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeAuthentification(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeBuild(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeBuildInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCDNChainTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCerts(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeChangePay(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseCodeBranch(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseCodeRepos(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBaseImages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildStages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildStepLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunBuildSteps(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunContainerSpec(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunCynosdbMonitorData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunImages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunOperationDetails(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunPodList(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunProcessLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunResAuth(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunServers(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunServiceDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunVersionException(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudBaseRunVersionSnapshot(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudRunPeeringConnection(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCloudRunPeeringConnectionQuota(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCommits(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCommonBillingResources(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeCustomDomains(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeDauData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeDbDistribution(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeDeployOnOneClickTasks(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeEnvFreeQuota(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeEnvPostpayPackage(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeEnvResourceException(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionInstalled(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionTaskStatus(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionTemplates(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensionUpgrade(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeExtensions(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeIntranetAccessInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceAmount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceDetail(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceList(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeInvoiceSubject(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeLastReleaseType(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeLoginConfigs(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeMonitorResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeNextExpireTime(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeOauthRecords(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeOneClickTaskLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePackages(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePayInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePipelineReleaseLog(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePostpayFreeQuotas(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePostpayPackageList(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribePostpayQuotaLimit(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeQcloudScene(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeRepos(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeResourceLimit(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeResourceRecoverJob(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeRestoreHistory(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSecurityRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeServerManageTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeServiceBaseConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeServiceEndpoints(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSmsAttrInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSmsQuotas(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeSmsRecords(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStatData(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStorageACL(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStorageACLTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeStorageSafeRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeTcbBalance(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeTemplateTypes(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeTopology(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeUsers(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVoucherApplication(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVoucherPlanAvailable(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVouchersInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeVouchersInfoByDeal(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunDBAccounts(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunDBClusterDetail(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunDBParams(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunEnvs(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunFreeQuota(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunPipelineTasks(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunPipelines(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunReleaseOrder(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxCloudBaseRunSubNets(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DescribeWxRunPackageGoods(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  EditCustomDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  EnableIntranetAccess(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  EstablishCloudBaseRunServer(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  EstablishCloudBaseRunServerWx(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  FreezeCloudBaseRunServers(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  GetRecommendedCname(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  InqueryPackagePrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  InqueryPostpayPrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  InqueryPrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyCloudBaseRunServerFlowConf(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyCloudBaseRunServerVersion(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyCloudBaseRunServiceDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyInvoicePostInfo(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyMonitorCondition(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyMonitorPolicy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifySecurityRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyStorageACL(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyStorageSafeRule(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxCloudBaseRunDBAccount(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxCloudBaseRunDBParam(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxCloudBaseRunDBServerlessStrategy(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ModifyWxEnvExtraAttribute(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  OnlineHostingDomain(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  OperateServerManage(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  QueryActivityPrice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  QueryDeals(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  QueryWxEnvExtraAttribute(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RefundPostpaidPackage(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ReleaseWxCloudBaseRunVersion(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ReleaseWxCloudBaseRunVersionForGray(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ResetWxCloudBaseRunDBPassword(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ResourceRecover(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RestartCloudBaseRunOneClickTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RestartOneClickTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RestartServerDeployTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ResumeCloudBaseRunTdsql(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RevokeInvoice(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  RollUpdateCloudBaseRunServerVersion(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SetCommonRenewFlag(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SetInvoiceSubject(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  StopOneClickTask(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SubmitServerConfigChange(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SubmitServerRelease(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SubmitServerRollback(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  SwitchCloudRunCynosdbWan(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UnfreezeCloudBaseRunServers(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateLoginConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdatePostpayQuotaLimit(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdatePostpayQuotaLimitStatus(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateScfConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateServerBaseConfig(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UploadCert(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
}

export declare type Versions = ["2018-06-08"];

export default Tcb;
