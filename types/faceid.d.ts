/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 疑似攻击风险详情 */
declare interface AttackRiskDetail {
  /** 疑似的攻击痕迹类型SuspectedSpoofingAttack：翻拍攻击SuspectedSynthesisImage：疑似合成图片SuspectedSynthesisVideo：疑似合成视频SuspectedeAnomalyAttack：人脸特征疑似非真人SuspectedAdversarialAttack：疑似对抗样本攻击SuspectedBlackIndustry：疑似黑产批量模版攻击SuspectedWatermark：疑似存在水印 */
  Type?: string | null;
}

/** 计费详情 */
declare interface ChargeDetail {
  /** 一比一时间时间戳，13位。 */
  ReqTime?: string;
  /** 一比一请求的唯一标记。 */
  Seq?: string;
  /** 一比一时使用的、脱敏后的身份证号。 */
  IdCard?: string;
  /** 已废弃。请使用“IdCard”字段 */
  Idcard?: string;
  /** 一比一时使用的、脱敏后的姓名。 */
  Name?: string;
  /** 一比一的相似度。0-100，保留2位小数。 */
  Sim?: string;
  /** 本次详情是否收费。 */
  IsNeedCharge?: boolean;
  /** 收费类型，比对、核身、混合部署。 */
  ChargeType?: string;
  /** 本次活体一比一最终结果。 */
  ErrorCode?: string;
  /** 本次活体一比一最终结果描述。 */
  ErrorMessage?: string;
}

/** 活体一比一详情 */
declare interface DetectDetail {
  /** 请求时间戳。 */
  ReqTime?: string | null;
  /** 本次活体一比一请求的唯一标记。 */
  Seq?: string | null;
  /** 参与本次活体一比一的身份证号。 */
  Idcard?: string | null;
  /** 参与本次活体一比一的姓名。 */
  Name?: string | null;
  /** 本次活体一比一的相似度。 */
  Sim?: string | null;
  /** 本次活体一比一是否收费 */
  IsNeedCharge?: boolean | null;
  /** 本次活体一比一最终结果。0为成功 */
  Errcode?: number | null;
  /** 本次活体一比一最终结果描述。（仅描述用，文案更新时不会通知。） */
  Errmsg?: string | null;
  /** 本次活体结果。0为成功 */
  Livestatus?: number | null;
  /** 本次活体结果描述。（仅描述用，文案更新时不会通知。） */
  Livemsg?: string | null;
  /** 本次一比一结果。0为成功 */
  Comparestatus?: number | null;
  /** 本次一比一结果描述。（仅描述用，文案更新时不会通知。） */
  Comparemsg?: string | null;
  /** 比对库源类型。包括：公安商业库；业务方自有库（用户上传照片、客户的混合库、混合部署库）；二次验证库；人工审核库； */
  CompareLibType?: string | null;
  /** 枚举活体检测类型：0：未知1：数字活体2：动作活体3：静默活体4：一闪活体（动作+光线） */
  LivenessMode?: number | null;
}

/** 核身最佳帧信息。 */
declare interface DetectInfoBestFrame {
  /** 活体比对最佳帧Base64编码。 */
  BestFrame?: string | null;
  /** 自截帧Base64编码数组。 */
  BestFrames?: string[] | null;
}

/** 核身身份证图片信息。 */
declare interface DetectInfoIdCardData {
  /** OCR正面照片的base64编码。 */
  OcrFront?: string | null;
  /** OCR反面照片的base64编码。 */
  OcrBack?: string | null;
  /** 旋转裁边后的正面照片base64编码。 */
  ProcessedFrontImage?: string | null;
  /** 旋转裁边后的背面照片base64编码。 */
  ProcessedBackImage?: string | null;
  /** 身份证正面人像图base64编码。 */
  Avatar?: string | null;
  /** 身份证人像面告警码。- 开启身份证告警功能后才会返回。- 返回数组中可能出现的告警码如下： - -9100 身份证有效日期不合法告警。 - -9101 身份证边框不完整告警。 - -9102 身份证复印件告警。 - -9103 身份证翻拍告警。 - -9105 身份证框内遮挡告警。 - -9104 临时身份证告警。 - -9106 身份证 PS 告警（疑似存在PS痕迹）。 - -9107 身份证反光告警。 */
  WarnInfos?: number[] | null;
  /** 身份证国徽面告警码。- 开启身份证告警功能后才会返回。- 返回数组中可能出现的告警码如下： - -9100 身份证有效日期不合法告警， - -9101 身份证边框不完整告警， - -9102 身份证复印件告警， - -9103 身份证翻拍告警， - -9105 身份证框内遮挡告警， - -9104 临时身份证告警， - -9106 身份证 PS 告警（疑似存在PS痕迹）， - -9107 身份证反光告警。 */
  BackWarnInfos?: number[] | null;
}

/** 核身文本信息。 */
declare interface DetectInfoText {
  /** 本次流程最终验证结果。- 取值范围：0为成功。- 仅包含活体人脸核身结果，不包含意愿核身结果。 */
  ErrCode?: number | null;
  /** 本次流程最终验证结果描述。- 仅描述用，文案更新时不会通知。 */
  ErrMsg?: string | null;
  /** 本次验证使用的身份证号。 */
  IdCard?: string | null;
  /** 用户认证时使用的证件号码类型。- 取值范围： 0：二代身份证的证件号码。 1：港澳台居住证的证件号码。 2：其他（核验使用的证件号码非合法身份号码）。 */
  UseIDType?: number | null;
  /** 本次验证使用的姓名。 */
  Name?: string | null;
  /** 身份校验环节识别结果：民族。 */
  OcrNation?: string | null;
  /** 身份校验环节识别结果：家庭住址。 */
  OcrAddress?: string | null;
  /** 身份校验环节识别结果：生日。- 格式为：YYYY/M/D */
  OcrBirth?: string | null;
  /** 身份校验环节识别结果：签发机关。 */
  OcrAuthority?: string | null;
  /** 身份校验环节识别结果：有效日期。- 格式为：YYYY.MM.DD-YYYY.MM.DD。 */
  OcrValidDate?: string | null;
  /** 身份校验环节识别结果：姓名。 */
  OcrName?: string | null;
  /** 身份校验环节识别结果：身份证号。 */
  OcrIdCard?: string | null;
  /** 身份校验环节识别结果：性别。 */
  OcrGender?: string | null;
  /** 身份校验环节采用的信息上传方式。- 取值有"NFC"、"OCR"、"手动输入"、"其他" */
  IdInfoFrom?: string | null;
  /** 本次流程最终活体结果。- 0为成功 */
  LiveStatus?: number | null;
  /** 本次流程最终活体结果描述。- 仅描述用，文案更新时不会通知。 */
  LiveMsg?: string | null;
  /** 本次流程最终一比一结果。- 0为成功 */
  Comparestatus?: number | null;
  /** 本次流程最终一比一结果描述。- 仅描述用，文案更新时不会通知。 */
  Comparemsg?: string | null;
  /** 本次流程活体一比一的分数。- 取值范围 [0.00, 100.00]。- 相似度大于等于70时才判断为同一人，也可根据具体场景自行调整阈值。- 阈值70的误通过率为千分之一，阈值80的误通过率是万分之一。 */
  Sim?: string | null;
  /** 地理位置经纬度。 */
  Location?: string | null;
  /** Auth接口带入额外信息。 */
  Extra?: string | null;
  /** 本次流程进行的活体一比一流水。 */
  LivenessDetail?: DetectDetail[] | null;
  /** 描述当前请求活体阶段被拒绝的详细原因，该参数仅限PLUS版本核身服务返回。- 详情如下： 01-用户全程闭眼 02-用户未完成指定动作 03-疑似翻拍攻击 04-疑似合成攻击 05-疑似黑产模版 06-疑似存在水印 07-反光校验未通过 08-疑似中途换人 09-人脸质量过差 10-距离校验不通过 11-疑似对抗样本攻击 12-嘴巴区域疑似存在攻击痕迹 13-眼睛区域疑似存在攻击痕迹 14-眼睛或嘴巴被遮挡 */
  LivenessInfoTag?: string[] | null;
  /** 手机号码。 */
  Mobile?: string | null;
  /** 本次流程最终比对库源类型。- 取值范围： 权威库。 业务方自有库（用户上传照片、客户的混合库、混合部署库）。 二次验证库。 人工审核库。 */
  CompareLibType?: string | null;
  /** 本次流程最终活体类型。- 取值范围： 0：未知 1：数字活体 2：动作活体 3：静默活体 4：一闪活体（动作+光线） 5：远近活体 */
  LivenessMode?: number | null;
  /** nfc重复计费requestId列表。 */
  NFCRequestIds?: string[] | null;
  /** nfc重复计费计数。 */
  NFCBillingCounts?: number | null;
  /** 港澳台居住证通行证号码。 */
  PassNo?: string | null;
  /** 港澳台居住证签发次数。 */
  VisaNum?: string | null;
}

/** 核身视频信息。 */
declare interface DetectInfoVideoData {
  /** 活体视频的base64编码。 */
  LivenessVideo?: string | null;
  /** 当次token中所有用户活体视频的COS存储路径，仅当您开启数据存储服务且“IsReturnAllVideo”入参取值为true 时返回。 */
  LivenessVideos?: VideoDetailData[] | null;
}

/** Eid出参，包括商户方用户的标识和加密的用户姓名身份证信息。 */
declare interface EidInfo {
  /** 商户方 appeIDcode 的数字证书。 */
  EidCode?: string;
  /** Eid中心针对商户方EidCode的电子签名。 */
  EidSign?: string;
  /** 商户方公钥加密的会话密钥的base64字符串，[指引详见](https://cloud.tencent.com/document/product/1007/63370)。 */
  DesKey?: string;
  /** 会话密钥sm2加密后的base64字符串，[指引详见](https://cloud.tencent.com/document/product/1007/63370)。 */
  UserInfo?: string;
}

/** 敏感数据加密 */
declare interface Encryption {
  /** 在使用加密服务时，填入要被加密的字段。本接口中可填入加密后的一个或多个字段 */
  EncryptList: string[] | null;
  /** 加密后的对称密钥，关于密钥的生成和使用请查阅数据加密 文档。 */
  CiphertextBlob: string | null;
  /** 有加密需求的用户，传入CBC加密的初始向量（客户自定义字符串，长度16字符）。 */
  Iv: string | null;
  /** 加密使用的算法（支持'AES-256-CBC'、'SM4-GCM'），不传默认为'AES-256-CBC' */
  Algorithm?: string | null;
  /** SM4-GCM算法生成的消息摘要（校验消息完整性时使用） */
  TagList?: string[] | null;
}

/** 额外的详细信息 */
declare interface ExtraInfo {
  /** 命中模板的详细信息，仅返回命中的相似度最高的模板信息 */
  RetrievalLivenessExtraInfo?: RetrievalLivenessExtraInfo[] | null;
}

/** 获取token时的配置 */
declare interface GetEidTokenConfig {
  /** 姓名身份证输入方式。- 取值范围：1：传身份证正反面OCR。2：传身份证正面OCR。3：用户手动输入。4：客户后台传入。- 默认值：1。- 注意：使用OCR时仅支持用户修改结果中的姓名。 */
  InputType?: string;
  /** 是否使用意愿核身。- 默认不使用。- 注意：如开启使用，则计费标签按【意愿核身】计费标签计价；如不开启，则计费标签按【E证通】计费标签计价，价格详见：[价格说明](https://cloud.tencent.com/document/product/1007/56804)。 */
  UseIntentionVerify?: boolean;
  /** 意愿核身模式。- 取值范围：1：语音朗读模式。2：语音问答模式。3：点头确认模式。- 默认值为1。 */
  IntentionMode?: string;
  /** 意愿核身朗读模式使用的文案。- 若未使用意愿核身朗读功能，该字段无需传入。- 默认为空，最长可接受120的字符串长度。 */
  IntentionVerifyText?: string;
  /** 意愿核身问答模式的配置列表。- 问答模式支持1-10轮（不超过10轮）的意愿确认。 */
  IntentionQuestions?: IntentionQuestion[];
  /** 意愿核身（点头确认模式）使用的文案。- 若未使用意愿核身（点头确认模式），则该字段无需传入。- 默认为空，最长可接受150的字符串长度。- 点头确认模式支持1-10轮（不超过10轮）的意愿确认。 */
  IntentionActions?: IntentionActionConfig[];
  /** 意愿核身过程中识别用户的回答意图。- 开启后除了IntentionQuestions的Answers列表中的标准回答会通过，近似意图的回答也会通过。- 默认开启。 */
  IntentionRecognition?: boolean;
  /** 是否支持港澳台居住证识别。 */
  IsSupportHMTResidentPermitOCR?: boolean;
  /** 用户语音回答过程中是否开启张嘴识别检测。- 默认不开启。- 仅在意愿核身问答模式中使用。 */
  MouthOpenRecognition?: boolean;
  /** 意愿核身语音播报速度。- 配置后问答模式和点头模式的语音播报环节都会生效。- 默认值为0。- 取值范围： 0：智能语速（根据播报文案的长度自动调整语音播报速度）。1：固定1倍速。2：固定1.2倍速。3：固定1.5倍速。 */
  Speed?: number;
}

/** 意愿核身（点头确认模式）配置 */
declare interface IntentionActionConfig {
  /** 点头确认模式下，系统语音播报使用的问题文本，问题最大长度为150个字符。 */
  Text: string;
}

/** 意愿核身点头确认模式结果 */
declare interface IntentionActionResult {
  /** 意愿核身错误码：0: "成功" -1: "参数错误" -2: "系统异常" -101: "请保持人脸在框内" -102: "检测到多张人脸" -103: "人脸检测失败" -104: "人脸检测不完整" -105: "请勿遮挡眼睛" -106: "请勿遮挡嘴巴" -107: "请勿遮挡鼻子" -201: "人脸比对相似度低" -202: "人脸比对失败" -301: "意愿核验不通过" -800: "前端不兼容错误" -801: "用户未授权摄像头和麦克风权限" -802: "核验流程异常中断，请勿切屏或进行其他操作" -803: "用户主动关闭链接/异常断开链接" -804: "用户当前网络不稳定，请重试" -998: "系统数据异常" -999: "系统未知错误，请联系人工核实" 若在人脸核身过程失败、未进入意愿确认过程，则该参数返回为空，请参考人脸核身错误码结果（DetectInfoText.ErrCode) */
  FinalResultDetailCode?: number | null;
  /** 意愿核身错误信息 */
  FinalResultMessage?: string | null;
  /** 意愿核身结果详细数据，与每段点头确认过程一一对应 */
  Details?: IntentionActionResultDetail[] | null;
}

/** 意愿核身点头确认模式结果详细数据 */
declare interface IntentionActionResultDetail {
  /** 视频base64编码（其中包含全程提示文本和点头音频，mp4格式） */
  Video?: string | null;
  /** 屏幕截图base64编码列表 */
  ScreenShot?: string[] | null;
}

/** 意愿核身过程中播报的问题文本、用户回答的标准文本。 */
declare interface IntentionQuestion {
  /** 当选择语音问答模式时，系统自动播报的问题文本。- 最大长度为150个字符。 */
  Question: string;
  /** 当选择语音问答模式时，用于判断用户回答是否通过的标准答案列表。- 传入后可自动判断用户回答文本是否在标准文本列表中。- 列表长度最大为50，单个答案长度限制10个字符。 */
  Answers: string[];
}

/** 意愿核身问答模式结果。 */
declare interface IntentionQuestionResult {
  /** 意愿核身错误码。- 取值范围： 0: "成功" -1: "参数错误" -2: "系统异常" -101: "请保持人脸在框内" -102: "检测到多张人脸" -103: "人脸检测失败" -104: "人脸检测不完整" -105: "请勿遮挡眼睛" -106: "请勿遮挡嘴巴" -107: "请勿遮挡鼻子" -201: "人脸比对相似度低" -202: "人脸比对失败" -301: "意愿核验不通过" -302: "用户回答阶段未检测到张嘴动作" -800: "前端不兼容错误" -801: "用户未授权摄像头和麦克风权限" -802: "核验流程异常中断，请勿切屏或进行其他操作" -803: "用户主动关闭链接/异常断开链接" -804: "用户当前网络不稳定，请重试" -998: "系统数据异常" -999: "系统未知错误，请联系人工核实" - 若在人脸核身过程失败、未进入意愿确认过程，则该参数返回为空，请参考人脸核身错误码结果（DetectInfoText.ErrCode) */
  FinalResultDetailCode?: number | null;
  /** 意愿核身错误信息。 */
  FinalResultMessage?: string | null;
  /** 视频base64。- 其中包含全程问题和回答音频，mp4格式。 */
  Video?: string | null;
  /** 屏幕截图base64列表。 */
  ScreenShot?: string[] | null;
  /** 和答案匹配结果列表。- 取值范围（0：成功；-1：不匹配） */
  ResultCode?: string[] | null;
  /** 回答问题语音识别结果列表。 */
  AsrResult?: string[] | null;
  /** 答案录音音频。 */
  Audios?: string[] | null;
  /** 意愿核身最终结果。- 取值范围：0：认证通过。-1：认证未通过。-2：浏览器内核不兼容，无法进行意愿校验。- 建议使用“FinalResultDetailCode”参数获取详细的错误码信息。 */
  FinalResultCode?: string | null;
}

/** 意愿核身相关结果。 */
declare interface IntentionVerifyData {
  /** 意愿确认环节中录制的视频（base64）。- 若不存在则为空字符串。 */
  IntentionVerifyVideo?: string | null;
  /** 意愿确认环节中用户语音转文字的识别结果。- 若不存在则为空字符串。 */
  AsrResult?: string | null;
  /** 意愿确认环节的结果码。- 当该结果码为0时，语音朗读的视频与语音识别结果才会返回。 */
  ErrorCode?: number | null;
  /** 意愿确认环节的结果信息。 */
  ErrorMessage?: string | null;
  /** 意愿确认环节中录制视频的最佳帧（base64）。- 若不存在则为空字符串。 */
  IntentionVerifyBestFrame?: string | null;
  /** 本次流程用户语音与传入文本比对的相似度分值，取值范围 [0.00, 100.00]。只有配置了相似度阈值后才进行语音校验并返回相似度分值。 */
  AsrResultSimilarity?: string | null;
}

/** 模版检索详细信息 */
declare interface RetrievalLivenessExtraInfo {
  /** 命中的模版类型，其中Common-公共库；Auto-自动聚类库；Owner-自建模版库 */
  HitGroup?: string | null;
  /** 命中的相似度 */
  SimilarityScore?: number | null;
  /** 命中的模板id */
  HitTemplate?: string | null;
}

/** RuleId相关配置 */
declare interface RuleIdConfig {
  /** 意愿核身过程中识别用户的回答意图，开启后除了IntentionQuestions的Answers列表中的标准回答会通过，近似意图的回答也会通过，默认开启。 */
  IntentionRecognition?: boolean;
  /** 意愿核身类型，默认为0：0：问答模式，DetectAuth接口需要传入IntentionQuestions字段；1：点头模式，DetectAuth接口需要传入IntentionActions字段； */
  IntentionType?: number;
  /** 用户语音回答过程中是否开启张嘴识别检测，默认不开启，仅在意愿核身问答模式中使用。 */
  MouthOpenRecognition?: boolean;
  /** 意愿核身语音播报速度，配置后问答模式和点头模式的语音播报环节都会生效，默认值为0：0：智能语速（根据播报文案的长度自动调整语音播报速度）1：固定1倍速2：固定1.2倍速3：固定1.5倍速 */
  Speed?: number;
}

/** 核身过程视频信息。 */
declare interface VideoDetailData {
  /** 本次活体一比一请求的唯一标记。 */
  Seq?: string | null;
  /** 活体视频的base64编码。 */
  Video?: string | null;
}

/** 账单详情 */
declare interface WeChatBillDetail {
  /** token */
  BizToken?: string;
  /** 本token收费次数 */
  ChargeCount?: number;
  /** 本token计费详情 */
  ChargeDetails?: ChargeDetail[];
  /** 业务RuleId */
  RuleId?: string;
}

declare interface BankCard2EVerificationRequest {
  /** 姓名。 */
  Name: string;
  /** 银行卡。 */
  BankCard: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface BankCard2EVerificationResponse {
  /** 认证结果码。- 计费结果码： '0': '认证通过'。 '-1': '认证未通过'。 '-4': '持卡人信息有误'。 '-5': '未开通无卡支付'。 '-6': '此卡被没收'。 '-7': '无效卡号'。 '-8': '此卡无对应发卡行'。 '-9': '该卡未初始化或睡眠卡'。 '-10': '作弊卡、吞卡'。 '-11': '此卡已挂失'。 '-12': '该卡已过期'。 '-13': '受限制的卡'。 '-14': '密码错误次数超限'。 '-15': '发卡行不支持此交易'。 '-18': '卡状态异常或卡号错误'。- 不计费结果码： '-2': '姓名校验不通过'。 '-3': '银行卡号格式有误'。 '-16': '验证中心服务繁忙'。 '-17': '验证次数超限，请次日重试'。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BankCard4EVerificationRequest {
  /** 姓名。 */
  Name: string;
  /** 银行卡。 */
  BankCard: string;
  /** 手机号码。 */
  Phone: string;
  /** 开户证件号。- 与CertType参数的证件类型一致，如：身份证，则传入身份证号。 */
  IdCard: string;
  /** 证件类型。- 请确认该证件为开户时使用的证件类型，未用于开户的证件信息不支持验证。- 目前默认为0：身份证，其他证件类型暂不支持。 */
  CertType?: number;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号、手机号、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface BankCard4EVerificationResponse {
  /** 认证结果码。- 收费结果码：'0': '认证通过'。'-1': '认证未通过'。'-6': '持卡人信息有误'。'-7': '未开通无卡支付'。'-8': '此卡被没收'。'-9': '无效卡号'。'-10': '此卡无对应发卡行'。'-11': '该卡未初始化或睡眠卡'。'-12': '作弊卡、吞卡'。'-13': '此卡已挂失'。'-14': '该卡已过期'。'-15': '受限制的卡'。'-16': '密码错误次数超限'。'-17': '发卡行不支持此交易'。'-21': '卡状态异常或卡号错误'。- 不收费结果码：'-2': '姓名校验不通过'。'-3': '身份证号码有误'。'-4': '银行卡号格式有误'。'-5': '手机号码不合法'。'-18': '验证中心服务繁忙'。'-19': '验证次数超限，请次日重试'。'-20': '该证件号暂不支持核验，当前仅支持二代身份证'。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BankCardVerificationRequest {
  /** 开户证件号。- 与CertType参数的证件类型一致，如：身份证，则传入身份证号。 */
  IdCard: string;
  /** 姓名。 */
  Name: string;
  /** 银行卡。 */
  BankCard: string;
  /** 证件类型。- 请确认该证件为开户时使用的证件类型，未用于开户的证件信息不支持验证。- 目前默认：0 身份证，其他证件类型暂不支持。 */
  CertType?: number;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface BankCardVerificationResponse {
  /** 认证结果码。- 收费结果码：'0': '认证通过'。'-1': '认证未通过'。'-5': '持卡人信息有误'。'-6': '未开通无卡支付'。'-7': '此卡被没收'。'-8': '无效卡号'。'-9': '此卡无对应发卡行'。'-10': '该卡未初始化或睡眠卡'。'-11': '作弊卡、吞卡'。'-12': '此卡已挂失'。'-13': '该卡已过期'。'-14': '受限制的卡'。'-15': '密码错误次数超限'。'-16': '发卡行不支持此交易'。'-20': '卡状态异常或卡号错误'。- 不收费结果码：'-2': '姓名校验不通过'。'-3': '身份证号码有误'。'-4': '银行卡号格式有误'。'-17': '验证中心服务繁忙'。'-18': '验证次数超限，请次日重试'。'-19': '该证件号暂不支持核验，当前仅支持二代身份证'。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckBankCardInformationRequest {
  /** 银行卡号。 */
  BankCard: string;
  /** 敏感数据加密信息。- 对传入信息（银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface CheckBankCardInformationResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 查询成功-1: 未查到信息-5: 卡号无效- 不收费结果码：-2：验证中心服务繁忙-3：银行卡不存在-4：认证次数超过当日限制，请次日重试-6: 暂不支持该银行卡种 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 开户行。 */
  AccountBank?: string;
  /** 卡性质。- 取值范围：1：借记卡。2：贷记卡。3：预付费卡。4：准贷记卡 */
  AccountType?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckEidTokenStatusRequest {
  /** E证通流程的唯一标识，调用[GetEidToken](https://cloud.tencent.com/document/product/1007/54089)接口时生成。 */
  EidToken: string;
}

declare interface CheckEidTokenStatusResponse {
  /** 状态。- init：EidToken未验证。- doing: EidToken验证中。- finished: EidToken验证完成。- timeout: EidToken已超时。 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckIdCardInformationRequest {
  /** 身份证人像面的 Base64 值。- 支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。- 支持的图片大小：所下载图片经Base64编码后不超过 7M。- 请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。- ImageBase64、ImageUrl二者必须提供其中之一。若都提供了，则按照ImageUrl>ImageBase64的优先级使用参数。 */
  ImageBase64?: string;
  /** 身份证人像面的 Url 地址- 支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。- 支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。- 图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。- 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 配置。- 以下可选字段均为bool 类型，默认false。CopyWarn，复印件告警。BorderCheckWarn，边框和框内遮挡告警。ReshootWarn，翻拍告警。DetectPsWarn，PS检测告警（疑似存在PS痕迹）。TempIdWarn，临时身份证告警。Quality，图片质量告警（评价图片模糊程度）。- SDK 设置方式参考：Config = Json.stringify({"CopyWarn":true,"ReshootWarn":true})。- API 3.0 Explorer 设置方式参考：Config = {"CopyWarn":true,"ReshootWarn":true}。 */
  Config?: string;
  /** 是否需要对返回中的敏感信息进行加密。- 默认false。- 敏感信息包括：Response.IdNum、Response.Name。 */
  IsEncrypt?: boolean;
  /** 是否需要对响应体加密。 */
  IsEncryptResponse?: boolean;
  /** 是否需要对返回中的敏感信息进行加密,需指定加密算法Algorithm、CBC加密的初始向量、加密后的对称密钥。 */
  Encryption?: Encryption;
}

declare interface CheckIdCardInformationResponse {
  /** 相似度。- 取值范围 [0.00, 100.00]。- 推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）。 */
  Sim?: number;
  /** 业务错误码。- 成功情况返回Success。- 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 姓名。 */
  Name?: string;
  /** 性别。 */
  Sex?: string;
  /** 民族。 */
  Nation?: string;
  /** 出生日期。 */
  Birth?: string;
  /** 地址。 */
  Address?: string;
  /** 身份证号。 */
  IdNum?: string;
  /** 身份证头像照片的base64编码，如果抠图失败会拿整张身份证做比对并返回空。 */
  Portrait?: string;
  /** 告警信息。- 当在Config中配置了告警信息会停止人像比对，Result返回错误（FailedOperation.OcrWarningOccurred）并有此告警信息。- Code 告警码列表和释义：'-9101'：身份证边框不完整告警。'-9102'：身份证复印件告警。'-9103'：身份证翻拍告警。'-9105'：身份证框内遮挡告警。'-9104'：临时身份证告警。'-9106'：身份证 PS 告警（疑似存在PS痕迹）。'-8001'：图片模糊告警。- 多个会用“|” 隔开，如 "-9101|-9106|-9104"。 */
  Warnings?: string;
  /** 图片质量分数。- 当请求Config中配置图片模糊告警该参数才有意义。- 取值范围（0～100），目前默认阈值是50分，低于50分会触发模糊告警。 */
  Quality?: number;
  /** 敏感数据加密信息。 */
  Encryption?: Encryption | null;
  /** 加密后的数据。 */
  EncryptedBody?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckIdNameDateRequest {
  /** 姓名。 */
  Name: string;
  /** 身份证号。 */
  IdCard: string;
  /** 身份证有效期开始时间。- 格式：YYYYMMDD，如：20210701。 */
  ValidityBegin: string;
  /** 身份证有效期到期时间。格式：YYYYMMDD，长期用“00000000”代替，如：20210701。 */
  ValidityEnd: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface CheckIdNameDateResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 一致。-1: 不一致。- 不收费结果码：-2: 非法身份证号（长度、校验位等不正确）。-3: 非法姓名（长度、格式等不正确）。-4: 非法有效期（长度、格式等不正确）。-5: 身份信息无效。-6: 证件库服务异常。-7: 证件库中无此身份证记录。-8: 认证次数超过当日限制，请次日重试。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckPhoneAndNameRequest {
  /** ⼿机号。 */
  Mobile: string;
  /** 姓名。 */
  Name: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface CheckPhoneAndNameResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 验证结果一致。1: 验证结果不一致。- 不收费结果码：-1:查无记录。-2:引擎未知错误。-3:引擎服务异常。-4:姓名校验不通过。-5:手机号码不合法。-6: 认证次数超过当日限制，请次日重试。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetectAIFakeFacesRequest {
  /** 传入需要检测的人脸图片或人脸视频（当前仅支持单人脸检测），使用base64编码的形式，如您的场景视频和图片都有，我们更建议您使用视频进行检测，为了提供更好的检测效果，请您注意以下输入数据的限制与建议：- 图片的Base64值：建议整体图像480x640的分辨率，脸部大小在 100X100 以上，由手机前置摄像头拍摄。Base64编码后的图片数据大小建议不超过3M、最大不可超过10M，仅支持jpg、png格式。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。- 视频的Base64值：Base64编码后的大小建议在8M以内、最大不可超过10M，支持mp4、avi、flv格式，由手机前置摄像头拍摄。视频建议时长为2～5s，最大不可超过20s。视频分辨率建议为480x640（最大支持720p），帧率在25fps~30fps之间。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。示例值：/9j/4AAQSkZJRg.....s97n//2Q== */
  FaceInput?: string;
  /** 传入的类型。- 取值范围：1：传入的是图片类型。2：传入的是视频类型。其他：返回错误码InvalidParameter。 */
  FaceInputType?: number;
  /** 是否需要对请求信息进行全包体加密。- 支持的加密算法:AES-256-CBC、SM4-GCM。- 有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
  /** 加密后的密文。- 加密前的数据格式如下:{"FaceInput":"AAAAA","FaceInputType":1}。 */
  EncryptedBody?: string;
}

declare interface DetectAIFakeFacesResponse {
  /** 对于输入图片/视频的检测结果，检测是否存在人脸攻击。- Low：低攻击风险。- Mid：中度疑似攻击。- High：高度疑似攻击。建议返回值为High时判断为拦截，Mid和Low判断为通过，以更好平衡安全性和通过率。 */
  AttackRiskLevel?: string;
  /** 检测到的疑似攻击痕迹列表，仅当AttackRiskLevel为High或Mid时返回。- 说明：未检测到攻击痕迹时，返回空数组。- 此出参仅作为结果判断的参考，实际应用仍建议使用AttackRiskLevel的结果。 */
  AttackRiskDetailList?: AttackRiskDetail[];
  /** 额外信息。 */
  ExtraInfo?: ExtraInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetectAuthRequest {
  /** 业务流程ID。- 用于细分客户使用场景, 可为业务配置不同的业务流程。- 申请开通服务后，登录腾讯云[慧眼人脸核身控制](https://console.cloud.tencent.com/faceid)进行创建，审核通过后即可调用。- 如有疑问，请添加[腾讯云人脸核身小助手](https://cloud.tencent.com/document/product/1007/56130)进行咨询。 */
  RuleId: string;
  /** 本接口不需要传递此参数。 */
  TerminalType?: string;
  /** 验证人的身份证号码。- 是否必传基于[控制台](https://console.cloud.tencent.com/faceid/access)申请业务流程时配置的提示。 */
  IdCard?: string;
  /** 验证人的姓名。- 是否必传基于[控制台](https://console.cloud.tencent.com/faceid/access)申请业务流程时配置的提示。- 最长长度32位。中文请使用UTF-8编码。 */
  Name?: string;
  /** 认证结束后重定向的回调链接地址。- 最长长度1024位。 */
  RedirectUrl?: string;
  /** 透传字段，在获取验证结果时返回。- 最长长度1024位。 */
  Extra?: string;
  /** 用于人脸比对的图像数据，使用base64编码。- Base64编码后的图片数据大小不超过3M。- 仅支持jpg、png格式。- 请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64?: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
  /** 意愿核身（朗读模式）使用的文案。- 若未使用意愿核身（朗读模式），则该字段无需传入。- 最长可接受120的字符串长度。 */
  IntentionVerifyText?: string;
  /** 意愿核身（语音播报+语音回答模式）使用的文案。- 包括：系统语音播报的文本、需要核验的标准文本。- 问答模式支持1-10轮（不超过10轮）的意愿确认。 */
  IntentionQuestions?: IntentionQuestion[];
  /** 意愿核身（点头确认模式）使用的文案。- 若未使用意愿核身（点头确认模式），则该字段无需传入。- 点头确认模式支持1-10轮（不超过10轮）的意愿确认。 */
  IntentionActions?: IntentionActionConfig[];
  /** 意愿核身流程配置。 */
  Config?: RuleIdConfig;
}

declare interface DetectAuthResponse {
  /** 用于发起核身流程的URL，仅微信H5场景使用。 */
  Url?: string;
  /** 一次核验流程的唯一标识。- 有效时间为7,200秒，超过有效期再进行人脸核验会报错，请在有效期内进行核验。- 完成人脸核验后，需根据此标识调用[获取实名核身结果信息增强版](https://cloud.tencent.com/document/api/1007/41957)获取用户最终验证结果信息。 */
  BizToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EncryptedPhoneVerificationRequest {
  /** 身份证号，加密方式以EncryptionMode为准 */
  IdCard: string;
  /** 姓名，加密方式以EncryptionMode为准 */
  Name: string;
  /** 手机号，加密方式以EncryptionMode为准 */
  Phone: string;
  /** 敏感信息的加密方式，目前支持明文、MD5和SHA256加密传输，参数取值：0：明文，不加密1：使用MD5加密2：使用SHA2563：使用SM3加密 */
  EncryptionMode: string;
}

declare interface EncryptedPhoneVerificationResponse {
  /** 认证结果码:【收费结果码】0: 三要素信息一致-4: 三要素信息不一致【不收费结果码】-7: 身份证号码有误-8: 参数错误-9: 没有记录-11: 验证中心服务繁忙 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 运营商名称。取值范围为["移动","联通","电信",""] */
  ISP?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetActionSequenceRequest {
  /** 默认不需要使用。 */
  ActionType?: string;
}

declare interface GetActionSequenceResponse {
  /** 动作顺序，例如：2,1 or 1,2。- 1代表张嘴，2代表闭眼。 */
  ActionSequence?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDetectInfoEnhancedRequest {
  /** 人脸核身流程的标识，调用[DetectAuth](https://cloud.tencent.com/document/product/1007/31816)接口时生成。 */
  BizToken: string;
  /** 用于细分客户使用场景，由腾讯侧在线下对接时分配。 */
  RuleId: string;
  /** 指定拉取的结果信息。- 取值（0：全部；1：文本类；2：身份证信息；3：视频最佳截图信息）。- 例如 13 表示拉取文本类、视频最佳截图信息。- 默认值：0 */
  InfoType?: string;
  /** 从活体视频中截取一定张数的最佳帧。- 仅部分服务支持，若需使用请与慧眼小助手沟通。- 默认值为0，最大值为10，超出10的最多只给10张。- InfoType需要包含3。 */
  BestFramesCount?: number;
  /** 是否对身份证照片进行裁边。- 默认为false。- InfoType需要包含2。 */
  IsCutIdCardImage?: boolean;
  /** 是否需要从身份证中抠出头像。- 默认为false。- InfoType需要包含2。 */
  IsNeedIdCardAvatar?: boolean;
  /** 已弃用。 */
  IsEncrypt?: boolean;
  /** 是否需要对返回中的敏感信息进行加密。- 只需指定加密算法Algorithm即可，其余字段传入默认值。- 敏感信息包括：Response.Text.IdCard、Response.Text.Name、Response.Text.OcrIdCard、Response.Text.OcrName。 */
  Encryption?: Encryption;
  /** 是否对回包整体进行加密。 */
  IsEncryptResponse?: boolean;
  /** 是否需要返回认证中间过程的刷脸重试视频，默认不开启，多段视频需要存储到COS空间中，因此开启后还需要额外开启数据存储服务才可生效。详见[数据存储指引](https://cloud.tencent.com/document/product/1007/104229)。 */
  IsReturnAllVideo?: boolean;
}

declare interface GetDetectInfoEnhancedResponse {
  /** 文本类信息。 */
  Text?: DetectInfoText | null;
  /** 身份证照片信息。 */
  IdCardData?: DetectInfoIdCardData | null;
  /** 最佳帧信息。 */
  BestFrame?: DetectInfoBestFrame | null;
  /** 视频信息。 */
  VideoData?: DetectInfoVideoData | null;
  /** 敏感数据加密信息。 */
  Encryption?: Encryption | null;
  /** 意愿核身朗读模式结果信息。- 若未使用意愿核身功能，该字段返回值可以不处理。 */
  IntentionVerifyData?: IntentionVerifyData | null;
  /** 意愿核身问答模式结果。- 若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionQuestionResult?: IntentionQuestionResult | null;
  /** 意愿核身点头确认模式的结果信息。- 若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionActionResult?: IntentionActionResult | null;
  /** 加密后的数据。 */
  EncryptedBody?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDetectInfoRequest {
  /** 人脸核身流程的标识，调用DetectAuth接口时生成。 */
  BizToken: string;
  /** 用于细分客户使用场景，申请开通服务后，可以在腾讯云慧眼人脸核身控制台（https://console.cloud.tencent.com/faceid） 自助接入里面创建，审核通过后即可调用。如有疑问，请加慧眼小助手微信（faceid001）进行咨询。 */
  RuleId: string;
  /** 指定拉取的结果信息，取值（0：全部；1：文本类；2：身份证正反面；3：视频最佳截图照片；4：视频）。如 134表示拉取文本类、视频最佳截图照片、视频。默认值：0 */
  InfoType?: string;
}

declare interface GetDetectInfoResponse {
  /** JSON字符串。{ // 文本类信息 "Text": { "ErrCode": null, // 本次核身最终结果。0为成功 "ErrMsg": null, // 本次核身最终结果信息描述。 "IdCard": "", // 本次核身最终获得的身份证号。 "Name": "", // 本次核身最终获得的姓名。 "OcrNation": null, // ocr阶段获取的民族 "OcrAddress": null, // ocr阶段获取的地址 "OcrBirth": null, // ocr阶段获取的出生信息 "OcrAuthority": null, // ocr阶段获取的证件签发机关 "OcrValidDate": null, // ocr阶段获取的证件有效期 "OcrName": null, // ocr阶段获取的姓名 "OcrIdCard": null, // ocr阶段获取的身份证号 "OcrGender": null, // ocr阶段获取的性别 "LiveStatus": null, // 活体检测阶段的错误码。0为成功 "LiveMsg": null, // 活体检测阶段的错误信息 "Comparestatus": null,// 一比一阶段的错误码。0为成功 "Comparemsg": null, // 一比一阶段的错误信息 "Sim": null, // 比对相似度 "Location": null, // 地理位置信息 "Extra": "", // DetectAuth结果传进来的Extra信息 "Detail": { // 活体一比一信息详情 "LivenessData": [ { ErrCode: null, // 活体比对验证错误码 ErrMsg: null, // 活体比对验证错误描述 ReqTime: null, // 活体验证时间戳 IdCard: null, // 验证身份证号 Name: null // 验证姓名 } ] } }, // 身份证正反面照片Base64 "IdCardData": { "OcrFront": null, "OcrBack": null }, // 视频最佳帧截图Base64 "BestFrame": { "BestFrame": null }, // 活体视频Base64 "VideoData": { "LivenessVideo": null }} */
  DetectInfo: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetEidResultRequest {
  /** E证通流程的唯一标识，调用[GetEidToken](https://cloud.tencent.com/document/product/1007/54089)接口时生成。 */
  EidToken: string;
  /** 指定需要拉取的结果信息。- 取值范围： 0：全部。 1：文本类。 2：身份证信息。 3：最佳截图信息。 5：意愿核身朗读模式相关结果。 6：意愿核身问答/点头模式相关结果。- 例如 13表示拉取文本类、最佳截图信息。- 默认值：0 */
  InfoType?: string;
  /** 从活体视频中截取一定张数的最佳帧。- 默认为0，最大为3，超出3的最多只给3张。- InfoType需要包含3。 */
  BestFramesCount?: number;
  /** 是否对身份证照片进行裁边。- 默认为false。- InfoType需要包含2。 */
  IsCutIdCardImage?: boolean;
  /** 是否需要从身份证中抠出头像。- 默认为false。- InfoType需要包含2。 */
  IsNeedIdCardAvatar?: boolean;
}

declare interface GetEidResultResponse {
  /** 文本类信息。- 基于对敏感信息的保护，验证使用的姓名和身份证号统一通过加密后从EidInfo参数中返回。- 如需获取请在控制台申请返回身份信息，详见[E证通获取实名信息指引](https://cloud.tencent.com/document/product/1007/63370)。 */
  Text?: DetectInfoText | null;
  /** 身份证照片信息。 */
  IdCardData?: DetectInfoIdCardData | null;
  /** 最佳帧信息。 */
  BestFrame?: DetectInfoBestFrame | null;
  /** Eid信息。- EidInfo字段只有在人脸核身控制台完成“申请返回实名信息”之后返回，操作指引详见 [E证通获取实名信息指引](https://cloud.tencent.com/document/product/1007/63370)。- Eid信息包括商户下用户唯一标识以及加密后的姓名、身份证号信息。- 解密方式详见 [E证通获取实名信息指引](https://cloud.tencent.com/document/product/1007/63370)- 只有整个核验流程完成之后才能返回该字段信息。 */
  EidInfo?: EidInfo | null;
  /** 意愿核身朗读模式相关信息。- 若未使用意愿核身朗读功能，该字段返回值可以不处理。 */
  IntentionVerifyData?: IntentionVerifyData | null;
  /** 意愿核身问答模式相关信息。- 若未使用意愿核身问答模式功能，该字段返回值可以不处理。 */
  IntentionQuestionResult?: IntentionQuestionResult | null;
  /** 意愿核身点头确认模式的结果信息。- 若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionActionResult?: IntentionActionResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetEidTokenRequest {
  /** EID商户ID。- 商户ID通过人脸核身控制台[自助接入](https://console.cloud.tencent.com/faceid/access)申请。- 商户ID与您通过腾讯云人脸核身控制台完成自助接入时所使用的腾讯云账号绑定。- 必须使用申请该商户ID时登录的腾讯云账号所对应的腾讯云API密钥调用该接口。 */
  MerchantId: string;
  /** 身份标识。- 未使用OCR服务时，必须传入。- 规则：a-z，A-Z，0-9组合。- 最长长度32位。 */
  IdCard?: string;
  /** 姓名。- 未使用OCR服务时，必须传入。- 最长长度32位。- 中文请使用UTF-8编码。 */
  Name?: string;
  /** 透传字段，在获取验证结果时返回。- 最长长度1024位。 */
  Extra?: string;
  /** 小程序模式配置，包括如何传入姓名身份证的配置，以及是否使用意愿核身。 */
  Config?: GetEidTokenConfig;
  /** 用户从Url中进入核身认证结束后重定向的回调链接地址。- 最长长度1024位。- EidToken会在该链接的query参数中。 */
  RedirectUrl?: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface GetEidTokenResponse {
  /** 一次核身流程的标识。- 有效时间为600秒。- 完成核身后，可用该标识获取验证结果信息。 */
  EidToken?: string;
  /** 发起核身流程的URL。- 用于H5场景核身。 */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFaceIdResultRequest {
  /** SDK人脸核身流程的标识。- 调用[GetFaceIdToken](https://cloud.tencent.com/document/product/1007/49198)接口时生成。 */
  FaceIdToken: string;
  /** 是否需要拉取视频。- 默认false：不需要。 */
  IsNeedVideo?: boolean;
  /** 是否需要拉取截帧。- 默认false：不需要。 */
  IsNeedBestFrame?: boolean;
  /** 是否对回包整体进行加密。 */
  IsEncryptResponse?: boolean;
  /** 是否需要对返回中的敏感信息进行加密。 只需指定加密算法Algorithm即可，其余字段传入默认值。 */
  Encryption?: Encryption;
}

declare interface GetFaceIdResultResponse {
  /** 身份证。 */
  IdCard?: string;
  /** 姓名。 */
  Name?: string;
  /** 业务核验结果。- 参考：https://cloud.tencent.com/document/product/1007/47912。 */
  Result?: string;
  /** 业务核验描述。 */
  Description?: string;
  /** 相似度。- 取值：0-100。- 数值越大相似度越高。 */
  Similarity?: number;
  /** 用户核验的视频base64。- 如果选择了使用cos，返回完整cos地址，如https://bucket.cos.ap-guangzhou.myqcloud.com/objectKey。 */
  VideoBase64?: string | null;
  /** 用户核验视频的截帧base64。- 如果选择了使用cos，返回完整cos地址如https://bucket.cos.ap-guangzhou.myqcloud.com/objectKey。 */
  BestFrameBase64?: string | null;
  /** 获取token时透传的信息。 */
  Extra?: string | null;
  /** plus版：描述当前请求所在设备的风险标签。- 详情如下：06-疑似黑产设备。null-无设备风险。- 增强版：此字段不生效，默认为null。 */
  DeviceInfoTag?: string | null;
  /** 行为风险标签。- 仅错误码返回1007（设备疑似被劫持）时返回风险标签。- 标签说明：02：攻击风险 */
  RiskInfoTag?: string | null;
  /** plus版：描述当前请求活体阶段被拒绝的详细原因。- 详情如下：01-用户全程闭眼。02-用户未完成指定动作。03-疑似翻拍攻击。04-疑似合成图片。05-疑似合成视频。06-疑似合成动作。07-疑似黑产模板。08-疑似存在水印。09-反光校验未通过。10-最佳帧校验未通过。11-人脸质量过差。12-人脸距离不匹配。13-疑似对抗样本攻击。null-无。- 增强版：此字段不生效，默认为null。 */
  LivenessInfoTag?: string | null;
  /** plus版：描述当前请求所在设备的风险等级，共4级。- 详情如下：1 - 安全。2 - 低风险。3 - 中风险。4 - 高危。null - 未获取到风险等级。- 增强版：此字段不生效，默认为null。 */
  DeviceInfoLevel?: string | null;
  /** 敏感数据加密信息。 */
  Encryption?: Encryption | null;
  /** 加密后的数据。 */
  EncryptedBody?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFaceIdRiskInfoRequest {
  /** SDK人脸核身流程的标识，调用[GetFaceidRiskInfoToken](https://cloud.tencent.com/document/product/1007/104581)接口时生成。 */
  FaceIdToken: string;
}

declare interface GetFaceIdRiskInfoResponse {
  /** 描述当前请求所在设备的风险标签- 详情如下：01-设备疑似被Root/设备疑似越狱。02-设备疑似被注入。03-设备疑似为模拟器。04-设备疑似存在风险操作。05-摄像头疑似被劫持。06-疑似黑产设备。 */
  DeviceInfoTag?: string | null;
  /** 描述当前请求所在设备的风险等级，共4级。- 详情如下： 1 - 低风险。 2 - 中风险。 3 - 高风险。 4 - 攻击。 -1表示未获取到风险等级。 */
  DeviceInfoLevel?: number | null;
  /** 设备id标识。 */
  OpenId?: string | null;
  /** 描述当前请求所在设备的相机指纹风险等级，共4级。- 详情如下： 1 - 低风险。 2 - 中风险。 3 - 高风险。 4 - 攻击。 -1表示未获取到风险等级。 */
  CameraInfoLevel?: number | null;
  /** 描述当前请求所在设备的相机指纹风险标签。- 详情如下： 01-设备疑似被Root/设备疑似越狱。 02-设备疑似被注入。 03-设备疑似为模拟器。 04-设备疑似存在风险操作。 05-摄像头疑似被劫持。 06-疑似黑产设备。 空表示没有相机指纹风险。 */
  CameraInfoTag?: string | null;
  /** 获取token时透传的信息。 */
  Extra?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFaceIdTokenRequest {
  /** 比对库。- 取值范围：LOCAL：本地上传照片。BUSINESS：商业库。 */
  CompareLib: string;
  /** 身份证。- CompareLib为商业库时必传。 */
  IdCard?: string;
  /** 姓名。- CompareLib为商业库时必传。 */
  Name?: string;
  /** 图片的Base64。- CompareLib为上传照片比对时必传。- Base64后图片最大8MB。- 请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64?: string;
  /** SDK中生成的Meta字符串。 */
  Meta?: string;
  /** 透传参数。- 1000长度字符串 */
  Extra?: string;
  /** 是否使用cos桶。- 默认为false。- 设置该参数为true后，核身过程中的视频图片将会存储在人脸核身控制台授权cos的bucket中，拉取结果时会返回对应资源完整cos地址。- 开通地址见https://console.cloud.tencent.com/faceid/cos- 【注意】选择该参数为true后将不返回base64数据，请根据接入情况谨慎修改。 */
  UseCos?: boolean;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号、自传照片）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
  /** 用于细分客户使用场景。- 申请开通服务后，可以在腾讯云慧眼人脸核身控制台（https://console.cloud.tencent.com/faceid） 自助接入里面创建，审核通过后即可调用。- 如有疑问，请添加腾讯云人脸核身小助手进行咨询。 */
  RuleId?: string;
}

declare interface GetFaceIdTokenResponse {
  /** token值。- 有效期 10分钟。- 只能完成1次核身。 */
  FaceIdToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFaceidRiskInfoTokenRequest {
  /** SDK中生成的Meta字符串。 */
  Meta?: string;
  /** 透传参数 1000长度字符串。 */
  Extra?: string;
}

declare interface GetFaceidRiskInfoTokenResponse {
  /** 有效期 10分钟。只能完成1次核身。 */
  FaceIdToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLiveCodeRequest {
}

declare interface GetLiveCodeResponse {
  /** 数字验证码。 */
  LiveCode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWeChatBillDetailsRequest {
  /** 拉取的日期（YYYY-MM-DD）。- 最大可追溯到365天前。- 当天6点后才能拉取前一天的数据。 */
  Date: string;
  /** 游标。- 用于分页。- 取第一页时传0，取后续页面时，传入本接口响应中返回的NextCursor字段的值。 */
  Cursor: number;
  /** 需要拉取账单详情业务对应的RuleId。- 不传会返回所有RuleId数据。- 默认为空字符串。 */
  RuleId?: string;
}

declare interface GetWeChatBillDetailsResponse {
  /** 是否还有下一页。- 该字段为true时，需要将NextCursor的值作为入参Cursor继续调用本接口。 */
  HasNextPage?: boolean;
  /** 下一页的游标，用于分页。 */
  NextCursor?: number;
  /** 数据。 */
  WeChatBillDetails?: WeChatBillDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IdCardOCRVerificationRequest {
  /** 身份证号。- 姓名和身份证号、ImageBase64、ImageUrl三者必须提供其中之一。- 若都提供了，则按照姓名和身份证号>ImageBase64>ImageUrl的优先级使用参数。 */
  IdCard?: string;
  /** 姓名。 */
  Name?: string;
  /** 身份证人像面的 Base64 值。- 支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。- 支持的图片大小：所下载图片经Base64编码后不超过 3M。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64?: string;
  /** 身份证人像面的 Url 地址。- 支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。- 支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。- 图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。- 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface IdCardOCRVerificationResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 姓名和身份证号一致。-1: 姓名和身份证号不一致。- 不收费结果码：-2: 非法身份证号（长度、校验位等不正确）。-3: 非法姓名（长度、格式等不正确）。-4: 证件库服务异常。-5: 证件库中无此身份证记录。-6: 权威比对系统升级中，请稍后再试。-7: 认证次数超过当日限制。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 用于验证的姓名。 */
  Name?: string;
  /** 用于验证的身份证号。 */
  IdCard?: string;
  /** OCR得到的性别。 */
  Sex?: string | null;
  /** OCR得到的民族。 */
  Nation?: string | null;
  /** OCR得到的生日。 */
  Birth?: string | null;
  /** OCR得到的地址。 */
  Address?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IdCardVerificationRequest {
  /** 身份证号。 */
  IdCard: string;
  /** 姓名。 */
  Name: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface IdCardVerificationResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 姓名和身份证号一致-1: 姓名和身份证号不一致不收费结果码：-2: 非法身份证号（长度、校验位等不正确）-3: 非法姓名（长度、格式等不正确）-4: 证件库服务异常-5: 证件库中无此身份证记录-6: 权威比对系统升级中，请稍后再试-7: 认证次数超过当日限制 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageRecognitionRequest {
  /** 身份证号 */
  IdCard: string;
  /** 姓名。中文请使用UTF-8编码。 */
  Name: string;
  /** 用于人脸比对的照片，图片的Base64值；Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64: string;
  /** 本接口不需要传递此参数。 */
  Optional?: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface ImageRecognitionResponse {
  /** 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一） */
  Sim?: number;
  /** 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageRecognitionV2Request {
  /** 身份证号。 */
  IdCard: string;
  /** 姓名。- 中文请使用UTF-8编码。 */
  Name: string;
  /** 用于人脸比对的照片，图片的Base64值；Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64: string;
  /** 本接口不需要传递此参数。 */
  Optional?: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
  /** 自定义描述字段。- 用于描述调用业务信息，出参中将返回此描述字段。 - 每个自定义描述字段支持[1,10]个字符。 */
  Extra?: string;
}

declare interface ImageRecognitionV2Response {
  /** 相似度。- 取值范围 [0.00, 100.00]。- 推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一） */
  Sim?: number;
  /** 业务错误码。- 成功情况返回Success。- 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 调用接口中自定义的描述字段。 */
  Extra?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LivenessCompareRequest {
  /** 活体检测类型。- 取值：LIP/ACTION/SILENT。- LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。 */
  LivenessType: string;
  /** 用于人脸比对的照片的Base64值。- Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。- 请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。- 图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageBase64。 */
  ImageBase64?: string;
  /** 用于人脸比对照片的URL地址。- 图片下载后经Base64编码后的数据大小不超过3M，仅支持jpg、png格式。- 图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageBase64。- 图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。- 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 验证数据。- 数字模式传参：传数字验证码，验证码需先调用获取数字验证码接口得到；- 动作模式传参：传动作顺序，动作顺序需先调用获取动作顺序接口得到；- 静默模式传参：空。 */
  ValidateData?: string;
  /** 额外配置，传入JSON字符串。- 格式如下：{"BestFrameNum": 2 //需要返回多张最佳截图，取值范围2-10} */
  Optional?: string;
  /** 用于活体检测的视频，视频的Base64值。- Base64编码后的大小不超过8M，支持mp4、avi、flv格式。- 请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。- 视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。 */
  VideoBase64?: string;
  /** 用于活体检测的视频Url 地址。- 视频下载后经Base64编码后不超过 8M，视频下载耗时不超过4S，支持mp4、avi、flv格式。- 视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。- 建议视频存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议视频存储于腾讯云。- 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  VideoUrl?: string;
}

declare interface LivenessCompareResponse {
  /** 验证通过后的视频最佳截图照片。- 照片为BASE64编码后的值，jpg格式。 */
  BestFrameBase64?: string | null;
  /** 相似度。- 取值范围 [0.00, 100.00]。- 推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）。 */
  Sim?: number;
  /** 业务错误码。- 成功情况返回Success。- 错误情况请参考下方错误码，列表中FailedOperation部分。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 最佳截图列表。- 仅在配置了返回多张最佳截图时返回。 */
  BestFrameList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LivenessRecognitionRequest {
  /** 身份证号。 */
  IdCard: string;
  /** 姓名。- 中文请使用UTF-8编码。 */
  Name: string;
  /** 活体检测类型。- 取值：LIP/ACTION/SILENT。- LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。 */
  LivenessType: string;
  /** 用于活体检测的视频，视频的BASE64值；BASE64编码后的大小不超过8M，支持mp4、avi、flv格式。 */
  VideoBase64?: string;
  /** 用于活体检测的视频Url 地址。- 视频下载后经Base64编码不超过 8M，视频下载耗时不超过4S，支持mp4、avi、flv格式。- 视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。- 建议视频存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议视频存储于腾讯云。- 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  VideoUrl?: string;
  /** 验证数据。- 数字模式传参：传数字验证码，验证码需先调用获取数字验证码接口得到；- 动作模式传参：传动作顺序，动作顺序需先调用获取动作顺序接口得到；- 静默模式传参：空。 */
  ValidateData?: string;
  /** 额外配置，传入JSON字符串。- 格式如下：{"BestFrameNum": 2 //需要返回多张最佳截图，取值范围2-10} */
  Optional?: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface LivenessRecognitionResponse {
  /** 验证通过后的视频最佳截图照片。- 照片为BASE64编码后的值，jpg格式。 */
  BestFrameBase64?: string | null;
  /** 相似度。- 取值范围 [0.00, 100.00]。- 推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一） */
  Sim?: number;
  /** 业务错误码。- 成功情况返回Success。- 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 最佳截图列表，仅在配置了返回多张最佳截图时返回。 */
  BestFrameList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LivenessRequest {
  /** 用于活体检测的视频，视频的BASE64值；BASE64编码后的大小不超过8M，支持mp4、avi、flv格式。 */
  VideoBase64: string;
  /** 活体检测类型，取值：LIP/ACTION/SILENT。LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。 */
  LivenessType: string;
  /** 数字模式传参：数字验证码(1234)，需先调用接口获取数字验证码；动作模式传参：传动作顺序(2,1 or 1,2)，需先调用接口获取动作顺序；静默模式传参：不需要传递此参数。 */
  ValidateData?: string;
  /** 额外配置，传入JSON字符串。{"BestFrameNum": 2 //需要返回多张最佳截图，取值范围1-10} */
  Optional?: string;
}

declare interface LivenessResponse {
  /** 验证通过后的视频最佳截图照片，照片为BASE64编码后的值，jpg格式。 */
  BestFrameBase64?: string | null;
  /** 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 最佳最佳截图列表，仅在配置了返回多张最佳截图时有效。 */
  BestFrameList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MinorsVerificationRequest {
  /** 参与校验的参数类型。0：使用手机号进行校验；1：使用姓名与身份证号进行校验。 */
  Type: string;
  /** 手机号，11位数字，特别提示：手机号验证只限制在腾讯健康守护可信模型覆盖的数据范围内，与手机号本身在运营商是否实名无关联，不在范围会提示“手机号未实名”，建议客户与传入姓名和身份证号信息组合使用。 */
  Mobile?: string;
  /** 身份证号码。 */
  IdCard?: string;
  /** 姓名。 */
  Name?: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface MinorsVerificationResponse {
  /** 结果码，收费情况如下。收费结果码：0: 成年-1: 未成年-3: 姓名和身份证号不一致不收费结果码：-2: 未查询到手机号信息-4: 非法身份证号（长度、校验位等不正确）-5: 非法姓名（长度、格式等不正确）-6: 权威数据源服务异常-7: 未查询到身份信息-8: 权威数据源升级中，请稍后再试 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 该字段的值为年龄区间。格式为[a,b)，[0,8)表示年龄小于8周岁区间，不包括8岁；[8,16)表示年龄8-16周岁区间，不包括16岁；[16,18)表示年龄16-18周岁区间，不包括18岁；[18,+)表示年龄大于18周岁。 */
  AgeRange?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MobileNetworkTimeVerificationRequest {
  /** 手机号码。 */
  Mobile: string;
  /** 敏感数据加密信息。- 对传入信息（手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface MobileNetworkTimeVerificationResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 成功。-2: 手机号不存在。-3: 手机号存在，但无法查询到在网时长。- 不收费结果码：-1: 手机号格式不正确。-4: 验证中心服务繁忙。-5：认证次数超过当日限制，请次日重试。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 在网时长区间。- 格式为[a,b)，表示在网时长在a个月以上，b个月以下。- 若b为+时表示没有上限。 */
  Range?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MobileStatusRequest {
  /** 手机号码。 */
  Mobile: string;
  /** 敏感数据加密信息。- 对传入信息（手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface MobileStatusResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0：成功。- 不收费结果码：-1：未查询到结果。-2：手机号格式不正确。-3：验证中心服务繁忙。-4：认证次数超过当日限制，请次日重试。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 状态码。- 取值范围：0：正常。1：停机。2：销号。4：不在网。99：未知状态。 */
  StatusCode?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ParseNfcDataRequest {
  /** 前端SDK返回。 */
  ReqId: string;
}

declare interface ParseNfcDataResponse {
  /** 结果码。- 取值范围：0为首次查询成功，-1为查询失败。 */
  ResultCode?: string | null;
  /** 身份证号。 */
  IdNum?: string | null;
  /** 姓名。 */
  Name?: string | null;
  /** 照片。 */
  Picture?: string | null;
  /** 出生日期。 */
  BirthDate?: string | null;
  /** 有效期起始时间。 */
  BeginTime?: string | null;
  /** 有效期结束时间。 */
  EndTime?: string | null;
  /** 住址。 */
  Address?: string | null;
  /** 民族。 */
  Nation?: string | null;
  /** 性别。 */
  Sex?: string | null;
  /** 类型。- 取值范围：01：身份证。 03 ：中国护照。04 ：军官证。05 ：武警证。06：港澳通行证 。07 ：台胞证 。08：外国护照 。09 ：士兵证。10 ：临时身份证。11：户口本 。12 ：警官证 。13：外国人永久居留证。14：港澳台居民居住证。15：回乡证。16：大陆居民来往台湾通行证。99：其他证件。 */
  IdType?: string | null;
  /** 英文姓名。 */
  EnName?: string | null;
  /** 签发机关 */
  SigningOrganization?: string | null;
  /** 港澳台居民居住证，通行证号码。 */
  OtherIdNum?: string | null;
  /** 旅行证件国籍。 */
  Nationality?: string | null;
  /** 旅行证件机读区第二行 29~42 位。 */
  PersonalNumber?: string | null;
  /** 旅行证件类的核验结果。- JSON格式如下：{"result_issuer ":"签发者证书合法性验证结果 ","result_paper":"证件安全对象合法性验证结果 ","result_data" :"防数据篡改验证结果 ","result_chip" :"防证书件芯片被复制验证结果"} 。- 取值范围： 0:验证通过，1: 验证不通过，2: 未验证，3:部分通过，当4项核验结果都为0时，表示证件为真。 */
  CheckMRTD?: string | null;
  /** 身份证照片面合成图片。 */
  ImageA?: string | null;
  /** 身份证国徽面合成图片。 */
  ImageB?: string | null;
  /** 对result code的结果描述。 */
  ResultDescription?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PhoneVerificationCMCCRequest {
  /** 身份证号。 */
  IdCard: string;
  /** 姓名。 */
  Name: string;
  /** 手机号。 */
  Phone: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface PhoneVerificationCMCCResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 认证通过。-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）。- 不收费结果码：-6: 手机号码不合法。-7: 身份证号码有误。-8: 姓名校验不通过。-9: 没有记录。-11: 验证中心服务繁忙。 */
  Result?: string;
  /** 运营商名称。- 取值范围为["移动","联通","电信",""]。 */
  Isp?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PhoneVerificationCTCCRequest {
  /** 身份证号。 */
  IdCard: string;
  /** 姓名。 */
  Name: string;
  /** 手机号。 */
  Phone: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface PhoneVerificationCTCCResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 认证通过。-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）。- 不收费结果码：-6: 手机号码不合法。-7: 身份证号码有误。-8: 姓名校验不通过。-9: 没有记录。-11: 验证中心服务繁忙。 */
  Result?: string;
  /** 运营商名称。- 取值范围为["移动","联通","电信",""]。 */
  Isp?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PhoneVerificationCUCCRequest {
  /** 身份证号。 */
  IdCard: string;
  /** 姓名。 */
  Name: string;
  /** 手机号。 */
  Phone: string;
  /** 敏感数据加密信息。- 对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface PhoneVerificationCUCCResponse {
  /** 认证结果码，收费情况如下。- 收费结果码：0: 认证通过。-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）。- 不收费结果码：-6: 手机号码不合法。-7: 身份证号码有误。-8: 姓名校验不通过。-9: 没有记录。-11: 验证中心服务繁忙。 */
  Result?: string;
  /** 运营商名称。- 取值范围为["移动","联通","电信",""]。 */
  Isp?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PhoneVerificationRequest {
  /** 身份证号。 */
  IdCard: string;
  /** 姓名。 */
  Name: string;
  /** 手机号。 */
  Phone: string;
  /** 验证模式（详版/简版）。- 简版与详版价格不一致，详见[价格说明](https://cloud.tencent.com/document/product/1007/84321)。- 枚举值：0（简版）；1（详版）。- 默认值为0。 */
  VerifyMode?: string;
  /** 有加密需求的用户，传入kms的CiphertextBlob。关于数据加密可查阅 数据加密 文档。 */
  CiphertextBlob?: string;
  /** 在使用加密服务时，填入要被加密的字段。- 本接口中可填入加密后的IdCard，Name，Phone中的一个或多个。 */
  EncryptList?: string[];
  /** 有加密需求的用户，传入CBC加密的初始向量。 */
  Iv?: string;
}

declare interface PhoneVerificationResponse {
  /** 认证结果码。- 收费结果码0: 三要素信息一致。-4: 三要素信息不一致。- 不收费结果码-6: 手机号码不合法。-7: 身份证号码有误。-8: 姓名校验不通过。-9: 没有记录。-11: 验证中心服务繁忙。-12: 认证次数超过当日限制，请次日重试。 */
  Result?: string;
  /** 业务结果描述。 */
  Description?: string;
  /** 运营商名称。- 取值范围为["","移动","电信","联通"] */
  Isp?: string;
  /** 业务结果详细信息。- 当VerifyMode配置"详版"，且Result为"-4: 三要素信息不一致"时返回。- 枚举值：PhoneIdCardMismatch：手机号码与姓名一致，与身份证号不一致。PhoneNameMismatch：手机号码身份证号一致，与姓名不一致。PhoneNameIdCardMismatch：手机号码与姓名和身份证号均不一致。NameIdCardMismatch：姓名和身份证号不一致。OtherMismatch：其他不一致。 */
  ResultDetail?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Faceid 人脸核身} */
declare interface Faceid {
  (): Versions;
  /** 银行卡二要素核验 {@link BankCard2EVerificationRequest} {@link BankCard2EVerificationResponse} */
  BankCard2EVerification(data: BankCard2EVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<BankCard2EVerificationResponse>;
  /** 银行卡四要素核验 {@link BankCard4EVerificationRequest} {@link BankCard4EVerificationResponse} */
  BankCard4EVerification(data: BankCard4EVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<BankCard4EVerificationResponse>;
  /** 银行卡三要素核验 {@link BankCardVerificationRequest} {@link BankCardVerificationResponse} */
  BankCardVerification(data: BankCardVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<BankCardVerificationResponse>;
  /** 银行卡基础信息查询 {@link CheckBankCardInformationRequest} {@link CheckBankCardInformationResponse} */
  CheckBankCardInformation(data: CheckBankCardInformationRequest, config?: AxiosRequestConfig): AxiosPromise<CheckBankCardInformationResponse>;
  /** 获取E证通Token状态 {@link CheckEidTokenStatusRequest} {@link CheckEidTokenStatusResponse} */
  CheckEidTokenStatus(data: CheckEidTokenStatusRequest, config?: AxiosRequestConfig): AxiosPromise<CheckEidTokenStatusResponse>;
  /** 身份证人像照片验真 {@link CheckIdCardInformationRequest} {@link CheckIdCardInformationResponse} */
  CheckIdCardInformation(data?: CheckIdCardInformationRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIdCardInformationResponse>;
  /** 身份信息及有效期核验 {@link CheckIdNameDateRequest} {@link CheckIdNameDateResponse} */
  CheckIdNameDate(data: CheckIdNameDateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIdNameDateResponse>;
  /** 手机号二要素核验 {@link CheckPhoneAndNameRequest} {@link CheckPhoneAndNameResponse} */
  CheckPhoneAndName(data: CheckPhoneAndNameRequest, config?: AxiosRequestConfig): AxiosPromise<CheckPhoneAndNameResponse>;
  /** AI人脸防护盾 {@link DetectAIFakeFacesRequest} {@link DetectAIFakeFacesResponse} */
  DetectAIFakeFaces(data?: DetectAIFakeFacesRequest, config?: AxiosRequestConfig): AxiosPromise<DetectAIFakeFacesResponse>;
  /** 实名核身鉴权 {@link DetectAuthRequest} {@link DetectAuthResponse} */
  DetectAuth(data: DetectAuthRequest, config?: AxiosRequestConfig): AxiosPromise<DetectAuthResponse>;
  /** 运营商三要素核验（加密） {@link EncryptedPhoneVerificationRequest} {@link EncryptedPhoneVerificationResponse} */
  EncryptedPhoneVerification(data: EncryptedPhoneVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<EncryptedPhoneVerificationResponse>;
  /** 获取动作顺序 {@link GetActionSequenceRequest} {@link GetActionSequenceResponse} */
  GetActionSequence(data?: GetActionSequenceRequest, config?: AxiosRequestConfig): AxiosPromise<GetActionSequenceResponse>;
  /** 获取实名核身结果信息 {@link GetDetectInfoRequest} {@link GetDetectInfoResponse} */
  GetDetectInfo(data: GetDetectInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetDetectInfoResponse>;
  /** 获取实名核身结果信息增强版 {@link GetDetectInfoEnhancedRequest} {@link GetDetectInfoEnhancedResponse} */
  GetDetectInfoEnhanced(data: GetDetectInfoEnhancedRequest, config?: AxiosRequestConfig): AxiosPromise<GetDetectInfoEnhancedResponse>;
  /** 获取E证通结果信息 {@link GetEidResultRequest} {@link GetEidResultResponse} */
  GetEidResult(data: GetEidResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetEidResultResponse>;
  /** 获取E证通Token {@link GetEidTokenRequest} {@link GetEidTokenResponse} */
  GetEidToken(data: GetEidTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetEidTokenResponse>;
  /** 获取SDK核验结果 {@link GetFaceIdResultRequest} {@link GetFaceIdResultResponse} */
  GetFaceIdResult(data: GetFaceIdResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetFaceIdResultResponse>;
  /** 获取SDK设备风险信息 {@link GetFaceIdRiskInfoRequest} {@link GetFaceIdRiskInfoResponse} */
  GetFaceIdRiskInfo(data: GetFaceIdRiskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetFaceIdRiskInfoResponse>;
  /** 获取SDKToken {@link GetFaceIdTokenRequest} {@link GetFaceIdTokenResponse} */
  GetFaceIdToken(data: GetFaceIdTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetFaceIdTokenResponse>;
  /** 获取风险信息Token {@link GetFaceidRiskInfoTokenRequest} {@link GetFaceidRiskInfoTokenResponse} */
  GetFaceidRiskInfoToken(data?: GetFaceidRiskInfoTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetFaceidRiskInfoTokenResponse>;
  /** 获取数字验证码 {@link GetLiveCodeRequest} {@link GetLiveCodeResponse} */
  GetLiveCode(data?: GetLiveCodeRequest, config?: AxiosRequestConfig): AxiosPromise<GetLiveCodeResponse>;
  /** 查询账单明细（微信渠道） {@link GetWeChatBillDetailsRequest} {@link GetWeChatBillDetailsResponse} */
  GetWeChatBillDetails(data: GetWeChatBillDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<GetWeChatBillDetailsResponse>;
  /** 身份证识别及信息核验 {@link IdCardOCRVerificationRequest} {@link IdCardOCRVerificationResponse} */
  IdCardOCRVerification(data?: IdCardOCRVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<IdCardOCRVerificationResponse>;
  /** 身份信息认证（二要素核验） {@link IdCardVerificationRequest} {@link IdCardVerificationResponse} */
  IdCardVerification(data: IdCardVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<IdCardVerificationResponse>;
  /** 照片人脸核身 {@link ImageRecognitionRequest} {@link ImageRecognitionResponse} */
  ImageRecognition(data: ImageRecognitionRequest, config?: AxiosRequestConfig): AxiosPromise<ImageRecognitionResponse>;
  /** 照片人脸核身(V2.0) {@link ImageRecognitionV2Request} {@link ImageRecognitionV2Response} */
  ImageRecognitionV2(data: ImageRecognitionV2Request, config?: AxiosRequestConfig): AxiosPromise<ImageRecognitionV2Response>;
  /** 活体检测 {@link LivenessRequest} {@link LivenessResponse} */
  Liveness(data: LivenessRequest, config?: AxiosRequestConfig): AxiosPromise<LivenessResponse>;
  /** 活体人脸比对 {@link LivenessCompareRequest} {@link LivenessCompareResponse} */
  LivenessCompare(data: LivenessCompareRequest, config?: AxiosRequestConfig): AxiosPromise<LivenessCompareResponse>;
  /** 活体人脸核身 {@link LivenessRecognitionRequest} {@link LivenessRecognitionResponse} */
  LivenessRecognition(data: LivenessRecognitionRequest, config?: AxiosRequestConfig): AxiosPromise<LivenessRecognitionResponse>;
  /** 手机号实名查询 {@link MinorsVerificationRequest} {@link MinorsVerificationResponse} */
  MinorsVerification(data: MinorsVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<MinorsVerificationResponse>;
  /** 手机号在网时长核验 {@link MobileNetworkTimeVerificationRequest} {@link MobileNetworkTimeVerificationResponse} */
  MobileNetworkTimeVerification(data: MobileNetworkTimeVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<MobileNetworkTimeVerificationResponse>;
  /** 手机号状态查询 {@link MobileStatusRequest} {@link MobileStatusResponse} */
  MobileStatus(data: MobileStatusRequest, config?: AxiosRequestConfig): AxiosPromise<MobileStatusResponse>;
  /** 获取证件NFC结果 {@link ParseNfcDataRequest} {@link ParseNfcDataResponse} */
  ParseNfcData(data: ParseNfcDataRequest, config?: AxiosRequestConfig): AxiosPromise<ParseNfcDataResponse>;
  /** 手机号三要素核验 {@link PhoneVerificationRequest} {@link PhoneVerificationResponse} */
  PhoneVerification(data: PhoneVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationResponse>;
  /** 手机号三要素核验（移动） {@link PhoneVerificationCMCCRequest} {@link PhoneVerificationCMCCResponse} */
  PhoneVerificationCMCC(data: PhoneVerificationCMCCRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationCMCCResponse>;
  /** 手机号三要素核验（电信） {@link PhoneVerificationCTCCRequest} {@link PhoneVerificationCTCCResponse} */
  PhoneVerificationCTCC(data: PhoneVerificationCTCCRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationCTCCResponse>;
  /** 手机号三要素核验（联通） {@link PhoneVerificationCUCCRequest} {@link PhoneVerificationCUCCResponse} */
  PhoneVerificationCUCC(data: PhoneVerificationCUCCRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationCUCCResponse>;
}

export declare type Versions = ["2018-03-01"];

export default Faceid;
