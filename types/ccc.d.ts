/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 生效运营商白名单号码 */
declare interface ActiveCarrierPrivilegeNumber {
  /** 实例Id */
  SdkAppId?: number;
  /** 主叫号码 */
  Caller?: string;
  /** 被叫号码 */
  Callee?: string;
  /** 生效unix时间戳(秒) */
  CreateTime?: number;
}

/** 音频文件审核信息 */
declare interface AudioFileInfo {
  /** 文件ID */
  FileId?: number | null;
  /** 文件别名 */
  CustomFileName?: string | null;
  /** 文件名 */
  AudioFileName?: string | null;
  /** 审核状态，0-未审核，1-审核通过，2-审核拒绝 */
  Status?: number | null;
}

/** 外呼任务被叫信息 */
declare interface AutoCalloutTaskCalleeInfo {
  /** 被叫号码 */
  Callee: string;
  /** 呼叫状态 0初始 1已接听 2未接听 3呼叫中 4待重试 */
  State: number;
  /** 会话ID列表 */
  Sessions: string[];
}

/** 自动外呼任务列表项 */
declare interface AutoCalloutTaskInfo {
  /** 任务名 */
  Name?: string;
  /** 被叫数量 */
  CalleeCount?: number;
  /** 主叫号码列表 */
  Callers?: string[];
  /** 起始时间戳 */
  NotBefore?: number;
  /** 结束时间戳 */
  NotAfter?: number | null;
  /** 任务使用的IvrId */
  IvrId?: number;
  /** 任务状态0初始 1运行中 2已完成 3结束中 4已结束 */
  State?: number;
  /** 任务Id */
  TaskId?: number;
}

/** 呼入实时指标 */
declare interface CallInMetrics {
  /** IVR驻留数量 */
  IvrCount: number;
  /** 排队中数量 */
  QueueCount: number;
  /** 振铃中数量 */
  RingCount: number;
  /** 接通中数量 */
  AcceptCount: number;
  /** 客服转接外线中数量 */
  TransferOuterCount: number;
  /** 最大排队时长 */
  MaxQueueDuration: number;
  /** 平均排队时长 */
  AvgQueueDuration: number;
  /** 最大振铃时长 */
  MaxRingDuration: number;
  /** 平均振铃时长 */
  AvgRingDuration: number;
  /** 最大接通时长 */
  MaxAcceptDuration: number;
  /** 平均接通时长 */
  AvgAcceptDuration: number;
}

/** 呼入线路维度相关指标 */
declare interface CallInNumberMetrics {
  /** 线路号码 */
  Number?: string;
  /** 线路相关指标 */
  Metrics?: CallInMetrics;
  /** 所属技能组相关指标 */
  SkillGroupMetrics?: CallInSkillGroupMetrics[];
}

/** 呼入技能组相关指标 */
declare interface CallInSkillGroupMetrics {
  /** 技能组ID */
  SkillGroupId: number;
  /** 数据指标 */
  Metrics: CallInMetrics;
  /** 技能组名称 */
  Name: string;
}

/** 被叫属性 */
declare interface CalleeAttribute {
  /** 被叫号码 */
  Callee: string;
  /** 随路数据 */
  UUI?: string;
  /** 参数 */
  Variables?: Variable[];
}

/** 运营商白名单号码申请单 */
declare interface CarrierPrivilegeNumberApplicant {
  /** 实例Id */
  SdkAppId?: number;
  /** 申请单Id */
  ApplicantId?: number;
  /** 主叫号码列表 */
  Callers?: string[];
  /** 被叫号码列表 */
  Callees?: string[];
  /** 描述 */
  Description?: string | null;
  /** 审批状态:1 待审核、2 通过、3 拒绝 */
  State?: number;
  /** 创建时间，unix时间戳(秒) */
  CreateTime?: number;
  /** 更新时间，unix时间戳(秒) */
  UpdateTime?: number;
}

/** 企业资质申请信息 */
declare interface CompanyApplyInfo {
  /** 申请人身份，0-公司法定代表人，1-经办人（受法定代表人委托） */
  ApplicantType: number | null;
  /** 企业名称 */
  CompanyName: string | null;
  /** 统一社会信用代码 */
  BusinessId: string | null;
  /** 营业执照扫描件(加盖公章)。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  BusinessIdPicUrl: string | null;
  /** 法定代表人名称 */
  CorporationName: string | null;
  /** 法定代表人身份证号码 */
  CorporationId: string | null;
  /** 法定代表人身份证正反面扫描件。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CorporationIdPicUrl: string | null;
  /** 安全合规使用承诺书。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  NetworkCommitmentPicUrl: string | null;
  /** 是否与腾讯云账号的资质一致,0-不一致,1-一致 */
  IsEqualTencentCloud: number | null;
  /** 法定代表人手机号 */
  CorporationMobile: string | null;
  /** 法定代表人手机号码实名认证。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CorporationMobilePicUrl: string | null;
  /** 通话话术。(支持doc、docx格式的文档不超过50MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  UseDescribeFileUrl: string | null;
  /** 公司授权函。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CompanyAuthLetterPicUrl: string | null;
  /** 电话受理单。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  AcceptPicUrl: string | null;
  /** 法定代表人手持身份证照，申请人类型为法定代表人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CorporationHoldingOnIdPicUrl?: string | null;
  /** 经办人名称，申请人类型为经办人时必填。 */
  OperatorName?: string | null;
  /** 经办人证件号码，申请人类型为经办人时必填。 */
  OperatorId?: string | null;
  /** 经办人身份证正反面扫描件，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  OperatorIdPicUrl?: string | null;
  /** 经办人手持身份证照，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  OperatorHoldingOnIdPicUrl?: string | null;
  /** 委托授权书，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CommissionPicUrl?: string | null;
  /** 经办人手机号，申请人类型为经办人时必填。 */
  OperatorMobile?: string | null;
  /** 经办人邮箱，申请人类型为经办人时必填。 */
  OperatorEmail?: string | null;
  /** 经办人手机号码实名认证，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  OperatorMobilePicUrl?: string | null;
}

/** 公司资质审核状态信息 */
declare interface CompanyStateInfo {
  /** 申请单ID */
  Id?: number;
  /** 公司名称 */
  CompanyName?: string | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 审核时间 */
  CheckTime?: number | null;
  /** 审核备注 */
  CheckMsg?: string | null;
  /** 审核状态，1-待审核，2-审核通过，3-驳回 */
  State?: number | null;
  /** 公司统一社会信用代码 */
  BusinessId?: string | null;
  /** 修改时间 */
  ModifyTime?: number | null;
}

/** 查询预测式外呼任务列表元素 */
declare interface DescribePredictiveDialingCampaignsElement {
  /** 任务 ID */
  CampaignId?: number | null;
  /** 任务名称 */
  Name?: string | null;
  /** 任务状态 0 待开始 1 进行中 2 已暂停 3 已终止 4 已完成 */
  Status?: number | null;
  /** 任务状态原因 0 正常 1 手动结束 2 超时结束 */
  StatusReason?: number | null;
  /** 被叫号码个数 */
  CalleeCount?: number | null;
  /** 已完成的被叫个数 */
  FinishedCalleeCount?: number | null;
  /** 相同应用内多个任务运行优先级，从高到底 1 - 5 */
  Priority?: number | null;
  /** 使用的座席技能组 ID */
  SkillGroupId?: number | null;
}

/** 批量添加客服时，返回出错客服的信息 */
declare interface ErrStaffItem {
  /** 座席邮箱地址 */
  StaffEmail?: string;
  /** 错误码 */
  Code?: string;
  /** 错误描述 */
  Message?: string;
}

/** 话机信息 */
declare interface ExtensionInfo {
  /** 实例ID */
  SdkAppId?: number;
  /** 分机全名 */
  FullExtensionId?: string;
  /** 分机号 */
  ExtensionId?: string;
  /** 所属技能组列表 */
  SkillGroupId?: string;
  /** 分机名称 */
  ExtensionName?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 最后修改时间 */
  ModifyTime?: number;
  /** 话机状态(0 离线、100 空闲、200忙碌） */
  Status?: number;
  /** 是否注册 */
  Register?: boolean;
  /** 绑定座席邮箱 */
  Relation?: string;
  /** 绑定座席名称 */
  RelationName?: string;
}

/** 筛选条件 */
declare interface Filter {
  /** 筛选字段名 */
  Name: string | null;
  /** 筛选条件值 */
  Values: string[] | null;
}

/** 文本会话服务记录信息 */
declare interface IMCdrInfo {
  /** 服务记录ID */
  Id?: string;
  /** 服务时长秒数 */
  Duration?: number;
  /** 结束状态0 异常结束1 正常结束3 无座席在线17 座席放弃接听100 黑名单101 座席手动转接102 IVR阶段放弃108 用户超时自动结束109 用户主动结束 */
  EndStatus?: number;
  /** 用户昵称 */
  Nickname?: string;
  /** 服务类型 1为全媒体，2为文本客服 */
  Type?: number;
  /** 客服ID */
  StaffId?: string;
  /** 服务时间戳 */
  Timestamp?: number;
  /** 会话ID */
  SessionId?: string | null;
  /** 技能组ID */
  SkillGroupId?: string | null;
  /** 技能组名称 */
  SkillGroupName?: string | null;
  /** 满意度 */
  Satisfaction?: IMSatisfaction | null;
}

/** IM满意度 */
declare interface IMSatisfaction {
  /** 满意度值 */
  Id: number | null;
  /** 满意度标签 */
  Label: string | null;
}

/** ivr 按键信息 */
declare interface IVRKeyPressedElement {
  /** 按键 */
  Key: string | null;
  /** 按键关联的标签 */
  Label: string | null;
}

/** 单条消息 */
declare interface Message {
  /** 消息类型 */
  Type: string;
  /** 消息内容 */
  Content: string;
}

/** 聊天消息 */
declare interface MessageBody {
  /** 消息时间戳 */
  Timestamp: number;
  /** 发消息的用户ID */
  From: string;
  /** 消息列表 */
  Messages: Message[];
}

/** 号码信息 */
declare interface NumberInfo {
  /** 号码 */
  Number?: string;
  /** 绑定的外呼技能组 */
  CallOutSkillGroupIds?: number[];
  /** 号码状态，1-正常，2-欠费停用，4-管理员停用，5-违规停用 */
  State?: number;
}

/** PSTN 会话类型。 */
declare interface PSTNSession {
  /** 会话 ID */
  SessionID?: string;
  /** 会话临时房间 ID */
  RoomID?: string;
  /** 主叫 */
  Caller?: string;
  /** 被叫 */
  Callee?: string;
  /** 开始时间，Unix 时间戳 */
  StartTimestamp?: number;
  /** 振铃时间，Unix 时间戳 */
  RingTimestamp?: number;
  /** 接听时间，Unix 时间戳 */
  AcceptTimestamp?: number;
  /** 座席邮箱 */
  StaffEmail?: string;
  /** 座席工号 */
  StaffNumber?: string;
  /** 会话状态ringing 振铃中seatJoining 等待座席接听inProgress 进行中finished 已完成 */
  SessionStatus?: string;
  /** 会话呼叫方向， 0 呼入 | 1 - 呼出 */
  Direction?: number;
  /** 转外线使用的号码（转外线主叫） */
  OutBoundCaller?: string;
  /** 转外线被叫 */
  OutBoundCallee?: string;
  /** 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空 */
  ProtectedCaller?: string;
  /** 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空 */
  ProtectedCallee?: string;
}

/** PSTN 会话信息 */
declare interface PSTNSessionInfo {
  /** 会话 ID */
  SessionID?: string;
  /** 会话临时房间 ID */
  RoomID?: string;
  /** 主叫 */
  Caller?: string;
  /** 被叫 */
  Callee?: string;
  /** 开始时间，Unix 时间戳 */
  StartTimestamp?: string;
  /** 接听时间，Unix 时间戳 */
  AcceptTimestamp?: string;
  /** 座席邮箱 */
  StaffEmail?: string;
  /** 座席工号 */
  StaffNumber?: string;
  /** 座席状态 inProgress 进行中 */
  SessionStatus?: string;
  /** 会话呼叫方向， 0 呼入 | 1 - 呼出 */
  Direction?: number;
  /** 振铃时间，Unix 时间戳 */
  RingTimestamp?: number;
  /** 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空 */
  ProtectedCaller?: string;
  /** 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空 */
  ProtectedCallee?: string;
}

/** 套餐包购买信息 */
declare interface PackageBuyInfo {
  /** 套餐包Id */
  PackageId: string;
  /** 套餐包类型，0-外呼套餐包|1-400呼入套餐包 */
  Type: number;
  /** 套餐包总量 */
  CapacitySize: number;
  /** 套餐包剩余量 */
  CapacityRemain: number;
  /** 购买时间戳 */
  BuyTime: number;
  /** 截止时间戳 */
  EndTime: number;
}

/** 号码购买信息 */
declare interface PhoneNumBuyInfo {
  /** 电话号码 */
  PhoneNum: string;
  /** 号码类型，0-固话|1-虚商号码|2-运营商号码|3-400号码 */
  Type: number;
  /** 号码呼叫类型，1-呼入|2-呼出|3-呼入呼出 */
  CallType: number;
  /** 购买时间戳 */
  BuyTime: number;
  /** 截止时间戳 */
  EndTime: number;
  /** 号码状态，1正常|2欠费停用|4管理员停用|5违规停用 */
  State: number;
}

/** 应用购买信息 */
declare interface SdkAppIdBuyInfo {
  /** 应用ID */
  SdkAppId?: number;
  /** 应用名称 */
  Name?: string;
  /** 座席购买数（还在有效期内） */
  StaffBuyNum?: number;
  /** 座席购买列表 （还在有效期内） */
  StaffBuyList?: StaffBuyInfo[];
  /** 号码购买列表 */
  PhoneNumBuyList?: PhoneNumBuyInfo[];
  /** 办公电话购买数（还在有效期内） */
  SipBuyNum?: number | null;
}

/** 座席用户信息 */
declare interface SeatUserInfo {
  /** 座席名称 */
  Name: string;
  /** 座席邮箱 */
  Mail: string;
  /** 工号 */
  StaffNumber: string | null;
  /** 座席电话号码（带0086前缀） */
  Phone?: string;
  /** 座席昵称 */
  Nick?: string;
  /** 用户ID */
  UserId?: string;
  /** 座席关联的技能组列表 */
  SkillGroupNameList?: string[] | null;
  /** 1:管理员2:质检员3:普通座席else:自定义角色ID */
  Role?: number | null;
}

/** 参与者信息 */
declare interface ServeParticipant {
  /** 座席邮箱 */
  Mail?: string | null;
  /** 座席电话 */
  Phone?: string | null;
  /** 振铃时间戳，Unix 秒级时间戳 */
  RingTimestamp?: number | null;
  /** 接听时间戳，Unix 秒级时间戳 */
  AcceptTimestamp?: number | null;
  /** 结束时间戳，Unix 秒级时间戳 */
  EndedTimestamp?: number | null;
  /** 录音 ID，能够索引到座席侧的录音 */
  RecordId?: string | null;
  /** 参与者类型，"staffSeat", "outboundSeat", "staffPhoneSeat" */
  Type?: string | null;
  /** 转接来源座席信息 */
  TransferFrom?: string | null;
  /** 转接来源参与者类型，取值与 Type 一致 */
  TransferFromType?: string | null;
  /** 转接去向座席信息 */
  TransferTo?: string | null;
  /** 转接去向参与者类型，取值与 Type 一致 */
  TransferToType?: string | null;
  /** 技能组 ID */
  SkillGroupId?: number | null;
  /** 结束状态 */
  EndStatusString?: string | null;
  /** 录音 URL */
  RecordURL?: string | null;
  /** 参与者序号，从 0 开始 */
  Sequence?: number | null;
  /** 开始时间戳，Unix 秒级时间戳 */
  StartTimestamp?: number | null;
  /** 技能组名称 */
  SkillGroupName?: string | null;
  /** 录音转存第三方COS地址 */
  CustomRecordURL?: string | null;
}

/** 技能组信息 */
declare interface SkillGroupInfoItem {
  /** 技能组ID */
  SkillGroupId?: number;
  /** 技能组名称 */
  SkillGroupName?: string;
  /** （废弃）类型：IM、TEL、ALL（全媒体） */
  Type?: string;
  /** 会话分配策略 */
  RoutePolicy?: string | null;
  /** 会话分配是否优先上次服务座席 */
  UsingLastSeat?: number | null;
  /** 单客服最大并发数（电话类型默认1） */
  MaxConcurrency?: number | null;
  /** 最后修改时间 */
  LastModifyTimestamp?: number | null;
  /** 技能组类型0-电话，1-在线，3-音频，4-视频 */
  SkillGroupType?: number | null;
}

/** 技能组信息 */
declare interface SkillGroupItem {
  /** 技能组ID */
  SkillGroupId: number;
  /** 技能组名称 */
  SkillGroupName: string;
  /** 优先级 */
  Priority: number;
  /** 类型：IM、TEL、ALL（全媒体） */
  Type: string;
}

/** 座席购买信息 */
declare interface StaffBuyInfo {
  /** 购买座席数量 */
  Num?: number;
  /** 购买时间戳 */
  BuyTime?: number;
  /** 截止时间戳 */
  EndTime?: number;
  /** 购买办公电话数量 */
  SipNum?: number | null;
}

/** 带有技能组优先级的座席信息 */
declare interface StaffInfo {
  /** 座席名称 */
  Name?: string | null;
  /** 座席邮箱 */
  Mail?: string;
  /** 座席电话号码 */
  Phone?: string | null;
  /** 座席昵称 */
  Nick?: string | null;
  /** 座席工号 */
  StaffNumber?: string | null;
  /** 用户角色id */
  RoleId?: number;
  /** 所属技能组列表 */
  SkillGroupList?: SkillGroupItem[] | null;
  /** 最后修改时间 */
  LastModifyTimestamp?: number | null;
}

/** 座席绑定技能组列表 */
declare interface StaffSkillGroupList {
  /** 技能组ID */
  SkillGroupId: number;
  /** 座席在技能组中的优先级（1为最高，5最低，默认3） */
  Priority?: number;
}

/** 座席状态补充信息 */
declare interface StaffStatusExtra {
  /** im - 文本 | tel - 电话 | all - 全媒体 */
  Type?: string;
  /** in - 呼入 | out - 呼出 */
  Direct?: string;
}

/** 座席状态相关信息 */
declare interface StaffStatusMetrics {
  /** 座席邮箱 */
  Email?: string;
  /** 座席状态 free 示闲 | busy 忙碌 | rest 小休 | notReady 示忙 | afterCallWork 话后调整 | offline 离线 */
  Status?: string;
  /** 座席状态补充信息 */
  StatusExtra?: StaffStatusExtra;
  /** 当天在线总时长 */
  OnlineDuration?: number;
  /** 当天示闲总时长 */
  FreeDuration?: number;
  /** 当天忙碌总时长 */
  BusyDuration?: number;
  /** 当天示忙总时长 */
  NotReadyDuration?: number;
  /** 当天小休总时长 */
  RestDuration?: number;
  /** 当天话后调整总时长 */
  AfterCallWorkDuration?: number;
  /** 小休原因 */
  Reason?: string;
  /** 是否预约小休 */
  ReserveRest?: boolean;
  /** 是否预约示忙 */
  ReserveNotReady?: boolean;
  /** 手机接听模式： 0 - 关闭 | 1 - 仅离线 | 2- 始终 */
  UseMobileAccept?: number;
  /** 手机外呼开关 */
  UseMobileCallOut?: boolean;
  /** 最近一次上线时间戳 */
  LastOnlineTimestamp?: number | null;
  /** 最近一次状态时间戳 */
  LastStatusTimestamp?: number | null;
}

/** 电话话单信息 */
declare interface TelCdrInfo {
  /** 主叫号码 */
  Caller?: string;
  /** 被叫号码 */
  Callee?: string;
  /** 呼叫发起时间戳，Unix 时间戳 */
  Time?: number;
  /** 呼入呼出方向 0 呼入 1 呼出 */
  Direction?: number;
  /** 通话时长 */
  Duration?: number;
  /** 录音信息 */
  RecordURL?: string;
  /** 录音 ID */
  RecordId?: string | null;
  /** 座席信息 */
  SeatUser?: SeatUserInfo;
  /** EndStatus与EndStatusString一一对应，具体枚举如下：**场景 EndStatus	EndStatusString	状态说明**电话呼入&呼出	1 ok 正常结束电话呼入&呼出	0 error 系统错误电话呼入 102 ivrGiveUp IVR 期间用户放弃电话呼入 103 waitingGiveUp 会话排队期间用户放弃电话呼入 104 ringingGiveUp 会话振铃期间用户放弃电话呼入 105 noSeatOnline 无座席在线电话呼入 106 notWorkTime 非工作时间 电话呼入 107 ivrEnd IVR 后直接结束电话呼入 100 blackList 呼入黑名单 电话呼出 2 unconnected	未接通电话呼出 108 restrictedCallee	被叫因高风险受限电话呼出 109 tooManyRequest 超频电话呼出 110 restrictedArea 外呼盲区电话呼出 111 restrictedTime	外呼时间限制 电话呼出 201 unknown	未知状态电话呼出 202 notAnswer	未接听电话呼出 203 userReject	拒接挂断电话呼出 204 powerOff	关机电话呼出 205 numberNotExist	空号电话呼出 206 busy	通话中电话呼出 207 outOfCredit	欠费电话呼出 208 operatorError	运营商线路异常电话呼出 209 callerCancel	主叫取消电话呼出 210 notInService	不在服务区电话呼入&呼出	211 clientError 客户端错误 */
  EndStatus?: number;
  /** 技能组名称 */
  SkillGroup?: string;
  /** 主叫归属地 */
  CallerLocation?: string;
  /** IVR 阶段耗时 */
  IVRDuration?: number | null;
  /** 振铃时间戳，UNIX 秒级时间戳 */
  RingTimestamp?: number | null;
  /** 接听时间戳，UNIX 秒级时间戳 */
  AcceptTimestamp?: number | null;
  /** 结束时间戳，UNIX 秒级时间戳 */
  EndedTimestamp?: number | null;
  /** IVR 按键信息 ，e.g. ["1","2","3"] */
  IVRKeyPressed?: string[] | null;
  /** 挂机方 seat 座席 user 用户 system 系统 */
  HungUpSide?: string | null;
  /** 服务参与者列表 */
  ServeParticipants?: ServeParticipant[] | null;
  /** 技能组ID */
  SkillGroupId?: number | null;
  /** EndStatus与EndStatusString一一对应，具体枚举如下：**场景 EndStatus	EndStatusString	状态说明**电话呼入&呼出	1 ok 正常结束电话呼入&呼出	0 error 系统错误电话呼入 102 ivrGiveUp IVR 期间用户放弃电话呼入 103 waitingGiveUp 会话排队期间用户放弃电话呼入 104 ringingGiveUp 会话振铃期间用户放弃电话呼入 105 noSeatOnline 无座席在线电话呼入 106 notWorkTime 非工作时间 电话呼入 107 ivrEnd IVR 后直接结束电话呼入 100 blackList 呼入黑名单 电话呼出 2 unconnected	未接通电话呼出 108 restrictedCallee	被叫因高风险受限电话呼出 109 tooManyRequest 超频电话呼出 110 restrictedArea 外呼盲区电话呼出 111 restrictedTime	外呼时间限制 电话呼出 201 unknown	未知状态电话呼出 202 notAnswer	未接听电话呼出 203 userReject	拒接挂断电话呼出 204 powerOff	关机电话呼出 205 numberNotExist	空号电话呼出 206 busy	通话中电话呼出 207 outOfCredit	欠费电话呼出 208 operatorError	运营商线路异常电话呼出 209 callerCancel	主叫取消电话呼出 210 notInService	不在服务区电话呼入&呼出	211 clientError 客户端错误 */
  EndStatusString?: string | null;
  /** 会话开始时间戳，UNIX 秒级时间戳 */
  StartTimestamp?: number | null;
  /** 进入排队时间，Unix 秒级时间戳 */
  QueuedTimestamp?: number | null;
  /** 后置IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]） */
  PostIVRKeyPressed?: IVRKeyPressedElement[] | null;
  /** 排队技能组Id */
  QueuedSkillGroupId?: number | null;
  /** 会话 ID */
  SessionId?: string | null;
  /** 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空 */
  ProtectedCaller?: string | null;
  /** 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空 */
  ProtectedCallee?: string | null;
  /** 客户自定义数据（User-to-User Interface） */
  Uui?: string | null;
  /** 客户自定义数据（User-to-User Interface） */
  UUI?: string | null;
  /** IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]） */
  IVRKeyPressedEx?: IVRKeyPressedElement[] | null;
  /** 获取录音ASR文本信息地址 */
  AsrUrl?: string | null;
  /** 录音转存第三方COS地址 */
  CustomRecordURL?: string | null;
  /** 备注 */
  Remark?: string | null;
  /** 排队技能组名称 */
  QueuedSkillGroupName?: string | null;
  /** 通话中语音留言录音URL */
  VoicemailRecordURL?: string[] | null;
  /** 通话中语音留言ASR文本信息地址 */
  VoicemailAsrURL?: string[] | null;
}

/** 上传音频文件信息 */
declare interface UploadAudioInfo {
  /** 文件别名（可重复） */
  CustomFileName: string;
  /** 音频文件链接。(支持mp3和wav格式，文件不超过5MB) */
  AudioUrl: string;
}

/** 上传音频文件失败信息 */
declare interface UploadIvrAudioFailedInfo {
  /** 文件名 */
  FileName?: string | null;
  /** 失败原因 */
  FailedMsg?: string | null;
}

/** 变量 */
declare interface Variable {
  /** 变量名 */
  Key: string;
  /** 变量值 */
  Value: string;
}

declare interface AbortPredictiveDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务 ID */
  CampaignId: number;
}

declare interface AbortPredictiveDialingCampaignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindNumberCallOutSkillGroupRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 待绑定的号码 */
  Number: string;
  /** 待绑定的技能组Id列表 */
  SkillGroupIds: number[];
}

declare interface BindNumberCallOutSkillGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindStaffSkillGroupListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 座席邮箱 */
  StaffEmail: string;
  /** 绑定技能组列表 */
  SkillGroupList?: number[];
  /** 绑定技能组列表(必填) */
  StaffSkillGroupList?: StaffSkillGroupList[];
}

declare interface BindStaffSkillGroupListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAdminURLRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 管理员账号 */
  SeatUserId: string;
}

declare interface CreateAdminURLResponse {
  /** 登录链接 */
  URL?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAutoCalloutTaskRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务起始时间戳，Unix 秒级时间戳 */
  NotBefore: number;
  /** 被叫号码列表 */
  Callees: string[];
  /** 主叫号码列表 */
  Callers: string[];
  /** 呼叫使用的Ivr */
  IvrId: number;
  /** 任务名 */
  Name?: string;
  /** 任务描述 */
  Description?: string;
  /** 任务停止时间戳，Unix 秒级时间戳 */
  NotAfter?: number;
  /** 最大尝试次数 */
  Tries?: number;
  /** 自定义变量（仅高级版支持） */
  Variables?: Variable[];
  /** UUI */
  UUI?: string;
  /** 被叫属性 */
  CalleeAttributes?: CalleeAttribute[];
}

declare interface CreateAutoCalloutTaskResponse {
  /** 任务Id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCCCSkillGroupRequest {
  /** 应用 ID（必填） */
  SdkAppId: number;
  /** 技能组名称 */
  SkillGroupName: string;
  /** 技能组类型0-电话，1-在线，3-音频，4-视频 */
  SkillGroupType: number;
  /** 技能组接待人数上限（该技能组中1个座席可接待的人数上限）默认为1。1、若技能组类型为在线，则接待上限可设置为1及以上2、若技能组类型为电话、音频、视频，则接待上线必须只能为1 */
  MaxConcurrency?: number;
}

declare interface CreateCCCSkillGroupResponse {
  /** 技能组ID */
  SkillGroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCallOutSessionRequest {
  /** 应用 ID */
  SdkAppId: number;
  /** 客服用户 ID，一般为客服邮箱 */
  UserId: string;
  /** 被叫号码，须带 0086 前缀 */
  Callee: string;
  /** 主叫号码（废弃，使用Callers），须带 0086 前缀 */
  Caller?: string;
  /** 指定主叫号码列表，如果前面的号码失败了会自动换成下一个号码，须带 0086 前缀 */
  Callers?: string[];
  /** 是否强制使用手机外呼，当前只支持 true，若为 true 请确保已配置白名单 */
  IsForceUseMobile?: boolean;
  /** 自定义数据，长度限制 1024 字节 */
  Uui?: string;
  /** 自定义数据，长度限制 1024 字节 */
  UUI?: string;
}

declare interface CreateCallOutSessionResponse {
  /** 新创建的会话 ID */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCarrierPrivilegeNumberApplicantRequest {
  /** SdkAppId */
  SdkAppId: number;
  /** 主叫号码，必须为实例中存在的号码，格式为0086xxxx（暂时只支持国内号码） */
  Callers: string[];
  /** 被叫号码，必须为实例中坐席绑定的手机号码，格式为0086xxxx（暂时只支持国内号码） */
  Callees: string[];
  /** 描述 */
  Description?: string;
}

declare interface CreateCarrierPrivilegeNumberApplicantResponse {
  /** 申请单Id */
  ApplicantId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCompanyApplyRequest {
  /** 企业资质信息 */
  CompanyInfo: CompanyApplyInfo;
}

declare interface CreateCompanyApplyResponse {
  /** 申请单ID */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExtensionRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 分机号 */
  ExtensionId: string;
  /** 分机名称 */
  ExtensionName: string;
  /** 绑定的技能组列表 */
  SkillGroupIds?: number[];
  /** 绑定的坐席邮箱 */
  Relation?: string;
}

declare interface CreateExtensionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePredictiveDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务名称 */
  Name: string;
  /** 被叫列表，支持 E.164 或不带国家码形式的号码 */
  Callees: string[];
  /** 主叫列表，使用管理端展示的号码格式 */
  Callers: string[];
  /** 被叫呼叫顺序 0 随机 1 顺序 */
  CallOrder: number;
  /** 使用的座席技能组 ID */
  SkillGroupId: number;
  /** 相同应用内多个任务运行优先级，从高到底 1 - 5 */
  Priority: number;
  /** 预期呼损率，百分比，5 - 50 */
  ExpectedAbandonRate: number;
  /** 呼叫重试间隔时间，单位秒，60 - 86400 */
  RetryInterval: number;
  /** 任务启动时间，Unix 时间戳，到此时间后会自动启动任务 */
  StartTime: number;
  /** 任务结束时间，Unix 时间戳，到此时间后会自动终止任务 */
  EndTime: number;
  /** 指定的 IVR Id */
  IVRId?: number;
  /** 呼叫重试次数，0 - 2 */
  RetryTimes?: number;
}

declare interface CreatePredictiveDialingCampaignResponse {
  /** 生成的任务 ID */
  CampaignId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSDKLoginTokenRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 座席账号。 */
  SeatUserId: string;
  /** 生成的token是否一次性校验 */
  OnlyOnce?: boolean;
}

declare interface CreateSDKLoginTokenResponse {
  /** SDK 登录 Token。 */
  Token?: string;
  /** 过期时间戳，Unix 时间戳。 */
  ExpiredTime?: number;
  /** SDK 加载路径会随着 SDK 的发布而变动。 */
  SdkURL?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStaffRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 客服信息，个数不超过 10 */
  Staffs: SeatUserInfo[];
  /** 是否发送密码邮件，默认true */
  SendPassword?: boolean;
}

declare interface CreateStaffResponse {
  /** 错误坐席列表及错误信息 */
  ErrorStaffList?: ErrStaffItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserSigRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 用户 ID，该值必须与 ClientData 字段中 Uid 的值一致 */
  Uid: string;
  /** 有效期，单位秒，不超过 1 小时 */
  ExpiredTime: number;
  /** 用户签名数据，必填字段，为标准 JSON 格式 */
  ClientData?: string;
}

declare interface CreateUserSigResponse {
  /** 签名结果 */
  UserSig?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteExtensionRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 分机号 */
  ExtensionId: string;
}

declare interface DeleteExtensionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePredictiveDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务 ID */
  CampaignId: number;
}

declare interface DeletePredictiveDialingCampaignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteStaffRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 待删除客服邮箱列表 */
  StaffList: string[];
}

declare interface DeleteStaffResponse {
  /** 无法删除的状态为在线的客服列表 */
  OnlineStaffList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActiveCarrierPrivilegeNumberRequest {
  /** 实例Id */
  SdkAppId: number;
  /** 默认0 */
  PageNumber?: number;
  /** 默认10，最大100 */
  PageSize?: number;
  /** 筛选条件 Name支持PhoneNumber(按号码模糊查找) */
  Filters?: Filter[];
}

declare interface DescribeActiveCarrierPrivilegeNumberResponse {
  /** 总数量 */
  TotalCount?: number;
  /** 生效列表 */
  ActiveCarrierPrivilegeNumbers?: ActiveCarrierPrivilegeNumber[];
  /** 待审核单号 */
  PendingApplicantIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoCalloutTaskRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务Id */
  TaskId: number;
}

declare interface DescribeAutoCalloutTaskResponse {
  /** 任务名 */
  Name?: string;
  /** 任务描述 */
  Description?: string;
  /** 任务起始时间戳 */
  NotBefore?: number;
  /** 任务结束时间戳 */
  NotAfter?: number | null;
  /** 主叫列表 */
  Callers?: string[];
  /** 被叫信息列表 */
  Callees?: AutoCalloutTaskCalleeInfo[];
  /** 任务使用的IvrId */
  IvrId?: number;
  /** 任务状态 0初始 1运行中 2已完成 3结束中 4已终止 */
  State?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoCalloutTasksRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页大小 */
  PageSize: number;
  /** 页数 */
  PageNumber: number;
}

declare interface DescribeAutoCalloutTasksResponse {
  /** 总数 */
  TotalCount?: number;
  /** 任务列表 */
  Tasks?: AutoCalloutTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCCBuyInfoListRequest {
  /** 应用ID列表，不传时查询所有应用 */
  SdkAppIds?: number[];
}

declare interface DescribeCCCBuyInfoListResponse {
  /** 应用总数 */
  TotalCount?: number;
  /** 应用购买信息列表 */
  SdkAppIdBuyList?: SdkAppIdBuyInfo[];
  /** 套餐包购买信息列表 */
  PackageBuyList?: PackageBuyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCallInMetricsRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 是否返回技能组维度信息，默认“是” */
  EnabledSkillGroup?: boolean;
  /** 是否返回线路维度信息，默认“否” */
  EnabledNumber?: boolean;
  /** 筛选技能组列表 */
  GroupIdList?: number[];
}

declare interface DescribeCallInMetricsResponse {
  /** 时间戳 */
  Timestamp?: number;
  /** 总体指标 */
  TotalMetrics?: CallInMetrics;
  /** 线路维度指标 */
  NumberMetrics?: CallInNumberMetrics[] | null;
  /** 技能组维度指标 */
  SkillGroupMetrics?: CallInSkillGroupMetrics[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCarrierPrivilegeNumberApplicantsRequest {
  /** 实例Id */
  SdkAppId: number;
  /** 默认0，从0开始 */
  PageNumber?: number;
  /** 默认10，最大100 */
  PageSize?: number;
  /** 筛选条件,Name支持ApplicantId,PhoneNumber(按号码模糊查找) */
  Filters?: Filter[];
}

declare interface DescribeCarrierPrivilegeNumberApplicantsResponse {
  /** 筛选出的总申请单数量 */
  TotalCount?: number;
  /** 申请单列表 */
  Applicants?: CarrierPrivilegeNumberApplicant[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChatMessagesRequest {
  /** 实例 ID（废弃） */
  InstanceId?: number;
  /** 应用 ID，可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId?: number;
  /** 服务记录ID（废弃） */
  CdrId?: string;
  /** 返回记录条数，最大为100 默认20 */
  Limit?: number;
  /** 返回记录偏移，默认为 0 */
  Offset?: number;
  /** 1为从早到晚，2为从晚到早，默认为2 */
  Order?: number;
  /** 服务记录 SessionID */
  SessionId?: string;
}

declare interface DescribeChatMessagesResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 消息列表 */
  Messages?: MessageBody[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompanyListRequest {
  /** 分页尺寸，上限 100 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
  /** 公司名称 */
  CompanyName?: string[];
  /** 审核状态，1-待审核，2-审核通过，3-驳回 */
  State?: number[];
  /** 申请ID */
  ApplyID?: number[];
}

declare interface DescribeCompanyListResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 企业资质审核信息 */
  CompanyInfo?: CompanyStateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtensionRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 分机号 */
  ExtensionId: string;
}

declare interface DescribeExtensionResponse {
  /** 分机号 */
  ExtensionId?: string;
  /** 域名 */
  ExtensionDomain?: string;
  /** 注册密码 */
  Password?: string;
  /** 代理服务器地址 */
  OutboundProxy?: string;
  /** 传输协议 */
  Transport?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtensionsRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 分页页号（从0开始） */
  PageNumber: number;
  /** 筛选分机号列表 */
  ExtensionIds?: string[];
  /** 分页大小 */
  PageSize?: number;
  /** 模糊查询字段（模糊查询分机号、分机名称、坐席邮箱、坐席名称） */
  FuzzingKeyWord?: string;
  /** 是否需要返回话机当前状态 */
  IsNeedStatus?: boolean;
}

declare interface DescribeExtensionsResponse {
  /** 查询总数 */
  Total?: number;
  /** 话机信息列表 */
  ExtensionList?: ExtensionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIMCdrListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 起始时间（必填），Unix 秒级时间戳 */
  StartTimestamp: number;
  /** 结束时间（必填），Unix 秒级时间戳 */
  EndTimestamp: number;
  /** 返回记录条数，最大为100默认20 */
  Limit?: number;
  /** 返回记录偏移，默认为 0 */
  Offset?: number;
  /** 1为全媒体，2为文本客服，不填则查询全部 */
  Type?: number;
}

declare interface DescribeIMCdrListResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 服务记录列表 */
  IMCdrList?: IMCdrInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIMCdrsRequest {
  /** 起始时间（必填），Unix 秒级时间戳 */
  StartTimestamp: number;
  /** 结束时间（必填），Unix 秒级时间戳 */
  EndTimestamp: number;
  /** 实例 ID（废弃） */
  InstanceId?: number;
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId?: number;
  /** 返回记录条数，最大为100默认20 */
  Limit?: number;
  /** 返回记录偏移，默认为 0 */
  Offset?: number;
  /** 1为全媒体，2为文本客服，不填则查询全部 */
  Type?: number;
}

declare interface DescribeIMCdrsResponse {
  /** 总记录数 */
  TotalCount?: number;
  /** 服务记录列表 */
  IMCdrs?: IMCdrInfo[];
  /** 服务记录列表 */
  IMCdrList?: IMCdrInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIvrAudioListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，上限 50 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
  /** 文件别名 */
  CustomFileName?: string[];
  /** 文件名 */
  AudioFileName?: string[];
  /** 文件ID */
  FileId?: number[];
}

declare interface DescribeIvrAudioListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 文件信息 */
  FileInfo?: AudioFileInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNumbersRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 页数，从0开始 */
  PageNumber?: number;
  /** 分页大小，默认20 */
  PageSize?: number;
}

declare interface DescribeNumbersResponse {
  /** 总数量 */
  TotalCount?: number;
  /** 号码列表 */
  Numbers?: NumberInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePSTNActiveSessionListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 数据偏移 */
  Offset: number;
  /** 返回的数据条数，最大 25 */
  Limit: number;
}

declare interface DescribePSTNActiveSessionListResponse {
  /** 列表总条数 */
  Total?: number;
  /** 列表内容 */
  Sessions?: PSTNSessionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePredictiveDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务 ID */
  CampaignId: number;
}

declare interface DescribePredictiveDialingCampaignResponse {
  /** 任务 ID */
  CampaignId?: number;
  /** 任务名称 */
  Name?: string;
  /** 被叫呼叫顺序 0 随机 1 顺序 */
  CallOrder?: number;
  /** 使用的座席技能组 ID */
  SkillGroupId?: number;
  /** 指定的 IVR ID */
  IVRId?: number;
  /** 相同应用内多个任务运行优先级，从高到底 1 - 5 */
  Priority?: number;
  /** 预期呼损率，百分比，5 - 50 */
  ExpectedAbandonRate?: number;
  /** 呼叫重试次数，0 - 2 */
  RetryTimes?: number;
  /** 呼叫重试间隔时间，单位秒，60 - 86400 */
  RetryInterval?: number;
  /** 任务启动时间，Unix 时间戳，到此时间后会自动启动任务 */
  StartTime?: number;
  /** 任务结束时间，Unix 时间戳，到此时间后会自动终止任务 */
  EndTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePredictiveDialingCampaignsRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，最大为 100 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
  /** 查询任务列表名称关键字 */
  Name?: string;
  /** 查询任务列表技能组 ID */
  SkillGroupId?: number;
}

declare interface DescribePredictiveDialingCampaignsResponse {
  /** 数据总量 */
  TotalCount?: number | null;
  /** 数据 */
  CampaignList?: DescribePredictiveDialingCampaignsElement[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePredictiveDialingSessionsRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 生成的任务 ID */
  CampaignId: number;
  /** 分页尺寸，最大为 1000 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
}

declare interface DescribePredictiveDialingSessionsResponse {
  /** 数据总量 */
  TotalCount?: number;
  /** 呼叫的 session id 列表，通过 https://cloud.tencent.com/document/product/679/47714 可以批量获取呼叫详细话单 */
  SessionList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProtectedTelCdrRequest {
  /** 起始时间戳，Unix 秒级时间戳 */
  StartTimeStamp: number;
  /** 结束时间戳，Unix 秒级时间戳 */
  EndTimeStamp: number;
  /** 应用 ID，可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，上限 100 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
}

declare interface DescribeProtectedTelCdrResponse {
  /** 话单记录总数 */
  TotalCount?: number;
  /** 话单记录 */
  TelCdrs?: TelCdrInfo[];
  /** 话单记录 */
  TelCdrList?: TelCdrInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSkillGroupInfoListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，上限 100 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
  /** 技能组ID，查询单个技能组时使用 */
  SkillGroupId?: number;
  /** 查询修改时间大于等于ModifiedTime的技能组时使用 */
  ModifiedTime?: number;
  /** 技能组名称 */
  SkillGroupName?: string;
}

declare interface DescribeSkillGroupInfoListResponse {
  /** 技能组总数 */
  TotalCount?: number;
  /** 技能组信息列表 */
  SkillGroupList?: SkillGroupInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStaffInfoListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 分页尺寸，上限 9999 */
  PageSize: number;
  /** 分页页码，从 0 开始 */
  PageNumber: number;
  /** 坐席账号，查询单个坐席时使用 */
  StaffMail?: string;
  /** 查询修改时间大于等于ModifiedTime的坐席时使用 */
  ModifiedTime?: number;
  /** 技能组ID */
  SkillGroupId?: number;
}

declare interface DescribeStaffInfoListResponse {
  /** 坐席用户总数 */
  TotalCount?: number;
  /** 坐席用户信息列表 */
  StaffList?: StaffInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStaffStatusMetricsRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 筛选坐席列表，默认不传返回全部坐席信息 */
  StaffList?: string[];
  /** 筛选技能组ID列表 */
  GroupIdList?: number[];
  /** 筛选坐席状态列表 */
  StatusList?: string[];
}

declare interface DescribeStaffStatusMetricsResponse {
  /** 坐席状态实时信息 */
  Metrics?: StaffStatusMetrics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTelCallInfoRequest {
  /** 起始时间戳，Unix 时间戳(查询维度仅支持天，例如查询5月1日应该传startTime:"2023-05-01 00:00:00","endTime":"2023-05-01 23:59:59"的时间戳,查5月1日和5月2日的应该传startTime:"2023-05-01 00:00:00","endTime":"2023-05-02 23:59:59"的时间戳) */
  StartTimeStamp: number;
  /** 结束时间戳，Unix 时间戳，查询时间范围最大为90天(查询维度仅支持天，例如查询5月1日应该传startTime:"2023-05-01 00:00:00","endTime":"2023-05-01 23:59:59"的时间戳,查5月1日和5月2日的应该传startTime:"2023-05-01 00:00:00","endTime":"2023-05-02 23:59:59"的时间戳) */
  EndTimeStamp: number;
  /** 应用ID列表，多个ID时，返回值为多个ID使用总和 */
  SdkAppIdList: number[];
}

declare interface DescribeTelCallInfoResponse {
  /** 呼出套餐包消耗分钟数 */
  TelCallOutCount?: number;
  /** 呼入套餐包消耗分钟数 */
  TelCallInCount?: number;
  /** 坐席使用统计个数 */
  SeatUsedCount?: number;
  /** 音频套餐包消耗分钟数 */
  VoipCallInCount?: number;
  /** 音频套餐包消耗分钟数 */
  VOIPCallInCount?: number;
  /** 离线语音转文字套餐包消耗分钟数 */
  AsrOfflineCount?: number;
  /** 实时语音转文字套餐包消耗分钟数 */
  AsrRealtimeCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTelCdrRequest {
  /** 起始时间戳，Unix 秒级时间戳 */
  StartTimeStamp: number;
  /** 结束时间戳，Unix 秒级时间戳 */
  EndTimeStamp: number;
  /** 实例 ID（废弃） */
  InstanceId?: number;
  /** 返回数据条数，上限（废弃） */
  Limit?: number;
  /** 偏移（废弃） */
  Offset?: number;
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId?: number;
  /** 分页尺寸（必填），上限 100 */
  PageSize?: number;
  /** 分页页码（必填），从 0 开始 */
  PageNumber?: number;
  /** 按手机号筛选 */
  Phones?: string[];
  /** 按SessionId筛选 */
  SessionIds?: string[];
}

declare interface DescribeTelCdrResponse {
  /** 话单记录总数 */
  TotalCount?: number;
  /** 话单记录 */
  TelCdrs?: TelCdrInfo[];
  /** 话单记录 */
  TelCdrList?: TelCdrInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTelSessionRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 会话 ID */
  SessionId: string;
}

declare interface DescribeTelSessionResponse {
  /** 会话信息 */
  Session?: PSTNSession;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableCCCPhoneNumberRequest {
  /** 号码列表，0086开头 */
  PhoneNumbers: string[];
  /** 停用开关，0启用 1停用 */
  Disabled: number;
  /** TCCC 实例应用 ID */
  SdkAppId?: number;
}

declare interface DisableCCCPhoneNumberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface HangUpCallRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 会话ID */
  SessionId: string;
}

declare interface HangUpCallResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCompanyApplyRequest {
  /** 申请单ID(只能修改状态为“驳回”或者“待审核”的申请单) */
  ApplyId: number;
  /** 企业资质信息 */
  CompanyInfo: CompanyApplyInfo;
}

declare interface ModifyCompanyApplyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExtensionRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 分机号 */
  ExtensionId: string;
  /** 分机名称 */
  ExtensionName?: string;
  /** 所属技能组列表 */
  SkillGroupIds?: number[];
  /** 绑定坐席邮箱账号 */
  Relation?: string;
}

declare interface ModifyExtensionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStaffPasswordRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 座席邮箱 */
  Email: string;
  /** 设置的密码 */
  Password: string;
}

declare interface ModifyStaffPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStaffRequest {
  /** 应用ID */
  SdkAppId: number;
  /** 座席账户 */
  Email: string;
  /** 座席名称 */
  Name?: string;
  /** 座席手机号（带0086前缀,示例：008618011111111） */
  Phone?: string;
  /** 座席昵称 */
  Nick?: string;
  /** 绑定技能组ID列表 */
  SkillGroupIds?: number[];
  /** 是否开启手机外呼开关 */
  UseMobileCallOut?: boolean;
  /** 手机接听模式 0 - 关闭 | 1 - 仅离线 | 2 - 始终 */
  UseMobileAccept?: number;
}

declare interface ModifyStaffResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PausePredictiveDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务 ID */
  CampaignId: number;
}

declare interface PausePredictiveDialingCampaignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetExtensionPasswordRequest {
  /** TCCC 实例应用 ID */
  SdkAppId: number;
  /** 分机号 */
  ExtensionId: string;
}

declare interface ResetExtensionPasswordResponse {
  /** 重置后密码 */
  Password?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumePredictiveDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务 ID */
  CampaignId: number;
}

declare interface ResumePredictiveDialingCampaignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopAutoCalloutTaskRequest {
  /** 呼叫中心实例Id */
  SdkAppId: number;
  /** 任务Id */
  TaskId: number;
}

declare interface StopAutoCalloutTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindNumberCallOutSkillGroupRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 待解绑的号码 */
  Number: string;
  /** 待解绑的技能组Id列表 */
  SkillGroupIds: number[];
}

declare interface UnbindNumberCallOutSkillGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindStaffSkillGroupListRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 客服邮箱 */
  StaffEmail: string;
  /** 解绑技能组列表 */
  SkillGroupList: number[];
}

declare interface UnbindStaffSkillGroupListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCCCSkillGroupRequest {
  /** 应用 ID（必填） */
  SdkAppId: number;
  /** 技能组ID */
  SkillGroupID: number;
  /** 修改后的技能组名字 */
  SkillGroupName?: string;
  /** 修改后的最大并发数,同振最大为2 */
  MaxConcurrency?: number;
  /** true同振，false顺振 */
  RingAll?: boolean;
}

declare interface UpdateCCCSkillGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePredictiveDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 生成的任务 ID */
  CampaignId: number;
  /** 任务名称 */
  Name: string;
  /** 被叫列表，支持 E.164 或不带国家码形式的号码 */
  Callees: string[];
  /** 主叫列表，使用管理端展示的号码格式 */
  Callers: string[];
  /** 被叫呼叫顺序 0 随机 1 顺序 */
  CallOrder: number;
  /** 使用的座席技能组 ID */
  SkillGroupId: number;
  /** 相同应用内多个任务运行优先级，从高到底 1 - 5 */
  Priority: number;
  /** 预期呼损率，百分比，5 - 50 */
  ExpectedAbandonRate: number;
  /** 呼叫重试间隔时间，单位秒，60 - 86400 */
  RetryInterval: number;
  /** 任务启动时间，Unix 时间戳，到此时间后会自动启动任务 */
  StartTime: number;
  /** 任务结束时间，Unix 时间戳，到此时间后会自动终止任务 */
  EndTime: number;
  /** 指定的 IVR ID */
  IVRId?: number;
  /** 呼叫重试次数，0 - 2 */
  RetryTimes?: number;
}

declare interface UpdatePredictiveDialingCampaignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadIvrAudioRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 音频文件列表 */
  AudioList: UploadAudioInfo[];
}

declare interface UploadIvrAudioResponse {
  /** 上传失败的文件列表 */
  FailedFileList?: UploadIvrAudioFailedInfo[] | null;
  /** 上传成功文件列表 */
  SuccessFileList?: AudioFileInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ccc 云联络中心} */
declare interface Ccc {
  (): Versions;
  /** 停止预测式外呼任务 {@link AbortPredictiveDialingCampaignRequest} {@link AbortPredictiveDialingCampaignResponse} */
  AbortPredictiveDialingCampaign(data: AbortPredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<AbortPredictiveDialingCampaignResponse>;
  /** 绑定号码外呼技能组 {@link BindNumberCallOutSkillGroupRequest} {@link BindNumberCallOutSkillGroupResponse} */
  BindNumberCallOutSkillGroup(data: BindNumberCallOutSkillGroupRequest, config?: AxiosRequestConfig): AxiosPromise<BindNumberCallOutSkillGroupResponse>;
  /** 绑定座席所属技能组 {@link BindStaffSkillGroupListRequest} {@link BindStaffSkillGroupListResponse} */
  BindStaffSkillGroupList(data: BindStaffSkillGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<BindStaffSkillGroupListResponse>;
  /** 创建管理端访问链接 {@link CreateAdminURLRequest} {@link CreateAdminURLResponse} */
  CreateAdminURL(data: CreateAdminURLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAdminURLResponse>;
  /** 创建自动外呼任务 {@link CreateAutoCalloutTaskRequest} {@link CreateAutoCalloutTaskResponse} */
  CreateAutoCalloutTask(data: CreateAutoCalloutTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoCalloutTaskResponse>;
  /** 新建技能组 {@link CreateCCCSkillGroupRequest} {@link CreateCCCSkillGroupResponse} */
  CreateCCCSkillGroup(data: CreateCCCSkillGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCCCSkillGroupResponse>;
  /** 创建外呼会话（当前仅支持双呼） {@link CreateCallOutSessionRequest} {@link CreateCallOutSessionResponse} */
  CreateCallOutSession(data: CreateCallOutSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCallOutSessionResponse>;
  /** 申请运营商白名单号码 {@link CreateCarrierPrivilegeNumberApplicantRequest} {@link CreateCarrierPrivilegeNumberApplicantResponse} */
  CreateCarrierPrivilegeNumberApplicant(data: CreateCarrierPrivilegeNumberApplicantRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCarrierPrivilegeNumberApplicantResponse>;
  /** 创建公司资质申请 {@link CreateCompanyApplyRequest} {@link CreateCompanyApplyResponse} */
  CreateCompanyApply(data: CreateCompanyApplyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCompanyApplyResponse>;
  /** 创建话机账号 {@link CreateExtensionRequest} {@link CreateExtensionResponse} */
  CreateExtension(data: CreateExtensionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExtensionResponse>;
  /** 创建预测式外呼任务 {@link CreatePredictiveDialingCampaignRequest} {@link CreatePredictiveDialingCampaignResponse} */
  CreatePredictiveDialingCampaign(data: CreatePredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePredictiveDialingCampaignResponse>;
  /** 创建 SDK 登录 Token {@link CreateSDKLoginTokenRequest} {@link CreateSDKLoginTokenResponse} */
  CreateSDKLoginToken(data: CreateSDKLoginTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSDKLoginTokenResponse>;
  /** 创建客服账号 {@link CreateStaffRequest} {@link CreateStaffResponse} */
  CreateStaff(data: CreateStaffRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStaffResponse>;
  /** 创建用户数据签名 {@link CreateUserSigRequest} {@link CreateUserSigResponse} */
  CreateUserSig(data: CreateUserSigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserSigResponse>;
  /** 删除话机账号 {@link DeleteExtensionRequest} {@link DeleteExtensionResponse} */
  DeleteExtension(data: DeleteExtensionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteExtensionResponse>;
  /** 删除预测式外呼任务 {@link DeletePredictiveDialingCampaignRequest} {@link DeletePredictiveDialingCampaignResponse} */
  DeletePredictiveDialingCampaign(data: DeletePredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePredictiveDialingCampaignResponse>;
  /** 删除坐席信息 {@link DeleteStaffRequest} {@link DeleteStaffResponse} */
  DeleteStaff(data: DeleteStaffRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStaffResponse>;
  /** 查询生效运营商白名单规则 {@link DescribeActiveCarrierPrivilegeNumberRequest} {@link DescribeActiveCarrierPrivilegeNumberResponse} */
  DescribeActiveCarrierPrivilegeNumber(data: DescribeActiveCarrierPrivilegeNumberRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActiveCarrierPrivilegeNumberResponse>;
  /** 查询自动外呼任务详情 {@link DescribeAutoCalloutTaskRequest} {@link DescribeAutoCalloutTaskResponse} */
  DescribeAutoCalloutTask(data: DescribeAutoCalloutTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoCalloutTaskResponse>;
  /** 批量查询自动外呼任务 {@link DescribeAutoCalloutTasksRequest} {@link DescribeAutoCalloutTasksResponse} */
  DescribeAutoCalloutTasks(data: DescribeAutoCalloutTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoCalloutTasksResponse>;
  /** 获取用户购买信息列表 {@link DescribeCCCBuyInfoListRequest} {@link DescribeCCCBuyInfoListResponse} */
  DescribeCCCBuyInfoList(data?: DescribeCCCBuyInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCCBuyInfoListResponse>;
  /** 获取呼入实时数据统计指标 {@link DescribeCallInMetricsRequest} {@link DescribeCallInMetricsResponse} */
  DescribeCallInMetrics(data: DescribeCallInMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallInMetricsResponse>;
  /** 查询运营商白名单号码申请 {@link DescribeCarrierPrivilegeNumberApplicantsRequest} {@link DescribeCarrierPrivilegeNumberApplicantsResponse} */
  DescribeCarrierPrivilegeNumberApplicants(data: DescribeCarrierPrivilegeNumberApplicantsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCarrierPrivilegeNumberApplicantsResponse>;
  /** 查询指定会话（SessionId）的聊天记录 {@link DescribeChatMessagesRequest} {@link DescribeChatMessagesResponse} */
  DescribeChatMessages(data?: DescribeChatMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChatMessagesResponse>;
  /** 查询公司资质申请列表 {@link DescribeCompanyListRequest} {@link DescribeCompanyListResponse} */
  DescribeCompanyList(data: DescribeCompanyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompanyListResponse>;
  /** 获取话机信息 {@link DescribeExtensionRequest} {@link DescribeExtensionResponse} */
  DescribeExtension(data: DescribeExtensionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtensionResponse>;
  /** 查询话机列表信息 {@link DescribeExtensionsRequest} {@link DescribeExtensionsResponse} */
  DescribeExtensions(data: DescribeExtensionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtensionsResponse>;
  /** 查询在线客服记录 {@link DescribeIMCdrListRequest} {@link DescribeIMCdrListResponse} */
  DescribeIMCdrList(data: DescribeIMCdrListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIMCdrListResponse>;
  /** 查询在线客服记录(已废弃) {@link DescribeIMCdrsRequest} {@link DescribeIMCdrsResponse} */
  DescribeIMCdrs(data: DescribeIMCdrsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIMCdrsResponse>;
  /** 查询IVR音频文件列表 {@link DescribeIvrAudioListRequest} {@link DescribeIvrAudioListResponse} */
  DescribeIvrAudioList(data: DescribeIvrAudioListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIvrAudioListResponse>;
  /** 查询号码列表 {@link DescribeNumbersRequest} {@link DescribeNumbersResponse} */
  DescribeNumbers(data: DescribeNumbersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNumbersResponse>;
  /** 获取 PSTN 活动会话列表 {@link DescribePSTNActiveSessionListRequest} {@link DescribePSTNActiveSessionListResponse} */
  DescribePSTNActiveSessionList(data: DescribePSTNActiveSessionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePSTNActiveSessionListResponse>;
  /** 查询预测式外呼任务 {@link DescribePredictiveDialingCampaignRequest} {@link DescribePredictiveDialingCampaignResponse} */
  DescribePredictiveDialingCampaign(data: DescribePredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePredictiveDialingCampaignResponse>;
  /** 查询预测式外呼任务列表 {@link DescribePredictiveDialingCampaignsRequest} {@link DescribePredictiveDialingCampaignsResponse} */
  DescribePredictiveDialingCampaigns(data: DescribePredictiveDialingCampaignsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePredictiveDialingCampaignsResponse>;
  /** 查询预测式外呼呼叫列表 {@link DescribePredictiveDialingSessionsRequest} {@link DescribePredictiveDialingSessionsResponse} */
  DescribePredictiveDialingSessions(data: DescribePredictiveDialingSessionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePredictiveDialingSessionsResponse>;
  /** 获取主被叫受保护的电话服务记录与录音 {@link DescribeProtectedTelCdrRequest} {@link DescribeProtectedTelCdrResponse} */
  DescribeProtectedTelCdr(data: DescribeProtectedTelCdrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectedTelCdrResponse>;
  /** 获取技能组信息列表 {@link DescribeSkillGroupInfoListRequest} {@link DescribeSkillGroupInfoListResponse} */
  DescribeSkillGroupInfoList(data: DescribeSkillGroupInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillGroupInfoListResponse>;
  /** 获取坐席信息列表 {@link DescribeStaffInfoListRequest} {@link DescribeStaffInfoListResponse} */
  DescribeStaffInfoList(data: DescribeStaffInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStaffInfoListResponse>;
  /** 获取坐席实时状态统计指标 {@link DescribeStaffStatusMetricsRequest} {@link DescribeStaffStatusMetricsResponse} */
  DescribeStaffStatusMetrics(data: DescribeStaffStatusMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStaffStatusMetricsResponse>;
  /** 按实例获取电话消耗统计 {@link DescribeTelCallInfoRequest} {@link DescribeTelCallInfoResponse} */
  DescribeTelCallInfo(data: DescribeTelCallInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTelCallInfoResponse>;
  /** 获取电话服务记录与录音 {@link DescribeTelCdrRequest} {@link DescribeTelCdrResponse} */
  DescribeTelCdr(data: DescribeTelCdrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTelCdrResponse>;
  /** 获取 PSTN 会话信息 {@link DescribeTelSessionRequest} {@link DescribeTelSessionResponse} */
  DescribeTelSession(data: DescribeTelSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTelSessionResponse>;
  /** 停用号码 {@link DisableCCCPhoneNumberRequest} {@link DisableCCCPhoneNumberResponse} */
  DisableCCCPhoneNumber(data: DisableCCCPhoneNumberRequest, config?: AxiosRequestConfig): AxiosPromise<DisableCCCPhoneNumberResponse>;
  /** 挂断电话 {@link HangUpCallRequest} {@link HangUpCallResponse} */
  HangUpCall(data: HangUpCallRequest, config?: AxiosRequestConfig): AxiosPromise<HangUpCallResponse>;
  /** 修改公司资质申请 {@link ModifyCompanyApplyRequest} {@link ModifyCompanyApplyResponse} */
  ModifyCompanyApply(data: ModifyCompanyApplyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompanyApplyResponse>;
  /** 修改话机账号(绑定技能组、绑定坐席账号) {@link ModifyExtensionRequest} {@link ModifyExtensionResponse} */
  ModifyExtension(data: ModifyExtensionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExtensionResponse>;
  /** 修改客服账号 {@link ModifyStaffRequest} {@link ModifyStaffResponse} */
  ModifyStaff(data: ModifyStaffRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStaffResponse>;
  /** 修改座席密码 {@link ModifyStaffPasswordRequest} {@link ModifyStaffPasswordResponse} */
  ModifyStaffPassword(data: ModifyStaffPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStaffPasswordResponse>;
  /** 暂停预测式外呼任务 {@link PausePredictiveDialingCampaignRequest} {@link PausePredictiveDialingCampaignResponse} */
  PausePredictiveDialingCampaign(data: PausePredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<PausePredictiveDialingCampaignResponse>;
  /** 重置话机注册密码 {@link ResetExtensionPasswordRequest} {@link ResetExtensionPasswordResponse} */
  ResetExtensionPassword(data: ResetExtensionPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetExtensionPasswordResponse>;
  /** 恢复预测式外呼任务 {@link ResumePredictiveDialingCampaignRequest} {@link ResumePredictiveDialingCampaignResponse} */
  ResumePredictiveDialingCampaign(data: ResumePredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<ResumePredictiveDialingCampaignResponse>;
  /** 停止自动外呼任务 {@link StopAutoCalloutTaskRequest} {@link StopAutoCalloutTaskResponse} */
  StopAutoCalloutTask(data: StopAutoCalloutTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopAutoCalloutTaskResponse>;
  /** 解绑号码外呼技能组 {@link UnbindNumberCallOutSkillGroupRequest} {@link UnbindNumberCallOutSkillGroupResponse} */
  UnbindNumberCallOutSkillGroup(data: UnbindNumberCallOutSkillGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindNumberCallOutSkillGroupResponse>;
  /** 解绑坐席所属技能组 {@link UnbindStaffSkillGroupListRequest} {@link UnbindStaffSkillGroupListResponse} */
  UnbindStaffSkillGroupList(data: UnbindStaffSkillGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindStaffSkillGroupListResponse>;
  /** 更新技能组 {@link UpdateCCCSkillGroupRequest} {@link UpdateCCCSkillGroupResponse} */
  UpdateCCCSkillGroup(data: UpdateCCCSkillGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCCCSkillGroupResponse>;
  /** 更新预测式外呼任务 {@link UpdatePredictiveDialingCampaignRequest} {@link UpdatePredictiveDialingCampaignResponse} */
  UpdatePredictiveDialingCampaign(data: UpdatePredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePredictiveDialingCampaignResponse>;
  /** 上传IVR音频文件 {@link UploadIvrAudioRequest} {@link UploadIvrAudioResponse} */
  UploadIvrAudio(data: UploadIvrAudioRequest, config?: AxiosRequestConfig): AxiosPromise<UploadIvrAudioResponse>;
}

export declare type Versions = ["2020-02-10"];

export default Ccc;
