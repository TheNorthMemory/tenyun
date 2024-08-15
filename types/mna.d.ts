/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 激活设备 */
declare interface ActivateHardware {
  /** 厂商名称 */
  Vendor: string | null;
  /** 设备SN序列号 */
  SN: string;
  /** 设备名称 */
  DeviceName: string | null;
  /** 备注 */
  Description?: string | null;
  /** 设备密钥 */
  DataKey?: string;
  /** 接入环境。0：公有云网关；1：自有网关；2：公有云网关和自有网关。不填默认公有云网关。 具体含义： 公有云网关：即该设备只能接入公有云网关（就近接入） 自有网关：即该设备只能接入已经注册上线的自有网关（就近接入或固定ip接入） 公有云网关和自有网关：即该设备同时可以接入公有云网关和已经注册上线的自有网关（就近接入或固定ip接入） */
  AccessScope?: number;
  /** 当付费方为租户时，可选择租户license付费方式：0，月度授权1，永久授权若不传则默认为月度授权。当付费方为厂商时，此参数无效 */
  LicensePayMode?: number | null;
  /** 设备分组ID */
  GroupId?: string | null;
  /** 设备分组名称，预留参数，需要分组时传入GroupId */
  GroupName?: string | null;
  /** 设备无流量包处理方式，0: 按量付费，1: 截断加速 */
  FlowTrunc?: number | null;
  /** 激活后的设备ID */
  DeviceId?: string | null;
}

/** 接口能力扩展，用于填充电信的加速Token，并为未来参数提供兼容空间 */
declare interface Capacity {
  /** 电信鉴权的Token。要加速的电信手机终端访问 http://qos.189.cn/qos-api/getToken?appid=TencentCloud 页面，获取返回结果中result的值 */
  CTCCToken?: string;
  /** 终端所处在的省份，建议不填写由服务端自动获取，若需填写请填写带有省、市、自治区、特别行政区等后缀的省份中文全称 */
  Province?: string;
}

/** 加速策略关键数据 */
declare interface Context {
  /** 测速数据 */
  NetworkData?: NetworkData;
  /** 用户期望最低门限 */
  ExpectedLowThreshold?: ExpectedThreshold;
  /** 用户期望最高门限 */
  ExpectedHighThreshold?: ExpectedThreshold;
}

/** 多网聚合加速目标地址结构体 */
declare interface DestAddressInfo {
  /** 加速业务目标 ip 地址数组 */
  DestIp: string[];
}

/** 设备的基本信息 */
declare interface DeviceBaseInfo {
  /** 设备唯一ID */
  DeviceId?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 设备创建的时间，单位：ms */
  CreateTime?: string;
  /** 设备最后在线时间，单位：ms */
  LastTime?: string;
  /** 设备的备注 */
  Remark?: string;
  /** 接入环境。0：公有云网关；1：自有网关；2：公有云网关和自有网关。默认公有云网关。 具体含义： 公有云网关：即该设备只能接入公有云网关（就近接入） 自有网关：即该设备只能接入已经注册上线的自有网关（就近接入或固定ip接入） 公有云网关和自有网关：即该设备同时可以接入公有云网关和已经注册上线的自有网关（就近接入或固定ip接入） */
  AccessScope?: number;
  /** license授权有效期 0：月度授权 1：永久授权 */
  LicensePayMode?: number | null;
  /** 付费方 0：厂商付费 1：客户付费 */
  Payer?: number | null;
  /** 设备分组ID */
  GroupId?: string | null;
  /** 设备分组名称 */
  GroupName?: string | null;
  /** 设备无流量包处理方式，0: 按量付费，1: 截断加速 */
  FlowTrunc?: number | null;
}

/** 设备详细信息 */
declare interface DeviceDetails {
  /** 设备基本信息 */
  DeviceBaseInfo?: DeviceBaseInfo;
  /** 设备网络信息 */
  DeviceNetInfo?: DeviceNetInfo[] | null;
  /** 聚合服务器地址 */
  GatewaySite?: string | null;
  /** 业务下行速率 */
  BusinessDownRate?: number | null;
  /** 业务上行速率 */
  BusinessUpRate?: number | null;
}

/** 设备信息结构体 */
declare interface DeviceInfo {
  /** 运营商1：移动 2：电信3：联通4：广电99：其他 */
  Vendor?: number;
  /** 设备操作系统：1：Android2： IOS99：其他 */
  OS?: number;
  /** 设备唯一标识IOS 填写 IDFVAndroid 填写 IMEI */
  DeviceId?: string;
  /** 用户手机号码 */
  PhoneNum?: string;
  /** 无线信息1：4G2：5G3：WIFI99：其他 */
  Wireless?: number;
}

/** 设备网络状态信息 */
declare interface DeviceNetInfo {
  /** 网络类型：0:数据1:Wi-Fi2:有线 */
  Type: number | null;
  /** 启用/禁用 */
  DataEnable: boolean | null;
  /** 上行限速 */
  UploadLimit: string | null;
  /** 下行限速 */
  DownloadLimit: string | null;
  /** 接收实时速率 */
  DataRx: number | null;
  /** 发送实时速率 */
  DataTx: number | null;
  /** 运营商类型：1: 中国移动；2: 中国电信; 3: 中国联通 */
  Vendor: number | null;
  /** 连接状态：0:无连接1:连接中2:已连接 */
  State: number | null;
  /** 公网IP */
  PublicIp: string | null;
  /** 信号强度/单位：dbm */
  SignalStrength: number | null;
  /** 数据网络类型：-1 ：无效值 2：2G 3：3G 4：4G 5：5G */
  Rat: number | null;
  /** 网卡名 */
  NetInfoName: string | null;
  /** 下行实时速率（浮点数类型代替上一版本DataRx的整型） */
  DownRate?: number | null;
  /** 上行实时速率（浮点数类型代替上一版本TxRate的整型） */
  UpRate?: number | null;
}

/** 设备付费模式信息 */
declare interface DevicePayModeInfo {
  /** 设备ID */
  DeviceId?: string;
  /** 付费模式。1：预付费流量包0：按流量后付费 */
  PayMode?: number;
  /** 付费模式描述 */
  PayModeDesc?: string;
  /** 流量包ID，仅当付费模式为流量包类型时才有。 */
  ResourceId?: string | null;
}

/** 用户期望门限 */
declare interface ExpectedThreshold {
  /** 期望发起加速的时延阈值 */
  RTT: number;
  /** 期望发起加速的丢包率阈值 */
  Loss: number;
  /** 期望发起加速的抖动阈值 */
  Jitter: number;
}

/** 设备流量信息 */
declare interface FlowDetails {
  /** 流量数据点 */
  NetDetails?: NetDetails[] | null;
  /** 设备ID */
  DeviceId?: string | null;
  /** 流量最大值（单位：bytes） */
  MaxValue?: number | null;
  /** 流量平均值（单位：bytes） */
  AvgValue?: number | null;
  /** 流量总值（单位：bytes） */
  TotalValue?: number | null;
}

/** 流量包信息 */
declare interface FlowPackageInfo {
  /** 流量包的唯一资源ID */
  ResourceId?: string;
  /** 流量包所属的用户AppId */
  AppId?: number;
  /** 流量包规格类型。可取值如下：DEVICE_1_FLOW_20G、DEVICE_2_FLOW_50G、DEVICE_3_FLOW_100G、DEVICE_5_FLOW_500G，分别代表20G、50G、100G、500G档位的流量包。档位也影响流量包可绑定的设备数量上限：20G：最多绑定1个设备50G：最多绑定2个设备100G：最多绑定3个设备500G：最多绑定5个设备 */
  PackageType?: string;
  /** 流量包状态，0：未生效，1：有效期内，2：已过期 */
  Status?: number;
  /** 购买时间，Unix时间戳格式，单位：秒 */
  CreateTime?: number | null;
  /** 生效时间，Unix时间戳格式，单位：秒 */
  ActiveTime?: number;
  /** 过期时间，Unix时间戳格式，单位：秒 */
  ExpireTime?: number;
  /** 流量包绑定的设备ID列表 */
  DeviceList?: string[];
  /** 流量包总容量，单位：MB */
  CapacitySize?: number;
  /** 流量包余量，单位：MB */
  CapacityRemain?: number;
  /** 自动续费标识。true代表自动续费，false代表不自动续费 */
  RenewFlag?: boolean;
  /** 资源包变更状态，0：未发生变配；1：变配中；2：已变配或已续费 */
  ModifyStatus?: number;
  /** 流量截断标识。true代表开启流量截断，false代表不开启流量截断 */
  TruncFlag?: boolean;
  /** 流量包精确余量，单位：MB */
  CapacityRemainPrecise?: number;
}

/** 分组的基本信息 */
declare interface GroupInfo {
  /** 分组ID */
  GroupId?: string;
  /** 分组名 */
  GroupName?: string;
  /** 分组创建的时间，单位：ms */
  CreateTime?: string;
  /** 分组更新的时间，单位：ms */
  UpdateTime?: string;
  /** 分组描述 */
  Description?: string | null;
  /** 分组中的设备数量 */
  DeviceNum?: number;
}

/** 新建Hardware入参 */
declare interface Hardware {
  /** 硬件序列号 */
  SN: string | null;
  /** license计费模式：1，租户付费2，厂商月付费3，厂商永久授权 */
  LicenseChargingMode: number | null;
  /** 设备描述 */
  Description?: string | null;
  /** 硬件ID，入参无需传递 */
  HardwareId?: string | null;
}

/** 硬件信息 */
declare interface HardwareInfo {
  /** 设备ID */
  DeviceId?: string | null;
  /** 设备名称 */
  DeviceName?: string | null;
  /** 激活时间 */
  ActiveTime?: string | null;
  /** 最后在线时间 */
  LastOnlineTime?: string | null;
  /** 备注 */
  Description?: string | null;
  /** 厂商备注 */
  VendorDescription?: string | null;
  /** license计费模式： 1，租户月付费 2，厂商月付费 3，license永久授权注：后续将废弃此参数，新接入请使用LicensePayMode和Payer */
  LicenseChargingMode?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 硬件序列号 */
  SN?: string | null;
  /** license授权有效期 0：月度授权 1：永久授权 */
  LicensePayMode?: number | null;
  /** 付费方 0：客户付费 1：厂商付费 */
  Payer?: number | null;
  /** 设备分组ID */
  GroupId?: string | null;
  /** 设备分组名称 */
  GroupName?: string | null;
  /** 设备无流量包处理方式，0: 按量付费，1: 截断加速 */
  FlowTrunc?: number | null;
}

/** 三层互通规则信息 */
declare interface L3ConnInfo {
  /** 互通规则ID */
  L3ConnId?: string;
  /** 互通设备ID */
  DeviceId1?: string;
  /** 互通规则CIDR */
  Cidr1?: string;
  /** 互通设备ID */
  DeviceId2?: string;
  /** 互通规则CIDR */
  Cidr2?: string;
  /** 互通规则启用状态 */
  Enable?: boolean;
  /** 互通规则描述 */
  Description?: string | null;
}

/** 流量监控指标 */
declare interface MonitorData {
  /** 时间点：s */
  Time: string;
  /** 业务指标（bps/ms/%） */
  BusinessMetrics: number | null;
  /** 网卡状态信息 */
  SlotNetInfo: SlotNetInfo[] | null;
}

/** 网络详细信息 */
declare interface NetDetails {
  /** 流量值（byte） */
  Current?: number;
  /** 时间点，单位：s */
  Time?: string;
}

/** 测速数据 */
declare interface NetworkData {
  /** 时延数组，最大长度30 */
  RTT: number[];
  /** 丢包率 */
  Loss: number;
  /** 抖动 */
  Jitter: number;
  /** 10位秒级时间戳 */
  Timestamp: number;
}

/** 网卡流量指标数据 */
declare interface SlotNetInfo {
  /** 网卡名 */
  NetInfoName: string | null;
  /** 公网IP */
  PublicIP: string | null;
  /** 指标数据（bps/ms/%） */
  Current: number | null;
}

/** 移动网络加速源地址结构体 */
declare interface SrcAddressInfo {
  /** 用户私网 ipv4 地址 */
  SrcIpv4?: string;
  /** 用户公网 ipv4 地址 */
  SrcPublicIpv4?: string;
  /** 用户 ipv6 地址 */
  SrcIpv6?: string;
}

/** 更新设备网络状态信息 */
declare interface UpdateNetInfo {
  /** 网络类型：0:数据1:Wi-Fi */
  Type?: number;
  /** 启用/禁用 */
  DataEnable?: boolean;
  /** 上行限速：bit */
  UploadLimit?: number;
  /** 下行限速：bit */
  DownloadLimit?: number;
  /** 网卡名 */
  NetInfoName?: string;
}

/** 厂商硬件详细信息 */
declare interface VendorHardware {
  /** 硬件id */
  HardwareId?: string | null;
  /** 硬件序列号 */
  SN?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 激活状态， 空：全部； 1:待激活； 2:已激活 */
  Status?: number | null;
  /** 激活时间 */
  ActiveTime?: string | null;
  /** 厂商备注 */
  Description?: string | null;
  /** 设备id */
  DeviceId?: string | null;
  /** license计费模式： 1，租户月付费 2，厂商月付费 3，license永久授权注：设备为租户付费且未激活（未选择月付还是永久付费）时，此参数返回1，仅代表租户付费。后续将废弃此参数，新接入请使用LicensePayMode和Payer */
  LicenseChargingMode?: number | null;
  /** 最后在线时间 */
  LastOnlineTime?: string | null;
  /** license授权有效期0：月度授权1：永久授权-1：未知 */
  LicensePayMode?: number | null;
  /** 付费方0：客户付费1：厂商付费 */
  Payer?: number | null;
}

declare interface ActivateHardwareRequest {
  /** 待激活的设备列表 */
  Hardware: ActivateHardware[];
}

declare interface ActivateHardwareResponse {
  /** 完成激活的设备信息 */
  HardwareInfo?: ActivateHardware[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddDeviceRequest {
  /** 新建设备的名称 */
  DeviceName: string;
  /** 新建设备的备注 */
  Remark?: string;
  /** 新建设备的base64密钥字符串，非必选，如果不填写则由系统自动生成 */
  DataKey?: string;
  /** 是否设置预置密钥 */
  Encrypted?: boolean;
  /** 接入环境。0：公有云网关；1：自有网关；2：公有云网关和自有网关。不填默认公有云网关。具体含义：公有云网关：即该设备只能接入公有云网关（就近接入）自有网关：即该设备只能接入已经注册上线的自有网关（就近接入或固定ip接入）公有云网关和自有网关：即该设备同时可以接入公有云网关和已经注册上线的自有网关（就近接入或固定ip接入） */
  AccessScope?: number;
  /** license付费方式： 0，月度授权 1，永久授权 若不传则默认为月度授权 */
  LicensePayMode?: number;
  /** 设备分组名称，非必选，预留参数，需要分组时传入GroupId */
  GroupName?: string;
  /** 设备分组ID，非必选，如果不填写则默认设备无分组 */
  GroupId?: string;
  /** 设备无流量包处理方式，0: 按量付费，1: 截断加速 */
  FlowTrunc?: number;
}

declare interface AddDeviceResponse {
  /** 经过加密算法加密后的base64格式密钥 */
  DataKey?: string;
  /** 设备ID */
  DeviceId?: string;
  /** 签名字符串 */
  Signature?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddGroupRequest {
  /** 分组的名称 */
  GroupName: string;
  /** 分组的描述 */
  Description?: string;
}

declare interface AddGroupResponse {
  /** 分组的唯一ID，仅做分组唯一区分 */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddHardwareRequest {
  /** 硬件列表 */
  Hardware: Hardware[];
}

declare interface AddHardwareResponse {
  /** 硬件设备 */
  Hardware?: Hardware[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddL3ConnRequest {
  /** 设置互通网段CIDR1，支持： 10.0.0.0 - 10.255.255.255，172.16.0.0 - 172.31.255.255，192.168.0.0 - 192.168.255.255 */
  Cidr1: string;
  /** 设置互通网段CIDR2，支持： 10.0.0.0 - 10.255.255.255，172.16.0.0 - 172.31.255.255，192.168.0.0 - 192.168.255.255 */
  Cidr2: string;
  /** CIDR1对应的设备ID */
  DeviceId1: string;
  /** CIDR2对应的设备ID */
  DeviceId2: string;
  /** 规则描述 */
  Description?: string;
}

declare interface AddL3ConnResponse {
  /** 互通规则ID */
  L3ConnId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEncryptedKeyRequest {
}

declare interface CreateEncryptedKeyResponse {
  /** 预置密钥 */
  EncryptedKey: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateQosRequest {
  /** 加速业务源地址信息，SrcIpv6和（SrcIpv4+SrcPublicIpv4）二选一，目前Ipv6不可用，全部填写以Ipv4参数为准。 */
  SrcAddressInfo: SrcAddressInfo;
  /** 加速业务目标地址信息 */
  DestAddressInfo: DestAddressInfo;
  /** 加速套餐T100K：时延性保障 + 带宽保障上下行保障 100kbpsT200K：时延性保障 + 带宽保障上下行保障 200kbpsT400K：时延性保障 + 带宽保障上下行保障 400kbpsBD1M：带宽型保障 + 下行带宽保障1MbpsBD2M：带宽型保障 + 下行带宽保障2MbpsBD4M：带宽型保障 + 下行带宽保障4MbpsBU1M：带宽型保障 + 上行带宽保障1MbpsBU2M：带宽型保障 + 上行带宽保障2MbpsBU4M：带宽型保障 + 上行带宽保障4Mbps */
  QosMenu: string;
  /** 申请加速的设备信息，包括运营商，操作系统，设备唯一标识等。 */
  DeviceInfo?: DeviceInfo;
  /** 期望加速时长（单位分钟），默认值30分钟 */
  Duration?: number;
  /** 接口能力扩展，如果是电信用户，必须填充CTCC Token字段 */
  Capacity?: Capacity;
  /** 应用模板ID */
  TemplateId?: string;
  /** 针对特殊协议进行加速1. IP （默认值）2. UDP3. TCP */
  Protocol?: number;
  /** 加速策略关键数据 */
  Context?: Context;
  /** 签名 */
  Extern?: string;
}

declare interface CreateQosResponse {
  /** 单次加速唯一 Id */
  SessionId?: string;
  /** 当前加速剩余时长（单位秒） */
  Duration?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDeviceRequest {
  /** 删除设备的唯一ID */
  DeviceId: string;
}

declare interface DeleteDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGroupRequest {
  /** 删除指定分组 */
  GroupId: string;
}

declare interface DeleteGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL3ConnRequest {
  /** 互通规则ID列表 */
  L3ConnIdList: string[];
}

declare interface DeleteL3ConnResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQosRequest {
  /** 单次加速唯一 Id */
  SessionId: string;
}

declare interface DeleteQosResponse {
  /** 单次加速唯一 Id */
  SessionId: string;
  /** 本次加速会话持续时间（单位秒） */
  Duration: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQosRequest {
  /** 单次加速唯一 Id */
  SessionId: string;
}

declare interface DescribeQosResponse {
  /** 0：无匹配的加速中会话1：存在匹配的加速中会话 */
  Status: number;
  /** 手机公网出口IP，仅匹配时返回 */
  SrcPublicIpv4: string | null;
  /** 业务访问目的IP，仅匹配时返回 */
  DestIpv4: string[] | null;
  /** 当前加速剩余时长（单位秒）有，仅匹配时返回 */
  Duration: number | null;
  /** 加速套餐类型，仅匹配时返回 */
  QosMenu: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDevicePayModeRequest {
  /** 设备ID列表 */
  DeviceIdList: string[];
}

declare interface GetDevicePayModeResponse {
  /** 结果信息 */
  Result?: DevicePayModeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDeviceRequest {
  /** 搜索指定设备的id */
  DeviceId: string;
}

declare interface GetDeviceResponse {
  /** 设备详细信息 */
  DeviceDetails?: DeviceDetails;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDevicesRequest {
  /** 每页显示记录数，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageSize: number;
  /** 当前查看页码，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageNumber: number;
  /** 搜索设备的关键字（ID或者设备名），为空时匹配所有设备 */
  Keyword?: string;
  /** DeviceType不传：返回所有设备；1:自有设备；2:三方设备 */
  DeviceType?: number;
}

declare interface GetDevicesResponse {
  /** 设备信息列表 */
  DeviceInfos?: DeviceBaseInfo[];
  /** 设备总记录条数 */
  Length?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFlowAlarmInfoRequest {
}

declare interface GetFlowAlarmInfoResponse {
  /** 流量包的告警阈值 */
  AlarmValue?: number | null;
  /** 告警通知回调url */
  NotifyUrl?: string | null;
  /** 告警通知回调key */
  CallbackKey?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFlowPackagesRequest {
  /** 页码，从1开始 */
  PageNumber: number;
  /** 每页个数 */
  PageSize: number;
  /** 流量包的唯一资源ID */
  ResourceId?: string;
  /** 流量包绑定的设备ID */
  DeviceId?: string;
  /** 流量包状态，0：未生效，1：有效期内，2：已过期 */
  Status?: number;
}

declare interface GetFlowPackagesResponse {
  /** 流量包列表 */
  PackageList?: FlowPackageInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFlowStatisticByGroupRequest {
  /** 分组ID */
  GroupId: string;
  /** 开始查找时间 */
  BeginTime: number;
  /** 截止时间 */
  EndTime: number;
  /** 流量种类（1：上行流量，2：下行流量， 3: 上下行总和） */
  Type: number;
  /** 时间粒度（1：按小时统计，2：按天统计） */
  TimeGranularity: number;
  /** 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。 */
  AccessRegion?: string;
  /** 网关类型。0：公有云网关；1：自有网关。不传默认为0。 */
  GatewayType?: number;
}

declare interface GetFlowStatisticByGroupResponse {
  /** 流量详细信息 */
  NetDetails?: NetDetails[];
  /** 查找时间段流量使用最大值（单位：byte） */
  MaxValue?: number;
  /** 查找时间段流量使用平均值（单位：byte） */
  AvgValue?: number;
  /** 查找时间段流量使用总量（单位：byte） */
  TotalValue?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFlowStatisticByRegionRequest {
  /** 开始查找时间 */
  BeginTime: number;
  /** 截止时间 */
  EndTime: number;
  /** 流量种类（1：上行流量，2：下行流量， 3: 上下行总和） */
  Type: number;
  /** 时间粒度（1：按小时统计，2：按天统计） */
  TimeGranularity: number;
  /** 网关类型。0：公有云网关；1：自有网关。 */
  GatewayType: number;
  /** 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。 */
  AccessRegion?: string;
}

declare interface GetFlowStatisticByRegionResponse {
  /** 流量详细信息 */
  NetDetails?: NetDetails[];
  /** 查找时间段流量使用最大值（单位：byte） */
  MaxValue?: number;
  /** 查找时间段流量使用平均值（单位：byte） */
  AvgValue?: number;
  /** 查找时间段流量使用总量（单位：byte） */
  TotalValue?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFlowStatisticRequest {
  /** 设备ID */
  DeviceId: string;
  /** 开始查找时间 */
  BeginTime: number;
  /** 截止时间 */
  EndTime: number;
  /** 流量种类（1：上行流量，2：下行流量，3：上下行总和） */
  Type: number;
  /** 时间粒度（1：按小时统计，2：按天统计） */
  TimeGranularity: number;
  /** 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。 */
  AccessRegion?: string;
  /** 网关类型。0：公有云网关；1：自有网关。不传默认为0。 */
  GatewayType?: number;
  /** 设备ID列表，用于查询多设备流量，该字段启用时DeviceId可传"-1" */
  DeviceList?: string[];
}

declare interface GetFlowStatisticResponse {
  /** 流量详细信息 */
  NetDetails?: NetDetails[];
  /** 查找时间段流量使用最大值（单位：byte） */
  MaxValue?: number;
  /** 查找时间段流量使用平均值（单位：byte） */
  AvgValue?: number;
  /** 查找时间段流量使用总量（单位：byte） */
  TotalValue?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetGroupDetailRequest {
  /** 分组ID */
  GroupId: string;
  /** 每页显示记录数，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageSize: number;
  /** 每页显示记录数，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageNumber: number;
  /** 搜索关键字 */
  KeyWord?: string;
}

declare interface GetGroupDetailResponse {
  /** 分组基本信息 */
  GroupInfo?: GroupInfo;
  /** 分组中设备列表 */
  DeviceInfos?: DeviceBaseInfo[];
  /** 设备总记录条数 */
  Length?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetGroupListRequest {
  /** 每页显示记录数，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageSize: number;
  /** 当前查看页码，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageNumber: number;
  /** 搜索分组的关键字，为空时匹配所有分组 */
  Keyword?: string;
}

declare interface GetGroupListResponse {
  /** 设备信息列表 */
  GroupInfos?: GroupInfo[];
  /** 设备总记录条数 */
  Length?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetHardwareListRequest {
  /** 页码 */
  PageNumber: number;
  /** 页面设备数量 */
  PageSize: number;
  /** 关键字 */
  Keyword?: string;
}

declare interface GetHardwareListResponse {
  /** 硬件信息列表 */
  HardwareInfos?: HardwareInfo[];
  /** 硬件总数 */
  Length?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetL3ConnListRequest {
  /** 每页显示记录数，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageSize: number;
  /** 当前查看页码，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备 */
  PageNumber: number;
  /** 搜索分组的DeviceId，为空时匹配所有分组 */
  DeviceId?: string;
}

declare interface GetL3ConnListResponse {
  /** 互通规则列表 */
  L3ConnList?: L3ConnInfo[];
  /** 设备总记录条数 */
  Length?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetMultiFlowStatisticRequest {
  /** 设备id列表，单次最多请求10个设备 */
  DeviceIds: string[];
  /** 1659514436 */
  BeginTime: number;
  /** 1659515000 */
  EndTime: number;
  /** 统计流量类型（1：上行流量，2：下行流量， 3: 上下行总和） */
  Type: number;
  /** 统计时间粒度（1：按小时统计，2：按天统计） */
  TimeGranularity: number;
  /** 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。 */
  AccessRegion?: string;
  /** 网关类型。0：公有云网关；1：自有网关。不传默认为0。 */
  GatewayType?: number;
}

declare interface GetMultiFlowStatisticResponse {
  /** 批量设备流量信息 */
  FlowDetails?: FlowDetails[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetNetMonitorRequest {
  /** 设备id */
  DeviceId: string;
  /** 开始时间 */
  BeginTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 统计指标（上行速率："TxRate":bit/s，下行速率："RxRate":bit/s，丢包："Loss":%，时延："RTT":ms） */
  Metrics: string;
  /** 网关类型。0：公有云网关；1：自有网关。不传默认为0。 */
  GatewayType?: number;
}

declare interface GetNetMonitorResponse {
  /** 监控数据 */
  MonitorData?: MonitorData[] | null;
  /** 接入区域。取值范围：['MC','AP','EU','AM']MC=中国大陆AP=亚太EU=欧洲AM=美洲 */
  AccessRegion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPublicKeyRequest {
}

declare interface GetPublicKeyResponse {
  /** 非对称公钥 */
  PublicKey: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetStatisticDataRequest {
  /** 设备ID。若不指定设备，可传"-1" */
  DeviceId: string;
  /** 统计开始时间，单位：s */
  BeginTime: number;
  /** 统计结束时间，单位：s */
  EndTime: number;
  /** 聚合粒度：1:按小时统计2:按天统计 */
  TimeGranularity: number;
  /** 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。 */
  AccessRegion?: string;
  /** 网关类型。0：公有云网关；1：自有网关。不传默认为0。 */
  GatewayType?: number;
  /** 设备ID列表，最多10个设备，下载多个设备流量和时使用，此时DeviceId可传"-1" */
  DeviceList?: string[];
  /** 设备分组ID，若不指定分组则不传，按分组下载数据时使用 */
  GroupId?: string;
}

declare interface GetStatisticDataResponse {
  /** 文件地址url */
  FilePath?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetVendorHardwareRequest {
  /** 页码 */
  PageNumber: number;
  /** 页面数量 */
  PageSize: number;
  /** 关键字 */
  Keyword?: string;
  /** 激活状态，空：全部；1:待激活；2:已激活； */
  Status?: number;
}

declare interface GetVendorHardwareResponse {
  /** 硬件信息列表 */
  VendorHardware?: VendorHardware[];
  /** 设备总数 */
  Length?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GroupAddDeviceRequest {
  /** 分组ID */
  GroupId: string;
  /** 待添加的设备列表 */
  DeviceList: string[];
}

declare interface GroupAddDeviceResponse {
  /** 分组中的设备数量 */
  DeviceNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GroupDeleteDeviceRequest {
  /** 分组ID */
  GroupId: string;
  /** 待删除的设备列表 */
  DeviceList: string[];
}

declare interface GroupDeleteDeviceResponse {
  /** 分组中的设备数量 */
  DeviceNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPackageRenewFlagRequest {
  /** 流量包的唯一资源ID */
  ResourceId: string;
  /** 自动续费标识。true代表自动续费，false代表不自动续费 */
  RenewFlag: boolean;
}

declare interface ModifyPackageRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OrderFlowPackageRequest {
  /** 流量包规格类型。可取值如下：DEVICE_1_FLOW_20G、DEVICE_2_FLOW_50G、DEVICE_3_FLOW_100G、DEVICE_5_FLOW_500G，分别代表20G、50G、100G、500G档位的流量包。档位也影响流量包可绑定的设备数量上限：20G：最多绑定1个设备50G：最多绑定2个设备100G：最多绑定3个设备500G：最多绑定5个设备 */
  PackageType: string;
  /** 流量包绑定的设备ID列表。捆绑设备个数上限取决于包的规格档位：20G：最多绑定1个设备50G：最多绑定2个设备100G：最多绑定3个设备500G：最多绑定5个设备 */
  DeviceList: string[];
  /** 是否自动续费，该选项和流量截断冲突，只能开启一个 */
  AutoRenewFlag: boolean;
  /** 区域标识，0：国内，1：国外 */
  PackageRegion: number;
  /** 是否开启流量截断功能，该选项和自动续费冲突 */
  FlowTruncFlag?: boolean;
  /** 是否自动选择代金券，默认false。有多张券时的选择策略：按照可支付订单全部金额的券，先到期的券，可抵扣金额最大的券，余额最小的券，现金券 这个优先级进行扣券，且最多只抵扣一张券。 */
  AutoVoucher?: boolean;
  /** 指定代金券ID。自动选择代金券时此参数无效。目前只允许传入一张代金券。注：若指定的代金券不符合订单抵扣条件，则正常支付，不扣券 */
  VoucherIds?: string[];
}

declare interface OrderFlowPackageResponse {
  /** 流量包的唯一资源ID */
  ResourceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OrderPerLicenseRequest {
  /** 购买永久授权License的设备ID，如果是厂商未激活设备采用HardwareId */
  DeviceId: string;
  /** 设备类型，0: SDK，1: CPE，作为用户创建或激活设备时传0，作为厂商创建待激活设备时传1 */
  Type: number;
  /** 购买失败后是否回滚（删除）设备，默认true，如果设备绑定了生效中的流量包则不能回滚。 */
  RollBack?: boolean;
  /** 是否自动选择代金券，默认false。有多张券时的选择策略：按照可支付订单全部金额的券，先到期的券，可抵扣金额最大的券，余额最小的券，现金券 这个优先级进行扣券，且最多只抵扣一张券。 */
  AutoVoucher?: boolean;
  /** 指定代金券ID。自动选择代金券时此参数无效。目前只允许传入一张代金券。注：若指定的代金券不符合订单抵扣条件，则正常支付，不扣券 */
  VoucherIds?: string[];
}

declare interface OrderPerLicenseResponse {
  /** 一次性授权License的资源ID */
  ResourceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetNotifyUrlRequest {
  /** 告警通知回调url */
  NotifyUrl: string;
  /** 告警通知回调key */
  CallbackKey: string;
  /** 流量包的告警阈值 */
  AlarmValue?: number;
}

declare interface SetNotifyUrlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDeviceRequest {
  /** 设备id */
  DeviceId: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 设备备注 */
  Remark?: string;
  /** 更新设备网络信息 */
  UpdateNetInfo?: UpdateNetInfo[];
  /** 设备无流量包处理方式，0: 按量付费，1: 截断加速 */
  FlowTrunc?: number;
}

declare interface UpdateDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGroupRequest {
  /** 分组ID */
  GroupId: string;
  /** 分组备注 */
  Description?: string;
}

declare interface UpdateGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateHardwareRequest {
  /** 硬件ID */
  HardwareId: string;
  /** 硬件序列号 */
  SN?: string;
  /** 设备备注 */
  Description?: string;
}

declare interface UpdateHardwareResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateL3CidrRequest {
  /** 互通规则ID */
  L3ConnId: string;
  /** 互通规则CIDR */
  Cidr1: string;
  /** 互通设备ID */
  DeviceId1?: string;
  /** 互通设备ID */
  DeviceId2?: string;
  /** 互通规则CIDR */
  Cidr2?: string;
}

declare interface UpdateL3CidrResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateL3ConnRequest {
  /** 互通规则ID */
  L3ConnId: string;
  /** 互通规则备注 */
  Description?: string;
}

declare interface UpdateL3ConnResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateL3SwitchRequest {
  /** 互通规则ID */
  L3ConnId: string;
  /** 互通规则开关 */
  Enable?: boolean;
}

declare interface UpdateL3SwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mna 多网聚合加速} */
declare interface Mna {
  (): Versions;
  /** 批量激活硬件设备 {@link ActivateHardwareRequest} {@link ActivateHardwareResponse} */
  ActivateHardware(data: ActivateHardwareRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateHardwareResponse>;
  /** 新建设备 {@link AddDeviceRequest} {@link AddDeviceResponse} */
  AddDevice(data: AddDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AddDeviceResponse>;
  /** 新建分组 {@link AddGroupRequest} {@link AddGroupResponse} */
  AddGroup(data: AddGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddGroupResponse>;
  /** 添加硬件设备 {@link AddHardwareRequest} {@link AddHardwareResponse} */
  AddHardware(data: AddHardwareRequest, config?: AxiosRequestConfig): AxiosPromise<AddHardwareResponse>;
  /** 新建互通规则 {@link AddL3ConnRequest} {@link AddL3ConnResponse} */
  AddL3Conn(data: AddL3ConnRequest, config?: AxiosRequestConfig): AxiosPromise<AddL3ConnResponse>;
  /** 设置或更新密钥 {@link CreateEncryptedKeyRequest} {@link CreateEncryptedKeyResponse} */
  CreateEncryptedKey(data?: CreateEncryptedKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEncryptedKeyResponse>;
  /** 发起Qos加速过程 {@link CreateQosRequest} {@link CreateQosResponse} */
  CreateQos(data: CreateQosRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQosResponse>;
  /** 删除设备 {@link DeleteDeviceRequest} {@link DeleteDeviceResponse} */
  DeleteDevice(data: DeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceResponse>;
  /** 删除分组 {@link DeleteGroupRequest} {@link DeleteGroupResponse} */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 删除互通规则 {@link DeleteL3ConnRequest} {@link DeleteL3ConnResponse} */
  DeleteL3Conn(data: DeleteL3ConnRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL3ConnResponse>;
  /** 停止Qos加速过程 {@link DeleteQosRequest} {@link DeleteQosResponse} */
  DeleteQos(data: DeleteQosRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQosResponse>;
  /** 获取Qos加速状态 {@link DescribeQosRequest} {@link DescribeQosResponse} */
  DescribeQos(data: DescribeQosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQosResponse>;
  /** 获取设备详细信息 {@link GetDeviceRequest} {@link GetDeviceResponse} */
  GetDevice(data: GetDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceResponse>;
  /** 获取设备付费模式 {@link GetDevicePayModeRequest} {@link GetDevicePayModeResponse} */
  GetDevicePayMode(data: GetDevicePayModeRequest, config?: AxiosRequestConfig): AxiosPromise<GetDevicePayModeResponse>;
  /** 设备信息列表 {@link GetDevicesRequest} {@link GetDevicesResponse} */
  GetDevices(data: GetDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<GetDevicesResponse>;
  /** 查询流量告警信息 {@link GetFlowAlarmInfoRequest} {@link GetFlowAlarmInfoResponse} */
  GetFlowAlarmInfo(data?: GetFlowAlarmInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetFlowAlarmInfoResponse>;
  /** 获取流量包列表 {@link GetFlowPackagesRequest} {@link GetFlowPackagesResponse} */
  GetFlowPackages(data: GetFlowPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<GetFlowPackagesResponse>;
  /** 获取数据流量统计数据 {@link GetFlowStatisticRequest} {@link GetFlowStatisticResponse} */
  GetFlowStatistic(data: GetFlowStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<GetFlowStatisticResponse>;
  /** 根据设备组获取数据流量统计数据 {@link GetFlowStatisticByGroupRequest} {@link GetFlowStatisticByGroupResponse} */
  GetFlowStatisticByGroup(data: GetFlowStatisticByGroupRequest, config?: AxiosRequestConfig): AxiosPromise<GetFlowStatisticByGroupResponse>;
  /** 根据区域获取数据流量统计数据 {@link GetFlowStatisticByRegionRequest} {@link GetFlowStatisticByRegionResponse} */
  GetFlowStatisticByRegion(data: GetFlowStatisticByRegionRequest, config?: AxiosRequestConfig): AxiosPromise<GetFlowStatisticByRegionResponse>;
  /** 获取分组详细信息 {@link GetGroupDetailRequest} {@link GetGroupDetailResponse} */
  GetGroupDetail(data: GetGroupDetailRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupDetailResponse>;
  /** 获取分组列表 {@link GetGroupListRequest} {@link GetGroupListResponse} */
  GetGroupList(data: GetGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupListResponse>;
  /** 获取厂商硬件列表 {@link GetHardwareListRequest} {@link GetHardwareListResponse} */
  GetHardwareList(data: GetHardwareListRequest, config?: AxiosRequestConfig): AxiosPromise<GetHardwareListResponse>;
  /** 获取互通规则列表 {@link GetL3ConnListRequest} {@link GetL3ConnListResponse} */
  GetL3ConnList(data: GetL3ConnListRequest, config?: AxiosRequestConfig): AxiosPromise<GetL3ConnListResponse>;
  /** 批量获取设备流量统计 {@link GetMultiFlowStatisticRequest} {@link GetMultiFlowStatisticResponse} */
  GetMultiFlowStatistic(data: GetMultiFlowStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<GetMultiFlowStatisticResponse>;
  /** 获取流量监控信息 {@link GetNetMonitorRequest} {@link GetNetMonitorResponse} */
  GetNetMonitor(data: GetNetMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<GetNetMonitorResponse>;
  /** 获取公钥 {@link GetPublicKeyRequest} {@link GetPublicKeyResponse} */
  GetPublicKey(data?: GetPublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GetPublicKeyResponse>;
  /** 下载用量统计数据 {@link GetStatisticDataRequest} {@link GetStatisticDataResponse} */
  GetStatisticData(data: GetStatisticDataRequest, config?: AxiosRequestConfig): AxiosPromise<GetStatisticDataResponse>;
  /** 获取厂商硬件设备列表 {@link GetVendorHardwareRequest} {@link GetVendorHardwareResponse} */
  GetVendorHardware(data: GetVendorHardwareRequest, config?: AxiosRequestConfig): AxiosPromise<GetVendorHardwareResponse>;
  /** 分组添加设备 {@link GroupAddDeviceRequest} {@link GroupAddDeviceResponse} */
  GroupAddDevice(data: GroupAddDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<GroupAddDeviceResponse>;
  /** 分组删除设备 {@link GroupDeleteDeviceRequest} {@link GroupDeleteDeviceResponse} */
  GroupDeleteDevice(data: GroupDeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<GroupDeleteDeviceResponse>;
  /** 修改流量包自动续费标识 {@link ModifyPackageRenewFlagRequest} {@link ModifyPackageRenewFlagResponse} */
  ModifyPackageRenewFlag(data: ModifyPackageRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPackageRenewFlagResponse>;
  /** 订购流量包 {@link OrderFlowPackageRequest} {@link OrderFlowPackageResponse} */
  OrderFlowPackage(data: OrderFlowPackageRequest, config?: AxiosRequestConfig): AxiosPromise<OrderFlowPackageResponse>;
  /** 订购一次性授权License {@link OrderPerLicenseRequest} {@link OrderPerLicenseResponse} */
  OrderPerLicense(data: OrderPerLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<OrderPerLicenseResponse>;
  /** 设置用户流量告警信息 {@link SetNotifyUrlRequest} {@link SetNotifyUrlResponse} */
  SetNotifyUrl(data: SetNotifyUrlRequest, config?: AxiosRequestConfig): AxiosPromise<SetNotifyUrlResponse>;
  /** 更新设备 {@link UpdateDeviceRequest} {@link UpdateDeviceResponse} */
  UpdateDevice(data: UpdateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceResponse>;
  /** 更新分组信息 {@link UpdateGroupRequest} {@link UpdateGroupResponse} */
  UpdateGroup(data: UpdateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGroupResponse>;
  /** 更新硬件信息 {@link UpdateHardwareRequest} {@link UpdateHardwareResponse} */
  UpdateHardware(data: UpdateHardwareRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateHardwareResponse>;
  /** 更新互通规则CIDR {@link UpdateL3CidrRequest} {@link UpdateL3CidrResponse} */
  UpdateL3Cidr(data: UpdateL3CidrRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateL3CidrResponse>;
  /** 更新互通规则备注 {@link UpdateL3ConnRequest} {@link UpdateL3ConnResponse} */
  UpdateL3Conn(data: UpdateL3ConnRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateL3ConnResponse>;
  /** 修改互通规则开关 {@link UpdateL3SwitchRequest} {@link UpdateL3SwitchResponse} */
  UpdateL3Switch(data: UpdateL3SwitchRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateL3SwitchResponse>;
}

export declare type Versions = ["2021-01-19"];

export default Mna;
