/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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

/** 设备固件详细信息 */
declare interface FirmwareInfo {
  /** 固件版本 */
  Version: string;
  /** 固件MD5值 */
  Md5sum: string;
  /** 固件创建时间 */
  CreateTime: number;
  /** 产品名称 */
  ProductName: string | null;
  /** 固件名称 */
  Name: string | null;
  /** 固件描述 */
  Description: string | null;
  /** 产品ID */
  ProductId: string | null;
  /** 固件升级模块 */
  FwType: string | null;
  /** 创建者子 uin */
  CreateUserId: number | null;
  /** 创建者昵称 */
  CreatorNickName: string | null;
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
  ProductId: string;
  /** 产品名称 */
  ProductName: string;
  /** 产品分组模板ID */
  CategoryId: number;
  /** 加密类型 */
  EncryptionType: string;
  /** 连接类型 */
  NetType: string;
  /** 数据协议 */
  DataProtocol: number;
  /** 产品描述 */
  ProductDesc: string;
  /** 状态 */
  DevStatus: string;
  /** 创建时间 */
  CreateTime: number;
  /** 更新时间 */
  UpdateTime: number;
  /** 区域 */
  Region: string;
  /** 产品类型 */
  ProductType: number;
  /** 项目ID */
  ProjectId: string;
  /** 产品ModuleId */
  ModuleId: number;
  /** 是否使用脚本进行二进制转json功能 可以取值 true / false */
  EnableProductScript: string | null;
  /** 创建人 UinId */
  CreateUserId: number | null;
  /** 创建者昵称 */
  CreatorNickName: string | null;
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
}

/** 搜索关键词 */
declare interface SearchKeyword {
  /** 搜索条件的Key */
  Key: string;
  /** 搜索条件的值 */
  Value?: string;
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
  RuleName: string;
  /** 规则描述 */
  Description: string;
  /** 创建时间 */
  CreatedAt: number;
  /** 规则是否禁用 */
  RuleDisabled: boolean;
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BindProductsRequest {
  /** 网关产品ID。 */
  GatewayProductId: string;
  /** 待绑定的子产品ID数组。 */
  ProductIds: string[];
}

declare interface BindProductsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 输出参数 */
  OutputParams: string | null;
  /** 返回状态，当设备不在线等部分情况，会通过该 Status 返回。 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFenceBindRequest {
  /** 围栏Id */
  FenceId: number;
  /** 围栏绑定的产品列表 */
  Items: FenceBindProductItem[];
}

declare interface CreateFenceBindResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateStudioProductRequest {
  /** 产品名称，名称不能和已经存在的产品名称重复。命名规则：[a-zA-Z0-9:_-]{1,32} */
  ProductName: string;
  /** 产品分组模板ID , ( 自定义模板填写1 , 控制台调用会使用预置的其他ID) */
  CategoryId: number;
  /** 产品类型 填写 ( 0 普通产品 ) */
  ProductType: number;
  /** 加密类型 加密类型，1表示证书认证，2表示签名认证。 */
  EncryptionType: string;
  /** 连接类型 可以填写 wifi cellular else */
  NetType: string;
  /** 数据协议 (1 使用物模型 2 为自定义) */
  DataProtocol: number;
  /** 产品描述 */
  ProductDesc: string;
  /** 产品的项目ID */
  ProjectId: string;
}

declare interface CreateStudioProductResponse {
  /** 产品描述 */
  Product: ProductEntry;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
  /** 规则内容 */
  TopicRulePayload: TopicRulePayload;
}

declare interface CreateTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFenceBindRequest {
  /** 围栏Id */
  FenceId: number;
  /** 围栏绑定的产品信息 */
  Items: FenceBindProductItem[];
}

declare interface DeleteFenceBindResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLoRaFrequencyRequest {
  /** 频点唯一ID */
  FreqId?: string;
}

declare interface DeleteLoRaFrequencyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLoRaGatewayRequest {
  /** LoRa 网关 Id */
  GatewayId: string;
}

declare interface DeleteLoRaGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePositionFenceRequest {
  /** 位置空间Id */
  SpaceId: string;
  /** 围栏Id */
  FenceId: number;
}

declare interface DeletePositionFenceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePositionSpaceRequest {
  /** 位置空间Id */
  SpaceId: string;
}

declare interface DeletePositionSpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface DeleteProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteStudioProductRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DeleteStudioProductResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTopicPolicyRequest {
  /** 产品ID */
  ProductId: string;
  /** Topic名称 */
  TopicName: string;
}

declare interface DeleteTopicPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTopicRuleRequest {
  /** 规则名 */
  RuleName: string;
}

declare interface DeleteTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  BatchCnt: number;
  /** 烧录方式。 */
  BurnMethod: number;
  /** 创建时间。 */
  CreateTime: number;
  /** 下载URL。 */
  DownloadUrl: string;
  /** 生成方式。 */
  GenerationMethod: number;
  /** 上传URL。 */
  UploadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Device: DeviceInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TaskId: number | null;
  /** 固件任务状态 */
  Status: number | null;
  /** 固件任务创建时间，单位：秒 */
  CreateTime: number | null;
  /** 固件任务升级类型 */
  Type: number | null;
  /** 产品名称 */
  ProductName: string | null;
  /** 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级） */
  UpgradeMode: string | null;
  /** 产品ID */
  ProductId: string | null;
  /** 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回 */
  OriginalVersion: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Products: BindProductInfo[];
  /** 可绑定或解绑的产品总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLoRaFrequencyRequest {
  /** 频点唯一ID */
  FreqId?: string;
}

declare interface DescribeLoRaFrequencyResponse {
  /** 返回详情项 */
  Data: LoRaFrequencyEntry | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeModelDefinitionRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DescribeModelDefinitionResponse {
  /** 产品数据模板 */
  Model: ProductModelDefinition;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface DescribeProjectResponse {
  /** 返回信息 */
  Project: ProjectEntryEx;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStudioProductRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface DescribeStudioProductResponse {
  /** 产品详情 */
  Product: ProductEntry;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTopicRuleRequest {
  /** 规则名称。 */
  RuleName: string;
}

declare interface DescribeTopicRuleResponse {
  /** 规则描述。 */
  Rule: TopicRule | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
}

declare interface DisableTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
}

declare interface EnableTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface GetDeviceListResponse {
  /** 返回的设备列表, 注意列表设备的 DevicePsk 为空, 要获取设备的 DevicePsk 请使用 DescribeDevice */
  Devices: DeviceInfo[] | null;
  /** 产品下的设备总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  UserList: DeviceUser[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  List: PositionSpaceInfo[] | null;
  /** 位置空间数量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Projects: ProjectEntryEx[] | null;
  /** 列表项个数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCnt: number;
  /** 规则列表 */
  Rules: TopicRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number;
  /** 固件列表 */
  Firmwares: FirmwareInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListTopicPolicyRequest {
  /** 产品ID */
  ProductId: string;
}

declare interface ListTopicPolicyResponse {
  /** Topic列表 */
  Topics?: TopicItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyFenceBindRequest {
  /** 围栏Id */
  FenceId: number;
  /** 围栏绑定的产品列表 */
  Items: FenceBindProductItem[];
}

declare interface ModifyFenceBindResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyModelDefinitionRequest {
  /** 产品ID */
  ProductId: string;
  /** 数据模板定义 */
  ModelSchema: string;
}

declare interface ModifyModelDefinitionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPositionFenceRequest {
}

declare interface ModifyPositionFenceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface ModifyStudioProductResponse {
  /** 产品描述 */
  Product: ProductEntry;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTopicRuleRequest {
  /** 规则名称 */
  RuleName: string;
  /** 替换的规则包体 */
  TopicRulePayload: TopicRulePayload;
}

declare interface ModifyTopicRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReleaseStudioProductRequest {
  /** 产品ID */
  ProductId: string;
  /** 产品DevStatus */
  DevStatus: string;
}

declare interface ReleaseStudioProductResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface SearchStudioProductResponse {
  /** 产品列表 */
  Products: ProductEntry[];
  /** 产品数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchTopicRuleRequest {
  /** 规则名 */
  RuleName: string;
}

declare interface SearchTopicRuleResponse {
  /** 搜索到的规则总数 */
  TotalCnt: number;
  /** 规则信息列表 */
  Rules: TopicRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface UploadFirmwareResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Iotexplorer 物联网开发平台} */
declare interface Iotexplorer {
  (): Versions;
  /** {@link BindDevices 批量绑定子设备}({@link BindDevicesRequest 请求参数}): {@link BindDevicesResponse 返回参数} */
  BindDevices(data: BindDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<BindDevicesResponse>;
  /** {@link BindProducts 批量绑定子产品}({@link BindProductsRequest 请求参数}): {@link BindProductsResponse 返回参数} */
  BindProducts(data: BindProductsRequest, config?: AxiosRequestConfig): AxiosPromise<BindProductsResponse>;
  /** {@link CallDeviceActionAsync 异步调用设备行为}({@link CallDeviceActionAsyncRequest 请求参数}): {@link CallDeviceActionAsyncResponse 返回参数} */
  CallDeviceActionAsync(data: CallDeviceActionAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<CallDeviceActionAsyncResponse>;
  /** {@link CallDeviceActionSync 同步调用设备行为}({@link CallDeviceActionSyncRequest 请求参数}): {@link CallDeviceActionSyncResponse 返回参数} */
  CallDeviceActionSync(data: CallDeviceActionSyncRequest, config?: AxiosRequestConfig): AxiosPromise<CallDeviceActionSyncResponse>;
  /** {@link ControlDeviceData 设备远程控制}({@link ControlDeviceDataRequest 请求参数}): {@link ControlDeviceDataResponse 返回参数} */
  ControlDeviceData(data: ControlDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceDataResponse>;
  /** {@link CreateBatchProduction 创建量产任务}({@link CreateBatchProductionRequest 请求参数}): {@link CreateBatchProductionResponse 返回参数} */
  CreateBatchProduction(data: CreateBatchProductionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchProductionResponse>;
  /** {@link CreateDevice 创建设备}({@link CreateDeviceRequest 请求参数}): {@link CreateDeviceResponse 返回参数} */
  CreateDevice(data: CreateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceResponse>;
  /** {@link CreateFenceBind 创建围栏绑定信息}({@link CreateFenceBindRequest 请求参数}): {@link CreateFenceBindResponse 返回参数} */
  CreateFenceBind(data: CreateFenceBindRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFenceBindResponse>;
  /** {@link CreateLoRaFrequency 创建 LoRa 自定义频点}({@link CreateLoRaFrequencyRequest 请求参数}): {@link CreateLoRaFrequencyResponse 返回参数} */
  CreateLoRaFrequency(data?: CreateLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoRaFrequencyResponse>;
  /** {@link CreateLoRaGateway 新建 LoRa 网关设备}({@link CreateLoRaGatewayRequest 请求参数}): {@link CreateLoRaGatewayResponse 返回参数} */
  CreateLoRaGateway(data: CreateLoRaGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoRaGatewayResponse>;
  /** {@link CreatePositionFence 创建围栏}({@link CreatePositionFenceRequest 请求参数}): {@link CreatePositionFenceResponse 返回参数} */
  CreatePositionFence(data: CreatePositionFenceRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePositionFenceResponse>;
  /** {@link CreatePositionSpace 创建位置空间}({@link CreatePositionSpaceRequest 请求参数}): {@link CreatePositionSpaceResponse 返回参数} */
  CreatePositionSpace(data: CreatePositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePositionSpaceResponse>;
  /** {@link CreateProject 新建项目}({@link CreateProjectRequest 请求参数}): {@link CreateProjectResponse 返回参数} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** {@link CreateStudioProduct 新建产品}({@link CreateStudioProductRequest 请求参数}): {@link CreateStudioProductResponse 返回参数} */
  CreateStudioProduct(data: CreateStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStudioProductResponse>;
  /** {@link CreateTopicPolicy 创建Topic}({@link CreateTopicPolicyRequest 请求参数}): {@link CreateTopicPolicyResponse 返回参数} */
  CreateTopicPolicy(data: CreateTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicPolicyResponse>;
  /** {@link CreateTopicRule 创建规则}({@link CreateTopicRuleRequest 请求参数}): {@link CreateTopicRuleResponse 返回参数} */
  CreateTopicRule(data: CreateTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTopicRuleResponse>;
  /** {@link DeleteDevice 删除设备}({@link DeleteDeviceRequest 请求参数}): {@link DeleteDeviceResponse 返回参数} */
  DeleteDevice(data: DeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceResponse>;
  /** {@link DeleteDevices 批量删除设备}({@link DeleteDevicesRequest 请求参数}): {@link DeleteDevicesResponse 返回参数} */
  DeleteDevices(data: DeleteDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDevicesResponse>;
  /** {@link DeleteFenceBind 删除围栏绑定信息}({@link DeleteFenceBindRequest 请求参数}): {@link DeleteFenceBindResponse 返回参数} */
  DeleteFenceBind(data: DeleteFenceBindRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFenceBindResponse>;
  /** {@link DeleteLoRaFrequency 删除LoRa自定义频点}({@link DeleteLoRaFrequencyRequest 请求参数}): {@link DeleteLoRaFrequencyResponse 返回参数} */
  DeleteLoRaFrequency(data?: DeleteLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoRaFrequencyResponse>;
  /** {@link DeleteLoRaGateway 删除 LoRa 网关}({@link DeleteLoRaGatewayRequest 请求参数}): {@link DeleteLoRaGatewayResponse 返回参数} */
  DeleteLoRaGateway(data: DeleteLoRaGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoRaGatewayResponse>;
  /** {@link DeletePositionFence 删除围栏}({@link DeletePositionFenceRequest 请求参数}): {@link DeletePositionFenceResponse 返回参数} */
  DeletePositionFence(data: DeletePositionFenceRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePositionFenceResponse>;
  /** {@link DeletePositionSpace 删除位置空间}({@link DeletePositionSpaceRequest 请求参数}): {@link DeletePositionSpaceResponse 返回参数} */
  DeletePositionSpace(data: DeletePositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePositionSpaceResponse>;
  /** {@link DeleteProject 删除项目}({@link DeleteProjectRequest 请求参数}): {@link DeleteProjectResponse 返回参数} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** {@link DeleteStudioProduct 删除产品}({@link DeleteStudioProductRequest 请求参数}): {@link DeleteStudioProductResponse 返回参数} */
  DeleteStudioProduct(data: DeleteStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStudioProductResponse>;
  /** {@link DeleteTopicPolicy 删除Topic}({@link DeleteTopicPolicyRequest 请求参数}): {@link DeleteTopicPolicyResponse 返回参数} */
  DeleteTopicPolicy(data: DeleteTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicPolicyResponse>;
  /** {@link DeleteTopicRule 删除规则}({@link DeleteTopicRuleRequest 请求参数}): {@link DeleteTopicRuleResponse 返回参数} */
  DeleteTopicRule(data: DeleteTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTopicRuleResponse>;
  /** {@link DescribeBatchProduction 获取量产详情}({@link DescribeBatchProductionRequest 请求参数}): {@link DescribeBatchProductionResponse 返回参数} */
  DescribeBatchProduction(data: DescribeBatchProductionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchProductionResponse>;
  /** {@link DescribeBindedProducts 获取网关产品已经绑定的子产品}({@link DescribeBindedProductsRequest 请求参数}): {@link DescribeBindedProductsResponse 返回参数} */
  DescribeBindedProducts(data: DescribeBindedProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBindedProductsResponse>;
  /** {@link DescribeDevice 查看设备详情}({@link DescribeDeviceRequest 请求参数}): {@link DescribeDeviceResponse 返回参数} */
  DescribeDevice(data: DescribeDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceResponse>;
  /** {@link DescribeDeviceBindGateway 查询设备绑定的网关设备}({@link DescribeDeviceBindGatewayRequest 请求参数}): {@link DescribeDeviceBindGatewayResponse 返回参数} */
  DescribeDeviceBindGateway(data: DescribeDeviceBindGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceBindGatewayResponse>;
  /** {@link DescribeDeviceData 获取设备属性数据}({@link DescribeDeviceDataRequest 请求参数}): {@link DescribeDeviceDataResponse 返回参数} */
  DescribeDeviceData(data: DescribeDeviceDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceDataResponse>;
  /** {@link DescribeDeviceDataHistory 获取设备历史数据}({@link DescribeDeviceDataHistoryRequest 请求参数}): {@link DescribeDeviceDataHistoryResponse 返回参数} */
  DescribeDeviceDataHistory(data: DescribeDeviceDataHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceDataHistoryResponse>;
  /** {@link DescribeDevicePositionList 获取设备位置列表}({@link DescribeDevicePositionListRequest 请求参数}): {@link DescribeDevicePositionListResponse 返回参数} */
  DescribeDevicePositionList(data: DescribeDevicePositionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePositionListResponse>;
  /** {@link DescribeFenceBindList 获取围栏绑定信息列表}({@link DescribeFenceBindListRequest 请求参数}): {@link DescribeFenceBindListResponse 返回参数} */
  DescribeFenceBindList(data: DescribeFenceBindListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFenceBindListResponse>;
  /** {@link DescribeFenceEventList 获取围栏告警事件列表}({@link DescribeFenceEventListRequest 请求参数}): {@link DescribeFenceEventListResponse 返回参数} */
  DescribeFenceEventList(data: DescribeFenceEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFenceEventListResponse>;
  /** {@link DescribeFirmwareTask 查询固件升级任务列表}({@link DescribeFirmwareTaskRequest 请求参数}): {@link DescribeFirmwareTaskResponse 返回参数} */
  DescribeFirmwareTask(data: DescribeFirmwareTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirmwareTaskResponse>;
  /** {@link DescribeGatewayBindDevices 获取网关绑定的子设备列表}({@link DescribeGatewayBindDevicesRequest 请求参数}): {@link DescribeGatewayBindDevicesResponse 返回参数} */
  DescribeGatewayBindDevices(data: DescribeGatewayBindDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayBindDevicesResponse>;
  /** {@link DescribeGatewaySubDeviceList 查询绑定到家庭的网关设备的子设备列表}({@link DescribeGatewaySubDeviceListRequest 请求参数}): {@link DescribeGatewaySubDeviceListResponse 返回参数} */
  DescribeGatewaySubDeviceList(data: DescribeGatewaySubDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewaySubDeviceListResponse>;
  /** {@link DescribeGatewaySubProducts 获取网关可操作的子产品}({@link DescribeGatewaySubProductsRequest 请求参数}): {@link DescribeGatewaySubProductsResponse 返回参数} */
  DescribeGatewaySubProducts(data: DescribeGatewaySubProductsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewaySubProductsResponse>;
  /** {@link DescribeLoRaFrequency 获取LoRa自定义频点详情}({@link DescribeLoRaFrequencyRequest 请求参数}): {@link DescribeLoRaFrequencyResponse 返回参数} */
  DescribeLoRaFrequency(data?: DescribeLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoRaFrequencyResponse>;
  /** {@link DescribeModelDefinition 查询产品数据模板}({@link DescribeModelDefinitionRequest 请求参数}): {@link DescribeModelDefinitionResponse 返回参数} */
  DescribeModelDefinition(data: DescribeModelDefinitionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelDefinitionResponse>;
  /** {@link DescribePositionFenceList 获取围栏列表}({@link DescribePositionFenceListRequest 请求参数}): {@link DescribePositionFenceListResponse 返回参数} */
  DescribePositionFenceList(data: DescribePositionFenceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePositionFenceListResponse>;
  /** {@link DescribeProject 查询项目详情}({@link DescribeProjectRequest 请求参数}): {@link DescribeProjectResponse 返回参数} */
  DescribeProject(data: DescribeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectResponse>;
  /** {@link DescribeSpaceFenceEventList 获取位置空间中围栏告警事件列表}({@link DescribeSpaceFenceEventListRequest 请求参数}): {@link DescribeSpaceFenceEventListResponse 返回参数} */
  DescribeSpaceFenceEventList(data: DescribeSpaceFenceEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceFenceEventListResponse>;
  /** {@link DescribeStudioProduct 获取产品详情}({@link DescribeStudioProductRequest 请求参数}): {@link DescribeStudioProductResponse 返回参数} */
  DescribeStudioProduct(data: DescribeStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStudioProductResponse>;
  /** {@link DescribeTopicPolicy 查看Topic详情}({@link DescribeTopicPolicyRequest 请求参数}): {@link DescribeTopicPolicyResponse 返回参数} */
  DescribeTopicPolicy(data: DescribeTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicPolicyResponse>;
  /** {@link DescribeTopicRule 获取规则信息}({@link DescribeTopicRuleRequest 请求参数}): {@link DescribeTopicRuleResponse 返回参数} */
  DescribeTopicRule(data: DescribeTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopicRuleResponse>;
  /** {@link DirectBindDeviceInFamily 直接绑定设备和家庭}({@link DirectBindDeviceInFamilyRequest 请求参数}): {@link DirectBindDeviceInFamilyResponse 返回参数} */
  DirectBindDeviceInFamily(data: DirectBindDeviceInFamilyRequest, config?: AxiosRequestConfig): AxiosPromise<DirectBindDeviceInFamilyResponse>;
  /** {@link DisableTopicRule 禁用规则}({@link DisableTopicRuleRequest 请求参数}): {@link DisableTopicRuleResponse 返回参数} */
  DisableTopicRule(data: DisableTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DisableTopicRuleResponse>;
  /** {@link EnableTopicRule 启用规则}({@link EnableTopicRuleRequest 请求参数}): {@link EnableTopicRuleResponse 返回参数} */
  EnableTopicRule(data: EnableTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<EnableTopicRuleResponse>;
  /** {@link GenSingleDeviceSignatureOfPublic 生成单个设备绑定的签名}({@link GenSingleDeviceSignatureOfPublicRequest 请求参数}): {@link GenSingleDeviceSignatureOfPublicResponse 返回参数} */
  GenSingleDeviceSignatureOfPublic(data: GenSingleDeviceSignatureOfPublicRequest, config?: AxiosRequestConfig): AxiosPromise<GenSingleDeviceSignatureOfPublicResponse>;
  /** {@link GetBatchProductionsList 列出量产数据列表}({@link GetBatchProductionsListRequest 请求参数}): {@link GetBatchProductionsListResponse 返回参数} */
  GetBatchProductionsList(data: GetBatchProductionsListRequest, config?: AxiosRequestConfig): AxiosPromise<GetBatchProductionsListResponse>;
  /** {@link GetCOSURL 获取固件存储请求地址}({@link GetCOSURLRequest 请求参数}): {@link GetCOSURLResponse 返回参数} */
  GetCOSURL(data: GetCOSURLRequest, config?: AxiosRequestConfig): AxiosPromise<GetCOSURLResponse>;
  /** {@link GetDeviceList 获取产品的设备列表}({@link GetDeviceListRequest 请求参数}): {@link GetDeviceListResponse 返回参数} */
  GetDeviceList(data: GetDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceListResponse>;
  /** {@link GetDeviceLocationHistory 获取设备历史位置}({@link GetDeviceLocationHistoryRequest 请求参数}): {@link GetDeviceLocationHistoryResponse 返回参数} */
  GetDeviceLocationHistory(data: GetDeviceLocationHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceLocationHistoryResponse>;
  /** {@link GetFamilyDeviceUserList 获取设备绑定的用户列表}({@link GetFamilyDeviceUserListRequest 请求参数}): {@link GetFamilyDeviceUserListResponse 返回参数} */
  GetFamilyDeviceUserList(data: GetFamilyDeviceUserListRequest, config?: AxiosRequestConfig): AxiosPromise<GetFamilyDeviceUserListResponse>;
  /** {@link GetGatewaySubDeviceList 获取指定网关设备的子设备列表}({@link GetGatewaySubDeviceListRequest 请求参数}): {@link GetGatewaySubDeviceListResponse 返回参数} */
  GetGatewaySubDeviceList(data: GetGatewaySubDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetGatewaySubDeviceListResponse>;
  /** {@link GetLoRaGatewayList 获取 LoRa 网关列表}({@link GetLoRaGatewayListRequest 请求参数}): {@link GetLoRaGatewayListResponse 返回参数} */
  GetLoRaGatewayList(data: GetLoRaGatewayListRequest, config?: AxiosRequestConfig): AxiosPromise<GetLoRaGatewayListResponse>;
  /** {@link GetPositionSpaceList 获取位置空间列表}({@link GetPositionSpaceListRequest 请求参数}): {@link GetPositionSpaceListResponse 返回参数} */
  GetPositionSpaceList(data: GetPositionSpaceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetPositionSpaceListResponse>;
  /** {@link GetProjectList 获取项目列表}({@link GetProjectListRequest 请求参数}): {@link GetProjectListResponse 返回参数} */
  GetProjectList(data?: GetProjectListRequest, config?: AxiosRequestConfig): AxiosPromise<GetProjectListResponse>;
  /** {@link GetStudioProductList 获取产品列表}({@link GetStudioProductListRequest 请求参数}): {@link GetStudioProductListResponse 返回参数} */
  GetStudioProductList(data?: GetStudioProductListRequest, config?: AxiosRequestConfig): AxiosPromise<GetStudioProductListResponse>;
  /** {@link GetTopicRuleList 获取规则列表}({@link GetTopicRuleListRequest 请求参数}): {@link GetTopicRuleListResponse 返回参数} */
  GetTopicRuleList(data: GetTopicRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<GetTopicRuleListResponse>;
  /** {@link ListEventHistory 获取设备的历史事件}({@link ListEventHistoryRequest 请求参数}): {@link ListEventHistoryResponse 返回参数} */
  ListEventHistory(data: ListEventHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<ListEventHistoryResponse>;
  /** {@link ListFirmwares 获取固件列表}({@link ListFirmwaresRequest 请求参数}): {@link ListFirmwaresResponse 返回参数} */
  ListFirmwares(data: ListFirmwaresRequest, config?: AxiosRequestConfig): AxiosPromise<ListFirmwaresResponse>;
  /** {@link ListTopicPolicy 获取Topic列表}({@link ListTopicPolicyRequest 请求参数}): {@link ListTopicPolicyResponse 返回参数} */
  ListTopicPolicy(data: ListTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopicPolicyResponse>;
  /** {@link ModifyFenceBind 更新围栏绑定信息}({@link ModifyFenceBindRequest 请求参数}): {@link ModifyFenceBindResponse 返回参数} */
  ModifyFenceBind(data: ModifyFenceBindRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFenceBindResponse>;
  /** {@link ModifyLoRaFrequency 修改LoRa自定义频点}({@link ModifyLoRaFrequencyRequest 请求参数}): {@link ModifyLoRaFrequencyResponse 返回参数} */
  ModifyLoRaFrequency(data?: ModifyLoRaFrequencyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoRaFrequencyResponse>;
  /** {@link ModifyLoRaGateway 修改 LoRa 网关信息}({@link ModifyLoRaGatewayRequest 请求参数}): {@link ModifyLoRaGatewayResponse 返回参数} */
  ModifyLoRaGateway(data: ModifyLoRaGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoRaGatewayResponse>;
  /** {@link ModifyModelDefinition 修改产品数据模板}({@link ModifyModelDefinitionRequest 请求参数}): {@link ModifyModelDefinitionResponse 返回参数} */
  ModifyModelDefinition(data: ModifyModelDefinitionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModelDefinitionResponse>;
  /** {@link ModifyPositionFence 更新围栏}({@link ModifyPositionFenceRequest 请求参数}): {@link ModifyPositionFenceResponse 返回参数} */
  ModifyPositionFence(data?: ModifyPositionFenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPositionFenceResponse>;
  /** {@link ModifyPositionSpace 更新位置空间}({@link ModifyPositionSpaceRequest 请求参数}): {@link ModifyPositionSpaceResponse 返回参数} */
  ModifyPositionSpace(data: ModifyPositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPositionSpaceResponse>;
  /** {@link ModifyProject 修改项目}({@link ModifyProjectRequest 请求参数}): {@link ModifyProjectResponse 返回参数} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** {@link ModifySpaceProperty 更新位置空间产品属性}({@link ModifySpacePropertyRequest 请求参数}): {@link ModifySpacePropertyResponse 返回参数} */
  ModifySpaceProperty(data: ModifySpacePropertyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpacePropertyResponse>;
  /** {@link ModifyStudioProduct 修改产品}({@link ModifyStudioProductRequest 请求参数}): {@link ModifyStudioProductResponse 返回参数} */
  ModifyStudioProduct(data: ModifyStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStudioProductResponse>;
  /** {@link ModifyTopicPolicy 更新Topic}({@link ModifyTopicPolicyRequest 请求参数}): {@link ModifyTopicPolicyResponse 返回参数} */
  ModifyTopicPolicy(data: ModifyTopicPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicPolicyResponse>;
  /** {@link ModifyTopicRule 修改规则}({@link ModifyTopicRuleRequest 请求参数}): {@link ModifyTopicRuleResponse 返回参数} */
  ModifyTopicRule(data: ModifyTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTopicRuleResponse>;
  /** {@link PublishBroadcastMessage 发布广播消息}({@link PublishBroadcastMessageRequest 请求参数}): {@link PublishBroadcastMessageResponse 返回参数} */
  PublishBroadcastMessage(data: PublishBroadcastMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishBroadcastMessageResponse>;
  /** {@link PublishMessage 设备透传指令控制}({@link PublishMessageRequest 请求参数}): {@link PublishMessageResponse 返回参数} */
  PublishMessage(data: PublishMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishMessageResponse>;
  /** {@link PublishRRPCMessage 发布RRPC消息}({@link PublishRRPCMessageRequest 请求参数}): {@link PublishRRPCMessageResponse 返回参数} */
  PublishRRPCMessage(data: PublishRRPCMessageRequest, config?: AxiosRequestConfig): AxiosPromise<PublishRRPCMessageResponse>;
  /** {@link ReleaseStudioProduct 发布产品}({@link ReleaseStudioProductRequest 请求参数}): {@link ReleaseStudioProductResponse 返回参数} */
  ReleaseStudioProduct(data: ReleaseStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseStudioProductResponse>;
  /** {@link SearchPositionSpace 搜索位置空间}({@link SearchPositionSpaceRequest 请求参数}): {@link SearchPositionSpaceResponse 返回参数} */
  SearchPositionSpace(data: SearchPositionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<SearchPositionSpaceResponse>;
  /** {@link SearchStudioProduct 搜索产品}({@link SearchStudioProductRequest 请求参数}): {@link SearchStudioProductResponse 返回参数} */
  SearchStudioProduct(data?: SearchStudioProductRequest, config?: AxiosRequestConfig): AxiosPromise<SearchStudioProductResponse>;
  /** {@link SearchTopicRule 搜索规则}({@link SearchTopicRuleRequest 请求参数}): {@link SearchTopicRuleResponse 返回参数} */
  SearchTopicRule(data: SearchTopicRuleRequest, config?: AxiosRequestConfig): AxiosPromise<SearchTopicRuleResponse>;
  /** {@link UnbindDevices 批量解绑子设备}({@link UnbindDevicesRequest 请求参数}): {@link UnbindDevicesResponse 返回参数} */
  UnbindDevices(data: UnbindDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindDevicesResponse>;
  /** {@link UnbindProducts 批量解绑子产品}({@link UnbindProductsRequest 请求参数}): {@link UnbindProductsResponse 返回参数} */
  UnbindProducts(data: UnbindProductsRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindProductsResponse>;
  /** {@link UpdateDevicesEnableState 批量禁用启用设备}({@link UpdateDevicesEnableStateRequest 请求参数}): {@link UpdateDevicesEnableStateResponse 返回参数} */
  UpdateDevicesEnableState(data: UpdateDevicesEnableStateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDevicesEnableStateResponse>;
  /** {@link UpdateFirmware 更新设备固件}({@link UpdateFirmwareRequest 请求参数}): {@link UpdateFirmwareResponse 返回参数} */
  UpdateFirmware(data: UpdateFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFirmwareResponse>;
  /** {@link UploadFirmware 创建固件版本信息}({@link UploadFirmwareRequest 请求参数}): {@link UploadFirmwareResponse 返回参数} */
  UploadFirmware(data: UploadFirmwareRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFirmwareResponse>;
}

export declare type Versions = ["2019-04-23"];

export default Iotexplorer;