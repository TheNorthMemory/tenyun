/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 环境变量 */
declare interface Env {
  /** 环境变量 key */
  Name: string | null;
  /** 环境变量 value */
  Value: string | null;
}

/** Git 仓库 */
declare interface GitRepository {
  /** Git 仓库地址 */
  Url: string;
  /** Git 仓库分支名或 Tag 名 */
  Branch?: string;
}

/** 基础镜像 */
declare interface Image {
  /** 镜像名称 */
  Name?: string;
  /** 镜像仓库 */
  Repository?: string;
  /** tag 列表 */
  Tags?: string[];
}

/** 工作空间生命周期自动执行脚本 */
declare interface LifeCycle {
  /** 工作空间首次初始化时执行 */
  Init?: LifeCycleCommand[] | null;
  /** 每次工作空间启动时执行 */
  Start?: LifeCycleCommand[] | null;
  /** 每次工作空间关闭时执行 */
  Destroy?: LifeCycleCommand[] | null;
}

/** 工作空间生命周期执行指令 */
declare interface LifeCycleCommand {
  /** 指令描述 */
  Name: string | null;
  /** 具体命令 */
  Command: string | null;
}

/** 获取用户工作空间返回信息 */
declare interface WorkspaceStatusInfo {
  /** 工作空间 ID */
  Id: number;
  /** 工作空间名称 */
  Name: string;
  /** 工作空间标识 */
  SpaceKey: string;
  /** 工作空间状态 */
  Status: string;
  /** CPU数量 */
  Cpu: number;
  /** 内存 */
  Memory: number;
  /** 工作空间图标 */
  Icon?: string | null;
  /** 工作空间状态, 异常原因 */
  StatusReason?: string | null;
  /** 工作空间描述 */
  Description: string | null;
  /** 工作空间类型 */
  WorkspaceType?: string | null;
  /** Git 仓库 HTTPS 地址 */
  VersionControlUrl: string | null;
  /** Git 仓库引用。指定分支使用 /refs/heads/{分支名}, 指定 Tag 用 /refs/tags/{Tag名} */
  VersionControlRef: string | null;
  /** 最后操作时间 */
  LastOpsDate: string | null;
  /** 创建时间 */
  CreateDate: string | null;
}

declare interface CreateWorkspaceRequest {
  /** 工作空间名称 */
  Name: string;
  /** 工作空间描述 */
  Description?: string;
  /** 工作空间规格。Standard: 2C4G, Calculation: 4C8G, Profession: 8C16G. 默认是 Standard。 */
  Specs?: string;
  /** 工作空间基础镜像名称, 默认会使用 All In One 镜像 */
  Image?: string;
  /** Git 仓库. 工作空间启动时会自动克隆该仓库 */
  Repository?: GitRepository;
  /** 环境变量. 会被注入到工作空间中 */
  Envs?: Env[];
  /** 预装插件. 工作空间启动时, 会自动安装这些插件 */
  Extensions?: string[];
  /** 工作空间生命周期钩子. 分为三个阶段 init, start, destroy. 分别表示工作空间数据初始化阶段, 工作空间启动阶段, 工作空间关闭阶段. 用户可以自定义 shell 命令. */
  Lifecycle?: LifeCycle;
}

declare interface CreateWorkspaceResponse {
  /** 工作空间 SpaceKey */
  SpaceKey?: string;
  /** 工作空间名称 */
  Name?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkspaceTokenRequest {
  /** 工作空间 SpaceKey */
  SpaceKey: string;
  /** token过期时间，单位是秒，默认 3600 */
  TokenExpiredLimitSec?: number;
  /** token 授权策略，可选值为 workspace-run-only, all。默认为 all */
  Policies?: string[];
}

declare interface CreateWorkspaceTokenResponse {
  /** 访问工作空间临时凭证 */
  Token?: string;
  /** token 过期时间 */
  ExpiredTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigRequest {
  /** 配置名称 */
  Name: string;
}

declare interface DescribeConfigResponse {
  /** 配置值 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImagesRequest {
}

declare interface DescribeImagesResponse {
  /** 镜像列表 */
  Images?: Image[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspacesRequest {
  /** 工作空间名称过滤条件 */
  Name?: string;
}

declare interface DescribeWorkspacesResponse {
  /** 工作空间列表 */
  Data?: WorkspaceStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWorkspaceRequest {
  /** 工作空间 SpaceKey. 更新该工作空间的属性 */
  SpaceKey: string;
  /** 工作空间名称 */
  Name?: string;
  /** 工作空间描述 */
  Description?: string;
  /** 工作空间规格。STANDARD: 2C4G, CALCULATION: 4C8G, PROFESSION: 8C16G. 默认是 STANDARD。 */
  Specs?: string;
  /** 环境变量. 会被注入到工作空间中 */
  Envs?: Env[];
  /** 预装插件. 工作空间启动时, 会自动安装这些插件 */
  Extensions?: string[];
  /** 工作空间生命周期钩子. 分为三个阶段 init, start, destroy. 分别表示工作空间数据初始化阶段, 工作空间启动阶段, 工作空间关闭阶段. 用户可以自定义 shell 命令. */
  Lifecycle?: LifeCycle;
}

declare interface ModifyWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveWorkspaceRequest {
  /** 工作空间 SpaceKey */
  SpaceKey: string;
}

declare interface RemoveWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunWorkspaceRequest {
  /** 工作空间 SpaceKey */
  SpaceKey: string;
}

declare interface RunWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopWorkspaceRequest {
  /** 工作空间 SpaceKey */
  SpaceKey: string;
}

declare interface StopWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cloudstudio Cloud Studio（云端 IDE）} */
declare interface Cloudstudio {
  (): Versions;
  /** 创建工作空间 {@link CreateWorkspaceRequest} {@link CreateWorkspaceResponse} */
  CreateWorkspace(data: CreateWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceResponse>;
  /** 创建工作空间临时访问凭证 {@link CreateWorkspaceTokenRequest} {@link CreateWorkspaceTokenResponse} */
  CreateWorkspaceToken(data: CreateWorkspaceTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceTokenResponse>;
  /** 获取用户配置 {@link DescribeConfigRequest} {@link DescribeConfigResponse} */
  DescribeConfig(data: DescribeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigResponse>;
  /** 获取基础镜像列表 {@link DescribeImagesRequest} {@link DescribeImagesResponse} */
  DescribeImages(data?: DescribeImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImagesResponse>;
  /** 获取用户工作空间列表 {@link DescribeWorkspacesRequest} {@link DescribeWorkspacesResponse} */
  DescribeWorkspaces(data?: DescribeWorkspacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspacesResponse>;
  /** 修改工作空间 {@link ModifyWorkspaceRequest} {@link ModifyWorkspaceResponse} */
  ModifyWorkspace(data: ModifyWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkspaceResponse>;
  /** 删除工作空间 {@link RemoveWorkspaceRequest} {@link RemoveWorkspaceResponse} */
  RemoveWorkspace(data: RemoveWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveWorkspaceResponse>;
  /** 运行空间 {@link RunWorkspaceRequest} {@link RunWorkspaceResponse} */
  RunWorkspace(data: RunWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<RunWorkspaceResponse>;
  /** 停止运行空间 {@link StopWorkspaceRequest} {@link StopWorkspaceResponse} */
  StopWorkspace(data: StopWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<StopWorkspaceResponse>;
}

export declare type Versions = ["2023-05-08"];

export default Cloudstudio;
