/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 设备激活详情信息 */
declare interface ActivateDeviceInfo {
  /** 实例ID */
  InstanceId: string;
  /** 实例类型 */
  InstanceType: number;
  /** 设备激活信息 */
  DeviceActivationDetails: DeviceActivationDetail;
  /** 已注册设备类型信息 */
  RegisteredDeviceType: RegisteredDeviceTypeInfo;
  /** 已注册设备通信类型信息 */
  RegisteredDeviceNetType: RegisteredDeviceNetTypeInfo;
}

/** 云api直接绑定设备出参 */
declare interface AppDeviceInfo {
  /** 产品ID/设备名 */
  DeviceId: string;
  /** 产品ID */
  ProductId: string;
  /** 设备名 */
  DeviceName: string;
  /** 设备别名 */
  AliasName: string;
  /** icon地址 */
  IconUrl: string;
  /** 家庭ID */
  FamilyId: string;
  /** 房间ID */
  RoomId: string;
  /** 设备类型 */
  DeviceType: number;
  /** 创建时间 */
  CreateTime: number;
  /** 更新时间 */
  UpdateTime: number;
}

/** 授权小程序信息 */
declare interface AuthMiniProgramAppInfo {
  /** 小程序APPID */
  MiniProgramAppId?: string | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 小程序名称 */
  MiniProgramName?: string | null;
  /** 激活码数 */
  LicenseNum?: number | null;
  /** 应用ID */
  IotAppId?: string | null;
  /** 应用名称 */
  IotAppName?: string | null;
}

/** 获取返回列表的详情。 */
declare interface BatchProductionInfo {
  /** 量产ID */
  BatchProductionId: string;
  /** 产品ID */
  ProductId: string;
  /** 烧录方式 */
  BurnMethod: number;
  /** 创建时间 */
  CreateTime: number;
  /** 产品名称 */
  ProductName: string;
}

/** BindDeviceInfo */
declare interface BindDeviceInfo {
  /** 产品ID。 */
  ProductId: string;
  /** 设备名称。 */
  DeviceName: string;
}

/** 绑定、未绑定产品详细信息 */
declare interface BindProductInfo {
  /** 产品ID。 */
  ProductId: string;
  /** 产品名称。 */
  ProductName: string;
  /** 产品所属项目ID。 */
  ProjectId: string | null;
  /** 物模型类型。 */
  DataProtocol: number | null;
  /** 产品分组模板ID */
  CategoryId: number | null;
  /** 产品类型 */
  ProductType: number | null;
  /** 连接类型 */
  NetType: string | null;
  /** 状态 */
  DevStatus: string | null;
  /** 产品拥有者名称 */
  ProductOwnerName: string | null;
}

/** 标签数据结构 */
declare interface CamTag {
  /** 标签键 */
  TagKey?: string | null;
  /** 标签值 */
  TagValue?: string | null;
}

/** 云存 AI 服务任务信息 */
declare interface CloudStorageAIServiceTask {
  /** 云存 AI 服务任务 ID */
  TaskId?: string;
  /** 产品 ID */
  ProductId?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 通道 ID */
  ChannelId?: number;
  /** 云存 AI 服务类型。可能取值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩- `VideoToText`：视频语义理解 */
  ServiceType?: string;
  /** 对应云存视频的起始时间 */
  StartTime?: number;
  /** 对应云存视频的结束时间 */
  EndTime?: number;
  /** 任务状态（1：失败；2：成功但结果为空；3：成功且结果非空；4：执行中） */
  Status?: number;
  /** 任务结果 */
  Result?: string;
  /** 任务输出文件列表 */
  Files?: string[];
  /** 任务输出文件信息列表 */
  FilesInfo?: CloudStorageAIServiceTaskFileInfo[];
  /** 创建时间 */
  CreateTime?: number;
  /** 最后更新时间 */
  UpdateTime?: number;
  /** 自定义任务 ID */
  CustomId?: string;
}

/** 云存 AI 任务输出文件信息 */
declare interface CloudStorageAIServiceTaskFileInfo {
  /** 文件名称（含扩展名） */
  FileName?: string;
  /** 文件大小（单位：bytes） */
  FileSize?: number;
  /** 文件下载 URL */
  DownloadURL?: string;
  /** 文件的 MIME Type */
  MimeType?: string;
  /** 视频文件元数据（仅当文件为视频类型时包含该字段） */
  VideoMetaInfo?: CloudStorageAIServiceTaskVideoMetaInfo;
}

/** 云存 AI 任务输出视频文件元数据 */
declare interface CloudStorageAIServiceTaskVideoMetaInfo {
  /** 视频对应的缩略图的文件名称（含扩展名） */
  ThumbnailFileName?: string;
  /** 视频时长（单位：毫秒） */
  DurationMilliSeconds?: number;
}

/** 云存事件 */
declare interface CloudStorageEvent {
  /** 事件起始时间（Unix 时间戳，秒级 */
  StartTime: number;
  /** 事件结束时间（Unix 时间戳，秒级 */
  EndTime: number;
  /** 事件缩略图 */
  Thumbnail: string;
  /** 事件ID */
  EventId: string;
  /** 事件录像上传状态，Finished: 全部上传成功 Partial: 部分上传成功 Failed: 上传失败 */
  UploadStatus?: string | null;
  /** 事件自定义数据 */
  Data?: string | null;
}

/** 云存事件及其关联的云存 AI 任务 */
declare interface CloudStorageEventWithAITasks {
  /** 事件起始时间（Unix 时间戳，秒级 */
  StartTime?: number;
  /** 事件结束时间（Unix 时间戳，秒级 */
  EndTime?: number;
  /** 事件缩略图 */
  Thumbnail?: string;
  /** 事件ID */
  EventId?: string;
  /** 事件录像上传状态，Finished: 全部上传成功 Partial: 部分上传成功 Failed: 上传失败 */
  UploadStatus?: string;
  /** 事件自定义数据 */
  Data?: string;
  /** 事件关联的云存 AI 任务列表 */
  AITasks?: CloudStorageAIServiceTask[];
}

/** 云存套餐包信息 */
declare interface CloudStoragePackageInfo {
  /** 套餐包id */
  PackageId?: string;
  /** 套餐包名字 */
  PackageName?: string;
  /** 套餐包数量 */
  Num?: number;
  /** 已使用数量 */
  UsedNum?: number;
}

/** 云存时间轴接口返回数据 */
declare interface CloudStorageTimeData {
  /** 云存时间轴信息列表 */
  TimeList?: CloudStorageTimeInfo[];
  /** 播放地址 */
  VideoURL?: string | null;
}

/** 云存时间轴信息 */
declare interface CloudStorageTimeInfo {
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

/** 云存用户信息 */
declare interface CloudStorageUserInfo {
  /** 用户ID */
  UserId?: string;
}

/** 设备激活详情信息 */
declare interface DeviceActivationDetail {
  /** 可注册设备数 */
  TotalDeviceNum: number;
  /** 已注册设备数 */
  UsedDeviceNum: number;
  /** 设备授权数 */
  TotalNormalLicense: number;
  /** 已使用设备授权数 */
  UsedNormalLicense: number;
  /** 蓝牙授权数 */
  TotalBluetoothLicense: number;
  /** 已使用蓝牙授权数 */
  UsedBluetoothLicense: number;
}

/** 设备激活结果数据 */
declare interface DeviceActiveResult {
  /** 模板ID */
  ModelId?: string | null;
  /** SN信息 */
  Sn?: string | null;
  /** 设备激活状态，0：激活成功；50011：系统错误；50012：产品不存在；50013：设备不存在；50014：产品无权限；50015：不是音视频产品；50016：SN格式错误；50017：激活码类型错误；50018：激活次数限频；50019：激活码不足；50020：SN已暂停； */
  ErrCode?: number | null;
  /** 过期时间 */
  ExpireTime?: number | null;
}

/** DeviceData */
declare interface DeviceData {
  /** 设备证书，用于 TLS 建立链接时校验客户端身份。采用非对称加密时返回该参数。 */
  DeviceCert: string | null;
  /** 设备名称。 */
  DeviceName: string | null;
  /** 设备私钥，用于 TLS 建立链接时校验客户端身份，腾讯云后台不保存，请妥善保管。采用非对称加密时返回该参数。 */
  DevicePrivateKey: string | null;
  /** 对称加密密钥，base64编码。采用对称加密时返回该参数。 */
  DevicePsk: string | null;
}

/** 设备历史数据结构 */
declare interface DeviceDataHistoryItem {
  /** 时间点，毫秒时间戳 */
  Time: string;
  /** 字段取值 */
  Value: string;
}

/** 设备固件信息 */
declare interface DeviceFirmwareInfo {
  /** 固件类型 */
  FwType: string;
  /** 固件版本 */
  Version: string;
  /** 最后更新时间 */
  UpdateTime: number;
}

/** 设备详细信息 */
declare interface DeviceInfo {
  /** 设备名 */
  DeviceName: string;
  /** 0: 离线, 1: 在线, 2: 获取失败, 3 未激活 */
  Status: number;
  /** 设备密钥，密钥加密的设备返回 */
  DevicePsk: string;
  /** 首次上线时间 */
  FirstOnlineTime: number | null;
  /** 最后一次上线时间 */
  LoginTime: number | null;
  /** 设备创建时间 */
  CreateTime: number | null;
  /** 设备固件版本 */
  Version: string | null;
  /** 设备证书 */
  DeviceCert: string | null;
  /** 日志级别 */
  LogLevel: number | null;
  /** LoRaWAN 设备地址 */
  DevAddr: string | null;
  /** LoRaWAN 应用密钥 */
  AppKey: string | null;
  /** LoRaWAN 设备唯一标识 */
  DevEUI: string | null;
  /** LoRaWAN 应用会话密钥 */
  AppSKey: string | null;
  /** LoRaWAN 网络会话密钥 */
  NwkSKey: string | null;
  /** 创建人Id */
  CreateUserId: number | null;
  /** 创建人昵称 */
  CreatorNickName: string | null;
  /** 启用/禁用状态 */
  EnableState: number | null;
  /** 产品ID */
  ProductId: string | null;
  /** 产品名称 */
  ProductName: string | null;
  /** 设备类型（设备、子设备、网关） */
  DeviceType: string | null;
  /** 是否是 lora 设备 */
  IsLora: boolean | null;
}

/** 设备位置详情 */
declare interface DevicePositionItem {
  /** 设备名称 */
  DeviceName: string;
  /** 位置信息时间 */
  CreateTime: number;
  /** 设备经度信息 */
  Longitude: number;
  /** 设备纬度信息 */
  Latitude: number;
}

/** 设备签名 */
declare interface DeviceSignatureInfo {
  /** 设备名 */
  DeviceName: string;
  /** 设备签名 */
  DeviceSignature: string;
}

/** 设备的用户 */
declare interface DeviceUser {
  /** 用户ID */
  UserId: string;
  /** 用户角色 1所有者，0：其他分享者 */
  Role: number;
  /** 家庭ID，所有者带该参数 */
  FamilyId?: string | null;
  /** 家庭名称，所有者带该参数 */
  FamilyName?: string | null;
}

/** ProductId -> DeviceName */
declare interface DevicesItem {
  /** 产品id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

/** 设备事件的搜索结果项 */
declare interface EventHistoryItem {
  /** 事件的时间戳 */
  TimeStamp: number | null;
  /** 事件的产品ID */
  ProductId: string | null;
  /** 事件的设备名称 */
  DeviceName: string | null;
  /** 事件的标识符ID */
  EventId: string | null;
  /** 事件的类型 */
  Type: string | null;
  /** 事件的数据 */
  Data: string | null;
}

/** 子设备详情 */
declare interface FamilySubDevice {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 设备ID */
  DeviceId: string;
  /** 设备别名 */
  AliasName: string | null;
  /** 设备绑定的家庭ID */
  FamilyId: string;
  /** 设备所在的房间ID，默认"0" */
  RoomId: string | null;
  /** 图标 */
  IconUrl: string | null;
  /** grid图标 */
  IconUrlGrid: string | null;
  /** 设备绑定时间戳 */
  CreateTime: number;
  /** 设备更新时间戳 */
  UpdateTime: number;
}

/** 围栏告警位置点 */
declare interface FenceAlarmPoint {
  /** 围栏告警时间 */
  AlarmTime: number;
  /** 围栏告警位置的经度 */
  Longitude: number;
  /** 围栏告警位置的纬度 */
  Latitude: number;
}

/** 围栏绑定的设备信息 */
declare interface FenceBindDeviceItem {
  /** 设备名称 */
  DeviceName: string;
  /** 告警条件(In，进围栏报警；Out，出围栏报警；InOrOut，进围栏或者出围栏均报警) */
  AlertCondition: string;
  /** 是否使能围栏(true，使能；false，禁用) */
  FenceEnable: boolean;
  /** 告警处理方法 */
  Method: string;
}

/** 围栏绑定的产品信息 */
declare interface FenceBindProductItem {
  /** 围栏绑定的设备信息 */
  Devices: FenceBindDeviceItem[];
  /** 围栏绑定的产品Id */
  ProductId: string;
}

/** 围栏事件详情 */
declare interface FenceEventItem {
  /** 围栏事件的产品Id */
  ProductId: string;
  /** 围栏事件的设备名称 */
  DeviceName: string;
  /** 围栏Id */
  FenceId: number;
  /** 围栏事件的告警类型（In，进围栏报警；Out，出围栏报警；InOrOut，进围栏或者出围栏均报警） */
  AlertType: string;
  /** 围栏事件的设备位置信息 */
  Data: FenceAlarmPoint;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 需要过滤的字段 */
  Name: string;
  /** 字段的过滤的一个或多个值 */
  Values?: string[];
}

/** 设备固件详细信息 */
declare interface FirmwareInfo {
  /** 固件版本 */
  Version?: string;
  /** 固件MD5值 */
  Md5sum?: string;
  /** 固件创建时间 */
  CreateTime?: number;
  /** 产品名称 */
  ProductName?: string | null;
  /** 固件名称 */
  Name?: string | null;
  /** 固件描述 */
  Description?: string | null;
  /** 产品ID */
  ProductId?: string | null;
  /** 固件升级模块 */
  FwType?: string | null;
  /** 创建者子 uin */
  CreateUserId?: number | null;
  /** 创建者昵称 */
  CreatorNickName?: string | null;
  /** 固件用户自定义配置信息 */
  UserDefined?: string | null;
}

/** 实例信息公共实例过期时间 0001-01-01T00:00:00Z，公共实例是永久有效 */
declare interface InstanceDetail {
  /** 实例ID */
  InstanceId?: string;
  /** 实例类型（0 公共实例 1 标准企业实例 2新企业实例3新公共实例） */
  InstanceType?: number;
  /** 地域字母缩写 */
  Region?: string;
  /** 区域全拼 */
  ZoneId?: string;
  /** 支持设备总数 */
  TotalDeviceNum?: number;
  /** 已注册设备数 */
  UsedDeviceNum?: number;
  /** 项目数 */
  ProjectNum?: number;
  /** 产品数 */
  ProductNum?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 过期时间，公共实例过期时间 0001-01-01T00:00:00Z，公共实例是永久有效 */
  ExpireTime?: string;
  /** 总设备数 */
  TotalDevice?: number | null;
  /** 激活设备数 */
  ActivateDevice?: number | null;
  /** 备注 */
  Description?: string | null;
  /** 实例状态 */
  Status?: number | null;
  /** 消息上下行配置TPS */
  UpDownTPS?: number | null;
  /** 当前消息上下行TPS */
  UpDownCurrentTPS?: number | null;
  /** 消息转发配置TPS */
  ForwardTPS?: number | null;
  /** 消息转发当前TPS */
  ForwardCurrentTPS?: number | null;
  /** 实例单元数 */
  CellNum?: number | null;
  /** 实例Tag */
  BillingTag?: string | null;
  /** 每日消息数 */
  EverydayFreeMessageCount?: number | null;
  /** 最大在线设备数 */
  MaxDeviceOnlineCount?: number | null;
}

/** 增值服务数量统计 */
declare interface LicenseServiceNumInfo {
  /** 服务类型 */
  LicenseType?: string;
  /** 授权总数 */
  TotalNum?: number;
  /** 已使用授权数 */
  UsedNum?: number;
  /** TWeCall激活码 */
  TWeCallLicense?: TWeCallLicenseInfo[] | null;
}

/** LoRa自定义频点信息 */
declare interface LoRaFrequencyEntry {
  /** 频点唯一ID */
  FreqId: string;
  /** 频点名称 */
  FreqName: string;
  /** 频点描述 */
  Description: string;
  /** 数据上行信道 */
  ChannelsDataUp: number[];
  /** 数据下行信道RX1 */
  ChannelsDataRX1: number[];
  /** 数据下行信道RX2 */
  ChannelsDataRX2: number[];
  /** 入网上行信道 */
  ChannelsJoinUp: number[];
  /** 入网下行RX1信道 */
  ChannelsJoinRX1: number[];
  /** 入网下行RX2信道 */
  ChannelsJoinRX2: number[];
  /** 创建时间 */
  CreateTime: number;
}

/** LoRa 网关信息 */
declare interface LoRaGatewayItem {
  /** LoRa 网关Id */
  GatewayId: string;
  /** 是否是公开网关 */
  IsPublic: boolean;
  /** 网关描述 */
  Description: string;
  /** 网关名称 */
  Name: string;
  /** 网关位置信息 */
  Position: string;
  /** 网关位置详情 */
  PositionDetails: string;
  /** LoRa 网关位置坐标 */
  Location: LoRaGatewayLocation;
  /** 最后更新时间 */
  UpdatedAt: string;
  /** 创建时间 */
  CreatedAt: string;
  /** 最后上报时间 */
  LastSeenAt: string;
  /** 频点ID */
  FrequencyId?: string;
}

/** 网关坐标 */
declare interface LoRaGatewayLocation {
  /** 纬度 */
  Latitude: number;
  /** 精度 */
  Longitude: number;
  /** 准确度 */
  Accuracy?: number;
  /** 海拔 */
  Altitude?: number;
}

/** 云存套餐包消耗统计 */
declare interface PackageConsumeStat {
  /** 云存套餐包id */
  PackageId?: string;
  /** 云存套餐包名称 */
  PackageName?: string;
  /** 消耗个数 */
  Cnt?: number;
  /** 套餐包单价，单位分 */
  Price?: number;
  /** 消耗来源，1预付费 */
  Source?: number;
}

/** 套餐包消耗任务列表 */
declare interface PackageConsumeTask {
  /** 任务id */
  TaskId?: number;
  /** 任务创始时间 */
  CreateTime?: string;
  /** 任务状态，1待处理，2处理中，3已完成 */
  State?: number;
}

/** 结构体（PackageInfo）记录了设备拥有的有效套餐信息，包括云存开启状态、云存类型、云存回看时长、云存套餐过期时间 */
declare interface PackageInfo {
  /** 云存开启状态，0为未开启，2为正在生效，1为已过期注：这里只返回状态为0的数据 */
  Status?: number;
  /** 云存类型，1为全时云存，2为事件云存 */
  CSType?: number;
  /** 云存回看时长 */
  CSShiftDuration?: number;
  /** 云存套餐过期时间 */
  CSExpiredTime?: number;
  /** 云存套餐创建时间 */
  CreatedAt?: number | null;
  /** 云存套餐更新时间 */
  UpdatedAt?: number | null;
  /** 套餐id */
  PackageId?: string | null;
  /** 订单id */
  OrderId?: string | null;
  /** 通道id */
  ChannelId?: number;
  /** 用户id */
  CSUserId?: string | null;
}

/** 围栏详细信息(包含创建时间及更新时间) */
declare interface PositionFenceInfo {
  /** 围栏信息 */
  GeoFence: PositionFenceItem;
  /** 围栏创建时间 */
  CreateTime: number;
  /** 围栏更新时间 */
  UpdateTime: number;
}

/** 围栏信息 */
declare interface PositionFenceItem {
  /** 围栏Id */
  FenceId: number;
  /** 位置空间Id */
  SpaceId: string;
  /** 围栏名称 */
  FenceName: string;
  /** 围栏描述 */
  FenceDesc: string;
  /** 围栏区域信息，采用 GeoJSON 格式 */
  FenceArea: string;
}

/** 位置点 */
declare interface PositionItem {
  /** 位置点的时间 */
  CreateTime: number;
  /** 位置点的经度 */
  Longitude: number;
  /** 位置点的纬度 */
  Latitude: number;
  /** 位置点的定位类型 */
  LocationType: string | null;
  /** 位置点的精度预估，单位为米 */
  Accuracy: number | null;
}

/** 位置空间详情 */
declare interface PositionSpaceInfo {
  /** 项目Id */
  ProjectId: string;
  /** 位置空间Id */
  SpaceId: string;
  /** 位置空间名称 */
  SpaceName: string;
  /** 授权类型 */
  AuthorizeType: number;
  /** 描述备注 */
  Description: string | null;
  /** 产品列表 */
  ProductIdList: string[];
  /** 缩略图 */
  Icon: string;
  /** 创建时间 */
  CreateTime: number;
  /** 更新时间 */
  UpdateTime: number;
  /** 用户自定义地图缩放 */
  Zoom: number;
}

/** 产品设备位置信息 */
declare interface ProductDevicesPositionItem {
  /** 设备位置列表 */
  Items: DevicePositionItem[];
  /** 产品标识 */
  ProductId: string;
  /** 设备位置数量 */
  Total: number;
}

/** 产品详情 */
declare interface ProductEntry {
  /** 产品ID */
  ProductId?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 产品分组模板ID */
  CategoryId?: number;
  /** 加密类型。1表示证书认证，2表示密钥认证，21表示TID认证-SE方式，22表示TID认证-软加固方式 */
  EncryptionType?: string;
  /** 连接类型。如：wifi、wifi-ble、cellular、5g、lorawan、ble、ethernet、wifi-ethernet、else、sub_zigbee、sub_ble、sub_433mhz、sub_else、sub_blemesh */
  NetType?: string;
  /** 数据协议 (1 使用物模型 2 为自定义类型) */
  DataProtocol?: number;
  /** 产品描述 */
  ProductDesc?: string;
  /** 状态 如：all 全部, dev 开发中, audit 审核中 released 已发布 */
  DevStatus?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 更新时间 */
  UpdateTime?: number;
  /** 区域 */
  Region?: string;
  /** 产品类型。如： 0 普通产品 ， 5 网关产品 */
  ProductType?: number;
  /** 项目ID */
  ProjectId?: string;
  /** 产品ModuleId */
  ModuleId?: number;
  /** 是否使用脚本进行二进制转json功能 可以取值 true / false */
  EnableProductScript?: string | null;
  /** 创建人 UinId */
  CreateUserId?: number | null;
  /** 创建者昵称 */
  CreatorNickName?: string | null;
  /** 绑定策略（1：强踢；2：非强踢；0：表示无意义） */
  BindStrategy?: number | null;
  /** 设备数量 */
  DeviceCount?: number | null;
  /** 平均传输速率 */
  Rate?: string | null;
  /** 有效期 */
  Period?: string | null;
}

/** 产品模型定义 */
declare interface ProductModelDefinition {
  /** 产品ID */
  ProductId: string;
  /** 模型定义 */
  ModelDefine: string;
  /** 更新时间，秒级时间戳 */
  UpdateTime: number;
  /** 创建时间，秒级时间戳 */
  CreateTime: number;
  /** 产品所属分类的模型快照（产品创建时刻的） */
  CategoryModel: string | null;
  /** 产品的连接类型的模型 */
  NetTypeModel: string | null;
}

/** 项目详情 */
declare interface ProjectEntry {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 项目描述 */
  ProjectDesc: string;
  /** 创建时间，unix时间戳 */
  CreateTime: number;
  /** 更新时间，unix时间戳 */
  UpdateTime: number;
}

/** 项目详情 */
declare interface ProjectEntryEx {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 项目描述 */
  ProjectDesc: string;
  /** 项目创建时间，unix时间戳 */
  CreateTime: number;
  /** 项目更新时间，unix时间戳 */
  UpdateTime: number;
  /** 产品数量 */
  ProductCount: number;
  /** NativeApp数量 */
  NativeAppCount: number;
  /** WebApp数量 */
  WebAppCount: number;
  /** 实例ID */
  InstanceId: string | null;
  /** 应用数量 */
  ApplicationCount: number | null;
  /** 设备注册总数 */
  DeviceCount: number | null;
  /** 是否开通物联使能 */
  EnableOpenState: number | null;
}

/** 已注册通信类型信息 */
declare interface RegisteredDeviceNetTypeInfo {
  /** 普通设备数 */
  NormalDeviceNum: number;
  /** 蓝牙设备数 */
  BluetoothDeviceNum: number;
}

/** 已注册设备类型信息 */
declare interface RegisteredDeviceTypeInfo {
  /** 已注册设备数 */
  NormalDeviceNum: number;
  /** 已注册网关数 */
  GatewayDeviceNum: number;
  /** 已注册子设备数 */
  SubDeviceNum: number;
}

/** 搜索关键词 */
declare interface SearchKeyword {
  /** 搜索条件的Key */
  Key: string;
  /** 搜索条件的值 */
  Value?: string;
}

/** TRTC 的参数 可以用来加入房间 */
declare interface TRTCParams {
  /** TRTC入参: TRTC的实例ID */
  SdkAppId: number;
  /** TRTC入参: 用户加入房间的ID */
  UserId: string;
  /** TRTC入参: 用户的签名用来鉴权 */
  UserSig: string;
  /** TRTC入参: 加入的TRTC房间名称 */
  StrRoomId: string;
  /** TRTC入参: 校验TRTC的KEY */
  PrivateKey: string;
}

/** TWeCall设备激活信息 */
declare interface TWeCallActiveInfo {
  /** 小程序ID */
  ModelId?: string | null;
  /** Sn信息 */
  Sn?: string | null;
  /** 过期时间 */
  ExpireTime?: number | null;
  /** 类型 */
  PkgType?: number;
}

/** TWeCall信息 */
declare interface TWeCallInfo {
  /** Sn信息，SN格式：产品ID_设备名 */
  Sn: string | null;
  /** 小程序ID，参数已弃用，不用传参 */
  ModelId?: string | null;
  /** 激活数 */
  ActiveNum?: number | null;
}

/** TWeCall信息 */
declare interface TWeCallLicenseInfo {
  /** voip类型 */
  TWeCallType?: string | null;
  /** 总数 */
  TotalNum?: number | null;
  /** 已使用 */
  UsedNum?: number | null;
}

/** 缩略图信息 */
declare interface ThumbnailURLInfoList {
  /** 缩略图访问地址 */
  ThumbnailURL?: string | null;
  /** 缩略图访问地址的过期时间 */
  ExpireTime?: number | null;
}

/** Topic信息, 包括Topic名字和权限 */
declare interface TopicItem {
  /** Topic名称 */
  TopicName: string;
  /** Topic权限 , 1上报 2下发 */
  Privilege: number;
}

/** TopicRule结构 */
declare interface TopicRule {
  /** 规则名称。 */
  RuleName: string;
  /** 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw== */
  Sql: string;
  /** 规则描述。 */
  Description: string | null;
  /** 行为的JSON字符串。 */
  Actions: string | null;
  /** 是否禁用规则 */
  RuleDisabled: boolean | null;
}

/** 规则信息 */
declare interface TopicRuleInfo {
  /** 规则名称 */
  RuleName?: string;
  /** 规则描述 */
  Description?: string;
  /** 创建时间 */
  CreatedAt?: number;
  /** 规则是否禁用 */
  RuleDisabled?: boolean;
}

/** TopicRulePayload结构 */
declare interface TopicRulePayload {
  /** 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw== */
  Sql: string;
  /** 行为的JSON字符串，大部分种类举例如下：[{"republish": {"topic": "TEST/test"}},{"forward": {"api": "http://test.com:8080"}},{"ckafka": {"instance": {"id": "ckafka-test","name": ""},"topic": {"id": "topic-test","name": "test"},"region": "gz"}},{"cmqqueue": {"queuename": "queue-test-TEST","region": "gz"}},{"mysql": {"instanceid": "cdb-test","region": "gz","username": "test","userpwd": "*****","dbname": "d_mqtt","tablename": "t_test","fieldpairs": [{"field": "test","value": "test"}],"devicetype": "CUSTOM"}}] */
  Actions?: string;
  /** 规则描述 */
  Description?: string;
  /** 是否禁用规则 */
  RuleDisabled?: boolean;
}

/** 视频设备激活码统计 */
declare interface VideoLicenseEntity {
  /** 激活码类型，取值范围如下：0_5_mbps、1_mbps、1_5_mbps、2_mbps */
  Type?: string;
  /** 有效激活码总数 */
  TotalCount?: number;
  /** 待使用的激活码数量 */
  UsedCount?: number;
  /** 即将过期的激活码数量 */
  ExpiresSoonCount?: number;
}

/** 微信硬件设备信息 */
declare interface WXDeviceInfo {
  /** 设备ID */
  DeviceId?: string | null;
  /** 设备信息 */
  WXIoTDeviceInfo?: WXIoTDeviceInfo | null;
}

/** 微信物联网硬件信息 */
declare interface WXIoTDeviceInfo {
  /** sn信息 */
  SN?: string | null;
  /** 票据 */
  SNTicket?: string | null;
  /** 模板ID */
  ModelId?: string | null;
}

/** wifi定位信息 */
declare interface WifiInfo {
  /** mac地址 */
  MAC: string;
  /** 信号强度 */
  RSSI: number;
}

declare interface ActivateTWeCallLicenseRequest {
  /** TWecall类型：0-体验套餐；1-家庭安防场景； 2-穿戴类场景； 3-生活娱乐场景； 4-对讲及其它场景 */
  PkgType: number;
  /** 参数已弃用，不用传参 */
  MiniProgramAppId?: string;
  /** 设备列表 */
  DeviceList?: TWeCallInfo[];
}

declare interface ActivateTWeCallLicenseResponse {
  /** 设备激活返回数据 */
  DeviceList?: DeviceActiveResult[] | null;
  /** 设备激活失败返回数据 */
  FailureList?: DeviceActiveResult[] | null;
  /** 设备激活成功返回数据 */
  SuccessList?: DeviceActiveResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindCloudStorageUserRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 用户ID */
  UserId: string;
}

declare interface BindCloudStorageUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindDevicesRequest {
  /** 网关设备的产品ID。 */
  GatewayProductId: string;
  /** 网关设备的设备名。 */
  GatewayDeviceName: string;
  /** 被绑定设备的产品ID。 */
  ProductId: string;
  /** 被绑定的多个设备名。 */
  DeviceNames: string[];
}

declare interface BindDevicesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindProductsRequest {
  /** 网关产品ID。 */
  GatewayProductId: string;
  /** 待绑定的子产品ID数组。 */
  ProductIds: string[];
}

declare interface BindProductsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CallDeviceActionAsyncRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义 */
  ActionId: string;
  /** 输入参数 */
  InputParams?: string;
}

declare interface CallDeviceActionAsyncResponse {
  /** 调用Id */
  ClientToken: string;
  /** 异步调用状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CallDeviceActionSyncRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义 */
  ActionId: string;
  /** 输入参数 */
  InputParams?: string;
}

declare interface CallDeviceActionSyncResponse {
  /** 调用Id */
  ClientToken: string;
  /** 输出参数，取值设备端上报$thing/up/action method为action_reply 的 response字段，物模型协议参考https://cloud.tencent.com/document/product/1081/34916 */
  OutputParams: string | null;
  /** 返回状态，取值设备端上报$thing/up/action	method为action_reply 的 status字段，如果不包含status字段，则取默认值，空字符串，物模型协议参考https://cloud.tencent.com/document/product/1081/34916 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelAssignTWeCallLicenseRequest {
  /** 订单号 */
  PkgId: string;
}

declare interface CancelAssignTWeCallLicenseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckFirmwareUpdateRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 设备名称。 */
  DeviceName: string;
}

declare interface CheckFirmwareUpdateResponse {
  /** 设备当前固件版本。 */
  CurrentVersion?: string | null;
  /** 固件可升级版本。 */
  DstVersion?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlDeviceDataRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 属性数据, JSON格式字符串, 注意字段需要在物模型属性里定义 */
  Data: string;
  /** 请求类型 , 不填该参数或者 desired 表示下发属性给设备, reported 表示模拟设备上报属性 */
  Method?: string;
  /** 设备ID，该字段有值将代替 ProductId/DeviceName , 通常情况不需要填写 */
  DeviceId?: string;
  /** 上报数据UNIX时间戳(毫秒), 仅对Method:reported有效 */
  DataTimestamp?: number;
}

declare interface ControlDeviceDataResponse {
  /** 返回信息 */
  Data: string;
  /** JSON字符串， 返回下发控制的结果信息, Sent = 1 表示设备已经在线并且订阅了控制下发的mqtt topic.pushResult 是表示发送结果，其中 0 表示成功， 23101 表示设备未在线或没有订阅相关的 MQTT Topic。 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchProductionRequest {
  /** 项目ID */
  ProjectId: string;
  /** 产品ID */
  ProductId: string;
  /** 烧录方式，0为直接烧录，1为动态注册。 */
  BurnMethod: number;
  /** 生成方式，0为系统生成，1为文件上传。 */
  GenerationMethod: number;
  /** 文件上传URL，用于文件上传时填写。 */
  UploadUrl?: string;
  /** 量产数量，用于系统生成时填写。 */
  BatchCnt?: number;
  /** 是否生成二维码,0为不生成，1为生成。 */
  GenerationQRCode?: number;
}

declare interface CreateBatchProductionResponse {
  /** 项目Id */
  ProjectId: string;
  /** 产品Id */
  ProductId: string;
  /** 量产id */
  BatchProductionId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudStorageAIServiceRequest {
  /** 产品 ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存 AI 套餐 ID。可选值：- `1m_low_od`：低功耗目标检测月套餐- `1y_low_od`：低功耗目标检测年套餐- `1m_ev_od`：事件目标检测月套餐- `1y_ev_od`：事件目标检测年套餐- `1m_ft_od`：全时目标检测月套餐- `1y_ft_od`：全时目标检测年套餐- `1m_low_hl`：低功耗视频浓缩月套餐- `1y_low_hl`：低功耗视频浓缩年套餐- `1m_ev_hl`：事件视频浓缩月套餐- `1y_ev_hl`：事件视频浓缩年套餐- `1m_ft_hl`：全时视频浓缩月套餐- `1y_ft_hl`：全时视频浓缩年套餐 */
  PackageId: string;
  /** 通道 ID */
  ChannelId?: number;
  /** 订单 ID */
  OrderId?: string;
}

declare interface CreateCloudStorageAIServiceResponse {
  /** 订单 ID */
  OrderId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudStorageAIServiceTaskRequest {
  /** 产品 ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩- `VideoToText`：视频语义理解 */
  ServiceType: string;
  /** 待分析云存的起始时间 */
  StartTime: number;
  /** 待分析云存的结束时间 */
  EndTime: number;
  /** 通道 ID */
  ChannelId?: number;
  /** 视频分析配置参数 */
  Config?: string;
  /** 视频分析识别区域 */
  ROI?: string;
  /** 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等） */
  VideoURLs?: string[];
  /** 自定义任务 ID */
  CustomId?: string;
}

declare interface CreateCloudStorageAIServiceTaskResponse {
  /** 任务 ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeviceChannelRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 通道ID */
  ChannelId: number;
}

declare interface CreateDeviceChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeviceRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}。 */
  DeviceName: string;
  /** LoRaWAN 设备地址 */
  DevAddr?: string;
  /** LoRaWAN 应用密钥 */
  AppKey?: string;
  /** LoRaWAN 设备唯一标识 */
  DevEUI?: string;
  /** LoRaWAN 应用会话密钥 */
  AppSKey?: string;
  /** LoRaWAN 网络会话密钥 */
  NwkSKey?: string;
  /** 手动指定设备的PSK密钥 */
  DefinedPsk?: string;
}

declare interface CreateDeviceResponse {
  /** 设备参数描述。 */
  Data: DeviceData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExternalSourceAIServiceTaskRequest {
  /** 产品 ID */
  ProductId: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩- `VideoToText`：视频语义理解 */
  ServiceType: string;
  /** 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等） */
  VideoURLs: string[];
  /** 自定义任务 ID */
  CustomId?: string;
  /** 视频分析配置参数 */
  Config?: string;
  /** 视频分析识别区域 */
  ROI?: string;
}

declare interface CreateExternalSourceAIServiceTaskResponse {
  /** 任务 ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFenceBindRequest {
  /** 围栏Id */
  FenceId: number;
  /** 围栏绑定的产品列表 */
  Items: FenceBindProductItem[];
}

declare interface CreateFenceBindResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFreeCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存套餐ID：lye1w3d：低功耗事件3天周套餐。ye1w3d：事件3天周套餐 */
  PackageId: string;
  /** 如果当前设备已开启云存套餐，Override=1会使用新套餐覆盖原有套餐。不传此参数则默认为0。 */
  Override?: number;
  /** 套餐列表顺序：PackageQueue=front会立即使用新购买的套餐，新购套餐结束后，列表中下一个未过期的套餐继续生效；PackageQueue=end会等设备当前所有已购买套餐过期后才会生效新购套餐。与Override参数不能同时使用。 */
  PackageQueue?: string;
  /** 订单id */
  OrderId?: string;
  /** 通道ID */
  ChannelId?: number;
  /** 云存视频存储区域，国内默认为ap-guangzhou。海外默认为东南亚ap-singapore，可选美东na-ashburn、欧洲eu-frankfurt。 */
  StorageRegion?: string;
}

declare interface CreateFreeCloudStorageResponse {
  /** 订单金额，单位为分 */
  Price?: number | null;
  /** 支付金额，单位为分 */
  Amount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIotVideoCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存套餐ID：yc1m3d ： 全时3天存储月套餐。yc1m7d ： 全时7天存储月套餐。yc1m30d ：全时30天存储月套餐。yc1y3d ：全时3天存储年套餐。yc1y7d ：全时7天存储年套餐。yc1y30d ：全时30天存储年套餐。ye1m3d ：事件3天存储月套餐。ye1m7d ：事件7天存储月套餐。ye1m30d ：事件30天存储月套餐 。ye1y3d ：事件3天存储年套餐。ye1y7d ：事件7天存储年套餐。ye1y30d ：事件30天存储年套餐。yc1w7d : 全时7天存储周套餐。ye1w7d : 事件7天存储周套餐。lye1m3d：低功耗事件3天月套餐。lye1m7d：低功耗事件7天月套餐。lye1m30d：低功耗事件30天月套餐。lye1y3d：低功耗事件3天年套餐。lye1y7d：低功耗事件7天年套餐。lye1y30d：低功耗事件30天年套餐。 */
  PackageId: string;
  /** 如果当前设备已开启云存套餐，Override=1会使用新套餐覆盖原有套餐。不传此参数则默认为0。 */
  Override?: number;
  /** 套餐列表顺序：PackageQueue=front会立即使用新购买的套餐，新购套餐结束后，列表中下一个未过期的套餐继续生效；PackageQueue=end会等设备当前所有已购买套餐过期后才会生效新购套餐。与Override参数不能同时使用。 */
  PackageQueue?: string;
  /** 订单id */
  OrderId?: string;
  /** 通道ID */
  ChannelId?: number;
  /** 云存视频存储区域，国内默认为ap-guangzhou。海外默认为东南亚ap-singapore，可选美东na-ashburn、欧洲eu-frankfurt。 */
  StorageRegion?: string;
}

declare interface CreateIotVideoCloudStorageResponse {
  /** 订单金额，单位为分 */
  Price?: number | null;
  /** 支付金额，单位为分 */
  Amount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoRaFrequencyRequest {
  /** 频点配置名称 */
  FreqName?: string;
  /** 数据上行信道 */
  ChannelsDataUp?: number[];
  /** 数据下行RX1信道 */
  ChannelsDataRX1?: number[];
  /** 数据下行RX2信道 */
  ChannelsDataRX2?: number[];
  /** 入网上行信道 */
  ChannelsJoinUp?: number[];
  /** 入网下行RX1信道 */
  ChannelsJoinRX1?: number[];
  /** 入网下行RX2信道 */
  ChannelsJoinRX2?: number[];
  /** 频点配置描述 */
  Description?: string;
}

declare interface CreateLoRaFrequencyResponse {
  /** LoRa频点信息 */
  Data: LoRaFrequencyEntry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoRaGatewayRequest {
  /** LoRa 网关Id */
  GatewayId: string;
  /** 网关名称 */
  Name: string;
  /** 详情描述 */
  Description: string;
  /** 位置坐标 */
  Location: LoRaGatewayLocation;
  /** 位置信息 */
  Position?: string;
  /** 位置详情 */
  PositionDetails?: string;
  /** 是否公开 */
  IsPublic?: boolean;
  /** 频点ID */
  FrequencyId?: string;
}

declare interface CreateLoRaGatewayResponse {
  /** LoRa 网关信息 */
  Gateway: LoRaGatewayItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePositionFenceRequest {
  /** 位置空间Id */
  SpaceId: string;
  /** 围栏名称 */
  FenceName: string;
  /** 围栏区域信息，采用 GeoJSON 格式 */
  FenceArea: string;
  /** 围栏描述 */
  FenceDesc?: string;
}

declare interface CreatePositionFenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePositionSpaceRequest {
  /** 项目ID */
  ProjectId: string;
  /** 空间名称 */
  SpaceName: string;
  /** 授权类型，0：只读 1：读写 */
  AuthorizeType: number;
  /** 产品列表 */
  ProductIdList: string[];
  /** 描述 */
  Description?: string;
  /** 缩略图 */
  Icon?: string;
}

declare interface CreatePositionSpaceResponse {
  /** 空间Id */
  SpaceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** 项目名称 */
  ProjectName: string;
  /** 项目描述 */
  ProjectDesc: string;
  /** 实例ID，不带实例ID，默认为公共实例 */
  InstanceId?: string;
}

declare interface CreateProjectResponse {
  /** 返回信息 */
  Project: ProjectEntry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStudioProductRequest {
  /** 产品名称，名称不能和已经存在的产品名称重复。命名规则：[a-zA-Z0-9:_-]{1,32} */
  ProductName: string;
  /** 产品分组模板ID , ( 自定义模板填写1 , 控制台调用会使用预置的其他ID) */
  CategoryId: number;
  /** 产品类型 填写 ( 0 普通产品 ， 5 网关产品) */
  ProductType: number;
  /** 加密类型 ，1表示证书认证，2表示秘钥认证，21表示TID认证-SE方式，22表示TID认证-软加固方式 */
  EncryptionType: string;
  /** 连接类型 可以填写 wifi、wifi-ble、cellular、5g、lorawan、ble、ethernet、wifi-ethernet、else、sub_zigbee、sub_ble、sub_433mhz、sub_else、sub_blemesh */
  NetType: string;
  /** 数据协议 (1 使用物模型 2 为自定义) */
  DataProtocol: number;
  /** 产品描述 */
  ProductDesc: string;
  /** 产品的项目ID */
  ProjectId: string;
  /** 平均传输速率 */
  Rate?: string;
  /** 期限 */
  Period?: string;
}

declare interface CreateStudioProductResponse {
  /** 产品描述 */
  Product?: ProductEntry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTRTCSignaturesWithRoomIdRequest {
  /** TRTC进房间的用户名称数组，数组元素不可重复，最长不超过 10 个。 */
  TRTCUserIds: string[];
  /** 房间id */
  RoomId: string;
}

declare interface CreateTRTCSignaturesWithRoomIdResponse {
  /** 返回参数数组 */
  TRTCParamList?: TRTCParams[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicPolicyRequest {
  /** 产品ID */
  ProductId: string;
  /** Topic名称 */
  TopicName: string;
  /** Topic权限，1发布，2订阅，3订阅和发布 */
  Privilege: number;
}

declare interface CreateTopicPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
  /** 规则内容 */
  TopicRulePayload: TopicRulePayload;
}

declare interface CreateTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudStorageEventRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 事件id */
  EventId: string;
  /** 开始时间，unix时间 */
  StartTime: number;
  /** 结束时间，unix时间 */
  EndTime: number;
  /** 用户ID */
  UserId?: string;
  /** 通道ID */
  ChannelId?: number;
}

declare interface DeleteCloudStorageEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDeviceRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 设备名称。 */
  DeviceName: string;
  /** 是否删除绑定设备 */
  ForceDelete?: boolean;
}

declare interface DeleteDeviceResponse {
  /** 删除的结果代码 */
  ResultCode: string | null;
  /** 删除的结果信息 */
  ResultMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDevicesRequest {
  /** 多个设备标识 */
  DevicesItems: DevicesItem[];
}

declare interface DeleteDevicesResponse {
  /** 删除的结果代码 */
  ResultCode: string | null;
  /** 删除的结果信息 */
  ResultMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFenceBindRequest {
  /** 围栏Id */
  FenceId: number;
  /** 围栏绑定的产品信息 */
  Items: FenceBindProductItem[];
}

declare interface DeleteFenceBindResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoRaFrequencyRequest {
  /** 频点唯一ID */
  FreqId?: string;
}

declare interface DeleteLoRaFrequencyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoRaGatewayRequest {
  /** LoRa 网关 Id */
  GatewayId: string;
}

declare interface DeleteLoRaGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePositionFenceRequest {
  /** 位置空间Id */
  SpaceId: string;
  /** 围栏Id */
  FenceId: number;
}

declare interface DeletePositionFenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePositionSpaceRequest {
  /** 位置空间Id */
  SpaceId: string;
}

declare interface DeletePositionSpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface DeleteProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteStudioProductRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DeleteStudioProductResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicPolicyRequest {
  /** 产品ID */
  ProductId: string;
  /** Topic名称 */
  TopicName: string;
}

declare interface DeleteTopicPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTopicRuleRequest {
  /** 规则名 */
  RuleName: string;
}

declare interface DeleteTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActivateDeviceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeActivateDeviceResponse {
  /** 设备激活详情信息 */
  Data: ActivateDeviceInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActivateLicenseServiceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 激活码类型 */
  LicenseType?: string;
}

declare interface DescribeActivateLicenseServiceResponse {
  /** 增值服务激活码信息 */
  Data?: LicenseServiceNumInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchProductionRequest {
  /** 产品ID */
  ProductId: string;
  /** 量产ID */
  BatchProductionId: string;
}

declare interface DescribeBatchProductionResponse {
  /** 量产数量。 */
  BatchCnt?: number;
  /** 烧录方式。 */
  BurnMethod?: number;
  /** 创建时间。 */
  CreateTime?: number;
  /** 下载URL。 */
  DownloadUrl?: string;
  /** 生成方式。 */
  GenerationMethod?: number;
  /** 上传URL。 */
  UploadUrl?: string;
  /** 成功数 */
  SuccessCount?: number | null;
  /** 量产最后失败原因 */
  LastFailedReason?: string | null;
  /** 量产状态 0：任务创建，未量产；1：处理中；2：量产结束上传结果中；3：任务完成 */
  Status?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBindedProductsRequest {
  /** 网关产品ID */
  GatewayProductId: string;
  /** 分页偏移量 */
  Offset: number;
  /** 分页大小 */
  Limit: number;
  /** 是否跨账号绑定产品 */
  ProductSource?: number;
}

declare interface DescribeBindedProductsResponse {
  /** 当前分页的子产品数组 */
  Products: BindProductInfo[];
  /** 绑定的子产品总数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageAIServiceCallbackRequest {
  /** 产品 ID */
  ProductId: string;
}

declare interface DescribeCloudStorageAIServiceCallbackResponse {
  /** 推送类型。http：HTTP 回调 */
  Type?: string;
  /** HTTP 回调 URL */
  CallbackUrl?: string | null;
  /** HTTP 回调鉴权 Token */
  CallbackToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageAIServiceRequest {
  /** 产品 ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩 */
  ServiceType: string;
}

declare interface DescribeCloudStorageAIServiceResponse {
  /** 云存 AI 套餐类型。可能取值：- `1`：全时套餐- `2`：事件套餐- `3`：低功耗套餐 */
  Type?: number;
  /** 云存 AI 套餐生效状态。可能取值：- `0`：未开通或已过期- `1`：生效中 */
  Status?: number;
  /** 云存 AI 套餐过期时间 UNIX 时间戳 */
  ExpireTime?: number;
  /** 用户 ID */
  UserId?: string;
  /** 视频分析启用状态 */
  Enabled?: boolean;
  /** 视频分析配置参数 */
  Config?: string;
  /** 视频分析识别区域 */
  ROI?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageAIServiceTaskRequest {
  /** 任务 ID */
  TaskId: string;
}

declare interface DescribeCloudStorageAIServiceTaskResponse {
  /** 任务信息 */
  TaskInfo?: CloudStorageAIServiceTask;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageAIServiceTasksRequest {
  /** 产品 ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩- `VideoToText`：视频语义理解 */
  ServiceType: string;
  /** 分页拉取数量 */
  Limit: number;
  /** 分页拉取偏移 */
  Offset?: number;
  /** 任务状态。可选值：- （不传）：查询全部状态的任务- `1`：失败- `2`：成功但结果为空- `3`：成功且结果非空- `4`：执行中 */
  Status?: number;
  /** 用户 ID */
  UserId?: string;
  /** 通道 ID */
  ChannelId?: number;
  /** 设备名称列表。当需要同时查询多台设备的任务列表时传入，优先级高于参数 `DeviceName` */
  DeviceNames?: string[];
  /** 查询任务时间范围的起始时间（秒级 UNIX 时间戳） */
  StartTime?: number;
  /** 查询任务时间范围的结束时间（秒级 UNIX 时间戳） */
  EndTime?: number;
  /** 下载 URL 的过期时间。若传入该参数，则响应中将包含所有文件的下载 URL */
  FileURLExpireTime?: number;
}

declare interface DescribeCloudStorageAIServiceTasksResponse {
  /** 任务列表 */
  Tasks?: CloudStorageAIServiceTask[];
  /** 任务数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageDateRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 用户ID */
  UserId?: string;
  /** 通道ID */
  ChannelId?: number;
}

declare interface DescribeCloudStorageDateResponse {
  /** 云存日期数组，["2021-01-05","2021-01-06"] */
  Data?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageEventsRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h */
  StartTime?: number;
  /** 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间 */
  EndTime?: number;
  /** 请求上下文, 用作查询游标 */
  Context?: string;
  /** 查询数据项目的最大数量, 默认为10。假设传Size=10，返回的实际事件数量为N，则 5 <= N <= 10。 */
  Size?: number;
  /** 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。 */
  EventId?: string;
  /** 用户ID */
  UserId?: string;
  /** 通道ID 非NVR设备则不填 NVR设备则必填 默认为无 */
  ChannelId?: number;
}

declare interface DescribeCloudStorageEventsResponse {
  /** 云存事件列表 */
  Events?: CloudStorageEvent[];
  /** 请求上下文, 用作查询游标 */
  Context?: string;
  /** 拉取结果是否已经结束 */
  Listover?: boolean;
  /** 内部结果数量，并不等同于事件总数。 */
  Total?: number;
  /** 视频播放URL */
  VideoURL?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageEventsWithAITasksRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 事件关联的视频 AI 分析服务类型（支持多选）。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩- `VideoToText`：视频语义理解 */
  ServiceTypes: string[];
  /** 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h */
  StartTime?: number;
  /** 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间 */
  EndTime?: number;
  /** 请求上下文, 用作查询游标 */
  Context?: string;
  /** 查询数据项目的最大数量, 默认为10。假设传Size=10，返回的实际事件数量为N，则 5 <= N <= 10。 */
  Size?: number;
  /** 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。 */
  EventId?: string;
  /** 用户ID */
  UserId?: string;
  /** 通道ID 非NVR设备则不填 NVR设备则必填 默认为无 */
  ChannelId?: number;
}

declare interface DescribeCloudStorageEventsWithAITasksResponse {
  /** 云存事件列表 */
  Events?: CloudStorageEventWithAITasks[];
  /** 请求上下文, 用作查询游标 */
  Context?: string;
  /** 拉取结果是否已经结束 */
  Listover?: boolean;
  /** 内部结果数量，并不等同于事件总数。 */
  Total?: number;
  /** 视频播放URL */
  VideoURL?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageMultiThumbnailRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 多个缩略图文件名根据 | 分割 */
  MultiThumbnail: string;
}

declare interface DescribeCloudStorageMultiThumbnailResponse {
  /** 缩略图访问地址 */
  ThumbnailURLInfoList?: ThumbnailURLInfoList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageOrderRequest {
  /** 订单id */
  OrderId: string;
}

declare interface DescribeCloudStorageOrderResponse {
  /** 云存套餐开始时间 */
  StartTime?: number | null;
  /** 云存套餐过期时间 */
  ExpireTime?: number | null;
  /** 套餐id */
  PackageId?: string | null;
  /** 套餐状态0：等待生效1: 已过期2:生效 */
  Status?: number;
  /** 通道id */
  ChannelId?: number;
  /** 订单金额，单位为分 */
  Price?: number | null;
  /** 支付金额，单位为分 */
  Amount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStoragePackageConsumeDetailsRequest {
  /** 开始日期 */
  StartDate: string;
  /** 结束日期 */
  EndDate: string;
}

declare interface DescribeCloudStoragePackageConsumeDetailsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStoragePackageConsumeStatsRequest {
  /** 开始日期 */
  StartDate: string;
  /** 结束日期，开始与结束日期间隔不可超过一年 */
  EndDate: string;
}

declare interface DescribeCloudStoragePackageConsumeStatsResponse {
  /** 统计列表详情 */
  Stats?: PackageConsumeStat[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存用户ID */
  UserId?: string;
  /** 通道ID 非NVR设备不填 NVR设备必填 默认为无 */
  ChannelId?: number;
}

declare interface DescribeCloudStorageResponse {
  /** 云存开启状态，1为开启，0为未开启或已过期 */
  Status?: number;
  /** 云存类型，1为全时云存，2为事件云存 */
  Type?: number;
  /** 云存套餐过期时间 */
  ExpireTime?: number;
  /** 云存回看时长 */
  ShiftDuration?: number;
  /** 云存用户ID */
  UserId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageStreamDataRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 图片流事件开始时间 */
  StartTime: number;
}

declare interface DescribeCloudStorageStreamDataResponse {
  /** 图片流视频地址 */
  VideoStream?: string;
  /** 图片流音频地址 */
  AudioStream?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageThumbnailListRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 缩略图文件名列表 */
  ThumbnailList: string[];
}

declare interface DescribeCloudStorageThumbnailListResponse {
  /** 缩略图访问地址 */
  ThumbnailURLInfoList?: ThumbnailURLInfoList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageThumbnailRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 缩略图文件名 */
  Thumbnail: string;
}

declare interface DescribeCloudStorageThumbnailResponse {
  /** 缩略图访问地址 */
  ThumbnailURL?: string;
  /** 缩略图访问地址的过期时间 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageTimeRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存日期，例如"2020-01-05" */
  Date: string;
  /** 开始时间，unix时间 */
  StartTime?: number;
  /** 结束时间，unix时间 */
  EndTime?: number;
  /** 用户ID */
  UserId?: string;
  /** 通道ID */
  ChannelId?: number;
}

declare interface DescribeCloudStorageTimeResponse {
  /** 接口返回数据 */
  Data?: CloudStorageTimeData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudStorageUsersRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 分页拉取数量 */
  Limit: number;
  /** 分页拉取偏移 */
  Offset: number;
}

declare interface DescribeCloudStorageUsersResponse {
  /** 用户总数 */
  TotalCount?: number;
  /** 用户信息 */
  Users?: CloudStorageUserInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceBindGatewayRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名 */
  DeviceName: string;
}

declare interface DescribeDeviceBindGatewayResponse {
  /** 网关产品ID */
  GatewayProductId: string | null;
  /** 网关设备名 */
  GatewayDeviceName: string | null;
  /** 网关产品名称 */
  GatewayName: string | null;
  /** 设备对应产品所属的主账号名称 */
  GatewayProductOwnerName: string | null;
  /** 设备对应产品所属的主账号 UIN */
  GatewayProductOwnerUin: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceDataHistoryRequest {
  /** 区间开始时间（Unix 时间戳，毫秒级） */
  MinTime: number;
  /** 区间结束时间（Unix 时间戳，毫秒级） */
  MaxTime: number;
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 属性字段名称，对应数据模板中功能属性的标识符 */
  FieldName: string;
  /** 返回条数 */
  Limit?: number;
  /** 检索上下文 */
  Context?: string;
}

declare interface DescribeDeviceDataHistoryResponse {
  /** 属性字段名称，对应数据模板中功能属性的标识符 */
  FieldName: string | null;
  /** 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。 */
  Listover: boolean | null;
  /** 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据 */
  Context: string | null;
  /** 历史数据结果数组，返回对应时间点及取值。 */
  Results: DeviceDataHistoryItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceDataRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 设备ID，该字段有值将代替 ProductId/DeviceName */
  DeviceId?: string;
}

declare interface DescribeDeviceDataResponse {
  /** 设备数据 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceFirmWareRequest {
  /** 产品ID。 */
  ProductId: string;
  /** 设备名称。 */
  DeviceName: string;
}

declare interface DescribeDeviceFirmWareResponse {
  /** 固件信息 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceFirmwaresRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名 */
  DeviceName: string;
}

declare interface DescribeDeviceFirmwaresResponse {
  /** 固件信息列表 */
  Firmwares: DeviceFirmwareInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceLocationSolveRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 定位解析类型，wifi或GNSSNavigation */
  LocationType: string;
  /** LoRaEdge卫星导航电文 */
  GNSSNavigation?: string;
  /** wifi信息 */
  WiFiInfo?: WifiInfo[];
}

declare interface DescribeDeviceLocationSolveResponse {
  /** 经度 */
  Longitude: number;
  /** 纬度 */
  Latitude: number;
  /** 类型 */
  LocationType: string;
  /** 误差精度预估，单位为米 */
  Accuracy: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicePackagesRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 分页拉取数量 */
  Limit: number;
  /** 分页拉取偏移 */
  Offset: number;
  /** 用户id */
  CSUserId?: string;
  /** 通道id */
  ChannelId?: number;
}

declare interface DescribeDevicePackagesResponse {
  /** 有效云存套餐数量 */
  TotalCount?: number;
  /** 有效云存套餐列表 */
  Packages?: PackageInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicePositionListRequest {
  /** 产品标识列表 */
  ProductIdList: string[];
  /** 坐标类型 */
  CoordinateType?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 分页的大小 */
  Limit?: number;
}

declare interface DescribeDevicePositionListResponse {
  /** 产品设备位置信息列表 */
  Positions: ProductDevicesPositionItem[];
  /** 产品设备位置信息的数目 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名 */
  DeviceName: string;
  /** 设备ID，该字段有值将代替 ProductId/DeviceName */
  DeviceId?: string;
}

declare interface DescribeDeviceResponse {
  /** 设备信息 */
  Device?: DeviceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFenceBindListRequest {
  /** 围栏Id */
  FenceId: number;
  /** 翻页偏移量，0起始 */
  Offset?: number;
  /** 最大返回结果数 */
  Limit?: number;
}

declare interface DescribeFenceBindListResponse {
  /** 围栏绑定的产品设备列表 */
  List: FenceBindProductItem[];
  /** 围栏绑定的设备总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFenceEventListRequest {
  /** 围栏告警信息的查询起始时间，Unix时间，单位为毫秒 */
  StartTime: number;
  /** 围栏告警信息的查询结束时间，Unix时间，单位为毫秒 */
  EndTime: number;
  /** 围栏Id */
  FenceId?: number;
  /** 翻页偏移量，0起始 */
  Offset?: number;
  /** 最大返回结果数 */
  Limit?: number;
  /** 告警对应的产品Id */
  ProductId?: string;
  /** 告警对应的设备名称 */
  DeviceName?: string;
}

declare interface DescribeFenceEventListResponse {
  /** 围栏告警事件列表 */
  List: FenceEventItem[];
  /** 围栏告警事件总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirmwareRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
}

declare interface DescribeFirmwareResponse {
  /** 固件版本号 */
  Version?: string;
  /** 产品ID */
  ProductId?: string;
  /** 固件名称 */
  Name?: string | null;
  /** 固件描述 */
  Description?: string | null;
  /** 固件Md5值 */
  Md5sum?: string | null;
  /** 固件上传的秒级时间戳 */
  Createtime?: number | null;
  /** 产品名称 */
  ProductName?: string;
  /** 固件升级模块 */
  FwType?: string | null;
  /** 固件用户自定义配置信息 */
  UserDefined?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirmwareTaskRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 固件任务ID */
  TaskId: number;
}

declare interface DescribeFirmwareTaskResponse {
  /** 固件任务ID */
  TaskId?: number | null;
  /** 固件任务状态 */
  Status?: number | null;
  /** 固件任务创建时间，单位：秒 */
  CreateTime?: number | null;
  /** 固件任务升级类型 */
  Type?: number | null;
  /** 产品名称 */
  ProductName?: string | null;
  /** 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级） */
  UpgradeMode?: string | null;
  /** 产品ID */
  ProductId?: string | null;
  /** 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回 */
  OriginalVersion?: string | null;
  /** 创建账号ID */
  CreateUserId?: number | null;
  /** 创建账号ID昵称 */
  CreatorNickName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirmwareUpdateStatusRequest {
  /** 产品 ID。 */
  ProductId: string;
  /** 设备名。 */
  DeviceName: string;
}

declare interface DescribeFirmwareUpdateStatusResponse {
  /** 升级任务源版本。 */
  OriVersion?: string | null;
  /** 升级任务目标版本。 */
  DstVersion?: string | null;
  /** 升级状态：- 0：设备离线。- 1：待处理。- 2：消息下发成功。- 3：下载中。- 4：烧录中。- 5：失败。- 6：升级完成。- 7：正在处理中。- 8：等待用户确认。- 10：升级超时。- 20：下载完成。 */
  Status?: number;
  /** 进度 */
  Percent?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFreeCloudStorageNumRequest {
}

declare interface DescribeFreeCloudStorageNumResponse {
  /** 套餐包信息 */
  PackageInfos?: CloudStoragePackageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayBindDevicesRequest {
  /** 网关设备的产品ID */
  GatewayProductId: string;
  /** 网关设备的设备名 */
  GatewayDeviceName: string;
  /** 子产品的ID */
  ProductId: string;
  /** 分页的偏移 */
  Offset: number;
  /** 分页的页大小 */
  Limit: number;
}

declare interface DescribeGatewayBindDevicesResponse {
  /** 子设备信息。 */
  Devices: BindDeviceInfo[];
  /** 子设备总数。 */
  Total: number;
  /** 子设备所属的产品名。 */
  ProductName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewaySubDeviceListRequest {
  /** 网关产品ID */
  GatewayProductId: string;
  /** 网关设备名称 */
  GatewayDeviceName: string;
  /** 分页偏移 */
  Offset: number;
  /** 分页的大小 */
  Limit: number;
}

declare interface DescribeGatewaySubDeviceListResponse {
  /** 设备的总数 */
  Total: number | null;
  /** 设备列表 */
  DeviceList: FamilySubDevice[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewaySubProductsRequest {
  /** 网关产品ID */
  GatewayProductId: string;
  /** 分页的偏移量 */
  Offset?: number;
  /** 分页的大小 */
  Limit?: number;
  /** 项目Id */
  ProjectId?: string;
  /** 是否跨账号产品 */
  ProductSource?: number;
}

declare interface DescribeGatewaySubProductsResponse {
  /** 当前分页的可绑定或解绑的产品信息。 */
  Products?: BindProductInfo[];
  /** 可绑定或解绑的产品总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 附加查询返回包含字段值，不传返回0，有效值 ProductNum、ProjectNum、UsedDeviceNum、TotalDevice、ActivateDevice */
  Include?: string[];
  /** 项目ID */
  ProjectId?: string;
  /** 产品ID，-1 代表全部产品 */
  ProductId?: string;
}

declare interface DescribeInstanceResponse {
  /** 实例信息 */
  Data?: InstanceDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoRaFrequencyRequest {
  /** 频点唯一ID */
  FreqId?: string;
}

declare interface DescribeLoRaFrequencyResponse {
  /** 返回详情项 */
  Data: LoRaFrequencyEntry | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelDefinitionRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DescribeModelDefinitionResponse {
  /** 产品数据模板 */
  Model: ProductModelDefinition;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackageConsumeTaskRequest {
  /** 任务id */
  TaskId: number;
}

declare interface DescribePackageConsumeTaskResponse {
  /** 文件下载的url，文件详情是套餐包消耗详情 */
  URL?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackageConsumeTasksRequest {
  /** 分页单页量 */
  Limit: number;
  /** 分页的偏移量，第一页为0 */
  Offset: number;
}

declare interface DescribePackageConsumeTasksResponse {
  /** 总数 */
  TotalCount?: number;
  /** 任务列表 */
  List?: PackageConsumeTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePositionFenceListRequest {
  /** 位置空间Id */
  SpaceId: string;
  /** 翻页偏移量，0起始 */
  Offset?: number;
  /** 最大返回结果数 */
  Limit?: number;
}

declare interface DescribePositionFenceListResponse {
  /** 围栏列表 */
  List: PositionFenceInfo[] | null;
  /** 围栏数量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductCloudStorageAIServiceRequest {
  /** 产品 ID */
  ProductId: string;
}

declare interface DescribeProductCloudStorageAIServiceResponse {
  /** 开通状态 */
  Enabled?: boolean;
  /** 当前账号是否可开通 */
  Available?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface DescribeProjectResponse {
  /** 返回信息 */
  Project?: ProjectEntryEx;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceFenceEventListRequest {
  /** 位置空间Id */
  SpaceId: string;
  /** 围栏告警信息的查询起始时间，Unix时间，单位为毫秒 */
  StartTime: number;
  /** 围栏告警信息的查询结束时间，Unix时间，单位为毫秒 */
  EndTime: number;
  /** 翻页偏移量，0起始 */
  Offset?: number;
  /** 最大返回结果数 */
  Limit?: number;
}

declare interface DescribeSpaceFenceEventListResponse {
  /** 围栏告警事件列表 */
  List: FenceEventItem[] | null;
  /** 围栏告警事件总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStudioProductRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DescribeStudioProductResponse {
  /** 产品详情 */
  Product?: ProductEntry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicPolicyRequest {
  /** 产品ID */
  ProductId: string;
  /** Topic名字 */
  TopicName: string;
}

declare interface DescribeTopicPolicyResponse {
  /** 产品ID */
  ProductId?: string;
  /** Topic名称 */
  TopicName?: string;
  /** Topic权限 */
  Privilege?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopicRuleRequest {
  /** 规则名称。 */
  RuleName: string;
}

declare interface DescribeTopicRuleResponse {
  /** 规则描述。 */
  Rule?: TopicRule | null;
  /** 规则绑定的标签 */
  CamTag?: CamTag[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoLicenseRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeVideoLicenseResponse {
  /** 视频激活码分类概览 */
  License?: VideoLicenseEntity[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DirectBindDeviceInFamilyRequest {
  /** 小程序appid */
  IotAppID: string;
  /** 用户ID */
  UserID: string;
  /** 家庭ID */
  FamilyId: string;
  /** 产品ID */
  ProductId: string;
  /** 设备名 */
  DeviceName: string;
  /** 房间ID */
  RoomId?: string;
}

declare interface DirectBindDeviceInFamilyResponse {
  /** 返回设备信息 */
  AppDeviceInfo: AppDeviceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
}

declare interface DisableTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DismissRoomByStrRoomIdFromTRTCRequest {
  /** 房间id */
  RoomId: string;
}

declare interface DismissRoomByStrRoomIdFromTRTCResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
}

declare interface EnableTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenSingleDeviceSignatureOfPublicRequest {
  /** 设备所属的产品ID */
  ProductId: string;
  /** 需要绑定的设备 */
  DeviceName: string;
  /** 设备绑定签名的有效时间,以秒为单位。取值范围：0 < Expire <= 86400，Expire == -1（十年） */
  Expire: number;
}

declare interface GenSingleDeviceSignatureOfPublicResponse {
  /** 设备签名 */
  DeviceSignature: DeviceSignatureInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateCloudStorageAIServiceTaskFileURLRequest {
  /** 产品 ID */
  TaskId: string;
  /** 文件名 */
  FileName: string;
  /** 过期时间 UNIX 时间戳（默认值为当前时间 1 小时后，最大不超过文件所属任务的过期时间） */
  ExpireTime?: number;
}

declare interface GenerateCloudStorageAIServiceTaskFileURLResponse {
  /** 文件下载 URL */
  FileURL?: string;
  /** 过期时间 UNIX 时间戳（最大不超过文件所属任务的过期时间） */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateSignedVideoURLRequest {
  /** 视频播放原始URL地址 */
  VideoURL: string;
  /** 播放链接过期时间 */
  ExpireTime: number;
  /** 通道ID 非NVR设备不填 NVR设备必填 默认为无 */
  ChannelId?: number;
}

declare interface GenerateSignedVideoURLResponse {
  /** 视频防盗链播放URL */
  SignedVideoURL?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAuthMiniProgramAppListRequest {
  /** appId */
  MiniProgramAppId?: string;
  /** 页码 */
  Offset?: number;
  /** 每页大小 */
  Limit?: number;
}

declare interface GetAuthMiniProgramAppListResponse {
  /** 小程序列表 */
  MiniProgramList?: AuthMiniProgramAppInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBatchProductionsListRequest {
  /** 项目ID */
  ProjectId: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量限制 */
  Limit?: number;
}

declare interface GetBatchProductionsListResponse {
  /** 返回详情信息。 */
  BatchProductions: BatchProductionInfo[] | null;
  /** 返回数量。 */
  TotalCnt: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCOSURLRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本 */
  FirmwareVersion: string;
  /** 文件大小 */
  FileSize?: number;
}

declare interface GetCOSURLResponse {
  /** 固件URL */
  Url: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDeviceListRequest {
  /** 需要查看设备列表的产品ID, -1代表ProjectId来筛选 */
  ProductId: string;
  /** 分页偏移 */
  Offset?: number;
  /** 分页的大小，数值范围 10-100 */
  Limit?: number;
  /** 设备固件版本号，若不带此参数会返回所有固件版本的设备。传"None-FirmwareVersion"查询无版本号的设备 */
  FirmwareVersion?: string;
  /** 需要过滤的设备名称 */
  DeviceName?: string;
  /** 项目ID。产品 ID 为 -1 时，该参数必填 */
  ProjectId?: string;
  /** 每次请求的Filters的上限为10，Filter.Values的上限为1。 */
  Filters?: Filter[];
}

declare interface GetDeviceListResponse {
  /** 返回的设备列表, 注意列表设备的 DevicePsk 为空, 要获取设备的 DevicePsk 请使用 DescribeDevice */
  Devices?: DeviceInfo[] | null;
  /** 产品下的设备总数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDeviceLocationHistoryRequest {
  /** 产品Id */
  ProductId: string;
  /** 设备名 */
  DeviceName: string;
  /** 查询起始时间，Unix时间，单位为毫秒 */
  StartTime: number;
  /** 查询结束时间，Unix时间，单位为毫秒 */
  EndTime: number;
  /** 坐标类型 */
  CoordinateType?: number;
}

declare interface GetDeviceLocationHistoryResponse {
  /** 历史位置列表 */
  Positions: PositionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDeviceSumStatisticsRequest {
  /** 项目id */
  ProjectId: string;
  /** 产品id列表，长度为0则拉取项目内全部产品 */
  ProductIds?: string[];
}

declare interface GetDeviceSumStatisticsResponse {
  /** 激活设备总数 */
  ActivationCount?: number;
  /** 在线设备总数 */
  OnlineCount?: number;
  /** 前一天激活设备数 */
  ActivationBeforeDay?: number;
  /** 前一天活跃设备数 */
  ActiveBeforeDay?: number;
  /** 前一周激活设备数 */
  ActivationWeekDayCount?: number;
  /** 前一周活跃设备数 */
  ActiveWeekDayCount?: number;
  /** 上一周激活设备数 */
  ActivationBeforeWeekDayCount?: number;
  /** 上一周活跃设备数 */
  ActiveBeforeWeekDayCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFamilyDeviceUserListRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
}

declare interface GetFamilyDeviceUserListResponse {
  /** 设备的用户列表 */
  UserList?: DeviceUser[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetGatewaySubDeviceListRequest {
  /** 网关产品ID */
  GatewayProductId: string;
  /** 网关设备名称 */
  GatewayDeviceName: string;
  /** 分页偏移 */
  Offset: number;
  /** 分页的大小 */
  Limit: number;
}

declare interface GetGatewaySubDeviceListResponse {
  /** 设备的总数 */
  Total: number | null;
  /** 设备列表 */
  DeviceList: FamilySubDevice | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLoRaGatewayListRequest {
  /** 是否是社区网关 */
  IsCommunity: boolean;
  /** 偏移量 */
  Offset?: number;
  /** 限制个数 */
  Limit?: number;
}

declare interface GetLoRaGatewayListResponse {
  /** 返回总数 */
  Total: number;
  /** 返回详情项 */
  Gateways: LoRaGatewayItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPositionSpaceListRequest {
  /** 项目Id */
  ProjectId: string;
  /** 翻页偏移量，0起始 */
  Offset: number;
  /** 最大返回结果数 */
  Limit: number;
}

declare interface GetPositionSpaceListResponse {
  /** 位置空间列表 */
  List?: PositionSpaceInfo[] | null;
  /** 位置空间数量 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetProjectListRequest {
  /** 偏移量 */
  Offset?: number;
  /** 个数限制 */
  Limit?: number;
  /** 实例ID */
  InstanceId?: string;
  /** 按项目ID搜索 */
  ProjectId?: string;
  /** 按产品ID搜索 */
  ProductId?: string;
  /** 加载 ProductCount、DeviceCount、ApplicationCount，可选值：ProductCount、DeviceCount、ApplicationCount，可多选 */
  Includes?: string[];
  /** 按项目名称搜索 */
  ProjectName?: string;
}

declare interface GetProjectListResponse {
  /** 项目列表 */
  Projects?: ProjectEntryEx[] | null;
  /** 列表项个数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetStudioProductListRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 产品DevStatus */
  DevStatus?: string;
  /** 偏移量 */
  Offset?: number;
  /** 数量限制 */
  Limit?: number;
}

declare interface GetStudioProductListResponse {
  /** 产品列表 */
  Products: ProductEntry[];
  /** 产品数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTWeCallActiveStatusRequest {
  /** 参数已弃用，不用传参 */
  MiniProgramAppId?: string;
  /** 设备列表 */
  DeviceList?: TWeCallInfo[];
}

declare interface GetTWeCallActiveStatusResponse {
  /** 激活状态 */
  TWeCallActiveInfos?: TWeCallActiveInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTopicRuleListRequest {
  /** 请求的页数 */
  PageNum: number;
  /** 分页的大小 */
  PageSize: number;
}

declare interface GetTopicRuleListResponse {
  /** 规则总数量 */
  TotalCnt?: number;
  /** 规则列表 */
  Rules?: TopicRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWechatDeviceTicketRequest {
  /** 产品ID */
  ProductId: string;
  /** 产品名称 */
  DeviceName: string;
  /** 是否第三方小程序 */
  IsThirdApp?: number;
  /** 模板ID */
  ModelId?: string;
  /** 小程序APPID */
  MiniProgramAppId?: string;
}

declare interface GetWechatDeviceTicketResponse {
  /** 微信设备信息 */
  WXDeviceInfo?: WXDeviceInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InheritCloudStorageUserRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 原始用户ID */
  UserId: string;
  /** 目标用户ID */
  ToUserId: string;
}

declare interface InheritCloudStorageUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeCloudStorageAIServiceTaskRequest {
  /** 产品 ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩- `VideoToText`：视频语义理解 */
  ServiceType: string;
  /** 待分析云存的起始时间 */
  StartTime: number;
  /** 待分析云存的结束时间 */
  EndTime: number;
  /** 通道 ID */
  ChannelId?: number;
  /** 视频分析配置参数 */
  Config?: string;
  /** 视频分析识别区域 */
  ROI?: string;
  /** 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等） */
  VideoURLs?: string[];
  /** 自定义任务 ID */
  CustomId?: string;
}

declare interface InvokeCloudStorageAIServiceTaskResponse {
  /** 任务是否执行完成 */
  Completed?: boolean;
  /** 任务 ID */
  TaskId?: string;
  /** 任务信息 */
  TaskInfo?: CloudStorageAIServiceTask;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeExternalSourceAIServiceTaskRequest {
  /** 产品 ID */
  ProductId: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩- `VideoToText`：视频语义理解 */
  ServiceType: string;
  /** 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等） */
  VideoURLs: string[];
  /** 自定义任务 ID */
  CustomId?: string;
  /** 视频分析配置参数 */
  Config?: string;
  /** 视频分析识别区域 */
  ROI?: string;
}

declare interface InvokeExternalSourceAIServiceTaskResponse {
  /** 任务是否执行完成 */
  Completed?: boolean;
  /** 任务 ID */
  TaskId?: string;
  /** 任务信息 */
  TaskInfo?: CloudStorageAIServiceTask | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListEventHistoryRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 搜索的事件类型：alert 表示告警，fault 表示故障，info 表示信息，为空则表示查询上述所有类型事件 */
  Type?: string;
  /** 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h */
  StartTime?: number;
  /** 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间 */
  EndTime?: number;
  /** 搜索上下文, 用作查询游标 */
  Context?: string;
  /** 单次获取的历史数据项目的最大数量, 缺省10 */
  Size?: number;
  /** 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。 */
  EventId?: string;
}

declare interface ListEventHistoryResponse {
  /** 搜索上下文, 用作查询游标 */
  Context: string | null;
  /** 搜索结果数量 */
  Total: number | null;
  /** 搜索结果是否已经结束 */
  Listover: boolean | null;
  /** 搜集结果集 */
  EventHistory: EventHistoryItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListFirmwaresRequest {
  /** 获取的页数 */
  PageNum: number;
  /** 分页的大小 */
  PageSize: number;
  /** 产品ID */
  ProductID?: string;
  /** 搜索过滤条件 */
  Filters?: SearchKeyword[];
}

declare interface ListFirmwaresResponse {
  /** 固件总数 */
  TotalCount?: number;
  /** 固件列表 */
  Firmwares?: FirmwareInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTopicPolicyRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface ListTopicPolicyResponse {
  /** Topic列表 */
  Topics?: TopicItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudStorageAIServiceCallbackRequest {
  /** 产品 ID */
  ProductId: string;
  /** 推送类型。可选值：- `http`：HTTP 回调 */
  Type: string;
  /** HTTP 回调 URL */
  CallbackUrl?: string;
  /** HTTP 回调鉴权 Token */
  CallbackToken?: string;
}

declare interface ModifyCloudStorageAIServiceCallbackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudStorageAIServiceRequest {
  /** 产品 ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩 */
  ServiceType: string;
  /** 视频分析启用状态 */
  Enabled?: boolean;
  /** 视频分析识别区域 */
  ROI?: string;
  /** 视频分析配置参数 */
  Config?: string;
}

declare interface ModifyCloudStorageAIServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFenceBindRequest {
  /** 围栏Id */
  FenceId: number;
  /** 围栏绑定的产品列表 */
  Items: FenceBindProductItem[];
}

declare interface ModifyFenceBindResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoRaFrequencyRequest {
  /** 频点唯一ID */
  FreqId?: string;
  /** 频点名称 */
  FreqName?: string;
  /** 频点描述 */
  Description?: string;
  /** 数据上行信道 */
  ChannelsDataUp?: number[];
  /** 数据下行信道RX1 */
  ChannelsDataRX1?: number[];
  /** 数据下行信道RX2 */
  ChannelsDataRX2?: number[];
  /** 入网上行信道 */
  ChannelsJoinUp?: number[];
  /** 入网下行信道RX1 */
  ChannelsJoinRX1?: number[];
  /** 入网下行信道RX2 */
  ChannelsJoinRX2?: number[];
}

declare interface ModifyLoRaFrequencyResponse {
  /** 频点信息 */
  Data: LoRaFrequencyEntry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoRaGatewayRequest {
  /** 描述信息 */
  Description: string;
  /** LoRa网关Id */
  GatewayId: string;
  /** LoRa网关位置坐标 */
  Location: LoRaGatewayLocation;
  /** LoRa网关名称 */
  Name: string;
  /** 是否公开可见 */
  IsPublic?: boolean;
  /** 位置信息 */
  Position?: string;
  /** 位置详情 */
  PositionDetails?: string;
  /** 频点ID */
  FrequencyId?: string;
}

declare interface ModifyLoRaGatewayResponse {
  /** 返回网关数据 */
  Gateway: LoRaGatewayItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModelDefinitionRequest {
  /** 产品ID */
  ProductId: string;
  /** 数据模板定义 */
  ModelSchema: string;
}

declare interface ModifyModelDefinitionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPositionFenceRequest {
}

declare interface ModifyPositionFenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPositionSpaceRequest {
  /** 位置空间Id */
  SpaceId: string;
  /** 位置空间名称 */
  SpaceName: string;
  /** 授权类型 */
  AuthorizeType: number;
  /** 产品列表 */
  ProductIdList: string[];
  /** 位置空间描述 */
  Description?: string;
  /** 缩略图 */
  Icon?: string;
}

declare interface ModifyPositionSpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProductCloudStorageAIServiceRequest {
  /** 产品 ID */
  ProductId: string;
  /** 开通状态 */
  Enabled?: boolean;
}

declare interface ModifyProductCloudStorageAIServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProjectRequest {
  /** 项目ID */
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 项目描述 */
  ProjectDesc: string;
}

declare interface ModifyProjectResponse {
  /** 项目详情 */
  Project: ProjectEntry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySpacePropertyRequest {
  /** 位置空间Id */
  SpaceId: string;
  /** 产品Id */
  ProductId: string;
  /** 产品属性 */
  Data: string;
}

declare interface ModifySpacePropertyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStudioProductRequest {
  /** 产品ID */
  ProductId: string;
  /** 产品名称 */
  ProductName: string;
  /** 产品描述 */
  ProductDesc: string;
  /** 模型ID */
  ModuleId: number;
  /** 是否打开二进制转Json功能, 取值为字符串 true/false */
  EnableProductScript?: string;
  /** 传1或者2；1代表强踢，2代表非强踢。传其它值不做任何处理 */
  BindStrategy?: number;
}

declare interface ModifyStudioProductResponse {
  /** 产品描述 */
  Product?: ProductEntry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicPolicyRequest {
  /** 产品ID */
  ProductId: string;
  /** 更新前Topic名 */
  TopicName: string;
  /** 更新后Topic名 */
  NewTopicName: string;
  /** Topic权限 */
  Privilege: number;
}

declare interface ModifyTopicPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
  /** 替换的规则包体 */
  TopicRulePayload: TopicRulePayload;
}

declare interface ModifyTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PauseTWeCallDeviceRequest {
  /** 设备列表 */
  DeviceList?: TWeCallInfo[];
}

declare interface PauseTWeCallDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishBroadcastMessageRequest {
  /** 产品ID */
  ProductId: string;
  /** 消息内容 */
  Payload: string;
  /** 消息质量等级 */
  Qos: number;
  /** ayload内容的编码格式，取值为base64或空。base64表示云端将收到的请求数据进行base64解码后下发到设备，空则直接将原始内容下发到设备 */
  PayloadEncoding?: string;
}

declare interface PublishBroadcastMessageResponse {
  /** 广播消息任务Id */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishFirmwareUpdateMessageRequest {
  /** 产品 ID。 */
  ProductID: string;
  /** 设备名称。 */
  DeviceName?: string;
}

declare interface PublishFirmwareUpdateMessageResponse {
  /** 请求状态 */
  Status?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishMessageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 消息发往的主题 */
  Topic: string;
  /** 云端下发到设备的控制报文 */
  Payload: string;
  /** 消息服务质量等级，取值为0或1 */
  Qos?: number;
  /** Payload的内容编码格式，取值为base64或空。base64表示云端将接收到的base64编码后的报文再转换成二进制报文下发至设备，为空表示不作转换，透传下发至设备 */
  PayloadEncoding?: string;
}

declare interface PublishMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishRRPCMessageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 消息内容，utf8编码 */
  Payload: string;
}

declare interface PublishRRPCMessageResponse {
  /** RRPC消息ID */
  MessageId: number | null;
  /** 设备回复的消息内容，采用base64编码 */
  PayloadBase64: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseStudioProductRequest {
  /** 产品ID */
  ProductId: string;
  /** 产品DevStatus */
  DevStatus: string;
}

declare interface ReleaseStudioProductResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveUserByRoomIdFromTRTCRequest {
  /** 房间id */
  RoomId: string;
  /** 用户名称数组，数组元素不可重复，最长不超过 10 个。 */
  TRTCUserIds: string[];
}

declare interface RemoveUserByRoomIdFromTRTCResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetCloudStorageAIServiceRequest {
  /** 产品 ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 云存 AI 服务类型。可选值：- `RealtimeObjectDetect`：目标检测- `Highlight`：视频浓缩 */
  ServiceType: string;
  /** 通道 ID */
  ChannelId?: number;
  /** 用户 ID */
  UserId?: string;
}

declare interface ResetCloudStorageAIServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetCloudStorageEventRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 用户ID */
  UserId?: string;
  /** 通道ID */
  ChannelId?: number;
}

declare interface ResetCloudStorageEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 通道ID 非NVR设备则不填 NVR设备则必填 默认为无 */
  ChannelId?: number;
  /** 云存用户Id，为空则为默认云存空间。 */
  UserId?: string;
}

declare interface ResetCloudStorageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetTWeCallDeviceRequest {
  /** 设备列表 */
  DeviceList?: TWeCallInfo[];
}

declare interface ResetTWeCallDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeWeCallDeviceRequest {
  /** 设备列表 */
  DeviceList?: TWeCallInfo[];
}

declare interface ResumeWeCallDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchPositionSpaceRequest {
  /** 项目Id */
  ProjectId: string;
  /** 位置空间名字 */
  SpaceName: string;
  /** 偏移量，从0开始 */
  Offset: number;
  /** 最大获取数量 */
  Limit: number;
}

declare interface SearchPositionSpaceResponse {
  /** 位置空间列表 */
  List: PositionSpaceInfo[] | null;
  /** 符合条件的位置空间个数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchStudioProductRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 列表Limit */
  Limit?: number;
  /** 列表Offset */
  Offset?: number;
  /** 产品Status */
  DevStatus?: string;
  /** 产品ID */
  ProductId?: string;
  /** 每次请求的Filters的上限为10，Filter.Values的上限为1。 */
  Filters?: Filter[];
}

declare interface SearchStudioProductResponse {
  /** 产品列表 */
  Products?: ProductEntry[];
  /** 产品数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchTopicRuleRequest {
  /** 规则名 */
  RuleName: string;
}

declare interface SearchTopicRuleResponse {
  /** 搜索到的规则总数 */
  TotalCnt?: number;
  /** 规则信息列表 */
  Rules?: TopicRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransferCloudStorageRequest {
  /** 产品ID */
  ProductId: string;
  /** 已开通云存的设备名称 */
  DeviceName: string;
  /** 未开通云存的设备名称 */
  ToDeviceName: string;
  /** 未开通云存的设备产品ID */
  ToProductId?: string;
}

declare interface TransferCloudStorageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransferTWeCallDeviceRequest {
  /** sn信息，product_deviceName */
  TransferInDevice?: string;
  /** sn信息，product_deviceName */
  TransferOutDevice?: string;
}

declare interface TransferTWeCallDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindDevicesRequest {
  /** 网关设备的产品ID */
  GatewayProductId: string;
  /** 网关设备的设备名 */
  GatewayDeviceName: string;
  /** 产品ID */
  ProductId: string;
  /** 设备名列表 */
  DeviceNames: string[];
}

declare interface UnbindDevicesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindProductsRequest {
  /** 网关产品ID */
  GatewayProductId: string;
  /** 待解绑的子产品ID数组 */
  ProductIds: string[];
}

declare interface UnbindProductsResponse {
  /** 绑定了待解绑的LoRa产品下的设备的网关设备列表 */
  GatewayDeviceNames: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDeviceTWeCallAuthorizeStatusRequest {
  /** TweCall授权状态：0未授权，1已授权 */
  Status?: number;
  /** 产品ID */
  ProductId?: string;
  /** 设备名 */
  DeviceName?: string;
  /** 微信用户的openId */
  WechatOpenId?: string;
}

declare interface UpdateDeviceTWeCallAuthorizeStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDevicesEnableStateRequest {
  /** 多个设备标识 */
  DevicesItems: DevicesItem[];
  /** 1：启用；0：禁用 */
  Status: number;
}

declare interface UpdateDevicesEnableStateResponse {
  /** 删除的结果代码 */
  ResultCode: string | null;
  /** 删除的结果信息 */
  ResultMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFirmwareRequest {
  /** 产品ID */
  ProductID: string;
  /** 设备名 */
  DeviceName: string;
  /** 固件新的版本号 */
  FirmwareVersion: string;
  /** 固件原版本号 */
  FirmwareOriVersion: string;
  /** 固件升级方式；0 静默升级 1 用户确认升级 不填默认静默升级 */
  UpgradeMethod?: number;
}

declare interface UpdateFirmwareResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFirmwareRequest {
  /** 产品ID */
  ProductID: string;
  /** 固件版本号 */
  FirmwareVersion: string;
  /** 固件的MD5值 */
  Md5sum: string;
  /** 固件的大小 */
  FileSize: number;
  /** 固件名称 */
  FirmwareName?: string;
  /** 固件描述 */
  FirmwareDescription?: string;
  /** 固件升级模块；可选值 mcu|moudule */
  FwType?: string;
  /** 固件用户自定义配置信息 */
  FirmwareUserDefined?: string;
}

declare interface UploadFirmwareResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Iotexplorer 物联网开发平台} */
declare interface Iotexplorer {
  (): Versions;
  /** 激活TWeCall {@link ActivateTWeCallLicenseRequest} {@link ActivateTWeCallLicenseResponse} */
  ActivateTWeCallLicense(data: ActivateTWeCallLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateTWeCallLicenseResponse>;
  /** 绑定云存用户 {@link BindCloudStorageUserRequest} {@link BindCloudStorageUserResponse} */
  BindCloudStorageUser(data: BindCloudStorageUserRequest, config?: AxiosRequestConfig): AxiosPromise<BindCloudStorageUserResponse>;
  /** 批量绑定子设备 {@link BindDevicesRequest} {@link BindDevicesResponse} */
  BindDevices(data: BindDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<BindDevicesResponse>;
  /** 批量绑定子产品 {@link BindProductsRequest} {@link BindProductsResponse} */
  BindProducts(data: BindProductsRequest, config?: AxiosRequestConfig): AxiosPromise<BindProductsResponse>;
  /** 异步调用设备行为 {@link CallDeviceActionAsyncRequest} {@link CallDeviceActionAsyncResponse} */
  CallDeviceActionAsync(data: CallDeviceActionAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<CallDeviceActionAsyncResponse>;
  /** 同步调用设备行为 {@link CallDeviceActionSyncRequest} {@link CallDeviceActionSyncResponse} */
  CallDeviceActionSync(data: CallDeviceActionSyncRequest, config?: AxiosRequestConfig): AxiosPromise<CallDeviceActionSyncResponse>;
  /** 取消分配TWeCall {@link CancelAssignTWeCallLicenseRequest} {@link CancelAssignTWeCallLicenseResponse} */
  CancelAssignTWeCallLicense(data: CancelAssignTWeCallLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<CancelAssignTWeCallLicenseResponse>;
  /** 查询设备可升级固件版本 {@link CheckFirmwareUpdateRequest} {@link CheckFirmwareUpdateResponse} */
  CheckFirmwareUpdate(data: CheckFirmwareUpdateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckFirmwareUpdateResponse>;
  /** 设备远程控制 {@link ControlDeviceDataRequest} {@link ControlDeviceDataResponse} */
  ControlDeviceData(data: ControlDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceDataResponse>;
  /** 创建量产任务 {@link CreateBatchProductionRequest} {@link CreateBatchProductionResponse} */
  CreateBatchProduction(data: CreateBatchProductionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchProductionResponse>;
  /** 开通设备云存AI分析服务 {@link CreateCloudStorageAIServiceRequest} {@link CreateCloudStorageAIServiceResponse} */
  CreateCloudStorageAIService(data: CreateCloudStorageAIServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudStorageAIServiceResponse>;
  /** 创建设备云存AI分析任务 {@link CreateCloudStorageAIServiceTaskRequest} {@link CreateCloudStorageAIServiceTaskResponse} */
  CreateCloudStorageAIServiceTask(data: CreateCloudStorageAIServiceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudStorageAIServiceTaskResponse>;
  /** 创建设备 {@link CreateDeviceRequest} {@link CreateDeviceResponse} */
  CreateDevice(data: CreateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceResponse>;
  /** 创建设备通道 {@link CreateDeviceChannelRequest} {@link CreateDeviceChannelResponse} */
  CreateDeviceChannel(data: CreateDeviceChannelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceChannelResponse>;
  /** 创建外部视频AI分析任务 {@link CreateExternalSourceAIServiceTaskRequest} {@link CreateExternalSourceAIServiceTaskResponse} */
  CreateExternalSourceAIServiceTask(data: CreateExternalSourceAIServiceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExternalSourceAIServiceTaskResponse>;
  /** 创建围栏绑定信息 {@link CreateFenceBindRequest} {@link CreateFenceBindResponse} */
  CreateFenceBind(data: CreateFenceBindRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFenceBindResponse>;
  /** 开通云存卡服务 {@link CreateFreeCloudStorageRequest} {@link CreateFreeCloudStorageResponse} */
  CreateFreeCloudStorage(data: CreateFreeCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFreeCloudStorageResponse>;
  /** 开通video云存服务 {@link CreateIotVideoCloudStorageRequest} {@link CreateIotVideoCloudStorageResponse} */
  CreateIotVideoCloudStorage(data: CreateIotVideoCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIotVideoCloudStorageResponse>;
  /** 创建 LoRa 自定义频点 {@link CreateLoRaFrequencyRequest} {@link CreateLoRaFrequencyResponse} */
  CreateLoRaFrequency(data?: CreateLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoRaFrequencyResponse>;
  /** 新建 LoRa 网关设备 {@link CreateLoRaGatewayRequest} {@link CreateLoRaGatewayResponse} */
  CreateLoRaGateway(data: CreateLoRaGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoRaGatewayResponse>;
  /** 创建围栏 {@link CreatePositionFenceRequest} {@link CreatePositionFenceResponse} */
  CreatePositionFence(data: CreatePositionFenceRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePositionFenceResponse>;
  /** 创建位置空间 {@link CreatePositionSpaceRequest} {@link CreatePositionSpaceResponse} */
  CreatePositionSpace(data: CreatePositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePositionSpaceResponse>;
  /** 新建项目 {@link CreateProjectRequest} {@link CreateProjectResponse} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 新建产品 {@link CreateStudioProductRequest} {@link CreateStudioProductResponse} */
  CreateStudioProduct(data: CreateStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStudioProductResponse>;
  /** 自定义房间id创建TRTC通话参数 {@link CreateTRTCSignaturesWithRoomIdRequest} {@link CreateTRTCSignaturesWithRoomIdResponse} */
  CreateTRTCSignaturesWithRoomId(data: CreateTRTCSignaturesWithRoomIdRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTRTCSignaturesWithRoomIdResponse>;
  /** 创建Topic {@link CreateTopicPolicyRequest} {@link CreateTopicPolicyResponse} */
  CreateTopicPolicy(data: CreateTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicPolicyResponse>;
  /** 创建规则 {@link CreateTopicRuleRequest} {@link CreateTopicRuleResponse} */
  CreateTopicRule(data: CreateTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicRuleResponse>;
  /** 删除云存事件 {@link DeleteCloudStorageEventRequest} {@link DeleteCloudStorageEventResponse} */
  DeleteCloudStorageEvent(data: DeleteCloudStorageEventRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudStorageEventResponse>;
  /** 删除设备 {@link DeleteDeviceRequest} {@link DeleteDeviceResponse} */
  DeleteDevice(data: DeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceResponse>;
  /** 批量删除设备 {@link DeleteDevicesRequest} {@link DeleteDevicesResponse} */
  DeleteDevices(data: DeleteDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDevicesResponse>;
  /** 删除围栏绑定信息 {@link DeleteFenceBindRequest} {@link DeleteFenceBindResponse} */
  DeleteFenceBind(data: DeleteFenceBindRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFenceBindResponse>;
  /** 删除LoRa自定义频点 {@link DeleteLoRaFrequencyRequest} {@link DeleteLoRaFrequencyResponse} */
  DeleteLoRaFrequency(data?: DeleteLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoRaFrequencyResponse>;
  /** 删除 LoRa 网关 {@link DeleteLoRaGatewayRequest} {@link DeleteLoRaGatewayResponse} */
  DeleteLoRaGateway(data: DeleteLoRaGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoRaGatewayResponse>;
  /** 删除围栏 {@link DeletePositionFenceRequest} {@link DeletePositionFenceResponse} */
  DeletePositionFence(data: DeletePositionFenceRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePositionFenceResponse>;
  /** 删除位置空间 {@link DeletePositionSpaceRequest} {@link DeletePositionSpaceResponse} */
  DeletePositionSpace(data: DeletePositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePositionSpaceResponse>;
  /** 删除项目 {@link DeleteProjectRequest} {@link DeleteProjectResponse} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** 删除产品 {@link DeleteStudioProductRequest} {@link DeleteStudioProductResponse} */
  DeleteStudioProduct(data: DeleteStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStudioProductResponse>;
  /** 删除Topic {@link DeleteTopicPolicyRequest} {@link DeleteTopicPolicyResponse} */
  DeleteTopicPolicy(data: DeleteTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicPolicyResponse>;
  /** 删除规则 {@link DeleteTopicRuleRequest} {@link DeleteTopicRuleResponse} */
  DeleteTopicRule(data: DeleteTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicRuleResponse>;
  /** 获取设备激活详情 {@link DescribeActivateDeviceRequest} {@link DescribeActivateDeviceResponse} */
  DescribeActivateDevice(data: DescribeActivateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActivateDeviceResponse>;
  /** 获取增值服务激活码详情 {@link DescribeActivateLicenseServiceRequest} {@link DescribeActivateLicenseServiceResponse} */
  DescribeActivateLicenseService(data: DescribeActivateLicenseServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActivateLicenseServiceResponse>;
  /** 获取量产详情 {@link DescribeBatchProductionRequest} {@link DescribeBatchProductionResponse} */
  DescribeBatchProduction(data: DescribeBatchProductionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchProductionResponse>;
  /** 获取网关产品已经绑定的子产品 {@link DescribeBindedProductsRequest} {@link DescribeBindedProductsResponse} */
  DescribeBindedProducts(data: DescribeBindedProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindedProductsResponse>;
  /** 获取设备云存服务详情 {@link DescribeCloudStorageRequest} {@link DescribeCloudStorageResponse} */
  DescribeCloudStorage(data: DescribeCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageResponse>;
  /** 查询设备云存AI分析服务 {@link DescribeCloudStorageAIServiceRequest} {@link DescribeCloudStorageAIServiceResponse} */
  DescribeCloudStorageAIService(data: DescribeCloudStorageAIServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageAIServiceResponse>;
  /** 查询云存AI分析回调配置 {@link DescribeCloudStorageAIServiceCallbackRequest} {@link DescribeCloudStorageAIServiceCallbackResponse} */
  DescribeCloudStorageAIServiceCallback(data: DescribeCloudStorageAIServiceCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageAIServiceCallbackResponse>;
  /** 查询设备云存AI分析任务 {@link DescribeCloudStorageAIServiceTaskRequest} {@link DescribeCloudStorageAIServiceTaskResponse} */
  DescribeCloudStorageAIServiceTask(data: DescribeCloudStorageAIServiceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageAIServiceTaskResponse>;
  /** 查询设备云存AI分析任务列表 {@link DescribeCloudStorageAIServiceTasksRequest} {@link DescribeCloudStorageAIServiceTasksResponse} */
  DescribeCloudStorageAIServiceTasks(data: DescribeCloudStorageAIServiceTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageAIServiceTasksResponse>;
  /** 获取具有云存的日期 {@link DescribeCloudStorageDateRequest} {@link DescribeCloudStorageDateResponse} */
  DescribeCloudStorageDate(data: DescribeCloudStorageDateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageDateResponse>;
  /** 拉取云存事件列表 {@link DescribeCloudStorageEventsRequest} {@link DescribeCloudStorageEventsResponse} */
  DescribeCloudStorageEvents(data: DescribeCloudStorageEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageEventsResponse>;
  /** 拉取云存事件及 AI 分析任务列表 {@link DescribeCloudStorageEventsWithAITasksRequest} {@link DescribeCloudStorageEventsWithAITasksResponse} */
  DescribeCloudStorageEventsWithAITasks(data: DescribeCloudStorageEventsWithAITasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageEventsWithAITasksResponse>;
  /** 拉取多个云存事件缩略图 {@link DescribeCloudStorageMultiThumbnailRequest} {@link DescribeCloudStorageMultiThumbnailResponse} */
  DescribeCloudStorageMultiThumbnail(data: DescribeCloudStorageMultiThumbnailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageMultiThumbnailResponse>;
  /** 查询云存订单详情 {@link DescribeCloudStorageOrderRequest} {@link DescribeCloudStorageOrderResponse} */
  DescribeCloudStorageOrder(data: DescribeCloudStorageOrderRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageOrderResponse>;
  /** 获取云存套餐包消耗详细记录 {@link DescribeCloudStoragePackageConsumeDetailsRequest} {@link DescribeCloudStoragePackageConsumeDetailsResponse} */
  DescribeCloudStoragePackageConsumeDetails(data: DescribeCloudStoragePackageConsumeDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStoragePackageConsumeDetailsResponse>;
  /** 获取云存套餐包消耗统计 {@link DescribeCloudStoragePackageConsumeStatsRequest} {@link DescribeCloudStoragePackageConsumeStatsResponse} */
  DescribeCloudStoragePackageConsumeStats(data: DescribeCloudStoragePackageConsumeStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStoragePackageConsumeStatsResponse>;
  /** 获取设备图片流数据 {@link DescribeCloudStorageStreamDataRequest} {@link DescribeCloudStorageStreamDataResponse} */
  DescribeCloudStorageStreamData(data: DescribeCloudStorageStreamDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageStreamDataResponse>;
  /** 拉取云存事件缩略图 {@link DescribeCloudStorageThumbnailRequest} {@link DescribeCloudStorageThumbnailResponse} */
  DescribeCloudStorageThumbnail(data: DescribeCloudStorageThumbnailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageThumbnailResponse>;
  /** 批量拉取云存事件缩略图 {@link DescribeCloudStorageThumbnailListRequest} {@link DescribeCloudStorageThumbnailListResponse} */
  DescribeCloudStorageThumbnailList(data: DescribeCloudStorageThumbnailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageThumbnailListResponse>;
  /** 获取某一天云存时间轴 {@link DescribeCloudStorageTimeRequest} {@link DescribeCloudStorageTimeResponse} */
  DescribeCloudStorageTime(data: DescribeCloudStorageTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageTimeResponse>;
  /** 拉取云存用户列表 {@link DescribeCloudStorageUsersRequest} {@link DescribeCloudStorageUsersResponse} */
  DescribeCloudStorageUsers(data: DescribeCloudStorageUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudStorageUsersResponse>;
  /** 查看设备详情 {@link DescribeDeviceRequest} {@link DescribeDeviceResponse} */
  DescribeDevice(data: DescribeDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceResponse>;
  /** 查询设备绑定的网关设备 {@link DescribeDeviceBindGatewayRequest} {@link DescribeDeviceBindGatewayResponse} */
  DescribeDeviceBindGateway(data: DescribeDeviceBindGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceBindGatewayResponse>;
  /** 获取设备属性数据 {@link DescribeDeviceDataRequest} {@link DescribeDeviceDataResponse} */
  DescribeDeviceData(data: DescribeDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceDataResponse>;
  /** 获取设备历史数据 {@link DescribeDeviceDataHistoryRequest} {@link DescribeDeviceDataHistoryResponse} */
  DescribeDeviceDataHistory(data: DescribeDeviceDataHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceDataHistoryResponse>;
  /** 获取设备固件信息 {@link DescribeDeviceFirmWareRequest} {@link DescribeDeviceFirmWareResponse} */
  DescribeDeviceFirmWare(data: DescribeDeviceFirmWareRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceFirmWareResponse>;
  /** 获取设备当前固件信息 {@link DescribeDeviceFirmwaresRequest} {@link DescribeDeviceFirmwaresResponse} */
  DescribeDeviceFirmwares(data: DescribeDeviceFirmwaresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceFirmwaresResponse>;
  /** 获取实时位置解析 {@link DescribeDeviceLocationSolveRequest} {@link DescribeDeviceLocationSolveResponse} */
  DescribeDeviceLocationSolve(data: DescribeDeviceLocationSolveRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceLocationSolveResponse>;
  /** 拉取有效云存套餐列表 {@link DescribeDevicePackagesRequest} {@link DescribeDevicePackagesResponse} */
  DescribeDevicePackages(data: DescribeDevicePackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePackagesResponse>;
  /** 获取设备位置列表 {@link DescribeDevicePositionListRequest} {@link DescribeDevicePositionListResponse} */
  DescribeDevicePositionList(data: DescribeDevicePositionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePositionListResponse>;
  /** 获取围栏绑定信息列表 {@link DescribeFenceBindListRequest} {@link DescribeFenceBindListResponse} */
  DescribeFenceBindList(data: DescribeFenceBindListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFenceBindListResponse>;
  /** 获取围栏告警事件列表 {@link DescribeFenceEventListRequest} {@link DescribeFenceEventListResponse} */
  DescribeFenceEventList(data: DescribeFenceEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFenceEventListResponse>;
  /** 查询固件信息 {@link DescribeFirmwareRequest} {@link DescribeFirmwareResponse} */
  DescribeFirmware(data: DescribeFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareResponse>;
  /** 查询固件升级任务列表 {@link DescribeFirmwareTaskRequest} {@link DescribeFirmwareTaskResponse} */
  DescribeFirmwareTask(data: DescribeFirmwareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareTaskResponse>;
  /** 查询设备固件升级状态 {@link DescribeFirmwareUpdateStatusRequest} {@link DescribeFirmwareUpdateStatusResponse} */
  DescribeFirmwareUpdateStatus(data: DescribeFirmwareUpdateStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareUpdateStatusResponse>;
  /** 查询云存卡套餐信息 {@link DescribeFreeCloudStorageNumRequest} {@link DescribeFreeCloudStorageNumResponse} */
  DescribeFreeCloudStorageNum(data?: DescribeFreeCloudStorageNumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFreeCloudStorageNumResponse>;
  /** 获取网关绑定的子设备列表 {@link DescribeGatewayBindDevicesRequest} {@link DescribeGatewayBindDevicesResponse} */
  DescribeGatewayBindDevices(data: DescribeGatewayBindDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayBindDevicesResponse>;
  /** 查询绑定到家庭的网关设备的子设备列表 {@link DescribeGatewaySubDeviceListRequest} {@link DescribeGatewaySubDeviceListResponse} */
  DescribeGatewaySubDeviceList(data: DescribeGatewaySubDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewaySubDeviceListResponse>;
  /** 获取网关可操作的子产品 {@link DescribeGatewaySubProductsRequest} {@link DescribeGatewaySubProductsResponse} */
  DescribeGatewaySubProducts(data: DescribeGatewaySubProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewaySubProductsResponse>;
  /** 获取实例详情 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取LoRa自定义频点详情 {@link DescribeLoRaFrequencyRequest} {@link DescribeLoRaFrequencyResponse} */
  DescribeLoRaFrequency(data?: DescribeLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoRaFrequencyResponse>;
  /** 查询产品数据模板 {@link DescribeModelDefinitionRequest} {@link DescribeModelDefinitionResponse} */
  DescribeModelDefinition(data: DescribeModelDefinitionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelDefinitionResponse>;
  /** 查询套餐消耗记录详情 {@link DescribePackageConsumeTaskRequest} {@link DescribePackageConsumeTaskResponse} */
  DescribePackageConsumeTask(data: DescribePackageConsumeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackageConsumeTaskResponse>;
  /** 查询套餐消耗记录列表 {@link DescribePackageConsumeTasksRequest} {@link DescribePackageConsumeTasksResponse} */
  DescribePackageConsumeTasks(data: DescribePackageConsumeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackageConsumeTasksResponse>;
  /** 获取围栏列表 {@link DescribePositionFenceListRequest} {@link DescribePositionFenceListResponse} */
  DescribePositionFenceList(data: DescribePositionFenceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePositionFenceListResponse>;
  /** 查询产品云存AI分析服务 {@link DescribeProductCloudStorageAIServiceRequest} {@link DescribeProductCloudStorageAIServiceResponse} */
  DescribeProductCloudStorageAIService(data: DescribeProductCloudStorageAIServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductCloudStorageAIServiceResponse>;
  /** 查询项目详情 {@link DescribeProjectRequest} {@link DescribeProjectResponse} */
  DescribeProject(data: DescribeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectResponse>;
  /** 获取位置空间中围栏告警事件列表 {@link DescribeSpaceFenceEventListRequest} {@link DescribeSpaceFenceEventListResponse} */
  DescribeSpaceFenceEventList(data: DescribeSpaceFenceEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceFenceEventListResponse>;
  /** 获取产品详情 {@link DescribeStudioProductRequest} {@link DescribeStudioProductResponse} */
  DescribeStudioProduct(data: DescribeStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStudioProductResponse>;
  /** 查看Topic详情 {@link DescribeTopicPolicyRequest} {@link DescribeTopicPolicyResponse} */
  DescribeTopicPolicy(data: DescribeTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicPolicyResponse>;
  /** 获取规则信息 {@link DescribeTopicRuleRequest} {@link DescribeTopicRuleResponse} */
  DescribeTopicRule(data: DescribeTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicRuleResponse>;
  /** 查询视频激活码统计概览 {@link DescribeVideoLicenseRequest} {@link DescribeVideoLicenseResponse} */
  DescribeVideoLicense(data: DescribeVideoLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoLicenseResponse>;
  /** 直接绑定设备和家庭 {@link DirectBindDeviceInFamilyRequest} {@link DirectBindDeviceInFamilyResponse} */
  DirectBindDeviceInFamily(data: DirectBindDeviceInFamilyRequest, config?: AxiosRequestConfig): AxiosPromise<DirectBindDeviceInFamilyResponse>;
  /** 禁用规则 {@link DisableTopicRuleRequest} {@link DisableTopicRuleResponse} */
  DisableTopicRule(data: DisableTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DisableTopicRuleResponse>;
  /** 解散TRTC房间 {@link DismissRoomByStrRoomIdFromTRTCRequest} {@link DismissRoomByStrRoomIdFromTRTCResponse} */
  DismissRoomByStrRoomIdFromTRTC(data: DismissRoomByStrRoomIdFromTRTCRequest, config?: AxiosRequestConfig): AxiosPromise<DismissRoomByStrRoomIdFromTRTCResponse>;
  /** 启用规则 {@link EnableTopicRuleRequest} {@link EnableTopicRuleResponse} */
  EnableTopicRule(data: EnableTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<EnableTopicRuleResponse>;
  /** 生成单个设备绑定的签名 {@link GenSingleDeviceSignatureOfPublicRequest} {@link GenSingleDeviceSignatureOfPublicResponse} */
  GenSingleDeviceSignatureOfPublic(data: GenSingleDeviceSignatureOfPublicRequest, config?: AxiosRequestConfig): AxiosPromise<GenSingleDeviceSignatureOfPublicResponse>;
  /** 获取云存AI分析任务输出文件URL {@link GenerateCloudStorageAIServiceTaskFileURLRequest} {@link GenerateCloudStorageAIServiceTaskFileURLResponse} */
  GenerateCloudStorageAIServiceTaskFileURL(data: GenerateCloudStorageAIServiceTaskFileURLRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateCloudStorageAIServiceTaskFileURLResponse>;
  /** 获取视频防盗链播放URL {@link GenerateSignedVideoURLRequest} {@link GenerateSignedVideoURLResponse} */
  GenerateSignedVideoURL(data: GenerateSignedVideoURLRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateSignedVideoURLResponse>;
  /** 查询微信小程序授权列表 {@link GetAuthMiniProgramAppListRequest} {@link GetAuthMiniProgramAppListResponse} */
  GetAuthMiniProgramAppList(data?: GetAuthMiniProgramAppListRequest, config?: AxiosRequestConfig): AxiosPromise<GetAuthMiniProgramAppListResponse>;
  /** 列出量产数据列表 {@link GetBatchProductionsListRequest} {@link GetBatchProductionsListResponse} */
  GetBatchProductionsList(data: GetBatchProductionsListRequest, config?: AxiosRequestConfig): AxiosPromise<GetBatchProductionsListResponse>;
  /** 获取固件存储请求地址 {@link GetCOSURLRequest} {@link GetCOSURLResponse} */
  GetCOSURL(data: GetCOSURLRequest, config?: AxiosRequestConfig): AxiosPromise<GetCOSURLResponse>;
  /** 获取产品的设备列表 {@link GetDeviceListRequest} {@link GetDeviceListResponse} */
  GetDeviceList(data: GetDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceListResponse>;
  /** 获取设备历史位置 {@link GetDeviceLocationHistoryRequest} {@link GetDeviceLocationHistoryResponse} */
  GetDeviceLocationHistory(data: GetDeviceLocationHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceLocationHistoryResponse>;
  /** 拉取设备统计汇总数据 {@link GetDeviceSumStatisticsRequest} {@link GetDeviceSumStatisticsResponse} */
  GetDeviceSumStatistics(data: GetDeviceSumStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceSumStatisticsResponse>;
  /** 获取设备绑定的用户列表 {@link GetFamilyDeviceUserListRequest} {@link GetFamilyDeviceUserListResponse} */
  GetFamilyDeviceUserList(data: GetFamilyDeviceUserListRequest, config?: AxiosRequestConfig): AxiosPromise<GetFamilyDeviceUserListResponse>;
  /** 获取指定网关设备的子设备列表 {@link GetGatewaySubDeviceListRequest} {@link GetGatewaySubDeviceListResponse} */
  GetGatewaySubDeviceList(data: GetGatewaySubDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetGatewaySubDeviceListResponse>;
  /** 获取 LoRa 网关列表 {@link GetLoRaGatewayListRequest} {@link GetLoRaGatewayListResponse} */
  GetLoRaGatewayList(data: GetLoRaGatewayListRequest, config?: AxiosRequestConfig): AxiosPromise<GetLoRaGatewayListResponse>;
  /** 获取位置空间列表 {@link GetPositionSpaceListRequest} {@link GetPositionSpaceListResponse} */
  GetPositionSpaceList(data: GetPositionSpaceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetPositionSpaceListResponse>;
  /** 获取项目列表 {@link GetProjectListRequest} {@link GetProjectListResponse} */
  GetProjectList(data?: GetProjectListRequest, config?: AxiosRequestConfig): AxiosPromise<GetProjectListResponse>;
  /** 获取产品列表 {@link GetStudioProductListRequest} {@link GetStudioProductListResponse} */
  GetStudioProductList(data?: GetStudioProductListRequest, config?: AxiosRequestConfig): AxiosPromise<GetStudioProductListResponse>;
  /** 查询TWeCall激活状态 {@link GetTWeCallActiveStatusRequest} {@link GetTWeCallActiveStatusResponse} */
  GetTWeCallActiveStatus(data?: GetTWeCallActiveStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetTWeCallActiveStatusResponse>;
  /** 获取规则列表 {@link GetTopicRuleListRequest} {@link GetTopicRuleListResponse} */
  GetTopicRuleList(data: GetTopicRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<GetTopicRuleListResponse>;
  /** 查询微信授权票据 {@link GetWechatDeviceTicketRequest} {@link GetWechatDeviceTicketResponse} */
  GetWechatDeviceTicket(data: GetWechatDeviceTicketRequest, config?: AxiosRequestConfig): AxiosPromise<GetWechatDeviceTicketResponse>;
  /** 继承云存用户 {@link InheritCloudStorageUserRequest} {@link InheritCloudStorageUserResponse} */
  InheritCloudStorageUser(data: InheritCloudStorageUserRequest, config?: AxiosRequestConfig): AxiosPromise<InheritCloudStorageUserResponse>;
  /** 同步执行设备云存AI分析任务 {@link InvokeCloudStorageAIServiceTaskRequest} {@link InvokeCloudStorageAIServiceTaskResponse} */
  InvokeCloudStorageAIServiceTask(data: InvokeCloudStorageAIServiceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeCloudStorageAIServiceTaskResponse>;
  /** 同步执行外部视频AI分析任务 {@link InvokeExternalSourceAIServiceTaskRequest} {@link InvokeExternalSourceAIServiceTaskResponse} */
  InvokeExternalSourceAIServiceTask(data: InvokeExternalSourceAIServiceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeExternalSourceAIServiceTaskResponse>;
  /** 获取设备的历史事件 {@link ListEventHistoryRequest} {@link ListEventHistoryResponse} */
  ListEventHistory(data: ListEventHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<ListEventHistoryResponse>;
  /** 获取固件列表 {@link ListFirmwaresRequest} {@link ListFirmwaresResponse} */
  ListFirmwares(data: ListFirmwaresRequest, config?: AxiosRequestConfig): AxiosPromise<ListFirmwaresResponse>;
  /** 获取Topic列表 {@link ListTopicPolicyRequest} {@link ListTopicPolicyResponse} */
  ListTopicPolicy(data: ListTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopicPolicyResponse>;
  /** 修改设备云存AI分析服务 {@link ModifyCloudStorageAIServiceRequest} {@link ModifyCloudStorageAIServiceResponse} */
  ModifyCloudStorageAIService(data: ModifyCloudStorageAIServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudStorageAIServiceResponse>;
  /** 修改云存AI分析回调配置 {@link ModifyCloudStorageAIServiceCallbackRequest} {@link ModifyCloudStorageAIServiceCallbackResponse} */
  ModifyCloudStorageAIServiceCallback(data: ModifyCloudStorageAIServiceCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudStorageAIServiceCallbackResponse>;
  /** 更新围栏绑定信息 {@link ModifyFenceBindRequest} {@link ModifyFenceBindResponse} */
  ModifyFenceBind(data: ModifyFenceBindRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFenceBindResponse>;
  /** 修改LoRa自定义频点 {@link ModifyLoRaFrequencyRequest} {@link ModifyLoRaFrequencyResponse} */
  ModifyLoRaFrequency(data?: ModifyLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoRaFrequencyResponse>;
  /** 修改 LoRa 网关信息 {@link ModifyLoRaGatewayRequest} {@link ModifyLoRaGatewayResponse} */
  ModifyLoRaGateway(data: ModifyLoRaGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoRaGatewayResponse>;
  /** 修改产品数据模板 {@link ModifyModelDefinitionRequest} {@link ModifyModelDefinitionResponse} */
  ModifyModelDefinition(data: ModifyModelDefinitionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModelDefinitionResponse>;
  /** 更新围栏 {@link ModifyPositionFenceRequest} {@link ModifyPositionFenceResponse} */
  ModifyPositionFence(data?: ModifyPositionFenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPositionFenceResponse>;
  /** 更新位置空间 {@link ModifyPositionSpaceRequest} {@link ModifyPositionSpaceResponse} */
  ModifyPositionSpace(data: ModifyPositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPositionSpaceResponse>;
  /** 修改产品云存AI分析服务 {@link ModifyProductCloudStorageAIServiceRequest} {@link ModifyProductCloudStorageAIServiceResponse} */
  ModifyProductCloudStorageAIService(data: ModifyProductCloudStorageAIServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProductCloudStorageAIServiceResponse>;
  /** 修改项目 {@link ModifyProjectRequest} {@link ModifyProjectResponse} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** 更新位置空间产品属性 {@link ModifySpacePropertyRequest} {@link ModifySpacePropertyResponse} */
  ModifySpaceProperty(data: ModifySpacePropertyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpacePropertyResponse>;
  /** 修改产品 {@link ModifyStudioProductRequest} {@link ModifyStudioProductResponse} */
  ModifyStudioProduct(data: ModifyStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStudioProductResponse>;
  /** 更新Topic {@link ModifyTopicPolicyRequest} {@link ModifyTopicPolicyResponse} */
  ModifyTopicPolicy(data: ModifyTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicPolicyResponse>;
  /** 修改规则 {@link ModifyTopicRuleRequest} {@link ModifyTopicRuleResponse} */
  ModifyTopicRule(data: ModifyTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicRuleResponse>;
  /** 暂停TWeCall激活设备 {@link PauseTWeCallDeviceRequest} {@link PauseTWeCallDeviceResponse} */
  PauseTWeCallDevice(data?: PauseTWeCallDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<PauseTWeCallDeviceResponse>;
  /** @deprecated 发布广播消息 {@link PublishBroadcastMessageRequest} {@link PublishBroadcastMessageResponse} */
  PublishBroadcastMessage(data: PublishBroadcastMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishBroadcastMessageResponse>;
  /** 确认固件升级任务 {@link PublishFirmwareUpdateMessageRequest} {@link PublishFirmwareUpdateMessageResponse} */
  PublishFirmwareUpdateMessage(data: PublishFirmwareUpdateMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishFirmwareUpdateMessageResponse>;
  /** 设备透传指令控制 {@link PublishMessageRequest} {@link PublishMessageResponse} */
  PublishMessage(data: PublishMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishMessageResponse>;
  /** @deprecated 发布RRPC消息 {@link PublishRRPCMessageRequest} {@link PublishRRPCMessageResponse} */
  PublishRRPCMessage(data: PublishRRPCMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishRRPCMessageResponse>;
  /** 发布产品 {@link ReleaseStudioProductRequest} {@link ReleaseStudioProductResponse} */
  ReleaseStudioProduct(data: ReleaseStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseStudioProductResponse>;
  /** 将用户从TRTC房间移出 {@link RemoveUserByRoomIdFromTRTCRequest} {@link RemoveUserByRoomIdFromTRTCResponse} */
  RemoveUserByRoomIdFromTRTC(data: RemoveUserByRoomIdFromTRTCRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveUserByRoomIdFromTRTCResponse>;
  /** 重置云存服务 {@link ResetCloudStorageRequest} {@link ResetCloudStorageResponse} */
  ResetCloudStorage(data: ResetCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<ResetCloudStorageResponse>;
  /** 重置设备云存AI分析服务 {@link ResetCloudStorageAIServiceRequest} {@link ResetCloudStorageAIServiceResponse} */
  ResetCloudStorageAIService(data: ResetCloudStorageAIServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ResetCloudStorageAIServiceResponse>;
  /** 重置云存事件 {@link ResetCloudStorageEventRequest} {@link ResetCloudStorageEventResponse} */
  ResetCloudStorageEvent(data: ResetCloudStorageEventRequest, config?: AxiosRequestConfig): AxiosPromise<ResetCloudStorageEventResponse>;
  /** 重置TWeCall激活设备 {@link ResetTWeCallDeviceRequest} {@link ResetTWeCallDeviceResponse} */
  ResetTWeCallDevice(data?: ResetTWeCallDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ResetTWeCallDeviceResponse>;
  /** 恢复TWeCall激活设备 {@link ResumeWeCallDeviceRequest} {@link ResumeWeCallDeviceResponse} */
  ResumeWeCallDevice(data?: ResumeWeCallDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeWeCallDeviceResponse>;
  /** 搜索位置空间 {@link SearchPositionSpaceRequest} {@link SearchPositionSpaceResponse} */
  SearchPositionSpace(data: SearchPositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<SearchPositionSpaceResponse>;
  /** 搜索产品 {@link SearchStudioProductRequest} {@link SearchStudioProductResponse} */
  SearchStudioProduct(data?: SearchStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<SearchStudioProductResponse>;
  /** 搜索规则 {@link SearchTopicRuleRequest} {@link SearchTopicRuleResponse} */
  SearchTopicRule(data: SearchTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<SearchTopicRuleResponse>;
  /** 转移云存服务 {@link TransferCloudStorageRequest} {@link TransferCloudStorageResponse} */
  TransferCloudStorage(data: TransferCloudStorageRequest, config?: AxiosRequestConfig): AxiosPromise<TransferCloudStorageResponse>;
  /** 转移TWeCall激活 {@link TransferTWeCallDeviceRequest} {@link TransferTWeCallDeviceResponse} */
  TransferTWeCallDevice(data?: TransferTWeCallDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<TransferTWeCallDeviceResponse>;
  /** 批量解绑子设备 {@link UnbindDevicesRequest} {@link UnbindDevicesResponse} */
  UnbindDevices(data: UnbindDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindDevicesResponse>;
  /** 批量解绑子产品 {@link UnbindProductsRequest} {@link UnbindProductsResponse} */
  UnbindProducts(data: UnbindProductsRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindProductsResponse>;
  /** 更新用户对设备的TweCall授权状态 {@link UpdateDeviceTWeCallAuthorizeStatusRequest} {@link UpdateDeviceTWeCallAuthorizeStatusResponse} */
  UpdateDeviceTWeCallAuthorizeStatus(data?: UpdateDeviceTWeCallAuthorizeStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceTWeCallAuthorizeStatusResponse>;
  /** 批量禁用启用设备 {@link UpdateDevicesEnableStateRequest} {@link UpdateDevicesEnableStateResponse} */
  UpdateDevicesEnableState(data: UpdateDevicesEnableStateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDevicesEnableStateResponse>;
  /** 更新设备固件 {@link UpdateFirmwareRequest} {@link UpdateFirmwareResponse} */
  UpdateFirmware(data: UpdateFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFirmwareResponse>;
  /** 创建固件版本信息 {@link UploadFirmwareRequest} {@link UploadFirmwareResponse} */
  UploadFirmware(data: UploadFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFirmwareResponse>;
}

export declare type Versions = ["2019-04-23"];

export default Iotexplorer;
