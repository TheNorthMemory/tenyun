/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** HTTP域名相关信息 */
declare interface AccessInfo {
  /** 域名 */
  Host: string;
  /** VIP */
  Vip: string;
}

/** 函数的版本别名 */
declare interface Alias {
  /** 别名指向的主版本 */
  FunctionVersion: string;
  /** 别名的名称 */
  Name: string;
  /** 别名的路由信息 */
  RoutingConfig: RoutingConfig;
  /** 描述信息 */
  Description?: string;
  /** 创建时间 */
  AddTime?: string;
  /** 更新时间 */
  ModTime?: string;
}

/** 异步事件 */
declare interface AsyncEvent {
  /** 调用请求id */
  InvokeRequestId: string;
  /** 调用类型 */
  InvokeType: string;
  /** 函数版本 */
  Qualifier: string;
  /** 事件状态，RUNNING 表示运行中, FINISHED 表示调用成功, ABORTED 表示调用终止, FAILED 表示调用失败 */
  Status: string;
  /** 调用开始时间，格式: "%Y-%m-%d %H:%M:%S.%f" */
  StartTime: string;
  /** 调用结束时间，格式: "%Y-%m-%d %H:%M:%S.%f" */
  EndTime: string;
}

/** 异步事件状态 */
declare interface AsyncEventStatus {
  /** 异步事件状态，RUNNING 表示运行中, FINISHED 表示调用成功, ABORTED 表示调用终止, FAILED 表示调用失败。 */
  Status: string;
  /** 请求状态码 */
  StatusCode: number;
  /** 异步执行请求 Id */
  InvokeRequestId: string;
}

/** 函数的异步重试配置详情 */
declare interface AsyncTriggerConfig {
  /** 用户错误的异步重试重试配置 */
  RetryConfig: RetryConfig[];
  /** 消息保留时间 */
  MsgTTL: number;
}

/** 证书配置 */
declare interface CertConf {
  /** ssl证书ID */
  CertificateId?: string;
}

/** 文件系统(cfs)配置描述 */
declare interface CfsConfig {
  /** 文件系统信息列表 */
  CfsInsList: CfsInsInfo[];
}

/** 云函数关联的cfs配置信息 */
declare interface CfsInsInfo {
  /** 用户id */
  UserId: string;
  /** 用户组id */
  UserGroupId: string;
  /** 文件系统实例id */
  CfsId: string;
  /** 文件系统挂载点id */
  MountInsId: string;
  /** 本地挂载点 */
  LocalMountDir: string;
  /** 远程挂载点 */
  RemoteMountDir: string;
  /** 文件系统ip，配置 cfs 时无需填写。 */
  IpAddress?: string | null;
  /** 文件系统所在的私有网络id，配置 cfs 时无需填写。 */
  MountVpcId?: string | null;
  /** 文件系统所在私有网络的子网id，配置 cfs 时无需填写。 */
  MountSubnetId?: string | null;
}

/** 函数代码 */
declare interface Code {
  /** 对象存储桶名称（填写存储桶名称自定义部分，不包含-appid） */
  CosBucketName?: string;
  /** 对象存储中代码包文件路径，以/开头 */
  CosObjectName?: string;
  /** 包含函数代码文件及其依赖项的 zip 格式文件，zip包大小上限为 50MB，使用该接口时要求将 zip 文件的内容转成 base64 编码 */
  ZipFile?: string;
  /** 对象存储的地域，地域为北京时需要传入ap-beijing,北京一区时需要传递ap-beijing-1，其他的地域不需要传递。 */
  CosBucketRegion?: string;
  /** 如果是通过Demo创建的话，需要传入DemoId */
  DemoId?: string;
  /** 如果是从TempCos创建的话，需要传入TempCosObjectName */
  TempCosObjectName?: string;
  /** Git地址。该功能已下线。 */
  GitUrl?: string;
  /** Git用户名。该功能已下线。 */
  GitUserName?: string;
  /** Git密码。该功能已下线。 */
  GitPassword?: string;
  /** 加密后的Git密码，一般无需指定。该功能已下线。 */
  GitPasswordSecret?: string;
  /** Git分支。该功能已下线。 */
  GitBranch?: string;
  /** 代码在Git仓库中的路径。该功能已下线。 */
  GitDirectory?: string;
  /** 指定要拉取的版本。该功能已下线。 */
  GitCommitId?: string;
  /** 加密后的Git用户名，一般无需指定。该功能已下线。 */
  GitUserNameSecret?: string;
  /** 镜像部署时配置TCR镜像信息 */
  ImageConfig?: ImageConfig;
}

/** 死信队列参数 */
declare interface DeadLetterConfig {
  /** 死信队列模式 */
  Type: string;
  /** 死信队列名称 */
  Name: string;
  /** 死信队列主题模式的标签形式 */
  FilterType?: string;
}

/** 云函数自定义域名详情 */
declare interface DomainInfo {
  /** 域名，不支持泛域名 */
  Domain: string;
  /** 协议，取值范围：HTTP, HTTPS, HTTP&HTTPS */
  Protocol?: string;
  /** 路由配置信息 */
  EndpointsConfig?: EndpointsConf[];
  /** 证书配置信息，HTTPS协议必传路由配置 */
  CertConfig?: CertConf;
  /** web 应用防火墙配置 */
  WafConfig?: WafConf;
}

/** 公网访问固定ip配置 */
declare interface EipConfigIn {
  /** Eip开启状态，取值['ENABLE','DISABLE'] */
  EipStatus: string;
}

/** 公网访问固定ip配置 */
declare interface EipConfigOut {
  /** 是否是固定IP，["ENABLE","DISABLE"] */
  EipStatus?: string;
  /** IP列表 */
  EipAddress?: string[];
}

/** EipOutConfig */
declare interface EipOutConfig {
  /** 是否是固定IP，["TRUE","FALSE"] */
  EipFixed?: string;
  /** IP列表 */
  Eips?: string[];
}

/** 后端路由配置信息 */
declare interface EndpointsConf {
  /** 函数命名空间 */
  Namespace: string;
  /** 函数名 */
  FunctionName: string;
  /** 函数别名或版本 */
  Qualifier: string;
  /** 路径,取值规范：/，/*，/xxx，/xxx/a，/xxx/*" */
  PathMatch: string;
  /** 路径重写策略 */
  PathRewrite?: PathRewriteRule[] | null;
}

/** 函数的环境变量参数 */
declare interface Environment {
  /** 环境变量数组 */
  Variables?: Variable[];
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 需要过滤的字段。过滤条件数量限制为10。Name可选值：VpcId, SubnetId, ClsTopicId, ClsLogsetId, Role, CfsId, CfsMountInsId, Eip；Values 长度限制为1。Name可选值：Status, Runtime, FunctionType, PublicNetStatus, AsyncRunEnable, TraceEnable；Values 长度限制为20。当 Name = Runtime 时，CustomImage 表示过滤镜像类型函数。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 函数列表 */
declare interface Function {
  /** 修改时间 */
  ModTime?: string;
  /** 创建时间 */
  AddTime?: string;
  /** 运行时 */
  Runtime?: string | null;
  /** 函数名称 */
  FunctionName?: string;
  /** 函数ID */
  FunctionId?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 函数状态，状态值及流转[参考此处](https://cloud.tencent.com/document/product/583/17244) */
  Status?: string;
  /** 函数状态详情 */
  StatusDesc?: string;
  /** 函数描述 */
  Description?: string;
  /** 函数标签 */
  Tags?: Tag[];
  /** 函数类型，取值为 HTTP 或者 Event */
  Type?: string;
  /** 函数状态失败原因 */
  StatusReasons?: StatusReason[];
  /** 函数所有版本预置并发内存总和 */
  TotalProvisionedConcurrencyMem?: number | null;
  /** 函数并发保留内存 */
  ReservedConcurrencyMem?: number | null;
  /** 函数异步属性，取值 TRUE 或者 FALSE */
  AsyncRunEnable?: string;
  /** 异步函数是否开启调用追踪，取值 TRUE 或者 FALSE */
  TraceEnable?: string;
}

/** 日志信息 */
declare interface FunctionLog {
  /** 函数的名称 */
  FunctionName?: string;
  /** 函数执行完成后的返回值 */
  RetMsg?: string;
  /** 执行该函数对应的requestId */
  RequestId?: string;
  /** 函数开始执行时的时间点 */
  StartTime?: string;
  /** 函数执行结果，如果是 0 表示执行成功，2表示函数运行中，3表示函数执行中断，其他值表示失败 */
  RetCode?: number;
  /** 函数调用是否结束，如果是 1 表示执行结束，其他值表示调用异常 */
  InvokeFinished?: number;
  /** 函数执行耗时，单位为 ms */
  Duration?: number;
  /** 函数计费时间，根据 duration 向上取最近的 100ms，单位为ms */
  BillDuration?: number;
  /** 函数执行时消耗实际内存大小，单位为 Byte */
  MemUsage?: number;
  /** 函数执行过程中的日志输出 */
  Log?: string;
  /** 日志等级 */
  Level?: string;
  /** 日志来源 */
  Source?: string;
  /** 重试次数 */
  RetryNum?: number;
}

/** 函数版本信息 */
declare interface FunctionVersion {
  /** 函数版本名称 */
  Version: string;
  /** 版本描述信息 */
  Description?: string | null;
  /** 创建时间 */
  AddTime?: string | null;
  /** 更新时间 */
  ModTime?: string | null;
  /** 版本状态 */
  Status?: string | null;
}

/** TCR镜像信息描述 */
declare interface ImageConfig {
  /** 镜像仓库类型，个人版或者企业版：personal/enterprise */
  ImageType: string;
  /** {domain}/{namespace}/{imageName}:{tag}@{digest} */
  ImageUri: string;
  /** 用于企业版TCR获取镜像拉取临时凭证，ImageType为"enterprise"时必填 */
  RegistryId?: string | null;
  /** 参数已废弃 */
  EntryPoint?: string | null;
  /** 容器的启动命令。该参数为可选参数，如果不填写，则默认使用 Dockerfile 中的 Entrypoint。传入规范，填写可运行的指令，例如 python */
  Command?: string | null;
  /** 容器的启动参数。该参数为可选参数，如果不填写，则默认使用 Dockerfile 中的 CMD。传入规范，以“空格”作为参数的分割标识，例如 -u app.py */
  Args?: string | null;
  /** 镜像加速开关，默认False */
  ContainerImageAccelerate?: boolean | null;
  /** 镜像函数端口设置，可指定镜像类型Web Server镜像：9000Job 镜像：-1默认值：9000示例值：9000 */
  ImagePort?: number | null;
}

/** 多并发执行配置描述 */
declare interface InstanceConcurrencyConfig {
  /** 是否开启智能动态并发。'FALSE'时是静态并发。''时取消多并发配置。 */
  DynamicEnabled?: string | null;
  /** 单实例并发数最大值。取值范围 [1,100] */
  MaxConcurrency?: number | null;
}

/** 内网配置 */
declare interface IntranetConfigIn {
  /** 是否开启固定内网IPENABLE 为开启DISABLE 为不开启 */
  IpFixed: string;
}

/** 内网配置 */
declare interface IntranetConfigOut {
  /** 是否启用固定内网IPENABLE 为启用DISABLE 为不启用 */
  IpFixed?: string;
  /** 若已启用固定内网IP，则该字段返回使用的IP列表 */
  IpAddress?: string[] | null;
}

/** k8s label */
declare interface K8SLabel {
  /** label的名称 */
  Key: string;
  /** label的值 */
  Value: string;
}

/** Kubernetes污点容忍，使用时请注意您的Kubernetes版本所支持的字段情况。可参考 https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/taint-and-toleration/ */
declare interface K8SToleration {
  /** 匹配的污点名 */
  Key?: string;
  /** 匹配方式，默认值为: Equal */
  Operator?: string | null;
  /** 执行策略 */
  Effect?: string | null;
  /** 匹配的污点值，当Operator为Equal时必填 */
  Value?: string | null;
  /** 当污点不被容忍时，Pod还能在节点上运行多久 */
  TolerationSeconds?: number | null;
}

/** 层版本信息 */
declare interface LayerVersionInfo {
  /** 版本适用的运行时 */
  CompatibleRuntimes?: string[];
  /** 创建时间 */
  AddTime?: string;
  /** 版本描述 */
  Description?: string;
  /** 许可证信息 */
  LicenseInfo?: string | null;
  /** 版本号 */
  LayerVersion?: number;
  /** 层名称 */
  LayerName?: string;
  /** 层的具体版本当前状态，状态值[参考此处](https://cloud.tencent.com/document/product/583/115197) */
  Status?: string;
  /** Stamp */
  Stamp?: string;
  /** 返回层绑定的标签信息 */
  Tags?: Tag[] | null;
}

/** 指定某个Layer版本 */
declare interface LayerVersionSimple {
  /** 绑定的层名称。解绑层需传递空字符串。 */
  LayerName: string;
  /** 绑定或解绑层的版本号。解绑函数版本关联的最后一个层版本时，LayerVersion 填 0。 */
  LayerVersion: number;
}

/** 限制信息 */
declare interface LimitsInfo {
  /** 命名空间个数限制 */
  NamespacesCount?: number;
  /** 命名空间限制信息 */
  Namespace?: NamespaceLimit[];
}

/** 日志过滤条件，用于区分正确与错误日志 */
declare interface LogFilter {
  /** filter.RetCode的取值有：not0 表示只返回错误日志，is0 表示只返回正确日志，TimeLimitExceeded 返回函数调用发生超时的日志，ResourceLimitExceeded 返回函数调用发生资源超限的日志，UserCodeException 返回函数调用发生用户代码错误的日志，无输入则返回所有日志。 */
  RetCode?: string;
}

/** 日志搜索上下文 */
declare interface LogSearchContext {
  /** 偏移量 */
  Offset: string;
  /** 日志条数 */
  Limit: number;
  /** 日志关键词 */
  Keyword?: string;
  /** 日志类型，支持Application和Platform，默认为Application */
  Type?: string;
}

/** 命名空间 */
declare interface Namespace {
  /** 命名空间创建时间 */
  ModTime?: string;
  /** 命名空间修改时间 */
  AddTime?: string;
  /** 命名空间描述 */
  Description?: string;
  /** 命名空间名称 */
  Name?: string;
  /** 默认default，TCB表示是小程序云开发创建的 */
  Type?: string;
}

/** 命名空间限制 */
declare interface NamespaceLimit {
  /** 函数总数 */
  FunctionsCount?: number;
  /** Trigger信息 */
  Trigger?: TriggerCount;
  /** Namespace名称 */
  Namespace?: string;
  /** 并发量 */
  ConcurrentExecutions?: number;
  /** Timeout限制 */
  TimeoutLimit?: number;
  /** 测试事件限制 */
  TestModelLimit?: number | null;
  /** 初始化超时限制 */
  InitTimeoutLimit?: number;
  /** 异步重试次数限制 */
  RetryNumLimit?: number;
  /** 异步重试消息保留时间下限 */
  MinMsgTTL?: number;
  /** 异步重试消息保留时间上限 */
  MaxMsgTTL?: number;
}

/** 命名空间资源池配置 */
declare interface NamespaceResourceEnv {
  /** 基于TKE集群的资源池 */
  TKE?: NamespaceResourceEnvTKE | null;
  /** 近离线计算类型的命名空间 */
  OFFLINE?: boolean;
}

/** 基于TKE的资源池选项 */
declare interface NamespaceResourceEnvTKE {
  /** 集群ID */
  ClusterID: string;
  /** 子网ID */
  SubnetID: string;
  /** 命名空间 */
  Namespace: string;
  /** 数据存储地址 */
  DataPath?: string | null;
  /** node选择器 */
  NodeSelector?: K8SLabel[] | null;
  /** 污点容忍 */
  Tolerations?: K8SToleration[] | null;
  /** scf组件将占用的节点端口起始号 */
  Port?: number | null;
  /** yaml格式的pod patch内容，例如metadata: labels: key: value */
  PodTemplatePatch?: string | null;
}

/** 名称空间已使用信息 */
declare interface NamespaceUsage {
  /** 函数数组 */
  Functions?: string[];
  /** 命名空间名称 */
  Namespace?: string;
  /** 命名空间函数个数 */
  FunctionsCount?: number;
  /** 命名空间配额总量 */
  TotalConcurrencyMem?: number;
  /** 命名空间并发使用量 */
  TotalAllocatedConcurrencyMem?: number;
  /** 命名空间预置使用量 */
  TotalAllocatedProvisionedMem?: number;
}

/** 路径路由重写规则 */
declare interface PathRewriteRule {
  /** 需要重路由的路径，取值规范：/，/*，/xxx，/xxx/a，/xxx/* */
  Path: string;
  /** 匹配规，取值范围： WildcardRules 通配符匹配， ExactRules 精确匹配 */
  Type: string;
  /** 替换值：比如/, /$ */
  Rewrite: string;
}

/** HTTP函数支持其他访问协议的参数 */
declare interface ProtocolParams {
  /** WebSockets协议支持的参数 */
  WSParams?: WSParams | null;
}

/** 公网访问配置 */
declare interface PublicNetConfigIn {
  /** 是否开启公网访问能力取值['DISABLE','ENABLE'] */
  PublicNetStatus: string;
  /** Eip配置 */
  EipConfig?: EipConfigIn;
}

/** 公网访问配置 */
declare interface PublicNetConfigOut {
  /** 是否开启公网访问能力取值['DISABLE','ENABLE'] */
  PublicNetStatus?: string;
  /** Eip配置 */
  EipConfig?: EipConfigOut;
}

/** 函数运行状态 */
declare interface RequestStatus {
  /** 函数的名称 */
  FunctionName?: string;
  /** 函数执行完成后的返回值 */
  RetMsg?: string;
  /** 查询的请求 id */
  RequestId?: string;
  /** 请求开始时间 */
  StartTime?: string;
  /** 请求执行结果， 0 表示执行成功，1表示运行中，-1 表示执行异常。 */
  RetCode?: number;
  /** 请求运行耗时，单位：ms */
  Duration?: number;
  /** 请求消耗内存，单位为 MB */
  MemUsage?: number;
  /** 重试次数 */
  RetryNum?: number;
}

/** 运行函数的返回 */
declare interface Result {
  /** 表示执行过程中的日志输出，异步调用返回为空 */
  Log?: string;
  /** 表示执行函数的返回，异步调用返回为空 */
  RetMsg?: string;
  /** 表示执行函数的错误返回信息，异步调用返回为空 */
  ErrMsg?: string;
  /** 执行函数时的内存大小，单位为Byte，异步调用返回为空 */
  MemUsage?: number;
  /** 表示执行函数的耗时，单位是毫秒，异步调用返回为空 */
  Duration?: number;
  /** 表示函数的计费耗时，单位是毫秒，异步调用返回为空 */
  BillDuration?: number;
  /** 此次函数执行的Id */
  FunctionRequestId?: string;
  /** 请求 Invoke 接口，该参数已弃用。请求 InvokeFunction 接口，该参数值为请求执行[状态码](https://cloud.tencent.com/document/product/583/42611)。 */
  InvokeResult?: number;
}

/** 异步重试配置 */
declare interface RetryConfig {
  /** 重试次数 */
  RetryNum: number;
}

/** 别名的版本路由配置其中：随机权重路由附加版本和规则路由附加版本不可以同时配置 */
declare interface RoutingConfig {
  /** 随机权重路由附加版本 */
  AdditionalVersionWeights?: VersionWeight[];
  /** 规则路由附加版本 */
  AddtionVersionMatchs?: VersionMatch[];
}

/** 包含搜索关键字和对应的内容 */
declare interface SearchKey {
  /** 搜索关键字 */
  Key: string;
  /** 搜索内容 */
  Value: string;
}

/** 状态原因描述 */
declare interface StatusReason {
  /** 错误码 */
  ErrorCode?: string;
  /** 错误描述 */
  ErrorMessage?: string;
}

/** 函数标签 */
declare interface Tag {
  /** 标签的key */
  Key: string;
  /** 标签的value */
  Value: string;
}

/** 左闭右开时间区间，包括起始时间和结束时间，格式为"%Y-%m-%d %H:%M:%S" */
declare interface TimeInterval {
  /** 起始时间（包括在内），格式"%Y-%m-%d %H:%M:%S" */
  Start: string;
  /** 结束时间（不包括在内），格式"%Y-%m-%d %H:%M:%S" */
  End: string;
}

/** 触发器类型 */
declare interface Trigger {
  /** 触发器最后修改时间 */
  ModTime?: string;
  /** 触发器类型 */
  Type?: string;
  /** 触发器详细配置 */
  TriggerDesc?: string;
  /** 触发器名称 */
  TriggerName?: string;
  /** 触发器创建时间 */
  AddTime?: string;
  /** 使能开关 */
  Enable?: number;
  /** 客户自定义参数 */
  CustomArgument?: string;
  /** 触发器状态 */
  AvailableStatus?: string;
  /** 触发器最小资源ID */
  ResourceId?: string;
  /** 触发器和云函数绑定状态 */
  BindStatus?: string;
  /** 触发器类型，双向表示两侧控制台均可操作，单向表示SCF控制台单向创建 */
  TriggerAttribute?: string;
  /** 触发器绑定的别名或版本 */
  Qualifier?: string;
  /** 触发器描述 */
  Description?: string;
}

/** 预置定时任务动作 */
declare interface TriggerAction {
  /** 定时预置名称 */
  TriggerName: string;
  /** 定时预置并发数量 */
  TriggerProvisionedConcurrencyNum: number;
  /** 设置定时触发器的时间配置，cron表达式。Cron 表达式有七个必需字段，按空格分隔。 */
  TriggerCronConfig: string;
  /** 预置类型 Default */
  ProvisionedType?: string | null;
}

/** TriggerCount描述不同类型触发器的数量 */
declare interface TriggerCount {
  /** Cos触发器数量 */
  Cos?: number;
  /** Timer触发器数量 */
  Timer?: number;
  /** Cmq触发器数量 */
  Cmq?: number;
  /** 触发器总数 */
  Total?: number;
  /** Ckafka触发器数量 */
  Ckafka?: number;
  /** Apigw触发器数量 */
  Apigw?: number;
  /** Cls触发器数量 */
  Cls?: number;
  /** Clb触发器数量 */
  Clb?: number;
  /** Mps触发器数量 */
  Mps?: number;
  /** Cm触发器数量 */
  Cm?: number;
  /** Vod触发器数量 */
  Vod?: number;
  /** Eb触发器数量 */
  Eb?: number;
}

/** 触发器信息 */
declare interface TriggerInfo {
  /** 使能开关 */
  Enable?: number;
  /** 函数版本或别名 */
  Qualifier?: string;
  /** 触发器名称 */
  TriggerName?: string;
  /** 触发器类型 */
  Type?: string;
  /** 触发器详细配置 */
  TriggerDesc?: string;
  /** 触发器是否可用 */
  AvailableStatus?: string;
  /** 客户自定义参数 */
  CustomArgument?: string | null;
  /** 触发器创建时间 */
  AddTime?: string;
  /** 触发器最后修改时间 */
  ModTime?: string;
  /** 触发器最小资源ID */
  ResourceId?: string;
  /** 触发器和云函数绑定状态 */
  BindStatus?: string;
  /** 触发器类型，双向表示两侧控制台均可操作，单向表示SCF控制台单向创建 */
  TriggerAttribute?: string;
  /** 客户自定义触发器描述 */
  Description?: string | null;
}

/** 已使用的信息 */
declare interface UsageInfo {
  /** 命名空间个数 */
  NamespacesCount?: number;
  /** 命名空间详情 */
  Namespace?: NamespaceUsage[];
  /** 当前地域用户并发内存配额上限 */
  TotalConcurrencyMem?: number;
  /** 当前地域用户已配置并发内存额度 */
  TotalAllocatedConcurrencyMem?: number;
  /** 用户实际配置的账号并发配额 */
  UserConcurrencyMemLimit?: number;
}

/** 变量参数 */
declare interface Variable {
  /** 变量的名称，不可为空字符 */
  Key?: string;
  /** 变量的值，不可为空字符 */
  Value?: string;
}

/** 带有匹配规则的函数版本 */
declare interface VersionMatch {
  /** 函数版本名称 */
  Version: string;
  /** 匹配规则的key，调用时通过传key来匹配规则路由到指定版本header方式：key填写"invoke.headers.User"，并在 invoke 调用函数时传参 RoutingKey：{"User":"value"}规则匹配调用 */
  Key: string;
  /** 匹配方式。取值范围：range：范围匹配exact：字符串精确匹配 */
  Method: string;
  /** range 匹配规则要求：需要为开区间或闭区间描述 (a,b) [a,b]，其中 a、b 均为整数exact 匹配规则要求：字符串精确匹配 */
  Expression: string;
}

/** 函数版本的预置并发信息，包括设置预置并发数、已完成预置的并发数和预置任务状态。 */
declare interface VersionProvisionedConcurrencyInfo {
  /** 设置的预置并发数。 */
  AllocatedProvisionedConcurrencyNum?: number;
  /** 当前已完成预置的并发数。 */
  AvailableProvisionedConcurrencyNum?: number;
  /** 预置任务状态，Done表示已完成，InProgress表示进行中，Failed表示部分或全部失败。 */
  Status?: string;
  /** 对预置任务状态Status的说明。 */
  StatusReason?: string;
  /** 函数版本号 */
  Qualifier?: string;
  /** 预置并发定时任务。 */
  TriggerActions?: TriggerAction[] | null;
}

/** 带有权重的函数版本 */
declare interface VersionWeight {
  /** 函数版本名称 */
  Version: string;
  /** 该版本的权重 */
  Weight: number;
}

/** 私有网络参数配置 */
declare interface VpcConfig {
  /** 私有网络 的 Id */
  VpcId?: string;
  /** 子网的 Id */
  SubnetId?: string;
}

/** HTTP函数通过WebSockets协议访问时的参数 */
declare interface WSParams {
  /** 空闲超时时间, 单位秒，默认15s。可配置范围1~1800s。 */
  IdleTimeOut?: number | null;
}

/** web应用防火墙配置信息 */
declare interface WafConf {
  /** web应用防火墙是否打开， 取值范围:OPEN, CLOSE */
  WafOpen?: string;
  /** web应用防火墙实例ID */
  WafInstanceId?: string;
}

declare interface CopyFunctionRequest {
  /** 要复制的函数的名称 */
  FunctionName: string;
  /** 新函数的名称 */
  NewFunctionName: string;
  /** 要复制的函数所在的命名空间，默认为default */
  Namespace?: string;
  /** 将函数复制到的命名空间，默认为default */
  TargetNamespace?: string;
  /** 新函数的描述 */
  Description?: string;
  /** 要将函数复制到的地域，不填则默认为当前地域 */
  TargetRegion?: string;
  /** 如果目标Namespace下已有同名函数，是否覆盖，默认为否（注意：如果选择覆盖，会导致同名函数被删除，请慎重操作）TRUE：覆盖同名函数FALSE：不覆盖同名函数 */
  Override?: boolean;
  /** 是否复制函数的属性，包括环境变量、内存、超时、函数描述、标签、VPC等，默认为是。TRUE：复制函数配置FALSE：不复制函数配置 */
  CopyConfiguration?: boolean;
}

declare interface CopyFunctionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAliasRequest {
  /** 别名的名称，在函数级别中唯一，只能包含字母、数字、'_'和‘-’，且必须以字母开头，长度限制为1-64 */
  Name: string;
  /** 函数名称 */
  FunctionName: string;
  /** 别名指向的主版本 */
  FunctionVersion: string;
  /** 函数所在的命名空间 */
  Namespace?: string;
  /** 别名的路由信息，需要为别名指定附加版本时，必须提供此参数； 附加版本指的是：除主版本 FunctionVersion 外，为此别名再指定一个函数可正常使用的版本； 这里附加版本中的 Version 值 不能是别名指向的主版本； 要注意的是：如果想要某个版本的流量全部指向这个别名，不需配置此参数； 目前一个别名最多只能指定一个附加版本 */
  RoutingConfig?: RoutingConfig;
  /** 别名的描述信息 */
  Description?: string;
}

declare interface CreateAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomDomainRequest {
  /** 域名，不支持泛域名 */
  Domain: string;
  /** 协议，取值范围：HTTP, HTTPS, HTTP&HTTPS */
  Protocol: string;
  /** 路由配置 */
  EndpointsConfig: EndpointsConf[];
  /** 证书配置信息，有使用HTTPS协议时候必须传 */
  CertConfig?: CertConf;
  /** web 应用防火墙配置 */
  WafConfig?: WafConf;
}

declare interface CreateCustomDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFunctionRequest {
  /** 创建的函数名称，函数名称支持26个英文字母大小写、数字、连接符和下划线，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度2-60 */
  FunctionName: string;
  /** 函数代码. 注意：不能同时指定Cos、ZipFile或 DemoId。 */
  Code: Code;
  /** 函数处理方法名称，名称格式支持 "文件名称.方法名称" 形式（java 名称格式 包名.类名::方法名），文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求是 2-60 个字符 */
  Handler?: string;
  /** 函数描述,最大支持 1000 个英文字母、数字、空格、逗号、换行符和英文句号，支持中文 */
  Description?: string;
  /** 函数运行时内存大小，默认为 128M，可选范围 64、128MB-3072MB，并且以 128MB 为阶梯 */
  MemorySize?: number;
  /** 函数最长执行时间，单位为秒，可选值范围 1-900 秒，默认为 3 秒 */
  Timeout?: number;
  /** 函数的环境变量 */
  Environment?: Environment;
  /** 函数运行环境，默认Python2.7目前支持的运行环境：- Python2.7- Python3.6- Python3.7- Python3.9- Python3.10- Nodejs6.10- Nodejs8.9- Nodejs10.15- Nodejs12.16- Nodejs14.18- Nodejs16.13- Nodejs18.15- Php5.6- Php7(7.2版本)- Php7.4- Php8.0- Go1- Java8- CustomRuntime */
  Runtime?: string;
  /** 函数的私有网络配置 */
  VpcConfig?: VpcConfig;
  /** 函数所属命名空间 */
  Namespace?: string;
  /** 函数绑定的角色 */
  Role?: string;
  /** [在线依赖安装](https://cloud.tencent.com/document/product/583/37920)，TRUE 表示安装，默认值为 FALSE。仅支持 Node.js 函数。 */
  InstallDependency?: string;
  /** 函数日志投递到的CLS LogsetID */
  ClsLogsetId?: string;
  /** 函数日志投递到的CLS TopicID */
  ClsTopicId?: string;
  /** 函数类型，默认值为Event，创建触发器函数请填写Event，创建HTTP函数级服务请填写HTTP */
  Type?: string;
  /** CodeSource 代码来源，支持ZipFile, Cos, Demo 其中之一 */
  CodeSource?: string;
  /** 函数要关联的Layer版本列表，Layer会按照在列表中顺序依次覆盖。 */
  Layers?: LayerVersionSimple[];
  /** 死信队列参数 */
  DeadLetterConfig?: DeadLetterConfig;
  /** 公网访问配置 */
  PublicNetConfig?: PublicNetConfigIn;
  /** 文件系统配置参数，用于云函数挂载文件系统 */
  CfsConfig?: CfsConfig;
  /** 函数初始化超时时间，默认 65s，镜像部署函数默认 90s。 */
  InitTimeout?: number;
  /** 函数 Tag 参数，以键值对数组形式传入 */
  Tags?: Tag[];
  /** 是否开启异步属性，TRUE 为开启，FALSE为关闭 */
  AsyncRunEnable?: string;
  /** 是否开启事件追踪，TRUE 为开启，FALSE为关闭 */
  TraceEnable?: string;
  /** 是否自动创建cls索引，TRUE 为开启，FALSE为关闭 */
  AutoDeployClsTopicIndex?: string;
  /** 是否自动创建cls主题，TRUE 为开启，FALSE为关闭 */
  AutoCreateClsTopic?: string;
  /** HTTP函数支持的访问协议。当前支持WebSockets协议，值为WS */
  ProtocolType?: string;
  /** HTTP函数配置ProtocolType访问协议，当前协议可配置的参数 */
  ProtocolParams?: ProtocolParams;
  /** 单实例多并发配置。只支持Web函数。 */
  InstanceConcurrencyConfig?: InstanceConcurrencyConfig;
  /** 是否开启Dns缓存能力。只支持EVENT函数。默认为FALSE，TRUE 为开启，FALSE为关闭 */
  DnsCache?: string;
  /** 内网访问配置 */
  IntranetConfig?: IntranetConfigIn;
}

declare interface CreateFunctionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNamespaceRequest {
  /** 命名空间名称 */
  Namespace: string;
  /** 命名空间描述 */
  Description?: string;
  /** 资源池配置 */
  ResourceEnv?: NamespaceResourceEnv;
}

declare interface CreateNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTriggerRequest {
  /** 新建触发器绑定的函数名称 */
  FunctionName: string;
  /** 新建触发器名称。如果是定时触发器，名称支持英文字母、数字、连接符和下划线，最长100个字符；如果是cos触发器，需要是对应cos存储桶适用于XML API的访问域名(例如:5401-5ff414-12345.cos.ap-shanghai.myqcloud.com);如果是其他触发器，见具体触发器绑定参数的说明 */
  TriggerName: string;
  /** 触发器类型，目前支持 cos 、cls 、 timer、 ckafka、http类型。创建函数 URL 请使用 http 类型，参考[创建函数 URL ](https://cloud.tencent.com/document/product/583/100227)。创建 cls 触发器请参考[CLS 创建投递 SCF 任务](https://cloud.tencent.com/document/product/614/61096)。 */
  Type: string;
  /** 触发器对应的参数，可见具体[触发器描述说明](https://cloud.tencent.com/document/product/583/39901) */
  TriggerDesc?: string;
  /** 函数的命名空间 */
  Namespace?: string;
  /** 触发器所生效的版本或别名，建议填写 [$DEFAULT](https://cloud.tencent.com/document/product/583/36149)方便后续进行版本的灰度发布，默认为 $LATEST。 */
  Qualifier?: string;
  /** 触发器的初始是能状态 OPEN表示开启 CLOSE表示关闭 */
  Enable?: string;
  /** 用户自定义参数，仅支持timer触发器 */
  CustomArgument?: string;
  /** 触发器描述 */
  Description?: string;
}

declare interface CreateTriggerResponse {
  /** 触发器信息 */
  TriggerInfo?: Trigger;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAliasRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 别名的名称 */
  Name: string;
  /** 函数所在的命名空间 */
  Namespace?: string;
}

declare interface DeleteAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomDomainRequest {
  /** 域名 */
  Domain?: string;
}

declare interface DeleteCustomDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFunctionRequest {
  /** 要删除的函数名称 */
  FunctionName: string;
  /** 函数所属命名空间 */
  Namespace?: string;
  /** 填写需要删除的版本号，不填默认删除函数下全部版本。 */
  Qualifier?: string;
}

declare interface DeleteFunctionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFunctionVersionRequest {
  /** 要删除的函数名称 */
  FunctionName: string;
  /** 填写需要删除的版本号 */
  Qualifier: string;
  /** 函数所属命名空间 */
  Namespace?: string;
  /** 强制删除标记，传true会直接删除容器，并强制关闭还在执行中的函数 */
  ForceDelete?: string;
}

declare interface DeleteFunctionVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLayerVersionRequest {
  /** 层名称 */
  LayerName: string;
  /** 版本号 */
  LayerVersion: number;
}

declare interface DeleteLayerVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNamespaceRequest {
  /** 命名空间名称 */
  Namespace: string;
}

declare interface DeleteNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProvisionedConcurrencyConfigRequest {
  /** 需要删除预置并发的函数的名称 */
  FunctionName: string;
  /** 函数的版本号 */
  Qualifier: string;
  /** 函数所属命名空间，默认为default */
  Namespace?: string;
}

declare interface DeleteProvisionedConcurrencyConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReservedConcurrencyConfigRequest {
  /** 需要删除最大独占配额的函数的名称 */
  FunctionName: string;
  /** 函数所属命名空间，默认为default */
  Namespace?: string;
}

declare interface DeleteReservedConcurrencyConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTriggerRequest {
  /** 函数的名称 */
  FunctionName: string;
  /** 要删除的触发器名称 */
  TriggerName: string;
  /** 要删除的触发器类型，目前只支持 timer、ckafka 、apigw 、cls 、cos 、cmq 、http 类型 */
  Type: string;
  /** 函数所属命名空间 */
  Namespace?: string;
  /** 如果删除的触发器类型为 COS 触发器，该字段为必填值，存放 JSON 格式的数据 {"event":"cos:ObjectCreated:*"}，数据内容和 SetTrigger 接口中该字段的格式相同；如果删除的触发器类型为定时触发器或 CMQ 触发器，可以不指定该字段 */
  TriggerDesc?: string;
  /** 要删除的触发器实际所指向的版本或别名，默认值为 $LATEST */
  Qualifier?: string;
}

declare interface DeleteTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAccountRequest {
}

declare interface GetAccountResponse {
  /** 命名空间已使用的信息 */
  AccountUsage?: UsageInfo;
  /** 命名空间限制的信息 */
  AccountLimit?: LimitsInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAliasRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 别名的名称 */
  Name: string;
  /** 函数所在的命名空间 */
  Namespace?: string;
}

declare interface GetAliasResponse {
  /** 别名指向的主版本 */
  FunctionVersion?: string;
  /** 别名的名称 */
  Name?: string;
  /** 别名的路由信息 */
  RoutingConfig?: RoutingConfig;
  /** 别名的描述 */
  Description?: string;
  /** 创建时间 */
  AddTime?: string;
  /** 更新时间 */
  ModTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAsyncEventStatusRequest {
  /** 异步执行请求 id */
  InvokeRequestId: string;
}

declare interface GetAsyncEventStatusResponse {
  /** 异步事件状态 */
  Result?: AsyncEventStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCustomDomainRequest {
  /** 域名 */
  Domain?: string;
}

declare interface GetCustomDomainResponse {
  /** 域名 */
  Domain?: string;
  /** 协议 */
  Protocol?: string;
  /** 路由配置 */
  EndpointsConfig?: EndpointsConf[];
  /** 证书配置信息 */
  CertConfig?: CertConf;
  /** web 应用防火墙配置 */
  WafConfig?: WafConf;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFunctionAddressRequest {
  /** 函数的名称 */
  FunctionName: string;
  /** 函数的版本 */
  Qualifier?: string;
  /** 函数的命名空间 */
  Namespace?: string;
}

declare interface GetFunctionAddressResponse {
  /** 函数的Cos地址 */
  Url?: string;
  /** 函数的SHA256编码 */
  CodeSha256?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFunctionEventInvokeConfigRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 函数所属命名空间，默认为default */
  Namespace?: string;
  /** 函数版本，默认为$LATEST */
  Qualifier?: string;
}

declare interface GetFunctionEventInvokeConfigResponse {
  /** 异步重试配置信息 */
  AsyncTriggerConfig: AsyncTriggerConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFunctionLogsRequest {
  /** 函数的名称。- 为保证[获取函数运行日志](https://cloud.tencent.com/document/product/583/18583)接口`GetFunctionLogs`兼容性，输入参数`FunctionName`仍为非必填项，但建议填写该参数，否则可能导致日志获取失败。- 函数关联日志服务后，建议使用[日志服务](https://cloud.tencent.com/document/product/614/16875)相关接口以获得最佳日志检索体验。 */
  FunctionName?: string;
  /** 数据的偏移量，Offset+Limit不能大于10000 */
  Offset?: number;
  /** 返回数据的长度，Offset+Limit不能大于10000 */
  Limit?: number;
  /** 以升序还是降序的方式对日志进行排序，可选值 desc和 asc */
  Order?: string;
  /** 根据某个字段排序日志,支持以下字段：function_name, duration, mem_usage, start_time */
  OrderBy?: string;
  /** 日志过滤条件。可用来区分正确和错误日志，filter.RetCode=not0 表示只返回错误日志，filter.RetCode=is0 表示只返回正确日志，不传，则返回所有日志 */
  Filter?: LogFilter;
  /** 函数的命名空间 */
  Namespace?: string;
  /** 函数的版本 */
  Qualifier?: string;
  /** 执行该函数对应的requestId */
  FunctionRequestId?: string;
  /** 查询的具体日期，例如：2017-05-16 20:00:00，只能与endtime相差一天之内 */
  StartTime?: string;
  /** 查询的具体日期，例如：2017-05-16 20:59:59，只能与startTime相差一天之内 */
  EndTime?: string;
  /** 该字段已下线 */
  SearchContext?: LogSearchContext;
}

declare interface GetFunctionLogsResponse {
  /** 函数日志的总数 */
  TotalCount?: number;
  /** 函数日志信息 */
  Data?: FunctionLog[];
  /** 该字段已下线 */
  SearchContext?: LogSearchContext;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFunctionRequest {
  /** 需要获取详情的函数名称，ResourceId和FunctionName只能传一个 */
  FunctionName?: string;
  /** 函数的版本号默认值: $LATEST */
  Qualifier?: string;
  /** 函数所属命名空间默认值: default */
  Namespace?: string;
  /** 是否显示代码, TRUE表示显示代码，FALSE表示不显示代码,大于1M的入口文件不会显示 */
  ShowCode?: string;
}

declare interface GetFunctionResponse {
  /** 函数的最后修改时间 */
  ModTime?: string;
  /** 函数的代码 */
  CodeInfo?: string;
  /** 函数的描述信息 */
  Description?: string;
  /** 函数的触发器列表 */
  Triggers?: Trigger[];
  /** 函数的入口 */
  Handler?: string;
  /** 函数代码大小 */
  CodeSize?: number;
  /** 函数的超时时间 */
  Timeout?: number;
  /** 函数的版本 */
  FunctionVersion?: string;
  /** 函数的最大可用内存 */
  MemorySize?: number;
  /** 函数的运行环境 */
  Runtime?: string | null;
  /** 函数的名称 */
  FunctionName?: string;
  /** 函数的私有网络 */
  VpcConfig?: VpcConfig;
  /** 是否使用GPU */
  UseGpu?: string;
  /** 函数的环境变量 */
  Environment?: Environment;
  /** 代码是否正确 */
  CodeResult?: string;
  /** 代码错误信息 */
  CodeError?: string;
  /** 代码错误码 */
  ErrNo?: number;
  /** 函数的命名空间 */
  Namespace?: string;
  /** 函数绑定的角色 */
  Role?: string;
  /** 是否自动安装依赖 */
  InstallDependency?: string;
  /** 函数状态，状态值及流转[参考说明](https://cloud.tencent.com/document/product/583/47175) */
  Status?: string;
  /** 状态描述 */
  StatusDesc?: string;
  /** 日志投递到的Cls日志集 */
  ClsLogsetId?: string;
  /** 日志投递到的Cls Topic */
  ClsTopicId?: string;
  /** 函数ID */
  FunctionId?: string;
  /** 函数的标签列表 */
  Tags?: Tag[];
  /** EipConfig配置 */
  EipConfig?: EipOutConfig;
  /** 域名信息 */
  AccessInfo?: AccessInfo;
  /** 函数类型，取值为HTTP或者Event */
  Type?: string;
  /** 是否启用L5 */
  L5Enable?: string;
  /** 函数关联的Layer版本信息 */
  Layers?: LayerVersionInfo[];
  /** 函数关联的死信队列信息 */
  DeadLetterConfig?: DeadLetterConfig;
  /** 函数创建回见 */
  AddTime?: string;
  /** 公网访问配置 */
  PublicNetConfig?: PublicNetConfigOut | null;
  /** 是否启用Ons */
  OnsEnable?: string | null;
  /** 文件系统配置参数，用于云函数挂载文件系统 */
  CfsConfig?: CfsConfig;
  /** 函数的计费状态，状态值[参考此处](https://cloud.tencent.com/document/product/583/47175) */
  AvailableStatus?: string;
  /** 函数版本 */
  Qualifier?: string;
  /** 函数初始化超时时间 */
  InitTimeout?: number;
  /** 函数状态失败原因 */
  StatusReasons?: StatusReason[];
  /** 是否开启异步属性 */
  AsyncRunEnable?: string;
  /** 是否开启事件追踪 */
  TraceEnable?: string;
  /** 镜像配置 */
  ImageConfig?: ImageConfig | null;
  /** HTTP函数支持的访问协议。当前支持WebSockets协议。 */
  ProtocolType?: string | null;
  /** HTTP函数配置ProtocolType访问协议，当前协议配置的参数 */
  ProtocolParams?: ProtocolParams | null;
  /** 是否开启DNS缓存 */
  DnsCache?: string;
  /** 内网访问配置 */
  IntranetConfig?: IntranetConfigOut | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLayerVersionRequest {
  /** 层名称 */
  LayerName: string;
  /** 版本号 */
  LayerVersion: number;
}

declare interface GetLayerVersionResponse {
  /** 适配的运行时 */
  CompatibleRuntimes?: string[];
  /** 层中版本文件的SHA256编码 */
  CodeSha256?: string;
  /** 层中版本文件的下载地址 */
  Location?: string;
  /** 版本的创建时间 */
  AddTime?: string;
  /** 版本的描述信息 */
  Description?: string;
  /** 许可证信息 */
  LicenseInfo?: string;
  /** 版本号 */
  LayerVersion?: number;
  /** 层名称 */
  LayerName?: string;
  /** 层的具体版本当前状态，状态值[参考此处](https://cloud.tencent.com/document/product/583/47175) */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetProvisionedConcurrencyConfigRequest {
  /** 需要获取预置并发详情的函数名称。 */
  FunctionName: string;
  /** 函数所在的命名空间，默认为default。 */
  Namespace?: string;
  /** 函数版本号，不传则返回函数所有版本的预置并发信息。 */
  Qualifier?: string;
}

declare interface GetProvisionedConcurrencyConfigResponse {
  /** 该函数剩余可配置的预置并发数。 */
  UnallocatedConcurrencyNum?: number;
  /** 函数已预置的并发配置详情。 */
  Allocated?: VersionProvisionedConcurrencyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRequestStatusRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 需要查询状态的请求 id */
  FunctionRequestId: string;
  /** 函数的所在的命名空间 */
  Namespace?: string;
  /** 查询的开始时间，例如：2017-05-16 20:00:00，不填默认为当前时间 - 15min */
  StartTime?: string;
  /** 查询的结束时间，例如：2017-05-16 20:59:59。StartTime 为空时，EndTime 默认为当前时间；StartTime 有值时，需要同时传 EndTime。EndTime 需要晚于 StartTime。 */
  EndTime?: string;
}

declare interface GetRequestStatusResponse {
  /** 函数运行状态的总数 */
  TotalCount?: number | null;
  /** 函数运行状态数组 */
  Data?: RequestStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetReservedConcurrencyConfigRequest {
  /** 需要获取最大独占配额详情的函数名称。 */
  FunctionName: string;
  /** 函数所在的命名空间，默认为default。 */
  Namespace?: string;
}

declare interface GetReservedConcurrencyConfigResponse {
  /** 该函数的最大独占配额。 */
  ReservedMem?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeFunctionRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 触发函数的版本号或别名，默认值为$DEFAULT */
  Qualifier?: string;
  /** 运行函数时的参数，以json格式传入，最大支持的参数长度是 6MB。该字段信息对应函数 [event 入参](https://cloud.tencent.com/document/product/583/9210)。 */
  Event?: string;
  /** 返回值会包含4KB的日志，可选值为None和Tail，默认值为None。当该值为Tail时，返回参数中的Log字段会包含对应的函数执行日志 */
  LogType?: string;
  /** 命名空间，不填默认为 default */
  Namespace?: string;
  /** 函数灰度流量控制调用，以json格式传入，例如{"k":"v"}，注意kv都需要是字符串类型，最大支持的参数长度是1024字节 */
  RoutingKey?: string;
}

declare interface InvokeFunctionResponse {
  /** 函数执行结果 */
  Result?: Result;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 同步调用请使用[同步 Invoke 调用接口](https://cloud.tencent.com/document/product/583/58400) 或填写同步调用参数 RequestResponse ，建议使用同步调用接口以获取最佳性能；异步调用填写 Event；默认为同步。接口超时时间为 300s，更长超时时间请使用异步调用。 */
  InvocationType?: string;
  /** 触发函数的版本号或别名，默认值为 $LATEST */
  Qualifier?: string;
  /** 运行函数时的参数，以json格式传入，同步调用最大支持 6MB，异步调用最大支持 128 KB。该字段信息对应函数 [event 入参](https://cloud.tencent.com/document/product/583/9210)。 */
  ClientContext?: string;
  /** 异步调用该字段返回为空。 */
  LogType?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 函数灰度流量控制调用，以json格式传入，例如{"k":"v"}，注意kv都需要是字符串类型，最大支持的参数长度是1024字节 */
  RoutingKey?: string;
}

declare interface InvokeResponse {
  /** 函数执行结果 */
  Result?: Result;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAliasesRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 函数所在的命名空间 */
  Namespace?: string;
  /** 如果提供此参数，则只返回与该函数版本有关联的别名 */
  FunctionVersion?: string;
  /** 数据偏移量，默认值为 0 */
  Offset?: string;
  /** 返回数据长度，默认值为 20 */
  Limit?: string;
}

declare interface ListAliasesResponse {
  /** 别名列表 */
  Aliases?: Alias[];
  /** 别名总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAsyncEventsRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 命名空间 */
  Namespace?: string;
  /** 过滤条件，函数版本 */
  Qualifier?: string;
  /** 过滤条件，调用类型列表 */
  InvokeType?: string[];
  /** 过滤条件，事件状态列表 */
  Status?: string[];
  /** 过滤条件，开始执行时间左闭右开区间 */
  StartTimeInterval?: TimeInterval;
  /** 过滤条件，结束执行时间左闭右开区间 */
  EndTimeInterval?: TimeInterval;
  /** 可选值 ASC 和 DESC，默认 DESC */
  Order?: string;
  /** 可选值 StartTime 和 EndTime，默认值 StartTime */
  Orderby?: string;
  /** 数据偏移量，默认值为 0 */
  Offset?: number;
  /** 返回数据长度，默认值为 20，最大值 100 */
  Limit?: number;
  /** 过滤条件，事件调用请求id */
  InvokeRequestId?: string;
}

declare interface ListAsyncEventsResponse {
  /** 满足过滤条件的事件总数 */
  TotalCount: number;
  /** 异步事件列表 */
  EventList: AsyncEvent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListCustomDomainsRequest {
  /** 偏移量，默认0 */
  Offset?: number;
  /** 容量，默认20 */
  Limit?: number;
  /** 取值范围：AddTime，ModTime， 默认AddTime */
  OrderBy?: string;
  /** 取值范围：DESC, ASC 默认DESC */
  Order?: string;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface ListCustomDomainsResponse {
  /** 总数 */
  Total?: number;
  /** 域名列表信息 */
  Domains?: DomainInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListFunctionsRequest {
  /** 以升序还是降序的方式返回结果，可选值 ASC 和 DESC */
  Order?: string;
  /** 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime, FunctionName */
  Orderby?: string;
  /** 数据偏移量，默认值为 0 */
  Offset?: number;
  /** 返回数据长度，默认值为 20 */
  Limit?: number;
  /** 支持FunctionName模糊匹配 */
  SearchKey?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 函数描述，支持模糊搜索 */
  Description?: string;
  /** `过滤特定属性或者有特定标签的函数。`- 传值方式key-value 进行传值 例如："Filters": [{ "Name": "Status", "Values": ["CreateFailed","Creating"]}, {"Name": "Type","Values": ["HTTP"]}]上述条件的函数是，函数状态为创建失败或者创建中，且函数类型为 HTTP 函数`如果通过标签进行过滤：`- tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。示例值："Filters": [{"Name":"tag-dmtest","Values":["dmtest"]}]`入参限制：`1.每次请求的Filters的上限为10，Filter.Values的上限为5。2.[VpcId', 'SubnetId', 'ClsTopicId', 'ClsLogsetId', 'Role', 'CfsId', 'CfsMountInsId', 'Eip'] 过滤的Name 为这些属性时， values 只能传一个值3.['Status', 'Runtime', 'Type', 'PublicNetStatus', 'AsyncRunEnable', 'TraceEnable', 'Stamp'] 过滤的Name 为这些属性时 ，values 可以传多个值 */
  Filters?: Filter[];
}

declare interface ListFunctionsResponse {
  /** 函数列表 */
  Functions?: Function[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListLayerVersionsRequest {
  /** 层名称 */
  LayerName: string;
  /** 适配的运行时 */
  CompatibleRuntime?: string[];
}

declare interface ListLayerVersionsResponse {
  /** 层版本列表 */
  LayerVersions?: LayerVersionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListLayersRequest {
  /** 适配的运行时 */
  CompatibleRuntime?: string;
  /** 偏移位置 */
  Offset?: number;
  /** 查询数目限制 */
  Limit?: number;
  /** 查询key，模糊匹配名称 */
  SearchKey?: string;
}

declare interface ListLayersResponse {
  /** 层列表 */
  Layers?: LayerVersionInfo[];
  /** 层总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListNamespacesRequest {
  /** 返回数据长度，默认值为 20 */
  Limit?: number;
  /** 数据的偏移量，默认值为 0 */
  Offset?: number;
  /** 根据哪个字段进行返回结果排序,支持以下字段：Name,Updatetime */
  Orderby?: string;
  /** 以升序还是降序的方式返回结果，可选值 ASC 和 DESC */
  Order?: string;
  /** 关键字匹配搜索，Key 可选值为 Namespace 和 Description，多个搜索条件之间是与的关系 */
  SearchKey?: SearchKey[];
}

declare interface ListNamespacesResponse {
  /** namespace详情 */
  Namespaces?: Namespace[];
  /** 返回的namespace数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTriggersRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 命名空间，默认是default */
  Namespace?: string;
  /** 数据偏移量，默认值为 0 */
  Offset?: number;
  /** 返回数据长度，默认值为 20 */
  Limit?: number;
  /** 根据哪个字段进行返回结果排序,支持以下字段：add_time，mod_time，默认mod_time */
  OrderBy?: string;
  /** 以升序还是降序的方式返回结果，可选值 ASC 和 DESC，默认DESC */
  Order?: string;
  /** * Qualifier: 函数版本，别名* TriggerName: 函数触发器名称* Description: 函数触发器描述 */
  Filters?: Filter[];
}

declare interface ListTriggersResponse {
  /** 触发器总数 */
  TotalCount?: number;
  /** 触发器列表 */
  Triggers?: TriggerInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListVersionByFunctionRequest {
  /** 函数名 */
  FunctionName: string;
  /** 函数所在命名空间 */
  Namespace?: string;
  /** 数据偏移量，默认值为 0 */
  Offset?: number;
  /** 返回数据长度，默认值为 20 */
  Limit?: number;
  /** 以升序还是降序的方式返回结果，可选值 ASC 和 DESC */
  Order?: string;
  /** 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime */
  OrderBy?: string;
}

declare interface ListVersionByFunctionResponse {
  /** 函数版本。 */
  FunctionVersion?: string[];
  /** 函数版本列表。 */
  Versions?: FunctionVersion[];
  /** 函数版本总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishLayerVersionRequest {
  /** 层名称，支持26个英文字母大小写、数字、连接符和下划线，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度1-64 */
  LayerName: string;
  /** 层适用的运行时，可多选，可选的值对应函数的 Runtime 可选值。 */
  CompatibleRuntimes: string[];
  /** 层的文件来源或文件内容 */
  Content: Code;
  /** 层的版本的描述 */
  Description?: string;
  /** 层的软件许可证 */
  LicenseInfo?: string;
  /** 层Tag 参数，以键值对数组形式传入 */
  Tags?: Tag[];
}

declare interface PublishLayerVersionResponse {
  /** 本次创建的层的版本号 */
  LayerVersion?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishVersionRequest {
  /** 发布函数的名称 */
  FunctionName: string;
  /** 函数的描述 */
  Description?: string;
  /** 函数的命名空间 */
  Namespace?: string;
}

declare interface PublishVersionResponse {
  /** 函数的版本 */
  FunctionVersion?: string;
  /** 代码大小 */
  CodeSize?: number;
  /** 最大可用内存 */
  MemorySize?: number;
  /** 函数的描述 */
  Description?: string;
  /** 函数的入口 */
  Handler?: string;
  /** 函数的超时时间 */
  Timeout?: number;
  /** 函数的运行环境 */
  Runtime?: string | null;
  /** 函数的命名空间 */
  Namespace?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PutProvisionedConcurrencyConfigRequest {
  /** 需要设置预置并发的函数的名称 */
  FunctionName: string;
  /** 函数的版本号，注：$LATEST版本不支持预置并发 */
  Qualifier: string;
  /** 预置并发数量，注：所有版本的预置并发数总和存在上限限制，当前的上限是：函数最大并发配额 - 100 */
  VersionProvisionedConcurrencyNum: number;
  /** 函数所属命名空间，默认为default */
  Namespace?: string;
  /** 定时预置任务 */
  TriggerActions?: TriggerAction[];
  /** 预置类型，静态预置：Default动态追踪并发利用率指标预置：ConcurrencyUtilizationTracking预置类型二选一，设置静态预置时可以设置VersionProvisionedConcurrencyNum。动态利用率预置可以设置TrackingTarget，MinCapacity，MaxCapacity，保持向后兼容性此时VersionProvisionedConcurrencyNum设置为0. */
  ProvisionedType?: string;
  /** 指标追踪的并发利用率。设置范围(0,1) */
  TrackingTarget?: number;
  /** 缩容时的最小值, 最小值为1 */
  MinCapacity?: number;
  /** 扩容时的最大值 */
  MaxCapacity?: number;
}

declare interface PutProvisionedConcurrencyConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PutReservedConcurrencyConfigRequest {
  /** 需要设置最大独占配额的函数的名称 */
  FunctionName: string;
  /** 函数最大独占配额，注：函数的最大独占配额内存总和上限：用户总并发内存配额 - 12800 */
  ReservedConcurrencyMem: number;
  /** 函数所属命名空间，默认为default */
  Namespace?: string;
}

declare interface PutReservedConcurrencyConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PutTotalConcurrencyConfigRequest {
  /** 账号并发内存配额，注：账号并发内存配额下限：用户已用并发内存总额 + 12800 */
  TotalConcurrencyMem: number;
  /** 命名空间，默认为default */
  Namespace?: string;
}

declare interface PutTotalConcurrencyConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateAsyncEventRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 终止的调用请求id */
  InvokeRequestId: string;
  /** 命名空间 */
  Namespace?: string;
  /** true，向指定请求[发送 SIGTERM 终止信号](https://cloud.tencent.com/document/product/583/63969 */
  GraceShutdown?: boolean;
}

declare interface TerminateAsyncEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAliasRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 别名的名称 */
  Name: string;
  /** 别名指向的主版本 */
  FunctionVersion: string;
  /** 函数所在的命名空间 */
  Namespace?: string;
  /** 别名的路由信息，需要为别名指定附加版本时，必须提供此参数； 附加版本指的是：除主版本 FunctionVersion 外，为此别名再指定一个函数可正常使用的版本； 这里附加版本中的 Version 值 不能是别名指向的主版本； 要注意的是：如果想要某个版本的流量全部指向这个别名，不需配置此参数； 目前一个别名最多只能指定一个附加版本 */
  RoutingConfig?: RoutingConfig;
  /** 别名的描述 */
  Description?: string;
}

declare interface UpdateAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCustomDomainRequest {
  /** 自定义域名 */
  Domain: string;
  /** 协议，取值范围：HTTP, HTTPS, HTTP&HTTPS */
  Protocol?: string;
  /** 证书配置信息，HTTPS协议必穿 */
  CertConfig?: CertConf;
  /** web 应用防火墙配置 */
  WafConfig?: WafConf;
  /** 路由配置 */
  EndpointsConfig?: EndpointsConf[];
}

declare interface UpdateCustomDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFunctionCodeRequest {
  /** 要修改的函数名称 */
  FunctionName: string;
  /** 函数处理方法名称。名称格式支持“文件名称.函数名称”形式（java 名称格式 包名.类名::方法名），文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求 2-60 个字符 */
  Handler?: string;
  /** 对象存储桶名称 */
  CosBucketName?: string;
  /** 对象存储对象路径 */
  CosObjectName?: string;
  /** 包含函数代码文件及其依赖项的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M */
  ZipFile?: string;
  /** 函数所属命名空间 */
  Namespace?: string;
  /** 对象存储的地域，注：北京分为ap-beijing和ap-beijing-1 */
  CosBucketRegion?: string;
  /** 是否自动安装依赖 */
  InstallDependency?: string;
  /** 函数所属环境 */
  EnvId?: string;
  /** 在更新时是否同步发布新版本，默认为：FALSE，不发布 */
  Publish?: string;
  /** 函数代码 */
  Code?: Code;
  /** 代码来源方式，支持 ZipFile, Cos, Inline 之一 */
  CodeSource?: string;
}

declare interface UpdateFunctionCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFunctionConfigurationRequest {
  /** 要修改的函数名称 */
  FunctionName: string;
  /** 函数描述。最大支持 1000 个英文字母、数字、空格、逗号和英文句号，支持中文 */
  Description?: string;
  /** 函数运行时内存大小，默认为 128 M，可选范64M、128 M-3072 M，以 128MB 为阶梯。 */
  MemorySize?: number;
  /** 函数最长执行时间，单位为秒，可选值范 1-900 秒，默认为 3 秒 */
  Timeout?: number;
  /** 函数运行环境，创建时指定，目前不支持修改。 */
  Runtime?: string;
  /** 函数的环境变量 */
  Environment?: Environment;
  /** 函数所属命名空间默认值: default */
  Namespace?: string;
  /** 函数的私有网络配置 */
  VpcConfig?: VpcConfig;
  /** 函数绑定的角色 */
  Role?: string;
  /** [在线依赖安装](https://cloud.tencent.com/document/product/583/37920)，TRUE 表示安装，默认值为 FALSE。仅支持 Node.js 函数。 */
  InstallDependency?: string;
  /** 日志投递到的cls日志集ID */
  ClsLogsetId?: string;
  /** 日志投递到的cls Topic ID */
  ClsTopicId?: string;
  /** 在更新时是否同步发布新版本，默认为：FALSE，不发布新版本 */
  Publish?: string;
  /** 是否开启L5访问能力，TRUE 为开启，FALSE为关闭 */
  L5Enable?: string;
  /** 函数要关联的层版本列表，层的版本会按照在列表中顺序依次覆盖。 */
  Layers?: LayerVersionSimple[];
  /** 函数关联的死信队列信息 */
  DeadLetterConfig?: DeadLetterConfig;
  /** 公网访问配置 */
  PublicNetConfig?: PublicNetConfigIn;
  /** 文件系统配置入参，用于云函数绑定CFS文件系统 */
  CfsConfig?: CfsConfig;
  /** 函数初始化执行超时时间 */
  InitTimeout?: number;
  /** HTTP函数配置ProtocolType访问协议，当前协议可配置的参数 */
  ProtocolParams?: ProtocolParams;
  /** 单实例多并发配置。只支持Web函数。 */
  InstanceConcurrencyConfig?: InstanceConcurrencyConfig;
  /** 是否开启Dns缓存能力。只支持EVENT函数。默认为FALSE，TRUE 为开启，FALSE为关闭 */
  DnsCache?: string;
  /** 内网访问配置 */
  IntranetConfig?: IntranetConfigIn;
  /** 忽略系统日志上报 */
  IgnoreSysLog?: boolean;
}

declare interface UpdateFunctionConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFunctionEventInvokeConfigRequest {
  /** 异步重试配置信息 */
  AsyncTriggerConfig: AsyncTriggerConfig;
  /** 函数名称 */
  FunctionName: string;
  /** 函数所属命名空间，默认为default */
  Namespace?: string;
}

declare interface UpdateFunctionEventInvokeConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateNamespaceRequest {
  /** 命名空间名称 */
  Namespace: string;
  /** 命名空间描述 */
  Description: string;
}

declare interface UpdateNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTriggerRequest {
  /** 函数名称 */
  FunctionName: string;
  /** 触发器名称 */
  TriggerName: string;
  /** 触发器类型，目前只支持timer、ckafka、http三种类型 */
  Type: string;
  /** 触发器开启或关闭，传参为OPEN为开启，CLOSE为关闭 */
  Enable?: string;
  /** 触发器创建时所指向的函数版本或别名，默认为 $LATEST */
  Qualifier?: string;
  /** 函数的命名空间，默认值为default */
  Namespace?: string;
  /** TriggerDesc参数 */
  TriggerDesc?: string;
  /** 触发器描述 */
  Description?: string;
  /** 用户附加信息 */
  CustomArgument?: string;
}

declare interface UpdateTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTriggerStatusRequest {
  /** 触发器的初始是能状态OPEN表示开启 CLOSE表示关闭 */
  Enable: string;
  /** 函数名称 */
  FunctionName: string;
  /** 触发器名称 */
  TriggerName: string;
  /** 触发器类型，触发器类型，目前只支持 timer、 cos 、 ckafka三种类型 */
  Type: string;
  /** 触发器在创建时所指向的触发别名或版本，默认值为$LATEST */
  Qualifier?: string;
  /** 函数所在的命名空间，默认值为default */
  Namespace?: string;
  /** 如果更新的触发器类型为 COS 触发器，该字段为必填值，存放 JSON 格式的数据 {"event":"cos:ObjectCreated:*"}，数据内容和 SetTrigger 接口中该字段的格式相同；如果更新的触发器类型为定时触发器或 CMQ 触发器，可以不指定该字段 */
  TriggerDesc?: string;
}

declare interface UpdateTriggerStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Scf 云函数} */
declare interface Scf {
  (): Versions;
  /** 复制函数 {@link CopyFunctionRequest} {@link CopyFunctionResponse} */
  CopyFunction(data: CopyFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CopyFunctionResponse>;
  /** 创建函数版本别名 {@link CreateAliasRequest} {@link CreateAliasResponse} */
  CreateAlias(data: CreateAliasRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAliasResponse>;
  /** 创建云函数自定义域名 {@link CreateCustomDomainRequest} {@link CreateCustomDomainResponse} */
  CreateCustomDomain(data: CreateCustomDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomDomainResponse>;
  /** 创建函数 {@link CreateFunctionRequest} {@link CreateFunctionResponse} */
  CreateFunction(data: CreateFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFunctionResponse>;
  /** 创建命名空间 {@link CreateNamespaceRequest} {@link CreateNamespaceResponse} */
  CreateNamespace(data: CreateNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNamespaceResponse>;
  /** 设置函数触发方式 {@link CreateTriggerRequest} {@link CreateTriggerResponse} */
  CreateTrigger(data: CreateTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTriggerResponse>;
  /** 删除别名 {@link DeleteAliasRequest} {@link DeleteAliasResponse} */
  DeleteAlias(data: DeleteAliasRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAliasResponse>;
  /** 删除云函数自定义域名 {@link DeleteCustomDomainRequest} {@link DeleteCustomDomainResponse} */
  DeleteCustomDomain(data?: DeleteCustomDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomDomainResponse>;
  /** 删除函数 {@link DeleteFunctionRequest} {@link DeleteFunctionResponse} */
  DeleteFunction(data: DeleteFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFunctionResponse>;
  /** 删除函数指定版本 {@link DeleteFunctionVersionRequest} {@link DeleteFunctionVersionResponse} */
  DeleteFunctionVersion(data: DeleteFunctionVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFunctionVersionResponse>;
  /** 删除层版本 {@link DeleteLayerVersionRequest} {@link DeleteLayerVersionResponse} */
  DeleteLayerVersion(data: DeleteLayerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLayerVersionResponse>;
  /** 删除命名空间 {@link DeleteNamespaceRequest} {@link DeleteNamespaceResponse} */
  DeleteNamespace(data: DeleteNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNamespaceResponse>;
  /** 删除预置并发 {@link DeleteProvisionedConcurrencyConfigRequest} {@link DeleteProvisionedConcurrencyConfigResponse} */
  DeleteProvisionedConcurrencyConfig(data: DeleteProvisionedConcurrencyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProvisionedConcurrencyConfigResponse>;
  /** 删除函数最大独占配额 {@link DeleteReservedConcurrencyConfigRequest} {@link DeleteReservedConcurrencyConfigResponse} */
  DeleteReservedConcurrencyConfig(data: DeleteReservedConcurrencyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReservedConcurrencyConfigResponse>;
  /** 删除触发器 {@link DeleteTriggerRequest} {@link DeleteTriggerResponse} */
  DeleteTrigger(data: DeleteTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTriggerResponse>;
  /** 获取账户信息 {@link GetAccountRequest} {@link GetAccountResponse} */
  GetAccount(data?: GetAccountRequest, config?: AxiosRequestConfig): AxiosPromise<GetAccountResponse>;
  /** 获取别名详细信息 {@link GetAliasRequest} {@link GetAliasResponse} */
  GetAlias(data: GetAliasRequest, config?: AxiosRequestConfig): AxiosPromise<GetAliasResponse>;
  /** 获取函数异步事件状态 {@link GetAsyncEventStatusRequest} {@link GetAsyncEventStatusResponse} */
  GetAsyncEventStatus(data: GetAsyncEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetAsyncEventStatusResponse>;
  /** 查看云函数自定义域名详情 {@link GetCustomDomainRequest} {@link GetCustomDomainResponse} */
  GetCustomDomain(data?: GetCustomDomainRequest, config?: AxiosRequestConfig): AxiosPromise<GetCustomDomainResponse>;
  /** 获取函数详细信息 {@link GetFunctionRequest} {@link GetFunctionResponse} */
  GetFunction(data?: GetFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<GetFunctionResponse>;
  /** 获取函数代码下载地址 {@link GetFunctionAddressRequest} {@link GetFunctionAddressResponse} */
  GetFunctionAddress(data: GetFunctionAddressRequest, config?: AxiosRequestConfig): AxiosPromise<GetFunctionAddressResponse>;
  /** 获取函数异步重试配置 {@link GetFunctionEventInvokeConfigRequest} {@link GetFunctionEventInvokeConfigResponse} */
  GetFunctionEventInvokeConfig(data: GetFunctionEventInvokeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<GetFunctionEventInvokeConfigResponse>;
  /** 获取函数运行日志 {@link GetFunctionLogsRequest} {@link GetFunctionLogsResponse} */
  GetFunctionLogs(data?: GetFunctionLogsRequest, config?: AxiosRequestConfig): AxiosPromise<GetFunctionLogsResponse>;
  /** 获取层版本详细信息 {@link GetLayerVersionRequest} {@link GetLayerVersionResponse} */
  GetLayerVersion(data: GetLayerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<GetLayerVersionResponse>;
  /** 获取函数预置并发详情 {@link GetProvisionedConcurrencyConfigRequest} {@link GetProvisionedConcurrencyConfigResponse} */
  GetProvisionedConcurrencyConfig(data: GetProvisionedConcurrencyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<GetProvisionedConcurrencyConfigResponse>;
  /** 获取函数单个请求运行状态 {@link GetRequestStatusRequest} {@link GetRequestStatusResponse} */
  GetRequestStatus(data: GetRequestStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetRequestStatusResponse>;
  /** 获取函数最大独占配额详情 {@link GetReservedConcurrencyConfigRequest} {@link GetReservedConcurrencyConfigResponse} */
  GetReservedConcurrencyConfig(data: GetReservedConcurrencyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<GetReservedConcurrencyConfigResponse>;
  /** 运行函数 {@link InvokeRequest} {@link InvokeResponse} */
  Invoke(data: InvokeRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeResponse>;
  /** 同步Invoke调用接口 {@link InvokeFunctionRequest} {@link InvokeFunctionResponse} */
  InvokeFunction(data: InvokeFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeFunctionResponse>;
  /** 获取别名列表 {@link ListAliasesRequest} {@link ListAliasesResponse} */
  ListAliases(data: ListAliasesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAliasesResponse>;
  /** 拉取函数异步事件列表 {@link ListAsyncEventsRequest} {@link ListAsyncEventsResponse} */
  ListAsyncEvents(data: ListAsyncEventsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAsyncEventsResponse>;
  /** 获取云函数自定义域名列表 {@link ListCustomDomainsRequest} {@link ListCustomDomainsResponse} */
  ListCustomDomains(data?: ListCustomDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<ListCustomDomainsResponse>;
  /** 获取函数列表 {@link ListFunctionsRequest} {@link ListFunctionsResponse} */
  ListFunctions(data?: ListFunctionsRequest, config?: AxiosRequestConfig): AxiosPromise<ListFunctionsResponse>;
  /** 获取层版本列表 {@link ListLayerVersionsRequest} {@link ListLayerVersionsResponse} */
  ListLayerVersions(data: ListLayerVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<ListLayerVersionsResponse>;
  /** 返回层列表 {@link ListLayersRequest} {@link ListLayersResponse} */
  ListLayers(data?: ListLayersRequest, config?: AxiosRequestConfig): AxiosPromise<ListLayersResponse>;
  /** 列出命名空间列表 {@link ListNamespacesRequest} {@link ListNamespacesResponse} */
  ListNamespaces(data?: ListNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<ListNamespacesResponse>;
  /** 获取函数触发器列表 {@link ListTriggersRequest} {@link ListTriggersResponse} */
  ListTriggers(data: ListTriggersRequest, config?: AxiosRequestConfig): AxiosPromise<ListTriggersResponse>;
  /** 查询函数版本 {@link ListVersionByFunctionRequest} {@link ListVersionByFunctionResponse} */
  ListVersionByFunction(data: ListVersionByFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<ListVersionByFunctionResponse>;
  /** 发布层版本 {@link PublishLayerVersionRequest} {@link PublishLayerVersionResponse} */
  PublishLayerVersion(data: PublishLayerVersionRequest, config?: AxiosRequestConfig): AxiosPromise<PublishLayerVersionResponse>;
  /** 发布新版本 {@link PublishVersionRequest} {@link PublishVersionResponse} */
  PublishVersion(data: PublishVersionRequest, config?: AxiosRequestConfig): AxiosPromise<PublishVersionResponse>;
  /** 设置预置并发 {@link PutProvisionedConcurrencyConfigRequest} {@link PutProvisionedConcurrencyConfigResponse} */
  PutProvisionedConcurrencyConfig(data: PutProvisionedConcurrencyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<PutProvisionedConcurrencyConfigResponse>;
  /** 设置最大独占配额 {@link PutReservedConcurrencyConfigRequest} {@link PutReservedConcurrencyConfigResponse} */
  PutReservedConcurrencyConfig(data: PutReservedConcurrencyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<PutReservedConcurrencyConfigResponse>;
  /** 修改账号并发限制配额 {@link PutTotalConcurrencyConfigRequest} {@link PutTotalConcurrencyConfigResponse} */
  PutTotalConcurrencyConfig(data: PutTotalConcurrencyConfigRequest, config?: AxiosRequestConfig): AxiosPromise<PutTotalConcurrencyConfigResponse>;
  /** 终止函数异步事件 {@link TerminateAsyncEventRequest} {@link TerminateAsyncEventResponse} */
  TerminateAsyncEvent(data: TerminateAsyncEventRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateAsyncEventResponse>;
  /** 更新别名的配置 {@link UpdateAliasRequest} {@link UpdateAliasResponse} */
  UpdateAlias(data: UpdateAliasRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAliasResponse>;
  /** 更新云函数自定义域名 {@link UpdateCustomDomainRequest} {@link UpdateCustomDomainResponse} */
  UpdateCustomDomain(data: UpdateCustomDomainRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCustomDomainResponse>;
  /** 更新函数代码 {@link UpdateFunctionCodeRequest} {@link UpdateFunctionCodeResponse} */
  UpdateFunctionCode(data: UpdateFunctionCodeRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFunctionCodeResponse>;
  /** 更新函数配置 {@link UpdateFunctionConfigurationRequest} {@link UpdateFunctionConfigurationResponse} */
  UpdateFunctionConfiguration(data: UpdateFunctionConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFunctionConfigurationResponse>;
  /** 更新函数异步重试配置 {@link UpdateFunctionEventInvokeConfigRequest} {@link UpdateFunctionEventInvokeConfigResponse} */
  UpdateFunctionEventInvokeConfig(data: UpdateFunctionEventInvokeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFunctionEventInvokeConfigResponse>;
  /** 更新命名空间 {@link UpdateNamespaceRequest} {@link UpdateNamespaceResponse} */
  UpdateNamespace(data: UpdateNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateNamespaceResponse>;
  /** 更新触发器 {@link UpdateTriggerRequest} {@link UpdateTriggerResponse} */
  UpdateTrigger(data: UpdateTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTriggerResponse>;
  /** 更新触发器状态 {@link UpdateTriggerStatusRequest} {@link UpdateTriggerStatusResponse} */
  UpdateTriggerStatus(data: UpdateTriggerStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTriggerStatusResponse>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  BatchCreateTrigger(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  CreateFunctionTestModel(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  DeleteFunctionTestModel(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  GetFunctionTestModel(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  ListFunctionTestModels(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateFunctionIncrementalCode(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.4](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  UpdateFunctionTestModel(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
}

export declare type Versions = ["2018-04-16"];

export default Scf;
