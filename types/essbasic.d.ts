/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用相关信息 */
declare interface Agent {
  /** 应用的唯一标识。不同的业务系统可以采用不同的AppId，不同AppId下的数据是隔离的。可以由控制台开发者中心-应用集成自主生成。 */
  AppId: string;
  /** 第三方应用平台自定义，对应第三方平台子客企业的唯一标识。一个第三方平台子客企业主体与子客企业ProxyOrganizationOpenId是一一对应的，不可更改，不可重复使用。（例如，可以使用企业名称的hash值，或者社会统一信用代码的hash值，或者随机hash值，需要第三方应用平台保存），最大64位字符串 */
  ProxyOrganizationOpenId?: string;
  /** 第三方平台子客企业中的员工/经办人，通过第三方应用平台进入电子签完成实名、且被赋予相关权限后，可以参与到企业资源的管理或签署流程中。 */
  ProxyOperator?: UserInfo;
  /** 在第三方平台子客企业开通电子签后，会生成唯一的子客应用Id（ProxyAppId）用于代理调用时的鉴权，在子客开通的回调中获取。 */
  ProxyAppId?: string;
  /** 内部参数，暂未开放使用 */
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

/** 授权用户 */
declare interface AuthorizedUser {
  /** 用户openid */
  OpenId: string;
}

/** 基础流程信息 */
declare interface BaseFlowInfo {
  /** 合同流程名称 */
  FlowName: string | null;
  /** 合同流程类型 */
  FlowType: string | null;
  /** 合同流程描述信息 */
  FlowDescription: string | null;
  /** 合同流程截止时间，unix时间戳 */
  Deadline: number | null;
  /** 是否顺序签署(true:无序签,false:顺序签) */
  Unordered?: boolean | null;
  /** 打开智能添加填写区(默认开启，打开:"OPEN" 关闭："CLOSE") */
  IntelligentStatus?: string | null;
  /** 填写控件内容 */
  FormFields?: FormField[] | null;
  /** 本企业(发起方企业)是否需要签署审批，true：开启本企业签署审批 */
  NeedSignReview?: boolean | null;
  /** 用户流程自定义数据参数 */
  UserData?: string | null;
  /** 抄送人信息 */
  CcInfos?: CcInfo[] | null;
}

/** 抄送信息 */
declare interface CcInfo {
  /** 被抄送人手机号，大陆11位手机号 */
  Mobile?: string;
  /** 被抄送人姓名 */
  Name?: string | null;
  /** 被抄送人类型0--个人. 1--员工 */
  CcType?: number | null;
  /** 被抄送人权限0--可查看1--可查看也可下载 */
  CcPermission?: number | null;
}

/** 渠道角色信息 */
declare interface ChannelRole {
  /** 角色id */
  RoleId?: string | null;
  /** 角色名 */
  RoleName?: string | null;
  /** 角色状态：1-启用；2-禁用 */
  RoleStatus?: number | null;
}

/** 签署人配置信息 */
declare interface CommonApproverOption {
  /** 是否允许修改签署人信息 */
  CanEditApprover?: boolean | null;
}

/** 通用签署人信息 */
declare interface CommonFlowApprover {
  /** 指定当前签署人为第三方应用集成子客，默认false：当前签署人为第三方应用集成子客，true：当前签署人为saas企业用户 */
  NotChannelOrganization: boolean | null;
  /** 签署人类型,目前支持：0-企业签署人，1-个人签署人，3-企业静默签署人 */
  ApproverType?: number | null;
  /** 企业id */
  OrganizationId?: string | null;
  /** 企业OpenId，第三方应用集成非静默签子客企业签署人发起合同毕传 */
  OrganizationOpenId?: string | null;
  /** 企业名称，第三方应用集成非静默签子客企业签署人必传，saas企业签署人必传 */
  OrganizationName?: string | null;
  /** 用户id */
  UserId?: string | null;
  /** 用户openId，第三方应用集成非静默签子客企业签署人必传 */
  OpenId?: string | null;
  /** 签署人名称，saas企业签署人，个人签署人必传 */
  ApproverName?: string | null;
  /** 签署人手机号，saas企业签署人，个人签署人必传 */
  ApproverMobile?: string | null;
  /** 签署人Id，使用模板发起是，对应模板配置中的签署人RecipientId注意：模板发起时该字段必填 */
  RecipientId?: string | null;
  /** 签署前置条件：阅读时长限制，不传默认10s,最大300s，最小3s */
  PreReadTime?: number | null;
  /** 签署前置条件：阅读全文限制 */
  IsFullText?: boolean | null;
  /** 通知类型：SMS（短信） NONE（不做通知）, 不传 默认SMS */
  NotifyType?: string | null;
  /** 签署人配置 */
  ApproverOption?: CommonApproverOption | null;
}

/** 此结构体 (Component) 用于描述控件属性。在通过文件发起合同时，对应的component有三种定位方式1. 绝对定位方式2. 表单域(FIELD)定位方式3. 关键字(KEYWORD)定位方式可以参考官网说明https://cloud.tencent.com/document/product/1323/78346 */
declare interface Component {
  /** 控件编号CreateFlowByTemplates发起合同时优先以ComponentId（不为空）填充；否则以ComponentName填充注：当GenerateMode=3时，通过"^"来决定是否使用关键字整词匹配能力。例：当GenerateMode=3时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。创建控件时，此值为空查询时返回完整结构 */
  ComponentId?: string;
  /** 如果是Component控件类型，则可选的字段为：TEXT - 普通文本控件，输入文本字符串；MULTI_LINE_TEXT - 多行文本控件，输入文本字符串；CHECK_BOX - 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；FILL_IMAGE - 图片控件，ComponentValue 填写图片的资源 ID；DYNAMIC_TABLE - 动态表格控件；ATTACHMENT - 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分割；SELECTOR - 选择器控件，ComponentValue填写选择的字符串内容；DATE - 日期控件；默认是格式化为xxxx年xx月xx日字符串；DISTRICT - 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；如果是SignComponent控件类型，则可选的字段为SIGN_SEAL - 签署印章控件；SIGN_DATE - 签署日期控件；SIGN_SIGNATURE - 用户签名控件；SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeightSIGN_OPINION - 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认;SIGN_LEGAL_PERSON_SEAL - 企业法定代表人控件。表单域的控件不能作为印章和签名控件 */
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
  /** 参数控件样式，json格式表述不同类型的控件会有部分非通用参数TEXT/MULTI_LINE_TEXT控件可以指定1 Font：目前只支持黑体、宋体2 FontSize： 范围12-723 FontAlign： Left/Right/Center，左对齐/居中/右对齐例如：{"FontSize":12}ComponentType为FILL_IMAGE时，支持以下参数：NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true: 不居中FillMethod: int. 填充方式。0-铺满（默认）；1-等比例缩放ComponentType为SIGN_SIGNATURE类型可以控制签署方式{“ComponentTypeLimit”: [“xxx”]}xxx可以为：HANDWRITE – 手写签名BORDERLESS_ESIGN – 自动生成无边框腾讯体OCR_ESIGN -- AI智能识别手写签名ESIGN -- 个人印章类型如：{“ComponentTypeLimit”: [“BORDERLESS_ESIGN”]}ComponentType为SIGN_DATE时，支持以下参数：1 Font：字符串类型目前只支持"黑体"、"宋体"，如果不填默认为"黑体"2 FontSize： 数字类型，范围6-72，默认值为123 FontAlign： 字符串类型，可取Left/Right/Center，对应左对齐/居中/右对齐4 Format： 字符串类型，日期格式，必须是以下五种之一 “yyyy m d”，”yyyy年m月d日”，”yyyy/m/d”，”yyyy-m-d”，”yyyy.m.d”。5 Gaps:： 字符串类型，仅在Format为“yyyy m d”时起作用，格式为用逗号分开的两个整数，例如”2,2”，两个数字分别是日期格式的前后两个空隙钟的空格个数如果extra参数为空，默认为”yyyy年m月d日”格式的居中日期特别地，如果extra中Format字段为空或无法被识别，则extra参数会被当作默认值处理（Font，FontSize，Gaps和FontAlign都不会起效）参数样例： "ComponentExtra": "{\"Format\":“yyyy m d”,\"FontSize\":12,\"Gaps\":\"2,2\", \"FontAlign\":\"Right\"}", */
  ComponentExtra?: string;
  /** 控件填充vaule，ComponentType和传入值类型对应关系：TEXT - 文本内容MULTI_LINE_TEXT - 文本内容CHECK_BOX - true/falseFILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取SELECTOR - 选项值DATE - 默认是格式化为xxxx年xx月xx日DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525)$/签署意见控件： 约束：签署意见最大长度为50字符签署人手机号控件： 约束：国内手机号 13,14,15,16,17,18,19号段长度11位签署人身份证控件： 约束：合法的身份证号码检查控件名称： 约束：控件名称最大长度为20字符单行文本控件： 约束：只允许输入中文，英文，数字，中英文标点符号多行文本控件： 约束：只允许输入中文，英文，数字，中英文标点符号勾选框控件： 约束：选择填字符串true，不选填字符串false选择器控件： 约束：同单行文本控件约束，填写选择值中的字符串数字控件： 约束：请输入有效的数字(可带小数点) 检查正则表达式：/^(-|\+)?\d+(\.\d+)?$/日期控件： 约束：格式：yyyy年mm月dd日附件控件： 约束：JPG或PNG图片，上传数量限制，1到6个，最大6个附件图片控件： 约束：JPG或PNG图片，填写上传的图片资源ID邮箱控件： 约束：请输入有效的邮箱地址, w3c标准 检查正则表达式：/^([A-Za-z0-9_\-.!#$%&])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/ 参考：https://emailregex.com/地址控件： 同单行文本控件约束省市区控件： 同单行文本控件约束性别控件： 同单行文本控件约束，填写选择值中的字符串学历控件： 同单行文本控件约束，填写选择值中的字符串 */
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
  /** 平台企业控件ID。如果不为空，属于平台企业预设控件； */
  ChannelComponentId?: string;
  /** 指定关键字排序规则，Positive-正序，Reverse-倒序。传入Positive时会根据关键字在PDF文件内的顺序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的第一个关键字。传入Reverse时会根据关键字在PDF文件内的反序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的最后一个关键字。 */
  KeywordOrder?: string;
  /** 指定关键字页码，可选参数，指定页码后，将只在指定的页码内查找关键字，非该页码的关键字将不会查询出来 */
  KeywordPage?: number;
  /** 关键字位置模式，Middle-居中，Below-正下方，Right-正右方，LowerRight-右上角，UpperRight-右下角。示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方 */
  RelativeLocation?: string;
  /** 关键字索引，可选参数，如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。示例[0,2]，说明使用PDF文件内第1个和第3个关键字位置。 */
  KeywordIndexes?: number[];
  /** 填写提示的内容 */
  Placeholder?: string | null;
}

/** 创建合同配置信息 */
declare interface CreateFlowOption {
  /** 是否允许修改合同信息 */
  CanEditFlow?: boolean | null;
}

/** 第三方应用集成员工部门信息 */
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

/** 企业扩展服务授权信息 */
declare interface ExtentServiceAuthInfo {
  /** 扩展服务类型 AUTO_SIGN 企业静默签（自动签署） OVERSEA_SIGN 企业与港澳台居民*签署合同 MOBILE_CHECK_APPROVER 使用手机号验证签署方身份 PAGING_SEAL 骑缝章 DOWNLOAD_FLOW 授权渠道下载合同 */
  Type?: string;
  /** 扩展服务名称 */
  Name?: string;
  /** 服务状态 ENABLE 开启 DISABLE 关闭 */
  Status?: string;
  /** 最近操作人openid（经办人openid） */
  OperatorOpenId?: string | null;
  /** 最近操作时间 */
  OperateOn?: number | null;
}

/** 绑定失败的用户角色信息 */
declare interface FailedCreateRoleData {
  /** 用户userId */
  UserId?: string | null;
  /** 角色RoleId列表 */
  RoleIds?: string[] | null;
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
  /** 平台企业的第三方id */
  ProxyOrganizationOpenId: string | null;
  /** 平台企业操作人的第三方id */
  ProxyOperatorOpenId: string;
  /** 平台企业名称 */
  ProxyOrganizationName: string;
  /** 签署人手机号 */
  Mobile: string;
  /** 签署人签署顺序 */
  SignOrder: number;
  /** 签署人姓名 */
  ApproveName: string | null;
  /** 当前签署人的状态, 状态如下PENDING 流程等待中 FILLPENDING 待填写状态FILLACCEPT 参与人已经填写FILLREJECT 参与人解决填写WAITPICKUP 待签收ACCEPT 签收 REJECT 拒签 DEADLINE 过期没有处理 CANCEL 取消FORWARD 已经转他人处理STOP 流程因为其他原因终止RELIEVED 已经解除 */
  ApproveStatus: string | null;
  /** 签署人信息 */
  ApproveMessage: string | null;
  /** 签署人签署时间 */
  ApproveTime: number;
  /** 参与者类型 (ORGANIZATION企业/PERSON个人) */
  ApproveType: string | null;
}

/** 创建签署流程签署人入参。其中签署方FlowApproverInfo需要传递的参数非单C、单B、B2C合同，ApproverType、RecipientId（模板发起合同时）必传，建议都传。其他身份标识1-个人：Name、Mobile必传2-第三方平台子客企业指定经办人：OpenId必传，OrgName必传、OrgOpenId必传；3-第三方平台子客企业不指定经办人：OrgName必传、OrgOpenId必传；4-非第三方平台子客企业：Name、Mobile必传，OrgName必传，且NotChannelOrganization=True。RecipientId参数：从DescribeTemplates接口中，可以得到模板下的签署方Recipient列表，根据模板自定义的Rolename在此结构体中确定其RecipientId */
declare interface FlowApproverInfo {
  /** 签署人姓名，最大长度50个字符 */
  Name?: string;
  /** 签署人身份证件类型1.ID_CARD 居民身份证2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证3.HONGKONG_AND_MACAO 港澳居民来往内地通行证 */
  IdCardType?: string;
  /** 签署人证件号 */
  IdCardNumber?: string;
  /** 签署人手机号，脱敏显示。大陆手机号为11位，暂不支持海外手机号。 */
  Mobile?: string;
  /** 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传，最大长度64个字符； */
  OrganizationName?: string;
  /** 指定签署人非第三方平台子客企业下员工，在ApproverType为ORGANIZATION时指定。默认为false，即签署人位于同一个第三方平台应用号下；默认为false，即签署人位于同一个第三方应用号下； */
  NotChannelOrganization?: boolean;
  /** 用户侧第三方id，最大长度64个字符当签署方为同一第三方平台下的员工时，该字段若不指定，则发起【待领取】的流程 */
  OpenId?: string;
  /** 企业签署方在同一第三方平台应用下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符； */
  OrganizationOpenId?: string;
  /** 签署人类型PERSON-个人/自然人；PERSON_AUTO_SIGN-个人自动签（定制化场景下使用）；ORGANIZATION-企业（企业签署方或模板发起时的企业静默签）；ENTERPRISESERVER-企业静默签（文件发起时的企业静默签字）。 */
  ApproverType?: string;
  /** 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置； */
  RecipientId?: string;
  /** 签署截止时间，默认一年 */
  Deadline?: number;
  /** 签署完回调url，最大长度1000个字符 */
  CallbackUrl?: string;
  /** 使用PDF文件直接发起合同时，签署人指定的签署控件 */
  SignComponents?: Component[];
  /** 个人签署方指定签署控件类型，目前支持：OCR_ESIGN -AI智慧手写签名HANDWRITE -手写签名 */
  ComponentLimitType?: string[];
  /** 合同的强制预览时间：3~300s，未指定则按合同页数计算 */
  PreReadTime?: number;
  /** 签署完前端跳转的url，暂未使用 */
  JumpUrl?: string;
  /** 签署人个性化能力值 */
  ApproverOption?: ApproverOption;
  /** 当前签署方进行签署操作是否需要企业内部审批，true 则为需要 */
  ApproverNeedSignReview?: boolean;
  /** 签署人查看合同时认证方式, 1-实名查看 2-短信验证码查看(企业签署方不支持该方式) 如果不传默认为1查看合同的认证方式 Flow层级的优先于approver层级的 */
  ApproverVerifyTypes?: number[] | null;
  /** 签署人签署合同时的认证方式1-人脸认证 2-签署密码 3-运营商三要素(默认为1,2) */
  ApproverSignTypes?: number[] | null;
}

/** 签署人签署链接信息 */
declare interface FlowApproverUrlInfo {
  /** 签署链接。注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。 */
  SignUrl: string;
  /** 签署人类型 PERSON-个人 */
  ApproverType: string;
  /** 签署人姓名 */
  Name: string;
  /** 签署人手机号 */
  Mobile: string;
  /** 签署长链接。注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。 */
  LongUrl?: string | null;
}

/** 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息 */
declare interface FlowDetailInfo {
  /** 合同(流程)的Id */
  FlowId: string;
  /** 合同(流程)的名字 */
  FlowName: string;
  /** 合同(流程)的类型 */
  FlowType: string;
  /** 合同(流程)的状态, 状态如下INIT 还没发起PART 部分签署REJECT 拒签ALL 全部签署DEADLINE 流签CANCEL 取消RELIEVED 解除 */
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
  /** 合同(流程)关注方信息列表 */
  CcInfos?: FlowApproverDetail[];
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
  /** 第三方应用的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN */
  CustomerData?: string;
  /** 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署 */
  Unordered?: boolean;
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 本企业(发起方企业)是否需要签署审批 */
  NeedSignReview?: boolean;
}

/** 此结构体 (FlowInfo) 用于描述签署流程信息。【数据表格传参说明】当模板的 ComponentType='DYNAMIC_TABLE'时（ 第三方应用集成或集成版），FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）输入示例1：```{ "headers":[ { "content":"head1" }, { "content":"head2" }, { "content":"head3" } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```输入示例2（表格表头宽度比例配置）：```{ "headers":[ { "content":"head1", "widthPercent": 30 }, { "content":"head2", "widthPercent": 30 }, { "content":"head3", "widthPercent": 40 } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```表格参数说明| 名称 | 类型 | 描述 || ------------------- | ------- | ------------------------------------------------- || headers | Array | 表头：不超过10列，不支持单元格合并，字数不超过100 || rowCount | Integer | 表格内容最大行数 || cells.N.rowStart | Integer | 单元格坐标：行起始index || cells.N.rowEnd | Integer | 单元格坐标：行结束index || cells.N.columnStart | Integer | 单元格坐标：列起始index || cells.N.columnEnd | Integer | 单元格坐标：列结束index || cells.N.content | String | 单元格内容，字数不超过100 |表格参数headers说明| 名称 | 类型 | 描述 || ------------------- | ------- | ------------------------------------------------- || widthPercent | Integer | 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35 || content | String | 表头单元格内容，字数不超过100 | */
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
  /** 第三方应用平台的业务信息，最大长度1000个字符。 */
  CustomerData?: string;
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 被抄送人的信息列表，抄送功能暂不开放 */
  CcInfos?: CcInfo[];
  /** 发起方企业的签署人进行签署操作是否需要企业内部审批。若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。 */
  NeedSignReview?: boolean;
  /** 给关注人发送短信通知的类型，0-合同发起时通知 1-签署完成后通知 */
  CcNotifyType?: number;
  /** 个人自动签场景。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN */
  AutoSignScene?: string | null;
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
  AuthorizedUsers: AuthorizedUser[];
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
  /** 验签结果。0-签名域未签名；1-验签成功； 3-验签失败；4-未找到签名域：文件内没有签名域；5-签名值格式不正确。 */
  VerifyResult: number;
  /** 签署平台，如果文件是在腾讯电子签平台签署，则返回腾讯电子签，如果文件不在腾讯电子签平台签署，则返回其他平台。 */
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
  /** 对应Agent-ProxyOperator-OpenId。第三方应用平台自定义，对子客企业员的唯一标识。一个OpenId在一个子客企业内唯一对应一个真实员工，不可在其他子客企业内重复使用。（例如，可以使用经办人企业名+员工身份证的hash值，需要第三方应用平台保存），最大64位字符串 */
  Id: string;
  /** 经办人姓名，最大长度50个字符 */
  Name?: string;
  /** 经办人身份证件类型1.ID_CARD 居民身份证2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证3.HONGKONG_AND_MACAO 港澳居民来往内地通行证 */
  IdCardType?: string;
  /** 经办人证件号 */
  IdCardNumber?: string;
  /** 经办人手机号，大陆手机号输入11位，暂不支持海外手机号。 */
  Mobile?: string;
  /** 默认角色，值为以下三个对应的英文：业务管理员：admin经办人：channel-normal-operator业务员：channel-sales-man */
  DefaultRole?: string | null;
}

/** 签署参与者信息 */
declare interface Recipient {
  /** 签署人唯一标识 */
  RecipientId?: string;
  /** 参与者类型。默认为空。ENTERPRISE-企业；INDIVIDUAL-个人；PROMOTER-发起方 */
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

/** 解除协议的签署人，如不指定，默认使用待解除流程（即原流程）中的签署人。注意：不支持更换C端（个人身份类型）签署人，如果原流程中含有C端签署人，默认使用原流程中的该签署人。如果需要指定B端（机构身份类型）签署人，其中ReleasedApprover需要传递的参数如下：ApproverNumber, OrganizationName, ApproverType必传。对于其他身份标识- 子客企业指定经办人：OpenId必传，OrganizationOpenId必传；- 非子客企业：Name、Mobile必传。 */
declare interface ReleasedApprover {
  /** 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传，最大长度64个字符 */
  OrganizationName: string;
  /** 签署人在原流程中的签署人列表中的顺序序号（从0开始，按顺序依次递增），如果不清楚原流程中的签署人列表，可以通过DescribeFlows接口查看 */
  ApproverNumber: number;
  /** 签署人类型，目前仅支持ORGANIZATION-企业 */
  ApproverType: string;
  /** 签署人姓名，最大长度50个字符 */
  Name?: string;
  /** 签署人身份证件类型1.ID_CARD 居民身份证2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证3.HONGKONG_AND_MACAO 港澳居民来往内地通行证 */
  IdCardType?: string;
  /** 签署人证件号 */
  IdCardNumber?: string;
  /** 签署人手机号，脱敏显示。大陆手机号为11位，暂不支持海外手机号 */
  Mobile?: string;
  /** 企业签署方在同一第三方应用下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符 */
  OrganizationOpenId?: string;
  /** 用户侧第三方id，最大长度64个字符当签署方为同一第三方应用下的员工时，该字必传 */
  OpenId?: string;
}

/** 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。 */
declare interface RelieveInfo {
  /** 解除理由，最大支持200个字 */
  Reason: string;
  /** 解除后仍然有效的条款，保留条款，最大支持200个字 */
  RemainInForceItem?: string;
  /** 原合同事项处理-费用结算，最大支持200个字 */
  OriginalExpenseSettlement?: string;
  /** 原合同事项处理-其他事项，最大支持200个字 */
  OriginalOtherSettlement?: string;
  /** 其他约定，最大支持200个字 */
  OtherDeals?: string;
}

/** 催办接口返回详细信息 */
declare interface RemindFlowRecords {
  /** 是否能够催办 */
  CanRemind: boolean;
  /** 合同id */
  FlowId: string;
  /** 催办详情 */
  RemindMessage: string;
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
  /** 员工是否离职：0-未离职，1-离职 */
  QuiteJob: number;
}

/** 第三方应用集成员工角色信息 */
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
  /** 模板中的流程参与人信息 */
  Recipients: Recipient[];
  /** 签署区模板信息结构 */
  SignComponents: Component[];
  /** 模板类型：1-静默签；3-普通模板 */
  TemplateType: number;
  /** 是否是发起人 ,已弃用 */
  IsPromoter: boolean;
  /** 模板的创建者信息 */
  Creator: string;
  /** 模板创建的时间戳（精确到秒） */
  CreatedOn: number;
  /** 模板的H5预览链接,可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。 */
  PreviewUrl: string | null;
  /** 第三方应用集成-模板PDF文件链接 */
  PdfUrl: string | null;
  /** 关联的平台企业模板ID */
  ChannelTemplateId: string;
  /** 关联的平台企业模板名称 */
  ChannelTemplateName: string | null;
  /** 0-需要子客企业手动领取平台企业的模板(默认); 1-平台自动设置子客模板 */
  ChannelAutoSave: number | null;
  /** 模板版本，全数字字符。默认为空，初始版本为yyyyMMdd001。 */
  TemplateVersion: string | null;
  /** 模板可用状态，取值：1启用（默认），2停用 */
  Available?: number | null;
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
  /** 子客企业唯一标识 */
  ProxyOrganizationOpenId: string;
  /** 子客企业名 */
  ProxyOrganizationName: string | null;
  /** 日期，当需要汇总数据时日期为空 */
  Date: string | null;
  /** 消耗数量 */
  Usage: number;
  /** 撤回数量 */
  Cancel: number | null;
  /** 消耗渠道 */
  FlowChannel: string | null;
}

/** 接口调用者信息 */
declare interface UserInfo {
  /** 第三方应用平台自定义，对应第三方平台子客企业员的唯一标识。一个OpenId在一个子客企业内唯一对应一个真实员工，不可在其他子客企业内重复使用。（例如，可以使用经办人企业名+员工身份证的hash值，需要第三方应用平台保存），最大64位字符串 */
  OpenId?: string;
  /** 内部参数，暂未开放使用 */
  Channel?: string;
  /** 内部参数，暂未开放使用 */
  CustomUserId?: string;
  /** 内部参数，暂未开放使用 */
  ClientIp?: string;
  /** 内部参数，暂未开放使用 */
  ProxyIp?: string;
}

declare interface ChannelBatchCancelFlowsRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程Id数组，最多100个，超过100不处理 */
  FlowIds: string[];
  /** 撤销理由,不超过200个字符 */
  CancelMessage?: string;
  /** 撤销理由自定义格式；选项：0 默认格式1 只保留身份信息：展示为【发起方】2 保留身份信息+企业名称：展示为【发起方xxx公司】3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】 */
  CancelMessageFormat?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelBatchCancelFlowsResponse {
  /** 签署流程批量撤销失败原因，错误信息与流程Id一一对应，成功为“”,失败则对应失败消息 */
  FailMessages?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCancelFlowRequest {
  /** 签署流程编号 */
  FlowId: string;
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 撤回原因，最大不超过200字符 */
  CancelMessage?: string;
  /** 撤销理由自定义格式；选项：0 默认格式1 只保留身份信息：展示为【发起方】2 保留身份信息+企业名称：展示为【发起方xxx公司】3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】 */
  CancelMessageFormat?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCancelFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCancelMultiFlowSignQRCodeRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 二维码id */
  QrCodeId: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCancelMultiFlowSignQRCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateBatchCancelFlowUrlRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程Id数组 */
  FlowIds: string[];
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCreateBatchCancelFlowUrlResponse {
  /** 批量撤销url */
  BatchCancelFlowUrl?: string;
  /** 签署流程批量撤销失败原因 */
  FailMessages?: string[];
  /** 签署撤销url过期时间-年月日-时分秒 */
  UrlExpireOn?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateBoundFlowsRequest {
  /** 应用信息此接口Agent.AppId、Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填 */
  Agent: Agent;
  /** 领取的合同id列表 */
  FlowIds?: string[];
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCreateBoundFlowsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateConvertTaskApiRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 资源类型 取值范围doc,docx,html,xls,xlsx之一 */
  ResourceType: string;
  /** 资源名称，长度限制为256字符 */
  ResourceName: string;
  /** 资源Id，通过UploadFiles获取 */
  ResourceId: string;
  /** 调用方用户信息，不用传 */
  Operator?: UserInfo;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface ChannelCreateConvertTaskApiResponse {
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateEmbedWebUrlRequest {
  /** WEB嵌入资源类型，取值范围：CREATE_SEAL创建印章，CREATE_TEMPLATE创建模板，MODIFY_TEMPLATE修改模板，PREVIEW_TEMPLATE预览模板，PREVIEW_FLOW预览流程 */
  EmbedType: string;
  /** 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。 */
  Agent: Agent;
  /** 渠道操作者信息 */
  Operator?: UserInfo;
  /** WEB嵌入的业务资源ID，EmbedType取值MODIFY_TEMPLATE或PREVIEW_TEMPLATE或 PREVIEW_FLOW时BusinessId必填 */
  BusinessId?: string;
  /** 是否隐藏控件，只有预览模板时生效 */
  HiddenComponents?: boolean;
}

declare interface ChannelCreateEmbedWebUrlResponse {
  /** 嵌入的web链接 */
  WebUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowByFilesRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 签署流程名称，长度不超过200个字符 */
  FlowName?: string;
  /** 签署流程签约方列表，最多不超过50个参与方 */
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
  /** 业务信息，最大长度1000个字符。 */
  CustomerData?: string;
  /** 发起方企业的签署人进行签署操作是否需要企业内部审批。 若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。 注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。 */
  NeedSignReview?: boolean;
  /** 签署人校验方式VerifyCheck: 人脸识别（默认）MobileCheck：手机号验证参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。 */
  ApproverVerifyType?: string;
  /** 标识是否允许发起后添加控件。0为不允许1为允许。如果为1，创建的时候不能有签署控件，只能创建后添加。注意发起后添加控件功能不支持添加骑缝章和签批控件 */
  SignBeanTag?: number;
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
  /** 被抄送人信息列表 */
  CcInfos?: CcInfo[];
  /** 给关注人发送短信通知的类型，0-合同发起时通知 1-签署完成后通知 */
  CcNotifyType?: number;
  /** 个人自动签场景。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN */
  AutoSignScene?: string;
}

declare interface ChannelCreateFlowByFilesResponse {
  /** 合同签署流程ID */
  FlowId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowGroupByFilesRequest {
  /** 每个子合同的发起所需的信息，数量限制2-100 */
  FlowFileInfos: FlowFileInfo[];
  /** 合同组名称，长度不超过200个字符 */
  FlowGroupName: string;
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 签署人校验方式VerifyCheck: 人脸识别（默认）MobileCheck：手机号验证参数说明：若选择后者，未实名的个人签署方查看合同时，无需进行人脸识别实名认证（但签署合同时仍然需要人脸实名），该能力仅适用于个人签署方。 */
  ApproverVerifyType?: string;
  /** 操作者的信息，此参数不用传 */
  Operator?: UserInfo;
}

declare interface ChannelCreateFlowGroupByFilesResponse {
  /** 合同组ID */
  FlowGroupId?: string | null;
  /** 子合同ID列表 */
  FlowIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowRemindsRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程Id数组，最多100个，超过100不处理 */
  FlowIds: string[];
}

declare interface ChannelCreateFlowRemindsResponse {
  /** 合同催办详情信息 */
  RemindFlowRecords?: RemindFlowRecords[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowSignReviewRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程编号 */
  FlowId: string;
  /** 企业内部审核结果PASS: 通过REJECT: 拒绝SIGN_REJECT:拒签(流程结束) */
  ReviewType: string;
  /** 审核原因 当ReviewType 是REJECT 时此字段必填,字符串长度不超过200 */
  ReviewMessage?: string;
  /** 签署节点审核时需要指定 */
  RecipientId?: string;
}

declare interface ChannelCreateFlowSignReviewResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowSignUrlRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填 */
  Agent: Agent;
  /** 流程编号 */
  FlowId: string;
  /** 流程签署人，其中Name和Mobile必传，其他可不传，ApproverType目前只支持PERSON类型的签署人，如果不传默认为该值。还需注意签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。 */
  FlowApproverInfos: FlowApproverInfo[];
  /** 用户信息，暂未开放 */
  Operator?: UserInfo;
  /** 机构信息，暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface ChannelCreateFlowSignUrlResponse {
  /** 签署人签署链接信息 */
  FlowApproverUrlInfos?: FlowApproverUrlInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateMultiFlowSignQRCodeRequest {
  /** 应用相关信息。此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。 */
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
  /** 回调地址，最大长度1000个字符不传默认使用第三方应用号配置的回调地址回调时机:用户通过签署二维码发起合同时，企业额度不足导致失败 */
  CallbackUrl?: string;
  /** 限制二维码用户条件（已弃用） */
  ApproverRestrictions?: ApproverRestriction;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCreateMultiFlowSignQRCodeResponse {
  /** 签署二维码对象 */
  QrCode?: SignQrCode;
  /** 签署链接对象 */
  SignUrls?: SignUrl;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreatePrepareFlowRequest {
  /** 资源id，与ResourceType对应 */
  ResourceId: string;
  /** 资源类型，1：模板，目前仅支持模板，与ResourceId对应 */
  ResourceType: number;
  /** 合同流程基础信息 */
  FlowInfo: BaseFlowInfo;
  /** 合同签署人信息 */
  FlowApproverList: CommonFlowApprover[];
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填 */
  Agent?: Agent;
  /** 合同流程配置信息 */
  FlowOption?: CreateFlowOption;
  /** 该参数不可用，请通过获取 web 可嵌入接口获取合同流程预览 URL */
  FlowId?: string;
  /** 该参数不可用，请通过获取 web 可嵌入接口获取合同流程预览 URL */
  NeedPreview?: boolean;
  /** 企业机构信息，不用传 */
  Organization?: OrganizationInfo;
  /** 操作人（用户）信息，不用传 */
  Operator?: UserInfo;
}

declare interface ChannelCreatePrepareFlowResponse {
  /** 预发起的合同链接 */
  PrepareFlowUrl?: string;
  /** 合同发起后预览链接 */
  PreviewFlowUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateReleaseFlowRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 待解除的流程编号（即原流程的编号） */
  NeedRelievedFlowId: string;
  /** 解除协议内容 */
  ReliveInfo: RelieveInfo;
  /** 非必须，解除协议的本企业签署人列表，默认使用原流程的签署人列表；当解除协议的签署人与原流程的签署人不能相同时（例如原流程签署人离职了），需要指定本企业的其他签署人来替换原流程中的原签署人，注意需要指明ApproverNumber来代表需要替换哪一个签署人，解除协议的签署人数量不能多于原流程的签署人数量 */
  ReleasedApprovers?: ReleasedApprover[];
  /** 签署完回调url，最大长度1000个字符 */
  CallbackUrl?: string;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCreateReleaseFlowResponse {
  /** 解除协议流程编号 */
  FlowId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateSealPolicyRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 指定印章ID */
  SealId: string;
  /** 指定待授权的用户ID数组 */
  UserIds: string[];
  /** 企业机构信息，不用传 */
  Organization?: OrganizationInfo;
  /** 操作人（用户）信息，不用传 */
  Operator?: UserInfo;
}

declare interface ChannelCreateSealPolicyResponse {
  /** 最终授权成功的用户ID数组。其他的跳过的是已经授权了的 */
  UserIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateUserRolesRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。 */
  Agent: Agent;
  /** 绑定角色的员工id列表 */
  UserIds: string[];
  /** 绑定角色的角色id列表 */
  RoleIds: string[];
  /** 操作者信息 */
  Operator: UserInfo;
}

declare interface ChannelCreateUserRolesResponse {
  /** 绑定失败的用户角色列表 */
  FailedCreateRoleData?: FailedCreateRoleData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDeleteRoleUsersRequest {
  /** 代理信息 */
  Agent: Agent;
  /** 角色Id */
  RoleId: string;
  /** 用户列表 */
  UserIds: string[];
  /** 操作人信息 */
  Operator: UserInfo;
}

declare interface ChannelDeleteRoleUsersResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDeleteSealPoliciesRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 指定印章ID */
  SealId: string;
  /** 指定用户ID数组 */
  UserIds: string[];
  /** 组织机构信息，不用传 */
  Organization?: OrganizationInfo;
  /** 操作人（用户）信息，不用传 */
  Operator?: UserInfo;
}

declare interface ChannelDeleteSealPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeEmployeesRequest {
  /** 返回最大数量，最大为20 */
  Limit: number;
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 查询过滤实名用户，Key为Status，Values为["IsVerified"]根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...]查询离职员工时，Key为Status，Values为["QuiteJob"] */
  Filters?: Filter[];
  /** 偏移量，默认为0，最大为20000 */
  Offset?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelDescribeEmployeesResponse {
  /** 员工数据列表 */
  Employees?: Staff[] | null;
  /** 偏移量，默认为0，最大为20000 */
  Offset?: number | null;
  /** 返回最大数量，最大为20 */
  Limit?: number;
  /** 符合条件的员工数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeOrganizationSealsRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 返回最大数量，最大为100 */
  Limit: number;
  /** 偏移量，默认为0，最大为20000 */
  Offset?: number;
  /** 查询信息类型，为1时返回授权用户，为其他值时不返回 */
  InfoType?: number;
  /** 印章id（没有输入返回所有） */
  SealId?: string;
  /** 印章类型列表（都是组织机构印章）。为空时查询所有类型的印章。目前支持以下类型：OFFICIAL：企业公章；CONTRACT：合同专用章；ORGANIZATION_SEAL：企业印章(图片上传创建)；LEGAL_PERSON_SEAL：法定代表人章 */
  SealTypes?: string[];
}

declare interface ChannelDescribeOrganizationSealsResponse {
  /** 在设置了SealId时返回0或1，没有设置时返回公司的总印章数量，可能比返回的印章数组数量多 */
  TotalCount?: number;
  /** 查询到的印章结果数组 */
  Seals?: OccupiedSeal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeRolesRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。 */
  Agent: Agent;
  /** 查询起始偏移，最大2000 */
  Offset: number;
  /** 查询数量，最大200 */
  Limit: string;
  /** 操作人信息 */
  Operator: UserInfo;
  /** 查询的关键字段:Key:"RoleType",Vales:["1"]查询系统角色，Values:["2]查询自定义角色Key:"RoleStatus",Values:["1"]查询启用角色，Values:["2"]查询禁用角色 */
  Filters?: Filter[];
}

declare interface ChannelDescribeRolesResponse {
  /** 页面偏移量，最大2000 */
  Offset?: number;
  /** 查询数量，最大200 */
  Limit?: number;
  /** 查询角色的总数量 */
  TotalCount?: number;
  /** 角色信息 */
  ChannelRoles?: ChannelRole[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelGetTaskResultApiRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 任务Id，通过ChannelCreateConvertTaskApi接口获得 */
  TaskId: string;
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface ChannelGetTaskResultApiResponse {
  /** 任务Id */
  TaskId?: string;
  /** 任务状态，需要关注的状态0 :NeedTranform - 任务已提交4 :Processing - 文档转换中8 :TaskEnd - 任务处理完成-2 :DownloadFailed - 下载失败-6 :ProcessFailed - 转换失败-13:ProcessTimeout - 转换文件超时 */
  TaskStatus?: number;
  /** 状态描述，需要关注的状态NeedTranform - 任务已提交Processing - 文档转换中TaskEnd - 任务处理完成DownloadFailed - 下载失败ProcessFailed - 转换失败ProcessTimeout - 转换文件超时 */
  TaskMessage?: string;
  /** 资源Id，也是FileId，用于文件发起使用 */
  ResourceId?: string;
  /** 预览文件Url，有效期30分钟 当前字段返回为空，发起的时候，将ResourceId 放入发起即可 */
  PreviewUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelUpdateSealStatusRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 操作的印章状态，DISABLE-停用印章 */
  Status: string;
  /** 印章ID */
  SealId: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
  /** 更新印章状态原因说明 */
  Reason?: string;
}

declare interface ChannelUpdateSealStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelVerifyPdfRequest {
  /** 流程ID */
  FlowId: string;
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent?: Agent;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelVerifyPdfResponse {
  /** 验签结果，1-文件未被篡改，全部签名在腾讯电子签完成； 2-文件未被篡改，部分签名在腾讯电子签完成；3-文件被篡改；4-异常：文件内没有签名域；5-异常：文件签名格式错误 */
  VerifyResult?: number;
  /** 验签结果详情,内部状态1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域；5-文件签名格式错误 */
  PdfVerifyResults?: PdfVerifyResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChannelFlowEvidenceReportRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填 */
  Agent: Agent;
  /** 签署流程编号 */
  FlowId: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface CreateChannelFlowEvidenceReportResponse {
  /** 出证报告 ID，用于查询出证报告接口DescribeChannelFlowEvidenceReport时用到 */
  ReportId?: string | null;
  /** 执行中：EvidenceStatusExecuting成功：EvidenceStatusSuccess失败：EvidenceStatusFailed */
  Status?: string;
  /** 废除，字段无效 */
  ReportUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsoleLoginUrlRequest {
  /** 应用信息此接口Agent.AppId、Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填 */
  Agent: Agent;
  /** 子客企业名称，最大长度64个字符 */
  ProxyOrganizationName: string;
  /** 子客企业经办人的姓名，最大长度50个字符 */
  ProxyOperatorName?: string;
  /** PC控制台指定模块，文件/合同管理:"DOCUMENT"，模板管理:"TEMPLATE"，印章管理:"SEAL"，组织架构/人员:"OPERATOR"，空字符串："账号信息"。 EndPoint为"CHANNEL"/"APP"只支持"SEAL"-印章管理 */
  Module?: string;
  /** 控制台指定模块Id */
  ModuleId?: string;
  /** 子客企业统一社会信用代码，最大长度200个字符 */
  UniformSocialCreditCode?: string;
  /** 是否展示左侧菜单栏 是：ENABLE（默认） 否：DISABLE */
  MenuStatus?: string;
  /** 链接跳转类型："PC"-PC控制台，“CHANNEL”-H5跳转到电子签小程序；“APP”-第三方APP或小程序跳转电子签小程序，默认为PC控制台 */
  Endpoint?: string;
  /** 触发自动跳转事件，仅对App类型有效，"VERIFIED":企业认证完成/员工认证完成后跳回原App/小程序 */
  AutoJumpBackEvent?: string;
  /** 支持的授权方式,授权方式: "1" - 上传授权书认证 "2" - 法定代表人认证 */
  AuthorizationTypes?: number[];
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface CreateConsoleLoginUrlResponse {
  /** 子客企业Web控制台url注意事项：1. 所有类型的链接在企业未认证/员工未认证完成时，只要在有效期内（一年）都可以访问2. 若企业认证完成且员工认证完成后，重新获取pc端的链接5分钟之内有效，且只能访问一次3. 若企业认证完成且员工认证完成后，重新获取H5/APP的链接只要在有效期内（一年）都可以访问4. 此链接仅单次有效，使用后需要再次创建新的链接（部分聊天软件，如企业微信默认会对链接进行解析，此时需要使用类似“代码片段”的方式或者放到txt文件里发送链接）5. 创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义 */
  ConsoleUrl?: string;
  /** 子客企业是否已开通腾讯电子签 */
  IsActivated?: boolean;
  /** 当前经办人是否已认证（false:未认证 true:已认证） */
  ProxyOperatorIsVerified?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowsByTemplatesRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 多个合同（签署流程）信息，最多支持20个 */
  FlowInfos: FlowInfo[];
  /** 是否为预览模式；默认为false，即非预览模式，此时发起合同并返回FlowIds；若为预览模式，不会发起合同，会返回PreviewUrls；预览链接有效期300秒；同时，如果预览的文件中指定了动态表格控件，需要进行异步合成；此时此接口返回的是合成前的文档预览链接，而合成完成后的文档预览链接会通过：回调通知的方式、或使用返回的TaskInfo中的TaskId通过ChannelGetTaskResultApi接口查询； */
  NeedPreview?: boolean;
  /** 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效, */
  PreviewType?: number;
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
}

declare interface CreateFlowsByTemplatesResponse {
  /** 多个合同ID */
  FlowIds?: string[];
  /** 业务信息，限制1024字符 */
  CustomerData?: string[];
  /** 创建消息，对应多个合同ID，成功为“”,创建失败则对应失败消息 */
  ErrorMessages?: string[];
  /** 预览模式下返回的预览文件url数组 */
  PreviewUrls?: string[];
  /** 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情； */
  TaskInfos?: TaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSealByImageRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 印章名称，最大长度不超过50字符 */
  SealName: string;
  /** 印章图片base64，大小不超过10M（原始图片不超过7.6M） */
  SealImage: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface CreateSealByImageResponse {
  /** 印章id */
  SealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSignUrlsRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 签署流程编号数组，最多支持100个。(备注：该参数和合同组编号必须二选一) */
  FlowIds?: string[];
  /** 合同组编号(备注：该参数和合同(流程)编号数组必须二选一) */
  FlowGroupId?: string;
  /** 签署链接类型：“WEIXINAPP”-短链直接跳小程序；“CHANNEL”-跳转H5页面；“APP”-第三方APP或小程序跳转电子签小程序；"LONGURL2WEIXINAPP"-长链接跳转小程序；默认“WEIXINAPP”类型，即跳转至小程序； */
  Endpoint?: string;
  /** 签署链接生成类型，默认是 "ALL"；"ALL"：全部签署方签署链接，此时不会给自动签署的签署方创建签署链接；"CHANNEL"：第三方平台子客企业企业；"NOT_CHANNEL"：非第三方平台子客企业企业；"PERSON"：个人；"FOLLOWER"：关注方，目前是合同抄送方； */
  GenerateType?: string;
  /** 非第三方平台子客企业参与方的企业名称，GenerateType为"NOT_CHANNEL"时必填 */
  OrganizationName?: string;
  /** 参与人姓名，GenerateType为"PERSON"时必填 */
  Name?: string;
  /** 参与人手机号；GenerateType为"PERSON"或"FOLLOWER"时必填 */
  Mobile?: string;
  /** 第三方平台子客企业的企业OpenId，GenerateType为"CHANNEL"时必填 */
  OrganizationOpenId?: string;
  /** 第三方平台子客企业参与人OpenId，GenerateType为"CHANNEL"时可用，指定到具体参与人, 仅展示已经实名的经办人信息 */
  OpenId?: string;
  /** Endpoint为"APP" 类型的签署链接，可以设置此值；支持调用方小程序打开签署链接，在电子签小程序完成签署后自动回跳至调用方小程序 */
  AutoJumpBack?: boolean;
  /** 签署完之后的H5页面的跳转链接，针对Endpoint为CHANNEL时有效，最大长度1000个字符。 */
  JumpUrl?: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface CreateSignUrlsResponse {
  /** 签署参与者签署H5链接信息数组 */
  SignUrlInfos?: SignUrlInfo[];
  /** 生成失败时的错误信息，成功返回”“，顺序和出参SignUrlInfos保持一致 */
  ErrorMessages?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelFlowEvidenceReportRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填 */
  Agent: Agent;
  /** 出证报告编号 */
  ReportId: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface DescribeChannelFlowEvidenceReportResponse {
  /** 出证报告 URL */
  ReportUrl?: string | null;
  /** 执行中：EvidenceStatusExecuting成功：EvidenceStatusSuccess失败：EvidenceStatusFailed */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtendedServiceAuthInfoRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填注: 此接口 参数Agent. ProxyOperator.OpenId 需要传递超管或者法人的OpenId */
  Agent: Agent;
}

declare interface DescribeExtendedServiceAuthInfoResponse {
  /** 企业扩展服务授权信息 */
  AuthInfo?: ExtentServiceAuthInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowDetailInfoRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 合同(流程)编号数组，最多支持100个。（备注：该参数和合同组编号必须二选一） */
  FlowIds?: string[];
  /** 合同组编号（备注：该参数和合同(流程)编号数组必须二选一） */
  FlowGroupId?: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface DescribeFlowDetailInfoResponse {
  /** 第三方平台应用号Id */
  ApplicationId?: string;
  /** 第三方平台子客企业OpenId */
  ProxyOrganizationOpenId?: string;
  /** 合同(签署流程)的具体详细描述信息 */
  FlowInfo?: FlowDetailInfo[] | null;
  /** 合同组编号 */
  FlowGroupId?: string | null;
  /** 合同组名称 */
  FlowGroupName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceUrlsByFlowsRequest {
  /** 应用相关信息。此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 查询资源所对应的签署流程Id，最多支持50个 */
  FlowIds?: string[];
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
}

declare interface DescribeResourceUrlsByFlowsResponse {
  /** 签署流程资源对应链接信息 */
  FlowResourceUrlInfos?: FlowResourceUrlInfo[];
  /** 创建消息，对应多个合同ID，成功为“”,创建失败则对应失败消息 */
  ErrorMessages?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplatesRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
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
  /** 是否获取模板预览链接 */
  WithPreviewUrl?: boolean;
  /** 是否获取模板的PDF文件链接- 第三方应用集成需要开启白名单时才能使用。 */
  WithPdfUrl?: boolean;
  /** 模板ID */
  ChannelTemplateId?: string;
}

declare interface DescribeTemplatesResponse {
  /** 模板详情 */
  Templates?: TemplateInfo[];
  /** 查询总数 */
  TotalCount?: number;
  /** 查询数量 */
  Limit?: number;
  /** 查询起始偏移 */
  Offset?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsageRequest {
  /** 应用信息，此接口Agent.AppId必填 */
  Agent: Agent;
  /** 开始时间，例如：2021-03-21 */
  StartDate: string;
  /** 结束时间，例如：2021-06-21；开始时间到结束时间的区间长度小于等于90天。 */
  EndDate: string;
  /** 是否汇总数据，默认不汇总。不汇总：返回在统计区间内第三方平台下所有企业的每日明细，即每个企业N条数据，N为统计天数；汇总：返回在统计区间内第三方平台下所有企业的汇总后数据，即每个企业一条数据； */
  NeedAggregate?: boolean;
  /** 单次返回的最多条目数量。默认为1000，且不能超过1000。 */
  Limit?: number;
  /** 偏移量，默认是0。 */
  Offset?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface DescribeUsageResponse {
  /** 用量明细条数 */
  Total?: number;
  /** 用量明细 */
  Details?: UsageDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDownloadFlowUrlRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 文件夹数组，签署流程总数不能超过50个，一个文件夹下，不能超过20个签署流程 */
  DownLoadFlows?: DownloadFlowInfo[];
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
}

declare interface GetDownloadFlowUrlResponse {
  /** 合同（流程）下载地址 */
  DownLoadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExtendedServiceRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。注: 此接口 参数Agent. ProxyOperator.OpenId 需要传递超管或者法人的OpenId */
  Agent: Agent;
  /** 扩展服务类型 AUTO_SIGN 企业静默签（自动签署） OVERSEA_SIGN 企业与港澳台居民*签署合同 MOBILE_CHECK_APPROVER 使用手机号验证签署方身份 PAGING_SEAL 骑缝章 DOWNLOAD_FLOW 授权渠道下载合同 */
  ServiceType: string;
  /** 操作类型 OPEN:开通 CLOSE:关闭 */
  Operate: string;
}

declare interface ModifyExtendedServiceResponse {
  /** 操作跳转链接，有效期24小时若操作时没有返回跳转链接，表示无需跳转操作，此时会直接开通/关闭服务。当操作类型是 OPEN 且 扩展服务类型是 AUTO_SIGN 或 DOWNLOAD_FLOW 或者 OVERSEA_SIGN 时返回操作链接，返回的链接需要平台方自行触达超管或法人，超管或法人点击链接完成服务开通操作。 */
  OperateUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OperateChannelTemplateRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 操作类型，查询:"SELECT"，删除:"DELETE"，更新:"UPDATE" */
  OperateType: string;
  /** 第三方应用平台模板库模板唯一标识 */
  TemplateId: string;
  /** 合作企业方第三方机构唯一标识数据，支持多个， 用","进行分隔 */
  ProxyOrganizationOpenIds?: string;
  /** 模板可见性, 全部可见-"all", 部分可见-"part" */
  AuthTag?: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface OperateChannelTemplateResponse {
  /** 腾讯电子签颁发给第三方应用平台的应用ID */
  AppId?: string | null;
  /** 第三方应用平台模板库模板唯一标识 */
  TemplateId?: string | null;
  /** 全部成功-"all-success",部分成功-"part-success", 全部失败-"fail"失败的会在FailMessageList中展示 */
  OperateResult?: string | null;
  /** 模板可见性, 全部可见-"all", 部分可见-"part" */
  AuthTag?: string | null;
  /** 合作企业方第三方机构唯一标识数据 */
  ProxyOrganizationOpenIds?: string[] | null;
  /** 操作失败信息数组 */
  FailMessageList?: AuthFailMessage[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PrepareFlowsRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。 */
  Agent: Agent;
  /** 多个合同（签署流程）信息，最大支持20个签署流程。 */
  FlowInfos: FlowInfo[];
  /** 操作完成后的跳转地址，最大长度200 */
  JumpUrl: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface PrepareFlowsResponse {
  /** 待发起文件确认页 */
  ConfirmUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncProxyOrganizationOperatorsRequest {
  /** 应用相关信息。 此接口Agent.AppId 和 Agent.ProxyOrganizationOpenId必填。 */
  Agent: Agent;
  /** 操作类型，新增:"CREATE"，修改:"UPDATE"，离职:"RESIGN" */
  OperatorType: string;
  /** 经办人信息列表，最大长度200 */
  ProxyOrganizationOperators: ProxyOrganizationOperator[];
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface SyncProxyOrganizationOperatorsResponse {
  /** Status 同步状态,全部同步失败接口会直接报错1-成功 2-部分成功 */
  Status?: number | null;
  /** 同步失败经办人及其失败原因 */
  FailedList?: SyncFailReason[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncProxyOrganizationRequest {
  /** 应用信息此接口Agent.AppId、Agent.ProxyOrganizationOpenId必填 */
  Agent: Agent;
  /** 第三方平台子客企业名称，最大长度64个字符 */
  ProxyOrganizationName: string;
  /** 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M */
  BusinessLicense?: string;
  /** 第三方平台子客企业统一社会信用代码，最大长度200个字符 */
  UniformSocialCreditCode?: string;
  /** 第三方平台子客企业法人/负责人姓名 */
  ProxyLegalName?: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface SyncProxyOrganizationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFilesRequest {
  /** 应用相关信息，若是第三方应用集成调用 appid 和proxyappid 必填 */
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
  FileIds?: string[];
  /** 上传成功文件数量 */
  TotalCount?: number;
  /** 文件Url */
  FileUrls?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20201222 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-12-22' } }

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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DestroyFlowFileRequest {
    /** 调用方信息 */
    Caller: Caller;
    /** 流程ID */
    FlowId: string;
  }

  interface DestroyFlowFileResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
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
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Essbasic 腾讯电子签（基础版）} */
declare interface Essbasic {
  (): Versions;
  /** 根据签署流程id批量撤销合同 {@link ChannelBatchCancelFlowsRequest} {@link ChannelBatchCancelFlowsResponse} */
  ChannelBatchCancelFlows(data: ChannelBatchCancelFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelBatchCancelFlowsResponse>;
  /** 撤销签署流程 {@link ChannelCancelFlowRequest} {@link ChannelCancelFlowResponse} */
  ChannelCancelFlow(data: ChannelCancelFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCancelFlowResponse>;
  /** 取消一码多扫二维码 {@link ChannelCancelMultiFlowSignQRCodeRequest} {@link ChannelCancelMultiFlowSignQRCodeResponse} */
  ChannelCancelMultiFlowSignQRCode(data: ChannelCancelMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCancelMultiFlowSignQRCodeResponse>;
  /** 根据签署流程id创建批量撤销url {@link ChannelCreateBatchCancelFlowUrlRequest} {@link ChannelCreateBatchCancelFlowUrlResponse} */
  ChannelCreateBatchCancelFlowUrl(data: ChannelCreateBatchCancelFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateBatchCancelFlowUrlResponse>;
  /** 领取未归属的合同 {@link ChannelCreateBoundFlowsRequest} {@link ChannelCreateBoundFlowsResponse} */
  ChannelCreateBoundFlows(data: ChannelCreateBoundFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateBoundFlowsResponse>;
  /** 创建文件转换任务 {@link ChannelCreateConvertTaskApiRequest} {@link ChannelCreateConvertTaskApiResponse} */
  ChannelCreateConvertTaskApi(data: ChannelCreateConvertTaskApiRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateConvertTaskApiResponse>;
  /** 创建嵌入web的链接 {@link ChannelCreateEmbedWebUrlRequest} {@link ChannelCreateEmbedWebUrlResponse} */
  ChannelCreateEmbedWebUrl(data: ChannelCreateEmbedWebUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateEmbedWebUrlResponse>;
  /** 通过文件创建签署流程 {@link ChannelCreateFlowByFilesRequest} {@link ChannelCreateFlowByFilesResponse} */
  ChannelCreateFlowByFiles(data?: ChannelCreateFlowByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowByFilesResponse>;
  /** 通过多文件创建合同组签署流程 {@link ChannelCreateFlowGroupByFilesRequest} {@link ChannelCreateFlowGroupByFilesResponse} */
  ChannelCreateFlowGroupByFiles(data: ChannelCreateFlowGroupByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowGroupByFilesResponse>;
  /** 合同催办 {@link ChannelCreateFlowRemindsRequest} {@link ChannelCreateFlowRemindsResponse} */
  ChannelCreateFlowReminds(data: ChannelCreateFlowRemindsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowRemindsResponse>;
  /** 提交企业签署流程审批结果 {@link ChannelCreateFlowSignReviewRequest} {@link ChannelCreateFlowSignReviewResponse} */
  ChannelCreateFlowSignReview(data: ChannelCreateFlowSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowSignReviewResponse>;
  /** 创建个人H5签署链接 {@link ChannelCreateFlowSignUrlRequest} {@link ChannelCreateFlowSignUrlResponse} */
  ChannelCreateFlowSignUrl(data: ChannelCreateFlowSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowSignUrlResponse>;
  /** 创建一码多扫签署流程二维码 {@link ChannelCreateMultiFlowSignQRCodeRequest} {@link ChannelCreateMultiFlowSignQRCodeResponse} */
  ChannelCreateMultiFlowSignQRCode(data: ChannelCreateMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateMultiFlowSignQRCodeResponse>;
  /** 创建预发起合同 {@link ChannelCreatePrepareFlowRequest} {@link ChannelCreatePrepareFlowResponse} */
  ChannelCreatePrepareFlow(data: ChannelCreatePrepareFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreatePrepareFlowResponse>;
  /** 发起解除协议 {@link ChannelCreateReleaseFlowRequest} {@link ChannelCreateReleaseFlowResponse} */
  ChannelCreateReleaseFlow(data: ChannelCreateReleaseFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateReleaseFlowResponse>;
  /** 创建印章授权 {@link ChannelCreateSealPolicyRequest} {@link ChannelCreateSealPolicyResponse} */
  ChannelCreateSealPolicy(data: ChannelCreateSealPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateSealPolicyResponse>;
  /** 绑定员工角色 {@link ChannelCreateUserRolesRequest} {@link ChannelCreateUserRolesResponse} */
  ChannelCreateUserRoles(data: ChannelCreateUserRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateUserRolesResponse>;
  /** 删除员工绑定角色 {@link ChannelDeleteRoleUsersRequest} {@link ChannelDeleteRoleUsersResponse} */
  ChannelDeleteRoleUsers(data: ChannelDeleteRoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDeleteRoleUsersResponse>;
  /** 删除印章授权 {@link ChannelDeleteSealPoliciesRequest} {@link ChannelDeleteSealPoliciesResponse} */
  ChannelDeleteSealPolicies(data: ChannelDeleteSealPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDeleteSealPoliciesResponse>;
  /** 查询企业员工 {@link ChannelDescribeEmployeesRequest} {@link ChannelDescribeEmployeesResponse} */
  ChannelDescribeEmployees(data: ChannelDescribeEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeEmployeesResponse>;
  /** 查询子客企业电子印章 {@link ChannelDescribeOrganizationSealsRequest} {@link ChannelDescribeOrganizationSealsResponse} */
  ChannelDescribeOrganizationSeals(data: ChannelDescribeOrganizationSealsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeOrganizationSealsResponse>;
  /** 查询用户角色 {@link ChannelDescribeRolesRequest} {@link ChannelDescribeRolesResponse} */
  ChannelDescribeRoles(data: ChannelDescribeRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeRolesResponse>;
  /** 查询转换任务状态 {@link ChannelGetTaskResultApiRequest} {@link ChannelGetTaskResultApiResponse} */
  ChannelGetTaskResultApi(data: ChannelGetTaskResultApiRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelGetTaskResultApiResponse>;
  /** 更新印章状态 {@link ChannelUpdateSealStatusRequest} {@link ChannelUpdateSealStatusResponse} */
  ChannelUpdateSealStatus(data: ChannelUpdateSealStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelUpdateSealStatusResponse>;
  /** 流程文件验签 {@link ChannelVerifyPdfRequest} {@link ChannelVerifyPdfResponse} */
  ChannelVerifyPdf(data: ChannelVerifyPdfRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelVerifyPdfResponse>;
  /** 创建并返回出证报告 {@link CreateChannelFlowEvidenceReportRequest} {@link CreateChannelFlowEvidenceReportResponse} */
  CreateChannelFlowEvidenceReport(data: CreateChannelFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChannelFlowEvidenceReportResponse>;
  /** 生成控制台、移动端链接 {@link CreateConsoleLoginUrlRequest} {@link CreateConsoleLoginUrlResponse} */
  CreateConsoleLoginUrl(data: CreateConsoleLoginUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsoleLoginUrlResponse>;
  /** 使用模板创建签署流程 {@link CreateFlowsByTemplatesRequest} {@link CreateFlowsByTemplatesResponse} */
  CreateFlowsByTemplates(data: CreateFlowsByTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowsByTemplatesResponse>;
  /** 通过图片为子客企业代创建印章 {@link CreateSealByImageRequest} {@link CreateSealByImageResponse} */
  CreateSealByImage(data: CreateSealByImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealByImageResponse>;
  /** 获取跳转小程序查看或签署链接 {@link CreateSignUrlsRequest} {@link CreateSignUrlsResponse} */
  CreateSignUrls(data: CreateSignUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSignUrlsResponse>;
  /** 查询出证报告 {@link DescribeChannelFlowEvidenceReportRequest} {@link DescribeChannelFlowEvidenceReportResponse} */
  DescribeChannelFlowEvidenceReport(data: DescribeChannelFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelFlowEvidenceReportResponse>;
  /** 查询企业扩展服务授权信息 {@link DescribeExtendedServiceAuthInfoRequest} {@link DescribeExtendedServiceAuthInfoResponse} */
  DescribeExtendedServiceAuthInfo(data: DescribeExtendedServiceAuthInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtendedServiceAuthInfoResponse>;
  /** 查询合同(签署流程)的详细信息 {@link DescribeFlowDetailInfoRequest} {@link DescribeFlowDetailInfoResponse} */
  DescribeFlowDetailInfo(data: DescribeFlowDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowDetailInfoResponse>;
  /** 根据签署流程信息批量获取资源下载链接 {@link DescribeResourceUrlsByFlowsRequest} {@link DescribeResourceUrlsByFlowsResponse} */
  DescribeResourceUrlsByFlows(data: DescribeResourceUrlsByFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceUrlsByFlowsResponse>;
  /** 查询模板信息列表 {@link DescribeTemplatesRequest} {@link DescribeTemplatesResponse} */
  DescribeTemplates(data: DescribeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplatesResponse>;
  /** 合同用量查询 {@link DescribeUsageRequest} {@link DescribeUsageResponse} */
  DescribeUsage(data: DescribeUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsageResponse>;
  /** 获取合同（流程）批量下载链接 {@link GetDownloadFlowUrlRequest} {@link GetDownloadFlowUrlResponse} */
  GetDownloadFlowUrl(data: GetDownloadFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GetDownloadFlowUrlResponse>;
  /** 修改企业扩展服务 {@link ModifyExtendedServiceRequest} {@link ModifyExtendedServiceResponse} */
  ModifyExtendedService(data: ModifyExtendedServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExtendedServiceResponse>;
  /** 操作第三方应用平台企业模板 {@link OperateChannelTemplateRequest} {@link OperateChannelTemplateResponse} */
  OperateChannelTemplate(data: OperateChannelTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<OperateChannelTemplateResponse>;
  /** 准备待发起文件 {@link PrepareFlowsRequest} {@link PrepareFlowsResponse} */
  PrepareFlows(data: PrepareFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<PrepareFlowsResponse>;
  /** 同步企业信息 {@link SyncProxyOrganizationRequest} {@link SyncProxyOrganizationResponse} */
  SyncProxyOrganization(data: SyncProxyOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<SyncProxyOrganizationResponse>;
  /** 同步企业经办人列表 {@link SyncProxyOrganizationOperatorsRequest} {@link SyncProxyOrganizationOperatorsResponse} */
  SyncProxyOrganizationOperators(data: SyncProxyOrganizationOperatorsRequest, config?: AxiosRequestConfig): AxiosPromise<SyncProxyOrganizationOperatorsResponse>;
  /** 文件上传 {@link UploadFilesRequest} {@link UploadFilesResponse} */
  UploadFiles(data: UploadFilesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFilesResponse>;
  /** 归档流程 {@link V20201222.ArchiveFlowRequest} {@link V20201222.ArchiveFlowResponse} */
  ArchiveFlow(data: V20201222.ArchiveFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ArchiveFlowResponse>;
  /** 撤销流程 {@link V20201222.CancelFlowRequest} {@link V20201222.CancelFlowResponse} */
  CancelFlow(data: V20201222.CancelFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CancelFlowResponse>;
  /** 银行卡二要素检测 {@link V20201222.CheckBankCard2EVerificationRequest} {@link V20201222.CheckBankCard2EVerificationResponse} */
  CheckBankCard2EVerification(data: V20201222.CheckBankCard2EVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCard2EVerificationResponse>;
  /** 银行卡三要素检测 {@link V20201222.CheckBankCard3EVerificationRequest} {@link V20201222.CheckBankCard3EVerificationResponse} */
  CheckBankCard3EVerification(data: V20201222.CheckBankCard3EVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCard3EVerificationResponse>;
  /** 银行卡四要素检测 {@link V20201222.CheckBankCard4EVerificationRequest} {@link V20201222.CheckBankCard4EVerificationResponse} */
  CheckBankCard4EVerification(data: V20201222.CheckBankCard4EVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCard4EVerificationResponse>;
  /** 银行卡二三四要素检测 {@link V20201222.CheckBankCardVerificationRequest} {@link V20201222.CheckBankCardVerificationResponse} */
  CheckBankCardVerification(data: V20201222.CheckBankCardVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckBankCardVerificationResponse>;
  /** 检测人脸核身结果 {@link V20201222.CheckFaceIdentifyRequest} {@link V20201222.CheckFaceIdentifyResponse} */
  CheckFaceIdentify(data: V20201222.CheckFaceIdentifyRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckFaceIdentifyResponse>;
  /** 身份证核验 {@link V20201222.CheckIdCardVerificationRequest} {@link V20201222.CheckIdCardVerificationResponse} */
  CheckIdCardVerification(data: V20201222.CheckIdCardVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckIdCardVerificationResponse>;
  /** 手机号二要素核验 {@link V20201222.CheckMobileAndNameRequest} {@link V20201222.CheckMobileAndNameResponse} */
  CheckMobileAndName(data: V20201222.CheckMobileAndNameRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckMobileAndNameResponse>;
  /** 手机号三要素核验 {@link V20201222.CheckMobileVerificationRequest} {@link V20201222.CheckMobileVerificationResponse} */
  CheckMobileVerification(data: V20201222.CheckMobileVerificationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckMobileVerificationResponse>;
  /** 确认验证码 {@link V20201222.CheckVerifyCodeMatchFlowIdRequest} {@link V20201222.CheckVerifyCodeMatchFlowIdResponse} */
  CheckVerifyCodeMatchFlowId(data: V20201222.CheckVerifyCodeMatchFlowIdRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CheckVerifyCodeMatchFlowIdResponse>;
  /** 生成慧眼API签名 {@link V20201222.CreateFaceIdSignRequest} {@link V20201222.CreateFaceIdSignResponse} */
  CreateFaceIdSign(data: V20201222.CreateFaceIdSignRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateFaceIdSignResponse>;
  /** 用PDF文件创建流程 {@link V20201222.CreateFlowByFilesRequest} {@link V20201222.CreateFlowByFilesResponse} */
  CreateFlowByFiles(data: V20201222.CreateFlowByFilesRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateFlowByFilesResponse>;
  /** 获取慧眼H5人脸核身Url {@link V20201222.CreateH5FaceIdUrlRequest} {@link V20201222.CreateH5FaceIdUrlResponse} */
  CreateH5FaceIdUrl(data: V20201222.CreateH5FaceIdUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateH5FaceIdUrlResponse>;
  /** 生成预览签署URL {@link V20201222.CreatePreviewSignUrlRequest} {@link V20201222.CreatePreviewSignUrlResponse} */
  CreatePreviewSignUrl(data: V20201222.CreatePreviewSignUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreatePreviewSignUrlResponse>;
  /** 创建印章 {@link V20201222.CreateSealRequest} {@link V20201222.CreateSealResponse} */
  CreateSeal(data: V20201222.CreateSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSealResponse>;
  /** 流程静默签署 {@link V20201222.CreateServerFlowSignRequest} {@link V20201222.CreateServerFlowSignResponse} */
  CreateServerFlowSign(data: V20201222.CreateServerFlowSignRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateServerFlowSignResponse>;
  /** 生成签署URL {@link V20201222.CreateSignUrlRequest} {@link V20201222.CreateSignUrlResponse} */
  CreateSignUrl(data: V20201222.CreateSignUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSignUrlResponse>;
  /** 注册子机构 {@link V20201222.CreateSubOrganizationRequest} {@link V20201222.CreateSubOrganizationResponse} */
  CreateSubOrganization(data: V20201222.CreateSubOrganizationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSubOrganizationResponse>;
  /** 注册实名子机构并生成印章 {@link V20201222.CreateSubOrganizationAndSealRequest} {@link V20201222.CreateSubOrganizationAndSealResponse} */
  CreateSubOrganizationAndSeal(data: V20201222.CreateSubOrganizationAndSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateSubOrganizationAndSealResponse>;
  /** 注册个人用户 {@link V20201222.CreateUserRequest} {@link V20201222.CreateUserResponse} */
  CreateUser(data: V20201222.CreateUserRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateUserResponse>;
  /** 注册实名个人用户并生成签名 {@link V20201222.CreateUserAndSealRequest} {@link V20201222.CreateUserAndSealResponse} */
  CreateUserAndSeal(data: V20201222.CreateUserAndSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.CreateUserAndSealResponse>;
  /** 删除印章 {@link V20201222.DeleteSealRequest} {@link V20201222.DeleteSealResponse} */
  DeleteSeal(data: V20201222.DeleteSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DeleteSealResponse>;
  /** 拉取流程目录参与者的信息 {@link V20201222.DescribeCatalogApproversRequest} {@link V20201222.DescribeCatalogApproversResponse} */
  DescribeCatalogApprovers(data: V20201222.DescribeCatalogApproversRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCatalogApproversResponse>;
  /** 拉取目录签署区 {@link V20201222.DescribeCatalogSignComponentsRequest} {@link V20201222.DescribeCatalogSignComponentsResponse} */
  DescribeCatalogSignComponents(data: V20201222.DescribeCatalogSignComponentsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCatalogSignComponentsResponse>;
  /** 根据用户自定义id查询流程id {@link V20201222.DescribeCustomFlowIdsRequest} {@link V20201222.DescribeCustomFlowIdsResponse} */
  DescribeCustomFlowIds(data: V20201222.DescribeCustomFlowIdsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCustomFlowIdsResponse>;
  /** 根据流程id反查自定义流程id {@link V20201222.DescribeCustomFlowIdsByFlowIdRequest} {@link V20201222.DescribeCustomFlowIdsByFlowIdResponse} */
  DescribeCustomFlowIdsByFlowId(data: V20201222.DescribeCustomFlowIdsByFlowIdRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeCustomFlowIdsByFlowIdResponse>;
  /** 查询慧眼人脸核身照片 {@link V20201222.DescribeFaceIdPhotosRequest} {@link V20201222.DescribeFaceIdPhotosResponse} */
  DescribeFaceIdPhotos(data: V20201222.DescribeFaceIdPhotosRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFaceIdPhotosResponse>;
  /** 获取慧眼人脸核身结果 {@link V20201222.DescribeFaceIdResultsRequest} {@link V20201222.DescribeFaceIdResultsResponse} */
  DescribeFaceIdResults(data: V20201222.DescribeFaceIdResultsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFaceIdResultsResponse>;
  /** 根据用户自定义id查询文件id {@link V20201222.DescribeFileIdsByCustomIdsRequest} {@link V20201222.DescribeFileIdsByCustomIdsResponse} */
  DescribeFileIdsByCustomIds(data: V20201222.DescribeFileIdsByCustomIdsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFileIdsByCustomIdsResponse>;
  /** 查询文件下载链接 {@link V20201222.DescribeFileUrlsRequest} {@link V20201222.DescribeFileUrlsResponse} */
  DescribeFileUrls(data: V20201222.DescribeFileUrlsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFileUrlsResponse>;
  /** 查询流程信息 {@link V20201222.DescribeFlowRequest} {@link V20201222.DescribeFlowResponse} */
  DescribeFlow(data: V20201222.DescribeFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFlowResponse>;
  /** 查询流程参与者信息 {@link V20201222.DescribeFlowApproversRequest} {@link V20201222.DescribeFlowApproversResponse} */
  DescribeFlowApprovers(data: V20201222.DescribeFlowApproversRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFlowApproversResponse>;
  /** 查询流程文件 {@link V20201222.DescribeFlowFilesRequest} {@link V20201222.DescribeFlowFilesResponse} */
  DescribeFlowFiles(data: V20201222.DescribeFlowFilesRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeFlowFilesResponse>;
  /** 查询电子印章 {@link V20201222.DescribeSealsRequest} {@link V20201222.DescribeSealsResponse} */
  DescribeSeals(data: V20201222.DescribeSealsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeSealsResponse>;
  /** 查询子机构信息 {@link V20201222.DescribeSubOrganizationsRequest} {@link V20201222.DescribeSubOrganizationsResponse} */
  DescribeSubOrganizations(data: V20201222.DescribeSubOrganizationsRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeSubOrganizationsResponse>;
  /** 查询个人用户信息 {@link V20201222.DescribeUsersRequest} {@link V20201222.DescribeUsersResponse} */
  DescribeUsers(data: V20201222.DescribeUsersRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DescribeUsersResponse>;
  /** 销毁流程文件 {@link V20201222.DestroyFlowFileRequest} {@link V20201222.DestroyFlowFileResponse} */
  DestroyFlowFile(data: V20201222.DestroyFlowFileRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.DestroyFlowFileResponse>;
  /** 生成企业电子印章 {@link V20201222.GenerateOrganizationSealRequest} {@link V20201222.GenerateOrganizationSealResponse} */
  GenerateOrganizationSeal(data: V20201222.GenerateOrganizationSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.GenerateOrganizationSealResponse>;
  /** 生成个人电子签名 {@link V20201222.GenerateUserSealRequest} {@link V20201222.GenerateUserSealResponse} */
  GenerateUserSeal(data: V20201222.GenerateUserSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.GenerateUserSealResponse>;
  /** 修改企业默认印章 {@link V20201222.ModifyOrganizationDefaultSealRequest} {@link V20201222.ModifyOrganizationDefaultSealResponse} */
  ModifyOrganizationDefaultSeal(data: V20201222.ModifyOrganizationDefaultSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifyOrganizationDefaultSealResponse>;
  /** 更新电子印章 {@link V20201222.ModifySealRequest} {@link V20201222.ModifySealResponse} */
  ModifySeal(data: V20201222.ModifySealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifySealResponse>;
  /** 更新子机构信息 {@link V20201222.ModifySubOrganizationInfoRequest} {@link V20201222.ModifySubOrganizationInfoResponse} */
  ModifySubOrganizationInfo(data: V20201222.ModifySubOrganizationInfoRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifySubOrganizationInfoResponse>;
  /** 更新个人用户信息 {@link V20201222.ModifyUserRequest} {@link V20201222.ModifyUserResponse} */
  ModifyUser(data: V20201222.ModifyUserRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifyUserResponse>;
  /** 修改个人默认印章 {@link V20201222.ModifyUserDefaultSealRequest} {@link V20201222.ModifyUserDefaultSealResponse} */
  ModifyUserDefaultSeal(data: V20201222.ModifyUserDefaultSealRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.ModifyUserDefaultSealResponse>;
  /** 拒签流程 {@link V20201222.RejectFlowRequest} {@link V20201222.RejectFlowResponse} */
  RejectFlow(data: V20201222.RejectFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.RejectFlowResponse>;
  /** 发送流程 {@link V20201222.SendFlowRequest} {@link V20201222.SendFlowResponse} */
  SendFlow(data: V20201222.SendFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SendFlowResponse>;
  /** 发送流程并生成签署URL {@link V20201222.SendFlowUrlRequest} {@link V20201222.SendFlowUrlResponse} */
  SendFlowUrl(data: V20201222.SendFlowUrlRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SendFlowUrlResponse>;
  /** 发送签署验证码 {@link V20201222.SendSignInnerVerifyCodeRequest} {@link V20201222.SendSignInnerVerifyCodeResponse} */
  SendSignInnerVerifyCode(data: V20201222.SendSignInnerVerifyCodeRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SendSignInnerVerifyCodeResponse>;
  /** 签署流程 {@link V20201222.SignFlowRequest} {@link V20201222.SignFlowResponse} */
  SignFlow(data: V20201222.SignFlowRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.SignFlowResponse>;
  /** 文件上传 {@link V20201222.UploadFilesRequest} {@link V20201222.UploadFilesResponse} */
  UploadFiles(data: V20201222.UploadFilesRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.UploadFilesResponse>;
  /** 子机构通过实名认证 {@link V20201222.VerifySubOrganizationRequest} {@link V20201222.VerifySubOrganizationResponse} */
  VerifySubOrganization(data: V20201222.VerifySubOrganizationRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.VerifySubOrganizationResponse>;
  /** 个人用户通过实名认证 {@link V20201222.VerifyUserRequest} {@link V20201222.VerifyUserResponse} */
  VerifyUser(data: V20201222.VerifyUserRequest, config: AxiosRequestConfig & V20201222.VersionHeader): AxiosPromise<V20201222.VerifyUserResponse>;
}

export declare type Versions = ["2021-05-26", "2020-12-22"];

export default Essbasic;
