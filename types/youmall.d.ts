/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 客户到场信息 */
declare interface ArrivedMallInfo {
  /** 到场时间 */
  ArrivedTime: string;
  /** 出场时间 */
  LeaveTime: string;
  /** 停留时间，秒 */
  StaySecond: number;
  /** 到场抓拍图片 */
  InCapPic: string;
  /** 出场抓拍图片 */
  OutCapPic: string;
  /** 轨迹编码 */
  TraceId: string;
}

/** 摄像头抓图人物属性 */
declare interface CameraPersonInfo {
  /** 临时id，还未生成face id时返回 */
  TempId: string;
  /** 人脸face id */
  FaceId: number;
  /** 确定当次返回的哪个id有效，1-FaceId，2-TempId */
  IdType: number;
  /** 当次抓拍到的人脸图片base编码 */
  FacePic: string;
  /** 当次抓拍时间戳 */
  Time: number;
  /** 当前的person基本信息，图片以FacePic为准，结构体内未填 */
  PersonInfo: PersonInfo;
}

/** 客户天轨迹 */
declare interface DailyTracePoint {
  /** 轨迹日期 */
  TraceDate: string;
  /** 轨迹点序列 */
  TracePointSet: PersonTracePoint[];
}

/** 性别年龄分组下的客流信息 */
declare interface GenderAgeTrafficDetail {
  /** 性别: 0男1女 */
  Gender: number;
  /** 年龄区间，枚举值：0-17、18-23、24-30、31-40、41-50、51-60、>60 */
  AgeGap: string;
  /** 客流量 */
  TrafficCount: number;
}

/** 分时客流量详细信息 */
declare interface HourTrafficInfoDetail {
  /** 小时 取值为：0，1，2，3，4，5，6，7，8，9，10，11，12，13，14，15，16，17，18，19，20，21，22，23 */
  Hour: number;
  /** 分时客流量 */
  HourTrafficTotalCount: number;
}

/** 网络状态 */
declare interface NetworkAndShopInfo {
  /** 集团id */
  CompanyId: string;
  /** 店铺id */
  ShopId: number;
  /** 店铺省份 */
  Province: string;
  /** 店铺城市 */
  City: string;
  /** 店铺名 */
  ShopName: string;
  /** 上传带宽，单位Mb/s，-1：未知 */
  Upload: number;
  /** 下载带宽，单位Mb/s，-1：未知 */
  Download: number;
  /** 最小延迟，单位ms，-1：未知 */
  MinRtt: number;
  /** 平均延迟，单位ms，-1：未知 */
  AvgRtt: number;
  /** 最大延迟，单位ms，-1：未知 */
  MaxRtt: number;
  /** 平均偏差延迟，单位ms，-1：未知 */
  MdevRtt: number;
  /** 丢包率百分比，-1：未知 */
  Loss: number;
  /** 更新时间戳 */
  UpdateTime: number;
  /** 上报网络状态设备 */
  Mac: string;
}

/** 查询网络状态历史数据输出 */
declare interface NetworkHistoryInfo {
  /** 总数 */
  Count: number;
  /** 集团id */
  CompanyId: string;
  /** 店铺id */
  ShopId: number;
  /** 店铺省份 */
  Province: string;
  /** 店铺城市 */
  City: string;
  /** 店铺名称 */
  ShopName: string;
  /** 网络信息 */
  Infos: NetworkInfo[];
}

/** 没有店铺信息的网络状态 */
declare interface NetworkInfo {
  /** 上传带宽，单位Mb/s，-1：未知 */
  Upload: number;
  /** 下载带宽，单位Mb/s，-1：未知 */
  Download: number;
  /** 最小延迟，单位ms，-1：未知 */
  MinRtt: number;
  /** 平均延迟，单位ms，-1：未知 */
  AvgRtt: number;
  /** 最大延迟，单位ms，-1：未知 */
  MaxRtt: number;
  /** 平均偏差延迟，单位ms，-1：未知 */
  MdevRtt: number;
  /** 丢包率百分比，-1：未知 */
  Loss: number;
  /** 更新时间戳 */
  UpdateTime: number;
  /** 上报网络状态设备 */
  Mac: string;
}

/** 获取当前门店最新网络状态数据返回结构 */
declare interface NetworkLastInfo {
  /** 总数 */
  Count: number;
  /** 网络状态 */
  Infos: NetworkAndShopInfo[];
}

/** 轨迹点坐标 */
declare interface PersonCoordinate {
  /** CAD图X坐标 */
  CADX: number;
  /** CAD图Y坐标 */
  CADY: number;
  /** 抓拍时间点 */
  CapTime: string;
  /** 抓拍图片 */
  CapPic: string;
  /** 卖场区域类型 */
  MallAreaType: number;
  /** 坐标编号 */
  PosId: number;
  /** 门店编号 */
  ShopId: number;
  /** 事件 */
  Event: string;
}

/** 用户信息 */
declare interface PersonInfo {
  /** 用户ID */
  PersonId: number;
  /** 人脸图片Base64内容，已弃用，返回默认空值 */
  PersonPicture: string;
  /** 性别：0男1女 */
  Gender: number;
  /** 年龄 */
  Age: number;
  /** 身份类型（0表示普通顾客，1 白名单，2 表示黑名单） */
  PersonType: number;
  /** 人脸图片Url，在有效期内可以访问下载 */
  PersonPictureUrl: string;
  /** 身份子类型:PersonType=0时(普通顾客)，0普通顾客PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册用户，5VIP用户PersonType=2时(黑名单)，0普通黑名单，1小偷) */
  PersonSubType: number;
  /** 到访次数，-1表示未知 */
  VisitTimes: number;
  /** 到访天数，-1表示未知 */
  VisitDays: number;
}

/** 来访客人基本资料 */
declare interface PersonProfile {
  /** 客人编码 */
  PersonId: string;
  /** 性别 */
  Gender: number;
  /** 年龄 */
  Age: number;
  /** 首次到场时间 */
  FirstArrivedTime: string;
  /** 来访次数 */
  ArrivedCount: number;
  /** 客户图片 */
  PicUrl: string;
  /** 置信度 */
  Similarity: number;
}

/** 修改顾客属性参数 */
declare interface PersonTagInfo {
  /** 顾客原类型 */
  OldType: number;
  /** 顾客新类型 */
  NewType: number;
  /** 顾客face id */
  PersonId: number;
}

/** 客户轨迹点 */
declare interface PersonTracePoint {
  /** 卖场区域编码 */
  MallAreaId: number;
  /** 门店编码 */
  ShopId: number;
  /** 卖场区域类型 */
  MallAreaType: number;
  /** 轨迹事件 */
  TraceEventType: number;
  /** 轨迹事件发生时间点 */
  TraceEventTime: string;
  /** 抓拍图片 */
  CapPic: string;
  /** 购物袋类型 */
  ShoppingBagType: number;
  /** 购物袋数量 */
  ShoppingBagCount: number;
}

/** 客户轨迹序列 */
declare interface PersonTraceRoute {
  /** 轨迹编码 */
  TraceId: string;
  /** 轨迹点序列 */
  TracePointSet: PersonTracePoint[];
}

/** 用户到访明细 */
declare interface PersonVisitInfo {
  /** 用户ID */
  PersonId: number;
  /** 用户到访ID */
  VisitId: number;
  /** 到访时间：Unix时间戳 */
  InTime: number;
  /** 抓拍到的头像Base64内容，已弃用，返回默认空值 */
  CapturedPicture: string;
  /** 口罩类型：0不戴口罩，1戴口罩 */
  MaskType: number;
  /** 眼镜类型：0不戴眼镜，1普通眼镜 , 2墨镜 */
  GlassType: number;
  /** 发型：0 短发, 1长发 */
  HairType: number;
  /** 抓拍到的头像Url，在有效期内可以访问下载 */
  CapturedPictureUrl: string;
  /** 抓拍头像的场景图信息 */
  SceneInfo: SceneInfo;
}

/** 场景图信息 */
declare interface SceneInfo {
  /** 场景图 */
  ScenePictureURL: string;
  /** 抓拍头像左上角X坐标在场景图中的像素点位置 */
  HeadX: number;
  /** 抓拍头像左上角Y坐标在场景图中的像素点位置 */
  HeadY: number;
  /** 抓拍头像在场景图中占有的像素宽度 */
  HeadWidth: number;
  /** 抓拍头像在场景图中占有的像素高度 */
  HeadHeight: number;
}

/** 门店客流量列表信息 */
declare interface ShopDayTrafficInfo {
  /** 日期 */
  Date: string;
  /** 客流量 */
  DayTrafficTotalCount: number;
  /** 性别年龄分组下的客流信息 */
  GenderAgeTrafficDetailSet: GenderAgeTrafficDetail[];
}

/** 分时客流量信息 */
declare interface ShopHourTrafficInfo {
  /** 日期，格式yyyy-MM-dd */
  Date: string;
  /** 分时客流详细信息 */
  HourTrafficInfoDetailSet: HourTrafficInfoDetail[];
}

/** 客户所属的门店信息 */
declare interface ShopInfo {
  /** 公司ID */
  CompanyId: string;
  /** 门店ID */
  ShopId: number;
  /** 门店名称 */
  ShopName: string;
  /** 客户门店编码 */
  ShopCode: string;
  /** 省 */
  Province: string;
  /** 市 */
  City: string;
  /** 公司名称 */
  CompanyName: string;
}

/** 轨迹动线信息子结构 */
declare interface TrajectorySunData {
  /** 区域动线，形如 x-x-x-x-x，其中 x 为区域 ID */
  Zones: string;
  /** 该动线出现次数 */
  Count: number;
  /** 该动线平均停留时间（秒） */
  AvgStayTime: number;
}

/** 区域性别平均停留时间子结构 */
declare interface ZoneAgeGroupAvrStayTime {
  /** 男性平均停留时间 */
  MaleAvrStayTime: number;
  /** 女性平均停留时间 */
  FemaleAvrStayTime: number;
}

/** 每日客流统计子结构 */
declare interface ZoneDayFlow {
  /** 日期，如 2018-08-6 */
  Day: string;
  /** 客流量 */
  FlowCount: number;
}

/** 客流停留统计子结构 */
declare interface ZoneFlowAndAvrStayTime {
  /** 区域id */
  ZoneId: number;
  /** 区域名称 */
  ZoneName: string;
  /** 人流量 */
  FlowCount: number;
  /** 平均停留时长 */
  AvrStayTime: number;
}

/** 客流统计分时数据子结构 */
declare interface ZoneHourFlow {
  /** 分时 0~23 */
  Hour: number;
  /** 客流量 */
  FlowCount: number;
}

/** 门店区域客流信息 */
declare interface ZoneTrafficInfo {
  /** 日期 */
  Date: string;
  /** 门店区域客流详细信息 */
  ZoneTrafficInfoDetailSet: ZoneTrafficInfoDetail[];
}

/** 门店区域客流详细信息 */
declare interface ZoneTrafficInfoDetail {
  /** 区域ID */
  ZoneId: number;
  /** 区域名称 */
  ZoneName: string;
  /** 客流量 */
  TrafficTotalCount: number;
  /** 平均停留时间 */
  AvgStayTime: number;
}

declare interface CreateAccountRequest {
  /** 集团ID */
  CompanyId: string;
  /** 账号名；需要是手机号 */
  Name: string;
  /** 密码；需要是(`~!@#$%^&*()_+=-）中的至少两种且八位以上 */
  Password: string;
  /** 客户门店编码 */
  ShopCode: string;
  /** 备注说明; 30个字符以内 */
  Remark?: string;
}

declare interface CreateAccountResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFacePictureRequest {
  /** 集团ID */
  CompanyId: string;
  /** 人物类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单） */
  PersonType: number;
  /** 图片BASE编码 */
  Picture: string;
  /** 图片名称 */
  PictureName: string;
  /** 店铺ID，如果不填表示操作集团身份库 */
  ShopId?: number;
  /** 是否强制更新：为ture时会为用户创建一个新的指定PersonType的身份;目前这个参数已废弃，可不传 */
  IsForceUpload?: boolean;
}

declare interface CreateFacePictureResponse {
  /** 人物ID */
  PersonId?: number;
  /** 0.正常建档 1.重复身份 2.未检测到人脸 3.检测到多个人脸 4.人脸大小过小 5.人脸质量不达标 6.其他错误 */
  Status?: number;
  /** 图片url */
  PictureUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePersonFeatureRequest {
  /** 公司ID */
  CompanyId: string;
  /** 门店ID */
  ShopId: number;
  /** 顾客ID */
  PersonId: number;
}

declare interface DeletePersonFeatureResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCameraPersonRequest {
  /** 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取 */
  CompanyId: string;
  /** 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取 */
  ShopId: number;
  /** 摄像头id */
  CameraId: number;
  /** 拉取开始时间戳，单位秒 */
  StartTime: number;
  /** 拉取结束时间戳，单位秒，不超过StartTime+10秒，超过默认为StartTime+10 */
  EndTime: number;
  /** pos机id */
  PosId?: string;
  /** 拉取图片数，默认为1，最大为3 */
  Num?: number;
  /** 是否需要base64的图片，0-不需要，1-需要，默认0 */
  IsNeedPic?: number;
}

declare interface DescribeCameraPersonResponse {
  /** 集团id */
  CompanyId?: string;
  /** 店铺id */
  ShopId?: number;
  /** 摄像机id */
  CameraId?: number;
  /** pos机id */
  PosId?: string;
  /** 抓取的顾客信息 */
  Infos?: CameraPersonInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterPersonArrivedMallRequest {
  /** 卖场编码 */
  MallId: string;
  /** 客户编码 */
  PersonId: string;
  /** 查询开始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
}

declare interface DescribeClusterPersonArrivedMallResponse {
  /** 卖场系统编码 */
  MallId?: string;
  /** 卖场客户编码 */
  MallCode?: string;
  /** 客户编码 */
  PersonId?: string;
  /** 到场信息 */
  ArrivedMallSet?: ArrivedMallInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterPersonTraceRequest {
  /** 卖场编码 */
  MallId: string;
  /** 客户编码 */
  PersonId: string;
  /** 查询开始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
}

declare interface DescribeClusterPersonTraceResponse {
  /** 卖场系统编码 */
  MallId?: string;
  /** 卖场用户编码 */
  MallCode?: string;
  /** 客户编码 */
  PersonId?: string;
  /** 轨迹序列 */
  TracePointSet?: DailyTracePoint[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFaceIdByTempIdRequest {
  /** 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取 */
  CompanyId: string;
  /** 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取 */
  ShopId: number;
  /** 临时id */
  TempId: string;
  /** 摄像头id */
  CameraId: number;
  /** pos机id */
  PosId?: string;
  /** 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天） */
  PictureExpires?: number;
}

declare interface DescribeFaceIdByTempIdResponse {
  /** 集团id */
  CompanyId?: string;
  /** 店铺id */
  ShopId?: number;
  /** 摄像机id */
  CameraId?: number;
  /** pos机id */
  PosId?: string;
  /** 请求的临时id */
  TempId?: string;
  /** 临时id对应的face id */
  FaceId?: number;
  /** 顾客属性信息 */
  PersonInfo?: PersonInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeHistoryNetworkInfoRequest {
  /** 请求时间戳 */
  Time: number;
  /** 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取 */
  CompanyId: string;
  /** 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前 */
  ShopId: number;
  /** 拉取开始日期，格式：2018-09-05 */
  StartDay: string;
  /** 拉取结束日期，格式L:2018-09-05，超过StartDay 90天，按StartDay+90天算 */
  EndDay: string;
  /** 拉取条数，默认10 */
  Limit?: number;
  /** 拉取偏移，返回offset之后的数据 */
  Offset?: number;
}

declare interface DescribeHistoryNetworkInfoResponse {
  /** 网络状态数据 */
  InstanceSet?: NetworkHistoryInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkInfoRequest {
  /** 请求时间戳 */
  Time: number;
  /** 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取 */
  CompanyId: string;
  /** 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，不填则拉取集团全部店铺当前 */
  ShopId?: number;
}

declare interface DescribeNetworkInfoResponse {
  /** 网络状态详情 */
  InstanceSet?: NetworkLastInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonArrivedMallRequest {
  /** 卖场编码 */
  MallId: string;
  /** 客户编码 */
  PersonId: string;
  /** 查询开始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
}

declare interface DescribePersonArrivedMallResponse {
  /** 卖场系统编码 */
  MallId?: string;
  /** 卖场用户编码 */
  MallCode?: string;
  /** 客户编码 */
  PersonId?: string;
  /** 到场轨迹 */
  ArrivedMallSet?: ArrivedMallInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonInfoByFacePictureRequest {
  /** 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取 */
  CompanyId: string;
  /** 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取 */
  ShopId: number;
  /** 人脸图片BASE编码 */
  Picture: string;
}

declare interface DescribePersonInfoByFacePictureResponse {
  /** 集团id */
  CompanyId?: string;
  /** 店铺id */
  ShopId?: number;
  /** 顾客face id */
  PersonId?: number;
  /** 顾客底图url */
  PictureUrl?: string;
  /** 顾客类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单） */
  PersonType?: number;
  /** 顾客首次进店时间 */
  FirstVisitTime?: string;
  /** 顾客历史到访次数 */
  VisitTimes?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonInfoRequest {
  /** 公司ID */
  CompanyId: string;
  /** 门店ID */
  ShopId: number;
  /** 起始ID，第一次拉取时StartPersonId传0，后续送入的值为上一页最后一条数据项的PersonId */
  StartPersonId: number;
  /** 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit */
  Offset: number;
  /** Limit:每页的数据项，最大100，超过100会被强制指定为100 */
  Limit: number;
  /** 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天） */
  PictureExpires?: number;
  /** 身份类型(0表示普通顾客，1 白名单，2 表示黑名单） */
  PersonType?: number;
}

declare interface DescribePersonInfoResponse {
  /** 公司ID */
  CompanyId?: string;
  /** 门店ID */
  ShopId?: number;
  /** 总数 */
  TotalCount?: number;
  /** 用户信息 */
  PersonInfoSet?: PersonInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonRequest {
  /** 卖场编码 */
  MallId: string;
  /** 查询偏移 */
  Offset?: number;
  /** 查询数量，默认20，最大查询数量100 */
  Limit?: number;
}

declare interface DescribePersonResponse {
  /** 总计客户数量 */
  TotalCount?: number;
  /** 客户信息 */
  PersonSet?: PersonProfile[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonTraceDetailRequest {
  /** 卖场编码 */
  MallId: string;
  /** 客户编码 */
  PersonId: string;
  /** 轨迹编码 */
  TraceId: string;
}

declare interface DescribePersonTraceDetailResponse {
  /** 卖场编码 */
  MallId?: string;
  /** 客户编码 */
  PersonId?: string;
  /** 轨迹编码 */
  TraceId?: string;
  /** 轨迹点坐标序列 */
  CoordinateSet?: PersonCoordinate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonTraceRequest {
  /** 卖场编码 */
  MallId: string;
  /** 客户编码 */
  PersonId: string;
  /** 查询开始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
}

declare interface DescribePersonTraceResponse {
  /** 卖场系统编码 */
  MallId?: string;
  /** 卖场用户编码 */
  MallCode?: string;
  /** 客户编码 */
  PersonId?: string;
  /** 轨迹列表 */
  TraceRouteSet?: PersonTraceRoute[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonVisitInfoRequest {
  /** 公司ID */
  CompanyId: string;
  /** 门店ID */
  ShopId: number;
  /** 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit */
  Offset: number;
  /** Limit:每页的数据项，最大100，超过100会被强制指定为100 */
  Limit: number;
  /** 开始日期，格式yyyy-MM-dd，已废弃，请使用StartDateTime */
  StartDate?: string;
  /** 结束日期，格式yyyy-MM-dd，已废弃，请使用EndDateTime */
  EndDate?: string;
  /** 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天） */
  PictureExpires?: number;
  /** 开始时间，格式yyyy-MM-dd HH:mm:ss */
  StartDateTime?: string;
  /** 结束时间，格式yyyy-MM-dd HH:mm:ss */
  EndDateTime?: string;
}

declare interface DescribePersonVisitInfoResponse {
  /** 公司ID */
  CompanyId?: string;
  /** 门店ID */
  ShopId?: number;
  /** 总数 */
  TotalCount?: number;
  /** 用户到访明细 */
  PersonVisitInfoSet?: PersonVisitInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeShopHourTrafficInfoRequest {
  /** 公司ID */
  CompanyId: string;
  /** 门店ID */
  ShopId: number;
  /** 开始日期，格式：yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式：yyyy-MM-dd */
  EndDate: string;
  /** 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit */
  Offset: number;
  /** Limit:每页的数据项，最大100，超过100会被强制指定为100 */
  Limit: number;
}

declare interface DescribeShopHourTrafficInfoResponse {
  /** 公司ID */
  CompanyId?: string;
  /** 门店ID */
  ShopId?: number;
  /** 查询结果总数 */
  TotalCount?: number;
  /** 分时客流信息 */
  ShopHourTrafficInfoSet?: ShopHourTrafficInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeShopInfoRequest {
  /** 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit */
  Offset: number;
  /** Limit:每页的数据项，最大100，超过100会被强制指定为100 */
  Limit: number;
}

declare interface DescribeShopInfoResponse {
  /** 门店总数 */
  TotalCount?: number;
  /** 门店列表信息 */
  ShopInfoSet?: ShopInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeShopTrafficInfoRequest {
  /** 公司ID */
  CompanyId: string;
  /** 门店ID */
  ShopId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 介绍日期，格式yyyy-MM-dd */
  EndDate: string;
  /** 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit */
  Offset: number;
  /** Limit:每页的数据项，最大100，超过100会被强制指定为100 */
  Limit: number;
}

declare interface DescribeShopTrafficInfoResponse {
  /** 公司ID */
  CompanyId?: string;
  /** 门店ID */
  ShopId?: number;
  /** 查询结果总数 */
  TotalCount?: number;
  /** 客流信息列表 */
  ShopDayTrafficInfoSet?: ShopDayTrafficInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTrajectoryDataRequest {
  /** 集团ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
  /** 限制返回数据的最大条数，最大 400（负数代为 400） */
  Limit: number;
  /** 顾客性别顾虑，0是男，1是女，其它代表不分性别 */
  Gender: number;
}

declare interface DescribeTrajectoryDataResponse {
  /** 集团ID */
  CompanyId?: string;
  /** 店铺ID */
  ShopId?: number;
  /** 总人数 */
  TotalPerson?: number;
  /** 总动迹数目 */
  TotalTrajectory?: number;
  /** 返回动迹中的总人数 */
  Person?: number;
  /** 返回动迹的数目 */
  Trajectory?: number;
  /** 返回动迹的具体信息 */
  Data?: TrajectorySunData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZoneFlowAgeInfoByZoneIdRequest {
  /** 集团ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 区域ID */
  ZoneId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
}

declare interface DescribeZoneFlowAgeInfoByZoneIdResponse {
  /** 集团ID */
  CompanyId?: string;
  /** 店铺ID */
  ShopId?: number;
  /** 区域ID */
  ZoneId?: number;
  /** 区域名称 */
  ZoneName?: string;
  /** 当前年龄段占比 */
  Data?: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZoneFlowAndStayTimeRequest {
  /** 集团ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
}

declare interface DescribeZoneFlowAndStayTimeResponse {
  /** 集团id */
  CompanyId?: string;
  /** 店铺id */
  ShopId?: number;
  /** 各区域人流数目和停留时长 */
  Data?: ZoneFlowAndAvrStayTime[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZoneFlowDailyByZoneIdRequest {
  /** 集团ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 区域ID */
  ZoneId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
}

declare interface DescribeZoneFlowDailyByZoneIdResponse {
  /** 集团id */
  CompanyId?: string;
  /** 店铺id */
  ShopId?: number;
  /** 区域ID */
  ZoneId?: number;
  /** 区域名称 */
  ZoneName?: string;
  /** 每日人流量 */
  Data?: ZoneDayFlow[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest {
  /** 集团ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 区域ID */
  ZoneId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
}

declare interface DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse {
  /** 集团ID */
  CompanyId?: string;
  /** 店铺ID */
  ShopId?: number;
  /** 区域ID */
  ZoneId?: number;
  /** 区域名称 */
  ZoneName?: string;
  /** 不同年龄段男女停留时间（返回格式为数组，从第 1 个到最后一个数据，年龄段分别为 0-17，18 - 23, 24 - 30, 31 - 40, 41 - 50, 51 - 60, 61 - 100） */
  Data?: ZoneAgeGroupAvrStayTime[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZoneFlowGenderInfoByZoneIdRequest {
  /** 集团ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 区域ID */
  ZoneId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
}

declare interface DescribeZoneFlowGenderInfoByZoneIdResponse {
  /** 集团ID */
  CompanyId?: string;
  /** 店铺ID */
  ShopId?: number;
  /** 区域ID */
  ZoneId?: number;
  /** 区域名称 */
  ZoneName?: string;
  /** 男性占比 */
  MalePercent?: number;
  /** 女性占比 */
  FemalePercent?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZoneFlowHourlyByZoneIdRequest {
  /** 集团ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 区域ID */
  ZoneId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
}

declare interface DescribeZoneFlowHourlyByZoneIdResponse {
  /** 集团ID */
  CompanyId?: string;
  /** 店铺ID */
  ShopId?: number;
  /** 区域ID */
  ZoneId?: number;
  /** 区域名称 */
  ZoneName?: string;
  /** 各个分时人流量 */
  Data?: ZoneHourFlow[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZoneTrafficInfoRequest {
  /** 公司ID */
  CompanyId: string;
  /** 店铺ID */
  ShopId: number;
  /** 开始日期，格式yyyy-MM-dd */
  StartDate: string;
  /** 结束日期，格式yyyy-MM-dd */
  EndDate: string;
  /** 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit */
  Offset: number;
  /** Limit:每页的数据项，最大100，超过100会被强制指定为100 */
  Limit: number;
}

declare interface DescribeZoneTrafficInfoResponse {
  /** 公司ID */
  CompanyId?: string;
  /** 门店ID */
  ShopId?: number;
  /** 查询结果总数 */
  TotalCount?: number;
  /** 区域客流信息列表 */
  ZoneTrafficInfoSet?: ZoneTrafficInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPersonFeatureInfoRequest {
  /** 集团ID */
  CompanyId: string;
  /** 需要修改的顾客id */
  PersonId: number;
  /** 图片BASE编码 */
  Picture: string;
  /** 图片名称（尽量不要重复） */
  PictureName: string;
  /** 人物类型，仅能操作黑白名单顾客（1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单） */
  PersonType: number;
  /** 店铺ID，如果不填表示操作集团身份库 */
  ShopId?: number;
}

declare interface ModifyPersonFeatureInfoResponse {
  /** 集团ID */
  CompanyId?: string;
  /** 店铺ID，如果不填表示操作集团身份库 */
  ShopId?: number;
  /** 请求的顾客id */
  PersonId?: number;
  /** 图片实际绑定person_id，可能与请求的person_id不同，以此id为准 */
  PersonIdBind?: number;
  /** 请求的顾客类型 */
  PersonType?: number;
  /** 与请求的person_id类型相同、与请求图片特征相似的一个或多个person_id，需要额外确认这些id是否是同一个人 */
  SimilarPersonIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPersonTagInfoRequest {
  /** 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取 */
  CompanyId: string;
  /** 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前 */
  ShopId: number;
  /** 需要设置的顾客信息，批量设置最大为10个 */
  Tags: PersonTagInfo[];
}

declare interface ModifyPersonTagInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPersonTypeRequest {
  /** 集团ID */
  CompanyId: string;
  /** 门店ID */
  ShopId: number;
  /** 顾客ID */
  PersonId: number;
  /** 身份类型(0表示普通顾客，1 白名单，2 表示黑名单） */
  PersonType: number;
  /** 身份子类型:PersonType=0时(普通顾客)，0普通顾客PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册会员，5VIP用户PersonType=2时(黑名单)，0普通黑名单，1小偷) */
  PersonSubType: number;
}

declare interface ModifyPersonTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RegisterCallbackRequest {
  /** 集团id，通过"指定身份标识获取客户门店列表"接口获取 */
  CompanyId: string;
  /** 通知回调地址，完整url，示例（http://youmall.tencentcloudapi.com/） */
  BackUrl: string;
  /** 请求时间戳 */
  Time: number;
  /** 是否需要顾客图片，1-需要图片，其它-不需要图片 */
  NeedFacePic?: number;
}

declare interface RegisterCallbackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface Youmall {
  (): Versions;
  /** {@link CreateAccount 创建集团门店管理员账号}({@link CreateAccountRequest 请求参数}): {@link CreateAccountResponse 返回参数} */
  CreateAccount(data: CreateAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountResponse>;
  /** {@link CreateFacePicture 上传人脸图片}({@link CreateFacePictureRequest 请求参数}): {@link CreateFacePictureResponse 返回参数} */
  CreateFacePicture(data: CreateFacePictureRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFacePictureResponse>;
  /** {@link DeletePersonFeature 删除顾客特征}({@link DeletePersonFeatureRequest 请求参数}): {@link DeletePersonFeatureResponse 返回参数} */
  DeletePersonFeature(data: DeletePersonFeatureRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePersonFeatureResponse>;
  /** {@link DescribeCameraPerson 获取收银台前顾客身份ID}({@link DescribeCameraPersonRequest 请求参数}): {@link DescribeCameraPersonResponse 返回参数} */
  DescribeCameraPerson(data: DescribeCameraPersonRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCameraPersonResponse>;
  /** {@link DescribeClusterPersonArrivedMall 查询客户到场信息（按天聚合）}({@link DescribeClusterPersonArrivedMallRequest 请求参数}): {@link DescribeClusterPersonArrivedMallResponse 返回参数} */
  DescribeClusterPersonArrivedMall(data: DescribeClusterPersonArrivedMallRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPersonArrivedMallResponse>;
  /** {@link DescribeClusterPersonTrace 查询客户单次到场轨迹（按天聚合）}({@link DescribeClusterPersonTraceRequest 请求参数}): {@link DescribeClusterPersonTraceResponse 返回参数} */
  DescribeClusterPersonTrace(data: DescribeClusterPersonTraceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPersonTraceResponse>;
  /** {@link DescribeFaceIdByTempId 获取已绑定收银台顾客FaceID}({@link DescribeFaceIdByTempIdRequest 请求参数}): {@link DescribeFaceIdByTempIdResponse 返回参数} */
  DescribeFaceIdByTempId(data: DescribeFaceIdByTempIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFaceIdByTempIdResponse>;
  /** {@link DescribeHistoryNetworkInfo 查询设备历史网络状态}({@link DescribeHistoryNetworkInfoRequest 请求参数}): {@link DescribeHistoryNetworkInfoResponse 返回参数} */
  DescribeHistoryNetworkInfo(data: DescribeHistoryNetworkInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHistoryNetworkInfoResponse>;
  /** {@link DescribeNetworkInfo 查询设备最新网络状态}({@link DescribeNetworkInfoRequest 请求参数}): {@link DescribeNetworkInfoResponse 返回参数} */
  DescribeNetworkInfo(data: DescribeNetworkInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkInfoResponse>;
  /** {@link DescribePerson 查询客户信息}({@link DescribePersonRequest 请求参数}): {@link DescribePersonResponse 返回参数} */
  DescribePerson(data: DescribePersonRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonResponse>;
  /** {@link DescribePersonArrivedMall 查询客户到场信息}({@link DescribePersonArrivedMallRequest 请求参数}): {@link DescribePersonArrivedMallResponse 返回参数} */
  DescribePersonArrivedMall(data: DescribePersonArrivedMallRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonArrivedMallResponse>;
  /** {@link DescribePersonInfo 获取顾客详情列表}({@link DescribePersonInfoRequest 请求参数}): {@link DescribePersonInfoResponse 返回参数} */
  DescribePersonInfo(data: DescribePersonInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonInfoResponse>;
  /** {@link DescribePersonInfoByFacePicture 图片检索身份接口}({@link DescribePersonInfoByFacePictureRequest 请求参数}): {@link DescribePersonInfoByFacePictureResponse 返回参数} */
  DescribePersonInfoByFacePicture(data: DescribePersonInfoByFacePictureRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonInfoByFacePictureResponse>;
  /** {@link DescribePersonTrace 查询客户单次到场轨迹}({@link DescribePersonTraceRequest 请求参数}): {@link DescribePersonTraceResponse 返回参数} */
  DescribePersonTrace(data: DescribePersonTraceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonTraceResponse>;
  /** {@link DescribePersonTraceDetail 查询客户单次到场轨迹明细}({@link DescribePersonTraceDetailRequest 请求参数}): {@link DescribePersonTraceDetailResponse 返回参数} */
  DescribePersonTraceDetail(data: DescribePersonTraceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonTraceDetailResponse>;
  /** {@link DescribePersonVisitInfo 获取顾客到访信息列表}({@link DescribePersonVisitInfoRequest 请求参数}): {@link DescribePersonVisitInfoResponse 返回参数} */
  DescribePersonVisitInfo(data: DescribePersonVisitInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonVisitInfoResponse>;
  /** {@link DescribeShopHourTrafficInfo 获取每小时客流人数}({@link DescribeShopHourTrafficInfoRequest 请求参数}): {@link DescribeShopHourTrafficInfoResponse 返回参数} */
  DescribeShopHourTrafficInfo(data: DescribeShopHourTrafficInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShopHourTrafficInfoResponse>;
  /** {@link DescribeShopInfo 获取客户所属门店列表}({@link DescribeShopInfoRequest 请求参数}): {@link DescribeShopInfoResponse 返回参数} */
  DescribeShopInfo(data: DescribeShopInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShopInfoResponse>;
  /** {@link DescribeShopTrafficInfo 获取每日客流人数}({@link DescribeShopTrafficInfoRequest 请求参数}): {@link DescribeShopTrafficInfoResponse 返回参数} */
  DescribeShopTrafficInfo(data: DescribeShopTrafficInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeShopTrafficInfoResponse>;
  /** {@link DescribeTrajectoryData 获取动线轨迹信息}({@link DescribeTrajectoryDataRequest 请求参数}): {@link DescribeTrajectoryDataResponse 返回参数} */
  DescribeTrajectoryData(data: DescribeTrajectoryDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrajectoryDataResponse>;
  /** {@link DescribeZoneFlowAgeInfoByZoneId 获取指定区域人流各年龄占比}({@link DescribeZoneFlowAgeInfoByZoneIdRequest 请求参数}): {@link DescribeZoneFlowAgeInfoByZoneIdResponse 返回参数} */
  DescribeZoneFlowAgeInfoByZoneId(data: DescribeZoneFlowAgeInfoByZoneIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneFlowAgeInfoByZoneIdResponse>;
  /** {@link DescribeZoneFlowAndStayTime 获取区域人流和停留时间}({@link DescribeZoneFlowAndStayTimeRequest 请求参数}): {@link DescribeZoneFlowAndStayTimeResponse 返回参数} */
  DescribeZoneFlowAndStayTime(data: DescribeZoneFlowAndStayTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneFlowAndStayTimeResponse>;
  /** {@link DescribeZoneFlowDailyByZoneId 获取指定区域每日客流量}({@link DescribeZoneFlowDailyByZoneIdRequest 请求参数}): {@link DescribeZoneFlowDailyByZoneIdResponse 返回参数} */
  DescribeZoneFlowDailyByZoneId(data: DescribeZoneFlowDailyByZoneIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneFlowDailyByZoneIdResponse>;
  /** {@link DescribeZoneFlowGenderAvrStayTimeByZoneId 获取指定区域不同年龄段男女平均停留时间}({@link DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest 请求参数}): {@link DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse 返回参数} */
  DescribeZoneFlowGenderAvrStayTimeByZoneId(data: DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse>;
  /** {@link DescribeZoneFlowGenderInfoByZoneId 获取指定区域性别占比}({@link DescribeZoneFlowGenderInfoByZoneIdRequest 请求参数}): {@link DescribeZoneFlowGenderInfoByZoneIdResponse 返回参数} */
  DescribeZoneFlowGenderInfoByZoneId(data: DescribeZoneFlowGenderInfoByZoneIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneFlowGenderInfoByZoneIdResponse>;
  /** {@link DescribeZoneFlowHourlyByZoneId 获取指定区域分时客流量}({@link DescribeZoneFlowHourlyByZoneIdRequest 请求参数}): {@link DescribeZoneFlowHourlyByZoneIdResponse 返回参数} */
  DescribeZoneFlowHourlyByZoneId(data: DescribeZoneFlowHourlyByZoneIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneFlowHourlyByZoneIdResponse>;
  /** {@link DescribeZoneTrafficInfo 获取区域客流人次及停留时间}({@link DescribeZoneTrafficInfoRequest 请求参数}): {@link DescribeZoneTrafficInfoResponse 返回参数} */
  DescribeZoneTrafficInfo(data: DescribeZoneTrafficInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneTrafficInfoResponse>;
  /** {@link ModifyPersonFeatureInfo 修改顾客特征信息}({@link ModifyPersonFeatureInfoRequest 请求参数}): {@link ModifyPersonFeatureInfoResponse 返回参数} */
  ModifyPersonFeatureInfo(data: ModifyPersonFeatureInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonFeatureInfoResponse>;
  /** {@link ModifyPersonTagInfo 标记顾客身份类型}({@link ModifyPersonTagInfoRequest 请求参数}): {@link ModifyPersonTagInfoResponse 返回参数} */
  ModifyPersonTagInfo(data: ModifyPersonTagInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonTagInfoResponse>;
  /** {@link ModifyPersonType 修改顾客身份类型接口}({@link ModifyPersonTypeRequest 请求参数}): {@link ModifyPersonTypeResponse 返回参数} */
  ModifyPersonType(data: ModifyPersonTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonTypeResponse>;
  /** {@link RegisterCallback 门店到访通知回调地址注册}({@link RegisterCallbackRequest 请求参数}): {@link RegisterCallbackResponse 返回参数} */
  RegisterCallback(data: RegisterCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterCallbackResponse>;
}

export declare type Versions = ["2018-02-28"];

export default Youmall;