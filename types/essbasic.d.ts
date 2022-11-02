/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用相关信息 */
declare interface Agent {
  /** 腾讯电子签颁发给渠道的应用ID，32位字符串 */
  AppId: string;
  /** 渠道/平台合作企业的企业ID，最大64位字符串 */
  ProxyOrganizationOpenId?: string;
  /** 渠道/平台合作企业经办人（操作员） */
  ProxyOperator?: UserInfo;
  /** 腾讯电子签颁发给渠道侧合作企业的应用ID */
  ProxyAppId?: string;
  /** 内部参数，腾讯电子签颁发给渠道侧合作企业的企业ID，不需要传 */
  ProxyOrganizationId?: string;
}

/** 签署人个性化能力信息 */
declare interface ApproverOption {
  /** 是否隐藏一键签署 false-不隐藏,默认 true-隐藏 */
  HideOneKeySign?: boolean;
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

/** 授权出错信息 */
declare interface AuthFailMessage {
  /** 合作企业Id */
  ProxyOrganizationOpenId: string;
  /** 出错信息 */
  Message: string;
}

/** 抄送信息 */
declare interface CcInfo {
  /** 被抄送人手机号，大陆11位手机号 */
  Mobile?: string;
}

/** 此结构体 (Component) 用于描述控件属性。在通过文件发起合同时，对应的component有三种定位方式1. 绝对定位方式2. 表单域(FIELD)定位方式3. 关键字(KEYWORD)定位方式可以参考官网说明https://cloud.tencent.com/document/product/1323/78346 */
declare interface Component {
  /** 控件编号CreateFlowByTemplates发起合同时优先以ComponentId（不为空）填充；否则以ComponentName填充注：当GenerateMode=3时，通过"^"来决定是否使用关键字整词匹配能力。例：当GenerateMode=3时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。创建控件时，此值为空查询时返回完整结构 */
  ComponentId?: string;
  /** 如果是Component控件类型，则可选的字段为：TEXT - 普通文本控件；MULTI_LINE_TEXT - 多行文本控件；CHECK_BOX - 勾选框控件；FILL_IMAGE - 图片控件；DYNAMIC_TABLE - 动态表格控件；ATTACHMENT - 附件控件；SELECTOR - 选择器控件；DATE - 日期控件；默认是格式化为xxxx年xx月xx日如果是SignComponent控件类型，则可选的字段为SIGN_SEAL - 签署印章控件；SIGN_DATE - 签署日期控件；SIGN_SIGNATURE - 用户签名控件；SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight表单域的控件不能作为印章和签名控件 */
  ComponentType?: string;
  /** 控件简称，不能超过30个字符 */
  ComponentName?: string;
  /** 定义控件是否为必填项，默认为false */
  ComponentRequired?: boolean;
  /** 控件关联的签署方id */
  ComponentRecipientId?: string;
  /** 控件所属文件的序号 (文档中文件的排列序号，从0开始) */
  FileIndex?: number;
  /** 控件生成的方式：NORMAL - 普通控件FIELD - 表单域KEYWORD - 关键字 */
  GenerateMode?: string;
  /** 参数控件宽度，默认100，单位px表单域和关键字转换控件不用填 */
  ComponentWidth?: number;
  /** 参数控件高度，默认100，单位px表单域和关键字转换控件不用填 */
  ComponentHeight?: number;
  /** 参数控件所在页码，从1开始 */
  ComponentPage?: number;
  /** 参数控件X位置，单位px */
  ComponentPosX?: number;
  /** 参数控件Y位置，单位px */
  ComponentPosY?: number;
  /** 参数控件样式，json格式表述不同类型的控件会有部分非通用参数TEXT/MULTI_LINE_TEXT控件可以指定1 Font：目前只支持黑体、宋体2 FontSize： 范围12-723 FontAlign： Left/Right/Center，左对齐/居中/右对齐例如：{"FontSize":12} */
  ComponentExtra?: string;
  /** 控件填充vaule，ComponentType和传入值类型对应关系：TEXT - 文本内容MULTI_LINE_TEXT - 文本内容CHECK_BOX - true/falseFILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取SELECTOR - 选项值DATE - 默认是格式化为xxxx年xx月xx日DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525 */
  ComponentValue?: string;
  /** 日期签署控件的字号，默认为 12签署区日期控件会转换成图片格式并带存证，需要通过字体决定图片大小 */
  ComponentDateFontSize?: number;
  /** 控件所属文档的Id, 模块相关接口为空值 */
  DocumentId?: string;
  /** 控件描述，不能超过30个字符 */
  ComponentDescription?: string;
  /** 指定关键字时横坐标偏移量，单位pt */
  OffsetX?: number;
  /** 指定关键字时纵坐标偏移量，单位pt */
  OffsetY?: number;
}

/** 渠道版员工部门信息 */
declare interface Department {
  /** 部门id */
  DepartmentId: string | null;
  /** 部门名称 */
  DepartmentName: string | null;
}

/** 签署流程下载信息 */
declare interface DownloadFlowInfo {
  /** 文件夹名称 */
  FileName: string;
  /** 签署流程的标识数组 */
  FlowIdList: string[];
}

/** 此结构体 (Filter) 用于描述查询过滤条件。 */
declare interface Filter {
  /** 查询过滤条件的Key */
  Key: string;
  /** 查询过滤条件的Value列表 */
  Values: string[];
}

/** 签署人的流程信息明细 */
declare interface FlowApproverDetail {
  /** 模板配置时候的签署人id,与控件绑定 */
  ReceiptId: string;
  /** 渠道侧企业的第三方id */
  ProxyOrganizationOpenId: string | null;
  /** 渠道侧企业操作人的第三方id */
  ProxyOperatorOpenId: string;
  /** 渠道侧企业名称 */
  ProxyOrganizationName: string;
  /** 签署人手机号 */
  Mobile: string;
  /** 签署人签署顺序 */
  SignOrder: number;
  /** 签署人姓名 */
  ApproveName: string | null;
  /** 当前签署人的状态 */
  ApproveStatus: string | null;
  /** 签署人信息 */
  ApproveMessage: string | null;
  /** 签署人签署时间 */
  ApproveTime: number;
  /** 参与者类型 (ORGANIZATION企业/PERSON个人) */
  ApproveType: string | null;
}

/** 创建签署流程签署人入参。其中签署方FlowApproverInfo需要传递的参数非单C、单B、B2C合同，ApproverType、RecipientId（模板发起合同时）必传，建议都传。其他身份标识1-个人：Name、Mobile必传2-渠道子客企业指定经办人：OpenId必传，OrgName必传、OrgOpenId必传；3-渠道合作企业不指定经办人：（暂不支持）4-非渠道合作企业：Name、Mobile必传，OrgName必传，且NotChannelOrganization=True。RecipientId参数：从DescribeTemplates接口中，可以得到模板下的签署方Recipient列表，根据模板自定义的Rolename在此结构体中确定其RecipientId */
declare interface FlowApproverInfo {
  /** 签署人姓名，最大长度50个字符 */
  Name?: string;
  /** 经办人身份证件类型1.ID_CARD 居民身份证2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证3.HONGKONG_AND_MACAO 港澳居民来往内地通行证 */
  IdCardType?: string;
  /** 经办人证件号 */
  IdCardNumber?: string;
  /** 签署人手机号，脱敏显示。大陆手机号为11位，暂不支持海外手机号。 */
  Mobile?: string;
  /** 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传，最大长度64个字符； */
  OrganizationName?: string;
  /** 指定签署人非渠道企业下员工，在ApproverType为ORGANIZATION时指定。默认为false，即签署人位于同一个渠道应用号下； */
  NotChannelOrganization?: boolean;
  /** 用户侧第三方id，最大长度64个字符 */
  OpenId?: string;
  /** 企业签署方在同一渠道下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符； */
  OrganizationOpenId?: string;
  /** 签署人类型，PERSON-个人；PERSON_AUTO_SIGN-个人自动签；ORGANIZATION-企业；ENTERPRISESERVER-企业静默签;注：ENTERPRISESERVER 类型仅用于使用文件创建签署流程（ChannelCreateFlowByFiles）接口； */
  ApproverType?: string;
  /** 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置； */
  RecipientId?: string;
  /** 签署截止时间，默认一年 */
  Deadline?: number;
  /** 签署完回调url，最大长度1000个字符 */
  CallbackUrl?: string;
  /** 使用PDF文件直接发起合同时，签署人指定的签署控件 */
  SignComponents?: Component[];
  /** 个人签署方指定签署控件类型，目前仅支持：OCR_ESIGN(AI智慧手写签名) */
  ComponentLimitType?: string[];
  /** 合同的强制预览时间：3~300s，未指定则按合同页数计算 */
  PreReadTime?: number;
  /** 签署完前端跳转的url，暂未使用 */
  JumpUrl?: string;
  /** 签署人个性化能力值 */
  ApproverOption?: ApproverOption;
  /** 当前签署方进行签署操作是否需要企业内部审批，true 则为需要 */
  ApproverNeedSignReview?: boolean;
}

/** 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息 */
declare interface FlowDetailInfo {
  /** 合同(流程)的Id */
  FlowId: string;
  /** 合同(流程)的名字 */
  FlowName: string;
  /** 合同(流程)的类型 */
  FlowType: string;
  /** 合同(流程)的状态 */
  FlowStatus: string;
  /** 合同(流程)的信息 */
  FlowMessage: string;
  /** 合同(流程)的创建时间戳 */
  CreateOn: number;
  /** 合同(流程)的签署截止时间戳 */
  DeadLine: number;
  /** 用户自定义数据 */
  CustomData: string;
  /** 合同(流程)的签署人数组 */
  FlowApproverInfos: FlowApproverDetail[];
}

/** 合同组中每个子合同的发起信息 */
declare interface FlowFileInfo {
  /** 签署文件资源Id列表，目前仅支持单个文件 */
  FileIds: string[];
  /** 签署流程名称，长度不超过200个字符 */
  FlowName: string;
  /** 签署流程签约方列表，最多不超过5个参与方 */
  FlowApprovers: FlowApproverInfo[];
  /** 签署流程截止时间，十位数时间戳，最大值为33162419560，即3020年 */
  Deadline?: number;
  /** 签署流程的描述，长度不超过1000个字符 */
  FlowDescription?: string;
  /** 签署流程的类型，长度不超过255个字符 */
  FlowType?: string;
  /** 签署流程回调地址，长度不超过255个字符 */
  CallbackUrl?: string;
  /** 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN */
  CustomerData?: string;
  /** 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署 */
  Unordered?: boolean;
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 本企业(发起方企业)是否需要签署审批 */
  NeedSignReview?: boolean;
}

/** 此结构体 (FlowInfo) 用于描述签署流程信息。【动态表格传参说明】当模板的 ComponentType='DYNAMIC_TABLE'时（渠道版），FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充动态表格（支持内容的单元格合并）输入示例```{ "headers":[ { "content":"head1" }, { "content":"head2" }, { "content":"head3" } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```表格参数说明| 名称 | 类型 | 描述 || ------------------- | ------- | ------------------------------------------------- || headers | Array | 表头：不超过10列，不支持单元格合并，字数不超过100 || rowCount | Integer | 表格内容最大行数 || cells.N.rowStart | Integer | 单元格坐标：行起始index || cells.N.rowEnd | Integer | 单元格坐标：行结束index || cells.N.columnStart | Integer | 单元格坐标：列起始index || cells.N.columnEnd | Integer | 单元格坐标：列结束index || cells.N.content | String | 单元格内容，字数不超过100 | */
declare interface FlowInfo {
  /** 合同名字，最大长度200个字符 */
  FlowName: string;
  /** 签署截止时间戳，超过有效签署时间则该签署流程失败，默认一年 */
  Deadline: number;
  /** 模板ID */
  TemplateId?: string;
  /** 多个签署人信息，最大支持50个签署方 */
  FlowApprovers?: FlowApproverInfo[];
  /** 表单K-V对列表 */
  FormFields?: FormField[];
  /** 回调地址，最大长度1000个字符 */
  CallbackUrl?: string;
  /** 合同类型，如：1. “劳务”；2. “销售”；3. “租赁”；4. “其他”，最大长度200个字符 */
  FlowType?: string;
  /** 合同描述，最大长度1000个字符 */
  FlowDescription?: string;
  /** 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN */
  CustomerData?: string;
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 被抄送人的信息列表，抄送功能暂不开放 */
  CcInfos?: CcInfo[];
  /** 发起方企业的签署人进行签署操作是否需要企业内部审批。若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。 */
  NeedSignReview?: boolean;
}

/** 流程对应资源链接信息 */
declare interface FlowResourceUrlInfo {
  /** 流程对应Id */
  FlowId: string | null;
  /** 流程对应资源链接信息数组 */
  ResourceUrlInfos: ResourceUrlInfo[] | null;
}

/** 此结构 (FormField) 用于描述内容控件填充结构。 */
declare interface FormField {
  /** 控件填充vaule，ComponentType和传入值类型对应关系：TEXT - 文本内容MULTI_LINE_TEXT - 文本内容CHECK_BOX - true/falseFILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取SELECTOR - 选项值DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525 */
  ComponentValue: string;
  /** 表单域或控件的ID，跟ComponentName二选一，不能全为空；CreateFlowsByTemplates 接口不使用此字段。 */
  ComponentId?: string | null;
  /** 控件的名字，跟ComponentId二选一，不能全为空 */
  ComponentName?: string | null;
}

/** 机构信息 */
declare interface OrganizationInfo {
  /** 用户在渠道的机构编号 */
  OrganizationOpenId: string;
  /** 用户真实的IP */
  ClientIp: string;
  /** 机构的代理IP */
  ProxyIp: string;
  /** 机构在平台的编号 */
  OrganizationId?: string;
  /** 用户渠道 */
  Channel?: string;
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
  /** 签名类型 */
  SignType: number;
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

/** 合作企业经办人列表信息 */
declare interface ProxyOrganizationOperator {
  /** 经办人ID（渠道颁发），最大长度64个字符 */
  Id: string;
  /** 经办人姓名，最大长度50个字符 */
  Name?: string;
  /** 经办人身份证件类型1.ID_CARD 居民身份证2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证3.HONGKONG_AND_MACAO 港澳居民来往内地通行证 */
  IdCardType?: string;
  /** 经办人证件号 */
  IdCardNumber?: string;
  /** 经办人手机号，大陆手机号输入11位，暂不支持海外手机号。 */
  Mobile?: string;
}

/** 签署参与者信息 */
declare interface Recipient {
  /** 签署人唯一标识 */
  RecipientId?: string;
  /** 签署方类型：ENTERPRISE-企业INDIVIDUAL-自然人 */
  RecipientType?: string;
  /** 描述 */
  Description?: string;
  /** 签署方备注信息 */
  RoleName?: string;
  /** 是否需要校验 */
  RequireValidation?: boolean;
  /** 是否必须填写 */
  RequireSign?: boolean;
  /** 签署类型 */
  SignType?: number;
  /** 签署顺序：数字越小优先级越高 */
  RoutingOrder?: number;
  /** 是否是发起方 */
  IsPromoter?: boolean;
}

/** 资源链接信息 */
declare interface ResourceUrlInfo {
  /** 资源链接地址，过期时间5分钟 */
  Url: string | null;
  /** 资源名称 */
  Name: string | null;
  /** 资源类型 */
  Type: string | null;
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

/** 签署链接内容 */
declare interface SignUrlInfo {
  /** 签署链接，过期时间为30天 */
  SignUrl: string | null;
  /** 合同过期时间 */
  Deadline: number | null;
  /** 当流程为顺序签署此参数有效时，数字越小优先级越高，暂不支持并行签署 可选 */
  SignOrder: number | null;
  /** 签署人编号 */
  SignId: string | null;
  /** 自定义用户编号 */
  CustomUserId: string | null;
  /** 用户姓名 */
  Name: string | null;
  /** 用户手机号码 */
  Mobile: string | null;
  /** 签署参与者机构名字 */
  OrganizationName: string | null;
  /** 参与者类型:ORGANIZATION 企业经办人PERSON 自然人 */
  ApproverType: string | null;
  /** 经办人身份证号 */
  IdCardNumber: string | null;
  /** 签署链接对应流程Id */
  FlowId: string | null;
  /** 企业经办人 用户在渠道的编号 */
  OpenId: string | null;
  /** 合同组签署链接对应的合同组id */
  FlowGroupId: string | null;
}

/** 企业员工信息 */
declare interface Staff {
  /** 员工在电子签平台的id */
  UserId: string;
  /** 显示的员工名 */
  DisplayName: string;
  /** 员工手机号 */
  Mobile: string;
  /** 员工邮箱 */
  Email: string | null;
  /** 员工在第三方平台id */
  OpenId: string | null;
  /** 员工角色 */
  Roles: StaffRole[] | null;
  /** 员工部门 */
  Department: Department | null;
  /** 员工是否实名 */
  Verified: boolean;
  /** 员工创建时间戳 */
  CreatedOn: number;
  /** 员工实名时间戳 */
  VerifiedOn: number;
}

/** 渠道版员工角色信息 */
declare interface StaffRole {
  /** 角色id */
  RoleId: string | null;
  /** 角色名称 */
  RoleName: string | null;
}

/** 同步经办人失败原因 */
declare interface SyncFailReason {
  /** 经办人Id */
  Id: string;
  /** 失败原因例如：Id不符合规范、证件号码不合法等 */
  Message: string | null;
}

/** 复杂文档合成任务的任务信息 */
declare interface TaskInfo {
  /** 合成任务Id，可以通过 ChannelGetTaskResultApi 接口获取任务信息 */
  TaskId: string | null;
  /** 任务状态：READY - 任务已完成；NOTREADY - 任务未完成； */
  TaskStatus: string | null;
}

/** 此结构体 (TemplateInfo) 用于描述模板的信息。 */
declare interface TemplateInfo {
  /** 模板ID */
  TemplateId: string;
  /** 模板名字 */
  TemplateName: string;
  /** 模板描述信息 */
  Description: string;
  /** 模板控件信息结构 */
  Components: Component[];
  /** 签署区模板信息结构 */
  SignComponents: Component[];
  /** 模板中的流程参与人信息 */
  Recipients: Recipient[];
  /** 模板类型：1-静默签；3-普通模板 */
  TemplateType: number;
  /** 是否是发起人 ,已弃用 */
  IsPromoter: boolean;
  /** 模板的创建者信息 */
  Creator: string;
  /** 模板创建的时间戳（精确到秒） */
  CreatedOn: number;
}

/** 此结构体 (UploadFile) 用于描述多文件上传的文件信息。 */
declare interface UploadFile {
  /** Base64编码后的文件内容 */
  FileBody: string;
  /** 文件名 */
  FileName?: string;
}

/** 用量明细 */
declare interface UsageDetail {
  /** 渠道侧合作企业唯一标识 */
  ProxyOrganizationOpenId: string;
  /** 渠道侧合作企业名 */
  ProxyOrganizationName: string | null;
  /** 日期，当需要汇总数据时日期为空 */
  Date: string | null;
  /** 消耗数量 */
  Usage: number;
  /** 撤回数量 */
  Cancel: number | null;
}

/** 接口调用者信息 */
declare interface UserInfo {
  /** 用户在渠道的编号，最大64位字符串 */
  OpenId?: string;
  /** 用户的来源渠道 */
  Channel?: string;
  /** 自定义用户编号 */
  CustomUserId?: string;
  /** 用户真实IP */
  ClientIp?: string;
  /** 用户代理IP */
  ProxyIp?: string;
}

declare interface ChannelBatchCancelFlowsRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程Id数组，最多100个，超过100不处理 */
  FlowIds: string[];
  /** 撤销理由 */
  CancelMessage?: string;
  /** 撤销理由自定义格式；选项：0 默认格式1 只保留身份信息：展示为【发起方】2 保留身份信息+企业名称：展示为【发起方xxx公司】3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】 */
  CancelMessageFormat?: number;
  /** 操作人信息 */
  Operator?: UserInfo;
}

declare interface ChannelBatchCancelFlowsResponse {
  /** 签署流程批量撤销失败原因，错误信息与流程Id一一对应，如果部分流程不可撤销，不会返回错误信息，只会撤销可撤销流程 */
  FailMessages: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCancelFlowRequest {
  /** 签署流程编号 */
  FlowId: string;
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 撤回原因，最大不超过200字符 */
  CancelMessage?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
  /** 撤销理由自定义格式；选项：0 默认格式1 只保留身份信息：展示为【发起方】2 保留身份信息+企业名称：展示为【发起方xxx公司】3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】 */
  CancelMessageFormat?: number;
}

declare interface ChannelCancelFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCancelMultiFlowSignQRCodeRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 二维码id */
  QrCodeId: string;
  /** 用户信息 */
  Operator?: UserInfo;
}

declare interface ChannelCancelMultiFlowSignQRCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCreateBatchCancelFlowUrlRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程Id数组 */
  FlowIds: string[];
  /** 操作人信息 */
  Operator?: UserInfo;
}

declare interface ChannelCreateBatchCancelFlowUrlResponse {
  /** 批量撤销url */
  BatchCancelFlowUrl: string;
  /** 签署流程批量撤销失败原因 */
  FailMessages: string[];
  /** 签署撤销url过期时间-年月日-时分秒 */
  UrlExpireOn: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCreateConvertTaskApiRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 资源类型 取值范围doc,docx,html,excel之一 */
  ResourceType: string;
  /** 资源名称，长度限制为256字符 */
  ResourceName: string;
  /** 资源Id，通过UploadFiles获取 */
  ResourceId: string;
  /** 操作者信息 */
  Operator?: UserInfo;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface ChannelCreateConvertTaskApiResponse {
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowByFilesRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 签署流程名称，长度不超过200个字符 */
  FlowName?: string;
  /** 签署流程签约方列表，最多不超过5个参与方 */
  FlowApprovers?: FlowApproverInfo[];
  /** 签署文件资源Id列表，目前仅支持单个文件 */
  FileIds?: string[];
  /** 签署文件中的发起方的填写控件，需要在发起的时候进行填充 */
  Components?: Component[];
  /** 签署流程截止时间，十位数时间戳，最大值为33162419560，即3020年 */
  Deadline?: number;
  /** 签署流程回调地址，长度不超过255个字符 */
  CallbackUrl?: string;
  /** 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署。有序签署时以传入FlowApprovers数组的顺序作为签署顺序 */
  Unordered?: boolean;
  /** 签署流程的类型，长度不超过255个字符 */
  FlowType?: string;
  /** 签署流程的描述，长度不超过1000个字符 */
  FlowDescription?: string;
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN */
  CustomerData?: string;
  /** 发起方企业的签署人进行签署操作是否需要企业内部审批。 若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。 注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。 */
  NeedSignReview?: boolean;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface ChannelCreateFlowByFilesResponse {
  /** 合同签署流程ID */
  FlowId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowGroupByFilesRequest {
  /** 每个子合同的发起所需的信息，数量限制2-100 */
  FlowFileInfos: FlowFileInfo[];
  /** 合同组名称，长度不超过200个字符 */
  FlowGroupName: string;
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface ChannelCreateFlowGroupByFilesResponse {
  /** 合同组ID */
  FlowGroupId: string | null;
  /** 子合同ID列表 */
  FlowIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowSignReviewRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程编号 */
  FlowId: string;
  /** 企业内部审核结果PASS: 通过REJECT: 拒绝SIGN_REJECT:拒签(流程结束) */
  ReviewType: string;
  /** 审核原因 当ReviewType 是REJECT 时此字段必填,字符串长度不超过200 */
  ReviewMessage?: string;
}

declare interface ChannelCreateFlowSignReviewResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelCreateMultiFlowSignQRCodeRequest {
  /** 渠道应用相关信息。此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。 */
  Agent: Agent;
  /** 模版ID */
  TemplateId: string;
  /** 签署流程名称，最大长度200个字符。 */
  FlowName: string;
  /** 最大可发起签署流程份数，默认5份；发起签署流程数量超过此上限后，二维码自动失效。 */
  MaxFlowNum?: number;
  /** 签署流程有效天数 默认7天 最高设置不超过30天 */
  FlowEffectiveDay?: number;
  /** 二维码有效天数 默认7天 最高设置不超过90天 */
  QrEffectiveDay?: number;
  /** 限制二维码用户条件 */
  Restrictions?: ApproverRestriction[];
  /** 回调地址，最大长度1000个字符不传默认使用渠道应用号配置的回调地址回调时机:用户通过签署二维码发起合同时，企业额度不足导致失败 */
  CallbackUrl?: string;
  /** 用户信息 */
  Operator?: UserInfo;
  /** 限制二维码用户条件（已弃用） */
  ApproverRestrictions?: ApproverRestriction;
}

declare interface ChannelCreateMultiFlowSignQRCodeResponse {
  /** 签署二维码对象 */
  QrCode: SignQrCode;
  /** 签署链接对象 */
  SignUrls: SignUrl;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelDescribeEmployeesRequest {
  /** 返回最大数量，最大为20 */
  Limit: number;
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 查询过滤实名用户，Key为Status，Values为["IsVerified"]根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...] */
  Filters?: Filter[];
  /** 偏移量，默认为0，最大为20000 */
  Offset?: number;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface ChannelDescribeEmployeesResponse {
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

declare interface ChannelGetTaskResultApiRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 任务Id，通过ChannelCreateConvertTaskApi接口获得 */
  TaskId: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface ChannelGetTaskResultApiResponse {
  /** 任务Id */
  TaskId: string;
  /** 任务状态，需要关注的状态0 :NeedTranform - 任务已提交4 :Processing - 文档转换中8 :TaskEnd - 任务处理完成-2 :DownloadFailed - 下载失败-6 :ProcessFailed - 转换失败-13:ProcessTimeout - 转换文件超时 */
  TaskStatus: number;
  /** 状态描述，需要关注的状态NeedTranform - 任务已提交Processing - 文档转换中TaskEnd - 任务处理完成DownloadFailed - 下载失败ProcessFailed - 转换失败ProcessTimeout - 转换文件超时 */
  TaskMessage: string;
  /** 资源Id，也是FileId，用于文件发起使用 */
  ResourceId: string;
  /** 预览文件Url，有效期30分钟 */
  PreviewUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChannelVerifyPdfRequest {
  /** 合同Id，流程Id */
  FlowId: string;
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface ChannelVerifyPdfResponse {
  /** 验签结果，1-文件未被篡改，全部签名在腾讯电子签完成； 2-文件未被篡改，部分签名在腾讯电子签完成；3-文件被篡改；4-异常：文件内没有签名域；5-异常：文件签名格式错误 */
  VerifyResult: number;
  /** 验签结果详情,内部状态1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域；5-文件签名格式错误 */
  PdfVerifyResults: PdfVerifyResult[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateConsoleLoginUrlRequest {
  /** 应用信息此接口Agent.AppId、Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填 */
  Agent: Agent;
  /** 渠道子客企业名称，最大长度64个字符 */
  ProxyOrganizationName: string;
  /** 渠道子客企业经办人的姓名，最大长度50个字符 */
  ProxyOperatorName?: string;
  /** 控制台指定模块，文件/合同管理:"DOCUMENT"，模板管理:"TEMPLATE"，印章管理:"SEAL"，组织架构/人员:"OPERATOR"，空字符串："账号信息" */
  Module?: string;
  /** 控制台指定模块Id */
  ModuleId?: string;
  /** 渠道子客企业统一社会信用代码，最大长度200个字符 */
  UniformSocialCreditCode?: string;
  /** 是否展示左侧菜单栏 是：ENABLE（默认） 否：DISABLE */
  MenuStatus?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface CreateConsoleLoginUrlResponse {
  /** 子客Web控制台url，此链接5分钟内有效，且只能访问一次。同时需要注意：1. 此链接仅单次有效，使用后需要再次创建新的链接（部分聊天软件，如企业微信默认会对链接进行解析，此时需要使用类似“代码片段”的方式或者放到txt文件里发送链接）；2. 创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义 */
  ConsoleUrl: string;
  /** 渠道子客企业是否已开通腾讯电子签 */
  IsActivated: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFlowsByTemplatesRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 多个合同（签署流程）信息，最多支持20个 */
  FlowInfos: FlowInfo[];
  /** 是否为预览模式；默认为false，即非预览模式，此时发起合同并返回FlowIds；若为预览模式，不会发起合同，会返回PreviewUrls（此Url返回的是PDF文件流 ）；预览链接有效期300秒； */
  NeedPreview?: boolean;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface CreateFlowsByTemplatesResponse {
  /** 多个合同ID */
  FlowIds: string[];
  /** 渠道的业务信息，限制1024字符 */
  CustomerData: string[];
  /** 创建消息，对应多个合同ID，成功为“”,创建失败则对应失败消息 */
  ErrorMessages: string[];
  /** 预览模式下返回的预览文件url数组 */
  PreviewUrls: string[];
  /** 复杂文档合成任务的任务信息数组 */
  TaskInfos: TaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSealByImageRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 印章名称，最大长度不超过30字符 */
  SealName: string;
  /** 印章图片base64 */
  SealImage: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface CreateSealByImageResponse {
  /** 印章id */
  SealId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSignUrlsRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程编号数组，最多支持100个。(备注：该参数和合同组编号必须二选一) */
  FlowIds?: string[];
  /** 合同组编号(备注：该参数和合同(流程)编号数组必须二选一) */
  FlowGroupId?: string;
  /** 签署链接类型：“WEIXINAPP”-短链直接跳小程序；“CHANNEL”-跳转H5页面；“APP”-第三方APP或小程序跳转电子签小程序；"LONGURL2WEIXINAPP"-长链接跳转小程序；默认“WEIXINAPP”类型，即跳转至小程序； */
  Endpoint?: string;
  /** 签署链接生成类型，默认是 "ALL"；"ALL"：全部签署方签署链接，此时不会给自动签署的签署方创建签署链接；"CHANNEL"：渠道合作企业；"NOT_CHANNEL"：非渠道合作企业；"PERSON"：个人；"FOLLOWER"：关注方，目前是合同抄送方； */
  GenerateType?: string;
  /** 非渠道合作企业参与方的企业名称，GenerateType为"NOT_CHANNEL"时必填 */
  OrganizationName?: string;
  /** 参与人姓名，GenerateType为"PERSON"时必填 */
  Name?: string;
  /** 参与人手机号；GenerateType为"PERSON"或"FOLLOWER"时必填 */
  Mobile?: string;
  /** 渠道合作企业的企业Id，GenerateType为"CHANNEL"时必填 */
  OrganizationOpenId?: string;
  /** 渠道合作企业参与人OpenId，GenerateType为"CHANNEL"时可用，指定到具体参与人 */
  OpenId?: string;
  /** Endpoint为"APP" 类型的签署链接，可以设置此值；支持调用方小程序打开签署链接，在电子签小程序完成签署后自动回跳至调用方小程序 */
  AutoJumpBack?: boolean;
  /** 签署完之后的H5页面的跳转链接，针对Endpoint为CHANNEL时有效，最大长度1000个字符。 */
  JumpUrl?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface CreateSignUrlsResponse {
  /** 签署参与者签署H5链接信息数组 */
  SignUrlInfos: SignUrlInfo[];
  /** 生成失败时的错误信息，成功返回”“，顺序和出参SignUrlInfos保持一致 */
  ErrorMessages: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFlowDetailInfoRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 合同(流程)编号数组，最多支持100个。（备注：该参数和合同组编号必须二选一） */
  FlowIds?: string[];
  /** 操作者的信息 */
  Operator?: UserInfo;
  /** 合同组编号（备注：该参数和合同(流程)编号数组必须二选一） */
  FlowGroupId?: string;
}

declare interface DescribeFlowDetailInfoResponse {
  /** 渠道侧应用号Id */
  ApplicationId: string;
  /** 渠道侧企业第三方Id */
  ProxyOrganizationOpenId: string;
  /** 合同(签署流程)的具体详细描述信息 */
  FlowInfo: FlowDetailInfo[] | null;
  /** 合同组编号 */
  FlowGroupId: string | null;
  /** 合同组名称 */
  FlowGroupName: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceUrlsByFlowsRequest {
  /** 渠道应用相关信息。此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 查询资源所对应的签署流程Id，最多支持50个 */
  FlowIds?: string[];
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface DescribeResourceUrlsByFlowsResponse {
  /** 签署流程资源对应链接信息 */
  FlowResourceUrlInfos: FlowResourceUrlInfo[];
  /** 创建消息，对应多个合同ID，成功为“”,创建失败则对应失败消息 */
  ErrorMessages: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTemplatesRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 模板唯一标识，查询单个模板时使用 */
  TemplateId?: string;
  /** 查询内容：0-模板列表及详情（默认），1-仅模板列表 */
  ContentType?: number;
  /** 查询个数，默认20，最大100；在查询列表的时候有效 */
  Limit?: number;
  /** 查询偏移位置，默认0；在查询列表的时候有效 */
  Offset?: number;
  /** 是否返回所有组件信息。默认false，只返回发起方控件；true，返回所有签署方控件 */
  QueryAllComponents?: boolean;
  /** 模糊搜索模板名称，最大长度200 */
  TemplateName?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface DescribeTemplatesResponse {
  /** 模板详情 */
  Templates: TemplateInfo[];
  /** 查询总数 */
  TotalCount: number;
  /** 查询数量 */
  Limit: number;
  /** 查询起始偏移 */
  Offset: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUsageRequest {
  /** 应用信息 */
  Agent: Agent;
  /** 开始时间，例如：2021-03-21 */
  StartDate: string;
  /** 结束时间，例如：2021-06-21；开始时间到结束时间的区间长度小于等于90天。 */
  EndDate: string;
  /** 是否汇总数据，默认不汇总。不汇总：返回在统计区间内渠道下所有企业的每日明细，即每个企业N条数据，N为统计天数；汇总：返回在统计区间内渠道下所有企业的汇总后数据，即每个企业一条数据； */
  NeedAggregate?: boolean;
  /** 单次返回的最多条目数量。默认为1000，且不能超过1000。 */
  Limit?: number;
  /** 偏移量，默认是0。 */
  Offset?: number;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface DescribeUsageResponse {
  /** 用量明细条数 */
  Total: number;
  /** 用量明细 */
  Details: UsageDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDownloadFlowUrlRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 文件夹数组，签署流程总数不能超过50个，一个文件夹下，不能超过20个签署流程 */
  DownLoadFlows?: DownloadFlowInfo[];
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface GetDownloadFlowUrlResponse {
  /** 合同（流程）下载地址 */
  DownLoadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OperateChannelTemplateRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 操作类型，查询:"SELECT"，删除:"DELETE"，更新:"UPDATE" */
  OperateType: string;
  /** 渠道方模板库模板唯一标识 */
  TemplateId: string;
  /** 合作企业方第三方机构唯一标识数据，支持多个， 用","进行分隔 */
  ProxyOrganizationOpenIds?: string;
  /** 模板可见性, 全部可见-"all", 部分可见-"part" */
  AuthTag?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface OperateChannelTemplateResponse {
  /** 腾讯电子签颁发给渠道的应用ID */
  AppId: string | null;
  /** 渠道方模板库模板唯一标识 */
  TemplateId: string | null;
  /** 全部成功-"all-success",部分成功-"part-success", 全部失败-"fail"失败的会在FailMessageList中展示 */
  OperateResult: string | null;
  /** 模板可见性, 全部可见-"all", 部分可见-"part" */
  AuthTag: string | null;
  /** 合作企业方第三方机构唯一标识数据 */
  ProxyOrganizationOpenIds: string[] | null;
  /** 操作失败信息数组 */
  FailMessageList: AuthFailMessage[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PrepareFlowsRequest {
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 多个合同（签署流程）信息，最大支持20个签署流程。 */
  FlowInfos: FlowInfo[];
  /** 操作完成后的跳转地址，最大长度200 */
  JumpUrl: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface PrepareFlowsResponse {
  /** 待发起文件确认页 */
  ConfirmUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SyncProxyOrganizationOperatorsRequest {
  /** 渠道应用相关信息。 此接口Agent.AppId 和 Agent.ProxyOrganizationOpenId必填。 */
  Agent: Agent;
  /** 操作类型，新增:"CREATE"，修改:"UPDATE"，离职:"RESIGN" */
  OperatorType: string;
  /** 经办人信息列表，最大长度200 */
  ProxyOrganizationOperators: ProxyOrganizationOperator[];
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface SyncProxyOrganizationOperatorsResponse {
  /** Status 同步状态,全部同步失败接口会直接报错1-成功 2-部分成功 */
  Status: number | null;
  /** 同步失败经办人及其失败原因 */
  FailedList: SyncFailReason[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SyncProxyOrganizationRequest {
  /** 应用信息此接口Agent.AppId、Agent.ProxyOrganizationOpenId必填 */
  Agent: Agent;
  /** 渠道侧合作企业名称，最大长度64个字符 */
  ProxyOrganizationName: string;
  /** 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M */
  BusinessLicense?: string;
  /** 渠道侧合作企业统一社会信用代码，最大长度200个字符 */
  UniformSocialCreditCode?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface SyncProxyOrganizationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UploadFilesRequest {
  /** 应用相关信息，若是渠道版调用 appid 和proxyappid 必填 */
  Agent: Agent;
  /** 文件对应业务类型1. TEMPLATE - 模板； 文件类型：.pdf/.doc/.docx/.html2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html */
  BusinessType: string;
  /** 上传文件内容数组，最多支持20个文件 */
  FileInfos?: UploadFile[];
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface UploadFilesResponse {
  /** 文件id数组，有效期一个小时；有效期内此文件id可以反复使用 */
  FileIds: string[];
  /** 上传成功文件数量 */
  TotalCount: number;
  /** 文件Url */
  FileUrls: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20201222 {
  interface VersionHeader { headers: { 'X-TC-Version': '2020-12-22' } }

  /** 此结构体 (Address) 用于描述住址或通讯地址。 */
  interface Address {
    /** 省份 */
    Province: string;
    /** 城市 */
    City: string;
    /** 区县 */
    County: string;
    /** 详细地址 */
    Details: string;
    /** 国家，默认中国 */
    Country?: string;
  }

  /** 此结构体 (Caller) 用于描述调用方属性。 */
  interface Caller {
    /** 应用号 */
    ApplicationId: string;
    /** 下属机构ID */
    SubOrganizationId?: string;
    /** 经办人的用户ID */
    OperatorId?: string;
  }

  /** 目录流程参与者 */
  interface CatalogApprovers {
    /** 流程ID */
    FlowId: string;
    /** 参与者列表 */
    Approvers: FlowApproverInfo[];
  }

  /** 目录流程签署区 */
  interface CatalogComponents {
    /** 流程ID */
    FlowId: string;
    /** 签署区列表 */
    SignComponents: Component[];
    /** 签署任务ID */
    SignId: string;
  }

  /** 此结构体 (Component) 用于描述控件属性。 */
  interface Component {
    /** 控件编号注：当GenerateMode=3时，通过"^"来决定是否使用关键字整词匹配能力。例：当GenerateMode=3时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。 */
    ComponentId?: string;
    /** 如果是Component控件类型，则可选的字段为：TEXT - 普通文本控件；DATE - 普通日期控件；SELECT- 勾选框控件；如果是SignComponent控件类型，则可选的字段为SIGN_SEAL- 签署印章控件；SIGN_DATE- 签署日期控件；SIGN_SIGNATURE - 用户签名控件； */
    ComponentType?: string;
    /** 控件名称 */
    ComponentName?: string;
    /** 定义控件是否为必填项，默认为false */
    ComponentRequired?: boolean;
    /** 控件所属文件的序号 (模板中的resourceId排列序号) */
    FileIndex?: number;
    /** 控件生成的方式：0 - 普通控件1 - 表单域2 - html 控件3 - 关键字 */
    GenerateMode?: number;
    /** 参数控件宽度，单位px */
    ComponentWidth?: number;
    /** 参数控件高度，单位px */
    ComponentHeight?: number;
    /** 参数控件所在页码 */
    ComponentPage?: number;
    /** 参数控件X位置，单位px */
    ComponentPosX?: number;
    /** 参数控件Y位置，单位px */
    ComponentPosY?: number;
    /** 参数控件样式 */
    ComponentExtra?: string;
    /** 印章ID，如果是手写签名则为jpg或png格式的base64图片SIGN_SEAL控件,可以用ORG_DEFAULT_SEAL表示主企业的默认印章SIGN_SEAL控件,可以用SUBORG_DEFAULT_SEAL表示子企业的默认印章SIGN_SEAL控件,可以用USER_DEFAULT_SEAL表示个人默认印章 */
    ComponentValue?: string;
    /** 如果是SIGN_SEAL类型的签署控件, 参数标识H5签署界面是否在该签署区上进行放置展示, 1为放置,其他为不放置 */
    SealOperate?: number;
    /** 不同GenerateMode对应的额外信息 */
    GenerateExtra?: string;
  }

  /** 此结构体 (ComponentSeal) 用于描述“签署区ID”到“印章ID”的映射。 */
  interface ComponentSeal {
    /** 签署区ID */
    ComponentId: string;
    /** 印章ID */
    SealId: string;
  }

  /** <自定义Id,文件id>映射对象 */
  interface CustomFileIdMap {
    /** 用户自定义ID */
    CustomId: string;
    /** 文件id */
    FileId: string;
  }

  /** 自定义流程id映射关系 */
  interface CustomFlowIdMap {
    /** 自定义id */
    CustomId: string;
    /** 流程id */
    FlowId: string;
  }

  /** 此结构体 (FaceIdPhoto) 用于描述慧眼人脸核身照片信息。 */
  interface FaceIdPhoto {
    /** 核身结果：0 - 通过；1 - 未通过 */
    Result: number;
    /** 核身失败描述 */
    Description: string;
    /** 照片数据 (base64编码, 一般为JPG或PNG) */
    Photo: string;
    /** 订单号 (orderNo) */
    OrderNumber: string;
  }

  /** 此结构体 (FaceIdResult) 用于描述慧眼人脸核身结果。 */
  interface FaceIdResult {
    /** 核身结果：0 - 通过；1 - 未通过 */
    Result: number;
    /** 核身失败描述 */
    Description: string;
    /** 订单号 (orderNo) */
    OrderNumber: string;
    /** 姓名 */
    Name: string | null;
    /** 身份证件类型： ID_CARD - 居民身份证 */
    IdCardType: string | null;
    /** 身份证件号码 */
    IdCardNumber: string | null;
    /** 活体检测得分 (百分制) */
    LiveRate: number | null;
    /** 人脸检测得分 (百分制) */
    Similarity: number | null;
    /** 刷脸时间 (UNIX时间戳) */
    OccurredTime: number | null;
    /** 照片数据 (base64编码, 一般为JPG或PNG) */
    Photo: string | null;
    /** 视频数据 (base64编码, 一般为MP4) */
    Video: string | null;
  }

  /** 此结构体 (FileUrl) 用于描述下载文件的URL信息。 */
  interface FileUrl {
    /** 下载文件的URL */
    Url: string;
    /** 下载文件的附加信息 */
    Option: string;
    /** 下载文件所属的资源序号 */
    Index: number;
    /** 目录业务下，文件对应的流程 */
    FlowId: string;
  }

  /** 此结构体 (FlowApproverInfo) 用于描述流程参与者信息。 */
  interface FlowApproverInfo {
    /** 用户ID */
    UserId: string;
    /** 认证方式：WEIXINAPP - 微信小程序；FACEID - 慧眼 (默认)；VERIFYCODE - 验证码；THIRD - 第三方 (暂不支持) */
    VerifyChannel: string[];
    /** 签署状态：0 - 待签署；1- 已签署；2 - 拒绝；3 - 过期未处理；4 - 流程已撤回,12-审核中,13-审核驳回 */
    ApproveStatus: number | null;
    /** 拒签/签署/审核驳回原因 */
    ApproveMessage: string | null;
    /** 签约时间的时间戳 */
    ApproveTime: number | null;
    /** 签署企业ID */
    SubOrganizationId: string | null;
    /** 签署完成后跳转的URL */
    JumpUrl: string | null;
    /** 用户签署区ID到印章ID的映射集合 */
    ComponentSeals: ComponentSeal[] | null;
    /** 签署前置条件：是否强制用户全文阅读，即阅读到待签署文档的最后一页。默认FALSE */
    IsFullText: boolean;
    /** 签署前置条件：强制阅读时长，页面停留时长不足则不允许签署。默认不限制 */
    PreReadTime: number;
    /** 签署人手机号，脱敏显示 */
    Mobile: string;
    /** 签署链接截止时间，默认签署流程发起后7天失效 */
    Deadline: number;
    /** 是否为最后一个签署人, 若为最后一人，则其签署完成后自动归档 */
    IsLastApprover: boolean;
    /** 短信模板 */
    SmsTemplate: SmsTemplate | null;
    /** 身份证号，脱敏显示 */
    IdCardNumber: string;
    /** 用户姓名 */
    Name: string;
    /** 是否支持线下核身 */
    CanOffLine: boolean;
    /** 证件号码类型：ID_CARD - 身份证，PASSPORT - 护照，MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证; 暂不支持用于电子签自有平台实名认证，MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证; 暂不支持用于电子签自有平台实名认证，HOUSEHOLD_REGISTER - 户口本; 暂不支持用于电子签自有平台实名认证，TEMP_ID_CARD - 临时居民身份证; 暂不支持用于电子签自有平台实名认证 */
    IdCardType: string | null;
    /** 签署回调地址 */
    CallbackUrl: string | null;
    /** 签署任务ID，标识每一次的流程发送 */
    SignId: string | null;
  }

  /** 此结构体 (FlowFileInfo) 用于描述流程文档信息。 */
  interface FlowFileInfo {
    /** 文件序号 */
    FileIndex: number;
    /** 文件类型 */
    FileType: string;
    /** 文件的MD5码 */
    FileMd5: string;
    /** 文件名 */
    FileName: string;
    /** 文件大小，单位为Byte */
    FileSize: number;
    /** 文件创建时间戳 */
    CreatedOn: number;
    /** 文件的下载地址 */
    Url: string;
  }

  /** 此结构体 (FlowInfo) 用于描述流程信息。 */
  interface FlowInfo {
    /** 合同名字 */
    FlowName: string;
    /** 签署截止时间戳，超过有效签署时间则该签署流程失败 */
    Deadline: number;
    /** 合同描述 */
    FlowDescription?: string;
    /** 合同类型：1. “劳务”2. “销售”3. “租赁”4. “其他” */
    FlowType?: string;
    /** 回调地址 */
    CallbackUrl?: string;
    /** 用户自定义数据 */
    UserData?: string;
  }

  /** 此结构体 (Seal) 用于描述电子印章的信息。 */
  interface Seal {
    /** 电子印章ID */
    SealId: string;
    /** 电子印章名称 */
    SealName: string;
    /** 电子印章类型 */
    SealType: string;
    /** 电子印章来源：CREATE - 通过图片上传GENERATE - 通过文字生成 */
    SealSource: string;
    /** 电子印章创建者 */
    Creator: Caller;
    /** 电子印章创建时间戳 */
    CreatedOn: number;
    /** 电子印章所有人 */
    UserId: string;
    /** 电子印章URL */
    FileUrl: FileUrl;
    /** 是否为默认印章，false-非默认，true-默认 */
    DefaultSeal: boolean;
  }

  /** 此结构体 (SignSeal) 用于描述签名/印章信息。 */
  interface SignSeal {
    /** 签署控件ID */
    ComponentId: string;
    /** 签署印章类型:SIGN_SIGNATURE - 签名SIGN_SEAL - 印章SIGN_DATE - 日期SIGN_IMAGE - 图片 */
    SignType: string;
    /** 合同文件ID */
    FileIndex: number;
    /** 印章ID，仅当 SignType 为 SIGN_SEAL 时必填 */
    SealId?: string;
    /** 签名内容，仅当 SignType 为SIGN_SIGNATURE或SIGN_IMAGE 时必填，base64编码 */
    SealContent?: string;
  }

  /** 此结构体 (SmsTemplate) 用于描述短信模板。 */
  interface SmsTemplate {
    /** 模板ID，必须填写已审核通过的模板ID。模板ID可登录短信控制台查看。 */
    TemplateId: string;
    /** 短信签名内容，使用UTF-8编码，必须填写已审核通过的签名，签名信息可登录短信控制台查看。 */
    Sign: string;
  }

  /** 此结构体 (SubOrganizationDetail) 用于描述子机构或子企业的详情信息。 */
  interface SubOrganizationDetail {
    /** 组织ID */
    Id: string;
    /** 机构名称全称 */
    Name: string;
    /** 机构电子邮箱 */
    Email: string;
    /** 机构证件号码类型 */
    IdCardType: string;
    /** 机构证件号码 */
    IdCardNumber: string;
    /** 机构类型 */
    OrganizationType: string;
    /** 机构证件文件类型 */
    IdCardFileType: string | null;
    /** 机构证件照片文件，base64编码 */
    BizLicenseFile: string | null;
    /** 机构证件照片文件名 */
    BizLicenseFileName: string;
    /** 机构法人/经营者姓名 */
    LegalName: string;
    /** 机构法人/经营者证件类型 */
    LegalIdCardType: string;
    /** 机构法人/经营者证件号码 */
    LegalIdCardNumber: string;
    /** 机构法人/经营者/联系人手机号码 */
    LegalMobile: string;
    /** 组织联系人姓名 */
    ContactName: string | null;
    /** 机构实名状态 */
    VerifyStatus: string;
    /** 机构通过实名时间 */
    VerifiedOn: number | null;
    /** 机构创建时间 */
    CreatedOn: number;
    /** 机构更新时间 */
    UpdatedOn: number | null;
    /** 实名认证的客户端IP */
    VerifyClientIp: string | null;
    /** 实名认证的服务器IP */
    VerifyServerIp: string | null;
    /** 企业联系地址 */
    ContactAddress: Address | null;
  }

  /** 此结构体 (UploadFile) 用于描述多文件上传的文件信息。 */
  interface UploadFile {
    /** Base64编码后的文件内容 */
    FileBody: string;
    /** 文件名 */
    FileName?: string;
  }

  /** 此结构体 (UserDescribe) 用于描述个人帐号查询结果。 */
  interface UserDescribe {
    /** 用户ID */
    UserId: string;
    /** 手机号，隐藏中间4位数字，用*代替 */
    Mobile: string;
    /** 注册时间点 (UNIX时间戳) */
    CreatedOn: number;
    /** 实名认证状态：0 - 未实名；1 - 通过实名 */
    VerifyStatus: number;
    /** 真实姓名 */
    Name: string;
    /** 实名认证通过时间 (UNIX时间戳) */
    VerifiedOn: number;
    /** 身份证件类型; ID_CARD - 居民身份证；PASSPORT - 护照；MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证；MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证；HOUSEHOLD_REGISTER - 户口本；TEMP_ID_CARD - 临时居民身份证 */
    IdCardType: string;
    /** 身份证件号码 (脱敏) */
    IdCardNumber: string;
  }

  interface ArchiveFlowRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程ID */
    FlowId: string;
  }

  interface ArchiveFlowResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CancelFlowRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程ID */
    FlowId: string;
    /** 撤销原因 */
    CancelMessage?: string;
  }

  interface CancelFlowResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckBankCard2EVerificationRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 银行卡号 */
    BankCard: string;
    /** 姓名 */
    Name: string;
  }

  interface CheckBankCard2EVerificationResponse {
    /** 检测结果计费结果码： 0: 认证通过 1: 认证未通过 2: 持卡人信息有误 3: 未开通无卡支付 4: 此卡被没收 5: 无效卡号 6: 此卡无对应发卡行 7: 该卡未初始化或睡眠卡 8: 作弊卡、吞卡 9: 此卡已挂失 10: 该卡已过期 11: 受限制的卡 12: 密码错误次数超限 13: 发卡行不支持此交易不收费结果码: 101: 姓名校验不通过 102: 银行卡号码有误 103: 验证中心服务繁忙 104: 身份证号码有误 105: 手机号码不合法 */
    Result?: number;
    /** 结果描述; 未通过时必选 */
    Description?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckBankCard3EVerificationRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 银行卡号 */
    BankCard: string;
    /** 姓名 */
    Name: string;
    /** 身份证件号码 */
    IdCardNumber: string;
    /** 身份证件类型; ID_CARD */
    IdCardType?: string;
  }

  interface CheckBankCard3EVerificationResponse {
    /** 检测结果计费结果码： 0: 认证通过 1: 认证未通过 2: 持卡人信息有误 3: 未开通无卡支付 4: 此卡被没收 5: 无效卡号 6: 此卡无对应发卡行 7: 该卡未初始化或睡眠卡 8: 作弊卡、吞卡 9: 此卡已挂失 10: 该卡已过期 11: 受限制的卡 12: 密码错误次数超限 13: 发卡行不支持此交易不收费结果码: 101: 姓名校验不通过 102: 银行卡号码有误 103: 验证中心服务繁忙 104: 身份证号码有误 105: 手机号码不合法 */
    Result?: number;
    /** 结果描述; 未通过时必选 */
    Description?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckBankCard4EVerificationRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 银行卡号 */
    BankCard: string;
    /** 姓名 */
    Name: string;
    /** 身份证件号码 */
    IdCardNumber?: string;
    /** 手机号 */
    Mobile?: string;
    /** 身份证件类型; ID_CARD */
    IdCardType?: string;
  }

  interface CheckBankCard4EVerificationResponse {
    /** 检测结果计费结果码： 0: 认证通过 1: 认证未通过 2: 持卡人信息有误 3: 未开通无卡支付 4: 此卡被没收 5: 无效卡号 6: 此卡无对应发卡行 7: 该卡未初始化或睡眠卡 8: 作弊卡、吞卡 9: 此卡已挂失 10: 该卡已过期 11: 受限制的卡 12: 密码错误次数超限 13: 发卡行不支持此交易不收费结果码: 101: 姓名校验不通过 102: 银行卡号码有误 103: 验证中心服务繁忙 104: 身份证号码有误 105: 手机号码不合法 */
    Result?: number;
    /** 结果描述; 未通过时必选 */
    Description?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckBankCardVerificationRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 银行卡号 */
    BankCard: string;
    /** 姓名 */
    Name: string;
    /** 身份证件号码 */
    IdCardNumber?: string;
    /** 手机号 */
    Mobile?: string;
    /** 身份证件类型; ID_CARD */
    IdCardType?: string;
  }

  interface CheckBankCardVerificationResponse {
    /** 检测结果计费结果码： 0: 认证通过 1: 认证未通过 2: 持卡人信息有误 3: 未开通无卡支付 4: 此卡被没收 5: 无效卡号 6: 此卡无对应发卡行 7: 该卡未初始化或睡眠卡 8: 作弊卡、吞卡 9: 此卡已挂失 10: 该卡已过期 11: 受限制的卡 12: 密码错误次数超限 13: 发卡行不支持此交易不收费结果码: 101: 姓名校验不通过 102: 银行卡号码有误 103: 验证中心服务繁忙 104: 身份证号码有误 105: 手机号码不合法 */
    Result?: number;
    /** 结果描述; 未通过时必选 */
    Description?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckFaceIdentifyRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 人脸核身渠道; 必选; WEIXINAPP:腾讯电子签小程序,FACEID:腾讯电子签慧眼,None:白名单中的客户直接通过 */
    VerifyChannel: string;
    /** 核身订单号; 必选; 对于WEIXINAPP,直接取响应的{VerifyResult};对于FACEID,使用{WbAppId}:{OrderNo}拼接 */
    VerifyResult: string;
    /** 要对比的姓名; 可选; 未填写时对比caller.OperatorId的实名信息 */
    Name?: string;
    /** 要对比的身份证号码; 可选; 未填写时对比caller.OperatorId的实名信息 */
    IdCardNumber?: string;
    /** 是否取认证时的照片 */
    GetPhoto?: boolean;
  }

  interface CheckFaceIdentifyResponse {
    /** 核身结果; 0:通过,1:不通过 */
    Result?: number;
    /** 核身结果描述 */
    Description?: string;
    /** 渠道名 */
    ChannelName?: string;
    /** 认证通过时间 */
    VerifiedOn?: number | null;
    /** 核身流水号 */
    SerialNumber?: string;
    /** 渠道核身服务器IP */
    VerifyServerIp?: string | null;
    /** 核身照片文件名 */
    PhotoFileName?: string | null;
    /** 核身照片内容base64(文件格式见文件名后缀,一般为jpg) */
    PhotoFileData?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckIdCardVerificationRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 姓名 */
    Name: string;
    /** 身份证件号码 */
    IdCardNumber: string;
    /** 身份证件类型; ID_CARD */
    IdCardType?: string;
  }

  interface CheckIdCardVerificationResponse {
    /** 检测结果; 收费错误码: 0: 通过, 1: 姓名和身份证号不一致,免费错误码: 101: 非法身份证号(长度,格式等不正确), 102: 非法姓名(长度,格式等不正确), 103: 验证平台异常, 104: 证件库中无此身份证记录 */
    Result?: number;
    /** 结果描述; 未通过时必选 */
    Description?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckMobileAndNameRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 手机号 */
    Mobile: string;
    /** 姓名 */
    Name: string;
  }

  interface CheckMobileAndNameResponse {
    /** 检测结果计费结果码： 0: 验证结果一致 1: 手机号未实名 2: 姓名和手机号不一致 3: 信息不一致(手机号已实名,但姓名和身份证号与实名信息不一致)不收费结果码: 101: 查无记录 102: 非法姓名(长度,格式等不正确) 103: 非法手机号(长度,格式等不正确) 104: 非法身份证号(长度,校验位等不正确) 105: 认证未通过 106: 验证平台异常 */
    Result?: number;
    /** 结果描述; 未通过时必选 */
    Description?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckMobileVerificationRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 手机号 */
    Mobile: string;
    /** 姓名 */
    Name: string;
    /** 身份证件号码 */
    IdCardNumber: string;
    /** 身份证件类型; ID_CARD */
    IdCardType?: string;
  }

  interface CheckMobileVerificationResponse {
    /** 检测结果计费结果码： 0: 验证结果一致 1: 手机号未实名 2: 姓名和手机号不一致 3: 信息不一致(手机号已实名,但姓名和身份证号与实名信息不一致)不收费结果码: 101: 查无记录 102: 非法姓名(长度,格式等不正确) 103: 非法手机号(长度,格式等不正确) 104: 非法身份证号(长度,校验位等不正确) 105: 认证未通过 106: 验证平台异常 */
    Result?: number;
    /** 结果描述; 未通过时必选 */
    Description?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CheckVerifyCodeMatchFlowIdRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 手机号 */
    Mobile: string;
    /** 验证码 */
    VerifyCode: string;
    /** 流程(目录) id */
    FlowId: string;
  }

  interface CheckVerifyCodeMatchFlowIdResponse {
    /** true: 验证码正确，false: 验证码错误 */
    Success: boolean;
    /** 0: 验证码正确 1:验证码错误或过期 2:验证码错误 3:验证码和流程不匹配 4:验证码输入错误超过次数 5:内部错误6:参数错误 */
    Result: number;
    /** 结果描述 */
    Description: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateFaceIdSignRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 除api_ticket之外的其它要参与签名的参数值,包括UserId */
    Values: string[];
  }

  interface CreateFaceIdSignResponse {
    /** 慧眼API签名 */
    Sign?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateFlowByFilesRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程创建信息 */
    FlowInfo: FlowInfo;
    /** 文件资源列表 (支持多文件) */
    FileIds: string[];
    /** 自定义流程id */
    CustomId?: string;
  }

  interface CreateFlowByFilesResponse {
    /** 流程ID */
    FlowId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateH5FaceIdUrlRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 慧眼业务ID; 不填写时后台使用Caller反查 */
    WbAppId?: string;
    /** 姓名; 可选(未通过实名认证的用户必选) */
    Name?: string;
    /** 用户证件类型; 可选; 默认ID_CARD:中国居民身份证 */
    IdCardType?: string;
    /** 用户证件号; 可选(未通过实名认证的用户必选) */
    IdCardNumber?: string;
    /** H5人脸核身完成后回调的第三方Url; 可选; 不需要做Encode, 跳转的参数: ?code=XX&orderNo=XX&liveRate=xx, code=0表示成功,orderNo为订单号,liveRate为百分制活体检测得分 */
    JumpUrl?: string;
    /** 参数值为"1":直接跳转到url回调地址; 可选; 其他值:跳转提供的结果页面 */
    JumpType?: string;
    /** browser:表示在浏览器启动刷脸, app:表示在App里启动刷脸,默认值为browser; 可选 */
    OpenFrom?: string;
    /** 跳转类型; 可选; 参数值为"1"时,刷脸页面使用replace方式跳转,不在浏览器history中留下记录;不传或其他值则正常跳转 */
    RedirectType?: string;
  }

  interface CreateH5FaceIdUrlResponse {
    /** 跳转到人脸核身页面的链接 */
    Url?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreatePreviewSignUrlRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** URL过期时间戳 */
    Deadline: number;
    /** 目录ID。当 SignUrlType 为 CATALOG 时必填 */
    CatalogId?: string;
    /** 流程ID。当 SignUrlType 为 FLOW 时必填 */
    FlowId?: string;
    /** 签署链接类型：1. FLOW - 单流程签署 (默认) 2. CATALOG - 目录签署 */
    SignUrlType?: string;
  }

  interface CreatePreviewSignUrlResponse {
    /** 合同预览URL */
    PreviewSignUrl: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 印章类型：1. PERSONAL - 个人私章2. OFFICIAL - 公章3. SPECIAL_FINANCIAL - 财务专用章4. CONTRACT - 合同专用章5. LEGAL_REPRESENTATIVE - 法定代表人章6. SPECIAL_NATIONWIDE_INVOICE - 发票专用章7. OTHER-其他 */
    SealType: string;
    /** 印章名称 */
    SealName: string;
    /** 请求创建印章的客户端IP */
    SourceIp: string;
    /** 印章图片，base64编码（与FileId参数二选一，同时传入参数时优先使用Image参数） */
    Image?: string;
    /** 印章文件图片ID（与Image参数二选一，同时传入参数时优先使用Image参数） */
    FileId?: string;
    /** 需要创建印章的用户ID */
    UserId?: string;
    /** 是否是默认印章 true：是，false：否 */
    IsDefault?: boolean;
  }

  interface CreateSealResponse {
    /** 电子印章Id */
    SealId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateServerFlowSignRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程ID */
    FlowId: string;
    /** 签署区域信息 */
    SignComponents: Component[];
    /** 客户端IP */
    SourceIp: string;
  }

  interface CreateServerFlowSignResponse {
    /** 任务状态：0：失败1：成功 */
    SignStatus: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateSignUrlRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 签署人ID */
    UserId: string;
    /** 文件签署截止时间戳 */
    Deadline: number;
    /** 目录ID。当 SignUrlType 为 CATALOG 时必填 */
    CatalogId?: string;
    /** 流程ID。当 SignUrlType 为 FLOW 时必填 */
    FlowId?: string;
    /** 签署链接类型：1. FLOW - 单流程签署 (默认) 2. CATALOG - 目录签署 */
    SignUrlType?: string;
    /** 发送流程或目录时生成的签署任务ID */
    SignId?: string;
  }

  interface CreateSignUrlResponse {
    /** 合同签署链接 */
    SignUrl: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateSubOrganizationAndSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 机构名称全称 */
    Name: string;
    /** 机构证件号码类型可选值：1. USCC - 统一社会信用代码2. BIZREGISTNO - 营业执照注册号 */
    IdCardType: string;
    /** 机构证件号码 */
    IdCardNumber: string;
    /** 机构类型可选值：1. ENTERPRISE - 企业2. INDIVIDUALBIZ - 个体工商户3. PUBLICINSTITUTION - 政府/事业单位4. OTHERS - 其他组织 */
    OrganizationType: string;
    /** 机构法人/经营者姓名 */
    LegalName: string;
    /** 机构法人/经营者证件类型可选值：1. ID_CARD - 居民身份证2. PASSPORT - 护照3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证5. HOUSEHOLD_REGISTER - 户口本6. TEMP_ID_CARD - 临时居民身份证 */
    LegalIdCardType: string;
    /** 机构法人/经营者证件号码；OrganizationType 为 ENTERPRISE时，INDIVIDUALBIZ 时必填，其他情况选填 */
    LegalIdCardNumber: string;
    /** 实名认证的客户端IP/请求生成企业印章的客户端Ip */
    VerifyClientIp: string;
    /** 机构电子邮箱 */
    Email?: string;
    /** 机构证件文件类型可选值：1. USCCFILE - 统一社会信用代码证书2. LICENSEFILE - 营业执照 */
    IdCardFileType?: string;
    /** 机构证件照片文件，base64编码，支持jpg、jpeg、png格式 */
    BizLicenseFile?: string;
    /** 机构证件照片文件名 */
    BizLicenseFileName?: string;
    /** 机构法人/经营者/联系人手机号码 */
    LegalMobile?: string;
    /** 组织联系人姓名 */
    ContactName?: string;
    /** 实名认证的服务器IP */
    VerifyServerIp?: string;
    /** 企业联系地址 */
    ContactAddress?: Address;
    /** 电子印章名称 */
    SealName?: string;
    /** 印章类型：默认: CONTRACT1. OFFICIAL-公章2. SPECIAL_FINANCIAL-财务专用章3. CONTRACT-合同专用章4. LEGAL_REPRESENTATIVE-法定代表人章5. SPECIAL_NATIONWIDE_INVOICE-发票专用章6. OTHER-其他 */
    SealType?: string;
    /** 企业印章横向文字，最多可填8个汉字（可为空，默认为"电子签名专用章"） */
    SealHorizontalText?: string;
    /** 机构在第三方的唯一标识，32位以内标识符 */
    OpenId?: string;
    /** 是否使用OpenId作为数据主键，如果为true，请确保OpenId在当前应用号唯一 */
    UseOpenId?: boolean;
  }

  interface CreateSubOrganizationAndSealResponse {
    /** 子机构在电子文件签署平台唯一标识 */
    SubOrganizationId: string;
    /** 电子印章ID */
    SealId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateSubOrganizationRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 机构证件号码类型可选值：1. USCC - 统一社会信用代码2. BIZREGISTNO - 营业执照注册号 */
    IdCardType: string;
    /** 机构证件号码 */
    IdCardNumber: string;
    /** 机构类型可选值：1. ENTERPRISE - 企业2. INDIVIDUALBIZ - 个体工商户3. PUBLICINSTITUTION - 政府/事业单位4. OTHERS - 其他组织 */
    OrganizationType: string;
    /** 机构法人/经营者姓名 */
    LegalName: string;
    /** 机构法人/经营者证件类型可选值：1. ID_CARD - 居民身份证2. PASSPORT - 护照3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证5. HOUSEHOLD_REGISTER - 户口本6. TEMP_ID_CARD - 临时居民身份证 */
    LegalIdCardType: string;
    /** 机构法人/经营者证件号码；OrganizationType 为 ENTERPRISE时，INDIVIDUALBIZ 时必填，其他情况选填 */
    LegalIdCardNumber: string;
    /** 机构名称全称 */
    Name: string;
    /** 机构在第三方的唯一标识，32位以内标识符 */
    OpenId?: string;
    /** 是否使用OpenId作为数据主键，如果为true，请确保OpenId在当前应用号唯一 */
    UseOpenId?: boolean;
    /** 机构证件文件类型可选值：1. USCCFILE - 统一社会信用代码证书2. LICENSEFILE - 营业执照 */
    IdCardFileType?: string;
    /** 机构证件照片文件，base64编码，支持jpg、jpeg、png格式 */
    BizLicenseFile?: string;
    /** 机构证件照片文件名 */
    BizLicenseFileName?: string;
    /** 机构法人/经营者/联系人手机号码 */
    LegalMobile?: string;
    /** 组织联系人姓名 */
    ContactName?: string;
    /** 实名认证的客户端IP */
    VerifyClientIp?: string;
    /** 实名认证的服务器IP */
    VerifyServerIp?: string;
    /** 企业联系地址 */
    ContactAddress?: Address;
    /** 机构电子邮箱 */
    Email?: string;
  }

  interface CreateSubOrganizationResponse {
    /** 子机构ID */
    SubOrganizationId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateUserAndSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 第三方平台唯一标识，要求应用内OpenId唯一 */
    OpenId: string;
    /** 用户姓名 */
    Name: string;
    /** 用户证件类型：1. ID_CARD - 居民身份证5. HOUSEHOLD_REGISTER - 户口本6. TEMP_ID_CARD - 临时居民身份证 */
    IdCardType: string;
    /** 用户证件号 */
    IdCardNumber: string;
    /** 请求生成个人印章的客户端IP */
    SourceIp: string;
    /** 用户手机号码，不要求唯一 */
    Mobile?: string;
    /** 用户邮箱，不要求唯一 */
    Email?: string;
    /** 默认印章名称 */
    SealName?: string;
    /** 是否以OpenId作为UserId (为true时将直接以OpenId生成腾讯电子签平台的UserId) */
    UseOpenId?: boolean;
  }

  interface CreateUserAndSealResponse {
    /** 用户唯一标识，按应用号隔离 */
    UserId: string;
    /** 默认印章ID */
    SealId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateUserRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 第三方平台唯一标识；要求应用内OpenId唯一; len<=32 */
    OpenId: string;
    /** 用户姓名 */
    Name: string;
    /** 用户证件类型：1. ID_CARD - 居民身份证2. PASSPORT - 护照3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证5. HOUSEHOLD_REGISTER - 户口本6. TEMP_ID_CARD - 临时居民身份证 */
    IdCardType: string;
    /** 用户证件号 */
    IdCardNumber: string;
    /** 是否以OpenId作为UserId (为true时将直接以OpenId生成腾讯电子签平台的UserId) */
    UseOpenId?: boolean;
    /** 用户邮箱，不要求唯一 */
    Email?: string;
    /** 用户手机号码，不要求唯一 */
    Mobile?: string;
  }

  interface CreateUserResponse {
    /** 用户ID，按应用号隔离 */
    UserId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 印章ID */
    SealId: string;
    /** 请求删除印章的客户端IP */
    SourceIp: string;
    /** 用户唯一标识，默认为空时删除企业印章，如非空则删除个人印章 */
    UserId?: string;
  }

  interface DeleteSealResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCatalogApproversRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 目录ID */
    CatalogId: string;
    /** 查询指定用户是否为参与者,为空表示查询所有参与者 */
    UserId?: string;
  }

  interface DescribeCatalogApproversResponse {
    /** 参与者列表 */
    Approvers: CatalogApprovers[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCatalogSignComponentsRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 目录ID */
    CatalogId: string;
  }

  interface DescribeCatalogSignComponentsResponse {
    /** 签署区列表 */
    SignComponents: CatalogComponents[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCustomFlowIdsByFlowIdRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程 id 列表，最多同时查询 10 个流程 id */
    FlowIds: string[];
  }

  interface DescribeCustomFlowIdsByFlowIdResponse {
    /** 自定义流程 id 映射列表 */
    CustomIdList: CustomFlowIdMap[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeCustomFlowIdsRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 自定义 id 列表，最多同时查询 10 个自定义 id */
    CustomIds: string[];
  }

  interface DescribeCustomFlowIdsResponse {
    /** 自定义流程 id 映射列表 */
    CustomIdList: CustomFlowIdMap[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFaceIdPhotosRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 慧眼业务ID */
    WbAppId: string;
    /** 订单号(orderNo); 限制在3个或以内 */
    OrderNumbers: string[];
  }

  interface DescribeFaceIdPhotosResponse {
    /** 照片信息列表 */
    Photos?: FaceIdPhoto[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFaceIdResultsRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 慧眼业务ID */
    WbAppId: string;
    /** 订单号(orderNo); 限制在3个或以内 */
    OrderNumbers: string[];
    /** 1:视频+照片,2:照片,3:视频,0（或其他数字）:无; 可选 */
    FileType?: number;
  }

  interface DescribeFaceIdResultsResponse {
    /** 核身结果列表 */
    Results?: FaceIdResult[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFileIdsByCustomIdsRequest {
    /** 调用方信息, OrganizationId必填 */
    Caller: Caller;
    /** 用户自定义ID */
    CustomIds?: string[];
  }

  interface DescribeFileIdsByCustomIdsResponse {
    /** <自定义Id,文件id>数组 */
    CustomIdList: CustomFileIdMap[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFileUrlsRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 业务编号数组，如模板编号、文档编号、印章编号、流程编号、目录编号 */
    BusinessIds: string[];
    /** 业务类型：1. TEMPLATE - 模板2. SEAL - 印章3. FLOW - 流程4.CATALOG - 目录 */
    BusinessType: string;
    /** 下载后的文件命名，只有FileType为“ZIP”时生效 */
    FileName?: string;
    /** 单个业务ID多个资源情况下，指定资源起始偏移量 */
    ResourceOffset?: number;
    /** 单个业务ID多个资源情况下，指定资源数量 */
    ResourceLimit?: number;
    /** 文件类型，支持"JPG", "PDF","ZIP"等，默认为上传的文件类型 */
    FileType?: string;
  }

  interface DescribeFileUrlsResponse {
    /** 文件下载URL数组 */
    FileUrls: FileUrl[];
    /** URL数量 */
    TotalCount: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFlowApproversRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 需要查询的流程ID */
    FlowId: string;
    /** 需要查询的用户ID，为空则默认查询所有用户信息 */
    UserId?: string;
    /** 需要查询的签署ID，为空则不按签署ID过滤 */
    SignId?: string;
  }

  interface DescribeFlowApproversResponse {
    /** 流程编号 */
    FlowId: string;
    /** 流程参与者信息 */
    Approvers: FlowApproverInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFlowFilesRequest {
    /** 调用方信息; 必选 */
    Caller: Caller;
    /** 需要查询的流程ID */
    FlowId: string;
  }

  interface DescribeFlowFilesResponse {
    /** 流程编号 */
    FlowId?: string;
    /** 流程文件列表 */
    FlowFileInfos?: FlowFileInfo[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeFlowRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 需要查询的流程ID */
    FlowId: string;
  }

  interface DescribeFlowResponse {
    /** 流程创建者信息 */
    Creator: Caller;
    /** 流程编号 */
    FlowId: string;
    /** 流程名称 */
    FlowName: string;
    /** 流程描述 */
    FlowDescription: string;
    /** 流程的类型: ”劳务合同“,”租赁合同“,”销售合同“,”其他“ */
    FlowType: string;
    /** 流程状态：0-创建；1-签署中；2-拒签；3-撤回；4-签完存档完成；5-已过期；6-已销毁7-签署完成未归档 */
    FlowStatus: number;
    /** 流程创建时间 */
    CreatedOn: number;
    /** 流程完成时间 */
    UpdatedOn: number;
    /** 流程截止日期 */
    Deadline: number;
    /** 回调地址 */
    CallbackUrl: string;
    /** 流程中止原因 */
    FlowMessage: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeSealsRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 印章ID列表 */
    SealIds: string[];
    /** 用户唯一标识 */
    UserId?: string;
  }

  interface DescribeSealsResponse {
    /** 印章信息 */
    Seals: Seal[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeSubOrganizationsRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 子机构ID数组 */
    SubOrganizationIds: string[];
  }

  interface DescribeSubOrganizationsResponse {
    /** 子机构信息列表 */
    SubOrganizationInfos: SubOrganizationDetail[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DescribeUsersRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** UserId列表，最多支持100个UserId */
    UserIds: string[];
  }

  interface DescribeUsersResponse {
    /** 用户信息查询结果 */
    Users: UserDescribe[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DestroyFlowFileRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程ID */
    FlowId: string;
  }

  interface DestroyFlowFileResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GenerateOrganizationSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 印章类型：OFFICIAL-公章SPECIAL_FINANCIAL-财务专用章CONTRACT-合同专用章LEGAL_REPRESENTATIVE-法定代表人章SPECIAL_NATIONWIDE_INVOICE-发票专用章OTHER-其他 */
    SealType: string;
    /** 请求生成企业印章的客户端Ip */
    SourceIp: string;
    /** 电子印章名称 */
    SealName?: string;
    /** 企业印章横向文字，最多可填8个汉字（可不填，默认为"电子签名专用章"） */
    SealHorizontalText?: string;
    /** 是否是默认印章 true：是，false：否 */
    IsDefault?: boolean;
  }

  interface GenerateOrganizationSealResponse {
    /** 电子印章Id */
    SealId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GenerateUserSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 用户ID */
    UserId: string;
    /** 请求生成个人印章的客户端IP */
    SourceIp: string;
    /** 电子印章名称 */
    SealName?: string;
    /** 是否是默认印章 true：是，false：否 */
    IsDefault?: boolean;
  }

  interface GenerateUserSealResponse {
    /** 电子印章Id */
    SealId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyOrganizationDefaultSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 重新指定的默认印章ID */
    SealId: string;
    /** 请求重新指定企业默认印章的客户端IP */
    SourceIp: string;
  }

  interface ModifyOrganizationDefaultSealResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifySealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 请求更新印章的客户端IP */
    SourceIp: string;
    /** 电子印章ID。若为空，则修改个人/机构的默认印章。 */
    SealId?: string;
    /** 电子印章名称 */
    SealName?: string;
    /** 印章图片，base64编码（与FileId参数二选一，同时传入参数时优先使用Image参数） */
    Image?: string;
    /** 印章图片文件ID（与Image参数二选一，同时传入参数时优先使用Image参数） */
    FileId?: string;
    /** 需要更新印章的用户ID */
    UserId?: string;
  }

  interface ModifySealResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifySubOrganizationInfoRequest {
    /** 调用方信息，该接口 SubOrganizationId 字段与 OpenId 字段二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息 */
    Caller: Caller;
    /** 机构在第三方的唯一标识，32位定长字符串，与 Caller 中 SubOrgnizationId 二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息 */
    OpenId?: string;
    /** 机构名称全称，修改后机构状态将变为未实名，需要调用实名接口重新实名。 */
    Name?: string;
    /** 机构类型可选值：1. ENTERPRISE - 企业；2. INDIVIDUALBIZ - 个体工商户；3. PUBLICINSTITUTION - 政府/事业单位4. OTHERS - 其他组织 */
    OrganizationType?: string;
    /** 机构证件照片文件，base64编码。支持jpg，jpeg，png格式；如果传值，则重新上传文件后，机构状态将变为未实名，需要调用实名接口重新实名。 */
    BizLicenseFile?: string;
    /** 机构证件照片文件名 */
    BizLicenseFileName?: string;
    /** 机构法人/经营者姓名 */
    LegalName?: string;
    /** 机构法人/经营者证件类型，可选值：ID_CARD - 居民身份证。OrganizationType 为 ENTERPRISE、INDIVIDUALBIZ 时，此项必填，其他情况选填。 */
    LegalIdCardType?: string;
    /** 机构法人/经营者证件号码。OrganizationType 为 ENTERPRISE、INDIVIDUALBIZ 时，此项必填，其他情况选填 */
    LegalIdCardNumber?: string;
    /** 机构法人/经营者/联系人手机号码 */
    LegalMobile?: string;
    /** 组织联系人姓名 */
    ContactName?: string;
    /** 企业联系地址 */
    ContactAddress?: Address;
    /** 机构电子邮箱 */
    Email?: string;
  }

  interface ModifySubOrganizationInfoResponse {
    /** 子机构ID */
    SubOrganizationId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyUserDefaultSealRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 用户唯一标识，需要重新指定默认印章的用户ID */
    UserId: string;
    /** 重新指定的默认印章ID */
    SealId: string;
    /** 请求重新指定个人默认印章的客户端IP */
    SourceIp: string;
  }

  interface ModifyUserDefaultSealResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyUserRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 第三方平台用户唯一标识; OpenId 和 UserId 二选一填写, 两个都不为空则优先使用UserId */
    OpenId?: string;
    /** 腾讯电子签平台用户唯一标识; OpenId 和 UserId 二选一填写, 两个都不为空则优先使用UserId */
    UserId?: string;
    /** 用户手机号码，不要求唯一 */
    Mobile?: string;
    /** 用户邮箱，不要求唯一 */
    Email?: string;
    /** 用户姓名 */
    Name?: string;
  }

  interface ModifyUserResponse {
    /** 腾讯电子签平台用户唯一标识 */
    UserId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RejectFlowRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程编号 */
    FlowId: string;
    /** 意愿确认票据。1. VerifyChannel 为 WEIXINAPP，使用响应的VerifyResult；2. VerifyChannel 为 FACEID时，使用OrderNo；3. VerifyChannel 为 VERIFYCODE，使用短信验证码4. VerifyChannel 为 NONE，传空值（注：普通情况下，VerifyResult不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系） */
    VerifyResult: string;
    /** 意愿确认渠道：1. WEIXINAPP - 微信小程序2. FACEID - 慧眼 (默认) 3. VERIFYCODE - 验证码4. THIRD - 第三方 (暂不支持)5. NONE - 无需电子签系统验证（注：普通情况下，VerifyChannel不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系） */
    VerifyChannel: string;
    /** 客户端来源IP */
    SourceIp: string;
    /** 拒签原因 */
    RejectMessage?: string;
    /** 签署参与者编号 */
    SignId?: string;
  }

  interface RejectFlowResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SendFlowRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 需要推送合同的流程ID */
    FlowId: string;
    /** 签署人用户ID */
    UserId: string;
    /** 签署控件信息 (支持添加多个控件) */
    SignComponents: Component[];
    /** 签署人手机号 (如果选择短信验证码签署，则此字段必填) */
    Mobile?: string;
    /** 签署人对应的子机构ID，个人签署者此字段不填 */
    SubOrganizationId?: string;
    /** 签名后校验方式：1. WEIXINAPP - 微信小程序；2. FACEID - 慧眼 (默认) ；3. VERIFYCODE - 验证码；4. NONE - 无。此选项为白名单参数，暂不支持公开调用。如需开通权限，请通过客户经理或邮件至e-contract@tencent.com与我们联系；5. THIRD - 第三方 (暂不支持) */
    VerifyChannel?: string[];
    /** 签署链接失效截止时间，默认为7天 */
    Deadline?: number;
    /** 是否为最后一个签署人。若为最后一人，本次签署完成以后自动归档。 */
    IsLastApprover?: boolean;
    /** 签署完成后，前端跳转的URL */
    JumpUrl?: string;
    /** 短信模板。默认使用腾讯电子签官方短信模板，如有自定义需求，请通过客户经理或邮件至e-contract@tencent.com与我们联系。 */
    SmsTemplate?: SmsTemplate;
    /** 签署前置条件：是否要全文阅读，默认否 */
    IsFullText?: boolean;
    /** 签署前置条件：强制用户阅读待签署文件时长，默认不限制 */
    PreReadTime?: number;
    /** 当前参与者是否支持线下核身,默认为不支持 */
    CanOffLine?: boolean;
    /** 签署任务的回调地址 */
    CallbackUrl?: string;
  }

  interface SendFlowResponse {
    /** 签署任务ID，标识每一次的流程发送 */
    SignId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SendFlowUrlRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 需要推送合同的流程ID */
    FlowId: string;
    /** 签署人ID */
    UserId: string;
    /** 签署控件信息 (支持添加多个控件) */
    SignComponents: Component[];
    /** 签署人手机号 (如果选择短信验证码签署，则此字段必填) */
    Mobile?: string;
    /** 签署人对应的子机构ID，个人签署者此字段不填 */
    SubOrganizationId?: string;
    /** 签名后校验方式：1. WEIXINAPP - 微信小程序；2. FACEID - 慧眼 (默认) ；3. VERIFYCODE - 验证码；4. NONE - 无。此选项为白名单参数，暂不支持公开调用。如需开通权限，请通过客户经理或邮件至e-contract@tencent.com与我们联系；5. THIRD - 第三方 (暂不支持)6. OFFLINE - 线下人工审核 */
    VerifyChannel?: string[];
    /** 签署链接失效截止时间，默认为7天 */
    Deadline?: number;
    /** 是否为最后一个签署人。若为最后一人，本次签署完成以后自动归档 */
    IsLastApprover?: boolean;
    /** 签署完成后，前端跳转的url */
    JumpUrl?: string;
    /** 短信模板默认使用腾讯电子签官方短信模板，如有自定义需求，请通过客户经理或邮件至e-contract@tencent.com与我们联系。 */
    SmsTemplate?: SmsTemplate;
    /** 签署前置条件：是否要全文阅读，默认否 */
    IsFullText?: boolean;
    /** 签署前置条件：强制用户阅读待签署文件时长，默认不限制 */
    PreReadTime?: number;
    /** 当前参与者是否支持线下核身,默认为不支持 */
    CanOffLine?: boolean;
    /** 签署任务的回调地址 */
    CallbackUrl?: string;
  }

  interface SendFlowUrlResponse {
    /** 签署任务ID，标识每一次的流程发送 */
    SignId: string;
    /** 签署链接 */
    SignUrl?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SendSignInnerVerifyCodeRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 手机号 */
    Mobile: string;
    /** 验证码类型，取值(SIGN) */
    VerifyType: string;
    /** 用户 id */
    UserId?: string;
    /** 模板 id */
    VerifyTemplateId?: string;
    /** 签名 */
    VerifySign?: string;
    /** 流程(目录) id */
    FlowId?: string;
    /** 三要素检测结果 */
    CheckThreeElementResult?: number;
  }

  interface SendSignInnerVerifyCodeResponse {
    /** true: 验证码正确，false: 验证码错误 */
    Result: boolean;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SignFlowRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程编号 */
    FlowId: string;
    /** 意愿确认票据。1. VerifyChannel 为 WEIXINAPP，使用响应的VerifyResult；2. VerifyChannel 为 FACEID时，使用OrderNo；3. VerifyChannel 为 VERIFYCODE，使用短信验证码4. VerifyChannel 为 NONE，传空值（注：普通情况下，VerifyResult不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系） */
    VerifyResult: string;
    /** 意愿确认渠道：1. WEIXINAPP - 微信小程序2. FACEID - 慧眼 (默认) 3. VERIFYCODE - 验证码4. THIRD - 第三方 (暂不支持)5. NONE - 无需电子签系统验证（注：普通情况下，VerifyChannel不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系） */
    VerifyChannel: string;
    /** 客户端来源IP */
    SourceIp: string;
    /** 签署内容 */
    SignSeals: SignSeal[];
    /** 签署备注 */
    ApproveMessage?: string;
    /** 签署参与者编号 */
    SignId?: string;
  }

  interface SignFlowResponse {
    /** 签署任务状态。签署成功 - SUCCESS、提交审核 - REVIEW */
    Status: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UploadFilesRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 文件对应业务类型，用于区分文件存储路径：1. TEMPLATE - 模版； 文件类型：.pdf/.html2. DOCUMENT - 签署过程及签署后的合同文档 文件类型：.pdf/.html3. FLOW - 签署过程 文件类型：.pdf/.html4. SEAL - 印章； 文件类型：.jpg/.jpeg/.png5. BUSINESSLICENSE - 营业执照 文件类型：.jpg/.jpeg/.png6. IDCARD - 身份证 文件类型：.jpg/.jpeg/.png */
    BusinessType: string;
    /** 上传文件内容数组，最多支持20个文件 */
    FileInfos?: UploadFile[];
    /** 上传文件链接数组，最多支持20个URL */
    FileUrls?: string[];
    /** 是否将pdf灰色矩阵置白true--是，处理置白false--否，不处理 */
    CoverRect?: boolean;
    /** 特殊文件类型需要指定文件类型：HTML-- .html文件 */
    FileType?: string;
    /** 用户自定义ID数组，与上传文件一一对应 */
    CustomIds?: string[];
  }

  interface UploadFilesResponse {
    /** 文件id数组 */
    FileIds: string[];
    /** 上传成功文件数量 */
    TotalCount: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface VerifySubOrganizationRequest {
    /** 调用方信息，该接口SubOrganizationId必填 */
    Caller: Caller;
    /** 机构在第三方的唯一标识，32位定长字符串，与 Caller 中 SubOrgnizationId 二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息 */
    OpenId?: string;
  }

  interface VerifySubOrganizationResponse {
    /** 子机构ID */
    SubOrganizationId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface VerifyUserRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 电子签平台用户ID */
    UserId: string;
    /** 是否需要下发个人长效证书，默认为false注：如您有下发个人长效证书需求，请提前邮件至e-contract@oa.com进行申请。 */
    CertificateRequired?: boolean;
  }

  interface VerifyUserResponse {
    /** 电子签平台用户ID */
    UserId?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** {@link Essbasic 腾讯电子签（基础版）} */
declare interface Essbasic {
  (): Versions;
  /** {@link ChannelBatchCancelFlows 电子签渠道版-根据签署流程id批量撤销合同}({@link ChannelBatchCancelFlowsRequest 请求参数}): {@link ChannelBatchCancelFlowsResponse 返回参数} */
  ChannelBatchCancelFlows(data: ChannelBatchCancelFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelBatchCancelFlowsResponse>;
  /** {@link ChannelCancelFlow 渠道版撤销签署流程}({@link ChannelCancelFlowRequest 请求参数}): {@link ChannelCancelFlowResponse 返回参数} */
  ChannelCancelFlow(data: ChannelCancelFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCancelFlowResponse>;
  /** {@link ChannelCancelMultiFlowSignQRCode 取消一码多扫二维码}({@link ChannelCancelMultiFlowSignQRCodeRequest 请求参数}): {@link ChannelCancelMultiFlowSignQRCodeResponse 返回参数} */
  ChannelCancelMultiFlowSignQRCode(data: ChannelCancelMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCancelMultiFlowSignQRCodeResponse>;
  /** {@link ChannelCreateBatchCancelFlowUrl 电子签渠道版-根据签署流程id创建批量撤销url}({@link ChannelCreateBatchCancelFlowUrlRequest 请求参数}): {@link ChannelCreateBatchCancelFlowUrlResponse 返回参数} */
  ChannelCreateBatchCancelFlowUrl(data: ChannelCreateBatchCancelFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateBatchCancelFlowUrlResponse>;
  /** {@link ChannelCreateConvertTaskApi 渠道创建文件转换任务}({@link ChannelCreateConvertTaskApiRequest 请求参数}): {@link ChannelCreateConvertTaskApiResponse 返回参数} */
  ChannelCreateConvertTaskApi(data: ChannelCreateConvertTaskApiRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateConvertTaskApiResponse>;
  /** {@link ChannelCreateFlowByFiles 渠道版通过文件创建签署流程}({@link ChannelCreateFlowByFilesRequest 请求参数}): {@link ChannelCreateFlowByFilesResponse 返回参数} */
  ChannelCreateFlowByFiles(data?: ChannelCreateFlowByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowByFilesResponse>;
  /** {@link ChannelCreateFlowGroupByFiles 通过多文件创建合同组签署流程}({@link ChannelCreateFlowGroupByFilesRequest 请求参数}): {@link ChannelCreateFlowGroupByFilesResponse 返回参数} */
  ChannelCreateFlowGroupByFiles(data: ChannelCreateFlowGroupByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowGroupByFilesResponse>;
  /** {@link ChannelCreateFlowSignReview 提交企业签署流程审批结果}({@link ChannelCreateFlowSignReviewRequest 请求参数}): {@link ChannelCreateFlowSignReviewResponse 返回参数} */
  ChannelCreateFlowSignReview(data: ChannelCreateFlowSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowSignReviewResponse>;
  /** {@link ChannelCreateMultiFlowSignQRCode 创建一码多扫签署流程二维码}({@link ChannelCreateMultiFlowSignQRCodeRequest 请求参数}): {@link ChannelCreateMultiFlowSignQRCodeResponse 返回参数} */
  ChannelCreateMultiFlowSignQRCode(data: ChannelCreateMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateMultiFlowSignQRCodeResponse>;
  /** {@link ChannelDescribeEmployees 查询企业员工}({@link ChannelDescribeEmployeesRequest 请求参数}): {@link ChannelDescribeEmployeesResponse 返回参数} */
  ChannelDescribeEmployees(data: ChannelDescribeEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeEmployeesResponse>;
  /** {@link ChannelGetTaskResultApi 渠道版查询转换任务状态}({@link ChannelGetTaskResultApiRequest 请求参数}): {@link ChannelGetTaskResultApiResponse 返回参数} */
  ChannelGetTaskResultApi(data: ChannelGetTaskResultApiRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelGetTaskResultApiResponse>;
  /** {@link ChannelVerifyPdf 合同文件验签}({@link ChannelVerifyPdfRequest 请求参数}): {@link ChannelVerifyPdfResponse 返回参数} */
  ChannelVerifyPdf(data: ChannelVerifyPdfRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelVerifyPdfResponse>;
  /** {@link CreateConsoleLoginUrl 生成控制台链接}({@link CreateConsoleLoginUrlRequest 请求参数}): {@link CreateConsoleLoginUrlResponse 返回参数} */
  CreateConsoleLoginUrl(data: CreateConsoleLoginUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsoleLoginUrlResponse>;
  /** {@link CreateFlowsByTemplates 使用多个模板批量创建签署流程}({@link CreateFlowsByTemplatesRequest 请求参数}): {@link CreateFlowsByTemplatesResponse 返回参数} */
  CreateFlowsByTemplates(data: CreateFlowsByTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowsByTemplatesResponse>;
  /** {@link CreateSealByImage 渠道通过图片为子客代创建印章}({@link CreateSealByImageRequest 请求参数}): {@link CreateSealByImageResponse 返回参数} */
  CreateSealByImage(data: CreateSealByImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealByImageResponse>;
  /** {@link CreateSignUrls 获取跳转小程序查看或签署链接}({@link CreateSignUrlsRequest 请求参数}): {@link CreateSignUrlsResponse 返回参数} */
  CreateSignUrls(data: CreateSignUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSignUrlsResponse>;
  /** {@link DescribeFlowDetailInfo 查询合同(签署流程)的详细信息}({@link DescribeFlowDetailInfoRequest 请求参数}): {@link DescribeFlowDetailInfoResponse 返回参数} */
  DescribeFlowDetailInfo(data: DescribeFlowDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowDetailInfoResponse>;
  /** {@link DescribeResourceUrlsByFlows 根据签署流程信息批量获取资源下载链接}({@link DescribeResourceUrlsByFlowsRequest 请求参数}): {@link DescribeResourceUrlsByFlowsResponse 返回参数} */
  DescribeResourceUrlsByFlows(data: DescribeResourceUrlsByFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceUrlsByFlowsResponse>;
  /** {@link DescribeTemplates 查询模板信息列表}({@link DescribeTemplatesRequest 请求参数}): {@link DescribeTemplatesResponse 返回参数} */
  DescribeTemplates(data: DescribeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplatesResponse>;
  /** {@link DescribeUsage 渠道用量查询}({@link DescribeUsageRequest 请求参数}): {@link DescribeUsageResponse 返回参数} */
  DescribeUsage(data: DescribeUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsageResponse>;
  /** {@link GetDownloadFlowUrl 获取合同（流程）批量下载链接}({@link GetDownloadFlowUrlRequest 请求参数}): {@link GetDownloadFlowUrlResponse 返回参数} */
  GetDownloadFlowUrl(data: GetDownloadFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GetDownloadFlowUrlResponse>;
  /** {@link OperateChannelTemplate 操作渠道模板}({@link OperateChannelTemplateRequest 请求参数}): {@link OperateChannelTemplateResponse 返回参数} */
  OperateChannelTemplate(data: OperateChannelTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<OperateChannelTemplateResponse>;
  /** {@link PrepareFlows 准备待发起文件}({@link PrepareFlowsRequest 请求参数}): {@link PrepareFlowsResponse 返回参数} */
  PrepareFlows(data: PrepareFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<PrepareFlowsResponse>;
  /** {@link SyncProxyOrganization 同步企业信息}({@link SyncProxyOrganizationRequest 请求参数}): {@link SyncProxyOrganizationResponse 返回参数} */
  SyncProxyOrganization(data: SyncProxyOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<SyncProxyOrganizationResponse>;
  /** {@link SyncProxyOrganizationOperators 同步企业经办人列表}({@link SyncProxyOrganizationOperatorsRequest 请求参数}): {@link SyncProxyOrganizationOperatorsResponse 返回参数} */
  SyncProxyOrganizationOperators(data: SyncProxyOrganizationOperatorsRequest, config?: AxiosRequestConfig): AxiosPromise<SyncProxyOrganizationOperatorsResponse>;
  /** {@link UploadFiles 文件上传}({@link UploadFilesRequest 请求参数}): {@link UploadFilesResponse 返回参数} */
  UploadFiles(data: UploadFilesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFilesResponse>;
  /** {@link V20201222.ArchiveFlow 归档流程}({@link V20201222.ArchiveFlowRequest 请求参数}): {@link V20201222.ArchiveFlowResponse 返回参数} */
  ArchiveFlow(data: V20201222.ArchiveFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ArchiveFlowResponse>;
  /** {@link V20201222.CancelFlow 撤销流程}({@link V20201222.CancelFlowRequest 请求参数}): {@link V20201222.CancelFlowResponse 返回参数} */
  CancelFlow(data: V20201222.CancelFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CancelFlowResponse>;
  /** {@link V20201222.CheckBankCard2EVerification 银行卡二要素检测}({@link V20201222.CheckBankCard2EVerificationRequest 请求参数}): {@link V20201222.CheckBankCard2EVerificationResponse 返回参数} */
  CheckBankCard2EVerification(data: V20201222.CheckBankCard2EVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCard2EVerificationResponse>;
  /** {@link V20201222.CheckBankCard3EVerification 银行卡三要素检测}({@link V20201222.CheckBankCard3EVerificationRequest 请求参数}): {@link V20201222.CheckBankCard3EVerificationResponse 返回参数} */
  CheckBankCard3EVerification(data: V20201222.CheckBankCard3EVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCard3EVerificationResponse>;
  /** {@link V20201222.CheckBankCard4EVerification 银行卡四要素检测}({@link V20201222.CheckBankCard4EVerificationRequest 请求参数}): {@link V20201222.CheckBankCard4EVerificationResponse 返回参数} */
  CheckBankCard4EVerification(data: V20201222.CheckBankCard4EVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCard4EVerificationResponse>;
  /** {@link V20201222.CheckBankCardVerification 银行卡二三四要素检测}({@link V20201222.CheckBankCardVerificationRequest 请求参数}): {@link V20201222.CheckBankCardVerificationResponse 返回参数} */
  CheckBankCardVerification(data: V20201222.CheckBankCardVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCardVerificationResponse>;
  /** {@link V20201222.CheckFaceIdentify 检测人脸核身结果}({@link V20201222.CheckFaceIdentifyRequest 请求参数}): {@link V20201222.CheckFaceIdentifyResponse 返回参数} */
  CheckFaceIdentify(data: V20201222.CheckFaceIdentifyRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckFaceIdentifyResponse>;
  /** {@link V20201222.CheckIdCardVerification 身份证核验}({@link V20201222.CheckIdCardVerificationRequest 请求参数}): {@link V20201222.CheckIdCardVerificationResponse 返回参数} */
  CheckIdCardVerification(data: V20201222.CheckIdCardVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckIdCardVerificationResponse>;
  /** {@link V20201222.CheckMobileAndName 手机号二要素核验}({@link V20201222.CheckMobileAndNameRequest 请求参数}): {@link V20201222.CheckMobileAndNameResponse 返回参数} */
  CheckMobileAndName(data: V20201222.CheckMobileAndNameRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckMobileAndNameResponse>;
  /** {@link V20201222.CheckMobileVerification 手机号三要素核验}({@link V20201222.CheckMobileVerificationRequest 请求参数}): {@link V20201222.CheckMobileVerificationResponse 返回参数} */
  CheckMobileVerification(data: V20201222.CheckMobileVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckMobileVerificationResponse>;
  /** {@link V20201222.CheckVerifyCodeMatchFlowId 确认验证码}({@link V20201222.CheckVerifyCodeMatchFlowIdRequest 请求参数}): {@link V20201222.CheckVerifyCodeMatchFlowIdResponse 返回参数} */
  CheckVerifyCodeMatchFlowId(data: V20201222.CheckVerifyCodeMatchFlowIdRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckVerifyCodeMatchFlowIdResponse>;
  /** {@link V20201222.CreateFaceIdSign 生成慧眼API签名}({@link V20201222.CreateFaceIdSignRequest 请求参数}): {@link V20201222.CreateFaceIdSignResponse 返回参数} */
  CreateFaceIdSign(data: V20201222.CreateFaceIdSignRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateFaceIdSignResponse>;
  /** {@link V20201222.CreateFlowByFiles 用PDF文件创建流程}({@link V20201222.CreateFlowByFilesRequest 请求参数}): {@link V20201222.CreateFlowByFilesResponse 返回参数} */
  CreateFlowByFiles(data: V20201222.CreateFlowByFilesRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateFlowByFilesResponse>;
  /** {@link V20201222.CreateH5FaceIdUrl 获取慧眼H5人脸核身Url}({@link V20201222.CreateH5FaceIdUrlRequest 请求参数}): {@link V20201222.CreateH5FaceIdUrlResponse 返回参数} */
  CreateH5FaceIdUrl(data: V20201222.CreateH5FaceIdUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateH5FaceIdUrlResponse>;
  /** {@link V20201222.CreatePreviewSignUrl 生成预览签署URL}({@link V20201222.CreatePreviewSignUrlRequest 请求参数}): {@link V20201222.CreatePreviewSignUrlResponse 返回参数} */
  CreatePreviewSignUrl(data: V20201222.CreatePreviewSignUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreatePreviewSignUrlResponse>;
  /** {@link V20201222.CreateSeal 创建印章}({@link V20201222.CreateSealRequest 请求参数}): {@link V20201222.CreateSealResponse 返回参数} */
  CreateSeal(data: V20201222.CreateSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSealResponse>;
  /** {@link V20201222.CreateServerFlowSign 流程静默签署}({@link V20201222.CreateServerFlowSignRequest 请求参数}): {@link V20201222.CreateServerFlowSignResponse 返回参数} */
  CreateServerFlowSign(data: V20201222.CreateServerFlowSignRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateServerFlowSignResponse>;
  /** {@link V20201222.CreateSignUrl 生成签署URL}({@link V20201222.CreateSignUrlRequest 请求参数}): {@link V20201222.CreateSignUrlResponse 返回参数} */
  CreateSignUrl(data: V20201222.CreateSignUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSignUrlResponse>;
  /** {@link V20201222.CreateSubOrganization 注册子机构}({@link V20201222.CreateSubOrganizationRequest 请求参数}): {@link V20201222.CreateSubOrganizationResponse 返回参数} */
  CreateSubOrganization(data: V20201222.CreateSubOrganizationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSubOrganizationResponse>;
  /** {@link V20201222.CreateSubOrganizationAndSeal 注册实名子机构并生成印章}({@link V20201222.CreateSubOrganizationAndSealRequest 请求参数}): {@link V20201222.CreateSubOrganizationAndSealResponse 返回参数} */
  CreateSubOrganizationAndSeal(data: V20201222.CreateSubOrganizationAndSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSubOrganizationAndSealResponse>;
  /** {@link V20201222.CreateUser 注册个人用户}({@link V20201222.CreateUserRequest 请求参数}): {@link V20201222.CreateUserResponse 返回参数} */
  CreateUser(data: V20201222.CreateUserRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateUserResponse>;
  /** {@link V20201222.CreateUserAndSeal 注册实名个人用户并生成签名}({@link V20201222.CreateUserAndSealRequest 请求参数}): {@link V20201222.CreateUserAndSealResponse 返回参数} */
  CreateUserAndSeal(data: V20201222.CreateUserAndSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateUserAndSealResponse>;
  /** {@link V20201222.DeleteSeal 删除印章}({@link V20201222.DeleteSealRequest 请求参数}): {@link V20201222.DeleteSealResponse 返回参数} */
  DeleteSeal(data: V20201222.DeleteSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DeleteSealResponse>;
  /** {@link V20201222.DescribeCatalogApprovers 拉取流程目录参与者的信息}({@link V20201222.DescribeCatalogApproversRequest 请求参数}): {@link V20201222.DescribeCatalogApproversResponse 返回参数} */
  DescribeCatalogApprovers(data: V20201222.DescribeCatalogApproversRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCatalogApproversResponse>;
  /** {@link V20201222.DescribeCatalogSignComponents 拉取目录签署区}({@link V20201222.DescribeCatalogSignComponentsRequest 请求参数}): {@link V20201222.DescribeCatalogSignComponentsResponse 返回参数} */
  DescribeCatalogSignComponents(data: V20201222.DescribeCatalogSignComponentsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCatalogSignComponentsResponse>;
  /** {@link V20201222.DescribeCustomFlowIds 根据用户自定义id查询流程id}({@link V20201222.DescribeCustomFlowIdsRequest 请求参数}): {@link V20201222.DescribeCustomFlowIdsResponse 返回参数} */
  DescribeCustomFlowIds(data: V20201222.DescribeCustomFlowIdsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCustomFlowIdsResponse>;
  /** {@link V20201222.DescribeCustomFlowIdsByFlowId 根据流程id反查自定义流程id}({@link V20201222.DescribeCustomFlowIdsByFlowIdRequest 请求参数}): {@link V20201222.DescribeCustomFlowIdsByFlowIdResponse 返回参数} */
  DescribeCustomFlowIdsByFlowId(data: V20201222.DescribeCustomFlowIdsByFlowIdRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCustomFlowIdsByFlowIdResponse>;
  /** {@link V20201222.DescribeFaceIdPhotos 查询慧眼人脸核身照片}({@link V20201222.DescribeFaceIdPhotosRequest 请求参数}): {@link V20201222.DescribeFaceIdPhotosResponse 返回参数} */
  DescribeFaceIdPhotos(data: V20201222.DescribeFaceIdPhotosRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFaceIdPhotosResponse>;
  /** {@link V20201222.DescribeFaceIdResults 获取慧眼人脸核身结果}({@link V20201222.DescribeFaceIdResultsRequest 请求参数}): {@link V20201222.DescribeFaceIdResultsResponse 返回参数} */
  DescribeFaceIdResults(data: V20201222.DescribeFaceIdResultsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFaceIdResultsResponse>;
  /** {@link V20201222.DescribeFileIdsByCustomIds 根据用户自定义id查询文件id}({@link V20201222.DescribeFileIdsByCustomIdsRequest 请求参数}): {@link V20201222.DescribeFileIdsByCustomIdsResponse 返回参数} */
  DescribeFileIdsByCustomIds(data: V20201222.DescribeFileIdsByCustomIdsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFileIdsByCustomIdsResponse>;
  /** {@link V20201222.DescribeFileUrls 查询文件下载链接}({@link V20201222.DescribeFileUrlsRequest 请求参数}): {@link V20201222.DescribeFileUrlsResponse 返回参数} */
  DescribeFileUrls(data: V20201222.DescribeFileUrlsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFileUrlsResponse>;
  /** {@link V20201222.DescribeFlow 查询流程信息}({@link V20201222.DescribeFlowRequest 请求参数}): {@link V20201222.DescribeFlowResponse 返回参数} */
  DescribeFlow(data: V20201222.DescribeFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFlowResponse>;
  /** {@link V20201222.DescribeFlowApprovers 查询流程参与者信息}({@link V20201222.DescribeFlowApproversRequest 请求参数}): {@link V20201222.DescribeFlowApproversResponse 返回参数} */
  DescribeFlowApprovers(data: V20201222.DescribeFlowApproversRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFlowApproversResponse>;
  /** {@link V20201222.DescribeFlowFiles 查询流程文件}({@link V20201222.DescribeFlowFilesRequest 请求参数}): {@link V20201222.DescribeFlowFilesResponse 返回参数} */
  DescribeFlowFiles(data: V20201222.DescribeFlowFilesRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFlowFilesResponse>;
  /** {@link V20201222.DescribeSeals 查询电子印章}({@link V20201222.DescribeSealsRequest 请求参数}): {@link V20201222.DescribeSealsResponse 返回参数} */
  DescribeSeals(data: V20201222.DescribeSealsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeSealsResponse>;
  /** {@link V20201222.DescribeSubOrganizations 查询子机构信息}({@link V20201222.DescribeSubOrganizationsRequest 请求参数}): {@link V20201222.DescribeSubOrganizationsResponse 返回参数} */
  DescribeSubOrganizations(data: V20201222.DescribeSubOrganizationsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeSubOrganizationsResponse>;
  /** {@link V20201222.DescribeUsers 查询个人用户信息}({@link V20201222.DescribeUsersRequest 请求参数}): {@link V20201222.DescribeUsersResponse 返回参数} */
  DescribeUsers(data: V20201222.DescribeUsersRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeUsersResponse>;
  /** {@link V20201222.DestroyFlowFile 销毁流程文件}({@link V20201222.DestroyFlowFileRequest 请求参数}): {@link V20201222.DestroyFlowFileResponse 返回参数} */
  DestroyFlowFile(data: V20201222.DestroyFlowFileRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DestroyFlowFileResponse>;
  /** {@link V20201222.GenerateOrganizationSeal 生成企业电子印章}({@link V20201222.GenerateOrganizationSealRequest 请求参数}): {@link V20201222.GenerateOrganizationSealResponse 返回参数} */
  GenerateOrganizationSeal(data: V20201222.GenerateOrganizationSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.GenerateOrganizationSealResponse>;
  /** {@link V20201222.GenerateUserSeal 生成个人电子签名}({@link V20201222.GenerateUserSealRequest 请求参数}): {@link V20201222.GenerateUserSealResponse 返回参数} */
  GenerateUserSeal(data: V20201222.GenerateUserSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.GenerateUserSealResponse>;
  /** {@link V20201222.ModifyOrganizationDefaultSeal 修改企业默认印章}({@link V20201222.ModifyOrganizationDefaultSealRequest 请求参数}): {@link V20201222.ModifyOrganizationDefaultSealResponse 返回参数} */
  ModifyOrganizationDefaultSeal(data: V20201222.ModifyOrganizationDefaultSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifyOrganizationDefaultSealResponse>;
  /** {@link V20201222.ModifySeal 更新电子印章}({@link V20201222.ModifySealRequest 请求参数}): {@link V20201222.ModifySealResponse 返回参数} */
  ModifySeal(data: V20201222.ModifySealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifySealResponse>;
  /** {@link V20201222.ModifySubOrganizationInfo 更新子机构信息}({@link V20201222.ModifySubOrganizationInfoRequest 请求参数}): {@link V20201222.ModifySubOrganizationInfoResponse 返回参数} */
  ModifySubOrganizationInfo(data: V20201222.ModifySubOrganizationInfoRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifySubOrganizationInfoResponse>;
  /** {@link V20201222.ModifyUser 更新个人用户信息}({@link V20201222.ModifyUserRequest 请求参数}): {@link V20201222.ModifyUserResponse 返回参数} */
  ModifyUser(data: V20201222.ModifyUserRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifyUserResponse>;
  /** {@link V20201222.ModifyUserDefaultSeal 修改个人默认印章}({@link V20201222.ModifyUserDefaultSealRequest 请求参数}): {@link V20201222.ModifyUserDefaultSealResponse 返回参数} */
  ModifyUserDefaultSeal(data: V20201222.ModifyUserDefaultSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifyUserDefaultSealResponse>;
  /** {@link V20201222.RejectFlow 拒签流程}({@link V20201222.RejectFlowRequest 请求参数}): {@link V20201222.RejectFlowResponse 返回参数} */
  RejectFlow(data: V20201222.RejectFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.RejectFlowResponse>;
  /** {@link V20201222.SendFlow 发送流程}({@link V20201222.SendFlowRequest 请求参数}): {@link V20201222.SendFlowResponse 返回参数} */
  SendFlow(data: V20201222.SendFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SendFlowResponse>;
  /** {@link V20201222.SendFlowUrl 发送流程并生成签署URL}({@link V20201222.SendFlowUrlRequest 请求参数}): {@link V20201222.SendFlowUrlResponse 返回参数} */
  SendFlowUrl(data: V20201222.SendFlowUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SendFlowUrlResponse>;
  /** {@link V20201222.SendSignInnerVerifyCode 发送签署验证码}({@link V20201222.SendSignInnerVerifyCodeRequest 请求参数}): {@link V20201222.SendSignInnerVerifyCodeResponse 返回参数} */
  SendSignInnerVerifyCode(data: V20201222.SendSignInnerVerifyCodeRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SendSignInnerVerifyCodeResponse>;
  /** {@link V20201222.SignFlow 签署流程}({@link V20201222.SignFlowRequest 请求参数}): {@link V20201222.SignFlowResponse 返回参数} */
  SignFlow(data: V20201222.SignFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SignFlowResponse>;
  /** {@link V20201222.UploadFiles 文件上传}({@link V20201222.UploadFilesRequest 请求参数}): {@link V20201222.UploadFilesResponse 返回参数} */
  UploadFiles(data: V20201222.UploadFilesRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.UploadFilesResponse>;
  /** {@link V20201222.VerifySubOrganization 子机构通过实名认证}({@link V20201222.VerifySubOrganizationRequest 请求参数}): {@link V20201222.VerifySubOrganizationResponse 返回参数} */
  VerifySubOrganization(data: V20201222.VerifySubOrganizationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.VerifySubOrganizationResponse>;
  /** {@link V20201222.VerifyUser 个人用户通过实名认证}({@link V20201222.VerifyUserRequest 请求参数}): {@link V20201222.VerifyUserResponse 返回参数} */
  VerifyUser(data: V20201222.VerifyUserRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.VerifyUserResponse>;
}

export declare type Versions = ["2021-05-26", "2020-12-22"];

export default Essbasic;
