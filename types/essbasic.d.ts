/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用相关信息, 整体应用的层级图如下注: 1. `不同的业务系统可以采用不同的应用，不同应用下的数据是隔离的, 应用A中的某个企业已经实名, 在应用B中此企业还需要重新认证` */
declare interface Agent {
  /** 应用的唯一标识(由电子签平台自动生成)。不同的业务系统可以采用不同的AppId，不同AppId下的数据是隔离的。可以由控制台开发者中心-应用集成自主生成。位置如下:![image](https://qcloudimg.tencent-cloud.cn/raw/fac77e0d3f28aaec56669f67e65c8db8.png) */
  AppId: string;
  /** 第三方应用平台自定义，对应第三方平台子客企业的唯一标识。一个第三方平台子客企业主体与子客企业ProxyOrganizationOpenId是一一对应的，不可更改，不可重复使用。（例如，可以使用企业名称的hash值，或者社会统一信用代码的hash值，或者随机hash值，需要第三方应用平台保存），最大64位字符串 */
  ProxyOrganizationOpenId?: string;
  /** 第三方平台子客企业中的员工/经办人，通过第三方应用平台进入电子签完成实名、且被赋予相关权限后，可以参与到企业资源的管理或签署流程中。 */
  ProxyOperator?: UserInfo;
  /** **不用填写**，在第三方平台子客企业开通电子签后，会生成唯一的子客应用Id（ProxyAppId）用于代理调用时的鉴权，在子客开通的回调中获取。 */
  ProxyAppId?: string;
  /** 内部参数，暂未开放使用 */
  ProxyOrganizationId?: string;
}

/** 指定签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式。 */
declare interface ApproverComponentLimitType {
  /** 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。 */
  RecipientId: string;
  /** 签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式。签名方式：HANDWRITE-手写签名ESIGN-个人印章类型OCR_ESIGN-AI智能识别手写签名SYSTEM_ESIGN-系统签名 */
  Values?: string[];
}

/** 签署方信息，发起合同后可获取到对应的签署方信息，如角色ID，角色名称 */
declare interface ApproverItem {
  /** 签署方唯一编号在动态补充签署人场景下，可以用此编号确定参与方 */
  SignId?: string;
  /** 签署方角色编号在动态补充签署人场景下，可以用此编号确定参与方 */
  RecipientId?: string;
  /** 签署方角色名称 */
  ApproverRoleName?: string;
}

/** 签署人个性化能力信息 */
declare interface ApproverOption {
  /** 是否可以拒签 默认false-可以拒签 true-不可以拒签 */
  NoRefuse?: boolean;
  /** 是否可以转发 默认false-可以转发 true-不可以转发 */
  NoTransfer?: boolean;
  /** 当签署方有多个签署区时候，是否隐藏一键所有的签署区false：（默认）不隐藏true：隐藏，每个签署区要单独选择印章或者签名 */
  HideOneKeySign?: boolean;
  /** 签署人信息补充类型，默认无需补充。 **1** : 动态签署人（可发起合同后再补充签署人信息）注：`企业自动签不支持动态补充`注：`使用动态签署人能力前，需登陆腾讯电子签控制台打开服务开关` */
  FillType?: number;
  /** 签署人阅读合同限制参数 取值： LimitReadTimeAndBottom，阅读合同必须限制阅读时长并且必须阅读到底 LimitReadTime，阅读合同仅限制阅读时长 LimitBottom，阅读合同仅限制必须阅读到底 NoReadTimeAndBottom，阅读合同不限制阅读时长且不限制阅读到底（白名单功能，请联系客户经理开白使用） */
  FlowReadLimit?: string;
  /** 禁止在签署过程中添加签署日期控件 前置条件：文件发起合同时，指定SignBeanTag=1（可以在签署过程中添加签署控件）： 默认值：false，在开启：签署过程中添加签署控件时，添加签署控件会默认自带签署日期控件 可选值：true，在开启：签署过程中添加签署控件时，添加签署控件不会自带签署日期控件 */
  ForbidAddSignDate?: boolean;
}

/** 指定签署人限制项 */
declare interface ApproverRestriction {
  /** 指定签署人姓名 */
  Name?: string;
  /** 指定签署人手机号，11位数字 */
  Mobile?: string;
  /** 指定签署人证件类型，ID_CARD-身份证，HONGKONG_AND_MACAO-港澳居民来往内地通行证，HONGKONG_MACAO_AND_TAIWAN-港澳台居民居住证 */
  IdCardType?: string;
  /** 指定签署人证件号码，其中字母大写 */
  IdCardNumber?: string;
}

/** 授权出错信息 */
declare interface AuthFailMessage {
  /** 第三方平台子客企业的唯一标识，长度不能超过64，只能由字母和数字组成。开发者可自定义此字段的值，并需要保存此 ID 以便进行后续操作。一个第三方平台子客企业主体与子客企业 ProxyOrganizationOpenId 是一一对应的，不可更改，不可重复使用。例如，可以使用企业名称的哈希值，或者社会统一信用代码的哈希值，或者随机哈希值。 */
  ProxyOrganizationOpenId?: string;
  /** 错误信息 */
  Message?: string;
}

/** 企业扩展服务授权列表详情 */
declare interface AuthInfoDetail {
  /** 扩展服务类型，和入参一致 */
  Type?: string;
  /** 扩展服务名称 */
  Name?: string;
  /** 授权员工列表 */
  HasAuthUserList?: HasAuthUser[];
  /** 授权企业列表（企业自动签时，该字段有值） */
  HasAuthOrganizationList?: HasAuthOrganization[];
  /** 授权员工列表总数 */
  AuthUserTotal?: number;
  /** 授权企业列表总数 */
  AuthOrganizationTotal?: number;
}

/** 授权用户 */
declare interface AuthorizedUser {
  /** 第三方应用平台的用户openid */
  OpenId?: string;
}

/** 自动签开启、签署相关配置 */
declare interface AutoSignConfig {
  /** 自动签开通个人用户信息, 包括名字,身份证等 */
  UserInfo: UserThreeFactor;
  /** 是否回调证书信息:**false**: 不需要(默认)**true**:需要注：`该字段已经失效，请勿设置此参数。` */
  CertInfoCallback?: boolean;
  /** 是否支持用户自定义签名印章:**false**: 不能自己定义(默认)**true**: 可以自己定义 */
  UserDefineSeal?: boolean;
  /** 回调中是否需要自动签将要使用的印章（签名）图片的 base64:**false**: 不需要(默认)**true**: 需要 */
  SealImgCallback?: boolean;
  /** 该字段已废弃，请使用【应用号配置】中的回调地址统一接口消息 */
  CallbackUrl?: string;
  /** 开通时候的身份验证方式, 取值为：**WEIXINAPP** : 微信人脸识别**INSIGHT** : 慧眼人脸识别**TELECOM** : 运营商三要素验证注：如果是小程序开通链接，支持传 WEIXINAPP / TELECOM。为空默认 WEIXINAPP如果是 H5 开通链接，支持传 INSIGHT / TELECOM。为空默认 INSIGHT */
  VerifyChannels?: string[];
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。1: (默认)不绑定自动签账号许可开通，开通后一直有效, 后续使用合同份额进行合同发起注：`该字段已经失效，请勿设置此参数。` */
  LicenseType?: number;
  /** 开通成功后前端页面跳转的url，此字段的用法场景请联系客户经理确认。注：`仅支持H5开通场景`, `跳转链接仅支持 https:// , qianapp:// 开头`跳转场景：**贵方H5 -> 腾讯电子签H5 -> 贵方H5** : JumpUrl格式: https://YOUR_CUSTOM_URL/xxxx，只需满足 https:// 开头的正确且合规的网址即可。**贵方原生App -> 腾讯电子签H5 -> 贵方原生App** : JumpUrl格式: qianapp://YOUR_CUSTOM_URL，只需满足 qianapp:// 开头的URL即可。`APP实现方，需要拦截Webview地址跳转，发现url是qianapp:// 开头时跳转到原生页面。`APP拦截地址跳转可参考：Android，IOS 成功结果返回：若贵方需要在跳转回时通过链接query参数提示开通成功，JumpUrl中的query应携带如下参数：`appendResult=qian`。这样腾讯电子签H5会在跳转回的url后面会添加query参数提示贵方签署成功，例如：qianapp://YOUR_CUSTOM_URL?action=sign&result=success&from=tencent_ess */
  JumpUrl?: string;
}

/** 基础流程信息 */
declare interface BaseFlowInfo {
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowName: string;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。 */
  Deadline: number;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。 */
  FlowType?: string;
  /** 合同流程描述信息(可自定义此描述)，最大长度1000个字符。 */
  FlowDescription?: string;
  /** 合同流程的签署顺序类型：**false**：(默认)有序签署, 本合同多个参与人需要依次签署**true**：无序签署, 本合同多个参与人没有先后签署限制 */
  Unordered?: boolean;
  /** 是否打开智能添加填写区(默认开启，打开:"OPEN" 关闭："CLOSE") */
  IntelligentStatus?: string;
  /** 填写控件内容， 填写的控制的ID-填写的内容对列表 */
  FormFields?: FormField[];
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
  /** 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为1000长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。注1. 抄送人名单中可以包括自然人以及本企业的员工（本企业员工必须已经完成认证并加入企业）。2. 请确保抄送人列表中的成员不与任何签署人重复。 */
  CcInfos?: CcInfo[];
  /** 发起方企业的签署人进行发起操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。若设置为true，发起审核结果需通过接口 [提交企业签署流程审批结果](https://qian.tencent.com/developers/partnerApis/operateFlows/ChannelCreateFlowSignReview)通知电子签，审核通过后，发起方企业签署人方可进行发起操作，否则会阻塞其发起操作。 */
  NeedCreateReview?: boolean;
  /** 填写控件：文件发起使用 */
  Components?: Component[];
  /** 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下： 0 :合同（默认值） 1 :文件 2 :协议 3 :文书效果如下:![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png) */
  FlowDisplayType?: number;
  /** 签署文件资源Id列表，目前仅支持单个文件 */
  FileIds?: string[];
  /** 合同签署人信息 */
  Approvers?: CommonFlowApprover[];
}

/** 批量认证企业任务详情信息，其中包括 TaskId，状态信息等等 */
declare interface BatchOrganizationRegistrationTasksDetails {
  /** 生成注册链接的任务Id */
  TaskId?: string;
  /** 批量创建企业任务的状态ProcessingCreateSubmitAuthorizationFailed各个状态所代表的含义如下表格所示：任务状态名称任务状态详情Processing企业认证任务处理中，用户调用了CreateBatchOrganizationRegistrationTasks接口，但是任务还在处理中的状态Create创建企业认证链接任务完成，可以调用生成任务链接接口Submit企业认证任务已提交,到如下界面之后，会变为这个状态![image](https://qcloudimg.tencent-cloud.cn/raw/acbcec8c7a71de14d9c041e3b8ca8b3f.png)Authorization企业认证任务认证成功,点击下图下一步，进入到授权书上传或者法人认证，则会变为这个状态![image](https://qcloudimg.tencent-cloud.cn/raw/c52448354871cffa729da8db4e3a6f18.png)Failed企业认证任务失败 */
  Status?: string;
  /** 如果任务失败,会返回错误信息 */
  ErrorMessage?: string;
}

/** 撤销失败的流程信息 */
declare interface CancelFailureFlow {
  /** 签署流程编号，为32位字符串 */
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
}

/** 动态签署2.0合同参与人信息 */
declare interface ChannelArchiveDynamicApproverData {
  /** 签署方唯一编号，一个全局唯一的标识符，不同的流程不会出现冲突。 可以使用签署方的唯一编号来生成签署链接（也可以通过RecipientId来生成签署链接）。 */
  SignId?: string;
  /** 签署方角色编号，签署方角色编号是用于区分同一个流程中不同签署方的唯一标识。不同的流程会出现同样的签署方角色编号。 填写控件和签署控件都与特定的角色编号关联。 */
  RecipientId?: string;
}

/** 用户计费使用情况详情 */
declare interface ChannelBillUsageDetail {
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
  /** 合同经办人名称如果有多个经办人用分号隔开。 */
  OperatorName?: string;
  /** 发起方组织机构名称 */
  CreateOrganizationName?: string;
  /** 合同流程的名称。 */
  FlowName?: string;
  /** 合同流程当前的签署状态, 会存在下列的状态值**INIT**: 合同创建**PART**: 合同签署中(至少有一个签署方已经签署)**REJECT**: 合同拒签**ALL**: 合同签署完成**DEADLINE**: 合同流签(合同过期)**CANCEL**: 合同撤回**RELIEVED**: 解除协议（已解除）**WILLEXPIRE**: 合同即将过期**EXCEPTION**: 合同异常 */
  FlowStatus?: string;
  /** 查询的套餐类型对应关系如下:**CloudEnterprise**: 企业版合同**SingleSignature**: 单方签章**CloudProve**: 签署报告**CloudOnlineSign**: 腾讯会议在线签约**ChannelWeCard**: 微工卡**SignFlow**: 合同套餐**SignFace**: 签署意愿（人脸识别）**SignPassword**: 签署意愿（密码）**SignSMS**: 签署意愿（短信）**PersonalEssAuth**: 签署人实名（腾讯电子签认证）**PersonalThirdAuth**: 签署人实名（信任第三方认证）**OrgEssAuth**: 签署企业实名**FlowNotify**: 短信通知**AuthService**: 企业工商信息查询 */
  QuotaType?: string;
  /** 合同使用量注: `如果消耗类型是撤销返还，此值为负值代表返还的合同数量` */
  UseCount?: number;
  /** 消耗的时间戳，格式为Unix标准时间戳（秒）。 */
  CostTime?: number;
  /** 消耗的套餐名称 */
  QuotaName?: string;
  /** 消耗类型**1**.扣费 **2**.撤销返还 */
  CostType?: number;
  /** 备注 */
  Remark?: string;
}

/** 渠道企业信息 */
declare interface ChannelOrganizationInfo {
  /** 电子签平台给企业分配的ID（在不同应用下同一个企业会分配通用的ID） */
  OrganizationId?: string;
  /** 第三方平台子客企业的唯一标识 */
  OrganizationOpenId?: string;
  /** 第三方平台子客企业名称 */
  OrganizationName?: string;
  /** 企业的统一社会信用代码 */
  UnifiedSocialCreditCode?: string;
  /** 企业法定代表人的姓名 */
  LegalName?: string;
  /** 企业法定代表人作为第三方平台子客企业员工的唯一标识 */
  LegalOpenId?: string;
  /** 企业超级管理员的姓名 */
  AdminName?: string;
  /** 企业超级管理员作为第三方平台子客企业员工的唯一标识 */
  AdminOpenId?: string;
  /** 企业超级管理员的手机号码**注**：`手机号码脱敏（隐藏部分用*替代）` */
  AdminMobile?: string;
  /** 企业认证状态字段。值如下： **"UNVERIFIED"**： 未认证的企业 **"VERIFYINGLEGALPENDINGAUTHORIZATION"**： 认证中待法人授权的企业 **"VERIFYINGAUTHORIZATIONFILEPENDING"**： 认证中授权书审核中的企业 **"VERIFYINGAUTHORIZATIONFILEREJECT"**： 认证中授权书已驳回的企业 **"VERIFYING"**： 认证中的企业 **"VERIFIED"**： 已认证的企业 */
  AuthorizationStatus?: string;
  /** 企业认证方式字段。值如下： **"AuthorizationInit"**： 暂未选择授权方式 **"AuthorizationFile"**： 授权书 **"AuthorizationLegalPerson"**： 法人授权超管 **"AuthorizationLegalIdentity"**： 法人直接认证 */
  AuthorizationType?: string;
  /** 子企业激活状态。值如下： **0**： 未激活 **1**： 已激活 */
  ActiveStatus?: number;
  /** 账号到期时间，时间戳 */
  LicenseExpireTime?: number;
}

/** 角色信息 */
declare interface ChannelRole {
  /** 角色ID,为32位字符串 */
  RoleId?: string;
  /** 角色的名称 */
  RoleName?: string;
  /** 此角色状态1: 已经启用2: 已经禁用 */
  RoleStatus?: number;
  /** 此角色对应的权限列表 */
  PermissionGroups?: PermissionGroup[];
}

/** 签署人配置信息 */
declare interface CommonApproverOption {
  /** 是否允许修改签署人信息 */
  CanEditApprover?: boolean;
}

/** 通用签署人信息 */
declare interface CommonFlowApprover {
  /** 指定签署人非第三方平台子客企业下员工还是SaaS平台企业，在ApproverType为ORGANIZATION时指定。false: 默认值，第三方平台子客企业下员工true: SaaS平台企业下的员工 */
  NotChannelOrganization: boolean;
  /** 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下: **0** :企业/企业员工（企业签署方或模板发起时的企业静默签） **1** :个人/自然人**3** :企业/企业员工自动签（他方企业自动签署或文件发起时的本方企业自动签）注：类型为3（企业/企业员工自动签）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。使用自动签时，请确保企业已经开通自动签功能，开通方式：控制台 -> 企业设置 -> 扩展服务 -> 企业自动签。使用文件发起自动签时使用前请联系对接的客户经理沟通。 */
  ApproverType?: number;
  /** 电子签平台给企业生成的企业id */
  OrganizationId?: string;
  /** 企业OpenId，第三方应用集成非静默签子客企业签署人发起合同必传 */
  OrganizationOpenId?: string;
  /** 企业名称，第三方应用集成非静默签子客企业签署人必传，saas企业签署人必传 */
  OrganizationName?: string;
  /** 电子签平台给企业员工或者自热人生成的用户id */
  UserId?: string;
  /** 第三方平台子客企业员工的唯一标识 */
  OpenId?: string;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  ApproverName?: string;
  /** 签署人手机号，saas企业签署人，个人签署人必传 */
  ApproverMobile?: string;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)OTHER_CARD_TYPE : 其他证件注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverIdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  ApproverIdCardNumber?: string;
  /** 签署人Id，使用模板发起是，对应模板配置中的签署人RecipientId注意：模板发起时该字段必填 */
  RecipientId?: string;
  /** 签署前置条件：阅读时长限制，不传默认10s,最大300s，最小3s */
  PreReadTime?: number;
  /** 签署前置条件：阅读全文限制 */
  IsFullText?: boolean;
  /** 通知签署方经办人的方式, 有以下途径: **SMS** :(默认)短信 **NONE** : 不通知注: `签署方为第三方子客企业时会被置为NONE, 不会发短信通知` */
  NotifyType?: string;
  /** 签署人配置，用于控制签署人相关属性 */
  ApproverOption?: CommonApproverOption;
  /** 使用PDF文件直接发起合同时，签署人指定的签署控件；使用模板发起合同时，指定本企业印章签署控件的印章ID: 通过ComponentId或ComponenetName指定签署控件，ComponentValue为印章ID。 */
  SignComponents?: Component[];
  /** 指定个人签署方查看合同的校验方式,可以传值如下: **1** : （默认）人脸识别,人脸识别后才能合同内容 **2** : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）注: 如果合同流程设置ApproverVerifyType查看合同的校验方式, 则忽略此签署人的查看合同的校验方式此字段可传多个校验方式 */
  ApproverVerifyTypes?: number[];
  /** 签署人签署合同时的认证方式 **1** :人脸认证 **2** :签署密码 **3** :运营商三要素 **5** :设备指纹识别 **6** :设备面容识别默认为1(人脸认证 ),2(签署密码),3(运营商三要素),5(设备指纹识别),6(设备面容识别)注: 1. 用模板创建合同场景, 签署人的认证方式需要在配置模板的时候指定, 在创建合同重新指定无效2. 运营商三要素认证方式对手机号运营商及前缀有限制,可以参考[运营商支持列表类](https://qian.tencent.com/developers/partner/mobile_support)得到具体的支持说明3. 校验方式不允许只包含设备指纹识别和设备面容识别，至少需要再增加一种其他校验方式。4. 设备指纹识别和设备面容识别只支持小程序使用，其他端暂不支持。 */
  ApproverSignTypes?: number[];
}

/** 此结构体 (Component) 用于描述控件属性。在通过文件发起合同时，对应的component有三种定位方式1. 绝对定位方式 （可以通过 [PDF坐标计算助手](https://qian.tencent.com/developers/tools/template-editor)计算控件的坐标）2. 表单域(FIELD)定位方式3. 关键字(KEYWORD)定位方式，使用关键字定位时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找 */
declare interface Component {
  /** 控件唯一ID。**在绝对定位方式方式下**，ComponentId为控件的ID，长度不能超过30，只能由中文、字母、数字和下划线组成，可以在后续的操作中使用该名称来引用控件。**在关键字定位方式下**，ComponentId不仅为控件的ID，也是关键字整词。此方式下可以通过"^"来决定是否使用关键字整词匹配能力。例：- 如传入的关键字"^甲方签署^"</font >，则会在PDF文件中有且仅有"甲方签署"关键字的地方（前后不能有其他字符</font >）进行对应操作。- 如传入的关键字为"甲方签署</font >"，则PDF文件中每个出现关键字的位置（前后可以有其他字符</font >）都会执行相应操作。注：`控件ID可以在一个PDF中不可重复`点击查看ComponentId在模板页面的位置 */
  ComponentId?: string;
  /** **如果是Component填写控件类型，则可选的字段为**： TEXT : 普通文本控件，输入文本字符串； MULTI_LINE_TEXT : 多行文本控件，输入文本字符串； CHECK_BOX : 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串； FILL_IMAGE : 图片控件，ComponentValue 填写图片的资源 ID； DYNAMIC_TABLE : 动态表格控件； ATTACHMENT : 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分隔； SELECTOR : 选择器控件，ComponentValue填写选择的字符串内容； DATE : 日期控件；默认是格式化为xxxx年xx月xx日字符串； DISTRICT : 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；**如果是SignComponent签署控件类型，需要根据签署人的类型可选的字段为*** 企业方 SIGN_SEAL : 签署印章控件； SIGN_DATE : 签署日期控件； SIGN_SIGNATURE : 用户签名控件； SIGN_PAGING_SIGNATURE : 用户签名骑缝章控件；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight SIGN_PAGING_SEAL : 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight SIGN_OPINION : 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认； SIGN_VIRTUAL_COMBINATION : 签批控件。内部最多组合4个特定控件（SIGN_SIGNATURE，SIGN_DATA,SIGN_MULTI_LINE_TEXT,SIGN_SELECTOR），本身不填充任何文字内容 SIGN_MULTI_LINE_TEXT : 多行文本，仅可用在签批控件内部作为组合控件，单独无法使用，常用作批注附言 SIGN_SELECTOR : 选择器，仅可用在签批控件内部作为组合控件，单独无法使用，常用作审批意见的选择 SIGN_LEGAL_PERSON_SEAL : 企业法定代表人控件。* 个人方 SIGN_DATE : 签署日期控件； SIGN_SIGNATURE : 用户签名控件； SIGN_PAGING_SIGNATURE : 用户签名骑缝章控件； SIGN_OPINION : 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认； SIGN_VIRTUAL_COMBINATION : 签批控件。内部包含最多4个特定控件（SIGN_SIGNATURE，SIGN_DATA,SIGN_MULTI_LINE_TEXT,SIGN_SELECTOR），本身不填充任何文字内容 SIGN_MULTI_LINE_TEXT : 多行文本，仅可用在签批控件内部作为组合控件，单独无法使用，常用作批注附言 SIGN_SELECTOR : 选择器，仅可用在签批控件内部作为组合控件，单独无法使用，常用作审批意见的选择 注：` 表单域的控件不能作为印章和签名控件` */
  ComponentType?: string;
  /** **在绝对定位方式方式下**，ComponentName为控件名，长度不能超过20，只能由中文、字母、数字和下划线组成，可以在后续的操作中使用该名称来引用控件。**在表单域定位方式下**，ComponentName不仅为控件名，也是表单域名称。注：`控件名可以在一个PDF中可以重复`点击查看ComponentName在模板页面的位置 */
  ComponentName?: string;
  /** 如果是填写控件，ComponentRequired表示在填写页面此控件是否必填false（默认）：可以不填写true ：必须填写此填写控件如果是签署控件，签批控件中签署意见等可以不填写， 其他签署控件不受此字段影响 */
  ComponentRequired?: boolean;
  /** **在通过接口拉取控件信息场景下**，为出参参数，此控件归属的参与方的角色ID角色（即RecipientId），**发起合同时候不要填写此字段留空即可** */
  ComponentRecipientId?: string;
  /** 【暂未使用】控件所属文件的序号（取值为：0-N）。 目前单文件的情况下，值一直为0 */
  FileIndex?: number;
  /** 控件生成的方式： NORMAL : 绝对定位控件 FIELD : 表单域 KEYWORD : 关键字（设置关键字时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找） */
  GenerateMode?: string;
  /** **在绝对定位方式和关键字定位方式下**，指定控件宽度，控件宽度是指控件在PDF文件中的宽度，单位为pt（点）。 */
  ComponentWidth?: number;
  /** **在绝对定位方式和关键字定位方式下**，指定控件的高度， 控件高度是指控件在PDF文件中的高度，单位为pt（点）。 */
  ComponentHeight?: number;
  /** **在绝对定位方式方式下**，指定控件所在PDF文件上的页码**在使用文件发起的情况下**，绝对定位方式的填写控件和签署控件支持使用负数来指定控件在PDF文件上的页码，使用负数时，页码从最后一页开始。例如：ComponentPage设置为-1，即代表在PDF文件的最后一页，以此类推。注：1. 页码编号是从1开始编号的。2. 页面编号不能超过PDF文件的页码总数。如果指定的页码超过了PDF文件的页码总数，在填写和签署时会出现错误，导致无法正常进行操作。 */
  ComponentPage?: number;
  /** **在绝对定位方式下**，可以指定控件横向位置的位置，单位为pt（点）。 */
  ComponentPosX?: number;
  /** **在绝对定位方式下**，可以指定控件纵向位置的位置，单位为pt（点）。 */
  ComponentPosY?: number;
  /** **在所有的定位方式下**，控件的扩展参数，为JSON格式，不同类型的控件会有部分非通用参数。ComponentType为TEXT、MULTI_LINE_TEXT时，支持以下参数： Font：目前只支持黑体、宋体、仿宋 FontSize： 范围6 :72 FontAlign： Left/Right/Center，左对齐/居中/右对齐 FontColor：字符串类型，格式为RGB颜色数字参数样例：`{"FontColor":"255,0,0","FontSize":12}`ComponentType为DATE时，支持以下参数： Font：目前只支持黑体、宋体、仿宋 FontSize： 范围6 :72参数样例：`{"FontColor":"255,0,0","FontSize":12}`ComponentType为WATERMARK时，支持以下参数： Font：目前只支持黑体、宋体、仿宋 FontSize： 范围6 :72 Opacity： 透明度，范围0 :1 Rotate： 水印旋转角度，范围0 :359 Density： 水印样式，1-宽松，2-标准（默认值），3-密集， Position： 水印位置，None-平铺（默认值），LeftTop-左上，LeftBottom-左下，RightTop-右上，RightBottom-右下，Center-居中 SubType： 水印类型：CUSTOM_WATERMARK-自定义内容，PERSON_INFO_WATERMARK-访问者信息参数样例：`"{\"Font\":\"黑体\",\"FontSize\":20,\"Opacity\":0.1,\"Density\":2,\"SubType\":\"PERSON_INFO_WATERMARK\"}"`ComponentType为FILL_IMAGE时，支持以下参数： NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true : 不居中 FillMethod : int. 填充方式。0-铺满（默认）；1-等比例缩放ComponentType为SELECTOR时，支持以下参数： WordWrap：bool。是否支持选择控件内容自动折行合成。false：不支持（默认）。 true : 支持自动折行合成ComponentType为SIGN_SIGNATURE、SIGN_PAGING_SIGNATURE类型时，可以**ComponentTypeLimit**参数控制签署方式 HANDWRITE : 需要实时手写的手写签名 HANDWRITTEN_ESIGN : 长效手写签名， 是使用保存到个人中心的印章列表的手写签名(并且包含HANDWRITE) OCR_ESIGN : AI智能识别手写签名 ESIGN : 个人印章类型 SYSTEM_ESIGN : 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署） IMG_ESIGN : 图片印章(该类型支持用户在签署将上传的PNG格式的图片作为签名)参考样例：`{"ComponentTypeLimit": ["SYSTEM_ESIGN"]}`印章的对应关系参考下图![image](https://qcloudimg.tencent-cloud.cn/raw/ee0498856c060c065628a0c5ba780d6b.jpg)ComponentType为SIGN_SEAL 或者 SIGN_PAGING_SEAL类型时，可以通过**ComponentTypeLimit**参数控制签署方签署时要使用的印章类型，支持指定以下印章类型 OFFICIAL : 企业公章 CONTRACT : 合同专用章 FINANCE : 财务专用章 PERSONNEL : 人事专用章 OTHER : 其他参考样例：`{\"ComponentTypeLimit\":[\"PERSONNEL\",\"FINANCE\"]}` 表示改印章签署区,客户需使用人事专用章或财务专用章盖章签署。ComponentType为SIGN_DATE时，支持以下参数： Font :字符串类型目前只支持"黑体"、"宋体"、仿宋，如果不填默认为"黑体" FontSize : 数字类型，范围6-72，默认值为12 FontAlign : 字符串类型，可取Left/Right/Center，对应左对齐/居中/右对齐 Format : 字符串类型，日期格式，必须是以下五种之一 “yyyy m d”，”yyyy年m月d日”，”yyyy/m/d”，”yyyy-m-d”，”yyyy.m.d”。 Gaps : 字符串类型，仅在Format为“yyyy m d”时起作用，格式为用逗号分开的两个整数，例如”2,2”，两个数字分别是日期格式的前后两个空隙中的空格个数如果extra参数为空，默认为”yyyy年m月d日”格式的居中日期特别地，如果extra中Format字段为空或无法被识别，则extra参数会被当作默认值处理（Font，FontSize，Gaps和FontAlign都不会起效）参数样例： ` "{"Format":"yyyy m d","FontSize":12,"Gaps":"2,2", "FontAlign":"Right"}"`ComponentType为SIGN_SEAL、SIGN_SIGNATURE类型时，支持以下参数： PageRanges :PageRange的数组，通过PageRanges属性设置该印章在PDF所有页面上盖章（适用于标书在所有页面盖章的情况）参数样例：` "{"PageRanges":[{"BeginPage":1,"EndPage":-1}]}"`签署印章旋转功能，当ComponentType为SIGN_SIGNATURE、SIGN_DATE、SIGN_SEAL时，可以通过以下参数设置签署图片的旋转角度： Rotate：旋转角度，支持范围：-360：360，为正整数时，为顺时针旋转；为负整数时，为逆时针旋转。 RotateRelation：旋转关联控件，用于指定关联旋转的控件。例如：让印章控件和签署日期控件按照印章控件为中心旋转（此时，设置印章控件的RotateRelation为日期控件的ComponentId，设置日期签署控件的RotateRelation为印章控件的ComponentId）。参数样例：`{"Rotate":-30,"RotateRelation":"Component_Id1"}`签署印章透明度功能设置，当ComponentType为SIGN_SIGNATURE、SIGN_SEAL、SIGN_PAGING_SEAL、SIGN_LEGAL_PERSON_SEAL时，可以通过以下参数设置签署印章的透明度： Opacity：印章透明度，支持范围：0-1，0.7表示70%的透明度，1表示无透明度参数样例：`{"Opacity":0.7}`签署印章大小功能设置，当ComponentType为SIGN_SEAL、SIGN_PAGING_SEAL、SIGN_LEGAL_PERSON_SEAL时，可以通过以下参数设置签署时按照实际印章的大小进行签署，如果印章没有设置大小，那么默认会是4.2cm的印章大小： UseSealSize：使用印章设置的大小盖章，true表示使用印章设置的大小盖章，false表示使用签署控件的大小进行盖章；不传则为false参数样例：`{"UseSealSize":true}`关键字模式下支持关键字找不到的情况下不进行报错的设置 IgnoreKeywordError :1-关键字查找不到时不进行报错场景说明：如果使用关键字进行定位，但是指定的PDF文件中又没有设置的关键字时，发起合同会进行关键字是否存在的校验，如果关键字不存在，会进行报错返回。如果不希望进行报错，可以设置"IgnoreKeywordError"来忽略错误。请注意，如果关键字签署控件对应的签署方在整个PDF文件中一个签署控件都没有，还是会触发报错逻辑。参数样例：` "{"IgnoreKeywordError":1}"`ComponentType为SIGN_VIRTUAL_COMBINATION时，支持以下参数：Children: 绝对定位模式下，用来指定此签批控件的组合子控件 参数样例：`{"Children":["ComponentId_29","ComponentId_27","ComponentId_28","ComponentId_30"]}`ChildrenComponents: 关键字定位模式下，用来指定此签批控件的组合子控件 ChildrenComponent结构体定义: 字段名称 类型 描述 ComponentType string 子控件类型-可选值:SIGN_SIGNATURE,SIGN_DATE,SIGN_SELECTOR,SIGN_MULTI_LINE_TEXT ComponentName string 子控件名称 Placeholder string 子控件提示语 ComponentOffsetX float 控件偏移位置X（相对于父控件（签批控件的ComponentX）） ComponentOffsetY float 控件偏移位置Y 相对于父控件（签批控件的ComponentY）） ComponentWidth float 控件宽 ComponentHeight float 控件高 ComponentExtra string 控件的附属信息，根据ComponentType设置 参数样例：{ "ChildrenComponents": [ { "ComponentType": "SIGN_SIGNATURE", "ComponentName": "个人签名", "Placeholder": "请签名", "ComponentOffsetX": 10, "ComponentOffsetY": 30, "ComponentWidth": 119, "ComponentHeight": 43, "ComponentExtra": "{\"ComponentTypeLimit\":[\"SYSTEM_ESIGN\"]}" }, { "ComponentType": "SIGN_SELECTOR", "ComponentName": "是否同意此协议", "Placeholder": "", "ComponentOffsetX": 50, "ComponentOffsetY": 130, "ComponentWidth": 120, "ComponentHeight": 43, "ComponentExtra": "{\"Values\":[\"同意\",\"不同意\",\"再想想\"],\"FontSize\":12,\"FontAlign\":\"Left\",\"Font\":\"黑体\",\"MultiSelect\":false}" }, { "ComponentType": "SIGN_MULTI_LINE_TEXT", "ComponentName": "批注附言", "Placeholder": "", "ComponentOffsetX": 150, "ComponentOffsetY": 300, "ComponentWidth": 200, "ComponentHeight": 86, "ComponentExtra": "" } ]} */
  ComponentExtra?: string;
  /** 控件填充vaule，ComponentType和传入值类型对应关系： TEXT : 文本内容 MULTI_LINE_TEXT : 文本内容， 可以用 \n 来控制换行位置 CHECK_BOX : true/false FILL_IMAGE、ATTACHMENT : 附件的FileId，需要通过UploadFiles接口上传获取 SELECTOR : 选项值 DYNAMIC_TABLE - 传入json格式的表格内容，详见说明：[数据表格](https://qian.tencent.com/developers/company/dynamic_table) DATE : 格式化：xxxx年xx月xx日（例如：2024年05月28日） SIGN_SEAL : 印章ID，于控制台查询获取，[点击查看在控制上的位置](https://qcloudimg.tencent-cloud.cn/raw/cd403a5b949fce197fd9e88bb6db1517.png) SIGN_PAGING_SEAL : 可以指定印章ID，于控制台查询获取，[点击查看在控制上的位置](https://qcloudimg.tencent-cloud.cn/raw/cd403a5b949fce197fd9e88bb6db1517.png)控件值约束说明： 特殊控件 填写约束 企业全称控件 企业名称中文字符中文括号 统一社会信用代码控件 企业注册的统一社会信用代码 法人名称控件 最大50个字符，2到25个汉字或者1到50个字母 签署意见控件 签署意见最大长度为50字符 签署人手机号控件 国内手机号 13,14,15,16,17,18,19号段长度11位 签署人身份证控件 合法的身份证号码检查 控件名称 控件名称最大长度为20字符，不支持表情 单行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 多行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 勾选框控件 选择填字符串true，不选填字符串false 选择器控件 同单行文本控件约束，填写选择值中的字符串 数字控件 请输入有效的数字(可带小数点) 日期控件 格式：yyyy年mm月dd日 附件控件 JPG或PNG图片，上传数量限制，1到6个，最大6个附件，填写上传的资源ID 图片控件 JPG或PNG图片，填写上传的图片资源ID 邮箱控件 有效的邮箱地址, w3c标准 地址控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 省市区控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 性别控件 选择值中的字符串 学历控件 选择值中的字符串 水印控件 水印控件设置为CUSTOM_WATERMARK类型时的水印内容 注： `部分特殊控件需要在控制台配置模板形式创建` */
  ComponentValue?: string;
  /** 【暂未使用】日期签署控件的字号，默认为 12 */
  ComponentDateFontSize?: number;
  /** 【暂未使用】控件归属的文档的ID， **发起合同时候不要填写此字段留空即可** */
  DocumentId?: string;
  /** 【暂未使用】控件描述，用户自定义，不影响合同发起流程 */
  ComponentDescription?: string;
  /** **如果控件是关键字定位方式**，可以对关键字定位出来的区域进行横坐标方向的调整，单位为pt（点）。例如，如果关键字定位出来的区域偏左或偏右，可以通过调整横坐标方向的参数来使控件位置更加准确。注意： `向左调整设置为负数， 向右调整设置成正数` */
  OffsetX?: number;
  /** **如果控件是关键字定位方式**，可以对关键字定位出来的区域进行纵坐标方向的调整，单位为pt（点）。例如，如果关键字定位出来的区域偏上或偏下，可以通过调整纵坐标方向的参数来使控件位置更加准确。注意： `向上调整设置为负数， 向下调整设置成正数` */
  OffsetY?: number;
  /** 【暂未使用】第三方应用集成平台模板控件 ID 标识 */
  ChannelComponentId?: string;
  /** **如果控件是关键字定位方式**，指定关键字排序规则时，可以选择Positive或Reverse两种排序方式。 Positive :表示正序，即根据关键字在PDF文件内的顺序进行排列 Reverse :表示倒序，即根据关键字在PDF文件内的反序进行排列在指定KeywordIndexes时，如果使用Positive排序方式，0代表在PDF内查找内容时，查找到的第一个关键字；如果使用Reverse排序方式，0代表在PDF内查找内容时，查找到的最后一个关键字。 */
  KeywordOrder?: string;
  /** **如果控件是关键字定位方式**，在KeywordPage中指定关键字页码时，将只会在该页码中查找关键字，非该页码的关键字将不会查询出来。如果不设置查找所有页面中的关键字。 */
  KeywordPage?: number;
  /** **如果控件是关键字定位方式**，关键字生成的区域的对齐方式， 可以设置下面的值 Middle :居中 Below :正下方 Right :正右方 LowerRight :右下角 UpperRight :右上角。示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方 */
  RelativeLocation?: string;
  /** **如果控件是关键字定位方式**，关键字索引是指在PDF文件中存在多个相同的关键字时，通过索引指定使用哪一个关键字作为最后的结果。可以通过指定多个索引来同时使用多个关键字。例如，[0,2]表示使用PDF文件内第1个和第3个关键字位置作为最后的结果。注意：关键字索引是从0开始计数的 */
  KeywordIndexes?: number[];
  /** 填写控件在腾讯电子签小程序填写界面展示的提示信息，例如，在身份证号码填写控件中，提示信息可以设置成“请输入18位身份证号码”。注：`签署控件设置此字段无效` */
  Placeholder?: string;
  /** **web嵌入发起合同场景下**， 是否锁定填写和签署控件值不允许嵌入页面进行编辑false（默认）：不锁定控件值，允许在页面编辑控件值true：锁定控件值，在页面编辑控件值 */
  LockComponentValue?: boolean;
  /** **web嵌入发起合同场景下**，是否禁止移动和删除填写和签署控件 false（默认） :可以移动和删除控件 true : 禁止移动和删除控件 */
  ForbidMoveAndDelete?: boolean;
}

/** 签署控件的类型和范围限制条件，用于控制文件发起后签署人拖拽签署区时可使用的控件类型和具体的印章或签名方式。 */
declare interface ComponentLimit {
  /** 控件类型，支持以下类型SIGN_SEAL : 印章控件SIGN_PAGING_SEAL : 骑缝章控件SIGN_LEGAL_PERSON_SEAL : 企业法定代表人控件SIGN_SIGNATURE : 用户签名控件 */
  ComponentType: string;
  /** 签署控件类型的值(可选)，用与限制签署时印章或者签名的选择范围1.当ComponentType 是 SIGN_SEAL 或者 SIGN_PAGING_SEAL 时可传入企业印章Id（支持多个）或者以下印章类型 OFFICIAL : 企业公章 CONTRACT : 合同专用章 FINANCE : 财务专用章 PERSONNEL : 人事专用章 OTHER : 其他注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个),他方企业签署人只能限制类型.若同时指定了印章类型和印章Id,以印章Id为主,印章类型会被忽略`2.当ComponentType 是 SIGN_SIGNATURE 时可传入以下类型（支持多个）HANDWRITE : 需要实时手写的手写签名HANDWRITTEN_ESIGN : 长效手写签名， 是使用保存到个人中心的印章列表的手写签名(并且包含HANDWRITE)OCR_ESIGN : OCR印章（智慧手写签名）ESIGN : 个人印章SYSTEM_ESIGN : 系统印章3.当ComponentType 是 SIGN_LEGAL_PERSON_SEAL 时无需传递此参数。 */
  ComponentValue?: string[];
}

/** 创建合同个性化参数 */
declare interface CreateFlowOption {
  /** 是否允许修改合同信息，**true**：可以**false**：（默认）不可以 */
  CanEditFlow?: boolean;
  /** 是否允许发起合同弹窗隐藏合同名称**true**：允许**false**：（默认）不允许 */
  HideShowFlowName?: boolean;
  /** 是否允许发起合同弹窗隐藏合同类型，**true**：允许**false**：（默认）不允许 */
  HideShowFlowType?: boolean;
  /** 是否允许发起合同弹窗隐藏合同到期时间**true**：允许**false**：（默认）不允许 */
  HideShowDeadline?: boolean;
  /** 是否允许发起合同步骤跳过指定签署方步骤**true**：允许**false**：（默认）不允许 */
  CanSkipAddApprover?: boolean;
  /** 是否可以编辑签署人包括新增，修改，删除 （默认） false -可以编辑签署人 true - 禁止编辑签署人注意：如果设置参数为 true， 则 参数签署人 [FlowApproverList](https://qian.tencent.com/developers/partnerApis/embedPages/ChannelCreatePrepareFlow) 不能为空 */
  ForbidEditApprover?: boolean;
  /** 定制化发起合同弹窗的描述信息，长度不能超过500，只能由中文、字母、数字和标点组成。 */
  CustomCreateFlowDescription?: string;
  /** 禁止编辑填写控件**true**：禁止编辑填写控件**false**：（默认）允许编辑填写控件 */
  ForbidEditFillComponent?: boolean;
  /** 跳过上传文件步骤**true**：跳过**false**：（默认）不跳过，需要传ResourceId */
  SkipUploadFile?: boolean;
  /** 签署控件的配置信息，用在嵌入式发起的页面配置，包括 - 签署控件 是否默认展示日期. */
  SignComponentConfig?: SignComponentConfig;
  /** 是否禁止编辑（展示）水印控件属性（默认） false -否 true - 禁止编辑 */
  ForbidEditWatermark?: boolean;
}

/** 清理的企业认证流信息 */
declare interface DeleteOrganizationAuthorizationInfo {
  /** 认证流 Id 是指在企业认证过程中，当前操作人的认证流程的唯一标识。每个企业在认证过程中只能有一条认证流认证成功。这意味着在同一认证过程内，一个企业只能有一个认证流程处于成功状态，以确保认证的唯一性和有效性。 */
  AuthorizationId?: string;
  /** 认证的企业名称 */
  OrganizationName?: string;
  /** 第三方平台子客企业的唯一标识，定义Agent中的ProxyOrganizationOpenId一样, 可以参考Agent结构体 */
  OrganizationOpenId?: string;
  /** 清除认证流产生的错误信息 */
  Errormessage?: string;
}

/** 第三方应用集成员工部门信息 */
declare interface Department {
  /** 部门id */
  DepartmentId?: string;
  /** 部门名称 */
  DepartmentName?: string;
}

/** 视频认证结果 */
declare interface DetectInfoVideoData {
  /** 活体视频的base64编码，mp4格式注:`需进行base64解码获取活体视频文件` */
  LiveNessVideo?: string;
}

/** 签署流程下载信息 */
declare interface DownloadFlowInfo {
  /** 文件夹名称 */
  FileName: string;
  /** 签署流程的标识数组 */
  FlowIdList: string[];
}

/** 动态合同签署人结果 */
declare interface DynamicFlowApproverResult {
  /** 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置； */
  RecipientId?: string;
  /** 签署ID - 发起流程时系统自动补充 - 创建签署链接时，可以通过查询详情接口获得签署人的SignId，然后可传入此值为该签署人创建签署链接，无需再传姓名、手机号、证件号等其他信息 */
  SignId?: string;
  /** 签署人状态信息 */
  ApproverStatus?: number;
}

/** 动态合同信息 */
declare interface DynamicFlowInfo {
  /** 合同流程ID，为32位字符串。 - 建议开发者妥善保存此流程ID，以便于顺利进行后续操作。 - 可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 - 不建议继续使用，请使用补充签署人结构体中的FlowId指定合同 */
  FlowId: string;
  /** 合同流程的参与方列表, 最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，不同类型的签署方传参方式可以参考文档 [签署方入参指引](https://qian.tencent.com/developers/partner/flow_approver)。 如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序, 请确保列表中参与人的顺序符合实际签署顺序。 */
  FlowApprovers: FlowApproverInfo[];
  /** 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传： **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签） **OTHER** : 通用场景 注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。` */
  AutoSignScene?: string;
  /** 签署人校验方式 VerifyCheck: 人脸识别（默认） MobileCheck：手机号验证，用户手机号和参与方手机号（ApproverMobile）相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证） 参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。 */
  ApproverVerifyType?: string;
}

/** 动态合同补充签署人结果 */
declare interface DynamicFlowResult {
  /** 合同流程ID，为32位字符串。 建议开发者妥善保存此流程ID，以便于顺利进行后续操作。 [点击查看FlowId在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/05af26573d5106763b4cfbb9f7c64b41.png) */
  FlowId?: string;
  /** 动态合同签署人补充结果信息列表 */
  DynamicFlowApproverList?: DynamicFlowApproverResult[];
}

/** 创建嵌入式页面url个性化参数 */
declare interface EmbedUrlOption {
  /** 合同详情预览，允许展示控件信息true：允许在合同详情页展示控件false：（默认）不允许在合同详情页展示控件 */
  ShowFlowDetailComponent?: boolean;
  /** 模板预览，允许展示模板控件信息 true :允许在模板预览页展示控件 false :（默认）不允许在模板预览页展示控件 */
  ShowTemplateComponent?: boolean;
  /** 跳过上传文件，默认为false(展示上传文件页）![image](https://qcloudimg.tencent-cloud.cn/raw/8ca33745cf772e79831dbe5a70e82400.png)- false: 展示上传文件页- true: 不展示上传文件页 注意: 此参数仅针对**EmbedType=CREATE_TEMPLATE(创建模板)有效**， */
  SkipUploadFile?: string;
  /** 是否禁止编辑（展示）水印控件属性（默认） false -否 true - 禁止编辑 */
  ForbidEditWatermark?: boolean;
}

/** 扩展服务开通和授权的详细信息 */
declare interface ExtentServiceAuthInfo {
  /** 扩展服务类型AUTO_SIGN 企业自动签（自动签署） OVERSEA_SIGN 企业与港澳台居民签署合同 MOBILE_CHECK_APPROVER 使用手机号验证签署方身份 DOWNLOAD_FLOW 授权渠道下载合同 AGE_LIMIT_EXPANSION 拓宽签署方年龄限制HIDE_OPERATOR_DISPLAY 隐藏合同经办人姓名 */
  Type?: string;
  /** 扩展服务名称 */
  Name?: string;
  /** 扩展服务的开通状态**ENABLE**：开通 **DISABLE**：未开通 */
  Status?: string;
  /** 操作扩展服务的操作人第三方应用平台的用户openid */
  OperatorOpenId?: string;
  /** 扩展服务的操作时间，格式为Unix标准时间戳（秒）。 */
  OperateOn?: number;
}

/** 绑定失败的用户角色信息 */
declare interface FailedCreateRoleData {
  /** 用户userId */
  UserId?: string;
  /** 角色RoleId列表 */
  RoleIds?: string[];
}

/** 指定补充签署人信息- RecipientId 必须指定- 补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充 */
declare interface FillApproverInfo {
  /** 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。 */
  RecipientId: string;
  /** 指定企业经办签署人OpenId注: `签署人OpenId未实名时，需要传入签署人姓名以及手机号码。` */
  OpenId?: string;
  /** 签署人姓名 */
  ApproverName?: string;
  /** 签署人手机号码 */
  ApproverMobile?: string;
  /** 企业名称 */
  OrganizationName?: string;
  /** 企业OpenId */
  OrganizationOpenId?: string;
  /** 签署企业非渠道子客，默认为false，即表示同一渠道下的企业；如果为true，则目前表示接收方企业为SaaS企业, 为渠道子客时，OrganizationOpenId 必传 */
  NotChannelOrganization?: boolean;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD 中国大陆居民身份证HONGKONG_AND_MACAO 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 中国港澳台居民居住证(格式同中国大陆居民身份证)OTHER_CARD_TYPE 其他证件注: `1.其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。``2.补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充。` */
  ApproverIdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。注：`补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充。` */
  ApproverIdCardNumber?: string;
  /** 合同流程ID- 补充合同组子合同动态签署人时必传。- 补充正常合同，请阅读：补充签署人接口接口使用说明 */
  FlowId?: string;
}

/** 批量补充签署人时，补充失败的报错说明 */
declare interface FillError {
  /** 为签署方经办人在签署合同中的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。与入参中补充的签署人角色ID对应，批量补充部分失败返回对应的错误信息。 */
  RecipientId?: string;
  /** 补充失败错误说明 */
  ErrMessage?: string;
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
}

/** 文档内的填充控件返回结构体，返回控件的基本信息和填写内容值 */
declare interface FilledComponent {
  /** 填写控件ID */
  ComponentId?: string;
  /** 控件名称 */
  ComponentName?: string;
  /** 此填写控件的填写状态 **0** : 此填写控件**未填写****1** : 此填写控件**已填写** */
  ComponentFillStatus?: string;
  /** 控件填写内容 */
  ComponentValue?: string;
  /** 图片填充控件下载链接，如果是图片填充控件时，这里返回图片的下载链接。注: `链接不是永久链接, 默认有效期5分钟后, 到期后链接失效` */
  ImageUrl?: string;
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
  /** 模板配置时候的签署人角色ID(用PDF文件发起也可以指定,如果不指定则自动生成此角色ID), 所有的填写控件和签署控件都归属不同的角色 */
  ReceiptId?: string;
  /** 第三方平台子客企业的唯一标识，定义Agent中的ProxyOrganizationOpenId一样, 可以参考Agent结构体 */
  ProxyOrganizationOpenId?: string;
  /** 第三方平台子客企业员工的唯一标识 */
  ProxyOperatorOpenId?: string;
  /** 第三方平台子客企业名称，与企业营业执照中注册的名称一致。 */
  ProxyOrganizationName?: string;
  /** 签署人手机号 */
  Mobile?: string;
  /** 签署顺序，如果是有序签署，签署顺序从小到大 */
  SignOrder?: number;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  ApproveName?: string;
  /** 当前签署人的状态, 状态如下 **PENDING** :待签署 **FILLPENDING** :待填写 **FILLACCEPT** :填写完成 **FILLREJECT** :拒绝填写 **WAITPICKUP** :待领取 **ACCEPT** :已签署 **REJECT** :拒签 **DEADLINE** :过期没人处理 **CANCEL** :流程已撤回 **FORWARD** :已经转他人处理 **STOP** :流程已终止 **RELIEVED** :解除协议（已解除） */
  ApproveStatus?: string;
  /** 签署人拒签等情况的时候填写的原因 */
  ApproveMessage?: string;
  /** 签署人签署时间戳，单位秒 */
  ApproveTime?: number;
  /** 参与者类型 **ORGANIZATION** :企业签署人 **PERSON** :个人签署人 */
  ApproveType?: string;
  /** 自定义签署人的角色名, 如: 收款人、开具人、见证人等 */
  ApproverRoleName?: string;
  /** 签署参与人在本流程中的编号ID（每个流程不同），可用此ID来定位签署参与人在本流程的签署节点。 */
  SignId?: string;
  /** 模板配置时候的签署人角色ID(用PDF文件发起也可以指定,如果不指定则自动生成此角色ID), 所有的填写控件和签署控件都归属不同的角色 */
  RecipientId?: string;
}

/** 创建签署流程签署人入参。**各种场景传参说明**: 场景编号 发起方类型 签署方类型 签署方传参说明 场景一 第三方子企业A员工 第三方子企业A员工 （选填）IdCardNumber和IdCardType：证件类型和证件号 （必传）Name：签署方的名字 （必传）Mobile：签署方的手机号 （必传）OpenId：企业员工标识 （必传）OrganizationName：子企业名称 （必传）OrganizationOpenId：子企业的标识 （固定）ApproverType：需设置为ORGANIZATION 场景二 第三方子企业A员工 第三方子企业B(不指定经办人走领取方式) （必传）OrganizationName：子企业名称 （必传）OrganizationOpenId：子企业的标识 （固定）ApproverType：需设置为ORGANIZATION （固定）ApproverOption.FillType：需设置为1 场景三 第三方子企业A员工 第三方子企业B员工 （选填）IdCardNumber和IdCardType：证件类型和证件号 （必传）Name：签署方的名字 （必传）Mobile：签署方的手机号 （必传）OpenId：企业员工标识 （必传）OrganizationName：子企业名称 （必传）OrganizationOpenId：子企业的标识 （固定）ApproverType：需设置为ORGANIZATION 场景四 第三方子企业A员工 个人/自然人 （选填）IdCardNumber和IdCardType：证件类型和证件号 （必传）Name：签署方的名字 （必传）Mobile：签署方的手机号 （固定）ApproverType：需设置为PERSON 场景五 第三方子企业A员工 SaaS平台企业员工 （选填）IdCardNumber和IdCardType：证件类型和证件号 （必传）OrganizationName：SaaS企业的名字 （必传）Name：签署方的名字 （必传）Mobile：签署方的手机号 （不传）OrganizationOpenId：子企业的标识 （不传）OpenId：企业员工标识 （固定）ApproverType：需设置为ORGANIZATION （固定）NotChannelOrganization：需设置为True **注1**: `使用模板发起合同时，RecipientId（模板发起合同时）必传`RecipientId参数获取：从DescribeFlowTemplates接口接口中，可以得到模板下的签署方Recipient列表，根据模板自定义的Rolename在此结构体中确定其RecipientId。**注2**: `如果发起的是动态签署方（即ApproverOption.FillType指定为1），可以不指定具体签署人信息`, 动态签署方可以参考此文档 */
declare interface FlowApproverInfo {
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  Name?: string;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)OTHER_CARD_TYPE : 其他证件注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。` */
  IdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber?: string;
  /** 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)， 不支持海外手机号。请确认手机号所有方为此合同签署方。 */
  Mobile?: string;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。 */
  OrganizationName?: string;
  /** 指定签署人非第三方平台子客企业下员工还是SaaS平台企业，在ApproverType为ORGANIZATION时指定。false: 默认值，第三方平台子客企业下员工true: SaaS平台企业下的员工 */
  NotChannelOrganization?: boolean;
  /** 第三方平台子客企业员工的唯一标识，长度不能超过64，只能由字母和数字组成当签署方为同一第三方平台下的员工时，该字段若不指定，则发起【待领取】的流程注： 如果传进来的OpenId已经实名并且加入企业， 则忽略Name，IdCardType，IdCardNumber，Mobile这四个入参（会用此OpenId实名的身份证和登录的手机号覆盖） */
  OpenId?: string;
  /** 同应用下第三方平台子客企业的唯一标识，定义Agent中的ProxyOrganizationOpenId一样，签署方为非发起方企业场景下必传，最大长度64个字符 */
  OrganizationOpenId?: string;
  /** 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下: **PERSON** :个人/自然人 **PERSON_AUTO_SIGN** :个人/自然人自动签署，适用于个人自动签场景 **ORGANIZATION** :企业/企业员工（企业签署方或模板发起时的企业静默签） **ENTERPRISESERVER** :企业/企业员工自动签（他方企业自动签署或文件发起时的本方企业自动签）注: `1. 个人自动签场景(PERSON_AUTO_SIGN)为白名单功能, 使用前请联系对接的客户经理沟通。``2. 若要实现他方企业（同一应用下）自动签，需要满足3个条件：`条件1：ApproverType 设置为ENTERPRISESERVER条件2：子客之间完成授权条件3：联系对接的客户经理沟通如何使用 */
  ApproverType?: string;
  /** 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置； */
  RecipientId?: string;
  /** 签署人的签署截止时间，格式为Unix标准时间戳（秒）注: `若不设置此参数，则默认使用合同的截止时间，此参数暂不支持合同组子合同` */
  Deadline?: number;
  /** 签署完回调url，最大长度1000个字符 */
  CallbackUrl?: string;
  /** 使用PDF文件直接发起合同时，签署人指定的签署控件；使用模板发起合同时，指定本企业印章签署控件的印章ID: 通过ComponentId或ComponenetName指定签署控件，ComponentValue为印章ID。![image](https://qcloudimg.tencent-cloud.cn/raw/91757a7f9188ccf3057a4a8979cf3f93.png) */
  SignComponents?: Component[];
  /** 当签署方控件类型为 SIGN_SIGNATURE 时，可以指定签署方签名方式。如果不指定，签署人可以使用所有的签名类型，可指定的签名类型包括： HANDWRITE :需要实时手写的手写签名。 HANDWRITTEN_ESIGN :长效手写签名， 是使用保存到个人中心的印章列表的手写签名。(并且包含HANDWRITE) OCR_ESIGN :AI智能识别手写签名。 ESIGN :个人印章类型。 IMG_ESIGN : 图片印章。该类型支持用户在签署将上传的PNG格式的图片作为签名。 SYSTEM_ESIGN :系统签名。该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署。各种签名的样式可以参考下图：![image](https://qcloudimg.tencent-cloud.cn/raw/ee0498856c060c065628a0c5ba780d6b.jpg) */
  ComponentLimitType?: string[];
  /** 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：合同页数少于等于2页，阅读时间为3秒；合同页数为3到5页，阅读时间为5秒；合同页数大于等于6页，阅读时间为10秒。 */
  PreReadTime?: number;
  /** 签署完前端跳转的url，此字段的用法场景请联系客户经理确认 */
  JumpUrl?: string;
  /** 可以控制签署方在签署合同时能否进行某些操作，例如拒签、转交他人、是否为动态补充签署人等。详细操作可以参考开发者中心的ApproverOption结构体。 */
  ApproverOption?: ApproverOption;
  /** 此签署人（员工或者个人）签署前，是否需要发起方企业进行审批，取值如下：**false**：（默认）不需要审批，直接签署。**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待发起方企业内部审批完成。企业可以通过ChannelCreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与发起方企业内部的审批流程进行关联，支持手动、静默签署合同`![image](https://qcloudimg.tencent-cloud.cn/raw/b14d5188ed0229d1401e74a9a49cab6d.png) */
  ApproverNeedSignReview?: boolean;
  /** 指定个人签署方查看合同的校验方式,可以传值如下: **1** : （默认）人脸识别,人脸识别后才能合同内容 **2** : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）注: 如果合同流程设置ApproverVerifyType查看合同的校验方式, 则忽略此签署人的查看合同的校验方式此字段可传多个校验方式 */
  ApproverVerifyTypes?: number[];
  /** 签署人签署合同时的认证方式 **1** :人脸认证 **2** :签署密码 **3** :运营商三要素（如果是港澳台客户，建议不要选择这个）**5**：设备指纹识别，需要对比手机机主预留的指纹信息，校验一致才能成功进行合同签署。（iOS系统暂不支持该校验方式）**6**：设备面容识别，需要对比手机机主预留的人脸信息，校验一致才能成功进行合同签署。（Android系统暂不支持该校验方式）默认为：1(人脸认证 ),2(签署密码),3(运营商三要素),5(设备指纹识别),6(设备面容识别)注: 1. 用模板创建合同场景, 签署人的认证方式需要在配置模板的时候指定, 在创建合同重新指定无效2. 运营商三要素认证方式对手机号运营商及前缀有限制,可以参考[运营商支持列表类](https://qian.tencent.com/developers/partner/mobile_support)得到具体的支持说明3. 校验方式不允许只包含设备指纹识别和设备面容识别，至少需要再增加一种其他校验方式。4. 设备指纹识别和设备面容识别只支持小程序使用，其他端暂不支持。 */
  ApproverSignTypes?: number[];
  /** 签署ID- 发起流程时系统自动补充- 创建签署链接时，可以通过查询详情接口获得签署人的SignId，然后可传入此值为该签署人创建签署链接，无需再传姓名、手机号、证件号等其他信息 */
  SignId?: string;
  /** 通知签署方经办人的方式, 有以下途径: **SMS** :(默认)短信 **NONE** : 不通知注: `签署方为第三方子客企业时会被置为NONE, 不会发短信通知` */
  NotifyType?: string;
  /** [通过文件创建签署流程](https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowByFiles)时,如果设置了外层参数SignBeanTag=1(允许签署过程中添加签署控件),则可通过此参数明确规定合同所使用的签署控件类型（骑缝章、普通章法人章等）和具体的印章（印章ID,或者印章类型）或签名方式。注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个），他方企业或个人只支持限制控件类型。` */
  AddSignComponentsLimits?: ComponentLimit[];
  /** 可以自定义签署人角色名：收款人、开具人、见证人等，长度不能超过20，只能由中文、字母、数字和下划线组成。注: `如果是用模板发起, 优先使用此处上传的, 如果不传则用模板的配置的` */
  ApproverRoleName?: string;
  /** 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。注：`不指定该值时，默认为签署方自行选择。` */
  SignTypeSelector?: number;
  /** 签署人在合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体单行文本控件多行文本控件勾选框控件数字控件图片控件数据表格等填写控件具体使用说明可参考[为签署方指定填写控件](https://qian.tencent.cn/developers/partner/createFlowByFiles#为签署方指定填写控件)注：`此参数仅在通过文件发起合同或者合同组时生效`![image](https://qcloudimg.tencent-cloud.cn/raw/e004195ee4cb98a7f9bc12eb4a0a0b77.png) */
  Components?: Component[];
  /** 只有在生成H5签署链接的情形下（ 如调用获取H5签署链接、获取H5批量签署链接等接口），该配置才会生效。您可以指定H5签署视频核身的意图配置，选择问答模式或点头模式的语音文本。注意：1. 视频认证为白名单功能，使用前请联系对接的客户经理沟通。2. 使用视频认证时，生成H5签署链接的时候必须将签署认证方式指定为人脸（即ApproverSignTypes设置成人脸签署）。3. 签署完成后，可以通过查询签署认证人脸视频获取到当时的视频。 */
  Intention?: Intention;
  /** 进入签署流程的限制，目前支持以下选项： 空值（默认） :无限制，可在任何场景进入签署流程。 link :选择此选项后，将无法通过控制台或电子签小程序列表进入填写或签署操作，仅可预览合同。填写或签署流程只能通过短信或发起方提供的专用链接进行。 */
  SignEndpoints?: string[];
}

/** 签署方信息，如角色ID、角色名称等 */
declare interface FlowApproverItem {
  /** 合同编号 */
  FlowId?: string;
  /** 签署方信息，如角色ID、角色名称等 */
  Approvers?: ApproverItem[];
}

/** 签署人签署链接信息。 */
declare interface FlowApproverUrlInfo {
  /** 签署短链接。注意:1. 该链接有效期为**30分钟**，同时需要注意保密，不要外泄给无关用户。2. 该链接不支持小程序嵌入，仅支持**移动端浏览器**打开。3. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  SignUrl?: string;
  /** 签署人类型。- **PERSON**: 个人 */
  ApproverType?: string;
  /** 签署人姓名。 */
  Name?: string;
  /** 签署人手机号。 */
  Mobile?: string;
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

/** 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息 */
declare interface FlowDetailInfo {
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowName?: string;
  /** 合同流程的类别分类（如销售合同/入职合同等）。 */
  FlowType?: string;
  /** 合同流程当前的签署状态, 会存在下列的状态值 **INIT** :合同创建 **PART** :合同签署中(至少有一个签署方已经签署) **REJECT** :合同拒签 **ALL** :合同签署完成 **DEADLINE** :合同流签(合同过期) **CANCEL** :合同撤回 **RELIEVED** :解除协议（已解除） */
  FlowStatus?: string;
  /** 当合同流程状态为已拒签（即 FlowStatus=REJECT）或已撤销（即 FlowStatus=CANCEL ）时，此字段 FlowMessage 为拒签或撤销原因。 */
  FlowMessage?: string;
  /** 合同流程的创建时间戳，格式为Unix标准时间戳（秒）。 */
  CreateOn?: number;
  /** 签署流程的签署截止时间, 值为unix时间戳, 精确到秒。 */
  DeadLine?: number;
  /** 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 1000长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。 */
  CustomData?: string;
  /** 合同流程的签署方数组 */
  FlowApproverInfos?: FlowApproverDetail[];
  /** 合同流程的关注方信息数组 */
  CcInfos?: FlowApproverDetail[];
  /** 是否需要发起前审批当NeedCreateReview为true，表明当前流程是需要发起前审核的合同，可能无法进行查看，签署操作，需要等审核完成后，才可以继续后续流程当NeedCreateReview为false，不需要发起前审核的合同 */
  NeedCreateReview?: boolean;
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
  /** 已废弃，请使用【应用号配置】中的回调地址统一接收消息 */
  CallbackUrl?: string;
  /** 第三方应用的业务信息，最大长度1000个字符。 */
  CustomerData?: string;
  /** 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署 */
  Unordered?: boolean;
  /** 签署文件中的发起方的填写控件，需要在发起的时候进行填充 */
  Components?: Component[];
  /** 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始 */
  CustomShowMap?: string;
  /** 本企业(发起方企业)是否需要签署审批 */
  NeedSignReview?: boolean;
  /** 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下： 0 :合同（默认值） 1 :文件 2 :协议 3 :文书效果如下:![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png) */
  FlowDisplayType?: number;
}

/** 合同转交相关信息 */
declare interface FlowForwardInfo {
  /** 合同流程ID，为32位字符串。此接口的合同流程ID需要由[创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow)接口创建得到。 */
  FlowId: string;
  /** 签署方经办人在合同中的参与方ID，为32位字符串。 */
  RecipientId: string;
}

/** 转交合同结果 */
declare interface FlowForwardResult {
  /** 合同流程ID为32位字符串。您可以登录腾讯电子签控制台，在 "合同" -> "合同中心" 中查看某个合同的FlowId（在页面中展示为合同ID）。[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)。 */
  FlowId?: string;
  /** 如果失败，返回的错误细节。 */
  ErrorDetail?: string;
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
  FlowId?: string;
  /** 签署方信息，包含合同ID和角色ID用于定位RecipientId。 */
  Approvers?: ApproverItem[];
}

/** 合同组的配置项信息包括：在合同组签署过程中，是否需要对每个子合同进行独立的意愿确认。 */
declare interface FlowGroupOptions {
  /** 发起方企业经办人（即签署人为发起方企业员工）是否需要对子合同进行独立的意愿确认**false**（默认）：发起方企业经办人签署时对所有子合同进行统一的意愿确认。**true**：发起方企业经办人签署时需要对子合同进行独立的意愿确认。 */
  SelfOrganizationApproverSignEach?: boolean;
  /** 非发起方企业经办人（即：签署人为个人或者不为发起方企业的员工）是否需要对子合同进行独立的意愿确认**false**（默认）：非发起方企业经办人签署时对所有子合同进行统一的意愿确认。**true**：非发起方企业经办人签署时需要对子合同进行独立的意愿确认。 */
  OtherApproverSignEach?: boolean;
}

/** 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。 */
declare interface FlowGroupUrlInfo {
  /** 合同组子合同和签署方的信息，用于补充动态签署人。 */
  FlowGroupApproverInfos?: FlowGroupApproverInfo[];
}

/** 此结构体 (FlowInfo) 用于描述签署流程信息。 */
declare interface FlowInfo {
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowName: string;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。示例值：1604912664 */
  Deadline: number;
  /** 用户配置的合同模板ID，会基于此模板创建合同文档，为32位字符串。如果使用模板发起接口，此参数为必填。可以通过生成子客登录链接登录企业控制台, 在**企业模板**中得到合同模板ID。[点击产看模板Id在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/e988be12bf28a89b4716aed4502c2e02.png) */
  TemplateId?: string;
  /** 合同流程的参与方列表，最多可支持50个参与方。对应不同签署人的传参方式可以参考文档 [签署方入参指引](https://qian.tencent.com/developers/partner/flow_approver)注: 在发起流程时，需要保证 FlowApprovers中的顺序与模板定义顺序一致，否则会发起失败。例如，如果模板中定义的第一个参与人是个人用户，第二个参与人是企业员工，则在 approver 中传参时，第一个也必须是个人用户，第二个参与人必须是企业员工。[点击查看模板参与人顺序定义位置](https://qcloudimg.tencent-cloud.cn/raw/c50e0a204fc5c66aaa2ca70e451ef2d6.png) */
  FlowApprovers?: FlowApproverInfo[];
  /** 发起方角色的填写控件的填充内容。注：只有在控制台编辑模板时，归属给发起方的填写控件（如下图）才能在创建文档的时候进行内容填充。(白名单功能需要联系对接经理开通，否则模板编辑时无法将填写控件分配给发起方)。![image](https://qcloudimg.tencent-cloud.cn/raw/b1d3978140ee2b44e2c9fdc96e467a5d.png) */
  FormFields?: FormField[];
  /** 该字段已废弃，请使用【应用号配置】中的回调地址统一接口消息 */
  CallbackUrl?: string;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。 */
  FlowType?: string;
  /** 合同流程描述信息(可自定义此描述)，最大长度1000个字符。 */
  FlowDescription?: string;
  /** 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为1000长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  CustomerData?: string;
  /** 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：{合同名称} {发起方企业} {发起方姓名} {签署方N企业}{签署方N姓名}其中，N表示签署方的编号，从1开始，不能超过签署人的数量。例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子合同名称：租房合同 发起方：腾讯公司(张三) 签署方：李四![image](https://qcloudimg.tencent-cloud.cn/raw/628f0928cac15d2e3bfa6088f53f5998.png) */
  CustomShowMap?: string;
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。注1. 抄送人名单中可以包括自然人以及本企业的员工（本企业员工必须已经完成认证并加入企业）。2. 请确保抄送人列表中的成员不与任何签署人重复。 */
  CcInfos?: CcInfo[];
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
  /** 若在创建签署流程时指定了关注人CcInfos，此参数可设定向关注人发送短信通知的类型： **0** :合同发起时通知通知对方来查看合同（默认） **1** : 签署完成后通知对方来查看合同 */
  CcNotifyType?: number;
  /** 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传： **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签） **OTHER** : 通用场景注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。` */
  AutoSignScene?: string;
  /** 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下： 0 :合同（默认值） 1 :文件 2 :协议 3 :文书效果如下:![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png) */
  FlowDisplayType?: number;
}

/** 流程对应资源链接信息 */
declare interface FlowResourceUrlInfo {
  /** 合同流程的ID */
  FlowId?: string;
  /** 对应的合同流程的PDF下载链接 */
  ResourceUrlInfos?: ResourceUrlInfo[];
}

/** 电子文档的控件填充信息。按照控件类型进行相应的填充。当控件的 ComponentType='TEXT'时，FormField.ComponentValue填入文本内容```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "文本内容"}```当控件的 ComponentType='MULTI_LINE_TEXT'时，FormField.ComponentValue填入文本内容，支持自动换行。```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "多行文本内容"}```当控件的 ComponentType='CHECK_BOX'时，FormField.ComponentValue填入true或false文本```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "true"}```当控件的 ComponentType='FILL_IMAGE'时，FormField.ComponentValue填入图片的资源ID```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxxx"}```当控件的 ComponentType='ATTACHMENT'时，FormField.ComponentValue填入附件图片的资源ID列表，以逗号分隔，单个附件控件最多支持6个资源ID；```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx1,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx2,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx3"}```当控件的 ComponentType='SELECTOR'时，FormField.ComponentValue填入选择的选项内容；```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "选择的内容"}```当控件的 ComponentType='DATE'时，FormField.ComponentValue填入日期内容；```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "2023年01月01日"}```当控件的 ComponentType='DISTRICT'时，FormField.ComponentValue填入省市区内容；```FormField输入示例：{ "ComponentId": "componentId1", "ComponentValue": "广东省深圳市福田区"}```【数据表格传参说明】当控件的 ComponentType='DYNAMIC_TABLE'时，FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）输入示例1：```{ "headers":[ { "content":"head1" }, { "content":"head2" }, { "content":"head3" } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```输入示例2（表格表头宽度比例配置）：```{ "headers":[ { "content":"head1", "widthPercent": 30 }, { "content":"head2", "widthPercent": 30 }, { "content":"head3", "widthPercent": 40 } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123" }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456" }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789" } ] }}```输入示例3（表格设置字体加粗颜色）：```{ "headers":[ { "content":"head1" }, { "content":"head2" }, { "content":"head3" } ], "rowCount":3, "body":{ "cells":[ { "rowStart":1, "rowEnd":1, "columnStart":1, "columnEnd":1, "content":"123", "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "CENTER"} }, { "rowStart":2, "rowEnd":3, "columnStart":1, "columnEnd":2, "content":"456", "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "LEFT"} }, { "rowStart":3, "rowEnd":3, "columnStart":3, "columnEnd":3, "content":"789", "style": {"color": "#b500bf", "fontSize": 12,"bold": false,"align": "RIGHT"} } ] }}```输入示例4（表格设置表头不合成到文件）：```{ "headers": [ { "content": "序号" }, { "content": "品牌" }, { "content": "商品名称" }, { "content": "粒径" }, { "content": "规格" }, { "content": "数量(包)" }, { "content": "重量(吨)" } ], "rowCount": 5, "body": { "cells": [ { "rowStart": 1, "rowEnd": 1, "columnStart": 1, "columnEnd": 1, "content": "1" }, { "rowStart": 1, "rowEnd": 1, "columnStart": 2, "columnEnd": 2, "content": "品牌名称1" }, { "rowStart": 1, "rowEnd": 1, "columnStart": 3, "columnEnd": 3, "content": "商品名称1" }, { "rowStart": 1, "rowEnd": 1, "columnStart": 4, "columnEnd": 4, "content": "7#" }, { "rowStart": 1, "rowEnd": 1, "columnStart": 5, "columnEnd": 5, "content": "20" }, { "rowStart": 1, "rowEnd": 1, "columnStart": 6, "columnEnd": 6, "content": "50" }, { "rowStart": 1, "rowEnd": 1, "columnStart": 7, "columnEnd": 7, "content": "1.000" }, { "rowStart": 2, "rowEnd": 2, "columnStart": 1, "columnEnd": 1, "content": "2" }, { "rowStart": 2, "rowEnd": 2, "columnStart": 2, "columnEnd": 2, "content": "品牌名称2" }, { "rowStart": 2, "rowEnd": 2, "columnStart": 3, "columnEnd": 3, "content": "商品名称2" }, { "rowStart": 2, "rowEnd": 2, "columnStart": 4, "columnEnd": 4, "content": "5#" }, { "rowStart": 2, "rowEnd": 2, "columnStart": 5, "columnEnd": 5, "content": "20" }, { "rowStart": 2, "rowEnd": 2, "columnStart": 6, "columnEnd": 6, "content": "20" }, { "rowStart": 2, "rowEnd": 2, "columnStart": 7, "columnEnd": 7, "content": "0.400" }, { "rowStart": 3, "rowEnd": 3, "columnStart": 1, "columnEnd": 1, "content": "3" }, { "rowStart": 3, "rowEnd": 3, "columnStart": 2, "columnEnd": 2, "content": "品牌名称3" }, { "rowStart": 3, "rowEnd": 3, "columnStart": 3, "columnEnd": 3, "content": "商品名称3" }, { "rowStart": 3, "rowEnd": 3, "columnStart": 4, "columnEnd": 4, "content": "2#" }, { "rowStart": 3, "rowEnd": 3, "columnStart": 5, "columnEnd": 5, "content": "20" }, { "rowStart": 3, "rowEnd": 3, "columnStart": 6, "columnEnd": 6, "content": "5" }, { "rowStart": 3, "rowEnd": 3, "columnStart": 7, "columnEnd": 7, "content": "0.100" }, { "rowStart": 4, "rowEnd": 4, "columnStart": 1, "columnEnd": 1, "content": "4" }, { "rowStart": 4, "rowEnd": 4, "columnStart": 2, "columnEnd": 2, "content": "品牌名称4" }, { "rowStart": 4, "rowEnd": 4, "columnStart": 3, "columnEnd": 3, "content": "商品名称4" }, { "rowStart": 4, "rowEnd": 4, "columnStart": 4, "columnEnd": 4, "content": "3#" }, { "rowStart": 4, "rowEnd": 4, "columnStart": 5, "columnEnd": 5, "content": "20" }, { "rowStart": 4, "rowEnd": 4, "columnStart": 6, "columnEnd": 6, "content": "10" }, { "rowStart": 4, "rowEnd": 4, "columnStart": 7, "columnEnd": 7, "content": "0.200" }, { "rowStart": 5, "rowEnd": 5, "columnStart": 1, "columnEnd": 5, "content": "合计" }, { "rowStart": 5, "rowEnd": 5, "columnStart": 6, "columnEnd": 6, "content": "85" }, { "rowStart": 5, "rowEnd": 5, "columnStart": 7, "columnEnd": 7, "content": "1.700" } ] }, "settings": { "headerRowDisplay": false }}```表格参数说明| 名称 | 类型 | 描述 || ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- || headers | Array | 表头：不超过10列，不支持单元格合并，字数不超过100 || rowCount | Integer | 表格内容最大行数 || cells.N.rowStart | Integer | 单元格坐标：行起始index || cells.N.rowEnd | Integer | 单元格坐标：行结束index || cells.N.columnStart | Integer | 单元格坐标：列起始index || cells.N.columnEnd | Integer | 单元格坐标：列结束index || cells.N.content | String | 单元格内容，字数不超过100 || cells.N.style | String | 单元格字体风格配置 ，风格配置的json字符串 如： {"font":"黑体","fontSize":12,"color":"#FFFFFF","bold":true,"align":"CENTER"} || settings | Object | 表格全局设定。目前支持设置表头不显示，示例：{"headerRowDisplay":false} |表格参数headers说明widthPercent Integer 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35content String 表头单元格内容，字数不超过100style String 为字体风格设置 风格支持： font : 目前支持 黑体、宋体; fontSize： 6-72; color：000000-FFFFFF 字符串形如： "#FFFFFF" 或者 "0xFFFFFF"; bold ： 是否加粗， true ： 加粗 false： 不加粗; align: 对其方式， 支持 LEFT / RIGHT / CENTER */
declare interface FormField {
  /** 控件填充值，ComponentType和传入值格式对应关系如下： TEXT : 文本内容 MULTI_LINE_TEXT : 文本内容， 可以用 \n 来控制换行位置 CHECK_BOX : true/false FILL_IMAGE、ATTACHMENT : 附件的FileId，需要通过UploadFiles接口上传获取 SELECTOR : 选项值 DYNAMIC_TABLE - 传入json格式的表格内容，详见说明：[数据表格](https://qian.tencent.com/developers/partner/dynamic_table) DATE : 格式化：xxxx年xx月xx日（例如：2024年05月28日） DISTRICT : 省市区行政区控件，需填写ComponentValue为省市区行政区字符串内容控件值约束说明： 特殊控件 填写约束 企业全称控件 企业名称中文字符中文括号 统一社会信用代码控件 企业注册的统一社会信用代码 法人名称控件 最大50个字符，2到25个汉字或者1到50个字母 签署意见控件 签署意见最大长度为50字符 签署人手机号控件 国内手机号 13,14,15,16,17,18,19号段长度11位 签署人身份证控件 合法的身份证号码检查 控件名称 控件名称最大长度为20字符，不支持表情 单行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 多行文本控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 勾选框控件 选择填字符串true，不选填字符串false 选择器控件 同单行文本控件约束，填写选择值中的字符串 数字控件 请输入有效的数字(可带小数点) 日期控件 格式：yyyy年mm月dd日 附件控件 JPG或PNG图片，上传数量限制，1到6个，最大6个附件，填写上传的资源ID 图片控件 JPG或PNG图片，填写上传的图片资源ID 邮箱控件 有效的邮箱地址, w3c标准 地址控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 省市区控件 只允许输入中文，英文，数字，中英文标点符号，不支持表情 性别控件 选择值中的字符串 学历控件 选择值中的字符串 */
  ComponentValue: string;
  /** 表单域或控件的ID，跟ComponentName二选一，不能全为空；CreateFlowsByTemplates 接口不使用此字段。点击此处查看模板上控件ID的获取方式 */
  ComponentId?: string;
  /** 控件的名字，跟ComponentId二选一，不能全为空点击此处查看模板上控件名字的获取方式 */
  ComponentName?: string;
  /** 是否锁定模板控件值，锁定后无法修改（用于嵌入式发起合同），true-锁定，false-不锁定 */
  LockComponentValue?: boolean;
}

/** 授权企业列表（目前仅用于“企业自动签 -> 合作企业授权”） */
declare interface HasAuthOrganization {
  /** 授权企业openid， */
  OrganizationOpenId?: string;
  /** 授权企业名称 */
  OrganizationName?: string;
  /** 被授权企业openid， */
  AuthorizedOrganizationOpenId?: string;
  /** 被授权企业名称 */
  AuthorizedOrganizationName?: string;
  /** 授权时间，格式为时间戳，单位s */
  AuthorizeTime?: number;
}

/** 被授权的用户信息 */
declare interface HasAuthUser {
  /** 第三方应用平台自定义，对应第三方平台子客企业员工的唯一标识。 */
  OpenId?: string;
}

/** 视频核身意图配置，可指定问答模式或者点头模式的语音文本。注: `视频认证为白名单功能，使用前请联系对接的客户经理沟通。` */
declare interface Intention {
  /** 视频认证类型，支持以下类型1 : 问答模式2 : 点头模式注: `视频认证为白名单功能，使用前请联系对接的客户经理沟通。` */
  IntentionType?: number;
  /** 意愿核身语音问答模式（即语音播报+语音回答）使用的文案，包括：系统语音播报的文本、需要核验的标准文本。支持传入1～10轮问答，最多支持10轮。注：`选择问答模式时，此字段可不传，不传则使用默认语音文本：请问，您是否同意签署本协议？可语音回复“同意”或“不同意”。` */
  IntentionQuestions?: IntentionQuestion[];
  /** 意愿核身（点头确认模式）使用的文案，若未使用意愿核身（点头确认模式），则该字段无需传入。支持传入1～10轮点头确认文本，最多支持10轮。注：`选择点头模式时，此字段可不传，不传则使用默认语音文本：请问，您是否同意签署本协议？可点头同意。` */
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
  Details?: IntentionActionResultDetail[];
}

/** 意愿核身点头确认模式结果详细数据 */
declare interface IntentionActionResultDetail {
  /** 视频base64编码（其中包含全程提示文本和点头音频，mp4格式） */
  Video?: string;
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
  Video?: string;
  /** 和答案匹配结果列表 */
  ResultCode?: string[];
  /** 回答问题语音识别结果列表 */
  AsrResult?: string[];
}

/** 需要进行签署审核的签署人信息 */
declare interface NeedReviewApproverInfo {
  /** 签署方经办人的类型，支持以下类型 ORGANIZATION 企业（含企业自动签）PERSON 个人（含个人自动签） */
  ApproverType: string;
  /** 签署方经办人的姓名。 经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  ApproverName: string;
  /** 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。 请确认手机号所有方为此合同签署方。 */
  ApproverMobile?: string;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN 中国港澳台居民居住证(格式同中国大陆居民身份证)OTHER_CARD_TYPE 其他证件注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。` */
  ApproverIdCardType?: string;
  /** 签署方经办人的证件号码，应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。。中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  ApproverIdCardNumber?: string;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。 */
  OrganizationName?: string;
}

/** 持有的电子印章信息 */
declare interface OccupiedSeal {
  /** 电子印章编号 */
  SealId?: string;
  /** 电子印章名称 */
  SealName?: string;
  /** 电子印章授权时间戳，单位秒 */
  CreateOn?: number;
  /** 电子印章授权人，电子签的UserId */
  Creator?: string;
  /** 电子印章策略Id */
  SealPolicyId?: string;
  /** 印章状态，有以下六种：CHECKING（审核中）SUCCESS（已启用）FAIL（审核拒绝）CHECKING-SADM（待超管审核）DISABLE（已停用）STOPPED（已终止） */
  SealStatus?: string;
  /** 审核失败原因 */
  FailReason?: string;
  /** 印章图片url，5分钟内有效 */
  Url?: string;
  /** 电子印章类型 , 可选类型如下: **OFFICIAL**: (默认)公章**CONTRACT**: 合同专用章;**FINANCE**: 财务专用章;**PERSONNEL**: 人事专用章**INVOICE**: 发票专用章 */
  SealType?: string;
  /** 用印申请是否为永久授权 */
  IsAllTime?: boolean;
  /** 授权人列表 */
  AuthorizedUsers?: AuthorizedUser[];
}

/** 企业批量注册链接信息 */
declare interface OrganizationAuthUrl {
  /** 跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表 子客企业状态 子客企业员工状态 Endpoint 链接有效期限 企业未激活 员工未认证 PC 5分钟 企业未激活 员工未认证 CHANNEL/SHORT_URL/APP 一年 企业已激活 员工未认证 PC 5分钟 企业已激活 员工未认证 CHANNEL/SHORT_URL/APP 一年 企业已激活 员工已认证 PC 5分钟 企业已激活 员工已认证 CHANNEL/SHORT_URL/APP 一年 注： `1.链接仅单次有效，每次登录需要需要重新创建新的链接``2.创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义` */
  AuthUrl?: string;
  /** 企业批量注册的错误信息，例如：企业三要素不通过 */
  ErrorMessage?: string;
}

/** 企业认证可选项，其中包括 社会信用代码是否一致，企业名称是否一致，法人是否一致等信息。代表生成链接的时候指定的这些信息不能被用户修改。p.s. 注意这些选项一旦传递，相关的信息也不会被上传的营业执照里面包含的信息所覆盖。 */
declare interface OrganizationAuthorizationOptions {
  /** 对方打开链接认证时，对方填写的营业执照的社会信用代码是否与接口上传上来的要保持一致。false（默认值）：关闭状态，实际认证时允许与接口传递的信息存在不一致。true：启用状态，实际认证时必须与接口传递的信息完全相符。 */
  UniformSocialCreditCodeSame?: boolean;
  /** 对方打开链接认证时，企业名称是否要与接口传递上来的保持一致。false（默认值）：关闭状态，实际认证时允许与接口传递的信息存在不一致。true：启用状态，实际认证时必须与接口传递的信息完全相符。p.s. 仅在企业名称不为空时有效 */
  OrganizationNameSame?: boolean;
  /** 对方打开链接认证时，法人姓名是否要与接口传递上来的保持一致。false（默认值）：关闭状态，实际认证时允许与接口传递的信息存在不一致。true：启用状态，实际认证时必须与接口传递的信息完全相符。p.s. 仅在法人姓名不为空时有效 */
  LegalNameSame?: boolean;
}

/** 企业认证信息参数， 需要保证这些参数跟营业执照中的信息一致。 */
declare interface OrganizationCommonInfo {
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。 */
  OrganizationName: string;
  /** 组织机构企业统一社会信用代码。请确认该企业统一社会信用代码与企业营业执照中注册的统一社会信用代码一致。 */
  UniformSocialCreditCode: string;
  /** 组织机构法人的姓名。请确认该企业统一社会信用代码与企业营业执照中注册的法人姓名一致。 */
  LegalName: string;
  /** 组织机构法人的证件类型 */
  LegalIdCardType?: string;
  /** 组织机构法人的证件号码 */
  LegalIdCardNumber?: string;
  /** 组织机构超管姓名。 */
  AdminName?: string;
  /** 组织机构超管手机号。 */
  AdminMobile?: string;
  /** 组织机构超管证件类型 */
  AdminIdCardType?: string;
  /** 组织机构超管证件号码 */
  AdminIdCardNumber?: string;
  /** 原超管姓名 */
  OldAdminName?: string;
  /** 原超管手机号 */
  OldAdminMobile?: string;
  /** 原超管证件类型 */
  OldAdminIdCardType?: string;
  /** 原超管证件号码 */
  OldAdminIdCardNumber?: string;
}

/** 机构信息 */
declare interface OrganizationInfo {
  /** 用户在渠道的机构编号 */
  OrganizationOpenId: string;
  /** 机构在平台的编号 */
  OrganizationId?: string;
  /** 用户渠道 */
  Channel?: string;
  /** 用户真实的IP */
  ClientIp?: string;
  /** 机构的代理IP */
  ProxyIp?: string;
}

/** 合同验签每个签署区的信息 */
declare interface PdfVerifyResult {
  /** 验签结果详情，每个签名域对应的验签结果。状态值如下 **1** :验签成功，在电子签签署 **2** :验签成功，在其他平台签署 **3** :验签失败 **4** :pdf文件没有签名域 **5** :文件签名格式错误 */
  VerifyResult?: number;
  /** 签署平台如果文件是在腾讯电子签平台签署，则为**腾讯电子签**，如果文件不在腾讯电子签平台签署，则为**其他平台**。 */
  SignPlatform?: string;
  /** 申请证书的主体的名字如果是在腾讯电子签平台签署, 则对应的主体的名字个数如下**企业**: ESS@企业名称@平台生成的数字编码**个人**: ESS@个人姓名@证件号@平台生成的数字编码如果在其他平台签署的, 主体的名字参考其他平台的说明 */
  SignerName?: string;
  /** 签署时间的Unix时间戳，单位毫秒 */
  SignTime?: number;
  /** 证书签名算法, 如SHA1withRSA等算法 */
  SignAlgorithm?: string;
  /** 在数字证书申请过程中，系统会自动生成一个独一无二的序列号。 */
  CertSn?: string;
  /** 证书起始时间的Unix时间戳，单位毫秒 */
  CertNotBefore?: number;
  /** 证书过期时间的时间戳，单位毫秒 */
  CertNotAfter?: number;
  /** 签名类型, 保留字段, 现在全部为0 */
  SignType?: number;
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
  Name?: string;
  /** 权限key */
  Key?: string;
  /** 权限类型 1前端，2后端 */
  Type?: number;
  /** 是否隐藏 */
  Hide?: number;
  /** 数据权限标签 1:表示根节点，2:表示叶子结点 */
  DataLabel?: number;
  /** 数据权限独有，1:关联其他模块鉴权，2:表示关联自己模块鉴权 */
  DataType?: number;
  /** 数据权限独有，表示数据范围，1：全公司，2:部门及下级部门，3:自己 */
  DataRange?: number;
  /** 关联权限, 表示这个功能权限要受哪个数据权限管控 */
  DataTo?: string;
  /** 父级权限key */
  ParentKey?: string;
  /** 是否选中 */
  IsChecked?: boolean;
  /** 子权限集合 */
  Children?: Permission[];
}

/** 权限树中的权限组 */
declare interface PermissionGroup {
  /** 权限组名称 */
  GroupName?: string;
  /** 权限组key */
  GroupKey?: string;
  /** 是否隐藏分组，0否1是 */
  Hide?: number;
  /** 权限集合 */
  Permissions?: Permission[];
}

/** 预设的动态签署方的补充信息，仅匹配对应信息的签署方才能领取合同。暂时仅对个人参与方生效。 */
declare interface PresetApproverInfo {
  /** 预设参与方姓名。 */
  Name?: string;
  /** 预设参与方手机号。 */
  Mobile?: string;
  /** 预设参与方证件号，需要和IdCardType同时传入。证件号码，应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成(如存在X，请大写)。 */
  IdCardNumber?: string;
  /** 预设参与方的证件类型，需要与IdCardNumber同时传入。证件类型，支持以下类型ID_CARD: 居民身份证 */
  IdCardType?: string;
}

/** 同步的员工的信息 */
declare interface ProxyOrganizationOperator {
  /** 员工的唯一标识(即OpenId), 定义Agent中的OpenId一样, 可以参考Agent结构体 */
  Id: string;
  /** 员工的姓名，最大长度50个字符员工的姓名将用于身份认证和电子签名，请确保填写的姓名为真实姓名，而非昵称等代名。 */
  Name?: string;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证) */
  IdCardType?: string;
  /** 经办人证件号 */
  IdCardNumber?: string;
  /** 员工的手机号，支持国内手机号11位数字(无需加+86前缀或其他字符)，不支持海外手机号。 */
  Mobile?: string;
  /** 预先分配员工的角色, 可以分配的角色如下: 可以分配的角色 角色名称 角色描述 admin 业务管理员（IT 系统负责人，e.g. CTO） 有企业合同模块、印章模块、模板模块等全量功能及数据权限。 channel-normal-operator 经办人（企业法务负责人） 有发起合同、签署合同（含填写、拒签）、撤销合同、持有印章等权限能力，可查看企业所有合同数据。 channel-sales-man 业务员（一般为销售员、采购员） 有发起合同、签署合同（含填写、拒签）、撤销合同、持有印章等权限能力，可查看自己相关所有合同数据。 */
  DefaultRole?: string;
}

/** 流程中签署方和填写方(如果有填写控件存证时)的信息 */
declare interface Recipient {
  /** 合同参与方的角色ID */
  RecipientId?: string;
  /** 参与者类型, 可以选择的类型如下: **ENTERPRISE** :此角色为企业参与方 **INDIVIDUAL** :此角色为个人参与方 **PROMOTER** :此角色是发起方 */
  RecipientType?: string;
  /** 合同参与方的角色描述，长度不能超过100，只能由中文、字母、数字和下划线组成。 */
  Description?: string;
  /** 合同参与方的角色名字，长度不能超过20，只能由中文、字母、数字和下划线组成。 */
  RoleName?: string;
  /** 是否需要校验，true-是，false-否 */
  RequireValidation?: boolean;
  /** 是否必须填写，true-是，false-否 */
  RequireSign?: boolean;
  /** 内部字段，签署类型 */
  SignType?: number;
  /** 签署顺序：数字越小优先级越高 */
  RoutingOrder?: number;
  /** 是否是发起方，true-是 false-否 */
  IsPromoter?: boolean;
  /** 签署人查看合同校验方式, 支持的类型如下: 1 :实名认证查看 2 :手机号校验查看 */
  ApproverVerifyTypes?: number[];
  /** 签署人进行合同签署时的认证方式，支持的类型如下: 1 :人脸认证 2 :签署密码 3 :运营商三要素认证 4 :UKey认证 5 :设备指纹识别 6 :设备面容识别 */
  ApproverSignTypes?: number[];
  /** 签署方是否可以转他人处理 **false** : ( 默认)可以转他人处理 **true** :不可以转他人处理 */
  NoTransfer?: boolean;
}

/** 参与方填写控件信息 */
declare interface RecipientComponentInfo {
  /** 参与方的角色ID */
  RecipientId?: string;
  /** 参与方填写状态 **0** : 还没有填写 **1** : 已经填写 */
  RecipientFillStatus?: string;
  /** 此角色是否是发起方角色 **true** : 是发起方角色 **false** : 不是发起方角色 */
  IsPromoter?: boolean;
  /** 此角色的填写控件列表 */
  Components?: FilledComponent[];
}

/** 企业认证信息参数， 需要保证这些参数跟营业执照中的信息一致。 */
declare interface RegistrationOrganizationInfo {
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。 */
  OrganizationName: string;
  /** 机构在贵司业务系统中的唯一标识，用于与腾讯电子签企业账号进行映射，确保在同一应用内不会出现重复。该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。 */
  OrganizationOpenId: string;
  /** 员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一应用内不会出现重复。该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。 */
  OpenId: string;
  /** 组织机构企业统一社会信用代码。请确认该企业统一社会信用代码与企业营业执照中注册的统一社会信用代码一致。 */
  UniformSocialCreditCode: string;
  /** 组织机构法人的姓名。请确认该企业统一社会信用代码与企业营业执照中注册的法人姓名一致。 */
  LegalName: string;
  /** 组织机构企业注册地址。请确认该企业注册地址与企业营业执照中注册的地址一致。 */
  Address?: string;
  /** 组织机构超管姓名。在注册流程中，必须是超管本人进行操作。如果法人作为超管管理组织机构,超管姓名就是法人姓名 */
  AdminName?: string;
  /** 组织机构超管手机号。在注册流程中，这个手机号必须跟操作人在电子签注册的个人手机号一致。 */
  AdminMobile?: string;
  /** 可选的此企业允许的授权方式, 可以设置的方式有:1：上传授权书2：法人授权超管5：授权书+对公打款注:`1. 当前仅支持一种认证方式``2. 如果当前的企业类型是政府/事业单位, 则只支持上传授权书+对公打款``3. 如果当前操作人是法人,则是法人认证` */
  AuthorizationTypes?: number[];
  /** 经办人的证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证) */
  AdminIdCardType?: string;
  /** 经办人的证件号 */
  AdminIdCardNumber?: string;
  /** 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M */
  BusinessLicense?: string;
  /** 授权书(PNG或JPG或PDF) base64格式, 大小不超过8M 。p.s. 如果上传授权书 ，需遵循以下条件1. 超管的信息（超管姓名，超管身份证，超管手机号）必须为必填参数。2. 超管的个人身份必须在电子签已经实名。2. 认证方式AuthorizationTypes必须只能是上传授权书方式 */
  PowerOfAttorneys?: string[];
  /** 认证完之后的H5页面的跳转链接，最大长度1000个字符。链接类型请参考 [跳转电子签H5](https://qian.tencent.com/developers/company/openqianh5/) */
  AutoJumpUrl?: string;
}

/** 解除协议的签署人，如不指定，默认使用待解除流程(原流程)中的签署人。`注意`: - 不支持更换C端(个人身份类型)签署人，如果原流程中含有C端签署人，默认使用原流程中的该签署人。 - 目前不支持替换C端(个人身份类型)签署人，但是可以指定C端签署人的签署方自定义控件别名，具体见参数ApproverSignRole描述。 - 当指定C端签署人的签署方自定义控件别名不空时，除参数ApproverNumber外，可以只传参数ApproverSignRole。如果需要指定B端(企业身份类型)签署人，其中ReleasedApprover需要传递的参数如下：(`ApproverNumber`, `ReleasedApproverRecipientId`这两个二选一), `OrganizationName`, `ApproverType`必传。对于其他身份标识：- **子客企业指定经办人**：OpenId必传，OrganizationOpenId必传；- **非子客企业经办人**：Name、Mobile必传。 */
declare interface ReleasedApprover {
  /** 签署人在原合同签署人列表中的顺序序号(从0开始，按顺序依次递增)。可以通过DescribeFlowDetailInfo接口查看原流程中的签署人列表。 */
  ApproverNumber: number;
  /** 指定签署人类型，目前支持 **ORGANIZATION**：企业(默认值) **ENTERPRISESERVER**：企业静默签 */
  ApproverType: string;
  /** 签署人在原合同中的RecipientId，可以通过DescribeFlowDetailInfo接口查看原流程中的签署人信息，可参考返回结构体FlowApproverDetail中的RecipientId。**注意**：当指定了此参数后，ApproverNumber即失效，会以本参数作为原合同参与人的选取。与ApproverNumber二选一。 */
  ReleasedApproverRecipientId?: string;
  /** 签署人姓名，最大长度50个字。 */
  Name?: string;
  /** 签署方经办人的证件类型，支持以下类型ID_CARD : 中国大陆居民身份证(默认值)HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证) */
  IdCardType?: string;
  /** 证件号码，应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成(如存在X，请大写)。中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber?: string;
  /** 签署人手机号。 */
  Mobile?: string;
  /** 组织机构名称。请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。 */
  OrganizationName?: string;
  /** 第三方平台子客企业的唯一标识，定义Agent中的ProxyOrganizationOpenId一样, 可以参考Agent结构体。当为子客企业指定经办人时，此OrganizationOpenId必传。 */
  OrganizationOpenId?: string;
  /** 第三方平台子客企业员工的唯一标识，长度不能超过64，只能由字母和数字组成。当签署方为同一第三方平台下的员工时，此OpenId必传。 */
  OpenId?: string;
  /** 签署控件类型，支持自定义企业签署方的签署控件类型 **SIGN_SEAL**：默认为印章控件类型(默认值) **SIGN_SIGNATURE**：手写签名控件类型 */
  ApproverSignComponentType?: string;
  /** 参与方在合同中的角色是按照创建合同的时候来排序的，解除协议默认会将第一个参与人叫`甲方`,第二个叫`乙方`, 第三个叫`丙方`，以此类推。如果需改动此参与人的角色名字，可用此字段指定，由汉字,英文字符,数字组成，最大20个字。![image](https://qcloudimg.tencent-cloud.cn/raw/973a820ab66d1ce57082c160c2b2d44a.png) */
  ApproverSignRole?: string;
  /** 印章Id，签署控件类型为印章时，用于指定本企业签署方在解除协议中使用那个印章进行签署 */
  ApproverSignSealId?: string;
}

/** 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。下面各种字段在解除协议中的位置参考：![image](https://qcloudimg.tencent-cloud.cn/raw/5087164cfe5a15fa3ced3180842d5da9.png) */
declare interface RelieveInfo {
  /** 解除理由，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  Reason: string;
  /** 解除后仍然有效的条款，保留条款，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  RemainInForceItem?: string;
  /** 原合同事项处理-费用结算，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  OriginalExpenseSettlement?: string;
  /** 原合同事项处理-其他事项，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  OriginalOtherSettlement?: string;
  /** 其他约定（如约定的与解除协议存在冲突的，以【其他约定】为准），最大支持200个字，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。 */
  OtherDeals?: string;
}

/** 催办接口返回的详细信息。 */
declare interface RemindFlowRecords {
  /** 合同流程是否可以催办： true - 可以，false - 不可以。 若无法催办，将返回RemindMessage以解释原因。 */
  CanRemind?: boolean;
  /** 合同流程ID，为32位字符串。 */
  FlowId?: string;
  /** 在合同流程无法催办的情况下，系统将返回RemindMessage以阐述原因。 */
  RemindMessage?: string;
}

/** 资源链接信息 */
declare interface ResourceUrlInfo {
  /** 资源链接地址，过期时间5分钟 */
  Url?: string;
  /** 资源名称 */
  Name?: string;
  /** 资源类型 */
  Type?: string;
}

/** 签署控件的配置信息，用在嵌入式发起的页面配置，包括 - 签署控件 是否默认展示日期. */
declare interface SignComponentConfig {
  /** 签署控件默认属性配置，是否默认展示签署日期， 在页面中可以进行修改。- false 展示签署日期（默认）- true 不展示签署日期 ![image](https://qcloudimg.tencent-cloud.cn/raw/448514412e2f69f6129425beda4ff568.png)。 */
  HideDate?: boolean;
}

/** 签署二维码的基本信息，用于创建二维码，用户可扫描该二维码进行签署操作。 */
declare interface SignQrCode {
  /** 二维码ID，为32位字符串。	注: 需要保留此二维码ID, 用于后序通过取消一码多扫二维码关闭这个二维码的签署功能。 */
  QrCodeId?: string;
  /** 二维码URL，可通过转换二维码的工具或代码组件将此URL转化为二维码，以便用户扫描进行流程签署。 */
  QrCodeUrl?: string;
  /** 二维码的有截止时间，格式为Unix标准时间戳（秒），可以通过入参的QrEffectiveDay来设置有效期，默认为7天有效期。 一旦超过二维码的有效期限，该二维码将自动失效。 */
  ExpiredTime?: number;
  /** 微信小程序二维码 */
  WeixinQrCodeUrl?: string;
}

/** 流程签署二维码的签署信息，适用于客户系统整合二维码功能。 通过链接，用户可直接访问电子签名小程序并签署合同。 */
declare interface SignUrl {
  /** 跳转至电子签名小程序签署的链接地址。 适用于客户端APP及小程序直接唤起电子签名小程序。 */
  AppSignUrl?: string;
  /** 签署链接有效时间，格式类似"2022-08-05 15:55:01" */
  EffectiveTime?: string;
  /** 跳转至电子签名小程序签署的链接地址，格式类似于https://essurl.cn/xxx。 打开此链接将会展示H5中间页面，随后唤起电子签名小程序以进行合同签署。 */
  HttpSignUrl?: string;
}

/** 签署链接内容 */
declare interface SignUrlInfo {
  /** 签署链接，过期时间为90天注：生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  SignUrl?: string;
  /** 合同过期时间戳，单位秒 */
  Deadline?: number;
  /** 当流程为顺序签署此参数有效时，数字越小优先级越高，暂不支持并行签署 可选 */
  SignOrder?: number;
  /** 签署人编号 */
  SignId?: string;
  /** 自定义用户编号 */
  CustomUserId?: string | null;
  /** 用户姓名 */
  Name?: string;
  /** 用户手机号码 */
  Mobile?: string;
  /** 签署参与者机构名字 */
  OrganizationName?: string;
  /** 参与者类型, 类型如下:**ORGANIZATION**:企业经办人**PERSON**: 自然人 */
  ApproverType?: string;
  /** 经办人身份证号 */
  IdCardNumber?: string;
  /** 签署链接对应流程Id */
  FlowId?: string;
  /** 企业经办人 用户在渠道的编号 */
  OpenId?: string;
  /** 合同组签署链接对应的合同组id */
  FlowGroupId?: string;
  /** 二维码，在生成动态签署人跳转封面页链接时返回注：`此二维码下载链接有效期为5分钟，可下载二维码后本地保存，二维码有效期为90天。` */
  SignQrcodeUrl?: string;
}

/** 企业员工信息 */
declare interface Staff {
  /** 员工在电子签平台的用户ID */
  UserId?: string;
  /** 显示的员工名注意：2024-07-08 及之后创建的应用号，该字段返回的是打码信息 */
  DisplayName?: string;
  /** 员工手机号注意：2024-07-08 及之后创建的应用号，该字段返回的是打码信息 */
  Mobile?: string;
  /** 员工邮箱 */
  Email?: string;
  /** 员工在第三方应用平台的用户ID */
  OpenId?: string;
  /** 员工角色 */
  Roles?: StaffRole[];
  /** 员工部门 */
  Department?: Department;
  /** 员工是否实名 */
  Verified?: boolean;
  /** 员工创建时间戳，单位秒 */
  CreatedOn?: number;
  /** 员工实名时间戳，单位秒 */
  VerifiedOn?: number;
  /** 员工是否离职：0-未离职，1-离职 */
  QuiteJob?: number;
}

/** 第三方应用集成员工角色信息 */
declare interface StaffRole {
  /** 角色id */
  RoleId?: string;
  /** 角色名称 */
  RoleName?: string;
}

/** 同步员工失败原因 */
declare interface SyncFailReason {
  /** 企业员工标识(即OpenId) */
  Id?: string;
  /** 新增员工或者员工离职失败原因, 可能存证ID不符合规范、证件号码不合法等原因 */
  Message?: string;
}

/** 复杂文档合成任务的任务信息 */
declare interface TaskInfo {
  /** 合成任务Id，可以通过 ChannelGetTaskResultApi 接口获取任务信息 */
  TaskId?: string;
  /** 任务状态：READY - 任务已完成；NOTREADY - 任务未完成； */
  TaskStatus?: string;
}

/** 此结构体 (TemplateInfo) 用于描述模板的信息。> **模板组成** >> 一个模板通常会包含以下结构信息>- 模板基本信息>- 签署参与方 Recipients，在模板发起合同时用于指定参与方>- 填写控件 Components>- 签署控件 SignComponents */
declare interface TemplateInfo {
  /** 模板ID，模板的唯一标识 */
  TemplateId?: string;
  /** 模板名 */
  TemplateName?: string;
  /** 模板描述信息 */
  Description?: string;
  /** 模板的填充控件列表[点击查看在模板中配置的填充控件的样子](https://qcloudimg.tencent-cloud.cn/raw/cb2f58529fca8d909258f9d45a56f7f4.png) */
  Components?: Component[];
  /** 此模块需要签署的各个参与方的角色列表。RecipientId标识每个参与方角色对应的唯一标识符，用于确定此角色的信息。[点击查看在模板中配置的签署参与方角色列表的样子](https://qcloudimg.tencent-cloud.cn/raw/e082bbcc0d923f8cb723d98382410aa2.png) */
  Recipients?: Recipient[];
  /** 此模板中的签署控件列表[点击查看在模板中配置的签署控件的样子](https://qcloudimg.tencent-cloud.cn/raw/29bc6ed753a5a0fce4a3ab02e2c0d955.png) */
  SignComponents?: Component[];
  /** 模板类型可以分为以下两种：1：带有本企业自动签署的模板，即签署过程无需签署人手动操作，系统自动完成签署。3：普通模板，即签署人需要手动进行签署操作。 */
  TemplateType?: number;
  /** 是否是发起人 ,已弃用 */
  IsPromoter?: boolean;
  /** 模板的创建者名字 */
  Creator?: string;
  /** 模板创建的时间戳，格式为Unix标准时间戳（秒） */
  CreatedOn?: number;
  /** 模板的 H5 预览链接，有效期为 5 分钟。您可以通过浏览器直接打开此链接预览模板，或将其嵌入到 iframe 中进行预览。注意：只有在请求接口时将 WithPreviewUrl 参数设置为 true，才会生成预览链接。 */
  PreviewUrl?: string;
  /** 第三方应用集成-模板PDF文件链接，有效期5分钟。请求参数WithPdfUrl=true时返回（此功能开放需要联系客户经理）。 */
  PdfUrl?: string;
  /** 本模板关联的第三方应用平台企业模板ID */
  ChannelTemplateId?: string;
  /** 本模板关联的三方应用平台平台企业模板名称 */
  ChannelTemplateName?: string;
  /** 0-需要子客企业手动领取平台企业的模板(默认); 1-平台自动设置子客模板 */
  ChannelAutoSave?: number;
  /** 模板版本，由全数字字符组成。默认为空，模板版本号由日期和序号组成，初始版本为yyyyMMdd001，yyyyMMdd002表示第二个版本，以此类推。 */
  TemplateVersion?: string;
  /** 模板可用状态的取值通常为以下两种：1：启用（默认），表示模板处于启用状态，可以被用户正常使用。2：停用，表示模板处于停用状态，禁止用户使用该模板。 */
  Available?: number;
  /** 模版的用户合同类型 */
  UserFlowType?: UserFlowType;
}

/** 模版对应的合同类型 */
declare interface TemplateUserFlowType {
  /** 合同类型id */
  UserFlowTypeId?: string;
  /** 用户合同类型名称 */
  Name?: string;
  /** 每个合同类型绑定的模版数量 */
  TemplateNum?: number;
  /** 合同类型的具体描述 */
  Description?: string;
}

/** 此结构体 (UploadFile) 用于描述多文件上传的文件信息。 */
declare interface UploadFile {
  /** Base64编码后的文件内容 */
  FileBody: string;
  /** 文件的名字。文件名的最大长度应不超过200个字符，并且文件名的后缀必须反映其文件类型。例如，PDF文件应以“.pdf”结尾，如“XXX.pdf”，而Word文件应以“.doc”或“.docx”结尾，如“XXX.doc”或“XXX.docx”。 */
  FileName?: string;
}

/** 用量明细 */
declare interface UsageDetail {
  /** 子客企业标识 */
  ProxyOrganizationOpenId?: string;
  /** 子客企业名 */
  ProxyOrganizationName?: string;
  /** 对应的消耗日期, **如果是汇总数据则为1970-01-01** */
  Date?: string;
  /** 消耗合同数量 */
  Usage?: number;
  /** 撤回合同数量 */
  Cancel?: number;
  /** 消耗渠道 */
  FlowChannel?: string;
}

/** 用户合同类型信息 */
declare interface UserFlowType {
  /** 用户合同类型id */
  UserFlowTypeId?: string;
  /** 用户合同类型名称 */
  Name?: string;
  /** 用户合同类型的描述信息 */
  Description?: string;
}

/** 接口调用的员工信息 */
declare interface UserInfo {
  /** 第三方应用平台自定义，对应第三方平台子客企业员工的唯一标识。注意:1. OpenId在子客企业对应一个真实员工，**本应用唯一, 不可重复使用**，最大64位字符串2. 可使用用户在贵方企业系统中的Userid或者hash值作为子客企业的员工OpenId3. **员工加入企业后**, 可以通过生成子客登录链接登录子客控制台后, 在**组织架构**模块查看员工们的OpenId, 样式如下图![image](https://qcloudimg.tencent-cloud.cn/raw/bb67fb66c926759df3a0af5838fdafd5.png) */
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

/** 用户的三要素：姓名，证件号，证件类型 */
declare interface UserThreeFactor {
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。 */
  Name: string;
  /** 证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证) */
  IdCardType: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
}

/** 主题配置 */
declare interface WebThemeConfig {
  /** 是否显示页面底部电子签logo，取值如下： **true**：页面底部显示电子签logo **false**：页面底部不显示电子签logo（默认） */
  DisplaySignBrandLogo?: boolean;
  /** 主题颜色：支持十六进制颜色值以及RGB格式颜色值，例如：#D54941，rgb(213, 73, 65) */
  WebEmbedThemeColor?: string;
  /** 企业认证页背景图（base64图片） */
  AuthenticateBackground?: string;
  /** 隐藏企业认证页面导航栏，取值如下： **true**：隐藏企业认证页面导航栏 **false**：显示企业认证页面导航栏（默认） */
  HideAuthenticateNavigationBar?: boolean;
  /** 隐藏企业认证顶部logo，取值如下： **true**：隐藏企业认证顶部logo **false**：显示企业认证顶部logo（默认） */
  HideAuthenticateTopLogo?: boolean;
}

declare interface ArchiveDynamicFlowRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经过实名认证 */
  Agent: Agent;
  /** 合同流程ID */
  FlowId: string;
}

declare interface ArchiveDynamicFlowResponse {
  /** 合同流程ID */
  FlowId?: string;
  /** 动态签署人的参与人信息 */
  Approvers?: ChannelArchiveDynamicApproverData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelBatchCancelFlowsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 要撤销的合同流程ID列表，最多100个，超过100不处理 */
  FlowIds: string[];
  /** 撤回原因，长度不能超过200，只能由中文、字母、数字和下划线组成。备注:`如果不传递撤回原因，那么默认撤回原因是 "自动撤销（通过接口实现）"` */
  CancelMessage?: string;
  /** 撤销理由自定义格式, 会展示在合同预览的界面中, 可以选择下面的组合方式：**0** : 默认格式, 合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同**1** : 合同封面页面会展示为: 发起方以**CancelMessage**的理由撤销当前合同**2** : 保留企业名称, 合同封面页面会展示为: 发起方-企业名称以**CancelMessage**的理由撤销当前合同**3** : 保留企业名称+经办人名字, 合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同注: `CancelMessage为撤销当前合同的理由`![image](https://qcloudimg.tencent-cloud.cn/raw/f16cf37dbb3a09d6569877f093b92204/channel_ChannelCancelFlow.png) */
  CancelMessageFormat?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelBatchCancelFlowsResponse {
  /** 签署流程批量撤销失败原因，错误信息与流程Id一一对应，成功为"", 失败则对应失败原因注: `如果全部撤销成功, 此数组为空数组` */
  FailMessages?: string[];
  /** 批量撤销任务编号，为32位字符串，可用于[查询批量撤销合同结果](https://qian.tencent.com/developers/partnerApis/operateFlows/DescribeCancelFlowsTask) 或关联[批量撤销任务结果回调](https://qian.tencent.com/developers/partner/callback_types_contracts_sign#%E4%B9%9D-%E6%89%B9%E9%87%8F%E6%92%A4%E9%94%80%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83) */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCancelFlowRequest {
  /** 要撤销的合同流程ID */
  FlowId: string;
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent?: Agent;
  /** 撤回原因，长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  CancelMessage?: string;
  /** 撤销理由自定义格式, 会展示在合同预览的界面中, 可以选择下面的组合方式：**0** : 默认格式, 合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同**1** : 合同封面页面会展示为: 发起方以**CancelMessage**的理由撤销当前合同**2** : 保留企业名称, 合同封面页面会展示为: 发起方-企业名称以**CancelMessage**的理由撤销当前合同**3** : 保留企业名称+经办人名字, 合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同注: `CancelMessage为撤销当前合同的理由`![image](https://dyn.ess.tencent.cn/guide/capi/channel_ChannelCancelFlow.png) */
  CancelMessageFormat?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCancelFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCancelMultiFlowSignQRCodeRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 需要取消的签署码ID，为32位字符串。由[创建一码多签签署码](https://qian.tencent.com/developers/partnerApis/templates/ChannelCreateMultiFlowSignQRCode)返回 */
  QrCodeId: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCancelMultiFlowSignQRCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCancelUserAutoSignEnableUrlRequest {
  /** 渠道应用相关信息 */
  Agent: Agent;
  /** 操作人信息 */
  Operator: UserInfo;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 指定撤销链接的用户信息，包含姓名、证件类型、证件号码。 */
  UserInfo: UserThreeFactor;
}

declare interface ChannelCancelUserAutoSignEnableUrlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateBatchCancelFlowUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经过实名认证 */
  Agent: Agent;
  /** 要撤销的合同流程ID列表，最多100个，超过100不处理 */
  FlowIds: string[];
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCreateBatchCancelFlowUrlResponse {
  /** 批量撤销合同的URL链接, 需要在手机端打开, 有效期24小时注：生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  BatchCancelFlowUrl?: string;
  /** 与入参的FlowIds数组一致, 成功生成到撤销链接中,则为"", 不能撤销合同则为失败原因 */
  FailMessages?: string[];
  /** 签署撤销链接的过期时间(格式为:年-月-日 时:分:秒), 默认是生成链接的24小时后失效 */
  UrlExpireOn?: string;
  /** 批量撤销任务编号，为32位字符串，可用于[查询批量撤销合同结果](https://qian.tencent.com/developers/partnerApis/operateFlows/DescribeCancelFlowsTask) 或关联[批量撤销任务结果回调](https://qian.tencent.com/developers/partner/callback_types_contracts_sign#%E4%B9%9D-%E6%89%B9%E9%87%8F%E6%92%A4%E9%94%80%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83) */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateBatchQuickSignUrlRequest {
  /** 批量签署的流程签署人，其中姓名(ApproverName)、参与人类型(ApproverType)必传，手机号(ApproverMobile)和证件信息(ApproverIdCardType、ApproverIdCardNumber)可任选一种或全部传入。若为个人参与方：ApproverType:"PERSON"若为企业参与方：ApproverType:"ORGANIZATION"。同时若签署方为saas企业员工， OrganizationName 参数需传入参与方企业名称。若签署方为渠道子客企业员工，除了 OrganizationName 还需要传 OpenId、OrganizationOpenId。（如果OrganizationOpenId对应子客企业已经认证激活，则可以省略OrganizationName参数）注:`1. 暂不支持签署人拖动签署控件功能，以及签批控件。``2. 当需要通过短信验证码签署时，手机号ApproverMobile需要与发起合同时填写的用户手机号一致。` */
  FlowApproverInfo: FlowApproverInfo;
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent?: Agent;
  /** 批量签署的合同流程ID数组。注: `在调用此接口时，请确保合同流程均为本企业发起，且合同数量不超过100个。` */
  FlowIds?: string[];
  /** 合同组编号注：`该参数和合同流程ID数组必须二选一` */
  FlowGroupId?: string;
  /** 签署完之后的H5页面的跳转链接，此链接及支持http://和https://，最大长度1000个字符。(建议https协议) */
  JumpUrl?: string;
  /** 指定批量签署合同的签名类型，可传递以下值：**0**：手写签名(默认)**1**：OCR楷体**2**：姓名印章**3**：图片印章**4**：系统签名注：默认情况下，签名类型为手写签名您可以传递多种值，表示可用多种签名类型。该参数会覆盖您合同中的签名类型，若您在发起合同时限定了签名类型(赋值签名类型给ComponentTypeLimit)，请将这些签名类型赋予此参数若签署方为企业员工，此参数无效，签名方式将以合同中为准。 */
  SignatureTypes?: number[];
  /** 指定批量签署合同的认证校验方式，可传递以下值：**1**：人脸认证(默认)，需进行人脸识别成功后才能签署合同**2**：密码认证(默认)，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署**3**：运营商三要素，需到运营商处比对手机号实名信息(名字、手机号、证件号)校验一致才能成功进行合同签署。注：默认情况下，认证校验方式为人脸和密码认证您可以传递多种值，表示可用多种认证校验方式。 */
  ApproverSignTypes?: number[];
  /** 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。注：`不指定该值时，默认为签署方自行选择。` */
  SignTypeSelector?: number;
  /** 批量签署合同相关信息，指定合同和签署方的信息，用于补充动态签署人。	注: `若签署方为企业员工，暂不支持通过H5端进行动态签署人的补充` */
  FlowBatchUrlInfo?: FlowBatchUrlInfo;
  /** 只有在生成H5签署链接的情形下（ 如调用获取H5签署链接、获取H5批量签署链接等接口），该配置才会生效。 您可以指定H5签署视频核身的意图配置，选择问答模式或点头模式的语音文本。 注意： 1. 视频认证为白名单功能，使用前请联系对接的客户经理沟通。 2. 使用视频认证时，生成H5签署链接的时候必须将签署认证方式指定为人脸（即ApproverSignTypes设置成人脸签署）。 3. 签署完成后，可以通过查询签署认证人脸视频获取到当时的视频。 */
  Intention?: Intention;
  /** 缓存签署人信息。在H5签署链接动态领取场景，首次填写后，选择缓存签署人信息，在下次签署人点击领取链接时，会自动将个人信息（姓名、身份证号、手机号）填入，否则需要每次手动填写。注: `若参与方为企业员工时，暂不支持对参与方信息进行缓存` */
  CacheApproverInfo?: boolean;
  /** 是否允许此链接中签署方批量拒签。 false (默认): 不允许批量拒签 true : 允许批量拒签。注：`合同组暂不支持批量拒签功能。` */
  CanBatchReject?: boolean;
  /** 预设的动态签署方的补充信息，仅匹配对应信息的签署方才能领取合同。暂时仅对个人参与方生效。 */
  PresetApproverInfo?: PresetApproverInfo;
}

declare interface ChannelCreateBatchQuickSignUrlResponse {
  /** 签署人签署链接信息 */
  FlowApproverUrlInfo?: FlowApproverUrlInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateBatchSignUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经过实名认证 */
  Agent: Agent;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。注：请确保和合同中填入的一致。在动态签署人补充链接场景中，可以通过传入这个值，对补充的个人参与方信息进行限制。仅匹配传入姓名的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方。 */
  Name?: string;
  /** 手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。请确认手机号所有方为此业务通知方。注：请确保和合同中填入的一致, 若无法保持一致，请确保在发起和生成批量签署链接时传入相同的参与方证件信息。在生成动态签署人补充链接场景中，可以通过传入此值，对补充的个人参与方信息进行限制。仅匹配传入手机号的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方。 */
  Mobile?: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 证件类型，支持以下类型**ID_CARD** : 中国大陆居民身份证 (默认值)**HONGKONG_AND_MACAO** : 中国港澳居民来往内地通行证**HONGKONG_MACAO_AND_TAIWAN** : 中国港澳台居民居住证(格式同中国大陆居民身份证)注：1. `请确保和合同中填入的一致`。2. `在生成动态签署人补充链接场景中，可以通过传入此值，对补充的个人参与方信息进行限制。仅匹配传入证件类型的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方，且需要和证件号参数一同传递，不能单独进行限制。` */
  IdCardType?: string;
  /** 证件号码，应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。注：1. `请确保和合同中填入的一致`。2. `在生成动态签署人补充链接场景中，可以通过传入此值，对补充的个人参与方信息进行限制。仅匹配传入证件号的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方。` */
  IdCardNumber?: string;
  /** 通知用户方式：**NONE** : 不通知（默认）**SMS** : 短信通知（发送短信通知到Mobile参数所传的手机号） */
  NotifyType?: string;
  /** 批量签署的合同流程ID数组。此参数必传。注: `在调用此接口时，请确保合同流程均为本企业发起，且合同数量不超过100个。` */
  FlowIds?: string[];
  /** SaaS平台企业员工签署方的企业名称。目标签署人如果为saas应用企业员工身份，此参数必填。注：请确认该名称与企业营业执照中注册的名称一致。如果名称中包含英文括号()，请使用中文括号（）代替。请确保此企业已完成腾讯电子签企业认证。**若为子客企业员工，请使用OpenId，OrganizationOpenId参数，此参数留空即可** */
  OrganizationName?: string;
  /** 指定批量签署合同的签名类型，可传递以下值：**0**：手写签名**1**：OCR楷体**2**：姓名印章**3**：图片印章**4**：系统签名**5**：长效手写签名（包含手写签名）注：不传值的情况则计算所有合同中个人签署区的签名类型，规则如下：1.如果所有合同中所有的个人签署区方式包含多种则是手写2.如果所有合同中所有个人签名区签名类型仅为一种则就是那一种签名方式（例如合同1有多个签署区都是指定OCR楷体，合同2中也是多个签署区都是指定OCR楷体...则使用OCR楷体）该参数会覆盖您合同中的签名类型，若您在发起合同时限定了签名类型(赋值签名类型给ComponentTypeLimit)，请将这些签名类型赋予此参数若签署方为企业员工，此参数无效，签名方式将以合同中为准。 */
  SignatureTypes?: number[];
  /** 是否直接跳转至合同内容页面进行签署**false**: 会跳转至批量合同流程的列表, 点击需要批量签署合同后进入合同内容页面进行签署(默认)**true**: 跳过合同流程列表, 直接进入合同内容页面进行签署 */
  JumpToDetail?: boolean;
  /** 批量签署合同相关信息，指定合同和签署方的信息，用于补充动态签署人。 */
  FlowBatchUrlInfo?: FlowBatchUrlInfo;
  /** 第三方平台子客企业员工的标识OpenId，批签合同经办人为子客员工的情况下为必填。注：传入的OpenId对应员工在此子客企业下必须已经实名传递了此参数可以无需传递Name，Mobile，IdCardNumber，IdCardType参数。系统会根据员工OpenId自动拉取实名信息。 */
  OpenId?: string;
  /** 第三方平台子客企业的企业的标识, 即OrganizationOpenId，批签合同经办人为子客企业员工是为必填。 */
  OrganizationOpenId?: string;
  /** 签署完成后是否自动回跳false：否, 签署完成不会自动跳转回来(默认)true：是, 签署完成会自动跳转回来注: 1. 该参数只针对APP类型（电子签小程序跳转贵方小程序）场景 的签署链接有效2. 手机应用APP 或 微信小程序需要监控界面的返回走后序逻辑, 微信小程序的文档可以参考[这个](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object)3. 电子签小程序跳转贵方APP，不支持自动跳转，必需用户手动点击完成按钮（微信的限制） */
  AutoJumpBack?: boolean;
  /** 仅公众号 H5 跳转电子签小程序时，如需签署完成的“返回应用”功能，在获取签署链接接口的 UrlUseEnv 参数需设置为 **WeChatOfficialAccounts**，小程序签署成功的结果页面中才会出现“返回应用”按钮。在用户点击“返回应用”按钮之后，会返回到公众号 H5。 参考 [公众号 H5 跳转电子签小程序](https://qian.tencent.com/developers/company/openwxminiprogram/#23-%E5%85%AC%E4%BC%97%E5%8F%B7-h5-%E4%B8%AD%E8%B7%B3%E8%BD%AC)。 */
  UrlUseEnv?: string;
  /** 是否允许此链接中签署方批量拒签。 false (默认): 不允许批量拒签 true : 允许批量拒签。注：`1. 合同组暂不支持批量拒签功能。2. 如果是链接直接跳转至详情页（JumpToDetail参数为true），也不支持批量拒签功能` */
  CanBatchReject?: boolean;
  /** 是否允许此链接中签署方批量确认已读文件。 false (默认): 不允许批量确认已读文件。 true : 允许批量确认已读文件。注：`1. 此功能为白名单功能，使用前请联系对应客户经理进行开通。2. 使用此功能时，FlowIds参数必传。3. 对于企业签署方，如果对印章/签名控件有限制要求，需要保证所有印章/签名控件的限制要求(印章id或印章/签名类型限制)一致，否则无法使用此功能。` */
  CanSkipReadFlow?: boolean;
}

declare interface ChannelCreateBatchSignUrlResponse {
  /** 批量签署链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。注: 1. 非小程序和APP集成使用2. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  SignUrl?: string;
  /** 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。 */
  ExpiredTime?: number;
  /** 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径注: 1. 小程序和APP集成使用2. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  MiniAppPath?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateBoundFlowsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证, 合同会领取给对应的Agent.ProxyOperator.OpenId指定的员工来处理 */
  Agent: Agent;
  /** 需要领取的合同流程的ID列表 */
  FlowIds?: string[];
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelCreateBoundFlowsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateConvertTaskApiRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 需要进行转换的资源文件类型支持的文件类型如下：docdocxxlsxlsxjpgjpegpngbmphtmltxt */
  ResourceType: string;
  /** 需要进行转换操作的文件资源名称，带资源后缀名。注: `资源名称长度限制为256个字符` */
  ResourceName: string;
  /** 需要进行转换操作的文件资源Id，通过UploadFiles接口获取文件资源Id。注: `目前，此接口仅支持单个文件进行转换。` */
  ResourceId: string;
  /** 调用方用户信息，不用传 */
  Operator?: UserInfo;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface ChannelCreateConvertTaskApiResponse {
  /** 接口返回的文件转换任务Id，可以调用接口查询转换任务状态获取转换任务的状态和转换后的文件资源Id。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateDynamicFlowApproverRequest {
  /** 动态合同信息 */
  FillDynamicFlowList: DynamicFlowInfo[];
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 此接口下面信息必填。 渠道应用标识: Agent.AppId 第三方平台子客企业标识: Agent.ProxyOrganizationOpenId 第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId 第三方平台子客企业和员工必须已经经过实名认证 */
  Agent?: Agent;
}

declare interface ChannelCreateDynamicFlowApproverResponse {
  /** 动态合同补充结果列表 */
  DynamicFlowResultList?: DynamicFlowResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateEmbedWebUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 要生成WEB嵌入界面的类型, 可以选择的值如下: CREATE_SEAL: 生成创建印章的嵌入页面CREATE_TEMPLATE：生成创建模板的嵌入页面MODIFY_TEMPLATE：生成修改模板的嵌入页面PREVIEW_TEMPLATE：生成预览模板的嵌入页面PREVIEW_FLOW：生成预览合同文档的嵌入页面（H5链接，支持移动端的浏览器中打开）PREVIEW_FLOW_DETAIL：生成预览合同详情的嵌入页面（仅支持PC的浏览器中打开）PREVIEW_SEAL_LIST：生成预览印章列表的嵌入页面PREVIEW_SEAL_DETAIL：生成预览印章详情的嵌入页面EXTEND_SERVICE：生成扩展服务的嵌入页面 */
  EmbedType: string;
  /** WEB嵌入的业务资源ID当EmbedType取值为MODIFY_TEMPLATE，PREVIEW_TEMPLATE必填，取值为模板id为CREATE_TEMPLATE，非必填，取值为资源id。*资源Id获取可使用接口[上传文件](https://qian.tencent.com/developers/partnerApis/files/UploadFiles)*为PREVIEW_FLOW，PREVIEW_FLOW_DETAIL必填，取值为合同id为PREVIEW_SEAL_DETAIL必填，取值为印章id注意： 1. CREATE_TEMPLATE中的BusinessId仅支持PDF文件类型， 如果您的文件不是PDF， 请使用接口[创建文件转换任务](https://qian.tencent.com/developers/partnerApis/files/ChannelCreateConvertTaskApi) 和[查询转换任务状态](https://qian.tencent.com/developers/partnerApis/files/ChannelGetTaskResultApi) 来进行转换成PDF资源。 */
  BusinessId?: string;
  /** 是否隐藏控件，只有预览模板时生效 */
  HiddenComponents?: boolean;
  /** 渠道操作者信息 */
  Operator?: UserInfo;
  /** 用户自定义参数目前仅支持EmbedType=CREATE_TEMPLATE时传入指定后，创建，编辑，删除模板时，回调都会携带该userData支持的格式：json字符串的BASE64编码字符串示例： json字符串：{"ComeFrom":"xxx"}，BASE64编码：eyJDb21lRnJvbSI6Inh4eCJ9 eyJDb21lRnJvbSI6Inh4eCJ9，为符合要求的userData数据格式 */
  UserData?: string;
  /** 个性化参数，用于控制页面展示内容 */
  Option?: EmbedUrlOption;
}

declare interface ChannelCreateEmbedWebUrlResponse {
  /** 嵌入的web链接，5分钟有效 */
  WebUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowApproversRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 补充企业签署人信息。- 如果发起方指定的补充签署人是企业签署人，则需要提供企业名称或者企业OpenId；- 如果不指定，则使用姓名和手机号进行补充。 */
  Approvers: FillApproverInfo[];
  /** 合同流程ID，为32位字符串。 - 建议开发者妥善保存此流程ID，以便于顺利进行后续操作。- 可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。- 不建议继续使用，请使用补充签署人结构体中的FlowId指定合同 */
  FlowId?: string;
  /** 签署人信息补充方式**1**: 表示往未指定签署人的节点，添加一个明确的签署人，支持企业或个人签署方。 */
  FillApproverType?: number;
  /** 操作人信息 */
  Operator?: UserInfo;
  /** 合同流程组的组ID, 在合同流程组场景下，生成合同流程组的签署链接时需要赋值 */
  FlowGroupId?: string;
}

declare interface ChannelCreateFlowApproversResponse {
  /** 批量补充签署人时，补充失败的报错说明 注:`目前仅补充动态签署人时会返回补充失败的原因` */
  FillError?: FillError[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowByFilesRequest {
  /** 合同的发起企业和发起人信息，点击查看合同发起企业和人展示的位置此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId（合同的发起企业）第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId （合同的发起人） */
  Agent?: Agent;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowName?: string;
  /** 合同流程描述信息(可自定义此描述)，最大长度1000个字符。 */
  FlowDescription?: string;
  /** 合同流程的参与方列表, 最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，不同类型的签署方传参方式可以参考文档 [签署方入参指引](https://qian.tencent.com/developers/partner/flow_approver)。如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序, 请确保列表中参与人的顺序符合实际签署顺序。 */
  FlowApprovers?: FlowApproverInfo[];
  /** 本合同流程需包含的PDF文件资源编号列表，通过UploadFiles接口获取PDF文件资源编号。注: `目前，此接口仅支持单个文件发起。` */
  FileIds?: string[];
  /** 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体单行文本控件多行文本控件勾选框控件数字控件图片控件数据表格等填写控件![image](https://qcloudimg.tencent-cloud.cn/raw/e004195ee4cb98a7f9bc12eb4a0a0b77.png) */
  Components?: Component[];
  /** 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。 */
  Deadline?: number;
  /** 该字段已废弃，请使用【应用号配置】中的回调地址 */
  CallbackUrl?: string;
  /** 合同流程的签署顺序类型： **false**：(默认)有序签署, 本合同多个参与人需要依次签署 **true**：无序签署, 本合同多个参与人没有先后签署限制**注**: `有序签署时以传入FlowApprovers数组的顺序作为签署顺序` */
  Unordered?: boolean;
  /** 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为255个字符，仅限中文、字母、数字和下划线组成。 */
  FlowType?: string;
  /** 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：{合同名称} {发起方企业} {发起方姓名} {签署方N企业}{签署方N姓名}其中，N表示签署方的编号，从1开始，不能超过签署人的数量。例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子合同名称：租房合同 发起方：腾讯公司(张三) 签署方：李四 */
  CustomShowMap?: string;
  /** 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 1000长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  CustomerData?: string;
  /** 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下： **false**：（默认）不需要审批，直接签署。 **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。企业可以通过ChannelCreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同` */
  NeedSignReview?: boolean;
  /** 签署人校验方式VerifyCheck: 人脸识别（默认）MobileCheck：手机号验证，用户手机号和参与方手机号（ApproverMobile）相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。 */
  ApproverVerifyType?: string;
  /** 签署方签署控件（印章/签名等）的生成方式： **0**：在合同流程发起时，由发起人指定签署方的签署控件的位置和数量。 **1**：签署方在签署时自行添加签署控件，可以拖动位置和控制数量。**注**: 1.发起后添加控件功能不支持添加签批控件 2.签署方在签署时自行添加签署控件仅支持电子签小程序或web控制台签署，不支持H5 */
  SignBeanTag?: number;
  /** 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。注1. 抄送人名单中可以包括自然人以及本企业的员工（本企业员工必须已经完成认证并加入企业）。2. 请确保抄送人列表中的成员不与任何签署人重复。 */
  CcInfos?: CcInfo[];
  /** 可以设置以下时间节点来给抄送人发送短信通知来查看合同内容： **0**：合同发起时通知（默认值） **1**：签署完成后通知 */
  CcNotifyType?: number;
  /** 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传： **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签） **OTHER** : 通用场景注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。` */
  AutoSignScene?: string;
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
  /** 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下： 0 :合同（默认值） 1 :文件 2 :协议 3 :文书效果如下:![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png) */
  FlowDisplayType?: number;
  /** 是否为预览模式，取值如下： **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。 **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。 */
  NeedPreview?: boolean;
  /** 预览模式下产生的预览链接类型 **0** :(默认) 文件流 ,点开后下载预览的合同PDF文件 **1** :H5链接 ,点开后在浏览器中展示合同的样子注: `此参数在NeedPreview 为true时有效` */
  PreviewType?: number;
  /** 是否开启动态合同（动态签署人2.0） **false** :(默认) 不开启动态合同（动态签署人2.0） **true** :开启动态合同（动态签署人2.0）,发起后可继续追加合同签署人 */
  OpenDynamicFlow?: boolean;
  /** 是否开启动态合同（动态签署人2.0） **false** :(默认) 不开启动态合同（动态签署人2.0） **true** :开启动态合同（动态签署人2.0）,发起后可继续追加合同签署人 */
  OpenDynamicSignFlow?: boolean;
}

declare interface ChannelCreateFlowByFilesResponse {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。[点击查看FlowId在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/05af26573d5106763b4cfbb9f7c64b41.png) */
  FlowId?: string;
  /** 签署方信息，如角色ID、角色名称等 */
  Approvers?: ApproverItem[];
  /** 预览链接，有效期5分钟注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL */
  PreviewUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowGroupByFilesRequest {
  /** 合同组中每个合同签署流程的信息，合同组中最少包含2个合同，不能超过50个合同。 */
  FlowFileInfos: FlowFileInfo[];
  /** 合同组的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowGroupName: string;
  /** 合同的发起企业和发起人信息，点击查看合同发起企业和人展示的位置此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId（合同的发起企业）第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId （合同的发起人）合同的发起企业和发起人必需已经完成实名，并加入企业 */
  Agent?: Agent;
  /** 合同组中签署人校验和认证的方式：**VerifyCheck**：人脸识别（默认）**MobileCheck**：手机号验证注意：`1. MobileCheck 方式，未实名的个人/自然人签署方无需进行人脸识别实名认证即可查看合同（但签署合同时仍然需要人脸实名），企业签署方需经过人脸认证。``2. 合同组的校验和认证的方式会优先使用，会覆盖合同组中单个合同和合同签署方认证方式的限制配置。` */
  ApproverVerifyType?: string;
  /** 合同组的签署配置项信息，例如在合同组签署过程中，是否需要对每个子合同进行独立的意愿确认。 */
  FlowGroupOptions?: FlowGroupOptions;
  /** 操作者的信息，此参数不用传 */
  Operator?: UserInfo;
}

declare interface ChannelCreateFlowGroupByFilesResponse {
  /** 合同组ID，为32位字符串。建议开发者妥善保存此合同组ID，以便于顺利进行后续操作。 */
  FlowGroupId?: string;
  /** 合同组中每个合同流程ID，每个ID均为32位字符串。注:`此数组的顺序和入参中的FlowGroupInfos顺序一致` */
  FlowIds?: string[];
  /** 合同组签署方信息。 */
  Approvers?: FlowGroupApprovers[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowGroupByTemplatesRequest {
  /** 合同的发起企业和发起人信息，点击查看合同发起企业和人展示的位置此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId（合同的发起企业）第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId （合同的发起人）合同的发起企业和发起人必需已经完成实名，并加入企业 */
  Agent: Agent;
  /** 合同组中每个合同签署流程的信息，合同组中最少包含2个合同，不能超过50个合同。 */
  FlowInfos: FlowInfo[];
  /** 合同组的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowGroupName: string;
}

declare interface ChannelCreateFlowGroupByTemplatesResponse {
  /** 合同组ID，为32位字符串。建议开发者妥善保存此合同组ID，以便于顺利进行后续操作。 */
  FlowGroupId?: string;
  /** 合同组中每个合同流程ID，每个ID均为32位字符串。注:`此数组的顺序和入参中的FlowInfos顺序一致` */
  FlowIds?: string[];
  /** 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情； */
  TaskInfos?: TaskInfo[];
  /** 合同组签署方信息 */
  Approvers?: FlowGroupApprovers[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowRemindsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 需执行催办的合同流程ID数组，最多支持100个。 */
  FlowIds: string[];
}

declare interface ChannelCreateFlowRemindsResponse {
  /** 合同催办结果的详细信息列表。 */
  RemindFlowRecords?: RemindFlowRecords[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowSignReviewRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 合同流程ID，为32位字符串。 */
  FlowId: string;
  /** 企业内部审核结果PASS: 审核通过（流程可以继续签署或者发起）REJECT: 审核拒绝（流程状态不变，可以继续调用审核接口通过审核）SIGN_REJECT:拒签(流程终止，流程状态变为拒签状态) */
  ReviewType: string;
  /** 审核结果原因字符串长度不超过200当ReviewType 是拒绝（REJECT） 时此字段必填。当ReviewType 是拒绝（SIGN_REJECT） 时此字段必填。 */
  ReviewMessage?: string;
  /** 审核节点的签署人标志，用于指定当前审核的签署方。注意：以下情况必须传递RecipientId **发起签署流程时，指定签署人需要审批（即签署人需要审批ApproverNeedSignReview为true），则必须指定RecipientId****如果签署审核节点是个人， 此参数必填**。 */
  RecipientId?: string;
  /** 流程审核操作类型，取值如下：**SignReview**：（默认）签署审核**CreateReview**：发起审核注意：`该字段不传或者为空，则默认为SignReview签署审核，走签署审核流程` */
  OperateType?: string;
}

declare interface ChannelCreateFlowSignReviewResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateFlowSignUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 流程签署人列表，其中结构体的ApproverType必传。若为个人签署方或saas企业签署方，则Name，Mobile必传。OrganizationName 传对应企业名称。若为子客企业签署方则需传OpenId、OrganizationOpenId、OrganizationName， 其他可不传。（如果对应OrganizationOpenId 子客已经认证激活了，则可以省去OrganizationName）此结构体和发起接口参与方结构体复用，除了上述参数外，可传递的参数有：1. RecipientId: 发起合同会返回，可以直接用于指定需要生成链接的签署方。2. ApproverSignTypes: 指定签署方签署时候的认证方式，仅此链接生效。3. SignTypeSelector: 可以指定签署方签署合同的认证校验方式的选择模式。4. Intention: 指定H5签署视频核身的意图配置，仅视频签署需要使用。注:`1. 签署人只能有手写签名、时间类型、印章类型、签批类型的签署控件和内容填写控件，其他类型的签署控件暂时未支持。``2. 生成发起方预览链接时，该字段（FlowApproverInfos）传空或者不传` */
  FlowApproverInfos?: FlowApproverInfo[];
  /** 用户信息，暂未开放 */
  Operator?: UserInfo;
  /** 机构信息，暂未开放 */
  Organization?: OrganizationInfo;
  /** 签署完之后的H5页面的跳转链接，最大长度1000个字符。链接类型请参考 跳转电子签H5 */
  JumpUrl?: string;
  /** 链接类型，支持指定以下类型0 : 签署链接 (默认值)1 : 预览链接注:`1. 当指定链接类型为1时，链接为预览链接，打开链接无法签署仅支持预览以及查看当前合同状态。``2. 如需生成发起方预览链接，则签署方信息传空，即FlowApproverInfos传空或者不传。` */
  UrlType?: number;
}

declare interface ChannelCreateFlowSignUrlResponse {
  /** 签署人签署链接信息 */
  FlowApproverUrlInfos?: FlowApproverUrlInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateMultiFlowSignQRCodeRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 合同模板ID，为32位字符串。 */
  TemplateId: string;
  /** 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 该名称还将用于合同签署完成后的下载文件名。 */
  FlowName: string;
  /** 通过此二维码可发起的流程最大限额，如未明确指定，默认为5份。 一旦发起流程数超越该限制，该二维码将自动失效。 */
  MaxFlowNum?: number;
  /** 合同流程的签署有效期限，若未设定签署截止日期，则默认为自合同流程创建起的7天内截止。 若在签署截止日期前未完成签署，合同状态将变更为已过期，从而导致合同无效。 最长设定期限不得超过30天。 */
  FlowEffectiveDay?: number;
  /** 二维码的有效期限，默认为7天，最高设定不得超过90天。 一旦超过二维码的有效期限，该二维码将自动失效。 */
  QrEffectiveDay?: number;
  /** 指定签署人信息。 在指定签署人后，仅允许特定签署人通过扫描二维码进行签署。 */
  Restrictions?: ApproverRestriction[];
  /** 指定签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式。 */
  ApproverComponentLimitTypes?: ApproverComponentLimitType[];
  /** 已废弃，回调配置统一使用企业应用管理-应用集成-第三方应用中的配置 通过一码多扫二维码发起的合同，回调消息可参考文档 https://qian.tencent.com/developers/partner/callback_types_contracts_sign 用户通过签署二维码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档 https://qian.tencent.com/developers/partner/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83 */
  CallbackUrl?: string;
  /** 限制二维码用户条件（已弃用） */
  ApproverRestrictions?: ApproverRestriction;
  /** 暂未开放 */
  Operator?: UserInfo;
  /** 禁止个人用户重复签署，默认不禁止，即同一用户可多次扫码签署多份合同。若要求同一用户仅能扫码签署一份合同，请传入true。 */
  ForbidPersonalMultipleSign?: boolean;
  /** 合同流程名称是否应包含扫码签署人的信息，且遵循特定格式（flowname-姓名-手机号后四位）。 例如，通过参数FlowName设定的扫码发起合同名称为“员工入职合同”，当扫码人张三（手机号18800009527）扫码签署时，合同名称将自动生成为“员工入职合同-张三-9527”。 */
  FlowNameAppendScannerInfo?: boolean;
}

declare interface ChannelCreateMultiFlowSignQRCodeResponse {
  /** 一码多签签署码的基本信息，用户可扫描该二维码进行签署操作。 */
  QrCode?: SignQrCode;
  /** 一码多签签署码链接信息，适用于客户系统整合二维码功能。通过链接，用户可直接访问电子签名小程序并签署合同。 */
  SignUrls?: SignUrl;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateOrganizationBatchSignUrlRequest {
  /** 关于渠道应用的相关信息，包括子客企业及应用编、号等详细内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 请指定需执行批量签署的流程ID，数量范围为1-100。 您可登录腾讯电子签控制台，浏览 "合同"->"合同中心" 以查阅某一合同的FlowId（在页面中显示为合同ID）。 用户将利用链接对这些合同实施批量操作。 */
  FlowIds?: string[];
  /** 第三方应用平台的用户openid。 您可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查阅某位员工的OpenId。 OpenId必须是传入合同（FlowId）中的签署人。1. 若OpenId为空，Name和Mobile 必须提供。2. 若OpenId 与 Name，Mobile均存在，将优先采用OpenId对应的员工。 */
  OpenId?: string;
  /** 签署方经办人的姓名。经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。注：`请确保和合同中填入的一致` */
  Name?: string;
  /** 员工手机号，必须与姓名一起使用。 如果OpenId为空，则此字段不能为空。同时，姓名和手机号码必须与传入合同（FlowId）中的签署人信息一致。 */
  Mobile?: string;
  /** 合同组Id，传入此参数则可以不传FlowIds */
  FlowGroupId?: string;
}

declare interface ChannelCreateOrganizationBatchSignUrlResponse {
  /** 批量签署入口链接，用户可使用这个链接跳转到控制台页面对合同进行签署操作。 */
  SignUrl?: string;
  /** 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateOrganizationModifyQrCodeRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
}

declare interface ChannelCreateOrganizationModifyQrCodeResponse {
  /** 二维码下载链接 */
  QrCodeUrl?: string;
  /** 二维码失效时间 UNIX 时间戳 精确到秒 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreatePrepareFlowGroupRequest {
  /** 合同组中每个合同签署流程的信息，合同组中最少包含2个合同，不能超过50个合同。 */
  BaseFlowInfos: BaseFlowInfo[];
  /** 合同组的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 */
  FlowGroupName: string;
  /** 资源类型，取值有： **1**：模板 **2**：文件 */
  ResourceType: number;
  /** 合同的发起企业和发起人信息，点击查看合同发起企业和人展示的位置此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId（合同的发起企业）第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId （合同的发起人）合同的发起企业和发起人必需已经完成实名，并加入企业 */
  Agent?: Agent;
}

declare interface ChannelCreatePrepareFlowGroupResponse {
  /** 合同组ID，为32位字符串。建议开发者妥善保存此合同组ID，以便于顺利进行后续操作。 */
  FlowGroupId?: string;
  /** 嵌入式发起链接 */
  PrepareUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreatePrepareFlowRequest {
  /** 资源类型，取值有： **1**：模板 **2**：文件（默认值） */
  ResourceType: number;
  /** 要创建的合同信息 */
  FlowInfo: BaseFlowInfo;
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent?: Agent;
  /** 资源id，与ResourceType相对应，取值范围：文件Id（通过UploadFiles获取文件资源Id）模板Id（通过控制台创建模板后获取模板Id）注意：需要同时设置 ResourceType 参数指定资源类型 */
  ResourceId?: string;
  /** 合同流程配置信息，用于配置发起合同时定制化如是否允许修改，某些按钮的隐藏等逻辑 */
  FlowOption?: CreateFlowOption;
  /** 已废弃，请用FlowInfo.Approvers */
  FlowApproverList?: CommonFlowApprover[];
  /** 合同Id：用于通过一个已发起的合同快速生成一个发起流程web链接注: `该参数必须是一个待发起审核的合同id，并且还未审核通过` */
  FlowId?: string;
  /** 该参数不可用，请通过获取 web 可嵌入接口获取合同流程预览 URL */
  NeedPreview?: boolean;
  /** 企业机构信息，不用传 */
  Organization?: OrganizationInfo;
  /** 操作人（用户）信息，不用传 */
  Operator?: UserInfo;
  /** 此参数已经废弃，请使用 CreateFlowOption 里面的 SignComponentConfig签署控件的配置信息，用在嵌入式发起的页面配置，包括- 签署控件 是否默认展示日期. */
  SignComponentConfig?: SignComponentConfig;
}

declare interface ChannelCreatePrepareFlowResponse {
  /** 发起的合同嵌入链接， 可以直接点击进入进行合同发起， 有效期为5分钟 */
  PrepareFlowUrl?: string;
  /** 合同发起后预览链接， 注意此时合同并未发起，仅只是展示效果， 有效期为5分钟 */
  PreviewFlowUrl?: string;
  /** 发起的合同临时Id， 只有当点击进入链接，成功发起合同后， 此Id才有效 */
  FlowId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreatePreparedPersonalEsignRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 个人用户姓名 */
  UserName: string;
  /** 证件号码, 应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
  /** 电子印章名字，1-50个中文字符注:`同一企业下电子印章名字不能相同` */
  SealName: string;
  /** 电子印章图片base64编码，大小不超过10M（原始图片不超过5M），只支持PNG或JPG图片格式。 */
  SealImage: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)OTHER_CARD_TYPE : 其他注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。` */
  IdCardType?: string;
  /** 是否开启印章图片压缩处理，默认不开启，如需开启请设置为 true。当印章超过 2M 时建议开启，开启后图片的 hash 将发生变化。 */
  SealImageCompress?: boolean;
  /** 手机号码；当需要开通自动签时，该参数必传 */
  Mobile?: string;
  /** 该字段已不再使用 */
  EnableAutoSign?: boolean;
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次 1-不绑定，发起合同时将按标准合同套餐进行扣减 */
  LicenseType?: number;
  /** **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey?: string;
}

declare interface ChannelCreatePreparedPersonalEsignResponse {
  /** 电子印章ID，为32位字符串。建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。 */
  SealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateReleaseFlowRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 待解除的签署流程编号(即原签署流程的编号)。[点击查看流程编号在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/05af26573d5106763b4cfbb9f7c64b41.png) */
  NeedRelievedFlowId: string;
  /** 解除协议内容, 包括解除理由等信息。 */
  ReliveInfo: RelieveInfo;
  /** 替换解除协议的签署人， 如不指定新的签署人，将继续使用原流程的签署人作为本解除协议的参与方。 如需更换原合同中的企业端签署人，可通过指定该签署人在原合同列表中的ApproverNumber编号来更换此企业端签署人。(可通过接口DescribeFlowDetailInfo查询签署人的ApproverNumber编号，默认从0开始，顺序递增)注：1. 支持更换企业的签署人，不支持更换个人类型的签署人。2. 己方企业支持自动签署，他方企业不支持自动签署。3. 仅将需要替换的签署人添加至此列表，无需替换的签署人无需添加进来。 */
  ReleasedApprovers?: ReleasedApprover[];
  /** 签署完回调url，最大长度1000个字符 */
  CallbackUrl?: string;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
  /** 暂未开放 */
  Operator?: UserInfo;
  /** 合同流程的签署截止时间，格式为Unix标准时间戳(秒)，如果未设置签署截止时间，则默认为合同流程创建后的7天时截止。如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。 */
  Deadline?: number;
  /** 调用方自定义的个性化字段，该字段的值可以是字符串JSON或其他字符串形式，客户可以根据自身需求自定义数据格式并在需要时进行解析。该字段的信息将以Base64编码的形式传输，支持的最大数据大小为20480长度。在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。 */
  UserData?: string;
}

declare interface ChannelCreateReleaseFlowResponse {
  /** 解除协议流程编号 */
  FlowId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateRoleRequest {
  /** 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。 */
  Name: string;
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 角色描述，最大长度为50个字符 */
  Description?: string;
  /** 权限树，权限树内容 PermissionGroups 可参考接口 ChannelDescribeRoles 的输出 */
  PermissionGroups?: PermissionGroup[];
}

declare interface ChannelCreateRoleResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateSealPolicyRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证。 */
  Agent: Agent;
  /** 电子印章ID，为32位字符串。建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。 */
  SealId: string;
  /** 员工在腾讯电子签平台的唯一身份标识，为32位字符串。可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一企业内不会出现重复。该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。指定待授权的用户ID数组,电子签的用户ID可以填写OpenId，系统会通过组织+渠道+OpenId查询得到UserId进行授权。 */
  UserIds: string[];
  /** 操作人（用户）信息，不用传 */
  Operator?: UserInfo;
  /** 企业机构信息，不用传 */
  Organization?: OrganizationInfo;
}

declare interface ChannelCreateSealPolicyResponse {
  /** 最终授权成功的电子签系统用户ID数组。其他的跳过的是已经授权了的。请求参数填写OpenId时，返回授权成功的 Openid。 */
  UserIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateUserAutoSignEnableUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 自动签开通配置信息, 包括开通的人员的信息等 */
  AutoSignConfig?: AutoSignConfig;
  /** 生成的链接类型： 不传(即为空值) 则会生成小程序端开通链接(默认) **H5SIGN** : 生成H5端开通链接 */
  UrlType?: string;
  /** 是否通知开通方，通知类型:默认为不通知开通方**SMS** : 短信通知 ,如果需要短信通知则NotifyAddress填写对方的手机号 */
  NotifyType?: string;
  /** 如果通知类型NotifyType选择为SMS，则此处为手机号, 其他通知类型不需要设置此项 */
  NotifyAddress?: string;
  /** 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。` */
  ExpiredTime?: number;
  /** 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 20480长度。 在个人自动签的开通、关闭等回调信息场景中，该字段的信息将原封不动地透传给贵方。 */
  UserData?: string;
}

declare interface ChannelCreateUserAutoSignEnableUrlResponse {
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

declare interface ChannelCreateUserAutoSignSealUrlRequest {
  /** 渠道应用相关信息。 */
  Agent: Agent;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 自动签开通个人用户信息，包括名字，身份证等。 */
  UserInfo: UserThreeFactor;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
  /** 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。` */
  ExpiredTime?: number;
}

declare interface ChannelCreateUserAutoSignSealUrlResponse {
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

declare interface ChannelCreateUserRolesRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 绑定角色的角色id列表，最多 100 个 */
  RoleIds: string[];
  /** 电子签用户ID列表，与OpenIds参数二选一,优先UserIds参数，最多 100 个 */
  UserIds?: string[];
  /** 客户系统用户ID列表，与UserIds参数二选一,优先UserIds参数，最多 100 个 */
  OpenIds?: string[];
  /** 操作者信息 */
  Operator?: UserInfo;
}

declare interface ChannelCreateUserRolesResponse {
  /** 绑定失败的用户角色列表 */
  FailedCreateRoleData?: FailedCreateRoleData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelCreateWebThemeConfigRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。 */
  Agent: Agent;
  /** 主题类型EMBED_WEB_THEME：嵌入式主题EMBED_WEB_THEME，web页面嵌入的主题风格配置COMPANY_AUTHENTICATE，子客认证主题配置， 对当前第三方应用号生效，目前支持的有，背景图替换，隐藏企业认证页面导航栏和隐藏企业认证顶部logo */
  ThemeType: string;
  /** 主题配置 */
  WebThemeConfig: WebThemeConfig;
}

declare interface ChannelCreateWebThemeConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDeleteRoleRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 角色id，最多20个 */
  RoleIds: string[];
}

declare interface ChannelDeleteRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDeleteRoleUsersRequest {
  /** 代理信息此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。 */
  Agent: Agent;
  /** 角色Id（非超管或法人角色Id） */
  RoleId: string;
  /** 电子签用户ID列表，与OpenIds参数二选一,优先UserIds参数，最多两百 */
  UserIds?: string[];
  /** 操作人信息 */
  Operator?: UserInfo;
  /** 客户系统用户ID列表，与UserIds参数二选一,优先UserIds参数，最多两百 */
  OpenIds?: string[];
}

declare interface ChannelDeleteRoleUsersResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDeleteSealPoliciesRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 操作的印章ID */
  SealId: string;
  /** 需要删除授权的用户ID数组，可以传入电子签系统用户ID或OpenId。注: 1. `填写OpenId时，系统会通过组织+渠道+OpenId查询得到对应的UserId进行授权取消操作` */
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

declare interface ChannelDescribeAccountBillDetailRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业必须已经经过实名认证 */
  Agent: Agent;
}

declare interface ChannelDescribeAccountBillDetailResponse {
  /** 当前绑定中账号数量 */
  BoundAccountsNumber?: number;
  /** 剩余可绑定账号数量 */
  RemainAvailableAccountsNumber?: number;
  /** 已失效账号数量 */
  InvalidAccountsNumber?: number;
  /** 购买数量 */
  TotalBuyAccountsNumber?: number;
  /** 赠送数量 */
  TotalGiftAccountsNumber?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeBillUsageDetailRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业必须已经经过实名认证 */
  Agent: Agent;
  /** 查询开始时间字符串，格式为yyyymmdd,时间跨度不能大于31天 */
  StartTime: string;
  /** 查询结束时间字符串，格式为yyyymmdd,时间跨度不能大于31天 */
  EndTime: string;
  /** 查询的套餐类型 （选填 ）不传则查询所有套餐；目前支持:**CloudEnterprise**: 企业版合同**SingleSignature**: 单方签章**CloudProve**: 签署报告**CloudOnlineSign**: 腾讯会议在线签约**ChannelWeCard**: 微工卡**SignFlow**: 合同套餐**SignFace**: 签署意愿（人脸识别）**SignPassword**: 签署意愿（密码）**SignSMS**: 签署意愿（短信）**PersonalEssAuth**: 签署人实名（腾讯电子签认证）**PersonalThirdAuth**: 签署人实名（信任第三方认证）**OrgEssAuth**: 签署企业实名**FlowNotify**: 短信通知**AuthService**: 企业工商信息查询 */
  QuotaType?: string;
  /** 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0 */
  Offset?: number;
  /** 指定分页每页返回的数据条数，如果不传默认为 50，单页最大支持 50。 */
  Limit?: number;
}

declare interface ChannelDescribeBillUsageDetailResponse {
  /** 返回查询记录总数 */
  Total?: number;
  /** 消耗记录详情 */
  Details?: ChannelBillUsageDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeEmployeesRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 指定分页每页返回的数据条数，单页最大支持 20。 */
  Limit: number;
  /** 查询的关键字段，支持Key-Values查询。可选键值如下： Key:**"Status"**，Values: **["IsVerified"]**, 查询已实名的员工 Key:**"Status"**，Values: **["QuiteJob"]**, 查询离职员工 Key:**"StaffOpenId"**，Values: **["OpenId1","OpenId2",...]**, 根据第三方系统用户OpenId查询员工注: `同名字的Key的过滤条件会冲突, 只能填写一个` */
  Filters?: Filter[];
  /** 指定分页返回第几页的数据，如果不传默认返回第一页。页码从 0 开始，即首页为 0，最大20000。 */
  Offset?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelDescribeEmployeesResponse {
  /** 员工信息列表。 */
  Employees?: Staff[];
  /** 偏移量，默认为0，最大20000。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 指定分页每页返回的数据条数，单页最大支持 20。 */
  Limit?: number;
  /** 符合条件的员工数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeFlowComponentsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 需要获取填写控件填写内容的合同流程ID */
  FlowId: string;
}

declare interface ChannelDescribeFlowComponentsResponse {
  /** 合同填写控件信息列表，填写控件会按照参与方角色进行分类。 */
  RecipientComponentInfos?: RecipientComponentInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeOrganizationSealsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 指定分页每页返回的数据条数，单页最大支持 100。 */
  Limit: number;
  /** 分页查询偏移量，默认为0，最大为20000 */
  Offset?: number;
  /** 查询授权用户信息类型，取值如下： 0：（默认）不返回授权用户信息 1：返回授权用户的信息 */
  InfoType?: number;
  /** 印章id，是否查询特定的印章（没有输入返回所有）注: `没有输入返回所有记录，最大返回100条。` */
  SealId?: string;
  /** 电子印章类型 , 可选类型如下: **OFFICIAL**: 公章**CONTRACT**: 合同专用章;**FINANCE**: 财务专用章;**PERSONNEL**: 人事专用章**INVOICE**: 发票专用章**LEGAL_PERSON_SEAL**: 法定代表人章;**EMPLOYEE_QUALIFICATION_SEAL**: 员工执业章注: `1.为空时查询所有类型的印章。` */
  SealTypes?: string[];
  /** 需查询的印章状态列表。 空，()仅查询启用状态的印章； ALL，查询所有状态的印章； CHECKING，查询待审核的印章； SUCCESS，查询启用状态的印章； FAIL，查询印章审核拒绝的印章； DISABLE，查询已停用的印章； STOPPED，查询已终止的印章； VOID，查询已作废的印章； INVALID，查询已失效的印章。 */
  SealStatuses?: string[];
}

declare interface ChannelDescribeOrganizationSealsResponse {
  /** 在设定了SealId时，返回值为0或1；若未设定SealId，则返回公司的总印章数量 */
  TotalCount?: number;
  /** 查询到的印章结果数组 */
  Seals?: OccupiedSeal[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeRolesRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 指定每页返回的数据条数，和Offset参数配合使用，单页最大200。注: `因为历史原因, 此字段为字符串类型` */
  Limit: string;
  /** 查询的关键字段:Key:"**RoleType**",Values:["**1**"]查询系统角色，Key:"**RoleType**",Values:["**2**"]查询自定义角色Key:"**RoleStatus**",Values:["**1**"]查询启用角色Key:"**RoleStatus**",Values:["**2**"]查询禁用角色Key:"**IsReturnPermissionGroup**"，Values:["**0**"]表示接口不返回角色对应的权限树字段Key:"**IsReturnPermissionGroup**"，Values:["**1**"]表示接口返回角色对应的权限树字段注: `同名字的Key的过滤条件会冲突, 只能填写一个` */
  Filters?: Filter[];
  /** 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用，最大2000条。注：1.`offset从0开始，即第一页为0。`2.`默认从第一页返回。` */
  Offset?: number;
  /** 操作人信息 */
  Operator?: UserInfo;
}

declare interface ChannelDescribeRolesResponse {
  /** 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用，最大2000条。 */
  Offset?: number;
  /** 指定每页返回的数据条数，和Offset参数配合使用，单页最大200。 */
  Limit?: number;
  /** 查询角色的总数量 */
  TotalCount?: number;
  /** 查询的角色信息列表 */
  ChannelRoles?: ChannelRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeSignFaceVideoRequest {
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 签署参与人在本流程中的编号ID(每个流程不同)，可用此ID来定位签署参与人在本流程的签署节点，也可用于后续创建签署链接等操作。 */
  SignId: string;
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
}

declare interface ChannelDescribeSignFaceVideoResponse {
  /** 核身视频结果。 */
  VideoData?: DetectInfoVideoData;
  /** 意愿核身问答模式结果。若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionQuestionResult?: IntentionQuestionResult;
  /** 意愿核身点头确认模式的结果信息，若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionActionResult?: IntentionActionResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDescribeUserAutoSignStatusRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 要查询状态的用户信息, 包括名字,身份证等 */
  UserInfo: UserThreeFactor;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
}

declare interface ChannelDescribeUserAutoSignStatusResponse {
  /** 查询用户是否已开通自动签 */
  IsOpen?: boolean;
  /** 自动签许可生效时间。当且仅当已通过许可开通自动签时有值。值为unix时间戳,单位为秒。 */
  LicenseFrom?: number;
  /** 自动签许可到期时间。当且仅当已通过许可开通自动签时有值。值为unix时间戳,单位为秒。 */
  LicenseTo?: number;
  /** 设置用户开通自动签时是否绑定个人自动签账号许可。**0**: 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人`**1**: 不绑定自动签账号许可开通，后续使用合同份额进行合同发起 */
  LicenseType?: number;
  /** 用户开通自动签指定使用的印章，为空则未设置印章，需重新进入开通链接设置印章。 */
  SealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelDisableUserAutoSignRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 需要关闭自动签的个人的信息，如姓名，证件信息等。 */
  UserInfo: UserThreeFactor;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
}

declare interface ChannelDisableUserAutoSignResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelGetTaskResultApiRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 转换任务Id，通过接口创建文件转换任务接口得到的转换任务id */
  TaskId: string;
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
  /** 暂未开放 */
  Organization?: OrganizationInfo;
}

declare interface ChannelGetTaskResultApiResponse {
  /** 任务Id */
  TaskId?: string;
  /** 任务状态，需要关注的状态**0** :NeedTranform - 任务已提交**4** :Processing - 文档转换中**8** :TaskEnd - 任务处理完成**-2** :DownloadFailed - 下载失败**-6** :ProcessFailed - 转换失败**-13**:ProcessTimeout - 转换文件超时 */
  TaskStatus?: number;
  /** 状态描述，需要关注的状态 **NeedTranform** : 任务已提交 **Processing** : 文档转换中 **TaskEnd** : 任务处理完成 **DownloadFailed** : 下载失败 **ProcessFailed** : 转换失败 **ProcessTimeout** : 转换文件超时 */
  TaskMessage?: string;
  /** 资源Id（即FileId），用于[用PDF文件创建签署流程](https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowByFiles) */
  ResourceId?: string;
  /** 预览文件Url，有效期30分钟 当前字段返回为空，发起的时候，将ResourceId 放入发起即可 */
  PreviewUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelModifyRoleRequest {
  /** 代理企业和员工的信息。 */
  Agent: Agent;
  /** 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。 */
  Name: string;
  /** 角色Id，可通过接口 ChannelDescribeRoles 查询获取 */
  RoleId: string;
  /** 角色描述，最大长度为50个字符 */
  Description?: string;
  /** 权限树，权限树内容 PermissionGroups 可参考接口 ChannelDescribeRoles的输出 */
  PermissionGroups?: PermissionGroup[];
}

declare interface ChannelModifyRoleResponse {
  /** 角色id */
  RoleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelRenewAutoSignLicenseRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景 */
  SceneKey: string;
  /** 要查询状态的用户信息, 包括名字,身份证等 */
  UserInfo: UserThreeFactor;
  /** 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。` */
  Operator?: UserInfo;
}

declare interface ChannelRenewAutoSignLicenseResponse {
  /** 续期成功后自动签许可到期时间。当且仅当已通过许可开通自动签时有值。值为unix时间戳,单位为秒。 */
  LicenseTo?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelUpdateSealStatusRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 印章状态，目前支持传入以下类型：DISABLE-停用印章 */
  Status: string;
  /** 印章ID */
  SealId: string;
  /** 更新印章状态原因说明 */
  Reason?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface ChannelUpdateSealStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChannelVerifyPdfRequest {
  /** 合同流程ID，为32位字符串。 */
  FlowId: string;
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent?: Agent;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface ChannelVerifyPdfResponse {
  /** 验签结果代码，代码的含义如下：**1**：文件未被篡改，全部签名在腾讯电子签完成。**2**：文件未被篡改，部分签名在腾讯电子签完成。**3**：文件被篡改。**4**：异常：文件内没有签名域。(如果合同还没有签署也会返回此代码)**5**：异常：文件签名格式错误。 */
  VerifyResult?: number;
  /** 验签结果详情，所有签署区(包括签名区, 印章区, 日期签署区,骑缝章等)的签署验签结果 */
  PdfVerifyResults?: PdfVerifyResult[];
  /** 验签序列号, 为11为数组组成的字符串 */
  VerifySerialNo?: string;
  /** 合同文件MD5哈希值 */
  PdfResourceMd5?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchInitOrganizationUrlRequest {
  /** 应用相关信息。 此接口Agent.AppId 必填。 */
  Agent: Agent;
  /** 初始化操作类型CREATE_SEAL : 创建印章OPEN_AUTO_SIGN :开通企业自动签署PARTNER_AUTO_SIGN_AUTH :合作方企业或应用平台方授权自动签 */
  OperateTypes: string[];
  /** 批量操作的企业列表在第三方平台的企业Id列表，即ProxyOrganizationOpenId列表,最大支持50个 */
  ProxyOrganizationOpenIds: string[];
  /** 当操作类型包含 PARTNER_AUTO_SIGN_AUTH 且是给应用平台方授权自动签时传true。![image](https://qcloudimg.tencent-cloud.cn/raw/f9aba7c999a6d79ada20b4384520e120.png) */
  IsAuthorizePlatformApplication?: boolean;
  /** 被授权的合作方企业在第三方平台子客企业标识，即ProxyOrganizationOpenId，当操作类型包含 PARTNER_AUTO_SIGN_AUTH 且要进行合作方企业授权自动签时必传。 */
  AuthorizedProxyOrganizationOpenId?: string;
}

declare interface CreateBatchInitOrganizationUrlResponse {
  /** 小程序路径，有效时间为7天 */
  MiniAppPath?: string;
  /** 操作长链，有效时间为7天 */
  OperateLongUrl?: string;
  /** 操作短链，有效时间为7天 */
  OperateShortUrl?: string;
  /** 操作二维码，有效时间为7天 */
  QRCodeUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchOrganizationAuthorizationUrlRequest {
  /** 应用相关信息。 此接口Agent.AppId 必填。 */
  Agent: Agent;
  /** 组织机构超管姓名。 在注册流程中，必须是超管本人进行操作。此参数需要跟[创建子企业批量认证链接](https://qian.tencent.com/developers/partnerApis/accounts/CreateBatchOrganizationRegistrationTasks)中 AdminName 保持一致。 */
  AdminName?: string;
  /** 组织机构超管手机号。 在注册流程中，必须是超管本人进行操作。此参数需要跟[创建子企业批量认证链接](https://qian.tencent.com/developers/partnerApis/accounts/CreateBatchOrganizationRegistrationTasks)中 Admin Mobile保持一致。 */
  AdminMobile?: string;
  /** 企业批量认证链接的子任务 SubTaskId，该 SubTaskId 是通过接口 查询企业批量认证链接 DescribeBatchOrganizationRegistrationUrls 获得。此参数需与超管个人三要素（AdminName，AdminMobile，AdminIdCardNumber）配合使用。若 SubTaskId 不属于传入的超级管理员，将进行筛选。 */
  SubTaskIds?: string[];
  /** 组织机构超管证件类型支持以下类型- ID_CARD : 居民身份证 (默认值)- HONGKONG_AND_MACAO : 港澳居民来往内地通行证- HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)此参数需要跟[创建子企业批量认证链接](https://qian.tencent.com/developers/partnerApis/accounts/CreateBatchOrganizationRegistrationTasks)中 AdminIdCardType保持一致。 */
  AdminIdCardType?: string;
  /** 组织机构超管证件号。 在注册流程中，必须是超管本人进行操作。此参数需要跟[创建子企业批量认证链接](https://qian.tencent.com/developers/partnerApis/accounts/CreateBatchOrganizationRegistrationTasks)中 AdminIdCardNumber保持一致。 */
  AdminIdCardNumber?: string;
  /** 要跳转的链接类型 **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链**APP**： 第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型**QR_CODE**： 跳转电子签小程序的http_url的二维码形式, 可以在页面展示适合此类型 */
  Endpoint?: string;
}

declare interface CreateBatchOrganizationAuthorizationUrlResponse {
  /** 批量企业注册链接-单链接包含多条认证流，根据Endpoint的不同设置，返回不同的链接地址。失效时间：7天跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表 Endpoint 示例 链接有效期限 HTTP https://res.ess.tencent.cn/cdn/h5-activity-dev/jump-mp.html?to=AUTHORIZATION_ENTERPRISE_FOR_BATCH_SUBMIT&shortKey=yDCHHURDfBxSB2rj2Bfa 7天 HTTP_SHORT_URL https://test.essurl.cn/8gDKUBAWK8 7天 APP pages/guide/index?to=AUTHORIZATION_ENTERPRISE_FOR_BATCH_SUBMIT&shortKey=yDCHpURDfR6iEkdpsDde 7天 QR_CODE https://dyn.test.ess.tencent.cn/imgs/qrcode_urls/authorization_enterprise_for_batch_submit/yDCHHUUckpbdauq9UEjnoFDCCumAMmv1.png 7天 注： `1.创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义` */
  AuthUrl?: string;
  /** 认证流认证失败信息 */
  ErrorMessages?: string[];
  /** 链接过期时间，为 7 天后，创建时间，格式为Unix标准时间戳（秒）。 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBatchOrganizationRegistrationTasksRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId */
  Agent: Agent;
  /** 当前应用下子企业的组织机构注册信息。最多支持查询10子企业。 */
  RegistrationOrganizations: RegistrationOrganizationInfo[];
  /** 生成链接的类型：**PC**：(默认)web控制台链接, 需要在PC浏览器中打开**CHANNEL**：H5跳转到电子签小程序链接, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序**SHORT_URL**：H5跳转到电子签小程序链接的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序**APP**：第三方APP或小程序跳转电子签小程序链接, 一般用于贵方小程序或者APP跳转过来, 打开后进入腾讯电子签小程序**H5**：第三方H5跳转到电子签H5长链接, 一般用于贵方H5跳转过来, 打开后进入腾讯电子签H5页面**SHORT_H5**：第三方H5跳转到电子签H5短链接, 一般用于贵方H5跳转过来, 打开后进入腾讯电子签H5页面 */
  Endpoint?: string;
  /** 认证链接使用单链接还是多链接模式0 - 多链接(默认)，指批量生成链接， 每一个企业会拥有一个认证链接，然后分别认证1 - 单链接 ， 指批量生成链接，然后会将多个链接聚合成一个链接，进行认证p.s.请注意， 如果使用单链接的模式并且认证方式是授权书方式的时候，必须在接口中传递超管授权书。 */
  BatchAuthMethod?: number;
}

declare interface CreateBatchOrganizationRegistrationTasksResponse {
  /** 生成注册链接的任务ID，后序根据这个任务ID， 调用查询子企业批量认证链接获取生成的链接，发给对应的客户使用。注：`如果有错误，则不会返回任务ID` */
  TaskId?: string;
  /** 批量生成企业认证链接的详细错误信息，顺序与输入参数子企业列表顺序一致。如果所有企业认证链接都成功生成，将不返回错误信息如果存在任何错误，将返回具体的错误描述。（没有错误的企业返回空字符串） */
  ErrorMessages?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChannelFlowEvidenceReportRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。 */
  FlowId: string;
  /** 暂未开放 */
  Operator?: UserInfo;
  /** 指定申请的报告类型，可选类型如下： **0** :合同签署报告（默认） **1** :公证处核验报告 */
  ReportType?: number;
}

declare interface CreateChannelFlowEvidenceReportResponse {
  /** 出证报告 ID，可用于获取出证报告任务执行结果查询出证任务结果和出证PDF的下载URL */
  ReportId?: string;
  /** 出证任务执行的状态, 状态含义如下：**EvidenceStatusExecuting**： 出证任务在执行中**EvidenceStatusSuccess**： 出证任务执行成功**EvidenceStatusFailed** ： 出证任务执行失败 */
  Status?: string;
  /** 废除，字段无效 */
  ReportUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChannelOrganizationInfoChangeUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经过实名认证 */
  Agent: Agent;
  /** 企业信息变更类型，可选类型如下：**1**：企业超管变更, 可以将超管换成同企业的其他员工**2**：企业基础信息变更, 可以改企业名称 , 所在地址 , 法人名字等信息 */
  ChangeType: number;
  /** 变更链接类型：**WEIXINAPP** : 创建变更短链。需要在移动端打开，会跳转到微信腾讯电子签小程序进行更换。（默认）**APP** : 创建变更小程序链接，可从第三方App或者小程序跳转到微信腾讯电子签小程序进行更换。 */
  Endpoint?: string;
}

declare interface CreateChannelOrganizationInfoChangeUrlResponse {
  /** 创建的企业信息变更链接。需要在移动端打开，会跳转到微信腾讯电子签小程序进行更换。 */
  Url?: string;
  /** 链接过期时间。链接7天有效。 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChannelSubOrganizationActiveRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 要进行激活或者续期的子客企业OrganizationOpenId列表，请确保所有列出的子客企业均已完成认证。 */
  SubOrganizationOpenIds?: string[];
  /** 操作类型，可以选择如下：**false**：（默认）激活子客企业**true**：续期子客企业 */
  Renew?: boolean;
}

declare interface CreateChannelSubOrganizationActiveResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloseOrganizationUrlRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。 */
  Agent: Agent;
}

declare interface CreateCloseOrganizationUrlResponse {
  /** 链接有效期，unix时间戳，精确到秒 */
  ExpiredOn?: number;
  /** H5跳转到电子签小程序链接, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序 */
  LongUrl?: string;
  /** H5跳转到电子签小程序链接的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序 */
  ShortUrl?: string;
  /** APP或小程序跳转电子签小程序链接, 一般用于客户小程序或者APP跳转过来, 打开后进入腾讯电子签小程序 */
  MiniAppPath?: string;
  /** 二维码链接 */
  QrcodeUrl?: string;
  /** 直接跳转至电子签小程序的二维码链接，无需通过中转页。您需要自行将其转换为二维码，使用微信扫码后可直接进入。请注意，直接点击链接是无效的。 */
  WeixinQrcodeUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsoleLoginUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId注:`1. 企业激活时， 此时的Agent.ProxyOrganizationOpenId将会是企业激活后企业的唯一标识，建议开发者保存企业ProxyOrganizationOpenId，后续各项接口调用皆需要此参数。 ``2. 员工认证时， 此时的Agent.ProxyOperator.OpenId将会是员工认证加入企业后的唯一标识，建议开发者保存此员工的OpenId，后续各项接口调用皆需要此参数。 ``3. 同渠道应用(Agent.AppId)下，企业唯一标识ProxyOrganizationOpenId需要保持唯一，员工唯一标识OpenId也要保持唯一 (而不是企业下唯一)。 ` */
  Agent: Agent;
  /** 第三方平台子客的企业名称，请确认该企业名称与企业营业执照中注册的名称完全一致。在测试环境联调的过程中，企业名称请统一加上“测试”二字，如：典子谦示例企业测试，否则将无法审核通过。企业名称请使用以下名称, 以下名称可以不用走收录。**子客测试专用企业1 - 子客测试专用企业9**注: `1. 如果名称中包含英文括号()，请使用中文括号（）代替。` `2、该名称需要与Agent.ProxyOrganizationOpenId相匹配, 企业激活后Agent.ProxyOrganizationOpenId会跟此企业名称一一绑定; 如果您的企业已经在认证授权中或者激活完成，这里修改子客企业名字将不会生效。 ` */
  ProxyOrganizationName: string;
  /** 子客企业统一社会信用代码，最大长度200个字符注意：`如果您的企业已经在认证授权中或者激活完成，这里修改子客企业名字将不会生效`。 */
  UniformSocialCreditCode?: string;
  /** 子客企业员工的姓名，最大长度50个字符, 员工的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。注：`该姓名需要和Agent.ProxyOperator.OpenId相匹配, 当员工完成认证后该姓名会和Agent.ProxyOperator.OpenId一一绑定, 若员工已认证加入企业，这里修改经办人名字传入将不会生效` */
  ProxyOperatorName?: string;
  /** 子客企业员工的手机码, 支持国内手机号11位数字(无需加+86前缀或其他字符)。注：`该手机号需要和Agent.ProxyOperator.OpenId相匹配, 当员工完成认证后该手机号会和Agent.ProxyOperator.OpenId一一绑定, 若员工已认证加入企业，这里修改经办人手机号传入将不会生效` */
  ProxyOperatorMobile?: string;
  /** Web控制台登录后进入的功能模块, 支持的模块包括： **空值** :(默认)企业中心模块 **DOCUMENT** :合同管理模块 **TEMPLATE** :企业模板管理模块 **SEAL** :印章管理模块 **OPERATOR** :组织管理模块注意：1、如果EndPoint选择"CHANNEL"或"APP"，该参数仅支持传递"SEAL"，进入印章管理模块2、该参数**仅在企业和员工激活已经完成，登录控制台场景才生效**。 */
  Module?: string;
  /** 该参数和Module参数配合使用，用于指定模块下的资源Id，指定后链接登录将展示该资源的详情。根据Module参数的不同所代表的含义不同(ModuleId需要和Module对应，ModuleId可以通过API或者控制台获取到)。当前支持： Module传值 ModuleId传值 进入的目标页面 SEAL 印章ID 查看指定印章的详情页面 TEMPLATE 合同模板ID 指定模板的详情页面 DOCUMENT 合同ID 指定合同的详情页面 注意：该参数**仅在企业和员工激活完成，登录控制台场景才生效**。 */
  ModuleId?: string;
  /** 是否展示左侧菜单栏 **ENABLE** : (默认)进入web控制台展示左侧菜单栏 **DISABLE** : 进入web控制台不展示左侧菜单栏注：该参数**仅在企业和员工激活完成，登录控制台场景才生效**。 */
  MenuStatus?: string;
  /** 生成链接的类型：**PC**：(默认)web控制台链接, 需要在PC浏览器中打开**CHANNEL**：H5跳转到电子签小程序链接, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序**SHORT_URL**：H5跳转到电子签小程序链接的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序**WEIXIN_QRCODE_URL**：直接跳转至电子签小程序的二维码链接，无需通过中转页。您需要自行将其转换为二维码，使用微信扫码后可直接进入。请注意，直接点击链接是无效的。**APP**：APP或小程序跳转电子签小程序链接, 一般用于贵方小程序或者APP跳转过来, 打开后进入腾讯电子签小程序**H5**：H5长链接跳转H5链接, 一般用于贵方H5跳转过来, 打开后进入腾讯电子签H5页面**SHORT_H5**：H5短链跳转H5的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签H5页面 */
  Endpoint?: string;
  /** 触发自动跳转事件，仅对EndPoint为App类型有效，可选值包括： **VERIFIED** :企业认证完成/员工认证完成后跳回原App/小程序 */
  AutoJumpBackEvent?: string;
  /** 可选的此企业允许的授权方式, 可以设置的方式有:2：转法定代表人授权5：授权书+对公打款 */
  AuthorizationTypes?: number[];
  /** 暂未开放 */
  Operator?: UserInfo;
  /** 子客经办人身份证注意：`如果已同步，这里非空会更新同步的经办人身份证号，暂时只支持中国大陆居民身份证类型`。 */
  ProxyOperatorIdCardNumber?: string;
  /** 认证完成跳转链接。注意：`此功能仅在Endpoint参数设置成 H5 或 PC时才有效`。 */
  AutoJumpUrl?: string;
  /** 是否展示头顶导航栏 **ENABLE** : (默认)进入web控制台展示头顶导航栏 **DISABLE** : 进入web控制台不展示头顶导航栏 注：该参数**仅在企业和员工激活完成，登录控制台场景才生效**。点击查看头顶导航栏位置 */
  TopNavigationStatus?: string;
  /** 是否自动激活子客企业，有下面两种选项：**false（默认设置）**：不自动激活子客户。您需要通过控制台或调用[激活或者续期子企业](https://qian.tencent.com/developers/partnerApis/accounts/CreateChannelSubOrganizationActive)接口手动完成激活过程。**true**：若持有的许可证充足，子客户企业注册完成后将自动激活，无需手动操作或访问控制台。注：如果应用扩展服务中的自动激活子客企业为打开态， 则忽略本接口的AutoActive这个参数（若持有的许可证充足，子客户企业注册完成后将自动激活），具体位置参考下图：![image](https://qcloudimg.tencent-cloud.cn/raw/c3639b05503d3735bac483d17aa6b0a3.png) */
  AutoActive?: boolean;
  /** 营业执照正面照（支持PNG或JPG格式）需以base64格式提供，且文件大小不得超过5MB。 */
  BusinessLicense?: string;
  /** 组织机构企业注册地址。 请确认该企业注册地址与企业营业执照中注册的地址一致。 */
  ProxyAddress?: string;
  /** 组织机构法人的姓名。 请确认该企业统一社会信用代码与企业营业执照中注册的法人姓名一致。 */
  ProxyLegalName?: string;
  /** 授权书(PNG或JPG或PDF) base64格式, 大小不超过8M 。 p.s. 如果上传授权书 ，需遵循以下条件 1. 超管的信息（超管姓名，超管手机号）必须为必填参数。 2. 认证方式AuthorizationTypes必须只能是上传授权书方式 */
  PowerOfAttorneys?: string[];
  /** 企业认证时个性化能力信息 */
  OrganizationAuthorizationOptions?: OrganizationAuthorizationOptions;
}

declare interface CreateConsoleLoginUrlResponse {
  /** 跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表 子客企业状态 子客企业员工状态 Endpoint 链接有效期限 企业未激活 员工未认证 PC/PC_SHORT_URL 5分钟 企业未激活 员工未认证 CHANNEL/APP/H5/SHORT_H5/WEIXIN_QRCODE_URL 30天 企业已激活 员工未认证 PC/PC_SHORT_URL 5分钟 企业已激活 员工未认证 CHANNEL/APP/H5/SHORT_H5/WEIXIN_QRCODE_URL 30天 企业已激活 员工已认证 PC 5分钟 企业已激活 员工已认证 CHANNEL/APP/H5/SHORT_H5/WEIXIN_QRCODE_URL 30天 注： 1. 链接仅单次有效，每次登录需要需要重新创建新的链接2. 创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义3. 生成的链路后面不能再增加参数（会出现覆盖链接中已有参数导致错误） */
  ConsoleUrl?: string;
  /** 子客企业是否已开通腾讯电子签， **true** :已经开通腾讯电子签 **false** :还未开通腾讯电子签注：`企业是否实名根据传参Agent.ProxyOrganizationOpenId进行判断，非企业名称或者社会信用代码` */
  IsActivated?: boolean;
  /** 当前经办人是否已认证并加入功能 **true** : 已经认证加入公司 **false** : 还未认证加入公司注意：**员工是否实名是根据Agent.ProxyOperator.OpenId判断，非经办人姓名** */
  ProxyOperatorIsVerified?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmployeeChangeUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 待修改的员工OpenId */
  OpenId?: string;
  /** 待修改的员工手机号，支持海外格式 */
  NewMobile?: string;
}

declare interface CreateEmployeeChangeUrlResponse {
  /** 修改员工信息的小程序链接跳转到腾讯电子签小程序的实现可以参考微信的官方文档:开放能力/打开 App */
  MiniAppPath?: string;
  /** 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmployeeQualificationSealQrCodeRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 提示信息，扫码后此信息会展示给扫描用户，用来提示用户授权操作的目的，会在授权界面下面的位置展示。![image](https://qcloudimg.tencent-cloud.cn/raw/8436ffd78c20605e6b133ff4bc4d2ac7.png) */
  HintText?: string;
}

declare interface CreateEmployeeQualificationSealQrCodeResponse {
  /** 二维码图片的Base64 注: `此二维码的有效时间为7天，过期后需要重新生成新的二维码图片` */
  QrcodeBase64?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowBlockchainEvidenceUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 此接口下面信息必填。 渠道应用标识: Agent.AppId 第三方平台子客企业标识: Agent.ProxyOrganizationOpenId 第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId */
  Agent: Agent;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 链接/二维码的有效截止时间，格式为unix时间戳。最长不超过 2099年12月31日（4102415999）。默认值为有效期为当前时间后7天。 */
  ExpiredOn?: number;
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

declare interface CreateFlowForwardsRequest {
  /** 合同对应参与方需要修改的目标经办人对应的OpenId。注意：`需要保证目标经办人已经加入企业且已实名` */
  TargetOpenId: string;
  /** 企业签署方的合同及对应签署方 */
  FlowForwardInfos: FlowForwardInfo[];
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
}

declare interface CreateFlowForwardsResponse {
  /** 失败的合同id以及错误详情 */
  FailedFlows?: FlowForwardResult[];
  /** 成功的合同id */
  SuccessFlows?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowGroupSignReviewRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 合同(流程)组的合同组Id，为32位字符串，通过接口[通过多文件创建合同组签署流程](https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowGroupByFiles) 或[通过多模板创建合同组签署流程](https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowGroupByTemplates)创建合同组签署流程时返回。 */
  FlowGroupId: string;
  /** 提交的审核结果，审核结果有下面三种情况PASS: 审核通过，合同流程可以继续执行签署等操作REJECT: 审核拒绝，合同流程不会变动SIGN_REJECT:拒签，合同流程直接结束，合同状态变为**合同拒签** */
  ReviewType: string;
  /** 需要进行签署审核的签署人的个人信息或企业信息，签署方的匹配方式按照以下规则:个人：二选一（选择其中任意信息组合即可）姓名+证件类型+证件号姓名+手机号企业：二选一 （选择其中任意信息组合即可）企业名+姓名+证件类型+证件号企业名+姓名+手机号 */
  ApproverInfo: NeedReviewApproverInfo;
  /** 审核不通过的原因，该字段的字符串长度不超过200个字符。注：`当审核类型（ReviewType）为审核拒绝（REJECT）或拒签（SIGN_REJECT）时，审核结果原因字段必须填写` */
  ReviewMessage?: string;
}

declare interface CreateFlowGroupSignReviewResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowsByTemplatesRequest {
  /** 合同的发起企业和发起人信息，点击查看合同发起企业和人展示的位置此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId（合同的发起企业）第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId （合同的发起人） */
  Agent: Agent;
  /** 要创建的合同信息列表，最多支持一次创建20个合同 */
  FlowInfos: FlowInfo[];
  /** 是否为预览模式，取值如下： **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。 **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。 注意： 以预览模式创建的合同仅供查看，因此参与方无法进行签署操作注:`如果预览的文件中指定了动态表格控件，此时此接口返回的是合成前的文档预览链接，合成完成后的文档预览链接需要通过回调通知的方式或使用返回的TaskInfo中的TaskId通过ChannelGetTaskResultApi接口查询得到` */
  NeedPreview?: boolean;
  /** 预览模式下产生的预览链接类型 **0** :(默认) 文件流 ,点开后下载预览的合同PDF文件 **1** :H5链接 ,点开后在浏览器中展示合同的样子注: `此参数在NeedPreview 为true时有效` */
  PreviewType?: number;
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
}

declare interface CreateFlowsByTemplatesResponse {
  /** 生成的合同流程ID数组，合同流程ID为32位字符串。建议开发者妥善保存此流程ID数组，以便于顺利进行后续操作。[点击产看FlowId在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/05af26573d5106763b4cfbb9f7c64b41.png) */
  FlowIds?: string[];
  /** 第三方应用平台的业务信息, 与创建合同的FlowInfos数组中的CustomerData一一对应 */
  CustomerData?: string[];
  /** 创建消息，对应多个合同ID，成功为“”,创建失败则对应失败消息 */
  ErrorMessages?: string[];
  /** 合同预览链接URL数组。注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL如果预览的文件中指定了动态表格控件，此时此接口返回的是合成前的文档预览链接，合成完成后的文档预览链接需要通过[合同文档合成完成回调](https://qian.tencent.com/developers/partner/callback_types_contracts_sign#%E5%8D%81%E4%B8%80-%E5%90%88%E5%90%8C%E6%96%87%E6%A1%A3%E5%90%88%E6%88%90%E5%AE%8C%E6%88%90%E5%9B%9E%E8%B0%83)获取或使用返回的TaskInfo中的TaskId通过[查询转换任务状态](https://qian.tencent.com/developers/partnerApis/files/ChannelGetTaskResultApi)接口查询得到 */
  PreviewUrls?: string[];
  /** 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情； */
  TaskInfos?: TaskInfo[];
  /** 签署方信息，如角色ID、角色名称等 */
  FlowApprovers?: FlowApproverItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLegalSealQrCodeRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId注:`1. 企业激活时， 此时的Agent.ProxyOrganizationOpenId将会是企业激活后企业的唯一标识，建议开发者保存企业ProxyOrganizationOpenId，后续各项接口调用皆需要此参数。 ``2. 员工认证时， 此时的Agent.ProxyOperator.OpenId将会是员工认证加入企业后的唯一标识，建议开发者保存此员工的OpenId，后续各项接口调用皆需要此参数。 ``3. 同渠道应用(Agent.AppId)下，企业唯一标识ProxyOrganizationOpenId需要保持唯一，员工唯一标识OpenId也要保持唯一 (而不是企业下唯一)。 ` */
  Agent?: Agent;
  /** 操作人信息 */
  Operator?: UserInfo;
  /** 企业信息 */
  Organization?: OrganizationInfo;
}

declare interface CreateLegalSealQrCodeResponse {
  /** 二维码图片base64值，二维码有效期7天（604800秒）二维码图片的样式如下图：![image](https://qcloudimg.tencent-cloud.cn/raw/7ec2478761158a35a9c623882839a5df.png) */
  QrcodeBase64?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateModifyAdminAuthorizationUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId */
  Agent: Agent;
  /** 企业认证流Id，可以通过回调[授权书认证审核结果回调](https://qian.tencent.com/developers/company/callback_types_staffs#%E5%8D%81%E5%85%AD-%E6%8E%88%E6%9D%83%E4%B9%A6%E8%AE%A4%E8%AF%81%E5%AE%A1%E6%A0%B8%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83)得到 */
  AuthorizationId?: string;
  /** 要跳转的链接类型 **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链**APP**： 第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型**PC**： 跳转电子签web 端控制台的链接。 */
  Endpoint?: string;
}

declare interface CreateModifyAdminAuthorizationUrlResponse {
  /** 变更企业超管授权书链接。没有有效期限制。注意：此链接仅能由当时认证企业的认证人使用。 */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrganizationAuthFileRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 企业授权书信息参数， 需要自行保证这些参数跟营业执照中的信息一致。 */
  OrganizationCommonInfo?: OrganizationCommonInfo;
  /** 授权书类型：0: 企业认证超管授权书1: 超管变更授权书2: 企业注销授权书 */
  Type?: number;
}

declare interface CreateOrganizationAuthFileResponse {
  /** 授权书链接，有效期5分钟。 */
  FileUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePartnerAutoSignAuthUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 被授企业id/授权方企业id（即OrganizationId），如果是企业之间授权和AuthorizedOrganizationName二选一传入。注：`被授权企业必须和当前企业在同一应用号下` */
  AuthorizedOrganizationId?: string;
  /** 被授企业名称/授权方企业的名字，如果是企业之间授权和AuthorizedOrganizationId二选一传入即可。请确认该名称与企业营业执照中注册的名称一致。注: 1. 如果名称中包含英文括号()，请使用中文括号（）代替。2. 被授权企业必须和当前企业在同一应用号下 */
  AuthorizedOrganizationName?: string;
  /** 是否给平台应用授权true: 表示是，授权平台应用。在此情况下，无需设置AuthorizedOrganizationId和AuthorizedOrganizationName。false: （默认）表示否，不是授权平台应用。 注：授权给平台应用需要开通【基于子客授权第三方应用可文件发起子客自动签署】白名单，请联系运营经理开通。 */
  PlatformAppAuthorization?: boolean;
  /** 在设置印章授权时，可以指定特定的印章类型，以确保在授权过程中只使用相应类型的印章。支持的印章类型包括：OFFICIAL：企业公章，用于代表企业对外的正式文件和重要事务的认证。CONTRACT：合同专用章，专门用于签署各类合同。FINANCE：财务专用章，用于企业的财务相关文件，如发票、收据等财务凭证的认证。PERSONNEL：人事专用章，用于人事管理相关文件，如劳动合同、人事任命等。 */
  SealTypes?: string[];
  /** 在处理授权关系时，授权的方向false（默认值）：表示我方授权他方。在这种情况下，AuthorizedOrganizationName 代表的是【被授权方】的企业名称，即接收授权的企业。true：表示他方授权我方。在这种情况下，AuthorizedOrganizationName 代表的是【授权方】的企业名称，即提供授权的企业。 */
  AuthToMe?: boolean;
}

declare interface CreatePartnerAutoSignAuthUrlResponse {
  /** 授权链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。 */
  Url?: string;
  /** 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径 */
  MiniAppPath?: string;
  /** 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePersonAuthCertificateImageRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 */
  Agent: Agent;
  /** 个人用户名称 */
  UserName: string;
  /** 证件类型，支持以下类型 ID_CARD : 中国大陆居民身份证 (默认值) HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证 HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证) */
  IdCardType: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。 */
  IdCardNumber: string;
  /** 自动签使用的场景值, 可以选择的场景值如下: **E_PRESCRIPTION_AUTO_SIGN** : 电子处方场景 **OTHER** : 通用场景注: `不传默认为处方单场景，即E_PRESCRIPTION_AUTO_SIGN` */
  SceneKey?: string;
}

declare interface CreatePersonAuthCertificateImageResponse {
  /** 个人用户认证证书图片下载URL，`有效期为5分钟`，超过有效期后将无法再下载。 */
  AuthCertUrl?: string;
  /** 个人用户认证证书的编号, 为20位数字组成的字符串, 由腾讯电子签下发此编号 。该编号会合成到个人用户证书证明图片。注: `个人用户认证证书的编号和证明图片绑定, 获取新的证明图片编号会变动` */
  ImageCertId?: string;
  /** 在数字证书申请过程中，系统会自动生成一个独一无二的序列号。请注意，当证书到期并自动续期时，该序列号将会发生变化。值得注意的是，此序列号不会被合成至个人用户证书的证明图片中。 */
  SerialNumber?: string;
  /** CA证书颁发时间，格式为Unix标准时间戳（秒） 该时间格式化后会合成到个人用户证书证明图片 */
  ValidFrom?: number;
  /** CA证书有效截止时间，格式为Unix标准时间戳（秒）该时间格式化后会合成到个人用户证书证明图片 */
  ValidTo?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSealByImageRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 电子印章名字，1-50个中文字符注:`同一企业下电子印章名字不能相同` */
  SealName: string;
  /** 电子印章图片base64编码，大小不超过10M（原始图片不超过5M），只支持PNG或JPG图片格式注: `通过图片创建的电子印章，需电子签平台人工审核` */
  SealImage?: string;
  /** 操作者的信息 */
  Operator?: UserInfo;
  /** 电子印章生成方式空值:(默认)使用上传的图片生成印章, 此时需要上传SealImage图片SealGenerateSourceSystem: 系统生成印章, 无需上传SealImage图片 */
  GenerateSource?: string;
  /** 电子印章类型 , 可选类型如下: **OFFICIAL**: (默认)公章**CONTRACT**: 合同专用章;**FINANCE**: 财务专用章;**PERSONNEL**: 人事专用章**INVOICE**: 发票专用章**OTHER**: 其他注: 同企业下只能有一个公章, 重复创建会报错 */
  SealType?: string;
  /** 企业印章横向文字，最多可填15个汉字 (若超过印章最大宽度，优先压缩字间距，其次缩小字号)横向文字的位置如下图中的"印章横向文字在这里"![image](https://dyn.ess.tencent.cn/guide/capi/CreateSealByImage2.png) */
  SealHorizontalText?: string;
  /** 印章样式, 可以选择的样式如下: **circle**:(默认)圆形印章**ellipse**:椭圆印章 */
  SealStyle?: string;
  /** 印章尺寸取值描述, 可以选择的尺寸如下: **38_38**: 圆形企业公章直径38mm, 当SealStyle是圆形的时候才有效 **40_40**: 圆形企业公章直径40mm, 当SealStyle是圆形的时候才有效 **42_42**（默认）: 圆形企业公章直径42mm, 当SealStyle是圆形的时候才有效 **45_45**: 圆形企业印章直径45mm, 当SealStyle是圆形的时候才有效 **50_50**: 圆形企业印章直径45mm, 当SealStyle是圆形的时候才有效 **58_58**: 圆形企业印章直径45mm, 当SealStyle是圆形的时候才有效 **40_30**: 椭圆形印章40mm x 30mm, 当SealStyle是椭圆的时候才有效 **45_30**: 椭圆形印章45mm x 30mm, 当SealStyle是椭圆的时候才有效 */
  SealSize?: string;
  /** 企业税号注:1.印章类型SealType是INVOICE类型时，此参数才会生效2.印章类型SealType是INVOICE类型，且该字段没有传入值或传入空时，会取该企业对应的统一社会信用代码作为默认的企业税号（如果是通过授权书授权方式认证的企业，此参数必传不能为空） */
  TaxIdentifyCode?: string;
}

declare interface CreateSealByImageResponse {
  /** 电子印章ID，为32位字符串。建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。 */
  SealId?: string;
  /** 电子印章预览链接地址，地址默认失效时间为24小时。注:`图片上传生成的电子印章无预览链接地址` */
  ImageUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSignUrlsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经过实名认证 */
  Agent: Agent;
  /** 合同流程ID数组，最多支持100个。注: 1. 必须选择提供此参数或合同组编号中的一个。2. 当生成类型（GenerateType）设为“ALL”时，不可提供多个流程ID。 */
  FlowIds?: string[];
  /** 合同组编号注：`该参数和合同流程ID数组必须二选一` */
  FlowGroupId?: string;
  /** 签署链接类型,可以设置的参数如下 **WEIXINAPP** :(默认)跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回短链 **CHANNEL** :带有H5引导页的跳转电子签小程序的链接(GenerateType非ALL时候不能设置成CHANNEL) **APP** :第三方App或小程序跳转电子签小程序的path, App或者小程序跳转适合此类型 **LONGURL2WEIXINAPP** :跳转电子签小程序的链接, H5跳转适合此类型，此时返回长链**注：**动态签署人场景，如果签署链接类型设置为`APP`，则仅支持跳转到封面页。详细使用场景可以参考接口描述说明中的 **主要使用场景EndPoint分类** */
  Endpoint?: string;
  /** 签署链接生成类型，可以选择的类型如下ALL：（默认）为所有签署方生成签署链接，但不包括自动签署（静默签署）的签署方。注意：此中类型不支持多个合同ID（FlowIds）。CHANNEL：适用于第三方子企业的员工签署方。NOT_CHANNEL：适用于SaaS平台企业的员工签署方。PERSON：适用于个人或自然人签署方。FOLLOWER：适用于关注方，目前指合同的抄送方。RECIPIENT：根据RecipientId生成对应的签署链接，适用于动态添加签署人的情况。 */
  GenerateType?: string;
  /** SaaS平台企业员工签署方的企业名称如果名称中包含英文括号()，请使用中文括号（）代替。 注: `1.GenerateType为"NOT_CHANNEL"时必填` `2.获取B端动态签署人领取链接时,可指定此字段来预先设定签署人的企业,预设后只能以该企业身份去领取合同并完成签署` */
  OrganizationName?: string;
  /** 合同流程里边参与方的姓名。注: 1. `GenerateType为"PERSON"(即个人签署方)时必填`。2. `在动态签署人补充链接场景中，可以通过传入这个值，对补充的个人参与方信息进行限制。仅匹配传入姓名的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方。` */
  Name?: string;
  /** 合同流程里边签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。注: 1. `GenerateType为"PERSON"或"FOLLOWER"时必填。`2. `在动态签署人补充链接场景中，可以通过传入此值，对补充的个人参与方信息进行限制。仅匹配传入手机号的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方。` */
  Mobile?: string;
  /** 证件类型，支持以下类型ID_CARD : 中国大陆居民身份证HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)`注：在动态签署人补充链接场景中，可以通过传入此值，对补充的个人参与方信息进行限制。仅匹配传入证件类型的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方，且需要和证件号参数一同传递，不能单独进行限制。` */
  IdCardType?: string;
  /** 证件号码，应符合以下规则居民身份证号码应为18位字符串，由数字和大写字母X组成(如存在X，请大写)。港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。`注：在动态签署人补充链接场景中，可以通过传入此值，对补充的个人参与方信息进行限制。仅匹配传入证件号的参与方才能补充合同。此参数预设信息功能暂时仅支持个人动态参与方。` */
  IdCardNumber?: string;
  /** 第三方平台子客企业的企业的标识, 即OrganizationOpenId。 注: `1.GenerateType为"CHANNEL"时必填` `2.获取B端动态签署人领取链接时,可指定此字段来预先设定签署人的平台子客企业,预设后只能以该平台子客企业身份去领取合同并完成签署` */
  OrganizationOpenId?: string;
  /** 第三方平台子客企业员工的标识OpenId，GenerateType为"CHANNEL"时可用，指定到具体参与人, 仅展示已经实名的经办人信息注： 如果传进来的OpenId已经实名并且加入企业， 则忽略Name，IdCardType，IdCardNumber，Mobile这四个入参（会用此OpenId实名的身份证和登录的手机号覆盖） */
  OpenId?: string;
  /** 签署完成后是否自动回跳false：否, 签署完成不会自动跳转回来(默认)true：是, 签署完成会自动跳转回来注: 1. 该参数只针对APP类型（电子签小程序跳转贵方小程序）场景 的签署链接有效2. 手机应用APP 或 微信小程序需要监控界面的返回走后序逻辑, 微信小程序的文档可以参考[这个](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object)3. 电子签小程序跳转贵方APP，不支持自动跳转，必需用户手动点击完成按钮（微信的限制） */
  AutoJumpBack?: boolean;
  /** 签署完之后的H5页面的跳转链接，针对Endpoint为CHANNEL时有效，最大长度1000个字符。 */
  JumpUrl?: string;
  /** 暂未开放 */
  Operator?: UserInfo;
  /** 生成的签署链接在签署页面隐藏的按钮列表，可设置如下： **0** :合同签署页面更多操作按钮 **1** :合同签署页面更多操作的拒绝签署按钮 **2** :合同签署页面更多操作的转他人处理按钮 **3** :签署成功页的查看详情按钮注: `字段为数组, 可以传值隐藏多个按钮` */
  Hides?: number[];
  /** 参与方角色ID，用于生成动态签署人链接完成领取。注：`使用此参数需要与flow_ids数量一致并且一一对应, 表示在对应同序号的流程中的参与角色ID`， */
  RecipientIds?: string[];
  /** 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。 */
  FlowGroupUrlInfo?: FlowGroupUrlInfo;
  /** 仅公众号 H5 跳转电子签小程序时，如需签署完成的“返回应用”功能，在获取签署链接接口的 UrlUseEnv 参数需设置为 **WeChatOfficialAccounts**，小程序签署成功的结果页面中才会出现“返回应用”按钮。在用户点击“返回应用”按钮之后，会返回到公众号 H5。 参考 [公众号 H5 跳转电子签小程序](https://qian.tencent.com/developers/company/openwxminiprogram/#23-%E5%85%AC%E4%BC%97%E5%8F%B7-h5-%E4%B8%AD%E8%B7%B3%E8%BD%AC)。 */
  UrlUseEnv?: string;
}

declare interface CreateSignUrlsResponse {
  /** 生成的签署参与者的签署链接信息数组。 */
  SignUrlInfos?: SignUrlInfo[];
  /** 生成失败时的错误信息，成功返回”“，顺序和出参SignUrlInfos保持一致 */
  ErrorMessages?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOrganizationAuthorizationsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId */
  Agent: Agent;
  /** 认证人姓名，组织机构超管姓名。 在注册流程中，必须是超管本人进行操作。 */
  AdminName?: string;
  /** 认证人手机号，组织机构超管手机号。 在注册流程中，必须是超管本人进行操作。 */
  AdminMobile?: string;
}

declare interface DeleteOrganizationAuthorizationsResponse {
  /** 清理认证流的详细信息，包括企业名称、认证流唯一 ID 以及清理认证流过程中产生的错误信息。 */
  DeleteOrganizationAuthorizationInfos?: DeleteOrganizationAuthorizationInfo[];
  /** 批量清理认证流返回的状态值其中包括- 1 全部成功- 2 部分成功- 3 全部失败 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchOrganizationRegistrationTasksRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId */
  Agent: Agent;
  /** 企业批量认证链接的子任务 SubTaskId，该 SubTaskId 是通过接口[查询企业批量认证链接](https://qian.tencent.com/developers/companyApis/organizations/DescribeBatchOrganizationRegistrationUrls)可以得到。 */
  TaskIds?: string[];
}

declare interface DescribeBatchOrganizationRegistrationTasksResponse {
  /** 企业批量任务状态明细 */
  Details?: BatchOrganizationRegistrationTasksDetails[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchOrganizationRegistrationUrlsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId */
  Agent: Agent;
  /** 通过接口提交子企业批量认证链接创建任务调用得到的任务ID。 */
  TaskId: string;
}

declare interface DescribeBatchOrganizationRegistrationUrlsResponse {
  /** 子企业注册认证的链接列表 */
  OrganizationAuthUrls?: OrganizationAuthUrl[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCancelFlowsTaskRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 批量撤销任务编号，为32位字符串，通过接口[批量撤销合同流程](https://qian.tencent.com/developers/partnerApis/operateFlows/ChannelBatchCancelFlows)或者[获取批量撤销签署流程腾讯电子签小程序链接](https://qian.tencent.com/developers/partnerApis/operateFlows/ChannelCreateBatchCancelFlowUrl)获得。 */
  TaskId: string;
}

declare interface DescribeCancelFlowsTaskResponse {
  /** 批量撤销任务编号，为32位字符串。 */
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

declare interface DescribeChannelFlowEvidenceReportRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 签署报告编号, 由提交申请出证报告任务产生 */
  ReportId: string;
  /** 暂未开放 */
  Operator?: UserInfo;
  /** 指定申请的报告类型，可选类型如下： **0** :合同签署报告（默认） **1** :公证处核验报告 */
  ReportType?: number;
}

declare interface DescribeChannelFlowEvidenceReportResponse {
  /** 出证报告PDF的下载 URL，有效期为5分钟，超过有效期后将无法再下载。 */
  ReportUrl?: string;
  /** 出证任务执行的状态, 状态含义如下：**EvidenceStatusExecuting**： 出证任务在执行中**EvidenceStatusSuccess**： 出证任务执行成功**EvidenceStatusFailed** ： 出证任务执行失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelOrganizationsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 指定分页每页返回的数据条数，单页最大支持 200。 */
  Limit: number;
  /** 该字段是指第三方平台子客企业的唯一标识，用于查询单独某个子客的企业数据。**注**：`如果需要批量查询本应用下的所有企业的信息，则该字段不需要赋值` */
  OrganizationOpenId?: string;
  /** 可以按照当前企业的认证状态进行过滤。可值如下：**"UNVERIFIED"**： 未认证的企业 **"VERIFYINGLEGALPENDINGAUTHORIZATION"**： 认证中待法人授权的企业 **"VERIFYINGAUTHORIZATIONFILEPENDING"**： 认证中授权书审核中的企业 **"VERIFYINGAUTHORIZATIONFILEREJECT"**： 认证中授权书已驳回的企业 **"VERIFYING"**： 认证进行中的企业 **"VERIFIED"**： 已认证完成的企业 */
  AuthorizationStatusList?: string[];
  /** 指定分页返回第几页的数据，如果不传默认返回第一页。 页码从 0 开始，即首页为 0，最大20000。 */
  Offset?: number;
}

declare interface DescribeChannelOrganizationsResponse {
  /** 满足查询条件的企业信息列表。 */
  ChannelOrganizationInfos?: ChannelOrganizationInfo[];
  /** 指定分页返回第几页的数据。页码从 0 开始，即首页为 0，最大20000。 */
  Offset?: number;
  /** 指定分页每页返回的数据条数，单页最大支持 200。 */
  Limit?: number;
  /** 满足查询条件的企业总数量。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelSealPolicyWorkflowUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 用印审批单的ID，可通过用印[申请回调](https://qian.tencent.com/developers/partner/callback_types_seals#%E4%B8%89-%E7%94%A8%E5%8D%B0%E7%94%B3%E8%AF%B7%E5%AE%A1%E6%89%B9%E7%8A%B6%E6%80%81%E9%80%9A%E7%9F%A5)获取。 */
  WorkflowInstanceId: string;
  /** 生成链接的类型：生成链接的类型**LongLink**：(默认)长链接，H5跳转到电子签小程序链接，链接有效期为1年**ShortLink**：H5跳转到电子签小程序链接，一般用于发送短信中带的链接，打开后进入腾讯电子签小程序，链接有效期为7天**App**：第三方APP或小程序跳转电子签小程序链接，一般用于贵方小程序或者APP跳转过来，打开后进入腾讯电子签小程序，链接有效期为1年 */
  Endpoint?: string;
}

declare interface DescribeChannelSealPolicyWorkflowUrlResponse {
  /** 用印审批小程序链接，链接类型（通过H5唤起小程序或通过APP跳转方式查看）。 */
  WorkflowUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtendedServiceAuthDetailRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 要查询的扩展服务类型。如下所示： AUTO_SIGN：企业静默签署BATCH_SIGN：批量签署 */
  ExtendServiceType: string;
  /** 指定每页返回的数据条数，和Offset参数配合使用。 注：`1.默认值为20，单页做大值为200。` */
  Limit?: number;
  /** 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。 注：`1.offset从0开始，即第一页为0。` `2.默认从第一页返回。` */
  Offset?: number;
}

declare interface DescribeExtendedServiceAuthDetailResponse {
  /** 服务授权的信息列表，根据查询类型返回特定扩展服务的开通和授权状况。 */
  AuthInfoDetail?: AuthInfoDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExtendedServiceAuthInfoRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经过实名认证 */
  Agent: Agent;
}

declare interface DescribeExtendedServiceAuthInfoResponse {
  /** 服务开通和授权的信息列表，根据查询类型返回所有支持的扩展服务开通和授权状况，或者返回特定扩展服务的开通和授权状况。 */
  AuthInfo?: ExtentServiceAuthInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowDetailInfoRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 需要查询的流程ID列表，最多可传入100个ID。如果要查询合同组的信息，则不需要传入此参数，只需传入 FlowGroupId 参数即可。 */
  FlowIds?: string[];
  /** 需要查询的流程组ID，如果传入此参数，则会忽略 FlowIds 参数。合同组由通过多模板创建合同组签署流程和通过多文件创建合同组签署流程等接口创建。 */
  FlowGroupId?: string;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface DescribeFlowDetailInfoResponse {
  /** 合同归属的第三方平台应用号ID */
  ApplicationId?: string;
  /** 合同归属的第三方平台子客企业OpenId */
  ProxyOrganizationOpenId?: string;
  /** 合同流程的详细信息。如果查询的是合同组信息，则返回的是组内所有子合同流程的详细信息。 */
  FlowInfo?: FlowDetailInfo[];
  /** 合同组ID，只有在查询合同组信息时才会返回。 */
  FlowGroupId?: string;
  /** 合同组名称，只有在查询合同组信息时才会返回。 */
  FlowGroupName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceUrlsByFlowsRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 需要下载的合同流程的ID, 至少需要1个, 做多50个 */
  FlowIds?: string[];
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
}

declare interface DescribeResourceUrlsByFlowsResponse {
  /** 合同流程PDF下载链接 */
  FlowResourceUrlInfos?: FlowResourceUrlInfo[];
  /** 如果某个序号的合同流程生成PDF下载链接成功, 对应序号的值为空如果某个序号的合同流程生成PDF下载链接失败, 对应序号的值为错误的原因 */
  ErrorMessages?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplatesRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 合同模板ID，为32位字符串。可以通过生成子客登录链接登录企业控制台, 在企业模板中得到合同模板ID。[点击查看模板Id在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/e988be12bf28a89b4716aed4502c2e02.png) */
  TemplateId?: string;
  /** 查询模板的内容**0**：（默认）模板列表及详情**1**：仅模板列表, 不会返回模板中的签署控件, 填写控件, 参与方角色列表等信息 */
  ContentType?: number;
  /** 合同模板ID数组，每一个合同模板ID为32位字符串, 最多支持100个模板的批量查询。注意: 1.` 此参数TemplateIds与TemplateId互为独立，若两者均传入，以TemplateId为准。`2. `请确保每个模板均正确且属于当前企业，若有任一模板不存在，则返回错误。`4. `若传递此参数，分页参数(Limit,Offset)无效`[点击查看模板Id在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/e988be12bf28a89b4716aed4502c2e02.png) */
  TemplateIds?: string[];
  /** 指定每页返回的数据条数，和Offset参数配合使用。注：`1.默认值为20，单页做大值为100。` */
  Limit?: number;
  /** 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。注：`1.offset从0开始，即第一页为0。``2.默认从第一页返回。` */
  Offset?: number;
  /** 模糊搜索的模板名称，注意是模板名的连续部分，长度不能超过200，可支持由中文、字母、数字和下划线组成字符串。 */
  TemplateName?: string;
  /** 对应第三方应用平台企业的模板ID，通过此值可以搜索由第三方应用平台模板ID下发或领取得到的子客模板列表。 */
  ChannelTemplateId?: string;
  /** 返回控件的范围, 是只返回发起方自己的还是所有参与方的**false**：（默认）只返回发起方控件**true**：返回所有参与方(包括发起方和签署方)控件 */
  QueryAllComponents?: boolean;
  /** 是否获取模板预览链接。**false**：不获取（默认）**true**：获取设置为true之后， 返回参数PreviewUrl，为模板的H5预览链接, 有效期5分钟。可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。 */
  WithPreviewUrl?: boolean;
  /** 是否获取模板的PDF文件链接。**false**：不获取（默认）**true**：获取设置为true之后， 返回参数PdfUrl，为模板PDF文件链接，有效期5分钟, 可以用于将PDF文件下载到本地注: `此功能需要开通功能白名单【第三方应用集成企业获取模版PDF下载链接】，使用前请联系对接的客户经理沟通。` */
  WithPdfUrl?: boolean;
  /** 操作者的信息 */
  Operator?: UserInfo;
  /** 用户合同类型id */
  UserFlowTypeId?: string;
}

declare interface DescribeTemplatesResponse {
  /** 模板详情列表数据 */
  Templates?: TemplateInfo[];
  /** 查询到的模板总数 */
  TotalCount?: number;
  /** 每页返回的数据条数 */
  Limit?: number;
  /** 查询结果分页返回，此处指定第几页。页码从0开始，即首页为0。 */
  Offset?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsageRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId */
  Agent: Agent;
  /** 查询日期范围的开始时间, 查询会包含此日期的数据 , 格式为yyyy-mm-dd (例如：2021-03-21)注: `查询日期范围区间长度大于90天`。 */
  StartDate: string;
  /** 查询日期范围的结束时间, 查询会包含此日期的数据 , 格式为yyyy-mm-dd (例如：2021-04-21)注: `查询日期范围区间长度大于90天`。 */
  EndDate: string;
  /** 是否汇总数据，默认不汇总。 **true** : 汇总数据, 即每个企业一条数据, 对日志范围内的数据相加 **false** : 不会总数据, 返回企业每日明细, 按日期返回每个企业的数据(如果企业对应天数没有操作则无此企业此日期的数据) */
  NeedAggregate?: boolean;
  /** 指定每页返回的数据条数，和Offset参数配合使用。注: `默认值为1000，单页做大值为1000` */
  Limit?: number;
  /** 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。注：`offset从0开始，即第一页为0。` */
  Offset?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface DescribeUsageResponse {
  /** 用量明细条数 */
  Total?: number;
  /** 用量明细 */
  Details?: UsageDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserFlowTypeRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。 此接口下面信息必填。 渠道应用标识: Agent.AppId 第三方平台子客企业标识: Agent.ProxyOrganizationOpenId 第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId 第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 搜索过滤的条件，本字段允许您通过指定模板 ID 或模板名称来进行查询。 模板的用户合同类型：Key设置为 user-flow-type-id ，Values为您想要查询的用户模版类型id列表。 */
  Filters?: Filter[];
  /** 查询绑定了模版的用户合同类型false（默认值），查询用户合同类型true，查询绑定了模版的用户合同类型 */
  QueryBindTemplate?: boolean;
}

declare interface DescribeUserFlowTypeResponse {
  /** 查询到的所有用户合同类型列表 */
  AllUserFlowTypes?: TemplateUserFlowType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDownloadFlowUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 程合同ID列表, 可将这些流程ID组织成合同组的形式, 下载时候每个文件夹会是一个zip压缩包, 每个文件夹最多20个合同, 所有文件夹最多50个合同如下列组织形式, 控制台下载页面点击下载按钮后, 会生成**2023采购合同.zip**和**2023入职合同.zip** 两个下载任务(注:`部分浏览器需要授权或不支持创建多下载任务`)**2023采购合同.zip**压缩包会有`yDwivUUckpor6wtoUuogwQHCAB0ES0pQ`和`yDwi8UUckpo5fz9cUqI6nGwcuTvt9YSh`两个合同的文件**2023入职合同.zip** 压缩包会有`yDwivUUckpor6wobUuogwQHvdGfvDi5K`的文件![image](	https://dyn.ess.tencent.cn/guide/capi/channel_GetDownloadFlowUrl_DownLoadFlows.png) */
  DownLoadFlows?: DownloadFlowInfo[];
  /** 操作者的信息，不用传 */
  Operator?: UserInfo;
}

declare interface GetDownloadFlowUrlResponse {
  /** 跳转控制台合同下载页面链接 , 5分钟之内有效，且只能访问一次 */
  DownLoadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExtendedServiceRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId第三方平台子客企业和员工必须已经过实名认证 */
  Agent: Agent;
  /** 扩展服务类型AUTO_SIGN 企业自动签（自动签署） OVERSEA_SIGN 企业与港澳台居民签署合同 MOBILE_CHECK_APPROVER 使用手机号验证签署方身份 DOWNLOAD_FLOW 授权渠道下载合同 AGE_LIMIT_EXPANSION 拓宽签署方年龄限制HIDE_OPERATOR_DISPLAY 隐藏合同经办人姓名 */
  ServiceType: string;
  /** 操作类型OPEN : 开通CLOSE : 关闭 */
  Operate: string;
  /** 链接跳转类型，支持以下类型WEIXINAPP : 短链直接跳转到电子签小程序 (默认值)APP : 第三方APP或小程序跳转电子签小程序WEIXIN_QRCODE_URL：直接跳转至电子签小程序的二维码链接，无需通过中转页。您需要自行将其转换为二维码，使用微信扫码后可直接进入。请注意，直接点击链接是无效的。 */
  Endpoint?: string;
}

declare interface ModifyExtendedServiceResponse {
  /** 操作跳转链接链接有效期： 跳转链接的有效期为24小时。没有返回链接的情形： 如果在操作时没有返回跳转链接，说明此次操作无需进行跳转，服务将会直接被开通或关闭。返回链接的情形： 当操作类型为OPEN（开通服务），并且扩展服务类型为AUTO_SIGN（ 企业自动签署）、DOWNLOAD_FLOW（授权渠道下载合同）时，系统将返回一个操作链接。收到操作链接后，贵方需主动联系超级管理员（超管）或法人。由超管或法人点击链接，以完成服务的开通操作。 */
  OperateUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFlowDeadlineRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。 */
  Agent: Agent;
  /** 合同流程ID，为32位字符串。建议开发者妥善保存此流程ID，以便于顺利进行后续操作。可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。 */
  FlowId: string;
  /** 签署流程或签署人新的签署截止时间，格式为Unix标准时间戳（秒） */
  Deadline: number;
  /** 签署方角色编号，为32位字符串若指定了此参数，则只调整签署流程中此签署人的签署截止时间，否则调整合同整体的签署截止时间（合同截止时间+发起时未设置签署人截止时间的参与人的签署截止时间）通过[用PDF文件创建签署流程](https://test.qian.tencent.cn/developers/partnerApis/startFlows/ChannelCreateFlowByFiles)发起合同，或通过[用模板创建签署流程](https://test.qian.tencent.cn/developers/partnerApis/startFlows/CreateFlowsByTemplates)时，返回参数[FlowApprovers](https://test.qian.tencent.cn/developers/partnerApis/dataTypes/#approveritem)会返回此信息，建议开发者妥善保存也可通过[获取合同信息](https://test.qian.tencent.cn/developers/partnerApis/flows/DescribeFlowDetailInfo)接口查询签署人的RecipientId编号 */
  RecipientId?: string;
}

declare interface ModifyFlowDeadlineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPartnerAutoSignAuthUrlRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 被授企业id/授权方企业id（即OrganizationId），如果是企业之间授权和AuthorizedOrganizationName二选一传入。注：`被授权企业必须和当前企业在同一应用号下` */
  AuthorizedOrganizationId?: string;
  /** 被授企业名称/授权方企业的名字，如果是企业之间授权和AuthorizedOrganizationId二选一传入即可。请确认该名称与企业营业执照中注册的名称一致。注: 1. 如果名称中包含英文括号()，请使用中文括号（）代替。2. 被授权企业必须和当前企业在同一应用号下 */
  AuthorizedOrganizationName?: string;
  /** 是否给平台应用授权true: 表示是，授权平台应用。在此情况下，无需设置AuthorizedOrganizationId和AuthorizedOrganizationName。false: （默认）表示否，不是授权平台应用。 注：授权给平台应用需要开通【基于子客授权第三方应用可文件发起子客自动签署】白名单，请联系运营经理开通。 */
  PlatformAppAuthorization?: boolean;
  /** 在处理授权关系时，授权的方向false（默认值）：表示我方授权他方。在这种情况下，AuthorizedOrganizationName 代表的是【被授权方】的企业名称，即接收授权的企业。true：表示他方授权我方。在这种情况下，AuthorizedOrganizationName 代表的是【授权方】的企业名称，即提供授权的企业。 */
  AuthToMe?: boolean;
}

declare interface ModifyPartnerAutoSignAuthUrlResponse {
  /** 授权链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。 */
  Url?: string;
  /** 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径 */
  MiniAppPath?: string;
  /** 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。 */
  ExpireTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OperateChannelTemplateRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId */
  Agent: Agent;
  /** 操作类型，可取值如下:SELECT: 查询DELETE: 删除UPDATE: 更新 */
  OperateType: string;
  /** 合同模板ID，为32位字符串。注: ` 此处为第三方应用平台模板库模板ID，非子客模板ID` */
  TemplateId: string;
  /** 第三方平台子客企业的唯一标识，支持批量(用,分割)， */
  ProxyOrganizationOpenIds?: string;
  /** 模板可见范围, 可以设置的值如下:**all**: 所有本第三方应用合作企业可见**part**: 指定的本第三方应用合作企业对应控制台的位置![image](https://qcloudimg.tencent-cloud.cn/raw/68b97812c68d6af77a5991e3bff5c790.png) */
  AuthTag?: string;
  /** 当OperateType=UPDATE时，可以通过设置此字段对模板启停用状态进行操作。0: 不修改模板可用状态1: 启用模板2: 停用模板启用后模板可以正常领取。停用后，推送方式为【自动推送】的模板则无法被子客使用，推送方式为【手动领取】的模板则无法出现被模板库被子客领用。如果Available更新失败，会直接返回错误。 */
  Available?: number;
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface OperateChannelTemplateResponse {
  /** 第三方应用平台的应用ID */
  AppId?: string;
  /** 合同模板ID */
  TemplateId?: string;
  /** 描述模板可见性更改的结果。all-success: 全部成功part-success: 部分成功,失败的会在FailMessageList中展示fail:全部失败, 失败的会在FailMessageList中展示 */
  OperateResult?: string;
  /** 模板可见范围:**all**: 所有本第三方应用合作企业可见**part**: 指定的本第三方应用合作企业 */
  AuthTag?: string;
  /** 第三方平台子客企业标识列表 */
  ProxyOrganizationOpenIds?: string[];
  /** 操作失败信息数组 */
  FailMessageList?: AuthFailMessage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OperateTemplateRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId（模板的归属企业）第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId （操作人） */
  Agent: Agent;
  /** 模板ID，为32位字符串。 */
  TemplateId: string;
  /** 操作类型，可取值如下:DELETE: 删除ENABLE: 启用DISABLE: 停用COPY: 复制新建 */
  OperateType: string;
  /** 模板名称，长度不超过64字符。模板复制时指定有效，若为空，则复制后模板名称为 **原模板名称_副本**。 */
  TemplateName?: string;
}

declare interface OperateTemplateResponse {
  /** 模板ID，为32位字符串，模板复制新建时返回 */
  TemplateId?: string;
  /** 模板名称，模板复制新建时返回 */
  TemplateName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PrepareFlowsRequest {
  /** 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。 */
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
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业必须已经经过实名认证 */
  Agent: Agent;
  /** 操作类型，对应的操作 **CREATE** :新增员工 **UPDATE** :修改员工（仅支持修改未实名员工的信息，如果已经实名并加入企业的员工基础信息修改需要到小程序中进行） **RESIGN** :离职员工 */
  OperatorType: string;
  /** 员工信息列表，最多支持200个 */
  ProxyOrganizationOperators: ProxyOrganizationOperator[];
  /** 暂未开放 */
  Operator?: UserInfo;
}

declare interface SyncProxyOrganizationOperatorsResponse {
  /** 同步的状态, 全部同步失败接口是接口会直接报错 **1** :全部成功 **2** :部分成功 */
  Status?: number;
  /** 同步失败员工ID及其失败原因 */
  FailedList?: SyncFailReason[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncProxyOrganizationRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId */
  Agent: Agent;
  /** 第三方平台子客企业名称，请确认该名称与企业营业执照中注册的名称一致。注: `如果名称中包含英文括号()，请使用中文括号（）代替。` */
  ProxyOrganizationName: string;
  /** 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M */
  BusinessLicense?: string;
  /** 第三方平台子客企业统一社会信用代码，最大长度200个字符 */
  UniformSocialCreditCode?: string;
  /** 第三方平台子客企业法定代表人的名字 */
  ProxyLegalName?: string;
  /** 暂未开放 */
  Operator?: UserInfo;
  /** 第三方平台子客企业法定代表人的证件类型，支持以下类型ID_CARD : 中国大陆居民身份证 (默认值)注: `现在仅支持ID_CARD中国大陆居民身份证类型` */
  ProxyLegalIdCardType?: string;
  /** 第三方平台子客企业法定代表人的证件号码, 应符合以下规则中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。 */
  ProxyLegalIdCardNumber?: string;
  /** 第三方平台子客企业详细住所，最大长度500个字符注：`需要符合省市区详情的格式例如： XX省XX市XX区街道具体地址` */
  ProxyAddress?: string;
}

declare interface SyncProxyOrganizationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFilesRequest {
  /** 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。此接口下面信息必填。渠道应用标识: Agent.AppId第三方平台子客企业标识: Agent.ProxyOrganizationOpenId第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId第三方平台子客企业和员工必须已经经过实名认证 */
  Agent: Agent;
  /** 文件对应业务类型,可以选择的类型如下 **TEMPLATE** : 此上传的文件用户生成合同模板，文件类型支持.pdf/.doc/.docx/.html格式，如果非pdf文件需要通过创建文件转换任务转换后才能使用 **DOCUMENT** : 此文件用来发起合同流程，文件类型支持.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html，如果非pdf文件需要通过创建文件转换任务转换后才能使用 */
  BusinessType: string;
  /** 上传文件内容数组，一次最多可上传20个文件。若上传多个文件，所有文件必须为相同类型，例如全部为PDF或全部为Word文件。不支持混合文件类型的上传。 */
  FileInfos?: UploadFile[];
  /** 操作者的信息 */
  Operator?: UserInfo;
}

declare interface UploadFilesResponse {
  /** 上传成功文件数量注: `如果一个文件上传失败, 则全部文件皆上传失败` */
  TotalCount?: number;
  /** 文件资源ID数组，每个文件资源ID为32位字符串。建议开发者保存此资源ID，后续创建合同或创建合同流程需此资源ID。注:`有效期一个小时（超过一小时后系统不定期清理，会有部分时间差）, 有效期内此文件id可以反复使用, 超过有效期无法使用` */
  FileIds?: string[];
  /** 对应上传文件的下载链接，过期时间5分钟 */
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
  /** 结束动态签署流程 {@link ArchiveDynamicFlowRequest} {@link ArchiveDynamicFlowResponse} */
  ArchiveDynamicFlow(data: ArchiveDynamicFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ArchiveDynamicFlowResponse>;
  /** 批量撤销合同流程 {@link ChannelBatchCancelFlowsRequest} {@link ChannelBatchCancelFlowsResponse} */
  ChannelBatchCancelFlows(data: ChannelBatchCancelFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelBatchCancelFlowsResponse>;
  /** 撤销合同流程 {@link ChannelCancelFlowRequest} {@link ChannelCancelFlowResponse} */
  ChannelCancelFlow(data: ChannelCancelFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCancelFlowResponse>;
  /** 取消一码多签签署码 {@link ChannelCancelMultiFlowSignQRCodeRequest} {@link ChannelCancelMultiFlowSignQRCodeResponse} */
  ChannelCancelMultiFlowSignQRCode(data: ChannelCancelMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCancelMultiFlowSignQRCodeResponse>;
  /** 撤销自动签开通链接 {@link ChannelCancelUserAutoSignEnableUrlRequest} {@link ChannelCancelUserAutoSignEnableUrlResponse} */
  ChannelCancelUserAutoSignEnableUrl(data: ChannelCancelUserAutoSignEnableUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCancelUserAutoSignEnableUrlResponse>;
  /** 获取批量撤销合同流程的腾讯电子签小程序链接 {@link ChannelCreateBatchCancelFlowUrlRequest} {@link ChannelCreateBatchCancelFlowUrlResponse} */
  ChannelCreateBatchCancelFlowUrl(data: ChannelCreateBatchCancelFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateBatchCancelFlowUrlResponse>;
  /** 获取H5批量签署或查看链接 {@link ChannelCreateBatchQuickSignUrlRequest} {@link ChannelCreateBatchQuickSignUrlResponse} */
  ChannelCreateBatchQuickSignUrl(data: ChannelCreateBatchQuickSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateBatchQuickSignUrlResponse>;
  /** 获取跳转至腾讯电子签小程序的批量签署链接 {@link ChannelCreateBatchSignUrlRequest} {@link ChannelCreateBatchSignUrlResponse} */
  ChannelCreateBatchSignUrl(data: ChannelCreateBatchSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateBatchSignUrlResponse>;
  /** 领取未归属的合同 {@link ChannelCreateBoundFlowsRequest} {@link ChannelCreateBoundFlowsResponse} */
  ChannelCreateBoundFlows(data: ChannelCreateBoundFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateBoundFlowsResponse>;
  /** 创建文件转换任务 {@link ChannelCreateConvertTaskApiRequest} {@link ChannelCreateConvertTaskApiResponse} */
  ChannelCreateConvertTaskApi(data: ChannelCreateConvertTaskApiRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateConvertTaskApiResponse>;
  /** 渠道版补充动态合同签署人接口 {@link ChannelCreateDynamicFlowApproverRequest} {@link ChannelCreateDynamicFlowApproverResponse} */
  ChannelCreateDynamicFlowApprover(data: ChannelCreateDynamicFlowApproverRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateDynamicFlowApproverResponse>;
  /** 获取常规模块嵌入页面链接 {@link ChannelCreateEmbedWebUrlRequest} {@link ChannelCreateEmbedWebUrlResponse} */
  ChannelCreateEmbedWebUrl(data: ChannelCreateEmbedWebUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateEmbedWebUrlResponse>;
  /** 补充签署流程签署人信息 {@link ChannelCreateFlowApproversRequest} {@link ChannelCreateFlowApproversResponse} */
  ChannelCreateFlowApprovers(data: ChannelCreateFlowApproversRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowApproversResponse>;
  /** 用PDF文件创建签署流程 {@link ChannelCreateFlowByFilesRequest} {@link ChannelCreateFlowByFilesResponse} */
  ChannelCreateFlowByFiles(data?: ChannelCreateFlowByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowByFilesResponse>;
  /** 通过多文件创建合同组签署流程 {@link ChannelCreateFlowGroupByFilesRequest} {@link ChannelCreateFlowGroupByFilesResponse} */
  ChannelCreateFlowGroupByFiles(data: ChannelCreateFlowGroupByFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowGroupByFilesResponse>;
  /** 通过多模板创建合同组签署流程 {@link ChannelCreateFlowGroupByTemplatesRequest} {@link ChannelCreateFlowGroupByTemplatesResponse} */
  ChannelCreateFlowGroupByTemplates(data: ChannelCreateFlowGroupByTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowGroupByTemplatesResponse>;
  /** 合同催办 {@link ChannelCreateFlowRemindsRequest} {@link ChannelCreateFlowRemindsResponse} */
  ChannelCreateFlowReminds(data: ChannelCreateFlowRemindsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowRemindsResponse>;
  /** 提交企业签署流程审批结果 {@link ChannelCreateFlowSignReviewRequest} {@link ChannelCreateFlowSignReviewResponse} */
  ChannelCreateFlowSignReview(data: ChannelCreateFlowSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowSignReviewResponse>;
  /** 获取用户H5签署链接 {@link ChannelCreateFlowSignUrlRequest} {@link ChannelCreateFlowSignUrlResponse} */
  ChannelCreateFlowSignUrl(data: ChannelCreateFlowSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateFlowSignUrlResponse>;
  /** 创建一码多签签署码 {@link ChannelCreateMultiFlowSignQRCodeRequest} {@link ChannelCreateMultiFlowSignQRCodeResponse} */
  ChannelCreateMultiFlowSignQRCode(data: ChannelCreateMultiFlowSignQRCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateMultiFlowSignQRCodeResponse>;
  /** 获取企业签署合同web页面 {@link ChannelCreateOrganizationBatchSignUrlRequest} {@link ChannelCreateOrganizationBatchSignUrlResponse} */
  ChannelCreateOrganizationBatchSignUrl(data: ChannelCreateOrganizationBatchSignUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateOrganizationBatchSignUrlResponse>;
  /** 生成渠道子客编辑企业信息二维码 {@link ChannelCreateOrganizationModifyQrCodeRequest} {@link ChannelCreateOrganizationModifyQrCodeResponse} */
  ChannelCreateOrganizationModifyQrCode(data: ChannelCreateOrganizationModifyQrCodeRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateOrganizationModifyQrCodeResponse>;
  /** 获取发起合同嵌入链接 {@link ChannelCreatePrepareFlowRequest} {@link ChannelCreatePrepareFlowResponse} */
  ChannelCreatePrepareFlow(data: ChannelCreatePrepareFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreatePrepareFlowResponse>;
  /** 获取发起合同组嵌入链接 {@link ChannelCreatePrepareFlowGroupRequest} {@link ChannelCreatePrepareFlowGroupResponse} */
  ChannelCreatePrepareFlowGroup(data: ChannelCreatePrepareFlowGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreatePrepareFlowGroupResponse>;
  /** 创建导入处方单个人印章 {@link ChannelCreatePreparedPersonalEsignRequest} {@link ChannelCreatePreparedPersonalEsignResponse} */
  ChannelCreatePreparedPersonalEsign(data: ChannelCreatePreparedPersonalEsignRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreatePreparedPersonalEsignResponse>;
  /** 发起解除协议 {@link ChannelCreateReleaseFlowRequest} {@link ChannelCreateReleaseFlowResponse} */
  ChannelCreateReleaseFlow(data: ChannelCreateReleaseFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateReleaseFlowResponse>;
  /** 创建角色 {@link ChannelCreateRoleRequest} {@link ChannelCreateRoleResponse} */
  ChannelCreateRole(data: ChannelCreateRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateRoleResponse>;
  /** 创建印章授权 {@link ChannelCreateSealPolicyRequest} {@link ChannelCreateSealPolicyResponse} */
  ChannelCreateSealPolicy(data: ChannelCreateSealPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateSealPolicyResponse>;
  /** 获取个人用户自动签的开通链接 {@link ChannelCreateUserAutoSignEnableUrlRequest} {@link ChannelCreateUserAutoSignEnableUrlResponse} */
  ChannelCreateUserAutoSignEnableUrl(data: ChannelCreateUserAutoSignEnableUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateUserAutoSignEnableUrlResponse>;
  /** 获取设置自动签印章小程序链接 {@link ChannelCreateUserAutoSignSealUrlRequest} {@link ChannelCreateUserAutoSignSealUrlResponse} */
  ChannelCreateUserAutoSignSealUrl(data: ChannelCreateUserAutoSignSealUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateUserAutoSignSealUrlResponse>;
  /** 绑定员工角色 {@link ChannelCreateUserRolesRequest} {@link ChannelCreateUserRolesResponse} */
  ChannelCreateUserRoles(data: ChannelCreateUserRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateUserRolesResponse>;
  /** 创建页面主题配置 {@link ChannelCreateWebThemeConfigRequest} {@link ChannelCreateWebThemeConfigResponse} */
  ChannelCreateWebThemeConfig(data: ChannelCreateWebThemeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelCreateWebThemeConfigResponse>;
  /** 删除角色 {@link ChannelDeleteRoleRequest} {@link ChannelDeleteRoleResponse} */
  ChannelDeleteRole(data: ChannelDeleteRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDeleteRoleResponse>;
  /** 删除员工绑定角色 {@link ChannelDeleteRoleUsersRequest} {@link ChannelDeleteRoleUsersResponse} */
  ChannelDeleteRoleUsers(data: ChannelDeleteRoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDeleteRoleUsersResponse>;
  /** 删除印章授权 {@link ChannelDeleteSealPoliciesRequest} {@link ChannelDeleteSealPoliciesResponse} */
  ChannelDeleteSealPolicies(data: ChannelDeleteSealPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDeleteSealPoliciesResponse>;
  /** 查询“子客账号”套餐消耗情况 {@link ChannelDescribeAccountBillDetailRequest} {@link ChannelDescribeAccountBillDetailResponse} */
  ChannelDescribeAccountBillDetail(data: ChannelDescribeAccountBillDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeAccountBillDetailResponse>;
  /** 查询渠道计费消耗情况 {@link ChannelDescribeBillUsageDetailRequest} {@link ChannelDescribeBillUsageDetailResponse} */
  ChannelDescribeBillUsageDetail(data: ChannelDescribeBillUsageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeBillUsageDetailResponse>;
  /** 查询企业员工列表 {@link ChannelDescribeEmployeesRequest} {@link ChannelDescribeEmployeesResponse} */
  ChannelDescribeEmployees(data: ChannelDescribeEmployeesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeEmployeesResponse>;
  /** 获取合同填写控件内容 {@link ChannelDescribeFlowComponentsRequest} {@link ChannelDescribeFlowComponentsResponse} */
  ChannelDescribeFlowComponents(data: ChannelDescribeFlowComponentsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeFlowComponentsResponse>;
  /** 查询子企业电子印章 {@link ChannelDescribeOrganizationSealsRequest} {@link ChannelDescribeOrganizationSealsResponse} */
  ChannelDescribeOrganizationSeals(data: ChannelDescribeOrganizationSealsRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeOrganizationSealsResponse>;
  /** 获取角色列表 {@link ChannelDescribeRolesRequest} {@link ChannelDescribeRolesResponse} */
  ChannelDescribeRoles(data: ChannelDescribeRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeRolesResponse>;
  /** 查询签署认证人脸视频 {@link ChannelDescribeSignFaceVideoRequest} {@link ChannelDescribeSignFaceVideoResponse} */
  ChannelDescribeSignFaceVideo(data: ChannelDescribeSignFaceVideoRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeSignFaceVideoResponse>;
  /** 查询个人用户开通自动签状态 {@link ChannelDescribeUserAutoSignStatusRequest} {@link ChannelDescribeUserAutoSignStatusResponse} */
  ChannelDescribeUserAutoSignStatus(data: ChannelDescribeUserAutoSignStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDescribeUserAutoSignStatusResponse>;
  /** 关闭个人自动签功能 {@link ChannelDisableUserAutoSignRequest} {@link ChannelDisableUserAutoSignResponse} */
  ChannelDisableUserAutoSign(data: ChannelDisableUserAutoSignRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelDisableUserAutoSignResponse>;
  /** 查询转换任务状态 {@link ChannelGetTaskResultApiRequest} {@link ChannelGetTaskResultApiResponse} */
  ChannelGetTaskResultApi(data: ChannelGetTaskResultApiRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelGetTaskResultApiResponse>;
  /** 更新角色 {@link ChannelModifyRoleRequest} {@link ChannelModifyRoleResponse} */
  ChannelModifyRole(data: ChannelModifyRoleRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelModifyRoleResponse>;
  /** 续期医疗自动签许可 {@link ChannelRenewAutoSignLicenseRequest} {@link ChannelRenewAutoSignLicenseResponse} */
  ChannelRenewAutoSignLicense(data: ChannelRenewAutoSignLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelRenewAutoSignLicenseResponse>;
  /** 更新印章状态 {@link ChannelUpdateSealStatusRequest} {@link ChannelUpdateSealStatusResponse} */
  ChannelUpdateSealStatus(data: ChannelUpdateSealStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelUpdateSealStatusResponse>;
  /** 合同验签 {@link ChannelVerifyPdfRequest} {@link ChannelVerifyPdfResponse} */
  ChannelVerifyPdf(data: ChannelVerifyPdfRequest, config?: AxiosRequestConfig): AxiosPromise<ChannelVerifyPdfResponse>;
  /** 批量操作企业初始化 {@link CreateBatchInitOrganizationUrlRequest} {@link CreateBatchInitOrganizationUrlResponse} */
  CreateBatchInitOrganizationUrl(data: CreateBatchInitOrganizationUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchInitOrganizationUrlResponse>;
  /** 创建企业批量认证链接-单链接 {@link CreateBatchOrganizationAuthorizationUrlRequest} {@link CreateBatchOrganizationAuthorizationUrlResponse} */
  CreateBatchOrganizationAuthorizationUrl(data: CreateBatchOrganizationAuthorizationUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchOrganizationAuthorizationUrlResponse>;
  /** 创建企业批量认证链接任务 {@link CreateBatchOrganizationRegistrationTasksRequest} {@link CreateBatchOrganizationRegistrationTasksResponse} */
  CreateBatchOrganizationRegistrationTasks(data: CreateBatchOrganizationRegistrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBatchOrganizationRegistrationTasksResponse>;
  /** 提交申请出证报告任务 {@link CreateChannelFlowEvidenceReportRequest} {@link CreateChannelFlowEvidenceReportResponse} */
  CreateChannelFlowEvidenceReport(data: CreateChannelFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChannelFlowEvidenceReportResponse>;
  /** 获取变更企业信息电子签小程序链接 {@link CreateChannelOrganizationInfoChangeUrlRequest} {@link CreateChannelOrganizationInfoChangeUrlResponse} */
  CreateChannelOrganizationInfoChangeUrl(data: CreateChannelOrganizationInfoChangeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChannelOrganizationInfoChangeUrlResponse>;
  /** 激活或者续期子企业 {@link CreateChannelSubOrganizationActiveRequest} {@link CreateChannelSubOrganizationActiveResponse} */
  CreateChannelSubOrganizationActive(data: CreateChannelSubOrganizationActiveRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChannelSubOrganizationActiveResponse>;
  /** 创建企业注销链接 {@link CreateCloseOrganizationUrlRequest} {@link CreateCloseOrganizationUrlResponse} */
  CreateCloseOrganizationUrl(data: CreateCloseOrganizationUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloseOrganizationUrlResponse>;
  /** 生成子客登录链接 {@link CreateConsoleLoginUrlRequest} {@link CreateConsoleLoginUrlResponse} */
  CreateConsoleLoginUrl(data: CreateConsoleLoginUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsoleLoginUrlResponse>;
  /** 创建员工信息变更链接 {@link CreateEmployeeChangeUrlRequest} {@link CreateEmployeeChangeUrlResponse} */
  CreateEmployeeChangeUrl(data: CreateEmployeeChangeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmployeeChangeUrlResponse>;
  /** 创建个人印章授权给企业使用的授权二维码 {@link CreateEmployeeQualificationSealQrCodeRequest} {@link CreateEmployeeQualificationSealQrCodeResponse} */
  CreateEmployeeQualificationSealQrCode(data: CreateEmployeeQualificationSealQrCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmployeeQualificationSealQrCodeResponse>;
  /** 获取签署存证证书查看二维码 {@link CreateFlowBlockchainEvidenceUrlRequest} {@link CreateFlowBlockchainEvidenceUrlResponse} */
  CreateFlowBlockchainEvidenceUrl(data: CreateFlowBlockchainEvidenceUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowBlockchainEvidenceUrlResponse>;
  /** 变更本企业待签合同的经办人 {@link CreateFlowForwardsRequest} {@link CreateFlowForwardsResponse} */
  CreateFlowForwards(data: CreateFlowForwardsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowForwardsResponse>;
  /** 提交合同组签署流程审批结果 {@link CreateFlowGroupSignReviewRequest} {@link CreateFlowGroupSignReviewResponse} */
  CreateFlowGroupSignReview(data: CreateFlowGroupSignReviewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowGroupSignReviewResponse>;
  /** 用模板创建签署流程 {@link CreateFlowsByTemplatesRequest} {@link CreateFlowsByTemplatesResponse} */
  CreateFlowsByTemplates(data: CreateFlowsByTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowsByTemplatesResponse>;
  /** 获取到电子签小程序创建法人章二维码 {@link CreateLegalSealQrCodeRequest} {@link CreateLegalSealQrCodeResponse} */
  CreateLegalSealQrCode(data?: CreateLegalSealQrCodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLegalSealQrCodeResponse>;
  /** 生成变更超管授权书链接 {@link CreateModifyAdminAuthorizationUrlRequest} {@link CreateModifyAdminAuthorizationUrlResponse} */
  CreateModifyAdminAuthorizationUrl(data: CreateModifyAdminAuthorizationUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateModifyAdminAuthorizationUrlResponse>;
  /** 生成企业授权书 {@link CreateOrganizationAuthFileRequest} {@link CreateOrganizationAuthFileResponse} */
  CreateOrganizationAuthFile(data: CreateOrganizationAuthFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrganizationAuthFileResponse>;
  /** 创建企业自动签授权链接 {@link CreatePartnerAutoSignAuthUrlRequest} {@link CreatePartnerAutoSignAuthUrlResponse} */
  CreatePartnerAutoSignAuthUrl(data: CreatePartnerAutoSignAuthUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePartnerAutoSignAuthUrlResponse>;
  /** 获取个人用户认证证书图片 {@link CreatePersonAuthCertificateImageRequest} {@link CreatePersonAuthCertificateImageResponse} */
  CreatePersonAuthCertificateImage(data: CreatePersonAuthCertificateImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonAuthCertificateImageResponse>;
  /** 创建企业电子印章 {@link CreateSealByImageRequest} {@link CreateSealByImageResponse} */
  CreateSealByImage(data: CreateSealByImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealByImageResponse>;
  /** 获取跳转至腾讯电子签小程序的签署链接 {@link CreateSignUrlsRequest} {@link CreateSignUrlsResponse} */
  CreateSignUrls(data: CreateSignUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSignUrlsResponse>;
  /** 批量清除未认证的企业认证流 {@link DeleteOrganizationAuthorizationsRequest} {@link DeleteOrganizationAuthorizationsResponse} */
  DeleteOrganizationAuthorizations(data: DeleteOrganizationAuthorizationsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOrganizationAuthorizationsResponse>;
  /** 查询企业批量认证状态 {@link DescribeBatchOrganizationRegistrationTasksRequest} {@link DescribeBatchOrganizationRegistrationTasksResponse} */
  DescribeBatchOrganizationRegistrationTasks(data: DescribeBatchOrganizationRegistrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchOrganizationRegistrationTasksResponse>;
  /** 查询子企业批量认证链接 {@link DescribeBatchOrganizationRegistrationUrlsRequest} {@link DescribeBatchOrganizationRegistrationUrlsResponse} */
  DescribeBatchOrganizationRegistrationUrls(data: DescribeBatchOrganizationRegistrationUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchOrganizationRegistrationUrlsResponse>;
  /** 查询批量撤销签署流程任务结果 {@link DescribeCancelFlowsTaskRequest} {@link DescribeCancelFlowsTaskResponse} */
  DescribeCancelFlowsTask(data: DescribeCancelFlowsTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCancelFlowsTaskResponse>;
  /** 获取出证报告任务执行结果 {@link DescribeChannelFlowEvidenceReportRequest} {@link DescribeChannelFlowEvidenceReportResponse} */
  DescribeChannelFlowEvidenceReport(data: DescribeChannelFlowEvidenceReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelFlowEvidenceReportResponse>;
  /** 查询企业信息 {@link DescribeChannelOrganizationsRequest} {@link DescribeChannelOrganizationsResponse} */
  DescribeChannelOrganizations(data: DescribeChannelOrganizationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelOrganizationsResponse>;
  /** 生成渠道子客用印申请审批链接 {@link DescribeChannelSealPolicyWorkflowUrlRequest} {@link DescribeChannelSealPolicyWorkflowUrlResponse} */
  DescribeChannelSealPolicyWorkflowUrl(data: DescribeChannelSealPolicyWorkflowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelSealPolicyWorkflowUrlResponse>;
  /** 查询企业扩展服务授权详情 {@link DescribeExtendedServiceAuthDetailRequest} {@link DescribeExtendedServiceAuthDetailResponse} */
  DescribeExtendedServiceAuthDetail(data: DescribeExtendedServiceAuthDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtendedServiceAuthDetailResponse>;
  /** 查询企业扩展服务授权信息 {@link DescribeExtendedServiceAuthInfoRequest} {@link DescribeExtendedServiceAuthInfoResponse} */
  DescribeExtendedServiceAuthInfo(data: DescribeExtendedServiceAuthInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExtendedServiceAuthInfoResponse>;
  /** 获取合同信息 {@link DescribeFlowDetailInfoRequest} {@link DescribeFlowDetailInfoResponse} */
  DescribeFlowDetailInfo(data: DescribeFlowDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowDetailInfoResponse>;
  /** 获取合同PDF下载链接 {@link DescribeResourceUrlsByFlowsRequest} {@link DescribeResourceUrlsByFlowsResponse} */
  DescribeResourceUrlsByFlows(data: DescribeResourceUrlsByFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceUrlsByFlowsResponse>;
  /** 查询模板信息列表 {@link DescribeTemplatesRequest} {@link DescribeTemplatesResponse} */
  DescribeTemplates(data: DescribeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplatesResponse>;
  /** 合同消耗数量查询 {@link DescribeUsageRequest} {@link DescribeUsageResponse} */
  DescribeUsage(data: DescribeUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsageResponse>;
  /** 查询用户合同类型 {@link DescribeUserFlowTypeRequest} {@link DescribeUserFlowTypeResponse} */
  DescribeUserFlowType(data: DescribeUserFlowTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserFlowTypeResponse>;
  /** 获取控制台下载合同页面跳转链接 {@link GetDownloadFlowUrlRequest} {@link GetDownloadFlowUrlResponse} */
  GetDownloadFlowUrl(data: GetDownloadFlowUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GetDownloadFlowUrlResponse>;
  /** 管理企业扩展服务 {@link ModifyExtendedServiceRequest} {@link ModifyExtendedServiceResponse} */
  ModifyExtendedService(data: ModifyExtendedServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExtendedServiceResponse>;
  /** 修改签署流程截止时间 {@link ModifyFlowDeadlineRequest} {@link ModifyFlowDeadlineResponse} */
  ModifyFlowDeadline(data: ModifyFlowDeadlineRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFlowDeadlineResponse>;
  /** 更新企业自动签授权链接 {@link ModifyPartnerAutoSignAuthUrlRequest} {@link ModifyPartnerAutoSignAuthUrlResponse} */
  ModifyPartnerAutoSignAuthUrl(data: ModifyPartnerAutoSignAuthUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPartnerAutoSignAuthUrlResponse>;
  /** 第三方应用模板库管理 {@link OperateChannelTemplateRequest} {@link OperateChannelTemplateResponse} */
  OperateChannelTemplate(data: OperateChannelTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<OperateChannelTemplateResponse>;
  /** 企业模板管理 {@link OperateTemplateRequest} {@link OperateTemplateResponse} */
  OperateTemplate(data: OperateTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<OperateTemplateResponse>;
  /** @deprecated 准备待发起文件 {@link PrepareFlowsRequest} {@link PrepareFlowsResponse} */
  PrepareFlows(data: PrepareFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<PrepareFlowsResponse>;
  /** 同步企业信息 {@link SyncProxyOrganizationRequest} {@link SyncProxyOrganizationResponse} */
  SyncProxyOrganization(data: SyncProxyOrganizationRequest, config?: AxiosRequestConfig): AxiosPromise<SyncProxyOrganizationResponse>;
  /** 企业员工新增或离职 {@link SyncProxyOrganizationOperatorsRequest} {@link SyncProxyOrganizationOperatorsResponse} */
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
