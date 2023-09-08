/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 企业超管信息 */
declare interface Admin {
  /** 超管名 */
  Name?: string | null;
  /** 超管手机号 */
  Mobile?: string | null;
}

/** 代理相关应用信息，如集团主企业代子企业操作 */
declare interface Agent {
  /** 代理机构的应用编号,32位字符串，一般不用传 */
  AppId?: string;
  /** 被代理机构的应用号，一般不用传 */
  ProxyAppId?: string | null;
  /** 被代理机构在电子签平台的机构编号，集团代理下场景必传 */
  ProxyOrganizationId?: string | null;
  /** 被代理机构的经办人，一般不用传 */
  ProxyOperator?: string | null;
}

/** 参与者信息。 */
declare interface ApproverInfo {
  /** 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下:**0**：企业**1**：个人**3**：企业静默签署注：`类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。`**7**: 个人自动签署，适用于个人自动签场景。注: `个人自动签场景为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverType: number;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  ApproverName: string;
  /** 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。请确认手机号所有方为此合同签署方。 */
  ApproverMobile: string;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。 */
  OrganizationName?: string;
  /** 合同中的签署控件列表，列表中可支持下列多种签署控件,控件的详细定义参考开发者中心的Component结构体 个人签名/印章 企业印章 骑缝章等签署控件 */
  SignComponents?: Component[];
  /** 签署方经办人的证件类型，支持以下类型ID_CARD 居民身份证 (默认值)HONGKONG_AND_MACAO 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)OTHER_CARD_TYPE 其他证件注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverIdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  ApproverIdCardNumber?: string;
  /** 通知签署方经办人的方式, 有以下途径: **sms** : (默认)短信 **none** : 不通知 */
  NotifyType?: string;
  /** 收据场景设置签署人角色类型, 可以设置如下****类型****: **1** :收款人 **2** :开具人 **3** :见证人注: `收据场景为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverRole?: number;
  /** 签署意愿确认渠道，默认为WEIXINAPP:人脸识别注: 将要废弃, 用ApproverSignTypes签署人签署合同时的认证方式代替, 新客户可请用ApproverSignTypes来设置 */
  VerifyChannel?: string[];
  /** 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：合同页数少于等于2页，阅读时间为3秒；合同页数为3到5页，阅读时间为5秒；合同页数大于等于6页，阅读时间为10秒。 */
  PreReadTime?: number;
  /** 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得注: `若传此字段 则以userid的信息为主，会覆盖传递过来的签署人基本信息， 包括姓名，手机号，证件类型等信息` */
  UserId?: string;
  /** 在企微场景下使用，需设置参数为**WEWORKAPP**，以表明合同来源于企微。 */
  ApproverSource?: string;
  /** 在企业微信场景下，表明该合同流程为或签，其最大长度为64位字符串。所有参与或签的人员均需具备该标识。注意，在合同中，不同的或签参与人必须保证其CustomApproverTag唯一。如果或签签署人为本方企业微信参与人，则需要指定ApproverSource参数为WEWORKAPP。 */
  CustomApproverTag?: string;
  /** 可以控制签署方在签署合同时能否进行某些操作，例如拒签、转交他人等。详细操作可以参考开发者中心的ApproverOption结构体。 */
  ApproverOption?: ApproverOption;
  /** 指定个人签署方查看合同的校验方式,可以传值如下: **1** : （默认）人脸识别,人脸识别后才能合同内容 **2** : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）注: 如果合同流程设置ApproverVerifyType查看合同的校验方式, 则忽略此签署人的查看合同的校验方式此字段不可传多个校验方式 */
  ApproverVerifyTypes?: number[];
  /** 您可以指定签署方签署合同的认证校验方式，可传递以下值：**1**：人脸认证，需进行人脸识别成功后才能签署合同；**2**：签署密码，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署；**3**：运营商三要素，需到运营商处比对手机号实名信息（名字、手机号、证件号）校验一致才能成功进行合同签署。注：默认情况下，认证校验方式为人脸认证和签署密码两种形式；您可以传递多种值，表示可用多种认证校验方式。 */
  ApproverSignTypes?: number[];
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：**false**：（默认）不需要审批，直接签署。**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  ApproverNeedSignReview?: boolean;
}

/** 签署人个性化能力信息 */
declare interface ApproverOption {
  /** 签署方是否可以拒签 **false** : ( 默认)可以拒签 **true** :不可以拒签 */
  NoRefuse?: boolean;
  /** 签署方是否可以转他人处理 **false** : ( 默认)可以转他人处理 **true** :不可以转他人处理 */
  NoTransfer?: boolean;
}

/** 指定签署人限制项 */
declare interface ApproverRestriction {
  /** 指定签署人名字 */
  Name?: string;
  /** 指定签署人手机号，11位数字 */
  Mobile?: string;
  /** 指定签署人证件类型，ID_CARD-身份证 */
  IdCardType?: string;
  /** 指定签署人证件号码，字母大写 */
  IdCardNumber?: string;
}

/** 授权用户 */
declare interface AuthorizedUser {
  /** 电子签系统中的用户id */
  UserId: string;
}

/** 自动签开启、签署相关配置 */
declare interface AutoSignConfig {
  /** 自动签开通个人用户信息, 包括名字,身份证等 */
  UserInfo: UserThreeFactor;
  /** 是否回调证书信息:**false**: 不需要(默认)**true**:需要 */
  CertInfoCallback?: boolean;
  /** 是否支持用户自定义签名印章:**false**: 不能自己定义(默认)**true**: 可以自己定义 */
  UserDefineSeal?: boolean;
  /** 回调中是否需要自动签将要使用的印章(签名) 图片的 base64:**false**: 不需要(默认)**true**: 需要 */
  SealImgCallback?: boolean;
  /** 执行结果的回调URL，该URL仅支持HTTP或HTTPS协议，建议采用HTTPS协议以保证数据传输的安全性。腾讯电子签服务器将通过POST方式，application/json格式通知执行结果，请确保外网可以正常访问该URL。回调的相关说明可参考开发者中心的回调通知模块。 */
  CallbackUrl?: string;
  /** 开通时候的身份验证方式, 取值为：**WEIXINAPP** : 微信人脸识别**INSIGHT** : 慧眼人脸认别**TELECOM** : 运营商三要素验证注：如果是小程序开通链接，支持传 WEIXINAPP / TELECOM。为空默认 WEIXINAPP如果是 H5 开通链接，支持传 INSIGHT / TELECOM。为空默认 INSIGHT */
  VerifyChannels?: string[];
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。**0**: (默认) 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人`**1**: 不使用个人自动签账号许可进行开通 */
  LicenseType?: number;
}

/** 企业应用回调信息 */
declare interface CallbackInfo {
  /** 回调url,。请确保回调地址能够接收并处理 HTTP POST 请求，并返回状态码 200 以表示处理正常。 */
  CallbackUrl: string;
  /** 回调加密key，已废弃 */
  Token?: string;
  /** 回调加密key，用于回调消息加解密。 */
  CallbackKey?: string;
  /** 回调验签token，用于回调通知校验。 */
  CallbackToken?: string;
}

/** 此结构体 (Caller) 用于描述调用方属性。 */
declare interface Caller {
  /** 应用号 */
  ApplicationId?: string;
  /** 主机构ID */
  OrganizationId?: string;
  /** 经办人的用户ID，同UserId */
  OperatorId?: string;
  /** 下属机构ID */
  SubOrganizationId?: string;
}

/** 抄送信息 */
declare interface CcInfo {
  /** 被抄送方手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。请确认手机号所有方为此业务通知方。 */
  Mobile?: string;
  /** 被抄送方姓名。抄送方的姓名将用于身份认证，请确保填写的姓名为抄送方的真实姓名，而非昵称等代名。 */
  Name?: string;
  /** 被抄送方类型, 可设置以下类型: **0** :个人抄送方 **1** :企业员工抄送方 */
  CcType?: number;
  /** 被抄送方权限, 可设置如下权限: **0** :可查看合同内容 **1** :可查看合同内容也可下载原文 */
  CcPermission?: number;
  /** 通知签署方经办人的方式, 有以下途径: **sms** : (默认)短信 **none** : 不通知 */
  NotifyType?: string;
}

/** 模板/流程中控件信息，可以是填充控件或签署控件 */
declare interface Component {
  /** 如果是Component填写控件类型，则可选的字段为：TEXT - 普通文本控件，输入文本字符串；MULTI_LINE_TEXT - 多行文本控件，输入文本字符串；CHECK_BOX - 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；FILL_IMAGE - 图片控件，ComponentValue 填写图片的资源 ID；DYNAMIC_TABLE - 动态表格控件；ATTACHMENT - 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分隔；SELECTOR - 选择器控件，ComponentValue填写选择的字符串内容；DATE - 日期控件；默认是格式化为xxxx年xx月xx日字符串；DISTRICT - 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；如果是SignComponent签署控件类型，则可选的字段为SIGN_SEAL - 签署印章控件；SIGN_DATE - 签署日期控件；SIGN_SIGNATURE - 用户签名控件；SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeightSIGN_OPINION - 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认；SIGN_LEGAL_PERSON_SEAL - 企业法定代表人控件。表单域的控件不能作为印章和签名控件 */
  ComponentType: string;
  /** 控件所属文件的序号（取值为：0-N）。目前单文件的情况下，值是0 */
  FileIndex: number;
  /** 参数控件高度，单位pt */
  ComponentHeight: number;
  /** 参数控件宽度，单位pt */
  ComponentWidth: number;
  /** 参数控件所在页码，取值为：1-N */
  ComponentPage: number;
  /** 参数控件X位置，单位pt */
  ComponentPosX: number;
  /** 参数控件Y位置，单位pt */
  ComponentPosY: number;
  /** 控件唯一ID。或使用文件发起合同时用于GenerateMode==KEYWORD 指定关键字 */
  ComponentId?: string;
  /** 控件名。或使用文件发起合同时用于GenerateMode==FIELD 指定表单域名称 */
  ComponentName?: string;
  /** 是否必选，默认为false-非必选 */
  ComponentRequired?: boolean;
  /** 控件关联的参与方ID，对应Recipient结构体中的RecipientId */
  ComponentRecipientId?: string;
  /** 扩展参数：为JSON格式。ComponentType为FILL_IMAGE时，支持以下参数：NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true: 不居中FillMethod: int. 填充方式。0-铺满（默认）；1-等比例缩放ComponentType为SIGN_SIGNATURE类型可以控制签署方式{“ComponentTypeLimit”: [“xxx”]}xxx可以为：HANDWRITE – 手写签名OCR_ESIGN -- AI智能识别手写签名ESIGN -- 个人印章类型SYSTEM_ESIGN -- 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署）如：{“ComponentTypeLimit”: [“SYSTEM_ESIGN”]}ComponentType为SIGN_DATE时，支持以下参数：1 Font：字符串类型目前只支持"黑体"、"宋体"，如果不填默认为"黑体"2 FontSize： 数字类型，范围6-72，默认值为123 FontAlign： 字符串类型，可取Left/Right/Center，对应左对齐/居中/右对齐4 Format： 字符串类型，日期格式，必须是以下五种之一 “yyyy m d”，”yyyy年m月d日”，”yyyy/m/d”，”yyyy-m-d”，”yyyy.m.d”。5 Gaps:： 字符串类型，仅在Format为“yyyy m d”时起作用，格式为用逗号分开的两个整数，例如”2,2”，两个数字分别是日期格式的前后两个空隙中的空格个数如果extra参数为空，默认为”yyyy年m月d日”格式的居中日期特别地，如果extra中Format字段为空或无法被识别，则extra参数会被当作默认值处理（Font，FontSize，Gaps和FontAlign都不会起效）参数样例： "ComponentExtra": "{\"Format\":“yyyy m d”,\"FontSize\":12,\"Gaps\":\"2,2\", \"FontAlign\":\"Right\"}"ComponentType为SIGN_SEAL类型时，支持以下参数：1.PageRanges：PageRange的数组，通过PageRanges属性设置该印章在PDF所有页面上盖章（适用于标书在所有页面盖章的情况）参数样例："ComponentExtra":"{\"PageRanges\":[{\"BeginPage\":1,\"EndPage\":-1}]}" */
  ComponentExtra?: string;
  /** 是否是表单域类型，默认false-不是 */
  IsFormType?: boolean | null;
  /** 控件填充vaule，ComponentType和传入值类型对应关系：TEXT - 文本内容MULTI_LINE_TEXT - 文本内容CHECK_BOX - true/falseFILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取SELECTOR - 选项值DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525)$/签署意见控件： 约束：签署意见最大长度为50字符签署人手机号控件： 约束：国内手机号 13,14,15,16,17,18,19号段长度11位签署人身份证控件： 约束：合法的身份证号码检查控件名称： 约束：控件名称最大长度为20字符单行文本控件： 约束：只允许输入中文，英文，数字，中英文标点符号多行文本控件： 约束：只允许输入中文，英文，数字，中英文标点符号勾选框控件： 约束：选择填字符串true，不选填字符串false选择器控件： 约束：同单行文本控件约束，填写选择值中的字符串数字控件： 约束：请输入有效的数字(可带小数点) 检查正则表达式：/^(-|\+)?\d+(\.\d+)?$/日期控件： 约束：格式：yyyy年mm月dd日附件控件： 约束：JPG或PNG图片，上传数量限制，1到6个，最大6个附件图片控件： 约束：JPG或PNG图片，填写上传的图片资源ID邮箱控件： 约束：请输入有效的邮箱地址, w3c标准 检查正则表达式：/^([A-Za-z0-9_\-.!#$%&])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/ 参考：https://emailregex.com/地址控件： 同单行文本控件约束省市区控件： 同单行文本控件约束性别控件： 同单行文本控件约束，填写选择值中的字符串学历控件： 同单行文本控件约束，填写选择值中的字符串 */
  ComponentValue?: string;
  /** NORMAL 正常模式，使用坐标制定签署控件位置FIELD 表单域，需使用ComponentName指定表单域名称KEYWORD 关键字，使用ComponentId指定关键字 */
  GenerateMode?: string;
  /** 日期签署控件的字号，默认为 12 */
  ComponentDateFontSize?: number;
  /** 第三方应用集成平台模板控件 ID 标识 */
  ChannelComponentId?: string;
  /** 指定关键字时横坐标偏移量，单位pt */
  OffsetX?: number | null;
  /** 指定关键字时纵坐标偏移量，单位pt */
  OffsetY?: number | null;
  /** 第三方应用集成中子客企业控件来源。0-平台指定；1-用户自定义 */
  ChannelComponentSource?: number;
  /** 指定关键字排序规则，Positive-正序，Reverse-倒序。传入Positive时会根据关键字在PDF文件内的顺序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的第一个关键字。传入Reverse时会根据关键字在PDF文件内的反序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的最后一个关键字。 */
  KeywordOrder?: string;
  /** 指定关键字页码。指定页码后，将只在指定的页码内查找关键字，非该页码的关键字将不会查询出来 */
  KeywordPage?: number;
  /** 关键字位置模式，Middle-居中，Below-正下方，Right-正右方，LowerRight-右上角，UpperRight-右下角。示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方 */
  RelativeLocation?: string;
  /** 关键字索引。如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。示例：[0,2]，说明使用PDF文件内第1个和第3个关键字位置。 */
  KeywordIndexes?: number[];
  /** 是否锁定控件值不允许编辑（嵌入式发起使用）默认false：不锁定控件值，允许在页面编辑控件值 */
  LockComponentValue?: boolean | null;
  /** 是否禁止移动和删除控件默认false，不禁止移动和删除控件 */
  ForbidMoveAndDelete?: boolean | null;
}

/** 创建合同个性化参数 */
declare interface CreateFlowOption {
  /** 是否允许修改发起合同时确认弹窗的合同信息（合同名称、合同类型、签署截止时间），若不允许编辑，则表单字段将被禁止输入。true：允许编辑（默认），false：不允许编辑默认：false：不允许编辑 */
  CanEditFlow?: boolean;
  /** 是否允许编辑模板控件true:允许编辑模板控件信息false:不允许编辑模板控件信息默认false:不允许编辑模板控件信息 */
  CanEditFormField?: boolean;
  /** 发起页面隐藏合同名称展示true:发起页面隐藏合同名称展示false:发起页面不隐藏合同名称展示默认false:发起页面不隐藏合同名称展示 */
  HideShowFlowName?: boolean;
  /** 发起页面隐藏合同类型展示true:发起页面隐藏合同类型展示false:发起页面不隐藏合同类型展示默认false:发起页面不隐藏合同类型展示 */
  HideShowFlowType?: boolean;
  /** 发起页面隐藏合同截止日期展示true:发起页面隐藏合同截止日期展示false:发起页面不隐藏合同截止日期展示默认false:发起页面不隐藏合同截止日期展示 */
  HideShowDeadline?: boolean;
  /** 发起页面允许跳过添加签署人环节true:发起页面允许跳过添加签署人环节false:发起页面不允许跳过添加签署人环节默认false:发起页面不允许跳过添加签署人环节 */
  CanSkipAddApprover?: boolean;
  /** 文件发起页面跳过文件上传步骤true:文件发起页面跳过文件上传步骤false:文件发起页面不跳过文件上传步骤默认false:文件发起页面不跳过文件上传步骤 */
  SkipUploadFile?: boolean;
  /** 禁止编辑填写控件true:禁止编辑填写控件false:允许编辑填写控件默认false:允许编辑填写控件 */
  ForbidEditFillComponent?: boolean;
  /** 定制化发起合同弹窗的描述信息，描述信息最长500 */
  CustomCreateFlowDescription?: string;
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
  DepartmentId?: string;
  /** 部门名称 */
  DepartmentName?: string;
}

/** 个性化参数 */
declare interface EmbedUrlOption {
  /** 合同详情预览，允许展示控件信息true：允许在合同详情页展示控件false：不允许在合同详情页展示控件默认false，合同详情页不展示控件 */
  ShowFlowDetailComponent?: boolean;
  /** 模板预览，允许展示模板控件信息true：允许在模板预览页展示控件false：不允许在模板预览页展示控件默认false，模板预览页不展示控件 */
  ShowTemplateComponent?: boolean;
}

/** 扩展服务开通和授权的详细信息 */
declare interface ExtendAuthInfo {
  /** 扩展服务的类型，可能是以下值：OPEN_SERVER_SIGN：企业静默签署OVERSEA_SIGN：企业与港澳台居民签署合同MOBILE_CHECK_APPROVER：使用手机号验证签署方身份PAGING_SEAL：骑缝章BATCH_SIGN：批量签署 */
  Type?: string;
  /** 扩展服务的名称 */
  Name?: string;
  /** 扩展服务的开通状态：ENABLE：开通DISABLE：未开通 */
  Status?: string;
  /** 操作扩展服务的操作人UserId，员工在腾讯电子签平台的唯一身份标识，为32位字符串。 */
  OperatorUserId?: string | null;
  /** 扩展服务的操作时间，格式为Unix标准时间戳（秒）。 */
  OperateOn?: number | null;
  /** 该扩展服务若可以授权，此参数对应授权人员的列表 */
  HasAuthUserList?: HasAuthUser[] | null;
}

/** 绑定角色失败信息 */
declare interface FailedCreateRoleData {
  /** 用户userId */
  UserId?: string | null;
  /** 角色id列表 */
  RoleIds?: string[] | null;
}

/** 创建员工的失败数据 */
declare interface FailedCreateStaffData {
  /** 员工名 */
  DisplayName?: string;
  /** 员工手机号 */
  Mobile?: string;
  /** 传入的企微账号id */
  WeworkOpenId?: string;
  /** 失败原因 */
  Reason?: string;
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

/** 更新员工信息失败返回的数据信息 */
declare interface FailedUpdateStaffData {
  /** 用户传入的名称 */
  DisplayName?: string;
  /** 用户传入的手机号 */
  Mobile?: string;
  /** 失败原因 */
  Reason?: string;
  /** 用户Id */
  UserId?: string;
  /** 员工在第三方平台的openId */
  OpenId?: string;
}

/** 模板中文件的信息结构 */
declare interface FileInfo {
  /** 文件ID */
  FileId?: string;
  /** 文件名 */
  FileName?: string;
  /** 文件大小，单位为Byte */
  FileSize?: number;
  /** 文件上传时间，格式为Unix标准时间戳（秒） */
  CreatedOn?: number;
}

/** 下载文件的URL信息 */
declare interface FileUrl {
  /** 下载文件的URL，有效期为输入的UrlTtl，默认5分钟 */
  Url: string;
  /** 下载文件的附加信息。如果是pdf文件，会返回pdf文件每页的有效高宽 */
  Option: string | null;
}

/** 补充签署人信息- RecipientId 必须指定- 通过企业自定义账号ID补充签署人时，ApproverSource 和 CustomUserId 必填，ApproverSource取值：WEWORKAPP- 通过二要素（姓名/手机号）补充签署人时，ApproverName 和 ApproverMobile 必填，ApproverSource设置为空 */
declare interface FillApproverInfo {
  /** 对应模板中的参与方ID */
  RecipientId: string;
  /** 签署人来源WEWORKAPP: 企业微信仅【企微或签】时指定WEWORKAPP */
  ApproverSource?: string;
  /** 企业自定义账号ID当ApproverSource为WEWORKAPP的企微或签场景下，必须指企业自有应用获取企微明文的userid */
  CustomUserId?: string;
  /** 补充签署人姓名 */
  ApproverName?: string;
  /** 补充签署人手机号 */
  ApproverMobile?: string;
}

/** 文档内的填充控件返回结构体，返回控件的基本信息和填写内容值 */
declare interface FilledComponent {
  /** 控件Id */
  ComponentId?: string | null;
  /** 控件名称 */
  ComponentName?: string | null;
  /** 控件填写状态；0-未填写；1-已填写 */
  ComponentFillStatus?: string | null;
  /** 控件填写内容 */
  ComponentValue?: string | null;
  /** 控件所属参与方Id */
  ComponentRecipientId?: string | null;
  /** 图片填充控件下载链接，如果是图片填充控件时，这里返回图片的下载链接。 */
  ImageUrl?: string | null;
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
  /** 签署时的相关信息 */
  ApproveMessage?: string | null;
  /** 签署方姓名 */
  ApproveName?: string;
  /** 签署方的签署状态0：还没有发起1：流程中 没有开始处理2：待签署3：已签署4：已拒绝5：已过期6：已撤销7：还没有预发起8：待填写9：因为各种原因而终止10：填写完成15：已解除19：转他人处理 */
  ApproveStatus?: number;
  /** 模板配置中的参与方ID,与控件绑定 */
  ReceiptId?: string;
  /** 客户自定义的用户ID */
  CustomUserId?: string | null;
  /** 签署人手机号 */
  Mobile?: string;
  /** 签署顺序，如果是有序签署，签署顺序从小到大 */
  SignOrder?: number;
  /** 签署人签署时间，时间戳，单位秒 */
  ApproveTime?: number;
  /** 签署方类型，ORGANIZATION-企业员工，PERSON-个人，ENTERPRISESERVER-企业静默签 */
  ApproveType?: string | null;
  /** 签署方侧用户来源，如WEWORKAPP-企业微信等 */
  ApproverSource?: string | null;
  /** 客户自定义签署方标识 */
  CustomApproverTag?: string | null;
  /** 签署方企业Id */
  OrganizationId?: string | null;
  /** 签署方企业名称 */
  OrganizationName?: string | null;
  /** 签署参与人在本流程中的编号ID（每个流程不同），可用此ID来定位签署参与人在本流程的签署节点，也可用于后续创建签署链接等操作。 */
  SignId?: string | null;
}

/** 签署链接信息 */
declare interface FlowApproverUrlInfo {
  /** 签署链接(短链形式呈现)。请注意保密，不要将其外泄给无关用户。注: `注意该链接有效期为30分钟` */
  SignUrl?: string | null;
  /** 签署参与人类型 **1** :个人参与方注: `现在仅支持个人参与方` */
  ApproverType?: number | null;
  /** 签署人姓名 */
  ApproverName?: string | null;
  /** 签署人手机号 */
  ApproverMobile?: string | null;
  /** 签署链接(长链形式呈现)。请注意保密，不要将其外泄给无关用户。注: `注意该链接有效期为30分钟` */
  LongUrl?: string | null;
}

/** 合同流程的基础信息 */
declare interface FlowBrief {
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
  /** 合同流程的名称。 */
  FlowName?: string;
  /** 合同流程描述信息。 */
  FlowDescription?: string | null;
  /** 合同流程的类别分类（如销售合同/入职合同等）。 */
  FlowType?: string;
  /** 合同流程当前的签署状态, 会存在下列的状态值 **0** : 未开启流程(合同中不存在填写环节) **1** : 待签署 **2** : 部分签署 **3** : 已拒签 **4** : 已签署 **5** : 已过期 **6** : 已撤销 **7** : 未开启流程(合同中存在填写环节) **8** : 等待填写 **9** : 部分填写 **10** : 已拒填 **21** : 已解除 */
  FlowStatus?: number | null;
  /** 合同流程创建时间，格式为Unix标准时间戳（秒）。 */
  CreatedOn?: number | null;
  /** 当合同流程状态为已拒签（即 FlowStatus=3）或已撤销（即 FlowStatus=6）时，此字段 FlowMessage 为拒签或撤销原因。 */
  FlowMessage?: string | null;
  /** 合同流程发起方的员工编号, 即员工在腾讯电子签平台的唯一身份标识。 */
  Creator?: string | null;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒）。 */
  Deadline?: number | null;
}

/** 创建流程的签署方信息 */
declare interface FlowCreateApprover {
  /** 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下:0：企业1：个人3：企业静默签署注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。7: 个人自动签署，适用于个人自动签场景。注: 个人自动签场景为白名单功能，使用前请联系对接的客户经理沟通。 */
  ApproverType: number;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。注: `当approverType=0(企业签署方) 或 approverType=3(企业静默签署)时，必须指定` */
  OrganizationName?: string;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。在未指定签署人电子签UserId情况下，为必填参数 */
  ApproverName?: string;
  /** 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。请确认手机号所有方为此合同签署方。在未指定签署人电子签UserId情况下，为必填参数 */
  ApproverMobile?: string;
  /** 证件类型，支持以下类型ID_CARD : 居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  ApproverIdCardType?: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  ApproverIdCardNumber?: string;
  /** 签署方经办人在模板中的参与方ID模板发起合同时，该参数为必填项文件发起合同是，该参数无序传值 */
  RecipientId?: string;
  /** 签署意愿确认渠道，默认为WEIXINAPP:人脸识别注: 将要废弃, 用ApproverSignTypes签署人签署合同时的认证方式代替, 新客户可请用ApproverSignTypes来设置 */
  VerifyChannel?: string[];
  /** 通知签署方经办人的方式, 有以下途径: **sms** : (默认)短信 **none** : 不通知注: `发起方也是签署方时不给此签署方发送短信` */
  NotifyType?: string;
  /** 合同强制需要阅读全文，无需传此参数 */
  IsFullText?: boolean;
  /** 合同的强制预览时间：3~300s，未指定则按合同页数计算 */
  PreReadTime?: number;
  /** 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得注: `若传此字段 则以userid的信息为主，会覆盖传递过来的签署人基本信息， 包括姓名，手机号，证件类型等信息` */
  UserId?: string;
  /** 字段已经废弃，当前只支持true，默认为true */
  Required?: boolean;
  /** 在企微场景下使用，需设置参数为**WEWORKAPP**，以表明合同来源于企微。 */
  ApproverSource?: string;
  /** 在企业微信场景下，表明该合同流程为或签，其最大长度为64位字符串。所有参与或签的人员均需具备该标识。注意，在合同中，不同的或签参与人必须保证其CustomApproverTag唯一。如果或签签署人为本方企业微信参与人，则需要指定ApproverSource参数为WEWORKAPP。 */
  CustomApproverTag?: string;
  /** 已经废弃, 快速注册相关信息 */
  RegisterInfo?: RegisterInfo;
  /** 签署人个性化能力值，如是否可以转发他人处理、是否可以拒签等功能开关。 */
  ApproverOption?: ApproverOption;
  /** 签署完前端跳转的url，暂未使用 */
  JumpUrl?: string;
  /** 签署ID- 发起流程时系统自动补充- 创建签署链接时，可以通过查询详情接口获得签署人的SignId，然后可传入此值为该签署人创建签署链接，无需再传姓名、手机号、证件号等其他信息 */
  SignId?: string;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：**false**：（默认）不需要审批，直接签署。**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  ApproverNeedSignReview?: boolean;
  /** 签署人签署控件， 此参数仅针对文件发起（CreateFlowByFiles）生效合同中的签署控件列表，列表中可支持下列多种签署控件,控件的详细定义参考开发者中心的Component结构体 个人签名/印章 企业印章 骑缝章等签署控件`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主` */
  SignComponents?: Component[];
  /** 签署人填写控件 此参数仅针对文件发起（CreateFlowByFiles）生效合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体单行文本控件多行文本控件勾选框控件数字控件图片控件动态表格等填写控件`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主` */
  Components?: Component[];
  /** 签署方控件类型为 SIGN_SIGNATURE时，可以指定签署方签名方式	HANDWRITE – 手写签名	OCR_ESIGN -- AI智能识别手写签名	ESIGN -- 个人印章类型	SYSTEM_ESIGN -- 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署） */
  ComponentLimitType?: string[];
  /** 指定个人签署方查看合同的校验方式,可以传值如下: **1** : （默认）人脸识别,人脸识别后才能合同内容 **2** : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）注: 如果合同流程设置ApproverVerifyType查看合同的校验方式, 则忽略此签署人的查看合同的校验方式此字段不可传多个校验方式`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主`. */
  ApproverVerifyTypes?: number[];
  /** 您可以指定签署方签署合同的认证校验方式，可传递以下值：**1**：人脸认证，需进行人脸识别成功后才能签署合同；**2**：签署密码，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署；**3**：运营商三要素，需到运营商处比对手机号实名信息（名字、手机号、证件号）校验一致才能成功进行合同签署。注：默认情况下，认证校验方式为人脸认证和签署密码两种形式；您可以传递多种值，表示可用多种认证校验方式。注:`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主` */
  ApproverSignTypes?: number[];
}

/** 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息 */
declare interface FlowDetailInfo {
  /** 合同(流程)的ID */
  FlowId?: string;
  /** 合同(流程)的名字 */
  FlowName?: string;
  /** 合同(流程)的类型 */
  FlowType?: string | null;
  /** 流程状态- 0 还没有发起- 1 待签署- 2 部分签署- 3 已拒签- 4 已签署- 5 已过期- 6 已撤销- 7 还没有预发起- 8 等待填写- 9 部分填写- 10 拒填- 21 已解除 */
  FlowStatus?: number;
  /** 合同(流程)的信息 */
  FlowMessage?: string | null;
  /** 流程的描述 */
  FlowDescription?: string | null;
  /** 合同(流程)的创建时间戳，单位秒 */
  CreatedOn?: number;
  /** 合同(流程)的签署方数组 */
  FlowApproverInfos?: FlowApproverDetail[];
  /** 合同(流程)的关注方信息列表 */
  CcInfos?: FlowApproverDetail[];
  /** 合同发起人UserId */
  Creator?: string | null;
}

/** 此结构体(FlowGroupInfo)描述的是合同组(流程组)的单个合同(流程)信息 */
declare interface FlowGroupInfo {
  /** 合同（流程）的名称 */
  FlowName: string;
  /** 合同（流程）的签署方信息 */
  Approvers: ApproverInfo[];
  /** 发起合同（流程）的资源Id,此资源必须是PDF文件,来自UploadFiles,使用文件发起合同(流程)组时必传 */
  FileIds?: string[];
  /** 发起合同（流程）的模板Id,用模板发起合同（流程）组时必填 */
  TemplateId?: string;
  /** 合同（流程）的类型 */
  FlowType?: string;
  /** 合同（流程）的描述 */
  FlowDescription?: string;
  /** 合同（流程）的截止时间戳，单位秒。默认是一年 */
  Deadline?: number;
  /** 合同（流程）的回调地址 */
  CallbackUrl?: string;
  /** 第三方平台传递过来的信息, 限制1024字符 格式必须是base64的 */
  UserData?: string;
  /** 合同（流程）的签署是否是无序签, true - 无序。 false - 有序, 默认 */
  Unordered?: boolean;
  /** 合同（流程）发起方的填写控件, 由发起方进行在发起时进行填充 */
  Components?: Component[];
  /** 本企业（发起方）是否需要签署审批，若需要审批则只允许查看不允许签署，需要您调用接口CreateFlowSignReview提交审批结果。 */
  NeedSignReview?: boolean;
  /** 本企业（发起方）自动签署，需要您在发起合同时给印章控件指定自动签的印章。 */
  AutoSignScene?: string;
}

/** 此结构体(FlowGroupOptions)描述的是合同组的个性化配置，支持控制是否发送短信、未实名个人签署方查看合同组时是否需要实名认证（仅在合同组文件发起配置时生效） */
declare interface FlowGroupOptions {
  /** 发起合同（流程）组的合同（流程）签署人校验方式VerifyCheck: 人脸识别（默认）MobileCheck：手机号验证参数说明：此参数仅在合同组文件发起有效，可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。 */
  ApproverVerifyType?: string;
  /** 发起合同（流程）组本方企业经办人通知方式签署通知类型：sms--短信，none--不通知 */
  SelfOrganizationApproverNotifyType?: string;
  /** 发起合同（流程）组他方经办人通知方式签署通知类型：sms--短信，none--不通知 */
  OtherApproverNotifyType?: string;
}

/** 电子文档的控件填充信息。按照控件类型进行相应的填充。当控件的 ComponentType='TEXT'时，FormField.ComponentValue填入文本内容```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "文本内容"}```当控件的 ComponentType='MULTI_LINE_TEXT'时，FormField.ComponentValue填入文本内容，支持自动换行。```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "多行文本内容"}```当控件的 ComponentType='CHECK_BOX'时，FormField.ComponentValue填入true或false文本```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "true"}```当控件的 ComponentType='FILL_IMAGE'时，FormField.ComponentValue填入图片的资源ID```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxxx"}```当控件的 ComponentType='ATTACHMENT'时，FormField.ComponentValue填入附件图片的资源ID列表，以逗号分隔，单个附件控件最多支持6个资源ID；```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx1,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx2,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx3"}```当控件的 ComponentType='SELECTOR'时，FormField.ComponentValue填入选择的选项内容；```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "选择的内容"}```当控件的 ComponentType='DATE'时，FormField.ComponentValue填入日期内容；```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "2023年01月01日"}```当控件的 ComponentType='DISTRICT'时，FormField.ComponentValue填入省市区内容；```FormFiled输入示例：{ "ComponentId": "componentId1", "ComponentValue": "广东省深圳市福田区"}```【数据表格传参说明】当控件的 ComponentType='DYNAMIC_TABLE'时，FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）输入示例1：```{ "headers":[ { "content":"head1" }, { "content":"head2" }, { "content":"head3" } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```输入示例2（表格表头宽度比例配置）：```{ "headers":[ { "content":"head1", "widthPercent": 30 }, { "content":"head2", "widthPercent": 30 }, { "content":"head3", "widthPercent": 40 } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```表格参数说明| 名称 | 类型 | 描述 || ------------------- | ------- | ------------------------------------------------- || headers | Array | 表头：不超过10列，不支持单元格合并，字数不超过100 || rowCount | Integer | 表格内容最大行数 || cells.N.rowStart | Integer | 单元格坐标：行起始index || cells.N.rowEnd | Integer | 单元格坐标：行结束index || cells.N.columnStart | Integer | 单元格坐标：列起始index || cells.N.columnEnd | Integer | 单元格坐标：列结束index || cells.N.content | String | 单元格内容，字数不超过100 |表格参数headers说明widthPercent Integer 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35content String 表头单元格内容，字数不超过100 */
declare interface FormField {
  /** 控件填充vaule，ComponentType和传入值类型对应关系：TEXT - 文本内容MULTI_LINE_TEXT - 文本内容CHECK_BOX - true/falseFILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取SELECTOR - 选项值DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525 */
  ComponentValue: string;
  /** 控件id，和ComponentName选择一项传入即可 */
  ComponentId?: string;
  /** 控件名字，最大长度不超过30字符，和ComponentId选择一项传入即可 */
  ComponentName?: string;
}

/** 成员企业信息 */
declare interface GroupOrganization {
  /** 成员企业名 */
  Name?: string | null;
  /** 成员企业别名 */
  Alias?: string | null;
  /** 成员企业id */
  OrganizationId?: string | null;
  /** 更新时间，时间戳，单位秒 */
  UpdateTime?: number | null;
  /** 成员企业加入集团的当前状态:1-待授权;2-已授权待激活;3-拒绝授权;4-已解除;5-已加入 */
  Status?: number | null;
  /** 是否为集团主企业 */
  IsMainOrganization?: boolean | null;
  /** 企业社会信用代码 */
  IdCardNumber?: string | null;
  /** 企业超管信息 */
  AdminInfo?: Admin | null;
  /** 企业许可证 */
  License?: string | null;
  /** 企业许可证过期时间，时间戳，单位秒 */
  LicenseExpireTime?: number | null;
  /** 成员企业加入集团时间，时间戳，单位秒 */
  JoinTime?: number | null;
  /** 是否使用自建审批流引擎（即不是企微审批流引擎），true-是，false-否 */
  FlowEngineEnable?: boolean | null;
}

/** 被授权的用户信息 */
declare interface HasAuthUser {
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。 */
  UserId?: string | null;
  /** 当前员工的归属情况，可能值是：MainOrg：在集团企业的场景下，返回此值代表是归属主企业CurrentOrg：在普通企业场景下返回此值；或者在集团企业的场景下，返回此值代表归属子企业 */
  BelongTo?: string | null;
}

/** 企业角色数据信息 */
declare interface IntegrateRole {
  /** 角色id */
  RoleId?: string | null;
  /** 角色名 */
  RoleName?: string | null;
  /** 角色状态，1-启用，2-禁用 */
  RoleStatus?: number | null;
  /** 是否是集团角色，true-是，false-否 */
  IsGroupRole?: boolean | null;
  /** 管辖的子企业列表 */
  SubOrgIdList?: string[] | null;
  /** 权限树 */
  PermissionGroups?: PermissionGroup[] | null;
}

/** 部门信息 */
declare interface IntegrationDepartment {
  /** 部门ID */
  DeptId?: string | null;
  /** 部门名 */
  DeptName?: string | null;
  /** 父部门ID */
  ParentDeptId?: string | null;
  /** 客户系统部门ID */
  DeptOpenId?: string | null;
  /** 序列号 */
  OrderNo?: number | null;
}

/** 主企业员工账号信息 */
declare interface IntegrationMainOrganizationUser {
  /** 主企业id */
  MainOrganizationId?: string | null;
  /** 主企业员工UserId */
  MainUserId?: string | null;
  /** 主企业员工名 */
  UserName?: string | null;
}

/** 持有的电子印章信息 */
declare interface OccupiedSeal {
  /** 电子印章编号 */
  SealId: string;
  /** 电子印章名称 */
  SealName: string;
  /** 电子印章授权时间戳，单位秒 */
  CreateOn: number;
  /** 电子印章授权人的UserId */
  Creator: string;
  /** 电子印章策略Id */
  SealPolicyId: string;
  /** 印章状态，有以下六种：CHECKING（审核中）SUCCESS（已启用）FAIL（审核拒绝）CHECKING-SADM（待超管审核）DISABLE（已停用）STOPPED（已终止） */
  SealStatus: string;
  /** 审核失败原因 */
  FailReason: string | null;
  /** 印章图片url，5分钟内有效 */
  Url: string;
  /** 印章类型,OFFICIAL-企业公章, CONTRACT-合同专用章,ORGANIZATIONSEAL-企业印章(本地上传印章类型),LEGAL_PERSON_SEAL-法人印章 */
  SealType: string;
  /** 用印申请是否为永久授权，true-是，false-否 */
  IsAllTime: boolean;
  /** 授权人列表 */
  AuthorizedUsers: AuthorizedUser[] | null;
}

/** 机构信息 */
declare interface OrganizationInfo {
  /** 机构在平台的编号，内部字段，暂未开放 */
  OrganizationId?: string;
  /** 用户渠道，内部字段，暂未开放 */
  Channel?: string;
  /** 用户在渠道的机构编号，内部字段，暂未开放 */
  OrganizationOpenId?: string;
  /** 用户真实的IP，内部字段，暂未开放 */
  ClientIp?: string;
  /** 机构的代理IP，内部字段，暂未开放 */
  ProxyIp?: string;
}

/** 合同文件验签单个结果结构体 */
declare interface PdfVerifyResult {
  /** 验签结果。0-签名域未签名；1-验签成功； 3-验签失败；4-未找到签名域：文件内没有签名域；5-签名值格式不正确。 */
  VerifyResult?: number;
  /** 签署平台，如果文件是在腾讯电子签平台签署，则返回腾讯电子签，如果文件不在腾讯电子签平台签署，则返回其他平台。 */
  SignPlatform?: string;
  /** 签署人名称 */
  SignerName?: string;
  /** 签署时间戳，单位秒 */
  SignTime?: number;
  /** 签名算法 */
  SignAlgorithm?: string;
  /** 签名证书序列号 */
  CertSn?: string;
  /** 证书起始时间戳，单位毫秒 */
  CertNotBefore?: number;
  /** 证书过期时间戳，单位毫秒 */
  CertNotAfter?: number;
  /** 签名域横坐标，单位pt */
  ComponentPosX?: number;
  /** 签名域纵坐标，单位pt */
  ComponentPosY?: number;
  /** 签名域宽度，单位pt */
  ComponentWidth?: number;
  /** 签名域高度，单位pt */
  ComponentHeight?: number;
  /** 签名域所在页码，1～N */
  ComponentPage?: number;
}

/** 权限树节点权限 */
declare interface Permission {
  /** 权限名称 */
  Name?: string | null;
  /** 权限key */
  Key?: string | null;
  /** 权限类型 1前端，2后端 */
  Type?: number | null;
  /** 是否隐藏 */
  Hide?: number | null;
  /** 数据权限标签 1:表示根节点，2:表示叶子结点 */
  DataLabel?: number | null;
  /** 数据权限独有，1:关联其他模块鉴权，2:表示关联自己模块鉴权 */
  DataType?: number | null;
  /** 数据权限独有，表示数据范围，1：全公司，2:部门及下级部门，3:自己 */
  DataRange?: number | null;
  /** 关联权限, 表示这个功能权限要受哪个数据权限管控 */
  DataTo?: string | null;
  /** 父级权限key */
  ParentKey?: string | null;
  /** 是否选中 */
  IsChecked?: boolean | null;
  /** 子权限集合 */
  Children?: Permission[] | null;
}

/** 权限树中的权限组 */
declare interface PermissionGroup {
  /** 权限组名称 */
  GroupName?: string | null;
  /** 权限组key */
  GroupKey?: string | null;
  /** 是否隐藏分组，0否1是 */
  Hide?: number | null;
  /** 权限集合 */
  Permissions?: Permission[] | null;
}

/** 流程中参与方的信息结构 */
declare interface Recipient {
  /** 签署参与者ID，唯一标识 */
  RecipientId?: string;
  /** 参与者类型。默认为空。ENTERPRISE-企业；INDIVIDUAL-个人；PROMOTER-发起方 */
  RecipientType?: string;
  /** 描述信息 */
  Description?: string;
  /** 角色名称 */
  RoleName?: string;
  /** 是否需要验证，默认为false-不需要验证 */
  RequireValidation?: boolean;
  /** 是否需要签署，默认为true-需要签署 */
  RequireSign?: boolean;
  /** 此参与方添加的顺序，从0～N */
  RoutingOrder?: number;
  /** 是否需要发送，默认为true-需要发送 */
  RequireDelivery?: boolean;
  /** 邮箱地址 */
  Email?: string;
  /** 电话号码 */
  Mobile?: string;
  /** 关联的用户ID，电子签系统的用户ID */
  UserId?: string;
  /** 发送方式，默认为EMAIL。EMAIL-邮件；MOBILE-手机短信；WECHAT-微信通知 */
  DeliveryMethod?: string;
  /** 参与方的一些附属信息，json格式 */
  RecipientExtra?: string;
}

/** 参与方填写控件信息 */
declare interface RecipientComponentInfo {
  /** 参与方Id */
  RecipientId?: string | null;
  /** 参与方填写状态0-未填写1-已填写 */
  RecipientFillStatus?: string | null;
  /** 是否为发起方 */
  IsPromoter?: boolean | null;
  /** 填写控件列表 */
  Components?: FilledComponent[] | null;
}

/** 发起流程快速注册相关信息 */
declare interface RegisterInfo {
  /** 法人姓名 */
  LegalName: string;
  /** 社会统一信用代码 */
  Uscc?: string;
  /** 社会统一信用代码 */
  UnifiedSocialCreditCode?: string;
}

/** 解除协议的签署人，如不指定，默认使用原流程中的签署人。`注意：不支持更换C端（个人身份类型）签署人，如果原流程中含有C端签署人，默认使用原流程中的该C端签署人。``注意：目前不支持替换C端（个人身份类型）签署人，但是可以指定C端签署人的签署方自定义控件别名，具体见参数ApproverSignRole描述。``注意：当指定C端签署人的签署方自定义控件别名不空时，除RelievedApproverReceiptId参数外，可以只参数ApproverSignRole。` */
declare interface ReleasedApprover {
  /** 签署人姓名，最大长度50个字。 */
  Name: string;
  /** 签署人手机号。 */
  Mobile: string;
  /** 要更换的原合同参与人RecipientId编号。(可通过接口DescribeFlowInfo查询签署人的RecipientId编号) */
  RelievedApproverReceiptId: string;
  /** 指定签署人类型，目前仅支持 **ORGANIZATION**：企业（默认值） **ENTERPRISESERVER**：企业静默签 */
  ApproverType?: string;
  /** 签署控件类型，支持自定义企业签署方的签署控件类型 **SIGN_SEAL**：默认为印章控件类型（默认值） **SIGN_SIGNATURE**：手写签名控件类型 */
  ApproverSignComponentType?: string;
  /** 参与方在合同中的角色是按照创建合同的时候来排序的; 解除协议默认会将第一个参与人叫甲方, 第二个叫乙方,第三个叫丙方，以此类推。如果您需要改动参与人的角色名字, 可以设置此签署方自定义控件别名字段，最大20个字。 */
  ApproverSignRole?: string;
}

/** 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。 */
declare interface RelieveInfo {
  /** 解除理由，最大支持200个字 */
  Reason: string | null;
  /** 解除后仍然有效的条款，保留条款，最大支持200个字 */
  RemainInForceItem?: string | null;
  /** 原合同事项处理-费用结算，最大支持200个字 */
  OriginalExpenseSettlement?: string | null;
  /** 原合同事项处理-其他事项，最大支持200个字 */
  OriginalOtherSettlement?: string | null;
  /** 其他约定，最大支持200个字 */
  OtherDeals?: string | null;
}

/** 催办接口返回的详细信息。 */
declare interface RemindFlowRecords {
  /** 合同流程是否可以催办：true - 可以，false - 不可以。若无法催办，将返回RemindMessage以解释原因。 */
  CanRemind?: boolean;
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
  /** 在合同流程无法催办的情况下，系统将返回RemindMessage以阐述原因。 */
  RemindMessage?: string;
}

/** 关注方信息 */
declare interface ReviewerInfo {
  /** 姓名 */
  Name?: string;
  /** 手机号 */
  Mobile?: string;
}

/** 模板中指定的印章信息 */
declare interface SealInfo {
  /** 印章ID */
  SealId?: string | null;
  /** 印章类型。LEGAL_PERSON_SEAL: 法定代表人章；ORGANIZATIONSEAL：企业印章；OFFICIAL：企业公章；CONTRACT：合同专用章 */
  SealType?: string | null;
  /** 印章名称 */
  SealName?: string | null;
}

/** 签署二维码的基本信息，用于创建二维码，用户可扫描该二维码进行签署操作。 */
declare interface SignQrCode {
  /** 二维码ID，为32位字符串。 */
  QrCodeId?: string;
  /** 二维码URL，可通过转换二维码的工具或代码组件将此URL转化为二维码，以便用户扫描进行流程签署。 */
  QrCodeUrl?: string;
  /** 二维码的有截止时间，格式为Unix标准时间戳（秒）。一旦超过二维码的有效期限，该二维码将自动失效。 */
  ExpiredTime?: number;
}

/** 流程签署二维码的签署信息，适用于客户系统整合二维码功能。通过链接，用户可直接访问电子签名小程序并签署合同。 */
declare interface SignUrl {
  /** 跳转至电子签名小程序签署的链接地址。适用于客户端APP及小程序直接唤起电子签名小程序。 */
  AppSignUrl?: string;
  /** 签署链接有效时间，格式类似"2022-08-05 15:55:01" */
  EffectiveTime?: string;
  /** 跳转至电子签名小程序签署的链接地址，格式类似于https://essurl.cn/xxx。打开此链接将会展示H5中间页面，随后唤起电子签名小程序以进行合同签署。 */
  HttpSignUrl?: string;
}

/** 企业员工信息 */
declare interface Staff {
  /** 用户在电子签平台的id注：创建和更新场景无需填写 */
  UserId?: string;
  /** 显示的用户名/昵称 */
  DisplayName?: string;
  /** 用户手机号 */
  Mobile?: string;
  /** 用户邮箱 */
  Email?: string | null;
  /** 用户在第三方平台id，如需在此接口提醒员工实名，该参数不传 */
  OpenId?: string | null;
  /** 员工角色注：创建和更新场景无需填写 */
  Roles?: StaffRole[] | null;
  /** 员工部门 */
  Department?: Department | null;
  /** 员工是否实名注：创建和更新场景无需填写 */
  Verified?: boolean;
  /** 员工创建时间戳，单位秒注：创建和更新场景无需填写 */
  CreatedOn?: number;
  /** 员工实名时间戳，单位秒注：创建和更新场景无需填写 */
  VerifiedOn?: number | null;
  /** 员工是否离职：0-未离职，1-离职注：创建和更新场景无需填写 */
  QuiteJob?: number | null;
  /** 员工离职交接人用户id注：创建和更新场景无需填写 */
  ReceiveUserId?: string;
  /** 员工离职交接人用户OpenId注：创建和更新场景无需填写 */
  ReceiveOpenId?: string;
  /** 企业微信用户账号ID注：仅企微类型的企业创建员工接口支持该字段 */
  WeworkOpenId?: string | null;
}

/** 集成版企业角色信息 */
declare interface StaffRole {
  /** 角色id */
  RoleId?: string | null;
  /** 角色名称 */
  RoleName?: string | null;
}

/** 创建员工的成功数据 */
declare interface SuccessCreateStaffData {
  /** 员工名 */
  DisplayName?: string;
  /** 员工手机号 */
  Mobile?: string;
  /** 员工在电子签平台的id */
  UserId?: string;
  /** 提示，当创建已存在未实名用户时，该字段有值 */
  Note?: string | null;
  /** 传入的企微账号id */
  WeworkOpenId?: string;
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

/** 更新员工信息成功返回的数据信息 */
declare interface SuccessUpdateStaffData {
  /** 传入的用户名称 */
  DisplayName?: string;
  /** 传入的手机号 */
  Mobile?: string;
  /** 用户Id */
  UserId?: string;
}

/** 此结构体 (TemplateInfo) 用于描述模板的信息。> **模板组成** >> 一个模板通常会包含以下结构信息>- 模板基本信息>- 发起方参与信息Promoter、签署参与方 Recipients，后者会在模板发起合同时用于指定参与方>- 填写控件 Components>- 签署控件 SignComponents>- 生成模板的文件基础信息 FileInfos */
declare interface TemplateInfo {
  /** 模板ID，模板的唯一标识 */
  TemplateId?: string;
  /** 模板名 */
  TemplateName?: string;
  /** 模板描述信息 */
  Description?: string;
  /** 模板关联的资源ID列表 */
  DocumentResourceIds?: string[];
  /** 生成模板的文件基础信息 */
  FileInfos?: FileInfo[];
  /** 附件关联的资源ID */
  AttachmentResourceIds?: string[];
  /** 签署顺序无序 -1有序为序列数字 0,1,2 */
  SignOrder?: number[];
  /** 模板中的签署参与方列表 */
  Recipients?: Recipient[];
  /** 模板的填充控件列表 */
  Components?: Component[];
  /** 模板中的签署控件列表 */
  SignComponents?: Component[];
  /** 模板状态-1:不可用0:草稿态1:正式态，可以正常使用 */
  Status?: number;
  /** 模板的创建者信息，电子签系统用户ID */
  Creator?: string;
  /** 模板创建的时间戳，格式为Unix标准时间戳（秒） */
  CreatedOn?: number;
  /** 发起方参与信息Promoter */
  Promoter?: Recipient;
  /** 模板类型：1 静默签,3 普通模板 */
  TemplateType?: number;
  /** 模板可用状态：1 启用（默认）2 停用 */
  Available?: number;
  /** 创建模板的企业ID，电子签的机构ID */
  OrganizationId?: string;
  /** 模板预览链接，有效时间5分钟 */
  PreviewUrl?: string | null;
  /** 模板版本。默认为空时，全数字字符，初始版本为yyyyMMdd001。 */
  TemplateVersion?: string | null;
  /** 模板是否已发布：true-已发布false-未发布 */
  Published?: boolean | null;
  /** 模板内部指定的印章列表 */
  TemplateSeals?: SealInfo[] | null;
  /** 模板内部指定的印章列表 */
  Seals?: SealInfo[] | null;
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
  /** 用户的来源渠道，一般不用传，特定场景根据接口说明传值 */
  Channel?: string;
  /** 用户在渠道的编号，一般不用传，特定场景根据接口说明传值 */
  OpenId?: string;
  /** 用户真实IP，内部字段，暂未开放 */
  ClientIp?: string;
  /** 用户代理IP，内部字段，暂未开放 */
  ProxyIp?: string;
}

/** 用户的三要素：姓名，证件号，证件类型 */
declare interface UserThreeFactor {
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  Name: string;
  /** 证件类型，支持以下类型ID_CARD : 居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  IdCardType: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
}

/** 页面主题配置 */
declare interface WebThemeConfig {
  /** 是否页面底部显示电子签logotrue：允许在页面底部隐藏电子签logofalse：不允许允许在页面底部隐藏电子签logo默认false，不隐藏logo */
  DisplaySignBrandLogo?: boolean;
  /** 主题颜色支持十六进制颜色值以及RGB格式颜色值，例如：#D54941，rgb(213, 73, 65) */
  WebEmbedThemeColor?: string;
}

declare interface BindEmployeeUserIdWithClientOpenIdRequest {
  /** 用户信息，OpenId与UserId二选一必填一个，OpenId是第三方客户ID，userId是用户实名后的电子签生成的ID,当传入客户系统openId，传入的openId需与电子签员工userId绑定，且参数Channel必填，Channel值为INTEGRATE；当传入参数UserId，Channel无需指定。（参数参考示例） */
  Operator: UserInfo;
  /** 电子签系统员工UserId */
  UserId: string;
  /** 客户系统OpenId */
  OpenId: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface BindEmployeeUserIdWithClientOpenIdResponse {
  /** 绑定是否成功，1表示成功，0表示失败 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelFlowRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID, 为32位字符串。建议开发者保存此流程ID方便后续其他操作。 */
  FlowId: string;
  /** 撤销此合同(流程)的原因，最长200个字。 */
  CancelMessage: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CancelFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelMultiFlowSignQRCodeRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 二维码ID，为32位字符串。 */
  QrCodeId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CancelMultiFlowSignQRCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelUserAutoSignEnableUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景注: `现在仅支持电子处方场景` */
  SceneKey: string;
  /** 预撤销链接的用户信息，包含姓名、证件类型、证件号码等信息。 */
  UserInfo: UserThreeFactor;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CancelUserAutoSignEnableUrlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchCancelFlowUrlRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 需要执行撤回的流程(合同)的编号列表，最多100个.列表中的流程(合同)编号不要重复. */
  FlowIds: string[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface CreateBatchCancelFlowUrlResponse {
  /** 批量撤回签署流程链接 */
  BatchCancelFlowUrl?: string;
  /** 签署流程撤回失败信息数组里边的错误原因与传进来的FlowIds一一对应,如果是空字符串则标识没有出错 */
  FailMessages?: string[];
  /** 签署连接过期时间字符串：年月日-时分秒例如:2023-07-28 17:25:59 */
  UrlExpireOn?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChannelSubOrganizationModifyQrCodeRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 应用编号 */
  ApplicationId: string;
}

declare interface CreateChannelSubOrganizationModifyQrCodeResponse {
  /** 二维码下载链接 */
  QrCodeUrl?: string;
  /** 二维码失效时间 UNIX 时间戳 精确到秒 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConvertTaskApiRequest {
  /** 需要进行转换的资源文件类型支持的文件类型如下：docdocxxlsxlsxjpgjpegpngbmptxt */
  ResourceType: string;
  /** 需要进行转换操作的文件资源名称，带资源后缀名。注: `资源名称长度限制为256个字符` */
  ResourceName: string;
  /** 需要进行转换操作的文件资源Id，通过UploadFiles接口获取文件资源Id。注: `目前，此接口仅支持单个文件进行转换。` */
  ResourceId: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface CreateConvertTaskApiResponse {
  /** 接口返回的文件转换任务Id，可以调用接口查询转换任务状态获取转换任务的状态和转换后的文件资源Id。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDocumentRequest {
  /** 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。 */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。此接口的合同流程ID需要由创建签署流程接口创建得到。 */
  FlowId: string;
  /** 用户配置的合同模板ID，会基于此模板创建合同文档，为32位字符串。可登录腾讯电子签控制台，在 "模板"->"模板中心"->"列表展示设置"选中模板 ID 中查看某个模板的TemplateId(在页面中展示为模板ID)。 */
  TemplateId: string;
  /** 文件名列表，单个文件名最大长度200个字符，暂时仅支持单文件发起。设置后流程对应的文件名称当前设置的值。 */
  FileNames?: string[];
  /** 电子文档的填写控件的填充内容。具体方式可以参考FormField结构体的定义。 */
  FormFields?: FormField[];
  /** 是否为预览模式，取值如下： **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。 **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。 */
  NeedPreview?: boolean;
  /** 预览模式下产生的预览链接类型 **0** :(默认) 文件流 ,点开后后下载预览的合同PDF文件 **1** :H5链接 ,点开后在浏览器中展示合同的样子注: `此参数在NeedPreview 为true时有效` */
  PreviewType?: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 已废弃字段，客户端Token，保持接口幂等性,最大长度64个字符 */
  ClientToken?: string;
}

declare interface CreateDocumentResponse {
  /** 合同流程的底层电子文档ID，为32位字符串。注:后续需用同样的FlowId再次调用发起签署流程，合同才能进入签署环节 */
  DocumentId?: string;
  /** 合同预览链接URL。注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL */
  PreviewFileUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmbedWebUrlRequest {
  /** 操作者信息 */
  Operator: UserInfo;
  /** WEB嵌入资源类型。CREATE_SEAL: 生成创建印章的嵌入页面CREATE_TEMPLATE：生成创建模板的嵌入页面MODIFY_TEMPLATE：生成编辑模板的嵌入页面PREVIEW_TEMPLATE：生成预览模板的嵌入页面PREVIEW_SEAL_LIST：生成预览印章列表的嵌入页面PREVIEW_SEAL_DETAIL：生成预览印章详情的嵌入页面EXTEND_SERVICE：生成拓展服务的嵌入页面PREVIEW_FLOW：生成预览合同的嵌入页面PREVIEW_FLOW_DETAIL：生成查看合同详情的嵌入页面 */
  EmbedType: string;
  /** WEB嵌入的业务资源IDPREVIEW_SEAL_DETAIL，必填，取值为印章idMODIFY_TEMPLATE，PREVIEW_TEMPLATE，必填，取值为模板idPREVIEW_FLOW，PREVIEW_FLOW_DETAIL，必填，取值为合同id */
  BusinessId?: string;
  /** 代理相关应用信息，如集团主企业代子企业操作 */
  Agent?: Agent;
  /** 抄送方信息 */
  Reviewer?: ReviewerInfo;
  /** 个性化参数 */
  Option?: EmbedUrlOption;
}

declare interface CreateEmbedWebUrlResponse {
  /** 嵌入的web链接，有效期：5分钟EmbedType=PREVIEW_CC_FLOW，该url为h5链接 */
  WebUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowApproversRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 签署流程编号 */
  FlowId: string;
  /** 补充签署人信息 */
  Approvers: FillApproverInfo[];
  /** 企微消息中的发起人 */
  Initiator?: string;
  /** 代理相关应用信息，如集团主企业代子企业操作 */
  Agent?: Agent;
}

declare interface CreateFlowApproversResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowByFilesRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。支持填入集团子公司经办人 userId 代发合同。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。该名称还将用于合同签署完成后的下载文件名。 */
  FlowName: string;
  /** 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序，请确保列表中参与人的顺序符合实际签署顺序。 */
  Approvers: ApproverInfo[];
  /** 本合同流程需包含的PDF文件资源编号列表，通过UploadFiles接口获取PDF文件资源编号。注: `目前，此接口仅支持单个文件发起。` */
  FileIds: string[];
  /** 合同流程描述信息(可自定义此描述)，最大长度1000个字符。 */
  FlowDescription?: string;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。 */
  FlowType?: string;
  /** 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体 单行文本控件 多行文本控件 勾选框控件 数字控件 图片控件 动态表格等填写控件 */
  Components?: Component[];
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。注:`此功能为白名单功能，使用前请联系对接的客户经理沟通。` */
  CcInfos?: CcInfo[];
  /** 可以设置以下时间节点来给抄送人发送短信通知来查看合同内容： **0**：合同发起时通知（默认值） **1**：签署完成后通知 */
  CcNotifyType?: number;
  /** 是否为预览模式，取值如下： **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。 **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。 */
  NeedPreview?: boolean;
  /** 预览模式下产生的预览链接类型 **0** :(默认) 文件流 ,点开后后下载预览的合同PDF文件 **1** :H5链接 ,点开后在浏览器中展示合同的样子注: `此参数在NeedPreview 为true时有效` */
  PreviewType?: number;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。 */
  Deadline?: number;
  /** 合同到期提醒时间，为Unix标准时间戳（秒）格式，支持的范围是从发起时间开始到后10年内。到达提醒时间后，腾讯电子签会短信通知发起方企业合同提醒，可用于处理合同到期事务，如合同续签等事宜。 */
  RemindedOn?: number;
  /** 合同流程的签署顺序类型： **false**：(默认)有序签署, 本合同多个参与人需要依次签署 **true**：无序签署, 本合同多个参与人没有先后签署限制 */
  Unordered?: boolean;
  /** 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：{合同名称} {发起方企业} {发起方姓名} {签署方N企业}{签署方N姓名}其中，N表示签署方的编号，从1开始，不能超过签署人的数量。例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子合同名称：租房合同 发起方：腾讯公司(张三) 签署方：李四 */
  CustomShowMap?: string;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
  /** 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
  /** 指定个人签署方查看合同的校验方式 **VerifyCheck** :（默认）人脸识别,人脸识别后才能合同内容 **MobileCheck** : 手机号验证, 用户手机号和参与方手机号（ApproverMobile）相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证） */
  ApproverVerifyType?: string;
  /** 签署方签署控件（印章/签名等）的生成方式： **0**：在合同流程发起时，由发起人指定签署方的签署控件的位置和数量。 **1**：签署方在签署时自行添加签署控件，可以拖动位置和控制数量。 */
  SignBeanTag?: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传： **E_PRESCRIPTION_AUTO_SIGN**：处方单（医疗自动签） 注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。` */
  AutoSignScene?: string;
}

declare interface CreateFlowByFilesResponse {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。注: 如果是预览模式(即NeedPreview设置为true)时, 此处不会有值返回。 */
  FlowId?: string;
  /** 合同预览链接URL。注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL */
  PreviewUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowEvidenceReportRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateFlowEvidenceReportResponse {
  /** 出证报告 ID，可用于DescribeFlowEvidenceReport接口查询出证PDF的下载地址 */
  ReportId?: string | null;
  /** 出证任务执行的状态, 可能会有以下状态：EvidenceStatusExecuting： 出证任务在执行中EvidenceStatusSuccess： 出证任务执行成功EvidenceStatusFailed ： 出征任务执行失败 */
  Status?: string;
  /** 此字段已经废除,不再使用.出证的PDF下载地址请调用DescribeChannelFlowEvidenceReport接口获取 */
  ReportUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowGroupByFilesRequest {
  /** 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId 代发合同 */
  Operator: UserInfo;
  /** 合同（流程）组名称,最大长度200个字符 */
  FlowGroupName: string;
  /** 合同（流程）组的子合同信息，支持2-50个子合同 */
  FlowGroupInfos: FlowGroupInfo[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 合同（流程）组的配置项信息。包括是否通知本企业签署方，是否通知其他签署方 */
  FlowGroupOptions?: FlowGroupOptions;
}

declare interface CreateFlowGroupByFilesResponse {
  /** 合同(流程)组的合同组Id */
  FlowGroupId?: string | null;
  /** 合同(流程)组中子合同列表. */
  FlowIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowGroupByTemplatesRequest {
  /** 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId 代发合同 */
  Operator: UserInfo;
  /** 合同组名称,最大长度200个字符 */
  FlowGroupName: string;
  /** 合同组的子合同信息，支持2-50个子合同 */
  FlowGroupInfos: FlowGroupInfo[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 合同组的配置信息。包括是否通知本企业签署方，是否通知其他签署方 */
  FlowGroupOptions?: FlowGroupOptions;
}

declare interface CreateFlowGroupByTemplatesResponse {
  /** 合同(流程)组的合同组Id */
  FlowGroupId?: string | null;
  /** 合同(流程)组中子合同列表. */
  FlowIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowRemindsRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 需执行催办的签署流程ID数组，最多包含100个。 */
  FlowIds: string[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateFlowRemindsResponse {
  /** 合同催办结果的详细信息列表。 */
  RemindFlowRecords?: RemindFlowRecords[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。支持填入集团子公司经办人 userId 代发合同。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。该名称还将用于合同签署完成后的下载文件名。 */
  FlowName: string;
  /** 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。注: `approver中的顺序需要和模板中的顺序保持一致， 否则会导致模板中配置的信息无效` */
  Approvers: FlowCreateApprover[];
  /** 合同流程描述信息(可自定义此描述)，最大长度1000个字符。 */
  FlowDescription?: string;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。 */
  FlowType?: string;
  /** 已经废弃字段，客户端Token，保持接口幂等性,最大长度64个字符 */
  ClientToken?: string;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。 */
  DeadLine?: number;
  /** 合同到期提醒时间，为Unix标准时间戳（秒）格式，支持的范围是从发起时间开始到后10年内。到达提醒时间后，腾讯电子签会短信通知发起方企业合同提醒，可用于处理合同到期事务，如合同续签等事宜。 */
  RemindedOn?: number;
  /** 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
  /** 合同流程的签署顺序类型： **false**：(默认)有序签署, 本合同多个参与人需要依次签署 **true**：无序签署, 本合同多个参与人没有先后签署限制注：`请和模板中的配置保持一致` */
  Unordered?: boolean;
  /** 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：{合同名称} {发起方企业} {发起方姓名} {签署方N企业}{签署方N姓名}其中，N表示签署方的编号，从1开始，不能超过签署人的数量。例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子合同名称：租房合同 发起方：腾讯公司(张三) 签署方：李四 */
  CustomShowMap?: string;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。注:`此功能为白名单功能，使用前请联系对接的客户经理沟通。` */
  CcInfos?: CcInfo[];
  /** 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传： **E_PRESCRIPTION_AUTO_SIGN**：处方单（医疗自动签） 注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。` */
  AutoSignScene?: string;
  /** 暂未开放 */
  RelatedFlowId?: string;
  /** 暂未开放 */
  CallbackUrl?: string;
}

declare interface CreateFlowResponse {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。注:此返回的合同流程ID，需再次调用创建电子文档和发起签署流程接口将合同开始后，合同才能进入签署环节 */
  FlowId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 审核签署节点使用 非必填 如果填写则审核该签署节点。给个人审核时必填。 */
  RecipientId?: string;
  /** 操作类型：（接口通过该字段区分操作类型）SignReview:签署审核CreateReview:发起审核默认：SignReview；SignReview:签署审核该字段不传或者为空，则默认为SignReview签署审核，走签署审核流程若发起个人审核，则指定该字段为：SignReview */
  OperateType?: string;
}

declare interface CreateFlowSignReviewResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowSignUrlRequest {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 流程签署人列表，其中结构体的ApproverName，ApproverMobile和ApproverType必传，其他可不传，注:`1. ApproverType目前只支持个人类型的签署人。``2. 签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。` */
  FlowApproverInfos: FlowCreateApprover[];
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 机构信息，暂未开放 */
  Organization?: OrganizationInfo;
  /** 签署完之后的H5页面的跳转链接，此链接及支持http://和https://，最大长度1000个字符。(建议https协议) */
  JumpUrl?: string;
}

declare interface CreateFlowSignUrlResponse {
  /** 签署人签署链接信息 */
  FlowApproverUrlInfos?: FlowApproverUrlInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrationDepartmentRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 部门名称，不超过50个字符 */
  DeptName: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 电子签父部门ID，与ParentDeptOpenId二选一,优先ParentDeptId,都为空时自动填充至根节点下 */
  ParentDeptId?: string;
  /** 第三方平台中父部门ID,与ParentDeptId二选一,优先ParentDeptId,都为空时自动填充至根节点下 */
  ParentDeptOpenId?: string;
  /** 客户系统部门ID，不超过64个字符 */
  DeptOpenId?: string;
  /** 排序号,1~30000范围内 */
  OrderNo?: number;
}

declare interface CreateIntegrationDepartmentResponse {
  /** 电子签部门ID */
  DeptId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrationEmployeesRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 待创建员工的信息，不超过20个。所有类型的企业支持的入参：Mobile和DisplayName必填,OpenId、Email和Department.DepartmentId选填，其他字段暂不支持。企微类型的企业特有支持的入参：WeworkOpenId，传入此字段无需在传入其他信息 */
  Employees: Staff[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface CreateIntegrationEmployeesResponse {
  /** 创建员工的结果 */
  CreateEmployeeResult?: CreateStaffResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrationRoleRequest {
  /** 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。 */
  Name: string;
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。支持填入集团子公司经办人 userId 代发合同。注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 角色描述，最大长度为50个字符 */
  Description?: string;
  /** 角色类型，0:saas角色，1:集团角色默认0，saas角色 */
  IsGroupRole?: number;
  /** 权限树 */
  PermissionGroups?: PermissionGroup[];
  /** 集团角色的话，需要传递集团子企业列表，如果是全选，则传1 */
  SubOrganizationIds?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateIntegrationRoleResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrationUserRolesRequest {
  /** 操作人信息，UserId必填 */
  Operator: UserInfo;
  /** 绑定角色的用户id列表，不能重复，不能大于 100 个 */
  UserIds: string[];
  /** 绑定角色的角色id列表，不能重复，不能大于 100，可以通过DescribeIntegrationRoles接口获取 */
  RoleIds: string[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface CreateIntegrationUserRolesResponse {
  /** 绑定角色失败列表信息 */
  FailedCreateRoleData?: FailedCreateRoleData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMultiFlowSignQRCodeRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同模板ID，为32位字符串。可登录腾讯电子签控制台，在 "模板"->"模板中心"->"列表展示设置"选中模板 ID 中查看某个模板的TemplateId(在页面中展示为模板ID)。 */
  TemplateId: string;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。该名称还将用于合同签署完成后的下载文件名。 */
  FlowName: string;
  /** 通过此二维码可发起的流程最大限额，如未明确指定，默认为5份。一旦发起流程数超越该限制，该二维码将自动失效。 */
  MaxFlowNum?: number;
  /** 二维码的有效期限，默认为7天，最高设定不得超过90天。一旦超过二维码的有效期限，该二维码将自动失效。 */
  QrEffectiveDay?: number;
  /** 合同流程的签署有效期限，若未设定签署截止日期，则默认为自合同流程创建起的7天内截止。若在签署截止日期前未完成签署，合同状态将变更为已过期，从而导致合同无效。最长设定期限不得超过30天。 */
  FlowEffectiveDay?: number;
  /** 指定签署人信息。在指定签署人后，仅允许特定签署人通过扫描二维码进行签署。 */
  Restrictions?: ApproverRestriction[];
  /** 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
  /** 已废弃，回调配置统一使用企业应用管理-应用集成-企业版应用中的配置 通过一码多扫二维码发起的合同，回调消息可参考文档 https://qian.tencent.com/developers/company/callback_types_contracts_sign 用户通过签署二维码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档 https://qian.tencent.com/developers/company/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83 */
  CallbackUrl?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 限制二维码用户条件（已弃用） */
  ApproverRestrictions?: ApproverRestriction;
}

declare interface CreateMultiFlowSignQRCodeResponse {
  /** 签署二维码的基本信息，用于创建二维码，用户可扫描该二维码进行签署操作。 */
  QrCode?: SignQrCode;
  /** 流程签署二维码的签署信息，适用于客户系统整合二维码功能。通过链接，用户可直接访问电子签名小程序并签署合同。 */
  SignUrls?: SignUrl;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationBatchSignUrlRequest {
  /** 调用方用户信息，UserId 必填，支持填入集团子公司经办人UserId。 */
  Operator: UserInfo;
  /** 指定需要进行批量签署的流程id，数量1-100，填写后用户将通过链接对这些合同进行批量签署。 */
  FlowIds: string[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填。 */
  Agent?: Agent;
  /** 员工的UserId，该UserId对应的员工必须已经加入企业并实名，Name和Mobile为空时该字段不能为空。（优先使用UserId对应的员工） */
  UserId?: string;
  /** 员工姓名，该字段需要与Mobile组合使用，UserId为空时该字段不能为空。（UserId为空时，使用Name和Mbile对应的员工） */
  Name?: string;
  /** 员工手机号码，该字段需要与Name组合使用，UserId为空时该字段不能为空。（UserId为空时，使用Name和Mbile对应的员工） */
  Mobile?: string;
}

declare interface CreateOrganizationBatchSignUrlResponse {
  /** 批量签署入口链接 */
  SignUrl?: string;
  /** 链接过期时间戳 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePersonAuthCertificateImageRequest {
  /** 操作人信息 */
  Operator: UserInfo;
  /** 个人用户名称 */
  UserName: string;
  /** 身份证件类型取值：ID_CARD 身居民身份证PASSPORT 护照HONGKONG_AND_MACAO 港澳居民来往内地通行证FOREIGN_ID_CARD 外国人永久居留身份证HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证) */
  IdCardType: string;
  /** 身份证件号码 */
  IdCardNumber: string;
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreatePersonAuthCertificateImageResponse {
  /** 个人用户证明证书的下载链接 */
  AuthCertUrl?: string;
  /** 证书图片上的证书编号，20位数字 */
  ImageCertId?: string | null;
  /** 图片证明对应的CA证书序列号 */
  SerialNumber?: string | null;
  /** CA证书颁发时间戳 */
  ValidFrom?: number | null;
  /** CA证书有效截止时间戳 */
  ValidTo?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrepareFlowRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 资源id，与ResourceType对应 */
  ResourceId: string;
  /** 合同名称 */
  FlowName: string;
  /** 是否顺序签署true:无序签false:顺序签 */
  Unordered?: boolean;
  /** 签署流程的签署截止时间。值为unix时间戳,精确到秒不传默认为当前时间一年后 */
  Deadline?: number;
  /** 用户自定义合同类型Id该id为电子签企业内的合同类型id， 可以在自定义合同类型处获取 */
  UserFlowTypeId?: string;
  /** 合同类型名称该字段用于客户自定义合同类型建议使用时指定合同类型，便于之后合同分类以及查看如果合同类型与自定义的合同类型描述一致，会自动归类到自定义的合同类型处，如果不一致，则会创建一个新的自定义合同类型 */
  FlowType?: string;
  /** 签署流程参与者信息，最大限制50方 */
  Approvers?: FlowCreateApprover[];
  /** 打开智能添加填写区默认开启，打开:"OPEN" 关闭："CLOSE" */
  IntelligentStatus?: string;
  /** 资源类型，1：模板2：文件，不传默认为2：文件 */
  ResourceType?: number;
  /** 发起方填写控件该类型控件由发起方完成填写 */
  Components?: Component;
  /** 发起合同个性化参数用于满足创建及页面操作过程中的个性化要求具体定制化内容详见数据接口说明 */
  FlowOption?: CreateFlowOption;
  /** 是否开启发起方签署审核true:开启发起方签署审核false:不开启发起方签署审核默认false:不开启发起方签署审核 */
  NeedSignReview?: boolean;
  /** 开启发起方发起合同审核true:开启发起方发起合同审核false:不开启发起方发起合同审核默认false:不开启发起方发起合同审核 */
  NeedCreateReview?: boolean;
  /** 用户自定义参数 */
  UserData?: string;
  /** 合同id,用于通过已web页面发起的合同id快速生成一个web发起合同链接 */
  FlowId?: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface CreatePrepareFlowResponse {
  /** 快速发起预览链接，有效期5分钟 */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePreparedPersonalEsignRequest {
  /** 个人用户姓名 */
  UserName: string;
  /** 身份证件号码 */
  IdCardNumber: string;
  /** 印章名称 */
  SealName: string;
  /** 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。 */
  Operator?: UserInfo;
  /** 身份证件类型:ID_CARD 身份证PASSPORT 护照HONGKONG_AND_MACAO 中国香港FOREIGN_ID_CARD 境外身份HONGKONG_MACAO_AND_TAIWAN 中国台湾 */
  IdCardType?: string;
  /** 印章图片的base64注：已废弃请先通过UploadFiles接口上传文件，获取 FileId */
  SealImage?: string;
  /** 是否开启印章图片压缩处理，默认不开启，如需开启请设置为 true。当印章超过 2M 时建议开启，开启后图片的 hash 将发生变化。 */
  SealImageCompress?: boolean;
  /** 手机号码；当需要开通自动签时，该参数必传 */
  Mobile?: string;
  /** 是否开通自动签，该功能需联系运营工作人员开通后使用 */
  EnableAutoSign?: boolean;
  /** 印章颜色（参数ProcessSeal=true时生效）默认值：BLACK黑色取值: BLACK 黑色,RED 红色,BLUE 蓝色。 */
  SealColor?: string;
  /** 是否处理印章默认不做印章处理。取值：false：不做任何处理；true：做透明化处理和颜色增强。 */
  ProcessSeal?: boolean;
  /** 印章图片文件 id取值：填写的FileId通过UploadFiles接口上传文件获取。 */
  FileId?: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次 1-不绑定，发起合同时将按标准合同套餐进行扣减 */
  LicenseType?: number;
}

declare interface CreatePreparedPersonalEsignResponse {
  /** 导入生成的印章ID */
  SealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReleaseFlowRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 待解除的签署流程编号（即原签署流程的编号）。 */
  NeedRelievedFlowId: string;
  /** 解除协议内容。 */
  ReliveInfo: RelieveInfo;
  /** 关于渠道应用的相关信息，包括子客企业及应用编、号等详细内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent?: Agent;
  /** 解除协议的签署人列表(如不指定该参数，默认使用原流程的签署人列表)。 如需更换原合同中的签署人，可通过指定该签署人的RecipientId编号更换此签署人。(可通过接口DescribeFlowInfo查询签署人的RecipientId编号)解除协议的签署人数量不能多于原流程的签署人数量。`注意：只能更换同企业的签署人。``注意：不支持更换个人类型的签署人。` */
  ReleasedApprovers?: ReleasedApprover[];
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的7天时截止。如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。 */
  Deadline?: number;
  /** 调用方自定义的个性化字段，该字段的值可以是字符串JSON或其他字符串形式，客户可以根据自身需求自定义数据格式并在需要时进行解析。该字段的信息将以Base64编码的形式传输，支持的最大数据大小为20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
}

declare interface CreateReleaseFlowResponse {
  /** 解除协议流程编号`注意：这里的流程编号对应的合同是本次发起的解除协议。` */
  FlowId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSchemeUrlRequest {
  /** 执行本接口操作的员工信息, userId 必填。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程签署方的组织机构名称。如果名称中包含英文括号()，请使用中文括号（）代替。 */
  OrganizationName?: string;
  /** 合同流程里边签署方经办人的姓名。 */
  Name?: string;
  /** 合同流程里边签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。 */
  Mobile?: string;
  /** 要跳转的链接类型 **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链**APP**： 第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型 */
  EndPoint?: string;
  /** 合同流程ID 注: `如果准备跳转到合同流程签署的详情页面(即PathType=1时)必传, 跳转其他页面可不传` */
  FlowId?: string;
  /** 合同流程组的组ID, 在合同流程组场景下，生成合同流程组的签署链接时需要赋值 */
  FlowGroupId?: string;
  /** 要跳转到的页面类型 **0** : 腾讯电子签小程序个人首页 (默认) **1** : 腾讯电子签小程序流程合同的详情页 (即合同签署页面) **2** : 腾讯电子签小程序合同列表页 */
  PathType?: number;
  /** 签署完成后是否自动回跳**false**：否, 签署完成不会自动跳转回来(默认)**true**：是, 签署完成会自动跳转回来注: ` 该参数只针对"APP" 类型的签署链接有效` */
  AutoJumpBack?: boolean;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 生成的签署链接在签署页面隐藏的按钮列表，可设置如下： **0** :合同签署页面更多操作按钮 **1** :合同签署页面更多操作的拒绝签署按钮 **2** :合同签署页面更多操作的转他人处理按钮 **3** :签署成功页的查看详情按钮注: `字段为数组, 可以传值隐藏多个按钮` */
  Hides?: number[];
}

declare interface CreateSchemeUrlResponse {
  /** 腾讯电子签小程序的签署链接。如果EndPoint是**APP**，得到的链接类似于`pages/guide?from=default&where=mini&id=yDwJSUUirqauh***7jNSxwdirTSGuH&to=CONTRACT_DETAIL&name=&phone=&shortKey=yDw***k1xFc5`, 用法可以参加接口描述中的"跳转到小程序的实现"如果EndPoint是**HTTP**，得到的链接类似于 `https://res.ess.tencent.cn/cdn/h5-activity/jump-mp.html?where=mini&from=SFY&id=yDwfEUUw**4rV6Avz&to=MVP_CONTRACT_COVER&name=%E9%83%**5%86%9B`，点击后会跳转到腾讯电子签小程序进行签署如果EndPoint是**HTTP_SHORT_URL**，得到的链接类似于 `https://essurl.cn/2n**42Nd`，点击后会跳转到腾讯电子签小程序进行签署 */
  SchemeUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSealPolicyRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 用户在电子文件签署平台标识信息，具体参考UserInfo结构体。可跟下面的UserIds可叠加起作用 */
  Users: UserInfo[];
  /** 印章ID */
  SealId: string;
  /** 授权有效期。时间戳秒级 */
  Expired: number;
  /** 需要授权的用户UserId集合。跟上面的SealId参数配合使用。选填，跟上面的Users同时起作用 */
  UserIds?: string[];
  /** 印章授权内容 */
  Policy?: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface CreateSealPolicyResponse {
  /** 最终授权成功的。其他的跳过的是已经授权了的 */
  UserIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSealRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 电子印章名字，1-50个中文字符。 */
  SealName: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 本接口支持上传图片印章及系统直接生成印章；如果要使用系统生成印章，此值传：SealGenerateSourceSystem；如果要使用图片上传请传字段 Image */
  GenerateSource?: string;
  /** 电子印章类型：OFFICIAL-公章；CONTRACT-合同专用章;FINANCE-合财务专用章;PERSONNEL-人事专用章. */
  SealType?: string;
  /** 电子印章图片文件名称，1-50个中文字符。 */
  FileName?: string;
  /** 电子印章图片base64编码参数Image,FileToken或GenerateSource=SealGenerateSourceSystem三选一。 */
  Image?: string;
  /** 电子印章宽度,单位px参数不再启用，系统会设置印章大小为标准尺寸。 */
  Width?: number;
  /** 电子印章高度,单位px参数不再启用，系统会设置印章大小为标准尺寸。 */
  Height?: number;
  /** 电子印章印章颜色(默认红色RED),RED-红色系统目前只支持红色印章创建。 */
  Color?: string;
  /** 企业印章横向文字，最多可填15个汉字（若超过印章最大宽度，优先压缩字间距，其次缩小字号） */
  SealHorizontalText?: string;
  /** 暂时不支持下弦文字设置 */
  SealChordText?: string;
  /** 系统生成的印章只支持STAR */
  SealCentralType?: string;
  /** 通过文件上传时，服务端生成的电子印章上传图片的token */
  FileToken?: string;
  /** 印章样式:cycle:圆形印章;ellipse:椭圆印章;注：默认圆形印章 */
  SealStyle?: string;
  /** 印章尺寸取值描述：42_42 圆形企业公章直径42mm；40_40 圆形企业印章直径40mm；45_30 椭圆形印章45mm x 30mm; */
  SealSize?: string;
}

declare interface CreateSealResponse {
  /** 电子印章编号 */
  SealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserAutoSignEnableUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景注: `现在仅支持电子处方场景` */
  SceneKey: string;
  /** 自动签开通配置信息, 包括开通的人员的信息等 */
  AutoSignConfig: AutoSignConfig;
  /** 生成的链接类型： 不传(即为空值) 则会生成小程序端开通链接(默认) **H5SIGN** : 生成H5端开通链接 */
  UrlType?: string;
  /** 是否通知开通方，通知类型:默认不设置为不通知开通方**SMS** : 短信通知 ,如果需要短信通知则NotifyAddress填写对方的手机号 */
  NotifyType?: string;
  /** 如果通知类型NotifyType选择为SMS，则此处为手机号, 其他通知类型不需要设置此项 */
  NotifyAddress?: string;
  /** 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。` */
  ExpiredTime?: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateUserAutoSignEnableUrlResponse {
  /** 个人用户自动签的开通链接, 短链形式 */
  Url?: string;
  /** 腾讯电子签小程序的 AppID，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用注: `如果获取的是H5链接, 则不会返回此值` */
  AppId?: string;
  /** 腾讯电子签小程序的原始 Id, ，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用注: `如果获取的是H5链接, 则不会返回此值` */
  AppOriginalId?: string;
  /** 腾讯电子签小程序的跳转路径，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用注: `如果获取的是H5链接, 则不会返回此值` */
  Path?: string;
  /** base64 格式的跳转二维码图片，可通过微信扫描后跳转到腾讯电子签小程序的开通界面。注: `如果获取的是H5链接, 则不会返回此二维码图片` */
  QrCode?: string;
  /** 返回的链接类型 空: 默认小程序端链接 **H5SIGN** : h5端链接 */
  UrlType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWebThemeConfigRequest {
  /** 操作人信息 */
  Operator: UserInfo;
  /** 主题类型EMBED_WEB_THEME：嵌入式主题目前只支持EMBED_WEB_THEME，web页面嵌入的主题风格配置 */
  ThemeType: string;
  /** 主题配置 */
  WebThemeConfig: WebThemeConfig;
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateWebThemeConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIntegrationDepartmentRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 电子签中的部门id,通过DescribeIntegrationDepartments接口可获得 */
  DeptId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 交接部门ID。待删除部门中的合同、印章和模板数据，交接至该部门ID下，未填写交接至公司根部门。 */
  ReceiveDeptId?: string;
}

declare interface DeleteIntegrationDepartmentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIntegrationEmployeesRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 待移除员工的信息，userId和openId二选一，必填一个，如果需要指定交接人的话，ReceiveUserId或者ReceiveOpenId字段二选一 */
  Employees: Staff[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId需填充子企业Id */
  Agent?: Agent;
}

declare interface DeleteIntegrationEmployeesResponse {
  /** 员工删除数据 */
  DeleteEmployeeResult?: DeleteStaffsResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIntegrationRoleUsersRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 角色id */
  RoleId: string;
  /** 用户信息,最多 200 个用户，并且 UserId 和 OpenId 二选一，其他字段不需要传 */
  Users: UserInfo[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface DeleteIntegrationRoleUsersResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSealPoliciesRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 印章授权编码数组。这个参数跟下面的SealId其中一个必填，另外一个可选填 */
  PolicyIds?: string[];
  /** 印章ID。这个参数跟上面的PolicyIds其中一个必填，另外一个可选填 */
  SealId?: string;
  /** 待授权的员工ID */
  UserIds?: string[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface DeleteSealPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtendedServiceAuthInfosRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 要查询的扩展服务类型。默认为空，即查询当前支持的所有扩展服务信息。若需查询单个扩展服务的开通情况，请传递相应的值，如下所示：OPEN_SERVER_SIGN：企业静默签署OVERSEA_SIGN：企业与港澳台居民签署合同MOBILE_CHECK_APPROVER：使用手机号验证签署方身份PAGING_SEAL：骑缝章BATCH_SIGN：批量签署 */
  ExtendServiceType?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeExtendedServiceAuthInfosResponse {
  /** 服务开通和授权的信息列表，根据查询类型返回所有支持的扩展服务开通和授权状况，或者返回特定扩展服务的开通和授权状况。 */
  AuthInfoList?: ExtendAuthInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeFileUrlsResponse {
  /** 文件URL信息；链接不是永久链接，有效期5分钟后链接失效。 */
  FileUrls?: FileUrl[];
  /** URL数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowBriefsRequest {
  /** 调用方用户信息，userId 必填 */
  Operator: UserInfo;
  /** 需要查询的流程ID列表，限制最大100个 */
  FlowIds: string[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface DescribeFlowBriefsResponse {
  /** 流程列表 */
  FlowBriefs?: FlowBrief[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowComponentsRequest {
  /** 操作者信息 */
  Operator: UserInfo;
  /** 流程(合同)的编号 */
  FlowId: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface DescribeFlowComponentsResponse {
  /** 流程关联的填写控件信息，按照参与方进行分类返回。 */
  RecipientComponentInfos?: RecipientComponentInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowEvidenceReportRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 签署报告编号 */
  ReportId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeFlowEvidenceReportResponse {
  /** 出证报告PDF的下载 URL */
  ReportUrl?: string | null;
  /** 签署报告出证任务的状态EvidenceStatusExecuting : 出证任务在执行中EvidenceStatusSuccess : 出证任务执行成功EvidenceStatusFailed : 出证任务执行失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowInfoRequest {
  /** 调用方用户信息，userId 必填 */
  Operator?: UserInfo;
  /** 需要查询的流程ID列表，限制最大100个如果查询合同组的信息,不要传此参数 */
  FlowIds?: string[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 合同组ID, 如果传此参数会忽略FlowIds入参 所以如传此参数不要传FlowIds参数 */
  FlowGroupId?: string;
}

declare interface DescribeFlowInfoResponse {
  /** 签署流程信息 */
  FlowDetailInfos?: FlowDetailInfo[];
  /** 合同组ID */
  FlowGroupId?: string;
  /** 合同组名称 */
  FlowGroupName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowTemplatesRequest {
  /** 调用方员工/经办人信息UserId 必填，在企业控制台组织架构中可以查到员工的UserId注：请保证员工有相关的角色权限 */
  Operator: UserInfo;
  /** 代理相关应用信息如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 查询内容类型0-模板列表及详情（默认）1-仅模板列表 */
  ContentType?: number;
  /** 搜索条件，本字段用于指定模板Id进行查询。Key：template-idValues：需要查询的模板Id列表 */
  Filters?: Filter[];
  /** 查询结果分页返回，此处指定第几页，如果不传默从第一页返回。页码从0开始，即首页为0。 */
  Offset?: number;
  /** 指定每页多少条数据，如果不传默认为20，单页最大200。 */
  Limit?: number;
  /** 用于查询指定应用号下单模板列表。ApplicationId不为空，查询指定应用下的模板列表ApplicationId为空，查询所有应用下的模板列表 */
  ApplicationId?: string;
  /** 默认为false，查询SaaS模板库列表；为true，查询第三方应用集成平台企业模板库管理列表 */
  IsChannel?: boolean;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
  /** 暂未开放 */
  GenerateSource?: number;
}

declare interface DescribeFlowTemplatesResponse {
  /** 模板详情列表 */
  Templates?: TemplateInfo[];
  /** 查询到的总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationDepartmentsRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 查询类型 0-查询单个部门节点 1-单个部门节点及一级子节点部门列表 */
  QueryType: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 部门ID,与DeptOpenId二选一,优先DeptId,都为空时获取根节点数据 */
  DeptId?: string;
  /** 客户系统部门ID,与DeptId二选一,优先DeptId,都为空时获取根节点数据 */
  DeptOpenId?: string;
}

declare interface DescribeIntegrationDepartmentsResponse {
  /** 部门列表 */
  Departments?: IntegrationDepartment[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationEmployeesRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 指定每页多少条数据，单页最大20 */
  Limit: number;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 查询过滤实名用户，Key为Status，Values为["IsVerified"]根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...] */
  Filters?: Filter[];
  /** 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大20000 */
  Offset?: number;
}

declare interface DescribeIntegrationEmployeesResponse {
  /** 员工数据列表 */
  Employees?: Staff[] | null;
  /** 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大20000 */
  Offset?: number | null;
  /** 指定每页多少条数据，单页最大20 */
  Limit?: number;
  /** 符合条件的员工数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationMainOrganizationUserRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
}

declare interface DescribeIntegrationMainOrganizationUserResponse {
  /** 主企业员工账号信息 */
  IntegrationMainOrganizationUser?: IntegrationMainOrganizationUser | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationRolesRequest {
  /** 操作人信息，UserId必填 */
  Operator: UserInfo;
  /** 指定每页多少条数据，单页最大200 */
  Limit: number;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 查询的关键字段:Key:"RoleType",Values:["1"]查询系统角色，Values:["2"]查询自定义角色Key:"RoleStatus",Values:["1"]查询启用角色，Values:["2"]查询禁用角色Key:"IsGroupRole"，Values:["0"]:查询非集团角色，Values:["1"]表示查询集团角色Key:"IsReturnPermissionGroup"，Values:["0"]:表示接口不返回角色对应的权限树字段，Values:["1"]表示接口返回角色对应的权限树字段 */
  Filters?: Filter[];
  /** 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大2000 */
  Offset?: number;
}

declare interface DescribeIntegrationRolesResponse {
  /** 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大2000 */
  Offset?: number;
  /** 指定每页多少条数据，单页最大200 */
  Limit?: number;
  /** 符合查询条件的总的角色数 */
  TotalCount?: number;
  /** 企业角色信息列表 */
  IntegrateRoles?: IntegrateRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationGroupOrganizationsRequest {
  /** 操作人信息，userId必填 */
  Operator: UserInfo;
  /** 指定每页多少条数据，单页最大1000 */
  Limit: number;
  /** 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0 */
  Offset: number;
  /** 查询成员企业的企业名，模糊匹配 */
  Name?: string;
  /** 成员企业加入集团的当前状态:1-待授权;2-已授权待激活;3-拒绝授权;4-已解除;5-已加入 */
  Status?: number;
  /** 是否导出当前成员企业数据 */
  Export?: boolean;
  /** 成员企业机构 ID，在PC控制台 集团管理可获取 */
  Id?: string;
}

declare interface DescribeOrganizationGroupOrganizationsResponse {
  /** 查询到的符合条件的成员企业总数量 */
  Total?: number | null;
  /** 已授权待激活的企业数量 */
  JoinedTotal?: number | null;
  /** 已加入的企业数量(废弃,请使用ActivatedTotal) */
  ActivedTotal?: number | null;
  /** 如果入参Export为 true 时使用，表示导出Excel的url */
  ExportUrl?: string | null;
  /** 成员企业信息列表 */
  List?: GroupOrganization[] | null;
  /** 已加入的企业数量 */
  ActivatedTotal?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 印章类型列表（都是组织机构印章）。为空时查询所有类型的印章。目前支持以下类型：OFFICIAL：企业公章；CONTRACT：合同专用章；ORGANIZATION_SEAL：企业印章(图片上传创建)；LEGAL_PERSON_SEAL：法定代表人章 */
  SealTypes?: string[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 查询的印章状态列表。取值为空，只查询启用状态的印章；取值ALL，查询所有状态的印章；取值CHECKING，查询待审核的印章；取值SUCCESS，查询启用状态的印章；取值FAIL，查询印章审核拒绝的印章；取值DISABLE，查询已停用的印章；取值STOPPED，查询已终止的印章；取值VOID，查询已作废的印章；取值INVALID，查询已失效的印章； */
  SealStatuses?: string[];
}

declare interface DescribeOrganizationSealsResponse {
  /** 在设置了SealId时返回0或1，没有设置时返回公司的总印章数量，可能比返回的印章数组数量多 */
  TotalCount?: number;
  /** 查询到的印章结果数组 */
  Seals?: OccupiedSeal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeThirdPartyAuthCodeRequest {
  /** 电子签小程序跳转客户小程序时携带的授权查看码 */
  AuthCode: string;
  /** 操作人信息 */
  Operator?: UserInfo;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface DescribeThirdPartyAuthCodeResponse {
  /** 用户是否实名，VERIFIED 为实名，UNVERIFIED 未实名 */
  VerifyStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserAutoSignStatusRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景注: `现在仅支持电子处方场景` */
  SceneKey: string;
  /** 要查询状态的用户信息, 包括名字,身份证等 */
  UserInfo: UserThreeFactor;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeUserAutoSignStatusResponse {
  /** 查询用户是否已开通自动签 */
  IsOpen?: boolean;
  /** 自动签许可生效时间。当且仅当已通过许可开通自动签时有值。值为unix时间戳,单位为秒。 */
  LicenseFrom?: number;
  /** 自动签许可到期时间。当且仅当已通过许可开通自动签时有值。值为unix时间戳,单位为秒。 */
  LicenseTo?: number;
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。**0**: 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人`**1**: 不使用个人自动签账号许可进行开通 */
  LicenseType?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableUserAutoSignRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** 电子处方 */
  SceneKey: string;
  /** 需要关闭自动签的个人的信息，如姓名，证件信息等。 */
  UserInfo: UserThreeFactor;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DisableUserAutoSignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskResultApiRequest {
  /** 任务Id，通过接口CreateConvertTaskApi或CreateMergeFileTask得到的返回任务id */
  TaskId: string;
  /** 操作人信息,UserId必填 */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface GetTaskResultApiResponse {
  /** 任务Id */
  TaskId?: string;
  /** 任务状态，需要关注的状态0 :NeedTranform - 任务已提交4 :Processing - 文档转换中8 :TaskEnd - 任务处理完成-2 :DownloadFailed - 下载失败-6 :ProcessFailed - 转换失败-13:ProcessTimeout - 转换文件超时 */
  TaskStatus?: number;
  /** 状态描述，需要关注的状态NeedTranform - 任务已提交Processing - 文档转换中TaskEnd - 任务处理完成DownloadFailed - 下载失败ProcessFailed - 转换失败ProcessTimeout - 转换文件超时 */
  TaskMessage?: string;
  /** 资源Id，也是FileId，用于文件发起时使用 */
  ResourceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationCallbackInfoRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 操作类型：1-新增2-删除 */
  OperateType: number;
  /** 企业应用回调信息 */
  CallbackInfo: CallbackInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface ModifyApplicationCallbackInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIntegrationDepartmentRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 电子签部门ID,通过DescribeIntegrationDepartments接口可以获取 */
  DeptId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 电子签父部门ID，通过DescribeIntegrationDepartments接口可以获取 */
  ParentDeptId?: string;
  /** 部门名称，不超过50个字符 */
  DeptName?: string;
  /** 客户系统部门ID，不超过64个字符 */
  DeptOpenId?: string;
  /** 排序号,1~30000范围内 */
  OrderNo?: number;
}

declare interface ModifyIntegrationDepartmentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIntegrationRoleRequest {
  /** 角色Id，可通过接口 DescribeIntegrationRoles 查询获取 */
  RoleId: string;
  /** 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。 */
  Name: string;
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。支持填入集团子公司经办人 userId 代发合同。注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 角色描述，最大长度为50个字符 */
  Description?: string;
  /** 权限树 */
  PermissionGroups?: PermissionGroup[];
  /** 集团角色的话，需要传递集团子企业列表，如果是全选，则传1 */
  SubOrganizationIds?: string[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface ModifyIntegrationRoleResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartFlowRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。此处需要传入[创建签署流程接口](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow)得到的FlowId。 */
  FlowId: string;
  /** 客户端Token，保持接口幂等性,最大长度64个字符 */
  ClientToken?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 若在创建签署流程时指定了关注人CcInfos，此参数可设定向关注人发送短信通知的类型： **0** :合同发起时通知通知对方来查看合同（默认） **1** : 签署完成后通知对方来查看合同 */
  CcNotifyType?: number;
}

declare interface StartFlowResponse {
  /** 发起成功后返回的状态，根据合同流程的不同，返回不同状态： **START** : 发起成功, 合同进入签署环节 **REVIEW** : 提交审核成功, 合同需要发起审核, 发起方企业通过接口审核通过后合同才进入签署环境 `白名单功能，使用前请联系对接的客户经理沟通。` **EXECUTING** : 已提交发起任务且PDF合同正在合成中, 等PDF合同合成成功后进入签署环节 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindEmployeeUserIdWithClientOpenIdRequest {
  /** 用户信息，OpenId与UserId二选一必填一个，OpenId是第三方客户ID，userId是用户实名后的电子签生成的ID,当传入客户系统openId，传入的openId需与电子签员工userId绑定，且参数Channel必填，Channel值为INTEGRATE；当传入参数UserId，Channel无需指定(参数用法参考示例) */
  Operator: UserInfo;
  /** 电子签系统员工UserId */
  UserId: string;
  /** 客户系统OpenId */
  OpenId: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface UnbindEmployeeUserIdWithClientOpenIdResponse {
  /** 解绑是否成功，1表示成功，0表示失败 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateIntegrationEmployeesRequest {
  /** 当前用户信息，UserId必填 */
  Operator: UserInfo;
  /** 员工信息，不超过100个。根据UserId或OpenId更新员工，必填一个，优先UserId。可更新Mobile、DisplayName、Email和Department.DepartmentId字段，其他字段暂不支持 */
  Employees: Staff[];
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId需填充子企业Id */
  Agent?: Agent;
}

declare interface UpdateIntegrationEmployeesResponse {
  /** 更新成功的用户列表 */
  SuccessEmployeeData?: SuccessUpdateStaffData[];
  /** 更新失败的用户列表 */
  FailedEmployeeData?: FailedUpdateStaffData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFilesRequest {
  /** 文件对应业务类型1. TEMPLATE - 模板； 文件类型：.pdf/.doc/.docx/.html2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html3. SEAL - 印章； 文件类型：.jpg/.jpeg/.png */
  BusinessType: string;
  /** 调用方信息，其中OperatorId为必填字段，即用户的UserId */
  Caller?: Caller;
  /** 上传文件内容数组，最多支持20个文件 */
  FileInfos?: UploadFile[];
  /** 文件类型， 默认通过文件内容解析得到文件类型，客户可以显示的说明上传文件的类型。如：PDF 表示上传的文件 xxx.pdf的文件类型是 PDF */
  FileType?: string;
  /** 此参数只对 PDF 文件有效。是否将pdf灰色矩阵置白true--是，处理置白默认为false--否，不处理 */
  CoverRect?: boolean;
  /** 用户自定义ID数组，与上传文件一一对应 */
  CustomIds?: string[];
  /** 不再使用，上传文件链接数组，最多支持20个URL */
  FileUrls?: string;
}

declare interface UploadFilesResponse {
  /** 文件id数组 */
  FileIds?: string[];
  /** 上传成功文件数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyPdfRequest {
  /** 流程ID */
  FlowId: string;
  /** 调用方用户信息，userId 必填 */
  Operator?: UserInfo;
}

declare interface VerifyPdfResponse {
  /** 验签结果，1-文件未被篡改，全部签名在腾讯电子签完成； 2-文件未被篡改，部分签名在腾讯电子签完成；3-文件被篡改；4-异常：文件内没有签名域；5-异常：文件签名格式错误 */
  VerifyResult?: number;
  /** 验签结果详情，每个签名域对应的验签结果。状态值：1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域；5-文件签名格式错误 */
  PdfVerifyResults?: PdfVerifyResult[];
  /** 验签序列号 */
  VerifySerialNo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ess 腾讯电子签企业版} */
declare interface Ess {
  (): Versions;
  /** 员工userid与客户系统openid绑定 {@link BindEmployeeUserIdWithClientOpenIdRequest} {@link BindEmployeeUserIdWithClientOpenIdResponse} */
  BindEmployeeUserIdWithClientOpenId(data: BindEmployeeUserIdWithClientOpenIdRequest, config?: AxiosRequestConfig): AxiosPromise<BindEmployeeUserIdWithClientOpenIdResponse>;
  /** 撤销单个签署流程 {@link CancelFlowRequest} {@link CancelFlowResponse} */
  CancelFlow(data: CancelFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CancelFlowResponse>;
  /** 取消一码多扫流程签署二维码 {@link CancelMultiFlowSignQRCodeRequest} {@link CancelMultiFlowSignQRCodeResponse} */
  CancelMultiFlowSignQRCode(data: CancelMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CancelMultiFlowSignQRCodeResponse>;
  /** 撤销个人用户自动签的开通链接 {@link CancelUserAutoSignEnableUrlRequest} {@link CancelUserAutoSignEnableUrlResponse} */
  CancelUserAutoSignEnableUrl(data: CancelUserAutoSignEnableUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CancelUserAutoSignEnableUrlResponse>;
  /** 批量撤销签署流程 {@link CreateBatchCancelFlowUrlRequest} {@link CreateBatchCancelFlowUrlResponse} */
  CreateBatchCancelFlowUrl(data: CreateBatchCancelFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchCancelFlowUrlResponse>;
  /** @deprecated 生成子客编辑企业信息二维码 {@link CreateChannelSubOrganizationModifyQrCodeRequest} {@link CreateChannelSubOrganizationModifyQrCodeResponse} */
  CreateChannelSubOrganizationModifyQrCode(data: CreateChannelSubOrganizationModifyQrCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChannelSubOrganizationModifyQrCodeResponse>;
  /** 创建文件转换任务 {@link CreateConvertTaskApiRequest} {@link CreateConvertTaskApiResponse} */
  CreateConvertTaskApi(data: CreateConvertTaskApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConvertTaskApiResponse>;
  /** 模板发起合同-创建电子文档 {@link CreateDocumentRequest} {@link CreateDocumentResponse} */
  CreateDocument(data: CreateDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocumentResponse>;
  /** 获取其他可嵌入web页面 {@link CreateEmbedWebUrlRequest} {@link CreateEmbedWebUrlResponse} */
  CreateEmbedWebUrl(data: CreateEmbedWebUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmbedWebUrlResponse>;
  /** 模板发起合同-创建签署流程 {@link CreateFlowRequest} {@link CreateFlowResponse} */
  CreateFlow(data: CreateFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowResponse>;
  /** 补充签署流程企业签署人信息 {@link CreateFlowApproversRequest} {@link CreateFlowApproversResponse} */
  CreateFlowApprovers(data: CreateFlowApproversRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowApproversResponse>;
  /** 用PDF文件创建签署流程 {@link CreateFlowByFilesRequest} {@link CreateFlowByFilesResponse} */
  CreateFlowByFiles(data: CreateFlowByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowByFilesResponse>;
  /** 创建并返回出证报告 {@link CreateFlowEvidenceReportRequest} {@link CreateFlowEvidenceReportResponse} */
  CreateFlowEvidenceReport(data: CreateFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowEvidenceReportResponse>;
  /** 通过多文件创建合同组签署流程 {@link CreateFlowGroupByFilesRequest} {@link CreateFlowGroupByFilesResponse} */
  CreateFlowGroupByFiles(data: CreateFlowGroupByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowGroupByFilesResponse>;
  /** 通过多模板创建合同组签署流程 {@link CreateFlowGroupByTemplatesRequest} {@link CreateFlowGroupByTemplatesResponse} */
  CreateFlowGroupByTemplates(data: CreateFlowGroupByTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowGroupByTemplatesResponse>;
  /** 合同催办 {@link CreateFlowRemindsRequest} {@link CreateFlowRemindsResponse} */
  CreateFlowReminds(data: CreateFlowRemindsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowRemindsResponse>;
  /** 提交企业签署流程审批结果 {@link CreateFlowSignReviewRequest} {@link CreateFlowSignReviewResponse} */
  CreateFlowSignReview(data: CreateFlowSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowSignReviewResponse>;
  /** 获取个人用户H5签署链接 {@link CreateFlowSignUrlRequest} {@link CreateFlowSignUrlResponse} */
  CreateFlowSignUrl(data: CreateFlowSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowSignUrlResponse>;
  /** 创建企业部门 {@link CreateIntegrationDepartmentRequest} {@link CreateIntegrationDepartmentResponse} */
  CreateIntegrationDepartment(data: CreateIntegrationDepartmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationDepartmentResponse>;
  /** 创建企业员工 {@link CreateIntegrationEmployeesRequest} {@link CreateIntegrationEmployeesResponse} */
  CreateIntegrationEmployees(data: CreateIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationEmployeesResponse>;
  /** 创建企业角色 {@link CreateIntegrationRoleRequest} {@link CreateIntegrationRoleResponse} */
  CreateIntegrationRole(data: CreateIntegrationRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationRoleResponse>;
  /** 绑定员工角色 {@link CreateIntegrationUserRolesRequest} {@link CreateIntegrationUserRolesResponse} */
  CreateIntegrationUserRoles(data: CreateIntegrationUserRolesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationUserRolesResponse>;
  /** 创建一码多扫流程签署二维码 {@link CreateMultiFlowSignQRCodeRequest} {@link CreateMultiFlowSignQRCodeResponse} */
  CreateMultiFlowSignQRCode(data: CreateMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMultiFlowSignQRCodeResponse>;
  /** 获取企业签署合同web页面 {@link CreateOrganizationBatchSignUrlRequest} {@link CreateOrganizationBatchSignUrlResponse} */
  CreateOrganizationBatchSignUrl(data: CreateOrganizationBatchSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationBatchSignUrlResponse>;
  /** 创建个人用户证书证明图片 {@link CreatePersonAuthCertificateImageRequest} {@link CreatePersonAuthCertificateImageResponse} */
  CreatePersonAuthCertificateImage(data: CreatePersonAuthCertificateImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonAuthCertificateImageResponse>;
  /** 获取发起合同web页面 {@link CreatePrepareFlowRequest} {@link CreatePrepareFlowResponse} */
  CreatePrepareFlow(data: CreatePrepareFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrepareFlowResponse>;
  /** 创建导入处方单个人印章 {@link CreatePreparedPersonalEsignRequest} {@link CreatePreparedPersonalEsignResponse} */
  CreatePreparedPersonalEsign(data: CreatePreparedPersonalEsignRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePreparedPersonalEsignResponse>;
  /** 发起解除协议 {@link CreateReleaseFlowRequest} {@link CreateReleaseFlowResponse} */
  CreateReleaseFlow(data: CreateReleaseFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseFlowResponse>;
  /** 获取跳转至腾讯电子签小程序的签署链接 {@link CreateSchemeUrlRequest} {@link CreateSchemeUrlResponse} */
  CreateSchemeUrl(data: CreateSchemeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSchemeUrlResponse>;
  /** 创建企业电子印章 {@link CreateSealRequest} {@link CreateSealResponse} */
  CreateSeal(data: CreateSealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealResponse>;
  /** 创建印章授权 {@link CreateSealPolicyRequest} {@link CreateSealPolicyResponse} */
  CreateSealPolicy(data: CreateSealPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealPolicyResponse>;
  /** 获取个人用户自动签的开通链接 {@link CreateUserAutoSignEnableUrlRequest} {@link CreateUserAutoSignEnableUrlResponse} */
  CreateUserAutoSignEnableUrl(data: CreateUserAutoSignEnableUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserAutoSignEnableUrlResponse>;
  /** 创建页面主题配置 {@link CreateWebThemeConfigRequest} {@link CreateWebThemeConfigResponse} */
  CreateWebThemeConfig(data: CreateWebThemeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWebThemeConfigResponse>;
  /** 删除企业部门 {@link DeleteIntegrationDepartmentRequest} {@link DeleteIntegrationDepartmentResponse} */
  DeleteIntegrationDepartment(data: DeleteIntegrationDepartmentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationDepartmentResponse>;
  /** 移除企业员工 {@link DeleteIntegrationEmployeesRequest} {@link DeleteIntegrationEmployeesResponse} */
  DeleteIntegrationEmployees(data: DeleteIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationEmployeesResponse>;
  /** 解绑员工角色 {@link DeleteIntegrationRoleUsersRequest} {@link DeleteIntegrationRoleUsersResponse} */
  DeleteIntegrationRoleUsers(data: DeleteIntegrationRoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationRoleUsersResponse>;
  /** 撤销印章授权 {@link DeleteSealPoliciesRequest} {@link DeleteSealPoliciesResponse} */
  DeleteSealPolicies(data: DeleteSealPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSealPoliciesResponse>;
  /** 查询企业扩展服务授权信息 {@link DescribeExtendedServiceAuthInfosRequest} {@link DescribeExtendedServiceAuthInfosResponse} */
  DescribeExtendedServiceAuthInfos(data: DescribeExtendedServiceAuthInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtendedServiceAuthInfosResponse>;
  /** 查询文件下载URL {@link DescribeFileUrlsRequest} {@link DescribeFileUrlsResponse} */
  DescribeFileUrls(data: DescribeFileUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileUrlsResponse>;
  /** 查询流程摘要 {@link DescribeFlowBriefsRequest} {@link DescribeFlowBriefsResponse} */
  DescribeFlowBriefs(data: DescribeFlowBriefsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowBriefsResponse>;
  /** 查询流程填写控件内容 {@link DescribeFlowComponentsRequest} {@link DescribeFlowComponentsResponse} */
  DescribeFlowComponents(data: DescribeFlowComponentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowComponentsResponse>;
  /** 查询签署报告 {@link DescribeFlowEvidenceReportRequest} {@link DescribeFlowEvidenceReportResponse} */
  DescribeFlowEvidenceReport(data: DescribeFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowEvidenceReportResponse>;
  /** 查询合同详情 {@link DescribeFlowInfoRequest} {@link DescribeFlowInfoResponse} */
  DescribeFlowInfo(data?: DescribeFlowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowInfoResponse>;
  /** 查询模板 {@link DescribeFlowTemplatesRequest} {@link DescribeFlowTemplatesResponse} */
  DescribeFlowTemplates(data: DescribeFlowTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowTemplatesResponse>;
  /** 获取企业部门列表 {@link DescribeIntegrationDepartmentsRequest} {@link DescribeIntegrationDepartmentsResponse} */
  DescribeIntegrationDepartments(data: DescribeIntegrationDepartmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationDepartmentsResponse>;
  /** 查询企业员工列表 {@link DescribeIntegrationEmployeesRequest} {@link DescribeIntegrationEmployeesResponse} */
  DescribeIntegrationEmployees(data: DescribeIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationEmployeesResponse>;
  /** @deprecated 查询集团主企业员工账号 {@link DescribeIntegrationMainOrganizationUserRequest} {@link DescribeIntegrationMainOrganizationUserResponse} */
  DescribeIntegrationMainOrganizationUser(data: DescribeIntegrationMainOrganizationUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationMainOrganizationUserResponse>;
  /** 查询企业角色列表 {@link DescribeIntegrationRolesRequest} {@link DescribeIntegrationRolesResponse} */
  DescribeIntegrationRoles(data: DescribeIntegrationRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationRolesResponse>;
  /** 查询集团企业列表 {@link DescribeOrganizationGroupOrganizationsRequest} {@link DescribeOrganizationGroupOrganizationsResponse} */
  DescribeOrganizationGroupOrganizations(data: DescribeOrganizationGroupOrganizationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationGroupOrganizationsResponse>;
  /** 查询企业电子印章 {@link DescribeOrganizationSealsRequest} {@link DescribeOrganizationSealsResponse} */
  DescribeOrganizationSeals(data: DescribeOrganizationSealsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationSealsResponse>;
  /** 通过AuthCode查询用户是否实名 {@link DescribeThirdPartyAuthCodeRequest} {@link DescribeThirdPartyAuthCodeResponse} */
  DescribeThirdPartyAuthCode(data: DescribeThirdPartyAuthCodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeThirdPartyAuthCodeResponse>;
  /** 获取个人用户自动签的开通状态 {@link DescribeUserAutoSignStatusRequest} {@link DescribeUserAutoSignStatusResponse} */
  DescribeUserAutoSignStatus(data: DescribeUserAutoSignStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserAutoSignStatusResponse>;
  /** 关闭个人用户自动签功能 {@link DisableUserAutoSignRequest} {@link DisableUserAutoSignResponse} */
  DisableUserAutoSign(data: DisableUserAutoSignRequest, config?: AxiosRequestConfig): AxiosPromise<DisableUserAutoSignResponse>;
  /** 查询转换任务状态 {@link GetTaskResultApiRequest} {@link GetTaskResultApiResponse} */
  GetTaskResultApi(data: GetTaskResultApiRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskResultApiResponse>;
  /** 修改企业回调配置 {@link ModifyApplicationCallbackInfoRequest} {@link ModifyApplicationCallbackInfoResponse} */
  ModifyApplicationCallbackInfo(data: ModifyApplicationCallbackInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationCallbackInfoResponse>;
  /** 更新企业部门 {@link ModifyIntegrationDepartmentRequest} {@link ModifyIntegrationDepartmentResponse} */
  ModifyIntegrationDepartment(data: ModifyIntegrationDepartmentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationDepartmentResponse>;
  /** 更新企业角色 {@link ModifyIntegrationRoleRequest} {@link ModifyIntegrationRoleResponse} */
  ModifyIntegrationRole(data: ModifyIntegrationRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationRoleResponse>;
  /** 模板发起合同-发起签署流程 {@link StartFlowRequest} {@link StartFlowResponse} */
  StartFlow(data: StartFlowRequest, config?: AxiosRequestConfig): AxiosPromise<StartFlowResponse>;
  /** 员工userid与客户系统openid解绑 {@link UnbindEmployeeUserIdWithClientOpenIdRequest} {@link UnbindEmployeeUserIdWithClientOpenIdResponse} */
  UnbindEmployeeUserIdWithClientOpenId(data: UnbindEmployeeUserIdWithClientOpenIdRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindEmployeeUserIdWithClientOpenIdResponse>;
  /** 更新企业员工信息 {@link UpdateIntegrationEmployeesRequest} {@link UpdateIntegrationEmployeesResponse} */
  UpdateIntegrationEmployees(data: UpdateIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateIntegrationEmployeesResponse>;
  /** 多文件上传 {@link UploadFilesRequest} {@link UploadFilesResponse} */
  UploadFiles(data: UploadFilesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFilesResponse>;
  /** 流程文件验签 {@link VerifyPdfRequest} {@link VerifyPdfResponse} */
  VerifyPdf(data: VerifyPdfRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyPdfResponse>;
}

export declare type Versions = ["2020-11-11"];

export default Ess;
