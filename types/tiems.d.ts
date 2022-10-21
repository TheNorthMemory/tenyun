/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 状态 */
declare interface Conditions {
  /** 原因 */
  Reason: string;
  /** 具有相同原因的副本个数 */
  Count: number;
}

/** 配置 */
declare interface Config {
  /** Id */
  Id: string;
  /** 配置名 */
  Name: string;
  /** 模型地址 */
  ModelUri: string;
  /** 创建时间 */
  CreateTime: string;
  /** 运行环境 */
  Runtime: string;
  /** 配置版本 */
  Version: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 配置描述 */
  Description: string | null;
}

/** 暴露信息 */
declare interface ExposeInfo {
  /** 暴露方式，支持 EXTERNAL（外网暴露），VPC （VPC内网打通） */
  ExposeType: string;
  /** 暴露Ip。暴露方式为 EXTERNAL 为外网 Ip，暴露方式为 VPC 时为指定 Vpc 下的Vip */
  Ip: string;
  /** 暴露方式为 VPC 时，打通的私有网络Id */
  VpcId: string | null;
  /** 暴露方式为 VPC 时，打通的子网Id */
  SubnetId: string | null;
  /** GATEWAY 服务id，ExposeType = GATEWAY 时返回 */
  GateWayServiceId: string | null;
  /** GATEWAY api id，ExposeType = GATEWAY 时返回 */
  GateWayAPIId: string | null;
  /** GATEWAY domain，ExposeType = GATEWAY 时返回 */
  GateWayDomain: string | null;
}

/** 筛选项 */
declare interface Filter {
  /** 名称 */
  Name: string;
  /** 取值 */
  Values: string[];
}

/** 节点 */
declare interface Instance {
  /** 节点 ID */
  Id: string;
  /** 节点所在地区 */
  Zone: string;
  /** 节点类型 */
  InstanceType: string;
  /** 节点充值类型 */
  InstanceChargeType: string;
  /** Cpu 核数 */
  Cpu: number;
  /** 内存 */
  Memory: number;
  /** Gpu 核数 */
  Gpu: number;
  /** 节点状态 */
  State: string;
  /** 节点故障信息 */
  AbnormalReason: string;
  /** 创建时间 */
  Created: string;
  /** 更新时间 */
  Updated: string;
  /** 到期时间 */
  DeadlineTime: string;
  /** 所属资源组 ID */
  ResourceGroupId: string;
  /** 自动续费标签 */
  RenewFlag: string;
  /** 节点所在地域 */
  Region: string;
  /** 当前 Cpu 申请使用量 */
  CpuRequested: number;
  /** 当前 Memory 申请使用量 */
  MemoryRequested: number;
  /** 当前 Gpu 申请使用量 */
  GpuRequested: number;
  /** 节点所在伸缩组 ID */
  RsgAsGroupId: string;
}

/** 任务 */
declare interface Job {
  /** 任务 Id */
  Id: string;
  /** 集群名 */
  Cluster: string | null;
  /** Region 名 */
  Region: string;
  /** 任务名称 */
  Name: string;
  /** Worker 使用的运行环境 */
  Runtime: string | null;
  /** 任务描述 */
  Description: string | null;
  /** 配置 Id */
  ConfigId: string | null;
  /** 预测输入 */
  PredictInput: PredictInput | null;
  /** 任务状态 */
  Status: JobStatus;
  /** 任务创建时间 */
  CreateTime: string;
  /** 任务开始时间 */
  StartTime: string | null;
  /** 任务结束时间 */
  EndTime: string | null;
  /** 任务取消时间 */
  CancelTime: string | null;
  /** 任务使用资源组 Id */
  ResourceGroupId: string | null;
  /** 处理器配置, 单位为1/1000核；范围[100, 256000] */
  Cpu: number | null;
  /** 内存配置, 单位为1M；范围[100, 256000] */
  Memory: number | null;
  /** GPU算力配置，单位为1/1000 卡，范围 [0, 256000] */
  Gpu: number | null;
  /** 显存配置, 单位为1M，范围 [0, 256000] */
  GpuMemory: number | null;
  /** 任务使用资源组名称 */
  ResourceGroupName: string | null;
  /** GPU类型 */
  GpuType: string | null;
  /** 配置名 */
  ConfigName: string | null;
  /** 配置版本 */
  ConfigVersion: string | null;
  /** Job类型 */
  JobType: string | null;
  /** 量化输入 */
  QuantizationInput: QuantizationInput | null;
  /** Cls日志主题ID */
  LogTopicId: string | null;
}

/** 任务状态 */
declare interface JobStatus {
  /** 任务状态 */
  Status: string;
  /** 错误时为错误描述 */
  Message: string | null;
  /** 预期Worker数量 */
  DesiredWorkers: number | null;
  /** 当前Worker数量 */
  CurrentWorkers: number | null;
  /** 副本名 */
  Replicas: string[] | null;
  /** 副本实例 */
  ReplicaInfos: ReplicaInfo[] | null;
}

/** 模型服务 */
declare interface ModelService {
  /** 服务ID */
  Id: string;
  /** 运行集群 */
  Cluster: string | null;
  /** 服务名称 */
  Name: string;
  /** 运行环境 */
  Runtime: string;
  /** 模型地址 */
  ModelUri: string;
  /** 处理器配置, 单位为1/1000核 */
  Cpu: number;
  /** 内存配置, 单位为1M */
  Memory: number;
  /** GPU 配置, 单位为1/1000 卡 */
  Gpu: number;
  /** 显存配置, 单位为1M */
  GpuMemory: number;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 支持AUTO, MANUAL */
  ScaleMode: string;
  /** 弹性伸缩配置 */
  Scaler: Scaler;
  /** 服务状态 */
  Status: ServiceStatus;
  /** 访问密钥 */
  AccessToken: string | null;
  /** 服务配置Id */
  ConfigId: string;
  /** 服务配置名 */
  ConfigName: string;
  /** 服务运行时长 */
  ServeSeconds: number;
  /** 配置版本 */
  ConfigVersion: string | null;
  /** 服务使用资源组 Id */
  ResourceGroupId: string | null;
  /** 暴露方式 */
  Exposes: ExposeInfo[] | null;
  /** Region 名 */
  Region: string | null;
  /** 服务使用资源组名称 */
  ResourceGroupName: string | null;
  /** 备注 */
  Description: string | null;
  /** GPU类型 */
  GpuType: string | null;
  /** Cls日志主题Id */
  LogTopicId: string | null;
}

/** 配置项 */
declare interface Option {
  /** 名称 */
  Name: string;
  /** 取值 */
  Value: number;
}

/** 预测输入 */
declare interface PredictInput {
  /** 输入路径，支持 cos 格式路径文件夹或文件 */
  InputPath: string;
  /** 输出路径，支持 cos 格式路径 */
  OutputPath: string;
  /** 输入数据格式，目前支持：JSON */
  InputDataFormat?: string;
  /** 输出数据格式，目前支持：JSON */
  OutputDataFormat?: string;
  /** 预测批大小，默认为 64 */
  BatchSize?: number;
  /** 模型签名 */
  SignatureName?: string | null;
}

/** 量化输入 */
declare interface QuantizationInput {
  /** 量化输入路径 */
  InputPath: string;
  /** 量化输出路径 */
  OutputPath: string;
  /** 量化批大小 */
  BatchSize?: number;
  /** 量化精度，支持：FP32，FP16，INT8 */
  Precision?: string;
  /** 转换类型 */
  ConvertType?: string;
}

/** 实例信息 */
declare interface ReplicaInfo {
  /** 实例名称 */
  Name: string;
  /** 弹性网卡模式时，弹性网卡Ip */
  EniIp: string | null;
  /** Normal: 正常运行中; Abnormal: 异常；Waiting：等待中 */
  Status: string;
  /** 当 status为 Abnormal 的时候，一些额外的信息 */
  Message: string | null;
  /** 启动时间 */
  StartTime: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 重启次数 */
  Restarted: number;
}

/** 资源组 */
declare interface ResourceGroup {
  /** 资源组 Id */
  Id: string;
  /** 地域 */
  Region: string;
  /** 集群 */
  Cluster: string | null;
  /** 资源组名称 */
  Name: string;
  /** 资源组描述 */
  Description: string | null;
  /** 创建时间 */
  Created: string;
  /** 更新时间 */
  Updated: string;
  /** 资源组主机数量 */
  InstanceCount: number | null;
  /** 使用资源组的服务数量 */
  ServiceCount: number | null;
  /** 使用资源组的任务数量 */
  JobCount: number | null;
  /** 资源组是否为公共资源组 */
  Public: boolean | null;
  /** 机器类型 */
  InstanceType: string | null;
  /** 资源组状态 */
  Status: string | null;
  /** 显卡总张数 */
  Gpu: number | null;
  /** 处理器总核数 */
  Cpu: number | null;
  /** 内存总量，单位为G */
  Memory: number | null;
  /** 可用区 */
  Zone: string | null;
  /** Gpu类型 */
  GpuType: string[] | null;
  /** 该资源组下是否有预付费资源 */
  HasPrepaid: boolean | null;
  /** 资源组是否允许预付费或后付费模式 */
  PayMode: string | null;
}

/** 伸缩组活动关联的节点 */
declare interface RsgAsActivityRelatedInstance {
  /** 节点 ID */
  InstanceId: string;
  /** 节点状态 */
  InstanceStatus: string;
}

/** 资源组的伸缩组 */
declare interface RsgAsGroup {
  /** 伸缩组 ID */
  Id: string;
  /** 伸缩组所在地域 */
  Region: string;
  /** 伸缩组所在可用区 */
  Zone: string;
  /** 伸缩组所在集群 */
  Cluster: string;
  /** 伸缩组所在资源组 ID */
  RsgId: string;
  /** 伸缩组名称 */
  Name: string;
  /** 伸缩组允许的最大节点个数 */
  MaxSize: number;
  /** 伸缩组允许的最小节点个数 */
  MinSize: number;
  /** 伸缩组创建时间 */
  CreateTime: string;
  /** 伸缩组更新时间 */
  UpdateTime: string;
  /** 伸缩组状态 */
  Status: string;
  /** 伸缩组节点类型 */
  InstanceType: string;
  /** 伸缩组内节点个数 */
  InstanceCount: number;
  /** 伸缩组起始节点数 */
  DesiredSize: number;
}

/** 伸缩组活动信息 */
declare interface RsgAsGroupActivity {
  /** 伸缩组活动 ID */
  Id: string;
  /** 关联的伸缩组 ID */
  RsgAsGroupId: string;
  /** 活动类型 */
  ActivityType: string;
  /** 状态的编码 */
  StatusCode: string;
  /** 状态的消息 */
  StatusMessage: string;
  /** 活动原因 */
  Cause: string;
  /** 活动描述 */
  Description: string;
  /** 活动开始时间 */
  StartTime: string;
  /** 活动结束时间 */
  EndTime: string;
  /** 活动创建时间 */
  CreateTime: string;
  /** 活动相关联的节点 */
  RsgAsActivityRelatedInstance: RsgAsActivityRelatedInstance[];
  /** 简略的状态消息 */
  StatusMessageSimplified: string;
}

/** 运行环境 */
declare interface Runtime {
  /** 运行环境名称 */
  Name: string;
  /** 运行环境框架 */
  Framework: string;
  /** 运行环境描述 */
  Description: string;
  /** 是否为公开运行环境 */
  Public: boolean | null;
  /** 是否打开健康检查 */
  HealthCheckOn: boolean | null;
  /** 镜像地址 */
  Image: string | null;
  /** 创建时间 */
  CreateTime: string | null;
}

/** 扩缩容配置 */
declare interface Scaler {
  /** 最大副本数，ScaleMode 为 MANUAL 时辞会此值会被置为 StartReplicas 取值 */
  MaxReplicas: number;
  /** 最小副本数，ScaleMode 为 MANUAL 时辞会此值会被置为 StartReplicas 取值 */
  MinReplicas: number;
  /** 起始副本数 */
  StartReplicas: number;
  /** 扩缩容指标，选择自动扩缩容时至少需要选择一个指标，支持CPU-UTIL、MEMORY-UTIL */
  HpaMetrics?: Option[];
}

/** 服务状态 */
declare interface ServiceStatus {
  /** 预期副本数 */
  DesiredReplicas: number;
  /** 当前副本数 */
  CurrentReplicas: number;
  /** Normal：正常运行中；Abnormal：服务异常，例如容器启动失败等；Waiting：服务等待中，例如容器下载镜像过程等；Stopped：已停止 Stopping 停止中；Resuming：重启中；Updating：服务更新中 */
  Status: string;
  /** 服务处于当前状态的原因集合 */
  Conditions: Conditions[] | null;
  /** 副本名称 */
  Replicas: string[] | null;
  /** 运行状态对额外信息 */
  Message: string | null;
  /** 副本信息 */
  ReplicaInfos: ReplicaInfo[] | null;
}

declare interface CreateJobRequest {
  /** 任务名称 */
  Name: string;
  /** 使用的资源组 Id，默认使用共享资源组 */
  ResourceGroupId: string;
  /** 处理器配置, 单位为1/1000核；范围[100, 256000] */
  Cpu: number;
  /** 内存配置, 单位为1M；范围[100, 256000] */
  Memory: number;
  /** 运行集群 */
  Cluster?: string;
  /** 预测输入 */
  PredictInput?: PredictInput;
  /** 任务描述 */
  Description?: string;
  /** 同时处理任务的 Worker 个数 */
  WorkerCount?: number;
  /** 使用的配置 Id */
  ConfigId?: string;
  /** GPU算力配置，单位为1/1000 卡，范围 [0, 256000] */
  Gpu?: number;
  /** 显存配置, 单位为1M，范围 [0, 256000] */
  GpuMemory?: number;
  /** GPU类型 */
  GpuType?: string;
  /** 量化输入 */
  QuantizationInput?: QuantizationInput;
  /** Cls日志主题ID */
  LogTopicId?: string;
}

declare interface CreateJobResponse {
  /** 任务 */
  Job?: Job;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRsgAsGroupRequest {
  /** 资源组 ID */
  RsgId: string;
  /** 伸缩组允许的最大节点数 */
  MaxSize: number;
  /** 伸缩组允许的最小节点数 */
  MinSize: number;
  /** 伸缩组的节点规格 */
  InstanceType: string;
  /** 资源组所在的集群名 */
  Cluster?: string;
  /** 伸缩组名称 */
  Name?: string;
  /** 伸缩组期望的节点数 */
  DesiredSize?: number;
}

declare interface CreateRsgAsGroupResponse {
  /** 所创建的资源组的伸缩组 */
  RsgAsGroup?: RsgAsGroup;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRuntimeRequest {
  /** 全局唯一的运行环境名称 */
  Name: string;
  /** 运行环境镜像地址 */
  Image: string;
  /** 运行环境框架 */
  Framework?: string;
  /** 运行环境描述 */
  Description?: string;
  /** 是否支持健康检查，默认为False */
  HealthCheckOn?: boolean;
}

declare interface CreateRuntimeResponse {
  /** 运行环境 */
  Runtime?: Runtime;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateServiceConfigRequest {
  /** 配置名称 */
  Name: string;
  /** 运行环境 */
  Runtime: string;
  /** 模型地址，支持cos路径，格式为 cos://bucket名-appid.cos.region名.myqcloud.com/模型文件夹路径。为模型文件的上一层文件夹地址。 */
  ModelUri: string;
  /** 配置描述 */
  Description?: string;
}

declare interface CreateServiceConfigResponse {
  /** 服务配置 */
  ServiceConfig?: Config;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateServiceRequest {
  /** 扩缩容配置 */
  Scaler: Scaler;
  /** 服务配置Id */
  ServiceConfigId: string;
  /** 服务名称 */
  Name: string;
  /** 扩缩容方式，支持AUTO, MANUAL，分别表示自动扩缩容和手动扩缩容 */
  ScaleMode: string;
  /** 部署要使用的资源组Id，默认为共享资源组 */
  ResourceGroupId: string;
  /** 处理器配置, 单位为1/1000核；范围[100, 256000] */
  Cpu: number;
  /** 内存配置, 单位为1M；范围[100, 256000] */
  Memory: number;
  /** 集群，不填则使用默认集群 */
  Cluster?: string;
  /** 默认为空，表示不需要鉴权，TOKEN 表示选择 Token 鉴权方式 */
  Authentication?: string;
  /** GPU算力配置，单位为1/1000 卡，范围 [0, 256000] */
  Gpu?: number;
  /** 显存配置, 单位为1M，范围 [0, 256000] */
  GpuMemory?: number;
  /** 备注 */
  Description?: string;
  /** GPU类型 */
  GpuType?: string;
  /** Cls日志主题ID */
  LogTopicId?: string;
}

declare interface CreateServiceResponse {
  /** 服务 */
  Service?: ModelService;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 要删除的节点 ID */
  InstanceId: string;
}

declare interface DeleteInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteJobRequest {
  /** 任务 Id */
  JobId: string;
}

declare interface DeleteJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteResourceGroupRequest {
  /** 要删除的资源组 ID */
  ResourceGroupId: string;
}

declare interface DeleteResourceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRsgAsGroupRequest {
  /** 伸缩组 ID */
  Id: string;
}

declare interface DeleteRsgAsGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRuntimeRequest {
  /** 要删除的Runtime名 */
  Runtime: string;
}

declare interface DeleteRuntimeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteServiceConfigRequest {
  /** 服务配置Id */
  ServiceConfigId?: string;
  /** 服务配置名称 */
  ServiceConfigName?: string;
}

declare interface DeleteServiceConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteServiceRequest {
  /** 服务Id */
  ServiceId: string;
}

declare interface DeleteServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 筛选选项 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为200 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列 */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME" */
  OrderField?: string;
  /** 要查询的资源组 ID */
  ResourceGroupId?: string;
}

declare interface DescribeInstancesResponse {
  /** 资源组下节点总数 */
  TotalCount?: number;
  /** 资源组下节点列表 */
  Instances?: Instance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceGroupsRequest {
  /** 筛选选项 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为200 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列 */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME" */
  OrderField?: string;
}

declare interface DescribeResourceGroupsResponse {
  /** 资源组总数 */
  TotalCount?: number;
  /** 资源组列表 */
  ResourceGroups?: ResourceGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRsgAsGroupActivitiesRequest {
  /** 伸缩组 ID */
  Id: string;
  /** 查询活动的开始时间 */
  StartTime?: string;
  /** 查询互动的结束时间 */
  EndTime?: string;
  /** 筛选选项 */
  Filters?: Filter[];
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 200 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围："ASC", "DESC" */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME" */
  OrderField?: string;
}

declare interface DescribeRsgAsGroupActivitiesResponse {
  /** 伸缩组活动数组 */
  RsgAsGroupActivitySet?: RsgAsGroupActivity[] | null;
  /** 所查询的伸缩组活动总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRsgAsGroupsRequest {
  /** 筛选选项 */
  Filters?: Filter[];
  /** 偏移量，默认为 0 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 200 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围："ASC", "DESC" */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME" */
  OrderField?: string;
}

declare interface DescribeRsgAsGroupsResponse {
  /** 所查询的伸缩组数组 */
  RsgAsGroupSet?: RsgAsGroup[];
  /** 伸缩组数组总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRuntimesRequest {
}

declare interface DescribeRuntimesResponse {
  /** TIEMS支持的运行环境列表 */
  Runtimes?: Runtime[];
  /** 用户对runtime对权限 */
  UserAccess?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeServiceConfigsRequest {
  /** 筛选选项，支持按照name等进行筛选 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为1000 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列 */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME" */
  OrderField?: string;
  /** 是否按照配置名分页 */
  PageByName?: boolean;
}

declare interface DescribeServiceConfigsResponse {
  /** 服务配置 */
  ServiceConfigs?: Config[];
  /** 服务配置总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeServicesRequest {
  /** 筛选选项，支持筛选的字段：id, region, zone, cluster, status, runtime, rsg_id */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列 */
  Order?: string;
  /** 排序的依据字段， 取值范围 "CREATE_TIME" "UPDATE_TIME" */
  OrderField?: string;
}

declare interface DescribeServicesResponse {
  /** 服务列表 */
  Services?: ModelService[];
  /** 服务总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableRsgAsGroupRequest {
  /** 伸缩组 ID */
  Id: string;
}

declare interface DisableRsgAsGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableRsgAsGroupRequest {
  /** 伸缩组 ID */
  Id: string;
}

declare interface EnableRsgAsGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExposeServiceRequest {
  /** 服务Id */
  ServiceId: string;
  /** 暴露方式，支持 EXTERNAL（外网暴露），VPC （VPC内网打通） */
  ExposeType: string;
  /** 暴露方式为 VPC 时，填写需要打通的私有网络Id */
  VpcId?: string;
  /** 暴露方式为 VPC 时，填写需要打通的子网Id */
  SubnetId?: string;
}

declare interface ExposeServiceResponse {
  /** 暴露方式 */
  Expose?: ExposeInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateJobRequest {
  /** 任务 Id */
  JobId: string;
  /** 任务更新动作，支持：Cancel */
  JobAction?: string;
  /** 备注 */
  Description?: string;
}

declare interface UpdateJobResponse {
  /** 任务 */
  Job?: Job | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateRsgAsGroupRequest {
  /** 伸缩组 ID */
  Id: string;
  /** 重命名名称 */
  Name?: string;
  /** 伸缩组最大节点数 */
  MaxSize?: number;
  /** 伸缩组最小节点数 */
  MinSize?: number;
  /** 伸缩组期望的节点数 */
  DesiredSize?: number;
}

declare interface UpdateRsgAsGroupResponse {
  /** 资源组的伸缩组 */
  RsgAsGroup?: RsgAsGroup;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateServiceRequest {
  /** 服务Id */
  ServiceId: string;
  /** 扩缩容配置 */
  Scaler?: Scaler;
  /** 服务配置Id */
  ServiceConfigId?: string;
  /** 支持AUTO, MANUAL，分别表示自动扩缩容，手动扩缩容 */
  ScaleMode?: string;
  /** 支持STOP(停止) RESUME(重启) */
  ServiceAction?: string;
  /** 备注 */
  Description?: string;
  /** GPU卡类型 */
  GpuType?: string;
  /** 处理器配置，单位为 1/1000 核 */
  Cpu?: number;
  /** 内存配置，单位为1M */
  Memory?: number;
  /** 显卡配置，单位为 1/1000 卡 */
  Gpu?: number;
  /** Cls日志主题ID */
  LogTopicId?: string;
}

declare interface UpdateServiceResponse {
  /** 服务 */
  Service?: ModelService;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [腾讯云 TI 平台 TI-EMS](https://cloud.tencent.com/document/product/1120) */
declare interface Tiems {
  (): Versions;
  /** 创建任务 */
  CreateJob(data: CreateJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJobResponse>;
  /** 创建资源组的伸缩组 */
  CreateRsgAsGroup(data: CreateRsgAsGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRsgAsGroupResponse>;
  /** 创建运行环境 */
  CreateRuntime(data: CreateRuntimeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuntimeResponse>;
  /** 创建服务 */
  CreateService(data: CreateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceResponse>;
  /** 创建服务配置 */
  CreateServiceConfig(data: CreateServiceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceConfigResponse>;
  /** 删除节点 */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 删除任务 */
  DeleteJob(data: DeleteJobRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteJobResponse>;
  /** 删除资源组 */
  DeleteResourceGroup(data: DeleteResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceGroupResponse>;
  /** 删除资源组的伸缩组 */
  DeleteRsgAsGroup(data: DeleteRsgAsGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRsgAsGroupResponse>;
  /** 删除运行环境 */
  DeleteRuntime(data: DeleteRuntimeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuntimeResponse>;
  /** 删除服务 */
  DeleteService(data: DeleteServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceResponse>;
  /** 删除服务配置 */
  DeleteServiceConfig(data: DeleteServiceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceConfigResponse>;
  /** 获取节点列表 */
  DescribeInstances(data: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取资源组列表 */
  DescribeResourceGroups(data: DescribeResourceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceGroupsResponse>;
  /** 查询伸缩组活动 */
  DescribeRsgAsGroupActivities(data: DescribeRsgAsGroupActivitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRsgAsGroupActivitiesResponse>;
  /** 查询资源组的伸缩组信息 */
  DescribeRsgAsGroups(data: DescribeRsgAsGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRsgAsGroupsResponse>;
  /** 描述服务运行环境 */
  DescribeRuntimes(data?: DescribeRuntimesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuntimesResponse>;
  /** 描述服务配置 */
  DescribeServiceConfigs(data: DescribeServiceConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceConfigsResponse>;
  /** 描述服务 */
  DescribeServices(data: DescribeServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServicesResponse>;
  /** 停用资源组的伸缩组 */
  DisableRsgAsGroup(data: DisableRsgAsGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DisableRsgAsGroupResponse>;
  /** 启用资源组的伸缩组 */
  EnableRsgAsGroup(data: EnableRsgAsGroupRequest, config?: AxiosRequestConfig): AxiosPromise<EnableRsgAsGroupResponse>;
  /** 暴露服务 */
  ExposeService(data: ExposeServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ExposeServiceResponse>;
  /** 更新任务 */
  UpdateJob(data: UpdateJobRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateJobResponse>;
  /** 更新资源组的伸缩组 */
  UpdateRsgAsGroup(data: UpdateRsgAsGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRsgAsGroupResponse>;
  /** 更新服务 */
  UpdateService(data: UpdateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateServiceResponse>;
}

export declare type Versions = ["2019-04-16"];

export default Tiems;
