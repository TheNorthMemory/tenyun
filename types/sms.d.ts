/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 添加签名响应 */
declare interface AddSignStatus {
  /** 签名ID。 */
  SignId: number;
}

/** 添加模板参数响应 */
declare interface AddTemplateStatus {
  /** 模板ID。 */
  TemplateId: string;
}

/** 回执数据统计响应包体 */
declare interface CallbackStatusStatistics {
  /** 短信回执量统计。 */
  CallbackCount: number;
  /** 短信提交成功量统计。 */
  RequestSuccessCount: number;
  /** 短信回执失败量统计。 */
  CallbackFailCount: number;
  /** 短信回执成功量统计。 */
  CallbackSuccessCount: number;
  /** 运营商内部错误统计。 */
  InternalErrorCount: number;
  /** 号码无效或空号统计。 */
  InvalidNumberCount: number;
  /** 停机、关机等错误统计。 */
  ShutdownErrorCount: number;
  /** 号码拉入黑名单统计。 */
  BlackListCount: number;
  /** 运营商频率限制统计。 */
  FrequencyLimitCount: number;
}

/** 删除签名响应 */
declare interface DeleteSignStatus {
  /** 删除状态信息。 */
  DeleteStatus: string | null;
  /** 删除时间，UNIX 时间戳（单位：秒）。 */
  DeleteTime: number | null;
}

/** 删除模板响应 */
declare interface DeleteTemplateStatus {
  /** 删除状态信息。 */
  DeleteStatus: string;
  /** 删除时间，UNIX 时间戳（单位：秒）。 */
  DeleteTime: number;
}

/** 获取短信签名信息响应 */
declare interface DescribeSignListStatus {
  /** 签名ID。 */
  SignId?: number;
  /** 是否国际/港澳台短信，其中0表示国内短信，1表示国际/港澳台短信。 */
  International?: number;
  /** 申请签名状态，其中0表示审核通过且已生效，1表示审核中，2表示审核通过待生效，-1表示审核未通过或审核失败。 */
  StatusCode?: number;
  /** 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。 */
  ReviewReply?: string;
  /** 签名名称。 */
  SignName?: string;
  /** 提交审核时间，UNIX 时间戳（单位：秒）。 */
  CreateTime?: number;
}

/** 获取短信模板信息响应 */
declare interface DescribeTemplateListStatus {
  /** 模板ID。 */
  TemplateId?: number;
  /** 是否国际/港澳台短信，其中0表示国内短信，1表示国际/港澳台短信，3表示该模板既支持国内短信也支持国际/港澳台短信。 */
  International?: number;
  /** 申请模板状态，其中0表示审核通过且已生效，1表示审核中，2表示审核通过待生效，-1表示审核未通过或审核失败。注：只有状态值为0时该模板才能使用。 */
  StatusCode?: number;
  /** 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。 */
  ReviewReply?: string;
  /** 模板名称。 */
  TemplateName?: string;
  /** 提交审核时间，UNIX 时间戳（单位：秒）。 */
  CreateTime?: number;
  /** 模板内容。 */
  TemplateContent?: string;
}

/** 修改签名响应 */
declare interface ModifySignStatus {
  /** 签名ID。 */
  SignId: number;
}

/** 修改模板参数响应 */
declare interface ModifyTemplateStatus {
  /** 模板ID。 */
  TemplateId: number;
}

/** 号码信息。 */
declare interface PhoneNumberInfo {
  /** 号码信息查询错误码，查询成功返回 "Ok"。 */
  Code: string;
  /** 号码信息查询错误码描述。 */
  Message: string;
  /** 国家（或地区）码。 */
  NationCode: string;
  /** 用户号码，去除国家或地区码前缀的普通格式，示例如：13711112222。 */
  SubscriberNumber: string;
  /** 解析后的规范的 E.164 号码，与下发短信的号码解析结果一致。解析失败时会原样返回。 */
  PhoneNumber: string;
  /** 国家码或地区码，例如 CN、US 等，对于未识别出国家码或者地区码，默认返回 DEF。 */
  IsoCode: string;
  /** 国家码或地区名，例如 China，可参考 [国际/港澳台短信价格总览](https://cloud.tencent.com/document/product/382/18051) */
  IsoName: string;
}

/** 短信回复状态 */
declare interface PullSmsReplyStatus {
  /** 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。 */
  ExtendCode: string;
  /** 国家（或地区）码。 */
  CountryCode: string;
  /** 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  PhoneNumber: string;
  /** 短信签名名称。 */
  SignName: string;
  /** 用户回复的内容。 */
  ReplyContent: string;
  /** 回复时间，UNIX 时间戳（单位：秒）。 */
  ReplyTime: number;
  /** 用户号码，普通格式，示例如：13711112222。 */
  SubscriberNumber: string;
}

/** 短信的下发状态详细信息 */
declare interface PullSmsSendStatus {
  /** 用户实际接收到短信的时间，UNIX 时间戳（单位：秒）。 */
  UserReceiveTime?: number;
  /** 国家（或地区）码。 */
  CountryCode?: string;
  /** 用户号码，普通格式，示例如：13711112222。 */
  SubscriberNumber?: string;
  /** 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  PhoneNumber?: string;
  /** 本次发送标识 ID。 */
  SerialNo?: string;
  /** 实际是否收到短信接收状态，SUCCESS（成功）、FAIL（失败）。 */
  ReportStatus?: string;
  /** 用户接收短信状态描述。 */
  Description?: string;
  /** 用户的 session 内容。与请求中的 SessionContext 一致，默认为空，如需开通请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773) 评估。 */
  SessionContext?: string | null;
}

/** 转化率上报响应。 */
declare interface ReportConversionStatus {
  /** 错误码。上报成功返回 ok。 */
  Code: string;
  /** 错误码描述。 */
  Message: string;
}

/** 发送短信状态 */
declare interface SendStatus {
  /** 发送流水号。 */
  SerialNo: string;
  /** 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  PhoneNumber: string;
  /** 计费条数，计费规则请查询 [计费策略](https://cloud.tencent.com/document/product/382/36135)。 */
  Fee: number;
  /** 用户 session 内容。 */
  SessionContext: string;
  /** 短信请求错误码，具体含义请参考 [错误码](https://cloud.tencent.com/document/api/382/55981)，发送成功返回 "Ok"。 */
  Code: string;
  /** 短信请求错误码描述。 */
  Message: string;
  /** 国家码或地区码，例如 CN、US 等，对于未识别出国家码或者地区码，默认返回 DEF，具体支持列表请参考 [国际/港澳台短信价格总览](https://cloud.tencent.com/document/product/382/18051)。 */
  IsoCode: string;
}

/** 发送数据统计响应包体 */
declare interface SendStatusStatistics {
  /** 短信计费条数统计，例如提交成功量为100条，其中有20条是长短信（长度为80字）被拆分成2条，则计费条数为： ```80 * 1 + 20 * 2 = 120``` 条。 */
  FeeCount: number;
  /** 短信提交量统计。 */
  RequestCount: number;
  /** 短信提交成功量统计。 */
  RequestSuccessCount: number;
}

/** 套餐包信息统计响应包体 */
declare interface SmsPackagesStatistics {
  /** 套餐包创建时间，UNIX 时间戳（单位：秒）。 */
  PackageCreateTime: number;
  /** 套餐包生效时间，UNIX 时间戳（单位：秒）。 */
  PackageEffectiveTime: number;
  /** 套餐包过期时间，UNIX 时间戳（单位：秒）。 */
  PackageExpiredTime: number;
  /** 套餐包条数。 */
  PackageAmount: number;
  /** 套餐包类别，0表示赠送套餐包，1表示购买套餐包。 */
  PackageType: number;
  /** 套餐包 ID。 */
  PackageId: number;
  /** 当前使用套餐包条数。 */
  CurrentUsage: number;
}

declare interface AddSmsSignRequest {
  /** 签名名称。注：不能重复申请已通过或待审核的签名。 */
  SignName: string;
  /** 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：0：公司，可选 DocumentType 有（0，1）。1：APP，可选 DocumentType 有（0，1，2，3，4） 。2：网站，可选 DocumentType 有（0，1，2，3，5）。3：公众号，可选 DocumentType 有（0，1，2，3，8）。4：商标，可选 DocumentType 有（7）。5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。6：小程序，可选 DocumentType 有（0，1，2，3，6）。注：必须按照对应关系选择证明类型，否则会审核失败。 */
  SignType: number;
  /** 证明类型：0：三证合一。1：企业营业执照。2：组织机构代码证书。3：社会信用代码证书。4：应用后台管理截图（个人开发APP）。5：网站备案后台截图（个人开发网站）。6：小程序设置页面截图（个人认证小程序）。7：商标注册书。8：公众号设置页面截图（个人认证公众号）。 */
  DocumentType: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 签名用途：0：自用。1：他用。 */
  SignPurpose: number;
  /** 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。 */
  ProofImage: string;
  /** 委托授权证明。选择 SignPurpose 为他用之后需要提交委托的授权证明。图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。注：只有 SignPurpose 在选择为 1（他用）时，这个字段才会生效。 */
  CommissionImage?: string;
  /** 签名的申请备注。 */
  Remark?: string;
}

declare interface AddSmsSignResponse {
  /** 添加签名响应 */
  AddSignStatus?: AddSignStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddSmsTemplateRequest {
  /** 模板名称。 */
  TemplateName: string;
  /** 模板内容。 */
  TemplateContent: string;
  /** 短信类型，1表示营销短信，2表示通知短信，3表示验证码短信。注：为进一步提升短信发送质量、提高短信模板审核通过率，从2024年5月16日起，腾讯云短信模板类型优化为“验证码短信”、“通知短信”、“营销短信”，可参考[关于腾讯云短信模板类型优化公告](https://cloud.tencent.com/document/product/382/106171)。新开通短信服务的客户需严格参考新的短信类型申请短信模板。 */
  SmsType: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 模板备注，例如申请原因，使用场景等。 */
  Remark: string;
}

declare interface AddSmsTemplateResponse {
  /** 添加短信模板响应包体 */
  AddTemplateStatus?: AddTemplateStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CallbackStatusStatisticsRequest {
  /** 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。 */
  BeginTime: string;
  /** 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。注：EndTime 必须大于 BeginTime，且相差不超过32天。 */
  EndTime: string;
  /** 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，示例如1400006666。 */
  SmsSdkAppId: string;
  /** 最大上限。注：目前固定设置为0。 */
  Limit: number;
  /** 偏移量。注：目前固定设置为0。 */
  Offset: number;
}

declare interface CallbackStatusStatisticsResponse {
  /** 回执数据统计响应包体。 */
  CallbackStatusStatistics?: CallbackStatusStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSmsSignRequest {
  /** 待删除的签名 ID。 */
  SignId: number;
}

declare interface DeleteSmsSignResponse {
  /** 删除签名响应 */
  DeleteSignStatus?: DeleteSignStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSmsTemplateRequest {
  /** 待删除的模板 ID。 */
  TemplateId: number;
}

declare interface DeleteSmsTemplateResponse {
  /** 删除模板响应 */
  DeleteTemplateStatus?: DeleteTemplateStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePhoneNumberInfoRequest {
  /** 查询手机号码，采用 E.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号。例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  PhoneNumberSet: string[];
}

declare interface DescribePhoneNumberInfoResponse {
  /** 获取号码信息。 */
  PhoneNumberInfoSet?: PhoneNumberInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmsSignListRequest {
  /** 签名 ID 数组。注：默认数组最大长度100。 */
  SignIdSet: number[];
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
}

declare interface DescribeSmsSignListResponse {
  /** 获取签名信息响应 */
  DescribeSignListStatusSet?: DescribeSignListStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmsTemplateListRequest {
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 模板 ID 数组。数组为空时默认查询模板列表信息，请使用 Limit 和 Offset 字段设置查询范围。默认数组长度最大100</dx-alert> */
  TemplateIdSet?: number[];
  /** 最大上限，最多100。注：默认为0，TemplateIdSet 为空时启用。 */
  Limit?: number;
  /** 偏移量。注：默认为0，TemplateIdSet 为空时启用。 */
  Offset?: number;
}

declare interface DescribeSmsTemplateListResponse {
  /** 获取短信模板信息响应 */
  DescribeTemplateStatusSet?: DescribeTemplateListStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySmsSignRequest {
  /** 待修改的签名 ID。 */
  SignId: number;
  /** 签名名称。 */
  SignName: string;
  /** 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：0：公司，可选 DocumentType 有（0，1）。1：APP，可选 DocumentType 有（0，1，2，3，4） 。2：网站，可选 DocumentType 有（0，1，2，3，5）。3：公众号，可选 DocumentType 有（0，1，2，3，8）。4：商标，可选 DocumentType 有（7）。5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。6：小程序，可选 DocumentType 有（0，1，2，3，6）。注：必须按照对应关系选择证明类型，否则会审核失败。 */
  SignType: number;
  /** 证明类型：0：三证合一。1：企业营业执照。2：组织机构代码证书。3：社会信用代码证书。4：应用后台管理截图（个人开发APP）。5：网站备案后台截图（个人开发网站）。6：小程序设置页面截图（个人认证小程序）。7：商标注册书。8：公众号设置页面截图（个人认证公众号）。 */
  DocumentType: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。注：需要和待修改签名International值保持一致，该参数不能直接修改国内签名到国际签名。 */
  International: number;
  /** 签名用途：0：自用。1：他用。 */
  SignPurpose: number;
  /** 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。 */
  ProofImage: string;
  /** 委托授权证明。选择 SignPurpose 为他用之后需要提交委托的授权证明。图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。注：只有 SignPurpose 在选择为 1（他用）时，这个字段才会生效。 */
  CommissionImage?: string;
  /** 签名的申请备注。 */
  Remark?: string;
}

declare interface ModifySmsSignResponse {
  /** 修改签名响应 */
  ModifySignStatus?: ModifySignStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySmsTemplateRequest {
  /** 待修改模板的ID。 */
  TemplateId: number;
  /** 新的模板名称。 */
  TemplateName: string;
  /** 新的模板内容。 */
  TemplateContent: string;
  /** 短信类型，1表示营销短信，2表示通知短信，3表示验证码短信。注：为进一步提升短信发送质量、提高短信模板审核通过率，从2024年5月16日起，腾讯云短信模板类型优化为“验证码短信”、“通知短信”、“营销短信”，可参考[关于腾讯云短信模板类型优化公告](https://cloud.tencent.com/document/product/382/106171)。新开通短信服务的客户需严格参考新的短信类型申请短信模板。 */
  SmsType: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。注：需要和待修改模板 International 值保持一致，该参数不能直接修改国内模板到国际模板。 */
  International: number;
  /** 模板备注，例如申请原因，使用场景等。 */
  Remark: string;
}

declare interface ModifySmsTemplateResponse {
  /** 修改模板参数响应 */
  ModifyTemplateStatus?: ModifyTemplateStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PullSmsReplyStatusByPhoneNumberRequest {
  /** 拉取起始时间，UNIX 时间戳（时间：秒）。注：最大可拉取当前时期前7天的数据。 */
  BeginTime: number;
  /** 偏移量。注：目前固定设置为0。 */
  Offset: number;
  /** 拉取最大条数，最多 100。 */
  Limit: number;
  /** 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  PhoneNumber: string;
  /** 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，示例如1400006666。 */
  SmsSdkAppId: string;
  /** 拉取截止时间，UNIX 时间戳（时间：秒）。 */
  EndTime?: number;
}

declare interface PullSmsReplyStatusByPhoneNumberResponse {
  /** 回复状态响应集合。 */
  PullSmsReplyStatusSet?: PullSmsReplyStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PullSmsReplyStatusRequest {
  /** 拉取最大条数，最多100条。 */
  Limit: number;
  /** 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，例如1400006666。 */
  SmsSdkAppId: string;
}

declare interface PullSmsReplyStatusResponse {
  /** 回复状态响应集合。 */
  PullSmsReplyStatusSet?: PullSmsReplyStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PullSmsSendStatusByPhoneNumberRequest {
  /** 拉取起始时间，UNIX 时间戳（时间：秒）。注：最大可拉取当前时期前7天的数据。 */
  BeginTime: number;
  /** 偏移量。注：目前固定设置为0。 */
  Offset: number;
  /** 拉取最大条数，最多 100。 */
  Limit: number;
  /** 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  PhoneNumber: string;
  /** 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，示例如1400006666。 */
  SmsSdkAppId: string;
  /** 拉取截止时间，UNIX 时间戳（时间：秒）。 */
  EndTime?: number;
}

declare interface PullSmsSendStatusByPhoneNumberResponse {
  /** 下发状态响应集合。 */
  PullSmsSendStatusSet?: PullSmsSendStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PullSmsSendStatusRequest {
  /** 拉取最大条数，最多100条。 */
  Limit: number;
  /** 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，例如1400006666。 */
  SmsSdkAppId: string;
}

declare interface PullSmsSendStatusResponse {
  /** 下发状态响应集合。 */
  PullSmsSendStatusSet?: PullSmsSendStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportConversionRequest {
  /** 短信应用ID。在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，示例如1400006666。 */
  SmsSdkAppId: string;
  /** 发送短信返回的流水号。 */
  SerialNo: string;
  /** 用户回填时间，UNIX 时间戳（单位：秒）。 */
  ConversionTime?: number;
}

declare interface ReportConversionResponse {
  /** 转化率上报响应包体。 */
  ReportConversionStatus?: ReportConversionStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendSmsRequest {
  /** 下发手机号码，采用 E.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号或全为境外手机号。例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。注：发送国内短信格式还支持0086、86或无任何国家或地区码的11位手机号码，前缀默认为+86。 */
  PhoneNumberSet: string[];
  /** 短信 SdkAppId，在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，示例如1400006666。 */
  SmsSdkAppId: string;
  /** 模板 ID，必须填写已审核通过的模板 ID。模板 ID 可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-template) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-template) 的正文模板管理查看，若向境外手机号发送短信，仅支持使用国际/港澳台短信模板。 */
  TemplateId: string;
  /** 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名，例如：腾讯云，签名信息可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-sign) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-sign) 的签名管理查看。发送国内短信该参数必填，且需填写签名内容而非签名ID。发送国际/港澳台短信该参数非必填。</dx-alert> */
  SignName?: string;
  /** 模板参数，若无模板参数，则设置为空。模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致。</dx-alert> */
  TemplateParamSet?: string[];
  /** 短信码号扩展号，默认未开通，如需开通请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773)。 */
  ExtendCode?: string;
  /** 用户的 session 内容，可以携带用户侧 ID 等上下文信息，server 会原样返回。注意长度需小于512字节。 */
  SessionContext?: string;
  /** 国内短信无需填写该项；国际/港澳台短信已申请独立 SenderId 需要填写该字段，默认使用公共 SenderId，无需填写该字段。注：月度使用量达到指定量级可申请独立 SenderId 使用，详情请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773)。 */
  SenderId?: string;
}

declare interface SendSmsResponse {
  /** 短信发送状态。 */
  SendStatusSet?: SendStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendStatusStatisticsRequest {
  /** 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。 */
  BeginTime: string;
  /** 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。注：EndTime 必须大于 BeginTime。 */
  EndTime: string;
  /** 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，示例如1400006666。 */
  SmsSdkAppId: string;
  /** 最大上限。注：目前固定设置为0。 */
  Limit: number;
  /** 偏移量。注：目前固定设置为0。 */
  Offset: number;
}

declare interface SendStatusStatisticsResponse {
  /** 发送数据统计响应包体。 */
  SendStatusStatistics?: SendStatusStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SmsPackagesStatisticsRequest {
  /** 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，示例如1400006666。 */
  SmsSdkAppId: string;
  /** 最大上限(需要拉取的套餐包个数)。 */
  Limit: number;
  /** 偏移量。 */
  Offset: number;
  /** 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。注：接口会返回 BeginTime 到 EndTime 之间创建的套餐包的统计信息。 */
  BeginTime: string;
  /** 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。注：EndTime 必须大于 BeginTime 且小于当前时间。 */
  EndTime: string;
}

declare interface SmsPackagesStatisticsResponse {
  /** 发送数据统计响应包体。 */
  SmsPackagesStatisticsSet?: SmsPackagesStatistics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20190711 {
  type VersionHeader = { headers: { 'X-TC-Version': '2019-07-11' } }

  /** 添加签名响应 */
  interface AddSignStatus {
    /** 签名Id。 */
    SignId: number;
    /** 签名申请Id。 */
    SignApplyId: number;
  }

  /** 添加模板参数响应 */
  interface AddTemplateStatus {
    /** 模板参数 */
    TemplateId: string;
  }

  /** 回执数据统计响应包体 */
  interface CallbackStatusStatistics {
    /** 短信回执量统计。 */
    CallbackCount: number;
    /** 短信提交成功量统计。 */
    RequestSuccessCount: number;
    /** 短信回执失败量统计。 */
    CallbackFailCount: number;
    /** 短信回执成功量统计。 */
    CallbackSuccessCount: number;
    /** 运营商内部错误统计。 */
    InternalErrorCount: number;
    /** 号码无效或空号统计。 */
    InvalidNumberCount: number;
    /** 停机、关机等错误统计。 */
    ShutdownErrorCount: number;
    /** 号码拉入黑名单统计。 */
    BlackListCount: number;
    /** 运营商频率限制统计。 */
    FrequencyLimitCount: number;
  }

  /** 删除签名响应 */
  interface DeleteSignStatus {
    /** 删除状态信息。 */
    DeleteStatus: string | null;
    /** 删除时间，UNIX 时间戳（单位：秒）。 */
    DeleteTime: number | null;
  }

  /** 删除模板响应 */
  interface DeleteTemplateStatus {
    /** 删除状态信息。 */
    DeleteStatus: string;
    /** 删除时间，UNIX 时间戳（单位：秒）。 */
    DeleteTime: number;
  }

  /** 获取短信签名信息响应 */
  interface DescribeSignListStatus {
    /** 签名Id */
    SignId?: number;
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
    International?: number;
    /** 申请签名状态。其中0表示审核通过且已生效，1表示审核中，2表示审核通过待生效，-1表示审核未通过或审核失败。 */
    StatusCode?: number;
    /** 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。 */
    ReviewReply?: string;
    /** 签名名称。 */
    SignName?: string;
    /** 提交审核时间，UNIX 时间戳（单位：秒）。 */
    CreateTime?: number;
  }

  /** 获取短信模板信息响应 */
  interface DescribeTemplateListStatus {
    /** 模板Id */
    TemplateId?: number;
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
    International?: number;
    /** 申请模板状态，其中0表示审核通过且已生效，1表示审核中，2表示审核通过待生效，-1表示审核未通过或审核失败。 */
    StatusCode?: number;
    /** 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。 */
    ReviewReply?: string;
    /** 模板名称。 */
    TemplateName?: string;
    /** 提交审核时间，UNIX 时间戳（单位：秒）。 */
    CreateTime?: number;
  }

  /** 修改签名响应 */
  interface ModifySignStatus {
    /** 签名Id */
    SignId: number;
    /** 签名修改申请Id */
    SignApplyId: string;
  }

  /** 修改模板参数响应 */
  interface ModifyTemplateStatus {
    /** 模板参数 */
    TemplateId: number;
  }

  /** 短信回复状态 */
  interface PullSmsReplyStatus {
    /** 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。 */
    ExtendCode: string;
    /** 国家（或地区）码。 */
    NationCode: string;
    /** 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
    PhoneNumber: string;
    /** 短信签名。 */
    Sign: string;
    /** 用户回复的内容。 */
    ReplyContent: string;
    /** 回复时间（例如：2019-10-08 17:18:37）。 */
    ReplyTime: string;
    /** 回复时间，UNIX 时间戳（单位：秒）。 */
    ReplyUnixTime: number;
  }

  /** 短信的下发状态详细信息 */
  interface PullSmsSendStatus {
    /** 用户实际接收到短信的时间。 */
    UserReceiveTime: string;
    /** 用户实际接收到短信的时间，UNIX 时间戳（单位：秒）。 */
    UserReceiveUnixTime: number;
    /** 国家（或地区）码。 */
    NationCode: string;
    /** 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
    PurePhoneNumber: string;
    /** 手机号码，普通格式，示例如：13711112222。 */
    PhoneNumber: string;
    /** 本次发送标识 ID。 */
    SerialNo: string;
    /** 实际是否收到短信接收状态，SUCCESS（成功）、FAIL（失败）。 */
    ReportStatus: string;
    /** 用户接收短信状态描述。 */
    Description: string;
  }

  /** 发送短信状态 */
  interface SendStatus {
    /** 发送流水号。 */
    SerialNo: string;
    /** 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
    PhoneNumber: string;
    /** 计费条数，计费规则请查询 [计费策略](https://cloud.tencent.com/document/product/382/36135)。 */
    Fee: number;
    /** 用户Session内容。 */
    SessionContext: string;
    /** 短信请求错误码，具体含义请参考错误码。 */
    Code: string;
    /** 短信请求错误码描述。 */
    Message: string;
    /** 国家码或地区码，例如CN,US等，对于未识别出国家码或者地区码，默认返回DEF,具体支持列表请参考国际/港澳台计费总览。 */
    IsoCode: string;
  }

  /** 发送数据统计响应包体 */
  interface SendStatusStatistics {
    /** 短信计费条数统计，例如提交成功量为100条，其中有20条是长短信（长度为80字）被拆分成2条，则计费条数为： ```80 * 1 + 20 * 2 = 120``` 条。 */
    FeeCount: number;
    /** 短信提交量统计。 */
    RequestCount: number;
    /** 短信提交成功量统计。 */
    RequestSuccessCount: number;
  }

  /** 套餐包信息统计响应包体 */
  interface SmsPackagesStatistics {
    /** 套餐包创建时间，标准时间，例如：2019-10-08 17:18:37。 */
    PackageCreateTime: string;
    /** 套餐包创建时间，UNIX 时间戳（单位：秒）。 */
    PackageCreateUnixTime: number;
    /** 套餐包生效时间，标准时间，例如：2019-10-08 17:18:37。 */
    PackageEffectiveTime: string;
    /** 套餐包生效时间，UNIX 时间戳（单位：秒）。 */
    PackageEffectiveUnixTime: number;
    /** 套餐包过期时间，标准时间，例如：2019-10-08 17:18:37。 */
    PackageExpiredTime: string;
    /** 套餐包过期时间，UNIX 时间戳（单位：秒）。 */
    PackageExpiredUnixTime: number;
    /** 套餐包条数。 */
    AmountOfPackage: number;
    /** 0表示赠送套餐包，1表示购买套餐包。 */
    TypeOfPackage: number;
    /** 套餐包 ID。 */
    PackageId: number;
    /** 当前使用量。 */
    CurrentUsage: number;
  }

  interface AddSmsSignRequest {
    /** 签名名称。注：不能重复申请已通过或待审核的签名。 */
    SignName: string;
    /** 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：0：公司，可选 DocumentType 有（0，1）。1：APP，可选 DocumentType 有（0，1，2，3，4） 。2：网站，可选 DocumentType 有（0，1，2，3，5）。3：公众号，可选 DocumentType 有（0，1，2，3，8）。4：商标，可选 DocumentType 有（7）。5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。6：小程序，可选 DocumentType 有（0，1，2，3，6）。注：必须按照对应关系选择证明类型，否则会审核失败。 */
    SignType: number;
    /** 证明类型：0：三证合一。1：企业营业执照。2：组织机构代码证书。3：社会信用代码证书。4：应用后台管理截图（个人开发APP）。5：网站备案后台截图（个人开发网站）。6：小程序设置页面截图（个人认证小程序）。7：商标注册书。8：公众号设置页面截图（个人认证公众号）。 */
    DocumentType: number;
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
    International: number;
    /** 签名用途：0：自用。1：他用。 */
    UsedMethod: number;
    /** 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。 */
    ProofImage: string;
    /** 委托授权证明。选择 UsedMethod 为他用之后需要提交委托的授权证明。图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。注：只有 UsedMethod 在选择为 1（他用）时，这个字段才会生效。 */
    CommissionImage?: string;
    /** 签名的申请备注。 */
    Remark?: string;
  }

  interface AddSmsSignResponse {
    /** 添加签名响应 */
    AddSignStatus?: AddSignStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AddSmsTemplateRequest {
    /** 模板名称。 */
    TemplateName: string;
    /** 模板内容。 */
    TemplateContent: string;
    /** 短信类型，1表示营销短信，2表示通知短信，3表示验证码短信。注：为进一步提升短信发送质量、提高短信模板审核通过率，从2024年5月16日起，腾讯云短信模板类型优化为“验证码短信”、“通知短信”、“营销短信”，可参考[关于腾讯云短信模板类型优化公告](https://cloud.tencent.com/document/product/382/106171)。新开通短信服务的客户需严格参考新的短信类型申请短信模板。 */
    SmsType: number;
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
    International: number;
    /** 模板备注，例如申请原因，使用场景等。 */
    Remark: string;
  }

  interface AddSmsTemplateResponse {
    /** 添加短信模板响应包体 */
    AddTemplateStatus?: AddTemplateStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CallbackStatusStatisticsRequest {
    /** 开始时间，yyyymmddhh 需要拉取的起始时间，精确到小时。 */
    StartDateTime: number;
    /** 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时。注：EndDataTime 必须大于 StartDateTime。 */
    EndDataTime: number;
    /** 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，示例如1400006666。 */
    SmsSdkAppid: string;
    /** 最大上限。注：目前固定设置为0。 */
    Limit: number;
    /** 偏移量。注：目前固定设置为0。 */
    Offset: number;
  }

  interface CallbackStatusStatisticsResponse {
    /** 回执数据统计响应包体。 */
    CallbackStatusStatistics?: CallbackStatusStatistics;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteSmsSignRequest {
    /** 待删除的签名 ID。 */
    SignId: number;
  }

  interface DeleteSmsSignResponse {
    /** 删除签名响应 */
    DeleteSignStatus?: DeleteSignStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteSmsTemplateRequest {
    /** 待删除的模板 ID。 */
    TemplateId: number;
  }

  interface DeleteSmsTemplateResponse {
    /** 删除模板响应 */
    DeleteTemplateStatus?: DeleteTemplateStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSmsSignListRequest {
    /** 签名 ID 数组。 */
    SignIdSet: number[];
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
    International: number;
  }

  interface DescribeSmsSignListResponse {
    /** 获取签名信息响应 */
    DescribeSignListStatusSet?: DescribeSignListStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSmsTemplateListRequest {
    /** 模板 ID 数组。 */
    TemplateIdSet: number[];
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
    International: number;
  }

  interface DescribeSmsTemplateListResponse {
    /** 获取短信模板信息响应 */
    DescribeTemplateStatusSet?: DescribeTemplateListStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySmsSignRequest {
    /** 待修改的签名 ID。 */
    SignId: number;
    /** 签名名称。 */
    SignName: string;
    /** 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：0：公司，可选 DocumentType 有（0，1）。1：APP，可选 DocumentType 有（0，1，2，3，4） 。2：网站，可选 DocumentType 有（0，1，2，3，5）。3：公众号，可选 DocumentType 有（0，1，2，3，8）。4：商标，可选 DocumentType 有（7）。5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。6：小程序，可选 DocumentType 有（0，1，2，3，6）。注：必须按照对应关系选择证明类型，否则会审核失败。 */
    SignType: number;
    /** 证明类型：0：三证合一。1：企业营业执照。2：组织机构代码证书。3：社会信用代码证书。4：应用后台管理截图（个人开发APP）。5：网站备案后台截图（个人开发网站）。6：小程序设置页面截图（个人认证小程序）。7：商标注册书。8：公众号设置页面截图（个人认证公众号）。 */
    DocumentType: number;
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。注：需要和待修改签名International值保持一致，该参数不能直接修改国内签名到国际签名。 */
    International: number;
    /** 签名用途：0：自用。1：他用。 */
    UsedMethod: number;
    /** 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。 */
    ProofImage: string;
    /** 委托授权证明。选择 UsedMethod 为他用之后需要提交委托的授权证明。图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。注：只有 UsedMethod 在选择为 1（他用）时，这个字段才会生效。 */
    CommissionImage?: string;
    /** 签名的申请备注。 */
    Remark?: string;
  }

  interface ModifySmsSignResponse {
    /** 修改签名响应 */
    ModifySignStatus?: ModifySignStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySmsTemplateRequest {
    /** 待修改的模板的模板 ID。 */
    TemplateId: number;
    /** 新的模板名称。 */
    TemplateName: string;
    /** 新的模板内容。 */
    TemplateContent: string;
    /** 短信类型，1表示营销短信，2表示通知短信，3表示验证码短信。注：为进一步提升短信发送质量、提高短信模板审核通过率，从2024年5月16日起，腾讯云短信模板类型优化为“验证码短信”、“通知短信”、“营销短信”，可参考[关于腾讯云短信模板类型优化公告](https://cloud.tencent.com/document/product/382/106171)。新开通短信服务的客户需严格参考新的短信类型申请短信模板。 */
    SmsType: number;
    /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
    International: number;
    /** 模板备注，例如申请原因，使用场景等。 */
    Remark: string;
  }

  interface ModifySmsTemplateResponse {
    /** 修改模板参数响应 */
    ModifyTemplateStatus?: ModifyTemplateStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface PullSmsReplyStatusByPhoneNumberRequest {
    /** 拉取起始时间，UNIX 时间戳（时间：秒）。注：最大可拉取当前时期7天前的数据。 */
    SendDateTime: number;
    /** 偏移量。注：目前固定设置为0。 */
    Offset: number;
    /** 拉取最大条数，最多 100。 */
    Limit: number;
    /** 下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
    PhoneNumber: string;
    /** 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，例如1400006666。 */
    SmsSdkAppid: string;
    /** 拉取截止时间，UNIX 时间戳（时间：秒）。 */
    EndDateTime?: number;
  }

  interface PullSmsReplyStatusByPhoneNumberResponse {
    /** 回复状态响应集合。 */
    PullSmsReplyStatusSet?: PullSmsReplyStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface PullSmsReplyStatusRequest {
    /** 拉取最大条数，最多100条。 */
    Limit: number;
    /** 短信 SdkAppid 在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际 SdkAppid，例如1400006666。 */
    SmsSdkAppid: string;
  }

  interface PullSmsReplyStatusResponse {
    /** 回复状态响应集合。 */
    PullSmsReplyStatusSet?: PullSmsReplyStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface PullSmsSendStatusByPhoneNumberRequest {
    /** 拉取起始时间，UNIX 时间戳（时间：秒）。注：最大可拉取当前时期7天前的数据。 */
    SendDateTime: number;
    /** 偏移量。注：目前固定设置为0。 */
    Offset: number;
    /** 拉取最大条数，最多 100。 */
    Limit: number;
    /** 下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
    PhoneNumber: string;
    /** 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，例如1400006666。 */
    SmsSdkAppid: string;
    /** 拉取截止时间，UNIX 时间戳（时间：秒）。 */
    EndDateTime?: number;
  }

  interface PullSmsSendStatusByPhoneNumberResponse {
    /** 下发状态响应集合。 */
    PullSmsSendStatusSet?: PullSmsSendStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface PullSmsSendStatusRequest {
    /** 拉取最大条数，最多100条。 */
    Limit: number;
    /** 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，例如1400006666。 */
    SmsSdkAppid: string;
  }

  interface PullSmsSendStatusResponse {
    /** 下发状态响应集合。 */
    PullSmsSendStatusSet?: PullSmsSendStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SendSmsRequest {
    /** 下发手机号码，采用 e.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号或全为境外手机号。例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
    PhoneNumberSet: string[];
    /** 模板 ID，必须填写已审核通过的模板 ID。模板ID可登录 [短信控制台](https://console.cloud.tencent.com/smsv2) 查看，若向境外手机号发送短信，仅支持使用国际/港澳台短信模板。 */
    TemplateID: string;
    /** 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，示例如1400006666。 */
    SmsSdkAppid: string;
    /** 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名，签名信息可登录 [短信控制台](https://console.cloud.tencent.com/smsv2) 查看。注：国内短信为必填参数。 */
    Sign?: string;
    /** 模板参数，若无模板参数，则设置为空。 */
    TemplateParamSet?: string[];
    /** 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。 */
    ExtendCode?: string;
    /** 用户的 session 内容，可以携带用户侧 ID 等上下文信息，server 会原样返回。注意长度需小于512字节。 */
    SessionContext?: string;
    /** 国内短信无senderid，无需填写该项；若需开通国际/港澳台短信senderid，请联系smshelper。 */
    SenderId?: string;
  }

  interface SendSmsResponse {
    /** 短信发送状态。 */
    SendStatusSet?: SendStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SendStatusStatisticsRequest {
    /** 拉取起始时间，yyyymmddhh 需要拉取的起始时间，精确到小时。 */
    StartDateTime: number;
    /** 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时注：EndDataTime 必须大于 StartDateTime。 */
    EndDataTime: number;
    /** 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，示例如1400006666。 */
    SmsSdkAppid: string;
    /** 最大上限。注：目前固定设置为0。 */
    Limit: number;
    /** 偏移量。注：目前固定设置为0。 */
    Offset: number;
  }

  interface SendStatusStatisticsResponse {
    /** 发送数据统计响应包体。 */
    SendStatusStatistics?: SendStatusStatistics;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SmsPackagesStatisticsRequest {
    /** 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，示例如1400006666。 */
    SmsSdkAppid: string;
    /** 最大上限(需要拉取的套餐包个数)。 */
    Limit: number;
    /** 偏移量。注：目前固定设置为0。 */
    Offset: number;
  }

  interface SmsPackagesStatisticsResponse {
    /** 发送数据统计响应包体。 */
    SmsPackagesStatisticsSet?: SmsPackagesStatistics[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Sms 短信} */
declare interface Sms {
  (): Versions;
  /** 添加短信签名 {@link AddSmsSignRequest} {@link AddSmsSignResponse} */
  AddSmsSign(data: AddSmsSignRequest, config?: AxiosRequestConfig): AxiosPromise<AddSmsSignResponse>;
  /** 添加短信模板 {@link AddSmsTemplateRequest} {@link AddSmsTemplateResponse} */
  AddSmsTemplate(data: AddSmsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<AddSmsTemplateResponse>;
  /** 回执数据统计 {@link CallbackStatusStatisticsRequest} {@link CallbackStatusStatisticsResponse} */
  CallbackStatusStatistics(data: CallbackStatusStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<CallbackStatusStatisticsResponse>;
  /** 删除短信签名 {@link DeleteSmsSignRequest} {@link DeleteSmsSignResponse} */
  DeleteSmsSign(data: DeleteSmsSignRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSmsSignResponse>;
  /** 删除短信模板 {@link DeleteSmsTemplateRequest} {@link DeleteSmsTemplateResponse} */
  DeleteSmsTemplate(data: DeleteSmsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSmsTemplateResponse>;
  /** 号码信息查询 {@link DescribePhoneNumberInfoRequest} {@link DescribePhoneNumberInfoResponse} */
  DescribePhoneNumberInfo(data: DescribePhoneNumberInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePhoneNumberInfoResponse>;
  /** 短信签名状态查询 {@link DescribeSmsSignListRequest} {@link DescribeSmsSignListResponse} */
  DescribeSmsSignList(data: DescribeSmsSignListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmsSignListResponse>;
  /** 短信模板状态查询 {@link DescribeSmsTemplateListRequest} {@link DescribeSmsTemplateListResponse} */
  DescribeSmsTemplateList(data: DescribeSmsTemplateListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmsTemplateListResponse>;
  /** 修改短信签名 {@link ModifySmsSignRequest} {@link ModifySmsSignResponse} */
  ModifySmsSign(data: ModifySmsSignRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySmsSignResponse>;
  /** 修改短信模板 {@link ModifySmsTemplateRequest} {@link ModifySmsTemplateResponse} */
  ModifySmsTemplate(data: ModifySmsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySmsTemplateResponse>;
  /** 拉取短信回复状态 {@link PullSmsReplyStatusRequest} {@link PullSmsReplyStatusResponse} */
  PullSmsReplyStatus(data: PullSmsReplyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<PullSmsReplyStatusResponse>;
  /** 拉取单个号码短信回复状态 {@link PullSmsReplyStatusByPhoneNumberRequest} {@link PullSmsReplyStatusByPhoneNumberResponse} */
  PullSmsReplyStatusByPhoneNumber(data: PullSmsReplyStatusByPhoneNumberRequest, config?: AxiosRequestConfig): AxiosPromise<PullSmsReplyStatusByPhoneNumberResponse>;
  /** 拉取短信下发状态 {@link PullSmsSendStatusRequest} {@link PullSmsSendStatusResponse} */
  PullSmsSendStatus(data: PullSmsSendStatusRequest, config?: AxiosRequestConfig): AxiosPromise<PullSmsSendStatusResponse>;
  /** 拉取单个号码短信下发状态 {@link PullSmsSendStatusByPhoneNumberRequest} {@link PullSmsSendStatusByPhoneNumberResponse} */
  PullSmsSendStatusByPhoneNumber(data: PullSmsSendStatusByPhoneNumberRequest, config?: AxiosRequestConfig): AxiosPromise<PullSmsSendStatusByPhoneNumberResponse>;
  /** 上报转换率 {@link ReportConversionRequest} {@link ReportConversionResponse} */
  ReportConversion(data: ReportConversionRequest, config?: AxiosRequestConfig): AxiosPromise<ReportConversionResponse>;
  /** 发送短信 {@link SendSmsRequest} {@link SendSmsResponse} */
  SendSms(data: SendSmsRequest, config?: AxiosRequestConfig): AxiosPromise<SendSmsResponse>;
  /** 发送短信数据统计 {@link SendStatusStatisticsRequest} {@link SendStatusStatisticsResponse} */
  SendStatusStatistics(data: SendStatusStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<SendStatusStatisticsResponse>;
  /** 套餐包信息统计 {@link SmsPackagesStatisticsRequest} {@link SmsPackagesStatisticsResponse} */
  SmsPackagesStatistics(data: SmsPackagesStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<SmsPackagesStatisticsResponse>;
  /** 添加短信签名 {@link V20190711.AddSmsSignRequest} {@link V20190711.AddSmsSignResponse} */
  AddSmsSign(data: V20190711.AddSmsSignRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.AddSmsSignResponse>;
  /** 添加短信模板 {@link V20190711.AddSmsTemplateRequest} {@link V20190711.AddSmsTemplateResponse} */
  AddSmsTemplate(data: V20190711.AddSmsTemplateRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.AddSmsTemplateResponse>;
  /** 回执数据统计 {@link V20190711.CallbackStatusStatisticsRequest} {@link V20190711.CallbackStatusStatisticsResponse} */
  CallbackStatusStatistics(data: V20190711.CallbackStatusStatisticsRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.CallbackStatusStatisticsResponse>;
  /** 删除短信签名 {@link V20190711.DeleteSmsSignRequest} {@link V20190711.DeleteSmsSignResponse} */
  DeleteSmsSign(data: V20190711.DeleteSmsSignRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.DeleteSmsSignResponse>;
  /** 删除短信模板 {@link V20190711.DeleteSmsTemplateRequest} {@link V20190711.DeleteSmsTemplateResponse} */
  DeleteSmsTemplate(data: V20190711.DeleteSmsTemplateRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.DeleteSmsTemplateResponse>;
  /** 短信签名状态查询 {@link V20190711.DescribeSmsSignListRequest} {@link V20190711.DescribeSmsSignListResponse} */
  DescribeSmsSignList(data: V20190711.DescribeSmsSignListRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.DescribeSmsSignListResponse>;
  /** 短信模板状态查询 {@link V20190711.DescribeSmsTemplateListRequest} {@link V20190711.DescribeSmsTemplateListResponse} */
  DescribeSmsTemplateList(data: V20190711.DescribeSmsTemplateListRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.DescribeSmsTemplateListResponse>;
  /** 修改短信签名 {@link V20190711.ModifySmsSignRequest} {@link V20190711.ModifySmsSignResponse} */
  ModifySmsSign(data: V20190711.ModifySmsSignRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.ModifySmsSignResponse>;
  /** 修改短信模板 {@link V20190711.ModifySmsTemplateRequest} {@link V20190711.ModifySmsTemplateResponse} */
  ModifySmsTemplate(data: V20190711.ModifySmsTemplateRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.ModifySmsTemplateResponse>;
  /** 拉取短信回复状态 {@link V20190711.PullSmsReplyStatusRequest} {@link V20190711.PullSmsReplyStatusResponse} */
  PullSmsReplyStatus(data: V20190711.PullSmsReplyStatusRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.PullSmsReplyStatusResponse>;
  /** 拉取单个号码短信回复状态 {@link V20190711.PullSmsReplyStatusByPhoneNumberRequest} {@link V20190711.PullSmsReplyStatusByPhoneNumberResponse} */
  PullSmsReplyStatusByPhoneNumber(data: V20190711.PullSmsReplyStatusByPhoneNumberRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.PullSmsReplyStatusByPhoneNumberResponse>;
  /** 拉取短信下发状态 {@link V20190711.PullSmsSendStatusRequest} {@link V20190711.PullSmsSendStatusResponse} */
  PullSmsSendStatus(data: V20190711.PullSmsSendStatusRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.PullSmsSendStatusResponse>;
  /** 拉取单个号码短信下发状态 {@link V20190711.PullSmsSendStatusByPhoneNumberRequest} {@link V20190711.PullSmsSendStatusByPhoneNumberResponse} */
  PullSmsSendStatusByPhoneNumber(data: V20190711.PullSmsSendStatusByPhoneNumberRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.PullSmsSendStatusByPhoneNumberResponse>;
  /** 发送短信 {@link V20190711.SendSmsRequest} {@link V20190711.SendSmsResponse} */
  SendSms(data: V20190711.SendSmsRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.SendSmsResponse>;
  /** 发送短信数据统计 {@link V20190711.SendStatusStatisticsRequest} {@link V20190711.SendStatusStatisticsResponse} */
  SendStatusStatistics(data: V20190711.SendStatusStatisticsRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.SendStatusStatisticsResponse>;
  /** 套餐包信息统计 {@link V20190711.SmsPackagesStatisticsRequest} {@link V20190711.SmsPackagesStatisticsResponse} */
  SmsPackagesStatistics(data: V20190711.SmsPackagesStatisticsRequest, config: AxiosRequestConfig & V20190711.VersionHeader): AxiosPromise<V20190711.SmsPackagesStatisticsResponse>;
}

export declare type Versions = ["2021-01-11", "2019-07-11"];

export default Sms;
