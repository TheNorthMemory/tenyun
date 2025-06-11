/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 安卓应用 */
declare interface AndroidApp {
  /** 安卓应用 Id */
  AndroidAppId?: string;
  /** 安卓应用名称 */
  Name?: string;
  /** 安卓应用状态（上架、下架） */
  State?: string;
  /** 安卓应用版本列表 */
  AndroidAppVersionInfo?: AndroidAppVersionInfo[];
  /** 安卓应用创建时间 */
  CreateTime?: string;
  /** 用户 Id */
  UserId?: string;
  /** 应用模式（NORMAL : 普通模式；ADVANCED : 高级模式） */
  AppMode?: string;
}

/** 安卓应用Cos数据 */
declare interface AndroidAppCosInfo {
  /** 安卓应用ID */
  AndroidAppId: string;
  /** 应用名称（支持 apk 和 tgz 两种格式文件，当应用 AppMode 为 NORMAL 时，只支持上传 apk 类型文件，当应用 AppMode 为 ADVANCED 高级模式时，只支持上传 tgz 类型文件） */
  FileName?: string;
}

/** 安卓应用版本信息 */
declare interface AndroidAppVersionInfo {
  /** 安卓应用版本 */
  AndroidAppVersion?: string;
  /** 安卓应用版本创建状态（NORMAL：无、UPLOADING：上传中、CREATING： 创建中、CREATE_FAIL：创建失败、CREATE_SUCCESS：创建成功） */
  State?: string;
  /** 安卓应用版本创建时间 */
  CreateTime?: string;
  /** shell 安装命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效） */
  Command?: string;
  /** shell 卸载命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效） */
  UninstallCommand?: string;
  /** 应用资源清理模式（实例安装应用所用资源），取值：CLEANUP_ON_UNINSTALL（默认值），卸载 App 时清理；CLEANUP_AFTER_INSTALL，安装 App 后立即清理。普通应用只有 CLEANUP_AFTER_INSTALL 模式。 */
  CleanupMode?: string;
}

/** 安卓实例信息 */
declare interface AndroidInstance {
  /** 实例 ID */
  AndroidInstanceId?: string;
  /** 实例所在区域 */
  AndroidInstanceRegion?: string;
  /** 实例可用区 */
  AndroidInstanceZone?: string;
  /** 实例状态：INITIALIZING，NORMAL，PROCESSING */
  State?: string;
  /** 实例规格 */
  AndroidInstanceType?: string;
  /** 实例镜像 ID */
  AndroidInstanceImageId?: string;
  /** 分辨率宽度 */
  Width?: number;
  /** 分辨率高度 */
  Height?: number;
  /** 宿主机 ID */
  HostSerialNumber?: string;
  /** 分组 ID */
  AndroidInstanceGroupId?: string;
  /** 标签列表 */
  AndroidInstanceLabels?: AndroidInstanceLabel[];
  /** 名称 */
  Name?: string;
  /** 用户ID */
  UserId?: string;
  /** 内网 IP */
  PrivateIP?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 机箱 ID */
  HostServerSerialNumber?: string;
}

/** 安卓实例应用黑名单 */
declare interface AndroidInstanceAppBlacklist {
  /** 安卓实例 ID */
  AndroidInstanceId?: string;
  /** 应用黑名单 */
  AppBlacklist?: string[] | null;
}

/** 安卓实例应用信息 */
declare interface AndroidInstanceAppInfo {
  /** 应用id */
  AndroidAppId?: string;
  /** 应用名称 */
  Name?: string;
  /** 应用版本 */
  AndroidAppVersion?: string;
  /** 应用包名 */
  PackageName?: string;
  /** 应用包版本 */
  PackageVersion?: string;
  /** 应用包标签 */
  PackageLabel?: string;
}

/** 安卓实例设备信息 */
declare interface AndroidInstanceDevice {
  /** 品牌 */
  Brand: string;
  /** 型号 */
  Model: string;
}

/** 安卓实例错误信息，用于批量安卓实例操作中返回部分操作错误的情况 */
declare interface AndroidInstanceError {
  /** 安卓实例 ID */
  AndroidInstanceId?: string;
  /** 错误信息 */
  Error?: Error;
}

/** 安卓实例镜像信息 */
declare interface AndroidInstanceImage {
  /** 镜像 ID */
  AndroidInstanceImageId?: string;
  /** 镜像名称，由业务方自定义，仅用于展示 */
  AndroidInstanceImageName?: string;
  /** 镜像状态 */
  AndroidInstanceImageState?: string;
  /** 镜像可用区 */
  AndroidInstanceImageZone?: string;
}

/** 安卓实例信息 */
declare interface AndroidInstanceInformation {
  /** 安卓实例 ID */
  AndroidInstanceId: string;
  /** 实例名称 */
  Name: string;
}

/** 安卓实例标签 */
declare interface AndroidInstanceLabel {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 安卓实例属性 */
declare interface AndroidInstanceProperty {
  /** 属性键 */
  Key: string;
  /** 属性值 */
  Value?: string;
}

/** 安卓实例任务信息 */
declare interface AndroidInstanceTask {
  /** 任务ID */
  TaskId?: string;
  /** 实例ID */
  AndroidInstanceId?: string;
}

/** 安卓实例任务状态信息 */
declare interface AndroidInstanceTaskStatus {
  /** 任务ID */
  TaskId?: string;
  /** 任务状态：SUCCESS，FAILED，PROCESSING，PENDING,CANCELED */
  Status?: string;
  /** 实例ID */
  AndroidInstanceId?: string;
  /** 任务执行结果描述，针对某些任务，可以是可解析的 json */
  TaskResult?: string;
  /** 任务类型 */
  TaskType?: string;
  /** 任务创建时间 */
  CreateTime?: string;
  /** 任务完成时间 */
  CompleteTime?: string;
}

/** 安卓实例上传文件信息 */
declare interface AndroidInstanceUploadFile {
  /** 安卓实例 ID */
  AndroidInstanceId?: string;
  /** 文件上传 URL */
  FileURL?: string;
  /** 上传目标目录，只能上传到 /sdcard/ 目录或其子目录下 */
  DestinationDirectory?: string;
}

/** COS协议参数 */
declare interface COSOptions {
  /** 存储桶 */
  Bucket: string;
  /** 存储区域 */
  Region: string;
}

/** 错误信息，用于批量接口中返回部分操作错误 */
declare interface Error {
  /** 错误码 */
  Code?: string;
  /** 错误详细信息 */
  Message?: string;
}

/** 过滤 */
declare interface Filter {
  /** 字段名 */
  Name: string;
  /** 字段值列表 */
  Values: string[];
}

/** 标签要求 */
declare interface LabelRequirement {
  /** 标签键 */
  Key: string;
  /** 运算符类型。IN：要求对象的标签键 Key 对应的标签值需满足 Values 中的一个NOT_IN：要求对象的标签键 Key 对应的标签值不满足 Values 中的任何一个EXISTS：要求对象标签存在标签键 KeyNOT_EXISTS: 要求对象标签不存在标签键 Key */
  Operator: string;
  /** 标签值列表 */
  Values?: string[];
}

/** S3协议参数 */
declare interface S3Options {
  /** 存储节点 */
  EndPoint: string;
  /** 存储桶 */
  Bucket: string;
  /** 密钥 ID */
  AccessKeyId: string;
  /** 密钥 Key */
  SecretAccessKey: string;
}

/** 同步安卓实例镜像信息 */
declare interface SyncAndroidInstanceImage {
  /** 镜像 ID */
  AndroidInstanceImageId?: string;
  /** 镜像可用区 */
  AndroidInstanceImageZone?: string;
}

/** 同步执行命令结果 */
declare interface SyncExecuteCommandResult {
  /** 实例ID */
  InstanceId?: string;
  /** 命令执行输出内容 */
  Output?: string;
  /** 命令执行结果 */
  Status?: string;
}

declare interface BackUpAndroidInstanceToStorageRequest {
  /** 安卓实例ID */
  AndroidInstanceId: string;
  /** 存储服务器类型，如 COS、S3。注意：使用 COS 和 S3 都将占用外网带宽。 */
  StorageType: string;
  /** 自定义对象Key */
  ObjectKey: string;
  /** 包含的路径，支持仅含一个通配符*，通配符不能出现在路径开始 */
  Includes?: string[];
  /** 需要排除路径，支持仅含一个通配符*，通配符不能出现在路径开始 */
  Excludes?: string[];
  /** COS协议选项 */
  COSOptions?: COSOptions;
  /** S3存储协议选项 */
  S3Options?: S3Options;
}

declare interface BackUpAndroidInstanceToStorageResponse {
  /** 实例任务 ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CleanAndroidInstancesAppDataRequest {
  /** 安卓实例 ID 列表（最大100条数据） */
  AndroidInstanceIds: string[];
  /** 应用包名 */
  PackageName: string;
}

declare interface CleanAndroidInstancesAppDataResponse {
  /** 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息 */
  AndroidInstanceErrors?: AndroidInstanceError[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConnectAndroidInstanceRequest {
  /** 用户Session信息 */
  ClientSession: string;
  /** 实例ID */
  AndroidInstanceId: string;
  /** 用户IP，用户客户端的公网IP，用于选择最佳网络链路 */
  UserIp: string;
}

declare interface ConnectAndroidInstanceResponse {
  /** 服务端session信息 */
  ServerSession?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyAndroidInstanceRequest {
  /** 源安卓实例 ID */
  SourceAndroidInstanceId: string;
  /** 目的安卓实例 ID */
  TargetAndroidInstanceId: string;
  /** 包含的路径，支持仅含一个通配符*，通配符不能出现在路径开始 */
  Includes?: string[];
  /** 需要排除路径，支持仅含一个通配符*，通配符不能出现在路径开始 */
  Excludes?: string[];
}

declare interface CopyAndroidInstanceResponse {
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidAppRequest {
  /** 安卓应用名字 */
  Name: string;
  /** 用户 Id */
  UserId?: string;
  /** 应用模式（NORMAL : 普通模式、只支持 apk 文件上传，为默认值；ADVANCED : 高级模式、只支持上传 tgz 文件 和 自定义 shell 命令执行） */
  AppMode?: string;
}

declare interface CreateAndroidAppResponse {
  /** 应用ID */
  AndroidAppId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidAppVersionRequest {
  /** 应用ID */
  AndroidAppId: string;
  /** 应用包下载地址 */
  DownloadUrl?: string;
  /** 应用 shell 安装命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效） */
  Command?: string;
  /** 应用 shell 卸载命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效） */
  UninstallCommand?: string;
  /** 应用资源清理模式（实例安装应用所用资源），取值：CLEANUP_ON_UNINSTALL（默认值），卸载 App 时清理；CLEANUP_AFTER_INSTALL，安装 App 后立即清理。普通应用只有 CLEANUP_AFTER_INSTALL 模式。 */
  CleanupMode?: string;
}

declare interface CreateAndroidAppVersionResponse {
  /** 应用版本 */
  AndroidAppVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidInstanceADBRequest {
  /** 安卓实例 ID */
  AndroidInstanceId: string;
}

declare interface CreateAndroidInstanceADBResponse {
  /** 连接私钥，需要保存为文件形式，例如 private_key.pem */
  PrivateKey?: string;
  /** 用户名称 */
  UserName?: string;
  /** 连接地址 */
  HostName?: string;
  /** 连接端口 */
  Port?: number;
  /** 连接参考命令 */
  ConnectCommand?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidInstanceImageRequest {
  /** 安卓实例镜像名称 */
  AndroidInstanceImageName: string;
  /** 安卓实例 ID */
  AndroidInstanceId: string;
}

declare interface CreateAndroidInstanceImageResponse {
  /** 安卓实例镜像 ID */
  AndroidInstanceImageId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidInstanceLabelRequest {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value?: string;
}

declare interface CreateAndroidInstanceLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidInstanceSSHRequest {
  /** 实例ID */
  AndroidInstanceId: string;
  /** 连接过期时间，最长可设置7天 */
  ExpiredTime: string;
}

declare interface CreateAndroidInstanceSSHResponse {
  /** 连接私钥，需要保存为文件形式，例如 private_key.pem */
  PrivateKey?: string;
  /** 用户名称 */
  UserName?: string;
  /** 连接地址 */
  HostName?: string;
  /** 连接端口 */
  Port?: number;
  /** 连接参考命令 */
  ConnectCommand?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidInstanceWebShellRequest {
  /** 实例 ID */
  AndroidInstanceId: string;
}

declare interface CreateAndroidInstanceWebShellResponse {
  /** 鉴权密钥 */
  Key?: string;
  /** 连接地址 */
  Address?: string;
  /** 连接区域 */
  Zone?: string;
  /** 访问链接，可以直接使用此链接访问 WebShell */
  ConnectUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidInstancesRequest {
  /** 安卓实例可用区。ap-guangzhou-3：广州三区ap-shenzhen-1：深圳一区ap-xian-ec-1：西安一区ap-hangzhou-ec-1：杭州一区 */
  Zone: string;
  /** 安卓实例类型。A1：单开A2：双开A3：三开A4：四开A5：五开A6：六开 */
  Type: string;
  /** 当 HostSerialNumbers 不为空时，该参数表示每个宿主机要创建的安卓实例数量；当 HostSerialNumbers 为空时，该参数表示要创建安卓实例的总数量，最大值为 100。 */
  Number: number;
  /** 宿主机 ID 列表。可以指定宿主机 ID 进行创建；也可以不指定由系统自动分配宿主机。 */
  HostSerialNumbers?: string[];
  /** 镜像 ID。如果不填，将使用默认的系统镜像 */
  ImageId?: string;
}

declare interface CreateAndroidInstancesResponse {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAndroidInstancesScreenshotRequest {
  /** 实例 ID 列表 */
  AndroidInstanceIds: string[];
}

declare interface CreateAndroidInstancesScreenshotResponse {
  /** 任务列表 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCosCredentialRequest {
  /** Cos 密钥类型， Mobile 移动端, PC 桌面, AndroidApp 安卓应用 */
  CosType: string;
  /** 云手机 Cos 数据 */
  AndroidAppCosInfo?: AndroidAppCosInfo;
}

declare interface CreateCosCredentialResponse {
  /** Cos SecretID */
  SecretID?: string;
  /** Cos SecretKey */
  SecretKey?: string;
  /** Cos Session */
  SessionToken?: string;
  /** Cos Bucket */
  CosBucket?: string;
  /** Cos Region */
  CosRegion?: string;
  /** Cos 操作路径 */
  Path?: string;
  /** Cos 密钥的起始时间 */
  StartTime?: number;
  /** Cos 密钥的失效时间 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

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

declare interface DeleteAndroidAppRequest {
  /** 应用ID */
  AndroidAppId: string;
}

declare interface DeleteAndroidAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAndroidAppVersionRequest {
  /** 安卓应用 Id */
  AndroidAppId: string;
  /** 安卓应用版本 */
  AndroidAppVersion: string;
}

declare interface DeleteAndroidAppVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAndroidInstanceImagesRequest {
  /** 镜像 ID 列表 */
  AndroidInstanceImageIds: string[];
}

declare interface DeleteAndroidInstanceImagesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAndroidInstanceLabelRequest {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value?: string;
}

declare interface DeleteAndroidInstanceLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidAppsRequest {
  /** 分页偏移 */
  Offset?: number;
  /** 每页数量 */
  Limit?: number;
  /** 应用ID数组 */
  AndroidAppIds?: string[];
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeAndroidAppsResponse {
  /** 安卓应用列表 */
  Apps?: AndroidApp[];
  /** 安卓应用列表长度 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidInstanceAppsRequest {
  /** 实例ID */
  AndroidInstanceId: string;
}

declare interface DescribeAndroidInstanceAppsResponse {
  /** 安卓应用列表 */
  Apps?: AndroidInstanceAppInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidInstanceImagesRequest {
  /** 镜像 ID 列表 */
  AndroidInstanceImageIds?: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 限制量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribeAndroidInstanceImagesResponse {
  /** 镜像总数 */
  Total?: number;
  /** 镜像列表 */
  AndroidInstanceImages?: AndroidInstanceImage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidInstanceLabelsRequest {
  /** 标签键列表 */
  Keys?: string[];
  /** 标签值列表 */
  Values?: string[];
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 限制量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribeAndroidInstanceLabelsResponse {
  /** 安卓实例标签总数 */
  Total?: number;
  /** 安卓实例标签列表 */
  Labels?: AndroidInstanceLabel[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidInstanceTasksStatusRequest {
  /** 任务 ID 列表 */
  TaskIds?: string[];
  /** 条件过滤器 */
  Filter?: Filter[];
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 限制量，默认为20，最大值为100 */
  Limit?: number;
}

declare interface DescribeAndroidInstanceTasksStatusResponse {
  /** 任务状态集合 */
  TaskStatusSet?: AndroidInstanceTaskStatus[];
  /** 任务总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidInstancesAppBlacklistRequest {
  /** 实例 ID 列表，数量上限 100 */
  AndroidInstanceIds: string[];
}

declare interface DescribeAndroidInstancesAppBlacklistResponse {
  /** 黑名单集合 */
  AppBlacklistSet?: AndroidInstanceAppBlacklist[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidInstancesByAppsRequest {
  /** 偏移量，默认为 0 */
  Offset: number;
  /** 限制量，默认为20，最大值为100 */
  Limit: number;
  /** 应用 ID 列表。通过应用 ID 做集合查询 */
  AndroidAppIds: string[];
}

declare interface DescribeAndroidInstancesByAppsResponse {
  /** 实例总数量 */
  TotalCount?: number;
  /** 实例列表 */
  AndroidInstances?: AndroidInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAndroidInstancesRequest {
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 限制量，默认为20，最大值为100 */
  Limit?: number;
  /** 实例ID。每次请求的实例的上限为100。 */
  AndroidInstanceIds?: string[];
  /** 实例地域。目前还不支持按地域进行聚合查询 */
  AndroidInstanceRegion?: string;
  /** 实例可用区 */
  AndroidInstanceZone?: string;
  /** 实例分组 ID 列表 */
  AndroidInstanceGroupIds?: string[];
  /** 实例标签选择器 */
  LabelSelector?: LabelRequirement[];
  /** 字段过滤器。Filter 的 Name 有以下值：Name：实例名称UserId：实例用户IDHostSerialNumber：宿主机序列号HostServerSerialNumber：机箱序列号 */
  Filters?: Filter[];
}

declare interface DescribeAndroidInstancesResponse {
  /** 实例总数量 */
  TotalCount?: number;
  /** 实例列表 */
  AndroidInstances?: AndroidInstance[];
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

declare interface DestroyAndroidInstancesRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
}

declare interface DestroyAndroidInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableAndroidInstancesAppRequest {
  /** 安卓实例 ID 列表（最大100条数据） */
  AndroidInstanceIds: string[];
  /** 应用包名 */
  PackageName: string;
}

declare interface DisableAndroidInstancesAppResponse {
  /** 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息 */
  AndroidInstanceErrors?: AndroidInstanceError[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributeFileToAndroidInstancesRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 文件下载 URL */
  FileURL: string;
  /** 上传目标目录，只能上传到 /sdcard/ 目录或其子目录下 */
  DestinationDirectory: string;
}

declare interface DistributeFileToAndroidInstancesResponse {
  /** 实例任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DistributePhotoToAndroidInstancesRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 照片下载 URL */
  PhotoURL: string;
}

declare interface DistributePhotoToAndroidInstancesResponse {
  /** 实例任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableAndroidInstancesAppRequest {
  /** 安卓实例 ID 列表（最大100条数据） */
  AndroidInstanceIds: string[];
  /** 应用包名 */
  PackageName: string;
}

declare interface EnableAndroidInstancesAppResponse {
  /** 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息 */
  AndroidInstanceErrors?: AndroidInstanceError[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExecuteCommandOnAndroidInstancesRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** shell 命令 */
  Command: string;
}

declare interface ExecuteCommandOnAndroidInstancesResponse {
  /** 任务集合，可异步查询任务状态 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FetchAndroidInstancesLogsRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** cos 桶名称 */
  BucketName: string;
  /** cos 桶区域 */
  BucketRegion: string;
  /** cos 桶目录，默认为 /log/ */
  BucketDirectory?: string;
  /** 下载最近几天的日志，默认值为 1 */
  RecentDays?: number;
}

declare interface FetchAndroidInstancesLogsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportAndroidInstanceImageRequest {
  /** 镜像名称 */
  Name: string;
  /** 镜像文件下载地址，要求是 tgz 压缩文件 */
  URL: string;
  /** 镜像文件 MD5 值 */
  MD5: string;
  /** 安卓版本。ANDROID10：默认值，安卓10ANDROID12：安卓12ANDROID14：安卓14 */
  AndroidVersion?: string;
  /** 镜像可用区 */
  Zone?: string;
}

declare interface ImportAndroidInstanceImageResponse {
  /** 安卓实例镜像 ID */
  AndroidInstanceImageId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstallAndroidInstancesAppRequest {
  /** 实例ID */
  AndroidInstanceIds: string[];
  /** 应用ID */
  AndroidAppId: string;
  /** 应用版本 */
  AndroidAppVersion?: string;
}

declare interface InstallAndroidInstancesAppResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstallAndroidInstancesAppWithURLRequest {
  /** 实例ID */
  AndroidInstanceIds: string[];
  /** 安卓应用下载 URL */
  AndroidAppURL: string;
}

declare interface InstallAndroidInstancesAppWithURLResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidAppRequest {
  /** 安卓应用 Id */
  AndroidAppId: string;
  /** 安卓应用名称 */
  Name: string;
  /** 用户 Id */
  UserId?: string;
}

declare interface ModifyAndroidAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidAppVersionRequest {
  /** 安卓应用 Id */
  AndroidAppId: string;
  /** 安卓应用版本 Id */
  AndroidAppVersion: string;
  /** 安卓应用版本名称 */
  AndroidAppVersionName: string;
  /** 应用 shell 安装命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效） */
  Command?: string;
  /** 应用 shell 卸载命令（支持多条命令执行，通过 && 组合；只在应用 AppMode 为 ADVANCED 高级模式下 才会生效） */
  UninstallCommand?: string;
}

declare interface ModifyAndroidAppVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstanceInformationRequest {
  /** 安卓实例 ID */
  AndroidInstanceId: string;
  /** 实例名称 */
  Name?: string;
}

declare interface ModifyAndroidInstanceInformationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstanceResolutionRequest {
  /** 安卓实例 ID */
  AndroidInstanceId: string;
  /** 分辨率宽度。建议按照以下数值设置，避免出现性能不足问题：实例类型为单开（A1）：建议设置为 1080实例类型为双开（A2） 及以上：建议设置为 720 */
  Width: number;
  /** 分辨率高度。建议按照以下数值设置，避免出现性能不足问题：实例类型为单开（A1）：建议设置为 1920实例类型为双开（A2） 及以上：建议设置为 1280 */
  Height: number;
  /** 每英寸像素点。如果不填，系统将会计算一个合理的数值。修改 DPI 可能会导致 App 异常退出，请谨慎使用！分辨率为 720x1280：建议配置为 320分辨率为 1080x1920：建议配置为 480 */
  DPI?: number;
  /** 帧率。ResolutionType 为 PHYSICAL 时才会修改帧率。另外建议按照以下数值设置，避免出现性能不足问题： 实例类型为单开（A1）：建议设置为 60 实例类型为双开（A2） 及以上：建议设置为 30 */
  FPS?: number;
  /** 修改分辨率类型。修改物理分辨率，需要重启才能生效。OVERRIDE：默认值，修改覆盖（显示）分辨率PHYSICAL：修改物理分辨率 */
  ResolutionType?: string;
}

declare interface ModifyAndroidInstanceResolutionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstancesAppBlacklistRequest {
  /** 实例ID列表，数量上限100 */
  AndroidInstanceIds: string[];
  /** 应用列表 */
  AppList: string[];
  /** ADD、REMOVE、CLEAR */
  Operation: string;
}

declare interface ModifyAndroidInstancesAppBlacklistResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstancesInformationRequest {
  /** 安卓实例信息数据 */
  AndroidInstanceInformations: AndroidInstanceInformation[];
}

declare interface ModifyAndroidInstancesInformationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstancesLabelsRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 安卓实例标签列表 */
  AndroidInstanceLabels: AndroidInstanceLabel[];
  /** 操作类型。ADD：标签键不存在的添加新标签，标签键存在的将覆盖原有标签REMOVE：根据标签键删除标签REPLACE：使用请求标签列表替换原来所有标签CLEAR：清除所有标签 */
  Operation: string;
}

declare interface ModifyAndroidInstancesLabelsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstancesPropertiesRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 安卓实例设备 */
  AndroidInstanceDevice?: AndroidInstanceDevice;
  /** 安卓实例其它属性列表 */
  AndroidInstanceProperties?: AndroidInstanceProperty[];
}

declare interface ModifyAndroidInstancesPropertiesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstancesResolutionRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 分辨率宽度。建议按照以下数值设置，避免出现性能不足问题：实例类型为单开（A1）：建议设置为 1080实例类型为双开（A2） 及以上：建议设置为 720 */
  Width: number;
  /** 分辨率高度。建议按照以下数值设置，避免出现性能不足问题：实例类型为单开（A1）：建议设置为 1920实例类型为双开（A2） 及以上：建议设置为 1280 */
  Height: number;
  /** 每英寸像素点。分辨率为 720x1280：建议配置为 320分辨率为 1080x1920：建议配置为 480 */
  DPI: number;
  /** 帧率。ResolutionType 为 PHYSICAL 时才会修改帧率。另外建议按照以下数值设置，避免出现性能不足问题：实例类型为单开（A1）：建议设置为 60实例类型为双开（A2） 及以上：建议设置为 30 */
  FPS?: number;
  /** 修改分辨率类型。修改物理分辨率，需要重启才能生效。OVERRIDE：默认值，修改覆盖（显示）分辨率PHYSICAL：修改物理分辨率 */
  ResolutionType?: string;
}

declare interface ModifyAndroidInstancesResolutionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstancesResourcesRequest {
  /** 安卓实例 ID 列表（最大100条数据） */
  AndroidInstanceIds: string[];
  /** 内存配额（单位 MB） */
  MemoryQuota: number;
}

declare interface ModifyAndroidInstancesResourcesResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAndroidInstancesUserIdRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 用户 ID */
  UserId?: string;
}

declare interface ModifyAndroidInstancesUserIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootAndroidInstanceHostsRequest {
  /** 宿主机序列号集合 */
  HostSerialNumbers: string[];
}

declare interface RebootAndroidInstanceHostsResponse {
  /** 任务 ID 集合，以供任务状态查询，其中 InstanceId 为宿主机序列号 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootAndroidInstancesRequest {
  /** 实例ID */
  AndroidInstanceIds: string[];
}

declare interface RebootAndroidInstancesResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAndroidInstancesRequest {
  /** 实例ID列表 */
  AndroidInstanceIds: string[];
  /** 指定有效的镜像 ID。默认取值：默认使用当前镜像。 */
  AndroidInstanceImageId?: string;
  /** 重置模式。在 AndroidInstanceImageId 不为空时才生效。CleanData：默认选项，清理系统属性和用户数据KeepSystemProperties：只保留系统属性KeepData: 保留系统属性和用户数据 */
  Mode?: string;
}

declare interface ResetAndroidInstancesResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartAndroidInstancesAppRequest {
  /** 实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 应用包名 */
  PackageName: string;
  /** 启动页。建议指定启动页来启动应用，避免启动失败。如果启动页为空，系统尝试根据 PackageName 启动，但不保证成功。 */
  Activity?: string;
}

declare interface RestartAndroidInstancesAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestoreAndroidInstanceFromStorageRequest {
  /** 安卓实例ID */
  AndroidInstanceId: string;
  /** 自定义备份对象Key */
  ObjectKey: string;
  /** 存储服务器类型，如 COS、S3。注意：使用 COS 和 S3 都将占用外网带宽。 */
  StorageType: string;
  /** COS协议选项 */
  COSOptions?: COSOptions;
  /** S3存储协议选项 */
  S3Options?: S3Options;
}

declare interface RestoreAndroidInstanceFromStorageResponse {
  /** 实例任务 ID */
  TaskId?: string;
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

declare interface SetAndroidInstancesBGAppKeepAliveRequest {
  /** 安卓实例 ID 列表（最大100条数据） */
  AndroidInstanceIds: string[];
  /** 操作类型，取值：ADD 添加应用到后台保活列表、REMOVE 从后台保活列表中移除应用、SET 全量设置后台保活列表，替换当前列表。 */
  Operation: string;
  /** 应用包名列表 */
  PackageNames: string[];
}

declare interface SetAndroidInstancesBGAppKeepAliveResponse {
  /** 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息 */
  AndroidInstanceErrors?: AndroidInstanceError[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetAndroidInstancesFGAppKeepAliveRequest {
  /** 安卓实例 ID 列表（最大100条数据） */
  AndroidInstanceIds: string[];
  /** 操作类型，取值：ENABLE 开启保活、DISABLE 关闭保活。当关闭保活时，PackageName 参数传空即可 */
  Operation: string;
  /** 应用包名，开启保活时，必须传入 PackageName */
  PackageName?: string;
}

declare interface SetAndroidInstancesFGAppKeepAliveResponse {
  /** 错误列表。如果实例操作都成功，则响应没有这个字段；如果有实例操作失败，该字段包含了实例操作的错误信息 */
  AndroidInstanceErrors?: AndroidInstanceError[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartAndroidInstancesAppRequest {
  /** 实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 应用包名 */
  PackageName: string;
  /** 启动页。建议指定启动页来启动应用，避免启动失败。如果启动页为空，系统尝试根据 PackageName 启动，但不保证成功。 */
  Activity?: string;
}

declare interface StartAndroidInstancesAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartAndroidInstancesRequest {
  /** 实例ID */
  AndroidInstanceIds: string[];
}

declare interface StartAndroidInstancesResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
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

declare interface StopAndroidInstancesAppRequest {
  /** 实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 应用包名 */
  PackageName: string;
}

declare interface StopAndroidInstancesAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopAndroidInstancesRequest {
  /** 实例ID */
  AndroidInstanceIds: string[];
}

declare interface StopAndroidInstancesResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
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

declare interface SyncAndroidInstanceImageRequest {
  /** 安卓实例镜像 ID */
  AndroidInstanceImageId: string;
  /** 目的同步可用区列表 */
  DestinationZones: string[];
}

declare interface SyncAndroidInstanceImageResponse {
  /** 同步安卓实例镜像列表 */
  SyncAndroidInstanceImages?: SyncAndroidInstanceImage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncExecuteCommandOnAndroidInstancesRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** shell 命令，必须是1秒内能自动结束的命令 */
  Command: string;
}

declare interface SyncExecuteCommandOnAndroidInstancesResponse {
  /** 命令执行结果列表 */
  CommandResults?: SyncExecuteCommandResult[];
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

declare interface UninstallAndroidInstancesAppRequest {
  /** 实例ID */
  AndroidInstanceIds: string[];
  /** 应用ID */
  AndroidAppId?: string;
  /** 包名 */
  PackageName?: string;
}

declare interface UninstallAndroidInstancesAppResponse {
  /** 任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFileToAndroidInstancesRequest {
  /** 安卓实例 ID 列表 */
  AndroidInstanceIds: string[];
  /** 文件下载 URL */
  FileURL: string;
  /** 上传目标目录，只能上传到 /sdcard/ 目录或其子目录下 */
  DestinationDirectory?: string;
}

declare interface UploadFileToAndroidInstancesResponse {
  /** 实例任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFilesToAndroidInstancesRequest {
  /** 上传文件信息列表 */
  Files?: AndroidInstanceUploadFile[];
}

declare interface UploadFilesToAndroidInstancesResponse {
  /** 实例任务集合 */
  TaskSet?: AndroidInstanceTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Gs 云游戏} */
declare interface Gs {
  (): Versions;
  /** 备份安卓实例到指定存储 {@link BackUpAndroidInstanceToStorageRequest} {@link BackUpAndroidInstanceToStorageResponse} */
  BackUpAndroidInstanceToStorage(data: BackUpAndroidInstanceToStorageRequest, config?: AxiosRequestConfig): AxiosPromise<BackUpAndroidInstanceToStorageResponse>;
  /** 批量清理安卓实例应用数据 {@link CleanAndroidInstancesAppDataRequest} {@link CleanAndroidInstancesAppDataResponse} */
  CleanAndroidInstancesAppData(data: CleanAndroidInstancesAppDataRequest, config?: AxiosRequestConfig): AxiosPromise<CleanAndroidInstancesAppDataResponse>;
  /** 连接安卓实例 {@link ConnectAndroidInstanceRequest} {@link ConnectAndroidInstanceResponse} */
  ConnectAndroidInstance(data: ConnectAndroidInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ConnectAndroidInstanceResponse>;
  /** 复制安卓实例 {@link CopyAndroidInstanceRequest} {@link CopyAndroidInstanceResponse} */
  CopyAndroidInstance(data: CopyAndroidInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CopyAndroidInstanceResponse>;
  /** 创建安卓应用 {@link CreateAndroidAppRequest} {@link CreateAndroidAppResponse} */
  CreateAndroidApp(data: CreateAndroidAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidAppResponse>;
  /** 创建安卓应用版本 {@link CreateAndroidAppVersionRequest} {@link CreateAndroidAppVersionResponse} */
  CreateAndroidAppVersion(data: CreateAndroidAppVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidAppVersionResponse>;
  /** 创建安卓实例 ADB 连接 {@link CreateAndroidInstanceADBRequest} {@link CreateAndroidInstanceADBResponse} */
  CreateAndroidInstanceADB(data: CreateAndroidInstanceADBRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidInstanceADBResponse>;
  /** 创建安卓实例镜像 {@link CreateAndroidInstanceImageRequest} {@link CreateAndroidInstanceImageResponse} */
  CreateAndroidInstanceImage(data: CreateAndroidInstanceImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidInstanceImageResponse>;
  /** 创建安卓实例标签 {@link CreateAndroidInstanceLabelRequest} {@link CreateAndroidInstanceLabelResponse} */
  CreateAndroidInstanceLabel(data: CreateAndroidInstanceLabelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidInstanceLabelResponse>;
  /** 创建安卓实例 SSH 连接 {@link CreateAndroidInstanceSSHRequest} {@link CreateAndroidInstanceSSHResponse} */
  CreateAndroidInstanceSSH(data: CreateAndroidInstanceSSHRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidInstanceSSHResponse>;
  /** 创建安卓实例 WebShell 连接 {@link CreateAndroidInstanceWebShellRequest} {@link CreateAndroidInstanceWebShellResponse} */
  CreateAndroidInstanceWebShell(data: CreateAndroidInstanceWebShellRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidInstanceWebShellResponse>;
  /** 创建安卓实例 {@link CreateAndroidInstancesRequest} {@link CreateAndroidInstancesResponse} */
  CreateAndroidInstances(data: CreateAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidInstancesResponse>;
  /** 安卓实例截图 {@link CreateAndroidInstancesScreenshotRequest} {@link CreateAndroidInstancesScreenshotResponse} */
  CreateAndroidInstancesScreenshot(data: CreateAndroidInstancesScreenshotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndroidInstancesScreenshotResponse>;
  /** 创建 Cos 临时密钥 {@link CreateCosCredentialRequest} {@link CreateCosCredentialResponse} */
  CreateCosCredential(data: CreateCosCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCosCredentialResponse>;
  /** 创建会话 {@link CreateSessionRequest} {@link CreateSessionResponse} */
  CreateSession(data: CreateSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSessionResponse>;
  /** 删除安卓应用 {@link DeleteAndroidAppRequest} {@link DeleteAndroidAppResponse} */
  DeleteAndroidApp(data: DeleteAndroidAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAndroidAppResponse>;
  /** 删除安卓应用版本 {@link DeleteAndroidAppVersionRequest} {@link DeleteAndroidAppVersionResponse} */
  DeleteAndroidAppVersion(data: DeleteAndroidAppVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAndroidAppVersionResponse>;
  /** 删除安卓实例镜像 {@link DeleteAndroidInstanceImagesRequest} {@link DeleteAndroidInstanceImagesResponse} */
  DeleteAndroidInstanceImages(data: DeleteAndroidInstanceImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAndroidInstanceImagesResponse>;
  /** 删除安卓实例标签 {@link DeleteAndroidInstanceLabelRequest} {@link DeleteAndroidInstanceLabelResponse} */
  DeleteAndroidInstanceLabel(data: DeleteAndroidInstanceLabelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAndroidInstanceLabelResponse>;
  /** 查询安卓应用信息 {@link DescribeAndroidAppsRequest} {@link DescribeAndroidAppsResponse} */
  DescribeAndroidApps(data?: DescribeAndroidAppsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidAppsResponse>;
  /** 查询安卓实例应用 {@link DescribeAndroidInstanceAppsRequest} {@link DescribeAndroidInstanceAppsResponse} */
  DescribeAndroidInstanceApps(data: DescribeAndroidInstanceAppsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidInstanceAppsResponse>;
  /** 查询安卓实例镜像列表 {@link DescribeAndroidInstanceImagesRequest} {@link DescribeAndroidInstanceImagesResponse} */
  DescribeAndroidInstanceImages(data?: DescribeAndroidInstanceImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidInstanceImagesResponse>;
  /** 查询安卓实例标签 {@link DescribeAndroidInstanceLabelsRequest} {@link DescribeAndroidInstanceLabelsResponse} */
  DescribeAndroidInstanceLabels(data?: DescribeAndroidInstanceLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidInstanceLabelsResponse>;
  /** 查询安卓实例任务状态 {@link DescribeAndroidInstanceTasksStatusRequest} {@link DescribeAndroidInstanceTasksStatusResponse} */
  DescribeAndroidInstanceTasksStatus(data?: DescribeAndroidInstanceTasksStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidInstanceTasksStatusResponse>;
  /** 查询安卓实例 {@link DescribeAndroidInstancesRequest} {@link DescribeAndroidInstancesResponse} */
  DescribeAndroidInstances(data?: DescribeAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidInstancesResponse>;
  /** 查询安卓实例应用黑名单 {@link DescribeAndroidInstancesAppBlacklistRequest} {@link DescribeAndroidInstancesAppBlacklistResponse} */
  DescribeAndroidInstancesAppBlacklist(data: DescribeAndroidInstancesAppBlacklistRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidInstancesAppBlacklistResponse>;
  /** 查询安装指定应用的安卓实例 {@link DescribeAndroidInstancesByAppsRequest} {@link DescribeAndroidInstancesByAppsResponse} */
  DescribeAndroidInstancesByApps(data: DescribeAndroidInstancesByAppsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAndroidInstancesByAppsResponse>;
  /** 获取并发总数和运行数 {@link DescribeInstancesCountRequest} {@link DescribeInstancesCountResponse} */
  DescribeInstancesCount(data?: DescribeInstancesCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesCountResponse>;
  /** 销毁安卓实例 {@link DestroyAndroidInstancesRequest} {@link DestroyAndroidInstancesResponse} */
  DestroyAndroidInstances(data: DestroyAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyAndroidInstancesResponse>;
  /** 批量禁用安卓实例应用 {@link DisableAndroidInstancesAppRequest} {@link DisableAndroidInstancesAppResponse} */
  DisableAndroidInstancesApp(data: DisableAndroidInstancesAppRequest, config?: AxiosRequestConfig): AxiosPromise<DisableAndroidInstancesAppResponse>;
  /** 分发文件到安卓实例 {@link DistributeFileToAndroidInstancesRequest} {@link DistributeFileToAndroidInstancesResponse} */
  DistributeFileToAndroidInstances(data: DistributeFileToAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DistributeFileToAndroidInstancesResponse>;
  /** 分发照片到安卓实例相册 {@link DistributePhotoToAndroidInstancesRequest} {@link DistributePhotoToAndroidInstancesResponse} */
  DistributePhotoToAndroidInstances(data: DistributePhotoToAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DistributePhotoToAndroidInstancesResponse>;
  /** 批量启用安桌实例应用 {@link EnableAndroidInstancesAppRequest} {@link EnableAndroidInstancesAppResponse} */
  EnableAndroidInstancesApp(data: EnableAndroidInstancesAppRequest, config?: AxiosRequestConfig): AxiosPromise<EnableAndroidInstancesAppResponse>;
  /** 在安卓实例上异步执行命令 {@link ExecuteCommandOnAndroidInstancesRequest} {@link ExecuteCommandOnAndroidInstancesResponse} */
  ExecuteCommandOnAndroidInstances(data: ExecuteCommandOnAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteCommandOnAndroidInstancesResponse>;
  /** 批量获取安卓实例日志 {@link FetchAndroidInstancesLogsRequest} {@link FetchAndroidInstancesLogsResponse} */
  FetchAndroidInstancesLogs(data: FetchAndroidInstancesLogsRequest, config?: AxiosRequestConfig): AxiosPromise<FetchAndroidInstancesLogsResponse>;
  /** 导入安卓实例镜像 {@link ImportAndroidInstanceImageRequest} {@link ImportAndroidInstanceImageResponse} */
  ImportAndroidInstanceImage(data: ImportAndroidInstanceImageRequest, config?: AxiosRequestConfig): AxiosPromise<ImportAndroidInstanceImageResponse>;
  /** 安装安卓实例应用 {@link InstallAndroidInstancesAppRequest} {@link InstallAndroidInstancesAppResponse} */
  InstallAndroidInstancesApp(data: InstallAndroidInstancesAppRequest, config?: AxiosRequestConfig): AxiosPromise<InstallAndroidInstancesAppResponse>;
  /** 通过 URL 安装安卓实例应用 {@link InstallAndroidInstancesAppWithURLRequest} {@link InstallAndroidInstancesAppWithURLResponse} */
  InstallAndroidInstancesAppWithURL(data: InstallAndroidInstancesAppWithURLRequest, config?: AxiosRequestConfig): AxiosPromise<InstallAndroidInstancesAppWithURLResponse>;
  /** 修改安卓应用 {@link ModifyAndroidAppRequest} {@link ModifyAndroidAppResponse} */
  ModifyAndroidApp(data: ModifyAndroidAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidAppResponse>;
  /** 修改安卓应用版本 {@link ModifyAndroidAppVersionRequest} {@link ModifyAndroidAppVersionResponse} */
  ModifyAndroidAppVersion(data: ModifyAndroidAppVersionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidAppVersionResponse>;
  /** 修改安卓实例信息 {@link ModifyAndroidInstanceInformationRequest} {@link ModifyAndroidInstanceInformationResponse} */
  ModifyAndroidInstanceInformation(data: ModifyAndroidInstanceInformationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstanceInformationResponse>;
  /** 修改安卓实例分辨率 {@link ModifyAndroidInstanceResolutionRequest} {@link ModifyAndroidInstanceResolutionResponse} */
  ModifyAndroidInstanceResolution(data: ModifyAndroidInstanceResolutionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstanceResolutionResponse>;
  /** 修改安卓实例应用黑名单 {@link ModifyAndroidInstancesAppBlacklistRequest} {@link ModifyAndroidInstancesAppBlacklistResponse} */
  ModifyAndroidInstancesAppBlacklist(data: ModifyAndroidInstancesAppBlacklistRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstancesAppBlacklistResponse>;
  /** 批量修改安卓实例信息 {@link ModifyAndroidInstancesInformationRequest} {@link ModifyAndroidInstancesInformationResponse} */
  ModifyAndroidInstancesInformation(data: ModifyAndroidInstancesInformationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstancesInformationResponse>;
  /** 批量修改安卓实例的标签 {@link ModifyAndroidInstancesLabelsRequest} {@link ModifyAndroidInstancesLabelsResponse} */
  ModifyAndroidInstancesLabels(data: ModifyAndroidInstancesLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstancesLabelsResponse>;
  /** 批量修改安卓实例属性 {@link ModifyAndroidInstancesPropertiesRequest} {@link ModifyAndroidInstancesPropertiesResponse} */
  ModifyAndroidInstancesProperties(data: ModifyAndroidInstancesPropertiesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstancesPropertiesResponse>;
  /** 批量修改安卓实例分辨率 {@link ModifyAndroidInstancesResolutionRequest} {@link ModifyAndroidInstancesResolutionResponse} */
  ModifyAndroidInstancesResolution(data: ModifyAndroidInstancesResolutionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstancesResolutionResponse>;
  /** 批量修改安卓实例资源限制 {@link ModifyAndroidInstancesResourcesRequest} {@link ModifyAndroidInstancesResourcesResponse} */
  ModifyAndroidInstancesResources(data: ModifyAndroidInstancesResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstancesResourcesResponse>;
  /** 批量修改安卓实例的用户ID {@link ModifyAndroidInstancesUserIdRequest} {@link ModifyAndroidInstancesUserIdResponse} */
  ModifyAndroidInstancesUserId(data: ModifyAndroidInstancesUserIdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAndroidInstancesUserIdResponse>;
  /** 批量重启安卓实例宿主机 {@link RebootAndroidInstanceHostsRequest} {@link RebootAndroidInstanceHostsResponse} */
  RebootAndroidInstanceHosts(data: RebootAndroidInstanceHostsRequest, config?: AxiosRequestConfig): AxiosPromise<RebootAndroidInstanceHostsResponse>;
  /** 重启安卓实例 {@link RebootAndroidInstancesRequest} {@link RebootAndroidInstancesResponse} */
  RebootAndroidInstances(data: RebootAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RebootAndroidInstancesResponse>;
  /** 重置安卓实例 {@link ResetAndroidInstancesRequest} {@link ResetAndroidInstancesResponse} */
  ResetAndroidInstances(data: ResetAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAndroidInstancesResponse>;
  /** 重启安卓实例应用 {@link RestartAndroidInstancesAppRequest} {@link RestartAndroidInstancesAppResponse} */
  RestartAndroidInstancesApp(data: RestartAndroidInstancesAppRequest, config?: AxiosRequestConfig): AxiosPromise<RestartAndroidInstancesAppResponse>;
  /** 指定存储还原安卓实例 {@link RestoreAndroidInstanceFromStorageRequest} {@link RestoreAndroidInstanceFromStorageResponse} */
  RestoreAndroidInstanceFromStorage(data: RestoreAndroidInstanceFromStorageRequest, config?: AxiosRequestConfig): AxiosPromise<RestoreAndroidInstanceFromStorageResponse>;
  /** 保存游戏存档 {@link SaveGameArchiveRequest} {@link SaveGameArchiveResponse} */
  SaveGameArchive(data: SaveGameArchiveRequest, config?: AxiosRequestConfig): AxiosPromise<SaveGameArchiveResponse>;
  /** 批量设置安卓实例应用后台保活 {@link SetAndroidInstancesBGAppKeepAliveRequest} {@link SetAndroidInstancesBGAppKeepAliveResponse} */
  SetAndroidInstancesBGAppKeepAlive(data: SetAndroidInstancesBGAppKeepAliveRequest, config?: AxiosRequestConfig): AxiosPromise<SetAndroidInstancesBGAppKeepAliveResponse>;
  /** 批量设置安卓实例应用前台保活 {@link SetAndroidInstancesFGAppKeepAliveRequest} {@link SetAndroidInstancesFGAppKeepAliveResponse} */
  SetAndroidInstancesFGAppKeepAlive(data: SetAndroidInstancesFGAppKeepAliveRequest, config?: AxiosRequestConfig): AxiosPromise<SetAndroidInstancesFGAppKeepAliveResponse>;
  /** 开机安卓实例 {@link StartAndroidInstancesRequest} {@link StartAndroidInstancesResponse} */
  StartAndroidInstances(data: StartAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StartAndroidInstancesResponse>;
  /** 启动安卓实例应用 {@link StartAndroidInstancesAppRequest} {@link StartAndroidInstancesAppResponse} */
  StartAndroidInstancesApp(data: StartAndroidInstancesAppRequest, config?: AxiosRequestConfig): AxiosPromise<StartAndroidInstancesAppResponse>;
  /** 开始云端推流 {@link StartPublishStreamRequest} {@link StartPublishStreamResponse} */
  StartPublishStream(data: StartPublishStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishStreamResponse>;
  /** 开始云端推流到云直播 {@link StartPublishStreamToCSSRequest} {@link StartPublishStreamToCSSResponse} */
  StartPublishStreamToCSS(data: StartPublishStreamToCSSRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishStreamToCSSResponse>;
  /** 关机安卓实例 {@link StopAndroidInstancesRequest} {@link StopAndroidInstancesResponse} */
  StopAndroidInstances(data: StopAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StopAndroidInstancesResponse>;
  /** 停止安卓实例应用 {@link StopAndroidInstancesAppRequest} {@link StopAndroidInstancesAppResponse} */
  StopAndroidInstancesApp(data: StopAndroidInstancesAppRequest, config?: AxiosRequestConfig): AxiosPromise<StopAndroidInstancesAppResponse>;
  /** 强制退出游戏 {@link StopGameRequest} {@link StopGameResponse} */
  StopGame(data: StopGameRequest, config?: AxiosRequestConfig): AxiosPromise<StopGameResponse>;
  /** 停止云端推流 {@link StopPublishStreamRequest} {@link StopPublishStreamResponse} */
  StopPublishStream(data: StopPublishStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StopPublishStreamResponse>;
  /** 切换游戏存档 {@link SwitchGameArchiveRequest} {@link SwitchGameArchiveResponse} */
  SwitchGameArchive(data: SwitchGameArchiveRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchGameArchiveResponse>;
  /** 同步安卓实例镜像 {@link SyncAndroidInstanceImageRequest} {@link SyncAndroidInstanceImageResponse} */
  SyncAndroidInstanceImage(data: SyncAndroidInstanceImageRequest, config?: AxiosRequestConfig): AxiosPromise<SyncAndroidInstanceImageResponse>;
  /** 在安卓实例上同步执行命令 {@link SyncExecuteCommandOnAndroidInstancesRequest} {@link SyncExecuteCommandOnAndroidInstancesResponse} */
  SyncExecuteCommandOnAndroidInstances(data: SyncExecuteCommandOnAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<SyncExecuteCommandOnAndroidInstancesResponse>;
  /** 尝试锁定机器 {@link TrylockWorkerRequest} {@link TrylockWorkerResponse} */
  TrylockWorker(data: TrylockWorkerRequest, config?: AxiosRequestConfig): AxiosPromise<TrylockWorkerResponse>;
  /** 卸载安卓实例应用 {@link UninstallAndroidInstancesAppRequest} {@link UninstallAndroidInstancesAppResponse} */
  UninstallAndroidInstancesApp(data: UninstallAndroidInstancesAppRequest, config?: AxiosRequestConfig): AxiosPromise<UninstallAndroidInstancesAppResponse>;
  /** 上传文件到安卓实例 {@link UploadFileToAndroidInstancesRequest} {@link UploadFileToAndroidInstancesResponse} */
  UploadFileToAndroidInstances(data: UploadFileToAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFileToAndroidInstancesResponse>;
  /** 批量上传文件到安卓实例 {@link UploadFilesToAndroidInstancesRequest} {@link UploadFilesToAndroidInstancesResponse} */
  UploadFilesToAndroidInstances(data?: UploadFilesToAndroidInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFilesToAndroidInstancesResponse>;
}

export declare type Versions = ["2019-11-18"];

export default Gs;
