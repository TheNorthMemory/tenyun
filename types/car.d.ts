/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface ApplyConcurrentRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 用户IP，用户客户端的公网IP，用于就近调度 */
  UserIp: string;
  /** 项目ID */
  ProjectId: string;
  /** 应用版本ID */
  ApplicationVersionId?: string;
  /** 应用ID。如果是独享项目，将忽略该参数，使用项目绑定的应用。如果是共享项目，使用该参数来指定应用。 */
  ApplicationId?: string;
}

declare interface ApplyConcurrentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSessionRequest {
  /** 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变） */
  UserId: string;
  /** 用户IP，用户客户端的公网IP，用于就近调度 */
  UserIp: string;
  /** 客户端session信息，从SDK请求中获得 */
  ClientSession: string;
  /** 云端运行模式。RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行默认值（空）：要求必须有客户端连接才会保持云端 App 运行。 */
  RunMode?: string;
}

declare interface CreateSessionResponse {
  /** 服务端session信息，返回给SDK */
  ServerSession?: string;
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

/** {@link Car 应用云渲染} */
declare interface Car {
  (): Versions;
  /** 申请并发 {@link ApplyConcurrentRequest} {@link ApplyConcurrentResponse} */
  ApplyConcurrent(data: ApplyConcurrentRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyConcurrentResponse>;
  /** 创建会话 {@link CreateSessionRequest} {@link CreateSessionResponse} */
  CreateSession(data: CreateSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSessionResponse>;
  /** 销毁会话 {@link DestroySessionRequest} {@link DestroySessionResponse} */
  DestroySession(data: DestroySessionRequest, config?: AxiosRequestConfig): AxiosPromise<DestroySessionResponse>;
}

export declare type Versions = ["2022-01-10"];

export default Car;
