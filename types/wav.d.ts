/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 活动详情 */
declare interface ActivityDetail {
  /** 活动id */
  ActivityId: number | null;
  /** 活动名称 */
  ActivityName: string | null;
  /** 活动状态，10:未开始状态、20:已开始（进行中）状态、30:已结束状态 */
  ActivityState: number | null;
  /** 活动类型，100:留资活动 */
  ActivityType: number | null;
  /** 活动开始时间戳，单位：秒 */
  StartTime: number | null;
  /** 活动结束时间戳，单位：秒 */
  EndTime: number | null;
  /** 活动主图 */
  MainPhoto: string | null;
  /** 协议编号 */
  PrivacyAgreementId: string | null;
  /** 活动更新时间戳，单位：秒 */
  UpdateTime: number | null;
  /** 活动数据列表 */
  ActivityDataList: string | null;
}

/** 活动参与详情 */
declare interface ActivityJoinDetail {
  /** 活动id */
  ActivityId: number | null;
  /** 活动名称 */
  ActivityName: string | null;
  /** 销售姓名 */
  SalesName: string | null;
  /** 销售电话 */
  SalesPhone: string | null;
  /** 参与id */
  JoinId: number | null;
  /** 活码id */
  LiveCodeId: number | null;
  /** 用户电话 */
  UserPhone: string | null;
  /** 用户姓名 */
  UserName: string | null;
  /** 活动数据 */
  ActivityData: string | null;
  /** 线索id */
  LeadId: number | null;
  /** 参与时间戳，单位：秒 */
  JoinTime: number | null;
  /** 线索是否是重复创建， 0 ：新建、 1：合并、 2：重复， 默认为0 */
  Duplicate: number | null;
  /** 重复线索id */
  DuplicateLeadId: number | null;
  /** 是否为参与多次活动， 1：参与一次、2、参与多次，默认为0 */
  JoinState: number | null;
  /** 创建时间戳，单位：秒 */
  CreateTime: number | null;
  /** 更新时间戳，单位：秒 */
  UpdateTime: number | null;
}

/** 渠道活码详情 */
declare interface ChannelCodeInnerDetail {
  /** 渠道活码id */
  Id: number;
  /** 欢迎语类型，0：普通欢迎语、1:渠道欢迎语 */
  Type: number;
  /** 渠道来源 */
  Source: string;
  /** 渠道来源名称 */
  SourceName: string;
  /** 二维码名称 */
  Name: string;
  /** 使用成员用户id集 */
  UseUserIdList: number[];
  /** 使用成员企微账号id集 */
  UseUserOpenIdList: string[];
  /** 标签 */
  TagList: WeComTagDetail[];
  /** 自动通过好友，0：开启、1：关闭，默认0开启 */
  SkipVerify: number;
  /** 添加好友人数 */
  Friends: number;
  /** 备注 */
  Remark: string;
  /** 欢迎语id（通过欢迎语新增返回的id） */
  MsgId: number;
  /** 联系我config_id */
  ConfigId: string;
  /** 联系我二维码地址 */
  QrCodeUrl: string;
  /** 记录状态， 0：有效、1：无效 */
  RecStatus: number;
  /** 应用ID */
  AppId: string;
}

/** 客户渠道标签 */
declare interface ChannelTag {
  /** 该客户档案当前已成功关联的渠道标签名称 */
  TagName?: string | null;
  /** 该客户档案当前已成功关联的渠道标签的id */
  TagId?: string | null;
}

/** 会话存档数据详情 */
declare interface ChatArchivingDetail {
  /** 消息id */
  MsgId: string;
  /** 动作名称，switch表示切换企微账号，send表示企微普通消息 */
  Action: string;
  /** 消息类型，当Action != "switch"时存在，例如video, text, voice 等，和企微开放文档一一对应https://open.work.weixin.qq.com/api/doc/90000/90135/91774 */
  MsgType: string | null;
  /** 消息发送人 */
  From: string | null;
  /** 消息接收人列表，注意接收人可能只有一个 */
  ToList: string[] | null;
  /** 如果是群消息，则不为空 */
  RoomId: string | null;
  /** 消息发送的时间戳，单位为秒 */
  MsgTime: number | null;
  /** MsgType=video时的消息体，忽略此字段，见BodyJson字段 */
  Video: ChatArchivingMsgTypeVideo | null;
  /** 根据MsgType的不同取值，解析内容不同，参考：https://open.work.weixin.qq.com/api/doc/90000/90135/91774 */
  BodyJson: string | null;
}

/** 会话存档的视频消息类型 */
declare interface ChatArchivingMsgTypeVideo {
  /** 视频时长，单位秒 */
  PlayLength: number | null;
  /** 文件大小 */
  FileSize: number | null;
  /** 视频资源对象Cos下载地址 */
  CosKey: string;
}

/** 线索信息详情 */
declare interface ClueInfoDetail {
  /** 线索id，线索唯一识别编码 */
  ClueId: string;
  /** 接待客户经销商顾问所属组织id,多个组织使用逗号分割 */
  DealerId: string;
  /** 线索获取时间，用户添加企业微信时间，单位是秒 */
  EnquireTime: number;
  /** 客户在微信生态中唯一识别码 */
  UnionId: string;
  /** 微信昵称 */
  Name: string;
  /** 联系方式 */
  Phone: string;
  /** 车系编号 */
  SeriesCode: string;
  /** 车型编号 */
  ModelCode: string;
  /** 省份编号 */
  ProvinceCode: string;
  /** 城市编号 */
  CityCode: string;
  /** 顾问名称 */
  SalesName: string;
  /** 顾问电话 */
  SalesPhone: string;
  /** 备注 */
  Remark: string;
  /** 标签 */
  TagList: string[];
  /** 客户姓名 */
  UserName: string | null;
  /** 线索属性，0：个人，1：企业 */
  LeadUserType?: number;
  /** 线索来源类型，1：线上，2：线下 */
  LeadType?: number;
  /** 线索渠道对应ID */
  ChannelId?: number;
  /** 线索渠道类型，与线索来源对应的渠道名称 */
  ChannelName?: string;
  /** 线索渠道名称 */
  SourceChannelName?: string | null;
  /** 0：未知，1：男，2：女 */
  Gender?: number;
  /** 线索创建时间戳，单位：秒 */
  CreateTime?: string;
  /** 线索所处状态，101-待分配 201-待建档 301-已建档 401-已邀约 501-跟进中 601-已下订单 701-已成交 801-战败申请中 901-已战败 1001-未知状态 1101-转移申请中 1201-已完成 */
  LeadStatus?: number;
  /** 线索意向等级 */
  LevelCode?: string;
  /** 线索成功导入的时间戳，单位：秒 */
  ImportAtTime?: number | null;
  /** 完成线索分配的时间戳，单位：秒 */
  DistributeTime?: number | null;
  /** 获取线索的时间戳，单位：秒 */
  CreateAtTime?: number;
}

/** 企业成员信息 */
declare interface CorpUserInfo {
  /** 企业成员UserId */
  UserId: number;
  /** 企业成员在SaaS名片内填写的姓名 */
  UserName: string | null;
  /** 企业成员在企微原生通讯录内的id */
  UserOpenId: string | null;
  /** 成员所属经销商id，可为空 */
  DealerId: number | null;
  /** 成员所属门店id，可为空 */
  ShopId: number | null;
  /** 企业成员手机号 */
  Phone: string | null;
  /** 成员所属部门id列表，仅返回该应用有查看权限的部门id；成员授权模式下，固定返回根部门id，即固定为1；多个部门使用逗号分割 */
  OrgIds: string | null;
  /** 主部门，仅当应用对主部门有查看权限时返回 */
  MainDepartment: string | null;
  /** 是否为部门负责人，第三方应用可为空。与orgIds值一一对应，多个部门使用逗号隔开，0-否， 1-是 */
  IsLeaderInDept: string | null;
  /** 激活状态: 0=已激活，1=已禁用，-1=退出企业" */
  Status: number;
}

/** CRM统计数据响应 */
declare interface CrmStatisticsData {
  /** 新增线索 */
  LeadCnt: number;
  /** 新增建档 */
  BuildCnt: number;
  /** 新增到店 */
  InvitedCnt: number;
  /** 新增下订 */
  OrderedCnt: number;
  /** 新增成交 */
  DeliveredCnt: number;
  /** 新增战败 */
  DefeatCnt: number;
  /** 新增好友 */
  NewContactCnt: number;
  /** 统计时间, 单位：天 */
  StatisticalTime: string;
}

/** 外部联系人SaaS使用明细数据 */
declare interface CustomerActionEventDetail {
  /** 事件码 */
  EventCode: string;
  /** 事件类型 */
  EventType: number;
  /** 事件来源 */
  EventSource: number;
  /** 外部联系人id */
  ExternalUserId: string;
  /** 销售顾问id */
  SalesId: number;
  /** 素材类型 */
  MaterialType: number;
  /** 素材编号id */
  MaterialId: number;
  /** 事件上报时间，单位：秒 */
  EventTime: number;
}

/** 潜客客户档案信息 */
declare interface CustomerProfile {
  /** 客户档案id，客户唯一识别编码 */
  CustomerId?: number;
  /** 所属经销商id */
  DealerCode?: string;
  /** 客户在微信生态中唯一识别码 */
  UnionId?: string;
  /** 档案创建时间戳，单位：秒 */
  CreateTime?: string;
  /** 客户姓名 */
  UserName?: string;
  /** 0未知，1：男，2：女 */
  Gender?: number;
  /** 客户联系手机号 */
  Phone?: string;
  /** 客户年龄段名称 */
  AgeRangeName?: string;
  /** 客户行业类型名称信息，如教师、医生 */
  JobTypeName?: string;
  /** 客户居住地址 */
  Address?: string;
  /** 客户所处状态 0:已分配 1:未分配 1 待建档, 2 已建档， 3 已到店 4 已经试驾 5 战败申请中 6 已战败 7 已成交 */
  LeadsProcessStatus?: number;
  /** 客户来源类型，1：线上，2：线下 */
  LeadType?: number;
  /** 与客户来源类型对应的渠道名称 */
  SourceName?: string;
  /** 客户购车的意向等级 */
  LeadsLevelCode?: string;
  /** 客户意向品牌编号 */
  VehicleBrandCode?: string;
  /** 客户意向车系编号 */
  VehicleSeriesCode?: string;
  /** 客户意向车型编号 */
  VehicleTypeCode?: string;
  /** 购车用途信息 */
  VehiclePurpose?: VehiclePurpose;
  /** 购车关注点信息 */
  PurchaseConcern?: PurchaseConcern[];
  /** 客户所属顾问姓名 */
  SalesName?: string;
  /** 客户所属顾问手机号 */
  SalesPhone?: string;
  /** 客户实际到店时间戳，单位：秒 */
  RealArrivalTime?: number | null;
  /** 客户到店完成试乘试驾时间戳，单位：秒 */
  CompleteTestDriveTime?: string | null;
  /** 客户完成下订的时间戳，单位：秒 */
  OrderTime?: number | null;
  /** 客户成交的时间戳，单位：秒 */
  DeliveryTime?: number | null;
  /** 开票时间戳 */
  InvoiceTime?: number | null;
  /** 完成对此客户战败审批的时间戳，单位：秒 */
  LoseTime?: number | null;
  /** 线索成功获取的时间戳，单位：秒 */
  CreatedAtTime?: number;
  /** 线索成功导入的时间戳，单位：秒 */
  ImportAtTime?: number | null;
  /** 完成线索分配的时间戳，单位：秒 */
  DistributeTime?: number | null;
  /** 线索成功创建的时间戳，单位：秒 */
  LeadCreateTime?: number;
  /** 线索关联微信昵称 */
  Nickname?: string;
  /** 线索归属部门节点 */
  OrgIdList?: string[];
  /** 客户的介绍人姓名 */
  Introducer?: string | null;
  /** 客户的介绍人手机号码 */
  IntroducerPhone?: string | null;
  /** 最近一次完成跟进的时间戳，单位：秒 */
  FollowTime?: number;
  /** 最近一次计划跟进的时间戳，单位：秒 */
  NextFollowTime?: number;
  /** 已为该客户添加的企业标签信息 */
  EnterpriseTags?: EnterpriseTag[] | null;
  /** 已为该客户添加的渠道标签信息 */
  ChannelTags?: ChannelTag[] | null;
}

/** 经销商信息 */
declare interface DealerInfo {
  /** 企微SaaS平台经销商id */
  DealerId: number;
  /** 经销商名称 */
  DealerName: string;
  /** 所属省份编号 */
  ProvinceCode?: string | null;
  /** 所属城市编号列表 */
  CityCodeList?: string[] | null;
  /** 业务覆盖品牌id列表 */
  BrandIdList?: string[] | null;
}

/** 客户企业标签 */
declare interface EnterpriseTag {
  /** 该客户档案当前已成功关联的企业标签分组名称 */
  GroupName?: string | null;
  /** 该客户档案当前已成功关联的企业标签名称 */
  TagName?: string | null;
  /** 该客户档案当前已成功关联的企业标签的id */
  TagId?: string | null;
}

/** 客户信息 */
declare interface ExternalContact {
  /** 外部联系人的userId */
  ExternalUserId: string;
  /** 外部联系人性别 0-未知 1-男性 2-女性 */
  Gender: number;
  /** 外部联系人的名称 */
  Name: string;
  /** 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户 */
  Type: number;
  /** 外部联系人在微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来。仅当联系人类型是微信用户，且企业或第三方服务商绑定了微信开发者ID有此字段。 */
  UnionId: string | null;
  /** 外部联系人联系电话 */
  Phone: string | null;
}

/** 具备更多信息的外部联系人详细信息 */
declare interface ExternalContactDetailPro {
  /** 客户信息 */
  Customer?: ExternalContact | null;
  /** 添加了此外部联系人的企业成员信息 */
  FollowUser?: FollowUserPro[] | null;
}

/** 外部联系人简短信息 */
declare interface ExternalContactSimpleInfo {
  /** 外部联系人的userId */
  ExternalUserId: string;
  /** 添加了此外部联系人的企业成员userId */
  UserId: string;
  /** 添加了此外部联系人的企业成员的姓名 */
  SalesName: string | null;
  /** 添加了此外部联系人的企业成员的归属部门id列表 */
  DepartmentIdList: number[];
}

/** 外部联系人标签 */
declare interface ExternalContactTag {
  /** 该成员添加此外部联系人所打标签的分组名称（标签功能需要企业微信升级到2.7.5及以上版本） */
  GroupName: string | null;
  /** 该成员添加此外部联系人所打标签名称 */
  TagName: string | null;
  /** 该成员添加此外部联系人所打标签类型, 1-企业设置, 2-用户自定义 */
  Type: number | null;
  /** 该成员添加此外部联系人所打企业标签的id，仅企业设置（type为1）的标签返回 */
  TagId: string | null;
}

/** 外部联系人事件信息 */
declare interface ExternalUserEventInfo {
  /** 事件编码, 添加外部联系人(ADD_EXTERNAL_CUSTOMER)/成员删除外部联系人(DELETE_EXTERNAL_CUSTOMER)/外部联系人删除成员(DELETE_FOLLOW_USER) */
  EventCode: string;
  /** 外部联系人id */
  ExternalUserId: string;
  /** 企微SaaS的成员id */
  SalesId: string;
  /** 事件上报时间戳，单位：秒 */
  EventTime: number;
}

/** 外部联系人映射信息 */
declare interface ExternalUserMappingInfo {
  /** 企业主体对应的外部联系人userId */
  CorpExternalUserId: string;
  /** 乐销车应用主体对应的外部联系人, 当不存在好友关系时，该字段值为空 */
  ExternalUserId: string | null;
}

/** 添加了此外部联系人的企业成员信息 */
declare interface FollowUser {
  /** 添加了此外部联系人的企业成员userid */
  UserId: string;
  /** 该成员对此外部联系人的备注 */
  Remark: string | null;
  /** 该成员对此外部联系人的描述 */
  Description: string | null;
  /** 该成员添加此外部联系人的时间戳，单位为秒 */
  CreateTime: number;
  /** 该成员添加此客户的来源，具体含义详见来源定义 */
  AddWay: number;
  /** 发起添加的userid，如果成员主动添加，为成员的userid；如果是客户主动添加，则为客户的外部联系人userid；如果是内部成员共享/管理员分配，则为对应的成员/管理员userid */
  OperUserId: string;
  /** 该成员添加此外部联系人所打标签信息 */
  Tags: ExternalContactTag[] | null;
}

/** 具备更多信息的添加了此外部联系人的企业成员信息 */
declare interface FollowUserPro {
  /** 添加了此外部联系人的企业成员userid */
  UserId: string;
  /** 该成员对此外部联系人的备注 */
  Remark: string | null;
  /** 该成员对此外部联系人的描述 */
  Description: string | null;
  /** 该成员添加此外部联系人的时间戳，单位为秒 */
  CreateTime: number;
  /** 该成员添加此客户的来源，具体含义详见来源定义 */
  AddWay: number;
  /** 发起添加的userid，如果成员主动添加，为成员的userid；如果是客户主动添加，则为客户的外部联系人userid；如果是内部成员共享/管理员分配，则为对应的成员/管理员userid */
  OperUserId: string;
  /** 该成员添加此外部联系人所打标签信息 */
  Tags: ExternalContactTag[] | null;
  /** 添加了此外部联系人的企业成员的姓名 */
  SalesName?: string | null;
  /** 企业成员的归属部门id列表 */
  DepartmentIdList?: number[];
}

/** license相关信息 */
declare interface LicenseInfo {
  /** license编号 */
  License: string;
  /** license版本；1-基础版，2-标准版，3-增值版 */
  LicenseEdition: number;
  /** 生效开始时间, 格式yyyy-MM-dd HH:mm:ss */
  ResourceStartTime: string;
  /** 生效结束时间, 格式yyyy-MM-dd HH:mm:ss */
  ResourceEndTime: string;
  /** 隔离截止时间, 格式yyyy-MM-dd HH:mm:ss */
  IsolationDeadline: string | null;
  /** 资源计划销毁时间, 格式yyyy-MM-dd HH:mm:ss */
  DestroyTime: string | null;
  /** 资源状态，1.正常，2.隔离，3.销毁 */
  Status: number;
  /** 扩展信息 */
  Extra: string | null;
}

/** 活动活码详情 */
declare interface LiveCodeDetail {
  /** 活码id */
  LiveCodeId: number;
  /** 活码名称 */
  LiveCodeName: string;
  /** 短链url */
  ShortChainAddress: string | null;
  /** 活码二维码 */
  LiveCodePreview: string | null;
  /** 活动id */
  ActivityId: number;
  /** 活动名称 */
  ActivityName: string;
  /** 活码状态，-1：删除，0：启用，1禁用，默认为0 */
  LiveCodeState: number;
  /** 活码参数，每个活码参数都是不一样的， 这个的值对应的是字符串json类型 */
  LiveCodeData: string | null;
  /** 创建时间戳，单位为秒 */
  CreateTime: number;
  /** 更新时间戳，单位为秒 */
  UpdateTime: number;
}

/** 素材信息响应体 */
declare interface MaterialInfo {
  /** 素材id */
  MaterialId: number;
  /** 素材名称 */
  MaterialName: string | null;
  /** 素材状态, -1: 删除 0: 启用 1: 禁用 */
  Status: number;
}

/** 小程序码信息 */
declare interface MiniAppCodeInfo {
  /** 主键id */
  Id: number;
  /** 小程序名称 */
  MiniAppName: string;
  /** 小程序logo */
  MiniAppLogo: string;
  /** 小程序管理端地址 */
  MiniAdminUrl: string;
  /** 状态：0正常，1删除 */
  State: number;
  /** 创建时间戳，单位为秒 */
  CreateTime: number;
  /** 更新时间戳，单位为秒 */
  UpdateTime: number;
}

/** 购车关注点 */
declare interface PurchaseConcern {
  /** 购车关注点code */
  Code?: string;
  /** 购车关注点描述 */
  Description?: string;
}

/** 企业成员SaaS使用明细数据 */
declare interface SalesActionEventDetail {
  /** 事件码 */
  EventCode: string;
  /** 事件类型 */
  EventType: number;
  /** 事件来源 */
  EventSource: number;
  /** 销售顾问id */
  SalesId: number;
  /** 素材类型 */
  MaterialType: number;
  /** 素材编号id */
  MaterialId: number;
  /** 事件上报时间，单位：秒 */
  EventTime: number;
}

/** 标签详细信息 */
declare interface TagDetailInfo {
  /** 标签名称 */
  TagName: string;
  /** 标签业务ID */
  BizTagId: string;
  /** 企微标签ID */
  TagId: string;
  /** 标签排序的次序值，sort值大的排序靠前。有效的值范围是[0, 2^32) */
  Sort: number;
  /** 标签创建时间,单位为秒 */
  CreateTime: number;
}

/** 标签组信息 */
declare interface TagGroup {
  /** 企微标签组id */
  GroupId: string;
  /** 标签组业务id */
  BizGroupId: string;
  /** 企微标签组名称，不能超过15个字符 */
  GroupName: string;
  /** 标签组次序值。sort值大的排序靠前。有效的值范围是[0, 2^32) */
  Sort: number;
  /** 标签组创建时间,单位为秒 */
  CreateTime: number;
  /** 标签组内的标签列表, 上限为20 */
  Tags: TagDetailInfo[];
}

/** 标签信息 */
declare interface TagInfo {
  /** 标签名称, 最大长度限制15个字符 */
  TagName: string;
  /** 标签组排序,值越大,排序越靠前 */
  Sort?: number;
}

/** 车型车系信息 */
declare interface VehicleInfo {
  /** 品牌id */
  BrandId: number;
  /** 品牌名称 */
  BrandName: string;
  /** 车系id */
  SeriesId: number;
  /** 车系名称 */
  SeriesName: string;
  /** 车型id */
  ModelId: number;
  /** 车型名称 */
  ModelName: string;
}

/** 购车用途详细信息 */
declare interface VehiclePurpose {
  /** 购车用途code */
  VehiclePurposeCode?: string;
  /** 购车用途名称 */
  VehiclePurposeName?: string;
}

/** 企微个人标签信息,渠道活码使用 */
declare interface WeComTagDetail {
  /** 标签分组名称 */
  GroupName?: string | null;
  /** 标签分组业务ID */
  BizGroupId?: string | null;
  /** 标签名称 */
  TagName?: string | null;
  /** 标签ID */
  TagId?: string | null;
  /** 标签业务ID */
  BizTagId?: string | null;
  /** 标签分类，1：企业设置、2：用户自定义 */
  Type?: number | null;
  /** 标签业务ID字符串格式 */
  BizTagIdStr?: string | null;
}

declare interface CreateChannelCodeRequest {
  /** 欢迎语类型:0普通欢迎语,1渠道欢迎语 */
  Type: number;
  /** 使用成员用户id集 */
  UseUserId: number[];
  /** 使用成员企微账号id集 */
  UseUserOpenId: string[];
  /** 应用ID,字典表中的APP_TYPE值,多个已逗号分隔 */
  AppIds: string;
  /** 渠道来源 */
  Source?: string;
  /** 渠道来源名称 */
  SourceName?: string;
  /** 二维码名称 */
  Name?: string;
  /** 标签 */
  Tag?: WeComTagDetail[];
  /** 自动通过好友：0开启 1关闭, 默认开启 */
  SkipVerify?: number;
  /** 欢迎语id（通过欢迎语新增返回的id） */
  MsgId?: number;
  /** 备注 */
  Remark?: string;
  /** 渠道类型 0 未知 1 公域 2私域 */
  SourceType?: number;
}

declare interface CreateChannelCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCorpTagRequest {
  /** 标签组名称，最长为15个字符 */
  GroupName: string;
  /** 标签信息数组 */
  Tags: TagInfo[];
  /** 标签组次序值。sort值大的排序靠前。有效的值范围是[0, 2^32) */
  Sort?: number;
}

declare interface CreateCorpTagResponse {
  /** 标签组信息 */
  TagGroup: TagGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLeadRequest {
  /** 来源ID */
  ChannelId: number;
  /** 来源名称 */
  ChannelName: string;
  /** 创建时间， 单位毫秒 */
  CreateTime: number;
  /** 线索类型：1-400呼入，2-常规留资 */
  SourceType: number;
  /** 经销商id */
  DealerId: number;
  /** 品牌id */
  BrandId: number;
  /** 车系id */
  SeriesId: number;
  /** 客户姓名 */
  CustomerName: string;
  /** 客户手机号 */
  CustomerPhone: string;
  /** 车型id */
  ModelId?: number;
  /** 客户性别: 0-未知, 1-男, 2-女 */
  CustomerSex?: number;
  /** 销售姓名 */
  SalesName?: string;
  /** 销售手机号 */
  SalesPhone?: string;
  /** Cc坐席姓名 */
  CcName?: string;
  /** 备注 */
  Remark?: string;
}

declare interface CreateLeadResponse {
  /** 线索处理状态码： 0-表示创建成功， 1-表示线索合并，2-表示线索重复 */
  BusinessCode: number;
  /** 线索处理结果描述 */
  BusinessMsg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryActivityJoinListRequest {
  /** 活动id */
  ActivityId: number;
  /** 分页游标，对应结果返回的NextCursor,首次请求保持为空 */
  Cursor?: string;
  /** 单页数据限制 */
  Limit?: number;
}

declare interface QueryActivityJoinListResponse {
  /** 分页游标 */
  NextCursor: string | null;
  /** 活码列表响应参数 */
  PageData: ActivityJoinDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryActivityListRequest {
  /** 分页游标，对应结果返回的NextCursor,首次请求保持为空 */
  Cursor?: string;
  /** 单页数据限制 */
  Limit?: number;
}

declare interface QueryActivityListResponse {
  /** 分页游标 */
  NextCursor: string | null;
  /** 活码列表响应参数 */
  PageData: ActivityDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryActivityLiveCodeListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryActivityLiveCodeListResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 活码列表响应参数 */
  PageData: LiveCodeDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChannelCodeListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryChannelCodeListResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 活码列表响应参数 */
  PageData: ChannelCodeInnerDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChatArchivingListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryChatArchivingListResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 会话存档列表响应参数 */
  PageData: ChatArchivingDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryClueInfoListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
  /** 查询开始时间， 单位秒 */
  BeginTime?: number;
  /** 查询结束时间， 单位秒 */
  EndTime?: number;
}

declare interface QueryClueInfoListResponse {
  /** 线索信息列表 */
  PageData?: ClueInfoDetail[] | null;
  /** 分页游标，下次调用带上该值，则从当前的位置继续往后拉，以实现增量拉取。 */
  NextCursor?: string | null;
  /** 是否还有更多数据。0-否；1-是。 */
  HasMore?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCrmStatisticsRequest {
  /** 查询开始时间， 单位秒 */
  BeginTime: number;
  /** 查询结束时间， 单位秒 */
  EndTime: number;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
  /** 请求的企业成员id，为空时默认全租户 */
  SalesId?: string;
  /** 请求的部门id，为空时默认全租户 */
  OrgId?: number;
}

declare interface QueryCrmStatisticsResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** CRM统计响应数据 */
  PageData: CrmStatisticsData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCustomerEventDetailStatisticsRequest {
  /** 查询开始时间， 单位秒 */
  BeginTime: number;
  /** 查询结束时间， 单位秒 */
  EndTime: number;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryCustomerEventDetailStatisticsResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 外部联系人SaaS使用明细统计响应数据 */
  PageData: CustomerActionEventDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCustomerProfileListRequest {
  /** 分页，预期请求的数据量，取值范围 1 ~ 1000 */
  Limit: number;
  /** 查询开始时间， 单位秒 */
  BeginTime: number;
  /** 查询结束时间， 单位秒 */
  EndTime: number;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
}

declare interface QueryCustomerProfileListResponse {
  /** 分页游标，下次调用带上该值，则从当前的位置继续往后拉，以实现增量拉取。 */
  NextCursor?: string | null;
  /** 潜客客户存档信息 */
  PageData?: CustomerProfile[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryDealerInfoListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryDealerInfoListResponse {
  /** 经销商信息列表 */
  PageData?: DealerInfo[] | null;
  /** 分页游标，下次调用带上该值，则从当前的位置继续往后拉取新增的数据，以实现增量拉取。 */
  NextCursor?: string | null;
  /** 是否还有更多数据。0-否；1-是。 */
  HasMore?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryExternalContactDetailByDateRequest {
  /** 查询结束时间， 单位秒 */
  BeginTime: number;
  /** 查询结束时间， 单位秒 */
  EndTime: number;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryExternalContactDetailByDateResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor?: string | null;
  /** 外部联系人详细信息 */
  PageData?: ExternalContactDetailPro[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryExternalContactDetailRequest {
  /** 外部联系人的userid，注意不是企业成员的帐号 */
  ExternalUserId: string;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填。当客户在企业内的跟进人超过500人时需要使用cursor参数进行分页获取 */
  Cursor?: string;
  /** 当前接口Limit不需要传参， 保留Limit只是为了保持向后兼容性， Limit默认值为500，当返回结果超过500时， NextCursor才有返回值 */
  Limit?: number;
}

declare interface QueryExternalContactDetailResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 客户信息 */
  Customer: ExternalContact | null;
  /** 添加了此外部联系人的企业成员信息 */
  FollowUser: FollowUser[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryExternalContactListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryExternalContactListResponse {
  /** 外部联系人信息列表 */
  PageData: ExternalContactSimpleInfo[] | null;
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryExternalUserEventListRequest {
  /** 查询开始时间， 单位秒 */
  BeginTime: number;
  /** 查询结束时间， 单位秒 */
  EndTime: number;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryExternalUserEventListResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 外部联系人事件信息响应数据 */
  PageData: ExternalUserEventInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryExternalUserMappingInfoRequest {
  /** 企业主体对应的外部联系人id列表，列表长度限制最大为50。 */
  CorpExternalUserIdList: string[];
}

declare interface QueryExternalUserMappingInfoResponse {
  /** 外部联系人映射信息, 只返回映射成功的记录 */
  ExternalUserIdMapping: ExternalUserMappingInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryLicenseInfoRequest {
  /** license编号 */
  License: string;
}

declare interface QueryLicenseInfoResponse {
  /** license响应信息 */
  LicenseInfo: LicenseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMaterialListRequest {
  /** 素材类型：0-图片，1-视频，3-文章，10-车型，11-名片 */
  MaterialType: number;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryMaterialListResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 企业素材列表响应数据 */
  PageData: MaterialInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMiniAppCodeListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryMiniAppCodeListResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 小程序码列表响应数据 */
  PageData: MiniAppCodeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryStaffEventDetailStatisticsRequest {
  /** 查询开始时间， 单位秒 */
  BeginTime: number;
  /** 查询结束时间， 单位秒 */
  EndTime: number;
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryStaffEventDetailStatisticsResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 企业成员SaaS使用明细统计响应数据 */
  PageData: SalesActionEventDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryUserInfoListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryUserInfoListResponse {
  /** 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空 */
  NextCursor: string | null;
  /** 企业成员信息列表响应数据 */
  PageData: CorpUserInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryVehicleInfoListRequest {
  /** 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填 */
  Cursor?: string;
  /** 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值 */
  Limit?: number;
}

declare interface QueryVehicleInfoListResponse {
  /** 车系车型信息列表 */
  PageData: VehicleInfo[] | null;
  /** 分页游标，下次调用带上该值，则从当前的位置继续往后拉取新增的数据，以实现增量拉取。 */
  NextCursor: string | null;
  /** 是否还有更多数据。0-否；1-是。 */
  HasMore: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Wav 企业微信汽车行业版} */
declare interface Wav {
  (): Versions;
  /** 新增渠道活码接口 {@link CreateChannelCodeRequest} {@link CreateChannelCodeResponse} */
  CreateChannelCode(data: CreateChannelCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChannelCodeResponse>;
  /** 新增标签库接口 {@link CreateCorpTagRequest} {@link CreateCorpTagResponse} */
  CreateCorpTag(data: CreateCorpTagRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCorpTagResponse>;
  /** 线索回收接口 {@link CreateLeadRequest} {@link CreateLeadResponse} */
  CreateLead(data: CreateLeadRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLeadResponse>;
  /** 查询活动参与明细列表接口 {@link QueryActivityJoinListRequest} {@link QueryActivityJoinListResponse} */
  QueryActivityJoinList(data: QueryActivityJoinListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryActivityJoinListResponse>;
  /** 查询活动列表接口 {@link QueryActivityListRequest} {@link QueryActivityListResponse} */
  QueryActivityList(data?: QueryActivityListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryActivityListResponse>;
  /** 查询活动活码列表接口 {@link QueryActivityLiveCodeListRequest} {@link QueryActivityLiveCodeListResponse} */
  QueryActivityLiveCodeList(data?: QueryActivityLiveCodeListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryActivityLiveCodeListResponse>;
  /** 查询渠道活码列表接口 {@link QueryChannelCodeListRequest} {@link QueryChannelCodeListResponse} */
  QueryChannelCodeList(data?: QueryChannelCodeListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChannelCodeListResponse>;
  /** 查询会话存档列表接口 {@link QueryChatArchivingListRequest} {@link QueryChatArchivingListResponse} */
  QueryChatArchivingList(data?: QueryChatArchivingListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChatArchivingListResponse>;
  /** 查询线索列表接口 {@link QueryClueInfoListRequest} {@link QueryClueInfoListResponse} */
  QueryClueInfoList(data?: QueryClueInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryClueInfoListResponse>;
  /** 查询CRM统计数据接口 {@link QueryCrmStatisticsRequest} {@link QueryCrmStatisticsResponse} */
  QueryCrmStatistics(data: QueryCrmStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCrmStatisticsResponse>;
  /** 查询外部联系人SaaS使用明细数据接口 {@link QueryCustomerEventDetailStatisticsRequest} {@link QueryCustomerEventDetailStatisticsResponse} */
  QueryCustomerEventDetailStatistics(data: QueryCustomerEventDetailStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCustomerEventDetailStatisticsResponse>;
  /** 查询潜客客户档案列表接口 {@link QueryCustomerProfileListRequest} {@link QueryCustomerProfileListResponse} */
  QueryCustomerProfileList(data: QueryCustomerProfileListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCustomerProfileListResponse>;
  /** 查询经销商信息列表接口 {@link QueryDealerInfoListRequest} {@link QueryDealerInfoListResponse} */
  QueryDealerInfoList(data?: QueryDealerInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDealerInfoListResponse>;
  /** 查询外部联系人详情接口 {@link QueryExternalContactDetailRequest} {@link QueryExternalContactDetailResponse} */
  QueryExternalContactDetail(data: QueryExternalContactDetailRequest, config?: AxiosRequestConfig): AxiosPromise<QueryExternalContactDetailResponse>;
  /** 通过时间段查询外部联系人详情列表 {@link QueryExternalContactDetailByDateRequest} {@link QueryExternalContactDetailByDateResponse} */
  QueryExternalContactDetailByDate(data: QueryExternalContactDetailByDateRequest, config?: AxiosRequestConfig): AxiosPromise<QueryExternalContactDetailByDateResponse>;
  /** 查询外部联系人列表接口 {@link QueryExternalContactListRequest} {@link QueryExternalContactListResponse} */
  QueryExternalContactList(data?: QueryExternalContactListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryExternalContactListResponse>;
  /** 查询外部联系人事件明细列表接口 {@link QueryExternalUserEventListRequest} {@link QueryExternalUserEventListResponse} */
  QueryExternalUserEventList(data: QueryExternalUserEventListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryExternalUserEventListResponse>;
  /** 外部联系人转换接口 {@link QueryExternalUserMappingInfoRequest} {@link QueryExternalUserMappingInfoResponse} */
  QueryExternalUserMappingInfo(data: QueryExternalUserMappingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryExternalUserMappingInfoResponse>;
  /** 查询license信息接口 {@link QueryLicenseInfoRequest} {@link QueryLicenseInfoResponse} */
  QueryLicenseInfo(data: QueryLicenseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryLicenseInfoResponse>;
  /** 获取企业素材列表接口 {@link QueryMaterialListRequest} {@link QueryMaterialListResponse} */
  QueryMaterialList(data: QueryMaterialListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMaterialListResponse>;
  /** 查询小程序码列表接口 {@link QueryMiniAppCodeListRequest} {@link QueryMiniAppCodeListResponse} */
  QueryMiniAppCodeList(data?: QueryMiniAppCodeListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMiniAppCodeListResponse>;
  /** 企业成员SaaS使用明细数据接口 {@link QueryStaffEventDetailStatisticsRequest} {@link QueryStaffEventDetailStatisticsResponse} */
  QueryStaffEventDetailStatistics(data: QueryStaffEventDetailStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryStaffEventDetailStatisticsResponse>;
  /** 查询企业成员信息列表接口 {@link QueryUserInfoListRequest} {@link QueryUserInfoListResponse} */
  QueryUserInfoList(data?: QueryUserInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryUserInfoListResponse>;
  /** 查询车系车型信息列表接口 {@link QueryVehicleInfoListRequest} {@link QueryVehicleInfoListResponse} */
  QueryVehicleInfoList(data?: QueryVehicleInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryVehicleInfoListResponse>;
}

export declare type Versions = ["2021-01-29"];

export default Wav;
