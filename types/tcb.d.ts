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

/** FlexDB数据库权限信息 */
declare interface PermissionInfo {
  /** "READONLY", //公有读，私有写。所有用户可读，仅创建者及管理员可写 "PRIVATE", //私有读写，仅创建者及管理员可读写 "ADMINWRITE", //所有用户可读，仅管理员可写 "ADMINONLY", //仅管理员可操作 "CUSTOM", // 安全规则 */
  AclTag: string;
  /** 云开发环境ID */
  EnvId: string;
  /** 自定义规则 */
  Rule?: string;
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
  /** 域名ID列表，支持批量 */
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
  /** 删除文档型数据库表 {@link DeleteTableRequest} {@link DeleteTableResponse} */
  DeleteTable(data: DeleteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableResponse>;
  /** 删除tcb用户 {@link DeleteUsersRequest} {@link DeleteUsersResponse} */
  DeleteUsers(data: DeleteUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsersResponse>;
  /** 获取安全域名列表 {@link DescribeAuthDomainsRequest} {@link DescribeAuthDomainsResponse} */
  DescribeAuthDomains(data: DescribeAuthDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthDomainsResponse>;
  /** 获取新套餐 {@link DescribeBaasPackageListRequest} {@link DescribeBaasPackageListResponse} */
  DescribeBaasPackageList(data?: DescribeBaasPackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaasPackageListResponse>;
  /** 获取计费相关信息 {@link DescribeBillingInfoRequest} {@link DescribeBillingInfoResponse} */
  DescribeBillingInfo(data?: DescribeBillingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingInfoResponse>;
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
  /** 销毁环境 {@link DestroyEnvRequest} {@link DestroyEnvResponse} */
  DestroyEnv(data: DestroyEnvRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyEnvResponse>;
  /** 销毁MySql {@link DestroyMySQLRequest} {@link DestroyMySQLResponse} */
  DestroyMySQL(data: DestroyMySQLRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyMySQLResponse>;
  /** 销毁静态托管资源 {@link DestroyStaticStoreRequest} {@link DestroyStaticStoreResponse} */
  DestroyStaticStore(data: DestroyStaticStoreRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyStaticStoreResponse>;
  /** 编辑登录配置 {@link EditAuthConfigRequest} {@link EditAuthConfigResponse} */
  EditAuthConfig(data: EditAuthConfigRequest, config?: AxiosRequestConfig): AxiosPromise<EditAuthConfigResponse>;
  /** 查询文档型数据库所有表 {@link ListTablesRequest} {@link ListTablesResponse} */
  ListTables(data: ListTablesRequest, config?: AxiosRequestConfig): AxiosPromise<ListTablesResponse>;
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
