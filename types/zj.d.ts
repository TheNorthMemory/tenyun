/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 短信模板创建接口返回 */
declare interface AddSmsTemplateDataStruct {
  /** 短信模板ID */
  TemplateId: number;
}

/** 取消活动的返回值Data部分 */
declare interface CancelActivityData {
  /** 成功返回时的文字描述 */
  Message: string;
}

/** 创建样例时候content元素 */
declare interface CreateMmsInstanceItem {
  /** 素材类型：1-文本 2-图片 3-视频 4-音频 */
  ContentType: number;
  /** 素材内容：如果素材是文本类型，直接填写文本内容，否则填写素材文件上传到cos后的url地址 */
  Content: string;
}

/** 创建超级短信样例返回结果 */
declare interface CreateMmsInstanceResp {
  /** 返回码：0-成功 其它-失败 */
  ReturnCode: number;
  /** 返回信息 */
  ReturnMsg: string;
  /** 样例id */
  InstanceId: number;
}

/** 删除超短样例响应 */
declare interface DelMmsInstanceData {
  /** 样例id */
  InstanceId: number;
}

/** 获取普通短信签名信息返回信息 */
declare interface DescribeSmsSignListDataStruct {
  /** 签名Id */
  SignId: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 申请签名状态。其中：0：表示审核通过。-1：表示审核未通过或审核失败。 */
  StatusCode: number;
  /** 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。 */
  ReviewReply: string;
  /** 签名名称。 */
  SignName: string;
  /** 提交审核时间，UNIX 时间戳（单位：秒）。 */
  CreateTime: number;
}

/** 获取短信模板状态返回 */
declare interface DescribeSmsTemplateListDataStruct {
  /** 模板Id */
  TemplateId: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 申请签名状态。其中：0：表示审核通过。-1：表示审核未通过或审核失败。 */
  StatusCode: number;
  /** 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。 */
  ReviewReply: string;
  /** 模板名称。 */
  TemplateName: string;
  /** 提交审核时间，UNIX 时间戳（单位：秒）。 */
  CreateTime: number;
}

/** 彩信实例信息InstanceId int	InstanceName string	Status int	StatusInfo string	AppSubId string	Title string	Sign string	Contents string	CreatedAt string */
declare interface MmsInstanceInfo {
  /** 彩信实例id */
  InstanceId: number;
  /** 彩信实例名称 */
  InstanceName: string;
  /** 状态是否通知 */
  Status: number;
  /** 实例审核状态信息 */
  StatusInfo: MmsInstanceStateInfo[] | null;
  /** 业务码 */
  AppSubId: string;
  /** 彩信标题 */
  Title: string;
  /** 签名 */
  Sign: string;
  /** 彩信内容 */
  Contents: string;
  /** 创建时间 */
  CreatedAt: string;
  /** 样例配置的链接地址 */
  Urls: string[] | null;
  /** 机型列表 */
  PhoneType: number[] | null;
  /** 普通参数序号数组 */
  CommonParams: number[] | null;
  /** 链接参数序号数组 */
  UrlParams: number[] | null;
}

/** 彩信实例状态列表 */
declare interface MmsInstanceInfoList {
  /** 总数据量 */
  Total: number;
  /** 彩信实例状态信息列表 */
  List: MmsInstanceInfo[];
}

/** 彩信实例审核状态 */
declare interface MmsInstanceStateInfo {
  /** 运营商 */
  Operator: string;
  /** 审核状态：0未审核，1审核通过，2审核拒绝 */
  State: number;
}

/** 短信模板编辑接口出参 */
declare interface ModifySmsTemplateDataStruct {
  /** 短信模板id */
  TemplateId: number | null;
}

/** 创建签名返回结构 */
declare interface PaasCreateSignResp {
  /** 签名id */
  SignId: number;
}

/** 拉取活动状态返回 */
declare interface PaasSmsCampaignStatusResp {
  /** 0-未发送 1-发送中 2-发送结束 3-发送取消 */
  Status: number;
}

/** 短信发送人群包策略 */
declare interface PaasStrategy {
  /** 人群包id */
  CrowdID: number;
  /** 待选素材数组 */
  Items: PaasStrategyItem[];
}

/** 短信活动策略元素 */
declare interface PaasStrategyItem {
  /** 短信模板id或超级短信样例id */
  Id: number;
  /** 素材类型 0-普短 1-超短 */
  ContentType: number;
}

/** 发送超级短信返回 */
declare interface PushMmsContentResp {
  /** 返回码：0-成功 其它-失败 */
  ReturnCode: number;
  /** 返回信息 */
  ReturnMsg: string;
  /** 消息回执id */
  MessageId: number;
}

/** 发送短信返回 */
declare interface SendSmsPaasDataStruct {
  /** 发送流水号 */
  SerialNo: string;
  /** 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  PhoneNumber: string;
  /** 计费条数 */
  Fee: number;
  /** OK为成功 */
  Code: string;
  /** 短信请求错误码描述 */
  Message: string;
}

/** 短信子账号额度接口出参 */
declare interface SmsAmountDataStruct {
  /** 短信活动配额 */
  SmsCampaignAmount: number;
  /** 短信活动消耗配额 */
  SmsCampaignConsume: number;
  /** 短信发送额度 */
  SmsSendAmount: number;
  /** 短信发送消耗额度 */
  SmsSendConsume: number;
  /** 超短活动额度 */
  MmsCampaignAmount: number;
  /** 超短活动消耗额度 */
  MmsCampaignConsume: number;
  /** 超短短信额度 */
  MmsSendAmount: number;
  /** 超短短信消耗额度 */
  MmsSendConsume: number;
}

/** 短信活动统计人群包数据 */
declare interface SmsCampaignStatisticsCrowdData {
  /** 人群包id */
  CrowdId: number;
  /** 人群包名称 */
  CrowdName: string;
  /** 人群包目标触达总数 */
  CrowdCount: number;
  /** 模板列表 */
  TemplateList: SmsCampaignStatisticsTemplateData[];
}

/** 短信活动统计响应 */
declare interface SmsCampaignStatisticsData {
  /** 活动Id */
  CampaignId: number;
  /** 统计数据 */
  Statistics: SmsCampaignStatisticsCrowdData[];
}

/** 短信活动统计模板展示结构 */
declare interface SmsCampaignStatisticsTemplateData {
  /** 模板或样例id */
  TemplateId: string;
  /** 模板内容 */
  TemplateContent: string;
  /** 触达成功数 */
  SendCount: number;
  /** 短链点击数 */
  ClickCount: number;
}

/** 短信获取人群包列表的返回数据信息 */
declare interface SmsGetCrowdPackList {
  /** 创建时间 */
  CreatedAt: string;
  /** 人群包id */
  ID: number;
  /** 人群包名称 */
  Name: string;
  /** 人群包状态 */
  Status: number;
  /** 人群包手机号数量 */
  PhoneNum: number;
  /** 人群包标签信息 */
  Tag: string;
  /** 人群包md5 */
  MD5: string;
  /** 人群包文件名称 */
  FileName: string;
  /** 人群包描述 */
  Desc: string;
}

/** 接口返回给服务商的COS路径等信息 */
declare interface UploadFansInfoCosInfo {
  /** COS bucket */
  Bucket: string;
  /** COS路径 */
  Key: string;
  /** COS区域 */
  Region: string;
}

declare interface AddCrowdPackInfoRequest {
  /** 商户证书 */
  License: string;
  /** 人群包名称 */
  Name: string;
  /** 人群包文件名称,人群包文件必须为utf8编码，动态参数只能是汉字、数字、英文字母的组合，不能包含其他字符 */
  FileName: string;
  /** 人群包描述 */
  Desc: string;
  /** 已经上传好的人群包cos地址 */
  CosUrl: string;
  /** 人群包手机号数量 */
  PhoneNum?: number;
}

declare interface AddCrowdPackInfoResponse {
  /** 接口返回 */
  Data?: SmsAddCrowdPackInfoResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddSmsSignRequest {
  /** 商户证书 */
  License: string;
  /** 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：0：公司（0，1，2，3）。1：APP（0，1，2，3，4） 。2：网站（0，1，2，3，5）。3：公众号或者小程序（0，1，2，3，6）。4：商标（7）。5：政府/机关事业单位/其他机构（2，3）。注：必须按照对应关系选择证明类型，否则会审核失败。 */
  SignType: number;
  /** 证明类型：0：三证合一。1：企业营业执照。2：组织机构代码证书。3：社会信用代码证书。4：应用后台管理截图（个人开发APP）。5：网站备案后台截图（个人开发网站）。6：小程序设置页面截图（个人认证小程序）。7：商标注册书 */
  DocumentType: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 资质图片url */
  ProofImage: string;
  /** 签名内容 */
  SignName: string;
  /** 签名备注，比如申请原因，使用场景等,可以填空 */
  Remark?: string;
}

declare interface AddSmsSignResponse {
  /** 签名id数组 */
  Data?: PaasCreateSignResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddSmsTemplateRequest {
  /** 商户证书 */
  License: string;
  /** 短信签名，创建签名时返回 */
  SignID: number;
  /** 模板名称 */
  TemplateName: string;
  /** 短信内容，动态内容使用占位符{1}，{2}等表示 */
  TemplateContent: string;
  /** 短信类型：{0:普通短信，1:营销短信} */
  SmsType: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 短信模板标签 */
  Remark: string;
  /** 发送短信活动时配置的落地链接地址,仅用作短信活动 */
  Urls?: string[];
  /** 发送短信活动时用于展示人群包动态参数模板占位符序号或接口发送时变量占位符序号 */
  CommonParams?: number[];
  /** 发送短信活动时用于展示短连接模板占位符序号,仅用作短信活动 */
  UrlParams?: number[];
}

declare interface AddSmsTemplateResponse {
  /** 短信模板创建接口返回 */
  Data?: AddSmsTemplateDataStruct;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelCampaignRequest {
  /** 商户证书 */
  License: string;
  /** 短信活动id */
  CampaignId: number;
}

declare interface CancelCampaignResponse {
  /** 处理结果 */
  Data?: CancelActivityData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCampaignRequest {
  /** 商户证书 */
  License: string;
  /** 短信活动发送时间 */
  SendTime: number;
  /** 短信活动名称 */
  Name: string;
  /** 发送策略 */
  Strategies?: PaasStrategy[];
  /** 废弃 */
  TemplateId?: number;
  /** 废弃 */
  CrowdID?: number;
  /** 活动类型(0-短信,1-超短,不填默认为超短) */
  SmsType?: number;
}

declare interface CreateCampaignResponse {
  /** 活动信息 */
  Data?: SmsCreateCampaignResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMmsInstanceRequest {
  /** 商户证书 */
  License: string;
  /** 样例名称 */
  InstanceName: string;
  /** 标题 */
  Title: string;
  /** 签名 */
  Sign: string;
  /** 素材内容 */
  Contents: CreateMmsInstanceItem[];
  /** 样例中链接动态变量对应的链接，和占位符顺序一致 */
  Urls?: string[];
  /** 机型列表 */
  PhoneType?: number[];
  /** 发送超短活动时用于展示人群包动态参数模板占位符序号或接口发送时变量占位符序号 */
  CommonParams?: number[];
  /** 发送超短活动时用于展示短连接模板占位符序号,仅用作超短活动 */
  UrlParams?: number[];
}

declare interface CreateMmsInstanceResponse {
  /** 创建样例返回信息 */
  Data?: CreateMmsInstanceResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DelCrowdPackRequest {
  /** 商户证书 */
  License: string;
  /** 人群包id */
  ID: number;
}

declare interface DelCrowdPackResponse {
  /** 接口返回 */
  Data?: SmsSuccessResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DelTemplateRequest {
  /** 商户证书 */
  License: string;
  /** 短信模板ID */
  TemplateID: number;
}

declare interface DelTemplateResponse {
  /** 接口返回 */
  Data?: SmsSuccessResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMmsInstanceRequest {
  /** 商户证书 */
  License: string;
  /** 超级短信样例id */
  InstanceId: number;
}

declare interface DeleteMmsInstanceResponse {
  /** 删除信息返回 */
  Data?: DelMmsInstanceData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMmsInstanceInfoRequest {
  /** 商户证书 */
  License: string;
  /** 彩信实例id */
  InstanceId: number;
}

declare interface DescribeMmsInstanceInfoResponse {
  /** 彩信实例信息 */
  Data?: MmsInstanceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMmsInstanceListRequest {
  /** 商户证书 */
  License: string;
  /** 偏移量 */
  Offset: number;
  /** 返回数量 */
  Limit: number;
  /** 业务代码 */
  AppSubId?: string;
  /** 实例标题 */
  Title?: string;
}

declare interface DescribeMmsInstanceListResponse {
  /** 彩信实例信息列表返回 */
  Data?: MmsInstanceInfoList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmsCampaignStatisticsRequest {
  /** 活动id */
  CampaignId: number;
  /** 商户证书 */
  License: string;
}

declare interface DescribeSmsCampaignStatisticsResponse {
  /** 响应数据 */
  Data?: SmsCampaignStatisticsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmsSignListRequest {
  /** 商户证书 */
  License: string;
  /** 签名ID数组 */
  SignIdSet: number[];
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
}

declare interface DescribeSmsSignListResponse {
  /** 返回数据 */
  Data?: DescribeSmsSignListDataStruct[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmsTemplateListRequest {
  /** 商户证书 */
  License: string;
  /** 短信模板id数组 */
  TemplateIdSet: number[];
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
}

declare interface DescribeSmsTemplateListResponse {
  /** 返回数据信息 */
  Data?: DescribeSmsTemplateListDataStruct[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCrowdPackListRequest {
  /** 商户证书 */
  License: string;
  /** 偏移量 */
  Offset: number;
  /** 限制返回数量 */
  Limit: number;
  /** 人群包名称，用于过滤人群包 */
  Name?: string;
  /** 人群包状态，默认-1，用于过滤人群包 */
  Status?: number;
}

declare interface GetCrowdPackListResponse {
  /** 人群包信息列表 */
  Data?: SmsGetCrowdPackListResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCrowdUploadInfoRequest {
  /** 商户证书 */
  License: string;
  /** 上传文件名称 */
  FileName: string;
}

declare interface GetCrowdUploadInfoResponse {
  /** 返回信息 */
  Data?: SmsGetCrowdUploadInfoResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSmsAmountInfoRequest {
  /** 商户证书 */
  License: string;
}

declare interface GetSmsAmountInfoResponse {
  /** 短信账号额度接口 */
  Data?: SmsAmountDataStruct;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSmsCampaignStatusRequest {
  /** 商户证书 */
  License: string;
  /** 活动ID */
  CampaignId: number;
}

declare interface GetSmsCampaignStatusResponse {
  /** 活动状态 */
  Data?: PaasSmsCampaignStatusResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySmsTemplateRequest {
  /** 商户证书 */
  License: string;
  /** 短信模板id */
  TemplateId: number;
  /** 短信签名，创建签名时返回 */
  SignID: number;
  /** 模板名称 */
  TemplateName: string;
  /** 短信内容，动态内容使用占位符{1}，{2}等表示 */
  TemplateContent: string;
  /** 短信类型：{0:普通短信，1:营销短信} */
  SmsType: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。 */
  International: number;
  /** 短信模板标签 */
  Remark: string;
  /** 发送短信活动时配置的落地链接地址,仅用作短信活动 */
  Urls?: string[];
  /** 发送短信活动时用于展示人群包动态参数模板占位符序号,仅用作短信活动 */
  CommonParams?: number[];
  /** 发送短信活动时用于展示短连接模板占位符序号,仅用作短信活动 */
  UrlParams?: number[];
}

declare interface ModifySmsTemplateResponse {
  /** 返回 */
  Data?: ModifySmsTemplateDataStruct;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PushMmsContentRequest {
  /** 商户证书 */
  License: string;
  /** 素材样例id */
  InstanceId: number;
  /** 手机号 */
  Tel: string;
  /** 附带数据字段 */
  Session?: string;
  /** 动态参数key(即申请样例时设置的u_或p_开头的动态参数,要求序号有序) */
  DynamicParaKey?: string[];
  /** 动态参数值,和DynamicParaKey对应 */
  DynamicParaValue?: string[];
}

declare interface PushMmsContentResponse {
  /** 推送短信返回信息 */
  Data?: PushMmsContentResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendSmsRequest {
  /** 商户证书 */
  License: string;
  /** 手机号码,采用 e.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号,如:+8613800138000 */
  Phone: string[];
  /** 短信模板id(推荐使用模板id发送,使用内容发送时模板id留空) */
  TemplateId?: string;
  /** 模板参数，若无模板参数，则设置为空。 */
  Params?: string[];
  /** 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名。注：国内短信为必填参数。 */
  Sign?: string;
  /** 国际/港澳台短信 senderid，国内短信填空 */
  SenderId?: string;
  /** 短信类型：{0:普通短信，1:营销短信}，使用内容发送时必填 */
  SmsType?: number;
  /** 是否国际/港澳台短信：0：表示国内短信。1：表示国际/港澳台短信。使用内容发送时必填 */
  International?: number;
  /** 发送使用的模板内容,如果有占位符,此处也包括占位符,占位符的实际内容通过Params参数传递,使用模板id发送时此字段为空 */
  Content?: string;
}

declare interface SendSmsResponse {
  /** 出参数据 */
  Data?: SendSmsPaasDataStruct[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SmsAddCrowdPackInfoResponse {
  /** 人群包id */
  ID: number;
}

declare interface SmsCreateCampaignResponse {
  /** 活动id */
  CampaignId: number;
}

declare interface SmsGetCrowdPackListResponse {
  /** 人群包总数 */
  Total: number;
  /** 人群包返回数据列表 */
  List: SmsGetCrowdPackList[] | null;
}

declare interface SmsGetCrowdUploadInfoResponse {
  /** 过期时间 */
  ExpiredTime: number;
  /** 会话token */
  SessionToken: string;
  /** 临时密钥id */
  TmpSecretId: string;
  /** 临时密钥 */
  TmpSecretKey: string;
  /** cos信息 */
  CosInfo: UploadFansInfoCosInfo;
}

declare interface SmsSuccessResponse {
  /** 成功返回信息 */
  Message: string;
}

/** {@link Zj 珠玑} */
declare interface Zj {
  (): Versions;
  /** 添加短信人群包信息 {@link AddCrowdPackInfoRequest} {@link AddCrowdPackInfoResponse} */
  AddCrowdPackInfo(data: AddCrowdPackInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddCrowdPackInfoResponse>;
  /** 短信签名创建接口 {@link AddSmsSignRequest} {@link AddSmsSignResponse} */
  AddSmsSign(data: AddSmsSignRequest, config?: AxiosRequestConfig): AxiosPromise<AddSmsSignResponse>;
  /** 短信模板创建接口 {@link AddSmsTemplateRequest} {@link AddSmsTemplateResponse} */
  AddSmsTemplate(data: AddSmsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<AddSmsTemplateResponse>;
  /** 取消短信活动 {@link CancelCampaignRequest} {@link CancelCampaignResponse} */
  CancelCampaign(data: CancelCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<CancelCampaignResponse>;
  /** 创建短信活动 {@link CreateCampaignRequest} {@link CreateCampaignResponse} */
  CreateCampaign(data: CreateCampaignRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCampaignResponse>;
  /** 创建超级短信素材样例 {@link CreateMmsInstanceRequest} {@link CreateMmsInstanceResponse} */
  CreateMmsInstance(data: CreateMmsInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMmsInstanceResponse>;
  /** 删除人群包 {@link DelCrowdPackRequest} {@link DelCrowdPackResponse} */
  DelCrowdPack(data: DelCrowdPackRequest, config?: AxiosRequestConfig): AxiosPromise<DelCrowdPackResponse>;
  /** 删除短信模板 {@link DelTemplateRequest} {@link DelTemplateResponse} */
  DelTemplate(data: DelTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DelTemplateResponse>;
  /** 删除超级短信样例 {@link DeleteMmsInstanceRequest} {@link DeleteMmsInstanceResponse} */
  DeleteMmsInstance(data: DeleteMmsInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMmsInstanceResponse>;
  /** 获取彩信实例信息 {@link DescribeMmsInstanceInfoRequest} {@link DescribeMmsInstanceInfoResponse} */
  DescribeMmsInstanceInfo(data: DescribeMmsInstanceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMmsInstanceInfoResponse>;
  /** 获取彩信实例列表 {@link DescribeMmsInstanceListRequest} {@link DescribeMmsInstanceListResponse} */
  DescribeMmsInstanceList(data: DescribeMmsInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMmsInstanceListResponse>;
  /** 获取短信超短活动统计数据 {@link DescribeSmsCampaignStatisticsRequest} {@link DescribeSmsCampaignStatisticsResponse} */
  DescribeSmsCampaignStatistics(data: DescribeSmsCampaignStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmsCampaignStatisticsResponse>;
  /** 短信签名查询接口 {@link DescribeSmsSignListRequest} {@link DescribeSmsSignListResponse} */
  DescribeSmsSignList(data: DescribeSmsSignListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmsSignListResponse>;
  /** 短信模板查询接口 {@link DescribeSmsTemplateListRequest} {@link DescribeSmsTemplateListResponse} */
  DescribeSmsTemplateList(data: DescribeSmsTemplateListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmsTemplateListResponse>;
  /** 获取人群包列表 {@link GetCrowdPackListRequest} {@link GetCrowdPackListResponse} */
  GetCrowdPackList(data: GetCrowdPackListRequest, config?: AxiosRequestConfig): AxiosPromise<GetCrowdPackListResponse>;
  /** 获取短信人群包cos上传信息 {@link GetCrowdUploadInfoRequest} {@link GetCrowdUploadInfoResponse} */
  GetCrowdUploadInfo(data: GetCrowdUploadInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetCrowdUploadInfoResponse>;
  /** 获取账号短信额度配置信息 {@link GetSmsAmountInfoRequest} {@link GetSmsAmountInfoResponse} */
  GetSmsAmountInfo(data: GetSmsAmountInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetSmsAmountInfoResponse>;
  /** 获取短信活动状态 {@link GetSmsCampaignStatusRequest} {@link GetSmsCampaignStatusResponse} */
  GetSmsCampaignStatus(data: GetSmsCampaignStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetSmsCampaignStatusResponse>;
  /** 短信模板编辑接口 {@link ModifySmsTemplateRequest} {@link ModifySmsTemplateResponse} */
  ModifySmsTemplate(data: ModifySmsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySmsTemplateResponse>;
  /** 推送超级短信内容 {@link PushMmsContentRequest} {@link PushMmsContentResponse} */
  PushMmsContent(data: PushMmsContentRequest, config?: AxiosRequestConfig): AxiosPromise<PushMmsContentResponse>;
  /** 发送短信 {@link SendSmsRequest} {@link SendSmsResponse} */
  SendSms(data: SendSmsRequest, config?: AxiosRequestConfig): AxiosPromise<SendSmsResponse>;
}

export declare type Versions = ["2019-01-21"];

export default Zj;
