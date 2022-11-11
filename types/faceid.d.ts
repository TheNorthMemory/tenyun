/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 计费详情 */
declare interface ChargeDetail {
  /** 一比一时间时间戳，13位。 */
  ReqTime: string;
  /** 一比一请求的唯一标记。 */
  Seq: string;
  /** 一比一时使用的、脱敏后的身份证号。 */
  Idcard: string;
  /** 一比一时使用的、脱敏后的姓名。 */
  Name: string;
  /** 一比一的相似度。0-100，保留2位小数。 */
  Sim: string;
  /** 本次详情是否收费。 */
  IsNeedCharge: boolean;
  /** 收费类型，比对、核身、混合部署。 */
  ChargeType: string;
  /** 本次活体一比一最终结果。 */
  ErrorCode: string;
  /** 本次活体一比一最终结果描述。 */
  ErrorMessage: string;
}

/** 活体一比一详情 */
declare interface DetectDetail {
  /** 请求时间戳。 */
  ReqTime: string | null;
  /** 本次活体一比一请求的唯一标记。 */
  Seq: string | null;
  /** 参与本次活体一比一的身份证号。 */
  Idcard: string | null;
  /** 参与本次活体一比一的姓名。 */
  Name: string | null;
  /** 本次活体一比一的相似度。 */
  Sim: string | null;
  /** 本次活体一比一是否收费 */
  IsNeedCharge: boolean | null;
  /** 本次活体一比一最终结果。0为成功 */
  Errcode: number | null;
  /** 本次活体一比一最终结果描述。（仅描述用，文案更新时不会通知。） */
  Errmsg: string | null;
  /** 本次活体结果。0为成功 */
  Livestatus: number | null;
  /** 本次活体结果描述。（仅描述用，文案更新时不会通知。） */
  Livemsg: string | null;
  /** 本次一比一结果。0为成功 */
  Comparestatus: number | null;
  /** 本次一比一结果描述。（仅描述用，文案更新时不会通知。） */
  Comparemsg: string | null;
  /** 比对库源类型。包括：公安商业库；业务方自有库（用户上传照片、客户的混合库、混合部署库）；二次验证库；人工审核库； */
  CompareLibType: string | null;
  /** 枚举活体检测类型：0：未知1：数字活体2：动作活体3：静默活体4：一闪活体（动作+光线） */
  LivenessMode: number | null;
}

/** 核身最佳帧信息 */
declare interface DetectInfoBestFrame {
  /** 活体比对最佳帧Base64编码。 */
  BestFrame: string | null;
  /** 自截帧Base64编码数组。 */
  BestFrames: string[] | null;
}

/** 核身身份证图片信息 */
declare interface DetectInfoIdCardData {
  /** OCR正面照片的base64编码。 */
  OcrFront: string | null;
  /** OCR反面照片的base64编码 */
  OcrBack: string | null;
  /** 旋转裁边后的正面照片base64编码。 */
  ProcessedFrontImage: string | null;
  /** 旋转裁边后的背面照片base64编码。 */
  ProcessedBackImage: string | null;
  /** 身份证正面人像图base64编码。 */
  Avatar: string | null;
  /** 身份证人像面告警码，开启身份证告警功能后才会返回，返回数组中可能出现的告警码如下：-9100 身份证有效日期不合法告警，-9101 身份证边框不完整告警，-9102 身份证复印件告警，-9103 身份证翻拍告警，-9105 身份证框内遮挡告警，-9104 临时身份证告警，-9106 身份证 PS 告警，-9107 身份证反光告警。 */
  WarnInfos: number[] | null;
  /** 身份证国徽面告警码，开启身份证告警功能后才会返回，返回数组中可能出现的告警码如下：-9100 身份证有效日期不合法告警，-9101 身份证边框不完整告警，-9102 身份证复印件告警，-9103 身份证翻拍告警，-9105 身份证框内遮挡告警，-9104 临时身份证告警，-9106 身份证 PS 告警，-9107 身份证反光告警。 */
  BackWarnInfos: number[] | null;
}

/** 核身文本信息 */
declare interface DetectInfoText {
  /** 本次流程最终验证结果。0为成功 */
  ErrCode: number | null;
  /** 本次流程最终验证结果描述。（仅描述用，文案更新时不会通知。） */
  ErrMsg: string | null;
  /** 本次验证使用的身份证号。 */
  IdCard: string | null;
  /** 本次验证使用的姓名。 */
  Name: string | null;
  /** Ocr识别结果。民族。 */
  OcrNation: string | null;
  /** Ocr识别结果。家庭住址。 */
  OcrAddress: string | null;
  /** Ocr识别结果。生日。 */
  OcrBirth: string | null;
  /** Ocr识别结果。签发机关。 */
  OcrAuthority: string | null;
  /** Ocr识别结果。有效日期。 */
  OcrValidDate: string | null;
  /** Ocr识别结果。姓名。 */
  OcrName: string | null;
  /** Ocr识别结果。身份证号。 */
  OcrIdCard: string | null;
  /** Ocr识别结果。性别。 */
  OcrGender: string | null;
  /** 本次流程最终活体结果。0为成功 */
  LiveStatus: number | null;
  /** 本次流程最终活体结果描述。（仅描述用，文案更新时不会通知。） */
  LiveMsg: string | null;
  /** 本次流程最终一比一结果。0为成功 */
  Comparestatus: number | null;
  /** 本次流程最终一比一结果描述。（仅描述用，文案更新时不会通知。） */
  Comparemsg: string | null;
  /** 本次流程活体一比一的分数，取值范围 [0.00, 100.00]。相似度大于等于70时才判断为同一人，也可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一） */
  Sim: string | null;
  /** 地理位置经纬度。 */
  Location: string | null;
  /** Auth接口带入额外信息。 */
  Extra: string | null;
  /** 本次流程进行的活体一比一流水。 */
  LivenessDetail: DetectDetail[] | null;
  /** 手机号码。 */
  Mobile: string | null;
  /** 本次流程最终比对库源类型。包括：权威库；业务方自有库（用户上传照片、客户的混合库、混合部署库）；二次验证库；人工审核库； */
  CompareLibType: string | null;
  /** 本次流程最终活体类型。包括：0：未知1：数字活体2：动作活体3：静默活体4：一闪活体（动作+光线） */
  LivenessMode: number | null;
}

/** 核身视频信息 */
declare interface DetectInfoVideoData {
  /** 活体视频的base64编码 */
  LivenessVideo: string | null;
}

/** Eid出参，包括商户方用户的标识和加密的用户姓名身份证信息。 */
declare interface EidInfo {
  /** 商户方 appeIDcode 的数字证书 */
  EidCode: string;
  /** Eid中心针对商户方EidCode的电子签名 */
  EidSign: string;
  /** 商户方公钥加密的会话密钥的base64字符串，[指引详见](https://cloud.tencent.com/document/product/1007/63370) */
  DesKey: string;
  /** 会话密钥sm2加密后的base64字符串，[指引详见](https://cloud.tencent.com/document/product/1007/63370) */
  UserInfo: string;
}

/** 敏感数据加密 */
declare interface Encryption {
  /** 在使用加密服务时，填入要被加密的字段。本接口中可填入加密后的一个或多个字段 */
  EncryptList: string[];
  /** 有加密需求的用户，接入传入kms的CiphertextBlob，关于数据加密可查阅数据加密 文档。 */
  CiphertextBlob: string;
  /** 有加密需求的用户，传入CBC加密的初始向量（客户自定义字符串，长度16字符）。 */
  Iv: string;
  /** 加密使用的算法（支持'AES-256-CBC'、'SM4-GCM'），不传默认为'AES-256-CBC' */
  Algorithm?: string;
  /** SM4-GCM算法生成的消息摘要（校验消息完整性时使用） */
  TagList?: string[];
}

/** 获取token时的的配置 */
declare interface GetEidTokenConfig {
  /** 姓名身份证输入方式。1：传身份证正反面OCR 2：传身份证正面OCR 3：用户手动输入 4：客户后台传入 默认1注：使用OCR时仅支持用户修改结果中的姓名 */
  InputType?: string;
  /** 是否使用意愿核身，默认不使用。注意：如开启使用，则计费标签按【意愿核身】计费标签计价；如不开启，则计费标签按【E证通】计费标签计价，价格详见：[价格说明](https://cloud.tencent.com/document/product/1007/56804)。 */
  UseIntentionVerify?: boolean;
  /** 意愿核身模式。枚举值：1( 朗读模式)，2（问答模式） 。默认值1 */
  IntentionMode?: string;
  /** 意愿核身朗读模式使用的文案，若未使用意愿核身朗读功能，该字段无需传入。默认为空，最长可接受120的字符串长度。 */
  IntentionVerifyText?: string;
  /** 意愿核身问答模式的配置列表。当前仅支持一个问答。 */
  IntentionQuestions?: IntentionQuestion[];
  /** 意愿核身过程中识别用户的回答意图，开启后除了IntentionQuestions的Answers列表中的标准回答会通过，近似意图的回答也会通过，默认不开启。 */
  IntentionRecognition?: boolean;
}

/** 意愿核身过程中播报的问题文本、用户回答的标准文本。 */
declare interface IntentionQuestion {
  /** 系统播报的问题文本，问题最大长度为150个字符。 */
  Question: string;
  /** 用户答案的标准文本列表，用于识别用户回答的语音与标准文本是否一致。列表长度最大为50，单个答案长度限制10个字符。 */
  Answers: string[];
}

/** 意愿核身问答模式结果 */
declare interface IntentionQuestionResult {
  /** 意愿核身最终结果：0：认证通过，-1：认证未通过，-2：浏览器内核不兼容，无法进行意愿校验 */
  FinalResultCode: string | null;
  /** 视频base64（其中包含全程问题和回答音频，mp4格式） */
  Video: string | null;
  /** 屏幕截图base64列表 */
  ScreenShot: string[] | null;
  /** 和答案匹配结果列表0：成功，-1：不匹配 */
  ResultCode: string[] | null;
  /** 回答问题语音识别结果列表 */
  AsrResult: string[] | null;
  /** 答案录音音频 */
  Audios: string[] | null;
}

/** 意愿核身相关结果 */
declare interface IntentionVerifyData {
  /** 意愿确认环节中录制的视频（base64）。若不存在则为空字符串。 */
  IntentionVerifyVideo: string | null;
  /** 意愿确认环节中用户语音转文字的识别结果。若不存在则为空字符串。 */
  AsrResult: string | null;
  /** 意愿确认环节的结果码。当该结果码为0时，语音朗读的视频与语音识别结果才会返回。 */
  ErrorCode: number | null;
  /** 意愿确认环节的结果信息。 */
  ErrorMessage: string | null;
  /** 意愿确认环节中录制视频的最佳帧（base64）。若不存在则为空字符串。 */
  IntentionVerifyBestFrame: string | null;
  /** 本次流程用户语音与传入文本比对的相似度分值，取值范围 [0.00, 100.00]。只有配置了相似度阈值后才进行语音校验并返回相似度分值。 */
  AsrResultSimilarity: string | null;
}

/** 账单详情 */
declare interface WeChatBillDetail {
  /** token */
  BizToken: string;
  /** 本token收费次数 */
  ChargeCount: number;
  /** 本token计费详情 */
  ChargeDetails: ChargeDetail[];
  /** 业务RuleId */
  RuleId: string;
}

declare interface BankCard2EVerificationRequest {
  /** 姓名 */
  Name: string;
  /** 银行卡 */
  BankCard: string;
  /** 敏感数据加密信息。对传入信息（姓名、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface BankCard2EVerificationResponse {
  /** 认证结果码计费结果码： '0': '认证通过' '-1': '认证未通过' '-4': '持卡人信息有误' '-5': '未开通无卡支付' '-6': '此卡被没收' '-7': '无效卡号' '-8': '此卡无对应发卡行' '-9': '该卡未初始化或睡眠卡' '-10': '作弊卡、吞卡' '-11': '此卡已挂失' '-12': '该卡已过期' '-13': '受限制的卡' '-14': '密码错误次数超限' '-15': '发卡行不支持此交易'不计费结果码： '-2': '姓名校验不通过' '-3': '银行卡号码有误' '-16': '验证中心服务繁忙' */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BankCard4EVerificationRequest {
  /** 姓名 */
  Name: string;
  /** 银行卡 */
  BankCard: string;
  /** 手机号码 */
  Phone: string;
  /** 开户证件号，与CertType参数的证件类型一致，如：身份证，则传入身份证号。 */
  IdCard: string;
  /** 证件类型，请确认该证件为开户时使用的证件类型，未用于开户的证件信息不支持验证。目前默认为0：身份证，其他证件类型暂不支持。 */
  CertType?: number;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号、手机号、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface BankCard4EVerificationResponse {
  /** 认证结果码收费结果码：'0': '认证通过''-1': '认证未通过''-6': '持卡人信息有误''-7': '未开通无卡支付''-8': '此卡被没收''-9': '无效卡号''-10': '此卡无对应发卡行''-11': '该卡未初始化或睡眠卡''-12': '作弊卡、吞卡''-13': '此卡已挂失''-14': '该卡已过期''-15': '受限制的卡''-16': '密码错误次数超限''-17': '发卡行不支持此交易'不收费结果码：'-2': '姓名校验不通过''-3': '身份证号码有误''-4': '银行卡号码有误''-5': '手机号码不合法''-18': '验证中心服务繁忙' */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BankCardVerificationRequest {
  /** 开户证件号，与CertType参数的证件类型一致，如：身份证，则传入身份证号。 */
  IdCard: string;
  /** 姓名 */
  Name: string;
  /** 银行卡 */
  BankCard: string;
  /** 证件类型，请确认该证件为开户时使用的证件类型，未用于开户的证件信息不支持验证。目前默认：0 身份证，其他证件类型需求可以添加[腾讯云人脸核身小助手](https://cloud.tencent.com/document/product/1007/56130)进行确认。 */
  CertType?: number;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface BankCardVerificationResponse {
  /** 认证结果码收费结果码：'0': '认证通过''-1': '认证未通过''-5': '持卡人信息有误''-6': '未开通无卡支付''-7': '此卡被没收''-8': '无效卡号''-9': '此卡无对应发卡行''-10': '该卡未初始化或睡眠卡''-11': '作弊卡、吞卡''-12': '此卡已挂失''-13': '该卡已过期''-14': '受限制的卡''-15': '密码错误次数超限''-16': '发卡行不支持此交易'不收费结果码：'-2': '姓名校验不通过''-3': '身份证号码有误''-4': '银行卡号码有误''-17': '验证中心服务繁忙' */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckBankCardInformationRequest {
  /** 银行卡号。 */
  BankCard: string;
  /** 敏感数据加密信息。对传入信息（银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface CheckBankCardInformationResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 查询成功-1: 未查到信息不收费结果码-2：验证中心服务繁忙-3：银行卡不存在 */
  Result: string;
  /** 业务结果描述 */
  Description: string;
  /** 开户行 */
  AccountBank: string;
  /** 卡性质：1. 借记卡；2. 贷记卡；3. 预付费卡；4. 准贷记卡 */
  AccountType: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckEidTokenStatusRequest {
  /** E证通流程的唯一标识，调用GetEidToken接口时生成。 */
  EidToken: string;
}

declare interface CheckEidTokenStatusResponse {
  /** 枚举：init：token未验证doing: 验证中finished: 验证完成timeout: token已超时 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckIdCardInformationRequest {
  /** 身份证人像面的 Base64 值支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。ImageBase64、ImageUrl二者必须提供其中之一。若都提供了，则按照ImageUrl>ImageBase64的优先级使用参数。 */
  ImageBase64?: string;
  /** 身份证人像面的 Url 地址支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 以下可选字段均为bool 类型，默认false：CopyWarn，复印件告警BorderCheckWarn，边框和框内遮挡告警ReshootWarn，翻拍告警DetectPsWarn，PS检测告警TempIdWarn，临时身份证告警Quality，图片质量告警（评价图片模糊程度）SDK 设置方式参考：Config = Json.stringify({"CopyWarn":true,"ReshootWarn":true})API 3.0 Explorer 设置方式参考：Config = {"CopyWarn":true,"ReshootWarn":true} */
  Config?: string;
  /** 是否需要对返回中的敏感信息进行加密。默认false。其中敏感信息包括：Response.IdNum、Response.Name */
  IsEncrypt?: boolean;
}

declare interface CheckIdCardInformationResponse {
  /** 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一） */
  Sim: number;
  /** 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 姓名 */
  Name: string;
  /** 性别 */
  Sex: string;
  /** 民族 */
  Nation: string;
  /** 出生日期 */
  Birth: string;
  /** 地址 */
  Address: string;
  /** 身份证号 */
  IdNum: string;
  /** 身份证头像照片的base64编码，如果抠图失败会拿整张身份证做比对并返回空。 */
  Portrait: string;
  /** 告警信息，当在Config中配置了告警信息会停止人像比对，Result返回错误（FailedOperation.OcrWarningOccurred）并有此告警信息，Code 告警码列表和释义：-9101 身份证边框不完整告警，-9102 身份证复印件告警，-9103 身份证翻拍告警，-9105 身份证框内遮挡告警，-9104 临时身份证告警，-9106 身份证 PS 告警。-8001 图片模糊告警多个会 | 隔开如 "-9101|-9106|-9104" */
  Warnings: string;
  /** 图片质量分数，当请求Config中配置图片模糊告警该参数才有意义，取值范围（0～100），目前默认阈值是50分，低于50分会触发模糊告警。 */
  Quality: number;
  /** 敏感数据加密信息。 */
  Encryption: Encryption | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckIdNameDateRequest {
  /** 姓名 */
  Name: string;
  /** 身份证号 */
  IdCard: string;
  /** 身份证有效期开始时间，格式：YYYYMMDD。如：20210701 */
  ValidityBegin: string;
  /** 身份证有效期到期时间，格式：YYYYMMDD，长期用“00000000”代替；如：20210701 */
  ValidityEnd: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface CheckIdNameDateResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 一致-1: 不一致不收费结果码：-2: 非法身份证号（长度、校验位等不正确）-3: 非法姓名（长度、格式等不正确）-4: 非法有效期（长度、格式等不正确）-5: 身份信息无效-6: 证件库服务异常-7: 证件库中无此身份证记录 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckPhoneAndNameRequest {
  /** ⼿机号 */
  Mobile: string;
  /** 姓名 */
  Name: string;
  /** 敏感数据加密信息。对传入信息（姓名、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface CheckPhoneAndNameResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 验证结果一致1: 验证结果不一致不收费结果码：-1:查无记录-2:引擎未知错误-3:引擎服务异常 */
  Result: string;
  /** 业务结果描述 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetectAuthRequest {
  /** 用于细分客户使用场景，申请开通服务后，可以在腾讯云慧眼人脸核身控制台（https://console.cloud.tencent.com/faceid） 自助接入里面创建，审核通过后即可调用。如有疑问，请添加[腾讯云人脸核身小助手](https://cloud.tencent.com/document/product/1007/56130)进行咨询。 */
  RuleId: string;
  /** 本接口不需要传递此参数。 */
  TerminalType?: string;
  /** 身份标识（未使用OCR服务时，必须传入）。规则：a-zA-Z0-9组合。最长长度32位。 */
  IdCard?: string;
  /** 姓名。（未使用OCR服务时，必须传入）最长长度32位。中文请使用UTF-8编码。 */
  Name?: string;
  /** 认证结束后重定向的回调链接地址。最长长度1024位。 */
  RedirectUrl?: string;
  /** 透传字段，在获取验证结果时返回。 */
  Extra?: string;
  /** 用于人脸比对的照片，图片的Base64值；Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64?: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
  /** 意愿核身（朗读模式）使用的文案，若未使用意愿核身（朗读模式），则该字段无需传入。默认为空，最长可接受120的字符串长度。 */
  IntentionVerifyText?: string;
  /** 意愿核身（问答模式）使用的文案，包括：系统语音播报的文本、需要核验的标准文本。当前仅支持一个播报文本+回答文本。 */
  IntentionQuestions?: IntentionQuestion[];
}

declare interface DetectAuthResponse {
  /** 用于发起核身流程的URL，仅微信H5场景使用。 */
  Url: string;
  /** 一次核身流程的标识，有效时间为7,200秒；完成核身后，可用该标识获取验证结果信息。 */
  BizToken: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EncryptedPhoneVerificationRequest {
  /** 身份证号，加密方式以EncryptionMode为准 */
  IdCard: string;
  /** 姓名，加密方式以EncryptionMode为准 */
  Name: string;
  /** 手机号，加密方式以EncryptionMode为准 */
  Phone: string;
  /** 敏感信息的加密方式，目前支持明文、MD5和SHA256加密传输，参数取值：0：明文，不加密1: 使用MD5加密2: 使用SHA256 */
  EncryptionMode: string;
}

declare interface EncryptedPhoneVerificationResponse {
  /** 认证结果码:【收费结果码】0: 三要素信息一致-4: 三要素信息不一致【不收费结果码】-7: 身份证号码有误-8: 参数错误-9: 没有记录-11: 验证中心服务繁忙 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetActionSequenceRequest {
  /** 默认不需要使用 */
  ActionType?: string;
}

declare interface GetActionSequenceResponse {
  /** 动作顺序(2,1 or 1,2) 。1代表张嘴，2代表闭眼。 */
  ActionSequence?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDetectInfoEnhancedRequest {
  /** 人脸核身流程的标识，调用DetectAuth接口时生成。 */
  BizToken: string;
  /** 用于细分客户使用场景，由腾讯侧在线下对接时分配。 */
  RuleId: string;
  /** 指定拉取的结果信息，取值（0：全部；1：文本类；2：身份证信息；3：视频最佳截图信息）。如 13表示拉取文本类、视频最佳截图信息。默认值：0 */
  InfoType?: string;
  /** 从活体视频中截取一定张数的最佳帧（仅部分服务支持，若需使用请与慧眼小助手沟通）。默认为0，最大为10，超出10的最多只给10张。（InfoType需要包含3） */
  BestFramesCount?: number;
  /** 是否对身份证照片进行裁边。默认为false。（InfoType需要包含2） */
  IsCutIdCardImage?: boolean;
  /** 是否需要从身份证中抠出头像。默认为false。（InfoType需要包含2） */
  IsNeedIdCardAvatar?: boolean;
  /** 已弃用。 */
  IsEncrypt?: boolean;
  /** 是否需要对返回中的敏感信息进行加密。仅指定加密算法Algorithm即可，其余字段传入默认值。其中敏感信息包括：Response.Text.IdCard、Response.Text.Name、Response.Text.OcrIdCard、Response.Text.OcrName */
  Encryption?: Encryption;
}

declare interface GetDetectInfoEnhancedResponse {
  /** 文本类信息。 */
  Text: DetectInfoText | null;
  /** 身份证照片信息。 */
  IdCardData: DetectInfoIdCardData | null;
  /** 最佳帧信息。 */
  BestFrame: DetectInfoBestFrame | null;
  /** 视频信息。 */
  VideoData: DetectInfoVideoData | null;
  /** 敏感数据加密信息。 */
  Encryption: Encryption | null;
  /** 意愿核身相关信息。若未使用意愿核身功能，该字段返回值可以不处理。 */
  IntentionVerifyData: IntentionVerifyData | null;
  /** 意愿核身问答模式结果。若未使用该意愿核身功能，该字段返回值可以不处理。 */
  IntentionQuestionResult: IntentionQuestionResult | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetEidResultRequest {
  /** E证通流程的唯一标识，调用GetEidToken接口时生成。 */
  EidToken: string;
  /** 指定拉取的结果信息，取值（0：全部；1：文本类；2：身份证信息；3：最佳截图信息；5：意愿核身朗读模式相关结果；6：意愿核身问答模式相关结果）。如 13表示拉取文本类、最佳截图信息。默认值：0 */
  InfoType?: string;
  /** 从活体视频中截取一定张数的最佳帧。默认为0，最大为3，超出3的最多只给3张。（InfoType需要包含3） */
  BestFramesCount?: number;
}

declare interface GetEidResultResponse {
  /** 文本类信息。（基于对敏感信息的保护，验证使用的姓名和身份证号统一通过加密后从Eidinfo参数中返回，如需获取请在控制台申请返回身份信息，详见[E证通获取实名信息指引](https://cloud.tencent.com/document/product/1007/63370)） */
  Text: DetectInfoText | null;
  /** 身份证照片信息。 */
  IdCardData: DetectInfoIdCardData | null;
  /** 最佳帧信息。 */
  BestFrame: DetectInfoBestFrame | null;
  /** Eid信息。（包括商户下用户唯一标识以及加密后的姓名、身份证号信息。解密方式详见[E证通获取实名信息指引](https://cloud.tencent.com/document/product/1007/63370)） */
  EidInfo: EidInfo | null;
  /** 意愿核身朗读模式相关信息。若未使用意愿核身朗读功能，该字段返回值可以不处理。 */
  IntentionVerifyData: IntentionVerifyData | null;
  /** 意愿核身问答模式相关信息。若未使用意愿核身问答模式功能，该字段返回值可以不处理。 */
  IntentionQuestionResult: IntentionQuestionResult | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetEidTokenRequest {
  /** EID商户id，字段长度最长50位。 */
  MerchantId: string;
  /** 身份标识（未使用OCR服务时，必须传入）。规则：a-zA-Z0-9组合。最长长度32位。 */
  IdCard?: string;
  /** 姓名。（未使用OCR服务时，必须传入）最长长度32位。中文请使用UTF-8编码。 */
  Name?: string;
  /** 透传字段，在获取验证结果时返回。最长长度1024位。 */
  Extra?: string;
  /** 小程序模式配置，包括如何传入姓名身份证的配置，以及是否使用意愿核身。 */
  Config?: GetEidTokenConfig;
  /** 最长长度1024位。用户从Url中进入核身认证结束后重定向的回调链接地址。EidToken会在该链接的query参数中。 */
  RedirectUrl?: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface GetEidTokenResponse {
  /** 一次核身流程的标识，有效时间为600秒；完成核身后，可用该标识获取验证结果信息。 */
  EidToken: string;
  /** 发起核身流程的URL，用于H5场景核身。 */
  Url: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetFaceIdResultRequest {
  /** SDK人脸核身流程的标识，调用GetFaceIdToken接口时生成。 */
  FaceIdToken: string;
  /** 是否需要拉取视频，默认false不需要 */
  IsNeedVideo?: boolean;
  /** 是否需要拉取截帧，默认false不需要 */
  IsNeedBestFrame?: boolean;
}

declare interface GetFaceIdResultResponse {
  /** 身份证 */
  IdCard: string;
  /** 姓名 */
  Name: string;
  /** 业务核验结果，参考https://cloud.tencent.com/document/product/1007/47912 */
  Result: string;
  /** 业务核验描述 */
  Description: string;
  /** 相似度，0-100，数值越大相似度越高 */
  Similarity: number;
  /** 用户核验的视频base64，如果选择了使用cos，返回完整cos地址如https://bucket.cos.ap-guangzhou.myqcloud.com/objectKey */
  VideoBase64: string | null;
  /** 用户核验视频的截帧base64，如果选择了使用cos，返回完整cos地址如https://bucket.cos.ap-guangzhou.myqcloud.com/objectKey */
  BestFrameBase64: string | null;
  /** 获取token时透传的信息 */
  Extra: string | null;
  /** 设备风险标签，仅错误码返回1007（设备疑似被劫持）时返回风险标签。标签说明：202、5001：设备疑似被Root203、5004：设备疑似被注入205：设备疑似被Hook206：设备疑似虚拟运行环境5007、1005：设备疑似摄像头被劫持8000：设备疑似存在异常篡改行为 */
  DeviceInfoTag: string | null;
  /** 行为风险标签，仅错误码返回1007（设备疑似被劫持）时返回风险标签。标签说明：02：攻击风险 */
  RiskInfoTag: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetFaceIdTokenRequest {
  /** 本地上传照片(LOCAL)、商业库(BUSINESS) */
  CompareLib: string;
  /** CompareLib为商业库时必传。 */
  IdCard?: string;
  /** CompareLib为商业库库时必传。 */
  Name?: string;
  /** CompareLib为上传照片比对时必传，Base64后图片最大8MB。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64?: string;
  /** SDK中生成的Meta字符串 */
  Meta?: string;
  /** 透传参数 1000长度字符串 */
  Extra?: string;
  /** 默认为false，设置该参数为true后，核身过程中的视频图片将会存储在人脸核身控制台授权cos的bucket中，拉取结果时会返回对应资源完整cos地址。开通地址见https://console.cloud.tencent.com/faceid/cos【注意】选择该参数为true后将不返回base64数据，请根据接入情况谨慎修改。 */
  UseCos?: boolean;
}

declare interface GetFaceIdTokenResponse {
  /** 有效期 10分钟。只能完成1次核身。 */
  FaceIdToken: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetLiveCodeRequest {
}

declare interface GetLiveCodeResponse {
  /** 数字验证码，如：1234 */
  LiveCode?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRealNameAuthResultRequest {
  /** 实名认证凭证 */
  AuthToken: string;
}

declare interface GetRealNameAuthResultResponse {
  /** 认证结果码，收费情况如下：收费码：0: 姓名和身份证号一致-1: 姓名和身份证号不一致-2: 姓名和微信实名姓名不一致不收费码：-3: 微信号未实名 */
  ResultType?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRealNameAuthTokenRequest {
  /** 姓名 */
  Name: string;
  /** 身份证号 */
  IDCard: string;
  /** 回调地址。实名认证完成后，将会重定向到这个地址通知认证发起方。仅支持http或https协议。 */
  CallbackURL: string;
}

declare interface GetRealNameAuthTokenResponse {
  /** 查询实名认证结果的唯一凭证 */
  AuthToken?: string;
  /** 实名认证授权地址，认证发起方需要重定向到这个地址获取认证用户的授权，仅能在微信环境下打开。 */
  RedirectURL?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetWeChatBillDetailsRequest {
  /** 拉取的日期（YYYY-MM-DD）。最大可追溯到365天前。当天6点后才能拉取前一天的数据。 */
  Date: string;
  /** 游标。用于分页，取第一页时传0，取后续页面时，传入本接口响应中返回的NextCursor字段的值。 */
  Cursor: number;
  /** 需要拉取账单详情业务对应的RuleId。不传会返回所有RuleId数据。默认为空字符串。 */
  RuleId?: string;
}

declare interface GetWeChatBillDetailsResponse {
  /** 是否还有下一页。该字段为true时，需要将NextCursor的值作为入参Cursor继续调用本接口。 */
  HasNextPage: boolean;
  /** 下一页的游标。用于分页。 */
  NextCursor: number;
  /** 数据 */
  WeChatBillDetails: WeChatBillDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IdCardOCRVerificationRequest {
  /** 身份证号姓名和身份证号、ImageBase64、ImageUrl三者必须提供其中之一。若都提供了，则按照姓名和身份证号>ImageBase64>ImageUrl的优先级使用参数。 */
  IdCard?: string;
  /** 姓名 */
  Name?: string;
  /** 身份证人像面的 Base64 值支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 3M。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。 */
  ImageBase64?: string;
  /** 身份证人像面的 Url 地址支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface IdCardOCRVerificationResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 姓名和身份证号一致-1: 姓名和身份证号不一致不收费结果码：-2: 非法身份证号（长度、校验位等不正确）-3: 非法姓名（长度、格式等不正确）-4: 证件库服务异常-5: 证件库中无此身份证记录-6: 权威比对系统升级中，请稍后再试-7: 认证次数超过当日限制 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 用于验证的姓名 */
  Name: string;
  /** 用于验证的身份证号 */
  IdCard: string;
  /** OCR得到的性别 */
  Sex: string | null;
  /** OCR得到的民族 */
  Nation: string | null;
  /** OCR得到的生日 */
  Birth: string | null;
  /** OCR得到的地址 */
  Address: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IdCardVerificationRequest {
  /** 身份证号 */
  IdCard: string;
  /** 姓名 */
  Name: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface IdCardVerificationResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 姓名和身份证号一致-1: 姓名和身份证号不一致不收费结果码：-2: 非法身份证号（长度、校验位等不正确）-3: 非法姓名（长度、格式等不正确）-4: 证件库服务异常-5: 证件库中无此身份证记录-6: 权威比对系统升级中，请稍后再试-7: 认证次数超过当日限制 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Sim: number;
  /** 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LivenessCompareRequest {
  /** 活体检测类型，取值：LIP/ACTION/SILENT。LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。 */
  LivenessType: string;
  /** 用于人脸比对的照片的Base64值；Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageBase64。 */
  ImageBase64?: string;
  /** 用于人脸比对照片的URL地址；图片下载后经Base64编码后的数据大小不超过3M，仅支持jpg、png格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageBase64。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 数字模式传参：传数字验证码，验证码需先调用获取数字验证码接口得到；动作模式传参：传动作顺序，动作顺序需先调用获取动作顺序接口得到；静默模式传参：空。 */
  ValidateData?: string;
  /** 额外配置，传入JSON字符串。{"BestFrameNum": 2 //需要返回多张最佳截图，取值范围2-10} */
  Optional?: string;
  /** 用于活体检测的视频，视频的Base64值；Base64编码后的大小不超过8M，支持mp4、avi、flv格式。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。 */
  VideoBase64?: string;
  /** 用于活体检测的视频Url 地址。视频下载后经Base64编码后不超过 8M，视频下载耗时不超过4S，支持mp4、avi、flv格式。视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。建议视频存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议视频存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  VideoUrl?: string;
}

declare interface LivenessCompareResponse {
  /** 验证通过后的视频最佳截图照片，照片为BASE64编码后的值，jpg格式。 */
  BestFrameBase64: string | null;
  /** 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）。 */
  Sim: number;
  /** 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 最佳截图列表，仅在配置了返回多张最佳截图时返回。 */
  BestFrameList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LivenessRecognitionRequest {
  /** 身份证号 */
  IdCard: string;
  /** 姓名。中文请使用UTF-8编码。 */
  Name: string;
  /** 活体检测类型，取值：LIP/ACTION/SILENT。LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。 */
  LivenessType: string;
  /** 用于活体检测的视频，视频的BASE64值；BASE64编码后的大小不超过8M，支持mp4、avi、flv格式。 */
  VideoBase64?: string;
  /** 用于活体检测的视频Url 地址。视频下载后经Base64编码不超过 8M，视频下载耗时不超过4S，支持mp4、avi、flv格式。视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。建议视频存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议视频存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  VideoUrl?: string;
  /** 数字模式传参：传数字验证码，验证码需先调用获取数字验证码接口得到；动作模式传参：传动作顺序，动作顺序需先调用获取动作顺序接口得到；静默模式传参：空。 */
  ValidateData?: string;
  /** 额外配置，传入JSON字符串。{"BestFrameNum": 2 //需要返回多张最佳截图，取值范围2-10} */
  Optional?: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface LivenessRecognitionResponse {
  /** 验证通过后的视频最佳截图照片，照片为BASE64编码后的值，jpg格式。 */
  BestFrameBase64: string | null;
  /** 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一） */
  Sim: number;
  /** 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 最佳截图列表，仅在配置了返回多张最佳截图时返回。 */
  BestFrameList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 该字段的值为年龄区间。格式为[a,b)，[0,8)表示年龄小于8周岁区间，不包括8岁；[8,16)表示年龄8-16周岁区间，不包括16岁；[16,18)表示年龄16-18周岁区间，不包括18岁；[18,+)表示年龄大于18周岁。 */
  AgeRange: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MobileNetworkTimeVerificationRequest {
  /** 手机号码 */
  Mobile: string;
  /** 敏感数据加密信息。对传入信息（手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface MobileNetworkTimeVerificationResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 成功-2: 手机号不存在-3: 手机号存在，但无法查询到在网时长不收费结果码：-1: 手机号格式不正确-4: 验证中心服务繁忙 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 在网时长区间。格式为(a,b]，表示在网时长在a个月以上，b个月以下。若b为+时表示没有上限。 */
  Range: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MobileStatusRequest {
  /** 手机号码 */
  Mobile: string;
  /** 敏感数据加密信息。对传入信息（手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface MobileStatusResponse {
  /** 认证结果码，收费情况如下。收费结果码：0：成功不收费结果码：-1：未查询到结果-2：手机号格式不正确-3：验证中心服务繁忙 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 状态码：0：正常1：停机2：销号3：空号4：不在网99：未知状态 */
  StatusCode: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ParseNfcDataRequest {
  /** 前端SDK返回 */
  ReqId: string;
}

declare interface ParseNfcDataResponse {
  /** 0为首次查询成功，-1为查询失败。 */
  ResultCode: string | null;
  /** 身份证号 */
  IdNum: string | null;
  /** 姓名 */
  Name: string | null;
  /** 照片 */
  Picture: string | null;
  /** 出生日期 */
  BirthDate: string | null;
  /** 有效期起始时间 */
  BeginTime: string | null;
  /** 有效期结束时间 */
  EndTime: string | null;
  /** 住址 */
  Address: string | null;
  /** 民族 */
  Nation: string | null;
  /** 性别 */
  Sex: string | null;
  /** 身份证 01 中国护照 03 军官证 04 武警证 05 港澳通行证 06 台胞证 07 外国护照 08 士兵证 09 临时身份证 10 户口本 11 警官证 12 外国人永久居留证 13 港澳台居民居住证 14 回乡证 15 大陆居民来往台湾通行证 16 其他证件 99 */
  IdType: string | null;
  /** 英文姓名 */
  EnName: string | null;
  /** 签发机关 */
  SigningOrganization: string | null;
  /** 港澳台居民居住证，通行证号码 */
  OtherIdNum: string | null;
  /** 旅行证件国籍 */
  Nationality: string | null;
  /** 旅行证件机读区第二行 29~42 位 */
  PersonalNumber: string | null;
  /** 旅行证件类的核验结果。JSON格式如下：{"result_issuer ":"签发者证书合法性验证结果 ","result_pape r":"证件安全对象合法性验证 结果 ","result_data" :"防数据篡改验证结果 ","result_chip" :"防证书件芯片被复制验证结果"} 0:验证通过，1: 验证不通过，2: 未验证，3:部分通过，当4项核验结果都为0时，表示证件为真 */
  CheckMRTD: string | null;
  /** 身份证照片面合成图片 */
  ImageA: string | null;
  /** 身份证国徽面合成图片 */
  ImageB: string | null;
  /** 对result code的结果描述 */
  ResultDescription: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PhoneVerificationCMCCRequest {
  /** 身份证号 */
  IdCard: string;
  /** 姓名 */
  Name: string;
  /** 手机号 */
  Phone: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface PhoneVerificationCMCCResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 认证通过-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）不收费结果码：-6: 手机号码不合法-7: 身份证号码有误-8: 姓名校验不通过-9: 没有记录-10: 认证未通过-11: 验证中心服务繁忙 */
  Result: string;
  /** 运营商名称。取值范围为["移动","联通","电信",""] */
  Isp: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PhoneVerificationCTCCRequest {
  /** 身份证号 */
  IdCard: string;
  /** 姓名 */
  Name: string;
  /** 手机号 */
  Phone: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface PhoneVerificationCTCCResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 认证通过-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）不收费结果码：-6: 手机号码不合法-7: 身份证号码有误-8: 姓名校验不通过-9: 没有记录-10: 认证未通过-11: 验证中心服务繁忙 */
  Result: string;
  /** 运营商名称。取值范围为["移动","联通","电信",""] */
  Isp: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PhoneVerificationCUCCRequest {
  /** 身份证号 */
  IdCard: string;
  /** 姓名 */
  Name: string;
  /** 手机号 */
  Phone: string;
  /** 敏感数据加密信息。对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption?: Encryption;
}

declare interface PhoneVerificationCUCCResponse {
  /** 认证结果码，收费情况如下。收费结果码：0: 认证通过-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）不收费结果码：-6: 手机号码不合法-7: 身份证号码有误-8: 姓名校验不通过-9: 没有记录-10: 认证未通过-11: 验证中心服务繁忙 */
  Result: string;
  /** 运营商名称。取值范围为["移动","联通","电信",""] */
  Isp: string;
  /** 业务结果描述。 */
  Description: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PhoneVerificationRequest {
  /** 身份证号 */
  IdCard: string;
  /** 姓名 */
  Name: string;
  /** 手机号 */
  Phone: string;
  /** 有加密需求的用户，传入kms的CiphertextBlob，关于数据加密可查阅 数据加密 文档。 */
  CiphertextBlob?: string;
  /** 在使用加密服务时，填入要被加密的字段。本接口中可填入加密后的IdCard，Name，Phone中的一个或多个。 */
  EncryptList?: string[];
  /** 有加密需求的用户，传入CBC加密的初始向量。 */
  Iv?: string;
}

declare interface PhoneVerificationResponse {
  /** 认证结果码:收费结果码0: 三要素信息一致-4: 三要素信息不一致不收费结果码-6: 手机号码不合法-7: 身份证号码有误-8: 姓名校验不通过-9: 没有记录-11: 验证中心服务繁忙 */
  Result: string;
  /** 业务结果描述。 */
  Description: string;
  /** 运营商名称。取值范围为["","移动","电信","联通"] */
  Isp: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Faceid 人脸核身} */
declare interface Faceid {
  (): Versions;
  /** {@link BankCard2EVerification 银行卡二要素核验}({@link BankCard2EVerificationRequest 请求参数}): {@link BankCard2EVerificationResponse 返回参数} */
  BankCard2EVerification(data: BankCard2EVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<BankCard2EVerificationResponse>;
  /** {@link BankCard4EVerification 银行卡四要素核验}({@link BankCard4EVerificationRequest 请求参数}): {@link BankCard4EVerificationResponse 返回参数} */
  BankCard4EVerification(data: BankCard4EVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<BankCard4EVerificationResponse>;
  /** {@link BankCardVerification 银行卡三要素核验}({@link BankCardVerificationRequest 请求参数}): {@link BankCardVerificationResponse 返回参数} */
  BankCardVerification(data: BankCardVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<BankCardVerificationResponse>;
  /** {@link CheckBankCardInformation 银行卡基础信息查询}({@link CheckBankCardInformationRequest 请求参数}): {@link CheckBankCardInformationResponse 返回参数} */
  CheckBankCardInformation(data: CheckBankCardInformationRequest, config?: AxiosRequestConfig): AxiosPromise<CheckBankCardInformationResponse>;
  /** {@link CheckEidTokenStatus 获取E证通Token状态}({@link CheckEidTokenStatusRequest 请求参数}): {@link CheckEidTokenStatusResponse 返回参数} */
  CheckEidTokenStatus(data: CheckEidTokenStatusRequest, config?: AxiosRequestConfig): AxiosPromise<CheckEidTokenStatusResponse>;
  /** {@link CheckIdCardInformation 身份证人像照片验真}({@link CheckIdCardInformationRequest 请求参数}): {@link CheckIdCardInformationResponse 返回参数} */
  CheckIdCardInformation(data?: CheckIdCardInformationRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIdCardInformationResponse>;
  /** {@link CheckIdNameDate 身份信息及有效期核验}({@link CheckIdNameDateRequest 请求参数}): {@link CheckIdNameDateResponse 返回参数} */
  CheckIdNameDate(data: CheckIdNameDateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIdNameDateResponse>;
  /** {@link CheckPhoneAndName 手机号二要素核验}({@link CheckPhoneAndNameRequest 请求参数}): {@link CheckPhoneAndNameResponse 返回参数} */
  CheckPhoneAndName(data: CheckPhoneAndNameRequest, config?: AxiosRequestConfig): AxiosPromise<CheckPhoneAndNameResponse>;
  /** {@link DetectAuth 实名核身鉴权}({@link DetectAuthRequest 请求参数}): {@link DetectAuthResponse 返回参数} */
  DetectAuth(data: DetectAuthRequest, config?: AxiosRequestConfig): AxiosPromise<DetectAuthResponse>;
  /** {@link EncryptedPhoneVerification 运营商三要素核验（加密）}({@link EncryptedPhoneVerificationRequest 请求参数}): {@link EncryptedPhoneVerificationResponse 返回参数} */
  EncryptedPhoneVerification(data: EncryptedPhoneVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<EncryptedPhoneVerificationResponse>;
  /** {@link GetActionSequence 获取动作顺序}({@link GetActionSequenceRequest 请求参数}): {@link GetActionSequenceResponse 返回参数} */
  GetActionSequence(data?: GetActionSequenceRequest, config?: AxiosRequestConfig): AxiosPromise<GetActionSequenceResponse>;
  /** {@link GetDetectInfo 获取实名核身结果信息}({@link GetDetectInfoRequest 请求参数}): {@link GetDetectInfoResponse 返回参数} */
  GetDetectInfo(data: GetDetectInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetDetectInfoResponse>;
  /** {@link GetDetectInfoEnhanced 获取实名核身结果信息增强版}({@link GetDetectInfoEnhancedRequest 请求参数}): {@link GetDetectInfoEnhancedResponse 返回参数} */
  GetDetectInfoEnhanced(data: GetDetectInfoEnhancedRequest, config?: AxiosRequestConfig): AxiosPromise<GetDetectInfoEnhancedResponse>;
  /** {@link GetEidResult 获取E证通结果信息}({@link GetEidResultRequest 请求参数}): {@link GetEidResultResponse 返回参数} */
  GetEidResult(data: GetEidResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetEidResultResponse>;
  /** {@link GetEidToken 获取E证通Token}({@link GetEidTokenRequest 请求参数}): {@link GetEidTokenResponse 返回参数} */
  GetEidToken(data: GetEidTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetEidTokenResponse>;
  /** {@link GetFaceIdResult 获取SDK核验结果}({@link GetFaceIdResultRequest 请求参数}): {@link GetFaceIdResultResponse 返回参数} */
  GetFaceIdResult(data: GetFaceIdResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetFaceIdResultResponse>;
  /** {@link GetFaceIdToken 获取SDKToken}({@link GetFaceIdTokenRequest 请求参数}): {@link GetFaceIdTokenResponse 返回参数} */
  GetFaceIdToken(data: GetFaceIdTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetFaceIdTokenResponse>;
  /** {@link GetLiveCode 获取数字验证码}({@link GetLiveCodeRequest 请求参数}): {@link GetLiveCodeResponse 返回参数} */
  GetLiveCode(data?: GetLiveCodeRequest, config?: AxiosRequestConfig): AxiosPromise<GetLiveCodeResponse>;
  /** {@link GetRealNameAuthResult 获取微信实名认证结果}({@link GetRealNameAuthResultRequest 请求参数}): {@link GetRealNameAuthResultResponse 返回参数} */
  GetRealNameAuthResult(data: GetRealNameAuthResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetRealNameAuthResultResponse>;
  /** {@link GetRealNameAuthToken 微信实名认证授权}({@link GetRealNameAuthTokenRequest 请求参数}): {@link GetRealNameAuthTokenResponse 返回参数} */
  GetRealNameAuthToken(data: GetRealNameAuthTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetRealNameAuthTokenResponse>;
  /** {@link GetWeChatBillDetails 查询账单明细（微信渠道）}({@link GetWeChatBillDetailsRequest 请求参数}): {@link GetWeChatBillDetailsResponse 返回参数} */
  GetWeChatBillDetails(data: GetWeChatBillDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<GetWeChatBillDetailsResponse>;
  /** {@link IdCardOCRVerification 身份证识别及信息核验}({@link IdCardOCRVerificationRequest 请求参数}): {@link IdCardOCRVerificationResponse 返回参数} */
  IdCardOCRVerification(data?: IdCardOCRVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<IdCardOCRVerificationResponse>;
  /** {@link IdCardVerification 身份信息认证}({@link IdCardVerificationRequest 请求参数}): {@link IdCardVerificationResponse 返回参数} */
  IdCardVerification(data: IdCardVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<IdCardVerificationResponse>;
  /** {@link ImageRecognition 照片人脸核身}({@link ImageRecognitionRequest 请求参数}): {@link ImageRecognitionResponse 返回参数} */
  ImageRecognition(data: ImageRecognitionRequest, config?: AxiosRequestConfig): AxiosPromise<ImageRecognitionResponse>;
  /** {@link Liveness 活体检测}({@link LivenessRequest 请求参数}): {@link LivenessResponse 返回参数} */
  Liveness(data: LivenessRequest, config?: AxiosRequestConfig): AxiosPromise<LivenessResponse>;
  /** {@link LivenessCompare 活体人脸比对}({@link LivenessCompareRequest 请求参数}): {@link LivenessCompareResponse 返回参数} */
  LivenessCompare(data: LivenessCompareRequest, config?: AxiosRequestConfig): AxiosPromise<LivenessCompareResponse>;
  /** {@link LivenessRecognition 活体人脸核身}({@link LivenessRecognitionRequest 请求参数}): {@link LivenessRecognitionResponse 返回参数} */
  LivenessRecognition(data: LivenessRecognitionRequest, config?: AxiosRequestConfig): AxiosPromise<LivenessRecognitionResponse>;
  /** {@link MinorsVerification 手机号实名查询}({@link MinorsVerificationRequest 请求参数}): {@link MinorsVerificationResponse 返回参数} */
  MinorsVerification(data: MinorsVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<MinorsVerificationResponse>;
  /** {@link MobileNetworkTimeVerification 手机号在网时长核验}({@link MobileNetworkTimeVerificationRequest 请求参数}): {@link MobileNetworkTimeVerificationResponse 返回参数} */
  MobileNetworkTimeVerification(data: MobileNetworkTimeVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<MobileNetworkTimeVerificationResponse>;
  /** {@link MobileStatus 手机号状态查询}({@link MobileStatusRequest 请求参数}): {@link MobileStatusResponse 返回参数} */
  MobileStatus(data: MobileStatusRequest, config?: AxiosRequestConfig): AxiosPromise<MobileStatusResponse>;
  /** {@link ParseNfcData 获取证件NFC结果}({@link ParseNfcDataRequest 请求参数}): {@link ParseNfcDataResponse 返回参数} */
  ParseNfcData(data: ParseNfcDataRequest, config?: AxiosRequestConfig): AxiosPromise<ParseNfcDataResponse>;
  /** {@link PhoneVerification 手机号三要素核验}({@link PhoneVerificationRequest 请求参数}): {@link PhoneVerificationResponse 返回参数} */
  PhoneVerification(data: PhoneVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationResponse>;
  /** {@link PhoneVerificationCMCC 手机号三要素核验（移动）}({@link PhoneVerificationCMCCRequest 请求参数}): {@link PhoneVerificationCMCCResponse 返回参数} */
  PhoneVerificationCMCC(data: PhoneVerificationCMCCRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationCMCCResponse>;
  /** {@link PhoneVerificationCTCC 手机号三要素核验（电信）}({@link PhoneVerificationCTCCRequest 请求参数}): {@link PhoneVerificationCTCCResponse 返回参数} */
  PhoneVerificationCTCC(data: PhoneVerificationCTCCRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationCTCCResponse>;
  /** {@link PhoneVerificationCUCC 手机号三要素核验（联通）}({@link PhoneVerificationCUCCRequest 请求参数}): {@link PhoneVerificationCUCCResponse 返回参数} */
  PhoneVerificationCUCC(data: PhoneVerificationCUCCRequest, config?: AxiosRequestConfig): AxiosPromise<PhoneVerificationCUCCResponse>;
}

export declare type Versions = ["2018-03-01"];

export default Faceid;
