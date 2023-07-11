/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 从图片中检测到的二维码，可能为多个 */
declare interface CodeDetail {
  /** 二维码文本的编码格式 */
  StrCharset?: string | null;
  /** 二维码在图片中的位置，由边界点的坐标表示 */
  QrCodePosition?: CodePosition[] | null;
  /** 二维码的文本内容 */
  StrQrCodeText?: string | null;
  /** 二维码的类型：1:ONED_BARCODE，2:QRCOD，3:WXCODE，4:PDF417，5:DATAMATRIX */
  Uint32QrCodeType?: number | null;
  /** 二维码文本的编码格式（已废弃） */
  CodeCharset?: string | null;
  /** 二维码在图片中的位置，由边界点的坐标表示（已废弃） */
  CodePosition?: CodePosition[] | null;
  /** 二维码的文本内容（已废弃） */
  CodeText?: string | null;
  /** 二维码的类型：1:ONED_BARCODE，2:QRCOD，3:WXCODE，4:PDF417，5:DATAMATRIX（已废弃） */
  CodeType?: number | null;
}

/** 图片二维码详情 */
declare interface CodeDetect {
  /** 检测是否成功，0：成功，-1：出错 */
  ModerationCode?: number | null;
  /** 从图片中检测到的二维码，可能为多个 */
  ModerationDetail?: CodeDetail[] | null;
}

/** 二维码在图片中的位置，由边界点的坐标表示 */
declare interface CodePosition {
  /** 二维码边界点X轴坐标 */
  FloatX?: number | null;
  /** 二维码边界点Y轴坐标 */
  FloatY?: number | null;
}

/** 坐标 */
declare interface Coordinate {
  /** 宽度 */
  Width?: number | null;
  /** 左上角纵坐标 */
  Cy?: number | null;
  /** 左上角横坐标 */
  Cx?: number | null;
  /** 高度 */
  Height?: number | null;
}

/** 文本返回的自定义词库结果 */
declare interface CustomResult {
  /** 命中的自定义关键词 */
  Keywords?: string[];
  /** 自定义词库名称 */
  LibName?: string;
  /** 自定义库id */
  LibId?: string;
  /** 命中的自定义关键词的类型 */
  Type?: string;
}

/** 词库关键词删除结果详情 */
declare interface DeleteSampleDetails {
  /** 关键词ID */
  SampleID: string;
  /** 关键词内容 */
  Content: string;
  /** 是否删除成功 */
  Deleted: boolean;
  /** 错误信息 */
  ErrorInfo: string;
}

/** 文本返回的详细结果 */
declare interface DetailResult {
  /** 该标签下命中的关键词 */
  Keywords?: string[] | null;
  /** 恶意类型100：正常20001：政治20002：色情 20006：涉毒违法20007：谩骂20105：广告引流 24001：暴恐 */
  EvilType?: number;
  /** 该标签模型命中的分值 */
  Score?: number;
  /** 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词 */
  EvilLabel?: string;
}

/** 设备信息 */
declare interface Device {
  /** IOS设备，IDFV - Identifier For Vendor（应用开发商标识符） */
  IDFV?: string;
  /** 设备指纹Token */
  TokenId?: string;
  /** 用户IP */
  IP?: string;
  /** Mac地址 */
  Mac?: string;
  /** IOS设备，Identifier For Advertising（广告标识符） */
  IDFA?: string;
  /** 设备指纹ID */
  DeviceId?: string;
  /** 设备序列号 */
  IMEI?: string;
}

/** 入参过滤条件 */
declare interface Filters {
  /** 查询字段 */
  Name: string;
  /** 查询值 */
  Values: string[];
}

/** 图片识别结果详情 */
declare interface ImageData {
  /** 恶意类型100：正常 20001：政治20002：色情 20006：涉毒违法20007：谩骂 20103：性感24001：暴恐 */
  EvilType: number;
  /** 图片性感详情 */
  HotDetect?: ImageHotDetect | null;
  /** 是否恶意 0：正常 1：可疑 */
  EvilFlag: number;
  /** 图片二维码详情 */
  CodeDetect?: CodeDetect | null;
  /** 图片涉政详情 */
  PolityDetect?: ImagePolityDetect | null;
  /** 图片违法详情 */
  IllegalDetect?: ImageIllegalDetect | null;
  /** 图片涉黄详情 */
  PornDetect?: ImagePornDetect | null;
  /** 图片暴恐详情 */
  TerrorDetect?: ImageTerrorDetect | null;
  /** 图片OCR详情 */
  OCRDetect?: OCRDetect | null;
  /** logo详情 */
  LogoDetect?: LogoDetail | null;
  /** 图片相似度详情 */
  Similar?: Similar | null;
  /** 手机检测详情 */
  PhoneDetect?: PhoneDetect | null;
}

/** 图片性感详情 */
declare interface ImageHotDetect {
  /** 关键词明细 */
  Keywords?: string[];
  /** 恶意类型100：正常20103：性感 */
  EvilType: number;
  /** 性感标签：性感特征中文描述 */
  Labels?: string[];
  /** 性感分：分值范围 0-100，分数越高性感倾向越明显 */
  Score?: number;
  /** 处置判定 0：正常 1：可疑 */
  HitFlag: number;
}

/** 图片违法详情 */
declare interface ImageIllegalDetect {
  /** 恶意类型100：正常 20006：涉毒违法 */
  EvilType: number;
  /** 处置判定 0：正常 1：可疑 */
  HitFlag: number;
  /** 关键词明细 */
  Keywords?: string[];
  /** 违法标签：返回违法特征中文描述，如赌桌，枪支 */
  Labels?: string[];
  /** 违法分：分值范围 0-100，分数越高违法倾向越明显 */
  Score?: number;
}

/** 图片涉政详情 */
declare interface ImagePolityDetect {
  /** 恶意类型100：正常 20001：政治 */
  EvilType: number;
  /** 处置判定 0：正常 1：可疑 */
  HitFlag: number;
  /** 命中的人脸名称 */
  FaceNames?: string[];
  /** 命中的logo标签信息 */
  PolityLogoDetail?: Logo[] | null;
  /** 命中的政治物品名称 */
  PolityItems?: string[] | null;
  /** 政治（人脸）分：分值范围 0-100，分数越高可疑程度越高 */
  Score?: number;
  /** 关键词明细 */
  Keywords?: string[];
}

/** 图片涉黄详情 */
declare interface ImagePornDetect {
  /** 恶意类型100：正常20002：色情 */
  EvilType: number;
  /** 处置判定 0：正常 1：可疑 */
  HitFlag: number;
  /** 关键词明细 */
  Keywords?: string[];
  /** 色情标签：色情特征中文描述 */
  Labels?: string[];
  /** 色情分：分值范围 0-100，分数越高色情倾向越明显 */
  Score?: number;
}

/** 图片暴恐详情 */
declare interface ImageTerrorDetect {
  /** 关键词明细 */
  Keywords?: string[] | null;
  /** 恶意类型100：正常24001：暴恐 */
  EvilType?: number | null;
  /** 暴恐标签：返回暴恐特征中文描述 */
  Labels?: string[] | null;
  /** 暴恐分：分值范围0--100，分数越高暴恐倾向越明显 */
  Score?: number | null;
  /** 处置判定 0：正常 1：可疑 */
  HitFlag?: number | null;
}

/** 无效关键词 */
declare interface InvalidSample {
  /** 关键词 */
  Content?: string | null;
  /** 无效代码:1-标签不存在;2-词过长;3-词类型不匹配;4-备注超长 */
  InvalidCode?: number | null;
  /** 无效描述 */
  InvalidMessage?: string | null;
}

/** 关键词库信息 */
declare interface KeywordsLibInfo {
  /** 关键词库ID */
  ID: string;
  /** 关键词库名称 */
  LibName: string | null;
  /** 关键词库描述信息 */
  Describe: string | null;
  /** 关键词库创建时间 */
  CreateTime: string;
  /** 审核建议(Review/Block) */
  Suggestion: string;
  /** 匹配模式(ExactMatch/FuzzyMatch) */
  MatchType: string;
  /** 关联策略BizType列表 */
  BizTypes?: string[] | null;
}

/** Logo审核结果 */
declare interface Logo {
  /** logo图标置信度 */
  Confidence?: number | null;
  /** logo图标坐标信息 */
  RrectF?: RrectF | null;
  /** logo图标名称 */
  Name?: string | null;
}

/** Logo命中详情 */
declare interface LogoDetail {
  /** 命中的Applogo详情 */
  AppLogoDetail?: Logo[] | null;
}

/** OCR识别结果详情 */
declare interface OCRDetect {
  /** 识别到的详细信息 */
  Item?: OCRItem[] | null;
  /** 识别到的文本信息 */
  TextInfo?: string | null;
}

/** OCR详情 */
declare interface OCRItem {
  /** 检测到的文本坐标信息 */
  TextPosition?: Coordinate | null;
  /** 文本命中恶意违规类型 */
  EvilType?: number | null;
  /** 检测到的文本信息 */
  TextContent?: string | null;
  /** 文本涉嫌违规分值 */
  Rate?: number | null;
  /** 文本命中具体标签 */
  EvilLabel?: string | null;
  /** 文本命中违规的关键词 */
  Keywords?: string[] | null;
}

/** 手机模型识别检测 */
declare interface PhoneDetect {
  /** 恶意类型100：正常21000：综合 */
  EvilType?: number | null;
  /** 特征中文描述 */
  Labels?: string[] | null;
  /** 分值范围 0-100，分数越高倾向越明显 */
  Score?: number | null;
  /** 处置判定 0：正常 1：可疑 */
  HitFlag?: number | null;
}

/** 账号风险检测结果 */
declare interface RiskDetails {
  /** 预留字段，暂时不使用 */
  Keywords?: string[];
  /** 预留字段，暂时不用 */
  Lable?: string;
  /** 风险类别，RiskAccount，RiskIP, RiskIMEI */
  Label?: string;
  /** 风险等级，1:疑似，2：恶意 */
  Level?: number;
}

/** logo位置信息 */
declare interface RrectF {
  /** logo图标宽度 */
  Width?: number | null;
  /** logo纵坐标 */
  Cy?: number | null;
  /** logo横坐标 */
  Cx?: number | null;
  /** logo图标中心旋转度 */
  Rotate?: number | null;
  /** logo图标高度 */
  Height?: number | null;
}

/** 相似度详情 */
declare interface Similar {
  /** 恶意类型100：正常 20001：政治20002：色情 20006：涉毒违法20007：谩骂 24001：暴恐 */
  EvilType: number;
  /** 处置判定 0：未匹配到 1：恶意 2：白样本 */
  HitFlag: number;
  /** 返回的种子url */
  SeedUrl: string | null;
}

/** 文本识别结果详情 */
declare interface TextData {
  /** 恶意类型100：正常20001：政治20002：色情 20006：涉毒违法20007：谩骂20105：广告引流 24001：暴恐 */
  EvilType: number;
  /** 是否恶意 0：正常 1：可疑 */
  EvilFlag: number;
  /** 和请求中的DataId一致，原样返回 */
  DataId?: string | null;
  /** 输出的其他信息，不同客户内容不同 */
  Extra?: string | null;
  /** 最终使用的BizType */
  BizType?: number;
  /** 消息类输出结果 */
  Res?: TextOutputRes;
  /** 账号风险检测结果 */
  RiskDetails?: RiskDetails[] | null;
  /** 消息类ID信息 */
  ID?: TextOutputID;
  /** 命中的模型分值 */
  Score?: number;
  /** 消息类公共相关参数 */
  Common?: TextOutputComm;
  /** 建议值,Block：打击,Review：待复审,Normal：正常 */
  Suggestion?: string;
  /** 命中的关键词 */
  Keywords?: string[];
  /** 返回的详细结果 */
  DetailResult?: DetailResult[] | null;
  /** 返回的自定义词库结果 */
  CustomResult?: CustomResult[] | null;
  /** 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词 */
  EvilLabel?: string;
}

/** 消息类输出公共参数 */
declare interface TextOutputComm {
  /** 接口唯一ID，旁路调用接口返回有该字段，标识唯一接口 */
  BUCtrlID?: number;
  /** 消息发送时间 */
  SendTime?: number;
  /** 接入业务的唯一ID */
  AppID?: number;
  /** 请求字段里的Common.Uin */
  Uin?: number;
}

/** 消息类输出ID参数 */
declare interface TextOutputID {
  /** 接入业务的唯一ID */
  MsgID?: string;
  /** 用户账号uin，对应请求协议里的Content.User.Uin。旁路结果有回带，串联结果无该字段 */
  Uin?: string;
}

/** 消息类输出结果参数 */
declare interface TextOutputRes {
  /** 操作人,信安处理人企业微信ID */
  Operator?: string;
  /** 恶意类型，广告（10001）， 政治（20001）， 色情（20002）， 社会事件（20004）， 暴力（20011）， 低俗（20012）， 违法犯罪（20006）， 欺诈（20008）， 版权（20013）， 谣言（20104）， 其他（21000） */
  ResultType?: number;
  /** 恶意操作码，删除（1）， 通过（2）， 先审后发（100012） */
  ResultCode?: number;
  /** 操作结果备注说明 */
  ResultMsg?: string;
}

/** 用户相关信息 */
declare interface User {
  /** 用户等级，默认0 未知 1 低 2 中 3 高 */
  Level?: number;
  /** 性别 默认0 未知 1 男性 2 女性 */
  Gender?: number;
  /** 年龄 默认0 未知 */
  Age?: number;
  /** 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。 */
  UserId?: string;
  /** 手机号 */
  Phone?: string;
  /** 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string" */
  AccountType?: number;
  /** 用户昵称 */
  Nickname?: string;
}

/** 添加关键词。 */
declare interface UserKeyword {
  /** 关键词内容：最多40个字符，并且符合词类型的规则 */
  Content: string;
  /** 关键词类型，取值范围为："Normal","Polity","Porn","Ad","Illegal","Abuse","Terror","Spam" */
  Label: string;
  /** 关键词备注：最多100个字符。 */
  Remark?: string;
  /** 词类型：Default,Pinyin,English,CompoundWord,ExclusionWord,AffixWord */
  WordType?: string;
}

/** 关键词信息 */
declare interface UserKeywordInfo {
  /** 关键词条ID */
  ID: string;
  /** 关键词内容 */
  Content: string;
  /** 关键词标签；取值范围为："Normal","Polity","Porn","Sexy","Ad","Illegal","Abuse","Terror","Spam","Moan" */
  Label: string;
  /** 创建时间 */
  CreateTime: string;
  /** 备注 */
  Remark: string | null;
  /** 词类型：Default,Pinyin,English,CompoundWord,ExclusionWord,AffixWord */
  WordType: string | null;
}

declare interface CreateKeywordsSamplesRequest {
  /** 关键词库信息：单次限制写入2000个，词库总容量不可超过10000个。 */
  UserKeywords: UserKeyword[];
  /** 词库ID */
  LibID?: string;
}

declare interface CreateKeywordsSamplesResponse {
  /** 添加成功的关键词ID列表 */
  SampleIDs?: string[] | null;
  /** 成功入库关键词列表 */
  SuccessInfos?: UserKeywordInfo[];
  /** 重复关键词列表 */
  DupInfos?: UserKeywordInfo[] | null;
  /** 无效关键词列表 */
  InvalidSamples?: InvalidSample[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLibSamplesRequest {
  /** 关键词ID列表 */
  SampleIDs: string[];
  /** 词库ID */
  LibID?: string;
  /** 关键词内容列表 */
  SampleContents?: string[];
}

declare interface DeleteLibSamplesResponse {
  /** 删除成功的数量 */
  Count?: number;
  /** 每个关键词删除的结果 */
  Details?: DeleteSampleDetails[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKeywordsLibsRequest {
  /** 单页条数，最大为100条 */
  Limit: number;
  /** 条数偏移量 */
  Offset: number;
  /** 过滤器(支持LibName模糊查询,CustomLibIDs词库id列表过滤) */
  Filters?: Filters[];
}

declare interface DescribeKeywordsLibsResponse {
  /** 词库记录数 */
  TotalCount?: number;
  /** 词库详情 */
  Infos?: KeywordsLibInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibSamplesRequest {
  /** 单页条数，最大为100条 */
  Limit: number;
  /** 条数偏移量 */
  Offset: number;
  /** 词库ID */
  LibID?: string;
  /** 词内容过滤 */
  Content?: string;
  /** 违规类型列表过滤 */
  EvilTypeList?: number[];
  /** 样本词ID列表过滤 */
  SampleIDs?: string[];
}

declare interface DescribeLibSamplesResponse {
  /** 词记录数 */
  TotalCount?: number;
  /** 词详情 */
  Infos?: UserKeywordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageModerationRequest {
  /** 文件地址 */
  FileUrl?: string;
  /** 文件MD5值 */
  FileMD5?: string;
  /** 文件内容 Base64,与FileUrl必须二填一 */
  FileContent?: string;
}

declare interface ImageModerationResponse {
  /** 业务返回码 */
  BusinessCode?: number;
  /** 识别结果 */
  Data?: ImageData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextModerationRequest {
  /** 文本内容Base64编码。原文长度需小于15000字节，即5000个汉字以内。 */
  Content: string;
  /** 数据ID，英文字母、下划线、-组成，不超过64个字符 */
  DataId?: string;
  /** 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略 */
  BizType?: number;
  /** 用户相关信息 */
  User?: User;
  /** 业务应用ID */
  SdkAppId?: number;
  /** 设备相关信息 */
  Device?: Device;
}

declare interface TextModerationResponse {
  /** 业务返回码 */
  BusinessCode?: number;
  /** 识别结果 */
  Data?: TextData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cms 内容安全} */
declare interface Cms {
  (): Versions;
  /** 创建关键词接口 {@link CreateKeywordsSamplesRequest} {@link CreateKeywordsSamplesResponse} */
  CreateKeywordsSamples(data: CreateKeywordsSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKeywordsSamplesResponse>;
  /** 删除关键词接口 {@link DeleteLibSamplesRequest} {@link DeleteLibSamplesResponse} */
  DeleteLibSamples(data: DeleteLibSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLibSamplesResponse>;
  /** 获取词库列表 {@link DescribeKeywordsLibsRequest} {@link DescribeKeywordsLibsResponse} */
  DescribeKeywordsLibs(data: DescribeKeywordsLibsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeywordsLibsResponse>;
  /** 获取关键词接口 {@link DescribeLibSamplesRequest} {@link DescribeLibSamplesResponse} */
  DescribeLibSamples(data: DescribeLibSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibSamplesResponse>;
  /** 图片内容检测 {@link ImageModerationRequest} {@link ImageModerationResponse} */
  ImageModeration(data?: ImageModerationRequest, config?: AxiosRequestConfig): AxiosPromise<ImageModerationResponse>;
  /** 文本内容检测 {@link TextModerationRequest} {@link TextModerationResponse} */
  TextModeration(data: TextModerationRequest, config?: AxiosRequestConfig): AxiosPromise<TextModerationResponse>;
}

export declare type Versions = ["2019-03-21"];

export default Cms;
