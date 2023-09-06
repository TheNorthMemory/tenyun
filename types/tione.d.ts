/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 接口描述信息 */
declare interface APIConfigDetail {
  /** 接口id */
  Id: string | null;
  /** 接口所属服务组id */
  ServiceGroupId: string | null;
  /** 接口描述 */
  Description: string | null;
  /** 相对路径 */
  RelativeUrl: string | null;
  /** 服务类型 HTTP HTTPS */
  ServiceType: string | null;
  /** GET POST */
  HttpMethod: string | null;
  /** 请求示例 */
  HttpInputExample: string | null;
  /** 回包示例 */
  HttpOutputExample: string | null;
  /** 更新成员 */
  UpdatedBy: string | null;
  /** 更新时间 */
  UpdatedAt: string | null;
  /** 主账号uin */
  Uin: string | null;
  /** 子账号subuin */
  SubUin: string | null;
}

/** 批量模型加速任务 */
declare interface BatchModelAccTask {
  /** 模型ID */
  ModelId: string;
  /** 模型版本 */
  ModelVersion: string;
  /** 模型来源(JOB/COS) */
  ModelSource: string;
  /** 模型格式(TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/MMDETECTION/ONNX/HUGGING_FACE) */
  ModelFormat: string;
  /** 模型Tensor信息 */
  TensorInfos: string[];
  /** 加速引擎版本 */
  AccEngineVersion: string;
  /** 模型输入cos路径 */
  ModelInputPath: CosPathInfo;
  /** 模型名称 */
  ModelName?: string;
  /** SavedModel保存时配置的签名 */
  ModelSignature?: string;
  /** 加速引擎对应的框架版本 */
  FrameworkVersion?: string | null;
}

/** 跑批任务详情 */
declare interface BatchTaskDetail {
  /** 跑批任务ID */
  BatchTaskId: string;
  /** 跑批任务名称 */
  BatchTaskName: string;
  /** 主账号uin */
  Uin: string;
  /** 子账号uin */
  SubUin: string;
  /** 地域 */
  Region: string;
  /** 计费模式 */
  ChargeType: string;
  /** 包年包月资源组ID */
  ResourceGroupId: string | null;
  /** 包年包月资源组名称 */
  ResourceGroupName: string | null;
  /** 资源配置 */
  ResourceConfigInfo: ResourceConfigInfo;
  /** 标签 */
  Tags: Tag[] | null;
  /** 服务对应的模型信息 */
  ModelInfo: ModelInfo | null;
  /** 自定义镜像信息 */
  ImageInfo: ImageInfo | null;
  /** 代码包 */
  CodePackagePath: CosPathInfo | null;
  /** 启动命令 */
  StartCmd: string | null;
  /** 输入数据配置 */
  DataConfigs: DataConfig[] | null;
  /** 输出数据配置 */
  Outputs: DataConfig[];
  /** 是否上报日志 */
  LogEnable: boolean;
  /** 日志配置 */
  LogConfig: LogConfig | null;
  /** vpc id */
  VpcId: string | null;
  /** 子网id */
  SubnetId: string | null;
  /** 任务状态 */
  Status: string;
  /** 运行时长 */
  RuntimeInSeconds: number | null;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 任务开始时间 */
  StartTime: string | null;
  /** 任务结束时间 */
  EndTime: string | null;
  /** 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中 */
  ChargeStatus: string;
  /** 最近一次实例ID */
  LatestInstanceId: string | null;
  /** 备注 */
  Remark: string | null;
  /** 失败原因 */
  FailureReason: string | null;
  /** 计费金额信息，eg：2.00元/小时 (for 按量计费) */
  BillingInfo: string | null;
  /** 运行中的Pod的名字 */
  PodList?: string[] | null;
  /** 模型推理代码信息 */
  ModelInferenceCodeInfo?: CosPathInfo | null;
}

/** 批处理任务实例 */
declare interface BatchTaskInstance {
  /** 任务实例id */
  BatchTaskInstanceId: string;
  /** 开始时间 */
  StartTime: string | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 任务状态 */
  Status: string;
  /** 运行时长 */
  RuntimeInSeconds: number | null;
}

/** 出参类型 */
declare interface BatchTaskSetItem {
  /** 跑批任务ID */
  BatchTaskId: string;
  /** 跑批任务名称 */
  BatchTaskName: string;
  /** 模型信息 */
  ModelInfo: ModelInfo | null;
  /** 镜像信息 */
  ImageInfo: ImageInfo;
  /** 计费模式 */
  ChargeType: string;
  /** 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中 */
  ChargeStatus: string;
  /** 包年包月资源组ID */
  ResourceGroupId: string | null;
  /** 资源配置 */
  ResourceConfigInfo: ResourceConfigInfo;
  /** 标签配置 */
  Tags: Tag[] | null;
  /** 任务状态 */
  Status: string;
  /** 运行时长 */
  RuntimeInSeconds: number | null;
  /** 创建时间 */
  CreateTime: string;
  /** 开始时间 */
  StartTime: string | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 输出 */
  Outputs: DataConfig[];
  /** 包年包月资源组名称 */
  ResourceGroupName: string | null;
  /** 失败原因 */
  FailureReason: string;
  /** 计费金额信息，eg：2.00元/小时 (for 按量计费) */
  BillingInfo: string;
}

/** CFS存储的配置 */
declare interface CFSConfig {
  /** cfs的实例的ID */
  Id: string;
  /** 存储的路径 */
  Path: string;
  /** cfs的挂载类型，可选值为：STORAGE、SOURCE 分别表示存储拓展模式和数据源模式，默认为 STORAGE */
  MountType?: string | null;
  /** 协议 1: NFS, 2: TURBO */
  Protocol?: string | null;
}

/** 配置CFSTurbo参数 */
declare interface CFSTurbo {
  /** CFSTurbo实例id */
  Id?: string | null;
  /** CFSTurbo路径 */
  Path?: string | null;
}

/** 对话结果 */
declare interface Choice {
  /** 对话结果 */
  Message?: Message | null;
  /** 结束理由: stop, length, content_filter, null */
  FinishReason?: string;
  /** 序号 */
  Index?: number;
}

/** 容器信息 */
declare interface Container {
  /** 名字 */
  Name?: string | null;
  /** id */
  ContainerId?: string | null;
  /** 镜像地址 */
  Image?: string | null;
  /** 容器状态 */
  Status?: ContainerStatus | null;
}

/** 容器状态 */
declare interface ContainerStatus {
  /** 重启次数 */
  RestartCount?: number | null;
  /** 状态 */
  State?: string | null;
  /** 是否就绪 */
  Ready?: boolean | null;
  /** 状态原因 */
  Reason?: string | null;
  /** 容器的错误信息 */
  Message?: string | null;
}

/** cos的路径信息 */
declare interface CosPathInfo {
  /** 存储桶 */
  Bucket: string | null;
  /** 所在地域 */
  Region: string | null;
  /** 路径列表，目前只支持单个 */
  Paths: string[] | null;
}

/** 跑批任务周期描述 */
declare interface CronInfo {
  /** cron配置 */
  CronConfig: string;
  /** 周期开始时间 */
  StartTime?: string | null;
  /** 周期结束时间 */
  EndTime?: string | null;
}

/** 定时扩缩任务 */
declare interface CronScaleJob {
  /** Cron表达式，标识任务的执行时间，精确到分钟级 */
  Schedule: string;
  /** 定时任务名 */
  Name?: string | null;
  /** 目标实例数 */
  TargetReplicas?: number | null;
  /** 目标min */
  MinReplicas?: number | null;
  /** 目标max */
  MaxReplicas?: number | null;
  /** 例外时间，Cron表达式，在对应时间内不执行任务。最多支持3条。 */
  ExcludeDates?: string[] | null;
}

/** 自定义指标 */
declare interface CustomTrainingData {
  /** 指标名 */
  MetricName?: string | null;
  /** 指标 */
  Metrics?: CustomTrainingMetric[] | null;
}

/** 自定义指标 */
declare interface CustomTrainingMetric {
  /** X轴数据类型: TIMESTAMP; EPOCH; STEP */
  XType?: string;
  /** 数据点 */
  Points?: CustomTrainingPoint[] | null;
}

/** 自定义训练指标数据点 */
declare interface CustomTrainingPoint {
  /** X值 */
  XValue?: number;
  /** Y值 */
  YValue?: number;
}

/** 数据配置 */
declare interface DataConfig {
  /** 映射路径 */
  MappingPath?: string;
  /** DATASET、COS、CFS、HDFS、WEDATA_HDFS */
  DataSourceType?: string | null;
  /** 来自数据集的数据 */
  DataSetSource?: DataSetConfig | null;
  /** 来自cos的数据 */
  COSSource?: CosPathInfo | null;
  /** 来自CFS的数据 */
  CFSSource?: CFSConfig | null;
  /** 来自HDFS的数据 */
  HDFSSource?: HDFSConfig | null;
  /** 配置GooseFS的数据 */
  GooseFSSource?: GooseFS | null;
  /** 配置TurboFS的数据 */
  CFSTurboSource?: CFSTurbo | null;
}

/** 数据点 */
declare interface DataPoint {
  /** 指标名字 */
  Name: string;
  /** 值 */
  Value: number;
}

/** 数据集结构体 */
declare interface DataSetConfig {
  /** 数据集ID */
  Id: string;
}

/** 数据集组 */
declare interface DatasetGroup {
  /** 数据集ID */
  DatasetId: string | null;
  /** 数据集名称 */
  DatasetName: string | null;
  /** 创建者 */
  Creator: string | null;
  /** 数据集版本 */
  DatasetVersion: string | null;
  /** 数据集类型 */
  DatasetType: string | null;
  /** 数据集标签 */
  DatasetTags: Tag[] | null;
  /** 数据集标注任务名称 */
  DatasetAnnotationTaskName: string | null;
  /** 数据集标注任务ID */
  DatasetAnnotationTaskId: string | null;
  /** 处理进度 */
  Process: number | null;
  /** 数据集状态 */
  DatasetStatus: string | null;
  /** 错误详情 */
  ErrorMsg: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 外部关联TASKType */
  ExternalTaskType: string | null;
  /** 数据集大小 */
  DatasetSize: string | null;
  /** 数据集数据量 */
  FileNum: number | null;
  /** 数据集源COS路径 */
  StorageDataPath: CosPathInfo | null;
  /** 数据集标签存储路径 */
  StorageLabelPath: CosPathInfo | null;
  /** 数据集版本聚合详情 */
  DatasetVersions: DatasetInfo[] | null;
  /** 数据集标注状态 */
  AnnotationStatus: string | null;
  /** 数据集类型 */
  AnnotationType: string | null;
  /** 数据集标注格式 */
  AnnotationFormat: string | null;
  /** 数据集范围 */
  DatasetScope: string | null;
  /** 数据集OCR子场景 */
  OcrScene: string | null;
  /** 数据集字典修改状态 */
  AnnotationKeyStatus: string | null;
  /** 文本数据集导入方式 */
  ContentType?: string | null;
}

/** 数据集详情 */
declare interface DatasetInfo {
  /** 数据集id */
  DatasetId: string | null;
  /** 数据集名称 */
  DatasetName: string | null;
  /** 数据集创建者 */
  Creator: string | null;
  /** 数据集版本 */
  DatasetVersion: string | null;
  /** 数据集类型 */
  DatasetType: string | null;
  /** 数据集标签 */
  DatasetTags: Tag[] | null;
  /** 数据集对应标注任务名称 */
  DatasetAnnotationTaskName: string | null;
  /** 数据集对应标注任务ID */
  DatasetAnnotationTaskId: string | null;
  /** 处理进度 */
  Process: number | null;
  /** 数据集状态 */
  DatasetStatus: string | null;
  /** 错误详情 */
  ErrorMsg: string | null;
  /** 数据集创建时间 */
  CreateTime: string | null;
  /** 数据集更新时间 */
  UpdateTime: string | null;
  /** 外部任务类型 */
  ExternalTaskType: string | null;
  /** 数据集存储大小 */
  DatasetSize: string | null;
  /** 数据集数据数量 */
  FileNum: number | null;
  /** 数据集源cos 路径 */
  StorageDataPath: CosPathInfo | null;
  /** 数据集输出cos路径 */
  StorageLabelPath: CosPathInfo | null;
  /** 数据集标注状态 */
  AnnotationStatus: string | null;
  /** 数据集类型 */
  AnnotationType: string | null;
  /** 数据集标注格式 */
  AnnotationFormat: string | null;
  /** 数据集范围 */
  DatasetScope: string | null;
  /** 数据集OCR子场景 */
  OcrScene: string | null;
  /** 数据集字典修改状态 */
  AnnotationKeyStatus: string | null;
}

/** 默认Nginx网关结构 */
declare interface DefaultNginxGatewayCallInfo {
  /** host */
  Host?: string | null;
}

/** 图像检测参数信息 */
declare interface DetectionLabelInfo {
  /** 点坐标列表 */
  Points: PointInfo[] | null;
  /** 标签 */
  Labels: string[] | null;
  /** 类别 */
  FrameType: string | null;
}

/** 引擎版本 */
declare interface EngineVersion {
  /** 引擎版本 */
  Version: string | null;
  /** 运行镜像 */
  Image: string | null;
  /** 是否支持int8量化 */
  IsSupportIntEightQuantization: boolean | null;
  /** 框架版本 */
  FrameworkVersion: string | null;
}

/** 环境变量 */
declare interface EnvVar {
  /** 环境变量key */
  Name?: string | null;
  /** 环境变量value */
  Value?: string | null;
}

/** 过滤器 */
declare interface Filter {
  /** 过滤字段名称 */
  Name?: string;
  /** 过滤字段取值 */
  Values?: string[];
  /** 是否开启反向查询 */
  Negative?: boolean;
  /** 是否开启模糊匹配 */
  Fuzzy?: boolean;
}

/** 图片列表查询结果详情 */
declare interface FilterLabelInfo {
  /** 数据集id */
  DatasetId: string;
  /** 文件ID */
  FileId: string;
  /** 文件路径 */
  FileName: string;
  /** 分类标签结果 */
  ClassificationLabels: string[] | null;
  /** 检测标签结果 */
  DetectionLabels: DetectionLabelInfo[] | null;
  /** 分割标签结果 */
  SegmentationLabels: SegmentationInfo[] | null;
  /** RGB 图片路径 */
  RGBPath: string | null;
  /** 标签模板类型 */
  LabelTemplateType: string | null;
  /** 下载url链接 */
  DownloadUrl: string | null;
  /** 缩略图下载链接 */
  DownloadThumbnailUrl: string | null;
  /** 分割结果图片下载链接 */
  DownloadRGBUrl: string | null;
  /** OCR场景IDENTITY：识别STRUCTURE：智能结构化 */
  OcrScene: string | null;
  /** OCR场景标签列表 */
  OcrLabels: OcrLabelInfo[] | null;
  /** OCR场景标签信息 */
  OcrLabelInfo: string | null;
  /** 文本分类场景标签结果，内容是json结构 */
  TextClassificationLabelList: string | null;
  /** 文本内容，返回50字符 */
  RowText: string | null;
  /** 文本内容是否完全返回 */
  ContentOmit: boolean | null;
}

/** 框架信息列表 */
declare interface FrameworkInfo {
  /** 框架名称 */
  Name: string;
  /** 框架版本以及对应的训练模式 */
  VersionInfos: FrameworkVersion[];
}

/** 框架版本以及对应的训练模式 */
declare interface FrameworkVersion {
  /** 框架版本 */
  Version: string;
  /** 训练模式 */
  TrainingModes: string[];
  /** 框架运行环境 */
  Environment?: string;
}

/** 配置GooseFS参数 */
declare interface GooseFS {
  /** goosefs实例id */
  Id?: string | null;
}

/** gpu 详情 */
declare interface GpuDetail {
  /** GPU 显卡类型；枚举值: V100 A100 T4 */
  Name?: string | null;
  /** GPU 显卡数；单位为1/100卡，比如100代表1卡 */
  Value?: number | null;
}

/** 资源信息 */
declare interface GroupResource {
  /** CPU核数; 单位为1/1000核，比如100表示0.1核 */
  Cpu: number;
  /** 内存；单位为MB */
  Memory: number;
  /** 总卡数；GPUDetail 显卡数之和；单位为1/100卡，比如100代表1卡 */
  Gpu: number | null;
  /** Gpu详情 */
  GpuDetailSet: GpuDetail[] | null;
}

/** HDFS的参数配置 */
declare interface HDFSConfig {
  /** 集群实例ID,实例ID形如: emr-xxxxxxxx */
  Id: string;
  /** 路径 */
  Path: string;
}

/** hpa的描述 */
declare interface HorizontalPodAutoscaler {
  /** 最小实例数 */
  MinReplicas: number | null;
  /** 最大实例数 */
  MaxReplicas: number | null;
  /** 扩缩容指标 */
  HpaMetrics: Option[] | null;
}

/** 模型专业参数 */
declare interface HyperParameter {
  /** 最大nnz数 */
  MaxNNZ?: string | null;
  /** slot数 */
  SlotNum?: string | null;
  /** gpu cache 使用率 */
  CpuCachePercentage?: string | null;
  /** cpu cache 使用率 */
  GpuCachePercentage?: string | null;
  /** 是否开启分布式模式(true/false) */
  EnableDistributed?: string | null;
  /** TORCH_SCRIPT、MMDETECTION、DETECTRON2、HUGGINGFACE格式在进行优化时切分子图的最小算子数目，一般无需进行改动，默认为3 */
  MinBlockSizePt?: string | null;
  /** FROZEN_GRAPH、SAVED_MODEL格式在进行优化时切分子图的最小算子数目，一般无需进行改动，默认为10 */
  MinBlockSizeTf?: string | null;
  /** Stable Diffusion 模型优化参数 */
  PipelineArgs?: string | null;
  /** Stable Diffusion 模型优化参数，控制Lora模型的影响效果 */
  LoraScale?: string | null;
}

/** 镜像描述信息 */
declare interface ImageInfo {
  /** 镜像类型：TCR为腾讯云TCR镜像; CCR为腾讯云TCR个人版镜像，PreSet为平台预置镜像 */
  ImageType: string;
  /** 镜像地址 */
  ImageUrl: string;
  /** TCR镜像对应的地域 */
  RegistryRegion?: string | null;
  /** TCR镜像对应的实例id */
  RegistryId?: string | null;
  /** 是否允许导出全部内容 */
  AllowSaveAllContent?: boolean | null;
  /** 镜像名称 */
  ImageName?: string | null;
}

/** 推理代码的信息 */
declare interface InferCodeInfo {
  /** 推理代码所在的cos详情 */
  CosPathInfo?: CosPathInfo | null;
}

/** 服务的调用信息，服务组下唯一 */
declare interface InferGatewayCallInfo {
  /** 内网http调用地址 */
  VpcHttpAddr: string | null;
  /** 内网https调用地址 */
  VpcHttpsAddr: string | null;
  /** 内网grpc调用地址 */
  VpcGrpcTlsAddr: string | null;
  /** 可访问的vpcid */
  VpcId: string | null;
  /** 后端ip对应的子网 */
  SubnetId: string | null;
}

/** 推理镜像详情 */
declare interface InferTemplate {
  /** 模板ID */
  InferTemplateId: string;
  /** 模板镜像 */
  InferTemplateImage: string;
}

/** 推理镜像组 */
declare interface InferTemplateGroup {
  /** 算法框架 */
  Framework: string | null;
  /** 版本号 */
  FrameworkVersion: string | null;
  /** 支持的训练框架集合 */
  Groups: string[] | null;
  /** 镜像模板参数列表 */
  InferTemplates: InferTemplate[] | null;
}

/** 私有连接通道信息 */
declare interface IngressPrivateLinkInfo {
  /** 用户VpcId */
  VpcId?: string | null;
  /** 用户子网ID */
  SubnetId?: string | null;
  /** 内网http调用地址 */
  InnerHttpAddr?: string[] | null;
  /** 内网https调用地址 */
  InnerHttpsAddr?: string[] | null;
}

/** 资源组节点信息 */
declare interface Instance {
  /** 资源组节点id */
  InstanceId: string;
  /** 节点已用资源 */
  UsedResource: ResourceInfo | null;
  /** 节点总资源 */
  TotalResource: ResourceInfo | null;
  /** 节点状态 注意：此字段为枚举值说明: DEPLOYING: 部署中RUNNING: 运行中 DEPLOY_FAILED: 部署失败 RELEASING 释放中 RELEASED：已释放 EXCEPTION：异常 */
  InstanceStatus: string | null;
  /** 创建人 */
  SubUin: string;
  /** 创建时间: 注意：北京时间，比如: 2021-12-01 12:00:00 */
  CreateTime: string | null;
  /** 到期时间注意：北京时间，比如：2021-12-11 12:00:00 */
  ExpireTime: string | null;
  /** 自动续费标识注意：此字段为枚举值说明：NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期通知NOTIFY_AND_AUTO_RENEW：自动续费且到期通知DISABLE_NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期不通知 */
  AutoRenewFlag: string | null;
  /** 计费项ID */
  SpecId: string;
  /** 计费项别名 */
  SpecAlias: string;
}

/** 内网调用信息 */
declare interface IntranetCallInfo {
  /** 私有连接通道信息 */
  IngressPrivateLinkInfo?: IngressPrivateLinkInfo | null;
  /** 共享弹性网卡信息 */
  ServiceEIPInfo?: ServiceEIPInfo[] | null;
}

/** 日志配置 */
declare interface LogConfig {
  /** 日志需要投递到cls的日志集 */
  LogsetId: string | null;
  /** 日志需要投递到cls的主题 */
  TopicId: string | null;
}

/** 单条日志数据结构 */
declare interface LogIdentity {
  /** 单条日志的ID */
  Id: string | null;
  /** 单条日志的内容 */
  Message: string | null;
  /** 这条日志对应的Pod名称 */
  PodName: string | null;
  /** 日志的时间戳（RFC3339格式的时间字符串） */
  Timestamp: string | null;
}

/** 对话输入内容 */
declare interface Message {
  /** 角色名。支持三个角色：system、user、assistant，其中system仅开头可出现一次，也可忽略。 */
  Role: string | null;
  /** 对话输入内容。 */
  Content: string | null;
}

/** 指标数据 */
declare interface MetricData {
  /** 训练任务id */
  TaskId: string;
  /** 时间戳.unix timestamp,单位为秒 */
  Timestamp?: number | null;
  /** 用户uin */
  Uin?: string | null;
  /** 本次上报数据所处的训练周期数。 */
  Epoch?: number | null;
  /** 本次上报数据所处的训练迭代次数。 */
  Step?: number | null;
  /** 训练停止所需的迭代总数。 */
  TotalSteps?: number | null;
  /** 数据点。数组元素为不同指标的数据。数组长度不超过10。 */
  Points?: DataPoint[] | null;
}

/** 模型加速引擎版本 */
declare interface ModelAccEngineVersion {
  /** 模型格式 */
  ModelFormat: string | null;
  /** 引擎版本信息 */
  EngineVersions: EngineVersion[] | null;
}

/** 模型加速任务 */
declare interface ModelAccelerateTask {
  /** 模型加速任务ID */
  ModelAccTaskId: string | null;
  /** 模型加速任务名称 */
  ModelAccTaskName: string | null;
  /** 模型ID */
  ModelId: string | null;
  /** 模型名称 */
  ModelName: string | null;
  /** 模型版本 */
  ModelVersion: string | null;
  /** 模型来源 */
  ModelSource: string | null;
  /** 优化级别 */
  OptimizationLevel: string | null;
  /** 任务状态 */
  TaskStatus: string | null;
  /** input节点个数 */
  ModelInputNum: number | null;
  /** input节点信息 */
  ModelInputInfos: ModelInputInfo[] | null;
  /** GPU型号 */
  GPUType: string | null;
  /** 计费模式 */
  ChargeType: string | null;
  /** 加速比 */
  Speedup: string | null;
  /** 模型输入cos路径 */
  ModelInputPath: CosPathInfo | null;
  /** 模型输出cos路径 */
  ModelOutputPath: CosPathInfo | null;
  /** 错误信息 */
  ErrorMsg: string | null;
  /** 算法框架 */
  AlgorithmFramework: string | null;
  /** 排队个数 */
  WaitNumber: number | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 任务进度 */
  TaskProgress: number | null;
  /** 模型格式 */
  ModelFormat: string | null;
  /** 模型Tensor信息 */
  TensorInfos: string[] | null;
  /** 模型专业参数 */
  HyperParameter: HyperParameter | null;
  /** 加速引擎版本 */
  AccEngineVersion: string | null;
  /** 标签 */
  Tags: Tag[] | null;
  /** 优化模型是否已保存到模型仓库 */
  IsSaved: boolean | null;
  /** SAVED_MODEL保存时配置的签名 */
  ModelSignature: string | null;
  /** 是否是QAT模型 */
  QATModel: boolean | null;
  /** 加速引擎对应的框架版本 */
  FrameworkVersion?: string | null;
}

/** 模型描述信息 */
declare interface ModelInfo {
  /** 模型版本id, DescribeTrainingModelVersion查询模型接口时的id自动学习类型的模型填写自动学习的任务id */
  ModelVersionId: string;
  /** 模型id */
  ModelId?: string;
  /** 模型名 */
  ModelName?: string;
  /** 模型版本 */
  ModelVersion?: string;
  /** 模型来源 */
  ModelSource?: string;
  /** cos路径信息 */
  CosPathInfo?: CosPathInfo;
  /** 模型对应的算法框架，预留 */
  AlgorithmFramework?: string | null;
  /** 默认为 NORMAL, 已加速模型: ACCELERATE, 自动学习模型 AUTO_ML */
  ModelType?: string | null;
  /** 模型格式 */
  ModelFormat?: string | null;
}

/** 模型输入信息 */
declare interface ModelInputInfo {
  /** input数据类型FIXED：固定RANGE：浮动 */
  ModelInputType: string | null;
  /** input数据尺寸 */
  ModelInputDimension: string[] | null;
}

/** 类型NotebookDetail */
declare interface NotebookDetail {
  /** notebook ID */
  Id: string;
  /** notebook 名称 */
  Name: string;
  /** 生命周期脚本 */
  LifecycleScriptId: string | null;
  /** Pod-Name */
  PodName: string | null;
  /** Update-Time */
  UpdateTime: string;
  /** 是否访问公网 */
  DirectInternetAccess: boolean;
  /** 预付费专用资源组 */
  ResourceGroupId: string | null;
  /** 标签配置 */
  Tags: Tag[] | null;
  /** 是否自动停止 */
  AutoStopping: boolean;
  /** 其他GIT存储库，最多3个，单个长度不超过512字符 */
  AdditionalCodeRepoIds: string[] | null;
  /** 自动停止时间，单位小时 */
  AutomaticStopTime: number | null;
  /** 资源配置 */
  ResourceConf: ResourceConf;
  /** 默认GIT存储库，长度不超过512字符 */
  DefaultCodeRepoId: string;
  /** 训练输出 */
  EndTime: string | null;
  /** 是否上报日志 */
  LogEnable: boolean;
  /** 日志配置 */
  LogConfig: LogConfig | null;
  /** VPC ID */
  VpcId: string | null;
  /** 子网ID */
  SubnetId: string | null;
  /** 任务状态 */
  Status: string;
  /** 运行时长 */
  RuntimeInSeconds: number | null;
  /** 创建时间 */
  CreateTime: string;
  /** 训练开始时间 */
  StartTime: string | null;
  /** 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中 */
  ChargeStatus: string | null;
  /** 是否ROOT权限 */
  RootAccess: boolean;
  /** 计贺金额信息，eg:2.00元/小时 */
  BillingInfos: string[] | null;
  /** 存储卷大小 （单位时GB，最小10GB，必须是10G的倍数） */
  VolumeSizeInGB: number | null;
  /** 失败原因 */
  FailureReason: string | null;
  /** 计算资源付费模式 (- PREPAID：预付费，即包年包月 - POSTPAID_BY_HOUR：按小时后付费) */
  ChargeType: string;
  /** 后付费资源规格说明 */
  InstanceTypeAlias: string | null;
  /** 预付费资源组名称 */
  ResourceGroupName: string | null;
  /** 存储的类型。取值包含： FREE: 预付费的免费存储 CLOUD_PREMIUM： 高性能云硬盘 CLOUD_SSD： SSD云硬盘 CFS: CFS存储，包含NFS和turbo */
  VolumeSourceType: string | null;
  /** CFS存储的配置 */
  VolumeSourceCFS: CFSConfig | null;
  /** 数据配置 */
  DataConfigs: DataConfig[] | null;
  /** notebook 信息 */
  Message: string | null;
  /** 数据源来源，eg：WeData_HDFS */
  DataSource: string | null;
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像类型 */
  ImageType?: string | null;
}

/** 镜像保存记录 */
declare interface NotebookImageRecord {
  /** 保存记录ID */
  RecordId?: string | null;
  /** 镜像地址 */
  ImageUrl?: string | null;
  /** 状态 */
  Status?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 状态信息 */
  Message?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** kernel数组 */
  Kernels?: string[] | null;
}

/** Notebook列表元素 */
declare interface NotebookSetItem {
  /** notebook ID */
  Id?: string;
  /** notebook 名称 */
  Name?: string;
  /** 计费模式 */
  ChargeType?: string;
  /** 资源配置 */
  ResourceConf?: ResourceConf;
  /** 预付费资源组 */
  ResourceGroupId?: string | null;
  /** 存储卷大小 */
  VolumeSizeInGB?: number | null;
  /** 计费金额信息，eg：2.00元/小时 (for后付费) */
  BillingInfos?: string[] | null;
  /** 标签配置 */
  Tags?: Tag[] | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 启动时间 */
  StartTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string;
  /** 运行时间 */
  RuntimeInSeconds?: number | null;
  /** 计费状态 */
  ChargeStatus?: string | null;
  /** 状态 */
  Status?: string;
  /** 错误原因 */
  FailureReason?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** Pod名称 */
  PodName?: string | null;
  /** 后付费资源规格名称 */
  InstanceTypeAlias?: string | null;
  /** 预付费资源组名称 */
  ResourceGroupName?: string | null;
  /** 是否自动终止 */
  AutoStopping?: boolean;
  /** 自动停止时间 */
  AutomaticStopTime?: number | null;
  /** 存储的类型。取值包含： FREE: 预付费的免费存储 CLOUD_PREMIUM： 高性能云硬盘 CLOUD_SSD： SSD云硬盘 CFS: CFS存储，包含NFS和turbo */
  VolumeSourceType?: string | null;
  /** CFS存储的配置 */
  VolumeSourceCFS?: CFSConfig | null;
  /** notebook 信息 */
  Message?: string | null;
  /** notebook用户类型 */
  UserTypes?: string[] | null;
  /** SSH配置 */
  SSHConfig?: SSHConfig | null;
}

/** OCR场景标签列表 */
declare interface OcrLabelInfo {
  /** 坐标点围起来的框 */
  Points: PointInfo[] | null;
  /** 框的形状：FRAME_TYPE_RECTANGLEFRAME_TYPE_POLYGON */
  FrameType: string | null;
  /** 智能结构化：key区域对应的内容 */
  Key: string | null;
  /** 智能结构化：上述key的ID */
  KeyId: string | null;
  /** 识别：框区域的内容智能结构化：value区域对应的内容 */
  Value: string | null;
  /** 智能结构化：value区域所关联的key 区域的keyID的集合 */
  KeyIdsForValue: string[] | null;
  /** key或者value区域内容的方向：DIRECTION_VERTICALDIRECTION_HORIZONTAL */
  Direction: string | null;
}

/** 键值对 */
declare interface Option {
  /** 指标名 */
  Name: string;
  /** 指标值 */
  Value: number;
}

/** Pod信息展示 */
declare interface Pod {
  /** pod名 */
  Name?: string | null;
  /** pod的唯一id */
  Uid?: string | null;
  /** 服务付费模式 */
  ChargeType?: string | null;
  /** pod的状态 */
  Phase?: string | null;
  /** pod的IP */
  IP?: string | null;
  /** pod的创建时间 */
  CreateTime?: string | null;
  /** 容器列表 */
  Containers?: Container | null;
  /** 容器列表 */
  ContainerInfos?: Container[] | null;
}

/** 任务建模Pod信息 */
declare interface PodInfo {
  /** pod名 */
  Name?: string | null;
  /** pod的IP */
  IP?: string | null;
  /** pod状态 */
  Status?: string | null;
  /** pod启动时间 */
  StartTime?: string | null;
  /** pod结束时间 */
  EndTime?: string | null;
  /** pod资源配置 */
  ResourceConfigInfo?: ResourceConfigInfo | null;
}

/** 点信息描述 */
declare interface PointInfo {
  /** X坐标值 */
  X: number | null;
  /** Y坐标值 */
  Y: number | null;
}

/** RDMA配置 */
declare interface RDMAConfig {
  /** 是否开启RDMA */
  Enable?: boolean | null;
}

/** Notebook资源参数 */
declare interface ResourceConf {
  /** cpu 处理器资源, 单位为1/1000核 (for预付费) */
  Cpu?: number | null;
  /** memory 内存资源, 单位为1M (for预付费) */
  Memory?: number | null;
  /** gpu Gpu卡资源，单位为1单位的GpuType，例如GpuType=T4时，1 Gpu = 1/100 T4卡，GpuType=vcuda时，1 Gpu = 1/100 vcuda-core (for预付费) */
  Gpu?: number | null;
  /** GpuType 卡类型 vcuda, T4,P4,V100等 (for预付费) */
  GpuType?: string | null;
  /** 计算规格 (for后付费)，可选值如下：TI.S.LARGE.POST: 4C8G TI.S.2XLARGE16.POST: 8C16G TI.S.2XLARGE32.POST: 8C32G TI.S.4XLARGE32.POST: 16C32GTI.S.4XLARGE64.POST: 16C64GTI.S.6XLARGE48.POST: 24C48GTI.S.6XLARGE96.POST: 24C96GTI.S.8XLARGE64.POST: 32C64GTI.S.8XLARGE128.POST : 32C128GTI.GN10.2XLARGE40.POST: 8C40G V100*1 TI.GN10.5XLARGE80.POST: 18C80G V100*2 TI.GN10.10XLARGE160.POST : 32C160G V100*4TI.GN10.20XLARGE320.POST : 72C320G V100*8TI.GN7.8XLARGE128.POST: 32C128G T4*1 TI.GN7.10XLARGE160.POST: 40C160G T4*2 TI.GN7.20XLARGE320.POST: 80C320G T4*4 */
  InstanceType?: string | null;
}

/** 资源配置 */
declare interface ResourceConfigInfo {
  /** 角色，eg：PS、WORKER、DRIVER、EXECUTOR */
  Role: string;
  /** cpu核数，1000=1核 */
  Cpu?: number;
  /** 内存，单位为MB */
  Memory?: number;
  /** gpu卡类型 */
  GpuType?: string;
  /** gpu数 */
  Gpu?: number;
  /** 算力规格ID计算规格 (for后付费)，可选值如下：TI.S.LARGE.POST: 4C8G TI.S.2XLARGE16.POST: 8C16G TI.S.2XLARGE32.POST: 8C32G TI.S.4XLARGE32.POST: 16C32GTI.S.4XLARGE64.POST: 16C64GTI.S.6XLARGE48.POST: 24C48GTI.S.6XLARGE96.POST: 24C96GTI.S.8XLARGE64.POST: 32C64GTI.S.8XLARGE128.POST : 32C128GTI.GN10.2XLARGE40.POST: 8C40G V100*1 TI.GN10.5XLARGE80.POST: 18C80G V100*2 TI.GN10.10XLARGE160.POST : 32C160G V100*4TI.GN10.20XLARGE320.POST : 72C320G V100*8TI.GN7.8XLARGE128.POST: 32C128G T4*1 TI.GN7.10XLARGE160.POST: 40C160G T4*2 TI.GN7.20XLARGE320.POST: 80C32 */
  InstanceType?: string;
  /** 计算节点数 */
  InstanceNum?: number;
  /** 算力规格名称计算规格 (for后付费)，可选值如下：4C8G 8C16G 8C32G 16C32G6C64G24C48G24C96G32C64G32C128G8C40G V100*1 8C80G V100*2 32C160G V100*472C320G V100*832C128G T4*1 40C160G T4*2 80C32 */
  InstanceTypeAlias?: string;
  /** RDMA配置 */
  RDMAConfig?: RDMAConfig | null;
}

/** 资源组 */
declare interface ResourceGroup {
  /** 资源组id */
  ResourceGroupId: string;
  /** 资源组名称 */
  ResourceGroupName: string;
  /** 可用节点个数(运行中的节点) */
  FreeInstance: number;
  /** 总节点个数(所有节点) */
  TotalInstance: number;
  /** 资资源组已用的资源 */
  UsedResource: GroupResource | null;
  /** 资源组总资源 */
  TotalResource: GroupResource | null;
  /** 节点信息 */
  InstanceSet: Instance[] | null;
  /** 标签列表 */
  TagSet: Tag[] | null;
}

/** 描述资源信息 */
declare interface ResourceInfo {
  /** 处理器资源, 单位为1/1000核 */
  Cpu: number | null;
  /** 内存资源, 单位为1M */
  Memory: number | null;
  /** Gpu卡个数资源, 单位为0.01单位的GpuType.Gpu=100表示使用了“一张”gpu卡, 但此处的“一张”卡有可能是虚拟化后的1/4卡, 也有可能是整张卡. 取决于实例的机型例1 实例的机型带有1张虚拟gpu卡, 每张虚拟gpu卡对应1/4张实际T4卡, 则此时 GpuType=T4, Gpu=100, RealGpu=25.例2 实例的机型带有4张gpu整卡, 每张卡对应1张实际T4卡, 则 此时 GpuType=T4, Gpu=400, RealGpu=400. */
  Gpu?: number | null;
  /** Gpu卡型号 T4或者V100。仅展示当前 GPU 卡型号，若存在多类型同时使用，则参考 RealGpuDetailSet 的值。 */
  GpuType?: string | null;
  /** 创建或更新时无需填写，仅展示需要关注后付费非整卡实例对应的实际的Gpu卡资源, 表示gpu资源对应实际的gpu卡个数.RealGpu=100表示实际使用了一张gpu卡, 对应实际的实例机型, 有可能代表带有1/4卡的实例4个, 或者带有1/2卡的实例2个, 或者带有1卡的实力1个. */
  RealGpu?: number;
  /** 创建或更新时无需填写，仅展示需要关注。详细的GPU使用信息。 */
  RealGpuDetailSet?: GpuDetail[];
}

/** 文本行信息 */
declare interface RowItem {
  /** rowValue 数组 */
  Values: RowValue[] | null;
}

/** 文件行信息 */
declare interface RowValue {
  /** 列名 */
  Name: string;
  /** 列值 */
  Value: string | null;
}

/** notebook ssh端口配置 */
declare interface SSHConfig {
  /** 是否开启ssh */
  Enable?: boolean | null;
  /** 公钥信息 */
  PublicKey?: string | null;
  /** 端口号 */
  Port?: number | null;
  /** 登录命令 */
  LoginCommand?: string | null;
}

/** 定时的事务和行为 */
declare interface ScheduledAction {
  /** 是否要定时停止服务，true or false。true 则 ScheduleStopTime 必填， false 则 ScheduleStopTime 不生效 */
  ScheduleStop?: boolean;
  /** 要执行定时停止的时间，格式：“2022-01-26T19:46:22+08:00” */
  ScheduleStopTime?: string;
}

/** 表格数据集表头信息 */
declare interface SchemaInfo {
  /** 长度30字符内 */
  Name: string;
  /** 数据类型 */
  Type: string;
}

/** 图片分割参数信息 */
declare interface SegmentationInfo {
  /** 点坐标数组 */
  Points: PointInfo[] | null;
  /** 分割标签 */
  Label: string | null;
  /** 灰度值 */
  Gray: number | null;
  /** 颜色 */
  Color: string | null;
}

/** 描述在线服务 */
declare interface Service {
  /** 服务组id */
  ServiceGroupId?: string;
  /** 服务id */
  ServiceId?: string;
  /** 服务组名 */
  ServiceGroupName?: string;
  /** 服务描述 */
  ServiceDescription?: string | null;
  /** 服务的详细信息 */
  ServiceInfo?: ServiceInfo | null;
  /** 集群id */
  ClusterId?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
  /** 付费类型 */
  ChargeType?: string | null;
  /** 包年包月服务的资源组id，按量计费的服务为空 */
  ResourceGroupId?: string | null;
  /** 包年包月服务对应的资源组名字 */
  ResourceGroupName?: string | null;
  /** 服务的标签 */
  Tags?: Tag[] | null;
  /** 服务所在的 ingress 的 name */
  IngressName?: string | null;
  /** 创建者 */
  CreatedBy?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 主账号 */
  Uin?: string | null;
  /** 子账号 */
  SubUin?: string | null;
  /** app_id */
  AppId?: number | null;
  /** 服务的业务状态 */
  BusinessStatus?: string | null;
  /** 已废弃 */
  ServiceLimit?: ServiceLimit | null;
  /** 已废弃 */
  ScheduledAction?: ScheduledAction | null;
  /** 服务创建失败的原因，创建成功后该字段为默认值 CREATE_SUCCEED */
  CreateFailedReason?: string | null;
  /** 服务状态CREATING 创建中CREATE_FAILED 创建失败Normal	正常运行中Stopped 已停止Stopping 停止中Abnormal 异常Pending 启动中Waiting 就绪中 */
  Status?: string | null;
  /** 费用信息 */
  BillingInfo?: string | null;
  /** 模型权重 */
  Weight?: number | null;
  /** 服务的创建来源AUTO_ML: 来自自动学习的一键发布DEFAULT: 其他来源 */
  CreateSource?: string | null;
  /** 版本号 */
  Version?: string | null;
  /** 服务组下服务的最高版本号 */
  LatestVersion?: string | null;
}

/** 服务的调用信息，服务组下唯一 */
declare interface ServiceCallInfo {
  /** 服务组id */
  ServiceGroupId: string | null;
  /** 内网http调用地址 */
  InnerHttpAddr: string | null;
  /** 内网https调用地址 */
  InnerHttpsAddr: string | null;
  /** 内网http调用地址 */
  OuterHttpAddr: string | null;
  /** 内网https调用地址 */
  OuterHttpsAddr: string | null;
  /** 调用key */
  AppKey: string | null;
  /** 调用secret */
  AppSecret: string | null;
}

/** 服务共享弹性网卡设置 */
declare interface ServiceEIP {
  /** 是否开启TIONE内网到外部的访问 */
  EnableEIP?: boolean | null;
  /** 用户VpcId */
  VpcId?: string | null;
  /** 用户subnetId */
  SubnetId?: string | null;
}

/** 共享弹性网卡信息 */
declare interface ServiceEIPInfo {
  /** 服务ID */
  ServiceId?: string | null;
  /** 用户VpcId */
  VpcId?: string | null;
  /** 用户子网Id */
  SubnetId?: string | null;
}

/** 在线服务一个服务组的信息 */
declare interface ServiceGroup {
  /** 服务组id */
  ServiceGroupId: string;
  /** 服务组名 */
  ServiceGroupName: string;
  /** 创建者 */
  CreatedBy: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 主账号 */
  Uin: string;
  /** 服务组下服务总数 */
  ServiceCount: number | null;
  /** 服务组下在运行的服务数量 */
  RunningServiceCount: number | null;
  /** 服务描述 */
  Services: Service[] | null;
  /** 服务组状态，与服务一致 CREATING 创建中 CREATE_FAILED 创建失败 Normal	正常运行中 Stopped 已停止 Stopping 停止中 Abnormal 异常 Pending 启动中 Waiting 就绪中 */
  Status: string | null;
  /** 服务组标签 */
  Tags: Tag[] | null;
  /** 服务组下最高版本 */
  LatestVersion: string | null;
  /** 服务的业务状态CREATING 创建中 CREATE_FAILED 创建失败 ARREARS_STOP 因欠费被强制停止 BILLING 计费中 WHITELIST_USING 白名单试用中 WHITELIST_STOP 白名单额度不足 */
  BusinessStatus: string | null;
  /** 服务的计费信息 */
  BillingInfo: string | null;
  /** 服务的创建来源 */
  CreateSource: string | null;
  /** 服务组的权重更新状态 UPDATING 更新中 UPDATED 更新成功 UPDATE_FAILED 更新失败 */
  WeightUpdateStatus: string | null;
}

/** 服务历史版本 */
declare interface ServiceHistory {
  /** 版本 */
  Revision: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 镜像 */
  Image: string | null;
  /** 模型文件 */
  ModelFile: string | null;
  /** 原始数据 */
  RawData: string | null;
}

/** 推理服务在集群中的信息 */
declare interface ServiceInfo {
  /** 期望运行的Pod数量，停止状态是0不同计费模式和调节模式下对应关系如下PREPAID 和 POSTPAID_BY_HOUR:手动调节模式下对应 实例数量自动调节模式下对应 基于时间的默认策略的实例数量HYBRID_PAID:后付费实例手动调节模式下对应 实例数量后付费实例自动调节模式下对应 时间策略的默认策略的实例数量 */
  Replicas: number | null;
  /** 镜像信息 */
  ImageInfo: ImageInfo | null;
  /** 环境变量 */
  Env: EnvVar[] | null;
  /** 资源信息 */
  Resources: ResourceInfo | null;
  /** 后付费实例对应的机型规格 */
  InstanceType: string | null;
  /** 模型信息 */
  ModelInfo: ModelInfo | null;
  /** 是否启用日志 */
  LogEnable: boolean | null;
  /** 日志配置 */
  LogConfig: LogConfig | null;
  /** 是否开启鉴权 */
  AuthorizationEnable: boolean | null;
  /** hpa配置 */
  HorizontalPodAutoscaler: HorizontalPodAutoscaler | null;
  /** 服务的状态描述 */
  Status: WorkloadStatus | null;
  /** 权重 */
  Weight: number | null;
  /** 实例列表 */
  PodList: string[] | null;
  /** 资源总量 */
  ResourceTotal: ResourceInfo | null;
  /** 历史实例数 */
  OldReplicas: number | null;
  /** 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数, 若不填则默认为1 */
  HybridBillingPrepaidReplicas: number | null;
  /** 历史 HYBRID_PAID 时的实例数，用户恢复服务 */
  OldHybridBillingPrepaidReplicas: number | null;
  /** 是否开启模型的热更新。默认不开启 */
  ModelHotUpdateEnable: boolean | null;
  /** 实例数量调节方式,默认为手动支持：自动 - "AUTO", 手动 - "MANUAL" */
  ScaleMode?: string | null;
  /** 定时伸缩任务 */
  CronScaleJobs?: CronScaleJob[] | null;
  /** 定时伸缩策略 */
  ScaleStrategy?: string | null;
  /** 定时停止的配置 */
  ScheduledAction?: string | null;
  /** Pod列表信息 */
  Pods?: Pod | null;
  /** Pod列表信息 */
  PodInfos?: Pod[] | null;
  /** 服务限速限流相关配置 */
  ServiceLimit?: ServiceLimit | null;
  /** 是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。 */
  ModelTurboEnable?: boolean | null;
  /** 挂载 */
  VolumeMount?: VolumeMount | null;
  /** 推理代码信息 */
  InferCodeInfo?: InferCodeInfo | null;
  /** 服务的启动命令 */
  Command?: string | null;
  /** 开启TIONE内网访问外部设置 */
  ServiceEIP?: ServiceEIP | null;
}

/** 服务的限流限速等配置 */
declare interface ServiceLimit {
  /** 是否开启实例层面限流限速，true or false。true 则 InstanceRpsLimit 必填， false 则 InstanceRpsLimit 不生效 */
  EnableInstanceRpsLimit?: boolean;
  /** 每个服务实例的 request per second 限速, 0 为不限流 */
  InstanceRpsLimit?: number;
}

/** 计费项内容 */
declare interface Spec {
  /** 计费项标签 */
  SpecId?: string;
  /** 计费项名称 */
  SpecName?: string;
  /** 计费项显示名称 */
  SpecAlias?: string;
  /** 是否售罄 */
  Available?: boolean;
  /** 当前资源售罄时，可用的区域有哪些 */
  AvailableRegion?: string[];
  /** 当前计费项支持的特性 */
  SpecFeatures?: string[] | null;
  /** 计费项类型 */
  SpecType?: string | null;
  /** GPU类型 */
  GpuType?: string | null;
  /** 计费项CategoryId */
  CategoryId?: string | null;
}

/** 计费项询价结果 */
declare interface SpecPrice {
  /** 计费项名称 */
  SpecName: string;
  /** 原价，单位：分。最大值42亿，超过则返回0 */
  TotalCost: number;
  /** 优惠后的价格，单位：分 */
  RealTotalCost: number;
  /** 计费项数量 */
  SpecCount?: number;
}

/** 计费项询价单元 */
declare interface SpecUnit {
  /** 计费项名称 */
  SpecName: string;
  /** 计费项数量,建议不超过100万 */
  SpecCount: number;
}

/** 启动命令信息 */
declare interface StartCmdInfo {
  /** 启动命令 */
  StartCmd?: string;
  /** ps启动命令 */
  PsStartCmd?: string;
  /** worker启动命令 */
  WorkerStartCmd?: string;
}

/** 实例状况 */
declare interface StatefulSetCondition {
  /** 信息 */
  Message: string | null;
  /** 原因 */
  Reason: string | null;
  /** Status of the condition, one of True, False, Unknown. */
  Status: string | null;
  /** 类型 */
  Type: string | null;
  /** 上次更新的时间 */
  LastTransitionTime: string | null;
  /** 上次更新的时间 */
  LastUpdateTime?: string | null;
}

/** 太极服务的调用信息 */
declare interface TJCallInfo {
  /** 调用地址 */
  HttpAddr?: string | null;
  /** token */
  Token?: string | null;
  /** 调用示例 */
  CallExample?: string | null;
}

/** 描述腾讯云标签 */
declare interface Tag {
  /** 标签键 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

/** Tag过滤参数 */
declare interface TagFilter {
  /** 标签键 */
  TagKey?: string;
  /** 多个标签值 */
  TagValues?: string[];
}

/** 五级标签 */
declare interface TextLabelDistributionDetailInfoFifthClass {
  /** 标签名称 */
  LabelValue?: string | null;
  /** 标签个数 */
  LabelCount?: number | null;
  /** 标签占比 */
  LabelPercentage?: number | null;
}

/** 一级标签 */
declare interface TextLabelDistributionDetailInfoFirstClass {
  /** 标签名称 */
  LabelValue?: string | null;
  /** 标签个数 */
  LabelCount?: number | null;
  /** 标签占比 */
  LabelPercentage?: number | null;
  /** 子标签分布 */
  ChildLabelList?: TextLabelDistributionDetailInfoSecondClass[] | null;
}

/** 四级标签 */
declare interface TextLabelDistributionDetailInfoFourthClass {
  /** 标签名称 */
  LabelValue?: string | null;
  /** 标签个数 */
  LabelCount?: number | null;
  /** 标签占比 */
  LabelPercentage?: number | null;
  /** 子标签分布 */
  ChildLabelList?: TextLabelDistributionDetailInfoFifthClass[] | null;
}

/** 二级标签 */
declare interface TextLabelDistributionDetailInfoSecondClass {
  /** 标签名称 */
  LabelValue?: string | null;
  /** 标签个数 */
  LabelCount?: number | null;
  /** 标签占比 */
  LabelPercentage?: number | null;
  /** 子标签分布 */
  ChildLabelList?: TextLabelDistributionDetailInfoThirdClass[] | null;
}

/** 三级标签 */
declare interface TextLabelDistributionDetailInfoThirdClass {
  /** 标签名称 */
  LabelValue?: string | null;
  /** 标签个数 */
  LabelCount?: number | null;
  /** 标签占比 */
  LabelPercentage?: number | null;
  /** 子标签分布 */
  ChildLabelList?: TextLabelDistributionDetailInfoFourthClass[] | null;
}

/** 文本标签 */
declare interface TextLabelDistributionInfo {
  /** 文本分类题目名称 */
  Theme?: string | null;
  /** 一级标签分布 */
  ClassLabelList?: TextLabelDistributionDetailInfoFirstClass[] | null;
}

/** 训练数据 */
declare interface TrainingDataPoint {
}

/** 训练指标 */
declare interface TrainingMetric {
  /** 指标名 */
  MetricName: string;
  /** 数据值 */
  Values: TrainingDataPoint[] | null;
  /** 上报的Epoch. 可能为空 */
  Epochs: TrainingDataPoint[] | null;
  /** 上报的Step. 可能为空 */
  Steps: TrainingDataPoint[] | null;
  /** 上报的TotalSteps. 可能为空 */
  TotalSteps: TrainingDataPoint[] | null;
}

/** 模型列表 */
declare interface TrainingModelDTO {
  /** 模型id */
  TrainingModelId?: string;
  /** 模型名称 */
  TrainingModelName?: string;
  /** 标签 */
  Tags?: Tag[] | null;
  /** 模型创建时间 */
  CreateTime?: string | null;
  /** 模型版本列表。默认不返回，仅在指定请求参数开启时返回。 */
  TrainingModelVersions?: TrainingModelVersionDTO[] | null;
}

/** 模型版本列表 */
declare interface TrainingModelVersionDTO {
  /** 模型id */
  TrainingModelId?: string;
  /** 模型版本id */
  TrainingModelVersionId?: string;
  /** 模型版本 */
  TrainingModelVersion?: string;
  /** 模型来源 */
  TrainingModelSource?: string;
  /** 创建时间 */
  TrainingModelCreateTime?: string;
  /** 创建人uin */
  TrainingModelCreator?: string;
  /** 算法框架 */
  AlgorithmFramework?: string;
  /** 推理环境 */
  ReasoningEnvironment?: string;
  /** 推理环境来源 */
  ReasoningEnvironmentSource?: string;
  /** 模型指标 */
  TrainingModelIndex?: string;
  /** 训练任务名称 */
  TrainingJobName?: string;
  /** 模型cos路径 */
  TrainingModelCosPath?: CosPathInfo;
  /** 模型名称 */
  TrainingModelName?: string;
  /** 训练任务id */
  TrainingJobId?: string;
  /** 自定义推理环境 */
  ReasoningImageInfo?: ImageInfo;
  /** 模型版本创建时间 */
  CreateTime?: string;
  /** 模型处理状态STATUS_SUCCESS：导入成功，STATUS_FAILED：导入失败 ，STATUS_RUNNING：导入中 */
  TrainingModelStatus?: string | null;
  /** 模型处理进度 */
  TrainingModelProgress?: number | null;
  /** 模型错误信息 */
  TrainingModelErrorMsg?: string | null;
  /** 模型格式 */
  TrainingModelFormat?: string | null;
  /** 模型版本类型 */
  VersionType?: string | null;
  /** GPU类型 */
  GPUType?: string | null;
  /** 模型自动清理开关 */
  AutoClean?: string | null;
  /** 模型清理周期 */
  ModelCleanPeriod?: number | null;
  /** 模型数量保留上限 */
  MaxReservedModels?: number | null;
  /** 模型热更新目录 */
  ModelHotUpdatePath?: CosPathInfo | null;
  /** 推理环境id */
  ReasoningEnvironmentId?: string | null;
  /** 训练任务版本 */
  TrainingJobVersion?: string | null;
  /** 训练偏好 */
  TrainingPreference?: string | null;
  /** 自动学习任务id */
  AutoMLTaskId?: string | null;
  /** 是否QAT模型 */
  IsQAT?: boolean | null;
}

/** 训练任务详情 */
declare interface TrainingTaskDetail {
  /** 训练任务ID */
  Id?: string;
  /** 训练任务名称 */
  Name?: string;
  /** 主账号uin */
  Uin?: string;
  /** 子账号uin */
  SubUin?: string;
  /** 地域 */
  Region?: string;
  /** 训练框架名称，eg：SPARK、PYSARK、TENSORFLOW、PYTORCH */
  FrameworkName?: string | null;
  /** 训练框架版本 */
  FrameworkVersion?: string | null;
  /** 框架运行环境 */
  FrameworkEnvironment?: string | null;
  /** 计费模式 */
  ChargeType?: string;
  /** 预付费专用资源组 */
  ResourceGroupId?: string | null;
  /** 资源配置 */
  ResourceConfigInfos?: ResourceConfigInfo[];
  /** 标签 */
  Tags?: Tag[] | null;
  /** 训练模式，eg：PS_WORKER、DDP、MPI、HOROVOD */
  TrainingMode?: string | null;
  /** 代码包 */
  CodePackagePath?: CosPathInfo;
  /** 启动命令信息 */
  StartCmdInfo?: StartCmdInfo;
  /** 数据来源，eg：DATASET、COS */
  DataSource?: string | null;
  /** 数据配置 */
  DataConfigs?: DataConfig[] | null;
  /** 调优参数 */
  TuningParameters?: string | null;
  /** 训练输出 */
  Output?: CosPathInfo;
  /** 是否上报日志 */
  LogEnable?: boolean;
  /** 日志配置 */
  LogConfig?: LogConfig | null;
  /** VPC ID */
  VpcId?: string | null;
  /** 子网ID */
  SubnetId?: string | null;
  /** 自定义镜像信息 */
  ImageInfo?: ImageInfo | null;
  /** 运行时长 */
  RuntimeInSeconds?: number | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 训练开始时间 */
  StartTime?: string | null;
  /** 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中 */
  ChargeStatus?: string;
  /** 最近一次实例ID */
  LatestInstanceId?: string | null;
  /** TensorBoard ID */
  TensorBoardId?: string | null;
  /** 备注 */
  Remark?: string | null;
  /** 失败原因 */
  FailureReason?: string | null;
  /** 更新时间 */
  UpdateTime?: string;
  /** 训练结束时间 */
  EndTime?: string | null;
  /** 计费金额信息，eg：2.00元/小时 (按量计费) */
  BillingInfo?: string | null;
  /** 预付费专用资源组名称 */
  ResourceGroupName?: string | null;
  /** 任务信息 */
  Message?: string | null;
  /** 任务状态，eg：STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成 */
  Status?: string;
  /** 回调地址 */
  CallbackUrl?: string | null;
}

/** 出参类型 */
declare interface TrainingTaskSetItem {
  /** 训练任务ID */
  Id?: string;
  /** 训练任务名称 */
  Name?: string;
  /** 框架名称 */
  FrameworkName?: string | null;
  /** 训练框架版本 */
  FrameworkVersion?: string | null;
  /** 框架运行环境 */
  FrameworkEnvironment?: string | null;
  /** 计费模式 */
  ChargeType?: string;
  /** 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中 */
  ChargeStatus?: string;
  /** 预付费专用资源组 */
  ResourceGroupId?: string | null;
  /** 资源配置 */
  ResourceConfigInfos?: ResourceConfigInfo[];
  /** 训练模式eg：PS_WORKER、DDP、MPI、HOROVOD */
  TrainingMode?: string | null;
  /** 任务状态，eg：STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成 */
  Status?: string;
  /** 运行时长 */
  RuntimeInSeconds?: number | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 训练开始时间 */
  StartTime?: string | null;
  /** 训练结束时间 */
  EndTime?: string | null;
  /** 训练输出 */
  Output?: CosPathInfo;
  /** 失败原因 */
  FailureReason?: string | null;
  /** 更新时间 */
  UpdateTime?: string;
  /** 计费金额信息，eg：2.00元/小时 (按量计费) */
  BillingInfo?: string;
  /** 预付费专用资源组名称 */
  ResourceGroupName?: string;
  /** 自定义镜像信息 */
  ImageInfo?: ImageInfo | null;
  /** 任务信息 */
  Message?: string | null;
  /** 标签配置 */
  Tags?: Tag[] | null;
  /** 回调地址 */
  CallbackUrl?: string | null;
}

/** 大模型生成Token统计 */
declare interface Usage {
  /** 生成的token数目 */
  CompletionTokens?: number | null;
  /** 输入的token数目 */
  PromptTokens?: number | null;
  /** 总共token数目 */
  TotalTokens?: number | null;
}

/** 外部挂载信息 */
declare interface VolumeMount {
  /** cfs的配置信息 */
  CFSConfig: CFSConfig;
  /** 挂载源类型，CFS、COS，默认为CFS */
  VolumeSourceType?: string;
}

/** 服务的权重 */
declare interface WeightEntry {
  /** 服务id */
  ServiceId: string;
  /** 流量权重值，同 ServiceGroup 下 总和应为 100 */
  Weight: number;
}

/** 工作负载的状态 */
declare interface WorkloadStatus {
  /** 当前实例数 */
  Replicas: number;
  /** 更新的实例数 */
  UpdatedReplicas: number;
  /** 就绪的实例数 */
  ReadyReplicas: number;
  /** 可用的实例数 */
  AvailableReplicas: number;
  /** 不可用的实例数 */
  UnavailableReplicas: number;
  /** Normal	正常运行中Abnormal	服务异常，例如容器启动失败等Waiting	服务等待中，例如容器下载镜像过程等Stopped 已停止 Pending 启动中Stopping 停止中 */
  Status: string;
  /** 工作负载的状况信息 */
  StatefulSetCondition?: StatefulSetCondition[];
  /** 工作负载历史的状况信息 */
  Conditions?: StatefulSetCondition[];
  /** 状态异常时，展示原因 */
  Reason?: string | null;
}

declare interface ChatCompletionRequest {
  /** 对话的目标模型ID。多行业多场景大模型在线体验聊天：tj_llm_clm-v1。自行部署的开源大模型聊天：部署的模型服务组ID，形如ms-xxyyzz。 */
  Model: string;
  /** 输入对话历史。旧的对话在前，数组中最后一项应该为这次的问题。 */
  Messages: Message[];
  /** 仅当模型为自行部署的开源大模型时生效。采样随机值，默认值为1.0，取值范围[0,2]。较高的值(如0.8)将使输出更加随机，而较低的值(如0.2)将使输出更加确定。建议仅修改此参数或TopP，但不建议两者都修改。 */
  Temperature?: number;
  /** 仅当模型为自行部署的开源大模型时生效。核采样，默认值为1，取值范围[0,1]。指的是预先设置一个概率界限 p，然后将所有可能生成的token，根据概率大小从高到低排列，依次选取。当这些选取的token的累积概率大于或等于 p 值时停止，然后从已经选取的token中进行采样，生成下一个token。例如top_p为0.1时意味着模型只考虑累积概率为10%的token。建议仅修改此参数或Temperature，不建议两者都修改。 */
  TopP?: number;
  /** 仅当模型为自行部署的开源大模型时生效。最大生成的token数目。默认为无限大。 */
  MaxTokens?: number;
}

declare interface ChatCompletionResponse {
  /** 部署好的服务Id */
  Model?: string;
  /** 本次问答的答案。 */
  Choices?: Choice[];
  /** 会话Id。 */
  Id?: string | null;
  /** token统计 */
  Usage?: Usage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchModelAccTasksRequest {
  /** 模型加速任务名称 */
  ModelAccTaskName: string;
  /** 批量模型加速任务 */
  BatchModelAccTasks: BatchModelAccTask[];
  /** 模型加速保存路径 */
  ModelOutputPath: CosPathInfo;
  /** 标签 */
  Tags?: Tag[];
  /** 优化级别(NO_LOSS/FP16/INT8)，默认FP16 */
  OptimizationLevel?: string;
  /** GPU卡类型(T4/V100/A10)，默认T4 */
  GPUType?: string;
  /** 专业参数设置 */
  HyperParameter?: HyperParameter;
}

declare interface CreateBatchModelAccTasksResponse {
  /** 模型优化任务ID列表 */
  ModelAccTaskIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchTaskRequest {
  /** 跑批任务名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头 */
  BatchTaskName: string;
  /** 计费模式，eg：PREPAID 包年包月；POSTPAID_BY_HOUR 按量计费 */
  ChargeType: string;
  /** 资源配置 */
  ResourceConfigInfo: ResourceConfigInfo;
  /** 结果输出 */
  Outputs: DataConfig[];
  /** 是否上报日志 */
  LogEnable: boolean;
  /** 工作类型 1:单次 2:周期 */
  JobType?: number;
  /** 任务周期描述 */
  CronInfo?: CronInfo;
  /** 包年包月资源组ID */
  ResourceGroupId?: string;
  /** 标签配置 */
  Tags?: Tag[];
  /** 服务对应的模型信息，有模型文件时需要填写 */
  ModelInfo?: ModelInfo;
  /** 自定义镜像信息 */
  ImageInfo?: ImageInfo;
  /** 代码包 */
  CodePackage?: CosPathInfo;
  /** 启动命令 */
  StartCmd?: string;
  /** 数据配置 */
  DataConfigs?: DataConfig[];
  /** 日志配置 */
  LogConfig?: LogConfig;
  /** VPC Id */
  VpcId?: string;
  /** 子网Id */
  SubnetId?: string;
  /** 备注 */
  Remark?: string;
  /** 任务执行结果回调URL，仅支持http和https。回调格式&内容详见: [TI-ONE 接口回调说明](https://cloud.tencent.com/document/product/851/84292) */
  CallbackUrl?: string;
}

declare interface CreateBatchTaskResponse {
  /** 跑批任务ID */
  BatchTaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDatasetRequest {
  /** 数据集名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头 */
  DatasetName: string;
  /** 数据集类型:TYPE_DATASET_TEXT，文本TYPE_DATASET_IMAGE，图片TYPE_DATASET_TABLE，表格TYPE_DATASET_OTHER，其他 */
  DatasetType: string;
  /** 数据源cos路径 */
  StorageDataPath: CosPathInfo;
  /** 数据集标签cos存储路径 */
  StorageLabelPath: CosPathInfo;
  /** 数据集标签 */
  DatasetTags?: Tag[];
  /** 数据集标注状态:STATUS_NON_ANNOTATED，未标注STATUS_ANNOTATED，已标注 */
  AnnotationStatus?: string;
  /** 标注类型:ANNOTATION_TYPE_CLASSIFICATION，图片分类ANNOTATION_TYPE_DETECTION，目标检测ANNOTATION_TYPE_SEGMENTATION，图片分割ANNOTATION_TYPE_TRACKING，目标跟踪 */
  AnnotationType?: string;
  /** 标注格式:ANNOTATION_FORMAT_TI，TI平台格式ANNOTATION_FORMAT_PASCAL，Pascal VocANNOTATION_FORMAT_COCO，COCOANNOTATION_FORMAT_FILE，文件目录结构 */
  AnnotationFormat?: string;
  /** 表头信息 */
  SchemaInfos?: SchemaInfo[];
  /** 数据是否存在表头 */
  IsSchemaExisted?: boolean;
  /** 导入文件粒度，按行或者按文件 */
  ContentType?: string;
}

declare interface CreateDatasetResponse {
  /** 数据集ID */
  DatasetId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateModelServiceRequest {
  /** 新增版本时需要填写 */
  ServiceGroupId?: string;
  /** 不超过60个字，仅支持英文、数字、下划线"_"、短横"-"，只能以英文、数字开头 */
  ServiceGroupName?: string;
  /** 模型服务的描述 */
  ServiceDescription?: string;
  /** 付费模式,有 PREPAID （包年包月）和 POSTPAID_BY_HOUR（按量付费） */
  ChargeType?: string;
  /** 预付费模式下所属的资源组id，同服务组下唯一 */
  ResourceGroupId?: string;
  /** 模型信息，需要挂载模型时填写 */
  ModelInfo?: ModelInfo;
  /** 镜像信息，配置服务运行所需的镜像地址等信息 */
  ImageInfo?: ImageInfo;
  /** 环境变量，可选参数，用于配置容器中的环境变量 */
  Env?: EnvVar[];
  /** 资源描述，指定包年包月模式下的cpu,mem,gpu等信息，后付费无需填写 */
  Resources?: ResourceInfo;
  /** 使用DescribeBillingSpecs接口返回的规格列表中的值，或者参考实例列表:TI.S.MEDIUM.POST	2C4GTI.S.LARGE.POST	4C8GTI.S.2XLARGE16.POST	8C16GTI.S.2XLARGE32.POST	8C32GTI.S.4XLARGE32.POST	16C32GTI.S.4XLARGE64.POST	16C64GTI.S.6XLARGE48.POST	24C48GTI.S.6XLARGE96.POST	24C96GTI.S.8XLARGE64.POST	32C64GTI.S.8XLARGE128.POST 32C128GTI.GN7.LARGE20.POST	4C20G T4*1/4TI.GN7.2XLARGE40.POST	10C40G T4*1/2TI.GN7.2XLARGE32.POST	8C32G T4*1TI.GN7.5XLARGE80.POST	20C80G T4*1TI.GN7.8XLARGE128.POST	32C128G T4*1TI.GN7.10XLARGE160.POST	40C160G T4*2TI.GN7.20XLARGE320.POST	80C320G T4*4 */
  InstanceType?: string;
  /** 扩缩容类型 支持：自动 - "AUTO", 手动 - "MANUAL",默认为MANUAL */
  ScaleMode?: string;
  /** 实例数量, 不同计费模式和调节模式下对应关系如下PREPAID 和 POSTPAID_BY_HOUR:手动调节模式下对应 实例数量自动调节模式下对应 基于时间的默认策略的实例数量HYBRID_PAID:后付费实例手动调节模式下对应 实例数量后付费实例自动调节模式下对应 时间策略的默认策略的实例数量 */
  Replicas?: number;
  /** 自动伸缩信息 */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
  /** 是否开启日志投递，开启后需填写配置投递到指定cls */
  LogEnable?: boolean;
  /** 日志配置，需要投递服务日志到指定cls时填写 */
  LogConfig?: LogConfig;
  /** 是否开启接口鉴权，开启后自动生成token信息，访问需要token鉴权 */
  AuthorizationEnable?: boolean;
  /** 腾讯云标签 */
  Tags?: Tag[];
  /** 是否新增版本 */
  NewVersion?: boolean;
  /** 定时任务配置，使用定时策略时填写 */
  CronScaleJobs?: CronScaleJob[];
  /** 自动伸缩策略配置 HPA : 通过HPA进行弹性伸缩 CRON 通过定时任务进行伸缩 */
  ScaleStrategy?: string;
  /** 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数 */
  HybridBillingPrepaidReplicas?: number;
  /** [AUTO_ML 自动学习，自动学习正式发布 AUTO_ML_FORMAL, DEFAULT 默认] */
  CreateSource?: string;
  /** 是否开启模型的热更新。默认不开启 */
  ModelHotUpdateEnable?: boolean;
  /** 定时停止配置 */
  ScheduledAction?: ScheduledAction;
  /** 挂载配置，目前只支持CFS */
  VolumeMount?: VolumeMount;
  /** 服务限速限流相关配置 */
  ServiceLimit?: ServiceLimit;
  /** 回调地址，用于回调创建服务状态信息，回调格式&内容详情见：[TI-ONE 接口回调说明](https://cloud.tencent.com/document/product/851/84292) */
  CallbackUrl?: string;
  /** 是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。 */
  ModelTurboEnable?: boolean;
  /** 服务分类 */
  ServiceCategory?: string;
  /** 服务的启动命令 */
  Command?: string;
  /** 是否开启TIONE内网访问外部 */
  ServiceEIP?: ServiceEIP;
}

declare interface CreateModelServiceResponse {
  /** 生成的模型服务 */
  Service?: Service | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNotebookImageRequest {
  /** 镜像信息 */
  ImageInfo: ImageInfo;
  /** notebook id */
  NotebookId: string;
  /** 要保存的kernel数组 */
  Kernels?: string[];
}

declare interface CreateNotebookImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNotebookRequest {
  /** 名称。不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头 */
  Name: string;
  /** 计算资源付费模式 ，可选值为：PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费 */
  ChargeType: string;
  /** 计算资源配置 */
  ResourceConf: ResourceConf;
  /** 是否上报日志 */
  LogEnable: boolean;
  /** 是否ROOT权限 */
  RootAccess: boolean;
  /** 是否自动停止 */
  AutoStopping: boolean;
  /** 是否访问公网 */
  DirectInternetAccess: boolean;
  /** 资源组ID(for预付费) */
  ResourceGroupId?: string;
  /** Vpc-Id */
  VpcId?: string;
  /** 子网Id */
  SubnetId?: string;
  /** 存储的类型。取值包含： FREE: 预付费的免费存储 CLOUD_PREMIUM： 高性能云硬盘 CLOUD_SSD： SSD云硬盘 CFS: CFS存储，包含NFS和turbo */
  VolumeSourceType?: string;
  /** 存储卷大小，单位GB */
  VolumeSizeInGB?: number;
  /** CFS存储的配置 */
  VolumeSourceCFS?: CFSConfig;
  /** 日志配置 */
  LogConfig?: LogConfig;
  /** 生命周期脚本的ID */
  LifecycleScriptId?: string;
  /** 默认GIT存储库的ID */
  DefaultCodeRepoId?: string;
  /** 其他GIT存储库的ID，最多3个 */
  AdditionalCodeRepoIds?: string[];
  /** 自动停止时间，单位小时 */
  AutomaticStopTime?: number;
  /** 标签配置 */
  Tags?: Tag[];
  /** 数据配置 */
  DataConfigs?: DataConfig[];
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像类型 */
  ImageType?: string;
  /** SSH配置信息 */
  SSHConfig?: SSHConfig;
}

declare interface CreateNotebookResponse {
  /** notebook标志 */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOptimizedModelRequest {
  /** 模型加速任务ID */
  ModelAccTaskId: string;
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreateOptimizedModelResponse {
  /** 模型ID */
  ModelId: string | null;
  /** 模型版本ID */
  ModelVersionId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTrainingModelRequest {
  /** 导入方式MODEL：导入新模型VERSION：导入新版本EXIST：导入现有版本 */
  ImportMethod: string;
  /** 推理环境来源（SYSTEM/CUSTOM） */
  ReasoningEnvironmentSource: string;
  /** 模型名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头 */
  TrainingModelName?: string;
  /** 标签配置 */
  Tags?: Tag[];
  /** 训练任务名称 */
  TrainingJobName?: string;
  /** 模型来源cos目录，以/结尾 */
  TrainingModelCosPath?: CosPathInfo;
  /** 算法框架 （PYTORCH/TENSORFLOW/DETECTRON2/PMML/MMDETECTION) */
  AlgorithmFramework?: string;
  /** 推理环境 */
  ReasoningEnvironment?: string;
  /** 训练指标，最多支持1000字符 */
  TrainingModelIndex?: string;
  /** 模型版本 */
  TrainingModelVersion?: string;
  /** 自定义推理环境 */
  ReasoningImageInfo?: ImageInfo;
  /** 模型移动方式（CUT/COPY） */
  ModelMoveMode?: string;
  /** 训练任务ID */
  TrainingJobId?: string;
  /** 模型ID（导入新模型不需要，导入新版本需要） */
  TrainingModelId?: string;
  /** 模型存储cos目录 */
  ModelOutputPath?: CosPathInfo;
  /** 模型来源 （JOB/COS） */
  TrainingModelSource?: string;
  /** 模型偏好 */
  TrainingPreference?: string;
  /** 自动学习任务ID（已废弃） */
  AutoMLTaskId?: string;
  /** 任务版本 */
  TrainingJobVersion?: string;
  /** 模型版本类型；枚举值：NORMAL(通用) ACCELERATE(加速)注意: 默认为NORMAL */
  ModelVersionType?: string;
  /** 模型格式 （PYTORCH/TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML/MMDETECTION/ONNX/HUGGING_FACE） */
  ModelFormat?: string;
  /** 推理镜像ID */
  ReasoningEnvironmentId?: string;
  /** 模型自动清理开关(true/false)，当前版本仅支持SAVED_MODEL格式模型 */
  AutoClean?: string;
  /** 模型数量保留上限(默认值为24个，上限为24，下限为1，步长为1) */
  MaxReservedModels?: number;
  /** 模型清理周期(默认值为1分钟，上限为1440，下限为1分钟，步长为1) */
  ModelCleanPeriod?: number;
  /** 是否QAT模型 */
  IsQAT?: boolean;
}

declare interface CreateTrainingModelResponse {
  /** 模型ID，TrainingModel ID */
  Id?: string;
  /** 模型版本ID */
  TrainingModelVersionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTrainingTaskRequest {
  /** 训练任务名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头 */
  Name: string;
  /** 计费模式，eg：PREPAID 包年包月（资源组）;POSTPAID_BY_HOUR 按量计费 */
  ChargeType: string;
  /** 资源配置，需填写对应算力规格ID和节点数量，算力规格ID查询接口为DescribeBillingSpecsPrice，eg：[{"Role":"WORKER", "InstanceType": "TI.S.MEDIUM.POST", "InstanceNum": 1}] */
  ResourceConfigInfos: ResourceConfigInfo[];
  /** 训练框架名称，通过DescribeTrainingFrameworks接口查询，eg：SPARK、PYSPARK、TENSORFLOW、PYTORCH */
  FrameworkName?: string;
  /** 训练框架版本，通过DescribeTrainingFrameworks接口查询，eg：1.15、1.9 */
  FrameworkVersion?: string;
  /** 训练框架环境，通过DescribeTrainingFrameworks接口查询，eg：tf1.15-py3.7-cpu、torch1.9-py3.8-cuda11.1-gpu */
  FrameworkEnvironment?: string;
  /** 预付费专用资源组ID，通过DescribeBillingResourceGroups接口查询 */
  ResourceGroupId?: string;
  /** 标签配置 */
  Tags?: Tag[];
  /** 自定义镜像信息 */
  ImageInfo?: ImageInfo;
  /** COS代码包路径 */
  CodePackagePath?: CosPathInfo;
  /** 启动命令信息，默认为sh start.sh */
  StartCmdInfo?: StartCmdInfo;
  /** 训练模式，通过DescribeTrainingFrameworks接口查询，eg：PS_WORKER、DDP、MPI、HOROVOD */
  TrainingMode?: string;
  /** 数据配置，依赖DataSource字段 */
  DataConfigs?: DataConfig[];
  /** VPC Id */
  VpcId?: string;
  /** 子网Id */
  SubnetId?: string;
  /** COS训练输出路径 */
  Output?: CosPathInfo;
  /** CLS日志配置 */
  LogConfig?: LogConfig;
  /** 调优参数 */
  TuningParameters?: string;
  /** 是否上报日志 */
  LogEnable?: boolean;
  /** 备注，最多500个字 */
  Remark?: string;
  /** 数据来源，eg：DATASET、COS、CFS、HDFS */
  DataSource?: string;
  /** 回调地址，用于创建/启动/停止训练任务的异步回调。回调格式&内容详见：[[TI-ONE接口回调说明]](https://cloud.tencent.com/document/product/851/84292) */
  CallbackUrl?: string;
}

declare interface CreateTrainingTaskResponse {
  /** 训练任务ID */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBatchTaskRequest {
  /** 跑批任务ID */
  BatchTaskId: string;
}

declare interface DeleteBatchTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDatasetRequest {
  /** 数据集id */
  DatasetId: string;
  /** 是否删除cos标签文件 */
  DeleteLabelEnable: boolean;
}

declare interface DeleteDatasetResponse {
  /** 删除的datasetId */
  DatasetId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteModelAccelerateTaskRequest {
  /** 模型加速任务ID */
  ModelAccTaskId: string;
}

declare interface DeleteModelAccelerateTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteModelServiceGroupRequest {
  /** 服务id */
  ServiceGroupId: string;
}

declare interface DeleteModelServiceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteModelServiceRequest {
  /** 服务id */
  ServiceId: string;
  /** 服务分类 */
  ServiceCategory?: string;
}

declare interface DeleteModelServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNotebookImageRecordRequest {
  /** 记录id */
  RecordId: string;
}

declare interface DeleteNotebookImageRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNotebookRequest {
  /** notebook id */
  Id: string;
}

declare interface DeleteNotebookResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTrainingModelRequest {
  /** 模型ID */
  TrainingModelId: string;
  /** 是否同步清理cos */
  EnableDeleteCos?: boolean;
  /** 删除模型类型，枚举值：NORMAL 普通，ACCELERATE 加速，不传则删除所有 */
  ModelVersionType?: string;
}

declare interface DeleteTrainingModelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTrainingModelVersionRequest {
  /** 模型版本ID */
  TrainingModelVersionId: string;
  /** 是否同步清理cos */
  EnableDeleteCos?: boolean;
}

declare interface DeleteTrainingModelVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTrainingTaskRequest {
  /** 训练任务ID */
  Id: string;
}

declare interface DeleteTrainingTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAPIConfigsRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列 */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CreateTime" "UpdateTime" */
  OrderField?: string;
  /** 分页参数，支持的分页过滤Name包括：["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId"] */
  Filters?: Filter[];
}

declare interface DescribeAPIConfigsResponse {
  /** 接口数量 */
  TotalCount: number | null;
  /** 接口详情 */
  Details: APIConfigDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchTaskInstancesRequest {
  /** 跑批任务id */
  BatchTaskId: string;
}

declare interface DescribeBatchTaskInstancesResponse {
  /** 实例集 */
  BatchInstances: BatchTaskInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchTaskRequest {
  /** 跑批任务ID */
  BatchTaskId: string;
}

declare interface DescribeBatchTaskResponse {
  /** 跑批任务详情 */
  BatchTaskDetail?: BatchTaskDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchTasksRequest {
  /** 过滤器，eg：[{ "Name": "Id", "Values": ["train-23091792777383936"] }]取值范围：Name（名称）：task1Id（task ID）：train-23091792777383936Status（状态）：STARTING / RUNNING / STOPPING / STOPPED / FAILED / SUCCEED / SUBMIT_FAILEDChargeType（计费类型）：PREPAID 包年包月 / POSTPAID_BY_HOUR 按量计费CHARGE_STATUS（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ ARREARS_STOP（欠费停止） */
  Filters?: Filter[];
  /** 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }] */
  TagFilters?: TagFilter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为10，最大为50 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC（升序排列）/ DESC（降序排列），默认为DESC */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CreateTime" "UpdateTime" */
  OrderField?: string;
}

declare interface DescribeBatchTasksResponse {
  /** 数量 */
  TotalCount?: number;
  /** 任务集 */
  BatchTaskSet?: BatchTaskSetItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillingResourceGroupsRequest {
  /** 资源组类型; 枚举值 TRAIN:训练 INFERENCE:推理 */
  Type: string;
  /** Filter.Name: 枚举值: ResourceGroupId (资源组id列表) ResourceGroupName (资源组名称列表)Filter.Values: 长度为1且Filter.Fuzzy=true时，支持模糊查询; 不为1时，精确查询每次请求的Filters的上限为5，Filter.Values的上限为100 */
  Filters?: Filter[];
  /** 标签过滤 */
  TagFilters?: TagFilter[];
  /** 偏移量，默认为0；分页查询起始位置，如：Limit为100，第一页Offset为0，第二页OffSet为100....即每页左边为闭区间 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为30;注意：小于0则默认为20；大于30则默认为30 */
  Limit?: number;
  /** 支持模糊查找资源组id和资源组名 */
  SearchWord?: string;
  /** 是否不展示节点列表; true: 不展示，false 展示；默认为false */
  DontShowInstanceSet?: boolean;
}

declare interface DescribeBillingResourceGroupsResponse {
  /** 资源组总数； 注意接口是分页拉取的，total是指资源组总数，不是本次返回中ResourceGroupSet数组的大小 */
  TotalCount: number;
  /** 资源组详情 */
  ResourceGroupSet: ResourceGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillingSpecsPriceRequest {
  /** 询价参数，支持批量询价 */
  SpecsParam: SpecUnit[];
}

declare interface DescribeBillingSpecsPriceResponse {
  /** 计费项价格，支持批量返回 */
  SpecsPrice?: SpecPrice[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillingSpecsRequest {
  /** 枚举值：TRAIN、NOTEBOOK、INFERENCE */
  TaskType: string;
  /** 付费模式：POSTPAID_BY_HOUR按量计费、PREPAID包年包月 */
  ChargeType: string;
  /** 资源类型：CALC 计算资源、CPU CPU资源、GPU GPU资源、CBS云硬盘 */
  ResourceType?: string;
}

declare interface DescribeBillingSpecsResponse {
  /** 计费项列表 */
  Specs?: Spec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatasetDetailStructuredRequest {
  /** 数据集ID */
  DatasetId: string;
  /** 偏移值 */
  Offset?: number;
  /** 返回数据条数，默认20，目前最大支持2000条数据 */
  Limit?: number;
}

declare interface DescribeDatasetDetailStructuredResponse {
  /** 数据总数 */
  TotalCount: number | null;
  /** 表格头信息 */
  ColumnNames: string[] | null;
  /** 表格内容 */
  RowItems: RowItem[] | null;
  /** 文本内容 */
  RowTexts: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatasetDetailUnstructuredRequest {
  /** 数据集ID */
  DatasetId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回个数，默认20，目前最大支持2000条数据 */
  Limit?: number;
  /** 标签过滤参数，对应标签值 */
  LabelList?: string[];
  /** 标注状态过滤参数:STATUS_ANNOTATED，已标注STATUS_NON_ANNOTATED，未标注STATUS_ALL，全部默认为STATUS_ALL */
  AnnotationStatus?: string;
  /** 数据集ID列表 */
  DatasetIds?: string[];
  /** 要筛选的文本分类场景标签信息 */
  TextClassificationLabels?: TextLabelDistributionInfo[];
}

declare interface DescribeDatasetDetailUnstructuredResponse {
  /** 已标注数据量 */
  AnnotatedTotalCount: number | null;
  /** 没有标注数据量 */
  NonAnnotatedTotalCount: number | null;
  /** 过滤数据总量 */
  FilterTotalCount: number | null;
  /** 过滤数据详情 */
  FilterLabelList: FilterLabelInfo[] | null;
  /** 数据文本行，默认返回前1000行 */
  RowTexts: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatasetsRequest {
  /** 数据集id列表 */
  DatasetIds?: string[];
  /** 数据集查询过滤条件，多个Filter之间的关系为逻辑与（AND）关系，过滤字段Filter.Name，类型为StringDatasetName，数据集名称DatasetScope，数据集范围，SCOPE_DATASET_PRIVATE或SCOPE_DATASET_PUBLIC */
  Filters?: Filter[];
  /** 标签过滤条件 */
  TagFilters?: TagFilter[];
  /** 排序值，支持Asc或Desc，默认Desc */
  Order?: string;
  /** 排序字段，支持CreateTime或UpdateTime，默认CreateTime */
  OrderField?: string;
  /** 偏移值 */
  Offset?: number;
  /** 返回数据个数，默认20，最大支持200 */
  Limit?: number;
}

declare interface DescribeDatasetsResponse {
  /** 数据集总量（名称维度） */
  TotalCount: number | null;
  /** 数据集按照数据集名称聚合的分组 */
  DatasetGroups: DatasetGroup[] | null;
  /** 数据集ID总量 */
  DatasetIdNums: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInferTemplatesRequest {
}

declare interface DescribeInferTemplatesResponse {
  /** 模板列表 */
  FrameworkTemplates: InferTemplateGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLatestTrainingMetricsRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DescribeLatestTrainingMetricsResponse {
  /** 任务ID */
  TaskId: string | null;
  /** 最近一次上报的训练指标.每个Metric中只有一个点的数据, 即len(Values) = len(Timestamps) = 1 */
  Metrics: TrainingMetric[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogsRequest {
  /** 查询哪个服务的事件（可选值为TRAIN, NOTEBOOK, INFER） */
  Service: string;
  /** 日志查询开始时间（RFC3339格式的时间字符串），默认值为当前时间的前一个小时 */
  StartTime?: string;
  /** 日志查询结束时间（RFC3339格式的时间字符串），默认值为当前时间 */
  EndTime?: string;
  /** 日志查询条数，默认值100，最大值100 */
  Limit?: number;
  /** 查询哪个Pod的日志（支持结尾通配符*) */
  PodName?: string;
  /** 排序方向（可选值为ASC, DESC ），默认为DESC */
  Order?: string;
  /** 按哪个字段排序（可选值为Timestamp），默认值为Timestamp */
  OrderField?: string;
  /** 日志查询上下文，查询下一页的时候需要回传这个字段，该字段来自本接口的返回 */
  Context?: string;
  /** 过滤条件注意: 1. Filter.Name：目前只支持Key（也就是按关键字过滤日志）2. Filter.Values：表示过滤日志的关键字；Values为多个的时候表示同时满足3. Filter. Negative和Filter. Fuzzy没有使用 */
  Filters?: Filter[];
}

declare interface DescribeLogsResponse {
  /** 分页的游标 */
  Context?: string | null;
  /** 日志数组 */
  Content?: LogIdentity[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelAccEngineVersionsRequest {
}

declare interface DescribeModelAccEngineVersionsResponse {
  /** 模型加速版本列表 */
  ModelAccEngineVersions: ModelAccEngineVersion[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelAccelerateTaskRequest {
  /** 模型加速任务ID */
  ModelAccTaskId: string;
}

declare interface DescribeModelAccelerateTaskResponse {
  /** 模型加速任务详情 */
  ModelAccelerateTask: ModelAccelerateTask | null;
  /** 模型加速时长，单位s */
  ModelAccRuntimeInSecond: number | null;
  /** 模型加速任务开始时间 */
  ModelAccStartTime: string | null;
  /** 模型加速任务结束时间 */
  ModelAccEndTime: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelAccelerateTasksRequest {
  /** 过滤器ModelAccTaskName 任务名称ModelSource 模型来源 */
  Filters?: Filter[];
  /** 排序字段，默认CreateTime */
  OrderField?: string;
  /** 排序方式：ASC/DESC，默认DESC */
  Order?: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回记录条数，默认10 */
  Limit?: number;
  /** 标签过滤 */
  TagFilters?: TagFilter[];
}

declare interface DescribeModelAccelerateTasksResponse {
  /** 模型加速任务列表 */
  ModelAccelerateTasks: ModelAccelerateTask[] | null;
  /** 任务总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServiceCallInfoRequest {
  /** 服务组id */
  ServiceGroupId: string;
  /** 服务分类 */
  ServiceCategory?: string;
}

declare interface DescribeModelServiceCallInfoResponse {
  /** 服务调用信息 */
  ServiceCallInfo?: ServiceCallInfo | null;
  /** 升级网关调用信息 */
  InferGatewayCallInfo?: InferGatewayCallInfo | null;
  /** 默认nginx网关的调用信息 */
  DefaultNginxGatewayCallInfo?: DefaultNginxGatewayCallInfo | null;
  /** 太极服务的调用信息 */
  TJCallInfo?: TJCallInfo | null;
  /** 内网调用信息 */
  IntranetCallInfo?: IntranetCallInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServiceGroupRequest {
  /** 服务组ID */
  ServiceGroupId: string;
  /** 服务分类 */
  ServiceCategory?: string;
}

declare interface DescribeModelServiceGroupResponse {
  /** 服务组信息 */
  ServiceGroup?: ServiceGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServiceGroupsRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列 */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CreateTime" "UpdateTime" */
  OrderField?: string;
  /** 分页参数，支持的分页过滤Name包括：["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId","Status","CreatedBy","ModelVersionId"] */
  Filters?: Filter[];
  /** 标签过滤参数 */
  TagFilters?: TagFilter[];
  /** 服务分类 */
  ServiceCategory?: string;
}

declare interface DescribeModelServiceGroupsResponse {
  /** 推理服务组数量。 */
  TotalCount?: number | null;
  /** 服务组信息 */
  ServiceGroups?: ServiceGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServiceHistoryRequest {
  /** 服务Id */
  ServiceId: string;
}

declare interface DescribeModelServiceHistoryResponse {
  /** 历史版本总数 */
  TotalCount: number | null;
  /** 服务版本 */
  ServiceHistory: ServiceHistory[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServiceHotUpdatedRequest {
  /** 镜像信息，配置服务运行所需的镜像地址等信息 */
  ImageInfo: ImageInfo;
  /** 模型信息，需要挂载模型时填写 */
  ModelInfo?: ModelInfo;
  /** 挂载信息 */
  VolumeMount?: VolumeMount;
}

declare interface DescribeModelServiceHotUpdatedResponse {
  /** 模型加速标志位.Allowed 允许模型加速. Forbidden 禁止模型加速 */
  ModelTurboFlag?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServiceRequest {
  /** 服务id */
  ServiceId: string;
  /** 服务分类 */
  ServiceCategory?: string;
}

declare interface DescribeModelServiceResponse {
  /** 服务信息 */
  Service?: Service;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServicesRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为20 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列 */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CreateTime" "UpdateTime" */
  OrderField?: string;
  /** 分页参数，支持的分页过滤Name包括：["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId","Status","CreatedBy","ModelId"] */
  Filters?: Filter[];
  /** 标签过滤参数 */
  TagFilters?: TagFilter[];
}

declare interface DescribeModelServicesResponse {
  /** 服务数量 */
  TotalCount: number | null;
  /** 无 */
  Services: Service[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookImageKernelsRequest {
  /** notebook id */
  NotebookId: string;
}

declare interface DescribeNotebookImageKernelsResponse {
  /** 镜像kernel数组 */
  Kernels?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookImageRecordsRequest {
  /** notebook id */
  NotebookId: string;
  /** 位移值 */
  Offset: number;
  /** 日志限制 */
  Limit: number;
  /** 状态筛选 */
  Filters?: Filter[];
}

declare interface DescribeNotebookImageRecordsResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 镜像保存记录 */
  NotebookImageRecords?: NotebookImageRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebookRequest {
  /** notebook id */
  Id: string;
}

declare interface DescribeNotebookResponse {
  /** 详情 */
  NotebookDetail: NotebookDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotebooksRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 每页返回的实例数，默认为10 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列。默认为DESC */
  Order?: string;
  /** 根据哪个字段排序，如：CreateTime、UpdateTime，默认为UpdateTime */
  OrderField?: string;
  /** 过滤器，eg：[{ "Name": "Id", "Values": ["nb-123456789"] }]取值范围Name（名称）：notebook1Id（notebook ID）：nb-123456789Status（状态）：Starting / Running / Stopped / Stopping / Failed / SubmitFailedChargeType（计费类型）：PREPAID（预付费）/ POSTPAID_BY_HOUR（后付费）ChargeStatus（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ BILLING_STORAGE（存储计费中）/ARREARS_STOP（欠费停止）DefaultCodeRepoId（默认代码仓库ID）：cr-123456789AdditionalCodeRepoId（关联代码仓库ID）：cr-123456789LifecycleScriptId（生命周期ID）：ls-12312312311312 */
  Filters?: Filter[];
  /** 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }] */
  TagFilters?: TagFilter[];
}

declare interface DescribeNotebooksResponse {
  /** 详情 */
  NotebookSet?: NotebookSetItem[] | null;
  /** 总条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingFrameworksRequest {
}

declare interface DescribeTrainingFrameworksResponse {
  /** 框架信息列表 */
  FrameworkInfos?: FrameworkInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingMetricsRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DescribeTrainingMetricsResponse {
  /** 任务ID */
  TaskId: string | null;
  /** 训练指标数据 */
  Data: CustomTrainingData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingModelVersionRequest {
  /** 模型版本ID */
  TrainingModelVersionId: string;
}

declare interface DescribeTrainingModelVersionResponse {
  /** 模型版本 */
  TrainingModelVersion: TrainingModelVersionDTO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingModelVersionsRequest {
  /** 模型ID */
  TrainingModelId: string;
  /** 过滤条件Filter.Name: 枚举值: TrainingModelVersionId (模型版本ID) ModelVersionType (模型版本类型) 其值支持: NORMAL(通用) ACCELERATE (加速) ModelFormat（模型格式）其值Filter.Values支持：TORCH_SCRIPT/PYTORCH/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML AlgorithmFramework (算法框架) 其值Filter.Values支持：TENSORFLOW/PYTORCH/DETECTRON2Filter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询每次请求的Filters的上限为10，Filter.Values的上限为100 */
  Filters?: Filter[];
}

declare interface DescribeTrainingModelVersionsResponse {
  /** 模型版本列表 */
  TrainingModelVersions?: TrainingModelVersionDTO[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingModelsRequest {
  /** 过滤器Filter.Name: 枚举值:keyword (模型名称)TrainingModelId (模型ID)ModelVersionType (模型版本类型) 其值Filter.Values支持: NORMAL(通用) ACCELERATE (加速)TrainingModelSource (模型来源) 其值Filter.Values支持： JOB/COSModelFormat（模型格式）其值Filter.Values支持：PYTORCH/TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML/MMDETECTION/ONNX/HUGGING_FACEFilter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询每次请求的Filters的上限为10，Filter.Values的上限为100Filter.Fuzzy取值：true/false，是否支持模糊匹配 */
  Filters?: Filter[];
  /** 排序字段，默认CreateTime */
  OrderField?: string;
  /** 排序方式，ASC/DESC，默认DESC */
  Order?: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回结果数量 */
  Limit?: number;
  /** 标签过滤 */
  TagFilters?: TagFilter[];
  /** 是否同时返回模型版本列表 */
  WithModelVersions?: boolean;
}

declare interface DescribeTrainingModelsResponse {
  /** 模型列表 */
  TrainingModels?: TrainingModelDTO[];
  /** 模型总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingTaskPodsRequest {
  /** 训练任务ID */
  Id: string;
}

declare interface DescribeTrainingTaskPodsResponse {
  /** pod名称列表 */
  PodNames?: string[];
  /** 数量 */
  TotalCount?: number;
  /** pod详细信息 */
  PodInfoList?: PodInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingTaskRequest {
  /** 训练任务ID */
  Id: string;
}

declare interface DescribeTrainingTaskResponse {
  /** 训练任务详情 */
  TrainingTaskDetail?: TrainingTaskDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrainingTasksRequest {
  /** 过滤器，eg：[{ "Name": "Id", "Values": ["train-23091792777383936"] }]取值范围：Name（名称）：task1Id（task ID）：train-23091792777383936Status（状态）：STARTING / RUNNING / STOPPING / STOPPED / FAILED / SUCCEED / SUBMIT_FAILEDChargeType（计费类型）：PREPAID（预付费）/ POSTPAID_BY_HOUR（后付费）CHARGE_STATUS（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ ARREARS_STOP（欠费停止） */
  Filters?: Filter[];
  /** 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }] */
  TagFilters?: TagFilter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为10，最大为50 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC（升序排列）/ DESC（降序排列），默认为DESC */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CreateTime" "UpdateTime" */
  OrderField?: string;
}

declare interface DescribeTrainingTasksResponse {
  /** 训练任务集 */
  TrainingTaskSet?: TrainingTaskSetItem[];
  /** 数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModelServicePartialConfigRequest {
  /** 在线推理服务Id，需已存在 */
  ServiceId: string;
  /** 更新后服务不重启，定时停止的配置 */
  ScheduledAction?: ScheduledAction;
  /** 更新后服务不重启，服务对应限流限频配置 */
  ServiceLimit?: ServiceLimit;
}

declare interface ModifyModelServicePartialConfigResponse {
  /** 被修改后的服务配置 */
  Service: Service;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModelServiceRequest {
  /** 服务id */
  ServiceId: string;
  /** 模型信息，需要挂载模型时填写 */
  ModelInfo?: ModelInfo;
  /** 镜像信息，配置服务运行所需的镜像地址等信息 */
  ImageInfo?: ImageInfo;
  /** 环境变量，可选参数，用于配置容器中的环境变量 */
  Env?: EnvVar[];
  /** 资源描述，指定预付费模式下的cpu,mem,gpu等信息，后付费无需填写 */
  Resources?: ResourceInfo;
  /** 使用DescribeBillingSpecs接口返回的规格列表中的值，或者参考实例列表:TI.S.MEDIUM.POST	2C4GTI.S.LARGE.POST	4C8GTI.S.2XLARGE16.POST	8C16GTI.S.2XLARGE32.POST	8C32GTI.S.4XLARGE32.POST	16C32GTI.S.4XLARGE64.POST	16C64GTI.S.6XLARGE48.POST	24C48GTI.S.6XLARGE96.POST	24C96GTI.S.8XLARGE64.POST	32C64GTI.S.8XLARGE128.POST 32C128GTI.GN7.LARGE20.POST	4C20G T4*1/4TI.GN7.2XLARGE40.POST	10C40G T4*1/2TI.GN7.2XLARGE32.POST	8C32G T4*1TI.GN7.5XLARGE80.POST	20C80G T4*1TI.GN7.8XLARGE128.POST	32C128G T4*1TI.GN7.10XLARGE160.POST	40C160G T4*2TI.GN7.20XLARGE320.POST	80C320G T4*4 */
  InstanceType?: string;
  /** 扩缩容类型 支持：自动 - "AUTO", 手动 - "MANUAL" */
  ScaleMode?: string;
  /** 实例数量, 不同计费模式和调节模式下对应关系如下PREPAID 和 POSTPAID_BY_HOUR:手动调节模式下对应 实例数量自动调节模式下对应 基于时间的默认策略的实例数量HYBRID_PAID:后付费实例手动调节模式下对应 实例数量后付费实例自动调节模式下对应 时间策略的默认策略的实例数量 */
  Replicas?: number;
  /** 自动伸缩信息 */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
  /** 是否开启日志投递，开启后需填写配置投递到指定cls */
  LogEnable?: boolean;
  /** 日志配置，需要投递服务日志到指定cls时填写 */
  LogConfig?: LogConfig;
  /** 特殊更新行为： "STOP": 停止, "RESUME": 重启, "SCALE": 扩缩容, 存在这些特殊更新行为时，会忽略其他更新字段 */
  ServiceAction?: string;
  /** 服务的描述 */
  ServiceDescription?: string;
  /** 自动伸缩策略 */
  ScaleStrategy?: string;
  /** 自动伸缩策略配置 HPA : 通过HPA进行弹性伸缩 CRON 通过定时任务进行伸缩 */
  CronScaleJobs?: CronScaleJob[];
  /** 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数, 若不填则默认为1 */
  HybridBillingPrepaidReplicas?: number;
  /** 是否开启模型的热更新。默认不开启 */
  ModelHotUpdateEnable?: boolean;
  /** 定时停止配置 */
  ScheduledAction?: ScheduledAction;
  /** 服务限速限流相关配置 */
  ServiceLimit?: ServiceLimit;
  /** 挂载配置，目前只支持CFS */
  VolumeMount?: VolumeMount;
  /** 是否开启模型的加速, 仅对StableDiffusion(动态加速)格式的模型有效。默认不开启 */
  ModelTurboEnable?: boolean;
  /** 服务的启动命令 */
  Command?: string;
  /** 是否开启TIONE内网访问外部 */
  ServiceEIP?: ServiceEIP;
}

declare interface ModifyModelServiceResponse {
  /** 生成的模型服务 */
  Service?: Service | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNotebookRequest {
  /** notebook id */
  Id: string;
  /** 名称 */
  Name: string;
  /** 计算资源付费模式 ，可选值为：PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费 */
  ChargeType: string;
  /** 计算资源配置 */
  ResourceConf: ResourceConf;
  /** 是否上报日志 */
  LogEnable: boolean;
  /** 是否自动停止 */
  AutoStopping: boolean;
  /** 是否访问公网 */
  DirectInternetAccess: boolean;
  /** 是否ROOT权限 */
  RootAccess: boolean;
  /** 资源组ID(for预付费) */
  ResourceGroupId?: string;
  /** Vpc-Id */
  VpcId?: string;
  /** 子网Id */
  SubnetId?: string;
  /** 存储卷大小，单位GB */
  VolumeSizeInGB?: number;
  /** 存储的类型。取值包含： FREE: 预付费的免费存储 CLOUD_PREMIUM： 高性能云硬盘 CLOUD_SSD： SSD云硬盘 CFS: CFS存储，包含NFS和turbo */
  VolumeSourceType?: string;
  /** CFS存储的配置 */
  VolumeSourceCFS?: CFSConfig;
  /** 日志配置 */
  LogConfig?: LogConfig;
  /** 生命周期脚本的ID */
  LifecycleScriptId?: string;
  /** 默认GIT存储库的ID */
  DefaultCodeRepoId?: string;
  /** 其他GIT存储库的ID，最多3个 */
  AdditionalCodeRepoIds?: string[];
  /** 自动停止时间，单位小时 */
  AutomaticStopTime?: number;
  /** 标签配置 */
  Tags?: Tag[];
  /** 数据配置 */
  DataConfigs?: DataConfig[];
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像类型 */
  ImageType?: string;
  /** SSH配置 */
  SSHConfig?: SSHConfig;
}

declare interface ModifyNotebookResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNotebookTagsRequest {
  /** Notebook Id */
  Id: string;
  /** Notebook修改标签集合 */
  Tags?: Tag[];
}

declare interface ModifyNotebookTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServiceGroupWeightsRequest {
  /** 服务组id */
  ServiceGroupId: string;
  /** 权重设置 */
  Weights: WeightEntry[];
}

declare interface ModifyServiceGroupWeightsResponse {
  /** 更新权重后的服务组信息 */
  ServiceGroup: ServiceGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PushTrainingMetricsRequest {
  /** 指标数据 */
  Data?: MetricData[];
}

declare interface PushTrainingMetricsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartModelAccelerateTaskRequest {
  /** 模型加速任务ID */
  ModelAccTaskId: string;
  /** 模型加速任务名称 */
  ModelAccTaskName?: string;
  /** 模型来源（JOB/COS） */
  ModelSource?: string;
  /** 算法框架（废弃） */
  AlgorithmFramework?: string;
  /** 模型ID */
  ModelId?: string;
  /** 模型名称 */
  ModelName?: string;
  /** 模型版本 */
  ModelVersion?: string;
  /** 模型输入cos路径 */
  ModelInputPath?: CosPathInfo;
  /** 优化级别（NO_LOSS/FP16/INT8），默认FP16 */
  OptimizationLevel?: string;
  /** input节点个数（废弃） */
  ModelInputNum?: number;
  /** input节点信息（废弃） */
  ModelInputInfos?: ModelInputInfo[];
  /** 模型输出cos路径 */
  ModelOutputPath?: CosPathInfo;
  /** 模型格式（TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/MMDETECTION/ONNX/HUGGING_FACE） */
  ModelFormat?: string;
  /** 模型Tensor信息 */
  TensorInfos?: string[];
  /** GPU类型（T4/V100/A10），默认T4 */
  GPUType?: string;
  /** 模型专业参数 */
  HyperParameter?: HyperParameter;
  /** 加速引擎版本 */
  AccEngineVersion?: string;
  /** 标签 */
  Tags?: Tag[];
  /** SavedModel保存时配置的签名 */
  ModelSignature?: string;
  /** 加速引擎对应的框架版本 */
  FrameworkVersion?: string;
}

declare interface RestartModelAccelerateTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendChatMessageRequest {
  /** 会话id，标识一组对话的唯一id，id变更则重置会话 */
  SessionId: string;
  /** 问题描述 */
  Question: string;
  /** 会话模型版本。多行业多场景大模型：填写 tj_llm_clm-v1。多行业客服大模型：填写demo_big_model_version_id。默认为demo_big_model_version_id，即多行业客服大模型。 */
  ModelVersion?: string;
  /** 使用模式(仅多场景客服大模型支持)。通用问答：填写General。搜索增强问答：填写WithSearchPlugin。默认为General，即通用问答。 */
  Mode?: string;
  /** 搜索来源。仅当Mode为WithSearchPlugin时生效。预置文稿库：填写Preset。自定义：填写Custom。 */
  SearchSource?: string;
}

declare interface SendChatMessageResponse {
  /** 答案 */
  Answer?: string;
  /** 会话id,返回请求的会话id */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartNotebookRequest {
  /** notebook id */
  Id: string;
}

declare interface StartNotebookResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartTrainingTaskRequest {
  /** 训练任务ID */
  Id: string;
}

declare interface StartTrainingTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopBatchTaskRequest {
  /** 跑批任务ID */
  BatchTaskId: string;
}

declare interface StopBatchTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCreatingImageRequest {
  /** 镜像保存记录ID */
  RecordId: string;
}

declare interface StopCreatingImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopModelAccelerateTaskRequest {
  /** 模型加速任务ID */
  ModelAccTaskId: string;
}

declare interface StopModelAccelerateTaskResponse {
  /** 模型加速任务ID */
  ModelAccTaskId: string | null;
  /** 异步任务ID */
  AsyncTaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopNotebookRequest {
  /** notebook id */
  Id: string;
}

declare interface StopNotebookResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopTrainingTaskRequest {
  /** 训练任务ID */
  Id: string;
}

declare interface StopTrainingTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20191022 {
  type VersionHeader = { headers: { 'X-TC-Version': '2019-10-22' } }

  /** 算法配置 */
  interface AlgorithmSpecification {
    /** 镜像名字 */
    TrainingImageName?: string | null;
    /** 输入模式File|Pipe */
    TrainingInputMode?: string | null;
    /** 算法名字 */
    AlgorithmName?: string | null;
  }

  /** 计费标签 */
  interface BillingLabel {
    /** 计费项标识 */
    Label: string | null;
    /** 存储大小 */
    VolumeSize: number;
    /** 计费状态None: 不计费StorageOnly: 仅存储计费Computing: 计算和存储都计费 */
    Status: string;
  }

  /** 接入CLS服务的配置 */
  interface ClsConfig {
    /** 接入类型，可选项为free、customer */
    Type: string;
    /** 自定义CLS的日志集ID，只有当Type为customer时生效 */
    LogSetId?: string;
    /** 自定义CLS的日志主题ID，只有当Type为customer时生效 */
    TopicId?: string;
  }

  /** 存储库列表 */
  interface CodeRepoSummary {
    /** 创建时间 */
    CreationTime: string;
    /** 更新时间 */
    LastModifiedTime: string;
    /** 存储库名称 */
    CodeRepositoryName: string;
    /** Git配置 */
    GitConfig: GitConfig;
    /** 是否有Git凭证 */
    NoSecret: boolean;
  }

  /** cos路径 */
  interface CosDataSource {
    /** cos桶 */
    Bucket: string | null;
    /** cos文件key */
    KeyPrefix: string | null;
    /** 分布式数据下载方式 */
    DataDistributionType: string | null;
    /** 数据类型 */
    DataType: string | null;
  }

  /** 数据源 */
  interface DataSource {
    /** cos数据源 */
    CosDataSource?: CosDataSource | null;
    /** 文件系统输入源 */
    FileSystemDataSource?: FileSystemDataSource | null;
  }

  /** 环境变量 */
  interface EnvConfig {
    /** 名称 */
    Name: string;
    /** 值 */
    Value: string;
  }

  /** 文件系统输入数据源 */
  interface FileSystemDataSource {
    /** 文件系统目录 */
    DirectoryPath?: string | null;
    /** 文件系统类型 */
    FileSystemType?: string | null;
    /** 文件系统访问模式 */
    FileSystemAccessMode?: string | null;
    /** 文件系统ID */
    FileSystemId?: string | null;
  }

  /** 过滤器 */
  interface Filter {
    /** 过滤字段名称 */
    Name?: string;
    /** 过滤字段取值 */
    Values?: string[];
  }

  /** 存储库Git相关配置 */
  interface GitConfig {
    /** git地址 */
    RepositoryUrl: string;
    /** 代码分支 */
    Branch?: string | null;
  }

  /** Git凭证 */
  interface GitSecret {
    /** 无秘钥，默认选项 */
    NoSecret?: boolean;
    /** Git用户名密码base64编码后的字符串编码前的内容应为Json字符串，如{"UserName": "用户名", "Password":"密码"} */
    Secret?: string;
  }

  /** 输入数据配置 */
  interface InputDataConfig {
    /** 通道名 */
    ChannelName?: string | null;
    /** 数据源配置 */
    DataSource?: DataSource | null;
    /** 输入类型 */
    InputMode?: string | null;
    /** 文件类型 */
    ContentType?: string | null;
  }

  /** 模型输出 */
  interface ModelArtifacts {
    /** cos输出路径 */
    CosModelArtifacts: string | null;
  }

  /** notebook实例概览 */
  interface NotebookInstanceSummary {
    /** 创建时间 */
    CreationTime: string | null;
    /** 最近修改时间 */
    LastModifiedTime: string | null;
    /** notebook实例名字 */
    NotebookInstanceName: string | null;
    /** notebook实例状态，取值范围：Pending: 创建中Inservice: 运行中Stopping: 停止中Stopped: 已停止Failed: 失败 */
    NotebookInstanceStatus: string | null;
    /** 算力类型 */
    InstanceType: string | null;
    /** 实例ID */
    InstanceId: string | null;
    /** 启动时间 */
    StartupTime: string | null;
    /** 运行截止时间 */
    Deadline: string | null;
    /** 自动停止配置 */
    StoppingCondition: StoppingCondition | null;
    /** 是否是预付费实例 */
    Prepay: boolean | null;
    /** 计费标识 */
    BillingLabel: BillingLabel | null;
    /** 运行时长，秒 */
    RuntimeInSeconds: number | null;
    /** 剩余时长，秒 */
    RemainTimeInSeconds: number | null;
  }

  /** notebook生命周期脚本实例概览 */
  interface NotebookLifecycleScriptsSummary {
    /** notebook生命周期脚本名称 */
    NotebookLifecycleScriptsName: string;
    /** 创建时间 */
    CreationTime: string;
    /** 修改时间 */
    LastModifiedTime: string;
  }

  /** 输出数据配置 */
  interface OutputDataConfig {
    /** cos输出桶 */
    CosOutputBucket?: string | null;
    /** cos输出key前缀 */
    CosOutputKeyPrefix?: string | null;
    /** 文件系统输出，如果指定了文件系统，那么Cos输出会被忽略 */
    FileSystemDataSource?: FileSystemDataSource | null;
  }

  /** 计算资源配置 */
  interface ResourceConfig {
    /** 计算实例数量 */
    InstanceCount: number | null;
    /** 计算实例类型 */
    InstanceType: string | null;
    /** 挂载CBS大小（GB） */
    VolumeSizeInGB?: number | null;
  }

  /** 二级状态流水 */
  interface SecondaryStatusTransition {
    /** 状态开始时间 */
    StartTime: string | null;
    /** 状态结束时间 */
    EndTime: string | null;
    /** 状态名 */
    Status: string | null;
    /** 状态详情 */
    StatusMessage: string | null;
  }

  /** 终止条件 */
  interface StoppingCondition {
    /** 最长运行运行时间（秒） */
    MaxRuntimeInSeconds?: number | null;
    /** 最长等待运行时间（秒） */
    MaxWaitTimeInSeconds?: number | null;
  }

  /** 训练任务概要 */
  interface TrainingJobSummary {
    /** 任务创建时间 */
    CreationTime: string | null;
    /** 最近修改时间 */
    LastModifiedTime: string | null;
    /** 训练任务名 */
    TrainingJobName: string | null;
    /** 训练任务状态，取值范围InProgress：运行中Completed: 已完成Failed: 失败Stopping: 停止中Stopped：已停止 */
    TrainingJobStatus: string | null;
    /** 完成时间 */
    TrainingEndTime: string | null;
    /** 算了实例Id */
    InstanceId: string | null;
    /** 资源配置 */
    ResourceConfig: ResourceConfig | null;
  }

  /** VPC配置 */
  interface VpcConfig {
    /** 安全组id */
    SecurityGroupIds: string[] | null;
    /** 子网id */
    SubnetId: string | null;
  }

  interface CreateCodeRepositoryRequest {
    /** 存储库名称 */
    CodeRepositoryName: string;
    /** Git相关配置 */
    GitConfig: GitConfig;
    /** Git凭证 */
    GitSecret: GitSecret;
  }

  interface CreateCodeRepositoryResponse {
    /** 存储库名称 */
    CodeRepositoryName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateNotebookInstanceRequest {
    /** Notebook实例名称，不能超过63个字符规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$” */
    NotebookInstanceName: string;
    /** Notebook算力类型参考https://cloud.tencent.com/document/product/851/41239 */
    InstanceType: string;
    /** 数据卷大小(GB)用户持久化Notebook实例的数据 */
    VolumeSizeInGB: number;
    /** 外网访问权限，可取值Enabled/Disabled开启后，Notebook实例可以具有访问外网80，443端口的权限 */
    DirectInternetAccess?: string;
    /** Root用户权限，可取值Enabled/Disabled开启后，Notebook实例可以切换至root用户执行命令 */
    RootAccess?: string;
    /** 子网ID如果需要Notebook实例访问VPC内的资源，则需要选择对应的子网 */
    SubnetId?: string;
    /** 生命周期脚本名称必须是已存在的生命周期脚本，具体参考https://cloud.tencent.com/document/product/851/43140 */
    LifecycleScriptsName?: string;
    /** 默认存储库名称可以是已创建的存储库名称或者已https://开头的公共git库参考https://cloud.tencent.com/document/product/851/43139 */
    DefaultCodeRepository?: string;
    /** 其他存储库列表每个元素可以是已创建的存储库名称或者已https://开头的公共git库参考https://cloud.tencent.com/document/product/851/43139 */
    AdditionalCodeRepositories?: string[];
    /** 已弃用，请使用ClsConfig配置。是否开启CLS日志服务，可取值Enabled/Disabled，默认为Disabled开启后，Notebook运行的日志会收集到CLS中，CLS会产生费用，请根据需要选择 */
    ClsAccess?: string;
    /** 自动停止配置选择定时停止Notebook实例 */
    StoppingCondition?: StoppingCondition;
    /** 自动停止，可取值Enabled/Disabled取值为Disabled的时候StoppingCondition将被忽略取值为Enabled的时候读取StoppingCondition作为自动停止的配置 */
    AutoStopping?: string;
    /** 接入日志的配置，默认接入免费日志 */
    ClsConfig?: ClsConfig;
  }

  interface CreateNotebookInstanceResponse {
    /** Notebook实例名字 */
    NotebookInstanceName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateNotebookLifecycleScriptRequest {
    /** Notebook生命周期脚本名称 */
    NotebookLifecycleScriptsName: string;
    /** 创建脚本，base64编码base64后的脚本长度不能超过16384个字符 */
    CreateScript?: string;
    /** 启动脚本，base64编码base64后的脚本长度不能超过16384个字符 */
    StartScript?: string;
  }

  interface CreateNotebookLifecycleScriptResponse {
    /** 生命周期脚本名称 */
    NotebookLifecycleScriptsName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePresignedNotebookInstanceUrlRequest {
    /** Notebook实例名称规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$” */
    NotebookInstanceName: string;
    /** session有效时间，秒，取值范围[1800, 43200] */
    SessionExpirationDurationInSeconds?: number;
  }

  interface CreatePresignedNotebookInstanceUrlResponse {
    /** 授权url */
    AuthorizedUrl?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTrainingJobRequest {
    /** 算法镜像配置 */
    AlgorithmSpecification: AlgorithmSpecification;
    /** 输出数据配置 */
    OutputDataConfig: OutputDataConfig;
    /** 资源实例配置 */
    ResourceConfig: ResourceConfig;
    /** 训练任务名称 */
    TrainingJobName: string;
    /** 输入数据配置 */
    InputDataConfig?: InputDataConfig[];
    /** 中止条件 */
    StoppingCondition?: StoppingCondition;
    /** 私有网络配置 */
    VpcConfig?: VpcConfig;
    /** 算法超级参数 */
    HyperParameters?: string;
    /** 环境变量配置 */
    EnvConfig?: EnvConfig[];
    /** 角色名称 */
    RoleName?: string;
    /** 在资源不足（ResourceInsufficient）时后台不定时尝试重新创建训练任务。可取值Enabled/Disabled默认值为Disabled即不重新尝试。设为Enabled时重新尝试有一定的时间期限，定义在 StoppingCondition 中 MaxWaitTimeInSecond中 ，默认值为1天，超过该期限创建失败。 */
    RetryWhenResourceInsufficient?: string;
  }

  interface CreateTrainingJobResponse {
    /** 训练任务名称 */
    TrainingJobName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteCodeRepositoryRequest {
    /** 存储库名称 */
    CodeRepositoryName: string;
  }

  interface DeleteCodeRepositoryResponse {
    /** 存储库名称 */
    CodeRepositoryName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteNotebookInstanceRequest {
    /** Notebook实例名称 */
    NotebookInstanceName: string;
  }

  interface DeleteNotebookInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteNotebookLifecycleScriptRequest {
    /** 生命周期脚本名称 */
    NotebookLifecycleScriptsName: string;
    /** 是否忽略已关联的 notebook 实例强行删除生命周期脚本，默认 false */
    Forcible?: boolean;
  }

  interface DeleteNotebookLifecycleScriptResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCodeRepositoriesRequest {
    /** 偏移量，默认为0 */
    Offset?: number;
    /** 返回数量，默认为20 */
    Limit?: number;
    /** 过滤条件。instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。 */
    Filters?: Filter[];
    /** 排序规则。默认取DescendingDescending 按更新时间降序Ascending 按更新时间升序 */
    SortOrder?: string;
  }

  interface DescribeCodeRepositoriesResponse {
    /** 存储库总数目 */
    TotalCount?: number;
    /** 存储库列表 */
    CodeRepoSet?: CodeRepoSummary[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCodeRepositoryRequest {
    /** 存储库名称 */
    CodeRepositoryName: string;
  }

  interface DescribeCodeRepositoryResponse {
    /** 创建时间 */
    CreationTime?: string;
    /** 更新时间 */
    LastModifiedTime?: string;
    /** 存储库名称 */
    CodeRepositoryName?: string;
    /** Git存储配置 */
    GitConfig?: GitConfig;
    /** 是否有Git凭证 */
    NoSecret?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNotebookInstanceRequest {
    /** Notebook实例名称规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$” */
    NotebookInstanceName: string;
  }

  interface DescribeNotebookInstanceResponse {
    /** Notebook实例名称 */
    NotebookInstanceName?: string;
    /** Notebook算力资源类型 */
    InstanceType?: string | null;
    /** 角色的资源描述 */
    RoleArn?: string | null;
    /** 外网访问权限 */
    DirectInternetAccess?: string | null;
    /** Root用户权限 */
    RootAccess?: string | null;
    /** 子网ID */
    SubnetId?: string | null;
    /** 数据卷大小(GB) */
    VolumeSizeInGB?: number | null;
    /** 创建失败原因 */
    FailureReason?: string | null;
    /** Notebook实例创建时间 */
    CreationTime?: string | null;
    /** Notebook实例最近修改时间 */
    LastModifiedTime?: string | null;
    /** Notebook实例日志链接 */
    LogUrl?: string | null;
    /** Notebook实例状态Pending: 创建中Inservice: 运行中Stopping: 停止中Stopped: 已停止Failed: 失败 */
    NotebookInstanceStatus?: string | null;
    /** Notebook实例ID */
    InstanceId?: string | null;
    /** notebook生命周期脚本名称 */
    LifecycleScriptsName?: string | null;
    /** 默认存储库名称可以是已创建的存储库名称或者已https://开头的公共git库 */
    DefaultCodeRepository?: string | null;
    /** 其他存储库列表每个元素可以是已创建的存储库名称或者已https://开头的公共git库 */
    AdditionalCodeRepositories?: string[] | null;
    /** 是否开启CLS日志服务 */
    ClsAccess?: string | null;
    /** 是否预付费实例 */
    Prepay?: boolean | null;
    /** 实例运行截止时间 */
    Deadline?: string | null;
    /** 自动停止配置 */
    StoppingCondition?: StoppingCondition | null;
    /** Cls配置 */
    ClsConfig?: ClsConfig | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNotebookInstancesRequest {
    /** 偏移量 */
    Offset?: number;
    /** 限制数目 */
    Limit?: number;
    /** 排序规则。默认取DescendingDescending 按更新时间降序Ascending 按更新时间升序 */
    SortOrder?: string;
    /** 过滤条件。instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。lifecycle-name - String - 是否必填：否 -（过滤条件）按照生命周期脚本名称过滤。default-code-repo-name - String - 是否必填：否 -（过滤条件）按照默认存储库名称过滤。additional-code-repo-name - String - 是否必填：否 -（过滤条件）按照其他存储库名称过滤。billing-status - String - 是否必填：否 - （过滤条件）按照计费状态过滤，可取以下值 StorageOnly：仅存储计费的实例 Computing：计算和存储都计费的实例 */
    Filters?: Filter[];
    /** 【废弃字段】排序字段 */
    SortBy?: string;
  }

  interface DescribeNotebookInstancesResponse {
    /** Notebook实例列表 */
    NotebookInstanceSet?: NotebookInstanceSummary[];
    /** Notebook实例总数目 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNotebookLifecycleScriptRequest {
    /** 生命周期脚本名称 */
    NotebookLifecycleScriptsName: string;
  }

  interface DescribeNotebookLifecycleScriptResponse {
    /** 生命周期脚本名称 */
    NotebookLifecycleScriptsName?: string;
    /** 创建脚本 */
    CreateScript?: string | null;
    /** 启动脚本 */
    StartScript?: string | null;
    /** 创建时间 */
    CreationTime?: string;
    /** 最后修改时间 */
    LastModifiedTime?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNotebookLifecycleScriptsRequest {
    /** 偏移量，默认为0 */
    Offset?: number;
    /** 返回数量，默认为20 */
    Limit?: number;
    /** 过滤条件。instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。 */
    Filters?: Filter[];
    /** 排序规则。默认取DescendingDescending 按更新时间降序Ascending 按更新时间升序 */
    SortOrder?: string;
  }

  interface DescribeNotebookLifecycleScriptsResponse {
    /** Notebook生命周期脚本列表 */
    NotebookLifecycleScriptsSet?: NotebookLifecycleScriptsSummary[];
    /** Notebook生命周期脚本总数量 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNotebookSummaryRequest {
  }

  interface DescribeNotebookSummaryResponse {
    /** 实例总数 */
    AllInstanceCnt?: number;
    /** 计费实例总数 */
    BillingInstanceCnt?: number;
    /** 仅存储计费的实例总数 */
    StorageOnlyBillingInstanceCnt?: number;
    /** 计算和存储都计费的实例总数 */
    ComputingBillingInstanceCnt?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTrainingJobRequest {
    /** 训练任务名称 */
    TrainingJobName: string;
  }

  interface DescribeTrainingJobResponse {
    /** 算法镜像配置 */
    AlgorithmSpecification?: AlgorithmSpecification;
    /** 任务名称 */
    TrainingJobName?: string;
    /** 算法超级参数 */
    HyperParameters?: string | null;
    /** 输入数据配置 */
    InputDataConfig?: InputDataConfig[];
    /** 输出数据配置 */
    OutputDataConfig?: OutputDataConfig;
    /** 中止条件 */
    StoppingCondition?: StoppingCondition | null;
    /** 计算实例配置 */
    ResourceConfig?: ResourceConfig;
    /** 私有网络配置 */
    VpcConfig?: VpcConfig | null;
    /** 失败原因 */
    FailureReason?: string | null;
    /** 最近修改时间 */
    LastModifiedTime?: string;
    /** 任务开始时间 */
    TrainingStartTime?: string | null;
    /** 任务完成时间 */
    TrainingEndTime?: string | null;
    /** 模型输出配置 */
    ModelArtifacts?: ModelArtifacts | null;
    /** 详细状态，取值范围Starting：启动中Downloading: 准备训练数据Training: 正在训练Uploading: 上传训练结果Completed：已完成Failed: 失败MaxRuntimeExceeded: 任务超过最大运行时间Stopping: 停止中Stopped：已停止 */
    SecondaryStatus?: string;
    /** 详细状态事件记录 */
    SecondaryStatusTransitions?: SecondaryStatusTransition[] | null;
    /** 角色名称 */
    RoleName?: string | null;
    /** 训练任务状态，取值范围InProgress：运行中Completed: 已完成Failed: 失败Stopping: 停止中Stopped：已停止 */
    TrainingJobStatus?: string;
    /** 训练任务日志链接 */
    LogUrl?: string | null;
    /** 训练任务实例ID */
    InstanceId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTrainingJobsRequest {
    /** 偏移量 */
    Offset?: number;
    /** 限制数目 */
    Limit?: number;
    /** 创建时间晚于 */
    CreationTimeAfter?: string;
    /** 创建时间早于 */
    CreationTimeBefore?: string;
    /** 根据名称过滤 */
    NameContains?: string;
    /** 根据状态过滤 */
    StatusEquals?: string;
    /** 过滤条件。instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。 */
    Filters?: Filter[];
  }

  interface DescribeTrainingJobsResponse {
    /** 训练任务列表 */
    TrainingJobSet?: TrainingJobSummary[];
    /** 训练任务总数目 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StartNotebookInstanceRequest {
    /** Notebook实例名称 */
    NotebookInstanceName: string;
    /** 自动停止，可取值Enabled/Disabled取值为Disabled的时候StoppingCondition将被忽略取值为Enabled的时候读取StoppingCondition作为自动停止的配置 */
    AutoStopping?: string;
    /** 自动停止配置，只在AutoStopping为Enabled的时候生效 */
    StoppingCondition?: StoppingCondition;
  }

  interface StartNotebookInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StopNotebookInstanceRequest {
    /** Notebook实例名称 */
    NotebookInstanceName: string;
  }

  interface StopNotebookInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StopTrainingJobRequest {
    /** 训练任务名称 */
    TrainingJobName: string;
  }

  interface StopTrainingJobResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateCodeRepositoryRequest {
    /** 查询存储库名称 */
    CodeRepositoryName: string;
    /** Git凭证 */
    GitSecret?: GitSecret;
  }

  interface UpdateCodeRepositoryResponse {
    /** 存储库名称 */
    CodeRepositoryName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateNotebookInstanceRequest {
    /** Notebook实例名称规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$” */
    NotebookInstanceName: string;
    /** 角色的资源描述 */
    RoleArn?: string;
    /** Root访问权限 */
    RootAccess?: string;
    /** 数据卷大小(GB) */
    VolumeSizeInGB?: number;
    /** 算力资源类型 */
    InstanceType?: string;
    /** notebook生命周期脚本名称 */
    LifecycleScriptsName?: string;
    /** 是否解绑生命周期脚本，默认 false。该值为true时，LifecycleScriptsName将被忽略 */
    DisassociateLifecycleScript?: boolean;
    /** 默认存储库名称可以是已创建的存储库名称或者已https://开头的公共git库 */
    DefaultCodeRepository?: string;
    /** 其他存储库列表每个元素可以是已创建的存储库名称或者已https://开头的公共git库 */
    AdditionalCodeRepositories?: string[];
    /** 是否取消关联默认存储库，默认false该值为true时，DefaultCodeRepository将被忽略 */
    DisassociateDefaultCodeRepository?: boolean;
    /** 是否取消关联其他存储库，默认false该值为true时，AdditionalCodeRepositories将被忽略 */
    DisassociateAdditionalCodeRepositories?: boolean;
    /** 已弃用，请使用ClsConfig配置。是否开启CLS日志服务，可取值Enabled/Disabled */
    ClsAccess?: string;
    /** 自动停止，可取值Enabled/Disabled取值为Disabled的时候StoppingCondition将被忽略取值为Enabled的时候读取StoppingCondition作为自动停止的配置 */
    AutoStopping?: string;
    /** 自动停止配置，只在AutoStopping为Enabled的时候生效 */
    StoppingCondition?: StoppingCondition;
    /** 接入日志的配置，默认使用免费日志服务。 */
    ClsConfig?: ClsConfig;
  }

  interface UpdateNotebookInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateNotebookLifecycleScriptRequest {
    /** notebook生命周期脚本名称 */
    NotebookLifecycleScriptsName: string;
    /** 创建脚本，base64编码base64后的脚本长度不能超过16384个字符 */
    CreateScript?: string;
    /** 启动脚本，base64编码base64后的脚本长度不能超过16384个字符 */
    StartScript?: string;
  }

  interface UpdateNotebookLifecycleScriptResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Tione TI-ONE 训练平台} */
declare interface Tione {
  (): Versions;
  /** 与大模型聊天 {@link ChatCompletionRequest} {@link ChatCompletionResponse} */
  ChatCompletion(data: ChatCompletionRequest, config?: AxiosRequestConfig): AxiosPromise<ChatCompletionResponse>;
  /** 批量创建模型加速任务 {@link CreateBatchModelAccTasksRequest} {@link CreateBatchModelAccTasksResponse} */
  CreateBatchModelAccTasks(data: CreateBatchModelAccTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchModelAccTasksResponse>;
  /** 创建跑批任务 {@link CreateBatchTaskRequest} {@link CreateBatchTaskResponse} */
  CreateBatchTask(data: CreateBatchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchTaskResponse>;
  /** 创建数据集 {@link CreateDatasetRequest} {@link CreateDatasetResponse} */
  CreateDataset(data: CreateDatasetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDatasetResponse>;
  /** 创建模型服务 {@link CreateModelServiceRequest} {@link CreateModelServiceResponse} */
  CreateModelService(data?: CreateModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateModelServiceResponse>;
  /** 创建Notebook {@link CreateNotebookRequest} {@link CreateNotebookResponse} */
  CreateNotebook(data: CreateNotebookRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookResponse>;
  /** 保存镜像 {@link CreateNotebookImageRequest} {@link CreateNotebookImageResponse} */
  CreateNotebookImage(data: CreateNotebookImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotebookImageResponse>;
  /** 保存优化模型 {@link CreateOptimizedModelRequest} {@link CreateOptimizedModelResponse} */
  CreateOptimizedModel(data: CreateOptimizedModelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOptimizedModelResponse>;
  /** 导入模型 {@link CreateTrainingModelRequest} {@link CreateTrainingModelResponse} */
  CreateTrainingModel(data: CreateTrainingModelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTrainingModelResponse>;
  /** 创建模型训练任务 {@link CreateTrainingTaskRequest} {@link CreateTrainingTaskResponse} */
  CreateTrainingTask(data: CreateTrainingTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTrainingTaskResponse>;
  /** 删除跑批任务 {@link DeleteBatchTaskRequest} {@link DeleteBatchTaskResponse} */
  DeleteBatchTask(data: DeleteBatchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBatchTaskResponse>;
  /** 删除数据集 {@link DeleteDatasetRequest} {@link DeleteDatasetResponse} */
  DeleteDataset(data: DeleteDatasetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDatasetResponse>;
  /** 删除模型加速任务 {@link DeleteModelAccelerateTaskRequest} {@link DeleteModelAccelerateTaskResponse} */
  DeleteModelAccelerateTask(data: DeleteModelAccelerateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteModelAccelerateTaskResponse>;
  /** 删除模型服务 {@link DeleteModelServiceRequest} {@link DeleteModelServiceResponse} */
  DeleteModelService(data: DeleteModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteModelServiceResponse>;
  /** 删除模型服务组 {@link DeleteModelServiceGroupRequest} {@link DeleteModelServiceGroupResponse} */
  DeleteModelServiceGroup(data: DeleteModelServiceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteModelServiceGroupResponse>;
  /** 删除Notebook {@link DeleteNotebookRequest} {@link DeleteNotebookResponse} */
  DeleteNotebook(data: DeleteNotebookRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNotebookResponse>;
  /** 删除notebook镜像保存记录 {@link DeleteNotebookImageRecordRequest} {@link DeleteNotebookImageRecordResponse} */
  DeleteNotebookImageRecord(data: DeleteNotebookImageRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNotebookImageRecordResponse>;
  /** 删除模型 {@link DeleteTrainingModelRequest} {@link DeleteTrainingModelResponse} */
  DeleteTrainingModel(data: DeleteTrainingModelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTrainingModelResponse>;
  /** 删除模型版本 {@link DeleteTrainingModelVersionRequest} {@link DeleteTrainingModelVersionResponse} */
  DeleteTrainingModelVersion(data: DeleteTrainingModelVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTrainingModelVersionResponse>;
  /** 删除训练任务 {@link DeleteTrainingTaskRequest} {@link DeleteTrainingTaskResponse} */
  DeleteTrainingTask(data: DeleteTrainingTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTrainingTaskResponse>;
  /** 列举API {@link DescribeAPIConfigsRequest} {@link DescribeAPIConfigsResponse} */
  DescribeAPIConfigs(data?: DescribeAPIConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAPIConfigsResponse>;
  /** 查询跑批任务 {@link DescribeBatchTaskRequest} {@link DescribeBatchTaskResponse} */
  DescribeBatchTask(data: DescribeBatchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchTaskResponse>;
  /** 跑批实例列表 {@link DescribeBatchTaskInstancesRequest} {@link DescribeBatchTaskInstancesResponse} */
  DescribeBatchTaskInstances(data: DescribeBatchTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchTaskInstancesResponse>;
  /** 跑批任务列表 {@link DescribeBatchTasksRequest} {@link DescribeBatchTasksResponse} */
  DescribeBatchTasks(data?: DescribeBatchTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchTasksResponse>;
  /** 查询资源组详情 {@link DescribeBillingResourceGroupsRequest} {@link DescribeBillingResourceGroupsResponse} */
  DescribeBillingResourceGroups(data: DescribeBillingResourceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingResourceGroupsResponse>;
  /** 查询计费项列表 {@link DescribeBillingSpecsRequest} {@link DescribeBillingSpecsResponse} */
  DescribeBillingSpecs(data: DescribeBillingSpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingSpecsResponse>;
  /** 查询计费项价格 {@link DescribeBillingSpecsPriceRequest} {@link DescribeBillingSpecsPriceResponse} */
  DescribeBillingSpecsPrice(data: DescribeBillingSpecsPriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingSpecsPriceResponse>;
  /** 查询结构化数据集详情 {@link DescribeDatasetDetailStructuredRequest} {@link DescribeDatasetDetailStructuredResponse} */
  DescribeDatasetDetailStructured(data: DescribeDatasetDetailStructuredRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasetDetailStructuredResponse>;
  /** 查询非结构化数据集详情 {@link DescribeDatasetDetailUnstructuredRequest} {@link DescribeDatasetDetailUnstructuredResponse} */
  DescribeDatasetDetailUnstructured(data?: DescribeDatasetDetailUnstructuredRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasetDetailUnstructuredResponse>;
  /** 查询数据集列表 {@link DescribeDatasetsRequest} {@link DescribeDatasetsResponse} */
  DescribeDatasets(data?: DescribeDatasetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasetsResponse>;
  /** 查询推理镜像模板 {@link DescribeInferTemplatesRequest} {@link DescribeInferTemplatesResponse} */
  DescribeInferTemplates(data?: DescribeInferTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInferTemplatesResponse>;
  /** 查询最近上报的训练自定义指标 {@link DescribeLatestTrainingMetricsRequest} {@link DescribeLatestTrainingMetricsResponse} */
  DescribeLatestTrainingMetrics(data: DescribeLatestTrainingMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLatestTrainingMetricsResponse>;
  /** 获取日志 {@link DescribeLogsRequest} {@link DescribeLogsResponse} */
  DescribeLogs(data: DescribeLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogsResponse>;
  /** 查询模型加速引擎版本列表 {@link DescribeModelAccEngineVersionsRequest} {@link DescribeModelAccEngineVersionsResponse} */
  DescribeModelAccEngineVersions(data?: DescribeModelAccEngineVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelAccEngineVersionsResponse>;
  /** 查询模型优化任务详情 {@link DescribeModelAccelerateTaskRequest} {@link DescribeModelAccelerateTaskResponse} */
  DescribeModelAccelerateTask(data: DescribeModelAccelerateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelAccelerateTaskResponse>;
  /** 查询模型加速任务列表 {@link DescribeModelAccelerateTasksRequest} {@link DescribeModelAccelerateTasksResponse} */
  DescribeModelAccelerateTasks(data?: DescribeModelAccelerateTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelAccelerateTasksResponse>;
  /** 查询单个服务 {@link DescribeModelServiceRequest} {@link DescribeModelServiceResponse} */
  DescribeModelService(data: DescribeModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServiceResponse>;
  /** 展示服务的调用信息 {@link DescribeModelServiceCallInfoRequest} {@link DescribeModelServiceCallInfoResponse} */
  DescribeModelServiceCallInfo(data: DescribeModelServiceCallInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServiceCallInfoResponse>;
  /** 查询单个服务组 {@link DescribeModelServiceGroupRequest} {@link DescribeModelServiceGroupResponse} */
  DescribeModelServiceGroup(data: DescribeModelServiceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServiceGroupResponse>;
  /** 列举在线推理服务组 {@link DescribeModelServiceGroupsRequest} {@link DescribeModelServiceGroupsResponse} */
  DescribeModelServiceGroups(data?: DescribeModelServiceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServiceGroupsResponse>;
  /** 展示服务的历史版本 {@link DescribeModelServiceHistoryRequest} {@link DescribeModelServiceHistoryResponse} */
  DescribeModelServiceHistory(data: DescribeModelServiceHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServiceHistoryResponse>;
  /** 查询模型服务能否开启热更新 {@link DescribeModelServiceHotUpdatedRequest} {@link DescribeModelServiceHotUpdatedResponse} */
  DescribeModelServiceHotUpdated(data: DescribeModelServiceHotUpdatedRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServiceHotUpdatedResponse>;
  /** 查询多个服务 {@link DescribeModelServicesRequest} {@link DescribeModelServicesResponse} */
  DescribeModelServices(data?: DescribeModelServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServicesResponse>;
  /** Notebook详情 {@link DescribeNotebookRequest} {@link DescribeNotebookResponse} */
  DescribeNotebook(data: DescribeNotebookRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookResponse>;
  /** 查询镜像kernel {@link DescribeNotebookImageKernelsRequest} {@link DescribeNotebookImageKernelsResponse} */
  DescribeNotebookImageKernels(data: DescribeNotebookImageKernelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookImageKernelsResponse>;
  /** 查看notebook镜像保存记录 {@link DescribeNotebookImageRecordsRequest} {@link DescribeNotebookImageRecordsResponse} */
  DescribeNotebookImageRecords(data: DescribeNotebookImageRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebookImageRecordsResponse>;
  /** Notebook列表 {@link DescribeNotebooksRequest} {@link DescribeNotebooksResponse} */
  DescribeNotebooks(data?: DescribeNotebooksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotebooksResponse>;
  /** 训练框架列表 {@link DescribeTrainingFrameworksRequest} {@link DescribeTrainingFrameworksResponse} */
  DescribeTrainingFrameworks(data?: DescribeTrainingFrameworksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingFrameworksResponse>;
  /** 查询训练自定义指标 {@link DescribeTrainingMetricsRequest} {@link DescribeTrainingMetricsResponse} */
  DescribeTrainingMetrics(data: DescribeTrainingMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingMetricsResponse>;
  /** 查询模型版本 {@link DescribeTrainingModelVersionRequest} {@link DescribeTrainingModelVersionResponse} */
  DescribeTrainingModelVersion(data: DescribeTrainingModelVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingModelVersionResponse>;
  /** 模型版本列表 {@link DescribeTrainingModelVersionsRequest} {@link DescribeTrainingModelVersionsResponse} */
  DescribeTrainingModelVersions(data: DescribeTrainingModelVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingModelVersionsResponse>;
  /** 模型列表 {@link DescribeTrainingModelsRequest} {@link DescribeTrainingModelsResponse} */
  DescribeTrainingModels(data?: DescribeTrainingModelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingModelsResponse>;
  /** 训练任务详情 {@link DescribeTrainingTaskRequest} {@link DescribeTrainingTaskResponse} */
  DescribeTrainingTask(data: DescribeTrainingTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingTaskResponse>;
  /** 训练任务pod列表 {@link DescribeTrainingTaskPodsRequest} {@link DescribeTrainingTaskPodsResponse} */
  DescribeTrainingTaskPods(data: DescribeTrainingTaskPodsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingTaskPodsResponse>;
  /** 模型训练任务列表 {@link DescribeTrainingTasksRequest} {@link DescribeTrainingTasksResponse} */
  DescribeTrainingTasks(data?: DescribeTrainingTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrainingTasksResponse>;
  /** 更新模型服务 {@link ModifyModelServiceRequest} {@link ModifyModelServiceResponse} */
  ModifyModelService(data: ModifyModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModelServiceResponse>;
  /** 增量修改模型服务 {@link ModifyModelServicePartialConfigRequest} {@link ModifyModelServicePartialConfigResponse} */
  ModifyModelServicePartialConfig(data: ModifyModelServicePartialConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModelServicePartialConfigResponse>;
  /** 修改Notebook {@link ModifyNotebookRequest} {@link ModifyNotebookResponse} */
  ModifyNotebook(data: ModifyNotebookRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotebookResponse>;
  /** 修改Notebook标签 {@link ModifyNotebookTagsRequest} {@link ModifyNotebookTagsResponse} */
  ModifyNotebookTags(data: ModifyNotebookTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotebookTagsResponse>;
  /** 更新推理服务组流量分配 {@link ModifyServiceGroupWeightsRequest} {@link ModifyServiceGroupWeightsResponse} */
  ModifyServiceGroupWeights(data: ModifyServiceGroupWeightsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceGroupWeightsResponse>;
  /** 上报训练自定义指标 {@link PushTrainingMetricsRequest} {@link PushTrainingMetricsResponse} */
  PushTrainingMetrics(data?: PushTrainingMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<PushTrainingMetricsResponse>;
  /** 重启模型加速任务 {@link RestartModelAccelerateTaskRequest} {@link RestartModelAccelerateTaskResponse} */
  RestartModelAccelerateTask(data: RestartModelAccelerateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RestartModelAccelerateTaskResponse>;
  /** 大模型聊天体验 {@link SendChatMessageRequest} {@link SendChatMessageResponse} */
  SendChatMessage(data: SendChatMessageRequest, config?: AxiosRequestConfig): AxiosPromise<SendChatMessageResponse>;
  /** 启动Notebook {@link StartNotebookRequest} {@link StartNotebookResponse} */
  StartNotebook(data: StartNotebookRequest, config?: AxiosRequestConfig): AxiosPromise<StartNotebookResponse>;
  /** 启动模型训练任务 {@link StartTrainingTaskRequest} {@link StartTrainingTaskResponse} */
  StartTrainingTask(data: StartTrainingTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StartTrainingTaskResponse>;
  /** 停止跑批任务 {@link StopBatchTaskRequest} {@link StopBatchTaskResponse} */
  StopBatchTask(data: StopBatchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopBatchTaskResponse>;
  /** 停止保存镜像 {@link StopCreatingImageRequest} {@link StopCreatingImageResponse} */
  StopCreatingImage(data: StopCreatingImageRequest, config?: AxiosRequestConfig): AxiosPromise<StopCreatingImageResponse>;
  /** 停止模型加速任务 {@link StopModelAccelerateTaskRequest} {@link StopModelAccelerateTaskResponse} */
  StopModelAccelerateTask(data: StopModelAccelerateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopModelAccelerateTaskResponse>;
  /** 停止Notebook {@link StopNotebookRequest} {@link StopNotebookResponse} */
  StopNotebook(data: StopNotebookRequest, config?: AxiosRequestConfig): AxiosPromise<StopNotebookResponse>;
  /** 停止模型训练任务 {@link StopTrainingTaskRequest} {@link StopTrainingTaskResponse} */
  StopTrainingTask(data: StopTrainingTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopTrainingTaskResponse>;
  /** 创建存储库 {@link V20191022.CreateCodeRepositoryRequest} {@link V20191022.CreateCodeRepositoryResponse} */
  CreateCodeRepository(data: V20191022.CreateCodeRepositoryRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.CreateCodeRepositoryResponse>;
  /** 创建Notebook实例 {@link V20191022.CreateNotebookInstanceRequest} {@link V20191022.CreateNotebookInstanceResponse} */
  CreateNotebookInstance(data: V20191022.CreateNotebookInstanceRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.CreateNotebookInstanceResponse>;
  /** 创建Notebook生命周期脚本 {@link V20191022.CreateNotebookLifecycleScriptRequest} {@link V20191022.CreateNotebookLifecycleScriptResponse} */
  CreateNotebookLifecycleScript(data: V20191022.CreateNotebookLifecycleScriptRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.CreateNotebookLifecycleScriptResponse>;
  /** 创建Notebook授权Url {@link V20191022.CreatePresignedNotebookInstanceUrlRequest} {@link V20191022.CreatePresignedNotebookInstanceUrlResponse} */
  CreatePresignedNotebookInstanceUrl(data: V20191022.CreatePresignedNotebookInstanceUrlRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.CreatePresignedNotebookInstanceUrlResponse>;
  /** 创建训练任务 {@link V20191022.CreateTrainingJobRequest} {@link V20191022.CreateTrainingJobResponse} */
  CreateTrainingJob(data: V20191022.CreateTrainingJobRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.CreateTrainingJobResponse>;
  /** 删除存储库 {@link V20191022.DeleteCodeRepositoryRequest} {@link V20191022.DeleteCodeRepositoryResponse} */
  DeleteCodeRepository(data: V20191022.DeleteCodeRepositoryRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DeleteCodeRepositoryResponse>;
  /** 删除Notebook实例 {@link V20191022.DeleteNotebookInstanceRequest} {@link V20191022.DeleteNotebookInstanceResponse} */
  DeleteNotebookInstance(data: V20191022.DeleteNotebookInstanceRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DeleteNotebookInstanceResponse>;
  /** 删除Notebook生命周期脚本 {@link V20191022.DeleteNotebookLifecycleScriptRequest} {@link V20191022.DeleteNotebookLifecycleScriptResponse} */
  DeleteNotebookLifecycleScript(data: V20191022.DeleteNotebookLifecycleScriptRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DeleteNotebookLifecycleScriptResponse>;
  /** 查询存储库列表 {@link V20191022.DescribeCodeRepositoriesRequest} {@link V20191022.DescribeCodeRepositoriesResponse} */
  DescribeCodeRepositories(data: V20191022.DescribeCodeRepositoriesRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeCodeRepositoriesResponse>;
  /** 查询存储库详情 {@link V20191022.DescribeCodeRepositoryRequest} {@link V20191022.DescribeCodeRepositoryResponse} */
  DescribeCodeRepository(data: V20191022.DescribeCodeRepositoryRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeCodeRepositoryResponse>;
  /** 查询Notebook实例 {@link V20191022.DescribeNotebookInstanceRequest} {@link V20191022.DescribeNotebookInstanceResponse} */
  DescribeNotebookInstance(data: V20191022.DescribeNotebookInstanceRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeNotebookInstanceResponse>;
  /** 查询Notebook实例列表 {@link V20191022.DescribeNotebookInstancesRequest} {@link V20191022.DescribeNotebookInstancesResponse} */
  DescribeNotebookInstances(data: V20191022.DescribeNotebookInstancesRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeNotebookInstancesResponse>;
  /** 查看notebook生命周期脚本详情 {@link V20191022.DescribeNotebookLifecycleScriptRequest} {@link V20191022.DescribeNotebookLifecycleScriptResponse} */
  DescribeNotebookLifecycleScript(data: V20191022.DescribeNotebookLifecycleScriptRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeNotebookLifecycleScriptResponse>;
  /** 查看notebook生命周期脚本列表 {@link V20191022.DescribeNotebookLifecycleScriptsRequest} {@link V20191022.DescribeNotebookLifecycleScriptsResponse} */
  DescribeNotebookLifecycleScripts(data: V20191022.DescribeNotebookLifecycleScriptsRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeNotebookLifecycleScriptsResponse>;
  /** 查询Notebook概览 {@link V20191022.DescribeNotebookSummaryRequest} {@link V20191022.DescribeNotebookSummaryResponse} */
  DescribeNotebookSummary(data: V20191022.DescribeNotebookSummaryRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeNotebookSummaryResponse>;
  /** 查询训练任务 {@link V20191022.DescribeTrainingJobRequest} {@link V20191022.DescribeTrainingJobResponse} */
  DescribeTrainingJob(data: V20191022.DescribeTrainingJobRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeTrainingJobResponse>;
  /** 查询训练任务列表 {@link V20191022.DescribeTrainingJobsRequest} {@link V20191022.DescribeTrainingJobsResponse} */
  DescribeTrainingJobs(data: V20191022.DescribeTrainingJobsRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.DescribeTrainingJobsResponse>;
  /** 启动Notebook实例 {@link V20191022.StartNotebookInstanceRequest} {@link V20191022.StartNotebookInstanceResponse} */
  StartNotebookInstance(data: V20191022.StartNotebookInstanceRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.StartNotebookInstanceResponse>;
  /** 停止Notebook实例 {@link V20191022.StopNotebookInstanceRequest} {@link V20191022.StopNotebookInstanceResponse} */
  StopNotebookInstance(data: V20191022.StopNotebookInstanceRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.StopNotebookInstanceResponse>;
  /** 停止训练任务 {@link V20191022.StopTrainingJobRequest} {@link V20191022.StopTrainingJobResponse} */
  StopTrainingJob(data: V20191022.StopTrainingJobRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.StopTrainingJobResponse>;
  /** 更新存储库 {@link V20191022.UpdateCodeRepositoryRequest} {@link V20191022.UpdateCodeRepositoryResponse} */
  UpdateCodeRepository(data: V20191022.UpdateCodeRepositoryRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.UpdateCodeRepositoryResponse>;
  /** 更新Notebook实例 {@link V20191022.UpdateNotebookInstanceRequest} {@link V20191022.UpdateNotebookInstanceResponse} */
  UpdateNotebookInstance(data: V20191022.UpdateNotebookInstanceRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.UpdateNotebookInstanceResponse>;
  /** 更新notebook生命周期脚本 {@link V20191022.UpdateNotebookLifecycleScriptRequest} {@link V20191022.UpdateNotebookLifecycleScriptResponse} */
  UpdateNotebookLifecycleScript(data: V20191022.UpdateNotebookLifecycleScriptRequest, config: AxiosRequestConfig & V20191022.VersionHeader): AxiosPromise<V20191022.UpdateNotebookLifecycleScriptResponse>;
}

export declare type Versions = ["2021-11-11", "2019-10-22"];

export default Tione;
