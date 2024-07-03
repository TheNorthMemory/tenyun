/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 企业超管信息 */
declare interface Admin {
  /** 超管名 */
  Name?: string | null;
  /** 超管手机号，打码显示示例值：138****1569 */
  Mobile?: string | null;
}

/** 代理相关应用信息，如集团主企业代子企业操作 */
declare interface Agent {
  /** 代理机构的应用编号,32位字符串，一般不用传 */
  AppId?: string;
  /** 被代理机构的应用号，一般不用传 */
  ProxyAppId?: string;
  /** 被代理机构在电子签平台的机构编号，集团代理下场景必传 */
  ProxyOrganizationId?: string;
  /** 被代理机构的经办人，一般不用传 */
  ProxyOperator?: string;
}

/** 签署方在使用个人印章签署控件（SIGN_SIGNATURE） 时可使用的签署方式 */
declare interface ApproverComponentLimitType {
  /** 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。 */
  RecipientId: string;
  /** 签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式，可多选签名方式：HANDWRITE-手写签名ESIGN-个人印章类型OCR_ESIGN-AI智能识别手写签名SYSTEM_ESIGN-系统签名 */
  Values: string[];
}

/** 合同参与者信息。 */
declare interface ApproverInfo {
  /** 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下:**0**：企业**1**：个人**3**：企业静默签署注：`类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。`**7**: 个人自动签署，适用于个人自动签场景。注: `个人自动签场景为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverType: number;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  ApproverName?: string;
  /** 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。请确认手机号所有方为此合同签署方。 */
  ApproverMobile?: string;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。 */
  OrganizationName?: string;
  /** 合同中的签署控件列表，列表中可支持下列多种签署控件,控件的详细定义参考开发者中心的Component结构体 个人签名/印章 企业印章 骑缝章等签署控件 */
  SignComponents?: Component[];
  /** 签署方经办人的证件类型，支持以下类型ID_CARD 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)OTHER_CARD_TYPE 其他证件注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverIdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  ApproverIdCardNumber?: string;
  /** 通知签署方经办人的方式, 有以下途径: **sms** : (默认)短信 **none** : 不通知注意：`如果使用的是通过文件发起合同（CreateFlowByFiles），NotifyType必须 是 sms 才会发送短信` */
  NotifyType?: string;
  /** 收据场景设置签署人角色类型, 可以设置如下****类型****: **1** :收款人 **2** :开具人 **3** :见证人注: `收据场景为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverRole?: number;
  /** 可以自定义签署人角色名：收款人、开具人、见证人等，长度不能超过20，只能由中文、字母、数字和下划线组成。注: `如果是用模板发起, 优先使用此处上传的, 如果不传则用模板的配置的` */
  ApproverRoleName?: string;
  /** 签署意愿确认渠道，默认为WEIXINAPP:人脸识别注: 将要废弃, 用ApproverSignTypes签署人签署合同时的认证方式代替, 新客户可请用ApproverSignTypes来设置 */
  VerifyChannel?: string[];
  /** 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：合同页数少于等于2页，阅读时间为3秒；合同页数为3到5页，阅读时间为5秒；合同页数大于等于6页，阅读时间为10秒。 */
  PreReadTime?: number;
  /** 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得注： 如果传进来的UserId已经实名， 则忽略ApproverName，ApproverIdCardType，ApproverIdCardNumber，ApproverMobile这四个入参（会用此UserId实名的身份证和登录的手机号覆盖） */
  UserId?: string;
  /** 在企微场景下使用，需设置参数为**WEWORKAPP**，以表明合同来源于企微。 */
  ApproverSource?: string;
  /** 在企业微信场景下，表明该合同流程为或签，其最大长度为64位字符串。所有参与或签的人员均需具备该标识。注意，在合同中，不同的或签参与人必须保证其CustomApproverTag唯一。如果或签签署人为本方企业微信参与人，则需要指定ApproverSource参数为WEWORKAPP。 */
  CustomApproverTag?: string;
  /** 可以控制签署方在签署合同时能否进行某些操作，例如拒签、转交他人等。详细操作可以参考开发者中心的ApproverOption结构体。 */
  ApproverOption?: ApproverOption;
  /** 指定个人签署方查看合同的校验方式,可以传值如下: **1** : （默认）人脸识别,人脸识别后才能合同内容 **2** : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）注: 如果合同流程设置ApproverVerifyType查看合同的校验方式, 则忽略此签署人的查看合同的校验方式此字段可传多个校验方式 */
  ApproverVerifyTypes?: number[];
  /** 您可以指定签署方签署合同的认证校验方式，可传递以下值：**1**：人脸认证，需进行人脸识别成功后才能签署合同；**2**：签署密码，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署；**3**：运营商三要素，需到运营商处比对手机号实名信息（名字、手机号、证件号）校验一致才能成功进行合同签署。默认为1(人脸认证 ),2(签署密码),3(运营商三要素)注：1. 用模板创建合同场景, 签署人的认证方式需要在配置模板的时候指定, 在创建合同重新指定无效3. 运营商三要素认证方式对手机号运营商及前缀有限制,可以参考[运营商支持列表类](https://qian.tencent.com/developers/company/mobile_support)得到具体的支持说明 */
  ApproverSignTypes?: number[];
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：**false**：（默认）不需要审批，直接签署。**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  ApproverNeedSignReview?: boolean;
  /** [用PDF文件创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles)时,如果设置了外层参数SignBeanTag=1(允许签署过程中添加签署控件),则可通过此参数明确规定合同所使用的签署控件类型（骑缝章、普通章法人章等）和具体的印章（印章ID或者印章类型）或签名方式。注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个），他方企业或个人只支持限制控件类型。` */
  AddSignComponentsLimits?: ComponentLimit[];
  /** 签署须知：支持传入富文本，最长字数：500个中文字符 */
  SignInstructionContent?: string;
  /** 签署人的签署截止时间，格式为Unix标准时间戳（秒）注: `若不设置此参数，则默认使用合同的截止时间，此参数暂不支持合同组子合同` */
  Deadline?: number;
  /** 签署人在合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体单行文本控件多行文本控件勾选框控件数字控件图片控件数据表格等填写控件具体使用说明可参考[为签署方指定填写控件](https://qian.tencent.cn/developers/company/createFlowByFiles/#指定签署方填写控件)注：`此参数仅在通过文件发起合同或者合同组时生效` */
  Components?: Component[];
}

/** 签署方信息，发起合同后可获取到对应的签署方信息，如角色ID，角色名称 */
declare interface ApproverItem {
  /** 签署方唯一编号 */
  SignId?: string | null;
  /** 签署方角色编号 */
  RecipientId?: string | null;
  /** 签署方角色名称 */
  ApproverRoleName?: string | null;
}

/** 签署人个性化能力信息 */
declare interface ApproverOption {
  /** 签署方是否可以拒签 **false** : ( 默认)可以拒签 **true** :不可以拒签 */
  NoRefuse?: boolean;
  /** 签署方是否可以转他人处理 **false** : ( 默认)可以转他人处理 **true** :不可以转他人处理 */
  NoTransfer?: boolean;
  /** 允许编辑签署人信息（嵌入式使用） 默认true-可以编辑 false-不可以编辑 */
  CanEditApprover?: boolean;
  /** 签署人信息补充类型，默认无需补充。 **1** : ( 动态签署人（可发起合同后再补充签署人信息）注：`企业自动签不支持动态补充`注：`使用动态签署人能力前，需登陆腾讯电子签控制台打开服务开关` */
  FillType?: number;
  /** 签署人阅读合同限制参数 取值： LimitReadTimeAndBottom，阅读合同必须限制阅读时长并且必须阅读到底 LimitReadTime，阅读合同仅限制阅读时长 LimitBottom，阅读合同仅限制必须阅读到底 NoReadTimeAndBottom，阅读合同不限制阅读时长且不限制阅读到底（白名单功能，请联系客户经理开白使用） */
  FlowReadLimit?: string;
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

/** 企业扩展服务授权列表详情 */
declare interface AuthInfoDetail {
  /** 扩展服务类型，和入参一致 */
  Type?: string | null;
  /** 扩展服务名称 */
  Name?: string | null;
  /** 授权员工列表 */
  HasAuthUserList?: HasAuthUser[] | null;
  /** 授权企业列表（企业自动签时，该字段有值） */
  HasAuthOrganizationList?: HasAuthOrganization[] | null;
  /** 授权员工列表总数 */
  AuthUserTotal?: number | null;
  /** 授权企业列表总数 */
  AuthOrganizationTotal?: number | null;
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
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。**0**: (默认) 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人`**1**: 不绑定自动签账号许可开通，后续使用合同份额进行合同发起 */
  LicenseType?: number;
  /** 开通成功后前端页面跳转的url，此字段的用法场景请联系客户经理确认。注：`仅支持H5开通场景`, `跳转链接仅支持 https:// , qianapp:// 开头`跳转场景：**贵方H5 -> 腾讯电子签H5 -> 贵方H5** : JumpUrl格式: https://YOUR_CUSTOM_URL/xxxx，只需满足 https:// 开头的正确且合规的网址即可。**贵方原生App -> 腾讯电子签H5 -> 贵方原生App** : JumpUrl格式: qianapp://YOUR_CUSTOM_URL，只需满足 qianapp:// 开头的URL即可。`APP实现方，需要拦截Webview地址跳转，发现url是qianapp:// 开头时跳转到原生页面。`APP拦截地址跳转可参考：Android，IOS 成功结果返回：若贵方需要在跳转回时通过链接query参数提示开通成功，JumpUrl中的query应携带如下参数：`appendResult=qian`。这样腾讯电子签H5会在跳转回的url后面会添加query参数提示贵方签署成功，例如： qianapp://YOUR_CUSTOM_URL?action=sign&result=success&from=tencent_ess */
  JumpUrl?: string;
}

/** 用户计费使用情况详情 */
declare interface BillUsageDetail {
  /** 合同流程ID，为32位字符串。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId?: string;
  /** 合同经办人名称如果有多个经办人用分号隔开。 */
  OperatorName?: string;
  /** 发起方组织机构名称 */
  CreateOrganizationName?: string;
  /** 合同流程的名称。 */
  FlowName?: string;
  /** 当前合同状态,如下是状态码对应的状态。**0**: 还没有发起**1**: 等待签署**2**: 部分签署 **3**: 拒签**4**: 已签署 **5**: 已过期 **6**: 已撤销 **7**: 还没有预发起**8**: 等待填写**9**: 部分填写 **10**: 拒填**11**: 已解除 */
  Status?: number;
  /** 查询的套餐类型对应关系如下:**CloudEnterprise**: 企业版合同**SingleSignature**: 单方签章**CloudProve**: 签署报告**CloudOnlineSign**: 腾讯会议在线签约**ChannelWeCard**: 微工卡**SignFlow**: 合同套餐**SignFace**: 签署意愿（人脸识别）**SignPassword**: 签署意愿（密码）**SignSMS**: 签署意愿（短信）**PersonalEssAuth**: 签署人实名（腾讯电子签认证）**PersonalThirdAuth**: 签署人实名（信任第三方认证）**OrgEssAuth**: 签署企业实名**FlowNotify**: 短信通知**AuthService**: 企业工商信息查询 */
  QuotaType?: string;
  /** 合同使用量注: `如果消耗类型是撤销返还，此值为负值代表返还的合同数量` */
  UseCount?: number;
  /** 消耗的时间戳，格式为Unix标准时间戳（秒）。 */
  CostTime?: number;
  /** 消耗的套餐名称 */
  QuotaName?: string;
  /** 消耗类型**1**.扣费**2**.撤销返还 */
  CostType?: number;
  /** 备注 */
  Remark?: string;
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

/** 撤销失败的流程信息 */
declare interface CancelFailureFlow {
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
  /** 撤销失败原因 */
  Reason?: string;
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

/** 此结构体 (Component) 用于描述控件属性。在通过文件发起合同时，对应的component有三种定位方式1. 绝对定位方式 （可以通过 [PDF坐标计算助手](https://qian.tencent.com/developers/tools/template-editor)计算控件的坐标）2. 表单域(FIELD)定位方式3. 关键字(KEYWORD)定位方式，使用关键字定位时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找 */
declare interface Component {
  /** **如果是Component填写控件类型，则可选的字段为**： TEXT : 普通文本控件，输入文本字符串； MULTI_LINE_TEXT : 多行文本控件，输入文本字符串； CHECK_BOX : 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串； FILL_IMAGE : 图片控件，ComponentValue 填写图片的资源 ID； DYNAMIC_TABLE : 动态表格控件； ATTACHMENT : 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分隔； SELECTOR : 选择器控件，ComponentValue填写选择的字符串内容； DATE : 日期控件；默认是格式化为xxxx年xx月xx日字符串； WATERMARK : 水印控件；只能分配给发起方，必须设置ComponentExtra； DISTRICT : 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；**如果是SignComponent签署控件类型，需要根据签署人的类型可选的字段为*** 企业方 SIGN_SEAL : 签署印章控件； SIGN_DATE : 签署日期控件； SIGN_SIGNATURE : 用户签名控件； SIGN_PAGING_SEAL : 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight SIGN_OPINION : 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认； SIGN_LEGAL_PERSON_SEAL : 企业法定代表人控件。* 个人方 SIGN_DATE : 签署日期控件； SIGN_SIGNATURE : 用户签名控件； 注：` 表单域的控件不能作为印章和签名控件` */
  ComponentType: string;
  /** **在绝对定位方式和关键字定位方式下**，指定控件的高度， 控件高度是指控件在PDF文件中的高度，单位为pt（点）。 */
  ComponentHeight: number;
  /** **在绝对定位方式和关键字定位方式下**，指定控件宽度，控件宽度是指控件在PDF文件中的宽度，单位为pt（点）。 */
  ComponentWidth: number;
  /** **在绝对定位方式方式下**，指定控件所在PDF文件上的页码**在使用文件发起的情况下**，绝对定位方式的填写控件和签署控件支持使用负数来指定控件在PDF文件上的页码，使用负数时，页码从最后一页开始。例如：ComponentPage设置为-1，即代表在PDF文件的最后一页，以此类推。注：1. 页码编号是从1开始编号的。2. 页面编号不能超过PDF文件的页码总数。如果指定的页码超过了PDF文件的页码总数，在填写和签署时会出现错误，导致无法正常进行操作。 */
  ComponentPage: number;
  /** **在绝对定位方式和关键字定位方式下**，可以指定控件横向位置的位置，单位为pt（点）。 */
  ComponentPosX: number;
  /** **在绝对定位方式和关键字定位方式下**，可以指定控件纵向位置的位置，单位为pt（点）。 */
  ComponentPosY: number;
  /** 【暂未使用】控件所属文件的序号（取值为：0-N）。 目前单文件的情况下，值一直为0 */
  FileIndex: number;
  /** 控件生成的方式： NORMAL : 绝对定位控件 FIELD : 表单域 KEYWORD : 关键字（设置关键字时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找） */
  GenerateMode?: string;
  /** 控件唯一ID。**在绝对定位方式方式下**，ComponentId为控件的ID，长度不能超过30，只能由中文、字母、数字和下划线组成，可以在后续的操作中使用该名称来引用控件。**在关键字定位方式下**，ComponentId不仅为控件的ID，也是关键字整词。此方式下可以通过"^"来决定是否使用关键字整词匹配能力。例：- 如传入的关键字"^甲方签署^"</font >，则会在PDF文件中有且仅有"甲方签署"关键字的地方（前后不能有其他字符</font >）进行对应操作。- 如传入的关键字为"甲方签署</font >"，则PDF文件中每个出现关键字的位置（前后可以有其他字符</font >）都会执行相应操作。注：`控件ID可以在一个PDF中不可重复`点击查看ComponentId在模板编辑页面的位置 */
  ComponentId?: string;
  /** **在绝对定位方式方式下**，ComponentName为控件名，长度不能超过20，只能由中文、字母、数字和下划线组成，可以在后续的操作中使用该名称来引用控件。**在表单域定位方式下**，ComponentName不仅为控件名，也是表单域名称。注：`控件名可以在一个PDF中可以重复`点击查看ComponentName在模板页面的位置 */
  ComponentName?: string;
  /** 如果是填写控件，ComponentRequired表示在填写页面此控件是否必填false（默认）：可以不填写true ：必须填写此填写控件如果是签署控件，签批控件中签署意见等可以不填写， 其他签署控件不受此字段影响 */
  ComponentRequired?: boolean;
  /** **在通过接口拉取控件信息场景下**，为出参参数，此控件归属的参与方的角色ID角色（即RecipientId），**发起合同时候不要填写此字段留空即可** */
  ComponentRecipientId?: string;
  /** **在所有的定位方式下**，控件的扩展参数，为JSON格式，不同类型的控件会有部分非通用参数。ComponentType为TEXT、MULTI_LINE_TEXT时，支持以下参数： Font：目前只支持黑体、宋体 FontSize： 范围12 :72 FontAlign： Left/Right/Center，左对齐/居中/右对齐 FontColor：字符串类型，格式为RGB颜色数字参数样例：`{"FontColor":"255,0,0","FontSize":12}`ComponentType为DATE时，支持以下参数： Font：目前只支持黑体、宋体 FontSize： 范围12 :72参数样例：`{"FontColor":"255,0,0","FontSize":12}`ComponentType为WATERMARK时，支持以下参数： Font：目前只支持黑体、宋体 FontSize： 范围6 :24 Opacity： 透明度，范围0 :1 Density： 水印样式，1-宽松，2-标准（默认值），3-密集， SubType： 水印类型：CUSTOM_WATERMARK-自定义内容，PERSON_INFO_WATERMARK-访问者信息参数样例：`"{\"Font\":\"黑体\",\"FontSize\":20,\"Opacity\":0.1,\"Density\":2,\"SubType\":\"PERSON_INFO_WATERMARK\"}"`ComponentType为FILL_IMAGE时，支持以下参数： NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true : 不居中 FillMethod : int. 填充方式。0-铺满（默认）；1-等比例缩放ComponentType为SIGN_SIGNATURE类型时，可以通过**ComponentTypeLimit**参数控制签名方式 HANDWRITE : 需要实时手写的手写签名 HANDWRITTEN_ESIGN : 长效手写签名， 是使用保存到个人中心的印章列表的手写签名(并且包含HANDWRITE) OCR_ESIGN : AI智能识别手写签名 ESIGN : 个人印章类型 SYSTEM_ESIGN : 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署） IMG_ESIGN : 图片印章(该类型支持用户在签署将上传的PNG格式的图片作为签名)参考样例：`{"ComponentTypeLimit": ["SYSTEM_ESIGN"]}`印章的对应关系参考下图![image](https://qcloudimg.tencent-cloud.cn/raw/ee0498856c060c065628a0c5ba780d6b.jpg)ComponentType为SIGN_SEAL 或者 SIGN_PAGING_SEAL类型时，可以通过**ComponentTypeLimit**参数控制签署方签署时要使用的印章类型，支持指定以下印章类型 OFFICIAL : 企业公章 CONTRACT : 合同专用章 FINANCE : 财务专用章 PERSONNEL : 人事专用章参考样例：`{\"ComponentTypeLimit\":[\"PERSONNEL\",\"FINANCE\"]}` 表示改印章签署区,客户需使用人事专用章或财务专用章盖章签署。ComponentType为SIGN_DATE时，支持以下参数： Font :字符串类型目前只支持"黑体"、"宋体"，如果不填默认为"黑体" FontSize : 数字类型，范围6-72，默认值为12 FontAlign : 字符串类型，可取Left/Right/Center，对应左对齐/居中/右对齐 Format : 字符串类型，日期格式，必须是以下五种之一 “yyyy m d”，”yyyy年m月d日”，”yyyy/m/d”，”yyyy-m-d”，”yyyy.m.d”。 Gaps : 字符串类型，仅在Format为“yyyy m d”时起作用，格式为用逗号分开的两个整数，例如”2,2”，两个数字分别是日期格式的前后两个空隙中的空格个数如果extra参数为空，默认为”yyyy年m月d日”格式的居中日期特别地，如果extra中Format字段为空或无法被识别，则extra参数会被当作默认值处理（Font，FontSize，Gaps和FontAlign都不会起效）参数样例： ` "{"Format":"yyyy m d","FontSize":12,"Gaps":"2,2", "FontAlign":"Right"}"`ComponentType为SIGN_SEAL类型时，支持以下参数： PageRanges :PageRange的数组，通过PageRanges属性设置该印章在PDF所有页面上盖章（适用于标书在所有页面盖章的情况）参数样例：` "{"PageRanges":[{"BeginPage":1,"EndPage":-1}]}"`关键字模式下支持关键字找不到的情况下不进行报错的设置 IgnoreKeywordError :1-关键字查找不到时不进行报错场景说明：如果使用关键字进行定位，但是指定的PDF文件中又没有设置的关键字时，发起合同会进行关键字是否存在的校验，如果关键字不存在，会进行报错返回。如果不希望进行报错，可以设置"IgnoreKeywordError"来忽略错误。请注意，如果关键字签署控件对应的签署方在整个PDF文件中一个签署控件都没有，还是会触发报错逻辑。参数样例：` "{"IgnoreKeywordError":1}"` */
  ComponentExtra?: string;
  /** **在通过接口拉取控件信息场景下**，为出参参数，此控件是否通过表单域定位方式生成，默认false-不是，**发起合同时候不要填写此字段留空即可** */
  IsFormType?: boolean;
  /** 控件填充vaule，ComponentType和传入值类型对应关系： TEXT : 文本内容 MULTI_LINE_TEXT : 文本内容，可以用 \n 来控制换行位置 CHECK_BOX : true/false FILL_IMAGE、ATTACHMENT : 附件的FileId，需要通过UploadFiles接口上传获取 SELECTOR : 选项值 DYNAMIC_TABLE - 传入json格式的表格内容，详见说明：[数据表格](https://qian.tencent.com/developers/company/dynamic_table) DATE : 格式化为：xxxx年xx月xx日（例如2024年05年28日） SIGN_SEAL : 印章ID，于控制台查询获取， [点击查看在控制台上位置](https://qcloudimg.tencent-cloud.cn/raw/f7b0f2ea4a534aada4b893dbf9671eae.png) SIGN_PAGING_SEAL : 可以指定印章ID，于控制台查询获取， [点击查看在控制台上位置](https://qcloudimg.tencent-cloud.cn/raw/f7b0f2ea4a534aada4b893dbf9671eae.png)控件值约束说明： 特殊控件 填写约束 企业全称控件 企业名称中文字符中文括号 统一社会信用代码控件 企业注册的统一社会信用代码 法人名称控件 最大50个字符，2到25个汉字或者1到50个字母 签署意见控件 签署意见最大长度为50字符 签署人手机号控件 国内手机号 13,14,15,16,17,18,19号段长度11位 签署人身份证控件 合法的身份证号码检查 控件名称 控件名称最大长度为20字符，不支持表情 单行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 多行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 勾选框控件 选择填字符串true，不选填字符串false 选择器控件 同单行文本控件约束，填写选择值中的字符串 数字控件 请输入有效的数字(可带小数点) 日期控件 格式：yyyy年mm月dd日 附件控件 JPG或PNG图片，上传数量限制，1到6个，最大6个附件，填写上传的资源ID 图片控件 JPG或PNG图片，填写上传的图片资源ID 邮箱控件 有效的邮箱地址, w3c标准 地址控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 省市区控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 性别控件 选择值中的字符串 学历控件 选择值中的字符串 水印控件 水印控件设置为CUSTOM_WATERMARK类型时的水印内容 注： `部分特殊控件需要在控制台配置模板形式创建` */
  ComponentValue?: string;
  /** **如果控件是关键字定位方式**，可以对关键字定位出来的区域进行横坐标方向的调整，单位为pt（点）。例如，如果关键字定位出来的区域偏左或偏右，可以通过调整横坐标方向的参数来使控件位置更加准确。注意： `向左调整设置为负数， 向右调整设置成正数` */
  OffsetX?: number | null;
  /** **如果控件是关键字定位方式**，可以对关键字定位出来的区域进行纵坐标方向的调整，单位为pt（点）。例如，如果关键字定位出来的区域偏上或偏下，可以通过调整纵坐标方向的参数来使控件位置更加准确。注意： `向上调整设置为负数， 向下调整设置成正数` */
  OffsetY?: number | null;
  /** **如果控件是关键字定位方式**，指定关键字排序规则时，可以选择Positive或Reverse两种排序方式。 Positive :表示正序，即根据关键字在PDF文件内的顺序进行排列 Reverse :表示倒序，即根据关键字在PDF文件内的反序进行排列在指定KeywordIndexes时，如果使用Positive排序方式，0代表在PDF内查找内容时，查找到的第一个关键字；如果使用Reverse排序方式，0代表在PDF内查找内容时，查找到的最后一个关键字。 */
  KeywordOrder?: string;
  /** **如果控件是关键字定位方式**，在KeywordPage中指定关键字页码时，将只会在该页码中查找关键字，非该页码的关键字将不会查询出来。如果不设置查找所有页面中的关键字。 */
  KeywordPage?: number;
  /** **如果控件是关键字定位方式**，关键字生成的区域的对齐方式， 可以设置下面的值 Middle :居中 Below :正下方 Right :正右方 LowerRight :右下角 UpperRight :右上角。示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方 */
  RelativeLocation?: string;
  /** **如果控件是关键字定位方式**，关键字索引是指在PDF文件中存在多个相同的关键字时，通过索引指定使用哪一个关键字作为最后的结果。可以通过指定多个索引来同时使用多个关键字。例如，[0,2]表示使用PDF文件内第1个和第3个关键字位置作为最后的结果。注意：关键字索引是从0开始计数的 */
  KeywordIndexes?: number[];
  /** **web嵌入发起合同场景下**， 是否锁定填写和签署控件值不允许嵌入页面进行编辑false（默认）：不锁定控件值，允许在页面编辑控件值true：锁定控件值，在页面编辑控件值 */
  LockComponentValue?: boolean | null;
  /** **web嵌入发起合同场景下**，是否禁止移动和删除填写和签署控件 false（默认） :不禁止移动和删除控件 true : 可以移动和删除控件 */
  ForbidMoveAndDelete?: boolean | null;
  /** 【暂未使用】日期签署控件的字号，默认为 12 */
  ComponentDateFontSize?: number;
  /** 【暂未使用】第三方应用集成平台模板控件 ID 标识 */
  ChannelComponentId?: string;
  /** 【暂未使用】第三方应用集成中子客企业控件来源。 0 :平台指定； 1 :用户自定义 */
  ChannelComponentSource?: number;
}

/** 签署控件的类型和范围限制条件，用于控制文件发起后签署人拖拽签署区时可使用的控件类型和具体的印章或签名方式。 */
declare interface ComponentLimit {
  /** 控件类型，支持以下类型SIGN_SEAL : 印章控件SIGN_PAGING_SEAL : 骑缝章控件SIGN_LEGAL_PERSON_SEAL : 企业法定代表人控件SIGN_SIGNATURE : 用户签名控件 */
  ComponentType: string;
  /** 签署控件类型的值(可选)，用与限制签署时印章或者签名的选择范围1.当ComponentType 是 SIGN_SEAL 或者 SIGN_PAGING_SEAL 时可传入企业印章Id（支持多个）或者以下印章类型 OFFICIAL : 企业公章 CONTRACT : 合同专用章 FINANCE : 财务专用章 PERSONNEL : 人事专用章**注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个),他方企业签署人只能限制类型.若同时指定了印章类型和印章Id,以印章Id为主,印章类型会被忽略`**2.当ComponentType 是 SIGN_SIGNATURE 时可传入以下类型（支持多个）HANDWRITE : 需要实时手写的手写签名HANDWRITTEN_ESIGN : 长效手写签名， 是使用保存到个人中心的印章列表的手写签名(并且包含HANDWRITE)OCR_ESIGN : OCR印章（智慧手写签名）ESIGN : 个人印章SYSTEM_ESIGN : 系统印章3.当ComponentType 是 SIGN_LEGAL_PERSON_SEAL 时无需传递此参数。 */
  ComponentValue?: string[];
}

/** 创建合同个性化参数 */
declare interface CreateFlowOption {
  /** 是否允许修改发起合同时确认弹窗的合同信息（合同名称、合同类型、签署截止时间），若不允许编辑，则表单字段将被禁止输入。true：允许编辑false：不允许编辑（默认值） */
  CanEditFlow?: boolean;
  /** 是否允许编辑模板控件true:允许编辑模板控件信息false:不允许编辑模板控件信息（默认值） */
  CanEditFormField?: boolean;
  /** 发起页面隐藏合同名称展示true:发起页面隐藏合同名称展示false:发起页面不隐藏合同名称展示（默认值） */
  HideShowFlowName?: boolean;
  /** 发起页面隐藏合同类型展示true:发起页面隐藏合同类型展示false:发起页面不隐藏合同类型展示（默认值） */
  HideShowFlowType?: boolean;
  /** 发起页面隐藏合同截止日期展示true:发起页面隐藏合同截止日期展示false:发起页面不隐藏合同截止日期展示（默认值） */
  HideShowDeadline?: boolean;
  /** 发起页面允许跳过添加签署人环节true:发起页面允许跳过添加签署人环节false:发起页面不允许跳过添加签署人环节（默认值） */
  CanSkipAddApprover?: boolean;
  /** 文件发起页面跳过文件上传步骤true:文件发起页面跳过文件上传步骤false:文件发起页面不跳过文件上传步骤（默认值） */
  SkipUploadFile?: boolean;
  /** 禁止编辑填写控件true:禁止编辑填写控件false:允许编辑填写控件（默认值） */
  ForbidEditFillComponent?: boolean;
  /** 定制化发起合同弹窗的描述信息，描述信息最长500字符 */
  CustomCreateFlowDescription?: string;
  /** 禁止添加签署方，若为true则在发起流程的可嵌入页面隐藏“添加签署人按钮” */
  ForbidAddApprover?: boolean;
  /** 禁止设置设置签署流程属性 (顺序、合同签署认证方式等)，若为true则在发起流程的可嵌入页面隐藏签署流程设置面板 */
  ForbidEditFlowProperties?: boolean;
  /** 在发起流程的可嵌入页面要隐藏的控件列表，和 ShowComponentTypes 参数 只能二选一使用，具体的控件类型如下SIGN_SIGNATURE : 个人签名/印章SIGN_SEAL : 企业印章SIGN_PAGING_SEAL : 骑缝章SIGN_LEGAL_PERSON_SEAL : 法定代表人章SIGN_APPROVE : 签批SIGN_OPINION : 签署意见BUSI-FULL-NAME : 企业全称BUSI-CREDIT-CODE : 统一社会信用代码BUSI-LEGAL-NAME : 法人/经营者姓名PERSONAL-NAME : 签署人姓名PERSONAL-MOBILE : 签署人手机号PERSONAL-IDCARD-TYPE : 签署人证件类型PERSONAL-IDCARD : 签署人证件号TEXT : 单行文本MULTI_LINE_TEXT : 多行文本CHECK_BOX : 勾选框SELECTOR : 选择器DIGIT : 数字DATE : 日期FILL_IMAGE : 图片ATTACHMENT : 附件EMAIL : 邮箱LOCATION : 地址EDUCATION : 学历GENDER : 性别DISTRICT : 省市区 */
  HideComponentTypes?: string[];
  /** 在发起流程的可嵌入页面要显示的控件列表，和 HideComponentTypes 参数 只能二选一使用，具体的控件类型如下SIGN_SIGNATURE : 个人签名/印章SIGN_SEAL : 企业印章SIGN_PAGING_SEAL : 骑缝章SIGN_LEGAL_PERSON_SEAL : 法定代表人章SIGN_APPROVE : 签批SIGN_OPINION : 签署意见BUSI-FULL-NAME : 企业全称BUSI-CREDIT-CODE : 统一社会信用代码BUSI-LEGAL-NAME : 法人/经营者姓名PERSONAL-NAME : 签署人姓名PERSONAL-MOBILE : 签署人手机号PERSONAL-IDCARD-TYPE : 签署人证件类型PERSONAL-IDCARD : 签署人证件号TEXT : 单行文本MULTI_LINE_TEXT : 多行文本CHECK_BOX : 勾选框SELECTOR : 选择器DIGIT : 数字DATE : 日期FILL_IMAGE : 图片ATTACHMENT : 附件EMAIL : 邮箱LOCATION : 地址EDUCATION : 学历GENDER : 性别DISTRICT : 省市区 */
  ShowComponentTypes?: string[];
  /** 发起流程的可嵌入页面结果页配置 */
  ResultPageConfig?: CreateResultPageConfig[];
}

/** 发起流程的可嵌入页面操作结果页配置 */
declare interface CreateResultPageConfig {
  /** 0 : 发起审批成功页面（通过接口创建发起流程web页面发起时设置了NeedCreateReview参数为true） */
  Type: number;
  /** 结果页标题，不超过50字 */
  Title: string;
  /** 结果页描述，不超过200字 */
  Description?: string;
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

/** 集成版员工部门信息。 */
declare interface Department {
  /** 部门ID。 */
  DepartmentId?: string;
  /** 部门名称。 */
  DepartmentName?: string;
}

/** 视频认证结果 */
declare interface DetectInfoVideoData {
  /** 活体视频的base64编码，mp4格式注:`需进行base64解码获取活体视频文件` */
  LiveNessVideo?: string | null;
}

/** 个性化参数 */
declare interface EmbedUrlOption {
  /** 合同详情预览，允许展示控件信息true：允许在合同详情页展示控件false：（默认）不允许在合同详情页展示控件 */
  ShowFlowDetailComponent?: boolean;
  /** 模板预览，允许展示模板控件信息 true :允许在模板预览页展示控件 false :（默认）不允许在模板预览页展示控件 */
  ShowTemplateComponent?: boolean;
}

/** 扩展服务开通和授权的详细信息 */
declare interface ExtendAuthInfo {
  /** 扩展服务的类型，可能是以下值：OPEN_SERVER_SIGN：企业自动签署BATCH_SIGN：批量签署OVERSEA_SIGN：企业与港澳台居民签署合同AGE_LIMIT_EXPANSION：拓宽签署方年龄限制MOBILE_CHECK_APPROVER：个人签署方仅校验手机号HIDE_OPERATOR_DISPLAY：隐藏合同经办人姓名ORGANIZATION_OCR_FALLBACK：正楷临摹签名失败后更换其他签名类型ORGANIZATION_FLOW_NOTIFY_TYPE：短信通知签署方HIDE_ONE_KEY_SIGN：个人签署方手动签字PAGING_SEAL：骑缝章ORGANIZATION_FLOW_PASSWD_NOTIFY：签署密码开通引导 */
  Type?: string;
  /** 扩展服务的名称 */
  Name?: string;
  /** 扩展服务的开通状态：ENABLE : 已开通DISABLE : 未开通 */
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
  /** 用户传入的手机号，明文展示 */
  Mobile?: string;
  /** 失败原因 */
  Reason?: string;
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。 */
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

/** 补充签署人信息- RecipientId 必须指定- 通过企业微信自定义账号ID补充签署人时，ApproverSource 和 CustomUserId 必填，ApproverSource取值：WEWORKAPP- 通过二要素（姓名/手机号）补充签署人时，ApproverName 和 ApproverMobile 必填，ApproverSource设置为空- 补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充 */
declare interface FillApproverInfo {
  /** 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。模板发起合同时，该参数为必填项。文件发起合同是，该参数无需传值。如果开发者后序用合同模板发起合同，建议保存此值，在用合同模板发起合同中需此值绑定对应的签署经办人 。 */
  RecipientId: string;
  /** 签署人来源WEWORKAPP: 企业微信仅【企微或签】时指定WEWORKAPP */
  ApproverSource?: string;
  /** 企业微信UserId当ApproverSource为WEWORKAPP的企微或签场景下，必须指企业自有应用获取企业微信的UserId */
  CustomUserId?: string;
  /** 补充企业签署人员工姓名 */
  ApproverName?: string;
  /** 补充企业签署人员工手机号 */
  ApproverMobile?: string;
  /** 补充企业动态签署人时，需要指定对应企业名称 */
  OrganizationName?: string;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD 中国大陆居民身份证HONGKONG_AND_MACAO 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)OTHER_CARD_TYPE 其他证件注: `1.其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。``2.补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充。` */
  ApproverIdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。注：`补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充。` */
  ApproverIdCardNumber?: string;
  /** 合同流程ID，补充合同组子合同动态签署人时必传。 */
  FlowId?: string;
}

/** 批量补充签署人时，补充失败的报错说明 */
declare interface FillError {
  /** 为签署方经办人在签署合同中的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。与入参中补充的签署人角色ID对应，批量补充部分失败返回对应的错误信息。 */
  RecipientId?: string | null;
  /** 补充失败错误说明 */
  ErrMessage?: string | null;
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
  /** 自定义签署人角色 */
  ApproverRoleName?: string | null;
}

/** 签署链接信息。 */
declare interface FlowApproverUrlInfo {
  /** 签署短链接。注意:1. 该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。2. 该链接不支持小程序嵌入，仅支持移动端浏览器打开。3. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  SignUrl?: string;
  /** 签署人类型。- **1**: 个人 */
  ApproverType?: number;
  /** 签署人姓名。 */
  ApproverName?: string;
  /** 签署人手机号。 */
  ApproverMobile?: string;
  /** 签署长链接。注意:1. 该链接有效期为**30分钟**，同时需要注意保密，不要外泄给无关用户。2. 该链接不支持小程序嵌入，仅支持**移动端浏览器**打开。3. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  LongUrl?: string;
}

/** 批量签署合同相关信息，指定批量签署合同和签署方的信息，用于补充动态签署人。 */
declare interface FlowBatchApproverInfo {
  /** 合同流程ID。 */
  FlowId?: string;
  /** 签署节点ID，用于生成动态签署人链接完成领取。注：`生成动态签署人补充链接时必传。` */
  RecipientId?: string;
}

/** 批量签署合同相关信息，指定批量签署合同和签署方的信息，用于补充动态签署人。 */
declare interface FlowBatchUrlInfo {
  /** 批量签署合同和签署方的信息，用于补充动态签署人。 */
  FlowBatchApproverInfos?: FlowBatchApproverInfo[];
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
  /** 在指定签署方时，可以选择企业B端或个人C端等不同的参与者类型，可选类型如下： 0 :企业B端。 1 :个人C端。 3 :企业B端静默（自动）签署，无需签署人参与，自动签署可以参考自动签署使用说明文档。 7 :个人C端自动签署，适用于个人自动签场景。注: 个人自动签场景为白名单功能，使用前请联系对接的客户经理沟通。 */
  ApproverType: number;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。注: `当approverType=0(企业签署方) 或 approverType=3(企业静默签署)时，必须指定` */
  OrganizationName?: string;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。在未指定签署人电子签UserId情况下，为必填参数 */
  ApproverName?: string;
  /** 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。 此手机号用于通知和用户的实名认证等环境，请确认手机号所有方为此合同签署方。注：`在未指定签署人电子签UserId情况下，为必填参数` */
  ApproverMobile?: string;
  /** 证件类型，支持以下类型ID_CARD: 居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  ApproverIdCardType?: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  ApproverIdCardNumber?: string;
  /** 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。模板发起合同时，该参数为必填项，可以通过[查询模板信息接口](https://qian.tencent.com/developers/companyApis/templatesAndFiles/DescribeFlowTemplates)获得。文件发起合同时，该参数无需传值。如果开发者后续用合同模板发起合同，建议保存此值，在用合同模板发起合同中需此值绑定对应的签署经办人 。 */
  RecipientId?: string;
  /** 签署意愿确认渠道，默认为WEIXINAPP:人脸识别注: 将要废弃</font >, `用ApproverSignTypes签署人签署合同时的认证方式代替, 新客户可请用ApproverSignTypes来设置` */
  VerifyChannel?: string[];
  /** 通知签署方经办人的方式, 有以下途径: **sms** : (默认)短信 **none** : 不通知注: `既是发起方又是签署方时，不给此签署方发送短信` */
  NotifyType?: string;
  /** 合同强制需要阅读全文，无需传此参数 */
  IsFullText?: boolean;
  /** 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：合同页数少于等于2页，阅读时间为3秒；合同页数为3到5页，阅读时间为5秒；合同页数大于等于6页，阅读时间为10秒。 */
  PreReadTime?: number;
  /** 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得注： 如果传进来的UserId已经实名， 则忽略ApproverName，ApproverIdCardType，ApproverIdCardNumber，ApproverMobile这四个入参（会用此UserId实名的身份证和登录的手机号覆盖） */
  UserId?: string;
  /** 字段已经废弃，当前只支持true，默认为true */
  Required?: boolean;
  /** 在企微场景下使用，需设置参数为**WEWORKAPP**，以表明合同来源于企微。 */
  ApproverSource?: string;
  /** 在企业微信场景下，表明该合同流程为或签，其最大长度为64位字符串。所有参与或签的人员均需具备该标识。注意，在合同中，不同的或签参与人必须保证其CustomApproverTag唯一。如果或签签署人为本方企业微信参与人，则需要指定ApproverSource参数为WEWORKAPP。 */
  CustomApproverTag?: string;
  /** 已经废弃, 快速注册相关信息 */
  RegisterInfo?: RegisterInfo;
  /** 签署人个性化能力值，如是否可以转发他人处理、是否可以拒签、是否为动态补充签署人等功能开关。 */
  ApproverOption?: ApproverOption;
  /** 签署完前端跳转的url，暂未使用 */
  JumpUrl?: string;
  /** 签署人的签署ID在CreateFlow、CreatePrepareFlow等发起流程时不需要传入此参数，电子签后台系统会自动生成。在CreateFlowSignUrl、CreateBatchQuickSignUrl等生成签署链接时，可以通过查询详情接口获取签署人的SignId，然后可以将此值传入，为该签署人创建签署链接。这样可以避免重复传输姓名、手机号、证件号等其他信息。 */
  SignId?: string;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：**false**：（默认）不需要审批，直接签署。**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  ApproverNeedSignReview?: boolean;
  /** 签署人签署控件， 此参数仅针对文件发起（CreateFlowByFiles）生效合同中的签署控件列表，列表中可支持下列多种签署控件,控件的详细定义参考开发者中心的Component结构体 个人签名/印章 企业印章 骑缝章等签署控件`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主` */
  SignComponents?: Component[];
  /** 签署人填写控件 此参数仅针对文件发起（CreateFlowByFiles）生效合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体单行文本控件多行文本控件勾选框控件数字控件图片控件动态表格等填写控件`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主` */
  Components?: Component[];
  /** 当签署方控件类型为 SIGN_SIGNATURE 时，可以指定签署方签名方式。如果不指定，签署人可以使用所有的签名类型，可指定的签名类型包括： HANDWRITE :需要实时手写的手写签名。 HANDWRITTEN_ESIGN :长效手写签名， 是使用保存到个人中心的印章列表的手写签名。(并且包含HANDWRITE) OCR_ESIGN :AI智能识别手写签名。 ESIGN :个人印章类型。 IMG_ESIGN : 图片印章。该类型支持用户在签署将上传的PNG格式的图片作为签名。 SYSTEM_ESIGN :系统签名。该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署。各种签名的样式可以参考下图：![image](https://qcloudimg.tencent-cloud.cn/raw/ee0498856c060c065628a0c5ba780d6b.jpg) */
  ComponentLimitType?: string[];
  /** 指定个人签署方查看合同的校验方式,可以传值如下: **1** : （默认）人脸识别,人脸识别后才能合同内容 **2** : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）注: 如果合同流程设置ApproverVerifyType查看合同的校验方式, 则忽略此签署人的查看合同的校验方式此字段可传多个校验方式`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主`. */
  ApproverVerifyTypes?: number[];
  /** 您可以指定签署方签署合同的认证校验方式，可传递以下值：**1**：人脸认证，需进行人脸识别成功后才能签署合同；**2**：签署密码，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署；**3**：运营商三要素，需到运营商处比对手机号实名信息（名字、手机号、证件号）校验一致才能成功进行合同签署。注：默认情况下，认证校验方式为人脸认证和签署密码两种形式；您可以传递多种值，表示可用多种认证校验方式。注:`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主` */
  ApproverSignTypes?: number[];
  /** 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。注：`不指定该值时，默认为签署方自行选择。` */
  SignTypeSelector?: number;
  /** 签署人的签署截止时间，格式为Unix标准时间戳（秒）, 超过此时间未签署的合同变成已过期状态，不能在继续签署注: `若不设置此参数，则默认使用合同的截止时间，此参数暂不支持合同组子合同` */
  Deadline?: number;
  /** 视频核身意图配置，可指定问答模式或者点头模式的语音文本。注: `1.视频认证为白名单功能，使用前请联系对接的客户经理沟通。``2.使用视频认证必须指定签署认证方式为人脸（即ApproverSignTypes）。` */
  Intention?: Intention;
}

/** 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息 */
declare interface FlowDetailInfo {
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowName?: string;
  /** 合同流程的类别分类（如销售合同/入职合同等）。 */
  FlowType?: string | null;
  /** 合同流程当前的签署状态, 会存在下列的状态值 **0** : 未开启流程(合同中不存在填写环节) **1** : 待签署 **2** : 部分签署 **3** : 已拒签 **4** : 已签署 **5** : 已过期 **6** : 已撤销 **7** : 未开启流程(合同中存在填写环节) **8** : 等待填写 **9** : 部分填写 **10** : 已拒填 **21** : 已解除 */
  FlowStatus?: number;
  /** 当合同流程状态为已拒签（即 FlowStatus=3）或已撤销（即 FlowStatus=6）时，此字段 FlowMessage 为拒签或撤销原因。 */
  FlowMessage?: string | null;
  /** 合同流程描述信息。 */
  FlowDescription?: string | null;
  /** 合同流程的创建时间戳，格式为Unix标准时间戳（秒）。 */
  CreatedOn?: number;
  /** 合同流程的签署方数组 */
  FlowApproverInfos?: FlowApproverDetail[];
  /** 合同流程的关注方信息数组 */
  CcInfos?: FlowApproverDetail[];
  /** 合同流程发起方的员工编号, 即员工在腾讯电子签平台的唯一身份标识。 */
  Creator?: string | null;
}

/** 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。 */
declare interface FlowGroupApproverInfo {
  /** 合同流程ID。 */
  FlowId?: string;
  /** 签署节点ID，用于生成动态签署人链接完成领取。注：`生成动态签署人补充链接时必传。` */
  RecipientId?: string;
}

/** 合同组签署方信息 */
declare interface FlowGroupApprovers {
  /** 合同流程ID */
  FlowId?: string | null;
  /** 签署方信息，包含合同ID和角色ID用于定位RecipientId。 */
  Approvers?: ApproverItem[] | null;
}

/** 此结构体(FlowGroupInfo)描述的是合同组(流程组)的单个合同(流程)信息 */
declare interface FlowGroupInfo {
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。该名称还将用于合同签署完成后的下载文件名。 */
  FlowName: string;
  /** 签署流程参与者信息，最大限制50方注意 approver中的顺序需要和模板中的顺序保持一致， 否则会导致模板中配置的信息无效。 */
  Approvers: ApproverInfo[];
  /** 文件资源ID，通过多文件上传[UploadFiles](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口获得，为32位字符串。建议开发者保存此资源ID，后续创建合同或创建合同流程需此资源ID。 */
  FileIds?: string[];
  /** 合同模板ID，为32位字符串。建议开发者保存此模板ID，后续用此模板发起合同流程需要此参数。可登录腾讯电子签控制台，在 "模板"->"模板中心"->"列表展示设置"选中模板 ID 中查看某个模板的TemplateId(在页面中展示为模板ID)。 */
  TemplateId?: string;
  /** 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符示例值：劳务合同 */
  FlowType?: string;
  /** 签署流程描述,最大长度1000个字符 */
  FlowDescription?: string;
  /** 签署流程的签署截止时间。值为unix时间戳,精确到秒,不传默认为当前时间一年后示例值：1604912664 */
  Deadline?: number;
  /** 合同（流程）的回调地址 */
  CallbackUrl?: string;
  /** 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
  /** 发送类型：true：无序签false：有序签注：默认为false（有序签），请和模板中的配置保持一致示例值：true */
  Unordered?: boolean;
  /** 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体单行文本控件多行文本控件勾选框控件数字控件图片控件动态表格等填写控件 */
  Components?: Component[];
  /** 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。若设置为true，审核结果需通过接口 [CreateFlowSignReview](https://qian.tencent.com/developers/companyApis/operateFlows/CreateFlowSignReview) 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。示例值：true */
  NeedSignReview?: boolean;
  /** 个人自动签场景。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN示例值：E_PRESCRIPTION_AUTO_SIGN */
  AutoSignScene?: string;
}

/** 此结构体(FlowGroupOptions)描述的是合同组的个性化配置，支持控制是否发送短信、未实名个人签署方查看合同组时是否需要实名认证（仅在合同组文件发起配置时生效） */
declare interface FlowGroupOptions {
  /** 签署人校验方式,支持以下类型VerifyCheck : 人脸识别 (默认值)MobileCheck : 手机号验证参数说明：此参数仅在合同组文件发起有效，可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。 */
  ApproverVerifyType?: string;
  /** 发起合同（流程）组本方企业经办人通知方式签署通知类型，支持以下类型sms : 短信 (默认值)none : 不通知 */
  SelfOrganizationApproverNotifyType?: string;
  /** 发起合同（流程）组他方经办人通知方式签署通知类型，支持以下类型sms : 短信 (默认值)none : 不通知 */
  OtherApproverNotifyType?: string;
}

/** 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。 */
declare interface FlowGroupUrlInfo {
  /** 合同组子合同和签署方的信息，用于补充动态签署人。 */
  FlowGroupApproverInfos?: FlowGroupApproverInfo[];
}

/** 电子文档的控件填充信息。按照控件类型进行相应的填充。当控件的 ComponentType=‘SIGN_SEAL'时，FormField.ComponentValue填入印章id。* 可用于指定自动签模板未设置自动签印章时，可由接口传入自动签印章* 若指定的控件上已设置ComponentValue，那以已经设置的ComponentValue为准```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "sealId（印章id）"}```当控件的 ComponentType='TEXT'时，FormField.ComponentValue填入文本内容```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "文本内容"}```当控件的 ComponentType='MULTI_LINE_TEXT'时，FormField.ComponentValue填入文本内容，支持自动换行。```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "多行文本内容"}```当控件的 ComponentType='CHECK_BOX'时，FormField.ComponentValue填入true或false文本```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "true"}```当控件的 ComponentType='FILL_IMAGE'时，FormField.ComponentValue填入图片的资源ID```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxxx"}```当控件的 ComponentType='ATTACHMENT'时，FormField.ComponentValue支持填入附件图片或者文件的资源ID列表，以逗号分隔，单个附件控件最多支持6个资源ID；支持的文件类型包括doc、docx、xls、xlsx、html、jpg、jpeg、png、bmp、txt、pdf```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx1,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx2,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx3"}```当控件的 ComponentType='SELECTOR'时，FormField.ComponentValue填入选择的选项内容；```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "选择的内容"}```当控件的 ComponentType='DATE'时，FormField.ComponentValue填入日期内容；```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "2023年01月01日"}```当控件的 ComponentType='DISTRICT'时，FormField.ComponentValue填入省市区内容；```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "广东省深圳市福田区"}```【数据表格传参说明】当控件的 ComponentType='DYNAMIC_TABLE'时，FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）输入示例1：```{ "headers":[ { "content":"head1" }, { "content":"head2" }, { "content":"head3" } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```输入示例2（表格表头宽度比例配置）：```{ "headers":[ { "content":"head1", "widthPercent": 30 }, { "content":"head2", "widthPercent": 30 }, { "content":"head3", "widthPercent": 40 } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```输入示例3（表格设置字体加粗颜色）：```{ "headers":[ { "content":"head1" }, { "content":"head2" }, { "content":"head3" } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123", "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "CENTER"} }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456", "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "LEFT"} }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789", "style": {"color": "#b500bf", "fontSize": 12,"bold": false,"align": "RIGHT"} } ] }}```表格参数说明| 名称 | 类型 | 描述 || ------------------- | ------- | ------------------------------------------------- || headers | Array | 表头：不超过10列，不支持单元格合并，字数不超过100 || rowCount | Integer | 表格内容最大行数 || cells.N.rowStart | Integer | 单元格坐标：行起始index || cells.N.rowEnd | Integer | 单元格坐标：行结束index || cells.N.columnStart | Integer | 单元格坐标：列起始index || cells.N.columnEnd | Integer | 单元格坐标：列结束index || cells.N.content | String | 单元格内容，字数不超过100 || cells.N.style | String | 单元格字体风格配置 ，风格配置的json字符串 如： {"font":"黑体","fontSize":12,"color":"#FFFFFF","bold":true,"align":"CENTER"} |表格参数headers说明widthPercent Integer 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35content String 表头单元格内容，字数不超过100style String 为字体风格设置 风格支持： font : 目前支持 黑体、宋体; fontSize： 6-72; color：000000-FFFFFF 字符串形如： "#FFFFFF" 或者 "0xFFFFFF"; bold ： 是否加粗， true ： 加粗 false： 不加粗; align: 对其方式， 支持 LEFT / RIGHT / CENTER */
declare interface FormField {
  /** 控件填充vaule，ComponentType和传入值类型对应关系： TEXT : 文本内容 MULTI_LINE_TEXT : 文本内容， 可以用 \n 来控制换行位置 CHECK_BOX : true/false FILL_IMAGE、ATTACHMENT : 附件的FileId，需要通过UploadFiles接口上传获取 SELECTOR : 选项值 DYNAMIC_TABLE - 传入json格式的表格内容，详见说明：[数据表格](https://qian.tencent.com/developers/company/dynamic_table) DATE : 格式化：xxxx年xx月xx日（例如：2024年05月28日）控件值约束说明： 特殊控件 填写约束 企业全称控件 企业名称中文字符中文括号 统一社会信用代码控件 企业注册的统一社会信用代码 法人名称控件 最大50个字符，2到25个汉字或者1到50个字母 签署意见控件 签署意见最大长度为50字符 签署人手机号控件 国内手机号 13,14,15,16,17,18,19号段长度11位 签署人身份证控件 合法的身份证号码检查 控件名称 控件名称最大长度为20字符，不支持表情 单行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 多行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 勾选框控件 选择填字符串true，不选填字符串false 选择器控件 同单行文本控件约束，填写选择值中的字符串 数字控件 请输入有效的数字(可带小数点) 日期控件 格式：yyyy年mm月dd日 附件控件 JPG或PNG图片，上传数量限制，1到6个，最大6个附件，填写上传的资源ID 图片控件 JPG或PNG图片，填写上传的图片资源ID 邮箱控件 有效的邮箱地址, w3c标准 地址控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 省市区控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 性别控件 选择值中的字符串 学历控件 选择值中的字符串 */
  ComponentValue: string;
  /** 控件id，和ComponentName选择一项传入即可点击查看在模板中找到控件ID的方式 */
  ComponentId?: string;
  /** 控件名字，最大长度不超过30字符，和ComponentId选择一项传入即可点击查看在模板中找到控件名字的方式 */
  ComponentName?: string;
}

/** 成员企业信息 */
declare interface GroupOrganization {
  /** 成员企业名 */
  Name?: string | null;
  /** 成员企业别名 */
  Alias?: string | null;
  /** 成员企业id，为 32 位字符串，可在电子签PC 控制台，企业设置->企业电子签账号 获取 */
  OrganizationId?: string | null;
  /** 记录更新时间， unix时间戳，单位秒 */
  UpdateTime?: number | null;
  /** 成员企业加入集团的当前状态 **1**：待授权 **2**：已授权待激活 **3**：拒绝授权 **4**：已解除 **5**：已加入 */
  Status?: number | null;
  /** 是否为集团主企业 */
  IsMainOrganization?: boolean | null;
  /** 企业社会信用代码 */
  IdCardNumber?: string | null;
  /** 企业超管信息 */
  AdminInfo?: Admin | null;
  /** 企业许可证Id，此字段暂时不需要关注 */
  License?: string | null;
  /** 企业许可证过期时间，unix时间戳，单位秒 */
  LicenseExpireTime?: number | null;
  /** 成员企业加入集团时间，unix时间戳，单位秒 */
  JoinTime?: number | null;
  /** 是否使用自建审批流引擎（即不是企微审批流引擎） **true**：是 **false**：否 */
  FlowEngineEnable?: boolean | null;
}

/** 授权企业列表（目前仅用于“企业自动签 -> 合作企业授权”） */
declare interface HasAuthOrganization {
  /** 授权企业id */
  OrganizationId?: string | null;
  /** 授权企业名称 */
  OrganizationName?: string | null;
  /** 被授权企业id */
  AuthorizedOrganizationId?: string | null;
  /** 被授权企业名称 */
  AuthorizedOrganizationName?: string | null;
  /** 授权模板id（仅当授权方式为模板授权时有值） */
  TemplateId?: string | null;
  /** 授权模板名称（仅当授权方式为模板授权时有值） */
  TemplateName?: string | null;
  /** 授权时间，格式为时间戳，单位s */
  AuthorizeTime?: number | null;
}

/** 被授权的用户信息 */
declare interface HasAuthUser {
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。 */
  UserId?: string | null;
  /** 当前员工的归属情况，可能值是：MainOrg：在集团企业的场景下，返回此值代表是归属主企业CurrentOrg：在普通企业场景下返回此值；或者在集团企业的场景下，返回此值代表归属子企业 */
  BelongTo?: string | null;
  /** 集团主企业id，当前企业为集团子企业时，该字段有值 */
  MainOrganizationId?: string | null;
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
  /** 部门ID。 */
  DeptId?: string | null;
  /** 部门名。 */
  DeptName?: string | null;
  /** 父部门ID */
  ParentDeptId?: string | null;
  /** 客户系统部门ID */
  DeptOpenId?: string | null;
  /** 序列号。 */
  OrderNo?: number | null;
}

/** 视频核身意图配置，可指定问答模式或者点头模式的语音文本。注: `视频认证为白名单功能，使用前请联系对接的客户经理沟通。` */
declare interface Intention {
  /** 视频认证类型，支持以下类型1 : 问答模式2 : 点头模式注: `视频认证为白名单功能，使用前请联系对接的客户经理沟通。` */
  IntentionType?: number;
  /** 意愿核身语音问答模式（即语音播报+语音回答）使用的文案，包括：系统语音播报的文本、需要核验的标准文本。当前仅支持1轮问答。注：`选择问答模式时，此字段可不传，不传则使用默认语音文本：请问，您是否同意签署本协议？可语音回复“同意”或“不同意”。` */
  IntentionQuestions?: IntentionQuestion[];
  /** 意愿核身（点头确认模式）使用的文案，若未使用意愿核身（点头确认模式），则该字段无需传入。当前仅支持一个提示文本。注：`选择点头模式时，此字段可不传，不传则使用默认语音文本：请问，您是否同意签署本协议？可点头同意。` */
  IntentionActions?: IntentionAction[];
}

/** 意愿核身（点头确认模式）使用的文案，若未使用意愿核身（点头确认模式），则该字段无需传入。当前仅支持一个提示文本。 */
declare interface IntentionAction {
  /** 点头确认模式下，系统语音播报使用的问题文本，问题最大长度为150个字符。 */
  Text?: string;
}

/** 意愿核身点头确认模式结果 */
declare interface IntentionActionResult {
  /** 意愿核身结果详细数据，与每段点头确认过程一一对应 */
  Details?: IntentionActionResultDetail[] | null;
}

/** 意愿核身点头确认模式结果详细数据 */
declare interface IntentionActionResultDetail {
  /** 视频base64编码（其中包含全程提示文本和点头音频，mp4格式） */
  Video?: string | null;
}

/** 意愿核身语音问答模式（即语音播报+语音回答）使用的文案，包括：系统语音播报的文本、需要核验的标准文本。当前仅支持1轮问答。 */
declare interface IntentionQuestion {
  /** 当选择语音问答模式时，系统自动播报的问题文本，最大长度为150个字符。 */
  Question?: string;
  /** 当选择语音问答模式时，用于判断用户回答是否通过的标准答案列表，传入后可自动判断用户回答文本是否在标准文本列表中。 */
  Answers?: string[];
}

/** 意愿核身问答模式结果。若未使用该意愿核身功能，该字段返回值可以不处理。 */
declare interface IntentionQuestionResult {
  /** 视频base64（其中包含全程问题和回答音频，mp4格式）注：`需进行base64解码获取视频文件` */
  Video?: string | null;
  /** 和答案匹配结果列表 */
  ResultCode?: string[] | null;
  /** 回答问题语音识别结果列表 */
  AsrResult?: string[] | null;
}

/** 需要进行签署审核的签署人信息 */
declare interface NeedReviewApproverInfo {
  /** 签署方经办人的类型，支持以下类型 ORGANIZATION 企业（含企业自动签）PERSON 个人（含个人自动签） */
  ApproverType: string;
  /** 签署方经办人的姓名。 经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  ApproverName: string;
  /** 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。 请确认手机号所有方为此合同签署方。 */
  ApproverMobile?: string;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)OTHER_CARD_TYPE 其他证件注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverIdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  ApproverIdCardNumber?: string;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。 */
  OrganizationName?: string;
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

/** 企业套餐余额情况 */
declare interface OrgBillSummary {
  /** 套餐总数 */
  Total?: number;
  /** 套餐使用数 */
  Used?: number;
  /** 套餐剩余数 */
  Available?: number;
  /** 套餐类型对应关系如下:**CloudEnterprise**: 企业版合同**SingleSignature**: 单方签章**CloudProve**: 签署报告**CloudOnlineSign**: 腾讯会议在线签约**ChannelWeCard**: 微工卡**SignFlow**: 合同套餐**SignFace**: 签署意愿（人脸识别）**SignPassword**: 签署意愿（密码）**SignSMS**: 签署意愿（短信）**PersonalEssAuth**: 签署人实名（腾讯电子签认证）**PersonalThirdAuth**: 签署人实名（信任第三方认证）**OrgEssAuth**: 签署企业实名**FlowNotify**: 短信通知**AuthService**: 企业工商信息查询 */
  QuotaType?: string;
}

/** 企业批量注册链接信息 */
declare interface OrganizationAuthUrl {
  /** 企业批量注册链接，根据Endpoint的不同设置，返回不同的链接地址。失效时间：7天跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表 Endpoint 示例 链接有效期限 PC https://qian.tencent.com/console/batch-register?token=yDSx0UUgtjuaf4UEfd2MjCnfI1iuXFE6&orgName=批量认证线上测试企业9 7天 PC_SHORT_URL https://test.essurl.cn/8gDKUBAWK8 7天 APP /pages/guide/index?to=REGISTER_ENTERPRISE_FOR_BATCH&urlAuthToken=yDSx0UUgtjuaf4UEfd2MjCnfI1iuXFE6&orgName=批量认证线上测试企业9 7天 注： `1.创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义` */
  AuthUrl?: string;
  /** 企业批量注册的错误信息，例如：企业三要素不通过 */
  ErrorMessage?: string;
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
  /** 签署平台如果文件是在腾讯电子签平台签署，则为**腾讯电子签**，如果文件不在腾讯电子签平台签署，则为**其他平台**。 */
  SignPlatform?: string;
  /** 申请证书的主体的名字如果是在腾讯电子签平台签署, 则对应的主体的名字个数如下**企业**: ESS@企业名称@编码**个人**: ESS@个人姓名@证件号@808854如果在其他平台签署的, 主体的名字参考其他平台的说明 */
  SignerName?: string;
  /** 签署时间的Unix时间戳，单位毫秒 */
  SignTime?: number;
  /** 证书签名算法, 如SHA1withRSA等算法 */
  SignAlgorithm?: string;
  /** CA供应商下发给用户的证书编号注意：`腾讯电子签接入多家CA供应商以提供容灾能力，不同CA下发的证书编号区别较大，但基本都是由数字和字母组成，长度在200以下`。 */
  CertSn?: string;
  /** 证书起始时间的Unix时间戳，单位毫秒 */
  CertNotBefore?: number;
  /** 证书过期时间的时间戳，单位毫秒 */
  CertNotAfter?: number;
  /** 签名域横坐标，单位px */
  ComponentPosX?: number;
  /** 签名域纵坐标，单位px */
  ComponentPosY?: number;
  /** 签名域宽度，单位px */
  ComponentWidth?: number;
  /** 签名域高度，单位px */
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
  /** 签署人查看合同校验方式, 支持的类型如下: 1 :实名认证查看 2 :手机号校验查看 */
  ApproverVerifyTypes?: number[];
  /** 签署人进行合同签署时的认证方式，支持的类型如下: 1 :人脸认证 2 :签署密码 3 :运营商三要素认证 4 :UKey认证 */
  ApproverSignTypes?: number[];
}

/** 参与方填写控件信息 */
declare interface RecipientComponentInfo {
  /** 参与方Id */
  RecipientId?: string | null;
  /** 参与方填写状态0-未填写1-已填写 */
  RecipientFillStatus?: string | null;
  /** 是否为发起方true-发起方false-参与方 */
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

/** 企业认证信息参数， 需要保证这些参数跟营业执照中的信息一致。 */
declare interface RegistrationOrganizationInfo {
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。 */
  OrganizationName: string;
  /** 组织机构企业统一社会信用代码。请确认该企业统一社会信用代码与企业营业执照中注册的统一社会信用代码一致。 */
  UniformSocialCreditCode: string;
  /** 组织机构法人的姓名。请确认该企业统一社会信用代码与企业营业执照中注册的法人姓名一致。 */
  LegalName: string;
  /** 组织机构企业注册地址。请确认该企业注册地址与企业营业执照中注册的地址一致。 */
  Address: string;
  /** 组织机构超管姓名。在注册流程中，必须是超管本人进行操作。如果法人做为超管管理组织机构,超管姓名就是法人姓名如果入参中传递超管授权书PowerOfAttorneys，则此参数为必填参数。 */
  AdminName?: string;
  /** 组织机构超管手机号。在注册流程中，这个手机号必须跟操作人在电子签注册的个人手机号一致。如果入参中传递超管授权书PowerOfAttorneys，则此参数为必填参数 */
  AdminMobile?: string;
  /** 可选的此企业允许的授权方式, 可以设置的方式有:1：上传授权书2：法人授权超管5：授权书+对公打款注:`1. 当前仅支持一种认证方式``2. 如果当前的企业类型是政府/事业单位, 则只支持上传授权书+对公打款``3. 如果当前操作人是法人,则是法人认证` */
  AuthorizationTypes?: number[];
  /** 认证人身份证号，如果入参中传递超管授权书PowerOfAttorneys，则此参数为必填参数 */
  AdminIdCardNumber?: string;
  /** 认证人证件类型 支持以下类型ID_CARD : 居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  AdminIdCardType?: string;
  /** 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M */
  BusinessLicense?: string;
  /** 授权书(PNG或JPG或PDF) base64格式, 大小不超过8M 。p.s. 如果上传授权书 ，需遵循以下条件1. 超管的信息（超管姓名，超管身份证，超管手机号）必须为必填参数。2. 超管的个人身份必须在电子签已经实名。2. 认证方式AuthorizationTypes必须只能是上传授权书方式 */
  PowerOfAttorneys?: string[];
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
  /** 参与方在合同中的角色是按照创建合同的时候来排序的，解除协议默认会将第一个参与人叫`甲方`,第二个叫`乙方`, 第三个叫`丙方`，以此类推。如果需改动此参与人的角色名字，可用此字段指定，由汉字,英文字符,数字组成，最大20个字。 */
  ApproverSignRole?: string;
  /** 印章Id，签署控件类型为印章时，用于指定本企业签署方在解除协议中使用那个印章进行签署 */
  ApproverSignSealId?: string;
}

/** 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。 */
declare interface RelieveInfo {
  /** 解除理由，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  Reason: string;
  /** 解除后仍然有效的条款，保留条款，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  RemainInForceItem?: string;
  /** 原合同事项处理-费用结算，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  OriginalExpenseSettlement?: string;
  /** 原合同事项处理-其他事项，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  OriginalOtherSettlement?: string;
  /** 其他约定，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  OtherDeals?: string;
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
  SealId: string | null;
  /** 印章类型。LEGAL_PERSON_SEAL: 法定代表人章；ORGANIZATIONSEAL：企业印章；OFFICIAL：企业公章；CONTRACT：合同专用章 */
  SealType: string | null;
  /** 印章名称 */
  SealName: string | null;
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

/** 企业员工信息。 */
declare interface Staff {
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。注：`创建和更新场景无需填写。` */
  UserId?: string;
  /** 显示的用户名/昵称。 */
  DisplayName?: string;
  /** 用户手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。 */
  Mobile?: string;
  /** 用户邮箱。 */
  Email?: string | null;
  /** 用户在第三方平台ID。注：`如需在此接口提醒员工实名，该参数不传。` */
  OpenId?: string | null;
  /** 员工角色信息。注：`创建和更新场景无需填写。` */
  Roles?: StaffRole[] | null;
  /** 员工部门信息。 */
  Department?: Department | null;
  /** 员工是否实名。注：`创建和更新场景无需填写。` */
  Verified?: boolean;
  /** 员工创建时间戳，单位秒。注：`创建和更新场景无需填写。` */
  CreatedOn?: number;
  /** 员工实名时间戳，单位秒。注：`创建和更新场景无需填写。` */
  VerifiedOn?: number | null;
  /** 员工是否离职：**0**：未离职**1**：离职注：`创建和更新场景无需填写。` */
  QuiteJob?: number | null;
  /** 员工离职交接人用户ID。注：`创建和更新场景无需填写。` */
  ReceiveUserId?: string;
  /** 员工离职交接人用户OpenId。注：`创建和更新场景无需填写。` */
  ReceiveOpenId?: string;
  /** 企业微信用户账号ID。注：`仅企微类型的企业创建员工接口支持该字段。` */
  WeworkOpenId?: string | null;
}

/** 集成版企业角色信息。 */
declare interface StaffRole {
  /** 角色ID。 */
  RoleId?: string | null;
  /** 角色名称。 */
  RoleName?: string | null;
}

/** 子企业套餐使用情况 */
declare interface SubOrgBillSummary {
  /** 子企业名称 */
  OrganizationName?: string;
  /**  */
  Usage?: SubOrgBillUsage[];
}

/** 集团子企业使用集团主企业的套餐使用情况 */
declare interface SubOrgBillUsage {
  /** 套餐使用数 */
  Used?: number;
  /** 套餐类型对应关系如下:**CloudEnterprise**: 企业版合同**SingleSignature**: 单方签章**CloudProve**: 签署报告**CloudOnlineSign**: 腾讯会议在线签约**ChannelWeCard**: 微工卡**SignFlow**: 合同套餐**SignFace**: 签署意愿（人脸识别）**SignPassword**: 签署意愿（密码）**SignSMS**: 签署意愿（短信）**PersonalEssAuth**: 签署人实名（腾讯电子签认证）**PersonalThirdAuth**: 签署人实名（信任第三方认证）**OrgEssAuth**: 签署企业实名**FlowNotify**: 短信通知**AuthService**: 企业工商信息查询 */
  QuotaType?: string;
}

/** 创建/修改员工成功返回的信息现在支持saas/企微/H5端进行加入。 */
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
  /** 员工邀请返回链接 根据入参的 InvitationNotifyType 和 Endpoint 返回链接 链接类型有效期示例HTTP_SHORT_URL（短链）一天https://test.essurl.cn/fvG7UBEd0FHTTP（长链）一天https://res.ess.tencent.cn/cdn/h5-activity-dev/jump-mp.html?where=mini&from=MSG&to=USER_VERIFY&verifyToken=yDCVbUUckpwocmfpUySko7IS83LTV0u0&expireTime=1710840183H530 天https://quick.test.qian.tencent.cn/guide?Code=yDCVbUUckpwtvxqoUbTw4VBBjLbfAtW7&CodeType=QUICK&shortKey=yDCVbUY7lhqV7mZlCL2dAPP一天/pages/guide/index?to=USER_VERIFY&verifyToken=yDCVbUUckpwocm96UySko7ISvEIZH7Yz&expireTime=1710840455 */
  Url?: string;
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

/** 更新员工信息成功返回的数据信息， 仅支持未实名的用户进行更新会通过短信、企微消息或者H5Url 链接如果是通过H5邀请加入的方式，会返回H5 链接 */
declare interface SuccessUpdateStaffData {
  /** 传入的用户名称 */
  DisplayName?: string;
  /** 传入的手机号，没有打码 */
  Mobile?: string;
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。 */
  UserId?: string;
  /** H5端员工实名链接只有入参 InvitationNotifyType = H5的时候才会进行返回。 */
  Url?: string;
}

/** 此结构体 (TemplateInfo) 用于描述模板的信息。> **模板组成** >> 一个模板通常会包含以下结构信息>- 模板基本信息>- 发起方参与信息Promoter、签署参与方 Recipients，后者会在模板发起合同时用于指定参与方>- 填写控件 Components>- 签署控件 SignComponents>- 生成模板的文件基础信息 FileInfos */
declare interface TemplateInfo {
  /** 模板ID，模板的唯一标识 */
  TemplateId?: string;
  /** 模板的名字 */
  TemplateName?: string;
  /** 此模块需要签署的各个参与方的角色列表。RecipientId标识每个参与方角色对应的唯一标识符，用于确定此角色的信息。[点击查看在模板中配置的签署参与方角色列表的样子](https://qcloudimg.tencent-cloud.cn/raw/e082bbcc0d923f8cb723d98382410aa2.png) */
  Recipients?: Recipient[];
  /** 模板的填充控件列表[点击查看在模板中配置的填充控件的样子](https://qcloudimg.tencent-cloud.cn/raw/cb2f58529fca8d909258f9d45a56f7f4.png) */
  Components?: Component[];
  /** 此模板中的签署控件列表[点击查看在模板中配置的签署控件的样子](https://qcloudimg.tencent-cloud.cn/raw/29bc6ed753a5a0fce4a3ab02e2c0d955.png) */
  SignComponents?: Component[];
  /** 模板描述信息 */
  Description?: string;
  /** 此模板的资源ID */
  DocumentResourceIds?: string[];
  /** 生成模板的文件基础信息 */
  FileInfos?: FileInfo[];
  /** 此模板里边附件的资源ID */
  AttachmentResourceIds?: string[];
  /** 签署人参与签署的顺序，可以分为以下两种方式：无序：不限定签署人的签署顺序，签署人可以在任何时间签署。此种方式值为 ：｛-1｝有序：通过序列数字标识签署顺序，从0开始编码，数字越大签署顺序越靠后，签署人按照指定的顺序依次签署。此种方式值为： ｛0，1，2，3………｝ */
  SignOrder?: number[];
  /** 此模板的状态可以分为以下几种：-1：不可用状态。0：草稿态，即模板正在编辑或未发布状态。1：正式态，只有正式态的模板才可以发起合同。 */
  Status?: number;
  /** 模板的创建者信息，用户的名字注： `是创建者的名字，而非创建者的用户ID` */
  Creator?: string;
  /** 模板创建的时间戳，格式为Unix标准时间戳（秒） */
  CreatedOn?: number;
  /** 此模板创建方角色信息。[点击查看在模板中配置的创建方角色的样子](https://qcloudimg.tencent-cloud.cn/raw/e082bbcc0d923f8cb723d98382410aa2.png) */
  Promoter?: Recipient;
  /** 模板类型可以分为以下两种：1：带有本企业自动签署的模板，即签署过程无需签署人手动操作，系统自动完成签署。3：普通模板，即签署人需要手动进行签署操作。 */
  TemplateType?: number;
  /** 模板可用状态可以分为以下两种：1：（默认）启用状态，即模板可以正常使用。2：停用状态，即模板暂时无法使用。可到控制台启停模板 */
  Available?: number;
  /** 创建模板的企业ID，电子签的机构ID */
  OrganizationId?: string;
  /** 模板创建人用户ID */
  CreatorId?: string;
  /** 模板的H5预览链接,有效期5分钟。可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。 */
  PreviewUrl?: string | null;
  /** 用户自定义合同类型。返回配置模板的时候选择的合同类型。[点击查看配置的位置](https://qcloudimg.tencent-cloud.cn/raw/4a766f0540253bf2a05d50c58bd14990.png)自定义合同类型配置的地方如链接图所示。[点击查看自定义合同类型管理的位置](https://qcloudimg.tencent-cloud.cn/raw/36582cea03ae6a2559894844942b5d5c.png) */
  UserFlowType?: UserFlowType | null;
  /** 模板版本的编号，旨在标识其独特的版本信息，通常呈现为一串字符串，由日期和递增的数字组成 */
  TemplateVersion?: string | null;
  /** 模板是否已发布可以分为以下两种状态：true：已发布状态，表示该模板已经发布并可以正常使用。false：未发布状态，表示该模板还未发布，无法使用。 */
  Published?: boolean | null;
  /** 集体账号场景下： 集团账号分享给子企业的模板的来源模板ID。 */
  ShareTemplateId?: string | null;
  /** 此模板配置的预填印章列表（包括自动签署指定的印章） */
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

/** 用户自定义合同类型， 自定义合同类型的管理可以[点击查看在控制台位置的截图](https://qcloudimg.tencent-cloud.cn/raw/85a9b2ebce07b0cd6d75d5327d538235.png) */
declare interface UserFlowType {
  /** 合同类型ID */
  UserFlowTypeId?: string | null;
  /** 合同类型名称 */
  Name?: string | null;
  /** 合同类型说明 */
  Description?: string | null;
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
  /** 证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  IdCardType: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
}

/** 页面主题配置 */
declare interface WebThemeConfig {
  /** 是否显示页面底部电子签logo，取值如下： **true**：页面底部显示电子签logo **false**：页面底部不显示电子签logo（默认） */
  DisplaySignBrandLogo?: boolean;
  /** 主题颜色：支持十六进制颜色值以及RGB格式颜色值，例如：#D54941，rgb(213, 73, 65) */
  WebEmbedThemeColor?: string;
}

declare interface BindEmployeeUserIdWithClientOpenIdRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写UserId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。通过DescribeIntegrationEmployees接口获取，也可登录腾讯电子签控制台查看![image](https://qcloudimg.tencent-cloud.cn/raw/97cfffabb0caa61df16999cd395d7850.png) */
  UserId: string;
  /** 员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一企业内不会出现重复。 该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。 */
  OpenId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface BindEmployeeUserIdWithClientOpenIdResponse {
  /** 绑定是否成功。**0**：失败**1**：成功 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelFlowRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID, 为32位字符串。可登录腾讯电子签控制台，[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png) */
  FlowId: string;
  /** 撤销此合同流程的**撤销理由**，最多支持200个字符长度。只能由中文、字母、数字、中文标点和英文标点组成（不支持表情）。![image](https://qcloudimg.tencent-cloud.cn/raw/f16cf37dbb3a09d6569877f093b92204/channel_ChannelCancelFlow.png) */
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
  /** 需要取消的签署码ID，为32位字符串。由[创建一码多签签署码](https://qian.tencent.com/developers/companyApis/startFlows/CreateMultiFlowSignQRCode/)返回 */
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
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
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
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 需要执行撤回的流程(合同)的编号列表，最多100个.列表中的流程(合同)编号不要重复. */
  FlowIds: string[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateBatchCancelFlowUrlResponse {
  /** 批量撤回签署流程链接 */
  BatchCancelFlowUrl?: string;
  /** 签署流程撤回失败信息数组里边的错误原因与传进来的FlowIds一一对应,如果是空字符串则标识没有出错 */
  FailMessages?: string[];
  /** 签署连接过期时间字符串：年月日-时分秒例如:2023-07-28 17:25:59 */
  UrlExpireOn?: string;
  /** 批量撤销任务编号，为32位字符串，可用于[查询批量撤销签署流程任务结果](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl) 或关联[批量撤销任务结果回调](https://qian.tencent.com/developers/company/callback_types_contracts_sign#%E4%B9%9D-%E6%89%B9%E9%87%8F%E6%92%A4%E9%94%80%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83) */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchOrganizationRegistrationTasksRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 组织机构注册信息。一次最多支持10条认证流 */
  RegistrationOrganizations: RegistrationOrganizationInfo[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 要生成链接的类型, 可以选择的值如下: (默认)PC: 生成PC端的链接SHORT_URL: H5跳转到电子签小程序链接的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序APP：生成小程序跳转链接H5：生成H5跳转长链接SHORT_H5：生成H5跳转短链 */
  Endpoint?: string;
}

declare interface CreateBatchOrganizationRegistrationTasksResponse {
  /** 生成注册链接的任务Id，根据这个id， 调用DescribeBatchOrganizationRegistrationUrls 获取生成的链接，进入认证流程 */
  TaskId?: string;
  /** 批量生成企业认证链接的详细错误信息，顺序与输入参数保持一致。若企业认证均成功生成，则不返回错误信息；若存在任何错误，则返回具体的错误描述。 */
  ErrorMessages?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchQuickSignUrlRequest {
  /** 批量签署的流程签署人，其中姓名(ApproverName)、参与人类型(ApproverType)必传，手机号(ApproverMobile)和证件信息(ApproverIdCardType、ApproverIdCardNumber)可任选一种或全部传入。注:`1. ApproverType目前只支持个人类型的签署人。``2. 签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。``3. 当需要通过短信验证码签署时，手机号ApproverMobile需要与发起合同时填写的用户手机号一致。` */
  FlowApproverInfo: FlowCreateApprover;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId(子企业的组织ID)为必填项。 */
  Agent?: Agent;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 批量签署的合同流程ID数组。注: `在调用此接口时，请确保合同流程均为本企业发起，且合同数量不超过100个。` */
  FlowIds?: string[];
  /** 合同组编号注：`该参数和合同流程ID数组必须二选一` */
  FlowGroupId?: string;
  /** 签署完之后的H5页面的跳转链接，此链接及支持http://和https://，最大长度1000个字符。(建议https协议) */
  JumpUrl?: string;
  /** 指定批量签署合同的签名类型，可传递以下值：**0**：手写签名(默认)**1**：OCR楷体**2**：姓名印章**3**：图片印章**4**：系统签名注：默认情况下，签名类型为手写签名您可以传递多种值，表示可用多种签名类型。该参数会覆盖您合同中的签名类型，若您在发起合同时限定了签名类型(赋值签名类型给ComponentTypeLimit)，请将这些签名类型赋予此参数 */
  SignatureTypes?: number[];
  /** 指定批量签署合同的认证校验方式，可传递以下值：**1**：人脸认证(默认)，需进行人脸识别成功后才能签署合同**2**：密码认证(默认)，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署**3**：运营商三要素，需到运营商处比对手机号实名信息(名字、手机号、证件号)校验一致才能成功进行合同签署。注：默认情况下，认证校验方式为人脸和密码认证您可以传递多种值，表示可用多种认证校验方式。 */
  ApproverSignTypes?: number[];
  /** 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。注：`不指定该值时，默认为签署方自行选择。` */
  SignTypeSelector?: number;
}

declare interface CreateBatchQuickSignUrlResponse {
  /** 签署人签署链接信息 */
  FlowApproverUrlInfo?: FlowApproverUrlInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchSignUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。注：`请确保和合同中填入的一致`, `除动态签署人场景外，此参数必填` */
  Name?: string;
  /** 手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。请确认手机号所有方为此业务通知方。注：`请确保和合同中填入的一致, 若无法保持一致，请确保在发起和生成批量签署链接时传入相同的参与方证件信息`，`除动态签署人场景外，此参数必填` */
  Mobile?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)注：`请确保和合同中填入的一致` */
  IdCardType?: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。注：`请确保和合同中填入的一致` */
  IdCardNumber?: string;
  /** 通知用户方式：**NONE** : 不通知（默认）**SMS** : 短信通知（发送短信通知到Mobile参数所传的手机号） */
  NotifyType?: string;
  /** 批量签署的合同流程ID数组。注: `在调用此接口时，请确保合同流程均为本企业发起，且合同数量不超过100个。` */
  FlowIds?: string[];
  /** 目标签署人的企业名称，签署人如果是企业员工身份，需要传此参数。注：请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。请确保此企业已完成腾讯电子签企业认证。 */
  OrganizationName?: string;
  /** 是否直接跳转至合同内容页面进行签署**false**: 会跳转至批量合同流程的列表, 点击需要批量签署合同后进入合同内容页面进行签署(默认)**true**: 跳过合同流程列表, 直接进入合同内容页面进行签署 */
  JumpToDetail?: boolean;
  /** 批量签署合同相关信息，指定合同和签署方的信息，用于补充动态签署人。 */
  FlowBatchUrlInfo?: FlowBatchUrlInfo;
}

declare interface CreateBatchSignUrlResponse {
  /** 批量签署链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。注: 1. 非小程序和APP集成使用2. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  SignUrl?: string;
  /** 链接过期时间以 Unix 时间戳格式表示，默认生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。 */
  ExpiredTime?: number;
  /** 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径注: 1. 小程序和APP集成使用2. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  MiniAppPath?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConvertTaskApiRequest {
  /** 需要进行转换的资源文件类型支持的文件类型如下：docdocxxlsxlsxjpgjpegpnghtmlbmptxt */
  ResourceType: string;
  /** 需要进行转换操作的文件资源名称，带资源后缀名。注: `资源名称长度限制为256个字符` */
  ResourceName: string;
  /** 需要进行转换操作的文件资源Id，通过UploadFiles接口获取文件资源Id。注: `目前，此接口仅支持单个文件进行转换。` */
  ResourceId: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
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
  /** 用户配置的合同模板ID，会基于此模板创建合同文档，为32位字符串。[点击查看模板Id在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/253071cc2f7becb063c7cf71b37b7861.png) */
  TemplateId: string;
  /** 合同流程ID，为32位字符串。此接口的合同流程ID需要由[创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow)接口创建得到。 */
  FlowId?: string;
  /** 文件名列表，单个文件名最大长度200个字符，暂时仅支持单文件发起。设置后流程对应的文件名称当前设置的值。 */
  FileNames?: string[];
  /** 电子文档的填写控件的填充内容。具体方式可以参考[FormField](https://qian.tencent.com/developers/companyApis/dataTypes/#formfield)结构体的定义。支持自动签传递印章，可通过指定自动签控件id，指定印章id来完成附件控件支持传入图片、文件资源id，并将内容合成到合同文件中。支持的文件类型有doc、docx、xls、xlsx、html、jpg、jpeg、png、bmp、txt、pdf。需要注意如果传入的资源类型都是图片类型，图片资源会放置在合同文件的末尾，如果传入的资源有非图片类型资源，会将资源放置在附件控件所在页面的下一页。注：只有在控制台编辑模板时，归属给发起方的填写控件（如下图）才能在创建文档的时候进行内容填充。![image](https://qcloudimg.tencent-cloud.cn/raw/a54a76a58c454593d06d8e9883ecc9b3.png) */
  FormFields?: FormField[];
  /** 是否为预览模式，取值如下： **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。 **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。 注意： 以预览模式创建的合同仅供查看，因此参与方无法进行签署操作 注: `当使用的模板中存在动态表格控件时，预览结果中没有动态表格的填写内容，动态表格合成完后会触发文档合成完成的回调通知` */
  NeedPreview?: boolean;
  /** 预览模式下产生的预览链接类型 **0** :(默认) 文件流 ,点开后下载预览的合同PDF文件 **1** :H5链接 ,点开后在浏览器中展示合同的样子。注: `1.此参数在NeedPreview 为true时有效``2.动态表格控件不支持H5链接方式预览` */
  PreviewType?: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 已废弃字段，客户端Token，保持接口幂等性,最大长度64个字符 */
  ClientToken?: string;
}

declare interface CreateDocumentResponse {
  /** 合同流程的底层电子文档ID，为32位字符串。注:后续需用同样的FlowId再次调用[发起签署流程](https://qian.tencent.com/developers/companyApis/startFlows/StartFlow)，合同才能进入签署环节 */
  DocumentId?: string;
  /** 合同预览链接URL。注: `1.如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL``2.当使用的模板中存在动态表格控件时，预览结果中没有动态表格的填写内容` */
  PreviewFileUrl?: string | null;
  /** 签署方信息，如角色ID、角色名称等 */
  Approvers?: ApproverItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmbedWebUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** WEB嵌入资源类型，支持以下类型CREATE_SEAL: 生成创建印章的嵌入页面CREATE_TEMPLATE：生成创建模板的嵌入页面MODIFY_TEMPLATE：生成编辑模板的嵌入页面PREVIEW_TEMPLATE：生成预览模板的嵌入页面PREVIEW_SEAL_LIST：生成预览印章列表的嵌入页面PREVIEW_SEAL_DETAIL：生成预览印章详情的嵌入页面EXTEND_SERVICE：生成拓展服务的嵌入页面PREVIEW_FLOW：生成预览合同的嵌入页面（支持移动端）PREVIEW_FLOW_DETAIL：生成查看合同详情的嵌入页面（仅支持PC端） */
  EmbedType: string;
  /** WEB嵌入的业务资源IDPREVIEW_SEAL_DETAIL，必填，取值为印章idMODIFY_TEMPLATE，PREVIEW_TEMPLATE，必填，取值为模板idPREVIEW_FLOW，PREVIEW_FLOW_DETAIL，必填，取值为合同id */
  BusinessId?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 抄送方信息 */
  Reviewer?: ReviewerInfo;
  /** 个性化参数，用于控制页面展示内容 */
  Option?: EmbedUrlOption;
  /** 用户自定义参数目前仅支持EmbedType=CREATE_TEMPLATE时传入指定后，创建，编辑，删除模板时，回调都会携带该userData支持的格式：json字符串的BASE64编码字符串示例： json字符串：{"ComeFrom":"xxx"}，BASE64编码：eyJDb21lRnJvbSI6Inh4eCJ9 eyJDb21lRnJvbSI6Inh4eCJ9，为符合要求的userData数据格式 */
  UserData?: string;
}

declare interface CreateEmbedWebUrlResponse {
  /** 嵌入的web链接，有效期：5分钟EmbedType=PREVIEW_CC_FLOW，该url为h5链接 */
  WebUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateExtendedServiceAuthInfosRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 本企业员工的id，需要已实名，正常在职员工 */
  UserIds: string[];
  /** 取值OPEN_SERVER_SIGN：企业自动签BATCH_SIGN：批量签署 */
  ExtendServiceType?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateExtendedServiceAuthInfosResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowApproversRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 补充企业签署人信息。- 如果发起方指定的补充签署人是企业微信签署人（ApproverSource=WEWORKAPP），则需要提供企业微信UserId进行补充；- 如果不指定，则使用姓名和手机号进行补充。 */
  Approvers: FillApproverInfo[];
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId?: string;
  /** 签署人信息补充方式**0**: 添加或签人候选人，或签支持一个节点传多个签署人，不传值默认或签。注: `或签只支持企业签署方`**1**: 表示往未指定签署人的节点，添加一个明确的签署人，支持企业或个人签署方。 */
  FillApproverType?: number;
  /** 在可定制的企业微信通知中，发起人可以根据具体需求进行自定义设置。 */
  Initiator?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 合同流程组的组ID, 在合同流程组场景下，生成合同流程组的签署链接时需要赋值 */
  FlowGroupId?: string;
}

declare interface CreateFlowApproversResponse {
  /** 批量补充签署人时，补充失败的报错说明注:`目前仅补充动态签署人时会返回补充失败的原因` */
  FillError?: FillError[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowBlockchainEvidenceUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateFlowBlockchainEvidenceUrlResponse {
  /** 二维码图片下载链接，下载链接有效时间5分钟，请尽快下载保存。 */
  QrCode?: string;
  /** 查看短链，可直接点击短链查看证书。 */
  Url?: string;
  /** 二维码和短链的过期时间戳，过期时间默认为生成链接后7天。 */
  ExpiredOn?: number;
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
  /** 本合同流程需包含的PDF文件资源编号列表，通过[UploadFiles](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口获取PDF文件资源编号。注: `目前，此接口仅支持单个文件发起。` */
  FileIds: string[];
  /** 合同流程描述信息(可自定义此描述)，最大长度1000个字符。 */
  FlowDescription?: string;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。如果用户已经在控制台创建了自定义合同类型，可以将这里的类型名称传入。 如果没有创建，我们会自动给发起方公司创建此自定义合同类型。![image](https://qcloudimg.tencent-cloud.cn/raw/36582cea03ae6a2559894844942b5d5c.png) */
  FlowType?: string;
  /** 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体 单行文本控件 多行文本控件 勾选框控件 数字控件 图片控件 动态表格等填写控件 */
  Components?: Component[];
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。 */
  CcInfos?: CcInfo[];
  /** 可以设置以下时间节点来给抄送人发送短信通知来查看合同内容： **0**：合同发起时通知（默认值） **1**：签署完成后通知 */
  CcNotifyType?: number;
  /** 是否为预览模式，取值如下： **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。 **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。 */
  NeedPreview?: boolean;
  /** 预览模式下产生的预览链接类型 **0** :(默认) 文件流 ,点开后下载预览的合同PDF文件 **1** :H5链接 ,点开后在浏览器中展示合同的样子注: `此参数在NeedPreview 为true时有效` */
  PreviewType?: number;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。 */
  Deadline?: number;
  /** 合同流程的签署顺序类型： **false**：(默认)有序签署, 本合同多个参与人需要依次签署 **true**：无序签署, 本合同多个参与人没有先后签署限制 */
  Unordered?: boolean;
  /** 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的[回调通知](https://qian.tencent.com/developers/company/callback_types_v2)模块。 */
  UserData?: string;
  /** 合同到期提醒时间，为Unix标准时间戳（秒）格式，支持的范围是从发起时间开始到后10年内。到达提醒时间后，腾讯电子签会短信通知发起方企业合同提醒，可用于处理合同到期事务，如合同续签等事宜。 */
  RemindedOn?: number;
  /** 指定个人签署方查看合同的校验方式 **VerifyCheck** :（默认）人脸识别,人脸识别后才能合同内容 **MobileCheck** : 手机号验证, 用户手机号和参与方手机号（ApproverMobile）相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证） */
  ApproverVerifyType?: string;
  /** 签署方签署控件（印章/签名等）的生成方式： **0**：在合同流程发起时，由发起人指定签署方的签署控件的位置和数量。 **1**：签署方在签署时自行添加签署控件，可以拖动位置和控制数量。 */
  SignBeanTag?: number;
  /** 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：{合同名称} {发起方企业} {发起方姓名} {签署方N企业}{签署方N姓名}其中，N表示签署方的编号，从1开始，不能超过签署人的数量。例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子合同名称：租房合同 发起方：腾讯公司(张三) 签署方：李四![image](https://qcloudimg.tencent-cloud.cn/raw/628f0928cac15d2e3bfa6088f53f5998.png) */
  CustomShowMap?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传： **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签） **OTHER** : 通用场景注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。` */
  AutoSignScene?: string;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
}

declare interface CreateFlowByFilesResponse {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。注: 如果是预览模式(即NeedPreview设置为true)时, 此处不会有值返回。[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png) */
  FlowId?: string;
  /** 合同预览链接URL。注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL */
  PreviewUrl?: string | null;
  /** 签署方信息，如角色ID、角色名称等 */
  Approvers?: ApproverItem[] | null;
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
  /** 指定申请的报告类型，可选类型如下： **0** :合同签署报告（默认） **1** :公证处核验报告 */
  ReportType?: number;
}

declare interface CreateFlowEvidenceReportResponse {
  /** 出证报告 ID，可用于获取出证报告任务执行结果查询出证任务结果和出证PDF的下载URL */
  ReportId?: string | null;
  /** 出证任务执行的状态, 状态含义如下：**EvidenceStatusExecuting**： 出证任务在执行中**EvidenceStatusSuccess**： 出证任务执行成功**EvidenceStatusFailed** ： 出征任务执行失败 */
  Status?: string;
  /** 此字段已经废除,不再使用.出证的PDF下载地址请调用DescribeChannelFlowEvidenceReport接口获取 */
  ReportUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowGroupByFilesRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同（流程）组名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowGroupName: string;
  /** 合同（流程）组的子合同信息，支持2-50个子合同 */
  FlowGroupInfos: FlowGroupInfo[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 合同（流程）组的配置项信息。其中包括：是否通知本企业签署方是否通知其他签署方 */
  FlowGroupOptions?: FlowGroupOptions;
}

declare interface CreateFlowGroupByFilesResponse {
  /** 合同(流程)组的合同组Id */
  FlowGroupId?: string | null;
  /** 合同(流程)组中子合同列表. */
  FlowIds?: string[] | null;
  /** 合同组签署方信息。 */
  Approvers?: FlowGroupApprovers[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowGroupByTemplatesRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同（流程）组名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowGroupName: string;
  /** 合同（流程）组的子合同信息，支持2-50个子合同 */
  FlowGroupInfos: FlowGroupInfo[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 合同（流程）组的配置项信息。其中包括：是否通知本企业签署方是否通知其他签署方 */
  FlowGroupOptions?: FlowGroupOptions;
}

declare interface CreateFlowGroupByTemplatesResponse {
  /** 合同(流程)组的合同组Id */
  FlowGroupId?: string | null;
  /** 合同(流程)组中子合同列表. */
  FlowIds?: string[] | null;
  /** 合同组签署人信息。 */
  Approvers?: FlowGroupApprovers[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowGroupSignReviewRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同(流程)组的合同组Id，为32位字符串，通过接口[通过多文件创建合同组签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowGroupByFiles) 或[通过多模板创建合同组签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowGroupByTemplates)创建合同组签署流程时返回。 */
  FlowGroupId: string;
  /** 提交的审核结果，审核结果有下面三种情况PASS: 审核通过，合同流程可以继续执行签署等操作REJECT: 审核拒绝，合同流程不会变动SIGN_REJECT:拒签，合同流程直接结束，合同状态变为**合同拒签** */
  ReviewType: string;
  /** 需要进行签署审核的签署人的个人信息或企业信息，签署方的匹配方式按照以下规则:个人：二选一（选择其中任意信息组合即可）姓名+证件类型+证件号姓名+手机号企业：二选一 （选择其中任意信息组合即可）企业名+姓名+证件类型+证件号企业名+姓名+手机号 */
  ApproverInfo: NeedReviewApproverInfo;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 审核不通过的原因，该字段的字符串长度不超过200个字符。注：`当审核类型（ReviewType）为审核拒绝（REJECT）或拒签（SIGN_REJECT）时，审核结果原因字段必须填写` */
  ReviewMessage?: string;
}

declare interface CreateFlowGroupSignReviewResponse {
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
  /** 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。注: 在发起流程时，需要保证 approver 中的顺序与模板定义顺序一致，否则会发起失败。例如，如果模板中定义的第一个参与人是个人用户，第二个参与人是企业员工，则在 approver 中传参时，第一个也必须是个人用户，第二个参与人必须是企业员工。[点击查看模板参与人顺序定义位置](https://qcloudimg.tencent-cloud.cn/raw/d14457b48cc66b29262ccb9d7b3ed556.png) */
  Approvers: FlowCreateApprover[];
  /** 合同流程描述信息(可自定义此描述)，最大长度1000个字符。 */
  FlowDescription?: string;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。此合同类型需要跟模板配置的合同类型保持一致。 */
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
  /** 您可以自定义**腾讯电子签小程序合同列表页**展示的合同内容模板，模板中支持以下变量：{合同名称} {发起方企业} {发起方姓名} {签署方N企业}{签署方N姓名}其中，N表示签署方的编号，从1开始，不能超过签署人的数量。例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子合同名称：租房合同 发起方：腾讯公司(张三) 签署方：李四![image](https://qcloudimg.tencent-cloud.cn/raw/628f0928cac15d2e3bfa6088f53f5998.png) */
  CustomShowMap?: string;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。 */
  CcInfos?: CcInfo[];
  /** 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传： **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签） **OTHER** : 通用场景注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。` */
  AutoSignScene?: string;
  /** 暂未开放 */
  RelatedFlowId?: string;
  /** 暂未开放 */
  CallbackUrl?: string;
}

declare interface CreateFlowResponse {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。注:此返回的合同流程ID，需再次调用创建电子文档和发起签署流程接口将合同开始后，合同才能进入签署环节，[点击查看FlowId在控制台中的位置（只在进入签署环节后有效）](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png) */
  FlowId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowSignReviewRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 企业内部审核结果PASS: 审核通过REJECT: 审核拒绝SIGN_REJECT:拒签(流程结束) */
  ReviewType: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 审核节点的签署人标志，用于指定当前审核的签署方**如果签署审核节点是个人， 此参数必填**。 */
  RecipientId?: string;
  /** 操作类型：（接口通过该字段区分不同的操作类型）SignReview: 签署审核（默认）CreateReview: 创建审核如果审核节点是个人，则操作类型只能为SignReview。 */
  OperateType?: string;
  /** 审核结果原因字符串长度不超过200当ReviewType 是拒绝（REJECT） 时此字段必填。当ReviewType 是拒绝（SIGN_REJECT） 时此字段必填。 */
  ReviewMessage?: string;
}

declare interface CreateFlowSignReviewResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowSignUrlRequest {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 流程签署人列表，其中结构体的ApproverName，ApproverMobile和ApproverType必传，企业签署人则需传OrganizationName，其他可不传。注:`1. 签署人只能有手写签名、时间类型、印章类型的签署控件和内容填写控件，其他类型的签署控件暂时未支持。``2. 生成发起方预览链接时，该字段（FlowApproverInfos）传空或者不传` */
  FlowApproverInfos?: FlowCreateApprover[];
  /** 机构信息，暂未开放 */
  Organization?: OrganizationInfo;
  /** 签署完之后的H5页面的跳转链接，最大长度1000个字符。链接类型请参考 跳转电子签H5 */
  JumpUrl?: string;
  /** 链接类型，支持指定以下类型0 : 签署链接 (默认值)1 : 预览链接注:`1. 当指定链接类型为1时，链接为预览链接，打开链接无法签署仅支持预览以及查看当前合同状态。``2. 如需生成发起方预览链接，则签署方信息传空，即FlowApproverInfos传空或者不传。` */
  UrlType?: number;
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
  /** 部门名称，最大长度为50个字符。 */
  DeptName: string;
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 电子签父部门ID。注：`如果同时指定了ParentDeptId与ParentDeptOpenId参数，系统将优先使用ParentDeptId。当二者都未指定时，创建的新部门将自动填充至根节点部门下。` */
  ParentDeptId?: string;
  /** 第三方平台中父部门ID。注：`如果同时指定了ParentDeptId与ParentDeptOpenId参数，系统将优先使用ParentDeptId。当二者都未指定时，创建的新部门将自动填充至根节点部门下。` */
  ParentDeptOpenId?: string;
  /** 客户系统部门ID，最大长度为64个字符。 */
  DeptOpenId?: string;
  /** 排序号，支持设置的数值范围为1~30000。同一父部门下，排序号越大，部门顺序越靠前。 */
  OrderNo?: number;
}

declare interface CreateIntegrationDepartmentResponse {
  /** 电子签部门ID。建议开发者保存此部门ID，方便后续查询或修改部门信息。 */
  DeptId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrationEmployeesRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 待创建员工的信息最多不超过20个。**1. 在创建企业微信员工的场景下** : 只需传入下面的参数，其他信息不支持设置。 参数 是否必填 含义 WeworkOpenId 是 企业微信用户账号ID **2. 在其他场景下** : 只需传入下面的参数，其他信息不支持设置。 参数 是否必填 含义 DisplayName 是 用户的真实名字 Mobile 是 用户手机号码 OpenId 否 用户的自定义ID Email 否 用户的邮箱 Department.DepartmentId 否 用户加入后的部门ID 注: `每个手机号每天最多使用3次` */
  Employees: Staff[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 员工邀请方式可通过以下途径进行设置：**SMS（默认）**：邀请将通过短信或企业微信消息发送。若场景非企业微信，则采用企业微信消息；其他情境下则使用短信通知。短信内含链接，点击后将进入微信小程序进行认证并加入企业的流程。**H5**：将生成H5链接，用户点击链接后可进入H5页面进行认证并加入企业的流程。**NONE**：系统会根据Endpoint生成签署链接，业务方需获取链接并通知客户。 */
  InvitationNotifyType?: string;
  /** 回跳地址，为认证成功后页面进行回跳的URL，请确保回跳地址的可用性。注：`只有在员工邀请方式（InvitationNotifyType参数）为H5场景下才生效， 其他方式下设置无效。` */
  JumpUrl?: string;
  /** 要跳转的链接类型 **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链**APP**： 第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型**H5**： 第三方移动端浏览器进行嵌入，不支持小程序嵌入，过期时间一个月注意：InvitationNotifyType 和 Endpoint 的关系图通知类型（InvitationNotifyType）EndpointSMS（默认）不需要传递，会将 Endpoint 默认设置为HTTP_SHORT_URLH5不需要传递，会将 Endpoint 默认设置为 H5NONE所有 Endpoint 都支持（HTTP_URL/HTTP_SHORT_URL/H5/APP）默认为HTTP_SHORT_URL */
  Endpoint?: string;
}

declare interface CreateIntegrationEmployeesResponse {
  /** 创建员工的结果。包含创建成功的数据与创建失败数据。 */
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

declare interface CreateIntegrationSubOrganizationActiveRecordRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。 注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 待激活成员企业ID集合 */
  SubOrganizationIds: string[];
}

declare interface CreateIntegrationSubOrganizationActiveRecordResponse {
  /** 激活失败的成员企业ID集合 */
  FailedSubOrganizationIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrationUserRolesRequest {
  /** 执行本接口操作的员工信息。 注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 绑定角色的用户id列表，不能重复，不能大于 100 个 */
  UserIds: string[];
  /** 绑定角色的角色id列表，不能重复，不能大于 100，可以通过DescribeIntegrationRoles接口获取角色信息 */
  RoleIds: string[];
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateIntegrationUserRolesResponse {
  /** 绑定角色失败列表信息 */
  FailedCreateRoleData?: FailedCreateRoleData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLegalSealQrCodeRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 机构信息，暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface CreateLegalSealQrCodeResponse {
  /** 二维码图片base64值，二维码有效期7天（604800秒）二维码图片的样式如下图：![image](https://qcloudimg.tencent-cloud.cn/raw/7ec2478761158a35a9c623882839a5df.png) */
  QrcodeBase64?: string;
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
  /** 指定签署方在使用个人印章签署控件（SIGN_SIGNATURE） 时可使用的签署方式：自由书写、正楷临摹、系统签名、个人印章。 */
  ApproverComponentLimitTypes?: ApproverComponentLimitType[];
}

declare interface CreateMultiFlowSignQRCodeResponse {
  /** 一码多签签署码的基本信息，用户可扫描该二维码进行签署操作。 */
  QrCode?: SignQrCode;
  /** 一码多签签署码的链接信息，适用于客户系统整合二维码功能。通过链接，用户可直接访问电子签名小程序并签署合同。 */
  SignUrls?: SignUrl;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationAuthUrlRequest {
  /** 操作人信息 */
  Operator: UserInfo;
  /** 指定授权方式 支持多选:1-上传授权书方式2- 法人授权方式3- 法人身份认证方式 */
  AuthorizationTypes?: number[];
  /** 企业名称EndPointType=“H5”或者"SHORT_H5"时，该参数必填 */
  OrganizationName?: string;
  /** 企业统一社会信用代码 */
  UniformSocialCreditCode?: string;
  /** 法人姓名 */
  LegalName?: string;
  /** 认证完成跳转链接 */
  AutoJumpUrl?: string;
  /** 营业执照企业地址示例：xx省xx市xx县/区xx街道 */
  OrganizationAddress?: string;
  /** 认证人姓名 */
  AdminName?: string;
  /** 认证人手机号 */
  AdminMobile?: string;
  /** 认证人身份证号 */
  AdminIdCardNumber?: string;
  /** 认证人证件类型支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  AdminIdCardType?: string;
  /** 营业执照的社会信用代码保持一致false 关闭-默认true 开启 */
  UniformSocialCreditCodeSame?: boolean;
  /** 法人姓名保持一致false 关闭-默认true 开启 */
  LegalNameSame?: boolean;
  /** 认证人姓名一致false 关闭-默认true 开启注意：开启后在认证过程前会校验拦截 */
  AdminNameSame?: boolean;
  /** 认证人居民身份证件号一致false 关闭-默认true 开启注意：开启后在认证过程前会校验拦截 */
  AdminIdCardNumberSame?: boolean;
  /** 认证人手机号一致false 关闭-默认true 开启注意：开启后在认证过程前会校验拦截 */
  AdminMobileSame?: boolean;
  /** 企业名称保持一致false 关闭-默认true 开启 */
  OrganizationNameSame?: boolean;
  /** 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M */
  BusinessLicense?: string;
  /** 跳转链接类型："PC"-PC端认证链接 "APP"-全屏或半屏跳转小程序链接“H5”-H5页面认证链接 "SHORT_H5"- H5认证短链"SHORT_URL"- 跳转小程序短链 */
  Endpoint?: string;
}

declare interface CreateOrganizationAuthUrlResponse {
  /** “H5”-H5长连接"SHORT_H5"- H5短链"APP"-小程序"PC"-PC浏览器链接有效期统一30天 */
  AuthUrl?: string;
  /** 链接过期时间戳 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationBatchSignUrlRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。支持填入集团子公司经办人 userId 代发合同。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 请指定需执行批量签署的流程ID，数量范围为1-100。您可登录腾讯电子签控制台，浏览 "合同"->"合同中心" 以查阅某一合同的FlowId（在页面中显示为合同ID）。用户将利用链接对这些合同实施批量操作。 */
  FlowIds: string[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 员工在腾讯电子签平台的独特身份标识，为32位字符串。您可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查阅某位员工的UserId（在页面中显示为用户ID）。UserId必须是传入合同（FlowId）中的签署人。- 1. 若UserId为空，Name和Mobile 必须提供。- 2. 若UserId 与 Name，Mobile均存在，将优先采用UserId对应的员工。 */
  UserId?: string;
  /** 员工姓名，必须与手机号码一起使用。如果UserId为空，则此字段不能为空。同时，姓名和手机号码必须与传入合同（FlowId）中的签署人信息一致。 */
  Name?: string;
  /** 员工手机号，必须与姓名一起使用。 如果UserId为空，则此字段不能为空。同时，姓名和手机号码必须与传入合同（FlowId）中的签署人信息一致。 */
  Mobile?: string;
  /** 为签署方经办人在签署合同中的参与方ID，必须与参数FlowIds数组一一对应。您可以通过查询合同接口（DescribeFlowInfo）查询此参数。若传了此参数，则可以不传 UserId, Name, Mobile等参数 */
  RecipientIds?: string[];
}

declare interface CreateOrganizationBatchSignUrlResponse {
  /** 批量签署入口链接，用户可使用这个链接跳转到控制台页面对合同进行签署操作。 */
  SignUrl?: string;
  /** 链接过期截止时间，格式为Unix标准时间戳（秒），默认为7天后截止。 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationGroupInvitationLinkRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。 注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 到期时间（以秒为单位的时间戳），其上限为30天的有效期限。 */
  ExpireTime: number;
}

declare interface CreateOrganizationGroupInvitationLinkResponse {
  /** 加入集团二维码链接，子企业的管理员可以直接扫码进入。注意:1. 该链接有效期时间为ExpireTime，同时需要注意保密，不要外泄给无关用户。2. 该链接不支持小程序嵌入，仅支持移动端浏览器打开。3. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  Link?: string;
  /** 到期时间（以秒为单位的时间戳） */
  ExpireTime?: number;
  /** 加入集团短链接。注意:1. 该链接有效期时间为ExpireTime，同时需要注意保密，不要外泄给无关用户。2. 该链接不支持小程序嵌入，仅支持移动端浏览器打开。3. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  JumpUrl?: string;
  /** 腾讯电子签小程序加入集团链接。小程序和APP集成使用得到的链接类似于`pages/guide?shortKey=yDw***k1xFc5`, 用法可以参考：跳转电子签小程序注： 生成的链路后面不能再增加参数 */
  MiniAppPath?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationInfoChangeUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 企业信息变更类型，可选类型如下：**1**：企业超管变更**2**：企业基础信息变更 */
  ChangeType: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateOrganizationInfoChangeUrlResponse {
  /** 创建的企业信息变更链接。 */
  Url?: string;
  /** 链接过期时间。链接7天有效。 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePersonAuthCertificateImageRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 个人用户名称 */
  UserName: string;
  /** 证件类型，支持以下类型 ID_CARD : 居民身份证 (默认值) HONGKONG_AND_MACAO : 港澳居民来往内地通行证 HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  IdCardType: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景注: `不传默认为处方单场景，即E_PRESCRIPTION_AUTO_SIGN` */
  SceneKey?: string;
}

declare interface CreatePersonAuthCertificateImageResponse {
  /** 个人用户认证证书图片下载URL，`有效期为5分钟`，超过有效期后将无法再下载。 */
  AuthCertUrl?: string;
  /** 个人用户认证证书的编号, 为20位数字组成的字符串, 由腾讯电子签下发此编号 。该编号会合成到个人用户证书证明图片。注: `个人用户认证证书的编号和证明图片绑定, 获取新的证明图片编号会变动` */
  ImageCertId?: string | null;
  /** CA供应商下发给用户的证书编号，在证书到期后自动续期后此证书编号会发生变动，且不会合成到个人用户证书证明图片中。注意：`腾讯电子签接入多家CA供应商以提供容灾能力，不同CA下发的证书编号区别较大，但基本都是由数字和字母组成，长度在200以下。` */
  SerialNumber?: string | null;
  /** CA证书颁发时间，格式为Unix标准时间戳（秒） 该时间格式化后会合成到个人用户证书证明图片 */
  ValidFrom?: number | null;
  /** CA证书有效截止时间，格式为Unix标准时间戳（秒）该时间格式化后会合成到个人用户证书证明图片 */
  ValidTo?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrepareFlowRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。支持填入集团子公司经办人 userId 代发合同。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 资源id，与ResourceType相对应，取值范围：文件Id（通过UploadFiles获取文件资源Id）模板Id（通过控制台创建模板后获取模板Id）注意：需要同时设置 ResourceType 参数指定资源类型 */
  ResourceId: string;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowName: string;
  /** 资源类型，取值有： **1**：模板 **2**：文件（默认值） */
  ResourceType?: number;
  /** 合同流程的签署顺序类型： **false**：(默认)有序签署, 本合同多个参与人需要依次签署 **true**：无序签署, 本合同多个参与人没有先后签署限制 */
  Unordered?: boolean;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。 */
  Deadline?: number;
  /** 用户自定义合同类型Id该id为电子签企业内的合同类型id， 可以在控制台-合同-自定义合同类型处获取注: `该参数如果和FlowType同时传，以该参数优先生效` */
  UserFlowTypeId?: string;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。 */
  FlowType?: string;
  /** 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序，请确保列表中参与人的顺序符合实际签署顺序。 */
  Approvers?: FlowCreateApprover[];
  /** 开启或者关闭智能添加填写区： **OPEN**：开启（默认值） **CLOSE**：关闭 */
  IntelligentStatus?: string;
  /** 该字段已废弃，请使用InitiatorComponents */
  Components?: Component;
  /** 发起合同个性化参数用于满足创建及页面操作过程中的个性化要求具体定制化内容详见数据接口说明 */
  FlowOption?: CreateFlowOption;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
  /** 发起方企业的签署人进行发起操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。若设置为true，发起审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行发起操作，否则会阻塞其发起操作。 */
  NeedCreateReview?: boolean;
  /** 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。 */
  CcInfos?: CcInfo;
  /** 合同Id：用于通过一个已发起的合同快速生成一个发起流程web链接注: `该参数必须是一个待发起审核的合同id，并且还未审核通过` */
  FlowId?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体 */
  InitiatorComponents?: Component[];
}

declare interface CreatePrepareFlowResponse {
  /** 发起流程的web页面链接，有效期5分钟 */
  Url?: string;
  /** 创建的合同id（还未实际发起），每次调用会生成新的id，用户可以记录此字段对应后续页面发起的合同，若在页面上未成功发起，则此字段无效。 */
  FlowId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePreparedPersonalEsignRequest {
  /** 个人用户姓名 */
  UserName: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
  /** 印章名称，长度1-50个字。 */
  SealName: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
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
  /** 是否处理印章，默认不做印章处理。取值如下：false：不做任何处理；true：做透明化处理和颜色增强。 */
  ProcessSeal?: boolean;
  /** 印章图片文件 id取值：填写的FileId通过UploadFiles接口上传文件获取。 */
  FileId?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次 1-不绑定，发起合同时将按标准合同套餐进行扣减 */
  LicenseType?: number;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景注: `不传默认为处方单场景，即E_PRESCRIPTION_AUTO_SIGN` */
  SceneKey?: string;
}

declare interface CreatePreparedPersonalEsignResponse {
  /** 导入生成的印章ID，为32位字符串。建议开发者保存此印章ID，开头实名认证后，通过此 ID查询导入的印章。 */
  SealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReleaseFlowRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 待解除的签署流程编号（即原签署流程的编号）。 */
  NeedRelievedFlowId: string;
  /** 解除协议内容, 包括解除理由等信息。 */
  ReliveInfo: RelieveInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 替换解除协议的签署人， 如不指定替换签署人, 则使用原流程的签署人。 如需更换原合同中的企业端签署人，可通过指定该签署人的RecipientId编号更换此企业端签署人。(可通过接口DescribeFlowInfo查询签署人的RecipientId编号)注意：`只能更换自己企业的签署人, 不支持更换个人类型或者其他企业的签署人。``可以不指定替换签署人, 使用原流程的签署人 ` */
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
  /** 证件类型，支持以下类型ID_CARD : 居民身份证HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  IdCardType?: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成(如存在X，请大写)。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber?: string;
  /** 要跳转的链接类型 **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链**APP**： 第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型 */
  EndPoint?: string;
  /** 合同流程ID 注: `如果准备跳转到合同流程签署的详情页面(即PathType=1时)必传, 跳转其他页面可不传` */
  FlowId?: string;
  /** 合同流程组的组ID, 在合同流程组场景下，生成合同流程组的签署链接时需要赋值 */
  FlowGroupId?: string;
  /** 要跳转到的页面类型 **0** : 腾讯电子签小程序个人首页 (默认) 点击查看示例页面 **1** : 腾讯电子签小程序流程合同的详情页 (即合同签署页面)点击查看示例页面 **2** : 腾讯电子签小程序合同列表页 点击查看示例页面 **3** : 腾讯电子签小程序合同封面页 （注：`生成动态签署人补充链接时，必须指定为封面页`）点击查看示例页面 */
  PathType?: number;
  /** 签署完成后是否自动回跳**false**：否, 签署完成不会自动跳转回来(默认)**true**：是, 签署完成会自动跳转回来注: 1. 该参数只针对APP类型（电子签小程序跳转贵方小程序）场景 的签署链接有效2. 手机应用APP 或 微信小程序需要监控界面的返回走后序逻辑, 微信小程序的文档可以参考[这个](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object)3. 电子签小程序跳转贵方APP，不支持自动跳转，必需用户手动点击完成按钮（微信的限制） */
  AutoJumpBack?: boolean;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 生成的签署链接在签署页面隐藏的按钮列表，可设置如下： **0** :合同签署页面更多操作按钮 **1** :合同签署页面更多操作的拒绝签署按钮 **2** :合同签署页面更多操作的转他人处理按钮 **3** :签署成功页的查看详情按钮注: `字段为数组, 可以传值隐藏多个按钮` */
  Hides?: number[];
  /** 签署节点ID，用于生成动态签署人链接完成领取。注：`生成动态签署人补充链接时必传。` */
  RecipientId?: string;
  /** 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。 */
  FlowGroupUrlInfo?: FlowGroupUrlInfo;
}

declare interface CreateSchemeUrlResponse {
  /** 腾讯电子签小程序的签署链接。如果EndPoint是**APP**，得到的链接类似于`pages/guide?from=default&where=mini&id=yDwJSUUirqauh***7jNSxwdirTSGuH&to=CONTRACT_DETAIL&name=&phone=&shortKey=yDw***k1xFc5`, 用法可以参加接口描述中的"跳转到小程序的实现"如果EndPoint是**HTTP**，得到的链接类似于 `https://res.ess.tencent.cn/cdn/h5-activity/jump-mp.html?where=mini&from=SFY&id=yDwfEUUw**4rV6Avz&to=MVP_CONTRACT_COVER&name=%E9%83%**5%86%9B`，点击后会跳转到腾讯电子签小程序进行签署如果EndPoint是**HTTP_SHORT_URL**，得到的链接类似于 `https://essurl.cn/2n**42Nd`，点击后会跳转到腾讯电子签小程序进行签署注： 生成的链路后面不能再增加参数 */
  SchemeUrl?: string;
  /** 二维码，在生成动态签署人跳转封面页链接时返回 */
  SchemeQrcodeUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSealPolicyRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 用户在电子文件签署平台标识信息，具体参考UserInfo结构体。可跟下面的UserIds可叠加起作用 */
  Users: UserInfo[];
  /** 电子印章ID，为32位字符串。建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。 */
  SealId: string;
  /** 授权有效期，时间戳秒级。可以传0，代表有效期到2099年12月12日23点59分59秒。 */
  Expired: number;
  /** 需要授权的用户UserId集合。跟上面的SealId参数配合使用。选填，跟上面的Users同时起作用 */
  UserIds?: string[];
  /** 印章授权内容 */
  Policy?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateSealPolicyResponse {
  /** 最终授权成功的用户ID，在腾讯电子签平台的唯一身份标识，为32位字符串。可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。 */
  UserIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSealRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 电子印章名字，1-50个中文字符注:`同一企业下电子印章名字不能相同` */
  SealName: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 电子印章生成方式空值:(默认)使用上传的图片生成印章, 此时需要上传SealImage图片SealGenerateSourceSystem: 系统生成印章, 无需上传SealImage图片 */
  GenerateSource?: string;
  /** 电子印章类型 , 可选类型如下: **OFFICIAL**: (默认)公章**CONTRACT**: 合同专用章;**FINANCE**: 财务专用章;**PERSONNEL**: 人事专用章**INVOICE**: 发票专用章注: `同企业下只能有一个公章, 重复创建会报错` */
  SealType?: string;
  /** 电子印章图片文件名称，1-50个中文字符。 */
  FileName?: string;
  /** 电子印章图片base64编码，大小不超过10M（原始图片不超过5M），只支持PNG或JPG图片格式注: `通过图片创建的电子印章，需电子签平台人工审核` */
  Image?: string;
  /** 电子印章宽度,单位px参数不再启用，系统会设置印章大小为标准尺寸。 */
  Width?: number;
  /** 电子印章高度,单位px参数不再启用，系统会设置印章大小为标准尺寸。 */
  Height?: number;
  /** 电子印章印章颜色(默认红色RED),RED-红色系统目前只支持红色印章创建。 */
  Color?: string;
  /** 企业印章横向文字，最多可填15个汉字 (若超过印章最大宽度，优先压缩字间距，其次缩小字号)横向文字的位置如下图中的"印章横向文字在这里"![image](https://dyn.ess.tencent.cn/guide/capi/CreateSealByImage2.png) */
  SealHorizontalText?: string;
  /** 暂时不支持下弦文字设置 */
  SealChordText?: string;
  /** 系统生成的印章只支持STAR */
  SealCentralType?: string;
  /** 通过文件上传时，服务端生成的电子印章上传图片的token */
  FileToken?: string;
  /** 印章样式, 可以选择的样式如下: **circle**:(默认)圆形印章**ellipse**:椭圆印章 */
  SealStyle?: string;
  /** 印章尺寸取值描述, 可以选择的尺寸如下: **42_42**: 圆形企业公章直径42mm, 当SealStyle是圆形的时候才有效 **40_40**: 圆形企业印章直径40mm, 当SealStyle是圆形的时候才有效 **45_30**: 椭圆形印章45mm x 30mm, 当SealStyle是椭圆的时候才有效 **40_30**: 椭圆形印章40mm x 30mm, 当SealStyle是椭圆的时候才有效 */
  SealSize?: string;
  /** 企业税号注:1.印章类型SealType是INVOICE类型时，此参数才会生效2.印章类型SealType是INVOICE类型，且该字段没有传入值或传入空时，会取该企业对应的统一社会信用代码作为默认的企业税号（如果是通过授权书授权方式认证的企业，此参数必传不能为空） */
  TaxIdentifyCode?: string;
}

declare interface CreateSealResponse {
  /** 电子印章ID，为32位字符串。建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。 */
  SealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserAutoSignEnableUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
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
  /** 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 20480长度。 在个人自动签的开通、关闭等回调信息场景中，该字段的信息将原封不动地透传给贵方。 */
  UserData?: string;
}

declare interface CreateUserAutoSignEnableUrlResponse {
  /** 个人用户自动签的开通链接, 短链形式。过期时间受 `ExpiredTime` 参数控制。 */
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

declare interface CreateUserAutoSignSealUrlRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 自动签开通个人用户信息, 包括名字,身份证等。 */
  UserInfo: UserThreeFactor;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。` */
  ExpiredTime?: number;
}

declare interface CreateUserAutoSignSealUrlResponse {
  /** 腾讯电子签小程序的AppId，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。 */
  AppId?: string;
  /** 腾讯电子签小程序的原始Id，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。 */
  AppOriginalId?: string;
  /** 个人用户自动签的开通链接, 短链形式。过期时间受 `ExpiredTime` 参数控制。 */
  Url?: string;
  /** 腾讯电子签小程序的跳转路径，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。 */
  Path?: string;
  /** base64格式的跳转二维码图片，可通过微信扫描后跳转到腾讯电子签小程序的开通界面。 */
  QrCode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserMobileChangeUrlRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。 注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 如果您要修改企业员工用户ID，传递此用户ID即可，其他参数（Name，UserAccountType，IdCardType，IdCardNumber）将被忽略。如果不传此用户ID，则会使用其他参数来进行链接生成。[点击查看用户ID的获取方式](https://res.ess.tencent.cn/cdn/tsign-developer-center/assets/images/%E7%BB%84%E7%BB%87%E6%9E%B6%E6%9E%84-47eb7105dd300e6dc0c502fba22688ae.png) */
  UserId?: string;
  /** 要修改手机号用户的类型。0：员工 （默认）1：个人如果是员工类型，只能修改本方员工，而不能修改其他企业的员工。如果是个人类型，可不指定用户身份，生成的是固定的链接，当前登录电子签小程序的用户可进行换绑。 */
  UserAccountType?: number;
  /** 要修改手机号用户的姓名，请确保填写的姓名为对方的真实姓名，而非昵称等代名。如果没有传递 userId且 userAccountType 是 0 或者没有传递， 此参数为必填项。 */
  Name?: string;
  /** 要修改手机号用户的证件类型，目前支持的账号类型如下：ID_CARD : （默认）中国大陆居民身份证 HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  IdCardType?: string;
  /** 要修改手机号用户的身份证号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。如果没有传递 userId且 userAccountType 是 0 或者没有传递， 此参数为必填项。 */
  IdCardNumber?: string;
  /** 要跳转的链接类型HTTP：（默认）跳转电子签小程序的http_url,短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)HTTP_SHORT_URL：跳转电子签小程序的http_url,短信通知或者H5跳转适合此类型，此时返回短链APP：第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型 */
  Endpoint?: string;
  /** 在用户完成实名认证后，其自定义数据将通过[手机号换绑回调](https://qian.tencent.com/developers/company/callback_types_staffs/#%E5%8D%81%E4%B8%89-%E4%B8%AA%E4%BA%BA%E5%91%98%E5%B7%A5%E6%89%8B%E6%9C%BA%E5%8F%B7%E4%BF%AE%E6%94%B9%E5%90%8E%E5%9B%9E%E8%B0%83)返回，以便用户确认其个人数据信息。请注意，自定义数据的字符长度上限为1000，且必须采用base64编码格式。请注意：此参数仅支持通过[获取c端用户实名链接](https://qian.tencent.com/developers/companyApis/users/CreateUserVerifyUrl)接口实名的用户生效。 */
  UserData?: string;
}

declare interface CreateUserMobileChangeUrlResponse {
  /** 腾讯电子签小程序的实名认证链接。如果没有传递，默认值是 HTTP。 链接的有效期均是 7 天。- 如果EndPoint是APP，得到的链接类似于pages/guide/index?to=MOBILE_CHANGE_INTENTION&shortKey=yDCZHUyOcExAlcOvNod0, 用法可以参考描述中的"跳转到小程序的实现"- 如果EndPoint是HTTP，得到的链接类似于https://res.ess.tencent.cn/cdn/h5-activity/jump-mp.html?to=MOBILE_CHANGE_INTENTION&shortKey=yDCZHUyOcChrfpaswT0d，点击后会跳转到腾讯电子签小程序进行签署- 如果EndPoint是HTTP_SHORT_URL，得到的链接类似于https://essurl.cn/2n**42Nd，点击后会跳转到腾讯电子签小程序进行签署注： 生成的链路后面不能再增加参数示例值：https://essurl.cn/2n**42Nd */
  Url?: string;
  /** 链接失效期限如下：如果指定更换绑定手机号的用户(指定用户ID或姓名等信息)，则设定的链接失效期限为7天后。如果没有指定更换绑定手机号的用户，则生成通用跳转到个人换手机号的界面，链接不会过期。 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserVerifyUrlRequest {
  /** 操作人信息 */
  Operator: UserInfo;
  /** 要实名的姓名 */
  Name?: string;
  /** 要实名的身份证号码，身份证号码如果有x的话，统一传大写X */
  IdCardNumber?: string;
  /** 证件类型，目前只支持身份证类型：ID_CARD */
  IdCardType?: string;
  /** 要实名的手机号，兼容带+86的格式 */
  Mobile?: string;
  /** 实名完之后的跳转链接，最大长度1000个字符。链接类型请参考 跳转电子签H5。注：此参数仅支持 Endpoint 为 H5 或 H5_SHORT_URL 的时候传递 */
  JumpUrl?: string;
  /** 要跳转的链接类型- HTTP：跳转电子签小程序的http_url,短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)- HTTP_SHORT_URL：跳转电子签小程序的http_url,短信通知或者H5跳转适合此类型，此时返回短链- APP：第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型- H5：跳转电子签H5实名页面的长链- H5_SHORT_URL：跳转电子签H5实名页面的短链注：如果不传递，默认值是 APP */
  Endpoint?: string;
  /** 签署完成后是否自动回跳false：否, 实名完成不会自动跳转回来(默认)true：是, 实名完成会自动跳转回来注: 1. 该参数只针对APP类型（第三方APP或小程序跳转电子签小程序）场景 的实名链接有效2. 手机应用APP 或 微信小程序需要监控界面的返回走后序逻辑, 微信小程序的文档可以参考[这个](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object)3. 电子签小程序跳转贵方APP，不支持自动跳转，必需用户手动点击完成按钮（微信的限制） */
  AutoJumpBack?: boolean;
  /** 在用户完成实名认证后，其自定义数据将通过[企业引导个人实名认证后回调](https://qian.tencent.com/developers/company/callback_types_staffs/#%E5%8D%81%E4%BA%8C-%E4%BC%81%E4%B8%9A%E5%BC%95%E5%AF%BC%E4%B8%AA%E4%BA%BA%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81%E5%90%8E%E5%9B%9E%E8%B0%83)返回，以便用户确认其个人数据信息。请注意，自定义数据的字符长度上限为1000，且必须采用base64编码格式。 */
  UserData?: string;
}

declare interface CreateUserVerifyUrlResponse {
  /** 腾讯电子签小程序的实名认证链接。如果没有传递，默认值是 HTTP。 链接的有效期均是 7 天。- 如果EndPoint是APP，得到的链接类似于pages/guide/index?to=MP_PERSONAL_VERIFY&shortKey=yDCZHUyOcExAlcOvNod0, 用法可以参考描述中的"跳转到小程序的实现"- 如果EndPoint是HTTP，得到的链接类似于https://res.ess.tencent.cn/cdn/h5-activity/jump-mp.html?to=TAG_VERIFY&shortKey=yDCZHUyOcChrfpaswT0d，点击后会跳转到腾讯电子签小程序进行签署- 如果EndPoint是HTTP_SHORT_URL，得到的链接类似于https://essurl.cn/2n**42Nd，点击后会跳转到腾讯电子签小程序进行签署- 如果EndPoint是H5，得到的链接类似于 https://quick.test.qian.tencent.cn/guide?Code=yDU****VJhsS5q&CodeType=xxx&shortKey=yD*****frcb，点击后会跳转到腾讯电子签H5页面进行签署- 如果EndPoint是H5_SHORT_URL，得到的链接类似于https://essurl.cn/2n**42Nd，点击后会跳转到腾讯电子签H5页面进行签署`注：` 生成的链路后面不能再增加参数示例值：https://essurl.cn/2n**42Nd */
  UserVerifyUrl?: string;
  /** 链接过期时间 */
  ExpireTime?: number;
  /** 小程序appid，用于半屏拉起电子签小程序， 仅在 Endpoint 设置为 APP 的时候返回 */
  MiniAppId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWebThemeConfigRequest {
  /** 注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 主题类型，取值如下： **EMBED_WEB_THEME**：嵌入式主题（默认），web页面嵌入的主题风格配置 */
  ThemeType: string;
  /** 电子签logo是否展示，主体颜色等配置项 */
  WebThemeConfig: WebThemeConfig;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface CreateWebThemeConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteExtendedServiceAuthInfosRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 本企业员工的id，需要已实名，正常在职员工 */
  UserIds: string[];
  /** 取值如下所示：OPEN_SERVER_SIGN：企业自动签BATCH_SIGN：批量签署 */
  ExtendServiceType?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DeleteExtendedServiceAuthInfosResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIntegrationDepartmentRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 电子签中的部门ID，通过DescribeIntegrationDepartments接口可获得。 */
  DeptId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 交接部门ID。待删除部门中的合同、印章和模板数据，将会被交接至该部门ID下；若未填写则交接至公司根部门。 */
  ReceiveDeptId?: string;
}

declare interface DeleteIntegrationDepartmentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIntegrationEmployeesRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写UserId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 待离职员工的信息最多不超过100个。应符合以下规则：1. UserId和OpenId不可同时为空，必须填写其中一个，优先使用UserId。2. **若需要进行离职交接**，交接人信息ReceiveUserId和ReceiveOpenId不可同时为空，必须填写其中一个，优先使用ReceiveUserId。 */
  Employees: Staff[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DeleteIntegrationEmployeesResponse {
  /** 员工删除结果。包含成功数据与失败数据。**成功数据**：展示员工姓名、手机号与电子签平台UserId**失败数据**：展示员工电子签平台UserId、第三方平台OpenId和失败原因 */
  DeleteEmployeeResult?: DeleteStaffsResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIntegrationRoleUsersRequest {
  /** 执行本接口操作的员工信息。 注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 角色id，可以通过DescribeIntegrationRoles接口获取角色信息 */
  RoleId: string;
  /** 用户信息,最多 200 个用户，并且 UserId 和 OpenId 二选一，其他字段不需要传 */
  Users: UserInfo[];
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DeleteIntegrationRoleUsersResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSealPoliciesRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 印章授权编码数组。这个参数跟下面的SealId其中一个必填，另外一个可选填 */
  PolicyIds?: string[];
  /** 电子印章ID，为32位字符串。建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。注：印章ID。这个参数跟上面的PolicyIds其中一个必填，另外一个可选填。 */
  SealId?: string;
  /** 待授权的员工ID，员工在腾讯电子签平台的唯一身份标识，为32位字符串。可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。 */
  UserIds?: string[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DeleteSealPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchOrganizationRegistrationUrlsRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 通过接口CreateBatchOrganizationRegistrationTasks创建企业批量认证链接任得到的任务Id */
  TaskId: string;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
}

declare interface DescribeBatchOrganizationRegistrationUrlsResponse {
  /** 企业批量注册链接信息 */
  OrganizationAuthUrls?: OrganizationAuthUrl[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillUsageDetailRequest {
  /** 查询开始时间字符串，格式为yyyymmdd,时间跨度不能大于31天 */
  StartTime: string;
  /** 查询结束时间字符串，格式为yyyymmdd,时间跨度不能大于31天 */
  EndTime: string;
  /** 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0 */
  Offset?: number;
  /** 指定分页每页返回的数据条数，如果不传默认为 50，单页最大支持 50。 */
  Limit?: number;
  /** 查询的套餐类型 （选填 ）不传则查询所有套餐；目前支持:**CloudEnterprise**: 企业版合同**SingleSignature**: 单方签章**CloudProve**: 签署报告**CloudOnlineSign**: 腾讯会议在线签约**ChannelWeCard**: 微工卡**SignFlow**: 合同套餐**SignFace**: 签署意愿（人脸识别）**SignPassword**: 签署意愿（密码）**SignSMS**: 签署意愿（短信）**PersonalEssAuth**: 签署人实名（腾讯电子签认证）**PersonalThirdAuth**: 签署人实名（信任第三方认证）**OrgEssAuth**: 签署企业实名**FlowNotify**: 短信通知**AuthService**: 企业工商信息查询 */
  QuotaType?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeBillUsageDetailResponse {
  /** 总数 */
  Total?: number;
  /** 消耗详情 */
  Details?: BillUsageDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillUsageRequest {
  /** 查询开始时间字符串，格式为yyyymmdd,时间跨度不能大于90天 */
  StartTime: string;
  /** 查询结束时间字符串，格式为yyyymmdd,时间跨度不能大于90天 */
  EndTime: string;
  /** 查询的套餐类型 （选填 ）不传则查询所有套餐；目前支持:**CloudEnterprise**: 企业版合同**SingleSignature**: 单方签章**CloudProve**: 签署报告**CloudOnlineSign**: 腾讯会议在线签约**ChannelWeCard**: 微工卡**SignFlow**: 合同套餐**SignFace**: 签署意愿（人脸识别）**SignPassword**: 签署意愿（密码）**SignSMS**: 签署意愿（短信）**PersonalEssAuth**: 签署人实名（腾讯电子签认证）**PersonalThirdAuth**: 签署人实名（信任第三方认证）**OrgEssAuth**: 签署企业实名**FlowNotify**: 短信通知**AuthService**: 企业工商信息查询 */
  QuotaType?: string;
  /** 是否展示集团子企业的明细，默认否 */
  DisplaySubEnterprise?: boolean;
}

declare interface DescribeBillUsageResponse {
  /** 企业套餐余额及使用情况 */
  Summary?: OrgBillSummary[];
  /** 集团子企业套餐使用情况 */
  SubOrgSummary?: SubOrgBillSummary[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCancelFlowsTaskRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 批量撤销任务编号，为32位字符串，通过接口[获取批量撤销签署流程腾讯电子签小程序链接](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl)获得。 */
  TaskId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeCancelFlowsTaskResponse {
  /** 批量撤销任务编号，为32位字符串，通过接口[获取批量撤销签署流程腾讯电子签小程序链接](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl)获得。 */
  TaskId?: string;
  /** 任务状态，需要关注的状态**PROCESSING** - 任务执行中**END** - 任务处理完成**TIMEOUT** 任务超时未处理完成，用户未在批量撤销链接有效期内操作 */
  TaskStatus?: string;
  /** 批量撤销成功的签署流程编号 */
  SuccessFlowIds?: string[];
  /** 批量撤销失败的签署流程信息 */
  FailureFlows?: CancelFailureFlow[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtendedServiceAuthDetailRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 要查询的扩展服务类型。如下所示：OPEN_SERVER_SIGN：企业静默签署BATCH_SIGN：批量签署 */
  ExtendServiceType?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 指定每页返回的数据条数，和Offset参数配合使用。 注：`1.默认值为20，单页做大值为200。` */
  Limit?: number;
  /** 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。 注：`1.offset从0开始，即第一页为0。` `2.默认从第一页返回。` */
  Offset?: number;
}

declare interface DescribeExtendedServiceAuthDetailResponse {
  /** 服务授权的信息列表，根据查询类型返回特定扩展服务的授权状况。 */
  AuthInfoDetail?: AuthInfoDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtendedServiceAuthInfosRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 要查询的扩展服务类型。默认为空，即查询当前支持的所有扩展服务信息。若需查询单个扩展服务的开通情况，请传递相应的值，如下所示：OPEN_SERVER_SIGN：企业自动签署BATCH_SIGN：批量签署OVERSEA_SIGN：企业与港澳台居民签署合同AGE_LIMIT_EXPANSION：拓宽签署方年龄限制MOBILE_CHECK_APPROVER：个人签署方仅校验手机号HIDE_OPERATOR_DISPLAY：隐藏合同经办人姓名ORGANIZATION_OCR_FALLBACK：正楷临摹签名失败后更换其他签名类型ORGANIZATION_FLOW_NOTIFY_TYPE：短信通知签署方HIDE_ONE_KEY_SIGN：个人签署方手动签字PAGING_SEAL：骑缝章ORGANIZATION_FLOW_PASSWD_NOTIFY：签署密码开通引导 */
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
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 文件对应的业务类型，目前支持：**FLOW ** : 如需下载合同文件请选择此项**TEMPLATE ** : 如需下载模板文件请选择此项**DOCUMENT **: 如需下载文档文件请选择此项**SEAL **: 如需下载印章图片请选择此项 */
  BusinessType: string;
  /** 业务编号的数组，取值如下：流程编号模板编号文档编号印章编号如需下载合同文件请传入FlowId，最大支持20个资源 */
  BusinessIds: string[];
  /** 下载后的文件命名，只有FileType为zip的时候生效 */
  FileName?: string;
  /** 要下载的文件类型，取值如下：JPGPDFZIP */
  FileType?: string;
  /** 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0，最大 1000。 */
  Offset?: number;
  /** 指定分页每页返回的数据条数，如果不传默认为 20，单页最大支持 100。 */
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
  /** 文件URL信息；链接不是永久链接, 过期时间受UrlTtl入参的影响, 默认有效期5分钟后, 到期后链接失效。 */
  FileUrls?: FileUrl[];
  /** URL数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowBriefsRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 查询的合同流程ID列表最多支持100个流程ID。 如果某个合同流程ID不存在，系统会跳过此ID的查询，继续查询剩余存在的合同流程。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png) */
  FlowIds: string[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeFlowBriefsResponse {
  /** 合同流程基础信息列表，包含流程的名称、状态、创建日期等基本信息。 注：`与入参 FlowIds 的顺序可能存在不一致的情况。` */
  FlowBriefs?: FlowBrief[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowComponentsRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeFlowComponentsResponse {
  /** 合同流程关联的填写控件信息，按照参与方进行分类返回。 */
  RecipientComponentInfos?: RecipientComponentInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowEvidenceReportRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 签署报告编号, 由提交申请出证报告任务产生 */
  ReportId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 指定申请的报告类型，可选类型如下： **0** :合同签署报告（默认） **1** :公证处核验报告 */
  ReportType?: number;
}

declare interface DescribeFlowEvidenceReportResponse {
  /** 出证报告PDF的下载 URL，`有效期为5分钟`，超过有效期后将无法再下载。 */
  ReportUrl?: string | null;
  /** 出证任务执行的状态, 状态含义如下：**EvidenceStatusExecuting**： 出证任务在执行中**EvidenceStatusSuccess**： 出证任务执行成功**EvidenceStatusFailed** ： 出征任务执行失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowInfoRequest {
  /** 执行本接口操作的员工信息。 注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 需要查询的流程ID列表，最多可传入100个ID。如果要查询合同组的信息，则不需要传入此参数，只需传入 FlowGroupId 参数即可。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png) */
  FlowIds?: string[];
  /** 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 需要查询的流程组ID，如果传入此参数，则会忽略 FlowIds 参数。该合同组由通过多文件创建合同组签署流程等接口创建。 */
  FlowGroupId?: string;
}

declare interface DescribeFlowInfoResponse {
  /** 合同流程的详细信息。如果查询的是合同组信息，则返回的是组内所有子合同流程的详细信息。 */
  FlowDetailInfos?: FlowDetailInfo[];
  /** 合同组ID，只有在查询合同组信息时才会返回。 */
  FlowGroupId?: string;
  /** 合同组名称，只有在查询合同组信息时才会返回。 */
  FlowGroupName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowTemplatesRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 查询内容控制**0**：模板列表及详情（默认）**1**：仅模板列表 */
  ContentType?: number;
  /** 搜索条件，本字段用于指定模板Id进行查询。Key：template-id Values：需要查询的模板Id列表 */
  Filters?: Filter[];
  /** 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。注：`1.offset从0开始，即第一页为0。``2.默认从第一页返回。` */
  Offset?: number;
  /** 指定每页返回的数据条数，和Offset参数配合使用。注：`1.默认值为20，单页做大值为200。` */
  Limit?: number;
  /** 指定查询的应用号，指定后查询该应用号下的模板列表。注：`1.ApplicationId为空时，查询所有应用下的模板列表。` */
  ApplicationId?: string;
  /** 默认为false，查询SaaS模板库列表；为true，查询第三方应用集成平台企业模板库管理列表 */
  IsChannel?: boolean;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
  /** 暂未开放 */
  GenerateSource?: number;
  /** 是否获取模板预览链接 */
  WithPreviewUrl?: boolean;
}

declare interface DescribeFlowTemplatesResponse {
  /** 模板详情列表数据 */
  Templates?: TemplateInfo[];
  /** 查询到的模板总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationDepartmentsRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 查询类型，支持以下类型：**0**：查询单个部门节点列表，不包含子节点部门信息**1**：查询单个部门节点级一级子节点部门信息列表 */
  QueryType: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 查询的部门ID。注：`如果同时指定了DeptId与DeptOpenId参数，系统将优先使用DeptId参数进行查询。当二者都未指定时，系统将返回根节点部门数据。` */
  DeptId?: string;
  /** 查询的客户系统部门ID。注：`如果同时指定了DeptId与DeptOpenId参数，系统将优先使用DeptId参数进行查询。当二者都未指定时，系统将返回根节点部门数据。` */
  DeptOpenId?: string;
}

declare interface DescribeIntegrationDepartmentsResponse {
  /** 部门信息列表。部门信息根据部门排序号OrderNo降序排列，根据部门创建时间升序排列。 */
  Departments?: IntegrationDepartment[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationEmployeesRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写UserId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 指定分页每页返回的数据条数，单页最大支持 20。 */
  Limit: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 查询的关键字段，支持Key-Values查询。可选键值如下： Key:**"Status"**，根据实名状态查询员工，Values可选： **["IsVerified"]**：查询已实名的员工**["NotVerified"]**：查询未实名的员工 Key:**"DepartmentId"**，根据部门ID查询部门下的员工，Values为指定的部门ID：**["DepartmentId"]** Key:**"UserId"**，根据用户ID查询员工，Values为指定的用户ID：**["UserId"]** Key:**"UserWeWorkOpenId"**，根据用户企微账号ID查询员工，Values为指定用户的企微账号ID：**["UserWeWorkOpenId"]** Key:**"StaffOpenId"**，根据第三方系统用户OpenId查询员工，Values为第三方系统用户OpenId列表：**["OpenId1","OpenId2",...]** Key:**"RoleId"**，根据电子签角色ID查询员工，Values为指定的角色ID，满足其中任意一个角色即可：**["RoleId1","RoleId2",...]** */
  Filters?: Filter[];
  /** 指定分页返回第几页的数据，如果不传默认返回第一页。页码从 0 开始，即首页为 0，最大20000。 */
  Offset?: number;
}

declare interface DescribeIntegrationEmployeesResponse {
  /** 员工信息列表。 */
  Employees?: Staff[] | null;
  /** 指定分页返回第几页的数据。页码从 0 开始，即首页为 0，最大20000。 */
  Offset?: number | null;
  /** 指定分页每页返回的数据条数，单页最大支持 20。 */
  Limit?: number;
  /** 符合条件的员工数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationRolesRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写UserId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 指定分页每页返回的数据条数，单页最大支持 200。 */
  Limit: number;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 查询的关键字段，支持Key-Value单值查询。可选键值对如下： Key:"RoleType"，查询角色类型，Values可选： **"1"**：查询系统角色**"2"**：查询自定义角色 Key:"RoleStatus"，查询角色状态，Values可选： **"1"**：查询启用角色**"2"**：查询禁用角色 Key:"IsGroupRole"，是否查询集团角色，Values可选： **"0"**：查询非集团角色**"1"**：查询集团角色 Key:"IsReturnPermissionGroup"，是否返回角色对应权限树，Values可选： **"0"**：接口不返回角色对应的权限树字段**"1"**：接口返回角色对应的权限树字段 */
  Filters?: Filter[];
  /** OFFSET 用于指定查询结果的偏移量，如果不传默认偏移为0,最大2000。分页参数, 需要limit, offset 配合使用例如:您希望得到第三页的数据, 且每页限制最多10条您可以使用 LIMIT 10 OFFSET 20 */
  Offset?: number;
}

declare interface DescribeIntegrationRolesResponse {
  /** OFFSET 用于指定查询结果的偏移量，如果不传默认偏移为0, 最大为2000分页参数, 需要limit, offset 配合使用例如:您希望得到第三页的数据, 且每页限制最多10条您可以使用 LIMIT 10 OFFSET 20 */
  Offset?: number;
  /** 指定分页每页返回的数据条数，单页最大支持 200。 */
  Limit?: number;
  /** 符合查询条件的总角色数。 */
  TotalCount?: number;
  /** 企业角色信息列表。 */
  IntegrateRoles?: IntegrateRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationGroupOrganizationsRequest {
  /** 执行本接口操作的员工信息,userId必填。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator: UserInfo;
  /** 指定分页每页返回的数据条数，单页最大1000 */
  Limit: number;
  /** 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0 */
  Offset: number;
  /** 查询成员企业的企业名，模糊匹配 */
  Name?: string;
  /** 成员企业加入集团的当前状态 **1**：待授权 **2**：已授权待激活 **3**：拒绝授权 **4**：已解除 **5**：已加入 */
  Status?: number;
  /** 是否导出当前成员企业数据 **false**：不导出（默认值） **true**：导出 */
  Export?: boolean;
  /** 成员企业机构 ID，32 位字符串，在PC控制台 集团管理可获取 */
  Id?: string;
}

declare interface DescribeOrganizationGroupOrganizationsResponse {
  /** 符合查询条件的资源实例总数量。 */
  Total?: number | null;
  /** 已授权待激活的子企业总数量 */
  JoinedTotal?: number | null;
  /** 已加入的企业数量(废弃,请使用ActivatedTotal) */
  ActivedTotal?: number | null;
  /** 如果入参Export为 true 时使用，表示导出Excel的url */
  ExportUrl?: string | null;
  /** 成员企业信息列表 */
  List?: GroupOrganization[] | null;
  /** 已加入的子企业总数量 */
  ActivatedTotal?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOrganizationSealsRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 指定分页每页返回的数据条数，如果不传默认为 20，单页最大支持 200。 */
  Limit: number;
  /** 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0，最大 20000。 */
  Offset?: number;
  /** 查询授权用户信息类型，取值如下： 0：（默认）不返回授权用户信息 1：返回授权用户的信息 */
  InfoType?: number;
  /** 印章id，是否查询特定的印章（没有输入返回所有） */
  SealId?: string;
  /** 印章种类列表（均为组织机构印章）。 若无特定需求，将展示所有类型的印章。 目前支持以下几种： OFFICIAL：企业公章； CONTRACT：合同专用章； ORGANIZATION_SEAL：企业印章（通过图片上传创建）； LEGAL_PERSON_SEAL：法定代表人章。 */
  SealTypes?: string[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 需查询的印章状态列表。空：（默认）仅查询启用状态的印章；ALL：查询所有状态的印章；CHECKING：查询待审核的印章；SUCCESS：查询启用状态的印章；FAIL：查询印章审核拒绝的印章；DISABLE：查询已停用的印章；STOPPED：查询已终止的印章；VOID：查询已作废的印章；INVALID：查询已失效的印章。 */
  SealStatuses?: string[];
}

declare interface DescribeOrganizationSealsResponse {
  /** 在设定了SealId时，返回值为0或1；若未设定SealId，则返回公司的总印章数量 */
  TotalCount?: number;
  /** 查询到的印章结果数组 */
  Seals?: OccupiedSeal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePersonCertificateRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 个人用户的三要素信息：姓名证件号证件类型 */
  UserInfo: UserThreeFactor;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 证书使用场景，可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey?: string;
}

declare interface DescribePersonCertificateResponse {
  /** 证书的Base64 */
  Cert?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSignFaceVideoRequest {
  /** 执行本接口操作的员工信息。使用此接口时，必须填写userId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。 */
  FlowId: string;
  /** 签署参与人在本流程中的编号ID(每个流程不同)，可用此ID来定位签署参与人在本流程的签署节点，也可用于后续创建签署链接等操作。 */
  SignId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeSignFaceVideoResponse {
  /** 核身视频结果。 */
  VideoData?: DetectInfoVideoData | null;
  /** 意愿核身问答模式结果。若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionQuestionResult?: IntentionQuestionResult | null;
  /** 意愿核身点头确认模式的结果信息，若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionActionResult?: IntentionActionResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeThirdPartyAuthCodeRequest {
  /** 腾讯电子签小程序跳转客户企业小程序时携带的授权查看码，AuthCode由腾讯电子签小程序生成。 */
  AuthCode: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface DescribeThirdPartyAuthCodeResponse {
  /** AuthCode 中对应个人用户是否实名 **VERIFIED** : 此个人已实名 **UNVERIFIED**: 此个人未实名 */
  VerifyStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserAutoSignStatusRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
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
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。**0**: 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人` */
  LicenseType?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserVerifyStatusRequest {
  /** 用户信息 */
  Operator: UserInfo;
  /** 姓名 */
  Name: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给香港居民，“M”字头签发给澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
  /** 证件类型，支持以下类型ID_CARD : 居民身份证 (默认值)HONGKONG_AND_MACAO : 港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证) */
  IdCardType: string;
}

declare interface DescribeUserVerifyStatusResponse {
  /** true:表示已实名false：表示未实名 */
  VerifyStatus?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableUserAutoSignRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
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
  /** 转换任务Id，通过接口创建文件转换任务接口或创建多文件转换任务接口得到的转换任务id */
  TaskId: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface GetTaskResultApiResponse {
  /** 任务Id */
  TaskId?: string;
  /** 任务状态，需要关注的状态**0** :NeedTranform - 任务已提交**4** :Processing - 文档转换中**8** :TaskEnd - 任务处理完成**-2** :DownloadFailed - 下载失败**-6** :ProcessFailed - 转换失败**-13**:ProcessTimeout - 转换文件超时 */
  TaskStatus?: number;
  /** 状态描述，需要关注的状态 **NeedTranform** : 任务已提交 **Processing** : 文档转换中 **TaskEnd** : 任务处理完成 **DownloadFailed** : 下载失败 **ProcessFailed** : 转换失败 **ProcessTimeout** : 转换文件超时 */
  TaskMessage?: string;
  /** 资源Id（即FileId），用于[用PDF文件创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles) */
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

declare interface ModifyExtendedServiceRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 要管理的拓展服务类型。OPEN_SERVER_SIGN：企业自动签署OVERSEA_SIGN：企业与港澳台居民签署合同AGE_LIMIT_EXPANSION：拓宽签署方年龄限制MOBILE_CHECK_APPROVER：个人签署方仅校验手机号HIDE_OPERATOR_DISPLAY：隐藏合同经办人姓名ORGANIZATION_OCR_FALLBACK：正楷临摹签名失败后更换其他签名类型ORGANIZATION_FLOW_NOTIFY_TYPE：短信通知签署方HIDE_ONE_KEY_SIGN：个人签署方手动签字PAGING_SEAL：骑缝章ORGANIZATION_FLOW_PASSWD_NOTIFY：签署密码开通引导 */
  ServiceType: string;
  /** 操作类型OPEN : 开通CLOSE : 关闭 */
  Operate: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 链接跳转类型，支持以下类型WEIXINAPP : 短链直接跳转到电子签小程序 (默认值)APP : 第三方APP或小程序跳转电子签小程序 */
  Endpoint?: string;
}

declare interface ModifyExtendedServiceResponse {
  /** 操作跳转链接，有效期24小时若操作时没有返回跳转链接，表示无需跳转操作，此时会直接开通/关闭服务。当操作类型是 OPEN 且 扩展服务类型是 OPEN_SERVER_SIGN 或者 OVERSEA_SIGN 时返回操作链接，返回的链接当前操作人（超管或法人）点击链接完成服务开通操作。 */
  OperateUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFlowDeadlineRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 签署流程或签署人新的签署截止时间，格式为Unix标准时间戳（秒） */
  Deadline: number;
  /** 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填 */
  Agent?: Agent;
  /** 签署方角色编号，为32位字符串若指定了此参数，则只调整签署流程中此签署人的签署截止时间，否则调整合同整体的签署截止时间（合同截止时间+发起时未设置签署人截止时间的参与人的签署截止时间）通过[用PDF文件创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles)发起合同，或通过[模板发起合同-创建电子文档](https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument)时，返回参数[Approvers](https://qian.tencent.com/developers/companyApis/dataTypes/#approveritem)会返回此信息，建议开发者妥善保存也可通过[查询合同流程的详情信息](https://qian.tencent.com/developers/companyApis/queryFlows/DescribeFlowInfo)接口查询签署人的RecipientId编号 */
  RecipientId?: string;
}

declare interface ModifyFlowDeadlineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIntegrationDepartmentRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 电子签部门ID，通过DescribeIntegrationDepartments接口获得。 */
  DeptId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 电子签父部门ID，通过DescribeIntegrationDepartments接口获得。 */
  ParentDeptId?: string;
  /** 部门名称，最大长度为50个字符。 */
  DeptName?: string;
  /** 客户系统部门ID，最大长度为64个字符。 */
  DeptOpenId?: string;
  /** 排序号，支持设置的数值范围为1~30000。同一父部门下，排序号越大，部门顺序越靠前。 */
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

declare interface RenewAutoSignLicenseRequest {
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 需要续期自动签的个人的信息，如姓名，证件信息等。 */
  UserInfo: UserThreeFactor;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface RenewAutoSignLicenseResponse {
  /** 续期成功后新的自动签许可到期时间。当且仅当已通过许可开通自动签时有值。值为unix时间戳,单位为秒。 */
  LicenseTo?: number;
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
  /** 执行本接口操作的员工信息。使用此接口时，必须填写UserId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。通过DescribeIntegrationEmployees接口获取，也可登录腾讯电子签控制台查看![image](https://qcloudimg.tencent-cloud.cn/raw/97cfffabb0caa61df16999cd395d7850.png) */
  UserId: string;
  /** 员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一企业内不会出现重复。该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。 */
  OpenId: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface UnbindEmployeeUserIdWithClientOpenIdResponse {
  /** 解绑是否成功。 **0**：失败 **1**：成功 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateIntegrationEmployeesRequest {
  /** 执行本接口操作的员工信息,UserId必填。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator: UserInfo;
  /** 需要更新的员工信息，最多不超过100个。根据UserId或OpenId更新员工信息，必须填写其中一个，优先使用UserId。可更新以下字段，其他字段暂不支持 参数 含义 DisplayName 用户的真实名字 Mobile 用户手机号码 Email 用户的邮箱 Department.DepartmentId 用户进入后的部门ID */
  Employees: Staff[];
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
  /** 员工邀请方式可通过以下途径进行设置：**SMS（默认）**：邀请将通过短信或企业微信消息发送。若场景非企业微信，则采用企业微信消息；其他情境下则使用短信通知。短信内含链接，点击后将进入微信小程序进行认证并加入企业的流程。**H5**：将生成H5链接，用户点击链接后可进入H5页面进行认证并加入企业的流程。**NONE**：系统会根据Endpoint生成签署链接，业务方需获取链接并通知客户。 */
  InvitationNotifyType?: string;
  /** 回跳地址，为认证成功后页面进行回跳的URL，请确保回跳地址的可用性。注：`只有在员工邀请方式（InvitationNotifyType参数）为H5场景下才生效， 其他方式下设置无效。` */
  JumpUrl?: string;
  /** 要跳转的链接类型 **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链**APP**： 第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型**H5**： 第三方移动端浏览器进行嵌入，不支持小程序嵌入，过期时间一个月注意：InvitationNotifyType 和 Endpoint 的关系图通知类型（InvitationNotifyType）EndpointSMS（默认）不需要传递，会将 Endpoint 默认设置为HTTP_SHORT_URLH5不需要传递，会将 Endpoint 默认设置为 H5NONE所有 Endpoint 都支持（HTTP_URL/HTTP_SHORT_URL/H5/APP）默认为HTTP_SHORT_URL */
  Endpoint?: string;
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
  /** 文件对应业务类型,可以选择的类型如下 **TEMPLATE** : 此上传的文件用户生成合同模板，文件类型支持.pdf/.doc/.docx/.html格式，如果非pdf文件需要通过创建文件转换任务转换后才能使用 **DOCUMENT** : 此文件用来发起合同流程，文件类型支持.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html，如果非pdf文件需要通过创建文件转换任务转换后才能使用 **SEAL** : 此文件用于印章的生成，文件类型支持.jpg/.jpeg/.png */
  BusinessType: string;
  /** 执行本接口操作的员工信息。其中OperatorId为必填字段，即用户的UserId。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Caller?: Caller;
  /** 上传文件内容数组，最多支持上传20个文件。 */
  FileInfos?: UploadFile[];
  /** 文件类型， 默认通过文件内容和文件后缀一起解析得到文件类型，调用接口时可以显示的指定上传文件的类型。可支持的指定类型如下:pdfdocdocxxlsxlsxhtmljpgjpegpng如：pdf 表示上传的文件 张三入职合同.pdf的文件类型是 pdf */
  FileType?: string;
  /** 此参数仅对上传的PDF文件有效。其主要作用是确定是否将PDF中的灰色矩阵置为白色。**true**：将灰色矩阵置为白色。**false**：无需处理，不会将灰色矩阵置为白色（默认）。注: `该参数仅在关键字定位时，需要去除关键字所在的灰框场景下使用。` */
  CoverRect?: boolean;
  /** 用户自定义ID数组，与上传文件一一对应注: `历史遗留问题，已经废弃，调用接口时不用赋值` */
  CustomIds?: string[];
  /** 不再使用，上传文件链接数组，最多支持20个URL */
  FileUrls?: string;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface UploadFilesResponse {
  /** 文件资源ID数组，每个文件资源ID为32位字符串。建议开发者保存此资源ID，后续创建合同或创建合同流程需此资源ID。 */
  FileIds?: string[];
  /** 上传成功文件数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyPdfRequest {
  /** 合同流程ID，为32位字符串。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。 */
  Operator?: UserInfo;
  /** 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。 */
  Agent?: Agent;
}

declare interface VerifyPdfResponse {
  /** 验签结果代码，代码的含义如下：**1**：文件未被篡改，全部签名在腾讯电子签完成。**2**：文件未被篡改，部分签名在腾讯电子签完成。**3**：文件被篡改。**4**：异常：文件内没有签名域。**5**：异常：文件签名格式错误。 */
  VerifyResult?: number;
  /** 验签结果详情，每个签名域对应的验签结果。状态值如下 **1** :验签成功，在电子签签署 **2** :验签成功，在其他平台签署 **3** :验签失败 **4** :pdf文件没有签名域 **5** :文件签名格式错误 */
  PdfVerifyResults?: PdfVerifyResult[];
  /** 验签序列号, 为11为数组组成的字符串 */
  VerifySerialNo?: string;
  /** 合同文件MD5哈希值 */
  PdfResourceMd5?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ess 腾讯电子签企业版} */
declare interface Ess {
  (): Versions;
  /** 员工Userid与客户系统Openid绑定 {@link BindEmployeeUserIdWithClientOpenIdRequest} {@link BindEmployeeUserIdWithClientOpenIdResponse} */
  BindEmployeeUserIdWithClientOpenId(data: BindEmployeeUserIdWithClientOpenIdRequest, config?: AxiosRequestConfig): AxiosPromise<BindEmployeeUserIdWithClientOpenIdResponse>;
  /** 撤销单个合同流程 {@link CancelFlowRequest} {@link CancelFlowResponse} */
  CancelFlow(data: CancelFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CancelFlowResponse>;
  /** 取消一码多签签署码 {@link CancelMultiFlowSignQRCodeRequest} {@link CancelMultiFlowSignQRCodeResponse} */
  CancelMultiFlowSignQRCode(data: CancelMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CancelMultiFlowSignQRCodeResponse>;
  /** 撤销个人用户自动签的开通链接 {@link CancelUserAutoSignEnableUrlRequest} {@link CancelUserAutoSignEnableUrlResponse} */
  CancelUserAutoSignEnableUrl(data: CancelUserAutoSignEnableUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CancelUserAutoSignEnableUrlResponse>;
  /** 获取批量撤销签署流程腾讯电子签小程序链接 {@link CreateBatchCancelFlowUrlRequest} {@link CreateBatchCancelFlowUrlResponse} */
  CreateBatchCancelFlowUrl(data: CreateBatchCancelFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchCancelFlowUrlResponse>;
  /** 创建企业批量认证链接 {@link CreateBatchOrganizationRegistrationTasksRequest} {@link CreateBatchOrganizationRegistrationTasksResponse} */
  CreateBatchOrganizationRegistrationTasks(data: CreateBatchOrganizationRegistrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchOrganizationRegistrationTasksResponse>;
  /** 获取H5批量签署链接 {@link CreateBatchQuickSignUrlRequest} {@link CreateBatchQuickSignUrlResponse} */
  CreateBatchQuickSignUrl(data: CreateBatchQuickSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchQuickSignUrlResponse>;
  /** 获取跳转至腾讯电子签小程序的批量签署链接 {@link CreateBatchSignUrlRequest} {@link CreateBatchSignUrlResponse} */
  CreateBatchSignUrl(data: CreateBatchSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchSignUrlResponse>;
  /** 创建文件转换任务 {@link CreateConvertTaskApiRequest} {@link CreateConvertTaskApiResponse} */
  CreateConvertTaskApi(data: CreateConvertTaskApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConvertTaskApiResponse>;
  /** 模板发起合同-创建电子文档 {@link CreateDocumentRequest} {@link CreateDocumentResponse} */
  CreateDocument(data: CreateDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocumentResponse>;
  /** 获取其他可嵌入web页面 {@link CreateEmbedWebUrlRequest} {@link CreateEmbedWebUrlResponse} */
  CreateEmbedWebUrl(data: CreateEmbedWebUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmbedWebUrlResponse>;
  /** 创建企业扩展服务授权 {@link CreateExtendedServiceAuthInfosRequest} {@link CreateExtendedServiceAuthInfosResponse} */
  CreateExtendedServiceAuthInfos(data: CreateExtendedServiceAuthInfosRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExtendedServiceAuthInfosResponse>;
  /** 模板发起合同-创建签署流程 {@link CreateFlowRequest} {@link CreateFlowResponse} */
  CreateFlow(data: CreateFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowResponse>;
  /** 补充签署流程签署人信息 {@link CreateFlowApproversRequest} {@link CreateFlowApproversResponse} */
  CreateFlowApprovers(data: CreateFlowApproversRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowApproversResponse>;
  /** 获取签署存证证书查看二维码 {@link CreateFlowBlockchainEvidenceUrlRequest} {@link CreateFlowBlockchainEvidenceUrlResponse} */
  CreateFlowBlockchainEvidenceUrl(data: CreateFlowBlockchainEvidenceUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowBlockchainEvidenceUrlResponse>;
  /** 用PDF文件创建签署流程 {@link CreateFlowByFilesRequest} {@link CreateFlowByFilesResponse} */
  CreateFlowByFiles(data: CreateFlowByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowByFilesResponse>;
  /** 提交申请出证报告任务 {@link CreateFlowEvidenceReportRequest} {@link CreateFlowEvidenceReportResponse} */
  CreateFlowEvidenceReport(data: CreateFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowEvidenceReportResponse>;
  /** 通过多文件创建合同组签署流程 {@link CreateFlowGroupByFilesRequest} {@link CreateFlowGroupByFilesResponse} */
  CreateFlowGroupByFiles(data: CreateFlowGroupByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowGroupByFilesResponse>;
  /** 通过多模板创建合同组签署流程 {@link CreateFlowGroupByTemplatesRequest} {@link CreateFlowGroupByTemplatesResponse} */
  CreateFlowGroupByTemplates(data: CreateFlowGroupByTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowGroupByTemplatesResponse>;
  /** 提交合同组签署流程审批结果 {@link CreateFlowGroupSignReviewRequest} {@link CreateFlowGroupSignReviewResponse} */
  CreateFlowGroupSignReview(data: CreateFlowGroupSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowGroupSignReviewResponse>;
  /** 合同催办 {@link CreateFlowRemindsRequest} {@link CreateFlowRemindsResponse} */
  CreateFlowReminds(data: CreateFlowRemindsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowRemindsResponse>;
  /** 提交签署流程审批结果 {@link CreateFlowSignReviewRequest} {@link CreateFlowSignReviewResponse} */
  CreateFlowSignReview(data: CreateFlowSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowSignReviewResponse>;
  /** 获取H5签署链接 {@link CreateFlowSignUrlRequest} {@link CreateFlowSignUrlResponse} */
  CreateFlowSignUrl(data: CreateFlowSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowSignUrlResponse>;
  /** 创建企业部门 {@link CreateIntegrationDepartmentRequest} {@link CreateIntegrationDepartmentResponse} */
  CreateIntegrationDepartment(data: CreateIntegrationDepartmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationDepartmentResponse>;
  /** 创建企业员工 {@link CreateIntegrationEmployeesRequest} {@link CreateIntegrationEmployeesResponse} */
  CreateIntegrationEmployees(data: CreateIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationEmployeesResponse>;
  /** 创建企业角色 {@link CreateIntegrationRoleRequest} {@link CreateIntegrationRoleResponse} */
  CreateIntegrationRole(data: CreateIntegrationRoleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationRoleResponse>;
  /** 创建子企业激活记录 {@link CreateIntegrationSubOrganizationActiveRecordRequest} {@link CreateIntegrationSubOrganizationActiveRecordResponse} */
  CreateIntegrationSubOrganizationActiveRecord(data: CreateIntegrationSubOrganizationActiveRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationSubOrganizationActiveRecordResponse>;
  /** 绑定员工角色 {@link CreateIntegrationUserRolesRequest} {@link CreateIntegrationUserRolesResponse} */
  CreateIntegrationUserRoles(data: CreateIntegrationUserRolesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationUserRolesResponse>;
  /** 获取到电子签小程序创建法人章二维码 {@link CreateLegalSealQrCodeRequest} {@link CreateLegalSealQrCodeResponse} */
  CreateLegalSealQrCode(data?: CreateLegalSealQrCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLegalSealQrCodeResponse>;
  /** 创建一码多签签署码 {@link CreateMultiFlowSignQRCodeRequest} {@link CreateMultiFlowSignQRCodeResponse} */
  CreateMultiFlowSignQRCode(data: CreateMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMultiFlowSignQRCodeResponse>;
  /** 创建企业认证链接 {@link CreateOrganizationAuthUrlRequest} {@link CreateOrganizationAuthUrlResponse} */
  CreateOrganizationAuthUrl(data: CreateOrganizationAuthUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationAuthUrlResponse>;
  /** 获取企业签署合同web页面 {@link CreateOrganizationBatchSignUrlRequest} {@link CreateOrganizationBatchSignUrlResponse} */
  CreateOrganizationBatchSignUrl(data: CreateOrganizationBatchSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationBatchSignUrlResponse>;
  /** 生成集团加入邀请二维码 {@link CreateOrganizationGroupInvitationLinkRequest} {@link CreateOrganizationGroupInvitationLinkResponse} */
  CreateOrganizationGroupInvitationLink(data: CreateOrganizationGroupInvitationLinkRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationGroupInvitationLinkResponse>;
  /** 创建企业信息变更链接 {@link CreateOrganizationInfoChangeUrlRequest} {@link CreateOrganizationInfoChangeUrlResponse} */
  CreateOrganizationInfoChangeUrl(data: CreateOrganizationInfoChangeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationInfoChangeUrlResponse>;
  /** 获取个人用户认证证书图片 {@link CreatePersonAuthCertificateImageRequest} {@link CreatePersonAuthCertificateImageResponse} */
  CreatePersonAuthCertificateImage(data: CreatePersonAuthCertificateImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonAuthCertificateImageResponse>;
  /** 创建发起流程web页面 {@link CreatePrepareFlowRequest} {@link CreatePrepareFlowResponse} */
  CreatePrepareFlow(data: CreatePrepareFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrepareFlowResponse>;
  /** 创建导入处方单个人印章 {@link CreatePreparedPersonalEsignRequest} {@link CreatePreparedPersonalEsignResponse} */
  CreatePreparedPersonalEsign(data: CreatePreparedPersonalEsignRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePreparedPersonalEsignResponse>;
  /** 发起解除协议 {@link CreateReleaseFlowRequest} {@link CreateReleaseFlowResponse} */
  CreateReleaseFlow(data: CreateReleaseFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseFlowResponse>;
  /** 获取跳转至腾讯电子签小程序的签署链接 {@link CreateSchemeUrlRequest} {@link CreateSchemeUrlResponse} */
  CreateSchemeUrl(data: CreateSchemeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSchemeUrlResponse>;
  /** 创建企业电子印章 {@link CreateSealRequest} {@link CreateSealResponse} */
  CreateSeal(data: CreateSealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealResponse>;
  /** 创建企业员工印章授权 {@link CreateSealPolicyRequest} {@link CreateSealPolicyResponse} */
  CreateSealPolicy(data: CreateSealPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealPolicyResponse>;
  /** 获取个人用户自动签的开通链接 {@link CreateUserAutoSignEnableUrlRequest} {@link CreateUserAutoSignEnableUrlResponse} */
  CreateUserAutoSignEnableUrl(data: CreateUserAutoSignEnableUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserAutoSignEnableUrlResponse>;
  /** 获取设置自动签印章小程序链接 {@link CreateUserAutoSignSealUrlRequest} {@link CreateUserAutoSignSealUrlResponse} */
  CreateUserAutoSignSealUrl(data: CreateUserAutoSignSealUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserAutoSignSealUrlResponse>;
  /** 生成修改用户手机号链接 {@link CreateUserMobileChangeUrlRequest} {@link CreateUserMobileChangeUrlResponse} */
  CreateUserMobileChangeUrl(data: CreateUserMobileChangeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserMobileChangeUrlResponse>;
  /** 获取c端用户实名链接 {@link CreateUserVerifyUrlRequest} {@link CreateUserVerifyUrlResponse} */
  CreateUserVerifyUrl(data: CreateUserVerifyUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserVerifyUrlResponse>;
  /** 设置本企业嵌入式页面主题配置 {@link CreateWebThemeConfigRequest} {@link CreateWebThemeConfigResponse} */
  CreateWebThemeConfig(data: CreateWebThemeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWebThemeConfigResponse>;
  /** 删除企业扩展服务授权 {@link DeleteExtendedServiceAuthInfosRequest} {@link DeleteExtendedServiceAuthInfosResponse} */
  DeleteExtendedServiceAuthInfos(data: DeleteExtendedServiceAuthInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteExtendedServiceAuthInfosResponse>;
  /** 删除企业部门 {@link DeleteIntegrationDepartmentRequest} {@link DeleteIntegrationDepartmentResponse} */
  DeleteIntegrationDepartment(data: DeleteIntegrationDepartmentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationDepartmentResponse>;
  /** 离职企业员工 {@link DeleteIntegrationEmployeesRequest} {@link DeleteIntegrationEmployeesResponse} */
  DeleteIntegrationEmployees(data: DeleteIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationEmployeesResponse>;
  /** 解绑员工角色 {@link DeleteIntegrationRoleUsersRequest} {@link DeleteIntegrationRoleUsersResponse} */
  DeleteIntegrationRoleUsers(data: DeleteIntegrationRoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationRoleUsersResponse>;
  /** 撤销企业员工的印章授权 {@link DeleteSealPoliciesRequest} {@link DeleteSealPoliciesResponse} */
  DeleteSealPolicies(data: DeleteSealPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSealPoliciesResponse>;
  /** 查询企业批量认证链接 {@link DescribeBatchOrganizationRegistrationUrlsRequest} {@link DescribeBatchOrganizationRegistrationUrlsResponse} */
  DescribeBatchOrganizationRegistrationUrls(data: DescribeBatchOrganizationRegistrationUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchOrganizationRegistrationUrlsResponse>;
  /** 查询企业套餐使用情况 {@link DescribeBillUsageRequest} {@link DescribeBillUsageResponse} */
  DescribeBillUsage(data: DescribeBillUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillUsageResponse>;
  /** 查询企业计费使用情况 {@link DescribeBillUsageDetailRequest} {@link DescribeBillUsageDetailResponse} */
  DescribeBillUsageDetail(data: DescribeBillUsageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillUsageDetailResponse>;
  /** 查询批量撤销签署流程任务结果 {@link DescribeCancelFlowsTaskRequest} {@link DescribeCancelFlowsTaskResponse} */
  DescribeCancelFlowsTask(data: DescribeCancelFlowsTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCancelFlowsTaskResponse>;
  /** 查询企业扩展服务授权详情 {@link DescribeExtendedServiceAuthDetailRequest} {@link DescribeExtendedServiceAuthDetailResponse} */
  DescribeExtendedServiceAuthDetail(data: DescribeExtendedServiceAuthDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtendedServiceAuthDetailResponse>;
  /** 查询企业扩展服务授权信息 {@link DescribeExtendedServiceAuthInfosRequest} {@link DescribeExtendedServiceAuthInfosResponse} */
  DescribeExtendedServiceAuthInfos(data: DescribeExtendedServiceAuthInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtendedServiceAuthInfosResponse>;
  /** 查询文件下载URL {@link DescribeFileUrlsRequest} {@link DescribeFileUrlsResponse} */
  DescribeFileUrls(data: DescribeFileUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileUrlsResponse>;
  /** 查询流程基础信息 {@link DescribeFlowBriefsRequest} {@link DescribeFlowBriefsResponse} */
  DescribeFlowBriefs(data: DescribeFlowBriefsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowBriefsResponse>;
  /** 查询流程填写控件内容 {@link DescribeFlowComponentsRequest} {@link DescribeFlowComponentsResponse} */
  DescribeFlowComponents(data: DescribeFlowComponentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowComponentsResponse>;
  /** 获取出证报告任务执行结果 {@link DescribeFlowEvidenceReportRequest} {@link DescribeFlowEvidenceReportResponse} */
  DescribeFlowEvidenceReport(data: DescribeFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowEvidenceReportResponse>;
  /** 查询合同流程的详情信息 {@link DescribeFlowInfoRequest} {@link DescribeFlowInfoResponse} */
  DescribeFlowInfo(data?: DescribeFlowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowInfoResponse>;
  /** 查询模板信息 {@link DescribeFlowTemplatesRequest} {@link DescribeFlowTemplatesResponse} */
  DescribeFlowTemplates(data: DescribeFlowTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowTemplatesResponse>;
  /** 获取企业部门信息列表 {@link DescribeIntegrationDepartmentsRequest} {@link DescribeIntegrationDepartmentsResponse} */
  DescribeIntegrationDepartments(data: DescribeIntegrationDepartmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationDepartmentsResponse>;
  /** 查询企业员工信息列表 {@link DescribeIntegrationEmployeesRequest} {@link DescribeIntegrationEmployeesResponse} */
  DescribeIntegrationEmployees(data: DescribeIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationEmployeesResponse>;
  /** 查询企业角色列表 {@link DescribeIntegrationRolesRequest} {@link DescribeIntegrationRolesResponse} */
  DescribeIntegrationRoles(data: DescribeIntegrationRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationRolesResponse>;
  /** 查询集团企业列表 {@link DescribeOrganizationGroupOrganizationsRequest} {@link DescribeOrganizationGroupOrganizationsResponse} */
  DescribeOrganizationGroupOrganizations(data: DescribeOrganizationGroupOrganizationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationGroupOrganizationsResponse>;
  /** 查询企业电子印章 {@link DescribeOrganizationSealsRequest} {@link DescribeOrganizationSealsResponse} */
  DescribeOrganizationSeals(data: DescribeOrganizationSealsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationSealsResponse>;
  /** 查询个人证书接口 {@link DescribePersonCertificateRequest} {@link DescribePersonCertificateResponse} */
  DescribePersonCertificate(data: DescribePersonCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonCertificateResponse>;
  /** 查询签署认证人脸视频 {@link DescribeSignFaceVideoRequest} {@link DescribeSignFaceVideoResponse} */
  DescribeSignFaceVideo(data: DescribeSignFaceVideoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSignFaceVideoResponse>;
  /** 通过AuthCode查询个人用户是否实名 {@link DescribeThirdPartyAuthCodeRequest} {@link DescribeThirdPartyAuthCodeResponse} */
  DescribeThirdPartyAuthCode(data: DescribeThirdPartyAuthCodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeThirdPartyAuthCodeResponse>;
  /** 获取个人用户自动签的开通状态 {@link DescribeUserAutoSignStatusRequest} {@link DescribeUserAutoSignStatusResponse} */
  DescribeUserAutoSignStatus(data: DescribeUserAutoSignStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserAutoSignStatusResponse>;
  /** 查询用户实名状态 {@link DescribeUserVerifyStatusRequest} {@link DescribeUserVerifyStatusResponse} */
  DescribeUserVerifyStatus(data: DescribeUserVerifyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserVerifyStatusResponse>;
  /** 关闭个人用户自动签功能 {@link DisableUserAutoSignRequest} {@link DisableUserAutoSignResponse} */
  DisableUserAutoSign(data: DisableUserAutoSignRequest, config?: AxiosRequestConfig): AxiosPromise<DisableUserAutoSignResponse>;
  /** 查询转换任务状态 {@link GetTaskResultApiRequest} {@link GetTaskResultApiResponse} */
  GetTaskResultApi(data: GetTaskResultApiRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskResultApiResponse>;
  /** 修改企业回调配置 {@link ModifyApplicationCallbackInfoRequest} {@link ModifyApplicationCallbackInfoResponse} */
  ModifyApplicationCallbackInfo(data: ModifyApplicationCallbackInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationCallbackInfoResponse>;
  /** 管理企业扩展服务 {@link ModifyExtendedServiceRequest} {@link ModifyExtendedServiceResponse} */
  ModifyExtendedService(data: ModifyExtendedServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExtendedServiceResponse>;
  /** 管理签署流程截止时间 {@link ModifyFlowDeadlineRequest} {@link ModifyFlowDeadlineResponse} */
  ModifyFlowDeadline(data: ModifyFlowDeadlineRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFlowDeadlineResponse>;
  /** 更新企业部门信息 {@link ModifyIntegrationDepartmentRequest} {@link ModifyIntegrationDepartmentResponse} */
  ModifyIntegrationDepartment(data: ModifyIntegrationDepartmentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationDepartmentResponse>;
  /** 更新企业角色 {@link ModifyIntegrationRoleRequest} {@link ModifyIntegrationRoleResponse} */
  ModifyIntegrationRole(data: ModifyIntegrationRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationRoleResponse>;
  /** 续期医疗自动签许可 {@link RenewAutoSignLicenseRequest} {@link RenewAutoSignLicenseResponse} */
  RenewAutoSignLicense(data: RenewAutoSignLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<RenewAutoSignLicenseResponse>;
  /** 模板发起合同-发起签署流程 {@link StartFlowRequest} {@link StartFlowResponse} */
  StartFlow(data: StartFlowRequest, config?: AxiosRequestConfig): AxiosPromise<StartFlowResponse>;
  /** 解除员工UserId与客户系统OpenId的绑定 {@link UnbindEmployeeUserIdWithClientOpenIdRequest} {@link UnbindEmployeeUserIdWithClientOpenIdResponse} */
  UnbindEmployeeUserIdWithClientOpenId(data: UnbindEmployeeUserIdWithClientOpenIdRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindEmployeeUserIdWithClientOpenIdResponse>;
  /** 更新企业员工信息 {@link UpdateIntegrationEmployeesRequest} {@link UpdateIntegrationEmployeesResponse} */
  UpdateIntegrationEmployees(data: UpdateIntegrationEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateIntegrationEmployeesResponse>;
  /** 上传文件 {@link UploadFilesRequest} {@link UploadFilesResponse} */
  UploadFiles(data: UploadFilesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFilesResponse>;
  /** 流程文件验签 {@link VerifyPdfRequest} {@link VerifyPdfResponse} */
  VerifyPdf(data: VerifyPdfRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyPdfResponse>;
}

export declare type Versions = ["2020-11-11"];

export default Ess;
