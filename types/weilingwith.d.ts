/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 动作信息 */
declare interface Action {
  /** 动作id */
  Id?: number | null;
  /** 动作名 */
  Name?: string | null;
}

/** 详细动作信息 */
declare interface ActionDetail {
  /** 动作id */
  Id?: number | null;
  /** 动作名称 */
  Name?: string | null;
  /** 动作类型 */
  ActionType?: string | null;
  /** 动作说明 */
  ActionDesc?: string | null;
  /** 消息类型，orgin/custom/model */
  MsgType?: string | null;
  /** 消息内容,有效值为x-json:后的字段 */
  MsgContent?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 设备唯一标识 */
  WID?: string | null;
  /** 关联故障列表 */
  LinkRuleSet?: LinkRule[] | null;
  /** 动作下沉配置,有效值为x-json:后的字段 */
  SinkConfig?: string | null;
}

/** 动作对象 */
declare interface ActionObj {
  /** 动作id */
  Id?: number | null;
  /** 动作名称 */
  Name?: string | null;
  /** 动作类型。（app/推送消息至应用-携带空间设备：无,appWithNearbyDevices/推送至应用-携带空间设备：携带,device/推送消息至设备-指定设备,nearbyDevices/推送消息至设备-事件所在范围内的设备,toAlarm/转换为告警,toNotification/转换为通知） */
  Type?: string | null;
  /** 动作说明 */
  Desc?: string | null;
  /** 消息类型，orgin/custom/model */
  MsgType?: string | null;
  /** 消息内容 */
  MsgContent?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 动作下沉配置 */
  SinkConfig?: string | null;
  /** 具体应用（appid）/具体设备（DIN/subID） */
  ApplyDevice?: string | null;
}

/** 添加设备信息 */
declare interface AddDeviceInfo {
  /** 产品id */
  ProductId: number;
  /** 设备sn序列号 */
  SN: string;
  /** 父设备wid，不为空表示导入子设备 */
  ParentWID?: string;
  /** 密钥来源：0-使用产品密钥 1-使用设备特有的密钥 */
  KeySource?: number;
}

/** 行政区划数据结构 */
declare interface AdministrationData {
  /** 行政区划编码 */
  AdministrationCode?: string | null;
  /** 行政区划名称 */
  AdministrationName?: string | null;
}

/** 行政区划详情 */
declare interface AdministrativeDetail {
  /** 行政区域类型编码 */
  AdministrativeTypeCode?: string | null;
  /** 行政区域编码 */
  AdministrativeCode?: string | null;
  /** 行政区域名称 */
  AdministrativeName?: string | null;
}

/** 告警信息 */
declare interface AlarmInfo {
  /** 工作空间id */
  WorkspaceId?: number | null;
  /** 告警ID */
  Id?: string | null;
  /** 告警状态 */
  Status?: string | null;
  /** 告警时间 */
  Time?: number | null;
  /** 告警业务类型 */
  Type?: string | null;
  /** 告警业务类型名称 */
  TypeName?: string | null;
  /** 子告警类型 */
  SubType?: string | null;
  /** 子告警类型名称 */
  SubTypeName?: string | null;
  /** 告警级别id */
  Level?: number | null;
  /** 告警级别名称 */
  LevelName?: string | null;
  /** 上报应用appid */
  AppId?: number | null;
  /** 设备wid */
  WID?: string | null;
  /** 设备名称 */
  DeviceName?: string | null;
  /** 空间位置 */
  Position?: string | null;
  /** 上报图片 */
  ReportImg?: ReportImg | null;
  /** 告警描述 */
  Desc?: string | null;
  /** 处理人 */
  HandlePersonSet?: HandlerPersonInfo[] | null;
  /** 处理记录 */
  HandleRecordSet?: HandleRecordInfo[] | null;
  /** 扩展信息 */
  Extend?: string | null;
  /** 应用扩展字段1 */
  ExtendOne?: string | null;
  /** 应用扩展字段2 */
  ExtendTwo?: string | null;
  /** 应用透传字段,有效字段为x-json后的字段 */
  Echo?: string | null;
}

/** 告警级别详情 */
declare interface AlarmLevelInfo {
  /** 级别id */
  LevelId?: number | null;
  /** 级别名称 */
  LevelName?: string | null;
}

/** 告警类型详情信息 */
declare interface AlarmTypeDetailInfo {
  /** 告警类型id */
  Id?: number | null;
  /** 父节点id */
  ParentId?: number | null;
  /** 0-标准告警类型，1-自定义告警类型 */
  Type?: number | null;
  /** 告警名称类型 */
  Name?: string | null;
  /** 告警类型英文名称 */
  EnglishName?: string | null;
}

/** 告警类型 */
declare interface AlarmTypeInfo {
  /** 告警父类型 */
  Type: string;
  /** 告警子类型(如果传告警子类型，则必传父类型) */
  SubType?: string;
}

/** API参数信息 */
declare interface ApiContent {
  /** 所属API的id */
  Id?: string | null;
  /** 参数名称 */
  Name?: string | null;
  /** 参数类型 */
  Type?: string | null;
  /** 是否为动态值 */
  Dynamic?: boolean | null;
  /** 是否必填 */
  Required?: boolean | null;
  /** 参数值 */
  Value?: string | null;
  /** 默认值 */
  DefaultValue?: string | null;
}

/** API描述 */
declare interface ApiInfo {
  /** API的id */
  ApiId?: string | null;
  /** API名称 */
  Name?: string | null;
  /** API所属应用的id */
  AppId?: string | null;
  /** API所属的项目空间的id */
  WorkspaceId?: string | null;
  /** API所属目录的编码 */
  PoiCode?: string | null;
  /** 接口分类0. 其他服务 1. IOT服务 2. 空间服务 3.微应用服务 4.场景服务 5.AI算法服务 6.任务算法服务 7.第三方服务 */
  Type?: number | null;
  /** 数据授权 0:否 1:是 */
  DataAudit?: number | null;
  /** 是否需要申请 0:否 1:是 */
  ApplyAudit?: number | null;
  /** API详情 */
  Description?: string | null;
  /** API地址 */
  Address?: string | null;
  /** 请求方法类型 */
  Method?: string | null;
  /** API状态 */
  Status?: number | null;
  /** API预览地址 */
  PreviewUrl?: string | null;
  /** query参数 */
  QueryParams?: ApiContent[] | null;
  /** 路径参数 */
  PathParams?: ApiContent[] | null;
  /** 请求头 */
  RequestHeaders?: ApiContent[] | null;
  /** 响应头 */
  ResponseHeaders?: ApiContent[] | null;
  /** 是否为公共空间接口 */
  IsCommonSpace?: boolean | null;
  /** 请求体（base64编码） */
  Body?: string | null;
  /** 响应体（base64编码） */
  ResponseBody?: string | null;
  /** 接口方式 1.http 2消息通知服务 */
  Style?: number | null;
}

/** API列表 */
declare interface ApiInfoList {
  /** API列表 */
  ApiInfo?: ApiInfo[] | null;
  /** 数据总条数 */
  TotalCount?: number | null;
}

/** 应用描述 */
declare interface ApplicationInfo {
  /** 应用分配的appId */
  ApplicationId?: string | null;
  /** 应用中文名 */
  Name?: string | null;
  /** 应用地址 */
  Address?: string | null;
  /** 应用logo */
  ApplicationLogo?: ApplicationLogo | null;
  /** 应用类型，0:saas应用 1:平台应用 */
  Type?: number | null;
  /** engine */
  EnglishName?: string | null;
  /** 能源管理应用 */
  Description?: string | null;
}

/** 应用列表 */
declare interface ApplicationList {
  /** 应用列表 */
  ApplicationInfoList?: ApplicationInfo[] | null;
  /** 当前查询条件命中的数据总条数 */
  TotalCount?: string | null;
}

/** 应用logo */
declare interface ApplicationLogo {
  /** logo图片对应的fileId */
  FileId?: string | null;
  /** logo图片地址 */
  Url?: string | null;
}

/** 应用Token令牌信息 */
declare interface ApplicationTokenInfo {
  /** 应用申请调用API的令牌 */
  Token?: string | null;
}

/** 批量新增设备接口返回结果 */
declare interface BatchCreateDeviceRes {
  /** 新增成功的设备列表 */
  SuccessSet?: CreateDeviceSucceeded[] | null;
  /** 新增失败的设备列表 */
  FailSet?: CreateDeviceFailed[] | null;
}

/** 批量消息上报结果 */
declare interface BatchReportAppMessageRes {
  /** 上报数量 */
  TotalElements?: number | null;
  /** 提交数量（推送成功） */
  Commit?: number | null;
  /** 消息推送结果列表 */
  SpanMap?: ReportMsgRes[] | null;
}

/** 建筑列表响应体 */
declare interface BuildingListRes {
  /** 建筑列表 */
  BuildingProfileList?: BuildingProfile[] | null;
}

/** 建筑模型信息 */
declare interface BuildingModel {
  /** 构件ID */
  ElementId?: string | null;
  /** 构件名称 */
  ElementName?: string | null;
  /** 模型类型 */
  ModelType?: string | null;
  /** 模型URL */
  ModelUrl?: string | null;
}

/** 建模模型信息响应体 */
declare interface BuildingModelRes {
  /** 建模模型信息出参 */
  Models?: BuildingModel[] | null;
}

/** 建筑概要信息 */
declare interface BuildingProfile {
  /** 建筑id */
  BuildingId?: string | null;
  /** 建筑名称 */
  BuildingName?: string | null;
  /** 空间编码 */
  SpaceCode?: string | null;
  /** 经度 */
  Longitude?: number | null;
  /** 纬度 */
  Latitude?: number | null;
  /** 地址 */
  Address?: string | null;
}

/** 查询建筑信息响应体 */
declare interface BuildingProfileRes {
  /** 建筑概要信息 */
  BuildingProfile?: BuildingProfile | null;
}

/** 视频扩展信息结果 */
declare interface CameraExtendInfoRes {
  /** 存储方式 (nvr或cosmtav) */
  SaveType?: string | null;
  /** 云存储天数（save_type是cosmtav时这个参数才有效） */
  SaveDay?: number | null;
  /** 实时分辨率 */
  LiveResolution?: number | null;
  /** 历史分辨率 */
  HistoryResolution?: number | null;
}

/** 设备控制结果 */
declare interface ControlDeviceRes {
  /** 设备Id */
  WID?: string | null;
  /** 指令接受, 0表示成功 */
  Code?: number | null;
  /** 控制结果 */
  Result?: string | null;
  /** 批量大于1时，可用此seq进行链路追踪 */
  Seq?: string | null;
}

/** 设备控制后返回结果集合 */
declare interface ControlDeviceSet {
  /** 设备控制后返回结果集合 */
  Set?: ControlDeviceRes[] | null;
}

/** 导入失败设备信息 */
declare interface CreateDeviceFailed {
  /** 产品id */
  ProductId?: number | null;
  /** 父设备wid，不为空表示导入自设备 */
  ParentWID?: string | null;
  /** 失败原因 */
  Reason?: string | null;
  /** 设备sn序列号 */
  SN?: string | null;
}

/** 导入成功设备信息 */
declare interface CreateDeviceSucceeded {
  /** 产品id */
  ProductId?: number | null;
  /** 父设备wid，不为空表示导入自设备 */
  ParentWID?: string | null;
  /** 设备编码 */
  WID?: string | null;
  /** 设备sn序列号 */
  SN?: string | null;
}

/** 自定义字段 */
declare interface CustomField {
  /** 字段id */
  Id?: number;
  /** 字段内容 */
  Val?: string;
}

/** 自定义字段 */
declare interface CustomFieldInfo {
  /** 字段id */
  Id?: number | null;
  /** 字段key */
  Key?: string | null;
  /** 字段名 */
  Name?: string | null;
  /** 字段值 */
  Val?: string | null;
}

/** 动作列表查询结果 */
declare interface DescribeActionListRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 动作列表查询集合 */
  ActionDetailSet?: ActionDetail[] | null;
}

/** 根据Tag获取行政区划列表返回结构 */
declare interface DescribeAdministrationByTagRes {
  /** 行政区划列表 */
  List?: AdministrationData[] | null;
}

/** 告警级别枚举获取 */
declare interface DescribeAlarmLevelListRes {
  /** 告警级别枚举获取数组 */
  AlarmLevelSet?: AlarmLevelInfo[] | null;
}

/** 告警列表回包 */
declare interface DescribeAlarmListRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 告警列表集合 */
  AlarmInfoSet?: AlarmInfo[] | null;
}

/** 告警类型列表回包 */
declare interface DescribeAlarmTypeListRes {
  /** 告警类型查询列表 */
  AlarmTypeSet?: AlarmTypeDetailInfo[] | null;
}

/** 通过城市id查询工作空间列表 */
declare interface DescribeCityWorkspaceListRes {
  /** 通过城市id查询工作空间列表结果 */
  WorkspaceSet?: WorkspaceInfo[] | null;
}

/** 设备列表查询结果 */
declare interface DescribeDeviceListRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 设备信息集合 */
  DeviceDataSet?: DeviceDataInfo[] | null;
}

/** 事件列表查询结果 */
declare interface DescribeEventListRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 事件信息列表 */
  EventDetailSet?: EventDetail[] | null;
}

/** 联动规则列表查询结果 */
declare interface DescribeLinkRuleListRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 联动规则列表 */
  LinkRuleSet?: LinkRuleInfo[] | null;
}

/** 设备数据信息 */
declare interface DeviceDataInfo {
  /** 设备ID， wid */
  WID?: string | null;
  /** 设备名称 */
  DeviceName?: string | null;
  /** 设备类型Id */
  DeviceTypeCode?: string | null;
  /** 设备类型名称 */
  DeviceTypeName?: string | null;
  /** 产品Id */
  ProductId?: number | null;
  /** 产品名称 */
  ProductName?: string | null;
  /** 产品能力:信令数据、音视频。第0位表示信令数据、第1表示音视频 ，默认为1（信令数据） */
  ProductAbility?: number | null;
  /** 设备位置信息 */
  SpaceInfoSet?: DeviceSpaceInfo[] | null;
  /** 模型id */
  ModelId?: string | null;
  /** 模型名称 */
  ModelName?: string | null;
  /** 设备标签名，非必填 */
  DeviceTagSet?: string[] | null;
  /** 激活状态（1激活、0未激活） */
  IsActive?: number | null;
  /** 激活时间 */
  ActiveTime?: string | null;
  /** 推流状态（推流中、未推流） 仅摄像机有的状态 */
  IsLive?: boolean | null;
  /** 设备所属父设备id（子设备才有） */
  ParentWID?: string | null;
  /** 设备所有父设备名称（子设备才有） */
  ParentWIDName?: string | null;
  /** 序列号 */
  SN?: string | null;
  /** 设备点位坐标值 */
  Location?: DeviceLocation | null;
  /** 自定义字段 */
  FieldList?: CustomFieldInfo[] | null;
  /** 分组信息 */
  GroupInfo?: string | null;
}

/** 设备点位坐标值 */
declare interface DeviceLocation {
  /** 点位X坐标值 */
  X?: number | null;
  /** 点位Y坐标值 */
  Y?: number | null;
  /** 点位Z坐标值 */
  Z?: number | null;
}

/** 设备修改信息入参 */
declare interface DeviceModifyInfo {
  /** 设备id */
  WID: string;
  /** 修改后的设备名字 */
  DeviceName: string;
}

/** 设备影子信息 */
declare interface DeviceShadowInfo {
  /** 设备ID */
  WID?: string | null;
  /** 设备影子数据,返回有效数据为"x-json:"后字段 */
  DeviceShadow?: string | null;
  /** 设备影子更新时间 */
  DeviceShadowUpdateTime?: string | null;
}

/** 设备影子查询列表 */
declare interface DeviceShadowRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 设备影子列表 */
  Set?: DeviceShadowInfo[] | null;
}

/** 设备位置信息 */
declare interface DeviceSpaceInfo {
  /** 空间Id */
  Id?: string | null;
  /** 空间名字 */
  Name?: string | null;
  /** 空间级别 */
  Level?: number | null;
  /** 空间编码 */
  Code?: string | null;
}

/** 设备挂接的空间信息 */
declare interface DeviceSpaceInfoRes {
  /** 建筑id */
  BuildingId?: string | null;
  /** 构件id */
  ElementId?: string | null;
  /** 构件类型 */
  EntityType?: string | null;
  /** 构件名称 */
  ElementName?: string | null;
  /** 构件级别 */
  Level?: number | null;
  /** 底部标高（单位mm） */
  BottomHeight?: number | null;
  /** 空间编码 */
  SpaceCode?: string | null;
}

/** 设备状态信息 */
declare interface DeviceStatusInfo {
  /** 设备ID */
  WID?: string | null;
  /** 设备状态（online=normal+fault、offline） */
  DeviceStatus?: string | null;
  /** 设备状态更新时间 */
  DeviceStatusUpdateTime?: string | null;
  /** 设备业务状态（normal、fault、offline） */
  Status?: string | null;
  /** 推流状态。推流中-true，未推流-false */
  IsAlive?: boolean | null;
}

/** 设备状态获取接口结果 */
declare interface DeviceStatusRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 设备状态信息列表 */
  DeviceStatusSet?: DeviceStatusInfo[] | null;
}

/** 设备状态统计结果 */
declare interface DeviceStatusStatRes {
  /** 工作空间Id */
  WorkspaceId?: number | null;
  /** 汇总数。在线（正常+故障） + 离线 */
  Total?: number | null;
  /** 正常数 */
  NormalSum?: number | null;
  /** 离线数 */
  OfflineSum?: number | null;
  /** 故障数 */
  FaultSum?: number | null;
  /** 设备类型概览列表 */
  DeviceTypeOverviewSet?: DeviceTypeOverview[] | null;
  /** 设备类型统计列表 */
  StatLevelSet?: StatLevel[] | null;
}

/** 设备标签信息 */
declare interface DeviceTagInfo {
  /** 标签Id */
  TagId?: number | null;
  /** 标签名字 */
  TagName?: string | null;
}

/** 设备标签列表查询结果 */
declare interface DeviceTagRes {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 设备标签列表 */
  Set?: DeviceTagInfo[] | null;
}

/** 设备类型 */
declare interface DeviceType {
  /** 设备类型编码 */
  Code?: string | null;
  /** 设备类型名称 */
  Name?: string | null;
  /** 父设备类型编码 */
  ParentCode?: string | null;
  /** 父设备类型名称 */
  ParentName?: string | null;
  /** 是否子系统，1是 */
  IsSubsystem?: number | null;
}

/** 设备类型概览信息 */
declare interface DeviceTypeOverview {
  /** 设备类型值 */
  DeviceType?: string | null;
  /** 设备类型名称 */
  Name?: string | null;
  /** 汇总数。在线（正常+故障） + 离线 */
  Total?: number | null;
  /** 正常数 */
  Normal?: number | null;
  /** 离线数 */
  Offline?: number | null;
  /** 故障数 */
  Fault?: number | null;
}

/** 设备类型列表 */
declare interface DeviceTypeSet {
  /** 设备类型列表 */
  Set?: DeviceType[] | null;
}

/** 构件地理坐标 */
declare interface ElementCoordinates {
  /** 经度 */
  Longitude?: number | null;
  /** 纬度 */
  Latitude?: number | null;
  /** 高程 */
  Altitude?: number | null;
}

/** 构件概要信息 */
declare interface ElementProfile {
  /** 建筑id */
  BuildingId?: string | null;
  /** 构件id */
  ElementId?: string | null;
  /** 构件类型 */
  EntityType?: string | null;
  /** 构件名称 */
  ElementName?: string | null;
  /** 构件空间级别 */
  Level?: number | null;
  /** 底部标高（单位mm） */
  BottomHeight?: number | null;
  /** 排序 */
  Sort?: number | null;
  /** 空间编码 */
  SpaceCode?: string | null;
  /** 空间分类编码 */
  SpaceTypeCode?: string | null;
  /** 空间分类名称 */
  SpaceTypeName?: string | null;
  /** 父级构件id */
  ParentElementId?: string | null;
  /** 空间层级类型编码 */
  SpacePoiId?: string | null;
  /** 构件描述 */
  ElementDesc?: string | null;
  /** 删除标记 */
  IsDelete?: number | null;
}

/** 构件分页查询响应体 */
declare interface ElementProfilePageRes {
  /** 构件总数 */
  TotalCount?: number | null;
  /** 构件列表 */
  List?: ElementProfile[] | null;
}

/** 构件树节点信息 */
declare interface ElementProfileTreeNode {
  /** 构件概要信息 */
  ElementProfile?: ElementProfile | null;
  /** 子节点信息 */
  Children?: ElementProfileTreeNode[] | null;
}

/** 构件树响应体 */
declare interface ElementProfileTreeRes {
  /** 建筑id */
  BuildingId?: string | null;
  /** 父级构件id */
  ParentElementId?: string | null;
  /** 构件树 */
  Root?: ElementProfileTreeNode | null;
}

/** 构件属性信息 */
declare interface ElementProperty {
  /** 属性名称 */
  Name?: string | null;
  /** 属性描述 */
  Description?: string | null;
  /** 属性内容 */
  Content?: string | null;
}

/** 构件属性信息响应体 */
declare interface ElementPropertyRes {
  /** 建筑id */
  BuildingId?: string | null;
  /** 构件id */
  ElementId?: string | null;
  /** 构件属性集合 */
  PropertySet?: ElementProperty[] | null;
  /** 构件地理坐标 */
  Coordinates?: ElementCoordinates | null;
  /** 构件偏移量 */
  Translate?: ElementTranslate | null;
  /** 构件名称 */
  ElementName?: string | null;
  /** 构件类型代码 */
  EntityTypeCode?: string | null;
  /** 构件类型名称 */
  EntityTypeName?: string | null;
}

/** 构件平移信息 */
declare interface ElementTranslate {
  /** X方向偏移量 */
  X?: number | null;
  /** Y方向偏移量 */
  Y?: number | null;
  /** Z方向偏移量 */
  Z?: number | null;
}

/** 空结果返回 */
declare interface EmptyRes {
  /** 返回请求状态,成功ok，失败error */
  Msg?: string | null;
}

/** 事件信息 */
declare interface Event {
  /** 事件id或动作Id */
  Id?: number | null;
  /** 事件名称或动作名称 */
  Name?: string | null;
}

/** 事件详细信息 */
declare interface EventDetail {
  /** 事件id */
  Id?: number | null;
  /** 事件名 */
  Name?: string | null;
  /** 事件触发类型 */
  TriggerType?: string | null;
  /** 事件触发条件，返回为x-json后的字段 */
  TriggerCondition?: string | null;
  /** 有效期 */
  ValidPeriod?: string | null;
  /** 关联规则列表 */
  LinkRuleSet?: LinkRule[] | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 设备类型，当触发类型为deviceType时返回 */
  DeviceType?: string | null;
  /** 设备的wid，当触发类型是device返回 */
  WID?: string | null;
}

/** 事件对象 */
declare interface EventObj {
  /** 事件id */
  Id?: number | null;
  /** 事件名称 */
  Name?: string | null;
  /** 事件触发类型名称 */
  Type?: string | null;
  /** 时间触发条件 */
  Condition?: string | null;
}

/** 文件下载URL */
declare interface FileDownloadURL {
  /** 下载地址 */
  FileURL?: string | null;
}

/** 文件信息 */
declare interface FileInfo {
  /** 文件id */
  FileId?: string | null;
  /** 名称 */
  ReportName?: string | null;
}

/** 获取文件上传URL接口回包 */
declare interface FileUploadURL {
  /** 上传地址 */
  UploadURL?: string | null;
  /** 文件Id */
  FileId?: string | null;
  /** 下载地址 */
  DownloadURL?: string | null;
}

/** 告警处理记录 */
declare interface HandleRecordInfo {
  /** 告警处理记录id */
  Id?: number | null;
  /** 描述 */
  Description?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 操作类型 */
  OperationType?: string | null;
  /** 处理时间 */
  Time?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 文件列表 */
  FileSet?: FileInfo[] | null;
  /** 应用appid */
  AppId?: number | null;
  /** 扩展字段1，存非孪生中台用户id */
  ExtendOne?: string | null;
}

/** 告警处理人列表 */
declare interface HandlerPersonInfo {
  /** 用户id */
  Id?: string | null;
  /** 用户名 */
  Name?: string | null;
}

/** 关联规则信息 */
declare interface LinkRule {
  /** 关联联动规则id */
  Id?: number | null;
  /** 关联联动规则名字 */
  Name?: string | null;
}

/** 联动规则信息 */
declare interface LinkRuleInfo {
  /** 联动id */
  Id?: number | null;
  /** 联动名称 */
  Name?: string | null;
  /** 事件列表 */
  EventSet?: Event[] | null;
  /** 动作列表 */
  ActionSet?: Action[] | null;
  /** 状态：0开，-1关 */
  Status?: number | null;
  /** 起始时间 */
  BeginDate?: string | null;
  /** 结束时间 */
  EndDate?: string | null;
  /** 有效周期内容,有效字段为x-json后的字段 */
  ValidPeriod?: string | null;
}

/** 上报消息概要 */
declare interface MessageProfile {
  /** 应用类型 */
  AppType: string;
  /** 模型Id */
  ModelId?: string;
  /** 设备类型 */
  PoiCode?: string;
}

/** 模型基础信息 */
declare interface ModelInfo {
  /** 工作空间id */
  WorkspaceId?: number | null;
  /** 模型名称 */
  ModelName?: string | null;
  /** 物模型id */
  ModelId?: string | null;
  /** 关联产品信息 */
  RelatedProduct?: RelatedProduct[] | null;
  /** 设备类型名 */
  DeviceTypeName?: string | null;
  /** 设备类型id */
  DeviceType?: string | null;
  /** 物模型类型，产品模型/标准模型 */
  ModelType?: number | null;
  /** 模型参数内容,有效字段为"x-json:"后的字段 */
  ModelParams?: string | null;
}

/** 模型列表查询结果 */
declare interface ModelSet {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 模型基础信息 */
  Set?: ModelInfo[] | null;
}

/** 处理记录项 */
declare interface ProcessRecordInfo {
  /** 告警的id */
  Id: string;
  /** 处理时间，毫秒 */
  ProcessTime: number;
  /** 处理类型，此处操作类型固定填add_record */
  ProcessType: string;
  /** 注:此字段填写的是孪生中台的用户，非孪生中台用户不填该字段[{\"id\":\"123\",\"name\":\"tes\"}] */
  Processor?: string;
  /** 处理描述信息 */
  ProcessDescription?: string;
  /** 附加文件标识 */
  AttachedFileId?: string;
}

/** 产品信息 */
declare interface ProductInfo {
  /** 工作空间id */
  WorkspaceId?: number | null;
  /** 产品PID */
  ProductId?: number | null;
  /** 产品名称 */
  ProductName?: string | null;
  /** 设备类型 */
  DeviceTypeName?: string | null;
  /** 设备类型id */
  DeviceTypeId?: string | null;
  /** 产品属性，如：网关（1）、直连设备（2）、子设备（3） */
  Attribute?: number | null;
  /** 产品型号 */
  ProductType?: string | null;
  /** 产品能力:信令数据、音视频，用二进制表示，第0位表示信令数据、第1表示音视频 ，默认为1（信令数据） */
  ProductAbility?: number | null;
  /** 生产厂商 */
  Manufacturer?: string | null;
  /** 维保厂商 */
  MaintenanceMfr?: string | null;
  /** 物模型名称 */
  ModelName?: string | null;
  /** 物模型id */
  ModelId?: string | null;
  /** 物模型类型，产品模型/标准模型 */
  ModelType?: number | null;
}

/** 产品列表查询结果 */
declare interface ProductSet {
  /** 第几页 */
  PageNumber?: number | null;
  /** 每页条数 */
  PageSize?: number | null;
  /** 总页数 */
  TotalPage?: number | null;
  /** 总条数 */
  TotalRow?: number | null;
  /** 产品信息列表 */
  Product?: ProductInfo[] | null;
}

/** 视频流Raw协议信息 */
declare interface RawInfo {
  /** 加密向量（如果视频网关选择流为非加密传输这个参数可忽略） */
  SM4Vector?: string | null;
  /** 专线ip (非专线接入可忽略) */
  NATIP?: string | null;
  /** 客户端握手鉴权参数 */
  StreamToken?: string | null;
  /** 拉流端口 */
  Port?: number | null;
  /** 视频流加密key,目前为AES128加密KEY（如果视频网关选择流为非加密传输这个参数可忽略） */
  StreamEnKey?: string | null;
  /** 拉流公网地址（非公网接入时，这个地址是内网地址） */
  IP?: string | null;
  /** 拉流内网地址 */
  InnerIP?: string | null;
}

/** 录像信息 */
declare interface RecordInfo {
  /** 本录像片段开始时间（s） */
  StartTime?: number | null;
  /** 本录像片段结束时间（s） */
  EndTime?: number | null;
  /** 录像片段文件url */
  VideoURL?: string | null;
}

/** 关联产品信息 */
declare interface RelatedProduct {
  /** 关联产品pid */
  Id?: number | null;
  /** 关联产品名字 */
  Name?: string | null;
}

/** 单条消息上报请求 */
declare interface ReportAppMessage {
  /** 工作空间Id */
  WorkspaceId: number;
  /** 消息定义 */
  Profile?: MessageProfile;
  /** 数据上报时间 */
  ReportTs?: number;
  /** 属性定义 - KV，若为json格式，需在前加上x-json:，有效字段为x-json:后的字段 */
  Properties?: string;
  /** 事件定义 - KKV，若为json格式，需在前加上x-json:，有效字段为x-json:后的字段 */
  EventSet?: string;
  /** 服务定义 - KKV,若为json格式，需在前加上x-json:，有效字段为x-json:后的字段 */
  ServiceSet?: string;
  /** 扩展字段2，如：算法上报id，若为json格式，需在前加上x-json: */
  ExtendTwo?: string;
  /** 透传信息，若为json格式，需在前加上x-json:，有效字段为x-json:后的字段 */
  Echo?: string;
}

/** 上报图片列表 */
declare interface ReportImg {
  /** 类型 */
  Type?: number | null;
  /** 数据 */
  Data?: string | null;
}

/** 上报消息结果 */
declare interface ReportMsgRes {
  /** 上报消息对应下标的16位标识Id, 即第几个消息 */
  ReportId?: string | null;
  /** 上报消息结果，1表示成功推送，0表示推送失败 */
  ReportStatus?: number | null;
}

/** 规则详情查询结果 */
declare interface RuleDetailRes {
  /** 联动id */
  RuleId?: number | null;
  /** 联动名称 */
  RuleName?: string | null;
  /** 联动说明 */
  RuleDesc?: string | null;
  /** 1 全天有效，0：固定时间段有效 */
  ValidType?: number | null;
  /** 有效期，json字符串（全天有效时为空） */
  ValidPeriod?: string | null;
  /** 起始时间 */
  BeginDate?: string | null;
  /** 结束时间 */
  EndDate?: string | null;
  /** 启用状态。1-启用，0-停用 */
  Status?: number | null;
  /** 触发规则，事件的组合 */
  EventRule?: string | null;
  /** 事件对象集合 */
  EventInfoSet?: EventObj[] | null;
  /** 动作对象集合 */
  ActionInfoSet?: ActionObj[] | null;
}

/** 场景信息 */
declare interface SceneInfo {
  /** 场景id */
  SceneId?: string | null;
  /** 场景名称 */
  SceneName?: string | null;
  /** 场景版本 */
  Version?: string | null;
}

/** 场景列表响应体 */
declare interface SceneListRes {
  /** 场景列表 */
  SceneList?: SceneInfo[] | null;
}

/** 查询项目空间楼栋数量与建筑面积响应体 */
declare interface SpaceDataListStatsRes {
  /** 楼栋数量与建筑面积列表 */
  List?: SpaceDataStats[] | null;
}

/** 项目空间楼栋数量与建筑面积出参 */
declare interface SpaceDataStats {
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 工作空间名称 */
  WorkspaceName?: string | null;
  /** 楼栋数量 */
  BuildingCount?: number | null;
  /** 建筑面积 */
  BuildingArea?: number | null;
}

/** 查询租户楼栋数量和楼栋建筑面积相应体 */
declare interface SpaceDataTotalStatsRes {
  /** 总楼栋数量 */
  BuildingCount?: number | null;
  /** 总建筑面积 */
  BuildingArea?: number | null;
}

/** 查询指定空间id列表响应 */
declare interface SpaceDeviceIdListRes {
  /** 设备id列表 */
  DeviceIds?: string[] | null;
}

/** 设备-空间绑定关系 */
declare interface SpaceDeviceRelation {
  /** 设备id */
  DeviceId?: string | null;
  /** 构件id */
  ElementId?: string | null;
}

/** 设备-空间绑定关系响应体 */
declare interface SpaceDeviceRelationRes {
  /** 设备空间绑定关系列表 */
  SpaceDeviceRelationList?: SpaceDeviceRelation[] | null;
}

/** 项目空间详细信息 */
declare interface SpaceInfo {
  /** 项目空间id */
  WorkspaceId?: number | null;
  /** 租户id */
  TenantId?: number | null;
  /** 英文名 */
  EnglishName?: string | null;
  /** 中文名 */
  ChineseName?: string | null;
  /** 项目空间描述 */
  Description?: string | null;
  /** 项目空间状态:0 启用 1 停用 -1 已删除 */
  Status?: number | null;
  /** 是否是公共空间 */
  IsCommWorkspace?: boolean | null;
  /** 有效期开始时间 */
  ValidityStartTime?: string | null;
  /** 有效期结束时间 */
  ValidityEndTime?: string | null;
  /** 选中状态 */
  Selected?: number | null;
  /** 系统生成状态 */
  IsSystem?: number | null;
}

/** 空间层级关系 */
declare interface SpaceRelation {
  /** 构件id */
  ElementId?: string | null;
  /** 构件名称 */
  ElementName?: string | null;
  /** 空间层级 */
  Level?: number | null;
  /** 空间编码 */
  SpaceCode?: string | null;
  /** 父级空间编码 */
  ParentSpaceCode?: string | null;
  /** 子构件信息 */
  Children?: SpaceRelation[] | null;
}

/** 空间层级关系响应体 */
declare interface SpaceRelationRes {
  /** 空间层级关系 */
  SpaceRelation?: SpaceRelation | null;
}

/** 空间分类 */
declare interface SpaceType {
  /** 空间分类编码 */
  SpaceTypeCode?: string | null;
  /** 空间分类名称 */
  SpaceTypeName?: string | null;
}

/** 空间分类列表响应体 */
declare interface SpaceTypeListRes {
  /** 空间分类列表 */
  SpaceTypeList?: SpaceType[] | null;
}

/** 部门用户 */
declare interface SsoDepartment {
  /** 部门ID */
  DepartmentId?: string | null;
  /** 部门名称 */
  Name?: string | null;
  /** 父级部门ID */
  ParentDepartmentId?: string | null;
}

/** 部门用户结果 */
declare interface SsoDepartmentsResult {
  /** 总数 */
  Total?: number | null;
  /** 部门列表 */
  Departments?: SsoDepartment[] | null;
}

/** 部门用户 */
declare interface SsoTeamUser {
  /** 用户ID */
  UserId?: string | null;
  /** 用户名称 */
  RealName?: string | null;
  /** 用户类型，1-超级管理员；2-1号管理员；3-普通管理员；99-普通用户 */
  UserType?: string | null;
  /** 所属租户ID */
  TenantId?: string | null;
  /** 邮箱 */
  Email?: string | null;
  /** 电话 */
  Phone?: string | null;
  /** 用户状态 */
  Status?: number | null;
  /** 创建时间 */
  CreateAt?: number | null;
  /** 部门ID */
  DepartmentId?: string | null;
  /** 部门名称 */
  DepartmentName?: string | null;
  /** 是否关联权限 */
  LinkFilter?: number | null;
}

/** 空间用户结果 */
declare interface SsoTeamUserResult {
  /** 总数 */
  Total?: number | null;
  /** 部门用户列表 */
  Users?: SsoTeamUser[] | null;
}

/** 用户结果 */
declare interface SsoUser {
  /** 用户ID */
  UserId?: string | null;
  /** 用户昵称 */
  UserName?: string | null;
  /** 用户名称 */
  RealName?: string | null;
  /** 用户类型，1-超级管理员；2-1号管理员；3-普通管理员；99-普通用户 */
  UserType?: string | null;
  /** 所属租户ID */
  TenantId?: string | null;
  /** 所属组ID */
  UserGroup?: string | null;
  /** 邮箱 */
  Email?: string | null;
  /** 电话 */
  Phone?: string | null;
  /** 用户状态，0待审核，1正常启用，2禁用 */
  Status?: number | null;
  /** 创建时间 */
  CreateAt?: number | null;
  /** 更新时间 */
  UpdateAt?: number | null;
  /** 是否属于团队，0不可用，1属于，2不属 */
  BelongTeam?: number | null;
  /** 部门ID */
  DepartmentId?: string | null;
  /** 部门名称 */
  DepartmentName?: string | null;
  /** 子账户ID */
  DepartmentUserId?: number | null;
  /** 密码 */
  Password?: string | null;
}

/** 租户人员结果 */
declare interface SsoUserResult {
  /** 总数 */
  Total?: number | null;
  /** 租户人员数据 */
  Users?: SsoUser[] | null;
}

/** 设备类型统计 */
declare interface StatDeviceType {
  /** 汇总数。在线（正常+故障） + 离线 */
  Total?: number | null;
  /** 正常数 */
  Normal?: number | null;
  /** 离线数 */
  Offline?: number | null;
  /** 故障数 */
  Fault?: number | null;
  /** 设备名 */
  Name?: string | null;
  /** 设备类型 */
  DeviceType?: string | null;
}

/** 层级统计 */
declare interface StatLevel {
  /** 汇总数。在线（正常+故障） + 离线 */
  Total?: number | null;
  /** 正常数 */
  NormalSum?: number | null;
  /** 离线数 */
  OfflineSum?: number | null;
  /** 故障数 */
  FaultSum?: number | null;
  /** 空间id */
  SpaceCode?: string | null;
  /** 设备类型统计列表 */
  StatDeviceTypeSet?: StatDeviceType[] | null;
}

/** 云录像接口结果 */
declare interface VideoCloudRecordRes {
  /** 录像信息总数 */
  TotalCount?: number | null;
  /** 录像信息列表 */
  RecordSet?: RecordInfo[] | null;
}

/** 视频流查询结果 */
declare interface VideoRecordStreamRes {
  /** FLV协议格式视频流 */
  FLV?: string | null;
  /** RTMP协议格式视频流 */
  RTMP?: string | null;
  /** HLS协议格式视频流 */
  HLS?: string | null;
  /** WebRtc协议格式视频流 */
  WebRTC?: string | null;
  /** RAW协议格式视频流 */
  RAW?: RawInfo | null;
  /** 视频流的唯一标识 */
  Stream?: string | null;
}

/** 工作空间信息描述 */
declare interface WorkspaceInfo {
  /** 工作空间Id */
  WorkspaceId?: number | null;
  /** 工作空间中文名字 */
  ChineseName?: string | null;
  /** 工作空间描述 */
  Description?: string | null;
  /** 工作空间是否删除状态 */
  Status?: number | null;
  /** 该工作空间绑定的区/县的行政区名字 */
  ParkName?: string | null;
  /** 该工作空间绑定的区/县的行政区编码 */
  ParkNum?: string | null;
  /** 获取该工作空间绑定的区/县的上级行政区划信息 */
  AdministrativeDetailSet?: AdministrativeDetail[] | null;
}

/** 项目空间列表 */
declare interface WorkspaceInfoList {
  /** 项目空间列表 */
  List?: SpaceInfo[] | null;
}

declare interface AddAlarmProcessRecordRequest {
  /** 处理记录项 */
  RecordSet: ProcessRecordInfo[];
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 非孪生平台外部应用appid */
  ApplicationId?: number;
  /** 此字段填写的是非孪生中台的用户id（多个用逗号分隔），如果是非孪生中台用户必填该字段 */
  ExtendOne?: string;
}

declare interface AddAlarmProcessRecordResponse {
  /** 添加告警处理记录结果 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchCreateDeviceRequest {
  /** 工作空间Id */
  WorkspaceId: number;
  /** 设备信息项 */
  AddDeviceSet: AddDeviceInfo[];
  /** 应用token */
  ApplicationToken: string;
}

declare interface BatchCreateDeviceResponse {
  /** 批量新增设备返回结果 */
  Result?: BatchCreateDeviceRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchKillAlarmRequest {
  /** 告警开始时间，必填,时间戳秒 */
  BeginTime: number;
  /** 告警结束时间，必填，时间戳秒 */
  EndTime: number;
  /** 告警状态: unprocessed processing */
  StatusSet: string[];
  /** 工作空间id */
  WorkspaceId: number;
  /** 当前操作用户id */
  UserId: string;
  /** 当前操作用户名称 */
  UserName: string;
  /** 应用token */
  ApplicationToken: string;
  /** 当前告警处理人，填孪生中台用户id,多个用逗号分隔 */
  ProcessorId?: string;
  /** 告警子类型(如果传告警子类型，则必传父类型) */
  AlarmTypeSet?: AlarmTypeInfo[];
  /** 告警级别,包括1~5 */
  LevelSet?: number[];
  /** 设备id */
  WIDSet?: string[];
  /** 告警id */
  IdSet?: string[];
  /** 告警处理的说明 */
  Desc?: string;
}

declare interface BatchKillAlarmResponse {
  /** 批量消警结果 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchReportAppMessageRequest {
  /** 工作空间Id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 消息上报请求列表 */
  ReportSet?: ReportAppMessage[];
}

declare interface BatchReportAppMessageResponse {
  /** 批量消息上报结果 */
  Result?: BatchReportAppMessageRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeAlarmStatusRequest {
  /** 告警的id，返回的列表中的id */
  Id: string;
  /** 告警状态 processed unprocessed processing misreport shield */
  Status: string;
  /** 告警处理时间 */
  ProcessTime: number;
  /** 处理类型 */
  ProcessType: string;
  /** 工作空间id */
  WorkspaceId: number;
  /** 当前操作用户id */
  UserId: string;
  /** 当前操作用户名称 */
  UserName: string;
  /** 应用token */
  ApplicationToken: string;
  /** 平台告警处理人 */
  Processor?: string;
  /** 告警处理的描述信息 */
  ProcessDescription?: string;
  /** 告警处理的扩展信息，可以为JSON字符串 */
  ProcessExtend?: string;
  /** 扩展字段1，目前存的应用告警处理人 */
  ExtendOne?: string;
  /** 应用id */
  ApplicationId?: number;
}

declare interface ChangeAlarmStatusResponse {
  /** 返回空结果 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlCameraPTZRequest {
  /** 设备的唯一标识 */
  WID: string;
  /** ptz指令left - 向左移动right - 向右移动up - 向上移动down - 向下zoomOut - 镜头缩小zoomIn - 镜头放大irisIn - 光圈缩小irisOut - 光圈放大focusIn - 焦距变近focusOut - 焦距变远 */
  CMD: string;
  /** 工作空间Id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface ControlCameraPTZResponse {
  /** 控制摄像头结果返回 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlDeviceRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 设备wid，最大100个 */
  WIDSet: string[];
  /** 控制内容 */
  ControlData: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface ControlDeviceResponse {
  /** 设备控制后结果集 */
  Result?: ControlDeviceSet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationTokenRequest {
  /** 应用id */
  ApplicationId: number;
  /** 一个随机数或者时间戳，用于防止重放攻击，每个请求唯一，建议用uuid */
  Nonce: string;
  /** 租户id */
  TenantId: number;
  /** 请求时间，当前时间的unix毫秒时间戳 */
  RequestTime: number;
  /** 签名方法见用户使用文档 */
  Signature: string;
}

declare interface CreateApplicationTokenResponse {
  /** 应用令牌信息 */
  Result?: ApplicationTokenInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActionListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 分页查询，第几页，必传，大于0 */
  PageNumber: number;
  /** 每页条数，必传大于0 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 动作类型，（app,device,toAlarm,toNotification） */
  ActionType?: string;
  /** 事件id详情 */
  IdSet?: number[];
}

declare interface DescribeActionListResponse {
  /** 动作列表查询结果 */
  Result?: DescribeActionListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAdministrationByTagRequest {
  /** 应用token */
  ApplicationToken: string;
  /** 工作空间ID */
  WorkspaceId: number;
  /** 标签值 */
  Tag: string;
}

declare interface DescribeAdministrationByTagResponse {
  /** 行政区划返回结构 */
  Result?: DescribeAdministrationByTagRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmLevelListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeAlarmLevelListResponse {
  /** 告警级别列表查询结果 */
  Result?: DescribeAlarmLevelListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmListRequest {
  /** 告警开始时间，必填,时间戳秒 */
  BeginTime: number;
  /** 告警结束时间，必填，时间戳秒 */
  EndTime: number;
  /** 分页查询，第几页 */
  PageNumber: number;
  /** 每页条数 */
  PageSize: number;
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 告警状态 */
  Statuses?: string[];
  /** 告警类型 */
  AlarmTypeSet?: AlarmTypeInfo[];
  /** 告警级别id */
  LevelSet?: number[];
  /** 告警id */
  IdSet?: string[];
  /** 应用id */
  AppIdSet?: number[];
  /** 设备id */
  WIDSet?: string[];
  /** 空间层级 */
  SpaceCodeSet?: string[];
  /** 应用扩展字段1 */
  ExtendOne?: string[];
  /** 应用扩展字段2 */
  ExtendTwo?: string[];
  /** 当前告警处理人，填孪生中台的用户id */
  ProcessorSet?: string[];
  /** 分组id */
  GroupIdSet?: number[];
}

declare interface DescribeAlarmListResponse {
  /** 告警列表查询结果 */
  Result?: DescribeAlarmListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmStatusListRequest {
}

declare interface DescribeAlarmStatusListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmTypeListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 一级类型 */
  ParentType?: string;
}

declare interface DescribeAlarmTypeListResponse {
  /** 告警类型列表查询 */
  Result?: DescribeAlarmTypeListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationListRequest {
  /** 项目空间id，本次查询返回的应用均关联至该空间 */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 应用id数组，可选，填了则表示根据id批量查询 */
  ApplicationId?: number[];
  /** 请求页号 */
  PageNumber?: number;
  /** 页容量，默认为10 */
  PageSize?: number;
}

declare interface DescribeApplicationListResponse {
  /** 应用列表 */
  Result?: ApplicationList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBuildingListRequest {
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
  /** 是否有模型文件 */
  HasModel?: boolean;
  /** 空间编码 */
  SpaceCodes?: string[];
}

declare interface DescribeBuildingListResponse {
  /** 查询建筑列表出参 */
  Result?: BuildingListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBuildingModelRequest {
  /** 建筑id */
  BuildingId: string;
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeBuildingModelResponse {
  /** 建模模型信息出参 */
  Result?: BuildingModelRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBuildingProfileRequest {
  /** 建筑id */
  BuildingId: string;
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeBuildingProfileResponse {
  /** 查询建筑信息出参 */
  Result?: BuildingProfileRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCameraExtendInfoRequest {
  /** 设备的唯一标识 */
  WID: string;
  /** 工作空间Id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeCameraExtendInfoResponse {
  /** 获取视频扩展信息结果 */
  Result?: CameraExtendInfoRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCityWorkspaceListRequest {
  /** 行政区编码集合 */
  AdministrativeCodeSet: string[];
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeCityWorkspaceListResponse {
  /** 工作空间信息集合 */
  Result?: DescribeCityWorkspaceListRes | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 分页查询，第几页，必传，大于0 */
  PageNumber: number;
  /** 每页条数，必传大于0 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 设备类型，非必填 */
  DeviceTypeSet?: string[];
  /** 产品 pid，非必填 */
  ProductIdSet?: number[];
  /** 设备标签，非必填 */
  TagIdSet?: number[];
  /** 空间层级 */
  SpaceCodeSet?: string[];
  /** 设备标签名，非必填 */
  DeviceTagSet?: string[];
  /** 设备wid,非必填 */
  WIDSet?: string[];
  /** 自定义字段 */
  Field?: CustomField;
  /** 分组id列表，非必填 */
  GroupIdSet?: number[];
}

declare interface DescribeDeviceListResponse {
  /** 查询设备列表结果 */
  Result?: DescribeDeviceListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceShadowListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** WID */
  WIDSet: string[];
  /** 分页查询，第几页 */
  PageNumber: number;
  /** 每页条数 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 设备类型code */
  DeviceTypeSet?: string[];
  /** 产品 pid */
  ProductIdSet?: number[];
  /** 设备标签id */
  TagIdSet?: number[];
  /** 空间层级，（支持空间多层，比如具体建筑、具体楼层） */
  SpaceCodeSet?: string[];
  /** 设备标签名 */
  DeviceTagSet?: string[];
}

declare interface DescribeDeviceShadowListResponse {
  /** 获取设备影子结果 */
  Result?: DeviceShadowRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceStatusListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 分页查询，第几页，必传，大于0 */
  PageNumber: number;
  /** 每页条数，必传大于0 */
  PageSize: number;
  /** 设备类型 */
  DeviceTypeSet?: string[];
  /** 产品 pid */
  ProductIdSet?: number[];
  /** 设备标签id */
  TagIdSet?: number[];
  /** 空间位置（支持空间多层，比如具体建筑、具体楼层） */
  SpaceCodeSet?: string[];
  /** 设备编号列表 */
  WIDSet?: string[];
  /** 设备标签名，非必填 */
  DeviceTagSet?: string[];
  /** 通信在/离线状态（online=normal+fault、offline） */
  DeviceStatusSet?: string[];
  /** 设备业务状态（正常-normal、故障-fault、离线-offline） */
  StatusSet?: string[];
  /** 推流状态，推流中-true，未推流-false 仅摄像头有的状态 */
  IsAlive?: boolean[];
}

declare interface DescribeDeviceStatusListResponse {
  /** 查询设备状态结果 */
  Result?: DeviceStatusRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceStatusStatRequest {
  /** 所属空间地理层级，必填。0表示查询所有层级（1、2）的设备状态，1表示楼栋，2表示楼层 */
  Level: number;
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 空间位置，非必填。为空表示查询所有（1，2）层级 */
  SpaceCodeSet?: string[];
  /** 设备类型，非必填。为空表示查询所有设备类型 */
  DeviceTypeSet?: string[];
}

declare interface DescribeDeviceStatusStatResponse {
  /** 设备状态统计结果 */
  Result?: DeviceStatusStatRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceTagListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 分页查询，第几页，必传，大于0 */
  PageNumber: number;
  /** 每页条数，必传大于0 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeDeviceTagListResponse {
  /** 设备标签查询结果 */
  Result?: DeviceTagRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceTypeListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 默认0只拉取设备列表关联的设备类型列表；1拉取空间下所有的设备类型列表 */
  Flag?: number;
}

declare interface DescribeDeviceTypeListResponse {
  /** 设备的设备类型列表 */
  Result?: DeviceTypeSet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeApplicationTokenRequest {
  /** 应用token */
  ApplicationToken: string;
  /** 是否刷新token，默认为false */
  Refresh?: boolean;
}

declare interface DescribeEdgeApplicationTokenResponse {
  /** 边缘应用令牌信息 */
  Result?: ApplicationTokenInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeElementProfilePageRequest {
  /** 建筑id */
  BuildingId: string;
  /** 页码 */
  PageNumber: number;
  /** 页容量 */
  PageSize: number;
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
  /** 父级构件id */
  ParentElementIds?: string[];
  /** 空间层级 */
  Level?: number;
  /** 空间分类代码 */
  SpaceTypeCode?: string;
  /** 构件类型 */
  EntityTypes?: string[];
  /** 是否包含已删除构件 */
  IncludeDelete?: boolean;
  /** 时间范围-开始 */
  StartTime?: number;
  /** 时间范围-结束 */
  EndTime?: number;
}

declare interface DescribeElementProfilePageResponse {
  /** 分页查询构件出参 */
  Result?: ElementProfilePageRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeElementProfileTreeRequest {
  /** 建筑id */
  BuildingId: string;
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
  /** 父级构件id */
  ElementId?: string;
  /** 构件级别 */
  Level?: number;
  /** 空间分类代码 */
  SpaceTypeCode?: string;
}

declare interface DescribeElementProfileTreeResponse {
  /** 构件树出参 */
  Result?: ElementProfileTreeRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 分页查询，第几页，必传，大于0 */
  PageNumber: number;
  /** 每页条数，必传大于0 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 事件触发类型，(app, device, timer) */
  TriggerType?: string;
  /** 事件id详情 */
  IdSet?: number[];
}

declare interface DescribeEventListResponse {
  /** 事件列表查询结果 */
  Result?: DescribeEventListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileDownloadURLRequest {
  /** 工作空间Id */
  WorkspaceId: number;
  /** 文件Id */
  FileId: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeFileDownloadURLResponse {
  /** 文件下载URL地址 */
  Result?: FileDownloadURL;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileUploadURLRequest {
  /** 工作空间Id */
  WorkspaceId: number;
  /** 文件名称 */
  FileName: string;
  /** 文件大小 */
  FileSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 文件MD5 */
  FileMD5?: string;
  /** 存储类型 */
  SaveType?: string;
  /** 过期时间，过期时间戳，精确到秒的时间戳，noExpireFlag为false时必填 */
  FileExpireTime?: number;
  /** 永不过期标记 */
  NoExpireFlag?: boolean;
}

declare interface DescribeFileUploadURLResponse {
  /** 获取文件上传地址结果 */
  Result?: FileUploadURL;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInterfaceListRequest {
  /** 应用token */
  ApplicationToken: string;
  /** 请求页号 */
  PageNumber?: number;
  /** 请求页容量，默认全量返回 */
  PageSize?: number;
  /** 查询关键字 */
  Keyword?: string;
  /** 接口方式 1.http 2消息通知服务 */
  Style?: number[];
  /** 接口分类0. 其他服务 1. IOT服务 2. 空间服务 3.微应用服务 4.场景服务 5.AI算法服务 6.任务算法服务 7.第三方服务 8.3DTiles服务 */
  Type?: number[];
}

declare interface DescribeInterfaceListResponse {
  /** API列表 */
  Result?: ApiInfoList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLinkRuleListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 分页查询，第几页，必传，大于0 */
  PageNumber: number;
  /** 每页条数，必传大于0 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 事件触发类型 */
  TriggerType?: string;
  /** 联动id */
  IdSet?: number[];
}

declare interface DescribeLinkRuleListResponse {
  /** 联动规则列表查询结果 */
  Result?: DescribeLinkRuleListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 分页查询，第几页，大于0 */
  PageNumber: number;
  /** 每页条数，大于0 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 设备类型 */
  DeviceTypeSet?: string[];
  /** 产品 pid */
  ProductIdSet?: number[];
  /** 模型id */
  ModelIdSet?: string[];
}

declare interface DescribeModelListResponse {
  /** 模型列表查询结果 */
  Result?: ModelSet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductListRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 分页查询，第几页 */
  PageNumber: number;
  /** 每页条数，大于0 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
  /** 设备类型 */
  DeviceTypeSet?: string[];
  /** 产品 pid */
  ProductIdSet?: number[];
  /** 模型id */
  ModelIdSet?: string[];
}

declare interface DescribeProductListResponse {
  /** 产品列表查询结果 */
  Result?: ProductSet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePropertyListRequest {
  /** 建筑id */
  BuildingId: string;
  /** 构件id */
  ElementId: string;
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribePropertyListResponse {
  /** 构件属性信息出参 */
  Result?: ElementPropertyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleDetailRequest {
  /** 工作空间id */
  WorkspaceId: string;
  /** 联动id */
  Id: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeRuleDetailResponse {
  /** 规则详情查询结果 */
  Result?: RuleDetailRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSceneListRequest {
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeSceneListResponse {
  /** 场景列表出参 */
  Result?: SceneListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceDeviceIdListRequest {
  /** 构件id列表 */
  ElementIds: string[];
  /** 是否级联 */
  IsCascade: boolean;
  /** 项目空间id */
  WorkspaceId: string;
  /** 页码 */
  PageNumber: number;
  /** 页容量 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeSpaceDeviceIdListResponse {
  /** 设备ID列表 */
  Result?: SpaceDeviceIdListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceDeviceRelationListRequest {
  /** 构件id列表 */
  ElementIds: string[];
  /** 是否级联 */
  IsCascade: boolean;
  /** 项目空间id */
  WorkspaceId: string;
  /** 页码 */
  PageNumber: number;
  /** 页容量 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeSpaceDeviceRelationListResponse {
  /** 查询指定空间下设备与构件绑定关系列表出参 */
  Result?: SpaceDeviceRelationRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceInfoByDeviceIdRequest {
  /** 设备id */
  DeviceId: string;
  /** 项目空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeSpaceInfoByDeviceIdResponse {
  /** 设备绑定的空间信息出参 */
  Result?: DeviceSpaceInfoRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceRelationByDeviceIdRequest {
  /** 设备id */
  DeviceId: string;
  /** 工作空间id */
  WorkspaceId: string;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeSpaceRelationByDeviceIdResponse {
  /** 空间层级关系出参 */
  Result?: SpaceRelationRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceTypeListRequest {
  /** 项目空间ID */
  WorkspaceId: string;
  /** 页码 */
  PageNumber: number;
  /** 页容量 */
  PageSize: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeSpaceTypeListResponse {
  /** 空间分类列表出参 */
  Result?: SpaceTypeListRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantBuildingCountAndAreaRequest {
  /** 租户所有工作空间ID列表 */
  WorkspaceIdList: string[];
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeTenantBuildingCountAndAreaResponse {
  /** 租户所有项目空间楼栋数量与建筑面积统计结果 */
  Result?: SpaceDataTotalStatsRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantDepartmentListRequest {
  /** 翻页页码 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** token */
  ApplicationToken: string;
  /** 租户ID */
  TenantId?: string;
  /** 更新时间戳，单位秒 */
  UpdateAt?: number;
  /** 部门ID */
  DepartmentId?: string;
  /** 用户id */
  Cursor?: string;
}

declare interface DescribeTenantDepartmentListResponse {
  /** 返回数据 */
  Result?: SsoDepartmentsResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantUserListRequest {
  /** 翻页页码 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** token */
  ApplicationToken: string;
  /** 租户ID */
  TenantId?: string;
  /** 更新时间戳，单位秒 */
  UpdateAt?: number;
  /** 部门ID */
  DepartmentId?: string;
  /** 用户id */
  Cursor?: string;
  /** 状态，0，获取所有数据，1正常启用，2禁用 */
  Status?: number;
  /** 项目空间id */
  WorkspaceId?: string;
  /** 关键词 */
  Keyword?: string;
  /** 是否递归获取子级数据，0需要，1不需要，默认为0 */
  NoRecursive?: string;
}

declare interface DescribeTenantUserListResponse {
  /** 返回数据 */
  Result?: SsoUserResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoCloudRecordRequest {
  /** 设备的唯一标识 */
  WID: string;
  /** 录像开始时间（s） */
  StartTime: number;
  /** 录像结束时间（s） */
  EndTime: number;
  /** 工作空间Id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeVideoCloudRecordResponse {
  /** 获取云录像结果 */
  Result?: VideoCloudRecordRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoLiveStreamRequest {
  /** 设备的唯一标识 */
  WID: string;
  /** 枚举如下：flvrtmphlswebrtcraw (视频原始帧) */
  Protocol: string;
  /** 工作空间Id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 主码流传0，子码流传1，默认主码流 */
  StreamId?: number;
  /** 设备所在环境，公有云私有化项目传0或者不传，混合云项目一般传空间id */
  Env?: string;
}

declare interface DescribeVideoLiveStreamResponse {
  /** 视频实时流获取结果 */
  Result?: VideoRecordStreamRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoRecordStreamRequest {
  /** 设备唯一标识 */
  WID: string;
  /** 枚举如下：flvshrtmphlswebrtcraw (视频原始帧) */
  Protocol: string;
  /** 开始时间（精确到毫秒） */
  StartTime: number;
  /** 结束时间（精确到毫秒） */
  EndTime: number;
  /** 倍速 0.5、1、2、4 */
  PlayBackRate: number;
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 流的唯一标识，播放链接尾缀 */
  Stream?: string;
  /** 公有云私有化项目传0或者不传；混合云项目一般传空间id */
  Env?: string;
}

declare interface DescribeVideoRecordStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkSpaceBuildingCountAndAreaRequest {
  /** 工作空间ID列表 */
  WorkspaceIdList: string[];
  /** 应用token */
  ApplicationToken: string;
}

declare interface DescribeWorkSpaceBuildingCountAndAreaResponse {
  /** 查询项目空间楼栋数量与建筑面积出参 */
  Result?: SpaceDataListStatsRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceListRequest {
  /** 应用token */
  ApplicationToken: string;
  /** 工作空间id，非必填，填了则表示根据id进行批量查询 */
  WorkspaceId?: number;
}

declare interface DescribeWorkspaceListResponse {
  /** 项目空间列表 */
  Result?: WorkspaceInfoList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceUserListRequest {
  /** 翻页页码 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** 工作空间ID */
  WorkspaceId: string;
  /** token */
  ApplicationToken: string;
  /** 租户ID */
  TenantId?: string;
  /** 更新时间戳，单位秒 */
  UpdateAt?: number;
}

declare interface DescribeWorkspaceUserListResponse {
  /** 返回数据 */
  Result?: SsoTeamUserResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDeviceNameRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 设备修改信息集合 */
  Set: DeviceModifyInfo[];
  /** 应用token */
  ApplicationToken: string;
}

declare interface ModifyDeviceNameResponse {
  /** 返回请求结果 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportAppMessageRequest {
  /** 工作空间Id */
  WorkspaceId: number;
  /** 消息定义 */
  Profile: MessageProfile;
  /** 数据上报时间 */
  ReportTs: number;
  /** 属性定义 - KV的json格式,有效字段为x-json:后的字段 */
  Properties: string;
  /** 应用token */
  ApplicationToken: string;
  /** 事件定义 - KKV的json格式,有效字段为x-json:后的字段 */
  EventSet?: string;
  /** 服务定义 - KKV的json格式,有效字段为x-json:后的字段 */
  ServiceSet?: string;
  /** 扩展字段2，如：算法上报id，若为json格式，需传x-json:{}，有效字段为x-json:后的字段 */
  ExtendTwo?: string;
  /** 透传信息，若为json格式，需传x-json:{}，有效字段为x-json:后的字段 */
  Echo?: string;
}

declare interface ReportAppMessageResponse {
  /** 上报单条信息结果 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopVideoStreamingRequest {
  /** 流的唯一标识，播放链接尾缀 */
  Stream: string;
  /** 设备的唯一标识 */
  WID: string;
  /** 工作空间Id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
}

declare interface StopVideoStreamingResponse {
  /** 停流接口返回结果 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkspaceParkAttributesRequest {
  /** 工作空间id */
  WorkspaceId: number;
  /** 应用token */
  ApplicationToken: string;
  /** 园区简称 */
  ParkName?: string;
  /** 园区编号 */
  ParkNum?: string;
}

declare interface UpdateWorkspaceParkAttributesResponse {
  /** 修改工作空间园区属性结果 */
  Result?: EmptyRes;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Weilingwith 微瓴同业开放平台} */
declare interface Weilingwith {
  (): Versions;
  /** 添加告警处理记录 {@link AddAlarmProcessRecordRequest} {@link AddAlarmProcessRecordResponse} */
  AddAlarmProcessRecord(data: AddAlarmProcessRecordRequest, config?: AxiosRequestConfig): AxiosPromise<AddAlarmProcessRecordResponse>;
  /** 批量新增设备 {@link BatchCreateDeviceRequest} {@link BatchCreateDeviceResponse} */
  BatchCreateDevice(data: BatchCreateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateDeviceResponse>;
  /** 批量消警 {@link BatchKillAlarmRequest} {@link BatchKillAlarmResponse} */
  BatchKillAlarm(data: BatchKillAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<BatchKillAlarmResponse>;
  /** 批量消息上报 {@link BatchReportAppMessageRequest} {@link BatchReportAppMessageResponse} */
  BatchReportAppMessage(data: BatchReportAppMessageRequest, config?: AxiosRequestConfig): AxiosPromise<BatchReportAppMessageResponse>;
  /** 变更告警状态 {@link ChangeAlarmStatusRequest} {@link ChangeAlarmStatusResponse} */
  ChangeAlarmStatus(data: ChangeAlarmStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeAlarmStatusResponse>;
  /** 云台控制 {@link ControlCameraPTZRequest} {@link ControlCameraPTZResponse} */
  ControlCameraPTZ(data: ControlCameraPTZRequest, config?: AxiosRequestConfig): AxiosPromise<ControlCameraPTZResponse>;
  /** 设备控制（单个、批量控制） {@link ControlDeviceRequest} {@link ControlDeviceResponse} */
  ControlDevice(data: ControlDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceResponse>;
  /** 创建应用授权令牌 {@link CreateApplicationTokenRequest} {@link CreateApplicationTokenResponse} */
  CreateApplicationToken(data: CreateApplicationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationTokenResponse>;
  /** 动作列表查询 {@link DescribeActionListRequest} {@link DescribeActionListResponse} */
  DescribeActionList(data: DescribeActionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActionListResponse>;
  /** 根据标签获取行政区划列表 {@link DescribeAdministrationByTagRequest} {@link DescribeAdministrationByTagResponse} */
  DescribeAdministrationByTag(data: DescribeAdministrationByTagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAdministrationByTagResponse>;
  /** 告警级别枚举获取 {@link DescribeAlarmLevelListRequest} {@link DescribeAlarmLevelListResponse} */
  DescribeAlarmLevelList(data: DescribeAlarmLevelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmLevelListResponse>;
  /** 告警列表查询 {@link DescribeAlarmListRequest} {@link DescribeAlarmListResponse} */
  DescribeAlarmList(data: DescribeAlarmListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmListResponse>;
  /** 告警状态列表查询 {@link DescribeAlarmStatusListRequest} {@link DescribeAlarmStatusListResponse} */
  DescribeAlarmStatusList(data?: DescribeAlarmStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmStatusListResponse>;
  /** 告警类型获取 {@link DescribeAlarmTypeListRequest} {@link DescribeAlarmTypeListResponse} */
  DescribeAlarmTypeList(data: DescribeAlarmTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmTypeListResponse>;
  /** 查询应用列表 {@link DescribeApplicationListRequest} {@link DescribeApplicationListResponse} */
  DescribeApplicationList(data: DescribeApplicationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationListResponse>;
  /** 查询建筑列表 {@link DescribeBuildingListRequest} {@link DescribeBuildingListResponse} */
  DescribeBuildingList(data: DescribeBuildingListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBuildingListResponse>;
  /** 查询建筑三维模型 {@link DescribeBuildingModelRequest} {@link DescribeBuildingModelResponse} */
  DescribeBuildingModel(data: DescribeBuildingModelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBuildingModelResponse>;
  /** 查询建筑信息 {@link DescribeBuildingProfileRequest} {@link DescribeBuildingProfileResponse} */
  DescribeBuildingProfile(data: DescribeBuildingProfileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBuildingProfileResponse>;
  /** 获取视频扩展信息 {@link DescribeCameraExtendInfoRequest} {@link DescribeCameraExtendInfoResponse} */
  DescribeCameraExtendInfo(data: DescribeCameraExtendInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCameraExtendInfoResponse>;
  /** 通过城市id查询工作空间列表 {@link DescribeCityWorkspaceListRequest} {@link DescribeCityWorkspaceListResponse} */
  DescribeCityWorkspaceList(data: DescribeCityWorkspaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCityWorkspaceListResponse>;
  /** 设备列表查询 {@link DescribeDeviceListRequest} {@link DescribeDeviceListResponse} */
  DescribeDeviceList(data: DescribeDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceListResponse>;
  /** 获取设备影子数据 {@link DescribeDeviceShadowListRequest} {@link DescribeDeviceShadowListResponse} */
  DescribeDeviceShadowList(data: DescribeDeviceShadowListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceShadowListResponse>;
  /** 设备状态获取 {@link DescribeDeviceStatusListRequest} {@link DescribeDeviceStatusListResponse} */
  DescribeDeviceStatusList(data: DescribeDeviceStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceStatusListResponse>;
  /** 设备状态统计 {@link DescribeDeviceStatusStatRequest} {@link DescribeDeviceStatusStatResponse} */
  DescribeDeviceStatusStat(data: DescribeDeviceStatusStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceStatusStatResponse>;
  /** 标签列表查询 {@link DescribeDeviceTagListRequest} {@link DescribeDeviceTagListResponse} */
  DescribeDeviceTagList(data: DescribeDeviceTagListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceTagListResponse>;
  /** 拉取设备的设备类型列表 {@link DescribeDeviceTypeListRequest} {@link DescribeDeviceTypeListResponse} */
  DescribeDeviceTypeList(data: DescribeDeviceTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceTypeListResponse>;
  /** 查询边缘应用凭证 {@link DescribeEdgeApplicationTokenRequest} {@link DescribeEdgeApplicationTokenResponse} */
  DescribeEdgeApplicationToken(data: DescribeEdgeApplicationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeApplicationTokenResponse>;
  /** 查询分页构件信息 {@link DescribeElementProfilePageRequest} {@link DescribeElementProfilePageResponse} */
  DescribeElementProfilePage(data: DescribeElementProfilePageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeElementProfilePageResponse>;
  /** 查询构件树 {@link DescribeElementProfileTreeRequest} {@link DescribeElementProfileTreeResponse} */
  DescribeElementProfileTree(data: DescribeElementProfileTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeElementProfileTreeResponse>;
  /** 事件列表查询 {@link DescribeEventListRequest} {@link DescribeEventListResponse} */
  DescribeEventList(data: DescribeEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventListResponse>;
  /** 获取文件下载URL {@link DescribeFileDownloadURLRequest} {@link DescribeFileDownloadURLResponse} */
  DescribeFileDownloadURL(data: DescribeFileDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileDownloadURLResponse>;
  /** 文件上传接口 {@link DescribeFileUploadURLRequest} {@link DescribeFileUploadURLResponse} */
  DescribeFileUploadURL(data: DescribeFileUploadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileUploadURLResponse>;
  /** 查询接口列表 {@link DescribeInterfaceListRequest} {@link DescribeInterfaceListResponse} */
  DescribeInterfaceList(data: DescribeInterfaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInterfaceListResponse>;
  /** 联动规则列表查询 {@link DescribeLinkRuleListRequest} {@link DescribeLinkRuleListResponse} */
  DescribeLinkRuleList(data: DescribeLinkRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLinkRuleListResponse>;
  /** 模型列表查询 {@link DescribeModelListRequest} {@link DescribeModelListResponse} */
  DescribeModelList(data: DescribeModelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelListResponse>;
  /** 产品列表查询 {@link DescribeProductListRequest} {@link DescribeProductListResponse} */
  DescribeProductList(data: DescribeProductListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductListResponse>;
  /** 查询构件属性（详情） {@link DescribePropertyListRequest} {@link DescribePropertyListResponse} */
  DescribePropertyList(data: DescribePropertyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePropertyListResponse>;
  /** 联动规则详情查询 {@link DescribeRuleDetailRequest} {@link DescribeRuleDetailResponse} */
  DescribeRuleDetail(data: DescribeRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleDetailResponse>;
  /** 查询场景列表 {@link DescribeSceneListRequest} {@link DescribeSceneListResponse} */
  DescribeSceneList(data: DescribeSceneListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSceneListResponse>;
  /** 查询指定空间设备编号列表 {@link DescribeSpaceDeviceIdListRequest} {@link DescribeSpaceDeviceIdListResponse} */
  DescribeSpaceDeviceIdList(data: DescribeSpaceDeviceIdListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceDeviceIdListResponse>;
  /** 查询指定空间下设备与构件绑定关系列表 {@link DescribeSpaceDeviceRelationListRequest} {@link DescribeSpaceDeviceRelationListResponse} */
  DescribeSpaceDeviceRelationList(data: DescribeSpaceDeviceRelationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceDeviceRelationListResponse>;
  /** 查询设备绑定的空间信息 {@link DescribeSpaceInfoByDeviceIdRequest} {@link DescribeSpaceInfoByDeviceIdResponse} */
  DescribeSpaceInfoByDeviceId(data: DescribeSpaceInfoByDeviceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceInfoByDeviceIdResponse>;
  /** 查询设备绑定的空间层级关系 {@link DescribeSpaceRelationByDeviceIdRequest} {@link DescribeSpaceRelationByDeviceIdResponse} */
  DescribeSpaceRelationByDeviceId(data: DescribeSpaceRelationByDeviceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceRelationByDeviceIdResponse>;
  /** 查询空间分类 {@link DescribeSpaceTypeListRequest} {@link DescribeSpaceTypeListResponse} */
  DescribeSpaceTypeList(data: DescribeSpaceTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceTypeListResponse>;
  /** 查询租户楼栋数量和楼栋建筑面积 {@link DescribeTenantBuildingCountAndAreaRequest} {@link DescribeTenantBuildingCountAndAreaResponse} */
  DescribeTenantBuildingCountAndArea(data: DescribeTenantBuildingCountAndAreaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantBuildingCountAndAreaResponse>;
  /** 查询租户组织部门列表 {@link DescribeTenantDepartmentListRequest} {@link DescribeTenantDepartmentListResponse} */
  DescribeTenantDepartmentList(data: DescribeTenantDepartmentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantDepartmentListResponse>;
  /** 查询租户人员列表 {@link DescribeTenantUserListRequest} {@link DescribeTenantUserListResponse} */
  DescribeTenantUserList(data: DescribeTenantUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantUserListResponse>;
  /** 云录像接口 {@link DescribeVideoCloudRecordRequest} {@link DescribeVideoCloudRecordResponse} */
  DescribeVideoCloudRecord(data: DescribeVideoCloudRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoCloudRecordResponse>;
  /** 实时流接口 {@link DescribeVideoLiveStreamRequest} {@link DescribeVideoLiveStreamResponse} */
  DescribeVideoLiveStream(data: DescribeVideoLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoLiveStreamResponse>;
  /** 历史流接口 {@link DescribeVideoRecordStreamRequest} {@link DescribeVideoRecordStreamResponse} */
  DescribeVideoRecordStream(data: DescribeVideoRecordStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoRecordStreamResponse>;
  /** 查询项目空间楼栋数量与建筑面积 {@link DescribeWorkSpaceBuildingCountAndAreaRequest} {@link DescribeWorkSpaceBuildingCountAndAreaResponse} */
  DescribeWorkSpaceBuildingCountAndArea(data: DescribeWorkSpaceBuildingCountAndAreaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkSpaceBuildingCountAndAreaResponse>;
  /** 获取租户下的空间列表 {@link DescribeWorkspaceListRequest} {@link DescribeWorkspaceListResponse} */
  DescribeWorkspaceList(data: DescribeWorkspaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceListResponse>;
  /** 查询项目空间人员列表 {@link DescribeWorkspaceUserListRequest} {@link DescribeWorkspaceUserListResponse} */
  DescribeWorkspaceUserList(data: DescribeWorkspaceUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceUserListResponse>;
  /** 批量修改设备名字 {@link ModifyDeviceNameRequest} {@link ModifyDeviceNameResponse} */
  ModifyDeviceName(data: ModifyDeviceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceNameResponse>;
  /** 单条消息上报 {@link ReportAppMessageRequest} {@link ReportAppMessageResponse} */
  ReportAppMessage(data: ReportAppMessageRequest, config?: AxiosRequestConfig): AxiosPromise<ReportAppMessageResponse>;
  /** 断流接口 {@link StopVideoStreamingRequest} {@link StopVideoStreamingResponse} */
  StopVideoStreaming(data: StopVideoStreamingRequest, config?: AxiosRequestConfig): AxiosPromise<StopVideoStreamingResponse>;
  /** 修改工作空间园区属性 {@link UpdateWorkspaceParkAttributesRequest} {@link UpdateWorkspaceParkAttributesResponse} */
  UpdateWorkspaceParkAttributes(data: UpdateWorkspaceParkAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkspaceParkAttributesResponse>;
}

export declare type Versions = ["2023-04-27"];

export default Weilingwith;
