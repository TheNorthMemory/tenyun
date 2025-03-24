/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 异动事件走势列表 */
declare interface AbnormalEvents {
  /** 对应查询日期 */
  Date?: string;
  /** 列表信息 */
  Info?: AbnormalEventsInfo[];
}

/** 异动事件走势元素 */
declare interface AbnormalEventsInfo {
  /** 类型值 */
  Key?: number;
  /** 类型总数 */
  Count?: number;
}

/** 查询全部设备出参 */
declare interface AllDeviceInfo {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 设备类型；2：IPC */
  DeviceType: number;
  /** 设备状态；0：设备不在线；1：设备在线；2：设备隔离中；3：设备未注册 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: number;
  /** 设备扩展属性 */
  ExtraInformation?: string;
  /** 设备名称 */
  NickName?: string;
  /** 设备绑定分组路径 */
  GroupPath?: string;
  /** 设备编码 */
  DeviceCode?: string;
  /** 是否存在录像,，0:不存在；1：存在 */
  IsRecord?: number;
  /** 该设备是否可录制 */
  Recordable?: number;
  /** 设备接入协议 */
  Protocol?: string;
  /** 组Id */
  GroupId?: string;
  /** 组名 */
  GroupName?: string;
}

/** 国标通道详细信息 */
declare interface ChannelDetail {
  /** 通道名称 */
  ChannelName?: string;
  /** 通道唯一标识 */
  ChannelId?: string;
  /** 通道类型 0：未知；1：视频通道；2：音频通道；3：告警通道 */
  ChannelType?: number;
  /** 20位国标通道编码 */
  ChannelCode?: string;
  /** 通道扩展信息 */
  ExtraInformation?: string;
  /** 通道在线状态 */
  Status?: number;
  /** 通道是否存在录像标识 0：无录像；1：有录像 */
  IsRecord?: number;
  /** 通道所属设备唯一标识 */
  DeviceId?: string;
  /** 通道所属虚拟组织的ID */
  BusinessGroupId?: string;
}

/** GB28181通道 */
declare interface ChannelItem {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 通道唯一标识 */
  ChannelId: string;
}

/** DescribeDeviceStreams的出参复杂类型 */
declare interface DescribeDeviceStreamsData {
  /** rtsp地址 */
  RtspAddr?: string;
  /** rtmp地址 */
  RtmpAddr?: string;
  /** hls地址 */
  HlsAddr?: string;
  /** flv地址 */
  FlvAddr?: string;
}

/** DescribeRecordStreamData 复杂类型 */
declare interface DescribeRecordStreamData {
  /** Rtsp地址 */
  RtspAddr: string;
  /** Rtmp地址 */
  RtmpAddr: string;
  /** Hls地址 */
  HlsAddr: string;
  /** Flv地址 */
  FlvAddr: string;
  /** 流Id */
  StreamId: string;
}

/** 设备所在分组信息 */
declare interface DevGroupInfo {
  /** 设备唯一标识 */
  DeviceId?: string;
  /** 分组ID */
  GroupId?: string;
  /** 分组路径 */
  GroupPath?: string;
  /** 父分组ID */
  ParentId?: string;
  /** 设备错误，仅在用户没权限或者设备已删除时返回具体结果 */
  Error?: string;
}

/** 用于描述唯一一个设备 */
declare interface DeviceItem {
  /** 设备唯一标识 */
  DeviceId?: string;
  /** 通道唯一标识 */
  ChannelId?: string;
}

/** 查询设备统计返回值 */
declare interface DeviceMonitorValue {
  /** 统计值 */
  Value?: number;
  /** 统计时间 */
  Time?: number;
}

/** 设备事件列表 */
declare interface Events {
  /** 开始时间，秒级时间戳 */
  EventTime?: number;
  /** 事件类型 1:注册 2:心跳 4:录制异常 5:播放异常 6:流中断 */
  EventType?: number;
  /** 事件描述 */
  EventDesc?: string;
  /** 设备类型 */
  DeviceType?: number;
  /** 设备地址 */
  DeviceAddress?: string;
  /** 设备Id */
  DeviceId?: string;
  /** 通道Id */
  ChannelId?: string;
  /** 事件日志 */
  EventLog?: string;
  /** 设备备注名称 */
  DeviceName?: string;
}

/** 分组下设备信息 */
declare interface GroupDeviceItem {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 设备名称 */
  NickName?: string;
  /** 设备状态 */
  Status?: number;
  /** 扩展信息 */
  ExtraInformation?: string;
  /** 设备类型 */
  DeviceType?: number;
  /** rtsp地址 */
  RTSPUrl?: string;
  /** 设备编码 */
  DeviceCode?: string;
  /** 是否存在录像 */
  IsRecord?: number;
  /** 该设备是否可录制 */
  Recordable?: number;
  /** 设备接入协议 */
  Protocol?: string;
  /** 设备创建时间 */
  CreateTime?: number;
  /** 设备通道总数 */
  ChannelNum?: number;
  /** 设备视频通道总数 */
  VideoChannelNum?: number;
}

/** 分组信息详情 */
declare interface GroupInfo {
  /** 分组ID */
  GroupId?: string;
  /** 分组名称 */
  GroupName?: string;
  /** 分组类型 */
  GroupType?: string;
  /** 分组路径 */
  GroupPath?: string;
  /** 父分组ID */
  ParentId?: string;
  /** 分组描述 */
  GroupDescribe?: string;
  /** 扩展信息 */
  ExtraInformation?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 分组状态 */
  GroupStatus?: number;
  /** 设备不存在时产生的错误 */
  Error?: string;
}

/** 分组信息 */
declare interface GroupItem {
  /** 分组名称 */
  GroupName: string;
  /** 父分组ID */
  ParentId: string;
  /** 分组ID */
  GroupId: string;
  /** 分组路径 */
  GroupPath?: string;
  /** 分组描述 */
  GroupDescribe?: string;
  /** 分组绑定设备数 */
  DeviceNum?: number;
  /** 子分组数量 */
  SubGroupNum?: number;
  /** 分组附加信息 */
  ExtraInformation?: string;
  /** 分组类型 */
  GroupType?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 分组状态 */
  GroupStatus?: number;
}

/** 频道信息 */
declare interface LiveChannelInfo {
  /** 频道ID */
  LiveChannelId?: string;
  /** 频道名称 */
  LiveChannelName?: string;
  /** 频道类型 */
  LiveChannelType?: number;
  /** 通道直播状态：1: 未推流，2: 推流中 */
  LiveStatus?: number;
  /** 推流地址 */
  PushStreamAddress?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
}

/** 直播频道详情 */
declare interface LiveChannelItem {
  /** 频道ID */
  ChannelId?: string;
  /** 频道名称 */
  ChannelName?: string;
}

/** 直播录制详情item */
declare interface LiveRecordItem {
  /** 录制文件自增ID */
  IntID: number;
  /** 直播频道ID */
  LiveChannelId: string;
  /** 过期时间 */
  ExpectDeleteTime: number;
  /** 录制时长 */
  RecordTimeLen: number;
  /** 文件大小 */
  FileSize: number;
  /** 录制文件url */
  VideoUrl: string;
  /** 录制计划ID */
  RecordPlanId: string;
  /** 录制开始时间 */
  StartTime: number;
  /** 录制结束时间 */
  EndTime: number;
}

/** 直播录制计划详情 */
declare interface LiveRecordPlanItem {
  /** 计划ID */
  PlanId: string | null;
  /** 计划名称 */
  PlanName: string | null;
}

/** 消息转发配置信息 */
declare interface MessageForward {
  /** 配置ID */
  IntId?: number;
  /** 用户Uin */
  Uin?: string;
  /** json数组， 转发类型 1: 告警 2:GPS */
  MessageType?: string;
  /** 区域ID */
  RegionId?: string;
  /** 区域名称 */
  RegionName?: string;
  /** 实例ID */
  Instance?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** kafka topic id */
  TopicId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** topic 名称 */
  TopicName?: string;
}

/** 预置位结构出参 */
declare interface PresetItem {
  /** 预置位ID */
  PresetId?: number;
  /** 预置位名称 */
  PresetName?: string;
  /** 预置位状态 0:未设置预置位 1:已设置预置位 2:已设置预置位&看守位 */
  Status?: number;
  /** 预置位启用时的自动归位时间 */
  ResetTime?: number;
}

/** 录制计划详情 */
declare interface RecordPlanDetail {
  /** 计划ID */
  PlanId?: string;
  /** 计划名称 */
  Name?: string;
  /** 时间模板ID */
  TimeTemplateId?: string;
  /** 时间模板名称 */
  TimeTemplateName?: string;
  /** 绑定的通道列表 */
  Channels?: ChannelItem[];
  /** 存储周期（天） */
  RecordStorageTime?: number;
}

/** 录制计划详情 */
declare interface RecordPlanItem {
  /** 计划ID */
  PlanId?: string;
  /** 计划名称 */
  Name?: string;
  /** 时间模板ID */
  TimeTemplateId?: string;
  /** 时间模板名称 */
  TimeTemplateName?: string;
  /** 录制类型 */
  EventId?: number;
  /** 绑定的设备列表 */
  Devices?: DeviceItem[];
  /** 录像存储天数 */
  RecordStorageTime?: number;
}

/** 大盘统计-录像存储统计 出参RecordStatistic */
declare interface RecordStatistic {
  /** 时间戳 */
  Time?: number;
  /** 统计结果 */
  Value?: RecordStatisticValue;
}

/** 大盘统计-录像存储统计 出参Value */
declare interface RecordStatisticValue {
  /** 期望执行时间 秒 */
  ExpectTimeLen: number | null;
  /** 实际执行时间 秒 */
  RecordTimeLen: number | null;
  /** 存储大小 G */
  FileSize: number | null;
}

/** 普通设备的录像详情 */
declare interface RecordTaskItem {
  /** 录像任务ID */
  RecordTaskId?: string;
  /** 录制计划ID */
  RecordPlanId?: string;
  /** 本录制片段开始时间 */
  StartTime?: number;
  /** 本录制片段结束时间 */
  EndTime?: number;
  /** 录制模式 */
  EventId?: number;
  /** 本录制片段对应的录制文件URL */
  VideoUrl?: string;
  /** 本录制片段当前的录制状态 */
  RecordStatus?: number;
  /** 场景ID */
  SceneId?: number;
  /** 告警ID */
  WarnId?: number;
  /** 录制id，NVR下属设备有效 */
  RecordId?: string;
}

/** 场景列表元素 */
declare interface SceneItem {
  /** 场景ID */
  IntId?: number;
  /** 用户UIN */
  Uin?: string;
  /** 场景名称 */
  SceneName?: string;
  /** 触发规则 */
  SceneTrigger?: string;
  /** 录制时长 秒 */
  RecordDuration?: number;
  /** 存储时长 天 */
  StoreDuration?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
}

/** SIIP服务器相关配置项 */
declare interface ServerConfiguration {
  /** SIP服务器地址 */
  Host?: string;
  /** SIP服务器端口 */
  Port?: number;
  /** SIP服务器编码 */
  Serial?: string;
  /** SIP服务器域 */
  Realm?: string;
}

/** 某天的统计数额 */
declare interface StatisticItem {
  /** 日期。格式【YYYY-MM-DD】 */
  Date?: string | null;
  /** 统计数额 */
  Sum?: number | null;
}

/** 拉流地址，只有在推流情况下才有 */
declare interface StreamAddress {
  /** 流ID */
  StreamId?: string | null;
  /** rtsp流地址 */
  RtspAddr?: string | null;
  /** rtmp流地址 */
  RtmpAddr?: string | null;
  /** hls流地址 */
  HlsAddr?: string | null;
  /** flv流地址 */
  FlvAddr?: string | null;
}

/** 时间模板详情 */
declare interface TimeTemplateItem {
  /** 时间模板ID */
  TemplateId: string;
  /** 模板名称 */
  Name: string;
  /** 是否全时录制，即7*24小时录制 0-否 1-是 */
  IsAllWeek: number;
  /** 是否为自定义模板 0-否 1-是 */
  Type?: number;
  /** 时间片段详情 */
  TimeTemplateSpecs?: TimeTemplateSpec[];
}

/** 在操作时间模板时，用于描述各个时间片段 */
declare interface TimeTemplateSpec {
  /** 一周中的周几 */
  DayofWeek: number | null;
  /** 时间片段的开始时分。格式【HH:MM】 */
  BeginTime: string | null;
  /** 时间片段的结束时分。格式【HH:MM】 */
  EndTime: string | null;
}

/** 告警列表出参 */
declare interface WarningsData {
  /** 唯一ID */
  Id?: number;
  /** 设备ID */
  DeviceId?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 告警通道 */
  WarnChannel?: string;
  /** 告警级别 1: "一级警情", 2: "二级警情", 3: "三级警情", 4: "四级警情", */
  WarnLevel?: number;
  /** 告警级别名称 */
  WarnLevelName?: string;
  /** 告警方式 2 设备报警 5 视频报警 6 设备故障报警 */
  WarnMode?: number;
  /** 告警方式名称 */
  WarnModeName?: string;
  /** 告警类型 2: { Name: "设备报警", WarnType: map[int]string{ 1: "视频丢失报警", 2: "设备防拆报警", 3: "存储设备磁盘满报警", 4: "设备高温报警", 5: "设备低温报警", }, }, 5: { Name: "视频报警", WarnType: map[int]string{ 1: "人工视频报警", 2: "运动目标检测报警", 3: "遗留物检测报警", 4: "物体移除检测报警", 5: "绊线检测报警", 6: "入侵检测报警", 7: "逆行检测报警", 8: "徘徊检测报警", 9: "流量统计报警", 10: "密度检测报警", 11: "视频异常检测报警", 12: "快速移动报警", }, }, 6: { Name: "设备故障报警", WarnType: map[int]string{ 1: "存储设备磁盘故障报警", 2: "存储设备风扇故障报警", }, } */
  WarnType?: number;
  /** 是否删除 */
  Del?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

declare interface BindGroupDevicesRequest {
  /** 分组ID */
  GroupId: string;
  /** 设备唯一标识列表 */
  DeviceList: string[];
}

declare interface BindGroupDevicesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlChannelLocalRecordRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 通道唯一标识 */
  ChannelId: string;
  /** 流Id，流的唯一标识 */
  StreamId: string;
  /** 控制参数，转义的json字符串目前支持的command："Command": "{"Action":"PAUSE"}" 暂停"Command": "{"Action":"PLAY"}" 暂停恢复"Command": "{"Action":"PLAY","Offset":"15"}" 基于文件起始时间点的位置偏移，单位秒 */
  Command: string;
}

declare interface ControlChannelLocalRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlChannelPTZRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 通道唯一标识 */
  ChannelId: string;
  /** PTZ控制命令类型：stop - 停止当前PTZ信令left - 向左移动right - 向右移动up - 向上移动down - 向下移动leftUp - 左上移动leftDown - 左下移动rightUp - 右上移动rightDown - 右下移动zoomOut - 镜头缩小zoomIn - 镜头放大irisIn - 光圈缩小irisOut - 光圈放大focusIn - 焦距变近focusOut - 焦距变远 */
  Command: string;
}

declare interface ControlChannelPTZResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlDevicePTZRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** PTZ控制命令类型：stop - 停止当前PTZ信令left - 向左移动right - 向右移动up - 向上移动down - 向下移动leftUp - 左上移动leftDown - 左下移动rightUp - 右上移动rightDown - 右下移动zoomOut - 镜头缩小zoomIn - 镜头放大irisIn - 光圈缩小irisOut - 光圈放大focusIn - 焦距变近focusOut - 焦距变远 */
  Command: string;
  /** 通道唯一标识 */
  ChannelId?: string;
}

declare interface ControlDevicePTZResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlHomePositionRequest {
  /** 通道ID */
  ChannelId: string;
  /** 设备Id */
  DeviceId: string;
  /** 看守位使能 0-停用看守位 1-启用看守位 */
  Enable?: number;
  /** 预置位编码 范围1-8，启用看守位时必填 */
  PresetId?: number;
  /** 看守位自动归位时间， 启用看守位时必填 */
  ResetTime?: number;
}

declare interface ControlHomePositionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlPresetRequest {
  /** 通道ID */
  ChannelId: string;
  /** 控制命令：Set-设置当前位置为预置位Del-删除指定的预置位Call-调用指定的预置位 */
  Command: string;
  /** 预置位编码 范围1-8 */
  PresetId: number;
  /** 设备Id */
  DeviceId: string;
}

declare interface ControlPresetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlRecordStreamRequest {
  /** 设备Id，设备的唯一标识 */
  DeviceId: string;
  /** 流Id，流的唯一标识 */
  StreamId: string;
  /** |控制参数，CmdJson结构转义的json字符串。| Action | string |是|控制动作，play(用于暂停后恢复播放)、pause（暂停）、teardown(停止)、jump(拖动播放)| Offset | uint |否|拖动播放时的时间偏移量（相对于起始时间）,单位：秒目前支持的command："Command": "{"Action":"PAUSE"}" 暂停"Command": "{"Action":"PLAY"}" 暂停恢复"Command": "{"Action":"PLAY","Offset":"15"}" 位置偏移，可以替代jump操作 */
  Command: string;
  /** 通道唯一标识 */
  ChannelId?: string;
}

declare interface ControlRecordStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeviceGroupRequest {
  /** 分组名称 */
  GroupName: string;
  /** 父分组ID */
  ParentId: string;
  /** 分组描述 */
  GroupDescribe?: string;
}

declare interface CreateDeviceGroupResponse {
  /** 响应结果，“OK”为成功，其他为失败 */
  Status?: string;
  /** 分组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeviceRequest {
  /** 设备名称 */
  NickName: string;
  /** 设备密码 */
  PassWord: string;
  /** 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型) */
  DeviceType?: number;
  /** 设备需要绑定的分组ID，参数为空则默认绑定到根分组 */
  GroupId?: string;
}

declare interface CreateDeviceResponse {
  /** 设备编码 */
  DeviceCode?: string;
  /** 设备唯一标识 */
  DeviceId?: string;
  /** 设备虚拟组信息，仅在创建NVR时返回该值 */
  VirtualGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveChannelRequest {
  /** 直播频道名称 */
  LiveChannelName: string;
  /** 直播频道类型 1：固定直播；2：移动直播 */
  LiveChannelType: number;
}

declare interface CreateLiveChannelResponse {
  /** 直播频道ID */
  LiveChannelId?: string;
  /** 直播频道推流地址 */
  PushStreamAddress?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveRecordPlanRequest {
  /** 录制计划名 */
  PlanName: string;
  /** 计划类型 1：固定直播 2：移动直播 */
  PlanType: number;
  /** 时间模板ID,固定直播时为必填 */
  TemplateId?: string;
  /** 录制文件存储时长，单位天，默认30天 */
  RecordStorageTime?: number;
  /** 绑定的直播频道ID列表 */
  LiveChannelIds?: string[];
}

declare interface CreateLiveRecordPlanResponse {
  /** 录制计划名称 */
  PlanId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMessageForwardRequest {
  /** 区域ID */
  RegionId: string;
  /** 区域名称 */
  RegionName: string;
  /** 实例ID */
  Instance: string;
  /** 实例名称 */
  InstanceName: string;
  /** json数组， 转发类型 1: 告警 2:GPS */
  MessageType: string;
  /** kafka topic id */
  TopicId: string;
  /** kafka topic 名称 */
  TopicName: string;
}

declare interface CreateMessageForwardResponse {
  /** 配置ID */
  IntId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRecordPlanRequest {
  /** 计划名称 */
  Name: string;
  /** 时间模板ID */
  TimeTemplateId: string;
  /** 触发录制的事件类别 1:全部 */
  EventId: number;
  /** 该录制计划绑定的设备列表 */
  Devices?: DeviceItem[];
  /** 存储周期 */
  RecordStorageTime?: number;
}

declare interface CreateRecordPlanResponse {
  /** 录制计划ID */
  PlanId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRecordingPlanRequest {
  /** 计划名称 */
  Name: string;
  /** 时间模板ID */
  TimeTemplateId: string;
  /** 该录制计划绑定的通道列表 */
  Channels?: ChannelItem[];
  /** 存储周期(天)；默认存储30天 */
  RecordStorageTime?: number;
}

declare interface CreateRecordingPlanResponse {
  /** 录制计划ID */
  PlanId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSceneRequest {
  /** 场景名称 */
  SceneName: string;
  /** 场景触发规则 */
  SceneTrigger: string;
  /** 录制时长 (秒) */
  RecordDuration: number;
  /** 录像存储时长(天) */
  StoreDuration: number;
  /** 设备列表(不推荐使用) */
  Devices?: DeviceItem[];
  /** 通道列表 */
  Channels?: ChannelItem[];
}

declare interface CreateSceneResponse {
  /** 场景ID */
  IntId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTimeTemplateRequest {
  /** 时间模板名称 */
  Name: string;
  /** 是否为每周全时录制（即7*24h录制），0：非全时录制，1；全时录制，默认0 */
  IsAllWeek: number;
  /** 当IsAllWeek为0时必选，用于描述模板的各个时间片段 */
  TimeTemplateSpecs?: TimeTemplateSpec[];
}

declare interface CreateTimeTemplateResponse {
  /** 时间模板ID */
  TemplateId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteChannelRequest {
  /** 设备ID */
  DeviceId: string;
  /** 通道ID */
  ChannelId: string;
}

declare interface DeleteChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDeviceGroupRequest {
  /** 分组ID */
  GroupId: string;
}

declare interface DeleteDeviceGroupResponse {
  /** 响应结果 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDeviceRequest {
  /** 设备唯一标识 */
  DeviceId: string;
}

declare interface DeleteDeviceResponse {
  /** 操作结果 OK-成功； 其他-失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveChannelRequest {
  /** 直播频道ID */
  LiveChannelId: string;
}

declare interface DeleteLiveChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveRecordPlanRequest {
  /** 录制计划ID */
  PlanId: string;
}

declare interface DeleteLiveRecordPlanResponse {
  /** 删除状态描述 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveVideoListRequest {
  /** 视频ID 列表, 大小限制(100) */
  IntIDs: number[];
}

declare interface DeleteLiveVideoListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMessageForwardRequest {
  /** 配置ID */
  IntId: number;
}

declare interface DeleteMessageForwardResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordPlanRequest {
  /** 录制计划ID */
  PlanId: string;
}

declare interface DeleteRecordPlanResponse {
  /** 操作结果，OK：成功，其他：失败 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordingPlanRequest {
  /** 录制计划ID */
  PlanId: string;
}

declare interface DeleteRecordingPlanResponse {
  /** 操作结果，OK：成功，其他：失败 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSceneRequest {
  /** 场景ID */
  IntId: number;
}

declare interface DeleteSceneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTimeTemplateRequest {
  /** 时间模板ID */
  TemplateId: string;
}

declare interface DeleteTimeTemplateResponse {
  /** 操作结果，OK：成功，其他：失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVideoListRequest {
  /** 视频ID列表长度限制100内 */
  InitIDs: number[];
}

declare interface DeleteVideoListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWarningRequest {
  /** 告警ID */
  Id?: number;
  /** 告警索引 */
  Index?: string;
}

declare interface DeleteWarningResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAbnormalEventsRequest {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
}

declare interface DescribeAbnormalEventsResponse {
  /** 异动事件走势列表 */
  Data?: AbnormalEvents[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllDeviceListRequest {
  /** 偏移量，默认0 */
  Offset?: number;
  /** 限制，默认200 */
  Limit?: number;
  /** 设备名称，需要模糊匹配设备名称时为必填 */
  NickName?: string;
  /** DeviceId列表，需要精确查找设备时为必填 */
  DeviceIds?: string[];
  /** 设备类型过滤，设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型) */
  DeviceTypes?: number[];
}

declare interface DescribeAllDeviceListResponse {
  /** 设备总数 */
  TotalCount?: number;
  /** 设备详细信息列表 */
  Devices?: AllDeviceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBindSceneChannelsRequest {
  /** 条数限制最大不能超过1000 */
  Limit: number;
  /** 场景ID */
  SceneId?: number;
  /** 偏移值 */
  Offset?: number;
}

declare interface DescribeBindSceneChannelsResponse {
  /** 总数 */
  Total?: number;
  /** 通道列表 */
  List?: ChannelItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBindSceneDevicesRequest {
  /** 场景ID */
  SceneId?: number;
  /** 偏移值 */
  Offset?: number;
  /** 条数限制最大不能超过1000 */
  Limit?: number;
}

declare interface DescribeBindSceneDevicesResponse {
  /** 总数 */
  Total?: number;
  /** 设备列表 */
  List?: DeviceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelLiveStreamURLRequest {
  /** 设备唯一标识，必填参数 */
  DeviceId: string;
  /** 通道唯一标识（接口升级字段为必填），必填参数 */
  ChannelId: string;
}

declare interface DescribeChannelLiveStreamURLResponse {
  /** 设备实时流地址列表 */
  Data: DescribeDeviceStreamsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelLocalRecordURLRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 通道唯一标识 */
  ChannelId: string;
  /** 录像文件Id，通过获取本地录像返回 */
  RecordId: string;
  /** UNIX 时间戳，30天内，URL失效时间，如180s无人观看此流则URL提前失效 */
  ExpireTime: number;
  /** 录像文件推送的开始时间，需要在RecordId参数起始时间内，可以通过此参数控制回放流起始点 */
  StartTime?: number;
  /** 录像文件推送的结束时间，需要在RecordId参数起始时间内，可以通过此参数控制回放流起始点 */
  EndTime?: number;
}

declare interface DescribeChannelLocalRecordURLResponse {
  /** 结果 */
  Data: DescribeRecordStreamData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelStreamURLRequest {
  /** 设备唯一标识，必填参数 */
  DeviceId: string;
  /** 流地址失效时间，固定值填写0，其他参数无效，必填参数 */
  ExpireTime: number;
  /** 通道唯一标识（接口升级字段为必填），必填参数 */
  ChannelId?: string;
}

declare interface DescribeChannelStreamURLResponse {
  /** 设备实时流地址列表 */
  Data: DescribeDeviceStreamsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelsByLiveRecordPlanRequest {
  /** 录制计划ID */
  PlanId: string;
  /** 分页偏移量 */
  Offset?: number;
  /** 分页大小 */
  Limit?: number;
}

declare interface DescribeChannelsByLiveRecordPlanResponse {
  /** 总个数 */
  TotalCount?: number;
  /** 通道详情数组 */
  LiveChannels?: LiveChannelItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelsRequest {
  /** 设备Id */
  DeviceId: string;
  /** 限制，默认0 */
  Limit?: number;
  /** 偏移量，默认0 */
  Offset?: number;
  /** 通道类型 0: 未知类型 1: 视频通道 2: 音频通道 3: 告警通道 */
  ChannelTypes?: number[];
  /** 录制计划ID， 当为"null"值时未绑定录制计划 */
  PlanId?: string;
  /** 告警联动场景ID， 当为 -1 值时未绑定场景 */
  SceneId?: number;
}

declare interface DescribeChannelsResponse {
  /** 通道总数 */
  TotalCount?: number;
  /** 通道详情列表 */
  Channels?: ChannelDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCurrentDeviceDataRequest {
}

declare interface DescribeCurrentDeviceDataResponse {
  /** 通道数 */
  Channels: number;
  /** 设备数 */
  Devices: number;
  /** 在线通道数 */
  OnlineChannels: number;
  /** 在线设备数 */
  OnlineDevices: number;
  /** 正在录制通道数 */
  RecordingChannels: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceEventRequest {
  /** 开始时间，秒级时间戳 */
  StartTime: number;
  /** 结束时间，秒级时间戳 */
  EndTime: number;
  /** 设备Id */
  DeviceId?: string;
  /** 默认为全部 事件类型 1:注册 2:心跳 4:录制异常 5:播放异常 6:流中断 */
  EventTypes?: number[];
  /** 偏移值 */
  Offset?: number;
  /** limit限制值 */
  Limit?: number;
}

declare interface DescribeDeviceEventResponse {
  /** 总数 */
  TotalCount?: number;
  /** 事件列表 */
  Events?: Events[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceGroupRequest {
  /** 设备唯一标识列表 */
  DeviceIds?: string[];
}

declare interface DescribeDeviceGroupResponse {
  /** 设备所在分组信息 */
  DevGroups?: DevGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceListRequest {
  /** 偏移量，默认0 */
  Offset?: number;
  /** 限制，默认200 */
  Limit?: number;
  /** 设备名前缀 */
  NickName?: string;
  /** 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型) */
  DeviceTypes?: number[];
}

declare interface DescribeDeviceListResponse {
  /** 设备总数 */
  TotalCount?: number;
  /** 设备详细信息列表 */
  Devices?: AllDeviceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceMonitorDataRequest {
  /** 开始时间戳 */
  StartTime: number;
  /** 结束时间戳 */
  EndTime: number;
  /** 类型 支持 OnlineChannels/OnlineDevices/RecordingChannels */
  Type: string;
  /** 时间粒度 目前只支持 1h */
  TimesSpec: string;
}

declare interface DescribeDeviceMonitorDataResponse {
  /** 查询设备统计monitor信息列表 */
  Data: DeviceMonitorValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicePassWordRequest {
  /** 设备唯一标识 */
  DeviceId: string;
}

declare interface DescribeDevicePassWordResponse {
  /** 设备密码 */
  PassWord?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceRequest {
  /** 设备ID */
  DeviceId: string;
}

declare interface DescribeDeviceResponse {
  /** 设备详情信息 */
  Device: AllDeviceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceStreamsRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 流地址失效时间 */
  ExpireTime: number;
  /** 通道唯一标识（接口升级字段为必填） */
  ChannelId?: string;
}

declare interface DescribeDeviceStreamsResponse {
  /** 设备实时流地址列表 */
  Data?: DescribeDeviceStreamsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupByIdRequest {
  /** 分组ID */
  GroupId: string;
}

declare interface DescribeGroupByIdResponse {
  /** 分组信息详情 */
  Group?: GroupItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupByPathRequest {
  /** 分组路径，格式为/aaa(/bbb/ccc) */
  GroupPath: string;
}

declare interface DescribeGroupByPathResponse {
  /** 分组信息详情 */
  Group?: GroupItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupDevicesRequest {
  /** 分组ID */
  GroupId: string;
  /** 偏移量，默认0 */
  Offset?: number;
  /** 限制值，默认200 */
  Limit?: number;
  /** 设备名称，根据设备名称模糊匹配时必填 */
  NickName?: string;
  /** 过滤不可录制设备 */
  Recordable?: number;
  /** 当Group是普通组的时候，支持根据DeviceTypes筛选类型， 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型) */
  DeviceTypes?: number[];
}

declare interface DescribeGroupDevicesResponse {
  /** 分组绑定的设备数 */
  TotalCount?: number;
  /** 设备详情列表 */
  DeviceList?: GroupDeviceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupsRequest {
  /** 分组ID列表 */
  GroupIds?: string[];
}

declare interface DescribeGroupsResponse {
  /** 分组详细信息列表 */
  Groups?: GroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIPCChannelsRequest {
  /** 偏移量，默认0 */
  Offset?: number;
  /** 限制，默认0 */
  Limit?: number;
  /** 设备Id */
  DeviceId?: string;
  /** 通道类型 0: 未知类型 1: 视频通道 2: 音频通道 3: 告警通道 */
  ChannelTypes?: number[];
}

declare interface DescribeIPCChannelsResponse {
  /** 通道总数 */
  TotalCount?: number;
  /** 通道详情列表 */
  DeviceList?: GroupDeviceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveChannelListRequest {
  /** 偏移量 */
  Offset: number;
  /** 最大数 */
  Limit: number;
  /** 直播频道类型，1：固定直播；2：移动直播 */
  LiveChannelType?: number;
  /** 直播录制计划ID, null: 直播录制计划为空 */
  RecordPlanId?: string;
  /** 频道名称 (支持模糊搜索) */
  LiveChannelName?: string;
}

declare interface DescribeLiveChannelListResponse {
  /** 频道总数 */
  Total?: number;
  /** 频道信息数组 */
  LiveChannels?: LiveChannelInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveChannelRequest {
  /** 频道ID */
  LiveChannelId: string;
}

declare interface DescribeLiveChannelResponse {
  /** 频道ID */
  LiveChannelId?: string;
  /** 频道名称 */
  LiveChannelName?: string;
  /** 直播频道类型 1：固定直播；2：移动直播 */
  LiveChannelType?: number;
  /** 通道直播状态：1: 未推流，2: 推流中 */
  LiveStatus?: number;
  /** 推流地址 */
  PushStreamAddress?: string;
  /** 创建时间 */
  CreateTime?: string[];
  /** 修改时间 */
  UpdateTime?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordPlanByIdRequest {
  /** 录制计划ID */
  PlanId: string;
}

declare interface DescribeLiveRecordPlanByIdResponse {
  /** 计划名称 */
  PlanName: string;
  /** 模板ID */
  TemplateId: string;
  /** 模板名称 */
  TemplateName: string;
  /** 存储时间 */
  RecordStorageTime: number;
  /** 计划类型 */
  PlanType: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordPlanIdsRequest {
  /** 时间模板ID */
  TemplateId?: string;
  /** 分页偏移量 */
  Offset?: number;
  /** 分页大小 */
  Limit?: number;
}

declare interface DescribeLiveRecordPlanIdsResponse {
  /** 总个数 */
  TotalCount: number;
  /** 计划数组 */
  Plans: LiveRecordPlanItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamRequest {
  /** 频道ID */
  LiveChannelId: string;
  /** 过期时间 秒级unix时间戳 */
  ExpireTime: number;
}

declare interface DescribeLiveStreamResponse {
  /** 拉流地址，只有在推流情况下才有 */
  Data: StreamAddress | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveVideoListRequest {
  /** 偏移量 */
  Offset: number;
  /** 分页的每页数量 */
  Limit: number;
  /** 直播频道ID */
  LiveChannelId: string;
  /** 开始录制开始时间 */
  StartRecordTime?: number;
  /** 开始录制结束时间 */
  EndRecordTime?: number;
  /** 过期开始时间 */
  StartExpireTime?: number;
  /** 过期结束时间 */
  EndExpireTime?: number;
  /** 文件大小范围 Byte */
  StartFileSize?: number;
  /** 文件大小范围 Byte */
  EndFileSize?: number;
  /** 录制状态，5: 录制回写完 */
  IsRecording?: number;
}

declare interface DescribeLiveVideoListResponse {
  /** 总的条数 */
  Total?: number;
  /** 录制任务详情数组 */
  RecordList?: LiveRecordItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageForwardRequest {
  /** 配置ID */
  IntId: number;
}

declare interface DescribeMessageForwardResponse {
  /** 区域ID */
  RegionId?: string;
  /** 区域名称 */
  RegionName?: string;
  /** 实例ID */
  Instance?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 配置ID */
  IntId?: number;
  /** json数组， 转发类型 1: 告警 2:GPS */
  MessageType?: string;
  /** kafka topic id */
  TopicId?: string;
  /** 配置创建时间 */
  CreateTime?: string;
  /** 用户Uin信息 */
  Uin?: string;
  /** kafka topic 名称 */
  TopicName?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageForwardsRequest {
  /** 数量限制 */
  Limit: number;
  /** 偏移 */
  Offset?: number;
}

declare interface DescribeMessageForwardsResponse {
  /** 配置总数 */
  Total?: number;
  /** 配置列表 */
  List?: MessageForward[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonitorDataByDateRequest {
  /** 开始时间戳 */
  StartTime: number;
  /** 结束时间戳 最多显示30天数据 */
  EndTime: number;
}

declare interface DescribeMonitorDataByDateResponse {
  /** 统计数据列表 */
  Data?: RecordStatistic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePresetListRequest {
  /** 视频通道唯一标识 */
  ChannelId: string;
  /** 设备唯一标识 */
  DeviceId: string;
}

declare interface DescribePresetListResponse {
  /** 预置列表 */
  Data?: PresetItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordDatesByChannelRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 通道唯一标识 */
  ChannelId: string;
  /** 1: 云端录制 2: 本地录制 */
  Type: number;
  /** 限制量，默认200 */
  Limit?: number;
  /** 偏移量，默认0 */
  Offset?: number;
}

declare interface DescribeRecordDatesByChannelResponse {
  /** 含有录像文件的日期列表 */
  Dates?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordDatesByLiveRequest {
  /** 直播频道ID */
  LiveChannelId: string;
  /** 分页值，本地录制时参数无效 */
  Offset: number;
  /** 限制值，本地录制时参数无效 */
  Limit: number;
}

declare interface DescribeRecordDatesByLiveResponse {
  /** 录制日期数组 */
  Dates?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordStreamRequest {
  /** 设备Id */
  DeviceId: string;
  /** 流失效时间，UNIX时间戳，30天内 */
  ExpireTime: number;
  /** 录像文件ID */
  RecordId?: string;
  /** 录像流开始时间，当录像文件ID为空时有效，UNIX时间戳 */
  StartTime?: number;
  /** 录像流结束时间，当录像文件iD为空时有效，UNIX时间戳 */
  EndTime?: number;
  /** 通道唯一标识（此接口升级为必填字段） */
  ChannelId?: string;
}

declare interface DescribeRecordStreamResponse {
  /** 结果 */
  Data: DescribeRecordStreamData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordingPlanByIdRequest {
  /** 录制计划ID */
  PlanId: string;
}

declare interface DescribeRecordingPlanByIdResponse {
  /** 录制计划详情 */
  Plan?: RecordPlanDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordingPlansRequest {
}

declare interface DescribeRecordingPlansResponse {
  /** 录制计划详情·列表 */
  Plans?: RecordPlanDetail[];
  /** 录制计划总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSIPServerRequest {
}

declare interface DescribeSIPServerResponse {
  /** SIP服务器相关配置项 */
  Data: ServerConfiguration;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSceneRequest {
  /** 场景ID */
  IntId: number;
}

declare interface DescribeSceneResponse {
  /** 场景ID */
  IntId?: number;
  /** 录制时长(秒) */
  RecordDuration?: number;
  /** 场景名称 */
  SceneName?: string;
  /** 场景触发规则 */
  SceneTrigger?: string;
  /** 存储时长 (天) */
  StoreDuration?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 用户Uin */
  Uin?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScenesRequest {
  /** 条数限制 */
  Limit: number;
  /** 偏移 */
  Offset?: number;
}

declare interface DescribeScenesResponse {
  /** 场景总数 */
  Total?: number;
  /** 场景列表 */
  List?: SceneItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStatisticDetailsRequest {
  /** 开始日期，格式【YYYY-MM-DD】 */
  StartDate: string;
  /** 结束日期，格式【YYYY-MM-DD】 */
  EndDate: string;
  /** 统计项。取值范围：1.录制设备数：RecordingDevice2.非录制设备数：NonRecordingDevice3.观看流量总数：WatchFlux4.已用存储容量总数：StorageUsage5. X-P2P分享流量: P2PFluxTotal6. X-P2P峰值带宽: P2PPeakValue7. RTMP推流路数(直播推流): LivePushTotal */
  StatisticField: string;
}

declare interface DescribeStatisticDetailsResponse {
  /** 统计详情列表 */
  Data: StatisticItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStatisticSummaryRequest {
  /** 指定日期。格式【YYYY-MM-DD】 */
  Date: string;
}

declare interface DescribeStatisticSummaryResponse {
  /** 录制设备总数 */
  RecordingDevice?: number;
  /** 非录制设备总数 */
  NonRecordingDevice?: number;
  /** 观看流量总数。为直播观看流量与点播观看流量之和。单位：GB */
  WatchFlux?: number;
  /** 累计有效存储容量总数。单位：GB */
  StorageUsage?: number;
  /** X-P2P分享流量。单位 Byte */
  P2PFluxTotal?: number;
  /** X-P2P峰值带宽。 单位bps */
  P2PPeakValue?: number;
  /** RTMP推流路数 ( 直播推流) */
  LivePushTotal?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubGroupsRequest {
  /** 分组ID */
  GroupId?: string;
  /** 分组名称，根据名称模糊匹配子分组时为必填 */
  GroupName?: string;
  /** 偏移量，默认0 */
  Offset?: number;
  /** 限制数，默认200 */
  Limit?: number;
  /** 是否统计子分组下的设备数，0：统计，1：不统计 */
  OnlyGroup?: number;
}

declare interface DescribeSubGroupsResponse {
  /** 子分组详情列表 */
  GroupList?: GroupItem[];
  /** 子分组总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubscriptionStatusRequest {
  /** 设备ID */
  DeviceId: string;
}

declare interface DescribeSubscriptionStatusResponse {
  /** 设备GB28181报警订阅状态 1：未开启订阅；2：已开启订阅 */
  AlarmStatus: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoListByChannelRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 通道唯一标识 */
  ChannelId: string;
  /** 1: 云端录制 2: 本地录制 */
  Type: number;
  /** 指定某天。取值【YYYY-MM-DD】为空时默认查询最近一天的记录 */
  Date?: string;
  /** 限制量，默认2000 */
  Limit?: number;
  /** 偏移量，默认0 */
  Offset?: number;
}

declare interface DescribeVideoListByChannelResponse {
  /** 录像详情列表 */
  VideoList?: RecordTaskItem[];
  /** 录像总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoListRequest {
  /** 偏移 */
  Offset: number;
  /** 限制 */
  Limit: number;
  /** 开始时间戳，秒级 */
  StartTime?: number;
  /** 结束时间戳，秒级 */
  EndTime?: number;
  /** 设备Id */
  DeviceId?: string;
  /** 开始录制范围 开始 */
  StartRecordTime?: number;
  /** 开始录制范围 结束 */
  EndRecordTime?: number;
  /** 过期时间范围 开始 */
  StartExpireTime?: number;
  /** 过期时间范围 结束 */
  EndExpireTime?: number;
  /** 文件大小范围 开始 单位byte */
  StartFileSize?: number;
  /** 文件大小范围 结束 单位byte */
  EndFileSize?: number;
  /** 录制状态 99: 录制方已经回写状态 1: 开始录制了，等待回写 2: 已经到了时间模板的停止时间，在等待录制方回写 */
  IsRecording?: number;
  /** 通道ID默认必传 */
  ChannelId?: string;
  /** 录制计划ID */
  PlanId?: string;
  /** 场景ID */
  SceneId?: number;
  /** 告警ID */
  WarnId?: number;
  /** 录制类型 1: 联动计划录制 2: 告警录制 */
  RecordType?: number[];
}

declare interface DescribeVideoListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 已废弃 */
  VideoList?: RecordTaskItem;
  /** 录像详情列表 */
  RecordList?: RecordTaskItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWarnModRequest {
}

declare interface DescribeWarnModResponse {
  /** 告警类型 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWarningsRequest {
  /** 1:创建时间倒序 2：创建时间升序 3：level倒序 4：leve升序 */
  OrderType: number;
  /** 可选设备id */
  DeviceId?: string;
  /** 如果不传则查询所有，取值参见配置 */
  WarnLevelArray?: number[];
  /** 如果不传则查询所有，取值参见配置 */
  WarnModeArray?: number[];
  /** 不传认为是0 */
  Offset?: number;
  /** 不传认为是20 */
  Limit?: number;
  /** 形似：2021-05-21 00:00:00 .取值在当前日前30天内，不传默认是当前日前30天日期 */
  DateBegin?: string;
  /** 形似：2021-05-21 23:59:59 .取值在当前日前30天内，不传默认是当前日前30天日期 */
  DateEnd?: string;
}

declare interface DescribeWarningsResponse {
  /** 总数 */
  Total?: number;
  /** 告警列表 */
  Data?: WarningsData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeXP2PDataRequest {
  /** P2P应用ID */
  P2PAppId: string;
  /** 查询开始时间，时间戳秒 */
  From: number;
  /** 查询结束时间，时间戳秒 */
  To: number;
  /** P2P通路ID */
  P2PChannelId?: string;
}

declare interface DescribeXP2PDataResponse {
  /** [log_time,cdn_bytes , p2p_bytes, online_people, stuck_times, stuck_people,request,request_success,request_fail,play_fail][时间戳,cdn流量(字节) , p2p流量(字节), 在线人数, 卡播次数, 卡播人数,起播请求次数,起播成功次数,起播失败次数,播放失败次数, pcdn cdn流量（字节), pcdn路由流量(字节), 上传流量(字节)][1481016480, 46118502414, 75144943171, 61691, 3853, 0,0,0,0,0, 0, 0, 0] */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRecordDatesByDevRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 限制量，默认200 */
  Limit: number;
  /** 偏移量，默认0 */
  Offset: number;
  /** 通道唯一标识，对于NVR设备，多通道IPC设备，设备编码与通道编码不一致的IPC设备，此字段为必填 */
  ChannelId?: string;
  /** 1: 云端录制 2: 本地录制 */
  Type?: number;
}

declare interface GetRecordDatesByDevResponse {
  /** 含有录像文件的日期列表 */
  Dates?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRecordPlanByDevRequest {
  /** 设备唯一标识 */
  DeviceId: string;
}

declare interface GetRecordPlanByDevResponse {
  /** 录制计划详情 */
  Plan?: RecordPlanItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRecordPlanByIdRequest {
  /** 录制计划ID */
  PlanId: string;
}

declare interface GetRecordPlanByIdResponse {
  /** 录制计划详情 */
  Plan?: RecordPlanItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRecordPlansRequest {
}

declare interface GetRecordPlansResponse {
  /** 录制计划详情·列表 */
  Plans?: RecordPlanItem[];
  /** 录制计划总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTimeTemplateByIdRequest {
  /** 时间模板ID */
  TemplateId: string;
}

declare interface GetTimeTemplateByIdResponse {
  /** 时间模板详情 */
  Template?: TimeTemplateItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTimeTemplatesRequest {
}

declare interface GetTimeTemplatesResponse {
  /** 时间模板列表 */
  Templates?: TimeTemplateItem[];
  /** 时间模板总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetVideoListByConRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 偏移量 */
  Offset: number;
  /** 限制量 */
  Limit: number;
  /** 通道唯一标识，对于NVR设备，多通道IPC设备，设备编码与通道编码不一致的IPC设备，此字段为必填 */
  ChannelId?: string;
  /** 0：查询指定日期的录像；1：查询最近一天的录像；默认0 */
  LatestDay?: number;
  /** 指定某天。取值【YYYY-MM-DD】为空时默认查询最近一天的记录 */
  Date?: string;
  /** 1: 云端录制 2: 本地录制 */
  Type?: number;
}

declare interface GetVideoListByConResponse {
  /** 录像详情列表 */
  VideoList?: RecordTaskItem[];
  /** 录像总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBindPlanLiveChannelRequest {
  /** 直播录制计划ID */
  PlanId: string;
  /** 1: 绑定 2: 解绑 */
  Type: number;
  /** 直播频道ID列表 */
  LiveChannelIds: string[];
}

declare interface ModifyBindPlanLiveChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBindRecordingPlanRequest {
  /** 操作类型： 1-绑定设备 ；2-解绑设备 */
  Type: number;
  /** 录制计划ID */
  PlanId: string;
  /** 录制通道列表 */
  Channels?: ChannelItem[];
}

declare interface ModifyBindRecordingPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBindSceneChannelsRequest {
  /** 场景ID */
  SceneId: number;
  /** 1: 绑定 2: 解绑 */
  Type: number;
  /** 通道列表 */
  Channels: ChannelItem[];
}

declare interface ModifyBindSceneChannelsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBindSceneDeviceRequest {
  /** 场景ID */
  SceneId: number;
  /** 1: 绑定 2: 解绑 */
  Type: number;
  /** 设备列表 */
  Devices: DeviceItem[];
}

declare interface ModifyBindSceneDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDeviceDataRequest {
  /** 设备唯一标识 */
  DeviceId: string;
  /** 设备名称 */
  NickName: string;
}

declare interface ModifyDeviceDataResponse {
  /** 操作结果,“OK”表示成功，其他表示失败。 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveChannelRequest {
  /** 直播频道ID */
  LiveChannelId: string;
  /** 直播频道名 */
  LiveChannelName: string;
}

declare interface ModifyLiveChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveRecordPlanRequest {
  /** 录制计划ID */
  PlanId: string;
  /** 录制计划名 */
  PlanName: string;
  /** 时间模板ID，固定直播时为必填 */
  TemplateId?: string;
}

declare interface ModifyLiveRecordPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveVideoRequest {
  /** 视频ID 列表, 大小限制(100) */
  IntIDs: number[];
  /** 过期时间 秒 (-1: 为永不过期) */
  ExpireTime: number;
}

declare interface ModifyLiveVideoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMessageForwardRequest {
  /** 配置ID */
  IntId: number;
  /** json数组， 转发类型 1: 告警 2:GPS */
  MessageType: string;
}

declare interface ModifyMessageForwardResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPresetRequest {
  /** 通道ID */
  ChannelId: string;
  /** 预置位编码 范围1-8 */
  PresetId: number;
  /** 预制位名称 */
  PresetName: string;
  /** 设备Id */
  DeviceId: string;
}

declare interface ModifyPresetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordingPlanRequest {
  /** 录制计划ID */
  PlanId: string;
  /** 计划名称 */
  Name?: string;
  /** 时间模板ID */
  TimeTemplateId?: string;
}

declare interface ModifyRecordingPlanResponse {
  /** 操作结果 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySceneRequest {
  /** 场景ID */
  IntId: number;
  /** 场景名称 */
  SceneName?: string;
  /** 触发条件 */
  SceneTrigger?: string;
  /** 录制时长(秒) */
  RecordDuration?: number;
}

declare interface ModifySceneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySubscriptionStatusRequest {
  /** 设备ID */
  DeviceId: string;
  /** 订阅状态 1：关闭订阅 2：开启订阅 */
  Status: number;
  /** 订阅类型 Alarm:告警订阅 Catalog:目录订阅 MobilePosition:移动位置订阅 */
  SubscriptionItem?: string;
}

declare interface ModifySubscriptionStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVideoInfoRequest {
  /** 视频ID列表长度限制100内 */
  InitIDs: number[];
  /** 过期时间 时间戳 -1: 永不过期 0: 无效值 */
  ExpireTime: number;
}

declare interface ModifyVideoInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetWarningRequest {
  /** 告警ID */
  Id?: number;
  /** Es中告警ID */
  Index?: string;
}

declare interface ResetWarningResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDeviceGroupRequest {
  /** 分组名称 */
  GroupName: string;
  /** 分组ID */
  GroupId: string;
  /** 分组描述 */
  GroupDescribe?: string;
  /** 新父分组ID，用于修改分组路径 */
  NewParentId?: string;
}

declare interface UpdateDeviceGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDevicePassWordRequest {
  /** 设备密码 */
  PassWord: string;
  /** 设备唯一标识 */
  DeviceId: string;
}

declare interface UpdateDevicePassWordResponse {
  /** 操作结果，“OK”表示成功，其他表示失败。 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRecordPlanRequest {
  /** 录制计划ID */
  PlanId: string;
  /** 计划名称 */
  Name?: string;
  /** 时间模板ID */
  TimeTemplateId?: string;
  /** 触发录制的事件 1：全部 */
  EventId?: number;
  /** 录制设备列表 */
  Devices?: DeviceItem[];
  /** 是否更新绑定此录制计划的设备列表0 - 不更新1 - 更新，如果Devices参数为空则清空设备列表，Devices不为空则全量更新设备列表 */
  IsModifyDevices?: number;
}

declare interface UpdateRecordPlanResponse {
  /** 操作结果 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTimeTemplateRequest {
  /** 时间模板ID */
  TemplateId: string;
  /** 时间模板名称 */
  Name?: string;
  /** 是否全时录制，即7*24小时录制。0：非全时录制；1：全时录制。默认1 */
  IsAllWeek?: number;
  /** 录制时间片段 */
  TimeTemplateSpecs?: TimeTemplateSpec[];
}

declare interface UpdateTimeTemplateResponse {
  /** 操作结果，“OK”表示成功，其他表示失败。 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Iotvideoindustry 物联网智能视频服务（行业版）} */
declare interface Iotvideoindustry {
  (): Versions;
  /** 绑定设备到分组 {@link BindGroupDevicesRequest} {@link BindGroupDevicesResponse} */
  BindGroupDevices(data: BindGroupDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<BindGroupDevicesResponse>;
  /** 控制通道本地回放流 {@link ControlChannelLocalRecordRequest} {@link ControlChannelLocalRecordResponse} */
  ControlChannelLocalRecord(data: ControlChannelLocalRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ControlChannelLocalRecordResponse>;
  /** 远程PTZ控制设备通道 {@link ControlChannelPTZRequest} {@link ControlChannelPTZResponse} */
  ControlChannelPTZ(data: ControlChannelPTZRequest, config?: AxiosRequestConfig): AxiosPromise<ControlChannelPTZResponse>;
  /** 远程PTZ控制设备通道（旧） {@link ControlDevicePTZRequest} {@link ControlDevicePTZResponse} */
  ControlDevicePTZ(data: ControlDevicePTZRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDevicePTZResponse>;
  /** 看守位控制 {@link ControlHomePositionRequest} {@link ControlHomePositionResponse} */
  ControlHomePosition(data: ControlHomePositionRequest, config?: AxiosRequestConfig): AxiosPromise<ControlHomePositionResponse>;
  /** 预置位控制 {@link ControlPresetRequest} {@link ControlPresetResponse} */
  ControlPreset(data: ControlPresetRequest, config?: AxiosRequestConfig): AxiosPromise<ControlPresetResponse>;
  /** 控制通道本地回放流（旧） {@link ControlRecordStreamRequest} {@link ControlRecordStreamResponse} */
  ControlRecordStream(data: ControlRecordStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ControlRecordStreamResponse>;
  /** 创建设备 {@link CreateDeviceRequest} {@link CreateDeviceResponse} */
  CreateDevice(data: CreateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceResponse>;
  /** 创建分组 {@link CreateDeviceGroupRequest} {@link CreateDeviceGroupResponse} */
  CreateDeviceGroup(data: CreateDeviceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceGroupResponse>;
  /** 创建直播频道 {@link CreateLiveChannelRequest} {@link CreateLiveChannelResponse} */
  CreateLiveChannel(data: CreateLiveChannelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveChannelResponse>;
  /** 创建直播录制计划 {@link CreateLiveRecordPlanRequest} {@link CreateLiveRecordPlanResponse} */
  CreateLiveRecordPlan(data: CreateLiveRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveRecordPlanResponse>;
  /** 创建消息转发配置 {@link CreateMessageForwardRequest} {@link CreateMessageForwardResponse} */
  CreateMessageForward(data: CreateMessageForwardRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMessageForwardResponse>;
  /** 创建录制计划（旧） {@link CreateRecordPlanRequest} {@link CreateRecordPlanResponse} */
  CreateRecordPlan(data: CreateRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordPlanResponse>;
  /** 创建录制计划 {@link CreateRecordingPlanRequest} {@link CreateRecordingPlanResponse} */
  CreateRecordingPlan(data: CreateRecordingPlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordingPlanResponse>;
  /** 创建场景 {@link CreateSceneRequest} {@link CreateSceneResponse} */
  CreateScene(data: CreateSceneRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSceneResponse>;
  /** 创建时间模板 {@link CreateTimeTemplateRequest} {@link CreateTimeTemplateResponse} */
  CreateTimeTemplate(data: CreateTimeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTimeTemplateResponse>;
  /** 删除指定设备下通道 {@link DeleteChannelRequest} {@link DeleteChannelResponse} */
  DeleteChannel(data: DeleteChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteChannelResponse>;
  /** 删除设备 {@link DeleteDeviceRequest} {@link DeleteDeviceResponse} */
  DeleteDevice(data: DeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceResponse>;
  /** 删除分组 {@link DeleteDeviceGroupRequest} {@link DeleteDeviceGroupResponse} */
  DeleteDeviceGroup(data: DeleteDeviceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceGroupResponse>;
  /** 删除直播接口 {@link DeleteLiveChannelRequest} {@link DeleteLiveChannelResponse} */
  DeleteLiveChannel(data: DeleteLiveChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveChannelResponse>;
  /** 删除直播录制计划 {@link DeleteLiveRecordPlanRequest} {@link DeleteLiveRecordPlanResponse} */
  DeleteLiveRecordPlan(data: DeleteLiveRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveRecordPlanResponse>;
  /** 直播录像删除 {@link DeleteLiveVideoListRequest} {@link DeleteLiveVideoListResponse} */
  DeleteLiveVideoList(data: DeleteLiveVideoListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveVideoListResponse>;
  /** 删除消息转发配置 {@link DeleteMessageForwardRequest} {@link DeleteMessageForwardResponse} */
  DeleteMessageForward(data: DeleteMessageForwardRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMessageForwardResponse>;
  /** 删除录制计划（旧） {@link DeleteRecordPlanRequest} {@link DeleteRecordPlanResponse} */
  DeleteRecordPlan(data: DeleteRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordPlanResponse>;
  /** 删除录制计划 {@link DeleteRecordingPlanRequest} {@link DeleteRecordingPlanResponse} */
  DeleteRecordingPlan(data: DeleteRecordingPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordingPlanResponse>;
  /** 删除场景 {@link DeleteSceneRequest} {@link DeleteSceneResponse} */
  DeleteScene(data: DeleteSceneRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSceneResponse>;
  /** 删除时间模板 {@link DeleteTimeTemplateRequest} {@link DeleteTimeTemplateResponse} */
  DeleteTimeTemplate(data: DeleteTimeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTimeTemplateResponse>;
  /** 删除录像存储列表 {@link DeleteVideoListRequest} {@link DeleteVideoListResponse} */
  DeleteVideoList(data: DeleteVideoListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVideoListResponse>;
  /** 设备告警-删除告警 {@link DeleteWarningRequest} {@link DeleteWarningResponse} */
  DeleteWarning(data?: DeleteWarningRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWarningResponse>;
  /** 获取异常事件统计 {@link DescribeAbnormalEventsRequest} {@link DescribeAbnormalEventsResponse} */
  DescribeAbnormalEvents(data: DescribeAbnormalEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalEventsResponse>;
  /** 获取设备列表（旧） {@link DescribeAllDeviceListRequest} {@link DescribeAllDeviceListResponse} */
  DescribeAllDeviceList(data?: DescribeAllDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllDeviceListResponse>;
  /** 获取场景绑定通道列表 {@link DescribeBindSceneChannelsRequest} {@link DescribeBindSceneChannelsResponse} */
  DescribeBindSceneChannels(data: DescribeBindSceneChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindSceneChannelsResponse>;
  /** 获取场景绑定设备列表(旧) {@link DescribeBindSceneDevicesRequest} {@link DescribeBindSceneDevicesResponse} */
  DescribeBindSceneDevices(data?: DescribeBindSceneDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindSceneDevicesResponse>;
  /** 获取设备通道实时流地址 {@link DescribeChannelLiveStreamURLRequest} {@link DescribeChannelLiveStreamURLResponse} */
  DescribeChannelLiveStreamURL(data: DescribeChannelLiveStreamURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelLiveStreamURLResponse>;
  /** 获取通道本地回放流地址 {@link DescribeChannelLocalRecordURLRequest} {@link DescribeChannelLocalRecordURLResponse} */
  DescribeChannelLocalRecordURL(data: DescribeChannelLocalRecordURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelLocalRecordURLResponse>;
  /** 获取设备通道实时流地址（旧） {@link DescribeChannelStreamURLRequest} {@link DescribeChannelStreamURLResponse} */
  DescribeChannelStreamURL(data: DescribeChannelStreamURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelStreamURLResponse>;
  /** 获取设备下属通道列表 {@link DescribeChannelsRequest} {@link DescribeChannelsResponse} */
  DescribeChannels(data: DescribeChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelsResponse>;
  /** 根据直播录制计划获取频道列表 {@link DescribeChannelsByLiveRecordPlanRequest} {@link DescribeChannelsByLiveRecordPlanResponse} */
  DescribeChannelsByLiveRecordPlan(data: DescribeChannelsByLiveRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelsByLiveRecordPlanResponse>;
  /** 查询设备统计当前信息 {@link DescribeCurrentDeviceDataRequest} {@link DescribeCurrentDeviceDataResponse} */
  DescribeCurrentDeviceData(data?: DescribeCurrentDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCurrentDeviceDataResponse>;
  /** 获取设备详情 {@link DescribeDeviceRequest} {@link DescribeDeviceResponse} */
  DescribeDevice(data: DescribeDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceResponse>;
  /** 获取设备事件 {@link DescribeDeviceEventRequest} {@link DescribeDeviceEventResponse} */
  DescribeDeviceEvent(data: DescribeDeviceEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceEventResponse>;
  /** 查询设备分组信息 {@link DescribeDeviceGroupRequest} {@link DescribeDeviceGroupResponse} */
  DescribeDeviceGroup(data?: DescribeDeviceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceGroupResponse>;
  /** 获取设备列表 {@link DescribeDeviceListRequest} {@link DescribeDeviceListResponse} */
  DescribeDeviceList(data?: DescribeDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceListResponse>;
  /** 查询设备统计monitor信息 {@link DescribeDeviceMonitorDataRequest} {@link DescribeDeviceMonitorDataResponse} */
  DescribeDeviceMonitorData(data: DescribeDeviceMonitorDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceMonitorDataResponse>;
  /** 查询设备密码 {@link DescribeDevicePassWordRequest} {@link DescribeDevicePassWordResponse} */
  DescribeDevicePassWord(data: DescribeDevicePassWordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePassWordResponse>;
  /** 获取设备实时流地址（旧） {@link DescribeDeviceStreamsRequest} {@link DescribeDeviceStreamsResponse} */
  DescribeDeviceStreams(data: DescribeDeviceStreamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceStreamsResponse>;
  /** 根据分组ID查询分组 {@link DescribeGroupByIdRequest} {@link DescribeGroupByIdResponse} */
  DescribeGroupById(data: DescribeGroupByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupByIdResponse>;
  /** 根据分组路径查询分组 {@link DescribeGroupByPathRequest} {@link DescribeGroupByPathResponse} */
  DescribeGroupByPath(data: DescribeGroupByPathRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupByPathResponse>;
  /** 查询分组下的设备 {@link DescribeGroupDevicesRequest} {@link DescribeGroupDevicesResponse} */
  DescribeGroupDevices(data: DescribeGroupDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupDevicesResponse>;
  /** 批量查询分组信息 {@link DescribeGroupsRequest} {@link DescribeGroupsResponse} */
  DescribeGroups(data?: DescribeGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupsResponse>;
  /** 获取IPC设备下属通道（旧） {@link DescribeIPCChannelsRequest} {@link DescribeIPCChannelsResponse} */
  DescribeIPCChannels(data?: DescribeIPCChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPCChannelsResponse>;
  /** 直播详情接口 {@link DescribeLiveChannelRequest} {@link DescribeLiveChannelResponse} */
  DescribeLiveChannel(data: DescribeLiveChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveChannelResponse>;
  /** 直播列表接口 {@link DescribeLiveChannelListRequest} {@link DescribeLiveChannelListResponse} */
  DescribeLiveChannelList(data: DescribeLiveChannelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveChannelListResponse>;
  /** 获取直播录制计划详情 {@link DescribeLiveRecordPlanByIdRequest} {@link DescribeLiveRecordPlanByIdResponse} */
  DescribeLiveRecordPlanById(data: DescribeLiveRecordPlanByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordPlanByIdResponse>;
  /** 获取直播录制计划列表 {@link DescribeLiveRecordPlanIdsRequest} {@link DescribeLiveRecordPlanIdsResponse} */
  DescribeLiveRecordPlanIds(data?: DescribeLiveRecordPlanIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordPlanIdsResponse>;
  /** 直播拉流接口 {@link DescribeLiveStreamRequest} {@link DescribeLiveStreamResponse} */
  DescribeLiveStream(data: DescribeLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamResponse>;
  /** 直播录像回放列表 {@link DescribeLiveVideoListRequest} {@link DescribeLiveVideoListResponse} */
  DescribeLiveVideoList(data: DescribeLiveVideoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveVideoListResponse>;
  /** 查看消息转发配置详情 {@link DescribeMessageForwardRequest} {@link DescribeMessageForwardResponse} */
  DescribeMessageForward(data: DescribeMessageForwardRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageForwardResponse>;
  /** 查看消息转发配置列表 {@link DescribeMessageForwardsRequest} {@link DescribeMessageForwardsResponse} */
  DescribeMessageForwards(data: DescribeMessageForwardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageForwardsResponse>;
  /** 运营中心-设备录像存储统计 {@link DescribeMonitorDataByDateRequest} {@link DescribeMonitorDataByDateResponse} */
  DescribeMonitorDataByDate(data: DescribeMonitorDataByDateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorDataByDateResponse>;
  /** 获取预置位列表 {@link DescribePresetListRequest} {@link DescribePresetListResponse} */
  DescribePresetList(data: DescribePresetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePresetListResponse>;
  /** 获取设备录像日期列表 {@link DescribeRecordDatesByChannelRequest} {@link DescribeRecordDatesByChannelResponse} */
  DescribeRecordDatesByChannel(data: DescribeRecordDatesByChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordDatesByChannelResponse>;
  /** 直播录像存储日期列表 {@link DescribeRecordDatesByLiveRequest} {@link DescribeRecordDatesByLiveResponse} */
  DescribeRecordDatesByLive(data: DescribeRecordDatesByLiveRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordDatesByLiveResponse>;
  /** 获取通道本地回放流地址（旧） {@link DescribeRecordStreamRequest} {@link DescribeRecordStreamResponse} */
  DescribeRecordStream(data: DescribeRecordStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordStreamResponse>;
  /** 获取录制计划 {@link DescribeRecordingPlanByIdRequest} {@link DescribeRecordingPlanByIdResponse} */
  DescribeRecordingPlanById(data: DescribeRecordingPlanByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordingPlanByIdResponse>;
  /** 获取全部录制计划 {@link DescribeRecordingPlansRequest} {@link DescribeRecordingPlansResponse} */
  DescribeRecordingPlans(data?: DescribeRecordingPlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordingPlansResponse>;
  /** 获取SIP服务器配置 {@link DescribeSIPServerRequest} {@link DescribeSIPServerResponse} */
  DescribeSIPServer(data?: DescribeSIPServerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSIPServerResponse>;
  /** 场景详情 {@link DescribeSceneRequest} {@link DescribeSceneResponse} */
  DescribeScene(data: DescribeSceneRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSceneResponse>;
  /** 获取场景列表 {@link DescribeScenesRequest} {@link DescribeScenesResponse} */
  DescribeScenes(data: DescribeScenesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScenesResponse>;
  /** 查询指定统计项详情 {@link DescribeStatisticDetailsRequest} {@link DescribeStatisticDetailsResponse} */
  DescribeStatisticDetails(data: DescribeStatisticDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStatisticDetailsResponse>;
  /** 查询统计指标概览数据 {@link DescribeStatisticSummaryRequest} {@link DescribeStatisticSummaryResponse} */
  DescribeStatisticSummary(data: DescribeStatisticSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStatisticSummaryResponse>;
  /** 查询子分组列表 {@link DescribeSubGroupsRequest} {@link DescribeSubGroupsResponse} */
  DescribeSubGroups(data?: DescribeSubGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubGroupsResponse>;
  /** 查询主设备订阅状态 {@link DescribeSubscriptionStatusRequest} {@link DescribeSubscriptionStatusResponse} */
  DescribeSubscriptionStatus(data: DescribeSubscriptionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscriptionStatusResponse>;
  /** 获取云端录制文件列表 {@link DescribeVideoListRequest} {@link DescribeVideoListResponse} */
  DescribeVideoList(data: DescribeVideoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoListResponse>;
  /** 获取通道录制文件列表 {@link DescribeVideoListByChannelRequest} {@link DescribeVideoListByChannelResponse} */
  DescribeVideoListByChannel(data: DescribeVideoListByChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoListByChannelResponse>;
  /** 告警等级列表 {@link DescribeWarnModRequest} {@link DescribeWarnModResponse} */
  DescribeWarnMod(data?: DescribeWarnModRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarnModResponse>;
  /** 获取告警列表 {@link DescribeWarningsRequest} {@link DescribeWarningsResponse} */
  DescribeWarnings(data: DescribeWarningsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarningsResponse>;
  /** 获取X-P2P的统计数据 {@link DescribeXP2PDataRequest} {@link DescribeXP2PDataResponse} */
  DescribeXP2PData(data: DescribeXP2PDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeXP2PDataResponse>;
  /** 获取设备录像日期列表（旧） {@link GetRecordDatesByDevRequest} {@link GetRecordDatesByDevResponse} */
  GetRecordDatesByDev(data: GetRecordDatesByDevRequest, config?: AxiosRequestConfig): AxiosPromise<GetRecordDatesByDevResponse>;
  /** 获取设备绑定的录制计划 {@link GetRecordPlanByDevRequest} {@link GetRecordPlanByDevResponse} */
  GetRecordPlanByDev(data: GetRecordPlanByDevRequest, config?: AxiosRequestConfig): AxiosPromise<GetRecordPlanByDevResponse>;
  /** 获取录制计划（旧） {@link GetRecordPlanByIdRequest} {@link GetRecordPlanByIdResponse} */
  GetRecordPlanById(data: GetRecordPlanByIdRequest, config?: AxiosRequestConfig): AxiosPromise<GetRecordPlanByIdResponse>;
  /** 获取全部录制计划（旧） {@link GetRecordPlansRequest} {@link GetRecordPlansResponse} */
  GetRecordPlans(data?: GetRecordPlansRequest, config?: AxiosRequestConfig): AxiosPromise<GetRecordPlansResponse>;
  /** 根据模板ID获取时间模板 {@link GetTimeTemplateByIdRequest} {@link GetTimeTemplateByIdResponse} */
  GetTimeTemplateById(data: GetTimeTemplateByIdRequest, config?: AxiosRequestConfig): AxiosPromise<GetTimeTemplateByIdResponse>;
  /** 获取时间模板列表 {@link GetTimeTemplatesRequest} {@link GetTimeTemplatesResponse} */
  GetTimeTemplates(data?: GetTimeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<GetTimeTemplatesResponse>;
  /** 获取通道录制文件列表（旧） {@link GetVideoListByConRequest} {@link GetVideoListByConResponse} */
  GetVideoListByCon(data: GetVideoListByConRequest, config?: AxiosRequestConfig): AxiosPromise<GetVideoListByConResponse>;
  /** 直播录制计划绑定解绑直播频道 {@link ModifyBindPlanLiveChannelRequest} {@link ModifyBindPlanLiveChannelResponse} */
  ModifyBindPlanLiveChannel(data: ModifyBindPlanLiveChannelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBindPlanLiveChannelResponse>;
  /** 更新录制计划绑定的通道 {@link ModifyBindRecordingPlanRequest} {@link ModifyBindRecordingPlanResponse} */
  ModifyBindRecordingPlan(data: ModifyBindRecordingPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBindRecordingPlanResponse>;
  /** 场景绑定解绑通道接口 {@link ModifyBindSceneChannelsRequest} {@link ModifyBindSceneChannelsResponse} */
  ModifyBindSceneChannels(data: ModifyBindSceneChannelsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBindSceneChannelsResponse>;
  /** 场景绑定解绑通道接口(旧) {@link ModifyBindSceneDeviceRequest} {@link ModifyBindSceneDeviceResponse} */
  ModifyBindSceneDevice(data: ModifyBindSceneDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBindSceneDeviceResponse>;
  /** 编辑设备信息 {@link ModifyDeviceDataRequest} {@link ModifyDeviceDataResponse} */
  ModifyDeviceData(data: ModifyDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceDataResponse>;
  /** 编辑直播接口 {@link ModifyLiveChannelRequest} {@link ModifyLiveChannelResponse} */
  ModifyLiveChannel(data: ModifyLiveChannelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveChannelResponse>;
  /** 编辑直播录制计划 {@link ModifyLiveRecordPlanRequest} {@link ModifyLiveRecordPlanResponse} */
  ModifyLiveRecordPlan(data: ModifyLiveRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveRecordPlanResponse>;
  /** 直播录像编辑 {@link ModifyLiveVideoRequest} {@link ModifyLiveVideoResponse} */
  ModifyLiveVideo(data: ModifyLiveVideoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveVideoResponse>;
  /** 修改消息转发配置 {@link ModifyMessageForwardRequest} {@link ModifyMessageForwardResponse} */
  ModifyMessageForward(data: ModifyMessageForwardRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMessageForwardResponse>;
  /** 编辑预置位信息 {@link ModifyPresetRequest} {@link ModifyPresetResponse} */
  ModifyPreset(data: ModifyPresetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPresetResponse>;
  /** 更新录制计划 {@link ModifyRecordingPlanRequest} {@link ModifyRecordingPlanResponse} */
  ModifyRecordingPlan(data: ModifyRecordingPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordingPlanResponse>;
  /** 修改场景 {@link ModifySceneRequest} {@link ModifySceneResponse} */
  ModifyScene(data: ModifySceneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySceneResponse>;
  /** 编辑设备订阅状态 {@link ModifySubscriptionStatusRequest} {@link ModifySubscriptionStatusResponse} */
  ModifySubscriptionStatus(data: ModifySubscriptionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscriptionStatusResponse>;
  /** 修改录像存储列表 {@link ModifyVideoInfoRequest} {@link ModifyVideoInfoResponse} */
  ModifyVideoInfo(data: ModifyVideoInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVideoInfoResponse>;
  /** 重置设备告警 {@link ResetWarningRequest} {@link ResetWarningResponse} */
  ResetWarning(data?: ResetWarningRequest, config?: AxiosRequestConfig): AxiosPromise<ResetWarningResponse>;
  /** 修改分组信息 {@link UpdateDeviceGroupRequest} {@link UpdateDeviceGroupResponse} */
  UpdateDeviceGroup(data: UpdateDeviceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceGroupResponse>;
  /** 修改设备密码 {@link UpdateDevicePassWordRequest} {@link UpdateDevicePassWordResponse} */
  UpdateDevicePassWord(data: UpdateDevicePassWordRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDevicePassWordResponse>;
  /** 更新录制计划（旧） {@link UpdateRecordPlanRequest} {@link UpdateRecordPlanResponse} */
  UpdateRecordPlan(data: UpdateRecordPlanRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRecordPlanResponse>;
  /** 更新时间模板 {@link UpdateTimeTemplateRequest} {@link UpdateTimeTemplateResponse} */
  UpdateTimeTemplate(data: UpdateTimeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTimeTemplateResponse>;
}

export declare type Versions = ["2020-12-01"];

export default Iotvideoindustry;
