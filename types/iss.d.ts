/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 增加设备接口返回数据 */
declare interface AddDeviceData {
  /** 设备iD */
  DeviceId?: string;
  /** 设备编码（国标设备即我们为设备生成的20位国标编码，rtmp 设备为10 位设备编码） */
  Code?: string;
  /** 设备名称 */
  Name?: string;
  /** 设备接入协议，1:RTMP,2:GB枚举值：1： RTMP2： GB6： ISUP */
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
  /** 设备接入网关ID（已不再使用，保留用于兼容，可忽略） */
  GatewayId?: string;
  /** 网关接入协议类型（已不再使用，保留用于兼容，可忽略） */
  ProtocolType?: number;
  /** 设备接入IP（已不再使用，保留用于兼容，可忽略） */
  Ip?: string;
  /** 设备Port（已不再使用，保留用于兼容，可忽略） */
  Port?: number;
  /** 设备用户名（已不再使用，保留用于兼容，可忽略） */
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
  /** 周期偏移量，默认1，表示拉取昨天的设备录像，0表示取去今天的设备录像，3表示拉取前天的设备录像默认值：1 */
  DayOffset?: number;
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

/** 批量获取截图图片URL列表信息 */
declare interface BatchGetVideoSnapshotImageUrlData {
  /** 图片Url信息 */
  Images?: ImageUrlInfo[];
  /** 图片Url有效期单位：秒默认值：600 */
  ImageUrlExpires?: number;
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

/** 截图结果的回调地址配置 */
declare interface CallbackURL {
  /** 图片回调地址 */
  Url?: string;
  /** Token */
  Token?: string;
  /** 是否开启 */
  Enable?: boolean;
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

/** 获取开流地址返回数据 */
declare interface ControlDeviceStreamData {
  /** flv 流地址 */
  Flv?: string;
  /** hls 流地址 */
  Hls?: string;
  /** rtmp 流地址 */
  Rtmp?: string;
  /** fmp4地址 */
  FMp4?: string;
}

/** 查询国标设备地址列表 */
declare interface DescribeDeviceAddrList {
  /** 设备地址列表 */
  RemoteAddrs?: RemoteAddrInfo[];
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
  /** 设备接入协议，1:RTMP,2:GB枚举值：1： RTMP2： GB */
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
  /** 设备接入网关ID（已不再使用，保留用于兼容，可忽略） */
  GatewayId?: string;
  /** 设备所属网关名称（已不再使用，保留用于兼容，可忽略） */
  GatewayName?: string;
  /** 设备网关协议名称（已不再使用，保留用于兼容，可忽略） */
  ProtocolTypeName?: string;
  /** 网关接入协议类型（已不再使用，保留用于兼容，可忽略） */
  ProtocolType?: number;
  /** 设备接入IP（已不再使用，保留用于兼容，可忽略） */
  Ip?: string;
  /** 设备Port（已不再使用，保留用于兼容，可忽略） */
  Port?: number;
  /** 设备用户名（已不再使用，保留用于兼容，可忽略） */
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
  /** Rtmp设备安全认证推流地址(仅rtmp设备有效) */
  PushStreamSecureUrl?: string;
  /** 国标SIP域名 */
  SipFQDN?: string;
  /** 国标SIP三网IP地址 */
  SipCarrierEndpoints?: SipCarrierEndpoints;
  /** 国标校时开关枚举值：0： 关闭1： 开启默认值： 1 */
  TimeSyncSwitch?: number;
}

/** 批量查询设备接口返回数据 */
declare interface DescribeDeviceListData {
  /** 设备详情列表 */
  List?: DescribeDeviceData[];
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
  /** 周期偏移量，默认1，表示拉取昨天的设备录像，0表示取去今天的设备录像，3表示拉取前天的设备录像 */
  DayOffset?: number;
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

/** 生效时段 */
declare interface EffectiveTime {
  /** 开始时间参数格式：hh:mm:ss */
  BeginTime: string;
  /** 结束时间参数格式：hh:mm:ss */
  EndTime: string;
  /** 重复周期： 1-周一 2-周二 3-周三 4-周四 5-周五 6-周六 7-周日取值范围：[1, 7] */
  WeekDay: number;
}

/** 抓拍结果信息 */
declare interface GBDeviceSnapInfo {
  /** 文件名称 */
  FileName?: string;
  /** 下载地址，空值表示存储图片过期 */
  DownloadUrl?: string;
  /** 图片大小，单位B */
  ImageSize?: number;
  /** 文件的创建时间 */
  CreatedTime?: string;
  /** 图片的接收时间 */
  ReceivedTime?: string;
  /** 预览地址，空值表示存储图片过期 */
  PreviewUrl?: string;
  /** 国标信令会话ID，同时对应控制设备抓拍 ( ControlDeviceSnapshot )接口返回的request_id */
  SessionId?: string;
}

/** ISUP智能安全接入 API返回数据 */
declare interface ISAPIOutputData {
  /** 输出参数 */
  OutputData?: string;
}

/** 图片场景配置 */
declare interface ImageSceneInfo {
  /** 截图类型枚举值：1：实时截帧2：低频截帧 */
  Type: number;
  /** 截帧频率Type=1时取值[5, 180]秒，Type=2时取值[30, 36000]秒 */
  Interval: number;
  /** 多张截图模式 */
  MultiMode?: MultiSnapshotMode | null;
}

/** 图片下载URL信息 */
declare interface ImageUrlInfo {
  /** 图片Id */
  ImageId?: string;
  /** 图片Url */
  ImageUrl?: string;
  /** 错误信息说明获取图片url失败的原因 */
  ErrorMessage?: string;
}

/** 生命周期，云文件生命周期设置，管理文件冷、热存储的时间 */
declare interface LifeCycleData {
  /** 云文件热存储时长，单位天，最小1天，最大3650天 */
  Transition: number;
  /** 云文件冷存储时长， 单位天，0表示不设置，设置时最小60天，Expiration字段加Transition字段不超过3650天 */
  Expiration: number;
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
  /** 周期偏移量，默认1，表示拉去昨天的，0表示拉去今天的，3表示拉去前天的 */
  DayOffset?: number;
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

/** 本地录像下载任务列表 */
declare interface ListVideoDownloadTaskData {
  /** 任务列表 */
  List?: VideoDownloadTask[];
  /** 任务总数 */
  TotalCount?: number;
}

/** 获取截图模板详情列表 */
declare interface ListVideoSnapshotTemplateData {
  /** 总数 */
  TotalCount?: number;
  /** 排序参数 */
  Sort?: string;
  /** 排序顺序 */
  Order?: string;
  /** 页码 */
  PageNumber?: number;
  /** 每页数目 */
  PageSize?: number;
  /** 截图模板列表 */
  List?: VideoSnapshotTemplateInfo[];
}

/** 多张截图模式 */
declare interface MultiSnapshotMode {
  /** 是否启用多张模式false时为单张模式，忽略Interval、Total参数默认值：false */
  Enable: boolean;
  /** 截帧间隔取值范围：[10, 600]单位：秒 */
  Interval: number;
  /** 截帧张数取值范围：[1, 10] */
  Total: number;
}

/** 多张模式参数 */
declare interface MultiVideoSnapshotMode {
  /** 是否启用多张模式， false时，为单张模式，忽略Interval、Total参数默认值：false */
  Enable: boolean;
  /** 截帧间隔取值范围：[10, 600]单位：秒 */
  Interval: number;
  /** 截帧张数取值范围：[1, 10] */
  Total: number;
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

/** 本地录像播放url数据结构 */
declare interface PlayRecordData {
  /** flv录像播放地址 */
  Flv?: string;
  /** fmp4录像播放地址 */
  FMp4?: string;
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

/** 设备地址返回结果 */
declare interface RemoteAddrInfo {
  /** 设备Id */
  DeviceId?: string;
  /** IP地址 */
  Addr?: string;
}

/** 设置通道禁止播流，有通道Id和使能enable字段 */
declare interface SetForbidplayChannelParam {
  /** 通道Id */
  ChannelId: string;
  /** 是否禁止通道播流 */
  Enable: boolean;
}

/** 多运营商的国标服务器IP地址 */
declare interface SipCarrierEndpoints {
  /** 电信IP */
  CT?: string;
  /** 联通IP */
  CU?: string;
  /** 移动IP */
  CMCC?: string;
  /** 腾讯网络IP */
  BGP?: string;
  /** 中小运营商IP */
  CAP?: string;
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
  /** 设备接入协议，1:RTMP,2:GB枚举值：1： RTMP2： GB */
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
  /** 设备接入网关ID（已不再使用，保留用于兼容，可忽略） */
  GatewayId?: string;
  /** 网关接入协议类型（已不再使用，保留用于兼容，可忽略） */
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
  /** 周期偏移量，默认1，表示拉取昨天的设备录像，0表示取去今天的设备录像，3表示拉取前天的设备录像 */
  DayOffset?: number;
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

/** 视觉理解计划信息 */
declare interface VLPlanInfo {
  /** 计划ID */
  VLPlanId?: string;
  /** 计划名称 */
  Name?: string;
  /** 计划描述 */
  Describe?: string;
  /** 视觉理解模板ID */
  VLTemplateId?: string;
  /** 回调通知配置 */
  Callback?: CallbackURL;
  /** 文件过期时间（秒） */
  FileExpires?: number;
  /** 计划包含的通道数量 */
  ChannelCount?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 最近一次更新时间 */
  UpdatedAt?: string;
}

/** 视觉理解计划结果详情 */
declare interface VLPlanResultDetailInfo {
  /** 分析结果 ID */
  VLPlanResultId?: string;
  /** 媒体类型，当前固定为 image */
  MediaType?: string;
  /** 所属分析计划 ID */
  VLPlanId?: string;
  /** 计划名称 */
  VLPlanName?: string;
  /** 通道 ID */
  ChannelId?: string;
  /** 通道名称 */
  ChannelName?: string;
  /** 设备 ID */
  DeviceId?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 所属组织 ID */
  OrganizationId?: string;
  /** 所属组织名称 */
  OrganizationName?: string;
  /** 分析时间戳（秒） */
  VLResultTimestamp?: number;
  /** 图片模式截图时间戳（秒） */
  SnapshotTimestamp?: number;
  /** 视频片段开始时间戳（秒） */
  VideoStartTimestamp?: number;
  /** 视频片段结束时间戳（秒） */
  VideoEndTimestamp?: number;
  /** 视频模式计费帧数 */
  BilledFrameCount?: number;
  /** AI 分析结果内容（JSON 字符串） */
  Content?: string;
  /** 截图临时下载 URL（有效期 300 秒） */
  ImageUrl?: string;
  /** 截图 URL 有效期（秒） */
  ImageUrlExpire?: number;
  /** 创建时间，格式 2006-01-02 15:04:05 */
  CreatedAt?: string;
  /** 更新时间，格式 2006-01-02 15:04:05 */
  UpdatedAt?: string;
}

/** 视觉理解计划源素材 URL 信息 */
declare interface VLPlanResultSnapshotImageUrlInfo {
  /** 分析结果 ID */
  VLPlanResultId?: string;
  /** 源素材下载 URL（失败时为空） */
  SourceFileURL?: string;
  /** URL 有效期（秒，失败时为 0） */
  Expire?: number;
  /** 错误信息（失败时有值） */
  ErrMsg?: string;
}

/** 视觉理解模板信息 */
declare interface VLTemplateInfo {
  /** 模板ID */
  VLTemplateId?: string;
  /** AI 模型枚举值：IVC-G： 视图默认大模型 */
  AIModel?: string;
  /** AI场景名称 */
  Name?: string;
  /** AI场景描述 */
  Describe?: string;
  /** 提示词 */
  Prompt?: string;
  /** 分析模式枚举值：image： 图片模式video： 视频模式 */
  AnalysisMode?: string;
  /** 图片场景配置 */
  ImageConfig?: ImageSceneInfo;
  /** 生效时段列表 */
  Times?: EffectiveTime[];
  /** 创建时间 */
  CreatedAt?: string;
  /** 最近一次更新时间 */
  UpdatedAt?: string;
  /** 是否关联到视觉理解计划 */
  IsUsed?: boolean;
  /** 视频场景配置 */
  VideoConfig?: VideoSceneInfo;
}

/** 本地录像下载任务 */
declare interface VideoDownloadTask {
  /** 下载任务 ID */
  DownloadTaskId?: string;
  /** 通道 ID */
  ChannelId?: string;
  /** 通道名称 */
  ChannelName?: string;
  /** 通道编码 */
  ChannelCode?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 设备编码 */
  DeviceCode?: string;
  /** 任务状态（0：未执行；1：执行中；2 任务完成；3：任务失败） */
  Status?: number;
  /** 下载录像时间段 */
  VideoTimeSection?: string;
  /** 倍速 */
  Scale?: number;
  /** 下载时长单位：秒 */
  DownloadTime?: number;
  /** 录像大小单位：字节（Byte） */
  VideoSize?: number;
  /** 任务开始时间 */
  StartTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 文件下载地址 */
  FileDownloadUrl?: string;
  /** 失败原因 */
  FailedReason?: string;
  /** 生命周期规则，热存天数 */
  Expire?: number;
  /** mp4预览地址 */
  PreviewUrl?: string;
}

/** 录像下载任务数据结构 */
declare interface VideoDownloadTaskData {
  /** 下载任务ID */
  DownloadTaskId?: string;
}

/** 视频场景配置 */
declare interface VideoSceneInfo {
  /** 分析周期（秒）：每隔多少秒从云端录像中截取一个视频片段进行分析。例如 Interval=3600、Duration=600，表示每隔1小时 取一个 10 分钟的视频片段进行分析。需满足 Duration ≤ Interval，否则相邻片段将重叠。取值范围［5,86400］。 */
  Interval: number;
  /** 分析片段时长（秒）：每次分析截取的视频片段长度，即单次分析覆盖的视频时长。取值范围［5,12800］。 */
  Duration: number;
  /** 抽帧率（FPS）：在片段内每隔1/Fps 秒截取一帧进行分析。取值越大，分析越精细，单次分析的帧数越多。默认值1，取值范围［0.1,1 */
  Fps?: number;
}

/** 截图配置信息 */
declare interface VideoSnapshotConfigInfo {
  /** 截图配置Id */
  ConfigId?: string;
  /** 截图配置名称 */
  Name?: string;
  /** 截图模板Id */
  TemplateId?: string;
  /** 截图模板名称 */
  TemplateName?: string;
  /** 截图类型枚举值：1： 实时截帧2： 低频截帧 */
  Type?: number;
  /** 图片存储天数单位：天 */
  FileExpires?: number;
  /** 回调配置 */
  Callback?: CallbackURL;
  /** 截图配置关联的通道数 */
  RelatedChannelCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 最近一次更新时间 */
  UpdateTime?: string;
}

/** 截图模板信息 */
declare interface VideoSnapshotTemplateInfo {
  /** 截图模板Id */
  TemplateId?: string;
  /** 截图模板名称 */
  Name?: string;
  /** 截图类型枚举值：1： 实时截帧2： 低频截帧 */
  Type?: number;
  /** 截帧频率 */
  Interval?: number;
  /** 多张模式 */
  MultiMode?: MultiVideoSnapshotMode;
  /** 生效时段 */
  Times?: EffectiveTime[];
  /** 模板关联的配置数 */
  RelatedConfigCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 最近一次更新时间 */
  UpdateTime?: string;
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
  /** 周期偏移量，默认1，表示拉取昨天的设备录像，0表示拉取今天的设备录像，3表示拉取前天的设备录像取值范围：[0, 90]默认值：1 */
  DayOffset?: number;
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
  /** 设备接入协议（1:RTMP,2:GB,6:ISUP）枚举值：1： RTMP2： GB6： ISUP默认值：2 */
  AccessProtocol: number;
  /** 设备类型，1:IPC,2:NVR；（若设备接入协议选择RTMP，则设备类型只能选择IPC）枚举值：1： IPC2： NVR */
  Type: number;
  /** 设备所属组织ID，从查询组织接口DescribeOrganization中获取 */
  OrganizationId: string;
  /** 设备接入服务节点ID（从查询设备可用服务节点接口DescribeRegionDomain中获取的Value字段） */
  ClusterId: string;
  /** 设备流传输协议，1:UDP,2:TCP；(国标设备有效，不填写则默认UDP协议) */
  TransportProtocol?: number;
  /** 设备密码（国标设备必填，长度为1-64个字符） */
  Password?: string;
  /** 设备描述，长度不超过128个字符 */
  Description?: string;
  /** 设备接入网关ID（已不再使用，保留用于兼容，可忽略） */
  GatewayId?: string;
  /** 网关接入协议类型（已不再使用，保留用于兼容，可忽略） */
  ProtocolType?: number;
  /** 设备接入IP（已不再使用，保留用于兼容，可忽略） */
  Ip?: string;
  /** 设备端口（已不再使用，保留用于兼容，可忽略）取值范围：[1, 65535]单位： 端口 */
  Port?: number;
  /** 设备用户名（已不再使用，保留用于兼容，可忽略） */
  Username?: string;
  /** 设备 SN（已不再使用，保留用于兼容，可忽略） */
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

declare interface BatchAddVideoSnapshotConfigChannelRequest {
  /** 截图配置Id */
  ConfigId: string;
  /** 通道Id列表 */
  Channels?: string[];
}

declare interface BatchAddVideoSnapshotConfigChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchAssignVLPlanChannelsRequest {
  /** 计划 ID */
  VLPlanId: string;
  /** 操作命令：1=关联，2=解绑 */
  Cmd: number;
  /** 通道 ID 列表，最多 500 个；与 OrganizationIds 至少传一个（Cmd=1 时） */
  ChannelIds?: string[];
  /** 组织 ID 列表（仅 Cmd=1 时有效，Cmd=2 时不允许传入）；展开该组织下所有通道参与关联，与 ChannelIds 取并集去重 */
  OrganizationIds?: string[];
}

declare interface BatchAssignVLPlanChannelsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteVideoDownloadTaskRequest {
  /** 本地录像下载任务 ID 列表 */
  DownloadTaskIds?: string[];
}

declare interface BatchDeleteVideoDownloadTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchGetVLPlanSourceFileURLRequest {
  /** 分析结果 ID 列表，最多 200 个 */
  VLPlanResultIds: string[];
  /** URL 有效期（秒），范围 [60, 86400]，默认 600 */
  Expire?: number;
}

declare interface BatchGetVLPlanSourceFileURLResponse {
  /** URL 列表 */
  Data?: VLPlanResultSnapshotImageUrlInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchGetVideoSnapshotImageUrlRequest {
  /** 图片Id */
  ImageIds: string[];
  /** 图片URL有效期，单位：秒取值范围：[60, 86400]默认值：600 */
  ImageUrlExpires?: number;
}

declare interface BatchGetVideoSnapshotImageUrlResponse {
  /** 截图图片URL结果列表 */
  Data?: BatchGetVideoSnapshotImageUrlData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchOperateDeviceRequest {
  /** 设备 ID 数组（从获取设备列表接口ListDevices中获取）取值参考：ListDevices */
  DeviceIds: string[];
  /** 操作命令枚举值：enable： 启用disable： 禁用delete： 删除sync： 同步设备通道 */
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

declare interface ControlDeviceSnapshotRequest {
  /** 通道ID */
  ChannelId: string;
  /** 连拍张数，可选值范围1～10 */
  SnapNum: number;
  /** 抓拍间隔时间，可选值范围1～1800 */
  Interval: number;
  /** 图片存储时间，默认 7 天，仅支持（7, 15, 30, 60, 90, 180, 365）天 */
  Expire?: number;
}

declare interface ControlDeviceSnapshotResponse {
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

declare interface CreateVLPlanRequest {
  /** 计划名称，仅支持中文/英文/数字/_/-，最长 32 个字符 */
  Name: string;
  /** 关联的视觉理解模板 ID */
  VLTemplateId: string;
  /** 计划描述，最长 256 个字符 */
  Describe?: string;
  /** 截图文件存储天数，范围 [7, 1080]；图片模式必填，视频模式不传 */
  FileExpires?: number;
  /** 回调通知配置 */
  Callback?: CallbackURL;
}

declare interface CreateVLPlanResponse {
  /** 视觉理解计划信息 */
  Data?: VLPlanInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVLTemplateRequest {
  /** AI 模型枚举值：ivc-vl-1.0： 视图大模型 */
  AIModel: string;
  /** 模板名称，仅支持中文/英文/数字/_/-，最长 32 个字符 */
  Name: string;
  /** 提示词，最大 2MB */
  Prompt: string;
  /** 分析模式枚举值：image： 图片模式video： 视频模式 */
  AnalysisMode: string;
  /** 生效时段列表，最多 100 条 */
  Times: EffectiveTime[];
  /** 模板描述，最长 256 个字符 */
  Describe?: string;
  /** 图片场景配置（AnalysisMode=image 时必填） */
  ImageConfig?: ImageSceneInfo;
}

declare interface CreateVLTemplateResponse {
  /** 视觉理解模板信息 */
  Data?: VLTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVideoDownloadTaskRequest {
  /** 通道ID */
  ChannelId: string;
  /** 开始时间 */
  BeginTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 默认1倍速，支持（1,2,4,8）倍速 */
  Scale?: number;
  /** 转码后的mp4文件过期时间（支持7,15,30,60,90,180,365） */
  Expire?: number;
  /** 下载文件格式，当前仅支持（1：mp4） */
  FileType?: number;
  /** 完成策略（0：拉流失败但是录像不完整则认为任务失败，不生成 MP4；1：拉流失败但是录像不完整则认为任务成功，生成 mp4） */
  CompletionPolicy?: number;
}

declare interface CreateVideoDownloadTaskResponse {
  /** 下载任务返回结果 */
  Data?: VideoDownloadTaskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVideoSnapshotConfigRequest {
  /** 截图配置名称入参限制：中文、英文、数字、“-”、“_” 长度不超过128个字符 */
  Name: string;
  /** 截图模板Id */
  TemplateId: string;
  /** 图片文件的热存储天数枚举值：7： 7天15： 15天30： 30天60： 60天90： 90天180： 180天270： 270天360： 360天540： 540天720： 720天900： 900天1080： 1080天 */
  FileExpires: number;
  /** 截图结果回调地址 */
  Callback?: CallbackURL;
}

declare interface CreateVideoSnapshotConfigResponse {
  /** 截图配置信息 */
  Data?: VideoSnapshotConfigInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVideoSnapshotTemplateRequest {
  /** 模板名称： 中文、英文、数字、“-”、“_” 长度不超过128个字符 */
  Name: string;
  /** 截图类型： 1-实时截帧 2-低频截帧注意：实时截帧在生效时段期间一直拉取实时流， 低频截帧在生效时段期间按需拉取实时流，每次拉流的最短持续时间不低于1分钟枚举值：1： 实时截帧2： 低频截帧 */
  Type: number;
  /** 截帧频率： Type = 1时，取值[5, 180]秒 Type = 2时 取值[30, 36000]秒 */
  Interval: number;
  /** 生效时段，注：数组大小不超过100个且每个时间段不低于1分钟 */
  Times: EffectiveTime[];
  /** 多张模式 */
  MultiMode?: MultiVideoSnapshotMode;
}

declare interface CreateVideoSnapshotTemplateResponse {
  /** 截图模板信息 */
  Data?: VideoSnapshotTemplateInfo;
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

declare interface DeleteTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DeleteTaskResponse {
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

declare interface DeleteVLPlanRequest {
  /** 计划 ID */
  VLPlanId: string;
}

declare interface DeleteVLPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVLTemplateRequest {
  /** 模板 ID */
  VLTemplateId: string;
}

declare interface DeleteVLTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVideoSnapshotConfigRequest {
  /** 截图配置Id */
  ConfigId: string;
}

declare interface DeleteVideoSnapshotConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVideoSnapshotTemplateRequest {
  /** 截图模板Id */
  TemplateId: string;
}

declare interface DeleteVideoSnapshotTemplateResponse {
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

declare interface DescribeGBDeviceAddrRequest {
  /** 设备ID列表 */
  DeviceIds: string[];
}

declare interface DescribeGBDeviceAddrResponse {
  /** 无 */
  Data?: DescribeDeviceAddrList;
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
  /** 云录像回放时，是否需要开启时间戳矫正，主要解决时间戳反转、回退等问题导致无法播放 */
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

declare interface DescribeUserDeviceListRequest {
  /** 设备Id列表 */
  DeviceIds: string[];
}

declare interface DescribeUserDeviceListResponse {
  /** 返回结果 */
  Data?: DescribeDeviceListData;
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

declare interface DescribeVLPlanRequest {
  /** 计划 ID */
  VLPlanId: string;
}

declare interface DescribeVLPlanResponse {
  /** 视觉理解计划信息 */
  Data?: VLPlanInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVLPlanResultRequest {
  /** 分析结果 ID */
  VLPlanResultId: string;
}

declare interface DescribeVLPlanResultResponse {
  /** 分析结果详情 */
  Data?: VLPlanResultDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVLTemplateRequest {
  /** 模板 ID */
  VLTemplateId: string;
}

declare interface DescribeVLTemplateResponse {
  /** 视觉理解模板信息 */
  Data?: VLTemplateInfo;
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

declare interface DescribeVideoSnapshotConfigRequest {
  /** 截图配置Id */
  ConfigId: string;
}

declare interface DescribeVideoSnapshotConfigResponse {
  /** 截图配置详情结果 */
  Data?: VideoSnapshotConfigInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoSnapshotTemplateRequest {
  /** 截图模板Id */
  TemplateId: string;
}

declare interface DescribeVideoSnapshotTemplateResponse {
  /** 截图模板详情 */
  Data?: VideoSnapshotTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDeviceSnapshotsRequest {
  /** 通道ID */
  ChannelId: string;
  /** 设备ID（该字段暂不生效） */
  DeviceId?: string;
  /** 查询开始时间，默认查询当天 */
  Start?: number;
  /** 查询结束时间，默认查询当天 */
  End?: number;
  /** 分页页码，默认1 */
  PageNumber?: number;
  /** 分页大小，默认200，最大2000 */
  PageSize?: number;
}

declare interface ListDeviceSnapshotsResponse {
  /** 抓拍结果信息列表 */
  Data?: GBDeviceSnapInfo[];
  /** 抓拍结果总数 */
  TotalCount?: number;
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

declare interface ListVLPlansRequest {
  /** 计划名称，精确匹配 */
  Name?: string;
  /** 页码，默认 1 */
  PageNumber?: number;
  /** 每页数量，默认 20，最大 200 */
  PageSize?: number;
}

declare interface ListVLPlansResponse {
  /** 计划列表 */
  Data?: VLPlanInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListVLTemplatesRequest {
  /** 模板名称，精确匹配 */
  Name?: string;
  /** 分析模式过滤，image / video */
  AnalysisMode?: string;
  /** 截图类型过滤（仅 AnalysisMode=image 时生效）：realtime / low */
  CaptureType?: string;
  /** 页码，默认 1 */
  PageNumber?: number;
  /** 每页数量，默认 20，最大 200 */
  PageSize?: number;
}

declare interface ListVLTemplatesResponse {
  /** 模板列表 */
  Data?: VLTemplateInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListVideoDownloadTaskRequest {
  /** 设备名称，用于模糊搜索 */
  DeviceName?: string;
  /** 通道名称，用于模糊搜索 */
  ChannelName?: string;
  /** 任务状态（0：准备中，1：执行中，2：已完成，3：失败） */
  Status?: number;
  /** 排序规则（仅支持 StartTime，倒序为-StartTime） */
  SortRule?: string;
  /** 响应是否携带预览地址(0:不携带；1:携带) */
  WithPreviewUrl?: number;
  /** 分页页数 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 下载任务 ID */
  DownloadTaskId?: string;
  /** 下载地址过期时间，单位秒，最大为 1 天， 86400秒 */
  UrlExpires?: number;
  /** 任务日期，默认当天 */
  Date?: string;
}

declare interface ListVideoDownloadTaskResponse {
  /** 本地录像下载任务列表 */
  Data?: ListVideoDownloadTaskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListVideoSnapshotTemplateRequest {
  /** 模板名称 */
  Name?: string;
  /** 截图类型枚举值：1： 实时截帧2： 低频截帧 */
  Type?: number;
  /** 排序参数默认值：update_time */
  Sort?: string;
  /** 排序顺序枚举值：desc： 降序asc： 生序默认值：desc */
  Order?: string;
  /** 页码默认值：1 */
  PageNumber?: number;
  /** 每页数目默认值：20 */
  PageSize?: number;
}

declare interface ListVideoSnapshotTemplateResponse {
  /** 截图模板结果列表 */
  Data?: ListVideoSnapshotTemplateData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVLPlanRequest {
  /** 计划 ID */
  VLPlanId: string;
  /** 新计划名称 */
  Name?: string;
  /** 新计划描述 */
  Describe?: string;
  /** 新关联视觉理解模板 ID */
  VLTemplateId?: string;
  /** 新存储天数，范围 [7, 1080]，0 表示不修改 */
  FileExpires?: number;
  /** 新回调配置 */
  Callback?: CallbackURL;
}

declare interface ModifyVLPlanResponse {
  /** 视觉理解计划信息 */
  Data?: VLPlanInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVideoSnapshotConfigRequest {
  /** 截图配置Id */
  ConfigId: string;
  /** 截图配置名称入参限制：中文、英文、数字、“-”、“_” 长度不超过128个字符 */
  Name?: string;
  /** 截图模板Id */
  TemplateId?: string;
  /** 图片文件的热存储天数枚举值：7： 7天15： 15天30： 30天60： 60天90： 90天180： 180天270： 270天360： 360天540： 540天720： 720天900： 900天1080： 1080天 */
  FileExpires?: number;
  /** 回调配置 */
  Callback?: CallbackURL;
}

declare interface ModifyVideoSnapshotConfigResponse {
  /** 截图配置信息 */
  Data?: VideoSnapshotConfigInfo;
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
  /** 设备ID（从获取设备列表接口ListDevices中获取）取值参考：ListDevices */
  DeviceId: string;
  /** 设备名称（仅支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过128位） */
  Name?: string;
  /** 设备流传输协议，仅国标设备有效，填0则不做更改（1:UDP,2:TCP） */
  TransportProtocol?: number;
  /** 设备密码（仅国标设备支持，长度不超过 64 位） */
  Password?: string;
  /** 设备描述（长度不超过128位） */
  Description?: string;
  /** 设备接入IP（已不再使用，保留用于兼容，可忽略） */
  Ip?: string;
  /** 设备Port（已不再使用，保留用于兼容，可忽略） */
  Port?: number;
  /** 设备用户名（已不再使用，保留用于兼容，可忽略） */
  Username?: string;
  /** 网关设备接入协议（已不再使用，保留用于兼容，可忽略） */
  ProtocolType?: number;
  /** 音频关开（0：关闭；1：开启）默认开启，关闭时丢弃音频 */
  AudioSwitch?: number;
  /** 订阅开关（0：关闭；1：开启）默认开启，开启状态下会订阅设备通道变化，仅国标NVR设备有效 */
  SubscribeSwitch?: number;
  /** 是否开启静音帧（0：关闭；1 开启） */
  SilentFrameSwitch?: number;
  /** 时钟同步开关（仅国标设备生效）枚举值：0： 关闭1： 开启默认值： 1 */
  TimeSyncSwitch?: number;
}

declare interface UpdateUserDeviceResponse {
  /** 返回数据 */
  Data?: UpdateDeviceData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Iss 智能视图计算平台} */
declare interface Iss {
  (): Versions;
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
  /** 批量添加截图配置的通道 {@link BatchAddVideoSnapshotConfigChannelRequest} {@link BatchAddVideoSnapshotConfigChannelResponse} */
  BatchAddVideoSnapshotConfigChannel(data: BatchAddVideoSnapshotConfigChannelRequest, config?: AxiosRequestConfig): AxiosPromise<BatchAddVideoSnapshotConfigChannelResponse>;
  /** 批量关联视觉理解计划通道 {@link BatchAssignVLPlanChannelsRequest} {@link BatchAssignVLPlanChannelsResponse} */
  BatchAssignVLPlanChannels(data: BatchAssignVLPlanChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchAssignVLPlanChannelsResponse>;
  /** 批量删除本地录像下载任务 {@link BatchDeleteVideoDownloadTaskRequest} {@link BatchDeleteVideoDownloadTaskResponse} */
  BatchDeleteVideoDownloadTask(data?: BatchDeleteVideoDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteVideoDownloadTaskResponse>;
  /** 批量获取视觉理解计划源素材 URL {@link BatchGetVLPlanSourceFileURLRequest} {@link BatchGetVLPlanSourceFileURLResponse} */
  BatchGetVLPlanSourceFileURL(data: BatchGetVLPlanSourceFileURLRequest, config?: AxiosRequestConfig): AxiosPromise<BatchGetVLPlanSourceFileURLResponse>;
  /** 批量获取截图图片URL {@link BatchGetVideoSnapshotImageUrlRequest} {@link BatchGetVideoSnapshotImageUrlResponse} */
  BatchGetVideoSnapshotImageUrl(data: BatchGetVideoSnapshotImageUrlRequest, config?: AxiosRequestConfig): AxiosPromise<BatchGetVideoSnapshotImageUrlResponse>;
  /** 批量操作设备 {@link BatchOperateDeviceRequest} {@link BatchOperateDeviceResponse} */
  BatchOperateDevice(data: BatchOperateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<BatchOperateDeviceResponse>;
  /** ISAPI 透传异步回调 {@link CallISAPIRequest} {@link CallISAPIResponse} */
  CallISAPI(data: CallISAPIRequest, config?: AxiosRequestConfig): AxiosPromise<CallISAPIResponse>;
  /** ptz 控制 {@link ControlDevicePTZRequest} {@link ControlDevicePTZResponse} */
  ControlDevicePTZ(data: ControlDevicePTZRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDevicePTZResponse>;
  /** 预置位操作 {@link ControlDevicePresetRequest} {@link ControlDevicePresetResponse} */
  ControlDevicePreset(data: ControlDevicePresetRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDevicePresetResponse>;
  /** 控制设备抓拍 {@link ControlDeviceSnapshotRequest} {@link ControlDeviceSnapshotResponse} */
  ControlDeviceSnapshot(data: ControlDeviceSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceSnapshotResponse>;
  /** 获取开流地址 {@link ControlDeviceStreamRequest} {@link ControlDeviceStreamResponse} */
  ControlDeviceStream(data: ControlDeviceStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceStreamResponse>;
  /** 本地录像回放控制 {@link ControlRecordRequest} {@link ControlRecordResponse} */
  ControlRecord(data: ControlRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ControlRecordResponse>;
  /** 查询本地录像时间轴 {@link ControlRecordTimelineRequest} {@link ControlRecordTimelineResponse} */
  ControlRecordTimeline(data: ControlRecordTimelineRequest, config?: AxiosRequestConfig): AxiosPromise<ControlRecordTimelineResponse>;
  /** 创建视觉理解计划 {@link CreateVLPlanRequest} {@link CreateVLPlanResponse} */
  CreateVLPlan(data: CreateVLPlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVLPlanResponse>;
  /** 创建视觉理解模板 {@link CreateVLTemplateRequest} {@link CreateVLTemplateResponse} */
  CreateVLTemplate(data: CreateVLTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVLTemplateResponse>;
  /** 创建本地录像下载任务 {@link CreateVideoDownloadTaskRequest} {@link CreateVideoDownloadTaskResponse} */
  CreateVideoDownloadTask(data: CreateVideoDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoDownloadTaskResponse>;
  /** 创建截图配置 {@link CreateVideoSnapshotConfigRequest} {@link CreateVideoSnapshotConfigResponse} */
  CreateVideoSnapshotConfig(data: CreateVideoSnapshotConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoSnapshotConfigResponse>;
  /** 创建截图模板 {@link CreateVideoSnapshotTemplateRequest} {@link CreateVideoSnapshotTemplateResponse} */
  CreateVideoSnapshotTemplate(data: CreateVideoSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoSnapshotTemplateResponse>;
  /** 删除域名 {@link DeleteDomainRequest} {@link DeleteDomainResponse} */
  DeleteDomain(data: DeleteDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainResponse>;
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
  /** 删除任务 {@link DeleteTaskRequest} {@link DeleteTaskResponse} */
  DeleteTask(data: DeleteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskResponse>;
  /** 删除设备 {@link DeleteUserDeviceRequest} {@link DeleteUserDeviceResponse} */
  DeleteUserDevice(data: DeleteUserDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserDeviceResponse>;
  /** 删除视觉理解计划 {@link DeleteVLPlanRequest} {@link DeleteVLPlanResponse} */
  DeleteVLPlan(data: DeleteVLPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVLPlanResponse>;
  /** 删除视觉理解模板 {@link DeleteVLTemplateRequest} {@link DeleteVLTemplateResponse} */
  DeleteVLTemplate(data: DeleteVLTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVLTemplateResponse>;
  /** 删除截图配置 {@link DeleteVideoSnapshotConfigRequest} {@link DeleteVideoSnapshotConfigResponse} */
  DeleteVideoSnapshotConfig(data: DeleteVideoSnapshotConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVideoSnapshotConfigResponse>;
  /** 删除截图模板 {@link DeleteVideoSnapshotTemplateRequest} {@link DeleteVideoSnapshotTemplateResponse} */
  DeleteVideoSnapshotTemplate(data: DeleteVideoSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVideoSnapshotTemplateResponse>;
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
  /** 查询国标设备公网地址 {@link DescribeGBDeviceAddrRequest} {@link DescribeGBDeviceAddrResponse} */
  DescribeGBDeviceAddr(data: DescribeGBDeviceAddrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGBDeviceAddrResponse>;
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
  /** 批量查询设备详情 {@link DescribeUserDeviceListRequest} {@link DescribeUserDeviceListResponse} */
  DescribeUserDeviceList(data: DescribeUserDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDeviceListResponse>;
  /** 查询视觉理解计划详情 {@link DescribeVLPlanRequest} {@link DescribeVLPlanResponse} */
  DescribeVLPlan(data: DescribeVLPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVLPlanResponse>;
  /** 查询视觉理解计划结果详情 {@link DescribeVLPlanResultRequest} {@link DescribeVLPlanResultResponse} */
  DescribeVLPlanResult(data: DescribeVLPlanResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVLPlanResultResponse>;
  /** 查询视觉理解模板详情 {@link DescribeVLTemplateRequest} {@link DescribeVLTemplateResponse} */
  DescribeVLTemplate(data: DescribeVLTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVLTemplateResponse>;
  /** 视频通道码率查询 {@link DescribeVideoBitRateRequest} {@link DescribeVideoBitRateResponse} */
  DescribeVideoBitRate(data: DescribeVideoBitRateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoBitRateResponse>;
  /** 获取云端录像下载URL地址 {@link DescribeVideoDownloadUrlRequest} {@link DescribeVideoDownloadUrlResponse} */
  DescribeVideoDownloadUrl(data: DescribeVideoDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoDownloadUrlResponse>;
  /** 截图配置详情 {@link DescribeVideoSnapshotConfigRequest} {@link DescribeVideoSnapshotConfigResponse} */
  DescribeVideoSnapshotConfig(data: DescribeVideoSnapshotConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoSnapshotConfigResponse>;
  /** 截图模板详情 {@link DescribeVideoSnapshotTemplateRequest} {@link DescribeVideoSnapshotTemplateResponse} */
  DescribeVideoSnapshotTemplate(data: DescribeVideoSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoSnapshotTemplateResponse>;
  /** 获取设备抓拍结果列表 {@link ListDeviceSnapshotsRequest} {@link ListDeviceSnapshotsResponse} */
  ListDeviceSnapshots(data: ListDeviceSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<ListDeviceSnapshotsResponse>;
  /** 获取设备列表 {@link ListDevicesRequest} {@link ListDevicesResponse} */
  ListDevices(data: ListDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDevicesResponse>;
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
  /** 获取视觉理解计划列表 {@link ListVLPlansRequest} {@link ListVLPlansResponse} */
  ListVLPlans(data?: ListVLPlansRequest, config?: AxiosRequestConfig): AxiosPromise<ListVLPlansResponse>;
  /** 获取视觉理解模板列表 {@link ListVLTemplatesRequest} {@link ListVLTemplatesResponse} */
  ListVLTemplates(data?: ListVLTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<ListVLTemplatesResponse>;
  /** 查询本地录像下载任务列表 {@link ListVideoDownloadTaskRequest} {@link ListVideoDownloadTaskResponse} */
  ListVideoDownloadTask(data?: ListVideoDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ListVideoDownloadTaskResponse>;
  /** 截图模板列表 {@link ListVideoSnapshotTemplateRequest} {@link ListVideoSnapshotTemplateResponse} */
  ListVideoSnapshotTemplate(data?: ListVideoSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ListVideoSnapshotTemplateResponse>;
  /** 修改视觉理解计划 {@link ModifyVLPlanRequest} {@link ModifyVLPlanResponse} */
  ModifyVLPlan(data: ModifyVLPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVLPlanResponse>;
  /** 更新截图配置 {@link ModifyVideoSnapshotConfigRequest} {@link ModifyVideoSnapshotConfigResponse} */
  ModifyVideoSnapshotConfig(data: ModifyVideoSnapshotConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVideoSnapshotConfigResponse>;
  /** 获取本地录像URL地址 {@link PlayRecordRequest} {@link PlayRecordResponse} */
  PlayRecord(data: PlayRecordRequest, config?: AxiosRequestConfig): AxiosPromise<PlayRecordResponse>;
  /** 查询禁播通道列表 {@link QueryForbidPlayChannelListRequest} {@link QueryForbidPlayChannelListResponse} */
  QueryForbidPlayChannelList(data: QueryForbidPlayChannelListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryForbidPlayChannelListResponse>;
  /** 同步设备通道 {@link RefreshDeviceChannelRequest} {@link RefreshDeviceChannelResponse} */
  RefreshDeviceChannel(data: RefreshDeviceChannelRequest, config?: AxiosRequestConfig): AxiosPromise<RefreshDeviceChannelResponse>;
  /** 设置通道禁止播流 {@link SetForbidPlayChannelsRequest} {@link SetForbidPlayChannelsResponse} */
  SetForbidPlayChannels(data: SetForbidPlayChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<SetForbidPlayChannelsResponse>;
  /** 批量修改设备组织 {@link UpdateDeviceOrganizationRequest} {@link UpdateDeviceOrganizationResponse} */
  UpdateDeviceOrganization(data: UpdateDeviceOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceOrganizationResponse>;
  /** 禁用-启用设备 {@link UpdateDeviceStatusRequest} {@link UpdateDeviceStatusResponse} */
  UpdateDeviceStatus(data: UpdateDeviceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceStatusResponse>;
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
}

export declare type Versions = ["2023-05-17"];

export default Iss;
