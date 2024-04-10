/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateSessionRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 【已废弃】只在TrylockWorker时生效 */
  GameId: string;
  /** 【已废弃】只在TrylockWorker时生效 */
  GameRegion?: string;
  /** 游戏参数 */
  GameParas?: string;
  /** 客户端session信息，从JSSDK请求中获得。特殊的，当 RunMode 参数为 RunWithoutClient 时，该字段可以为空 */
  ClientSession?: string;
  /** 分辨率,，可设置为1080p或720p或1920x1080格式 */
  Resolution?: string;
  /** 背景图url，格式为png或jpeg，宽高1920*1080 */
  ImageUrl?: string;
  /** 【已废弃】 */
  SetNo?: number;
  /** 【已废弃】 */
  Bitrate?: number;
  /** 单位Mbps，动态调整最大码率建议值，会按实际情况调整 */
  MaxBitrate?: number;
  /** 单位Mbps，动态调整最小码率建议值，会按实际情况调整 */
  MinBitrate?: number;
  /** 帧率，可设置为30、45、60、90、120、144 */
  Fps?: number;
  /** 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验 */
  UserIp?: string;
  /** 【已废弃】优化项，便于客户灰度开启新的优化项，默认为0 */
  Optimization?: number;
  /** 【互动云游】游戏主机用户ID */
  HostUserId?: string;
  /** 【互动云游】角色；Player表示玩家；Viewer表示观察者 */
  Role?: string;
  /** 游戏相关参数 */
  GameContext?: string;
  /** 云端运行模式。RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行默认值（空）：要求必须有客户端连接才会保持云端 App 运行。 */
  RunMode?: string;
}

declare interface CreateSessionResponse {
  /** 服务端session信息，返回给JSSDK */
  ServerSession?: string;
  /** 【已废弃】 */
  RoleNumber?: string;
  /** 【互动云游】角色；Player表示玩家；Viewer表示观察者 */
  Role?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesCountRequest {
  /** 游戏ID */
  GameId?: string;
  /** 实例分组ID */
  GroupId?: string;
  /** 游戏区域 */
  GameRegion?: string;
  /** 游戏类型。MOBILE：手游PC：默认值，端游 */
  GameType?: string;
}

declare interface DescribeInstancesCountResponse {
  /** 客户的实例总数 */
  Total?: number;
  /** 客户的实例运行数 */
  Running?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SaveGameArchiveRequest {
  /** 游戏用户ID */
  UserId: string;
  /** 游戏ID */
  GameId: string;
}

declare interface SaveGameArchiveResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartPublishStreamRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 推流地址，仅支持rtmp协议 */
  PublishUrl: string;
}

declare interface StartPublishStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartPublishStreamToCSSRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 推流参数，推流时携带自定义参数。 */
  PublishStreamArgs?: string;
}

declare interface StartPublishStreamToCSSResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopGameRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 【多人游戏】游戏主机用户ID */
  HostUserId?: string;
}

declare interface StopGameResponse {
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

declare interface SwitchGameArchiveRequest {
  /** 游戏用户ID */
  UserId: string;
  /** 游戏ID */
  GameId: string;
  /** 游戏存档Url */
  GameArchiveUrl?: string;
  /** 游戏相关参数 */
  GameContext?: string;
}

declare interface SwitchGameArchiveResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TrylockWorkerRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 游戏ID */
  GameId: string;
  /** 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等，如果不为空，优先按照该区域进行调度分配机器 */
  GameRegion?: string;
  /** 【废弃】资源池编号 */
  SetNo?: number;
  /** 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验 */
  UserIp?: string;
  /** 分组ID */
  GroupId?: string;
}

declare interface TrylockWorkerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Gs 云游戏} */
declare interface Gs {
  (): Versions;
  /** 创建会话 {@link CreateSessionRequest} {@link CreateSessionResponse} */
  CreateSession(data: CreateSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSessionResponse>;
  /** 获取并发总数和运行数 {@link DescribeInstancesCountRequest} {@link DescribeInstancesCountResponse} */
  DescribeInstancesCount(data?: DescribeInstancesCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesCountResponse>;
  /** 保存游戏存档 {@link SaveGameArchiveRequest} {@link SaveGameArchiveResponse} */
  SaveGameArchive(data: SaveGameArchiveRequest, config?: AxiosRequestConfig): AxiosPromise<SaveGameArchiveResponse>;
  /** 开始云端推流 {@link StartPublishStreamRequest} {@link StartPublishStreamResponse} */
  StartPublishStream(data: StartPublishStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishStreamResponse>;
  /** 开始云端推流到云直播 {@link StartPublishStreamToCSSRequest} {@link StartPublishStreamToCSSResponse} */
  StartPublishStreamToCSS(data: StartPublishStreamToCSSRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishStreamToCSSResponse>;
  /** 强制退出游戏 {@link StopGameRequest} {@link StopGameResponse} */
  StopGame(data: StopGameRequest, config?: AxiosRequestConfig): AxiosPromise<StopGameResponse>;
  /** 停止云端推流 {@link StopPublishStreamRequest} {@link StopPublishStreamResponse} */
  StopPublishStream(data: StopPublishStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StopPublishStreamResponse>;
  /** 切换游戏存档 {@link SwitchGameArchiveRequest} {@link SwitchGameArchiveResponse} */
  SwitchGameArchive(data: SwitchGameArchiveRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchGameArchiveResponse>;
  /** 尝试锁定机器 {@link TrylockWorkerRequest} {@link TrylockWorkerResponse} */
  TrylockWorker(data: TrylockWorkerRequest, config?: AxiosRequestConfig): AxiosPromise<TrylockWorkerResponse>;
}

export declare type Versions = ["2019-11-18"];

export default Gs;
