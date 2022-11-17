/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用相关信息 */
declare interface Agent {
}

/** 参与者信息 */
declare interface ApproverInfo {
  /** 参与者类型：0：企业1：个人3：企业静默签署注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。 */
  ApproverType: number;
  /** 本环节需要操作人的名字 */
  ApproverName: string;
  /** 本环节需要操作人的手机号 */
  ApproverMobile: string;
  /** 本环节操作人签署控件配置 */
  SignComponents: Component[];
  /** 如果是企业,则为企业的名字 */
  OrganizationName?: string;
  /** 身份证号 */
  ApproverIdCardNumber?: string;
  /** 证件类型 ID_CARD 身份证HONGKONG_AND_MACAO 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证) */
  ApproverIdCardType?: string;
  /** sms--短信，none--不通知 */
  NotifyType?: string;
  /** 1--收款人、2--开具人、3--见证人 */
  ApproverRole?: number;
  /** 签署意愿确认渠道,WEIXINAPP:人脸识别 */
  VerifyChannel?: string[];
  /** 合同的强制预览时间：3~300s，未指定则按合同页数计算 */
  PreReadTime?: number;
  /** 签署人userId，传此字段则不用传姓名、手机号 */
  UserId?: string;
  /** 签署人用户来源,企微侧用户请传入：WEWORKAPP */
  ApproverSource?: string;
  /** 客户自定义签署人标识，64位长度，保证唯一，非企微场景不使用此字段 */
  CustomApproverTag?: string;
  /** 签署人个性化能力值 */
  ApproverOption?: ApproverOption;
}

/** 签署人个性化能力信息 */
declare interface ApproverOption {
  /** 是否可以拒签 false-可以拒签,默认 true-不可以拒签 */
  NoRefuse?: boolean;
  /** 是否可以转发 false-可以转发,默认 true-不可以转发 */
  NoTransfer?: boolean;
}

/** 指定签署人限制项 */
declare interface ApproverRestriction {
  /** 指定签署人名字 */
  Name?: string;
  /** 指定签署人手机号 */
  Mobile?: string;
  /** 指定签署人证件类型 */
  IdCardType?: string;
  /** 指定签署人证件号码 */
  IdCardNumber?: string;
}

/** 授权用户 */
declare interface AuthorizedUser {
  /** 用户id */
  UserId: string;
}

/** 此结构体 (Caller) 用于描述调用方属性。 */
declare interface Caller {
  /** 应用号 */
  ApplicationId?: string;
  /** 主机构ID */
  OrganizationId?: string;
  /** 经办人的用户ID */
  OperatorId?: string;
  /** 下属机构ID */
  SubOrganizationId?: string;
}

/** 抄送信息 */
declare interface CcInfo {
  /** 被抄送人手机号 */
  Mobile?: string;
}

/** 模板控件信息 */
declare interface Component {
  /** 如果是Component控件类型，则可选的字段为：TEXT - 普通文本控件；MULTI_LINE_TEXT - 多行文本控件；CHECK_BOX - 勾选框控件；FILL_IMAGE - 图片控件；DYNAMIC_TABLE - 动态表格控件；ATTACHMENT - 附件控件；SELECTOR - 选择器控件；DATE - 日期控件；默认是格式化为xxxx年xx月xx日；DISTRICT - 省市区行政区划控件；如果是SignComponent控件类型，则可选的字段为SIGN_SEAL - 签署印章控件；SIGN_DATE - 签署日期控件；DATE， 日期控件，默认是格式化为xxxx年xx月xx日SIGN_SIGNATURE - 用户签名控件；SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight表单域的控件不能作为印章和签名控件 */
  ComponentType: string;
  /** 参数控件宽度，单位pt */
  ComponentWidth: number;
  /** 参数控件高度，单位pt */
  ComponentHeight: number;
  /** 参数控件所在页码，取值为：1-N */
  ComponentPage: number;
  /** 参数控件X位置，单位pt */
  ComponentPosX: number;
  /** 参数控件Y位置，单位pt */
  ComponentPosY: number;
  /** 控件所属文件的序号（模板中的resourceId排列序号，取值为：0-N） */
  FileIndex: number;
  /** GenerateMode==KEYWORD 指定关键字 */
  ComponentId?: string;
  /** GenerateMode==FIELD 指定表单域名称 */
  ComponentName?: string;
  /** 是否必选，默认为false */
  ComponentRequired?: boolean;
  /** 扩展参数：为JSON格式。ComponentType为FILL_IMAGE时，支持以下参数：NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true: 不居中FillMethod: int. 填充方式。0-铺满（默认）；1-等比例缩放ComponentType为SIGN_SIGNATURE类型可以控制签署方式{“ComponentTypeLimit”: [“xxx”]}xxx可以为：HANDWRITE – 手写签名BORDERLESS_ESIGN – 自动生成无边框腾讯体OCR_ESIGN -- AI智能识别手写签名ESIGN -- 个人印章类型如：{“ComponentTypeLimit”: [“BORDERLESS_ESIGN”]} */
  ComponentExtra?: string;
  /** 控件关联的签署人ID */
  ComponentRecipientId?: string;
  /** 控件填充vaule，ComponentType和传入值类型对应关系：TEXT - 文本内容MULTI_LINE_TEXT - 文本内容CHECK_BOX - true/falseFILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取SELECTOR - 选项值DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525 */
  ComponentValue?: string;
  /** 是否是表单域类型，默认不存在 */
  IsFormType?: boolean;
  /** NORMAL 正常模式，使用坐标制定签署控件位置FIELD 表单域，需使用ComponentName指定表单域名称KEYWORD 关键字，使用ComponentId指定关键字 */
  GenerateMode?: string;
  /** 日期控件类型字号 */
  ComponentDateFontSize?: number;
  /** 指定关键字时横坐标偏移量，单位pt */
  OffsetX?: number;
  /** 指定关键字时纵坐标偏移量，单位pt */
  OffsetY?: number;
  /** 指定关键字排序规则 */
  KeywordOrder?: string;
  /** 指定关键字页码 */
  KeywordPage?: number;
  /** 关键字位置模式 */
  RelativeLocation?: string;
  /** 关键字索引 */
  KeywordIndexes?: number[];
}

/** 创建员工的结果 */
declare interface CreateStaffResult {
  /** 创建员工的成功列表 */
  SuccessEmployeeData: SuccessCreateStaffData[] | null;
  /** 创建员工的失败列表 */
  FailedEmployeeData: FailedCreateStaffData[] | null;
}

/** 删除员工结果 */
declare interface DeleteStaffsResult {
  /** 删除员工的成功数据 */
  SuccessEmployeeData: SuccessDeleteStaffData[] | null;
  /** 删除员工的失败数据 */
  FailedEmployeeData: FailedDeleteStaffData[] | null;
}

/** 集成版员工部门信息 */
declare interface Department {
  /** 部门id */
  DepartmentId: string;
  /** 部门名称 */
  DepartmentName: string;
}

/** 创建员工的失败数据 */
declare interface FailedCreateStaffData {
  /** 员工名 */
  DisplayName: string;
  /** 员工手机号 */
  Mobile: string;
  /** 失败原因 */
  Reason: string;
}

/** 删除员工失败数据 */
declare interface FailedDeleteStaffData {
  /** 员工在电子签的userId */
  UserId: string | null;
  /** 员工在第三方平台的openId */
  OpenId: string | null;
  /** 失败原因 */
  Reason: string;
}

/** 二期接口返回的模板中文件的信息结构 */
declare interface FileInfo {
  /** 文件Id */
  FileId?: string;
  /** 文件名 */
  FileName?: string;
  /** 文件大小，单位为Byte */
  FileSize?: number;
  /** 文件上传时间，10位时间戳（精确到秒） */
  CreatedOn?: number;
}

/** 下载文件的URL信息 */
declare interface FileUrl {
  /** 下载文件的URL */
  Url: string;
  /** 下载文件的附加信息 */
  Option: string | null;
}

/** 补充签署人信息 */
declare interface FillApproverInfo {
  /** 签署人签署Id */
  RecipientId: string;
  /** 签署人来源WEWORKAPP: 企业微信 */
  ApproverSource: string;
  /** 企业自定义账号IdWEWORKAPP场景下指企业自有应用获取企微明文的userid */
  CustomUserId: string;
}

/** 查询过滤条件 */
declare interface Filter {
  /** 查询过滤条件的Key */
  Key: string;
  /** 查询过滤条件的Value列表 */
  Values: string[];
}

/** 签署人详情信息 */
declare interface FlowApproverDetail {
  /** 签署人信息 */
  ApproveMessage?: string | null;
  /** 签署人名字 */
  ApproveName: string;
  /** 签署人的状态0：还没有发起1：流程中 没有开始处理2：待处理3：签署态4：拒绝态5：过期没人处理6：取消态7：还没有预发起8：待填写9：因为各种原因而终止 */
  ApproveStatus: number;
  /** 模板配置时候的签署人id,与控件绑定 */
  ReceiptId: string;
  /** 客户自定义userId */
  CustomUserId: string | null;
  /** 签署人手机号 */
  Mobile: string;
  /** 签署顺序 */
  SignOrder: number;
  /** 签署人签署时间 */
  ApproveTime: number;
  /** 参与者类型 */
  ApproveType: string | null;
  /** 签署人侧用户来源 */
  ApproverSource: string | null;
  /** 客户自定义签署人标识 */
  CustomApproverTag: string | null;
  /** 签署人企业Id */
  OrganizationId: string | null;
  /** 签署人企业名称 */
  OrganizationName: string | null;
}

/** 流程信息摘要 */
declare interface FlowBrief {
  /** 流程的编号 */
  FlowId: string;
  /** 流程的名称 */
  FlowName: string;
  /** 流程的描述 */
  FlowDescription: string | null;
  /** 流程的类型 */
  FlowType: string;
  /** 流程状态- `0` 还没有发起- `1` 未签署- `2` 部分签署- `3` 已退回- `4` 完成签署- `5` 已过期- `6` 已取消- `7` 还没有预发起- `8` 等待填写- `9` 部分填写- `10` 拒填 */
  FlowStatus: number | null;
  /** 流程创建的时间戳 */
  CreatedOn: number | null;
  /** 拒签或者取消的原因描述 */
  FlowMessage: string | null;
}

/** 创建流程的签署方信息 */
declare interface FlowCreateApprover {
  /** 参与者类型：0：企业1：个人3：企业静默签署注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。 */
  ApproverType: number;
  /** 如果签署方为企业，需要填入企业全称 */
  OrganizationName?: string;
  /** 签署方经办人姓名 */
  ApproverName?: string;
  /** 签署方经办人手机号码 */
  ApproverMobile?: string;
  /** 签署方经办人证件类型ID_CARD 身份证HONGKONG_AND_MACAO 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证) */
  ApproverIdCardType?: string;
  /** 签署方经办人证件号码 */
  ApproverIdCardNumber?: string;
  /** 签署方经办人在模板中的角色ID */
  RecipientId?: string;
  /** 签署意愿确认渠道,WEIXINAPP:人脸识别 */
  VerifyChannel?: string[];
  /** 是否发送短信，sms--短信通知，none--不通知，默认为sms；发起方=签署方时不发送短信 */
  NotifyType?: string;
  /** 签署前置条件：是否需要阅读全文，默认为不需要 */
  IsFullText?: boolean;
  /** 签署前置条件：阅读时长限制，单位秒，默认为不需要 */
  PreReadTime?: number;
  /** 签署方经办人的用户ID,和签署方经办人姓名+手机号+证件必须有一个。 */
  UserId?: string;
  /** 当前只支持true，默认为true */
  Required?: boolean;
  /** 签署人用户来源,企微侧用户请传入：WEWORKAPP */
  ApproverSource?: string;
  /** 客户自定义签署人标识，64位长度，保证唯一。非企微场景不使用此字段 */
  CustomApproverTag?: string;
  /** 快速注册相关信息，目前暂未开放！ */
  RegisterInfo?: RegisterInfo;
  /** 签署人个性化能力值 */
  ApproverOption?: ApproverOption;
}

/** 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息 */
declare interface FlowDetailInfo {
  /** 合同(流程)的Id */
  FlowId: string;
  /** 合同(流程)的名字 */
  FlowName: string;
  /** 合同(流程)的类型 */
  FlowType: string | null;
  /** 合同(流程)的状态1：未签署2：部分签署3：已退回4：完成签署5：已过期6：已取消 */
  FlowStatus: number;
  /** 合同(流程)的信息 */
  FlowMessage: string | null;
  /** 流程的描述 */
  FlowDescription: string | null;
  /** 合同(流程)的创建时间戳 */
  CreatedOn: number;
  /** 合同(流程)的签署人数组 */
  FlowApproverInfos: FlowApproverDetail[];
}

/** 电子文档的控件填充信息 */
declare interface FormField {
  /** 控件填充vaule，ComponentType和传入值类型对应关系：TEXT - 文本内容MULTI_LINE_TEXT - 文本内容CHECK_BOX - true/falseFILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取SELECTOR - 选项值DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525 */
  ComponentValue: string;
  /** 控件id，和ComponentName选择一项传入即可 */
  ComponentId?: string;
  /** 控件名字，最大长度不超过30字符，和ComponentId选择一项传入即可 */
  ComponentName?: string;
}

/** 持有的电子印章信息 */
declare interface OccupiedSeal {
  /** 电子印章编号 */
  SealId: string;
  /** 电子印章名称 */
  SealName: string;
  /** 电子印章授权时间戳 */
  CreateOn: number;
  /** 电子印章授权人 */
  Creator: string;
  /** 电子印章策略Id */
  SealPolicyId: string;
  /** 印章状态，有以下六种：CHECKING（审核中）SUCCESS（已启用）FAIL（审核拒绝）CHECKING-SADM（待超管审核）DISABLE（已停用）STOPPED（已终止） */
  SealStatus: string;
  /** 审核失败原因 */
  FailReason: string | null;
  /** 印章图片url，5分钟内有效 */
  Url: string;
  /** 印章类型 */
  SealType: string;
  /** 用印申请是否为永久授权 */
  IsAllTime: boolean;
  /** 授权人列表 */
  AuthorizedUsers: AuthorizedUser[] | null;
}

/** 机构信息 */
declare interface OrganizationInfo {
  /** 机构在平台的编号 */
  OrganizationId?: string;
  /** 用户渠道 */
  Channel?: string;
  /** 用户在渠道的机构编号 */
  OrganizationOpenId?: string;
  /** 用户真实的IP */
  ClientIp?: string;
  /** 机构的代理IP */
  ProxyIp?: string;
}

/** 合同文件验签单个结果结构体 */
declare interface PdfVerifyResult {
  /** 验签结果 */
  VerifyResult: number;
  /** 签署平台 */
  SignPlatform: string;
  /** 签署人名称 */
  SignerName: string;
  /** 签署时间 */
  SignTime: number;
  /** 签名算法 */
  SignAlgorithm: string;
  /** 签名证书序列号 */
  CertSn: string;
  /** 证书起始时间 */
  CertNotBefore: number;
  /** 证书过期时间 */
  CertNotAfter: number;
  /** 签名域横坐标 */
  ComponentPosX: number;
  /** 签名域纵坐标 */
  ComponentPosY: number;
  /** 签名域宽度 */
  ComponentWidth: number;
  /** 签名域高度 */
  ComponentHeight: number;
  /** 签名域所在页码 */
  ComponentPage: number;
}

/** 签署参与者信息 */
declare interface Recipient {
  /** 签署参与者ID */
  RecipientId?: string;
  /** 参与者类型（ENTERPRISE/INDIVIDUAL） */
  RecipientType?: string;
  /** 描述信息 */
  Description?: string;
  /** 角色名称 */
  RoleName?: string;
  /** 是否需要验证，默认为false */
  RequireValidation?: boolean;
  /** 是否需要签署，默认为true */
  RequireSign?: boolean;
  /** 添加序列 */
  RoutingOrder?: number;
  /** 是否需要发送，默认为true */
  RequireDelivery?: boolean;
  /** 邮箱地址 */
  Email?: string;
  /** 电话号码 */
  Mobile?: string;
  /** 关联的用户ID */
  UserId?: string;
  /** 发送方式（EMAIL/MOBILE） */
  DeliveryMethod?: string;
  /** 附属信息 */
  RecipientExtra?: string;
}

/** 发起流程快速注册相关信息 */
declare interface RegisterInfo {
  /** 法人姓名 */
  LegalName: string;
  /** 社会统一信用代码 */
  Uscc: string;
}

/** 一码多扫签署二维码对象 */
declare interface SignQrCode {
  /** 二维码id */
  QrCodeId: string;
  /** 二维码url */
  QrCodeUrl: string;
  /** 二维码过期时间 */
  ExpiredTime: number;
}

/** 一码多扫签署二维码签署信息 */
declare interface SignUrl {
  /** 小程序签署链接 */
  AppSignUrl: string;
  /** 签署链接有效时间 */
  EffectiveTime: string;
  /** 移动端签署链接 */
  HttpSignUrl: string;
}

/** 企业员工信息 */
declare interface Staff {
  /** 用户在电子签平台的id */
  UserId?: string;
  /** 显示的用户名/昵称 */
  DisplayName?: string;
  /** 用户手机号 */
  Mobile?: string;
  /** 用户邮箱 */
  Email?: string | null;
  /** 用户在第三方平台id */
  OpenId?: string | null;
  /** 员工角色 */
  Roles?: StaffRole[] | null;
  /** 员工部门 */
  Department?: Department | null;
  /** 员工是否实名 */
  Verified?: boolean;
  /** 员工创建时间戳 */
  CreatedOn?: number;
  /** 员工实名时间戳 */
  VerifiedOn?: number | null;
}

/** 集成版企业角色信息 */
declare interface StaffRole {
  /** 角色id */
  RoleId: string | null;
  /** 角色名称 */
  RoleName: string | null;
}

/** 创建员工的成功数据 */
declare interface SuccessCreateStaffData {
  /** 员工名 */
  DisplayName: string;
  /** 员工手机号 */
  Mobile: string;
  /** 员工在电子签平台的id */
  UserId: string;
}

/** 删除员工的成功数据 */
declare interface SuccessDeleteStaffData {
  /** 员工名 */
  DisplayName: string;
  /** 员工手机号 */
  Mobile: string;
  /** 员工在电子签平台的id */
  UserId: string;
}

/** 二期接口返回的模板的信息结构 */
declare interface TemplateInfo {
  /** 模板ID */
  TemplateId?: string;
  /** 模板名字 */
  TemplateName?: string;
  /** 模板描述信息 */
  Description?: string;
  /** 模板关联的资源IDs */
  DocumentResourceIds?: string[];
  /** 返回的文件信息结构 */
  FileInfos?: FileInfo[];
  /** 附件关联的资源ID是 */
  AttachmentResourceIds?: string[];
  /** 签署顺序 */
  SignOrder?: number[];
  /** 签署参与者的信息 */
  Recipients?: Recipient[];
  /** 模板信息结构 */
  Components?: Component[];
  /** 签署区模板信息结构 */
  SignComponents?: Component[];
  /** 模板状态(-1:不可用；0:草稿态；1:正式态) */
  Status?: number;
  /** 模板的创建人 */
  Creator?: string;
  /** 模板创建的时间戳（精确到秒） */
  CreatedOn?: number;
  /** 发起人角色信息 */
  Promoter?: Recipient;
}

/** 此结构体 (UploadFile) 用于描述多文件上传的文件信息。 */
declare interface UploadFile {
  /** Base64编码后的文件内容 */
  FileBody: string;
  /** 文件名，最大长度不超过200字符 */
  FileName?: string;
}

/** 用户信息 */
declare interface UserInfo {
  /** 用户在平台的编号 */
  UserId?: string;
  /** 用户的来源渠道 */
  Channel?: string;
  /** 用户在渠道的编号 */
  OpenId?: string;
  /** 用户真实IP */
  ClientIp?: string;
  /** 用户代理IP */
  ProxyIp?: string;
}

declare interface CancelFlowRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程id */
  FlowId: string;
  /** 撤销原因，最长200个字符； */
  CancelMessage: string;
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface CancelFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CancelMultiFlowSignQRCodeRequest {
  /** 用户信息 */
  Operator: UserInfo;
  /** 二维码id */
  QrCodeId: string;
  /** 应用信息 */
  Agent?: Agent;
}

declare interface CancelMultiFlowSignQRCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBatchCancelFlowUrlRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 需要执行撤回的签署流程id数组，最多100个 */
  FlowIds: string[];
}

declare interface CreateBatchCancelFlowUrlResponse {
  /** 批量撤回签署流程链接 */
  BatchCancelFlowUrl: string;
  /** 签署流程撤回失败信息 */
  FailMessages: string[];
  /** 签署连接过期时间字符串：年月日-时分秒 */
  UrlExpireOn: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateConvertTaskApiRequest {
  /** 资源类型 取值范围doc,docx,html,excel之一 */
  ResourceType: string;
  /** 资源名称，长度限制为256字符 */
  ResourceName: string;
  /** 资源Id，通过UploadFiles获取 */
  ResourceId: string;
  /** 操作者信息 */
  Operator?: UserInfo;
  /** 应用号信息 */
  Agent?: Agent;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface CreateConvertTaskApiResponse {
  /** 转换任务Id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDocumentRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程编号,由CreateFlow接口返回 */
  FlowId: string;
  /** 用户上传的模板ID */
  TemplateId: string;
  /** 文件名列表，单个文件名最大长度200个字符，暂时仅支持单文件发起 */
  FileNames: string[];
  /** 内容控件信息数组 */
  FormFields?: FormField[];
  /** 是否需要生成预览文件 默认不生成；预览链接有效期300秒； */
  NeedPreview?: boolean;
  /** 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效, */
  PreviewType?: number;
  /** 应用相关信息 */
  Agent?: Agent;
  /** 客户端Token，保持接口幂等性,最大长度64个字符 */
  ClientToken?: string;
}

declare interface CreateDocumentResponse {
  /** 签署流程电子文档ID */
  DocumentId: string;
  /** 签署流程文件的预览地址, 5分钟内有效。仅当NeedPreview为true 时返回 */
  PreviewFileUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFlowApproversRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程编号 */
  FlowId: string;
  /** 补充签署人信息 */
  Approvers: FillApproverInfo[];
}

declare interface CreateFlowApproversResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFlowByFilesRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程名称,最大长度200个字符 */
  FlowName: string;
  /** 签署参与者信息，最大限制50方 */
  Approvers: ApproverInfo[];
  /** 签署pdf文件的资源编号列表，通过UploadFiles接口获取，暂时仅支持单文件发起 */
  FileIds: string[];
  /** 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符 */
  FlowType?: string;
  /** 经办人内容控件配置 */
  Components?: Component[];
  /** 被抄送人的信息列表。注:此功能为白名单功能，若有需要，请联系电子签客服开白使用 */
  CcInfos?: CcInfo[];
  /** 是否需要预览，true：预览模式，false：非预览（默认）；预览链接有效期300秒；注：如果使用“预览模式”，出参会返回合同预览链接 PreviewUrl，不会正式发起合同，且出参不会返回签署流程编号 FlowId；如果使用“非预览”，则会正常返回签署流程编号 FlowId，不会生成合同预览链接 PreviewUrl。 */
  NeedPreview?: boolean;
  /** 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效, */
  PreviewType?: number;
  /** 签署流程的签署截止时间。值为unix时间戳,精确到秒,不传默认为当前时间一年后 */
  Deadline?: number;
  /** 发送类型：true：无序签false：有序签注：默认为false（有序签） */
  Unordered?: boolean;
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。若设置为true，审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。 */
  NeedSignReview?: boolean;
  /** 用户自定义字段，回调的时候会进行透传，长度需要小于20480 */
  UserData?: string;
  /** 应用号信息 */
  Agent?: Agent;
  /** 签署人校验方式VerifyCheck: 人脸识别（默认）MobileCheck：手机号验证参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。 */
  ApproverVerifyType?: string;
  /** 签署流程描述,最大长度1000个字符 */
  FlowDescription?: string;
}

declare interface CreateFlowByFilesResponse {
  /** 签署流程编号。注：如入参 是否需要预览 NeedPreview 设置为 true，不会正式发起合同，此处不会有值返回；如入参 是否需要预览 NeedPreview 设置为 false，此处会正常返回签署流程编号 FlowId。 */
  FlowId: string;
  /** 合同预览链接。注：如入参 是否需要预览 NeedPreview 设置为 true，会开启“预览模式”，此处会返回预览链接；如入参 是否需要预览 NeedPreview 设置为 false，此处不会有值返回。 */
  PreviewUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFlowEvidenceReportRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程编号 */
  FlowId: string;
}

declare interface CreateFlowEvidenceReportResponse {
  /** 出证报告 ID */
  ReportId: string | null;
  /** 废除，字段无效 */
  ReportUrl: string | null;
  /** 执行中：EvidenceStatusExecuting成功：EvidenceStatusSuccess失败：EvidenceStatusFailed */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFlowRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程名称,最大长度200个字符 */
  FlowName: string;
  /** 签署流程参与者信息，最大限制50方 */
  Approvers: FlowCreateApprover[];
  /** 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符 */
  FlowType?: string;
  /** 客户端Token，保持接口幂等性,最大长度64个字符 */
  ClientToken?: string;
  /** 暂未开放 */
  RelatedFlowId?: string;
  /** 签署流程的签署截止时间。值为unix时间戳,精确到秒,不传默认为当前时间一年后 */
  DeadLine?: number;
  /** 用户自定义字段，回调的时候会进行透传，长度需要小于20480 */
  UserData?: string;
  /** 签署流程描述,最大长度1000个字符 */
  FlowDescription?: string;
  /** 发送类型：true：无序签false：有序签注：默认为false（有序签），请和模板中的配置保持一致 */
  Unordered?: boolean;
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。若设置为true，审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。 */
  NeedSignReview?: boolean;
  /** 暂未开放 */
  CallbackUrl?: string;
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface CreateFlowResponse {
  /** 签署流程编号 */
  FlowId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFlowSignReviewRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程编号 */
  FlowId: string;
  /** 企业内部审核结果PASS: 通过 REJECT: 拒绝 */
  ReviewType: string;
  /** 审核原因 当ReviewType 是REJECT 时此字段必填,字符串长度不超过200 */
  ReviewMessage?: string;
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface CreateFlowSignReviewResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateIntegrationEmployeesRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 待创建员工的信息，Mobile和DisplayName必填 */
  Employees: Staff[];
}

declare interface CreateIntegrationEmployeesResponse {
  /** 创建员工的结果 */
  CreateEmployeeResult: CreateStaffResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMultiFlowSignQRCodeRequest {
  /** 用户信息 */
  Operator: UserInfo;
  /** 模板ID */
  TemplateId: string;
  /** 签署流程名称，最大长度不超过200字符 */
  FlowName: string;
  /** 最大可发起签署流程份数，默认5份 发起流程数量超过此上限后二维码自动失效 */
  MaxFlowNum?: number;
  /** 签署流程有效天数 默认7天 最高设置不超过30天 */
  FlowEffectiveDay?: number;
  /** 二维码有效天数 默认7天 最高设置不超过90天 */
  QrEffectiveDay?: number;
  /** 限制二维码用户条件 */
  Restrictions?: ApproverRestriction[];
  /** 回调地址,最大长度1000字符串回调时机：用户通过签署二维码发起签署流程时，企业额度不足导致失败 */
  CallbackUrl?: string;
  /** 应用信息 */
  Agent?: Agent;
  /** 限制二维码用户条件（已弃用） */
  ApproverRestrictions?: ApproverRestriction;
}

declare interface CreateMultiFlowSignQRCodeResponse {
  /** 签署二维码对象 */
  QrCode: SignQrCode;
  /** 签署链接对象 */
  SignUrls: SignUrl;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSchemeUrlRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 企业名称 */
  OrganizationName?: string;
  /** 姓名,最大长度50个字符 */
  Name?: string;
  /** 手机号，大陆手机号11位 */
  Mobile?: string;
  /** 链接类型HTTP：跳转电子签小程序的http_url，APP：第三方APP或小程序跳转电子签小程序的path。默认为HTTP类型 */
  EndPoint?: string;
  /** 签署流程编号 (PathType=1时必传) */
  FlowId?: string;
  /** 跳转页面 1: 小程序合同详情 2: 小程序合同列表页 0: 不传, 默认主页 */
  PathType?: number;
  /** 是否自动回跳 true：是， false：否。该参数只针对"APP" 类型的签署链接有效 */
  AutoJumpBack?: boolean;
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface CreateSchemeUrlResponse {
  /** 小程序链接地址 */
  SchemeUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIntegrationEmployeesRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 待移除员工的信息，userId和openId二选一，必填一个 */
  Employees: Staff[];
}

declare interface DeleteIntegrationEmployeesResponse {
  /** 员工删除数据 */
  DeleteEmployeeResult: DeleteStaffsResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFileUrlsRequest {
  /** 调用方用户信息，UserId 必填 */
  Operator: UserInfo;
  /** 文件对应的业务类型，目前支持：- 流程 "FLOW"，如需下载合同文件请选择此项- 模板 "TEMPLATE"- 文档 "DOCUMENT"- 印章 “SEAL” */
  BusinessType: string;
  /** 业务编号的数组，如流程编号、模板编号、文档编号、印章编号。如需下载合同文件请传入FlowId最大支持20个资源 */
  BusinessIds: string[];
  /** 下载后的文件命名，只有FileType为zip的时候生效 */
  FileName?: string;
  /** 文件类型，"JPG", "PDF","ZIP"等 */
  FileType?: string;
  /** 指定资源起始偏移量，默认0 */
  Offset?: number;
  /** 指定资源数量，查询全部资源则传入-1 */
  Limit?: number;
  /** 下载url过期时间，单位秒。0: 按默认值5分钟，允许范围：1s~24x60x60s(1天) */
  UrlTtl?: number;
  /** 暂不开放 */
  CcToken?: string;
  /** 暂不开放 */
  Scene?: string;
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface DescribeFileUrlsResponse {
  /** URL信息 */
  FileUrls: FileUrl[];
  /** URL数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFlowBriefsRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 需要查询的流程ID列表，限制最大20个 */
  FlowIds: string[];
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface DescribeFlowBriefsResponse {
  /** 流程列表 */
  FlowBriefs: FlowBrief[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFlowInfoRequest {
  /** 需要查询的流程ID列表，限制最大100个 */
  FlowIds: string[];
  /** 调用方用户信息 */
  Operator?: UserInfo;
}

declare interface DescribeFlowInfoResponse {
  /** 签署流程信息 */
  FlowDetailInfos: FlowDetailInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFlowTemplatesRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 搜索条件，具体参考Filter结构体。本接口取值：template-id：按照【 **模板唯一标识** 】进行过滤 */
  Filters?: Filter[];
  /** 查询个数，默认20，最大200 */
  Limit?: number;
  /** 查询偏移位置，默认0 */
  Offset?: number;
  /** 查询内容：0-模板列表及详情（默认），1-仅模板列表 */
  ContentType?: number;
  /** 暂未开放 */
  GenerateSource?: number;
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface DescribeFlowTemplatesResponse {
  /** 模板详情列表 */
  Templates: TemplateInfo[];
  /** 查询到的总个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationEmployeesRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 返回最大数量，最大为20 */
  Limit: number;
  /** 查询过滤实名用户，Key为Status，Values为["IsVerified"]根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...] */
  Filters?: Filter[];
  /** 偏移量，默认为0，最大为20000 */
  Offset?: number;
}

declare interface DescribeIntegrationEmployeesResponse {
  /** 员工数据列表 */
  Employees: Staff[] | null;
  /** 偏移量，默认为0，最大为20000 */
  Offset: number | null;
  /** 返回最大数量，最大为20 */
  Limit: number;
  /** 符合条件的员工数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationSealsRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 返回最大数量，最大为100 */
  Limit: number;
  /** 偏移量，默认为0，最大为20000 */
  Offset?: number;
  /** 查询信息类型，为0时不返回授权用户，为1时返回 */
  InfoType?: number;
  /** 印章id（没有输入返回所有） */
  SealId?: string;
}

declare interface DescribeOrganizationSealsResponse {
  /** 在设置了SealId时返回0或1，没有设置时返回公司的总印章数量，可能比返回的印章数组数量多 */
  TotalCount: number;
  /** 查询到的印章结果数组 */
  Seals: OccupiedSeal[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeThirdPartyAuthCodeRequest {
  /** 电子签小程序跳转客户小程序时携带的授权查看码 */
  AuthCode: string;
}

declare interface DescribeThirdPartyAuthCodeResponse {
  /** 用户是否实名，VERIFIED 为实名，UNVERIFIED 未实名 */
  VerifyStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTaskResultApiRequest {
  /** 任务Id，通过CreateConvertTaskApi得到 */
  TaskId: string;
  /** 操作人信息 */
  Operator?: UserInfo;
  /** 应用号信息 */
  Agent?: Agent;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface GetTaskResultApiResponse {
  /** 任务Id */
  TaskId: string;
  /** 任务状态，需要关注的状态0 :NeedTranform - 任务已提交4 :Processing - 文档转换中8 :TaskEnd - 任务处理完成-2 :DownloadFailed - 下载失败-6 :ProcessFailed - 转换失败-13:ProcessTimeout - 转换文件超时 */
  TaskStatus: number;
  /** 状态描述，需要关注的状态NeedTranform - 任务已提交Processing - 文档转换中TaskEnd - 任务处理完成DownloadFailed - 下载失败ProcessFailed - 转换失败ProcessTimeout - 转换文件超时 */
  TaskMessage: string;
  /** 资源Id，也是FileId，用于文件发起使用 */
  ResourceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartFlowRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程编号，由CreateFlow接口返回 */
  FlowId: string;
  /** 客户端Token，保持接口幂等性,最大长度64个字符 */
  ClientToken?: string;
  /** 应用相关信息 */
  Agent?: Agent;
}

declare interface StartFlowResponse {
  /** 返回描述，START-发起成功， REVIEW-提交审核成功，EXECUTING-已提交发起任务 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UploadFilesRequest {
  /** 文件对应业务类型1. TEMPLATE - 模板； 文件类型：.pdf/.doc/.docx/.html2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html3. SEAL - 印章； 文件类型：.jpg/.jpeg/.png */
  BusinessType: string;
  /** 调用方信息 */
  Caller?: Caller;
  /** 上传文件内容数组，最多支持20个文件 */
  FileInfos?: UploadFile[];
  /** 不再使用，上传文件链接数组，最多支持20个URL */
  FileUrls?: string;
  /** 此参数只对 PDF 文件有效。是否将pdf灰色矩阵置白true--是，处理置白false--否，不处理 */
  CoverRect?: boolean;
  /** 文件类型， 默认通过文件内容解析得到文件类型，客户可以显示的说明上传文件的类型。如：PDF 表示上传的文件 xxx.pdf的文件类型是 PDF */
  FileType?: string;
  /** 用户自定义ID数组，与上传文件一一对应 */
  CustomIds?: string[];
}

declare interface UploadFilesResponse {
  /** 文件id数组 */
  FileIds: string[];
  /** 上传成功文件数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyPdfRequest {
  /** 合同Id，流程Id */
  FlowId: string;
  /** 调用方用户信息，userId 必填 */
  Operator?: UserInfo;
}

declare interface VerifyPdfResponse {
  /** 验签结果，1-文件未被篡改，全部签名在腾讯电子签完成； 2-文件未被篡改，部分签名在腾讯电子签完成；3-文件被篡改；4-异常：文件内没有签名域；5-异常：文件签名格式错误 */
  VerifyResult: number;
  /** 验签结果详情,内部状态1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域；5-文件签名格式错误 */
  PdfVerifyResults: PdfVerifyResult[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Ess 腾讯电子签企业版} */
declare interface Ess {
  (): Versions;
  /** {@link CancelFlow 撤销签署流程}({@link CancelFlowRequest 请求参数}): {@link CancelFlowResponse 返回参数} */
  CancelFlow(data: CancelFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CancelFlowResponse>;
  /** {@link CancelMultiFlowSignQRCode 取消一码多扫二维码}({@link CancelMultiFlowSignQRCodeRequest 请求参数}): {@link CancelMultiFlowSignQRCodeResponse 返回参数} */
  CancelMultiFlowSignQRCode(data: CancelMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CancelMultiFlowSignQRCodeResponse>;
  /** {@link CreateBatchCancelFlowUrl 获取批量撤销签署流程链接}({@link CreateBatchCancelFlowUrlRequest 请求参数}): {@link CreateBatchCancelFlowUrlResponse 返回参数} */
  CreateBatchCancelFlowUrl(data: CreateBatchCancelFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchCancelFlowUrlResponse>;
  /** {@link CreateConvertTaskApi 创建文件转换任务}({@link CreateConvertTaskApiRequest 请求参数}): {@link CreateConvertTaskApiResponse 返回参数} */
  CreateConvertTaskApi(data: CreateConvertTaskApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConvertTaskApiResponse>;
  /** {@link CreateDocument 创建电子文档}({@link CreateDocumentRequest 请求参数}): {@link CreateDocumentResponse 返回参数} */
  CreateDocument(data: CreateDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocumentResponse>;
  /** {@link CreateFlow 创建签署流程}({@link CreateFlowRequest 请求参数}): {@link CreateFlowResponse 返回参数} */
  CreateFlow(data: CreateFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowResponse>;
  /** {@link CreateFlowApprovers 补充签署流程本企业签署人信息}({@link CreateFlowApproversRequest 请求参数}): {@link CreateFlowApproversResponse 返回参数} */
  CreateFlowApprovers(data: CreateFlowApproversRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowApproversResponse>;
  /** {@link CreateFlowByFiles 用PDF文件创建签署流程}({@link CreateFlowByFilesRequest 请求参数}): {@link CreateFlowByFilesResponse 返回参数} */
  CreateFlowByFiles(data: CreateFlowByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowByFilesResponse>;
  /** {@link CreateFlowEvidenceReport 创建并返回出证报告}({@link CreateFlowEvidenceReportRequest 请求参数}): {@link CreateFlowEvidenceReportResponse 返回参数} */
  CreateFlowEvidenceReport(data: CreateFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowEvidenceReportResponse>;
  /** {@link CreateFlowSignReview 提交企业签署流程审批结果}({@link CreateFlowSignReviewRequest 请求参数}): {@link CreateFlowSignReviewResponse 返回参数} */
  CreateFlowSignReview(data: CreateFlowSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowSignReviewResponse>;
  /** {@link CreateIntegrationEmployees 创建员工}({@link CreateIntegrationEmployeesRequest 请求参数}): {@link CreateIntegrationEmployeesResponse 返回参数} */
  CreateIntegrationEmployees(data: CreateIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationEmployeesResponse>;
  /** {@link CreateMultiFlowSignQRCode 创建一码多扫流程签署二维码}({@link CreateMultiFlowSignQRCodeRequest 请求参数}): {@link CreateMultiFlowSignQRCodeResponse 返回参数} */
  CreateMultiFlowSignQRCode(data: CreateMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMultiFlowSignQRCodeResponse>;
  /** {@link CreateSchemeUrl 获取小程序跳转链接}({@link CreateSchemeUrlRequest 请求参数}): {@link CreateSchemeUrlResponse 返回参数} */
  CreateSchemeUrl(data: CreateSchemeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSchemeUrlResponse>;
  /** {@link DeleteIntegrationEmployees 移除员工}({@link DeleteIntegrationEmployeesRequest 请求参数}): {@link DeleteIntegrationEmployeesResponse 返回参数} */
  DeleteIntegrationEmployees(data: DeleteIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationEmployeesResponse>;
  /** {@link DescribeFileUrls 查询文件下载URL}({@link DescribeFileUrlsRequest 请求参数}): {@link DescribeFileUrlsResponse 返回参数} */
  DescribeFileUrls(data: DescribeFileUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileUrlsResponse>;
  /** {@link DescribeFlowBriefs 查询流程摘要}({@link DescribeFlowBriefsRequest 请求参数}): {@link DescribeFlowBriefsResponse 返回参数} */
  DescribeFlowBriefs(data: DescribeFlowBriefsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowBriefsResponse>;
  /** {@link DescribeFlowInfo 查询合同详情}({@link DescribeFlowInfoRequest 请求参数}): {@link DescribeFlowInfoResponse 返回参数} */
  DescribeFlowInfo(data: DescribeFlowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowInfoResponse>;
  /** {@link DescribeFlowTemplates 查询模板}({@link DescribeFlowTemplatesRequest 请求参数}): {@link DescribeFlowTemplatesResponse 返回参数} */
  DescribeFlowTemplates(data: DescribeFlowTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowTemplatesResponse>;
  /** {@link DescribeIntegrationEmployees 查询员工信息}({@link DescribeIntegrationEmployeesRequest 请求参数}): {@link DescribeIntegrationEmployeesResponse 返回参数} */
  DescribeIntegrationEmployees(data: DescribeIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationEmployeesResponse>;
  /** {@link DescribeOrganizationSeals 查询企业电子印章}({@link DescribeOrganizationSealsRequest 请求参数}): {@link DescribeOrganizationSealsResponse 返回参数} */
  DescribeOrganizationSeals(data: DescribeOrganizationSealsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationSealsResponse>;
  /** {@link DescribeThirdPartyAuthCode 通过AuthCode查询用户是否实名}({@link DescribeThirdPartyAuthCodeRequest 请求参数}): {@link DescribeThirdPartyAuthCodeResponse 返回参数} */
  DescribeThirdPartyAuthCode(data: DescribeThirdPartyAuthCodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeThirdPartyAuthCodeResponse>;
  /** {@link GetTaskResultApi 查询转换任务状态}({@link GetTaskResultApiRequest 请求参数}): {@link GetTaskResultApiResponse 返回参数} */
  GetTaskResultApi(data: GetTaskResultApiRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskResultApiResponse>;
  /** {@link StartFlow 发起流程}({@link StartFlowRequest 请求参数}): {@link StartFlowResponse 返回参数} */
  StartFlow(data: StartFlowRequest, config?: AxiosRequestConfig): AxiosPromise<StartFlowResponse>;
  /** {@link UploadFiles 多文件上传}({@link UploadFilesRequest 请求参数}): {@link UploadFilesResponse 返回参数} */
  UploadFiles(data: UploadFilesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFilesResponse>;
  /** {@link VerifyPdf 合同文件验签}({@link VerifyPdfRequest 请求参数}): {@link VerifyPdfResponse 返回参数} */
  VerifyPdf(data: VerifyPdfRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyPdfResponse>;
}

export declare type Versions = ["2020-11-11"];

export default Ess;
