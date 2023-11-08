/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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
  DeviceId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 设备创建的时间，单位：ms */
  CreateTime: string;
  /** 设备最后在线时间，单位：ms */
  LastTime: string;
  /** 设备的备注 */
  Remark: string;
}

/** 设备详细信息 */
declare interface DeviceDetails {
  /** 设备基本信息 */
  DeviceBaseInfo: DeviceBaseInfo;
  /** 设备网络信息 */
  DeviceNetInfo: DeviceNetInfo[] | null;
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
  /** 流量值（bit） */
  Current: number;
  /** 时间点，单位：s */
  Time: string;
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

declare interface AddDeviceRequest {
  /** 新建设备的名称 */
  DeviceName: string;
  /** 新建设备的备注 */
  Remark?: string;
  /** 新建设备的base64密钥字符串，非必选，如果不填写则由系统自动生成 */
  DataKey?: string;
  /** 是否设置预置密钥 */
  Encrypted?: boolean;
}

declare interface AddDeviceResponse {
  /** 经过加密算法加密后的base64格式密钥 */
  DataKey: string;
  /** 设备ID */
  DeviceId: string;
  /** 签名字符串 */
  Signature: string | null;
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
  SessionId: string;
  /** 当前加速剩余时长（单位秒） */
  Duration: number;
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

declare interface GetFlowStatisticRequest {
  /** 设备ID */
  DeviceId: string;
  /** 开始查找时间 */
  BeginTime: number;
  /** 截止时间 */
  EndTime: number;
  /** 流量种类（1：上行流量，2：下行流量） */
  Type: number;
  /** 时间粒度（1：按小时统计，2：按天统计） */
  TimeGranularity: number;
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

declare interface GetMultiFlowStatisticRequest {
  /** 设备id列表，单次最多请求10个设备 */
  DeviceIds: string[];
  /** 1659514436 */
  BeginTime: number;
  /** 1659515000 */
  EndTime: number;
  /** 统计流量类型（1：上行流量，2：下行流量） */
  Type: number;
  /** 统计时间粒度（1：按小时统计，2：按天统计） */
  TimeGranularity: number;
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
}

declare interface GetNetMonitorResponse {
  /** 监控数据 */
  MonitorData?: MonitorData[] | null;
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
  /** 设备ID */
  DeviceId: string;
  /** 统计开始时间，单位：s */
  BeginTime: number;
  /** 统计结束时间，单位：s */
  EndTime: number;
  /** 聚合粒度：1:按小时统计2:按天统计 */
  TimeGranularity: number;
}

declare interface GetStatisticDataResponse {
  /** 文件地址url */
  FilePath?: string;
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
}

declare interface UpdateDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mna 多网聚合加速} */
declare interface Mna {
  (): Versions;
  /** 新建设备 {@link AddDeviceRequest} {@link AddDeviceResponse} */
  AddDevice(data: AddDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<AddDeviceResponse>;
  /** 设置或更新密钥 {@link CreateEncryptedKeyRequest} {@link CreateEncryptedKeyResponse} */
  CreateEncryptedKey(data?: CreateEncryptedKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEncryptedKeyResponse>;
  /** 发起Qos加速过程 {@link CreateQosRequest} {@link CreateQosResponse} */
  CreateQos(data: CreateQosRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQosResponse>;
  /** 删除设备 {@link DeleteDeviceRequest} {@link DeleteDeviceResponse} */
  DeleteDevice(data: DeleteDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeviceResponse>;
  /** 停止Qos加速过程 {@link DeleteQosRequest} {@link DeleteQosResponse} */
  DeleteQos(data: DeleteQosRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQosResponse>;
  /** 获取Qos加速状态 {@link DescribeQosRequest} {@link DescribeQosResponse} */
  DescribeQos(data: DescribeQosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQosResponse>;
  /** 获取设备详细信息 {@link GetDeviceRequest} {@link GetDeviceResponse} */
  GetDevice(data: GetDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceResponse>;
  /** 设备信息列表 {@link GetDevicesRequest} {@link GetDevicesResponse} */
  GetDevices(data: GetDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<GetDevicesResponse>;
  /** 获取数据流量统计数据 {@link GetFlowStatisticRequest} {@link GetFlowStatisticResponse} */
  GetFlowStatistic(data: GetFlowStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<GetFlowStatisticResponse>;
  /** 批量获取设备流量统计 {@link GetMultiFlowStatisticRequest} {@link GetMultiFlowStatisticResponse} */
  GetMultiFlowStatistic(data: GetMultiFlowStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<GetMultiFlowStatisticResponse>;
  /** 获取流量监控信息 {@link GetNetMonitorRequest} {@link GetNetMonitorResponse} */
  GetNetMonitor(data: GetNetMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<GetNetMonitorResponse>;
  /** 获取公钥 {@link GetPublicKeyRequest} {@link GetPublicKeyResponse} */
  GetPublicKey(data?: GetPublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GetPublicKeyResponse>;
  /** 下载用量统计数据 {@link GetStatisticDataRequest} {@link GetStatisticDataResponse} */
  GetStatisticData(data: GetStatisticDataRequest, config?: AxiosRequestConfig): AxiosPromise<GetStatisticDataResponse>;
  /** 更新设备 {@link UpdateDeviceRequest} {@link UpdateDeviceResponse} */
  UpdateDevice(data: UpdateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDeviceResponse>;
}

export declare type Versions = ["2021-01-19"];

export default Mna;
