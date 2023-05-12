/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 用于表示业务用户对应的设备信息 */
declare interface Device {
  /** 该字段表示业务用户对应设备的IP地址，同时**支持IPv4和IPv6**地址的记录；需要与IpType参数配合使用。 */
  Ip?: string;
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
  /** 该字段表示记录的IP地址的类型，取值：**0**（代表IPv4地址）、**1**（代表IPv6地址）；需要与IpType参数配合使用。 */
  IpType?: number;
}

/** 用于返回分类模型命中子标签的详细结果 */
declare interface LabelDetailItem {
  /** 该字段用于返回识别对象的ID以方便识别和区分。 */
  Id: number | null;
  /** 该字段用于返回识命中的子标签名称。 */
  Name: string | null;
  /** 该字段用于返回对应子标签命中的分值，取值为**0-100**，如：*Porn-SexBehavior 99* 则代表相应识别内容命中色情-性行为标签的分值为99。 */
  Score: number | null;
}

/** 分类模型命中结果 */
declare interface LabelResult {
  /** 该字段用于返回模型识别出的场景结果，如广告、色情、有害内容等场景。 */
  Scene: string;
  /** 该字段用于返回针对当前恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion: string;
  /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label: string;
  /** 该字段用于返回对应恶意标签下的子标签的检测结果，如：*Porn-SexBehavior*等子标签。 */
  SubLabel: string;
  /** 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表图片越有可能属于当前返回的标签；如：*色情 99*，则表明该图片非常有可能属于色情内容；*色情 0*，则表明该图片不属于色情内容。 */
  Score: number;
  /** 该字段用于返回分类模型命中子标签的详细信息，如：序号、命中标签名称、分数等信息。 */
  Details: LabelDetailItem[] | null;
}

/** 用于返回自定义库/黑白库的明细信息 */
declare interface LibDetail {
  /** 该字段用于返回识别对象的ID以方便识别和区分。 */
  Id: number;
  /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。 */
  LibId: string;
  /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。 */
  LibName: string | null;
  /** 该字段用于返回识别图像对象的ID以方便文件管理。 */
  ImageId: string;
  /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label: string;
  /** 该字段用于返回其他自定义标签以满足您的定制化场景需求，若无需求则可略过。 */
  Tag: string | null;
  /** 该字段用于返回对应模型命中的分值，取值为**0-100**，如：*Porn 99* 则代表相应识别内容命中色情标签的分值为99。 */
  Score: number;
}

/** 用于返回黑白库比对结果的详细信息 */
declare interface LibResult {
  /** 该字段表示模型的场景识别结果，默认取值为Similar。 */
  Scene: string;
  /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion: string;
  /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label: string;
  /** 该字段用于返回恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。 */
  SubLabel: string | null;
  /** 该字段用于返回图片检索模型识别的分值，取值为**0-100**，表示该审核图片**与库中样本的相似分值**，得分越高，代表当前内容越有可能命中相似图库内的样本。 */
  Score: number;
  /** 该字段用于返回黑白库比对结果的详细信息，如：序号、库名称、恶意标签等信息；详细返回信息敬请参考对应数据结构（[LibDetail](https://cloud.tencent.com/document/product/1125/53274)）的描述文档 */
  Details: LibDetail[] | null;
}

/** 坐标 */
declare interface Location {
  /** 该参数用于返回检测框**左上角位置的横坐标**（x）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。 */
  X: number;
  /** 该参数用于返回检测框**左上角位置的纵坐标**（y）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。 */
  Y: number;
  /** 该参数用于返回**检测框的宽度**（由左上角出发在x轴向右延伸的长度），结合剩余参数可唯一确定检测框的大小和位置。 */
  Width: number;
  /** 该参数用于返回**检测框的高度**（由左上角出发在y轴向下延伸的长度），结合剩余参数可唯一确定检测框的大小和位置。 */
  Height: number;
  /** 该参数用于返回**检测框的旋转角度**，该参数结合X和Y两个坐标参数可唯一确定检测框的具体位置；取值：**0-360**（**角度制**），方向为**逆时针旋转**。 */
  Rotate: number;
}

/** 实体检测结果明细，当检测场景为实体、广告台标、二维码时表示模型检测目标框的标签名称、标签值、标签分数以及检测框的位置信息。 */
declare interface ObjectDetail {
  /** 该参数用于返回识别对象的ID以方便识别和区分。 */
  Id: number;
  /** 该参数用于返回命中的实体标签。 */
  Name: string;
  /** 该参数用于返回对应实体标签所对应的值或内容。如：当标签为*二维码(QrCode)*时，该字段为识别出的二维码对应的URL地址。 */
  Value: string;
  /** 该参数用于返回对应实体标签命中的分值，取值为**0-100**，如：*QrCode 99* 则代表相应识别内容命中二维码场景标签的概率非常高。 */
  Score: number;
  /** 该字段用于返回实体检测框的坐标位置（左上角xy坐标、长宽、旋转角度）以方便快速定位实体的相关信息。 */
  Location: Location;
  /** 该参数用于返回命中的实体二级标签。 */
  SubLabel: string;
  /** 该参数用于返回命中的人脸id */
  ObjectId?: string | null;
}

/** 用于返回实体检测结果详情 */
declare interface ObjectResult {
  /** 该字段用于返回实体识别出的实体场景结果，如二维码、logo、图片OCR等场景。 */
  Scene: string;
  /** 该字段用于返回针对当前恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion: string;
  /** 该字段用于返回检测结果所对应的恶意标签，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label: string;
  /** 该字段用于返回当前恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior* 等子标签。 */
  SubLabel: string;
  /** 该字段用于返回命中当前恶意标签下子标签的分值，取值为**0-100**，如：*Porn-SexBehavior 99* 则代表相应识别内容命中色情-性行为标签的分值为99。 */
  Score: number;
  /** 该标签用于返回所识别出的实体名称。 */
  Names: string[] | null;
  /** 该标签用于返回所识别出实体的详细信息，如：序号、命中标签名称、位置坐标等信息，详细返回内容敬请参考相应数据结构（[ObjectDetail](https://cloud.tencent.com/document/api/1125/53274)）。 */
  Details: ObjectDetail[] | null;
}

/** 用于返回OCR结果检测详情 */
declare interface OcrResult {
  /** 该字段表示识别场景，取值默认为OCR（图片OCR识别）。 */
  Scene: string;
  /** 该字段用于返回优先级最高的恶意标签对应的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion: string;
  /** 该字段用于返回OCR检测结果所对应的优先级最高的恶意标签，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label: string;
  /** 该字段用于返回当前标签（Label）下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。 */
  SubLabel: string;
  /** 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。 */
  Score: number;
  /** 该字段用于返回OCR识别出的结果的详细内容，如：文本内容、对应标签、识别框位置等信息。 */
  Details: OcrTextDetail[] | null;
  /** 该字段用于返回OCR识别出的文字信息。 */
  Text: string;
}

/** 用于返回OCR文本结果详情，图片中的文本越多，可能导致接口返回时间增加。 */
declare interface OcrTextDetail {
  /** 该字段用于返回OCR识别出的文本内容。备注：OCR文本识别上限在**5000字节内**。 */
  Text: string;
  /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label: string;
  /** 该字段**仅当Label为Custom自定义关键词时有效**，用于返回自定义库的ID，以方便自定义库管理和配置。 */
  LibId: string;
  /** 该字段**仅当Label为Custom自定义关键词时有效**，用于返回自定义库的名称，以方便自定义库管理和配置。 */
  LibName: string;
  /** 该参数用于返回在当前label下命中的关键词。 */
  Keywords: string[];
  /** 该参数用于返回在当前恶意标签下模型命中的分值，取值为**0-100**；分数越高，代表当前场景越符合该恶意标签所对应的场景。 */
  Score: number;
  /** 该参数用于返回OCR检测框在图片中的位置（左上角xy坐标、长宽、旋转角度），以方便快速定位识别文字的相关信息。 */
  Location: Location;
  /** 该参数用于返回OCR文本识别结果的置信度，取值在**0**（**置信度最低**）-**100**（**置信度最高**），越高代表对应图像越有可能是识别出的文字；如：*你好 99*，则表明OCR识别框内的文字大概率是”你好“。 */
  Rate: number;
  /** 该字段用于返回检测结果所对应的恶意二级标签。 */
  SubLabel: string;
}

/** 识别类型标签结果信息 */
declare interface RecognitionResult {
  /** 当前可能的取值：Scene（图片场景模型） */
  Label?: string | null;
  /** Label对应模型下的识别标签信息 */
  Tags?: RecognitionTag[] | null;
}

/** 识别类型标签信息 */
declare interface RecognitionTag {
  /** 标签名称 */
  Name?: string | null;
  /** 置信分：0～100，数值越大表示置信度越高 */
  Score?: number | null;
  /** 标签位置信息，若模型无位置信息，则可能为零值 */
  Location?: Location | null;
}

/** 用于表示业务用户的账号相关信息 */
declare interface User {
  /** 该字段表示业务用户ID,填写后，系统可根据账号过往违规历史优化审核结果判定，有利于存在可疑违规风险时的辅助判断。备注：该字段可传入微信openid、QQopenid、字符串等账号信息，与账号类别参数（AccountType）配合使用可确定唯一账号。 */
  UserId?: string;
  /** 该字段表示业务用户对应的账号昵称信息。 */
  Nickname?: string;
  /** 该字段表示业务用户ID对应的账号类型，取值：**1**-微信uin，**2**-QQ号，**3**-微信群uin，**4**-qq群号，**5**-微信openid，**6**-QQopenid，**7**-其它string。该字段与账号ID参数（UserId）配合使用可确定唯一账号。 */
  AccountType?: string;
  /** 该字段表示业务用户对应账号的性别信息。取值：**0**（默认值，代表性别未知）、**1**（男性）、**2**（女性）。 */
  Gender?: number;
  /** 该字段表示业务用户对应账号的年龄信息。取值：**0**（默认值，代表年龄未知）-（**自定义年龄上限**）之间的整数。 */
  Age?: number;
  /** 该字段表示业务用户对应账号的等级信息。取值：**0**（默认值，代表等级未知）、**1**（等级较低）、**2**（等级中等）、**3**（等级较高），目前**暂不支持自定义等级**。 */
  Level?: number;
  /** 该字段表示业务用户对应账号的手机号信息，支持全球各地区手机号的记录。备注：请保持手机号格式的统一，如区号格式（086/+86）等。 */
  Phone?: string;
  /** 该字段表示业务用户的简介信息，支持汉字、英文及特殊符号，**长度不超过5000个汉字字符**。 */
  Desc?: string;
  /** 该字段表示业务用户头像图片的访问链接(URL)，支持PNG、JPG、JPEG、BMP、GIF、WEBP格式。备注：头像图片**大小不超过5MB**，建议**分辨率不低于256x256**；图片下载时间限制为3秒，超过则会返回下载超时。 */
  HeadUrl?: string;
}

declare interface CreateImageModerationAsyncTaskRequest {
  /** 接收审核信息回调地址，审核过程中产生的所有结果发送至此地址。 */
  CallbackUrl: string;
  /** 该字段表示策略的具体编号，用于接口调度，在内容安全控制台中可配置。若不传入Biztype参数（留空），则代表采用默认的识别策略；传入则会在审核时根据业务场景采取不同的审核策略。备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。 */
  BizType?: string;
  /** 该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符**。 */
  DataId?: string;
  /** 该字段表示待检测图片文件内容的Base64编码，图片**大小不超过5MB**，建议**分辨率不低于256x256**，否则可能会影响识别效果。备注： **该字段与FileUrl必须选择输入其中一个**。 */
  FileContent?: string;
  /** 该字段表示待检测图片文件的访问链接，图片支持PNG、JPG、JPEG、BMP、GIF、WEBP格式，**大小不超过5MB**，建议**分辨率不低于256x256**；图片下载时间限制为3秒，超过则会返回下载超时；由于网络安全策略，**送审带重定向的链接，可能引起下载失败**，请尽量避免，比如Http返回302状态码的链接，可能导致接口返回ResourceUnavailable.ImageDownloadError。备注：**该字段与FileContent必须选择输入其中一个**。 */
  FileUrl?: string;
  /** **GIF/长图检测专用**，用于表示GIF截帧频率（每隔多少张图片抽取一帧进行检测），长图则按照长边：短边取整计算要切割的总图数；默认值为0，此时只会检测GIF的第一帧或对长图不进行切分处理。备注：Interval与MaxFrames参数需要组合使用。例如，Interval=3, MaxFrames=400，则代表在检测GIF/长图时，将每间隔2帧检测一次且最多检测400帧。 */
  Interval?: number;
  /** **GIF/长图检测专用**，用于标识最大截帧数量；默认值为1，此时只会检测输入GIF的第一帧或对长图不进行切分处理（可能会造成处理超时）。备注：Interval与MaxFrames参数需要组合使用。例如，Interval=3, MaxFrames=400，则代表在检测GIF/长图时，将每间隔2帧检测一次且最多检测400帧。 */
  MaxFrames?: number;
  /** 该字段表示待检测对象对应的用户相关信息，若填入则可甄别相应违规风险用户。 */
  User?: User;
  /** 该字段表示待检测对象对应的设备相关信息，若填入则可甄别相应违规风险设备。 */
  Device?: Device;
}

declare interface CreateImageModerationAsyncTaskResponse {
  /** 该字段用于返回检测对象对应请求参数中的DataId。 */
  DataId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageModerationRequest {
  /** 该字段表示策略的具体编号，用于接口调度，在内容安全控制台中可配置。若不传入Biztype参数（留空），则代表采用默认的识别策略；传入则会在审核时根据业务场景采取不同的审核策略。备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。 */
  BizType?: string;
  /** 该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符**。 */
  DataId?: string;
  /** 该字段表示待检测图片文件内容的Base64编码，图片**大小不超过5MB**，建议**分辨率不低于256x256**，否则可能会影响识别效果。备注： **该字段与FileUrl必须选择输入其中一个**。 */
  FileContent?: string;
  /** 该字段表示待检测图片文件的访问链接，图片支持PNG、JPG、JPEG、BMP、GIF、WEBP格式，**大小不超过5MB**，建议**分辨率不低于256x256**；图片下载时间限制为3秒，超过则会返回下载超时；由于网络安全策略，**送审带重定向的链接，可能引起下载失败**，请尽量避免，比如Http返回302状态码的链接，可能导致接口返回ResourceUnavailable.ImageDownloadError。备注：**该字段与FileContent必须选择输入其中一个**。 */
  FileUrl?: string;
  /** **GIF/长图检测专用**，用于表示GIF截帧频率（每隔多少张图片抽取一帧进行检测），长图则按照长边：短边取整计算要切割的总图数；默认值为0，此时只会检测GIF的第一帧或对长图不进行切分处理。备注：Interval与MaxFrames参数需要组合使用。例如，Interval=3, MaxFrames=400，则代表在检测GIF/长图时，将每间隔2帧检测一次且最多检测400帧。 */
  Interval?: number;
  /** **GIF/长图检测专用**，用于标识最大截帧数量；默认值为1，此时只会检测输入GIF的第一帧或对长图不进行切分处理（可能会造成处理超时）。备注：Interval与MaxFrames参数需要组合使用。例如，Interval=3, MaxFrames=400，则代表在检测GIF/长图时，将每间隔2帧检测一次且最多检测400帧。 */
  MaxFrames?: number;
  /** 该字段表示待检测对象对应的用户相关信息，若填入则可甄别相应违规风险用户。 */
  User?: User;
  /** 该字段表示待检测对象对应的设备相关信息，若填入则可甄别相应违规风险设备。 */
  Device?: Device;
}

declare interface ImageModerationResponse {
  /** 该字段用于返回Label标签下的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion?: string;
  /** 该字段用于返回检测结果（LabelResults）中所对应的**优先级最高的恶意标签**，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label?: string;
  /** 该字段用于返回检测结果所命中优先级最高的恶意标签下的子标签名称，如：*色情--性行为*；若未命中任何子标签则返回空字符串。 */
  SubLabel?: string;
  /** 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表图片越有可能属于当前返回的标签；如：*色情 99*，则表明该图片非常有可能属于色情内容；*色情 0*，则表明该图片不属于色情内容。 */
  Score?: number;
  /** 该字段用于返回分类模型命中的恶意标签的详细识别结果，包括涉黄、广告等令人反感、不安全或不适宜的内容类型识别结果。 */
  LabelResults?: LabelResult[] | null;
  /** 该字段用于返回物体检测模型的详细检测结果；包括：实体、广告台标、二维码等内容命中的标签名称、标签分数、坐标信息、场景识别结果、建议操作等内容审核信息；详细返回值信息可参阅对应的数据结构（ObjectResults）描述。 */
  ObjectResults?: ObjectResult[] | null;
  /** 该字段用于返回OCR文本识别的详细检测结果；包括：文本坐标信息、文本识别结果、建议操作等内容审核信息；详细返回值信息可参阅对应的数据结构（OcrResults）描述。 */
  OcrResults?: OcrResult[] | null;
  /** 该字段用于返回基于图片风险库（风险黑库与正常白库）识别的结果,详细返回值信息可参阅对应的数据结构（LibResults）描述。备注：图片风险库目前**暂不支持自定义库**。 */
  LibResults?: LibResult[] | null;
  /** 该字段用于返回检测对象对应请求参数中的DataId。 */
  DataId?: string;
  /** 该字段用于返回检测对象对应请求参数中的BizType。 */
  BizType?: string;
  /** 该字段用于返回根据您的需求配置的额外附加信息（Extra），如未配置则默认返回值为空。备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。 */
  Extra?: string | null;
  /** 该字段用于返回检测对象对应的MD5校验值，以方便校验文件完整性。 */
  FileMD5?: string;
  /** 该字段用于返回仅识别图片元素的模型结果；包括：场景模型命中的标签、置信度和位置信息 */
  RecognitionResults?: RecognitionResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20200713 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-07-13' } }

  /** Device结果 */
  interface Device {
    /** 发表消息设备IP */
    Ip?: string;
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
    /** IP地址类型 0 代表ipv4 1 代表ipv6 */
    IpType?: number;
  }

  /** 分类模型命中子标签结果 */
  interface LabelDetailItem {
    /** 序号 */
    Id: number | null;
    /** 子标签名称 */
    Name: string | null;
    /** 子标签分数 */
    Score: number | null;
  }

  /** 分类模型命中结果 */
  interface LabelResult {
    /** 场景识别结果 */
    Scene: string;
    /** 建议您拿到判断结果后的执行操作。建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过 */
    Suggestion: string;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。以及令人反感、不安全或不适宜的内容类型。 */
    Label: string;
    /** 子标签检测结果 */
    SubLabel: string | null;
    /** 该标签模型命中的分值 */
    Score: number;
    /** 分类模型命中子标签结果 */
    Details: LabelDetailItem[] | null;
  }

  /** 自定义库/黑白库明细 */
  interface LibDetail {
    /** 序号 */
    Id: number;
    /** 仅当Label为Custom自定义关键词时有效，表示自定义库id */
    LibId: string;
    /** 仅当Label为Custom自定义关键词时有效，表示自定义库名称 */
    LibName: string | null;
    /** 图片ID */
    ImageId: string;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。以及其他令人反感、不安全或不适宜的内容类型。 */
    Label: string;
    /** 自定义标签 */
    Tag: string | null;
    /** 命中的模型分值 */
    Score: number;
  }

  /** 黑白库结果明细 */
  interface LibResult {
    /** 场景识别结果 */
    Scene: string;
    /** 建议您拿到判断结果后的执行操作。建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过 */
    Suggestion: string;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。以及令人反感、不安全或不适宜的内容类型。 */
    Label: string;
    /** 子标签检测结果 */
    SubLabel: string | null;
    /** 该标签模型命中的分值 */
    Score: number;
    /** 黑白库结果明细 */
    Details: LibDetail[] | null;
  }

  /** 坐标 */
  interface Location {
    /** 左上角横坐标 */
    X: number;
    /** 左上角纵坐标 */
    Y: number;
    /** 宽度 */
    Width: number;
    /** 高度 */
    Height: number;
    /** 检测框的旋转角度 */
    Rotate: number;
  }

  /** 实体检测结果明细，当检测场景为实体、广告台标、二维码时表示模型检测目标框的标签名称、标签值、标签分数以及检测框的位置信息。 */
  interface ObjectDetail {
    /** 序号 */
    Id: number;
    /** 标签名称 */
    Name: string;
    /** 标签值，当标签为二维码时，表示URL地址，如Name为QrCode时，Value为"http//abc.com/aaa" */
    Value: string;
    /** 分数 */
    Score: number;
    /** 检测框坐标 */
    Location: Location;
    /** 二级标签名称 */
    SubLabel: string;
    /** 图库或人脸库id */
    GroupId?: string | null;
    /** 图或人脸id */
    ObjectId?: string | null;
  }

  /** 实体检测结果详情：实体、广告台标、二维码 */
  interface ObjectResult {
    /** 场景识别结果 */
    Scene: string;
    /** 建议您拿到判断结果后的执行操作。建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过 */
    Suggestion: string;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。以及令人反感、不安全或不适宜的内容类型。 */
    Label: string;
    /** 子标签检测结果 */
    SubLabel: string | null;
    /** 该标签模型命中的分值 */
    Score: number;
    /** 实体名称 */
    Names: string[] | null;
    /** 实体检测结果明细 */
    Details: ObjectDetail[] | null;
  }

  /** OCR结果检测详情 */
  interface OcrResult {
    /** 场景识别结果 */
    Scene: string;
    /** 建议您拿到判断结果后的执行操作。建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过 */
    Suggestion: string;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。以及令人反感、不安全或不适宜的内容类型。 */
    Label: string;
    /** 子标签检测结果 */
    SubLabel: string;
    /** 该标签模型命中的分值 */
    Score: number;
    /** ocr结果详情 */
    Details: OcrTextDetail[];
    /** ocr识别出的文本结果 */
    Text: string;
    /** 是否命中结果，0 未命中 1命中 */
    HitFlag: number;
  }

  /** OCR文本结果详情 */
  interface OcrTextDetail {
    /** OCR文本内容 */
    Text: string;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。以及令人反感、不安全或不适宜的内容类型。 */
    Label: string;
    /** 仅当Label为Custom自定义关键词时有效，表示自定义库id */
    LibId: string;
    /** 仅当Label为Custom自定义关键词时有效，表示自定义库名称 */
    LibName: string;
    /** 该标签下命中的关键词 */
    Keywords: string[];
    /** 该标签模型命中的分值 */
    Score: number;
    /** OCR位置 */
    Location: Location;
    /** OCR文本识别置信度 */
    Rate: number;
    /** OCR文本命中的二级标签 */
    SubLabel: string;
  }

  /** 识别类型标签结果信息 */
  interface RecognitionResult {
    /** 当前可能的取值：Scene（图片场景模型） */
    Label?: string | null;
    /** Label对应模型下的识别标签信息 */
    Tags?: RecognitionTag[] | null;
  }

  /** 识别类型标签信息 */
  interface RecognitionTag {
    /** 标签名称 */
    Name?: string | null;
    /** 置信分：0～100，数值越大表示置信度越高 */
    Score?: number | null;
    /** 标签位置信息，若模型无位置信息，则可能为零值 */
    Location?: Location | null;
  }

  /** User结果 */
  interface User {
    /** 业务用户ID 如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。 */
    UserId?: string;
    /** 业务用户ID类型 "1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string" */
    AccountType?: string;
    /** 用户昵称 */
    Nickname?: string;
    /** 性别 默认0 未知 1 男性 2 女性 */
    Gender?: number;
    /** 年龄 默认0 未知 */
    Age?: number;
    /** 用户等级，默认0 未知 1 低 2 中 3 高 */
    Level?: number;
    /** 手机号 */
    Phone?: string;
    /** 用户简介，长度不超过5000字 */
    Desc?: string;
    /** 用户头像图片链接 */
    HeadUrl?: string;
  }

  interface ImageModerationRequest {
    /** 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略。 -- 该字段暂未开放。 */
    BizType?: string;
    /** 数据ID，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符 */
    DataId?: string;
    /** 数据Base64编码，图片检测接口为图片文件内容，大小不能超过5M */
    FileContent?: string;
    /** 图片资源访问链接，__与FileContent参数必须二选一输入__ 。由于网络安全策略，送审带重定向的链接，可能引起下载失败，请尽量避免，比如Http返回302状态码的链接，可能导致接口返回ResourceUnavailable.ImageDownloadError */
    FileUrl?: string;
    /** 截帧频率，GIF图/长图检测专用，默认值为0，表示只会检测GIF图/长图的第一帧 */
    Interval?: number;
    /** GIF图/长图检测专用，代表均匀最大截帧数量，默认值为1（即只取GIF第一张，或长图不做切分处理（可能会造成处理超时））。 */
    MaxFrames?: number;
    /** 账号相关信息字段，填入后可识别违规风险账号。 */
    User?: User;
    /** 设备相关信息字段，填入后可识别违规风险设备。 */
    Device?: Device;
  }

  interface ImageModerationResponse {
    /** 数据是否属于恶意类型。0：正常，1：可疑； */
    HitFlag?: number;
    /** 建议您拿到判断结果后的执行操作。建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过 */
    Suggestion?: string;
    /** 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。以及令人反感、不安全或不适宜的内容类型。 */
    Label?: string;
    /** 子标签名称，如色情--性行为；当未命中子标签时，返回空字符串； */
    SubLabel?: string;
    /** 机器判断当前分类的置信度，取值范围：0.00~100.00。分数越高，表示越有可能属于当前分类。（如：色情 99.99，则该样本属于色情的置信度非常高。） */
    Score?: number;
    /** 智能模型的识别结果，包括涉黄、广告等令人反感、不安全或不适宜的内容类型识别结果。 */
    LabelResults?: LabelResult[] | null;
    /** 物体检测模型的审核结果，包括实体、广告台标/二维码等物体坐标信息与内容审核信息。 */
    ObjectResults?: ObjectResult[] | null;
    /** OCR识别后的文本识别结果，包括文本所处图片的OCR坐标信息以及图片文本的识别结果。 */
    OcrResults?: OcrResult[] | null;
    /** 基于图片风险库识别的结果。风险库包括不安全黑库与正常白库的结果。 */
    LibResults?: LibResult[] | null;
    /** 请求参数中的DataId。 */
    DataId?: string;
    /** 您在入参时所填入的Biztype参数。 -- 该字段暂未开放。 */
    BizType?: string;
    /** 扩展字段，用于特定信息返回，不同客户/Biztype下返回信息不同。 */
    Extra?: string | null;
    /** 该字段用于返回仅识别图片元素的模型结果；包括：场景模型命中的标签、置信度和位置信息 */
    RecognitionResults?: RecognitionResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Ims 图片内容安全} */
declare interface Ims {
  (): Versions;
  /** 图片异步检测 {@link CreateImageModerationAsyncTaskRequest} {@link CreateImageModerationAsyncTaskResponse} */
  CreateImageModerationAsyncTask(data: CreateImageModerationAsyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageModerationAsyncTaskResponse>;
  /** 图片同步检测 {@link ImageModerationRequest} {@link ImageModerationResponse} */
  ImageModeration(data?: ImageModerationRequest, config?: AxiosRequestConfig): AxiosPromise<ImageModerationResponse>;
  /** 图片同步检测 {@link V20200713.ImageModerationRequest} {@link V20200713.ImageModerationResponse} */
  ImageModeration(data: V20200713.ImageModerationRequest, config: AxiosRequestConfig & V20200713.VersionHeader): AxiosPromise<V20200713.ImageModerationResponse>;
}

export declare type Versions = ["2020-12-29", "2020-07-13"];

export default Ims;
