/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 点位包含铺位信息 */
declare interface BunkZone {
  /** 点位ID */
  ZoneId: number;
  /** 点位名称 */
  ZoneName: string;
  /** 铺位编码 */
  BunkCodes: string;
}

/** 摄像头配置信息 */
declare interface CameraConfig {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 楼层ID */
  FloorId: number;
  /** 摄像头ID */
  CameraId: number;
  /** 摄像头IP */
  CameraIp: string;
  /** 摄像头Mac */
  CameraMac: string;
  /** 摄像头类型:1: 码流机2: AI相机 */
  CameraType: number;
  /** 摄像头功能:1: 人脸2: 人体 */
  CameraFeature: number;
  /** 摄像头是否启用:0: 下线1: 启用 */
  CameraState: number;
  /** 点位ID */
  ZoneId: number;
  /** 点位类型:1: 场门3: 层门5: 特殊区域7: 门店8: 补位10: 开放式门店11: 品类区12: 公共区 */
  ZoneType: number;
  /** 配置 */
  Config: Config;
  /** 宽 */
  Width: number;
  /** 高 */
  Height: number;
}

/** 用于场内上报当前相机的状态 */
declare interface CameraState {
  /** 相机ID */
  CameraId: number;
  /** 相机状态:10: 初始化11: 未知状态12: 网络异常13: 未授权14: 相机App异常15: 相机取流异常16: 状态正常 */
  State: number;
}

/** 摄像头包含简单的点位信息 */
declare interface CameraZones {
  /** 摄像头ID */
  CameraId: number;
  /** 摄像头名称 */
  CameraName: string;
  /** 摄像头功能:1: 人脸2: 人体 */
  CameraFeature: number;
  /** 摄像头IP */
  CameraIp: string;
  /** 摄像头状态:0: 异常 (不再使用)1: 正常 (不再使用)10: 初始化11: 未知状态 (因服务内部错误产生)12: 网络异常13: 未授权14: 相机App异常15: 相机取流异常16: 正常 */
  CameraState: number;
  /** 点位列表 */
  Zones: BunkZone[];
  /** 像素:130W(1280*960)200W(1920*1080)400W(2560*1440) */
  Pixel: string;
  /** 相机Rtsp地址 */
  RTSP: string | null;
}

/** 摄像头配置 */
declare interface Config {
  /** 摄像头厂商:H: 海康D: 大华Y: 英飞拓L: 联纵 */
  CameraProducer: string;
  /** rtsp 地址 */
  RTSP: string;
  /** 摄像头帧率 */
  Fps: number;
  /** 解码帧率 */
  DecodeFps: number;
  /** 是否做客流计算:0: 否1: 是 */
  PassengerFlow: number;
  /** 是否打开人脸曝光:0: 关闭1: 开启 */
  FaceExpose: number;
  /** 门线标注 */
  MallArea: Point[];
  /** 店门标注 */
  ShopArea: Point[];
  /** 检测区标注 */
  TrackAreas: Polygon[];
  /** 点位列表（品类区） */
  Zones: ZoneArea[];
}

/** 告警信息 */
declare interface CreateCameraAlertAlert {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 相机ID */
  CameraId: number;
  /** 时间戳,ms,默认为告警请求到达时间 */
  CaptureTime: number;
  /** 图片base64编码 */
  Image?: string;
  /** 移动告警 */
  MoveAlert?: CreateCameraAlertsMoveAlert;
  /** 遮挡告警 */
  CoverAlert?: CreateCameraAlertsCoverAlert;
}

/** 遮挡告警 */
declare interface CreateCameraAlertsCoverAlert {
  /** 是否遮挡 */
  Cover?: boolean;
  /** 是否移动置信度 */
  CoverConfidence?: number;
}

/** 移动告警 */
declare interface CreateCameraAlertsMoveAlert {
  /** 是否移动 */
  Move?: boolean;
  /** 是否移动置信度 */
  MoveConfidence?: number;
}

/** 硬盘监控信息 */
declare interface DiskInfo {
  /** 硬盘名字 */
  DiskName: string;
  /** 硬盘使用率 */
  Usage: number;
}

/** 多经点位告警 */
declare interface MultiBizWarning {
  /** 编号 */
  Id: number;
  /** 监控区域 */
  MonitoringArea: Point[];
  /** 告警列表 */
  WarningInfos: MultiBizWarningInfo[];
}

/** 多经点位告警信息 */
declare interface MultiBizWarningInfo {
  /** 告警类型：0: 无变化1: 侵占2: 消失 */
  WarningType: number;
  /** 告警侵占或消失面积 */
  WarningAreaSize: number;
  /** 告警侵占或消失坐标 */
  WarningLocation: Point;
  /** 告警侵占或消失轮廓 */
  WarningAreaContour: Point[];
}

/** 点 */
declare interface Point {
  /** X坐标 */
  X: number;
  /** Y坐标 */
  Y: number;
}

/** 多边形 */
declare interface Polygon {
  /** 标注列表 */
  Points: Point[];
}

/** 进程状态监控项 */
declare interface ProgramStateItem {
  /** 服务器IP */
  ServerIp: string;
  /** 进程名字 */
  ProgramName: string;
  /** 在线个数 */
  OnlineCount: number;
  /** 离线个数 */
  OfflineCount: number;
  /** 上报状态:1: 正常上报2: 异常上报注：此处异常上报是指本次上报由于场内服务内部原因导致上报数据不可信等。此时离线个数重置为1，在线个数重置为0 */
  State: number;
}

/** 以图搜图检索结果 */
declare interface SearchResult {
  /** 图片base64数据 */
  Image: string;
  /** 身份ID */
  PersonId: string;
  /** 相似度 */
  Similarity: number;
}

/** 服务器监控状态上报项 */
declare interface ServerStateItem {
  /** 服务器状态1: 在线2: 离线3: 重启 */
  ServerState: number;
  /** 服务器IP */
  ServerIp: string;
  /** 硬盘监控信息列表 */
  DiskInfos: DiskInfo[];
}

/** 用于服务注册时表示当前服务的具体信息 */
declare interface ServiceRegisterInfo {
  /** 当前服务的回调地址 */
  CgiUrl: string;
  /** 当前服务类型:1: 多经服务2: 相机误报警确认3: 底图更新 */
  ServiceType: number;
}

/** 任务信息 */
declare interface Task {
  /** 任务ID */
  TaskId: number;
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 任务内容 */
  TaskContent: TaskContent;
  /** 任务类型:1: 底图拉取 */
  TaskType: number;
}

/** 任务内容 */
declare interface TaskContent {
  /** 摄像头ID */
  CameraId: number;
  /** rtsp 地址 */
  RTSP: string;
  /** 图片上传地址 */
  Url: string;
}

/** 点位包含店门标注 */
declare interface ZoneArea {
  /** 点位ID */
  ZoneId: number;
  /** 店门标注 */
  ShopArea: Point[];
}

/** 点位包含绑定、调试信息 */
declare interface ZoneConfig {
  /** 点位ID */
  ZoneId: number;
  /** 点位名称 */
  ZoneName: string;
  /** 点位类型:1: 场门3: 层门5: 特殊区域7: 门店8: 补位10: 开放式门店11: 品类区12: 公共区 */
  ZoneType: number;
  /** 铺位编码 */
  BunkCodes: string;
  /** 楼层名称 */
  FloorName: string;
  /** 楼层ID */
  FloorId: number;
  /** 绑定数 */
  BindNum: number;
  /** 调试数 */
  DebugNum: number;
  /** 下发状态:1: 不可下发2: 可下发3: 已下发 */
  State: number;
}

declare interface CreateCameraAlertsRequest {
  /** 告警信息列表 */
  Alerts?: CreateCameraAlertAlert[];
}

declare interface CreateCameraAlertsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCameraStateRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 场内所有相机的状态值 */
  CameraStates: CameraState[];
}

declare interface CreateCameraStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCaptureRequest {
  /** 原始抓拍报文 */
  Data: string;
}

declare interface CreateCaptureResponse {
  /** 原始应答报文 */
  RspData?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMultiBizAlertRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 点位ID */
  ZoneId: number;
  /** 摄像头ID */
  CameraId: number;
  /** 时间戳，毫秒 */
  CaptureTime: number;
  /** 状态: 1: 侵占2: 消失3: 即侵占又消失 */
  State: number;
  /** 图片base64字符串 */
  Image?: string;
  /** 告警列表 */
  Warnings?: MultiBizWarning[];
}

declare interface CreateMultiBizAlertResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProgramStateRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 进程监控信息列表 */
  ProgramStateItems: ProgramStateItem[];
  /** 商场ID */
  MallId?: number;
}

declare interface CreateProgramStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServerStateRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 服务器监控信息列表 */
  ServerStateItems: ServerStateItem[];
  /** 商场ID */
  MallId?: number;
  /** 服务器监控信息上报时间戳，单位毫秒 */
  ReportTime?: number;
}

declare interface CreateServerStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMultiBizAlertRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 点位ID */
  ZoneId: number;
  /** 摄像头ID */
  CameraId: number;
  /** 消警动作:1: 误报2: 正报合规3: 正报不合规，整改完成 */
  ActionType: number;
  /** 图片base64字符串 */
  Image?: string;
}

declare interface DeleteMultiBizAlertResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTaskRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 任务ID */
  TaskId: number;
}

declare interface DeleteTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCamerasRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
}

declare interface DescribeCamerasResponse {
  /** 摄像头列表 */
  Cameras?: CameraZones[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigRequest {
  /** 会话ID */
  SessionId: string;
  /** 摄像头签名 */
  CameraSign: string;
  /** 摄像头app id */
  CameraAppId: string;
  /** 摄像头时间戳，毫秒 */
  CameraTimestamp: number;
  /** MAC地址，字母大写 */
  ServerMac?: string;
  /** 集团编码 */
  GroupCode?: string;
  /** 广场ID */
  MallId?: number;
}

declare interface DescribeConfigResponse {
  /** 会话ID */
  SessionId?: string;
  /** 配置版本号 */
  Version?: number;
  /** 摄像头列表 */
  Cameras?: CameraConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 摄像头ID */
  CameraId: number;
}

declare interface DescribeImageResponse {
  /** cos 临时 url，异步上传图片，client需要轮询 */
  ImageUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMultiBizBaseImageRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 摄像头ID */
  CameraId: number;
  /** 点位ID */
  ZoneId: number;
}

declare interface DescribeMultiBizBaseImageResponse {
  /** cos 临时 url */
  ImageUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 任务类型:1: 底图拉取 */
  TaskType: number;
}

declare interface DescribeTasksResponse {
  /** 任务列表 */
  Tasks?: Task[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
}

declare interface DescribeZonesResponse {
  /** 点位列表 */
  Zones?: ZoneConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMultiBizConfigRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 点位ID */
  ZoneId: number;
  /** 摄像头ID */
  CameraId: number;
  /** 监控区域 */
  MonitoringAreas: Polygon[];
}

declare interface ModifyMultiBizConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportServiceRegisterRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 服务上报当前的服务能力信息 */
  ServiceRegisterInfos: ServiceRegisterInfo[];
  /** 服务内网Ip */
  ServerIp: string;
  /** 上报服务所在服务器的唯一ID */
  ServerNodeId: string;
  /** 上报时间戳, 单位毫秒 */
  ReportTime: number;
}

declare interface ReportServiceRegisterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchImageRequest {
  /** 集团编码 */
  GroupCode: string;
  /** 广场ID */
  MallId: number;
  /** 图片base64字符串 */
  Image: string;
  /** 时间戳，毫秒 */
  ImageTime: number;
}

declare interface SearchImageResponse {
  /** face id */
  FaceId?: string;
  /** 搜索结果列表 */
  Results?: SearchResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ump 客流数字化平台} */
declare interface Ump {
  (): Versions;
  /** 上报相机告警信息 {@link CreateCameraAlertsRequest} {@link CreateCameraAlertsResponse} */
  CreateCameraAlerts(data?: CreateCameraAlertsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCameraAlertsResponse>;
  /** 相机状态上报接口 {@link CreateCameraStateRequest} {@link CreateCameraStateResponse} */
  CreateCameraState(data: CreateCameraStateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCameraStateResponse>;
  /** @deprecated 抓拍上报接口 {@link CreateCaptureRequest} {@link CreateCaptureResponse} */
  CreateCapture(data: CreateCaptureRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCaptureResponse>;
  /** 多经点位告警 {@link CreateMultiBizAlertRequest} {@link CreateMultiBizAlertResponse} */
  CreateMultiBizAlert(data: CreateMultiBizAlertRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMultiBizAlertResponse>;
  /** 进程监控信息上报 {@link CreateProgramStateRequest} {@link CreateProgramStateResponse} */
  CreateProgramState(data: CreateProgramStateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProgramStateResponse>;
  /** 服务器监控信息上报 {@link CreateServerStateRequest} {@link CreateServerStateResponse} */
  CreateServerState(data: CreateServerStateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServerStateResponse>;
  /** 多经点位消警 {@link DeleteMultiBizAlertRequest} {@link DeleteMultiBizAlertResponse} */
  DeleteMultiBizAlert(data: DeleteMultiBizAlertRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMultiBizAlertResponse>;
  /** 删除任务 {@link DeleteTaskRequest} {@link DeleteTaskResponse} */
  DeleteTask(data: DeleteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskResponse>;
  /** 获取摄像头状态列表 {@link DescribeCamerasRequest} {@link DescribeCamerasResponse} */
  DescribeCameras(data: DescribeCamerasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCamerasResponse>;
  /** 获取摄像头配置信息 {@link DescribeConfigRequest} {@link DescribeConfigResponse} */
  DescribeConfig(data: DescribeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigResponse>;
  /** 获取底图 {@link DescribeImageRequest} {@link DescribeImageResponse} */
  DescribeImage(data: DescribeImageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageResponse>;
  /** 获取多经点位底图 {@link DescribeMultiBizBaseImageRequest} {@link DescribeMultiBizBaseImageResponse} */
  DescribeMultiBizBaseImage(data: DescribeMultiBizBaseImageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMultiBizBaseImageResponse>;
  /** 查询任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 获取点位列表 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 多经点位配置更新 {@link ModifyMultiBizConfigRequest} {@link ModifyMultiBizConfigResponse} */
  ModifyMultiBizConfig(data: ModifyMultiBizConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMultiBizConfigResponse>;
  /** 上报服务注册 {@link ReportServiceRegisterRequest} {@link ReportServiceRegisterResponse} */
  ReportServiceRegister(data: ReportServiceRegisterRequest, config?: AxiosRequestConfig): AxiosPromise<ReportServiceRegisterResponse>;
  /** 以图搜图 {@link SearchImageRequest} {@link SearchImageResponse} */
  SearchImage(data: SearchImageRequest, config?: AxiosRequestConfig): AxiosPromise<SearchImageResponse>;
}

export declare type Versions = ["2020-09-18"];

export default Ump;
