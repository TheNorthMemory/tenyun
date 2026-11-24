/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 查询过滤条件 */
declare interface Filter {
  /** 过滤字段名（ApplicationId 应用Id、ApplicationName 应用名称、ApplicationRunStatus 运行状态、ApplicationUpdateStatus 更新状态） */
  Name: string;
  /** 过滤值集合（当过滤 Name 为 ApplicationRunStatus 时，Values 取值为 [ApplicationDeleting 应用删除中、ApplicationCreateFail 应用创建失败、ApplicationCreating 应用创建中、ApplicationRunning 正常运行、ApplicationNoConfigured 主执行程序路径未配置 ]。当过滤 Name 为 ApplicationUpdateStatus 时，Values 取值 [ApplicationUpdateCreating 版本创建中、ApplicationUpdateCreateFail 版本创建失败、ApplicationUpdateNoReleased 版本待发布、ApplicationUpdateReleased 版本发布完成、ApplicationUpdateNormal 无]） */
  Values: string[];
}

/** MCP Token 信息 */
declare interface MCPTokenInfo {
  /** TokenId用于管理 Token 数据，可用来延长对应 Token 有效时间 */
  TokenId?: string;
  /** Token 名称（注释） */
  TokenName?: string;
  /** 用户 Id固定使用这个 UserId 来操作云渲染并发资源（为空不限制） */
  UserId?: string;
  /** 权限范围默认值：["*"]用于指定操作权限，默认拥有全部权限 */
  Scopes?: string[];
  /** Token 状态枚举值：ACTIVE： 正常状态，未被吊销。不代表还在有效期内REVOKED： 已被吊销，永久失效默认值：ACTIVE */
  Status?: string;
  /** Token 创建时间 */
  CreatedTime?: string;
  /** Token 过期时间 */
  ExpiresTime?: string;
}

declare interface ApplyConcurrentRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 用户IP，用户客户端的公网IP，用于就近调度 */
  UserIp: string;
  /** 项目ID */
  ProjectId: string;
  /** 应用版本ID。如果请求应用的当前版本，可以不用填写该字段。如果请求应用的其它版本时，才需要通过该字段来指定应用的版本。 */
  ApplicationVersionId?: string;
  /** 应用ID。如果是独享项目，将忽略该参数，使用项目绑定的应用。如果是共享项目，使用该参数来指定应用。 */
  ApplicationId?: string;
}

declare interface ApplyConcurrentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMCPTokenRequest {
  /** Token 过期时间取值范围：[0, 2592000]单位：秒默认值：86400不填的话，默认为 1 天超时；过期时间为当前时间 + 超时时间 */
  ExpireSeconds: number;
  /** Token 名称（注释）参数格式：只支持：中英文、数字、连字符 "-" 的组合长度不得超过 16 个字符 */
  TokenName?: string;
  /** 用户 Id参数格式：只支持：字母（A-Za-z）、数字（0-9）、下划线（_）的组合固定使用这个 UserId 来操作云渲染并发资源，长度不能超过 64 个字符 */
  UserId?: string;
}

declare interface CreateMCPTokenResponse {
  /** TokenId */
  TokenId?: string;
  /** MCP Token 当前值请妥善保存，后续需要使用该 Token 和 MCP Server 进行通信操作，丢失后无法再查看 */
  Token?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSessionRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 用户IP，用户客户端的公网IP，用于就近调度 */
  UserIp: string;
  /** 客户端session信息，从SDK请求中获得。特殊的，当 RunMode 参数为 RunWithoutClient 时，该字段可以为空 */
  ClientSession?: string;
  /** 云端运行模式。RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行默认值（空）：要求必须有客户端连接才会保持云端 App 运行。 */
  RunMode?: string;
  /** 应用启动参数。如果请求的是多应用共享项目，此参数生效；如果请求的是关闭预启动的单应用独享项目，此参数生效；如果请求的是开启预启动的单应用独享项目，此参数失效。注意：在此参数生效的情况下，将会被追加到控制台应用或项目配置的启动参数的后面。例如，对于某关闭预启动的单应用独享项目，若在控制台中项目配置的启动参数为bar=0，而ApplicationParameters参数为foo=1，则实际应用启动参数为bar=0 foo=1。 */
  ApplicationParameters?: string;
  /** 【多人互动】房主用户ID，在多人互动模式下为必填字段。如果该用户是房主，HostUserId需要和UserId保持一致；如果该用户非房主，HostUserId需要填写房主的HostUserId。 */
  HostUserId?: string;
  /** 【多人互动】角色。Player：玩家（可通过键鼠等操作应用）Viewer：观察者（只能观看，无法操作） */
  Role?: string;
}

declare interface CreateSessionResponse {
  /** 服务端session信息，返回给SDK */
  ServerSession?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConcurrentCountRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 应用类别（DESKTOP: 桌面端，MOBILE：移动端） */
  ApplicationCategory?: string;
}

declare interface DescribeConcurrentCountResponse {
  /** 并发总数 */
  Total?: number;
  /** 并发运行数，包括预启动中的、已连接的、等待重连、清理恢复等所有非空闲的并发数，所以刷新项目或断开并发包的用户连接，都会影响到该值 */
  Running?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMCPTokensRequest {
  /** 偏移量 */
  Offset?: number;
  /** 单页数量取值范围：[0, 200]默认值：20如果传入 0 会使用默认值 */
  Limit?: number;
  /** 过滤器列表只支持 TokenId 和 TokenName 过滤，Filters 数量不能超过 10、每个 Filter 的 Values 个数不能超过 20、单个 Value 长度不能超过 64 个字符、不允许同名 Filter 出现 */
  Filters?: Filter[];
}

declare interface DescribeMCPTokensResponse {
  /** Token 列表 */
  Tokens?: MCPTokenInfo[];
  /** Token 数量单位：个 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroySessionRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
}

declare interface DestroySessionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewMCPTokenRequest {
  /** TokenId */
  TokenId: string;
  /** Token 过期时间取值范围：[0, 2592000]默认值：86400单位 秒、不填的话，默认为 1 天；新的超时时间为，当前时刻 + ExpireSeconds */
  ExpireSeconds: number;
}

declare interface RenewMCPTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartPublishStreamRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（UserId将作为StreamId进行推流，比如绑定推流域名为abc.livepush.myqcloud.com，那么推流地址为rtmp://abc.livepush.myqcloud.com/live/UserId?txSecret=xxx&txTime=xxx） */
  UserId: string;
  /** 推流参数，推流时携带自定义参数。 */
  PublishStreamArgs?: string;
}

declare interface StartPublishStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartPublishStreamWithURLRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。 */
  UserId: string;
  /** 推流地址，仅支持rtmp协议。 */
  PublishStreamURL: string;
}

declare interface StartPublishStreamWithURLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopPublishStreamRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
}

declare interface StopPublishStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Car 应用云渲染} */
declare interface Car {
  (): Versions;
  /** 申请并发 {@link ApplyConcurrentRequest} {@link ApplyConcurrentResponse} */
  ApplyConcurrent(data: ApplyConcurrentRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyConcurrentResponse>;
  /** 创建 MCP Token {@link CreateMCPTokenRequest} {@link CreateMCPTokenResponse} */
  CreateMCPToken(data: CreateMCPTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMCPTokenResponse>;
  /** 创建会话 {@link CreateSessionRequest} {@link CreateSessionResponse} */
  CreateSession(data: CreateSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSessionResponse>;
  /** 获取并发计数 {@link DescribeConcurrentCountRequest} {@link DescribeConcurrentCountResponse} */
  DescribeConcurrentCount(data?: DescribeConcurrentCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConcurrentCountResponse>;
  /** 查询 MCP Token 列表 {@link DescribeMCPTokensRequest} {@link DescribeMCPTokensResponse} */
  DescribeMCPTokens(data?: DescribeMCPTokensRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMCPTokensResponse>;
  /** 销毁会话 {@link DestroySessionRequest} {@link DestroySessionResponse} */
  DestroySession(data: DestroySessionRequest, config?: AxiosRequestConfig): AxiosPromise<DestroySessionResponse>;
  /** 续期 MCP Token {@link RenewMCPTokenRequest} {@link RenewMCPTokenResponse} */
  RenewMCPToken(data: RenewMCPTokenRequest, config?: AxiosRequestConfig): AxiosPromise<RenewMCPTokenResponse>;
  /** 开始云端推流 {@link StartPublishStreamRequest} {@link StartPublishStreamResponse} */
  StartPublishStream(data: StartPublishStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishStreamResponse>;
  /** 开始云端推流到指定URL {@link StartPublishStreamWithURLRequest} {@link StartPublishStreamWithURLResponse} */
  StartPublishStreamWithURL(data: StartPublishStreamWithURLRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishStreamWithURLResponse>;
  /** 停止云端推流 {@link StopPublishStreamRequest} {@link StopPublishStreamResponse} */
  StopPublishStream(data: StopPublishStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StopPublishStreamResponse>;
}

export declare type Versions = ["2022-01-10"];

export default Car;
