/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AI分析配置 */
declare interface AIConfig {
  /** AI 分析类型。可选值为 Facemask(口罩识别)、Chefhat(厨师帽识别)、Smoking(抽烟检测)、Chefcloth(厨师服识别)、PhoneCall(接打电话识别)、Pet(宠物识别)、Body(人体识别)和Car(车辆车牌识别)等 */
  DetectType: string;
  /** 截图频率。可选值1～20秒 */
  TimeInterval: number;
  /** 模板生效的时间段。最多包含5组时间段 */
  OperTimeSlot: OperTimeSlot[];
}

/** AI任务信息 */
declare interface AITaskInfo {
  /** AI 任务 ID */
  TaskId?: string;
  /** AI 任务名称 */
  Name?: string;
  /** AI 任务描述 */
  Desc?: string;
  /** AI 任务状态。"on"代表开启了 AI 分析任务，"off"代表停止 AI 分析任务 */
  Status?: string;
  /** 通道 ID 列表 */
  ChannelList?: string[];
  /** AI 结果回调地址 */
  CallbackUrl?: string;
  /** AI 配置列表 */
  Templates?: AITemplates[];
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  UpdatedTime?: string;
}

/** AI识别结果 */
declare interface AITaskResultData {
  /** AI 任务 ID */
  TaskId?: string;
  /** 在 BeginTime 和 EndTime 时间之内，有识别结果的 AI 调用次数（分页依据此数值） */
  AIResultCount?: number;
  /** AI 任务执行结果详情 */
  AIResults?: AITaskResultInfo | null;
}

/** AI分析结果详情 */
declare interface AITaskResultInfo {
  /** 人体识别结果列表 */
  Body?: BodyAIResultInfo[] | null;
  /** 宠物识别结果列表 */
  Pet?: PetAIResultInfo[] | null;
  /** 车辆车牌识别结果列表 */
  Car?: CarAIResultInfo[] | null;
  /** 厨师帽结果列表 */
  ChefHat?: ChefHatAIResultInfo[] | null;
  /** 厨师服结果列表 */
  ChefCloth?: ChefClothAIResultInfo[] | null;
  /** 口罩识别结果列表 */
  FaceMask?: FaceMaskAIResultInfo[] | null;
  /** 抽烟检测结果列表 */
  Smoking?: SmokingAIResultInfo[] | null;
  /** 接打电话识别结果列表 */
  PhoneCall?: PhoneCallAIResultInfo[] | null;
}

/** AI模板信息 */
declare interface AITemplates {
  /** AI 类别。可选值 AI(AI 分析)和 Snapshot(截图)，Templates 列表中只能出现一种类型。 */
  Tag: string;
  /** AI 分析配置。和"SnapshotConfig"二选一。 */
  AIConfig?: AIConfig;
  /** 截图配置。和"AIConfig"二选一。 */
  SnapshotConfig?: SnapshotConfig;
}

/** 增加设备接口返回数据 */
declare interface AddDeviceData {
  /** 设备iD */
  DeviceId?: string;
  /** 设备编码（国标设备即我们为设备生成的20位国标编码，rtmp 设备为10 位设备编码） */
  Code?: string;
  /** 设备名称 */
  Name?: string;
  /** 设备接入协议，1:RTMP,2:GB,3:GW */
  AccessProtocol?: number;
  /** 设备类型，1:IPC,2:NVR */
  Type?: number;
  /** 设备接入服务节点ID */
  ClusterId?: string;
  /** 设备接入服务节点名称 */
  ClusterName?: string;
  /** 设备流传输协议，1:UDP,2:TCP */
  TransportProtocol?: number;
  /** 设备密码 */
  Password?: string;
  /** 设备描述 */
  Description?: string;
  /** 设备状态，0:未注册,1:在线,2:离线,3:禁用 */
  Status?: number;
  /** 设备所属组织ID */
  OrganizationId?: number;
  /** 设备接入网关ID，从查询网关列表接口中获取（仅网关接入需要） */
  GatewayId?: string;
  /** 网关接入协议类型，1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要） */
  ProtocolType?: number;
  /** 设备接入IP（仅网关接入需要） */
  Ip?: string;
  /** 设备Port（仅网关接入需要） */
  Port?: number;
  /** 设备用户名（仅网关接入需要） */
  Username?: string;
  /** 用户ID */
  AppId?: number;
}

/** 增加组织接口返回数据 */
declare interface AddOrgData {
  /** 组织 ID */
  OrganizationId?: string;
  /** 组织名称 */
  Name?: string;
  /** 组织父节点 ID */
  ParentId?: string;
  /** 组织层级 */
  Level?: number;
  /** 用户ID */
  AppId?: number;
  /** 组织结构 */
  ParentIds?: string;
  /** 设备总数 */
  Total?: number;
  /** 设备在线数量 */
  Online?: number;
}

/** 新增录像上云计划返回数据 */
declare interface AddRecordBackupPlanData {
  /** 录像上云计划ID */
  PlanId?: string;
  /** 录像上云计划名称 */
  PlanName?: string;
  /** 录像上云模板ID */
  TemplateId?: string;
  /** 录像上云计划描述 */
  Describe?: string;
  /** 云文件生命周期 */
  LifeCycle?: LifeCycleData;
  /** 录像上云计划状态，1:正常使用中，0:删除中，无法使用 */
  Status?: number;
  /** 通道数量 */
  ChannelCount?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 修改时间 */
  UpdateAt?: string;
}

/** 新增录像上云模板返回数据 */
declare interface AddRecordBackupTemplateData {
  /** 模板ID */
  TemplateId?: string;
  /** 模板名称 */
  TemplateName?: string;
  /** 上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  TimeSections?: RecordTemplateTimeSections[];
  /** 录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  DevTimeSections?: RecordTemplateTimeSections[];
  /** 上云倍速（支持1，2，4倍速） */
  Scale?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
}

/** 查询取回任务详情返回数据 */
declare interface AddRecordRetrieveTaskData {
  /** 任务ID */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 取回录像的开始时间 */
  StartTime?: number;
  /** 取回录像的结束时间 */
  EndTime?: number;
  /** 取回模式，1:极速模式，其他暂不支持 */
  Mode?: number;
  /** 副本有效期 */
  Expiration?: number;
  /** 任务状态，0:已取回，1:取回中，2:待取回 */
  Status?: number;
  /** 取回容量，单位MB */
  Capacity?: number;
  /** 任务描述 */
  Describe?: string;
}

/** 设置推拉流鉴权返回数据结构 */
declare interface AddStreamAuthData {
  /** 鉴权配置ID（uuid） */
  Id?: string;
  /** 是否开播放鉴权（1:开启,0:关闭） */
  PullState?: number;
  /** 播放密钥（仅支持字母数字，长度0-10位） */
  PullSecret?: string;
  /** 播放过期时间（单位：分钟） */
  PullExpired?: number;
  /** 是否开启推流鉴权（1:开启,0:关闭） */
  PushState?: number;
  /** 推流密钥（仅支持字母数字，长度0-10位） */
  PushSecret?: string;
  /** 推流过期时间（单位：分钟） */
  PushExpired?: number;
  /** 用户ID */
  AppId?: number;
}

/** 通用AI识别结果信息 */
declare interface BaseAIResultInfo {
  /** 名称。返回值有人体识别结果名称(person)、宠物识别结果名称(cat和dog) 、车辆车牌识别结果名称(vehicle) */
  Name?: string;
  /** 置信度 */
  Score?: number;
  /** 截图中坐标信息 */
  Location?: Location;
}

/** 批量操作设备返回结果 */
declare interface BatchOperateDeviceData {
  /** 任务 ID（用于在查询任务的子任务列表接口ListSubTasks中查询任务进度） */
  TaskId?: string;
}

/** 视频通道码率返回结果 */
declare interface BitRateInfo {
  /** 通道Id */
  ChannelId?: string;
  /** 码率,单位:kbps */
  Bitrate?: number;
}

/** 人体识别结果详情 */
declare interface BodyAIResultInfo {
  /** 时间字符串 */
  Time?: string;
  /** 截图 URL */
  Url?: string;
  /** 人体信息 */
  BodyInfo?: BaseAIResultInfo[];
}

/** 车辆车牌识别结果信息 */
declare interface CarAIResultInfo {
  /** 车系 */
  Serial?: string;
  /** 车辆品牌 */
  Brand?: string;
  /** 车辆类型 */
  Type?: string;
  /** 车辆颜色 */
  Color?: string;
  /** 置信度，0 - 100 */
  Confidence?: number;
  /** 年份，识别不出年份时返回0 */
  Year?: number;
  /** 车牌信息 */
  PlateContent?: PlateContent;
  /** 截图中坐标信息 */
  Location?: Location;
}

/** 通道属性信息 */
declare interface ChannelAttrInfo {
  /** 设备通道所属的设备ID */
  DeviceId?: string;
  /** 设备通道所属的设备名称 */
  DeviceName?: string;
  /** 设备通道ID */
  ChannelId?: string;
  /** 设备通道名称 */
  ChannelName?: string;
}

/** 通道及通道所属设备信息 */
declare interface ChannelInfo {
  /** 通道所属的设备ID */
  DeviceId: string;
  /** 设备通道ID，一个设备通道只允许被一个上云计划添加 */
  ChannelId: string;
}

/** 厨师服识别结果详情 */
declare interface ChefClothAIResultInfo {
  /** 时间字符串 */
  Time?: string;
  /** 截图 URL */
  Url?: string;
  /** 厨师服信息 */
  ChefClothInfoInfo?: BaseAIResultInfo[];
}

/** 厨师帽识别结果详情 */
declare interface ChefHatAIResultInfo {
  /** 时间字符串 */
  Time?: string;
  /** 截图 URL */
  Url?: string;
  /** 厨师帽信息 */
  ChefHatInfo?: BaseAIResultInfo[];
}

/** 获取开流地址返回数据 */
declare interface ControlDeviceStreamData {
  /** flv 流地址 */
  Flv?: string;
  /** hls 流地址 */
  Hls?: string;
  /** rtmp 流地址 */
  Rtmp?: string;
}

/** 查询设备通道信息返回结果 */
declare interface DescribeDeviceChannelData {
  /** 设备 ID */
  DeviceId?: string;
  /** 通道 ID */
  ChannelId?: string;
  /** 通道编码 */
  ChannelCode?: string;
  /** 通道名称 */
  Name?: string;
  /** 流状态（0:未传输,1:传输中） */
  Status?: number;
  /** 是否可控 Ptz（0:不可控,1:可控） */
  PTZType?: number;
  /** 通道厂商 */
  Manufacturer?: string;
  /** 通道支持分辨率（分辨率列表由‘/’隔开，国标协议样例（6/3），自定义样例（12800960/640480）） */
  Resolution?: string;
  /** 通道在离线状态（0:离线,1:在线） */
  State?: number;
  /** 所在地域 */
  Region?: string;
}

/** 查询设备接口返回数据 */
declare interface DescribeDeviceData {
  /** 设备ID */
  DeviceId?: string;
  /** 设备编码（国标设备即我们为设备生成的20位国标编码，rtmp 设备为10 位设备编码） */
  Code?: string;
  /** 设备名称 */
  Name?: string;
  /** 设备接入协议，1:RTMP,2:GB,3:GW */
  AccessProtocol?: number;
  /** 设备类型，1:IPC,2:NVR */
  Type?: number;
  /** 设备接入服务节点id */
  ClusterId?: string;
  /** 设备接入服务节点名称 */
  ClusterName?: string;
  /** 设备流传输协议，1:UDP,2:TCP */
  TransportProtocol?: number;
  /** 设备密码 */
  Password?: string;
  /** 设备描述 */
  Description?: string;
  /** sip服务ID */
  SipId?: string;
  /** sip服务域 */
  SipDomain?: string;
  /** sip服务IP地址 */
  SipIp?: string;
  /** sip服务端口 */
  SipPort?: number;
  /** Rtmp设备推流地址(仅rtmp设备有效) */
  PushStreamUrl?: string;
  /** 设备状态，0:未注册,1:在线,2:离线,3:禁用 */
  Status?: number;
  /** 设备所属组织ID */
  OrganizationId?: string;
  /** 设备接入网关ID，从查询网关列表接口中获取（仅网关接入需要） */
  GatewayId?: string;
  /** 设备所属网关名称 */
  GatewayName?: string;
  /** 设备网关协议名称 */
  ProtocolTypeName?: string;
  /** 网关接入协议类型，1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要） */
  ProtocolType?: number;
  /** 设备接入IP */
  Ip?: string;
  /** 设备Port */
  Port?: number;
  /** 设备用户名 */
  Username?: string;
  /** 设备地域 */
  Region?: string;
  /** 设备厂商 */
  Manufacturer?: string;
  /** 音频关开（0：关闭；1：开启）关闭时丢弃音频 */
  AudioSwitch?: number;
  /** 订阅开关（0：关闭；1：开启）默认开启，开启状态下会订阅设备通道变化，仅国标NVR设备有效 */
  SubscribeSwitch?: number;
  /** RTMP推流地址自定义appName */
  AppName?: string;
  /** RTMP推流地址自定义streamName */
  StreamName?: string;
  /** 是否开启静音帧（0：关闭；1 开启） */
  SilentFrameSwitch?: number;
}

/** 查询设备预置位返回数据 */
declare interface DescribeDevicePresetData {
  /** 预置位索引 只支持1-10的索引 */
  Index?: number;
  /** 预置位名称 */
  Name?: string;
}

/** 查询设备可接入集群信息 */
declare interface DescribeDeviceRegion {
  /** 服务节点描述 */
  Label?: string;
  /** 服务节点 ID（对应为其他接口中所需的 ClusterId） */
  Value?: string;
  /** 地域信息 */
  Region?: string;
}

/** 查询域名详情数据 */
declare interface DescribeDomainData {
  /** 域名ID */
  Id?: string;
  /** 播放域名 */
  PlayDomain?: string;
  /** CNAME 记录值 */
  InternalDomain?: string;
  /** 是否上传证书（0：否，1：是） */
  HaveCert?: number;
  /** 服务节点 ID */
  ClusterId?: string;
  /** 服务节点名称 */
  ClusterName?: string;
  /** 用户ID */
  AppId?: number;
  /** 证书ID */
  CertId?: string;
  /** 域名类型 0:拉流域名 1:推流域名 */
  DomainType?: number;
}

/** 查询域名可绑定集群数据 */
declare interface DescribeDomainRegionData {
  /** 服务节点描述 */
  Label?: string;
  /** 服务节点 ID（对应为其他接口中所需的 ClusterId） */
  Value?: string;
  /** 地域信息 */
  Region?: string;
}

/** 查询网关信息返回结果 */
declare interface DescribeGatewayData {
  /** 网关索引ID，用于网关查询，更新，删除操作 */
  GatewayId?: string;
  /** 网关编码，由网关设备生成的唯一编码 */
  GwId?: string;
  /** 网关名称，仅支持中文、英文、数字、_、-，长度不超过32个字符 */
  Name?: string;
  /** 网关描述，仅支持中文、英文、数字、_、-，长度不超过128个字符 */
  Description?: string;
  /** 服务节点id */
  ClusterId?: string;
  /** 服务节点名称 */
  ClusterName?: string;
  /** 网关状态，0：离线，1:在线 */
  Status?: number;
  /** 网关版本 */
  Version?: GatewayVersion[] | null;
  /** 网关下挂设备数量 */
  DeviceNum?: number;
  /** 激活时间 */
  CreatedAt?: string;
  /** 所属地域 */
  Region?: string;
}

/** 查询网关监控信息返回结果 */
declare interface DescribeGatewayMonitor {
  /** 设备接入总数 */
  DeviceTotal?: number;
  /** 设备在线数 */
  DeviceOnline?: number;
  /** 设备离线数 */
  DeviceOffline?: number;
  /** 视频通道总数 */
  ChannelTotal?: number;
  /** 视频通道在线数 */
  ChannelOnline?: number;
  /** 视频通道离线数 */
  ChannelOffline?: number;
  /** 网关上行流量,单位kbps */
  UpFlow?: number;
  /** 流在传输中的通道数 */
  ChannelPull?: number;
  /** 流未传输中的通道数 */
  ChannelUnPull?: number;
}

/** 查询网关所支持的接入协议 */
declare interface DescribeGatewayProtocolData {
  /** 接入协议的字典码 */
  TypeCode?: string;
  /** 接入协议类型值 */
  Value?: number;
  /** 接入协议的类型描述 */
  Label?: string;
  /** 协议值文本 */
  ValueText?: string;
}

/** 查询网关服务版本信息返回数据 */
declare interface DescribeGatewayVersion {
  /** 服务名 */
  Name?: string;
  /** 服务版本 */
  Version?: string;
  /** 服务最新版本 */
  LatestVersion?: string;
  /** 是否需要更新 */
  IsUpdate?: boolean;
  /** 升级信息 */
  UpgradeInfo?: string[];
}

/** 查询网关服务版本信息返回数据 */
declare interface DescribeGatewayVersionData {
  /** 网关服务列表 */
  Services?: DescribeGatewayVersion[];
}

/** 查询组织数据返回结果 */
declare interface DescribeOrganizationData {
  /** 组织 ID */
  OrganizationId?: string;
  /** 组织名称 */
  Name?: string;
  /** 组织父节点 ID */
  ParentId?: string;
  /** 组织层级 */
  Level?: number;
  /** 用户id */
  AppId?: number;
  /** 组织结构 */
  ParentIds?: string;
  /** 设备总数 */
  Total?: number;
  /** 设备在线数量 */
  Online?: number;
}

/** 查询录像上云计划返回数据 */
declare interface DescribeRecordBackupPlanData {
  /** 录像上云计划ID */
  PlanId?: string;
  /** 录像上云计划名称 */
  PlanName?: string;
  /** 录像上云模板ID */
  TemplateId?: string;
  /** 录像上云计划描述 */
  Describe?: string;
  /** 云文件生命周期 */
  LifeCycle?: LifeCycleData;
  /** 录像上云计划状态，1:正常使用中，0:删除中，无法使用 */
  Status?: number;
  /** 通道数量 */
  ChannelCount?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 修改时间 */
  UpdateAt?: string;
}

/** 查询录像上云模板返回数据 */
declare interface DescribeRecordBackupTemplateData {
  /** 模板ID */
  TemplateId?: string;
  /** 模板名称 */
  TemplateName?: string;
  /** 上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  TimeSections?: RecordTemplateTimeSections[];
  /** 录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  DevTimeSections?: RecordTemplateTimeSections[];
  /** 上云倍速（支持1，2，4倍速） */
  Scale?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
}

/** 用于查询设备云端录像时间轴信息返回数据 */
declare interface DescribeRecordFileData {
  /** 提示类型，0:时间段内无归档录像，1:时间段内有归档录像 */
  Tips?: number;
  /** 存在为数组格式，不存在字段内容为空 */
  List?: RecordTimeLine[] | null;
}

/** 查询云录像取回任务详情返回数据 */
declare interface DescribeRecordRetrieveTaskData {
  /** 取回任务ID */
  TaskId?: string;
  /** 取回任务名称 */
  TaskName?: string;
  /** 取回录像的开始时间 */
  StartTime?: number;
  /** 取回录像的结束时间 */
  EndTime?: number;
  /** 取回模式，1:极速模式，其他暂不支持 */
  Mode?: number;
  /** 副本有效期 */
  Expiration?: number;
  /** 任务状态，0:已取回，1:取回中，2:待取回 */
  Status?: number;
  /** 取回容量，单位MB */
  Capacity?: number;
  /** 任务的设备通道id */
  Channels?: RecordRetrieveTaskChannelInfo[];
  /** 任务描述 */
  Describe?: string;
  /** 任务通道数量 */
  ChannelCount?: number;
}

/** 查询推拉流鉴权返回数据结构 */
declare interface DescribeStreamAuthData {
  /** 鉴权配置ID（uuid） */
  Id?: string;
  /** 是否开播放鉴权（1:开启,0:关闭） */
  PullState?: number;
  /** 播放密钥（仅支持字母数字，长度0-10位） */
  PullSecret?: string;
  /** 播放过期时间（单位：分钟） */
  PullExpired?: number;
  /** 是否开启推流鉴权（1:开启,0:关闭） */
  PushState?: number;
  /** 推流密钥（仅支持字母数字，长度0-10位） */
  PushSecret?: string;
  /** 推流过期时间（单位：分钟） */
  PushExpired?: number;
  /** 用户ID */
  AppId?: number;
}

/** 查询视频通道码率的返回结果列表 */
declare interface DescribeVideoBitRateList {
  /** 通道码率列表 */
  BitRates?: BitRateInfo[];
}

/** 获取云录像下载URL返回的数据 */
declare interface DescribeVideoDownloadUrlData {
  /** 录像文件下载 URL注意：URL 有效期是10分钟，过期后将拒绝访问，若需再用请重新获取 录像文件下载采用分块传输编码，响应头Transfer-Encoding:chunked 下载文件命名格式为{ChannelId}-{BeginTime}-{EndTime}.{FileType} */
  Url?: string;
  /** 实际下载录像的开始时间注意：当请求中指定IsRespActualTime参数为true时，才有该字段 */
  ActualBeginTime?: string;
  /** 实际下载录像的结束时间注意：当请求中指定IsRespActualTime参数为true时，才有该字段 */
  ActualEndTime?: string;
}

/** 口罩识别结果详情 */
declare interface FaceMaskAIResultInfo {
  /** 时间字符串 */
  Time?: string;
  /** 截图 URL */
  Url?: string;
  /** 口罩信息 */
  FaceMaskInfo?: BaseAIResultInfo[];
}

/** 网关设备数据 */
declare interface GatewayDevice {
  /** 设备ID */
  DeviceId?: string;
  /** 网关接入协议类型 */
  ProtocolType?: number;
  /** 网关接入协议名称 */
  ProtocolTypeName?: string;
  /** 设备名称 */
  Name?: string;
  /** 设备类型 */
  Type?: number;
  /** 设备内网IP */
  Ip?: string;
  /** 设备端口 */
  Port?: number;
  /** 设备下通道数 */
  ChannelNum?: number;
  /** 设备状态 */
  Status?: number;
}

/** 网关详情版本信息 */
declare interface GatewayVersion {
  /** 服务名称 */
  Name?: string;
  /** 服务版本 */
  Version?: string;
}

/** 查询网关列表返回结果 */
declare interface GatewaysData {
  /** 网关索引ID */
  GatewayId?: string;
  /** 网关编码 */
  GwId?: string;
  /** 网关名称，仅支持中文、英文、数字、_、-，长度不超过32个字符 */
  Name?: string;
  /** 网关描述，仅支持中文、英文、数字、_、-，长度不超过128个字符 */
  Description?: string;
  /** 网关所属服务节点ID */
  ClusterId?: string;
  /** 网关所属服务节点名称 */
  ClusterName?: string;
  /** 网关所属地域 */
  Region?: string;
  /** 网关状态，0：离线，1:在线 */
  Status?: number;
  /** 网关激活时间 */
  CreatedAt?: string;
  /** 所属网关设备数量 */
  DeviceNum?: number;
}

/** ISUP智能安全接入 API返回数据 */
declare interface ISAPIOutputData {
  /** 输出参数 */
  OutputData?: string;
}

/** 生命周期，云文件生命周期设置，管理文件冷、热存储的时间 */
declare interface LifeCycleData {
  /** 云文件热存储时长，单位天，最小1天，最大3650天 */
  Transition: number;
  /** 云文件冷存储时长， 单位天，0表示不设置，设置时最小60天，Expiration字段加Transition字段不超过3650天 */
  Expiration: number;
}

/** 获取AI任务列表的数据 */
declare interface ListAITaskData {
  /** AI任务列表 */
  List?: AITaskInfo[] | null;
}

/** 获取设备列表的响应 */
declare interface ListDeviceInfo {
  /** 设备 ID */
  DeviceId?: string;
  /** 设备编码 */
  Code?: string;
  /** 设备状态。0:未注册，1:在线，2:离线，3:禁用 */
  Status?: number;
  /** 设备流传输协议。1:UDP,2:TCP */
  TransportProtocol?: number;
  /** 设备名称 */
  Name?: string;
  /** 设备类型。1:IPC,2:NVR */
  Type?: number;
  /** 设备密码 */
  Password?: string;
  /** 描述 */
  Description?: string;
  /** 设备接入服务节点 ID */
  ClusterId?: string;
  /** 服务节点名称 */
  ClusterName?: string;
  /** 接入协议。1:RTMP,2:GB,3:GW */
  AccessProtocol?: number;
  /** 设备所属组织 ID */
  OrganizationId?: string;
  /** 通道数量 */
  ChannelNum?: number;
}

/** 用户禁止播流的通道列表返回数据 */
declare interface ListForbidplayChannelsData {
  /** 第几页 */
  PageNumber?: number;
  /** 当前页的设备数量 */
  PageSize?: number;
  /** 本次查询的设备通道总数 */
  TotalCount?: number;
  /** 设备通道信息列表 */
  List?: ChannelAttrInfo[] | null;
}

/** 查询网关设备列表返回数据 */
declare interface ListGatewayDevicesData {
  /** 网关下设备列表 */
  List?: GatewayDevice[];
  /** 网关下设备总数 */
  TotalCount?: number;
}

/** 查询网关列表返回结果 */
declare interface ListGatewaysData {
  /** 网关列表 */
  List?: GatewaysData[];
  /** 网关数量 */
  TotalCount?: number;
}

/** 组织目录下的未添加到实时上云计划中的通道数量返回数据 */
declare interface ListOrganizationChannelNumbersData {
  /** 组织下通道总数 */
  TotalCount?: number;
  /** 组织下未添加到计划的通道总数 */
  NotInPlanCount?: number;
}

/** 查询组织目录下的通道列表返回数据 */
declare interface ListOrganizationChannelsData {
  /** 第几页 */
  PageNumber?: number;
  /** 当前页的设备数量 */
  PageSize?: number;
  /** 本次查询的设备通道总数 */
  TotalCount?: number;
  /** 设备通道信息列表 */
  List?: OrganizationChannelInfo[] | null;
}

/** 查询录像上云计划列表返回数据 */
declare interface ListRecordBackupPlanData {
  /** 录像上云计划ID */
  PlanId?: string;
  /** 录像上云计划名称 */
  PlanName?: string;
  /** 录像上云模板ID */
  TemplateId?: string;
  /** 录像上云计划描述 */
  Describe?: string;
  /** 云文件生命周期 */
  LifeCycle?: LifeCycleData;
  /** 录像上云计划状态，1:正常使用中，0:删除中，无法使用 */
  Status?: number;
  /** 通道数量 */
  ChannelCount?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 修改时间 */
  UpdateAt?: string;
}

/** 查询录像上云计划关联通道的返回数据 */
declare interface ListRecordBackupPlanDevicesData {
  /** 第几页 */
  PageNumber?: number;
  /** 当前页的设备数量 */
  PageSize?: number;
  /** 本次查询的设备通道总数 */
  TotalCount?: number;
  /** 设备通道信息列表 */
  List?: RecordPlanChannelInfo[] | null;
}

/** 查询录像上云模板列表返回数据 */
declare interface ListRecordBackupTemplatesData {
  /** 模板ID */
  TemplateId?: string;
  /** 模板名称 */
  TemplateName?: string;
  /** 上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  TimeSections?: RecordTemplateTimeSections[];
  /** 录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  DevTimeSections?: RecordTemplateTimeSections[];
  /** 上云倍速（支持1，2，4倍速） */
  Scale?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
}

/** 用户下所有实时上云计划中的通道id列表返回数据 */
declare interface ListRecordPlanChannelsData {
  /** 用户所有计划下通道id，存在通道是为数组格式，不存在时，字段数据为空 */
  List?: string[] | null;
}

/** 云计划下的设备通道列表返回数据 */
declare interface ListRecordPlanDevicesData {
  /** 第几页 */
  PageNumber?: number;
  /** 当前页的设备数量 */
  PageSize?: number;
  /** 本次查询的设备通道总数 */
  TotalCount?: number;
  /** 设备通道信息列表 */
  List?: RecordPlanChannelInfo[] | null;
}

/** 列举子任务列表 */
declare interface ListSubTasksData {
  /** 子任务列表 */
  List?: SubTaskData[];
  /** 子任务数量 */
  TotalCount?: number;
}

/** 查询任务列表 */
declare interface ListTasksData {
  /** 任务列表 */
  List?: TaskData[];
  /** 任务数量 */
  TotalCount?: number;
}

/** AI识别结果在画面中坐标 */
declare interface Location {
  /** 左上角 X 坐标轴 */
  X?: number;
  /** 左上角 Y 坐标轴 */
  Y?: number;
  /** 方框宽 */
  Width?: number;
  /** 方框高 */
  Height?: number;
}

/** AI分析的时间段配置 */
declare interface OperTimeSlot {
  /** 开始时间。格式为"hh:mm:ss"，且 Start 必须小于 End */
  Start: string;
  /** 结束时间。格式为"hh:mm:ss"，且 Start 必须小于 End */
  End: string;
}

/** 组织目录下的通道信息 */
declare interface OrganizationChannelInfo {
  /** 设备通道所属的设备ID */
  DeviceId?: string;
  /** 设备通道所属的设备名称 */
  DeviceName?: string;
  /** 设备通道ID */
  ChannelId?: string;
  /** 设备通道名称 */
  ChannelName?: string;
  /** 该通道是否在上云计划中，如果是，则不能在添加到其他上云计划|true：在上云计划中，false：不在上云计划中 */
  InPlan?: boolean;
}

/** 宠物识别结果详情 */
declare interface PetAIResultInfo {
  /** 时间字符串 */
  Time?: string;
  /** 截图 URL */
  Url?: string;
  /** 宠物信息 */
  PetInfo?: BaseAIResultInfo[];
}

/** 打电话识别结果详情 */
declare interface PhoneCallAIResultInfo {
  /** 时间字符串 */
  Time?: string;
  /** 截图 URL */
  Url?: string;
  /** 打电话信息 */
  PhoneCallInfo?: BaseAIResultInfo[];
}

/** AI车牌信息 */
declare interface PlateContent {
  /** 车牌号信息 */
  Plate?: string;
  /** 车牌的颜色 */
  Color?: string;
  /** 车牌的种类，例如普通蓝牌 */
  Type?: string;
  /** 截图中坐标信息 */
  Location?: Location;
}

/** 本地录像播放url数据结构 */
declare interface PlayRecordData {
  /** 录像播放地址 */
  Flv?: string;
}

/** 实时上云计划基础信息 */
declare interface RecordPlanBaseInfo {
  /** 上云计划ID */
  PlanId?: string;
  /** 上云计划名称 */
  PlanName?: string;
  /** 上云模板ID */
  TemplateId?: string;
  /** 上云计划描述 */
  Describe?: string;
  /** 码流类型，default:设备默认码流类型，main:主码流，sub:子码流，其他根据设备能力集自定义 */
  StreamType?: string;
  /** 云文件生命周期 */
  LifeCycle?: LifeCycleData;
  /** 录像计划状态，1:正常使用中，0:删除中，无法使用 */
  Status?: number;
  /** 通道总数 */
  ChannelCount?: number;
  /** 录像补录模式（0:不启用，1:启用） */
  RepairMode?: number;
}

/** 计划下的设备通道信息 */
declare interface RecordPlanChannelInfo {
  /** 设备通道所属的设备ID */
  DeviceId?: string;
  /** 设备通道所属的设备名称 */
  DeviceName?: string;
  /** 设备通道ID */
  ChannelId?: string;
  /** 设备通道名称 */
  ChannelName?: string;
  /** 所属组织名称 */
  OrganizationName?: string;
  /** 通道所属设备的接入协议类型 */
  AccessProtocol?: number;
}

/** 实时上云计划添加和修改的返回数据 */
declare interface RecordPlanOptData {
  /** 上云计划ID */
  PlanId?: string;
  /** 上云计划名称 */
  PlanName?: string;
  /** 上云模板ID */
  TemplateId?: string;
  /** 上云计划描述 */
  Describe?: string;
  /** 云文件生命周期 */
  LifeCycle?: LifeCycleData;
  /** 码流类型，default:设备默认码流类型，main:主码流，sub:子码流，其他根据设备能力集自定义 */
  StreamType?: string;
  /** 录像补录模式（0:不启用，1:启用） */
  RepairMode?: number;
}

/** 云录像回放url */
declare interface RecordPlaybackUrl {
  /** hls回放url */
  Hls?: string;
}

/** 取回任务通道信息 */
declare interface RecordRetrieveTaskChannelInfo {
  /** 设备通道所属的设备ID */
  DeviceId?: string;
  /** 设备通道所属的设备名称 */
  DeviceName?: string;
  /** 设备通道ID */
  ChannelId?: string;
  /** 设备通道名称 */
  ChannelName?: string;
  /** 任务状态，0:已取回，1:取回中，2:待取回, 3:无归档录像 */
  Status?: number;
}

/** 录像取回任务详情基础信息 */
declare interface RecordRetrieveTaskDetailsInfo {
  /** 任务ID */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 取回录像的开始时间 */
  StartTime?: number;
  /** 取回录像的结束时间 */
  EndTime?: number;
  /** 取回模式，1:极速模式，其他暂不支持 */
  Mode?: number;
  /** 副本有效期 */
  Expiration?: number;
  /** 任务状态， 0:已取回，1:取回中，2:待取回 */
  Status?: number;
  /** 取回容量，单位MB */
  Capacity?: number;
  /** 任务描述 */
  Describe?: string;
  /** 任务通道数量 */
  ChannelCount?: number;
}

/** 录像切片信息 */
declare interface RecordSliceInfo {
  /** 计划ID */
  PlanId?: string;
  /** 录像切片开始和结束时间列表 */
  List?: RecordTimeLine[];
}

/** 实时上云模板信息数据 */
declare interface RecordTemplateInfo {
  /** 模板ID */
  TemplateId?: string;
  /** 模板名称 */
  TemplateName?: string;
  /** 上云时间段，按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟 */
  TimeSections?: RecordTemplateTimeSections[];
}

/** 上云模板的时间片段数据格式 */
declare interface RecordTemplateTimeSections {
  /** 周日期，取值范围1～7（对应周一～周日 */
  DayOfWeek: number;
  /** 开始时间，格式：HH:MM:SS，范围：[00:00:00～23:59:59] */
  StartTime: string;
  /** 结束时间，格式：HH:MM:SS，范围：[00:00:00～23:59:59] */
  EndTime: string;
}

/** 云录像时间片段 */
declare interface RecordTimeLine {
  /** 时间片段开始时间，UTC秒数，例如：1662114146 */
  Begin?: number;
  /** 时间片段结束时间，UTC秒数，例如：1662114146 */
  End?: number;
  /** 对应时间片段的播放url */
  HlsUrl?: string;
}

/** 设置通道禁止播流，有通道Id和使能enable字段 */
declare interface SetForbidplayChannelParam {
  /** 通道Id */
  ChannelId: string;
  /** 是否禁止通道播流 */
  Enable: boolean;
}

/** 抽烟识别结果详情 */
declare interface SmokingAIResultInfo {
  /** 时间字符串 */
  Time?: string;
  /** 截图 URL */
  Url?: string;
  /** 抽烟信息 */
  SmokingInfo?: BaseAIResultInfo[];
}

/** 截图配置 */
declare interface SnapshotConfig {
  /** 截图频率。可选值1～20秒 */
  TimeInterval: number;
  /** 模板生效的时间段。最多包含5组时间段 */
  OperTimeSlot: OperTimeSlot[];
}

/** 子任务详情 */
declare interface SubTaskData {
  /** 子任务ID */
  SubTaskId?: string;
  /** 任务状态1:NEW,2:RUNNING,3:COMPLETED ,4:FAILED */
  Status?: number;
  /** 任务失败原因 */
  FailReason?: string;
  /** 任务进度 */
  Progress?: number;
  /** 操作类型 */
  Action?: string;
  /** 操作类型中文描述 */
  ActionZhDesc?: string;
  /** 资源ID */
  ResourceId?: string;
  /** 启动任务时间 */
  StartedAt?: string;
  /** 创建任务时间 */
  CreatedAt?: string;
  /** 更新任务时间 */
  UpdatedAt?: string;
  /** 任务运行时间，单位ms */
  Runtime?: number;
  /** 设备ID */
  DeviceId?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 通道ID */
  ChannelId?: string;
  /** 通道名称 */
  ChannelName?: string;
}

/** 查询复杂任务详情返回结果 */
declare interface TaskData {
  /** 任务ID */
  TaskId?: string;
  /** 任务状态1:NEW,2:RUNNING,3:COMPLETED ,4:FAILED */
  Status?: number;
  /** 失败原因 */
  FailReason?: string;
  /** 进度（0-1） */
  Progress?: number;
  /** 任务操作类型，批量任务类型以Batch开头 */
  Action?: string;
  /** 操作类型中文描述 */
  ActionZhDesc?: string;
  /** 任务类型 1.简单 2.复杂 3.子任务 */
  TaskType?: number;
  /** 任务资源id（复杂任务该字段无效） */
  ResourceId?: string;
  /** 总任务数（仅复杂任务有效） */
  Total?: number;
  /** 成功任务数（仅复杂任务有效） */
  SuccessCount?: number;
  /** 失败任务数（仅复杂任务有效） */
  FailCount?: number;
  /** 运行任务数（仅复杂任务有效） */
  RunningCount?: number;
  /** 启动任务时间 */
  StartedAt?: string;
  /** 创建任务时间 */
  CreatedAt?: string;
  /** 更新任务时间 */
  UpdatedAt?: string;
  /** 任务运行时间，单位ms */
  Runtime?: number;
  /** 设备ID */
  DeviceId?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 通道ID */
  ChannelId?: string;
  /** 通道名称 */
  ChannelName?: string;
}

/** 时间片段结构体 */
declare interface Timeline {
  /** 分片起始时间 */
  Begin?: number;
  /** 分片结束时间 */
  End?: number;
}

/** 修改设备接口返回数据 */
declare interface UpdateDeviceData {
  /** 设备ID */
  DeviceId?: string;
  /** 设备编码（国标设备即我们为设备生成的20位国标编码，rtmp 设备为10 位设备编码） */
  Code?: string;
  /** 设备名称 */
  Name?: string;
  /** 设备接入协议，1:RTMP,2:GB,3:GW */
  AccessProtocol?: number;
  /** 设备类型，1:IPC,2:NVR */
  Type?: number;
  /** 设备接入服务节点ID */
  ClusterId?: string;
  /** 设备接入服务节点名称 */
  ClusterName?: string;
  /** 设备流传输协议，1:UDP,2:TCP */
  TransportProtocol?: number;
  /** 设备密码 */
  Password?: string;
  /** 设备描述 */
  Description?: string;
  /** 设备状态，0:未注册,1:在线,2:离线,3:禁用 */
  Status?: number;
  /** 设备所属组织ID */
  OrganizationId?: number;
  /** 设备接入网关ID，从查询网关列表接口中获取（仅网关接入需要） */
  GatewayId?: string;
  /** 网关接入协议类型，1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要） */
  ProtocolType?: number;
  /** 设备接入IP */
  Ip?: string;
  /** 设备Port */
  Port?: number;
  /** 设备用户名 */
  Username?: string;
  /** 用户Id */
  AppId?: number;
}

/** 修改网关信息返回结果 */
declare interface UpdateGatewayData {
  /** 网关索引ID */
  GatewayId?: string;
  /** 网关编码 */
  GwId?: string;
  /** 网关名称，仅支持中文、英文、数字、_、-，长度不超过32个字符 */
  Name?: string;
  /** 网关描述，仅支持中文、英文、数字、_、-，长度不超过128个字符 */
  Description?: string;
  /** 服务节点ID */
  ClusterId?: string;
  /** 服务节点名称 */
  ClusterName?: string;
  /** 网关状态，0：离线，1:在线 */
  Status?: number;
  /** 激活时间 */
  CreatedAt?: number;
  /** 网关密钥 */
  Secret?: string;
  /** 网关版本信息 */
  Version?: string;
}

/** 修改组织接口返回数据 */
declare interface UpdateOrgData {
  /** 组织 ID */
  OrganizationId?: string;
  /** 组织名称 */
  Name?: string;
  /** 组织父节点 ID */
  ParentId?: string;
  /** 组织层级 */
  Level?: number;
  /** 用户ID */
  AppId?: number;
  /** 组织结构 */
  ParentIds?: string;
  /** 设备总数 */
  Total?: number;
  /** 设备在线数量 */
  Online?: number;
}

/** 修改录像上云计划返回数据 */
declare interface UpdateRecordBackupPlanData {
  /** 录像上云计划ID */
  PlanId?: string;
  /** 录像上云计划名称 */
  PlanName?: string;
  /** 录像上云模板ID */
  TemplateId?: string;
  /** 录像上云计划描述 */
  Describe?: string;
  /** 云文件生命周期 */
  LifeCycle?: LifeCycleData;
  /** 录像上云计划状态，1:正常使用中，0:删除中，无法使用 */
  Status?: number;
  /** 通道数量 */
  ChannelCount?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 修改时间 */
  UpdateAt?: string;
}

/** 修改录像上云计划数据结构 */
declare interface UpdateRecordBackupPlanModify {
  /** 录像上云计划名称（仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复，不修改名称时，不需要该字段） */
  PlanName?: string;
  /** 录制模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取，不修改模板ID时，不需要该字段） */
  TemplateId?: string;
  /** 录像上云计划描述（仅支持中文、英文、数字、_、-，长度不超过128个字符， 不修改描述时，不需要该字段） */
  Describe?: string;
  /** 生命周期（录像文件生命周期设置，管理文件冷、热存储的时间，不修改生命周期时，不需要该字段） */
  LifeCycle?: LifeCycleData;
  /** 要新增的设备通道（Json数组，没有新增时，不需要该字段，一次添加通道总数不超过5000个，包括组织目录下的通道数量） */
  Add?: ChannelInfo[];
  /** 要删除的设备通道（Json数组，内容为要删除的设备通道id，没有删除设备通道时，不需要该字段） */
  Del?: string[];
  /** 添加组织目录下所有设备通道（Json数组，可以为空，并且通道总数量不超过5000个（包括Add字段通道数量）） */
  OrganizationId?: string[];
}

/** 修改录像上云模板返回数据 */
declare interface UpdateRecordBackupTemplateData {
  /** 模板ID */
  TemplateId?: string;
  /** 模板名称 */
  TemplateName?: string;
  /** 上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  TimeSections?: RecordTemplateTimeSections[];
  /** 录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  DevTimeSections?: RecordTemplateTimeSections[];
  /** 上云倍速（支持1，2，4倍速） */
  Scale?: number;
  /** 创建时间 */
  CreateAt?: string;
  /** 更新时间 */
  UpdateAt?: string;
}

/** 修改录像上云模板数据结构 */
declare interface UpdateRecordBackupTemplateModify {
  /** 模板名称（不修改名称时，不需要带该字段） */
  TemplateName?: string;
  /** 上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  TimeSections?: RecordTemplateTimeSections[];
  /** 录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  DevTimeSections?: RecordTemplateTimeSections[];
  /** 上云倍速（支持1，2，4倍速） */
  Scale?: number;
}

/** 修改实时上云录像计划的数据 */
declare interface UpdateRecordPlanData {
  /** 上云计划名称，仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复，不修改名称时，不需要该字段 */
  PlanName?: string;
  /** 上云模板ID，不修改模板ID时，不需要该字段 */
  TemplateId?: string;
  /** 上云计划描述，仅支持中文、英文、数字、_、-，长度不超过128个字符， 不修改描述时，不需要该字段 */
  Describe?: string;
  /** 码流类型，default:不指定码流类型，以设备默认推送类型为主， main:主码流，sub:子码流，其他根据设备能力集自定义，长度不能超过32个字节 */
  StreamType?: string;
  /** 生命周期，文件生命周期设置，管理文件冷、热存储的时间，不修改生命周期时，不需要该字段 */
  LifeCycle?: LifeCycleData;
  /** 要新增的设备通道,Json数组，没有新增时，不需要该字段，一次添加通道总数不超过5000个，包括组织目录下的通道数量 */
  Add?: ChannelInfo[];
  /** 要删除的设备通道，Json数组，内容为要删除的设备通道id，没有删除设备通道时，不需要该字段 */
  Del?: string[];
  /** 组织目录ID，添加组织目录下所有设备通道，Json数组，可以为空，并且通道总数量不超过5000个（包括Add字段通道数量） */
  OrganizationId?: string[];
  /** 录像补录模式（0:不启用，1:启用） */
  RepairMode?: number;
}

/** 修改实时上云模板的请求数据结构 */
declare interface UpdateRecordTemplateData {
  /** 模板名称， 不修改名称时，不需要带该字段 */
  TemplateName?: string;
  /** 上云时间段，不修改名称时，不需要带该字段 */
  TimeSections?: RecordTemplateTimeSections[];
}

declare interface AddAITaskRequest {
  /** AI 任务名称。仅支持中文、英文、数字、_、-，长度不超过32个字符 */
  Name: string;
  /** 通道 ID 列表。不能添加存在于其他 AI 任务的通道，限制1000个通道。 */
  ChannelList: string[];
  /** AI 配置列表 */
  Templates: AITemplates[];
  /** AI 任务描述。仅支持中文、英文、数字、_、-，长度不超过128个字符 */
  Desc?: string;
  /** AI 结果回调地址。类似 "http://ip:port/***或者https://domain/*** */
  CallbackUrl?: string;
  /** 是否立即开启 AI 任务。"true"代表立即开启 AI 任务，"false"代表暂不开启 AI 任务，默认为 false。 */
  IsStartTheTask?: boolean;
}

declare interface AddAITaskResponse {
  /** AI任务信息 */
  Data?: AITaskInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddOrganizationRequest {
  /** 组织名称（仅支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过64位，且组织名称不能重复） */
  Name: string;
  /** 组织父节点 ID（从查询组织接口DescribeOrganization中获取，填0代表根组织） */
  ParentId: string;
}

declare interface AddOrganizationResponse {
  /** 增加组织接口返回数据 */
  Data?: AddOrgData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddRecordBackupPlanRequest {
  /** 录制模板ID（录像计划关联的模板ID，从查询录像上云模板列表接口ListRecordBackupTemplates中获取） */
  TemplateId: string;
  /** 录像计划名称（仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复） */
  PlanName: string;
  /** 录像计划描述（仅支持中文、英文、数字、_、-，长度不超过128个字符） */
  Describe: string;
  /** 生命周期（录像文件生命周期设置，管理文件冷、热存储的时间） */
  LifeCycle: LifeCycleData;
  /** 通道及通道所属设备（添加录像的设备的通道信息，一次添加通道总数不超过5000个，包括组织目录下的通道数量） */
  Channels?: ChannelInfo[];
  /** 添加组织目录下所有设备通道（Json数组，可以为空，通道总数量不超过5000个（包括Channel字段的数量）） */
  OrganizationId?: string[];
}

declare interface AddRecordBackupPlanResponse {
  /** 返回数据 */
  Data?: AddRecordBackupPlanData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddRecordBackupTemplateRequest {
  /** 模板名称（仅支持中文、英文、数字、_、-，长度不超过32个字符，模板名称全局唯一，不能为空，不能重复） */
  TemplateName: string;
  /** 上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  TimeSections: RecordTemplateTimeSections[];
  /** 录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟） */
  DevTimeSections: RecordTemplateTimeSections[];
  /** 上云倍速（支持1，2，4倍速） */
  Scale: number;
}

declare interface AddRecordBackupTemplateResponse {
  /** 返回数据 */
  Data?: AddRecordBackupTemplateData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddRecordPlanRequest {
  /** 实时上云计划名称，仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复 */
  PlanName: string;
  /** 实时上云模板ID */
  TemplateId: string;
  /** 生命周期 */
  LifeCycle: LifeCycleData;
  /** 上云计划描述，仅支持中文、英文、数字、_、-，长度不超过128个字符 */
  Describe?: string;
  /** 码流类型，default:不指定码流类型，以设备默认推送类型为主， main:主码流，sub:子码流，其他根据设备能力集自定义，不填按默认类型处理，长度不能超过32个字节 */
  StreamType?: string;
  /** 添加录像的设备的通道信息，一次添加通道总数不超过5000个，包括组织目录下的通道数量 */
  Channels?: ChannelInfo[];
  /** 添加组织目录下所有设备通道，Json数组，可以为空，通道总数量不超过5000个（包括Channel字段的数量） */
  OrganizationId?: string[];
  /** 录像补录模式（0:不启用，1:启用），无该字段，默认不启用 */
  RepairMode?: number;
}

declare interface AddRecordPlanResponse {
  /** 返回结果 */
  Data?: RecordPlanOptData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddRecordRetrieveTaskRequest {
  /** 任务名称，仅支持中文、英文、数字、_、-，长度不超过32个字符，名称全局唯一，不能为空，不能重复 */
  TaskName: string;
  /** 取回录像的开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天 */
  StartTime: number;
  /** 取回录像的结束时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天 */
  EndTime: number;
  /** 取回模式， 1:极速模式，其他暂不支持 */
  Mode: number;
  /** 取回录像副本有效期，最小为1天，最大为365天 */
  Expiration: number;
  /** 设备通道，一个任务最多32个设备通道 */
  Channels: ChannelInfo[];
  /** 取回任务描述 */
  Describe?: string;
}

declare interface AddRecordRetrieveTaskResponse {
  /** 返回结果 */
  Data?: AddRecordRetrieveTaskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddRecordTemplateRequest {
  /** 模板名称， 仅支持中文、英文、数字、_、-，长度不超过32个字符，模板名称全局唯一，不能为空，不能重复 */
  TemplateName: string;
  /** 上云时间段，按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟 */
  TimeSections: RecordTemplateTimeSections[];
}

declare interface AddRecordTemplateResponse {
  /** 返回结果 */
  Data?: RecordTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddStreamAuthRequest {
  /** 鉴权配置ID（uuid） */
  Id: string;
  /** 是否开播放鉴权（1:开启,0:关闭） */
  PullState: number;
  /** 播放密钥（仅支持字母数字，长度0-10位） */
  PullSecret: string;
  /** 播放过期时间（单位：分钟） */
  PullExpired: number;
  /** 是否开启推流鉴权（1:开启,0:关闭） */
  PushState: number;
  /** 推流密钥（仅支持字母数字，长度0-10位） */
  PushSecret: string;
  /** 推流过期时间（单位：分钟） */
  PushExpired: number;
}

declare interface AddStreamAuthResponse {
  /** 设置推拉流鉴权返回数据 */
  Data?: AddStreamAuthData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddUserDeviceRequest {
  /** 设备名称，仅支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过128位；（设备名称无需全局唯一，可以重复） */
  Name: string;
  /** 设备接入协议（1:RTMP,2:GB,3:GW,6:ISUP） */
  AccessProtocol: number;
  /** 设备类型，1:IPC,2:NVR；（若设备接入协议选择RTMP,IVCP，则设备类型只能选择IPC） */
  Type: number;
  /** 设备所属组织ID，从查询组织接口DescribeOrganization中获取 */
  OrganizationId: string;
  /** 设备接入服务节点ID（从查询设备可用服务节点接口DescribeDeviceRegion中获取的Value字段） */
  ClusterId: string;
  /** 设备流传输协议，1:UDP,2:TCP；(国标设备有效，不填写则默认UDP协议) */
  TransportProtocol?: number;
  /** 设备密码（国标，网关设备必填，长度为1-64个字符） */
  Password?: string;
  /** 设备描述，长度不超过128个字符 */
  Description?: string;
  /** 设备接入网关ID，从查询网关列表接口中ListGateways获取（仅网关接入需要） */
  GatewayId?: string;
  /** 网关接入协议类型（从查询网关接入协议接口DescribeGatewayProtocol中获取）1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要） */
  ProtocolType?: number;
  /** 设备接入IP（仅网关接入需要） */
  Ip?: string;
  /** 设备端口（仅网关接入需要） */
  Port?: number;
  /** 设备用户名（仅网关接入需要） */
  Username?: string;
  /** 设备 SN，仅IVCP 协议设备需要 */
  SNCode?: string;
  /** RTMP推流地址自定义AppName（仅RTMP需要，支持英文、数字、_、-、.、长度不超过64位） */
  AppName?: string;
  /** RTMP推流地址自定义StreamName（仅RTMP需要，支持英文、数字、_、-、.、长度不超过64位） */
  StreamName?: string;
}

declare interface AddUserDeviceResponse {
  /** 增加设备返回数据 */
  Data?: AddDeviceData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchOperateDeviceRequest {
  /** 设备 ID 数组（从获取设备列表接口ListDevices中获取） */
  DeviceIds: string[];
  /** 操作命令（enable：启用；disable：禁用；delete：删除；sync：同步设备通道；upgrade：固件升级；reset：恢复出厂设置；reboot：重启） */
  Cmd: string;
}

declare interface BatchOperateDeviceResponse {
  /** 返回结果 */
  Data?: BatchOperateDeviceData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CallISAPIRequest {
  /** 设备ID */
  DeviceId: string;
  /** url 资源 */
  Url: string;
  /** 输入参数 */
  InputData?: string;
}

declare interface CallISAPIResponse {
  /** 返回数据 */
  Data?: ISAPIOutputData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlDevicePTZRequest {
  /** 通道 ID（从通道查询接口DescribeDeviceChannel中获取） */
  ChannelId: string;
  /** 命令类型（上:up,下:down,左:left,右:right上左:leftup,上右:rightup,下左:leftdown,下右:rightdown放大:zoomin,缩小:zoomout聚焦远:focusfar,聚焦近:focusnear光圈放大:irisin,光圈缩小:irisout） */
  Type: string;
  /** 命令描述（速度值范围1-8） */
  Speed: number;
}

declare interface ControlDevicePTZResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlDevicePresetRequest {
  /** 通道 ID（从通道查询接口DescribeDeviceChannel中获取） */
  ChannelId: string;
  /** 命令（goto:预置位调用；set:预置位设置；del:预置位删除） */
  Cmd: string;
  /** 预置位索引（只支持1-10的索引位置，超出报错） */
  Index: number;
}

declare interface ControlDevicePresetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlDeviceStreamRequest {
  /** 通道 ID（从通道查询接口DescribeDeviceChannel中获取） */
  ChannelId: string;
  /** 流类型（1:主码流；2:子码流（不可以和 Resolution 同时下发）） */
  StreamType?: string;
  /** 分辨率（1:QCIF；2:CIF；3:4CIF；4:D1；5:720P；6:1080P/I；自定义的19201080等等（需设备支持）（不可以和 StreamType 同时下发）） */
  Resolution?: string;
  /** 是否内网 */
  IsInternal?: boolean;
}

declare interface ControlDeviceStreamResponse {
  /** 返回数据 */
  Data?: ControlDeviceStreamData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlRecordRequest {
  /** 通道ID（录像播放地址格式 https://${domain}/live/${ChannelId}@${Session}） */
  ChannelId: string;
  /** 录像会话 ID （ 录像播放地址格式 https://${domain}/live/${ChannelId}@${Session}） */
  Session: string;
  /** 录像操作类型 （play:播放；pause:暂停 ；stop:关闭） */
  ControlAction: string;
  /** 跳转进度 （ 参数应大于等于0，跳转到录像开始时间的相对时间（单位秒），例如0就是跳转到录像开始的时间,不可以和 Scale 参数同时出现） */
  Position?: number;
  /** 速度 （ 范围（0.25,0.5,1,2,4,8），不可以和 Pos 参数同时出现） */
  Scale?: number;
}

declare interface ControlRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlRecordTimelineRequest {
  /** 通道 ID（从通道查询接口DescribeDeviceChannel中获取） */
  ChannelId: string;
  /** 起始时间 */
  Start: number;
  /** 结束时间 */
  End: number;
}

declare interface ControlRecordTimelineResponse {
  /** 返回数据 */
  Data?: Timeline[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAITaskRequest {
  /** AI任务ID */
  TaskId: string;
}

declare interface DeleteAITaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainRequest {
  /** 域名 ID */
  Id: string;
}

declare interface DeleteDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGatewayRequest {
  /** 网关索引ID（从获取网关列表接口ListGateways中获取） */
  GatewayId: string;
}

declare interface DeleteGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationRequest {
  /** 组织ID（从查询组织接口DescribeOrganization中获取） */
  OrganizationId: string;
}

declare interface DeleteOrganizationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordBackupPlanRequest {
  /** 录像上云计划ID（从查询录像上云计划列表接口ListRecordBackupPlans中获取） */
  PlanId: string;
}

declare interface DeleteRecordBackupPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordBackupTemplateRequest {
  /** 模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取） */
  TemplateId: string;
}

declare interface DeleteRecordBackupTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordPlanRequest {
  /** 上云计划ID */
  PlanId: string;
}

declare interface DeleteRecordPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordRetrieveTaskRequest {
  /** 取回任务ID */
  TaskId: string;
}

declare interface DeleteRecordRetrieveTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordTemplateRequest {
  /** 模板ID */
  TemplateId: string;
}

declare interface DeleteRecordTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserDeviceRequest {
  /** 设备ID（从获取设备列表ListDevices接口中获取） */
  DeviceId: string;
}

declare interface DeleteUserDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAITaskRequest {
  /** AI任务ID */
  TaskId: string;
}

declare interface DescribeAITaskResponse {
  /** AI任务详情 */
  Data?: AITaskInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAITaskResultRequest {
  /** AI 任务 ID */
  TaskId: string;
  /** 通道ID */
  ChannelId: string;
  /** 桶内文件的路径。 */
  Object?: string;
  /** AI 任务识别类型。可选值为 Facemask(口罩识别)、Chefhat(厨师帽识别)、Smoking(抽烟检测)、Chefcloth(厨师服识别)、PhoneCall(接打电话识别)、Pet(宠物识别)、Body(人体识别)和 Car(车辆车牌识别) */
  DetectType?: string;
  /** 开始时间时间。秒级时间戳。开始时间和结束时间跨度小于等于30天 */
  BeginTime?: string;
  /** 结束时间时间。秒级时间戳。开始时间和结束时间跨度小于等于30天 */
  EndTime?: string;
  /** 页码。默认为1 */
  PageNumber?: number;
  /** 每页 AI 识别结果数量。可选值1～100，默认为10（按时间倒序显示识别结果） */
  PageSize?: number;
}

declare interface DescribeAITaskResultResponse {
  /** AI识别结果 */
  Data?: AITaskResultData | null;
  /** AI识别结果数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCNAMERequest {
  /** 服务节点 ID（从查询域名可绑定服务节点接口DescribeDomainRegion中获取） */
  ClusterId: string;
  /** 域名类型，0:拉流域名 1:推流域名 */
  DomainType?: number;
}

declare interface DescribeCNAMEResponse {
  /** CNAME 记录值 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceChannelRequest {
  /** 设备ID（从获取设备列表接口ListDevices中获取） */
  DeviceId: string;
}

declare interface DescribeDeviceChannelResponse {
  /** 返回结果 */
  Data?: DescribeDeviceChannelData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicePresetRequest {
  /** 通道ID（从通道查询接口DescribeDeviceChannel中获取） */
  ChannelId: string;
}

declare interface DescribeDevicePresetResponse {
  /** 返回数据 */
  Data?: DescribeDevicePresetData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceRegionRequest {
}

declare interface DescribeDeviceRegionResponse {
  /** 返回数据 */
  Data?: DescribeDeviceRegion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainRegionRequest {
}

declare interface DescribeDomainRegionResponse {
  /** 返回数据 */
  Data?: DescribeDomainRegionData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainRequest {
}

declare interface DescribeDomainResponse {
  /** 返回数据 */
  Data?: DescribeDomainData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayMonitorRequest {
  /** 网关索引ID（从获取网关列表接口ListGateways中获取） */
  GatewayId: string;
}

declare interface DescribeGatewayMonitorResponse {
  /** 返回数据 */
  Data?: DescribeGatewayMonitor;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayProtocolRequest {
}

declare interface DescribeGatewayProtocolResponse {
  /** 返回数据 */
  Data?: DescribeGatewayProtocolData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayRequest {
  /** 网关索引ID（从获取网关列表接口ListGateways中获取） */
  GatewayId: string;
}

declare interface DescribeGatewayResponse {
  /** 返回数据 */
  Data?: DescribeGatewayData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayVersionRequest {
  /** 网关索引ID（从获取网关列表接口ListGateways中获取） */
  GatewayId: string;
}

declare interface DescribeGatewayVersionResponse {
  /** 返回数据 */
  Data?: DescribeGatewayVersionData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationRequest {
}

declare interface DescribeOrganizationResponse {
  /** 返回数据 */
  Data?: DescribeOrganizationData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordBackupPlanRequest {
  /** 录像上云计划ID（从查询录像上云计划列表接口ListRecordBackupPlans中获取） */
  PlanId: string;
}

declare interface DescribeRecordBackupPlanResponse {
  /** 返回数据 */
  Data?: DescribeRecordBackupPlanData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordBackupTemplateRequest {
  /** 模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取） */
  TemplateId: string;
}

declare interface DescribeRecordBackupTemplateResponse {
  /** 返回数据 */
  Data?: DescribeRecordBackupTemplateData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordFileRequest {
  /** 通道所属设备ID */
  DeviceId: string;
  /** 通道ID */
  ChannelId: string;
  /** 检索开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天 */
  StartTime: number;
  /** 检索结束时间，UTC秒数，例如：1662114246，开始和结束时间段最长为一天，且不能跨天 */
  EndTime: number;
  /** 是否携带每个时间段的播放url */
  WithUrl?: boolean;
}

declare interface DescribeRecordFileResponse {
  /** 返回结果 */
  Data?: DescribeRecordFileData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordPlanRequest {
  /** 实时上云计划ID */
  PlanId: string;
}

declare interface DescribeRecordPlanResponse {
  /** 返回结果 */
  Data?: RecordPlanBaseInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordPlaybackUrlRequest {
  /** 设备通道ID */
  ChannelId: string;
  /** 回放开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天 */
  StartTime: number;
  /** 回放结束时间，UTC秒数，例如：1662114246，开始和结束时间段最长为一天，且不能跨天 */
  EndTime: number;
  /** 是否获取内网地址 */
  IsInternal?: boolean;
  /** 云录像回放时，是否需要开启时间戳矫正，主要解决时间戳反转，会退等问题导致无法播放 */
  CorrectTimestamp?: boolean;
}

declare interface DescribeRecordPlaybackUrlResponse {
  /** 返回结果 */
  Data?: RecordPlaybackUrl;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordRetrieveTaskRequest {
  /** 云录像取回任务ID */
  TaskId: string;
}

declare interface DescribeRecordRetrieveTaskResponse {
  /** 返回结果 */
  Data?: DescribeRecordRetrieveTaskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordSliceRequest {
  /** 通道ID */
  ChannelId: string;
  /** 检索开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天 */
  StartTime: number;
  /** 检索结束时间，UTC秒数，例如：1662114246，开始和结束时间段最长为一天，且不能跨天 */
  EndTime: number;
}

declare interface DescribeRecordSliceResponse {
  /** 云录像切片信息列表 */
  Data?: RecordSliceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordTemplateRequest {
  /** 模板ID */
  TemplateId: string;
}

declare interface DescribeRecordTemplateResponse {
  /** 返回结果 */
  Data?: RecordTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamAuthRequest {
}

declare interface DescribeStreamAuthResponse {
  /** 返回结果 */
  Data?: DescribeStreamAuthData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskRequest {
  /** 简单任务或复杂任务ID */
  TaskId: string;
}

declare interface DescribeTaskResponse {
  /** 任务详情 */
  Data?: TaskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserDeviceRequest {
  /** 设备ID（从获取设备列表接口ListDevices中获取） */
  DeviceId: string;
}

declare interface DescribeUserDeviceResponse {
  /** 返回结果 */
  Data?: DescribeDeviceData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoBitRateRequest {
  /** 通道ID列表 */
  ChannelIds: string[];
}

declare interface DescribeVideoBitRateResponse {
  /** 无 */
  Data?: DescribeVideoBitRateList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoDownloadUrlRequest {
  /** 通道 ID */
  ChannelId: string;
  /** 下载的开始时间，UTC 秒数，开始和结束时间段最长为60分钟，且不能跨天。注意：实际下载的文件时长可能会大于该时段时长，通过指定IsRespActualTime参数可以获取实际下载的开始时间和结束时间。 原因是下载是TS切片对齐的，其目的也是为了保证用户下载数据的完整性，完全包含其指定的时间段。 */
  BeginTime: string;
  /** 下载的结束时间，UTC 秒数，开始和结束时间段最长为60分钟，且不能跨天。注意：实际下载的文件时长可能会大于该时段时长，通过指定IsRespActualTime参数可以获取实际下载的开始时间和结束时间。 原因是下载是TS切片对齐的，其目的也是为了保证用户下载数据的完整性，完全包含其指定的时间段。 */
  EndTime: string;
  /** 文件格式，"mp4"：mp4格式，"ts"：ts文件格式 */
  FileType: string;
  /** 响应data中是否携带实际下载录像的开始时间与结束时间 */
  IsRespActualTime?: boolean;
  /** 是否返回内网下载URL，默认是false，返回公网下载URL，true则返回内网下载URL */
  IsInternal?: boolean;
  /** 设置URL的有效期, 最小值是1秒, 最大值是86400秒, 不设置的话, 默认是600秒 */
  Expires?: number;
  /** 下载的MP4文件是否支持G711音频编码. 注意: 如果云端录像中的音频编码为AAC, 那么下载的MP4默认是支持AAC编码的如果云端录像中的音频编码为G711且 IsSupportG711设置为true时, 下载的MP4是支持G711音频编码如果云端录像中的音频编码为G711且 IsSupportG711设置为false时, 下载的MP4是不支持G711音频编码该参数只对FileType为mp4才有效, 不设置的话, 默认是false */
  IsSupportG711?: boolean;
}

declare interface DescribeVideoDownloadUrlResponse {
  /** 返回的数据结构 */
  Data?: DescribeVideoDownloadUrlData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAITasksRequest {
  /** 是否包含通道列表。"true"代表包含通道列表，"false"代表不包含通道列表，默认为 false */
  IsContainChannelList?: boolean;
  /** 是否包含AI配置。"true"代表包含任务配置，"false"代表不包含任务配置，默认为 false。 */
  IsContainTemplate?: boolean;
  /** 页码。默认为1 */
  PageNumber?: number;
  /** 每页数量。可选值1～200，默认为20 */
  PageSize?: number;
}

declare interface ListAITasksResponse {
  /** AI 任务数量 */
  TotalCount?: number;
  /** AI任务列表 */
  Data?: ListAITaskData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDevicesRequest {
  /** 组织ID */
  OrganizationId: string;
  /** 是否获取当前层级及子层级的设备列表，默认false */
  IsContainSubLevel?: boolean;
  /** 是否包含当前用户已关联的设备，默认false */
  IsContainUser?: boolean;
  /** 设备接入协议。1:RTMP，2:GB，3:GW，4:IVCP(私有协议) */
  AccessProtocol?: number;
  /** 设备类型。1:IPC，2:NVR */
  Type?: number;
  /** 设备状态。0:未注册，1:在线，2:离线，3:禁用 */
  Status?: number;
  /** 服务节点ID */
  ClusterId?: string;
  /** 模糊搜索设备的关键字 */
  Keyword?: string;
  /** 当前用户Uin */
  CurrentUin?: number;
  /** 页码，默认为1。 */
  PageNumber?: number;
  /** 每页数量，默认为20，单页最大10000条 */
  PageSize?: number;
}

declare interface ListDevicesResponse {
  /** 设备列表详情 */
  Data?: ListDeviceInfo[] | null;
  /** 设备总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListGatewayDevicesRequest {
  /** 网关索引ID（从获取网关列表接口ListGateways中获取） */
  GatewayId: string;
  /** 分页页数 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
}

declare interface ListGatewayDevicesResponse {
  /** 返回数据 */
  Data?: ListGatewayDevicesData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListGatewaysRequest {
  /** 页码，默认为1 */
  PageNumber?: number;
  /** 每页数量，默认为20 */
  PageSize?: number;
  /** 网关名称 */
  Name?: string;
  /** 服务节点ID */
  ClusterId?: string;
  /** 网关状态（0：离线，1 ：在线） */
  Status?: number;
}

declare interface ListGatewaysResponse {
  /** 返回数据 */
  Data?: ListGatewaysData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOrganizationChannelNumbersRequest {
  /** 组织ID，json数组格式，最多一次支持10个组织 */
  OrganizationId: string[];
}

declare interface ListOrganizationChannelNumbersResponse {
  /** 返回结果 */
  Data?: ListOrganizationChannelNumbersData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOrganizationChannelsRequest {
  /** 组织ID */
  OrganizationId: string;
  /** 每页最大数量 */
  PageSize: number;
  /** 第几页 */
  PageNumber: number;
  /** 查询条件，则按照设备名称查询查询条件同时只有一个生效。长度不超过32字节 */
  DeviceName?: string;
  /** 查询条件，则按照通道名称查询查询条件同时只有一个生效。长度不超过32字节 */
  ChannelName?: string;
}

declare interface ListOrganizationChannelsResponse {
  /** 返回结果 */
  Data?: ListOrganizationChannelsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordBackupPlanDevicesRequest {
  /** 录像计划ID（从查询录像上云计划列表接口ListRecordBackupPlans中获取） */
  PlanId: string;
  /** 按照设备名称查询（为空时，不参考该参数） */
  DeviceName?: string;
  /** 按照通道名称查询（为空时，不参考该参数） */
  ChannelName?: string;
  /** 按照组织名称查询（为空时，不参考该参数） */
  OrganizationName?: string;
  /** 每页最大数量 */
  PageSize?: number;
  /** 分页页数 */
  PageNumber?: number;
}

declare interface ListRecordBackupPlanDevicesResponse {
  /** 返回数据 */
  Data?: ListRecordBackupPlanDevicesData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordBackupPlansRequest {
}

declare interface ListRecordBackupPlansResponse {
  /** 返回数据 */
  Data?: ListRecordBackupPlanData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordBackupTemplatesRequest {
}

declare interface ListRecordBackupTemplatesResponse {
  /** 返回数据 */
  Data?: ListRecordBackupTemplatesData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordPlanChannelsRequest {
}

declare interface ListRecordPlanChannelsResponse {
  /** 返回结果 */
  Data?: ListRecordPlanChannelsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordPlanDevicesRequest {
  /** 上云计划ID */
  PlanId: string;
  /** 每页最大数量 */
  PageSize: number;
  /** 第几页 */
  PageNumber: number;
  /** 按照设备名称查询，为空时，不参考该参数通道名称、设备名称、组织名称同时只有一个有效，如果同时多个字段有值，按照通道名称、设备名称、组织名称的优先级顺序查询，如果都为空，则全量查询。长度不超过32字节 */
  DeviceName?: string;
  /** 按照通道名称查询，为空时，不参考该参数通道名称、设备名称、组织名称同时只有一个有效，如果同时多个字段有值，按照通道名称、设备名称、组织名称的优先级顺序查询，如果都为空，则全量查询。长度不超过32字节 */
  ChannelName?: string;
  /** 按照组织名称查询|，为空时，不参考该参数通道名称、设备名称、组织名称同时只有一个有效，如果同时多个字段有值，按照通道名称、设备名称、组织名称的优先级顺序查询，如果都为空，则全量查询。长度不超过32字节 */
  OrganizationName?: string;
}

declare interface ListRecordPlanDevicesResponse {
  /** 返回结果 */
  Data?: ListRecordPlanDevicesData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordPlansRequest {
}

declare interface ListRecordPlansResponse {
  /** 返回结果，存在计划时，为Json数组格式，不存在计划时，字段数据为空 */
  Data?: RecordPlanBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordRetrieveTasksRequest {
}

declare interface ListRecordRetrieveTasksResponse {
  /** 返回结果 */
  Data?: RecordRetrieveTaskDetailsInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListRecordTemplatesRequest {
}

declare interface ListRecordTemplatesResponse {
  /** 返回结果，存在模板时，为Json数组格式，不存在模板时，字段数据为空 */
  Data?: RecordTemplateInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSubTasksRequest {
  /** 复杂任务ID */
  TaskId: string;
  /** 页码，默认为1 */
  PageNumber?: number;
  /** 每页数量，默认为10 */
  PageSize?: number;
  /** 默认不对该字段进行筛选，否则根据任务状态进行筛选。状态码：1-NEW，2-RUNNING，3-COMPLETED，4-FAILED */
  Status?: number;
}

declare interface ListSubTasksResponse {
  /** 返回数据 */
  Data?: ListSubTasksData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTasksRequest {
  /** 页码，默认为1 */
  PageNumber?: number;
  /** 每页数量，默认为20 */
  PageSize?: number;
  /** 默认不根据该字段进行筛选，否则根据设备操作类型进行筛选，目前值有：BatchDeleteUserDevice，BatchDisableDevice，BatchEnableDevice，BatchUpgradeDevice，BatchResetDevice,BatchRebootDevice,BatchRefreshDeviceChannel */
  Operation?: string;
  /** 默认不根据该字段进行筛选，否则根据任务状态进行筛选。状态码：1-未执行，2-执行中，3-完成，4-取消 */
  Status?: number;
  /** 开始时间 */
  BeginTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

declare interface ListTasksResponse {
  /** 返回数据 */
  Data?: ListTasksData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PlayRecordRequest {
  /** 通道 ID（从查询通道DescribeDeviceChannel接口中获取） */
  ChannelId: string;
  /** 起始时间 */
  Start: number;
  /** 结束时间 */
  End: number;
  /** 流类型（1:主码流；2:子码流（不可以和 Resolution 同时下发）） */
  StreamType?: number;
  /** 分辨率（1:QCIF；2:CIF； 3:4CIF； 4:D1； 5:720P； 6:1080P/I； 自定义的19201080等等（需设备支持）（不可以和 StreamType 同时下发）） */
  Resolution?: string;
  /** 是否内网 */
  IsInternal?: boolean;
}

declare interface PlayRecordResponse {
  /** 返回结果 */
  Data?: PlayRecordData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryForbidPlayChannelListRequest {
  /** 子用户uin，也可以是主用户的uin */
  UserId: string;
  /** 每页最大数量，最大为200，超过按照200返回 */
  PageSize: number;
  /** 第几页 */
  PageNumber: number;
}

declare interface QueryForbidPlayChannelListResponse {
  /** 返回结果 */
  Data?: ListForbidplayChannelsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefreshDeviceChannelRequest {
  /** 设备 ID（从获取设备列表ListDevices接口中获取） */
  DeviceId: string;
}

declare interface RefreshDeviceChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetForbidPlayChannelsRequest {
  /** 要禁播的通道参数，一次最多可以设置200个通道 */
  Channels: SetForbidplayChannelParam[];
  /** 用户uin，可以是子用户的也可以是主用户的uin */
  UserId: string;
}

declare interface SetForbidPlayChannelsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAITaskRequest {
  /** AI 任务 ID */
  TaskId: string;
  /** AI 任务名称。仅支持中文、英文、数字、_、-，长度不超过32个字符 */
  Name?: string;
  /** AI 任务描述。仅支持中文、英文、数字、_、-，长度不超过128个字符 */
  Desc?: string;
  /** 通道 ID 列表。不能添加存在于其他 AI 任务的通道，限制1000个通道。 */
  ChannelList?: string[];
  /** AI 结果回调地址。类似 "http://ip:port/***或者https://domain/*** */
  CallbackUrl?: string;
  /** 是否立即开启 AI 任务。"true"代表立即开启 AI 任务，"false"代表暂不开启 AI 任务，默认为 false。 */
  IsStartTheTask?: boolean;
  /** AI 配置列表 */
  Templates?: AITemplates[];
}

declare interface UpdateAITaskResponse {
  /** AI任务信息 */
  Data?: AITaskInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAITaskStatusRequest {
  /** AI 任务 ID */
  TaskId: string;
  /** AI 任务状态。"on"代表开启了 AI 分析任务，"off"代表停止AI分析任务 */
  Status: string;
}

declare interface UpdateAITaskStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDeviceOrganizationRequest {
  /** 设备 ID 数组（从获取设备列表接口ListDevices中获取） */
  DeviceIds: string[];
  /** 组织 ID（从查询组织接口DescribeOrganization中获取） */
  OrganizationId: string;
}

declare interface UpdateDeviceOrganizationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDeviceStatusRequest {
  /** 设备 ID（从获取设备列表接口ListDevices中获取） */
  DeviceId: string;
  /** 禁用启用状态码（2：启用，3:禁用） */
  Status: number;
}

declare interface UpdateDeviceStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGatewayRequest {
  /** 网关索引ID（从获取网关列表ListGateways接口中获取） */
  GatewayId: string;
  /** 仅支持中文、英文、数网关名称，字、_、-，长度不超过32个字符 */
  Name?: string;
  /** 网关描述，仅支持中文、英文、数字、_、-，长度不超过128个字符 */
  Description?: string;
}

declare interface UpdateGatewayResponse {
  /** 返回数据 */
  Data?: UpdateGatewayData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOrganizationRequest {
  /** 组织ID（从查询组织接口DescribeOrganization中获取） */
  OrganizationId: string;
  /** 组织名称，支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过64位，且组织名称不能重复 */
  Name: string;
}

declare interface UpdateOrganizationResponse {
  /** 返回结果 */
  Data?: UpdateOrgData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRecordBackupPlanRequest {
  /** 计划ID */
  PlanId: string;
  /** 修改的内容 */
  Mod: UpdateRecordBackupPlanModify;
}

declare interface UpdateRecordBackupPlanResponse {
  /** 返回数据 */
  Data?: UpdateRecordBackupPlanData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRecordBackupTemplateRequest {
  /** 模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取） */
  TemplateId: string;
  /** 修改录像上云模板数据 */
  Mod: UpdateRecordBackupTemplateModify;
}

declare interface UpdateRecordBackupTemplateResponse {
  /** 返回数据 */
  Data?: UpdateRecordBackupTemplateData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRecordPlanRequest {
  /** 计划ID */
  PlanId: string;
  /** 修改计划的内容 */
  Mod: UpdateRecordPlanData;
}

declare interface UpdateRecordPlanResponse {
  /** 返回结果 */
  Data?: RecordPlanOptData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRecordTemplateRequest {
  /** 模板ID */
  TemplateId: string;
  /** 修改内容 */
  Mod: UpdateRecordTemplateData;
}

declare interface UpdateRecordTemplateResponse {
  /** 返回结果 */
  Data?: RecordTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateUserDeviceRequest {
  /** 设备ID（从获取设备列表接口ListDevices中获取） */
  DeviceId: string;
  /** 设备名称（仅支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过128位） */
  Name?: string;
  /** 设备流传输协议，仅国标设备有效，填0则不做更改（1:UDP,2:TCP） */
  TransportProtocol?: number;
  /** 设备密码（仅国标，网关设备支持，长度不超过 64 位） */
  Password?: string;
  /** 设备描述（长度不超过128位） */
  Description?: string;
  /** 设备接入Ip（仅网关接入支持） */
  Ip?: string;
  /** 设备Port（仅网关接入支持） */
  Port?: number;
  /** 设备用户名（仅网关接入支持） */
  Username?: string;
  /** 网关设备接入协议（仅网关接入支持） */
  ProtocolType?: number;
  /** 音频关开（0：关闭；1：开启）默认开启，关闭时丢弃音频 */
  AudioSwitch?: number;
  /** 订阅开关（0：关闭；1：开启）默认开启，开启状态下会订阅设备通道变化，仅国标NVR设备有效 */
  SubscribeSwitch?: number;
  /** 是否开启静音帧（0：关闭；1 开启） */
  SilentFrameSwitch?: number;
}

declare interface UpdateUserDeviceResponse {
  /** 返回数据 */
  Data?: UpdateDeviceData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeGatewayRequest {
  /** 网关索引ID（从获取网关列表ListGateways接口中获取） */
  GatewayId: string;
}

declare interface UpgradeGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Iss 智能视图计算平台} */
declare interface Iss {
  (): Versions;
  /** 添加AI任务 {@link AddAITaskRequest} {@link AddAITaskResponse} */
  AddAITask(data: AddAITaskRequest, config?: AxiosRequestConfig): AxiosPromise<AddAITaskResponse>;
  /** 新增组织 {@link AddOrganizationRequest} {@link AddOrganizationResponse} */
  AddOrganization(data: AddOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<AddOrganizationResponse>;
  /** 新增录像上云计划 {@link AddRecordBackupPlanRequest} {@link AddRecordBackupPlanResponse} */
  AddRecordBackupPlan(data: AddRecordBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<AddRecordBackupPlanResponse>;
  /** 新增录像上云模板 {@link AddRecordBackupTemplateRequest} {@link AddRecordBackupTemplateResponse} */
  AddRecordBackupTemplate(data: AddRecordBackupTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<AddRecordBackupTemplateResponse>;
  /** 新增实时上云计划 {@link AddRecordPlanRequest} {@link AddRecordPlanResponse} */
  AddRecordPlan(data: AddRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<AddRecordPlanResponse>;
  /** 新建取回任务 {@link AddRecordRetrieveTaskRequest} {@link AddRecordRetrieveTaskResponse} */
  AddRecordRetrieveTask(data: AddRecordRetrieveTaskRequest, config?: AxiosRequestConfig): AxiosPromise<AddRecordRetrieveTaskResponse>;
  /** 新增实时上云模板 {@link AddRecordTemplateRequest} {@link AddRecordTemplateResponse} */
  AddRecordTemplate(data: AddRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<AddRecordTemplateResponse>;
  /** 设置推拉流鉴权配置 {@link AddStreamAuthRequest} {@link AddStreamAuthResponse} */
  AddStreamAuth(data: AddStreamAuthRequest, config?: AxiosRequestConfig): AxiosPromise<AddStreamAuthResponse>;
  /** 新增设备 {@link AddUserDeviceRequest} {@link AddUserDeviceResponse} */
  AddUserDevice(data: AddUserDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AddUserDeviceResponse>;
  /** 批量操作设备 {@link BatchOperateDeviceRequest} {@link BatchOperateDeviceResponse} */
  BatchOperateDevice(data: BatchOperateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<BatchOperateDeviceResponse>;
  /** ISAPI 透传异步回调 {@link CallISAPIRequest} {@link CallISAPIResponse} */
  CallISAPI(data: CallISAPIRequest, config?: AxiosRequestConfig): AxiosPromise<CallISAPIResponse>;
  /** ptz 控制 {@link ControlDevicePTZRequest} {@link ControlDevicePTZResponse} */
  ControlDevicePTZ(data: ControlDevicePTZRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDevicePTZResponse>;
  /** 预置位操作 {@link ControlDevicePresetRequest} {@link ControlDevicePresetResponse} */
  ControlDevicePreset(data: ControlDevicePresetRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDevicePresetResponse>;
  /** 获取开流地址 {@link ControlDeviceStreamRequest} {@link ControlDeviceStreamResponse} */
  ControlDeviceStream(data: ControlDeviceStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceStreamResponse>;
  /** 本地录像回放控制 {@link ControlRecordRequest} {@link ControlRecordResponse} */
  ControlRecord(data: ControlRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ControlRecordResponse>;
  /** 查询本地录像时间轴 {@link ControlRecordTimelineRequest} {@link ControlRecordTimelineResponse} */
  ControlRecordTimeline(data: ControlRecordTimelineRequest, config?: AxiosRequestConfig): AxiosPromise<ControlRecordTimelineResponse>;
  /** 删除AI任务 {@link DeleteAITaskRequest} {@link DeleteAITaskResponse} */
  DeleteAITask(data: DeleteAITaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAITaskResponse>;
  /** 删除域名 {@link DeleteDomainRequest} {@link DeleteDomainResponse} */
  DeleteDomain(data: DeleteDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainResponse>;
  /** 删除网关 {@link DeleteGatewayRequest} {@link DeleteGatewayResponse} */
  DeleteGateway(data: DeleteGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGatewayResponse>;
  /** 删除组织 {@link DeleteOrganizationRequest} {@link DeleteOrganizationResponse} */
  DeleteOrganization(data: DeleteOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationResponse>;
  /** 删除录像上云计划 {@link DeleteRecordBackupPlanRequest} {@link DeleteRecordBackupPlanResponse} */
  DeleteRecordBackupPlan(data: DeleteRecordBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordBackupPlanResponse>;
  /** 删除录像上云模板 {@link DeleteRecordBackupTemplateRequest} {@link DeleteRecordBackupTemplateResponse} */
  DeleteRecordBackupTemplate(data: DeleteRecordBackupTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordBackupTemplateResponse>;
  /** 删除实时上云计划 {@link DeleteRecordPlanRequest} {@link DeleteRecordPlanResponse} */
  DeleteRecordPlan(data: DeleteRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordPlanResponse>;
  /** 删除取回任务 {@link DeleteRecordRetrieveTaskRequest} {@link DeleteRecordRetrieveTaskResponse} */
  DeleteRecordRetrieveTask(data: DeleteRecordRetrieveTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordRetrieveTaskResponse>;
  /** 删除实时上云模板 {@link DeleteRecordTemplateRequest} {@link DeleteRecordTemplateResponse} */
  DeleteRecordTemplate(data: DeleteRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordTemplateResponse>;
  /** 删除设备 {@link DeleteUserDeviceRequest} {@link DeleteUserDeviceResponse} */
  DeleteUserDevice(data: DeleteUserDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserDeviceResponse>;
  /** 获取AI任务详情 {@link DescribeAITaskRequest} {@link DescribeAITaskResponse} */
  DescribeAITask(data: DescribeAITaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAITaskResponse>;
  /** 获取AI任务识别结果 {@link DescribeAITaskResultRequest} {@link DescribeAITaskResultResponse} */
  DescribeAITaskResult(data: DescribeAITaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAITaskResultResponse>;
  /** 根据服务节点获取 CNAME {@link DescribeCNAMERequest} {@link DescribeCNAMEResponse} */
  DescribeCNAME(data: DescribeCNAMERequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCNAMEResponse>;
  /** 通道查询 {@link DescribeDeviceChannelRequest} {@link DescribeDeviceChannelResponse} */
  DescribeDeviceChannel(data: DescribeDeviceChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceChannelResponse>;
  /** 预置位查询 {@link DescribeDevicePresetRequest} {@link DescribeDevicePresetResponse} */
  DescribeDevicePreset(data: DescribeDevicePresetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePresetResponse>;
  /** 查询设备可用服务节点 {@link DescribeDeviceRegionRequest} {@link DescribeDeviceRegionResponse} */
  DescribeDeviceRegion(data?: DescribeDeviceRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceRegionResponse>;
  /** 查询域名 {@link DescribeDomainRequest} {@link DescribeDomainResponse} */
  DescribeDomain(data?: DescribeDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainResponse>;
  /** 查询域名可绑定服务节点 {@link DescribeDomainRegionRequest} {@link DescribeDomainRegionResponse} */
  DescribeDomainRegion(data?: DescribeDomainRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainRegionResponse>;
  /** 获取网关详情 {@link DescribeGatewayRequest} {@link DescribeGatewayResponse} */
  DescribeGateway(data: DescribeGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayResponse>;
  /** 获取网关监控信息 {@link DescribeGatewayMonitorRequest} {@link DescribeGatewayMonitorResponse} */
  DescribeGatewayMonitor(data: DescribeGatewayMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayMonitorResponse>;
  /** 查询网关接入协议 {@link DescribeGatewayProtocolRequest} {@link DescribeGatewayProtocolResponse} */
  DescribeGatewayProtocol(data?: DescribeGatewayProtocolRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayProtocolResponse>;
  /** 查询网关服务版本 {@link DescribeGatewayVersionRequest} {@link DescribeGatewayVersionResponse} */
  DescribeGatewayVersion(data: DescribeGatewayVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayVersionResponse>;
  /** 查询组织 {@link DescribeOrganizationRequest} {@link DescribeOrganizationResponse} */
  DescribeOrganization(data?: DescribeOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationResponse>;
  /** 查询录像上云计划详情 {@link DescribeRecordBackupPlanRequest} {@link DescribeRecordBackupPlanResponse} */
  DescribeRecordBackupPlan(data: DescribeRecordBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordBackupPlanResponse>;
  /** 查询录像上云模板详情 {@link DescribeRecordBackupTemplateRequest} {@link DescribeRecordBackupTemplateResponse} */
  DescribeRecordBackupTemplate(data: DescribeRecordBackupTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordBackupTemplateResponse>;
  /** 查询云端录像时间轴 {@link DescribeRecordFileRequest} {@link DescribeRecordFileResponse} */
  DescribeRecordFile(data: DescribeRecordFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordFileResponse>;
  /** 查询实时上云计划详情 {@link DescribeRecordPlanRequest} {@link DescribeRecordPlanResponse} */
  DescribeRecordPlan(data: DescribeRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordPlanResponse>;
  /** 获取云端录像URL地址 {@link DescribeRecordPlaybackUrlRequest} {@link DescribeRecordPlaybackUrlResponse} */
  DescribeRecordPlaybackUrl(data: DescribeRecordPlaybackUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordPlaybackUrlResponse>;
  /** 查询取回任务详情 {@link DescribeRecordRetrieveTaskRequest} {@link DescribeRecordRetrieveTaskResponse} */
  DescribeRecordRetrieveTask(data: DescribeRecordRetrieveTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordRetrieveTaskResponse>;
  /** 查询云端录像切片信息列表 {@link DescribeRecordSliceRequest} {@link DescribeRecordSliceResponse} */
  DescribeRecordSlice(data: DescribeRecordSliceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordSliceResponse>;
  /** 查询实时上云模板详情 {@link DescribeRecordTemplateRequest} {@link DescribeRecordTemplateResponse} */
  DescribeRecordTemplate(data: DescribeRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordTemplateResponse>;
  /** 查询推拉流鉴权配置 {@link DescribeStreamAuthRequest} {@link DescribeStreamAuthResponse} */
  DescribeStreamAuth(data?: DescribeStreamAuthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamAuthResponse>;
  /** 查询任务详情 {@link DescribeTaskRequest} {@link DescribeTaskResponse} */
  DescribeTask(data: DescribeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResponse>;
  /** 查询设备详情 {@link DescribeUserDeviceRequest} {@link DescribeUserDeviceResponse} */
  DescribeUserDevice(data: DescribeUserDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDeviceResponse>;
  /** 视频通道码率查询 {@link DescribeVideoBitRateRequest} {@link DescribeVideoBitRateResponse} */
  DescribeVideoBitRate(data: DescribeVideoBitRateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoBitRateResponse>;
  /** 获取云端录像下载URL地址 {@link DescribeVideoDownloadUrlRequest} {@link DescribeVideoDownloadUrlResponse} */
  DescribeVideoDownloadUrl(data: DescribeVideoDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoDownloadUrlResponse>;
  /** 获取AI任务列表 {@link ListAITasksRequest} {@link ListAITasksResponse} */
  ListAITasks(data?: ListAITasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListAITasksResponse>;
  /** 获取设备列表 {@link ListDevicesRequest} {@link ListDevicesResponse} */
  ListDevices(data: ListDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDevicesResponse>;
  /** 查询网关下设备列表 {@link ListGatewayDevicesRequest} {@link ListGatewayDevicesResponse} */
  ListGatewayDevices(data: ListGatewayDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<ListGatewayDevicesResponse>;
  /** 获取网关列表 {@link ListGatewaysRequest} {@link ListGatewaysResponse} */
  ListGateways(data?: ListGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<ListGatewaysResponse>;
  /** 查询组织目录下的未添加到实时上云计划中的通道数量 {@link ListOrganizationChannelNumbersRequest} {@link ListOrganizationChannelNumbersResponse} */
  ListOrganizationChannelNumbers(data: ListOrganizationChannelNumbersRequest, config?: AxiosRequestConfig): AxiosPromise<ListOrganizationChannelNumbersResponse>;
  /** 查询组织目录下的通道列表 {@link ListOrganizationChannelsRequest} {@link ListOrganizationChannelsResponse} */
  ListOrganizationChannels(data: ListOrganizationChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<ListOrganizationChannelsResponse>;
  /** 查询录像上云计划下的设备通道列表 {@link ListRecordBackupPlanDevicesRequest} {@link ListRecordBackupPlanDevicesResponse} */
  ListRecordBackupPlanDevices(data: ListRecordBackupPlanDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordBackupPlanDevicesResponse>;
  /** 查询录像上云计划列表 {@link ListRecordBackupPlansRequest} {@link ListRecordBackupPlansResponse} */
  ListRecordBackupPlans(data?: ListRecordBackupPlansRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordBackupPlansResponse>;
  /** 查询录像上云模板列表 {@link ListRecordBackupTemplatesRequest} {@link ListRecordBackupTemplatesResponse} */
  ListRecordBackupTemplates(data?: ListRecordBackupTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordBackupTemplatesResponse>;
  /** 查询用户下所有实时上云计划中的通道列表 {@link ListRecordPlanChannelsRequest} {@link ListRecordPlanChannelsResponse} */
  ListRecordPlanChannels(data?: ListRecordPlanChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordPlanChannelsResponse>;
  /** 查询实时上云计划下的设备通道列表 {@link ListRecordPlanDevicesRequest} {@link ListRecordPlanDevicesResponse} */
  ListRecordPlanDevices(data: ListRecordPlanDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordPlanDevicesResponse>;
  /** 查询实时上云计划列表 {@link ListRecordPlansRequest} {@link ListRecordPlansResponse} */
  ListRecordPlans(data?: ListRecordPlansRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordPlansResponse>;
  /** 查询取回任务列表 {@link ListRecordRetrieveTasksRequest} {@link ListRecordRetrieveTasksResponse} */
  ListRecordRetrieveTasks(data?: ListRecordRetrieveTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordRetrieveTasksResponse>;
  /** 查询实时上云模板列表 {@link ListRecordTemplatesRequest} {@link ListRecordTemplatesResponse} */
  ListRecordTemplates(data?: ListRecordTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<ListRecordTemplatesResponse>;
  /** 查询任务的子任务列表 {@link ListSubTasksRequest} {@link ListSubTasksResponse} */
  ListSubTasks(data: ListSubTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListSubTasksResponse>;
  /** 查询任务列表 {@link ListTasksRequest} {@link ListTasksResponse} */
  ListTasks(data?: ListTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListTasksResponse>;
  /** 获取本地录像URL地址 {@link PlayRecordRequest} {@link PlayRecordResponse} */
  PlayRecord(data: PlayRecordRequest, config?: AxiosRequestConfig): AxiosPromise<PlayRecordResponse>;
  /** 查询禁播通道列表 {@link QueryForbidPlayChannelListRequest} {@link QueryForbidPlayChannelListResponse} */
  QueryForbidPlayChannelList(data: QueryForbidPlayChannelListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryForbidPlayChannelListResponse>;
  /** 同步设备通道 {@link RefreshDeviceChannelRequest} {@link RefreshDeviceChannelResponse} */
  RefreshDeviceChannel(data: RefreshDeviceChannelRequest, config?: AxiosRequestConfig): AxiosPromise<RefreshDeviceChannelResponse>;
  /** 设置通道禁止播流 {@link SetForbidPlayChannelsRequest} {@link SetForbidPlayChannelsResponse} */
  SetForbidPlayChannels(data: SetForbidPlayChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<SetForbidPlayChannelsResponse>;
  /** 更新AI任务 {@link UpdateAITaskRequest} {@link UpdateAITaskResponse} */
  UpdateAITask(data: UpdateAITaskRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAITaskResponse>;
  /** 更新 AI 任务状态 {@link UpdateAITaskStatusRequest} {@link UpdateAITaskStatusResponse} */
  UpdateAITaskStatus(data: UpdateAITaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAITaskStatusResponse>;
  /** 批量修改设备组织 {@link UpdateDeviceOrganizationRequest} {@link UpdateDeviceOrganizationResponse} */
  UpdateDeviceOrganization(data: UpdateDeviceOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceOrganizationResponse>;
  /** 禁用-启用设备 {@link UpdateDeviceStatusRequest} {@link UpdateDeviceStatusResponse} */
  UpdateDeviceStatus(data: UpdateDeviceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceStatusResponse>;
  /** 修改网关信息 {@link UpdateGatewayRequest} {@link UpdateGatewayResponse} */
  UpdateGateway(data: UpdateGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGatewayResponse>;
  /** 修改组织 {@link UpdateOrganizationRequest} {@link UpdateOrganizationResponse} */
  UpdateOrganization(data: UpdateOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOrganizationResponse>;
  /** 修改录像上云计划 {@link UpdateRecordBackupPlanRequest} {@link UpdateRecordBackupPlanResponse} */
  UpdateRecordBackupPlan(data: UpdateRecordBackupPlanRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRecordBackupPlanResponse>;
  /** 修改录像上云模板 {@link UpdateRecordBackupTemplateRequest} {@link UpdateRecordBackupTemplateResponse} */
  UpdateRecordBackupTemplate(data: UpdateRecordBackupTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRecordBackupTemplateResponse>;
  /** 修改实时上云计划 {@link UpdateRecordPlanRequest} {@link UpdateRecordPlanResponse} */
  UpdateRecordPlan(data: UpdateRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRecordPlanResponse>;
  /** 修改实时上云模板 {@link UpdateRecordTemplateRequest} {@link UpdateRecordTemplateResponse} */
  UpdateRecordTemplate(data: UpdateRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRecordTemplateResponse>;
  /** 修改设备 {@link UpdateUserDeviceRequest} {@link UpdateUserDeviceResponse} */
  UpdateUserDevice(data: UpdateUserDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUserDeviceResponse>;
  /** 网关升级 {@link UpgradeGatewayRequest} {@link UpgradeGatewayResponse} */
  UpgradeGateway(data: UpgradeGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeGatewayResponse>;
}

export declare type Versions = ["2023-05-17"];

export default Iss;
