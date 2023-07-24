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

declare namespace V20210524 {
  type VersionHeader = { headers: { 'X-TC-Version': '2021-05-24' } }

  /** 云服务器创建工作空间 DTO */
  interface AgentSpaceDTO {
    /** 工作空间名称 */
    Name: string;
    /** 镜像id */
    ImageId: number;
    /** 镜像名称 */
    ImageName: string;
    /** 云服务器登录名称 */
    RemoteUser: string;
    /** 云服务器登录地址 */
    RemoteHost: string;
    /** 云服务器登录端口 */
    RemotePort: string;
    /** 工作空间类型 */
    WorkspaceType: string;
    /** 工作空间版本 */
    WorkspaceVersion: number;
    /** 工作空间资源结构 */
    WorkspaceResourceDTO: WorkspaceResourceDTO;
    /** 描述 */
    Description?: string;
  }

  /** 模板的预置参数 */
  interface CustomizeTemplatesPresetsInfo {
    /** 模板tag列表 */
    Tags: string[] | null;
    /** 模板图标列表 */
    Icons: string[] | null;
    /** 无 */
    Templates: UserDefinedTemplateParams | null;
  }

  /** 可用镜像模板列表 */
  interface ImageUserDTO {
    /** 镜像模板ID */
    Id: string;
    /** 镜像模板名称 */
    Name: string;
    /** Tag时间 */
    Tag: string;
    /** 描述 */
    Description: string;
    /** 中文描述 */
    DescriptionCN: string;
    /** 图标地址 */
    IconUrl: string;
    /** 创建人 */
    Author: string;
    /** 访问状态 */
    Visible: string;
    /** 版本 */
    WorkspaceVersion: number;
    /** 分类 */
    Sort: number;
  }

  /** 用户自定义模板参数 */
  interface UserDefinedTemplateParams {
    /** 模板名称 */
    Name: string | null;
    /** 模板图标地址 */
    Icon: string | null;
    /** 模板标签列表 */
    Tags: string[] | null;
    /** 模板来源 */
    Source: string | null;
    /** 模板描述 */
    Description?: string | null;
    /** 模板仓库类型 */
    VersionControlType?: string | null;
    /** 模板地址 */
    VersionControlUrl?: string | null;
  }

  /** 用户自定义模板Patched参数 */
  interface UserDefinedTemplatePatchedParams {
    /** 模板来源 */
    Source: string | null;
    /** 模板名称 */
    Name?: string | null;
    /** 模板图标地址 */
    Icon?: string | null;
    /** 模板描述 */
    Description?: string | null;
    /** 模板标签列表 */
    Tags?: string[] | null;
  }

  /** 用户信息 */
  interface UserInfoRsp {
    /** 用户ID */
    Id: number;
    /** 用户验证信息 */
    AuthenticationUserInfo: UserSubInfo;
    /** 头像地址 */
    Avatar: string | null;
    /** 介绍 */
    Features: string | null;
    /** 状况 */
    PreviewStatus: number;
  }

  /** 用户验证信息 */
  interface UserSubInfo {
    /** 团队名称 */
    Team: string;
    /** 用户名 */
    UserName: string;
    /** 昵称 */
    NickName: string;
    /** 是否为管理员 */
    IsAdmin: boolean;
    /** xxx */
    IsTrial: boolean | null;
  }

  /** 工作空间结构 */
  interface WorkspaceDTO {
    /** 工作空间名称 */
    Name: string;
    /** 代码来源类型 */
    VersionControlType: string;
    /** 镜像id */
    ImageId: number;
    /** 镜像名称 */
    ImageName: string;
    /** 描述 */
    Description: string;
    /** 工作空间版本 */
    WorkspaceVersion: number;
    /** 工作空间资源结构 */
    WorkspaceResourceDTO: WorkspaceResourceDTO;
    /** 代码仓库地址 */
    VersionControlUrl?: string;
    /** 代码Ref是分支还是标签 */
    VersionControlRef?: string;
    /** 代码Ref地址 */
    VersionControlRefType?: string;
    /** 快照Uid */
    SnapshotUid?: string;
    /** 模板id */
    TemplateId?: number;
    /** 价格id */
    PriceId?: number;
    /** 初始化状态 */
    InitializeStatus?: number;
    /** 描述 */
    VersionControlDesc?: string;
  }

  /** 工作空间信息 */
  interface WorkspaceInfo {
    /** 工作空间ID */
    WorkspaceId: number | null;
    /** 工作空间标识 */
    SpaceKey: string | null;
    /** 工作空间名称 */
    Name?: string | null;
  }

  /** 工作空间基本信息描述 */
  interface WorkspaceInfoDTO {
    /** 工作空间创建时间 */
    CreateDate: string;
    /** 空间key */
    SpaceKey: string;
    /** 工作空间id */
    WorkspaceId: number;
  }

  /** 工作空间资源结构 */
  interface WorkspaceResourceDTO {
    /** CPU核心数 */
    CpuCoreNumber: number;
    /** 一般内存 */
    NormalMemory: number;
    /** 系统存储 */
    SystemStorage: number;
    /** 用户存储 */
    UserStorage: number;
    /** GPU数 */
    GpuNumber: number;
    /** GPU内存 */
    GpuMemory: number;
  }

  /** 用户空间共享信息 */
  interface WorkspaceShareInfo {
    /** 共享或不共享状态 */
    Status: boolean;
    /** 是否与我共享 */
    WithMe: boolean | null;
    /** 开始共享的时间 */
    BeginDate: string | null;
    /** 停止共享的时间 */
    EndDate: string | null;
    /** 停止共享的时间 */
    Users: UserInfoRsp[];
  }

  /** 获取用户工作空间返回信息 */
  interface WorkspaceStatusInfo {
    /** 空间ID */
    Id: number;
    /** 空间名称 */
    Name: string;
    /** 所属人 */
    Owner: UserInfoRsp;
    /** 空间标识 */
    SpaceKey: string;
    /** 状态 */
    Status: string;
    /** 最后操作时间 */
    LastOpsDate: string | null;
    /** 描述 */
    Description: string | null;
    /** 共享状态 */
    Share: WorkspaceShareInfo;
    /** 空间类型 */
    WorkspaceType: string;
    /** 标签 */
    Label: string | null;
    /** 空间版本 */
    WorkspaceVersion: number;
    /** 图标地址 */
    ImageIcon: string;
    /** 创建时间 */
    CreateDate: string | null;
    /** 版本控制地址 */
    VersionControlUrl: string | null;
    /** 版本控制描述 */
    VersionControlDesc: string | null;
    /** 版本控制引用 */
    VersionControlRef: string | null;
    /** 版本控制引用类型 */
    VersionControlRefType: string | null;
    /** 版本控制类型 */
    VersionControlType: string;
    /** 模板ID */
    TemplateId: number | null;
    /** 快照ID */
    SnapshotUid: string | null;
    /** 类型 */
    SpecDesc: string | null;
    /** CPU数量 */
    Cpu: number | null;
    /** 内存 */
    Memory: number | null;
  }

  /** 工作空间模板信息 */
  interface WorkspaceTemplateInfo {
    /** 模板ID */
    Id: number;
    /** 模板分类 */
    Category: string;
    /** 模板名称 */
    Name: string;
    /** 模板描述 */
    Description: string | null;
    /** 中文描述 */
    DescriptionEN: string | null;
    /** 模板标签 */
    Tags: string | null;
    /** 模板图标地址 */
    Icon: string | null;
    /** 默认仓库类型 */
    VersionControlType: string | null;
    /** 默认仓库地址 */
    VersionControlUrl: string | null;
    /** 默认仓库描述 */
    VersionControlDesc: string | null;
    /** 默认仓库所属人 */
    VersionControlOwner: string | null;
    /** 默认仓库引用地址 */
    VersionControlRef: string | null;
    /** 默认仓库引用类型 */
    VersionControlRefType: string | null;
    /** 用户自定义仓库地址 */
    UserVersionControlUrl: string | null;
    /** 用户自定义仓库类型 */
    UserVersionControlType: string | null;
    /** 用户自定义仓库引用 */
    UserVersionControlRef: string | null;
    /** 用户自定义仓库引用类型 */
    UserVersionControlRefType: string | null;
    /** xxx */
    DevFile: string | null;
    /** xxx */
    PluginFile: string | null;
    /** 是否标记 */
    Marked: boolean;
    /** 标记状态 */
    MarkAt: number;
    /** 创建时间 */
    CreateDate: string;
    /** 最后修改时间 */
    LastModified: string | null;
    /** 编号 */
    Sort: number;
    /** xxx */
    SnapshotUid: string | null;
    /** 用户ID */
    UserId: number | null;
    /** 用户名 */
    Author: string | null;
    /** 是否属于当前用户 */
    Me: boolean;
    /** xxx */
    AuthorAvatar: string | null;
  }

  /** 创建临时工作空间凭证 DTO */
  interface WorkspaceTokenDTO {
    /** 工作空间 SpaceKey */
    SpaceKey?: string | null;
    /** token过期时间，单位是秒，默认 3600 */
    TokenExpiredLimitSec?: number | null;
  }

  /** 获取工作空间临时访问 token 出参 */
  interface WorkspaceTokenInfoV0 {
    /** 访问工作空间临时凭证 */
    Token: string;
    /** token 过期时间 */
    ExpiredTime: string | null;
  }

  interface CreateCustomizeTemplatesRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 无 */
    UserDefinedTemplateParams: UserDefinedTemplateParams;
  }

  interface CreateCustomizeTemplatesResponse {
    /** 无 */
    Data: WorkspaceTemplateInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWorkspaceByAgentRequest {
    /** 无 */
    CloudStudioSessionTeam: string;
    /** 无 */
    AgentSpaceDTO: AgentSpaceDTO;
  }

  interface CreateWorkspaceByAgentResponse {
    /** 无 */
    Data: WorkspaceInfoDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWorkspaceByTemplateRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 模板ID */
    TemplateId: number;
    /** 工作空间名称 */
    Name?: string;
  }

  interface CreateWorkspaceByTemplateResponse {
    /** 创建工作空间返回的信息 */
    Data?: WorkspaceInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWorkspaceByVersionControlRequest {
    /** 工作空间结构 */
    WorkspaceDTO: WorkspaceDTO;
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
  }

  interface CreateWorkspaceByVersionControlResponse {
    /** 无 */
    Data: WorkspaceInfoDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWorkspaceTemporaryTokenRequest {
    /** 创建工作空间凭证 DTO */
    WorkspaceTokenDTO: WorkspaceTokenDTO;
  }

  interface CreateWorkspaceTemporaryTokenResponse {
    /** 工作空间临时访问 token 信息 */
    Data?: WorkspaceTokenInfoV0;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteCustomizeTemplatesByIdRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 模板ID */
    Id: number;
  }

  interface DeleteCustomizeTemplatesByIdResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCustomizeTemplatesByIdRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 模板ID */
    Id: number;
  }

  interface DescribeCustomizeTemplatesByIdResponse {
    /** 无 */
    Data: WorkspaceTemplateInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCustomizeTemplatesPresetsRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 空间标识 */
    SpaceKey?: string;
  }

  interface DescribeCustomizeTemplatesPresetsResponse {
    /** 无 */
    Data: CustomizeTemplatesPresetsInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCustomizeTemplatesRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
  }

  interface DescribeCustomizeTemplatesResponse {
    /** 无 */
    Data: WorkspaceTemplateInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkspaceEnvListRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
  }

  interface DescribeWorkspaceEnvListResponse {
    /** 无 */
    Data: ImageUserDTO[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkspaceIsReadyRequest {
    /** 工作空间 spaceKey */
    SpaceKey: string;
  }

  interface DescribeWorkspaceIsReadyResponse {
    /** 工作空间是否就绪 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkspaceNameExistRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 工作空间名称 */
    Name: string;
    /** 工作空间ID */
    WorkspaceId?: string;
  }

  interface DescribeWorkspaceNameExistResponse {
    /** 工作空间信息 */
    Data?: WorkspaceInfoDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkspaceStatusListRequest {
    /** xxx */
    CloudStudioSessionTeam: string;
  }

  interface DescribeWorkspaceStatusListResponse {
    /** xxx */
    Data: WorkspaceStatusInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkspaceStatusRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 空间标识 */
    SpaceKey: string;
  }

  interface DescribeWorkspaceStatusResponse {
    /** 无 */
    Data: WorkspaceStatusInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyCustomizeTemplateVersionControlRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 模板ID */
    TemplateId: number;
    /** 仓库地址 */
    Url?: string;
    /** 代码仓库分支/标签 */
    Ref?: string;
    /** 代码仓库 ref 类型 */
    RefType?: string;
  }

  interface ModifyCustomizeTemplateVersionControlResponse {
    /** 无 */
    Data: WorkspaceTemplateInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyCustomizeTemplatesFullByIdRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 模板ID */
    Id: number;
    /** 自定义模板参数 */
    UserDefinedTemplateParams: UserDefinedTemplateParams;
  }

  interface ModifyCustomizeTemplatesFullByIdResponse {
    /** 自定义模板返回值 */
    Data: WorkspaceTemplateInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyCustomizeTemplatesPartByIdRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 模板ID */
    Id: number;
    /** 自定义模板Patched参数 */
    UserDefinedTemplatePatchedParams: UserDefinedTemplatePatchedParams;
  }

  interface ModifyCustomizeTemplatesPartByIdResponse {
    /** 自定义模板返回值 */
    Data: WorkspaceTemplateInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyWorkspaceAttributesRequest {
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 工作空间ID */
    WorkspaceId: number;
    /** 工作空间名称 */
    Name?: string;
    /** 工作空间描述 */
    Description?: string;
    /** xxx */
    PriceId?: number;
  }

  interface ModifyWorkspaceAttributesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RecoverWorkspaceRequest {
    /** 无 */
    CloudStudioSessionTeam: string;
    /** 无 */
    SpaceKey: string;
  }

  interface RecoverWorkspaceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RemoveWorkspaceRequest {
    /** 无 */
    CloudStudioSessionTeam: string;
    /** 无 */
    SpaceKey: string;
    /** 是否强制，true或者false */
    Force?: boolean;
  }

  interface RemoveWorkspaceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RunWorkspaceRequest {
    /** 空间标识 */
    SpaceKey: string;
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
  }

  interface RunWorkspaceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StopWorkspaceRequest {
    /** 空间标识 */
    SpaceKey: string;
    /** 用户所属组 */
    CloudStudioSessionTeam: string;
    /** 是否强制终止，true或者false */
    Force?: string;
  }

  interface StopWorkspaceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
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
  /** 添加自定义模板 {@link V20210524.CreateCustomizeTemplatesRequest} {@link V20210524.CreateCustomizeTemplatesResponse} */
  CreateCustomizeTemplates(data: V20210524.CreateCustomizeTemplatesRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.CreateCustomizeTemplatesResponse>;
  /** 云服务器方式创建工作空间 {@link V20210524.CreateWorkspaceByAgentRequest} {@link V20210524.CreateWorkspaceByAgentResponse} */
  CreateWorkspaceByAgent(data: V20210524.CreateWorkspaceByAgentRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.CreateWorkspaceByAgentResponse>;
  /** 基于模板创建工作空间 {@link V20210524.CreateWorkspaceByTemplateRequest} {@link V20210524.CreateWorkspaceByTemplateResponse} */
  CreateWorkspaceByTemplate(data: V20210524.CreateWorkspaceByTemplateRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.CreateWorkspaceByTemplateResponse>;
  /** 根据模板创建工作空间 {@link V20210524.CreateWorkspaceByVersionControlRequest} {@link V20210524.CreateWorkspaceByVersionControlResponse} */
  CreateWorkspaceByVersionControl(data: V20210524.CreateWorkspaceByVersionControlRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.CreateWorkspaceByVersionControlResponse>;
  /** 为工作空间创建临时访问凭证 {@link V20210524.CreateWorkspaceTemporaryTokenRequest} {@link V20210524.CreateWorkspaceTemporaryTokenResponse} */
  CreateWorkspaceTemporaryToken(data: V20210524.CreateWorkspaceTemporaryTokenRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.CreateWorkspaceTemporaryTokenResponse>;
  /** 删除自定义模板 {@link V20210524.DeleteCustomizeTemplatesByIdRequest} {@link V20210524.DeleteCustomizeTemplatesByIdResponse} */
  DeleteCustomizeTemplatesById(data: V20210524.DeleteCustomizeTemplatesByIdRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DeleteCustomizeTemplatesByIdResponse>;
  /** 获取所有模板列表 {@link V20210524.DescribeCustomizeTemplatesRequest} {@link V20210524.DescribeCustomizeTemplatesResponse} */
  DescribeCustomizeTemplates(data: V20210524.DescribeCustomizeTemplatesRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeCustomizeTemplatesResponse>;
  /** 获取特定模板信息 {@link V20210524.DescribeCustomizeTemplatesByIdRequest} {@link V20210524.DescribeCustomizeTemplatesByIdResponse} */
  DescribeCustomizeTemplatesById(data: V20210524.DescribeCustomizeTemplatesByIdRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeCustomizeTemplatesByIdResponse>;
  /** 获取创建模板的预置参数 {@link V20210524.DescribeCustomizeTemplatesPresetsRequest} {@link V20210524.DescribeCustomizeTemplatesPresetsResponse} */
  DescribeCustomizeTemplatesPresets(data: V20210524.DescribeCustomizeTemplatesPresetsRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeCustomizeTemplatesPresetsResponse>;
  /** 环境列表接口 {@link V20210524.DescribeWorkspaceEnvListRequest} {@link V20210524.DescribeWorkspaceEnvListResponse} */
  DescribeWorkspaceEnvList(data: V20210524.DescribeWorkspaceEnvListRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeWorkspaceEnvListResponse>;
  /** 获取工作空间是否已经启动就绪 {@link V20210524.DescribeWorkspaceIsReadyRequest} {@link V20210524.DescribeWorkspaceIsReadyResponse} */
  DescribeWorkspaceIsReady(data: V20210524.DescribeWorkspaceIsReadyRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeWorkspaceIsReadyResponse>;
  /** 检查工作空间是否存在 {@link V20210524.DescribeWorkspaceNameExistRequest} {@link V20210524.DescribeWorkspaceNameExistResponse} */
  DescribeWorkspaceNameExist(data: V20210524.DescribeWorkspaceNameExistRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeWorkspaceNameExistResponse>;
  /** 获取工作空间元信息 {@link V20210524.DescribeWorkspaceStatusRequest} {@link V20210524.DescribeWorkspaceStatusResponse} */
  DescribeWorkspaceStatus(data: V20210524.DescribeWorkspaceStatusRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeWorkspaceStatusResponse>;
  /** 获取用户工作空间列表 {@link V20210524.DescribeWorkspaceStatusListRequest} {@link V20210524.DescribeWorkspaceStatusListResponse} */
  DescribeWorkspaceStatusList(data: V20210524.DescribeWorkspaceStatusListRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.DescribeWorkspaceStatusListResponse>;
  /** 修改模板默认代码仓库 {@link V20210524.ModifyCustomizeTemplateVersionControlRequest} {@link V20210524.ModifyCustomizeTemplateVersionControlResponse} */
  ModifyCustomizeTemplateVersionControl(data: V20210524.ModifyCustomizeTemplateVersionControlRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.ModifyCustomizeTemplateVersionControlResponse>;
  /** 全量修改自定义模板，不忽略空 {@link V20210524.ModifyCustomizeTemplatesFullByIdRequest} {@link V20210524.ModifyCustomizeTemplatesFullByIdResponse} */
  ModifyCustomizeTemplatesFullById(data: V20210524.ModifyCustomizeTemplatesFullByIdRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.ModifyCustomizeTemplatesFullByIdResponse>;
  /** 全量修改自定义模板，忽略空 {@link V20210524.ModifyCustomizeTemplatesPartByIdRequest} {@link V20210524.ModifyCustomizeTemplatesPartByIdResponse} */
  ModifyCustomizeTemplatesPartById(data: V20210524.ModifyCustomizeTemplatesPartByIdRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.ModifyCustomizeTemplatesPartByIdResponse>;
  /** 修改工作空间的名称和描述 {@link V20210524.ModifyWorkspaceAttributesRequest} {@link V20210524.ModifyWorkspaceAttributesResponse} */
  ModifyWorkspaceAttributes(data: V20210524.ModifyWorkspaceAttributesRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.ModifyWorkspaceAttributesResponse>;
  /** 恢复工作空间 {@link V20210524.RecoverWorkspaceRequest} {@link V20210524.RecoverWorkspaceResponse} */
  RecoverWorkspace(data: V20210524.RecoverWorkspaceRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.RecoverWorkspaceResponse>;
  /** 删除工作空间 {@link V20210524.RemoveWorkspaceRequest} {@link V20210524.RemoveWorkspaceResponse} */
  RemoveWorkspace(data: V20210524.RemoveWorkspaceRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.RemoveWorkspaceResponse>;
  /** 运行空间 {@link V20210524.RunWorkspaceRequest} {@link V20210524.RunWorkspaceResponse} */
  RunWorkspace(data: V20210524.RunWorkspaceRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.RunWorkspaceResponse>;
  /** 停止运行空间 {@link V20210524.StopWorkspaceRequest} {@link V20210524.StopWorkspaceResponse} */
  StopWorkspace(data: V20210524.StopWorkspaceRequest, config: AxiosRequestConfig & V20210524.VersionHeader): AxiosPromise<V20210524.StopWorkspaceResponse>;
}

export declare type Versions = ["2023-05-08", "2021-05-24"];

export default Cloudstudio;
