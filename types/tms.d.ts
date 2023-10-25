/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 文本审核返回的详细结果 */
declare interface DetailResults {
  /** 该字段用于返回检测结果所对应的全部恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label: string;
  /** 该字段用于返回对应当前标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion: string | null;
  /** 该字段用于返回检测文本命中的关键词信息，用于标注文本违规的具体原因（如：*加我微信*）。该参数可能会有多个返回值，代表命中的多个关键词；如返回值为空且Score不为空，则代表识别结果所对应的恶意标签（Label）是来自于语义模型判断的返回值。 */
  Keywords: string[] | null;
  /** 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。 */
  Score: number | null;
  /** 该字段**仅当Label为Custom自定义关键词时有效**，用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。 */
  LibType: number | null;
  /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。 */
  LibId: string | null;
  /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。 */
  LibName: string | null;
  /** 该字段用于返回当前标签（Label）下的二级标签。 */
  SubLabel: string | null;
  /** 该字段用于返回当前一级标签（Label）下的关键词、子标签及分数。 */
  Tags: Tag[] | null;
  /** 该字段用于返回违规文本命中信息 */
  HitInfos: HitInfo[] | null;
}

/** 用于表示业务用户对应的设备信息 */
declare interface Device {
  /** 该字段表示业务用户对应设备的IP地址。备注:目前仅支持IPv4地址记录，不支持IPv6地址记录。 */
  IP?: string;
  /** 该字段表示业务用户对应的MAC地址，以方便设备识别与管理；其格式与取值与标准MAC地址一致。 */
  Mac?: string;
  /** *内测中，敬请期待。* */
  TokenId?: string;
  /** *内测中，敬请期待。* */
  DeviceId?: string;
  /** 该字段表示业务用户对应设备的**IMEI码**（国际移动设备识别码），该识别码可用于识别每一部独立的手机等移动通信设备，方便设备识别与管理。备注：格式为**15-17位纯数字**。 */
  IMEI?: string;
  /** **iOS设备专用**，该字段表示业务用户对应的**IDFA**(广告标识符),这是由苹果公司提供的用于标识用户的广告标识符，由一串16进制的32位数字和字母组成。备注：苹果公司自2021年iOS14更新后允许用户手动关闭或者开启IDFA，故此字符串标记有效性可能有所降低。 */
  IDFA?: string;
  /** **iOS设备专用**，该字段表示业务用户对应的**IDFV**(应用开发商标识符),这是由苹果公司提供的用于标注应用开发商的标识符，由一串16进制的32位数字和字母组成，可被用于唯一标识设备。 */
  IDFV?: string;
}

/** 关键词命中位置信息 */
declare interface HitInfo {
  /** 标识模型命中还是关键词命中 */
  Type: string | null;
  /** 命中关键词 */
  Keyword: string | null;
  /** 自定义词库名称 */
  LibName: string | null;
  /** 位置信息 */
  Positions: Positions[] | null;
}

/** 标识命中的违规关键词位置信息 */
declare interface Positions {
  /** 关键词起始位置 */
  Start: number | null;
  /** 关键词结束位置 */
  End: number | null;
}

/** 账号风险检测结果 */
declare interface RiskDetails {
  /** 该字段用于返回账号信息检测对应的风险类别，取值为：**RiskAccount**（账号存在风险）、**RiskIP**（IP地址存在风险）、**RiskIMEI**（移动设备识别码存在风险）。 */
  Label: string;
  /** 该字段用于返回账号信息检测对应的风险等级，取值为：**1**（疑似存在风险）和**2**（存在恶意风险）。 */
  Level: number;
}

/** 该字段用于返回审核结果明细字段的标签及分数 */
declare interface Tag {
  /** 该字段用于返回命中的关键词 */
  Keyword: string | null;
  /** 该字段用于返回子标签 */
  SubLabel: string | null;
  /** 该字段用于返回子标签对应的分数 */
  Score: number | null;
}

/** 用于表示业务用户的账号相关信息 */
declare interface User {
  /** 该字段表示业务用户ID,填写后，系统可根据账号过往违规历史优化审核结果判定，有利于存在可疑违规风险时的辅助判断。备注：该字段可传入微信openid、QQopenid、字符串等账号信息，与账号类别参数（AccountType）配合使用可确定唯一账号。 */
  UserId?: string;
  /** 该字段表示业务用户对应的账号昵称信息。 */
  Nickname?: string;
  /** 该字段表示业务用户ID对应的账号类型，取值：**1**-微信uin，**2**-QQ号，**3**-微信群uin，**4**-qq群号，**5**-微信openid，**6**-QQopenid，**7**-其它string。该字段与账号ID参数（UserId）配合使用可确定唯一账号。 */
  AccountType?: number;
  /** 该字段表示业务用户对应账号的性别信息。取值：**0**（默认值，代表性别未知）、**1**（男性）、**2**（女性）。 */
  Gender?: number;
  /** 该字段表示业务用户对应账号的年龄信息。取值：**0**（默认值，代表年龄未知）-（**自定义年龄上限**）之间的整数。 */
  Age?: number;
  /** 该字段表示业务用户对应账号的等级信息。取值：**0**（默认值，代表等级未知）、**1**（等级较低）、**2**（等级中等）、**3**（等级较高），目前**暂不支持自定义等级**。 */
  Level?: number;
  /** 该字段表示业务用户对应账号的手机号信息，支持全球各地区手机号的记录。备注：请保持手机号格式的统一，如区号格式（086/+86）等。 */
  Phone?: string;
  /** 该字段表示业务用户头像图片的访问链接(URL)，支持PNG、JPG、JPEG、BMP、GIF、WEBP格式。备注：头像图片大小不超过5MB，建议分辨率不低于256x256；图片下载时间限制为3秒，超过则会返回下载超时。 */
  HeadUrl?: string;
  /** 该字段表示业务用户的简介信息，支持汉字、英文及特殊符号，长度不超过5000个汉字字符。 */
  Desc?: string;
  /** 该字段表示业务群聊场景时的房间ID。 */
  RoomId?: string;
  /** 该字段表示消息接受者ID */
  ReceiverId?: string;
  /** 消息生成时间，精确到毫秒 */
  SendTime?: number;
}

declare interface TextModerationRequest {
  /** 该字段表示待检测对象的文本内容，文本需要按utf-8格式编码，长度不能超过10000个字符（按unicode编码计算），并进行 Base64加密 */
  Content: string;
  /** 该字段表示策略的具体编号，用于接口调度，在内容安全控制台中可配置。若不传入Biztype参数（留空），则代表采用默认的识别策略；传入则会在审核时根据业务场景采取不同的审核策略。备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype */
  BizType?: string;
  /** 该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符** */
  DataId?: string;
  /** 该字段表示待检测对象对应的用户相关信息，传入后可便于甄别相应违规风险用户 */
  User?: User;
  /** 该字段表示待检测对象对应的设备相关信息，传入后可便于甄别相应违规风险设备 */
  Device?: Device;
}

declare interface TextModerationResponse {
  /** 该字段用于返回请求参数中的BizType参数 */
  BizType: string;
  /** 该字段用于返回检测结果（DetailResults）中所对应的**优先级最高的恶意标签**，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型 */
  Label: string;
  /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion: string;
  /** 该字段用于返回当前标签（Label）下被检测文本命中的关键词信息，用于标注文本违规的具体原因（如：*加我微信*）。该参数可能会有多个返回值，代表命中的多个关键词；如返回值为空且Score不为空，则代表识别结果所对应的恶意标签（Label）是来自于语义模型判断的返回值 */
  Keywords: string[] | null;
  /** 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容 */
  Score: number;
  /** 该字段用于返回基于文本风险库审核的详细结果，返回值信息可参阅对应数据结构（DetailResults）的详细描述 */
  DetailResults: DetailResults[] | null;
  /** 该字段用于返回文本检测中存在违规风险的账号检测结果，主要包括违规风险类别和风险等级信息，具体内容可参阅对应数据结构（RiskDetails）的详细描述 */
  RiskDetails: RiskDetails[] | null;
  /** 该字段用于返回根据您的需求配置的额外附加信息（Extra），如未配置则默认返回值为空。备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理 */
  Extra: string | null;
  /** 该字段用于返回检测对象对应请求参数中的DataId，与输入的DataId字段中的内容对应 */
  DataId: string | null;
  /** 该字段用于返回当前标签（Label）下的二级标签。 */
  SubLabel: string | null;
  /** 该字段用于返回上下文关联文本 */
  ContextText: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20200713 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-07-13' } }

  /** 文本返回的详细结果 */
  interface DetailResults {
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。以及令人反感、不安全或不适宜的内容类型。 */
    Label: string;
    /** 建议您拿到判断结果后的执行操作。建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过 */
    Suggestion: string | null;
    /** 该标签下命中的关键词 */
    Keywords: string[] | null;
    /** 该标签模型命中的分值 */
    Score: number | null;
    /** 仅当Label为Custom自定义关键词时有效，表示自定义关键词库类型，1:黑白库，2：自定义库 */
    LibType: number | null;
    /** 仅当Label为Custom自定义关键词时有效，表示自定义库id */
    LibId: string | null;
    /** 仅当Labe为Custom自定义关键词时有效，表示自定义库名称 */
    LibName: string | null;
  }

  /** 设备信息 */
  interface Device {
    /** 用户IP */
    IP?: string;
    /** Mac地址 */
    Mac?: string;
    /** 设备指纹Token */
    TokenId?: string;
    /** 设备指纹ID */
    DeviceId?: string;
    /** 设备序列号 */
    IMEI?: string;
    /** IOS设备，Identifier For Advertising（广告标识符） */
    IDFA?: string;
    /** IOS设备，IDFV - Identifier For Vendor（应用开发商标识符） */
    IDFV?: string;
  }

  /** 违规数据分布 */
  interface EvilCount {
    /** ----非必选，该参数功能暂未对外开放 */
    EvilType: string;
    /** 分布类型总量 */
    Count: number;
  }

  /** 文本过滤条件 */
  interface Filters {
    /** 查询字段：策略BizType子账号SubUin日期区间DateRange */
    Name: string;
    /** 查询值 */
    Values: string[];
  }

  /** 识别结果统计 */
  interface Overview {
    /** 总调用量 */
    TotalCount: number;
    /** 总调用时长 */
    TotalHour: number;
    /** 通过量 */
    PassCount: number;
    /** 通过时长 */
    PassHour: number;
    /** 违规量 */
    EvilCount: number;
    /** 违规时长 */
    EvilHour: number;
    /** 疑似违规量 */
    SuspectCount: number;
    /** 疑似违规时长 */
    SuspectHour: number;
  }

  /** 账号风险检测结果 */
  interface RiskDetails {
    /** 风险类别，RiskAccount，RiskIP, RiskIMEI */
    Label: string;
    /** 风险等级，1:疑似，2：恶意 */
    Level: number;
  }

  /** 自定义库列表 */
  interface TextLib {
    /** 库id */
    LibId: number;
    /** 库名 */
    LibName: string;
  }

  /** 识别量统计 */
  interface TrendCount {
    /** 总调用量 */
    TotalCount: number | null;
    /** 总调用时长 */
    TotalHour: number | null;
    /** 通过量 */
    PassCount: number | null;
    /** 通过时长 */
    PassHour: number | null;
    /** 违规量 */
    EvilCount: number | null;
    /** 违规时长 */
    EvilHour: number | null;
    /** 疑似违规量 */
    SuspectCount: number | null;
    /** 疑似违规时长 */
    SuspectHour: number | null;
    /** 日期 */
    Date: string | null;
  }

  /** 用户相关信息 */
  interface User {
    /** 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。 */
    UserId?: string;
    /** 用户昵称 */
    Nickname?: string;
    /** 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string" */
    AccountType?: number;
    /** 性别 默认0 未知 1 男性 2 女性 */
    Gender?: number;
    /** 年龄 默认0 未知 */
    Age?: number;
    /** 用户等级，默认0 未知 1 低 2 中 3 高 */
    Level?: number;
    /** 手机号 */
    Phone?: string;
  }

  interface AccountTipoffAccessRequest {
    /** 被举报账号，长度低于 128 个字符 */
    ReportedAccount: string;
    /** 被举报账号类型(1-手机号 2-QQ号 3-微信号 4-QQ群号 5-微信openid 6-QQopenid 0-其它) */
    ReportedAccountType: number;
    /** 被举报账号所属恶意类型(1-诈骗，2-骚扰，3-广告，4-违法违规，5-赌博传销，0-其他) */
    EvilType: number;
    /** 举报者账号，长度低于 128 个字符 */
    SenderAccount?: string;
    /** 举报者账号类型(1-手机号 2-QQ号 3-微信号 4-QQ群号 5-微信openid 6-QQopenid 0-其它) */
    SenderAccountType?: number;
    /** 举报者IP地址 */
    SenderIP?: string;
    /** 包含被举报账号的恶意内容（比如文本、图片链接，长度低于1024个字符） */
    EvilContent?: string;
  }

  interface AccountTipoffAccessResponse {
    /** 举报接口响应数据 */
    Data?: TipoffResponse | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTextLibRequest {
    /** 内容类型 text: 1; image: 2; audio: 3; video: 4 */
    StrategyType: number;
  }

  interface DescribeTextLibResponse {
    /** 文本库id和name列表 */
    TextLib: TextLib[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTextStatRequest {
    /** 审核类型 1: 机器审核; 2: 人工审核 */
    AuditType: number;
    /** 查询条件 */
    Filters: Filters[];
  }

  interface DescribeTextStatResponse {
    /** 识别结果统计 */
    Overview?: Overview;
    /** 识别量统计 */
    TrendCount?: TrendCount[];
    /** 违规数据分布 */
    EvilCount?: EvilCount[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TextModerationRequest {
    /** 文本内容Base64编码。限制原文长度不能超过10000个unicode字符 */
    Content: string;
    /** 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略 */
    BizType?: string;
    /** 数据ID，英文字母、下划线、-组成，不超过64个字符 */
    DataId?: string;
    /** 账号相关信息字段，填入后可识别违规风险账号 */
    User?: User;
    /** 设备相关信息字段，填入后可识别违规风险设备 */
    Device?: Device;
  }

  interface TextModerationResponse {
    /** 您在入参时所填入的Biztype参数 */
    BizType: string;
    /** 数据是否属于恶意类型，0：正常 1：可疑 */
    EvilFlag: number;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库，以及令人反感、不安全或不适宜的内容类型 */
    Label: string;
    /** 建议您拿到判断结果后的执行操作建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过 */
    Suggestion: string;
    /** 文本命中的关键词信息，用于提示您文本违规的具体原因，可能会返回多个命中的关键词。（如：加我微信）如返回值为空，Score不为空，即识别结果（Label）是来自于语义模型判断的返回值 */
    Keywords: string[] | null;
    /** 机器判断当前分类的置信度，取值范围：0.00~100.00。分数越高，表示越有可能属于当前分类。（如：色情 99.99，则该样本属于色情的置信度非常高。） */
    Score: number;
    /** 接口识别样本后返回的详细结果 */
    DetailResults: DetailResults[] | null;
    /** 接口识别样本中存在违规账号风险的检测结果 */
    RiskDetails: RiskDetails[] | null;
    /** 扩展字段，用于特定信息返回，不同客户/Biztype下返回信息不同 */
    Extra: string | null;
    /** 请求参数中的DataId */
    DataId: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TipoffResponse {
    /** 举报结果， "0-举报数据提交成功 99-举报数据提交失败" */
    ResultCode: number;
    /** 结果描述 */
    ResultMsg: string;
  }
}

/** {@link Tms 文本内容安全} */
declare interface Tms {
  (): Versions;
  /** 文本内容安全 {@link TextModerationRequest} {@link TextModerationResponse} */
  TextModeration(data: TextModerationRequest, config?: AxiosRequestConfig): AxiosPromise<TextModerationResponse>;
  /** 账号举报接口 {@link V20200713.AccountTipoffAccessRequest} {@link V20200713.AccountTipoffAccessResponse} */
  AccountTipoffAccess(data: V20200713.AccountTipoffAccessRequest, config: AxiosRequestConfig & V20200713.VersionHeader): AxiosPromise<V20200713.AccountTipoffAccessResponse>;
  /** 获取用户词库列表 {@link V20200713.DescribeTextLibRequest} {@link V20200713.DescribeTextLibResponse} */
  DescribeTextLib(data: V20200713.DescribeTextLibRequest, config: AxiosRequestConfig & V20200713.VersionHeader): AxiosPromise<V20200713.DescribeTextLibResponse>;
  /** 识别统计 {@link V20200713.DescribeTextStatRequest} {@link V20200713.DescribeTextStatResponse} */
  DescribeTextStat(data: V20200713.DescribeTextStatRequest, config: AxiosRequestConfig & V20200713.VersionHeader): AxiosPromise<V20200713.DescribeTextStatResponse>;
  /** 文本内容安全 {@link V20200713.TextModerationRequest} {@link V20200713.TextModerationResponse} */
  TextModeration(data: V20200713.TextModerationRequest, config: AxiosRequestConfig & V20200713.VersionHeader): AxiosPromise<V20200713.TextModerationResponse>;
}

export declare type Versions = ["2020-12-29", "2020-07-13"];

export default Tms;
