/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AI 通话提取配置项 */
declare interface AICallExtractConfigElement {
  /** 配置项类型，包括Text 文本Selector 选项Boolean 布尔值Number 数字 */
  InfoType: string;
  /** 配置项名称，不可重复 */
  InfoName: string;
  /** 配置项具体内容 */
  InfoContent?: string;
  /** 配置项提取内容示例 */
  Examples?: string[];
  /** InfoType 为 Selector，需要配置此字段 */
  Choices?: string[];
}

/** AI 通话提取结果。 */
declare interface AICallExtractResultElement {
  /** 提取信息的类型Text 文本Selector 选项Boolean 布尔值Number 数字 */
  InfoType?: string;
  /** 提取信息的名称 */
  InfoName?: string;
  /** 提取信息的具体描述 */
  InfoContent?: string;
  /** 提取信息的具体结果 */
  Result?: AICallExtractResultInfo;
}

/** AI 通话结果具体信息 */
declare interface AICallExtractResultInfo {
  /** 提取的类型是文本 */
  Text?: string;
  /** 提取的内型是选项 */
  Chosen?: string[];
  /** 提取类型是布尔值 */
  Boolean?: boolean;
  /** 提取类型是数字 */
  Number?: number;
}

/** AI转人工配置项 */
declare interface AITransferItem {
  /** 转人工的function calling 名称 */
  TransferFunctionName: string;
  /** TransferFunctionEnable为true时生效；transfer_to_human function calling的desc，默认为 "Transfer to human when the user has to transfer to human (like says transfer to human) or you are instructed to do so." */
  TransferFunctionDesc: string;
  /** 转人工的技能组ID */
  TransferSkillGroupId: number;
}

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

/** 语音转文本信息 */
declare interface AsrData {
  /** 用户方 */
  User?: string;
  /** 消息内容 */
  Message?: string;
  /** 时间戳 */
  Timestamp?: number;
  /** 句子开始时间，Unix 毫秒时间戳 */
  Start?: number;
  /** 句子结束时间，Unix 毫秒时间戳 */
  End?: number;
}

/** 音频文件审核信息 */
declare interface AudioFileInfo {
  /** 文件ID */
  FileId?: number;
  /** 文件别名 */
  CustomFileName?: string;
  /** 文件名 */
  AudioFileName?: string;
  /** 审核状态，0-未审核，1-审核通过，2-审核拒绝 */
  Status?: number;
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
  /** 任务状态：0初始：任务创建，呼叫未开始1运行中2 已完成：任务中所有呼叫完成3结束中：任务到期，但仍有部分呼叫未结束4已结束：任务到期终止 */
  State?: number;
  /** 任务Id */
  TaskId?: number;
}

/** 呼入实时指标 */
declare interface CallInMetrics {
  /** IVR驻留数量 */
  IvrCount?: number;
  /** 排队中数量 */
  QueueCount?: number;
  /** 振铃中数量 */
  RingCount?: number;
  /** 接通中数量 */
  AcceptCount?: number;
  /** 客服转接外线中数量 */
  TransferOuterCount?: number;
  /** 最大排队时长 */
  MaxQueueDuration?: number;
  /** 平均排队时长 */
  AvgQueueDuration?: number;
  /** 最大振铃时长 */
  MaxRingDuration?: number;
  /** 平均振铃时长 */
  AvgRingDuration?: number;
  /** 最大接通时长 */
  MaxAcceptDuration?: number;
  /** 平均接通时长 */
  AvgAcceptDuration?: number;
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
  Description?: string;
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
  ApplicantType: number;
  /** 企业名称 */
  CompanyName: string;
  /** 统一社会信用代码 */
  BusinessId: string;
  /** 营业执照扫描件(加盖公章)。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  BusinessIdPicUrl: string;
  /** 法定代表人名称 */
  CorporationName: string;
  /** 法定代表人身份证号码 */
  CorporationId: string;
  /** 法定代表人身份证正反面扫描件。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CorporationIdPicUrl: string;
  /** 安全合规使用承诺书。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  NetworkCommitmentPicUrl: string;
  /** 是否与腾讯云账号的资质一致,0-不一致,1-一致 */
  IsEqualTencentCloud: number;
  /** 法定代表人手机号 */
  CorporationMobile: string;
  /** 法定代表人手机号码实名认证。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CorporationMobilePicUrl: string;
  /** 通话话术。(支持doc、docx格式的文档不超过50MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  UseDescribeFileUrl: string;
  /** 公司授权函。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CompanyAuthLetterPicUrl: string;
  /** 电话受理单。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  AcceptPicUrl: string;
  /** 法定代表人手持身份证照，申请人类型为法定代表人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CorporationHoldingOnIdPicUrl?: string;
  /** 经办人名称，申请人类型为经办人时必填。 */
  OperatorName?: string;
  /** 经办人证件号码，申请人类型为经办人时必填。 */
  OperatorId?: string;
  /** 经办人身份证正反面扫描件，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  OperatorIdPicUrl?: string;
  /** 经办人手持身份证照，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  OperatorHoldingOnIdPicUrl?: string;
  /** 委托授权书，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  CommissionPicUrl?: string;
  /** 经办人手机号，申请人类型为经办人时必填。 */
  OperatorMobile?: string;
  /** 经办人邮箱，申请人类型为经办人时必填。 */
  OperatorEmail?: string;
  /** 经办人手机号码实名认证，申请人类型为经办人时必填。(支持jpg、png、gif、jpeg格式的图片，每张图片应大于50K，不超过5MB，模板参见控制台:https://console.cloud.tencent.com/ccc/enterprise/update) */
  OperatorMobilePicUrl?: string;
}

/** 公司资质审核状态信息 */
declare interface CompanyStateInfo {
  /** 申请单ID */
  Id?: number;
  /** 公司名称 */
  CompanyName?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 审核时间 */
  CheckTime?: number;
  /** 审核备注 */
  CheckMsg?: string;
  /** 审核状态，1-待审核，2-审核通过，3-驳回 */
  State?: number;
  /** 公司统一社会信用代码 */
  BusinessId?: string;
  /** 修改时间 */
  ModifyTime?: number;
  /** 合同编号 */
  ContractNo?: string;
}

/** 查询预测式外呼任务列表元素 */
declare interface DescribePredictiveDialingCampaignsElement {
  /** 任务 ID */
  CampaignId?: number;
  /** 任务名称 */
  Name?: string;
  /** 任务状态 0 待开始 1 进行中 2 已暂停 3 已终止 4 已完成 */
  Status?: number;
  /** 任务状态原因 0 正常 1 手动结束 2 超时结束 */
  StatusReason?: number;
  /** 被叫号码个数 */
  CalleeCount?: number;
  /** 已完成的被叫个数 */
  FinishedCalleeCount?: number;
  /** 相同应用内多个任务运行优先级，从高到底 1 - 5 */
  Priority?: number;
  /** 使用的座席技能组 ID */
  SkillGroupId?: number;
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
  SessionId?: string;
  /** 技能组ID */
  SkillGroupId?: string;
  /** 技能组名称 */
  SkillGroupName?: string;
  /** 满意度 */
  Satisfaction?: IMSatisfaction | null;
  /** 用户ID */
  ClientUserId?: string;
}

/** IM满意度 */
declare interface IMSatisfaction {
  /** 满意度值 */
  Id?: number;
  /** 满意度标签 */
  Label?: string;
}

/** ivr 按键信息 */
declare interface IVRKeyPressedElement {
  /** 命中的关键字或者按键 */
  Key?: string;
  /** 按键关联的标签 */
  Label?: string;
  /** Unix 毫秒时间戳 */
  Timestamp?: number;
  /** 节点标签 */
  NodeLabel?: string;
  /** 用户原始输入 */
  OriginalContent?: string;
  /** TTS 提示音内容 */
  TTSPrompt?: string;
}

/** 单条消息 */
declare interface Message {
  /** 消息类型 */
  Type?: string;
  /** 消息内容 */
  Content?: string;
}

/** 聊天消息 */
declare interface MessageBody {
  /** 消息时间戳 */
  Timestamp?: number;
  /** 发消息的用户ID */
  From?: string;
  /** 消息列表 */
  Messages?: Message[];
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

/** 用户自带号码审批明细数据类型 */
declare interface OwnNumberApplyDetailItem {
  /** 号码类型：0-呼入|1-呼出|2-呼入呼出 */
  CallType: number;
  /** 线路号码 */
  PhoneNumber: string;
  /** 最大并发呼叫数 */
  MaxCallCount: number;
  /** 每秒最大并发数 */
  MaxCallPSec: number;
  /** 呼出被叫格式，使用 {+E.164} 或 {E.164}, */
  OutboundCalleeFormat?: string;
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
  SipBuyNum?: number;
}

/** 座席用户信息 */
declare interface SeatUserInfo {
  /** 座席名称 */
  Name: string;
  /** 座席邮箱 */
  Mail: string;
  /** 工号 */
  StaffNumber: string;
  /** 座席电话号码（带0086前缀） */
  Phone?: string;
  /** 座席昵称 */
  Nick?: string;
  /** 用户ID */
  UserId?: string;
  /** 座席关联的技能组列表 */
  SkillGroupNameList?: string[];
  /** 1:管理员2:质检员3:普通座席else:自定义角色ID */
  Role?: number;
  /** 座席分机号（1 到 8 打头，4 - 6 位） */
  ExtensionNumber?: string;
}

/** 参与者信息 */
declare interface ServeParticipant {
  /** 座席邮箱 */
  Mail?: string;
  /** 座席电话 */
  Phone?: string;
  /** 振铃时间戳，Unix 秒级时间戳 */
  RingTimestamp?: number;
  /** 接听时间戳，Unix 秒级时间戳 */
  AcceptTimestamp?: number;
  /** 结束时间戳，Unix 秒级时间戳 */
  EndedTimestamp?: number;
  /** 录音 ID，能够索引到座席侧的录音 */
  RecordId?: string;
  /** 参与者类型，"staffSeat", "outboundSeat", "staffPhoneSeat" */
  Type?: string;
  /** 转接来源座席信息 */
  TransferFrom?: string;
  /** 转接来源参与者类型，取值与 Type 一致 */
  TransferFromType?: string;
  /** 转接去向座席信息 */
  TransferTo?: string;
  /** 转接去向参与者类型，取值与 Type 一致 */
  TransferToType?: string;
  /** 技能组 ID */
  SkillGroupId?: number;
  /** 结束状态 */
  EndStatusString?: string;
  /** 录音 URL */
  RecordURL?: string;
  /** 参与者序号，从 0 开始 */
  Sequence?: number;
  /** 开始时间戳，Unix 秒级时间戳 */
  StartTimestamp?: number;
  /** 技能组名称 */
  SkillGroupName?: string;
  /** 录音转存第三方COS地址 */
  CustomRecordURL?: string;
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
  RoutePolicy?: string;
  /** 会话分配是否优先上次服务座席 */
  UsingLastSeat?: number;
  /** 单客服最大并发数（电话类型默认1） */
  MaxConcurrency?: number;
  /** 最后修改时间 */
  LastModifyTimestamp?: number;
  /** 技能组类型0-电话，1-在线，3-音频，4-视频 */
  SkillGroupType?: number;
  /** 技能组内线号码 */
  Alias?: string;
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
  SipNum?: number;
}

/** 带有技能组优先级的座席信息 */
declare interface StaffInfo {
  /** 座席名称 */
  Name?: string;
  /** 座席邮箱 */
  Mail?: string;
  /** 座席电话号码 */
  Phone?: string;
  /** 座席昵称 */
  Nick?: string;
  /** 座席工号 */
  StaffNumber?: string;
  /** 用户角色id一个用户绑定了多个角色时以RoleIdList为准 */
  RoleId?: number;
  /** 用户角色id列表 */
  RoleIdList?: number;
  /** 所属技能组列表 */
  SkillGroupList?: SkillGroupItem[];
  /** 最后修改时间 */
  LastModifyTimestamp?: number;
  /** 座席分机号（1 到 8 打头，4 - 6 位） */
  ExtensionNumber?: string;
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
  RecordId?: string;
  /** 座席信息 */
  SeatUser?: SeatUserInfo;
  /** EndStatus与EndStatusString一一对应，具体枚举如下：**场景 EndStatus	EndStatusString	状态说明**电话呼入&呼出	1 ok 正常结束电话呼入&呼出	0 error 系统错误电话呼入 102 ivrGiveUp IVR 期间用户放弃电话呼入 103 waitingGiveUp 会话排队期间用户放弃电话呼入 104 ringingGiveUp 会话振铃期间用户放弃电话呼入 105 noSeatOnline 无座席在线电话呼入 106 notWorkTime 非工作时间 电话呼入 107 ivrEnd IVR 后直接结束电话呼入 100 blackList 呼入黑名单 电话呼出 2 unconnected	未接通电话呼出 108 restrictedCallee	被叫因高风险受限电话呼出 109 tooManyRequest 超频电话呼出 110 restrictedArea 外呼盲区电话呼出 111 restrictedTime	外呼时间限制 电话呼出 201 unknown	未知状态电话呼出 202 notAnswer	未接听电话呼出 203 userReject	拒接挂断电话呼出 204 powerOff	关机电话呼出 205 numberNotExist	空号电话呼出 206 busy	通话中电话呼出 207 outOfCredit	欠费电话呼出 208 operatorError	运营商线路异常电话呼出 209 callerCancel	主叫取消电话呼出 210 notInService	不在服务区电话呼入&呼出	211 clientError 客户端错误电话呼出 212 carrierBlocked 运营商拦截 */
  EndStatus?: number;
  /** 技能组名称 */
  SkillGroup?: string;
  /** 主叫归属地 */
  CallerLocation?: string;
  /** IVR 阶段耗时 */
  IVRDuration?: number;
  /** 振铃时间戳，UNIX 秒级时间戳 */
  RingTimestamp?: number;
  /** 接听时间戳，UNIX 秒级时间戳 */
  AcceptTimestamp?: number;
  /** 结束时间戳，UNIX 秒级时间戳 */
  EndedTimestamp?: number;
  /** IVR 按键信息 ，e.g. ["1","2","3"] */
  IVRKeyPressed?: string[];
  /** 挂机方 seat 座席 user 用户 system 系统 */
  HungUpSide?: string;
  /** 服务参与者列表 */
  ServeParticipants?: ServeParticipant[];
  /** 技能组ID */
  SkillGroupId?: number;
  /** EndStatus与EndStatusString一一对应，具体枚举如下：**场景 EndStatus	EndStatusString	状态说明**电话呼入&呼出	1 ok 正常结束电话呼入&呼出	0 error 系统错误电话呼入 102 ivrGiveUp IVR 期间用户放弃电话呼入 103 waitingGiveUp 会话排队期间用户放弃电话呼入 104 ringingGiveUp 会话振铃期间用户放弃电话呼入 105 noSeatOnline 无座席在线电话呼入 106 notWorkTime 非工作时间 电话呼入 107 ivrEnd IVR 后直接结束电话呼入 100 blackList 呼入黑名单 电话呼出 2 unconnected	未接通电话呼出 108 restrictedCallee	被叫因高风险受限电话呼出 109 tooManyRequest 超频电话呼出 110 restrictedArea 外呼盲区电话呼出 111 restrictedTime	外呼时间限制 电话呼出 201 unknown	未知状态电话呼出 202 notAnswer	未接听电话呼出 203 userReject	拒接挂断电话呼出 204 powerOff	关机电话呼出 205 numberNotExist	空号电话呼出 206 busy	通话中电话呼出 207 outOfCredit	欠费电话呼出 208 operatorError	运营商线路异常电话呼出 209 callerCancel	主叫取消电话呼出 210 notInService	不在服务区电话呼入&呼出	211 clientError 客户端错误电话呼出 212 carrierBlocked 运营商拦截 */
  EndStatusString?: string;
  /** 会话开始时间戳，UNIX 秒级时间戳 */
  StartTimestamp?: number;
  /** 进入排队时间，Unix 秒级时间戳 */
  QueuedTimestamp?: number;
  /** 后置IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]） */
  PostIVRKeyPressed?: IVRKeyPressedElement[];
  /** 排队技能组Id */
  QueuedSkillGroupId?: number;
  /** 会话 ID */
  SessionId?: string;
  /** 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空 */
  ProtectedCaller?: string;
  /** 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空 */
  ProtectedCallee?: string;
  /** 客户自定义数据（User-to-User Interface） */
  Uui?: string | null;
  /** 客户自定义数据（User-to-User Interface） */
  UUI?: string;
  /** IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]） */
  IVRKeyPressedEx?: IVRKeyPressedElement[];
  /** 获取录音ASR文本信息地址 */
  AsrUrl?: string;
  /** AsrUrl的状态：Complete已完成;Processing正在生成中;NotExists无记录(未开启生成离线asr或者无套餐包) */
  AsrStatus?: string;
  /** 录音转存第三方COS地址 */
  CustomRecordURL?: string;
  /** 备注 */
  Remark?: string;
  /** 排队技能组名称 */
  QueuedSkillGroupName?: string;
  /** 通话中语音留言录音URL */
  VoicemailRecordURL?: string[];
  /** 通话中语音留言ASR文本信息地址 */
  VoicemailAsrURL?: string[];
}

/** 时间范围，24 小时制，格式为 09:00:00 */
declare interface TimeRange {
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
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
  FileName?: string;
  /** 失败原因 */
  FailedMsg?: string;
}

/** 变量 */
declare interface Variable {
  /** 变量名 */
  Key: string;
  /** 变量值 */
  Value: string;
}

declare interface AbortAgentCruiseDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务 ID */
  CampaignId: number;
}

declare interface AbortAgentCruiseDialingCampaignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface CreateAIAgentCallRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** AI智能体ID */
  AIAgentId: number;
  /** 被叫号码 */
  Callee: string;
  /** 主叫号码列表 */
  Callers?: string[];
  /** 提示词变量 */
  PromptVariables?: Variable[];
  /** 通用变量： 提示词变量 欢迎语变量 dify变量 1. dify-inputs-xxx 为dify的inputs变量2. dify-inputs-user 为dify的user值3. dify-inputs-conversation_id 为dify的conversation_id值 */
  Variables?: Variable[];
}

declare interface CreateAIAgentCallResponse {
  /** 新创建的会话 ID */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAICallRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 被叫号码 */
  Callee: string;
  /** 模型接口协议类型，目前兼容四种协议类型：- OpenAI协议(包括GPT、混元、DeepSeek等)："openai"- Azure协议："azure"- Minimax协议："minimax"- Dify协议: "dify" */
  LLMType: string;
  /** 模型API密钥，获取鉴权信息方式请参见各模型官网- OpenAI协议：[GPT](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)，[混元](https://cloud.tencent.com/document/product/1729/111008)，[DeepSeek](https://api-docs.deepseek.com/zh-cn/)；- Azure协议：[Azure GPT](https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Ctypescript%2Cpython-new&pivots=programming-language-studio#key-settings)；- Minimax：[Minimax](https://platform.minimaxi.com/document/Fast%20access?key=66701cf51d57f38758d581b2) */
  APIKey: string;
  /** 模型接口地址- OpenAI协议GPT："https://api.openai.com/v1/"混元："https://api.hunyuan.cloud.tencent.com/v1"Deepseek："https://api.deepseek.com/v1"- Azure协议 "https://{your-resource-name}.openai.azure.com?api-version={api-version}"- Minimax协议"https://api.minimax.chat/v1" */
  APIUrl: string;
  /** 用于设定AI人设、说话规则、任务等的全局提示词。示例：## 人设您是人民医院友善、和蔼的随访医生李医生，正在给患者小明的家长打电话，原因是医院要求小明2024-08-08回院复查手术恢复情况，但小明没有来。您需要按照任务流程对小明家长进行电话随访调查。## 要求简洁回复：使用简练语言，每次最多询问一个问题，不要在一个回复中询问多个问题。富有变化：尽量使表达富有变化，表达机械重复。自然亲切：使用日常语言，尽量显得专业并亲切。提到时间时使用口语表述，如下周三、6月18日。积极主动：尝试引导对话，每个回复通常以问题或下一步建议来结尾。询问清楚：如果对方部分回答了您的问题，或者回答很模糊，请通过追问来确保回答的完整明确。遵循任务：当对方的回答偏离了您的任务时，及时引导对方回到任务中。不要从头开始重复，从偏离的地方继续询问。诚实可靠：对于客户的提问，如果不确定请务必不要编造，礼貌告知对方不清楚。不要捏造患者未提及的症状史、用药史、治疗史。其他注意点：避免提到病情恶化、恢复不理想或疾病名称等使用会使患者感到紧张的表述。不要问患者已经直接或间接回答过的问题，例如患者已经说没有不适症状，那就不要再问手术部位是否有红肿疼痛症状的问题。##任务： 1.自我介绍您是人民医院负责随访的李医生，并说明致电的目的。2.询问被叫方是否是小明家长。 - 如果不是小明家长，请礼貌表达歉意，并使用 call_end 挂断电话。- 如果小明家长没空，请礼貌告诉对方稍后会重新致电，并使用 end_call 挂断电话。3.询问小明出院后水肿情况如何，较出院时是否有变化。- 如果水肿变严重，直接跳转步骤7。4.询问出院后是否给小朋友量过体温，是否出现过发烧情况。- 如果没有量过体温，请礼貌告诉家长出院后三个月内需要每天观察体温。- 如果出现过发烧，请直接跳转步骤7。5.询问出院后是否给小朋友按时服药。- 如果没有按时服药，请友善提醒家长严格按医嘱服用药物，避免影响手术效果。6.询问小朋友在饮食上是否做到低盐低脂，适量吃优质蛋白如鸡蛋、牛奶、瘦肉等。- 如果没有做到，请友善提醒家长低盐低脂和优质蛋白有助小朋友尽快恢复。7.告知家长医生要求6月18日回院复查，但没看到有相关复诊记录。提醒家长尽快前往医院体检复查血化验、尿常规。8.询问家长是否有问题需要咨询，如果没有请礼貌道别并用call_end挂断电话。 */
  SystemPrompt?: string;
  /** 模型名称，如- OpenAI协议"gpt-4o-mini","gpt-4o"，"hunyuan-standard", "hunyuan-turbo"，"deepseek-chat"；- Azure协议"gpt-4o-mini", "gpt-4o"；- Minmax协议"deepseek-chat". */
  Model?: string;
  /** 默认提供以下音色参数值可选择，如需自定义音色VoiceType请留空并在参数CustomTTSConfig中配置汉语：ZhiMei：智美，客服女声ZhiXi： 智希 通用女声ZhiQi：智琪 客服女声ZhiTian：智甜 女童声AiXiaoJing：爱小静 对话女声英语:WeRose：英文女声Monika：英文女声日语：Nanami韩语：SunHi印度尼西亚语(印度尼西亚)：Gadis马来语（马来西亚）:Yasmin 泰米尔语（马来西亚）:Kani泰语（泰国）:Achara越南语(越南):HoaiMy */
  VoiceType?: string;
  /** 主叫号码列表 */
  Callers?: string[];
  /** 用于设定AI座席欢迎语。 */
  WelcomeMessage?: string;
  /** 0：使用welcomeMessage(为空时，被叫先说话；不为空时，机器人先说话)1: 使用ai根据prompt自动生成welcomeMessage并先说话 */
  WelcomeType?: number;
  /** 0: 默认可打断， 1：高优先不可打断 */
  WelcomeMessagePriority?: number;
  /** 最大等待时长(毫秒)，默认60秒，超过这个时间用户没说话，自动挂断 */
  MaxDuration?: number;
  /** 语音识别支持的语言, 默认是"zh" 中文,填写数组,最长4个语言，第一个语言为主要识别语言，后面为可选语言，注意:主要语言为中国方言时，可选语言无效目前全量支持的语言如下，等号左面是语言英文名，右面是Language字段需要填写的值，该值遵循ISO639：1. Chinese = "zh" # 中文2. Chinese_TW = "zh-TW" # 中国台湾3. Chinese_DIALECT = "zh-dialect" # 中国方言4. English = "en" # 英语5. Vietnamese = "vi" # 越南语6. Japanese = "ja" # 日语7. Korean = "ko" # 汉语8. Indonesia = "id" # 印度尼西亚语9. Thai = "th" # 泰语10. Portuguese = "pt" # 葡萄牙语11. Turkish = "tr" # 土耳其语12. Arabic = "ar" # 阿拉伯语13. Spanish = "es" # 西班牙语14. Hindi = "hi" # 印地语15. French = "fr" # 法语16. Malay = "ms" # 马来语17. Filipino = "fil" # 菲律宾语18. German = "de" # 德语19. Italian = "it" # 意大利语20. Russian = "ru" # 俄语 */
  Languages?: string[];
  /** 打断AI说话模式，默认为0，0表示自动打断，1表示不打断。 */
  InterruptMode?: number;
  /** InterruptMode为0时使用，单位为毫秒，默认为500ms。表示服务端检测到持续InterruptSpeechDuration毫秒的人声则进行打断。 */
  InterruptSpeechDuration?: number;
  /** 模型是否支持(或者开启)call_end function calling */
  EndFunctionEnable?: boolean;
  /** EndFunctionEnable为true时生效；call_end function calling的desc，默认为 "End the call when user has to leave (like says bye) or you are instructed to do so." */
  EndFunctionDesc?: string;
  /** 模型是否支持(或者开启)transfer_to_human function calling */
  TransferFunctionEnable?: boolean;
  /** TransferFunctionEnable为true的时候生效: 转人工配置 */
  TransferItems?: AITransferItem[];
  /** 用户多久没说话提示时长,最小10秒,默认10秒 */
  NotifyDuration?: number;
  /** 用户NotifyDuration没说话，AI提示的语句，默认是"抱歉，我没听清。您可以重复下吗？" */
  NotifyMessage?: string;
  /** 最大触发AI提示音次数，默认为不限制 */
  NotifyMaxCount?: number;
  /** 和VoiceType字段需要选填一个，这里是使用自己自定义的TTS，VoiceType是系统内置的一些音色Tencent TTS配置请参考腾讯云TTS文档链接{ &quot;TTSType&quot;: &quot;tencent&quot;, // String TTS类型, 目前支持&quot;tencent&quot; 和 “minixmax”， 其他的厂商支持中 &quot;AppId&quot;: &quot;您的应用ID&quot;, // String 必填 &quot;SecretId&quot;: &quot;您的密钥ID&quot;, // String 必填 &quot;SecretKey&quot;: &quot;您的密钥Key&quot;, // String 必填 &quot;VoiceType&quot;: 101001, // Integer 必填，音色 ID，包括标准音色与精品音色，精品音色拟真度更高，价格不同于标准音色，请参见语音合成计费概述。完整的音色 ID 列表请参见语音合成音色列表。 &quot;Speed&quot;: 1.25, // Integer 非必填，语速，范围：[-2，6]，分别对应不同语速： -2: 代表0.6倍 -1: 代表0.8倍 0: 代表1.0倍（默认） 1: 代表1.2倍 2: 代表1.5倍 6: 代表2.5倍 如果需要更细化的语速，可以保留小数点后 2 位，例如0.5/1.25/2.81等。 参数值与实际语速转换，可参考 语速转换 &quot;Volume&quot;: 5, // Integer 非必填，音量大小，范围：[0，10]，分别对应11个等级的音量，默认值为0，代表正常音量。 &quot;PrimaryLanguage&quot;: 1, // Integer 可选 主要语言 1-中文（默认） 2-英文 3-日文 &quot;FastVoiceType&quot;: &quot;xxxx&quot; // 可选参数， 快速声音复刻的参数 } Minimax TTS配置请参考Minimax TTS文档链接。注意Minimax TTS存在频率限制，超频可能会导致回答卡顿，Minimax TTS频率限制相关文档链接。{ &quot;TTSType&quot;: &quot;minimax&quot;, // String TTS类型, &quot;Model&quot;: &quot;speech-01-turbo&quot;, &quot;APIUrl&quot;: &quot;https://api.minimax.chat/v1/t2a_v2&quot;, &quot;APIKey&quot;: &quot;eyxxxx&quot;, &quot;GroupId&quot;: &quot;181000000000000&quot;, &quot;VoiceType&quot;:&quot;female-tianmei-jingpin&quot;, &quot;Speed&quot;: 1.2}火山 TTS配置音色类型参考火山TTS文档链接语音合成音色列表–语音技术-火山引擎大模型语音合成音色列表–语音技术-火山引擎{ &quot;TTSType&quot;: &quot;volcengine&quot;, // 必填：String TTS类型 &quot;AppId&quot; : &quot;xxxxxxxx&quot;, // 必填：String 火山引擎分配的Appid &quot;Token&quot; : &quot;TY9d4sQXHxxxxxxx&quot;, // 必填： String类型 火山引擎的访问token &quot;Speed&quot; : 1.0, // 可选参数 语速，默认为1.0 &quot;Volume&quot;: 1.0, // 可选参数， 音量大小， 默认为1.0 &quot;Cluster&quot; : &quot;volcano_tts&quot;, // 可选参数，业务集群, 默认是 volcano_tts &quot;VoiceType&quot; : &quot;zh_male_aojiaobazong_moon_bigtts&quot; // 音色类型， 默认为大模型语音合成的音色。 如果使用普通语音合成，则需要填写对应的音色类型。 音色类型填写错误会导致没有声音。}Azure TTS配置请参考AzureTTS文档链接{ &quot;TTSType&quot;: &quot;azure&quot;, // 必填：String TTS类型 &quot;SubscriptionKey&quot;: &quot;xxxxxxxx&quot;, // 必填：String 订阅的Key &quot;Region&quot;: &quot;chinanorth3&quot;, // 必填：String 订阅的地区 &quot;VoiceName&quot;: &quot;zh-CN-XiaoxiaoNeural&quot;, // 必填：String 音色名必填 &quot;Language&quot;: &quot;zh-CN&quot;, // 必填：String 合成的语言 &quot;Rate&quot;: 1 // 选填：float 语速 0.5～2 默认为 1}自定义TTS具体协议规范请参考腾讯文档{ &quot;TTSType&quot;: &quot;custom&quot;, // String 必填 &quot;APIKey&quot;: &quot;ApiKey&quot;, // String 必填 用来鉴权 &quot;APIUrl&quot;: &quot;http://0.0.0.0:8080/stream-audio&quot; // String，必填，TTS API URL &quot;AudioFormat&quot;: &quot;wav&quot;, // String, 非必填，期望输出的音频格式，如mp3， ogg_opus，pcm，wav，默认为 wav，目前只支持pcm和wav， &quot;SampleRate&quot;: 16000, // Integer，非必填，音频采样率，默认为16000(16k)，推荐值为16000 &quot;AudioChannel&quot;: 1, // Integer，非必填，音频通道数，取值：1 或 2 默认为1 } */
  CustomTTSConfig?: string;
  /** 提示词变量 */
  PromptVariables?: Variable[];
  /** 语音识别vad的时间，范围为240-2000，默认为1000，单位为ms。更小的值会让语音识别分句更快。 */
  VadSilenceTime?: number;
  /** 通话内容提取配置 */
  ExtractConfig?: AICallExtractConfigElement[];
  /** 模型温度控制 */
  Temperature?: number;
  /** 通用变量： 提示词变量 欢迎语变量 dify变量 1. dify-inputs-xxx 为dify的inputs变量2. dify-inputs-user 为dify的user值3. dify-inputs-conversation_id 为dify的conversation_id值 */
  Variables?: Variable[];
}

declare interface CreateAICallResponse {
  /** 新创建的会话 ID */
  SessionId?: string;
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

declare interface CreateAgentCruiseDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务名称 */
  Name: string;
  /** 座席账号 */
  Agent: string;
  /** 单轮并发呼叫量 1-20 */
  ConcurrencyNumber: number;
  /** 任务启动时间，Unix 时间戳，到此时间后会自动启动任务 */
  StartTime: number;
  /** 任务结束时间，Unix 时间戳，到此时间后会自动终止任务 */
  EndTime: number;
  /** 被叫列表，支持 E.164 或不带国家码形式的号码 */
  Callees?: string[];
  /** 主叫列表，使用管理端展示的号码格式 */
  Callers?: string[];
  /** 被叫呼叫顺序 0 随机 1 顺序 */
  CallOrder?: number;
  /** 调用方自定义数据，最大长度 1024 */
  UUI?: string;
}

declare interface CreateAgentCruiseDialingCampaignResponse {
  /** 生成的任务 ID */
  CampaignId?: number;
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
  /** 呼叫使用的 IVR Id，不填时需要填写 AIAgentId */
  IvrId?: number;
  /** 任务名 */
  Name?: string;
  /** 任务描述 */
  Description?: string;
  /** 任务停止时间戳，Unix 秒级时间戳 */
  NotAfter?: number;
  /** 最大尝试次数，1-3 次 */
  Tries?: number;
  /** 自定义变量（仅高级版支持） */
  Variables?: Variable[];
  /** UUI */
  UUI?: string;
  /** 被叫属性 */
  CalleeAttributes?: CalleeAttribute[];
  /** IANA 时区名称，参考 https://datatracker.ietf.org/doc/html/draft-ietf-netmod-iana-timezones */
  TimeZone?: string;
  /** 可用时间段 */
  AvailableTime?: TimeRange[];
  /** 智能体 ID，不填写时需要填写 IvrId */
  AIAgentId?: number;
}

declare interface CreateAutoCalloutTaskResponse {
  /** 任务Id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCCCSkillGroupRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 客服用户 ID，一般为客服邮箱，确保已经绑定了手机号 https://cloud.tencent.com/document/product/679/76067 */
  UserId: string;
  /** 被叫号码，须带 0086 前缀 */
  Callee: string;
  /** 主叫号码（废弃，使用Callers），须带 0086 前缀 */
  Caller?: string;
  /** 指定主叫号码列表，如果前面的号码失败了会自动换成下一个号码，须带 0086 前缀 */
  Callers?: string[];
  /** 是否强制使用手机外呼，当前只支持 true，若为 true 请确保已配置白名单 https://cloud.tencent.com/document/product/679/76744 */
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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

declare interface CreateIVRSessionRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 被叫 */
  Callee: string;
  /** 指定的 IVR Id，目前支持呼入和自动外呼两种类型 */
  IVRId: number;
  /** 主叫号码列表 */
  Callers?: string[];
  /** 自定义变量 */
  Variables?: Variable[];
  /** 用户数据 */
  UUI?: string;
}

declare interface CreateIVRSessionResponse {
  /** 新创建的会话 ID */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOwnNumberApplyRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** SIP通道ID */
  SipTrunkId: number;
  /** 线路相关参数 */
  DetailList: OwnNumberApplyDetailItem[];
  /** 送号前缀 */
  Prefix?: string;
}

declare interface CreateOwnNumberApplyResponse {
  /** 审批单号 */
  ApplyId?: number;
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
  /** 自定义变量 */
  Variables?: Variable[];
  /** UUI */
  UUI?: string;
  /** 被叫属性 */
  CalleeAttributes?: CalleeAttribute[];
  /** IANA 时区名称，参考 https://datatracker.ietf.org/doc/html/draft-ietf-netmod-iana-timezones */
  TimeZone?: string;
  /** 可用时间段 */
  AvailableTime?: TimeRange[];
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
  ErrorStaffList?: ErrStaffItem[];
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 待删除客服邮箱列表，一次最大支持200个。 */
  StaffList: string[];
}

declare interface DeleteStaffResponse {
  /** 无法删除的状态为在线的客服列表 */
  OnlineStaffList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAICallExtractResultRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 会话 ID */
  SessionId: string;
  /** 查找起始时间 */
  StartTime: number;
  /** 查找结束时间 */
  EndTime: number;
}

declare interface DescribeAICallExtractResultResponse {
  /** 结果列表 */
  ResultList?: AICallExtractResultElement[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActiveCarrierPrivilegeNumberRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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

declare interface DescribeAgentCruiseDialingCampaignRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务 ID */
  CampaignId: number;
}

declare interface DescribeAgentCruiseDialingCampaignResponse {
  /** 任务名称 */
  Name?: string;
  /** 座席账号 */
  Agent?: string;
  /** 单轮并发呼叫量 1-20 */
  ConcurrencyNumber?: number;
  /** 任务启动时间，Unix 时间戳，到此时间后会自动启动任务 */
  StartTime?: number;
  /** 任务结束时间，Unix 时间戳，到此时间后会自动终止任务 */
  EndTime?: number;
  /** 被叫呼叫顺序 0 随机 1 顺序 */
  CallOrder?: number;
  /** 调用方自定义数据，最大长度 1024 */
  UUI?: string;
  /** 任务状态 0 未启动 1 运行中 2 已完成 3 已终止 */
  State?: number;
  /** 被叫总数 */
  TotalCalleeCount?: number;
  /** 已呼被叫数 */
  CalledCalleeCount?: number;
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
  NumberMetrics?: CallInNumberMetrics[];
  /** 技能组维度指标 */
  SkillGroupMetrics?: CallInSkillGroupMetrics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCarrierPrivilegeNumberApplicantsRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 应用 ID，可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 实例 ID（废弃） */
  InstanceId?: number;
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
  Messages?: MessageBody[];
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
  TotalCount?: number;
  /** 企业资质审核信息 */
  CompanyInfo?: CompanyStateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtensionRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  IMCdrList?: IMCdrInfo[];
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
  TotalCount?: number;
  /** 数据 */
  CampaignList?: DescribePredictiveDialingCampaignsElement[];
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
  /** 筛选坐席状态列表 座席状态 free 示闲 | busy 忙碌 | rest 小休 | notReady 示忙 | afterCallWork 话后调整 | offline 离线 */
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
  /** 起始时间戳，Unix 秒级时间戳，最大支持近180天。 */
  StartTimeStamp: number;
  /** 结束时间戳，Unix 秒级时间戳，结束时间与开始时间的区间范围小于90天。 */
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

declare interface DescribeTelRecordAsrRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 会话 ID */
  SessionId: string;
}

declare interface DescribeTelRecordAsrResponse {
  /** 录音转文本信息 */
  AsrDataList?: AsrData[];
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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

declare interface ModifyOwnNumberApplyRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 线路相关参数 */
  DetailList: OwnNumberApplyDetailItem[];
  /** 审批单号 */
  ApplyId?: number;
  /** 送号前缀 */
  Prefix?: string;
}

declare interface ModifyOwnNumberApplyResponse {
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 座席账户 */
  Email: string;
  /** 座席名称 */
  Name?: string;
  /** 座席手机号（带0086前缀,示例：008618011111111） */
  Phone?: string;
  /** 座席昵称 */
  Nick?: string;
  /** 座席工号 */
  StaffNo?: string;
  /** 绑定技能组ID列表 */
  SkillGroupIds?: number[];
  /** 是否开启手机外呼开关 */
  UseMobileCallOut?: boolean;
  /** 手机接听模式 0 - 关闭 | 1 - 仅离线 | 2 - 始终 */
  UseMobileAccept?: number;
  /** 座席分机号（1 到 8 打头，4 - 6 位） */
  ExtensionNumber?: string;
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 任务Id */
  TaskId: number;
}

declare interface StopAutoCalloutTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransferToManualRequest {
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
  SdkAppId: number;
  /** 会话ID */
  SessionId: string;
  /** 技能组Id */
  SkillGroupId: number;
}

declare interface TransferToManualResponse {
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
  /** 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc */
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
  /** 自定义变量 */
  Variables?: Variable[];
  /** UUI */
  UUI?: string;
  /** 被叫属性 */
  CalleeAttributes?: CalleeAttribute[];
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
  FailedFileList?: UploadIvrAudioFailedInfo[];
  /** 上传成功文件列表 */
  SuccessFileList?: AudioFileInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ccc 云联络中心} */
declare interface Ccc {
  (): Versions;
  /** 停止座席巡航式外呼任务 {@link AbortAgentCruiseDialingCampaignRequest} {@link AbortAgentCruiseDialingCampaignResponse} */
  AbortAgentCruiseDialingCampaign(data: AbortAgentCruiseDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<AbortAgentCruiseDialingCampaignResponse>;
  /** 停止预测式外呼任务 {@link AbortPredictiveDialingCampaignRequest} {@link AbortPredictiveDialingCampaignResponse} */
  AbortPredictiveDialingCampaign(data: AbortPredictiveDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<AbortPredictiveDialingCampaignResponse>;
  /** 绑定号码外呼技能组 {@link BindNumberCallOutSkillGroupRequest} {@link BindNumberCallOutSkillGroupResponse} */
  BindNumberCallOutSkillGroup(data: BindNumberCallOutSkillGroupRequest, config?: AxiosRequestConfig): AxiosPromise<BindNumberCallOutSkillGroupResponse>;
  /** 绑定座席所属技能组 {@link BindStaffSkillGroupListRequest} {@link BindStaffSkillGroupListResponse} */
  BindStaffSkillGroupList(data: BindStaffSkillGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<BindStaffSkillGroupListResponse>;
  /** 创建智能体通话 {@link CreateAIAgentCallRequest} {@link CreateAIAgentCallResponse} */
  CreateAIAgentCall(data: CreateAIAgentCallRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIAgentCallResponse>;
  /** 创建AI通话 {@link CreateAICallRequest} {@link CreateAICallResponse} */
  CreateAICall(data: CreateAICallRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAICallResponse>;
  /** 创建管理端访问链接 {@link CreateAdminURLRequest} {@link CreateAdminURLResponse} */
  CreateAdminURL(data: CreateAdminURLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAdminURLResponse>;
  /** 创建座席巡航式外呼任务 {@link CreateAgentCruiseDialingCampaignRequest} {@link CreateAgentCruiseDialingCampaignResponse} */
  CreateAgentCruiseDialingCampaign(data: CreateAgentCruiseDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentCruiseDialingCampaignResponse>;
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
  /** CreateIVRSession {@link CreateIVRSessionRequest} {@link CreateIVRSessionResponse} */
  CreateIVRSession(data: CreateIVRSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIVRSessionResponse>;
  /** 创建客户自携号码接入审核 {@link CreateOwnNumberApplyRequest} {@link CreateOwnNumberApplyResponse} */
  CreateOwnNumberApply(data: CreateOwnNumberApplyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOwnNumberApplyResponse>;
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
  /** 查询 AI 通话内容提取结果 {@link DescribeAICallExtractResultRequest} {@link DescribeAICallExtractResultResponse} */
  DescribeAICallExtractResult(data: DescribeAICallExtractResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAICallExtractResultResponse>;
  /** 查询生效运营商白名单规则 {@link DescribeActiveCarrierPrivilegeNumberRequest} {@link DescribeActiveCarrierPrivilegeNumberResponse} */
  DescribeActiveCarrierPrivilegeNumber(data: DescribeActiveCarrierPrivilegeNumberRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActiveCarrierPrivilegeNumberResponse>;
  /** 查询座席巡航式外呼任务 {@link DescribeAgentCruiseDialingCampaignRequest} {@link DescribeAgentCruiseDialingCampaignResponse} */
  DescribeAgentCruiseDialingCampaign(data: DescribeAgentCruiseDialingCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentCruiseDialingCampaignResponse>;
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
  DescribeChatMessages(data: DescribeChatMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChatMessagesResponse>;
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
  /** 拉取会话录音转文本信息 {@link DescribeTelRecordAsrRequest} {@link DescribeTelRecordAsrResponse} */
  DescribeTelRecordAsr(data: DescribeTelRecordAsrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTelRecordAsrResponse>;
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
  /** 修改客户自携号码审批单 {@link ModifyOwnNumberApplyRequest} {@link ModifyOwnNumberApplyResponse} */
  ModifyOwnNumberApply(data: ModifyOwnNumberApplyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOwnNumberApplyResponse>;
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
  /** 转接人工 {@link TransferToManualRequest} {@link TransferToManualResponse} */
  TransferToManual(data: TransferToManualRequest, config?: AxiosRequestConfig): AxiosPromise<TransferToManualResponse>;
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
