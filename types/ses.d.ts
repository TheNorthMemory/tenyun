/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 附件结构，包含附件名和base64之后的附件内容。 */
declare interface Attachment {
  /** 附件名称，最大支持255个字符长度，不支持部分附件类型，详情请参考[附件类型](https://cloud.tencent.com/document/product/1288/51951)。 */
  FileName: string;
  /** Base64之后的附件内容，你可以发送的附件大小上限为4M。注意：腾讯云接口请求最大支持 8M 的请求包，附件内容经过 Base64 预期扩大1.5倍。应该控制所有附件的总大小最大在 4M 以内，整体请求超出 8M 接口会返回错误。 */
  Content: string;
}

/** 邮箱黑名单结构，包含被拉黑的邮箱地址和被拉黑时间 */
declare interface BlackEmailAddress {
  /** 邮箱被拉黑时间 */
  BounceTime: string;
  /** 被拉黑的邮箱地址 */
  EmailAddress: string;
}

/** 创建重复周期发送邮件任务的参数 */
declare interface CycleEmailParam {
  /** 任务开始时间 */
  BeginTime: string;
  /** 任务周期 小时维度 */
  IntervalTime: number;
  /** 是否终止周期，用于任务更新 0否1是 */
  TermCycle?: number;
}

/** 用于描述DNS记录的域名、记录类型、期望得到的值、目前配置的值 */
declare interface DNSAttributes {
  /** 记录类型 CNAME | A | TXT | MX */
  Type: string;
  /** 域名 */
  SendDomain: string;
  /** 需要配置的值 */
  ExpectedValue: string;
  /** 腾讯云目前检测到的值 */
  CurrentValue: string;
  /** 检测是否通过，创建时默认为false */
  Status: boolean;
}

/** 发信域名验证列表结构体 */
declare interface EmailIdentity {
  /** 发信域名 */
  IdentityName: string;
  /** 验证类型，固定为DOMAIN */
  IdentityType: string;
  /** 是否已通过验证 */
  SendingEnabled: boolean;
  /** 当前信誉等级 */
  CurrentReputationLevel: number;
  /** 当日最高发信量 */
  DailyQuota: number;
}

/** 用于描述发件人相关信息 */
declare interface EmailSender {
  /** 发信地址 */
  EmailAddress: string;
  /** 发信人别名 */
  EmailSenderName: string | null;
  /** 创建时间 */
  CreatedTimestamp: number | null;
}

/** 收件人列表数据类型 */
declare interface ReceiverData {
  /** 收件人列表ID */
  ReceiverId: number;
  /** 收件人列表名称 */
  ReceiversName: string;
  /** 收件人地址总数 */
  Count: number;
  /** 收件人列表描述 */
  Desc: string | null;
  /** 列表状态(1 待上传 2 上传中 3 上传完成) */
  ReceiversStatus: number | null;
  /** 创建时间,如:2021-09-28 16:40:35 */
  CreateTime: string;
}

/** 收件人明细输入参数，包含收件人邮箱，以及模板参数 */
declare interface ReceiverInputData {
  /** 收件人邮箱 */
  Email: string;
  /** 模板中的变量参数，请使用json.dump将json对象格式化为string类型。该对象是一组键值对，每个Key代表模板中的一个变量，模板中的变量使用{{键}}表示，相应的值在发送时会被替换为{{值}}。注意：参数值不能是html等复杂类型的数据。TemplateData (整个 JSON 结构) 总长度限制为 800 bytes。 */
  TemplateData: string;
}

/** 描述邮件发送状态 */
declare interface SendEmailStatus {
  /** SendEmail返回的MessageId */
  MessageId: string;
  /** 收件人邮箱 */
  ToEmailAddress: string;
  /** 发件人邮箱 */
  FromEmailAddress: string;
  /** 腾讯云处理状态0: 处理成功1001: 内部系统异常1002: 内部系统异常1003: 内部系统异常1003: 内部系统异常1004: 发信超时1005: 内部系统异常1006: 触发频率控制，短时间内对同一地址发送过多邮件1007: 邮件地址在黑名单中1008: 域名被收件人拒收1009: 内部系统异常1010: 超出了每日发送限制1011: 无发送自定义内容权限，必须使用模板1013: 域名被收件人取消订阅2001: 找不到相关记录3007: 模板ID无效或者不可用3008: 被收信域名临时封禁3009: 无权限使用该模板3010: TemplateData字段格式不正确 3014: 发件域名没有经过认证，无法发送3020: 收件方邮箱类型在黑名单3024: 邮箱地址格式预检查失败3030: 退信率过高，临时限制发送3033: 余额不足，账号欠费等 */
  SendStatus: number;
  /** 收件方处理状态0: 请求成功被腾讯云接受，进入发送队列1: 邮件递送成功，DeliverTime表示递送成功的时间2: 邮件因某种原因被丢弃，DeliverMessage表示丢弃原因3: 收件方ESP拒信，一般原因为邮箱地址不存在，或其它原因8: 邮件被ESP因某些原因延迟递送，DeliverMessage表示延迟原因 */
  DeliverStatus: number;
  /** 收件方处理状态描述 */
  DeliverMessage: string;
  /** 请求到达腾讯云时间戳 */
  RequestTime: number;
  /** 腾讯云执行递送时间戳 */
  DeliverTime: number;
  /** 用户是否打开该邮件 */
  UserOpened: boolean;
  /** 用户是否点击该邮件中的链接 */
  UserClicked: boolean;
  /** 用户是否取消该发送者的订阅 */
  UserUnsubscribed: boolean;
  /** 用户是否举报该发送者 */
  UserComplainted: boolean;
}

/** 发送任务数据 */
declare interface SendTaskData {
  /** 任务id */
  TaskId: number;
  /** 发信地址 */
  FromEmailAddress: string;
  /** 收件人列表Id */
  ReceiverId: number;
  /** 任务状态 1 待开始 5 发送中 6 今日暂停发送 7 发信异常 10 发送完成 */
  TaskStatus: number;
  /** 任务类型 1 即时 2 定时 3 周期 */
  TaskType: number;
  /** 任务请求发信数量 */
  RequestCount: number;
  /** 已经发送数量 */
  SendCount: number;
  /** 缓存数量 */
  CacheCount: number;
  /** 任务创建时间 */
  CreateTime: string;
  /** 任务更新时间 */
  UpdateTime: string;
  /** 邮件主题 */
  Subject: string;
  /** 模板和模板数据 */
  Template: Template | null;
  /** 周期任务参数 */
  CycleParam: CycleEmailParam | null;
  /** 定时任务参数 */
  TimedParam: TimedEmailParam | null;
  /** 任务异常信息 */
  ErrMsg: string | null;
  /** 收件人列表名称 */
  ReceiversName: string;
}

/** 邮件发送的内容，可以是纯文本(TEXT)，也可以是纯代码(HTML)，或者纯文本+HTML的组合(建议方式) */
declare interface Simple {
  /** base64之后的Html代码。需要包含所有的代码信息，不要包含外部css，否则会导致显示格式错乱 */
  Html?: string;
  /** base64之后的纯文本信息，如果没有Html，邮件中会直接显示纯文本；如果有Html，它代表邮件的纯文本样式 */
  Text?: string;
}

/** 模板发送相关信息，包含模板ID，模板变量参数等信息 */
declare interface Template {
  /** 模板ID。如果没有模板，请先新建一个 */
  TemplateID: number;
  /** 模板中的变量参数，请使用json.dump将json对象格式化为string类型。该对象是一组键值对，每个Key代表模板中的一个变量，模板中的变量使用{{键}}表示，相应的值在发送时会被替换为{{值}}。注意：参数值不能是html等复杂类型的数据。示例：{"name":"xxx","age":"xx"} */
  TemplateData: string;
}

/** 模板内容，TEXT和HTML必须至少存在一项，建议使用TEXT和HTML的组合 */
declare interface TemplateContent {
  /** base64之后的Html代码 */
  Html?: string;
  /** base64之后的文本内容 */
  Text?: string;
}

/** 模板列表结构 */
declare interface TemplatesMetadata {
  /** 创建时间 */
  CreatedTimestamp: number;
  /** 模板名称 */
  TemplateName: string;
  /** 模板状态。1-审核中|0-已通过|2-拒绝|其它-不可用 */
  TemplateStatus: number;
  /** 模板ID */
  TemplateID: number;
  /** 审核原因 */
  ReviewReason: string;
}

/** 创建定时发送邮件任务时，设置的定时参数，比如开始时间之类 */
declare interface TimedEmailParam {
  /** 定时发送邮件的开始时间 */
  BeginTime: string;
}

/** 统计数据的结构体 */
declare interface Volume {
  /** 日期 */
  SendDate: string | null;
  /** 邮件请求数量 */
  RequestCount: number;
  /** 腾讯云通过数量 */
  AcceptedCount: number;
  /** 送达数量 */
  DeliveredCount: number;
  /** 打开邮件的用户数量，根据收件人去重 */
  OpenedCount: number;
  /** 点击了邮件中的链接数量用户数量 */
  ClickedCount: number;
  /** 退信数量 */
  BounceCount: number;
  /** 取消订阅的用户数量 */
  UnsubscribeCount: number | null;
}

declare interface BatchSendEmailRequest {
  /** 发信邮件地址。请填写发件人邮箱地址，例如：noreply@mail.qcloud.com。如需填写发件人说明，请按照发信人 &lt;邮件地址&gt; 的方式填写，例如：腾讯云团队 &lt;noreply@mail.qcloud.com&gt; */
  FromEmailAddress: string;
  /** 收件人列表ID */
  ReceiverId: number;
  /** 邮件主题 */
  Subject: string;
  /** 任务类型 1: 立即发送 2: 定时发送 3: 周期（频率）发送 */
  TaskType: number;
  /** 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人的回复邮件将会发送失败。 */
  ReplyToAddresses?: string;
  /** 使用模板发送时，填写的模板相关参数 */
  Template?: Template;
  /** 已废弃 */
  Simple?: Simple;
  /** 需要发送附件时，填写附件相关参数（暂未支持） */
  Attachments?: Attachment[];
  /** 周期发送任务的必要参数 */
  CycleParam?: CycleEmailParam;
  /** 定时发送任务的必要参数 */
  TimedParam?: TimedEmailParam;
  /** 退订链接选项 0: 不加入退订链接 1: 简体中文 2: 英文 3: 繁体中文 4: 西班牙语 5: 法语 6: 德语 7: 日语 8: 韩语 9: 阿拉伯语 */
  Unsubscribe?: string;
  /** 是否添加广告标识 0:不添加 1:添加到subject前面，2:添加到subject后面 */
  ADLocation?: number;
}

declare interface BatchSendEmailResponse {
  /** 发送任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmailAddressRequest {
  /** 您的发信地址（发信地址总数上限为10个） */
  EmailAddress: string;
  /** 发件人别名 */
  EmailSenderName?: string;
}

declare interface CreateEmailAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmailIdentityRequest {
  /** 您的发信域名，建议使用三级以上域名。例如：mail.qcloud.com。 */
  EmailIdentity: string;
}

declare interface CreateEmailIdentityResponse {
  /** 验证类型。固定值：DOMAIN */
  IdentityType?: string;
  /** 是否已通过验证 */
  VerifiedForSendingStatus?: boolean;
  /** 需要配置的DNS信息 */
  Attributes?: DNSAttributes[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmailTemplateRequest {
  /** 模板名称 */
  TemplateName: string;
  /** 模板内容 */
  TemplateContent: TemplateContent;
}

declare interface CreateEmailTemplateResponse {
  /** 模板id */
  TemplateID: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReceiverDetailRequest {
  /** 收件人列表ID */
  ReceiverId: number;
  /** 邮箱 */
  Emails: string[];
}

declare interface CreateReceiverDetailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReceiverDetailWithDataRequest {
  /** 收件人列表ID */
  ReceiverId: number;
  /** 收信人邮箱以及模板参数，数组形式。收件人个数限制20000个以内。 */
  Datas: ReceiverInputData[];
}

declare interface CreateReceiverDetailWithDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReceiverRequest {
  /** 收件人列表名称 */
  ReceiversName: string;
  /** 收件人列表描述 */
  Desc?: string;
}

declare interface CreateReceiverResponse {
  /** 收件人列表id，后续根据收件人列表id上传收件人地址 */
  ReceiverId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBlackListRequest {
  /** 需要清除的黑名单邮箱列表，数组长度至少为1 */
  EmailAddressList: string[];
}

declare interface DeleteBlackListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEmailAddressRequest {
  /** 发信地址 */
  EmailAddress: string;
}

declare interface DeleteEmailAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEmailIdentityRequest {
  /** 发信域名 */
  EmailIdentity: string;
}

declare interface DeleteEmailIdentityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEmailTemplateRequest {
  /** 模板ID */
  TemplateID: number;
}

declare interface DeleteEmailTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReceiverRequest {
  /** 收件人列表id，创建收件人列表时会返回 */
  ReceiverId: number;
}

declare interface DeleteReceiverResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetEmailIdentityRequest {
  /** 发信域名 */
  EmailIdentity: string;
}

declare interface GetEmailIdentityResponse {
  /** 验证类型。固定值：DOMAIN */
  IdentityType?: string;
  /** 是否已通过验证 */
  VerifiedForSendingStatus?: boolean;
  /** DNS配置详情 */
  Attributes?: DNSAttributes[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetEmailTemplateRequest {
  /** 模板ID */
  TemplateID: number;
}

declare interface GetEmailTemplateResponse {
  /** 模板内容数据 */
  TemplateContent: TemplateContent;
  /** 模板状态 0-审核通过 1-待审核 2-审核拒绝 */
  TemplateStatus: number;
  /** 模板名称 */
  TemplateName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSendEmailStatusRequest {
  /** 发送的日期，必填。仅支持查询某个日期，不支持范围查询。 */
  RequestDate: string;
  /** 偏移量。默认为0 */
  Offset: number;
  /** 拉取最大条数，最多 100。 */
  Limit: number;
  /** SendMail接口返回的MessageId字段。 */
  MessageId?: string;
  /** 收件人邮箱。 */
  ToEmailAddress?: string;
}

declare interface GetSendEmailStatusResponse {
  /** 邮件发送状态列表 */
  EmailStatusList?: SendEmailStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetStatisticsReportRequest {
  /** 开始日期 */
  StartDate: string;
  /** 结束日期 */
  EndDate: string;
  /** 发信域名 */
  Domain?: string;
  /** 收件方邮箱类型，例如gmail.com */
  ReceivingMailboxType?: string;
}

declare interface GetStatisticsReportResponse {
  /** 发信统计报告，按天 */
  DailyVolumes: Volume[];
  /** 发信统计报告，总览 */
  OverallVolume: Volume;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListBlackEmailAddressRequest {
  /** 开始日期，格式为YYYY-MM-DD */
  StartDate: string;
  /** 结束日期，格式为YYYY-MM-DD */
  EndDate: string;
  /** 规范，配合Offset使用 */
  Limit: number;
  /** 规范，配合Limit使用，Limit最大取值为100 */
  Offset: number;
  /** 可以指定邮箱进行查询 */
  EmailAddress?: string;
  /** 可以指定任务ID进行查询 */
  TaskID?: string;
}

declare interface ListBlackEmailAddressResponse {
  /** 黑名单列表 */
  BlackList?: BlackEmailAddress[];
  /** 黑名单总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListEmailAddressRequest {
}

declare interface ListEmailAddressResponse {
  /** 发信地址列表详情 */
  EmailSenders?: EmailSender[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListEmailIdentitiesRequest {
}

declare interface ListEmailIdentitiesResponse {
  /** 发信域名列表 */
  EmailIdentities: EmailIdentity[];
  /** 最大信誉等级 */
  MaxReputationLevel: number;
  /** 单域名最高日发送量 */
  MaxDailyQuota: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListEmailTemplatesRequest {
  /** 获取模板数据量，用于分页 */
  Limit: number;
  /** 获取模板偏移值，用于分页 */
  Offset: number;
}

declare interface ListEmailTemplatesResponse {
  /** 邮件模板列表 */
  TemplatesMetadata: TemplatesMetadata[];
  /** 模板总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListReceiversRequest {
  /** 偏移量，整型，从0开始 */
  Offset: number;
  /** 限制数目，整型，不超过100 */
  Limit: number;
  /** 列表状态(1 待上传 2 上传中 3传完成)，若查询所有就不传这个字段 */
  Status?: number;
  /** 列表名称的关键字，模糊查询 */
  KeyWord?: string;
}

declare interface ListReceiversResponse {
  /** 总数 */
  TotalCount: number;
  /** 数据记录 */
  Data: ReceiverData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSendTasksRequest {
  /** 偏移量，整型，从0开始，0代表跳过0行 */
  Offset: number;
  /** 限制数目，整型,不超过100 */
  Limit: number;
  /** 任务状态 1 待开始 5 发送中 6 今日暂停发送 7 发信异常 10 发送完成。查询所有状态，则不传这个字段 */
  Status?: number;
  /** 收件人列表ID */
  ReceiverId?: number;
  /** 任务类型 1即时 2定时 3周期，查询所有类型则不传这个字段 */
  TaskType?: number;
}

declare interface ListSendTasksResponse {
  /** 总数 */
  TotalCount: number;
  /** 数据记录 */
  Data: SendTaskData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendEmailRequest {
  /** 发信邮件地址。请填写发件人邮箱地址，例如：noreply@mail.qcloud.com如需填写发件人说明，请按照如下方式： 别名 <邮箱地址> */
  FromEmailAddress: string;
  /** 收信人邮箱地址，最多支持群发50人。注意：邮件内容会显示所有收件人地址，非群发邮件请多次调用API发送。 */
  Destination: string[];
  /** 邮件主题 */
  Subject: string;
  /** 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人的回复邮件将会发送失败。 */
  ReplyToAddresses?: string;
  /** 抄送人邮箱地址，最多支持抄送20人。 */
  Cc?: string[];
  /** 密送人邮箱地址，最多支持抄送20人。 */
  Bcc?: string[];
  /** 使用模板发送时，填写的模板相关参数。因 Simple 已经废除使用，Template 为必填项 */
  Template?: Template;
  /** 已废弃 */
  Simple?: Simple;
  /** 需要发送附件时，填写附件相关参数。腾讯云接口请求最大支持 8M 的请求包，附件内容经过 Base64 预期扩大1.5倍，应该控制所有附件的总大小最大在 4M 以内，整体请求超出 8M 时接口会返回错误 */
  Attachments?: Attachment[];
  /** 退订链接选项 0: 不加入退订链接 1: 简体中文 2: 英文 3: 繁体中文 4: 西班牙语 5: 法语 6: 德语 7: 日语 8: 韩语 9: 阿拉伯语 */
  Unsubscribe?: string;
  /** 邮件触发类型 0:非触发类，默认类型，营销类邮件、非即时类邮件等选择此类型 1:触发类，验证码等即时发送类邮件，若邮件超过一定大小，系统会自动选择非触发类型通道 */
  TriggerType?: number;
}

declare interface SendEmailResponse {
  /** 接受消息生成的唯一消息标识符。 */
  MessageId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateEmailIdentityRequest {
  /** 请求验证的域名 */
  EmailIdentity: string;
}

declare interface UpdateEmailIdentityResponse {
  /** 验证类型。固定值：DOMAIN */
  IdentityType?: string;
  /** 是否已通过验证 */
  VerifiedForSendingStatus?: boolean;
  /** 需要配置的DNS信息 */
  Attributes?: DNSAttributes[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateEmailSmtpPassWordRequest {
  /** smtp密码，长度限制64 */
  Password: string;
  /** 发信邮箱,长度限制128 */
  EmailAddress: string;
}

declare interface UpdateEmailSmtpPassWordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateEmailTemplateRequest {
  /** 模板内容 */
  TemplateContent: TemplateContent;
  /** 模板ID */
  TemplateID: number;
  /** 模板名字 */
  TemplateName: string;
}

declare interface UpdateEmailTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ses 邮件推送} */
declare interface Ses {
  (): Versions;
  /** 批量发送邮件 {@link BatchSendEmailRequest} {@link BatchSendEmailResponse} */
  BatchSendEmail(data: BatchSendEmailRequest, config?: AxiosRequestConfig): AxiosPromise<BatchSendEmailResponse>;
  /** 新建发信地址 {@link CreateEmailAddressRequest} {@link CreateEmailAddressResponse} */
  CreateEmailAddress(data: CreateEmailAddressRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmailAddressResponse>;
  /** 新建发信域名 {@link CreateEmailIdentityRequest} {@link CreateEmailIdentityResponse} */
  CreateEmailIdentity(data: CreateEmailIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmailIdentityResponse>;
  /** 创建邮件模板 {@link CreateEmailTemplateRequest} {@link CreateEmailTemplateResponse} */
  CreateEmailTemplate(data: CreateEmailTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmailTemplateResponse>;
  /** 创建收件人列表 {@link CreateReceiverRequest} {@link CreateReceiverResponse} */
  CreateReceiver(data: CreateReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReceiverResponse>;
  /** 添加收件人地址 {@link CreateReceiverDetailRequest} {@link CreateReceiverDetailResponse} */
  CreateReceiverDetail(data: CreateReceiverDetailRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReceiverDetailResponse>;
  /** 添加收件人地址附带模板参数 {@link CreateReceiverDetailWithDataRequest} {@link CreateReceiverDetailWithDataResponse} */
  CreateReceiverDetailWithData(data: CreateReceiverDetailWithDataRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReceiverDetailWithDataResponse>;
  /** 删除收件人黑名单 {@link DeleteBlackListRequest} {@link DeleteBlackListResponse} */
  DeleteBlackList(data: DeleteBlackListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBlackListResponse>;
  /** 删除发信地址 {@link DeleteEmailAddressRequest} {@link DeleteEmailAddressResponse} */
  DeleteEmailAddress(data: DeleteEmailAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEmailAddressResponse>;
  /** 删除发信域名 {@link DeleteEmailIdentityRequest} {@link DeleteEmailIdentityResponse} */
  DeleteEmailIdentity(data: DeleteEmailIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEmailIdentityResponse>;
  /** 删除发信模板 {@link DeleteEmailTemplateRequest} {@link DeleteEmailTemplateResponse} */
  DeleteEmailTemplate(data: DeleteEmailTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEmailTemplateResponse>;
  /** 删除收件人列表 {@link DeleteReceiverRequest} {@link DeleteReceiverResponse} */
  DeleteReceiver(data: DeleteReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReceiverResponse>;
  /** 获取域名配置详情 {@link GetEmailIdentityRequest} {@link GetEmailIdentityResponse} */
  GetEmailIdentity(data: GetEmailIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<GetEmailIdentityResponse>;
  /** 获取模板详情 {@link GetEmailTemplateRequest} {@link GetEmailTemplateResponse} */
  GetEmailTemplate(data: GetEmailTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<GetEmailTemplateResponse>;
  /** 获取邮件发送的状态 {@link GetSendEmailStatusRequest} {@link GetSendEmailStatusResponse} */
  GetSendEmailStatus(data: GetSendEmailStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetSendEmailStatusResponse>;
  /** 获取发送统计数据 {@link GetStatisticsReportRequest} {@link GetStatisticsReportResponse} */
  GetStatisticsReport(data: GetStatisticsReportRequest, config?: AxiosRequestConfig): AxiosPromise<GetStatisticsReportResponse>;
  /** 获取黑名单邮箱地址 {@link ListBlackEmailAddressRequest} {@link ListBlackEmailAddressResponse} */
  ListBlackEmailAddress(data: ListBlackEmailAddressRequest, config?: AxiosRequestConfig): AxiosPromise<ListBlackEmailAddressResponse>;
  /** 获取发信地址列表 {@link ListEmailAddressRequest} {@link ListEmailAddressResponse} */
  ListEmailAddress(data?: ListEmailAddressRequest, config?: AxiosRequestConfig): AxiosPromise<ListEmailAddressResponse>;
  /** 获取当前发信域名列表 {@link ListEmailIdentitiesRequest} {@link ListEmailIdentitiesResponse} */
  ListEmailIdentities(data?: ListEmailIdentitiesRequest, config?: AxiosRequestConfig): AxiosPromise<ListEmailIdentitiesResponse>;
  /** 获取当前邮件模板列表 {@link ListEmailTemplatesRequest} {@link ListEmailTemplatesResponse} */
  ListEmailTemplates(data: ListEmailTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<ListEmailTemplatesResponse>;
  /** 查询收件人列表 {@link ListReceiversRequest} {@link ListReceiversResponse} */
  ListReceivers(data: ListReceiversRequest, config?: AxiosRequestConfig): AxiosPromise<ListReceiversResponse>;
  /** 查询发送任务 {@link ListSendTasksRequest} {@link ListSendTasksResponse} */
  ListSendTasks(data: ListSendTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListSendTasksResponse>;
  /** 发送邮件 {@link SendEmailRequest} {@link SendEmailResponse} */
  SendEmail(data: SendEmailRequest, config?: AxiosRequestConfig): AxiosPromise<SendEmailResponse>;
  /** 请求验证 {@link UpdateEmailIdentityRequest} {@link UpdateEmailIdentityResponse} */
  UpdateEmailIdentity(data: UpdateEmailIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEmailIdentityResponse>;
  /** 设置邮箱的smtp密码 {@link UpdateEmailSmtpPassWordRequest} {@link UpdateEmailSmtpPassWordResponse} */
  UpdateEmailSmtpPassWord(data: UpdateEmailSmtpPassWordRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEmailSmtpPassWordResponse>;
  /** 更新邮件模板 {@link UpdateEmailTemplateRequest} {@link UpdateEmailTemplateResponse} */
  UpdateEmailTemplate(data: UpdateEmailTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEmailTemplateResponse>;
}

export declare type Versions = ["2020-10-02"];

export default Ses;
