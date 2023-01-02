/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 云服务器创建工作空间 DTO */
declare interface AgentSpaceDTO {
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
declare interface CustomizeTemplatesPresetsInfo {
  /** 模板tag列表 */
  Tags: string[] | null;
  /** 模板图标列表 */
  Icons: string[] | null;
  /** 无 */
  Templates: UserDefinedTemplateParams | null;
}

/** 可用镜像模板列表 */
declare interface ImageUserDTO {
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
declare interface UserDefinedTemplateParams {
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
declare interface UserDefinedTemplatePatchedParams {
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
declare interface UserInfoRsp {
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
declare interface UserSubInfo {
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
declare interface WorkspaceDTO {
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
declare interface WorkspaceInfo {
  /** 工作空间ID */
  WorkspaceId: number | null;
  /** 工作空间标识 */
  SpaceKey: string | null;
}

/** 工作空间基本信息描述 */
declare interface WorkspaceInfoDTO {
  /** 工作空间创建时间 */
  CreateDate: string;
  /** 空间key */
  SpaceKey: string;
  /** 工作空间id */
  WorkspaceId: number;
}

/** 工作空间资源结构 */
declare interface WorkspaceResourceDTO {
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
declare interface WorkspaceShareInfo {
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
declare interface WorkspaceStatusInfo {
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
declare interface WorkspaceTemplateInfo {
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
  /** xxx */
  PrebuildFile: string | null;
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

declare interface CreateCustomizeTemplatesRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 无 */
  UserDefinedTemplateParams: UserDefinedTemplateParams;
}

declare interface CreateCustomizeTemplatesResponse {
  /** 无 */
  Data: WorkspaceTemplateInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkspaceByAgentRequest {
  /** 无 */
  CloudStudioSessionTeam: string;
  /** 无 */
  AgentSpaceDTO: AgentSpaceDTO;
}

declare interface CreateWorkspaceByAgentResponse {
  /** 无 */
  Data: WorkspaceInfoDTO | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkspaceByTemplateRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 模板ID */
  TemplateId: number;
}

declare interface CreateWorkspaceByTemplateResponse {
  /** 创建工作空间返回的信息 */
  Data: WorkspaceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkspaceByVersionControlRequest {
  /** 工作空间结构 */
  WorkspaceDTO: WorkspaceDTO;
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
}

declare interface CreateWorkspaceByVersionControlResponse {
  /** 无 */
  Data: WorkspaceInfoDTO | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomizeTemplatesByIdRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 模板ID */
  Id: number;
}

declare interface DeleteCustomizeTemplatesByIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomizeTemplatesByIdRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 模板ID */
  Id: number;
}

declare interface DescribeCustomizeTemplatesByIdResponse {
  /** 无 */
  Data: WorkspaceTemplateInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomizeTemplatesPresetsRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 空间标识 */
  SpaceKey?: string;
}

declare interface DescribeCustomizeTemplatesPresetsResponse {
  /** 无 */
  Data: CustomizeTemplatesPresetsInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomizeTemplatesRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
}

declare interface DescribeCustomizeTemplatesResponse {
  /** 无 */
  Data: WorkspaceTemplateInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceEnvListRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
}

declare interface DescribeWorkspaceEnvListResponse {
  /** 无 */
  Data: ImageUserDTO[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceNameExistRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 工作空间名称 */
  Name: string;
  /** 工作空间ID */
  WorkspaceId?: string;
}

declare interface DescribeWorkspaceNameExistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceStatusListRequest {
  /** xxx */
  CloudStudioSessionTeam: string;
}

declare interface DescribeWorkspaceStatusListResponse {
  /** xxx */
  Data: WorkspaceStatusInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceStatusRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 空间标识 */
  SpaceKey: string;
}

declare interface DescribeWorkspaceStatusResponse {
  /** 无 */
  Data: WorkspaceStatusInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomizeTemplateVersionControlRequest {
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

declare interface ModifyCustomizeTemplateVersionControlResponse {
  /** 无 */
  Data: WorkspaceTemplateInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomizeTemplatesFullByIdRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 模板ID */
  Id: number;
  /** 自定义模板参数 */
  UserDefinedTemplateParams: UserDefinedTemplateParams;
}

declare interface ModifyCustomizeTemplatesFullByIdResponse {
  /** 自定义模板返回值 */
  Data: WorkspaceTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomizeTemplatesPartByIdRequest {
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 模板ID */
  Id: number;
  /** 自定义模板Patched参数 */
  UserDefinedTemplatePatchedParams: UserDefinedTemplatePatchedParams;
}

declare interface ModifyCustomizeTemplatesPartByIdResponse {
  /** 自定义模板返回值 */
  Data: WorkspaceTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWorkspaceAttributesRequest {
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

declare interface ModifyWorkspaceAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverWorkspaceRequest {
  /** 无 */
  CloudStudioSessionTeam: string;
  /** 无 */
  SpaceKey: string;
}

declare interface RecoverWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveWorkspaceRequest {
  /** 无 */
  CloudStudioSessionTeam: string;
  /** 无 */
  SpaceKey: string;
  /** 是否强制，true或者false */
  Force?: boolean;
}

declare interface RemoveWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunWorkspaceRequest {
  /** 空间标识 */
  SpaceKey: string;
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
}

declare interface RunWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopWorkspaceRequest {
  /** 空间标识 */
  SpaceKey: string;
  /** 用户所属组 */
  CloudStudioSessionTeam: string;
  /** 是否强制终止，true或者false */
  Force?: string;
}

declare interface StopWorkspaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cloudstudio Cloud Studio（云端 IDE）} */
declare interface Cloudstudio {
  (): Versions;
  /** 添加自定义模板 {@link CreateCustomizeTemplatesRequest} {@link CreateCustomizeTemplatesResponse} */
  CreateCustomizeTemplates(data: CreateCustomizeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomizeTemplatesResponse>;
  /** 云服务器方式创建工作空间 {@link CreateWorkspaceByAgentRequest} {@link CreateWorkspaceByAgentResponse} */
  CreateWorkspaceByAgent(data: CreateWorkspaceByAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceByAgentResponse>;
  /** 基于模板创建工作空间 {@link CreateWorkspaceByTemplateRequest} {@link CreateWorkspaceByTemplateResponse} */
  CreateWorkspaceByTemplate(data: CreateWorkspaceByTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceByTemplateResponse>;
  /** 根据模板创建工作空间 {@link CreateWorkspaceByVersionControlRequest} {@link CreateWorkspaceByVersionControlResponse} */
  CreateWorkspaceByVersionControl(data: CreateWorkspaceByVersionControlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceByVersionControlResponse>;
  /** 删除自定义模板 {@link DeleteCustomizeTemplatesByIdRequest} {@link DeleteCustomizeTemplatesByIdResponse} */
  DeleteCustomizeTemplatesById(data: DeleteCustomizeTemplatesByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomizeTemplatesByIdResponse>;
  /** 获取所有模板列表 {@link DescribeCustomizeTemplatesRequest} {@link DescribeCustomizeTemplatesResponse} */
  DescribeCustomizeTemplates(data: DescribeCustomizeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomizeTemplatesResponse>;
  /** 获取特定模板信息 {@link DescribeCustomizeTemplatesByIdRequest} {@link DescribeCustomizeTemplatesByIdResponse} */
  DescribeCustomizeTemplatesById(data: DescribeCustomizeTemplatesByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomizeTemplatesByIdResponse>;
  /** 获取创建模板的预置参数 {@link DescribeCustomizeTemplatesPresetsRequest} {@link DescribeCustomizeTemplatesPresetsResponse} */
  DescribeCustomizeTemplatesPresets(data: DescribeCustomizeTemplatesPresetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomizeTemplatesPresetsResponse>;
  /** 环境列表接口 {@link DescribeWorkspaceEnvListRequest} {@link DescribeWorkspaceEnvListResponse} */
  DescribeWorkspaceEnvList(data: DescribeWorkspaceEnvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceEnvListResponse>;
  /** 检查工作空间是否存在 {@link DescribeWorkspaceNameExistRequest} {@link DescribeWorkspaceNameExistResponse} */
  DescribeWorkspaceNameExist(data: DescribeWorkspaceNameExistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceNameExistResponse>;
  /** 获取工作空间元信息 {@link DescribeWorkspaceStatusRequest} {@link DescribeWorkspaceStatusResponse} */
  DescribeWorkspaceStatus(data: DescribeWorkspaceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceStatusResponse>;
  /** 获取用户工作空间列表 {@link DescribeWorkspaceStatusListRequest} {@link DescribeWorkspaceStatusListResponse} */
  DescribeWorkspaceStatusList(data: DescribeWorkspaceStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceStatusListResponse>;
  /** 修改模板默认代码仓库 {@link ModifyCustomizeTemplateVersionControlRequest} {@link ModifyCustomizeTemplateVersionControlResponse} */
  ModifyCustomizeTemplateVersionControl(data: ModifyCustomizeTemplateVersionControlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizeTemplateVersionControlResponse>;
  /** 全量修改自定义模板，不忽略空 {@link ModifyCustomizeTemplatesFullByIdRequest} {@link ModifyCustomizeTemplatesFullByIdResponse} */
  ModifyCustomizeTemplatesFullById(data: ModifyCustomizeTemplatesFullByIdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizeTemplatesFullByIdResponse>;
  /** 全量修改自定义模板，忽略空 {@link ModifyCustomizeTemplatesPartByIdRequest} {@link ModifyCustomizeTemplatesPartByIdResponse} */
  ModifyCustomizeTemplatesPartById(data: ModifyCustomizeTemplatesPartByIdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizeTemplatesPartByIdResponse>;
  /** 修改工作空间的名称和描述 {@link ModifyWorkspaceAttributesRequest} {@link ModifyWorkspaceAttributesResponse} */
  ModifyWorkspaceAttributes(data: ModifyWorkspaceAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkspaceAttributesResponse>;
  /** 恢复工作空间 {@link RecoverWorkspaceRequest} {@link RecoverWorkspaceResponse} */
  RecoverWorkspace(data: RecoverWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverWorkspaceResponse>;
  /** 删除工作空间 {@link RemoveWorkspaceRequest} {@link RemoveWorkspaceResponse} */
  RemoveWorkspace(data: RemoveWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveWorkspaceResponse>;
  /** 运行空间 {@link RunWorkspaceRequest} {@link RunWorkspaceResponse} */
  RunWorkspace(data: RunWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<RunWorkspaceResponse>;
  /** 停止运行空间 {@link StopWorkspaceRequest} {@link StopWorkspaceResponse} */
  StopWorkspace(data: StopWorkspaceRequest, config?: AxiosRequestConfig): AxiosPromise<StopWorkspaceResponse>;
}

export declare type Versions = ["2021-05-24"];

export default Cloudstudio;
